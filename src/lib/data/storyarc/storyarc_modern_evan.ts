import type { StoryArc } from '../../types';
import { modern_pools } from '../sample/monster';

export const storyarc_modern_evan: StoryArc = {
	id: 'EndlessApplicant_V0',
	chapter_name: {
		korean: '다음 기회',
		english: 'The Next Opportunity',
		japanese: '次の機会',
		chinese: '下一个机会',
		french: 'La Prochaine Chance',
		spanish: 'La Próxima Oportunidad',
		vietnamese: 'Cơ Hội Tiếp Theo',
		thai: 'โอกาสครั้งหน้า',
		hindi: 'अगला अवसर'
	},
	theme: 'modern',
	rising_count: 3,

	world: {
		setting:
			'고층 빌딩의 끝없는 면접 대기실. 차가운 형광등과 회색 카펫. 정장을 입은 사람들이 이력서를 손에 쥔 채 차례를 기다린다. 그 가운데 한 청년이 정중하게 인사한다. "다음번엔 분명 다를 거예요."',
		rule:
			'이곳에서는 누구나 "다음 기회"를 약속받는다. 이번 면접이 끝나면 다음 라운드, 다음 라운드가 끝나면 또 다음. 모두가 한 발만 더 가면 된다고 믿는다.',
		secret:
			'이곳에는 "다음"만 존재한다. 도착은 영원히 유예된다. 희망은 무한 루프의 연료가 되어 사람들을 가둔다. 에반은 이미 그 루프의 일부다.'
	},

	protagonist_goal: '면접장에서 빠져나가는 진짜 출구를 찾아라.',

	act_tone: {
		intro: {
			mood: '예의와 일상감',
			tension: 1,
			narrative_role:
				'대기실에서 정장 차림의 청년 에반을 만난다. 그는 잘 정리된 이력서 파일을 들고 정중하게 인사한다. "다음번엔 분명 다를 거예요." 평범한 취준생 같다.'
		},
		rising: {
			mood: '익숙한 피로와 위화감',
			tension: 3,
			narrative_role:
				'면접장이 끝없이 이어진다. 한 라운드를 통과하면 또 다른 라운드. 에반은 지치지 않는다. 오히려 차분해진다. "거의 다 왔어요. 이번엔 진짜에요."'
		},
		climax_finale: {
			mood: '체념과 공포',
			tension: 5,
			narrative_role:
				'드디어 "최종 면접" 문이 열린다. 그러나 안에는 또 다른 문 — "다음 라운드". 또 다른 문. 또 다른 문. 돌아보니 입구는 사라졌다. 에반이 미소 짓는다. "괜찮아요… 다음이 있으니까요."'
		}
	},

	final_boss: {
		id: 'EndlessApplicant_V0',
		name: 'Evan Next',
		appearance_npc:
			'A polite young job seeker in a wrinkled suit, holding a neatly organized resume file. He bows slightly, smiling with quiet confidence. Under his breath, he repeats, "Next time will be different."',
		appearance_boss:
			'A grotesque entity made of endlessly stacking resumes and certificates, printing from its own body without pause. Dozens of mouths whisper variations of "next opportunity," "next round," "next time." Rejection letters fall like snow, only to be picked up and rewritten instantly. The battlefield loops like an infinite waiting room.',
		surface_identity: '결코 포기하지 않는, 다음 기회를 향해 늘 준비된 성실한 지원자.',
		true_identity:
			'영원한 유예에 갇힌 존재. 진전은 미루기로 대체되었고, 희망은 "다음"이라는 무한 루프의 무기가 되었다.',
		motivation:
			'다른 사람들도 준비와 지연의 사이클로 끌어들이려 한다. "진짜 시작은 한 발만 더 가면 된다"고 믿게 만든다.',
		twist:
			'"거의 다 왔어요. 이번엔 진짜로 느껴져요." 에반이 전보다 차분하게 미소 짓는다. 문이 열린다 — "최종 면접". 그 안에 또 다른 문 — "다음 라운드". 또. 또. 그는 당황하지 않는다. "괜찮아요… 다음이 있으니까요." 돌아본 순간 — 입구는 사라져 있다. 앞으로 향한 문들만 남아 있을 뿐이다.'
	},

	global_foreshadowing: [
		{
			id: 'ev_01',
			hint: '에반의 이력서 파일은 너무 두껍다. 페이지를 넘겨보면 같은 이력이 날짜만 바뀌어 반복된다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그는 같은 인생을 수없이 반복하며 "다음"을 기다려왔다. 이력서가 곧 그의 감옥이었다.'
		},
		{
			id: 'ev_02',
			hint: '대기실의 시계가 숫자만 다를 뿐 항상 같은 자리에 있다. 누구도 시간이 흐른다고 느끼지 않는다.',
			plant_act: 'rising',
			plant_room: 3,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '시간은 흐르지 않았다. 매번 "다음"으로 갱신되며 같은 순간을 반복했을 뿐이다.'
		},
		{
			id: 'ev_03',
			hint: '면접관이 매번 다른 얼굴이지만 같은 말을 한다 — "결과는 추후에 통보드릴게요."',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '"추후"는 영원히 오지 않는다. 결과 자체가 이 공간의 연료였다.'
		},
		{
			id: 'ev_04',
			hint: '복도 끝에 작은 화살표 표지판이 있다. 양 방향 모두 "Next →".',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '어디로 가도 "다음"뿐이었다. 출구는 처음부터 존재하지 않았다.'
		}
	],

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '정중한 인사',
			boss: 'random_boss',
			npc: 'jett',
			summary:
				'면접 대기실. 정장을 입은 청년이 이력서 파일을 들고 정중히 인사한다. "다음번엔 분명 다를 거예요." 평범해 보인다. 곧 그의 차례가 호명되고, 에반은 면접실로 들어간다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '인사팀의 포식자',
			boss: 'random_boss',
			npc: 'dan',
			summary:
				'대기실 한쪽에서 면접 진행자가 갑자기 형태가 일그러진다 — 무수한 입과 펜으로 이루어진 인사팀의 괴물. "다음 분, 들어오세요." 댄이 외친다. "저놈, 며칠째 지원자들을 잡아먹고 있다고요!" 탐험대가 다른 지원자들을 지키며 괴물을 처치한다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '루나의 면접 후일담',
			boss: 'random_boss',
			npc: 'luna',
			summary:
				'옥상 흡연실 같은 자투리 공간. 루나가 자판기 커피를 마시며 자기 이야기를 한다. 작년에 거의 합격할 뻔했던 회사 이야기. "최종까지 갔는데 결국 떨어졌어. 한참 멍해 있다가, 다시 자기소개서를 쓰기 시작하더라고." 누군가 자조적으로 웃는다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '돌아온 지원자',
			boss: 'random_boss',
			npc: 'jett',
			summary:
				'에반이 면접실에서 나온다. 한 번도 떨어지지 않은 표정이다. "거의 다 왔어요." 그가 이력서 파일을 다시 정리한다. 슬쩍 보인 페이지에 같은 이력이 날짜만 바뀌어 반복되고 있다. 복도 끝 표지판이 양쪽 모두 "Next →"를 가리킨다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '입구가 사라졌다',
			boss: modern_pools.pool_098.pool_id as `pool_${string}`,
			npc: 'aria',
			summary:
				'"최종 면접" 문이 열린다. 그 안에 "다음 라운드". 그 안에 또 다른 문. 또. 또. 돌아본 순간 입구는 사라져 있다. 에반이 차분하게 미소 짓는다. "괜찮아요… 다음이 있으니까요." 그의 몸에서 이력서와 자격증이 끝없이 출력되기 시작한다. 수십 개의 입이 속삭인다 — "다음, 다음, 다음."'
		}
	],

	act_summary: {
		intro: '면접 대기실에서 정중한 청년 에반을 만난다. 곧 그의 차례가 호명된다.',
		rising: '에반이 면접에 들어간 사이 인사팀의 괴물이 나타난다. 루나가 자기 면접 실패담을 들려준다. 에반이 돌아오고, 표지판은 양쪽 모두 "Next".',
		climax_finale: '문 뒤에 또 문. 입구는 사라졌다. 희망이라는 이름의 무한 루프가 시작된다.'
	}
};
