export const scenario_Lumen_Echoes_04 = {
	"scenario_id": "Lumen_Echoes_04",
	"order": 4,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"soot": {
			"id": "mon_a0491490-e114-44d8-855c-d2d63b020da1",
			"name": {
				"korean": "그을음",
				"english": "Soot",
				"japanese": "煤",
				"chinese": "煤烟",
				"french": "Suie",
				"spanish": "Hollín",
				"vietnamese": "Bồ hóng",
				"thai": "เขม่า",
				"hindi": "कालिख"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2275d372-4e89-4725-193c-fccc0b944300/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/d1d5ba2b-da7c-4b75-42de-07c9cdda5d00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"세계는 구원받았다. 루멘의 손에.",
			"고요는 영혼을 갉아먹는 칼날이었다.",
			"평화라는 이름 아래, 모두가 침묵했다.",
			"하지만 어떤 의지는, 여전히 꿈틀거렸다.",
			"그 꿈틀거림이, 새로운 악몽을 깨웠다."
		],
		"english": [
			"The world was saved. By Lumen's hand.",
			"Silence was a blade, gnawing at the soul.",
			"In the name of peace, all fell silent.",
			"Yet, a certain will still stirred.",
			"That stirring awoke a new nightmare."
		],
		"japanese": [
			"世界は救われた。ルーメンの手によって。",
			"静寂は魂を蝕む刃だった。",
			"平和という名の元、皆が沈黙した。",
			"しかし、ある意思は、依然として蠢いていた。",
			"その蠢きが、新たな悪夢を目覚めさせた。"
		],
		"chinese": [
			"世界得救了。在卢曼的手中。",
			"寂静是腐蚀灵魂的刀刃。",
			"在和平之名下，所有人都沉默了。",
			"但某种意志，仍在蠕动。",
			"那蠕动，唤醒了新的噩梦。"
		],
		"french": [
			"Le monde fut sauvé. Par la main de Lumen.",
			"Le silence était une lame rongeant l'âme.",
			"Au nom de la paix, tous se turent.",
			"Mais une certaine volonté frémissait encore.",
			"Ce frémissement éveilla un nouveau cauchemar."
		],
		"spanish": [
			"El mundo fue salvado. Por la mano de Lumen.",
			"El silencio era una hoja que carcomía el alma.",
			"En nombre de la paz, todos callaron.",
			"Pero una cierta voluntad aún se agitaba.",
			"Ese agitar despertó una nueva pesadilla."
		],
		"vietnamese": [
			"Thế giới đã được cứu. Bởi bàn tay của Lumen.",
			"Sự tĩnh lặng là lưỡi dao gặm nhấm linh hồn.",
			"Dưới danh nghĩa hòa bình, tất cả đều im lặng.",
			"Nhưng một ý chí nào đó, vẫn còn lay động.",
			"Sự lay động đó, đã đánh thức một cơn ác mộng mới."
		],
		"thai": [
			"โลกได้รับการกอบกู้แล้ว ด้วยมือของลูเมน",
			"ความเงียบสงบคือคมมีดที่กัดกินจิตวิญญาณ",
			"ภายใต้ชื่อของสันติภาพ ทุกคนต่างเงียบงัน",
			"แต่เจตจำนงหนึ่งยังคงคุกรุ่น",
			"การคุกรุ่นนั้นปลุกฝันร้ายครั้งใหม่"
		],
		"hindi": [
			"दुनिया बच गई। ल्यूमेन के हाथों।",
			"सन्नाटा आत्मा को कुरेदने वाली तलवार था।",
			"शांति के नाम पर, सब खामोश थे।",
			"लेकिन कोई इच्छा, अब भी मचल रही थी।",
			"उस हलचल ने, एक नया दुःस्वप्न जगाया।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "심연은 고요했다. 죽은 듯, 혹은 구원받은 듯.",
						"english": "The abyss was silent. As if dead, or saved.",
						"japanese": "深淵は静寂だった。死んだように、あるいは救われたように。",
						"chinese": "深渊寂静无声。仿佛已死，又或已得救赎。",
						"french": "L'abîme était silencieux. Comme mort, ou comme sauvé.",
						"spanish": "El abismo estaba en silencio. Como muerto, o como salvado.",
						"vietnamese": "Vực sâu tĩnh lặng. Như đã chết, hoặc như đã được cứu rỗi.",
						"thai": "ห้วงเหวลึกเงียบสงบ ราวกับตายไปแล้ว หรือได้รับการไถ่บาป",
						"hindi": "अथाह गहराई शांत थी। जैसे मृत, या जैसे मोक्ष प्राप्त।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						5,
						2
					],
					"action": "enter",
					"speaker": "soot"
				},
				{
					"content": {
						"korean": "이게 진정한 평화다. 루멘께서 모든 고통을 거두셨지.",
						"english": "This is true peace. Lumen has taken all suffering away.",
						"japanese": "これが真の平和だ。ルーメン様が全ての苦痛を取り除いてくださった。",
						"chinese": "这才是真正的和平。卢曼大人已带走所有痛苦。",
						"french": "C'est la vraie paix. Lumen a ôté toute souffrance.",
						"spanish": "Esta es la verdadera paz. Lumen se llevó todo el sufrimiento.",
						"vietnamese": "Đây là hòa bình đích thực. Lumen đã cất đi mọi đau khổ.",
						"thai": "นี่คือสันติภาพที่แท้จริง ลูเมนได้ทรงปลดเปลื้องความเจ็บปวดทั้งปวง",
						"hindi": "यह असली शांति है। ल्यूमेन ने सभी दुख हर लिए हैं।"
					},
					"speaker": "soot",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…평화?",
						"english": "...Peace?",
						"japanese": "…平和？",
						"chinese": "……和平？",
						"french": "...La paix ?",
						"spanish": "...¿Paz?",
						"vietnamese": "...Hòa bình?",
						"thai": "...สันติภาพ?",
						"hindi": "...शांति?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "soot",
					"content": {
						"korean": "그래. 모두가 이 순리에 따르고 있어. 너희도 곧 알게 될 거야.",
						"english": "Yes. Everyone is following this natural order. You will understand soon.",
						"japanese": "そうだ。皆がこの摂理に従っている。お前たちもすぐにわかるだろう。",
						"chinese": "是的。所有人都顺应着这个规律。你们很快就会明白的。",
						"french": "Oui. Tout le monde suit cet ordre naturel. Vous comprendrez bientôt.",
						"spanish": "Sí. Todos siguen este orden natural. Pronto lo entenderéis.",
						"vietnamese": "Phải. Mọi người đều tuân theo quy luật này. Các ngươi cũng sẽ sớm hiểu thôi.",
						"thai": "ใช่ ทุกคนกำลังปฏิบัติตามครรลองนี้ พวกเจ้าจะเข้าใจในไม่ช้า",
						"hindi": "हाँ। हर कोई इस प्राकृतिक नियम का पालन कर रहा है। तुम्हें भी जल्द ही पता चल जाएगा।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "이 이질적인 고요함은… 뭐지.",
						"english": "This unsettling silence is... what?",
						"japanese": "この異質な静けさは…何だ。",
						"chinese": "这种异样的寂静是……什么。",
						"french": "Ce silence étrange est… quoi ?",
						"spanish": "Este silencio inquietante es... ¿qué?",
						"vietnamese": "Sự tĩnh lặng khác thường này là... gì vậy.",
						"thai": "ความเงียบอันแปลกประหลาดนี้คือ…อะไร",
						"hindi": "यह अजीब खामोशी... क्या है।"
					}
				},
				{
					"speaker": "soot",
					"content": {
						"korean": "두려워할 것 없어. 이건 정화의 과정이다.",
						"english": "No need to fear. This is purification.",
						"japanese": "恐れることはない。これは浄化の過程だ。",
						"chinese": "无需恐惧。这是净化的过程。",
						"french": "N'aie pas peur. C'est un processus de purification.",
						"spanish": "No hay nada que temer. Es un proceso de purificación.",
						"vietnamese": "Đừng sợ. Đây là quá trình thanh tẩy.",
						"thai": "ไม่ต้องกลัว นี่คือกระบวนการชำระล้าง",
						"hindi": "डरने की कोई बात नहीं। यह शुद्धि की प्रक्रिया है।"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "soot",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "봐라. 이들이 고통에서 벗어나 깨끗해지는 모습을.",
						"english": "Look. See them purified, free from suffering.",
						"japanese": "見よ。彼らが苦痛から解放され、清められる姿を。",
						"chinese": "看啊。他们正从痛苦中解脱，变得纯洁。",
						"french": "Regarde. Vois-les se purifier, libérés de la douleur.",
						"spanish": "Mira. Observa cómo se purifican, liberándose del dolor.",
						"vietnamese": "Nhìn kìa. Họ đang được thanh tẩy, thoát khỏi đau khổ.",
						"thai": "ดูสิ พวกเขาหลุดพ้นจากความเจ็บปวดและบริสุทธิ์ขึ้น",
						"hindi": "देखो। वे पीड़ा से मुक्त होकर शुद्ध हो रहे हैं।"
					},
					"speaker": "soot"
				},
				{
					"content": {
						"korean": "주변의 '구원받은' 자들이 이따금 경련했다. 찰나의 고통이 스쳤다.",
						"english": "The 'redeemed' nearby twitched occasionally. A fleeting pain.",
						"japanese": "周囲の「救済されし者」たちが時折痙攣した。一瞬の苦痛が走った。",
						"chinese": "周围的“被救赎者”们偶尔抽搐。一丝短暂的痛苦闪过。",
						"french": "Les « rachetés » alentour eurent parfois des convulsions. Une douleur fugace les traversa.",
						"spanish": "Los 'redimidos' cercanos convulsionaron ocasionalmente. Un dolor fugaz los recorrió.",
						"vietnamese": "Những người 'được cứu chuộc' xung quanh thỉnh thoảng co giật. Một cơn đau thoáng qua.",
						"thai": "ผู้ที่ได้รับการไถ่บาป' ใกล้เคียงกระตุกเป็นบางครั้ง ความเจ็บปวดชั่วขณะแล่นผ่าน",
						"hindi": "आस-पास के 'मुक्त' हुए लोग कभी-कभी ऐंठे। क्षणिक पीड़ा गुजर गई।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "저들은… 고통스러워하고 있어.",
						"english": "They're... in pain.",
						"japanese": "彼らは…苦しんでいる。",
						"chinese": "他们…正在痛苦。",
						"french": "Ils… souffrent.",
						"spanish": "Ellos… están sufriendo.",
						"vietnamese": "Họ đang… đau đớn.",
						"thai": "พวกเขา…กำลังเจ็บปวด",
						"hindi": "वे… पीड़ा में हैं।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "아니. 이건 영혼의 찌꺼기가 빠져나가는 과정이다. 더 깊은 평화를 위한.",
						"english": "No. This is the dross of the soul leaving them. For deeper peace.",
						"japanese": "違う。これは魂の残滓が抜け落ちる過程だ。より深い平和のために。",
						"chinese": "不。这是灵魂残渣脱落的过程。为了更深层的平静。",
						"french": "Non. C'est le processus d'expulsion des scories de l'âme. Pour une paix plus profonde.",
						"spanish": "No. Es el proceso de expulsión de los residuos del alma. Para una paz más profunda.",
						"vietnamese": "Không. Đây là quá trình loại bỏ cặn bã của linh hồn. Vì một sự bình yên sâu sắc hơn.",
						"thai": "ไม่ใช่ นี่คือกระบวนการที่สิ่งสกปรกของจิตวิญญาณถูกขับออก เพื่อความสงบสุขที่ลึกซึ้งยิ่งขึ้น",
						"hindi": "नहीं। यह आत्मा के अवशेषों के बाहर निकलने की प्रक्रिया है। गहरी शांति के लिए।"
					},
					"speaker": "soot"
				},
				{
					"content": {
						"korean": "…믿을 수 없어.",
						"english": "...Unbelievable.",
						"japanese": "…信じられない。",
						"chinese": "…难以置信。",
						"french": "…Je ne peux pas le croire.",
						"spanish": "…No puedo creerlo.",
						"vietnamese": "…Không thể tin được.",
						"thai": "…ไม่น่าเชื่อ",
						"hindi": "…विश्वास नहीं कर सकता।"
					},
					"speaker": "character_1",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "soot",
					"content": {
						"korean": "네가 이 섭리를 이해하지 못해서 그래.",
						"english": "You simply don't understand this divine will.",
						"japanese": "お前がこの摂理を理解できないからだ。",
						"chinese": "那是因为你不理解这个天意。",
						"french": "C'est parce que tu ne comprends pas cette providence.",
						"spanish": "Es porque no comprendes esta providencia.",
						"vietnamese": "Đó là vì ngươi không hiểu được ý trời này.",
						"thai": "นั่นเป็นเพราะเจ้าไม่เข้าใจหลักการนี้",
						"hindi": "यह इसलिए है क्योंकि तुम इस दैवीय विधान को नहीं समझते।"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						2
					],
					"action": "enter",
					"speaker": "soot"
				},
				{
					"content": {
						"korean": "벽면에서 보라색 결정들이 희미하게 맥동했다. 기이한 속삭임이 들리는 듯했다.",
						"english": "Faint purple crystals pulsed from the walls. Strange whispers seemed to be heard.",
						"japanese": "壁面で紫色の結晶がかすかに脈動した。奇妙なささやきが聞こえるようだった。",
						"chinese": "墙壁上，紫色的晶体微弱地跳动着。仿佛能听到奇异的低语。",
						"french": "Des cristaux violets pulsaient faiblement sur les murs. D'étranges murmures semblaient se faire entendre.",
						"spanish": "Cristales púrpuras pulsaban débilmente en las paredes. Parecía escucharse un extraño susurro.",
						"vietnamese": "Những tinh thể màu tím mờ nhạt rung động trên tường. Dường như có những lời thì thầm kỳ lạ.",
						"thai": "ผลึกสีม่วงเต้นระริกจางๆ จากผนัง ราวกับได้ยินเสียงกระซิบประหลาด",
						"hindi": "दीवारों से बैंगनी क्रिस्टल हल्के से धड़क रहे थे। अजीब फुसफुसाहटें सुनाई दे रही थीं।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이것이 바로 루멘의 축복이다. 심연을 정화하는 결정이지.",
						"english": "This is Lumen's blessing. Crystals that cleanse the abyss.",
						"japanese": "これこそがルーメンの祝福だ。深淵を浄化する結晶。",
						"chinese": "这就是流明（Lumen）的祝福。净化深渊的晶体。",
						"french": "C'est la bénédiction de Lumen. Des cristaux qui purifient l'abîme.",
						"spanish": "Esta es la bendición de Lumen. Cristales que purifican el abismo.",
						"vietnamese": "Đây chính là phước lành của Lumen. Những tinh thể thanh tẩy vực thẳm.",
						"thai": "นี่คือพรของลูเมน ผลึกที่ชำระล้างห้วงอเวจี",
						"hindi": "यह ल्यूमेन का आशीर्वाद है। वे क्रिस्टल जो खाई को शुद्ध करते हैं।"
					},
					"speaker": "soot",
					"emotion": "happy",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "저 결정들이… 뭔가 달라.",
						"english": "Those crystals... something's off about them.",
						"japanese": "あの結晶が…何か違う。",
						"chinese": "那些晶体…有些不对劲。",
						"french": "Ces cristaux… sont différents.",
						"spanish": "Esos cristales… son algo diferentes.",
						"vietnamese": "Những tinh thể đó… có gì đó khác lạ.",
						"thai": "ผลึกเหล่านั้น…บางอย่างแตกต่างไป",
						"hindi": "वे क्रिस्टल… कुछ अलग हैं।"
					}
				},
				{
					"content": {
						"korean": "그렇지. 더 깊은 곳으로 갈수록, 정화의 힘도 강해지는 법.",
						"english": "Precisely. The deeper one goes, the stronger the power of purification becomes.",
						"japanese": "その通り。深く進むほど、浄化の力も強まる。",
						"chinese": "没错。越是深入，净化的力量就越强。",
						"french": "Exactement. Plus on s'enfonce, plus le pouvoir de purification s'intensifie.",
						"spanish": "Exacto. Cuanto más profundo vayas, más fuerte se vuelve el poder de purificación.",
						"vietnamese": "Đúng vậy. Càng đi sâu, sức mạnh thanh tẩy càng mạnh.",
						"thai": "ถูกต้อง ยิ่งลึกลงไปเท่าไหร่ พลังแห่งการชำระล้างก็ยิ่งแข็งแกร่งขึ้นเท่านั้น",
						"hindi": "ठीक है। जितना गहरा जाते हैं, शुद्धिकरण की शक्ति उतनी ही प्रबल होती जाती है。"
					},
					"speaker": "soot",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_2",
					"content": {
						"korean": "…역겨워.",
						"english": "...Disgusting.",
						"japanese": "…吐き気がする。",
						"chinese": "……真恶心。",
						"french": "...Dégueulasse.",
						"spanish": "...Repugnante.",
						"vietnamese": "...Ghê tởm.",
						"thai": "...น่ารังเกียจ",
						"hindi": "...घिनौना।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "아니, 이건 아름다운 변화야. 모든 불순물을 태워버리는 불꽃이지.",
						"english": "No, this is a beautiful change. A flame that burns away all impurities.",
						"japanese": "違う。これは美しい変化だ。全ての不純物を焼き尽くす炎だ。",
						"chinese": "不，这是美丽的蜕变。是能燃尽所有杂质的火焰。",
						"french": "Non, c'est un beau changement. Une flamme qui consume toutes les impuretés.",
						"spanish": "No, esto es un cambio hermoso. Una llama que quema todas las impurezas.",
						"vietnamese": "Không, đây là một sự thay đổi tuyệt đẹp. Một ngọn lửa thiêu rụi mọi tạp chất.",
						"thai": "ไม่ นี่คือการเปลี่ยนแปลงที่งดงาม เปลวไฟที่เผาผลาญสิ่งสกปรกทั้งหมด",
						"hindi": "नहीं, यह एक सुंदर परिवर्तन है। एक ऐसी लौ जो सभी अशुद्धियों को जला देती है।"
					},
					"speaker": "soot"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"type": "direction",
					"action": "enter",
					"speaker": "soot"
				},
				{
					"speaker": "soot",
					"content": {
						"korean": "더 깊이. 더 깊은 평화로… 모든 것이 사라질 때까지.",
						"english": "Deeper. To a deeper peace... until all is gone.",
						"japanese": "もっと深く。より深き安寧へ… 全てが消え去るまで。",
						"chinese": "更深。向更深的平静……直到一切消逝。",
						"french": "Plus profond. Vers une paix plus profonde… jusqu'à ce que tout disparaisse.",
						"spanish": "Más profundo. Hacia una paz más profunda... hasta que todo desaparezca.",
						"vietnamese": "Sâu hơn nữa. Đến một sự bình yên sâu hơn... cho đến khi mọi thứ tan biến.",
						"thai": "ลึกลงไปอีก สู่ความสงบที่ลึกซึ้งกว่า… จนกว่าทุกสิ่งจะหายไป",
						"hindi": "और गहरा। एक गहरी शांति की ओर... जब तक सब कुछ मिट न जाए।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "무슨 짓을 하려는 거야?",
						"english": "What are you trying to do?",
						"japanese": "何をしようとしている！",
						"chinese": "你到底想做什么？",
						"french": "Qu'est-ce que tu tentes de faire ?",
						"spanish": "¿Qué intentas hacer?",
						"vietnamese": "Ngươi đang định làm gì vậy?",
						"thai": "คุณกำลังจะทำอะไร?",
						"hindi": "तुम क्या करने की कोशिश कर रहे हो?"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "완전한 정화. 루멘께서 바라시는 완전한 평화.",
						"english": "Complete purification. The absolute peace Lumen desires.",
						"japanese": "完全なる浄化。ルーメン様が望む、完全なる安寧だ。",
						"chinese": "彻底的净化。卢门大人所期望的，彻底的平静。",
						"french": "La purification complète. La paix absolue que Lumen désire.",
						"spanish": "Purificación completa. La paz absoluta que Lumen anhela.",
						"vietnamese": "Thanh tẩy hoàn toàn. Sự bình yên tuyệt đối mà Lumen mong muốn.",
						"thai": "การชำระล้างที่สมบูรณ์แบบ สันติสุขสมบูรณ์ที่ลูเมนปรารถนา",
						"hindi": "पूर्ण शुद्धिकरण। वह पूर्ण शांति जो ल्यूमन चाहते हैं।"
					},
					"speaker": "soot",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "낡은 일지가 바닥에 뒹굴었다. '진정한 망각을 거부하는 자들을 삼키는, 두 번째이자 더 깊은 지옥'이라는 문구가 보였다.",
						"english": "An old journal lay on the floor. A phrase was visible: 'The second and deeper hell, swallowing those who reject true oblivion.'",
						"japanese": "古びた日誌が床に転がっていた。『真の忘却を拒む者を飲み込む、第二の、そしてより深き地獄』という文面が見えた。",
						"chinese": "一本旧日记本掉落在地。上面写着：“吞噬那些拒绝真正遗忘者的，第二层、也是更深层的地狱。”",
						"french": "Un vieux journal gisait sur le sol. Une phrase était visible : « Le second et plus profond des enfers, engloutissant ceux qui refusent le véritable oubli. »",
						"spanish": "Un viejo diario yacía en el suelo. Una frase era visible: 'El segundo y más profundo infierno, que devora a quienes rechazan el verdadero olvido'.",
						"vietnamese": "Một cuốn nhật ký cũ nằm trên sàn nhà. Một câu văn hiện rõ: 'Địa ngục thứ hai và sâu hơn, nuốt chửng những kẻ từ chối sự lãng quên thực sự.'",
						"thai": "สมุดบันทึกเก่าเล่มหนึ่งตกอยู่บนพื้น ข้อความปรากฏให้เห็น: 'นรกขุมที่สองและลึกกว่า กลืนกินผู้ที่ปฏิเสธการลืมเลือนที่แท้จริง'",
						"hindi": "एक पुरानी डायरी फर्श पर पड़ी थी। एक वाक्यांश दिखाई दे रहा था: 'दूसरा और गहरा नरक, उन लोगों को निगल जाता है जो सच्ची विस्मृति को अस्वीकार करते हैं।'"
					}
				},
				{
					"speaker": "character_3",
					"content": {
						"korean": "이건… 평화가 아니야. 공허함이야.",
						"english": "This isn't... peace. It's emptiness.",
						"japanese": "これは…安寧じゃない。虚無だ。",
						"chinese": "这并非……平静。这是虚无。",
						"french": "Ce n'est pas... la paix. C'est le vide.",
						"spanish": "Esto no es... paz. Es vacío.",
						"vietnamese": "Đây không phải... bình yên. Đây là sự trống rỗng.",
						"thai": "นี่ไม่ใช่… ความสงบ มันคือความว่างเปล่า",
						"hindi": "यह... शांति नहीं है। यह खालीपन है।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "그 공허함이 곧 자유다! 너희도 곧 구원받을 테니 걱정 마라.",
						"english": "That emptiness is freedom! You too will soon be saved, so fear not.",
						"japanese": "その虚無こそが自由だ！ お前たちもすぐに救われる、心配するな。",
						"chinese": "那空虚即是自由！你们也很快会得到救赎，无需担忧。",
						"french": "Ce vide est la liberté ! Vous aussi serez bientôt sauvés, ne craignez rien.",
						"spanish": "¡Ese vacío es libertad! Vosotros también seréis salvados pronto, no temáis.",
						"vietnamese": "Sự trống rỗng đó chính là tự do! Các ngươi cũng sẽ sớm được cứu rỗi, đừng lo lắng.",
						"thai": "ความว่างเปล่านั้นคืออิสรภาพ! ไม่ต้องห่วง พวกเจ้าก็จะได้รับการช่วยให้รอดในไม่ช้า",
						"hindi": "वह खालीपन ही स्वतंत्रता है! तुम्हें भी जल्द ही मुक्ति मिलेगी, चिंता मत करो।"
					},
					"speaker": "soot"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이 광기를 멈춰야 해.",
						"english": "I must stop this madness.",
						"japanese": "この狂気を止めなければ。",
						"chinese": "我必须阻止这场疯狂。",
						"french": "Je dois arrêter cette folie.",
						"spanish": "Debo detener esta locura.",
						"vietnamese": "Phải ngăn chặn sự điên rồ này.",
						"thai": "ฉันต้องหยุดความบ้าคลั่งนี้",
						"hindi": "मुझे इस पागलपन को रोकना होगा।"
					},
					"type": "speech",
					"emotion": "angry"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "크크… 헛된 몸부림… 이 몸은 그저 그릇일 뿐… 진정한 어둠은… 이제 시작될 것이다…",
						"english": "Heh heh… A futile struggle… This body is merely a vessel… The true darkness… will now begin…",
						"japanese": "クク… 無駄な足掻き… この身体はただの器… 真の闇は… 今、始まるだろう…",
						"chinese": "呵呵… 徒劳的挣扎… 这具身体不过是容器… 真正的黑暗… 即将开始…",
						"french": "Hé hé… Une lutte futile… Ce corps n'est qu'un vaisseau… La véritable obscurité… va maintenant commencer…",
						"spanish": "Je je… Una lucha inútil… Este cuerpo es meramente un recipiente… La verdadera oscuridad… ahora comenzará…",
						"vietnamese": "Khặc khặc… Sự vùng vẫy vô ích… Thân thể này chỉ là một cái vỏ… Bóng tối thực sự… sẽ bắt đầu từ bây giờ…",
						"thai": "ฮ่าฮ่า… การดิ้นรนที่ไร้ประโยชน์… ร่างนี้เป็นเพียงภาชนะ… ความมืดที่แท้จริง… กำลังจะเริ่มต้น…",
						"hindi": "हँ हँ… व्यर्थ का संघर्ष… यह शरीर केवल एक पात्र है… असली अंधकार… अब शुरू होगा…"
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "그릇…? 이 모든 것의 배후가 또 있단 말인가?",
						"english": "A vessel…? Is there someone else behind all of this?",
						"japanese": "器…？この全てを裏で操る者がまだいるというのか？",
						"chinese": "容器…？难道这一切的幕后还有人吗？",
						"french": "Un vaisseau…? Y a-t-il quelqu'un d'autre derrière tout ça ?",
						"spanish": "¿Un recipiente…? ¿Hay alguien más detrás de todo esto?",
						"vietnamese": "Một cái vỏ…? Lẽ nào còn có kẻ đứng đằng sau tất cả những chuyện này?",
						"thai": "ภาชนะ…? นี่หมายความว่ามีใครบางคนอยู่เบื้องหลังทั้งหมดนี้อีกงั้นหรือ?",
						"hindi": "एक पात्र…? क्या इस सबके पीछे कोई और है?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그림자가 사라진 자리, 진정한 공허함이 드러났다. 이것은 끝이 아니었다. 거대한 어둠의 그림자가… 심연 저 너머에서 움직이기 시작했다.",
						"english": "Where the shadow vanished, true emptiness was revealed. This was not the end. The shadow of a greater darkness… began to stir from beyond the abyss.",
						"japanese": "影が消えた場所には、真の虚無が姿を現した。これは終わりではなかった。深淵の向こうから… 巨大な闇の影が動き始めていた。",
						"chinese": "阴影消失的地方，真正的虚无显现。这不是结束。巨大的黑暗阴影… 开始在深渊之外蠢蠢欲动。",
						"french": "Là où l'ombre avait disparu, un vide véritable fut révélé. Ce n'était pas la fin. L'ombre d'une obscurité plus grande… commençait à s'agiter au-delà de l'abîme.",
						"spanish": "Donde la sombra se desvaneció, una verdadera vacuidad fue revelada. Esto no era el fin. La sombra de una oscuridad mayor… comenzó a agitarse más allá del abismo.",
						"vietnamese": "Nơi bóng tối tan biến, sự trống rỗng thực sự lộ diện. Đây không phải là kết thúc. Bóng tối của một thế lực hắc ám lớn hơn… bắt đầu trỗi dậy từ sâu thẳm vực thẳm.",
						"thai": "เมื่อเงาหายไป ความว่างเปล่าที่แท้จริงก็เผยออกมา นี่ไม่ใช่จุดสิ้นสุด เงาแห่งความมืดมิดอันยิ่งใหญ่กว่า… เริ่มเคลื่อนไหวจากเบื้องหลังห้วงลึก",
						"hindi": "जहाँ छाया गायब हो गई, वहाँ सच्चा शून्य प्रकट हुआ। यह अंत नहीं था। एक बड़े अंधकार की छाया… रसातल के परे से हिलने लगी।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_1",
					"content": {
						"korean": "…아직 끝나지 않았어. 더 깊은 곳을 봐야 해.",
						"english": "…It's not over yet. We need to look deeper.",
						"japanese": "…まだ終わっていない。もっと奥を見なければ。",
						"chinese": "…还没结束。我们得看得更深。",
						"french": "…Ce n'est pas encore fini. Nous devons regarder plus profondément.",
						"spanish": "…Aún no ha terminado. Necesitamos mirar más profundamente.",
						"vietnamese": "…Vẫn chưa kết thúc. Chúng ta cần phải nhìn sâu hơn.",
						"thai": "…ยังไม่จบ เราต้องมองให้ลึกกว่านี้",
						"hindi": "…अभी खत्म नहीं हुआ है। हमें और गहराई से देखना होगा।"
					}
				},
				{
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "그래. 진정한 자유를 위해… 끝까지 간다.",
						"english": "Right. For true freedom… we go to the very end.",
						"japanese": "ああ。真の自由のために… 最後の最後まで行くぞ。",
						"chinese": "没错。为了真正的自由… 我们要走到最后。",
						"french": "C'est ça. Pour la vraie liberté… nous irons jusqu'au bout.",
						"spanish": "Así es. Por la verdadera libertad… llegaremos hasta el final.",
						"vietnamese": "Đúng vậy. Vì tự do thực sự… chúng ta sẽ đi đến cùng.",
						"thai": "ใช่แล้ว เพื่ออิสรภาพที่แท้จริง… เราจะไปจนถึงที่สุด",
						"hindi": "सही है। सच्ची स्वतंत्रता के लिए… हम अंत तक जाएंगे।"
					},
					"speaker": "character_any"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "크하하… 무의미한 저항… 너희의 영혼도… 나에게 바쳐질 것이다.",
						"english": "Hahaha… Meaningless resistance… Your souls too… shall be offered to me.",
						"japanese": "クハハ… 無意味な抵抗… お前たちの魂も… 私に捧げられるだろう。",
						"chinese": "哈哈哈… 毫无意义的抵抗… 你们的灵魂… 也将献给我。",
						"french": "Hahaha… Résistance inutile… Vos âmes aussi… me seront offertes.",
						"spanish": "Jajaja… Resistencia inútil… Vuestras almas también… me serán ofrecidas.",
						"vietnamese": "Khà khà khà… Sự phản kháng vô nghĩa… Linh hồn của các ngươi… cũng sẽ hiến tế cho ta.",
						"thai": "ฮ่าฮ่าฮ่า… การต่อต้านที่ไร้ความหมาย… วิญญาณของพวกเจ้า… จะถูกสังเวยให้ข้า",
						"hindi": "हाहाहा… व्यर्थ का प्रतिरोध… तुम्हारी आत्माएं भी… मुझे अर्पित की जाएंगी।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…아니. 아직 끝나지 않았어. 절대 포기하지 않아.",
						"english": "…No. It’s not over yet. I’ll never give up.",
						"japanese": "…いや。まだ終わっていない。絶対に諦めない。",
						"chinese": "…不。还没结束。我绝不放弃。",
						"french": "…Non. Ce n'est pas encore fini. Je n'abandonnerai jamais.",
						"spanish": "…No. Aún no ha terminado. Nunca me rendiré.",
						"vietnamese": "…Không. Vẫn chưa kết thúc. Tuyệt đối không từ bỏ.",
						"thai": "…ไม่ ยังไม่จบ ฉันจะไม่มีวันยอมแพ้",
						"hindi": "…नहीं। अभी खत्म नहीं हुआ है। मैं कभी हार नहीं मानूंगा।"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "흥… 다시 와봐라. 그때는… 완전히 집어삼켜주마.",
						"english": "Hmph… Come again. Next time… I’ll completely devour you.",
						"japanese": "フン… また来るがいい。その時は… 完全に食い尽くしてやろう。",
						"chinese": "哼… 再来一次吧。那时… 我会彻底吞噬你。",
						"french": "Hmph… Revenez. La prochaine fois… je vous dévorerai complètement.",
						"spanish": "Hmph… Vuelve a intentarlo. La próxima vez… te devoraré por completo.",
						"vietnamese": "Hừ… Cứ quay lại đi. Lần tới… ta sẽ nuốt chửng các ngươi hoàn toàn.",
						"thai": "หึ… กลับมาอีกครั้งสิ คราวหน้า… ข้าจะกลืนกินเจ้าทั้งหมด",
						"hindi": "हम्फ… फिर आना। अगली बार… मैं तुम्हें पूरी तरह निगल जाऊंगा।"
					},
					"speaker": "random_boss"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "마침내 도달한 심연의 가장 깊은 곳. 모든 영혼을 집어삼키는 그림자가 기다리고 있었다.",
						"english": "Finally, at the deepest abyss. A shadow, devouring all souls, awaited.",
						"japanese": "ついに到達した深淵の最深部。すべての魂を飲み込む影が待ち受けていた。",
						"chinese": "终于抵达了深渊的最深处。吞噬所有灵魂的阴影正在等待。",
						"french": "Enfin, atteint les profondeurs abyssales. Une ombre, dévorant toutes les âmes, attendait.",
						"spanish": "Finalmente, en el abismo más profundo. Una sombra, devoradora de todas las almas, aguardaba.",
						"vietnamese": "Cuối cùng cũng đến được nơi sâu thẳm nhất của vực thẳm. Một cái bóng nuốt chửng mọi linh hồn đang chờ đợi.",
						"thai": "ในที่สุดก็มาถึงส่วนที่ลึกที่สุดของขุมนรก เงาที่กลืนกินทุกวิญญาณกำลังรอคอยอยู่",
						"hindi": "आखिरकार, अथाह खाई की सबसे गहरी जगह पर पहुंच गए। एक छाया, जो सभी आत्माओं को निगल जाती है, इंतजार कर रही थी।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "왔군… 내 먹이가.",
						"english": "You've arrived... my prey.",
						"japanese": "来たか…我が獲物が。",
						"chinese": "你来了…我的猎物。",
						"french": "Tu es venu... ma proie.",
						"spanish": "Has llegado... mi presa.",
						"vietnamese": "Ngươi đến rồi... con mồi của ta.",
						"thai": "มาแล้วสินะ... เหยื่อของข้า",
						"hindi": "तुम आ गए... मेरे शिकार।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "네가… 이 모든 타락의 근원인가?",
						"english": "Are you... the source of all this corruption?",
						"japanese": "お前が…この全ての堕落の根源か？",
						"chinese": "你就是…这一切堕落的根源吗？",
						"french": "Es-tu... la source de toute cette corruption ?",
						"spanish": "¿Eres tú... la fuente de toda esta corrupción?",
						"vietnamese": "Ngươi... là nguồn gốc của mọi sự mục nát này sao?",
						"thai": "เจ้าคือ... ต้นกำเนิดของความเสื่อมทรามทั้งหมดนี้หรือ?",
						"hindi": "क्या तुम... इस सारी भ्रष्टता का स्रोत हो?"
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "타락? 아니. 이것이… 진정한 평화. 모두가 갈망하던 안식.",
						"english": "Corruption? No. This is... true peace. The rest everyone craved.",
						"japanese": "堕落？違う。これこそが…真の平和。皆が渇望した安息だ。",
						"chinese": "堕落？不。这才是…真正的和平。是所有人渴望的安息。",
						"french": "Corruption ? Non. Ceci est... la vraie paix. Le repos que tous désiraient.",
						"spanish": "¿Corrupción? No. Esto es... la verdadera paz. El descanso que todos anhelaban.",
						"vietnamese": "Mục nát ư? Không. Đây là... sự bình yên đích thực. Sự an nghỉ mà mọi người khao khát.",
						"thai": "ความเสื่อมทราม? ไม่ นี่คือ... สันติสุขที่แท้จริง การพักผ่อนที่ทุกคนโหยหา",
						"hindi": "भ्रष्टाचार? नहीं। यह है... सच्ची शांति। वह विश्राम जिसकी सभी को लालसा थी।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"action": "enter",
					"speaker": "soot",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						2
					]
				},
				{
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "{random_boss}님! 이들도 루멘의 평화를 받아들이게 해주십시오!",
						"english": "{random_boss}! Let them too embrace the peace of Lumen!",
						"japanese": "{random_boss}様！彼らにもルーメンの平和を受け入れさせてください！",
						"chinese": "{random_boss}大人！请也让他们接受流明之和平！",
						"french": "{random_boss} ! Laissez-les, eux aussi, embrasser la paix de Lumen !",
						"spanish": "¡{random_boss}! ¡Que ellos también abracen la paz de Lumen!",
						"vietnamese": "{random_boss} kính mến! Xin hãy cho họ cũng đón nhận sự bình yên của Lumen!",
						"thai": "{random_boss}! ได้โปรดให้พวกเขาได้โอบรับสันติสุขของลูเมนด้วยเถิด!",
						"hindi": "{random_boss}! इन्हें भी ल्यूमेन की शांति को स्वीकार करने दें!"
					},
					"speaker": "soot"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "…멍청한 것. 너 역시 그저 한 조각일 뿐.",
						"english": "...Foolish one. You too are merely a fragment.",
						"japanese": "…愚かな。お前もまた、ただの一片に過ぎない。",
						"chinese": "…愚蠢的东西。你也不过只是一块碎片。",
						"french": "...Stupide. Toi aussi, tu n'es qu'un fragment.",
						"spanish": "...Tonto. Tú también eres solo un fragmento.",
						"vietnamese": "...Kẻ ngu ngốc. Ngươi cũng chỉ là một mảnh vỡ mà thôi.",
						"thai": "...เจ้าโง่ เข้ารู้เจ้าก็เป็นเพียงเศษเสี้ยวหนึ่งเท่านั้น",
						"hindi": "...मूर्ख। तुम भी बस एक टुकड़ा मात्र हो।"
					}
				},
				{
					"content": {
						"korean": "뭐… 뭐라고요?",
						"english": "Wha... What did you say?",
						"japanese": "な…なんですと？",
						"chinese": "什…什么？",
						"french": "Qu... Quoi ?",
						"spanish": "¿Qué... Qué dijiste?",
						"vietnamese": "Gì... Gì cơ?",
						"thai": "อะ...อะไรนะคะ?",
						"hindi": "क्या... क्या कहा?"
					},
					"speaker": "soot",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "내게 흡수되어라. 너의 공허함은… 완벽한 양식이다.",
						"english": "Be absorbed by me. Your emptiness is... perfect nourishment.",
						"japanese": "我に吸収されよ。お前の虚無は…完璧な糧だ。",
						"chinese": "被我吸收吧。你的空虚…是完美的养料。",
						"french": "Sois absorbé par moi. Ton vide est... une nourriture parfaite.",
						"spanish": "Sé absorbido por mí. Tu vacío es... un alimento perfecto.",
						"vietnamese": "Hãy bị ta hấp thụ đi. Sự trống rỗng của ngươi... là chất dinh dưỡng hoàn hảo.",
						"thai": "จงถูกกลืนกินโดยข้า ความว่างเปล่าของเจ้าคือ... อาหารชั้นเลิศ",
						"hindi": "मुझमें समा जाओ। तुम्हारा खालीपन... उत्तम पोषण है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "soot",
					"content": {
						"korean": "아… 아니야! 이건… 내가 알던 평화가 아니야!",
						"english": "N-No! This isn't... the peace I knew!",
						"japanese": "あ…違う！これは…私が知っていた平和じゃない！",
						"chinese": "不…不是！这…这不是我所知的和平！",
						"french": "N-Non ! Ce n'est pas... la paix que je connaissais !",
						"spanish": "¡N-No! ¡Esto no es... la paz que conocía!",
						"vietnamese": "Không... không phải! Đây không phải... sự bình yên mà tôi biết!",
						"thai": "มะ...ไม่! นี่ไม่ใช่...สันติสุขที่ข้ารู้จัก!",
						"hindi": "न-नहीं! यह वह शांति नहीं है... जिसे मैं जानता था!"
					}
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"direction": "down",
					"action": "exit",
					"speaker": "soot"
				},
				{
					"content": {
						"korean": "도망치게 두지 않아!",
						"english": "I won't let you escape!",
						"japanese": "逃がしはしない！",
						"chinese": "我不会让你逃走！",
						"french": "Je ne te laisserai pas t'échapper !",
						"spanish": "¡No te dejaré escapar!",
						"vietnamese": "Ta sẽ không để ngươi trốn thoát!",
						"thai": "ข้าไม่ปล่อยให้เจ้าหนีไปได้หรอก!",
						"hindi": "मैं तुम्हें भागने नहीं दूँगा!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "무의미한 발버둥. 너희도 곧… 흡수될 것이다.",
						"english": "Meaningless struggle. You too will soon be… absorbed.",
						"japanese": "無意味な足掻き。お前たちもじき… 吸収されるだろう。",
						"chinese": "毫无意义的挣扎。你们也很快会… 被吸收。",
						"french": "Lutte inutile. Vous aussi serez bientôt… absorbés.",
						"spanish": "Lucha sin sentido. Vosotros también seréis pronto… absorbidos.",
						"vietnamese": "Sự giãy giụa vô nghĩa. Các ngươi rồi cũng sẽ… bị hấp thụ.",
						"thai": "การต่อสู้ที่ไร้ความหมาย ในไม่ช้าพวกเจ้าก็จะ… ถูกกลืนกิน",
						"hindi": "अर्थहीन संघर्ष। तुम भी जल्द ही… समाहित हो जाओगे।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				}
			]
		}
	]
} as const;
