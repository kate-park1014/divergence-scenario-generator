import type { StoryArc } from '$lib/types';

// Bellus 시리즈 6편 (level 58) — 동행단 막간: 멈춘 정거장의 밤
export const storyarc_snowy_bellus_58: StoryArc = {
	id: 'snowy_bellus_58',
	level: 58,
	chapter_name: {
		korean: '멈춘 정거장의 밤',
		english: 'A Night at the Halted Station',
		japanese: '止まった駅の夜',
		chinese: '停滞车站之夜',
		french: 'Une Nuit à la Gare Figée',
		spanish: 'Una Noche en la Estación Detenida',
		vietnamese: 'Đêm Ở Nhà Ga Ngưng Đọng',
		thai: 'ค่ำคืนที่สถานีอันหยุดนิ่ง',
		hindi: 'ठहरे स्टेशन की रात'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'추격이 잠시 멎는다. 탐험대는 시간이 멈춘 낡은 정거장에 잠시 머문다. 멈춘 시계탑 아래, 떨어지다 굳은 눈송이 사이에서 세 동행단이 처음으로 마주 앉는다. 박제와 흘려보냄, 기억과 시간에 대해 — 셋은 비로소 서로의 생각을 나눈다.',
		rule: '막간의 밤. 보스의 진실과 추격은 잠시 미뤄지고, 멈춘 시간을 두고 세 사람이 품은 서로 다른 마음이 정거장의 정적 속에 드러난다.',
		secret:
			'세 사람의 시간관은 제각각이다. 에이라는 기록으로 남겨 잊히지 않게 하려 하고, 글라스는 흐르고 끝나는 것을 담담히 받아들이며, 힐드는 끝을 기리는 것이야말로 진짜 추모라 믿는다. 이 밤의 대화가 후반부 벨루스의 진실을 마주할 셋의 마음을 단단히 한다.'
	},

	protagonist_goal: '멈춘 정거장에서 잠시 숨을 고르며, 동행단이 박제와 흘려보냄에 대한 서로의 마음을 나누게 하라.',

	act_tone: {
		intro: {
			mood: '잦아드는 추격',
			tension: 1,
			narrative_role: '추격이 잠시 멎고, 멈춘 정거장에 세 사람이 마주 앉는다. 떨어지다 굳은 눈송이만이 그들을 지켜본다.'
		},
		rising: {
			mood: '드러나는 시간관',
			tension: 2,
			narrative_role:
				'멈춘 시계탑 아래에서 셋은 처음으로 묻는다. 기억은 박제되어야 하는가, 흘려보내져야 하는가. 제각각의 답이 조용히 오간다.'
		},
		climax_finale: {
			mood: '막간의 끝',
			tension: 4,
			narrative_role:
				'멀리서 거꾸로 도는 시계바늘 소리가 가까워진다. 벨루스의 유령 열차가 정거장 끝을 배경처럼 스쳐 지난다. 막간이 끝나고 추격이 다시 시작된다.'
		}
	},

	final_boss: {
		id: 'ChronosStitcher_V0',
		name: 'Bellus',
		appearance:
			'A vast obsidian-and-brass ghost train passing distantly behind a frozen old railway station at night, its embedded clock hands turning backward, silvery ice needles trailing faintly in its wake. In the foreground, a stopped clock tower and snowflakes hanging suspended in the air. The train is background, distant and quiet. Cinematic warm-and-cold contrast frozen lighting, quiet character-focused high-fantasy aesthetic.',
		surface_identity:
			'멈춰버린 세상의 선로 위를 달리는 유령 열차. 그에게 닿은 자들은 영원히 얼어붙은 채 가장 아름다운 순간에 박제된다.',
		true_identity:
			'이 밤은 보스의 진실이 잠시 미뤄지고 동행단의 마음에 초점이 맞춰진다 — 셋이 박제와 흘려보냄을 어떻게 보는가가 후반부 진실의 무게를 정한다.',
		motivation:
			'멀리 정거장 끝을 스쳐 지나는 열차처럼, 벨루스의 존재는 이 밤 배경에 머문다. 그러나 그 거꾸로 도는 바늘 소리가 셋의 대화에 묘한 무게를 더한다.',
		twist:
			'대화가 깊어질 무렵, 멀리서 거꾸로 도는 시계바늘 소리가 가까워진다. 벨루스의 유령 열차가 정거장 끝을 소리 없이 스쳐 지난다. 박제된 미소들이 창마다 그들을 바라본다. 셋은 각자의 답을 가슴에 품고, 다시 그 열차를 향해 나아간다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '에이라가 멈춘 정거장 시계를 올려다보며 "멈춘 건 평화로워 보여도, 아무것도 기억하지 못한다"고 중얼거린다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '에이라의 말은 후반부, 박제된 기억을 읽어내고 이름을 되찾을 그의 역할의 복선이었다.'
		},
		{
			id: 'fs_02',
			hint: '글라스가 떨어지다 굳은 눈송이를 손끝으로 톡 건드리지만, 그것은 결코 떨어지지 않는다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '떨어지지 않는 눈송이는, 흐름을 받아들이는 글라스가 끝내 마주할 멈춤의 부자연스러움을 비추었다.'
		},
		{
			id: 'fs_03',
			hint: '힐드가 정거장 한구석의 이름 모를 묘비 같은 돌 앞에 작은 눈꽃 하나를 올려둔다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '이름 없는 돌에 올린 눈꽃은, 박제가 아닌 진짜 추모가 무엇인지 보여줄 힐드의 마음의 씨앗이었다.'
		},
		{
			id: 'fs_04',
			hint: '정거장 너머 멀리서 거꾸로 도는 시계바늘 소리가 멀어졌다 가까워진다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '맴도는 바늘 소리는 벨루스의 열차가 막간조차 곁을 떠나지 않고 맴돌고 있음을 알렸다.'
		}
	],

	npc_roles: {
		eira: {
			role: '밤의 기록자',
			arc: '6편(막간): 멈춤은 평화로워 보여도 아무것도 기억하지 못한다 말하며, 자신이 왜 기록으로 기억을 지키려 하는지 동료들에게 털어놓는다.'
		},
		glace: {
			role: '흘려보냄을 말하는 자',
			arc: '6편(막간): 떨어지지 않는 눈송이를 보며, 흐르고 끝나는 것을 받아들이는 자신의 담담한 마음을 처음으로 입에 올린다.'
		},
		hild: {
			role: '진짜 추모를 말하는 자',
			arc: '6편(막간): 이름 없는 돌에 눈꽃을 올리며, 박제가 아닌 진짜 추모 — 끝을 기리는 것이 무엇인지 동료들에게 조용히 보여준다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '멈춘 시계탑 아래',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'추격이 잠시 멎고, 탐험대가 시간이 멈춘 낡은 정거장에 머문다. 에이라가 멈춘 시계탑을 올려다보며 입을 연다. "멈춘 건 평화로워 보여도, 아무것도 기억하지 못해요."'
		},
		{
			order: 2,
			act: 'rising',
			title: '떨어지지 않는 눈송이',
			boss: 'random_boss',
			npc: 'glace',
			summary:
				'글라스가 떨어지다 굳은 눈송이를 손끝으로 건드린다. 그것은 떨어지지 않는다. "떨어져서 녹는 게 눈의 일인데. 멈춰 있으면, 그건 더 이상 눈이 아니야." 흘려보냄을 받아들이는 마음을 드러낸다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '이름 없는 돌',
			boss: 'random_boss',
			npc: 'hild',
			summary:
				'힐드가 정거장 한구석 이름 모를 돌 앞에 눈꽃 하나를 올린다. "박제는 잊지 않으려고 멈추는 거지만, 추모는 보내드리려고 기억하는 거예요." 진짜 추모가 무엇인지 보여준다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '왜 기록하는가',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 자신이 왜 기록으로 기억을 지키려는지 털어놓는다. "박제는 순간을 가두지만, 기록은 시간을 흐르게 두면서도 잊지 않게 해요." 셋의 시간관이 모닥불 같은 정적 속에 드러난다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '스쳐 지나는 열차',
			boss: 'pool_035',
			npc: 'hild',
			summary:
				'대화가 깊어질 무렵 멀리서 거꾸로 도는 바늘 소리가 가까워진다. 벨루스의 유령 열차가 정거장 끝을 소리 없이 스쳐 지나고, 박제된 미소들이 창마다 그들을 바라본다. 힐드가 올린 눈꽃을 뒤로하고, 셋은 각자의 답을 안고 다시 그 열차를 향해 나아간다.'
		}
	],

	act_summary: {
		intro: '추격이 잠시 멎고, 멈춘 정거장에 세 동행단이 마주 앉는다. 에이라가 멈춤과 기억을 입에 올린다.',
		rising: '흘려보냄을 말하는 글라스, 진짜 추모를 보여주는 힐드, 기록의 이유를 털어놓는 에이라. 셋의 시간관이 정적 속에 드러난다.',
		climax_finale: '정거장 끝을 스쳐 지나는 유령 열차. 셋은 각자의 답을 안고 후반부 진실을 향해 다시 나아간다.'
	}
};
