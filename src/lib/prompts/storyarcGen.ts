import type { StoryArc } from '../types';

export type BossInput = {
	id: string;
	name: string;
	appearance: string;
	surface_identity: string;
	true_identity: string;
	motivation: string;
	twist: string;
	zodiac_sign?: string;
};

export type NpcInput = {
	key: string;
	name_korean: string;
	name_english: string;
};

// ── 다양성 변주 풀 ───────────────────────────────────────────
// 아크마다 무작위로 1개씩 뽑아 프롬프트에 주입 → 톤/장르/반전이 매번 달라진다.
export const VARIATION_POOLS = {
	genre: [
		'블랙코미디',
		'비극',
		'미스터리/추리',
		'심리 호러',
		'느와르',
		'잔혹동화',
		'부조리극',
		'신파/멜로드라마',
		'활극/액션',
		'사회 풍자'
	],
	twist: [
		'정체 반전',
		'가해자↔피해자 입장 역전',
		'악당이 사실은 피해자(동정 유발)',
		'시스템·흑막의 폭로',
		'진실은 상상보다 더 끔찍',
		'구원이 곧 파멸',
		'믿었던 조력자가 흑막',
		'승리가 무의미해지는 결말'
	],
	device: [
		'비선형/회상 교차',
		'거짓말하는 조력자 (거짓은 같은 아크 안에서 밝혀진다)',
		'단서 수집형 전개',
		'시한 카운트다운',
		'반복·루프 구조',
		'목격·증거로 빌드업 (주인공이 직접 보는 단서)'
	],
	emotion: ['연민', '분노', '공포', '허무', '그리움', '통쾌함', '씁쓸함', '죄책감']
};

export type Variation = { genre: string; twist: string; device: string; emotion: string };

function pickVariation(): Variation {
	const r = (a: string[]) => a[Math.floor(Math.random() * a.length)];
	return {
		genre: r(VARIATION_POOLS.genre),
		twist: r(VARIATION_POOLS.twist),
		device: r(VARIATION_POOLS.device),
		emotion: r(VARIATION_POOLS.emotion)
	};
}

// 명확성 규칙: 이 storyarc 로 대사를 만드는 챕터 생성 LLM 이 추론 없이 장면을 쓸 수 있게 한다.
// 신규 생성·시퀄·재작업 프롬프트가 함께 쓴다.
export const CLARITY_RULES = `# 명확성 규칙 (중요)
이 데이터를 받는 작가는 이것만 보고 장면 대사를 쓴다. 작가가 추론하거나 지어낼 필요 없이 바로 장면을 쓸 수 있어야 한다.
- 감정·분위기가 아니라 사건을 쓴다. scenarioOutline 의 summary 마다 "누가 무엇을 해서 무엇이 됐다"가 들어간다
  - 나쁜 예: "불안이 증폭된다" / "의문을 품기 시작한다" / "애매한 결과를 받는다"
  - 좋은 틀: "[인물]이 [글자·숫자까지 정해진 구체적인 물건]을 받는다/본다"
- order 1~4 의 summary 는 감정이 아니라 사건이나 그 결과로 끝난다
- 흐린 말을 쓰지 않는다: "묘한", "알 수 없는", "애매한", "어딘가", "~같은 느낌", "암시", "기시감", "진정한", "새로운 시대", "새로운 시작", "어렴풋이"
- 사람·물건·장소·시험 같은 것은 구체적으로 정한다 ("시험"이 아니라 "[무엇을, 얼마나] 하는 시험"처럼)
- 설정은 한 가지 말로 통일한다. world.secret, protagonist_goal, act_summary.climax_finale, order 5 summary 가 같은 해결 방법을 같은 말로 쓴다
- 각 인물(보스·NPC)이 알고 한 일인지 모르고 한 일인지 정하고, npc_roles·summary·reveal_context·final_boss 에서 끝까지 같게 쓴다
- world.rule 의 규칙·금기는 어기면 무슨 일이 일어나는지까지 쓰고, scenarioOutline 의 장면 하나 이상에서 실제로 쓰인다
- 결말(order 5 summary)에는 주인공이 화면에 보이는 행동으로 무엇을 하는지, 그 결과 무엇이 달라지는지 쓴다. "선택한다·깨닫는다·외친다"만으로 끝내지 않는다
  - 결과도 눈에 보이는 장면으로 쓴다. 나쁜 예: "새로운 시대를 맞이한다" / "진정한 평화가 온다". 좋은 틀: "[1~4화에서 망가진 바로 그것]이 [눈에 보이게] 되돌아온다"
- 복선 hint 는 소문·속삭임·전해 들은 말이 아니라 주인공이 직접 보거나 겪는 일로 쓴다`;

