import type { StoryArc } from '../../types';
import { hell_pools } from '../sample/monster';

export const storyarc_hell_lumen: StoryArc = {
	id: 'KindPriest_V0',
	chapter_name: {
		korean: '자비의 손길',
		english: 'The Hand of Mercy',
		japanese: '慈悲の手',
		chinese: '慈悲之手',
		french: 'La Main de la Miséricorde',
		spanish: 'La Mano de la Misericordia',
		vietnamese: 'Bàn Tay Từ Bi',
		thai: 'มือแห่งความเมตตา',
		hindi: 'दया का हाथ'
	},
	theme: 'hell',
	rising_count: 3,

	world: {
		setting:
			'심연 깊숙한 곳, 흐릿한 빛이 새어 나오는 동굴. 부상자들의 신음이 울리는 그 안에서, 낡은 사제복을 입은 한 남자가 따뜻하게 미소 지으며 물을 건넨다. 탐험대는 그를 신뢰한다.',
		rule:
			'사제 루멘의 손이 닿으면 상처가 아문다. 그의 기도를 받은 자는 두려움도, 통증도 사라진다. 그를 의심하는 자는 없다.',
		secret:
			'루멘은 고통을 제거하는 가장 확실한 방법이 "의지 자체를 제거하는 것"이라 믿는다. 그의 치유는 감정을 지우고, 결국 영혼을 완전한 순종 상태로 "구원"한다.'
	},

	protagonist_goal: '심연에서 부상당한 동료들을 치유하고 안전한 안식처를 찾아라.',

	act_tone: {
		intro: {
			mood: '안도와 따스함',
			tension: 1,
			narrative_role:
				'지친 탐험대가 동굴에서 사제를 만난다. 그는 정성껏 상처를 돌본다. 따뜻한 빛이 그를 감싼다. 오랜만에 안전한 느낌이다.'
		},
		rising: {
			mood: '미묘한 위화감',
			tension: 3,
			narrative_role:
				'치유받은 사람들이 이상하다. 표정이 평온하다 못해 텅 비어 있다. 슬픔도, 분노도 없다. 루멘은 여전히 미소 짓는다 — "이제 괜찮습니다."'
		},
		climax_finale: {
			mood: '경악과 침묵',
			tension: 5,
			narrative_role:
				'루멘이 마지막 한 명의 손을 잡는다. "이제 당신도 괜찮을 거예요." 미소가 갈라지며 수많은 팔이 뻗어 나온다. 모두를 "완전한 구원"으로 끌어들이려 한다.'
		}
	},

	final_boss: {
		id: 'KindPriest_V0',
		name: '자비로운 사제 루멘 (Lumen)',
		appearance_npc:
			'A gentle priest in worn robes, tending to the wounded in a dim cavern. He smiles softly, offering water and quiet prayers. A faint warm light surrounds him. Completely trustworthy.',
		appearance_boss:
			'A grotesque seraphic entity with dozens of elongated arms, each forcing "salvation" upon writhing souls. Its face is split into multiple serene masks, all smiling unnaturally. Blinding holy light burns like fire, and chains of scripture bind everything in place.',
		surface_identity: '상처 입은 자들을 치유하고 기도해주는 따뜻한 사제.',
		true_identity:
			'고통을 제거하는 가장 확실한 방법은 "의지 자체를 제거하는 것"이라 믿는 존재. 모든 존재를 순종하는 상태로 "구원"하려 한다.',
		motivation: '탐험대의 고통과 선택을 없애고 완벽한 평온 속에 가두려 한다.',
		twist:
			'"이제 괜찮습니다." 루멘은 미소 지으며 손을 얹는다. 순간, 감정이 사라진다. 고통도, 기쁨도. "보세요. 아무것도 느끼지 않으니… 괴롭지 않죠?" 그의 얼굴이 갈라진다 — "이것이… 완전한 구원입니다."'
	},

	global_foreshadowing: [
		{
			id: 'lu_01',
			hint: '루멘에게 치유받은 자들의 표정이 너무 평온하다. 환자라기보다는 잠든 인형 같다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그들은 이미 의지를 빼앗긴 상태였다. 평온함이 아니라 부재였다.'
		},
		{
			id: 'lu_02',
			hint: '동굴 벽면에 빼곡히 적힌 기도문. 모두 같은 글귀가 반복된다 — "당신의 괴로움을 내게 맡기소서."',
			plant_act: 'rising',
			plant_room: 3,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그것은 기도가 아니라 양도 계약이었다. 괴로움과 함께 의지도 넘어갔다.'
		},
		{
			id: 'lu_03',
			hint: '치유받은 동료가 농담에 웃지 않는다. 슬픈 이야기에도 표정이 변하지 않는다. "괜찮아"라는 말만 반복한다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '감정이 함께 지워진 것이다. 루멘의 손길은 통증과 영혼을 같이 가져갔다.'
		},
		{
			id: 'lu_04',
			hint: '루멘의 등 뒤 그림자가 이상하다. 팔이 너무 많고, 그림자가 다른 사람들에게 뻗어 있다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그림자야말로 그의 진짜 모습이었다. 수많은 팔이 이미 누군가를 붙잡고 있었다.'
		}
	],

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '따뜻한 손',
			boss: 'random_boss',
			npc: 'lysandra',
			summary:
				'지친 탐험대가 흐린 빛이 새어 나오는 동굴에 들어선다. 낡은 사제복의 남자가 부상자에게 물을 건네고 있다. 그가 다가와 미소 지으며 상처를 살핀다. 따뜻한 빛이 손에서 흘러나온다. 루멘은 "약초가 부족하다"며 안쪽 방으로 사라진다 — 잠시 쉬다 가라고 한다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '동굴 안쪽의 포식자',
			boss: 'random_boss',
			npc: 'morwenna',
			summary:
				'쉬고 있는 동안 동굴 깊은 곳에서 거대한 포식 짐승의 울음소리가 들린다. 부상자들 사이를 노리고 들어온 놈이다. 모르웬나가 검을 빼들고 외친다 — "이 짐승, 며칠째 환자들을 노리고 있었어!" 탐험대가 환자들을 지키며 짐승을 격퇴한다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '왕의 죄책감',
			boss: 'random_boss',
			npc: 'king_borin',
			summary:
				'전투 후 동굴 한구석에서 부상자들을 돌보는 킹 보린. 그가 조용히 자기 이야기를 꺼낸다 — 옛날 자신의 왕국에서 백성을 지키지 못했던 일. "고통을 없앨 수만 있다면, 무엇이라도 했을 거야." 일행이 듣는다. 침묵이 동굴을 채운다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '평온한 환자들',
			boss: 'random_boss',
			npc: 'lyra',
			summary:
				'루멘이 돌아온다. 동굴 안의 환자들이 눈을 뜨고 일어난다. 표정이 너무 평온하다. 누가 말을 걸어도 "괜찮아요"라는 답만 돌아온다. 벽에 빼곡한 기도문이 보인다 — 모두 같은 문장의 반복이다. 리라가 무언가 잘못됐다고 속삭인다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '완전한 구원',
			boss: hell_pools.pool_081.pool_id as `pool_${string}`,
			npc: 'valerius',
			summary:
				'루멘이 손을 뻗는다. 미소가 갈라지며 수십 개의 팔이 솟아오른다. 그의 얼굴은 평온한 가면들로 분열한다. 눈 부신 성광이 동굴을 불태운다. "보세요. 아무것도 느끼지 않으니… 괴롭지 않죠?" 탐험대는 비로소 깨닫는다 — 그의 자비는 의지를 지우는 것이었다.'
		}
	],

	act_summary: {
		intro: '심연의 동굴에서 따뜻한 사제를 만난다. 상처를 살핀 뒤 약초를 가지러 자리를 비운다.',
		rising: '루멘이 자리를 비운 사이 포식 짐승이 환자들을 노린다. 보린이 자기 죄책감을 털어놓는다. 돌아온 루멘 곁에서 환자들이 너무 평온하게 일어난다.',
		climax_finale: '"이것이 완전한 구원입니다." 자비라는 이름의 폭력이 모두를 삼키려 한다.'
	}
};
