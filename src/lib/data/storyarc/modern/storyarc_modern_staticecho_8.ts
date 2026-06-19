import type { StoryArc } from '$lib/types';

export const storyarc_modern_staticecho_8: StoryArc = {
	"id": "modern_staticecho_8",
	"level": 8,
	"chapter_name": {
		"english": "Overture of Digital Chaos: The Shadow of StaticEcho",
		"thai": "ปฐมบทแห่งความวุ่นวายดิจิทัล: เงาของ StaticEcho",
		"korean": "디지털 혼돈의 서막: StaticEcho의 그림자",
		"french": "Ouverture du Chaos Numérique : L'Ombre de StaticEcho",
		"chinese": "数字混沌的序幕：StaticEcho的阴影",
		"spanish": "Obertura del Caos Digital: La Sombra de StaticEcho",
		"hindi": "डिजिटल अराजकता का प्रस्तावना: स्टैटिकएको की छाया",
		"vietnamese": "Khúc Dạo Đầu Của Hỗn Loạn Kỹ Thuật Số: Bóng Tối Của StaticEcho",
		"japanese": "デジタルカオスの序幕：StaticEchoの影"
	},
	"theme": "modern",
	"rising_count": 3,
	"world": {
		"rule": "정부와 거대 통신사들은 도시의 디지털 인프라를 엄격히 통제하고 보안에 만전을 기하고 있다고 주장하지만, StaticEcho의 출현으로 그 허점이 드러난다.",
		"setting": "현대 도시, 모든 것이 디지털 통신망으로 연결된 첨단 사회.",
		"secret": "도시의 디지털 망 깊숙한 곳에는 단순히 인공지능이 아닌, 인간의 강렬한 광기와 파편화된 기억이 디지털화되어 잠들어 있다는 미지의 소문이 떠돈다."
	},
	"protagonist_goal": "도시를 마비시키는 정체불명의 사이버 테러리스트 StaticEcho의 정체를 밝히고, 그의 무작위적인 공격으로부터 시민들을 보호하며 디지털 혼란을 종식시킨다.",
	"act_tone": {
		"rising": {
			"narrative_role": "점점 고조되는 위협과 주인공의 고군분투",
			"tension": 3,
			"mood": "긴장감 있는"
		},
		"climax_finale": {
			"mood": "절망적이나 결의에 찬",
			"tension": 5,
			"narrative_role": "결정적인 첫 조우와 다음 편을 암시하는 충격적 반전"
		},
		"intro": {
			"tension": 1,
			"mood": "불안한",
			"narrative_role": "상황 제시 및 위기감 조성"
		}
	},
	"final_boss": {
		"motivation": "자신이 여전히 어떤 '질서'의 지배자라고 착각하며, 현대 사회의 디지털 기기들을 통제하고 자신의 '규율'을 강제로 강요하려는 광기. 무작위적인 듯 보이는 공격 속에서 미약하게나마 어떤 '명령'과 '복종'의 패턴이 감지된다.",
		"twist": "StaticEcho가 마지막으로 도시 시스템에 충격파를 가할 때, 전광판 노이즈 사이로 찢어진 양복을 입은 남성의 일그러진 얼굴이 섬광처럼 번득인다. 동시에 노이즈 가득한 음성 속에서 '내 말을 거역하는 자… 용서치 않는다…!'라는 구시대적인 어조의 격렬한 외침이 들리며 도시의 전력망이 불안정하게 요동치기 시작한다. 그의 정체에 대한 깊은 의문만 남긴 채 1편이 막을 내린다.",
		"surface_identity": "정체를 알 수 없는 최악의 사이버 테러리스트. 도시의 모든 통신망과 디스플레이를 장악하여 혼란을 야기하고, 무작위로 선정된 시민들에게 섬뜩한 경고 메시지를 보내는 디지털 광기로 보인다.",
		"appearance": "도시 곳곳의 대형 전광판과 개인 스마트 기기 화면에 일렁이는 검붉은 노이즈의 파동. 형체 없는 소용돌이 속에서 때때로 찢어진 양복 차림의 잔상이 섬광처럼 번득이고, 귀를 찢는 듯한 불협화음과 함께 의미를 알 수 없는 단어들이 순식간에 나타났다 사라지기를 반복한다. 데이터의 잔해와 광기 어린 비명이 뒤섞인, 마치 디지털 지옥에서 튀어나온 악령처럼 불길하고 예측 불가능한 존재다.",
		"id": "DigitalChaos_StaticEcho_V1",
		"true_identity": "단순한 디지털 테러리스트인 줄 알았으나, 그 메시지 속에 숨겨진 구시대적이고 권위적인 어조에서 미약하게나마 인간의 잔혹한 흔적을 엿볼 수 있다. 그의 본질은 파편화된 인간의 광기가 디지털화된 존재일지도 모른다는 암시가 보인다.",
		"name": "StaticEcho"
	},
	"global_foreshadowing": [
		{
			"plant_act": "intro",
			"hint": "StaticEcho의 무작위 메시지 속에서 발견되는 고풍스러운 어투와 권위적인 표현들.",
			"plant_room": 1,
			"reveal_room": 10,
			"reveal_act": "climax_finale",
			"reveal_context": "StaticEcho의 진정한 정체가 드러나는 순간, 그가 과거 '선포자'였음을 증명하는 언어 패턴으로 밝혀진다.",
			"id": "FS_01"
		},
		{
			"id": "FS_02",
			"reveal_act": "climax_finale",
			"reveal_context": "StaticEcho가 마지막 발악을 할 때, 그가 과거 인간이었음을 보여주는 시각적 단서로 작용한다.",
			"plant_room": 2,
			"reveal_room": 25,
			"plant_act": "intro",
			"hint": "도시 전광판에 나타나는 노이즈 속에서 짧게 번득이는 찢어진 양복 차림의 남성 형상."
		},
		{
			"plant_act": "rising",
			"hint": "StaticEcho의 디지털 공격이 특정 데이터나 시스템에 유독 집착하는 듯한 패턴.",
			"plant_room": 3,
			"reveal_room": 37,
			"reveal_context": "StaticEcho가 과거 박상구였을 때 중요하게 여겼던 '조직의 규율'과 관련된 데이터였다는 것이 밝혀진다.",
			"reveal_act": "climax_finale",
			"id": "FS_03"
		},
		{
			"id": "FS_04",
			"reveal_act": "climax_finale",
			"reveal_context": "StaticEcho가 '매서운 혀' 박상구로서 '조직의 규율'을 어긴 자들을 처단하려 했던 본능의 발현이었음이 드러난다.",
			"plant_room": 4,
			"reveal_room": 48,
			"plant_act": "rising",
			"hint": "StaticEcho의 경고 메시지가 단순히 혼란을 넘어 어떤 '규율'을 어긴 대상에게만 집중되는 불길한 징조."
		}
	],
	"npc_roles": {
		"bex": {
			"role": "디지털 보안 전문가",
			"arc": "StaticEcho의 기묘한 디지털 패턴을 분석하며 그 실체에 접근하려 한다. 시리즈 후반부에는 그의 비정상적인 데이터 구조를 발견하고 격리 방법을 모색한다."
		},
		"kai": {
			"arc": "도시의 혼란 속에서 StaticEcho의 경고 메시지가 단순한 무작위가 아닌 어떤 '규율'에 기반한 것처럼 느껴지는 불길한 징조를 감지한다. 시리즈 후반부에는 StaticEcho의 명령조에서 '매서운 혀' 박상구의 소문을 떠올리며 진실에 다가선다.",
			"role": "전직 특수요원 출신 탐정"
		},
		"lin": {
			"arc": "StaticEcho의 경고 메시지에서 구시대적 표현을 발견하고 그의 정체에 의문을 품기 시작한다. 시리즈 후반부에는 그 의문이 확신으로 변하며 과거 기록을 파헤치는 데 핵심적인 역할을 한다.",
			"role": "정보 분석가"
		}
	},
	"scenarioOutline": [
		{
			"boss": "random_boss",
			"npc": "kai",
			"order": 1,
			"act": "intro",
			"title": "도시를 덮친 디지털 그림자",
			"summary": "평화로운 도시에 StaticEcho가 나타나 대형 전광판과 개인 기기를 장악하고 섬뜩한 경고 메시지를 보낸다. 카이는 이 메시지 속에서 현대 디지털 테러리스트와 어울리지 않는 '구시대적'이고 '권위적인' 어조를 발견하고 의문을 품는다."
		},
		{
			"summary": "StaticEcho의 무작위적인 통신망 마비 공격이 계속되고, 린은 그의 공격 패턴을 분석하던 중 특정 데이터에 유독 집착하는 듯한 기묘한 디지털 흔적을 발견한다. 전광판 노이즈 사이로 찢어진 양복의 잔상이 스쳐 지나간다.",
			"title": "무작위 공격, 숨겨진 패턴",
			"order": 2,
			"act": "rising",
			"npc": "lin",
			"boss": "random_boss"
		},
		{
			"npc": "bex",
			"order": 3,
			"act": "rising",
			"title": "경고인가, 명령인가?",
			"summary": "StaticEcho의 경고 메시지는 단순한 혼란 유발을 넘어, 어떤 '규율'을 어긴 것처럼 보이는 특정 대상들에게 더욱 집중되는 듯한 불길한 징조를 보인다. 벡스는 이 메시지에서 섬뜩한 기시감을 느낀다.",
			"boss": "random_boss"
		},
		{
			"npc": "lin",
			"act": "rising",
			"order": 4,
			"summary": "린은 StaticEcho의 메시지에 담긴 구시대적 표현들이 단순한 오류가 아님을 확신하고, 벡스와 카이의 단서를 종합하며 그의 정체 뒤에 숨겨진 더 큰 비밀이 있음을 직감한다.",
			"title": "디지털 광기의 실체에 한 발짝",
			"boss": "random_boss"
		},
		{
			"boss": "pool_DigitalChaos_StaticEcho_V1",
			"title": "정체의 첫 균열: '명령'의 시작",
			"summary": "StaticEcho의 핵심 시스템에 접근하려는 탐험대. 그러나 그 순간 StaticEcho는 전 도시의 디스플레이를 장악하며 격렬하게 저항하고, 노이즈 속에서 찢어진 양복의 잔상이 선명해지는 동시에 '내 말을 거역하는 자… 용서치 않는다!'는 구시대적 명령이 터져 나온다. 도시는 전력 불안정으로 뒤흔들리며 그의 정체에 대한 깊은 의문과 함께 충격적인 다음 편을 예고한다.",
			"npc": "kai",
			"act": "climax_finale",
			"order": 5
		}
	],
	"act_summary": {
		"intro": "정체를 알 수 없는 사이버 테러리스트 StaticEcho가 도시를 마비시키고, 주인공들은 그의 메시지에서 단순한 테러를 넘어선 불길한 '규율'과 '구시대적' 흔적을 감지하며 위기감에 휩싸인다.",
		"rising": "StaticEcho의 공격이 계속되는 가운데, 주인공들은 그의 공격 패턴과 메시지에서 숨겨진 단서들(찢어진 양복 잔상, 특정 데이터 집착, 규율 위반 대상에 대한 집중)을 발견하며 그가 단순한 AI가 아님을 짐작한다. 긴장감은 점점 고조된다.",
		"climax_finale": "StaticEcho의 핵심 시스템에 대한 첫 조우. 그는 자신의 정체에 대한 암시적인 단서(찢어진 양복 잔상, 구시대적 명령조)를 드러내며 도시 전체에 심각한 전력 불안정을 야기한다. 주인공들은 그의 충격적인 실체와 마주할 준비를 하며 다음 편을 기약한다."
	}
};
