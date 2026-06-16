export const scenario_snowy_fenrir_67_03 = {
	"scenario_id": "snowy_fenrir_67_03",
	"order": 3,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"glace": {
			"id": "mon_d0b542b9-aea9-405d-8ee2-4936516a041a",
			"name": {
				"korean": "글라세",
				"english": "Glace",
				"japanese": "グラース",
				"chinese": "格拉斯",
				"french": "Glace",
				"spanish": "Glace",
				"vietnamese": "Gla-xê",
				"thai": "กลาซ",
				"hindi": "ग्लेस"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/81de374f-3422-482e-01ee-dc973da70500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/ef269701-044a-42c5-f7b7-760e9c92a500/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "옛 인간들의 경고가 바위에 새겨진 곳. 늑대의 땅이었다.",
						"english": "Where the ancient human's warning was carved into stone. It was the wolf's land.",
						"japanese": "古の人間たちの警告が岩に刻まれた場所。狼の土地だった。",
						"chinese": "古人类警告刻在岩石上的地方。那是狼的土地。",
						"french": "Là où l'avertissement des anciens humains était gravé dans la pierre. C'était la terre du loup.",
						"spanish": "Donde la advertencia de los antiguos humanos estaba grabada en piedra. Era la tierra del lobo.",
						"vietnamese": "Nơi lời cảnh báo của người xưa được khắc trên đá. Đó là vùng đất của sói.",
						"thai": "ที่ซึ่งคำเตือนของมนุษย์โบราณถูกสลักไว้บนหิน มันคือดินแดนของหมาป่า",
						"hindi": "जहाँ प्राचीन मनुष्य की चेतावनी पत्थर पर उकेरी गई थी। वह भेड़िये की भूमि थी।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "여기가 그… '종말의 늑대' 구역이군.",
						"english": "So this is… 'The Wolf of Endings' area.",
						"japanese": "ここがその…「終焉の狼」の区域か。",
						"chinese": "这里就是……《末日之狼》的区域啊。",
						"french": "C'est donc ici… la zone du 'Loup des Fins'.",
						"spanish": "Así que este es… el área del 'Lobo del Fin'.",
						"vietnamese": "Vậy đây là… khu vực của 'Sói Tận Thế'.",
						"thai": "นี่คือ… พื้นที่ของ 'หมาป่าแห่งจุดจบ' สินะ",
						"hindi": "तो यह है... 'अंत के भेड़िये' का क्षेत्र।"
					},
					"type": "speech"
				},
				{
					"speaker": "glace",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "…응. 두려움이 가득한 곳.",
						"english": "...Yeah. A place filled with dread.",
						"japanese": "…うん。恐怖が満ちた場所。",
						"chinese": "……嗯。一个充满恐惧的地方。",
						"french": "...Oui. Un endroit rempli de terreur.",
						"spanish": "...Sí. Un lugar lleno de pavor.",
						"vietnamese": "...Ừ. Một nơi tràn ngập nỗi sợ hãi.",
						"thai": "...อืม สถานที่ที่เต็มไปด้วยความหวาดกลัว",
						"hindi": "...हाँ। खौफ से भरी जगह।"
					},
					"type": "speech",
					"speaker": "glace",
					"emotion": "base"
				},
				{
					"speaker": "glace",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "하지만 그 두려움의 대상은… 텅 비어 있어.",
						"english": "But the object of that dread is… empty.",
						"japanese": "だけど、その恐怖の対象は…空っぽだ。",
						"chinese": "但是，那恐惧的对象……却是空虚的。",
						"french": "Mais l'objet de cette terreur est… vide.",
						"spanish": "Pero el objeto de ese pavor está… vacío.",
						"vietnamese": "Nhưng đối tượng của nỗi sợ hãi đó… lại trống rỗng.",
						"thai": "แต่สิ่งที่น่ากลัวนั้น… ว่างเปล่า",
						"hindi": "लेकिन उस खौफ का स्रोत... खाली है।"
					}
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"speaker": "glace",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "{random_boss}의 눈을 봐.",
						"english": "Look at {random_boss}'s eyes.",
						"japanese": "{random_boss}の目を見て。",
						"chinese": "看{random_boss}的眼睛。",
						"french": "Regarde les yeux de {random_boss}.",
						"spanish": "Mira los ojos de {random_boss}.",
						"vietnamese": "Nhìn vào mắt của {random_boss}.",
						"thai": "มองไปที่ดวงตาของ {random_boss}",
						"hindi": "{random_boss} की आँखों में देखो।"
					},
					"speaker": "glace",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "적의가 없는 것 같기도 하고…",
						"english": "It almost seems like there's no hostility...",
						"japanese": "敵意がないようにも見える…",
						"chinese": "好像也没有敌意……",
						"french": "On dirait presque qu'il n'y a pas d'hostilité...",
						"spanish": "Casi parece que no hay hostilidad...",
						"vietnamese": "Dường như cũng không có địch ý...",
						"thai": "ดูเหมือนจะไม่มีความเป็นศัตรูเลย...",
						"hindi": "ऐसा लगता है कि कोई दुश्मनी नहीं है..."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "적의도, 호기심도 없어. 그냥… 비어 있어.",
						"english": "No malice, no curiosity. Just... empty.",
						"japanese": "悪意も好奇心もない。ただ…空っぽだ。",
						"chinese": "没有恶意，也没有好奇心。只是…一片空白。",
						"french": "Ni malveillance, ni curiosité. Juste... vide.",
						"spanish": "Sin malicia, sin curiosidad. Solo... vacío.",
						"vietnamese": "Không ác ý, không tò mò. Chỉ là… trống rỗng.",
						"thai": "ไม่มีเจตนาร้าย ไม่มีความอยากรู้ แค่... ว่างเปล่า.",
						"hindi": "न कोई दुर्भावना, न कोई जिज्ञासा। बस… खालीपन।"
					},
					"type": "speech",
					"speaker": "glace",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "텅 빈 응시만이 전부다.",
						"english": "Only an empty gaze remains.",
						"japanese": "虚ろな眼差しだけが残る。",
						"chinese": "只有空洞的凝视。",
						"french": "Seul un regard vide subsiste.",
						"spanish": "Solo queda una mirada vacía.",
						"vietnamese": "Chỉ còn lại ánh nhìn trống rỗng.",
						"thai": "เหลือเพียงแค่สายตาที่ว่างเปล่า.",
						"hindi": "केवल एक खाली टकटकी ही शेष है।"
					},
					"speaker": "glace",
					"emotion": "base"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"speaker": "glace",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "아무것도 느끼지 못하는 건가?",
						"english": "Can it feel nothing?",
						"japanese": "何も感じていないのか？",
						"chinese": "难道它什么都感觉不到吗？",
						"french": "Ne ressent-il rien ?",
						"spanish": "¿No siente nada?",
						"vietnamese": "Nó không cảm thấy gì sao?",
						"thai": "มันไม่รู้สึกอะไรเลยหรือ?",
						"hindi": "क्या इसे कुछ महसूस नहीं होता?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "응답할 자아가 없어. 이름도, 분노도 의미 없지.",
						"english": "No self to respond. Name, anger, meaningless.",
						"japanese": "応答する自我はない。名も、怒りも、意味をなさない。",
						"chinese": "没有自我来回应。名字、愤怒，都毫无意义。",
						"french": "Pas d'ego pour répondre. Nom, colère, sans signification.",
						"spanish": "No hay un yo para responder. Nombre, ira, carecen de sentido.",
						"vietnamese": "Không có bản ngã để đáp lại. Tên gọi, sự giận dữ, đều vô nghĩa.",
						"thai": "ไม่มีตัวตนที่จะตอบสนอง ชื่อและความโกรธ ไม่มีค่า.",
						"hindi": "जवाब देने के लिए कोई आत्मा नहीं। नाम, क्रोध, सब अर्थहीन।"
					},
					"type": "speech",
					"speaker": "glace",
					"emotion": "base"
				},
				{
					"speaker": "glace",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그저 본능만이 남아있을 뿐이야.",
						"english": "Only instinct remains.",
						"japanese": "残るのは本能だけだ。",
						"chinese": "只剩下本能。",
						"french": "Seul l'instinct subsiste.",
						"spanish": "Solo queda el instinto.",
						"vietnamese": "Chỉ còn lại bản năng.",
						"thai": "เหลือเพียงแค่สัญชาตญาณ.",
						"hindi": "केवल प्रवृत्ति ही शेष है।"
					}
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "glace",
					"spot": [
						2,
						4
					]
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그럼… 왜 싸우는 거지?",
						"english": "Then... why does it fight?",
						"japanese": "なら…なぜ戦う？",
						"chinese": "那么…它为何而战？",
						"french": "Alors... pourquoi se bat-il ?",
						"spanish": "Entonces... ¿por qué lucha?",
						"vietnamese": "Vậy thì… tại sao nó lại chiến đấu?",
						"thai": "แล้ว...ทำไมมันถึงสู้ล่ะ?",
						"hindi": "तो… यह क्यों लड़ता है?"
					}
				},
				{
					"speaker": "glace",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그것조차 의지가 아닐 거야.",
						"english": "Even that's not its will.",
						"japanese": "それさえも意志ではないだろう。",
						"chinese": "即使那也不是它的意志。",
						"french": "Même cela n'est pas sa volonté.",
						"spanish": "Ni siquiera eso es su voluntad.",
						"vietnamese": "Ngay cả điều đó cũng không phải ý chí của nó.",
						"thai": "แม้แต่นั่นก็ไม่ใช่เจตจำนงของมัน.",
						"hindi": "वह भी इसकी इच्छा नहीं होगी।"
					}
				},
				{
					"speaker": "glace",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그냥… 다가오는 것을 본능적으로 대할 뿐이지.",
						"english": "It just... instinctively reacts to what approaches.",
						"japanese": "ただ…近づくものに本能的に応じるだけだ。",
						"chinese": "只是…本能地应对靠近的事物。",
						"french": "Il... réagit juste instinctivement à ce qui approche.",
						"spanish": "Simplemente... reacciona instintivamente a lo que se acerca.",
						"vietnamese": "Nó chỉ… bản năng đối phó với những gì đến gần.",
						"thai": "แค่...ตอบสนองต่อสิ่งที่เข้ามาหาด้วยสัญชาตญาณ.",
						"hindi": "यह बस… आने वाली चीज़ों पर स्वाभाविक रूप से प्रतिक्रिया करता है।"
					}
				},
				{
					"content": {
						"korean": "텅 빈 눈빛은 더 깊은 혼란을 안겼다.",
						"english": "The empty gaze brought deeper confusion.",
						"japanese": "虚ろな眼差しは、より深い混乱をもたらした。",
						"chinese": "空洞的眼神带来了更深的困惑。",
						"french": "Le regard vide apporta une confusion plus profonde.",
						"spanish": "La mirada vacía provocó una confusión más profunda.",
						"vietnamese": "Ánh mắt trống rỗng mang đến sự bối rối sâu sắc hơn.",
						"thai": "สายตาที่ว่างเปล่านำมาซึ่งความสับสนที่ลึกซึ้งยิ่งขึ้น.",
						"hindi": "खाली आँखों ने और गहरा भ्रम पैदा किया।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "가장 깊은 곳. 거대한 그림자가 움직였다.",
						"english": "The deepest place. A massive shadow stirred.",
						"japanese": "最も深き場所。巨大な影が蠢いた。",
						"chinese": "最深处。巨大的影子开始蠕动。",
						"french": "L'endroit le plus profond. Une ombre massive s'est agitée.",
						"spanish": "El lugar más profundo. Una sombra gigantesca se agitó.",
						"vietnamese": "Nơi sâu thẳm nhất. Một bóng đen khổng lồ cựa quậy.",
						"thai": "สถานที่ที่ลึกที่สุด. เงาขนาดใหญ่เคลื่อนไหว.",
						"hindi": "सबसे गहरा स्थान। एक विशाल छाया हिलने लगी।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "저게… {random_boss}.",
						"english": "That's... {random_boss}.",
						"japanese": "あれは…{random_boss}だ。",
						"chinese": "那是……{random_boss}。",
						"french": "C'est... {random_boss}.",
						"spanish": "Es... {random_boss}.",
						"vietnamese": "Đó là... {random_boss}.",
						"thai": "นั่นคือ... {random_boss}",
						"hindi": "वह... {random_boss} है।"
					},
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "glace",
					"spot": [
						4,
						2
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "{random_boss}의 눈은 여전히 텅 비어 있어.",
						"english": "{random_boss}'s eyes are still empty.",
						"japanese": "{random_boss}の瞳は、いまだに虚ろだ。",
						"chinese": "{random_boss}的眼睛依然空洞。",
						"french": "Les yeux de {random_boss} sont toujours vides.",
						"spanish": "Los ojos de {random_boss} siguen vacíos.",
						"vietnamese": "Đôi mắt của {random_boss} vẫn trống rỗng.",
						"thai": "ดวงตาของ {random_boss} ยังคงว่างเปล่า",
						"hindi": "{random_boss} की आँखें अब भी खाली हैं।"
					},
					"speaker": "glace",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…다가온다.",
						"english": "...It approaches.",
						"japanese": "…近づいてくる。",
						"chinese": "……它过来了。",
						"french": "...Ça approche.",
						"spanish": "...Se acerca.",
						"vietnamese": "...Nó đang đến gần.",
						"thai": "...มันกำลังเข้ามา",
						"hindi": "...वह आ रहा है।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "끝을 응시하는 공허다.",
						"english": "It is the void gazing at the end.",
						"japanese": "終わりの凝視する虚無だ。",
						"chinese": "凝视终结的虚空。",
						"french": "C'est le vide qui contemple la fin.",
						"spanish": "Es el vacío que contempla el fin.",
						"vietnamese": "Đó là hư không đang nhìn chằm chằm vào kết cục.",
						"thai": "มันคือความว่างเปล่าที่จ้องมองจุดจบ",
						"hindi": "यह वह शून्य है जो अंत को निहार रहा है।"
					},
					"type": "speech",
					"speaker": "glace",
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "…사라진다.",
						"english": "...It vanishes.",
						"japanese": "…消え去る。",
						"chinese": "……它消失了。",
						"french": "...Il disparaît.",
						"spanish": "...Desaparece.",
						"vietnamese": "...Nó biến mất.",
						"thai": "...มันหายไป",
						"hindi": "...वह गायब हो जाता है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…진짜 아무것도 없었어.",
						"english": "...There was truly nothing there.",
						"japanese": "…本当に何もなかった。",
						"chinese": "……真的什么都没有。",
						"french": "...Il n'y avait vraiment rien.",
						"spanish": "...En verdad no había nada.",
						"vietnamese": "...Thực sự không có gì cả.",
						"thai": "...ไม่มีอะไรเลยจริงๆ",
						"hindi": "...वास्तव में कुछ भी नहीं था।"
					},
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						2
					],
					"speaker": "glace"
				},
				{
					"content": {
						"korean": "텅 빈 채로, 끝을 맞이했군.",
						"english": "Empty, it met its end.",
						"japanese": "虚ろなまま、終わりを迎えたか。",
						"chinese": "空虚地，迎来了终结。",
						"french": "Vide, il a rencontré sa fin.",
						"spanish": "Vacío, encontró su fin.",
						"vietnamese": "Trống rỗng, nó đã đối mặt với kết cục.",
						"thai": "ว่างเปล่า มันพบกับจุดจบ",
						"hindi": "खाली होकर, उसने अपना अंत पाया।"
					},
					"type": "speech",
					"speaker": "glace",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "늑대의 육신은 사라지고, 공허만이 남았다. 우리는 무엇을 보았나.",
						"english": "The wolf's body vanished, only the void remained. What did we see?",
						"japanese": "狼の肉体は消え去り、虚無だけが残った。我々は何を見たのか。",
						"chinese": "狼的肉身消失了，只剩下虚空。我们看到了什么？",
						"french": "Le corps du loup a disparu, seul le vide est resté. Qu'avons-nous vu ?",
						"spanish": "El cuerpo del lobo desapareció, solo el vacío permaneció. ¿Qué vimos?",
						"vietnamese": "Thân xác của chó sói biến mất, chỉ còn lại hư không. Chúng ta đã thấy gì?",
						"thai": "ร่างของหมาป่าหายไป เหลือเพียงความว่างเปล่า เราเห็นอะไร?",
						"hindi": "भेड़िये का शरीर गायब हो गया, केवल शून्य शेष रहा। हमने क्या देखा?"
					},
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "공허는 모든 것을 삼켰다.",
						"english": "The void swallowed everything.",
						"japanese": "虚無はすべてを飲み込んだ。",
						"chinese": "虚空吞噬了一切。",
						"french": "Le vide a tout englouti.",
						"spanish": "El vacío lo devoró todo.",
						"vietnamese": "Hư không đã nuốt chửng mọi thứ.",
						"thai": "ความว่างเปล่ากลืนกินทุกสิ่ง",
						"hindi": "शून्य ने सब कुछ निगल लिया।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…삼킨다.",
						"english": "...It swallows.",
						"japanese": "…飲み込む。",
						"chinese": "……吞噬着。",
						"french": "...Il engloutit.",
						"spanish": "...Devora.",
						"vietnamese": "...Nó đang nuốt chửng.",
						"thai": "...มันกลืนกิน",
						"hindi": "...वह निगल रहा है।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "이대로는… 안 돼.",
						"english": "Not like this...",
						"japanese": "このままでは…",
						"chinese": "这样下去…不行。",
						"french": "Pas comme ça...",
						"spanish": "Así no...",
						"vietnamese": "Thế này thì… không được.",
						"thai": "แบบนี้… ไม่ได้การละ",
						"hindi": "ऐसे नहीं चलेगा।"
					},
					"type": "speech"
				},
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"speaker": "glace"
				},
				{
					"content": {
						"korean": "끝을 응시할 준비가… 아직 부족한가.",
						"english": "Still not ready... to face the end?",
						"japanese": "終わりを見据える… 準備がまだ足りぬか。",
						"chinese": "凝视结局的准备…还不够吗。",
						"french": "Pas encore prêt... à contempler la fin ?",
						"spanish": "¿Aún me falta preparación... para afrontar el final?",
						"vietnamese": "Chưa sẵn sàng... đối diện với kết cục sao?",
						"thai": "ความพร้อมที่จะจ้องมองจุดจบ… ยังไม่พออีกหรือ?",
						"hindi": "क्या अंत को देखने की तैयारी… अभी अधूरी है?"
					},
					"type": "speech",
					"speaker": "glace",
					"emotion": "sad"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"옛 인간들이 바위에 새긴 경고. '종말의 늑대'.",
			"그 이름은 두려움으로 가득했지만,",
			"늑대의 눈에는 아무것도 없었다.",
			"그저… 텅 빈 응시만이 기다릴 뿐이었다."
		],
		"english": [
			"An ancient warning carved in stone by humans. 'The Wolf of Endings'.",
			"That name was filled with dread,",
			"Yet in the wolf's eyes, there was nothing.",
			"Only… an empty gaze awaited."
		],
		"japanese": [
			"古の人間が岩に刻んだ警告。『終焉の狼』。",
			"その名には恐怖が満ちていたが、",
			"だが、狼の目には何もなかった。",
			"ただ…虚ろな眼差しが待つばかりだった。"
		],
		"chinese": [
			"古人类刻在岩石上的警告。《末日之狼》。",
			"那个名字充满了恐惧，",
			"然而，狼的眼中空无一物。",
			"只有……空洞的凝视在等待着。"
		],
		"french": [
			"Un ancien avertissement gravé dans la pierre par les humains. 'Le Loup des Fins'.",
			"Ce nom était rempli de terreur,",
			"Pourtant, dans les yeux du loup, il n'y avait rien.",
			"Seul… un regard vide attendait."
		],
		"spanish": [
			"Una antigua advertencia grabada en piedra por los humanos. 'El Lobo del Fin'.",
			"Ese nombre estaba lleno de pavor,",
			"Sin embargo, en los ojos del lobo, no había nada.",
			"Solo… una mirada vacía esperaba."
		],
		"vietnamese": [
			"Lời cảnh báo cổ xưa do con người khắc trên đá. 'Sói Tận Thế'.",
			"Cái tên đó tràn ngập nỗi sợ hãi,",
			"Thế nhưng trong mắt con sói, chẳng có gì cả.",
			"Chỉ có… một ánh nhìn trống rỗng đang chờ đợi."
		],
		"thai": [
			"คำเตือนโบราณที่มนุษย์สลักไว้บนหิน 'หมาป่าแห่งจุดจบ'",
			"ชื่อนั้นเต็มไปด้วยความหวาดกลัว",
			"แต่ในดวงตาของหมาป่า กลับไม่มีอะไรเลย",
			"มีเพียง... สายตาว่างเปล่าที่รอคอย"
		],
		"hindi": [
			"प्राचीन मनुष्यों द्वारा चट्टान पर उकेरी गई एक चेतावनी। 'अंत का भेड़िया'।",
			"वह नाम खौफ से भरा था,",
			"फिर भी, भेड़िये की आँखों में कुछ भी नहीं था।",
			"केवल... एक खाली टकटकी प्रतीक्षा कर रही थी।"
		]
	}
} as const;
