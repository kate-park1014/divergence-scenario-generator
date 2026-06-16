import type { StoryArc } from '$lib/types';

// SkalHorn 시리즈 6편 (level 55) — 동행단 막간: 노래를 의심하다
export const storyarc_snowy_skalhorn_55: StoryArc = {
	id: 'snowy_skalhorn_55',
	level: 55,
	chapter_name: {
		korean: '노래를 의심하다',
		english: 'Doubting the Song',
		japanese: '歌を疑う',
		chinese: '怀疑那首歌',
		french: 'Douter du Chant',
		spanish: 'Dudar de la Canción',
		vietnamese: 'Nghi Ngờ Bài Ca',
		thai: 'สงสัยในบทเพลง',
		hindi: 'गीत पर संदेह'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'뿔잔의 웅얼거리는 노래가 잠시 잦아든 골에서, 동행단이 귀를 막고 숨을 고른다. 전반부의 광기 어린 찬가가 멎고, 세 사람은 무엇이 신앙이고 무엇이 광기인지, 거룩함과 미혹의 경계에 대해 논쟁한다.',
		rule: '막간의 시간. 뿔잔의 진실은 잠시 미뤄지고, 동행단이 거룩함과 광기를 어떻게 분별하는지가 드러난다.',
		secret:
			'보리스는 모든 거룩함을 의심하고, 이바르는 신념이 광기가 되는 지점을 곱씹으며, 에이라는 의식의 기록을 더듬는다. 이 시간이 후반부, 광기의 축제에 홀리지 않을 셋의 마음을 단단히 한다.'
	},

	protagonist_goal: '노래가 잦아든 틈에, 동행단이 거룩함과 광기를 분별하는 기준을 나누게 하라.',

	act_tone: {
		intro: {
			mood: '멎은 찬가',
			tension: 1,
			narrative_role: '뿔잔의 노래가 잠시 잦아든 골에서 동행단이 귀를 막고 숨을 고른다.'
		},
		rising: {
			mood: '경계를 논하다',
			tension: 2,
			narrative_role:
				'세 사람이 무엇이 신앙이고 무엇이 광기인지 논쟁한다. 의심과 신념과 기록이 부딪친다.'
		},
		climax_finale: {
			mood: '막간의 끝',
			tension: 4,
			narrative_role:
				'노래가 다시 차오를 무렵, 뿔잔이 멀리서 한 소절을 흘려보낸다. 그 미혹을 분별해낸 셋은 후반부의 진실을 향해 발을 옮긴다.'
		}
	},

	final_boss: {
		id: 'MadFeast_SkalHorn_V1',
		name: 'SkalHorn',
		appearance:
			'A quiet hollow where the horn-vessel hymn has briefly faded, three companions covering their ears and catching their breath, faint blue murmurs still drifting at the edge of hearing. The mood is tense and reflective. Cinematic muted eerie blue lighting, character-focused high-fantasy aesthetic.',
		surface_identity:
			'잠시 잦아들었다 다시 차오르는 뿔잔의 노래. 막간의 고요 속에서도 그 미혹이 귀를 맴돈다.',
		true_identity:
			'아직 SkalHorn의 진실은 절반만 드러났다. 이 시간은 보스보다 동행단이 거룩함과 광기를 어떻게 분별하는지에 초점이 맞춰진다.',
		motivation:
			'노래는 잦아든 틈에도 귀를 떠나지 않는다. 그 미혹이 동행단에게 신앙과 광기의 경계를 곱씹게 만든다.',
		twist:
			'노래가 다시 차오를 무렵, 뿔잔이 멀리서 한 소절을 흘려보낸다. 황홀한 가락이었으나, 셋은 그 속에 섞인 비명을 분별해낸다. 의심과 신념과 기록을 품은 셋은 — 미혹에 홀리지 않은 채 — 후반부의 진실을 향해 발을 옮긴다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '보리스가 "거룩해 보일수록 더 의심하라"고 못 박는다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '보리스의 원칙은, 후반부 광기의 축제를 간파해낼 분별의 토대였다.'
		},
		{
			id: 'fs_02',
			hint: '이바르가 "신념이 어디서 광기가 되는가"를 자문하며 침묵한다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '이바르의 자문은, 후반부 광신의 끝을 마주할 전사의 준비였다.'
		},
		{
			id: 'fs_03',
			hint: '에이라가 의식의 가락을 악보처럼 적으며 섞인 불협을 짚는다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '짚어낸 불협은, 후반부 찬가에 섞인 비명을 알아챌 단서였다.'
		},
		{
			id: 'fs_04',
			hint: '귀를 막은 틈으로도 한 가락이 자꾸 머릿속을 맴돈다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '맴도는 가락은, 뿔잔의 미혹이 막간조차 놓아주지 않음을 알렸다.'
		}
	],

	npc_roles: {
		eira: {
			role: '가락의 기록자',
			arc: '6편(막간): 의식의 가락을 악보처럼 적으며 섞인 불협을 짚어, 분별의 단서를 마련한다.'
		},
		ivar: {
			role: '신념을 자문하는 전사',
			arc: '6편(막간): "신념이 어디서 광기가 되는가"를 자문하며, 광신의 끝을 마주할 마음을 다진다.'
		},
		boris: {
			role: '거룩함을 의심하는 자',
			arc: '6편(막간): "거룩해 보일수록 더 의심하라"는 원칙으로, 동료들이 미혹에 홀리지 않게 한다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '귀를 막고',
			boss: 'random_boss',
			npc: 'boris',
			summary:
				'뿔잔의 노래가 잠시 잦아든 골에서 동행단이 귀를 막고 숨을 고른다. 보리스가 "거룩해 보일수록 더 의심하라"고 못 박는다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '신념과 광기 사이',
			boss: 'random_boss',
			npc: 'ivar',
			summary:
				'이바르가 침묵 끝에 입을 연다. "신념이… 어디서부터 광기가 되는 걸까." 광신의 끝을 마주할 마음을 다진다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '섞인 불협',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 의식의 가락을 악보처럼 적으며 섞인 불협을 짚는다. "이 화음, 어딘가 틀어져 있어요. 찬가가 아니라… 비명이 섞여 있어." 분별의 단서를 마련한다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '홀리지 않으려면',
			boss: 'random_boss',
			npc: 'boris',
			summary:
				'보리스가 미혹에 홀리지 않는 법을 일러준다. "황홀할 땐 멈춰. 그게 함정의 신호야." 셋의 분별이 단단해진다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '흘러온 한 소절',
			boss: 'pool_110',
			npc: 'boris',
			summary:
				'노래가 다시 차오를 무렵 뿔잔이 멀리서 한 소절을 흘려보낸다. 황홀한 가락이었으나 셋은 그 속에 섞인 비명을 분별해낸다. 의심·신념·기록을 품은 셋이 미혹에 홀리지 않은 채 후반부의 진실을 향해 나아간다.'
		}
	],

	act_summary: {
		intro: '노래가 잦아든 골에서 동행단이 귀를 막는다. 보리스가 거룩함을 의심하라 못 박는다.',
		rising: '신념과 광기를 자문하는 이바르, 섞인 불협을 짚는 에이라, 홀리지 않는 법을 일러주는 보리스. 셋이 분별을 다진다.',
		climax_finale: '흘러온 한 소절 속의 비명을 분별해낸 셋이 후반부 진실로 나아간다.'
	}
};
