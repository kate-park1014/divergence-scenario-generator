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

// 이야기 구조 규칙: 1~5화가 이어지는 이야기. 주인공은 화마다 배우지만 매번 새 방식으로 속는다. 재작업 프롬프트가 쓴다.
// 1~4화에 최종보스가 흔적(boss_trace)으로 나오는 구조라, 챕터 생성이 이를 지원하기 전까지 신규 생성에는 넣지 않는다.
// 글자 수·호칭 겹침 같은 세부 형식은 코드 검사(rewrite/+server.ts)가 잡고 오류 문구로 고치게 한다. 여기에는 이야기 규칙만 둔다.
export const STORY_STRUCTURE_RULES = `# 쉬운 이야기 (가장 중요)
- 처음 읽는 사람이 **한 번 읽고 다 이해**해야 한다. 각 화 summary 에 누가, 무엇을, 왜 했고, 그래서 무엇이 됐는지가 모두 있다
- 핵심 물건(key_object)은 **누구나 아는 일상 물건** 하나다. 손에 들 수 있고, 이름만 들어도 모양이 떠오르는 것 (10자 이내)
  - 안 되는 것: 지어낸 물건, 만질 수 없는 것(빛·기운·잔상·기억·데이터·신호·그림자 등), 꾸밈말을 붙인 이름
- 나쁜 결과도 눈에 보이는 일로 쓴다. "기억이 왜곡된다"보다 "사람들이 서로 이름을 바꿔 부른다"처럼
- **왜 그런 일이 생기는지**를 정한다
  - world.how: 그 물건이 어떻게 작동해서 나쁜 결과가 나는지 한 문장. "[핵심 물건]은 [무엇을 하는 물건]이라서, [wrong_action] 하면 [무엇이 어떻게 되어] [나쁜 결과]가 된다." 핵심 물건 이름이 들어간다
  - final_boss.want: 보스가 이 일로 무엇을 얻는지 한 문장. "광기·혼란·지배"가 아니라 구체적인 이득 ("[무엇]을 손에 넣는다", "[누구]를 [어떻게] 만든다")
  - 신기한 설정(마법·저주·이상한 기계)은 이 하나뿐이고, world.how 에 적은 것만 쓴다
  - 주 NPC 의 곤란에도 이유가 있다. 그 화 summary 에 "[NPC]는 [무엇]을 잃어서(못 해서), [그게 없으면 무엇을 못 한다]"가 들어간다. "억울하다·힘들다"처럼 감정만 쓰지 않는다
- 쉬운 말로, 비유 없이 쓴다. 같은 문장을 여러 화에 되풀이하지 않는다

# 이야기 구조 — 화마다 배우지만, 매번 새 방식으로 속는 주인공
- 1화 = scenarioOutline order 1, … 5화 = order 5. 1~5화는 이어지는 이야기다 (2~4화는 앞 화가 남긴 피해에서 출발한다)
- 1화: 주인공이 누군가를 돕기 위해 wrong_action 을 한다. 당장은 효과가 있다가, 나쁜 결과(world.rule)가 드러난다
- 2~4화: 주인공은 앞 화 행동을 다시 하지 않는다. 앞 화 피해를 막거나 눈앞의 사람을 돕기 위해, 핵심 물건과 상관없어 보이는 **다른 물건·장치**를 다룬다. 그런데 그 안에 핵심 물건이 숨어 있거나 이어져 있어서(주인공은 모른다), 결국 wrong_action 을 한 것과 같은 결과가 또 난다
- 5화: 1~4화의 행동이 모두 같은 일이었고 그 뒤에 최종보스가 있었다는 것이 드러난다. 주인공은 right_action 으로 바로잡는다
- 주인공은 바보가 아니다. 2화부터는 조심한다(확인하기·의심하기·피하기·망설이기). 그래도 그 화의 "속는 방식"(USER 섹션) 때문에 결국 그 화 행동에 이른다. 화마다 그 방식의 순서대로 쓴다

# story_spine 을 가장 먼저 쓴다 (나머지 필드는 모두 이것을 풀어 쓴 것)
- 화마다 1~3문장의 뼈대(line). 5화에는 결말까지
- protagonist_action: 그 화 주인공의 행동. "[대상]을 [동사]한다". 1화는 wrong_action, 5화는 right_action 과 글자 그대로 같다. 2~4화는 핵심 물건 이름 없이, 화마다 다른 동사로
- lesson (2~4화): "[앞 화 행동]이 [나쁜 결과]를 낳아서, 이번에는 [조심하는 모습]". 1·5화는 빈 문자열
- hidden_link (1~4화): 그 행동이 왜 사실은 wrong_action 과 같은 일인지. 1화는 "wrong_action 그대로". 2~4화는 "[다룬 물건] 안에 [핵심 물건]이 [어떻게] 들어 있어서, [그 화 행동]을 하면 [핵심 물건]이 [어떻게] 되어 결국 [wrong_action] 것과 같아진다. 주인공이 못 보는 까닭: [까닭]". 5화에 눈에 보이게 드러난다 (1~4화 summary 에는 쓰지 않는다). 5화는 빈 문자열

# 화마다 달라지는 것
- 행동·장소(place, 무대 안의 한 구역)·이유·흔적이 화마다 다르다. 2~4화 summary 를 서로 바꿔 넣어도 말이 되면 안 된다
- 나쁜 결과는 world.rule 과 같은 종류의 일이 화마다 **다른 사람·다른 물건**에 일어난다 (그래야 5화에 같은 일이었다는 것이 보인다)

# 핵심 물건과 행동
- wrong_action·right_action: "[핵심 물건]을 [동사]한다". 서로 반대 뜻이고, 둘 다 눈에 보이는 행동이다 ("~하지 않는다" 안 됨)
- world.rule: 한 문장. "[wrong_action]을 하면 [눈에 보이는 나쁜 결과]가 일어난다". right_action 은 이 결과를 끝내는 행동이다
- 1~4화에는 아무도 right_action 을 하지 않는다 (시도하다 실패하는 장면도 없음)
- 1~5화 summary 에 핵심 물건 이름이 그대로 나온다. 복선에도 다른 새 물건을 넣지 않는다

# 주인공 = 플레이어 = 히어로 (공감할 수 있게)
- 주인공은 속는 사람이지 고집부리는 사람이 아니다. 그 순간 아는 것으로는 옳은 선택을 한다
- 이유는 선하다: 사람 돕기, 부탁 들어주기, 위기 막기, 앞 화 피해 막기 (효율·호기심·이익·명령은 안 됨)
- 그 화 행동은 당장 효과가 있고, 나쁜 결과는 그 뒤에 드러난다
- NPC 는 주인공이 그 화 행동을 하기 전에 말리지 않는다 (청하거나, 권하거나, 함께 속는다). 결과를 보고 놀라는 것은 된다
- 1~4화에 그 행동을 하지 말라고 경고하는 사람은 그 화의 warn 일반 보스뿐이다

# 최종보스
- 1~4화에는 얼굴·몸 없이 **흔적**(boss_trace)으로만 나온다: 목소리·글자·물건 같은 매체 하나, 15자 이내. 2~4화는 화마다 다른 종류의 매체 (주인공은 같은 존재인 줄 모른다)
- 흔적의 말은 친절한 조언처럼 들리고 그 화 행동만 권한다 (정답 행동 비슷한 말은 안 함)
- 1~4화 summary 에 그 화 흔적과 보스 이름(boss_name_korean, 영어 이름을 소리 그대로)이 나온다 (작가용 메모. 주인공이 이름을 아는 것은 아니다)
- 5화: 주인공이 right_action 을 하려 하면 처음으로 모습(appearance_boss)을 드러내며 막아서고, 주인공이 해내면 무너진다. 정답을 돕거나 그냥 물러나지 않는다

# 일반 보스 (1~4화, 화마다 다른 사람)
- 화마다 직업(random_boss_title, 10자 이내)만 정한다. 이름·외형·사연은 없다. 최종보스와 다른 존재다
- 그 화 summary 의 일반 보스 문장에는 "막아선다·가로막는다·덤빈다·저지한다·공격한다" 중 하나가 있다. 설득·권유·사연·최종보스 이름은 없다
- 편은 USER 섹션 "일반 보스의 편" 그대로
  - warn: 주인공이 그 화 행동을 하려는 것을 거칠게 막으며 경고한다 (경고 내용은 맞다). 그러나 막는 까닭이 자기 사정처럼 보여서 주인공은 믿지 않는다. 믿지 않는 이유가 summary 에 나온다
  - ally: 주인공이 의심하거나 앞으로 나아가는 것을 막는다. 그 화 행동은 말리지 않는다

# NPC
- 주어진 NPC 만 쓴다. 각자 npc_roles 에 title(호칭)을 정하고, summary 에서 호칭은 이것만 쓴다
- 마음을 바꾸는 NPC 는 아크당 1명까지 (turn_order·turn_scene). 바꾸는 화 summary 에 그 이유 장면이 있다

# 쓰는 법
- 화당 새 의문은 하나. 1화는 소개 화(핵심 물건·흔적·wrong_action 과 그 결과)
- summary 첫 문장은 그 화의 지금 상황. 처음 나오는 인물은 호칭과 함께
- 평문으로 쓴다 (마크다운·괄호 메모 없음)`;


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
export type BossSide = 'warn' | 'ally';
export type DeceiveMode = NonNullable<StoryArc['scenarioOutline'][number]['deceive_mode']>;
export type RewriteOptions = {
	genre?: string;
	used?: UsedMaterial[];
	bossSides?: BossSide[];
	deceiveModes?: DeceiveMode[];
};

