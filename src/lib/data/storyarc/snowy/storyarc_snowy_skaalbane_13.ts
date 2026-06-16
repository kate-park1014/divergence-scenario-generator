import type { StoryArc } from '$lib/types';

// Skaalbane 시리즈 2편 (level 13) — 내부로: 빛을 따라 들어선 선체
export const storyarc_snowy_skaalbane_13: StoryArc = {
	id: 'snowy_skaalbane_13',
	level: 13,
	chapter_name: {
		korean: '빛을 따라 선체 안으로',
		english: 'Into the Hull, Following the Light',
		japanese: '光を辿り船内へ',
		chinese: '循光步入船舱',
		french: 'Dans la Coque, en Suivant la Lumière',
		spanish: 'Dentro del Casco, Siguiendo la Luz',
		vietnamese: 'Theo Ánh Sáng Vào Thân Tàu',
		thai: 'ตามแสงเข้าสู่ลำเรือ',
		hindi: 'रौशनी का पीछा करते हुए पतवार के भीतर'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'잔해탑의 첫 입구를 지나 얼어붙은 선체 내부로 들어선다. 켜켜이 쌓인 갑판과 부서진 노들 사이로 좁은 통로가 이어지고, 통로 끝에서 푸른 빛이 더 또렷하게 새어 나온다.',
		rule: '선체 안으로 들어선 자는 빛을 향해 나아가야만 한다. 길은 오직 빛의 박동을 따라서만 이어지고, 그 외의 모든 통로는 두꺼운 얼음으로 막혀 있다.',
		secret:
			'통로의 얼음벽에는 산 자처럼 몸부림치다 굳어버린 손자국들이 박혀 있다. 마치 누군가 바깥으로 나오려 발버둥치다 그대로 얼어붙은 듯하다.'
	},

	protagonist_goal: '잔해탑 내부로 들어가, 빛의 박동을 따라 그 근원에 한 걸음 더 다가가라.',

	act_tone: {
		intro: {
			mood: '서늘한 호기심',
			tension: 2,
			narrative_role: '선체 안의 푸른 빛이 더 또렷하다. 통로는 오직 빛을 향해서만 열려 있다.'
		},
		rising: {
			mood: '불길한 발견',
			tension: 3,
			narrative_role:
				'얼음벽에 박힌 몸부림의 흔적, 굳어버린 손자국들. 빛에 가까워질수록 한기가 살아있는 것처럼 탐험대를 향해 다가온다.'
		},
		climax_finale: {
			mood: '갇힌 자들의 신호',
			tension: 5,
			narrative_role:
				'통로 끝, 빛이 강해지는 순간 얼음벽 속 손자국들이 일제히 푸르게 번뜩인다. 마치 갇힌 자들이 탐험대를 향해 손을 뻗는 듯하다.'
		}
	},

	final_boss: {
		id: 'EchoHarvester_Skaalbane_V1',
		name: 'Skaalbane',
		appearance:
			'The frozen interior of a wreck-tower, narrow passages winding between stacked decks and shattered oars sealed in blue ice. A clearer pulsing blue light leaks from deep within at the end of the corridor. Human handprints and figures frozen mid-struggle are embedded in the icy walls, as if reaching outward. Cinematic eerie blue lighting, claustrophobic high-fantasy aesthetic.',
		surface_identity:
			'빛의 박동을 따라 들어선 잔해탑 내부. 영웅의 유물이 빛의 근원에 잠들어 있으리라 여겨진다.',
		true_identity:
			'얼음벽에 박힌 몸부림의 흔적은, 이 안에서 무언가가 산 자들을 가두고 얼려왔음을 암시한다. 빛은 유물이 아니라, 그 무언가의 핵에서 새어 나오고 있다.',
		motivation:
			'탑 안의 무언가는 빛으로 산 자들을 안쪽으로 유인한다. 깊이 들어올수록 한기는 더 끈질기게 그들의 온기를 더듬는다.',
		twist:
			'통로 끝에서 빛이 강해지는 순간, 얼음벽 속 손자국들이 일제히 푸르게 번뜩인다. 갇힌 자들이 탐험대를 향해 손을 뻗듯 얼음이 우드득 갈라진다. "…나와… 함께… 여기 있어줘…" 여러 목소리가 겹쳐진 속삭임이 한기와 함께 살갗을 파고든다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '통로 안쪽 빛의 박동이 1편보다 또렷하고, 박동에 맞춰 한기가 강해졌다 약해진다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '빛의 박동과 한기가 함께 움직였다 — 빛의 근원이 곧 한기의 근원이었다.'
		},
		{
			id: 'fs_02',
			hint: '얼음벽 속에 산 자처럼 몸부림치다 굳어버린 손자국들이 박혀 있다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그 손자국들은 바깥으로 나오려 발버둥치다 얼어붙은 자들의 마지막 흔적이었다.'
		},
		{
			id: 'fs_03',
			hint: '오직 빛을 향한 통로만 열려 있고, 다른 길은 모두 두꺼운 얼음으로 막혀 있다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '길이 안쪽으로만 열린 것은 우연이 아니었다. 무언가가 산 자들을 핵으로 유인하고 있었다.'
		},
		{
			id: 'fs_04',
			hint: '빛에 가까워질수록 여러 목소리가 겹쳐진 속삭임이 점점 또렷해진다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그 속삭임은 갇힌 자들의 외침이었다 — 함께 있어달라는, 끝없는 고독의 호소였다.'
		}
	],

	npc_roles: {
		eira: {
			role: '통로의 해독자',
			arc: '2편: 얼음벽의 손자국과 룬을 읽어, 이 안에서 산 자들이 갇혀 죽어갔음을 더듬어 밝힌다.'
		},
		frost: {
			role: '박동을 읽는 자',
			arc: '2편: 빛의 박동에 맞춰 한기가 강해졌다 약해지는 것을 감지하고, 빛과 한기가 한 근원임을 직감한다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '오직 빛을 향한 길',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'탐험대가 잔해탑 내부로 들어선다. 통로는 오직 빛을 향해서만 열려 있고, 나머지 길은 얼음으로 막혀 있다. 에이라가 통로 벽의 룬을 읽으며 길을 잡는다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '얼음 속의 손자국',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 얼음벽에 박힌 손자국들을 발견한다. 산 자처럼 몸부림치다 굳어버린 흔적이다. "이들은… 나오려고 발버둥치다 얼어붙었어." 단순한 무덤이 아니다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '박동과 한기',
			boss: 'random_boss',
			npc: 'frost',
			summary:
				'프로스트가 빛이 박동할 때마다 한기가 강해졌다 약해지는 것을 감지한다. "빛이 뛸 때마다… 한기가 우리한테 손을 뻗어. 빛이랑 추위가 같은 데서 나오고 있어." 빛의 근원이 곧 위협임을 직감한다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '막힌 길, 열린 길',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 통로 구조를 읽는다. 모든 길이 빛을 향해서만 열려 있다. 우연이 아니라, 무언가가 산 자들을 안쪽으로 유인하기 위해 길을 빚어낸 것이다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '뻗어오는 손',
			boss: 'pool_108',
			npc: 'frost',
			summary:
				'통로 끝에서 빛이 강해지는 순간, 얼음벽 속 손자국들이 일제히 번뜩이며 얼음이 갈라진다. "…나와 함께 여기 있어줘…" 겹쳐진 속삭임이 한기와 함께 파고든다. 빛과 한기의 근원을 읽어낸 프로스트가 탐험대를 지키며 전투를 맞는다.'
		}
	],

	act_summary: {
		intro: '잔해탑 내부, 오직 빛을 향해서만 열린 통로. 에이라가 룬을 읽으며 빛의 근원을 향해 나아간다.',
		rising: '얼음 속 손자국을 발견한 에이라, 빛의 박동과 한기를 잇는 프로스트. 산 자들이 갇혀 죽어간 흔적이 드러난다.',
		climax_finale: '빛이 강해지자 손자국들이 번뜩이며 얼음이 갈라지고, 함께 있어달라는 겹쳐진 속삭임이 한기와 함께 밀려온다.'
	}
};
