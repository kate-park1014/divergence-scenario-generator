export const scenario_forest_florazonia_9_01 = {
	"scenario_id": "forest_florazonia_9_01",
	"order": 1,
	"act": "intro",
	"theme": "forest",
	"actors": {
		"bracken": {
			"id": "mon_48cf29be-dbc0-44b1-bbb3-ecda1d14742d",
			"name": {
				"korean": "브라켄",
				"english": "Bracken",
				"japanese": "ブラッケン",
				"chinese": "布莱肯",
				"french": "Bracken",
				"spanish": "Bracken",
				"vietnamese": "Bracken",
				"thai": "แบรกเคน",
				"hindi": "ब्रैकेन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5b494da6-ffd7-43d3-7171-7ac84bdfe400/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/4a7a1b62-d7a7-4a21-ffd5-fa9b5de82100/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"고대 마법의 숲. 그곳에 금지된 난초가 피었다.",
			"기묘한 빛에 홀린 자들은 숲의 깊숙한 곳으로 이끌렸다.",
			"안내자의 경고도, 이성을 붙잡기엔 역부족이었다.",
			"어떤 진실이 그들을 기다릴지, 아무도 알 수 없었다."
		],
		"english": [
			"Ancient magical forest. There, a forbidden orchid bloomed.",
			"Those enchanted by the strange light were drawn deep into the forest.",
			"Even the guide's warnings were not enough to hold onto reason.",
			"No one knew what truth awaited them."
		],
		"japanese": [
			"古代魔法の森。そこに禁断の蘭が咲き乱れた。",
			"奇妙な光に魅せられた者たちは、森の奥深くへと誘われた。",
			"案内者の警告も、理性を保つには力不足だった。",
			"どんな真実が彼らを待っているのか、誰も知る由もなかった。"
		],
		"chinese": [
			"古老的魔法森林。那里，禁忌的兰花盛开了。",
			"被奇光迷惑的人们，被引向了森林深处。",
			"即使是向导的警告，也无法挽留他们的理智。",
			"没有人知道什么样的真相在等待着他们。"
		],
		"french": [
			"Ancienne forêt magique. Là, une orchidée interdite s'épanouissait.",
			"Ceux qui étaient enchantés par l'étrange lumière furent entraînés au plus profond de la forêt.",
			"Même les avertissements du guide n'étaient pas suffisants pour garder la raison.",
			"Personne ne savait quelle vérité les attendait."
		],
		"spanish": [
			"Antiguo bosque mágico. Allí floreció una orquídea prohibida.",
			"Aquellos encantados por la extraña luz fueron arrastrados a lo más profundo del bosque.",
			"Ni siquiera las advertencias del guía fueron suficientes para mantener la razón.",
			"Nadie sabía qué verdad les esperaba."
		],
		"vietnamese": [
			"Khu rừng ma thuật cổ xưa. Ở đó, một bông lan cấm kỵ đã nở.",
			"Những người bị mê hoặc bởi ánh sáng kỳ lạ đã bị cuốn hút vào sâu trong rừng.",
			"Ngay cả lời cảnh báo của người dẫn đường cũng không đủ để giữ lấy lý trí.",
			"Không ai biết sự thật nào đang chờ đợi họ."
		],
		"thai": [
			"ป่าเวทมนตร์โบราณ ที่นั่น กล้วยไม้ต้องห้ามได้เบ่งบาน",
			"ผู้ที่ต้องมนต์สะกดด้วยแสงประหลาด ถูกดึงดูดเข้าสู่ส่วนลึกของป่า",
			"แม้แต่คำเตือนของผู้นำทางก็ไม่เพียงพอที่จะยึดมั่นในเหตุผล",
			"ไม่มีใครรู้ว่าความจริงใดรอพวกเขาอยู่"
		],
		"hindi": [
			"प्राचीन जादुई वन। वहाँ, एक वर्जित ऑर्किड खिला।",
			"अजीब रोशनी से मोहित हुए लोग जंगल की गहराई में खींच लिए गए।",
			"गाइड की चेतावनी भी तर्क को बनाए रखने के लिए पर्याप्त नहीं थी।",
			"कोई नहीं जानता था कि कौन सी सच्चाई उनका इंतजार कर रही थी।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "고대 마법의 숲 입구에 도착했다. 기묘한 기운이 느껴진다.",
						"english": "Arrived at the entrance of the ancient magical forest. A strange aura is felt.",
						"japanese": "古代魔法の森の入り口に到着した。奇妙な気配がする。",
						"chinese": "抵达古老魔法森林入口。感受到一股奇异的气息。",
						"french": "Arrivé à l'entrée de l'ancienne forêt magique. Une étrange aura se fait sentir.",
						"spanish": "Llegamos a la entrada del antiguo bosque mágico. Se siente una extraña aura.",
						"vietnamese": "Đã đến lối vào khu rừng ma thuật cổ xưa. Cảm thấy một luồng khí kỳ lạ.",
						"thai": "มาถึงทางเข้าป่าเวทมนตร์โบราณ สัมผัสได้ถึงกลิ่นอายประหลาด",
						"hindi": "प्राचीन जादुई वन के प्रवेश द्वार पर पहुँच गए। एक अजीब आभा महसूस होती है।"
					}
				},
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "bracken"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "잠시 멈춰라. 이 숲은… 예전 같지 않다.",
						"english": "Stop for a moment. This forest... is not like it used to be.",
						"japanese": "少し立ち止まれ。この森は…以前とは違う。",
						"chinese": "停一下。这片森林……已经和以前不一样了。",
						"french": "Arrête-toi un instant. Cette forêt... n'est plus ce qu'elle était.",
						"spanish": "Detente un momento. Este bosque... no es como antes.",
						"vietnamese": "Dừng lại một chút. Khu rừng này... không còn như xưa nữa.",
						"thai": "หยุดเดี๋ยวนี้ ป่าแห่งนี้... ไม่เหมือนเดิมแล้ว",
						"hindi": "एक पल के लिए रुक जाओ। यह जंगल... पहले जैसा नहीं है।"
					},
					"speaker": "bracken"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "당신은 누구지?",
						"english": "Who are you?",
						"japanese": "貴様は誰だ？",
						"chinese": "你是谁？",
						"french": "Qui êtes-vous ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Ngươi là ai?",
						"thai": "คุณเป็นใคร?",
						"hindi": "तुम कौन हो?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "브라켄이다. 이 숲의 안내자였지. 지금은… 경고하는 자.",
						"english": "I am Bracken. I was this forest's guide. Now... I am the one who warns.",
						"japanese": "ブラッケンだ。この森の案内者だった。今は…警告する者。",
						"chinese": "我是布拉肯。曾是这片森林的向导。现在……是警告者。",
						"french": "Je suis Bracken. J'étais le guide de cette forêt. Maintenant... je suis celui qui prévient.",
						"spanish": "Soy Bracken. Fui el guía de este bosque. Ahora... soy el que advierte.",
						"vietnamese": "Ta là Bracken. Ta từng là người dẫn đường của khu rừng này. Bây giờ... ta là người cảnh báo.",
						"thai": "ฉันคือแบร็กเคน เคยเป็นผู้นำทางของป่าแห่งนี้ ตอนนี้... เป็นผู้เตือน",
						"hindi": "मैं ब्रेकेन हूँ। मैं इस जंगल का मार्गदर्शक था। अब... मैं वह हूँ जो चेतावनी देता है।"
					},
					"speaker": "bracken"
				},
				{
					"speaker": "character_1",
					"emotion": "happy",
					"content": {
						"korean": "저 난초 좀 봐. 빛나고 있어.",
						"english": "Look at that orchid. It's glowing.",
						"japanese": "あの蘭を見て。輝いている。",
						"chinese": "看那朵兰花。它正在发光。",
						"french": "Regarde cette orchidée. Elle brille.",
						"spanish": "Mira esa orquídea. Está brillando.",
						"vietnamese": "Nhìn bông lan đó kìa. Nó đang phát sáng.",
						"thai": "ดูนั่นสิ กล้วยไม้นั่นกำลังเปล่งแสง",
						"hindi": "उस ऑर्किड को देखो। वह चमक रहा है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "bracken",
					"emotion": "sad",
					"content": {
						"korean": "가까이 가지 마라. 그 빛에 홀리면….",
						"english": "Don't go near it. If you're enchanted by that light...",
						"japanese": "近づくな。その光に魅せられたら…。",
						"chinese": "别靠近。如果被那光迷惑了……",
						"french": "Ne t'approche pas. Si tu es enchanté par cette lumière...",
						"spanish": "No te acerques. Si te dejas encantar por esa luz...",
						"vietnamese": "Đừng lại gần. Nếu bị ánh sáng đó mê hoặc...",
						"thai": "อย่าเข้าไปใกล้ ถ้าหากถูกแสงนั้นหลงใหล...",
						"hindi": "उसके पास मत जाओ। अगर तुम उस रोशनी से मोहित हो गए तो..."
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "bracken",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "bracken",
					"emotion": "base",
					"content": {
						"korean": "계속 안쪽으로 이끌리는군.",
						"english": "I'm drawn further inward.",
						"japanese": "どんどん奥へ引き寄せられる。",
						"chinese": "我一直被吸引到深处。",
						"french": "Je suis attiré plus loin à l'intérieur.",
						"spanish": "Me siento atraído más hacia adentro.",
						"vietnamese": "Tôi cứ bị kéo sâu vào trong.",
						"thai": "ฉันถูกดึงดูดเข้าไปข้างในเรื่อยๆ",
						"hindi": "मैं अंदर की ओर खिंचा चला जा रहा हूँ।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "숲이 이상해. 마력이 강해지는 느낌이야.",
						"english": "The forest is strange. I feel the magic growing stronger.",
						"japanese": "森がおかしい。魔力が強くなっている感じだ。",
						"chinese": "森林很奇怪。我感觉到魔力越来越强了。",
						"french": "La forêt est étrange. Je sens la magie se renforcer.",
						"spanish": "El bosque es extraño. Siento que la magia se vuelve más fuerte.",
						"vietnamese": "Khu rừng thật lạ. Tôi cảm thấy ma lực đang mạnh lên.",
						"thai": "ป่าแปลกไป ฉันรู้สึกว่าพลังเวทมนตร์แข็งแกร่งขึ้น",
						"hindi": "जंगल अजीब है। मुझे लगता है कि जादू और भी मजबूत होता जा रहा है।"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "숲 깊숙한 곳에서 마력의 잔류가 감지되고 있다. 불안정한 기운이지.",
						"english": "Residual magic is detected deep within the forest. It's an unstable aura.",
						"japanese": "森の奥深くで魔力の残滓が感知される。不安定な気配だ。",
						"chinese": "森林深处探测到魔力残留。那是一种不稳定的气息。",
						"french": "Des résidus de magie sont détectés au plus profond de la forêt. C'est une aura instable.",
						"spanish": "Se detectan restos de magia en lo profundo del bosque. Es un aura inestable.",
						"vietnamese": "Phát hiện tàn dư ma lực sâu trong rừng. Đó là một luồng khí bất ổn.",
						"thai": "ตรวจพบพลังเวทมนตร์ตกค้างลึกเข้าไปในป่า เป็นพลังงานที่ไม่เสถียร",
						"hindi": "जंगल के गहरे भीतर जादू के अवशेष का पता चला है। यह एक अस्थिर आभा है।"
					},
					"speaker": "bracken",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "난초 때문인가? 점점 더 끌려.",
						"english": "Is it because of the orchids? I'm drawn in deeper and deeper.",
						"japanese": "蘭のせいか？どんどん引き込まれる。",
						"chinese": "是因为兰花吗？我越来越被吸引了。",
						"french": "Est-ce à cause des orchidées ? Je suis de plus en plus attiré.",
						"spanish": "¿Es por las orquídeas? Me siento cada vez más atraído.",
						"vietnamese": "Có phải vì hoa lan không? Tôi càng ngày càng bị cuốn hút.",
						"thai": "เป็นเพราะกล้วยไม้หรือเปล่า? ฉันถูกดึงดูดเข้าไปเรื่อยๆ",
						"hindi": "क्या यह ऑर्किड के कारण है? मैं और अधिक खींचा चला जा रहा हूँ।"
					},
					"speaker": "character_2"
				},
				{
					"speaker": "bracken",
					"emotion": "angry",
					"content": {
						"korean": "난초의 유혹은 숲의 균형을 깨뜨리고 있다.",
						"english": "The allure of the orchids is disrupting the forest's balance.",
						"japanese": "蘭の誘惑が森の均衡を崩している。",
						"chinese": "兰花的诱惑正在破坏森林的平衡。",
						"french": "L'attrait des orchidées rompt l'équilibre de la forêt.",
						"spanish": "El encanto de las orquídeas está rompiendo el equilibrio del bosque.",
						"vietnamese": "Sự cám dỗ của hoa lan đang phá vỡ sự cân bằng của khu rừng.",
						"thai": "เสน่ห์ของกล้วยไม้กำลังทำลายความสมดุลของป่า",
						"hindi": "ऑर्किड का आकर्षण जंगल के संतुलन को बिगाड़ रहा है।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "bracken",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "저 식물들을 봐라. 색은 화려하지만….",
						"english": "Look at those plants. Their colors are vivid, but...",
						"japanese": "あの植物たちを見ろ。色は鮮やかだが…。",
						"chinese": "看那些植物。颜色很鲜艳，但是...",
						"french": "Regarde ces plantes. Leurs couleurs sont vives, mais...",
						"spanish": "Mira esas plantas. Sus colores son vívidos, pero...",
						"vietnamese": "Hãy nhìn những loài thực vật kia. Màu sắc rực rỡ nhưng...",
						"thai": "ดูพืชเหล่านั้นสิ สีสันสดใส แต่...",
						"hindi": "उन पौधों को देखो। उनके रंग चमकीले हैं, लेकिन..."
					},
					"emotion": "sad",
					"speaker": "bracken",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "어? 만져보니 시들었어. 죽어있어.",
						"english": "Huh? I touched them, and they're withered. Dead.",
						"japanese": "あれ？触ってみると、しおれている。枯れている。",
						"chinese": "嗯？我摸了一下，它们枯萎了。死了。",
						"french": "Hein ? Je les ai touchés, et ils sont flétris. Morts.",
						"spanish": "¿Eh? Los toqué y están marchitos. Muertos.",
						"vietnamese": "Ơ? Chạm vào thì thấy chúng héo úa. Chết rồi.",
						"thai": "อ๊ะ? ลองจับดูแล้วเหี่ยวเฉา ตายแล้ว",
						"hindi": "अरे? मैंने उन्हें छुआ, और वे मुरझा गए हैं। मर चुके हैं।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "생명을 빨아먹고 겉만 번지르르한 것들이다.",
						"english": "They feed on life, leaving only a dazzling facade.",
						"japanese": "生命を吸い取り、見かけだけが派手なものたちだ。",
						"chinese": "它们吸食生命，徒有华丽的外表。",
						"french": "Ils se nourrissent de la vie, ne laissant qu'une façade clinquante.",
						"spanish": "Chupan la vida, dejando solo una apariencia vistosa.",
						"vietnamese": "Chúng hút cạn sự sống, chỉ còn lại vẻ ngoài hào nhoáng.",
						"thai": "พวกมันดูดกลืนชีวิต คงไว้แต่เพียงรูปลักษณ์ที่ฉูดฉาด",
						"hindi": "वे जीवन को चूस लेते हैं, केवल एक भड़कीला बाहरी भाग छोड़ देते हैं।"
					},
					"speaker": "bracken"
				},
				{
					"speaker": "character_3",
					"emotion": "base",
					"content": {
						"korean": "난초도 그런 건가?",
						"english": "Are the orchids like that too?",
						"japanese": "蘭もそうなのだろうか？",
						"chinese": "兰花也是这样的吗？",
						"french": "Les orchidées sont-elles comme ça aussi ?",
						"spanish": "¿Las orquídeas también son así?",
						"vietnamese": "Hoa lan cũng vậy sao?",
						"thai": "กล้วยไม้ก็เป็นแบบนั้นด้วยเหรอ?",
						"hindi": "क्या ऑर्किid भी ऐसे ही हैं?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "bracken",
					"emotion": "sad",
					"content": {
						"korean": "…더 깊이 들어가기 전에 돌아가는 게 현명할 거다.",
						"english": "...It would be wise to turn back before going deeper.",
						"japanese": "…これ以上深く進む前に、引き返すのが賢明だろう。",
						"chinese": "……在深入之前，回头是明智之举。",
						"french": "...Il serait sage de faire demi-tour avant d'aller plus loin.",
						"spanish": "...Sería prudente regresar antes de adentrarse más.",
						"vietnamese": "...Sẽ khôn ngoan nếu quay lại trước khi đi sâu hơn.",
						"thai": "...มันจะฉลาดกว่าที่จะหันหลังกลับก่อนที่จะเข้าไปลึกกว่านี้",
						"hindi": "…इससे पहले कि हम और गहराई में जाएँ, वापस लौटना बुद्धिमानी होगी।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "bracken"
				},
				{
					"type": "speech",
					"speaker": "bracken",
					"emotion": "sad",
					"content": {
						"korean": "이제 정말 늦었다. 돌아갈 수 없다.",
						"english": "It's too late now. There's no turning back.",
						"japanese": "もう本当に遅い。引き返せない。",
						"chinese": "真的太迟了。无法回头了。",
						"french": "Il est vraiment trop tard. On ne peut plus reculer.",
						"spanish": "Ya es demasiado tarde. No hay vuelta atrás.",
						"vietnamese": "Giờ thì quá muộn rồi. Không thể quay lại được nữa.",
						"thai": "ตอนนี้สายเกินไปแล้ว กลับตัวไม่ได้แล้ว",
						"hindi": "अब बहुत देर हो चुकी है। वापस नहीं जा सकते।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "난초가 저기 있어. 거대한 그림자가 보인다.",
						"english": "The orchid is there. I see a giant shadow.",
						"japanese": "蘭があそこにある。巨大な影が見える。",
						"chinese": "兰花就在那里。我看到了一个巨大的影子。",
						"french": "L'orchidée est là. Je vois une ombre gigantesque.",
						"spanish": "La orquídea está allí. Veo una sombra gigante.",
						"vietnamese": "Hoa lan ở đằng kia. Tôi thấy một cái bóng khổng lồ.",
						"thai": "กล้วยไม้อยู่ตรงนั้น ฉันเห็นเงาขนาดใหญ่",
						"hindi": "ऑchid वहाँ है। मुझे एक विशाल छाया दिख रही है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "bracken",
					"content": {
						"korean": "그림자에 현혹되지 마라. 모든 것을 잃게 될 것이다.",
						"english": "Don't be seduced by the shadow. You will lose everything.",
						"japanese": "影に惑わされるな。全てを失うだろう。",
						"chinese": "不要被影子迷惑。你将失去一切。",
						"french": "Ne te laisse pas séduire par l'ombre. Tu perdras tout.",
						"spanish": "No te dejes seducir por la sombra. Lo perderás todo.",
						"vietnamese": "Đừng bị cái bóng mê hoặc. Ngươi sẽ mất tất cả.",
						"thai": "อย่าหลงระเริงกับเงากับเจ้าจะสูญเสียทุกสิ่ง",
						"hindi": "छाया से मोहित मत हो। तुम सब कुछ खो दोगे।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "character_4",
					"content": {
						"korean": "후회는 없어. 난초의 비밀을 파헤쳐야 해.",
						"english": "No regrets. I must uncover the orchid's secret.",
						"japanese": "後悔はない。蘭の秘密を暴かねば。",
						"chinese": "没有后悔。我必须揭开兰花的秘密。",
						"french": "Aucun regret. Je dois découvrir le secret de l'orchidée.",
						"spanish": "Sin arrepentimientos. Debo desvelar el secreto de la orquídea.",
						"vietnamese": "Không hối tiếc. Ta phải vén màn bí mật của hoa lan.",
						"thai": "ไม่มีความเสียใจ ฉันต้องเปิดเผยความลับของกล้วยไม้",
						"hindi": "कोई पछतावा नहीं। मुझे ऑर्किड का रहस्य जानना होगा।"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "숲의 가장 깊은 곳. 거대한 그림자가 일렁였다.",
						"english": "The deepest part of the forest. A giant shadow flickered.",
						"japanese": "森の最も深い場所。巨大な影が揺らめいた。",
						"chinese": "森林最深处。一个巨大的影子在摇曳。",
						"french": "Le plus profond de la forêt. Une ombre gigantesque vacillait.",
						"spanish": "La parte más profunda del bosque. Una sombra gigante parpadeó.",
						"vietnamese": "Nơi sâu thẳm nhất của khu rừng. Một cái bóng khổng lồ chập chờn.",
						"thai": "ส่วนที่ลึกที่สุดของป่า เงาขนาดใหญ่สั่นไหว",
						"hindi": "जंगल के सबसे गहरे हिस्से में। एक विशाल छाया झिलमिला रही थी।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "감히 이곳까지 오다니. 어리석은 인간들.",
						"english": "How dare you come this far. Foolish humans.",
						"japanese": "よくもここまで来たな。愚かな人間たちめ。",
						"chinese": "竟敢来到这里。愚蠢的人类。",
						"french": "Comment osez-vous venir jusqu'ici. Humains stupides.",
						"spanish": "¿Cómo osas llegar hasta aquí? Estúpidos humanos.",
						"vietnamese": "Ngươi dám đến tận đây sao. Loài người ngu xuẩn.",
						"thai": "กล้าดียังไงถึงมาได้ไกลขนาดนี้ มนุษย์โง่เขลา",
						"hindi": "इतनी दूर आने की तुम्हारी हिम्मत कैसे हुई। मूर्ख इंसान।"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "네가 난초 괴물인가!",
						"english": "Are you the orchid monster!",
						"japanese": "お前が蘭の怪物か！",
						"chinese": "你就是兰花怪物吗！",
						"french": "C'est toi le monstre de l'orchidée !",
						"spanish": "¡¿Tú eres el monstruo de la orquídea?!",
						"vietnamese": "Ngươi là quái vật hoa lan sao!",
						"thai": "แกคือกล้วยไม้ปีศาจงั้นหรือ!",
						"hindi": "क्या तुम ऑर्किड राक्षस हो!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "탐욕스러운 빛에 홀린 자들에게… 종말을 선사하리라.",
						"english": "To those seduced by greedy light... I shall bring forth their end.",
						"japanese": "貪欲な光に魅せられた者たちに… 終焉を授けよう。",
						"chinese": "对于那些被贪婪之光诱惑的人……我将赐予他们终结。",
						"french": "À ceux séduits par la lumière avide... j'apporterai la fin.",
						"spanish": "A aquellos seducidos por la luz de la avaricia... les concederé el fin.",
						"vietnamese": "Đối với những kẻ bị ánh sáng tham lam mê hoặc… ta sẽ ban cho chúng sự diệt vong.",
						"thai": "สำหรับผู้ที่หลงใหลในแสงอันโลภมาก... ข้าจะนำพาจุดจบมาให้",
						"hindi": "लालची प्रकाश से मोहित लोगों को… मैं उनका अंत लाऊंगा।"
					},
					"speaker": "random_boss"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "난초 괴물의 강력한 힘에 압도당했다.",
						"english": "Overwhelmed by the Orchid Monster's immense power.",
						"japanese": "蘭の怪物の強大な力に圧倒された。",
						"chinese": "被兰花怪物强大的力量压倒了。",
						"french": "Submergé par la puissance écrasante du Monstre Orchidée.",
						"spanish": "Abrumado por el inmenso poder del Monstruo Orquídea.",
						"vietnamese": "Bị áp đảo bởi sức mạnh to lớn của Quái vật Lan.",
						"thai": "ถูกครอบงำด้วยพลังอันมหาศาลของสัตว์ประหลาดกล้วยไม้",
						"hindi": "ऑर्किड मॉन्स्टर की अपार शक्ति से अभिभूत।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "어리석은 것들. 너희의 탐욕이 숲을 파멸시킬 것이다.",
						"english": "Foolish creatures. Your greed will destroy the forest.",
						"japanese": "愚かな者たちめ。お前たちの貪欲さが森を破滅させるだろう。",
						"chinese": "愚蠢的家伙。你们的贪婪将毁灭森林。",
						"french": "Créatures stupides. Votre cupidité détruira la forêt.",
						"spanish": "Criaturas estúpidas. Vuestra codicia destruirá el bosque.",
						"vietnamese": "Những kẻ ngu ngốc. Lòng tham của các ngươi sẽ hủy diệt khu rừng.",
						"thai": "เจ้าพวกโง่เขลา ความโลภของพวกเจ้าจะทำลายป่า",
						"hindi": "मूर्ख प्राणी। तुम्हारा लालच जंगल को नष्ट कर देगा।"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "젠장… 다시 돌아올 거야!",
						"english": "Damn it... I'll be back!",
						"japanese": "くそ… また戻ってくるぞ！",
						"chinese": "该死……我还会回来的！",
						"french": "Mince… Je reviendrai !",
						"spanish": "Maldita sea... ¡Volveré!",
						"vietnamese": "Chết tiệt… Ta sẽ quay lại!",
						"thai": "ให้ตายเถอะ... ฉันจะกลับมา!",
						"hindi": "धिक्कार है... मैं वापस आऊँगा!"
					}
				}
			],
			"win_dialogue": [
				{
					"emotion": "sad",
					"content": {
						"korean": "크으… 네놈들이… 감히…! 하지만… 난초는… 계속 피어날 것이다….",
						"english": "Ugh... You... how dare you...! But... the orchid... will continue to bloom...",
						"japanese": "くぅ…貴様らが…よくも…！だが…蘭は…咲き続けるだろう…。",
						"chinese": "呃…你们…竟敢…！但是…兰花…会继续绽放…。",
						"french": "Argh... Vous... comment osez-vous...! Mais... l'orchidée... continuera de fleurir...",
						"spanish": "Ugh... ¡Vosotros... cómo osáis...! Pero... la orquídea... seguirá floreciendo...",
						"vietnamese": "Khụ… Bọn ngươi… dám…! Nhưng… hoa lan… sẽ tiếp tục nở…",
						"thai": "อึก... พวกแก... กล้าดียังไง...! แต่... กล้วยไม้... จะยังคงเบ่งบานต่อไป...",
						"hindi": "उह… तुम… तुम्हारी हिम्मत कैसे हुई…! लेकिन… ऑर्किड… खिलना जारी रखेगा…।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "쓰러뜨렸다!",
						"english": "We defeated it!",
						"japanese": "倒した！",
						"chinese": "击败了！",
						"french": "Nous l'avons vaincu !",
						"spanish": "¡Lo hemos derrotado!",
						"vietnamese": "Đã đánh bại rồi!",
						"thai": "โค่นล้มได้แล้ว!",
						"hindi": "हमने उसे हरा दिया!"
					},
					"emotion": "happy"
				},
				{
					"speaker": "bracken",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "bracken",
					"emotion": "sad",
					"content": {
						"korean": "숲은 잠시 숨을 돌리겠군. 하지만… 이건 시작일 뿐이다.",
						"english": "The forest can breathe for a moment. But... this is just the beginning.",
						"japanese": "森は少し息を吹き返すだろう。だが…これは始まりに過ぎない。",
						"chinese": "森林可以暂时喘息了。但是……这只是个开始。",
						"french": "La forêt peut souffler un instant. Mais… ce n'est que le début.",
						"spanish": "El bosque puede respirar un momento. Pero... esto es solo el principio.",
						"vietnamese": "Rừng có thể nghỉ ngơi một lát. Nhưng… đây chỉ là sự khởi đầu.",
						"thai": "ป่าจะได้พักหายใจชั่วคราว แต่... นี่เป็นเพียงจุดเริ่มต้นเท่านั้น",
						"hindi": "जंगल कुछ देर के लिए साँस ले पाएगा। लेकिन... यह तो बस शुरुआत है।"
					}
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "난초 괴물의 죽음은 잠시의 평화를 가져왔다. 하지만 숲의 기묘한 마력은 사라지지 않았다.",
						"english": "The death of the Orchid Monster brought a brief peace. But the forest's strange magic hasn't vanished.",
						"japanese": "蘭の怪物の死は一時的な平和をもたらした。しかし、森の奇妙な魔力は消えていない。",
						"chinese": "兰花怪物的死亡带来了短暂的和平。但森林奇异的魔力并未消失。",
						"french": "La mort du Monstre Orchidée a apporté une brève paix. Mais la magie étrange de la forêt n'a pas disparu.",
						"spanish": "La muerte del Monstruo Orquídea trajo una paz breve. Pero la extraña magia del bosque no ha desaparecido.",
						"vietnamese": "Cái chết của Quái vật Lan đã mang lại sự bình yên tạm thời. Nhưng ma lực kỳ lạ của khu rừng vẫn chưa biến mất.",
						"thai": "การตายของสัตว์ประหลาดกล้วยไม้ได้นำพาสันติสุขมาช่วงสั้นๆ แต่เวทมนตร์อันแปลกประหลาดของป่าก็ยังไม่หายไป",
						"hindi": "ऑर्किड मॉन्स्टर की मौत से कुछ पल की शांति मिली। लेकिन जंगल का अजीब जादू अभी खत्म नहीं हुआ है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "고대 의식의 흔적은 더 깊은 숲 속에 숨어있었다. 모험은 계속된다.",
						"english": "Traces of an ancient ritual were hidden deeper in the forest. The adventure continues.",
						"japanese": "古代の儀式の痕跡は、森のさらに奥深くに隠されていた。冒険は続く。",
						"chinese": "古老仪式的痕迹隐藏在更深的森林里。冒险仍在继续。",
						"french": "Les traces d'un rituel ancien étaient cachées plus profondément dans la forêt. L'aventure continue.",
						"spanish": "Las huellas de un antiguo ritual se ocultaban en lo más profundo del bosque. La aventura continúa.",
						"vietnamese": "Dấu vết của nghi lễ cổ xưa ẩn sâu hơn trong rừng. Cuộc phiêu lưu tiếp tục.",
						"thai": "ร่องรอยของพิธีกรรมโบราณซ่อนอยู่ในป่าลึก การผจญภัยยังคงดำเนินต่อไป",
						"hindi": "प्राचीन अनुष्ठान के निशान जंगल में और गहराई तक छिपे थे। रोमांच जारी है।"
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"id": 15
		}
	]
} as const;
