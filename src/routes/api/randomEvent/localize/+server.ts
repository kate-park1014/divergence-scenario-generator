import { GEMINI_API_KEY } from '$env/static/private';
import { json } from '@sveltejs/kit';
import { readFile, mkdir, writeFile } from 'fs/promises';
import { join } from 'path';
import type { RequestHandler } from './$types';

const GEMINI_URL = 'https://generativelanguage.googleapis.com/v1beta/openai/chat/completions';
const CHUNK_SIZE = 10;
const TARGET_LANGS = [
	'english',
	'japanese',
	'chinese',
	'french',
	'spanish',
	'vietnamese',
	'thai',
	'hindi'
] as const;

type LangKey = (typeof TARGET_LANGS)[number];
type Translations = Record<string, Record<LangKey, string>>;

// ─── 텍스트 추출 ───────────────────────────────────────────────────────────────
// ID 규칙: {eventIndex}:title | {eventIndex}:narration | {eventIndex}:choice:{0|1}:{text|post|post_success|post_fail}

type TextEntry = { id: string; text: string };

type RawChoice = { text: string; post?: string; post_success?: string; post_fail?: string };

function extractTexts(events: Record<string, unknown>[]): TextEntry[] {
	const entries: TextEntry[] = [];

	events.forEach((event, ei) => {
		entries.push({ id: `${ei}:title`, text: event.title as string });
		entries.push({ id: `${ei}:narration`, text: event.narration as string });

		const choices = event.choices as RawChoice[];
		choices.forEach((choice, ci) => {
			entries.push({ id: `${ei}:choice:${ci}:text`, text: choice.text });
			if (choice.post) entries.push({ id: `${ei}:choice:${ci}:post`, text: choice.post });
			if (choice.post_success) entries.push({ id: `${ei}:choice:${ci}:post_success`, text: choice.post_success });
			if (choice.post_fail) entries.push({ id: `${ei}:choice:${ci}:post_fail`, text: choice.post_fail });
		});
	});

	return entries;
}

// ─── 번역 머지 ────────────────────────────────────────────────────────────────

function mergeTranslations(
	events: Record<string, unknown>[],
	translations: Translations
): Record<string, unknown>[] {
	return events.map((event, ei) => {
		const choices = event.choices as RawChoice[];

		return {
			...event,
			title: {
				korean: event.title,
				...Object.fromEntries(TARGET_LANGS.map((lang) => [lang, translations[`${ei}:title`]?.[lang] ?? '']))
			},
			narration: {
				korean: event.narration,
				...Object.fromEntries(
					TARGET_LANGS.map((lang) => [lang, translations[`${ei}:narration`]?.[lang] ?? ''])
				)
			},
			choices: choices.map((choice, ci) => {
				const localized: Record<string, unknown> = {
					text: {
						korean: choice.text,
						...Object.fromEntries(
							TARGET_LANGS.map((lang) => [lang, translations[`${ei}:choice:${ci}:text`]?.[lang] ?? ''])
						)
					}
				};

				if (choice.post) {
					localized.post = {
						korean: choice.post,
						...Object.fromEntries(
							TARGET_LANGS.map((lang) => [lang, translations[`${ei}:choice:${ci}:post`]?.[lang] ?? ''])
						)
					};
				}
				if (choice.post_success) {
					localized.post_success = {
						korean: choice.post_success,
						...Object.fromEntries(
							TARGET_LANGS.map((lang) => [lang, translations[`${ei}:choice:${ci}:post_success`]?.[lang] ?? ''])
						)
					};
				}
				if (choice.post_fail) {
					localized.post_fail = {
						korean: choice.post_fail,
						...Object.fromEntries(
							TARGET_LANGS.map((lang) => [lang, translations[`${ei}:choice:${ci}:post_fail`]?.[lang] ?? ''])
						)
					};
				}

				return localized;
			})
		};
	});
}

// ─── Gemini 배치 번역 ─────────────────────────────────────────────────────────

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
Translate these Korean roguelike game event texts into English, Japanese, Chinese (Simplified), French, Spanish, Vietnamese, Thai, and Hindi.
Keep the tone mysterious and immersive. Use natural, game-appropriate language. Match the brevity of the original.

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

	const args =
		typeof toolCall.function.arguments === 'string'
			? JSON.parse(toolCall.function.arguments)
			: toolCall.function.arguments;

	return args.translations as Translations;
}

// ─── POST 핸들러 ──────────────────────────────────────────────────────────────

export const POST: RequestHandler = async ({ request }) => {
	const { filename } = await request.json();

	// 경로 트래버설 방지
	if (!/^[\w-]+\.json$/.test(filename)) {
		return json({ error: 'Invalid filename' }, { status: 400 });
	}

	const srcPath = join(process.cwd(), 'randomEvent_list', filename);

	let raw: string;
	try {
		raw = await readFile(srcPath, 'utf-8');
	} catch {
		return json({ error: 'File not found' }, { status: 404 });
	}

	const parsed = JSON.parse(raw) as {
		theme: string;
		generated_at: string;
		events: Record<string, unknown>[];
	};

	const entries = extractTexts(parsed.events);
	if (entries.length === 0) {
		return json({ error: 'No translatable text found' }, { status: 400 });
	}

	// 10개씩 청킹 → 순차 Gemini 호출
	const allTranslations: Translations = {};
	const totalChunks = Math.ceil(entries.length / CHUNK_SIZE);

	for (let i = 0; i < entries.length; i += CHUNK_SIZE) {
		const chunk = entries.slice(i, i + CHUNK_SIZE);
		const chunkIndex = Math.floor(i / CHUNK_SIZE) + 1;
		console.log(`[randomEvent/localize] ${filename} — chunk ${chunkIndex}/${totalChunks} (${chunk.length} texts)`);

		try {
			const result = await translateChunk(chunk);
			Object.assign(allTranslations, result);
		} catch (err) {
			const msg = err instanceof Error ? err.message : String(err);
			return json({ error: `Chunk ${chunkIndex} failed: ${msg}` }, { status: 500 });
		}
	}

	const localizedEvents = mergeTranslations(parsed.events, allTranslations);

	const outDir = join(process.cwd(), 'randomEvent_list_localized');
	await mkdir(outDir, { recursive: true });

	const output = {
		theme: parsed.theme,
		generated_at: parsed.generated_at,
		localized_at: new Date().toISOString(),
		events: localizedEvents
	};

	await writeFile(join(outDir, filename), JSON.stringify(output, null, '\t'), 'utf-8');

	return json({ ok: true, filename, totalTexts: entries.length, chunks: totalChunks });
};
