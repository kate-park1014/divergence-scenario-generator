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
import { getNpcPersona } from '$lib/data/npc';
import { npc_by_theme } from '$lib/data/npc/npc_pool';
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

	// 5화: 전부 (밝히는 화). 1~4화: 그 화에 심을 것만. plant_order 없는 예전 아크는 화를 못 정해 전부 넘긴다
	const allForeshadowing = storyarc.global_foreshadowing ?? [];
	// 5화는 회상할 때 그 흔적을 어디서 봤는지 틀리지 않게, 심은 장소를 붙인다 (화 번호는 붙이지 않는다: 대사에 "1화 …" 로 그대로 새어 나왔음)
	const plantedAt = (n?: number) => {
		const s = storyarc.scenarioOutline.find((x) => x.order === n);
		return s ? (s.place ?? s.title) : undefined;
	};
	const foreshadowingForPrompt = isFinale
		? allForeshadowing.map((f) => ({ ...f, planted_at: plantedAt(f.plant_order) }))
		: allForeshadowing
				.filter((f) => f.plant_order === undefined || f.plant_order === order)
				.map(({ reveal_context: _omit, ...rest }) => rest);

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
	// 앞 화 중 그 NPC 가 있었던 화 (주 NPC 이거나 summary 에 이름이 나옴). NPC 는 이 화들의 일만 안다
	// (없이는 5화 NPC 가 자기가 없던 화의 단서·조언을 아는 것처럼 말하는 일이 잦았음)
	const npcSeenOrders = (key: string, name: string) =>
		storyarc.scenarioOutline
			.filter((s) => s.order < scenario.order && (s.npc === key || (!!name && !!s.summary?.includes(name))))
			.map((s) => s.order);
	const arcNpcList = [...new Set([...Object.keys(storyarc.npc_roles ?? {}), ...storyarc.scenarioOutline.map((s) => s.npc)])]
		.map((key) => {
			const name = themePool.find((n) => n.key === key)?.name.korean ?? key;
			const role = storyarc.npc_roles?.[key]?.role;
			const seen = order > 1 ? npcSeenOrders(key, name) : [];
			const seenNote = order > 1 ? ` | 앞 화 중 함께 있었던 화: ${seen.length ? seen.map((n) => `${n}화`).join(', ') : '없음'}` : '';
			return `- ${key} (${name})${role ? `: ${role}` : ''}${seenNote}`;
		})
		.join('\n');

	// 주 NPC 가 앞 화에 안 나왔으면 첫 등장 (첫 대사에서 소개). 앞 화의 주 NPC 였거나 앞 화 summary 에 이름이 나오면 이미 만난 것.
	// 1화 summary 가 "주인공과 ○○는" 으로 함께 시작하면 원래 일행이라 소개하지 않는다
	const npcName = themePool.find((n) => n.key === scenario.npc)?.name.korean;
	const npcFirstAppearance =
		!!scenario.npc &&
		!(order === 1 && !!npcName && !!scenario.summary?.includes(`주인공과 ${npcName}`)) &&
		!storyarc.scenarioOutline.some(
			(s) => s.order < scenario.order && (s.npc === scenario.npc || (!!npcName && !!s.summary?.includes(npcName)))
		);

	// 주 NPC 가 앞 화의 주 NPC 였지만 바로 앞 화엔 없었으면 다시 나오는 것 (예: 1화 → 5화). 왜 다시 함께인지 밝힌다
	const lastNpcOrder = Math.max(
		0,
		...storyarc.scenarioOutline.filter((s) => s.order < scenario.order && s.npc === scenario.npc).map((s) => s.order)
	);
	const npcReturning = !!scenario.npc && lastNpcOrder > 0 && lastNpcOrder < scenario.order - 1;

	// 이 화의 무대·일반 보스·최종보스 흔적 (1~4화) / 최종보스 정보 (5화)
	const SIDE_LABEL = {
		warn: 'warn — 최종보스 편이 아니다. 주인공의 이번 화 행동을 경고하며 막는다',
		ally: 'ally — 최종보스 편이다. 주인공의 의심이나 전진을 막는다'
	};
	const sceneDetail = isFinale
		? [
				scenario.place && `place: ${scenario.place}`,
				'## 최종보스 (final_boss)',
				`name: ${storyarc.boss_name_korean ?? storyarc.final_boss.name}`,
				storyarc.final_boss.appearance_boss && `appearance: ${storyarc.final_boss.appearance_boss}`,
				storyarc.final_boss.surface_identity &&
					`surface_identity: ${storyarc.final_boss.surface_identity} (id 15 dialogue 에서 바뀌기 전, 보스가 이 겉모습대로 한 줄 말한다. 무엇을 하는 사람인지 드러나게)`,
				`true_identity: ${storyarc.final_boss.true_identity}`,
				`motivation: ${storyarc.final_boss.motivation}`,
				storyarc.final_boss.motive_scene &&
					`motive_scene: ${storyarc.final_boss.motive_scene} (win_dialogue 에서 보스가 계기를 말할 때 이 장면을 구체적으로 말한다)`,
				storyarc.final_boss.want && `want: ${storyarc.final_boss.want}`,
				`twist: ${storyarc.final_boss.twist}`
			]
		: [
				scenario.place && `place: ${scenario.place}`,
				scenario.random_boss_title &&
					`random_boss_title: ${scenario.random_boss_title} (이 화 일반 보스의 직업. 이름이 필요하면 여전히 {random_boss})`,
				`random_boss_side: ${SIDE_LABEL[scenario.random_boss_side ?? 'ally']}`,
				scenario.boss_trace &&
					`boss_trace: ${scenario.boss_trace} (최종보스가 얼굴 없이 드러나는 매체. 주인공은 최종보스인 줄 모른다. 최종보스 이름을 쓰지 말 것)`,
				storyarc.final_boss.surface_identity &&
					`final_boss_surface: ${storyarc.final_boss.surface_identity} (최종보스의 겉모습. summary 에서 최종보스 이야기가 나오면 NPC·일반 보스는 이 겉모습대로 구체적으로 말한다: 무엇을 하는/파는 사람인지, 어떻게 대하는지. 착하게도 무섭게도 바꾸지 않는다)`,
				'(최종보스의 진짜 정체·동기·빼앗으려는 것은 이 화에서 확정하지 않는다. summary 에 있어도 소문·의심으로만 말한다. 5화 보스 대사와 같은 말을 미리 쓰지 않는다)'
			];
	const sceneDetailForPrompt = sceneDetail.filter(Boolean).join('\n');

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
- 앞 화 summary 에서 탐험대가 한 일(마신 것·얻은 물건·입은 피해)은 이번 화에서도 사실이다. 그 일과 이어지는 정보·경고가 나오면 탐험대는 자기 일로 반응한다
  - 나쁜 예: 1화에 그 물을 마셨는데, 3화에서 독이라는 말을 듣고 "그 물병이 독이었다니" 하고 남의 일처럼 넘긴다
  - 좋은 예: "우리도 그 물을 마셨어… 손끝이 저린 게 그 탓이었나."
