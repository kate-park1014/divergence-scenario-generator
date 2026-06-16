import type { StoryArc } from '$lib/types';

// Fenrir 시리즈 3편 (level 27) — 동공 속 눈보라
export const storyarc_snowy_fenrir_27: StoryArc = {
	id: 'snowy_fenrir_27',
	level: 27,
	chapter_name: {
		korean: '동공 속 눈보라',
		english: 'The Blizzard Within the Hollow',
		japanese: '洞の中の吹雪',
		chinese: '空洞中的风雪',
		french: 'La Tempête au Creux des Yeux',
		spanish: 'La Tormenta en el Vacío',
		vietnamese: 'Bão Tuyết Trong Hốc Mắt',
		thai: 'พายุหิมะในโพรงตา',
		hindi: 'खोखले में बर्फ़ीला तूफ़ान'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'눈보라가 늑대를 중심으로 소용돌이치는 설원. 늑대의 안구가 있어야 할 자리에는 깊은 동공만이 뚫려 있고, 그 안에서 또 다른 눈보라가 휘몰아친다. 탐험대는 그 동공을 들여다보다, 그것이 단순한 구멍이 아님을 알게 된다.',
		rule: '늑대의 동공을 오래 들여다보지 마라. 그 안의 눈보라가 보는 이의 온기마저 끌어당긴다.',
		secret:
			'동공 속 눈보라는 늑대가 삼킨 모든 것이 쏟아져 들어가 사라지는 통로다. 그 너머에는 무엇으로도 메울 수 없는 텅 빈 공허가 있다.'
	},

	protagonist_goal: '늑대의 텅 빈 동공이 무엇으로 통하는지, 그 비밀의 한 겹을 더 벗겨라.',

	act_tone: {
		intro: {
			mood: '빨려드는 한기',
			tension: 1,
			narrative_role: '늑대의 동공 속에서 또 다른 눈보라가 휘몰아친다. 가까이 설수록 몸의 온기가 그쪽으로 끌려간다.'
		},
		rising: {
			mood: '삼킴의 통로',
			tension: 3,
			narrative_role:
				'늑대가 삼킨 것들이 모두 동공 너머로 사라진다. 위장도, 채워짐도 없는 통로. 그 끝은 보이지 않는다.'
		},
		climax_finale: {
			mood: '공허를 마주함',
			tension: 5,
			narrative_role:
				'탐험대가 동공을 정면으로 마주하자, 그 너머로 끝없이 빨려드는 공허가 드러난다. 늑대는 삼키고 또 삼키지만 결코 채워지지 않는다.'
		}
	},

	final_boss: {
		id: 'HollowHowl_Fenrir_V1',
		name: 'Fenrir',
		appearance:
			'A colossal carcass-and-bone wolf in a blizzard that spirals inward toward it. Its hollow eye cavities open into deep voids where a separate starving blizzard whirls endlessly, dragging in warmth from anything that draws near. Whatever it swallows pours through into the dark hollows and vanishes without a trace. Bones clatter like grim wind chimes. Cinematic cold pulling snowy lighting, ominous high-fantasy aesthetic.',
		surface_identity:
			'여전히 거대한 마수의 형상. 그러나 그 안구 자리의 동공 속에서 또 다른 눈보라가 휘몰아치며, 주변의 온기를 끌어당긴다.',
		true_identity:
			'늑대의 동공은 삼킨 모든 것이 쏟아져 들어가 사라지는 통로다. 위장도 채워짐도 없이, 그 너머에는 메울 수 없는 공허가 있다.',
		motivation:
			'늑대는 끝없이 삼킨다. 그러나 삼킨 것은 모두 동공 너머로 사라지기에, 그 굶주림은 채워질 길이 없다.',
		twist:
			'탐험대가 늑대의 동공을 정면으로 마주한다. 그 너머로 끝없이 빨려드는 공허가 드러난다. 늑대가 큰 사체 하나를 통째로 삼키지만, 그것은 동공 속 눈보라에 휩쓸려 흔적도 없이 사라진다. 몸은 조금도 채워지지 않는다. "…삼키고 또 삼켜도… 아무것도 남지 않아." 탐험대는 이 존재가 결코 배부를 수 없는 굶주림임을 깨닫기 시작한다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '늑대 주위의 눈보라가, 늑대를 향해 안쪽으로 소용돌이치며 빨려든다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '눈보라마저 동공 속 공허로 빨려 들어가고 있었다. 그 끌어당김에는 끝이 없다.'
		},
		{
			id: 'fs_02',
			hint: '동공에 가까이 선 자의 입김과 온기가, 그쪽으로 스르르 끌려간다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '동공은 온기를 끌어당긴다. 살아 있는 것의 따스함이 곧 그 공허의 먹이다.'
		},
		{
			id: 'fs_03',
			hint: '늑대가 삼킨 큰 사체가, 위장에 머물지 않고 동공 너머로 곧장 사라진다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '삼킨 것은 위장이 아니라 공허로 빠진다. 그래서 무엇을 먹어도 채워지지 않는다.'
		},
		{
			id: 'fs_04',
			hint: '아무리 삼켜도 늑대의 몸은 조금도 커지거나 채워지지 않는다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '결코 채워지지 않는 굶주림. 그것이 이 존재의 본질에 가까운 진실이었다.'
		}
	],

	npc_roles: {
		eira: {
			role: '통로의 추적자',
			arc: '3편: 동행단의 기록자로서 늑대가 삼킨 것이 동공 너머로 사라지는 경로를 추적해 기록한다.'
		},
		inka: {
			role: '온기를 지키는 자',
			arc: '3편: 동공이 동료들의 온기를 끌어당기는 것을 알아채고, 모두를 동공에서 떨어뜨리며 보살핀다.'
		},
		glace: {
			role: '공허의 직시자',
			arc: '3편: 동공 너머의 끝없는 공허를 담담히 들여다보며, 채워지지 않는 굶주림의 본질에 가장 먼저 다가선다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '안으로 빨려드는 눈보라',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'탐험대가 늑대에 다가서자, 주위의 눈보라가 늑대를 향해 안쪽으로 소용돌이친다. 에이라가 그 끌어당김을 기록한다. 동공 속에서 또 다른 눈보라가 휘몰아친다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '끌려가는 온기',
			boss: 'random_boss',
			npc: 'inka',
			summary:
				'인카가 동공에 가까이 선 동료의 입김과 온기가 그쪽으로 끌려가는 것을 알아챈다. 서둘러 모두를 동공에서 떨어뜨린다. "다들 너무 가까이 가지 말아요. 저게… 우리 온기를 빨아들여요."'
		},
		{
			order: 3,
			act: 'rising',
			title: '사라지는 통로',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 늑대가 삼킨 큰 사체가 위장에 머물지 않고 동공 너머로 곧장 사라지는 것을 추적해 기록한다. 이것은 위장이 아니라 통로다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '채워지지 않는 몸',
			boss: 'random_boss',
			npc: 'glace',
			summary:
				'글라세가 아무리 삼켜도 늑대의 몸이 조금도 커지지 않음을 담담히 응시한다. "…먹어도 먹어도 그대로야. 저건 채워질 수가 없어."'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '아무것도 남지 않아',
			boss: 'pool_112',
			npc: 'glace',
			summary:
				'탐험대가 동공을 정면으로 마주한다. 그 너머로 끝없는 공허가 빨려든다. 늑대가 큰 사체를 통째로 삼키지만 흔적도 없이 사라지고, 몸은 그대로다. 글라세가 직시한다. "삼키고 또 삼켜도 아무것도 남지 않아." 채워지지 않는 굶주림과의 전투가 이어진다.'
		}
	],

	act_summary: {
		intro: '늑대를 향해 안으로 소용돌이치는 눈보라. 동공 속 또 다른 눈보라를 에이라가 기록한다.',
		rising: '온기를 지키는 인카, 통로를 추적하는 에이라, 채워지지 않는 몸을 응시하는 글라세. 동공은 위장이 아니라 공허로 통하는 통로다.',
		climax_finale: '동공 너머 끝없는 공허. 무엇을 삼켜도 사라진다. 글라세가 직시한다 — "아무것도 남지 않아."'
	}
};
