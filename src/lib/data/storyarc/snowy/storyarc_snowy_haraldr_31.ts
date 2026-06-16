import type { StoryArc } from '$lib/types';

// Haraldr 시리즈 4편 (level 31) — 프랜차이즈의 깃발
export const storyarc_snowy_haraldr_31: StoryArc = {
	id: 'snowy_haraldr_31',
	level: 31,
	chapter_name: {
		korean: '프랜차이즈의 깃발',
		english: 'Banners of the Franchise',
		japanese: 'フランチャイズの旗',
		chinese: '加盟连锁的旗帜',
		french: 'Les Bannières de la Franchise',
		spanish: 'Los Estandartes de la Franquicia',
		vietnamese: 'Ngọn Cờ Của Chuỗi Cửa Hàng',
		thai: 'ธงแห่งแฟรนไชส์',
		hindi: 'फ़्रैंचाइज़ी के झंडे'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'설원 전역에 Haraldr의 깃발이 꽂히기 시작한다. 그는 "영광스러운 프랜차이즈"를 외치며 이 땅 전체를 자신의 점포로 만들려 한다. 깃발 아래 눈밭이 얼어붙어 간다.',
		rule: '깃발이 꽂힌 땅은 Haraldr의 영토다. 그 안에서는 사고파는 것 외의 모든 행위가 금지된다.',
		secret:
			'프랜차이즈 확장은 사업이 아니라 정복이다. 그의 전사적 본능이 "판매"라는 이름으로 설원을 집어삼키고 있다.'
	},

	protagonist_goal: 'Haraldr의 프랜차이즈 확장이 무엇을 향하고 있는지 막아라.',

	act_tone: {
		intro: {
			mood: '깃발의 행진',
			tension: 1,
			narrative_role: '설원 곳곳에 새 깃발이 꽂힌다. Haraldr의 목소리에 정복자의 기세가 섞이기 시작한다.'
		},
		rising: {
			mood: '점령의 압박',
			tension: 3,
			narrative_role:
				'깃발 아래 땅이 얼어붙고, 저항하는 자는 "경쟁자"로 간주된다. 장사꾼의 말투에 광전사의 호령이 겹쳐 들린다.'
		},
		climax_finale: {
			mood: '정복자의 본색',
			tension: 5,
			narrative_role:
				'프랜차이즈를 거부당하자 Haraldr가 깃발을 무기처럼 휘두른다. "판매"가 곧 "정복"이었음이 드러난다.'
		}
	},

	final_boss: {
		id: 'SnowViking_Haraldr_V1',
		name: 'Haraldr',
		appearance:
			'A clumsy snow-and-ice humanoid planting tattered merchant banners across a frozen plain, the banners shaped like Viking war standards. Crude runes glow faintly, multicolor syrup veins now spreading wider beneath its surface. It grips a banner pole like a battle spear, posture shifting from merchant to warrior. Cinematic snowy expanse, escalating high-fantasy aesthetic.',
		surface_identity:
			'설원 전체를 "영광스러운 프랜차이즈"로 만들려는 야심 찬 사장. 가는 곳마다 깃발을 꽂는다.',
		true_identity:
			'그의 프랜차이즈 확장은 정복이다. 장사꾼의 탈을 쓴 광전사의 본능이 설원을 한 점포씩 집어삼키고 있다.',
		motivation:
			'설원 전체를 자신의 영토로 만들고 싶어 한다. 그에게 "판매 구역 확장"과 "전장 정복"은 같은 말이다.',
		twist:
			'"이 땅은 전부 내 점포다!" Haraldr가 깃발 봉을 창처럼 고쳐 쥔다. 장사꾼의 말투가 광전사의 호령으로 바뀐다. "사지 않겠다면, 정복할 뿐!" 깃발을 무기처럼 휘두르며, 판매와 정복이 그에게 같은 것이었음이 드러난다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: 'Haraldr의 깃발이 옛 바이킹 전쟁 깃발과 똑같은 모양이다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그는 점포의 깃발이 아니라 전쟁의 깃발을 꽂고 있었다.'
		},
		{
			id: 'fs_02',
			hint: '깃발을 꽂을 때 그의 자세가 장사꾼이 아니라 전사의 것으로 바뀐다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '몸이 먼저 기억하고 있었다. 그는 본래 정복하는 자였다.'
		},
		{
			id: 'fs_03',
			hint: '깃발 아래 땅이 점점 더 깊고 차갑게 얼어붙는다. 생명이 사라진다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그의 영토 확장은 곧 설원의 죽음이었다.'
		},
		{
			id: 'fs_04',
			hint: '저항한 자들을 "경쟁자"라 부르며, 그들의 흔적이 깃발 아래 묻혀 있다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '경쟁자는 곧 그가 쓰러뜨린 적이었다. 판매 경쟁은 전투의 다른 이름이었다.'
		}
	],

	npc_roles: {
		eira: {
			role: '깃발의 기록자',
			arc: '4편: 점포 깃발이 옛 전쟁 깃발과 같음을 알아보고, 깃발 아래 묻힌 "경쟁자"들을 기록한다.'
		},
		ivar: {
			role: '거울에 비친 전사',
			arc: '4편: "판매=정복"이 자신의 영광 추구와 닮았음을 깨닫고 흔들린다 — 강함의 끝을 처음 자문한다.'
		},
		inka: {
			role: '죽어가는 땅의 애도자',
			arc: '4편: 영토 확장으로 얼어붙어 죽어가는 설원의 생명을 슬퍼한다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '꽂히는 깃발',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'탐험대가 설원에 새로 꽂힌 깃발들을 지난다. 에이라가 그 깃발이 옛 바이킹 전쟁 깃발과 똑같은 모양임을 알아보고 기록한다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '죽어가는 땅',
			boss: 'random_boss',
			npc: 'inka',
			summary:
				'인카가 깃발 아래 땅이 깊이 얼어붙어 생명이 사라진 것을 발견하고 슬퍼한다. 영토가 넓어질수록 설원이 죽어간다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '닮은 얼굴',
			boss: 'random_boss',
			npc: 'ivar',
			summary:
				'이바르가 깃발을 꽂는 Haraldr의 전사 자세를 본다. "판매=정복"이라는 그 말이 제 영광 추구와 겹쳐 흔들린다. "…나도 저렇게 되는 건가."'
		},
		{
			order: 4,
			act: 'rising',
			title: '경쟁자라는 이름',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 깃발 아래 묻힌 흔적들을 발견하고 기록한다. Haraldr가 "경쟁자"라 부른 자들이다. 판매 경쟁이 곧 전투였다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '사지 않겠다면 정복할 뿐',
			boss: 'pool_106',
			npc: 'ivar',
			summary:
				'프랜차이즈를 거부당한 Haraldr가 깃발 봉을 창처럼 고쳐 쥔다. "이 땅은 전부 내 점포다! 사지 않겠다면, 정복할 뿐!" 이바르가, 자신이 될 수도 있었던 모습과 정면으로 맞선다.'
		}
	],

	act_summary: {
		intro: '설원에 꽂히는 깃발들. 에이라가 그것이 옛 전쟁 깃발의 모양임을 알아본다.',
		rising: '죽어가는 땅을 슬퍼하는 인카, 자신과 닮은 모습에 흔들리는 이바르, 묻힌 경쟁자를 기록하는 에이라. 확장은 정복이었다.',
		climax_finale: '거부당하자 깃발을 창처럼 휘두르며, 판매와 정복이 그에게 같은 것이었음이 드러난다.'
	}
};
