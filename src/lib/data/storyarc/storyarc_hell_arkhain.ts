import type { StoryArc } from '../../types';
import { hell_pools } from '../sample/monster';

export const storyarc_hell_arkhain: StoryArc = {
	id: 'RingBearer_V0',
	chapter_name: {
		korean: '계승자의 반지',
		english: 'The Ring of the Successor',
		japanese: '継承者の指輪',
		chinese: '继承者的戒指',
		french: 'L\'Anneau du Successeur',
		spanish: 'El Anillo del Sucesor',
		vietnamese: 'Chiếc Nhẫn Của Kẻ Kế Vị',
		thai: 'แหวนของผู้สืบทอด',
		hindi: 'उत्तराधिकारी की अंगूठी'
	},
	theme: 'hell',
	rising_count: 3,

	world: {
		setting:
			'무너진 왕좌의 회랑. 부서진 왕관과 녹아내린 황금이 곳곳에 흩어져 있다. 어딘가 깊은 곳에서 작은 황금 반지의 흔적이 떠돈다. 회랑을 떠도는 자들 사이에서 "반지를 손에 쥔 방랑자"에 대한 흐릿한 소문만 돌고 있다.',
		rule:
			'이 회랑은 한 번 들어선 자를 쉽게 놓아주지 않는다. 사라진 자들의 잔해엔 한 가지 공통점이 있다 — 손가락에 똑같은 황금 띠 자국.',
		secret:
			'반지를 "소유"하려는 모든 가능성이 집합되어 한 존재가 된다. 누군가 반지를 가지려는 순간, 그 욕망이 그를 완성시킨다. 즉, 플레이어의 선택이 곧 이 보스를 만든다.'
	},

	protagonist_goal: '반지를 안전한 곳에 봉인하거나 파괴할 방법을 찾아라.',

	act_tone: {
		intro: {
			mood: '서늘한 호기심',
			tension: 1,
			narrative_role:
				'무너진 왕좌의 회랑에 들어선다. 부서진 왕관이 곳곳에 흩어져 있다. 떠도는 자들이 "반지를 가진 방랑자"의 소문을 흘린다. 누구도 그를 직접 본 적은 없다.'
		},
		rising: {
			mood: '쌓이는 단서',
			tension: 3,
			narrative_role:
				'반지의 향기에 깨어난 죽지 않은 자들이 길을 막는다. 사라진 자들의 손가락마다 같은 황금 띠 자국. 그림자가 가끔 둘로 보인다. 어딘가에서 부드러운 환청이 속삭인다.'
		},
		climax_finale: {
			mood: '분열과 후회',
			tension: 5,
			narrative_role:
				'마침내 그가 모습을 드러낸다. 반지가 손에 쥐어지는 순간, 시야가 겹쳐진다. 수십 개의 미래가 동시에 보인다. 아르카인의 몸이 모든 가능성으로 분열한다 — "반지를 원한 순간부터… 넌 이미 나였다."'
		}
	},

	final_boss: {
		id: 'RingBearer_V0',
		name: '계승자 아르카인 (Arkhain)',
		appearance_npc:
			'A calm, composed wanderer cloaked in desert-stained robes. A faint golden ring hangs from a chain around his neck, never worn. He speaks with quiet authority, offering guidance about power, destiny, and "what must be done." His presence feels reassuring, like someone who understands your burdens.',
		appearance_boss:
			'A fractured entity made of countless overlapping versions of itself, each wearing the ring on a different finger. Some are kings, some are corpses, some are shadows. The ring glows violently, stretching reality around it. Limbs duplicate and collapse, as if multiple futures are fighting to exist at once. The ground beneath becomes a warped throne room of broken crowns and melted gold.',
		surface_identity: '반지의 힘을 이해하고 통제할 수 있는 유일한 안내자. 올바른 사용법을 알려주는 조력자.',
		true_identity:
			'반지를 "소유"하려는 모든 가능성이 집합된 존재. 누구든 반지를 가지려는 순간, 그 욕망이 이 존재를 완성시킨다. 즉, 플레이어의 선택이 곧 이 보스를 만든다.',
		motivation:
			'탐험대가 반지를 포기하지 못하도록 유도한다. 더 나은 선택, 더 큰 힘, 더 빠른 해결을 제시하며 결국 반지를 쥐게 만든다.',
		twist:
			'"넌 다르게 쓸 수 있어." 아르카인은 조용히 속삭인다. "망가뜨리는 게 아니라… 바로잡는 거지." 손에 반지가 쥐어지는 순간 — 시야가 겹쳐진다. 수십 개의 미래가 동시에 보인다. 왕이 된 너, 파괴자가 된 너, 아무것도 남기지 못한 너. 그의 목소리가 겹친다 — "봐… 전부 너야." 몸이 갈라지듯 분열한다. 이미 늦었다. "반지를 원한 순간부터… 넌 이미 나였다."'
	},

	global_foreshadowing: [
		{
			id: 'ar_01',
			hint: '회랑에서 사라진 자들의 잔해엔 한 가지 공통점이 있다 — 손가락에 똑같은 가는 황금 띠 자국.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그 자국은 같은 반지가 거쳐간 흔적이었다. 모든 사라진 자가 결국 그를 완성하는 조각이 됐다.'
		},
		{
			id: 'ar_02',
			hint: '회랑 곳곳에 부서진 왕관이 흩어져 있다. 모두 크기와 모양이 미묘하게 같다. 마치 한 사람이 여러 번 썼던 것처럼.',
			plant_act: 'rising',
			plant_room: 3,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '왕관들은 그가 거쳐온 가능성들의 잔해였다. 모든 미래에서 그는 한 번씩 왕이었다.'
		},
		{
			id: 'ar_03',
			hint: '복도를 지날 때 자기 그림자가 가끔 두 개로 보인다. 한 박자 늦게 따라붙는 그림자가 있다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그림자들은 이미 반지를 쥔 다른 가능성의 자기였다. 회랑 자체가 그 가능성을 모으고 있었다.'
		},
		{
			id: 'ar_04',
			hint: '회랑 깊은 곳에서 누군가 부드럽게 속삭이는 환청이 들린다. "한 번만 손에 올려놓아 봐. 이해할 수 있을 거야."',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그 환청은 곧 만나게 될 자의 목소리였다. 듣는 자의 욕망에 맞춰 미리 다가오고 있었다.'
		}
	],

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '사라진 자들',
			boss: 'random_boss',
			npc: 'king_borin',
			summary:
				'무너진 왕좌의 회랑에 들어선다. 부서진 왕관과 녹아내린 황금이 곳곳에 흩어져 있다. 입구에서 만난 보린이 낮은 목소리로 경고한다 — "여기서 사라진 사람들 손가락엔 다 똑같은 황금 띠 자국이 있었어. 누군가 모으는 자가 있다고들 해." 누구도 그를 직접 본 적은 없다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '왕좌의 왕',
			boss: 'random_boss',
			npc: 'king_borin',
			summary:
				'무너진 왕좌 한가운데서 죽지 않은 왕이 깨어난다. 반지의 향기를 맡고 일어선 자다. "그것은… 내 것이다…" 거대한 유령 군세가 탐험대를 포위한다. 보린이 검을 든다. "내가 길을 열겠다, 너희는 빨리 통과해."'
		},
		{
			order: 3,
			act: 'rising',
			title: '발레리우스의 후회',
			boss: 'random_boss',
			npc: 'valerius',
			summary:
				'전투 후, 산산조각 난 왕관 더미 옆에서 발레리우스가 입을 연다. 그도 한때 힘 있는 물건을 손에 쥔 적이 있었다. "통제할 수 있다고 믿었지. 결국 통제당한 건 나였어." 일행은 잠시 말이 없다. 그가 덧붙인다. "이 회랑에서 들리는 어떤 권유든, 의심해도 좋아."'
		},
		{
			order: 4,
			act: 'rising',
			title: '두 개의 그림자',
			boss: 'random_boss',
			npc: 'lysandra',
			summary:
				'좁은 통로를 지나는데 일행 각자의 그림자가 가끔 두 개로 보인다. 한 박자 늦게 따라붙는 그림자가 무기처럼 솟아오른다 — 분신이 된 가능성들이 탐험대를 공격한다. 회랑 깊은 곳에서 부드러운 환청이 들린다. "한 번만 손에 올려놓아 봐. 이해할 수 있을 거야."'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '전부 너야',
			boss: hell_pools.pool_082.pool_id as `pool_${string}`,
			npc: 'morwenna',
			summary:
				'회랑 끝의 작은 광장. 처음 보는 한 방랑자가 그곳에 서 있다. 사막 먼지를 쓴 로브, 목에 걸린 작은 황금 반지. 그가 조용히 미소 짓는다. "오래 걸리셨네요. 그 반지에 대해 제가 잘 알아요." 그가 반지를 손바닥에 올려 내민다. 손에 쥐어지는 순간 — 시야가 겹쳐진다. 왕이 된 나, 파괴자가 된 나, 아무것도 남기지 못한 나. 그의 몸이 수십 개의 자신으로 분열한다. 손가락마다 같은 반지를 끼고 있다. "봐… 전부 너야. 반지를 원한 순간부터… 넌 이미 나였다."'
		}
	],

	act_summary: {
		intro: '무너진 왕좌의 회랑에 들어선다. 사라진 자들에 대한 소문만 떠돈다 — 손가락에 같은 황금 띠 자국.',
		rising: '깨어난 죽지 않은 왕, 발레리우스의 후회담, 두 개로 갈라진 그림자들. 어디서도 방랑자 본인은 보이지 않는다.',
		climax_finale: '회랑 끝에서 마침내 그가 모습을 드러낸다. 반지를 쥔 순간 모든 가능성이 너 자신으로 펼쳐진다.'
	}
};
