import type { StoryArc } from '$lib/types';

// Fenrir 시리즈 9편 (level 87) — 멈출 수 없는 신음
export const storyarc_snowy_fenrir_87: StoryArc = {
	id: 'snowy_fenrir_87',
	level: 87,
	chapter_name: {
		korean: '멈출 수 없는 신음',
		english: 'The Moan That Cannot Stop',
		japanese: '止められぬ呻き',
		chinese: '无法停止的呻吟',
		french: 'Le Gémissement Qui Ne Cesse',
		spanish: 'El Gemido Que No Cesa',
		vietnamese: 'Tiếng Rên Không Thể Dừng',
		thai: 'เสียงครางที่หยุดไม่ได้',
		hindi: 'वह कराह जो रुक नहीं सकती'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'늑대의 텅 빈 동공 속 눈보라가, 처음으로 희미한 소리를 내기 시작한 구역. 그것은 포효가 아니라 수백 마리가 겹쳐 우는 가냘픈 신음이다. 늑대 자신조차 그 소리를, 그 굶주림을 멈추지 못한다.',
		rule: '동공의 신음을 들은 자는 늑대의 마지막 진실에 가장 가까이 닿는다. 그것은 위협이 아니라, 멈추지 못하는 고통의 소리다.',
		secret:
			'늑대의 굶주림은 그 자신조차 멈출 수 없다. 채워지지 않는 본능이 영원히 삼키게 하고, 그 가냘픈 신음은 멈추고 싶어도 멈출 수 없는 자의 고통이다.'
	},

	protagonist_goal: '늑대의 동공에서 새어 나오는 가냘픈 신음의 정체, 멈출 수 없는 고통의 진실을 밝혀라.',

	act_tone: {
		intro: {
			mood: '겹쳐 우는 소리',
			tension: 1,
			narrative_role: '동공 속 눈보라가 처음으로 소리를 낸다. 포효가 아니라 가냘픈 신음이다.'
		},
		rising: {
			mood: '멈추지 못하는 굶주림',
			tension: 3,
			narrative_role:
				'신음을 들을수록, 그것이 멈추고 싶어도 멈출 수 없는 자의 고통임이 드러난다. 굶주림은 자신조차 통제하지 못했다.'
		},
		climax_finale: {
			mood: '고통의 고백',
			tension: 5,
			narrative_role:
				'탐험대가 신음의 정체를 알아내자, 동공 속 수백 목소리가 가냘프게 겹쳐 운다. "…배고파… 멈추고 싶어… 그런데 멈출 수가… 없어…"'
		}
	},

	final_boss: {
		id: 'HollowHowl_Fenrir_V1',
		name: 'Fenrir',
		appearance:
			'The blizzard inside the wolf hollow eye-voids beginning to make a sound for the first time, not a roar but a frail moan of hundreds crying overlapped. The carcass frame trembles as if even it cannot stop the hunger that drives it. Cinematic pitiful hollow snowy lighting, sorrowful high-fantasy aesthetic.',
		surface_identity:
			'두려움의 대상이던 마수의 형상. 그러나 그 동공에서 새어 나오는 것은 포효가 아니라 가냘픈 신음이다.',
		true_identity:
			'늑대의 굶주림은 그 자신조차 멈출 수 없다. 채워지지 않는 본능이 영원히 삼키게 하고, 그 가냘픈 신음은 멈추고 싶어도 멈출 수 없는 자의 고통이다.',
		motivation:
			'멈추고 싶어도 멈출 수 없는 굶주림에 떠밀려 끝없이 삼킨다. 그 신음은 위협이 아니라, 자신을 통제하지 못하는 고통의 호소다.',
		twist:
			'탐험대가 신음의 정체를 알아내자, 동공 속 수백 목소리가 가냘프게 겹쳐 운다. "…배고파… 멈추고 싶어… 그런데 멈출 수가… 없어…" 두려움의 포효라 여겼던 소리는, 멈추지 못하는 굶주림의 고통이었다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '동공 속 눈보라가 처음으로 소리를 내는데, 그것이 포효가 아니라 신음에 가깝다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '신음에 가까운 소리는 위협이 아니라 고통이었다.'
		},
		{
			id: 'fs_02',
			hint: '신음이 한 목소리가 아니라 수백 마리가 겹쳐 우는 듯 들린다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '겹쳐 우는 신음은 함께 굶주린 무리의 고통이 한데 모인 것이었다.'
		},
		{
			id: 'fs_03',
			hint: '늑대가 삼키기를 멈추려는 듯 잠시 떨다가, 곧 다시 입을 벌린다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '멈추려다 다시 삼키는 떨림은, 멈추고 싶어도 멈출 수 없는 고통이었다.'
		},
		{
			id: 'fs_04',
			hint: '신음의 가락이 점점 더 가냘프고 지쳐간다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '지쳐가는 신음은 영원한 굶주림에 시달려온 자의 탈진이었다.'
		}
	],

	npc_roles: {
		eira: {
			role: '신음을 읽는 자',
			arc: '9편: 동공에서 새어 나오는 소리를 분석해, 그것이 포효가 아니라 멈추지 못하는 굶주림의 고통임을 밝힌다.'
		},
		inka: {
			role: '고통에 응답하는 자',
			arc: '9편: 멈추고 싶어도 멈출 수 없는 신음에 마음이 무너져, 위협이 아닌 한 존재의 고통으로 그것을 받아낸다.'
		},
		glace: {
			role: '탈진을 직시하는 자',
			arc: '9편: 점점 가냘파지는 신음에서 영원한 굶주림에 지친 탈진을 읽으며, 끝이 가까웠음을 가늠한다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '처음 들리는 소리',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'탐험대가 늑대의 동공 속 눈보라가 처음으로 소리를 내기 시작한 구역에 들어선다. 에이라가 그것이 포효가 아니라 가냘픈 신음에 가까움을 읽기 시작한다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '겹쳐 우는 무리',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 신음이 한 목소리가 아니라 수백 마리가 겹쳐 우는 듯함을 분석한다. 함께 굶주린 무리의 고통이 한데 모인 소리다. "한 마리의 울음이 아니야. 전부… 함께 울고 있어."'
		},
		{
			order: 3,
			act: 'rising',
			title: '멈추려다 다시',
			boss: 'random_boss',
			npc: 'inka',
			summary:
				'인카가 늑대가 삼키기를 멈추려는 듯 잠시 떨다가 곧 다시 입을 벌리는 것을 본다. 마음이 무너진다. "…멈추고 싶은 거야. 그런데 못 멈추는 거야."'
		},
		{
			order: 4,
			act: 'rising',
			title: '지쳐가는 가락',
			boss: 'random_boss',
			npc: 'glace',
			summary:
				'글라세가 신음의 가락이 점점 더 가냘프고 지쳐가는 것을 직시한다. 영원한 굶주림에 시달려온 탈진이다. "오래… 너무 오래 굶주렸어. 끝이 가까워."'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '멈출 수가 없어',
			boss: 'pool_112',
			npc: 'inka',
			summary:
				'탐험대가 신음의 정체를 알아내자 동공 속 수백 목소리가 가냘프게 겹쳐 운다. "배고파… 멈추고 싶어… 그런데 멈출 수가… 없어…" 두려움의 포효가 멈추지 못하는 굶주림의 고통이었음이 드러나며, 그 고통에 응답해온 인카와 함께 전투가 이어진다.'
		}
	],

	act_summary: {
		intro: '동공 속 눈보라가 처음으로 소리를 낸다. 에이라가 그것이 포효가 아니라 신음임을 읽는다.',
		rising: '겹쳐 우는 무리를 분석하는 에이라, 멈추려다 다시 삼키는 모습에 무너지는 인카, 지쳐가는 가락을 직시하는 글라세. 굶주림은 자신조차 멈추지 못했다.',
		climax_finale: '"멈추고 싶어… 그런데 멈출 수가 없어." 두려움의 포효라 여긴 소리는 멈추지 못하는 굶주림의 고통이었다.'
	}
};
