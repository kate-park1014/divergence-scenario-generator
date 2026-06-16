import type { StoryArc } from '$lib/types';

// Bellus 시리즈 7편 (level 68) — 진실 회수: 시간을 배달하던 집찰관
export const storyarc_snowy_bellus_68: StoryArc = {
	id: 'snowy_bellus_68',
	level: 68,
	chapter_name: {
		korean: '시간을 배달하던 자',
		english: 'The One Who Delivered Time',
		japanese: '時間を届けていた者',
		chinese: '曾递送时间的人',
		french: 'Celui qui Livrait le Temps',
		spanish: 'El que Repartía el Tiempo',
		vietnamese: 'Kẻ Từng Giao Thời Gian',
		thai: 'ผู้ที่เคยส่งมอบเวลา',
		hindi: 'जो समय पहुँचाता था'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'열차 깊숙한 곳, 먼지 덮인 집찰실이 나타난다. 낡은 검표기, 빛바랜 운행 일지, 누군가에게 시간을 배달하던 황동 회중시계들이 가득하다. 벨루스의 잊힌 과거가 이곳에서 처음으로 온전히 모습을 드러낸다 — 그는 한때 세상에 시간을 배달하던 집찰관이었다.',
		rule: '집찰실의 유물들은 만지는 자에게 벨루스의 과거를 보여준다. 그가 어떻게 사람들에게 시간을 나누어 주었는지, 그리고 그 일을 얼마나 사랑했는지.',
		secret:
			'벨루스는 본래 시간을 배달하던 다정한 집찰관이었다. 그는 사람들의 시계에 시간을 채워 주며, 그들이 살아가는 모습을 사랑했다. 지금의 박제 집착은 그 사랑이 뒤틀린 형태였다 — 한때 시간을 나눠 주던 손이, 이제 시간을 가두는 손이 되었다.'
	},

	protagonist_goal: '집찰실의 유물에서 벨루스의 잊힌 과거를 읽어내고, 그가 한때 어떤 존재였는지 밝혀라.',

	act_tone: {
		intro: {
			mood: '먼지 쌓인 그리움',
			tension: 2,
			narrative_role: '먼지 덮인 집찰실이 드러난다. 시간을 배달하던 자의 흔적이 빛바랜 채 가득하다.'
		},
		rising: {
			mood: '드러나는 다정한 과거',
			tension: 4,
			narrative_role:
				'유물을 만질 때마다 벨루스의 과거가 비친다. 사람들에게 시간을 나눠 주며 웃던 집찰관. 지금의 그와는 너무도 다른, 그러나 같은 손이다.'
		},
		climax_finale: {
			mood: '뒤틀린 사랑의 첫 그림자',
			tension: 5,
			narrative_role:
				'운행 일지의 마지막 장에서, 벨루스가 무언가 끔찍한 것을 본 듯한 흔적이 드러난다. 그의 목소리가 집찰실에 울린다. "…나는 그저, 그들을 사랑했을 뿐이야."'
		}
	},

	final_boss: {
		id: 'ChronosStitcher_V0',
		name: 'Bellus',
		appearance:
			'A dusty conductor office deep inside the obsidian-and-brass ghost train, filled with old ticket punches, faded operation logs, and rows of brass pocket watches that once delivered time to people. Faint memory-light flickers from the relics, showing a gentler past. A pale clock-face watches sorrowfully from the wall. Beautiful and melancholic, cinematic frozen lighting, haunting high-fantasy aesthetic.',
		surface_identity:
			'멈춰버린 세상의 선로 위를 달리는 유령 열차. 그에게 닿은 자들은 영원히 얼어붙은 채 가장 아름다운 순간에 박제된다.',
		true_identity:
			'벨루스는 한때 세상에 시간을 배달하던 다정한 집찰관이었다. 그는 사람들의 시계에 시간을 채워 주며 그들이 살아가는 모습을 사랑했다. 지금의 박제 집착은 그 사랑이 뒤틀린 형태임이 드러난다.',
		motivation:
			'한때 시간을 나눠 주던 그는, 이제 시간을 가두려 한다. 무언가가 그의 사랑을 뒤틀어 놓았다. 그 무언가의 정체가 다음 편에서 드러날 것이다.',
		twist:
			'운행 일지의 마지막 장에서, 벨루스가 무언가 끔찍한 것을 본 듯한 떨리는 필적이 드러난다. 그의 목소리가 집찰실에 울린다. "나는 그저… 그들을 사랑했을 뿐이야. 시간을 나눠 주는 게 내 일이었고, 나는 그 일을 사랑했어." 한때 다정했던 손이 어떻게 가두는 손이 되었는지, 그 비극의 윤곽이 처음으로 드러난다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '집찰실에 황동 회중시계 수십 개가 걸려 있다. 모두 한때 누군가에게 배달될 시간을 품고 있던 것이다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '회중시계들은 벨루스가 사람들에게 시간을 나눠 주던 다정한 집찰관이었음을 증명했다.'
		},
		{
			id: 'fs_02',
			hint: '빛바랜 사진 한 장에, 사람들 사이에서 환히 웃는 집찰관의 모습이 담겨 있다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그 웃는 집찰관이 곧 벨루스였다. 그는 한때 사람들과 함께 시간을 흘려보내며 행복했다.'
		},
		{
			id: 'fs_03',
			hint: '운행 일지의 페이지들이 어느 날을 기점으로 필적이 거칠게 흐트러진다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '흐트러진 필적은 벨루스가 무언가를 목격하고 무너지기 시작한 날의 흔적이었다.'
		},
		{
			id: 'fs_04',
			hint: '일지의 마지막 장에 "더 이상 흐르게 둘 수 없다"는 글귀가 찢기듯 적혀 있다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그 글귀는 시간을 나눠 주던 손이 시간을 가두는 손으로 뒤틀린 결정적 전환점이었다.'
		}
	],

	npc_roles: {
		eira: {
			role: '과거를 해독하는 자',
			arc: '7편: 집찰실의 운행 일지와 회중시계를 읽어내며, 벨루스가 한때 시간을 배달하던 다정한 집찰관이었음을 밝혀 기록한다.'
		},
		glace: {
			role: '다정함의 잔재를 보는 자',
			arc: '7편: 웃던 집찰관의 사진을 응시하며, 지금의 박제 집착 아래 여전히 흐르던 사랑의 잔재를 담담히 짚는다.'
		},
		hild: {
			role: '잊힌 이름을 부르는 자',
			arc: '7편: 빛바랜 유물들 앞에서, 한때 사람들과 함께였던 집찰관 벨루스의 이름을 망자처럼 조용히 부른다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '먼지 덮인 집찰실',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'열차 깊숙한 곳에서 먼지 덮인 집찰실이 드러난다. 낡은 검표기와 황동 회중시계들이 가득하다. 에이라가 유물들을 읽어내며 벨루스의 잊힌 과거를 추적하기 시작한다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '웃는 집찰관',
			boss: 'random_boss',
			npc: 'glace',
			summary:
				'글라스가 빛바랜 사진 속, 사람들 사이에서 환히 웃는 집찰관을 응시한다. "지금의 그와 같은 얼굴이야. 그땐 시간을 흘려보내며 웃었구나." 다정함의 잔재를 담담히 짚는다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '흐트러진 필적',
			boss: 'random_boss',
			npc: 'hild',
			summary:
				'힐드가 어느 날을 기점으로 거칠게 흐트러지는 운행 일지의 필적을 본다. "이날 무언가가 그를 무너뜨렸군요." 잊힌 집찰관 벨루스의 이름을 망자처럼 조용히 부른다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '시간을 채우던 손',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 회중시계들을 읽어내며, 벨루스가 사람들의 시계에 시간을 채워 주던 다정한 집찰관이었음을 밝혀 기록한다. 지금의 박제 집착이 그 사랑의 뒤틀린 형태임을 적는다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '그저 사랑했을 뿐',
			boss: 'pool_035',
			npc: 'hild',
			summary:
				'운행 일지의 마지막 장에서 "더 이상 흐르게 둘 수 없다"는 찢긴 글귀가 드러난다. 벨루스의 목소리가 울린다. "나는 그저, 그들을 사랑했을 뿐이야." 다정한 손이 가두는 손으로 뒤틀린 비극을 마주한 힐드가, 집찰실의 회중시계 망령들과 맞선다.'
		}
	],

	act_summary: {
		intro: '먼지 덮인 집찰실. 시간을 배달하던 자의 빛바랜 흔적이 가득하다. 에이라가 과거를 추적한다.',
		rising: '웃는 집찰관을 보는 글라스, 흐트러진 필적을 읽는 힐드, 다정한 과거를 밝히는 에이라. 박제 집착이 뒤틀린 사랑임이 드러난다.',
		climax_finale: '"그저 사랑했을 뿐"이라는 벨루스. 시간을 나눠 주던 손이 가두는 손으로 변한 비극의 윤곽이 드러난다.'
	}
};
