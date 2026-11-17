/**
 * 이야기 스타일 (src/lib/data/storyarc/styles/<key>.md).
 * 작가 소개·분위기·문체·톤·일반 보스 호칭처럼 "어떻게 쓰는지"만 모은 파일.
 * 이야기 틀(넷쇼트 장치·피해자, cozy 오해·화해)은 각 프롬프트에 그대로 있다.
 * 넷쇼트·cozy 의 이야기·대본 프롬프트 4개가 이 값을 읽는다. 기본은 넷쇼트 = netshort, cozy = cozy.
 */

const FILES = import.meta.glob('../data/storyarc/styles/*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;

export type StoryStyle = {
	key: string;
	/** 비면 재료 파일의 theme_description */
	theme: string;
	/** 감정 톤 후보. 이야기마다 하나 뽑음 */
	tones: string[];
	/** 이야기 단계 첫 줄 다음 줄 */
	storyWriter: string;
	/** 이야기 단계 [문체] 에 더하는 줄 ("- …") */
	storyWriting: string;
	/** 대본 단계 "당신은 ___입니다." */
	scenarioWriter: string;
	/** 대본 단계 "- 분위기: ___". {{tone}} 자리 */
	scenarioMood: string;
	/** 1~4화 일반 보스 호칭 */
	bossCalls: string[];
};

/** "## <제목>" 섹션의 첫 코드 블록 (섹션이나 블록이 없으면 빈 문자열) */
function section(md: string, heading: string): string {
	const at = md.search(new RegExp(`^## ${heading}\\s*$`, 'm'));
	if (at < 0) return '';
	const rest = md.slice(at).replace(/^.*\n/, '');
	const body = rest.slice(0, rest.search(/^## /m) < 0 ? undefined : rest.search(/^## /m));
	return body.match(/```[^\n]*\n([\s\S]*?)```/)?.[1].trim() ?? '';
}

const lines = (t: string) => t.split('\n').map((l) => l.trim()).filter(Boolean);

function parse(key: string, raw: string): StoryStyle {
	const md = raw.replace(/\r\n/g, '\n');
	const s: StoryStyle = {
		key,
		theme: section(md, '테마'),
		tones: lines(section(md, '톤')),
		storyWriter: section(md, '이야기 작가'),
		storyWriting: lines(section(md, '이야기 문체'))
			.map((l) => (l.startsWith('- ') ? l : `- ${l}`))
			.join('\n'),
		scenarioWriter: section(md, '대본 작가'),
		scenarioMood: section(md, '대본 분위기'),
		bossCalls: lines(section(md, '일반 보스 호칭'))
	};
	const missing = [
		!s.scenarioWriter && '대본 작가',
		!s.scenarioMood && '대본 분위기',
		!s.bossCalls.length && '일반 보스 호칭',
		s.scenarioMood.includes('{{tone}}') && !s.tones.length && '톤 (대본 분위기에 {{tone}} 이 있음)'
	].filter(Boolean);
	if (missing.length) throw new Error(`styles/${key}.md 에 ${missing.join(', ')} 이(가) 비었습니다.`);
	return s;
}

// README.md 는 설명서라 스타일에서 뺌
const STYLES = new Map(
	Object.entries(FILES)
		.map(([path, raw]) => [path.split('/').pop()!.replace(/\.md$/, ''), raw] as const)
		.filter(([key]) => key !== 'README')
);

export const STYLE_KEYS = [...STYLES.keys()];

export function getStyle(key: string): StoryStyle {
	const raw = STYLES.get(key);
	if (raw === undefined) throw new Error(`스타일 "${key}" 가 없습니다. 있는 것: ${STYLE_KEYS.join(', ')} (src/lib/data/storyarc/styles/)`);
	return parse(key, raw);
}

/** 톤 하나 뽑기 (톤 목록이 비면 빈 문자열) */
export const pickTone = (style: StoryStyle, rand: () => number = Math.random) =>
	style.tones.length ? style.tones[Math.floor(rand() * style.tones.length)] : '';

/** 저장된 톤이 이 스타일 것이면 그대로, 아니면 새로 뽑음 */
export const keepTone = (style: StoryStyle, saved: string | undefined, rand: () => number = Math.random) =>
	saved && style.tones.includes(saved) ? saved : pickTone(style, rand);

/** 대본 분위기 문장. 톤이 없으면 톤 목록 첫째 */
export const scenarioMood = (style: StoryStyle, tone?: string) => style.scenarioMood.replace(/\{\{tone\}\}/g, tone || style.tones[0] || '');

/** 일반 보스 호칭을 "놈", "그 사내" 꼴로 */
export const bossCallText = (style: StoryStyle) => style.bossCalls.map((w) => `"${w}"`).join(', ');
