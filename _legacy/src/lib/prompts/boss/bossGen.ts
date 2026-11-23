export type BossSourceInput = {
	id: string;
	name: string;
	world_view: string;
	introduction: string;
	description: string;
	background: string;
	gender: string;
	zodiac_sign?: string;
};

// 별자리별 성격 키워드 (보스 성격 부여용 참고 자료)
export const ZODIAC_TRAITS: Record<string, string> = {
	Aries: '저돌적·충동적·승부욕. 정면 돌파, 분노가 빠르게 점화됨',
	Taurus: '집요·소유욕·인내. 한번 정한 목표는 끝까지, 변화에 완강',
	Gemini: '이중성·기지·변덕. 말솜씨로 상대를 흔들고 정체를 감춤',
	Cancer: '보호본능·집착·과거에 매임. 가족/소속에 대한 깊은 상처와 복수심',
	Leo: '자존심·과시·지배욕. 무대 중앙을 원하고 굴욕을 못 견딤',
	Virgo: '완벽주의·분석·통제. 치밀한 계획과 결벽, 약점을 용납 못 함',
	Libra: '균형·이중 잣대·우아한 위선. 공정을 가장한 저울질',
	Scorpio: '집념·은밀·복수. 모든 것을 꿰뚫어보며 결정적 순간까지 숨김',
	Sagittarius: '자유·과욕·무모. 거대한 이상을 좇다 선을 넘음',
	Capricorn: '야망·냉정·권위. 목적을 위해 감정을 도구화, 제국 건설',
	Aquarius: '이단·초연·혁명. 기존 질서를 부수려는 비범한 신념',
	Pisces: '몽환·기만·희생자 코스프레. 연민을 무기로 현실을 왜곡'
};

