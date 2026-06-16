import type { StoryArc } from '$lib/types';

// Anya 시리즈 5편 (level 44) — 눈 속에 사라진 이름
export const storyarc_snowy_anya_44: StoryArc = {
	id: 'snowy_anya_44',
	level: 44,
	chapter_name: {
		korean: '눈 속에 사라진 이름',
		english: 'The Name Lost in the Snow',
		japanese: '雪に消えた名前',
		chinese: '消失在雪中的名字',
		french: 'Le Nom Perdu dans la Neige',
		spanish: 'El Nombre Perdido en la Nieve',
		vietnamese: 'Cái Tên Mất Trong Tuyết',
		thai: 'ชื่อที่หายไปในหิมะ',
		hindi: 'बर्फ़ में खोया हुआ नाम'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'발자국이 이끈 끝에서, 눈에 반쯤 묻힌 옛 바이킹 정착지의 잔해가 드러난다. 무너진 통나무집과 룬이 새겨진 기둥들. 그 사이에 빛이 가장 오래 머무는 작은 거처 하나가 있다.',
		rule: '정착지의 룬 기록을 읽은 자는 빛의 옛 이름을 알게 된다. 그러나 그 이름에는 오래된 슬픔이 잠들어 있다.',
		secret:
			'이 정착지는 수백 년 전 눈보라 속에서 사라진 바이킹 정착민들이 살던 곳이다. 룬 기록에는 폭풍에 갇혀 끝내 가족과 헤어진 한 어린아이의 이름이 새겨져 있다 — "안야".'
	},

	protagonist_goal: '눈에 묻힌 옛 정착지의 룬 기록을 해독해, 빛의 진짜 이름을 밝혀라.',

	act_tone: {
		intro: {
			mood: '폐허의 적막',
			tension: 1,
			narrative_role: '눈에 반쯤 묻힌 옛 바이킹 정착지. 빛이 그 가운데 한 작은 거처에서 오래 머문다.'
		},
		rising: {
			mood: '드러나는 옛 이야기',
			tension: 3,
			narrative_role:
				'룬 기록이 하나씩 해독된다. 수백 년 전 이곳에서 폭풍에 갇힌 정착민들과, 가족과 헤어진 한 어린아이의 이야기가 떠오른다.'
		},
		climax_finale: {
			mood: '이름과 마주하다',
			tension: 5,
			narrative_role:
				'기록의 마지막 줄에서 어린아이의 이름이 드러난다 — "안야". 빛이 그 이름이 새겨진 기둥 앞에서 떨며 멈춘다.'
		}
	},

	final_boss: {
		id: 'GlacialBeacon_Anya_V1',
		name: 'Anya',
		appearance:
			'A gentle light hovering within the snow-buried ruins of an ancient Viking settlement, collapsed log houses and rune-carved pillars half sunk in drifts. The light lingers longest by one small dwelling. The faint shape of a child within the glow seems to press close to a rune-carved pillar, the name Anya etched upon it. Cinematic somber blue ruins under falling snow, mournful and tender high-fantasy aesthetic.',
		surface_identity:
			'옛 정착지의 거처에서 오래 머무는 빛. 여전히 조난자를 인도하려는 듯하나, 이곳에서는 유독 한 자리를 떠나지 못한다.',
		true_identity:
			'수백 년 전 눈보라 속에서 사라진 바이킹 정착민의 어린아이, 그 영혼이 혹한의 마법으로 얼어붙어 형상화된 빛. 룬 기록에 새겨진 그 이름은 "안야"였다.',
		motivation:
			'자신이 살던 집, 가족과 함께였던 자리를 떠날 수 없어 그곳을 맴돈다. 가족이 돌아올 길을 밝히려 빛을 지피며, 그들이 자신을 잊지 않았기를 바란다.',
		twist:
			'룬 기록의 마지막 줄이 해독된다 — "폭풍의 밤, 가족과 헤어진 막내, 안야. 끝내 돌아오지 못하다." 빛이 그 이름이 새겨진 기둥 앞에서 떨며 멈춘다. "…안야… 그건… 제 이름이에요…" 작은 속삭임이 잔해 사이로 퍼진다. 작은 빛은 수백 년 전 눈보라에 사라진 어린아이의 영혼이었다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '빛이 정착지의 한 작은 거처 앞에서 유독 오래, 가장 따뜻하게 머문다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그 거처는 빛이 가족과 함께 살던 집이었다. 떠날 수 없었던 자리.'
		},
		{
			id: 'fs_02',
			hint: '룬 기둥에 여러 가족의 이름이 새겨져 있는데, 가장 작은 이름 하나만 끝이 지워져 있다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '지워진 이름은 끝내 돌아오지 못한 막내, 안야의 것이었다.'
		},
		{
			id: 'fs_03',
			hint: '룬 기록에 폭풍의 밤, 가족이 뿔뿔이 흩어졌다는 구절이 보인다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그 밤, 어린 안야는 가족과 헤어져 눈보라 속에 홀로 남겨졌다.'
		},
		{
			id: 'fs_04',
			hint: '빛의 온기가 닿으면 거처 안쪽 벽에 어린아이 키 높이의 작은 손자국이 떠오른다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '벽의 손자국은 추위 속에서 가족을 부르며 문을 두드리던 어린 안야의 흔적이었다.'
		}
	],

	npc_roles: {
		eira: {
			role: '이름을 해독하는 기록자',
			arc: '5편: 룬 기록을 해독해 빛의 진짜 이름 "안야"와 그 비극을 밝힌다 — 기록자 역할의 정수.'
		},
		inka: {
			role: '아이를 알아보는 자',
			arc: '5편: 거처 벽의 작은 손자국에서 외로이 남겨진 어린아이를 알아보고 가슴 아파한다.'
		},
		bran: {
			role: '집을 알아보는 길잡이',
			arc: '5편: 빛이 떠나지 못하는 거처가 곧 그의 집임을 알아보고, 그를 집으로 인도할 길을 가늠한다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '눈에 묻힌 정착지',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'발자국이 이끈 끝에서 눈에 반쯤 묻힌 옛 바이킹 정착지가 드러난다. 빛이 한 작은 거처 앞에서 오래 머문다. 에이라가 룬 기둥의 기록을 해독하기 시작한다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '지워진 작은 이름',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 룬 기둥에서 여러 가족의 이름을 읽어낸다. 그중 가장 작은 이름 하나만 끝이 지워져 있다. 무언가 끝맺지 못한 비극의 흔적이다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '흩어진 그 밤',
			boss: 'random_boss',
			npc: 'bran',
			summary:
				'브란이 빛이 떠나지 못하는 거처가 곧 그의 집임을 알아본다. 룬 기록에는 폭풍의 밤 가족이 뿔뿔이 흩어졌다는 구절이 있다. "여기가… 집이구나. 돌아갈 곳."'
		},
		{
			order: 4,
			act: 'rising',
			title: '벽의 작은 손자국',
			boss: 'random_boss',
			npc: 'inka',
			summary:
				'인카가 빛의 온기가 닿은 거처 벽에서 어린아이 키 높이의 작은 손자국을 발견한다. 추위 속에서 가족을 부르며 문을 두드린 흔적이다. "…이렇게 작은 아이가, 혼자."'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '그건 제 이름이에요',
			boss: 'pool_109',
			npc: 'eira',
			summary:
				'에이라가 기록의 마지막 줄을 해독한다 — "폭풍의 밤, 가족과 헤어진 막내, 안야. 끝내 돌아오지 못하다." 빛이 그 이름이 새겨진 기둥 앞에서 떤다. "안야… 그건… 제 이름이에요…" 작은 빛이 수백 년 전 눈보라에 사라진 어린아이임이 드러난다.'
		}
	],

	act_summary: {
		intro: '눈에 묻힌 옛 바이킹 정착지. 빛이 한 거처에 머물고, 에이라가 룬 기록 해독을 시작한다.',
		rising: '지워진 작은 이름을 읽는 에이라, 집을 알아보는 브란, 벽의 손자국에서 아이를 알아보는 인카. 한 어린아이의 비극이 떠오른다.',
		climax_finale: '기록의 마지막 줄에서 이름이 드러난다 — "안야". 빛이 곧 수백 년 전 눈보라에 사라진 어린아이의 영혼임이 밝혀진다.'
	}
};
