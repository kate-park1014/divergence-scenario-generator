export const scenario_forest_luminamorta_22_03 = {
	"scenario_id": "forest_luminamorta_22_03",
	"order": 3,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"glen": {
			"id": "mon_42dfd4f2-9564-4b4b-beed-993d578ebd5a",
			"name": {
				"korean": "글렌",
				"english": "Glen",
				"japanese": "グレン",
				"chinese": "格伦",
				"french": "Glen",
				"spanish": "Glen",
				"vietnamese": "Glen",
				"thai": "เกล็น",
				"hindi": "ग्लेन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/6aa9eb0c-364f-4bfb-fa3f-52711da6a600/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2dbb8c2d-a999-4154-3a88-7c5cc5ca2200/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"숲은 속삭였다. 과거의 비명을, 잊힌 진실을.",
			"은둔자 글렌은 들었다. 허나 진실을 외면했다.",
			"탐험대가 다가올수록, 숲은 더욱 미쳐갔다.",
			"과연 치유인가, 광기인가."
		],
		"english": [
			"The forest whispered. Screams of the past, forgotten truths.",
			"Glen the Hermit listened. Yet, he turned away from the truth.",
			"As the expedition drew near, the forest grew wilder.",
			"Is it healing, or madness?"
		],
		"japanese": [
			"森は囁いた。過去の叫び、忘れられた真実を。",
			"隠者グレンは聞いた。しかし、真実から目を背けた。",
			"探検隊が近づくにつれ、森はさらに狂気を帯びていった。",
			"果たして、癒しか、狂気か。"
		],
		"chinese": [
			"森林低语。过去的尖叫，被遗忘的真相。",
			"隐士格伦听见了。然而，他却对真相视而不见。",
			"探险队越是靠近，森林就越是疯狂。",
			"究竟是治愈，还是疯狂？"
		],
		"french": [
			"La forêt murmurait. Des cris du passé, des vérités oubliées.",
			"Glen l'ermite écouta. Pourtant, il se détourna de la vérité.",
			"À mesure que l'expédition approchait, la forêt devenait plus folle.",
			"Est-ce la guérison, ou la folie ?"
		],
		"spanish": [
			"El bosque susurró. Gritos del pasado, verdades olvidadas.",
			"Glen el ermitaño escuchó. Sin embargo, ignoró la verdad.",
			"Cuanto más se acercaba la expedición, más enloquecía el bosque.",
			"¿Es curación, o locura?"
		],
		"vietnamese": [
			"Rừng thì thầm. Tiếng hét của quá khứ, những sự thật bị lãng quên.",
			"Glen ẩn sĩ đã lắng nghe. Nhưng anh ta đã quay lưng lại với sự thật.",
			"Đoàn thám hiểm càng đến gần, khu rừng càng trở nên điên dại.",
			"Liệu đây là sự chữa lành, hay sự điên rồ?"
		],
		"thai": [
			"ป่ากระซิบ เสียงกรีดร้องจากอดีต ความจริงที่ถูกลืมเลือน",
			"เกล็นฤๅษีได้ยิน แต่เขากลับเมินเฉยต่อความจริง",
			"ยิ่งคณะสำรวจเข้ามาใกล้ ป่ายิ่งบ้าคลั่งขึ้น",
			"แท้จริงแล้วนี่คือการเยียวยา หรือความบ้าคลั่งกันแน่"
		],
		"hindi": [
			"वन फुसफुसाया। अतीत की चीखें, भूले हुए सत्य।",
			"एकांतवासी ग्लेन ने सुना। फिर भी, उसने सत्य से मुँह मोड़ लिया।",
			"जैसे-जैसे अभियान दल करीब आता गया, जंगल और भी हिंसक होता गया।",
			"क्या यह उपचार है, या पागलपन?"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "숲 깊은 곳. 이끼 낀 동굴이 나타났다.",
						"english": "Deep within the forest. An mossy cave appeared.",
						"japanese": "森の奥深く。苔むした洞窟が現れた。",
						"chinese": "森林深处。一个长满青苔的洞穴出现了。",
						"french": "Au plus profond de la forêt. Une grotte moussue apparut.",
						"spanish": "En lo profundo del bosque. Una cueva musgosa apareció.",
						"vietnamese": "Sâu trong rừng. Một hang động đầy rêu hiện ra.",
						"thai": "ลึกเข้าไปในป่า ถ้ำตะไคร่น้ำปรากฏขึ้น",
						"hindi": "जंगल के गहरे भीतर। एक काई लगी गुफा दिखाई दी।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "저기 누가 있어.",
						"english": "Someone's there.",
						"japanese": "誰かいる。",
						"chinese": "那里有人。",
						"french": "Il y a quelqu'un là-bas.",
						"spanish": "Hay alguien ahí.",
						"vietnamese": "Có ai đó ở đó.",
						"thai": "มีใครอยู่ตรงนั้น",
						"hindi": "वहाँ कोई है।"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "glen",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "어서 와! 길 잃은 건 아니지? 여긴 조용하고… 평화로운 곳이야.",
						"english": "Welcome! You're not lost, are you? This place is quiet... and peaceful.",
						"japanese": "ようこそ！道に迷ったわけじゃないよね？ここは静かで…平和な場所だよ。",
						"chinese": "欢迎！你没迷路吧？这里很安静……也很平和。",
						"french": "Bienvenue ! Tu n'es pas perdu, n'est-ce pas ? Cet endroit est calme... et paisible.",
						"spanish": "¡Bienvenido! No te has perdido, ¿verdad? Este lugar es tranquilo... y pacífico.",
						"vietnamese": "Chào mừng! Bạn không bị lạc đường chứ? Nơi đây yên tĩnh... và bình yên.",
						"thai": "ยินดีต้อนรับ! ไม่ได้หลงทางใช่ไหม? ที่นี่เงียบสงบ...และสันติ",
						"hindi": "स्वागत है! तुम खोए हुए तो नहीं हो? यह जगह शांत... और शांतिपूर्ण है।"
					},
					"speaker": "glen"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "당신은 누구시죠?",
						"english": "Who are you?",
						"japanese": "あなたは誰ですか？",
						"chinese": "你是谁？",
						"french": "Qui êtes-vous ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Bạn là ai?",
						"thai": "คุณคือใคร",
						"hindi": "आप कौन हैं?"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "glen",
					"content": {
						"korean": "난 글렌. 그저 숲을 좋아하는 사람. 아무 일도 없어. 아무것도.",
						"english": "I'm Glen. Just someone who likes the forest. Nothing's happening. Nothing at all.",
						"japanese": "私はグレン。ただ森が好きな者だ。何も起こっていない。何もね。",
						"chinese": "我是格伦。只是一个喜欢森林的人。什么都没有发生。什么都没有。",
						"french": "Je suis Glen. Juste quelqu'un qui aime la forêt. Il ne se passe rien. Rien du tout.",
						"spanish": "Soy Glen. Solo alguien a quien le gusta el bosque. No pasa nada. Absolutamente nada.",
						"vietnamese": "Tôi là Glen. Chỉ là một người yêu rừng thôi. Không có gì xảy ra cả. Không có gì hết.",
						"thai": "ฉันคือเกล็น แค่คนชอบป่า ไม่มีอะไรเกิดขึ้น ไม่มีอะไรเลย",
						"hindi": "मैं ग्लेन हूँ। बस एक ऐसा व्यक्ति जिसे जंगल पसंद है। कुछ नहीं हो रहा है। बिल्कुल कुछ नहीं।"
					}
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "glen"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "뭘 그렇게 뚫어져라 봐? 그냥… 이끼일 뿐인데.",
						"english": "What are you staring at? It's just... moss.",
						"japanese": "何をそんなにじっと見てるんだ？ただの…苔じゃないか。",
						"chinese": "你在盯着看什么？那只是……苔藓而已。",
						"french": "Qu'est-ce que tu regardes fixement comme ça ? C'est juste... de la mousse.",
						"spanish": "¿Qué miras con tanto detenimiento? Es solo... musgo.",
						"vietnamese": "Sao bạn cứ nhìn chằm chằm thế? Chỉ là... rêu thôi mà.",
						"thai": "จ้องอะไรขนาดนั้น? แค่... ตะไคร่น้ำเอง",
						"hindi": "तुम क्या घूर रहे हो? यह बस... काई है।"
					},
					"speaker": "glen"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이끼가… 속삭이는 것 같아요. '굶주림'이라고…",
						"english": "The moss… it seems to whisper. 'Hunger'…",
						"japanese": "苔が…囁いているようです。「飢え」と…",
						"chinese": "苔藓…好像在低语。“饥饿”…",
						"french": "La mousse… on dirait qu'elle murmure. \"Faim\"…",
						"spanish": "El musgo… parece susurrar. \"Hambre\"…",
						"vietnamese": "Rêu… hình như đang thì thầm. \"Đói\"…",
						"thai": "มอส…เหมือนจะกระซิบ \"ความหิวโหย\"…",
						"hindi": "काई... फुसफुसा रही है। 'भूख'..."
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "glen",
					"content": {
						"korean": "무슨 소리야! 조용해! 숲은 그저 조용할 뿐이야! 평화롭다고!",
						"english": "What nonsense! Quiet! The forest is just quiet! Peaceful!",
						"japanese": "なんだって！静かに！森はただ静かなだけだ！平和なんだ！",
						"chinese": "胡说八道！安静！森林只是安静！是和平的！",
						"french": "N'importe quoi ! Silence ! La forêt est juste calme ! Paisible !",
						"spanish": "¡Qué tonterías! ¡Silencio! ¡El bosque solo está en silencio! ¡Es pacífico!",
						"vietnamese": "Cái gì vậy! Im đi! Rừng chỉ yên tĩnh thôi! Bình yên mà!",
						"thai": "เพ้อเจ้ออะไร! เงียบนะ! ป่ามันแค่เงียบ! สันติสุขต่างหาก!",
						"hindi": "क्या बकवास है! चुप रहो! जंगल बस शांत है! शांतिपूर्ण है!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "글렌 씨, 괜찮으세요?",
						"english": "Mr. Glenn, are you alright?",
						"japanese": "グレンさん、大丈夫ですか？",
						"chinese": "格伦先生，您还好吗？",
						"french": "Monsieur Glenn, vous allez bien ?",
						"spanish": "¿Señor Glenn, se encuentra bien?",
						"vietnamese": "Anh Glenn, anh không sao chứ?",
						"thai": "คุณเกล็น ไม่เป็นอะไรใช่ไหมครับ?",
						"hindi": "मिस्टर ग्लेन, क्या आप ठीक हैं?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "난 아주 괜찮아! 너희가 이상한 거야! 숲은 아름다워!",
						"english": "I'm perfectly fine! You're the strange ones! The forest is beautiful!",
						"japanese": "私は全く問題ない！お前たちが変なんだ！森は美しい！",
						"chinese": "我很好！是你们奇怪！森林很美！",
						"french": "Je vais très bien ! Ce sont vous qui êtes étranges ! La forêt est magnifique !",
						"spanish": "¡Estoy perfectamente bien! ¡Ustedes son los extraños! ¡El bosque es hermoso!",
						"vietnamese": "Tôi hoàn toàn ổn! Các người mới là những kẻ kỳ lạ! Rừng đẹp mà!",
						"thai": "ฉันสบายดี! พวกเธอต่างหากที่แปลก! ป่ามันสวยงาม!",
						"hindi": "मैं बिल्कुल ठीक हूँ! तुम सब अजीब हो! जंगल सुंदर है!"
					},
					"speaker": "glen"
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
						"korean": "숲의 속삭임이 점차 선명해졌다.",
						"english": "The forest's whispers grew clearer.",
						"japanese": "森の囁きが次第に鮮明になった。",
						"chinese": "森林的低语逐渐清晰起来。",
						"french": "Les murmures de la forêt devinrent plus clairs.",
						"spanish": "Los susurros del bosque se hicieron más claros.",
						"vietnamese": "Tiếng thì thầm của rừng dần trở nên rõ ràng hơn.",
						"thai": "เสียงกระซิบของป่าชัดเจนขึ้นเรื่อยๆ",
						"hindi": "जंगल की फुसफुसाहटें और स्पष्ट होती गईं।"
					}
				},
				{
					"type": "direction",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "glen"
				},
				{
					"speaker": "glen",
					"content": {
						"korean": "쉿! 저것 봐. 숲이 노래하고 있어. '영원한 평화'라고!",
						"english": "Shhh! Look! The forest is singing. 'Eternal Peace'!",
						"japanese": "シッ！あれを見ろ。森が歌っている。「永遠の平和」と！",
						"chinese": "嘘！看！森林在歌唱。“永恒的和平”！",
						"french": "Chut ! Regardez ! La forêt chante. \"Paix Éternelle\" !",
						"spanish": "¡Shhh! ¡Mira! El bosque está cantando. \"Paz Eterna\"!",
						"vietnamese": "Suỵt! Nhìn kìa. Rừng đang hát. 'Bình yên vĩnh cửu'!",
						"thai": "ชู่ว! ดูสิ ป่ากำลังร้องเพลง 'สันติภาพนิรันดร์'!",
						"hindi": "शश! देखो! जंगल गा रहा है। 'अनंत शांति'!"
					},
					"type": "speech",
					"emotion": "happy"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "노래? 저는 '굶주림'이라고 들리는 것 같은데요…",
						"english": "Singing? I think I hear 'Hunger'…",
						"japanese": "歌？私は「飢え」と聞こえるようなのですが…",
						"chinese": "唱歌？我好像听到了“饥饿”…",
						"french": "Chanter ? Il me semble entendre \"Faim\"…",
						"spanish": "¿Cantar? Me parece que escucho \"Hambre\"…",
						"vietnamese": "Hát? Tôi nghe như là 'Đói' thì phải…",
						"thai": "ร้องเพลงเหรอครับ? ผมได้ยินเป็น 'ความหิวโหย'…",
						"hindi": "गाना? मुझे तो 'भूख' सुनाई दे रही है..."
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "glen",
					"content": {
						"korean": "아니야! 숲은 평화로워! 배고픈 건 너희들이야! 진실을 모르는 너희들!",
						"english": "No! The forest is peaceful! You're the hungry ones! You who don't know the truth!",
						"japanese": "違う！森は平和だ！お前たちが腹を空かせているんだ！真実を知らないお前たちが！",
						"chinese": "不！森林是和平的！是你们饿了！你们这些不知道真相的人！",
						"french": "Non ! La forêt est paisible ! Ce sont vous les affamés ! Vous qui ignorez la vérité !",
						"spanish": "¡No! ¡El bosque es pacífico! ¡Ustedes son los hambrientos! ¡Ustedes que no conocen la verdad!",
						"vietnamese": "Không! Rừng bình yên mà! Các người mới là những kẻ đói khát! Các người không biết sự thật!",
						"thai": "ไม่จริง! ป่าสงบสุข! พวกเธอต่างหากที่หิว! พวกเธอที่ไม่รู้ความจริง!",
						"hindi": "नहीं! जंगल शांतिपूर्ण है! तुम सब भूखे हो! तुम, जो सच नहीं जानते!"
					}
				},
				{
					"content": {
						"korean": "그 진실이 뭔데요?",
						"english": "What is that truth?",
						"japanese": "その真実って何ですか？",
						"chinese": "那真相是什么？",
						"french": "Quelle est cette vérité ?",
						"spanish": "¿Cuál es esa verdad?",
						"vietnamese": "Sự thật đó là gì?",
						"thai": "ความจริงนั้นคืออะไรครับ?",
						"hindi": "वह सच क्या है?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "glen",
					"content": {
						"korean": "아무것도 없어! 제발! 그냥 지나가!",
						"english": "There's nothing! Please! Just pass by!",
						"japanese": "何もない！頼む！ただ通り過ぎてくれ！",
						"chinese": "什么都没有！求你了！走开！",
						"french": "Il n'y a rien ! S'il vous plaît ! Passez juste votre chemin !",
						"spanish": "¡No hay nada! ¡Por favor! ¡Solo sigan!",
						"vietnamese": "Không có gì cả! Làm ơn! Cứ đi đi!",
						"thai": "ไม่มีอะไร! ได้โปรด! แค่เดินผ่านไป!",
						"hindi": "कुछ नहीं है! कृपया! बस आगे बढ़ो!"
					}
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "glen",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "더 이상 가면 안 돼! 멈춰!",
						"english": "Don't go any further! Stop!",
						"japanese": "これ以上はダメだ！止まれ！",
						"chinese": "不许再往前了！停下！",
						"french": "N'avancez plus ! Arrêtez !",
						"spanish": "¡No vayas más lejos! ¡Detente!",
						"vietnamese": "Đừng đi nữa! Dừng lại!",
						"thai": "ไปต่อไม่ได้แล้ว! หยุดเดี๋ยวนี้!",
						"hindi": "और आगे मत जाओ! रुको!"
					},
					"speaker": "glen",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "왜요? 뭘 숨기시는 거죠?",
						"english": "Why? What are you hiding?",
						"japanese": "なぜですか？何を隠しているんですか？",
						"chinese": "为什么？你们在隐瞒什么？",
						"french": "Pourquoi ? Que cachez-vous ?",
						"spanish": "¿Por qué? ¿Qué están escondiendo?",
						"vietnamese": "Tại sao? Anh đang giấu cái gì?",
						"thai": "ทำไมคะ/ครับ? คุณกำลังซ่อนอะไรอยู่?",
						"hindi": "क्यों? क्या छिपा रहे हो?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "glen",
					"content": {
						"korean": "보면 안 돼! 진실은… 추악해! 저 괴물에게 먹히고 싶지 않으면!",
						"english": "Don't look! The truth is... hideous! Unless you want to be devoured by that monster!",
						"japanese": "見てはダメだ！真実は…醜悪だ！あの怪物に食われたくなかったら！",
						"chinese": "不许看！真相是…丑恶的！除非你想被那个怪物吞噬！",
						"french": "Ne regardez pas ! La vérité est... horrible ! À moins que vous ne vouliez être dévoré par ce monstre !",
						"spanish": "¡No mires! La verdad es... horrible. ¡A menos que quieras ser devorado por ese monstruo!",
						"vietnamese": "Đừng nhìn! Sự thật... thật ghê tởm! Trừ khi ngươi muốn bị con quái vật đó nuốt chửng!",
						"thai": "ห้ามมอง! ความจริงมัน... น่าเกลียดน่ากลัว! ถ้าไม่อยากถูกเจ้าสัตว์ประหลาดนั่นกินล่ะก็!",
						"hindi": "देखो मत! सच... घिनौना है! अगर उस राक्षस का निवाला नहीं बनना चाहते तो!"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "괴물? 누구 말하는 거예요?",
						"english": "Monster? Who are you talking about?",
						"japanese": "怪物？誰のことですか？",
						"chinese": "怪物？你说的是谁？",
						"french": "Monstre ? De qui parlez-vous ?",
						"spanish": "¿Monstruo? ¿De quién estás hablando?",
						"vietnamese": "Quái vật? Anh đang nói về ai?",
						"thai": "สัตว์ประหลาด? คุณกำลังพูดถึงใคร?",
						"hindi": "राक्षस? किसकी बात कर रहे हो?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "이끼와 나무들이 낮게 속삭였다. '먹어치워. 그래야 평화로워져.'",
						"english": "The moss and trees whispered softly, 'Devour it. Only then will there be peace.'",
						"japanese": "苔と木々が低く囁いた。『食らい尽くせ。そうすれば平和になる。』",
						"chinese": "苔藓和树木低声细语道：“吞噬它。那样才能获得平静。”",
						"french": "La mousse et les arbres chuchotèrent doucement : « Dévore-le. Alors seulement il y aura la paix. »",
						"spanish": "El musgo y los árboles susurraron suavemente: 'Devóralo. Solo así habrá paz.'",
						"vietnamese": "Rêu và cây cối thì thầm khẽ: 'Hãy nuốt chửng nó. Chỉ khi đó mới có hòa bình.'",
						"thai": "ตะไคร่น้ำและต้นไม้กระซิบแผ่วเบาว่า 'กินมันซะ แล้วจะมีสันติสุข'",
						"hindi": "काई और पेड़ों ने धीमे से फुसफुसाया, 'खा जाओ। तभी शांति मिलेगी।'"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "glen",
					"content": {
						"korean": "거짓말! 전부 거짓말이야!",
						"english": "Lies! It's all lies!",
						"japanese": "嘘だ！全部嘘だ！",
						"chinese": "谎言！全是谎言！",
						"french": "Mensonges ! Tout n'est que mensonge !",
						"spanish": "¡Mentiras! ¡Todo es mentira!",
						"vietnamese": "Dối trá! Tất cả đều là dối trá!",
						"thai": "โกหก! ทั้งหมดเป็นเรื่องโกหก!",
						"hindi": "झूठ! सब झूठ है!"
					}
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "훗… 너희의 분노로는… 나를 막을 수 없어.",
						"english": "Hmph... Your anger... cannot stop me.",
						"japanese": "「ふっ…お前たちの怒りでは…私を止められぬ。」",
						"chinese": "“哼…你们的愤怒…阻止不了我。”",
						"french": "« Hmph... Votre colère... ne peut pas m'arrêter. »",
						"spanish": "« Hmph... Vuestra ira... no puede detenerme. »",
						"vietnamese": "“Hừm... Cơn giận của các ngươi... không thể ngăn cản ta.”",
						"thai": "“ฮึ่ม... ความโกรธของพวกแก... หยุดฉันไม่ได้หรอก.”",
						"hindi": "“हम्म... तुम्हारा गुस्सा... मुझे रोक नहीं सकता।”"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…다시 일어설 거야.",
						"english": "...I will rise again.",
						"japanese": "「…また立ち上がるさ。」",
						"chinese": "“…我会再次站起来的。”",
						"french": "« ...Je me relèverai. »",
						"spanish": "« ...Volveré a levantarme. »",
						"vietnamese": "“...Ta sẽ đứng dậy lần nữa.”",
						"thai": "“...ฉันจะลุกขึ้นอีกครั้ง.”",
						"hindi": "“...मैं फिर से उठूंगा।”"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "굶주림은… 계속될 뿐. 영원히…",
						"english": "The hunger... will only continue. Forever...",
						"japanese": "「飢えは…ただ続くだけ。永遠に…」",
						"chinese": "“饥饿…只会继续下去。永远…”",
						"french": "« La faim... ne fera que continuer. Éternellement... »",
						"spanish": "« El hambre... solo continuará. Para siempre... »",
						"vietnamese": "“Cơn đói... sẽ chỉ tiếp diễn. Vĩnh viễn...”",
						"thai": "“ความหิวโหย... จะดำเนินต่อไปเท่านั้น. ชั่วนิรันดร์...”",
						"hindi": "“भूख... बस जारी रहेगी। हमेशा के लिए...”"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"speaker": "glen",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						3
					]
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "제발 돌아가! 저 괴물을 만나면… 모든 게 끝장이야!",
						"english": "Please go back! If you meet that monster... everything will be over!",
						"japanese": "お願いだから帰って！あの怪物を 만나たら…全てがおしまいだ！",
						"chinese": "求你回去！如果遇到那个怪物…一切就都完了！",
						"french": "S'il vous plaît, retournez ! Si vous rencontrez ce monstre... tout sera fini !",
						"spanish": "¡Por favor, regresa! Si encuentras a ese monstruo... ¡todo se acabará!",
						"vietnamese": "Làm ơn quay lại! Nếu ngươi gặp con quái vật đó... mọi thứ sẽ kết thúc!",
						"thai": "ได้โปรดกลับไปเถอะ! ถ้าได้เจอสัตว์ประหลาดนั่น... ทุกอย่างจะจบสิ้น!",
						"hindi": "कृपया वापस जाओ! अगर तुम उस राक्षस से मिले... तो सब खत्म हो जाएगा!"
					},
					"speaker": "glen"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "…이제 왔군. 새로운 양분인가.",
						"english": "...You're here. New sustenance, is it?",
						"japanese": "…ついに来たか。新たな養分か。",
						"chinese": "…你终于来了。是新的养分吗？",
						"french": "...Vous êtes là. Une nouvelle subsistance, n'est-ce pas ?",
						"spanish": "...Ya estás aquí. ¿Nuevo sustento?",
						"vietnamese": "...Ngươi đến rồi sao. Là chất dinh dưỡng mới à.",
						"thai": "...มาถึงแล้วสินะ. สารอาหารใหม่หรือ.",
						"hindi": "...तुम आ गए। नया पोषण है क्या।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "네가 이 숲을 병들게 하는 근원이구나.",
						"english": "You are the source of this forest's sickness.",
						"japanese": "お前がこの森を病ませる根源なのだな。",
						"chinese": "你就是让这片森林生病的根源。",
						"french": "Tu es la source de la maladie de cette forêt.",
						"spanish": "Eres la fuente de la enfermedad de este bosque.",
						"vietnamese": "Ngươi là nguồn gốc khiến khu rừng này bệnh hoạn.",
						"thai": "แกคือต้นเหตุที่ทำให้ป่านี้ป่วยไข้",
						"hindi": "तुम ही इस जंगल की बीमारी का कारण हो।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "병? 아니다. 이것이 '영원한 평화'다. 너희도 곧 알게 될 것이다. 굶주림은 끝난다.",
						"english": "Sickness? No. This is 'eternal peace'. You too will soon understand. Hunger ends.",
						"japanese": "病？違う。これが『永遠の平和』だ。お前たちもすぐに分かるだろう。飢えは終わる。",
						"chinese": "病？不。这就是‘永恒的和平’。你们很快就会明白。饥饿将终结。",
						"french": "Maladie ? Non. C'est la 'paix éternelle'. Vous aussi comprendrez bientôt. La faim prendra fin.",
						"spanish": "¿Enfermedad? No. Esto es la 'paz eterna'. Vosotros también lo entenderéis pronto. El hambre termina.",
						"vietnamese": "Bệnh ư? Không. Đây là 'hòa bình vĩnh cửu'. Các ngươi cũng sẽ sớm hiểu thôi. Nạn đói sẽ kết thúc.",
						"thai": "โรคภัย? ไม่ใช่. นี่คือ 'สันติสุขนิรันดร์'. พวกเจ้าก็จะเข้าใจในไม่ช้า. ความหิวโหยจะสิ้นสุดลง.",
						"hindi": "बीमारी? नहीं। यह 'शाश्वत शांति' है। तुम भी जल्द समझ जाओगे। भूख खत्म होती है।"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "glen",
					"content": {
						"korean": "아니야! 거짓말!",
						"english": "No! A lie!",
						"japanese": "「違う！嘘だ！」",
						"chinese": "“不！骗人的！”",
						"french": "« Non ! C'est un mensonge ! »",
						"spanish": "« ¡No! ¡Es una mentira! »",
						"vietnamese": "“Không! Lời nói dối!”",
						"thai": "“ไม่จริง! โกหก!”",
						"hindi": "“नहीं! झूठ!”"
					}
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "크윽… 겨우 이 정도…로는… 끝나지 않아… 진정한 '치유'는…",
						"english": "Ugh... This won't... end it... True 'healing' is...",
						"japanese": "「くっ…これしき…では…終わらぬ…真の『癒やし』は…」",
						"chinese": "“呃…就凭这些…还…远远不够…真正的‘治愈’是…”",
						"french": "« Argh... Ce n'est pas... la fin... La vraie 'guérison', c'est... »",
						"spanish": "« Ugh... Esto... no lo terminará... La verdadera 'sanación' es... »",
						"vietnamese": "“Khụ... Chỉ thế này... vẫn chưa... kết thúc được đâu... 'Chữa lành' thực sự là...”",
						"thai": "“อึก... แค่นี้... ไม่... จบหรอก... 'การเยียวยา' ที่แท้จริงคือ...”",
						"hindi": "“उफ़... बस इतना ही... इससे... खत्म नहीं होगा... असली 'उपचार' तो...”"
					}
				},
				{
					"content": {
						"korean": "이게 끝이야. 네 뒤틀린 치유는.",
						"english": "This is the end. Of your twisted healing.",
						"japanese": "「これで終わりだ。お前の歪んだ癒やしは。」",
						"chinese": "“到此为止了。你那扭曲的治愈。”",
						"french": "« C'est la fin. De ta guérison tordue. »",
						"spanish": "« Este es el fin. De tu retorcida sanación. »",
						"vietnamese": "“Đây là kết thúc. Cho sự chữa lành méo mó của ngươi.”",
						"thai": "“นี่คือจุดจบ. ของการเยียวยาที่บิดเบี้ยวของแก.”",
						"hindi": "“यह अंत है। तुम्हारी विकृत चिकित्सा का।”"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 사라지자, 숲은 잠시 침묵했다.",
						"english": "As the giant shadow vanished, the forest fell silent for a moment.",
						"japanese": "「巨大な影が消え去ると、森はしばし沈黙した。」",
						"chinese": "“随着巨大的黑影消失，森林暂时陷入了沉寂。”",
						"french": "« Alors que l'ombre géante disparaissait, la forêt se tut un instant. »",
						"spanish": "« Al desaparecer la sombra gigante, el bosque quedó en silencio por un momento. »",
						"vietnamese": "“Khi bóng đen khổng lồ biến mất, khu rừng chìm vào im lặng trong chốc lát.”",
						"thai": "“เมื่อเงาขนาดมหึมาหายไป ป่าก็เงียบสงัดชั่วขณะ.”",
						"hindi": "“जैसे ही विशाल छाया गायब हुई, जंगल एक पल के लिए शांत हो गया।”"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "아직… 끝나지 않은 것 같아.",
						"english": "It seems... it's not over yet.",
						"japanese": "「まだ…終わっていないようだ。」",
						"chinese": "“看来…还没有结束。”",
						"french": "« Il semble... que ce ne soit pas encore fini. »",
						"spanish": "« Parece... que aún no ha terminado. »",
						"vietnamese": "“Có vẻ như... vẫn chưa kết thúc.”",
						"thai": "“ดูเหมือนว่า... ยังไม่จบ.”",
						"hindi": "“लगता है... यह अभी खत्म नहीं हुआ है।”"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "숲의 비명은 멈췄지만, 과거의 속삭임은 여전히 남아 있었다.",
						"english": "The forest's screams ceased, but the whispers of the past still lingered.",
						"japanese": "「森の悲鳴は止んだが、過去の囁きはまだ残っていた。」",
						"chinese": "“森林的尖叫停止了，但过去的低语依然存在。”",
						"french": "« Les cris de la forêt cessèrent, mais les murmures du passé persistaient. »",
						"spanish": "« Los gritos del bosque cesaron, pero los susurros del pasado aún persistían. »",
						"vietnamese": "“Tiếng thét của rừng đã ngừng, nhưng những lời thì thầm của quá khứ vẫn còn vương vấn.”",
						"thai": "“เสียงกรีดร้องของป่าหยุดลง แต่เสียงกระซิบจากอดีตยังคงอยู่.”",
						"hindi": "“जंगल की चीखें बंद हो गईं, लेकिन अतीत की फुसफुसाहटें अभी भी बाकी थीं।”"
					}
				}
			]
		}
	]
} as const;
