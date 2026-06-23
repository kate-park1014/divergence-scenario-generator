export const scenario_forest_pellia_1_01 = {
	"scenario_id": "forest_pellia_1_01",
	"order": 1,
	"act": "intro",
	"theme": "forest",
	"actors": {
		"ela": {
			"id": "mon_24765cb2-6fc0-452e-8969-871a82349c70",
			"name": {
				"korean": "엘라",
				"english": "Ela",
				"japanese": "エラ",
				"chinese": "艾拉",
				"french": "Ela",
				"spanish": "Ela",
				"vietnamese": "Ela",
				"thai": "เอล่า",
				"hindi": "एला"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/55d3e9ee-c589-40ab-dfa4-a658bbddd400/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/cfacc842-115e-4175-a7fa-3111a468ed00/public"
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
					"content": {
						"korean": "숲은 깊었다. 고요함 속에 이상한 활력이 느껴졌다.",
						"english": "The forest was deep. A strange vitality pulsed in its quiet.",
						"japanese": "森は深かった。静寂の中に奇妙な活力が感じられた。",
						"chinese": "森林很深。在宁静中感受到一种奇怪的活力。",
						"french": "La forêt était profonde. Une étrange vitalité pulsait dans son calme.",
						"spanish": "El bosque era profundo. Una extraña vitalidad palpitaba en su quietud.",
						"vietnamese": "Rừng sâu thăm thẳm. Trong tĩnh lặng, một sức sống kỳ lạ cuộn trào.",
						"thai": "ป่าลึก สงบเงียบแต่กลับรู้สึกได้ถึงพลังชีวิตแปลกๆ",
						"hindi": "जंगल गहरा था। उसकी खामोशी में एक अजीब जीवन शक्ति धड़क रही थी।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "여기 뭔가 있어. 평범한 숲이 아니야.",
						"english": "Something's here. This isn't an ordinary forest.",
						"japanese": "何かいる。ここは普通の森じゃない。",
						"chinese": "这里有什么。这不是普通的森林。",
						"french": "Il y a quelque chose ici. Ce n'est pas une forêt ordinaire.",
						"spanish": "Aquí hay algo. Este no es un bosque normal.",
						"vietnamese": "Có gì đó ở đây. Đây không phải khu rừng bình thường.",
						"thai": "มีบางอย่างที่นี่ นี่ไม่ใช่ป่าธรรมดา",
						"hindi": "यहाँ कुछ है। यह कोई साधारण जंगल नहीं है।"
					},
					"type": "speech"
				},
				{
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "ela",
					"action": "enter"
				},
				{
					"emotion": "base",
					"speaker": "ela",
					"type": "speech",
					"content": {
						"korean": "…길을 잃었나요?",
						"english": "...Are you lost?",
						"japanese": "…道に迷ったのですか？",
						"chinese": "……你迷路了吗？",
						"french": "...Vous êtes perdu(e) ?",
						"spanish": "...¿Estás perdido(a)?",
						"vietnamese": "...Bạn lạc đường sao?",
						"thai": "...คุณหลงทางหรือเปล่า?",
						"hindi": "…क्या आप रास्ता भटक गए हैं?"
					}
				},
				{
					"content": {
						"korean": "당신은?",
						"english": "And you are?",
						"japanese": "あなたは？",
						"chinese": "你是？",
						"french": "Et vous ?",
						"spanish": "¿Y tú?",
						"vietnamese": "Cô là ai?",
						"thai": "แล้วคุณล่ะ?",
						"hindi": "आप कौन हैं?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "ela",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "엘라. 이 숲의 예언을 듣는 자.",
						"english": "Ella. One who hears the forest's prophecy.",
						"japanese": "エラ。この森の予言を聞く者。",
						"chinese": "艾拉。聆听这片森林预言之人。",
						"french": "Ella. Celle qui entend la prophétie de la forêt.",
						"spanish": "Ella. La que escucha la profecía del bosque.",
						"vietnamese": "Ella. Người nghe thấy lời tiên tri của khu rừng.",
						"thai": "เอลล่า ผู้ที่ได้ยินคำพยากรณ์ของป่านี้",
						"hindi": "एला। वह जो जंगल की भविष्यवाणी सुनती है।"
					}
				},
				{
					"content": {
						"korean": "곧 강력한 힘을 가진 존재가 나타날 거예요.",
						"english": "Soon, a being of great power will appear.",
						"japanese": "もうすぐ、強大な力を持つ存在が現れるでしょう。",
						"chinese": "很快，一个拥有强大力量的存在将会出现。",
						"french": "Bientôt, un être d'une grande puissance apparaîtra.",
						"spanish": "Pronto, un ser de gran poder aparecerá.",
						"vietnamese": "Chẳng mấy chốc, một thực thể mang sức mạnh to lớn sẽ xuất hiện.",
						"thai": "อีกไม่นาน ผู้มีพลังอันยิ่งใหญ่จะปรากฏตัว",
						"hindi": "जल्द ही, एक शक्तिशाली सत्ता प्रकट होगी।"
					},
					"type": "speech",
					"speaker": "ela",
					"emotion": "base"
				},
				{
					"speaker": "ela",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "그 존재는 빛나는 나뭇잎의 인도자… 하지만 조심해야 해요.",
						"english": "That being is the guide of the shining leaves... But you must be careful.",
						"japanese": "「その存在は輝く葉の導き手…でも、気を付けてください。」",
						"chinese": "「那个存在是闪耀之叶的引导者……但是，你必须小心。」",
						"french": "« Cet être est le guide des feuilles brillantes... Mais vous devez faire attention. »",
						"spanish": "« Esa entidad es la guía de las hojas resplandecientes... Pero debes tener cuidado. »",
						"vietnamese": "« Thực thể đó là người dẫn lối của những chiếc lá phát sáng... Nhưng bạn phải cẩn thận. »",
						"thai": "« สิ่งนั้นคือผู้นำทางของใบไม้ที่เปล่งประกาย... แต่คุณต้องระวังให้ดี »",
						"hindi": "« वह अस्तित्व चमकते पत्तों का मार्गदर्शक है... लेकिन आपको सावधान रहना होगा। »"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "빛나는 나뭇잎?",
						"english": "Shining leaves?",
						"japanese": "「輝く葉？」",
						"chinese": "「闪耀之叶？」",
						"french": "« Des feuilles brillantes ? »",
						"spanish": "« ¿Hojas resplandecientes? »",
						"vietnamese": "« Lá phát sáng? »",
						"thai": "« ใบไม้ที่เปล่งประกาย? »",
						"hindi": "« चमकते पत्ते? »"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"speaker": "ela",
					"content": {
						"korean": "그는 모든 것을 알고, 모든 것을 감춥니다.",
						"english": "He knows all, and hides all.",
						"japanese": "「彼はすべてを知り、すべてを隠しています。」",
						"chinese": "「他知晓一切，也隐藏一切。」",
						"french": "« Il sait tout, et cache tout. »",
						"spanish": "« Él lo sabe todo y lo oculta todo. »",
						"vietnamese": "« Anh ta biết tất cả, và giấu kín tất cả. »",
						"thai": "« เขารู้ทุกสิ่ง และซ่อนทุกสิ่ง »",
						"hindi": "« वह सब कुछ जानता है, और सब कुछ छिपाता है। »"
					},
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "길을 걷다 낡은 금속 조각을 발견했다. 이국적인 문양이 새겨져 있었다.",
						"english": "Walking the path, I found an old metal fragment. Exotic patterns were carved upon it.",
						"japanese": "「道を歩いていると、古びた金属の破片を見つけた。異国風の模様が刻まれていた。」",
						"chinese": "「走在路上，我发现了一块旧金属碎片。上面刻有异国情调的图案。」",
						"french": "« En marchant sur le chemin, j'ai trouvé un vieux fragment de métal. Des motifs exotiques y étaient gravés. »",
						"spanish": "« Caminando por el sendero, encontré un viejo fragmento de metal. Tenía grabados patrones exóticos. »",
						"vietnamese": "« Đi trên đường, tôi tìm thấy một mảnh kim loại cũ. Những hoa văn kỳ lạ được khắc trên đó. »",
						"thai": "« ระหว่างเดินไปตามทาง ฉันพบเศษโลหะเก่า ชิ้นส่วนนั้นมีลวดลายแปลกตาแกะสลักอยู่ »",
						"hindi": "« रास्ते में चलते हुए, मुझे धातु का एक पुराना टुकड़ा मिला। उस पर विदेशीR नक्काशी थी। »"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이건 뭐지? 숲과 어울리지 않아.",
						"english": "What is this? It doesn't suit the forest.",
						"japanese": "「これは何だ？森には似合わない。」",
						"chinese": "「这是什么？和森林格格不入。」",
						"french": "« Qu'est-ce que c'est ? Ça ne va pas avec la forêt. »",
						"spanish": "« ¿Qué es esto? No concuerda con el bosque. »",
						"vietnamese": "« Cái gì đây? Nó không hợp với khu rừng. »",
						"thai": "« นี่คืออะไร? มันไม่เข้ากับป่าเลย »",
						"hindi": "« यह क्या है? यह जंगल के अनुकूल नहीं है। »"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "ela",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						2
					],
					"action": "enter"
				},
				{
					"emotion": "base",
					"speaker": "ela",
					"type": "speech",
					"content": {
						"korean": "…그건 숲의 오래된 흔적. 예언과 함께 나타났던 것.",
						"english": "...That's an ancient trace of the forest. Something that appeared with the prophecy.",
						"japanese": "「…それは森の古い痕跡。予言と共に現れたものだ。」",
						"chinese": "「……那是森林的古老痕迹。与预言一同出现的。」",
						"french": "« ...C'est une ancienne trace de la forêt. Quelque chose qui est apparu avec la prophétie. »",
						"spanish": "« ...Es una antigua huella del bosque. Algo que apareció con la profecía. »",
						"vietnamese": "« ...Đó là một dấu vết cổ xưa của khu rừng. Một thứ xuất hiện cùng với lời tiên tri. »",
						"thai": "« ...นั่นคือร่องรอยเก่าแก่ของป่า สิ่งที่ปรากฏพร้อมกับคำพยากรณ์ »",
						"hindi": "« …वह जंगल का एक पुराना निशान है। कुछ ऐसा जो भविष्यवाणी के साथ प्रकट हुआ था। »"
					}
				},
				{
					"content": {
						"korean": "예언? 펠리아라는 사람 말이야?",
						"english": "Prophecy? You mean someone named Felia?",
						"japanese": "「予言？フェリアという人のことですか？」",
						"chinese": "「预言？你是说一个叫费莉娅的人？」",
						"french": "« Prophétie ? Tu parles de quelqu'un nommé Felia ? »",
						"spanish": "« ¿Profecía? ¿Te refieres a alguien llamado Felia? »",
						"vietnamese": "« Lời tiên tri? Anh đang nói về người tên Felia à? »",
						"thai": "« คำพยากรณ์? คุณหมายถึงคนชื่อเฟเลียหรือเปล่า? »",
						"hindi": "« भविष्यवाणी? क्या आपका मतलब फेलिया नाम के किसी व्यक्ति से है? »"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "ela",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "펠리아는… 빛나는 나뭇잎 아래에서 속삭였어요.",
						"english": "Felia... whispered beneath the shining leaves.",
						"japanese": "「フェリアは…輝く葉の下でささやいたわ。」",
						"chinese": "「费莉娅……在闪耀之叶下低语。」",
						"french": "« Felia... a chuchoté sous les feuilles brillantes. »",
						"spanish": "« Felia... susurró bajo las hojas resplandecientes. »",
						"vietnamese": "« Felia... thì thầm dưới những chiếc lá phát sáng. »",
						"thai": "« เฟเลีย... กระซิบภายใต้ใบไม้ที่เปล่งประกาย »",
						"hindi": "« फेलिया ने… चमकते पत्तों के नीचे फुसफुसाया। »"
					}
				},
				{
					"speaker": "ela",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "숲의 질서를 되찾을 자가 나타날 거라고. 하지만…",
						"english": "That one who would restore order to the forest would appear. But...",
						"japanese": "「森の秩序を取り戻す者が現れると。しかし…」",
						"chinese": "「说会有能恢复森林秩序的人出现。但是……」",
						"french": "« Que celui qui rétablirait l'ordre dans la forêt apparaîtrait. Mais... »",
						"spanish": "« Que aparecería quien restauraría el orden en el bosque. Pero... »",
						"vietnamese": "« Rằng sẽ có người xuất hiện để khôi phục trật tự của khu rừng. Nhưng... »",
						"thai": "« ว่าจะมีผู้ที่จะฟื้นฟูระเบียบของป่าปรากฏขึ้น แต่ว่า... »",
						"hindi": "« कि जंगल में व्यवस्था बहाल करने वाला प्रकट होगा। लेकिन… »"
					}
				},
				{
					"content": {
						"korean": "하지만 뭐?",
						"english": "But what?",
						"japanese": "「でも、何？」",
						"chinese": "「但是什么？」",
						"french": "« Mais quoi ? »",
						"spanish": "« ¿Pero qué? »",
						"vietnamese": "« Nhưng mà sao? »",
						"thai": "« แต่ว่าอะไร? »",
						"hindi": "« लेकिन क्या? »"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"speaker": "ela",
					"type": "speech",
					"content": {
						"korean": "그녀의 예언은 늘 모호하고, 이해하기 어려웠어요.",
						"english": "Her prophecies were always vague and hard to understand.",
						"japanese": "彼女の予言はいつも曖昧で、理解しがたかった。",
						"chinese": "她的预言总是模糊不清，难以理解。",
						"french": "Ses prophéties étaient toujours vagues et difficiles à comprendre.",
						"spanish": "Sus profecías siempre fueron vagas y difíciles de entender.",
						"vietnamese": "Những lời tiên tri của cô ấy luôn mơ hồ, khó hiểu.",
						"thai": "คำทำนายของเธอมักคลุมเครือและยากจะเข้าใจเสมอ",
						"hindi": "उसकी भविष्यवाणियाँ हमेशा अस्पष्ट और समझने में कठिन थीं।"
					}
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "ela",
					"type": "direction",
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "펠리아는… 특이한 사람이에요. 숲을 지키려 애썼죠.",
						"english": "Phelia is... a peculiar person. She strived to protect the forest.",
						"japanese": "フェリアは…変わった人です。森を守ろうと努めていました。",
						"chinese": "佩利亚是…一个奇怪的人。她努力守护着森林。",
						"french": "Phelia est... une personne particulière. Elle s'est efforcée de protéger la forêt.",
						"spanish": "Phelia es... una persona peculiar. Se esforzó por proteger el bosque.",
						"vietnamese": "Phelia là… một người đặc biệt. Cô ấy đã cố gắng bảo vệ rừng.",
						"thai": "เฟเลียเป็น...คนแปลกๆ เธอพยายามปกป้องป่า",
						"hindi": "फेलिया… एक अजीब इंसान है। उसने जंगल को बचाने की कोशिश की।"
					},
					"speaker": "ela",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "지키려 했다고?",
						"english": "Strived to protect it?",
						"japanese": "守ろうとしたって？",
						"chinese": "努力守护？",
						"french": "S'est efforcée de le protéger ?",
						"spanish": "¿Se esforzó por protegerlo?",
						"vietnamese": "Cố gắng bảo vệ ư?",
						"thai": "พยายามปกป้องเหรอ?",
						"hindi": "बचाने की कोशिश की?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "네. 숲의 힘이 균형을 잃을 때마다 나타나서 예언했어요.",
						"english": "Yes. She appeared and prophesied whenever the forest's power lost its balance.",
						"japanese": "ええ。森の力が均衡を失うたびに現れて、予言しました。",
						"chinese": "是的。每当森林的力量失去平衡，她就会出现并预言。",
						"french": "Oui. Elle apparaissait et prophétisait chaque fois que le pouvoir de la forêt perdait son équilibre.",
						"spanish": "Sí. Aparecía y profetizaba cada vez que el poder del bosque perdía su equilibrio.",
						"vietnamese": "Vâng. Mỗi khi sức mạnh của rừng mất cân bằng, cô ấy lại xuất hiện và tiên tri.",
						"thai": "ค่ะ เธอจะปรากฏตัวและทำนายทุกครั้งที่พลังของป่าเสียสมดุล",
						"hindi": "हाँ। वह हर बार प्रकट होती थी और भविष्यवाणी करती थी जब जंगल की शक्ति संतुलन खो देती थी।"
					},
					"speaker": "ela",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "하지만 그녀의 행동은 종종 이해하기 어려웠어요. 무언가를 숨기는 것처럼.",
						"english": "But her actions were often hard to understand. As if hiding something.",
						"japanese": "ですが、彼女の行動はしばしば理解しがたかった。何かを隠しているように。",
						"chinese": "但她的行为常常难以理解。仿佛隐藏着什么。",
						"french": "Mais ses actions étaient souvent difficiles à comprendre. Comme si elle cachait quelque chose.",
						"spanish": "Pero sus acciones a menudo eran difíciles de entender. Como si escondiera algo.",
						"vietnamese": "Nhưng hành động của cô ấy thường khó hiểu. Như thể đang che giấu điều gì đó.",
						"thai": "แต่การกระทำของเธอมักยากที่จะเข้าใจ ราวกับกำลังซ่อนบางสิ่งบางอย่าง",
						"hindi": "लेकिन उसके कार्य अक्सर समझना मुश्किल थे। जैसे कुछ छिपा रही हो।"
					},
					"type": "speech",
					"speaker": "ela",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "숨긴다고?",
						"english": "Hiding something?",
						"japanese": "隠してるって？",
						"chinese": "隐藏？",
						"french": "Cachait quelque chose ?",
						"spanish": "¿Escondiendo algo?",
						"vietnamese": "Che giấu ư?",
						"thai": "ซ่อนเหรอ?",
						"hindi": "छिपा रही है?"
					}
				},
				{
					"emotion": "base",
					"speaker": "ela",
					"content": {
						"korean": "네. 진실은… 예언 속에 감춰져 있어요.",
						"english": "Yes. The truth is... hidden within the prophecy.",
						"japanese": "ええ。真実は…予言の中に隠されています。",
						"chinese": "是的。真相…隐藏在预言之中。",
						"french": "Oui. La vérité est... cachée dans la prophétie.",
						"spanish": "Sí. La verdad está... oculta en la profecía.",
						"vietnamese": "Vâng. Sự thật… được che giấu trong lời tiên tri.",
						"thai": "ค่ะ ความจริง...ซ่อนอยู่ในคำทำนาย",
						"hindi": "हाँ। सच… भविष्यवाणी में छिपा है।"
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "ela"
				},
				{
					"type": "speech",
					"content": {
						"korean": "점점 더 숲의 기운이 강해지고 있어요. 곧 그 존재가…",
						"english": "The forest's aura is growing stronger. Soon, that being...",
						"japanese": "ますます森の気が強くなっています。もうすぐその存在が…",
						"chinese": "森林的气息越来越强了。很快，那个存在将…",
						"french": "L'aura de la forêt devient de plus en plus forte. Bientôt, cette entité...",
						"spanish": "El aura del bosque se está volviendo cada vez más fuerte. Pronto, esa entidad...",
						"vietnamese": "Khí tức của rừng đang ngày càng mạnh hơn. Sắp tới, sự tồn tại đó…",
						"thai": "พลังของป่ากำลังแรงขึ้นเรื่อยๆ อีกไม่นานสิ่งนั้นก็จะ...",
						"hindi": "जंगल का औरा और मजबूत हो रहा है। जल्द ही, वह अस्तित्व…"
					},
					"speaker": "ela",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "빛나는 나뭇잎의 인도자?",
						"english": "The Guide of the Shimmering Leaf?",
						"japanese": "輝く葉の導き手？",
						"chinese": "闪耀之叶的引导者？",
						"french": "Le Guide de la Feuille Scintillante ?",
						"spanish": "¿El Guía de la Hoja Resplandeciente?",
						"vietnamese": "Người dẫn lối của chiếc lá lung linh?",
						"thai": "ผู้นำทางแห่งใบไม้เรืองแสง?",
						"hindi": "चमकते पत्तों का मार्गदर्शक?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "그의 예언은 당신을 이끌겠지만, 그 끝은… 알 수 없어요.",
						"english": "His prophecy will guide you, but its end... is unknown.",
						"japanese": "彼の予言はあなたを導くでしょうが、その結末は…分かりません。",
						"chinese": "他的预言会指引你，但其结局…无人知晓。",
						"french": "Sa prophétie vous guidera, mais sa fin... est inconnue.",
						"spanish": "Su profecía te guiará, pero su final... es desconocido.",
						"vietnamese": "Lời tiên tri của anh ấy sẽ dẫn lối cho bạn, nhưng kết cục… không thể biết trước.",
						"thai": "คำทำนายของเขาจะนำทางคุณไป แต่จุดจบของมัน...ไม่อาจรู้ได้",
						"hindi": "उसकी भविष्यवाणी आपको रास्ता दिखाएगी, लेकिन उसका अंत… अज्ञात है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "ela"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "우린 숲의 이변을 막을 거야.",
						"english": "We will stop the forest's anomaly.",
						"japanese": "我々は森の異変を食い止める。",
						"chinese": "我们会阻止森林的异变。",
						"french": "Nous arrêterons l'anomalie de la forêt.",
						"spanish": "Detendremos la anomalía del bosque.",
						"vietnamese": "Chúng ta sẽ ngăn chặn dị biến của khu rừng.",
						"thai": "เราจะหยุดยั้งความผิดปกติของป่า",
						"hindi": "हम जंगल की इस विसंगति को रोकेंगे।"
					},
					"type": "speech"
				},
				{
					"speaker": "ela",
					"emotion": "sad",
					"content": {
						"korean": "…부디 당신의 길이 옳은 길이기를.",
						"english": "...May your path be the right one.",
						"japanese": "…どうか、あなたの道が正しき道であらんことを。",
						"chinese": "……愿你的道路是正确的。",
						"french": "...Puisse votre chemin être le bon.",
						"spanish": "...Que tu camino sea el correcto.",
						"vietnamese": "...Mong rằng con đường của ngươi là đúng đắn.",
						"thai": "...ขอให้เส้นทางของคุณเป็นทางที่ถูกต้อง",
						"hindi": "...कामना है कि आपका मार्ग सही हो।"
					},
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "숲의 가장 깊은 곳. 거대한 그림자가 앞을 가로막았다.",
						"english": "The deepest part of the forest. A colossal shadow blocked the way.",
						"japanese": "森の最深部。巨大な影が道を阻んだ。",
						"chinese": "森林的最深处。巨大的黑影挡住了去路。",
						"french": "Au plus profond de la forêt. Une ombre gigantesque barra le chemin.",
						"spanish": "La parte más profunda del bosque. Una sombra colosal bloqueó el camino.",
						"vietnamese": "Nơi sâu thẳm nhất của khu rừng. Một cái bóng khổng lồ chắn lối.",
						"thai": "ส่วนที่ลึกที่สุดของป่า เงาขนาดมหึมาขวางทางอยู่",
						"hindi": "जंगल का सबसे गहरा हिस्सा। एक विशाल छाया ने रास्ता रोक दिया।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "…왔구나. 예언의 아이들이여.",
						"english": "...You've come. Children of prophecy.",
						"japanese": "…来たな。預言の子らよ。",
						"chinese": "……你们来了。预言之子们。",
						"french": "...Vous êtes venus. Enfants de la prophétie.",
						"spanish": "...Han llegado. Hijos de la profecía.",
						"vietnamese": "...Các ngươi đã đến. Hỡi những đứa con của lời tiên tri.",
						"thai": "...มาแล้วสินะ เหล่าบุตรแห่งคำพยากรณ์",
						"hindi": "...तुम आ गए। भविष्यवाणी के बच्चे।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "네가 숲의 이변을 일으킨 장본인인가?",
						"english": "Are you the one who caused the forest's anomaly?",
						"japanese": "お前が森の異変を引き起こした張本人か？",
						"chinese": "你就是引起森林异变的幕后黑手吗？",
						"french": "Est-ce toi qui as causé l'anomalie de la forêt ?",
						"spanish": "¿Eres tú quien causó la anomalía del bosque?",
						"vietnamese": "Ngươi chính là kẻ gây ra dị biến của khu rừng sao?",
						"thai": "แกเป็นคนก่อความผิดปกติในป่าใช่ไหม",
						"hindi": "क्या तुम ही हो जिसने जंगल में यह विसंगति पैदा की है?"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "나는 그저… 예언을 따를 뿐.",
						"english": "I merely... follow the prophecy.",
						"japanese": "私はただ…預言に従うのみ。",
						"chinese": "我只是……追随预言。",
						"french": "Je ne fais que... suivre la prophétie.",
						"spanish": "Yo solo... sigo la profecía.",
						"vietnamese": "Ta chỉ là... tuân theo lời tiên tri.",
						"thai": "ข้าเพียงแค่... ทำตามคำพยากรณ์",
						"hindi": "मैं बस... भविष्यवाणी का पालन कर रहा हूँ।"
					},
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "너희의 승리가 곧 나의 승리니.",
						"english": "Your victory is my victory.",
						"japanese": "お前たちの勝利が、すなわち私の勝利。",
						"chinese": "你们的胜利便是我的胜利。",
						"french": "Votre victoire est ma victoire.",
						"spanish": "Vuestra victoria es mi victoria.",
						"vietnamese": "Chiến thắng của các ngươi cũng chính là chiến thắng của ta.",
						"thai": "ชัยชนะของพวกเจ้า คือชัยชนะของข้า",
						"hindi": "तुम्हारी जीत ही मेरी जीत है।"
					},
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "어둠의 힘이 탐험대를 집어삼켰다. 아직은 역부족이었다.",
						"english": "The power of darkness swallowed the expedition. It wasn't enough yet.",
						"japanese": "闇の力が探検隊を飲み込んだ。まだ力不足だった。",
						"chinese": "黑暗的力量吞噬了探险队。实力尚不足。",
						"french": "Le pouvoir des ténèbres engloutit l'expédition. Ce n'était pas encore suffisant.",
						"spanish": "El poder de la oscuridad engulló a la expedición. Todavía no era suficiente.",
						"vietnamese": "Sức mạnh bóng tối nuốt chửng đoàn thám hiểm. Vẫn còn quá yếu.",
						"thai": "พลังแห่งความมืดกลืนกินคณะสำรวจ ยังไม่เพียงพอ",
						"hindi": "अंधेरे की शक्ति ने अभियान दल को निगल लिया। अभी यह काफी नहीं था।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "하찮은 저항이로군. 아직 예언의 끝은 멀었다.",
						"english": "A pathetic resistance. The end of the prophecy is still far off.",
						"japanese": "愚かな抵抗だ。予言の終わりはまだ遠い。",
						"chinese": "真是微不足道的抵抗。预言的终结还远着呢。",
						"french": "Une résistance pathétique. La fin de la prophétie est encore lointaine.",
						"spanish": "Una resistencia patética. El final de la profecía aún está lejos.",
						"vietnamese": "Một sự kháng cự vô ích. Kết thúc của lời tiên tri còn xa lắm.",
						"thai": "การต่อต้านที่ไร้ค่า จุดจบของคำพยากรณ์ยังอีกยาวไกล",
						"hindi": "एक तुच्छ प्रतिरोध। भविष्यवाणी का अंत अभी बहुत दूर है।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…끝까지 갈 거야. 진실을 밝힐 때까지.",
						"english": "…I'll go to the very end. Until the truth is revealed.",
						"japanese": "…最後まで行く。真実が明らかになるまで。",
						"chinese": "…我会走到最后。直到真相大白。",
						"french": "…J'irai jusqu'au bout. Jusqu'à ce que la vérité soit révélée.",
						"spanish": "…Llegaré hasta el final. Hasta que se revele la verdad.",
						"vietnamese": "…Ta sẽ đi đến cùng. Cho đến khi sự thật được hé lộ.",
						"thai": "…ข้าจะไปให้สุดทาง จนกว่าความจริงจะถูกเปิดเผย",
						"hindi": "…मैं अंत तक जाऊंगा। जब तक सच सामने नहीं आ जाता।"
					},
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "정체 모를 존재는 쓰러졌다. 하지만 숲의 기운은 여전히 혼란스러웠다.",
						"english": "The mysterious entity fell. But the forest's aura remained chaotic.",
						"japanese": "正体不明の存在は倒れた。しかし、森の気配は依然として混乱していた。",
						"chinese": "神秘的存在倒下了。然而，森林的气息依然混乱。",
						"french": "L'entité mystérieuse est tombée. Mais l'aura de la forêt restait chaotique.",
						"spanish": "La entidad desconocida cayó. Pero la energía del bosque seguía siendo caótica.",
						"vietnamese": "Thực thể bí ẩn đã ngã xuống. Nhưng khí tức của khu rừng vẫn còn hỗn loạn.",
						"thai": "สิ่งลึกลับนั้นล้มลงแล้ว แต่พลังของป่ายังคงปั่นป่วน",
						"hindi": "अज्ञात सत्ता गिर गई। लेकिन जंगल की ऊर्जा अभी भी अराजक थी।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…결국… 이렇게 되는군. 모든 것은 예정된 길.",
						"english": "...So this is how it ends. All is a predetermined path.",
						"japanese": "…結局…こうなるのか。全ては定められた道。",
						"chinese": "……终究……还是这样了。一切都已注定。",
						"french": "...Ainsi... cela se termine. Tout est un chemin prédestiné.",
						"spanish": "...Así es como termina. Todo es un camino predestinado.",
						"vietnamese": "...Cuối cùng... cũng thành ra thế này. Mọi thứ đều là con đường đã định.",
						"thai": "...ในที่สุด... ก็เป็นแบบนี้ ทุกสิ่งคือเส้นทางที่ถูกกำหนดไว้แล้ว",
						"hindi": "...आखिरकार... ऐसा ही होना था। सब कुछ एक पूर्वनिर्धारित मार्ग है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "무슨 소리야?",
						"english": "What do you mean?",
						"japanese": "何を言っているんだ？",
						"chinese": "你在说什么？",
						"french": "Que voulez-vous dire ?",
						"spanish": "¿Qué quieres decir?",
						"vietnamese": "Ngươi nói gì vậy?",
						"thai": "หมายความว่าอะไร",
						"hindi": "तुम्हारा क्या मतलब है?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"emotion": "sad",
					"content": {
						"korean": "너희는 그저… 나의 길을 열었을 뿐. 허무한 승리로구나.",
						"english": "You merely… opened my path. A hollow victory.",
						"japanese": "お前たちはただ…私の道を開いただけだ。虚しい勝利だな。",
						"chinese": "你们不过是…为我开辟了道路。一场空虚的胜利。",
						"french": "Vous n'avez fait que… m'ouvrir le chemin. Une victoire vaine.",
						"spanish": "Solo… abristeis mi camino. Una victoria vacía.",
						"vietnamese": "Các ngươi chỉ là… đã mở đường cho ta. Một chiến thắng vô nghĩa.",
						"thai": "พวกเจ้าแค่… เปิดทางให้ข้าเท่านั้น ชัยชนะที่ไร้ความหมาย",
						"hindi": "तुम सबने बस… मेरा रास्ता खोला है। एक खोखली जीत।"
					},
					"type": "speech"
				},
				{
					"speaker": "ela",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						2
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "…펠리아의 예언은… 진실이 아니었어.",
						"english": "…Felria's prophecy… wasn't true.",
						"japanese": "…フェリアの予言は…真実ではなかった。",
						"chinese": "…费利亚的预言…并非真实。",
						"french": "…La prophétie de Felria… n'était pas vraie.",
						"spanish": "…La profecía de Felria… no era verdad.",
						"vietnamese": "…Lời tiên tri của Felria… không phải là sự thật.",
						"thai": "…คำพยากรณ์ของเฟลเรีย… ไม่ใช่ความจริง",
						"hindi": "…फेलिया की भविष्यवाणी… सच नहीं थी।"
					},
					"type": "speech",
					"speaker": "ela",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "숲은 잠시 침묵했다. 그러나 감춰진 진실은 이제 시작이었다.",
						"english": "The forest fell silent for a moment. But the hidden truth was just beginning.",
						"japanese": "森は一時沈黙した。しかし、隠された真実は今始まったばかりだった。",
						"chinese": "森林暂时归于寂静。然而，被掩盖的真相才刚刚开始。",
						"french": "La forêt se tut un instant. Mais la vérité cachée ne faisait que commencer.",
						"spanish": "El bosque enmudeció un momento. Pero la verdad oculta acababa de empezar.",
						"vietnamese": "Rừng tạm thời im lặng. Nhưng sự thật bị che giấu chỉ mới bắt đầu.",
						"thai": "ป่าเงียบงันชั่วขณะ แต่ความจริงที่ซ่อนเร้นเพิ่งจะเริ่มต้นขึ้น",
						"hindi": "जंगल कुछ पल के लिए शांत हो गया। लेकिन छिपा हुआ सच तो अब शुरू हुआ था।"
					},
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"울창한 숲, 모든 것이 살아 숨 쉬는 곳.",
			"하지만 어딘가 뒤틀려 있었다. 기이한 현상들이 감돌기 시작했다.",
			"우리는 진실을 찾아 헤맸다. 그곳에서 만난 건, 빛나는 예언자 펠리아.",
			"그녀의 속삭임은 길잡이인가, 아니면… 덫인가."
		],
		"english": [
			"A lush forest, where everything breathes.",
			"But something was amiss. Strange phenomena began to stir.",
			"We sought the truth. There, we met Phelia, the luminous prophet.",
			"Her whispers: a guide, or... a trap?"
		],
		"japanese": [
			"鬱蒼とした森、すべてが息づく場所。",
			"しかし、どこか歪んでいた。奇妙な現象が起こり始めた。",
			"我々は真実を求めて彷徨った。そこで出会ったのは、輝く預言者フェリア。",
			"彼女の囁きは道標か、それとも…罠か。"
		],
		"chinese": [
			"茂密的森林，万物生机勃勃。",
			"但某个地方扭曲了。奇异的现象开始弥漫。",
			"我们四处寻求真相。在那里，我们遇到了闪耀的预言者费莉娅。",
			"她的低语是指引，还是……陷阱。"
		],
		"french": [
			"Une forêt luxuriante, où tout prend vie.",
			"Mais quelque chose n'allait pas. D'étranges phénomènes commençaient à se manifester.",
			"Nous avons cherché la vérité. Là, nous avons rencontré Phelia, la prophétesse lumineuse.",
			"Ses murmures : un guide, ou... un piège ?"
		],
		"spanish": [
			"Un bosque frondoso, donde todo cobra vida.",
			"Pero algo andaba mal. Fenómenos extraños comenzaron a manifestarse.",
			"Buscamos la verdad. Allí, conocimos a Phelia, la profetisa luminosa.",
			"Susurros: ¿una guía o... una trampa?"
		],
		"vietnamese": [
			"Rừng rậm tươi tốt, nơi vạn vật sinh sôi.",
			"Nhưng có gì đó không ổn. Những hiện tượng kỳ lạ bắt đầu xuất hiện.",
			"Chúng tôi tìm kiếm sự thật. Ở đó, chúng tôi gặp Phelia, nhà tiên tri rạng rỡ.",
			"Lời thì thầm của cô ấy: là dẫn lối, hay... một cái bẫy?"
		],
		"thai": [
			"ป่าอันอุดมสมบูรณ์ ที่ซึ่งทุกสิ่งมีชีวิต",
			"แต่มีบางอย่างบิดเบี้ยว ปรากฏการณ์แปลกประหลาดเริ่มก่อตัวขึ้น",
			"เราออกตามหาความจริง ที่นั่น เราได้พบกับเฟเลีย ผู้พยากรณ์ผู้เปล่งประกาย",
			"เสียงกระซิบของนาง: คือผู้นำทาง หรือ...กับดัก?"
		],
		"hindi": [
			"एक घना जंगल, जहाँ सब कुछ साँस लेता है।",
			"पर कहीं कुछ गड़बड़ था। अजीब घटनाएँ घटने लगी थीं।",
			"हमने सत्य की तलाश की। वहाँ, हम मिले, चमकती हुई भविष्यवक्ता फेलिया से।",
			"उसकी फुसफुसाहट: मार्गदर्शक है, या… एक जाल?"
		]
	}
} as const;
