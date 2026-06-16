import type { StoryArc } from '$lib/types';

// Astrielle 시리즈 1편 (level 9) — 도입: 냉혹한 겨울 여왕이라는 오인
export const storyarc_snowy_astrielle_9: StoryArc = {
	id: 'snowy_astrielle_9',
	level: 9,
	chapter_name: {
		korean: '침묵에 잠긴 설원',
		english: 'The Snowfield Sunk in Silence',
		japanese: '沈黙に沈んだ雪原',
		chinese: '陷入沉默的雪原',
		french: 'La Plaine de Neige Plongée dans le Silence',
		spanish: 'El Nevado Hundido en Silencio',
		vietnamese: 'Cánh Đồng Tuyết Chìm Trong Im Lặng',
		thai: 'ทุ่งหิมะที่จมดิ่งในความเงียบ',
		hindi: 'सन्नाटे में डूबा बर्फ़ीला मैदान'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'생명이 모두 얼어붙어 침묵에 잠긴 광막한 설원. 탐험대는 멀리 솟은 거대한 얼음 궁전을 향해 나아간다. 사람들은 입을 모아 말한다 — 저 안에 세상을 하얗게 얼려버리려는 냉혹한 겨울의 여왕이 산다고.',
		rule: '여왕의 영역에 발을 들인 자는 발걸음마다 피었다 부서지는 얼음꽃의 환영을 본다. 가까이 다가갈수록 절대영도의 안개가 짙어지며, 모든 온기를 앗아간다.',
		secret:
			'설원을 침묵시킨 서리는 정복의 흔적이 아니라, 누구도 다가오지 못하게 막으려는 경계의 벽이었다. 여왕은 사람들을 얼리려는 것이 아니라, 그저 멀리 두려 하고 있을 뿐이다.'
	},

	protagonist_goal: '설원을 침묵에 잠기게 한 냉혹한 겨울 여왕의 정체를 확인하라.',

	act_tone: {
		intro: {
			mood: '서늘하고 장엄한 적막',
			tension: 1,
			narrative_role:
				'얼어붙은 설원 너머로 성당 같은 얼음 궁전이 솟아 있다. 모든 것이 침묵에 잠겨 있고, 발걸음마다 얼음꽃이 피었다 부서진다.'
		},
		rising: {
			mood: '경외와 두려움',
			tension: 3,
			narrative_role:
				'절대영도의 안개가 탐험대를 밀어낸다. 여왕은 좀처럼 모습을 드러내지 않고, 다만 서리와 폭풍으로 그들을 거듭 돌려세운다. 정복자라기엔 어딘가 결이 다르다.'
		},
		climax_finale: {
			mood: '냉혹함 속 첫 떨림',
			tension: 5,
			narrative_role:
				'궁전 문턱에서 처음으로 Astrielle의 목소리가 들려온다. "…더는… 오지 마세요." 냉혹한 명령 같았지만, 그 끝이 미세하게 떨리고 있었다.'
		}
	},

	final_boss: {
		id: 'AstrielleWinterSovereign',
		name: 'Astrielle',
		appearance:
			'A majestic and unearthly woman with flowing platinum-white hair, standing within a vast cathedral-like palace of ice. She wears a fragile frost gown that looks ready to shatter at a touch, and her eyes shimmer like frozen distant stars. An absolute-zero mist coils around her, and delicate ice flowers bloom and crumble with every step she takes. Cinematic cold sacred lighting, sorrowful and breathtaking high-fantasy aesthetic.',
		surface_identity:
			'영원한 겨울의 여왕 Astrielle. 그녀가 지난 자리는 모든 생명이 얼어붙어 침묵에 잠긴다고 전해진다. 세상을 하얗게 얼려버리려는 냉혹한 지배자처럼 보인다.',
		true_identity:
			'아직 그녀의 진실은 안개에 가려져 있다. 다만 그 서리가 침묵시킨 것은 생명이 아니라, 그녀에게 다가서려는 모든 발걸음이라는 사실만이 어렴풋이 비친다.',
		motivation:
			'표면적으로는 자신의 영역에 침입한 자들을 얼려 쫓아내려 한다. 그러나 그 거절에는 정복자의 오만이 아닌, 무언가를 지키려는 다급함이 스며 있다.',
		twist:
			'궁전 문턱에 다다른 탐험대를 향해 Astrielle의 목소리가 처음으로 울린다. "…더는… 오지 마세요." 냉혹한 추방의 명령 같았지만, 마지막 음절이 가늘게 떨리고, 그녀의 발치에 핀 얼음꽃 하나가 채 피기도 전에 바스러진다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '여왕의 발걸음마다 얼음꽃이 피었다가, 만개하기도 전에 부서져 흩어진다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '피기도 전에 부서지는 얼음꽃은, 누구도 곁에 두지 못하는 그녀 자신의 비극이었다.'
		},
		{
			id: 'fs_02',
			hint: '설원의 침묵은 정복의 고요가 아니라, 무언가를 멀리 밀어내는 경계의 벽처럼 느껴진다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '서리의 벽은 공격이 아니라, 다가오지 못하게 막으려는 거절이었다.'
		},
		{
			id: 'fs_03',
			hint: '절대영도의 안개가 탐험대를 해치기보다 자꾸만 돌려세우려 한다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '안개는 그들을 죽이려는 것이 아니라, 다치기 전에 떠나보내려는 손짓이었다.'
		},
		{
			id: 'fs_04',
			hint: '여왕의 명령이 차갑지만, 그 끝마디가 미세하게 떨리고 있다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '떨리는 목소리는 냉혹함이 아니라, 두려움을 감추려는 안간힘이었다.'
		}
	],

	npc_roles: {
		eira: {
			role: '서리의 첫 관찰자',
			arc: '1편: 침묵에 잠긴 설원의 내력을 침착히 살피며, 이 서리가 정복의 흔적이 아닐 가능성을 첫 단서로 기록한다.'
		},
		inka: {
			role: '온기를 가늠하는 자',
			arc: '1편: 얼어붙은 설원에서도 여왕의 거절에 깃든 다급함을 느끼고, 적의 없이 궁전을 올려다본다.'
		},
		bran: {
			role: '길을 여는 길잡이',
			arc: '1편: 안개에 가려진 설원에서 탐험대의 길을 잡으며, 스스로를 가둔 듯한 궁전 안의 존재가 마음에 걸린다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '얼어붙은 설원으로',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'탐험대가 침묵에 잠긴 설원에 들어선다. 안내자 에이라가 발걸음마다 피었다 부서지는 얼음꽃을 보고, 이 침묵이 정복의 고요가 아닐지 모른다는 첫 단서를 기록한다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '밀어내는 안개',
			boss: 'random_boss',
			npc: 'bran',
			summary:
				'브란이 길을 잡지만 절대영도의 안개가 자꾸만 탐험대를 돌려세운다. "해치려는 게 아니라… 우릴 돌려보내려는 것 같군." 길잡이로서 그는 궁전 안의 존재가 스스로 갇혀 있음을 직감한다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '거절에 깃든 다급함',
			boss: 'random_boss',
			npc: 'inka',
			summary:
				'인카가 여왕의 서리를 마주하고도 두려움보다 연민을 느낀다. "…이건 분노가 아니에요. 다급함이에요." 냉혹한 지배자라는 소문과 어긋나는 무언가를 가장 먼저 알아챈다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '경계의 벽',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 설원의 침묵이 정복의 흔적이 아니라 누구도 다가오지 못하게 막으려는 경계의 벽임을 기록한다. 무언가 단순한 냉혹함이 아니다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '더는 오지 마세요',
			boss: 'pool_034',
			npc: 'inka',
			summary:
				'궁전 문턱에서 Astrielle의 목소리가 처음 울린다. "…더는… 오지 마세요." 냉혹한 추방 같았으나 끝이 떨리고, 발치의 얼음꽃이 채 피기도 전에 부서진다. 인카가 그 떨림을 알아채는 순간, 여왕은 폭풍을 일으켜 탐험대를 밀어낸다.'
		}
	],

	act_summary: {
		intro:
			'침묵에 잠긴 설원과 성당 같은 얼음 궁전. 동행단(에이라·인카·브란)이 발걸음마다 부서지는 얼음꽃을 마주한다.',
		rising:
			'밀어내는 안개에 길이 막히고, 인카는 거절 속 다급함을, 에이라는 경계의 벽을 읽어낸다. 냉혹한 지배자라기엔 무언가 어긋난다.',
		climax_finale:
			'문턱에서 들린 떨리는 목소리. "더는 오지 마세요." 냉혹함 끝에 처음으로 두려움의 떨림이 스민다.'
	}
};
