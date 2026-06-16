import type { StoryArc } from '$lib/types';

// Haraldr 시리즈 7편 (level 61) — 마법 폭풍의 잔향
export const storyarc_snowy_haraldr_61: StoryArc = {
	id: 'snowy_haraldr_61',
	level: 61,
	chapter_name: {
		korean: '마법 폭풍의 잔향',
		english: 'Echo of the Arcane Storm',
		japanese: '魔法嵐の残響',
		chinese: '魔法风暴的余响',
		french: 'L’Écho de la Tempête Arcanique',
		spanish: 'El Eco de la Tormenta Arcana',
		vietnamese: 'Dư Âm Của Cơn Bão Phép Thuật',
		thai: 'เสียงสะท้อนของพายุเวทมนตร์',
		hindi: 'जादुई तूफ़ान की गूँज'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'빙원 너머, 결코 멎지 않는 마법 폭풍의 한가운데. 수백 년 전 이 폭풍이 Haraldr를 가두었다. 폭풍 속에는 그가 죽던 순간의 기억이 잔향처럼 떠돈다.',
		rule: '폭풍 속에서는 과거와 현재가 뒤섞인다. 죽은 자의 마지막 순간이 끝없이 되풀이된다.',
		secret:
			'마법 폭풍은 자연 현상이 아니다. 그것은 Haraldr의 채워지지 않은 열망이 빚어낸, 스스로를 가둔 감옥이다.'
	},

	protagonist_goal: 'Haraldr를 가둔 마법 폭풍의 정체와 그가 죽던 순간의 진실을 마주하라.',

	act_tone: {
		intro: {
			mood: '멎지 않는 바람',
			tension: 1,
			narrative_role: '폭풍 속으로 들어선다. Haraldr의 목소리가 폭풍의 굉음에 잠겨 흐릿해진다.'
		},
		rising: {
			mood: '되풀이되는 최후',
			tension: 3,
			narrative_role:
				'폭풍 속에서 그가 죽던 순간이 잔향처럼 되풀이된다. 장사꾼의 소동 뒤에 가려졌던 마지막 싸움이 드러난다.'
		},
		climax_finale: {
			mood: '스스로 만든 감옥',
			tension: 5,
			narrative_role:
				'폭풍의 정체가 밝혀진다 — 그것은 Haraldr 자신이 빚어낸 감옥이었다. 진실을 마주한 그가 폭풍과 함께 폭주한다.'
		}
	},

	final_boss: {
		id: 'SnowViking_Haraldr_V1',
		name: 'Haraldr',
		appearance:
			'A clumsy snow-and-ice humanoid at the heart of an endless swirling arcane blizzard, ghostly echoes of its own dying moment flickering around it. The multicolor syrup veins pulse in rhythm with the storm. Its form wavers between merchant and frozen warrior. Cinematic violent snowstorm, haunting high-fantasy aesthetic.',
		surface_identity:
			'폭풍 속에서도 장사를 멈추지 않으려는 장사꾼. 그러나 그의 목소리는 폭풍에 잠겨 자꾸 흐려진다.',
		true_identity:
			'마법 폭풍은 그의 채워지지 않은 열망이 빚어낸 감옥이다. 그는 수백 년간 제 죽음의 순간에 갇혀 같은 최후를 되풀이해 왔다.',
		motivation:
			'폭풍을 "악천후 마케팅"이라 우기며 자신이 갇혔다는 사실을 부정한다. 인정하는 순간, 자신이 이미 죽었음을 받아들여야 하기 때문이다.',
		twist:
			'"이 폭풍은… 내가 부른 게 아니야!" Haraldr가 외치지만, 폭풍은 그의 열망에 맞춰 거세진다. 그가 죽던 순간의 잔향이 그를 휘감는다. "…내가, 나를 가둔 거였나." 진실을 마주한 그가 폭풍과 하나 되어 폭주하며, 시럽과 눈보라가 뒤엉켜 탐험대를 덮친다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '폭풍이 Haraldr가 격해질 때마다 함께 거세진다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '폭풍은 그의 감정에 반응했다. 그것이 그의 일부였기 때문이다.'
		},
		{
			id: 'fs_02',
			hint: '폭풍 속에 똑같은 장면이 자꾸 되풀이된다 — 한 전사가 무릎 꿇는 순간.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '되풀이되던 장면은 Haraldr가 얼어 죽던 마지막 순간이었다.'
		},
		{
			id: 'fs_03',
			hint: 'Haraldr가 폭풍을 "악천후 마케팅"이라 부르며 애써 웃는다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '농담은 부정이었다. 갇혔다는 사실을, 죽었다는 사실을 인정하지 않으려는.'
		},
		{
			id: 'fs_04',
			hint: '폭풍의 중심에 출구가 없다. 모든 길이 같은 자리로 돌아온다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '출구가 없는 이유 — 폭풍은 밖이 아니라 그의 안에 있었다.'
		}
	],

	npc_roles: {
		eira: {
			role: '폭풍의 해독자',
			arc: '7편: 폭풍이 밖이 아니라 그가 빚어낸 자기 감옥임을 해독한다.'
		},
		ivar: {
			role: '유혹받는 전사',
			arc: '7편: "영원한 싸움"의 유혹에 끌려 폭풍 속으로 들어설 뻔한다 — 강함의 끝에서 가장 크게 흔들린다.'
		},
		inka: {
			role: '동료를 붙잡는 자',
			arc: '7편: 폭풍에 홀린 이바르를 붙잡아 끌어낸다. "당신은 저 사람이 아니야!"'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '멎지 않는 폭풍 속으로',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'탐험대가 빙원 너머 마법 폭풍 속으로 들어선다. 에이라가 폭풍이 Haraldr의 감정에 맞춰 거세지는 것을 관찰하고 기록한다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '영원히 싸울 수 있는 곳',
			boss: 'random_boss',
			npc: 'ivar',
			summary:
				'이바르가 폭풍 속 "영원한 싸움"의 환영에 끌린다. "여기선… 끝없이 싸울 수 있다." 홀린 듯 발을 들인다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '당신은 저 사람이 아니야',
			boss: 'random_boss',
			npc: 'inka',
			summary:
				'인카가 홀린 이바르의 팔을 붙잡아 끌어낸다. "당신은 저 사람이 아니야!" 이바르가 가까스로 정신을 차린다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '출구 없는 중심',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 폭풍의 모든 길이 같은 자리로 돌아옴을 깨닫고 기록한다. 출구가 없다. 폭풍은 밖이 아니라 안에 있다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '내가 나를 가둔 거였나',
			boss: 'pool_106',
			npc: 'ivar',
			summary:
				'"이 폭풍은 내가 부른 게 아니야!" 외치지만 폭풍은 그의 열망에 맞춰 거세진다. "내가, 나를 가둔 거였나." 유혹을 이겨낸 이바르가, 같은 함정에 빠지지 않은 자로서 그와 맞선다.'
		}
	],

	act_summary: {
		intro: '결코 멎지 않는 마법 폭풍 속으로. 에이라가 폭풍이 그의 감정에 반응함을 기록한다.',
		rising: '유혹에 끌린 이바르, 그를 붙잡는 인카, 출구 없음을 깨닫는 에이라. 폭풍은 그의 안에 있었다.',
		climax_finale: '폭풍은 그가 빚어낸 감옥이었다. "내가 나를 가둔 거였나." 진실을 마주한 그가 폭주한다.'
	}
};
