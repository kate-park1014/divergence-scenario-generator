import type { StoryArc } from '../../types';
import { snowy_pools } from '../sample/monster';

export const storyarc_snowy_penguin: StoryArc = {
	id: 'snowy_archduke_finn',
	chapter_name: {
		korean: '펭귄 대공의 설산',
		english: "Archduke Penguin's Snowy Mountain",
		japanese: 'ペンギン大公の雪山',
		chinese: '企鹅大公的雪山',
		french: 'La Montagne Enneigée de l’Archiduc Pingouin',
		spanish: 'La Montaña Nevada del Archiduque Pingüino',
		vietnamese: 'Núi Tuyết của Đại Công Chim Cánh Cụt',
		thai: 'ภูเขาหิมะของท่านดยุกเพนกวิน',
		hindi: 'पेंगुइन आर्कड्यूक का बर्फीला पर्वत'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'끝없이 눈이 내리는 설산. 탐험대는 이 산을 지배한다는 "대공"의 소문을 듣고 올라왔다. 어딘가에서 작은 발자국이 줄지어 있다.',
		rule: '설산의 진정한 왕이 존재한다. 감히 도전하는 자는 얼음 처형을 당한다고 전해진다.',
		secret:
			'사실 대공은 추위를 엄청나게 많이 타는 펭귄이다. 따뜻한 남쪽 나라로 가려다 길을 잃고, 근처 몬스터들을 모아 왕 노릇을 하는 중. 솔직히 집에 가고 싶다.'
	},

	protagonist_goal: '설산을 지배한다는 "대공"의 정체를 밝혀라.',

	act_tone: {
		intro: {
			mood: '위엄과 의아함',
			tension: 1,
			narrative_role:
				'눈밭 위에 펼쳐진 과장된 현수막 — "대공 만세". 종이로 만든 듯한 장식들이 바람에 펄럭인다. 뭔가 어설프다.'
		},
		rising: {
			mood: '혼란과 김빠짐',
			tension: 3,
			narrative_role:
				'펭귄 신하들이 "대공"을 떠받드는데, 어딘가 전부 어색하다. 카드보드 팻말이 보이고, 옥좌 옆에 담요 자국이 남아있다. 진짜 왕 맞나?'
		},
		climax_finale: {
			mood: '허탈과 애정',
			tension: 5,
			narrative_role:
				'필살기 발동. 근데 자기 발에 걸려 넘어진다. 쭉 미끄러지면서 — "혹시 남는 전기장판 있니?" 분노도 공포도 아닌, 그냥 추운 펭귄이 드러난다.'
		}
	},

	final_boss: {
		id: 'ArchdukeFinnTheChilly',
		name: '펭귄 대공 핀(Archduke Finn)',
		appearance:
			'A round, plump penguin standing on a comically tall "throne" made of stacked ice cubes and frozen sardines. It wears a majestic but moth-eaten purple velvet cape fastened with a giant golden safety pin, and a crown that is clearly too large, constantly sliding over its left eye. In one wing, it grips a half-eaten frozen popsicle like a royal scepter. It wears neon orange ski goggles and a thick, hand-knitted wool muffler. Around it, tiny penguin minions hold up cardboard signs that say "SCARY BOSS" and "BE AFRAID." The background is a glittering snowy tundra with a soft, cinematic 3D animation style, vibrant colors, and a funny, festive atmosphere.',
		surface_identity: '설산의 진정한 왕이라 자칭하며 침입자에게 무자비한 얼음 처형을 예고하는 지배자.',
		true_identity:
			'사실은 추위를 엄청나게 많이 타는 펭귄. 따뜻한 남쪽 나라로 가려다 길을 잃어버려서, 그냥 여기 있는 몬스터들을 모아 왕 노릇을 하고 있다.',
		motivation:
			'탐험대가 가진 핫팩이나 방한 장비가 너무 탐난다. 솔직히 말해서, 그냥 누가 자기랑 눈싸움 한 판만 진심으로 해줬으면 좋겠다.',
		twist:
			'"자, 나의 필살기... 이름하여 [슈퍼 울트라 아이스 슬라이딩]이다!" 핀은 비장하게 외치며 돌진하지만, 발이 미끄러져 자기 발에 걸려 넘어진다. "아얏... 너희, 봤지? 나의 이 화려한 바디 체크를...!" 쓰러지면서 배를 깔고 쭉 미끄러져 나가며 중얼거린다 — "…이길 생각은 없었는데… 혹시 남는 전기장판 있니? 착불로 보내줘도 돼…"'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '얼음 옥좌 위에 담요가 눌린 자국과 핫팩 포장지가 떨어져 있다. 누군가 여기서 몸을 녹였다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '대공은 애초에 추위를 버티지 못했다. 옥좌는 따뜻한 피난처였을 뿐.'
		},
		{
			id: 'fs_02',
			hint: '펭귄 신하 둘이 구석에서 수근거린다 — "보스 무서운 척 좀 제대로 해보라니까."',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '연출이었다. 처음부터 전부, 카드보드 팻말까지.'
		},
		{
			id: 'fs_03',
			hint: '대공의 왕관이 계속 왼쪽 눈을 덮는다. 그때마다 조그맣게 한숨을 쉰다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '사이즈가 안 맞는다. 어디선가 주워온 왕관이었다.'
		},
		{
			id: 'fs_04',
			hint: '대공이 얼어붙은 사르딘 왕홀을 날개로 문지르고 있다. 녹이려는 것 같다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '먹으려고 했다. 왕홀이 아니라 점심이었다.'
		}
	],

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '얼어붙은 도착',
			boss: 'random_boss',
			npc: 'Ice',
			summary:
				'탐험대가 설산 초입에 도착한다. "대공 만세"라 적힌 현수막이 바람에 펄럭인다. 아이스가 합류한다. 현수막 글씨가 왠지 손글씨다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '미끄러지는 소문',
			boss: 'random_boss',
			npc: 'Roundy',
			summary:
				'라운디가 펭귄 신하 한 무리를 만난다. "대공은 무자비하다"고 외치는데 — 카드보드 팻말을 들고 있다. 탐험대는 고개를 갸웃한다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '왕을 자칭하는 자',
			boss: 'random_boss',
			npc: 'Roundy',
			summary:
				'지난번 방에서 만난 Roundy가 옥좌로 향하는 길의 흔적을 발견한다. 얼음 위에 담요 자국, 바닥에 핫팩 포장지. "…진짜 왕 맞아?"'
		},
		{
			order: 4,
			act: 'rising',
			title: '너무 큰 왕관',
			boss: 'random_boss',
			npc: 'Eiric',
			summary:
				'에이릭이 대공의 그림자를 처음 목격한다. 위풍당당하려 애쓰지만 왕관이 눈을 덮어 자꾸 휘청인다. 탐험대는 웃음을 참는다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '슈퍼 울트라 아이스 슬라이딩',
			boss: snowy_pools.pool_033.pool_id as `pool_${string}`,
			npc: 'Ice',
			summary:
				'대공 핀이 필살기를 외치며 돌진한다. 자기 발에 걸려 넘어지고, 배를 깔고 쭉 미끄러져 탐험대 발치까지 온다 — "혹시 남는 전기장판 있니? 착불로 보내줘도 돼…" 아이스는 조용히 담요를 꺼낸다.'
		}
	],

	act_summary: {
		intro: '설산의 "대공" 소문을 듣고 올라선다. 현수막은 엄숙한데 글씨가 손글씨다.',
		rising: '신하들의 카드보드 팻말, 녹인 왕홀, 눈을 덮는 왕관. 점점 이상하다.',
		climax_finale:
			'필살기 발동 → 자기 발에 걸려 슬라이딩 → 전기장판 요청. 대공은 그냥 집에 가고 싶었다.'
	}
};
