import type { StoryArc } from '$lib/types';

// Anya 시리즈 8편 (level 74) — 떠나간 가족
export const storyarc_snowy_anya_74: StoryArc = {
	id: 'snowy_anya_74',
	level: 74,
	chapter_name: {
		korean: '떠나간 가족',
		english: 'The Family That Left',
		japanese: '去っていった家族',
		chinese: '离去的家人',
		french: 'La Famille Partie',
		spanish: 'La Familia Que Se Fue',
		vietnamese: 'Gia Đình Đã Rời Đi',
		thai: 'ครอบครัวที่จากไป',
		hindi: 'वह परिवार जो चला गया'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'맴도는 자리 근처, 눈 속에 파묻힌 옛 정착지의 흔적이 드러난 구역. 무너진 오두막과 버려진 살림살이가 얼어붙어 있다. 한 오두막 문은 안에서 잠긴 채, 바깥으로 향한 작은 손자국이 얼어 있다.',
		rule: '정착지의 흔적을 읽으면 안야에게 무슨 일이 있었는지 알게 된다. 그러나 그 진실은 기다림보다 더 시리다.',
		secret:
			'안야의 가족은 혹독한 눈보라가 닥치자 아이를 두고 먼저 떠났거나, 혹은 아이가 그들을 놓쳤다. 안야는 자신이 버려졌다는 것을 받아들이지 못한 채, 가족이 길을 잃었을 뿐이라 믿으며 기다린다.'
	},

	protagonist_goal: '눈 속에 파묻힌 정착지의 흔적을 읽어, 안야와 가족 사이에 무슨 일이 있었는지 밝혀라.',

	act_tone: {
		intro: {
			mood: '파묻힌 집',
			tension: 1,
			narrative_role: '눈 속에 무너진 오두막과 버려진 살림살이가 얼어붙어 있다. 한 정착지가 통째로 사라졌다.'
		},
		rising: {
			mood: '시린 진실',
			tension: 3,
			narrative_role:
				'흔적이 그날을 되살린다 — 눈보라가 닥치고, 가족이 떠나고, 작은 아이만 남겨졌다.'
		},
		climax_finale: {
			mood: '믿고 싶은 거짓',
			tension: 5,
			narrative_role:
				'탐험대가 그날의 진실에 다가서자, 작은 빛이 황급히 흔든다. "…아니에요. 두고 간 게 아니에요. 그냥 길을 잃은 거예요. 분명히…"'
		}
	},

	final_boss: {
		id: 'GlacialBeacon_Anya_V1',
		name: 'Anya',
		appearance:
			'A buried old settlement revealed beneath the snow, collapsed huts and abandoned belongings frozen in place. One hut door is barred from the inside, a small handprint frozen on it reaching toward the outside. The faint blue child-light hovers nearby, refusing to look at it. Cinematic desolate sorrowful blue lighting, tragic high-fantasy aesthetic.',
		surface_identity:
			'가족을 기다리는 작은 빛. 그러나 파묻힌 정착지의 흔적은 그 기다림이 어떻게 시작되었는지를 증언한다.',
		true_identity:
			'안야의 가족은 혹독한 눈보라가 닥치자 아이를 두고 떠났거나 아이가 그들을 놓쳤다. 안야는 자신이 버려졌다는 사실을 받아들이지 못한 채, 가족이 그저 길을 잃었을 뿐이라 믿으며 기다린다.',
		motivation:
			'버려졌다는 진실을 마주하지 않으려 한다. 가족이 길을 잃었을 뿐이라 믿어야만, 기다림에 의미가 남기 때문이다.',
		twist:
			'탐험대가 그날의 진실에 다가서자, 작은 빛이 황급히 흔든다. "…아니에요. 두고 간 게 아니에요. 그냥 길을 잃은 거예요. 분명히…" 기다림은 희망이 아니라, 버려졌다는 사실을 받아들이지 않으려는 안간힘이었다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '오두막 문이 안에서 잠겨 있고, 바깥으로 뻗은 작은 손자국이 얼어 있다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '안에서 잠긴 문과 바깥을 향한 손자국 — 아이는 홀로 남겨진 채 가족을 부르고 있었다.'
		},
		{
			id: 'fs_02',
			hint: '버려진 살림살이가 황급히 떠난 듯 어지럽게 흩어져 있다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '서둘러 떠난 흔적이었다 — 눈보라를 피해 가족이 먼저 떠난 그날의.'
		},
		{
			id: 'fs_03',
			hint: '안야의 빛이 그 오두막만은 한사코 비추지 않으려 한다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '비추지 않으려는 곳이 바로 그가 버려진 자리였다 — 마주하기 두려운 진실.'
		},
		{
			id: 'fs_04',
			hint: '정착지 어디에도 작은 아이를 위한 발자국이 바깥으로 난 흔적은 없다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '아이는 떠나지 못했다 — 떠난 것은 가족이었고, 남겨진 것은 안야였다.'
		}
	],

	npc_roles: {
		eira: {
			role: '정착지를 읽는 자',
			arc: '8편: 파묻힌 정착지의 흔적을 읽어, 안야가 가족에게 홀로 남겨진 아이였음을 밝힌다.'
		},
		inka: {
			role: '거짓을 헤아리는 자',
			arc: '8편: "길을 잃었을 뿐"이라는 안야의 말이 버려짐을 외면하려는 안간힘임을 헤아리고, 차마 진실을 들이밀지 못한다.'
		},
		bran: {
			role: '남겨진 길을 보는 자',
			arc: '8편: 길잡이로서, 바깥으로 난 아이의 발자국이 없음을 확인한다 — 떠난 것은 가족이었다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '파묻힌 정착지',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'탐험대가 눈 속에 파묻힌 옛 정착지의 흔적을 발견한다. 에이라가 무너진 오두막과 안에서 잠긴 문, 바깥으로 뻗은 작은 손자국을 읽기 시작한다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '서둘러 떠난 자리',
			boss: 'random_boss',
			npc: 'bran',
			summary:
				'브란이 어지럽게 흩어진 살림살이에서 황급히 떠난 흔적을 읽는다. 눈보라를 피해 누군가 서둘러 떠났다. "여길… 급하게 버리고 갔어."'
		},
		{
			order: 3,
			act: 'rising',
			title: '비추지 않는 곳',
			boss: 'random_boss',
			npc: 'inka',
			summary:
				'인카가 안야의 빛이 그 오두막만은 한사코 비추지 않으려 함을 본다. 비추지 않으려는 곳이 마주하기 두려운 진실임을 헤아린다. "…저기를 못 보는 거야. 보고 싶지 않은 거야."'
		},
		{
			order: 4,
			act: 'rising',
			title: '남겨진 아이',
			boss: 'random_boss',
			npc: 'bran',
			summary:
				'브란이 정착지 어디에도 아이의 발자국이 바깥으로 난 흔적이 없음을 확인한다. 떠난 것은 가족이었고, 남겨진 것은 안야였다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '그냥 길을 잃은 거예요',
			boss: 'pool_109',
			npc: 'inka',
			summary:
				'탐험대가 그날의 진실에 다가서자 작은 빛이 황급히 흔든다. "아니에요. 두고 간 게 아니에요. 그냥 길을 잃은 거예요. 분명히…" 기다림이 버려짐을 외면하려는 안간힘이었음이 드러나고, 차마 진실을 들이밀지 못한 인카와 함께 전투가 이어진다.'
		}
	],

	act_summary: {
		intro: '눈 속에 파묻힌 정착지. 안에서 잠긴 문과 바깥을 향한 작은 손자국을 에이라가 읽는다.',
		rising: '서둘러 떠난 자리를 읽는 브란, 비추지 않는 곳을 헤아리는 인카, 남겨진 아이를 확인하는 브란. 떠난 것은 가족이었다.',
		climax_finale: '"그냥 길을 잃은 거예요." 기다림은 버려졌다는 사실을 받아들이지 않으려는 안간힘이었다.'
	}
};
