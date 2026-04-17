import type { StoryArc } from '../../types';
import { snowy_pools } from '../sample/monster';

export const storyarc_snowy_stitcher: StoryArc = {
	id: 'snowy_bellus_chronostitcher',
	chapter_name: {
		korean: '박제된 찰나',
		english: 'The Preserved Instant',
		japanese: '封じられた刹那',
		chinese: '被封存的瞬间',
		french: 'L’Instant Préservé',
		spanish: 'El Instante Preservado',
		vietnamese: 'Khoảnh Khắc Bị Niêm Phong',
		thai: 'ชั่วขณะที่ถูกผนึก',
		hindi: 'संरक्षित क्षण'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'설산 중턱, 오래전에 끊긴 옛 시계탑 선로. 밤이면 없어야 할 유령 열차가 기적 소리도 없이 그 위를 미끄러져 들어온다. 선로가 지나간 자리에는 사람들이 "가장 빛나던 표정" 그대로 푸른 얼음 속에 박제돼 서 있다.',
		rule: '열차의 그림자가 닿은 시간은 더 흐르지 않는다. 그 안에선 노화도, 치유도, 이별도 없다. 대신 밖에서는 그들을 기억하는 일조차 얼어붙는다.',
		secret:
			'벨루스는 한때 "시간을 배달하던" 집찰관이었다. 세상이 끝나는 미래를 엿본 뒤, "가장 아름다운 지금"을 얼려 보관하는 것이 유일한 구원이라 믿게 됐다. 그의 수천 개 바늘은 사람들의 행복한 순간만을 정확히 포착해 꿰맨다.'
	},

	protagonist_goal: '멈춘 선로를 끊어, 박제된 순간들을 다시 흐르는 시간으로 돌려보내라.',

	act_tone: {
		intro: {
			mood: '멎은 듯한 고요',
			tension: 1,
			narrative_role:
				'탐험대가 폐쇄된 옛 선로 위에 선다. 레일은 이미 오래전에 끊겼다. 그런데 최근에 앉은 서리 자국. 아스린이 내쉰 입김이 허공에서 멎는다. 라운디가 그것을 손가락으로 툭 친다 — 움직이지 않는다.'
		},
		rising: {
			mood: '박제된 행복',
			tension: 3,
			narrative_role:
				'푸른 얼음 속에 웃고 있는 사람들. 손을 흔들고, 입을 맞추고, 촛불을 부는 순간. 너무 아름다워서 오히려 섬뜩하다. 은빛 실이 레일 위에 남아있고, 만지면 손목에 차가운 결정이 맺힌다.'
		},
		climax_finale: {
			mood: '흐름을 되찾다',
			tension: 5,
			narrative_role:
				'거꾸로 도는 시계면 뒤에서 벨루스가 시계태엽 감기는 웃음을 낸다. "왜 도망치니?" 수천 개 바늘이 탐험대의 가장 빛나는 표정을 겨눈다. 아스린이 손목의 얼음 결정을 뜯어내 선로 위에 내리친다 — "흉해질지라도, 우리는 흐르고 싶어요."'
		}
	},

	final_boss: {
		id: 'ChronosStitcher_V0',
		name: '기록집행관 벨루스 (Bellus)',
		appearance:
			'A surreal, Victorian-style train engine made of polished obsidian and brass, with giant clock hands instead of cowcatchers. Its "limbs" are hundreds of long, spindly sewing needles made of silver ice, stitching frozen memory-shards into a massive, translucent rail that floats in mid-air. The face of the boss is a giant, glowing clock face behind a frozen glass dome, where the hands move backward. It leaves a trail of "stuck time" — blue spectral afterimages of people frozen in their happiest moments. Photorealistic steampunk, eerie but beautiful, high-contrast lighting between the cold blue ice and warm ticking gold mechanisms.',
		surface_identity:
			'멈춰버린 세상의 선로 위를 달리는 유령 열차. 그에게 닿은 자들은 영원히 얼어붙은 채 가장 아름다운 순간에 박제된다.',
		true_identity:
			'과거에 시간을 배달하던 집찰관. 모든 것이 파괴되는 미래를 보았고, 세상을 구하는 유일한 방법은 "가장 아름다운 지금 이 순간"을 얼려서 영구 보존하는 것이라 믿게 된 광기 어린 수집가.',
		motivation:
			'탐험대가 시간을 다시 흐르게 하려는 것을 "파괴"라고 생각한다. 그들이 나이를 먹고, 병들고, 결국 죽는 것을 막기 위해—그들의 시간을 여기서 "가져가" 주려 한다.',
		twist:
			'"왜 도망치니? 한 걸음만 더 가면 늙지도, 잊혀지지도 않는 영원이 있는데." 벨루스는 시계태엽 감기는 웃음소리를 내며 속삭인다. "너희의 가장 찬란한 표정을 내가 방금 실로 꿰맸어. 이제 영원히 내 거야." 쓰러지며 시계 유리가 깨질 때, 그는 조각난 태엽 사이로 말한다 — "…시간이 흐르면… 결국 모든 게 흉해질 텐데… 왜 굳이 그 지옥으로 가려는 거야?"'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '끊긴 선로 끝에 가족사진 한 장이 얼음 속에 박혀 있다. 모두 환하게 웃고 있다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '벨루스가 가장 처음 꿰맨 순간. "잃기 전에 보존"하려 했던 집착의 시작.'
		},
		{
			id: 'fs_02',
			hint: '레일 틈에서 은빛 실이 한 가닥 뻗어 나와 있다. 바람에도 떨리지 않는다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '벨루스의 수천 바늘 중 하나. 행복한 순간을 정확히 포착해 선로에 꿰매 고정한다.'
		},
		{
			id: 'fs_03',
			hint: '박제된 아이가 생일 촛불을 부는 자세로 얼어 있다. 숫자는 일곱.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그 아이는 영원히 일곱 살이다. 벨루스는 그것을 "구원"이라 부른다.'
		},
		{
			id: 'fs_04',
			hint: '옥좌실 앞 시계 하나가 거꾸로 돌고 있다. 바늘이 멈출 때마다 탐험대의 숨이 잠시 얼어붙는다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '벨루스의 시계면. 그의 눈이자 심장이다. 깨지는 순간 박제가 풀린다.'
		}
	],

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '멎은 입김',
			boss: 'random_boss',
			npc: 'Asrin',
			summary:
				'탐험대가 폐쇄된 옛 선로 위에 도착한다. 아스린이 한숨을 내쉬는데 입김이 허공에서 멈춘다. 라운디가 그걸 손가락으로 툭 건드린다 — "…이거 안 흩어지는데." 레일에 최근 서리 자국. 무언가가 방금 지나갔다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '웃고 있는 얼음',
			boss: 'random_boss',
			npc: 'Asrin',
			summary:
				'선로 옆으로 박제된 사람들. 모두 웃고 있다. 아스린이 어느 얼굴 앞에서 멈춘다 — "…이 사람, 옆집 할머니였어. 재작년에 사라졌다고 했어." 라운디가 조용히 그녀의 어깨를 잡아당긴다. "만지지 마."'
		},
		{
			order: 3,
			act: 'rising',
			title: '바늘이 지나간 자리',
			boss: 'random_boss',
			npc: 'Roundy',
			summary:
				'라운디가 레일 틈에서 은빛 실 한 가닥을 발견한다. 건드리자 차갑게 튕겨 나온다. 그 순간 아스린의 손목에 작은 결정이 맺힌다 — "…뭐가 꿰매어지고 있어." 라운디가 그 결정을 손톱으로 긁어낸다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '일곱 살의 촛불',
			boss: 'random_boss',
			npc: 'Asrin',
			summary:
				'박제된 아이가 생일 초를 부는 자세로 얼어 있다. 촛불 숫자는 일곱. 아스린이 얼음에 손을 얹자 아이의 눈동자가 아주 살짝 움직인다. "…안에 있어. 살아 있어." 라운디가 주먹으로 얼음을 두드린다 — 깨지지 않는다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '흐르고 싶어요',
			boss: snowy_pools.pool_035.pool_id as `pool_${string}`,
			npc: 'Asrin',
			summary:
				'거꾸로 도는 클럭페이스 뒤에서 벨루스가 시계태엽 감기는 웃음을 낸다. "한 걸음만 더 오면 영원이 있는데." 수천 바늘이 탐험대의 가장 빛나는 표정을 겨눈다. 아스린이 손목의 얼음 결정을 뜯어내 선로 위에 내리친다 — "흉해질지라도, 우리는 흐르고 싶어요." 라운디가 그 옆에서 레일을 찍어 끊는다. 클럭페이스가 금이 가며 박제된 순간들이 하나씩 다시 움직이기 시작한다.'
		}
	],

	act_summary: {
		intro: '폐쇄된 옛 선로에 새 서리가 앉아있다. 아스린의 입김조차 허공에서 멎어 있다.',
		rising:
			'박제된 사람들, 바늘 자국, 거꾸로 가는 시계. 아스린의 손목에도 결정이 맺히고, 라운디가 그것을 긁어낸다.',
		climax_finale:
			'"흉해질지라도, 흐르고 싶어요." 벨루스의 클럭페이스가 깨지고, 박제된 찰나들이 다시 흐르기 시작한다.'
	}
};
