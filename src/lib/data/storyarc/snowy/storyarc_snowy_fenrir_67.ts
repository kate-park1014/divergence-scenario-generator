import type { StoryArc } from '$lib/types';

// Fenrir 시리즈 7편 (level 67) — 이름 없는 것
export const storyarc_snowy_fenrir_67: StoryArc = {
	id: 'snowy_fenrir_67',
	level: 67,
	chapter_name: {
		korean: '이름 없는 것',
		english: 'The Nameless One',
		japanese: '名もなきもの',
		chinese: '无名之物',
		french: 'Le Sans-Nom',
		spanish: 'Lo Que No Tiene Nombre',
		vietnamese: 'Kẻ Không Tên',
		thai: 'สิ่งที่ไร้นาม',
		hindi: 'नामहीन वस्तु'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'옛 인간들이 늑대를 두려워하며 새긴 흔적이 곳곳에 남은 구역. 바위마다 "종말의 늑대"라는 이름과 경고가 새겨져 있다. 그러나 늑대 자신은 그 이름에 아무 반응도 하지 않는다. 그것은 분노도, 자아도 없다.',
		rule: '늑대에게 이름을 불러도 소용없다. 그것은 인간이 두려움으로 붙인 이름일 뿐, 그 안에는 응답할 자아가 없다.',
		secret:
			'종말의 늑대라는 이름은 인간들이 두려움에 붙인 것일 뿐이다. 이 존재에게는 자아도 분노도 없다. 오직 결코 채워지지 않는 텅 빈 위장과, 무엇이든 삼키려는 본능만이 남아 있다.'
	},

	protagonist_goal: '늑대가 이름에도 분노에도 반응하지 않는 이유, 자아 없는 존재의 정체를 밝혀라.',

	act_tone: {
		intro: {
			mood: '새겨진 두려움',
			tension: 1,
			narrative_role: '바위마다 "종말의 늑대"라는 이름과 경고가 새겨져 있다. 인간들이 두려워하며 남긴 것이다.'
		},
		rising: {
			mood: '응답 없는 이름',
			tension: 3,
			narrative_role:
				'이름을 불러도, 자극해도 늑대는 반응하지 않는다. 그 안엔 응답할 자아가 없었다.'
		},
		climax_finale: {
			mood: '텅 빈 본능',
			tension: 5,
			narrative_role:
				'탐험대가 자아 없음을 알아내자, 늑대가 그저 가장 가까운 것을 향해 입을 벌린다. "…이름도, 분노도 없다… 그저… 삼킬 뿐…"'
		}
	},

	final_boss: {
		id: 'HollowHowl_Fenrir_V1',
		name: 'Fenrir',
		appearance:
			'A region marked with ancient human carvings of fear, boulders inscribed with the name Wolf of the End and dire warnings, none of which the wolf reacts to at all. It moves without anger or will, only an empty mechanical hunger driving the carcass frame. Cinematic indifferent hollow snowy lighting, eerie high-fantasy aesthetic.',
		surface_identity:
			'전설이 종말의 늑대라 부른 흉포한 마수처럼 여겨지는 존재. 그러나 그것은 제 이름에 아무 반응도 하지 않는다.',
		true_identity:
			'종말의 늑대라는 이름은 인간들이 두려움에 붙인 것일 뿐이다. 이 존재에게는 자아도 분노도 없다. 오직 결코 채워지지 않는 텅 빈 위장과, 무엇이든 삼키려는 본능만이 남아 있다.',
		motivation:
			'자아도 분노도 없이, 오직 굶주림의 본능만으로 움직인다. 무엇을 향한 적의도 아니고, 그저 빈자리를 메우려는 맹목적 삼킴이다.',
		twist:
			'탐험대가 자아 없음을 알아내자, 늑대가 그저 가장 가까운 것을 향해 입을 벌린다. "…이름도, 분노도 없다… 그저… 삼킬 뿐…" 두려움이 붙인 이름 뒤에는, 자아 없는 텅 빈 본능만이 있었다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '바위마다 새겨진 이름과 경고가 모두 인간의 손길로 새겨져 있다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '이름은 늑대의 것이 아니라 인간이 두려움으로 붙인 것이었다.'
		},
		{
			id: 'fs_02',
			hint: '이름을 불러도, 도발해도 늑대는 조금도 반응하지 않는다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '반응이 없는 것은 응답할 자아가 없었기 때문이다.'
		},
		{
			id: 'fs_03',
			hint: '늑대의 시선엔 적의도 호기심도 없이, 그저 텅 빈 응시만 있다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '텅 빈 응시는 분노 없는 본능이었다 — 미워하지도 노리지도 않는.'
		},
		{
			id: 'fs_04',
			hint: '늑대는 가장 가까운 것이면 무엇이든 가리지 않고 입을 벌린다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '가리지 않는 삼킴은 의지 없는 굶주림이었다 — 그저 빈자리를 메우려는.'
		}
	],

	npc_roles: {
		eira: {
			role: '이름의 허상을 읽는 자',
			arc: '7편: 바위에 새겨진 이름과 경고가 인간의 두려움임을 읽어, 늑대에게 자아가 없음을 밝힌다.'
		},
		inka: {
			role: '미워할 수 없는 자',
			arc: '7편: 분노도 적의도 없는 존재를 향해 미움을 품을 수 없어, 그 텅 빈 굶주림을 도리어 가엾어한다.'
		},
		glace: {
			role: '공허를 읽는 자',
			arc: '7편: 자아도 분노도 없는 텅 빈 응시를 담담히 직시하며, 이름 뒤에 남은 것이 본능뿐임을 가늠한다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '새겨진 경고',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'탐험대가 바위마다 "종말의 늑대"라는 이름과 경고가 새겨진 구역에 들어선다. 에이라가 그것이 모두 인간이 두려움으로 새긴 손길임을 읽기 시작한다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '응답 없는 이름',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 이름을 불러도, 도발해도 늑대가 조금도 반응하지 않음을 확인한다. "이름을 불러도 소용없어. 안에 응답할 자아가… 없어."'
		},
		{
			order: 3,
			act: 'rising',
			title: '텅 빈 응시',
			boss: 'random_boss',
			npc: 'glace',
			summary:
				'글라세가 늑대의 시선에 적의도 호기심도 없는 텅 빈 응시만 있음을 직시한다. "미워하지도, 노리지도 않아. 그냥… 비어 있어."'
		},
		{
			order: 4,
			act: 'rising',
			title: '가리지 않는 입',
			boss: 'random_boss',
			npc: 'inka',
			summary:
				'인카가 늑대가 가장 가까운 것이면 무엇이든 가리지 않고 입을 벌리는 것을 본다. 의지 없는 굶주림이다. 미워할 수 없어 도리어 가엾어한다. "…이건 악의가 아니야. 그냥 텅 빈 거야."'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '그저 삼킬 뿐',
			boss: 'pool_112',
			npc: 'glace',
			summary:
				'탐험대가 자아 없음을 알아내자 늑대가 그저 가장 가까운 것을 향해 입을 벌린다. "이름도, 분노도 없다… 그저… 삼킬 뿐…" 두려움이 붙인 이름 뒤에 자아 없는 텅 빈 본능만 있음이 드러나며, 공허를 직시해온 글라세와 함께 전투가 이어진다.'
		}
	],

	act_summary: {
		intro: '바위마다 새겨진 "종말의 늑대"라는 이름과 경고. 에이라가 그것이 인간의 두려움임을 읽는다.',
		rising: '응답 없는 이름을 확인하는 에이라, 텅 빈 응시를 직시하는 글라세, 미워할 수 없어 가엾어하는 인카. 늑대엔 자아가 없었다.',
		climax_finale: '"이름도, 분노도 없다. 그저 삼킬 뿐." 두려움이 붙인 이름 뒤엔 자아 없는 본능만 있었다.'
	}
};
