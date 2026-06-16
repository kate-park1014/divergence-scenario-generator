import type { StoryArc } from '$lib/types';

// Skuld 시리즈 9편 (level 82) — 홀로 남으라는 명
export const storyarc_snowy_skuld_82: StoryArc = {
	id: 'snowy_skuld_82',
	level: 82,
	chapter_name: {
		korean: '홀로 남으라는 명',
		english: 'The Command to Remain Alone',
		japanese: '独り残れという命',
		chinese: '独自留守的命令',
		french: 'L’Ordre de Rester Seul',
		spanish: 'La Orden de Quedarse Solo',
		vietnamese: 'Mệnh Lệnh Ở Lại Một Mình',
		thai: 'คำสั่งให้อยู่เพียงลำพัง',
		hindi: 'अकेले रहने का आदेश'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'빙하의 가장 깊은 심장부. 이곳의 룬은 더 이상 항해도, 맹세도 아닌 한 사람의 이름만을 거듭 새긴다 — 라그나르. 스쿌드가 수천 년간 부르고 또 부른 이름이다.',
		rule: '심장부의 룬을 읽는 자는 스쿌드의 비탄의 근원을 알게 된다. 그것은 어둠도 전쟁도 아닌, 버려졌다는 외로움이다.',
		secret:
			'라그나르는 마지막 순간 스쿌드에게 "홀로 남아 어둠을 지키라" 명했다. 척후선은 족장을 따르지 못하고 홀로 설원에 남겨졌다. 영원한 의무 뒤에 숨은 진짜 상처는, 홀로 남겨진 외로움이었다.'
	},

	protagonist_goal: '빙하 심장부의 룬을 해독해, 스쿌드 비탄의 진짜 근원을 밝혀라.',

	act_tone: {
		intro: {
			mood: '거듭 불린 이름',
			tension: 1,
			narrative_role: '심장부의 룬은 항해도 맹세도 아닌, 한 사람의 이름만을 거듭 새긴다 — 라그나르.'
		},
		rising: {
			mood: '버려진 자리',
			tension: 3,
			narrative_role:
				'룬이 마지막 명령을 되살린다 — "홀로 남아 어둠을 지키라." 의무의 가면 뒤로, 홀로 남겨진 외로움이 드러난다.'
		},
		climax_finale: {
			mood: '외로움의 고백',
			tension: 5,
			narrative_role:
				'탐험대가 마지막 명령을 읽어내자, 빙하가 처음으로 의무가 아닌 슬픔으로 떤다. "…나는 외로웠다. 어둠보다도, 홀로 남겨진 것이 더 두려웠다."'
		}
	},

	final_boss: {
		id: 'GlacialOath_Skuld_V1',
		name: 'Skuld',
		appearance:
			'The deepest heart of the glacier, where the runes no longer record voyages or oaths but a single name carved over and over: Ragnar. Within the pale blue core, the silhouette of a lone scout-ship trembles as if calling out, surrounded by the cold silence of abandonment. Cinematic intimate sorrowful blue lighting, melancholic high-fantasy aesthetic.',
		surface_identity:
			'영원한 의무에 묶인 빙하. 그러나 그 심장부엔 의무가 아닌 한 사람의 이름만이 새겨져 있다.',
		true_identity:
			'라그나르는 마지막 순간 스쿌드에게 홀로 남아 어둠을 지키라 명했다. 척후선은 족장을 따르지 못하고 홀로 설원에 남겨졌다. 영원한 의무 뒤에 숨은 진짜 상처는 버려진 외로움이었다.',
		motivation:
			'의무를 핑계 삼아 외로움을 외면해 왔다. 임무를 말하는 한, 자신이 버려졌다는 사실을 마주하지 않아도 되기 때문이다.',
		twist:
			'탐험대가 마지막 명령의 룬을 읽어내자, 빙하가 처음으로 의무가 아닌 슬픔으로 떤다. "나는 외로웠다. 어둠보다도, 홀로 남겨진 것이 더 두려웠다." 영원한 맹세는, 버려진 자가 자신을 지탱하려 붙든 마지막 핑계였다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '심장부의 룬이 임무가 아니라 "라그나르"라는 이름만 거듭 새긴다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그가 진정 붙들고 있던 것은 임무가 아니라 자신을 두고 떠난 한 사람이었다.'
		},
		{
			id: 'fs_02',
			hint: '룬의 한 줄에 "홀로 남아 어둠을 지키라"는 마지막 명령이 새겨져 있다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '족장은 그를 데려가지 않았다. 그 명령이 곧 버림의 시작이었다.'
		},
		{
			id: 'fs_03',
			hint: '심장부의 한기가 다른 어느 구역보다 깊고 시리다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '가장 깊은 한기는 가장 깊은 외로움이었다 — 수천 년을 홀로 견딘 자의 것.'
		},
		{
			id: 'fs_04',
			hint: '이름이 새겨진 자리마다 룬이 닳도록 거듭 덧새겨져 있다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '닳도록 덧새긴 이름은, 잊히지 않으려 — 또 잊지 않으려 — 부른 외침이었다.'
		}
	],

	npc_roles: {
		eira: {
			role: '비탄의 해독자',
			arc: '9편: 심장부의 룬을 해독해, 스쿌드 비탄의 근원이 의무가 아닌 버려진 외로움임을 밝힌다.'
		},
		ivar: {
			role: '명령을 되새기는 전사',
			arc: '9편: "홀로 남으라"는 족장의 명을 듣고, 충성과 버림이 종이 한 장 차이였음에 침묵한다.'
		},
		hild: {
			role: '외로움을 기리는 자',
			arc: '9편: 거듭 불린 이름 앞에서, 홀로 남겨진 자의 슬픔을 망자를 위로하듯 어루만진다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '라그나르라는 이름',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'탐험대가 빙하 심장부에 다다른다. 에이라가 룬이 항해도 맹세도 아닌 한 사람의 이름 — 라그나르만을 거듭 새기고 있음을 발견하고 해독을 시작한다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '홀로 남으라',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 마지막 명령의 룬을 읽는다. "홀로 남아 어둠을 지키라…" 족장은 그를 데려가지 않았다. 그 명령이 버림의 시작이었음이 드러난다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '종이 한 장 차이',
			boss: 'random_boss',
			npc: 'ivar',
			summary:
				'이바르가 그 명령 앞에 침묵한다. "충성과 버림이… 이렇게 종이 한 장 차이였나." 전사로서 따랐던 명령들을 처음으로 다시 본다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '닳도록 부른 이름',
			boss: 'random_boss',
			npc: 'hild',
			summary:
				'힐드가 닳도록 덧새겨진 이름을 어루만진다. 잊히지 않으려, 또 잊지 않으려 부른 외침임을 알고 홀로 남겨진 슬픔을 위로한다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '홀로 남겨진 것이 더 두려웠다',
			boss: 'pool_107',
			npc: 'hild',
			summary:
				'탐험대가 마지막 명령을 읽어내자 빙하가 처음으로 슬픔으로 떤다. "나는 외로웠다. 어둠보다도, 홀로 남겨진 것이 더 두려웠다." 영원한 맹세가 버려진 자의 마지막 핑계였음이 드러나며 전투가 이어진다.'
		}
	],

	act_summary: {
		intro: '심장부의 룬은 한 사람의 이름만 거듭 새긴다 — 라그나르. 에이라가 해독을 시작한다.',
		rising: '버림의 명령을 읽는 에이라, 충성과 버림을 되새기는 이바르, 외로움을 기리는 힐드. 의무 뒤엔 버려진 상처가 있었다.',
		climax_finale: '"홀로 남겨진 것이 더 두려웠다." 영원한 맹세는 버려진 자가 붙든 마지막 핑계였다.'
	}
};
