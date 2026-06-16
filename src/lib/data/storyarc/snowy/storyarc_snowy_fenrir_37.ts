import type { StoryArc } from '$lib/types';

// Fenrir 시리즈 4편 (level 37) — 제 몸을 삼키는 것
export const storyarc_snowy_fenrir_37: StoryArc = {
	id: 'snowy_fenrir_37',
	level: 37,
	chapter_name: {
		korean: '제 몸을 삼키는 것',
		english: 'The One That Devours Itself',
		japanese: '己を喰らうもの',
		chinese: '吞噬自身之物',
		french: 'Celui Qui Se Dévore',
		spanish: 'Lo Que Se Devora a Sí Mismo',
		vietnamese: 'Kẻ Tự Nuốt Chính Mình',
		thai: 'สิ่งที่กลืนกินตัวเอง',
		hindi: 'जो स्वयं को निगलता है'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'늑대를 이루던 사체와 뼈가 곳곳에서 무너졌다 다시 솟는 구역. 먹잇감이 보이지 않을 때, 늑대는 제 몸을 이룬 사체 일부를 뜯어 동공 너머로 밀어 넣는다. 굶주림이 자기 자신마저 먹이로 삼는다.',
		rule: '늑대가 제 몸을 삼키는 것을 보아도 놀라지 마라. 그것은 굶주림이 가릴 것 없는 본능임을 보여줄 뿐이다.',
		secret:
			'늑대의 굶주림에는 가림이 없다. 먹잇감이 없으면 제 몸을 이룬 사체마저 삼킨다. 무엇을 먹든 동공으로 사라지기에, 자신을 먹어도 채워지지 않는다.'
	},

	protagonist_goal: '늑대가 제 몸마저 삼키는 이유, 가림 없는 굶주림의 한 겹을 더 벗겨라.',

	act_tone: {
		intro: {
			mood: '무너지고 솟음',
			tension: 1,
			narrative_role: '늑대를 이루던 사체와 뼈가 곳곳에서 무너졌다 다시 솟는다.'
		},
		rising: {
			mood: '가림 없는 본능',
			tension: 3,
			narrative_role:
				'먹잇감이 없을 때, 늑대는 제 몸의 사체를 뜯어 동공으로 밀어 넣는다. 굶주림엔 가림이 없었다.'
		},
		climax_finale: {
			mood: '자신을 먹는 굶주림',
			tension: 5,
			narrative_role:
				'탐험대가 그 본능을 알아내자, 늑대가 제 다리 하나를 통째로 삼킨다. 그러나 몸은 줄지도 채워지지도 않는다.'
		}
	},

	final_boss: {
		id: 'HollowHowl_Fenrir_V1',
		name: 'Fenrir',
		appearance:
			'A carcass-and-bone wolf whose body collapses and reforms in patches, tearing chunks of its own carrion frame and pushing them through its hollow eye-voids when no prey is near. The hunger spares nothing, not even itself, yet the body neither shrinks nor fills. Cinematic grim self-consuming snowy lighting, unsettling high-fantasy aesthetic.',
		surface_identity:
			'여전히 거대한 마수의 형상. 그러나 먹잇감이 없을 때 그것은 제 몸마저 뜯어 삼킨다.',
		true_identity:
			'늑대의 굶주림에는 가림이 없다. 먹잇감이 없으면 제 몸을 이룬 사체마저 삼킨다. 무엇을 먹든 동공으로 사라지기에, 자신을 먹어도 채워지지 않는다.',
		motivation:
			'굶주림을 채우는 것이 전부이기에, 먹을 것이 없으면 자신마저 먹는다. 그 본능엔 자기 보존조차 없다.',
		twist:
			'탐험대가 그 본능을 알아내자, 늑대가 제 다리 하나를 통째로 삼킨다. 그러나 몸은 줄지도 채워지지도 않는다. "…먹을 게 없으면… 나라도 먹는다…" 굶주림은 자기 자신마저 가리지 않는, 가림 없는 본능이었다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '늑대의 몸이 곳곳에서 무너졌다가 다른 사체를 끌어와 다시 솟는다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '무너지고 다시 솟는 몸은 끝없이 먹이를 갈아치우는 굶주림의 형상이었다.'
		},
		{
			id: 'fs_02',
			hint: '먹잇감이 보이지 않자, 늑대가 제 옆구리의 뼈를 뜯어낸다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '제 몸을 뜯는 것은 가릴 것 없는 굶주림이었다 — 먹을 것이 없으면 자신마저.'
		},
		{
			id: 'fs_03',
			hint: '제 몸을 삼켜도 늑대는 조금도 작아지지 않는다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '자신을 먹어도 줄지 않았다 — 삼킨 것은 모두 동공으로 사라졌으니까.'
		},
		{
			id: 'fs_04',
			hint: '늑대의 움직임엔 분노도 사냥의 즐거움도 없이, 그저 기계 같은 허기만 있다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '감정 없는 허기는 자기 보존조차 없는 가림 없는 본능이었다.'
		}
	],

	npc_roles: {
		eira: {
			role: '본능을 기록하는 자',
			arc: '4편: 늑대가 제 몸을 삼키는 본능을 관찰해, 그 굶주림에 자기 보존조차 없음을 기록한다.'
		},
		inka: {
			role: '가엾음을 느끼는 자',
			arc: '4편: 제 몸마저 먹어야 하는 늑대를 보며, 분노할 수 없는 가엾음을 느낀다. "…저건 미움이 아니라, 그냥 굶주림이야."'
		},
		glace: {
			role: '본질을 직시하는 자',
			arc: '4편: 자신을 먹어도 채워지지 않는 모습을 담담히 직시하며, 가림 없는 굶주림의 본질에 한 걸음 더 다가선다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '무너지고 솟는 몸',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'탐험대가 늑대를 이루던 사체와 뼈가 곳곳에서 무너졌다 다시 솟는 구역에 들어선다. 에이라가 끝없이 먹이를 갈아치우는 그 형상을 기록하기 시작한다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '제 뼈를 뜯다',
			boss: 'random_boss',
			npc: 'glace',
			summary:
				'글라세가 먹잇감이 보이지 않자 늑대가 제 옆구리의 뼈를 뜯어내는 것을 담담히 본다. "…먹을 게 없으니 자기를 먹어. 가릴 게 없는 굶주림이야."'
		},
		{
			order: 3,
			act: 'rising',
			title: '줄지 않는 몸',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 제 몸을 삼켜도 늑대가 조금도 작아지지 않음을 기록한다. 삼킨 것은 모두 동공으로 사라진다. "자기를 먹어도… 그대로야."'
		},
		{
			order: 4,
			act: 'rising',
			title: '미움 없는 허기',
			boss: 'random_boss',
			npc: 'inka',
			summary:
				'인카가 늑대의 움직임에 분노도 사냥의 즐거움도 없는 기계 같은 허기만 있음을 본다. 가엾음을 느낀다. "저건 미움이 아니라, 그냥 굶주림이야."'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '나라도 먹는다',
			boss: 'pool_112',
			npc: 'glace',
			summary:
				'탐험대가 그 본능을 알아내자 늑대가 제 다리 하나를 통째로 삼킨다. 그러나 몸은 줄지도 채워지지도 않는다. "먹을 게 없으면… 나라도 먹는다…" 자기 보존조차 없는 가림 없는 굶주림임이 드러나며, 본질을 직시해온 글라세와 함께 전투가 이어진다.'
		}
	],

	act_summary: {
		intro: '늑대를 이루던 사체와 뼈가 무너졌다 다시 솟는다. 에이라가 그 형상을 기록한다.',
		rising: '제 뼈를 뜯는 것을 본 글라세, 줄지 않는 몸을 기록하는 에이라, 미움 없는 허기에 가엾음을 느끼는 인카. 굶주림엔 가림이 없었다.',
		climax_finale: '"먹을 게 없으면 나라도 먹는다." 자기 보존조차 없는, 가림 없는 굶주림의 본능이 드러난다.'
	}
};
