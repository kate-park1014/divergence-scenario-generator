import type { StoryArc } from '$lib/types';
import { forest_pools } from '../sample/monster';

export const storyarc_forest_reverberation: StoryArc = {
	world: {
		setting:
			"1편에서 숲의 비밀이 폭로된 후, 사람들은 '행복한 감금'을 선택한 자들과 돌아온 자들로 나뉘었다. 숲은 여전히 아름답지만, 그 안에 숨겨진 불편한 진실은 공동체에 깊은 균열을 만들었다. 이제 숲은 단순한 자연이 아닌, 인간 욕망의 거울이 되었다.",
		secret:
			"플로라에게서 돌아온 사람들이 알 수 없는 병에 걸려 시들어가고 있다. 그들은 숲을 그리워하며 '그때가 더 행복했다'고 중얼거린다. 이 병은 숲을 떠나온 영혼에 대한 플로라의 무의식적인 집착의 결과인가, 아니면 그들 스스로 숲의 환상을 선택했던 대가인가?",
		rule: "숲의 정령 플로라는 여전히 숲의 심장부에 존재한다. 그녀의 영향력은 숲을 넘어 마을 사람들의 정신에도 미치기 시작했다. 특히 플로라에게서 돌아온 이들은 숲의 '행복한 환상'에 대한 강한 갈망과 동시에 현실의 고통을 겪는다."
	},
	theme: 'forest',
	rising_count: 3,
	global_foreshadowing: [
		{
			id: 'foreshadowing_01',
			plant_room: 1,
			reveal_room: 3,
			hint: '마을 사람들이 숲을 떠나온 후에도 숲의 꽃 향기를 맡는 환각에 시달린다.',
			plant_act: 'intro',
			reveal_act: 'rising',
			reveal_context: '병의 초기 증상으로 나타남.'
		},
		{
			reveal_context: '공동체의 분열을 심화시키는 요소로 작용.',
			reveal_act: 'rising',
			plant_act: 'intro',
			hint: '돌아온 사람들 중 일부가 숲에서 행복했던 기억을 미화하며 현실을 부정한다.',
			plant_room: 1,
			reveal_room: 3,
			id: 'foreshadowing_02'
		},
		{
			hint: "숲속에서 발견된 오래된 기록에 플로라와 비슷한 존재가 '영혼을 갉아먹는 그림자'로 묘사되어 있다.",
			plant_room: 2,
			reveal_room: 5,
			id: 'foreshadowing_03',
			reveal_context: '플로라의 본질과 병의 원인에 대한 단서.',
			reveal_act: 'climax_finale',
			plant_act: 'rising'
		},
		{
			reveal_act: 'climax_finale',
			plant_act: 'rising',
			reveal_context: '플로라의 영향력이 숲 밖으로 확장되고 있음을 암시.',
			hint: '마을 외곽에 심어진, 숲에서 가져온 것으로 보이는 작은 식물들이 기형적으로 자라난다.',
			plant_room: 2,
			reveal_room: 4,
			id: 'foreshadowing_04'
		}
	],
	final_boss: {
		id: '',
		name: '플로라',
		surface_identity: '봄의 정령. 숲을 지키는 존재. 침입자를 막아서는 최후의 적.',
		true_identity: '수백 년 전 사람들에게 버려진 후 홀로 숲을 지켜온 정령. 외로움이 집착이 되었다.',
		motivation:
			'이제 나를 떠난 이들조차 온전히 떠나지 못하게 할 것이다. 그때, 그들이 내게서 행복을 얻어 갔을 때, 이미 내 일부를 그들에게 심어두었다. 현실이 고통스럽다면, 영원히 숲의 품에서 안식해야 한다.',
		twist:
			"병의 원인은 플로라의 저주가 아니라, '돌아온 자들' 스스로가 숲의 환상에 대한 깊은 그리움과 현실의 괴리를 견디지 못해 자멸하고 있었던 것. 플로라는 그저 그들의 무의식적인 갈망에 공명하여 숲의 환영을 다시 보여줄 뿐이었다. 1편에서 '여기가 더 행복하잖아'라고 물었던 플로라의 질문은 여전히 유효하다."
	},
	scenarioOutline: [
		{
			npc: 'bracken',
			title: '시든 꽃의 마을',
			order: 1,
			boss: 'random_boss',
			summary:
				'1편의 사건 이후 마을에 돌아온 사람들이 원인 모를 병으로 시들어간다. 숲은 여전히 아름답지만, 돌아온 이들의 고통은 현실의 냉혹함을 상징한다. 주인공은 마을의 혼란을 목격하고 새로운 위협을 감지한다.',
			act: 'intro'
		},
		{
			npc: 'cedar',
			title: '환상의 덧',
			order: 2,
			boss: 'random_boss',
			summary:
				'병의 원인을 찾기 위해 숲으로 향한 주인공은 숲속에서 과거의 행복했던 기억을 투영하는 환상에 빠진다. 시더는 숲의 고대 기록을 통해 이 환상이 단순한 잔상이 아님을 경고한다.',
			act: 'rising'
		},
		{
			act: 'rising',
			summary:
				"플로라에게 가족을 잃었다고 생각하는 브라이어는 주인공에게 숲의 영혼을 '탐욕스러운 존재'로 묘사하며 복수를 부추긴다. 하지만 주인공은 숲에서 돌아온 이들의 내면 깊은 곳에 자리한 숲에 대한 갈망을 발견한다.",
			title: '영혼의 빚',
			npc: 'briar',
			order: 3,
			boss: 'random_boss'
		},
		{
			order: 4,
			boss: 'random_boss',
			title: '선택의 무게',
			npc: 'ela',
			act: 'rising',
			summary:
				"엘라는 병든 아버지 브라켄을 보며 숲이 준 '행복'과 현실의 '고통' 사이에서 괴로워한다. 숲의 환상이 유혹하는 순간, 주인공은 숲에 남은 이들과 돌아온 이들의 선택이 각자의 운명을 어떻게 만들었는지 깨닫는다."
		},
		{
			summary:
				'플로라의 환상 속에서 병의 진정한 원인을 마주한다. 그것은 플로라의 저주가 아닌, 숲의 환영을 선택했던 이들의 내면에 뿌리 박힌 갈망이었다. 브라켄은 마지막으로 숲의 품에서 안식을 택하며, 주인공은 숲과 사람들의 영원한 공존 방법을 찾아야 하는 무거운 과제를 안게 된다.',
			act: 'climax_finale',
			npc: 'bracken',
			title: '아름다운 저주',
			order: 5,
			boss: forest_pools.pool_016.pool_id as `pool_${string}`
		}
	],
	act_summary: {
		climax_finale:
			'병의 진정한 원인이 플로라의 저주가 아닌, 숲의 환상을 선택했던 이들의 자멸적 갈망임을 알게 된다. 주인공은 숲과 공존하는 새로운 길을 찾아야 하는 무거운 책임을 안고 미래를 맞이한다.',
		intro:
			'1편의 진실이 드러난 후, 숲에서 돌아온 이들이 의문의 병에 시달린다. 마을은 분열되고, 주인공은 이 새로운 위협의 근원을 파헤쳐야 한다.',
		rising:
			'숲의 환영은 여전히 강렬하며, 돌아온 이들의 내면 깊숙이 자리한 숲에 대한 갈망이 병의 원인과 얽혀 있음을 깨닫는다. 공동체의 갈등은 심화되고, 플로라의 의도가 다시 의심받는다.'
	},
	act_tone: {
		climax_finale: {
			tension: 5,
			mood: '절망적이나 결연한',
			narrative_role: '진실과 대면, 최후의 선택'
		},
		rising: {
			tension: 3,
			mood: '점점 심화되는 혼란과 의심',
			narrative_role: '내면의 갈등과 외부의 위협 증폭'
		},
		intro: {
			narrative_role: '새로운 갈등의 씨앗 제시',
			tension: 1,
			mood: '쓸쓸하고 불안한'
		}
	},
	chapter_name: {
		french: "Échos d'Illusion",
		hindi: 'माया के प्रतिध्वनि',
		spanish: 'Ecos de Ilusión',
		japanese: '幻影の木霊',
		vietnamese: 'Tiếng Vọng Ảo Ảnh',
		english: 'Echoes of Illusion',
		korean: '환영의 메아리',
		chinese: '幻象回响',
		thai: 'เสียงสะท้อนแห่งภาพลวงตา'
	},
	npc_roles: {
		bracken: {
			arc: 'Intro와 Climax Finale에 등장하며, 숲의 아름다움과 그 속의 고통을 동시에 보여주는 상징적 인물. 그의 선택은 주인공의 마지막 결정에 영향을 미친다.',
			role: '숲에서 돌아온 후 병으로 고통받는 마을의 원로. 숲의 환영을 그리워하며 주인공의 탐사를 돕는 조언자이자 방해꾼.'
		},
		ela: {
			arc: 'Rising Act에서 등장하여 개인적인 고통을 통해 숲의 비밀과 인간의 나약함을 보여준다. 주인공에게 감정적인 영향을 미친다.',
			role: '브라켄의 딸. 숲에서 돌아온 아버지를 간호하며 숲의 환상과 현실 사이에서 갈등하는 인물. 주인공에게 정서적 지지를 보내지만 때로는 좌절에 빠진다.'
		},
		briar: {
			arc: 'Rising Act에 등장하여 주인공에게 복수심을 불어넣으려 하지만, 주인공은 그의 이야기에 담긴 숲의 또 다른 면모를 발견한다.',
			role: '숲에 남은 가족을 잊지 못하고 플로라에 대한 복수를 꿈꾸는 강경파. 주인공에게 숲에 대한 잘못된 정보를 주거나 무모한 행동을 유도한다.'
		},
		cedar: {
			role: '숲에서 돌아온 후 숲의 병에 대한 해답을 찾으려는 학자. 고서와 전설을 연구하며 주인공에게 중요한 단서를 제공한다.',
			arc: 'Rising Act에서 중요한 단서를 제공하며, 이성적인 판단을 통해 미스터리를 해결하는 데 기여한다.'
		}
	},
	protagonist_goal:
		'플로라의 영향력에서 완전히 벗어나 숲을 치유하고, 돌아온 이들의 병을 해결하며 공동체의 분열을 막아라.',
	id: 'forest_reverberation'
};
