import type { StoryArc } from '$lib/types';

// Bellus 시리즈 4편 (level 38) — 심화: 멈춘 시간의 정체
export const storyarc_snowy_bellus_38: StoryArc = {
	id: 'snowy_bellus_38',
	level: 38,
	chapter_name: {
		korean: '거꾸로 흐르는 모래',
		english: 'The Sand That Flows Backward',
		japanese: '逆さに流れる砂',
		chinese: '倒流的沙',
		french: 'Le Sable qui Coule à Rebours',
		spanish: 'La Arena que Fluye al Revés',
		vietnamese: 'Cát Chảy Ngược Dòng',
		thai: 'ทรายที่ไหลย้อนกลับ',
		hindi: 'उल्टी बहती रेत'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'탐험대가 열차의 기관실에 다다른다. 거대한 황동 시계 장치가 천천히 거꾸로 돈다. 수십 개의 모래시계가 거꾸로 모래를 흘려보내고, 그 한가운데에서 벨루스의 시계 얼굴이 탐험대를 응시한다. 이곳이 멈춘 시간의 심장이다.',
		rule: '이 기관실에서 벨루스는 닿은 자의 시간을 되감아 한순간에 고정한다. 앞으로 흐르려는 시간은 모두 거꾸로 되돌려진다 — 노화도, 망각도, 죽음도 여기서는 일어나지 않는다.',
		secret:
			'벨루스가 멈춘 시간은 단순한 정지가 아니다. 그는 사람들이 늙고, 잊히고, 끝내 죽는 것을 막기 위해 그들의 시간을 되감는다. 그에게 흐르는 시간이란 곧 모든 것을 망가뜨리는 파괴 그 자체다.'
	},

	protagonist_goal: '열차의 기관실에서 벨루스가 시간을 어떻게, 그리고 왜 멈추는지 그 정체를 밝혀라.',

	act_tone: {
		intro: {
			mood: '거대한 정밀함',
			tension: 2,
			narrative_role: '황동 시계 장치가 천천히 거꾸로 돈다. 수십 개의 모래시계가 거꾸로 흐른다. 멈춘 시간의 심장이다.'
		},
		rising: {
			mood: '서늘한 깨달음',
			tension: 4,
			narrative_role:
				'되감기는 시간 속에서 시든 꽃이 다시 피고, 갈라진 얼음이 도로 붙는다. 벨루스가 막으려는 것은 다름 아닌 흐름 그 자체임이 드러난다.'
		},
		climax_finale: {
			mood: '신념의 한기',
			tension: 5,
			narrative_role:
				'벨루스의 시계 얼굴이 탐험대를 향해 돌아온다. "너희는 시간을 다시 흐르게 하려는구나. 그건… 파괴야." 그의 다정함 뒤에 흔들리지 않는 신념이 드러난다.'
		}
	},

	final_boss: {
		id: 'ChronosStitcher_V0',
		name: 'Bellus',
		appearance:
			'The engine room inside the obsidian-and-brass ghost train, dominated by an enormous brass clockwork mechanism turning slowly in reverse. Dozens of hourglasses pour their sand upward, backward. A pale clock-face hovers at the center, its hands running counterclockwise, surrounded by drifting silvery ice needles. Withered flowers bloom again in the reversed time. Beautiful and cold, cinematic frozen lighting, haunting high-fantasy aesthetic.',
		surface_identity:
			'멈춰버린 세상의 선로 위를 달리는 유령 열차. 그에게 닿은 자들은 영원히 얼어붙은 채 가장 아름다운 순간에 박제된다.',
		true_identity:
			'벨루스는 시간을 되감아 한순간에 고정하는 존재다. 그는 노화도, 망각도, 죽음도 막을 수 있다. 그가 왜 이토록 흐름을 두려워하는지 — 그 과거의 그림자가 기관실에서 처음으로 어렴풋이 비친다.',
		motivation:
			'사람들이 늙고, 병들고, 끝내 죽는 것을 막으려 한다. 그에게 흐르는 시간이란 모든 아름다움을 망가뜨리는 파괴이며, 그것을 멈추는 것이 유일한 구원이다.',
		twist:
			'벨루스의 시계 얼굴이 탐험대를 향해 돌아온다. "너희는 시간을 다시 흐르게 하려는구나. 그건… 파괴야." 그가 다정하지만 흔들림 없이 말한다. "흐르게 두면, 너희는 늙고 병들고 잊혀질 텐데. 나는 그저, 그 전에 너희를 지키려는 거야." 그의 신념이 곧 광기임이 서서히 드러난다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '수십 개의 모래시계가 모래를 위로, 거꾸로 흘려보낸다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '거꾸로 흐르는 모래는 벨루스가 시간 자체를 되감고 있음을 보여주는 핵심이었다.'
		},
		{
			id: 'fs_02',
			hint: '시든 꽃 한 송이가 되감기는 시간 속에서 다시 피어난다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '다시 피는 꽃은 그가 노화와 죽음마저 되돌릴 수 있다는 증거였다. 그래서 그는 흐름을 파괴라 여긴다.'
		},
		{
			id: 'fs_03',
			hint: '벨루스의 시계 얼굴이 탐험대의 움직임을 따라 천천히 돌아간다. 한순간도 놓치지 않는다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그의 시선은 탐험대를 다음 박제의 대상으로 점찍고 있었다 — 그들을 지키려는 일념으로.'
		},
		{
			id: 'fs_04',
			hint: '기관실 깊은 곳, 낡은 집찰 가위와 검표기 같은 물건이 먼지에 덮인 채 놓여 있다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '낡은 집찰 도구는 벨루스가 한때 시간을 배달하던 집찰관이었던 과거의 첫 흔적이었다.'
		}
	],

	npc_roles: {
		eira: {
			role: '되감김을 해독하는 자',
			arc: '4편: 거꾸로 도는 시계 장치와 낡은 집찰 도구에서 벨루스의 과거의 단서를 읽어내며, 멈춘 시간의 원리를 기록한다.'
		},
		glace: {
			role: '흐름을 받아들이는 자',
			arc: '4편: 다시 피어나는 꽃을 보며, 시드는 것 또한 시간의 일부임을 담담히 받아들이고 되감김의 부자연스러움을 짚는다.'
		},
		hild: {
			role: '죽음을 존중하는 자',
			arc: '4편: 죽음마저 막으려는 벨루스 앞에서, 끝을 지우는 것이 곧 삶을 지우는 것임을 의례자로서 일깨운다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '거꾸로 도는 심장',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'탐험대가 열차의 기관실에 다다른다. 거대한 황동 시계 장치가 거꾸로 돌고, 모래시계가 거꾸로 흐른다. 에이라가 멈춘 시간의 심장에서 그 원리를 읽어내기 시작한다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '다시 피는 꽃',
			boss: 'random_boss',
			npc: 'glace',
			summary:
				'글라스가 되감기는 시간 속에서 시든 꽃이 다시 피어나는 것을 본다. "시드는 게 잘못은 아닌데." 시드는 것 또한 시간의 일부임을 담담히 짚으며, 되감김의 부자연스러움을 응시한다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '끝을 지운다는 것',
			boss: 'random_boss',
			npc: 'hild',
			summary:
				'힐드가 죽음마저 막으려는 장치를 보고 입을 연다. "끝을 지우면, 살아온 것도 함께 지워져요." 의례자로서 끝을 존중하는 것이 곧 삶을 존중하는 것임을 일깨운다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '먼지 덮인 집찰 도구',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 기관실 깊은 곳에서 낡은 집찰 가위와 검표기를 발견하고 기록한다. 벨루스가 한때 시간을 배달하던 집찰관이었음을 알리는 첫 흔적이다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '그건 파괴야',
			boss: 'pool_035',
			npc: 'hild',
			summary:
				'벨루스의 시계 얼굴이 탐험대를 향해 돌아온다. "너희는 시간을 다시 흐르게 하려는구나. 그건 파괴야. 나는 그 전에 너희를 지키려는 거야." 그 신념이 곧 광기임을 깨달은 힐드가, 끝을 존중하는 자로서 기관실의 시계 망령들과 맞선다.'
		}
	],

	act_summary: {
		intro: '열차의 기관실, 멈춘 시간의 심장. 황동 시계 장치와 모래시계가 모두 거꾸로 돈다.',
		rising: '다시 피는 꽃을 보는 글라스, 끝을 존중하는 힐드, 집찰 도구를 발견한 에이라. 벨루스가 흐름을 파괴로 여기는 까닭이 비친다.',
		climax_finale: '"시간을 흐르게 하는 건 파괴"라는 벨루스. 그를 지키려는 일념이 곧 광기임이 드러난다.'
	}
};
