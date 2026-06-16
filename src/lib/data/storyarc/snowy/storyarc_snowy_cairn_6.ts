import type { StoryArc } from '$lib/types';

// Cairn 시리즈 1편 (level 6) — 첫 조우: 황야의 돌무덤
export const storyarc_snowy_cairn_6: StoryArc = {
	id: 'snowy_cairn_6',
	level: 6,
	chapter_name: {
		korean: '황야의 돌무덤',
		english: 'The Cairn in the Wastes',
		japanese: '荒野の石塚',
		chinese: '荒野中的石冢',
		french: 'Le Cairn des Landes',
		spanish: 'El Túmulo del Páramo',
		vietnamese: 'Mộ Đá Giữa Hoang Nguyên',
		thai: 'กองหินกลางแดนร้าง',
		hindi: 'वीराने का पत्थर-स्तूप'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'눈 덮인 황야 한가운데, 길도 발자국도 없는 백색의 공허. 그 중심에 오래된 돌무덤 하나가 홀로 솟아 있다. 생명체의 기척은 없고, 차가운 바람만 돌 틈을 맴돌며 으스스한 침묵을 지킨다.',
		rule: '이 황야를 지나려는 자는 반드시 돌무덤 곁을 거쳐야 한다. 옛 탐험가들은 길을 잃지 않으려 이런 돌무덤을 표식으로 쌓았다 전해진다.',
		secret:
			'그것은 단순한 표식도, 무덤도 아니다. 돌 하나하나에는 누군가 새긴 듯한 희미한 룬이 깃들어 있고, 가까이 다가서면 바람 소리에 섞여 무언가를 가늠하는 듯한 침묵의 무게가 느껴진다.'
	},

	protagonist_goal: '눈 덮인 황야 한가운데 홀로 선 오래된 돌무덤의 정체를 확인하라.',

	act_tone: {
		intro: {
			mood: '적막한 의아함',
			tension: 1,
			narrative_role: '생명체 없는 백색의 황야. 홀로 선 돌무덤이 길의 표식인지, 누군가의 무덤인지 가늠하기 어렵다.'
		},
		rising: {
			mood: '으스스한 호기심',
			tension: 3,
			narrative_role:
				'돌 틈을 맴도는 바람, 희미한 룬, 가까이 갈수록 짙어지는 침묵의 무게. 단순한 돌무덤이라 하기엔 어딘가 살아 있는 듯하다.'
		},
		climax_finale: {
			mood: '정적 속 첫 균열',
			tension: 5,
			narrative_role:
				'탐험대가 돌무덤 앞에서 길을 약속하듯 다음 행로를 정하자, 돌 사이로 섬뜩한 푸른빛이 한순간 번뜩였다 사라진다. 침묵이 한층 무거워진다.'
		}
	},

	final_boss: {
		id: 'FrozenVow_Cairn_V1',
		name: 'Cairn',
		appearance:
			'An ancient stone cairn standing alone in a vast snow-covered wasteland, weathered grey rocks stacked taller than a man, faint runes barely visible on each stone. Cold wind drifts snow around its base under a pale empty sky. No living creature in sight, only eerie silence. Cinematic desolate snowy lighting, ominous high-fantasy aesthetic.',
		surface_identity:
			'눈 덮인 황야 한가운데 홀로 선 오래된 돌무덤. 길을 잃지 않으려 옛 바이킹 탐험가들이 쌓은 표식, 혹은 그들이 잠든 무덤처럼 보인다.',
		true_identity:
			'아직은 그저 오래된 돌무덤처럼 보인다. 그러나 돌에 깃든 희미한 룬과 가까이 다가설 때의 무거운 침묵은, 이것이 단순한 돌더미가 아님을 어렴풋이 암시한다.',
		motivation:
			'아직 드러나지 않는다. 다만 곁을 지나는 자들을 말없이 지켜보는 듯한 기척이, 무언가를 가늠하고 있다.',
		twist:
			'탐험대가 돌무덤 앞에서 앞으로의 행로를 서로 약속하듯 정하는 순간, 돌 사이로 섬뜩한 푸른빛이 한순간 번뜩였다 사라진다. 차가운 바람이 한층 거세지고, 침묵은 도리어 무거워진다. 무언가가 그들의 말을 듣고 있었다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '돌무덤의 돌 하나하나에 희미한 룬이 새겨져 있다. 마치 누군가의 말을 받아 적은 듯하다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그 룬들은 이곳에서 맺어졌다 깨어진 옛 맹세의 기록이었다.'
		},
		{
			id: 'fs_02',
			hint: '돌무덤에 가까이 다가설수록 바람이 잦아들고, 무언가 가늠하는 듯한 침묵의 무게가 짙어진다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그 침묵은 곁을 지나는 자들의 말과 신의를 저울질하는 시선이었다.'
		},
		{
			id: 'fs_03',
			hint: '주변 어디에도 생명체의 흔적이 없다. 짐승의 발자국조차 돌무덤을 멀찍이 피해 나 있다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '짐승들은 본능적으로 이곳을 피했다. 무언가 살아 있는 것이 여기 깃들어 있음을 알았기에.'
		},
		{
			id: 'fs_04',
			hint: '돌 틈 깊은 곳에서, 햇빛이라 하기엔 너무 차가운 푸른빛이 이따금 어른거린다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그 푸른빛은 돌무덤 중심에 깃든 의식이 깨어나려는 첫 징조였다.'
		}
	],

	npc_roles: {
		eira: {
			role: '첫 단서의 기록자',
			arc: '1편: 동행단의 안내자로서 돌에 새겨진 희미한 룬을 침착히 관찰하고 첫 단서를 기록한다.'
		},
		ivar: {
			role: '대담한 탐색자',
			arc: '1편: 으스스한 침묵에 아랑곳없이 돌무덤에 성큼 다가가 표식의 정체를 시험하듯 살핀다.'
		},
		anuk: {
			role: '무게를 읽는 자',
			arc: '1편: 돌무덤이 풍기는 가늠하는 듯한 침묵의 무게를 가장 먼저 알아채고 경계한다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '백색의 공허 속 표식',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'탐험대가 길도 발자국도 없는 눈 덮인 황야에 들어선다. 그 중심에 홀로 선 돌무덤을 발견하고, 안내자 에이라가 돌에 새겨진 희미한 룬을 조용히 기록한다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '다가가 본 자',
			boss: 'random_boss',
			npc: 'ivar',
			summary:
				'이바르가 으스스한 침묵에 아랑곳없이 돌무덤에 성큼 다가간다. "표식이든 무덤이든, 두려워할 게 뭐야." 그러나 돌 곁에 서자 그조차 잠시 말을 잃는다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '가늠하는 침묵',
			boss: 'random_boss',
			npc: 'anuk',
			summary:
				'아누크가 돌무덤이 풍기는 침묵의 무게를 알아챈다. "…이건 그냥 돌이 아니야. 무언가가 우리를 가늠하고 있어." 짐승의 발자국조차 이곳을 멀찍이 피해 있음을 짚는다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '돌 틈의 푸른빛',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 돌 틈 깊은 곳에서 햇빛이라 하기엔 너무 차가운 푸른빛이 어른거리는 것을 기록한다. 무언가 단순한 돌무덤이 아니다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '듣고 있던 것',
			boss: 'pool_111',
			npc: 'anuk',
			summary:
				'탐험대가 돌무덤 앞에서 앞으로의 행로를 서로 약속하듯 정한다. 그 순간 돌 사이로 섬뜩한 푸른빛이 번뜩였다 사라지고 바람이 거세진다. 침묵의 무게를 읽던 아누크가 깨닫는다 — 무언가가 그들의 말을 듣고 있었다.'
		}
	],

	act_summary: {
		intro: '눈 덮인 황야 한가운데 홀로 선 오래된 돌무덤. 동행단(에이라·이바르·아누크)이 그 정체를 가늠하며 마주한다.',
		rising: '대담히 다가간 이바르, 가늠하는 침묵을 읽는 아누크, 룬과 푸른빛을 기록하는 에이라. 단순한 돌무덤이라기엔 어딘가 살아 있는 듯하다.',
		climax_finale: '행로를 약속하듯 정하는 순간 돌 틈에서 푸른빛이 번뜩인다. 무언가가 그들의 말을 듣고 있었다.'
	}
};