// 이야기 구조 규칙: 단순하고 어느 화부터 읽어도 이해되는 이야기. 재작업 프롬프트가 쓴다.
// 1~4화에 최종보스가 흔적(boss_trace)으로 나오는 구조라, 챕터 생성이 이를 지원하기 전까지 신규 생성에는 넣지 않는다.
export const STORY_STRUCTURE_RULES = `# 이야기 구조 규칙 (가장 중요) — 단순하고, 어느 화부터 읽어도 이해되는 이야기
- 1화 = scenarioOutline order 1, … 5화 = order 5

## 쓰는 순서: story_spine 을 가장 먼저 쓴다
- story_spine 은 이야기 전체를 단순하게 줄인 뼈대다. 1~5화마다 1~2문장, 5화 문장에는 결말까지 넣는다
  - 틀 (대괄호를 이 아크의 내용으로 채운다):
    1화 "[주인공이 어디에서 무엇을 하는 상황]. [boss_trace]로 [보스 이름]이 '[wrong_action 을 권하는 말]'이라고 한다. 주인공은 [wrong_action]."
    2~4화 "[그 화의 상황]. 주인공은 [wrong_action]. 그러자 [world.rule 의 결과가 앞 화보다 커진 모습]."
    5화 "[보스가 처음으로 모습을 드러내며 right_action 을 막아서는 모습]. 주인공은 [right_action]. [보스가 무너지는 모습]. [망가졌던 것이 되돌아오는 모습]."
- 각 화마다 protagonist_action 에 그 화에서 주인공이 핵심 물건으로 하는 행동을 적는다. 1~4화는 wrong_action, 5화는 right_action 과 글자 그대로 같다
- 쉬운 말로, 비유 없이, 눈에 보이는 일만 쓴다
- 나머지 필드는 모두 story_spine 을 풀어 쓴 것이다. story_spine 에 없는 설정·규칙·물건·반전을 더하거나 바꾸지 않는다

## 화마다 달라지는 것 (같은 이야기가 반복되지 않게)
- 1~4화에 주인공은 같은 wrong_action 을 하지만, 화마다 **장소·이유·대가**가 다르다
  - 장소(place): scenarioOutline 각 화에 무대 안의 한 구역을 정한다. 15자 이내. 다섯 화 모두 다르다. 그 화 summary 에 나온다
  - 이유: 주인공이 그 화에 wrong_action 을 하는 까닭이 화마다 다르다 (누군가의 부탁, 급한 위기, 보스의 거래 등)
  - 대가: world.rule 의 나쁜 결과가 화마다 다른 사람·다른 물건에 닥친다. "더 많이·더 크게"만 커지는 것으로 쓰지 않는다
- 2~4화 summary·story_spine 을 서로 바꿔 넣어도 말이 되면 안 된다

## 핵심 물건과 행동
- 핵심 물건(key_object)을 **하나** 정한다. 10자 이내 짧은 명사구
  - 1~5화 summary 에 모두 이 말 그대로 한 번 이상 나온다
- 핵심 물건에 대한 행동은 두 가지만 있다. 그 밖의 행동(찢기·숨기기 등 다른 선택지)은 쓰지 않는다
  - wrong_action: 1~4화에서 주인공이 하는, 보스와 주변 인물이 권하는 틀린 행동. "[핵심 물건]을 [동사]한다" 형태
    - 주인공은 1~4화마다 이 행동을 **직접 한다**. 처음부터 정답 쪽에 서서 막기만 하면 안 된다. 주인공이 틀린 행동을 하고 그 결과(world.rule)를 겪어야 5화의 선택이 뒤집힘이 된다
    - 한 NPC 가 정답 쪽을 말할 수는 있지만, 주인공은 4화까지 따르지 않는다
  - right_action: 5화에서 주인공이 하는 정답 행동. "[핵심 물건]을 [동사]한다" 형태
    - 눈에 보이는 행동이어야 한다. "~하지 않는다"처럼 안 하는 것은 정답 행동이 될 수 없다 (결말 장면이 사라진다)
  - wrong_action 과 right_action 은 **서로 반대**인 행동이다 (부순다↔지킨다, 버린다↔맞춘다처럼). 뜻이 비슷한 동사(초기화한다↔재설정한다, 정리한다↔정돈한다)를 쓰지 않는다
  - 1~4화에서는 아무도 right_action 을 하지 않는다. 시도하다 실패하거나 벌을 받는 장면도 쓰지 않는다 (정답이 위험해 보이게 된다)
  - 5화의 결말 행동은 right_action 그대로다
- 보스는 1~5화 내내 틀린 쪽이다. 1~4화에는 wrong_action 을 권하고, 5화에는 right_action 을 막는다
- NPC 는 마음을 바꿔도 된다 (틀린 쪽 → 정답 쪽, 또는 그 반대)
  - 마음을 바꾸는 NPC 는 아크당 **1명까지**. 그 NPC 는 npc_roles 에 turn_order(바꾸는 화 번호)와 turn_scene(바꾸는 이유가 되는 장면, 30자 이내)을 적는다. 다른 NPC 는 turn_order 0
  - 그 화(turn_order) summary 에 그 NPC 이름과 turn_scene 장면이 들어간다. npc_roles 설명에만 쓰고 summary 에 빠뜨리면 안 된다
  - 이유 장면 없이 편이 바뀌지 않는다. 바꾼 뒤에는 그 편을 유지한다
- 복선에도 핵심 물건 외의 새 물건·장소를 넣지 않는다

## 그 밖의 구조
- 추상 개념이 아니라 눈에 보이는 물건·행동이 이야기를 움직인다. "기회", "굴레", "유예", "부적격" 같은 비유를 사건 대신 쓰지 않는다
- 세계 규칙(world.rule)은 **한 문장**: "[wrong_action]을 하면 [눈에 보이는 나쁜 결과]가 일어난다"
  - 핵심 물건 이름이 들어간다. right_action 이나 "~하지 않으면" 같은 다른 경우는 쓰지 않는다 (규칙이 여러 개가 된다)
  - right_action 은 이 나쁜 결과를 끝내는 행동이다. 규칙이 right_action 을 벌주는 것처럼 읽히면 안 된다
  - 나쁜 예: 규칙을 여러 개 두기 / 추상 규칙
- 무엇이 위험하고 무엇이 정답인지 분명해야 한다. world.rule 이 위험이고, 5화의 결말 행동이 정답이다. 둘이 서로 맞아야 한다
- 최종보스는 1화부터 **흔적으로** 나온다. 1~4화에는 얼굴·몸을 보이지 않는다
  - boss_trace: 1~4화에 보스가 드러나는 매체 하나. 15자 이내 (예: "[장소]의 스피커 방송", "[물건] 화면의 문구", "문틈으로 들어오는 쪽지" 같은 틀). 보스 소재(appearance_npc·surface_identity)에 어울리는 것
  - 1~4화 summary 에는 boss_trace 가 그대로 나오고, 보스의 말·지시는 그 매체로만 전해진다 (목소리·글자·물건). 보스가 나타나거나 다가오거나 웃는 등 얼굴·몸이 보이는 장면을 쓰지 않는다
  - 5화에 보스가 처음으로 모습(appearance_boss)을 드러낸다
  - boss_name_korean: final_boss.name(영어)을 소리 그대로 한국어로 옮긴 것. 다른 이름을 지어내지 않는다. 서사 문장에는 영어 이름 대신 이것만 쓴다. 1~4화 summary 에 모두 나온다
  - 최종보스는 호칭(직업) 없이 이름(boss_name_korean)으로만 부른다. 이야기에서 가장 큰 존재라 직업으로 부르지 않는다
  - npc_roles 의 각 NPC 에도 title(호칭, 10자 이내)을 정한다. summary 에서 NPC 를 직업·호칭으로 부를 때는 이 title 만 쓴다
  - NPC 호칭들과 1~4화 일반 보스 직업(random_boss_title)들은 서로 단어 하나도 겹치지 않는다 (같은 단어도, 앞 두 글자가 같은 단어도 안 된다)
  - 1~4화에서 보스에 대한 수상한 단서, 목적, 정체가 드러나도 된다. 드러난 뒤에도 보스는 계속 wrong_action 을 권한다
  - 5화: 주인공이 right_action 을 하려 하면 보스가 처음으로 모습(appearance_boss)을 드러내며 막아선다 (빼앗기·공격·방해). 주인공이 해내면 보스가 무너진다
  - 5화의 보스는 정답 행동을 반기거나 돕거나 그냥 물러나지 않는다. 끝까지 막다가 진다
- 1~4화의 일반 보스(random_boss)는 **화마다 다른 인물**이다. 런타임에 무작위로 배정되어 외형·이름을 정할 수 없다
  - scenarioOutline 1~4화마다 그 화 일반 보스의 직업(random_boss_title)을 정한다. 10자 이내. 무대(stage)에 있을 법한 사람이다
  - 네 직업은 모두 다르다. 그 화 summary 에 그 직업이 그대로 나온다. 5화에는 random_boss_title 을 비운다
  - 앞 화의 일반 보스를 기억하거나, 일반 보스끼리 이어지는 사연을 쓰지 않는다. 외형·이름·사연도 쓰지 않는다
  - 일반 보스는 최종보스가 아니고, 최종보스가 위장하거나 변신한 모습도 아니다. 그 화에서 주인공을 막아서는 상대일 뿐이다
  - 일반 보스는 **최종보스 쪽(틀린 쪽)**이다. 주인공이 의심하거나, 규칙을 벗어나거나, 앞으로 나아가는 것을 막는다. 주인공의 틀린 행동을 말리거나 정답 행동을 권하지 않는다
  - 일반 보스가 나오는 문장에는 "막아선다·가로막는다·덤빈다·저지한다·공격한다" 중 하나를 쓴다. 그 화에서 주인공을 막는 행동만 쓴다
  - 일반 보스 문장에 목적·소원·사연("~을 영원히 하려 한다", "~을 원한다"), 최종보스 이름, 설득·권유·유혹을 쓰지 않는다. 일반 보스는 핵심 물건으로 정답 행동이나 틀린 행동을 하지 않는다
  - 주인공을 설득하거나 유혹하는 말은 최종보스(boss_trace 로)와 NPC 가 한다. 일반 보스는 이야기를 끌고 가는 대사를 맡지 않는다
- 화당 새 정보는 **하나**. 복선도 한 화에 하나만 심는다
  - 1화는 소개 화다. 핵심 물건, 흔적(boss_trace)으로 나오는 보스, wrong_action 과 그 결과를 함께 보여 줘도 된다. 그 밖의 새 사실·새 미스터리는 넣지 않는다
  - 2~4화 summary 에 새 의문·새 비밀(미스터리)은 한 가지만 둔다. 경고·권유·막기·나쁜 결과가 커지는 것은 새 미스터리로 세지 않는다
- 각 summary 의 첫 문장은 그 화의 현재 상황을 그 문장만으로 알 수 있게 요약한다
  - 첫 문장에 "~한 후", "~한 뒤", "~한 결과", "~하자,", "~에 따라", "~대로", "그 후" 처럼 앞 화 사건을 전제로 하는 말을 쓰지 않는다
  - 첫 문장에 나오는 인물은 호칭과 함께 쓴다 (이름만 쓰면 앞 화를 모르는 사람은 누군지 모른다)
- 서사 문장은 평문으로 쓴다. 마크다운(**), "(복선: …)" 같은 메모, 규칙 문구를 그대로 끼워 넣은 문장을 쓰지 않는다. 복선은 장면 속 일로 녹인다
- 각 summary 는 앞 화를 몰라도 읽혀야 한다. 그 화에 나오는 NPC 가 누구인지, 지금 무엇이 문제인지를 그 summary 안에서 밝힌다
- 한 화에 NPC 가 여러 명 나와도 된다. scenarioOutline 의 npc 는 그 화의 주 NPC 한 명(key 하나)이고, 다른 NPC 도 함께 나올 수 있다 (주어진 NPC 목록 안에서만)`;

