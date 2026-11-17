import { GEMINI_API_KEY } from '$env/static/private';

// 시나리오 1개(random_boss_title/prologue/epilogue/rooms)의 korean 텍스트를 8개 언어로 번역해 채운다.
// /api/translate (generated .ts) 와 /api/output/translate (output_list JSON) 가 공유.

const GEMINI_URL = 'https://generativelanguage.googleapis.com/v1beta/openai/chat/completions';
const CHUNK_SIZE = 10;
export const TARGET_LANGS = ['english', 'japanese', 'chinese', 'french', 'spanish', 'vietnamese', 'thai', 'hindi'] as const;

// ─── 텍스트 추출 ───────────────────────────────────────────────────────────────

type TextEntry = { id: string; text: string };

function extractTexts(data: Record<string, unknown>): TextEntry[] {
	const entries: TextEntry[] = [];

	// random_boss_title.korean (1~4화 일반 보스 직업)
	const bossTitle = data.random_boss_title as Record<string, unknown> | undefined;
	if (bossTitle?.korean) entries.push({ id: 'random_boss_title', text: bossTitle.korean as string });

	// prologue.korean[]
	const prologue = data.prologue as Record<string, unknown> | undefined;
	const prologueLines = (prologue?.korean ?? []) as string[];
	prologueLines.forEach((text, i) => {
		entries.push({ id: `prologue:${i}`, text });
	});

	// epilogue.korean[]
	const epilogue = data.epilogue as Record<string, unknown> | undefined;
	const epilogueLines = (epilogue?.korean ?? []) as string[];
	epilogueLines.forEach((text, i) => {
		entries.push({ id: `epilogue:${i}`, text });
	});

	// rooms
	const rooms = (data.rooms ?? []) as Record<string, unknown>[];
	for (const room of rooms) {
		const roomId = room.id;
		for (const slot of ['dialogue', 'win_dialogue', 'lose_dialogue']) {
			const items = (room[slot] ?? []) as Record<string, unknown>[];
			items.forEach((item, i) => {
				if (item.type === 'speech') {
					const content = item.content as Record<string, unknown> | undefined;
					if (content?.korean) {
						entries.push({ id: `room:${roomId}:${slot}:${i}`, text: content.korean as string });
					}
				}
			});
		}
	}

	return entries;
}

// ─── 번역 머지 ────────────────────────────────────────────────────────────────

type Translations = Record<string, Record<string, string>>;

function mergeTranslations(data: Record<string, unknown>, translations: Translations): Record<string, unknown> {
	const result = JSON.parse(JSON.stringify(data)) as Record<string, unknown>;

	// prologue / epilogue 배열 언어별로 채우기
	const prologue = result.prologue as Record<string, unknown> | undefined;
	if (prologue) {
		for (const lang of TARGET_LANGS) prologue[lang] = [];
	}
	const epilogue = result.epilogue as Record<string, unknown> | undefined;
	if (epilogue) {
		for (const lang of TARGET_LANGS) epilogue[lang] = [];
	}

	for (const [id, langs] of Object.entries(translations)) {
		const parts = id.split(':');

		if (parts[0] === 'random_boss_title') {
			const bossTitle = result.random_boss_title as Record<string, unknown>;
			for (const lang of TARGET_LANGS) bossTitle[lang] = langs[lang] ?? '';
		} else if (parts[0] === 'prologue') {
			const idx = Number(parts[1]);
			for (const lang of TARGET_LANGS) {
				(prologue![lang] as string[])[idx] = langs[lang] ?? '';
			}
		} else if (parts[0] === 'epilogue') {
			const idx = Number(parts[1]);
			for (const lang of TARGET_LANGS) {
				(epilogue![lang] as string[])[idx] = langs[lang] ?? '';
			}
		} else if (parts[0] === 'room') {
			const roomId = Number(parts[1]);
			const slot = parts[2];
			const dialogueIdx = Number(parts[3]);

			const rooms = result.rooms as Record<string, unknown>[];
			const room = rooms.find((r) => r.id === roomId);
			if (!room) continue;

			const items = room[slot] as Record<string, unknown>[] | undefined;
			const dialogueItem = items?.[dialogueIdx];
			if (!dialogueItem) continue;

			const content = dialogueItem.content as Record<string, unknown>;
			for (const lang of TARGET_LANGS) {
				content[lang] = langs[lang] ?? '';
			}
		}
	}

	return result;
}

