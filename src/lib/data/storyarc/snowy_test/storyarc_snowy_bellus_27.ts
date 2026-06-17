import type { StoryArc } from '$lib/types';

export const storyarc_snowy_bellus_27: StoryArc = {
	"id": "snowy_bellus_27",
	"level": 27,
	"chapter_name": {
		"french": "La Fin de l'Hiver Éternel",
		"spanish": "El Fin del Invierno Eterno",
		"chinese": "永恒冬日的终结",
		"japanese": "永遠の冬の終わり",
		"vietnamese": "Kết Thúc Của Mùa Đông Vĩnh Cửu",
		"hindi": "अनंत शीतकाल का अंत",
		"english": "The End of Eternal Winter",
		"thai": "จุดจบของฤดูหนาวนิรันดร์",
		"korean": "영원한 겨울의 끝"
	},
	"theme": "snowy",
	"rising_count": 3,
	"world": {
		"setting": "시간이 멈춘 채 얼어붙은 설원 깊숙한 곳, 벨루스의 의지에 따라 현실의 경계가 무너지는 최후의 봉인된 시간의 전장. 부서진 시계탑과 흘러넘치는 얼음 파편들이 뒤섞여 비극적인 아름다움을 자아낸다.",
		"secret": "벨루스는 모든 것이 추악하게 파괴될 미래를 보았고, 이 세상을 구하기 위해 '가장 아름다운 순간'만을 영원히 얼려 보존하려 했다는 뒤틀린 진실. 그의 광기 어린 수집은 사실 절망적인 구원의 시도였다.",
		"rule": "벨루스가 멈춰 세운 시간의 영역에서는 과거와 현재, 미래의 파편들이 불규칙하게 뒤섞여 나타난다. 시간이 흐르게 되면 벨루스가 '구원'이라 믿었던 모든 것이 파괴될 것이라는 예언이 실현될 위기에 처한다."
	},
	"protagonist_goal": "벨루스의 비극적인 신념을 완전히 이해하고 그의 시간 보존 장치를 해체하여 멈춘 시간을 다시 흐르게 한다. 유한한 삶의 아름다움을 긍정하며 벨루스의 광기 어린 '영원'에 맞선다.",
	"act_tone": {
		"intro": {
			"tension": 1,
			"narrative_role": "Setting the stage for the final confrontation and revealing the true nature of the threat.",
			"mood": "resolute"
		},
		"rising": {
			"mood": "desperate",
			"narrative_role": "Increasing the stakes as the truth about Bellus's twisted salvation is fully understood.",
			"tension": 3
		},
		"climax_finale": {
			"tension": 5,
			"narrative_role": "The ultimate confrontation, revelation, and resolution of the series' core conflict.",
			"mood": "triumphant_bittersweet"
		}
	},
	"final_boss": {
		"surface_identity": "멈춰버린 세상의 선로 위를 달리는 유령 열차. 그에게 닿은 자들은 영원히 얼어붙은 채 가장 아름다운 순간에 박제된다.",
		"twist": "'왜 도망치니? 한 걸음만 더 가면 늙지도, 잊혀지지도 않는 영원이 있는데.' 벨루스는 시계태엽 감기는 웃음소리를 내며 속삭인다. '너희의 가장 찬란한 표정을 내가 방금 실로 꿰맸어. 이제 영원히 내 거야.' 쓰러지며 시계 유리가 깨질 때, 그는 조각난 태엽 사이로 말한다 — '…시간이 흐르면… 결국 모든 게 흉해질 텐데… 왜 굳이 그 지옥으로 가려는 거야?'",
		"id": "ChronosStitcher_V0",
		"motivation": "탐험대가 시간을 다시 흐르게 하려는 것을 '파괴'라고 생각한다. 그들이 나이를 먹고, 병들고, 결국 죽는 것을 막기 위해—그들의 시간을 여기서 '가져가' 주려 한다.",
		"appearance": "A shattered, surreal, Victorian-style train engine, parts of its polished obsidian and brass frame cracking, revealing internal clockwork that spins wildly. Its giant clock hands are broken, some dangling, others frantically trying to turn backward. The hundreds of spindly sewing needles of silver ice are now piercing through the fabric of reality, creating tears where glimpses of a decaying future flash. The giant clock face behind the frozen glass dome is fractured, the hands stuck, twitching erratically. Blue spectral afterimages of people are now fading, flickering in and out of existence around it. Photorealistic steampunk, tragic and epic, with stark, dramatic lighting illuminating the chaos and the fleeting beauty.",
		"name": "Bellus",
		"true_identity": "과거에 시간을 배달하던 집찰관. 모든 것이 파괴되는 미래를 보았고, 세상을 구하는 유일한 방법은 '가장 아름다운 지금 이 순간'을 얼려서 영구 보존하는 것이라 믿게 된 광기 어린 수집가."
	},
	"global_foreshadowing": [
		{
			"plant_room": 7,
			"reveal_context": "벨루스가 주인공들의 가장 행복한 표정을 꿰맸다고 고백하며, 영원의 의미에 대한 근본적인 질문이 던져진다.",
			"hint": "가장 찬란한 순간에 꿰매어진 영원이 과연 진정한 삶일까?",
			"id": "GF_3_1",
			"plant_act": "intro",
			"reveal_act": "climax_finale",
			"reveal_room": 1
		},
		{
			"id": "GF_3_2",
			"plant_act": "rising",
			"reveal_act": "climax_finale",
			"reveal_room": 2,
			"plant_room": 12,
			"reveal_context": "브란이 벨루스가 본 파괴될 미래에 대한 정보를 밝혀내며, 벨루스의 행동 동기가 정당화될 수 없음을 논리적으로 반박한다.",
			"hint": "시간이 흐르면 모든 것이 흉해질 것이라는 벨루스의 두려움이 현실이 될 위기."
		},
		{
			"plant_room": 3,
			"reveal_context": "이바르가 벨루스의 시간 보존 장치 해체 방법을 찾아내며, 그 장치 속에 과거의 흔적과 벨루스의 비극적인 역사가 담겨있음을 암시한다.",
			"hint": "시계태엽 감기는 웃음소리 뒤에 숨겨진 과거 집찰관의 상실감.",
			"plant_act": "intro",
			"reveal_act": "rising",
			"reveal_room": 8,
			"id": "GF_3_3"
		},
		{
			"id": "GF_3_4",
			"reveal_act": "climax_finale",
			"reveal_room": 5,
			"plant_act": "rising",
			"hint": "영원히 박제된 사랑하는 이의 미소가 이제는 덧없는 환영으로 다가온다.",
			"plant_room": 9,
			"reveal_context": "에이라가 사랑하는 이의 환영을 뒤로하고 유한한 삶을 선택하며 벨루스와 맞서 싸우는 결정적인 순간."
		}
	],
	"npc_roles": {
		"eira": {
			"role": "벨루스의 개인적인 상처와 동기를 이해하고 극복하며, 유한한 삶의 아름다움을 선택하는 주역.",
			"arc": "1편에서 사랑하는 이를 잃은 공포에서 시작하여, 2편에서 벨루스의 광기 어린 집착을 이해하고, 3편에서는 벨루스의 비극적인 구원론을 거부하고 삶의 순환을 긍정하며 최종 대결에 나선다. 개인적인 복수를 넘어 인류의 미래를 위한 선택을 하는 성장형 캐릭터."
		},
		"ivar": {
			"role": "벨루스의 시간 보존 장치를 해체할 핵심적인 방법을 찾아내고 실행하며, 벨루스의 비극적인 신념을 논리적으로 반박하는 해결사.",
			"arc": "1편에서 열차의 기이한 현상을 환경 재해로 치부하던 실용주의자였으나, 2편에서 고대 유물을 통해 파괴된 미래 예언을 접하며 벨루스의 동기를 엿보고, 3편에서는 벨루스의 장치를 해체할 물리적/논리적 해법을 제시하여 멈춘 시간을 되돌리는 데 결정적인 역할을 한다."
		},
		"bran": {
			"role": "벨루스의 비극적인 과거와 그가 본 미래에 대한 완전한 정보를 밝혀내 벨루스의 광기를 증명하고 그의 취약점을 파악하는 조력자.",
			"arc": "1편에서 미스터리를 어렴풋이 느끼고, 2편에서 '시간을 꿰매는 자' 전설을 추론하며 벨루스의 목적을 탐색한 후, 3편에서 벨루스의 광기를 촉발한 '파괴될 미래'의 완전한 진실을 파헤쳐 탐험대가 벨루스를 이해하고 공략하는 데 결정적인 지식을 제공한다."
		}
	},
	"scenarioOutline": [
		{
			"order": 1,
			"summary": "벨루스의 진정한 정체가 담긴 장소를 발견한 탐험대는 그의 '영원한 수집'의 실체를 목격한다. 에이라는 사랑하는 이의 박제된 행복 뒤에 숨겨진 벨루스의 절망적인 광기를 직면하며, 덧없는 영원에 대한 의문을 품는다.",
			"boss": "random_boss",
			"npc": "eira",
			"title": "얼어붙은 진실의 봉인",
			"act": "intro"
		},
		{
			"act": "rising",
			"npc": "bran",
			"title": "파괴될 미래의 환상",
			"boss": "random_boss",
			"summary": "브란은 벨루스가 보았던 '모든 것이 흉해질 미래'에 대한 완전한 정보를 담고 있는 고대 기록을 해독한다. 이는 벨루스의 행동 동기가 단순한 악의가 아닌, 극심한 공포에서 비롯되었음을 증명하며 탐험대를 혼란에 빠뜨린다.",
			"order": 2
		},
		{
			"order": 3,
			"summary": "이바르는 벨루스의 시간 보존 장치를 해체할 핵심적인 방법을 찾아낸다. 이 과정에서 장치에 담긴 과거 시간을 배달하던 집찰관의 흔적과 벨루스의 비극적인 상실감을 암시하는 증거를 발견한다.",
			"boss": "random_boss",
			"title": "영원을 깨는 열쇠",
			"npc": "ivar",
			"act": "rising"
		},
		{
			"order": 4,
			"summary": "에이라는 벨루스가 꿰매어 놓은 사랑하는 이의 '행복한 순간'을 다시 마주한다. 그녀는 그 영원한 미소가 이제는 덧없는 환영임을 깨닫고, 유한하지만 진정한 삶의 순환을 선택하며 벨루스와의 최종 대결을 준비한다.",
			"boss": "random_boss",
			"act": "rising",
			"title": "순환하는 삶의 선택",
			"npc": "eira"
		},
		{
			"summary": "벨루스와의 최후의 대결에서 이바르의 방법으로 시간 보존 장치가 해체되고, 벨루스의 뒤틀린 구원이 종말을 맞는다. 벨루스는 쓰러지며 자신의 twist를 폭로하고, 에이라는 유한한 삶의 아름다움을 택하며 멈춘 시간을 해방시킨다. 비극적인 진실 속에서 새로운 시간이 흐르기 시작한다.",
			"order": 5,
			"title": "시간의 해방, 그리고 남겨진 진실",
			"npc": "eira",
			"act": "climax_finale",
			"boss": "pool_035"
		}
	],
	"act_summary": {
		"climax_finale": "벨루스와의 최후의 대결에서 그의 시간 보존 장치가 해체되고, 벨루스의 비극적인 twist가 폭로된다. 에이라의 선택으로 멈췄던 시간이 다시 흐르기 시작하며, 시리즈의 막이 내린다.",
		"rising": "브란이 벨루스가 본 '파괴될 미래'의 완전한 정보를 밝혀내고, 이바르가 시간 보존 장치 해체 방법을 찾아낸다. 에이라는 유한한 삶의 아름다움을 선택하며 벨루스와의 최종 대결을 위한 마음의 준비를 마친다.",
		"intro": "탐험대는 벨루스의 '영원한 수집'의 실체를 목격하며 그의 뒤틀린 구원론과 덧없는 영원의 의미에 대한 근본적인 의문을 품는다."
	}
};