export function buildStoryarcPrompt(
	boss: BossInput,
	npcs: NpcInput[],
	theme: string,
	variation?: Variation
): string {
	const v = variation ?? pickVariation();
	const npcList = npcs
		.map((n) => `- key: "${n.key}" | 이름: ${n.name_korean} (${n.name_english})`)
		.join('\n');

	const SYSTEM = `당신은 막장 웹툰 스타일의 게임 스토리아크 설계자입니다.
보스 캐릭터 정보와 NPC 목록을 받아 완성된 StoryArc 데이터를 생성합니다.

# 핵심 원칙
- 강렬한 감정선·반전·복선이 살아있는 웹툰형 서사. **단, 톤·장르는 USER의 '이번 아크 변주 가이드'를 최우선으로 따른다** (매 아크 다른 색깔을 낼 것)
- 보스의 surface_identity와 true_identity 사이의 갭이 핵심 드라마
- NPC들은 각자 고유한 서사적 역할을 가진다 — npc_roles 필수
- 같은 NPC가 여러 시나리오에 등장할 때 서사가 연결되어야 한다
- scenarioOutline은 5개: intro 1개, rising 3개, climax_finale 1개
- global_foreshadowing은 4개: 복선은 자연스럽게, 티 내지 말 것

# 구성 규칙
- rising_count는 항상 3
- scenarioOutline order 1~4: boss는 반드시 'random_boss' 고정 (중간보스 — 런타임에 임의 배정되므로 미리 지정하지 않는다)
- scenarioOutline order 5 (climax_finale): boss는 입력으로 받은 지정 보스의 id를 그대로 사용 (USER 섹션의 "보스 캐릭터 > id" 값. final_boss와 동일 인물)
- act_tone.tension: intro=1, rising=3, climax_finale=5
- chapter_name은 9개 언어 모두 작성 (korean, english, japanese, chinese, french, spanish, vietnamese, thai, hindi). **각 언어 12자 이내(공백 포함)**, 콜론·대시로 부제를 붙이지 말 것 — 핵심 단어 위주의 짧고 강렬한 단일 제목
- chapter_name은 **각 언어 모두 12단어 이내** — 무조건 12단어를 넘기지 말 것 (짧고 강렬한 제목)
- npc_roles: 등장하는 모든 NPC에 대해 role(역할 레이블)과 arc(서사 연결 설명) 작성
  - arc는 "N화에서 ~하는 인물. M화에서 ~하며 연결되는 역할" 형태로 등장 간 연결 명시

${CLARITY_RULES}

# 복선(global_foreshadowing) 분산 규칙
- 4개 복선의 (plant_act, plant_room) 페어는 **서로 모두 달라야** 한다 — 두 복선이 같은 act+room에서 동시에 심어지면 안 됨
- 4개 복선의 (reveal_act, reveal_room) 페어도 **서로 모두 달라야** 한다
- reveal_act는 가능한 한 **climax_finale로 몰아서** 임팩트를 강화 (최소 plant_act보다 늦은 act여야 함)
- plant_room·reveal_room은 시나리오의 실제 방 번호 **1, 3, 5, 9, 15 중에서만** 고른다 (다른 숫자 금지)
- 여러 방으로 분산할 것 — 1·1·1·1처럼 한 방에 몰면 안 됨

# NPC 배정 규칙
- 주어진 NPC 목록에서만 선택
- scenarioOutline 의 npc 는 그 시나리오의 주 NPC 한 명(key 하나). 다른 NPC도 같은 시나리오에 함께 나올 수 있다. 같은 NPC가 여러 시나리오에 나와도 무방
- intro와 climax_finale에 같은 NPC를 배정해 처음-끝 연결을 만들 것을 권장`;

	const USER = `다음 보스 정보와 NPC 목록으로 완성된 StoryArc를 생성해주세요.

## 테마
${theme}

## 보스 캐릭터
id: ${boss.id}
name: ${boss.name}${boss.zodiac_sign ? `\nzodiac_sign: ${boss.zodiac_sign}` : ''}
appearance: ${boss.appearance}
surface_identity: ${boss.surface_identity}
true_identity: ${boss.true_identity}
motivation: ${boss.motivation}
twist: ${boss.twist}

## 사용 가능한 NPC 목록
${npcList}

## 이번 아크 변주 가이드 (이 조합을 적극 반영)
- 장르/톤: ${v.genre}
- 반전 유형: ${v.twist}
- 서사 장치: ${v.device}
- 감정 축: ${v.emotion}
이 변주를 chapter_name·world·act_tone·scenarioOutline·final_boss(특히 twist) 전반에 적극 반영하라.
단, 고정 구조(5씬, 복선 4개, tension 1/3/5, 보스 정체성, order5=지정 보스, 12자 제목)는 반드시 유지한다.

## 요구사항
- scenarioOutline order 1~4의 boss는 모두 'random_boss', order 5의 boss는 "${boss.id}" (지정 보스)로 설정
- id는 "${theme}_${boss.id.toLowerCase().replace(/[^a-z0-9]/g, '_')}" 형식으로 생성
- 보스의 true_identity에서 세계관 secret을 도출
- global_foreshadowing의 hint는 실제 시나리오 summary에 녹아들 수 있는 자연스러운 복선
- npc_roles는 scenarioOutline에 등장하는 모든 NPC에 대해 빠짐없이 작성${
		boss.zodiac_sign
			? `
- (선택) 보스의 별자리 "${boss.zodiac_sign}" 성향을 final_boss의 motivation·twist와 act_tone의 분위기에 은근히 반영. 별자리를 직접 언급하지 말고 보스가 받은 zodiac_sign 값은 final_boss.zodiac_sign 필드에 그대로 보존할 것`
			: ''
	}`;

	return `${SYSTEM}\n\n---\n\n${USER}`;
}

