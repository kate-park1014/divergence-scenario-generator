import type { StoryArc } from '$lib/types';

// Fenrir 시리즈 2편 (level 17) — 사체로 엮인 몸
export const storyarc_snowy_fenrir_17: StoryArc = {
	id: 'snowy_fenrir_17',
	level: 17,
	chapter_name: {
		korean: '사체로 엮인 몸',
		english: 'A Body Woven of Carcasses',
		japanese: '死骸で編まれた体',
		chinese: '由尸骸编织的躯体',
		french: 'Un Corps Tissé de Charognes',
		spanish: 'Un Cuerpo Tejido de Cadáveres',
		vietnamese: 'Thân Xác Dệt Từ Tử Thi',
		thai: 'ร่างที่ถักทอจากซากศพ',
		hindi: 'शवों से बुना हुआ शरीर'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'눈보라가 더욱 거세진 설원. 늑대가 지나간 자리에는 온기가 가시고, 작은 짐승들의 사체가 길게 흩뿌려져 있다. 탐험대는 그 흔적을 따라가다, 늑대의 몸이 무엇으로 이루어졌는지 처음으로 똑똑히 보게 된다.',
		rule: '늑대의 몸에 새겨진 사체의 수를 세지 마라. 셀수록, 그 안의 굶주림에 가까워진다.',
		secret:
			'늑대의 몸은 수백 마리 짐승의 얼어붙은 사체와 부서진 뼈가 한데 엉겨 만들어진 껍데기일 뿐, 그 안에는 살아 있는 짐승의 심장이 없다.'
	},

	protagonist_goal: '종말의 늑대의 몸이 무엇으로 이루어졌는지, 그 정체의 첫 조각을 밝혀라.',

	act_tone: {
		intro: {
			mood: '서늘한 위화감',
			tension: 1,
			narrative_role: '늑대가 지나간 자리마다 온기가 가시고 작은 사체들이 흩뿌려져 있다. 사냥이 무언가 다른 것으로 변해간다.'
		},
		rising: {
			mood: '드러나는 껍데기',
			tension: 3,
			narrative_role:
				'가까이서 본 늑대의 몸은 살이 아니라 사체와 뼈의 엉김이다. 살아 있는 짐승의 심장박동이 어디에도 없다.'
		},
		climax_finale: {
			mood: '비어 있음의 확인',
			tension: 5,
			narrative_role:
				'탐험대가 늑대의 한쪽을 부수자, 그 안에 피도 내장도 없이 오직 더 많은 사체와 텅 빈 어둠뿐임이 드러난다.'
		}
	},

	final_boss: {
		id: 'HollowHowl_Fenrir_V1',
		name: 'Fenrir',
		appearance:
			'A colossal wolf shape standing in a fierce blizzard, its flank torn open to reveal that it is not flesh but a dense weave of frozen small-beast carcasses and broken bones with hollow darkness inside. No heart, no blood, only more carcasses packed within. The hollow eye cavities still swirl with a starving blizzard. Bones clatter like grim wind chimes with every motion. Cinematic cold uneasy snowy lighting, ominous high-fantasy aesthetic.',
		surface_identity:
			'여전히 전설의 종말의 늑대로 보인다. 그러나 그것이 지나간 자리마다 작은 사체들이 흩뿌려지고, 온기가 가셔 있다.',
		true_identity:
			'가까이서 본 늑대의 몸은 살과 가죽이 아니라 수백 마리 짐승의 사체와 뼈가 엉겨 만들어진 껍데기다. 그 안에는 살아 있는 심장이 없다.',
		motivation:
			'늑대는 여전히 삼키기만 한다. 분노도 경계도 없이, 눈앞의 온기와 생명을 빨아들이며 느릿느릿 떠돈다.',
		twist:
			'탐험대가 늑대의 한쪽 옆구리를 부수자, 그 안에서 피도 내장도 쏟아지지 않는다. 오직 더 많은 짐승의 사체와 부서진 뼈, 그리고 텅 빈 어둠뿐이다. 부서진 자리는 곧 주변의 다른 사체들을 빨아들여 다시 메워진다. "…심장이 없어. 이건… 살아 있는 게 아니야." 탐험대는 자신들이 사냥하려던 것이 짐승이 아님을 처음으로 똑똑히 깨닫는다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '늑대가 지나간 자리마다 작은 짐승들의 사체가 길게 흩뿌려져 있다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '흩뿌려진 사체는 늑대의 몸에서 떨어져 나온 조각들이었다. 그 몸 자체가 사체로 이루어져 있다.'
		},
		{
			id: 'fs_02',
			hint: '늑대의 몸 표면에 작은 짐승들의 얼굴과 발이 얼어붙은 채 어렴풋이 드러난다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그 얼굴들은 무리째 굶어 죽은 짐승들의 마지막 형상이었다.'
		},
		{
			id: 'fs_03',
			hint: '늑대의 가슴에 귀를 대도 심장박동이 들리지 않는다. 오직 바람 소리뿐이다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '살아 있는 짐승의 심장이 없었다. 그 안은 텅 비어 있었다.'
		},
		{
			id: 'fs_04',
			hint: '부서진 늑대의 한쪽이, 주변의 다른 사체들을 빨아들여 스스로 다시 메워진다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '늑대는 무엇이든 빨아들여 빈자리를 메운다. 제 몸이 부서져도, 더 많은 사체로 채울 뿐이다.'
		}
	],

	npc_roles: {
		eira: {
			role: '몸의 해부자',
			arc: '2편: 동행단의 기록자로서 늑대의 몸이 사체와 뼈로 엮였음을 관찰하고, 그것이 단순한 짐승이 아님을 기록한다.'
		},
		inka: {
			role: '사체를 보는 자',
			arc: '2편: 늑대의 몸 표면에 얼어붙은 작은 짐승들의 얼굴을 보며, 그 죽음들에 가슴 아파한다.'
		},
		glace: {
			role: '심장 없음의 확인자',
			arc: '2편: 늑대의 가슴에서 심장박동이 없음을 담담히 확인하며, 그 텅 빔의 본질에 한 발 다가선다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '흩뿌려진 사체들',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'탐험대가 늑대가 지나간 자리를 따라간다. 온기가 가신 눈밭에 작은 짐승들의 사체가 길게 흩뿌려져 있다. 에이라가 그 흔적을 기록하며, 사냥이 다른 것으로 변해감을 느낀다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '얼어붙은 얼굴들',
			boss: 'random_boss',
			npc: 'inka',
			summary:
				'인카가 늑대의 몸 표면에 작은 짐승들의 얼굴과 발이 얼어붙은 채 드러난 것을 본다. "…이것들… 다 한때는 살아 있었어." 그 죽음들에 가슴 아파한다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '들리지 않는 심장',
			boss: 'random_boss',
			npc: 'glace',
			summary:
				'글라세가 늑대의 가슴에 가까이 다가가 귀를 기울인다. 그러나 심장박동은 없고, 오직 바람 소리뿐이다. "…심장이 뛰지 않아. 살아 있는 게 아니야."'
		},
		{
			order: 4,
			act: 'rising',
			title: '스스로 메워지는 상처',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 부서진 늑대의 한쪽이 주변 사체를 빨아들여 스스로 다시 메워지는 것을 기록한다. 단순한 짐승의 재생이 아니다. 무언가 다른 원리가 작동하고 있다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '심장이 없어',
			boss: 'pool_112',
			npc: 'glace',
			summary:
				'탐험대가 늑대의 옆구리를 부순다. 그러나 피도 내장도 없이, 더 많은 사체와 텅 빈 어둠뿐이다. 부서진 자리는 곧 다른 사체로 메워진다. 글라세가 직시한다. "심장이 없어. 이건 살아 있는 게 아니야." 사냥이 아닌 무언가가 시작된다.'
		}
	],

	act_summary: {
		intro: '늑대가 지나간 자리마다 흩뿌려진 사체들. 에이라가 흔적을 따라가며 사냥이 변질되어감을 느낀다.',
		rising: '얼어붙은 얼굴들에 가슴 아파하는 인카, 심장박동 없음을 확인하는 글라세, 스스로 메워지는 상처를 기록하는 에이라. 늑대의 몸은 사체의 엉김이다.',
		climax_finale: '부순 늑대의 안에는 심장도 피도 없이 텅 빈 어둠뿐. 글라세가 직시한다 — "이건 살아 있는 게 아니야."'
	}
};
