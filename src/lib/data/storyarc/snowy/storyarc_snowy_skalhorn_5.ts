import type { StoryArc } from '$lib/types';

// SkalHorn 시리즈 1편 (level 5) — 눈밭에서 발견된 거대한 뿔잔
export const storyarc_snowy_skalhorn_5: StoryArc = {
	id: 'snowy_skalhorn_5',
	level: 5,
	chapter_name: {
		korean: '눈에 묻힌 뿔잔',
		english: 'The Horn Cup Buried in Snow',
		japanese: '雪に埋もれた角杯',
		chinese: '埋于雪中的角杯',
		french: 'La Corne à Boire Ensevelie sous la Neige',
		spanish: 'El Cuerno para Beber Sepultado en la Nieve',
		vietnamese: 'Sừng Rượu Vùi Trong Tuyết',
		thai: 'จอกเขาสัตว์ที่ฝังอยู่ในหิมะ',
		hindi: 'बर्फ़ में दबा हुआ सींग-पात्र'
	},
	theme: 'snowy',
	rising_count: 3,

	world: {
		setting:
			'얼어붙은 눈밭 한가운데, 반쯤 묻힌 거대한 의식용 뿔잔이 차갑게 빛나고 있다. 탐험대는 "잊힌 신께 바쳐진 고귀한 유물"이 설원에 잠들어 있다는 이야기를 듣고 이곳에 올라왔다.',
		rule: '뿔잔에 다가서는 자는 절로 옷깃을 여미게 된다. 마치 성소에 든 듯한 숙연한 경외가 눈밭에 감돈다.',
		secret:
			'고귀한 유물처럼 보이는 이 뿔잔은, 표면 아래에 무언가를 가두고 있다. 차가운 광택 속 깊은 곳에서, 아주 희미하게 누군가의 노랫소리 같은 것이 새어 나온다.'
	},

	protagonist_goal: '설원에서 발견된 거대한 의식용 뿔잔의 정체를 확인하라.',

	act_tone: {
		intro: {
			mood: '숙연한 경외',
			tension: 1,
			narrative_role:
				'눈밭에 반쯤 묻힌 뿔잔이 차갑게 빛난다. 그 앞에 서면 절로 숨을 죽이게 되는 고요한 위엄이 있다.'
		},
		rising: {
			mood: '거룩함 속 위화감',
			tension: 3,
			narrative_role:
				'표면에 새겨진 의식의 문양, 잔 깊은 곳에서 새어 나오는 희미한 가락. 고귀해 보이는데, 어딘가 등골이 서늘하다.'
		},
		climax_finale: {
			mood: '경외에 스민 첫 한기',
			tension: 5,
			narrative_role:
				'탐험대가 뿔잔에 손을 대자, 표면이 미세하게 진동하며 처음으로 푸른 광채가 번뜩였다 사라진다. 거룩함의 가면 아래, 무언가 차디찬 것이 깨어나려 한다.'
		}
	},

	final_boss: {
		id: 'MadFeast_SkalHorn_V1',
		name: 'SkalHorn',
		appearance:
			'A colossal ceremonial drinking horn of ancient Viking make, half-buried in a frozen snowfield and glowing with a cold pale sheen. Its curved surface is engraved with solemn ritual runes and worn carvings of feasts. A faint blue light pulses deep within the crystalline rim. Reverent, hushed snowy lighting, sacred and majestic high-fantasy aesthetic.',
		surface_identity:
			'얼어붙은 눈밭에서 발견된 거대한 의식용 뿔잔. 차갑게 빛나는 표면이 숙연한 경외를 자아내며, 과거 바이킹의 성대한 축제와 신앙의 흔적이 새겨진 고귀한 유물처럼 보인다.',
		true_identity:
			'아직은 그저 잊힌 신께 바쳐진 거룩한 유물처럼 보인다. 그러나 잔 깊은 곳에서 새어 나오는 희미한 노랫소리는, 이것이 단순한 유물이 아님을 어렴풋이 암시한다.',
		motivation:
			'뿔잔은 아직 침묵 속에 잠겨 있다. 다만 그 표면은 다가서는 자를 묘하게 끌어당기며, 마치 오랜 손님을 기다려온 듯하다.',
		twist:
			'탐험대가 뿔잔에 손을 대자, 표면이 미세하게 진동한다. 잔 깊은 곳에서 새어 나오던 가락이 한순간 또렷해지고, 수정 같은 표면에 푸른 광채가 번뜩였다 사라진다. 그와 함께 주위 공기가 거짓말처럼 얼어붙는다 — 거룩함의 가면 아래, 처음으로 차디찬 한기가 스친다.'
	},

	global_foreshadowing: [
		{
			id: 'fs_01',
			hint: '뿔잔 깊은 곳에서 희미한 노랫소리 같은 것이 새어 나온다.',
			plant_act: 'intro',
			plant_room: 1,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그 가락은 안에 갇힌 무언가가 부르는 왜곡된 축제 찬가의 첫 자락이었다.'
		},
		{
			id: 'fs_02',
			hint: '표면에 새겨진 룬과 문양이 어떤 의식을 묘사한 듯하다.',
			plant_act: 'rising',
			plant_room: 4,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '문양은 잊힌 신께 바치는 의식이 아니라, 무언가를 봉인하는 계약의 기록이었다.'
		},
		{
			id: 'fs_03',
			hint: '뿔잔에 다가설수록 주위 공기가 점점 더 차가워진다.',
			plant_act: 'rising',
			plant_room: 7,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '그 한기는 잔 안에 깃든 빙설의 권능이 새어 나오는 것이었다.'
		},
		{
			id: 'fs_04',
			hint: '잔 표면의 푸른 광채가 손을 가까이 대면 잠시 더 밝게 일렁인다.',
			plant_act: 'rising',
			plant_room: 9,
			reveal_act: 'climax_finale',
			reveal_room: 15,
			reveal_context: '광채는 잔이 손님을 알아보고 깨어나려는 신호였다.'
		}
	],

	npc_roles: {
		eira: {
			role: '첫 단서의 기록자',
			arc: '1편: 동행단의 안내자로서 뿔잔에 새겨진 문양을 침착히 관찰하고 첫 단서를 기록한다.'
		},
		ivar: {
			role: '경외하는 전사',
			arc: '1편: 거대한 의식용 유물 앞에서 전사로서의 경외를 느끼며 함부로 손대지 못한다.'
		},
		boris: {
			role: '의심하는 회의주의자',
			arc: '1편: 거룩해 보이는 유물을 곧이곧대로 믿지 않고, 그 안에서 새어 나오는 소리의 정체를 의심한다.'
		}
	},

	scenarioOutline: [
		{
			order: 1,
			act: 'intro',
			title: '눈밭의 뿔잔',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'탐험대가 얼어붙은 눈밭에 다다른다. 동행단의 안내자 에이라가 반쯤 묻힌 거대한 뿔잔을 발견하고, 표면에서 새어 나오는 희미한 노랫소리를 첫 단서로 기록한다.'
		},
		{
			order: 2,
			act: 'rising',
			title: '함부로 손대지 마라',
			boss: 'random_boss',
			npc: 'ivar',
			summary:
				'이바르가 거대한 의식용 유물 앞에서 전사로서의 경외를 느낀다. "이건… 함부로 손댈 물건이 아니다." 그러나 잔에서 풍기는 한기가 그의 등골을 서늘하게 한다.'
		},
		{
			order: 3,
			act: 'rising',
			title: '이게 정말 거룩한가',
			boss: 'random_boss',
			npc: 'boris',
			summary:
				'보리스가 거룩해 보이는 유물을 의심한다. "유물이라면서 왜 이런 데서 노랫소리가 나지? 거룩한 척하는 게 더 수상해." 잔 깊은 곳의 가락에 귀를 기울인다.'
		},
		{
			order: 4,
			act: 'rising',
			title: '봉인된 문양',
			boss: 'random_boss',
			npc: 'eira',
			summary:
				'에이라가 표면의 룬과 문양을 살핀다. 신께 바치는 의식의 기록처럼 보이지만, 어딘가 봉인의 흔적이 섞여 있다. 단순한 유물이 아니다.'
		},
		{
			order: 5,
			act: 'climax_finale',
			title: '깨어나는 한기',
			boss: 'pool_110',
			npc: 'boris',
			summary:
				'뿔잔에 손이 닿자 표면이 진동하며 처음으로 푸른 광채가 번뜩이고, 주위 공기가 거짓말처럼 얼어붙는다. 거룩함의 허상을 의심하던 보리스가 그 한기를 정면으로 마주하며 첫 전투를 맞는다.'
		}
	],

	act_summary: {
		intro: '얼어붙은 눈밭에서 거대한 의식용 뿔잔을 발견한다. 동행단(에이라·이바르·보리스)이 함께 마주한다.',
		rising: '경외하는 이바르, 거룩함을 의심하는 보리스, 봉인의 문양을 기록하는 에이라. 고귀한 유물치고는 너무 서늘하다.',
		climax_finale: '잔에 손이 닿자 푸른 광채가 번뜩이고 공기가 얼어붙으며, 거룩함의 가면 아래 처음으로 한기가 스친다.'
	}
};