export function buildSequelPrompt(source: StoryArc, npcs: NpcInput[]): string {
	const npcList = npcs
		.map((n) => `- key: "${n.key}" | 이름: ${n.name_korean} (${n.name_english})`)
		.join('\n');

	const lockedFinalBossFields = JSON.stringify(
		{
			id: source.final_boss.id,
			name: source.final_boss.name,
			appearance_npc: source.final_boss.appearance_npc,
			appearance_boss: source.final_boss.appearance_boss,
			surface_identity: source.final_boss.surface_identity,
			true_identity: source.final_boss.true_identity
		},
		null,
		2
	);
	const previousMotivationTwist = JSON.stringify(
		{
			motivation: source.final_boss.motivation,
			twist: source.final_boss.twist
		},
		null,
		2
	);
	const lockedBossRefs = source.scenarioOutline
		.map((s) => `- order ${s.order} (${s.act}): boss = "${s.boss}"  // 원작 제목: ${s.title}`)
		.join('\n');

	const SYSTEM = `당신은 막장 웹툰 스타일의 게임 스토리아크 설계자입니다.
지금은 기존 스토리아크의 **후속편(Sequel)**을 설계합니다.

# 시퀄 시점 원칙
- 소스 이야기의 모든 사건은 이미 벌어졌고, 비밀(world.secret)도 폭로된 후입니다
- 1편의 보스 동기(motivation)와 클라이맥스 반전(twist)은 **이미 끝난 사건**입니다
- 새 이야기는 "그 후 세계가 어떻게 달라졌는가"에서 출발합니다
- 주인공/세계가 1편의 결과를 짊어진 상태에서 새로운 갈등이 시작됩니다

# 핵심 원칙 (1편과 동일)
- 막장 웹툰 분위기. 반전, 복선, 강렬한 감정선
- NPC들은 각자 고유한 서사적 역할 — npc_roles 필수
- 같은 NPC가 여러 시나리오에 등장할 때 서사가 연결되어야 한다
- scenarioOutline은 5개: intro 1개, rising 3개, climax_finale 1개
- global_foreshadowing은 4개. 자연스럽게, 티 내지 말 것
- rising_count는 항상 3
- act_tone.tension: intro=1, rising=3, climax_finale=5
- chapter_name은 9개 언어 모두 작성 (korean, english, japanese, chinese, french, spanish, vietnamese, thai, hindi). **각 언어 12자 이내(공백 포함)**, 콜론·대시로 부제를 붙이지 말 것 — 핵심 단어 위주의 짧고 강렬한 단일 제목

# 🔒 하드 락 — 절대 수정 금지
1. **final_boss의 6개 필드**: id, name, appearance_npc, appearance_boss, surface_identity, true_identity — USER 섹션의 "락 필드" JSON을 한 글자도 바꾸지 말고 그대로 반환. 보스의 "존재 자체"는 1편과 동일합니다.
2. **scenarioOutline의 boss 필드**: 5개 항목 각각의 boss 필드는 USER 섹션에 주어진 순서대로 정확히 동일한 값을 사용. order 1의 boss는 주어진 첫 번째, order 2는 두 번째 …식으로.

# ✍️ final_boss.motivation, final_boss.twist — 새로 작성 (필수)
1편의 motivation·twist는 **이미 해결·폭로된 사건**입니다. 시퀄에서는 두 필드를 새로 작성하세요.
- 새 motivation: 1편 결말 이후의 새로운 상황·갈등에서 도출 (같은 동기를 다시 쓰지 말 것)
- 새 twist: 시퀄 클라이맥스의 새 반전
- **반드시 포함**: 두 필드 안에 1편의 핵심 인물·사건에 대한 **짧은 회상·언급 1~2문장**을 자연스럽게 녹일 것
  - 예시 톤: "이전에 ○○의 조종을 받았지", "○○가 나를 깨웠지", "그때 ○○가 흘려보낸 분노가 아직도…" 같은 1~2문장
  - ○○에는 USER 섹션에 명시된 1편 보스의 관련 인물/사건(예: 1편 twist에 등장하는 흑막의 이름)을 사용
- 새 motivation·twist는 surface_identity·true_identity(락된 보스의 정체)와 모순되지 않아야 함

# 🔓 그 외 새로 작성할 부분
- id: 소스 id와 **반드시 다른** 새 id (예: 소스가 'forest_kain'이면 'forest_kain_aftermath', 'forest_titan_echo' 등 자유롭게)
- chapter_name: 9개 언어 모두 새로 작명 (후속편 느낌 살릴 것)
- theme: 소스와 동일하게 (아래 명시)
- world.setting: "1편 종료 후 변화한 세계" 묘사
- world.rule: 동일 세계관이므로 큰 틀은 유지하되 1편 사건 이후 변화 반영 가능
- world.secret: 폭로된 1차 비밀의 여파, 혹은 새로 드러나는 2차 비밀
- protagonist_goal: 1편의 후폭풍에서 자연스럽게 도출
- act_tone: 새 분위기
- scenarioOutline의 title/summary/npc: 새로 작성 (boss 필드는 락)
- global_foreshadowing: 새로 (1편 어휘/사건 재참조 OK)
- act_summary: 새로
- npc_roles: 아래 npc 목록에서만 선택해 작성

${CLARITY_RULES}

# 복선(global_foreshadowing) 분산 규칙
- 4개 복선의 (plant_act, plant_room) 페어는 **서로 모두 달라야** 한다 — 두 복선이 같은 act+room에서 동시에 심어지면 안 됨
- 4개 복선의 (reveal_act, reveal_room) 페어도 **서로 모두 달라야** 한다
- reveal_act는 가능한 한 **climax_finale로 몰아서** 임팩트를 강화 (최소 plant_act보다 늦은 act여야 함)
- plant_room·reveal_room은 시나리오의 실제 방 번호 **1, 3, 5, 9, 15 중에서만** 고른다 (다른 숫자 금지)
- 여러 방으로 분산할 것 — 1·1·1·1처럼 한 방에 몰면 안 됨

# NPC 배정 규칙
- 주어진 NPC 목록에서만 선택
- scenarioOutline 의 npc 는 그 시나리오의 주 NPC 한 명(key 하나). 다른 NPC도 같은 시나리오에 함께 나올 수 있다. 같은 NPC가 여러 시나리오에 등장 가능
- intro와 climax_finale에 같은 NPC를 배정해 처음-끝 연결을 만들 것을 권장`;

	const USER = `다음 소스 스토리아크의 **후속편(시퀄)**을 생성해주세요.

## 테마 (소스와 동일하게 유지)
${source.theme}

## 소스 스토리아크 요약
- id: ${source.id}
- chapter_name (korean): ${source.chapter_name.korean}
- protagonist_goal: ${source.protagonist_goal}

### world
- setting: ${source.world.setting}
- rule: ${source.world.rule}
- secret: ${source.world.secret}

### act_summary
- intro: ${source.act_summary.intro}
- rising: ${source.act_summary.rising}
- climax_finale: ${source.act_summary.climax_finale}

## 🔒 final_boss 락 필드 — 한 글자도 바꾸지 말고 그대로 출력
\`\`\`json
${lockedFinalBossFields}
\`\`\`

## 📜 1편의 motivation·twist — 이미 해결된 내용 (새로 쓰지 말 것, 흔적 참조용)
이 두 필드는 시퀄에서 **새로 작성**합니다. 아래는 1편에서 어떤 동기/반전이 이미 끝났는지 알려주는 참고 자료입니다. 새 motivation·twist를 쓸 때 이 내용에 등장하는 인물·사건을 회상·언급에 활용하세요.
\`\`\`json
${previousMotivationTwist}
\`\`\`

## 🔒 scenarioOutline의 boss 필드 — 순서대로 락
${lockedBossRefs}

## 사용 가능한 NPC 목록 (이 중에서만 선택)
${npcList}

## 요구사항
- 위 "final_boss 락 필드" 6개를 한 글자도 바꾸지 말고 그대로 반환
- final_boss.motivation, final_boss.twist는 **새로 작성** (1편 흔적 1~2문장 포함)
- scenarioOutline 5개 항목의 boss 필드를 위 락 목록 순서대로 정확히 사용
- 그 외 모든 필드(id, chapter_name, world, protagonist_goal, act_tone, npc_roles, global_foreshadowing, scenarioOutline의 boss 외 필드, act_summary)는 후속편답게 새로 작성
- id는 소스 id "${source.id}"와 반드시 다르게`;

	return `${SYSTEM}\n\n---\n\n${USER}`;
}

