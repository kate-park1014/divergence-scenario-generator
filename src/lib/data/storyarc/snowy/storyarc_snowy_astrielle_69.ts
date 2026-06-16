import type { StoryArc } from '$lib/types';

// Astrielle 시리즈 7편 (level 69) — 진실 회수: 잊힌 계승자의 내력
export const storyarc_snowy_astrielle_69: StoryArc = {
	id: 'snowy_astrielle_69',
	level: 69,
	chapter_name: {
		korean: '잊힌 계승자',
		english: 'The Forgotten Heir',
		japanese: '忘れられた継承者',
		chinese: '被遗忘的继承者',
		french: 'L Héritière Oubliée',
		spanish: 'La Heredera Olvidada',
		vietnamese: 'Người Kế Thừa Bị Lãng Quên',
		thai: 'ทายาทที่ถูกลืม',
		hindi: 'भुला दी गई उत्तराधिकारी'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'궁전 가장 깊은 곳, 서리에 봉인된 계보의 전당. 벽면에 새겨진 빛바랜 룬과 얼어붙은 초상들이, 한 혈통이 짊어진 거대한 얼음의 힘의 내력을 담고 있다.',
		rule: '계보의 전당은 그 힘을 읽어낼 자격을 가진 자에게만 룬을 풀어 보인다. 에이라가 잊힌 이름과 내력을 해독할수록, 여왕이 짊어진 비극의 무게가 드러난다.',
		secret:
			'여왕은 본의 아니게 폭주하는 강력한 얼음의 힘을 물려받은 비운의 계승자다. 그 힘은 다스릴 수 없을 만큼 강대하여, 대대로 계승자들을 고독 속에 가두어왔다. 그녀의 이름조차 두려움 속에 잊혀갔다.'
	},

	protagonist_goal: '계보의 전당에서 여왕이 짊어진 얼음의 힘의 내력을 해독하고, 그녀가 어떤 존재인지 밝혀라.',

	act_tone: {
		intro: {
			mood: '봉인된 계보의 무게',
			tension: 2,
			narrative_role:
				'서리에 봉인된 계보의 전당. 빛바랜 룬과 얼어붙은 초상들이 한 혈통의 내력을 침묵 속에 담고 있다.'
		},
		rising: {
			mood: '풀려나는 진실',
			tension: 4,
			narrative_role:
				'에이라가 룬을 해독할수록, 폭주하는 얼음의 힘을 물려받은 계승자들의 비극이 드러난다. 여왕은 그 힘에 짓눌린 마지막 계승자였다.'
		},
		climax_finale: {
			mood: '드러난 비운',
			tension: 5,
			narrative_role:
				'Astrielle가 전당을 봉인하려 폭풍을 일으킨다. "그 이름을… 부르지 마요. 그 힘을 물려받은 순간, 저는 이미 혼자였어요." 비운의 계승자라는 진실이 처음으로 온전히 드러난다.'
		}
	},

	final_boss: {
		id: 'AstrielleWinterSovereign',
		name: 'Astrielle',
		appearance:
			'A majestic platinum-haired woman before a hall of frozen portraits and faded runes chronicling a bloodline burdened by uncontrollable ice power. Her fragile frost gown and frozen-star eyes carry the weight of a tragic inheritance as she raises a blizzard to seal the hall. Ice flowers bloom and shatter across the ancient stone. Cinematic cold solemn lighting, tragic high-fantasy aesthetic.',
		surface_identity:
			'계보의 전당을 폭풍으로 봉인하려는 겨울 여왕. 그녀는 자신의 내력이 읽히는 것을 두려워한다.',
		true_identity:
			'본의 아니게 폭주하는 강력한 얼음의 힘을 물려받은 비운의 계승자. 다스릴 수 없는 그 힘이 대대로 계승자들을 고독 속에 가두어왔고, 그녀는 그 마지막이었다.',
		motivation:
			'자신이 짊어진 힘의 내력이 드러나는 것이 두렵다. 그 힘을 물려받은 순간부터 홀로일 수밖에 없었던 자신의 비극을, 누구에게도 들키고 싶지 않다.',
		twist:
			'에이라가 룬을 해독해 그녀의 잊힌 이름과 계보를 밝혀내자, Astrielle가 전당을 봉인하려 폭풍을 일으킨다. "그 이름을… 부르지 마요. 그 힘을 물려받은 순간, 저는 이미 혼자였어요." 폭주하는 얼음의 힘을 물려받은 비운의 계승자라는 진실이, 처음으로 온전히 드러난다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '계보의 전당 벽면에, 대대로 홀로 얼어붙은 계승자들의 초상이 늘어서 있다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '홀로 얼어붙은 초상들은, 다스릴 수 없는 힘이 계승자마다 강요한 고독의 기록이었다.'
		},
		{
			id: 'fs_02',
			hint: '빛바랜 룬 속에 거듭 등장하는 한 단어 — 다스릴 수 없는 힘.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '거듭된 그 단어는, 혈통이 짊어진 폭주하는 얼음의 힘의 본질이었다.'
		},
		{
			id: 'fs_03',
			hint: '가장 마지막 초상에는 이름이 새겨질 자리만 텅 비어 얼어 있다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '비어 있는 마지막 자리는, 두려움 속에 잊혀간 그녀 자신의 이름의 자리였다.'
		},
		{
			id: 'fs_04',
			hint: '에이라가 룬을 풀 때마다 여왕의 폭풍이 동요하듯 흔들린다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '동요하는 폭풍은, 잊고 싶던 진실이 읽히는 것에 흔들리는 그녀의 마음이었다.'
		}
	],

	npc_roles: {
		eira: {
			role: '내력을 해독하는 자',
			arc: '7편: 계보의 룬과 잊힌 이름을 해독하여, 여왕이 폭주하는 얼음의 힘을 물려받은 비운의 계승자임을 밝혀낸다.'
		},
		inka: {
			role: '고독을 헤아리는 자',
			arc: '7편: 힘을 물려받은 순간부터 홀로였던 여왕의 고독을 헤아리며, 그 외로움에 온기를 건네려 한다.'
		},
		bran: {
			role: '비운을 마주한 길잡이',
			arc: '7편: 계승자들이 대대로 갇혀온 고독의 사슬을 보고, 그녀만은 그 사슬 밖으로 이끌어내겠다 결심한다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '계보의 전당',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'탐험대가 서리에 봉인된 계보의 전당에 다다른다. 에이라가 대대로 홀로 얼어붙은 계승자들의 초상을 보고, 한 혈통의 비극을 해독하기 시작한다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '다스릴 수 없는 힘',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 룬 속에 거듭 등장하는 단어를 풀어낸다. "다스릴 수 없는 힘… 이 혈통은 대대로 그걸 물려받았어요." 여왕이 짊어진 힘의 본질이 드러난다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '물려받은 순간부터',
			boss: 'random_boss',
			npc: 'inka',
			summary:
				'인카가 홀로 얼어붙은 초상들을 보며 여왕의 고독을 헤아린다. "힘을 물려받은 순간부터 혼자였던 거예요. 누구도 곁에 둘 수 없어서." 그 외로움에 온기를 건네려 한다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '비어 있는 이름',
			boss: 'random_boss',
			npc: 'bran',
			summary:
				'브란이 마지막 초상의 텅 빈 이름 자리를 본다. "두려움 속에 이름조차 잊힌 거지. 그녀만은… 이 사슬에서 끌어내야 해." 길잡이로서의 결심을 굳힌다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '저는 이미 혼자였어요',
			boss: 'pool_034',
			npc: 'eira',
			summary:
				'에이라가 여왕의 잊힌 이름과 계보를 밝혀내자 Astrielle가 전당을 봉인하려 폭풍을 일으킨다. "그 이름을… 부르지 마요. 그 힘을 물려받은 순간, 저는 이미 혼자였어요." 비운의 계승자라는 진실이 온전히 드러난다.'
		}
	],

	act_summary: {
		intro: '서리에 봉인된 계보의 전당과 홀로 얼어붙은 계승자들의 초상. 한 혈통의 비극이 침묵 속에 잠들어 있다.',
		rising: '다스릴 수 없는 힘을 해독한 에이라, 고독을 헤아린 인카, 비어 있는 이름을 본 브란. 여왕의 내력이 드러난다.',
		climax_finale: '"그 힘을 물려받은 순간, 저는 이미 혼자였어요." 폭주하는 얼음의 힘을 짊어진 비운의 계승자라는 진실이 온전히 드러난다.'
	}
};
