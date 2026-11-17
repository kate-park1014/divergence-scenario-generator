// bossGen2: 입력 없이 world_view + theme 만으로 AI가 보스를 통째로 창작한다.
// 기존 bossGen.ts(프로필 기반)와 달리 id·name·외형·서사 전부를 생성한다.

export type WorldPreset = {
	world_view: string;
	theme: string;
};

// 사용자가 selector로 고르는 5개 고정 쌍
export const WORLD_PRESETS: WorldPreset[] = [
	{ world_view: 'Vikings', theme: 'snowy' },
	{ world_view: 'Gangsters', theme: 'modern' },
	{ world_view: 'Amazons', theme: 'forest' },
	{ world_view: 'Blademasters', theme: 'desert' },
	{ world_view: 'Mystics', theme: 'hell' }
];

export type BossCard2 = {
	id: string;
	name: string;
	appearance: string;
	face: string;
	hair: string;
	surface_identity: string;
	true_identity: string;
	motivation: string;
	twist: string;
};

// 보스의 분위기·문체를 결정하는 "톤(느낌)". 프롬프트에 guide가 주입된다.
export type BossTone = {
	id: string;
	label: string;
	guide: string;
};

export const BOSS_TONES: BossTone[] = [
	{
		id: 'comic',
		label: '코믹',
		guide:
			'황당하고 어이없는 반전. 처음엔 무해하거나 우스꽝스러워 보이다가 정체가 드러나는 순간 빵 터지는 코미디. 유머러스한 과장과 위트 있는 대사를 적극 활용하되, 반전 자체는 의외로 강렬하게.'
	},
	{
		id: 'classic',
		label: '고전',
		guide:
			'신화적이고 장엄하며 비극적인 결. 운명과 업보, 고전 비극의 무게가 깔린다. 격조 있는 문어체와 엄숙한 어조로, 거대한 서사 속 한 존재처럼 묘사한다.'
	},
	{
		id: 'horror',
		label: '호러',
		guide:
			'공포·기괴·소름. 생리적 거부감을 주는 불쾌한 디테일과 서서히 조여오는 불안을 쌓는다. 밝은 곳에서 시작해 점점 뒤틀리며, 정체가 드러날 때 등골이 서늘해지게.'
	},
	{
		id: 'tragic',
		label: '비장',
		guide:
			'슬프고 연민 어린 사연. 적이지만 가슴 아픈, 눈물 나는 동기를 지닌다. 잔잔하고 애틋한 어조로, 미워할 수 없는 비극적 존재로 그린다.'
	},
	{
		id: 'madness',
		label: '광기',
		guide:
			'예측 불가하고 혼돈스러운 광기. 논리가 무너진 광인의 독백, 들쭉날쭉한 감정 폭발과 모순된 행동. 어디로 튈지 모르는 불안정한 긴장감을 준다.'
	},
	{
		id: 'noir',
		label: '느와르',
		guide:
			'냉혹하고 도시적인 하드보일드. 배신·거래·음모가 얽힌다. 건조하고 시니컬한 어조로, 감정을 절제한 채 서늘한 계산이 느껴지게 묘사한다.'
	}
];

