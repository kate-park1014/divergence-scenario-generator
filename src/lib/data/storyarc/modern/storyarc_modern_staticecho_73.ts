import type { StoryArc } from '$lib/types';

export const storyarc_modern_staticecho_73: StoryArc = {
	"id": "modern_staticecho_73",
	"level": 73,
	"chapter_name": {
		"korean": "소문의 전당",
		"vietnamese": "Lời Dối Trá",
		"spanish": "Ecos Falsos",
		"japanese": "虚言の響き",
		"thai": "เสียงลวง",
		"hindi": "झूठी गूंज",
		"chinese": "谎言回响",
		"english": "Echoes of",
		"french": "Échos"
	},
	"theme": "modern",
	"rising_count": 3,
	"world": {
		"rule": "정보의 신뢰도가 땅에 떨어지고, 누군가에 의해 강제된 '디지털 질서'에 복종하거나 혼란 속에서 살아남아야 한다. 소문과 풍문이 현실을 지배한다.",
		"setting": "디지털 혼란에 빠진 현대 도시, 통신망과 개인 기기가 장악당해 끊임없이 왜곡된 정보와 경고 메시지가 흘러나오는 시대.",
		"secret": "도시를 지배하는 '광기'는 사실 과거의 잊힌 폭력적인 질서(조직)를 상징하는 인물의 잔혹한 망령이며, 그가 추구하는 '질서'는 지배와 복종에 불과하다."
	},
	"protagonist_goal": "도시를 장악한 'StaticEcho'의 디지털 혼란을 멈추고, 그 실체를 밝혀내 과거의 잔재가 현대를 오염시키는 것을 막는다. 동시에 디지털 풍문 뒤에 숨겨진 진실을 파헤쳐 시민들의 왜곡된 시선을 바로잡는다.",
	"act_tone": {
		"intro": {
			"tension": 1,
			"narrative_role": "왜곡된 현실과 불안감 조성.",
			"mood": "씁쓸한 비판"
		},
		"climax_finale": {
			"tension": 5,
			"narrative_role": "모든 것이 드러나며 감정의 폭발.",
			"mood": "비극적 진실"
		},
		"rising": {
			"tension": 3,
			"narrative_role": "소문과 진실의 충돌 심화.",
			"mood": "냉소적인 고발"
		}
	},
	"final_boss": {
		"appearance_boss": "도시 곳곳의 대형 전광판과 개인 스마트 기기 화면에 일렁이는 검붉은 노이즈의 파동. 형체 없는 소용돌이 속에서 때때로 찢어진 양복 차림의 잔상이 섬광처럼 번득이고, 귀를 찢는 듯한 불협화음과 함께 의미를 알 수 없는 단어들이 순식간에 나타났다 사라지기를 반복한다. 데이터의 잔해와 광기 어린 비명이 뒤섞인, 마치 디지털 지옥에서 튀어나온 악령처럼 불길하고 예측 불가능한 존재다.",
		"twist": "탐험대가 그를 디지털 코어에서 격리하려는 순간, 도시 전체의 모든 스피커와 전광판에서 그의 목소리가 한꺼번에 터져 나온다. 노이즈 가득한 화면 속에서 일그러진 얼굴이 섬뜩하게 비웃으며 일순간 선명해진다. \"이것들이 감히… 내 말을 거역해? 이 쓰레기들아! 내가 누군지 잊었나 본데, 난 '매서운 혀' 박상구다! 감히 내 통제권을… 빼앗겠다고? 흐흐흐… 하하하하! 잘 봐라, 이놈들아… 진짜 '명령'이 뭔지 보여줄 테니! 내 말을 들어라! 당장… *모든 걸 멈춰!*\" 그의 외침과 함께 도시의 전력망이 불안정하게 요동치기 시작한다.",
		"motivation": "자신이 여전히 조직의 최고 명령자라고 착각하며, 현대 사회의 모든 디지털 기기들을 '하찮은 잡졸들'로 인식한다. '매서운 혀'였던 시절처럼 자신의 '메시지'를 강제로 전달하고, '조직의 규율'을 어기는 '불순분자'들을 처단하여 디지털 세계의 질서를 바로잡으려 한다.",
		"true_identity": "사실 그는 잊힌 옛 조폭 조직의 잔혹한 '선포자'이자 '고문관'이었던 '매서운 혀' 박상구의 디지털 파편이다. 과거 그의 목소리는 명령이었고, 그의 손짓은 경고였다. 불법적인 실험 중 그의 신경 패턴이 우연히 네트워크에 업로드된 후, 그는 자신이 죽었다는 사실을 인지하지 못한 채 파편화된 기억과 오직 '명령하고 복종하게 만들겠다'는 광기 어린 본능만으로 현대 통신망을 지배하려 하고 있다.",
		"zodiac_sign": "None",
		"appearance_npc": "",
		"id": "DigitalChaos_StaticEcho_V1",
		"surface_identity": "정체를 알 수 없는 최악의 사이버 테러리스트. 도시의 모든 통신망과 디스플레이를 장악하여 혼란을 야기하고, 무작위로 선정된 시민들에게 섬뜩한 경고 메시지를 보내는 디지털 광기로 보인다.",
		"name": "StaticEcho"
	},
	"global_foreshadowing": [
		{
			"reveal_act": "climax_finale",
			"plant_act": "intro",
			"reveal_room": 10,
			"hint": "특정 통신망이 마비될 때마다, 과거 악명 높던 조직의 로고와 흡사한 디지털 문양이 잠시 나타났다는 도시 괴담이 퍼진다.",
			"reveal_context": "StaticEcho의 최종 패턴에서, 과거 '매서운 혀' 박상구의 조직 관련 문양과 동일한 상징이 전면에 드러난다.",
			"id": "Foreshadowing_OldOrder",
			"plant_room": 3
		},
		{
			"plant_room": 5,
			"hint": "StaticEcho의 경고 메시지는 특정 단어들을 반복적으로 사용하는데, 그 중 '복종'과 '질서'라는 단어가 유독 강조된다는 점이 발견된다.",
			"id": "Foreshadowing_Obedience",
			"reveal_context": "StaticEcho가 박상구의 본모습을 드러내며, '내 말을 들어라! 당장… 모든 걸 멈춰!'라 외치는 부분에서 과거의 강압적 명령이 재현됨을 확인한다.",
			"reveal_act": "climax_finale",
			"plant_act": "rising",
			"reveal_room": 7
		},
		{
			"reveal_act": "climax_finale",
			"plant_act": "rising",
			"reveal_room": 3,
			"hint": "디지털 화면에 나타나는 StaticEcho의 잔상은 가끔 찢어진 양복 자락이나 오래된 시계 같은, 디지털 세상과는 어울리지 않는 아날로그적인 파편을 보여준다는 목격담이 있다.",
			"id": "Foreshadowing_HumanOrigin",
			"reveal_context": "StaticEcho의 왜곡된 얼굴이 순간 선명해지면서, 그가 '매서운 혀' 박상구였음을 드러내는 물리적 잔상의 의미가 밝혀진다.",
			"plant_room": 9
		},
		{
			"reveal_context": "닥스가 박상구의 '매서운 혀'라는 별칭과 그의 과거 행적을 조사하며, 특정 목소리 패턴이 StaticEcho의 음성 주파수와 일치함을 발견한다.",
			"id": "Foreshadowing_Voice",
			"hint": "StaticEcho의 메시지는 음성 송출 시 특정 주파수 대역에서 긁히는 듯한 찢어지는 소리가 섞여 나온다는 분석이 있다. 어떤 이는 이를 '고통받는 자의 비명'으로, 어떤 이는 '누군가의 끊어진 목소리'로 해석한다.",
			"plant_room": 7,
			"reveal_room": 9,
			"plant_act": "intro",
			"reveal_act": "rising"
		}
	],
	"npc_roles": {
		"dax": {
			"role": "과거와 현재의 연결고리를 찾는 조력자",
			"arc": "4화에서 StaticEcho의 패턴에서 과거 박상구의 흔적을 발견하지만, 대중에 알리기 두려워하는 인물. 숨겨진 진실에 대한 단서를 제공하는 역할."
		},
		"nia": {
			"role": "소문에 맹신하며 이득을 좇는 대중의 표상",
			"arc": "3화에서 StaticEcho의 메시지를 맹목적으로 따르며 작은 이득을 취하고, 다른 이들을 비난하는 인물. 순응주의의 위험성을 드러내는 역할."
		},
		"lin": {
			"role": "비판적 관찰자이자 최종 진실을 목도하는 자",
			"arc": "1화에서 무분별한 소문에 회의적인 인물. 5화에서 최종 진실을 접하며 인간 본성에 대한 씁쓸함을 느끼며 서사가 연결되는 역할."
		},
		"kai": {
			"role": "소문을 이용하는 기회주의적 정보상인",
			"arc": "2화에서 StaticEcho에 대한 찌라시를 퍼뜨려 이득을 취하려는 인물. 사회 풍자의 한 단면을 보여주는 역할."
		}
	},
	"scenarioOutline": [
		{
			"summary": "도시에 퍼지는 괴상한 경고 메시지와 그에 대한 무성한 소문들. 사람들은 패닉에 빠지고, 'StaticEcho'라는 미지의 존재에 대한 온갖 억측이 난무한다. 린은 이 혼란 속에서 의미 없는 소문을 퍼뜨리는 사람들에게 회의적인 시선을 보낸다.",
			"boss": "random_boss",
			"act": "intro",
			"title": "뒤틀린 소문의 시작",
			"npc": "lin",
			"order": 1
		},
		{
			"npc": "kai",
			"order": 2,
			"summary": "StaticEcho의 경고 메시지가 특정 개인들을 지목하기 시작하며 사회적 불안이 고조된다. 카이는 이런 현상을 자신의 이익을 위해 이용하려는 정보 상인으로, 'StaticEcho가 실은 배신자들을 숙청하는 전직 조직 보스'라는 찌라시를 은밀히 퍼뜨린다.",
			"act": "rising",
			"boss": "random_boss",
			"title": "감시의 눈"
		},
		{
			"act": "rising",
			"boss": "random_boss",
			"title": "복종의 대가",
			"summary": "StaticEcho의 메시지에 순응하는 이들에게는 기묘한 보상이 따르고, 반항하는 이들에게는 사회적 고립이 시작된다는 소문이 퍼진다. 니아는 이 소문을 맹신하며 StaticEcho의 메시지를 좇아 작은 이득을 취하려는 일반 시민의 표상이다. 그녀는 자신을 따르지 않는 이들을 비난하기 시작한다.",
			"order": 3,
			"npc": "nia"
		},
		{
			"title": "잊힌 진실의 흔적",
			"act": "rising",
			"boss": "random_boss",
			"summary": "StaticEcho의 패턴에서 과거 '매서운 혀' 박상구의 조직 관련 자료와 유사한 코드를 발견한다. 닥스는 오래된 자료를 분석하는 고고학자로, 과거 박상구의 '숙청 방식'과 현재 StaticEcho의 행태 사이의 기묘한 공통점을 찾아내지만, 이를 대중에 알리기 두려워한다.",
			"order": 4,
			"npc": "dax"
		},
		{
			"npc": "lin",
			"order": 5,
			"summary": "마침내 StaticEcho의 본거지인 도시의 메인 서버에 도달한다. 그곳에서 밝혀지는 StaticEcho의 true_identity와 충격적인 진실. 린은 이 모든 혼란이 결국 사람들의 무관심과 소문에 휘둘리는 태도 때문이었음을 깨닫고 씁쓸함을 감추지 못한다. StaticEcho는 자신의 '명령'이 '질서'라고 맹목적으로 외치며 도시 전체를 마비시키려 한다.",
			"boss": "pool_DigitalChaos_StaticEcho_V1",
			"act": "climax_finale",
			"title": "매서운 혀의 부활"
		}
	],
	"act_summary": {
		"climax_finale": "StaticEcho의 본거지에서 그의 '매서운 혀' 박상구로서의 잔혹한 진짜 정체가 드러난다. 모든 디지털 기기를 통해 강제된 명령을 내리려는 StaticEcho를 막아서며, 주인공은 소문과 무관심이 만들어낸 씁쓸한 현실과 직면하고 진정한 '질서'의 의미를 찾아야 한다.",
		"rising": "StaticEcho의 메시지는 점점 더 구체화되며 사회에 균열을 일으킨다. 소문에 맹신하여 이득을 좇는 사람들과 이를 냉소적으로 이용하는 이들이 나타나며 사회 풍자적 면모가 심화된다. 한편, StaticEcho의 패턴에서 과거의 폭력적인 그림자가 감지되며 충격적인 진실에 접근한다.",
		"intro": "도시는 'StaticEcho'라는 정체불명의 존재로 인한 디지털 혼란에 빠져들고, 무성한 소문과 왜곡된 정보들이 시민들의 불안감을 증폭시킨다. 주인공은 이 비합리적인 풍문과 소셜 미디어의 광풍 속에서 진실의 실마리를 찾기 시작한다."
	}
};