- 물건은 화를 넘어 이어진다. 뒤 화 summary 에서 탐험대가 쓰는 물건(깃발·검·대본 등)을 이 화에서 던지거나 놓고 가면, 이 화 안에서 다시 챙기는 장면을 쓴다. 앞 화에서 잃은 물건을 이번 화에서 쓰려면 다시 얻는 장면을 먼저 쓴다
  - 나쁜 예: 1화에서 깃발을 뽑아 던져 버렸는데, 5화에서 "가지고 있던 깃발을 꽂는다"
- NPC 는 자기가 직접 보았거나 누군가에게 들은 것만 말한다. 그 NPC 가 없던 화의 일(다른 NPC 의 조언, 거기서 본 물건)을 아는 것처럼 말하지 않는다. 들은 것이면 누구에게 들었는지 말한다
  - 나쁜 예: 3화에 없던 듄이 5화에서 "대장장이 페로 씨 말대로 대본을 덮어야 해요!" → 탐험대가 말하게 하거나, 탐험대에게 들은 것으로 쓴다

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
${npcFirstAppearance ? `npc_first_appearance: ${scenario.npc} 는 이 아크에서 이번 화에 처음 나온다` : ''}
${npcReturning ? `npc_returning: ${scenario.npc} 는 ${lastNpcOrder}화 이후 처음 다시 나온다` : ''}
summary: ${scenario.summary}
${sceneDetailForPrompt}

## 이 아크의 NPC 목록 (주 NPC 외에 summary 에 나오는 NPC 는 이 key 로 speaker 지정)
${arcNpcList}
${order > 1 ? '(NPC 는 "함께 있었던 화"의 일만 안다. 그 밖의 화에서 본 물건·들은 조언·만난 인물을 그 NPC 가 말하지 않는다. 그런 단서는 탐험대(character_any)가 말하고, NPC 는 "그게 뭐죠?"처럼 처음 듣는 쪽으로 반응한다)' : ''}

## 이 Act의 톤
${JSON.stringify(storyarc.act_tone[scenario.act as keyof typeof storyarc.act_tone], null, 2)}

## 스토리아크 전체 컨텍스트
world: ${JSON.stringify(worldForPrompt, null, 2)}
protagonist_goal: ${storyarc.protagonist_goal}
${isFinale ? '이 화에서 밝힐 복선 (빠짐없이 모두, reveal_room 방에서 앞 화에서 본 그 물건·흔적을 다시 꺼내며 밝힌다. 어디서 봤는지 말할 땐 planted_at 의 장소를 쓴다. "1화" 같은 화 번호는 대사에 쓰지 않는다)' :'이 화에 심을 복선 (plant_room 방에 심는다. 보이는 모습만 쓰고 그것이 무엇인지·무엇의 증거인지 단정하지 않는다. 뜻은 5화에서 밝힌다)'}: ${JSON.stringify(foreshadowingForPrompt, null, 2)}
act_summary: ${JSON.stringify(actSummaryForPrompt, null, 2)}

## 전체 시나리오 흐름 (맥락 파악용)
${JSON.stringify(outlineForPrompt, null, 2)}`;

	return `${SYSTEM}\n\n---\n\n${USER}`;
}
