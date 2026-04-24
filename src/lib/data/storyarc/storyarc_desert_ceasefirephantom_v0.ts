import type { StoryArc } from '$lib/types';

export const storyarc_desert_ceasefirephantom_v0: StoryArc = {
	final_boss: {
		true_identity:
			"갈등 그 자체를 유지하는 시스템. 문제를 해결하기보다 '지속 가능한 긴장 상태'를 만들어내며, 그 안에서 권력과 이익이 순환된다. 평화는 끝을 의미하기에, 의도적으로 도달하지 않는다.",
		appearance_boss:
			'A towering desert entity wrapped in countless torn banners and faded flags of no identifiable nation. Its body is split into shifting halves that never fully separate nor merge, constantly pulling against each other like a living stalemate. From its chest hangs a massive, cracked hourglass leaking glowing sand that never empties. Around it, ghostly soldiers made of dust endlessly rise, clash silently, and collapse again in looping cycles. The sky above flickers between dawn and dusk, never settling. The color palette is muted—sand, ash, and dull crimson—avoiding any specific cultural markers.',
		surface_identity:
			"끊임없이 이어지는 전쟁 속에서 '균형'을 유지하는 존재. 완전한 승리도, 완전한 패배도 허용하지 않는다.",
		id: 'CeasefirePhantom_V0',
		twist:
			"'너희는 끝을 원하지.' 카디르의 두 목소리가 서로 엇갈리며 울린다. '하지만 끝은 공허다. 적이 사라지면, 다음은 무엇을 증오할 건데?' 모래 병사들이 다시 일어나 서로를 겨눈다. '나는 전쟁을 만든 적 없다. 단지… 멈추지 않게 했을 뿐이다.' 쓰러지며 모래가 흩어진다 — '…평화는… 너무 비싸서… 아무도 감당하지 못해…'",
		motivation:
			"탐험대가 갈등을 끝내거나 근본을 바꾸려는 시도를 막는다. 균형이 깨지면 자신도 사라지기 때문. '완전한 해결'은 이 세계에서 가장 위험한 변수다.",
		name: '휴전의 망령 카디르 (Qadir)',
		appearance_npc:
			'A towering desert entity wrapped in countless torn banners and faded flags of no identifiable nation. Its body is split into shifting halves that never fully separate nor merge, constantly pulling against each other like a living stalemate. From its chest hangs a massive, cracked hourglass leaking glowing sand that never empties. Around it, ghostly soldiers made of dust endlessly rise, clash silently, and collapse again in looping cycles. The sky above flickers between dawn and dusk, never settling. The color palette is muted—sand, ash, and dull crimson—avoiding any specific cultural markers.'
	},
	rising_count: 3,
	protagonist_goal:
		'영원히 끝나지 않는 사막의 갈등을 종식시키고, 거짓된 균형 뒤에 숨겨진 진실을 밝혀내어 진정한 평화를 가져오는 것.',
	id: 'desert_ceasefirephantom_v0',
	act_summary: {
		rising:
			"자피르의 무의미한 저항, 자흐라 피라의 기만적인 조언, 그리고 당키의 증언을 통해 사막 갈등의 심연과 배후에 숨겨진 '보이지 않는 손'의 복선들이 점차 드러난다.",
		intro:
			"탐험대는 끝나지 않는 사막의 갈등 한가운데로 들어서고, '평화는 비싸다'는 나이라의 경고를 통해 이 세계의 근본적인 문제의식을 마주한다.",
		climax_finale:
			'카디르와의 최종 대면에서 나이라의 의도치 않은 조력과 함께, 갈등이 의도적으로 유지되는 시스템이라는 충격적인 진실이 밝혀진다. 탐험대는 절망적인 현실 속에서 비극적인 결말을 맞이한다.'
	},
	theme: 'desert',
	world: {
		setting:
			"끝없이 펼쳐진 모래와 황야의 사막. 이곳에서는 다양한 세력들이 끊임없이 대립하고 소규모 충돌이 반복되지만, 어떤 전쟁도 '결정적인 승리'나 '완전한 패배'로 끝나지 않는다. 모든 것은 모래처럼 흐르고, 갈등은 끝나지 않는 순환 속에 갇혀 있다.",
		secret:
			"사막의 '균형'은 자연적인 현상이 아니라, '휴전의 망령 카디르'가 의도적으로 유지하는 시스템이다. 갈등 자체가 권력과 이익을 순환시키는 거대한 경제 시스템이자 정치적 도구이며, 완전한 평화는 이 시스템의 붕괴를 의미하기에 카디르는 이를 필사적으로 막는다.",
		rule: "이 사막에서는 어떤 갈등도 궁극적인 해결에 도달할 수 없다. 평화 협정은 반드시 파기되며, 영웅적인 승리는 언제나 새로운 적의 등장으로 무의미해진다. 균형이라는 명목 아래 모든 '종결' 시도는 좌절된다."
	},
	scenarioOutline: [
		{
			boss: 'random_boss',
			title: '사막의 첫걸음, 그리고 거짓된 평화',
			npc: 'Naira',
			order: 1,
			summary:
				"탐험대는 사막에 첫발을 내딛는다. 지친 상인 나이라를 만나 '평화의 부적'을 사지만, 나이라는 이 부적이 어떤 갈등도 멈추지 못할 것이라며 '이 사막에서 평화는 너무 비싸 아무도 감당하지 못한다'고 덧붙인다. 그녀의 말은 이 세계의 절망적인 현실을 보여주는 듯하다.",
			act: 'intro'
		},
		{
			title: '끝없는 전투의 굴레',
			boss: 'random_boss',
			act: 'rising',
			summary:
				"탐험대는 폐허가 된 전장에서 절망적인 싸움을 이어가는 전사 자피르를 돕는다. 자피르는 '어떤 승리도 헛될 뿐, 새로운 적은 언제나 다시 나타난다'며 지쳐있다. 그는 '이 모든 싸움 뒤에 보이지 않는 손이 양측을 조종하는 것 같다'는 소문을 읊조린다.",
			order: 2,
			npc: 'Zafir'
		},
		{
			summary:
				"탐험대는 정보와 물자를 거래하며 갈등 속에서 이득을 취하는 자흐라 피라를 만난다. 그녀는 주인공에게 '갈등의 핵심으로 가는 가장 빠른 지름길'이라며 특정 경로를 알려주지만, 이는 사실 더 큰 교착 상태로 이끄는 함정이다. 그녀는 '가장 빠른 길은 가장 위험한 길'이라며 알 수 없는 미소를 짓는다.",
			act: 'rising',
			order: 3,
			npc: 'Zahra_Pyra',
			title: '탐욕의 조언자',
			boss: 'random_boss'
		},
		{
			boss: 'random_boss',
			title: '희생양의 증언',
			npc: 'Donkey',
			order: 4,
			act: 'rising',
			summary:
				"탐험대는 갑자기 발생한 두 부족 간의 전투에 휘말린 순박한 당키를 구한다. 당키는 전투 직전 '갈등을 부추기는 이상한 속삭임과 전조'를 들었다며 공포에 질려 말한다. 이는 시스템이 인위적으로 갈등을 조작하고 있음을 암시하는 복선이다."
		},
		{
			summary:
				"마침내 '휴전의 망령 카디르'와 대면한 탐험대. 그 순간 나이라가 다시 나타나 주인공을 돕는 듯 보이지만, 그녀의 행동은 오히려 카디르의 시스템을 무의식적으로 강화하는 결과를 낳는다. 카디르의 '평화는 너무 비싸 아무도 감당하지 못해'라는 충격적인 진실과 함께, 모든 갈등이 의도된 시스템이었음이 밝혀진다. 탐험대는 절망적인 선택에 직면한다.",
			act: 'climax_finale',
			order: 5,
			npc: 'Naira',
			title: '균형의 끝, 망령의 진실',
			boss: 'pool_053'
		}
	],
	chapter_name: {
		japanese: '休戦の亡霊カディール：終わらない砂漠の均衡',
		french: "Qadir, le Spectre du Cessez-le-feu : L'Équilibre Éternel du Désert",
		hindi: 'कादिर, युद्धविराम का प्रेत: रेगिस्तान का अंतहीन संतुलन',
		chinese: '停战的幽灵卡迪尔：永无止境的沙漠平衡',
		thai: 'Qadir, วิญญาณแห่งการหยุดยิง: สมดุลอันไม่สิ้นสุดของทะเลทราย',
		korean: '휴전의 망령 카디르: 끝나지 않는 사막의 균형',
		vietnamese: 'Qadir, Bóng Ma Ngừng Bắn: Cân Bằng Vô Tận Của Sa Mạc',
		spanish: 'Qadir, el Fantasma del Alto el Fuego: El Equilibrio Interminable del Desierto',
		english: 'Qadir, Phantom of the Ceasefire: The Unending Balance of the Desert'
	},
	global_foreshadowing: [
		{
			hint: '진정한 평화는 너무나 비싸서 아무도 감당할 수 없을 것이다.',
			reveal_context: '카디르의 최후 대사에서 진정한 평화의 대가와 시스템 유지의 이유가 밝혀질 때.',
			id: 'GF_001_PeaceCost',
			reveal_room: 5,
			reveal_act: 'climax_finale',
			plant_act: 'intro',
			plant_room: 1
		},
		{
			plant_room: 2,
			plant_act: 'rising',
			reveal_act: 'climax_finale',
			id: 'GF_002_HiddenHand',
			reveal_room: 5,
			hint: '모든 갈등 뒤에는 보이지 않는 손이 양측을 조종하고 있다.',
			reveal_context:
				"자피르가 '숨겨진 손'에 대한 소문을 언급하고, 클라이맥스에서 카디르의 정체가 드러나며 그 소문이 진실임이 확인될 때."
		},
		{
			reveal_act: 'climax_finale',
			plant_act: 'rising',
			plant_room: 3,
			reveal_context:
				"자흐라 피라의 '도움'이 사실은 갈등을 심화시키는 기만적인 조언이었음을 깨닫고, 카디르가 시스템을 유지하기 위해 '희망'마저 이용했음을 알게 될 때.",
			hint: '가장 빠르고 쉬워 보이는 평화의 길은, 결국 가장 위험한 함정이다.',
			id: 'GF_003_DeceptivePath',
			reveal_room: 5
		},
		{
			reveal_act: 'climax_finale',
			plant_act: 'rising',
			plant_room: 4,
			reveal_context:
				"당키가 목격한 '이상한 전조'가 카디르가 갈등을 촉발시키기 위해 만들어낸 의도적인 현상이었음이 드러날 때.",
			hint: '갑작스러운 충돌은 우연이 아니며, 갈등을 부추기는 이상한 전조가 있다.',
			id: 'GF_004_ManufacturedChaos',
			reveal_room: 5
		}
	],
	act_tone: {
		rising: {
			tension: 3,
			mood: '절망, 혼돈',
			narrative_role: '갈등의 심화와 진실에 대한 단서 제공'
		},
		intro: {
			tension: 1,
			mood: '음울함, 경고',
			narrative_role: '세계관과 문제의식 제시'
		},
		climax_finale: {
			narrative_role: '진실의 폭로와 비극적인 결말',
			tension: 5,
			mood: '충격, 비극적 깨달음'
		}
	},
	npc_roles: {
		Donkey: {
			role: '희생양/증언자',
			arc: "4화에서 갑작스러운 전투에 휘말려 고통받는 인물. 갈등이 인위적으로 조작되었음을 암시하는 '이상한 전조'를 목격하며, 시스템의 희생양으로서 진실의 단편을 증언하는 역할."
		},
		Naira: {
			role: '현상 유지의 조력자/속박된 상인',
			arc: '1화에서 평화의 무의미함을 설파하며 주인공의 여정을 시작하게 하는 인물. 5화(클라이맥스)에서 재등장하여 알게 모르게 카디르의 시스템을 유지하는 데 일조했음이 드러나, 처음과 끝을 잇는 동시에 반전의 연결고리 역할을 하는 인물.'
		},
		Zahra_Pyra: {
			arc: "3화에서 갈등 속에서 이득을 취하며 주인공에게 겉으로는 도움이 되는 듯하지만 결국은 오도하는 조언을 제공하는 인물. '평화로 가는 가장 빠른 길이 가장 위험하다'는 복선을 심으며, 갈등의 지속에 기여하는 시스템의 일부임을 보여주는 역할.",
			role: '갈등의 중개자/기만적인 조언자'
		},
		Zafir: {
			role: '환멸의 전사/무의미한 저항자',
			arc: "2화에서 끊임없는 전투에 지쳐 회의감을 드러내는 인물. 아무리 싸워도 끝이 없는 전쟁의 본질을 몸소 보여주며, '숨겨진 손'에 대한 소문을 흘려 복선 역할을 하는 인물."
		}
	}
};
