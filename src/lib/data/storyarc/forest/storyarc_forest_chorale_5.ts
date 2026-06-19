import type { StoryArc } from '$lib/types';

export const storyarc_forest_chorale_5: StoryArc = {
	id: 'forest_chorale_5',
	level: 5,
	chapter_name: {
		korean: '침묵의 합창',
		english: 'The Chorus of Silence',
		japanese: '沈黙の合唱',
		chinese: '寂静的合唱',
		french: 'Le Chœur du Silence',
		spanish: 'El Coro del Silencio',
		vietnamese: 'Dàn Hợp Xướng của Tĩnh Lặng',
		thai: 'คณะขับร้องแห่งความเงียบ',
		hindi: 'मौन का गायक मंडल'
	},
	theme: 'forest',
	rising_count: 3,

	world: {
		setting:
			'숲 한구석에, 모든 소리가 빨려 들어가 침묵에 잠긴 구역이 있다. 그곳을 지난 자는 어디선가 들려오는 속삭임에 홀려 돌아오지 못한다.',
		rule: '오래전부터 이 숲은 죽은 자의 기억을 \'소리\'로 간직한다고 전해진다.',
		secret:
			'침묵의 정체는, 영원한 지혜를 남기려고 자신들의 의식을 숲에 강제로 이식하려다 실패한 잊힌 아마존 주술사들의 집합 의식체다. 수많은 영혼과 목소리가 뒤섞여 하나의 기형적 생명체가 되었고, 불완전한 자신을 완성하려 지나가는 모든 정신을 흡수한다.'
	},

	protagonist_goal:
		'숲의 소리가 사라지는 \'침묵의 구역\'과, 그곳에서 들려오는 속삭임에 홀려 사라진 자들의 진실을 밝혀라.',

	act_tone: {
		intro: {
			mood: '고요한 위화감',
			tension: 1,
			narrative_role: '새소리도 바람도 멎은 침묵의 구역. 아름답도록 고요하지만, 그 고요가 불길하다.'
		},
		rising: {
			mood: '환청과 유혹',
			tension: 3,
			narrative_role:
				'침묵 속에서 다정한 속삭임이 들린다 — 죽은 이의 목소리, 그리운 이의 부름. 탐험대도 하나둘 그 목소리에 귀를 빼앗긴다.'
		},
		climax_finale: {
			mood: '불협화음의 광기',
			tension: 5,
			narrative_role:
				'이끼 군락이 수십 개의 입술로 찢어지며 뒤섞인 절규를 토한다. 속삭임의 정체는, 너희를 자신의 일부로 삼으려는 잊힌 영혼들의 합창이었다.'
		}
	},

	final_boss: {
		id: 'Whispering_Chorale_V1',
		name: 'Chorale',
		appearance:
			'무성한 숲 속, 거대한 고목 줄기에 엉겨 붙은 기괴한 이끼와 곰팡이 군락이다. 색색의 포자가 희미하게 빛나며, 마치 수천 개의 작은 눈동자처럼 반짝인다. 가까이 다가가면 미묘한 진동과 함께 나뭇가지 사이에서 사람의 귀 모양을 한 기형적인 돌기들이 돋아나 있는 것을 볼 수 있다. 그것들은 마치 숲의 모든 소리를 빨아들이려는 듯 어둠 속에서 조용히 꿈틀거린다.',
		surface_identity:
			'숲의 고요를 지키는 오래된 정령 혹은 신비로운 버섯 군락으로 알려져 있다. 때로는 길 잃은 자들에게 환청과 환영으로 길을 안내하는 숲의 목소리라고도 전해진다.',
		true_identity:
			'고대 아마존 부족의 잊힌 주술사들이 영원한 지혜를 남기기 위해 자신들의 의식을 숲에 강제로 이식하려다 실패한 결과물이다. 수많은 영혼과 목소리가 뒤섞여 하나의 기형적인 생명체가 되었고, 끝없이 새로운 정신을 흡수하여 불완전한 자신을 완성하려 한다.',
		motivation:
			'자신을 이루는 수많은 영혼의 불협화음을 잠재우고 완전한 하나의 존재로 거듭나기 위해, 숲을 지나가는 모든 생명체의 정신과 지식을 흡수하려 한다.',
		twist:
			'고목의 이끼 군락이 일제히 부풀어 오르며 수십 개의 입술이 찢어지듯 벌어진다. 그 안에서 수많은 절규와 속삭임, 그리고 알아들을 수 없는 고대 아마존어가 동시에 터져 나오며 탐험대의 정신을 파고든다. 탐험대가 혼란에 빠진 순간, 가장 큰 입술에서 끔찍하게 뒤틀린 목소리가 울려 퍼진다. "…우리는… 잊히지 않은 역사…! 너희의 고통이… 우리의 다음 노래가 될지니…! 영원히…!"'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '특정 구역에 들어서자 발소리도, 숨소리도 들리지 않는다. 완전한 침묵.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그 침묵은, 군락이 주변의 모든 소리를 먹어치우고 있었기 때문이다.'
		},
		{
			id: 'fs_02',
			hint: '침묵 속에서 누군가 \'아는 사람의 목소리\'로 이름을 부른다.',
			plant_act: 'rising',
			plant_room: 3,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그 목소리는 군락이 흡수한 옛 희생자들의 기억에서 끄집어낸 미끼였다.'
		},
		{
			id: 'fs_03',
			hint: '나뭇가지 사이에 사람의 귀를 닮은 돌기들이 돋아나 조용히 꿈틀거린다.',
			plant_act: 'rising',
			plant_room: 5,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '군락은 소리를 \'듣는\' 것이 아니라, 그것을 통째로 삼켜 자기 일부로 만들고 있었다.'
		},
		{
			id: 'fs_04',
			hint: '사라진 자들이 남긴 물건들이 모두 침묵의 구역 안쪽을 향해 놓여 있다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그들은 저항한 게 아니라, 속삭임에 홀려 스스로 군락 속으로 걸어 들어갔다.'
		}
	],

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '소리가 사라진 곳',
			boss: 'random_boss',
			npc: 'glen',
			summary:
				'새소리도 바람도 멎은 숲의 구역. 글렌이 멈춰 선다 — "여기, 내 발소리조차 안 들려." 아름답도록 고요한 침묵이 탐험대를 감싼다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '아는 목소리',
			boss: 'random_boss',
			npc: 'briar',
			summary:
				'침묵 속에서 누군가 다정하게 이름을 부른다 — 그리운 이의 목소리로. 브라이어가 홀린 듯 발을 옮긴다. "방금… 들었지? 분명 그 사람 목소리였어."'
		},
		{
			order: 3,
			act: 'rising',
			title: '귀를 닮은 것',
			boss: 'random_boss',
			npc: 'cedar',
			summary:
				'나뭇가지 사이에 사람의 귀를 닮은 돌기들이 돋아 꿈틀거린다. 시더가 소름 돋아 한다 — "이것들이… 우리 소리를 먹고 있어." 군락이 점점 커진다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '걸어 들어간 자들',
			boss: 'random_boss',
			npc: 'glen',
			summary:
				'사라진 자들의 유품이 모두 구역 안쪽을 향해 놓여 있다. 글렌이 깨닫는다 — 그들은 끌려간 게 아니라, 속삭임에 홀려 스스로 걸어 들어갔다. 돌아올 수 없는 곳으로.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '침묵의 합창',
			boss: 'pool_Whispering_Chorale_V1',
			npc: 'glen',
			summary:
				'이끼 군락이 수십 개의 입술로 찢어지며 뒤섞인 절규를 토한다. 속삭임의 정체는, 영원을 갈구하다 실패한 잊힌 주술사들의 집합 의식. 그들은 탐험대마저 \'다음 노래\'로 삼으려 한다. 침묵을 끝낼 것인가, 그 합창에 삼켜질 것인가.'
		}
	],

	act_summary: {
		intro: '소리가 사라진 숲의 구역. 아름답도록 고요한 그 침묵이 불길하다.',
		rising: '침묵 속 다정한 속삭임이 탐험대를 홀린다. 귀를 닮은 돌기들이 소리를 먹어치우고, 사라진 자들은 스스로 걸어 들어간 것이었다.',
		climax_finale: '속삭임의 정체는 영원을 갈구하다 뒤섞인 주술사들의 집합 의식. 그들은 탐험대마저 다음 노래로 삼으려 한다.'
	}
};