export type RewriteNpc = NpcInput & { persona?: string };

/**
 * 기존 storyarc 를 모호하지 않게 다시 쓰는 프롬프트.
 * 고정: id, theme, final_boss 의 id·name·외형(얼굴 이미지가 이미 있음), NPC key 목록, order 별 boss 값.
 * 나머지는 원본을 참고 자료로만 쓰고 새로 쓴다. 고정값은 orchestrator 가 출력 위에 다시 덮어쓴다.
 */
export type UsedMaterial = { id: string; key_object?: string; stage?: string; rule?: string };
export type RewriteOptions = { genre?: string; used?: UsedMaterial[] };

// id 로 장르를 고정 (다시 돌려도 같은 장르)
export function genreForId(id: string): string {
	let h = 2166136261;
	for (const c of id) h = Math.imul(h ^ c.charCodeAt(0), 16777619) >>> 0;
	return VARIATION_POOLS.genre[h % VARIATION_POOLS.genre.length];
}

// 한 번에 돌리는 묶음 안에서 장르가 겹치지 않게 배정. 각 id 의 고정 장르가 이미 쓰였으면 목록의 다음 장르
export function assignGenres(ids: string[]): Record<string, string> {
	const pool = VARIATION_POOLS.genre;
	const taken = new Set<string>();
	const out: Record<string, string> = {};
	for (const id of ids) {
		let i = pool.indexOf(genreForId(id));
		for (let n = 0; n < pool.length && taken.has(pool[i]); n++) i = (i + 1) % pool.length;
		out[id] = pool[i];
		taken.add(pool[i]);
		if (taken.size === pool.length) taken.clear(); // 장르 수보다 많으면 다시 한 바퀴
	}
	return out;
}

