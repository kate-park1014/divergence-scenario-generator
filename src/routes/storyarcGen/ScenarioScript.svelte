<script lang="ts" module>
	import type { StoryArc } from '$lib/types';

	// output_list/<theme>_chapter_XX.json 을 "화자: 대사" 대본 줄로 변환.
	type Text = Record<string, string | string[] | undefined>;
	type Dialogue = {
		type: 'speech' | 'direction';
		speaker: string;
		emotion?: string;
		content?: Text;
		action?: string;
	};
	type Scenario = {
		order: number;
		act: string;
		actors?: Record<string, { name?: Text }>;
		prologue?: Text;
		epilogue?: Text;
		rooms: { id: number; dialogue: Dialogue[] }[];
	};
	export type Chapter = { scenarios: Scenario[] };

	export type Line =
		| { kind: 'episode'; text: string }
		| { kind: 'section'; text: string }
		| { kind: 'prose'; text: string }
		| { kind: 'speech'; speaker: string; emotion: string; text: string; role: string }
		| { kind: 'direction'; text: string };

	export const LANGS = ['korean', 'english', 'japanese', 'chinese', 'french', 'spanish', 'vietnamese', 'thai', 'hindi'];

	const ACTIONS: Record<string, string> = { enter: '등장', exit: '퇴장', shake: '흔들림', focus: '포커스' };

	// 요청 언어 → 비었으면(번역 전) korean → 그래도 없으면 처음 채워진 언어
	const filled = (x: string | string[] | undefined) => (Array.isArray(x) ? x.length > 0 : !!x);
	function pickRaw(t: Text | undefined, lang: string): string | string[] | undefined {
		if (!t) return undefined;
		return [t[lang], t.korean].find(filled) ?? Object.values(t).find(filled);
	}
	function pick(t: Text | undefined, lang: string): string {
		const v = pickRaw(t, lang);
		return Array.isArray(v) ? v.join('\n') : (v ?? '');
	}
	function pickLines(t: Text | undefined, lang: string): string[] {
		const v = pickRaw(t, lang);
		return Array.isArray(v) ? v : v ? v.split('\n') : [];
	}

	function speakerOf(sp: string, sc: Scenario, arc: StoryArc | undefined, lang: string): { name: string; role: string } {
		if (sp === 'narrator') return { name: '나레이션', role: 'narrator' };
		if (sp === 'character_any') return { name: '파티원', role: 'party' };
		const m = sp.match(/^character_(\d)$/);
		if (m) return { name: `파티원 ${m[1]}`, role: 'party' };
		if (sp === 'boss') return { name: arc?.boss_name_korean ?? arc?.final_boss?.name ?? '보스', role: 'boss' };
		if (sp === 'random_boss') {
			const title = arc?.scenarioOutline?.[sc.order - 1]?.random_boss_title;
			return { name: title ? `일반 보스(${title})` : '일반 보스', role: 'boss' };
		}
		return { name: pick(sc.actors?.[sp]?.name, lang) || sp, role: 'npc' };
	}

	export function toLines(chapter: Chapter, arc: StoryArc | undefined, lang = 'korean'): Line[] {
		const out: Line[] = [];
		for (const sc of [...chapter.scenarios].sort((a, b) => a.order - b.order)) {
			const title = arc?.scenarioOutline?.[sc.order - 1]?.title;
			out.push({ kind: 'episode', text: `${sc.order}화 · ${sc.act}${title ? ` — ${title}` : ''}` });
			const pro = pickLines(sc.prologue, lang);
			if (pro.length) {
				out.push({ kind: 'section', text: '프롤로그' });
				pro.forEach((text) => out.push({ kind: 'prose', text }));
			}
			for (const room of sc.rooms) {
				out.push({ kind: 'section', text: `방 ${room.id}` });
				for (const d of room.dialogue) {
					const who = speakerOf(d.speaker, sc, arc, lang);
					if (d.type === 'direction') {
						out.push({ kind: 'direction', text: `${who.name} ${ACTIONS[d.action ?? ''] ?? d.action ?? ''}` });
					} else {
						out.push({
							kind: 'speech',
							speaker: who.name,
							role: who.role,
							emotion: d.emotion && d.emotion !== 'base' ? d.emotion : '',
							text: pick(d.content, lang)
						});
					}
				}
			}
			const epi = pickLines(sc.epilogue, lang);
			if (epi.length) {
				out.push({ kind: 'section', text: '에필로그' });
				epi.forEach((text) => out.push({ kind: 'prose', text }));
			}
		}
		return out;
	}

	export function toText(lines: Line[]): string {
		return lines
			.map((l) => {
				if (l.kind === 'episode') return `\n# ${l.text}`;
				if (l.kind === 'section') return `\n[${l.text}]`;
				if (l.kind === 'direction') return `  (${l.text})`;
				if (l.kind === 'speech') return `${l.speaker}${l.emotion ? ` (${l.emotion})` : ''}: ${l.text}`;
				return l.text;
			})
			.join('\n')
			.trim();
	}
</script>

<script lang="ts">
	let { chapter, arc, lang = 'korean' }: { chapter: Chapter; arc: StoryArc | undefined; lang?: string } = $props();

	const lines = $derived(toLines(chapter, arc, lang));
</script>

<div class="script">
	{#each lines as l}
		{#if l.kind === 'episode'}
			<h4 class="episode">{l.text}</h4>
		{:else if l.kind === 'section'}
			<div class="section">[{l.text}]</div>
		{:else if l.kind === 'prose'}
			<p class="prose">{l.text}</p>
		{:else if l.kind === 'direction'}
			<p class="direction">({l.text})</p>
		{:else}
			<p class="speech">
				<span class="speaker {l.role}">{l.speaker}</span>{#if l.emotion}<span class="emotion">({l.emotion})</span>{/if}:
				{l.text}
			</p>
		{/if}
	{/each}
</div>

<style>
	.script {
		max-height: 560px;
		overflow: auto;
		font-size: 0.85rem;
		line-height: 1.6;
		color: #ccc;
	}

	.episode {
		margin: 1.25rem 0 0.25rem;
		font-size: 0.95rem;
		color: #c8a85a;
	}

	.episode:first-child {
		margin-top: 0;
	}

	.section {
		margin: 0.75rem 0 0.25rem;
		font-family: monospace;
		font-size: 0.75rem;
		color: #666;
	}

	p {
		margin: 0.1rem 0;
	}

	.prose {
		color: #999;
		font-style: italic;
	}

	.direction {
		color: #555;
		font-size: 0.78rem;
		padding-left: 1rem;
	}

	.speaker {
		font-weight: 700;
	}

	.speaker.narrator {
		color: #888;
	}

	.speaker.party {
		color: #61afef;
	}

	.speaker.npc {
		color: #98c379;
	}

	.speaker.boss {
		color: #e06c75;
	}

	.emotion {
		margin-left: 0.25rem;
		font-size: 0.75rem;
		color: #777;
	}
</style>
