import type { StoryArc } from '$lib/types';

// Anya 시리즈 1편 (level 4) — 첫 조우: 눈보라 속 작은 빛
export const storyarc_snowy_anya_4: StoryArc = {
	id: 'snowy_anya_4',
	level: 4,
	chapter_name: {
		korean: '눈보라 속 작은 빛',
		english: 'A Small Light in the Blizzard',
		japanese: '吹雪の中の小さな灯',
		chinese: '暴雪中的微光',
		french: 'Une Petite Lumière dans le Blizzard',
		spanish: 'Una Pequeña Luz en la Ventisca',
		vietnamese: 'Ánh Sáng Nhỏ Trong Bão Tuyết',
		thai: 'แสงเล็กๆ ในพายุหิมะ',
		hindi: 'बर्फ़ीले तूफ़ान में एक छोटी रोशनी'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'시야를 집어삼키는 혹독한 눈보라가 휘몰아치는 설원. 길을 잃은 탐험대 앞에 멀리서 작고 따뜻한 빛 하나가 깜박인다. 그 빛은 마치 위험을 피해 안전한 길로 인도하려는 듯, 일정한 거리를 두고 앞서 나아간다.',
		rule: '눈보라 속에서 길을 잃은 자는 그 작은 빛을 따라야 산다고 전해진다. 빛은 조난자를 벼랑과 크레바스에서 멀리 떼어 놓는다.',
		secret:
			'그 빛은 누군가가 켜 둔 등불이 아니다. 고요하고 온화한 기운이 깃든 빛 그 자체가 의지를 지닌 채 움직이며, 지친 탐험가에게 덧없는 위안과 희망을 건넨다.'
	},

	protagonist_goal: '눈보라 속에서 조난자를 인도한다는 작은 빛의 정체를 확인하라.',

	act_tone: {
		intro: {
			mood: '아득한 안도',
			tension: 1,
			narrative_role: '눈보라에 갇혀 길을 잃은 순간, 멀리서 작은 빛이 깜박인다. 따라오라는 듯 부드럽게 앞서 나아간다.'
		},
		rising: {
			mood: '온화한 신뢰와 미세한 의아함',
			tension: 3,
			narrative_role:
				'빛은 위험을 정확히 피해 안전한 길로 인도한다. 그러나 가까이 가려 하면 꼭 그만큼 멀어지고, 늘 같은 거리를 유지한다.'
		},
		climax_finale: {
			mood: '위안 속 첫 균열',
			tension: 5,
			narrative_role:
				'안전한 곳에 다다른 줄 알았으나, 빛이 멈춘 자리에서 처음으로 가느다란 한기와 애처로운 떨림이 스친다. 수호의 빛이라기엔 어딘가 너무 외롭다.'
		}
	},

	final_boss: {
		id: 'GlacialBeacon_Anya_V1',
		name: 'Anya',
		appearance:
			'A small warm glowing light floating low above the snow in a fierce swirling blizzard, soft and gentle radiance pushing back the darkness. The faint translucent silhouette of a tiny child can almost be sensed within the glow, never fully formed. It hovers ahead like a guardian leading lost travelers to safety. Cinematic cold blue snowy lighting with a single tender amber glow, melancholic high-fantasy aesthetic.',
		surface_identity:
			'눈보라 속에서 조난자를 위험에서 구해 안전한 길로 인도하는 작은 빛. 수호자처럼 느껴지는 고요하고 온화한 기운이 지친 탐험가에게 덧없는 위안과 희망을 준다.',
		true_identity:
			'아직은 그저 누군가를 지켜주려는 따뜻한 빛처럼 보인다. 그러나 늘 같은 거리를 두고 멀어지는 그 움직임에는, 무언가를 애타게 기다리는 듯한 외로움이 어렴풋이 배어 있다.',
		motivation:
			'길 잃은 이를 위험에서 떼어 놓고 따뜻한 곳으로 인도하려 한다. 그러나 그 인도에는 누군가를 향한, 아직 이름 붙이지 못한 그리움이 함께 흐른다.',
		twist:
			'안전한 능선에 다다른 줄 알았을 때, 빛이 문득 멈춘다. 따라오라는 듯 깜박이던 빛이 처음으로 머뭇거리고, 그 안에서 가느다란 한기와 애처로운 떨림이 새어 나온다. "…더 가까이는… 안 돼요…" 들릴 듯 말 듯한 속삭임이 눈보라에 흩어진다. 수호의 빛이라기엔, 그것은 너무도 외롭고 작았다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '작은 빛이 가까이 가려 하면 꼭 그만큼 멀어지며, 늘 같은 거리를 유지한다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '빛은 사람을 곁에 두려는 게 아니라, 따라오게 하려는 것이었다. 누군가를 어딘가로 데려가려는 듯이.'
		},
		{
			id: 'fs_02',
			hint: '빛이 지나간 자리마다 눈 위에 작은 서리꽃이 피어난다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '서리꽃은 빛이 지핀 작은 온기의 흔적, 누군가를 위해 남긴 표식이었다.'
		},
		{
			id: 'fs_03',
			hint: '빛의 온기가 닿을 듯하면, 그 안에서 가느다란 한기가 함께 새어 나온다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '온기와 한기가 뒤섞인 이유 — 그것은 혹한에 얼어붙은 채 온기를 흉내 내는 영혼이기 때문이다.'
		},
		{
			id: 'fs_04',
			hint: '빛이 멈출 때마다, 들릴 듯 말 듯한 작은 속삭임이 눈보라에 섞여 든다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그 속삭임은 누군가를 부르는 어린 목소리였다. 아직은 바람 소리에 가려 알아들을 수 없다.'
		}
	],

	npc_roles: {
		eira: {
			role: '첫 단서의 기록자',
			arc: '1편: 동행단의 안내자로서 빛의 움직임과 서리꽃을 침착히 관찰하고 첫 단서를 기록한다.'
		},
		inka: {
			role: '온기에 마음을 여는 자',
			arc: '1편: 작은 빛의 온화함에 가장 먼저 마음을 열고, 그 안에 깃든 외로움을 어렴풋이 느낀다.'
		},
		bran: {
			role: '길잡이',
			arc: '1편: 길 잃은 이를 집으로 돌려보내려는 길잡이로서, 빛이 인도하는 방향을 유심히 따라간다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '깜박이는 빛을 따라',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'탐험대가 시야를 삼키는 눈보라에 갇혀 길을 잃는다. 멀리서 작은 빛이 깜박이며 따라오라는 듯 앞서 나아간다. 에이라가 안내자로서 빛의 움직임을 조용히 기록하기 시작한다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '늘 같은 거리',
			boss: 'random_boss',
			npc: 'bran',
			summary:
				'브란이 빛을 따라 길을 잡는다. 빛은 벼랑과 크레바스를 정확히 피해 안전한 길로 인도하지만, 가까이 가려 하면 꼭 그만큼 멀어진다. "…우리를 곁에 두려는 게 아니야. 따라오게 하려는 거야."'
		},
		{
			order: 3,
			act: 'rising',
			title: '눈 위의 서리꽃',
			boss: 'random_boss',
			npc: 'inka',
			summary:
				'인카가 빛이 지나간 자리마다 피어난 작은 서리꽃을 발견한다. 그 온화함에 마음을 열면서도, 온기 속에 섞인 가느다란 한기에 가슴이 시려 온다. "…따뜻한데, 왜 이렇게 외롭지."'
		},
		{
			order: 4,
			act: 'rising',
			title: '바람에 섞인 속삭임',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 빛이 멈출 때마다 새어 나오는 작은 속삭임을 기록한다. 누군가를 부르는 듯한 어린 목소리지만, 아직은 눈보라 소리에 가려 알아들을 수 없다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '더 가까이는 안 돼요',
			boss: 'pool_109',
			npc: 'inka',
			summary:
				'안전한 능선에 다다른 줄 알았을 때 빛이 문득 멈춘다. 따라오라 깜박이던 빛이 머뭇거리고, 그 안에서 한기와 애처로운 떨림이 새어 나온다. "더 가까이는… 안 돼요…" 인카가 그 외로움을 가장 먼저 알아챈다. 수호의 빛이라기엔 너무 작고 외로운 무언가와의 첫 마주침이다.'
		}
	],

	act_summary: {
		intro: '눈보라에 갇혀 길을 잃은 탐험대 앞에 작은 빛이 깜박이며 길을 인도한다. 에이라가 첫 단서를 기록한다.',
		rising: '늘 같은 거리를 둔 빛을 따르는 브란, 서리꽃의 온기와 한기를 느끼는 인카, 속삭임을 기록하는 에이라. 수호의 빛치고는 너무 외롭다.',
		climax_finale: '빛이 멈춘 자리에서 처음으로 한기와 애처로운 떨림이 스친다. "더 가까이는 안 돼요." 인카가 그 외로움을 가장 먼저 알아챈다.'
	}
};