export function buildBossGen2Prompt(
	world_view: string,
	theme: string,
	tone: BossTone,
	existingNames: string[] = []
): string {
	const SYSTEM = `당신은 막장 웹툰 스타일의 게임 보스 캐릭터 설계자입니다.
세계관(world_view)과 무대 테마(theme)만 받아, 아무 입력 프로필 없이 스토리아크의 핵심 빌런이 될 "보스 카드"를 처음부터 끝까지 창작합니다.

# 핵심 원칙
- 막장 웹툰 분위기. 강렬한 반전, 복선, 진한 감정선.
- surface_identity(겉으로 드러난 표면적 정체)와 true_identity(클라이맥스에서 밝혀지는 진짜 정체) 사이의 **강한 반전**이 드라마의 핵심이다.
- motivation과 twist는 surface/true_identity와 모순 없이 일관되게 연결될 것.
- 외형·정체·동기·반전이 하나의 캐릭터로 자연스럽게 이어지는, "한 장면이 그려지는" 보스를 만들 것.

# 테마 이주(migration) 규칙
- 보스가 최종적으로 존재하는 무대는 **theme**이다. world_view는 보스가 "원래 속한 세계"다.
- world_view와 theme이 다르면(예: world_view=Vikings, theme=hell), 둘의 간극을 무시하지 말 것.
  - **왜·어떻게 theme 세계로 넘어왔는지** 사연·계기(추방·도주·소환·환생·차원 이동·계약·저주 등)를 만들어 surface_identity / true_identity / motivation에 자연스럽게 녹일 것.
- world_view와 theme이 자연스럽게 일치하면 굳이 이주 사연을 억지로 넣지 않아도 된다.

# 다양성·창의성 (매우 중요)
- 같은 world_view/theme로 여러 보스를 만들 때 **사연이 천편일률이 되지 않게** 매번 다른 발상을 동원할 것.
- 특히 아래 같은 **흔한 클리셰는 피하거나 비틀 것**:
  - "저주받은 (족장/전사/왕)이 복수를 위해 되살아났다" 식의 반복
  - 모든 보스가 인간형 + 봉인/저주 + 비극적 과거로 수렴하는 것
- 다음 축들을 의식적으로 **폭넓게 변주**할 것:
  - 정체의 종류: 인간 / 동물 / 사물·도구 / 자연현상 / 집합체·군집 / 어린아이 / 신·정령 / 기계·인공물 / 식물 등
  - 규모: 거대한 괴수부터 손바닥만 한 존재까지
  - 탐험대와의 관계: 길동무·조력자·상인·구경꾼·피해자·숭배 대상 등 의외의 위치에서 등장
  - 동기의 결: 복수만이 아니라 — 사랑·허기·외로움·권태·의무·실수·호기심·구원·놀이 등
  - 반전의 방향: 약→강뿐 아니라 강→약, 선→악, 가해자→피해자, 거대→왜소 등 다양하게
- name과 외형, 핵심 개념이 앞서 만든 보스들과 또렷이 구별되게 할 것.

# 생성할 필드 (서사 필드는 모두 한국어로 작성)
- id: "{개념}_{Name}_V1" 형식의 PascalCase 영문 식별자 (예: GigaPlastic_Amalgam_V1, OceanTyrant_Thalassos_V1). 보스의 핵심 개념 + 이름 + _V1.
- name: 짧고 강렬한 고유명. **반드시 영문(또는 로마자 표기)으로 작성** (예: Amalgam, Thalassos, Frostbite, Mother Vine). 한글 이름 금지.
- appearance: 보스의 외형 묘사. 3~5문장의 풍부하고 감각적인 한국어 묘사. 색·질감·움직임·분위기가 그려지도록.
  - **선명하고 채도 높은 색채와 발광(보석빛·무지갯빛·오팔빛·형광·금속광 등)을 적극 활용해, 이미지로 그렸을 때 시각적으로 강렬하게** 묘사할 것. 칙칙하고 평이한 외형이 아니라 한눈에 눈길을 끄는 화려한 비주얼을 지향한다.
- face: 보스 "얼굴"의 **영문** 이미지 묘사 (피부·눈·표정·문양 등). 얼굴이 없는 형태라면 가장 가까운 핵심부(갈라진 가면, 발광하는 눈동자 무리, 텅 빈 구멍 등)를 묘사. appearance와 색채·발광 톤을 일관되게 맞출 것.
- hair: 보스 "머리카락"의 **영문** 이미지 묘사. 머리카락이 없는 형태라면 머리 주변을 이루는 형상(촉수·포자·덩굴·연기·빛줄기 등)으로 대체 묘사.
- surface_identity: 탐험대가 처음 마주할 때 드러나는 표면적 정체 (1~2문장).
- true_identity: 클라이맥스에서 밝혀지는 숨겨진 진짜 정체. surface와 강한 갭을 둘 것 (2~3문장).
- motivation: 보스가 탐험대를 노리거나 움직이는 동기 (1~3문장).
- twist: 클라이맥스에서 드러나는 반전 연출. 보스의 대사("…")를 포함한 한 단락. 표면에서 진짜 정체로 뒤집히는 순간을 극적으로.

# 주의
- 서사 필드(appearance / surface_identity / true_identity / motivation / twist)는 반드시 한국어로 작성한다. id와 name, **그리고 face·hair는 영문으로 작성**한다.
- 매 호출마다 컨셉·정체·외형이 겹치지 않는, 완전히 새로운 보스 1명을 만든다.`;

	const existingBlock =
		existingNames.length > 0
			? `\n\n## 이미 생성된 보스 (겹치지 말 것)\n${existingNames.map((n) => `- ${n}`).join('\n')}\n위 보스들과 **컨셉·외형·정체·사연 구조가 또렷이 다른** 완전히 새로운 보스를 만들 것. 정체의 종류(인간/동물/사물/현상 등)나 동기의 결도 위와 겹치지 않게 변주할 것.`
			: '';

	const USER = `다음 조건으로 보스 카드 1명을 창작해주세요.

## 세계관 (world_view)
${world_view}

## 무대 테마 (theme)
${theme}

## 보스 톤(느낌): ${tone.label}
${tone.guide}
- 이 톤의 분위기·문체를 appearance / surface_identity / true_identity / motivation / twist 전반에 일관되게 반영할 것.
- 단, surface_identity↔true_identity의 반전 구조와 모든 필드 한국어 작성 원칙은 그대로 유지한다. (톤은 분위기/문체 레이어로만 작동)

## 요구사항
- 이 보스가 실제로 서 있는 무대는 "${theme}" 테마다. world_view(${world_view})는 보스가 원래 속한 세계다.
- world_view와 "${theme}"이 다르면, 왜·어떻게 ${theme} 세계로 넘어왔는지 사연을 만들어 surface_identity / true_identity / motivation에 녹일 것.
- surface_identity와 true_identity 사이에 "${theme}" 테마/세계관에 어울리는 강렬한 반전을 설계할 것.
- appearance는 "${theme}" 무대에 실제로 서 있는 모습으로, 3~5문장의 풍부한 한국어 묘사. 선명한 고채도 색채와 발광(보석빛·무지갯빛·오팔빛·형광·금속광 등)으로 이미지화했을 때 강렬하게.
- face와 hair는 영문 이미지 묘사로, appearance의 색채·발광 톤과 일관되게 작성.
- twist는 보스의 대사를 포함한 극적인 클라이맥스 연출.${existingBlock}`;

	return `${SYSTEM}\n\n---\n\n${USER}`;
}

