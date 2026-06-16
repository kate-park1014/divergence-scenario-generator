import type { StoryArc } from '$lib/types';

// Anya 시리즈 3편 (level 24) — 애처로운 움직임
export const storyarc_snowy_anya_24: StoryArc = {
	id: 'snowy_anya_24',
	level: 24,
	chapter_name: {
		korean: '애처로운 움직임',
		english: 'A Pitiful Movement',
		japanese: '哀しげな揺らめき',
		chinese: '令人怜悯的颤动',
		french: 'Un Mouvement Pitoyable',
		spanish: 'Un Movimiento Lastimero',
		vietnamese: 'Cử Động Đáng Thương',
		thai: 'การเคลื่อนไหวอันน่าสงสาร',
		hindi: 'एक करुण हलचल'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'눈보라가 한층 거세진 골짜기. 빛은 여전히 인도하지만, 그 움직임이 어딘가 달라졌다. 멈칫거리고, 되돌아보고, 무언가를 향해 손짓하듯 흔들린다.',
		rule: '빛을 따르는 자는 빛의 움직임을 읽어야 한다. 그 흔들림 하나하나가 말없는 신호이기 때문이다.',
		secret:
			'빛의 애처로운 움직임은 단순한 인도가 아니다. 그것은 멀리 사라져가는 무언가를 붙잡으려는, 작은 존재의 애타는 몸짓이다.'
	},

	protagonist_goal: '빛의 달라진, 애처로운 움직임에 담긴 신호를 읽어내라.',

	act_tone: {
		intro: {
			mood: '미묘한 불안',
			tension: 1,
			narrative_role: '거세진 눈보라 속, 빛의 움직임이 어딘가 달라졌다. 멈칫거리고 되돌아보며 떨린다.'
		},
		rising: {
			mood: '읽히기 시작하는 슬픔',
			tension: 3,
			narrative_role:
				'빛이 무언가를 향해 손짓하듯 흔들리고, 따라잡을 수 없는 곳을 자꾸 돌아본다. 인도하는 손짓이 아니라, 붙잡으려는 몸짓에 가깝다.'
		},
		climax_finale: {
			mood: '닿지 못하는 애틋함',
			tension: 5,
			narrative_role:
				'빛이 멀리 흩어지는 희미한 환영을 향해 떨며 뻗어 나간다. 그러나 환영은 손에 닿기 전에 눈보라에 사라지고, 빛만 그 자리에 남아 떤다.'
		}
	},

	final_boss: {
		id: 'GlacialBeacon_Anya_V1',
		name: 'Anya',
		appearance:
			'A small trembling light in a violent blizzard, its glow flickering and faltering, reaching out toward something far away. The faint silhouette of a child within seems to stretch a small hand toward distant fading shapes that dissolve into the storm. The light shivers, left alone where it reaches. Cinematic harsh blue snowstorm with a fragile amber glow, deeply melancholic high-fantasy aesthetic.',
		surface_identity:
			'여전히 조난자를 인도하는 빛. 그러나 그 움직임이 멈칫거리고 떨리며, 무언가를 향해 손짓하듯 흔들린다.',
		true_identity:
			'빛의 애처로운 움직임은 인도의 신호가 아니다. 멀리 사라져가는 무언가를 붙잡으려는, 작은 존재의 애타는 몸짓이다.',
		motivation:
			'멀어지는 누군가를 붙잡고 싶어 손을 뻗는다. 그러나 닿지 못한다. 그 닿지 못함이 빛을 한자리에 묶어 두고, 영원히 같은 몸짓을 되풀이하게 한다.',
		twist:
			'빛이 멀리 흩어지는 희미한 환영을 향해 떨며 뻗어 나간다. 작은 손짓이 환영을 따라가지만, 환영은 손에 닿기 직전 눈보라에 흩어져 사라진다. 빛만 그 자리에 남아 가늘게 떤다. "…가지… 마세요… 잠깐만… 기다려…" 붙잡으려다 놓친 작은 목소리가 골짜기에 메아리친다. 그것은 인도하는 빛이 아니라, 닿지 못하는 손이었다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '빛이 인도하다 말고 자꾸 멈칫거리며 뒤를, 혹은 먼 곳을 돌아본다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '돌아보던 그 먼 곳에, 빛이 붙잡으려는 사라져가는 환영이 있었다.'
		},
		{
			id: 'fs_02',
			hint: '빛이 무언가를 향해 손짓하듯, 한 방향으로 가늘게 뻗었다 움츠러든다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그것은 인도하는 손짓이 아니라, 멀어지는 누군가를 붙잡으려는 작은 손이었다.'
		},
		{
			id: 'fs_03',
			hint: '눈보라 저편에 사람 형상의 희미한 환영이 잠깐 비쳤다 사라진다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그 환영은 빛이 끝내 따라잡지 못하는, 멀리 떠나가는 누군가의 잔상이었다.'
		},
		{
			id: 'fs_04',
			hint: '환영이 멀어질 때마다 빛이 한층 약해지고, 한기와 함께 가늘게 떤다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '닿지 못할 때마다 빛은 야위어 갔다. 기다림이 곧 그를 갉아먹는 한기였다.'
		}
	],

	npc_roles: {
		eira: {
			role: '신호를 해독하는 기록자',
			arc: '3편: 빛의 멈칫거림과 손짓을 읽어, 그것이 인도가 아니라 붙잡으려는 몸짓임을 밝힌다.'
		},
		inka: {
			role: '슬픔에 공명하는 자',
			arc: '3편: 닿지 못하는 빛의 애틋함에 가장 깊이 공명하며 가슴 아파한다.'
		},
		bran: {
			role: '환영을 좇는 길잡이',
			arc: '3편: 빛이 좇는 먼 환영을 함께 좇으며, 빛이 무엇을 잃었는지 헤아리기 시작한다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '달라진 움직임',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'거세진 눈보라 골짜기에서, 빛의 움직임이 어딘가 달라졌다. 인도하다 말고 멈칫거리며 먼 곳을 돌아본다. 에이라가 그 미세한 변화를 기록한다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '붙잡으려는 손',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 빛이 한 방향으로 가늘게 뻗었다 움츠러드는 손짓을 해독한다. 그것은 인도하는 손짓이 아니라, 무언가를 붙잡으려는 작은 손에 가깝다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '저편의 환영',
			boss: 'random_boss',
			npc: 'bran',
			summary:
				'브란이 눈보라 저편에 잠깐 비쳤다 사라지는 사람 형상의 환영을 좇는다. 빛은 그 환영을 따라잡으려 애쓴다. "저 빛은… 누군가를 잃었어. 그래서 좇는 거야."'
		},
		{
			order: 4,
			act: 'rising',
			title: '야위어 가는 빛',
			boss: 'random_boss',
			npc: 'inka',
			summary:
				'인카가 환영이 멀어질 때마다 빛이 약해지고 떠는 것을 본다. 닿지 못할 때마다 빛은 야위어 간다. "…기다리는 게, 저 아이를 갉아먹고 있어."'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '가지 마세요',
			boss: 'pool_109',
			npc: 'inka',
			summary:
				'빛이 사라져가는 희미한 환영을 향해 떨며 뻗어 나가지만, 환영은 닿기 직전 눈보라에 흩어진다. 빛만 남아 가늘게 떤다. "가지… 마세요… 잠깐만… 기다려…" 인카가 그 닿지 못하는 손의 슬픔에 깊이 공명한다.'
		}
	],

	act_summary: {
		intro: '거세진 눈보라 속 빛의 움직임이 달라진다. 멈칫거리고 먼 곳을 돌아본다. 에이라가 기록한다.',
		rising: '붙잡으려는 손짓을 해독하는 에이라, 저편의 환영을 좇는 브란, 야위어 가는 빛을 보는 인카. 인도가 아니라 닿지 못하는 손이다.',
		climax_finale: '빛이 환영을 향해 뻗지만 닿지 못하고 흩어진다. "가지 마세요." 인카가 닿지 못하는 손의 슬픔에 공명한다.'
	}
};
