import type { StoryArc } from '$lib/types';

// Archduke Finn 시리즈 4편 (level 30) — 텅 빈 알현실의 메아리
export const storyarc_snowy_finn_30: StoryArc = {
	id: 'snowy_finn_30',
	level: 30,
	chapter_name: {
		korean: '텅 빈 알현실의 메아리',
		english: 'Echoes in the Empty Hall',
		japanese: '空っぽの謁見の間のこだま',
		chinese: '空荡谒见厅的回声',
		french: 'Échos dans la Salle Vide',
		spanish: 'Ecos en la Sala Vacía',
		vietnamese: 'Tiếng Vọng Trong Sảnh Trống',
		thai: 'เสียงสะท้อนในท้องพระโรงที่ว่างเปล่า',
		hindi: 'खाली दरबार में गूँज'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'거대한 얼음 알현실. 옥좌 하나만 덩그러니 놓여 있고, 작은 펭귄 몇 마리만 구석에서 종종거린다. 왕의 호령은 텅 빈 공간에 메아리로만 되돌아온다.',
		rule: '왕은 매일 정해진 시각에 "백성"을 소집해 위엄을 과시한다고 한다. 그러나 소집에 응하는 것은 늘 같은 작은 펭귄 몇 마리뿐이다.',
		secret:
			'그는 사실 외롭다. 호령이 메아리로만 돌아올 때마다 잠시 말을 잃는다. 그가 모은 "백성"은 길에서 우연히 만난, 마찬가지로 갈 곳 없던 작은 몬스터들이다.'
	},

	protagonist_goal: '텅 빈 알현실에서 호령하는 왕을 지켜보며, 그 위엄 뒤에 깃든 외로움의 실체에 다가가라.',

	act_tone: {
		intro: {
			mood: '메아리치는 적막',
			tension: 1,
			narrative_role: '왕의 호령이 텅 빈 알현실에 메아리로만 되돌아온다.'
		},
		rising: {
			mood: '비치는 외로움',
			tension: 2,
			narrative_role:
				'위엄을 부릴수록 알현실의 적막이 도드라진다. 같은 펭귄 몇 마리뿐인 "백성" 앞에서 왕의 목소리가 가끔 흔들린다.'
		},
		climax_finale: {
			mood: '말을 잃는 순간',
			tension: 4,
			narrative_role:
				'호령 끝에 돌아온 것이 메아리뿐임을 깨달은 왕이 잠시 말을 잃는다. 그러다 화들짝 "…다, 당연히 짐의 위엄에 압도된 것이다!"라고 둘러댄다.'
		}
	},

	final_boss: {
		id: 'ArchdukeFinnTheChilly',
		name: 'Archduke Finn',
		appearance:
			'A round plump penguin alone on a wobbly ice-cube throne in a vast empty hall of ice, its booming command echoing back at it, only a few tiny penguin minions huddled in a far corner. It wears an oversized sliding crown, neon ski goggles, a moth-eaten purple cape with a giant safety pin, and a thick wool muffler, holding a half-eaten frozen popsicle. Soft cinematic 3D animation style, lonely yet warm tone, glittering snow, vibrant colors.',
		surface_identity:
			'텅 빈 알현실에서 매일 백성을 소집해 위엄을 과시하는 설산의 왕.',
		true_identity:
			'그의 백성이라는 것은 구석에 모인 작은 펭귄 몇 마리뿐이다. 호령이 메아리로만 돌아올 때마다 비치는 것은, 위엄이 아니라 외로움이다.',
		motivation:
			'곁을 채우고 싶어 무리를 모아 왕 노릇을 한다. 솔직히는 누군가 자신의 호령에 진심으로 응답해주기를 바란다.',
		twist:
			'한껏 목청을 높인 호령 끝에 돌아온 것이 자기 목소리의 메아리뿐임을 깨달은 Finn이 잠시 말을 잃는다. 텅 빈 알현실의 적막 속에서 그의 부리가 가만히 다물린다. 그러다 화들짝, "…다, 당연히 짐의 위엄에 다들 압도된 것이다!"라고 황급히 둘러댄다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '왕의 호령이 텅 빈 알현실에 메아리로만 되돌아온다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '응답 없는 메아리는, 그가 견디는 외로움의 크기였다.'
		},
		{
			id: 'fs_02',
			hint: '소집에 응하는 것은 늘 같은 작은 펭귄 몇 마리뿐이다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그의 백성은 길에서 만난, 마찬가지로 갈 곳 없던 작은 몬스터들이었다.'
		},
		{
			id: 'fs_03',
			hint: '호령하다 말고 왕이 가끔 옥좌 곁을 슬쩍 돌아본다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '돌아보는 시선에는, 누군가 곁에 있어주기를 바라는 마음이 담겨 있었다.'
		},
		{
			id: 'fs_04',
			hint: '메아리가 잦아들 때마다 왕의 목소리가 잠시 작아진다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '작아지는 목소리는, 위엄의 가면이 외로움 앞에 잠시 벗겨지는 순간이었다.'
		}
	],

	npc_roles: {
		eira: {
			role: '적막을 기록하는 자',
			arc: '4편: 응답 없는 메아리와 늘 같은 백성의 수를 기록하며, 위엄 뒤의 외로움을 짚어낸다.'
		},
		inka: {
			role: '외로움을 알아보는 자',
			arc: '4편: 말을 잃은 왕의 다물린 부리에서, 누구보다 빨리 그 쓸쓸함을 알아본다.'
		},
		frost: {
			role: '곁을 살피는 자',
			arc: '4편: 구석에 모여 떠는 작은 무리를 보며, 왕이 추위 속에서 곁을 그러모았음을 헤아린다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '메아리로 돌아오는 호령',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'탐험대가 텅 빈 얼음 알현실에 든다. 왕의 호령이 메아리로만 되돌아온다. 에이라가 그 적막의 크기를 조용히 기록한다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '늘 같은 백성',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'소집에 응하는 것은 늘 같은 작은 펭귄 몇 마리뿐이다. 에이라가 그 백성이 길에서 모인 갈 곳 없는 무리임을 짚어낸다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '돌아보는 시선',
			boss: 'random_boss',
			npc: 'inka',
			summary:
				'인카가 호령하다 말고 옥좌 곁을 슬쩍 돌아보는 왕을 본다. "…누가 곁에 있어주길 바라는 거예요." 외로움을 먼저 알아본다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '구석의 작은 무리',
			boss: 'random_boss',
			npc: 'frost',
			summary:
				'프로스트가 구석에 모여 떠는 작은 펭귄들을 본다. "왕도, 저들도, 그냥 추위 속에서 서로를 그러모은 거야." 곁의 의미를 헤아린다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '다들 압도된 것이다',
			boss: 'pool_033',
			npc: 'inka',
			summary:
				'호령 끝에 돌아온 메아리뿐임을 깨달은 Finn이 잠시 말을 잃는다. 그러다 "다들 짐의 위엄에 압도된 것이다!"라고 황급히 둘러댄다. 인카가 그 쓸쓸함을 마주한 채 네 번째 충돌이 벌어진다.'
		}
	],

	act_summary: {
		intro: '텅 빈 얼음 알현실, 메아리로만 돌아오는 호령. 위엄 뒤로 적막이 도드라진다.',
		rising: '늘 같은 백성, 돌아보는 시선, 구석의 작은 무리. 외로움을 알아보는 인카, 곁을 살피는 프로스트, 적막을 기록하는 에이라.',
		climax_finale: '메아리뿐임을 깨닫고 말을 잃은 왕이 "다들 압도된 것"이라 둘러대며 네 번째 충돌을 맞는다.'
	}
};
