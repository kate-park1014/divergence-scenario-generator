export const scenario_modern_cipherpact_31_01 = {
	"scenario_id": "modern_cipherpact_31_01",
	"order": 1,
	"act": "intro",
	"theme": "modern",
	"actors": {
		"zoe": {
			"id": "mon_ad3762e0-13f3-44a1-9b84-4ff67136858e",
			"name": {
				"korean": "조이",
				"english": "Zoe",
				"japanese": "ゾーイ",
				"chinese": "佐伊",
				"french": "Zoé",
				"spanish": "Zoe",
				"vietnamese": "Zoe",
				"thai": "โซอี้",
				"hindi": "ज़ोई"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/75dcfb0c-33e3-4208-4205-fb09d4abb100/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a7d0ebe1-73dc-4683-1338-32be2f7fac00/public"
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
					"type": "speech",
					"content": {
						"korean": "도시의 뒷골목은 어두웠다. 소문만이 유일한 길잡이였다.",
						"english": "The city's back alleys were dark. Rumors were the only guide.",
						"japanese": "都市の裏路地は暗かった。噂だけが唯一の道しるべだった。",
						"chinese": "城市的后巷一片漆黑。谣言是唯一的指引。",
						"french": "Les ruelles de la ville étaient sombres. Les rumeurs étaient le seul guide.",
						"spanish": "Los callejones de la ciudad eran oscuros. Los rumores eran la única guía.",
						"vietnamese": "Các con hẻm phía sau thành phố tối tăm. Tin đồn là kim chỉ nam duy nhất.",
						"thai": "ตรอกซอกซอยในเมืองมืดมิด มีเพียงข่าวลือที่เป็นสิ่งนำทาง",
						"hindi": "शहर की गलियाँ अँधेरी थीं। अफवाहें ही एकमात्र मार्गदर्शक थीं।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "Cipher Pact… 대체 어디에 있는 거야?",
						"english": "Cipher Pact… Where on earth is it?",
						"japanese": "Cipher Pact… 一体どこにあるんだ？",
						"chinese": "Cipher Pact… 到底在哪里？",
						"french": "Cipher Pact… Où diable est-ce ?",
						"spanish": "Cipher Pact… ¿Dónde diablos está?",
						"vietnamese": "Cipher Pact… Rốt cuộc nó ở đâu?",
						"thai": "Cipher Pact… มันอยู่ที่ไหนกันแน่?",
						"hindi": "सिफर पैक्ट... आखिर ये कहाँ है?"
					}
				},
				{
					"type": "direction",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "zoe"
				},
				{
					"content": {
						"korean": "…길을 잃었나, 젊은이들.",
						"english": "...Lost your way, young ones?",
						"japanese": "…道に迷ったかね、若者たちよ。",
						"chinese": "……迷路了吗，年轻人？",
						"french": "...Vous êtes perdus, jeunes gens ?",
						"spanish": "...¿Perdidos, jóvenes?",
						"vietnamese": "...Lạc đường rồi sao, các bạn trẻ.",
						"thai": "…หลงทางหรือหนุ่มสาว",
						"hindi": "...रास्ता भटक गए हो क्या, बच्चों।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "zoe"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "당신은…?",
						"english": "You are...?",
						"japanese": "あなたは…？",
						"chinese": "您是……？",
						"french": "Vous êtes...?",
						"spanish": "¿Usted es...?",
						"vietnamese": "Ông là…?",
						"thai": "คุณคือ…?",
						"hindi": "आप कौन हैं...?"
					}
				},
				{
					"speaker": "zoe",
					"content": {
						"korean": "조이…라 불리더군. 나는… 그저 기억할 뿐.",
						"english": "They call me Zoy... I merely remember.",
						"japanese": "ゾイ…と呼ばれている。私は…ただ覚えているだけだ。",
						"chinese": "他们叫我佐伊……我只是……记忆着。",
						"french": "On m'appelle Zoy... Je me contente de me souvenir.",
						"spanish": "Me llaman Zoy... Yo solo recuerdo.",
						"vietnamese": "Người ta gọi tôi là Zoy… Tôi chỉ… nhớ thôi.",
						"thai": "พวกเขาเรียกฉันว่าซอย… ฉัน… แค่จดจำ",
						"hindi": "वे मुझे ज़ॉय कहते हैं... मैं बस याद करता हूँ।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "고대 계약의 파편… 그게 시작이야.",
						"english": "Fragments of an ancient pact… that's where it begins.",
						"japanese": "古の契約の破片…それが始まりだ。",
						"chinese": "古老契约的碎片……那就是开始。",
						"french": "Fragments d'un ancien pacte… c'est là que ça commence.",
						"spanish": "Fragmentos de un antiguo pacto… ahí es donde comienza.",
						"vietnamese": "Những mảnh vỡ của một lời thề cổ xưa… đó là khởi đầu.",
						"thai": "เศษเสี้ยวของพันธสัญญาโบราณ… นั่นคือจุดเริ่มต้น",
						"hindi": "एक प्राचीन प्रतिज्ञा के टुकड़े... वहीं से यह शुरू होता है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "zoe"
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
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"speaker": "zoe"
				},
				{
					"content": {
						"korean": "거울 속 뱀이… 끝없이 꼬리를 물지.",
						"english": "The serpent in the mirror... endlessly bites its own tail.",
						"japanese": "鏡の中の蛇が… 終わりなく己の尾を噛む。",
						"chinese": "镜中的蛇… 无尽地吞噬自己的尾巴。",
						"french": "Le serpent dans le miroir... se mord sans fin la queue.",
						"spanish": "La serpiente en el espejo... se muerde la cola sin cesar.",
						"vietnamese": "Con rắn trong gương... cắn đuôi mình không ngừng.",
						"thai": "งูในกระจก... กัดหางตัวเองไม่รู้จบ",
						"hindi": "दर्पण में सांप... अंतहीन अपनी पूंछ को काटता है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "zoe"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리예요?",
						"english": "What do you mean?",
						"japanese": "どういうことですか？",
						"chinese": "什么意思？",
						"french": "Qu'est-ce que vous voulez dire ?",
						"spanish": "¿Qué quiere decir?",
						"vietnamese": "Bạn nói gì vậy?",
						"thai": "คุณหมายความว่าอะไร?",
						"hindi": "आपका क्या मतलब है?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "zoe",
					"content": {
						"korean": "모든 것은… 반복되는 거야. 너희도, 나도, 이 도시도.",
						"english": "Everything... repeats itself. You, me, this city too.",
						"japanese": "全ては… 繰り返される。君たちも、私も、この街も。",
						"chinese": "一切… 都在重复。你们，我，还有这座城市。",
						"french": "Tout... se répète. Vous, moi, et cette ville aussi.",
						"spanish": "Todo... se repite. Vosotros, yo, esta ciudad también.",
						"vietnamese": "Mọi thứ... đều lặp lại. Cả các người, cả tôi, cả thành phố này.",
						"thai": "ทุกสิ่ง... ย่อมซ้ำรอยเดิม. พวกเธอ, ฉัน, และเมืองนี้ด้วย.",
						"hindi": "सब कुछ... दोहराया जाता है। तुम भी, मैं भी, यह शहर भी।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "섬뜩한데…",
						"english": "That's unsettling...",
						"japanese": "不気味ですね…",
						"chinese": "真让人毛骨悚然…",
						"french": "C'est effrayant...",
						"spanish": "Qué escalofriante...",
						"vietnamese": "Thật đáng sợ...",
						"thai": "น่าขนลุกนะ...",
						"hindi": "यह डरावना है..."
					},
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "zoe"
				},
				{
					"speaker": "zoe",
					"content": {
						"korean": "예전에도… 이런 일이 있었지. 똑같은 질문, 똑같은 표정들….",
						"english": "This happened before... The same questions, the same expressions...",
						"japanese": "昔も… こんなことがあった。同じ質問、同じ表情…。",
						"chinese": "以前也… 发生过这种事。同样的问题，同样的表情…。",
						"french": "Cela est déjà arrivé... Les mêmes questions, les mêmes expressions...",
						"spanish": "Esto ya pasó antes... Las mismas preguntas, las mismas expresiones...",
						"vietnamese": "Chuyện này... đã từng xảy ra rồi. Cùng những câu hỏi, cùng những biểu cảm đó...",
						"thai": "เคยเกิดเรื่องแบบนี้มาก่อน... คำถามเดิมๆ, สีหน้าเดิมๆ...",
						"hindi": "पहले भी... ऐसा हुआ था। वही सवाल, वही भाव..."
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "과거에 무슨 일이 있었던 거죠?",
						"english": "What happened in the past?",
						"japanese": "過去に何があったのですか？",
						"chinese": "过去发生了什么？",
						"french": "Que s'est-il passé dans le passé ?",
						"spanish": "¿Qué ocurrió en el pasado?",
						"vietnamese": "Chuyện gì đã xảy ra trong quá khứ vậy?",
						"thai": "เกิดอะไรขึ้นในอดีต?",
						"hindi": "अतीत में क्या हुआ था?"
					}
				},
				{
					"content": {
						"korean": "아무도 알지 못해. 혹은… 알고 싶어 하지 않거나.",
						"english": "No one knows. Or... no one wants to know.",
						"japanese": "誰も知らない。あるいは… 知ろうとしない。",
						"chinese": "没人知道。或者… 没人想知道。",
						"french": "Personne ne sait. Ou... personne ne veut savoir.",
						"spanish": "Nadie lo sabe. O... nadie quiere saberlo.",
						"vietnamese": "Không ai biết. Hoặc... không ai muốn biết.",
						"thai": "ไม่มีใครรู้. หรือ... ไม่มีใครอยากรู้.",
						"hindi": "कोई नहीं जानता। या... कोई जानना नहीं चाहता।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "zoe"
				},
				{
					"speaker": "zoe",
					"content": {
						"korean": "하지만… 잊혀진다고 사라지는 건 아니지.",
						"english": "But... just because it's forgotten doesn't mean it's gone.",
						"japanese": "しかし… 忘れ去られても消えるわけではない。",
						"chinese": "但是… 遗忘并不代表消失。",
						"french": "Mais... ce n'est pas parce que c'est oublié que ça disparaît.",
						"spanish": "Pero... que se olvide no significa que desaparezca.",
						"vietnamese": "Nhưng... không phải cứ bị lãng quên là sẽ biến mất.",
						"thai": "แต่... การถูกลืมไม่ได้หมายความว่าจะหายไป.",
						"hindi": "लेकिन... भूल जाने से कुछ ख़त्म नहीं होता।"
					},
					"emotion": "sad",
					"type": "speech"
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
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "zoe"
				},
				{
					"content": {
						"korean": "여기부턴… 돌아올 수 없어.",
						"english": "From here... there's no turning back.",
						"japanese": "ここからは… もう戻れない。",
						"chinese": "从这里… 就回不去了。",
						"french": "D'ici... il n'y a pas de retour.",
						"spanish": "Desde aquí... no hay vuelta atrás.",
						"vietnamese": "Từ đây... sẽ không thể quay lại.",
						"thai": "จากตรงนี้... ไม่มีทางหวนคืน.",
						"hindi": "यहाँ से... वापसी नहीं है।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "zoe"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이미 알고 있어요.",
						"english": "I already know.",
						"japanese": "もう知っています。",
						"chinese": "我已经知道了。",
						"french": "Je le sais déjà.",
						"spanish": "Ya lo sé.",
						"vietnamese": "Tôi đã biết rồi.",
						"thai": "ฉันรู้แล้ว.",
						"hindi": "मुझे पहले से ही पता है।"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "강한 자가… 모든 걸 부수려 했지. 하지만… 그도 결국 반복됐어.",
						"english": "The strong one... tried to break everything. But... he too just repeated it.",
						"japanese": "強き者が…全てを壊そうとした。しかし…彼もまた繰り返すだけだった。",
						"chinese": "强者…曾想摧毁一切。但是…他最终也只是重复了一切。",
						"french": "Le puissant... a essayé de tout briser. Mais... il a lui aussi fini par répéter la même chose.",
						"spanish": "El fuerte... intentó romperlo todo. Pero... él también acabó repitiéndolo.",
						"vietnamese": "Kẻ mạnh... đã cố phá hủy mọi thứ. Nhưng... cuối cùng hắn ta cũng chỉ lặp lại.",
						"thai": "ผู้แข็งแกร่ง... พยายามทำลายทุกสิ่ง แต่... เขาก็แค่ทำซ้ำ",
						"hindi": "बलवान ने... सब कुछ तोड़ने की कोशिश की। लेकिन... वह भी अंततः दोहराया गया।"
					},
					"speaker": "zoe"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "우린 달라.",
						"english": "We are different.",
						"japanese": "我々は違う。",
						"chinese": "我们不同。",
						"french": "Nous sommes différents.",
						"spanish": "Somos diferentes.",
						"vietnamese": "Chúng ta khác biệt.",
						"thai": "เราต่างกัน",
						"hindi": "हम अलग हैं।"
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
						"korean": "어두운 심연에서 거대한 그림자가 나타났다.",
						"english": "A colossal shadow emerged from the dark abyss.",
						"japanese": "暗き深淵より巨大な影が現れた。",
						"chinese": "巨大的黑影从黑暗的深渊中出现。",
						"french": "Une ombre colossale émergea des abysses sombres.",
						"spanish": "Una sombra colosal emergió del abismo oscuro.",
						"vietnamese": "Một cái bóng khổng lồ xuất hiện từ vực thẳm đen tối.",
						"thai": "เงาขนาดมหึมาปรากฏขึ้นจากขุมนรกอันมืดมิด",
						"hindi": "गहरे रसातल से एक विशाल छाया उभरी।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…또 새로운 도전자인가. 어리석은 인간들.",
						"english": "...Another new challenger? Foolish humans.",
						"japanese": "…また新たな挑戦者か。愚かな人間たちめ。",
						"chinese": "……又是一个新的挑战者吗？愚蠢的人类。",
						"french": "...Encore un nouveau challenger ? Humains stupides.",
						"spanish": "...¿Otro nuevo retador? Humanos tontos.",
						"vietnamese": "...Lại một kẻ thách thức mới à? Loài người ngu ngốc.",
						"thai": "...นักท้าทายคนใหม่อีกแล้วหรือ? มนุษย์ที่โง่เขลา",
						"hindi": "...एक और नया चुनौती देने वाला? मूर्ख इंसान।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "넌 뭐지? Cipher Pact의 수하인가!",
						"english": "What are you? A minion of the Cipher Pact!",
						"japanese": "お前は何者だ？ Cipher Pactの手先か！",
						"chinese": "你是什么？是Cipher Pact的爪牙吗！",
						"french": "Qu'es-tu ? Un serviteur du Pacte Chiffré !",
						"spanish": "¿Qué eres? ¡Un secuaz del Pacto Cifrado!",
						"vietnamese": "Ngươi là gì? Một tay sai của Cipher Pact ư!",
						"thai": "เจ้าคืออะไร? ลูกสมุนของ Cipher Pact รึ!",
						"hindi": "तुम क्या हो? सिफर पैक्ट के गुर्गे!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "나는… 이 순환의 수호자. 네가 깨뜨릴 수 없는.",
						"english": "I am... the guardian of this cycle. One you cannot break.",
						"japanese": "私は…この循環の守護者。お前には破れない。",
						"chinese": "我是…这个循环的守护者。你无法打破它。",
						"french": "Je suis... le gardien de ce cycle. Celui que tu ne peux briser.",
						"spanish": "Soy... el guardián de este ciclo. Uno que no puedes romper.",
						"vietnamese": "Ta là... kẻ bảo hộ của vòng tuần hoàn này. Kẻ mà ngươi không thể phá vỡ.",
						"thai": "ข้าคือ... ผู้พิทักษ์วงจรนี้ ผู้ที่เจ้าไม่อาจทำลายได้",
						"hindi": "मैं... इस चक्र का संरक्षक हूँ। जिसे तुम तोड़ नहीं सकते।"
					},
					"speaker": "random_boss"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자의 힘에 탐험대는 무릎 꿇었다.",
						"english": "The expedition knelt before the might of the colossal shadow.",
						"japanese": "巨大な影の力に、探検隊は膝を屈した。",
						"chinese": "探险队在巨大阴影的力量面前屈服了。",
						"french": "L'expédition s'agenouilla devant la puissance de l'ombre colossale.",
						"spanish": "La expedición se arrodilló ante el poder de la sombra colosal.",
						"vietnamese": "Đoàn thám hiểm đã quỳ gối trước sức mạnh của bóng tối khổng lồ.",
						"thai": "คณะสำรวจคุกเข่าลงต่อหน้าพลังอำนาจของเงามหึมา",
						"hindi": "विशालकाय परछाई की शक्ति के आगे अभियान दल घुटने टेक गया।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "보았지? 너희의 의지는… 아무것도 바꾸지 못해.",
						"english": "See? Your will... changes nothing.",
						"japanese": "見たか？ お前たちの意志は… 何も変えられない。",
						"chinese": "看到了吗？你们的意志…什么都改变不了。",
						"french": "Tu vois ? Votre volonté... ne change rien.",
						"spanish": "¿Lo ves? Vuestra voluntad... no cambia nada.",
						"vietnamese": "Thấy chưa? Ý chí của các ngươi... chẳng thay đổi được gì cả.",
						"thai": "เห็นไหม? เจตจำนงของพวกเจ้า... เปลี่ยนอะไรไม่ได้หรอก",
						"hindi": "देखा? तुम्हारी इच्छा... कुछ भी नहीं बदल सकती।"
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "아니… 아직 끝나지 않았어!",
						"english": "No... it's not over yet!",
						"japanese": "いいえ… まだ終わってない！",
						"chinese": "不… 还没有结束！",
						"french": "Non… ce n'est pas encore fini !",
						"spanish": "¡No… aún no ha terminado!",
						"vietnamese": "Không… vẫn chưa kết thúc đâu!",
						"thai": "ไม่… ยังไม่จบ!",
						"hindi": "नहीं... अभी ख़त्म नहीं हुआ है!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…그래봤자. 모든 것은… 또다시… 반복될 뿐.",
						"english": "...Even so. Everything... will merely... repeat again.",
						"japanese": "…そうは言っても。全ては…また…繰り返されるだけだ。",
						"chinese": "……就算如此。一切都…只会…再次重复。",
						"french": "...Malgré tout. Tout... ne fera que... se répéter encore.",
						"spanish": "Aun así. Todo... simplemente... se repetirá de nuevo.",
						"vietnamese": "...Dù sao đi nữa. Mọi thứ... rồi sẽ... lặp lại mà thôi.",
						"thai": "...ถึงอย่างนั้นก็ตาม ทุกสิ่ง...ก็จะ... วนซ้ำอีกครั้ง",
						"hindi": "...फिर भी। सब कुछ... बस... फिर से दोहराया जाएगा।"
					}
				},
				{
					"content": {
						"korean": "아니. 이번엔 달라.",
						"english": "No. Not this time.",
						"japanese": "いや。今回は違う。",
						"chinese": "不。这次不同。",
						"french": "Non. Pas cette fois.",
						"spanish": "No. Esta vez no.",
						"vietnamese": "Không. Lần này sẽ khác.",
						"thai": "ไม่ใช่ ครั้งนี้แตกต่างออกไป",
						"hindi": "नहीं। इस बार नहीं।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "쓰러진 그림자. 그러나 도시는 여전히 숨 쉬고 있었다.",
						"english": "The shadow fell. But the city still breathed.",
						"japanese": "影は倒れた。しかし、都市はまだ息づいていた。",
						"chinese": "影子倒下了。但城市仍在呼吸。",
						"french": "L'ombre tomba. Mais la ville respirait toujours.",
						"spanish": "La sombra cayó. Pero la ciudad aún respiraba.",
						"vietnamese": "Bóng tối đã gục ngã. Nhưng thành phố vẫn còn hơi thở.",
						"thai": "เงาได้ล้มลงแล้ว แต่เมืองยังคงหายใจอยู่",
						"hindi": "छाया गिर गई। लेकिन शहर अभी भी साँस ले रहा था।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이 끝없는 반복의 고리를… 끊을 수 있을까?",
						"english": "Can we... break this endless cycle of repetition?",
						"japanese": "この終わりのない繰り返しの輪を…断ち切れるだろうか？",
						"chinese": "我们能…打破这无尽的重复循环吗？",
						"french": "Pouvons-nous... briser cette boucle de répétition sans fin ?",
						"spanish": "¿Podremos... romper este ciclo interminable de repetición?",
						"vietnamese": "Liệu chúng ta có thể... phá vỡ vòng lặp vô tận này không?",
						"thai": "เราจะ... ทำลายวงจรการทำซ้ำที่ไม่สิ้นสุดนี้ได้หรือไม่?",
						"hindi": "क्या हम... इस अंतहीन पुनरावृत्ति के चक्र को तोड़ सकते हैं?"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"현대 도시, 고대 서약의 그림자가 드리운 뒷골목.",
			"수상한 정보 브로커, Cipher Pact. 그 소문이 탐험대를 이끌었다.",
			"길 끝에서 만난 몽롱한 노인, 조이.",
			"모든 것은 반복된다. 그의 섬뜩한 예언이 시작이었다."
		],
		"english": [
			"Modern city, back alleys shadowed by an ancient pact.",
			"Suspicious info broker, Cipher Pact. Its rumors led the expedition.",
			"At the path's end, a dazed old man, Zoy.",
			"All things repeat. His chilling prophecy was the beginning."
		],
		"japanese": [
			"現代都市、古の誓約の影が差す裏路地。",
			"怪しげな情報ブローカー、Cipher Pact。その噂が探検隊を導いた。",
			"道の果てで出会った、うつろな老人、ゾイ。",
			"すべては繰り返される。彼の不気味な予言が始まりだった。"
		],
		"chinese": [
			"现代都市，古老誓约的阴影笼罩着后巷。",
			"可疑的情报贩子，Cipher Pact。其传闻指引着探险队。",
			"在路的尽头，遇到了一位恍惚的老人，佐伊。",
			"一切都将重演。他那令人毛骨悚然的预言，是开端。"
		],
		"french": [
			"Ville moderne, ruelles sombres où plane l'ombre d'un ancien pacte.",
			"Un courtier en informations suspect, Cipher Pact. Ses rumeurs guidèrent l'expédition.",
			"Au bout du chemin, un vieil homme hébété, Zoy.",
			"Tout se répète. Sa prophétie glaçante fut le début."
		],
		"spanish": [
			"Ciudad moderna, callejones sombríos bajo la sombra de un antiguo pacto.",
			"Un sospechoso corredor de información, Cipher Pact. Sus rumores guiaron la expedición.",
			"Al final del camino, un anciano aturdido, Zoy.",
			"Todo se repite. Su escalofriante profecía fue el principio."
		],
		"vietnamese": [
			"Thành phố hiện đại, những con hẻm tối tăm bị che phủ bởi bóng hình một lời thề cổ xưa.",
			"Kẻ môi giới thông tin đáng ngờ, Cipher Pact. Tin đồn về nó đã dẫn dắt đội thám hiểm.",
			"Ở cuối con đường, gặp một ông lão lờ đờ, Zoy.",
			"Mọi thứ đều lặp lại. Lời tiên tri rùng rợn của ông ta là khởi đầu."
		],
		"thai": [
			"เมืองสมัยใหม่ ตรอกซอกซอยที่ปกคลุมด้วยเงาของพันธสัญญาโบราณ",
			"นายหน้าข้อมูลที่น่าสงสัย, Cipher Pact. ข่าวลือเกี่ยวกับมันนำทางคณะสำรวจมา",
			"ที่ปลายทาง พบชายชราผู้เลือนลาง, ซอย",
			"ทุกสิ่งล้วนซ้ำรอย คำพยากรณ์อันน่าขนลุกของเขาคือจุดเริ่มต้น"
		],
		"hindi": [
			"आधुनिक शहर, प्राचीन प्रतिज्ञा की छाया में छिपी गलियाँ।",
			"संदिग्ध सूचना ब्रोकर, सिफर पैक्ट। उसकी अफवाहों ने अभियान का नेतृत्व किया।",
			"राह के अंत में, एक भ्रमित बूढ़ा आदमी, ज़ॉय।",
			"सब कुछ दोहराता है। उसकी भयावह भविष्यवाणी शुरुआत थी।"
		]
	}
} as const;
