import type { StoryArc } from '$lib/types';

// Skaalbane 시리즈 1편 (level 3) — 첫 조우: 얼어붙은 난파 잔해탑
export const storyarc_snowy_skaalbane_3: StoryArc = {
	id: 'snowy_skaalbane_3',
	level: 3,
	chapter_name: {
		korean: '얼음에 갇힌 잔해탑',
		english: 'The Wreck-Tower Locked in Ice',
		japanese: '氷に閉ざされた残骸の塔',
		chinese: '冰封的残骸之塔',
		french: 'La Tour d Épaves Enfermée dans la Glace',
		spanish: 'La Torre de Restos Atrapada en el Hielo',
		vietnamese: 'Tháp Xác Tàu Bị Khóa Trong Băng',
		thai: 'หอซากเรือที่ถูกขังในน้ำแข็ง',
		hindi: 'बर्फ़ में जकड़ा मलबे का स्तंभ'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'눈보라가 그치지 않는 설원 깊은 곳. 지평선 위로 거대한 그림자가 솟아 있다. 고대 바이킹 배들이 켜켜이 난파되어 얼어붙은 채 하늘을 향해 쌓인 잔해탑이다. 탐험대는 "얼음 속에 잠든 영웅의 무덤"이라는 소문을 듣고 이곳에 올랐다.',
		rule: '잔해탑 안에서 새어 나오는 푸른 빛은 잠든 영웅이 남긴 유물의 광채라 여겨진다. 탑에 다가가는 자는 그 영광에 경의를 표해야 한다고 전해진다.',
		secret:
			'그 빛은 유물의 광채가 아니다. 얼어붙은 선체와 시신 사이에서 무언가가 살아 숨 쉬듯 천천히 박동하고 있다. 잔해탑은 무덤이 아니라, 무언가를 품은 거대한 얼음 둥지다.'
	},

	protagonist_goal: '얼음에 갇힌 거대한 난파 잔해탑의 정체와, 그 안에서 새어 나오는 푸른 빛의 근원을 확인하라.',

	act_tone: {
		intro: {
			mood: '경외와 적막',
			tension: 1,
			narrative_role: '눈보라 너머로 하늘을 찌르는 잔해탑이 모습을 드러낸다. 영웅의 무덤이라기엔 너무도 거대하고, 너무도 조용하다.'
		},
		rising: {
			mood: '의아함과 한기',
			tension: 3,
			narrative_role:
				'얼어붙은 뱃머리와 부서진 방패들, 그 사이로 새어 나오는 푸른 빛. 가까이 갈수록 알 수 없는 한기가 살갗을 파고든다.'
		},
		climax_finale: {
			mood: '첫 박동의 전율',
			tension: 5,
			narrative_role:
				'탐험대가 탑의 입구에 다다르자, 깊은 곳에서 푸른 빛이 한 번 크게 번뜩인다. 마치 거대한 심장이 한 번 박동한 듯, 얼음 전체가 미세하게 떨린다.'
		}
	},

	final_boss: {
		id: 'EchoHarvester_Skaalbane_V1',
		name: 'Skaalbane',
		appearance:
			'A colossal tower of ancient Viking longships shipwrecked and frozen together, jutting toward a storm-dark sky in a relentless blizzard. Splintered hulls, broken shields, and ice-encased oars layered like a frozen monument. Deep within the wreckage a faint blue light glows and pulses softly, leaking through cracks in the ice. Cinematic awe-inspiring snowy lighting, ominous high-fantasy aesthetic.',
		surface_identity:
			'얼음 속에 잠든 영웅의 무덤으로 알려진 거대한 난파 잔해탑. 안에서 새어 나오는 푸른 빛은 영웅이 남긴 유물의 광채라 전해진다.',
		true_identity:
			'아직은 그저 켜켜이 얼어붙은 고대 난파선의 무더기처럼 보인다. 그러나 깊은 곳에서 박동하는 푸른 빛은, 이것이 단순한 무덤이 아님을 어렴풋이 암시한다.',
		motivation:
			'탑은 침묵 속에 잠들어 있다. 그러나 그 한기는 다가오는 산 자들의 온기를 향해 천천히, 그리고 집요하게 손을 뻗는 듯하다.',
		twist:
			'탐험대가 탑의 입구에 닿자, 깊은 곳의 푸른 빛이 심장처럼 한 번 크게 박동한다. 얼음 전체가 떨리고, 어디선가 아주 희미하게 여러 목소리가 뒤섞인 신음이 들려온다. "…춥다… 너무… 차갑다…" 한기가 마치 살아있는 손길처럼 탐험대의 온기를 향해 스며든다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '잔해탑 깊은 곳에서 푸른 빛이 일정한 간격으로 박동하듯 번뜩인다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그 박동은 유물의 광채가 아니라, 탑 안에서 살아 숨 쉬는 무언가의 심장 박동이었다.'
		},
		{
			id: 'fs_02',
			hint: '탑에 다가갈수록 정상적인 추위와는 다른, 안으로 파고드는 기묘한 한기가 느껴진다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그 한기는 단순한 추위가 아니라, 산 자의 온기를 향해 뻗어오는 무언가의 손길이었다.'
		},
		{
			id: 'fs_03',
			hint: '얼어붙은 선체 표면에 수많은 이름과 룬이 빼곡히 새겨져 있다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그 이름들은 이곳에서 죽어간 바이킹들의 것이었다. 탑은 그들의 무덤이자, 무언가의 먹이였다.'
		},
		{
			id: 'fs_04',
			hint: '바람 소리에 섞여, 마치 여러 사람이 동시에 내쉬는 듯한 희미한 신음이 들린다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그 신음은 얼음에 갇힌 채 죽어가는 자들의 절규였다. 그리고 그 절규를 먹는 무언가가 깨어나고 있었다.'
		}
	],

	npc_roles: {
		eira: {
			role: '잔해의 기록자',
			arc: '1편: 동행단의 안내자로서 잔해탑에 새겨진 이름과 룬을 침착히 관찰하고, 난파의 첫 기록을 더듬어 읽는다.'
		},
		inka: {
			role: '신음을 듣는 자',
			arc: '1편: 바람에 섞인 희미한 신음을 가장 먼저 알아채고, 그 안에 갇힌 누군가의 외로움을 직감한다.'
		},
		frost: {
			role: '한기를 감지하는 자',
			arc: '1편: 평범한 추위와 다른 기묘한 한기를 살갗으로 느끼고, 그것이 온기를 향해 뻗어온다는 사실에 가장 먼저 긴장한다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '하늘을 찌르는 잔해탑',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'탐험대가 눈보라를 헤치고 거대한 난파 잔해탑 앞에 선다. 안내자 에이라가 얼어붙은 선체에 새겨진 이름과 룬을 발견하고 기록을 시작한다. 깊은 곳에서 푸른 빛이 박동하듯 번뜩인다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '뼛속으로 파고드는 한기',
			boss: 'random_boss',
			npc: 'frost',
			summary:
				'탑에 다가갈수록 프로스트가 평범한 추위와 다른 기묘한 한기를 느낀다. "이건… 그냥 추운 게 아니야. 뭔가가… 우리 온기를 끌어당기고 있어." 가장 먼저 위험을 직감한다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '바람에 섞인 신음',
			boss: 'random_boss',
			npc: 'inka',
			summary:
				'인카가 바람 소리에 섞인 희미한 신음을 알아챈다. 마치 여러 사람이 동시에 내쉬는 듯한 소리. "…저 안에, 누군가 있어요. 혼자가 아니라… 아주 많은 누군가가."'
		},
		{
			order: 4,
			act: 'rising',
			title: '빼곡히 새겨진 이름들',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 선체에 빼곡히 새겨진 수많은 이름과 룬을 해독한다. 이것은 영웅 한 명의 무덤이 아니라, 수많은 바이킹이 잠든 거대한 묘지였다. 단순한 잔해가 아니다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '첫 박동',
			boss: 'pool_108',
			npc: 'frost',
			summary:
				'탐험대가 탑의 입구에 닿자 깊은 곳의 푸른 빛이 심장처럼 크게 박동한다. 얼음 전체가 떨리고 여러 목소리의 신음이 새어 나온다. "…춥다… 너무 차갑다…" 한기가 살아있는 손길처럼 탐험대의 온기를 향해 스며들고, 프로스트가 가장 먼저 그 위험을 직감하며 첫 전투를 맞는다.'
		}
	],

	act_summary: {
		intro: '눈보라 너머, 고대 난파선이 켜켜이 얼어붙은 거대한 잔해탑. 에이라가 새겨진 이름을 기록하고, 깊은 곳에서 푸른 빛이 박동한다.',
		rising: '기묘한 한기를 느끼는 프로스트, 신음을 듣는 인카, 빼곡한 이름을 해독하는 에이라. 영웅의 무덤이라기엔 너무 많은 죽음이 잠들어 있다.',
		climax_finale: '탑 입구에서 푸른 빛이 심장처럼 박동하고, 여러 목소리의 신음과 함께 한기가 산 자의 온기를 향해 뻗어온다.'
	}
};
