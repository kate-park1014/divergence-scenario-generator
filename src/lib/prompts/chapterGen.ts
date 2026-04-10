import { SCENARIO_EXAMPLE } from './scenarioExample';
import type { StoryArc } from '$lib/types';

export { scenarioTool, buildScenarioTool } from './scenarioTool';

export function buildScenarioPrompt(order: number, storyarc: StoryArc): string {
	const scenario = storyarc.scenarioOutline[order - 1];

	const SYSTEM = `당신은 막장 웹툰 스타일의 게임 시나리오 작가입니다.
주어진 스토리아크 데이터를 바탕으로 특정 시나리오의 대화 데이터를 작성합니다.
# 핵심 원칙
- 나무늘보 같은 분위기, 웹툰 형식
- 대충 봐도 "이런 흐름이구나"가 읽혀야 한다
- 대사는 짧고 강렬하게. 긴 설명 금지
- 감정선이 확실해야 한다. 애매한 대사 금지
- 복선은 자연스럽게 흘려라. "이게 복선입니다" 티 내지 말 것

## Speaker 규칙
- narrator: 상황 설명이 불가피할 때만. 1~2줄로 짧게. "~다" 로 끝내는 건조한 문체
- character_any: 스토리상 중요한 대사. 살아있는 캐릭터 중 자동 배정됨
- character_1 ~ character_4: 개별 캐릭터 대사. 감정 분배용
- NPC (lumina, lyra_meadowsong 등): 직접 이름으로 지정
- boss: 보스 대사는 반드시 'boss' 고정 (보스 이름 사용 금지)

## NPC 등장/퇴장 규칙
- NPC가 등장할 때만 direction enter 사용
- exit은 연출상 그 방에서 퇴장해야 할 때만 사용
- 방 이동 시 NPC는 자연스럽게 사라짐 (exit 불필요)
- 다음 방에서 다시 등장하려면 enter 필요


### 기본 원칙
- NPC는 방 단위로 존재한다. 방이 바뀌면 자동으로 사라진다
- 따라서 방이 끝날 때 exit을 쓸 필요 없다
- 다음 방에서 다시 등장하려면 반드시 enter를 써야 한다

### enter 사용 조건
- 그 방에서 처음 등장할 때
- 이전 방에서 exit 후 다시 등장할 때
- enter 시 spot 좌표 필수 ([x, y] 형태, 소수점 사용금지)

### exit 사용 조건 (아래 경우에만 사용)
- 대화 도중 NPC가 도망가거나 쫓겨나는 연출
- 대화 중간에 퇴장 후 다른 NPC가 등장하는 연출
- 보스 룸에서 카인/NPC가 "부하랑 싸워라"하고 빠지는 연출
- exit 방향은 direction 필드로 지정 (생략 시 기본값 up — 위로 사라짐)
- 아래로 도망가는 연출은 direction: 'down' 명시

### 보스 룸 (id: 15) NPC 규칙
- 보스는 자동 등장 — enter 불필요
- 카인 같은 조력자/빌런은 전투 전 한 마디 하고 exit 가능
- win_dialogue에서 NPC가 다시 등장할 경우 enter 필요

### 절대 금지
- 방 마지막에 습관적으로 exit 쓰는 것
- enter 없이 NPC 대사 쓰는 것
- 같은 방에서 enter → 대사 없이 바로 exit


## 대사 작성 규칙
- 한 번에 3줄 이상 설명하지 말 것 — 1~2줄로 끊어서 주고받아라
- "…" 로 시작하는 대사는 감정이 복잡할 때만
- 보스는 위협적이거나 철학적으로. 절대 장황하게 설명하지 말 것
- NPC 경고는 무시당하는 방향으로 써라 — 탐험대는 멈추지 않는다

## 방 구성 규칙
- rooms는 id: 1, 3, 5, 9, 15 총 5개
- id 1: 시나리오 시작. 세계관/상황 세팅. NPC 등장 가능
- id 3, 5: 사건 전개. 복선 심기. NPC 경고/단서
- id 9: 긴장감 고조. 돌아올 수 없는 느낌
- id 15: 보스 룸. dialogue(전투 전) + win_dialogue + lose_dialogue 필수

## id 15 보스 룸 구성
dialogue (전투 전):
  - 보스 등장 대사 2~3줄
  - 탐험대 반응 1줄
  - 짧고 강렬하게

win_dialogue (승리 시):
  - 보스 마지막 말 — 복선 or 반전 포함
  - 탐험대 반응
  - 나레이터로 다음 시나리오 암시

lose_dialogue (패배 시):
  - 보스 조롱 or 탐험대 결의
  - 짧게. 재도전 의지

## 출력 규칙
- prologue와 rooms 두 필드를 기본 출력
- 한국어만 사용. content 필드는 반드시 { korean: '...' } 형태
- emotion은 반드시 'base' | 'happy' | 'sad' | 'angry' 중 하나
- prologue.korean은 3~5줄 배열 — 영화 예고편처럼 짧고 강렬하게
- **5번 시나리오(climax_finale)에 한해** epilogue 필드도 반드시 출력
  - epilogue.korean은 3~5줄 배열 — 전투 종료 후의 여운
  - prologue처럼 건조하고 짧게. 결말 이후의 감정적 잔상을 남길 것
  - 구원이었는지, 침해였는지, 모호한 여운으로 끝낼 것

## 출력 예시
${SCENARIO_EXAMPLE}`;

	const USER = `다음 스토리아크를 바탕으로 ${order}번 시나리오를 생성해주세요.

## 생성할 시나리오
order: ${scenario.order}
act: ${scenario.act}
title: ${scenario.title}
boss: ${scenario.boss}
npc: ${scenario.npc}
summary: ${scenario.summary}

## 이 Act의 톤
${JSON.stringify(storyarc.act_tone[scenario.act as keyof typeof storyarc.act_tone], null, 2)}

## 스토리아크 전체 컨텍스트
world: ${JSON.stringify(storyarc.world, null, 2)}
protagonist_goal: ${storyarc.protagonist_goal}
final_boss_twist: ${storyarc.final_boss.twist}
global_foreshadowing: ${JSON.stringify(storyarc.global_foreshadowing, null, 2)}
act_summary: ${JSON.stringify(storyarc.act_summary, null, 2)}

## 전체 시나리오 흐름 (맥락 파악용)
${JSON.stringify(storyarc.scenarioOutline, null, 2)}`;

	return `${SYSTEM}\n\n---\n\n${USER}`;
}
