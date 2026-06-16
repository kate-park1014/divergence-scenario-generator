import type { StoryArc } from '$lib/types';

// Archduke Finn 시리즈 8편 (level 70) — 추위를 가장 많이 타는 왕
export const storyarc_snowy_finn_70: StoryArc = {
	id: 'snowy_finn_70',
	level: 70,
	chapter_name: {
		korean: '추위를 가장 많이 타는 왕',
		english: 'The King Who Feels the Cold Most',
		japanese: '一番寒がりな王',
		chinese: '最怕冷的王',
		french: 'Le Roi le Plus Frileux',
		spanish: 'El Rey que Más Siente el Frío',
		vietnamese: 'Vị Vua Sợ Lạnh Nhất',
		thai: 'ราชาที่ขี้หนาวที่สุด',
		hindi: 'सबसे ज़्यादा ठंड महसूस करने वाला राजा'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'밤이 깊은 알현실. 왕은 옥좌에 앉은 채 담요를 겹겹이 두르고도 덜덜 떨고 있다. 위엄을 부릴 기력도 없이, 그저 추위를 견디느라 부리를 딱딱 부딪친다.',
		rule: '왕은 밤이면 누구도 자신의 곁에 두지 않는다고 한다. 떨고 있는 모습을 들키고 싶지 않기 때문이다.',
		secret:
			'그는 누구보다 추위를 많이 타는 펭귄이다. 매일 밤 혼자 떨면서도, 곁을 채워줄 따뜻한 누군가가 그립다. 진실은 단순했다 — 그에게 필요한 것은 정복이 아니라 친구였다.'
	},

	protagonist_goal: '밤이면 홀로 떠는 왕의 진짜 처지를 마주하고, 그가 진정 필요로 하는 것이 무엇인지 이해하라.',

	act_tone: {
		intro: {
			mood: '들켜버린 떨림',
			tension: 2,
			narrative_role: '담요를 겹겹이 두르고도 떠는 왕의 진짜 밤이 처음으로 드러난다.'
		},
		rising: {
			mood: '애틋한 동병상련',
			tension: 3,
			narrative_role:
				'프로스트가 핫팩을 슬며시 건넨다. 왕은 위엄을 부리려다 말고, 그 온기 앞에서 잠시 무너질 듯 흔들린다.'
		},
		climax_finale: {
			mood: '친구라는 말 앞에서',
			tension: 4,
			narrative_role:
				'인카가 "친구가 필요한 거죠?"라고 묻자, Finn이 화들짝 "짐은! 짐은 친구 따위…!"라고 외치다 끝내 말끝을 흐린다. 그의 떨림이 추위 때문만은 아니다.'
		}
	},

	final_boss: {
		id: 'ArchdukeFinnTheChilly',
		name: 'Archduke Finn',
		appearance:
			'A round plump penguin slumped on its ice-cube throne deep at night, wrapped in layers of worn blankets yet still visibly shivering, its beak chattering, the oversized crown tilted and forgotten over one eye. It wears neon ski goggles, a moth-eaten purple cape with a giant safety pin, and a thick wool muffler. A glowing hand warmer is being gently offered toward it from offscreen. Soft cinematic 3D animation style, tender warm-and-cold tone, glittering snow, vibrant colors.',
		surface_identity:
			'밤이면 곁을 비우는 설산의 왕. 떠는 모습을 들키지 않으려 홀로 옥좌를 지킨다.',
		true_identity:
			'담요를 겹겹이 둘러도 떠는, 누구보다 추위를 많이 타는 펭귄. 그가 진정 필요로 한 것은 정복도 위엄도 아닌, 곁을 채워줄 친구였다.',
		motivation:
			'매일 밤 혼자 떨면서도 따뜻한 누군가가 그립다. 핫팩과 방한 장비가 탐나는 것도, 결국은 추위와 외로움을 함께 견뎌줄 누군가가 그리워서다.',
		twist:
			'인카가 가만히 묻는다. "…친구가 필요한 거죠?" Finn이 화들짝 부리를 딱딱 부딪치며 외친다. "짐은! 짐은 친구 따위 필요 없…!" 그러나 말끝이 흐려지고, 겹겹이 두른 담요 속 어깨가 가늘게 들썩인다. 그 떨림은 더 이상 추위 때문만이 아니다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '왕이 담요를 겹겹이 두르고도 부리를 딱딱 부딪치며 떨고 있다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '겹겹의 담요로도 가시지 않는 떨림은, 그가 누구보다 추위를 많이 타는 펭귄임을 드러냈다.'
		},
		{
			id: 'fs_02',
			hint: '프로스트가 건넨 핫팩 앞에서 왕이 잠시 무너질 듯 흔들린다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '작은 온기 하나에 흔들리는 모습은, 그가 얼마나 오래 따뜻함에 굶주려 왔는지를 보여준다.'
		},
		{
			id: 'fs_03',
			hint: '왕이 곁의 작은 펭귄들을 슬며시 더 가까이 끌어당긴다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '무리를 가까이 끌어당긴 것은, 추위보다 외로움을 견디기 위해서였다.'
		},
		{
			id: 'fs_04',
			hint: '"친구 따위 필요 없다"는 외침의 말끝이 흐려진다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '흐려진 말끝은, 그가 진정 필요로 한 것이 정복이 아니라 친구였음을 드러냈다.'
		}
	],

	npc_roles: {
		eira: {
			role: '진실을 정리하는 자',
			arc: '8편: 길 잃은 펭귄, 추위 타는 밤, 그리워하는 곁 — 흩어진 단서를 하나로 엮어 그의 진짜 처지를 또렷이 기록한다.'
		},
		inka: {
			role: '먼저 손 내미는 자',
			arc: '8편: "친구가 필요한 거죠?"라고 가장 먼저 묻고, 떠는 왕에게 온기와 다정함을 건넨다.'
		},
		frost: {
			role: '온기를 나누는 자',
			arc: '8편: 핫팩을 슬며시 건네며, 추위 타는 그에게 동병상련의 온기를 나눈다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '겹겹이 두른 담요',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'탐험대가 밤 깊은 알현실에 든다. 왕이 담요를 겹겹이 두르고도 부리를 딱딱 부딪치며 떨고 있다. 에이라가 그의 진짜 밤을 기록한다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '건네진 핫팩',
			boss: 'random_boss',
			npc: 'frost',
			summary:
				'프로스트가 핫팩을 슬며시 건넨다. 왕은 위엄을 부리려다 그 온기 앞에서 잠시 무너질 듯 흔들린다. "…너도, 추위를 아는구나." 동병상련이 오간다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '끌어당긴 작은 무리',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 왕이 작은 펭귄들을 슬며시 더 가까이 끌어당기는 것을 본다. "추위보다… 외로움을 견디는 거예요." 흩어진 단서를 하나로 엮는다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '친구가 필요한 거죠',
			boss: 'random_boss',
			npc: 'inka',
			summary:
				'인카가 가만히 묻는다. "…친구가 필요한 거죠?" 가장 먼저 손을 내밀어 떠는 왕에게 다정함을 건넨다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '친구 따위 필요 없다',
			boss: 'pool_033',
			npc: 'inka',
			summary:
				'Finn이 "짐은 친구 따위 필요 없…!"이라 외치다 말끝을 흐린다. 담요 속 어깨가 가늘게 들썩인다. 그 떨림이 추위 때문만이 아님을 인카가 마주한 채 충돌이 벌어진다.'
		}
	],

	act_summary: {
		intro: '밤 깊은 알현실, 담요를 겹겹이 두르고도 떠는 왕의 진짜 밤이 드러난다.',
		rising: '건네진 핫팩, 가까이 끌어당긴 무리, 친구가 필요하냐는 물음. 손 내미는 인카, 온기 나누는 프로스트, 진실을 엮는 에이라.',
		climax_finale: '"친구 따위 필요 없다"는 외침의 말끝이 흐려지고, 추위 때문만이 아닌 떨림 속에 충돌이 벌어진다.'
	}
};
