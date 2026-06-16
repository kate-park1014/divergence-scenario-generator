import type { StoryArc } from '$lib/types';

// Archduke Finn 시리즈 10편 (level 90) — 슈퍼 울트라 아이스 슬라이딩 (시리즈 피날레)
export const storyarc_snowy_finn_90: StoryArc = {
	id: 'snowy_finn_90',
	level: 90,
	chapter_name: {
		korean: '슈퍼 울트라 아이스 슬라이딩',
		english: 'Super Ultra Ice Sliding',
		japanese: 'スーパーウルトラアイススライディング',
		chinese: '超级究极冰滑行',
		french: 'Super Ultra Glissade de Glace',
		spanish: 'Súper Ultra Deslizamiento de Hielo',
		vietnamese: 'Siêu Cấp Trượt Băng Tối Thượng',
		thai: 'ซูเปอร์อัลตร้าไอซ์สไลดิ้ง',
		hindi: 'सुपर अल्ट्रा आइस स्लाइडिंग'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'시리즈의 끝, 설산 정상의 너른 빙판. 길 잃은 펭귄도, 추위에 떠는 밤도, 친구를 향한 서툰 청도 모두 마주한 Finn이 마지막으로 탐험대를 기다린다. 그는 비장하게 자신의 필살기를 선보이려 한다 — 처음이자 마지막으로, 온 힘을 다해.',
		rule: '이 마지막 한 판에서 승부는 중요하지 않다. 중요한 것은 단 한 번, 그와 진심으로 부딪쳐 주는 것이다.',
		secret:
			'Finn은 처음부터 알고 있었다. 자신이 무서운 왕이 아니라는 것을. 그가 진정 원한 것은 정복도 위엄도 아닌, 누군가 자신과 진심으로 한 판 붙어주고, 따뜻한 곳으로 돌아갈 작은 온기 하나를 건네주는 것이었다.'
	},

	protagonist_goal: 'Finn의 마지막 필살기를 진심으로 마주하고, 길 잃은 추위쟁이 왕의 이야기를 따뜻한 결말로 매듭지어라.',

	act_tone: {
		intro: {
			mood: '비장한 결의',
			tension: 2,
			narrative_role: '정상의 빙판에서 Finn이 처음이자 마지막으로 온 힘을 다해 필살기를 준비한다.'
		},
		rising: {
			mood: '고조되는 코믹 비장미',
			tension: 4,
			narrative_role:
				'그가 거창한 이름의 필살기를 외치며 자세를 잡는다. 1편부터의 모든 복선이 이 마지막 한 판으로 수렴한다.'
		},
		climax_finale: {
			mood: '따뜻한 폭소와 애틋함',
			tension: 5,
			narrative_role:
				'필살기를 외치며 돌진한 Finn이 제 발에 걸려 넘어진다. 배를 깔고 쭉 미끄러지며 중얼거리는 마지막 말이 모든 위엄을 녹이고, 길 잃은 추위쟁이의 진심만을 남긴다.'
		}
	},

	final_boss: {
		id: 'ArchdukeFinnTheChilly',
		name: 'Archduke Finn',
		appearance:
			'A round plump penguin on a vast summit ice rink mid-lunge, having just tripped over its own feet, sliding on its belly across the ice with a comically determined yet sheepish expression. The oversized crown tumbles off, neon ski goggles askew, the moth-eaten purple cape and thick wool muffler trailing behind. Tiny penguin minions watch with dropped cardboard signs. Soft cinematic 3D animation style, heartwarming and funny tone, glittering snow, vibrant colors.',
		surface_identity:
			'마지막으로 탐험대를 기다리는 설산의 왕. 처음이자 마지막으로 온 힘을 다한 필살기를 선보이려 한다.',
		true_identity:
			'추위를 엄청나게 많이 타는, 따뜻한 남쪽으로 가려다 길을 잃은 펭귄. 무서운 왕 행세도, 거창한 필살기도, 모두 누군가와 진심으로 한 판 붙고 싶었던 외로운 마음의 서툰 표현이었다.',
		motivation:
			'그가 진정 원한 것은 정복도 위엄도 아니었다. 단 한 번, 누군가 자신과 진심으로 한 판 붙어주는 것. 그리고 따뜻한 곳으로 돌아갈 작은 온기 하나를 건네받는 것이었다.',
		twist:
			'"자, 나의 필살기... 이름하여 [슈퍼 울트라 아이스 슬라이딩]이다!" 핀은 비장하게 외치며 돌진하지만, 발이 미끄러져 자기 발에 걸려 넘어진다. "아얏... 너희, 봤지? 나의 이 화려한 바디 체크를...!" 쓰러지면서 배를 깔고 쭉 미끄러져 나가며 중얼거린다 — "…이길 생각은 없었는데… 혹시 남는 전기장판 있니? 착불로 보내줘도 돼…"'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: 'Finn이 처음으로 옥좌도, 카드보드 팻말도 없이 빈 빙판 위에 홀로 선다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '위엄의 장치를 모두 내려놓은 그는, 마침내 한 마리 작은 펭귄으로 탐험대를 마주했다.'
		},
		{
			id: 'fs_02',
			hint: '그가 5편에서 빚어둔 눈덩이 대신, 거창한 필살기 자세를 비장하게 잡는다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '거창한 필살기조차, 진심으로 한 판 붙고 싶었던 그의 마지막 서툰 표현이었다.'
		},
		{
			id: 'fs_03',
			hint: '돌진하기 직전, 그의 시선이 탐험대의 핫팩을 또 한 번 흘끔거린다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '내내 탐냈던 그 온기에 대한 갈망은, 마지막 "전기장판" 부탁으로 고스란히 회수된다.'
		},
		{
			id: 'fs_04',
			hint: '비장하게 외치는 와중에도 그의 발이 빙판 위에서 자꾸 미끄러질 듯 흔들린다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '흔들리는 발은, 필살기가 승리가 아니라 우스꽝스러운 넘어짐으로 끝날 것을 미리 알렸다.'
		}
	],

	npc_roles: {
		eira: {
			role: '이야기를 끝까지 기억하는 자',
			arc: '10편: 무서운 왕이 아니라 길 잃은 추위쟁이 펭귄의 이야기로 그를 똑바로 기록하며, 끝까지 잊지 않는 자로서 마주한다.'
		},
		inka: {
			role: '진심으로 받아들이는 자',
			arc: '10편: 넘어져 미끄러지는 그를 비웃지 않고, 길 잃은 한 존재로 끝까지 따뜻하게 받아들인다. (3인 throughline 수렴)'
		},
		frost: {
			role: '온기를 건네는 자',
			arc: '10편: 마지막 "전기장판" 부탁에 응하듯, 추위 타는 그에게 끝내 진심 어린 온기를 건넨다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '빈 빙판 위에 홀로',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'탐험대가 시리즈의 끝, 정상의 너른 빙판에 다다른다. 옥좌도 팻말도 없이 Finn이 홀로 선다. 에이라가 위엄의 장치를 모두 내려놓은 그를 한 마리 펭귄으로 마주한다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '비장한 필살기 자세',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'Finn이 거창한 필살기 자세를 비장하게 잡는다. 에이라가 그 서툰 비장미가 진심으로 한 판 붙고 싶은 마음의 표현임을 기록한다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '또 한 번의 흘끔거림',
			boss: 'random_boss',
			npc: 'frost',
			summary:
				'돌진 직전 Finn의 시선이 탐험대의 핫팩을 또 한 번 흘끔거린다. 프로스트가 그 갈망을 알아보고, 끝내 온기를 건넬 마음을 굳힌다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '흔들리는 발',
			boss: 'random_boss',
			npc: 'inka',
			summary:
				'인카가 비장한 외침 속에서도 자꾸 미끄러질 듯 흔들리는 그의 발을 본다. "…저 한 판은, 이기려는 게 아니에요." 비웃지 않고 따뜻하게 지켜본다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '혹시 남는 전기장판 있니',
			boss: 'pool_033',
			npc: 'inka',
			summary:
				'"자, 나의 필살기... 이름하여 [슈퍼 울트라 아이스 슬라이딩]이다!" Finn이 비장하게 돌진하다 제 발에 걸려 넘어진다. "아얏... 너희, 봤지? 나의 이 화려한 바디 체크를...!" 배를 깔고 쭉 미끄러지며 중얼거린다 — "…이길 생각은 없었는데… 혹시 남는 전기장판 있니? 착불로 보내줘도 돼…" 인카의 받아들임, 에이라가 기록한 이야기, 프로스트가 건넨 온기 — 3인의 여정이 수렴하며, 길 잃은 추위쟁이 왕의 이야기가 따뜻한 폭소와 애틋함 속에 매듭지어진다.'
		}
	],

	act_summary: {
		intro: '시리즈의 끝, 정상의 빈 빙판. 위엄을 모두 내려놓은 Finn이 한 마리 펭귄으로 홀로 선다.',
		rising: '비장한 필살기 자세, 또 한 번 흘끔거리는 핫팩, 흔들리는 발. 기억하는 에이라, 온기를 건네는 프로스트, 따뜻하게 지켜보는 인카.',
		climax_finale: '슈퍼 울트라 아이스 슬라이딩으로 돌진하다 제 발에 걸려 넘어진 Finn이 미끄러지며 "혹시 남는 전기장판 있니"라고 중얼거린다. 3인의 여정이 수렴하는 따뜻한 시리즈 피날레.'
	}
};
