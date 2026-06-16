import type { StoryArc } from '$lib/types';

// Bellus 시리즈 8편 (level 78) — 진실 회수: 미래를 본 광기
export const storyarc_snowy_bellus_78: StoryArc = {
	id: 'snowy_bellus_78',
	level: 78,
	chapter_name: {
		korean: '파괴되는 미래를 본 눈',
		english: 'The Eye That Saw the Ruined Future',
		japanese: '滅びゆく未来を見た目',
		chinese: '看见毁灭未来的眼',
		french: 'L Œil qui a Vu le Futur Détruit',
		spanish: 'El Ojo que Vio el Futuro Destruido',
		vietnamese: 'Đôi Mắt Đã Thấy Tương Lai Đổ Nát',
		thai: 'ดวงตาที่เห็นอนาคตอันพินาศ',
		hindi: 'जिसने उजड़ा भविष्य देखा'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'열차 가장 깊은 곳, 거꾸로 도는 거대한 시계 얼굴 뒤편의 환영실. 벨루스가 오래전 보았던 미래의 환영이 벽면에 어른거린다 — 모든 것이 파괴되고, 사랑하던 이들이 늙고 병들어 스러지는 종말의 광경. 이 환영이 그의 광기의 진짜 뿌리다.',
		rule: '환영실의 벽은 벨루스가 본 미래를 비춘다. 그것을 마주한 자는 그가 왜 시간을 멈추려 하는지, 그 광기의 논리를 이해하게 된다 — 동의하지 못한 채로.',
		secret:
			'벨루스는 과거에 모든 것이 파괴되는 미래를 보았다. 사람들이 늙고, 잊히고, 끝내 스러지는 종말. 그는 세상을 구하는 유일한 방법이 가장 아름다운 지금 이 순간을 얼려 영구히 보존하는 것이라 믿게 된 광기 어린 수집가가 되었다.'
	},

	protagonist_goal: '환영실에서 벨루스가 본 미래를 마주하고, 그를 광기로 몰아넣은 진실의 핵심을 밝혀라.',

	act_tone: {
		intro: {
			mood: '어른거리는 종말',
			tension: 3,
			narrative_role: '거꾸로 도는 시계 얼굴 뒤편, 환영실의 벽에 종말의 광경이 어른거린다.'
		},
		rising: {
			mood: '광기의 논리',
			tension: 4,
			narrative_role:
				'환영 속에서 사랑하던 이들이 늙고 병들어 스러진다. 벨루스가 왜 시간을 멈추려는지, 그 뒤틀린 논리가 서서히 이해된다 — 동의할 수는 없어도.'
		},
		climax_finale: {
			mood: '구원이라는 이름의 광기',
			tension: 5,
			narrative_role:
				'벨루스의 시계 얼굴이 환영실 한가운데서 빛난다. "이제 알겠지? 흐르게 두면 전부 저렇게 돼. 나는 너희를 그 종말에서 구하려는 거야." 그의 광기가 절정에 이른다.'
		}
	},

	final_boss: {
		id: 'ChronosStitcher_V0',
		name: 'Bellus',
		appearance:
			'A vision chamber behind the giant backward-turning clock-face deep within the obsidian-and-brass ghost train. The walls shimmer with visions of a ruined future, of loved ones aging and withering into ruin. Silvery ice needles hover, ready to stitch these visions away. A pale clock-face blazes at the center, frantic and sorrowful. Beautiful and apocalyptic, cinematic frozen lighting, haunting high-fantasy aesthetic.',
		surface_identity:
			'멈춰버린 세상의 선로 위를 달리는 유령 열차. 그에게 닿은 자들은 영원히 얼어붙은 채 가장 아름다운 순간에 박제된다.',
		true_identity:
			'벨루스는 과거에 시간을 배달하던 집찰관이었으나, 모든 것이 파괴되는 미래를 보았다. 그 종말의 환영이 그를 무너뜨렸고, 세상을 구하는 유일한 길은 가장 아름다운 순간을 얼려 보존하는 것이라 믿게 된 광기 어린 수집가가 되었다.',
		motivation:
			'그가 본 종말로부터 사랑하는 모든 것을 지키려 한다. 흐르는 시간이 끝내 모든 것을 파괴할 것이기에, 가장 찬란한 지금을 얼려 영원히 보존하는 것만이 구원이라 믿는다.',
		twist:
			'벨루스의 시계 얼굴이 환영실 한가운데서 빛난다. 벽면엔 사랑하던 이들이 늙고 스러지는 종말이 어른거린다. "이제 알겠지? 흐르게 두면 전부 저렇게 돼. 늙고, 병들고, 잊혀지고, 끝내 사라져. 나는 너희를 그 종말에서 구하려는 거야 — 가장 아름다운 지금에 영원히 멈춰서." 구원을 자처하는 그의 광기가 절정에 이른다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '환영실 벽에 모든 것이 파괴되는 미래의 광경이 어른거린다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그 종말의 환영이 바로 벨루스가 본 미래였다. 그의 모든 광기는 여기서 비롯됐다.'
		},
		{
			id: 'fs_02',
			hint: '환영 속에서 한 사람이 늙어 가다 끝내 먼지처럼 흩어진다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '흩어지는 사람의 환영은, 벨루스가 노화와 죽음을 견디지 못하는 까닭을 보여주었다.'
		},
		{
			id: 'fs_03',
			hint: '벨루스가 환영을 보지 않으려는 듯, 시계 얼굴의 바늘을 자꾸 거꾸로 되감는다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '되감는 손길은, 그가 종말을 막기 위해 시간 자체를 거스르려 한다는 처절한 몸부림이었다.'
		},
		{
			id: 'fs_04',
			hint: '벨루스가 "가장 아름다운 지금만 남기면 된다"고 거듭 되뇐다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그 되뇜은 그의 광기의 핵심 신념 — 순간을 얼려 보존하는 것만이 구원이라는 믿음이었다.'
		}
	],

	npc_roles: {
		eira: {
			role: '환영을 해독하는 자',
			arc: '8편: 벽면의 종말 환영을 읽어내며, 벨루스가 본 미래가 무엇이었는지, 그것이 어떻게 그를 광기로 몰았는지 기록한다.'
		},
		glace: {
			role: '종말을 직시하는 자',
			arc: '8편: 흩어지는 사람의 환영을 피하지 않고 응시하며, 끝이 있기에 지금이 빛난다는 진실을 담담히 마주한다.'
		},
		hild: {
			role: '두려움을 위로하는 자',
			arc: '8편: 종말을 두려워하는 벨루스의 처절한 몸부림 앞에서, 끝을 두려워하지 않고 기리는 자의 위로를 건넨다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '벽에 어른거리는 종말',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'탐험대가 거꾸로 도는 시계 얼굴 뒤편의 환영실에 이른다. 벽면에 모든 것이 파괴되는 미래가 어른거린다. 에이라가 그 환영이 벨루스가 본 미래임을 읽어내고 기록을 시작한다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '흩어지는 사람',
			boss: 'random_boss',
			npc: 'glace',
			summary:
				'환영 속에서 한 사람이 늙어 가다 먼지처럼 흩어진다. 글라스가 피하지 않고 응시한다. "끝이 있어서 지금이 빛나는 건데. 그는 그 빛을 끝과 함께 얼리려는 거야." 종말을 담담히 직시한다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '거꾸로 되감는 손',
			boss: 'random_boss',
			npc: 'hild',
			summary:
				'벨루스가 환영을 보지 않으려는 듯 시계 바늘을 거듭 거꾸로 되감는다. 힐드가 그 처절한 몸부림 앞에 선다. "두려운 거군요. 하지만 끝을 기리는 건, 끝을 지우는 것과 달라요." 위로를 건넨다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '가장 아름다운 지금',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'벨루스가 "가장 아름다운 지금만 남기면 된다"고 거듭 되뇐다. 에이라가 그것이 그의 광기의 핵심 신념임을 읽어내고, 종말의 환영이 그를 수집가로 만든 과정을 기록한다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '너희를 구하려는 거야',
			boss: 'pool_035',
			npc: 'hild',
			summary:
				'벨루스의 시계 얼굴이 환영실 한가운데서 빛난다. "흐르게 두면 전부 저렇게 돼. 나는 너희를 그 종말에서 구하려는 거야." 구원을 자처하는 광기 앞에, 끝을 두려워하지 않는 힐드가 동료들과 함께 환영의 망령들과 맞선다.'
		}
	],

	act_summary: {
		intro: '거꾸로 도는 시계 얼굴 뒤편의 환영실. 벽면에 종말의 광경이 어른거린다. 에이라가 그 미래를 추적한다.',
		rising: '흩어지는 사람을 직시하는 글라스, 두려움을 위로하는 힐드, 광기의 신념을 읽는 에이라. 종말의 환영이 그를 수집가로 만들었음이 드러난다.',
		climax_finale: '"너희를 종말에서 구하려는 거야"라는 벨루스. 구원을 자처하는 그의 광기가 절정에 이른다.'
	}
};
