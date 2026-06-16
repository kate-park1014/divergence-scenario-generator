import type { StoryArc } from '$lib/types';

// Skaalbane 시리즈 3편 (level 23) — 흡수의 흔적
export const storyarc_snowy_skaalbane_23: StoryArc = {
	id: 'snowy_skaalbane_23',
	level: 23,
	chapter_name: {
		korean: '삼켜진 자들의 자리',
		english: 'The Place of the Swallowed',
		japanese: '呑まれし者たちの座',
		chinese: '被吞噬者之处',
		french: 'Le Lieu des Engloutis',
		spanish: 'El Lugar de los Devorados',
		vietnamese: 'Nơi Của Những Kẻ Bị Nuốt Chửng',
		thai: 'ที่ของผู้ถูกกลืนกิน',
		hindi: 'निगले गए लोगों का स्थान'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'잔해탑 더 깊은 곳. 선체와 시신이 얼음에 녹아들어 하나로 뒤엉킨 거대한 공동(空洞)이 펼쳐진다. 벽과 천장 곳곳에 사람 형상이 반쯤 녹아 빨려 들어간 듯한 자국들이 박혀 있다.',
		rule: '이 공동에 들어선 자는 자신의 온기가 조금씩 빠져나가는 것을 느낀다. 오래 머물수록 손끝이 무뎌지고, 따뜻한 기억이 흐릿해진다.',
		secret:
			'벽에 박힌 형상들은 이곳에서 흡수당한 자들이다. 무언가가 그들의 온기와 생명력을 빨아들이고, 빈 껍데기만 얼음에 남겨둔 것이다.'
	},

	protagonist_goal: '잔해탑 깊은 공동에서, 사람 형상으로 남은 흡수의 흔적과 빠져나가는 온기의 정체를 밝혀라.',

	act_tone: {
		intro: {
			mood: '음산한 정적',
			tension: 2,
			narrative_role: '선체와 시신이 얼음에 녹아든 거대한 공동. 벽마다 반쯤 빨려 들어간 사람 형상이 박혀 있다.'
		},
		rising: {
			mood: '스며드는 상실',
			tension: 4,
			narrative_role:
				'머무를수록 손끝이 무뎌지고 따뜻한 기억이 흐릿해진다. 무언가가 탐험대의 온기를 조금씩 빨아들이고 있다.'
		},
		climax_finale: {
			mood: '빈 껍데기의 증언',
			tension: 5,
			narrative_role:
				'벽의 형상 하나가 부서지며 텅 빈 얼음 껍데기만 떨어진다. 온기도, 영혼도 남지 않은 흔적. 그 순간 공동 전체가 만족한 듯 푸르게 박동한다.'
		}
	},

	final_boss: {
		id: 'EchoHarvester_Skaalbane_V1',
		name: 'Skaalbane',
		appearance:
			'A vast hollow deep within the wreck-tower where ship hulls and corpses have melted and fused into one mass of blue ice. Half-melted human silhouettes are embedded across the walls and ceiling, as if sucked into the frozen surface. A faint warmth seems to drain into the ice itself. The whole cavern pulses softly with blue light. Cinematic dread-filled blue lighting, oppressive high-fantasy aesthetic.',
		surface_identity:
			'영웅이 거느린 부하들의 안식처라 여겨지는, 사람 형상이 가득한 거대한 얼음 공동.',
		true_identity:
			'벽에 박힌 형상들은 안식하는 자들이 아니라, 이곳에서 온기와 생명력을 빨려 빈 껍데기만 남은 자들이다. 무언가가 그들을 흡수해왔다.',
		motivation:
			'공동의 무언가는 산 자의 온기를 갈구한다. 오래 머무는 탐험대의 생명력을 천천히, 그러나 멈추지 않고 빨아들인다.',
		twist:
			'벽의 형상 하나가 부서지며 텅 빈 얼음 껍데기만 바닥에 떨어진다. 온기도 영혼도 남지 않은 흔적이다. 그 순간 공동 전체가 만족한 듯 푸르게 박동하고, 겹쳐진 목소리가 새어 나온다. "…따뜻해… 더… 더 다오…" 탐험대의 온기가 눈에 띄게 빠져나가기 시작한다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '공동에 머무를수록 탐험대의 손끝이 무뎌지고 입김이 옅어진다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '빠져나간 온기는 사라진 것이 아니라, 공동의 무언가에게 빨려 들어가고 있었다.'
		},
		{
			id: 'fs_02',
			hint: '벽과 천장에 사람 형상이 반쯤 녹아 빨려 들어간 듯한 자국들이 박혀 있다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그 형상들은 안식하는 시신이 아니라, 온기를 빨리고 남은 빈 껍데기였다.'
		},
		{
			id: 'fs_03',
			hint: '따뜻한 기억을 떠올리려 하면 이상하게 흐릿해지고, 추운 감각만 또렷해진다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '온기뿐 아니라 따뜻한 기억마저 빨아들이고 있었다 — 무언가는 감정까지 먹이로 삼았다.'
		},
		{
			id: 'fs_04',
			hint: '탐험대가 온기를 잃을 때마다 공동의 푸른 빛이 한층 밝아진다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '빛이 밝아진 만큼 누군가의 온기가 사라졌다 — 빛은 곧 흡수한 생명력의 양이었다.'
		}
	],

	npc_roles: {
		eira: {
			role: '흔적의 기록자',
			arc: '3편: 벽에 박힌 형상들을 살펴, 이들이 안식한 시신이 아니라 흡수당한 빈 껍데기임을 밝힌다.'
		},
		frost: {
			role: '빠져나가는 온기의 감지자',
			arc: '3편: 자신과 동료들의 온기가 빠져나가는 것을 가장 먼저 느끼고, 온기를 지키기 위해 경계를 늦추지 않는다.'
		},
		inka: {
			role: '껍데기에 공감하는 자',
			arc: '3편: 빈 껍데기로 남은 형상들에게서 빨려나간 누군가의 외로움을 느끼고 깊이 애도한다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '녹아 뒤엉킨 공동',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'탐험대가 선체와 시신이 얼음에 녹아든 거대한 공동에 들어선다. 벽마다 사람 형상이 박혀 있다. 에이라가 형상들을 살피며 기록을 시작한다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '빠져나가는 온기',
			boss: 'random_boss',
			npc: 'frost',
			summary:
				'프로스트가 손끝이 무뎌지고 입김이 옅어지는 것을 느낀다. "온기가… 빠져나가고 있어. 사라지는 게 아니라, 누가 빨아가는 거야." 온기를 지키려 동료들을 단속한다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '흐릿해지는 기억',
			boss: 'random_boss',
			npc: 'inka',
			summary:
				'인카가 따뜻한 기억이 흐릿해지는 것을 깨닫는다. 빈 껍데기로 남은 형상들에게서 빨려나간 누군가의 외로움을 느낀다. "…이 사람들, 따뜻했던 것까지 전부 뺏긴 거예요."'
		},
		{
			order: 4,
			act: 'rising',
			title: '안식이 아닌 흔적',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 형상 하나를 자세히 살핀다. 안에 시신도, 온기도 없다. "이건 안식한 자가 아니야. 빨리고 남은 빈 껍데기야." 무언가가 이들을 흡수해왔음을 밝힌다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '더 다오',
			boss: 'pool_108',
			npc: 'frost',
			summary:
				'벽의 형상 하나가 부서지며 텅 빈 얼음 껍데기만 떨어진다. 공동이 만족한 듯 푸르게 박동한다. "…따뜻해… 더 다오…" 탐험대의 온기가 눈에 띄게 빠져나간다. 온기를 지키려는 프로스트가 앞장서 전투를 맞는다.'
		}
	],

	act_summary: {
		intro: '선체와 시신이 얼음에 녹아 하나로 뒤엉킨 거대한 공동. 벽마다 박힌 사람 형상을 에이라가 기록한다.',
		rising: '빠져나가는 온기를 느끼는 프로스트, 흐릿해지는 기억과 껍데기의 외로움을 애도하는 인카, 흡수의 흔적을 밝히는 에이라.',
		climax_finale: '형상이 부서져 빈 껍데기만 남고, 공동이 만족한 듯 박동하며 탐험대의 온기를 빨아들이기 시작한다.'
	}
};
