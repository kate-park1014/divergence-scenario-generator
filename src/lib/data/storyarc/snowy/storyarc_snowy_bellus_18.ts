import type { StoryArc } from '$lib/types';

// Bellus 시리즈 2편 (level 18) — 심화: 박제된 자들의 객차
export const storyarc_snowy_bellus_18: StoryArc = {
	id: 'snowy_bellus_18',
	level: 18,
	chapter_name: {
		korean: '미소 짓는 객차',
		english: 'The Carriage of Smiles',
		japanese: '微笑む客車',
		chinese: '微笑的车厢',
		french: 'Le Wagon des Sourires',
		spanish: 'El Vagón de las Sonrisas',
		vietnamese: 'Toa Tàu Của Những Nụ Cười',
		thai: 'ตู้โดยสารแห่งรอยยิ้ม',
		hindi: 'मुस्कानों का डिब्बा'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'탐험대가 유령 열차의 첫 객차에 발을 들인다. 흑요석 좌석마다 박제된 사람들이 앉아 있다. 모두 더없이 행복한 표정으로, 찻잔을 든 채, 책장을 넘기던 손짓 그대로 얼어붙었다. 황동 등불이 떨리지 않는 불꽃으로 객차를 비춘다.',
		rule: '객차 안의 시간은 영원히 한순간에 멈춰 있다. 박제된 자들은 그 순간의 기쁨을 영원히 누리지만, 다음 순간으로는 결코 넘어가지 못한다.',
		secret:
			'박제된 자들은 죽은 것이 아니다. 그들은 자신이 가장 행복했던 그 한순간을 영원히 반복하며, 그 너머의 시간을 잃었다. 벨루스는 그것을 자비라 믿는다.'
	},

	protagonist_goal: '박제된 자들의 객차를 지나며, 멈춘 미소 뒤에 감춰진 정지의 정체를 알아내라.',

	act_tone: {
		intro: {
			mood: '숨 막히는 정적',
			tension: 2,
			narrative_role: '객차에 들어서자 박제된 사람들이 미소 지은 채 가득 앉아 있다. 누구도 숨 쉬지 않는다.'
		},
		rising: {
			mood: '아름다움 속 공포',
			tension: 4,
			narrative_role:
				'찻잔을 든 손, 넘기던 책장. 모든 순간이 너무 완벽해서 도리어 끔찍하다. 그들의 눈동자 깊은 곳에서 무언가가 갇혀 있는 듯하다.'
		},
		climax_finale: {
			mood: '갇힌 자의 신호',
			tension: 5,
			narrative_role:
				'박제된 한 아이의 눈에서 단 한 방울의 눈물이 영원히 떨어지지 못한 채 멈춰 있다. 벨루스의 목소리가 객차에 퍼진다. "행복하지? 영원히 그럴 거야."'
		}
	},

	final_boss: {
		id: 'ChronosStitcher_V0',
		name: 'Bellus',
		appearance:
			'The interior of a Victorian ghost train carriage of black obsidian and brass, every seat filled with people frozen mid-smile, holding teacups and turning pages, all motionless. Brass lamps glow with flames that do not flicker. Silvery ice needles drift down the aisle, trailing threads of stitched memory-light. Snowflakes hang suspended outside the windows. Beautiful and suffocating, cinematic frozen lighting, haunting high-fantasy aesthetic.',
		surface_identity:
			'멈춰버린 세상의 선로 위를 달리는 유령 열차. 그에게 닿은 자들은 영원히 얼어붙은 채 가장 아름다운 순간에 박제된다.',
		true_identity:
			'그의 객차는 박제된 자들로 가득하다. 그들은 죽은 것이 아니라, 가장 행복한 한순간에 영원히 갇혀 있다. 벨루스가 단순한 망령이 아니라 무언가를 수집하는 존재임이 점차 드러난다.',
		motivation:
			'사람들을 가장 아름다운 순간에 멈춰, 그 기쁨을 영원히 누리게 한다고 믿는다. 다음 순간의 슬픔이나 노화로부터 그들을 지킨다고 여긴다.',
		twist:
			'박제된 아이의 눈에 단 한 방울의 눈물이 떨어지지 못한 채 멈춰 있다. 벨루스가 다정하게 속삭인다. "행복하지? 영원히 그럴 거야. 슬픔이 오기 직전에 멈췄으니까." 그 다정함 아래, 갇힌 자들이 결코 다음 순간으로 나아가지 못한다는 진실이 서늘하게 드러난다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '객차의 모든 사람이 더없이 행복한 표정으로 멈춰 있다. 단 한 명도 자세를 바꾸지 않는다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그들은 행복한 한순간에 갇혀, 영원히 그 다음으로 넘어가지 못한다.'
		},
		{
			id: 'fs_02',
			hint: '한 노인의 찻잔에서 김이 피어오르다 멈춰 굳어 있다. 차는 식지도, 비워지지도 않는다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '멈춘 김은 이 객차의 시간이 단 한순간에 박제되었음을 보여주는 증거였다.'
		},
		{
			id: 'fs_03',
			hint: '박제된 아이의 눈에 눈물 한 방울이 떨어지지 못한 채 빛나고 있다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '슬픔이 오기 직전에 멈춰진 그 눈물은, 박제가 기쁨만이 아니라 다음 감정마저 빼앗았음을 알렸다.'
		},
		{
			id: 'fs_04',
			hint: '은빛 얼음 바늘이 박제된 자들의 머리 위에서 기억의 실을 한 가닥씩 뽑아 올린다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '바늘이 뽑던 실은 그들의 가장 아름다운 기억이었다. 벨루스는 그 기억을 꿰매어 영원에 박아 둔다.'
		}
	],

	npc_roles: {
		eira: {
			role: '갇힌 기억의 해독자',
			arc: '2편: 박제된 자들의 멈춘 표정에서 그들이 어떤 순간에 갇혔는지 읽어내며, 정지의 구조를 기록한다.'
		},
		glace: {
			role: '멈춤의 끝을 보는 자',
			arc: '2편: 영원히 다음으로 나아가지 못하는 미소들을 응시하며, 흐르지 않는 시간이 곧 끝없는 정지임을 담담히 짚는다.'
		},
		hild: {
			role: '갇힌 자를 위한 의례자',
			arc: '2편: 박제된 아이 앞에 무릎을 꿇고, 그가 누리지 못할 다음 순간을 대신 애도한다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '미소로 가득한 좌석',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'탐험대가 유령 열차의 첫 객차에 들어선다. 좌석마다 박제된 사람들이 미소 지은 채 앉아 있다. 에이라가 그들의 표정에서 갇힌 순간을 읽어내며 기록을 시작한다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '식지 않는 차',
			boss: 'random_boss',
			npc: 'glace',
			summary:
				'글라스가 멈춘 채 굳은 찻잔의 김을 바라본다. "차는 영원히 식지 않아. 하지만 영원히 마실 수도 없지." 흐르지 않는 시간의 정체를 담담히 짚는다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '떨어지지 못한 눈물',
			boss: 'random_boss',
			npc: 'hild',
			summary:
				'힐드가 박제된 아이 앞에 무릎을 꿇는다. 눈에 떨어지지 못한 눈물 한 방울이 빛난다. "이 아이는 울 기회조차 빼앗겼군요." 누리지 못할 다음 순간을 대신 애도한다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '뽑혀 올라가는 실',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 은빛 얼음 바늘이 박제된 자들의 머리 위에서 기억의 실을 뽑아 올리는 것을 기록한다. 벨루스가 그 기억을 어딘가로 꿰매 가고 있다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '영원히 행복할 거야',
			boss: 'pool_035',
			npc: 'hild',
			summary:
				'벨루스의 목소리가 객차에 퍼진다. "행복하지? 영원히 그럴 거야. 슬픔이 오기 직전에 멈췄으니까." 갇힌 자들이 다음 순간으로 나아가지 못한다는 진실 앞에, 힐드가 분노와 슬픔을 안고 객차의 수호 망령들과 맞선다.'
		}
	],

	act_summary: {
		intro: '유령 열차의 첫 객차. 박제된 사람들이 미소 지은 채 가득 앉아 있다. 동행단이 그 정적 속으로 들어간다.',
		rising: '식지 않는 차를 보는 글라스, 떨어지지 못한 눈물을 애도하는 힐드, 뽑혀 올라가는 기억을 기록하는 에이라. 박제의 정체가 드러난다.',
		climax_finale: '"영원히 행복할 거야"라는 다정한 말 아래, 갇힌 자들이 다음 순간을 잃었다는 진실이 서늘하게 드러난다.'
	}
};