const hashOf = (s: string) => {
	let h = 2166136261;
	for (const c of s) h = Math.imul(h ^ c.charCodeAt(0), 16777619) >>> 0;
	return h;
};

// id 로 장르를 고정 (다시 돌려도 같은 장르)
export function genreForId(id: string): string {
	return VARIATION_POOLS.genre[hashOf(id) % VARIATION_POOLS.genre.length];
}

// id 로 1~4화 일반 보스의 편을 고정 (warn: 틀린 행동을 경고하며 막음 / ally: 최종보스 편). 스토리마다 조합이 다르다
export function bossSidesForId(id: string): BossSide[] {
	const bits = hashOf(`${id}:random_boss_side`) % 16;
	return [0, 1, 2, 3].map((i) => ((bits >> i) & 1 ? 'warn' : 'ally'));
}

// 2~4화 속는 방식 후보. 아크마다 이 중 서로 다른 셋을 뽑는다 (후보가 많을수록 아크끼리 흐름이 덜 겹친다)
// 새 방식을 넣을 때: 이야기 순서가 기존 방식과 달라야 함 (표현만 다르면 같은 이야기가 된다).
// DECEIVE_MODE_LABEL 과 chapterGenRewrite.ts 의 modeScene, types 의 deceive_mode 에 함께 추가
export const DECEIVE_MODE_POOL: DeceiveMode[] = [
	'verify',
	'npc_acts',
	'avoid',
	'pressure',
	'undo',
	'tradeoff',
	'bait',
	'piecemeal',
	'gift'
];

