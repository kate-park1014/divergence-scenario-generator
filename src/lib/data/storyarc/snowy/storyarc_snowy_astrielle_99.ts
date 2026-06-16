import type { StoryArc } from '$lib/types';

// Astrielle 시리즈 10편 (level 99) — 피날레: 그리웠던 온기
export const storyarc_snowy_astrielle_99: StoryArc = {
	id: 'snowy_astrielle_99',
	level: 99,
	chapter_name: {
		korean: '그리웠던 온기',
		english: 'The Warmth She Longed For',
		japanese: '恋しかった温もり',
		chinese: '思念已久的温暖',
		french: 'La Chaleur qu Elle Désirait',
		spanish: 'La Calidez que Anhelaba',
		vietnamese: 'Hơi Ấm Nàng Hằng Mong Nhớ',
		thai: 'ไออุ่นที่นางโหยหา',
		hindi: 'वह गर्माहट जिसकी उसे लालसा थी'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'시리즈의 끝. 잊힌 이름도, 물려받은 힘도, 스스로 채운 사슬도 모두 마주한 Astrielle가 옥좌의 방 가장 깊은 곳에서 탐험대를 기다린다. 절대영도의 안개가 그녀를 마지막 벽처럼 둘러싸고 있다.',
		rule: '이 마지막 순간, 그녀의 거절은 가장 거센 폭풍으로 터져 나온다. 그러나 그것은 공격이 아니라, 가까이 오지 말라는 간절한 울음이다.',
		secret:
			'Astrielle가 진정 두려워한 것은 온기 그 자체가 아니었다. 그녀는 그 온기를 누구보다 그리워하면서도, 제 힘으로 그것을 또다시 얼려버릴까 봐 두려워했을 뿐이다.'
	},

	protagonist_goal: 'Astrielle의 마지막 폭풍을 마주하고, 거절의 형태를 빌린 그녀의 울음을 끝내 온기로 녹여 안식으로 보내라.',

	act_tone: {
		intro: {
			mood: '마지막 벽 앞의 적막',
			tension: 2,
			narrative_role:
				'옥좌의 방 가장 깊은 곳. 절대영도의 안개가 마지막 벽처럼 그녀를 둘러싼다. Astrielle가 모든 진실을 안은 채 조용히 탐험대를 기다린다.'
		},
		rising: {
			mood: '수렴하는 마음',
			tension: 4,
			narrative_role:
				'시리즈 내내의 모든 단서가 이 순간으로 수렴한다. 에이라가 이름을, 브란이 손길을, 인카가 온기를 건넨다. 그녀의 거절이 마지막으로 가장 거세진다.'
		},
		climax_finale: {
			mood: '비극의 정점에서 피어나는 온기',
			tension: 5,
			narrative_role:
				'거절이 가장 거센 폭풍으로 터지지만, 그것은 공격이 아닌 울음이었다. 쓰러진 그녀의 성이 녹아내리며, 그녀의 마지막 속삭임이 모든 비극을 안식으로 바꾼다.'
		}
	},

	final_boss: {
		id: 'AstrielleWinterSovereign',
		name: 'Astrielle',
		appearance:
			'A majestic platinum-haired woman at the heart of a cathedral-like ice palace, unleashing a vast sorrowful blizzard that is a cry rather than an attack, her fragile frost gown unraveling and her frozen-star eyes spilling crystallized tears. Around her the palace begins to melt, frozen tear crystals falling as warmth seeps in at last. Ice flowers bloom one final time. Cinematic cold-to-warm climactic lighting, tragic and tender high-fantasy aesthetic.',
		surface_identity:
			'마지막으로 탐험대를 기다리는 겨울 여왕. 그녀는 가장 거센 폭풍을 일으켜 그들을 밀어내려 한다.',
		true_identity:
			'본의 아니게 폭주하는 강력한 얼음의 힘을 물려받은 비운의 계승자. 사랑하는 이들을 제 힘으로 다치게 할까 봐 두려워, 스스로를 거대한 얼음 성에 가두고 감정을 얼려버린 존재. 그녀가 진정 그리워한 것은 온기였다.',
		motivation:
			'탐험대가 다가오는 것이 두렵다. 자신의 힘이 또다시 누군가를 해치기 전에 그들을 안식처 밖으로 몰아내어 지키고 싶다. 그러나 그 두려움 깊은 곳에는, 그토록 밀어낸 온기를 사실은 아주 많이 그리워하는 마음이 있다.',
		twist:
			'가까이 오지 마… 제발. 아스트리엘은 아름답지만 슬픈 목소리로 외치며 더 강력한 얼음 폭풍을 불러일으킨다. 그것은 공격이 아닌, 그녀의 간절한 거절이자 울음소리였다. 쓰러진 후 그녀의 성이 녹아내리기 시작할 때, 눈물이 얼어붙은 결정을 떨어뜨리며 속삭인다 — 따뜻해. 너희의 온기가… 두려웠지만, 사실은… 아주 많이 그리웠어.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '옥좌의 방을 둘러싼 안개가, 마지막 벽이자 그녀가 끝내 넘지 못한 두려움처럼 짙다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '마지막 벽 같던 안개는, 온기를 그리워하면서도 차마 받아들이지 못한 그녀의 두려움이었다.'
		},
		{
			id: 'fs_02',
			hint: '에이라가 그녀의 잊힌 이름 Astrielle를 또렷이 부르자, 폭풍이 잠시 멎는다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '이름이 불린 순간의 멎음은, 잊히지 않았다는 사실이 그녀에게 닿은 첫 온기였다.'
		},
		{
			id: 'fs_03',
			hint: '가장 거센 폭풍이 일지만, 그 굉음은 1편부터의 그 울음의 음색을 그대로 닮아 있다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '울음을 닮은 굉음은, 그 폭풍이 처음부터 공격이 아닌 거절이자 울음이었음을 확증했다.'
		},
		{
			id: 'fs_04',
			hint: '그녀의 뺨을 타고 흐른 무언가가, 떨어지기도 전에 얼어 결정이 되어 바닥에 구른다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '얼어붙은 눈물의 결정은, 성이 녹아내리며 떨어질 그녀의 마지막 고백의 전조였다.'
		}
	],

	npc_roles: {
		eira: {
			role: '이름을 부르는 자 (10편 앵커)',
			arc: '10편: 그녀의 잊힌 이름 Astrielle를 끝까지 기억하고 또렷이 불러, 잊히지 않았음을 증명하는 마지막 앵커로서 비극을 안식으로 닫는다.'
		},
		inka: {
			role: '온기를 건네는 자',
			arc: '10편: 거절이 울음임을 처음부터 알아챈 자로서, 폭풍 한가운데로 들어가 끝내 그녀에게 온기를 건넨다. 그 온기가 그녀의 마지막 고백을 이끌어낸다.'
		},
		bran: {
			role: '밖으로 이끄는 길잡이',
			arc: '10편: 스스로를 가둔 그녀에게 손을 내밀어, 얼음 성 밖 안식으로 그녀를 이끈다. (3인 throughline 수렴)'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '마지막 벽 앞에서',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'탐험대가 시리즈의 끝, 옥좌의 방 가장 깊은 곳에 다다른다. 절대영도의 안개가 마지막 벽처럼 Astrielle를 둘러싼다. 에이라가 모든 진실을 안고 그녀 앞에 선다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '당신은 잊히지 않았어요',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 그녀의 잊힌 이름을 또렷이 부른다. "Astrielle. 당신은 잊히지 않았어요." 그 순간 폭풍이 잠시 멎는다. 잊히지 않았다는 사실이 그녀에게 닿은 첫 온기였다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '제 손을 잡아요',
			boss: 'random_boss',
			npc: 'bran',
			summary:
				'브란이 스스로를 가둔 그녀에게 손을 내민다. "길 잃은 사람은 집으로 데려가는 게 제 일이에요. 이제… 제 손을 잡고 밖으로 나와요." 길잡이로서 그녀를 안식으로 이끌려 한다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '울음을 닮은 굉음',
			boss: 'random_boss',
			npc: 'inka',
			summary:
				'가장 거센 폭풍이 일지만, 인카는 그 굉음이 1편부터의 그 울음의 음색 그대로임을 안다. "괜찮아요. 이건 우는 거예요." 폭풍 한가운데로 들어가 온기를 건네려 한다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '사실은, 아주 많이 그리웠어',
			boss: 'pool_034',
			npc: 'inka',
			summary:
				'가까이 오지 마… 제발. Astrielle가 아름답지만 슬픈 목소리로 외치며 더 강력한 얼음 폭풍을 불러일으킨다. 그것은 공격이 아닌, 간절한 거절이자 울음소리였다. 인카의 온기와 에이라가 부른 이름, 브란이 내민 손이 수렴하며 그녀가 쓰러지고, 성이 녹아내리기 시작할 때 눈물이 얼어붙은 결정을 떨어뜨리며 속삭인다 — 따뜻해. 너희의 온기가… 두려웠지만, 사실은… 아주 많이 그리웠어. 3인의 여정이 수렴하며 그녀를 안식으로 보내는 시리즈 피날레.'
		}
	],

	act_summary: {
		intro: '시리즈의 끝. 마지막 벽 같은 안개 속에서 Astrielle가 모든 진실을 안고 조용히 기다린다.',
		rising: '이름을 부르는 에이라, 손을 내미는 브란, 울음을 알아듣는 인카. 모든 단서가 이 순간으로 수렴한다.',
		climax_finale:
			'가까이 오지 말라는 외침은 공격이 아닌 울음이었다. 쓰러진 그녀의 성이 녹아내리며 속삭인다 — 너희의 온기가 두려웠지만, 사실은 아주 많이 그리웠어. 3인의 여정이 수렴하는 시리즈 피날레.'
	}
};
