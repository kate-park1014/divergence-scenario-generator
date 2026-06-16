import type { StoryArc } from '$lib/types';

// Astrielle 시리즈 5편 (level 49) — 심화: 두려움의 까닭이 비치다
export const storyarc_snowy_astrielle_49: StoryArc = {
	id: 'snowy_astrielle_49',
	level: 49,
	chapter_name: {
		korean: '두려워하는 까닭',
		english: 'The Reason She Is Afraid',
		japanese: '恐れる理由',
		chinese: '她畏惧的缘由',
		french: 'La Raison de sa Peur',
		spanish: 'La Razón de su Miedo',
		vietnamese: 'Lý Do Khiến Nàng Sợ Hãi',
		thai: 'เหตุผลที่นางหวาดกลัว',
		hindi: 'उसके डर का कारण'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'궁전 깊은 곳의 봉인된 회상의 방. 벽면의 서리 거울마다 흐릿한 과거의 잔상이 어린다. 누군가 그녀의 곁에서 환하게 웃다가, 다음 순간 서리에 뒤덮여 멈춰버린 장면들.',
		rule: '이 방의 서리 거울은 다가서는 자에게 여왕이 가장 두려워하는 기억의 파편을 비춘다. 그러나 그 기억은 끝내 온전히 보이지 않고 늘 결정적인 순간에 얼어붙는다.',
		secret:
			'여왕은 일찍이 제 힘으로 사랑하는 이를 다치게 했다. 그 죄책감과 두려움이 그녀로 하여금 다가오는 모든 온기를 밀어내게 만들었다. 탐험대가 다가오는 것이 두려운 이유가 바로 이것이다.'
	},

	protagonist_goal: '서리 거울에 어린 과거의 잔상을 더듬어, 여왕이 무엇을 그토록 두려워하는지 비춰보라.',

	act_tone: {
		intro: {
			mood: '잔상이 어리는 적막',
			tension: 2,
			narrative_role:
				'봉인된 회상의 방. 서리 거울마다 흐릿한 과거가 어린다. 누군가 웃다가 멈춰버린 장면들이 탐험대를 사로잡는다.'
		},
		rising: {
			mood: '드러나는 죄책감',
			tension: 4,
			narrative_role:
				'거울 속 잔상이 또렷해진다. 그녀의 손길이 닿자 곁의 누군가가 서리에 뒤덮여 멈춘다. 결정적 순간마다 기억이 얼어붙지만, 두려움의 윤곽이 비친다.'
		},
		climax_finale: {
			mood: '두려움의 정점',
			tension: 5,
			narrative_role:
				'Astrielle가 회상의 방을 부수려 폭풍을 일으킨다. "보지 마요! 그건… 제가 한 짓이에요!" 탐험대가 다가오는 것이 두려운 진짜 까닭이, 그 외침 속에 처음으로 터져 나온다.'
		}
	},

	final_boss: {
		id: 'AstrielleWinterSovereign',
		name: 'Astrielle',
		appearance:
			'A majestic platinum-haired woman amid a hall of frost mirrors that reflect blurred memories of a smiling figure beside her freezing into stillness. Her fragile frost gown trembles and her frozen-star eyes brim with guilt and fear as she raises a blizzard to shatter the reflections. Ice flowers bloom and crumble around her. Cinematic cold haunting lighting, sorrowful guilt-stricken high-fantasy aesthetic.',
		surface_identity:
			'침입자가 봉인된 방에 닿자 폭풍으로 그것을 부수려 드는 겨울 여왕. 그녀는 무엇보다 그 방을 들키고 싶어 하지 않는다.',
		true_identity:
			'서리 거울에 비친 잔상이 진실에 거의 다다른다 — 그녀는 일찍이 제 힘으로 곁의 누군가를 다치게 했고, 그 죄책감에 사로잡혀 있다.',
		motivation:
			'제 힘으로 또다시 누군가를 해칠까 봐, 다가오는 온기를 두려워한다. 탐험대가 가까이 오는 것이 두려운 까닭은, 그들마저 다치게 할까 하는 공포 때문이다.',
		twist:
			'서리 거울 속, 그녀의 손길이 닿자 곁에서 웃던 이가 서리에 뒤덮여 멈춘다. Astrielle가 그 장면을 부수려 폭풍을 일으킨다. "보지 마요! 그건… 제가 한 짓이에요!" 그녀가 다가오는 모든 것을 밀어내는 까닭이, 그 비명 속에 처음으로 드러난다 — 사랑하는 이를 제 손으로 다치게 한 두려움.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '서리 거울마다 누군가 환하게 웃다가 다음 순간 멈춰버린 잔상이 어린다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '멈춰버린 잔상은, 그녀의 힘에 다친 사랑하는 이의 마지막 순간이었다.'
		},
		{
			id: 'fs_02',
			hint: '잔상 속 여왕의 손길이 닿는 순간, 곁의 인물이 서리에 뒤덮인다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '닿는 순간 얼어붙는 잔상은, 그녀가 본의 아니게 제 힘으로 곁을 다치게 했음을 드러냈다.'
		},
		{
			id: 'fs_03',
			hint: '기억은 늘 결정적인 순간에 얼어붙어, 끝까지 온전히 보이지 않는다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '얼어붙는 기억은, 차마 그 순간을 다시 마주하지 못하는 그녀의 죄책감이었다.'
		},
		{
			id: 'fs_04',
			hint: '여왕은 그 방에 다가가는 것을 무엇보다 거세게 막아선다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '회상의 방을 막아선 것은, 자신이 한 짓을 들키고 싶지 않은 두려움이었다.'
		}
	],

	npc_roles: {
		eira: {
			role: '잔상을 해독하는 자',
			arc: '5편: 서리 거울에 어린 과거의 잔상을 읽어내며, 여왕이 제 힘으로 곁의 누군가를 다치게 했던 내력을 밝혀낸다.'
		},
		inka: {
			role: '죄책감을 보듬는 자',
			arc: '5편: 두려움에 사로잡힌 여왕의 외침에서 죄책감을 읽고, 그것이 당신 탓만은 아니라는 온기를 건네려 한다.'
		},
		bran: {
			role: '두려움 밖으로 이끄는 자',
			arc: '5편: 두려움에 갇힌 여왕을 보며, 길잡이로서 그 죄책감의 방 밖으로 그녀를 데리고 나오겠다 다짐한다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '봉인된 회상의 방',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'탐험대가 서리 거울이 늘어선 회상의 방에 들어선다. 에이라가 거울마다 어린, 웃다가 멈춰버린 잔상들을 보고 기록한다. 무언가 깊은 슬픔이 봉인되어 있다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '닿으면 얼어붙다',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 잔상을 해독한다. 여왕의 손길이 닿는 순간 곁의 인물이 서리에 뒤덮인다. "…본의 아니게, 제 힘으로 다치게 한 거예요." 진실의 핵심에 다가선다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '당신 탓이 아니에요',
			boss: 'random_boss',
			npc: 'inka',
			summary:
				'인카가 거울 너머 여왕의 죄책감을 읽는다. "원해서 그런 게 아니잖아요. 당신 탓이 아니에요." 두려움에 갇힌 그녀에게 온기를 건네려 한다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '얼어붙는 기억',
			boss: 'random_boss',
			npc: 'bran',
			summary:
				'브란이 결정적 순간마다 기억이 얼어붙는 것을 본다. "차마 다시 못 보는 거야… 그래서 스스로를 가둔 거지." 그 방 밖으로 여왕을 이끌겠다 다짐한다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '제가 한 짓이에요',
			boss: 'pool_034',
			npc: 'inka',
			summary:
				'Astrielle가 회상의 방을 부수려 폭풍을 일으킨다. "보지 마요! 그건… 제가 한 짓이에요!" 다가오는 온기를 두려워하는 진짜 까닭 — 사랑하는 이를 제 손으로 다치게 한 두려움이 터져 나온다. 인카가 손을 뻗지만 폭풍이 그 사이를 가른다.'
		}
	],

	act_summary: {
		intro: '봉인된 회상의 방과 서리 거울에 어린 잔상들. 웃다가 멈춰버린 과거가 깊은 슬픔을 암시한다.',
		rising: '닿으면 얼어붙는 잔상을 해독한 에이라, 죄책감을 보듬는 인카, 두려움 밖으로 이끌려는 브란. 두려움의 까닭이 비친다.',
		climax_finale: '"그건 제가 한 짓이에요." 사랑하는 이를 제 힘으로 다치게 한 두려움이, 그녀가 온기를 밀어낸 진짜 까닭으로 터져 나온다.'
	}
};
