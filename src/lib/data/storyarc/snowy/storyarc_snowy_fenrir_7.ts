import type { StoryArc } from '$lib/types';

// Fenrir 시리즈 1편 (level 7) — 첫 조우: 종말의 늑대를 사냥하러
export const storyarc_snowy_fenrir_7: StoryArc = {
	id: 'snowy_fenrir_7',
	level: 7,
	chapter_name: {
		korean: '종말의 늑대를 쫓아',
		english: 'Hunting the Wolf of the End',
		japanese: '終末の狼を追って',
		chinese: '追逐终末之狼',
		french: 'À la Poursuite du Loup de la Fin',
		spanish: 'Cazando al Lobo del Fin',
		vietnamese: 'Truy Đuổi Sói Tận Thế',
		thai: 'ล่าหมาป่าแห่งจุดจบ',
		hindi: 'अंत के भेड़िये का शिकार'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'끝없는 눈보라가 휘몰아치는 설원 깊은 곳. 북방 부족들이 "종말의 늑대"라 부르며 두려워하던 거대한 마수가 이 일대를 떠돈다는 소문이 자자하다. 탐험대는 명성과 사냥감을 좇아, 무기를 단단히 쥐고 그 그림자를 추적해 들어간다.',
		rule: '이 설원에서 살아남으려면 늑대보다 먼저 늑대를 찾아야 한다. 발자국을 따르되, 발자국이 끝나는 곳을 조심하라.',
		secret:
			'먼발치에서 어슬렁대는 거대한 늑대는 살과 가죽이 아니다. 가까이 다가가면 그것이 수많은 작은 짐승의 얼어붙은 사체와 부서진 뼈가 엉겨 만들어진 텅 빈 껍데기임을 알게 된다.'
	},

	protagonist_goal: '북방 전설의 종말의 늑대를 추적해, 그 흉포한 마수를 사냥하라.',

	act_tone: {
		intro: {
			mood: '사냥의 긴장',
			tension: 1,
			narrative_role: '눈밭에 찍힌 거대한 발자국. 탐험대는 전설의 마수를 잡겠다는 결의로 추격을 시작한다.'
		},
		rising: {
			mood: '어긋나는 사냥감',
			tension: 3,
			narrative_role:
				'발자국을 따라갈수록 어딘가 이상하다. 늑대는 사냥꾼을 피하지도, 위협하지도 않는다. 그저 무언가를 삼키며 느릿느릿 떠돌 뿐이다.'
		},
		climax_finale: {
			mood: '첫 균열의 한기',
			tension: 5,
			narrative_role:
				'탐험대가 처음으로 늑대와 정면으로 마주한다. 무기를 겨눈 순간, 안구가 있어야 할 자리의 깊은 동공 속에서 굶주린 눈보라가 휘몰아치는 것을 본다. 이것은 사냥감이 아닐지도 모른다.'
		}
	},

	final_boss: {
		id: 'HollowHowl_Fenrir_V1',
		name: 'Fenrir',
		appearance:
			'A colossal wolf shape prowling across an endless blizzard far darker than the snowstorm around it. Seen up close its body is not flesh and hide but countless frozen carcasses of small beasts and shattered bones fused together into a hollow shell. Where its eyes should be, only deep hollow cavities are bored open, and a starving blizzard whirls inside them. As it steps, the bones forming its body clatter against one another like grim wind chimes. Cinematic cold snowy lighting, ominous high-fantasy aesthetic.',
		surface_identity:
			'북방 전설에 등장하는 종말의 늑대, 신들마저 두려워했다는 흉포한 마수. 탐험대는 단순히 힘으로 맞서 쓰러뜨려야 할 거대한 야수, 사냥의 대상으로 여기며 무기를 든다.',
		true_identity:
			'아직은 그저 거대하고 기이한 마수처럼 보인다. 그러나 뼈와 사체로 엉긴 몸, 텅 빈 동공 속 눈보라는 이것이 단순한 짐승이 아님을 어렴풋이 암시한다.',
		motivation:
			'늑대는 사냥꾼을 위협하지도, 분노하지도 않는다. 그저 눈앞의 무언가를 삼키며 느릿느릿 떠돌 뿐이다. 그 무심한 움직임이 오히려 더 깊은 한기를 자아낸다.',
		twist:
			'탐험대가 마침내 늑대와 정면으로 마주한다. 무기를 겨눈 순간, 안구가 있어야 할 자리에 뚫린 깊은 동공 속에서 굶주린 눈보라가 휘몰아친다. 늑대는 으르렁대지도 않고, 그저 가까이 있던 작은 짐승의 사체를 삼킨다. 삼킨 것은 곧장 동공 너머로 사라져 흔적도 없다. "…이건 사냥감이 아니야." 처음으로 탐험대의 등줄기에 알 수 없는 한기가 스친다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '눈밭의 거대한 발자국 안에, 부서진 작은 뼈조각들이 함께 박혀 있다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '늑대의 몸은 살이 아니라 무수한 짐승의 사체와 뼈로 엉겨 있었다.'
		},
		{
			id: 'fs_02',
			hint: '늑대는 탐험대를 보고도 위협하거나 달아나지 않는다. 그저 무언가를 삼킬 뿐이다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '이 존재에게는 사냥꾼을 향한 분노도 경계도 없다. 오직 삼키려는 본능만 있을 뿐이다.'
		},
		{
			id: 'fs_03',
			hint: '늑대가 발을 디딜 때마다 몸을 이룬 뼈들이 부딪치며 음산한 풍경 소리를 낸다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '살과 근육이 내는 소리가 아니었다. 텅 빈 껍데기가 서로 부딪치는 소리였다.'
		},
		{
			id: 'fs_04',
			hint: '늑대가 삼킨 작은 짐승의 사체가, 안구 자리의 동공 너머로 흔적도 없이 사라진다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '무엇을 삼켜도 텅 빈 동공으로 쏟아져 사라지기에, 그 위장은 결코 채워지지 않는다.'
		}
	],

	npc_roles: {
		eira: {
			role: '전설의 관찰자',
			arc: '1편: 동행단의 안내자로서 "종말의 늑대" 전설을 떠올리며, 눈앞의 마수가 전설과 미묘하게 다름을 침착히 기록한다.'
		},
		inka: {
			role: '의아함을 느끼는 자',
			arc: '1편: 위협하지도 달아나지도 않는 늑대를 보며, 이것이 정말 사냥감인지 막연한 의아함을 품는다.'
		},
		glace: {
			role: '동공을 응시하는 자',
			arc: '1편: 텅 빈 동공 속 눈보라를 담담히 들여다보며, 그 안에 아무것도 없음을 가장 먼저 알아챈다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '거대한 발자국',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'탐험대가 설원 깊은 곳, 종말의 늑대를 사냥하러 들어선다. 안내자 에이라가 눈밭의 거대한 발자국을 따라 길을 잡고, 발자국 속에 박힌 작은 뼈조각을 조용히 기록한다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '달아나지 않는 짐승',
			boss: 'random_boss',
			npc: 'inka',
			summary:
				'인카가 늑대를 발견한다. 그러나 그것은 탐험대를 보고도 위협하거나 달아나지 않는다. 그저 무언가를 삼키며 떠돈다. 인카는 막연한 의아함을 느낀다. "…저게 정말 우리가 잡으려던 마수가 맞아요?"'
		},
		{
			order: 3,
			act: 'rising',
			title: '뼈가 우는 소리',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'늑대가 움직일 때마다 몸을 이룬 뼈들이 부딪치며 음산한 풍경 소리를 낸다. 에이라가 그 소리에 살과 근육의 기척이 전혀 없음을 알아채고 기록한다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '사라지는 먹이',
			boss: 'random_boss',
			npc: 'glace',
			summary:
				'글라세가 늑대가 삼킨 작은 사체가 동공 너머로 흔적도 없이 사라지는 것을 담담히 응시한다. "…삼켰는데, 아무것도 남지 않았어. 저 안엔… 비어 있어."'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '이건 사냥감이 아니야',
			boss: 'pool_112',
			npc: 'glace',
			summary:
				'탐험대가 늑대와 정면으로 마주한다. 무기를 겨눈 순간, 텅 빈 동공 속에서 굶주린 눈보라가 휘몰아친다. 늑대는 으르렁대지도 않고 사체 하나를 삼키고, 그것은 곧장 동공 너머로 사라진다. 글라세가 가장 먼저 그 공허를 직시한다. "이건 사냥감이 아니야." 첫 전투가 한기 속에 시작된다.'
		}
	],

	act_summary: {
		intro: '설원 깊은 곳, 종말의 늑대를 사냥하러 든 탐험대가 거대한 발자국을 따라간다. 동행단(에이라·인카·글라세)이 함께 추적한다.',
		rising: '달아나지 않는 짐승에 의아해하는 인카, 뼈 우는 소리를 기록하는 에이라, 사라지는 먹이를 응시하는 글라세. 전설의 마수라기엔 어딘가 어긋나 있다.',
		climax_finale: '텅 빈 동공 속 굶주린 눈보라를 마주한 순간, 글라세가 직감한다 — "이건 사냥감이 아니야." 첫 전투가 한기 속에 시작된다.'
	}
};
