import type { StoryArc } from '$lib/types';

// Archduke Finn 시리즈 6편 (level 50) — 동행단 막간: 나눠 쥔 핫팩
export const storyarc_snowy_finn_50: StoryArc = {
	id: 'snowy_finn_50',
	level: 50,
	chapter_name: {
		korean: '나눠 쥔 핫팩',
		english: 'A Shared Hand Warmer',
		japanese: '分け合ったカイロ',
		chinese: '分着握的暖手宝',
		french: 'Une Chaufferette Partagée',
		spanish: 'Un Calentador Compartido',
		vietnamese: 'Túi Sưởi Tay Chia Nhau',
		thai: 'ถุงทำความร้อนที่แบ่งกันถือ',
		hindi: 'बाँटकर पकड़ा हाथ-गरमाने वाला'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'왕을 쫓던 추격이 거센 눈보라에 막혀, 동행단이 작은 얼음 처마 밑에 모여 핫팩 하나를 나눠 쥐고 숨을 고른다. 전반부의 소동이 잠시 멎고, 세 사람은 처음으로 서로에게 묻는다 — 우리는 왜 이 우스꽝스러운 왕을 끝까지 따라가고 있는가.',
		rule: '막간의 밤. 보스의 미스터리는 잠시 미뤄지고, 동행단 세 사람의 마음이 핫팩 하나의 온기 앞에 드러난다.',
		secret:
			'세 사람의 마음은 제각각이면서 닿아 있다. 에이라는 그를 정확히 기억으로 남기려 하고, 인카는 그를 한 존재로 가엾이 여기며, 프로스트는 추위 타는 그에게 동병상련을 느낀다. 이 밤의 대화가 후반부 진실을 마주할 셋의 마음을 단단히 한다.'
	},

	protagonist_goal: '눈보라가 멎기를 기다리며, 동행단이 핫팩 하나를 나눠 쥐고 서로의 마음을 나누게 하라.',

	act_tone: {
		intro: {
			mood: '잦아드는 소동',
			tension: 1,
			narrative_role: '추격이 눈보라에 막힌다. 동행단이 얼음 처마 밑에 모여 핫팩 하나를 나눠 쥔다.'
		},
		rising: {
			mood: '드러나는 속내',
			tension: 2,
			narrative_role:
				'핫팩의 온기 앞에서 셋은 처음으로 서로에게 묻는다. 왜 이 우스꽝스러운 왕을 끝까지 따라가는가. 제각각의 답이 따뜻하게 오간다.'
		},
		climax_finale: {
			mood: '막간의 끝',
			tension: 3,
			narrative_role:
				'눈보라가 잦아드는 순간, Finn이 처마 밖에서 코끝만 빼꼼 내밀고 그 핫팩을 부럽게 쳐다본다. 막간이 끝나고 추격이 다시 시작된다.'
		}
	},

	final_boss: {
		id: 'ArchdukeFinnTheChilly',
		name: 'Archduke Finn',
		appearance:
			'A round plump penguin peeking from behind an ice ledge during a calming blizzard, only its beak and goggled eyes poking out, gazing enviously at a glowing hand warmer that three companions share under a small ice overhang. It wears an oversized sliding crown, neon ski goggles, a moth-eaten purple cape with a giant safety pin, and a thick wool muffler. Soft cinematic 3D animation style, quiet warm-and-cold contrast, gentle character-focused tone, vibrant colors.',
		surface_identity:
			'막간의 평온 속, 처마 밖에서 핫팩을 부럽게 쳐다보는 둥근 왕. 위엄을 부려야 한다는 것도 잠시 잊은 듯하다.',
		true_identity:
			'이 밤은 왕보다 동행단의 마음에 초점이 맞춰진다 — 셋이 그를 어떻게 보는가가 후반부 진실의 무게를 정한다. 그의 정체는 아직 절반만 드러났다.',
		motivation:
			'핫팩의 온기와, 그 곁에 모여 앉은 셋의 다정함을 모두 부러워한다. 끼어들고 싶지만 위엄 때문에 차마 다가가지 못하고 코끝만 내민다.',
		twist:
			'눈보라가 잦아들 무렵, 처마 밖에서 코끝과 고글만 빼꼼 내민 Finn이 셋이 나눠 쥔 핫팩을 부럽게 쳐다본다. 끼어들고 싶지만 위엄 때문에 망설이다, 들킬세라 황급히 도로 숨는다. 그 작은 망설임을 보며, 셋은 각자의 답을 가슴에 품고 다시 추격에 나선다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '에이라가 핫팩 불빛에 그날까지의 단서를 비추며 "이 왕에겐 이름이 필요하다"고 중얼거린다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '에이라의 중얼거림은 후반부, 그의 진짜 이야기를 똑바로 기록할 복선이었다.'
		},
		{
			id: 'fs_02',
			hint: '프로스트가 핫팩을 한참 쥐고 있다가, 슬그머니 처마 밖 추위 쪽으로 손을 내민다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '추위 쪽으로 내민 손은, 프로스트가 끝내 추위 타는 그에게 온기를 나눌 마음의 씨앗이었다.'
		},
		{
			id: 'fs_03',
			hint: '인카가 "그 왕, 외로워 보였어요"라고 조용히 말한다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '인카의 한마디는, 후반부 그를 가장 먼저 가엾이 여길 마음의 토대가 된다.'
		},
		{
			id: 'fs_04',
			hint: '처마 밖에서 코끝 하나가 빼꼼 내밀었다가 황급히 사라진다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '빼꼼 내민 코끝은, 그가 막간조차 떠나지 못하고 온기 곁을 맴돌고 있음을 알렸다.'
		}
	],

	npc_roles: {
		eira: {
			role: '밤의 기록자',
			arc: '6편(막간): 그날까지의 단서를 핫팩 불빛에 정리하며, 자신이 왜 이 우스꽝스러운 왕을 끝까지 기록하려는지 동료들에게 털어놓는다.'
		},
		inka: {
			role: '온기를 나누는 자',
			arc: '6편(막간): 핫팩을 나누며, 그 어설픈 왕조차 한 존재로 가엾이 여기는 자신의 마음을 조용히 드러낸다.'
		},
		frost: {
			role: '추위를 아는 자',
			arc: '6편(막간): 자신이 누구보다 한기에 예민하기에, 추위 타는 그 왕에게 느끼는 동병상련을 처음으로 입에 올린다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '얼음 처마 밑',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'추격이 거센 눈보라에 막힌다. 동행단이 작은 얼음 처마 밑에 모여 핫팩 하나를 나눠 쥐고 숨을 고른다. 에이라가 그날까지의 단서를 불빛에 비추어 정리하기 시작한다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '추위를 아는 손',
			boss: 'random_boss',
			npc: 'frost',
			summary:
				'프로스트가 핫팩을 한참 쥐다가 슬그머니 처마 밖 추위 쪽으로 손을 내민다. "…나도 추위가 무섭거든. 그 왕도 그렇겠지." 동병상련을 처음으로 입에 올린다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '외로워 보였어요',
			boss: 'random_boss',
			npc: 'inka',
			summary:
				'인카가 핫팩을 건네며 조용히 말한다. "그 왕, 무섭다기보다… 외로워 보였어요." 그를 한 존재로 가엾이 여기는 마음을 드러낸다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '이름이 필요하다',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 왜 이 왕을 끝까지 기록하려는지 털어놓는다. "우스꽝스러워도, 누군가의 이야기는 기억되어야죠. 이 왕에겐… 제대로 된 이름이 필요해요." 셋의 마음이 핫팩 앞에서 단단해진다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '빼꼼 내민 코끝',
			boss: 'pool_033',
			npc: 'inka',
			summary:
				'눈보라가 잦아들 무렵 처마 밖에서 Finn의 코끝이 빼꼼 내민다. 셋이 나눠 쥔 핫팩을 부럽게 쳐다보다 들킬세라 황급히 숨는다. 그 망설임을 본 인카가 핫팩을 꼭 쥐고, 셋은 각자의 답을 안고 다시 추격에 나선다.'
		}
	],

	act_summary: {
		intro: '추격이 눈보라에 막히고, 동행단이 얼음 처마 밑에 모여 핫팩 하나를 나눠 쥔다. 에이라가 단서를 정리한다.',
		rising: '추위를 아는 손을 내미는 프로스트, 외로움을 읽는 인카, 이름의 필요를 말하는 에이라. 셋의 마음이 드러난다.',
		climax_finale: '핫팩을 부럽게 보다 황급히 숨는 Finn의 코끝. 셋은 각자의 답을 안고 후반부 진실을 향해 다시 나아간다.'
	}
};
