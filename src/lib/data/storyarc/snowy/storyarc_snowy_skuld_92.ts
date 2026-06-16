import type { StoryArc } from '$lib/types';

// Skuld 시리즈 10편 (level 92) — 피오르드의 심장 (시리즈 피날레)
export const storyarc_snowy_skuld_92: StoryArc = {
	id: 'snowy_skuld_92',
	level: 92,
	chapter_name: {
		korean: '피오르드의 심장',
		english: 'Heart of the Fjord',
		japanese: 'フィヨルドの心臓',
		chinese: '峡湾之心',
		french: 'Le Cœur du Fjord',
		spanish: 'El Corazón del Fiordo',
		vietnamese: 'Trái Tim Của Vịnh Hẹp',
		thai: 'หัวใจแห่งฟยอร์ด',
		hindi: 'फ़्योर्ड का हृदय'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'시리즈의 끝. 좌초도, 업보도, 외로움도 모두 마주한 끝에 탐험대는 빙하 속 척후선의 본체 — 선체에 새겨진 모든 룬이 모이는 자리에 선다. 고대의 맹세와 비극이 마지막 한 줄을 남기고 있다.',
		rule: '선체의 룬을 끝까지 해독하면 스쿌드의 모든 진실이 드러난다. 그러나 그 진실은 한 척의 배가 수천 년 견뎌온 비극이다.',
		secret:
			'스쿌드는 명망 높은 척후선 피오르드의 심장이었다. 라그나르의 유언을 받고 전장으로 향했으나 설원에 좌초되어 빙하가 되었고, 지키지 못한 맹세와 홀로 남겨진 외로움을 안은 채 수천 년을 버텨왔다.'
	},

	protagonist_goal: '선체의 모든 룬을 끝까지 해독해, 척후선 스쿌드의 비극에 종지부를 찍어라.',

	act_tone: {
		intro: {
			mood: '마지막 한 줄',
			tension: 1,
			narrative_role: '선체의 모든 룬이 모이는 자리. 고대의 맹세와 비극이 마지막 한 줄을 남기고 있다.'
		},
		rising: {
			mood: '회수되는 비극',
			tension: 3,
			narrative_role:
				'좌초의 밤도, 떠도는 업보도, 홀로 남으라는 명도 — 시리즈 내내 새긴 복선이 마지막 해독으로 한데 모인다.'
		},
		climax_finale: {
			mood: '수천 년의 절규',
			tension: 5,
			narrative_role:
				'탐험대가 고대의 맹세와 좌초의 기록을 마저 읽어내자, 빙하의 맹공이 잠시 멎고 거대한 얼음 틈으로 수천 년의 절규가 터져 나온다.'
		}
	},

	final_boss: {
		id: 'GlacialOath_Skuld_V1',
		name: 'Skuld',
		appearance:
			'The full body of the scout-ship Skuld revealed within the cracking glacier, its dragon-head prow and ancient runes blazing with pale blue light as every carving converges. The colossal ice fractures apart, the twisted wreck of the longship rising as it recites its own tragic saga. Cinematic climactic shattering blue blizzard, tragic and majestic high-fantasy aesthetic.',
		surface_identity:
			'북방을 떠도는 태고의 빙하 정령, 침범자를 용서치 않는 얼음의 수호자처럼 보였던 존재.',
		true_identity:
			'서리 내린 영원의 저주에 갇힌 스쿌드 — 북해를 호령하던 바이킹 선단 피오르드의 심장의 명망 높은 척후선. 라그나르의 유언("미드가르드에 드리운 어둠을 멸하고, 나의 검은 반드시 아스가르드로 돌아가리라")을 맹세받고 전장으로 향했으나, 비극적인 운명으로 설원에 좌초되어 차가운 빙하와 하나가 된 존재다.',
		motivation:
			'족장의 유언을 지키려는 맹목적 의무감과 영원한 빙하에 갇혀 미드가르드의 고통을 목격하며 쌓인 비탄. 약속을 이행치 못하는 업보를 풀려 어둠의 잔재를 찾아 헤매고, 족장을 잊은 자들을 응징해 왔다.',
		twist:
			'탐험대가 필사적으로 빙하의 맹공을 견디다, 선체에 새겨진 낡은 룬 문자들을 마저 해독한다. 고대의 맹세와 비극적인 좌초의 기록이 드러나는 순간, 빙하의 맹공이 잠시 멎고 거대한 얼음 틈새로 고통스러운 절규가 울려 퍼진다. "…수천 년을 헤매었노라, 허나 맹세는 잊지 않았으니… 피오르드의 심장이여, 그대는 어찌 이리도 차가운가… 라그나르, 그대는 어찌하여 내게 홀로 남으라 명하였는가!" 거대한 빙하 전체가 균열하며, 그 안에서 고대 선박의 잔해가 비틀린 채 비극적인 서사를 읊조린다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '선체의 모든 룬이 한 자리로 흘러 모이며 마지막 한 줄을 비워두고 있다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '비워둔 마지막 한 줄은 좌초의 진실 — 스쿌드가 끝내 마주하지 못한 자신의 죽음이었다.'
		},
		{
			id: 'fs_02',
			hint: '용머리 조각이 바다가 아닌 설원 너머 먼 곳을 향하고 있다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '용머리는 아스가르드를 향했다 — 끝내 닿지 못한, 검을 돌려보낼 곳을.'
		},
		{
			id: 'fs_03',
			hint: '맹세의 룬과 라그나르의 이름이 마지막 자리에서 하나로 겹쳐진다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '맹세와 이름은 처음부터 하나였다 — 의무와 외로움이 한 몸이었듯이.'
		},
		{
			id: 'fs_04',
			hint: '빙하 전체에 미세한 균열이 거미줄처럼 번지기 시작한다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '균열은 마지막 진실이 해독되는 순간 빙하가 무너지며 본체를 드러낼 전조였다.'
		}
	],

	npc_roles: {
		eira: {
			role: '마지막 룬의 해독자',
			arc: '10편: 선체의 모든 룬을 끝까지 해독해 스쿌드의 비극 전체를 밝히고, 그 이름을 기록에 영원히 새긴다.'
		},
		ivar: {
			role: '맹세를 지켜본 전사',
			arc: '10편: 지킬 수 없는 맹세에 평생을 바친 한 척의 배를 보며, 전사로서 끝까지 곁을 지켜 맞선다.'
		},
		hild: {
			role: '절규를 받아내는 자',
			arc: '10편: 수천 년의 절규를 정면으로 받아내며, 홀로 남겨졌던 자의 비극을 끝내 기린다. (3인 throughline 수렴)'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '모이는 룬',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'탐험대가 시리즈의 끝, 선체의 모든 룬이 모이는 자리에 선다. 에이라가 마지막 한 줄을 비워둔 룬의 흐름을 발견하고 최후의 해독을 시작한다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '아스가르드를 향한 용머리',
			boss: 'random_boss',
			npc: 'ivar',
			summary:
				'이바르가 용머리 조각이 끝내 닿지 못한 먼 곳 — 검을 돌려보낼 아스가르드를 향하고 있음을 본다. 지킬 수 없는 맹세에 바쳐진 평생 앞에 선다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '하나로 겹친 이름',
			boss: 'random_boss',
			npc: 'hild',
			summary:
				'힐드가 맹세의 룬과 라그나르의 이름이 마지막 자리에서 하나로 겹쳐짐을 본다. 의무와 외로움이 처음부터 한 몸이었음을 헤아린다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '번지는 균열',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 마지막 진실에 다가서자 빙하 전체에 거미줄 같은 균열이 번진다. 본체가 곧 드러날 전조다. "거의… 다 읽었어. 마지막 한 줄이야."'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '어찌하여 내게 홀로 남으라 명하였는가',
			boss: 'pool_107',
			npc: 'hild',
			summary:
				'탐험대가 고대의 맹세와 좌초의 기록을 마저 해독한다. 빙하의 맹공이 잠시 멎고 얼음 틈으로 절규가 터진다. "수천 년을 헤매었노라, 허나 맹세는 잊지 않았으니… 피오르드의 심장이여, 어찌 이리 차가운가… 라그나르, 어찌하여 내게 홀로 남으라 명하였는가!" 빙하가 균열하며 고대 선박의 잔해가 비틀린 채 비극을 읊조리고, 3인의 여정이 수렴하는 최종 결전이 벌어진다.'
		}
	],

	act_summary: {
		intro: '선체의 모든 룬이 한 자리로 모이며 마지막 한 줄을 남긴다. 에이라가 최후의 해독을 시작한다.',
		rising: '닿지 못한 아스가르드를 본 이바르, 겹친 이름을 헤아린 힐드, 번지는 균열을 읽는 에이라. 시리즈의 모든 복선이 모인다.',
		climax_finale: '"라그나르, 어찌하여 내게 홀로 남으라 명하였는가!" 빙하가 균열하며 척후선의 비극이 끝내 절규로 터진다 — 시리즈 피날레.'
	}
};