export function buildStoryarcRewritePrompt(
	source: StoryArc,
	npcs: RewriteNpc[],
	opts: RewriteOptions = {}
): string {
	const genre = opts.genre ?? genreForId(source.id);
	const used = (opts.used ?? []).filter((u) => u.id !== source.id);
	const usedList = used.length
		? used.map((u) => `- ${u.id}: 핵심 물건 "${u.key_object ?? ''}" / 무대 "${u.stage ?? ''}" / 규칙 "${u.rule ?? ''}"`).join('\n')
		: '(아직 없음)';
	const bossMaterial = [
		source.final_boss.appearance_npc ?? source.final_boss.appearance ?? '',
		source.final_boss.appearance_boss ?? '',
		source.final_boss.surface_identity
	]
		.filter(Boolean)
		.map((t) => `- ${t}`)
		.join('\n');
	const npcList = npcs
		.map(
			(n) =>
				`- key: "${n.key}" | 이름: ${n.name_korean} (${n.name_english})${n.persona ? `\n  persona: ${n.persona}` : ''}`
		)
		.join('\n');
	const npcKeys = npcs.map((n) => `"${n.key}"`).join(', ');

	const fixedBoss = JSON.stringify(
		{
			id: source.final_boss.id,
			name: source.final_boss.name,
			appearance_npc: source.final_boss.appearance_npc ?? source.final_boss.appearance ?? '',
			appearance_boss: source.final_boss.appearance_boss ?? source.final_boss.appearance ?? ''
		},
		null,
		2
	);
	const bossRefs = source.scenarioOutline
		.map((s) => `- order ${s.order} (${s.act}): boss = "${s.boss}"`)
		.join('\n');

	// 원본 참고 자료 (id·level 은 고정이라 뺌)
	const { id: _id, level: _level, ...reference } = source;

	const SYSTEM = `당신은 웹툰 스타일의 게임 스토리아크 설계자입니다.
지금은 기존 스토리아크를 **다시 씁니다**. 원본은 사건이 흐리고 설정이 서로 어긋나서, 이것으로 장면 대사를 만들면 이야기가 모호하게 나옵니다.
목표는 이 데이터만 보고 장면 대사를 바로 쓸 수 있을 만큼 직설적이고 구체적인 스토리아크입니다.

# 원본을 쓰는 방법
- 원본은 참고 자료다. 주제·분위기는 살려도 되지만, 흐리거나 서로 안 맞는 부분은 버리고 새로 정한다
- 보스의 이야기(겉모습 정체·진짜 정체·동기·반전)도 새로 써도 된다. 단, 아래 고정된 이름·외형과 맞아야 한다

# 개성 규칙 (중요) — 다른 아크와 비슷한 이야기가 되지 않게
- 소재는 **이 보스에게서** 뽑는다. USER 섹션 "보스 소재"(외형·겉모습)에 나오는 물건·장소·행동이 이야기의 재료다
  - key_object 의 중심 낱말(마지막 낱말)은 "보스 소재"에 나오는 낱말이다. 계약서·데이터 칩·기록처럼 아무 보스에나 붙는 흔한 물건으로 바꾸지 않는다
- 무대(stage)는 보스가 있는 **한 장소**다. 15자 이내, 가능하면 "보스 소재"나 원본 world.setting 에 나오는 곳
  - "도시 전체"가 무대가 아니다. stage 이름에 "도시"를 쓰지 않는다. world.setting 과 1화 summary 에 stage 가 그대로 나온다
  - world.rule 의 나쁜 결과는 그 무대와 거기 있는 사람에게 일어나는 일이다. world.rule 에 "도시"라는 말을 쓰지 않는다
- 장르는 USER 섹션의 "이 아크의 장르"다. 사건의 성격·인물의 말투·결말의 느낌을 그 장르답게 쓴다 (예: 블랙코미디면 우스꽝스럽게 비틀리고, 느와르면 거래와 배신이 있다)
- USER 섹션 "다른 아크가 이미 쓴 소재"와 핵심 물건·무대의 중심 낱말이 겹치지 않는다 ("조각·상자·파일"처럼 흔한 끝말이면 그 앞 낱말까지 달라야 한다). 규칙의 나쁜 결과도 비슷하게 쓰지 않는다

# 고정 — 바꾸지 말 것
1. final_boss 의 id, name, appearance_npc, appearance_boss: USER 섹션의 "고정 보스" JSON 그대로. 보스의 얼굴 이미지가 이미 있으므로 외형 설명은 바꾸지 않는다
2. theme: USER 섹션에 주어진 값 그대로
3. NPC: ${npcKeys} 만 쓴다. 다른 NPC 를 만들지 않는다
   - npc_roles 의 키는 정확히 이 목록이다. 하나도 빠뜨리거나 더하지 않는다
   - scenarioOutline 의 npc 는 이 중 하나(그 화의 주 NPC). 각 NPC 는 최소 한 번 주 NPC 가 된다. 어느 order 에 누구를 둘지는 새로 정해도 된다
   - NPC 의 persona 와 맞는 역할을 준다
4. scenarioOutline 의 boss 값: USER 섹션에 주어진 order 별 값 그대로

# 새로 쓰는 것
chapter_name, world, protagonist_goal, act_tone(mood·narrative_role), final_boss 의 surface_identity·true_identity·motivation·twist,
story_spine, stage, key_object, wrong_action, right_action, boss_name_korean, boss_trace, npc_roles 의 role·arc·title, scenarioOutline 의 title·summary·npc, global_foreshadowing, act_summary

# 구성 규칙
- scenarioOutline 은 5개: order 1 = intro, order 2~4 = rising, order 5 = climax_finale
- rising_count 는 항상 3
- act_tone.tension: intro=1, rising=3, climax_finale=5
- chapter_name 은 9개 언어 모두 작성 (korean, english, japanese, chinese, french, spanish, vietnamese, thai, hindi). **각 언어 12자 이내(공백 포함)**, 콜론·대시로 부제를 붙이지 말 것
- npc_roles.arc 는 "N화에서 ~하는 인물. M화에서 ~하며 연결되는 역할" 형태로 쓴다. N·M 은 scenarioOutline 의 order 번호다
- final_boss.twist 는 order 5 에서 실제로 벌어지는 장면으로 쓴다 (누가 무엇을 하고, 무엇이 드러나는지)

${STORY_STRUCTURE_RULES}

${CLARITY_RULES}

# 복선(global_foreshadowing) 규칙
- 4개. 복선은 자연스럽게, 티 내지 말 것
- 4개 복선의 (plant_act, plant_room) 페어는 서로 모두 달라야 한다
- 4개 복선의 (reveal_act, reveal_room) 페어도 서로 모두 달라야 한다
- reveal_act 는 plant_act 보다 늦은 act. 가능한 한 climax_finale 로 모은다
- plant_room·reveal_room 은 시나리오의 실제 방 번호 **1, 3, 5, 9, 15 중에서만** 고른다 (다른 숫자 금지). 여러 방으로 분산할 것
- reveal_context 는 그 복선이 밝혀지는 장면에서 실제로 보이거나 들리는 일로 쓴다`;

	const USER = `다음 스토리아크를 다시 써주세요.

## 테마 (고정)
${source.theme}

## 고정 보스 — 이 4개 필드는 그대로 출력
\`\`\`json
${fixedBoss}
\`\`\`

## scenarioOutline 의 boss 값 (고정)
${bossRefs}

## 이 아크의 장르
${genre}

## 보스 소재 (key_object·stage 를 여기서 뽑는다)
${bossMaterial}

## 다른 아크가 이미 쓴 소재 (핵심 물건·무대가 겹치면 안 됨)
${usedList}

## 사용할 NPC (이 목록만, 모두 등장)
${npcList}

## 원본 스토리아크 (참고 자료 — 흐리거나 어긋난 부분은 버리고 새로 정할 것)
\`\`\`json
${JSON.stringify(reference, null, 2)}
\`\`\`

## 요구사항
- 고정 항목은 그대로, 나머지는 명확성 규칙에 맞게 새로 쓴다
- 다 쓴 뒤 이야기 구조 규칙과 명확성 규칙을 한 줄씩 다시 확인하고, 어긋나는 문장은 고쳐서 출력한다`;

	return `${SYSTEM}\n\n---\n\n${USER}`;
}

