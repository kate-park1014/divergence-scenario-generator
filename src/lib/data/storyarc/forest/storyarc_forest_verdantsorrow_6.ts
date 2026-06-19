import type { StoryArc } from '$lib/types';

export const storyarc_forest_verdantsorrow_6: StoryArc = {
	id: 'forest_verdantsorrow_6',
	level: 6,
	chapter_name: {
		korean: '뿌리에 묶인 비탄',
		english: 'Rootbound Sorrow',
		japanese: '根に縛られた悲嘆',
		chinese: '被根缚住的悲叹',
		french: 'Le Chagrin Enraciné',
		spanish: 'El Dolor Enraizado',
		vietnamese: 'Nỗi Buồn Bị Trói Bởi Rễ Cây',
		thai: 'ความโศกที่ถูกรากตรึงไว้',
		hindi: 'जड़ों में बंधा शोक'
	},
	theme: 'forest',
	rising_count: 3,

	world: {
		setting:
			'숲 가장 깊은 곳에 거대하고 늙은 맹그로브 한 그루가 있다. 아마존족은 그것을 죽은 영혼들의 안식처이자 숲의 수호신으로 섬겨왔다.',
		rule: '그 나무에 바쳐진 영혼은 영원한 안식을 얻는다 전해지나, 나무에 다가간 산 자는 알 수 없는 슬픔에 잠겨 돌아오지 못한다.',
		secret:
			'나무는 사실 모계 족장 엘리아나가 부족을 덮친 역병과 모든 저주를, 그리고 지키려던 아이들의 영혼까지 함께 봉인한 거대한 무덤이다. 그녀는 아이들을 보호한다 믿으며, 누구의 접근도 어떤 해방도 역병처럼 막아선다.'
	},

	protagonist_goal:
		"숲 깊은 곳 '수호신 나무'에 얽힌 전설을 좇아, 그 뿌리에 봉인된 것의 정체를 밝히고 갇힌 영혼들을 해방하라.",

	act_tone: {
		intro: {
			mood: '경건한 적막',
			tension: 1,
			narrative_role: '수호신 나무를 향한 발걸음. 그러나 그 주변의 숲만 까닭 모르게 검붉게 시들어 있다.'
		},
		rising: {
			mood: '슬픔의 잠식',
			tension: 3,
			narrative_role:
				'나무에 가까워질수록 알 수 없는 비탄이 탐험대를 짓누른다. 껍질 안에서 어린 목소리들이 새어 나온다.'
		},
		climax_finale: {
			mood: '모성의 비극',
			tension: 5,
			narrative_role:
				'나무를 부수자 갇힌 아이들의 영혼이 쏟아진다. 어머니는 그들을 다시 끌어안으려 한다. 해방인가, 또 다른 약탈인가.'
		}
	},

	final_boss: {
		id: 'Rootbound_VerdantSorrow_V1',
		name: 'Verdant Sorrow',
		appearance:
			'울창한 숲 깊은 곳에 자리한, 거대하고 늙은 맹그로브 나무처럼 뒤틀린 형상. 굵은 뿌리들이 지면을 뒤덮고, 나뭇가지들은 하늘을 향해 비명을 지르듯 뻗어 있다. 잎사귀 하나 없이 앙상한 가지들 사이로는 희미한 초록빛 섬광이 맥박처럼 깜빡이며, 마치 나무가 거대한 심장을 숨기고 있는 듯한 착각을 불러일으킨다. 그 껍질은 오래된 눈물 자국처럼 검붉은 액체가 흘러내린 흔적들로 얼룩져 있다.',
		surface_identity:
			'숲의 오랜 수호신처럼 보이는 거대한 맹그로브 나무. 아마존족의 전설에 따르면, 숲의 균형을 지키는 존재이자 죽은 영혼들의 안식처로 여겨진다.',
		true_identity:
			"사실은 고대 아마존 부족의 위대한 모계 족장이었던 '엘리아나'의 고통스러운 잔영이다. 부족을 덮친 알 수 없는 역병으로부터 아이들을 지키기 위해 자신의 생명과 모든 저주를 숲의 가장 깊은 곳, 이 맹그로브 나무에 봉인했으나, 그 과정에서 아이들의 영혼까지 나무에 갇히게 되었다.",
		motivation:
			"자신과 함께 나무에 봉인된 부족의 아이들 영혼을 영원히 보호하기 위함이다. 역병의 위협으로부터 아이들을 격리시키는 것이 유일한 구원이라 믿으며, 아이들을 '해방'하려는 외부의 시도를 자신에게 닥쳤던 역병처럼 사악한 것으로 인식하고 모든 것을 막아선다.",
		twist:
			"탐험대가 나무의 핵심부를 공격하자, 껍질이 갈라진 틈새로 수십 개의 작고 투명한 영혼들이 비명처럼 튀어나와 맴돈다. 그 중 가장 빛나는 영혼이 흐느끼듯 속삭인다. '…아이들아… 미안하다… 너희를… 이 고통에서… 영원히… 지켜주고 싶었을 뿐인데…' 나무는 고통스럽게 신음하며, 수많은 어린 영혼들의 형상이 그녀의 품에서 다시 나무의 심장부로 빨려 들어가고, 절규하는 어머니의 목소리가 숲에 울려 퍼진다. '…가지 마… 내 아이들아… 또 다시 빼앗길 수는 없어…!'"
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '나무 주변의 숲만 유독 검붉게 시들어 있다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '나무 안에 봉인된 역병이 미세하게 새어 나온 흔적이었다.'
		},
		{
			id: 'fs_02',
			hint: '산 자가 나무에 다가서면 영문 모를 눈물이 흐른다.',
			plant_act: 'rising',
			plant_room: 3,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '나무 안에 갇힌 아이들 영혼의 비탄이 스며든 것이었다.'
		},
		{
			id: 'fs_03',
			hint: '껍질의 검붉은 자국이 마치 누군가 안에서 긁어낸 손톱자국 같다.',
			plant_act: 'rising',
			plant_room: 5,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '빠져나오려 발버둥 친 어린 영혼들의 흔적이었다.'
		},
		{
			id: 'fs_04',
			hint: '나무는 공격하지 않는다 — 그저 가지를 뻗어 끌어안으려 할 뿐이다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '해치려는 게 아니라, 빼앗기지 않으려는 어머니의 집착이었다.'
		}
	],

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '시드는 성역',
			boss: 'random_boss',
			npc: 'ela',
			summary:
				'죽은 영혼의 안식처라는 수호신 나무를 찾아간다. 엘라가 이상함을 짚는다 — 나무 둘레의 숲만 검붉게 시들어 있다. 성역이라기엔 너무 황폐하다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '새어 나오는 울음',
			boss: 'random_boss',
			npc: 'fern',
			summary:
				'나무에 다가서자 까닭 모를 눈물이 흐른다. 페른이 귀를 기울인다 — 껍질 안쪽에서 아이들의 가느다란 울음소리가 새어 나오고 있다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '긁힌 껍질',
			boss: 'random_boss',
			npc: 'hazel',
			summary:
				'나무껍질의 검붉은 자국을 헤이즐이 살핀다. 흘러내린 눈물 자국이 아니라, 안에서 누군가 긁어낸 손톱자국이다. 무언가가 나오려 발버둥 친 흔적.'
		},
		{
			order: 4,
			act: 'rising',
			title: '끌어안는 가지',
			boss: 'random_boss',
			npc: 'ivy',
			summary:
				'나무가 깨어나 가지를 뻗는다. 하지만 공격이 아니라 끌어안으려는 몸짓이다. 아이비가 소름 돋는다 — "해치려는 게 아니야. 놓아주지 않으려는 거야."'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '뿌리에 묶인 비탄',
			boss: 'pool_Rootbound_VerdantSorrow_V1',
			npc: 'ela',
			summary:
				'나무를 부수자 수십 개의 어린 영혼이 비명처럼 쏟아진다. 그러나 모계 족장 엘리아나는 그들을 다시 품으로 빨아들인다. "또 다시 빼앗길 수는 없어." 해방인가, 어머니의 영원한 감금을 깨는 또 다른 폭력인가.'
		}
	],

	act_summary: {
		intro: '죽은 영혼의 안식처라는 수호신 나무. 그 주변 숲만 검붉게 시들어 있다.',
		rising:
			'나무에 다가갈수록 까닭 모를 비탄. 껍질 안에서 아이들의 울음이 새어 나오고, 안에서 긁은 손톱자국이 보인다.',
		climax_finale:
			'나무 속엔 모계 족장 엘리아나가 봉인한 아이들의 영혼이 갇혀 있었다. 어머니의 보호인가, 영원한 감금인가.'
	}
};