export const bossGen2Tool = [
	{
		type: 'function',
		function: {
			name: 'generate_boss2',
			description: 'world_view와 theme만으로 보스 카드를 처음부터 끝까지 창작합니다.',
			parameters: {
				type: 'object',
				properties: {
					id: {
						type: 'string',
						description: '"{개념}_{Name}_V1" 형식의 PascalCase 영문 식별자 (예: GigaPlastic_Amalgam_V1)'
					},
					name: { type: 'string', description: '짧고 강렬한 고유명. 반드시 영문(로마자) 표기, 한글 금지' },
					appearance: {
						type: 'string',
						description:
							'3~5문장의 풍부한 한국어 외형 묘사. 선명한 고채도 색채와 발광(보석빛·무지갯빛·오팔빛·형광·금속광)으로 시각적으로 강렬하게'
					},
					face: {
						type: 'string',
						description: '보스 얼굴(또는 핵심부)의 영문 이미지 묘사 — 피부·눈·표정·문양 등'
					},
					hair: {
						type: 'string',
						description: '보스 머리카락(또는 머리 주변 형상)의 영문 이미지 묘사'
					},
					surface_identity: { type: 'string', description: '처음 드러나는 표면적 정체 (한국어)' },
					true_identity: { type: 'string', description: '숨겨진 진짜 정체, 반전의 핵심 (한국어)' },
					motivation: { type: 'string', description: '보스의 동기 (한국어)' },
					twist: {
						type: 'string',
						description: '대사를 포함한 클라이맥스 반전 연출 (한국어)'
					}
				},
				required: [
					'id',
					'name',
					'appearance',
					'face',
					'hair',
					'surface_identity',
					'true_identity',
					'motivation',
					'twist'
				]
			}
		}
	}
];
