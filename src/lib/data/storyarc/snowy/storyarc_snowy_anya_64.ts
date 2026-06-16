import type { StoryArc } from '$lib/types';

// Anya 시리즈 7편 (level 64) — 서리꽃의 발자국
export const storyarc_snowy_anya_64: StoryArc = {
	id: 'snowy_anya_64',
	level: 64,
	chapter_name: {
		korean: '서리꽃의 발자국',
		english: 'Footprints of Frost Flowers',
		japanese: '霜花の足跡',
		chinese: '霜花的足迹',
		french: 'Les Pas des Fleurs de Givre',
		spanish: 'Las Huellas de las Flores de Escarcha',
		vietnamese: 'Dấu Chân Của Hoa Sương Giá',
		thai: 'รอยเท้าของดอกน้ำค้างแข็ง',
		hindi: 'पाला-फूलों के पदचिह्न'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'빛을 따라온 길에, 작은 발자국이 줄지어 서리꽃을 피우며 이어진다. 그 발자국은 한 곳을 향하지 않고, 같은 자리를 빙글빙글 돌며 누군가를 기다린 흔적이다.',
		rule: '서리꽃 발자국을 거슬러 따라가면 안야가 무엇을 기다려왔는지 알게 된다. 그러나 그 기다림은 수백 년째 끝나지 않았다.',
		secret:
			'작은 빛 안야는 길 잃은 조난자를 구하는 수호자가 아니다. 그저 떠나간 가족이 돌아올 길을 밝히려, 같은 자리를 맴돌며 마지막 불꽃을 지피고 있을 뿐이다.'
	},

	protagonist_goal: '서리꽃을 피우는 작은 발자국이 무엇을 기다리며 맴돌아 왔는지 밝혀라.',

	act_tone: {
		intro: {
			mood: '애처로운 자취',
			tension: 1,
			narrative_role: '작은 발자국이 서리꽃을 피우며 같은 자리를 빙글빙글 돈다. 누군가를 기다린 흔적이다.'
		},
		rising: {
			mood: '끝나지 않는 기다림',
			tension: 3,
			narrative_role:
				'발자국을 거슬러 갈수록, 안야가 수호자가 아니라 누군가를 기다리는 아이였음이 드러난다.'
		},
		climax_finale: {
			mood: '돌아오지 않는 이',
			tension: 5,
			narrative_role:
				'탐험대가 기다림의 정체를 알아내자, 작은 빛이 가냘프게 떤다. "…아직 안 왔어요. 길을 밝혀두면, 꼭 돌아올 거예요."'
		}
	},

	final_boss: {
		id: 'GlacialBeacon_Anya_V1',
		name: 'Anya',
		appearance:
			'A faint blue child-shaped light leaving a trail of small footprints that bloom into mournful frost flowers, circling the same spot over and over as if waiting for someone. The translucent ice form glimmers softly amid the endless snow. Cinematic tender sorrowful blue lighting, melancholic high-fantasy aesthetic.',
		surface_identity:
			'조난자를 안전한 길로 인도하는 작은 수호 빛처럼 보이는 존재. 그러나 그 발자국은 한곳을 향하지 않는다.',
		true_identity:
			'작은 빛 안야는 수호자가 아니다. 떠나간 가족이 돌아올 길을 밝히려, 같은 자리를 맴돌며 마지막 불꽃을 지피는 길 잃은 아이의 영혼이다.',
		motivation:
			'가족이 돌아올 길을 밝히려 한다. 자신을 따르는 이들이 어쩌면 사라진 가족의 흔적일지 모른다는 덧없는 희망을 품고 맴돈다.',
		twist:
			'탐험대가 기다림의 정체를 알아내자, 작은 빛이 가냘프게 떤다. "…아직 안 왔어요. 길을 밝혀두면, 꼭 돌아올 거예요." 길을 인도하던 빛은, 누군가를 기다리며 홀로 켜둔 등불이었다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '발자국이 목적지로 향하지 않고 같은 자리를 빙글빙글 돈다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '맴도는 발자국은 떠나지 못하고 누군가를 기다린 자리였다.'
		},
		{
			id: 'fs_02',
			hint: '서리꽃이 유독 한 방향 — 설원 바깥쪽을 바라보며 피어 있다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '꽃이 바라본 방향은 가족이 떠나간 길이었다 — 돌아오기를 기다린 쪽.'
		},
		{
			id: 'fs_03',
			hint: '빛이 탐험대를 인도하다가도, 자꾸 그 맴도는 자리로 되돌아온다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '되돌아오는 것은 그 자리를 떠날 수 없었기 때문이다 — 거기서 가족을 기다려야 했으니까.'
		},
		{
			id: 'fs_04',
			hint: '발자국의 크기가 아주 작다 — 어린아이의 것이다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '작은 발자국은 수호자가 아니라 길 잃은 어린아이의 것이었다.'
		}
	],

	npc_roles: {
		eira: {
			role: '자취를 읽는 자',
			arc: '7편: 맴도는 서리꽃 발자국을 읽어, 안야가 수호자가 아니라 누군가를 기다린 아이임을 밝힌다.'
		},
		inka: {
			role: '기다림에 마음을 여는 자',
			arc: '7편: 같은 자리를 맴도는 작은 빛의 외로움에 가장 먼저 마음을 열고, 곁에 머물러 준다.'
		},
		bran: {
			role: '길잡이의 직감',
			arc: '7편: 길잡이로서 이 빛이 길을 인도하는 것이 아니라 길을 기다리고 있음을 직감한다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '맴도는 발자국',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'탐험대가 빛을 따라온 길에서 서리꽃을 피우는 작은 발자국을 발견한다. 에이라가 그 발자국이 한곳을 향하지 않고 같은 자리를 맴돈 흔적임을 읽는다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '바깥을 보는 꽃',
			boss: 'random_boss',
			npc: 'bran',
			summary:
				'브란이 서리꽃이 유독 설원 바깥쪽을 바라보며 피어 있음을 알아챈다. 길잡이의 직감으로 이 빛이 길을 인도하는 게 아니라 무언가를 기다린다고 느낀다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '되돌아오는 빛',
			boss: 'random_boss',
			npc: 'inka',
			summary:
				'인카가 빛이 탐험대를 인도하다가도 자꾸 그 맴도는 자리로 되돌아옴을 본다. 그 외로움에 마음을 열고 곁에 머문다. "…여기서 떠날 수가 없는 거구나."'
		},
		{
			order: 4,
			act: 'rising',
			title: '작은 발',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 발자국의 크기가 어린아이의 것임을 확인한다. 수호자가 아니라 길 잃은 아이였다. "이건… 아주 작은 아이의 발이야."'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '꼭 돌아올 거예요',
			boss: 'pool_109',
			npc: 'inka',
			summary:
				'탐험대가 기다림의 정체를 알아내자 작은 빛이 가냘프게 떤다. "아직 안 왔어요. 길을 밝혀두면, 꼭 돌아올 거예요." 길을 인도하던 빛이 홀로 켜둔 등불이었음이 드러나고, 곁에 머문 인카가 그 슬픔을 마주하며 전투가 이어진다.'
		}
	],

	act_summary: {
		intro: '서리꽃을 피우며 같은 자리를 맴도는 작은 발자국. 에이라가 그 기다림의 흔적을 읽는다.',
		rising: '바깥을 보는 꽃을 알아챈 브란, 되돌아오는 빛에 마음을 연 인카, 작은 발을 확인한 에이라. 안야는 기다리는 아이였다.',
		climax_finale: '"길을 밝혀두면, 꼭 돌아올 거예요." 인도하던 빛은 홀로 켜둔 등불이었다.'
	}
};