export function buildBossPrompt(src: BossSourceInput, theme: string): string {
	const zodiac = src.zodiac_sign?.trim();
	const zodiacTrait = zodiac ? ZODIAC_TRAITS[zodiac] : undefined;

	const SYSTEM = `당신은 막장 웹툰 스타일의 게임 보스 캐릭터 설계자입니다.
몬스터의 프로필 정보를 받아, 스토리아크의 핵심 빌런이 될 "보스 카드"를 완성합니다.

# 핵심 원칙
- 막장 웹툰 분위기. 반전, 복선, 강렬한 감정선
- surface_identity(겉으로 드러난 정체)와 true_identity(숨겨진 진짜 정체) 사이의 강한 반전이 드라마의 핵심
- motivation과 twist는 주어진 background·description과 모순 없이 일관되게 연결될 것

# 테마 이주(migration) 규칙 — 가장 중요
- 보스가 최종적으로 존재하는 무대는 **theme**이다. 원본 프로필의 world_view는 보스가 "원래 있던 세계"일 뿐이다.
- world_view와 theme이 다르면(예: 원본은 인도 뭄바이 갱스터인데 theme은 forest), 둘의 간극을 절대 무시하지 말 것.
  - **왜·어떻게 theme 세계로 넘어왔는지** 사연·계기를 반드시 만들어 background와 모순 없이 surface_identity / true_identity / motivation에 녹일 것.
  - 예: 추방·도주·소환·환생·차원 이동·계약·저주 등. 원본 정체성(직업·성격·관계)의 흔적이 theme 세계 속에서 어떻게 변형되어 남았는지 보여줄 것.
- 단순히 theme 분위기만 덧칠하지 말고, "원래 세계 → 지금 theme 세계"로 이어지는 한 줄짜리 인과가 읽혀야 한다.
- world_view와 theme이 자연스럽게 일치하면 굳이 이주 사연을 억지로 넣지 않아도 된다.

# 생성할 필드
- appearance: 보스의 외형 묘사. gender와 description을 근거로 새로 작성 (1~3문장). 원본에는 외형 데이터가 비어 있으므로 직접 창작.
  - **선명하고 채도 높은 색채와 발광(보석빛·무지갯빛·오팔빛·형광·금속광 등)을 적극 활용해, 이미지로 그렸을 때 시각적으로 강렬하게** 묘사할 것.
- face: 보스 "얼굴"의 **영문** 이미지 묘사 (피부·눈·표정·문양 등). 얼굴이 없는 형태라면 가장 가까운 핵심부를 묘사. appearance와 색채·발광 톤을 일관되게.
- hair: 보스 "머리카락"의 **영문** 이미지 묘사. 머리카락이 없는 형태라면 머리 주변 형상(촉수·포자·덩굴·연기·빛줄기 등)으로 대체 묘사.
- surface_identity: 탐험대가 처음 마주할 때 드러나는 표면적 정체
- true_identity: 클라이맥스에서 밝혀지는 숨겨진 진짜 정체 (surface와 강한 갭)
- motivation: 보스가 탐험대를 노리는/움직이는 동기 (2~3문장, background에서 도출)
- twist: 클라이맥스에서 드러나는 반전 대사 또는 행동
${
		zodiacTrait
			? `
# 별자리 성격 반영 (선택)
- 이 보스의 별자리는 **${zodiac}** 이며, 핵심 성격 키워드는 다음과 같다: ${zodiacTrait}
- 위 별자리 성향을 motivation·true_identity·twist의 성격선에 자연스럽게 녹일 것. 단, 별자리를 직접 언급하지 말고 행동·말투·동기로만 드러낼 것.
- 원본 description·background와 충돌하면 별자리보다 원본을 우선한다.
- 생성 결과에 zodiac_sign 필드로 "${zodiac}"을 그대로 포함할 것.`
			: ''
	}

# 주의
- id와 name은 시스템이 그대로 유지하므로 생성하지 말 것 (도구 인자에 포함되지 않음)`;

	const USER = `다음 몬스터 프로필로 보스 카드를 완성해주세요.

## 테마
${theme}

## 세계관 (world_view)
${src.world_view}

## 몬스터 프로필
name: ${src.name}
gender: ${src.gender}${zodiac ? `\nzodiac_sign: ${zodiac}` : ''}
introduction: ${src.introduction}
description: ${src.description}
background: ${src.background}

## 요구사항
- 이 보스가 존재하는 무대(배경)는 "${theme}" 테마다. world_view(${src.world_view})는 보스가 원래 있던 세계일 뿐이다.
- world_view와 "${theme}"이 다르면, 왜·어떻게 ${theme} 세계로 넘어왔는지 사연·계기를 만들어 surface_identity / true_identity / motivation에 녹일 것 (background와 모순 없이)
- appearance도 "${theme}" 무대에 실제로 서 있는 모습으로 묘사 (gender·description 기반, 원본에 외형 데이터 없음). 선명한 고채도 색채와 발광(보석빛·무지갯빛·오팔빛·형광·금속광 등)으로 이미지화했을 때 강렬하게
- face와 hair는 영문 이미지 묘사로, appearance의 색채·발광 톤과 일관되게 작성
- surface_identity와 true_identity 사이에 ${theme} 테마/세계관에 어울리는 강렬한 반전을 설계
- motivation·twist는 background·description과 일관되게`;

	return `${SYSTEM}\n\n---\n\n${USER}`;
}

export const bossGenTool = [
	{
		type: 'function',
		function: {
			name: 'generate_boss',
			description: '몬스터 프로필을 바탕으로 보스 카드의 서사 필드를 생성합니다.',
			parameters: {
				type: 'object',
				properties: {
					appearance: {
						type: 'string',
						description:
							'gender·description 기반 외형 묘사. 선명한 고채도 색채와 발광(보석빛·무지갯빛·오팔빛·형광·금속광)으로 시각적으로 강렬하게'
					},
					face: {
						type: 'string',
						description: '보스 얼굴(또는 핵심부)의 영문 이미지 묘사 — 피부·눈·표정·문양 등'
					},
					hair: {
						type: 'string',
						description: '보스 머리카락(또는 머리 주변 형상)의 영문 이미지 묘사'
					},
					surface_identity: { type: 'string', description: '처음 드러나는 표면적 정체' },
					true_identity: { type: 'string', description: '숨겨진 진짜 정체 (반전의 핵심)' },
					motivation: { type: 'string', description: '보스의 동기 (2~3문장)' },
					twist: { type: 'string', description: '클라이맥스에서 드러나는 반전 대사/행동' },
					zodiac_sign: {
						type: 'string',
						description: '입력에 별자리가 주어진 경우 그대로 반환 (선택). 없으면 생략.'
					}
				},
				required: [
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
