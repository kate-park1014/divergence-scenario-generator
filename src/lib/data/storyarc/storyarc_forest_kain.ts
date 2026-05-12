import type { StoryArc } from '../../types';
import { forest_pools } from '../sample/monster';

export const storyarc_forest_kain: StoryArc = {
	id: 'GuardianCaptain_V0',
	theme: 'forest',
	rising_count: 3,

	world: {
		setting:
			'숲 외곽 마을 리엔이 하룻밤 사이에 사라졌다. 포자에 잠식된 자에겐 시체조차 남지 않는다. 살아남은 자는 단 한 명. 그를 거두어준 것은 수호대 대장 카인이었다. 숲 깊은 곳엔 세계수가 잠들어 있고, 요정들은 오래된 경고를 속삭인다.',
		rule: '포자 존재들은 인간을 잠식한다. 수호대는 인간을 지키기 위해 핵을 부수며 숲을 개간한다. 모든 위험 지역은 수호대가 파악하고 있다 — 그래서 어디서 비극이 일어날지도 안다.',
		secret:
			'카인은 포자를 직접 통제한다. 마을 학살은 권력의 도구였고, 주인공의 분노는 세계수를 깨우기 위한 연료였다. "구해준 자"가 곧 "파괴한 자"였다. 살아남은 이유는 운이 아니었다 — 카인이 남겨둔 것이다.'
	},

	protagonist_goal: '리엔 마을을 잠식한 진짜 범인을 찾아 복수하고, 깨어나려는 세계수를 막아라.',

	act_tone: {
		intro: {
			mood: '잿더미 위의 분노',
			tension: 2,
			narrative_role:
				'리엔 마을이 사라졌다. 시체도, 흔적도 없다. 요정 루미나가 나타나 "수호대가 전부 좋은 사람은 아니야"라고 경고하지만 지금 그 말은 들리지 않는다. 수호대 대장 카인이 손을 내민다. 복수가 시작된다.'
		},
		rising: {
			mood: '쌓이는 의심',
			tension: 3,
			narrative_role:
				'임무를 거듭할수록 어긋난 조각들이 모인다. 포자는 숲 안쪽에서 바깥으로 퍼졌다. 수호대원들이 하나씩 소리도 없이 사라진다. 요정 리라가 거듭 같은 말을 한다 — "카인이 보낸 거야. 너희 마을도." 카인은 그때마다 부드럽게 부정한다. "숲 요정들은 거짓말쟁이야."'
		},
		climax_finale: {
			mood: '진실의 무게',
			tension: 5,
			narrative_role:
				'세계수 앞. 가장 오래 산 요정 엘라라가 모든 것을 늘어놓는다. 마을 잠식은 미끼였고, 주인공의 분노는 세계수 각성의 연료였다. 카인이 등장해 — 부정하지 않는다. "그래." 숲 전체가 무기로 깨어나려 한다. 복수의 칼끝이 진짜 향해야 할 곳이 드러난다.'
		}
	},

	final_boss: {
		id: 'GuardianCaptain_V0',
		name: '수호대 대장 카인 (Kain)',
		appearance_npc:
			'A calm, weathered captain of the Guardians in worn leather armor. He speaks softly, apologizing for arriving too late. He knows the names of every village and the locations of every danger. His hand rests on the survivor\'s shoulder like a promise — "I\'ll help you with your vengeance."',
		appearance_boss:
			"Kain himself never appears on the battlefield. Instead, the World Tree's heart — the World Root Titan — awakens at his touch, fed by the protagonist's anger. Roots the size of villages tear through the canopy. Spores spiral around its core in perfect, controlled patterns — too controlled for nature. A second silhouette hovers behind it, watching, not fighting. Kain's weapon is the forest itself.",
		surface_identity:
			'늦게 도착한 것을 사과하는 다정한 수호대 대장. 위험 지역을 모두 파악하고 약한 자를 거두는 보호자.',
		true_identity:
			'포자를 통제하는 기술을 가진 진짜 흑막. 마을 학살로 수호대의 공포와 권력을 키워왔고, 세계수 각성에 필요한 "강한 분노"의 그릇을 길러내려 살아남은 자를 곁에 두었다.',
		motivation:
			'세계수를 무기로 깨워 숲 전체를 자신의 손에 넣는다. 그 마지막 부싯돌은 — 진실을 알게 된 자의 분노다. 주인공은 처음부터 카인의 가장 정교한 도구였다.',
		twist:
			'"엘라라랑 얘기했군. 다 들었어?" 카인은 부정하지 않는다. "그래." 그 한 마디로 모든 의심이 사실이 된다. "처음부터 미끼로 쓴 거야. 근데 잘 됐잖아 — 넌 강해졌고, 여기까지 왔어." 그가 세계수 뿌리에 손을 댄다. 숲이 흔들린다. 복수하고 싶어 잡았던 그 손이, 가족을 죽인 손이었다.'
	},

	global_foreshadowing: [
		{
			id: 'kn_01',
			hint: '포자들이 주인공만은 그냥 지나쳤다. 마을 사람들은 전부 잠식했으면서 — 단 한 명만 남겼다.',
			plant_act: 'intro',
			plant_room: 5,
			reveal_act: 'climax_finale',
			reveal_room: 7,
			reveal_context:
				'살아남은 건 운이 아니었다. 카인이 통제한 포자가 주인공을 남겨둔 것이다. 세계수 각성에 쓸 "강한 분노"의 그릇을 키우기 위해.'
		},
		{
			id: 'kn_02',
			hint: '카인은 만나자마자 마을 이름 "리엔"을 정확히 안다. "위험 지역은 전부 파악하고 있어. 늦어서 미안해."',
			plant_act: 'intro',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 5,
			reveal_context:
				'위험 지역을 "파악"한 것이 아니라 "지정"한 것이었다. 어디서 마을이 사라질지 그는 처음부터 알고 있었다 — 자기가 정했으니까.'
		},
		{
			id: 'kn_03',
			hint: '포자 흔적이 숲 안쪽에서 바깥으로 퍼져나간 모양이다. 자연 확산이 아니라 누가 유도한 듯한 궤적.',
			plant_act: 'rising',
			plant_room: 5,
			reveal_act: 'climax_finale',
			reveal_room: 5,
			reveal_context:
				'카인이 직접 포자를 마을로 보냈다. "숲 깊은 곳에 핵이 있으면 바깥으로 퍼져" — 그 핵을 조종한 게 그였다.'
		},
		{
			id: 'kn_04',
			hint: '숲 깊은 곳에서 수호대원들이 하나씩 소리도 없이 사라진다. 포자 흔적조차 없는데. 카인은 "여기는 원래 그래"라고만 한다.',
			plant_act: 'rising',
			plant_room: 3,
			reveal_act: 'climax_finale',
			reveal_room: 7,
			reveal_context:
				'사라진 자들은 진실에 너무 가까워진 자들이었다. 카인이 직접 정리한 것이다 — 주인공만 남기고.'
		},
		{
			id: 'kn_05',
			hint: '요정 리라가 거듭 같은 말을 한다. "카인이 보낸 거야. 너희 마을도." 카인은 그때마다 차분하다 — "숲 요정들은 거짓말쟁이야."',
			plant_act: 'rising',
			plant_room: 10,
			reveal_act: 'climax_finale',
			reveal_room: 5,
			reveal_context: '리라는 거짓말쟁이가 아니었다. 진실을 아는 자였기에 쫓기고 있었던 것이다.'
		}
	],

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '하룻밤 사이에',
			boss: 'random_boss',
			npc: 'lumina',
			summary:
				'평화로운 숲 외곽 마을 리엔이 사라졌다. 시체조차 남지 않은 빈터에 노란 머리 요정 루미나가 나타나 위로한다 — "포자에 잠식되면 시체가 안 남아." 그러나 포자들은 주인공만은 그냥 지나쳤다. 루미나가 조용히 덧붙인다. "수호대가 전부 좋은 사람은 아니야." 곧 수호대 대장 카인이 도착해 마을 이름을 정확히 부른다. "위험 지역은 전부 파악하고 있어." 복수를 원하는 주인공에게 그가 손을 내민다. 첫 핵을 부순 자리에서 고대 트레안트가 마지막 말을 남긴다 — "너희는 모른다. 진짜 적이 누군지."'
		},
		{
			order: 2,
			act: 'rising',
			title: '안쪽에서 바깥으로',
			boss: 'random_boss',
			npc: 'lyra_meadowsong',
			summary:
				'입대 사흘째. 첫 임무 — 숲 외곽 포자 군체 처치. 카인은 뒤에서 본다며 따라오지 않는다. 녹색 머리 요정 리라가 길을 막아서며 경고한다 — "수호대를 믿지 마. 저들이 숲을 깨우고 있어." 현장의 포자 흔적은 숲 안쪽에서 바깥으로 퍼져나간 모양이다. 누가 유도한 듯한 궤적. 임무 후 보스가 쓰러지며 한 마디 남긴다 — "숲은 거짓말하지 않아. 인간이 거짓말하지."'
		},
		{
			order: 3,
			act: 'rising',
			title: '소리도 없이',
			boss: 'random_boss',
			npc: 'lyra_meadowlight',
			summary:
				'숲이 깊어진다. 수호대원들이 하나씩 — 흔적도, 소리도 없이 사라진다. 카인은 "여기는 원래 그래"라고만 한다. 푸른 머리 요정 리라가 쫓기듯 나타난다. 카인이 추격하던 자였다. "카인은 포자를 통제하는 방법을 알고 있어. 카인이 직접 보내. 리엔 마을 — 너희 마을도 카인이 보낸 거야." 카인이 도착하자 리라는 도망친다. "숲 요정들은 거짓말쟁이야. 신경 꺼." 머릿속에서 리라의 말이 지워지지 않는다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '둘만의 숲',
			boss: 'random_boss',
			npc: 'kain',
			summary:
				'카인과 단둘. 비정상적으로 큰 늑대 발자국, 사라진 동료들의 자리. 카인은 부드럽게 묻는다 — "리엔 마을 가족 있었어? 내가 더 빨리 갔어야 했는데." 사과는 다정하지만 한 박자 빠르다. 보스가 마지막 말을 남긴다 — "이 숲에서 진짜 포식자가 누군지 알아? 카인이야." 카인은 다시 한 번 침착하게 부정한다. "숲 존재들은 전부 거짓말쟁이야." 이제 누구 말이 맞는지 모르겠다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '강한 분노',
			boss: forest_pools.pool_014.pool_id as `pool_${string}`,
			npc: 'elara',
			summary:
				'세계수 앞. 가장 오래 산 요정 엘라라가 기다리고 있었다. 카인은 포자를 통제해 마을을 파괴하며 권력을 키워왔고 — 세계수를 깨우려면 강한 분노를 가진 자가 필요했다. 리엔 마을은 미끼였고, 주인공이 살아남은 건 운이 아니었다. 카인이 등장해 부정하지 않는다. "그래. 처음부터 미끼로 쓴 거야. 근데 잘 됐잖아 — 넌 강해졌고 여기까지 왔어." 그가 세계수 뿌리에 손을 댄다. 숲의 심장 — World Root Titan — 이 깨어난다. 복수의 칼끝이 진짜 향해야 할 곳이 드러난다.'
		}
	],

	act_summary: {
		intro:
			'리엔 마을이 하룻밤 사이에 사라졌다. 살아남은 자는 한 명. 수호대 대장 카인이 손을 내밀고, 복수가 시작된다. 요정 루미나의 경고는 들리지 않는다.',
		rising:
			'포자 흔적이 안쪽에서 바깥으로. 수호대원이 소리도 없이 사라진다. 요정 리라가 거듭 같은 말을 한다 — "카인이 보낸 거야." 카인은 그때마다 차분히 부정한다.',
		climax_finale:
			'엘라라가 모든 진실을 늘어놓고 — 카인은 부정하지 않는다. 주인공의 분노가 세계수를 깨운다. 구해준 자가 곧 파괴한 자였다.'
	}
};
