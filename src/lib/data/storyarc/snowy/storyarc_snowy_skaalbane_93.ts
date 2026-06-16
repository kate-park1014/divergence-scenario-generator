import type { StoryArc } from '$lib/types';

// Skaalbane 시리즈 10편 (level 93) — 합류하라 (시리즈 피날레)
export const storyarc_snowy_skaalbane_93: StoryArc = {
	id: 'snowy_skaalbane_93',
	level: 93,
	chapter_name: {
		korean: '합류하라',
		english: 'Join Us',
		japanese: '我らに加われ',
		chinese: '加入我们',
		french: 'Joignez-vous à Nous',
		spanish: 'Únete a Nosotros',
		vietnamese: 'Hãy Gia Nhập',
		thai: 'จงร่วมกับเรา',
		hindi: 'हमसे मिल जाओ'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'시리즈의 끝. 흡수된 얼굴도, 온기의 갈구도, 박동하는 핵도 모두 마주한 끝에 탐험대는 탑의 핵 그 자체 앞에 선다. 푸른빛 섬광이 심장이 터질 듯 격렬해진다.',
		rule: '핵에 닿는 순간 Skaalbane의 진짜 형상이 드러난다. 그것은 무덤도 영웅도 아닌, 죽음으로 빚어진 거대한 심장이다.',
		secret:
			'Skaalbane는 혹독한 추위에 갇힌 바이킹들의 절규와 죽어가는 의식을 먹이 삼아 자란 기생 정신체다. 수천 년간 난파선과 시신을 흡수해온 그 핵은, 차갑게 얼어붙은 수많은 얼굴로 뒤덮인 거대한 얼음 심장이다.'
	},

	protagonist_goal: '탑의 핵에 닿아, 죽음을 먹고 자란 Skaalbane의 진짜 형상과 맞서라.',

	act_tone: {
		intro: {
			mood: '터질 듯한 섬광',
			tension: 1,
			narrative_role: '핵의 푸른빛 섬광이 심장이 터질 듯 격렬해진다. 마지막 한 겹이 곧 벗겨진다.'
		},
		rising: {
			mood: '회수되는 흡수',
			tension: 3,
			narrative_role:
				'흡수된 얼굴들도, 온기의 미끼도, 굶주림의 맥박도 — 시리즈 내내 본 모든 것이 이 핵 하나로 수렴한다.'
		},
		climax_finale: {
			mood: '광기의 합류',
			tension: 5,
			narrative_role:
				'탑이 껍질을 벗듯 갈라지고, 수많은 얼굴로 뒤덮인 거대한 얼음 심장이 드러난다. 수천 목소리가 뒤섞인 절규가 설원을 뒤흔든다.'
		}
	},

	final_boss: {
		id: 'EchoHarvester_Skaalbane_V1',
		name: 'Skaalbane',
		appearance:
			'The tower splitting open like a shell as rusted iron and wooden splinters scatter, revealing a colossal heart of ice covered in countless frozen Viking faces. Every eye gleams toward the intruders at once, frozen tendrils of ice erupting outward to seize their warmth. Cinematic climactic shattering blue blizzard, horrific and tragic high-fantasy aesthetic.',
		surface_identity:
			'난파된 배가 얼어붙은 거대한 잔해탑, 혹은 얼음 감옥에 갇힌 영웅의 무덤처럼 여겨졌던 존재.',
		true_identity:
			'혹독한 추위 속에 갇힌 바이킹들의 절규와 죽어가는 의식을 먹이 삼아 자라난 기생하는 정신체, Skaalbane다. 수천 년에 걸쳐 난파된 배들과 얼어붙은 시신들을 흡수하며 성장해온, 살아있는 자들의 따뜻한 생명력을 갈취하려는 차가운 공포 그 자체다.',
		motivation:
			'영겁의 시간 동안 혹한 속에서 홀로 고통받으며 생명력을 갈구해 왔다. 살아있는 자들의 뜨거운 감정과 따뜻한 기억을 집어삼켜, 자신의 존재를 확장하고 영원한 고독에서 벗어나고자 탐험대를 유인한다.',
		twist:
			'탐험대가 얼음 탑의 핵에 가까스로 도달했을 때, 내부의 푸른빛 섬광이 심장이 박동하듯 격렬해진다. 탑을 이루던 녹슨 철 조각과 나무 파편들이 사방으로 흩뿌려지고, 거대한 얼음 기둥이 껍질을 벗듯 갈라진다. 그 안에서 드러나는 것은 차갑게 얼어붙은 수많은 바이킹들의 얼굴 형상으로 뒤덮인 거대한 얼음 심장이다. 모든 얼굴의 눈동자가 동시에 탐험대를 향해 번뜩이며, 수천 개의 목소리가 뒤섞인 광기 어린 절규가 설원을 뒤흔든다. "…우리의 고통을 느껴라… 우리의 차가운 심장이 너희의 온기를 갈망한다…! 우리에게… 합류하라…!" 얼음 심장에서 뻗어 나온 얼음 촉수들이 탐험대의 온기를 갈취하려는 듯 맹렬히 조여온다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '탑을 이루던 철 조각과 나무 파편이 미세하게 떨리며 들뜨기 시작한다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '들뜬 잔해는 핵이 껍질을 벗어던질 전조였다 — 탑은 곧 본모습을 드러낸다.'
		},
		{
			id: 'fs_02',
			hint: '얼음 속 모든 얼굴의 감긴 눈이 미세하게 떨린다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '감긴 눈들은 곧 동시에 떠질 참이었다 — 모두가 한 심장의 눈동자였다.'
		},
		{
			id: 'fs_03',
			hint: '핵 주변의 얼음에서 가느다란 촉수 같은 줄기가 돋아나기 시작한다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '돋아난 줄기는 곧 온기를 갈취할 얼음 촉수였다 — 흡수의 손길이었다.'
		},
		{
			id: 'fs_04',
			hint: '수천 목소리가 하나의 단어를 향해 점점 겹쳐 울리기 시작한다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '겹쳐 울린 단어는 "합류하라"였다 — 흡수의 끝, 모두를 하나로 만들려는 부름.'
		}
	],

	npc_roles: {
		eira: {
			role: '진실을 매듭짓는 자',
			arc: '10편: 시리즈 내내 해독해온 흡수의 진실을 매듭짓고, Skaalbane의 정체와 흡수된 모든 이름을 기록에 새긴다.'
		},
		inka: {
			role: '합류를 거부하는 자',
			arc: '10편: "합류하라"는 부름에 맞서, 흡수된 자들의 고통에 공감하면서도 산 자의 온기를 끝까지 지킨다. (3인 throughline 수렴)'
		},
		frost: {
			role: '온기를 지키는 방벽',
			arc: '10편: 온기를 갈취하려는 얼음 촉수로부터 동료들의 따스함을 끝까지 막아내는 방벽이 된다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '터질 듯한 핵',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'탐험대가 시리즈의 끝, 탑의 핵 앞에 선다. 에이라가 푸른빛 섬광이 심장이 터질 듯 격렬해지고 잔해가 들뜨기 시작함을 본다. 마지막 한 겹이 곧 벗겨진다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '떨리는 눈꺼풀',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 얼음 속 모든 얼굴의 감긴 눈이 미세하게 떨림을 본다. 곧 동시에 떠질 참이다. "전부… 하나의 심장의 눈동자야. 곧 깨어나."'
		},
		{
			order: 3,
			act: 'rising',
			title: '돋아나는 촉수',
			boss: 'random_boss',
			npc: 'frost',
			summary:
				'프로스트가 핵 주변 얼음에서 가느다란 촉수 같은 줄기가 돋아나는 것을 본다. 온기를 갈취할 손길임을 알고 동료들 앞에 방벽처럼 선다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '겹쳐지는 부름',
			boss: 'random_boss',
			npc: 'inka',
			summary:
				'인카가 수천 목소리가 하나의 단어로 겹쳐 울리기 시작함을 듣는다 — "합류하라." 흡수된 자들의 고통에 공감하면서도, 그 부름을 거부하기로 마음을 다잡는다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '우리에게 합류하라',
			boss: 'pool_108',
			npc: 'inka',
			summary:
				'탑이 껍질을 벗듯 갈라지고 수많은 얼굴로 뒤덮인 거대한 얼음 심장이 드러난다. 모든 눈동자가 동시에 번뜩이며 수천 목소리의 절규가 터진다. "우리의 고통을 느껴라… 우리의 차가운 심장이 너희의 온기를 갈망한다…! 우리에게… 합류하라…!" 얼음 촉수가 온기를 갈취하려 조여오고, 3인의 여정이 수렴하는 최종 결전이 벌어진다.'
		}
	],

	act_summary: {
		intro: '핵의 푸른빛 섬광이 심장처럼 격렬해지고 잔해가 들뜬다. 에이라가 마지막 한 겹을 읽는다.',
		rising: '떨리는 눈꺼풀을 본 에이라, 돋아나는 촉수를 막는 프로스트, 부름을 거부하는 인카. 흡수의 모든 진실이 핵으로 수렴한다.',
		climax_finale: '"우리에게 합류하라!" 수많은 얼굴의 얼음 심장이 드러나고, 온기를 갈취하는 촉수와의 최종 결전 — 시리즈 피날레.'
	}
};
