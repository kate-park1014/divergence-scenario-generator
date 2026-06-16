import type { StoryArc } from '$lib/types';

// Skuld 시리즈 7편 (level 62) — 좌초의 기록
export const storyarc_snowy_skuld_62: StoryArc = {
	id: 'snowy_skuld_62',
	level: 62,
	chapter_name: {
		korean: '설원에 좌초된 밤',
		english: 'The Night Wrecked upon the Snow',
		japanese: '雪原に座礁した夜',
		chinese: '搁浅于雪原之夜',
		french: 'La Nuit Échouée sur la Neige',
		spanish: 'La Noche Encallada en la Nieve',
		vietnamese: 'Đêm Mắc Cạn Trên Tuyết',
		thai: 'ค่ำคืนที่อับปางบนหิมะ',
		hindi: 'बर्फ़ पर डूबी वह रात'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'척후선의 잔해가 가장 처참하게 부서진 구역. 룬 기록은 마지막 항해의 밤을 새긴다. 어둠을 좇아 바다를 떠나 설원 깊숙이 들어선 그 밤, 모든 것이 무너졌다.',
		rule: '좌초의 기록을 읽는 자는 스쿌드가 어떻게 빙하와 하나가 되었는지 알게 된다. 그 진실은 한 척 배의 죽음이다.',
		secret:
			'스쿌드는 라그나르의 유언을 좇아 어둠을 멸하러 향하던 중, 비극적인 운명으로 이 설원에 좌초되었다. 바다를 호령하던 척후선이 얼음 위에서 부서지고, 차가운 빙하와 하나가 되었다.'
	},

	protagonist_goal: '척후선 스쿌드가 이 설원에 좌초되어 빙하가 된 비극을 밝혀라.',

	act_tone: {
		intro: {
			mood: '재앙의 잔향',
			tension: 1,
			narrative_role: '가장 처참하게 부서진 잔해 구역. 룬이 마지막 항해의 밤을 새긴다.'
		},
		rising: {
			mood: '무너지는 항해',
			tension: 3,
			narrative_role:
				'기록이 그 밤을 되살린다 — 어둠을 좇아 바다를 떠나 설원으로, 그리고 얼음 위에서 부서지던 척후선의 비명.'
		},
		climax_finale: {
			mood: '죽음의 자리에서',
			tension: 5,
			narrative_role:
				'탐험대가 좌초의 마지막 순간을 읽어내자, 빙하가 그 밤을 다시 사는 듯 격렬히 떤다. "…나는 여기서 부서졌다. 허나 맹세는, 부서지지 않았다."'
		}
	},

	final_boss: {
		id: 'GlacialOath_Skuld_V1',
		name: 'Skuld',
		appearance:
			'The most violently shattered section of the scout-ship wreck embedded in the glacier, splintered hull and snapped beams frozen mid-collapse. Runes recount a final voyage, ghostly images of a longship crashing onto the snow flickering in the blue ice. Skuld manifests faintly amid the ruin, reliving its own death. Cinematic catastrophic snowy lighting, tragic and haunting high-fantasy aesthetic.',
		surface_identity:
			'빙하와 하나가 된 척후선. 그러나 이 구역의 잔해는 그가 어떻게 죽었는지를 처참하게 증언한다.',
		true_identity:
			'스쿌드는 라그나르의 유언을 좇아 어둠을 멸하러 향하던 중, 비극적인 운명으로 이 설원에 좌초되었다. 바다를 호령하던 척후선이 얼음 위에서 부서지고, 차가운 빙하와 하나가 된 것이다.',
		motivation:
			'좌초의 순간을 되살리는 것을 가장 두려워한다. 그 밤은 그의 영광이 끝나고, 맹세만이 홀로 남은 시작점이었기 때문이다.',
		twist:
			'탐험대가 좌초의 마지막 순간을 읽어내자, 빙하가 그 밤을 다시 사는 듯 격렬히 떤다. "나는 여기서 부서졌다. 허나 맹세는, 부서지지 않았다." 배는 죽었으나 맹세만이 살아남아, 빙하가 되어 수천 년을 버틴 것이다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '잔해가 한 방향으로 짓이겨진 채 부서져 있다 — 거대한 충돌의 흔적이다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그 충돌의 방향은 척후선이 바다가 아닌 설원으로 처박혔음을 가리킨다.'
		},
		{
			id: 'fs_02',
			hint: '룬이 "어둠을 좇아 바다를 떠났다"고 기록한다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '맹세를 지키려 바다를 떠난 그 선택이, 결국 좌초의 시작이었다.'
		},
		{
			id: 'fs_03',
			hint: '기록의 한 대목에서 룬이 거칠게 끊기고 흩어진다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '끊긴 그 대목이 바로 척후선이 얼음 위에서 부서지던 순간이었다.'
		},
		{
			id: 'fs_04',
			hint: '부서진 잔해 위로 맹세의 룬만이 온전히 남아 빛난다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '배는 부서졌으나 맹세의 룬만 온전했다 — 살아남은 것은 약속뿐이었다.'
		}
	],

	npc_roles: {
		eira: {
			role: '좌초의 기록자',
			arc: '7편: 마지막 항해의 룬 기록을 해독해 좌초의 밤을 되살린다.'
		},
		ivar: {
			role: '죽음을 마주한 전사',
			arc: '7편: 바다를 호령하던 배의 처참한 최후를 보며, 강함조차 운명 앞에서 무력함을 깨닫는다.'
		},
		hild: {
			role: '부서진 자를 기리는 자',
			arc: '7편: 좌초의 자리에서 죽은 한 척의 배를 망자처럼 기리고, 그 마지막 밤을 애도한다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '짓이겨진 잔해',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'탐험대가 가장 처참하게 부서진 잔해 구역에 들어선다. 에이라가 한 방향으로 짓이겨진 충돌의 흔적과 마지막 항해의 룬을 발견하고 해독을 시작한다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '바다를 떠난 밤',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 룬을 읽는다. "어둠을 좇아 바다를 떠났다…" 맹세를 지키려 바다를 떠난 선택이 좌초의 시작이었음이 드러난다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '운명 앞에서',
			boss: 'random_boss',
			npc: 'ivar',
			summary:
				'이바르가 바다를 호령하던 배의 처참한 최후를 본다. "이렇게 강했던 배조차… 운명 앞엔 무력했군. 강함이란 게, 다 무슨 소용인가."'
		},
		{
			order: 4,
			act: 'rising',
			title: '끊긴 기록',
			boss: 'random_boss',
			npc: 'hild',
			summary:
				'힐드가 거칠게 끊긴 룬 대목 앞에 선다. 그것이 척후선이 부서지던 순간임을 알고, 죽은 한 척의 배를 망자처럼 기린다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '맹세는 부서지지 않았다',
			boss: 'pool_107',
			npc: 'hild',
			summary:
				'힐드가 좌초의 마지막 순간을 읽어내자 빙하가 그 밤을 다시 사는 듯 격렬히 떤다. "나는 여기서 부서졌다. 허나 맹세는, 부서지지 않았다." 배는 죽었으나 맹세만 살아남아 빙하가 되었음이 드러난다.'
		}
	],

	act_summary: {
		intro: '가장 처참하게 부서진 잔해 구역. 에이라가 충돌의 흔적과 마지막 항해의 룬을 해독하기 시작한다.',
		rising: '좌초의 시작을 읽는 에이라, 운명 앞에 무력함을 깨닫는 이바르, 죽은 배를 기리는 힐드. 그 밤 척후선은 설원에 처박혔다.',
		climax_finale: '"나는 여기서 부서졌다. 허나 맹세는, 부서지지 않았다." 배는 죽고 약속만 살아남아 빙하가 되었다.'
	}
};
