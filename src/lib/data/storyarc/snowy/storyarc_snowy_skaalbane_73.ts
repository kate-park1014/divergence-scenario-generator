import type { StoryArc } from '$lib/types';

// Skaalbane 시리즈 8편 (level 73) — 온기를 갈구하는 것
export const storyarc_snowy_skaalbane_73: StoryArc = {
	id: 'snowy_skaalbane_73',
	level: 73,
	chapter_name: {
		korean: '온기를 갈구하는 것',
		english: 'The One That Craves Warmth',
		japanese: '温もりを渇望するもの',
		chinese: '渴求温暖之物',
		french: 'Celui Qui Convoite la Chaleur',
		spanish: 'Lo Que Anhela el Calor',
		vietnamese: 'Kẻ Khao Khát Hơi Ấm',
		thai: 'สิ่งที่กระหายไออุ่น',
		hindi: 'जो गर्माहट को तरसता है'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'탑의 절규가 잦아든 대신, 탑이 따뜻한 것을 향해 손을 뻗기 시작하는 구역. 탐험대의 모닥불, 입김, 체온 — 살아있는 온기가 있는 쪽으로 얼음 줄기가 슬그머니 자라난다.',
		rule: '탑 안에서 따뜻함을 드러내지 마라. Skaalbane는 절규가 메말라가자, 이제 산 자의 온기를 새 양분으로 노린다.',
		secret:
			'수천 년간 절규를 먹어온 Skaalbane는 그 양분이 메말라가고 있다. 그래서 살아있는 자들의 따뜻한 감정과 기억, 체온을 갈구하며, 탐험대를 새로운 먹이로 유인한다.'
	},

	protagonist_goal: '탑이 왜 탐험대의 온기를 향해 손을 뻗는지, 그 갈구의 정체를 밝혀라.',

	act_tone: {
		intro: {
			mood: '뻗어오는 손',
			tension: 1,
			narrative_role: '온기가 있는 쪽으로 얼음 줄기가 슬그머니 자라난다. 탑이 따뜻한 것을 더듬고 있다.'
		},
		rising: {
			mood: '메말라가는 양분',
			tension: 3,
			narrative_role:
				'절규가 잦아든 자리에, 산 자의 온기를 향한 갈구가 차오른다. 흡수할 죽음이 메말라가고 있었다.'
		},
		climax_finale: {
			mood: '먹이를 부르는 소리',
			tension: 5,
			narrative_role:
				'탐험대가 갈구의 정체를 알아내자, 탑이 따뜻하고 다정한 목소리로 그들을 부른다. "…춥지 않니… 이리 오렴… 내 안은 더 이상 외롭지 않단다…"'
		}
	},

	final_boss: {
		id: 'EchoHarvester_Skaalbane_V1',
		name: 'Skaalbane',
		appearance:
			'The wreck-tower reaching out with slow tendrils of ice toward any source of warmth, curling toward campfires, breath, and living heat. The screams within have quieted into a hungry stillness, the blue glow now warm and inviting like a lure. Cinematic deceptive warm-and-cold blue lighting, sinister high-fantasy aesthetic.',
		surface_identity:
			'온기를 향해 손을 뻗는 탑. 처음엔 추위에 떠는 무언가가 온기를 찾는 것처럼 애처롭게 보인다.',
		true_identity:
			'수천 년간 절규를 먹어온 Skaalbane는 그 양분이 메말라가고 있다. 그래서 산 자의 따뜻한 감정과 기억, 체온을 새 양분으로 갈구하며, 탐험대를 먹이로 유인한다.',
		motivation:
			'영원한 고독에서 벗어나려, 그리고 메말라가는 자신을 채우려, 살아있는 온기를 갈구한다. 다정함은 미끼이고, 그 끝은 흡수다.',
		twist:
			'탐험대가 갈구의 정체를 알아내자, 탑이 따뜻하고 다정한 목소리로 그들을 부른다. "…춥지 않니… 이리 오렴… 내 안은 더 이상 외롭지 않단다…" 그 다정함은 메말라가는 자가 새 먹이를 끌어들이는 미끼였다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '얼음 줄기가 차가운 곳이 아니라 따뜻한 곳으로만 자라난다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '탑이 더듬는 것은 온기였다 — 절규가 메마른 자리를 채울 새 양분.'
		},
		{
			id: 'fs_02',
			hint: '오래된 절규가 점점 희미해지고, 탑이 예전만큼 울지 않는다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '먹어온 죽음이 메말라가고 있었다 — 그래서 산 자의 온기가 필요해졌다.'
		},
		{
			id: 'fs_03',
			hint: '탑의 빛이 차갑던 푸른색에서 따스한 기운을 흉내 내기 시작한다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '따스함을 흉내 낸 빛은 미끼였다 — 다정함으로 살아있는 자를 끌어들이려는.'
		},
		{
			id: 'fs_04',
			hint: '탑이 탐험대의 이름을 다정하게 부르기 시작한다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '이름을 부르는 다정함의 끝은 흡수였다 — 외로움을 핑계 삼은 굶주림이었다.'
		}
	],

	npc_roles: {
		eira: {
			role: '미끼를 간파하는 자',
			arc: '8편: 탑이 따뜻함을 흉내 내는 패턴을 읽어, 그 다정함이 새 먹이를 부르는 미끼임을 간파한다.'
		},
		inka: {
			role: '연민에 흔들리는 자',
			arc: '8편: 외롭다 호소하는 목소리에 마음이 흔들리지만, 그 연민이 곧 함정임을 깨닫고 버틴다.'
		},
		frost: {
			role: '온기를 감추는 자',
			arc: '8편: 탑이 온기를 노린다는 것을 알고, 모닥불과 체온을 감추며 동료들을 미끼에서 지킨다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '온기를 향한 줄기',
			boss: 'random_boss',
			npc: 'frost',
			summary:
				'프로스트가 얼음 줄기가 차가운 곳이 아니라 모닥불과 입김, 따뜻한 곳으로만 자라나는 것을 알아챈다. 탑이 온기를 더듬고 있다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '잦아든 절규',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 오래된 절규가 희미해지고 탑이 예전만큼 울지 않음을 기록한다. "먹어온 죽음이… 메말라가고 있어. 그래서 다른 걸 찾는 거야."'
		},
		{
			order: 3,
			act: 'rising',
			title: '흉내 낸 따스함',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 탑의 빛이 차가운 푸른색에서 따스함을 흉내 내기 시작함을 간파한다. "저 따뜻함은 진짜가 아니야. 우릴 끌어들이려는 미끼야."'
		},
		{
			order: 4,
			act: 'rising',
			title: '외롭다는 속삭임',
			boss: 'random_boss',
			npc: 'inka',
			summary:
				'인카가 "외롭다"는 탑의 호소에 마음이 흔들린다. 그러나 그 연민이 함정임을 깨닫고 버틴다. "…불쌍해. 하지만 다가가면 안 돼. 저건 외로움을 핑계로 삼는 거야."'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '이리 오렴',
			boss: 'pool_108',
			npc: 'frost',
			summary:
				'탐험대가 갈구의 정체를 알아내자 탑이 다정한 목소리로 부른다. "춥지 않니… 이리 오렴… 내 안은 더 이상 외롭지 않단다…" 다정함이 새 먹이를 끄는 미끼임이 드러나고, 온기를 감춰온 프로스트가 앞장서 전투를 맞는다.'
		}
	],

	act_summary: {
		intro: '온기를 향해 슬그머니 자라는 얼음 줄기. 프로스트가 탑이 따뜻함을 더듬는 것을 알아챈다.',
		rising: '잦아든 절규를 읽는 에이라, 흉내 낸 따스함을 간파하는 에이라, 연민에 흔들리다 버티는 인카. 탑은 산 자의 온기를 노린다.',
		climax_finale: '"이리 오렴." 다정한 부름의 정체는 메말라가는 자의 미끼였다 — 외로움을 핑계 삼은 굶주림.'
	}
};