// id 로 1~4화 속는 방식을 고정. 1화는 direct, 2~4화는 후보 중 서로 다른 셋 (매화 같은 순서로 속지 않게)
export function deceiveModesForId(id: string): DeceiveMode[] {
	const rest = [...DECEIVE_MODE_POOL];
	const picked: DeceiveMode[] = [];
	for (let i = 0; i < 3; i++) picked.push(rest.splice(hashOf(`${id}:deceive_mode:${i}`) % rest.length, 1)[0]);
	return ['direct', ...picked];
}

// 방식별 흐름. 이 아크에 뽑힌 방식만 프롬프트(USER "화별 속는 방식")와 채점(J18)에 넣는다
export const DECEIVE_MODE_LABEL: Record<DeceiveMode, string> = {
	direct: '직접 속음 — 주인공이 흔적의 친절한 해결책을 믿고 누군가를 돕기 위해 그 화 행동을 한다',
	verify:
		'확인했는데 속음 — 주인공이 앞 화에서 배운 대로 먼저 확인한다 (기록을 대조하기, 다른 사람에게 묻기, 장치로 재기 등). 확인 결과는 안전하다고 나온다. 그러나 그 확인 수단(기록·장치·답해 준 사람의 말)이 그 화 흔적이었다. 그래서 주인공은 안심하고 그 화 행동을 한다',
	npc_acts:
		'동료가 먼저 함 — 주인공은 흔적의 말을 의심해 망설이거나 멈추자고 한다. 그런데 그 화의 주 NPC 가 흔적을 보고 혼자 먼저 그 화 행동을 시작해 버린다. 주인공은 반쯤 끝난 일을 그대로 두면 NPC 가 다치거나 더 나빠질 것 같아 그 행동을 함께 마무리한다',
	avoid:
		'피하려다 걸림 — 주인공은 앞 화와 비슷해 보이는 일을 일부러 피한다. 이 화의 흔적은 오히려 "그건 위험하니 대신 이렇게 하라"는 경고처럼 들린다. 주인공이 피하려고 고른 그 길이 그 화 행동이다',
	pressure:
		'급해서 차선책 — 주인공은 흔적의 말이 수상하다고 느낀다. 그러나 눈앞에서 사람이 진짜로 위험해 시간이 없다. 주인공은 의심을 말로 남긴 채, 다른 방법이 없어 그 화 행동을 한다',
	undo:
		'되돌리려다 걸림 — 주인공은 앞 화가 남긴 피해를 원래대로 되돌리려 한다. 흔적이 되돌리는 방법을 알려 주고, 겉으로는 앞 화 행동을 취소하는 일처럼 보인다. 그 되돌리는 방법이 그 화 행동이다. 되돌린 것처럼 보이지만 피해는 더 커진다',
	tradeoff:
		'대가를 알고 감수 — 흔적이 이번 방법에는 작은 대가가 있다고 먼저 솔직하게 말한다 (그 대가는 world.rule 의 진짜 결과가 아니다). 주인공은 대가를 따져 본 뒤, 더 큰 피해를 막으려고 그 작은 대가를 감수하고 그 화 행동을 한다. 진짜 대가는 말한 것보다 훨씬 크다',
	bait:
		'꾸며진 위기 — 흔적이 먼저 위기처럼 보이는 일을 꾸며 보여 준다. 주인공은 흔적을 경계하지만, 그 위기는 흔적과 상관없어 보인다. 주인공은 그 위기를 막으려고 서둘러 그 화 행동을 한다. 그 화 끝에 위기는 처음부터 없었다는 것이 드러난다 (pressure 와 다름: 위기가 가짜이고, 주인공은 위기와 흔적을 연결하지 못한다)',
	piecemeal:
		'나눠서 함 — 주인공은 위험할까 봐 한 번에 하지 않고 작은 단계로 나눈다. 단계 하나하나는 해롭지 않아 보이고, 흔적은 단계마다 "여기까지는 괜찮다"고 확인해 준다. 다 마친 뒤에야 단계들이 합쳐져 그 화 행동이 된 것이 드러난다',
	gift:
		'먼저 받은 도움 — 흔적이 먼저 주인공의 작은 문제 하나를 조건 없이 해결해 준다 (진짜 도움). 주인공은 의심을 조금 내려놓는다. 이어 흔적이 다른 사람을 위한 작은 부탁처럼 그 화 행동을 권하고, 주인공은 받은 도움도 있고 그 사람을 돕고 싶어 들어준다'
};

