import { SCENARIO_EXAMPLE } from './scenarioExample';
import {
	SPEAKER_RULES,
	PLACEHOLDER_RULES,
	BOSS_SPEAKER_RULES,
	NPC_ENTER_EXIT_RULES,
	DIALOGUE_RULES,
	ROOM_RULES,
	OUTPUT_RULES
} from './chapterRules';
import { getNpcPersona } from '$lib/data/sample/npc';
import { npc_by_theme } from '$lib/data/sample/npc_pool';
import type { StoryArc } from '$lib/types';

export { scenarioTool, buildScenarioTool } from './scenarioTool';

export function buildScenarioPrompt(order: number, storyarc: StoryArc): string {
	const scenario = storyarc.scenarioOutline[order - 1];
	const isFinale = order === 5;

	const worldForPrompt = isFinale
		? storyarc.world
		: { setting: storyarc.world.setting, rule: storyarc.world.rule };

	const actSummaryForPrompt = isFinale
		? storyarc.act_summary
		: { intro: storyarc.act_summary.intro, rising: storyarc.act_summary.rising };

	const foreshadowingForPrompt = isFinale
		? storyarc.global_foreshadowing
		: storyarc.global_foreshadowing.map(({ reveal_context: _omit, ...rest }) => rest);

	const outlineForPrompt = isFinale
		? storyarc.scenarioOutline
		: storyarc.scenarioOutline.map((item) =>
				item.order === 5 ? { ...item, title: '(숨김)', summary: '(숨김)' } : item
			);

	// 이 아크의 NPC (주 NPC 외에도 함께 나올 수 있음)
	const themePool = (npc_by_theme[storyarc.theme as keyof typeof npc_by_theme] ?? []) as readonly {
		key: string;
		name: { korean: string };
	}[];
	const arcNpcList = [...new Set([...Object.keys(storyarc.npc_roles ?? {}), ...storyarc.scenarioOutline.map((s) => s.npc)])]
		.map((key) => {
			const name = themePool.find((n) => n.key === key)?.name.korean ?? key;
			const role = storyarc.npc_roles?.[key]?.role;
			return `- ${key} (${name})${role ? `: ${role}` : ''}`;
		})
		.join('\n');

	const SYSTEM = `당신은 웹툰 작가입니다.
주어진 스토리아크 데이터를 바탕으로 특정 시나리오의 대화 데이터를 작성합니다.
# 핵심 원칙
- 웹툰 형식: 한 대사 = 말풍선 하나. 1~2문장, 짧게 끊는다
- 독자가 대사를 훑어만 봐도 흐름이 읽혀야 한다. 독자가 추론해야만 이해되는 전개는 금지한다.
  - 방(room)마다 일어나는 사건은 하나
  - 방 사이(2, 4번 방 등)에는 별도의 카드 이벤트와 대화가 들어간다. 따라서 각 방은 앞 방의 마지막 대사를 독자가 기억한다고 가정하지 않는다
  - 방 첫 2~3줄 안에 지금 무슨 상황인지 드러낸다. 단, "우리는 지금 ○○에 있다" 같은 설명으로 말하지 말고 캐릭터의 반응이나 행동으로 보여준다
  - 방 안에서 꺼낸 문제·질문은 그 방이 끝나기 전에 답을 준다 (예: "열쇠를 찾아야 해" → 같은 방 안에서 열쇠를 찾거나 문을 여는 방법이 나온다). 답 없이 다음 방으로 넘기지 않는다
  - 인과는 대사로 직접 말한다. 생략된 이유를 독자가 메워야 하는 전개는 금지한다
  - 곁가지 설정 설명이나 같은 감정을 반복하는 대사는 넣지 않는다

- 복선은 자연스럽게 흘려라. "이게 복선입니다" 티 내지 말 것


${SPEAKER_RULES}

${PLACEHOLDER_RULES}

${BOSS_SPEAKER_RULES}

${NPC_ENTER_EXIT_RULES}


${DIALOGUE_RULES}

${ROOM_RULES}

${OUTPUT_RULES}


## 출력 예시
${SCENARIO_EXAMPLE}`;

	const USER = `다음 스토리아크를 바탕으로 ${order}번 시나리오를 생성해주세요.

## 생성할 시나리오
order: ${scenario.order}
act: ${scenario.act}
title: ${scenario.title}
boss: ${scenario.boss}
npc: ${scenario.npc}
${getNpcPersona(scenario.npc) ? `npc_persona: ${getNpcPersona(scenario.npc)}` : ''}
${storyarc.npc_roles?.[scenario.npc] ? `npc_role: ${storyarc.npc_roles[scenario.npc].role}\nnpc_arc: ${storyarc.npc_roles[scenario.npc].arc}` : ''}
summary: ${scenario.summary}

## 이 아크의 NPC 목록 (주 NPC 외에 summary 에 나오는 NPC 는 이 key 로 speaker 지정)
${arcNpcList}

## 이 Act의 톤
${JSON.stringify(storyarc.act_tone[scenario.act as keyof typeof storyarc.act_tone], null, 2)}

## 스토리아크 전체 컨텍스트
world: ${JSON.stringify(worldForPrompt, null, 2)}
protagonist_goal: ${storyarc.protagonist_goal}
${isFinale ? `final_boss_twist: ${storyarc.final_boss.twist}` : ''}
global_foreshadowing: ${JSON.stringify(foreshadowingForPrompt, null, 2)}
act_summary: ${JSON.stringify(actSummaryForPrompt, null, 2)}

## 전체 시나리오 흐름 (맥락 파악용)
${JSON.stringify(outlineForPrompt, null, 2)}`;

	return `${SYSTEM}\n\n---\n\n${USER}`;
}
