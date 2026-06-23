export const scenario_snowy_anya_96_04 = {
	"scenario_id": "snowy_anya_96_04",
	"order": 4,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"hild": {
			"id": "mon_6f20c96a-bf07-4aae-b37c-da898a8336e8",
			"name": {
				"korean": "힐드",
				"english": "Hild",
				"japanese": "ヒルド",
				"chinese": "希尔德",
				"french": "Hild",
				"spanish": "Hild",
				"vietnamese": "Hild",
				"thai": "ฮิลด์",
				"hindi": "हिल्ड"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/722a86fd-2903-4688-3f04-db8241ed0e00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/af3d96ba-e571-4132-fede-cd415bd15c00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"설원, 그 끝없는 망각의 땅.",
			"이곳의 평화는 거짓 위에 세워졌다.",
			"과거의 비극은 법으로 봉인되고,",
			"진실을 찾는 자는 대가를 치른다.",
			"차가운 망각 속에서, 비극의 메아리가 들려온다."
		],
		"english": [
			"Snowfield, the land of endless oblivion.",
			"Peace here was built upon a lie.",
			"Past tragedies are sealed by law,",
			"and those who seek the truth pay the price.",
			"In cold oblivion, echoes of tragedy resound."
		],
		"japanese": [
			"雪原、その果てなき忘却の地。",
			"ここでの平和は嘘の上に築かれた。",
			"過去の悲劇は法によって封印され、",
			"真実を求める者は代償を払う。",
			"冷たい忘却の中で、悲劇の木霊が響く。"
		],
		"chinese": [
			"雪原，那无尽遗忘之地。",
			"这里的和平建立在谎言之上。",
			"过去的悲剧被法律封印，",
			"寻求真相之人将付出代价。",
			"在冰冷的遗忘中，悲剧的回声响起。"
		],
		"french": [
			"Le champ de neige, terre d'oubli sans fin.",
			"La paix ici fut bâtie sur un mensonge.",
			"Les tragédies passées sont scellées par la loi,",
			"et ceux qui cherchent la vérité en paient le prix.",
			"Dans le froid de l'oubli, les échos de la tragédie résonnent."
		],
		"spanish": [
			"El campo de nieve, tierra de olvido sin fin.",
			"La paz aquí fue construida sobre una mentira.",
			"Las tragedias pasadas están selladas por la ley,",
			"y aquellos que buscan la verdad pagan el precio.",
			"En el frío olvido, los ecos de la tragedia resuenan."
		],
		"vietnamese": [
			"Cánh đồng tuyết, vùng đất lãng quên bất tận.",
			"Hòa bình nơi đây được xây dựng trên dối trá.",
			"Những bi kịch trong quá khứ bị pháp luật phong ấn,",
			"và những ai tìm kiếm sự thật sẽ phải trả giá.",
			"Trong quên lãng lạnh giá, tiếng vang bi kịch vọng lại."
		],
		"thai": [
			"ทุ่งหิมะ ดินแดนแห่งการหลงลืมอันไร้สิ้นสุด",
			"สันติสุขที่นี่สร้างขึ้นจากคำโกหก",
			"โศกนาฏกรรมในอดีตถูกผนึกไว้ด้วยกฎหมาย",
			"และผู้ที่แสวงหาความจริงต้องชดใช้",
			"ในความหลงลืมอันหนาวเย็น เสียงสะท้อนของโศกนาฏกรรมดังก้อง"
		],
		"hindi": [
			"बर्फीला मैदान, अंतहीन विस्मृति की भूमि।",
			"यहां की शांति झूठ पर टिकी थी।",
			"अतीत की त्रासदियां कानून से सील हैं,",
			"और सत्य खोजने वाले कीमत चुकाते हैं।",
			"ठंडी विस्मृति में, त्रासदी की गूँज सुनाई देती है।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "오래된 기록 보관소. 힐드는 먼지 쌓인 두루마리 속에 파묻혀 있었다.",
						"english": "An old archive. Hilde was buried amidst dusty scrolls.",
						"japanese": "古い記録保管所。ヒルデは埃まみれの巻物に埋もれていた。",
						"chinese": "古老的档案馆。希尔德被埋在尘封的卷轴中。",
						"french": "D'anciennes archives. Hilde était ensevelie au milieu de parchemins poussiéreux.",
						"spanish": "Un antiguo archivo. Hilde estaba sepultada entre pergaminos polvorientos.",
						"vietnamese": "Một kho lưu trữ cũ. Hilde chôn vùi giữa những cuộn giấy bụi bặm.",
						"thai": "หอจดหมายเหตุเก่า ฮิลเด้ถูกฝังอยู่ท่ามกลางม้วนกระดาษที่เต็มไปด้วยฝุ่น",
						"hindi": "एक पुराना अभिलेखागार। हिल्डे धूल भरे ताड़पत्रों के बीच दबी हुई थी।"
					},
					"emotion": "base"
				},
				{
					"action": "enter",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"speaker": "hild",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…찾아왔군요. 망각의 그림자를 좇는 자들이.",
						"english": "...You've come. Those who pursue the shadow of oblivion.",
						"japanese": "…来ましたね。忘却の影を追う者たちが。",
						"chinese": "……你们来了。那些追逐遗忘之影的人。",
						"french": "...Vous êtes venus. Ceux qui poursuivent l'ombre de l'oubli.",
						"spanish": "...Habéis venido. Aquellos que persiguen la sombra del olvido.",
						"vietnamese": "...Các ngươi đã đến. Những kẻ theo đuổi bóng tối của lãng quên.",
						"thai": "...พวกคุณมาแล้วสินะ ผู้ที่ตามล่าเงาแห่งการหลงลืม",
						"hindi": "...तुम आ गए। विस्मृति की छाया का पीछा करने वाले।"
					},
					"speaker": "hild",
					"type": "speech"
				},
				{
					"content": {
						"korean": "뭘 찾고 있지?",
						"english": "What are you looking for?",
						"japanese": "何を探している？",
						"chinese": "你在找什么？",
						"french": "Que cherchez-vous ?",
						"spanish": "¿Qué buscáis?",
						"vietnamese": "Ngươi đang tìm gì?",
						"thai": "คุณกำลังมองหาอะไรอยู่?",
						"hindi": "क्या ढूंढ रहे हो?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "hild",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "'차가운 망각의 법'… 그 뒤에 숨겨진 진실을요.",
						"english": "'The Law of Cold Oblivion'... and the truth hidden behind it.",
						"japanese": "「冷たい忘却の法」…その裏に隠された真実を。",
						"chinese": "“冰冷遗忘之法”……以及其背后隐藏的真相。",
						"french": "« La Loi de l'Oubli Froid »... et la vérité qui se cache derrière.",
						"spanish": "« La Ley del Olvido Frío »... y la verdad oculta tras ella.",
						"vietnamese": "'Luật Quên Lãng Lạnh Giá'... và sự thật ẩn giấu đằng sau nó.",
						"thai": "'กฎแห่งการหลงลืมอันหนาวเย็น'...และเบื้องหลังความจริงที่ซ่อนอยู่",
						"hindi": "'शीत विस्मृति का कानून'... उसके पीछे छिपी सच्चाई को।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "법? 그게 왜?",
						"english": "The Law? Why that?",
						"japanese": "法？それがなぜ？",
						"chinese": "法律？为什么是它？",
						"french": "La loi ? Pourquoi ça ?",
						"spanish": "¿La ley? ¿Por qué eso?",
						"vietnamese": "Luật? Sao lại là nó?",
						"thai": "กฎหมาย? ทำไมถึงเป็นแบบนั้น?",
						"hindi": "कानून? वो क्यों?"
					}
				},
				{
					"speaker": "hild",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이곳은 많은 것을 잊으려 해요. 너무나 중요한 것을.",
						"english": "This place tries to forget many things. Things too important.",
						"japanese": "ここは多くを忘れようとしている。あまりにも大切なことを。",
						"chinese": "这里试图遗忘许多事物。那些非常重要的事物。",
						"french": "Ce lieu tente d'oublier beaucoup de choses. Des choses bien trop importantes.",
						"spanish": "Este lugar intenta olvidar muchas cosas. Cosas demasiado importantes.",
						"vietnamese": "Nơi này đang cố quên đi nhiều thứ. Những thứ quá đỗi quan trọng.",
						"thai": "ที่นี่พยายามจะลืมหลายสิ่ง สิ่งที่สำคัญเกินไป",
						"hindi": "यह जगह बहुत कुछ भूलना चाहती है। ऐसी चीजें जो बहुत महत्वपूर्ण हैं।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "hild",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"action": "enter"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "오래된 전설 중에, 사라진 바이킹 정착민 이야기가 있어요.",
						"english": "Among old legends, there's a tale of lost Viking settlers.",
						"japanese": "古い伝説の中に、消えたヴァイキングの入植者の話がある。",
						"chinese": "在古老的传说中，有一个关于失踪维京定居者的故事。",
						"french": "Parmi les anciennes légendes, il y a une histoire de colons vikings disparus.",
						"spanish": "Entre las viejas leyendas, hay un cuento de colonos vikingos perdidos.",
						"vietnamese": "Trong số những truyền thuyết cổ xưa, có một câu chuyện về những người Viking định cư đã mất tích.",
						"thai": "ในตำนานเก่าแก่ มีเรื่องราวของชาวไวกิ้งที่หายสาบสูญไป",
						"hindi": "पुरानी किंवदंतियों में, खोए हुए वाइकिंग उपनिवेशवादियों की एक कहानी है।"
					},
					"type": "speech",
					"speaker": "hild"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "바이킹? 이 설원에?",
						"english": "Vikings? In this snowfield?",
						"japanese": "ヴァイキング？ この雪原に？",
						"chinese": "维京人？在这片雪原上？",
						"french": "Des Vikings ? Dans ce champ de neige ?",
						"spanish": "¡¿Vikingos?! ¿En este campo de nieve?",
						"vietnamese": "Người Viking? Ở cánh đồng tuyết này ư?",
						"thai": "ไวกิ้ง? ในทุ่งหิมะนี้?",
						"hindi": "वाइकिंग? इस बर्फ के मैदान में?"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그들의 기록은 마치 지워진 듯 희미하지만… 한 가지 공통점이 있죠.",
						"english": "Their records are faint, as if erased... but they share one commonality.",
						"japanese": "彼らの記録は、まるで消されたかのように曖昧だが… 一つの共通点がある。",
						"chinese": "他们的记录模糊不清，仿佛被抹去… 但有一个共同点。",
						"french": "Leurs registres sont faibles, comme effacés... mais ils partagent une chose en commun.",
						"spanish": "Sus registros son débiles, como borrados... pero comparten una cosa en común.",
						"vietnamese": "Hồ sơ của họ mờ nhạt, như thể đã bị xóa sổ... nhưng chúng có một điểm chung.",
						"thai": "บันทึกของพวกเขาเลือนรางราวกับถูกลบ... แต่มีสิ่งหนึ่งที่เหมือนกัน",
						"hindi": "उनके रिकॉर्ड धुंधले हैं, जैसे मिटा दिए गए हों... लेकिन उनमें एक बात समान है।"
					},
					"type": "speech",
					"speaker": "hild"
				},
				{
					"content": {
						"korean": "혹한 속에 사라진 아이들에 대한 단편적인 언급들이요.",
						"english": "Fragmentary mentions of children who disappeared in the bitter cold.",
						"japanese": "酷寒の中で姿を消した子供たちに関する断片的な言及だ。",
						"chinese": "关于在严寒中失踪的儿童的零星提及。",
						"french": "Des mentions fragmentaires d'enfants disparus dans le froid mordant.",
						"spanish": "Menciones fragmentadas de niños que desaparecieron en el frío intenso.",
						"vietnamese": "Những đoạn đề cập rời rạc về những đứa trẻ biến mất trong giá rét khắc nghiệt.",
						"thai": "มีการกล่าวถึงเด็กๆ ที่หายไปในความหนาวเหน็บอย่างกระจัดกระจาย",
						"hindi": "कड़ाके की ठंड में गायब हुए बच्चों का अधूरा उल्लेख।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "hild"
				},
				{
					"content": {
						"korean": "...무슨 의미지?",
						"english": "...What does that mean?",
						"japanese": "…どういう意味だ？",
						"chinese": "…那是什么意思？",
						"french": "...Qu'est-ce que ça veut dire ?",
						"spanish": "¿...Qué significa eso?",
						"vietnamese": "...Nghĩa là sao?",
						"thai": "...หมายความว่าไง?",
						"hindi": "...इसका क्या मतलब है?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "이 법은 단순한 망각이 아니에요. 무언가를 숨기려는 거죠.",
						"english": "This isn't simple oblivion. Someone is trying to hide something.",
						"japanese": "これは単なる忘却ではない。何かを隠そうとしているのだ。",
						"chinese": "这不是简单的遗忘。有人试图隐藏什么。",
						"french": "Ce n'est pas une simple amnésie. On essaie de cacher quelque chose.",
						"spanish": "Esto no es un simple olvido. Alguien intenta ocultar algo.",
						"vietnamese": "Đây không phải là sự lãng quên đơn thuần. Ai đó đang cố che giấu điều gì đó.",
						"thai": "นี่ไม่ใช่แค่การหลงลืม มีบางคนกำลังพยายามซ่อนบางสิ่ง",
						"hindi": "यह सिर्फ विस्मृति नहीं है। कोई कुछ छिपाने की कोशिश कर रहा है।"
					},
					"emotion": "angry",
					"speaker": "hild",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						2,
						3
					],
					"speaker": "hild",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "이 전설들이… '길을 인도하는 빛'과 연관되어 있을지도 몰라요.",
						"english": "These legends... might be connected to the 'Light that Guides the Way'.",
						"japanese": "これらの伝説は…『道を導く光』と関連があるのかもしれない。",
						"chinese": "这些传说…可能与‘指引之路的光’有关。",
						"french": "Ces légendes... pourraient être liées à la 'Lumière qui guide le chemin'.",
						"spanish": "Estas leyendas... podrían estar relacionadas con la 'Luz que guía el camino'.",
						"vietnamese": "Những truyền thuyết này... có thể liên quan đến 'Ánh sáng dẫn lối'.",
						"thai": "ตำนานเหล่านี้... อาจเกี่ยวข้องกับ 'แสงนำทาง' ก็เป็นได้",
						"hindi": "ये किंवदंतियाँ... 'मार्गदर्शक प्रकाश' से जुड़ी हो सकती हैं।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "hild"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "빛이? 왜?",
						"english": "The Light? Why?",
						"japanese": "光が？ なぜ？",
						"chinese": "光？为什么？",
						"french": "La Lumière ? Pourquoi ?",
						"spanish": "¿La Luz? ¿Por qué?",
						"vietnamese": "Ánh sáng ư? Tại sao?",
						"thai": "แสงน่ะเหรอ? ทำไมล่ะ?",
						"hindi": "प्रकाश? क्यों?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "hild",
					"type": "speech",
					"content": {
						"korean": "사라진 아이들… 그들을 찾는 듯한 자장가가 있어요.",
						"english": "Lost children... there's a lullaby that seems to be looking for them.",
						"japanese": "消えた子供たち… 彼らを探すような子守唄がある。",
						"chinese": "失踪的孩子们… 有一首摇篮曲似乎在寻找他们。",
						"french": "Les enfants disparus... il y a une berceuse qui semble les chercher.",
						"spanish": "Niños perdidos... hay una nana que parece buscarlos.",
						"vietnamese": "Những đứa trẻ mất tích... có một bài hát ru dường như đang tìm kiếm chúng.",
						"thai": "เด็กๆ ที่หายไป... มีเพลงกล่อมเด็กที่เหมือนจะตามหาพวกเขาอยู่",
						"hindi": "खोए हुए बच्चे... एक लोरी है जो उन्हें ढूंढ रही है।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "…차가운 바람 불어와, 아이는 어디에…",
						"english": "…A cold wind blows, where is the child…",
						"japanese": "…冷たい風が吹き、子供はどこへ…",
						"chinese": "…寒风吹来，孩子在哪里…",
						"french": "…Un vent froid souffle, où est l'enfant…",
						"spanish": "…Sopla un viento frío, ¿dónde está el niño…",
						"vietnamese": "…Gió lạnh thổi qua, đứa trẻ ở đâu rồi…",
						"thai": "…ลมหนาวพัดมา เด็กน้อยอยู่ที่ไหน…",
						"hindi": "…ठंडी हवा चल रही है, बच्चा कहाँ है…"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "hild"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…설마.",
						"english": "…No way.",
						"japanese": "…まさか。",
						"chinese": "…不会吧。",
						"french": "…Impossible.",
						"spanish": "…No puede ser.",
						"vietnamese": "…Không đời nào.",
						"thai": "…ไม่นะ",
						"hindi": "…नहीं हो सकता।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이 모든 침묵 뒤에는… 슬픈 비명이 숨겨져 있어요.",
						"english": "Behind all this silence… a sad scream is hidden.",
						"japanese": "この全ての沈黙の裏には… 悲しい悲鳴が隠されています。",
						"chinese": "在这所有寂静的背后… 隐藏着一声悲伤的尖叫。",
						"french": "Derrière tout ce silence… un cri triste est caché.",
						"spanish": "Detrás de todo este silencio… se esconde un grito triste.",
						"vietnamese": "Đằng sau sự im lặng này… là một tiếng hét đau buồn ẩn giấu.",
						"thai": "เบื้องหลังความเงียบทั้งหมดนี้… มีเสียงกรีดร้องที่เศร้าโศกซ่อนอยู่",
						"hindi": "इस सारी खामोशी के पीछे… एक दर्दनाक चीख छिपी है।"
					},
					"type": "speech",
					"speaker": "hild"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "hild",
					"type": "direction",
					"spot": [
						2,
						3
					]
				},
				{
					"speaker": "hild",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "법은 망각을 강요하지만… 그건 사실 억압이에요.",
						"english": "The law forces oblivion… but that is actually oppression.",
						"japanese": "法は忘却を強要するが… それは実は抑圧だ。",
						"chinese": "法律强制遗忘… 但那实际上是压迫。",
						"french": "La loi impose l'oubli… mais c'est en fait une oppression.",
						"spanish": "La ley fuerza el olvido… pero eso es en realidad opresión.",
						"vietnamese": "Luật pháp buộc phải lãng quên… nhưng đó thực ra là sự áp bức.",
						"thai": "กฎหมายบังคับให้ลืมเลือน… แต่จริงๆ แล้วมันคือการกดขี่",
						"hindi": "कानून विस्मृति को मजबूर करता है… लेकिन वह असल में उत्पीड़न है।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "뭘 억압한다는 거지?",
						"english": "Oppressing what?",
						"japanese": "何を抑圧するというの？",
						"chinese": "压迫什么？",
						"french": "Opprimer quoi ?",
						"spanish": "¿Oprimiendo qué?",
						"vietnamese": "Áp bức cái gì?",
						"thai": "กดขี่อะไร?",
						"hindi": "क्या दबा रहे हो?"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "어떤 비극적인 진실을… 얼음 속에 가둬두려고 해요.",
						"english": "They're trying to trap some tragic truth… in the ice.",
						"japanese": "ある悲劇的な真実を… 氷の中に閉じ込めようとしている。",
						"chinese": "他们正试图将某个悲剧性的真相… 困在冰中。",
						"french": "Ils essaient d'emprisonner une vérité tragique… dans la glace.",
						"spanish": "Están tratando de atrapar alguna verdad trágica… en el hielo.",
						"vietnamese": "Họ đang cố gắng giam cầm một sự thật bi thảm nào đó… trong băng.",
						"thai": "พวกเขากำลังพยายามกักขังความจริงอันน่าเศร้าบางอย่าง… ไว้ในน้ำแข็ง",
						"hindi": "वे किसी दुखद सच्चाई को… बर्फ में कैद करने की कोशिश कर रहे हैं।"
					},
					"speaker": "hild",
					"type": "speech"
				},
				{
					"content": {
						"korean": "얼음…?",
						"english": "Ice…?",
						"japanese": "氷…？",
						"chinese": "冰…？",
						"french": "Glace… ?",
						"spanish": "¿Hielo…?",
						"vietnamese": "Băng…?",
						"thai": "น้ำแข็ง…?",
						"hindi": "बर्फ…?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이 설원 깊숙한 곳에서, 이상한 그림자가 보인다는 소문이 돌아요.",
						"english": "Deep within this snowy field, rumors say strange shadows are seen.",
						"japanese": "この雪原の奥深くで、奇妙な影が見えるという噂が流れている。",
						"chinese": "在这片雪原深处，有传言说看到了奇怪的影子。",
						"french": "Au plus profond de ce champ de neige, des rumeurs disent que des ombres étranges sont vues.",
						"spanish": "En lo profundo de este campo nevado, los rumores dicen que se ven sombras extrañas.",
						"vietnamese": "Sâu trong cánh đồng tuyết này, có tin đồn rằng những cái bóng kỳ lạ đang xuất hiện.",
						"thai": "ลึกเข้าไปในทุ่งหิมะแห่งนี้ มีข่าวลือว่ามีเงาประหลาดปรากฏขึ้น",
						"hindi": "इस बर्फीले मैदान की गहराई में, अफवाहें कहती हैं कि अजीब छायाएँ दिख रही हैं।"
					},
					"speaker": "hild",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "얼어붙은… 사람의 형상이라고…",
						"english": "A frozen… human figure…",
						"japanese": "凍りついた… 人の形だと…",
						"chinese": "一个冰冻的… 人形…",
						"french": "Une forme humaine… gelée…",
						"spanish": "Una figura… humana congelada…",
						"vietnamese": "Một hình dáng… người đóng băng…",
						"thai": "รูปร่าง… มนุษย์ที่แข็งตัว…",
						"hindi": "एक जमा हुआ… मानव आकृति…"
					},
					"speaker": "hild",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…!",
						"english": "…!",
						"japanese": "…！",
						"chinese": "…！",
						"french": "… !",
						"spanish": "… !",
						"vietnamese": "…!",
						"thai": "…!",
						"hindi": "…!"
					},
					"type": "speech",
					"speaker": "character_any"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "{random_boss}의 형상이 연기처럼 사라졌다.",
						"english": "{random_boss}'s form vanished like smoke.",
						"japanese": "{random_boss}の姿が煙のように消え去った。",
						"chinese": "{random_boss}的身影如烟般消散了。",
						"french": "La forme de {random_boss} a disparu comme de la fumée.",
						"spanish": "La forma de {random_boss} se desvaneció como humo.",
						"vietnamese": "Hình dáng của {random_boss} tan biến như khói.",
						"thai": "ร่างของ {random_boss} หายไปราวกับควัน",
						"hindi": "{random_boss} का रूप धुएँ की तरह गायब हो गया।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…겨우 이걸 이겼다고 기뻐하지 마라.",
						"english": "...Don't rejoice just because you defeated this.",
						"japanese": "…たかがこれを倒したくらいで喜ぶな。",
						"chinese": "……别因为打败了这种东西就高兴。",
						"french": "…Ne te réjouis pas d'avoir vaincu ça.",
						"spanish": "...No te alegres solo por haber derrotado esto.",
						"vietnamese": "...Đừng vui mừng chỉ vì đã đánh bại thứ này.",
						"thai": "…อย่าเพิ่งดีใจที่เอาชนะแค่นี้ได้",
						"hindi": "...सिर्फ़ इसे हराकर खुशी मत मनाओ।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "진정한 망각은… 이제부터 시작될 테니.",
						"english": "True oblivion... will begin now.",
						"japanese": "真の忘却は… これから始まるのだから。",
						"chinese": "真正的遗忘……将从现在开始。",
						"french": "Le véritable oubli… commencera maintenant.",
						"spanish": "El verdadero olvido... comenzará ahora.",
						"vietnamese": "Sự lãng quên thực sự... sẽ bắt đầu từ bây giờ.",
						"thai": "การลืมเลือนที่แท้จริง... จะเริ่มต้นขึ้นจากนี้ไป",
						"hindi": "असली विस्मृति... अब शुरू होगी।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "무슨 소리야… 아직 끝나지 않은 건가?",
						"english": "What was that… It's not over yet?",
						"japanese": "何を言っているんだ… まだ終わってないのか？",
						"chinese": "什么意思……还没结束吗？",
						"french": "Qu'est-ce que c'était… Ce n'est pas encore fini ?",
						"spanish": "¿Qué fue eso...? ¿Todavía no ha terminado?",
						"vietnamese": "Cái gì vậy... Vẫn chưa kết thúc sao?",
						"thai": "อะไรกัน... ยังไม่จบอีกเหรอ?",
						"hindi": "क्या मतलब... क्या यह अभी खत्म नहीं हुआ?"
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "쓰러진 보스는 또 다른 진실을 암시하며 사라졌다. 거대한 얼음 아래… 비극의 메아리는 더욱 선명해졌다.",
						"english": "The defeated boss vanished, hinting at another truth. Beneath the colossal ice… the echoes of tragedy became clearer.",
						"japanese": "倒れたボスは、別の真実をほのめかしながら消え去った。巨大な氷の下…悲劇のこだまはさらに鮮明になった。",
						"chinese": "被打倒的Boss消失了，暗示着另一个真相。在巨大的冰层之下……悲剧的回声变得更加清晰。",
						"french": "Le boss vaincu a disparu, suggérant une autre vérité. Sous la glace colossale… les échos de la tragédie sont devenus plus clairs.",
						"spanish": "El jefe derrotado desapareció, insinuando otra verdad. Bajo el hielo colosal... los ecos de la tragedia se hicieron más claros.",
						"vietnamese": "Con boss bị đánh bại biến mất, gợi ý về một sự thật khác. Dưới tảng băng khổng lồ... tiếng vọng của bi kịch trở nên rõ ràng hơn.",
						"thai": "บอสที่พ่ายแพ้หายไป บ่งบอกถึงความจริงอีกอย่าง ใต้น้ำแข็งขนาดมหึมา... เสียงสะท้อนของโศกนาฏกรรมกลับชัดเจนยิ่งขึ้น",
						"hindi": "पराजित बॉस गायब हो गया, एक और सच्चाई का संकेत देते हुए। विशाल बर्फ़ के नीचे... त्रासदी की गूँज और स्पष्ट हो गई।"
					},
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"content": {
						"korean": "망각의 심장부. 그곳에서 거대한 그림자가 일어섰다.",
						"english": "The heart of oblivion. There, a colossal shadow arose.",
						"japanese": "忘却の心臓部。そこから巨大な影が立ち上がった。",
						"chinese": "遗忘之心。在那里，一道巨大的身影站了起来。",
						"french": "Au cœur de l'oubli. Là, une ombre colossale s'est levée.",
						"spanish": "El corazón del olvido. Allí, una sombra colosal se alzó.",
						"vietnamese": "Trung tâm của sự lãng quên. Ở đó, một bóng đen khổng lồ trỗi dậy.",
						"thai": "ใจกลางแห่งการลืมเลือน ณ ที่นั้น เงาขนาดยักษ์ได้ตื่นขึ้น",
						"hindi": "विस्मृति के हृदय में। वहाँ, एक विशाल छाया उठ खड़ी हुई।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "여기까지 오다니… 어리석은 인간들.",
						"english": "To come this far... Foolish mortals.",
						"japanese": "ここまで来るとは… 愚かな人間たちめ。",
						"chinese": "竟敢来到这里……愚蠢的人类。",
						"french": "Oser venir jusqu'ici… Mortels insensés.",
						"spanish": "Haber llegado tan lejos... Mortales necios.",
						"vietnamese": "Dám đến tận đây... Những kẻ phàm trần ngu ngốc.",
						"thai": "มาถึงที่นี่ได้... มนุษย์โง่เขลาเอ๋ย",
						"hindi": "यहाँ तक आ पहुँचे... मूर्ख मनुष्य।"
					},
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "잊혀진 것을 깨울 필요는 없다. 침묵이 곧 평화.",
						"english": "There's no need to awaken what's forgotten. Silence is peace.",
						"japanese": "忘れ去られたものを呼び覚ます必要はない。沈黙こそが平和だ。",
						"chinese": "没有必要唤醒被遗忘之物。沉默即是和平。",
						"french": "Il n'y a pas besoin de réveiller ce qui est oublié. Le silence est paix.",
						"spanish": "No hay necesidad de despertar lo olvidado. El silencio es paz.",
						"vietnamese": "Không cần phải đánh thức những gì đã bị lãng quên. Im lặng là bình yên.",
						"thai": "ไม่จำเป็นต้องปลุกสิ่งที่ถูกลืมให้ตื่น ความเงียบคือสันติ",
						"hindi": "भूली हुई चीज़ों को जगाने की ज़रूरत नहीं है। चुप्पी ही शांति है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "진실은 감출 수 없어!",
						"english": "The truth cannot be hidden!",
						"japanese": "真実は隠せない！",
						"chinese": "真相是无法隐藏的！",
						"french": "La vérité ne peut être cachée !",
						"spanish": "¡La verdad no se puede ocultar!",
						"vietnamese": "Sự thật không thể bị che giấu!",
						"thai": "ความจริงไม่อาจซ่อนเร้น!",
						"hindi": "सत्य को छुपाया नहीं जा सकता!"
					}
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "{random_boss}의 차가운 시선이 탐험대를 꿰뚫었다.",
						"english": "{random_boss}'s cold gaze pierced through the expedition team.",
						"japanese": "{random_boss}の冷たい視線が探検隊を貫いた。",
						"chinese": "{random_boss}冰冷的目光刺穿了探险队。",
						"french": "Le regard froid de {random_boss} transperça l'équipe d'expédition.",
						"spanish": "La fría mirada de {random_boss} atravesó al equipo de expedición.",
						"vietnamese": "Ánh mắt lạnh lùng của {random_boss} xuyên thấu đội thám hiểm.",
						"thai": "สายตาเย็นชาของ {random_boss} เจาะทะลุทีมสำรวจ",
						"hindi": "{random_boss} की ठंडी निगाहों ने अभियान दल को भेद दिया।"
					}
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "…너희의 진실은, 영원히 얼어붙을 것이다.",
						"english": "...Your truth will be frozen forever.",
						"japanese": "...お前たちの真実は、永遠に凍りつく。",
						"chinese": "...你们的真相，将永远被冰封。",
						"french": "...Votre vérité sera gelée pour l'éternité.",
						"spanish": "...Vuestra verdad quedará congelada para siempre.",
						"vietnamese": "...Sự thật của các ngươi sẽ bị đóng băng vĩnh viễn.",
						"thai": "...ความจริงของพวกเจ้าจะถูกแช่แข็งไปตลอดกาล",
						"hindi": "...तुम्हारा सच, हमेशा के लिए जम जाएगा।"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "아직 포기 안 해!",
						"english": "Not giving up yet!",
						"japanese": "まだ諦めない！",
						"chinese": "我还没放弃！",
						"french": "Je n'abandonne pas encore !",
						"spanish": "¡Todavía no me rindo!",
						"vietnamese": "Tôi chưa bỏ cuộc đâu!",
						"thai": "ฉันยังไม่ยอมแพ้!",
						"hindi": "अभी हार नहीं मानी!"
					},
					"type": "speech",
					"speaker": "character_any"
				}
			]
		}
	]
} as const;
