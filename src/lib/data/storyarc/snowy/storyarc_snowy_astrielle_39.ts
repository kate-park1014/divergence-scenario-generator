import type { StoryArc } from '$lib/types';

// Astrielle 시리즈 4편 (level 39) — 심화: 스스로를 가둔 여왕
export const storyarc_snowy_astrielle_39: StoryArc = {
	id: 'snowy_astrielle_39',
	level: 39,
	chapter_name: {
		korean: '제 손으로 닫은 문',
		english: 'The Door She Closed with Her Own Hands',
		japanese: '自らの手で閉ざした扉',
		chinese: '亲手关上的门',
		french: 'La Porte qu Elle a Fermée de ses Propres Mains',
		spanish: 'La Puerta que Cerró con sus Propias Manos',
		vietnamese: 'Cánh Cửa Nàng Tự Tay Khép Lại',
		thai: 'ประตูที่นางปิดด้วยมือตนเอง',
		hindi: 'वह दरवाज़ा जो उसने अपने हाथों से बंद किया'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'얼음 궁전의 거대한 내정 홀. 안으로 들수록 서리의 빗장이 겹겹이 채워져 있다. 그러나 그 빗장은 침입을 막기 위함이 아니라, 안에 있는 누군가가 밖으로 나오지 못하게 잠근 듯 보인다.',
		rule: '궁전의 모든 문은 안에서 잠겨 있다. 여왕은 침입자를 막는 동시에, 스스로를 이 얼음 성에 봉인하고 있다.',
		secret:
			'여왕은 세상을 가둔 것이 아니라 자신을 가두었다. 제 힘으로 누군가를 다치게 할까 봐, 감정마저 얼려버린 채 거대한 얼음 성 안에 스스로를 봉인한 것이다.'
	},

	protagonist_goal: '겹겹이 잠긴 서리의 빗장이 누구를 가두기 위한 것인지, 그 방향을 확인하라.',

	act_tone: {
		intro: {
			mood: '겹겹의 봉인',
			tension: 2,
			narrative_role:
				'내정 홀로 들수록 서리의 빗장이 겹겹이 나타난다. 안으로 향한 잠금장치를 본 탐험대는 기묘한 위화감을 느낀다.'
		},
		rising: {
			mood: '뒤집히는 의미',
			tension: 4,
			narrative_role:
				'빗장이 모두 안에서 잠겨 있음을 깨닫는다. 이 성은 밖을 막는 요새가 아니라, 안의 누군가를 가두는 감옥이다. 여왕은 스스로를 가두고 있었다.'
		},
		climax_finale: {
			mood: '봉인된 감정',
			tension: 5,
			narrative_role:
				'가장 안쪽 문 앞에서 Astrielle가 모습을 드러낸다. 그녀의 표정엔 어떤 감정도 없이, 마치 감정마저 얼려버린 듯하다. "여기엔… 아무도 들어와선 안 돼요. 저조차도."'
		}
	},

	final_boss: {
		id: 'AstrielleWinterSovereign',
		name: 'Astrielle',
		appearance:
			'A majestic platinum-haired woman standing within a vast cathedral-like ice hall sealed by countless frost bolts, all locked from the inside. Her fragile frost gown shimmers and her frozen-star eyes are utterly still, as if she has frozen her own emotions away. Absolute-zero mist surrounds her like a self-made prison. Ice flowers bloom and shatter underfoot. Cinematic cold solemn lighting, melancholic high-fantasy aesthetic.',
		surface_identity:
			'궁전 가장 깊은 곳에 군림하는 냉혹한 겨울 여왕. 어떤 침입자도 그녀의 봉인된 영역에 닿지 못한다.',
		true_identity:
			'서리의 빗장이 모두 안에서 잠겨 있다는 사실이 진실의 일부를 드러낸다 — 그녀는 세상을 가둔 것이 아니라, 스스로를 가두고 있었다.',
		motivation:
			'자신의 힘이 누군가를 다치게 할까 봐, 감정마저 얼려버린 채 이 얼음 성에 스스로를 봉인했다. 침입자를 막는 것도 결국 그들을 자신으로부터 지키기 위함이다.',
		twist:
			'가장 안쪽 문 앞에 Astrielle가 선다. 그녀의 얼굴엔 어떤 감정도 없다. "여기엔… 아무도 들어와선 안 돼요. 저조차도." 그제야 탐험대는 깨닫는다 — 겹겹의 빗장은 침입을 막는 것이 아니라, 그녀 자신이 밖으로 나가지 못하도록 잠근 것이었음을.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '내정 홀의 서리 빗장들이 하나같이 안쪽을 향해 잠겨 있다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '안으로 잠긴 빗장은, 그녀가 밖을 막은 것이 아니라 자신을 가두었음을 드러냈다.'
		},
		{
			id: 'fs_02',
			hint: '벽에는 누군가 안에서 문을 두드린 듯한 흔적이 서리에 얼어붙어 있다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '안에서 두드린 흔적은, 나가고 싶었으나 끝내 나가지 못한 그녀 자신의 갈등이었다.'
		},
		{
			id: 'fs_03',
			hint: '여왕의 표정에 어떤 감정도 떠오르지 않는다. 마치 감정마저 얼려버린 듯하다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '얼어붙은 표정은, 다치게 하지 않으려 감정 자체를 봉인해버린 그녀의 선택이었다.'
		},
		{
			id: 'fs_04',
			hint: '안쪽으로 갈수록 폭풍은 잦아들고, 다만 깊은 적막만이 짙어진다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '잦아드는 폭풍과 짙어지는 적막은, 그녀가 봉인의 가장 깊은 곳에 다다랐음을 알렸다.'
		}
	],

	npc_roles: {
		eira: {
			role: '빗장의 방향을 읽는 자',
			arc: '4편: 서리 빗장이 모두 안에서 잠겨 있음을 해독하며, 이 성이 요새가 아니라 스스로를 가둔 감옥임을 밝혀낸다.'
		},
		inka: {
			role: '봉인된 마음을 헤아리는 자',
			arc: '4편: 감정마저 얼린 여왕의 얼굴 너머의 슬픔을 헤아리며, 그 봉인을 녹일 온기를 마음에 품는다.'
		},
		bran: {
			role: '문을 열려는 길잡이',
			arc: '4편: 안에서 잠긴 문을 보고, 스스로를 가둔 여왕을 밖으로 이끌어내겠다는 길잡이로서의 의지를 굳힌다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '겹겹의 서리 빗장',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'탐험대가 내정 홀로 들어선다. 에이라가 겹겹의 서리 빗장을 살피다 위화감을 느낀다. "이 잠금장치들… 방향이 이상해요." 첫 단서를 기록한다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '안에서 두드린 자국',
			boss: 'random_boss',
			npc: 'bran',
			summary:
				'브란이 벽에 얼어붙은, 누군가 안에서 문을 두드린 흔적을 발견한다. "나가려다… 못 나간 거야." 길잡이로서 그 사실이 깊이 마음에 박힌다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '잠긴 방향',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 빗장이 모두 안에서 잠겨 있음을 밝힌다. "이 성은 우릴 막는 요새가 아니에요. 안의 누군가를 가두는 감옥이에요." 진실의 일부가 드러난다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '얼어붙은 얼굴',
			boss: 'random_boss',
			npc: 'inka',
			summary:
				'인카가 마침내 가까이 본 여왕의 얼굴에 어떤 감정도 없음을 본다. "…감정까지 얼려버렸어요. 다치게 하지 않으려고." 그 봉인을 녹일 온기를 마음에 품는다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '저조차도',
			boss: 'pool_034',
			npc: 'bran',
			summary:
				'가장 안쪽 문 앞에 Astrielle가 선다. "여기엔… 아무도 들어와선 안 돼요. 저조차도." 겹겹의 빗장이 그녀 자신을 가둔 것임이 드러난다. 브란은 그녀를 밖으로 이끌겠다 결심하나, 여왕은 다시 서리로 문을 닫는다.'
		}
	],

	act_summary: {
		intro: '내정 홀의 겹겹의 서리 빗장. 안으로 향한 잠금장치가 기묘한 위화감을 남긴다.',
		rising: '안에서 두드린 자국을 본 브란, 잠긴 방향을 밝힌 에이라, 얼어붙은 얼굴을 헤아린 인카. 이 성은 요새가 아니라 감옥이었다.',
		climax_finale: '"저조차도 들어와선 안 돼요." 겹겹의 빗장은 그녀가 스스로를 가둔 봉인이었다.'
	}
};