// ─── Gemini 배치 번역 (10개씩 청킹) ───────────────────────────────────────────

// 결과는 {id, ...언어} 배열로 받는다. id 를 객체 키로 받으면 Gemini 가 키의 ':' 뒤를 잘라
// ("room:1:dialogue:0" → "room") 머지가 조용히 0건이 됐다.
const langProps = Object.fromEntries(TARGET_LANGS.map((l) => [l, { type: 'string' }]));
const translateTool = {
	type: 'function',
	function: {
		name: 'provide_translations',
		description: 'Provide translations for Korean game text entries into 8 languages.',
		parameters: {
			type: 'object',
			properties: {
				translations: {
					type: 'array',
					description: 'One item per input text. id must be copied exactly from the input.',
					items: {
						type: 'object',
						properties: { id: { type: 'string' }, ...langProps },
						required: ['id', ...TARGET_LANGS]
					}
				}
			},
			required: ['translations']
		}
	}
};

async function translateChunk(chunk: TextEntry[]): Promise<Translations> {
	const textMap = Object.fromEntries(chunk.map((e) => [e.id, e.text]));

	const prompt = `You are a professional game localization expert.
Translate these Korean game dialogue and narrative texts into English, Japanese, Chinese (Simplified), French, Spanish, Vietnamese, Thai, and Hindi.
Keep the tone, emotion, and brevity of the original. Use natural game-appropriate language.
Do not add quotation marks (" " 「」 etc.) that are not in the Korean original.
Return exactly one item per text, with "id" copied character-for-character from the input key.

Texts to translate (key: ID, value: Korean text):
${JSON.stringify(textMap, null, 2)}`;

	const body = {
		model: 'gemini-3.6-flash',
		messages: [{ role: 'user', content: prompt }],
		tools: [translateTool],
		tool_choice: { type: 'function', function: { name: 'provide_translations' } }
	};

	const response = await fetch(GEMINI_URL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${GEMINI_API_KEY}`
		},
		body: JSON.stringify(body)
	});

	if (!response.ok) {
		const err = await response.text();
		throw new Error(`Gemini error: ${err}`);
	}

	const data = await response.json();
	const toolCall = data.choices?.[0]?.message?.tool_calls?.[0];
	if (!toolCall) throw new Error('No tool call in Gemini response');

	const args = typeof toolCall.function.arguments === 'string'
		? JSON.parse(toolCall.function.arguments)
		: toolCall.function.arguments;

	const out: Translations = {};
	for (const item of (args.translations ?? []) as Record<string, string>[]) {
		if (item?.id) out[item.id] = item;
	}
	const missing = chunk.filter((e) => !out[e.id]?.english);
	if (missing.length) throw new Error(`번역 누락 ${missing.length}건 (${missing.map((e) => e.id).join(', ')})`);
	return out;
}

/** 시나리오 1개 번역. label 은 로그용. 청크 실패 시 1회 재시도 후 throw. */
export async function translateScenario(
	data: Record<string, unknown>,
	label: string
): Promise<{ translated: Record<string, unknown>; totalTexts: number; chunks: number }> {
	const entries = extractTexts(data);
	if (entries.length === 0) throw new Error('No translatable text found');

	const allTranslations: Translations = {};
	const totalChunks = Math.ceil(entries.length / CHUNK_SIZE);

	for (let i = 0; i < entries.length; i += CHUNK_SIZE) {
		const chunk = entries.slice(i, i + CHUNK_SIZE);
		const chunkIndex = Math.floor(i / CHUNK_SIZE) + 1;
		console.log(`[translate] ${label} — chunk ${chunkIndex}/${totalChunks} (${chunk.length} texts)`);
		try {
			Object.assign(allTranslations, await translateChunk(chunk).catch(() => translateChunk(chunk)));
		} catch (err) {
			const msg = err instanceof Error ? err.message : String(err);
			throw new Error(`Chunk ${chunkIndex} failed: ${msg}`);
		}
	}

	return { translated: mergeTranslations(data, allTranslations), totalTexts: entries.length, chunks: totalChunks };
}
