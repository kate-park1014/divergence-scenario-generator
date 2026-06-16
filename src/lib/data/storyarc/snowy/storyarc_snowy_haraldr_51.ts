import type { StoryArc } from '$lib/types';

// Haraldr 시리즈 6편 (level 51) — 동행단 막간: 눈보라 속 모닥불
export const storyarc_snowy_haraldr_51: StoryArc = {
	id: 'snowy_haraldr_51',
	level: 51,
	chapter_name: {
		korean: '눈보라 속 모닥불',
		english: 'A Campfire in the Blizzard',
		japanese: '吹雪の中の焚き火',
		chinese: '风雪中的篝火',
		french: 'Un Feu de Camp dans la Tempête',
		spanish: 'Una Fogata en la Tormenta',
		vietnamese: 'Đống Lửa Giữa Bão Tuyết',
		thai: 'กองไฟกลางพายุหิมะ',
		hindi: 'बर्फ़ीले तूफ़ान में अलाव'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'장사꾼을 쫓던 추격이 거센 눈보라에 막혀, 동행단이 작은 얼음 동굴에 모닥불을 피우고 숨을 고른다. 전반부의 소동이 잠시 멎고, 세 사람은 처음으로 서로에게 묻는다 — 우리는 왜 이 어설픈 존재를 끝까지 쫓고 있는가.',
		rule: '막간의 밤. 보스의 진실은 잠시 미뤄지고, 동행단 각자의 마음이 모닥불 앞에 드러난다.',
		secret:
			'세 사람의 동기는 제각각이다. 이바르는 그에게서 제 미래를 보고, 인카는 그를 한 사람으로 여기며, 에이라는 그를 기록으로 남기려 한다. 이 밤의 대화가 후반부 진실을 마주할 셋의 마음을 단단히 한다.'
	},

	protagonist_goal: '눈보라가 멎기를 기다리며, 동행단이 서로의 동기를 나누고 마음을 다잡게 하라.',

	act_tone: {
		intro: {
			mood: '잦아드는 소동',
			tension: 1,
			narrative_role: '추격이 눈보라에 막힌다. 동행단이 얼음 동굴에 모닥불을 피우고 숨을 고른다.'
		},
		rising: {
			mood: '드러나는 속내',
			tension: 2,
			narrative_role:
				'모닥불 앞에서 셋은 처음으로 서로에게 묻는다. 왜 이 어설픈 존재를 끝까지 쫓는가. 제각각의 답이 오간다.'
		},
		climax_finale: {
			mood: '막간의 끝',
			tension: 4,
			narrative_role:
				'눈보라가 잦아드는 순간, Haraldr가 동굴 입구까지 따라와 모닥불 곁에서조차 눈 결정을 들이민다. 막간이 끝나고 추격이 다시 시작된다.'
		}
	},

	final_boss: {
		id: 'SnowViking_Haraldr_V1',
		name: 'Haraldr',
		appearance:
			'A clumsy snow-and-ice merchant figure peering into a small ice cave where three companions huddle around a campfire, still holding out a glistening snow-crystal trophy even here. Crude runes and faint multicolor syrup veins glimmer in the firelight. Cinematic warm-and-cold contrast snowy lighting, quiet character-focused high-fantasy aesthetic.',
		surface_identity:
			'모닥불 곁까지 따라온 끈질긴 장사꾼. 막간의 평온 속에서도 눈 결정을 팔려 든다.',
		true_identity:
			'아직 그의 정체는 절반만 드러났다. 이 밤은 보스보다 동행단의 마음에 초점이 맞춰진다 — 셋이 그를 어떻게 보는가가 후반부 진실의 무게를 정한다.',
		motivation:
			'쉴 틈조차 영업의 기회로 여긴다. 그러나 그 집요함이 도리어 동행단에게 그가 어떤 존재인지 곱씹게 만든다.',
		twist:
			'눈보라가 잦아들 무렵, Haraldr가 동굴 입구로 고개를 들이민다. "…따뜻해 보이는군. 눈 결정 하나, 어떤가?" 모닥불 곁의 사적인 순간조차 비집고 드는 그를 보며, 셋은 각자의 답을 가슴에 품고 다시 추격에 나선다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '이바르가 모닥불을 응시하며 "끝없이 갈구하는 자의 끝이 궁금하다"고 중얼거린다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '이바르의 물음은 후반부, 그가 Haraldr에게서 제 미래를 마주할 복선이었다.'
		},
		{
			id: 'fs_02',
			hint: '인카가 여분의 눈 결정 하나를 버리지 못하고 품에 넣어둔다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '버리지 못한 눈 결정은, 인카가 끝내 그를 한 존재로 받아들일 마음의 씨앗이었다.'
		},
		{
			id: 'fs_03',
			hint: '에이라가 그날까지의 단서를 모닥불 빛에 비추어 빠짐없이 기록한다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '꼼꼼한 기록은 후반부 룬과 이름을 해독할 에이라의 토대가 된다.'
		},
		{
			id: 'fs_04',
			hint: '모닥불 너머 눈보라 속에서 "삐-빅" 뿔피리 소리가 멀어졌다 가까워진다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '맴도는 뿔피리 소리는 그가 막간조차 떠나지 못하고 곁을 맴돌고 있음을 알렸다.'
		}
	],

	npc_roles: {
		eira: {
			role: '밤의 기록자',
			arc: '6편(막간): 그날까지의 단서를 정리하며, 자신이 왜 이 존재를 끝까지 기록하려는지 동료들에게 털어놓는다.'
		},
		ivar: {
			role: '불 앞의 전사',
			arc: '6편(막간): "끝없이 갈구하는 자의 끝"을 궁금해하며, 제 안의 같은 욕망을 처음으로 입에 올린다.'
		},
		inka: {
			role: '온기를 나누는 자',
			arc: '6편(막간): 모닥불을 나누며, 그 어설픈 존재조차 한 사람으로 보는 자신의 마음을 조용히 드러낸다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '얼음 동굴의 불',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'추격이 거센 눈보라에 막힌다. 동행단이 작은 얼음 동굴에 모닥불을 피우고 숨을 고른다. 에이라가 그날까지의 단서를 불빛에 비추어 정리하기 시작한다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '갈구하는 자의 끝',
			boss: 'random_boss',
			npc: 'ivar',
			summary:
				'이바르가 모닥불을 응시하며 입을 연다. "끝없이 갈구하는 자의 끝이… 궁금하다." 제 안에도 그런 욕망이 있음을 처음으로 인정한다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '버리지 못한 결정',
			boss: 'random_boss',
			npc: 'inka',
			summary:
				'인카가 여분의 눈 결정 하나를 버리지 못하고 품에 넣는다. "…이상하죠. 그 사람, 자꾸 한 사람처럼 보여요." 그를 향한 연민을 조용히 드러낸다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '왜 기록하는가',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 자신이 왜 이 존재를 끝까지 기록하려는지 털어놓는다. "잊히면… 아무것도 아니게 되니까. 적어도 누군가는 기억해야죠." 셋의 마음이 모닥불 앞에서 단단해진다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '눈 결정 하나, 어떤가',
			boss: 'pool_106',
			npc: 'inka',
			summary:
				'눈보라가 잦아들 무렵 Haraldr가 동굴 입구로 고개를 들이민다. "…따뜻해 보이는군. 눈 결정 하나, 어떤가?" 사적인 막간조차 비집고 드는 그를 보며, 인카가 품은 결정을 만지작거리고 셋은 각자의 답을 안고 다시 추격에 나선다.'
		}
	],

	act_summary: {
		intro: '추격이 눈보라에 막히고, 동행단이 얼음 동굴에 모닥불을 피운다. 에이라가 단서를 정리한다.',
		rising: '갈구의 끝을 묻는 이바르, 결정을 버리지 못하는 인카, 기록의 이유를 털어놓는 에이라. 셋의 마음이 드러난다.',
		climax_finale: '막간조차 비집고 드는 Haraldr. 셋은 각자의 답을 안고, 후반부 진실을 향해 다시 나아간다.'
	}
};
