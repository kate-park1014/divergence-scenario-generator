import type { StoryArc } from '$lib/types';

// Skuld 시리즈 4편 (level 32) — 척후선 스쿌드
export const storyarc_snowy_skuld_32: StoryArc = {
	id: 'snowy_skuld_32',
	level: 32,
	chapter_name: {
		korean: '북해를 호령하던 배',
		english: 'The Ship that Ruled the Northern Sea',
		japanese: '北海を統べし船',
		chinese: '号令北海的船',
		french: 'Le Navire qui Régnait sur la Mer du Nord',
		spanish: 'El Barco que Dominaba el Mar del Norte',
		vietnamese: 'Con Thuyền Thống Trị Biển Bắc',
		thai: 'เรือที่ครองทะเลเหนือ',
		hindi: 'उत्तरी सागर पर राज करने वाला जहाज़'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'빙하 내부로 통하는 얼음 동굴. 깊이 들어갈수록 선체의 형상이 또렷해진다. 거대한 척후선의 골격이 빙하와 한 몸으로 엉겨 있고, 벽면의 룬에는 옛 항해의 영광이 새겨져 있다.',
		rule: '선체의 기억에 다가서는 자는 그 옛 영광의 환영을 본다. 그러나 환영이 깊어질수록 좌초의 비극도 함께 다가온다.',
		secret:
			'스쿌드는 한때 북해를 호령하던 바이킹 선단 "피오르드의 심장"의 명망 높은 척후선이었다. 가장 빠르고, 가장 멀리 내다보던 배. 그 영광은 이제 얼음 속에 갇혀 있다.'
	},

	protagonist_goal: '스쿌드가 한때 북해를 호령하던 척후선이었음을 밝혀라.',

	act_tone: {
		intro: {
			mood: '옛 영광의 잔향',
			tension: 1,
			narrative_role: '얼음 동굴 깊은 곳, 거대한 척후선의 골격이 빙하와 엉겨 있다. 벽면의 룬이 옛 항해를 노래한다.'
		},
		rising: {
			mood: '되살아나는 환영',
			tension: 3,
			narrative_role:
				'룬을 따라가자 옛 환영이 피어오른다 — 파도를 가르며 선단의 맨 앞에서 길을 열던 척후선. 그러나 그 끝에는 부서진 뱃머리가 있다.'
		},
		climax_finale: {
			mood: '영광과 추락 사이',
			tension: 5,
			narrative_role:
				'탐험대가 척후선의 영광을 읽어내자, 빙하가 그 환영을 거부하듯 진동한다. "…그 영광을 입에 올리지 마라. 그것은… 모두 부서졌으니."'
		}
	},

	final_boss: {
		id: 'GlacialOath_Skuld_V1',
		name: 'Skuld',
		appearance:
			'Deep inside an ice cavern, the skeletal frame of a great Viking scout-longship fused as one with the surrounding glacier, walls carved with runes celebrating ancient voyages. Ghostly blue echoes of a proud ship cutting through waves flicker within the ice. A shattered prow lies at the end of the vision. Cinematic dim cavern lighting, glorious yet sorrowful high-fantasy aesthetic.',
		surface_identity:
			'빙하 정령이라 불리던 존재가, 이제 한 척의 거대한 척후선으로 또렷이 드러난다.',
		true_identity:
			'스쿌드는 북해를 호령하던 바이킹 선단 "피오르드의 심장"의 명망 높은 척후선이었다. 가장 빠르고 가장 멀리 내다보며 선단의 길을 여는 배. 그 영광이 얼음 속에 갇혀 있다.',
		motivation:
			'자신의 옛 영광을 떠올리게 하는 것을 견디지 못한다. 영광이 클수록 추락의 비극이 또렷해지기에, 그 환영을 거부하며 한기로 밀어낸다.',
		twist:
			'탐험대가 척후선의 옛 영광을 읽어내자, 빙하가 환영을 거부하듯 거세게 진동한다. "그 영광을 입에 올리지 마라. 그것은… 모두 부서졌으니." 자랑스러웠던 과거가, 이제는 가장 견디기 힘든 상처가 되어 있었다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '얼음 동굴 벽면의 룬이 옛 항해의 영광을 노래한다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그 룬들은 스쿌드가 선단의 맨 앞에서 길을 열던 척후선이었음을 증언한다.'
		},
		{
			id: 'fs_02',
			hint: '환영 속 척후선이 선단의 맨 앞에서 파도를 가른다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '맨 앞을 달린다는 것은 가장 먼저 위험을 마주한다는 뜻 — 척후선의 숙명이었다.'
		},
		{
			id: 'fs_03',
			hint: '영광의 환영 끝자락에 부서진 뱃머리가 어른거린다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '부서진 뱃머리는 그 빛나던 항해의 끝이 비극이었음을 예고한다.'
		},
		{
			id: 'fs_04',
			hint: '룬이 읽힐 때마다 빙하가 영광의 환영을 거부하듯 떤다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '영광을 거부한 이유 — 자랑스러운 과거가 이제는 가장 깊은 상처가 되었기 때문이다.'
		}
	],

	npc_roles: {
		eira: {
			role: '항해의 기록자',
			arc: '4편: 벽면의 룬을 해독해 스쿌드가 "피오르드의 심장"의 척후선이었음을 밝혀낸다.'
		},
		ivar: {
			role: '영광을 가늠하는 전사',
			arc: '4편: 선단의 맨 앞을 달리던 척후선의 위용 앞에서, 전사로서 진정한 강함과 영광의 의미를 되묻는다.'
		},
		hild: {
			role: '추락을 예감하는 자',
			arc: '4편: 영광의 환영 끝에 어른거리는 부서진 뱃머리를 보고, 다가올 비극을 가장 먼저 예감한다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '얼음 동굴의 골격',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'탐험대가 빙하 내부의 얼음 동굴로 들어선다. 에이라가 빙하와 엉긴 거대한 척후선의 골격과, 벽면에 새겨진 항해의 룬을 발견한다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '강함이란 무엇인가',
			boss: 'random_boss',
			npc: 'ivar',
			summary:
				'이바르가 선단의 맨 앞을 달리던 척후선의 위용 앞에 선다. "맨 앞을 달린다는 건… 가장 먼저 죽을 자리에 선다는 거지. 그게 강함인가." 그가 처음으로 영광의 의미를 되묻는다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '피오르드의 심장',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 룬을 해독해 스쿌드가 선단 "피오르드의 심장"의 명망 높은 척후선이었음을 밝혀낸다. 가장 빠르고 가장 멀리 내다보던 배.'
		},
		{
			order: 4,
			act: 'rising',
			title: '부서진 뱃머리',
			boss: 'random_boss',
			npc: 'hild',
			summary:
				'힐드가 영광의 환영 끝자락에 어른거리는 부서진 뱃머리를 본다. "이 빛나는 이야기의 끝은… 비극이야. 난 그게 느껴져."'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '모두 부서졌으니',
			boss: 'pool_107',
			npc: 'eira',
			summary:
				'에이라가 척후선의 옛 영광을 읽어내자 빙하가 환영을 거부하듯 진동한다. "그 영광을 입에 올리지 마라. 그것은… 모두 부서졌으니." 자랑스러운 과거가 가장 견디기 힘든 상처가 되어 있었다.'
		}
	],

	act_summary: {
		intro: '얼음 동굴 깊은 곳, 빙하와 엉긴 거대한 척후선의 골격과 항해의 룬이 드러난다.',
		rising: '영광의 의미를 되묻는 이바르, 선단의 정체를 밝힌 에이라, 비극을 예감하는 힐드. 스쿌드는 북해를 호령하던 척후선이었다.',
		climax_finale: '"그 영광을 입에 올리지 마라. 모두 부서졌으니." 자랑스러운 과거가 이제 가장 깊은 상처가 되었다.'
	}
};
