export const scenario_snowy_skaldrage_4_05 = {
	"scenario_id": "snowy_skaldrage_4_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "snowy",
	"actors": {
		"finn": {
			"id": "mon_3e3930d2-c2d3-4ad0-9818-26d259edac77",
			"name": {
				"korean": "핀",
				"english": "Finn",
				"japanese": "フィン",
				"chinese": "芬恩",
				"french": "Finn",
				"spanish": "Finn",
				"vietnamese": "Finn",
				"thai": "ฟินน์",
				"hindi": "फिन"
			},
			"description": "",
			"face_image_url": "",
			"battle_sprite_url": ""
		}
	},
	"boss": {
		"pool_id": "pool_Madness_Skaldrage_V1"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "시간은 멈추지 않고 흘러, 미궁은 더욱 깊은 광기로 물들었다.",
						"english": "Time flowed ceaselessly, and the labyrinth was dyed with deeper madness.",
						"japanese": "時間は止まることなく流れ、迷宮はさらに深い狂気に染まっていった。",
						"chinese": "时间不停流逝，迷宫被更深的疯狂所浸染。",
						"french": "Le temps s'écoulait sans cesse, et le labyrinthe se teignait d'une folie plus profonde.",
						"spanish": "El tiempo fluía incesantemente, y el laberinto se teñía de una locura más profunda.",
						"vietnamese": "Thời gian trôi không ngừng, và mê cung càng nhuốm màu điên loạn sâu sắc hơn.",
						"thai": "เวลายังคงไหลไปไม่หยุด และเขาวงกตก็ถูกย้อมด้วยความบ้าคลั่งที่ลึกซึ้งยิ่งขึ้น",
						"hindi": "समय बिना रुके बहता रहा, और भूलभुलैया गहरे पागलपन से रंग गई।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "카운트다운이… 이제 정말 얼마 안 남았어.",
						"english": "The countdown... it's almost over now.",
						"japanese": "カウントダウンが…もう本当に残り少ない。",
						"chinese": "倒计时…真的所剩无几了。",
						"french": "Le compte à rebours… il ne reste vraiment plus beaucoup de temps.",
						"spanish": "La cuenta atrás… ya queda muy poco.",
						"vietnamese": "Đếm ngược… thực sự không còn nhiều thời gian nữa.",
						"thai": "การนับถอยหลัง... เหลืออีกไม่มากแล้วจริงๆ",
						"hindi": "उलटी गिनती... अब सचमुच बहुत कम बची है।"
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "finn"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "finn",
					"content": {
						"korean": "아니, 뭔가 이상해. 예언자의 말이… 너무 완벽하게 절망적이야.",
						"english": "No, something's wrong. The Prophet's words... they're too perfectly despairing.",
						"japanese": "いや、何かおかしい。預言者の言葉が…あまりにも完璧に絶望的だ。",
						"chinese": "不，有些不对劲。先知的话…太过绝望了。",
						"french": "Non, quelque chose cloche. Les paroles du Prophète… sont trop parfaitement désespérées.",
						"spanish": "No, algo anda mal. Las palabras del Profeta… son demasiado perfectamente desesperanzadoras.",
						"vietnamese": "Không, có gì đó không ổn. Lời của Tiên Tri… quá đỗi tuyệt vọng.",
						"thai": "ไม่สิ มีบางอย่างผิดปกติ คำพูดของท่านศาสดา... มันสิ้นหวังเกินไปอย่างสมบูรณ์แบบ",
						"hindi": "नहीं, कुछ गड़बड़ है। पैगंबर के शब्द... वे पूरी तरह से निराशाजनक हैं।"
					}
				},
				{
					"speaker": "finn",
					"content": {
						"korean": "이 모래시계… 단순한 시간 측정이 아니야.",
						"english": "This hourglass… it's not just a simple time measurement.",
						"japanese": "この砂時計…単なる時間測定じゃない。",
						"chinese": "这个沙漏…不仅仅是简单的计时。",
						"french": "Ce sablier… ce n'est pas une simple mesure du temps.",
						"spanish": "Este reloj de arena… no es una simple medida del tiempo.",
						"vietnamese": "Đồng hồ cát này… không chỉ là đo thời gian đơn thuần.",
						"thai": "นาฬิกาทรายนี้... ไม่ใช่แค่การวัดเวลาธรรมดา",
						"hindi": "यह रेतघड़ी... यह सिर्फ समय मापने का यंत्र नहीं है।"
					},
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
					"action": "enter",
					"speaker": "finn",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "finn",
					"content": {
						"korean": "예언자가 말한 '운명'이라는 것… 그건 사실 자기 자신을 가둔 절규였어.",
						"english": "The 'fate' the Prophet spoke of… it was actually a cry of despair, trapping himself.",
						"japanese": "預言者が語った「運命」というもの…それは実は自分自身を閉じ込めた絶叫だったんだ。",
						"chinese": "先知所说的“命运”…那实际上是困住他自己的绝望呐喊。",
						"french": "Ce 'destin' dont parlait le Prophète… c'était en fait un cri de désespoir, l'enfermant lui-même.",
						"spanish": "El 'destino' del que habló el Profeta… en realidad era un grito de desesperación que lo atrapaba a él mismo.",
						"vietnamese": "Cái 'số phận' mà Tiên Tri nói đến… thực ra là một tiếng kêu tuyệt vọng tự giam cầm bản thân ông ta.",
						"thai": "'โชคชะตา' ที่ท่านศาสดากล่าวถึง... แท้จริงแล้วคือเสียงกรีดร้องแห่งความสิ้นหวังที่กักขังตัวท่านเอง",
						"hindi": "पैगंबर ने जिस 'नियति' की बात की थी... वह वास्तव में खुद को फंसाने वाली एक चीख थी।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "절규? 무슨 소리야, 핀? 더 혼란스러워질 뿐이라고.",
						"english": "A cry of despair? What are you talking about, Finn? That just makes it more confusing.",
						"japanese": "絶叫？何のことだ、フィン？余計に混乱するだけじゃないか。",
						"chinese": "绝望的呐喊？你在说什么，芬恩？只会让人更困惑。",
						"french": "Un cri de désespoir ? De quoi parles-tu, Finn ? Ça ne fait que rendre les choses plus confuses.",
						"spanish": "Un grito de desesperación? ¿De qué hablas, Finn? Eso solo lo hace más confuso.",
						"vietnamese": "Tiếng kêu tuyệt vọng? Cậu đang nói gì vậy, Finn? Chỉ càng làm mọi chuyện thêm rối rắm thôi.",
						"thai": "เสียงกรีดร้อง? นายพูดเรื่องอะไร ฟินน์? มันแค่ทำให้สับสนมากขึ้นเท่านั้นแหละ",
						"hindi": "चीख? तुम क्या कह रहे हो, फिन? इससे तो और भ्रम पैदा हो रहा है।"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "모래시계 속 모래가 가끔 멈추거나 역류하는 환영을 봤어.",
						"english": "I saw a vision of the sand in the hourglass sometimes stopping or flowing backward.",
						"japanese": "砂時計の中の砂が時々止まったり、逆流する幻影を見たんだ。",
						"chinese": "我看到了沙漏里的沙子有时会停止或逆流的幻象。",
						"french": "J'ai vu une vision du sable dans le sablier s'arrêter parfois ou couler à l'envers.",
						"spanish": "Vi una visión de la arena del reloj de arena a veces deteniéndose o fluyendo hacia atrás.",
						"vietnamese": "Tớ đã thấy ảo ảnh cát trong đồng hồ cát đôi khi ngừng lại hoặc chảy ngược.",
						"thai": "ฉันเห็นภาพหลอนของทรายในนาฬิกาทรายที่บางครั้งก็หยุดนิ่งหรือไหลย้อนกลับ",
						"hindi": "मैंने एक ऐसा भ्रम देखा कि रेतघड़ी की रेत कभी-कभी रुक जाती है या उल्टी बहने लगती है।"
					},
					"speaker": "finn",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "이건 진실을 숨기기 위한 장치였어. 우리를 속박하기 위한 도구.",
						"english": "This was a device to hide the truth. A tool to shackle us.",
						"japanese": "これは真実を隠すための装置だったんだ。僕たちを束縛するための道具。",
						"chinese": "这是为了隐藏真相的装置。一个束缚我们的工具。",
						"french": "C'était un dispositif pour cacher la vérité. Un outil pour nous enchaîner.",
						"spanish": "Esto era un dispositivo para ocultar la verdad. Una herramienta para encadenarnos.",
						"vietnamese": "Đây là một thiết bị để che giấu sự thật. Một công cụ để trói buộc chúng ta.",
						"thai": "นี่เป็นอุปกรณ์เพื่อซ่อนความจริง เครื่องมือที่จะกักขังเรา",
						"hindi": "यह सच्चाई को छिपाने का एक उपकरण था। हमें बांधने का एक औजार।"
					},
					"speaker": "finn"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"speaker": "finn",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "예언자! 당신의 예언은 거짓이야!",
						"english": "Prophet! Your prophecy is a lie!",
						"japanese": "預言者！あなたの予言は嘘だ！",
						"chinese": "先知！你的预言是谎言！",
						"french": "Prophète ! Ta prophétie est un mensonge !",
						"spanish": "¡Profeta! ¡Tu profecía es una mentira!",
						"vietnamese": "Tiên Tri! Lời tiên tri của ông là giả dối!",
						"thai": "ท่านศาสดา! คำทำนายของท่านเป็นเรื่องโกหก!",
						"hindi": "पैगंबर! तुम्हारी भविष्यवाणी झूठी है!"
					},
					"speaker": "finn",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "finn",
					"content": {
						"korean": "이 모래시계는 당신의 광기를 가두고, 우리를 미궁에 묶어두려는 덫일 뿐이야!",
						"english": "This hourglass is just a trap to imprison your madness and bind us to this labyrinth!",
						"japanese": "この砂時計はあなたの狂気を閉じ込め、私たちを迷宮に縛り付けようとする罠にすぎない！",
						"chinese": "这个沙漏不过是个陷阱，用来囚禁你的疯狂，并将我们困在这迷宫里！",
						"french": "Ce sablier n'est qu'un piège pour emprisonner ta folie et nous lier à ce labyrinthe !",
						"spanish": "¡Este reloj de arena es solo una trampa para aprisionar tu locura y atarnos a este laberinto!",
						"vietnamese": "Đồng hồ cát này chỉ là một cái bẫy để giam cầm sự điên rồ của ông và trói buộc chúng ta vào mê cung này!",
						"thai": "นาฬิกาทรายนี้เป็นแค่กับดักเพื่อกักขังความบ้าคลั่งของท่าน และผูกมัดเราไว้ในเขาวงกตนี้เท่านั้น!",
						"hindi": "यह रेतघड़ी तुम्हारी सनक को कैद करने और हमें इस भूलभुलैया में बांधे रखने का बस एक जाल है!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…네까짓 것이 무엇을 안다고…!",
						"english": "...What would someone like you know...!",
						"japanese": "…お前ごときが何を知るというのか…！",
						"chinese": "…你这种东西，又懂得什么…！",
						"french": "…Qu'est-ce que quelqu'un comme toi pourrait savoir… !",
						"spanish": "…¡Qué sabrá una insignificante como tú…!",
						"vietnamese": "…Cái thứ như ngươi thì biết gì…!",
						"thai": "...คนอย่างแกจะไปรู้อะไร...!",
						"hindi": "...तुम जैसे क्या जानोगे...!"
					},
					"speaker": "boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "몸이… 흔들려! 미궁이 요동치고 있어!",
						"english": "My body... it's shaking! The labyrinth is trembling!",
						"japanese": "体が…揺れる！迷宮が揺れ動いている！",
						"chinese": "身体…在颤抖！迷宫在晃动！",
						"french": "Mon corps… il tremble ! Le labyrinthe est en train de vaciller !",
						"spanish": "¡Mi cuerpo… tiembla! ¡El laberinto se estremece!",
						"vietnamese": "Cơ thể… run rẩy! Mê cung đang rung chuyển!",
						"thai": "ร่างกาย... สั่นสะเทือน! เขาวงกตกำลังสั่นไหว!",
						"hindi": "मेरा शरीर... कांप रहा है! भूलभुलैया हिल रही है!"
					},
					"emotion": "sad",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "얼음 형체가 격렬하게 진동하며 수천 개의 파편으로 산산조각 났다. 그 틈새로 고통스러운 비명이 터져 나왔다.",
						"english": "The ice figure vibrated violently, shattering into a thousand fragments. A painful scream erupted from the cracks.",
						"japanese": "氷の像が激しく振動し、数千の破片となって砕け散った。その隙間から苦痛の叫びが迸り出た。",
						"chinese": "冰之形体剧烈震动，碎裂成数千片。痛苦的尖叫声从裂缝中爆发出来。",
						"french": "La forme de glace vibra violemment, se brisant en mille fragments. Un cri douloureux s'échappa des fissures.",
						"spanish": "La figura de hielo vibró violentamente, rompiéndose en miles de fragmentos. Un grito doloroso brotó de las grietas.",
						"vietnamese": "Hình thể băng rung chuyển dữ dội, vỡ tan thành hàng ngàn mảnh vụn. Một tiếng hét đau đớn vang lên từ những khe nứt.",
						"thai": "ร่างน้ำแข็งสั่นสะเทือนอย่างรุนแรง แตกกระจายเป็นพันๆ ชิ้น เสียงกรีดร้องเจ็บปวดเล็ดลอดออกมาจากรอยร้าวเหล่านั้น",
						"hindi": "बर्फीला रूप हिंसक रूप से कंपन करने लगा, और हजारों टुकड़ों में बिखर गया। दरारों से एक दर्दनाक चीख फूट पड़ी।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "얼음 조각 사이로 비치는 섬광, 그리고 광기로 번뜩이는 차가운 눈동자.",
						"english": "A flash of light between the ice fragments, and cold eyes gleaming with madness.",
						"japanese": "氷の破片の間から漏れる閃光、そして狂気にきらめく冷たい瞳。",
						"chinese": "冰块间闪烁的光芒，以及因疯狂而闪耀的冰冷双眼。",
						"french": "Un éclair de lumière entre les fragments de glace, et des yeux froids brillant de folie.",
						"spanish": "Un destello de luz entre los fragmentos de hielo, y ojos fríos brillando con locura.",
						"vietnamese": "Ánh sáng lóe lên giữa những mảnh băng, và đôi mắt lạnh lẽo lấp lánh sự điên loạn.",
						"thai": "แสงวาบส่องประกายท่ามกลางเศษน้ำแข็ง และดวงตาเย็นชาที่เปล่งประกายด้วยความบ้าคลั่ง",
						"hindi": "बर्फ के टुकड़ों के बीच से एक चमक, और पागलपन से चमकती ठंडी आँखें।"
					},
					"speaker": "narrator"
				},
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"type": "direction",
					"action": "enter",
					"speaker": "finn"
				},
				{
					"speaker": "finn",
					"content": {
						"korean": "벽화 속 눈물 흘리는 샤먼! 당신이었어! 추방당한 샤먼 욘더!",
						"english": "The shaman weeping in the mural! It was you! Yonder, the banished shaman!",
						"japanese": "壁画の中の涙を流すシャーマン！あなただったのね！追放されたシャーマン、ヨンダー！",
						"chinese": "壁画中流泪的萨满！是你！被放逐的萨满尤恩德！",
						"french": "La chamane en larmes dans la fresque ! C'était toi ! Yonder, la chamane bannie !",
						"spanish": "¡La chamana que lloraba en el mural! ¡Eras tú! ¡Yonder, la chamana desterrada!",
						"vietnamese": "Vị shaman khóc trong bức bích họa! Chính là ngươi! Shaman bị trục xuất, Yonder!",
						"thai": "หมอผีที่หลั่งน้ำตาในภาพจิตรกรรมฝาผนัง! เป็นเธอเอง! ยอนเดอร์ หมอผีที่ถูกเนรเทศ!",
						"hindi": "भित्तिचित्र में रोती हुई शमन! तुम ही थे! योंडर, निर्वासित शमन!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "boss",
					"content": {
						"korean": "그래! 내가 욘더다! 얼어붙은 광기의 샤먼!",
						"english": "Yes! I am Yonder! The Shaman of Frozen Madness!",
						"japanese": "そうだ！私がヨンダーだ！凍てついた狂気のシャーマン！",
						"chinese": "没错！我就是尤恩德！冰封疯癫的萨满！",
						"french": "Oui ! Je suis Yonder ! La Chamane de la Folie Gelée !",
						"spanish": "¡Sí! ¡Soy Yonder! ¡La Chamana de la Locura Congelada!",
						"vietnamese": "Phải! Ta là Yonder! Vị shaman của sự điên loạn đóng băng!",
						"thai": "ใช่! ฉันคือยอนเดอร์! หมอผีแห่งความบ้าคลั่งที่เยือกแข็ง!",
						"hindi": "हाँ! मैं योंडर हूँ! जमी हुई पागलपन की शमन!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "boss",
					"content": {
						"korean": "이 미궁은 내 고통이자, 너희의 무덤이 될 것이다!",
						"english": "This labyrinth is my torment, and it shall be your tomb!",
						"japanese": "この迷宮は私の苦痛であり、お前たちの墓場となるだろう！",
						"chinese": "这座迷宫是我的痛苦，也将成为你们的坟墓！",
						"french": "Ce labyrinthe est mon tourment, et il sera votre tombe !",
						"spanish": "¡Este laberinto es mi tormento, y será vuestra tumba!",
						"vietnamese": "Mê cung này là nỗi thống khổ của ta, và nó sẽ là nấm mồ của các ngươi!",
						"thai": "เขาวงกตนี้คือความทุกข์ทรมานของฉัน และมันจะเป็นหลุมฝังศพของพวกเจ้า!",
						"hindi": "यह भूलभुलैया मेरी पीड़ा है, और यह तुम्हारी कब्र बनेगी!"
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "고통… 끝없는… 벗어날 수 없는… 흐읍…",
						"english": "Pain... endless... inescapable... *gasp*...",
						"japanese": "苦痛… 終わりなき… 逃れられない… はぁ…",
						"chinese": "痛苦… 无尽的… 无法摆脱的… 呃…",
						"french": "Douleur... sans fin... inéluctable... *souffle*...",
						"spanish": "Dolor... interminable... ineludible... *jadeo*...",
						"vietnamese": "Đau đớn... vô tận... không thể thoát khỏi... *thở dốc*...",
						"thai": "ความเจ็บปวด... ไม่สิ้นสุด... หนีไม่พ้น... *เฮือก*...",
						"hindi": "दर्द... अंतहीन... अदम्य... *हाँफते हुए*..."
					},
					"speaker": "boss"
				},
				{
					"action": "enter",
					"speaker": "finn",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이제 끝났어, 욘더. 당신은 자유로워질 거야.",
						"english": "It's over now, Yonder. You'll be free.",
						"japanese": "もう終わったわ、ヨンダー。あなたは自由になるでしょう。",
						"chinese": "一切都结束了，扬德。你将获得自由。",
						"french": "C'est fini maintenant, Yonder. Tu seras libre.",
						"spanish": "Ya terminó, Yonder. Serás libre.",
						"vietnamese": "Kết thúc rồi, Yonder. Ngươi sẽ được tự do.",
						"thai": "จบแล้ว, ยอนเดอร์. คุณจะเป็นอิสระแล้ว.",
						"hindi": "अब सब खत्म हो गया, योंडर। तुम आज़ाद हो जाओगे।"
					},
					"speaker": "finn"
				},
				{
					"content": {
						"korean": "미궁이 무너져 내리고 있어! 어서 탈출해야 해!",
						"english": "The labyrinth is crumbling! We have to escape now!",
						"japanese": "迷宮が崩れていく！早く脱出しなければ！",
						"chinese": "迷宫正在崩塌！我们必须赶紧逃出去！",
						"french": "Le labyrinthe s'effondre ! Il faut s'échapper vite !",
						"spanish": "¡El laberinto se está desmoronando! ¡Tenemos que escapar ya!",
						"vietnamese": "Mê cung đang sụp đổ! Chúng ta phải thoát ra ngay!",
						"thai": "เขาวงกตกำลังพังทลาย! เราต้องรีบหนีออกไปเดี๋ยวนี้!",
						"hindi": "भूलभुलैया टूट रही है! हमें तुरंत भागना होगा!"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "얼어붙은 미궁은 산산이 조각나며 현실의 빛을 드러냈다.",
						"english": "The frozen labyrinth shattered, revealing the light of reality.",
						"japanese": "凍てついた迷宮は粉々に砕け散り、現実の光を現した。",
						"chinese": "冰封的迷宫支离破碎，露出了现实的光芒。",
						"french": "Le labyrinthe gelé se brisa en mille morceaux, révélant la lumière de la réalité.",
						"spanish": "El laberinto congelado se hizo añicos, revelando la luz de la realidad.",
						"vietnamese": "Mê cung băng giá vỡ tan tành, để lộ ánh sáng của thực tại.",
						"thai": "เขาวงกตที่เยือกแข็งแตกกระจาย เผยให้เห็นแสงสว่างแห่งความเป็นจริง.",
						"hindi": "जमी हुई भूलभुलैया टूटकर बिखर गई, जिससे वास्तविकता का प्रकाश प्रकट हुआ।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "욘더의 저주받은 영혼은 해방되었으나, 탐험대의 여정은 아직 끝나지 않았다.",
						"english": "Yonder's cursed soul was freed, but the expedition's journey was not yet over.",
						"japanese": "ヨンダーの呪われた魂は解放されたが、探検隊の旅はまだ終わっていなかった。",
						"chinese": "扬德被诅咒的灵魂得到了解放，但探险队的旅程尚未结束。",
						"french": "L'âme maudite de Yonder fut libérée, mais le voyage de l'expédition n'était pas encore terminé.",
						"spanish": "El alma maldita de Yonder fue liberada, pero el viaje de la expedición aún no había terminado.",
						"vietnamese": "Linh hồn bị nguyền rủa của Yonder đã được giải thoát, nhưng hành trình của đội thám hiểm vẫn chưa kết thúc.",
						"thai": "วิญญาณต้องสาปของยอนเดอร์เป็นอิสระแล้ว แต่การเดินทางของคณะสำรวจยังไม่สิ้นสุด.",
						"hindi": "योंडर की शापित आत्मा मुक्त हो गई, लेकिन अभियान की यात्रा अभी समाप्त नहीं हुई थी।"
					},
					"speaker": "narrator"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "크하하! 하찮은 것들! 결국 나처럼 광기에 잠식될 뿐!",
						"english": "Hahaha! Insignificant fools! In the end, you'll only be consumed by madness, just like me!",
						"japanese": "クハハ！取るに足らない奴らめ！結局、私のように狂気に侵されるだけだ！",
						"chinese": "哈哈哈！渺小的家伙们！最终只会像我一样被疯狂吞噬！",
						"french": "Hahaha ! Insignifiants ! Au final, vous ne ferez que sombrer dans la folie, comme moi !",
						"spanish": "¡Jajaja! ¡Insignificantes! ¡Al final, solo seréis consumidos por la locura, igual que yo!",
						"vietnamese": "Khà khà! Những kẻ hèn mọn! Cuối cùng các ngươi cũng sẽ bị sự điên loạn nuốt chửng, giống như ta thôi!",
						"thai": "ฮ่าฮ่าฮ่า! พวกไร้ค่า! ในที่สุดพวกแกก็จะถูกความบ้าคลั่งกลืนกินเหมือนฉัน!",
						"hindi": "हाहाहा! तुच्छ प्राणी! अंत में तुम भी मेरी तरह पागलपन में डूब जाओगे!"
					},
					"speaker": "boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "finn"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "finn",
					"content": {
						"korean": "…아직 끝나지 않았어. 여기서 쓰러질 순 없어.",
						"english": "...It's not over yet. I can't fall here.",
						"japanese": "…まだ終わっていない。ここで倒れるわけにはいかない。",
						"chinese": "…还没结束。我不能倒在这里。",
						"french": "...Ce n'est pas encore fini. Je ne peux pas tomber ici.",
						"spanish": "...Todavía no ha terminado. No puedo caer aquí.",
						"vietnamese": "...Chưa kết thúc. Ta không thể gục ngã ở đây.",
						"thai": "...ยังไม่จบ. ฉันจะล้มลงที่นี่ไม่ได้.",
						"hindi": "...अभी खत्म नहीं हुआ है। मैं यहाँ हार नहीं मान सकता।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "젠장… 다시 한번 해보자고!",
						"english": "Damn it... Let's try again!",
						"japanese": "くそ…もう一度やってやろう！",
						"chinese": "该死…再来一次！",
						"french": "Mince... Essayons encore une fois !",
						"spanish": "¡Maldita sea... intentémoslo de nuevo!",
						"vietnamese": "Chết tiệt... Thử lại lần nữa xem sao!",
						"thai": "บ้าจริง... มาลองอีกครั้ง!",
						"hindi": "धिक्कार है... चलो फिर से कोशिश करते हैं!"
					}
				}
			],
			"dialogue": [
				{
					"speaker": "boss",
					"content": {
						"korean": "진실을 알아봤자 소용없다! 너희도 결국 이 광기에 잠식될 뿐!",
						"english": "It's useless to know the truth! You too will ultimately be consumed by this madness!",
						"japanese": "真実を知ったところで無駄だ！お前たちも結局、この狂気に侵食されるだけだ！",
						"chinese": "知道真相也毫无用处！你们最终也只会被这疯狂吞噬！",
						"french": "Il est inutile de connaître la vérité ! Vous aussi, vous finirez par être consumés par cette folie !",
						"spanish": "¡De nada sirve saber la verdad! ¡Vosotros también acabaréis siendo consumidos por esta locura!",
						"vietnamese": "Biết sự thật cũng vô ích! Các ngươi cuối cùng cũng sẽ bị sự điên loạn này nuốt chửng mà thôi!",
						"thai": "รู้ความจริงไปก็ไร้ประโยชน์! พวกเจ้าก็จะถูกความบ้าคลั่งนี้กลืนกินในที่สุด!",
						"hindi": "सच जानने का कोई फायदा नहीं! तुम भी आखिरकार इस पागलपन में समा जाओगे!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "boss",
					"content": {
						"korean": "내가 바로 이 얼어붙은 침묵 그 자체다!",
						"english": "I am the frozen silence itself!",
						"japanese": "私こそが、この凍てついた沈黙そのものだ！",
						"chinese": "我就是这冰封的寂静本身！",
						"french": "Je suis le silence gelé lui-même !",
						"spanish": "¡Yo soy el silencio helado en persona!",
						"vietnamese": "Ta chính là sự im lặng đóng băng này!",
						"thai": "ฉันคือความเงียบงันที่เยือกแข็งนั่นเอง!",
						"hindi": "मैं ही यह जमी हुई खामोशी हूँ!"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "아니! 당신이 만든 미궁에 갇힐 사람은 우리 아니라 당신이야!",
						"english": "No! It's not us who will be trapped in the labyrinth you created, it's you!",
						"japanese": "違う！あなたが作った迷宮に閉じ込められるのは、私たちではなくあなたよ！",
						"chinese": "不！被困在你所创造的迷宫里的不是我们，而是你！",
						"french": "Non ! Ce n'est pas nous qui serons piégés dans le labyrinthe que tu as créé, c'est toi !",
						"spanish": "¡No! ¡No somos nosotros quienes quedaremos atrapados en el laberinto que creaste, eres tú!",
						"vietnamese": "Không! Người bị giam cầm trong mê cung do ngươi tạo ra không phải là chúng ta, mà là ngươi!",
						"thai": "ไม่! คนที่จะถูกขังอยู่ในเขาวงกตที่คุณสร้างขึ้น ไม่ใช่เรา แต่เป็นคุณต่างหาก!",
						"hindi": "नहीं! तुम्हारे बनाए हुए भूलभुलैया में हम नहीं, तुम ही फँसोगे!"
					},
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"speaker": "finn",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "finn",
					"content": {
						"korean": "당신의 예언 끝에 느껴지던 깊은 외로움… 그건 당신을 구원해달라는 갈망이었잖아!",
						"english": "The deep loneliness felt at the end of your prophecy... that was a yearning for salvation, wasn't it?!",
						"japanese": "あなたの予言の終わりに感じられた深い孤独…それはあなたを救ってほしいという渇望だったんじゃないの？！",
						"chinese": "在你的预言尽头感受到的那份深沉的孤独… 那不正是你渴望被救赎的呼唤吗？！",
						"french": "La profonde solitude ressentie à la fin de ta prophétie… n'était-ce pas un désir ardent de salut ?!",
						"spanish": "¡La profunda soledad que se sentía al final de tu profecía... era un anhelo de salvación, ¿no es así?!",
						"vietnamese": "Sự cô đơn sâu thẳm cảm nhận được ở cuối lời tiên tri của ngươi... đó chẳng phải là một khát khao được cứu rỗi sao?!",
						"thai": "ความโดดเดี่ยวอันล้ำลึกที่สัมผัสได้เมื่อสิ้นสุดคำทำนายของคุณ... นั่นไม่ใช่ความปรารถนาที่จะได้รับการไถ่บาปหรอกหรือ?!",
						"hindi": "तुम्हारी भविष्यवाणी के अंत में महसूस हुई वह गहरी एकाकीपन... वह मुक्ति के लिए एक तरस थी, है ना?!"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "당신은 가해자가 아니야! 이 미궁에 갇힌 피해자일 뿐이야!",
						"english": "You're not the aggressor! You're just a victim trapped in this labyrinth!",
						"japanese": "あなたは加害者じゃない！この迷宮に囚われた、ただの被害者よ！",
						"chinese": "你不是加害者！你只是被困在这迷宫里的受害者！",
						"french": "Tu n'es pas l'agresseur ! Tu n'es qu'une victime piégée dans ce labyrinthe !",
						"spanish": "¡No eres el agresor! ¡Solo eres una víctima atrapada en este laberinto!",
						"vietnamese": "Ngươi không phải kẻ gây án! Ngươi chỉ là nạn nhân bị mắc kẹt trong mê cung này!",
						"thai": "คุณไม่ใช่ผู้กระทำ! คุณเป็นเพียงเหยื่อที่ติดอยู่ในเขาวงกตนี้เท่านั้น!",
						"hindi": "तुम अपराधी नहीं हो! तुम तो बस इस भूलभुलैया में फंसा एक शिकार हो!"
					},
					"speaker": "finn"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "닥쳐라! 나는… 나는…!",
						"english": "Silence! I... I...!",
						"japanese": "黙れ！私は… 私は…！",
						"chinese": "闭嘴！我… 我…！",
						"french": "Tais-toi ! Je... je... !",
						"spanish": "¡Cállate! ¡Yo... yo...!",
						"vietnamese": "Im đi! Ta... ta...!",
						"thai": "หุบปากซะ! ฉัน... ฉัน...!",
						"hindi": "चुप रहो! मैं... मैं...!"
					},
					"speaker": "boss"
				}
			]
		}
	],
	"epilogue": {
		"korean": [
			"얼어붙은 미궁은 차가운 파편으로 부서져 내렸다.",
			"욘더의 광기는 사라졌고, 그 자리에 고요한 침묵이 깃들었다.",
			"진실은 드러났지만, 구원인지 침해인지는 알 수 없었다.",
			"탐험대는 돌아왔지만, 그들의 정신에는 미궁의 잔상이 깊게 남았다.",
			"긴 여정의 끝. 하지만 모든 것이 명확해진 것은 아니었다."
		],
		"english": [
			"The frozen labyrinth shattered into cold fragments.",
			"Yonder's madness vanished, and a quiet silence settled in its place.",
			"The truth was revealed, but whether it was salvation or violation remained unknown.",
			"The expedition returned, but the echoes of the labyrinth lingered deep within their minds.",
			"The end of a long journey. Yet, not everything had become clear."
		],
		"japanese": [
			"凍てついた迷宮は、冷たい破片となって砕け散った。",
			"ヨンダーの狂気は消え去り、その場には静かな沈黙が訪れた。",
			"真実は明らかになったが、それが救済なのか侵害なのかは不明だった。",
			"探検隊は帰還したが、彼らの精神には迷宮の残像が深く残っていた。",
			"長い旅の終わり。しかし、すべてが明確になったわけではなかった。"
		],
		"chinese": [
			"冰封的迷宫碎裂成冰冷的碎片。",
			"尤德的疯狂消失了，取而代之的是一片寂静。",
			"真相大白，但不知是救赎还是侵犯。",
			"探险队回来了，但迷宫的残像深深地留在了他们的脑海中。",
			"漫长旅程的终点。然而，并非所有事情都已明朗。"
		],
		"french": [
			"Le labyrinthe gelé s'est brisé en fragments froids.",
			"La folie de Yonder s'est évanouie, et un silence paisible s'est installé à sa place.",
			"La vérité fut révélée, mais on ne savait pas si c'était une salvation ou une violation.",
			"L'expédition est revenue, but the echoes of the labyrinth lingered deep within their minds.",
			"La fin d'un long voyage. Pourtant, tout n'était pas devenu clair."
		],
		"spanish": [
			"El laberinto helado se hizo añicos en fríos fragmentos.",
			"La locura de Yonder se desvaneció, y un silencio sereno se instaló en su lugar.",
			"La verdad fue revelada, pero se desconocía si era salvación o violación.",
			"La expedición regresó, pero los ecos del laberinto permanecieron profundamente en sus mentes.",
			"El final de un largo viaje. Sin embargo, no todo se había aclarado."
		],
		"vietnamese": [
			"Mê cung băng giá vỡ tan thành những mảnh vụn lạnh lẽo.",
			"Sự điên loạn của Yonder biến mất, và một sự im lặng tĩnh mịch bao trùm nơi đó.",
			"Sự thật đã được tiết lộ, nhưng không rõ đó là sự cứu rỗi hay sự xâm phạm.",
			"Đoàn thám hiểm đã trở về, nhưng dư ảnh của mê cung vẫn còn đọng lại sâu sắc trong tâm trí họ.",
			"Kết thúc một hành trình dài. Nhưng không phải mọi thứ đều đã rõ ràng."
		],
		"thai": [
			"เขาวงกตน้ำแข็งแตกเป็นเสี่ยงๆ เย็นยะเยือก",
			"ความบ้าคลั่งของยอนเดอร์หายไป และความเงียบสงบก็เข้ามาแทนที่",
			"ความจริงเปิดเผย แต่ไม่รู้ว่าเป็นการช่วยให้รอดหรือการละเมิด",
			"คณะสำรวจกลับมาแล้ว แต่ภาพหลอนของเขาวงกตยังคงฝังลึกอยู่ในจิตใจของพวกเขา",
			"จุดสิ้นสุดของการเดินทางอันยาวนาน แต่ก็ไม่ใช่ทุกสิ่งที่กระจ่างชัด"
		],
		"hindi": [
			"जमा हुआ भूलभुलैया ठंडे टुकड़ों में बिखर गया।",
			"योंडर का पागलपन गायब हो गया, और उसकी जगह एक शांत खामोशी छा गई।",
			"सच्चाई सामने आई, लेकिन यह मोक्ष था या उल्लंघन, यह अज्ञात था।",
			"अभियान लौट आया, लेकिन भूलभुलैया की गूँज उनके मन में गहराई तक बनी रही।",
			"एक लंबी यात्रा का अंत। फिर भी, सब कुछ स्पष्ट नहीं हुआ था।"
		]
	},
	"prologue": {
		"korean": [
			"카운트다운이 거의 끝을 향했다. 얼어붙은 미궁은 광기로 얼룩져 있었다.",
			"핀은 예언자의 말에서 모순된 절규를 들었고, 모래시계의 진실을 깨달았다.",
			"모든 것이 뒤바뀌는 순간, 예언자는 본색을 드러냈다.",
			"진실을 감춘 자, 혹은 진실에 갇힌 자. 광기의 샤먼, 욘더."
		],
		"english": [
			"The countdown was almost over. The frozen labyrinth was stained with madness.",
			"Finn heard a contradictory scream in the prophet's words and realized the truth of the hourglass.",
			"The moment everything changed, the prophet revealed their true colors.",
			"The one who hid the truth, or the one trapped by it. Yonder, the shaman of madness."
		],
		"japanese": [
			"カウントダウンはほぼ終わりを告げていた。凍てついた迷宮は狂気に染まっていた。",
			"フィンは預言者の言葉の中に矛盾した叫びを聞き、砂時計の真実を悟った。",
			"すべてが入れ替わる瞬間、預言者は本性を現した。",
			"真実を隠した者、あるいは真実に囚われた者。狂気のシャーマン、ヨンダー。"
		],
		"chinese": [
			"倒计时已接近尾声。冰封的迷宫被疯狂所玷污。",
			"芬恩从预言者的话语中听到了矛盾的尖叫，并意识到沙漏的真相。",
			"一切颠倒的那一刻，预言者露出了真面目。",
			"隐藏真相者，或被真相困住者。疯狂的萨满，尤德。"
		],
		"french": [
			"Le compte à rebours touchait à sa fin. Le labyrinthe gelé était maculé de folie.",
			"Finn entendit un cri contradictoire dans les paroles du prophète et réalisa la vérité du sablier.",
			"Au moment où tout a basculé, le prophète a révélé sa vraie nature.",
			"Celui qui a caché la vérité, ou celui qui y est piégé. Yonder, le chaman de la folie."
		],
		"spanish": [
			"La cuenta regresiva estaba casi terminando. El laberinto helado estaba manchado de locura.",
			"Finn escuchó un grito contradictorio en las palabras del profeta y se dio cuenta de la verdad del reloj de arena.",
			"En el momento en que todo cambió, el profeta reveló su verdadera naturaleza.",
			"El que ocultó la verdad, o el que quedó atrapado en ella. Yonder, el chamán de la locura."
		],
		"vietnamese": [
			"Đồng hồ đếm ngược gần kết thúc. Mê cung băng giá nhuốm màu điên loạn.",
			"Finn nghe thấy một tiếng hét mâu thuẫn trong lời của nhà tiên tri và nhận ra sự thật về đồng hồ cát.",
			"Khoảnh khắc mọi thứ đảo lộn, nhà tiên tri lộ nguyên hình.",
			"Kẻ che giấu sự thật, hoặc kẻ bị giam cầm bởi sự thật. Yonder, pháp sư của sự điên loạn."
		],
		"thai": [
			"การนับถอยหลังใกล้จะสิ้นสุดลงแล้ว เขาวงกตน้ำแข็งถูกย้อมด้วยความบ้าคลั่ง",
			"ฟินน์ได้ยินเสียงกรีดร้องที่ขัดแย้งในคำพูดของผู้เผยพระวจนะ และตระหนักถึงความจริงของนาฬิกาทราย",
			"ในช่วงเวลาที่ทุกสิ่งพลิกผัน ผู้เผยพระวจนะก็เผยธาตุแท้ของตน",
			"ผู้ที่ซ่อนความจริง หรือผู้ที่ถูกขังอยู่ในความจริง ยอนเดอร์ หมอผีแห่งความบ้าคลั่ง"
		],
		"hindi": [
			"उलटी गिनती लगभग खत्म हो गई थी। जमा हुआ भूलभुलैया पागलपन से सना हुआ था।",
			"फिन ने पैगंबर के शब्दों में एक विरोधाभासी चीख सुनी और रेतघड़ी की सच्चाई को समझा।",
			"जिस क्षण सब कुछ बदल गया, पैगंबर ने अपना असली रंग दिखाया।",
			"सत्य को छिपाने वाला, या उसमें फंसा हुआ। पागलपन का जादूगर, योंडर।"
		]
	}
} as const;
