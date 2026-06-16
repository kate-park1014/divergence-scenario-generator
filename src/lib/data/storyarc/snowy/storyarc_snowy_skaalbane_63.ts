import type { StoryArc } from '$lib/types';

// Skaalbane 시리즈 7편 (level 63) — 흡수된 얼굴들
export const storyarc_snowy_skaalbane_63: StoryArc = {
	id: 'snowy_skaalbane_63',
	level: 63,
	chapter_name: {
		korean: '흡수된 얼굴들',
		english: 'The Absorbed Faces',
		japanese: '吸収された顔たち',
		chinese: '被吞噬的面孔',
		french: 'Les Visages Absorbés',
		spanish: 'Los Rostros Absorbidos',
		vietnamese: 'Những Gương Mặt Bị Hấp Thụ',
		thai: 'ใบหน้าที่ถูกดูดกลืน',
		hindi: 'समाहित किए गए चेहरे'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'이름을 부른 뒤, 탑의 얼음벽이 한결 투명해진 구역. 그 안에 수많은 바이킹의 얼굴이 얼어붙은 채 떠 있다. 모두 눈을 감고 있지만, 그 표정엔 마지막 절규가 멈춘 듯 남아 있다.',
		rule: '얼음 속 얼굴을 들여다본 자는 그들이 누구였는지 어렴풋이 듣는다. 그러나 너무 오래 보면, 그 절규가 제 것처럼 느껴진다.',
		secret:
			'얼음 속 얼굴들은 Skaalbane가 수천 년간 흡수해온 자들이다. 난파해 얼어 죽은 바이킹들의 죽어가는 의식이, 탑의 일부가 되어 멈추지 않는 절규로 남았다.'
	},

	protagonist_goal: '탑의 얼음 속에 떠 있는 얼굴들이 누구인지, 그들이 어떻게 탑의 일부가 되었는지 밝혀라.',

	act_tone: {
		intro: {
			mood: '멈춘 절규',
			tension: 1,
			narrative_role: '투명해진 얼음벽 안에 수많은 바이킹의 얼굴이 마지막 표정 그대로 얼어 있다.'
		},
		rising: {
			mood: '듣는 자의 한기',
			tension: 3,
			narrative_role:
				'얼굴을 오래 들여다볼수록, 멈춘 절규가 보는 이의 가슴으로 스며든다. 그들은 흡수된 자들이었다.'
		},
		climax_finale: {
			mood: '합쳐진 죽음',
			tension: 5,
			narrative_role:
				'탐험대가 얼굴들의 정체를 알아내자, 탑이 그들의 절규를 한꺼번에 토해낸다. "…우리는 삼켜졌다… 우리의 마지막 비명이, 이것의 일부가 되었다."'
		}
	},

	final_boss: {
		id: 'EchoHarvester_Skaalbane_V1',
		name: 'Skaalbane',
		appearance:
			'A tower wall of clarified blue ice through which countless frozen Viking faces float, eyes shut yet locked in a final silent scream. Faint blue light pulses behind each face as if their dying cries still echo inside the tower. Cinematic haunting translucent blue lighting, mournful high-fantasy aesthetic.',
		surface_identity:
			'얼음 속에 떠 있는 수많은 얼굴. 처음엔 탑에 잠든 망자들의 무덤 같은 것이라 여겨진다.',
		true_identity:
			'얼음 속 얼굴들은 Skaalbane가 수천 년간 흡수해온 자들이다. 난파해 얼어 죽은 바이킹들의 죽어가는 의식이 탑의 일부가 되어, 멈추지 않는 절규로 남았다.',
		motivation:
			'흡수한 자들의 절규를 양분 삼아 존재를 키워왔다. 그 절규가 멈추지 않도록, 새로운 죽음을 끝없이 갈구한다.',
		twist:
			'탐험대가 얼굴들의 정체를 알아내자, 탑이 그들의 절규를 한꺼번에 토해낸다. "…우리는 삼켜졌다… 우리의 마지막 비명이, 이것의 일부가 되었다…" 망자의 무덤이 아니라, 죽음을 흡수해 자라온 몸이었음이 드러난다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '얼음 속 얼굴들이 모두 같은 방향 — 탑의 핵을 향해 끌려가듯 기울어 있다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '얼굴들은 핵으로 빨려 들어가던 도중에 얼어붙었다 — 흡수의 흔적이었다.'
		},
		{
			id: 'fs_02',
			hint: '얼굴 하나하나의 옷차림과 시대가 제각각이다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '서로 다른 시대의 자들이 한 탑에 모였다 — 수천 년에 걸쳐 흡수된 증거였다.'
		},
		{
			id: 'fs_03',
			hint: '얼굴을 오래 본 자의 가슴에 까닭 모를 절규가 차오른다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '멈춘 절규는 보는 이에게 스며든다 — 탑은 그렇게 새 먹이를 끌어들였다.'
		},
		{
			id: 'fs_04',
			hint: '가장 안쪽 얼음의 얼굴들은 형체가 흐려져 탑과 거의 하나가 되어 있다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '오래 흡수된 자일수록 탑과 하나가 되었다 — 흡수의 끝은 완전한 동화였다.'
		}
	],

	npc_roles: {
		eira: {
			role: '얼굴을 읽는 자',
			arc: '7편: 얼음 속 얼굴들의 시대와 정체를 읽어, 그들이 수천 년에 걸쳐 흡수된 자들임을 밝힌다.'
		},
		inka: {
			role: '절규를 듣는 자',
			arc: '7편: 멈춘 얼굴들의 마지막 비명에 가장 먼저 마음을 열고, 그들의 고통을 한 사람씩 헤아린다.'
		},
		frost: {
			role: '스며듦을 막는 자',
			arc: '7편: 절규가 동료들 가슴으로 스며드는 것을 감지하고, 얼굴을 너무 오래 보지 못하게 모두를 지킨다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '투명해진 벽',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'이름을 부른 뒤 탑의 얼음벽이 투명해진다. 에이라가 그 안에 떠 있는 수많은 바이킹의 얼굴을 발견하고, 그들이 누구인지 읽기 시작한다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '제각각의 시대',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 얼굴들의 옷차림과 시대가 제각각임을 알아챈다. 서로 다른 시대의 자들이 한 탑에 모였다. "수천 년에 걸쳐… 하나씩 삼켜진 거야."'
		},
		{
			order: 3,
			act: 'rising',
			title: '스며드는 비명',
			boss: 'random_boss',
			npc: 'inka',
			summary:
				'인카가 얼굴들의 멈춘 절규에 마음을 연다. 그 비명이 제 가슴으로 차오른다. "…이 사람들, 아직도 비명을 멈추지 못했어. 너무 아파."'
		},
		{
			order: 4,
			act: 'rising',
			title: '너무 오래 보지 마',
			boss: 'random_boss',
			npc: 'frost',
			summary:
				'프로스트가 절규가 동료들에게 스며드는 것을 감지한다. "얼굴을 너무 오래 보지 마. 저 비명이… 우리한테 옮겨붙어. 저게 새 먹이를 끄는 방식이야."'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '우리는 삼켜졌다',
			boss: 'pool_108',
			npc: 'inka',
			summary:
				'탐험대가 얼굴들의 정체를 알아내자 탑이 그들의 절규를 한꺼번에 토해낸다. "우리는 삼켜졌다… 우리의 마지막 비명이, 이것의 일부가 되었다…" 망자의 무덤이 아니라 죽음을 흡수해 자란 몸임이 드러나며, 인카가 그 고통을 받아내며 전투가 이어진다.'
		}
	],

	act_summary: {
		intro: '투명해진 얼음벽 안에 수많은 바이킹의 얼굴이 마지막 표정 그대로 얼어 있다. 에이라가 읽기 시작한다.',
		rising: '제각각의 시대를 읽는 에이라, 비명에 마음을 여는 인카, 스며듦을 막는 프로스트. 얼굴들은 흡수된 자들이었다.',
		climax_finale: '"우리는 삼켜졌다." 멈춘 절규가 한꺼번에 터지며, 탑이 죽음을 먹고 자란 몸임이 드러난다.'
	}
};
