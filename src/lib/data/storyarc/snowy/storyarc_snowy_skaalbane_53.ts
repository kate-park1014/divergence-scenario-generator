import type { StoryArc } from '$lib/types';

// Skaalbane 시리즈 6편 (level 53) — 동행단 막간: 온기를 지키는 밤
export const storyarc_snowy_skaalbane_53: StoryArc = {
	id: 'snowy_skaalbane_53',
	level: 53,
	chapter_name: {
		korean: '온기를 지키는 밤',
		english: 'The Night of Guarding Warmth',
		japanese: '温もりを守る夜',
		chinese: '守护温暖之夜',
		french: 'La Nuit où l’On Garde la Chaleur',
		spanish: 'La Noche de Guardar el Calor',
		vietnamese: 'Đêm Gìn Giữ Hơi Ấm',
		thai: 'คืนแห่งการปกป้องไออุ่น',
		hindi: 'गर्माहट की रखवाली की रात'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'잔해탑의 한기가 가장 깊은 골에서, 동행단이 서로 등을 맞대고 온기를 나누며 밤을 난다. 전반부의 절규와 흡수의 단서가 잠시 멎고, 세 사람은 추위와 외로움, 그리고 서로를 지킨다는 것에 대해 이야기한다.',
		rule: '막간의 밤. 탑의 진실은 잠시 미뤄지고, 동행단이 서로의 온기를 어떻게 지키는지가 드러난다.',
		secret:
			'프로스트는 한기를 가장 두려워하면서도 가장 먼저 동료를 감싼다. 인카는 흡수된 자들의 외로움을 마음에 담는다. 에이라는 그 모든 것을 기록한다. 이 밤이 후반부, 합류를 거부하고 온기를 지킬 셋의 마음을 단단히 한다.'
	},

	protagonist_goal: '깊은 한기의 밤을 함께 나며, 동행단이 서로의 온기를 지키는 법을 다지게 하라.',

	act_tone: {
		intro: {
			mood: '맞댄 등',
			tension: 1,
			narrative_role: '동행단이 서로 등을 맞대고 온기를 나누며 탑의 가장 추운 골에서 밤을 난다.'
		},
		rising: {
			mood: '추위를 말하다',
			tension: 2,
			narrative_role:
				'세 사람이 추위와 외로움, 서로를 지킨다는 것에 대해 이야기한다. 두려움과 연민과 기록이 오간다.'
		},
		climax_finale: {
			mood: '막간의 끝',
			tension: 4,
			narrative_role:
				'밤이 깊을 무렵, 탑의 한기가 모닥불을 향해 슬그머니 손을 뻗는다. 온기를 지켜낸 셋은 후반부의 진실을 향해 발을 옮긴다.'
		}
	},

	final_boss: {
		id: 'EchoHarvester_Skaalbane_V1',
		name: 'Skaalbane',
		appearance:
			'Three companions huddled back to back sharing warmth in the coldest hollow of the wreck-tower, faint tendrils of frost creeping toward their small flame in the dark. The mood is intimate and protective against the immense cold. Cinematic tender cold blue lighting, character-focused high-fantasy aesthetic.',
		surface_identity:
			'가장 추운 골에서 슬그머니 온기를 향해 뻗어오는 탑의 한기. 막간의 어둠 속에서도 그 갈망이 어른거린다.',
		true_identity:
			'아직 Skaalbane의 진실은 절반만 드러났다. 이 밤은 보스보다 동행단이 서로의 온기를 지키는 법에 초점이 맞춰진다.',
		motivation:
			'탑의 한기는 밤에도 온기를 더듬는다. 그 손길이 동행단에게 온기를 지킨다는 것의 무게를 곱씹게 만든다.',
		twist:
			'밤이 깊을 무렵, 탑의 한기가 모닥불을 향해 슬그머니 손을 뻗는다. 프로스트가 먼저 불을 감싸고, 인카가 동료들을 끌어모은다. 온기를 지켜낸 셋은 — 두려움과 연민과 기록을 품고 — 후반부의 진실을 향해 발을 옮긴다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '프로스트가 가장 추워하면서도 제 외투를 벗어 동료에게 덮어준다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '제 추위를 무릅쓴 그 손길은, 후반부 온기를 지킬 방벽이 될 프로스트의 본성이었다.'
		},
		{
			id: 'fs_02',
			hint: '인카가 흡수된 얼굴들 이야기를 하며 잠들지 못한다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '잠 못 드는 연민은, 후반부 합류의 유혹에 맞설 인카의 마음이었다.'
		},
		{
			id: 'fs_03',
			hint: '에이라가 탑이 응답하던 이름을 작게 되뇌며 적는다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '되뇐 이름은, 후반부 진실을 매듭지을 에이라의 단서였다.'
		},
		{
			id: 'fs_04',
			hint: '모닥불 곁의 얼음에 한기가 만든 가느다란 금이 자꾸 생긴다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '되살아나는 금은, 탑이 온기를 노리며 밤새 곁을 맴돌았음을 알렸다.'
		}
	],

	npc_roles: {
		eira: {
			role: '밤의 기록자',
			arc: '6편(막간): 탑이 응답하던 이름을 되뇌며, 진실을 끝내 남기려는 자신의 신념을 다진다.'
		},
		inka: {
			role: '잠 못 드는 연민',
			arc: '6편(막간): 흡수된 얼굴들의 외로움에 잠들지 못하며, 그들을 어떻게 대해야 할지 동료들과 나눈다.'
		},
		frost: {
			role: '온기를 감싸는 자',
			arc: '6편(막간): 가장 추워하면서도 제 외투로 동료를 덮어주며, 온기를 지킨다는 것의 의미를 보여준다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '등을 맞대고',
			boss: 'random_boss',
			npc: 'frost',
			summary:
				'동행단이 잔해탑의 가장 추운 골에서 서로 등을 맞대고 온기를 나눈다. 프로스트가 가장 추워하면서도 제 외투를 벗어 동료에게 덮어준다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '잠들지 못하는 밤',
			boss: 'random_boss',
			npc: 'inka',
			summary:
				'인카가 흡수된 얼굴들 이야기를 하며 잠들지 못한다. "그 사람들… 아직도 외로울까요. 우리가 들어준 걸까요." 연민이 깊어진다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '되뇌는 이름',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 탑이 응답하던 이름을 작게 되뇌며 적는다. "이름을 알면… 끝을 낼 수 있을지도 몰라요." 진실을 남기려는 신념을 다진다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '온기를 지킨다는 것',
			boss: 'random_boss',
			npc: 'frost',
			summary:
				'프로스트가 온기를 지킨다는 것의 의미를 말한다. "추울수록… 불은 꺼뜨리면 안 돼. 그게 우리가 저것한테 안 먹히는 길이야." 셋의 마음이 단단해진다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '뻗어오는 한기',
			boss: 'pool_108',
			npc: 'frost',
			summary:
				'밤이 깊을 무렵 탑의 한기가 모닥불을 향해 슬그머니 손을 뻗는다. 프로스트가 먼저 불을 감싸고 인카가 동료들을 끌어모은다. 온기를 지켜낸 셋이 두려움·연민·기록을 품고 후반부의 진실을 향해 나아간다.'
		}
	],

	act_summary: {
		intro: '동행단이 가장 추운 골에서 등을 맞대고 온기를 나눈다. 프로스트가 제 외투를 덮어준다.',
		rising: '잠 못 드는 인카, 이름을 되뇌는 에이라, 온기를 지키는 법을 말하는 프로스트. 셋이 서로를 다진다.',
		climax_finale: '모닥불을 향해 뻗어오는 한기. 온기를 지켜낸 셋이 후반부 진실로 나아간다.'
	}
};
