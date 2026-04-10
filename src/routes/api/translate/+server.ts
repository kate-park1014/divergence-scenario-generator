import { GEMINI_API_KEY } from '$env/static/private';
import { json } from '@sveltejs/kit';
import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';
import { parseScenarioFile } from '$lib/server/parseScenarioFile';
import type { RequestHandler } from './$types';

const GEMINI_URL = 'https://generativelanguage.googleapis.com/v1beta/openai/chat/completions';
const CHUNK_SIZE = 10;
const TARGET_LANGS = ['english', 'japanese', 'chinese', 'french', 'spanish', 'vietnamese', 'thai', 'hindi'] as const;

// ─── 텍스트 추출 ───────────────────────────────────────────────────────────────

type TextEntry = { id: string; text: string };

function extractTexts(data: Record<string, unknown>): TextEntry[] {
	const entries: TextEntry[] = [];

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

		if (parts[0] === 'prologue') {
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

const translateTool = {
	type: 'function',
	function: {
		name: 'provide_translations',
		description: 'Provide translations for Korean game text entries into 8 languages.',
		parameters: {
			type: 'object',
			properties: {
				translations: {
					type: 'object',
					description: 'Keys are text IDs, values are translation objects.',
					additionalProperties: {
						type: 'object',
						properties: {
							english: { type: 'string' },
							japanese: { type: 'string' },
							chinese: { type: 'string' },
							french: { type: 'string' },
							spanish: { type: 'string' },
							vietnamese: { type: 'string' },
							thai: { type: 'string' },
							hindi: { type: 'string' }
						},
						required: ['english', 'japanese', 'chinese', 'french', 'spanish', 'vietnamese', 'thai', 'hindi']
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

Texts to translate (key: ID, value: Korean text):
${JSON.stringify(textMap, null, 2)}`;

	const body = {
		model: 'gemini-2.5-flash',
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

	return args.translations as Translations;
}

// ─── POST 핸들러 ──────────────────────────────────────────────────────────────

export const POST: RequestHandler = async ({ request }) => {
	const { filename } = await request.json();

	// 경로 트래버설 방지
	if (!/^[\w-]+\.ts$/.test(filename)) {
		return json({ error: 'Invalid filename' }, { status: 400 });
	}

	const filepath = join(process.cwd(), 'src/lib/data/generated', filename);
	const varName = filename.replace('.ts', '');

	// 파일 읽기 & 파싱
	let raw: string;
	try {
		raw = await readFile(filepath, 'utf-8');
	} catch {
		return json({ error: 'File not found' }, { status: 404 });
	}

	let data: Record<string, unknown>;
	try {
		data = parseScenarioFile(raw);
	} catch {
		return json({ error: 'Failed to parse file' }, { status: 500 });
	}

	// 한국어 텍스트 추출
	const entries = extractTexts(data);
	if (entries.length === 0) {
		return json({ error: 'No translatable text found' }, { status: 400 });
	}

	// 10개씩 청킹 → 순차 Gemini 호출
	const allTranslations: Translations = {};
	const totalChunks = Math.ceil(entries.length / CHUNK_SIZE);

	for (let i = 0; i < entries.length; i += CHUNK_SIZE) {
		const chunk = entries.slice(i, i + CHUNK_SIZE);
		const chunkIndex = Math.floor(i / CHUNK_SIZE) + 1;
		console.log(`[translate] ${filename} — chunk ${chunkIndex}/${totalChunks} (${chunk.length} texts)`);

		try {
			const result = await translateChunk(chunk);
			Object.assign(allTranslations, result);
		} catch (err) {
			const msg = err instanceof Error ? err.message : String(err);
			return json({ error: `Chunk ${chunkIndex} failed: ${msg}` }, { status: 500 });
		}
	}

	// 번역 머지 & 파일 저장
	const translated = mergeTranslations(data, allTranslations);
	const fileContent = `export const ${varName} = ${JSON.stringify(translated, null, '\t')} as const;\n`;

	await writeFile(filepath, fileContent, 'utf-8');

	return json({ ok: true, totalTexts: entries.length, chunks: totalChunks });
};
