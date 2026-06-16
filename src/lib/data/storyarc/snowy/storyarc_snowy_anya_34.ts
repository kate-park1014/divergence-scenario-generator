import type { StoryArc } from '$lib/types';

// Anya 시리즈 4편 (level 34) — 되풀이되는 발자국
export const storyarc_snowy_anya_34: StoryArc = {
	id: 'snowy_anya_34',
	level: 34,
	chapter_name: {
		korean: '되풀이되는 발자국',
		english: 'The Footprints That Repeat',
		japanese: '繰り返される足跡',
		chinese: '反复出现的足迹',
		french: 'Les Empreintes Qui Se Répètent',
		spanish: 'Las Huellas Que Se Repiten',
		vietnamese: 'Dấu Chân Lặp Lại',
		thai: 'รอยเท้าที่วนซ้ำ',
		hindi: 'बार-बार लौटते पदचिह्न'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'눈보라가 잠시 잦아든 새하얀 분지. 눈밭 위에 아주 작은 발자국이 한 줄로 찍혀 있다. 따라가 보면 그 발자국은 떠났다가 같은 자리로 되돌아오기를, 셀 수 없이 되풀이하고 있다.',
		rule: '발자국을 따라가는 자는 빛의 과거를 더듬게 된다. 그러나 그 발자국은 결코 분지를 벗어나지 못한다.',
		secret:
			'작은 발자국은 빛이 수백 년간 같은 길을 오간 자취다. 떠나려 했다가도 차마 떠나지 못하고, 기다리는 자리로 거듭 되돌아온 흔적이다.'
	},

	protagonist_goal: '눈밭에 되풀이되는 작은 발자국을 따라, 빛이 무엇을 기다리는지 밝혀라.',

	act_tone: {
		intro: {
			mood: '정적 속 발견',
			tension: 1,
			narrative_role: '눈보라가 잦아든 분지. 눈밭에 아주 작은 발자국이 한 줄로 찍혀 있다.'
		},
		rising: {
			mood: '벗어나지 못하는 자취',
			tension: 3,
			narrative_role:
				'발자국은 떠났다가 같은 자리로 되돌아오기를 거듭한다. 셀 수 없이 겹친 자국이, 분지를 끝내 벗어나지 못했음을 말해 준다.'
		},
		climax_finale: {
			mood: '제자리에 묶인 슬픔',
			tension: 5,
			narrative_role:
				'발자국이 마침내 한 지점에 둥글게 모여 멈춘다. 그 자리에서 빛이 떠나려다 되돌아오기를 되풀이하며, 떨리는 작은 목소리가 새어 나온다.'
		}
	},

	final_boss: {
		id: 'GlacialBeacon_Anya_V1',
		name: 'Anya',
		appearance:
			'A small light hovering above a vast white snowfield covered in tiny child-sized footprints that loop and return to the same spot endlessly, layered over one another countless times. The light drifts away then circles back, unable to leave. A faint child silhouette flickers within. Cinematic still pale snowfield under a clearing sky, sorrowful and tender high-fantasy aesthetic.',
		surface_identity:
			'발자국을 따라 조난자를 인도하는 듯 보이는 빛. 그러나 그 발자국은 분지 안에서만 맴돈다.',
		true_identity:
			'작은 발자국은 빛이 수백 년간 같은 길을 오간 자취다. 떠나려 했다가도 차마 떠나지 못하고, 기다리는 자리로 거듭 되돌아온 흔적이다.',
		motivation:
			'누군가가 돌아올 자리를 비워 둘 수 없어, 떠나려다가도 늘 같은 자리로 되돌아온다. 그 자리를 지키는 것만이 다시 만날 유일한 길이라 믿는다.',
		twist:
			'발자국을 끝까지 따라가자, 자국이 한 지점에 둥글게 모여 멈춘다. 그 자리에서 빛이 한 발 떠나려다 멈칫, 다시 되돌아오기를 되풀이한다. "…여기 있어야… 돼요… 떠나면… 못 만나니까…" 떨리는 작은 목소리가 새어 나온다. 빛은 길을 잃은 게 아니라, 떠날 수 없어 제자리에 영원히 묶인 것이었다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '눈밭의 작은 발자국이 떠났다가 같은 자리로 되돌아오기를 거듭한다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '떠나려다 되돌아온 자취였다. 차마 그 자리를 비워 둘 수 없었던 것이다.'
		},
		{
			id: 'fs_02',
			hint: '발자국이 한 자리에 셀 수 없이 겹쳐 찍혀, 눈이 단단히 다져져 있다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '겹겹이 다져진 자국 — 빛이 수백 년을 같은 자리에서 맴돌았다는 증거였다.'
		},
		{
			id: 'fs_03',
			hint: '발자국이 분지 끝에 다다르면, 늘 멈칫하다 방향을 돌려 되돌아온다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '떠날 수도 있었지만 떠나지 못했다. 그 자리를 지키는 것이 다시 만날 유일한 길이라 믿었기에.'
		},
		{
			id: 'fs_04',
			hint: '발자국이 모이는 자리에 빛이 가장 오래, 가장 따뜻하게 머문다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그 자리가 누군가를 기다리기로 한 자리, 떠난 이들과 다시 만나기로 약속한 자리였다.'
		}
	],

	npc_roles: {
		eira: {
			role: '자취를 읽는 기록자',
			arc: '4편: 겹겹이 다져진 발자국을 읽어, 빛이 수백 년 같은 자리를 맴돌았음을 밝힌다.'
		},
		inka: {
			role: '머무름을 헤아리는 자',
			arc: '4편: 떠나지 못하고 되돌아오는 빛의 마음을 헤아리며 가슴 아파한다.'
		},
		bran: {
			role: '집을 떠올리는 길잡이',
			arc: '4편: 제자리에 묶인 빛에게서, 집으로 돌려보내야 할 길 잃은 이의 모습을 처음으로 겹쳐 본다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '눈밭의 작은 발자국',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'눈보라가 잦아든 새하얀 분지. 눈밭에 아주 작은 발자국이 한 줄로 찍혀 있다. 에이라가 그 자취를 따라가며 기록을 시작한다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '겹겹이 다져진 자국',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 한 자리에 셀 수 없이 겹쳐 찍혀 단단히 다져진 발자국을 읽어낸다. 빛이 수백 년을 같은 자리에서 맴돌았다는 증거다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '돌아서는 발걸음',
			boss: 'random_boss',
			npc: 'bran',
			summary:
				'브란이 발자국을 따라 분지 끝까지 간다. 발자국은 분지 끝에 다다르면 늘 멈칫하다 되돌아온다. "떠날 수 있었는데… 떠나지 못한 거야. 집으로 가야 할 누군가처럼."'
		},
		{
			order: 4,
			act: 'rising',
			title: '가장 따뜻한 자리',
			boss: 'random_boss',
			npc: 'inka',
			summary:
				'인카가 발자국이 모이는 자리에 빛이 가장 오래, 가장 따뜻하게 머무는 것을 본다. 그 자리에 깃든 머무름의 마음을 헤아린다. "…여기서, 누군가를 기다리기로 했구나."'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '떠나면 못 만나니까',
			boss: 'pool_109',
			npc: 'bran',
			summary:
				'발자국이 한 지점에 둥글게 모여 멈춘다. 빛이 떠나려다 되돌아오기를 되풀이한다. "여기 있어야… 돼요… 떠나면… 못 만나니까…" 브란이 길을 잃은 게 아니라 떠날 수 없어 제자리에 묶인 빛을 마주하며, 집으로 인도하려는 마음을 굳힌다.'
		}
	],

	act_summary: {
		intro: '눈보라가 잦아든 분지의 작은 발자국. 에이라가 자취를 따라 기록을 시작한다.',
		rising: '겹겹이 다져진 자국을 읽는 에이라, 돌아서는 발걸음을 좇는 브란, 가장 따뜻한 자리를 헤아리는 인카. 빛은 제자리를 맴돌고 있다.',
		climax_finale: '발자국이 한 지점에 모여 멈추고, 빛이 떠나려다 되돌아온다. "떠나면 못 만나니까." 브란이 집으로 인도하려는 마음을 굳힌다.'
	}
};