export const BOSS_SIDE_LABEL: Record<BossSide, string> = {
	warn: '경고하는 쪽 (최종보스 편 아님, 주인공의 그 화 행동을 막으며 경고)',
	ally: '최종보스 편 (주인공의 의심·이탈·전진을 막음, 그 화 행동은 말리지 않음)'
};

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
	const bossSides = opts.bossSides ?? bossSidesForId(source.id);
	const sideList = bossSides.map((side, i) => `- ${i + 1}화: "${side}" — ${BOSS_SIDE_LABEL[side]}`).join('\n');
	const modeList = (opts.deceiveModes ?? deceiveModesForId(source.id))
		.map((m, i) => `- ${i + 1}화: "${m}" — ${DECEIVE_MODE_LABEL[m]}`)
		.join('\n');
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
- 무대·흔적·보스의 이득은 **이 보스에게서** 뽑는다 (USER 섹션 "보스 소재"). 핵심 물건은 이 보스와 어울리는 일상 물건이면 된다 (보스 소재의 낱말이 아니어도 된다)
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
5. scenarioOutline 1~4화의 random_boss_side: USER 섹션 "일반 보스의 편" 그대로. 그 화 summary 의 일반 보스를 그 편에 맞게 쓴다
6. 1~4화의 속는 방식: USER 섹션 "화별 속는 방식" 그대로. 그 화 story_spine·lesson·summary 를 그 방식대로 쓴다

