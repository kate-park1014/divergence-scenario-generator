export const scenario_hell_fallenoath_22_01 = {
	"scenario_id": "hell_fallenoath_22_01",
	"order": 1,
	"act": "intro",
	"theme": "hell",
	"actors": {
		"mara": {
			"id": "mon_94e5bffe-d3cd-4e5e-a174-633174784043",
			"name": {
				"korean": "마라",
				"english": "Mara",
				"japanese": "マーラ",
				"chinese": "玛拉",
				"french": "Mara",
				"spanish": "Mara",
				"vietnamese": "Mara",
				"thai": "มารา",
				"hindi": "मारा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/801457b4-3ecc-41f5-e450-73d6ce8eb200/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/9bfac7d4-6bfd-49b0-5ba4-a25419c71400/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"지옥의 가장 깊은 나락. 영원한 고통이 지배하는 심판의 영역.",
			"우리의 동료는 그곳으로 끌려갔다.",
			"되돌릴 수 없는 심판. 하지만… 우리는 멈출 수 없었다.",
			"이 비극의 끝에서, 우리는 무엇을 마주하게 될까."
		],
		"english": [
			"The deepest abyss of hell. A realm of judgment where eternal suffering reigns.",
			"Our companion was dragged there.",
			"An irreversible judgment. But... we couldn't stop.",
			"At the end of this tragedy, what will we face?"
		],
		"japanese": [
			"地獄の最も深い奈落。永遠の苦痛が支配する審判の領域。",
			"我らの仲間はそこへ引きずり込まれた。",
			"取り返しのつかない審判。しかし…我々は止まれなかった。",
			"この悲劇の果てに、我々は何に直面するのだろうか。"
		],
		"chinese": [
			"地狱最深处的深渊。永恒痛苦主宰的审判领域。",
			"我们的同伴被拖到那里。",
			"一场不可逆转的审判。但是…我们无法停止。",
			"在这场悲剧的结局，我们将面对什么？"
		],
		"french": [
			"Le plus profond abîme de l'enfer. Un royaume de jugement où règne la souffrance éternelle.",
			"Notre compagnon y fut traîné.",
			"Un jugement irréversible. Mais… nous ne pouvions pas nous arrêter.",
			"Au terme de cette tragédie, qu'affronterons-nous ?"
		],
		"spanish": [
			"El abismo más profundo del infierno. Un reino de juicio donde reina el sufrimiento eterno.",
			"Nuestro compañero fue arrastrado allí.",
			"Un juicio irreversible. Pero… no pudimos detenernos.",
			"Al final de esta tragedia, ¿qué enfrentaremos?"
		],
		"vietnamese": [
			"Vực sâu nhất của địa ngục. Một vương quốc phán xét nơi sự đau khổ vĩnh cửu ngự trị.",
			"Đồng đội của chúng ta đã bị kéo đến đó.",
			"Một phán quyết không thể đảo ngược. Nhưng… chúng ta không thể dừng lại.",
			"Ở cuối bi kịch này, chúng ta sẽ đối mặt với điều gì?"
		],
		"thai": [
			"ห้วงลึกที่สุดของนรกอาเวจี ดินแดนแห่งการพิพากษาที่ความทุกข์ทรมานชั่วนิรันดร์ครอบงำ",
			"สหายของเราถูกลากไปที่นั่น",
			"การพิพากษาที่ไม่อาจย้อนคืนได้ แต่… เราหยุดไม่ได้",
			"เมื่อสิ้นสุดโศกนาฏกรรมนี้ เราจะต้องเผชิญหน้ากับอะไร?"
		],
		"hindi": [
			"नर्क का सबसे गहरा पाताल। न्याय का एक क्षेत्र जहाँ शाश्वत पीड़ा का राज है।",
			"हमारा साथी वहाँ घसीटा गया।",
			"एक अपरिवर्तनीय न्याय। लेकिन… हम रुक नहीं सके।",
			"इस त्रासदी के अंत में, हम किस चीज़ का सामना करेंगे?"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "심판의 영역. 업보의 저울이 모든 것을 가르는 곳이다.",
						"english": "The Realm of Judgment. Where the Scales of Karma divide all.",
						"japanese": "審判の領域。業の秤が全てを分かつ場所だ。",
						"chinese": "审判之域。业报之秤裁决一切之处。",
						"french": "Le Royaume du Jugement. Où les Balances du Karma divisent tout.",
						"spanish": "El Reino del Juicio. Donde las Balanzas del Karma dividen todo.",
						"vietnamese": "Vương quốc Phán xét. Nơi Cân Nghiệp chia cắt mọi thứ.",
						"thai": "ดินแดนแห่งการพิพากษา ที่ซึ่งตาชั่งแห่งกรรมชี้ขาดทุกสิ่ง",
						"hindi": "न्याय का क्षेत्र। जहाँ कर्म का तराजू सब कुछ विभाजित करता है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "여기가… 지옥의 심판이라는 곳인가.",
						"english": "Is this… the judgment of hell?",
						"japanese": "ここが…地獄の審判というところか。",
						"chinese": "这里是…地狱的审判吗？",
						"french": "Est-ce… le jugement de l'enfer ?",
						"spanish": "¿Es esto… el juicio del infierno?",
						"vietnamese": "Đây là… nơi phán xét của địa ngục sao?",
						"thai": "นี่คือ… การพิพากษาแห่งนรกงั้นหรือ?",
						"hindi": "क्या यह… नर्क का न्याय है?"
					}
				},
				{
					"speaker": "mara",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "mara",
					"content": {
						"korean": "제발… 도와주세요.",
						"english": "Please… help me.",
						"japanese": "どうか…助けてください。",
						"chinese": "拜托…请帮帮我。",
						"french": "S'il vous plaît… aidez-moi.",
						"spanish": "Por favor… ayúdenme.",
						"vietnamese": "Làm ơn… hãy giúp tôi.",
						"thai": "โปรด… ช่วยด้วย",
						"hindi": "कृपया… मेरी मदद करें।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "누구지? 당신도… 희생자인가?",
						"english": "Who are you? Are you… a victim too?",
						"japanese": "誰だ？お前も…犠牲者か？",
						"chinese": "是谁？你也是…受害者吗？",
						"french": "Qui êtes-vous ? Vous aussi… une victime ?",
						"spanish": "¿Quién eres? ¿Tú también… eres una víctima?",
						"vietnamese": "Ai đó? Bạn cũng… là một một nạn nhân sao?",
						"thai": "ใครน่ะ? คุณก็… เป็นเหยื่อด้วยงั้นหรือ?",
						"hindi": "कौन हो तुम? क्या तुम भी… एक पीड़ित हो?"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "mara",
					"content": {
						"korean": "제 동료도… 심판에 끌려갔어요. 억울해요!",
						"english": "My companion was also… dragged to judgment. It's unfair!",
						"japanese": "私の仲間も…審判に引きずられました。不公平です！",
						"chinese": "我的同伴也…被拖去审判了。不公平！",
						"french": "Mon compagnon a aussi… été traîné au jugement. C'est injuste !",
						"spanish": "Mi compañero también… fue arrastrado al juicio. ¡Es injusto!",
						"vietnamese": "Đồng đội của tôi cũng… bị kéo đến phán xét. Thật không công bằng!",
						"thai": "สหายของฉันก็… ถูกลากไปพิพากษา มันไม่ยุติธรรม!",
						"hindi": "मेरा साथी भी… न्याय के लिए घसीटा गया। यह अनुचित है!"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "순간, 거대한 저울이 미세하게 흔들리는 환영을 보았다. 착각이었을까.",
						"english": "For a moment, I saw a vision of a colossal scale subtly swaying. Was it an illusion?",
						"japanese": "一瞬、巨大な秤が微かに揺れる幻を見た。錯覚だったのだろうか。",
						"chinese": "一瞬间，我看到巨大的天平微微摇晃的幻象。那是错觉吗？",
						"french": "Un instant, j'ai vu une vision d'une balance colossale oscillant subtilement. Était-ce une illusion ?",
						"spanish": "Por un instante, vi la visión de una balanza colosal balanceándose sutilmente. ¿Fue una ilusión?",
						"vietnamese": "Trong khoảnh khắc, tôi thấy ảo ảnh một chiếc cân khổng lồ khẽ lay động. Đó có phải là ảo giác không?",
						"thai": "ชั่วขณะหนึ่ง ฉันเห็นภาพลวงตาของตาชั่งขนาดยักษ์กำลังแกว่งไกวเล็กน้อย มันเป็นเพียงภาพลวงตาหรือ?",
						"hindi": "एक पल के लिए, मैंने एक विशाल तराजू को धीरे से हिलते हुए देखा। क्या यह एक भ्रम था?"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						2,
						2
					],
					"speaker": "mara",
					"duration_ms": 450,
					"type": "direction",
					"action": "enter"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "mara",
					"content": {
						"korean": "심판관은… 누구의 말도 듣지 않아요.",
						"english": "The Judge... listens to no one.",
						"japanese": "審判官は… 誰の言葉にも耳を傾けない。",
						"chinese": "审判官……不听任何人的话。",
						"french": "Le Juge... n'écoute personne.",
						"spanish": "El Juez... no escucha a nadie.",
						"vietnamese": "Quan tòa... không nghe lời ai cả.",
						"thai": "ผู้พิพากษา... ไม่ฟังใครเลย",
						"hindi": "न्यायाधीश... किसी की नहीं सुनता।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "냉혹하군. 이 모든 것이… 정말 공정한 심판인가?",
						"english": "How merciless. Is all of this... truly a fair judgment?",
						"japanese": "冷酷だ。この全てが… 本当に公正な審判なのか？",
						"chinese": "真无情。这一切……真的是公正的审判吗？",
						"french": "Impardonnable. Tout ceci... est-ce vraiment un jugement équitable ?",
						"spanish": "Qué despiadado. ¿Todo esto... es realmente un juicio justo?",
						"vietnamese": "Thật tàn nhẫn. Tất cả những điều này... thực sự là một phán xét công bằng sao?",
						"thai": "โหดเหี้ยมจริง ๆ ทั้งหมดนี้... เป็นการตัดสินที่ยุติธรรมจริงหรือ?",
						"hindi": "कितना निर्मम। क्या यह सब... वास्तव में एक निष्पक्ष निर्णय है?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "mara",
					"content": {
						"korean": "공정하다고요? 제 동료는… 아무 죄도 없어요!",
						"english": "Fair? My companion... is innocent!",
						"japanese": "公正だと？私の仲間は… 何の罪もない！",
						"chinese": "公正？我的同伴……是无辜的！",
						"french": "Équitable ? Mon compagnon... est innocent !",
						"spanish": "¿Justo? ¡Mi compañero... es inocente!",
						"vietnamese": "Công bằng ư? Đồng đội của tôi... vô tội!",
						"thai": "ยุติธรรมเหรอ? สหายของฉัน... ไม่มีส่วนผิดเลย!",
						"hindi": "निष्पक्ष? मेरा साथी... निर्दोष है!"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 400,
					"speaker": "mara",
					"spot": [
						4,
						2
					]
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "이 심판… 뭔가 이상해.",
						"english": "This judgment... something's off.",
						"japanese": "この審判… 何かおかしい。",
						"chinese": "这场审判……有点奇怪。",
						"french": "Ce jugement... quelque chose cloche.",
						"spanish": "Este juicio... algo anda mal.",
						"vietnamese": "Phán xét này... có gì đó không ổn.",
						"thai": "การตัดสินนี้... มีบางอย่างผิดปกติ",
						"hindi": "यह निर्णय... कुछ तो गड़बड़ है।"
					}
				},
				{
					"speaker": "mara",
					"content": {
						"korean": "맞아요. 뭔가… 뒤틀려 있어요.",
						"english": "Exactly. Something's... twisted.",
						"japanese": "その通り。何かが… 歪んでいる。",
						"chinese": "没错。有些东西……被扭曲了。",
						"french": "Exactement. Quelque chose... est tordu.",
						"spanish": "Exacto. Algo... está retorcido.",
						"vietnamese": "Đúng vậy. Có gì đó... bị bóp méo.",
						"thai": "ใช่แล้ว มีบางอย่าง... บิดเบี้ยวไป",
						"hindi": "बिल्कुल। कुछ... उलझा हुआ है।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_2",
					"content": {
						"korean": "진실을 밝혀야 해.",
						"english": "We must uncover the truth.",
						"japanese": "真実を明らかにしなければ。",
						"chinese": "必须揭示真相。",
						"french": "Nous devons révéler la vérité.",
						"spanish": "Debemos descubrir la verdad.",
						"vietnamese": "Phải phơi bày sự thật.",
						"thai": "เราต้องเปิดเผยความจริง",
						"hindi": "हमें सच उजागर करना होगा।"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "mara",
					"content": {
						"korean": "하지만… 심판의 규칙은 절대적이라고… 모두가 그렇게 믿어요.",
						"english": "But... the rules of judgment are absolute... everyone believes that.",
						"japanese": "だけど… 審判の規則は絶対だと… みんなそう信じている。",
						"chinese": "但是……审判的规则是绝对的……所有人都这么认为。",
						"french": "Mais... les règles du jugement sont absolues... tout le monde le croit.",
						"spanish": "Pero... las reglas del juicio son absolutas... todos lo creen.",
						"vietnamese": "Nhưng... quy tắc của phán xét là tuyệt đối... mọi người đều tin như vậy.",
						"thai": "แต่... กฎของการตัดสินเป็นสิ่งเด็ดขาด... ทุกคนเชื่ออย่างนั้น",
						"hindi": "लेकिन... निर्णय के नियम निरपेक्ष हैं... हर कोई यही मानता है।"
					}
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"speaker": "mara"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "길은 더욱 깊은 나락으로 이어졌다. 돌아올 수 없는 곳으로.",
						"english": "The path led deeper into the abyss. To a point of no return.",
						"japanese": "道はさらに深い奈落へと続いた。戻れない場所へ。",
						"chinese": "道路通向更深的深渊。一个无法回头的地方。",
						"french": "Le chemin menait plus profondément dans l'abîme. Vers un point de non-retour.",
						"spanish": "El camino conducía a un abismo más profundo. A un punto sin retorno.",
						"vietnamese": "Con đường dẫn sâu hơn vào vực thẳm. Đến nơi không thể quay về.",
						"thai": "เส้นทางนำไปสู่ห้วงเหวลึกยิ่งขึ้น สู่จุดที่ไม่อาจหวนกลับ",
						"hindi": "रास्ता और गहरे पाताल में ले गया। एक ऐसी जगह जहाँ से वापसी नहीं।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "여기까지 온 이상… 멈출 수 없어.",
						"english": "Since we've come this far... we can't stop.",
						"japanese": "ここまで来た以上… 止まることはできない。",
						"chinese": "既然已经走到这里……就不能停下。",
						"french": "Puisque nous sommes arrivés si loin... nous ne pouvons pas nous arrêter.",
						"spanish": "Ya que hemos llegado hasta aquí... no podemos detenernos.",
						"vietnamese": "Đã đến đây rồi... không thể dừng lại.",
						"thai": "ในเมื่อมาถึงนี่แล้ว... หยุดไม่ได้หรอก",
						"hindi": "जब हम इतनी दूर आ गए हैं... तो रुक नहीं सकते।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "mara",
					"content": {
						"korean": "조심하세요… 더 깊은 곳에는… 그가 기다리고 있어요.",
						"english": "Be careful... in the deeper parts... he awaits.",
						"japanese": "気をつけて… もっと深い場所には… 彼が待っている。",
						"chinese": "小心……在更深的地方……他在等着。",
						"french": "Faites attention... plus profond... il vous attend.",
						"spanish": "Tengan cuidado... en lo más profundo... él espera.",
						"vietnamese": "Hãy cẩn thận... ở những nơi sâu hơn... hắn đang đợi.",
						"thai": "ระวังด้วย... ในส่วนที่ลึกกว่านั้น... เขากำลังรออยู่",
						"hindi": "सावधान रहें... गहरे हिस्सों में... वह इंतजार कर रहा है।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "그가… 누구지?",
						"english": "Who… is he?",
						"japanese": "彼… 誰だ？",
						"chinese": "他… 是谁？",
						"french": "Qui… est-il ?",
						"spanish": "¿Quién… es él?",
						"vietnamese": "Hắn… là ai?",
						"thai": "เขา… คือใคร?",
						"hindi": "वह… कौन है?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "mara",
					"content": {
						"korean": "{random_boss}… 심판의 집행자.",
						"english": "{random_boss}… The Executor of Judgment.",
						"japanese": "{random_boss}… 審判の執行者。",
						"chinese": "{random_boss}… 审判的执行者。",
						"french": "{random_boss}… L'Exécuteur du Jugement.",
						"spanish": "{random_boss}… El Ejecutor del Juicio.",
						"vietnamese": "{random_boss}… Kẻ thi hành phán quyết.",
						"thai": "{random_boss}… ผู้พิพากษาแห่งการพิพากษา.",
						"hindi": "{random_boss}… न्याय का निष्पादक।"
					}
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "거대한 문이 열리고, 정체 모를 그림자가 모습을 드러냈다.",
						"english": "A colossal gate opened, and an unknown shadow revealed itself.",
						"japanese": "巨大な門が開き、正体不明の影が姿を現した。",
						"chinese": "巨门开启，一个不明身份的黑影现身。",
						"french": "Une porte colossale s'ouvrit, et une ombre inconnue apparut.",
						"spanish": "Una puerta colosal se abrió, y una sombra desconocida se reveló.",
						"vietnamese": "Cánh cổng khổng lồ mở ra, một cái bóng vô danh xuất hiện.",
						"thai": "ประตูบานใหญ่เปิดออก และเงาลึกลับก็ปรากฏตัว.",
						"hindi": "एक विशाल द्वार खुला, और एक अज्ञात छाया प्रकट हुई।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 자들. 감히 심판의 영역을 침범하다니.",
						"english": "Fools. How dare you trespass upon the domain of judgment.",
						"japanese": "愚かな者たち。よくも審判の領域を侵したな。",
						"chinese": "愚蠢的家伙。竟敢入侵审判的领域。",
						"french": "Imbéciles. Comment osez-vous empiéter sur le domaine du jugement.",
						"spanish": "Necios. Cómo osáis invadir el dominio del juicio.",
						"vietnamese": "Lũ ngu xuẩn. Dám cả gan xâm phạm lãnh địa phán quyết.",
						"thai": "พวกโง่เง่า. กล้าดียังไงมาล่วงล้ำอาณาเขตแห่งการพิพากษา.",
						"hindi": "मूर्खों। तुम्हारी हिम्मत कैसे हुई न्याय के क्षेत्र का अतिक्रमण करने की।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "우리 동료를 돌려줘!",
						"english": "Give us back our comrade!",
						"japanese": "仲間を返せ！",
						"chinese": "把我们的同伴还回来！",
						"french": "Rends-nous notre camarade !",
						"spanish": "¡Devuélvenos a nuestro compañero!",
						"vietnamese": "Trả lại đồng đội cho chúng ta!",
						"thai": "คืนเพื่อนของเรามา!",
						"hindi": "हमारे साथी को वापस करो!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "죄인의 운명은 정해졌다. 너희 또한 다르지 않다.",
						"english": "The fate of sinners is sealed. Yours is no different.",
						"japanese": "罪人の運命は定まった。お前たちも例外ではない。",
						"chinese": "罪人的命运已定。你们也一样。",
						"french": "Le destin des pécheurs est scellé. Le vôtre ne sera pas différent.",
						"spanish": "El destino de los pecadores está sellado. El vuestro no es diferente.",
						"vietnamese": "Vận mệnh của kẻ tội đồ đã định. Các ngươi cũng không ngoại lệ.",
						"thai": "ชะตากรรมของคนบาปถูกกำหนดไว้แล้ว. พวกเจ้าก็ไม่ต่างกัน.",
						"hindi": "पापियों का भाग्य निर्धारित है। तुम्हारा भी अलग नहीं है।"
					}
				},
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "mara",
					"spot": [
						2,
						2
					]
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "mara",
					"content": {
						"korean": "{random_boss}! 제발… 다시 한 번만….",
						"english": "{random_boss}! Please… just one more time…",
						"japanese": "{random_boss}！お願い… もう一度だけ…",
						"chinese": "{random_boss}！拜托了… 再一次就好…",
						"french": "{random_boss} ! S'il te plaît… juste une fois de plus…",
						"spanish": "¡{random_boss}! Por favor… solo una vez más…",
						"vietnamese": "{random_boss}! Làm ơn… chỉ một lần nữa thôi…",
						"thai": "{random_boss}! ได้โปรด… อีกแค่ครั้งเดียว…",
						"hindi": "{random_boss}! कृपया… बस एक बार और…"
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "시끄럽다. 네놈의 비명은 이곳에 너무 많아.",
						"english": "Silence. Your screams are too numerous here.",
						"japanese": "静かにしろ。貴様らの悲鳴はここに多すぎる。",
						"chinese": "闭嘴。你们的尖叫在这里太多了。",
						"french": "Silence. Vos cris sont trop nombreux ici.",
						"spanish": "Silencio. Vuestros gritos son demasiado numerosos aquí.",
						"vietnamese": "Im đi. Tiếng la hét của các ngươi ở đây đã quá nhiều rồi.",
						"thai": "เงียบซะ. เสียงกรีดร้องของพวกแกมันมากเกินไปแล้วที่นี่.",
						"hindi": "चुप रहो। तुम्हारी चीखें यहां बहुत ज़्यादा हैं।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "흥정은 없다. 비켜라!",
						"english": "No bargains. Stand aside!",
						"japanese": "交渉の余地はない。退け！",
						"chinese": "没有讨价还价的余地。让开！",
						"french": "Pas de négociations. Écartez-vous !",
						"spanish": "No hay tratos. ¡Apártense!",
						"vietnamese": "Không mặc cả. Tránh ra!",
						"thai": "ไม่มีการต่อรอง. ถอยไป!",
						"hindi": "कोई मोलभाव नहीं। हट जाओ!"
					}
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "크윽… 이럴… 수가…",
						"english": "Ugh… How… could this be…",
						"japanese": "くっ… まさか…",
						"chinese": "呃… 怎么… 会这样…",
						"french": "Ugh… Comment… est-ce possible…",
						"spanish": "Ugh… Cómo… pudo pasar…",
						"vietnamese": "Khụ… Không thể… nào…",
						"thai": "อึก… นี่มัน… เป็นไปได้ยังไง…",
						"hindi": "उफ़… यह… कैसे हो सकता है…"
					}
				},
				{
					"duration_ms": 400,
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"speaker": "mara"
				},
				{
					"speaker": "mara",
					"content": {
						"korean": "그의 눈빛… 잠시나마… 인간의 슬픔이 보였어.",
						"english": "His eyes... for a moment... I saw human sadness.",
						"japanese": "彼の目…一瞬だけ…人間の悲しみが見えた。",
						"chinese": "他的眼神…一瞬间…我看到了人类的悲伤。",
						"french": "Son regard... un instant... j'ai vu une tristesse humaine.",
						"spanish": "Sus ojos... por un momento... vi tristeza humana.",
						"vietnamese": "Ánh mắt hắn... trong chốc lát... tôi đã thấy nỗi buồn của con người.",
						"thai": "แววตาของเขา... ชั่วขณะหนึ่ง... ฉันเห็นความเศร้าของมนุษย์",
						"hindi": "उसकी आँखों में... एक पल के लिए... मैंने इंसानी उदासी देखी।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "슬픔…? 대체 이 심판의 진실은 뭐지?",
						"english": "Sadness...? What is the truth behind this judgment?",
						"japanese": "悲しみ…？一体この審判の真実とは何だ？",
						"chinese": "悲伤…? 这审判的真相到底是什么?",
						"french": "Tristesse...? Quelle est la vérité derrière ce jugement ?",
						"spanish": "¿Tristeza...? ¿Cuál es la verdad de este juicio?",
						"vietnamese": "Nỗi buồn...? Rốt cuộc sự thật của bản án này là gì?",
						"thai": "ความเศร้า...? แท้จริงแล้วความจริงของการพิพากษานี้คืออะไรกันแน่?",
						"hindi": "उदासी...? आखिर इस न्याय का सच क्या है?"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "승리했지만, 의문은 더욱 깊어졌다. 이 지옥의 심판… 그 뒤에 감춰진 거대한 거짓의 그림자가 어른거렸다.",
						"english": "Though victorious, the doubts deepened. The shadow of a great lie, hidden behind this hellish judgment, loomed.",
						"japanese": "勝利したが、疑問はさらに深まった。この地獄の審判…その裏に隠された巨大な偽りの影がちらついた。",
						"chinese": "虽然胜利了，但疑问却更深了。在这地狱般的审判背后，巨大的谎言之影若隐若现。",
						"french": "Bien que victorieux, les doutes s'approfondirent. L'ombre d'un grand mensonge, cachée derrière ce jugement infernal, planait.",
						"spanish": "Aunque victorioso, las dudas se hicieron más profundas. La sombra de una gran mentira, oculta tras este juicio infernal, se cernía.",
						"vietnamese": "Tuy thắng lợi, nhưng nghi vấn càng thêm sâu sắc. Bóng đen của một lời dối trá khổng lồ, ẩn sau bản án địa ngục này, lờ mờ hiện ra.",
						"thai": "แม้จะได้รับชัยชนะ แต่ความสงสัยกลับยิ่งลึกซึ้ง การพิพากษาแห่งขุมนรกนี้... เบื้องหลังมีเงามืดแห่งคำโกหกอันยิ่งใหญ่ซ่อนเร้นอยู่",
						"hindi": "जीत तो गए, पर संदेह और गहरा हो गया। इस नर्क के न्याय के पीछे छिपी एक बड़ी झूठ की छाया मंडरा रही थी।"
					}
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "암흑이 모든 것을 집어삼켰다.",
						"english": "Darkness devoured everything.",
						"japanese": "暗闇が全てを飲み込んだ。",
						"chinese": "黑暗吞噬了一切。",
						"french": "Les ténèbres ont tout englouti.",
						"spanish": "La oscuridad lo devoró todo.",
						"vietnamese": "Bóng tối nuốt chửng mọi thứ.",
						"thai": "ความมืดมิดกลืนกินทุกสิ่ง",
						"hindi": "अंधकार ने सब कुछ निगल लिया।"
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "감히… 나에게 덤비다니. 미련한 것들.",
						"english": "How dare you... defy me. Foolish creatures.",
						"japanese": "よくも…私に挑むとはな。愚かな者たちめ。",
						"chinese": "竟敢…挑战我。愚蠢的东西。",
						"french": "Comment osez-vous... me défier. Créatures insensées.",
						"spanish": "Cómo osas... desafiarme. Criaturas necias.",
						"vietnamese": "Dám... chống đối ta sao. Những kẻ ngu xuẩn.",
						"thai": "กล้าดียังไง... มาท้าทายข้า พวกโง่เขลา",
						"hindi": "हिम्मत कैसे हुई... मुझसे भिड़ने की। मूर्ख प्राणी।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "아직… 끝나지 않았어!",
						"english": "It's not... over yet!",
						"japanese": "まだ…終わってない！",
						"chinese": "还没…结束！",
						"french": "Ce n'est pas... encore fini !",
						"spanish": "¡Todavía no... ha terminado!",
						"vietnamese": "Vẫn chưa... kết thúc đâu!",
						"thai": "ยัง... ไม่จบ!",
						"hindi": "अभी... खत्म नहीं हुआ!"
					}
				},
				{
					"spot": [
						4,
						2
					],
					"speaker": "mara",
					"duration_ms": 400,
					"type": "direction",
					"action": "enter"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "mara",
					"content": {
						"korean": "포기하지 마세요… 동료를 구할 수 있을 거예요!",
						"english": "Don't give up... you can still save your comrades!",
						"japanese": "諦めないで…仲間を救えるはずだ！",
						"chinese": "别放弃…你能救你的同伴的！",
						"french": "N'abandonnez pas... vous pourrez sauver vos camarades !",
						"spanish": "¡No te rindas... podrás salvar a tus compañeros!",
						"vietnamese": "Đừng bỏ cuộc... bạn có thể cứu đồng đội của mình!",
						"thai": "อย่าเพิ่งยอมแพ้... คุณยังช่วยเพื่อนร่วมทีมได้!",
						"hindi": "हार मत मानो... तुम अपने साथियों को बचा पाओगे!"
					}
				}
			]
		}
	]
} as const;
