import type { StoryArc } from '$lib/types';

// Archduke Finn 시리즈 7편 (level 60) — 남쪽으로 가던 길
export const storyarc_snowy_finn_60: StoryArc = {
	id: 'snowy_finn_60',
	level: 60,
	chapter_name: {
		korean: '남쪽으로 가던 길',
		english: 'The Road That Led South',
		japanese: '南へ向かっていた道',
		chinese: '本要向南的路',
		french: 'La Route Vers le Sud',
		spanish: 'El Camino que Iba al Sur',
		vietnamese: 'Con Đường Lẽ Ra Về Nam',
		thai: 'เส้นทางที่มุ่งสู่ทิศใต้',
		hindi: 'दक्षिण की ओर जाने वाला रास्ता'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'알현실 뒤편의 작은 골방. 벽에 다 헤진 지도 한 장이 붙어 있고, 거기엔 "따뜻한 남쪽 나라"로 향하는 길이 삐뚤빼뚤 그려져 있다. 길은 도중에 끊겨 있고, 그 끝에 작은 발자국 그림이 멈춰 서 있다.',
		rule: '왕은 누구도 자신의 골방에 들이지 않는다고 한다. 그곳에는 그가 한사코 감춰온 진짜 이야기가 숨어 있다.',
		secret:
			'Finn은 본래 따뜻한 남쪽 나라로 가던 펭귄이었다. 그러나 도중에 그만 길을 잃어버렸고, 돌아갈 방향도 잊은 채 이 설산에 갇혀 그저 여기 있는 몬스터들을 모아 왕 노릇을 시작했다.'
	},

	protagonist_goal: '왕이 감춰온 골방의 헤진 지도를 통해, 그가 본래 어디로 가려 했는지 그 진짜 이야기를 밝혀라.',

	act_tone: {
		intro: {
			mood: '드러나는 진실',
			tension: 2,
			narrative_role: '골방 벽의 헤진 남쪽 지도가 처음으로 드러난다. 위엄의 가면 뒤 진짜 이야기가 새어 나온다.'
		},
		rising: {
			mood: '길 잃은 자의 쓸쓸함',
			tension: 3,
			narrative_role:
				'끊긴 길과 멈춘 발자국 그림. 왕은 발각된 지도를 황급히 가리려 하지만, 그 손짓에서 길 잃은 자의 쓸쓸함이 묻어난다.'
		},
		climax_finale: {
			mood: '실토 직전의 흔들림',
			tension: 4,
			narrative_role:
				'에이라가 지도를 읽어내자 Finn이 발끈한다. "그, 그건 짐의 정복 계획이다!" 그러나 떨리는 목소리는, 길을 잃어 돌아가지 못한 자의 것이다.'
		}
	},

	final_boss: {
		id: 'ArchdukeFinnTheChilly',
		name: 'Archduke Finn',
		appearance:
			'A round plump penguin standing before a tattered map pinned to an ice wall, the map showing a crooked route toward a warm southern land that breaks off midway with a tiny set of footprints stopping at the gap. It tries to cover the map with its wings, an oversized sliding crown over one eye. It wears a moth-eaten purple cape with a giant safety pin, neon ski goggles, and a thick wool muffler. Soft cinematic 3D animation style, wistful warm tone, glittering snow, vibrant colors.',
		surface_identity:
			'아무도 들이지 않던 골방을 지키는 설산의 왕. 발각된 지도를 정복 계획이라 둘러댄다.',
		true_identity:
			'헤진 지도의 끊긴 길과 멈춘 발자국이 그의 진짜 이야기를 드러낸다 — 그는 따뜻한 남쪽으로 가다 길을 잃은 펭귄이다.',
		motivation:
			'본래 따뜻한 남쪽 나라로 가려 했으나 길을 잃었다. 돌아갈 방향도 잊은 채, 외로움을 견디려 이 설산의 몬스터들을 모아 왕 노릇을 시작했다.',
		twist:
			'에이라가 헤진 지도의 길을 읽어내자 Finn이 발끈하며 날개로 지도를 가린다. "그, 그건 짐의 위대한 정복 계획이다! 함부로 보지 마라!" 그러나 떨리는 그 목소리는 정복자가 아니라, 따뜻한 곳으로 가다 길을 잃고 돌아가지 못한 자의 것이다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '골방 벽에 따뜻한 남쪽으로 향하는 길이 그려진 헤진 지도가 붙어 있다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '지도는 그가 본래 남쪽으로 가려던 펭귄임을, 왕이 아니었음을 알렸다.'
		},
		{
			id: 'fs_02',
			hint: '지도 위의 길이 도중에 끊겨 있고, 그 끝에 작은 발자국 그림이 멈춰 서 있다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '끊긴 길과 멈춘 발자국은, 그가 길을 잃어 더는 나아가지 못했음을 보여준다.'
		},
		{
			id: 'fs_03',
			hint: '왕이 "정복 계획"이라 우기면서도 지도를 차마 떼어내지 못한다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '떼어내지 못한 지도는, 언젠가 다시 남쪽으로 가고픈 마음이 남아 있음을 뜻했다.'
		},
		{
			id: 'fs_04',
			hint: '지도 이야기가 나오자 작은 펭귄들이 일제히 조용해진다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '무리 역시 같은 처지의 길 잃은 자들이었기에, 그 침묵은 모두의 사정이었다.'
		}
	],

	npc_roles: {
		eira: {
			role: '지도를 해독하는 자',
			arc: '7편: 헤진 지도의 끊긴 길과 멈춘 발자국을 읽어내, 왕의 진짜 이야기 — 길 잃은 남쪽 여정 — 를 처음으로 밝혀낸다.'
		},
		inka: {
			role: '진실을 보듬는 자',
			arc: '7편: 길 잃은 자의 쓸쓸함을 보고, 둘러대는 그를 다그치지 않고 가만히 곁에 머문다.'
		},
		frost: {
			role: '추위의 사정을 헤아리는 자',
			arc: '7편: 따뜻한 곳으로 가려던 그가 한기 속에 갇힌 사정을, 추위를 아는 자로서 깊이 헤아린다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '아무도 들이지 않던 골방',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'탐험대가 알현실 뒤편 골방에 든다. 벽에 따뜻한 남쪽으로 향하는 헤진 지도가 붙어 있다. 에이라가 처음 드러난 그의 진짜 이야기를 마주한다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '끊긴 길, 멈춘 발자국',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 지도 위의 길이 도중에 끊기고 그 끝에 작은 발자국이 멈춰 있음을 읽어낸다. "여기서… 길을 잃은 거예요." 진실의 윤곽이 잡힌다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '다그치지 않고',
			boss: 'random_boss',
			npc: 'inka',
			summary:
				'인카가 지도를 가리려 허둥대는 왕을 다그치지 않고 가만히 곁에 머문다. "괜찮아요. 길을 잃을 수도 있죠." 길 잃은 자의 쓸쓸함을 보듬는다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '따뜻한 곳으로 가려던 자',
			boss: 'random_boss',
			npc: 'frost',
			summary:
				'프로스트가 따뜻한 남쪽으로 가려던 그가 한기 속에 갇힌 사정을 헤아린다. "추위가 무서워 떠나려다, 오히려 추위에 갇혔구나." 깊이 동병상련한다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '짐의 정복 계획이다',
			boss: 'pool_033',
			npc: 'eira',
			summary:
				'에이라가 지도를 읽어내자 Finn이 날개로 가리며 "그건 짐의 정복 계획이다!"라고 발끈한다. 그러나 떨리는 목소리는 길 잃은 자의 것이다. 에이라가 진실을 똑바로 마주한 채 충돌이 벌어진다.'
		}
	],

	act_summary: {
		intro: '골방 벽의 헤진 남쪽 지도가 처음 드러난다. 위엄의 가면 뒤 진짜 이야기가 새어 나온다.',
		rising: '끊긴 길과 멈춘 발자국, 다그치지 않는 인카, 사정을 헤아리는 프로스트, 지도를 해독하는 에이라.',
		climax_finale: '지도를 읽힌 왕이 "정복 계획"이라 발끈하지만, 떨리는 목소리가 길 잃은 자의 진실을 드러낸다.'
	}
};
