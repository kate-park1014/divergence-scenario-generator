import type { StoryArc } from '$lib/types';

// Haraldr 시리즈 5편 (level 41) — 얼어붙은 빙원의 기록
export const storyarc_snowy_haraldr_41: StoryArc = {
	id: 'snowy_haraldr_41',
	level: 41,
	chapter_name: {
		korean: '얼어붙은 빙원의 기록',
		english: 'The Record Frozen in the Glacier',
		japanese: '氷原に刻まれた記録',
		chinese: '冰原中冻结的记录',
		french: 'Le Récit Gelé dans le Glacier',
		spanish: 'El Registro Congelado en el Glaciar',
		vietnamese: 'Ký Ức Đóng Băng Trong Sông Băng',
		thai: 'บันทึกที่แข็งตัวในธารน้ำแข็ง',
		hindi: 'हिमनद में जमा हुआ अभिलेख'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'프랜차이즈 깃발 너머, 한 번도 녹은 적 없는 태고의 빙원. 얼음 속에 옛 바이킹들의 흔적과 룬 기록이 봉인되어 있다. Haraldr는 이곳을 "본점"이라 부른다.',
		rule: '빙원의 기록을 읽은 자는 Haraldr의 과거를 알게 된다. 그러나 그 진실은 결코 가볍지 않다.',
		secret:
			'이 빙원은 Haraldr가 얼어 죽은 자리다. 룬 기록에는 "영원한 싸움과 전리품을 찾아 헤매다 폭풍에 갇힌 전사"의 이야기가 새겨져 있다.'
	},

	protagonist_goal: '태고의 빙원에 봉인된 Haraldr의 과거 기록을 해독하라.',

	act_tone: {
		intro: {
			mood: '태고의 적막',
			tension: 1,
			narrative_role: '한 번도 녹지 않은 빙원. Haraldr는 이곳에서만 유독 말수가 줄어든다.'
		},
		rising: {
			mood: '드러나는 과거',
			tension: 3,
			narrative_role:
				'얼음 속 룬 기록이 하나씩 해독된다. 장사꾼의 소동 뒤에 한 전사의 비극이 잠들어 있었음이 드러난다.'
		},
		climax_finale: {
			mood: '제 무덤 앞에서',
			tension: 5,
			narrative_role:
				'탐험대가 기록을 마저 읽자, Haraldr가 자신이 얼어 죽은 자리 앞에 멈춘다. 장사꾼의 가면이 처음으로 흔들린다.'
		}
	},

	final_boss: {
		id: 'SnowViking_Haraldr_V1',
		name: 'Haraldr',
		appearance:
			'A clumsy snow-and-ice humanoid standing before a vast untouched glacier, ancient Viking runes and frozen warrior silhouettes sealed within the blue ice behind it. Its grin falters here, the multicolor syrup veins dimmed. One hand rests against the glacier as if remembering. Cinematic somber snowy lighting, melancholic high-fantasy aesthetic.',
		surface_identity:
			'태고의 빙원을 "본점"이라 부르며 데려오는 장사꾼. 그러나 이곳에서만은 유독 조용하다.',
		true_identity:
			'이 빙원은 그가 얼어 죽은 자리다. 룬 기록에는 영원한 싸움과 전리품을 찾아 헤매다 마법 폭풍에 갇힌 전사의 이야기가 새겨져 있다.',
		motivation:
			'그는 자신의 과거를 "본점"이라는 말로 덮어왔다. 기록이 해독될수록, 잊으려 했던 죽음의 기억이 되살아난다.',
		twist:
			'룬 기록의 마지막 줄이 읽힌다 — "그는 여기서 얼어 죽었다." Haraldr가 자신이 묻힌 얼음 앞에 멈춘다. "…여기는 본점이 아니야. 여기는…" 장사꾼의 가면에 처음으로 깊은 균열이 인다. 부정하려는 그의 몸에서 시럽과 한기가 뒤엉켜 분출한다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '빙원에 들어서자 Haraldr의 수다가 뚝 끊긴다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '이곳에서 말을 잃는 이유 — 그가 죽은 자리이기 때문이다.'
		},
		{
			id: 'fs_02',
			hint: '얼음 속에 새겨진 룬이 Haraldr의 몸에 어설프게 새겨진 룬과 똑같다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그는 죽기 전 제 몸의 룬을, 이 기록을 흉내 내어 새긴 것이었다.'
		},
		{
			id: 'fs_03',
			hint: '빙원 깊은 곳에 한 전사가 무언가를 끌어안은 채 얼어붙어 있다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '얼어붙은 전사가 바로 생전의 Haraldr였다. 그가 끌어안은 것은 끝내 팔지 못한 첫 전리품.'
		},
		{
			id: 'fs_04',
			hint: '기록의 마지막 문장이 얼음에 가려 읽히지 않는다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '가려진 문장은 "그는 여기서 얼어 죽었다"였다.'
		}
	],

	npc_roles: {
		eira: {
			role: '룬 해독자',
			arc: '5편: 룬 기록을 해독해 이곳이 그가 얼어 죽은 자리임을 밝힌다 — 기록자 역할의 정수.'
		},
		ivar: {
			role: '침묵하는 전사',
			arc: '5편: 죽은 전사의 자리 앞에서 호승심을 잃고 말없이 선다.'
		},
		inka: {
			role: '외로움의 목격자',
			arc: '5편: 무언가를 끌어안은 채 얼어붙은 전사에게서 깊은 외로움을 본다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '녹지 않는 본점',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'탐험대가 깃발 너머 태고의 빙원에 들어선다. 에이라가 얼음 속 룬 기록을 발견하고 해독을 시작한다. Haraldr가 이곳에선 수다를 뚝 멈춘다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '끌어안은 전리품',
			boss: 'random_boss',
			npc: 'inka',
			summary:
				'인카가 빙원 깊은 곳에서 무언가를 끌어안은 채 얼어붙은 전사를 발견한다. 그 모습에서 깊은 외로움을 본다. "…혼자였구나, 이 사람."'
		},
		{
			order: 3,
			act: 'rising',
			title: '말을 잃은 전사',
			boss: 'random_boss',
			npc: 'ivar',
			summary:
				'늘 호승심에 차 있던 이바르가, 죽은 전사의 자리 앞에서 말없이 선다. "…이게 강함의 끝이라면."'
		},
		{
			order: 4,
			act: 'rising',
			title: '가려진 마지막 줄',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 룬 기록을 해독하지만, 마지막 문장이 얼음에 가려 읽히지 않는다. Haraldr가 그 앞을 막아서며 동요한다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '여기는 본점이 아니야',
			boss: 'pool_106',
			npc: 'eira',
			summary:
				'에이라가 마지막 줄을 읽어낸다 — "그는 여기서 얼어 죽었다." Haraldr가 자신이 묻힌 얼음 앞에 멈춘다. "여기는 본점이 아니야. 여기는…" 가면에 깊은 균열이 일고, 부정하려는 그의 몸에서 시럽과 한기가 분출한다.'
		}
	],

	act_summary: {
		intro: '한 번도 녹지 않은 빙원. 에이라가 룬 기록 해독을 시작하고, Haraldr는 이상하게 말을 잃는다.',
		rising: '끌어안은 전리품에서 외로움을 본 인카, 호승심을 잃은 이바르, 가려진 마지막 줄에 다다른 에이라. 한 전사의 죽음이 잠들어 있다.',
		climax_finale: '"그는 여기서 얼어 죽었다." 제 무덤 앞에서 장사꾼의 가면에 처음으로 깊은 균열이 인다.'
	}
};
