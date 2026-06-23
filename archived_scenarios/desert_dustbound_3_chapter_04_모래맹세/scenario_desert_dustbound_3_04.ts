export const scenario_desert_dustbound_3_04 = {
	"scenario_id": "desert_dustbound_3_04",
	"order": 4,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"dune": {
			"id": "mon_fc976b75-f009-4bf2-b660-a3053c95d668",
			"name": {
				"korean": "듄",
				"english": "Dune",
				"japanese": "デューン",
				"chinese": "沙丘",
				"french": "Dune",
				"spanish": "Dune",
				"vietnamese": "Dune",
				"thai": "ดูน",
				"hindi": "ड्यून"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/7568ec11-0329-44b4-740a-71b25ef62400/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/ba7095b5-0d99-40bd-1155-b57701c00f00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "사막 깊은 곳. 발길이 닿지 않는 폐허가 모습을 드러냈다.",
						"english": "Deep in the desert. Unseen ruins revealed themselves.",
						"japanese": "砂漠の奥深く。足を踏み入れる者なき廃墟が姿を現した。",
						"chinese": "沙漠深处。人迹罕至的废墟显露了踪迹。",
						"french": "Au plus profond du désert. Des ruines inexplorées se révélèrent.",
						"spanish": "En lo profundo del desierto. Ruinas inalcanzables se revelaron.",
						"vietnamese": "Sâu trong sa mạc. Một tàn tích chưa ai đặt chân đến đã lộ diện.",
						"thai": "ลึกเข้าไปในทะเลทราย ซากปรักหักพังที่ไม่มีใครย่างกรายได้เผยโฉม",
						"hindi": "रेगिस्तान की गहराई में। अछूते खंडहर सामने आ गए।"
					},
					"speaker": "narrator"
				},
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "dune",
					"spot": [
						5,
						2
					]
				},
				{
					"speaker": "dune",
					"content": {
						"korean": "여길 찾다니. 꽤나 운이 좋군.",
						"english": "To find this place. You're quite lucky.",
						"japanese": "ここを見つけるとは。なかなか運がいいな。",
						"chinese": "能找到这里。你运气不错。",
						"french": "Trouver cet endroit. Tu as pas mal de chance.",
						"spanish": "Encontrar este lugar. Tienes bastante suerte.",
						"vietnamese": "Tìm được nơi này. Ngươi khá may mắn đấy.",
						"thai": "ที่นี่ถูกค้นพบ. คุณโชคดีทีเดียว",
						"hindi": "यह जगह मिल गई। तुम काफी भाग्यशाली हो।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "당신은?",
						"english": "And you?",
						"japanese": "あなたは？",
						"chinese": "你是？",
						"french": "Et vous ?",
						"spanish": "¿Y tú?",
						"vietnamese": "Ngươi là ai?",
						"thai": "คุณล่ะ?",
						"hindi": "और तुम?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "dune",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그냥 떠도는 상인일세. 원하는 정보를 얻으려면… 대가가 필요하겠지.",
						"english": "Just a wandering merchant. To get the info you want... a price will be needed.",
						"japanese": "ただの流浪の商人さ。求める情報を手に入れるなら… 代償が必要だろう。",
						"chinese": "只是个流浪商人。想要得到你想要的信息… 恐怕需要付出代价。",
						"french": "Juste un marchand errant. Pour obtenir l'info que tu désires... un prix sera nécessaire.",
						"spanish": "Solo un mercader errante. Para obtener la información que quieres... se necesitará un precio.",
						"vietnamese": "Chỉ là một thương nhân lang thang. Để có được thông tin ngươi muốn... sẽ cần một cái giá.",
						"thai": "แค่พ่อค้าเร่ร่อน. หากต้องการข้อมูล... ก็ต้องมีค่าตอบแทน",
						"hindi": "बस एक घुमंतू व्यापारी। तुम्हें जो जानकारी चाहिए... उसके लिए कीमत चुकानी होगी।"
					}
				},
				{
					"content": {
						"korean": "숨겨진 길을 찾고 있어. 오래된 전설이 말하는.",
						"english": "I'm looking for a hidden path. The one spoken of in ancient legends.",
						"japanese": "隠された道を探している。古の伝説が語る道を。",
						"chinese": "我在找一条隐藏的道路。古老传说中提到的那条。",
						"french": "Je cherche un chemin caché. Celui dont parlent les anciennes légendes.",
						"spanish": "Estoy buscando un camino oculto. El que mencionan las viejas leyendas.",
						"vietnamese": "Ta đang tìm một con đường ẩn. Con đường mà truyền thuyết cổ xưa kể.",
						"thai": "ฉันกำลังมองหาเส้นทางลับ. เส้นทางที่ตำนานเก่าแก่เล่าขาน",
						"hindi": "मैं एक छिपा हुआ रास्ता ढूंढ रहा हूँ। वही जिसका जिक्र पुरानी कहानियों में है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "아아, '그림자 전사의 길' 말인가. 그 길은 고통받는 자들의 눈물로 만들어졌다네.",
						"english": "Ah, 'The Path of the Shadow Warrior,' you mean. That path was forged with the tears of the suffering.",
						"japanese": "ああ、『影の戦士の道』のことか。その道は、苦しむ者たちの涙で造られたのだよ。",
						"chinese": "啊，你是说“影之战士之路”吗？那条路是用受苦之人的眼泪铺成的。",
						"french": "Ah, 'Le Chemin du Guerrier de l'Ombre', tu veux dire. Ce chemin fut forgé par les larmes des souffrants.",
						"spanish": "Ah, 'El Camino del Guerrero Sombrío', ¿te refieres? Ese camino fue forjado con las lágrimas de los que sufrieron.",
						"vietnamese": "À, 'Con đường của Chiến binh Bóng tối' à. Con đường đó được tạo nên từ nước mắt của những người đau khổ.",
						"thai": "อ่า, 'เส้นทางของนักรบเงา' ใช่ไหม. เส้นทางนั้นถูกสร้างขึ้นด้วยน้ำตาของผู้ทุกข์ทรมาน",
						"hindi": "आह, 'छाया योद्धा का पथ', तुम्हारा मतलब है। वह पथ पीड़ितों के आँसुओं से बना है।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "dune"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "dune",
					"spot": [
						4,
						2
					]
				},
				{
					"speaker": "dune",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "예전에는 수많은 전사가 그 길을 걸었지. 하지만 대부분… 모래가 되었어.",
						"english": "Many warriors walked that path before. But most... became sand.",
						"japanese": "かつて、多くの戦士がその道を歩んだ。だが、ほとんどは…砂と化した。",
						"chinese": "曾经无数战士走过那条路。但大多数…都化作了沙尘。",
						"french": "Autrefois, d'innombrables guerriers ont emprunté ce chemin. Mais la plupart… sont devenus sable.",
						"spanish": "Antaño, incontables guerreros recorrieron ese sendero. Pero la mayoría… se convirtió en arena.",
						"vietnamese": "Xưa kia, vô số chiến binh từng đi con đường đó. Nhưng đa số… đều hóa thành cát bụi.",
						"thai": "แต่ก่อนมีนักรบมากมายเดินบนเส้นทางนั้น แต่ส่วนใหญ่… กลายเป็นทรายไปแล้ว",
						"hindi": "पहले कई योद्धा उस मार्ग पर चले। पर ज़्यादातर… रेत बन गए।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "모래가 되었다고?",
						"english": "Became sand?",
						"japanese": "砂に？",
						"chinese": "化作沙尘了？",
						"french": "Devenus sable ?",
						"spanish": "¿Se convirtieron en arena?",
						"vietnamese": "Hóa thành cát bụi sao?",
						"thai": "กลายเป็นทรายหรือ?",
						"hindi": "रेत बन गए?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "dune",
					"content": {
						"korean": "큰 상실 이후, 사막에 스러진 비운의 전사들. 그들의 슬픔이 곧 모래가 되었다네.",
						"english": "After a great loss, unfortunate warriors fell in the desert. Their sorrow soon became the sand.",
						"japanese": "大いなる喪失の後、砂漠に斃れた不運な戦士たち。彼らの悲しみが、やがて砂となったのだ。",
						"chinese": "历经巨大磨难后，不幸的战士们倒在了沙漠中。他们的悲伤，化作了沙尘。",
						"french": "Après une grande perte, des guerriers malheureux sont tombés dans le désert. Leur chagrin est rapidement devenu sable.",
						"spanish": "Tras una gran pérdida, desafortunados guerreros cayeron en el desierto. Su pena pronto se convirtió en arena.",
						"vietnamese": "Sau một mất mát lớn, những chiến binh bất hạnh đã ngã xuống sa mạc. Nỗi buồn của họ đã sớm hóa thành cát.",
						"thai": "หลังจากการสูญเสียครั้งใหญ่ นักรบผู้โชคร้ายล้มตายในทะเลทราย ความเศร้าโศกของพวกเขาก็กลายเป็นทรายในไม่ช้า",
						"hindi": "एक बड़े नुकसान के बाद, अभागे योद्धा रेगिस्तान में गिरे। उनका दुख जल्द ही रेत बन गया।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그럼 그들은 지금도…?",
						"english": "So they are still...?",
						"japanese": "なら彼らは今も…？",
						"chinese": "那么他们现在还在…？",
						"french": "Alors ils sont toujours… ?",
						"spanish": "Entonces, ¿ellos aún...?",
						"vietnamese": "Vậy họ vẫn còn…?",
						"thai": "ถ้าอย่างนั้นพวกเขาก็ยังคง…?",
						"hindi": "तो वे अभी भी…?"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "그림자 전사의 길은… 살아있는 자를 위한 곳이 아닐세.",
						"english": "The path of the shadow warrior... is not for the living.",
						"japanese": "影の戦士の道は…生ける者のための場所ではない。",
						"chinese": "影之战士之路…并非为生者而设。",
						"french": "Le chemin du guerrier de l'ombre… n'est pas pour les vivants.",
						"spanish": "El sendero del guerrero de las sombras… no es para los vivos.",
						"vietnamese": "Con đường của chiến binh bóng đêm… không dành cho người sống.",
						"thai": "เส้นทางของนักรบเงา… ไม่ใช่สำหรับผู้มีชีวิต",
						"hindi": "छाया योद्धा का मार्ग… जीवितों के लिए नहीं है।"
					},
					"speaker": "dune"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "dune",
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "이 길의 수호자는… 자비를 모르는 모래 전사들이지.",
						"english": "The guardians of this path... are sand warriors who know no mercy.",
						"japanese": "この道の守護者は…慈悲を知らぬ砂の戦士たちだ。",
						"chinese": "这条路的守护者…是那些不知怜悯的沙尘战士。",
						"french": "Les gardiens de ce chemin… sont des guerriers de sable qui ne connaissent aucune pitié.",
						"spanish": "Los guardianes de este sendero… son guerreros de arena que no conocen la piedad.",
						"vietnamese": "Những người bảo vệ con đường này… là các chiến binh cát không biết lòng thương xót.",
						"thai": "ผู้พิทักษ์ของเส้นทางนี้… คือนักรบทรายที่ไม่รู้จักความเมตตา",
						"hindi": "इस मार्ग के संरक्षक… रेत के योद्धा हैं जिन्हें दया नहीं आती।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "dune"
				},
				{
					"content": {
						"korean": "수호자라니?",
						"english": "Guardians?",
						"japanese": "守護者だと？",
						"chinese": "守护者？",
						"french": "Des gardiens ?",
						"spanish": "¿Guardianes?",
						"vietnamese": "Người bảo vệ sao?",
						"thai": "ผู้พิทักษ์เหรอ?",
						"hindi": "संरक्षक?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "자신들의 영역을 침범하는 자들을 절대 용서하지 않아. 곧 깨어날 거야.",
						"english": "They never forgive those who invade their territory. They will awaken soon.",
						"japanese": "彼らは自らの領域を侵す者を決して許さない。まもなく目覚めるだろう。",
						"chinese": "他们绝不会原谅侵犯他们领地的人。很快就会苏醒。",
						"french": "Ils ne pardonnent jamais à ceux qui envahissent leur territoire. Ils vont bientôt s'éveiller.",
						"spanish": "Nunca perdonan a quienes invaden su territorio. Pronto despertarán.",
						"vietnamese": "Họ sẽ không bao giờ tha thứ cho những kẻ xâm phạm lãnh địa của mình. Họ sẽ sớm thức tỉnh thôi.",
						"thai": "พวกเขาจะไม่มีวันให้อภัยผู้ที่บุกรุกอาณาเขตของตน พวกเขาจะตื่นขึ้นในไม่ช้า",
						"hindi": "वे उन लोगों को कभी माफ़ नहीं करते जो उनके क्षेत्र पर आक्रमण करते हैं। वे जल्द ही जागेंगे।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "dune"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "겁주는 소리 하지 마.",
						"english": "Don't try to scare me.",
						"japanese": "脅かすな。",
						"chinese": "别吓唬我。",
						"french": "Ne me fais pas peur.",
						"spanish": "No me asustes.",
						"vietnamese": "Đừng hù dọa tôi.",
						"thai": "อย่าขู่ฉันเลย",
						"hindi": "मुझे डराने की कोशिश मत करो।"
					}
				},
				{
					"speaker": "dune",
					"content": {
						"korean": "후회할 걸세. 이 길은 자네에게 너무 위험해.",
						"english": "You'll regret it. This path is too dangerous for you.",
						"japanese": "後悔するぞ。この道は君にはあまりに危険だ。",
						"chinese": "你会后悔的。这条路对你来说太危险了。",
						"french": "Tu le regretteras. Ce chemin est trop dangereux pour toi.",
						"spanish": "Te arrepentirás. Este sendero es demasiado peligroso para ti.",
						"vietnamese": "Ngươi sẽ hối hận đấy. Con đường này quá nguy hiểm cho ngươi.",
						"thai": "เจ้าจะต้องเสียใจ เส้นทางนี้อันตรายเกินไปสำหรับเจ้า",
						"hindi": "तुम्हें पछताना पड़ेगा। यह रास्ता तुम्हारे लिए बहुत खतरनाक है。"
					},
					"emotion": "sad",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "dune",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						2
					]
				},
				{
					"content": {
						"korean": "…왔군. 그림자 전사들이.",
						"english": "...They're here. The Shadow Warriors.",
						"japanese": "…来たか。影の戦士たちが。",
						"chinese": "…来了。暗影战士们。",
						"french": "...Ils sont là. Les Guerriers de l'Ombre.",
						"spanish": "...Ya están aquí. Los Guerreros de la Sombra.",
						"vietnamese": "...Chúng đã đến. Các Chiến binh Bóng tối.",
						"thai": "...มาแล้ว. เหล่านักรบเงามืด.",
						"hindi": "...वे आ गए। छाया योद्धा।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "dune"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "뭐야, 갑자기!",
						"english": "What, suddenly!",
						"japanese": "なんだ、いきなり！",
						"chinese": "什么，突然就来了！",
						"french": "Quoi, tout à coup !",
						"spanish": "¡Qué, de repente!",
						"vietnamese": "Gì thế, bất ngờ vậy!",
						"thai": "อะไรนะ, จู่ๆ ก็!",
						"hindi": "क्या, अचानक!"
					}
				},
				{
					"action": "exit",
					"type": "direction",
					"duration_ms": 400,
					"speaker": "dune",
					"direction": "down"
				},
				{
					"content": {
						"korean": "내 말 안 듣더니. 어쩔 수 없지. 행운을 빌어, 용사여.",
						"english": "You didn't listen to me. Can't be helped. Good luck, warrior.",
						"japanese": "私の言うことを聞かなかったな。仕方ない。幸運を祈る、勇者よ。",
						"chinese": "你不听我的。没办法了。祝你好运，勇士。",
						"french": "Tu ne m'as pas écouté. Tant pis. Bonne chance, guerrier.",
						"spanish": "No me escuchaste. No hay remedio. Buena suerte, guerrero.",
						"vietnamese": "Ngươi không nghe lời ta. Hết cách rồi. Chúc may mắn, dũng sĩ.",
						"thai": "เจ้าไม่ฟังข้าเลย. ช่วยไม่ได้. ขอให้โชคดี, นักรบเอ๋ย.",
						"hindi": "तुमने मेरी बात नहीं मानी। अब कुछ नहीं कर सकते। शुभकामनाएँ, योद्धा।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "dune"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거대한 모래 폭풍이 몰아쳤다. 그 안에서 어렴풋이 형체가 나타났다.",
						"english": "A colossal sandstorm raged. Within it, a faint form emerged.",
						"japanese": "巨大な砂嵐が吹き荒れた。その中から、おぼろげな人影が現れた。",
						"chinese": "一场巨大的沙尘暴袭来。其中，一个模糊的身影显现。",
						"french": "Une tempête de sable colossale fit rage. En son sein, une forme indistincte apparut.",
						"spanish": "Una colosal tormenta de arena arremetió. Dentro de ella, una forma tenue apareció.",
						"vietnamese": "Một cơn bão cát khổng lồ ập đến. Bên trong nó, một hình thù mờ ảo xuất hiện.",
						"thai": "พายุทรายมหึมากระหน่ำซัด. ภายในนั้น, ร่างเงาลางๆ ปรากฏขึ้น.",
						"hindi": "एक विशाल रेत का तूफान उमड़ पड़ा। उसके भीतर, एक धुंधली आकृति उभरी।"
					}
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "모래 폭풍이 모든 것을 집어삼켰다. 끝없는 어둠 속으로.",
						"english": "The sandstorm devoured everything, plunging it into endless darkness.",
						"japanese": "砂嵐がすべてを飲み込んだ。果てなき闇の中へ。",
						"chinese": "沙尘暴吞噬了一切。进入无尽的黑暗。",
						"french": "La tempête de sable dévora tout, les entraînant dans les ténèbres sans fin.",
						"spanish": "La tormenta de arena lo devoró todo, sumergiéndolos en una oscuridad infinita.",
						"vietnamese": "Cơn bão cát nuốt chửng mọi thứ. Vào bóng tối vô tận.",
						"thai": "พายุทรายกลืนกินทุกสิ่ง สู่ความมืดมิดอันไร้ที่สิ้นสุด",
						"hindi": "रेत के तूफान ने सब कुछ निगल लिया। अंतहीन अँधेरे में।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "크크크… 결국 너희도 우리와 같은 존재가 될 뿐.",
						"english": "Hehehe... In the end, you too will become like us.",
						"japanese": "ククク…結局お前たちも我々と同じ存在になるだけだ。",
						"chinese": "呵呵呵…最终你们也会变得和我们一样。",
						"french": "Hahaha... Au final, vous aussi deviendrez comme nous.",
						"spanish": "Jejeje... Al final, vosotros también seréis como nosotros.",
						"vietnamese": "Khà khà khà… Cuối cùng thì các ngươi cũng sẽ trở thành giống như chúng ta mà thôi.",
						"thai": "ฮ่าๆๆ… ในที่สุดพวกเจ้าก็จะกลายเป็นเช่นเดียวกับพวกเรา",
						"hindi": "हाहाहा… अंत में, तुम भी हमारे जैसे ही बन जाओगे।"
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "아직 끝나지 않았어… 절대 포기 안 해!",
						"english": "It's not over yet... I'll never give up!",
						"japanese": "まだ終わってない…絶対に諦めない！",
						"chinese": "还没结束…我绝不会放弃！",
						"french": "Ce n'est pas encore fini... Je n'abandonnerai jamais !",
						"spanish": "Aún no ha terminado... ¡Nunca me rendiré!",
						"vietnamese": "Vẫn chưa kết thúc… Tôi sẽ không bao giờ bỏ cuộc!",
						"thai": "ยังไม่จบ… ฉันจะไม่มีวันยอมแพ้!",
						"hindi": "यह अभी खत्म नहीं हुआ है… मैं कभी हार नहीं मानूंगा!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "침입자들… 감히 이 길을 더럽히는가.",
						"english": "Intruders... How dare you defile this path.",
						"japanese": "侵入者め… よくもこの道を汚すな。",
						"chinese": "入侵者… 竟敢玷污这条路。",
						"french": "Envahisseurs... Comment osez-vous souiller ce chemin.",
						"spanish": "Intrusos... ¿Cómo osáis profanar este camino?",
						"vietnamese": "Những kẻ xâm nhập... Dám vấy bẩn con đường này sao.",
						"thai": "ผู้บุกรุก... กล้าดียังไงมาแปดเปื้อนเส้นทางนี้.",
						"hindi": "घुसपैठिए... तुम्हारी हिम्मत कैसे हुई इस रास्ते को अपवित्र करने की।"
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "네가 그림자 전사들의 우두머리인가!",
						"english": "Are you the leader of the Shadow Warriors!",
						"japanese": "貴様が影の戦士たちの頭目か！",
						"chinese": "你就是暗影战士的首领吗！",
						"french": "Es-tu le chef des Guerriers de l'Ombre !",
						"spanish": "¡¿Eres el líder de los Guerreros de la Sombra?!",
						"vietnamese": "Ngươi là thủ lĩnh của các Chiến binh Bóng tối sao!",
						"thai": "เจ้าคือหัวหน้าของเหล่านักรบเงามืดหรือ!",
						"hindi": "क्या तुम छाया योद्धाओं के मुखिया हो!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "우리의 고통을 모욕하지 마라. 너희도 곧 모래가 될 것이다.",
						"english": "Do not insult our suffering. You too shall soon become sand.",
						"japanese": "我らの苦痛を侮辱するな。お前たちもじきに砂となるだろう。",
						"chinese": "别侮辱我们的痛苦。你们也很快会化为沙尘。",
						"french": "N'insultez pas notre souffrance. Vous aussi deviendrez bientôt du sable.",
						"spanish": "No insultéis nuestro sufrimiento. Vosotros también os convertiréis pronto en arena.",
						"vietnamese": "Đừng xúc phạm nỗi đau của chúng ta. Các ngươi cũng sẽ sớm hóa thành cát bụi.",
						"thai": "อย่าดูหมิ่นความเจ็บปวดของเรา. พวกเจ้าเองก็จะกลายเป็นทรายในไม่ช้า.",
						"hindi": "हमारे कष्ट का अपमान मत करो। तुम भी जल्द ही रेत बन जाओगे।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "그럴 순 없어!",
						"english": "That won't happen!",
						"japanese": "そんなことさせるか！",
						"chinese": "绝不可能！",
						"french": "Impossible !",
						"spanish": "¡Eso no pasará!",
						"vietnamese": "Không thể như vậy được!",
						"thai": "ไม่มีทาง!",
						"hindi": "ऐसा नहीं हो सकता!"
					}
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…말도 안 돼. 내가… 모래가 된다니.",
						"english": "...Impossible. I... becoming sand.",
						"japanese": "…まさか。私が… 砂になるだと。",
						"chinese": "…不可能。我… 竟会化为沙尘。",
						"french": "...C'est impossible. Moi... devenir du sable.",
						"spanish": "...No puede ser. Yo... convertirme en arena.",
						"vietnamese": "...Không thể nào. Ta... hóa thành cát ư.",
						"thai": "...ไม่จริง. ข้า... กลายเป็นทรายงั้นหรือ.",
						"hindi": "...असंभव। मैं... रेत बन जाऊँगा।"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이건 시작일 뿐… 울부짖는 오아시스는… 너희를 기다리지 않아.",
						"english": "This is just the beginning... The Howling Oasis... does not await you.",
						"japanese": "これは始まりに過ぎない… 嘆きのオアシスは… お前たちを待ってはいない。",
						"chinese": "这只是开始… 呜咽绿洲… 不会等你们。",
						"french": "Ce n'est que le début... L'Oasis Hurlante... ne vous attendra pas.",
						"spanish": "Esto es solo el principio... El Oasis Aullante... no os esperará.",
						"vietnamese": "Đây chỉ là khởi đầu... Ốc đảo Uất hận... sẽ không chờ đợi các ngươi.",
						"thai": "นี่เป็นเพียงจุดเริ่มต้น... โอเอซิสคำราม... ไม่ได้รอพวกเจ้า.",
						"hindi": "यह तो बस शुरुआत है... चीखता रेगिस्तान... तुम्हारा इंतजार नहीं करेगा।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리야!?",
						"english": "What was that!?",
						"japanese": "何だこれ！？",
						"chinese": "什么声音？！",
						"french": "Qu'est-ce que c'est que ça !?",
						"spanish": "¿¡Qué fue eso!?",
						"vietnamese": "Cái quái gì vậy!?",
						"thai": "เสียงอะไรน่ะ!?",
						"hindi": "यह क्या था!?"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자는 모래가 되어 흩어졌다. 하지만 뒤에 남은 것은 알 수 없는 불안감이었다.",
						"english": "The colossal shadow dispersed into sand. Yet, an unsettling unease remained.",
						"japanese": "巨大な影は砂となって散った。だが、後に残ったのは、得体のしれない不安感だった。",
						"chinese": "巨大的影子化作沙尘消散了。然而，留下的却是一种莫名的不安。",
						"french": "L'ombre colossale se dispersa en sable. Pourtant, une anxiété indéfinissable subsistait.",
						"spanish": "La sombra colosal se disipó en arena. Sin embargo, quedó una inquietud inexplicable.",
						"vietnamese": "Bóng đen khổng lồ tan biến thành cát bụi. Nhưng điều còn lại là một cảm giác bất an khó tả.",
						"thai": "เงาขนาดยักษ์สลายเป็นผงทราย แต่สิ่งที่หลงเหลืออยู่คือความไม่สบายใจที่อธิบายไม่ได้",
						"hindi": "विशालकाय परछाई रेत बनकर बिखर गई। फिर भी, एक अज्ञात बेचैनी बनी रही।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "여정은 더욱 깊은 미궁으로 향하고 있었다.",
						"english": "The journey pressed on into an even deeper labyrinth.",
						"japanese": "旅はさらに深い迷宮へと向かっていた。",
						"chinese": "旅程正走向更深的迷宫。",
						"french": "Le voyage s'enfonçait dans un labyrinthe encore plus profond.",
						"spanish": "El viaje se adentraba en un laberinto aún más profundo.",
						"vietnamese": "Hành trình tiến sâu hơn vào mê cung.",
						"thai": "การเดินทางมุ่งหน้าสู่เขาวงกตที่ลึกล้ำยิ่งขึ้น",
						"hindi": "यात्रा और भी गहरे भूलभुलैया की ओर बढ़ रही थी।"
					},
					"speaker": "narrator"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"사막의 심장부로 향하는 길. 뜨거운 태양과 모래바람만이 전부였다.",
			"떠도는 상인은 숨겨진 길을 알려주었지만 — 그 대가는 늘 예상치 못했다.",
			"모래가 된 전사들, 그리고 끝나지 않는 추격전.",
			"이 길의 끝에 기다리는 것은 진실일까, 아니면 또 다른 함정일까."
		],
		"english": [
			"The path to the heart of the desert. Only scorching sun and sandstorms awaited.",
			"The wandering merchant revealed a hidden path — but the price was always unforeseen.",
			"Warriors turned to sand, and an endless pursuit.",
			"At the end of this path, awaits truth, or another trap?"
		],
		"japanese": [
			"砂漠の心臓部へ向かう道。ただ、灼熱の太陽と砂嵐だけがあった。",
			"流浪の商人は隠された道を教えてくれたが — その代償はいつも予想外だった。",
			"砂と化した戦士たち、そして終わらない追撃戦。",
			"この道の先に待つのは、真実か、それともまた別の罠か。"
		],
		"chinese": [
			"通往沙漠腹地的路。只有炙热的太阳和沙尘暴。",
			"流浪商人指引了一条隐藏的小路 — 但代价总是出人意料。",
			"化为沙尘的战士们，以及永无止境的追击战。",
			"这条路的尽头等待着的是真相，还是另一个陷阱？"
		],
		"french": [
			"Le chemin vers le cœur du désert. Seuls le soleil brûlant et les tempêtes de sable.",
			"Le marchand errant révéla un chemin caché — mais le prix était toujours imprévu.",
			"Des guerriers transformés en sable, et une poursuite sans fin.",
			"Au bout de ce chemin, qu'attend : la vérité, ou un autre piège ?"
		],
		"spanish": [
			"El camino hacia el corazón del desierto. Solo el sol abrasador y las tormentas de arena.",
			"El mercader errante reveló un camino oculto — pero el precio siempre fue imprevisto.",
			"Guerreros convertidos en arena, y una persecución interminable.",
			"Al final de este camino, ¿espera la verdad, o otra trampa?"
		],
		"vietnamese": [
			"Con đường dẫn vào lòng sa mạc. Chỉ có mặt trời thiêu đốt và bão cát.",
			"Thương nhân lang thang chỉ ra một con đường ẩn — nhưng cái giá luôn khó lường.",
			"Những chiến binh hóa cát, và cuộc truy đuổi không hồi kết.",
			"Cuối con đường này, chờ đợi là sự thật, hay một cái bẫy khác?"
		],
		"thai": [
			"เส้นทางสู่ใจกลางทะเลทราย มีเพียงดวงอาทิตย์ที่แผดเผาและพายุทรายเท่านั้น",
			"พ่อค้าเร่เผยเส้นทางลับ — แต่ค่าตอบแทนมักคาดไม่ถึงเสมอ",
			"นักรบที่กลายเป็นทราย และการไล่ล่าที่ไม่สิ้นสุด",
			"ที่ปลายทางนี้ สิ่งที่รอคอยคือความจริง หรือกับดักอีกอันกันแน่"
		],
		"hindi": [
			"रेगिस्तान के दिल का रास्ता। सिर्फ तपती धूप और रेतीले तूफान थे।",
			"घुमंतू व्यापारी ने एक छिपा हुआ रास्ता बताया — लेकिन कीमत हमेशा अप्रत्याशित थी।",
			"रेत में बदल गए योद्धा, और एक अंतहीन पीछा।",
			"इस रास्ते के अंत में, सच इंतज़ार कर रहा है, या कोई और जाल?"
		]
	}
} as const;
