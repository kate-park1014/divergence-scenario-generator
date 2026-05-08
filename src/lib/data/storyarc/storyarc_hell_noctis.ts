import type { StoryArc } from '../../types';
import { hell_pools } from '../sample/monster';

export const storyarc_hell_noctis: StoryArc = {
	id: 'Noctis_V1',
	chapter_name: {
		korean: '심연의 재판관',
		english: 'The Judge of the Abyss',
		japanese: '深淵の裁判官',
		chinese: '深渊的审判官',
		french: 'Le Juge de l\'Abîme',
		spanish: 'El Juez del Abismo',
		vietnamese: 'Thẩm Phán Vực Sâu',
		thai: 'ผู้พิพากษาแห่งห้วงลึก',
		hindi: 'गहराई का न्यायाधीश'
	},
	theme: 'hell',
	rising_count: 3,

	world: {
		setting:
			'끝없이 이어지는 지하 회랑. 어딘가에서 멀리 종소리가 울린다. 길을 잃은 탐험대 앞에 검은 로브를 입은 재판관이 등불을 들고 나타난다. 그는 정중히 인사하며 "최후의 문"으로 안내해주겠다고 제안한다.',
		rule:
			'녹티스는 길 잃은 자를 출구로 인도하는 자비로운 안내자라 알려져 있다. 그가 던지는 질문에 답하면 길이 열린다. 거짓말은 등불의 불꽃을 흐리게 만든다.',
		secret:
			'그는 탈출을 돕는 존재가 아니다. 탐험자들이 스스로 죄를 고백하게 만들어 영혼을 심연에 귀속시키는 계약의 신이다. 모든 대답은 계약서에 기록되고 있다.'
	},

	protagonist_goal: '재판관 녹티스의 안내를 따라 심연의 "최후의 문"에 도달하라.',

	act_tone: {
		intro: {
			mood: '안도와 정중함',
			tension: 1,
			narrative_role:
				'길을 잃은 탐험대 앞에 등불을 든 재판관이 나타난다. 그는 정중하다. 출구로 안내해주겠다고 한다. 다행이라고 생각한다.'
		},
		rising: {
			mood: '잔잔한 위화감',
			tension: 3,
			narrative_role:
				'녹티스는 길을 안내하면서 사소한 질문들을 던진다. "지금까지 가장 후회하는 선택은?" "누군가를 버린 적이 있나?" 단순한 대화 같다. 답할수록 등불의 불빛이 진해진다.'
		},
		climax_finale: {
			mood: '경악과 체념',
			tension: 5,
			narrative_role:
				'마침내 거대한 문 앞. 문이 열리지만 그 너머는 끝없는 낭떠러지다. 녹티스가 천천히 계약서를 펼친다. 거기에는 지금까지의 모든 대답이 적혀 있다.'
		}
	},

	final_boss: {
		id: 'Noctis_V1',
		name: '심연의 재판관 녹티스 (Noctis)',
		appearance_npc:
			'A silent judge dressed in elegant black robes, carrying a lantern filled with pale blue souls. Wherever he walks, distant bells echo through the darkness. He politely greets the party and offers to guide them toward the "final gate."',
		appearance_boss:
			'An enormous underworld monarch suspended above an endless abyss. His body is split vertically like two different beings stitched together — one side skeletal and burned, the other unnaturally serene. Behind him float thousands of giant courtroom scales, each holding screaming souls instead of weights.',
		surface_identity: '길 잃은 자들을 심판하고 출구로 인도하는 재판관.',
		true_identity:
			'그는 탈출을 돕는 존재가 아니다. 탐험자들이 스스로 죄를 고백하게 만들어, 영혼을 심연에 귀속시키는 계약의 신이다.',
		motivation: '인간은 절망 속에서 반드시 죄를 털어놓는다는 것을 알고 있다. 그는 그 순간을 기다린다.',
		twist:
			'"스스로 죄를 인정하였으므로, 영혼의 소유권은 심연에 귀속된다." 거대한 문이 열린다. 그 너머에는 아무것도 없다 — 오직 끝없는 낭떠러지뿐. 녹티스가 계약서를 펼친다. 그 안에는 탐험대가 했던 모든 대답이 적혀 있다. 그 순간, 파티원의 그림자가 바닥에서 분리되어 녹티스의 저울 위로 올라간다.'
	},

	global_foreshadowing: [
		{
			id: 'no_01',
			hint: '녹티스의 등불 안에는 푸른 불꽃이 흔들린다. 가까이서 보면, 그것은 작은 사람 형상을 닮은 영혼들이다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '등불 속의 영혼들은 모두 녹티스와 똑같은 계약을 맺었던 자들의 그림자였다.'
		},
		{
			id: 'no_02',
			hint: '녹티스가 던진 질문에 답할 때마다, 어디선가 깃펜이 종이에 글을 쓰는 소리가 들린다. 환청이라고 생각한다.',
			plant_act: 'rising',
			plant_room: 3,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '환청이 아니었다. 모든 대답은 계약서에 기록되고 있었다.'
		},
		{
			id: 'no_03',
			hint: '복도 곳곳에 거대한 저울이 매달려 있다. 한쪽 접시에는 무언가 형체 모를 것이 담겨 있다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '저울 위의 형체는 영혼이었다. 곧 탐험대의 그림자가 그 위에 올라가게 된다.'
		},
		{
			id: 'no_04',
			hint: '탐험대가 솔직하게 답할수록 멀리서 종소리가 가까워진다. 진실의 무게가 종을 울린다고 녹티스가 미소짓는다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '종소리는 계약 성사를 알리는 신호였다. 가까워질수록 도망칠 길은 사라지고 있었다.'
		}
	],

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '정중한 안내자',
			boss: 'random_boss',
			npc: 'king_borin',
			summary:
				'끝없는 회랑에서 길을 잃은 탐험대 앞에 검은 로브의 재판관이 등불을 들고 나타난다. 그는 정중하게 인사하며 "최후의 문"으로 안내해주겠다고 제안한다. 안도한 탐험대가 그를 따른다. 잠시 후 녹티스는 "급한 일이 있다"며 잠시 자리를 비운다 — 회랑 너머에서 종소리가 희미하게 울린다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '회랑의 망령들',
			boss: 'random_boss',
			npc: 'lyra',
			summary:
				'녹티스가 사라진 회랑. 갑자기 벽 틈에서 망령들이 쏟아져 나와 탐험대를 습격한다. 길 잃은 영혼들이 누군가에게 조종당하고 있다. 리라가 검을 뽑으며 외친다 — "이놈들, 내가 옛날에 봤던 자들이야. 절대 우연히 여기 있는 게 아니야." 누군가 이 회랑에서 일을 꾸미고 있다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '리라의 기억',
			boss: 'random_boss',
			npc: 'lyra',
			summary:
				'전투 후, 무너진 예배당에서 잠시 숨을 고른다. 리라가 조용히 입을 연다 — 옛날 같은 회랑에서 동료 한 명을 잃었던 이야기. "그때 그 애도 누군가의 안내를 따라가다가… 다시는 돌아오지 못했어." 일행이 침묵한다. 회랑 어딘가에서 다시 종소리가 울린다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '돌아온 안내자',
			boss: 'random_boss',
			npc: 'lysandra',
			summary:
				'녹티스가 다시 나타난다. 평온한 미소를 지으며 등불을 들어 올린다. "이쯤이면 슬슬 마음이 무거워지셨겠죠?" 그가 가벼운 질문을 던지기 시작한다. "지금까지 가장 후회하는 선택은 무엇인가요?" 어디선가 깃펜 소리가 들린다. 모두 기분 탓이라고 한다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '최후의 문',
			boss: hell_pools.pool_080.pool_id as `pool_${string}`,
			npc: 'morwenna',
			summary:
				'마침내 거대한 문 앞. 문이 천천히 열린다. 그러나 그 너머에는 아무것도 없다 — 오직 끝없는 낭떠러지뿐. 녹티스가 계약서를 펼친다. "스스로 죄를 인정하였으므로, 영혼의 소유권은 심연에 귀속된다." 그 순간, 파티원의 그림자가 바닥에서 분리되어 녹티스의 저울 위로 올라간다. 진정한 재판관 녹티스가 강림한다.'
		}
	],

	act_summary: {
		intro: '길을 잃은 탐험대 앞에 정중한 재판관이 나타난다. 출구로 안내해주겠다고 하지만 잠시 자리를 비운다.',
		rising: '녹티스가 사라진 사이 망령이 습격한다. 리라가 옛 동료를 잃었던 이야기를 꺼낸다. 다시 돌아온 녹티스는 가벼운 질문을 던진다.',
		climax_finale:
			'최후의 문이 열린다. 그 너머는 낭떠러지뿐. 모든 대답은 계약서가 되어 있었다. 그림자가 저울 위로 올라간다.'
	}
};
