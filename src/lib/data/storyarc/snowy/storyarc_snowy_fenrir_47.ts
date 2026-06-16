import type { StoryArc } from '$lib/types';

// Fenrir 시리즈 5편 (level 47) — 굶어 죽은 무리
export const storyarc_snowy_fenrir_47: StoryArc = {
	id: 'snowy_fenrir_47',
	level: 47,
	chapter_name: {
		korean: '굶어 죽은 무리',
		english: 'The Starved Pack',
		japanese: '飢え死んだ群れ',
		chinese: '饿死的狼群',
		french: 'La Meute Affamée',
		spanish: 'La Manada Muerta de Hambre',
		vietnamese: 'Bầy Đàn Chết Đói',
		thai: 'ฝูงที่อดตาย',
		hindi: 'भूख से मरा झुंड'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'늑대의 몸을 이룬 사체들 사이에서, 수백 마리 작은 짐승의 뼈가 같은 자세로 얼어붙은 구역이 드러난다. 모두 무언가를 향해 머리를 뻗은 채 죽었다. 그것은 한 무리가 함께 굶어 죽은 자리다.',
		rule: '얼어붙은 무리의 뼈를 읽은 자는 늑대가 무엇으로 이루어졌는지 알게 된다. 그것은 신화 속 마수가 아니라, 굶어 죽은 짐승들의 무덤이다.',
		secret:
			'종말의 늑대는 한 마리 거대한 마수가 아니다. 혹한 속에서 굶어 죽어간 늑대 무리의 사체와 끝없는 허기가 한데 응결되어 만들어진 존재다.'
	},

	protagonist_goal: '늑대의 몸을 이룬 무리의 정체, 함께 굶어 죽은 짐승들의 진실을 밝혀라.',

	act_tone: {
		intro: {
			mood: '같은 자세의 죽음',
			tension: 1,
			narrative_role: '수백 마리 작은 짐승의 뼈가 같은 자세로 얼어붙어 있다. 모두 무언가를 향해 머리를 뻗었다.'
		},
		rising: {
			mood: '함께 스러진 무리',
			tension: 3,
			narrative_role:
				'뼈를 읽을수록, 늑대가 한 마리 마수가 아니라 함께 굶어 죽은 무리의 응결임이 드러난다.'
		},
		climax_finale: {
			mood: '응결된 허기',
			tension: 5,
			narrative_role:
				'탐험대가 무리의 진실을 알아내자, 늑대의 몸 전체가 수백 마리의 떨림으로 들썩인다. "…우리는 함께 굶었다… 그 허기가, 하나로 뭉쳤다…"'
		}
	},

	final_boss: {
		id: 'HollowHowl_Fenrir_V1',
		name: 'Fenrir',
		appearance:
			'Among the carcasses forming the wolf, a field of hundreds of small animal skeletons frozen in the same posture, every skull stretched toward something. They are a pack that starved to death together, their bones now fused into the towering shape. Cinematic mournful skeletal snowy lighting, tragic high-fantasy aesthetic.',
		surface_identity:
			'전설 속 한 마리 거대한 마수처럼 보이는 존재. 그러나 그 몸은 수많은 작은 짐승의 뼈로 이루어져 있다.',
		true_identity:
			'종말의 늑대는 한 마리 거대한 마수가 아니다. 혹한 속에서 굶어 죽어간 늑대 무리의 사체와 끝없는 허기가 한데 응결되어 만들어진 존재다.',
		motivation:
			'함께 굶어 죽은 무리의 허기가 하나로 뭉쳐, 채워질 수 없는 갈망으로 설원을 떠돈다. 그것은 한 마리의 의지가 아니라 수백 마리의 굶주림이다.',
		twist:
			'탐험대가 무리의 진실을 알아내자, 늑대의 몸 전체가 수백 마리의 떨림으로 들썩인다. "…우리는 함께 굶었다… 그 허기가, 하나로 뭉쳤다…" 거대한 마수가 아니라, 함께 스러진 무리의 굶주림이 응결된 존재였다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '몸을 이룬 뼈가 한 종류가 아니라 수백 마리 작은 짐승의 것이다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '수백 마리의 뼈는 한 무리였다 — 늑대는 무리의 응결이었다.'
		},
		{
			id: 'fs_02',
			hint: '얼어붙은 뼈들이 모두 같은 방향으로 머리를 뻗은 채 죽었다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '같은 방향으로 뻗은 머리는 마지막까지 먹이를 갈구하던 자세였다.'
		},
		{
			id: 'fs_03',
			hint: '뼈들 사이에 먹이의 흔적은 전혀 없다 — 끝내 아무것도 먹지 못했다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '먹이가 없었다 — 무리는 굶주린 채 함께 스러졌다.'
		},
		{
			id: 'fs_04',
			hint: '늑대가 움직일 때마다 수백 개의 작은 떨림이 몸 전체로 번진다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '수백 개의 떨림은 한 마리가 아니라 무리 전체가 함께 움직이는 것이었다.'
		}
	],

	npc_roles: {
		eira: {
			role: '무리를 읽는 자',
			arc: '5편: 얼어붙은 뼈들을 읽어, 늑대가 한 마리 마수가 아니라 함께 굶어 죽은 무리의 응결임을 밝힌다 — 기록자 역할의 정수.'
		},
		inka: {
			role: '무리를 애도하는 자',
			arc: '5편: 먹이도 없이 함께 스러진 무리를 보며, 한 마리 한 마리의 마지막 굶주림을 애도한다.'
		},
		glace: {
			role: '응결을 직시하는 자',
			arc: '5편: 수백의 허기가 하나로 뭉친 모습을 담담히 직시하며, 이 존재가 무엇으로 이루어졌는지 가늠한다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '같은 자세의 뼈들',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'탐험대가 수백 마리 작은 짐승의 뼈가 같은 자세로 얼어붙은 구역에 들어선다. 에이라가 모두 무언가를 향해 머리를 뻗은 채 죽었음을 읽기 시작한다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '한 무리의 죽음',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 몸을 이룬 뼈가 한 종류가 아니라 수백 마리 작은 짐승의 것임을 확인한다. "한 마리 마수가 아니야. 이건… 한 무리야. 통째로 굶어 죽은."'
		},
		{
			order: 3,
			act: 'rising',
			title: '먹지 못한 자리',
			boss: 'random_boss',
			npc: 'glace',
			summary:
				'글라세가 뼈들 사이에 먹이의 흔적이 전혀 없음을 담담히 본다. 끝내 아무것도 먹지 못했다. "…먹이가 없었어. 그냥, 함께 굶었어."'
		},
		{
			order: 4,
			act: 'rising',
			title: '수백의 떨림',
			boss: 'random_boss',
			npc: 'inka',
			summary:
				'인카가 늑대가 움직일 때마다 수백 개의 작은 떨림이 몸 전체로 번지는 것을 본다. 한 마리가 아니라 무리 전체다. 그 하나하나의 굶주림을 애도한다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '그 허기가 하나로 뭉쳤다',
			boss: 'pool_112',
			npc: 'inka',
			summary:
				'탐험대가 무리의 진실을 알아내자 늑대의 몸 전체가 수백 마리의 떨림으로 들썩인다. "우리는 함께 굶었다… 그 허기가, 하나로 뭉쳤다…" 거대한 마수가 아니라 함께 스러진 무리의 굶주림이 응결된 존재임이 드러나며, 무리를 애도해온 인카와 함께 전투가 이어진다.'
		}
	],

	act_summary: {
		intro: '수백 마리 작은 짐승의 뼈가 같은 자세로 얼어붙어 있다. 에이라가 읽기 시작한다.',
		rising: '한 무리의 죽음을 확인하는 에이라, 먹지 못한 자리를 본 글라세, 수백의 떨림을 애도하는 인카. 늑대는 무리의 응결이었다.',
		climax_finale: '"그 허기가 하나로 뭉쳤다." 거대한 마수가 아니라, 함께 굶어 죽은 무리의 굶주림이었다.'
	}
};
