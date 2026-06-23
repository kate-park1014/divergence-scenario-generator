export const scenario_modern_vortex_32_02 = {
	"scenario_id": "modern_vortex_32_02",
	"order": 2,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"kai": {
			"id": "mon_d7f29313-b8fb-49da-9a1a-01df5d13866e",
			"name": {
				"korean": "카이",
				"english": "Kai",
				"japanese": "カイ",
				"chinese": "凯",
				"french": "Kai",
				"spanish": "Kai",
				"vietnamese": "Kai",
				"thai": "ไค",
				"hindi": "काई"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f10d9184-4155-4bb9-de2d-db61463f7c00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/e41f8e03-08c9-4a4f-6f72-fa9342876f00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"데이터 파편. 완벽한 도시에 숨겨진 균열.",
			"사라진 기록들은 거대한 시스템의 그림자를 드러냈다.",
			"진실을 쫓는 발걸음은, 곧 절망과 마주할 것이다.",
			"왜곡된 데이터 속에서, 희생자들의 그림자가 어른거린다."
		],
		"english": [
			"Data fragments. Cracks hidden in a perfect city.",
			"Lost records revealed the shadow of a colossal system.",
			"Steps pursuing the truth will soon face despair.",
			"In distorted data, the shadows of victims flicker."
		],
		"japanese": [
			"データのかけら。完璧な都市に隠された亀裂。",
			"失われた記録は、巨大なシステムの影を暴き出した。",
			"真実を追う足取りは、やがて絶望と向き合うだろう。",
			"歪んだデータの中で、犠牲者たちの影が揺らめく。"
		],
		"chinese": [
			"数据碎片。完美城市中隐藏的裂痕。",
			"消失的记录揭示了庞大系统的阴影。",
			"追寻真相的脚步，终将面对绝望。",
			"在扭曲的数据中，受害者的影子若隐若现。"
		],
		"french": [
			"Fragments de données. Fissures cachées dans une ville parfaite.",
			"Des enregistrements perdus ont révélé l'ombre d'un système colossal.",
			"Les pas poursuivant la vérité affronteront bientôt le désespoir.",
			"Dans les données distordues, les ombres des victimes vacillent."
		],
		"spanish": [
			"Fragmentos de datos. Grietas ocultas en una ciudad perfecta.",
			"Los registros perdidos revelaron la sombra de un sistema colosal.",
			"Los pasos que persiguen la verdad pronto se enfrentarán a la desesperación.",
			"En los datos distorsionados, las sombras de las víctimas parpadean."
		],
		"vietnamese": [
			"Mảnh vỡ dữ liệu. Những vết nứt ẩn mình trong thành phố hoàn hảo.",
			"Những ghi chép đã mất hé lộ bóng tối của một hệ thống khổng lồ.",
			"Những bước chân theo đuổi sự thật rồi sẽ đối mặt với tuyệt vọng.",
			"Trong dữ liệu méo mó, bóng dáng của các nạn nhân hiện lên chập chờn."
		],
		"thai": [
			"ชิ้นส่วนข้อมูล รอยร้าวที่ซ่อนอยู่ในเมืองที่สมบูรณ์แบบ",
			"บันทึกที่หายไปเปิดเผยเงาของระบบขนาดมหึมา",
			"ก้าวที่ตามล่าความจริงจะเผชิญหน้ากับความสิ้นหวังในไม่ช้า",
			"ในข้อมูลที่บิดเบือน เงาของเหยื่อยังคงสั่นไหว"
		],
		"hindi": [
			"डेटा के टुकड़े। एक आदर्श शहर में छिपी दरारें।",
			"गुम हुए रिकॉर्ड ने एक विशाल प्रणाली की परछाई उजागर की।",
			"सत्य का पीछा करते कदम, शीघ्र ही निराशा का सामना करेंगे।",
			"विकृत डेटा में, पीड़ितों की परछाईयाँ टिमटिमाती हैं।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "도시의 외곽, 버려진 데이터 골목. 정보는 여기에서 은밀히 거래된다.",
						"english": "City outskirts, abandoned data alley. Information is secretly traded here.",
						"japanese": "都市の郊外、廃墟となったデータ路地。情報はここで密かに取引される。",
						"chinese": "城市郊区，废弃的数据巷。信息在此秘密交易。",
						"french": "Banlieue de la ville, ruelle de données abandonnée. Les informations y sont échangées secrètement.",
						"spanish": "Afueras de la ciudad, callejón de datos abandonado. La información se negocia aquí en secreto.",
						"vietnamese": "Ngoại ô thành phố, con hẻm dữ liệu bị bỏ hoang. Thông tin được giao dịch bí mật ở đây.",
						"thai": "ชานเมือง ซอยข้อมูลร้าง ข้อมูลถูกซื้อขายอย่างลับๆ ที่นี่",
						"hindi": "शहर के बाहरी इलाके, सुनसान डेटा गली। यहाँ गुप्त रूप से जानकारी का व्यापार होता है।"
					},
					"emotion": "base"
				},
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "kai",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…찾아왔군. 뭘 원하는지 알아.",
						"english": "...You've come. I know what you want.",
						"japanese": "…来たか。何が欲しいか、分かっている。",
						"chinese": "……你来了。我知道你想要什么。",
						"french": "...Vous êtes venu. Je sais ce que vous voulez.",
						"spanish": "...Has venido. Sé lo que quieres.",
						"vietnamese": "...Ngươi đã đến. Ta biết ngươi muốn gì.",
						"thai": "…มาแล้วสินะ ฉันรู้ว่านายต้องการอะไร",
						"hindi": "...तुम आ गए। मैं जानता हूँ तुम्हें क्या चाहिए।"
					},
					"type": "speech",
					"speaker": "kai"
				},
				{
					"content": {
						"korean": "Vortex 시스템 밖의 정보. 사라진 기록들.",
						"english": "Information outside the Vortex system. Lost records.",
						"japanese": "Vortexシステム外の情報。失われた記録。",
						"chinese": "Vortex系统之外的信息。消失的记录。",
						"french": "Informations en dehors du système Vortex. Enregistrements perdus.",
						"spanish": "Información fuera del sistema Vortex. Registros perdidos.",
						"vietnamese": "Thông tin bên ngoài hệ thống Vortex. Những ghi chép đã mất.",
						"thai": "ข้อมูลภายนอกระบบ Vortex บันทึกที่หายไป",
						"hindi": "Vortex प्रणाली के बाहर की जानकारी। गुम हुए रिकॉर्ड।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"emotion": "sad",
					"content": {
						"korean": "그건 위험한 거래야. 모든 걸 잃을 수도 있어.",
						"english": "That's a dangerous deal. You could lose everything.",
						"japanese": "それは危険な取引だ。全てを失う可能性もある。",
						"chinese": "那是笔危险的交易。你可能会失去一切。",
						"french": "C'est un marché dangereux. Vous pourriez tout perdre.",
						"spanish": "Es un trato peligroso. Podrías perderlo todo.",
						"vietnamese": "Đó là một giao dịch nguy hiểm. Ngươi có thể mất tất cả.",
						"thai": "นั่นเป็นการค้าที่อันตราย นายอาจจะเสียทุกสิ่งทุกอย่างไป",
						"hindi": "वह एक खतरनाक सौदा है। तुम सब कुछ खो सकते हो।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이미 잃을 만큼 잃었어.",
						"english": "I've already lost enough.",
						"japanese": "もう十分失った。",
						"chinese": "我已经失去得够多了。",
						"french": "J'ai déjà assez perdu.",
						"spanish": "Ya he perdido bastante.",
						"vietnamese": "Ta đã mất đủ rồi.",
						"thai": "ฉันเสียไปมากพอแล้ว",
						"hindi": "मैं पहले ही काफी कुछ खो चुका हूँ।"
					},
					"emotion": "angry"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"speaker": "kai",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "이게 네가 찾는 정보 파편이야.",
						"english": "These are the data fragments you're looking for.",
						"japanese": "これが、お前が探している情報のかけらだ。",
						"chinese": "这就是你正在寻找的信息碎片。",
						"french": "Ce sont les fragments d'informations que vous cherchez.",
						"spanish": "Estos son los fragmentos de información que buscas.",
						"vietnamese": "Đây là những mảnh dữ liệu ngươi đang tìm.",
						"thai": "นี่คือชิ้นส่วนข้อมูลที่นายกำลังมองหา",
						"hindi": "ये वो डेटा के टुकड़े हैं जिनकी तुम तलाश कर रहे हो।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…이건 그냥 노이즈잖아?",
						"english": "...This is just noise, isn't it?",
						"japanese": "「…これはただのノイズじゃないか？」",
						"chinese": "“……这只是噪音吧？”",
						"french": "...C'est juste du bruit, non ?",
						"spanish": "...Esto es solo ruido, ¿verdad?",
						"vietnamese": "...Đây chỉ là nhiễu thôi mà?",
						"thai": "...นี่มันแค่สัญญาณรบกวนนี่?",
						"hindi": "...ये तो बस शोर है, है ना?"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "Vortex는 완벽해 보여도, 모든 걸 지울 수는 없어.",
						"english": "Vortex may seem perfect, but it can't erase everything.",
						"japanese": "「Vortexは完璧に見えても、全てを消し去ることはできない。」",
						"chinese": "“Vortex看似完美，但也无法抹去一切。”",
						"french": "Vortex a beau sembler parfait, il ne peut pas tout effacer.",
						"spanish": "Aunque Vortex parezca perfecto, no puede borrarlo todo.",
						"vietnamese": "Vortex có vẻ hoàn hảo, nhưng không thể xóa bỏ mọi thứ.",
						"thai": "Vortex อาจจะดูสมบูรณ์แบบ แต่ก็ลบทุกสิ่งไม่ได้",
						"hindi": "वॉर्टेक्स भले ही परिपूर्ण लगे, पर यह सब कुछ मिटा नहीं सकता।"
					},
					"speaker": "kai",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "지워진 자들의 흔적은 이렇게 왜곡된 형태로 남아있지.",
						"english": "Traces of the erased remain in this distorted form.",
						"japanese": "「消された者たちの痕跡は、こうして歪んだ形で残る。」",
						"chinese": "“被抹去者的痕迹，就是以这种扭曲的形式残留。”",
						"french": "Les traces de ceux qui ont été effacés subsistent sous cette forme déformée.",
						"spanish": "Los rastros de los borrados permanecen en esta forma distorsionada.",
						"vietnamese": "Dấu vết của những người bị xóa vẫn còn, dưới dạng biến dạng này.",
						"thai": "ร่องรอยของผู้ที่ถูกลบยังคงอยู่ ในรูปแบบที่บิดเบี้ยวเช่นนี้",
						"hindi": "मिटाए गए लोगों के निशान इस विकृत रूप में बचे हैं।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "정말… 사라진 사람들이 있다는 거야?",
						"english": "Are there really... people who've disappeared?",
						"japanese": "「本当に…消えた人々がいるのか？」",
						"chinese": "“真的……有人消失了吗？”",
						"french": "Y a-t-il vraiment... des gens qui ont disparu ?",
						"spanish": "¿De verdad... hay gente que ha desaparecido?",
						"vietnamese": "Thật sự... có người đã biến mất sao?",
						"thai": "นี่มัน... มีคนที่หายไปจริงๆ เหรอ?",
						"hindi": "क्या वाकई... लोग गायब हो गए हैं?"
					},
					"emotion": "sad"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "kai",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "더 심각한 걸 찾았어. 이건 단순한 노이즈가 아니야.",
						"english": "I found something more serious. This isn't just simple noise.",
						"japanese": "「もっと深刻なものを見つけた。これはただのノイズじゃない。」",
						"chinese": "“我发现了更严重的事情。这不仅仅是简单的噪音。”",
						"french": "J'ai trouvé quelque chose de plus grave. Ce n'est pas un simple bruit.",
						"spanish": "Encontré algo más grave. Esto no es solo ruido simple.",
						"vietnamese": "Tôi đã tìm thấy điều gì đó nghiêm trọng hơn. Đây không chỉ là nhiễu đơn thuần.",
						"thai": "ฉันเจออะไรที่ร้ายแรงกว่าเดิม นี่ไม่ใช่แค่สัญญาณรบกวนธรรมดา",
						"hindi": "मुझे कुछ और गंभीर मिला है। यह सिर्फ सामान्य शोर नहीं है।"
					},
					"type": "speech",
					"speaker": "kai"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "데이터 스크린에서 미세한 노이즈와 함께, 특정 주파수가 감지된다. 지워진 기록들 사이에서 섬뜩한 공백이 발견됐다.",
						"english": "Alongside subtle noise on the data screen, a specific frequency is detected. An eerie void was found among the erased records.",
						"japanese": "「データスクリーンに微細なノイズとともに、特定の周波数が感知される。消された記録の中に不気味な空白が発見された。」",
						"chinese": "“数据屏幕上伴随着微弱的噪音，检测到特定频率。在被抹去的记录中，发现了令人毛骨悚然的空白。”",
						"french": "Sur l'écran de données, une fréquence spécifique est détectée avec un léger bruit. Un vide étrange a été découvert parmi les enregistrements effacés.",
						"spanish": "En la pantalla de datos, junto con un ruido sutil, se detecta una frecuencia específica. Se encontró un vacío espeluznante entre los registros borrados.",
						"vietnamese": "Trên màn hình dữ liệu, cùng với nhiễu nhẹ, một tần số cụ thể được phát hiện. Một khoảng trống đáng sợ đã được tìm thấy giữa các bản ghi đã bị xóa.",
						"thai": "บนหน้าจอข้อมูล มีสัญญาณรบกวนเบาๆ พร้อมกับความถี่เฉพาะที่ตรวจจับได้ พบช่องว่างที่น่าขนลุกระหว่างบันทึกที่ถูกลบ",
						"hindi": "डेटा स्क्रीन पर सूक्ष्म शोर के साथ, एक विशिष्ट आवृत्ति का पता चला है। मिटाए गए रिकॉर्ड के बीच एक भयावह शून्य पाया गया।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "이건… 누군가 의도적으로 정보를 지웠다는 증거잖아.",
						"english": "This is... evidence that someone intentionally erased information.",
						"japanese": "「これは…誰かが意図的に情報を消した証拠じゃないか。」",
						"chinese": "“这……是有人故意删除信息的证据啊。”",
						"french": "C'est... la preuve que quelqu'un a délibérément effacé des informations.",
						"spanish": "Esto es... evidencia de que alguien borró información intencionalmente.",
						"vietnamese": "Đây là... bằng chứng cho thấy ai đó đã cố ý xóa thông tin.",
						"thai": "นี่มัน... หลักฐานว่ามีคนจงใจลบข้อมูลนี่นา",
						"hindi": "यह... इस बात का सबूत है कि किसी ने जानबूझकर जानकारी मिटाई है।"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이런 흔적은 Vortex 시스템에서 절대 발견될 수 없는 거야.",
						"english": "Such traces should never be found in the Vortex system.",
						"japanese": "「こんな痕跡はVortexシステムでは絶対に見つからないはずだ。」",
						"chinese": "“这种痕迹绝不可能在Vortex系统中发现。”",
						"french": "De telles traces ne devraient jamais être trouvées dans le système Vortex.",
						"spanish": "Tales rastros nunca deberían encontrarse en el sistema Vortex.",
						"vietnamese": "Những dấu vết như thế này không bao giờ được tìm thấy trong hệ thống Vortex.",
						"thai": "ร่องรอยแบบนี้ไม่ควรถูกพบในระบบ Vortex เลย",
						"hindi": "ऐसे निशान वॉर्टेक्स सिस्टम में कभी नहीं मिलने चाहिए।"
					},
					"speaker": "kai",
					"type": "speech"
				},
				{
					"content": {
						"korean": "도대체 뭘 숨기고 있는 거지?",
						"english": "What on earth are they hiding?",
						"japanese": "「一体何を隠しているんだ？」",
						"chinese": "“到底在隐藏什么？”",
						"french": "Qu'est-ce qu'ils cachent, bon sang ?",
						"spanish": "¿Qué demonios están ocultando?",
						"vietnamese": "Rốt cuộc họ đang che giấu điều gì?",
						"thai": "พวกเขากำลังซ่อนอะไรอยู่กันแน่?",
						"hindi": "आखिर वे क्या छिपा रहे हैं?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "kai",
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "kai",
					"type": "speech",
					"content": {
						"korean": "…이건 한 사람의 기억 파편이야. 완전히 왜곡되어 있어.",
						"english": "...This is a fragment of someone's memory. It's completely distorted.",
						"japanese": "「…これはある人物の記憶の断片だ。完全に歪んでいる。」",
						"chinese": "“……这是某个人的记忆碎片。它完全被扭曲了。”",
						"french": "...C'est un fragment de la mémoire de quelqu'un. C'est complètement déformé.",
						"spanish": "...Esto es un fragmento de la memoria de alguien. Está completamente distorsionado.",
						"vietnamese": "...Đây là một mảnh ký ức của một người. Nó đã bị bóp méo hoàn toàn.",
						"thai": "...นี่คือเศษเสี้ยวความทรงจำของใครบางคน มันบิดเบี้ยวไปหมดแล้ว",
						"hindi": "...यह किसी की याददाश्त का एक अंश है। यह पूरी तरह से विकृत है।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "특정 인물의 깊은 기억 속에서, 존재하지 않는 빈 페이지와 사라진 기간의 공백이 발견된다.",
						"english": "In a person's deep memories, blank, non-existent pages and a void of erased time are found.",
						"japanese": "特定の人物の深い記憶の中で、存在しない空白のページと消滅した期間の空白が発見される。",
						"chinese": "在特定人物的深层记忆中，发现了不存在的空白页面和消失的时间空隙。",
						"french": "Dans les souvenirs profonds d'une personne, des pages blanches inexistantes et un vide de périodes disparues sont découverts.",
						"spanish": "En los recuerdos profundos de una persona, se encuentran páginas en blanco inexistentes y un vacío de períodos borrados.",
						"vietnamese": "Trong ký ức sâu thẳm của một người, những trang trắng không tồn tại và khoảng trống của những khoảng thời gian đã biến mất được tìm thấy.",
						"thai": "ในความทรงจำลึกซึ้งของบุคคลหนึ่ง หน้ากระดาษว่างเปล่าที่ไม่มีอยู่จริงและช่องว่างของช่วงเวลาที่หายไปได้ถูกค้นพบ",
						"hindi": "किसी व्यक्ति की गहरी यादों में, न के बराबर खाली पन्ने और गायब हुए समय का अंतराल पाया जाता है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "이 사람이… 뭘 겪은 거지? 기억이 지워졌어.",
						"english": "What... did this person go through? Their memories have been erased.",
						"japanese": "この人は…何があったんだ？記憶が消されている。",
						"chinese": "这人……经历了什么？记忆被抹去了。",
						"french": "Qu'est-ce que cette personne a... vécu ? Ses souvenirs ont été effacés.",
						"spanish": "¿Qué... le pasó a esta persona? Sus recuerdos han sido borrados.",
						"vietnamese": "Người này... đã trải qua chuyện gì? Ký ức đã bị xóa sổ.",
						"thai": "คนนี้... ผ่านอะไรมาบ้างนะ? ความทรงจำถูกลบไปแล้ว",
						"hindi": "इस व्यक्ति के साथ... क्या हुआ? यादें मिटा दी गई हैं।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "kai",
					"type": "speech",
					"content": {
						"korean": "Vortex가 말하는 '정화'는 결국… 존재 자체를 없애는 거야.",
						"english": "The 'purification' Vortex speaks of is ultimately... annihilation.",
						"japanese": "Vortexが言う「浄化」は結局…存在そのものを消し去ることだ。",
						"chinese": "Vortex所说的“净化”最终……就是抹杀存在本身。",
						"french": "La « purification » dont parle le Vortex est finalement… l'annihilation.",
						"spanish": "La 'purificación' de la que habla Vortex es, en última instancia... la aniquilación.",
						"vietnamese": "Cái gọi là \"thanh tẩy\" mà Vortex nói đến rốt cuộc... là xóa sổ sự tồn tại.",
						"thai": "'การชำระล้าง' ที่ Vortex พูดถึง ท้ายที่สุดแล้ว... คือการทำลายล้างตัวตน",
						"hindi": "Vortex जिस 'शुद्धिकरण' की बात करता है, वह अंततः... अस्तित्व को मिटाना है।"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이런 짓을… 왜?",
						"english": "Why... do this?",
						"japanese": "こんなことを…なぜ？",
						"chinese": "做出这种事……为什么？",
						"french": "Faire ça... pourquoi ?",
						"spanish": "¿Por qué... hacer esto?",
						"vietnamese": "Làm chuyện này... tại sao?",
						"thai": "ทำเรื่องแบบนี้... ทำไม?",
						"hindi": "ऐसा क्यों... किया?"
					},
					"emotion": "angry"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "너는 이 질서에 저항할 수 없어. 사라져야 할 데이터일 뿐.",
						"english": "You cannot defy this order. You are merely data to be erased.",
						"japanese": "お前はこの秩序に抗えない。消去すべきデータに過ぎない。",
						"chinese": "你无法反抗这个秩序。不过是需要清除的数据而已。",
						"french": "Tu ne peux pas défier cet ordre. Tu n'es que des données à effacer.",
						"spanish": "No puedes desafiar este orden. Eres solo datos que deben ser borrados.",
						"vietnamese": "Ngươi không thể chống lại trật tự này. Ngươi chỉ là dữ liệu cần bị xóa bỏ.",
						"thai": "เจ้าไม่อาจขัดขืนระเบียบนี้ได้ เจ้าเป็นเพียงข้อมูลที่ต้องถูกลบ.",
						"hindi": "तुम इस व्यवस्था का विरोध नहीं कर सकते। तुम बस मिटाए जाने वाले डेटा हो।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "절대 포기 안 해. 반드시 진실을 밝힐 거야.",
						"english": "I'll never give up. I'll uncover the truth, no matter what.",
						"japanese": "絶対に諦めない。必ず真実を明らかにする。",
						"chinese": "我绝不放弃。我一定会揭露真相。",
						"french": "Je n'abandonnerai jamais. Je découvrirai la vérité.",
						"spanish": "Nunca me rendiré. Descubriré la verdad.",
						"vietnamese": "Tôi sẽ không bao giờ từ bỏ. Tôi nhất định sẽ vạch trần sự thật.",
						"thai": "ฉันจะไม่มีวันยอมแพ้ ฉันจะเปิดเผยความจริงให้ได้.",
						"hindi": "मैं कभी हार नहीं मानूंगा। मैं सच्चाई का पर्दाफाश करूंगा।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "kai",
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "더 이상은 안 돼. 위험해.",
						"english": "No further. It's too dangerous.",
						"japanese": "これ以上はダメだ。危険だ。",
						"chinese": "不能再往前了。太危险了。",
						"french": "Pas plus loin. C'est dangereux.",
						"spanish": "No más. Es peligroso.",
						"vietnamese": "Không thể hơn nữa. Nguy hiểm.",
						"thai": "ไม่ได้แล้ว อันตราย",
						"hindi": "और नहीं। खतरा है।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거대한 시스템의 수호자. 정체 모를 그림자가 앞을 가로막는다.",
						"english": "Guardian of a vast system. An unknown shadow blocks the way.",
						"japanese": "巨大なシステムの守護者。正体不明の影が前を遮る。",
						"chinese": "巨大系统的守护者。一个不明身份的影子挡住了去路。",
						"french": "Gardien d'un vaste système. Une ombre inconnue barre le chemin.",
						"spanish": "Guardián de un vasto sistema. Una sombra desconocida bloquea el camino.",
						"vietnamese": "Kẻ bảo vệ của một hệ thống khổng lồ. Một bóng đen không rõ danh tính chặn lối.",
						"thai": "ผู้พิทักษ์ของระบบอันยิ่งใหญ่ เงาปริศนาขวางทางไว้",
						"hindi": "एक विशाल प्रणाली का संरक्षक। एक अज्ञात छाया रास्ता रोकती है।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "여기까지인가. 이 파편들은 이곳에서 소멸된다.",
						"english": "Is this the end? These fragments will be extinguished here.",
						"japanese": "ここまでか。この破片たちはここで消滅する。",
						"chinese": "到此为止了吗？这些碎片将在这里消失。",
						"french": "Est-ce la fin ? Ces fragments seront anéantis ici.",
						"spanish": "¿Es esto el fin? Estos fragmentos serán aniquilados aquí.",
						"vietnamese": "Đến đây là hết? Những mảnh vỡ này sẽ bị tiêu diệt tại đây.",
						"thai": "แค่นี้เองเหรอ? ชิ้นส่วนเหล่านี้จะถูกทำลายที่นี่",
						"hindi": "क्या यहीं तक है? ये टुकड़े यहीं नष्ट हो जाएंगे।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "네가 이런 짓을 꾸민 거야?",
						"english": "Did you orchestrate this?",
						"japanese": "お前がこんなことを企んだのか？",
						"chinese": "是你策划了这一切吗？",
						"french": "C'est toi qui as orchestré ça ?",
						"spanish": "¿Tú tramaste esto?",
						"vietnamese": "Ngươi đã bày ra chuyện này à?",
						"thai": "แกเป็นคนวางแผนเรื่องนี้เหรอ?",
						"hindi": "क्या तुमने यह सब रचा है?"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "Vortex의 질서다. 어떠한 균열도 용납할 수 없다.",
						"english": "It is Vortex's order. No crack can be tolerated.",
						"japanese": "Vortexの秩序だ。いかなる亀裂も許容できない。",
						"chinese": "这是Vortex的秩序。任何裂痕都不能容忍。",
						"french": "C'est l'ordre du Vortex. Aucune faille ne peut être tolérée.",
						"spanish": "Es la orden de Vortex. Ninguna grieta puede ser tolerada.",
						"vietnamese": "Đó là trật tự của Vortex. Không chấp nhận bất kỳ vết nứt nào.",
						"thai": "นี่คือระเบียบของ Vortex จะยอมรับรอยร้าวใด ๆ ไม่ได้",
						"hindi": "यह Vortex का आदेश है। कोई भी दरार बर्दाश्त नहीं की जा सकती।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "놈에게서 살아남아. 난 정보를 더 찾아볼게.",
						"english": "Survive him. I'll look for more information.",
						"japanese": "奴から生き残れ。俺は情報を探し続ける。",
						"chinese": "从他手中活下来。我会去寻找更多信息。",
						"french": "Survis-lui. Je vais chercher plus d'informations.",
						"spanish": "Sobrevívele. Yo buscaré más información.",
						"vietnamese": "Sống sót khỏi hắn. Tôi sẽ tìm thêm thông tin.",
						"thai": "รอดจากมันให้ได้ ฉันจะไปหาข้อมูลเพิ่มเติม",
						"hindi": "उससे बचो। मैं और जानकारी ढूंढूंगा।"
					},
					"emotion": "base",
					"speaker": "kai",
					"type": "speech"
				},
				{
					"type": "direction",
					"duration_ms": 400,
					"direction": "down",
					"action": "exit",
					"speaker": "kai"
				},
				{
					"content": {
						"korean": "도망칠 곳 없어!",
						"english": "No escape!",
						"japanese": "逃げ場はない！",
						"chinese": "无处可逃！",
						"french": "Pas d'échappatoire !",
						"spanish": "¡No hay escape!",
						"vietnamese": "Không lối thoát!",
						"thai": "ไม่มีทางหนี!",
						"hindi": "कोई बच नहीं सकता!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…이깟 파편들이… Vortex를 무너뜨릴 거라 생각하나? 어리석군.",
						"english": "...These mere fragments... you think they can destroy the Vortex? Foolish.",
						"japanese": "…この程度の破片が…Vortexを破壊できるとでも？愚かな。",
						"chinese": "…这些碎片…你以为能摧毁Vortex？愚蠢。",
						"french": "...Ces simples fragments... tu penses qu'ils peuvent détruire le Vortex ? Insensé.",
						"spanish": "...¿Crees que estos meros fragmentos... pueden destruir el Vórtice? Qué necedad.",
						"vietnamese": "...Mấy mảnh vụn này... ngươi nghĩ chúng có thể phá hủy Vortex sao? Thật ngu ngốc.",
						"thai": "แค่เศษชิ้นพวกนี้... คิดว่าจะทำลาย Vortex ได้งั้นรึ? โง่เขลา.",
						"hindi": "ये महज़ टुकड़े... तुम्हें लगता है कि ये भंवर (Vortex) को नष्ट कर सकते हैं? मूर्खता।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "진실은 언젠가 드러나게 될 거야.",
						"english": "The truth will eventually be revealed.",
						"japanese": "真実はいつか明らかになるだろう。",
						"chinese": "真相终将大白。",
						"french": "La vérité finira par éclater.",
						"spanish": "La verdad finalmente será revelada.",
						"vietnamese": "Sự thật rồi sẽ được phơi bày.",
						"thai": "ความจริงจะถูกเปิดเผยในไม่ช้า.",
						"hindi": "सच्चाई एक दिन सामने आएगी।"
					}
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "왜곡된 데이터 속에서 희생자들의 흐릿한 그림자가 선명해진다.",
						"english": "Amidst corrupted data, the blurry shadows of victims become clear.",
						"japanese": "歪んだデータの中で、犠牲者たちの曖昧な影が鮮明になる。",
						"chinese": "在扭曲的数据中，受害者的模糊身影变得清晰。",
						"french": "Au milieu des données corrompues, les ombres floues des victimes deviennent nettes.",
						"spanish": "Entre datos corruptos, las sombras borrosas de las víctimas se vuelven nítidas.",
						"vietnamese": "Giữa những dữ liệu méo mó, bóng hình mờ nhạt của nạn nhân hiện rõ.",
						"thai": "ท่ามกลางข้อมูลที่บิดเบือน เงาเลือนรางของเหยื่อเริ่มชัดเจนขึ้น.",
						"hindi": "विकृत डेटा के बीच, पीड़ितों की धुंधली परछाइयां स्पष्ट हो जाती हैं।"
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "시스템의 잔혹한 진실을 향한 발걸음은 더욱 깊은 미궁으로 향한다.",
						"english": "Steps towards the system's cruel truth lead deeper into the labyrinth.",
						"japanese": "システムの残酷な真実へ向かう足取りは、さらに深い迷宮へと誘う。",
						"chinese": "迈向系统残酷真相的脚步，引向更深的迷宫。",
						"french": "Les pas vers la cruelle vérité du système mènent plus profondément dans le labyrinthe.",
						"spanish": "Los pasos hacia la cruel verdad del sistema conducen más profundo en el laberinto.",
						"vietnamese": "Những bước chân tiến đến sự thật tàn khốc của hệ thống dẫn sâu hơn vào mê cung.",
						"thai": "ก้าวเดินสู่ความจริงอันโหดร้ายของระบบ นำพาไปสู่เขาวงกตที่ลึกยิ่งขึ้น.",
						"hindi": "सिस्टम की क्रूर सच्चाई की ओर बढ़ते कदम, एक गहरे भूलभुलैया में ले जाते हैं।"
					},
					"emotion": "base"
				}
			]
		}
	]
} as const;
