import type { StoryArc } from '$lib/types';

// Bellus 시리즈 3편 (level 28) — 심화: 기억을 꿰매는 바늘방
export const storyarc_snowy_bellus_28: StoryArc = {
	id: 'snowy_bellus_28',
	level: 28,
	chapter_name: {
		korean: '바늘방의 자수',
		english: 'The Embroidery of the Needle Room',
		japanese: '針室の刺繍',
		chinese: '针室的刺绣',
		french: 'La Broderie de la Chambre aux Aiguilles',
		spanish: 'El Bordado de la Sala de Agujas',
		vietnamese: 'Đường Thêu Của Phòng Kim',
		thai: 'งานปักของห้องเข็ม',
		hindi: 'सुई-कक्ष की कशीदाकारी'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'탐험대가 열차 깊숙한 바늘방에 이른다. 수백 개의 은빛 얼음 바늘이 허공에 떠서, 박제된 자들에게서 뽑아낸 기억의 실로 거대한 자수를 짓는다. 벽면 가득, 멈춘 순간들이 한 폭의 그림처럼 꿰매여 있다.',
		rule: '바늘방에서는 사람의 기억이 실이 된다. 가장 빛나는 한순간을 뽑아내어 영원의 천에 박아 넣으면, 그 사람의 시간은 거기서 멈춘다.',
		secret:
			'벨루스가 짓는 자수는 무수한 사람들의 가장 아름다운 순간을 한 폭에 모은 거대한 박제화다. 그는 이것을 세상에서 가장 아름다운 작품이라 부른다. 그러나 실이 된 자들은 그 너머의 삶을 모두 잃었다.'
	},

	protagonist_goal: '기억을 실로 꿰매는 바늘방의 정체를 파악하고, 벨루스가 무엇을 짓고 있는지 알아내라.',

	act_tone: {
		intro: {
			mood: '경이와 불길함',
			tension: 2,
			narrative_role: '수백 개의 얼음 바늘이 허공에서 춤추듯 기억의 실을 꿰맨다. 아름답고도 불길하다.'
		},
		rising: {
			mood: '아름다움의 대가',
			tension: 4,
			narrative_role:
				'벽면의 자수에 박힌 순간들이 너무 찬란하다. 그러나 그 실 한 가닥마다 한 사람의 잃어버린 미래가 깃들어 있다.'
		},
		climax_finale: {
			mood: '실이 향하는 곳',
			tension: 5,
			narrative_role:
				'은빛 바늘 하나가 탐험대를 향해 방향을 튼다. 벨루스가 속삭인다. "너희의 순간도, 이 그림에 얼마나 잘 어울릴까."'
		}
	},

	final_boss: {
		id: 'ChronosStitcher_V0',
		name: 'Bellus',
		appearance:
			'A vast needle chamber inside the obsidian-and-brass ghost train, hundreds of silvery ice needles hovering in the air, weaving an enormous tapestry from threads of stolen memory-light. The walls are covered with embroidered frozen moments glowing like stained glass. A pale clock-face presides over the room, its hands turning backward. Beautiful and ominous, cinematic frozen lighting, haunting high-fantasy aesthetic.',
		surface_identity:
			'멈춰버린 세상의 선로 위를 달리는 유령 열차. 그에게 닿은 자들은 영원히 얼어붙은 채 가장 아름다운 순간에 박제된다.',
		true_identity:
			'벨루스는 사람들의 가장 아름다운 순간을 실로 뽑아내어 거대한 자수를 짓는 수집가다. 그가 무엇을 위해 이 박제화를 짓는지는 아직 드러나지 않았지만, 그것이 단순한 광기가 아닌 어떤 신념에서 비롯됐음이 어렴풋이 비친다.',
		motivation:
			'사람들의 가장 찬란한 순간을 모아 영원히 시들지 않는 작품으로 보존한다. 그에게 그것은 파괴로부터 아름다움을 지키는 유일한 길이다.',
		twist:
			'은빛 바늘 하나가 탐험대를 향해 방향을 튼다. 벨루스가 다정하게 속삭인다. "너희의 순간도, 이 그림에 얼마나 잘 어울릴까. 시들기 전에, 가장 빛날 때 박아 두자." 그가 짓는 아름다움이 곧 사람들의 빼앗긴 미래로 이루어졌다는 진실이 차갑게 다가온다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '벽면의 거대한 자수가 무수한 사람들의 멈춘 순간으로 짜여 있다. 한 폭이 곧 한 세상처럼 보인다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그 자수는 벨루스가 세상에서 가장 아름답다 믿는 박제화 — 무수한 잃어버린 미래의 집합이었다.'
		},
		{
			id: 'fs_02',
			hint: '기억의 실 한 가닥을 들여다보니, 그 안에 한 사람의 웃는 얼굴이 작게 갇혀 있다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '실 한 가닥마다 한 사람의 가장 빛나는 순간이 담겨 있었다. 자수는 곧 사람들이었다.'
		},
		{
			id: 'fs_03',
			hint: '바늘들이 박음질을 멈추는 법이 없다. 단 한순간의 쉼도 없이 영원히 꿰맨다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '쉼 없는 박음질은 벨루스의 집착이 결코 만족을 모른다는 것을 보여주었다.'
		},
		{
			id: 'fs_04',
			hint: '자수의 한 귀퉁이가 여전히 비어 있다. 마치 채워질 순간을 기다리는 듯하다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '비어 있던 귀퉁이는 탐험대의 순간을 위한 자리였다. 그는 그들마저 작품으로 삼으려 했다.'
		}
	],

	npc_roles: {
		eira: {
			role: '자수를 읽는 자',
			arc: '3편: 거대한 자수에 박힌 순간들을 한 폭씩 해독하며, 실 한 가닥이 곧 한 사람의 잃어버린 미래임을 기록한다.'
		},
		glace: {
			role: '비어 있음을 보는 자',
			arc: '3편: 자수의 빈 귀퉁이를 응시하며, 끝없이 채우려는 수집의 공허함을 담담히 짚는다.'
		},
		hild: {
			role: '실이 된 자를 기리는 자',
			arc: '3편: 실 속에 갇힌 얼굴들을 하나하나 알아보고, 작품이 된 망자들의 이름을 마음에 새긴다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '허공의 자수',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'탐험대가 수백 개의 얼음 바늘이 춤추는 바늘방에 이른다. 벽면 가득 멈춘 순간들이 자수로 짜여 있다. 에이라가 그 한 폭씩을 해독하며 기록을 시작한다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '실 속의 얼굴',
			boss: 'random_boss',
			npc: 'hild',
			summary:
				'힐드가 기억의 실 한 가닥을 들여다본다. 그 안에 한 사람의 웃는 얼굴이 작게 갇혀 있다. "이 실 한 가닥이… 한 사람이었군요." 작품이 된 망자들의 이름을 새긴다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '채워지지 않는 그림',
			boss: 'random_boss',
			npc: 'glace',
			summary:
				'글라스가 자수의 빈 귀퉁이를 응시한다. "아무리 채워도 끝나지 않아. 수집은 결코 완성되지 않는 법이지." 끝없는 집착의 공허함을 담담히 짚는다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '쉬지 않는 바늘',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 단 한순간도 멈추지 않는 바늘들의 박음질을 기록한다. 벨루스의 집착이 만족을 모른다는 것을, 그리고 그 아름다움이 무수한 미래로 짜였음을 적는다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '이 그림에 어울리게',
			boss: 'pool_035',
			npc: 'glace',
			summary:
				'은빛 바늘 하나가 탐험대를 향해 방향을 튼다. 벨루스가 속삭인다. "너희의 순간도 이 그림에 얼마나 잘 어울릴까. 시들기 전에 박아 두자." 비어 있던 귀퉁이가 그들의 자리임을 깨닫고, 글라스가 앞으로 나서 바늘방의 수호 자수와 맞선다.'
		}
	],

	act_summary: {
		intro: '수백 개의 얼음 바늘이 춤추는 바늘방. 벽면 가득 멈춘 순간들이 거대한 자수로 짜여 있다.',
		rising: '실 속 얼굴을 알아보는 힐드, 빈 귀퉁이의 공허를 짚는 글라스, 쉼 없는 바늘을 기록하는 에이라. 아름다움의 대가가 드러난다.',
		climax_finale: '탐험대의 순간마저 작품에 박으려는 벨루스. 비어 있던 자리가 그들을 위한 것이었음이 드러난다.'
	}
};
