import type { StoryArc } from '$lib/types';

// Bellus 시리즈 1편 (level 8) — 도입: 멈춘 세상의 유령 열차
export const storyarc_snowy_bellus_8: StoryArc = {
	id: 'snowy_bellus_8',
	level: 8,
	chapter_name: {
		korean: '멈춘 세상의 기적 소리',
		english: 'The Whistle of a Halted World',
		japanese: '止まった世界の汽笛',
		chinese: '停滞世界的汽笛声',
		french: 'Le Sifflet d un Monde Figé',
		spanish: 'El Silbato de un Mundo Detenido',
		vietnamese: 'Tiếng Còi Của Thế Giới Ngưng Đọng',
		thai: 'เสียงหวูดของโลกที่หยุดนิ่ง',
		hindi: 'ठहरी दुनिया की सीटी'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'시간이 멈춘 듯한 설원. 눈송이 하나하나가 공중에 박제된 채 떨어지지 않는다. 멀리 흑요석과 황동으로 빚은 빅토리안 유령 열차가 보이지 않는 선로를 따라 미끄러져 온다. 거대한 시계바늘이 차체에 박혀 거꾸로 천천히 돌고, 기적 소리가 묘하게 아름답게 울린다.',
		rule: '이 설원에 닿은 모든 것은 가장 아름다운 순간에 얼어붙는다. 떨어지던 눈, 웃던 얼굴, 흔들리던 옷자락 — 전부 그대로 멈춘 채 박제된다.',
		secret:
			'열차의 주인 벨루스는 닿은 자들을 가장 찬란한 한순간에 영원히 가둔다. 박제된 자들은 고통도 없이, 그저 아름답게 미소 지은 채 멈춰 있다. 그 정지가 자비인지 저주인지는 아직 알 수 없다.'
	},

	protagonist_goal: '시간이 멈춘 설원에서 유령 열차의 주인이 어떤 존재인지 그 정체를 확인하라.',

	act_tone: {
		intro: {
			mood: '아름답고 섬뜩한 정적',
			tension: 1,
			narrative_role:
				'공중에 멈춘 눈송이 사이로 유령 열차가 미끄러져 온다. 너무 아름다워서 도리어 소름이 돋는 정적이 설원을 덮는다.'
		},
		rising: {
			mood: '매혹과 불안',
			tension: 3,
			narrative_role:
				'선로 곁에 박제된 사람들이 보인다. 모두 더없이 행복한 표정으로 멈춰 있다. 가까이 다가갈수록, 그 아름다움이 무엇을 대가로 한 것인지 의문이 짙어진다.'
		},
		climax_finale: {
			mood: '첫 손길의 한기',
			tension: 5,
			narrative_role:
				'열차 문이 소리 없이 열리고, 은빛 얼음 바늘 하나가 탐험대를 향해 떠오른다. 벨루스의 다정한 목소리가 처음으로 울린다. "…네 가장 아름다운 순간은, 어느 쪽이니?"'
		}
	},

	final_boss: {
		id: 'ChronosStitcher_V0',
		name: 'Bellus',
		appearance:
			'A vast Victorian ghost train of black obsidian and brass gliding over an invisible rail through a frozen snowfield where snowflakes hang motionless in the air. Enormous clock hands are embedded into its hull, turning slowly backward. Hundreds of silvery ice needles drift around it, stitching glowing fragments of memory like silver thread. A pale clock-face gazes from the locomotive front, its hands running in reverse. Beautiful and uncanny, cinematic frozen lighting, haunting high-fantasy aesthetic.',
		surface_identity:
			'멈춰버린 세상의 선로 위를 달리는 유령 열차. 그에게 닿은 자들은 영원히 얼어붙은 채 가장 아름다운 순간에 박제된다.',
		true_identity:
			'아직은 그저 아름답고 섬뜩한 유령 열차의 주인처럼 보인다. 그러나 거꾸로 도는 시계바늘과 박제된 미소들은, 그가 단순한 망령이 아님을 어렴풋이 암시한다.',
		motivation:
			'닿은 자를 가장 아름다운 순간에 멈추게 한다. 그 정지가 누군가에게는 구원처럼, 누군가에게는 저주처럼 비친다.',
		twist:
			'열차 문이 소리 없이 열린다. 은빛 얼음 바늘 하나가 떠올라 탐험대를 향한다. 벨루스가 시계태엽 감기는 듯한 다정한 목소리로 속삭인다. "…그렇게 서두르지 않아도 돼. 네 가장 아름다운 순간을, 내가 영원히 지켜줄 테니까." 처음으로 그 다정함 아래 깔린 한기가 스친다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '공중에 떨어지다 멈춘 눈송이들이 햇빛에 보석처럼 빛난다. 단 하나도 땅에 닿지 않는다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '멈춘 눈송이는 이 설원의 시간 자체가 박제되어 있음을 알리는 첫 징표였다.'
		},
		{
			id: 'fs_02',
			hint: '선로 곁에 한 여행자가 더없이 행복한 표정으로 얼어붙어 있다. 미소가 너무 완벽해서 도리어 소름이 돋는다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그 완벽한 미소는 벨루스가 골라 박제한 가장 아름다운 한순간이었다.'
		},
		{
			id: 'fs_03',
			hint: '열차에 박힌 거대한 시계바늘이 거꾸로, 아주 천천히 돌고 있다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '거꾸로 도는 바늘은 벨루스가 시간을 되돌려 한순간에 가두려 한다는 증거였다.'
		},
		{
			id: 'fs_04',
			hint: '열차 곁을 떠도는 은빛 얼음 바늘들이 허공에서 빛 조각을 한 땀 한 땀 꿰매고 있다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '얼음 바늘이 꿰매던 빛 조각은 박제된 자들의 기억이었다. 그는 순간을 실로 꿰매 보존한다.'
		}
	],

	npc_roles: {
		eira: {
			role: '멈춘 풍경의 기록자',
			arc: '1편: 동행단의 안내자로서 멈춘 눈과 박제된 미소를 침착히 관찰하고, 이 정적의 정체를 기록하기 시작한다.'
		},
		glace: {
			role: '정지를 응시하는 자',
			arc: '1편: 떨어지다 멈춘 눈송이를 오래 바라보며, 이 끝없는 정지의 의미를 담담히 헤아린다.'
		},
		hild: {
			role: '박제된 자를 기리는 자',
			arc: '1편: 선로 곁에 얼어붙은 여행자 앞에 멈춰 서서, 망자를 대하듯 조용히 고개를 숙인다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '떨어지지 않는 눈',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'탐험대가 시간이 멈춘 듯한 설원에 들어선다. 눈송이가 공중에 박제된 채 떨어지지 않는다. 안내자 에이라가 멀리서 미끄러져 오는 유령 열차를 보고 첫 단서를 기록한다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '너무 완벽한 미소',
			boss: 'random_boss',
			npc: 'hild',
			summary:
				'선로 곁에 한 여행자가 더없이 행복한 표정으로 얼어붙어 있다. 힐드가 그 앞에 멈춰 서서 망자를 대하듯 고개를 숙인다. "…이건 죽음인가요, 아니면 그보다 깊은 무엇인가요."'
		},
		{
			order: 3,
			act: 'rising',
			title: '거꾸로 도는 바늘',
			boss: 'random_boss',
			npc: 'glace',
			summary:
				'글라스가 열차에 박힌 거대한 시계바늘이 거꾸로 도는 것을 응시한다. "시간이 멈춘 게 아니야. 누군가 되돌리고 있어." 정지의 정체를 담담히 헤아린다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '실을 꿰는 바늘',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 열차 곁을 떠도는 은빛 얼음 바늘들이 허공의 빛 조각을 한 땀 한 땀 꿰매는 것을 기록한다. 단순한 유령 열차가 아니다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '가장 아름다운 순간',
			boss: 'pool_035',
			npc: 'hild',
			summary:
				'열차 문이 소리 없이 열리고 은빛 얼음 바늘이 탐험대를 향해 떠오른다. 벨루스가 다정하게 속삭인다. "네 가장 아름다운 순간을, 내가 영원히 지켜줄게." 그 다정함 아래 처음으로 한기가 스미고, 힐드가 박제된 여행자를 등진 채 첫 전투를 맞는다.'
		}
	],

	act_summary: {
		intro: '시간이 멈춘 설원. 떨어지지 않는 눈 사이로 유령 열차가 미끄러져 온다. 동행단(에이라·글라스·힐드)이 함께 마주한다.',
		rising: '박제된 미소 앞에 고개 숙이는 힐드, 거꾸로 도는 바늘을 읽는 글라스, 얼음 바늘을 기록하는 에이라. 아름다움 아래 의문이 짙어진다.',
		climax_finale: '열차 문이 열리고 얼음 바늘이 떠오른다. 다정한 속삭임 아래 처음으로 한기가 스민다.'
	}
};
