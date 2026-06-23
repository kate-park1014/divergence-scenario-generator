export const scenario_snowy_gjald_68_01 = {
	"scenario_id": "snowy_gjald_68_01",
	"order": 1,
	"act": "intro",
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
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"얼어붙은 대지, 고대의 약속이 잠들었다.",
			"하지만 약속은 깨졌고, 그 대가는 잔혹했다.",
			"그림자 속에서, 징수자가 깨어난다.",
			"이곳은 비극의 시작, 피의 맹세가 얼어붙은 입구."
		],
		"english": [
			"Frozen land, where an ancient promise sleeps.",
			"But the promise was broken, and the price was cruel.",
			"From the shadows, the Collector awakens.",
			"This is the start of tragedy, the frozen entrance to a blood pact."
		],
		"japanese": [
			"凍てつく大地、古の約束が眠る場所。",
			"しかし約束は破られ、その代償は残酷だった。",
			"影の中から、徴収者が目覚める。",
			"ここは悲劇の始まり、血の誓いが凍てついた入り口。"
		],
		"chinese": [
			"冰封大地，古老诺言沉睡。",
			"然而诺言已破，代价残酷。",
			"阴影之中，征服者觉醒。",
			"此乃悲剧之始，血之誓约冰封的入口。"
		],
		"french": [
			"Terre gelée, où une ancienne promesse sommeille.",
			"Mais la promesse fut brisée, et le prix, cruel.",
			"Des ombres, le Collecteur s'éveille.",
			"C'est le début de la tragédie, l'entrée gelée d'un pacte de sang."
		],
		"spanish": [
			"Tierra helada, donde yace una antigua promesa.",
			"Pero la promesa fue rota, y el precio, cruel.",
			"De las sombras, el Recolector despierta.",
			"Este es el inicio de la tragedia, la entrada helada a un pacto de sangre."
		],
		"vietnamese": [
			"Vùng đất băng giá, nơi lời hứa cổ xưa say ngủ.",
			"Nhưng lời hứa đã bị phá vỡ, và cái giá thật tàn nhẫn.",
			"Từ trong bóng tối, Kẻ Thu Thập thức tỉnh.",
			"Đây là khởi đầu bi kịch, lối vào băng giá của một lời thề máu."
		],
		"thai": [
			"ดินแดนเยือกแข็ง ที่ซึ่งคำมั่นโบราณหลับใหล",
			"แต่คำมั่นถูกทำลาย และราคาที่ต้องจ่ายนั้นโหดร้าย",
			"จากเงามืด ผู้เก็บเกี่ยวตื่นขึ้น",
			"ที่นี่คือจุดเริ่มต้นของโศกนาฏกรรม ทางเข้าที่เยือกแข็งสู่พันธะโลหิต"
		],
		"hindi": [
			"जमी हुई भूमि, जहाँ एक प्राचीन वादा सोता है।",
			"लेकिन वादा टूट गया, और कीमत क्रूर थी।",
			"छाया से, संग्राहक जागता है।",
			"यह त्रासदी की शुरुआत है, रक्त प्रतिज्ञा का जमा हुआ प्रवेश द्वार।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "얼어붙은 협곡의 어귀. 날카로운 바람이 살을 에는 듯했다.",
						"english": "At the mouth of the frozen canyon. A biting wind cut through.",
						"japanese": "凍てつく峡谷の入り口。身を切るような鋭い風が吹いていた。",
						"chinese": "冰封峡谷入口。凛冽寒风如刀割。",
						"french": "À l'entrée du canyon gelé. Un vent mordant transperçait les chairs.",
						"spanish": "En la boca del cañón helado. Un viento cortante laceraba la piel.",
						"vietnamese": "Ở cửa hẻm núi băng giá. Một cơn gió sắc lạnh như cắt da.",
						"thai": "ปากทางเข้าหุบเขาเยือกแข็ง ลมที่พัดมาเหมือนเฉือนเนื้อ",
						"hindi": "जमी हुई घाटी के मुहाने पर। एक तेज़ हवा काट रही थी।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "여기가… 그 얼어붙은 땅인가?",
						"english": "Is this… that frozen land?",
						"japanese": "ここが…あの凍てつく地か？",
						"chinese": "这里是…那片冰封之地吗？",
						"french": "Est-ce… cette terre gelée ?",
						"spanish": "¿Es aquí… esa tierra helada?",
						"vietnamese": "Đây là… vùng đất băng giá đó sao?",
						"thai": "นี่คือ...ดินแดนน้ำแข็งนั่นหรือ?",
						"hindi": "क्या यह… वह जमी हुई भूमि है?"
					}
				},
				{
					"action": "enter",
					"type": "direction",
					"speaker": "finn",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"speaker": "finn",
					"type": "speech",
					"content": {
						"korean": "…왔는가. 어리석은 자들이여.",
						"english": "...You've come. You fools.",
						"japanese": "…来たか。愚か者どもよ。",
						"chinese": "…来了吗。愚蠢的凡人。",
						"french": "...Vous êtes venus. Insensés.",
						"spanish": "...Habéis venido. Necios.",
						"vietnamese": "...Ngươi đã đến rồi sao. Hỡi những kẻ ngu ngốc.",
						"thai": "...มาแล้วรึไง เจ้าพวกโง่เขลา",
						"hindi": "तुम आ गए। मूर्खों।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "finn",
					"type": "speech",
					"content": {
						"korean": "이곳은 깨진 약속의 대가를 치르는 곳.",
						"english": "This is where the price for a broken promise is paid.",
						"japanese": "ここは、破られた約束の代償を払う場所だ。",
						"chinese": "此乃为破碎诺言付出代价之地。",
						"french": "C'est ici que le prix de la promesse brisée est payé.",
						"spanish": "Aquí es donde se paga el precio por una promesa rota.",
						"vietnamese": "Đây là nơi phải trả giá cho lời hứa đã bị phá vỡ.",
						"thai": "ที่นี่คือที่ที่ต้องชดใช้สำหรับคำมั่นที่ถูกทำลาย",
						"hindi": "यह वह जगह है जहाँ टूटे हुए वादे की कीमत चुकाई जाती है।"
					}
				},
				{
					"content": {
						"korean": "무슨 소리야?",
						"english": "What are you talking about?",
						"japanese": "何を言っているんだ？",
						"chinese": "你在说什么？",
						"french": "Que racontez-vous ?",
						"spanish": "¿De qué hablas?",
						"vietnamese": "Ngươi đang nói gì vậy?",
						"thai": "คุณกำลังพูดถึงอะไร?",
						"hindi": "तुम क्या कह रहे हो?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "finn",
					"type": "speech",
					"content": {
						"korean": "곧 알게 될 것이다. 징수자가 너희를 기다리고 있으니.",
						"english": "You will soon know. The Collector awaits you.",
						"japanese": "すぐにわかるだろう。徴収者がお前たちを待っている。",
						"chinese": "你很快就会知道。征服者正在等你们。",
						"french": "Vous le saurez bientôt. Le Collecteur vous attend.",
						"spanish": "Pronto lo sabréis. El Recolector os espera.",
						"vietnamese": "Ngươi sẽ sớm biết thôi. Kẻ Thu Thập đang chờ đợi ngươi.",
						"thai": "ไม่ช้าเจ้าก็จะรู้ ผู้เก็บเกี่ยวรอพวกเจ้าอยู่",
						"hindi": "तुम्हें जल्द ही पता चल जाएगा। संग्राहक तुम्हारा इंतजार कर रहा है।"
					},
					"emotion": "sad"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"speaker": "finn",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "finn",
					"content": {
						"korean": "이 길은 돌아갈 수 없다.",
						"english": "No turning back.",
						"japanese": "この道は引き返せない。",
						"chinese": "此路不可回头。",
						"french": "Ce chemin est irréversible.",
						"spanish": "Este camino es irreversible.",
						"vietnamese": "Con đường này không thể quay lại.",
						"thai": "เส้นทางนี้ไม่อาจย้อนกลับ.",
						"hindi": "यह मार्ग अपरिवर्तनीय है।"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "아직 늦지 않았어.",
						"english": "It's not too late yet.",
						"japanese": "まだ間に合う。",
						"chinese": "为时不晚。",
						"french": "Il n'est pas trop tard.",
						"spanish": "Aún no es tarde.",
						"vietnamese": "Vẫn chưa muộn.",
						"thai": "ยังไม่สายเกินไป.",
						"hindi": "अभी देर नहीं हुई है।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "finn",
					"type": "speech",
					"content": {
						"korean": "한번 발을 들인 자, 약속의 무게에 짓눌릴 것이다.",
						"english": "He who steps in shall be burdened by the weight of the promise.",
						"japanese": "一度足を踏み入れた者、約束の重さに押し潰されるだろう。",
						"chinese": "一旦踏入，必将承受承诺之重。",
						"french": "Ceux qui y mettront les pieds seront écrasés par le poids de la promesse.",
						"spanish": "Aquel que pise aquí será aplastado por el peso de la promesa.",
						"vietnamese": "Kẻ nào đã đặt chân vào, sẽ bị đè bẹp bởi gánh nặng lời hứa.",
						"thai": "ผู้ใดก้าวเข้ามา ผู้นั้นจะถูกบดขยี้ด้วยน้ำหนักของคำมั่นสัญญา.",
						"hindi": "जो इसमें कदम रखेगा, वह वादे के बोझ से कुचल जाएगा।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "(폐허를 둘러보며) 저게 뭐지?",
						"english": "(Looking around the ruins) What's that?",
						"japanese": "(廃墟を見回して)あれは何だ？",
						"chinese": "(环顾废墟)那是什么？",
						"french": "(Regardant autour des ruines) Qu'est-ce que c'est ?",
						"spanish": "(Mirando alrededor de las ruinas) ¿Qué es eso?",
						"vietnamese": "(Nhìn quanh phế tích) Cái gì vậy?",
						"thai": "(มองไปรอบๆ ซากปรักหักพัง) นั่นอะไรน่ะ?",
						"hindi": "(खंडहरों के चारों ओर देखते हुए) वह क्या है?"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "낡은 석판 조각… 문양이 희미하게 새겨져 있어.",
						"english": "An old slate fragment... with faint carvings.",
						"japanese": "古い石板の破片… かすかに模様が刻まれている。",
						"chinese": "一块古老的石板碎片… 图案依稀可辨。",
						"french": "Un vieux fragment d'ardoise... avec des motifs faiblement gravés.",
						"spanish": "Un fragmento de losa antigua... con grabados tenues.",
						"vietnamese": "Một mảnh phiến đá cũ… với những hoa văn khắc mờ nhạt.",
						"thai": "เศษแผ่นหินเก่า… มีลวดลายสลักเลือนลาง.",
						"hindi": "एक पुराना शिलाखंड... जिस पर धुंधले निशान खुदे हैं।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그것이 바로 맹세의 흔적. 깨진 약속의 증거이지.",
						"english": "That is the trace of the vow. Proof of a broken promise.",
						"japanese": "それがまさに誓いの痕跡。破られた約束の証だ。",
						"chinese": "那就是誓言的痕迹。破碎诺言的证据。",
						"french": "C'est la trace du serment. La preuve d'une promesse brisée.",
						"spanish": "Esa es la huella del juramento. La prueba de una promesa rota.",
						"vietnamese": "Đó chính là dấu vết của lời thề. Bằng chứng của một lời hứa bị phá vỡ.",
						"thai": "นั่นคือร่องรอยของคำสาบาน. หลักฐานของคำสัญญาที่แตกสลาย.",
						"hindi": "वह शपथ का निशान है। एक टूटे हुए वादे का सबूत।"
					},
					"speaker": "finn",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "finn",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "finn",
					"content": {
						"korean": "이 싸늘한 바람 속에서… 들려오는가?",
						"english": "In this chilling wind... do you hear it?",
						"japanese": "この冷たい風の中で… 聞こえるか？",
						"chinese": "在这寒风中… 你听到了吗？",
						"french": "Dans ce vent glacial... l'entends-tu ?",
						"spanish": "En este viento helado... ¿lo oyes?",
						"vietnamese": "Trong làn gió lạnh lẽo này… ngươi có nghe thấy không?",
						"thai": "ในลมหนาวเย็นนี้… ได้ยินไหม?",
						"hindi": "इस सर्द हवा में... क्या तुम्हें सुनाई दे रहा है?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "무슨 소리?",
						"english": "What sound?",
						"japanese": "何の音だ？",
						"chinese": "什么声音？",
						"french": "Quel son ?",
						"spanish": "¿Qué sonido?",
						"vietnamese": "Tiếng gì?",
						"thai": "เสียงอะไร?",
						"hindi": "कैसी आवाज?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "finn",
					"content": {
						"korean": "과거의 비명소리. 억울하게 죽은 자들의 혼령이 아직 이곳을 떠돌고 있다.",
						"english": "Screams of the past. The spirits of the unjustly dead still wander here.",
						"japanese": "過去の悲鳴。無念の死を遂げた者たちの魂が、まだここを彷徨っている。",
						"chinese": "过去的尖叫声。那些冤死者的灵魂仍在此徘徊。",
						"french": "Les cris du passé. Les esprits des morts injustement errent encore ici.",
						"spanish": "Los gritos del pasado. Los espíritus de los muertos injustamente todavía vagan por aquí.",
						"vietnamese": "Tiếng thét của quá khứ. Linh hồn của những người chết oan vẫn còn lang thang nơi đây.",
						"thai": "เสียงกรีดร้องจากอดีต. ดวงวิญญาณของผู้ที่ตายอย่างไม่เป็นธรรมยังคงวนเวียนอยู่ที่นี่.",
						"hindi": "अतीत की चीखें। अन्यायपूर्ण तरीके से मारे गए लोगों की आत्माएं अभी भी यहीं भटक रही हैं।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…환영인가?",
						"english": "...A phantom?",
						"japanese": "…幻影か？",
						"chinese": "…幻觉吗？",
						"french": "...Une illusion ?",
						"spanish": "¿...Una ilusión?",
						"vietnamese": "…Ảo ảnh sao?",
						"thai": "...ภาพหลอนหรือ?",
						"hindi": "...एक भ्रम है क्या?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "finn",
					"type": "speech",
					"content": {
						"korean": "그들은 깨진 약속의 희생양. 징수자는 그들의 원한으로 움직인다.",
						"english": "They are victims of broken promises. The Collector is fueled by their grudges.",
						"japanese": "彼らは破られた約束の犠牲者。徴収者は彼らの恨みによって動く。",
						"chinese": "他们是破碎诺言的牺牲品。征收者因他们的怨恨而行动。",
						"french": "Ils sont les victimes de promesses brisées. Le Collecteur est alimenté par leurs rancœurs.",
						"spanish": "Son víctimas de promesas rotas. El Recaudador se mueve por su rencor.",
						"vietnamese": "Họ là nạn nhân của những lời hứa tan vỡ. Kẻ Thu Thập bị thúc đẩy bởi oán hận của họ.",
						"thai": "พวกเขาคือเหยื่อของคำสัญญาที่แตกสลาย ผู้เก็บเกี่ยวเคลื่อนไหวด้วยความแค้นของพวกเขา",
						"hindi": "वे टूटे वादों के शिकार हैं। संग्राहक उनकी शिकायतों से संचालित होता है।"
					},
					"emotion": "angry"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "finn"
				},
				{
					"emotion": "base",
					"speaker": "finn",
					"type": "speech",
					"content": {
						"korean": "더 이상 되돌릴 수 없다.",
						"english": "No turning back now.",
						"japanese": "もう後戻りはできない。",
						"chinese": "无法回头了。",
						"french": "Plus de retour en arrière possible.",
						"spanish": "No hay vuelta atrás.",
						"vietnamese": "Không thể quay lại nữa.",
						"thai": "ไม่มีทางย้อนกลับแล้ว",
						"hindi": "अब पीछे नहीं हट सकते।"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "멈출 생각 없어.",
						"english": "I won't stop.",
						"japanese": "止まる気はない。",
						"chinese": "我不会停下。",
						"french": "Je ne compte pas m'arrêter.",
						"spanish": "No pienso parar.",
						"vietnamese": "Không có ý định dừng lại.",
						"thai": "ไม่คิดจะหยุด",
						"hindi": "रुकने का इरादा नहीं है।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "finn",
					"content": {
						"korean": "너희도 징수자의 먹이가 될 뿐.",
						"english": "You'll just be another meal for the Collector.",
						"japanese": "お前たちも徴収者の餌になるだけだ。",
						"chinese": "你们也只会成为征收者的食物。",
						"french": "Vous ne serez qu'une proie de plus pour le Collecteur.",
						"spanish": "Vosotros también seréis solo la presa del Recaudador.",
						"vietnamese": "Các ngươi cũng chỉ là con mồi của Kẻ Thu Thập mà thôi.",
						"thai": "พวกเจ้าก็เป็นแค่เหยื่อของผู้เก็บเกี่ยวเท่านั้น",
						"hindi": "तुम भी संग्राहक का भोजन बनोगे।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "징수자… 그는 누구지?",
						"english": "The Collector... who is he?",
						"japanese": "徴収者…彼は誰だ？",
						"chinese": "征收者…他是谁？",
						"french": "Le Collecteur... qui est-il ?",
						"spanish": "El Recaudador... ¿quién es?",
						"vietnamese": "Kẻ Thu Thập... hắn là ai?",
						"thai": "ผู้เก็บเกี่ยว...เขาคือใคร?",
						"hindi": "संग्राहक... वह कौन है?"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "그는 약속의 파수꾼. 그리고… 이 비극의 한 조각.",
						"english": "He is the keeper of promises. And... a piece of this tragedy.",
						"japanese": "彼は約束の番人。そして…この悲劇の一片だ。",
						"chinese": "他是诺言的守护者。以及…这场悲剧的一部分。",
						"french": "Il est le gardien des promesses. Et... un fragment de cette tragédie.",
						"spanish": "Es el guardián de las promesas. Y... un fragmento de esta tragedia.",
						"vietnamese": "Hắn là người canh giữ lời hứa. Và... một mảnh của bi kịch này.",
						"thai": "เขาคือผู้พิทักษ์คำสัญญา และ...ชิ้นส่วนหนึ่งของโศกนาฏกรรมนี้",
						"hindi": "वह वादों का रखवाला है। और... इस त्रासदी का एक टुकड़ा।"
					},
					"type": "speech",
					"speaker": "finn"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…비극?",
						"english": "...Tragedy?",
						"japanese": "…悲劇？",
						"chinese": "…悲剧？",
						"french": "...Tragédie ?",
						"spanish": "...¿Tragedia?",
						"vietnamese": "...Bi kịch ư?",
						"thai": "...โศกนาฏกรรม?",
						"hindi": "...त्रासदी?"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "…결국, 대가는… 치러지는군.",
						"english": "...So, the price... is finally paid.",
						"japanese": "…結局、代価は…支払われるのだな。",
						"chinese": "……终究，代价……还是偿付了啊。",
						"french": "...Finalement, le prix... est payé.",
						"spanish": "...Al final, el precio... es pagado.",
						"vietnamese": "...Cuối cùng, cái giá... cũng đã được trả.",
						"thai": "…ในที่สุด ค่าตอบแทนก็… ต้องชดใช้สินะ",
						"hindi": "...आखिरकार, कीमत... चुकानी ही पड़ी।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "…무슨 말을 하는 거지?",
						"english": "...What are you talking about?",
						"japanese": "…何を言っているんだ？",
						"chinese": "……你在说什么？",
						"french": "...De quoi parles-tu ?",
						"spanish": "...¿De qué estás hablando?",
						"vietnamese": "...Ngươi đang nói gì vậy?",
						"thai": "…ท่านพูดอะไรน่ะ?",
						"hindi": "...तुम क्या कह रहे हो?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 흩어졌다. 하지만 비극은 끝나지 않았다.",
						"english": "A colossal shadow dispersed. But the tragedy was not over.",
						"japanese": "巨大な影は霧散した。しかし、悲劇は終わっていなかった。",
						"chinese": "巨大的阴影消散了。但悲剧并未结束。",
						"french": "Une ombre colossale se dispersa. Mais la tragédie n'était pas terminée.",
						"spanish": "Una sombra colosal se dispersó. Pero la tragedia no había terminado.",
						"vietnamese": "Một bóng đen khổng lồ tan biến. Nhưng bi kịch vẫn chưa kết thúc.",
						"thai": "เงามหึมาจางหายไป ทว่าโศกนาฏกรรมยังไม่สิ้นสุดลง",
						"hindi": "एक विशाल छाया बिखर गई। लेकिन त्रासदी खत्म नहीं हुई थी।"
					},
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "얼어붙은 땅은, 다음 희생자를 기다리고 있었다.",
						"english": "The frozen land awaited its next victim.",
						"japanese": "凍てついた地は、次の犠牲者を待ち続けていた。",
						"chinese": "冰封的大地，等待着下一个牺牲者。",
						"french": "La terre gelée attendait sa prochaine victime.",
						"spanish": "La tierra helada esperaba a su próxima víctima.",
						"vietnamese": "Mảnh đất băng giá đang chờ đợi nạn nhân tiếp theo.",
						"thai": "ผืนดินอันเยือกแข็ง กำลังรอคอยเหยื่อรายต่อไป",
						"hindi": "जमी हुई भूमि अपने अगले शिकार का इंतजार कर रही थी।"
					},
					"emotion": "base"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "어리석은 자들. 대가는 치러져야 한다.",
						"english": "Fools. The price must be paid.",
						"japanese": "愚か者ども。代価は支払われねばならぬ。",
						"chinese": "愚蠢的家伙们。代价必须偿付。",
						"french": "Imbéciles. Le prix doit être payé.",
						"spanish": "Necios. El precio debe ser pagado.",
						"vietnamese": "Những kẻ ngu ngốc. Cái giá phải được trả.",
						"thai": "พวกโง่เขลา ค่าตอบแทนต้องถูกชดใช้",
						"hindi": "मूर्खों। कीमत चुकानी ही होगी।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…아직 끝나지 않았어!",
						"english": "...It's not over yet!",
						"japanese": "…まだ終わっていない！",
						"chinese": "……还没结束！",
						"french": "...Ce n'est pas encore fini !",
						"spanish": "¡...Todavía no ha terminado!",
						"vietnamese": "...Vẫn chưa kết thúc!",
						"thai": "…ยังไม่จบแค่นี้!",
						"hindi": "...अभी खत्म नहीं हुआ है!"
					}
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "피의 맹세는… 영원히 너희를 옭아맬 것이다.",
						"english": "The blood oath... will bind you forever.",
						"japanese": "血の誓いは…永遠にお前たちを縛りつけるだろう。",
						"chinese": "血之誓约……将永远束缚你们。",
						"french": "Le serment de sang... vous liera à jamais.",
						"spanish": "El juramento de sangre... os atará para siempre.",
						"vietnamese": "Lời thề máu... sẽ trói buộc các ngươi mãi mãi.",
						"thai": "คำสาบานโลหิต… จะผูกมัดพวกเจ้าไปตลอดกาล",
						"hindi": "रक्त-शपथ... तुम्हें हमेशा के लिए बांध देगा।"
					},
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 얼음 동굴. 그 안에서 어둠이 꿈틀거렸다.",
						"english": "A colossal ice cave. Darkness stirred within.",
						"japanese": "巨大な氷の洞窟。その中で闇が蠢いていた。",
						"chinese": "一个巨大的冰洞。黑暗在其内部蠕动着。",
						"french": "Une grotte de glace colossale. L'obscurité s'y agitait.",
						"spanish": "Una cueva de hielo colosal. La oscuridad se agitaba en su interior.",
						"vietnamese": "Một hang động băng khổng lồ. Bóng tối cuộn trào bên trong.",
						"thai": "ถ้ำน้ำแข็งขนาดมหึมา ความมืดกำลังคุกรุ่นอยู่ภายใน",
						"hindi": "एक विशाल बर्फीली गुफा। उसके भीतर अंधेरा हिल रहा था।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…왔는가. 맹세를 어긴 자의 후손들이여.",
						"english": "...You have come. Descendants of those who broke their vows.",
						"japanese": "…来たか。誓いを破りし者の子孫たちよ。",
						"chinese": "…你们来了。背弃誓言者的后裔们。",
						"french": "...Vous êtes venus. Descendants de ceux qui ont brisé leurs vœux.",
						"spanish": "...Habéis llegado. Descendientes de quienes rompieron sus juramentos.",
						"vietnamese": "...Đã đến rồi sao. Hậu duệ của những kẻ bội thề.",
						"thai": "...มาแล้วหรือ ทายาทของผู้ที่ละเมิดคำสาบานเอ๋ย",
						"hindi": "...तुम आ गए। उन लोगों के वंशज जिन्होंने अपनी प्रतिज्ञा तोड़ी।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "네가… 징수자인가?",
						"english": "Are you... the Collector?",
						"japanese": "お前が…徴収者か？",
						"chinese": "你就是…征收者？",
						"french": "Es-tu... le Collecteur ?",
						"spanish": "¿Eres tú... el Recaudador?",
						"vietnamese": "Ngươi chính là... Kẻ Thu Thập?",
						"thai": "เจ้าคือ...ผู้เก็บเกี่ยวหรือ?",
						"hindi": "क्या तुम... संग्राहक हो?"
					}
				},
				{
					"content": {
						"korean": "나는 약속의 대가. 피로 얼룩진 맹세의 집행자다.",
						"english": "I am the Price of Promises. The Executor of Blood-Stained Oaths.",
						"japanese": "私は約束の代価。血塗られた誓いの執行者だ。",
						"chinese": "我是约定的代价。染血誓约的执行者。",
						"french": "Je suis le Prix des Promesses. L'Exécuteur des Serments tachés de sang.",
						"spanish": "Soy el Precio de las Promesas. El Ejecutor de Juramentos teñidos de sangre.",
						"vietnamese": "Ta là Cái Giá của Lời Hứa. Kẻ Thi Hành Lời Thề nhuốm máu.",
						"thai": "ข้าคือค่าตอบแทนแห่งคำสัญญา ผู้ลงทัณฑ์คำสาบานเปื้อนเลือด",
						"hindi": "मैं वादों का मूल्य हूँ। रक्त-रंजित शपथों का निष्पादक।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "비켜!",
						"english": "Out of my way!",
						"japanese": "退け！",
						"chinese": "让开！",
						"french": "Poussez-vous !",
						"spanish": "¡Quítate!",
						"vietnamese": "Tránh ra!",
						"thai": "หลีกไป!",
						"hindi": "हट जाओ!"
					}
				},
				{
					"content": {
						"korean": "불가능하다. 여기서 너희의 약속은 끝날 것이니.",
						"english": "Impossible. Your promises end here.",
						"japanese": "不可能だ。お前たちの約束はここで終わる。",
						"chinese": "不可能。你们的约定将在此终结。",
						"french": "Impossible. Vos promesses s'achèveront ici.",
						"spanish": "Imposible. Vuestras promesas terminarán aquí.",
						"vietnamese": "Bất khả thi. Lời hứa của các ngươi sẽ kết thúc tại đây.",
						"thai": "เป็นไปไม่ได้ คำสัญญาของพวกเจ้าจะสิ้นสุดลงที่นี่",
						"hindi": "असंभव। तुम्हारे वादे यहीं समाप्त होंगे।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				}
			]
		}
	]
} as const;
