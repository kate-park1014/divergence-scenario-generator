import type { StoryArc } from '$lib/types';
export const storyarc_desert_dunewitness_v0: StoryArc = {
	theme: 'desert',
	global_foreshadowing: [
		{
			plant_room: 1,
			reveal_room: 3,
			reveal_context:
				'나이라가 발견한 고대 유물에서 과거 문명의 흥망성쇠를 암시하는 기록을 발견하며, 모든 것이 결국 모래로 돌아간다는 사막의 본질을 깨닫게 된다.',
			plant_act: 'intro',
			reveal_act: 'rising',
			hint: '오래된 유적의 벽화에서 발견된, 모든 것이 모래로 돌아가는 그림.',
			id: 'GF_001_Timelessness'
		},
		{
			plant_act: 'intro',
			plant_room: 1,
			reveal_room: 2,
			reveal_context:
				"주인공이 심은 식물들이 사막의 가혹함 속에서 시들어가는 것을 보며, 자피르가 '사막은 모든 것을 품지만, 그 어떤 것도 오래 허락하지 않는다'고 일러준다.",
			hint: '사막에서 피어난 꽃이 순간의 아름다움 뒤에 빠르게 시들어버리는 모습.',
			id: 'GF_002_Futility',
			reveal_act: 'rising'
		},
		{
			reveal_context:
				'자흐라 피라가 고대의 예언을 읊조릴 때, 주인공은 모래바람 속에서 사라진 문명들의 비명과 선택의 흔적을 환영처럼 보게 된다.',
			reveal_room: 4,
			plant_room: 2,
			plant_act: 'rising',
			reveal_act: 'rising',
			id: 'GF_003_LostChoices',
			hint: '모래폭풍 속에서 환영처럼 스쳐 지나가는 과거의 인물들의 실루엣.'
		},
		{
			hint: '아무것도 없는 듯한 거대한 사구 위에서 느껴지는 묘한 시선, 움직이지 않는 존재감.',
			id: 'GF_004_Observer',
			reveal_act: 'climax_finale',
			plant_act: 'rising',
			reveal_room: 5,
			reveal_context:
				'오르벨이 등장하며, 그가 오랜 시간 동안 사막의 모든 변화를 침묵 속에 지켜봐 왔음을 스스로 드러낸다.',
			plant_room: 3
		}
	],
	chapter_name: {
		english: 'Witness of the Dunes: Endless Time',
		spanish: 'El Testigo de las Dunas: Tiempo Infinito',
		japanese: '砂丘の証人：終わらない時間',
		hindi: 'रेगिस्तान का साक्षी: अंतहीन समय',
		french: 'Le Témoin des Dunes : Temps Infini',
		korean: '사구의 증인: 끝나지 않는 시간',
		thai: 'พยานแห่งเนินทราย: กาลเวลาอันไม่สิ้นสุด',
		chinese: '沙丘见证者：无尽的时间',
		vietnamese: 'Nhân Chứng Cồn Cát: Thời Gian Bất Tận'
	},
	rising_count: 3,
	id: 'desert_dunewitness_v0',
	final_boss: {
		surface_identity: '모든 것을 지켜보는 사막의 거인. 아무것도 하지 않고 그저 바라본다.',
		appearance_boss:
			'A colossal humanoid figure half-buried in endless dunes, its body composed of layered sand strata like geological time itself. Its face is featureless except for a slowly shifting spiral where its eyes should be. Every movement causes centuries of sand to cascade off its body. Floating around it are fossilized memories—bones, ruins, broken weapons—caught mid-erosion. Muted, monochrome desert palette with slow, almost imperceptible motion.',
		true_identity:
			"시간과 변화 자체를 관찰하는 존재. 인간의 선택, 문명의 흥망, 사랑과 파멸까지 모두 '결국 사라질 것들'로 인식한다. 개입하는 순간 의미가 왜곡된다고 믿는다.",
		twist:
			"사구의 증인 오르벨은 쓰러지는 순간, 그의 몸이 무너져내리며 말한다 — '…그래도… 너희의 선택을… 끝까지 지켜보겠다…'. 그는 파괴를 통해 새로운 시작을 유도하는, 역설적인 방식으로 변화를 존중하는 존재였음을 드러낸다.",
		id: 'DuneWitness_V0',
		name: '사구의 증인 오르벨 (Orbel)',
		appearance_npc:
			'광활한 사막에 반쯤 파묻힌 거대한 인간형 형상. 몸은 지질 시대처럼 겹겹이 쌓인 모래 지층으로 이루어져 있다. 얼굴은 형상이 없으며, 눈이 있어야 할 자리에는 느리게 회전하는 나선형 문양만 존재한다. 움직일 때마다 수백 년의 모래가 몸에서 쏟아져 내린다. 그의 주위에는 화석화된 기억들—뼈, 폐허, 부서진 무기들—이 침식 과정 중에 멈춰진 채 떠다닌다. 무채색의 사막 팔레트와 거의 감지할 수 없는 느린 움직임.',
		motivation:
			"탐험대가 사막을 바꾸려는 행위를 '무의미한 저항'으로 본다. 그들을 멈추게 하고, 결국 아무것도 하지 않는 상태로 되돌리려 한다."
	},
	scenarioOutline: [
		{
			boss: 'random_boss',
			order: 1,
			act: 'intro',
			summary:
				"황량한 사막의 초입, 길잡이 당키와 함께 도착한 주인공은 끝없이 펼쳐진 모래 언덕과 고대 유적의 잔해를 마주한다. 당키는 과거 이곳을 지나갔던 수많은 탐험대의 흔적과 사막의 변덕스러운 날씨에 대해 이야기하며, 사막의 역사가 얼마나 오래되었는지 암시한다. 주인공은 작게 피어난 꽃을 발견하고 물을 주려 하지만, 당키는 '이곳에선 너무 빨리 시들 것이다'라며 사막의 냉혹함을 일깨운다.",
			npc: 'Donkey',
			title: '사막의 첫 발자국: 모래 속 шепот'
		},
		{
			act: 'rising',
			summary:
				"주인공은 사막에 오아시스를 만들 계획을 세우고 작은 샘터를 찾아 나선다. 현지인 자피르는 '사막은 무엇이든 받아들이지만, 그 어떤 것도 오래 허락하지 않는다'며 회의적인 반응을 보인다. 자피르의 경고에도 불구하고 주인공은 샘터를 파기 시작하지만, 이내 사막의 거대한 모래 폭풍이 몰아닥쳐 주인공의 노력을 한순간에 덮어버린다. 주인공이 애써 심었던 식물들은 모래 속에 파묻혀 시들어간다.",
			boss: 'random_boss',
			order: 2,
			npc: 'Zafir',
			title: '변화의 시도: 모래 위의 파문'
		},
		{
			title: '잃어버린 문명: 모래 아래의 진실',
			npc: 'Naira',
			order: 3,
			boss: 'random_boss',
			act: 'rising',
			summary:
				"모래 폭풍이 지난 후, 주인공은 사막 탐험가 나이라를 만나 함께 잊힌 고대 도시의 유적을 발굴한다. 나이라가 발견한 벽화에는 번성했던 문명이 모래에 휩쓸려 사라지는 과정이 섬세하게 그려져 있다. 벽화 속에서 주인공은 사막의 거대한 형상이 모든 것을 침묵하며 '관찰'하는 모습을 언뜻 보게 된다. 나이라는 '이곳의 모든 것은 결국 모래로 돌아갈 운명'이라며, 사막의 심연에 거대한 존재가 영원히 모든 것을 지켜보고 있을 것이라 말한다."
		},
		{
			summary:
				"고대 유적 깊은 곳에서, 주인공은 '사구의 증인'을 숭배하는 광신도 자흐라 피라를 만난다. 자흐라 피라는 '오르벨 님은 모든 변화를 지켜보지만, 개입은 그 자체를 오염시킨다'며 주인공의 시도를 맹렬히 비난한다. 그녀의 격앙된 예언과 함께, 주인공은 모래바람 속에서 사라진 문명들의 비명과 선택의 흔적을 환영처럼 보게 된다. 동시에 어딘가에서 느껴지는 거대한 시선과 움직이지 않는 존재감에 압도당한다.",
			act: 'rising',
			boss: 'random_boss',
			order: 4,
			npc: 'Zahra_Pyra',
			title: '광신의 경고: 시선의 무게'
		},
		{
			boss: 'pool_052',
			order: 5,
			summary:
				"마침내 주인공은 사막의 심장부에서 '사구의 증인' 오르벨과 대면한다. 오르벨은 주인공의 모든 노력이 덧없음을 강조하며 '행동하지 않는 것만이 유일한 완전함이다'라고 속삭인다. 길잡이 당키는 과거의 동료들을 회상하며, 변화를 포기하지 않았던 그들의 의지를 떠올린다. 주인공은 오르벨과의 격렬한 대결 끝에 승리하지만, 오르벨은 쓰러지며 '…그래도… 너희의 선택을… 끝까지 지켜보겠다…'는 알 수 없는 말을 남긴다. 오르벨의 육신은 모래로 변하지만, 그 모래 속에서 작게나마 생명의 싹이 돋아나며, 주인공은 진정한 변화의 의미와 자신의 의지를 깨닫고 새로운 여정을 시작한다.",
			act: 'climax_finale',
			npc: 'Donkey',
			title: '사구의 증인: 선택의 끝, 변화의 시작'
		}
	],
	act_summary: {
		rising:
			"사막을 바꾸려는 주인공의 노력은 현지인 자피르의 회의적인 경고와 모래 폭풍으로 인해 번번이 실패한다. 이 과정에서 나이라를 통해 고대 문명의 소멸을 접하고, 광신도 자흐라 피라를 만나 '사구의 증인' 오르벨의 존재와 그의 비개입적 관점에 대한 충격적인 진실의 조각을 얻게 된다. 주인공은 자신의 의지와 사막의 거대한 섭리 사이에서 깊은 갈등을 겪는다.",
		climax_finale:
			"주인공은 사막의 모든 것을 지켜봐 온 '사구의 증인' 오르벨과 최후의 대결을 펼친다. 오르벨은 모든 변화의 덧없음을 주장하지만, 주인공은 당키의 도움과 자신의 강인한 의지로 그에게 맞선다. 대결 끝에 오르벨의 예기치 못한 '트위스트'가 드러나고, 주인공은 사막에 작은 생명의 싹을 틔우며 변화의 가능성을 증명한다. 사막의 섭리는 여전히 존재하지만, 주인공의 선택은 새로운 시작을 알린다.",
		intro:
			'주인공은 길잡이 당키와 함께 미지의 사막에 첫 발을 내딛는다. 황량한 풍경과 고대 유적의 잔해 속에서 사막의 오랜 역사와 냉혹한 섭리를 어렴풋이 느끼며, 작은 변화를 시도하지만 이내 좌절을 겪는다. 이는 앞으로 다가올 거대한 도전에 대한 전조가 된다.'
	},
	act_tone: {
		rising: {
			mood: '절망적이고 위협적인',
			narrative_role:
				'주인공의 노력이 사막의 거대한 섭리에 부딪히며 좌절을 겪고, 점차 보스의 존재와 그 의지가 드러난다.',
			tension: 3
		},
		climax_finale: {
			tension: 5,
			mood: '비장하고 운명적인',
			narrative_role:
				'사막의 증인과 최후의 대결을 통해 주인공은 세계의 진실을 마주하고, 자신의 선택과 의지의 가치를 증명한다.'
		},
		intro: {
			tension: 1,
			mood: '신비롭고 황량한',
			narrative_role:
				'미지의 사막과 그 속에 감춰진 거대한 비밀을 암시하며 주인공의 여정을 시작한다.'
		}
	},
	protagonist_goal:
		'황폐해진 사막에 새로운 생명과 변화를 가져오고, 잊힌 문명의 흔적 속에서 이 세계의 숨겨진 진실을 밝혀내는 것.',
	world: {
		rule: '사막의 모든 것은 결국 모래로 돌아간다. 어떤 위대한 문명도, 어떤 격렬한 변화도 시간 앞에서는 무의미하며, 사막은 그 모든 과정을 침묵으로 지켜본다.',
		secret:
			"이 세계는 '사구의 증인'이라 불리는 존재에 의해 시간과 변화의 순환이 관찰되고 기록된다. 인간의 선택, 문명의 흥망성쇠, 사랑과 파멸까지 모든 사건은 '결국 사라질 것들'로 인식되며, 개입은 이 순수한 관찰의 의미를 왜곡한다고 믿어진다.",
		setting:
			'끝없이 펼쳐진 모래사막, 시간마저 멈춘 듯한 고요함 속에 고대 문명의 잔해가 흩뿌려져 있다. 살아있는 모든 것은 사막의 섭리에 순응하거나 흔적도 없이 사라진다.'
	},
	npc_roles: {
		Donkey: {
			arc: '1화에서 주인공을 사막으로 이끄는 길잡이이자 초반부의 안정적인 동행자. 5화에서 오르벨과의 대결 이후, 주인공의 변화된 시각과 새로운 여정을 함께하는 역할로 연결된다.',
			role: '길잡이, 조력자, 사막의 현실을 대변하는 존재'
		},
		Zahra_Pyra: {
			arc: '4화에서 사막의 숨겨진 비밀과 오르벨의 존재에 대한 왜곡된 믿음을 가진 광신도로 등장. 주인공에게 충격적인 진실의 조각을 던져주며 갈등을 심화시키는 역할로 연결된다.',
			role: '광신도, 금기의 지식을 알고 있는 자'
		},
		Naira: {
			role: '고대 문명 연구자, 과거의 지식을 전달하는 자',
			arc: "3화에서 사막 깊은 곳에 숨겨진 고대 유적을 발견하고, 과거 문명의 흥망성쇠를 통해 오르벨의 '모든 것은 사라진다'는 관점을 간접적으로 드러내는 역할로 연결된다."
		},
		Zafir: {
			arc: '2화에서 주인공의 사막을 바꾸려는 시도를 회의적인 시선으로 바라보며, 사막의 가혹함과 변화의 덧없음을 경고하는 인물. 주인공이 겪을 시련을 암시하는 역할로 연결된다.',
			role: '회의적인 현지인, 경고를 전달하는 자'
		}
	}
};
