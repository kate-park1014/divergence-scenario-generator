import type { StoryArc } from '$lib/types';

export const storyarc_forest_pool_102: StoryArc = {
	"chapter_name": {
		"french": "Le Cœur de la Forêt, L'Ombre du Prédateur",
		"vietnamese": "Trái Tim Rừng Xanh, Bóng Tối Kẻ Săn Mồi",
		"english": "Heart of the Forest, Shadow of the Predator",
		"korean": "숲의 심장, 포식자의 그림자",
		"chinese": "森林之心，掠食者的阴影",
		"thai": "หัวใจแห่งพงไพร, เงาของผู้ล่า",
		"japanese": "森の心臓、捕食者の影",
		"spanish": "El Corazón del Bosque, La Sombra del Depredador",
		"hindi": "वन का हृदय, शिकारी की छाया"
	},
	"act_summary": {
		"rising": "숲의 이상 현상과 루드라 비라의 강압적인 통치 방식에 의문을 품기 시작하는 주인공. NPC들의 도움과 정보로 숲의 진짜 위협과 루드라의 숨겨진 목적에 대한 단서들이 하나씩 드러나며 긴장감이 고조된다.",
		"intro": "신비롭고 아름다운 숲, 그러나 수상한 기운이 감도는 곳에 발을 들인 탐험대. 수호자를 자처하는 루드라 비라와 대면하며 숲의 이면에 감춰진 미스터리의 서막이 오른다.",
		"climax_finale": "숲의 심장부에서 밝혀지는 루드라 비라의 충격적인 진실과 파멸적인 계획. 숲과 차원의 운명을 건 최후의 결전이 펼쳐지며, 예상치 못한 NPC의 반전이 극의 정점을 찍는다."
	},
	"act_tone": {
		"climax_finale": {
			"narrative_role": "The ultimate confrontation, revelation of the true antagonist's motives, and a struggle for survival and the forest's fate.",
			"mood": "Desperate, climactic, shocking",
			"tension": 5
		},
		"intro": {
			"tension": 1,
			"narrative_role": "Setting the stage, introducing the initial conflict and the enigmatic guardian.",
			"mood": "Suspenseful, mysterious"
		},
		"rising": {
			"tension": 3,
			"narrative_role": "Unveiling deeper secrets, facing increasing threats, and questioning initial perceptions.",
			"mood": "Intense, urgent, escalating"
		}
	},
	"rising_count": 3,
	"scenarioOutline": [
		{
			"summary": "주인공은 가이드 엘라와 함께 신비로운 고대 숲에 발을 들인다. 숲의 아름다움에 감탄하지만, 이따금 느껴지는 묘한 기운과 불안정한 생명체들의 움직임에 의문을 품는다. 숲의 수호자라고 자처하는 루드라 비라와 마주치지만, 그는 탐험대를 경계하며 숲의 규율을 강하게 내세운다.",
			"act": "intro",
			"order": 1,
			"boss": "random_boss",
			"title": "심연의 숲, 첫 만남",
			"npc": "ela"
		},
		{
			"boss": "random_boss",
			"title": "뒤틀린 수호자, 감춰진 진실",
			"npc": "briar",
			"order": 2,
			"summary": "숲 연구원 브라이어와 함께 숲 깊은 곳을 탐사하던 주인공은, 숲의 기이한 에너지 흐름과 함께 숲의 일부가 빠르게 시들어가고 있음을 발견한다. 루드라 비라가 숲을 '수호'하는 방식이 점점 더 강압적이고 파괴적으로 변해가는 것을 목격하며, 그의 진정한 의도에 대한 의심을 키운다. 브라이어는 숲의 오염 징후가 인위적일 수 있다는 충격적인 가설을 제시한다.",
			"act": "rising"
		},
		{
			"title": "고대 현자의 경고, 숲의 비명",
			"npc": "cedar",
			"boss": "random_boss",
			"order": 3,
			"act": "rising",
			"summary": "숲의 현자 시더를 찾아간 주인공은 숲의 심장부에 대한 고대 기록과, 특정 '성유물'에 얽힌 위험에 대한 경고를 듣는다. 시더는 숲이 단순한 생태계가 아닌 거대한 '문'의 역할을 할 수 있음을 암시하며, 루드라 비라의 숨겨진 목적이 숲의 파멸로 이어질 수 있다고 경고한다. 숲 곳곳에서 들려오는 비명소리가 더욱 커진다."
		},
		{
			"title": "파멸의 전조, 광기의 목적",
			"npc": "hazel",
			"boss": "random_boss",
			"order": 4,
			"act": "rising",
			"summary": "숲의 황폐화로 가족을 잃은 주민 헤이즐을 만난 주인공은 루드라 비라가 숲을 '수호'한다는 명분 아래 잔혹한 행위를 서슴지 않고 있음을 알게 된다. 숲의 생명 에너지가 급속도로 고갈되고, 루드라의 눈빛에서 광기 어린 집착이 더욱 명확해진다. 주인공은 루드라의 진짜 목적이 숲을 지키는 것이 아님을 확신하게 된다."
		},
		{
			"boss": "pool_102",
			"npc": "ela",
			"title": "숲의 심장, 그리고 파멸의 문",
			"order": 5,
			"summary": "숲의 심장부에 도달한 주인공은 마침내 루드라 비라의 본색을 마주한다. 그는 숲을 지키는 것이 아니라, 숲의 에너지를 고향으로 돌아가기 위한 수단으로 삼아 이 차원을 파괴하려 한다. 충격적인 반전으로, 처음 주인공을 이끌었던 가이드 엘라가 루드라의 조력자였음이 드러나거나, 혹은 예기치 않게 주인공을 돕는다. 숲의 운명과 다른 차원의 생존이 걸린 최후의 결전이 펼쳐진다.",
			"act": "climax_finale"
		}
	],
	"id": "forest_pool_102",
	"protagonist_goal": "Discover the true nature of the forest's anomalies and prevent its destruction, which seems to be accelerating due to an unknown force. Uncover the motives of its 'guardian' and protect innocent lives.",
	"global_foreshadowing": [
		{
			"plant_room": 3,
			"reveal_room": 10,
			"id": "fs_relic_true_nature",
			"reveal_context": "보스가 숲의 핵에 박아 넣으려 하는 성유물의 진짜 정체가 밝혀지는 순간.",
			"reveal_act": "climax_finale",
			"hint": "이상하게 반응하는 숲의 생명체들, 특정 유물에 대한 과도한 집착.",
			"plant_act": "intro"
		},
		{
			"plant_room": 5,
			"reveal_room": 12,
			"reveal_act": "climax_finale",
			"hint": "숲의 '수호자'가 낯선 문양이나 기술의 잔해에 관심을 보이거나, 숲의 생명체들과 이질적인 반응. 그의 말투에서 느껴지는 절박함.",
			"plant_act": "rising",
			"id": "fs_rudra_past",
			"reveal_context": "루드라 비라가 자신이 숲의 수호자가 아닌 이방인이며, 자신의 세계를 잃은 트라우마에 시달리고 있음을 고백하는 순간."
		},
		{
			"reveal_room": 14,
			"plant_room": 7,
			"reveal_act": "climax_finale",
			"plant_act": "rising",
			"hint": "숲 곳곳에서 발견되는 기이한 에너지 흐름, 숲의 급격한 변화, 특정 지역의 불길한 기운.",
			"id": "fs_forest_nexus",
			"reveal_context": "숲의 핵심이 단순한 생명체가 아닌 차원간 이동 및 에너지 통로의 역할을 하고 있음이 드러나는 순간."
		},
		{
			"reveal_context": "루드라 비라가 자신의 목적을 위해 숲을 완전히 파괴하려는 광기 어린 본색을 드러내는 순간.",
			"id": "fs_rudra_madness",
			"plant_act": "rising",
			"hint": "루드라가 숲을 '보호'하는 방식이 파괴적으로 느껴지거나, 그의 눈빛에서 읽히는 광기. 숲의 약해지는 기운.",
			"reveal_act": "climax_finale",
			"reveal_room": 16,
			"plant_room": 9
		}
	],
	"npc_roles": {
		"hazel": {
			"role": "숲 주변 마을 주민",
			"arc": "4화(Rising Act)에서 등장하는 숲 주변 마을의 주민. 숲의 변화로 인한 가족의 피해를 호소하며, 루드라 비라의 강압적인 숲 관리 방식에 대한 의문을 제기하게 하여 주인공의 갈등을 심화시키는 역할."
		},
		"ela": {
			"role": "현지 가이드 / 반전의 조력자(혹은 배신자)",
			"arc": "1화에서 숲으로 주인공을 이끄는 현지 가이드. 숲의 아름다움을 소개하며 신뢰를 얻는다. 5화(climax_finale)에서 루드라의 조력자였음이 밝혀지거나, 혹은 예상치 못하게 주인공을 돕는 결정적인 역할을 하며 서사가 연결된다."
		},
		"briar": {
			"role": "숲 연구원",
			"arc": "2화(Rising Act)에서 등장하여 숲의 기이한 현상들을 과학적으로 분석하려 노력하는 연구원. 숲의 오염 징후가 인위적일 수 있다는 가설을 제시하며 주인공에게 중요한 단서를 제공한다."
		},
		"cedar": {
			"role": "숲의 현자",
			"arc": "3화(Rising Act)에서 등장하는 숲의 현자. 고대 문헌을 통해 숲의 핵심 에너지원과 관련된 비밀을 암시하고, 보스의 숨겨진 목적에 대한 경고를 던져 주인공의 의심을 심화시키는 역할."
		}
	},
	"world": {
		"secret": "The 'Forest Core' is not just the heart of this forest but also a nexus for interdimensional travel. The boss, Rudra Vira, believes it's a gate to his home dimension and a source of power to reactivate a 'parasitic relic' he possesses, intending to drain this forest to save his own.",
		"setting": "An ancient, mystical forest, seemingly pristine but harboring a deeper, hidden power that draws outsiders. Its serene beauty masks an unstable, dying ecosystem.",
		"rule": "The forest is a living entity; its health is tied to a powerful 'Forest Core'. Interfering with it can have catastrophic consequences for both the forest and other dimensions. Magic users can draw upon the forest's ambient energy, but misuse can lead to corruption."
	},
	"theme": "forest",
	"final_boss": {
		"true_identity": "고립과 좌절 속에서 광기에 휩싸인 '숲의 정수를 탐하는 강탈자'. 그는 잃어버린 성유물과 고향으로 돌아갈 열쇠가 이 숲의 원초적인 힘에 있다고 믿으며, 이 차원을 완전히 고갈시키고 파괴해서라도 숲의 에너지를 강제로 빼앗으려는 목적을 숨기고 있다. 그에게 이 숲은 신성한 존재가 아닌, 조국을 위한 도구일 뿐이다.",
		"appearance_npc": "A towering male figure, his powerful physique honed by countless battles, now clad in weathered leather and woven vines, adorned with Amazonian war paint patterns that mimic forest foliage. His intense gaze, sharp as a predator's, constantly scans the deep shadows, betraying a disciplined mind even in this wild, alien environment.",
		"id": "pool_102",
		"motivation": "자신의 세계가 파괴되는 참상과 낯선 숲으로 추방된 트라우마에 시달리는 루드라 비라는 고향으로 돌아가 부족을 지켜야 한다는 강박적인 의무감에 사로잡혀 있다. 그는 이 숲의 힘이야말로 잃어버린 성유물을 활성화하거나 고향으로 가는 문을 열 유일한 수단이라고 믿으며, 그의 신성한 의무를 방해하는 그 어떤 존재도 용납하지 않을 것이다.",
		"twist": "그는 숲의 심장부 앞에 서서, 그것을 지키기는커녕 손에 든 '성유물'—사실은 기생하는 유물—을 숲의 핵에 깊숙이 박아 넣는다. 차갑고 섬뜩한 미소를 지으며 그는 선언한다. '어리석은 탐험가들! 이 '성스러운 숲'은 나의 탈출을 위한 연료일 뿐이다. 너희 세계의 종말은 아마조니아의 생존에 비하면 작은 대가에 불불과하다!' 그 순간 숲은 비명을 지르며 시들고 붕괴하기 시작한다.",
		"surface_identity": "깊은 숲의 고독한 수호자로 나타난 그는 고대 숲의 신성한 고요를 침범한 탐험대에게 경계심 가득하지만 권위적인 태도로 맞선다. 오직 자신만이 막을 수 있는 미지의 위험으로부터 숲을 지키는 듯하며, 숲에 대한 존중을 요구한다.",
		"appearance_boss": "Transformed by the parasitic relic, Rudra Vira now radiates raw, destructive forest energy, his war paint glowing ominously, his eyes burning with an alien fire. Twisted vines and sharp, bone-like growths protrude from his body, reflecting the suffering of the forest he's draining. His movements are feral yet precise, embodying a desperate, cornered predator.",
		"name": "Rudra Vira"
	}
};
