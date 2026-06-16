import type { StoryArc } from '$lib/types';

// Fenrir 시리즈 10편 (level 97) — 끝나지 않는 굶주림 (시리즈 피날레)
export const storyarc_snowy_fenrir_97: StoryArc = {
	id: 'snowy_fenrir_97',
	level: 97,
	chapter_name: {
		korean: '끝나지 않는 굶주림',
		english: 'The Hunger Without End',
		japanese: '終わらぬ飢え',
		chinese: '永不止息的饥饿',
		french: 'La Faim Sans Fin',
		spanish: 'El Hambre Sin Fin',
		vietnamese: 'Cơn Đói Bất Tận',
		thai: 'ความหิวที่ไม่สิ้นสุด',
		hindi: 'अंतहीन भूख'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'시리즈의 끝. 텅 빈 동공도, 굶어 죽은 무리도, 멈출 수 없는 신음도 모두 마주한 끝에 탐험대는 늑대에게 결정적인 일격을 가할 자리에 선다. 그러나 이 굶주림은 쓰러뜨린다고 끝나지 않는다.',
		rule: '늑대를 무너뜨려도 굶주림은 멈추지 않는다. 무너진 자리로 더 많은 사체가 빨려 들어가 더 거대한 형상이 다시 솟는다.',
		secret:
			'종말의 늑대는 혹한 속에서 굶어 죽어간 늑대 무리의 끝없는 허기가 응결된 공허한 굶주림 그 자체다. 무엇을 삼켜도, 제 몸을 삼켜도, 쓰러져도 결코 채워지거나 끝나지 않는다.'
	},

	protagonist_goal: '결코 채워지지 않는 굶주림의 끝에서, 늑대의 공허에 맞서라.',

	act_tone: {
		intro: {
			mood: '결정적 일격',
			tension: 1,
			narrative_role: '탐험대가 늑대에게 결정적인 일격을 가할 자리에 선다. 그러나 끝은 보이지 않는다.'
		},
		rising: {
			mood: '회수되는 공허',
			tension: 3,
			narrative_role:
				'텅 빈 동공도, 굶어 죽은 무리도, 멈출 수 없는 신음도 — 시리즈 내내 본 모든 것이 이 마지막 굶주림으로 수렴한다.'
		},
		climax_finale: {
			mood: '빨려드는 설원',
			tension: 5,
			narrative_role:
				'늑대를 무너뜨린 순간 승리의 환호가 경악으로 바뀐다. 무너진 자리로 더 많은 사체가 빨려 들어가 더 거대한 형상이 솟는다.'
		}
	},

	final_boss: {
		id: 'HollowHowl_Fenrir_V1',
		name: 'Fenrir',
		appearance:
			'The carcass wolf struck down only to have its collapsed frame pull in more carrion and rise larger than before, the blizzard within its hollow eyes moaning. It begins to swallow even its own body as it grows, the entire snowfield starting to spiral into the vast void around it. Cinematic climactic devouring blizzard, tragic and overwhelming high-fantasy aesthetic.',
		surface_identity:
			'종말의 늑대, 신들마저 두려워했다는 흉포한 마수처럼 여겨졌던 존재.',
		true_identity:
			'혹한 속에서 굶어 죽어간 늑대 무리의 끝없는 허기가 한데 모여 응결된 공허한 굶주림 그 자체다. 종말의 늑대라는 이름은 인간들이 두려움에 붙인 것일 뿐, 이 존재에게는 자아도 분노도 없다. 오직 결코 채워지지 않는 텅 빈 위장과, 무엇이든 삼켜 그 빈자리를 메우려는 본능만이 남아 설원을 떠돈다.',
		motivation:
			'허기를 채우는 것, 그것이 전부다. 그러나 사체로 이루어진 그 몸은 무엇을 삼켜도 곧장 텅 빈 동공으로 쏟아져 사라지기에 결코 배부를 수 없다. 영원한 굶주림에서 벗어나려는 맹목적인 발버둥이 설원의 모든 온기와 생명을 빨아들이며, 탐험대 역시 그 끝없는 식욕 앞에 놓인 한 줌의 먹이일 뿐이다.',
		twist:
			'탐험대가 늑대에게 결정적인 일격을 가해 그 몸을 이룬 뼈와 사체가 우수수 무너져 내리는 순간, 승리의 환호는 곧 경악으로 바뀐다. 무너진 자리에서 더 많은 짐승의 사체들이 빨려 들어가 더 거대한 형상이 다시 솟아오르기 때문이다. 텅 빈 동공 속 눈보라가 처음으로 소리를 내는데, 그것은 포효가 아니라 수백 마리가 겹쳐 우는 가냘픈 굶주림의 신음이다. "…배고파… 배고파… 멈출 수가… 없어…" 늑대는 자신의 몸 일부마저 삼키며 점점 더 커지고, 설원 전체가 그 거대한 공허 속으로 빨려 들어가기 시작한다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '결정적 일격을 준비하는 순간에도, 늑대의 동공은 여전히 텅 빈 채 끌어당기고 있다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '텅 빈 끌어당김은 쓰러뜨려도 굶주림이 끝나지 않을 전조였다.'
		},
		{
			id: 'fs_02',
			hint: '주변에 흩어진 사체들이 늑대 쪽으로 미세하게 들썩이며 기운다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '기우는 사체들은 무너진 자리로 빨려 들어가 다시 솟을 재료였다.'
		},
		{
			id: 'fs_03',
			hint: '동공 속 신음이 점점 더 또렷하게 "멈출 수가 없어"라고 겹쳐 운다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '또렷해진 신음은 멈추지 못하는 굶주림이 마지막으로 터질 고백이었다.'
		},
		{
			id: 'fs_04',
			hint: '설원 전체가 아주 느리게, 늑대를 중심으로 한 점을 향해 기울기 시작한다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '기우는 설원은 곧 거대한 공허 속으로 빨려 들어갈 세상이었다.'
		}
	],

	npc_roles: {
		eira: {
			role: '공허를 매듭짓는 자',
			arc: '10편: 시리즈 내내 읽어온 굶주림의 진실을 매듭짓고, 이름조차 없던 무리의 마지막 신음을 기록에 남긴다.'
		},
		inka: {
			role: '고통을 끝까지 받는 자',
			arc: '10편: 멈출 수 없는 굶주림의 신음을 끝까지 한 존재의 고통으로 받아내며, 미움 아닌 연민으로 최후에 맞선다. (3인 throughline 수렴)'
		},
		glace: {
			role: '공허에 맞서는 자',
			arc: '10편: 결코 채워지지 않는 공허를 끝까지 담담히 직시하며, 흔들림 없이 그 끝없는 굶주림과 맞선다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '결정적 일격 앞에서',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'탐험대가 시리즈의 끝, 늑대에게 결정적인 일격을 가할 자리에 선다. 에이라가 그 순간에도 동공이 여전히 텅 빈 채 끌어당기고 있음을 본다. 끝은 보이지 않는다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '기우는 사체들',
			boss: 'random_boss',
			npc: 'glace',
			summary:
				'글라세가 주변에 흩어진 사체들이 늑대 쪽으로 미세하게 들썩이며 기우는 것을 직시한다. 무너진 자리로 빨려 들어가 다시 솟을 재료다. "쓰러뜨려도… 다시 일어날 거야."'
		},
		{
			order: 3,
			act: 'rising',
			title: '또렷해지는 신음',
			boss: 'random_boss',
			npc: 'inka',
			summary:
				'인카가 동공 속 신음이 점점 또렷하게 "멈출 수가 없어"라고 겹쳐 우는 것을 듣는다. 미움이 아닌 연민으로, 그 고통을 끝까지 받아내기로 마음먹는다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '기우는 설원',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 설원 전체가 아주 느리게 늑대를 중심으로 한 점을 향해 기울기 시작함을 본다. 곧 공허 속으로 빨려 들어갈 세상이다. "마지막이야 — 이 굶주림의 끝을, 우리가 마주해야 해."'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '배고파, 멈출 수가 없어',
			boss: 'pool_112',
			npc: 'inka',
			summary:
				'탐험대가 결정적 일격을 가하자 늑대의 뼈와 사체가 무너진다. 그러나 무너진 자리로 더 많은 사체가 빨려 들어가 더 거대한 형상이 다시 솟는다. 동공 속 수백 목소리가 가냘프게 겹쳐 운다. "배고파… 배고파… 멈출 수가… 없어…" 늑대가 제 몸마저 삼키며 커지고 설원 전체가 공허로 빨려드는 가운데, 끝까지 고통을 받아낸 인카와 3인의 여정이 수렴하는 최종 결전이 벌어진다.'
		}
	],

	act_summary: {
		intro: '늑대에게 결정적 일격을 가할 자리. 그러나 동공은 여전히 텅 빈 채 끌어당긴다.',
		rising: '기우는 사체들을 직시하는 글라세, 또렷해지는 신음을 받아내는 인카, 기우는 설원을 본 에이라. 모든 공허가 이 끝으로 수렴한다.',
		climax_finale: '"배고파… 멈출 수가 없어…" 쓰러뜨려도 다시 솟는 끝없는 굶주림과의 최종 결전 — 시리즈 피날레.'
	}
};
