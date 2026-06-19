import type { StoryArc } from '$lib/types';

export const storyarc_hell_memo_3: StoryArc = {
	id: 'hell_memo_3',
	level: 3,
	chapter_name: {
		korean: '지옥 특급 배달',
		english: 'Hell Express Delivery',
		japanese: '地獄特急配達',
		chinese: '地狱特快专递',
		french: 'Livraison Express des Enfers',
		spanish: 'Entrega Exprés del Infierno',
		vietnamese: 'Chuyển Phát Hỏa Tốc Địa Ngục',
		thai: 'พัสดุด่วนนรก',
		hindi: 'नरक एक्सप्रेस डिलीवरी'
	},
	theme: 'hell',
	rising_count: 3,

	world: {
		setting:
			'지옥의 용암 강변을, 제 몸의 세 배만 한 황금색 소포를 짊어진 낡은 제복의 배달부가 "늦었어, 늦었어!"를 외치며 미친 듯이 뛰어다닌다.',
		rule: '지옥에도 규칙과 서류가 있다. 배달이 늦으면 누군가는 반드시 대가를 치른다.',
		secret:
			'메모는 대우주 기록 보관국의 최하위 사원이다. 서류 한 장을 분실해 차원이 붕괴할 위기에 처하자, 징계를 피하려 직접 지옥까지 배달을 왔다. 거대한 소포는 사실 붕괴를 임시로 틀어막는 지연 보고서 뭉치다.'
	},

	protagonist_goal: '지옥을 헤집고 다니는 다급한 배달부와 그의 거대한 소포의 정체를 밝혀, 이 소동의 진짜 원인을 알아내라.',

	act_tone: {
		intro: {
			mood: '소란스러운 황당함',
			tension: 1,
			narrative_role: '지옥 한복판을 소포 짊어지고 뛰어다니는 배달부. 위협적이라기보단 정신없고 딱하다.'
		},
		rising: {
			mood: '쫓고 쫓기는 소동',
			tension: 3,
			narrative_role: '배달을 막는 자는 누구든 "악성 민원인"이 된다. 그 필사적인 몸부림 뒤로 거대한 비밀이 새어 나온다.'
		},
		climax_finale: {
			mood: '비루한 절박함',
			tension: 5,
			narrative_role: '소포가 찢어지며 수천 장의 서류가 칼날처럼 쏟아진다. 우주적 비밀과 한 비정규직의 처절한 생존이 뒤엉킨다.'
		}
	},

	final_boss: {
		// NOTE: Memo는 final boss pool_id가 아직 존재하지 않음 — 추후 실제 pool_id 생성 후 아래 order5 boss와 함께 교체 필요
		id: 'CosmicClerk_Memo_V1',
		name: 'Memo',
		appearance:
			'지옥의 붉은 용암과 유황 연기가 자욱한 깊은 계곡에서, 낡고 해진 갈색 제복을 입은 왜소한 체구의 존재가 비틀거리고 있다. 머리카락은 새까만 연기에 쩔어 떡지고, 안경알은 금이 가 초점 없는 눈동자가 끊임없이 좌우로 흔들린다. 등에는 지옥의 마법진이 새겨진 황금색 소포를 짊어지고 있는데, 그 크기가 몸집의 세 배는 되어 보이고, 소포에서 뿜어져 나오는 지옥불 기운 때문에 등판이 새까맣게 그을려 있다.',
		surface_identity:
			"지옥의 가장 깊은 곳, 용암 강변을 따라 허둥지둥 뛰어다니는 지옥 특급 배달부. 낡은 유니폼을 입고 거대한 황금색 소포를 짊어진 채 끊임없이 \"늦었어, 늦었어!\"를 외치는 불쌍한 영혼.",
		true_identity:
			"실상은 전 우주적 기록과 시간의 흐름을 관리하는 \"대우주 기록 보관국\"의 최하위 직급 사원. 끔찍한 실수로 지옥 군주의 중요한 서류를 분실한 뒤, 사내 징계를 피하기 위해 필사적으로 직접 지옥까지 배달 온 몸부림치는 비정규직 공무원이다. 그의 거대한 소포는 사실 잃어버린 서류의 원본이 아니라, 서류 분실로 인한 차원 붕괴를 임시로 막기 위한 \"지연 보고서\" 뭉치다.",
		motivation:
			"지옥 군주에게 소포를 제시간에 전달하여 자신의 직장을 사수하고, 대우주 기록 보관국 내부 감사에서 살아남는 것. 그 과정에서 방해하는 모든 존재는 \"배송 지연\"을 야기하는 악성 민원인으로 간주하여 필사적으로 처리한다.",
		twist:
			"탐험대가 소포를 가로채려 하자, '메모'는 비명을 지르며 찢어진 유니폼 사이로 수천 장의 마법 서류를 흩뿌린다. 서류들이 지옥의 공기를 가르며 빛나는 칼날처럼 변하고, '메모'는 초조함에 떨던 손으로 서류를 조종하며 절규한다. \"이 소포는... 제 목숨 줄이란 말입니다! 이거라도 제때 못 내면 저 해고당한다구요! 퇴직금도 없어요! 야근 수당은 바라지도 않으니 제발 그냥 좀 가게 해주세요! 제발, 제발! 으아아아아아, 내 인생!\" 그의 눈동자에서 일순간 우주적 시간의 흐름이 섬광처럼 번쩍인다."
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '배달부가 외치는 "늦었어!"는 이 지옥의 누구를 향한 것도 아닌, 어딘가 먼 곳을 향한 비명 같다.',
			plant_act: 'intro',
			plant_room: 2,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그가 늦으면 안 되는 곳은 지옥이 아니라, 그를 해고하려는 대우주 기록 보관국이었다.'
		},
		{
			id: 'fs_02',
			hint: '소포에서 새어 나온 종잇장에는 지옥의 언어가 아닌, 우주적 좌표와 시간 기록이 빼곡하다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 14,
			reveal_context: '소포는 물건이 아니라, 차원 붕괴를 막는 지연 보고서 뭉치였다.'
		},
		{
			id: 'fs_03',
			hint: '그가 지나간 자리마다, 순간적으로 시간이 멈췄다 흐르는 듯 풍경이 깜빡인다.',
			plant_act: 'rising',
			plant_room: 6,
			reveal_act: 'climax_finale',
			reveal_room: 13,
			reveal_context: '그가 시간의 흐름을 관리하던 기록국 사원이라는 증거였다.'
		},
		{
			id: 'fs_04',
			hint: '배달부는 탐험대를 적이 아니라 "민원인"이라 부르며, 싸우면서도 자꾸 사과한다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 12,
			reveal_context: '그에게 이건 전투가 아니라, 직장을 지키기 위한 처절한 업무였다.'
		}
	],

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '다급한 배달부',
			boss: 'random_boss',
			npc: 'soot',
			summary:
				'용암 강변을 거대한 소포를 짊어진 채 "늦었어!"를 외치며 뛰어다니는 배달부와 마주친다. 수트가 황당해한다 — 지옥에 웬 택배? 그런데 그 비명이 어쩐지 절박하다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '늦었어, 늦었어',
			boss: 'random_boss',
			npc: 'cinder',
			summary:
				'소포에서 새어 나온 종잇장을 신더가 줍는다. 지옥의 언어가 아니라 우주적 좌표와 시간 기록이 빼곡하다. 이 소포, 평범한 물건이 아니다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '거대한 소포',
			boss: 'random_boss',
			npc: 'brim',
			summary:
				'배달부가 지나간 자리마다 시간이 멈췄다 흐르듯 풍경이 깜빡인다. 브림이 알아챈다 — 이 자는 단순한 배달부가 아니라, 시간 그 자체를 다루는 무언가다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '분실된 서류',
			boss: 'random_boss',
			npc: 'drox',
			summary:
				'배달부는 탐험대를 적이 아니라 "민원인"이라 부르며 싸우면서도 자꾸 사과한다. 드록스가 어이없어한다. 이건 전투가 아니라 — 누군가의 야근이다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '지옥 특급 배달',
			boss: 'pool_CosmicClerk_Memo_V1', // NOTE: placeholder — Memo의 실제 final boss pool_id 미존재, 추후 교체 필요
			npc: 'soot',
			summary:
				'소포를 가로채려 하자 메모가 수천 장의 서류를 칼날처럼 흩뿌린다. "이 소포는 제 목숨 줄이란 말입니다!" 그는 차원 붕괴를 막는 지연 보고서를 짊어진, 해고 위기의 우주 기록국 말단 사원이었다. 소포를 빼앗을 것인가, 이 가엾은 비정규직을 그냥 보내줄 것인가.'
		}
	],

	act_summary: {
		intro: '용암 강변을 거대한 소포를 짊어진 채 "늦었어!"를 외치며 뛰어다니는 다급한 배달부.',
		rising:
			'소포 속 종이엔 우주적 좌표가 적혀 있고, 그가 지난 자리엔 시간이 깜빡인다. 그는 탐험대를 "민원인"이라 부르며 사과한다.',
		climax_finale:
			'메모는 차원 붕괴를 막는 지연 보고서를 배달하던, 해고 위기의 우주 기록국 말단 사원이었다.'
	}
};
