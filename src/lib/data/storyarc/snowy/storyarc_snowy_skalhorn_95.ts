import type { StoryArc } from '$lib/types';

// SkalHorn 시리즈 10편 (level 95) — 성대한 얼음 만찬 (시리즈 피날레)
export const storyarc_snowy_skalhorn_95: StoryArc = {
	id: 'snowy_skalhorn_95',
	level: 95,
	chapter_name: {
		korean: '성대한 얼음 만찬',
		english: 'The Grand Feast of Ice',
		japanese: '盛大な氷の宴',
		chinese: '盛大的冰宴',
		french: 'Le Grand Banquet de Glace',
		spanish: 'El Gran Banquete de Hielo',
		vietnamese: 'Đại Tiệc Băng Giá',
		thai: 'งานเลี้ยงน้ำแข็งอันยิ่งใหญ่',
		hindi: 'बर्फ़ का भव्य भोज'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'시리즈의 끝. 금기의 계약도, 얼어붙은 절규도, 끝나지 않는 축제도 모두 마주한 끝에 탐험대는 뿔잔 바로 앞에 선다. 뿔잔이 격렬히 진동하며, 갇힌 영혼들의 비명과 왜곡된 찬가가 뒤섞여 울리기 시작한다.',
		rule: '뿔잔을 거부하는 순간 SkalHorn은 완전히 이성을 잃는다. 이 마지막 만찬에서 손님이 되기를 거절하는 자는 곧 불청객이다.',
		secret:
			'SkalHorn은 광신적 주술사의 영혼과 마을 사람들의 절규, 정령의 권능이 뒤섞인 광기의 그릇이다. 혹독한 겨울을 축복이라 여기며, 모든 삶을 얼음 아래 영원히 노래하게 만들려 한다.'
	},

	protagonist_goal: '뿔잔의 마지막 초대를 거부하고, 광기에 찬 얼음 만찬을 끝내라.',

	act_tone: {
		intro: {
			mood: '진동하는 뿔잔',
			tension: 1,
			narrative_role: '뿔잔이 격렬히 진동하며 비명과 찬가가 뒤섞여 울리기 시작한다. 마지막 만찬이 시작된다.'
		},
		rising: {
			mood: '회수되는 광기',
			tension: 3,
			narrative_role:
				'금기의 계약도, 갇힌 절규도, 빈 자리도 — 시리즈 내내 본 모든 것이 이 마지막 만찬으로 수렴한다.'
		},
		climax_finale: {
			mood: '폭주하는 환대',
			tension: 5,
			narrative_role:
				'푸른 광채가 맹렬히 타오르고 눈보라가 폭주한다. 뿔잔이 완전히 이성을 잃은 채 손님들을 환영하며 절규한다.'
		}
	},

	final_boss: {
		id: 'MadFeast_SkalHorn_V1',
		name: 'SkalHorn',
		appearance:
			'The horn-vessel violently trembling as trapped souls scream and a warped festival hymn blares, pale blue light flaring fiercely while distorted faces surface within frozen crystals. The blizzard goes berserk, burying the land as the vessel howls in total madness. Cinematic climactic raging blue blizzard, frenzied high-fantasy aesthetic.',
		surface_identity:
			'고귀한 의식용 뿔잔, 망각된 신께 바쳐진 유물처럼 여겨졌던 존재.',
		true_identity:
			'한때 혹독한 겨울로부터 부족을 구하려던 광신적인 주술사가 빙설 정령과 맺은 금기의 계약으로 변질된 존재. 주술사의 영혼과 함께 마을 사람들의 얼어붙은 절규, 그리고 정령의 기이한 권능이 뒤섞여, 끝없는 겨울 축제를 소망하는 광기에 찬 그릇이 되었다.',
		motivation:
			'혹독한 겨울을 축복이라 여기며, 이 땅의 모든 생명을 영원한 얼음의 품으로 인도하여 완벽한 정적과 순백의 영원한 축제를 완성하려 한다. 자신을 거부하는 모든 존재를 불청객이자 축제의 방해자로 간주한다.',
		twist:
			'뿔잔이 격렬하게 진동하며, 내부에 갇힌 영혼들의 고통스러운 비명과 함께 왜곡된 축제 찬가가 뒤섞여 울려 퍼진다. 푸른 광채가 맹렬하게 타오르며 뿔잔 표면에 얼어붙은 수정들 속에서 일그러진 얼굴들이 섬뜩하게 떠오른다. 주변의 눈보라가 폭주하며 땅을 뒤덮고, 보스는 완전히 이성을 잃은 듯 절규한다. "축복받으라! 나의 영원한 손님들이여! …모든 고통은 눈 속에 묻히고, 모든 삶은 얼음 아래 영원히 노래하리라! 이 얼음 찬미를 받아들여라! …환영하노라, 나의 성대한 얼음 만찬에!"'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '뿔잔이 미세하게 떨리기 시작하며, 비명과 찬가가 처음으로 한데 섞여 든다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '섞여 든 비명과 찬가는 곧 폭주할 광기의 전조였다.'
		},
		{
			id: 'fs_02',
			hint: '표면 수정 속 얼굴들이 일제히 같은 방향 — 탐험대를 향하기 시작한다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '얼굴들이 향한 곳은 새 손님이었다 — 만찬에 초대될 다음 제물.'
		},
		{
			id: 'fs_03',
			hint: '푸른 광채가 점점 더 맹렬하게 타오르며 주변 공기를 얼린다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '타오르는 광채는 이성을 잃기 직전의 폭발 직전이었다.'
		},
		{
			id: 'fs_04',
			hint: '주변의 눈보라가 점차 거세지며 땅을 향해 몰아치기 시작한다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '몰아치는 눈보라는 모든 것을 얼려 만찬을 완성하려는 폭주였다.'
		}
	],

	npc_roles: {
		eira: {
			role: '광기를 매듭짓는 자',
			arc: '10편: 시리즈 내내 해독해온 계약과 절규의 진실을 매듭짓고, 마을 사람들의 이름을 기록에 새긴다.'
		},
		ivar: {
			role: '만찬을 끝내는 전사',
			arc: '10편: 폭주하는 환대에 맞서, 끝나지 않는 만찬을 끝내기 위해 앞장서 검을 든다. (3인 throughline 수렴)'
		},
		boris: {
			role: '초대를 거부하는 자',
			arc: '10편: 마지막까지 손님 되기를 단호히 거부하고, 광기의 환대가 곧 죽음임을 동료들에게 외친다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '진동하는 뿔잔',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'탐험대가 시리즈의 끝, 뿔잔 바로 앞에 선다. 에이라가 뿔잔이 떨리며 비명과 찬가가 처음으로 한데 섞여 드는 것을 본다. 마지막 만찬이 시작된다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '향하는 얼굴들',
			boss: 'random_boss',
			npc: 'boris',
			summary:
				'보리스가 수정 속 얼굴들이 일제히 탐험대를 향하기 시작함을 본다. 새 손님을 노리는 것이다. "다음 차례는 우리야. 절대 초대를 받지 마."'
		},
		{
			order: 3,
			act: 'rising',
			title: '타오르는 광채',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 푸른 광채가 점점 더 맹렬히 타오르며 공기를 얼리는 것을 본다. 이성을 잃기 직전이다. "곧 폭주해. 마지막 진실까지 다 읽었어 — 이제 끝내야 해."'
		},
		{
			order: 4,
			act: 'rising',
			title: '몰아치는 눈보라',
			boss: 'random_boss',
			npc: 'ivar',
			summary:
				'이바르가 주변 눈보라가 거세지며 땅을 향해 몰아치기 시작함을 본다. 모든 것을 얼려 만찬을 완성하려는 폭주다. 끝내기 위해 앞장서 검을 든다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '나의 성대한 얼음 만찬에',
			boss: 'pool_110',
			npc: 'boris',
			summary:
				'뿔잔이 격렬히 진동하며 비명과 왜곡된 찬가가 뒤섞이고, 수정 속 일그러진 얼굴들이 떠오른다. 눈보라가 폭주하며 뿔잔이 이성을 잃고 절규한다. "축복받으라! 나의 영원한 손님들이여! …모든 삶은 얼음 아래 영원히 노래하리라! …환영하노라, 나의 성대한 얼음 만찬에!" 초대를 거부해온 보리스와 3인의 여정이 수렴하는 최종 결전이 벌어진다.'
		}
	],

	act_summary: {
		intro: '뿔잔이 진동하며 비명과 찬가가 섞여 든다. 에이라가 마지막 만찬의 시작을 읽는다.',
		rising: '향하는 얼굴들을 본 보리스, 타오르는 광채를 읽는 에이라, 몰아치는 눈보라에 검을 든 이바르. 모든 광기가 만찬으로 수렴한다.',
		climax_finale: '"환영하노라, 나의 성대한 얼음 만찬에!" 이성을 잃은 뿔잔의 폭주와의 최종 결전 — 시리즈 피날레.'
	}
};
