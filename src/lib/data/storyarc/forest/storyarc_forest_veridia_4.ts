import type { StoryArc } from '$lib/types';

export const storyarc_forest_veridia_4: StoryArc = {
	id: 'forest_veridia_4',
	level: 4,
	chapter_name: {
		korean: '갇힌 신탁',
		english: 'The Caged Oracle',
		japanese: '囚われた神託',
		chinese: '被囚禁的神谕',
		french: "L'Oracle Emprisonné",
		spanish: 'El Oráculo Enjaulado',
		vietnamese: 'Lời Sấm Bị Giam Cầm',
		thai: 'คำพยากรณ์ที่ถูกจองจำ',
		hindi: 'कैद भविष्यवाणी'
	},
	theme: 'forest',
	rising_count: 3,

	world: {
		setting:
			'깊은 숲 한가운데, 길 잃은 자에게 안식과 예언을 준다는 태고의 수호자가 산다. 순례자들은 그 \'축복\'을 받기 위해 숲을 찾는다.',
		rule: '수호자의 축복을 받은 자는 깊은 평온을 얻지만, 그 대가로 무언가를 조금씩 잃는다.',
		secret:
			'수호자는 사실 고대 악령에게 육신을 빼앗긴 예언자 소녀 \'베리디아\'의 감옥이다. \'축복\'은 악령이 순례자들의 생명력을 빨아들이는 과정이며, 갇힌 베리디아의 영혼은 자신을 파괴해 해방시켜 줄 강자를 기다리고 있다.'
	},

	protagonist_goal:
		'길 잃은 자들에게 가르침을 준다는 숲의 신성한 수호자를 찾아, 그 \'축복\'에 숨겨진 고통의 정체를 밝혀라.',

	act_tone: {
		intro: {
			mood: '경외와 평온',
			tension: 1,
			narrative_role: '숲의 수호자를 향한 순례. 그 빛은 성스럽고 평온하다. 하지만 축복받은 자들은 어딘가 공허하다.'
		},
		rising: {
			mood: '불길한 자비',
			tension: 3,
			narrative_role:
				'축복받은 순례자들이 서서히 시들어간다. 수호자의 슬픈 그늘. 그 자비 뒤에서 무언가가 생명을 빨아들이고 있다.'
		},
		climax_finale: {
			mood: '연민과 해방',
			tension: 5,
			narrative_role:
				'거목의 형상이 부서지자 그 안에 갇힌 어린 소녀가 드러난다. 그녀는 구원이 아니라 죽음을, 해방을 빌고 있다.'
		}
	},

	final_boss: {
		id: 'Oracle_Veridia_V1',
		name: 'Veridia',
		appearance:
			'수백 년 묵은 고목의 뒤틀린 뿌리가 인간의 형상을 휘감은 듯, 이끼 낀 덩굴과 죽은 나뭇잎이 그 몸을 덮고 있다. 마치 숲 자체가 형체를 이룬 듯, 그 몸통에서는 희미한 초록빛 정기가 뿜어져 나오나, 고개 숙인 얼굴에는 깊은 그늘이 드리워져 있어 슬픔과 고통이 느껴진다. 거대한 가지처럼 뻗은 팔은 땅에 닿을 듯 늘어져 있고, 그 무게는 숙명처럼 무겁다.',
		surface_identity:
			'깊은 숲의 고요를 지키는 태고의 수호자로, 길을 잃은 자들에게 안식과 가르침을 주는 성스러운 존재로 여겨진다. 그 은은한 빛은 숲의 생명력을 상징하며, 모든 생명체가 경외하는 지혜로운 영이다.',
		true_identity:
			'진정한 정체는 고대 아마존 부족의 사라진 예언자, 어린 소녀 베리디아의 비극적인 잔영이다. 그녀는 숲의 신성한 의식을 행하던 중, 숲 깊은 곳에 잠들어 있던 악의에 찬 고대 존재에게 육신을 빼앗겨 그 영원한 속박 속에 갇히고 말았다. 지금 보이는 거목의 형상은 그 존재의 감옥이자 꼭두각시에 불과하며, 베리디아의 영혼은 끊임없이 고통받으며 탈출을 갈구한다.',
		motivation:
			'몸을 지배하는 고대 존재는 숲의 생명력을 흡수하고 모든 침입자를 적대하나, 그 내부에 갇힌 베리디아의 영혼은 강대한 힘을 가진 자들이 자신을 파괴하여 영원한 고통으로부터 해방시켜 주기를 갈망한다. 이는 스스로 끝낼 수 없는 비극적인 운명에 대한 절규이다.',
		twist:
			'탐험대의 맹공에 거목의 형상이 마침내 갈라지고 부서지자, 그 안에서 희미하게 빛나는 연약한 어린 소녀의 모습이 드러난다. 거대한 숲의 정령이 아닌, 눈물 어린 인간의 모습에 탐험대가 경악하는 순간, 소녀의 입에서 숲 전체를 뒤흔드는 고통스러운 외침이 터져 나온다. "…나는… 저주받은 예언의 그릇… 나의 운명은 이 숲의 심장에 영원히 묶였으니… 오소서… 해방시켜 주소서… 이 고통을… 나의… 어머니… 아마존이여… 용서하소서…!"'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '수호자의 축복을 받은 순례자들이 하나같이 멍하고 공허한 눈을 하고 있다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '축복은 평온이 아니라, 악령이 생명력을 빨아들인 흔적이었다.'
		},
		{
			id: 'fs_02',
			hint: '수호자의 빛이 따뜻한데도, 가까이 가면 까닭 모를 슬픔과 한기가 스민다.',
			plant_act: 'rising',
			plant_room: 3,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그 슬픔은 거목이 아니라, 그 안에 갇힌 소녀의 것이었다.'
		},
		{
			id: 'fs_03',
			hint: '수호자는 가끔 예언 대신 \'끝내 달라\'는 알 수 없는 말을 흘린다.',
			plant_act: 'rising',
			plant_room: 5,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그것은 악령의 신탁이 아니라, 베리디아가 새어 보낸 구조 요청이었다.'
		},
		{
			id: 'fs_04',
			hint: '숲 곳곳의 제단에 아주 작은 손으로 새긴 듯한 어린아이의 기도문이 남아 있다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '육신을 빼앗기기 전, 예언자 소녀 베리디아가 남긴 마지막 기도였다.'
		}
	],

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '수호자를 향한 순례',
			boss: 'random_boss',
			npc: 'fern',
			summary:
				'길 잃은 자에게 안식을 준다는 숲의 수호자. 페른이 탐험대를 그 성소로 안내한다. 축복받았다는 순례자들이 보이지만, 그들의 눈은 텅 비어 있다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '시들어가는 자들',
			boss: 'random_boss',
			npc: 'hazel',
			summary:
				'축복받은 순례자들이 시간이 갈수록 야위어간다. 헤이즐이 불안해한다 — "평온해 보이는데, 왜 죽어가지?" 수호자의 빛 속에 한기가 스며 있다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '끝내 달라는 목소리',
			boss: 'random_boss',
			npc: 'ivy',
			summary:
				'수호자가 예언 대신 알 수 없는 말을 흘린다 — "끝내… 달라." 아이비가 제단에서 어린아이의 손글씨로 새겨진 오래된 기도문을 발견한다. 누군가의 구조 요청.'
		},
		{
			order: 4,
			act: 'rising',
			title: '감옥의 정체',
			boss: 'random_boss',
			npc: 'fern',
			summary:
				'거목의 형상이 점점 일그러진다. 빛 안쪽에서 작은 인영이 어른거린다. 페른이 깨닫는다 — 저 거대한 수호자는, 무언가를 가두는 \'감옥\'이다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '갇힌 신탁',
			boss: 'pool_Oracle_Veridia_V1',
			npc: 'fern',
			summary:
				'거목을 부수자 그 안에서 눈물짓는 어린 소녀가 드러난다. 베리디아는 구원이 아니라 죽음을, 해방을 빈다. 탐험대는 안다 — 그녀를 파괴하는 것이 곧 구원이라는 잔인한 진실을. 끝내줄 것인가.'
		}
	],

	act_summary: {
		intro: '숲의 성스러운 수호자를 향한 순례. 축복받은 자들의 눈은 비어 있다.',
		rising: '축복받은 순례자들이 시들어간다. 수호자는 예언 대신 \'끝내 달라\'고 흘린다. 거목은 무언가를 가둔 감옥이었다.',
		climax_finale: '거목 속에 갇힌 어린 예언자 베리디아. 그녀가 빈 것은 구원이 아니라 해방이었다. 파괴가 곧 자비인가.'
	}
};
