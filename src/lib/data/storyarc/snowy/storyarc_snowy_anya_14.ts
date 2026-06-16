import type { StoryArc } from '$lib/types';

// Anya 시리즈 2편 (level 14) — 서리꽃이 가리키는 길
export const storyarc_snowy_anya_14: StoryArc = {
	id: 'snowy_anya_14',
	level: 14,
	chapter_name: {
		korean: '서리꽃이 가리키는 길',
		english: 'The Path the Frost Flowers Point To',
		japanese: '霜の花が示す道',
		chinese: '霜花指引的路',
		french: 'Le Chemin que Montrent les Fleurs de Givre',
		spanish: 'El Camino que Señalan las Flores de Escarcha',
		vietnamese: 'Con Đường Hoa Băng Chỉ Lối',
		thai: 'เส้นทางที่ดอกน้ำค้างแข็งชี้นำ',
		hindi: 'पाला-पुष्प जिस राह की ओर इशारा करते हैं'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'어제의 능선을 넘어 더 깊은 설원으로 들어선다. 빛은 여전히 앞서 인도하고, 그 자취를 따라 눈밭 곳곳에 작은 서리꽃이 줄지어 피어 있다. 마치 누군가가 길을 표시해 둔 듯하다.',
		rule: '서리꽃이 피어난 길만이 눈보라를 무사히 지날 수 있는 안전한 길이다. 빛은 그 길에서 결코 벗어나지 않는다.',
		secret:
			'서리꽃은 빛이 지핀 작은 온기의 표식이다. 누군가 돌아올 길을 잃지 않도록, 같은 자리에 몇 번이고 다시 피워 둔 흔적이다.'
	},

	protagonist_goal: '빛을 따라 줄지어 피어난 서리꽃 길의 의미를 밝혀라.',

	act_tone: {
		intro: {
			mood: '고요한 인도',
			tension: 1,
			narrative_role: '서리꽃이 줄지어 피어난 안전한 길. 빛이 그 위를 따라 부드럽게 앞서 나아간다.'
		},
		rising: {
			mood: '되풀이되는 흔적의 의아함',
			tension: 3,
			narrative_role:
				'같은 자리에 몇 번이고 다시 피어난 서리꽃, 눈에 덮였다 또 돋아난 자국. 빛은 늘 같은 길을 되풀이해 오가는 듯하다.'
		},
		climax_finale: {
			mood: '인도 너머의 기다림',
			tension: 5,
			narrative_role:
				'서리꽃 길이 한 지점에서 끊긴 채 둥글게 모여 있다. 빛이 그 자리에서 오래 멈춰 머뭇거린다. 누군가를 기다리는 자리처럼.'
		}
	},

	final_boss: {
		id: 'GlacialBeacon_Anya_V1',
		name: 'Anya',
		appearance:
			'A gentle warm light floating along a trail of tiny frost flowers blooming in rows across the deep snow, each bloom a small mark of warmth left behind. The light moves as if retracing a path walked many times before. A faint translucent shape of a small child flickers within the glow for an instant. Cinematic cold blue blizzard with delicate amber warmth, tender and melancholic high-fantasy aesthetic.',
		surface_identity:
			'서리꽃이 피어난 안전한 길을 따라 조난자를 인도하는 작은 빛. 위험을 피해 따뜻한 곳으로 데려가려는 수호자처럼 느껴진다.',
		true_identity:
			'줄지어 피어난 서리꽃은 빛이 누군가를 위해 남긴 표식이다. 같은 길을 몇 번이고 되풀이해 오가며, 길을 잃지 않도록 자취를 다시 피워 둔다.',
		motivation:
			'누군가가 돌아올 길을 잃을까 두려워, 같은 자리에 거듭 서리꽃을 피우며 길을 밝힌다. 자신을 따르는 이들이 그 누군가일지 모른다는 덧없는 희망을 품는다.',
		twist:
			'서리꽃 길이 한 지점에서 끊기고, 그 자리에 서리꽃이 둥글게 모여 피어 있다. 빛이 그곳에서 오래도록 멈춰 머뭇거린다. "…여기서… 기다리면… 돌아올 거예요…" 작은 속삭임이 흘러나온다. 그것은 길을 안내하는 빛이 아니라, 누군가를 한자리에서 하염없이 기다리는 빛이었다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '서리꽃이 같은 자리에 눈에 덮였다 또 돋아난 자국으로 겹겹이 피어 있다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '몇 번이고 다시 피운 서리꽃 — 빛이 같은 길을 셀 수 없이 오갔다는 증거였다.'
		},
		{
			id: 'fs_02',
			hint: '빛이 늘 같은 길만 따라 오가며, 결코 새로운 방향으로는 나아가지 않는다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그 길은 누군가가 떠난 길이자 돌아오기를 바라는 길이었다. 빛은 그 길만을 지킨다.'
		},
		{
			id: 'fs_03',
			hint: '서리꽃 사이로 아주 작은 발자국 모양의 자국이 어렴풋이 비친다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '어린아이의 발자국 크기였다. 이 길을 처음 남긴 것은 작은 누군가였다.'
		},
		{
			id: 'fs_04',
			hint: '서리꽃 길이 끝나는 지점에서, 꽃들이 한자리에 둥글게 모여 피어 있다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '둥글게 모인 자리는 누군가를 하염없이 기다리며 멈춰 선 자리였다.'
		}
	],

	npc_roles: {
		eira: {
			role: '흔적을 읽는 기록자',
			arc: '2편: 겹겹이 피어난 서리꽃과 작은 발자국 자국을 읽어, 이 길이 거듭 되풀이된 길임을 밝힌다.'
		},
		inka: {
			role: '기다림을 느끼는 자',
			arc: '2편: 둥글게 모인 서리꽃 자리에서 누군가를 기다리는 애틋한 마음을 느낀다.'
		},
		bran: {
			role: '길의 방향을 좇는 길잡이',
			arc: '2편: 빛이 늘 같은 길만 오가는 것을 알아채고, 그 길이 가리키는 곳을 좇는다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '줄지어 핀 서리꽃',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'탐험대가 더 깊은 설원으로 들어선다. 빛의 자취를 따라 눈밭에 작은 서리꽃이 줄지어 피어 있다. 에이라가 마치 누군가 표시해 둔 듯한 그 길을 기록한다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '늘 같은 길',
			boss: 'random_boss',
			npc: 'bran',
			summary:
				'브란이 빛이 늘 같은 길만 되풀이해 오가는 것을 알아챈다. 결코 새로운 방향으로는 나아가지 않는다. "이 길은… 누군가가 떠난 길이거나, 돌아오기를 바라는 길이야."'
		},
		{
			order: 3,
			act: 'rising',
			title: '겹겹이 핀 자국',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 같은 자리에 눈에 덮였다 또 돋아난 서리꽃 자국을 읽어낸다. 그 사이로 아주 작은 발자국 모양이 비친다. 어린아이의 발자국 크기다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '돌아올 거예요',
			boss: 'random_boss',
			npc: 'inka',
			summary:
				'인카가 서리꽃 길에 깃든 기다림의 마음을 느낀다. 빛의 온기에는 누군가가 돌아오기를 바라는 애틋함이 배어 있다. "…누군가를, 아주 오래 기다리고 있어."'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '여기서 기다리면',
			boss: 'pool_109',
			npc: 'inka',
			summary:
				'서리꽃 길이 한 지점에서 끊기고, 꽃들이 둥글게 모여 피어 있다. 빛이 그 자리에서 오래 멈춰 머뭇거린다. "여기서… 기다리면… 돌아올 거예요…" 인카가 그것이 길을 안내하는 빛이 아니라 누군가를 하염없이 기다리는 빛임을 깨닫는다.'
		}
	],

	act_summary: {
		intro: '빛의 자취를 따라 줄지어 핀 서리꽃 길. 에이라가 누군가 표시해 둔 듯한 길을 기록한다.',
		rising: '늘 같은 길만 오가는 빛을 좇는 브란, 어린 발자국 자국을 읽는 에이라, 기다림을 느끼는 인카. 길은 거듭 되풀이된 길이다.',
		climax_finale: '서리꽃이 둥글게 모인 자리에서 빛이 멈춰 머뭇거린다. "여기서 기다리면 돌아올 거예요." 인도가 아니라 기다림이었다.'
	}
};
