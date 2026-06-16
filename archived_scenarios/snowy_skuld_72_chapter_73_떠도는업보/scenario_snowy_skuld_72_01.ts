export const scenario_snowy_skuld_72_01 = {
	"scenario_id": "snowy_skuld_72_01",
	"order": 1,
	"act": "intro",
	"theme": "snowy",
	"actors": {
		"eira": {
			"id": "mon_0c37c014-b5ca-4f2f-ad03-5d393e5b2eb1",
			"name": {
				"korean": "에이라",
				"english": "Eira",
				"japanese": "エイラ",
				"chinese": "艾拉",
				"french": "Eira",
				"spanish": "Eira",
				"vietnamese": "Eira",
				"thai": "ไอรา",
				"hindi": "ऐरा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8e2970b7-bcb1-4b1c-6bf0-93106b373500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/0ca1ec09-a624-450f-054a-b98de58bdb00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "끝없이 펼쳐진 설원. 빙하가 지나간 거대한 원형의 자취가 지평선을 가득 메웠다.",
						"english": "An endless snowfield. The massive circular traces left by glaciers filled the horizon.",
						"japanese": "際限なく広がる雪原。氷河が通り過ぎた巨大な円形の痕跡が地平線を満たしていた。",
						"chinese": "一望无际的雪原。冰川留下的巨大圆形轨迹布满了地平线。",
						"french": "Un champ de neige infini. Les traces circulaires massives laissées par les glaciers remplissaient l'horizon.",
						"spanish": "Un campo de nieve interminable. Las enormes huellas circulares dejadas por los glaciares llenaban el horizonte.",
						"vietnamese": "Cánh đồng tuyết trải dài vô tận. Dấu vết hình tròn khổng lồ do sông băng để lại tràn ngập chân trời.",
						"thai": "ทุ่งหิมะที่ทอดยาวไร้ที่สิ้นสุด ร่องรอยวงกลมขนาดใหญ่ที่ธารน้ำแข็งทิ้งไว้เต็มขอบฟ้า",
						"hindi": "एक अंतहीन बर्फीला मैदान। ग्लेशियरों द्वारा छोड़े गए विशाल गोलाकार निशान क्षितिज को भर रहे थे।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "여기가 그 '겹겹이 패인 원' 구역이군.",
						"english": "So this is the 'layered circular depression' zone.",
						"japanese": "ここがその「幾重にも刻まれた円」区域か。",
						"chinese": "这里就是那个“层层凹陷的圆”区域啊。",
						"french": "C'est donc la zone du \"cercle creusé en couches\".",
						"spanish": "Así que esta es la zona de la \"depresión circular en capas\".",
						"vietnamese": "Vậy đây là khu vực 'vòng tròn lõm nhiều lớp'.",
						"thai": "ที่นี่คือโซน \"วงกลมที่ถูกสลักเป็นชั้นๆ\" สินะ",
						"hindi": "तो यह 'परतदार गोलाकार अवसाद' क्षेत्र है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "eira",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "정확해. 이 흔적은… 출발점도 끝점도 없어. 그저 거대한 원을 이루고 있을 뿐.",
						"english": "Precisely. These traces... have no starting point, no end point. They just form a massive circle.",
						"japanese": "その通りだ。この痕跡は…出発点も終点もない。ただ巨大な円をなしているだけだ。",
						"chinese": "没错。这些痕迹……没有起点也没有终点。只是形成了一个巨大的圆。",
						"french": "Exactement. Ces traces... n'ont ni point de départ, ni point d'arrivée. Elles forment juste un cercle immense.",
						"spanish": "Exacto. Estas huellas... no tienen punto de partida ni de llegada. Solo forman un círculo enorme.",
						"vietnamese": "Chính xác. Những dấu vết này... không có điểm bắt đầu, không có điểm kết thúc. Chúng chỉ tạo thành một vòng tròn khổng lồ.",
						"thai": "ถูกต้อง ร่องรอยเหล่านี้... ไม่มีจุดเริ่มต้น ไม่มีจุดสิ้นสุด เพียงแต่เป็นวงกลมขนาดใหญ่เท่านั้น",
						"hindi": "बिलकुल सही। ये निशान... न तो कोई शुरुआती बिंदु है, न ही कोई अंतिम बिंदु। वे बस एक विशाल घेरा बनाते हैं।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "수천 년 동안 이어진 맴돎이라니.",
						"english": "A circling that has continued for thousands of years.",
						"japanese": "数千年も続く周回とはな。",
						"chinese": "竟然持续了数千年的盘旋。",
						"french": "Un mouvement circulaire qui a continué pendant des milliers d'années.",
						"spanish": "Un giro que ha continuado durante miles de años.",
						"vietnamese": "Một sự quanh quẩn đã kéo dài hàng ngàn năm.",
						"thai": "การวนเวียนที่ต่อเนื่องมานับพันปีเลยเหรอ",
						"hindi": "हज़ारों सालों से चला आ रहा घूमना।"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "응. 여기서부터 해독을 시작해야겠어.",
						"english": "Yes. I need to start deciphering from here.",
						"japanese": "うん。ここから解読を始めないと。",
						"chinese": "嗯。我得从这里开始破译。",
						"french": "Oui. Je dois commencer le décryptage d'ici.",
						"spanish": "Sí. Tengo que empezar a descifrar desde aquí.",
						"vietnamese": "Ừ. Tôi phải bắt đầu giải mã từ đây.",
						"thai": "อืม ฉันต้องเริ่มถอดรหัสจากตรงนี้แหละ",
						"hindi": "हाँ। मुझे यहीं से डिक्रिप्ट करना शुरू करना होगा।"
					},
					"speaker": "eira",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "이 자취들은… 단순히 지나간 흔적이 아니야.",
						"english": "These traces... are not just signs of passage.",
						"japanese": "これらの痕跡は…単なる通り過ぎた跡じゃない。",
						"chinese": "这些痕迹……不只是经过的痕迹。",
						"french": "Ces traces... ne sont pas de simples signes de passage.",
						"spanish": "Estas huellas... no son solo signos de paso.",
						"vietnamese": "Những dấu vết này... không chỉ là dấu hiệu của sự đi qua.",
						"thai": "ร่องรอยเหล่านี้... ไม่ใช่แค่รอยผ่านธรรมดา",
						"hindi": "ये निशान... केवल गुजरने के संकेत नहीं हैं।"
					},
					"speaker": "eira",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "무슨 뜻이지?",
						"english": "What does it mean?",
						"japanese": "どういう意味だ？",
						"chinese": "什么意思？",
						"french": "Qu'est-ce que ça veut dire ?",
						"spanish": "¿Qué significa?",
						"vietnamese": "Nghĩa là gì?",
						"thai": "หมายความว่าอะไร?",
						"hindi": "इसका क्या मतलब है?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "eira",
					"content": {
						"korean": "마치 무언가를 찾아 헤맨 기록 같아. 하지만 아무것도 찾지 못한 채 맴돌기만 한.",
						"english": "It's like a record of searching for something, yet only circling without finding anything.",
						"japanese": "何かを探し求めた記録のようだ。だが、何も見つけられず、ただ彷徨い続けただけ。",
						"chinese": "就像是在寻找某物的记录。然而，什么也没找到，只是原地打转。",
						"french": "On dirait le récit d'une quête inachevée. Il a cherché sans rien trouver, tournant en rond.",
						"spanish": "Parece el registro de una búsqueda. Sin embargo, solo dio vueltas sin encontrar nada.",
						"vietnamese": "Cứ như là ghi chép về việc tìm kiếm gì đó. Nhưng chẳng tìm thấy gì, chỉ quanh quẩn mãi.",
						"thai": "เหมือนเป็นบันทึกการค้นหาสิ่งบางอย่าง แต่กลับวนเวียนอยู่แค่นั้นโดยไม่พบอะไรเลย",
						"hindi": "यह किसी चीज़ की तलाश का एक रिकॉर्ड जैसा लगता है। लेकिन कुछ भी न पाकर, बस भटकता रहा।"
					}
				},
				{
					"content": {
						"korean": "목적 없는 방황….",
						"english": "Aimless wandering...",
						"japanese": "目的のない放浪…。",
						"chinese": "漫无目的的徘徊……",
						"french": "Une errance sans but...",
						"spanish": "Un deambular sin rumbo...",
						"vietnamese": "Lang thang vô định…",
						"thai": "การเร่ร่อนอย่างไร้จุดหมาย...",
						"hindi": "लक्ष्यहीन भटकन..."
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "eira",
					"spot": [
						2,
						3
					]
				},
				{
					"content": {
						"korean": "여기 이 겹겹이 패인 원들은… 끝없이 반복되는 좌절을 의미해.",
						"english": "These deeply etched circles here... they represent endless, repeated frustrations.",
						"japanese": "ここに深く刻まれた円は…果てしなく繰り返される挫折を意味する。",
						"chinese": "这里这些层层叠叠的凹陷圆圈……意味着无止境的重复挫折。",
						"french": "Ces cercles profondément gravés... Ils symbolisent des frustrations infinies et répétées.",
						"spanish": "Estos círculos grabados aquí... significan frustraciones interminables y repetidas.",
						"vietnamese": "Những vòng tròn chồng chất sâu hoắm ở đây… biểu thị sự thất vọng lặp đi lặp lại không ngừng.",
						"thai": "วงกลมที่สลักลึกซ้อนกันอยู่นี้... หมายถึงความผิดหวังที่ซ้ำซากไม่รู้จบ",
						"hindi": "ये गहरे खुदे हुए घेरे... अंतहीन, बार-बार की निराशाओं का प्रतीक हैं।"
					},
					"speaker": "eira",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "좌절?",
						"english": "Frustration?",
						"japanese": "挫折？",
						"chinese": "挫折？",
						"french": "Frustration ?",
						"spanish": "¿Frustración?",
						"vietnamese": "Thất vọng ư?",
						"thai": "ความผิดหวัง?",
						"hindi": "निराशा?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "도달할 수 없는 목표를 향해 영원히 나아갔던 발걸음.",
						"english": "Steps taken forever towards an unattainable goal.",
						"japanese": "決して到達できない目標に向かって永遠に進んだ足跡。",
						"chinese": "永远朝着无法实现的目标迈进的脚步。",
						"french": "Des pas faits éternellement vers un but inatteignable.",
						"spanish": "Pasos dados eternamente hacia una meta inalcanzable.",
						"vietnamese": "Những bước chân mãi mãi tiến về một mục tiêu không thể đạt được.",
						"thai": "ก้าวเดินไปตลอดกาลสู่เป้าหมายที่ไม่อาจเอื้อมถึง",
						"hindi": "एक अप्राप्य लक्ष्य की ओर हमेशा बढ़ते कदम।"
					},
					"speaker": "eira",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그는 무엇을 찾으려 했던 걸까.",
						"english": "What was he trying to find?",
						"japanese": "彼は何を探そうとしていたのだろうか。",
						"chinese": "他到底想找到什么？",
						"french": "Que cherchait-il donc ?",
						"spanish": "¿Qué intentaba encontrar?",
						"vietnamese": "Hắn đã cố tìm gì vậy?",
						"thai": "เขาพยายามจะหาอะไรกันแน่?",
						"hindi": "वह क्या खोजने की कोशिश कर रहा था?"
					},
					"speaker": "character_any"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "eira",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "이 길은… 아무것도 찾아내지 못했어. 그리고 앞으로도 그럴 거야.",
						"english": "This path... it found nothing. And it never will.",
						"japanese": "この道は…何も見つけられなかった。そしてこれからもそうだろう。",
						"chinese": "这条路……什么也没找到。而且将来也不会。",
						"french": "Ce chemin... il n'a rien trouvé. Et il ne trouvera jamais rien.",
						"spanish": "Este camino... no encontró nada. Y nunca lo hará.",
						"vietnamese": "Con đường này… chẳng tìm thấy gì. Và mãi mãi sẽ không.",
						"thai": "เส้นทางนี้... ไม่พบอะไรเลย และจะไม่มีวันพบ",
						"hindi": "इस रास्ते पर... कुछ भी नहीं मिला। और न कभी मिलेगा।"
					},
					"speaker": "eira",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "영원히 길을 잃은 거나 마찬가지네.",
						"english": "It's like being lost forever.",
						"japanese": "永遠に道に迷ったようなものだ。",
						"chinese": "就像是永远迷失了方向。",
						"french": "C'est comme être perdu pour toujours.",
						"spanish": "Es como estar perdido para siempre.",
						"vietnamese": "Cứ như là lạc lối vĩnh viễn vậy.",
						"thai": "เหมือนหลงทางตลอดไปเลยนะ",
						"hindi": "यह हमेशा के लिए खो जाने जैसा है।"
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "그래서 더 절망적이야. 계속 걸었지만, 얻은 건 아무것도 없어.",
						"english": "That makes it even more despairing. I kept walking, but gained nothing.",
						"japanese": "だからこそ、より絶望的だ。歩き続けたのに、何も得られなかった。",
						"chinese": "这就更令人绝望了。一直走着，却一无所获。",
						"french": "C'est encore plus désespérant. J'ai continué à marcher, mais je n'ai rien gagné.",
						"spanish": "Por eso es aún más desesperante. Seguí caminando, pero no gané nada.",
						"vietnamese": "Vì thế càng tuyệt vọng hơn. Cứ đi mãi, nhưng chẳng đạt được gì.",
						"thai": "นั่นยิ่งทำให้หมดหวัง ฉันเดินต่อไปเรื่อยๆ แต่ไม่ได้อะไรเลย",
						"hindi": "इसीलिए यह और भी निराशाजनक है। चलता रहा, लेकिन कुछ भी हासिल नहीं हुआ।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이런 곳에 괴물이 나타나는 건가.",
						"english": "A monster appearing in a place like this?",
						"japanese": "こんな所に怪物が現れるのか。",
						"chinese": "这种地方也会出现怪物吗？",
						"french": "Un monstre apparaîtrait dans un endroit pareil ?",
						"spanish": "¿Un monstruo aparece en un lugar como este?",
						"vietnamese": "Một con quái vật lại xuất hiện ở nơi như thế này sao?",
						"thai": "สัตว์ประหลาดปรากฏตัวในที่แบบนี้เหรอ?",
						"hindi": "क्या ऐसी जगह पर कोई राक्षस प्रकट हो रहा है?"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "거대한 그림자가 얼음 자취 한가운데 나타났다.",
						"english": "A colossal shadow appeared amidst the icy traces.",
						"japanese": "巨大な影が氷の痕跡の真ん中に現れた。",
						"chinese": "巨大的身影出现在冰冷轨迹的中央。",
						"french": "Une ombre colossale apparut au milieu des traces de glace.",
						"spanish": "Una sombra colosal apareció en medio de los rastros helados.",
						"vietnamese": "Một bóng đen khổng lồ hiện ra giữa những dấu vết băng giá.",
						"thai": "เงาขนาดมหึมาปรากฏขึ้นกลางรอยน้ำแข็ง.",
						"hindi": "एक विशाल छाया बर्फीले निशान के बीच प्रकट हुई।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "…누가 감히 이 영원한 헤맴을 방해하는가.",
						"english": "...Who dares disturb this eternal wandering?",
						"japanese": "…誰がこの永遠の彷徨いを邪魔するのか。",
						"chinese": "……谁敢打扰这永恒的迷失？",
						"french": "...Qui ose perturber cette errance éternelle ?",
						"spanish": "...¿Quién se atreve a perturbar este deambular eterno?",
						"vietnamese": "...Kẻ nào dám quấy rầy sự lang thang vĩnh cửu này?",
						"thai": "...ใครบังอาจมารบกวนการเตร็ดเตร่อันเป็นนิรันดร์นี้?",
						"hindi": "…कौन इस शाश्वत भटकन में बाधा डालने की हिम्मत करता है?"
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "네가 이 맴돎의 주인인가!",
						"english": "Are you the master of this endless circling?!",
						"japanese": "お前がこの巡回の主か！",
						"chinese": "你是这循环的主人吗？！",
						"french": "Es-tu le maître de cette ronde infernale ?!",
						"spanish": "¿¡Eres tú el dueño de este deambular?!",
						"vietnamese": "Ngươi là chủ nhân của vòng xoáy này sao?!",
						"thai": "แกคือเจ้าของวงวนนี้งั้นรึ?!",
						"hindi": "क्या तुम इस चक्कर के मालिक हो?!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "너희도 이 고통을 느껴봐야지. 영원히 나를 찾아 헤매는 고통을.",
						"english": "You too must feel this torment. The torment of endlessly searching for me.",
						"japanese": "お前たちもこの苦痛を味わうべきだ。永遠に私を探し彷徨う苦痛を。",
						"chinese": "你们也该尝尝这份痛苦。永远寻觅我的痛苦。",
						"french": "Vous aussi, vous devez ressentir ce tourment. Le tourment de me chercher sans fin.",
						"spanish": "Vosotros también debéis sentir este tormento. El tormento de buscarme sin cesar.",
						"vietnamese": "Ngươi cũng phải nếm trải nỗi đau này. Nỗi đau vĩnh viễn tìm kiếm ta.",
						"thai": "พวกเจ้าก็ต้องรู้สึกถึงความทรมานนี้เช่นกัน ความทรมานของการออกตามหาข้าไม่สิ้นสุด.",
						"hindi": "तुम्हें भी इस पीड़ा का अनुभव करना होगा। मुझे हमेशा ढूंढने की पीड़ा।"
					},
					"speaker": "random_boss"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "정체 모를 괴물이 탐험대를 얼음 속에 가두었다.",
						"english": "An unknown monster trapped the expedition in ice.",
						"japanese": "正体不明の怪物が探検隊を氷の中に閉じ込めた。",
						"chinese": "不明怪物将探险队困在了冰中。",
						"french": "Un monstre inconnu a emprisonné l'expédition dans la glace.",
						"spanish": "Un monstruo desconocido atrapó a la expedición en el hielo.",
						"vietnamese": "Một con quái vật không rõ danh tính đã giam cầm đội thám hiểm trong băng.",
						"thai": "สัตว์ประหลาดนิรนามจับทีมสำรวจขังไว้ในน้ำแข็ง.",
						"hindi": "एक अज्ञात राक्षस ने अभियान दल को बर्फ में फंसा दिया।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "영원히, 이 맴돎 속에서… 나를 찾아 헤매거라.",
						"english": "Forever, lost in this loop... seek me.",
						"japanese": "永遠に、この輪廻の中で…私を探し求めよ。",
						"chinese": "永远地，在这循环中…去寻我吧。",
						"french": "Éternellement, dans cette boucle... cherche-moi.",
						"spanish": "Para siempre, en este bucle... búscame.",
						"vietnamese": "Mãi mãi, trong vòng luẩn quẩn này… hãy tìm ta.",
						"thai": "ตลอดไป ในวงวนนี้... จงออกตามหาข้า.",
						"hindi": "हमेशा के लिए, इस चक्र में... मुझे ढूंढते भटको।"
					}
				},
				{
					"content": {
						"korean": "…아직 끝나지 않았어. 반드시 알아낼 거야.",
						"english": "...This isn't over. I will find out.",
						"japanese": "…まだ終わってない。必ず突き止める。",
						"chinese": "…还没完。我一定会弄清楚的。",
						"french": "...Ce n'est pas fini. Je le découvrirai.",
						"spanish": "...Aún no ha terminado. Lo averiguaré.",
						"vietnamese": "…Chưa kết thúc đâu. Ta nhất định sẽ tìm ra.",
						"thai": "...ยังไม่จบ. ข้าจะค้นหาให้เจอแน่นอน.",
						"hindi": "...यह अभी खत्म नहीं हुआ है। मैं निश्चित रूप से पता लगाऊंगा।"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "…끝이 아니야. 이 헤맴은, 영원히… 끝나지 않아….",
						"english": "...It's not over. This wandering, forever... it won't end...",
						"japanese": "…終わりではない。この彷徨いは、永遠に…終わらない…。",
						"chinese": "……还没结束。这份迷失，永远……不会结束……。",
						"french": "...Ce n'est pas la fin. Cette errance, pour toujours... ne s'arrêtera pas...",
						"spanish": "...No es el final. Este deambular, para siempre... no terminará...",
						"vietnamese": "...Chưa kết thúc đâu. Sự lang thang này, vĩnh viễn... sẽ không bao giờ kết thúc...",
						"thai": "...นี่ไม่ใช่จุดจบ. การเตร็ดเตร่นี้ จะไม่มีวัน... สิ้นสุด...",
						"hindi": "…यह अंत नहीं है। यह भटकन, हमेशा के लिए… कभी खत्म नहीं होगी…।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "무엇을 찾고 있었던 거지?",
						"english": "What was it searching for?",
						"japanese": "何を探していたのだろう？",
						"chinese": "它一直在寻找什么？",
						"french": "Que cherchait-il donc ?",
						"spanish": "¿Qué estaba buscando?",
						"vietnamese": "Nó đã tìm kiếm điều gì vậy?",
						"thai": "มันกำลังตามหาอะไรกันนะ?",
						"hindi": "वह क्या ढूंढ रहा था?"
					},
					"speaker": "character_any"
				},
				{
					"spot": [
						2,
						3
					],
					"speaker": "eira",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "이 자취는 끝났지만, 그 헤맴의 본질은 아직 남아있어.",
						"english": "These traces have ended, but the essence of that wandering still remains.",
						"japanese": "この痕跡は終わったが、その彷徨いの本質はまだ残っている。",
						"chinese": "这些痕迹已消逝，但那份迷失的本质依然存在。",
						"french": "Ces traces sont terminées, mais l'essence de cette errance demeure.",
						"spanish": "Estas huellas han terminado, pero la esencia de ese deambular aún permanece.",
						"vietnamese": "Những dấu vết này đã kết thúc, nhưng bản chất của sự lang thang đó vẫn còn.",
						"thai": "ร่องรอยเหล่านี้สิ้นสุดลงแล้ว แต่แก่นแท้ของการเตร็ดเตร่นั้นยังคงอยู่.",
						"hindi": "ये निशान तो खत्म हो गए, लेकिन उस भटकन का सार अभी भी बाकी है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "스쿌드는 무엇을 찾아 헤맨 것일까. 그 업보의 정체를 밝혀야만 했다.",
						"english": "What was Skuld searching for? The truth of her karma had to be revealed.",
						"japanese": "スクルドは何を探し彷徨っていたのだろうか。その業報の正体を明らかにしなければならなかった。",
						"chinese": "斯库尔德究竟在寻找什么？必须揭开那份业报的真面目。",
						"french": "Que cherchait Skuld ? La vérité de son karma devait être révélée.",
						"spanish": "¿Qué estaba buscando Skuld? La verdad de su karma debía ser revelada.",
						"vietnamese": "Skuld đã tìm kiếm điều gì vậy? Bản chất của nghiệp chướng đó phải được tiết lộ.",
						"thai": "สกุลด์กำลังตามหาอะไรกันนะ? ต้องเปิดเผยตัวตนของกรรมนั้นให้ได้.",
						"hindi": "स्कुल्ड क्या ढूंढ रही थी? उसके कर्म की सच्चाई का पता लगाना ही था।"
					},
					"speaker": "narrator"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"끝없는 설원. 빙하가 맴돈 자취가 겹겹이 패였다.",
			"수천 년, 같은 곳을 맴돌아 온 흔적.",
			"이 길은 어디로 향하는가? 그 누구도 알 수 없었다.",
			"그리고 우리는, 그 영원한 헤맴 속으로 걸어 들어갔다."
		],
		"english": [
			"Endless snowfield. Traces of glaciers swirling carved in layers.",
			"Traces of circling the same place for thousands of years.",
			"Where does this path lead? No one knew.",
			"And we walked into that eternal wandering."
		],
		"japanese": [
			"果てしない雪原。氷河が渦巻いた跡が幾重にも刻まれている。",
			"数千年、同じ場所を巡り続けた痕跡。",
			"この道はどこへ向かうのか？誰も知る由もなかった。",
			"そして私たちは、その永遠の彷徨の中へと歩みを進めた。"
		],
		"chinese": [
			"广袤的雪原。冰川盘旋的痕迹层层叠叠。",
			"数千年，在同一地点盘旋的痕迹。",
			"这条路通向何方？无人知晓。",
			"然后，我们走进了那永恒的迷失之中。"
		],
		"french": [
			"Champ de neige infini. Les traces des glaciers tourbillonnants se sont creusées en couches.",
			"Des traces d'un mouvement circulaire au même endroit pendant des milliers d'années.",
			"Où mène ce chemin ? Personne ne le savait.",
			"Et nous avons marché dans cette errance éternelle."
		],
		"spanish": [
			"Campo de nieve interminable. Las huellas de los glaciares arremolinados se grabaron en capas.",
			"Huellas de haber dado vueltas en el mismo lugar durante miles de años.",
			"¿Adónde lleva este camino? Nadie lo sabía.",
			"Y entramos en esa eterna errancia."
		],
		"vietnamese": [
			"Cánh đồng tuyết vô tận. Dấu vết của sông băng cuộn tròn được khắc từng lớp.",
			"Dấu vết của việc quanh quẩn cùng một nơi hàng ngàn năm.",
			"Con đường này dẫn đến đâu? Không ai biết.",
			"Và chúng tôi đã bước vào sự lang thang vĩnh cửu đó."
		],
		"thai": [
			"ทุ่งหิมะอันกว้างใหญ่ ร่องรอยของธารน้ำแข็งที่หมุนวนเป็นชั้นๆ",
			"ร่องรอยของการวนเวียนอยู่ ณ ที่เดิมมานับพันปี",
			"เส้นทางนี้นำไปสู่ที่ใด? ไม่มีใครรู้",
			"และเราก็เดินเข้าสู่การหลงทางนิรันดร์นั้น"
		],
		"hindi": [
			"अंतहीन बर्फीला मैदान। घूमते ग्लेशियरों के निशान परतों में खुदे हुए हैं。",
			"हज़ारों वर्षों से एक ही जगह पर घूमते रहने के निशान।",
			"यह रास्ता कहाँ जाता है? कोई नहीं जानता था।",
			"और हम उस शाश्वत भटकन में चल पड़े।"
		]
	}
} as const;