# 새로 쓰는 것
chapter_name, world, protagonist_goal, act_tone(mood·narrative_role), world.how, final_boss 의 surface_identity·true_identity·motivation·want·twist,
story_spine(화별 protagonist_action·lesson·hidden_link 포함), stage, key_object, wrong_action, right_action, boss_name_korean, boss_trace, npc_roles 의 role·arc·title, scenarioOutline 의 title·summary·npc·place·boss_trace, global_foreshadowing, act_summary

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
- 1~4화에 심는 복선은 주인공이 그 화 행동을 하기 **전**의 경고·이상 징후가 아니다 (그러면 주인공이 알고도 하는 사람이 된다). 행동 뒤에 보이는 일이거나, 행동과 상관없는 보스의 흔적으로 심는다
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

## 일반 보스의 편 (고정, 1~4화)
${sideList}

## 화별 속는 방식 (고정, 1~4화 — 이야기 구조 규칙 "속는 방식")
${modeList}

## 보스 소재 (stage·흔적·보스의 이득을 여기서 뽑는다. 핵심 물건은 일상 물건)
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
									description: '이 화에서 주인공이 하는 행동. 1화=wrong_action, 5화=right_action 과 글자 그대로 같게. 2~4화=화마다 다른 행동 (wrong_action·앞 화 동사를 쓰지 않음).'
								},
								lesson: {
									type: 'string',
									description: '2~4화: 주인공이 앞 화에서 배운 것과, 그래서 이번 화에 어떻게 조심하는지 (그 화 속는 방식에 맞게, 한 문장). 1·5화: 빈 문자열.'
								},
								hidden_link: {
									type: 'string',
									description: '1~4화: 이 행동이 사실은 왜 핵심 물건에 wrong_action 을 한 것과 같은 일인지 (한 문장, 핵심 물건 이름 포함, 5화에 드러남). 5화: 빈 문자열.'
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
							how: {
								type: 'string',
								description: '왜 나쁜 결과가 생기는지 한 문장: 핵심 물건이 어떻게 작동해서 그렇게 되는지.'
							},
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
						description: '1~5화에 계속 나오고 5화 결말에서 쓰이는 핵심 물건. 누구나 아는 일상 물건, 10자 이내 명사구.'
					},
					boss_name_korean: {
						type: 'string',
						description: '최종보스 이름의 한국어 발음. 서사 문장에는 이것만 쓴다.'
					},
					boss_trace: {
						type: 'string',
						description: '1화에 최종보스가 얼굴 없이 드러나는 매체(목소리·글자·물건). 15자 이내. scenarioOutline 1화 boss_trace 와 같음.'
					},
					wrong_action: {
						type: 'string',
						description: '1~4화 행동이 사실은 모두 하는 일 (핵심 물건에 대한 틀린 행동). 1화에는 주인공이 그대로 한다.'
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
							want: {
								type: 'string',
								description: '보스가 이 일로 얻는 구체적인 이득 한 문장 (광기·혼란 같은 말 말고).'
							},
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
								},
								random_boss_side: {
									type: 'string',
									enum: ['warn', 'ally', ''],
									description: '1~4화: 그 화 일반 보스의 편. warn = 주인공의 그 화 행동을 경고하며 막음(최종보스 편 아님), ally = 최종보스 편(의심·전진을 막음). 5화: 빈 문자열.'
								},
								boss_trace: {
									type: 'string',
									description: '1~4화: 그 화에 최종보스가 드러나는 매체 (15자 이내, 화마다 다른 종류, 1화=boss_trace, summary 에 그대로 나옴). 5화: 빈 문자열.'
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
	params.properties.world.required = [...params.properties.world.required, 'how'];
	params.properties.final_boss.required = [...(params.properties.final_boss.required ?? []), 'want'];
	params.properties.npc_roles.additionalProperties.required = ['role', 'arc', 'title', 'turn_order'];
	params.properties.scenarioOutline.items.required = [
		...params.properties.scenarioOutline.items.required,
		'place',
		'random_boss_title',
		'boss_trace'
	];
	params.properties.story_spine.items.required = ['order', 'line', 'protagonist_action', 'lesson', 'hidden_link'];
	return tool;
})();
