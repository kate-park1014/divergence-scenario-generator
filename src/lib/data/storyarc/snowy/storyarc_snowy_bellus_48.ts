import type { StoryArc } from '$lib/types';

// Bellus 시리즈 5편 (level 48) — 심화: 가져가려는 손길
export const storyarc_snowy_bellus_48: StoryArc = {
	id: 'snowy_bellus_48',
	level: 48,
	chapter_name: {
		korean: '너희의 시간을 가져갈게',
		english: 'Let Me Take Your Time',
		japanese: '君たちの時間をもらうよ',
		chinese: '让我带走你们的时光',
		french: 'Laissez-moi Prendre Votre Temps',
		spanish: 'Déjame Llevarme tu Tiempo',
		vietnamese: 'Để Ta Mang Đi Thời Gian Của Ngươi',
		thai: 'ให้ฉันเอาเวลาของเธอไป',
		hindi: 'मुझे तुम्हारा समय ले लेने दो'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'벨루스가 탐험대를 박제 대상으로 점찍었다. 수백 개의 은빛 얼음 바늘이 그들을 에워싸고, 거꾸로 도는 시계바늘이 그들의 시간을 더듬는다. 박제된 자들의 미소가 사방에서 그들을 지켜본다. 벨루스의 손길이 처음으로 탐험대를 향해 뻗는다.',
		rule: '벨루스는 닿은 자의 시간을 가져가 한순간에 가둔다. 그것을 그는 빼앗음이 아니라 선물이라 부른다 — 늙음과 죽음으로부터 그들을 지키는 선물.',
		secret:
			'벨루스가 탐험대의 시간을 가져가려는 것은 악의가 아니다. 그는 진심으로 그들을 아끼며, 그들이 나이를 먹고 병들어 끝내 죽는 미래를 견딜 수 없어 한다. 그래서 가장 빛나는 지금, 그들의 시간을 여기서 가져가 영원히 지키려 한다.'
	},

	protagonist_goal: '탐험대를 박제하려는 벨루스의 손길을 뿌리치고, 그 다정한 집착의 본질을 마주하라.',

	act_tone: {
		intro: {
			mood: '에워싸는 다정함',
			tension: 2,
			narrative_role: '은빛 얼음 바늘 수백 개가 탐험대를 부드럽게 에워싼다. 위협이라기엔 너무 다정해서 더 무섭다.'
		},
		rising: {
			mood: '거절과 집착',
			tension: 4,
			narrative_role:
				'탐험대가 박제를 거부할수록, 벨루스의 목소리는 더 간절해진다. "왜 거부하니? 너희를 지키려는 건데." 그의 집착이 진심 어린 애정에서 비롯됐음이 드러난다.'
		},
		climax_finale: {
			mood: '선물이라는 이름의 강탈',
			tension: 5,
			narrative_role:
				'벨루스가 탐험대의 시간을 향해 손을 뻗는다. "가만히 있어. 가장 빛나는 지금, 너희의 시간을 가져가 줄게. 늙지 않아도 되도록." 박제의 손길이 정면으로 닥친다.'
		}
	},

	final_boss: {
		id: 'ChronosStitcher_V0',
		name: 'Bellus',
		appearance:
			'Bellus reaching toward a group of explorers with hundreds of silvery ice needles encircling them gently, backward-turning clock hands brushing against their forms. The obsidian-and-brass ghost train looms behind, its pale clock-face watching with tender intent. Frozen smiling figures observe from all around. Beautiful and suffocatingly gentle, cinematic frozen lighting, haunting high-fantasy aesthetic.',
		surface_identity:
			'멈춰버린 세상의 선로 위를 달리는 유령 열차. 그에게 닿은 자들은 영원히 얼어붙은 채 가장 아름다운 순간에 박제된다.',
		true_identity:
			'벨루스는 사람들이 늙고 병들어 죽는 것을 막으려 그들의 시간을 가져가는 존재다. 그가 탐험대에게 보이는 집착은 악의가 아니라, 견딜 수 없을 만큼 진심 어린 애정에서 비롯됐음이 드러난다.',
		motivation:
			'탐험대가 시간을 다시 흐르게 하려는 것을 파괴라 여긴다. 그들이 나이를 먹고, 병들고, 끝내 죽는 것을 막기 위해 — 그들의 시간을 여기서 가져가 주려 한다.',
		twist:
			'벨루스가 탐험대의 시간을 향해 손을 뻗는다. "왜 자꾸 도망치니? 너희를 해치려는 게 아니야." 그의 목소리가 떨린다. "가장 빛나는 지금, 너희의 시간을 가져가 줄게. 그러면 늙지도, 병들지도, 잊혀지지도 않아. 그게 내가 줄 수 있는 가장 큰 선물인데." 강탈을 선물이라 믿는 그의 다정한 광기가 정면으로 드러난다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '은빛 얼음 바늘들이 탐험대를 찌르지 않고, 부드럽게 에워싸기만 한다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '바늘이 찌르지 않은 것은, 벨루스가 그들을 해치려는 게 아니라 다정히 가두려 했기 때문이었다.'
		},
		{
			id: 'fs_02',
			hint: '거부할 때마다 벨루스의 목소리가 화가 아니라 슬픔으로 떨린다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그의 떨림은 분노가 아닌 간절함이었다. 그는 진심으로 탐험대를 지키고 싶어 했다.'
		},
		{
			id: 'fs_03',
			hint: '벨루스가 "너희가 늙는 걸 보고 싶지 않다"고 무심코 중얼거린다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그 중얼거림은 그가 노화와 죽음을 견디지 못한다는, 박제 집착의 진짜 뿌리였다.'
		},
		{
			id: 'fs_04',
			hint: '거꾸로 도는 시계바늘이 탐험대의 손등을 스칠 때, 잠시 그들의 시간이 느려지는 듯하다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '느려지던 시간은 벨루스의 손길이 이미 그들의 시간을 더듬기 시작했다는 신호였다.'
		}
	],

	npc_roles: {
		eira: {
			role: '집착의 뿌리를 읽는 자',
			arc: '5편: 벨루스의 떨리는 목소리와 무심한 중얼거림에서, 그의 박제 집착이 애정에서 비롯됐음을 읽어내 기록한다.'
		},
		glace: {
			role: '노화를 긍정하는 자',
			arc: '5편: 늙는 것을 두려워하는 벨루스 앞에서, 늙고 시드는 것이야말로 살아 있다는 증거임을 담담히 마주한다.'
		},
		hild: {
			role: '강탈을 거절하는 자',
			arc: '5편: 선물이라는 이름의 강탈 앞에 서서, 빼앗긴 미래는 결코 선물이 아님을 의례자로서 단호히 거절한다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '찌르지 않는 바늘',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'수백 개의 은빛 얼음 바늘이 탐험대를 부드럽게 에워싼다. 찌르지 않고 감싸기만 한다. 에이라가 그 다정함이 곧 박제의 손길임을 읽어내고 기록한다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '늙는 걸 보고 싶지 않아',
			boss: 'random_boss',
			npc: 'glace',
			summary:
				'벨루스가 "너희가 늙는 걸 보고 싶지 않다"고 중얼거린다. 글라스가 답한다. "늙는 건 살아 있다는 뜻이에요." 노화를 두려워하는 그에게 시드는 것의 긍정을 담담히 내민다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '떨리는 목소리',
			boss: 'random_boss',
			npc: 'hild',
			summary:
				'거부당할 때마다 벨루스의 목소리가 분노가 아니라 슬픔으로 떨린다. 힐드가 단호히 답한다. "당신의 슬픔은 알겠어요. 하지만 빼앗긴 미래는 선물이 아니에요." 강탈을 의례자로서 거절한다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '느려지는 손등',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'거꾸로 도는 시계바늘이 손등을 스칠 때 시간이 느려진다. 에이라가 벨루스의 손길이 이미 그들의 시간을 더듬기 시작했음을 기록하며, 그 집착의 뿌리가 애정임을 적는다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '가장 큰 선물',
			boss: 'pool_035',
			npc: 'hild',
			summary:
				'벨루스가 탐험대의 시간을 향해 손을 뻗는다. "가장 빛나는 지금 너희의 시간을 가져가 줄게. 그게 내가 줄 수 있는 가장 큰 선물인데." 강탈을 선물이라 믿는 다정한 광기 앞에, 힐드가 거절의 의지를 안고 박제의 손길과 정면으로 맞선다.'
		}
	],

	act_summary: {
		intro: '벨루스가 탐험대를 박제 대상으로 점찍는다. 은빛 바늘이 찌르지 않고 부드럽게 에워싼다.',
		rising: '노화를 긍정하는 글라스, 강탈을 거절하는 힐드, 집착의 뿌리를 읽는 에이라. 그 집착이 진심 어린 애정임이 드러난다.',
		climax_finale: '"가장 큰 선물"이라며 시간을 가져가려는 벨루스. 강탈을 선물이라 믿는 다정한 광기가 정면으로 드러난다.'
	}
};
