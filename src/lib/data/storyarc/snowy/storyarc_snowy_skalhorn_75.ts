import type { StoryArc } from '$lib/types';

// SkalHorn 시리즈 8편 (level 75) — 얼어붙은 절규
export const storyarc_snowy_skalhorn_75: StoryArc = {
	id: 'snowy_skalhorn_75',
	level: 75,
	chapter_name: {
		korean: '얼어붙은 절규',
		english: 'The Frozen Screams',
		japanese: '凍りついた叫び',
		chinese: '冻结的尖叫',
		french: 'Les Cris Gelés',
		spanish: 'Los Gritos Congelados',
		vietnamese: 'Những Tiếng Thét Đóng Băng',
		thai: 'เสียงกรีดร้องที่แข็งตัว',
		hindi: 'जमी हुई चीखें'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'뿔잔의 표면에 박힌 수정들이 한결 또렷해진 구역. 그 수정 하나하나 속에 일그러진 얼굴이 갇혀 있다. 가까이 다가가면 낮고 불길한 웅얼거림이 — 멈추지 못한 절규처럼 — 새어 나온다.',
		rule: '뿔잔 표면의 수정을 들여다본 자는 그 안의 얼굴들이 누구인지 알게 된다. 그러나 그 웅얼거림을 오래 들으면, 축제의 노래처럼 이성을 좀먹는다.',
		secret:
			'뿔잔 속에는 주술사의 영혼만이 아니라, 그 계약으로 함께 얼어붙은 마을 사람들의 절규가 갇혀 있다. 그들의 비명이 정령의 권능과 뒤섞여, 끝없는 축제를 소망하는 광기의 노래가 되었다.'
	},

	protagonist_goal: '뿔잔 표면 수정 속에 갇힌 얼굴들이 누구인지, 그 웅얼거림의 정체를 밝혀라.',

	act_tone: {
		intro: {
			mood: '갇힌 얼굴들',
			tension: 1,
			narrative_role: '수정마다 일그러진 얼굴이 갇혀 있고, 낮은 웅얼거림이 새어 나온다.'
		},
		rising: {
			mood: '좀먹는 노래',
			tension: 3,
			narrative_role:
				'웅얼거림이 길어질수록, 그것이 마을 사람들의 멈추지 못한 절규였음이 드러난다. 절규는 광기의 찬가로 변질되어 있었다.'
		},
		climax_finale: {
			mood: '비명의 합창',
			tension: 5,
			narrative_role:
				'탐험대가 갇힌 절규의 정체를 알아내자, 수정들이 일제히 울린다. "…우리는 구원받지 못했다… 우리는 그저… 영원히 노래하게 되었을 뿐…"'
		}
	},

	final_boss: {
		id: 'MadFeast_SkalHorn_V1',
		name: 'SkalHorn',
		appearance:
			'The horn-vessel surface crowded with frozen crystals, each trapping a distorted screaming face, low ominous murmurs leaking out like a hymn. Pale blue light pulses through the crystals as the cries blur into a maddening festival song. Cinematic eerie crystalline blue lighting, unsettling high-fantasy aesthetic.',
		surface_identity:
			'표면 수정 속에서 웅얼거리는 뿔잔. 처음엔 의식의 찬가가 봉인된 신성한 그릇처럼 들린다.',
		true_identity:
			'뿔잔 속에는 주술사의 영혼만이 아니라 그 계약으로 함께 얼어붙은 마을 사람들의 절규가 갇혀 있다. 그들의 비명이 정령의 권능과 뒤섞여, 끝없는 축제를 소망하는 광기의 노래가 되었다.',
		motivation:
			'갇힌 절규를 찬가로 둔갑시켜, 듣는 이의 이성을 좀먹는다. 모두가 그 노래에 동참하면, 영원한 얼음 축제가 완성된다 믿는다.',
		twist:
			'탐험대가 갇힌 절규의 정체를 알아내자, 수정들이 일제히 울린다. "…우리는 구원받지 못했다… 우리는 그저… 영원히 노래하게 되었을 뿐…" 신성한 찬가가 아니라, 구원받지 못한 마을의 비명이 광기로 굳은 합창이었다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '수정 하나하나 속에 서로 다른 얼굴이 일그러진 채 갇혀 있다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '갇힌 얼굴들은 계약으로 함께 얼어붙은 마을 사람들이었다.'
		},
		{
			id: 'fs_02',
			hint: '웅얼거림이 찬가처럼 들리지만, 군데군데 비명이 섞여 있다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '찬가가 아니라 비명이었다 — 절규가 노래로 둔갑한 것이다.'
		},
		{
			id: 'fs_03',
			hint: '노래를 오래 들은 자가 까닭 없이 황홀한 표정으로 뿔잔에 이끌린다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '노래는 이성을 좀먹어 듣는 이를 축제에 동참시키려는 광기였다.'
		},
		{
			id: 'fs_04',
			hint: '수정 속 얼굴들이 모두 입을 벌린 채, 같은 가락을 노래하듯 멈춰 있다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '같은 가락은 강요된 합창이었다 — 비명을 영원한 노래로 박제한 것.'
		}
	],

	npc_roles: {
		eira: {
			role: '절규를 읽는 자',
			arc: '8편: 수정 속 얼굴들의 정체를 읽어, 그 웅얼거림이 마을 사람들의 갇힌 절규임을 밝힌다.'
		},
		ivar: {
			role: '노래에 맞서는 전사',
			arc: '8편: 이성을 좀먹는 축제의 노래에 홀리지 않으려 이를 악물고, 황홀에 이끌린 동료를 끌어낸다.'
		},
		boris: {
			role: '찬가를 분별하는 자',
			arc: '8편: 신성한 찬가처럼 들리는 소리에서 섞인 비명을 분별해, 그것이 노래가 아니라 절규임을 짚는다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '수정 속 얼굴',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'탐험대가 뿔잔 표면의 또렷해진 수정들을 마주한다. 에이라가 수정마다 일그러진 얼굴이 갇혀 있고 낮은 웅얼거림이 새어 나옴을 발견하고 읽기 시작한다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '찬가에 섞인 비명',
			boss: 'random_boss',
			npc: 'boris',
			summary:
				'보리스가 찬가처럼 들리는 웅얼거림에서 군데군데 섞인 비명을 분별한다. "이건 노래가 아니야. 비명이야. 누군가 이걸 찬가로 둔갑시킨 거라고."'
		},
		{
			order: 3,
			act: 'rising',
			title: '홀리는 가락',
			boss: 'random_boss',
			npc: 'ivar',
			summary:
				'이바르가 노래를 오래 들은 동료가 황홀한 표정으로 뿔잔에 이끌리는 것을 본다. 이를 악물고 그를 끌어낸다. "정신 차려! 저 노래에 홀리면 끝이야."'
		},
		{
			order: 4,
			act: 'rising',
			title: '같은 가락의 합창',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 수정 속 얼굴들이 모두 입을 벌린 채 같은 가락을 노래하듯 멈춰 있음을 본다. 강요된 합창이었다. "비명을… 영원한 노래로 박제해 버린 거야."'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '영원히 노래하게 되었을 뿐',
			boss: 'pool_110',
			npc: 'boris',
			summary:
				'탐험대가 갇힌 절규의 정체를 알아내자 수정들이 일제히 울린다. "우리는 구원받지 못했다… 우리는 그저… 영원히 노래하게 되었을 뿐…" 신성한 찬가가 마을의 비명이 광기로 굳은 합창임이 드러나고, 그 거짓을 분별해온 보리스와 함께 전투가 이어진다.'
		}
	],

	act_summary: {
		intro: '수정마다 일그러진 얼굴이 갇혀 웅얼거린다. 에이라가 그 정체를 읽기 시작한다.',
		rising: '섞인 비명을 분별하는 보리스, 홀린 동료를 끌어내는 이바르, 강요된 합창을 본 에이라. 찬가는 갇힌 절규였다.',
		climax_finale: '"우리는 영원히 노래하게 되었을 뿐." 신성한 찬가는 구원받지 못한 마을의 비명이었다.'
	}
};
