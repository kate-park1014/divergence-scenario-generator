import type { StoryArc } from '$lib/types';

// SkalHorn 시리즈 9편 (level 85) — 끝나지 않는 축제
export const storyarc_snowy_skalhorn_85: StoryArc = {
	id: 'snowy_skalhorn_85',
	level: 85,
	chapter_name: {
		korean: '끝나지 않는 축제',
		english: 'The Festival Without End',
		japanese: '終わらぬ祝祭',
		chinese: '永不结束的庆典',
		french: 'La Fête Sans Fin',
		spanish: 'La Fiesta Sin Fin',
		vietnamese: 'Lễ Hội Bất Tận',
		thai: 'งานเลี้ยงที่ไม่สิ้นสุด',
		hindi: 'अंतहीन उत्सव'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'뿔잔 둘레가 거대한 얼음 연회장처럼 펼쳐진 구역. 얼어붙은 식탁과 술잔, 화석처럼 굳은 손님들의 형상이 빼곡하다. 모두 웃는 얼굴로 멈춰 있지만, 그 미소엔 끝나지 않는 축제에 갇힌 공포가 어려 있다.',
		rule: '연회장에 발을 들인 자는 손님으로 초대된다. 한 번 자리에 앉으면, 영원한 축제의 일부가 되어 다시는 일어나지 못한다.',
		secret:
			'SkalHorn은 혹독한 겨울을 축복이라 여기며, 모든 생명을 영원한 얼음의 품으로 인도해 완벽한 정적의 축제를 완성하려 한다. 얼어붙은 손님들은 이미 그 축제에 갇힌 자들이다.'
	},

	protagonist_goal: '얼음 연회장에 굳어버린 손님들이 누구인지, 끝나지 않는 축제의 정체를 밝혀라.',

	act_tone: {
		intro: {
			mood: '굳은 연회',
			tension: 1,
			narrative_role: '얼어붙은 식탁과 화석처럼 굳은 손님들. 모두 웃는 얼굴로 멈춰 있다.'
		},
		rising: {
			mood: '갇힌 미소',
			tension: 3,
			narrative_role:
				'손님들의 미소를 들여다볼수록, 그것이 즐거움이 아니라 축제에 갇힌 공포임이 드러난다.'
		},
		climax_finale: {
			mood: '초대받는 자리',
			tension: 5,
			narrative_role:
				'탐험대가 축제의 정체를 알아내자, 뿔잔이 빈 자리를 가리키며 권한다. "…앉으렴. 너희를 위한 자리란다. 이 축제는 영원히 끝나지 않는단다."'
		}
	},

	final_boss: {
		id: 'MadFeast_SkalHorn_V1',
		name: 'SkalHorn',
		appearance:
			'A vast hall of ice spreading around the horn-vessel, frozen banquet tables and goblets, fossilized guests packed in rows. Every figure is locked in a smile, yet terror lingers beneath each frozen grin. Empty seats wait invitingly amid the eternal feast. Cinematic grand frozen blue lighting, dreadful high-fantasy aesthetic.',
		surface_identity:
			'성대한 축제를 베푸는 그릇처럼 보이는 존재. 그러나 그 연회장의 손님들은 결코 일어나지 못한다.',
		true_identity:
			'SkalHorn은 혹독한 겨울을 축복이라 여기며, 모든 생명을 영원한 얼음의 품으로 인도해 완벽한 정적의 축제를 완성하려 한다. 얼어붙은 손님들은 이미 그 축제에 갇힌 자들이다.',
		motivation:
			'더 많은 손님을 영원한 축제에 초대하려 한다. 그에게 모든 생명을 얼리는 것은 잔혹이 아니라, 완벽한 정적을 향한 환대다.',
		twist:
			'탐험대가 축제의 정체를 알아내자, 뿔잔이 빈 자리를 가리키며 권한다. "…앉으렴. 너희를 위한 자리란다. 이 축제는 영원히 끝나지 않는단다." 환대의 미소 뒤에는, 모든 것을 얼려 정적으로 만들려는 광기가 있었다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '연회장 손님들이 하나같이 웃는 얼굴로 굳어 있다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '웃는 얼굴은 즐거움이 아니라, 축제에 갇혀 굳어버린 공포였다.'
		},
		{
			id: 'fs_02',
			hint: '식탁 곳곳에 아직 비어 있는 자리가 정갈하게 차려져 있다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '비어 있는 자리는 새 손님 — 탐험대를 위한 것이었다.'
		},
		{
			id: 'fs_03',
			hint: '손님들 사이로 갈수록, 가장 오래된 손님은 이미 뿔잔과 거의 하나가 되어 있다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '오래 앉은 손님일수록 뿔잔에 동화되었다 — 축제의 끝은 완전한 얼어붙음이었다.'
		},
		{
			id: 'fs_04',
			hint: '연회장 어디에도 자리에서 일어선 손님의 흔적은 없다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '한 번 앉으면 일어날 수 없었다 — 영원히 끝나지 않는 축제였다.'
		}
	],

	npc_roles: {
		eira: {
			role: '연회를 읽는 자',
			arc: '9편: 얼어붙은 손님들의 정체를 읽어, 끝나지 않는 축제가 모든 생명을 얼리려는 환대임을 밝힌다.'
		},
		ivar: {
			role: '자리를 거부하는 전사',
			arc: '9편: 권해지는 빈 자리를 단호히 거부하고, 홀린 동료가 앉지 못하도록 끝까지 붙든다.'
		},
		boris: {
			role: '환대를 의심하는 자',
			arc: '9편: 정갈한 환대의 미소 뒤에서 일어선 손님이 하나도 없음을 짚어, 그 초대가 함정임을 간파한다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '얼음 연회장',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'탐험대가 뿔잔 둘레의 거대한 얼음 연회장에 들어선다. 에이라가 얼어붙은 식탁과 화석처럼 굳은 손님들이 하나같이 웃는 얼굴로 멈춰 있음을 읽기 시작한다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '비어 있는 자리',
			boss: 'random_boss',
			npc: 'boris',
			summary:
				'보리스가 식탁 곳곳에 정갈하게 차려진 빈 자리를 본다. "이 빈 자리들… 누굴 위한 거지? …우리잖아. 환대가 아니라 함정이야."'
		},
		{
			order: 3,
			act: 'rising',
			title: '하나가 된 손님',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 가장 오래된 손님이 이미 뿔잔과 거의 하나가 되어 있음을 본다. 오래 앉을수록 동화된다. "축제의 끝은… 완전히 얼어붙는 거야."'
		},
		{
			order: 4,
			act: 'rising',
			title: '일어서지 못하는 자들',
			boss: 'random_boss',
			npc: 'ivar',
			summary:
				'이바르가 연회장 어디에도 자리에서 일어선 손님의 흔적이 없음을 확인한다. 홀린 동료가 빈 자리에 앉으려 하자 끝까지 붙든다. "앉지 마. 한 번 앉으면 못 일어나."'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '너희를 위한 자리란다',
			boss: 'pool_110',
			npc: 'boris',
			summary:
				'탐험대가 축제의 정체를 알아내자 뿔잔이 빈 자리를 가리키며 권한다. "앉으렴. 너희를 위한 자리란다. 이 축제는 영원히 끝나지 않는단다." 환대 뒤의 광기가 드러나고, 그 함정을 간파해온 보리스와 함께 전투가 이어진다.'
		}
	],

	act_summary: {
		intro: '얼어붙은 식탁과 웃는 얼굴로 굳은 손님들. 에이라가 그 연회를 읽기 시작한다.',
		rising: '빈 자리를 간파한 보리스, 동화된 손님을 본 에이라, 일어서지 못하는 자들을 확인한 이바르. 축제는 영원한 얼어붙음이었다.',
		climax_finale: '"너희를 위한 자리란다." 환대의 미소 뒤엔 모든 것을 얼려 정적으로 만들려는 광기가 있었다.'
	}
};
