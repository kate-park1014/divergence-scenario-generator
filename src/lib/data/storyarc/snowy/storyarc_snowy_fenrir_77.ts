import type { StoryArc } from '$lib/types';

// Fenrir 시리즈 8편 (level 77) — 빨려드는 설원
export const storyarc_snowy_fenrir_77: StoryArc = {
	id: 'snowy_fenrir_77',
	level: 77,
	chapter_name: {
		korean: '빨려드는 설원',
		english: 'The Snowfield Drawn In',
		japanese: '吸い込まれる雪原',
		chinese: '被吞噬的雪原',
		french: 'La Plaine Neigeuse Aspirée',
		spanish: 'El Páramo Nevado Absorbido',
		vietnamese: 'Cánh Đồng Tuyết Bị Hút Vào',
		thai: 'ทุ่งหิมะที่ถูกดูดกลืน',
		hindi: 'खिंचता हुआ हिमक्षेत्र'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'늑대 주위의 설원이 생기를 잃고 잿빛으로 메말라가는 구역. 눈도, 바람도, 멀리 깃들었던 작은 생명들마저 늑대를 향해 천천히 빨려 들어간다. 굶주림이 제 몸을 넘어 설원 전체의 온기를 삼키기 시작했다.',
		rule: '늑대 가까이의 설원에 오래 머물지 마라. 그 굶주림은 사물뿐 아니라 온기와 생명까지 빨아들인다.',
		secret:
			'결코 채워지지 않는 굶주림이 제 몸으로 부족해, 이제 설원 전체의 온기와 생명을 빨아들이기 시작했다. 늑대가 떠도는 자리마다 모든 따스함이 그 공허로 사라진다.'
	},

	protagonist_goal: '설원의 생기가 늑대를 향해 사라지는 이유, 공허가 세상으로 번지는 진실을 밝혀라.',

	act_tone: {
		intro: {
			mood: '메말라가는 땅',
			tension: 1,
			narrative_role: '늑대 주위의 설원이 생기를 잃고 잿빛으로 메말라간다.'
		},
		rising: {
			mood: '번지는 공허',
			tension: 3,
			narrative_role:
				'눈도 바람도 작은 생명들마저 늑대를 향해 빨려 든다. 굶주림이 제 몸을 넘어 세상으로 번지고 있었다.'
		},
		climax_finale: {
			mood: '삼켜지는 온기',
			tension: 5,
			narrative_role:
				'탐험대가 공허의 확산을 알아내자, 그들의 발밑 온기마저 늑대 쪽으로 끌려간다. "…부족하다… 더… 설원도, 너희도…"'
		}
	},

	final_boss: {
		id: 'HollowHowl_Fenrir_V1',
		name: 'Fenrir',
		appearance:
			'The snowfield around the wolf draining into gray lifelessness, snow and wind and even distant small creatures slowly pulled toward it. The hunger has overflowed its own frame and now devours the warmth of the whole plain, everything fading into the void around it. Cinematic desolate draining snowy lighting, ominous high-fantasy aesthetic.',
		surface_identity:
			'여전히 거대한 마수의 형상. 그러나 이제 그 주위의 설원마저 생기를 잃고 그를 향해 빨려 든다.',
		true_identity:
			'결코 채워지지 않는 굶주림이 제 몸으로 부족해, 이제 설원 전체의 온기와 생명을 빨아들이기 시작했다. 늑대가 떠도는 자리마다 모든 따스함이 그 공허로 사라진다.',
		motivation:
			'채워지지 않는 굶주림이 제 몸을 넘어 세상으로 번진다. 그 본능은 설원의 온기든 생명이든 가리지 않고, 닿는 모든 것을 공허로 끌어들인다.',
		twist:
			'탐험대가 공허의 확산을 알아내자, 그들의 발밑 온기마저 늑대 쪽으로 끌려간다. "…부족하다… 더… 설원도, 너희도…" 굶주림은 이제 한 존재의 것이 아니라, 세상을 삼키기 시작한 공허였다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '늑대 주위의 눈이 색을 잃고 잿빛으로 메말라간다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '메마른 잿빛은 굶주림이 설원의 생기까지 빨아들인 흔적이었다.'
		},
		{
			id: 'fs_02',
			hint: '멀리 깃들었던 작은 생명들이 늑대를 향해 천천히 끌려간다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '끌려가는 생명들은 공허가 제 몸을 넘어 세상으로 번지는 증거였다.'
		},
		{
			id: 'fs_03',
			hint: '바람마저 늑대 쪽으로만 불며, 그 너머는 죽은 듯 고요하다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '한 방향으로만 부는 바람은 모든 것이 공허로 빨려드는 흐름이었다.'
		},
		{
			id: 'fs_04',
			hint: '탐험대가 머무는 자리의 온기마저 조금씩 늑대 쪽으로 새어 나간다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '새어 나가는 온기는 공허가 탐험대마저 먹이로 삼기 시작했음을 뜻했다.'
		}
	],

	npc_roles: {
		eira: {
			role: '확산을 기록하는 자',
			arc: '8편: 설원의 생기가 늑대를 향해 사라지는 경로를 기록해, 공허가 세상으로 번지고 있음을 밝힌다.'
		},
		inka: {
			role: '온기를 지키는 자',
			arc: '8편: 끌려가는 작은 생명과 동료들의 온기를 감싸 지키며, 공허에 맞서 따스함을 붙든다.'
		},
		glace: {
			role: '번지는 끝을 보는 자',
			arc: '8편: 굶주림이 제 몸을 넘어 세상으로 번지는 끝을 담담히 직시하며, 그 위협의 규모를 가늠한다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '잿빛이 되는 눈',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'탐험대가 늑대 주위의 설원이 생기를 잃고 잿빛으로 메말라가는 구역에 들어선다. 에이라가 굶주림이 설원의 생기까지 빨아들인 흔적을 기록하기 시작한다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '끌려가는 생명',
			boss: 'random_boss',
			npc: 'inka',
			summary:
				'인카가 멀리 깃들었던 작은 생명들이 늑대를 향해 천천히 끌려가는 것을 본다. 끌려가는 것들을 감싸 지킨다. "안 돼… 이 작은 것들까지 데려가지 마."'
		},
		{
			order: 3,
			act: 'rising',
			title: '한 방향의 바람',
			boss: 'random_boss',
			npc: 'glace',
			summary:
				'글라세가 바람마저 늑대 쪽으로만 불며 그 너머는 죽은 듯 고요함을 직시한다. "모든 게 한쪽으로 빨려 들어가. 공허가… 세상으로 번지고 있어."'
		},
		{
			order: 4,
			act: 'rising',
			title: '새어 나가는 온기',
			boss: 'random_boss',
			npc: 'inka',
			summary:
				'인카가 탐험대가 머무는 자리의 온기마저 조금씩 늑대 쪽으로 새어 나가는 것을 감지한다. 공허가 탐험대마저 먹이로 삼기 시작했다. 모두를 감싸 온기를 붙든다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '설원도, 너희도',
			boss: 'pool_112',
			npc: 'glace',
			summary:
				'탐험대가 공허의 확산을 알아내자 그들의 발밑 온기마저 늑대 쪽으로 끌려간다. "부족하다… 더… 설원도, 너희도…" 굶주림이 한 존재의 것이 아니라 세상을 삼키기 시작한 공허임이 드러나며, 번지는 끝을 직시해온 글라세와 함께 전투가 이어진다.'
		}
	],

	act_summary: {
		intro: '늑대 주위의 설원이 생기를 잃고 잿빛으로 메말라간다. 에이라가 그 흔적을 기록한다.',
		rising: '끌려가는 생명을 지키는 인카, 한 방향의 바람을 직시하는 글라세, 새어 나가는 온기를 붙드는 인카. 공허가 세상으로 번진다.',
		climax_finale: '"설원도, 너희도." 굶주림은 한 존재의 것이 아니라, 세상을 삼키기 시작한 공허였다.'
	}
};
