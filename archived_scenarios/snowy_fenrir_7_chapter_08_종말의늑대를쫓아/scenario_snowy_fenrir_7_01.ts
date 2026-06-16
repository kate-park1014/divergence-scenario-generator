export const scenario_snowy_fenrir_7_01 = {
	"scenario_id": "snowy_fenrir_7_01",
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
					"content": {
						"korean": "눈보라가 몰아치는 설원. 전설의 늑대를 쫓는 탐험대가 발자국 앞에 섰다.",
						"english": "A blizzard-swept snowfield. An expedition tracking the legendary wolf stood before its footprints.",
						"japanese": "吹雪が吹き荒れる雪原。伝説の狼を追う探検隊が足跡の前に立った。",
						"chinese": "暴风雪肆虐的雪原。追寻传说之狼的探险队，停在了足迹前。",
						"french": "Un champ de neige balayé par le blizzard. Une expédition traquant le loup légendaire se tenait devant ses empreintes.",
						"spanish": "Un campo de nieve azotado por la ventisca. Una expedición que rastreaba al lobo legendario se detuvo ante sus huellas.",
						"vietnamese": "Cánh đồng tuyết phủ bão tuyết. Một đoàn thám hiểm truy lùng con sói huyền thoại dừng lại trước dấu chân của nó.",
						"thai": "ทุ่งหิมะที่พายุหิมะพัดโหมกระหน่ำ. คณะสำรวจที่กำลังตามรอยหมาป่าในตำนานได้ยืนอยู่หน้ารอยเท้าของมัน",
						"hindi": "एक बर्फीला तूफान से घिरा बर्फीला मैदान। पौराणिक भेड़िये का पीछा करने वाला एक अभियान उसके पदचिह्नों के सामने खड़ा था।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이게… 종말의 늑대 발자국인가?",
						"english": "Are these… the Wolf of Ragnarok's footprints?",
						"japanese": "これ… 終焉の狼の足跡なのか？",
						"chinese": "这是……末日之狼的足迹吗？",
						"french": "Sont-ce là… les empreintes du Loup du Crépuscule ?",
						"spanish": "¿Son estas… las huellas del Lobo del Apocalipsis?",
						"vietnamese": "Đây có phải… dấu chân của Sói Diệt Thế không?",
						"thai": "นี่คือ… รอยเท้าของหมาป่าแห่งวันสิ้นโลกหรือ?",
						"hindi": "क्या ये… प्रलय के भेड़िये के पदचिह्न हैं?"
					},
					"speaker": "character_any"
				},
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "eira",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "맞습니다. 북방 부족의 기록과 일치해요.",
						"english": "That's right. They match the Northern Tribe's records.",
						"japanese": "はい、その通りです。北方の部族の記録と一致します。",
						"chinese": "没错。与北方部落的记载相符。",
						"french": "C'est exact. Elles correspondent aux archives de la Tribu du Nord.",
						"spanish": "Así es. Coinciden con los registros de la Tribu del Norte.",
						"vietnamese": "Đúng vậy. Chúng khớp với ghi chép của Bộ tộc phương Bắc.",
						"thai": "ถูกต้อง. ตรงกับบันทึกของชนเผ่าทางเหนือ",
						"hindi": "यह सही है। वे उत्तरी जनजाति के अभिलेखों से मेल खाते हैं。"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "eira",
					"content": {
						"korean": "하지만… 여기 이 작은 조각들은….",
						"english": "But… these small fragments here…",
						"japanese": "だが… ここにある小さな破片は…。",
						"chinese": "但是……这里这些小碎片……",
						"french": "Mais… ces petits fragments ici…",
						"spanish": "Pero… estos pequeños fragmentos aquí…",
						"vietnamese": "Nhưng… những mảnh nhỏ này ở đây…",
						"thai": "แต่… ชิ้นส่วนเล็กๆ เหล่านี้…",
						"hindi": "लेकिन… ये छोटे-छोटे टुकड़े यहाँ…"
					}
				},
				{
					"content": {
						"korean": "뼈 조각? 왜 이런 게 발자국에 섞여 있지?",
						"english": "Bone fragments? Why are these mixed in with the footprints?",
						"japanese": "骨の破片？なぜこんなものが足跡に混じっているんだ？",
						"chinese": "骨头碎片？为什么这种东西会混在足迹里？",
						"french": "Des fragments d'os ? Pourquoi sont-ils mélangés aux empreintes ?",
						"spanish": "¿Fragmentos de hueso? ¿Por qué hay esto mezclado con las huellas?",
						"vietnamese": "Mảnh xương? Tại sao những thứ này lại lẫn vào dấu chân?",
						"thai": "เศษกระดูก? ทำไมถึงมีสิ่งเหล่านี้ปะปนอยู่ในรอยเท้า?",
						"hindi": "हड्डी के टुकड़े? ये पदचिह्नों में क्यों मिले हुए हैं?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"speaker": "eira",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "전설에 따르면 늑대는 굶주림으로 모든 것을 집어삼킨다고 되어 있지만….",
						"english": "According to legend, the wolf devours everything out of hunger, but…",
						"japanese": "伝説によると、狼は飢えですべてを呑み込むとされているが…。",
						"chinese": "传说中，狼会因饥饿吞噬一切，但是……",
						"french": "Selon la légende, le loup dévore tout par faim, mais…",
						"spanish": "Según la leyenda, el lobo devora todo por hambre, pero…",
						"vietnamese": "Theo truyền thuyết, con sói nuốt chửng mọi thứ vì đói, nhưng…",
						"thai": "ตามตำนานเล่าว่า หมาป่าจะกลืนกินทุกสิ่งด้วยความหิวโหย แต่ว่า…",
						"hindi": "किंवदंती के अनुसार, भेड़िया भूख से सब कुछ खा जाता है, लेकिन…"
					},
					"speaker": "eira"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "뭐가 이상한가요?",
						"english": "What's strange?",
						"japanese": "何かおかしいですか？",
						"chinese": "有什么奇怪的吗？",
						"french": "Qu'est-ce qui est étrange ?",
						"spanish": "¿Qué es lo extraño?",
						"vietnamese": "Có gì lạ à?",
						"thai": "มีอะไรแปลกไปเหรอ?",
						"hindi": "क्या अजीब है?"
					}
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "이 뼈들은 너무 작고… 깨끗해요. 마치 소화된 흔적이 없어요.",
						"english": "These bones are too small... and clean. As if untouched by digestion.",
						"japanese": "この骨は小さすぎて…しかも綺麗だ。消化された痕跡がない。",
						"chinese": "这些骨头太小了…而且很干净。就像没有被消化过的痕迹。",
						"french": "Ces os sont trop petits… et propres. Comme s'ils n'avaient pas été digérés.",
						"spanish": "Estos huesos son muy pequeños... y limpios. Como si no hubieran sido digeridos.",
						"vietnamese": "Những bộ xương này quá nhỏ... và sạch. Như thể chưa từng bị tiêu hóa.",
						"thai": "กระดูกพวกนี้เล็กเกินไป...และสะอาด ราวกับไม่มีร่องรอยของการย่อยอาหาร",
						"hindi": "ये हड्डियां बहुत छोटी हैं… और साफ हैं। जैसे इन्हें पचाया ही नहीं गया।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "eira",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "발자국을 따라가지만… 늑대의 기척이 느껴지지 않습니다.",
						"english": "Following tracks... but no sign of the wolf.",
						"japanese": "足跡を追っているが…狼の気配が感じられない。",
						"chinese": "追踪着足迹…却感觉不到狼的踪迹。",
						"french": "Nous suivons les traces... mais aucune présence de loup.",
						"spanish": "Seguimos las huellas... pero no hay rastro del lobo.",
						"vietnamese": "Theo dấu chân... nhưng không cảm thấy hơi thở của sói.",
						"thai": "ตามรอยเท้าไป...แต่ไม่รู้สึกถึงเงาของหมาป่า",
						"hindi": "हम पदचिह्नों का पीछा कर रहे हैं… लेकिन भेड़िये का कोई निशान नहीं है।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "숨어있는 건가?",
						"english": "Is it hiding?",
						"japanese": "隠れているのか？",
						"chinese": "它躲起来了吗？",
						"french": "Se cache-t-il ?",
						"spanish": "¿Está escondido?",
						"vietnamese": "Nó đang trốn sao?",
						"thai": "มันซ่อนอยู่หรือเปล่า?",
						"hindi": "क्या वह छिपा है?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "아니요. 사냥꾼의 본능으로도, 기록된 늑대의 습성으로도… 알 수 없는 침묵입니다.",
						"english": "No. Neither instinct nor lore explains this silence.",
						"japanese": "いや。狩人の本能も、記録された狼の習性も…この沈黙は説明できない。",
						"chinese": "不。无论是猎人的直觉，还是记载的狼的习性…都无法解释这种寂静。",
						"french": "Non. Ni l'instinct de chasseur ni le comportement documenté des loups... n'explique ce silence étrange.",
						"spanish": "No. Ni el instinto de cazador ni el comportamiento registrado del lobo... explican este silencio desconocido.",
						"vietnamese": "Không. Cả bản năng của thợ săn lẫn tập tính đã ghi chép của sói... đều không thể giải thích sự im lặng này.",
						"thai": "ไม่สิ ทั้งสัญชาตญาณของนักล่าและพฤติกรรมของหมาป่าที่บันทึกไว้...ก็ยังไม่อาจอธิบายความเงียบงันที่ไม่รู้จักนี้ได้",
						"hindi": "नहीं। न शिकारी की प्रवृत्ति, न भेड़िये के दर्ज व्यवहार… इस अज्ञात चुप्पी की व्याख्या कर सकते हैं।"
					},
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "eira"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "이 길은… 지도에 없습니다. 돌아갈 수 없는 영역이에요.",
						"english": "This path... isn't on the map. A point of no return.",
						"japanese": "この道は…地図にない。引き返せない領域だ。",
						"chinese": "这条路…地图上没有。是无法返回的区域。",
						"french": "Ce chemin... n'est pas sur la carte. Une zone sans retour.",
						"spanish": "Este camino... no está en el mapa. Es una zona sin retorno.",
						"vietnamese": "Con đường này... không có trên bản đồ. Là vùng không thể quay lại.",
						"thai": "เส้นทางนี้...ไม่มีในแผนที่ เป็นพื้นที่ที่ไม่สามารถย้อนกลับได้",
						"hindi": "यह रास्ता… मानचित्र पर नहीं है। यह एक ऐसा क्षेत्र है जहाँ से वापस नहीं आया जा सकता।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "멈출 수 없어. 여기까지 왔는데.",
						"english": "Can't stop now. Not after coming this far.",
						"japanese": "止まれない。ここまで来たのに。",
						"chinese": "不能停。我们已经走到这里了。",
						"french": "Je ne peux pas m'arrêter. Pas après être venu si loin.",
						"spanish": "No puedo parar. Hemos llegado demasiado lejos.",
						"vietnamese": "Không thể dừng lại. Đã đi xa đến thế này rồi.",
						"thai": "หยุดไม่ได้แล้ว มาถึงขนาดนี้แล้ว",
						"hindi": "रुक नहीं सकता। इतनी दूर आ गए हैं।"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "…늑대가 우리를 이곳으로 유인한 걸까요?",
						"english": "...Did the wolf lure us here?",
						"japanese": "…狼が俺たちをここに誘い込んだのか？",
						"chinese": "…是狼把我们引到这里的吗？",
						"french": "...Le loup nous aurait-il attirés ici ?",
						"spanish": "...¿Nos habrá atraído el lobo hasta aquí?",
						"vietnamese": "...Sói đã dụ chúng ta đến đây sao?",
						"thai": "...หมาป่าล่อเรามาที่นี่หรือเปล่า?",
						"hindi": "…क्या भेड़िये ने हमें यहाँ फंसाया है?"
					}
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "사냥꾼… 너희도 결국… 같은 존재일 뿐.",
						"english": "Hunters... In the end, you're all just the same.",
						"japanese": "狩人よ… お前たちも結局… 同じ存在に過ぎない。",
						"chinese": "猎人… 你们终究… 也只是同样的生物。",
						"french": "Chasseurs... Au final... vous n'êtes que les mêmes.",
						"spanish": "Cazadores... Al final... no sois más que lo mismo.",
						"vietnamese": "Thợ săn... Rốt cuộc... các ngươi cũng chỉ là một loại.",
						"thai": "เหล่านักล่า... สุดท้ายแล้ว... พวกเจ้าก็ไม่ต่างกัน",
						"hindi": "शिकारियों... अंत में... तुम सब भी वैसे ही हो।"
					}
				},
				{
					"content": {
						"korean": "무슨 소리야! 넌 그저 마수일 뿐이야!",
						"english": "What nonsense! You're just a beast!",
						"japanese": "何を言っている！お前はただの魔獣だ！",
						"chinese": "胡说八道！你只是个魔兽而已！",
						"french": "Qu'est-ce que tu racontes ! Tu n'es qu'une bête démoniaque !",
						"spanish": "¡Qué tontería! ¡No eres más que una bestia demoníaca!",
						"vietnamese": "Ngươi nói gì vậy! Ngươi chỉ là một con ma thú!",
						"thai": "พูดอะไรน่ะ! เจ้าเป็นแค่สัตว์อสูร!",
						"hindi": "यह क्या बकवास है! तुम बस एक जानवर हो!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "쓰러진 거대한 그림자. 그러나 승리의 기쁨보다 더 큰 의문이 남았다.",
						"english": "The colossal shadow fell. Yet, a greater question remained than the joy of victory.",
						"japanese": "倒れた巨大な影。しかし、勝利の喜びよりも大きな疑問が残った。",
						"chinese": "巨大的身影倒下了。然而，比胜利的喜悦更深的疑问留了下来。",
						"french": "L'ombre colossale s'écroula. Pourtant, une question plus grande que la joie de la victoire subsistait.",
						"spanish": "La colosal sombra cayó. Sin embargo, una pregunta mayor que la alegría de la victoria permaneció.",
						"vietnamese": "Bóng đen khổng lồ gục ngã. Thế nhưng, một câu hỏi lớn hơn cả niềm vui chiến thắng vẫn còn đó.",
						"thai": "เงาร่างมหึมาล้มลง แต่คำถามที่ใหญ่หลวงกว่าความสุขแห่งชัยชนะยังคงอยู่",
						"hindi": "विशाल छाया गिर गई। फिर भी, जीत की खुशी से बड़ा एक सवाल बाकी रह गया।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "전설은… 과연 진실이었을까? 추격은 계속된다.",
						"english": "Were the legends... truly real? The pursuit continues.",
						"japanese": "伝説は… 果たして真実だったのか？追跡は続く。",
						"chinese": "传说… 究竟是真是假？追击仍在继续。",
						"french": "Les légendes... étaient-elles vraiment la vérité ? La traque continue.",
						"spanish": "¿Eran las leyendas... realmente ciertas? La persecución continúa.",
						"vietnamese": "Liệu những truyền thuyết... có thật không? Cuộc truy đuổi vẫn tiếp diễn.",
						"thai": "ตำนาน... เป็นจริงหรือเปล่า? การไล่ล่าจะดำเนินต่อไป",
						"hindi": "क्या किंवदंतियाँ... वाकई सच थीं? पीछा जारी है।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 설원 끝, 정체 모를 그림자가 탐험대를 기다리고 있었다.",
						"english": "At the edge of the vast snowfield, an unknown shadow awaited the expedition.",
						"japanese": "広大な雪原の果て、正体不明の影が探検隊を待ち受けていた。",
						"chinese": "巨大雪原的尽头，一个不明身份的影子正在等待着探险队。",
						"french": "Au bout de l'immense étendue enneigée, une ombre inconnue attendait l'expédition.",
						"spanish": "Al final de la vasta llanura nevada, una sombra desconocida esperaba a la expedición.",
						"vietnamese": "Cuối cánh đồng tuyết rộng lớn, một bóng đen không rõ danh tính đang chờ đợi đoàn thám hiểm.",
						"thai": "ที่ปลายสุดของทุ่งหิมะอันกว้างใหญ่ เงาลึกลับกำลังรอคอยคณะสำรวจอยู่",
						"hindi": "विशाल बर्फीले मैदान के अंत में, एक अज्ञात परछाई अभियान दल का इंतजार कर रही थी।"
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "…왔구나. 나의 영역으로.",
						"english": "...You've come. To my domain.",
						"japanese": "…来たな。私の領域へ。",
						"chinese": "…来了啊。我的领域。",
						"french": "...Vous êtes venus. Dans mon domaine.",
						"spanish": "...Han llegado. A mi dominio.",
						"vietnamese": "...Đã đến rồi. Vào lãnh địa của ta.",
						"thai": "...มาแล้วสินะ สู่แดนของข้า",
						"hindi": "…तुम आ गए। मेरे क्षेत्र में।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "종말의 늑대! 네놈을 사냥하러 왔다!",
						"english": "Wolf of the Apocalypse! I've come to hunt you!",
						"japanese": "終焉の狼！貴様を狩りに来た！",
						"chinese": "末日之狼！我来狩猎你了！",
						"french": "Loup de l'Apocalypse ! Je suis venu te chasser !",
						"spanish": "¡Lobo del Apocalipsis! ¡He venido a cazarte!",
						"vietnamese": "Sói Diệt Thế! Ta đến để săn ngươi!",
						"thai": "หมาป่าแห่งหายนะ! ข้ามาเพื่อล่าเจ้า!",
						"hindi": "प्रलय के भेड़िये! मैं तुम्हें शिकार करने आया हूँ!"
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "나를 사냥할 수 있다고 생각했나? 어리석은 인간들.",
						"english": "Did you think you could hunt me? Foolish humans.",
						"japanese": "私を狩れると思ったか？愚かな人間どもめ。",
						"chinese": "你们以为能狩猎我吗？愚蠢的人类。",
						"french": "Pensiez-vous pouvoir me chasser ? Humains stupides.",
						"spanish": "¿Creísteis que podíais cazarme? Humanos necios.",
						"vietnamese": "Ngươi nghĩ có thể săn được ta sao? Loài người ngu ngốc.",
						"thai": "คิดว่าจะล่าข้าได้งั้นรึ? มนุษย์โง่เขลา",
						"hindi": "क्या तुम्हें लगा कि तुम मेरा शिकार कर सकते हो? मूर्ख मनुष्य।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "크윽… 아직 끝나지 않았어!",
						"english": "Ugh... It's not over yet!",
						"japanese": "ぐっ… まだ終わってない！",
						"chinese": "呃… 还没结束！",
						"french": "Ugh... Ce n'est pas encore fini !",
						"spanish": "¡Argh... Esto no ha terminado todavía!",
						"vietnamese": "Khụ... Vẫn chưa kết thúc!",
						"thai": "อึก... ยังไม่จบแค่นี้!",
						"hindi": "उफ़... यह अभी खत्म नहीं हुआ है!"
					},
					"emotion": "angry",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"끝없이 휘몰아치는 설원, 얼어붙은 대지 위.",
			"전설 속 마수, \"종말의 늑대\"를 추적한다.",
			"그 거대한 발자국마다 — 섬뜩한 진실이 박혀 있었다.",
			"우리는 사냥꾼인가, 아니면… 미끼인가?"
		],
		"english": [
			"On the endless, swirling snowfield, above the frozen earth.",
			"We track the legendary beast, the \"Wolf of Ragnarok.\"",
			"In each colossal footprint — a chilling truth was embedded.",
			"Are we the hunters, or… the bait?"
		],
		"japanese": [
			"果てしなく吹き荒れる雪原、凍てついた大地の上で。",
			"伝説の魔獣、「終焉の狼」を追跡する。",
			"その巨大な足跡一つ一つに — 恐ろしい真実が刻まれていた。",
			"我々は狩人なのか、それとも… 餌なのか？"
		],
		"chinese": [
			"在无尽的暴风雪原，冰封大地上。",
			"追猎传说中的魔兽，“末日之狼”。",
			"每一个巨大的足迹中，都埋藏着一个骇人的真相。",
			"我们是猎人，还是……诱饵？"
		],
		"french": [
			"Sur le champ de neige infini et tourbillonnant, au-dessus de la terre gelée.",
			"Nous traquons la bête légendaire, le \"Loup du Crépuscule\".",
			"Dans chaque empreinte colossale — une vérité glaçante était incrustée.",
			"Sommes-nous les chasseurs, ou… l'appât ?"
		],
		"spanish": [
			"En el campo de nieve interminable y arremolinado, sobre la tierra congelada.",
			"Rastreamos a la bestia legendaria, el \"Lobo del Apocalipsis\".",
			"En cada huella colosal — una verdad escalofriante estaba incrustada.",
			"¿Somos los cazadores, o… el cebo?"
		],
		"vietnamese": [
			"Trên cánh đồng tuyết xoáy vô tận, trên mặt đất đóng băng.",
			"Chúng ta truy lùng con mãnh thú huyền thoại, \"Sói Diệt Thế\".",
			"Trong mỗi dấu chân khổng lồ — một sự thật rùng rợn đã được khắc sâu.",
			"Chúng ta là thợ săn, hay… con mồi?"
		],
		"thai": [
			"บนทุ่งหิมะที่พัดโหมกระหน่ำไม่สิ้นสุด เหนือแผ่นดินที่เยือกแข็ง",
			"เราออกล่าอสูรในตำนาน, \"หมาป่าแห่งวันสิ้นโลก\"",
			"ในทุกรอยเท้าอันมหึมา — ความจริงอันน่าขนลุกได้ถูกฝังไว้",
			"เราเป็นนักล่า, หรือ… เหยื่อกันแน่?"
		],
		"hindi": [
			"अनंत, घूमते हुए बर्फीले मैदान पर, जमी हुई धरती के ऊपर。",
			"हम पौराणिक जानवर, \"प्रलय के भेड़िये\" का पता लगाते हैं।",
			"प्रत्येक विशाल पदचिह्न में — एक भयानक सत्य छिपा हुआ था।",
			"क्या हम शिकारी हैं, या… चारा?"
		]
	}
} as const;
