import type { StoryArc } from '$lib/types';

// Astrielle 시리즈 6편 (level 59) — 동행단 막간: 멎은 폭풍 아래에서
export const storyarc_snowy_astrielle_59: StoryArc = {
	id: 'snowy_astrielle_59',
	level: 59,
	chapter_name: {
		korean: '멎은 폭풍 아래에서',
		english: 'Beneath the Stilled Storm',
		japanese: '止んだ嵐の下で',
		chinese: '在止息的风暴之下',
		french: 'Sous la Tempête Apaisée',
		spanish: 'Bajo la Tormenta Detenida',
		vietnamese: 'Dưới Cơn Bão Đã Lặng',
		thai: 'ใต้พายุที่สงบลง',
		hindi: 'थमे हुए तूफ़ान के नीचे'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'폭풍이 잠시 멎은 궁전 안뜰. 절대영도의 안개가 옅어지고, 동행단은 얼음 처마 아래 모여 숨을 고른다. 전반부의 추격이 멈춘 막간, 세 사람은 처음으로 서로에게 묻는다 — 두려움에 갇힌 이에게, 우리는 무엇을 건넬 수 있는가.',
		rule: '막간의 고요. 여왕의 진실은 잠시 미뤄지고, 동행단 각자의 두려움과 거리두기, 그리고 온기에 대한 생각이 안개 옅어진 안뜰에 드러난다.',
		secret:
			'세 사람의 마음은 제각각이면서 하나로 향한다. 에이라는 그녀의 잊힌 이름을 기억하려 하고, 인카는 거절 속 울음에 온기를 건네려 하며, 브란은 스스로를 가둔 그녀를 밖으로 이끌려 한다. 이 막간의 대화가 후반부 진실을 마주할 셋의 마음을 단단히 한다.'
	},

	protagonist_goal: '폭풍이 멎은 막간, 동행단이 두려움과 온기에 대한 서로의 생각을 나누고 마음을 다잡게 하라.',

	act_tone: {
		intro: {
			mood: '옅어지는 안개',
			tension: 1,
			narrative_role:
				'폭풍이 잠시 멎고 절대영도의 안개가 옅어진다. 동행단이 얼음 처마 아래 모여 숨을 고른다.'
		},
		rising: {
			mood: '드러나는 속내',
			tension: 2,
			narrative_role:
				'세 사람은 처음으로 서로에게 묻는다. 두려움에 갇힌 이를 어떻게 대해야 하는가. 기억으로, 온기로, 손길로 — 제각각의 답이 안뜰에 오간다.'
		},
		climax_finale: {
			mood: '막간의 끝',
			tension: 4,
			narrative_role:
				'멀리 궁전 첨탑 위로 Astrielle의 그림자가 배경처럼 잠시 스친다. 폭풍이 다시 일 기미가 보이고, 막간이 끝나며 셋은 각자의 답을 안고 다시 안으로 향한다.'
		}
	},

	final_boss: {
		id: 'AstrielleWinterSovereign',
		name: 'Astrielle',
		appearance:
			'A distant silhouette of a majestic platinum-haired woman watching from a high palace spire as the blizzard briefly stills, three companions resting beneath an ice eave below in the thinning absolute-zero mist. Her fragile frost gown and frozen-star eyes are barely visible through the haze. Faint ice flowers bloom on the railings. Cinematic quiet cold lighting, intimate character-focused high-fantasy aesthetic.',
		surface_identity:
			'막간의 고요 속, 첨탑 위에서 멀리 동행단을 지켜보는 겨울 여왕. 그녀는 다가오지도, 완전히 멀어지지도 못한 채 그저 바라본다.',
		true_identity:
			'이 막간은 보스보다 동행단의 마음에 초점이 맞춰진다 — 셋이 두려움과 온기를 어떻게 여기는가가, 후반부 진실의 무게를 정한다.',
		motivation:
			'폭풍을 멈춘 것은 잠시 숨을 고를 틈을 준 것일까, 아니면 멀리서나마 온기를 바라보고 싶었던 것일까. 그녀는 첨탑 위에서 내려오지 못한 채 동행단을 응시한다.',
		twist:
			'막간이 끝날 무렵, 첨탑 위 Astrielle의 그림자가 동행단을 향해 한 걸음 내딛다가, 이내 멈춰 서서 돌아선다. 다가오고 싶으나 다가오지 못하는 그 망설임을 멀리서 본 셋은, 각자의 답을 가슴에 품고 다시 궁전 안으로 향한다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '에이라가 그날까지 해독한 여왕의 이름의 조각들을 안개 속에서 가만히 되뇐다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '되뇐 이름의 조각들은, 후반부 그녀의 잊힌 과거를 온전히 읽어낼 에이라의 토대가 되었다.'
		},
		{
			id: 'fs_02',
			hint: '인카가 옅어진 안개 속에서 첨탑 위의 그림자를 향해 가만히 손을 내민다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '멀리 내민 손은, 끝내 그 거절 속 울음에 온기를 건넬 인카의 마음의 씨앗이었다.'
		},
		{
			id: 'fs_03',
			hint: '브란이 안에서 잠긴 문 하나를 만지작거리며, 어떻게 그녀를 밖으로 이끌지 가늠한다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '가늠한 길은, 스스로를 가둔 여왕을 밖으로 이끌어낼 브란의 결심으로 이어졌다.'
		},
		{
			id: 'fs_04',
			hint: '멎었던 폭풍이 첨탑 위에서 다시 일 기미를 보이며 멀리서 술렁인다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '술렁이는 폭풍은, 막간이 끝나고 다시 진실을 향해 나아가야 함을 알리는 신호였다.'
		}
	],

	npc_roles: {
		eira: {
			role: '이름을 되뇌는 자',
			arc: '6편(막간): 그날까지 해독한 이름의 조각들을 되뇌며, 자신이 왜 잊힌 이를 끝까지 기억하려는지 동료들에게 털어놓는다.'
		},
		inka: {
			role: '온기를 말하는 자',
			arc: '6편(막간): 거절이 실은 울음이라 믿는 까닭을 나누며, 두려워하는 이에게 건넬 수 있는 것은 결국 온기뿐이라는 자신의 마음을 드러낸다.'
		},
		bran: {
			role: '문을 가늠하는 길잡이',
			arc: '6편(막간): 스스로를 가둔 이를 어떻게 밖으로 이끌어낼지 동료들과 의논하며, 길잡이로서의 다짐을 처음으로 입에 올린다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '얼음 처마 아래',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'폭풍이 잠시 멎고 안개가 옅어진다. 동행단이 얼음 처마 아래 모여 숨을 고른다. 에이라가 그날까지 해독한 여왕의 이름의 조각들을 안개 속에서 가만히 되뇐다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '거절은 울음이다',
			boss: 'random_boss',
			npc: 'inka',
			summary:
				'인카가 첨탑 위 그림자를 향해 손을 내밀며 입을 연다. "저 폭풍은 화내는 게 아니라 우는 거예요. 두려워하는 사람에게 건넬 수 있는 건… 결국 온기뿐이잖아요." 자신의 마음을 나눈다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '밖으로 이끄는 법',
			boss: 'random_boss',
			npc: 'bran',
			summary:
				'브란이 안에서 잠긴 문 하나를 만지작거린다. "길 잃은 이는 집으로 데려가면 돼. 그런데 스스로를 가둔 이는… 어떻게 밖으로 이끌어야 할까." 길잡이로서의 다짐을 처음 입에 올린다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '왜 기억하는가',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 자신이 왜 잊힌 이름을 끝까지 기억하려는지 털어놓는다. "이름이 잊히면, 그 사람의 슬픔도 함께 사라져요. 적어도 누군가는 기억해야죠." 셋의 마음이 안뜰에서 단단해진다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '한 걸음, 그리고 돌아섬',
			boss: 'pool_034',
			npc: 'inka',
			summary:
				'막간이 끝날 무렵, 첨탑 위 Astrielle의 그림자가 한 걸음 내딛다 멈춰 돌아선다. 다가오고 싶으나 다가오지 못하는 그 망설임을 멀리서 본 셋은, 각자의 답 — 기억, 온기, 손길 — 을 안고 다시 궁전 안으로 향한다.'
		}
	],

	act_summary: {
		intro: '폭풍이 멎은 막간, 옅어진 안개 아래 동행단이 숨을 고른다. 에이라가 이름의 조각을 되뇐다.',
		rising: '온기를 말하는 인카, 밖으로 이끄는 법을 묻는 브란, 기억의 이유를 털어놓는 에이라. 세 사람의 마음이 드러난다.',
		climax_finale: '첨탑 위에서 한 걸음 내딛다 돌아서는 그림자. 셋은 각자의 답을 안고 후반부의 진실을 향해 다시 나아간다.'
	}
};
