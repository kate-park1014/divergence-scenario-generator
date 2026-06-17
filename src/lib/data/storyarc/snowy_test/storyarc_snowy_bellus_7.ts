import type { StoryArc } from '$lib/types';

export const storyarc_snowy_bellus_7: StoryArc = {
	"id": "snowy_bellus_7",
	"level": 7,
	"chapter_name": {
		"japanese": "雪花鉄馬の序幕",
		"spanish": "Obertura del Caballo de Hierro Flor de Nieve",
		"vietnamese": "Khúc Dạo Đầu Của Ngựa Sắt Hoa Tuyết",
		"chinese": "雪花铁马序幕",
		"thai": "โหมโรงม้าเหล็กบุปผาหิมะ",
		"french": "Ouverture du Cheval de Fer Fleur de Neige",
		"english": "Overture of the Snow-Flower Iron Horse",
		"hindi": "हिमपुष्प लौह अश्व की प्रस्तावना",
		"korean": "눈꽃 철마의 서막"
	},
	"theme": "snowy",
	"rising_count": 3,
	"world": {
		"secret": "세상을 멈춘 벨루스는 사실 과거 시간을 배달하던 집찰관이었다는 어렴풋한 기록이 존재하지만, 그 이유와 현재의 목적은 미스터리에 싸여 있다.",
		"setting": "시간이 멈춘 설원, 모든 것이 얼어붙은 채 정지된 세상. 푸른빛 잔상이 떠다니는 가운데, 거대한 유령 열차의 그림자가 드리워진다.",
		"rule": "시간이 멈춘 세상에서는 모든 생명체가 얼어붙고, 움직이는 것은 오직 유령 열차 '벨루스'뿐이다. 벨루스에게 닿으면 가장 행복했던 순간에 영원히 박제된다."
	},
	"protagonist_goal": "멈춰버린 시간을 되돌리고, 벨루스의 위협으로부터 세상을 구원하는 것.",
	"act_tone": {
		"rising": {
			"tension": 3,
			"narrative_role": "Protagonists confront obstacles and the immediate dangers of Bellus.",
			"mood": "Desperate and perilous"
		},
		"intro": {
			"tension": 1,
			"narrative_role": "Introduce the frozen world and the threat of Bellus.",
			"mood": "Mysterious and eerie"
		},
		"climax_finale": {
			"mood": "Foreboding and chilling",
			"tension": 5,
			"narrative_role": "First direct encounter with Bellus, ending with an unsettling revelation or hint of its true nature."
		}
	},
	"final_boss": {
		"surface_identity": "멈춰버린 세상의 선로 위를 달리는 유령 열차. 그에게 닿은 자들은 영원히 얼어붙은 채 가장 아름다운 순간에 박제된다.",
		"motivation": "탐험대가 멈춘 시간을 다시 흐르게 하려는 시도를 '파괴'라고 여기는 듯 보이며, 얼어붙은 세상을 유지하려는 미지의 의지를 가졌다.",
		"twist": "벨루스에게 닿아 박제된 이들의 얼굴은 하나같이 평화롭고 행복한 표정을 띠고 있다. 얼어붙은 푸른 잔상들 사이로, 역행하는 시계바늘이 섬뜩하게 빛난다. 어쩌면 벨루스는 단순한 파괴자가 아닐지도 모른다는 섬뜩한 암시가 남는다.",
		"id": "ChronosStitcher_V0",
		"name": "Bellus",
		"true_identity": "과거 시간을 배달하던 집찰관이었다는 어렴풋한 흔적이 남아있는 미지의 존재. 멈춘 시간 속에서 특정 목적을 가지고 '수집' 활동을 벌이는 듯하다.",
		"appearance": "A surreal, Victorian-style train engine made of polished obsidian and brass, with giant clock hands instead of cowcatchers. Its \"limbs\" are hundreds of long, spindly sewing needles made of silver ice, stitching frozen memory-shards into a massive, translucent rail that floats in mid-air. The face of the boss is a giant, glowing clock face behind a frozen glass dome, where the hands move backward. It leaves a trail of \"stuck time\" — blue spectral afterimages of people frozen in their happiest moments. Photorealistic steampunk, eerie but beautiful, high-contrast lighting between the cold blue ice and warm ticking gold mechanisms. It glides silently through the frozen wastes, its clock face glowing faintly, as if observing the stillness of its domain."
	},
	"global_foreshadowing": [
		{
			"reveal_context": "NPC 브란이 벽화를 발견하고 미스터리를 제기함.",
			"reveal_act": "rising",
			"reveal_room": 7,
			"plant_act": "intro",
			"hint": "얼어붙은 도시의 건물 벽에 새겨진, 시간을 상징하는 듯한 오래된 문양. 이는 벨루스가 단순한 괴물이 아닌 특정 과거와 연관되어 있음을 암시한다.",
			"plant_room": 2,
			"id": "GF_CH1_01"
		},
		{
			"reveal_room": 8,
			"reveal_context": "주인공이 박제된 사람들을 직접 목격하고 충격에 빠지며 벨루스의 행동에 의문을 품게 됨.",
			"reveal_act": "climax_finale",
			"id": "GF_CH1_02",
			"plant_room": 3,
			"hint": "벨루스가 멈춘 시간 속에 박제된 사람들의 푸른 잔상이 섬뜩할 정도로 행복한 표정을 짓고 있다. 그들의 모습은 마치 '가장 아름다운 순간'에 갇힌 것처럼 보인다.",
			"plant_act": "rising"
		},
		{
			"reveal_room": 9,
			"reveal_act": "climax_finale",
			"reveal_context": "벨루스와 직접 대치하는 과정에서 주인공이 역행하는 시계 바늘의 의미를 깨닫지 못하지만, 그 기이함에 주목한다.",
			"id": "GF_CH1_03",
			"plant_room": 4,
			"plant_act": "rising",
			"hint": "벨루스의 거대한 시계 바늘이 계속해서 거꾸로 움직인다. 이는 단순히 멈춘 것이 아니라 시간을 되감거나 다른 방식으로 조작하고 있음을 시사한다."
		},
		{
			"reveal_room": 10,
			"reveal_context": "클라이맥스에서 벨루스에게서 떨어져 나온 파편 중 하나에서 기록의 일부를 발견하지만, 아직 의미를 알 수 없다.",
			"reveal_act": "climax_finale",
			"plant_room": 1,
			"hint": "얼어붙은 기억의 파편들 사이에서, 과거 '시간을 배달하던 자'에 대한 짧고 모호한 기록의 일부가 스쳐 지나간다.",
			"plant_act": "climax_finale",
			"id": "GF_CH1_04"
		}
	],
	"npc_roles": {
		"eira": {
			"role": "벨루스에게 사랑하는 이를 잃은 생존자",
			"arc": "얼어붙은 기억 파편을 보며 공포에 질려 도망치려 한다. 이 편에서는 벨루스를 오직 공포스러운 파괴자로 인식하며, 살아남기 위한 필사적인 모습을 보인다. 시리즈 전체를 통해 벨루스의 진정한 동기를 이해하고 극복하는 여정의 시작."
		},
		"ivar": {
			"arc": "열차의 기이한 현상을 단순한 환경 재해로 치부하며, 실용적인 방법으로 얼어붙은 길을 뚫으려는 선두 탐험가. 이 편에서는 눈앞의 장애물 해결에 집중하며 벨루스의 본질적 위협을 과소평가한다. 시리즈 전체를 통해 기술적 해결책을 제시하는 역할을 한다.",
			"role": "실용적이고 현실적인 선두 탐험가"
		},
		"bran": {
			"role": "오래된 기록과 지형에 능통한 탐험가",
			"arc": "얼어붙은 현상 뒤에 숨겨진 미스터리를 어렴풋이 느끼지만, 정확한 실체는 알지 못한다. 이 편에서는 환경의 기이함을 감지하고 단서를 찾으려 노력한다. 시리즈 전체를 통해 벨루스와 멈춘 시간에 대한 지식의 원천이 된다."
		}
	},
	"scenarioOutline": [
		{
			"boss": "random_boss",
			"order": 1,
			"summary": "탐험대가 얼어붙은 설원에 도착한다. 모든 것이 정지된 기이한 풍경 속에서, 벨루스의 푸른 잔상들이 아련하게 떠다닌다. 에이라는 이 잔상들 속에서 잃어버린 사랑하는 이의 모습을 보고 공포에 질린다. 시간의 멈춤이 단순한 재앙이 아님을 암시하는 기묘한 문양을 발견한다.",
			"npc": "eira",
			"act": "intro",
			"title": "얼어붙은 세계, 침묵의 서막"
		},
		{
			"title": "유령 열차의 그림자",
			"act": "rising",
			"npc": "ivar",
			"summary": "탐험대는 얼어붙은 길을 뚫고 전진하려 하지만, 갑작스러운 한파와 빙벽에 가로막힌다. 이바르는 실용적인 방법으로 장애물을 극복하려 하지만, 길게 뻗은 선로 위로 거대한 유령 열차 벨루스의 그림자가 드리운다. 얼어붙은 사람들의 행복한 표정을 목격하고 섬뜩함을 느낀다.",
			"boss": "random_boss",
			"order": 2
		},
		{
			"act": "rising",
			"npc": "bran",
			"title": "박제된 순간들의 미궁",
			"summary": "벨루스가 지나간 자리에 남겨진, 가장 행복했던 순간에 박제된 사람들의 흔적을 브란이 조사한다. 그는 이 현상이 단순한 환경 재해가 아님을 직감하고, 오래된 기록들을 통해 '시간을 꿰매는 자'에 대한 단서를 찾으려 한다. 벨루스의 시계 바늘이 거꾸로 가는 것을 보고 기이함을 느낀다.",
			"order": 3,
			"boss": "random_boss"
		},
		{
			"summary": "벨루스가 탐험대를 향해 움직이기 시작하고, 탐험대는 필사적으로 도망친다. 이바르는 속도를 내어 탈출을 시도하지만, 벨루스의 속도는 상상을 초월한다. 벨루스의 시선이 탐험대를 꿰뚫는 듯한 기분 나쁜 압박감을 느낀다.",
			"title": "쫓기는 자들",
			"npc": "ivar",
			"act": "rising",
			"boss": "random_boss",
			"order": 4
		},
		{
			"boss": "pool_035",
			"order": 5,
			"summary": "탐험대는 벨루스와 첫 대치에 직면한다. 에이라는 벨루스의 거대한 시계 바늘이 거꾸로 돌아가는 것을 직접 목격하며, 잃어버린 이의 행복했던 잔상을 다시 마주한다. 벨루스가 내뱉는 알 수 없는 속삭임 속에서, '시간을 배달하던 자'에 대한 파편적인 기억의 조각을 발견하지만, 그 의미는 여전히 미궁에 빠진다. 벨루스의 단순한 파괴 이면에 무언가 다른 의도가 있음을 강하게 암시하며 챕터가 마무리된다.",
			"title": "얼음 심장의 첫 균열",
			"npc": "eira",
			"act": "climax_finale"
		}
	],
	"act_summary": {
		"climax_finale": "벨루스와의 첫 대치. 주인공 일행은 벨루스의 압도적인 힘에 직면하고, 그 과정에서 벨루스의 진짜 정체와 목적에 대한 모호한 암시를 포착한다. '가장 행복한 순간'에 갇힌 이들의 모습과 벨루스의 기이한 말 속에서, 단순한 악당이 아닐 수 있다는 섬뜩한 반전의 실마리가 드러난다.",
		"rising": "탐험대는 벨루스의 추격을 받으며 생존을 위한 사투를 벌인다. 이바르는 현실적 위협에, 브란은 현상의 미스터리에 집중하며 벨루스의 '수집' 행위에 대한 단서들을 어렴풋이 모은다. 박제된 사람들의 행복한 표정과 역행하는 시계 바늘 등, 벨루스의 행동에 대한 의문이 증폭된다.",
		"intro": "탐험대가 얼어붙은 세상에 도착하고, 멈춘 시간의 기이한 풍경과 벨루스의 위협적인 존재감을 처음으로 인지한다. 에이라가 사랑하는 이의 박제된 모습을 보고 공포에 질린다."
	}
};
