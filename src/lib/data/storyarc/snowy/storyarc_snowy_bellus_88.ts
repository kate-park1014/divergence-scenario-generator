import type { StoryArc } from '$lib/types';

// Bellus 시리즈 9편 (level 88) — 진실 회수: 마지막 한 땀 직전
export const storyarc_snowy_bellus_88: StoryArc = {
	id: 'snowy_bellus_88',
	level: 88,
	chapter_name: {
		korean: '마지막 한 땀 직전',
		english: 'Just Before the Final Stitch',
		japanese: '最後の一針の前に',
		chinese: '最后一针之前',
		french: 'Juste Avant le Dernier Point',
		spanish: 'Justo Antes de la Última Puntada',
		vietnamese: 'Ngay Trước Đường Kim Cuối',
		thai: 'ก่อนเข็มเย็บสุดท้าย',
		hindi: 'अंतिम टाँके से ठीक पहले'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'벨루스의 진실이 거의 다 드러났다. 그는 이제 탐험대를 자신의 자수에 박을 마지막 한 땀으로 삼으려 한다. 수백 개의 은빛 얼음 바늘이 그들의 가장 빛나는 순간을 겨눈다. 거꾸로 도는 시계 얼굴이 그들의 시간을 더듬으며, 마지막 박제를 준비한다.',
		rule: '벨루스의 자수는 마지막 한 땀만을 남겨 두었다. 그 자리는 탐험대의 순간을 위한 것 — 그들을 박제하면, 그가 믿는 가장 아름다운 작품이 완성된다.',
		secret:
			'벨루스는 탐험대를 마지막 한 땀으로 박으려 하면서도, 그것이 그들을 위한 일이라 굳게 믿는다. 그는 그들을 종말로부터 구하려는 것이며, 그들의 가장 찬란한 표정을 영원에 박아 두는 것이 사랑이라 믿는다. 그 광기와 사랑이 마지막 결전 직전, 극에 달한다.'
	},

	protagonist_goal: '벨루스가 마지막 한 땀으로 탐험대를 박으려는 순간, 그의 광기와 사랑의 정체를 온전히 마주하라.',

	act_tone: {
		intro: {
			mood: '겨눠진 바늘',
			tension: 3,
			narrative_role: '수백 개의 은빛 얼음 바늘이 탐험대의 가장 빛나는 순간을 겨눈다. 마지막 한 땀이 임박했다.'
		},
		rising: {
			mood: '사랑과 광기의 절정',
			tension: 4,
			narrative_role:
				'벨루스가 그들의 표정을 더듬으며 황홀해한다. 진실은 거의 다 드러났고, 남은 것은 그의 손이 마지막 땀을 놓는 순간뿐이다.'
		},
		climax_finale: {
			mood: '결전 직전의 정적',
			tension: 5,
			narrative_role:
				'벨루스가 바늘을 들어 올린다. "이제 곧, 너희도 영원히 아름다울 거야." 마지막 결전을 향한 숨 막히는 정적이 모든 것을 휘감는다.'
		}
	},

	final_boss: {
		id: 'ChronosStitcher_V0',
		name: 'Bellus',
		appearance:
			'Bellus poised to make a final stitch, hundreds of silvery ice needles aimed at the explorers most radiant moment. The giant backward-turning clock-face glows with anticipation, reaching out threads of memory-light toward them. The obsidian-and-brass ghost train hums around them, one empty space in the great tapestry waiting to be filled. Beautiful and breathless, cinematic frozen lighting, haunting high-fantasy aesthetic.',
		surface_identity:
			'멈춰버린 세상의 선로 위를 달리는 유령 열차. 그에게 닿은 자들은 영원히 얼어붙은 채 가장 아름다운 순간에 박제된다.',
		true_identity:
			'벨루스는 종말을 본 뒤 가장 아름다운 순간을 얼려 보존하려는 광기 어린 수집가가 되었다. 그는 이제 탐험대를 자신의 자수의 마지막 한 땀으로 삼으려 하며, 그것이 그들을 구하는 사랑이라 굳게 믿는다.',
		motivation:
			'탐험대를 종말로부터 구하려 그들의 가장 찬란한 순간을 영원에 박으려 한다. 그것이 강탈이 아니라 가장 깊은 사랑이라 믿으며, 마지막 한 땀을 놓을 손을 들어 올린다.',
		twist:
			'벨루스가 바늘을 들어 올린다. "이제 곧, 너희도 영원히 아름다울 거야. 마지막 한 땀만 놓으면 돼." 그의 목소리에 황홀과 간절함이 뒤섞인다. "왜 그렇게 슬픈 얼굴이니? 나는 너희를 사랑해서 이러는 건데." 사랑과 광기가 분리되지 않는 그의 본질이 결전 직전 극에 달한다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '벨루스의 거대한 자수에 단 한 땀의 빈자리만 남아 있다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그 빈자리는 탐험대의 순간을 위한 것이었다. 그들을 박으면 그가 믿는 작품이 완성된다.'
		},
		{
			id: 'fs_02',
			hint: '벨루스가 탐험대의 표정을 더듬으며 "이게 너희의 가장 아름다운 순간이야"라고 황홀하게 속삭인다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그 황홀한 속삭임은, 그가 이미 그들의 표정을 박제할 순간으로 골랐다는 신호였다.'
		},
		{
			id: 'fs_03',
			hint: '들어 올린 바늘 끝이 떨린다. 벨루스의 손이 처음으로 망설이는 듯하다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '떨리는 바늘 끝은, 사랑과 광기 사이에서 그조차 흔들리고 있음을 드러냈다.'
		},
		{
			id: 'fs_04',
			hint: '벨루스가 "나는 너희를 사랑해서 이러는 거야"라고 거듭 되뇐다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그 되뇜은, 그의 광기와 사랑이 결코 분리되지 않는다는 진실의 마지막 확인이었다.'
		}
	],

	npc_roles: {
		eira: {
			role: '진실을 매듭짓는 자',
			arc: '9편: 지금까지 해독한 벨루스의 모든 진실 — 집찰관의 과거, 종말의 환영, 뒤틀린 사랑 — 을 하나로 매듭지어 마지막 결전을 준비한다.'
		},
		glace: {
			role: '마지막 땀을 직시하는 자',
			arc: '9편: 들어 올린 바늘과 자수의 빈자리를 응시하며, 박제될 순간 너머의 진짜 삶을 담담히 가리킨다.'
		},
		hild: {
			role: '사랑을 되묻는 자',
			arc: '9편: "사랑해서 이런다"는 벨루스에게, 진짜 사랑은 가두는 것이 아니라 보내주는 것임을 의례자로서 되묻는다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '하나 남은 빈자리',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'벨루스의 거대한 자수에 단 한 땀의 빈자리만 남았다. 에이라가 그 자리가 탐험대를 위한 것임을 깨닫고, 지금까지의 모든 진실을 하나로 매듭지으며 결전을 준비한다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '너희의 가장 아름다운 순간',
			boss: 'random_boss',
			npc: 'glace',
			summary:
				'벨루스가 탐험대의 표정을 더듬으며 "이게 너희의 가장 아름다운 순간이야"라고 황홀하게 속삭인다. 글라스가 답한다. "아름다운 건 다음 순간이 있기 때문이에요." 박제 너머의 삶을 담담히 가리킨다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '떨리는 바늘 끝',
			boss: 'random_boss',
			npc: 'hild',
			summary:
				'들어 올린 바늘 끝이 떨린다. 벨루스의 손이 처음으로 망설인다. 힐드가 그 틈으로 묻는다. "사랑해서 이런다고요? 진짜 사랑은 가두는 게 아니라 보내주는 거예요." 사랑의 의미를 되묻는다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '사랑해서 이러는 거야',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'벨루스가 "나는 너희를 사랑해서 이러는 거야"라고 거듭 되뇐다. 에이라가 그의 광기와 사랑이 결코 분리되지 않음을 매듭짓고, 이것이 마지막 결전임을 동료들에게 알린다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '영원히 아름다울 거야',
			boss: 'pool_035',
			npc: 'hild',
			summary:
				'벨루스가 바늘을 들어 올린다. "이제 곧 너희도 영원히 아름다울 거야. 왜 그렇게 슬픈 얼굴이니? 사랑해서 이러는 건데." 사랑과 광기가 분리되지 않는 그의 본질 앞에, 힐드가 보내주는 자의 마음을 안고 마지막 결전의 문턱에서 그와 맞선다.'
		}
	],

	act_summary: {
		intro: '벨루스의 자수에 마지막 한 땀의 빈자리만 남았다. 에이라가 모든 진실을 매듭지어 결전을 준비한다.',
		rising: '박제 너머의 삶을 가리키는 글라스, 사랑을 되묻는 힐드, 광기와 사랑이 하나임을 매듭짓는 에이라. 결전이 임박한다.',
		climax_finale: '"영원히 아름다울 거야"라며 바늘을 든 벨루스. 사랑과 광기가 분리되지 않는 그의 본질이 극에 달한다.'
	}
};
