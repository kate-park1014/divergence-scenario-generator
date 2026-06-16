import type { StoryArc } from '$lib/types';

// Bellus 시리즈 10편 (level 98) — 피날레: 깨지는 시계 유리 (시리즈 피날레)
export const storyarc_snowy_bellus_98: StoryArc = {
	id: 'snowy_bellus_98',
	level: 98,
	chapter_name: {
		korean: '깨지는 시계 유리',
		english: 'The Shattering Clock Glass',
		japanese: '砕ける時計のガラス',
		chinese: '碎裂的钟面玻璃',
		french: 'Le Verre d Horloge qui se Brise',
		spanish: 'El Cristal del Reloj que se Rompe',
		vietnamese: 'Mặt Kính Đồng Hồ Vỡ Tan',
		thai: 'กระจกหน้าปัดที่แตกสลาย',
		hindi: 'टूटता घड़ी का काँच'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'시리즈의 끝. 집찰관의 과거도, 종말의 환영도, 뒤틀린 사랑도 모두 마주한 탐험대가 거꾸로 도는 거대한 시계 얼굴 앞에 선다. 벨루스가 마지막 한 땀을 놓으려 바늘을 들어 올린다. 수백 개의 은빛 얼음 바늘과 박제된 미소들이 그를 둘러싼다. 모든 비극이 이 마지막 순간으로 수렴한다.',
		rule: '이 마지막 대결에서 박제를 거부하는 것은 곧 흐르는 시간을 택하는 것이다. 벨루스는 그것을 종말로 가는 길이라 믿고, 탐험대는 그것이야말로 살아 있음이라 믿는다.',
		secret:
			'벨루스가 끝내 깨닫지 못한 것 — 늙고, 잊히고, 끝내 스러지는 그 모든 흐름이야말로 살아 있음의 증거였다는 것. 그가 종말이라 부른 것은 사실 삶 그 자체였다. 박제된 영원은 아름다웠으나, 그 안엔 아무도 살고 있지 않았다.'
	},

	protagonist_goal: '벨루스의 마지막 한 땀을 막고, 박제된 영원이 아니라 흐르는 삶을 택해 그를 안식으로 보내라.',

	act_tone: {
		intro: {
			mood: '거꾸로 도는 정적',
			tension: 2,
			narrative_role: '거대한 시계 얼굴이 거꾸로 돈다. 벨루스가 마지막 한 땀을 놓으려 조용히 탐험대를 기다린다.'
		},
		rising: {
			mood: '마지막 호소',
			tension: 4,
			narrative_role:
				'벨루스가 마지막으로 호소한다 — 한 걸음만 더 오면 영원이 있다고. 1편부터의 모든 복선이 이 마지막 순간으로 수렴한다.'
		},
		climax_finale: {
			mood: '비극의 정점',
			tension: 5,
			narrative_role:
				'거부당한 벨루스가 마지막 한 땀을 놓고, 거꾸로 도는 시계바늘이 폭주한다. 시리즈의 모든 비극이 시계 유리가 깨지는 이 순간에 폭발한다.'
		}
	},

	final_boss: {
		id: 'ChronosStitcher_V0',
		name: 'Bellus',
		appearance:
			'Bellus before a colossal backward-turning clock-face, his obsidian-and-brass ghost train roaring as hundreds of silvery ice needles flare around him. The great clock glass begins to crack, splintering across the dial. Frozen smiling figures watch from every window, and broken clockwork gears spill out through the shattering glass. Beautiful and tragic, cinematic climactic frozen lighting, haunting and ferocious high-fantasy aesthetic.',
		surface_identity:
			'멈춰버린 세상의 선로 위를 달리는 유령 열차. 그에게 닿은 자들은 영원히 얼어붙은 채 가장 아름다운 순간에 박제된다.',
		true_identity:
			'과거에 시간을 배달하던 집찰관. 모든 것이 파괴되는 미래를 보았고, 세상을 구하는 유일한 방법은 가장 아름다운 지금 이 순간을 얼려서 영구 보존하는 것이라 믿게 된 광기 어린 수집가.',
		motivation:
			'탐험대가 시간을 다시 흐르게 하려는 것을 파괴라고 생각한다. 그들이 나이를 먹고, 병들고, 결국 죽는 것을 막기 위해 — 그들의 시간을 여기서 가져가 주려 한다.',
		twist:
			'왜 도망치니? 한 걸음만 더 가면 늙지도, 잊혀지지도 않는 영원이 있는데. 벨루스는 시계태엽 감기는 웃음소리를 내며 속삭인다. 너희의 가장 찬란한 표정을 내가 방금 실로 꿰맸어. 이제 영원히 내 거야. 쓰러지며 시계 유리가 깨질 때, 그는 조각난 태엽 사이로 말한다 — 시간이 흐르면 결국 모든 게 흉해질 텐데 왜 굳이 그 지옥으로 가려는 거야?'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '거대한 시계 얼굴이 처음으로 멈출 듯 떨리며 거꾸로 돈다. 유리에 가느다란 금이 보인다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '가느다란 금은, 쓰러지는 벨루스와 함께 끝내 깨질 시계 유리의 첫 징조였다.'
		},
		{
			id: 'fs_02',
			hint: '벨루스가 "한 걸음만 더 오면 영원이 있다"고 거듭 손짓한다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그 손짓은 박제된 영원으로의 마지막 유혹이었다 — 늙지도 잊혀지지도 않는 영원으로.'
		},
		{
			id: 'fs_03',
			hint: '벨루스가 들어 올린 바늘로 허공에 마지막 한 땀을 놓는다. 탐험대의 가장 찬란한 표정이 실에 꿰인다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그가 꿰맨 표정은, 그가 영원히 자기 것이라 믿은 탐험대의 가장 찬란한 순간이었다.'
		},
		{
			id: 'fs_04',
			hint: '시계태엽 감기는 듯한 그의 웃음소리가 점점 빨라지며 폭주의 조짐을 보인다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '빨라지던 웃음소리는, 거부당한 그가 시계 유리와 함께 무너지기 직전임을 알리는 신호였다.'
		}
	],

	npc_roles: {
		eira: {
			role: '이름을 기억하는 자',
			arc: '10편: 집찰관 벨루스의 본명과 그가 한때 흘려보내던 시간을 끝까지 기억하며, 박제가 아닌 기록으로 그를 마주한다. (3인 throughline 앵커)'
		},
		glace: {
			role: '흐름을 택하는 자',
			arc: '10편: 늙고 스러지는 흐름이야말로 살아 있음임을 끝까지 긍정하며, 박제된 영원 대신 흐르는 삶을 택한다.'
		},
		hild: {
			role: '안식으로 보내는 자',
			arc: '10편: 박제된 자들과 벨루스를 망자처럼 기리고, 가두는 것이 아니라 보내주는 진짜 추모로 그를 안식에 들게 한다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '금이 간 시계 얼굴',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'탐험대가 시리즈의 끝, 거꾸로 도는 거대한 시계 얼굴 앞에 선다. 유리에 가느다란 금이 보인다. 에이라가 집찰관 벨루스의 본명을 부르며, 박제가 아닌 기록으로 그를 마주한다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '한 걸음만 더',
			boss: 'random_boss',
			npc: 'glace',
			summary:
				'벨루스가 "한 걸음만 더 오면 영원이 있다"고 손짓한다. 글라스가 그 유혹 앞에 멈춰 서서 답한다. "늙고 스러지는 게 살아 있다는 거예요. 나는 흐르는 쪽을 택할게요." 박제 대신 흐름을 택한다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '꿰매진 표정',
			boss: 'random_boss',
			npc: 'hild',
			summary:
				'벨루스가 들어 올린 바늘로 탐험대의 가장 찬란한 표정을 실에 꿴다. "이제 영원히 내 거야." 힐드가 박제된 자들을 망자처럼 기리며, 가두는 것이 아니라 보내주는 진짜 추모로 맞선다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '빨라지는 웃음',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'시계태엽 감기는 듯한 벨루스의 웃음소리가 점점 빨라진다. 에이라가 그가 한때 흘려보내던 시간을 끝까지 기억하겠다 약속하며, 폭주 직전의 그를 똑바로 마주한다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '왜 그 지옥으로 가려는 거야',
			boss: 'pool_035',
			npc: 'hild',
			summary:
				'거부당한 벨루스가 마지막 한 땀을 놓는다. "왜 도망치니? 한 걸음만 더 가면 영원이 있는데. 너희의 가장 찬란한 표정을 방금 꿰맸어. 이제 영원히 내 거야." 시계 유리가 깨지며 그가 조각난 태엽 사이로 말한다. "시간이 흐르면 결국 모든 게 흉해질 텐데, 왜 굳이 그 지옥으로 가려는 거야?" 글라스가 택한 흐름, 에이라가 새긴 이름, 힐드의 추모 — 3인의 여정이 수렴하며, 박제된 영원 대신 흐르는 삶을 택해 그를 안식으로 보내는 최종 결전이 벌어진다.'
		}
	],

	act_summary: {
		intro: '시리즈의 끝. 금이 간 시계 얼굴 앞에서 벨루스가 마지막 한 땀을 기다린다. 에이라가 그의 본명을 부른다.',
		rising: '흐름을 택하는 글라스, 보내주는 추모의 힐드, 이름을 기억하는 에이라. 벨루스가 탐험대의 표정을 끝내 꿰맨다.',
		climax_finale: '깨지는 시계 유리 사이로 "왜 그 지옥으로 가려는 거야"라 묻는 벨루스. 3인의 여정이 수렴하며 박제 대신 흐르는 삶을 택하는 시리즈 피날레.'
	}
};