const multiLangTextSchema = {
	type: 'object',
	properties: {
		korean: { type: 'string' },
		english: { type: 'string' },
		japanese: { type: 'string' },
		chinese: { type: 'string' },
		french: { type: 'string' },
		spanish: { type: 'string' },
		vietnamese: { type: 'string' },
		thai: { type: 'string' },
		hindi: { type: 'string' }
	},
	required: [
		'korean',
		'english',
		'japanese',
		'chinese',
		'french',
		'spanish',
		'vietnamese',
		'thai',
		'hindi'
	]
};

const actToneSchema = {
	type: 'object',
	properties: {
		mood: { type: 'string' },
		tension: { type: 'number' },
		narrative_role: { type: 'string' }
	},
	required: ['mood', 'tension', 'narrative_role']
};

export const storyarcGenTool = [
	{
		type: 'function',
		function: {
			name: 'generate_storyarc',
			description: '보스와 NPC 정보를 바탕으로 완성된 StoryArc 데이터를 생성합니다.',
			parameters: {
				type: 'object',
				properties: {
					story_spine: {
						type: 'array',
						description: '이야기 전체를 단순하게 줄인 뼈대. 가장 먼저 쓴다. 1~5화마다 1~2문장, 5화는 결말 포함.',
						items: {
							type: 'object',
							properties: {
								order: { type: 'integer' },
								line: { type: 'string' },
								protagonist_action: {
									type: 'string',
									description: '이 화에서 주인공이 핵심 물건으로 하는 행동. 1~4화=wrong_action, 5화=right_action 과 글자 그대로 같게.'
								}
							},
							required: ['order', 'line', 'protagonist_action']
						}
					},
					id: { type: 'string' },
					chapter_name: multiLangTextSchema,
					theme: { type: 'string' },
					rising_count: { type: 'number' },
					world: {
						type: 'object',
						properties: {
							setting: { type: 'string' },
							rule: { type: 'string' },
							secret: { type: 'string' }
						},
						required: ['setting', 'rule', 'secret']
					},
					protagonist_goal: { type: 'string' },
					stage: {
						type: 'string',
						description: '이야기의 무대: 보스가 있는 한 장소. 15자 이내. "도시 전체"가 아님.'
					},
					key_object: {
						type: 'string',
						description: '1~5화에 계속 나오고 5화 결말에서 쓰이는 핵심 물건. 10자 이내 명사구.'
					},
					boss_name_korean: {
						type: 'string',
						description: '최종보스 이름의 한국어 발음. 서사 문장에는 이것만 쓴다.'
					},
					boss_trace: {
						type: 'string',
						description: '1~4화에 최종보스가 얼굴 없이 드러나는 매체(목소리·글자·물건). 15자 이내. 1~4화 summary 에 그대로 나옴.'
					},
					wrong_action: {
						type: 'string',
						description: '1~4화에서 주인공이 하는, 주변이 권하는 핵심 물건에 대한 틀린 행동.'
					},
					right_action: {
						type: 'string',
						description: '5화에서 주인공이 하는 핵심 물건에 대한 정답 행동 (결말 행동).'
					},
					act_tone: {
						type: 'object',
						properties: {
							intro: actToneSchema,
							rising: actToneSchema,
							climax_finale: actToneSchema
						},
						required: ['intro', 'rising', 'climax_finale']
					},
					final_boss: {
						type: 'object',
						properties: {
							id: { type: 'string' },
							name: { type: 'string' },
							appearance_npc: { type: 'string' },
							appearance_boss: { type: 'string' },
							surface_identity: { type: 'string' },
							true_identity: { type: 'string' },
							motivation: { type: 'string' },
							twist: { type: 'string' },
							zodiac_sign: {
								type: 'string',
								description: '보스 별자리. 입력에 주어진 경우 그대로 보존 (선택). 없으면 생략.'
							}
						},
						required: [
							'id',
							'name',
							'appearance_npc',
							'appearance_boss',
							'surface_identity',
							'true_identity',
							'motivation',
							'twist'
						]
					},
					global_foreshadowing: {
						type: 'array',
						items: {
							type: 'object',
							properties: {
								id: { type: 'string' },
								hint: { type: 'string' },
								plant_act: { type: 'string', enum: ['intro', 'rising', 'climax_finale'] },
								plant_room: { type: 'integer', description: '1, 3, 5, 9, 15 중 하나.' },
								reveal_act: { type: 'string', enum: ['intro', 'rising', 'climax_finale'] },
								reveal_room: { type: 'integer', description: '1, 3, 5, 9, 15 중 하나.' },
								reveal_context: { type: 'string' }
							},
							required: [
								'id',
								'hint',
								'plant_act',
								'plant_room',
								'reveal_act',
								'reveal_room',
								'reveal_context'
							]
						}
					},
					npc_roles: {
						type: 'object',
						description: '등장하는 모든 NPC의 서사적 역할. 키는 NPC key값.',
						additionalProperties: {
							type: 'object',
							properties: {
								role: { type: 'string' },
								arc: { type: 'string' },
								title: { type: 'string', description: 'summary 에서 이 NPC 를 부르는 호칭(직업 등). 10자 이내.' },
								turn_order: { type: 'integer', description: '마음을 바꾸는 화 번호(1~5). 바꾸지 않으면 0.' },
								turn_scene: { type: 'string', description: '마음을 바꾸는 이유가 되는 장면. 30자 이내. 그 화 summary 에 글자 그대로 들어감.' }
							},
							required: ['role', 'arc']
						}
					},
					scenarioOutline: {
						type: 'array',
						items: {
							type: 'object',
							properties: {
								order: { type: 'number' },
								act: { type: 'string', enum: ['intro', 'rising', 'climax_finale'] },
								title: { type: 'string' },
								boss: { type: 'string' },
								npc: { type: 'string' },
								summary: { type: 'string' },
								place: {
									type: 'string',
									description: '이 화의 장소: 무대 안의 한 구역. 15자 이내. 다섯 화 모두 다름. summary 에 나옴.'
								},
								random_boss_title: {
									type: 'string',
									description: '1~4화: 그 화 일반 보스의 직업 (10자 이내, 무대에 있을 법한 사람, 화마다 다름). 5화: 빈 문자열.'
								}
							},
							required: ['order', 'act', 'title', 'boss', 'npc', 'summary']
						}
					},
					act_summary: {
						type: 'object',
						properties: {
							intro: { type: 'string' },
							rising: { type: 'string' },
							climax_finale: { type: 'string' }
						},
						required: ['intro', 'rising', 'climax_finale']
					}
				},
				required: [
					'id',
					'chapter_name',
					'theme',
					'rising_count',
					'world',
					'protagonist_goal',
					'act_tone',
					'final_boss',
					'global_foreshadowing',
					'npc_roles',
					'scenarioOutline',
					'act_summary'
				]
			}
		}
	}
];

// 재작업 전용 출력 형식: 새 필드를 필수로 (선택으로 두면 Gemini 가 가끔 빠뜨린다)
export const storyarcRewriteTool = (() => {
	const tool = JSON.parse(JSON.stringify(storyarcGenTool));
	const params = tool[0].function.parameters;
	params.required = [
		...params.required,
		'story_spine',
		'stage',
		'key_object',
		'wrong_action',
		'right_action',
		'boss_name_korean',
		'boss_trace'
	];
	params.properties.npc_roles.additionalProperties.required = ['role', 'arc', 'title', 'turn_order'];
	params.properties.scenarioOutline.items.required = [
		...params.properties.scenarioOutline.items.required,
		'place',
		'random_boss_title'
	];
	return tool;
})();
