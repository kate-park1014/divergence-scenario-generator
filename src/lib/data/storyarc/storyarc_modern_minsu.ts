import type { StoryArc } from '../../types';
import { modern_pools } from '../sample/monster';

export const storyarc_modern_minsu: StoryArc = {
	id: 'ExArchive_V0',
	chapter_name: {
		korean: '그때로 돌아가면',
		english: 'If We Could Go Back',
		japanese: 'あの頃に戻れたら',
		chinese: '如果回到那时',
		french: 'Si Nous Pouvions Revenir en Arrière',
		spanish: 'Si Pudiéramos Volver',
		vietnamese: 'Nếu Có Thể Quay Lại',
		thai: 'ถ้ากลับไปตอนนั้นได้',
		hindi: 'अगर हम वापस जा सकते'
	},
	theme: 'modern',
	rising_count: 3,

	world: {
		setting:
			'시간이 멈춘 듯한 오래된 동네. 빛바랜 간판, 멈춰 있는 가로등 시계, 골목마다 빛바랜 사진과 엽서가 떨어져 있다. 누군가 이곳에서 사라졌다는 단서가 탐험대를 이끈다. 어디선가 옛 노래가 작게 흘러나온다.',
		rule:
			'이 동네에서는 머무는 사람이 점점 과거의 한 장면처럼 변한다. 발걸음이 무거워지고, 옛 기억이 너무 또렷하게 떠오른다. 사람들은 이곳을 지나치되 머물지 않는다.',
		secret:
			'동네 어딘가의 작은 빌라에 한 사람이 살고 있다. 그는 과거를 미화해 현재를 부정하게 만드는 존재다. 끝난 관계를 살아있는 것처럼 유지하고, 머무는 자를 추억의 장면 속에 가둔다.'
	},

	protagonist_goal: '추억의 방에서 빠져나와 현재로 돌아가라.',

	act_tone: {
		intro: {
			mood: '낯선 그리움',
			tension: 1,
			narrative_role:
				'시간이 멈춘 듯한 오래된 동네에 들어선다. 빛바랜 사진과 엽서가 골목에 떨어져 있다. 누구도 이곳에 살지 않는 것처럼 보이지만, 어딘가에서 옛 노래가 흘러나온다.'
		},
		rising: {
			mood: '쌓이는 추억의 무게',
			tension: 3,
			narrative_role:
				'머물수록 발걸음이 무거워진다. 옛 사물들이 슬쩍 움직이고, 끝난 관계의 흔적이 너무 또렷하게 남아 있다. 동행하는 NPC가 자기 과거를 자꾸 떠올린다.'
		},
		climax_finale: {
			mood: '체념과 자각',
			tension: 5,
			narrative_role:
				'마침내 작은 빌라 한 채 앞에 도착한다. 다정한 사람이 문을 연다 — "오랜만이야. 들어와." 장면이 반복되고, 또 반복된다. 똑같이 끝난다. 똑같이 다시 시작된다.'
		}
	},

	final_boss: {
		id: 'ExArchive_V0',
		name: 'memory keeper',
		appearance_npc:
			'A nostalgic person smiling softly while looking at old photos. They casually bring up memories like "그때 진짜 재밌었지." 따뜻하고 harmless한 분위기.',
		appearance_boss:
			'A massive entity made of floating memories—photos, voice messages, old chats. Each memory loops endlessly. The environment constantly shifts between past scenes, trapping the player inside. Everything looks warm… but slightly off.',
		surface_identity: '좋았던 추억을 간직하는 다정한 사람.',
		true_identity: '과거를 미화하여 현재를 부정하게 만드는 존재. 이미 끝난 관계를 계속 살아있는 것처럼 유지한다.',
		motivation: '탐험대가 앞으로 나아가지 못하고 과거에 머물게 만든다.',
		twist:
			'"그때로 돌아가면… 괜찮을 것 같지 않아?" 장면이 반복된다. 웃고, 대화하고, 행복했던 순간. 하지만… 똑같이 끝난다. 다시 시작된다. "이번엔 다를 거야." 아니다. 항상 같았다.'
	},

	global_foreshadowing: [
		{
			id: 'mn_01',
			hint: '동네 골목에 떨어진 사진들이 모두 같은 계절을 담고 있다. 가로등 시계도 그 계절에 멈춰 있다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '이 동네 자체가 한 사람의 미화된 기억 속 한 장면이었다. 계절은 그 시절에 박제되어 있다.'
		},
		{
			id: 'mn_02',
			hint: '버려진 공중전화 부스에 들어가본다. 수화기에서 누군가의 옛 음성 메시지가 끊임없이 반복 재생된다.',
			plant_act: 'rising',
			plant_room: 3,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '메시지는 끝나지 않게 반복되고 있었다. 끝난 관계를 살아있는 것처럼 유지하는 장치였다.'
		},
		{
			id: 'mn_03',
			hint: '거리에 떨어진 사진 속 사람들 중 한 명의 얼굴이 유독 흐릿하다. 가까이 보려 하면 더 흐려진다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그 사람은 이미 떠난 상대였다. 미화된 기억이 얼굴부터 지운 것이다.'
		},
		{
			id: 'mn_04',
			hint: '동네 어디선가 환청처럼 누군가 다정하게 묻는 소리가 들린다 — "그때로 돌아가면, 괜찮을 것 같지 않아?"',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그 목소리는 곧 만나게 될 자의 것이었다. 머무는 자를 천천히 그의 빌라 쪽으로 끌어당기고 있었다.'
		}
	],

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '시간이 멈춘 동네',
			boss: 'random_boss',
			npc: 'luna',
			summary:
				'시간이 멈춘 듯한 오래된 동네에 들어선다. 빛바랜 간판, 멈춘 가로등 시계. 골목에 떨어진 사진과 엽서들이 모두 같은 계절을 담고 있다. 누군가 이곳에서 사라졌다는 단서를 따라 들어왔다. 어디선가 옛 노래가 작게 흘러나온다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '머무는 자를 잡는 그림자',
			boss: 'random_boss',
			npc: 'nyxaria',
			summary:
				'골목 한쪽, 벤치에 앉아 있던 노인들이 미동도 없다. 가까이 가자 그들을 감싸고 있던 일그러진 그림자가 솟아오른다 — 머무는 자를 동네에 묶어두는 존재. 닉사리아가 외친다. "이런 게 이 동네 곳곳에 있어. 너무 오래 앉아 있으면 안 돼." 그림자를 베어낸다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '아리아의 작별',
			boss: 'random_boss',
			npc: 'aria',
			summary:
				'문을 닫은 작은 카페 앞에 잠깐 멈춰 선다. 아리아가 유리창에 비친 자기 모습을 보다가 입을 연다. 오랜 친구 한 명과 말없이 멀어진 일. "그 시절을 자꾸 다시 보고 싶어지는 게 무서워. 거기 멈춰버릴까 봐." 일행이 조용히 듣는다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '되살아나는 사물들',
			boss: 'random_boss',
			npc: 'aria',
			summary:
				'골목 안쪽으로 들어갈수록 떨어져 있던 사진과 엽서가 떠올라 일행 주위를 맴돈다. 버려진 공중전화에서 끊임없이 옛 음성 메시지가 반복된다. 사진 속 흐릿한 얼굴들이 입을 열어 추억의 환영을 일행에게 던진다. 어디선가 다정한 환청이 들린다. "그때로 돌아가면… 괜찮을 것 같지 않아?"'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '항상 같았다',
			boss: modern_pools.pool_099.pool_id as `pool_${string}`,
			npc: 'luna',
			summary:
				'골목 끝의 작은 빌라 한 채. 문이 열려 있다. 안에는 빛바랜 사진이 가득한 작은 방, 책상 위 옛 휴대폰. 다정해 보이는 한 사람이 앨범을 펼치며 미소 짓는다 — "오랜만이야. 그때 진짜 재밌었지." 장면이 반복된다. 웃고, 대화하고, 행복했던 순간. 그러나 끝은 똑같다. 다시 시작된다. "이번엔 다를 거야." 아니다. 항상 같았다. 사방의 사진과 음성 메시지가 떠올라 거대한 형체가 된다. 따뜻하지만, 어딘가 어긋난.'
		}
	],

	act_summary: {
		intro: '시간이 멈춘 동네. 골목마다 같은 계절의 사진과 엽서가 떨어져 있다.',
		rising: '머무는 자를 잡는 그림자, 아리아의 작별 이야기, 떠오르는 사진과 환청. 누군가 다정하게 부른다.',
		climax_finale: '골목 끝 작은 빌라에서 마침내 그를 만난다. "이번엔 다를 거야." 아니다. 항상 같았다.'
	}
};
