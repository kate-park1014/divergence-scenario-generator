export const scenario_modern_phantom_35_03 = {
	"scenario_id": "modern_phantom_35_03",
	"order": 3,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"bex": {
			"id": "mon_74e24324-3f9a-4d44-9611-1da33b654ca1",
			"name": {
				"korean": "벡스",
				"english": "Bex",
				"japanese": "ベックス",
				"chinese": "贝克斯",
				"french": "Bex",
				"spanish": "Bex",
				"vietnamese": "Bex",
				"thai": "เบ็กซ์",
				"hindi": "बेक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/09dae190-ff6b-4a9d-b656-e1a2b896aa00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5cc3c77f-72e1-416e-b346-31889b3b9300/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"도시의 디지털 심장이 삐걱거리기 시작했다.",
			"무작위적인 공격, 그러나 그 속에는 잔혹한 규칙이 숨어 있었다.",
			"벡스는 과거의 흔적 속에서 잊혀진 약속의 그림자를 발견했다.",
			"누군가 도시를 감시하고 있다. 비극적인 질서와 함께."
		],
		"english": [
			"The city's digital heart began to falter.",
			"Random attacks, yet a cruel pattern lay hidden within.",
			"Vex found the shadow of a forgotten promise in the traces of the past.",
			"Someone is watching the city. With a tragic order."
		],
		"japanese": [
			"都市のデジタルな心臓が軋み始めた。",
			"無作為な攻撃、だがその裏には残酷な規則が隠されていた。",
			"ヴェックスは過去の痕跡の中に忘れられた約束の影を見つけた。",
			"誰かが都市を監視している。悲劇的な秩序と共に。"
		],
		"chinese": [
			"城市的数字心脏开始颤抖。",
			"看似随意的攻击，却隐藏着残酷的规律。",
			"维克斯在过去的痕迹中发现了被遗忘的承诺的影子。",
			"有人在监视这座城市。伴随着悲剧性的秩序。"
		],
		"french": [
			"Le cœur numérique de la ville a commencé à vaciller.",
			"Des attaques aléatoires, mais une règle cruelle s'y cachait.",
			"Vex a trouvé l'ombre d'une promesse oubliée dans les traces du passé.",
			"Quelqu'un observe la ville. Avec un ordre tragique."
		],
		"spanish": [
			"El corazón digital de la ciudad comenzó a fallar.",
			"Ataques aleatorios, pero con una regla cruel oculta.",
			"Vex encontró la sombra de una promesa olvidada en los rastros del pasado.",
			"Alguien vigila la ciudad. Con un orden trágico."
		],
		"vietnamese": [
			"Trái tim số của thành phố bắt đầu lung lay.",
			"Những cuộc tấn công ngẫu nhiên, nhưng ẩn chứa một quy luật tàn khốc.",
			"Vex tìm thấy bóng hình của một lời hứa bị lãng quên trong dấu vết quá khứ.",
			"Ai đó đang theo dõi thành phố. Cùng với một trật tự bi thảm."
		],
		"thai": [
			"หัวใจดิจิทัลของเมืองเริ่มสั่นคลอน",
			"การโจมตีแบบสุ่ม แต่มีกฎที่โหดร้ายซ่อนอยู่ภายใน",
			"เวกซ์พบเงาของคำสัญญาที่ถูกลืมในร่องรอยของอดีต",
			"มีใครบางคนกำลังเฝ้าดูเมือง ด้วยระเบียบที่น่าเศร้า"
		],
		"hindi": [
			"शहर का डिजिटल दिल लड़खड़ाने लगा।",
			"यादृच्छिक हमले, फिर भी उनके भीतर एक क्रूर पैटर्न छिपा था।",
			"वेक्स ने अतीत के निशानों में एक भूले हुए वादे की छाया पाई।",
			"कोई शहर पर नज़र रख रहा है। एक दुखद व्यवस्था के साथ।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "도시의 시스템은 무너지기 직전이었다. 혼란은 걷잡을 수 없었다.",
						"english": "The city's system was on the verge of collapse. Chaos was uncontrollable.",
						"japanese": "都市のシステムは崩壊寸前だった。混乱は手に負えなかった。",
						"chinese": "城市的系统濒临崩溃。混乱无法控制。",
						"french": "Le système de la ville était sur le point de s'effondrer. Le chaos était incontrôlable.",
						"spanish": "El sistema de la ciudad estaba al borde del colapso. El caos era incontrolable.",
						"vietnamese": "Hệ thống thành phố sắp sụp đổ. Hỗn loạn không thể kiểm soát.",
						"thai": "ระบบของเมืองจวนจะพังทลาย ความโกลาหลไม่สามารถควบคุมได้",
						"hindi": "शहर का सिस्टम गिरने की कगार पर था। अराजकता बेकाबू थी।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이대로라면, 도시 전체가 마비될 거야.",
						"english": "At this rate, the entire city will be paralyzed.",
						"japanese": "このままでは、都市全体が麻痺するだろう。",
						"chinese": "照这样下去，整个城市都会瘫痪。",
						"french": "À ce rythme, toute la ville sera paralysée.",
						"spanish": "A este paso, toda la ciudad quedará paralizada.",
						"vietnamese": "Cứ đà này, cả thành phố sẽ tê liệt.",
						"thai": "ถ้าเป็นแบบนี้ต่อไป ทั้งเมืองจะกลายเป็นอัมพาต",
						"hindi": "इसी तरह, पूरा शहर लकवाग्रस्त हो जाएगा।"
					}
				},
				{
					"spot": [
						2,
						4
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "bex"
				},
				{
					"emotion": "base",
					"speaker": "bex",
					"type": "speech",
					"content": {
						"korean": "아니. 단순한 마비가 아니야. 공격 패턴이 감지돼.",
						"english": "No. It's not just paralysis. An attack pattern is detected.",
						"japanese": "いや、ただの麻痺じゃない。攻撃パターンが感知される。",
						"chinese": "不。这不是简单的瘫痪。检测到攻击模式。",
						"french": "Non. Ce n'est pas une simple paralysie. Un schéma d'attaque est détecté.",
						"spanish": "No. No es una simple parálisis. Se detecta un patrón de ataque.",
						"vietnamese": "Không. Đây không chỉ là tê liệt. Một kiểu tấn công đã được phát hiện.",
						"thai": "ไม่ใช่แค่เป็นอัมพาต ตรวจพบรูปแบบการโจมตี",
						"hindi": "नहीं। यह सिर्फ लकवा नहीं है। एक हमले का पैटर्न पता चला है।"
					}
				},
				{
					"speaker": "bex",
					"emotion": "base",
					"content": {
						"korean": "무작위가 아니라고. 누군가 의도적으로 도시를 조종하고 있어.",
						"english": "It's not random. Someone is deliberately manipulating the city.",
						"japanese": "無作為じゃない。誰かが意図的に都市を操っている。",
						"chinese": "这不是随机的。有人故意操纵这座城市。",
						"french": "Ce n'est pas aléatoire. Quelqu'un manipule délibérément la ville.",
						"spanish": "No es aleatorio. Alguien está manipulando la ciudad intencionadamente.",
						"vietnamese": "Không phải ngẫu nhiên. Ai đó đang cố ý điều khiển thành phố.",
						"thai": "มันไม่ใช่เรื่องสุ่ม มีคนจงใจบงการเมืองอยู่",
						"hindi": "यह यादृच्छिक नहीं है। कोई जानबूझकर शहर को नियंत्रित कर रहा है।"
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"speaker": "bex",
					"duration_ms": 500,
					"spot": [
						3,
						3
					]
				},
				{
					"speaker": "bex",
					"emotion": "base",
					"content": {
						"korean": "더 깊이 분석했어. 이 공격, 과거의 보안 시스템 흔적을 이용하고 있어.",
						"english": "I've analyzed it deeper. This attack is using traces of an old security system.",
						"japanese": "さらに深く分析した。この攻撃は、過去のセキュリティシステムの痕跡を利用している。",
						"chinese": "我进行了更深入的分析。这次攻击正在利用旧安全系统的痕迹。",
						"french": "J'ai analysé plus en profondeur. Cette attaque utilise des traces d'un ancien système de sécurité.",
						"spanish": "Lo he analizado más a fondo. Este ataque está utilizando rastros de un antiguo sistema de seguridad.",
						"vietnamese": "Tôi đã phân tích sâu hơn. Cuộc tấn công này đang sử dụng dấu vết của một hệ thống bảo mật cũ.",
						"thai": "ฉันวิเคราะห์ลึกลงไป การโจมตีนี้กำลังใช้ร่องรอยของระบบความปลอดภัยเก่า",
						"hindi": "मैंने इसका गहराई से विश्लेषण किया है। यह हमला एक पुराने सुरक्षा प्रणाली के निशानों का उपयोग कर रहा है।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "과거의 흔적이라니?",
						"english": "Traces of the past?",
						"japanese": "過去の痕跡だと？",
						"chinese": "过去的痕迹？",
						"french": "Des traces du passé ?",
						"spanish": "¿Rastros del pasado?",
						"vietnamese": "Dấu vết của quá khứ sao?",
						"thai": "ร่องรอยของอดีต?",
						"hindi": "अतीत के निशान?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"speaker": "bex",
					"type": "speech",
					"content": {
						"korean": "그래. 그리고… 특정 인물의 데이터 잔영이 감지돼. 오래된 기록 속에 잠들어 있던 존재.",
						"english": "Yes. And… data remnants of a specific individual are detected. A being dormant in ancient records.",
						"japanese": "ええ。それに… 特定の人物のデータ残影が感知されます。古い記録の中に眠っていた存在です。",
						"chinese": "是的。而且……检测到特定人物的数据残影。一个沉睡在古老记录中的存在。",
						"french": "Oui. Et… des rémanences de données d'un individu spécifique sont détectées. Un être dormant dans des registres anciens.",
						"spanish": "Sí. Y… se detectan restos de datos de un individuo específico. Un ser latente en registros antiguos.",
						"vietnamese": "Đúng vậy. Và… phát hiện dư ảnh dữ liệu của một cá nhân cụ thể. Một thực thể đã ngủ yên trong các ghi chép cổ xưa.",
						"thai": "ใช่แล้ว… และ… ตรวจพบเงาข้อมูลของบุคคลหนึ่ง สิ่งมีชีวิตที่หลับใหลอยู่ในบันทึกโบราณ",
						"hindi": "हाँ। और… एक विशिष्ट व्यक्ति के डेटा अवशेषों का पता चला है। एक प्राणी जो प्राचीन अभिलेखों में सुप्त था।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "누군가 죽은 사람의 흔적을 이용한다는 건가?",
						"english": "Someone is using traces of a dead person?",
						"japanese": "誰かが死者の痕跡を利用しているということか？",
						"chinese": "是有人在利用死者的痕迹吗？",
						"french": "Quelqu'un utilise les traces d'une personne décédée ?",
						"spanish": "¿Alguien está usando rastros de una persona muerta?",
						"vietnamese": "Ai đó đang lợi dụng dấu vết của người đã khuất sao?",
						"thai": "ใครบางคนกำลังใช้ร่องรอยของคนตายงั้นหรือ?",
						"hindi": "क्या कोई मृत व्यक्ति के निशानों का उपयोग कर रहा है?"
					},
					"emotion": "sad",
					"speaker": "character_1"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "bex",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						2
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 공격은… '잊혀진 약속'에 대한 경고 같아.",
						"english": "This attack… seems like a warning about the 'Forgotten Promise'.",
						"japanese": "この攻撃は… 「忘れられた約束」への警告のようだ。",
						"chinese": "这次攻击……似乎是对‘被遗忘的约定’的警告。",
						"french": "Cette attaque… semble être un avertissement concernant la 'Promesse Oubliée'.",
						"spanish": "Este ataque… parece una advertencia sobre la 'Promesa Olvidada'.",
						"vietnamese": "Cuộc tấn công này… dường như là một lời cảnh báo về 'Lời Hứa Bị Lãng Quên'.",
						"thai": "การโจมตีนี้… ดูเหมือนเป็นคำเตือนเกี่ยวกับ 'พันธสัญญาที่ถูกลืม'",
						"hindi": "यह हमला… 'भूले हुए वादे' के बारे में एक चेतावनी जैसा लगता है।"
					},
					"emotion": "sad",
					"speaker": "bex"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "잊혀진 약속?",
						"english": "Forgotten Promise?",
						"japanese": "忘れられた約束？",
						"chinese": "被遗忘的约定？",
						"french": "Promesse Oubliée ?",
						"spanish": "¿Promesa Olvidada?",
						"vietnamese": "Lời Hứa Bị Lãng Quên sao?",
						"thai": "พันธสัญญาที่ถูกลืม?",
						"hindi": "भूला हुआ वादा?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "오래된 전설 속의 '해결사'와 관련 있는 것 같아.",
						"english": "It seems related to the 'Fixer' from an ancient legend.",
						"japanese": "古い伝説の中の「解決屋」と関連があるようだ。",
						"chinese": "似乎与古老传说中的‘解决者’有关。",
						"french": "Cela semble lié au 'Régleur' d'une ancienne légende.",
						"spanish": "Parece relacionado con el 'Solucionador' de una antigua leyenda.",
						"vietnamese": "Dường như nó liên quan đến 'Người Giải Quyết' trong truyền thuyết cổ xưa.",
						"thai": "ดูเหมือนจะเกี่ยวข้องกับ 'ผู้แก้ไข' ในตำนานโบราณ",
						"hindi": "यह एक प्राचीन किंवदंती के 'समाधानकर्ता' से संबंधित लगता है।"
					},
					"speaker": "bex",
					"emotion": "base"
				},
				{
					"speaker": "bex",
					"emotion": "base",
					"content": {
						"korean": "도시 곳곳에 나타나는 '과거의 질서' 표식들이 더 선명해지고 있어.",
						"english": "The 'Order of the Past' symbols appearing throughout the city are becoming clearer.",
						"japanese": "街のあちこちに現れる「過去の秩序」の標識が、より鮮明になっている。",
						"chinese": "城里随处可见的‘过去秩序’的标记变得更加清晰了。",
						"french": "Les symboles de l''Ordre du Passé' apparaissant partout dans la ville deviennent plus clairs.",
						"spanish": "Los símbolos del 'Orden del Pasado' que aparecen por toda la ciudad se están volviendo más claros.",
						"vietnamese": "Các biểu tượng 'Trật Tự Của Quá Khứ' xuất hiện khắp thành phố đang trở nên rõ ràng hơn.",
						"thai": "สัญลักษณ์ 'ระเบียบแห่งอดีต' ที่ปรากฏทั่วเมืองกำลังชัดเจนขึ้น",
						"hindi": "शहर भर में दिखने वाले 'अतीत के आदेश' के निशान और स्पष्ट होते जा रहे हैं।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "그럼 팬텀은… 파괴하려는 게 아니라 지키려는 건가?",
						"english": "So Phantom… isn't trying to destroy, but to protect?",
						"japanese": "ではファントムは… 破壊しようとしているのではなく、守ろうとしているのか？",
						"chinese": "那么幻影……不是想要摧毁，而是想要守护吗？",
						"french": "Alors le Fantôme… n'essaie pas de détruire, mais de protéger ?",
						"spanish": "¿Entonces Phantom… no está intentando destruir, sino proteger?",
						"vietnamese": "Vậy Phantom… không phải đang cố gắng phá hủy mà là bảo vệ sao?",
						"thai": "ถ้าอย่างนั้น แฟนทอม… ไม่ได้ต้องการทำลาย แต่ต้องการปกป้องหรือ?",
						"hindi": "तो फैंटम… नष्ट करने की कोशिश नहीं कर रहा, बल्कि बचाने की कोशिश कर रहा है?"
					},
					"type": "speech",
					"speaker": "character_2",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"speaker": "bex",
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "분석 결과가 나왔어. 팬텀은 스스로를 '감시자'라고 칭하고 있어.",
						"english": "The analysis results are in. Phantom refers to itself as the 'Watcher'.",
						"japanese": "分析結果が出た。ファントムは自らを「監視者」と称している。",
						"chinese": "分析结果出来了。幻影称自己为‘监视者’。",
						"french": "Les résultats de l'analyse sont là. Le Fantôme se décrit comme le 'Gardien'.",
						"spanish": "Los resultados del análisis están listos. Phantom se refiere a sí mismo como el 'Observador'.",
						"vietnamese": "Kết quả phân tích đã có. Phantom tự xưng là 'Kẻ Canh Gác'.",
						"thai": "ผลวิเคราะห์ออกมาแล้ว แฟนทอมเรียกตัวเองว่า 'ผู้เฝ้าระวัง'",
						"hindi": "विश्लेषण के परिणाम आ गए हैं। फैंटम खुद को 'रक्षक' कहता है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "bex"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그는 '잊혀진 약속'에 갇힌 채 도시의 질서를 감시하고 있어.",
						"english": "He is trapped by the 'Forgotten Promise' and watches over the city's order.",
						"japanese": "彼は「忘れられた約束」に囚われたまま、都市の秩序を監視している。",
						"chinese": "他被困在‘被遗忘的约定’中，监视着城市的秩序。",
						"french": "Il est piégé par la 'Promesse Oubliée' et surveille l'ordre de la ville.",
						"spanish": "Está atrapado por la 'Promesa Olvidada' y vigila el orden de la ciudad.",
						"vietnamese": "Hắn bị mắc kẹt bởi 'Lời Hứa Bị Lãng Quên' và đang canh gác trật tự của thành phố.",
						"thai": "เขาถูกขังอยู่ใน 'พันธสัญญาที่ถูกลืม' และเฝ้าระวังความสงบเรียบร้อยของเมือง",
						"hindi": "वह 'भूले हुए वादे' से बंधा हुआ है और शहर की व्यवस्था की निगरानी कर रहा है।"
					},
					"speaker": "bex",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "감시자? 그런데 왜 도시를 공격하는 거지?",
						"english": "A Watcher? But why is he attacking the city?",
						"japanese": "監視者？でも、なぜ都市を攻撃しているんだ？",
						"chinese": "监视者？但他为什么要攻击城市呢？",
						"french": "Un Gardien ? Mais pourquoi attaque-t-il la ville ?",
						"spanish": "¿Un Observador? Pero, ¿por qué está atacando la ciudad?",
						"vietnamese": "Kẻ Canh Gác sao? Nhưng tại sao hắn lại tấn công thành phố?",
						"thai": "ผู้เฝ้าระวัง? แต่ทำไมถึงโจมตีเมืองล่ะ?",
						"hindi": "एक रक्षक? पर वह शहर पर हमला क्यों कर रहा है?"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "그의 방식은 구시대적이야. 왜곡된 질서를 강요하고 있어.",
						"english": "His methods are outdated. He's enforcing a twisted order.",
						"japanese": "彼のやり方は時代遅れだ。歪んだ秩序を強いている。",
						"chinese": "他的方式过时了。他在强行推行扭曲的秩序。",
						"french": "Ses méthodes sont dépassées. Il impose un ordre perverti.",
						"spanish": "Sus métodos son anticuados. Está imponiendo un orden retorcido.",
						"vietnamese": "Cách của hắn đã lỗi thời. Hắn đang áp đặt một trật tự méo mó.",
						"thai": "วิธีการของเขาเก่าคร่ำครึ เขากำลังบังคับใช้ระเบียบที่บิดเบือน",
						"hindi": "उसके तरीके पुराने हैं। वह एक विकृत व्यवस्था थोप रहा है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "bex"
				},
				{
					"type": "speech",
					"content": {
						"korean": "도시의 시스템 붕괴 징후가 더욱 심화되고 있었다.",
						"english": "Signs of the city's system collapse were intensifying.",
						"japanese": "都市のシステム崩壊の兆候はさらに悪化していた。",
						"chinese": "城市系统崩溃的迹象日益加剧。",
						"french": "Les signes d'effondrement du système de la ville s'intensifiaient.",
						"spanish": "Los signos del colapso del sistema de la ciudad se estaban intensificando.",
						"vietnamese": "Các dấu hiệu sụp đổ hệ thống của thành phố ngày càng trầm trọng.",
						"thai": "สัญญาณของการล่มสลายของระบบเมืองกำลังทวีความรุนแรงขึ้น",
						"hindi": "शहर की व्यवस्था के पतन के संकेत और गहराते जा रहे थे।"
					},
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "도시의 심장부에 도달했다. 잊혀진 약속의 감시자가 모습을 드러냈다.",
						"english": "Reached the city's heart. The Watcher of the Forgotten Promise appeared.",
						"japanese": "都市の心臓部に到達した。忘れられた約束の監視者が姿を現した。",
						"chinese": "抵达了城市的核心。被遗忘的契约的守护者现身了。",
						"french": "Atteint le cœur de la ville. Le Gardien de la Promesse Oubliée est apparu.",
						"spanish": "Llegamos al corazón de la ciudad. El Guardián de la Promesa Olvidada apareció.",
						"vietnamese": "Đã đến trung tâm thành phố. Người canh giữ Lời hứa bị lãng quên đã xuất hiện.",
						"thai": "มาถึงใจกลางเมืองแล้ว ผู้พิทักษ์สัญญาที่ถูกลืมได้ปรากฏตัวขึ้น",
						"hindi": "शहर के दिल तक पहुँच गए। भूले हुए वादे का रक्षक प्रकट हुआ।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "어리석은 자들… 이곳에 도달하다니.",
						"english": "Fools… to reach this place.",
						"japanese": "愚か者ども… ここに辿り着くとは。",
						"chinese": "愚蠢的人类……竟敢来到这里。",
						"french": "Insensés… d'atteindre cet endroit.",
						"spanish": "Necios… por llegar a este lugar.",
						"vietnamese": "Lũ ngốc… dám đến được nơi này.",
						"thai": "คนโง่… กล้ามาถึงที่นี่ได้ไง",
						"hindi": "मूर्ख… इस जगह तक पहुँचने की हिम्मत की।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "나는 도시의 잊혀진 약속을 지키는 감시자다. 너희는 이 질서를 파괴하려는가?",
						"english": "I am the Watcher who upholds the city's forgotten promise. Do you intend to destroy this order?",
						"japanese": "私は都市の忘れられた約束を守る監視者だ。貴様らはこの秩序を破壊するつもりか？",
						"chinese": "我是守护城市被遗忘契约的守护者。你们打算破坏这个秩序吗？",
						"french": "Je suis le Gardien qui maintient la promesse oubliée de la ville. Comptez-vous détruire cet ordre ?",
						"spanish": "Soy el Guardián que mantiene la promesa olvidada de la ciudad. ¿Pretenden destruir este orden?",
						"vietnamese": "Ta là Người canh giữ lời hứa bị lãng quên của thành phố. Các ngươi định phá hủy trật tự này sao?",
						"thai": "ข้าคือผู้พิทักษ์ที่รักษาสัญญาที่ถูกลืมของเมือง พวกเจ้าคิดจะทำลายระเบียบนี้หรือ?",
						"hindi": "मैं वह रक्षक हूँ जो शहर के भूले हुए वादे को निभाता है। क्या तुम इस व्यवस्था को नष्ट करना चाहते हो?"
					},
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "네 방식은 혼란만 가져올 뿐이야! 도시를 병들게 하고 있어!",
						"english": "Your methods only bring chaos! You're sickening the city!",
						"japanese": "貴様のやり方は混乱しかもたらさない！都市を病ませている！",
						"chinese": "你的方式只会带来混乱！你在让城市病入膏肓！",
						"french": "Tes méthodes n'apportent que le chaos ! Tu rends la ville malade !",
						"spanish": "¡Tus métodos solo traen caos! ¡Estás enfermando la ciudad!",
						"vietnamese": "Cách của ngươi chỉ mang lại hỗn loạn! Ngươi đang làm thành phố mục ruỗng!",
						"thai": "วิธีการของเจ้ามีแต่จะนำมาซึ่งความวุ่นวาย! เจ้ากำลังทำให้เมืองป่วยไข้!",
						"hindi": "तुम्हारे तरीके केवल अराजकता लाते हैं! तुम शहर को बीमार कर रहे हो!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "이것이… 유일한 방법이다. 감히 나를 막으려는가?",
						"english": "This is… the only way. Do you dare to stop me?",
						"japanese": "これが… 唯一の方法だ。私を止めようというのか？",
						"chinese": "这是……唯一的办法。你们竟敢阻止我？",
						"french": "C'est… le seul moyen. Oseriez-vous m'arrêter ?",
						"spanish": "Esta es… la única forma. ¿Os atrevéis a detenerme?",
						"vietnamese": "Đây là… cách duy nhất. Các ngươi dám ngăn cản ta sao?",
						"thai": "นี่คือ… หนทางเดียว เจ้ากล้าขัดขวางข้าหรือ?",
						"hindi": "यह… एकमात्र तरीका है। क्या तुम मुझे रोकने की हिम्मत करते हो?"
					}
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "크윽… 결국, 너희도 잊게 될 것이다… 이 약속이 얼마나 중요했는지…",
						"english": "Ugh… In the end, you too will forget… how important this promise was…",
						"japanese": "くっ… 結局、お前たちも忘れるだろう… この約束がどれほど重要だったかを…",
						"chinese": "呃……最终，你们也会忘记的……这个契约有多么重要……",
						"french": "Ugh… Au final, vous aussi oublierez… l'importance de cette promesse…",
						"spanish": "Ugh… Al final, vosotros también olvidaréis… cuán importante era esta promesa…",
						"vietnamese": "Khụ… Cuối cùng, các ngươi rồi cũng sẽ quên… lời hứa này quan trọng đến nhường nào…",
						"thai": "อึก… ในที่สุด เจ้าเองก็จะลืม… ว่าสัญญานี้สำคัญแค่ไหน…",
						"hindi": "उह… अंत में, तुम भी भूल जाओगे… यह वादा कितना महत्वपूर्ण था…"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "…우리가 정말 옳은 일을 한 걸까?",
						"english": "…Did we truly do the right thing?",
						"japanese": "…我々は本当に正しいことをしたのか？",
						"chinese": "……我们真的做对了吗？",
						"french": "…Avons-nous vraiment fait ce qu'il fallait ?",
						"spanish": "…¿Hicimos realmente lo correcto?",
						"vietnamese": "…Chúng ta có thực sự đã làm điều đúng đắn không?",
						"thai": "…พวกเราทำสิ่งที่ถูกต้องแล้วจริงหรือ?",
						"hindi": "…क्या हमने वाकई सही काम किया?"
					},
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "감시자는 사라졌지만, 그가 남긴 질문은 도시의 그림자처럼 길게 드리워졌다. 다음 위협이 다가오고 있었다.",
						"english": "The Watcher vanished, but the question he left lingered long like a shadow over the city. The next threat was approaching.",
						"japanese": "監視者は姿を消したが、彼が残した問いは都市の影のように長く残った。次の脅威が迫っていた。",
						"chinese": "守护者消失了，但他留下的疑问像城市上空的阴影一样挥之不去。下一个威胁正在逼近。",
						"french": "Le Gardien disparut, mais la question qu'il laissa plana comme une longue ombre sur la ville. La prochaine menace approchait.",
						"spanish": "El Guardián desapareció, pero la pregunta que dejó se cernió como una larga sombra sobre la ciudad. La siguiente amenaza se acercaba.",
						"vietnamese": "Người canh giữ đã biến mất, nhưng câu hỏi hắn để lại vẫn lơ lửng như một cái bóng dài bao phủ thành phố. Mối đe dọa tiếp theo đang đến gần.",
						"thai": "ผู้พิทักษ์หายตัวไป แต่คำถามที่เขาทิ้งไว้ยังคงอยู่ยาวนานราวกับเงาเหนือเมือง ภัยคุกคามครั้งต่อไปกำลังใกล้เข้ามา",
						"hindi": "रक्षक गायब हो गया, लेकिन उसके द्वारा छोड़ा गया सवाल शहर पर एक लंबी छाया की तरह मंडराता रहा। अगला खतरा आ रहा था।"
					},
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "감시자의 거대한 힘 앞에, 탐험대는 무릎을 꿇었다.",
						"english": "Before the Watcher's immense power, the expedition fell.",
						"japanese": "監視者の絶大な力の前に、探検隊はひざまずいた。",
						"chinese": "在监视者巨大的力量面前，探险队屈服了。",
						"french": "Face à l'immense pouvoir du Gardien, l'expédition s'est agenouillée.",
						"spanish": "Ante el inmenso poder del Vigilante, la expedición se arrodilló.",
						"vietnamese": "Trước sức mạnh to lớn của Kẻ Giám Sát, đoàn thám hiểm đã quỳ gối.",
						"thai": "เบื้องหน้าพลังอันมหาศาลของผู้เฝ้าระวัง คณะสำรวจได้คุกเข่าลง",
						"hindi": "चौकीदार की अपार शक्ति के सामने, अन्वेषण दल घुटनों पर आ गया।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 자들… 너희에겐 이 질서를 이해할 자격이 없다.",
						"english": "Fools... You lack the right to comprehend this order.",
						"japanese": "愚か者どもめ… お前たちにこの秩序を理解する資格はない。",
						"chinese": "愚蠢的家伙……你们没有资格理解这个秩序。",
						"french": "Imbéciles... Vous n'avez pas le droit de comprendre cet ordre.",
						"spanish": "Necios... No tenéis el derecho de comprender este orden.",
						"vietnamese": "Lũ ngu ngốc... Các ngươi không đủ tư cách để hiểu trật tự này.",
						"thai": "พวกโง่เขลา... พวกเจ้าไม่มีสิทธิ์ที่จะเข้าใจระเบียบนี้",
						"hindi": "मूर्खों... तुम्हें इस व्यवस्था को समझने का कोई अधिकार नहीं है।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "…아직 끝나지 않았어. 우리는 포기하지 않아!",
						"english": "...It's not over yet. We won't surrender!",
						"japanese": "…まだ終わってない。私たちは諦めない！",
						"chinese": "……还没结束。我们不会放弃！",
						"french": "...Ce n'est pas encore fini. Nous n'abandonnerons pas !",
						"spanish": "...Aún no ha terminado. ¡No nos rendiremos!",
						"vietnamese": "...Chưa kết thúc đâu. Chúng ta sẽ không bỏ cuộc!",
						"thai": "...ยังไม่จบ เราไม่ยอมแพ้!",
						"hindi": "...अभी खत्म नहीं हुआ है। हम हार नहीं मानेंगे!"
					},
					"type": "speech"
				}
			]
		}
	]
} as const;
