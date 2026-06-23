export const scenario_forest_animagrove_17_02 = {
	"scenario_id": "forest_animagrove_17_02",
	"order": 2,
	"act": "rising",
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
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "빛이 닿지 않는 숲. 기이한 고요함이 맴돌았다.",
						"english": "A forest untouched by light. An eerie stillness hung in the air.",
						"japanese": "光の届かない森。奇妙な静寂が漂っていた。",
						"chinese": "光线无法触及的森林。弥漫着诡异的寂静。",
						"french": "Une forêt que la lumière n'atteignait pas. Un silence étrange y régnait.",
						"spanish": "Un bosque inalcanzable para la luz. Un silencio inquietante flotaba en el aire.",
						"vietnamese": "Khu rừng không chút ánh sáng. Một sự tĩnh lặng kỳ lạ bao trùm.",
						"thai": "ป่าที่แสงไม่อาจส่องถึง ความเงียบสงัดที่น่าขนลุกปกคลุมอยู่",
						"hindi": "प्रकाश से अछूता जंगल। एक अजीब खामोशी छाई हुई थी।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "여기가 숲의 심장부인가?",
						"english": "Is this the heart of the forest?",
						"japanese": "ここが森の心臓部なのか？",
						"chinese": "这里是森林的心脏吗？",
						"french": "Est-ce le cœur de la forêt ?",
						"spanish": "¿Es este el corazón del bosque?",
						"vietnamese": "Đây có phải là trái tim của khu rừng?",
						"thai": "นี่คือใจกลางของป่าหรือ?",
						"hindi": "क्या यह जंगल का दिल है?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "direction",
					"speaker": "bracken",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"duration_ms": 500
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "bracken",
					"content": {
						"korean": "더 이상 들어오지 마라. 이 숲의 질서를 어지럽히지 마.",
						"english": "Go no further. Do not disturb the order of this forest.",
						"japanese": "それ以上入るな。この森の秩序を乱すな。",
						"chinese": "别再往前了。不要扰乱这片森林的秩序。",
						"french": "N'avancez pas. Ne troublez pas l'ordre de cette forêt.",
						"spanish": "No avances más. No alteres el orden de este bosque.",
						"vietnamese": "Đừng vào sâu hơn nữa. Đừng phá vỡ trật tự của khu rừng này.",
						"thai": "อย่าเข้ามาอีกเลย อย่ารบกวนความสงบเรียบร้อยของป่าแห่งนี้",
						"hindi": "और आगे मत बढ़ो। इस जंगल की व्यवस्था को भंग मत करो।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "숲의 질서? 당신이야말로 뭔가 숨기고 있잖아.",
						"english": "The forest's order? You're the one hiding something.",
						"japanese": "森の秩序だと？あなたこそ何かを隠しているじゃないか。",
						"chinese": "森林的秩序？你才是在隐瞒什么吧。",
						"french": "L'ordre de la forêt ? C'est vous qui cachez quelque chose.",
						"spanish": "¿El orden del bosque? Eres tú quien oculta algo.",
						"vietnamese": "Trật tự của rừng ư? Chính ngươi mới là kẻ đang che giấu điều gì đó.",
						"thai": "ความสงบเรียบร้อยของป่าเหรอ? ท่านเองต่างหากที่กำลังซ่อนอะไรบางอย่างอยู่",
						"hindi": "जंगल की व्यवस्था? तुम ही कुछ छिपा रहे हो।"
					}
				},
				{
					"speaker": "bracken",
					"content": {
						"korean": "당신들은 모른다. 이 숲의 생명력은… 지켜져야만 해.",
						"english": "You don't understand. This forest's life force... it must be protected.",
						"japanese": "あなた方には分からない。この森の生命力は…守られなければならないのだ。",
						"chinese": "你们不懂。这片森林的生命力…必须被守护。",
						"french": "Vous ne comprenez pas. La force vitale de cette forêt… doit être protégée.",
						"spanish": "No lo entendéis. La fuerza vital de este bosque... debe ser protegida.",
						"vietnamese": "Các ngươi không hiểu. Sinh lực của khu rừng này... phải được bảo vệ.",
						"thai": "พวกเจ้าไม่รู้หรอก พลังชีวิตของป่าแห่งนี้... ต้องได้รับการปกป้อง",
						"hindi": "तुम नहीं जानते। इस जंगल की जीवन शक्ति… उसकी रक्षा करनी होगी।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "direction",
					"speaker": "bracken",
					"action": "exit",
					"duration_ms": 400,
					"direction": "up"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "길을 막는 거대한 덩굴들이 움직였다.",
						"english": "The massive vines blocking the path moved.",
						"japanese": "道を塞ぐ巨大な蔓が動いた。",
						"chinese": "阻碍道路的巨大藤蔓动了。",
						"french": "Les lianes gigantesques bloquant le chemin ont bougé.",
						"spanish": "Las enormes enredaderas que bloqueaban el camino se movieron.",
						"vietnamese": "Những dây leo khổng lồ chắn đường đã di chuyển.",
						"thai": "เถาวัลย์ขนาดยักษ์ที่ขวางทางอยู่ได้เคลื่อนไหวแล้ว",
						"hindi": "रास्ते को रोकने वाली विशाल बेलें हिलने लगीं।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_1",
					"content": {
						"korean": "점점 더 기분 나쁜 기운이 느껴져.",
						"english": "I feel an increasingly ominous presence.",
						"japanese": "ますます不気味な気配がする。",
						"chinese": "感觉越来越不对劲。",
						"french": "Une aura de plus en plus inquiétante se fait sentir.",
						"spanish": "Siento una presencia cada vez más inquietante.",
						"vietnamese": "Cảm thấy một luồng khí ngày càng đáng sợ.",
						"thai": "รู้สึกได้ถึงบรรยากาศที่น่าขนลุกขึ้นเรื่อยๆ",
						"hindi": "मुझे एक बढ़ती हुई अशुभ उपस्थिति महसूस हो रही है।"
					}
				},
				{
					"spot": [
						2,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "bracken"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "경고했다. 이 숲의 '왜곡된 평화'를 건드리지 마.",
						"english": "I warned you. Don't disturb this forest's 'distorted peace'.",
						"japanese": "警告した。この森の「歪んだ平和」に触れるな。",
						"chinese": "我警告过你。别触碰这片森林“扭曲的和平”。",
						"french": "Je t'ai prévenu. Ne perturbe pas la \"paix distordue\" de cette forêt.",
						"spanish": "Te lo advertí. No toques la 'paz distorsionada' de este bosque.",
						"vietnamese": "Ta đã cảnh báo rồi. Đừng chạm vào 'sự bình yên méo mó' của khu rừng này.",
						"thai": "ข้าเตือนแล้วนะ อย่าแตะต้อง 'สันติสุขที่บิดเบือน' ของป่าแห่งนี้",
						"hindi": "मैंने चेतावनी दी थी। इस जंगल की 'विकृत शांति' को मत छेड़ो।"
					},
					"speaker": "bracken"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "왜곡된 평화? 그게 뭔데!",
						"english": "Distorted peace? What's that!",
						"japanese": "歪んだ平和？それって何だ！",
						"chinese": "扭曲的和平？那是什么！",
						"french": "Paix distordue ? Qu'est-ce que c'est !",
						"spanish": "¿Paz distorsionada? ¡Qué es eso!",
						"vietnamese": "Bình yên méo mó? Nó là cái gì!",
						"thai": "สันติสุขที่บิดเบือน? นั่นมันอะไรกัน!",
						"hindi": "विकृत शांति? वह क्या है!"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이 생명력은… 소중하다. 지켜야 한다.",
						"english": "This life force... is precious. It must be protected.",
						"japanese": "この生命力は…尊い。守らねばならない。",
						"chinese": "这生命力…很珍贵。必须守护。",
						"french": "Cette force vitale… est précieuse. Il faut la protéger.",
						"spanish": "Esta fuerza vital… es preciosa. Hay que protegerla.",
						"vietnamese": "Sinh lực này… thật quý giá. Phải bảo vệ nó.",
						"thai": "พลังชีวิตนี้… ล้ำค่า ต้องปกป้อง",
						"hindi": "यह जीवन शक्ति... अनमोल है। इसे बचाना होगा।"
					},
					"speaker": "bracken"
				},
				{
					"content": {
						"korean": "숲 깊은 곳에서 애잔하고 알 수 없는 콧노래 소리가 희미하게 들려왔다.",
						"english": "From deep within the forest, a faint, melancholic and unknown humming sound drifted.",
						"japanese": "森の奥深くから、哀愁を帯びた、得体の知れない鼻歌がかすかに聞こえてきた。",
						"chinese": "森林深处，传来一阵哀怨而不明的哼唱声。",
						"french": "Du plus profond de la forêt, un fredonnement mélancolique et inconnu se fit entendre, faible.",
						"spanish": "Desde lo profundo del bosque, un tarareo tenue, melancólico e indescifrable, llegó a mis oídos.",
						"vietnamese": "Từ sâu trong rừng, một tiếng ngân nga buồn bã và không rõ nguồn gốc vang vọng yếu ớt.",
						"thai": "จากส่วนลึกของป่า เสียงฮัมเพลงที่เศร้าสร้อยและไม่รู้จักดังแว่วมาเบาๆ",
						"hindi": "जंगल की गहराई से, एक हल्की, उदास और अनजानी गुनगुनाहट सुनाई दी।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"action": "exit",
					"duration_ms": 400,
					"direction": "up",
					"type": "direction",
					"speaker": "bracken"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "고대 유적의 흔적이 보였다. 이끼 낀 석판들이 빛을 바랬다.",
						"english": "Traces of ancient ruins were visible. Moss-covered stone slabs had lost their luster.",
						"japanese": "古代遺跡の痕跡が見えた。苔むした石板が光を失っていた。",
						"chinese": "看到了古代遗迹的痕迹。长满青苔的石板失去了光泽。",
						"french": "Des traces d'anciennes ruines étaient visibles. Des dalles de pierre moussues avaient perdu leur éclat.",
						"spanish": "Se veían rastros de ruinas antiguas. Las losas de piedra cubiertas de musgo habían perdido su brillo.",
						"vietnamese": "Dấu vết của di tích cổ đại đã hiện ra. Những phiến đá rêu phong đã phai mờ ánh sáng.",
						"thai": "พบร่องรอยของซากปรักหักพังโบราณ แผ่นหินที่ปกคลุมด้วยตะไคร่น้ำได้เลือนหายไป",
						"hindi": "प्राचीन खंडहरों के निशान दिखाई दिए। काई लगी शिलाएँ अपनी चमक खो चुकी थीं।"
					}
				},
				{
					"content": {
						"korean": "저건… 무슨 문양이지?",
						"english": "What's that... design?",
						"japanese": "あれは…何の模様だ？",
						"chinese": "那是…什么图案？",
						"french": "C'est quoi… ce motif ?",
						"spanish": "¿Qué es ese… patrón?",
						"vietnamese": "Đó là… họa tiết gì vậy?",
						"thai": "นั่นมัน… ลวดลายอะไรน่ะ?",
						"hindi": "वह क्या… डिज़ाइन है?"
					},
					"speaker": "character_2",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "낡은 석판에 빛과 희생 의식이 묘사된 듯한 아마존 부족의 그림들이 새겨져 있었다.",
						"english": "On the old stone slab, drawings of what seemed to be Amazonian tribes depicting light and sacrificial rituals were carved.",
						"japanese": "古い石板には、光と生贄の儀式を描いたアマゾン部族のものと思われる絵が刻まれていた。",
						"chinese": "破旧的石板上刻着描绘光与牺牲仪式的亚马逊部落图画。",
						"french": "Sur l'ancienne dalle de pierre, des dessins de ce qui semblait être des tribus amazoniennes dépeignant la lumière et des rituels sacrificiels étaient gravés.",
						"spanish": "En la antigua losa de piedra estaban grabados dibujos de lo que parecían ser tribus amazónicas, representando la luz y rituales de sacrificio.",
						"vietnamese": "Trên phiến đá cũ, khắc họa những bức tranh của bộ lạc Amazon mô tả ánh sáng và nghi lễ hiến tế.",
						"thai": "บนแผ่นหินเก่า มีภาพวาดของชนเผ่าอะเมซอนที่ดูเหมือนจะพรรณนาถึงแสงสว่างและพิธีกรรมบูชายัญสลักอยู่",
						"hindi": "पुरानी शिला पर, प्रकाश और बलिदान अनुष्ठानों को दर्शाती हुई अमेज़ॅन जनजाति की तस्वीरें खुदी हुई थीं।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "bracken",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						2
					]
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "bracken",
					"content": {
						"korean": "숲을 더럽히지 마라! 이 생명력을 해칠 셈인가?",
						"english": "Don't defile the forest! Do you intend to harm this life force?",
						"japanese": "森を汚すな！この生命力を傷つけるつもりか？",
						"chinese": "别玷污森林！你打算伤害这生命力吗？",
						"french": "Ne souille pas la forêt ! As-tu l'intention de nuire à cette force vitale ?",
						"spanish": "¡No profanes el bosque! ¿Pretendes dañar esta fuerza vital?",
						"vietnamese": "Đừng làm ô uế khu rừng! Ngươi định làm hại sinh lực này sao?",
						"thai": "อย่าทำให้ป่าแปดเปื้อน! เจ้าคิดจะทำลายพลังชีวิตนี้หรือไง?",
						"hindi": "जंगल को अपवित्र मत करो! क्या तुम इस जीवन शक्ति को नुकसान पहुँचाने का इरादा रखते हो?"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "당신이 지키려는 게 대체 뭐야? 숲은 이미 병들었어!",
						"english": "What are you trying to protect? The forest is already sick!",
						"japanese": "お前が守ろうとしているのは何だ？森は既に病に侵されている！",
						"chinese": "你到底在守护什么？森林早已病入膏肓！",
						"french": "Qu'essaies-tu de protéger ? La forêt est déjà malade !",
						"spanish": "¿Qué intentas proteger? ¡El bosque ya está enfermo!",
						"vietnamese": "Ngươi đang cố bảo vệ cái gì? Rừng đã héo mòn rồi!",
						"thai": "เจ้ากำลังปกป้องสิ่งใดกันแน่? ป่าได้ป่วยไข้ไปแล้ว!",
						"hindi": "तुम क्या बचाने की कोशिश कर रहे हो? जंगल पहले ही बीमार है!"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "bracken",
					"content": {
						"korean": "닥쳐라! 내가 지킨다! 이 모든 것을…!",
						"english": "Silence! I will protect it! All of this...!",
						"japanese": "黙れ！俺が守る！この全てを…！",
						"chinese": "住口！我来守护！这一切…！",
						"french": "Silence ! Je protégerai ! Tout ceci… !",
						"spanish": "¡Cállate! ¡Yo protegeré! ¡Todo esto…!",
						"vietnamese": "Câm miệng! Ta sẽ bảo vệ! Tất cả…!",
						"thai": "หุบปาก! ข้าจะปกป้อง! ทั้งหมดนี้...!",
						"hindi": "चुप रहो! मैं बचाऊंगा! इस सबकी…!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"direction": "up",
					"duration_ms": 400,
					"action": "exit",
					"speaker": "bracken",
					"type": "direction"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"content": {
						"korean": "심장이 죄어오는 듯한 압박감이 숲을 가득 채웠다.",
						"english": "A suffocating pressure, as if squeezing the heart, filled the forest.",
						"japanese": "心臓を締め付けるような圧迫感が森を満たした。",
						"chinese": "一种令人窒息的压迫感，充斥了整片森林。",
						"french": "Une pression suffocante, oppressante, emplissait la forêt.",
						"spanish": "Una presión asfixiante, como un puño en el corazón, invadió el bosque.",
						"vietnamese": "Một áp lực nghẹt thở, như bóp nghẹt trái tim, bao trùm khu rừng.",
						"thai": "แรงกดดันที่บีบรัดหัวใจแผ่ไปทั่วป่า",
						"hindi": "एक दम घुटने वाला दबाव, मानो दिल सिकुड़ रहा हो, जंगल में भर गया।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_3",
					"content": {
						"korean": "이제 돌아갈 수 없어. 끝까지 가야 해.",
						"english": "There's no turning back now. I must go to the very end.",
						"japanese": "もう戻れない。最後まで行くしかない。",
						"chinese": "无法回头了。必须走到最后。",
						"french": "Il n'y a plus de retour. Il faut aller jusqu'au bout.",
						"spanish": "Ya no hay vuelta atrás. Debo llegar hasta el final.",
						"vietnamese": "Không thể quay lại nữa. Phải đi đến cùng.",
						"thai": "ไม่อาจหวนกลับได้แล้ว ต้องไปให้ถึงที่สุด",
						"hindi": "अब वापस नहीं जा सकते। अंत तक जाना होगा।"
					}
				},
				{
					"type": "direction",
					"speaker": "bracken",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "멈춰! 더 이상 나아갈 수 없다! 이 숲의 마지막 질서를 어지럽히지 마!",
						"english": "Stop! You cannot go any further! Do not disturb the last order of this forest!",
						"japanese": "止まれ！これ以上は進めない！この森の最後の秩序を乱すな！",
						"chinese": "停下！不得寸进！别扰乱这片森林最后的秩序！",
						"french": "Arrête ! Tu ne peux pas aller plus loin ! Ne perturbe pas l'ultime ordre de cette forêt !",
						"spanish": "¡Detente! ¡No puedes avanzar más! ¡No alteres el último orden de este bosque!",
						"vietnamese": "Dừng lại! Ngươi không thể tiến thêm! Đừng phá vỡ trật tự cuối cùng của khu rừng này!",
						"thai": "หยุด! เจ้าไปต่อไม่ได้! อย่ารบกวนระเบียบสุดท้ายของป่านี้!",
						"hindi": "रुको! आगे नहीं बढ़ सकते! इस जंगल की अंतिम व्यवस्था को भंग मत करो!"
					},
					"speaker": "bracken",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "당신도 이 숲의 병든 질서에 갇힌 것뿐이야!",
						"english": "You are also just trapped in this forest's sick order!",
						"japanese": "お前もこの森の病んだ秩序に囚われているだけだ！",
						"chinese": "你也只是被困在这片森林病态的秩序中！",
						"french": "Toi aussi, tu n'es qu'un prisonnier de l'ordre malade de cette forêt !",
						"spanish": "¡Tú también estás atrapado en el orden enfermo de este bosque!",
						"vietnamese": "Ngươi cũng chỉ là kẻ bị mắc kẹt trong trật tự bệnh hoạn của khu rừng này!",
						"thai": "เจ้าเองก็แค่ถูกขังอยู่ในระเบียบที่ป่วยของป่านี้!",
						"hindi": "तुम भी इस जंगल की बीमार व्यवस्था में फंसे हुए हो!"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "모두를 위해… 지켜야 한다고! 너희는 모른다…!",
						"english": "For everyone... I must protect it! You don't know...!",
						"japanese": "みんなのために…守らなければならない！お前たちには分からない…！",
						"chinese": "为了所有人…必须守护！你们不懂…！",
						"french": "Pour tous… je dois protéger ! Vous ne savez pas… !",
						"spanish": "¡Por el bien de todos… debo protegerlo! ¡Ustedes no entienden…!",
						"vietnamese": "Vì mọi người… phải bảo vệ! Các ngươi không biết đâu…!",
						"thai": "เพื่อทุกคน… ข้าต้องปกป้อง! พวกเจ้าไม่รู้หรอก…!",
						"hindi": "सबके लिए… बचाना होगा! तुम नहीं जानते…!"
					},
					"speaker": "bracken",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "bracken",
					"type": "direction",
					"direction": "up",
					"duration_ms": 400,
					"action": "exit"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 쓰러졌다. 그러나 숲의 왜곡된 기운은 여전했다.",
						"english": "The colossal shadow fell. Yet, the distorted aura of the forest lingered.",
						"japanese": "巨大な影が倒れた。しかし、森の歪んだ気配はまだ残っていた。",
						"chinese": "巨大的阴影倒下了。然而，森林扭曲的气息依然存在。",
						"french": "L'ombre colossale est tombée. Pourtant, l'aura distordue de la forêt persistait.",
						"spanish": "La sombra colosal cayó. Sin embargo, el aura distorsionada del bosque persistía.",
						"vietnamese": "Bóng đen khổng lồ đã gục ngã. Tuy nhiên, khí tức méo mó của khu rừng vẫn còn vương vấn.",
						"thai": "เงาขนาดยักษ์ล้มลง ทว่า พลังงานที่บิดเบี้ยวของป่าก็ยังคงอยู่",
						"hindi": "विशालकाय छाया गिर गई। फिर भी, जंगल की विकृत आभा बनी रही।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "크크… 너희가… 이겼다고… 생각하나…?",
						"english": "Heh heh... Do you... think... you've won...?",
						"japanese": "クク… お前たちが… 勝ったと… 思っているのか…？",
						"chinese": "呵呵……你们……以为……赢了吗……？",
						"french": "Hé hé… Pensez-vous… avoir… gagné… ?",
						"spanish": "Je je... ¿Creéis... que... habéis ganado...?",
						"vietnamese": "Khà khà… Các ngươi… nghĩ rằng… đã thắng sao…?",
						"thai": "ฮ่าฮ่า... พวกเจ้า... คิดว่า... ชนะแล้ว... รึ...?",
						"hindi": "हँ हँ... क्या तुम्हें... लगता है... कि तुम... जीत गए...?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "진정한 적은… 숲의 뿌리에… 있다…!",
						"english": "The true enemy... lies... at the roots of the forest...!",
						"japanese": "真の敵は… 森の根に… いる…！",
						"chinese": "真正的敌人……在……森林的根源……！",
						"french": "Le véritable ennemi… se trouve… aux racines de la forêt…!",
						"spanish": "El verdadero enemigo... está... en las raíces del bosque...!",
						"vietnamese": "Kẻ địch thực sự… nằm… ở tận gốc rễ khu rừng…!",
						"thai": "ศัตรูที่แท้จริง... อยู่... ที่รากของป่า...!",
						"hindi": "असली दुश्मन... जंगल की जड़ों में... है...!"
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "무슨 소리야? 너희가… 숲을 망쳤잖아!",
						"english": "What are you talking about? You... ruined the forest!",
						"japanese": "何を言ってるんだ？ お前たちが… 森をめちゃくちゃにしたんだろ！",
						"chinese": "你说什么？是你们……毁了森林！",
						"french": "De quoi parlez-vous ? C'est vous… qui avez ruiné la forêt !",
						"spanish": "¿De qué hablas? ¡Vosotros... arruinasteis el bosque!",
						"vietnamese": "Ngươi nói gì vậy? Các ngươi… đã phá hoại khu rừng mà!",
						"thai": "พูดอะไรน่ะ? พวกเจ้า... ทำลายป่าไม่ใช่เหรอ!",
						"hindi": "क्या कह रहे हो? तुमने... जंगल को बर्बाद किया है!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "승리했지만, 허무함이 밀려왔다. 또 다른 왜곡이 기다리는 듯했다.",
						"english": "Victory was ours, but a sense of emptiness washed over us. Another distortion seemed to await.",
						"japanese": "勝利したが、虚しさが押し寄せた。また別の歪みが待ち受けているようだった。",
						"chinese": "虽然胜利了，但一种空虚感涌上心头。似乎有另一种扭曲在等待着。",
						"french": "La victoire était nôtre, mais un sentiment de vide nous envahit. Une autre distorsion semblait nous attendre.",
						"spanish": "La victoria fue nuestra, pero una sensación de vacío nos invadió. Otra distorsión parecía aguardar.",
						"vietnamese": "Đã chiến thắng, nhưng một cảm giác trống rỗng ập đến. Dường như một sự biến dạng khác đang chờ đợi.",
						"thai": "ได้รับชัยชนะแล้ว แต่ความว่างเปล่าก็ถาโถมเข้ามา เหมือนการบิดเบือนอื่นกำลังรออยู่",
						"hindi": "जीत हमारी थी, लेकिन एक खालीपन छा गया। लगता था कि एक और विकृति इंतजार कर रही है।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "정체 모를 힘에 압도당했다. 숲의 왜곡된 생명력이 모든 것을 집어삼켰다.",
						"english": "Overwhelmed by an unknown power. The forest's distorted life force devoured everything.",
						"japanese": "正体不明の力に圧倒された。森の歪んだ生命力が全てを飲み込んだ。",
						"chinese": "被一股不明力量压倒了。森林扭曲的生命力吞噬了一切。",
						"french": "Submergé par une force inconnue. La force vitale distordue de la forêt a tout dévoré.",
						"spanish": "Abrumado por un poder desconocido. La fuerza vital distorsionada del bosque lo devoró todo.",
						"vietnamese": "Bị áp đảo bởi một sức mạnh không rõ. Sinh lực méo mó của khu rừng nuốt chửng mọi thứ.",
						"thai": "ถูกครอบงำด้วยพลังที่ไม่รู้จัก พลังชีวิตที่บิดเบี้ยวของป่ากลืนกินทุกสิ่ง",
						"hindi": "एक अज्ञात शक्ति से अभिभूत। जंगल की विकृत जीवन शक्ति ने सब कुछ निगल लिया।"
					}
				},
				{
					"content": {
						"korean": "어리석은 침입자. 이 숲의 질서는… 영원하다.",
						"english": "Foolish intruders. The order of this forest... is eternal.",
						"japanese": "愚かな侵入者め。この森の秩序は… 永遠だ。",
						"chinese": "愚蠢的入侵者。这片森林的秩序……是永恒的。",
						"french": "Stupides intrus. L'ordre de cette forêt… est éternel.",
						"spanish": "Estúpidos intrusos. El orden de este bosque... es eterno.",
						"vietnamese": "Kẻ xâm nhập ngu ngốc. Trật tự của khu rừng này… là vĩnh cửu.",
						"thai": "ผู้บุกรุกโง่เขลา ระเบียบของป่านี้... เป็นนิรันดร์",
						"hindi": "मूर्ख घुसपैठियों। इस जंगल की व्यवस्था... शाश्वत है।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "아직… 끝나지 않았어…!",
						"english": "It's not... over yet...!",
						"japanese": "まだ… 終わってない…！",
						"chinese": "还没……结束……！",
						"french": "Ce n'est… pas encore fini…!",
						"spanish": "¡Todavía... no ha terminado...!",
						"vietnamese": "Chưa… kết thúc đâu…!",
						"thai": "ยัง... ไม่จบ...!",
						"hindi": "अभी... खत्म नहीं हुआ...!"
					}
				}
			],
			"id": 15,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 길을 막았다. 불길한 기운이 맴돌았다.",
						"english": "A colossal shadow blocked the path. An ominous aura lingered.",
						"japanese": "巨大な影が道を塞いだ。不吉な気配が漂っていた。",
						"chinese": "巨大的阴影挡住了去路。不祥的气息弥漫。",
						"french": "Une ombre gigantesque bloquait le chemin. Une aura sinistre planait.",
						"spanish": "Una sombra colosal bloqueó el camino. Un aura ominosa se cernía.",
						"vietnamese": "Một bóng đen khổng lồ chặn lối. Một luồng khí bất an lảng vảng.",
						"thai": "เงาขนาดใหญ่ขวางทาง ออร่าแห่งลางร้ายวนเวียนอยู่",
						"hindi": "एक विशाल छाया ने रास्ता रोक दिया। एक अशुभ आभा मंडरा रही थी।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "감히 여기까지 침범하다니. 이 숲의 평화를 깨려는 자는 용서치 않는다.",
						"english": "How dare you invade this far. Those who disturb the peace of this forest will not be forgiven.",
						"japanese": "よくもここまで侵入したな。この森の平和を乱す者は許さない。",
						"chinese": "竟敢侵犯至此。扰乱这片森林和平者，绝不饶恕。",
						"french": "Comment oses-tu envahir si loin. Ceux qui troublent la paix de cette forêt ne seront pas pardonnés.",
						"spanish": "¿Cómo te atreves a invadir tan lejos? ¡Quienes perturben la paz de este bosque no serán perdonados!",
						"vietnamese": "Dám xâm phạm đến đây. Kẻ nào phá vỡ bình yên khu rừng này sẽ không được tha thứ.",
						"thai": "กล้าบุกรุกมาถึงที่นี่เชียวหรือ ผู้ใดคิดทำลายความสงบของป่านี้จะไม่ได้รับการอภัย",
						"hindi": "यहां तक ​​घुसपैठ करने की हिम्मत कैसे हुई। इस जंगल की शांति भंग करने वालों को माफ नहीं किया जाएगा।"
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "평화? 당신이야말로 이 숲을 병들게 하는 근원이야!",
						"english": "Peace? You are the very source that sickens this forest!",
						"japanese": "平和だと？貴様こそがこの森を蝕む根源だ！",
						"chinese": "和平？你才是让这片森林病态的根源！",
						"french": "La paix ? Tu es la cause même de la maladie de cette forêt !",
						"spanish": "¿Paz? ¡Tú eres la raíz de la enfermedad de este bosque!",
						"vietnamese": "Bình yên ư? Ngươi chính là nguồn gốc khiến khu rừng này mục ruỗng!",
						"thai": "ความสงบหรือ? เจ้าเองนั่นแหละคือต้นเหตุที่ทำให้ป่านี้ป่วย!",
						"hindi": "शांति? तुम ही इस जंगल को बीमार करने का स्रोत हो!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "모르는군. 모든 것은 숲을 위한 희생. 너희는 그저 방해물일 뿐.",
						"english": "You don't understand. Everything is a sacrifice for the forest. You are merely obstacles.",
						"japanese": "分かってないな。全ては森のための犠牲。お前たちはただの邪魔者だ。",
						"chinese": "你不知道。一切都是为了森林的牺牲。你们不过是障碍。",
						"french": "Vous ne comprenez pas. Tout est un sacrifice pour la forêt. Vous n'êtes que des obstacles.",
						"spanish": "No entiendes. Todo es un sacrificio por el bosque. Solo sois obstáculos.",
						"vietnamese": "Ngươi không hiểu. Tất cả là sự hy sinh vì khu rừng. Các ngươi chỉ là những chướng ngại vật.",
						"thai": "เจ้าไม่เข้าใจ ทุกสิ่งคือการเสียสละเพื่อป่า พวกเจ้าเป็นเพียงอุปสรรค",
						"hindi": "तुम नहीं समझते। सब कुछ जंगल के लिए बलिदान है। तुम सिर्फ बाधाएं हो。"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"숲은 깊어질수록 다른 얼굴을 드러냈다.",
			"겉모습의 평화 뒤에는 왜곡된 생명력이 숨쉬고 있었다.",
			"수호자라 불리는 자가 길을 막았다.",
			"그의 필사적인 저항은, 숲의 진실이 깨지는 것을 두려워하는 것처럼 보였다.",
			"분노는, 길을 밝히는가, 눈을 가리는가?"
		],
		"english": [
			"The deeper the forest, the more its true nature emerged.",
			"Behind its peaceful facade, a distorted life force breathed.",
			"One called the Guardian blocked the way.",
			"His desperate resistance seemed to fear the forest's truth being revealed.",
			"Does fury light the path, or blind the eyes?"
		],
		"japanese": [
			"森は深まるほど、別の顔を見せた。",
			"見かけの平和の裏には、歪んだ生命力が息づいていた。",
			"守護者と呼ばれる者が道を塞いだ。",
			"彼の必死の抵抗は、森の真実が暴かれるのを恐れているようだった。",
			"怒りは、道を照らすのか、それとも目を曇らせるのか？"
		],
		"chinese": [
			"森林越深，越是展露出不同的面貌。",
			"表象的和平之下，涌动着扭曲的生命力。",
			"一名被称为守护者的人挡住了去路。",
			"他拼死的抵抗，似乎是害怕森林的真相被揭露。",
			"愤怒，是照亮前路，还是蒙蔽双眼？"
		],
		"french": [
			"Plus la forêt s'épaississait, plus elle révélait un autre visage.",
			"Derrière l'apparence de paix, une force vitale distordue respirait.",
			"Celui qu'on appelait le Gardien bloqua le passage.",
			"Sa résistance désespérée semblait craindre que la vérité de la forêt ne soit révélée.",
			"La fureur éclaire-t-elle le chemin, ou aveugle-t-elle les yeux ?"
		],
		"spanish": [
			"Cuanto más se adentraba uno en el bosque, más revelaba su verdadera naturaleza.",
			"Detrás de su fachada de paz, latía una fuerza vital distorsionada.",
			"Alguien llamado el Guardián bloqueó el camino.",
			"Su resistencia desesperada parecía temer que la verdad del bosque fuera revelada.",
			"¿La ira ilumina el camino o ciega los ojos?"
		],
		"vietnamese": [
			"Càng vào sâu trong rừng, nó càng lộ ra một bộ mặt khác.",
			"Đằng sau vẻ ngoài bình yên, một sinh lực méo mó đang ẩn mình.",
			"Một kẻ tự xưng là Người bảo hộ đã chặn đường.",
			"Sự kháng cự tuyệt vọng của hắn dường như sợ hãi sự thật về khu rừng bị phơi bày.",
			"Cơn thịnh nộ, soi đường hay che mắt?"
		],
		"thai": [
			"ยิ่งป่าลึกเข้าไปเท่าไร ก็ยิ่งเผยให้เห็นอีกด้านหนึ่ง",
			"เบื้องหลังความสงบสุขที่เห็นภายนอก พลังชีวิตที่บิดเบี้ยวได้ซ่อนเร้นอยู่",
			"ผู้ที่ถูกเรียกว่าผู้พิทักษ์ได้ขวางทางเอาไว้",
			"การต่อต้านอย่างสิ้นหวังของเขา ดูเหมือนจะกลัวการเปิดเผยความจริงของป่า",
			"ความโกรธแค้นจะส่องทาง หรือบดบังสายตา?"
		],
		"hindi": [
			"जैसे-जैसे जंगल गहरा होता गया, उसने अपना एक अलग चेहरा दिखाया।",
			"उसकी शांतिपूर्ण मुखौटे के पीछे, एक विकृत जीवन शक्ति साँस ले रही थी।",
			"जिसे संरक्षक कहा जाता था, उसने रास्ता रोक दिया।",
			"उसका हताश प्रतिरोध ऐसा लग रहा था मानो वह जंगल के सच के सामने आने से डर रहा हो।",
			"क्या क्रोध रास्ता रोशन करता है, या आँखें अंधा करता है?"
		]
	}
} as const;
