export const scenario_snowy_hrimvow_60_04 = {
	"scenario_id": "snowy_hrimvow_60_04",
	"order": 4,
	"act": "rising",
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
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "맹렬한 눈보라가 모든 시야를 집어삼켰다.",
						"english": "A fierce blizzard swallowed all visibility.",
						"japanese": "猛烈な吹雪が視界をすべて飲み込んだ。",
						"chinese": "猛烈的暴风雪吞噬了所有视线。",
						"french": "Un blizzard féroce a englouti toute visibilité.",
						"spanish": "Una feroz ventisca devoró toda la visibilidad.",
						"vietnamese": "Một trận bão tuyết dữ dội đã nuốt chửng mọi tầm nhìn.",
						"thai": "พายุหิมะที่รุนแรงกลืนกินทัศนวิสัยทั้งหมด",
						"hindi": "एक भयंकर बर्फीले तूफान ने सारी दृश्यता निगल ली।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "…여긴 어디지?",
						"english": "...Where am I?",
						"japanese": "…ここはどこだ？",
						"chinese": "……这是哪儿？",
						"french": "...Où suis-je ?",
						"spanish": "¿Dónde estoy?",
						"vietnamese": "...Tôi đang ở đâu?",
						"thai": "...ฉันอยู่ที่ไหน?",
						"hindi": "...मैं कहाँ हूँ?"
					},
					"type": "speech"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "finn",
					"spot": [
						4,
						2
					],
					"type": "direction"
				},
				{
					"emotion": "base",
					"speaker": "finn",
					"content": {
						"korean": "정신이 드세요? 이 눈보라에선 위험해요.",
						"english": "Are you awake? It's dangerous in this blizzard.",
						"japanese": "お目覚めですか？この吹雪の中は危険ですよ。",
						"chinese": "你醒了吗？在这场暴风雪中很危险。",
						"french": "Êtes-vous réveillé ? C'est dangereux dans ce blizzard.",
						"spanish": "¿Está despierto? Es peligroso en esta ventisca.",
						"vietnamese": "Anh tỉnh rồi à? Nguy hiểm lắm trong trận bão tuyết này.",
						"thai": "คุณตื่นแล้วเหรอ? มันอันตรายในพายุหิมะนี้",
						"hindi": "क्या आप जागे हुए हैं? इस बर्फीले तूफान में खतरा है।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "당신은…?",
						"english": "You are...?",
						"japanese": "あなたは…？",
						"chinese": "你是……？",
						"french": "Vous êtes...?",
						"spanish": "¿Usted es...?",
						"vietnamese": "Anh là...?",
						"thai": "คุณคือ...?",
						"hindi": "आप कौन हैं...?"
					},
					"type": "speech"
				},
				{
					"speaker": "finn",
					"type": "speech",
					"content": {
						"korean": "핀입니다. 설원의 수호자께서 저를 보냈습니다.",
						"english": "I am Finn. The Guardian of the Snowfield sent me.",
						"japanese": "フィンです。雪原の守護者様が私を遣わしました。",
						"chinese": "我是芬恩。雪原的守护者派我来的。",
						"french": "Je suis Finn. Le Gardien du Champ de Neige m'a envoyé.",
						"spanish": "Soy Finn. El Guardián del Campo de Nieve me envió.",
						"vietnamese": "Tôi là Finn. Người bảo vệ Vùng tuyết đã cử tôi đến.",
						"thai": "ฉันชื่อฟินน์ ผู้พิทักษ์ทุ่งหิมะส่งฉันมา",
						"hindi": "मैं फिन हूँ। बर्फीले मैदान के संरक्षक ने मुझे भेजा है।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "finn",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "finn",
					"content": {
						"korean": "이 땅은 수호자의 맹세 덕분에 평화로운 겁니다.",
						"english": "This land is peaceful thanks to the Guardian's Oath.",
						"japanese": "この地は守護者の誓いのおかげで平和なのです。",
						"chinese": "这片土地之所以和平，都是因为守护者的誓言。",
						"french": "Cette terre est paisible grâce au Serment du Gardien.",
						"spanish": "Esta tierra es pacífica gracias al Juramento del Guardián.",
						"vietnamese": "Vùng đất này bình yên nhờ lời thề của Người bảo vệ.",
						"thai": "ดินแดนแห่งนี้สงบสุขได้ด้วยคำสาบานของผู้พิทักษ์",
						"hindi": "यह भूमि संरक्षक की शपथ की बदौलत शांतिपूर्ण है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "외부의 위협으로부터 우리를 지키기 위해…",
						"english": "To protect us from external threats...",
						"japanese": "外部の脅威から我々を守るために…",
						"chinese": "为了保护我们免受外部威胁…",
						"french": "Pour nous protéger des menaces extérieures...",
						"spanish": "Para protegernos de las amenazas externas...",
						"vietnamese": "Để bảo vệ chúng ta khỏi mối đe dọa bên ngoài...",
						"thai": "เพื่อปกป้องเราจากภัยคุกคามภายนอก...",
						"hindi": "बाहरी खतरों से हमारी रक्षा करने के लिए…"
					},
					"type": "speech",
					"speaker": "finn",
					"emotion": "happy"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "외부의 위협…?",
						"english": "External threats...?",
						"japanese": "外部の脅威…？",
						"chinese": "外部威胁…？",
						"french": "Des menaces extérieures... ?",
						"spanish": "¿Amenazas externas...?",
						"vietnamese": "Mối đe dọa bên ngoài...?",
						"thai": "ภัยคุกคามภายนอก...?",
						"hindi": "बाहरी खतरे...?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "오래된 전설에는 그렇게 기록되어 있습니다. 그 분이 우리를 지키고 있다고.",
						"english": "Ancient legends record it thus. That He protects us.",
						"japanese": "古き伝説にはそう記されています。彼が我々を守っていると。",
						"chinese": "古老的传说中是这样记载的。他守护着我们。",
						"french": "Les anciennes légendes le disent ainsi. Qu'il nous protège.",
						"spanish": "Las antiguas leyendas lo registran así. Que Él nos protege.",
						"vietnamese": "Những truyền thuyết cổ xưa ghi chép như vậy. Rằng Ngài đang bảo vệ chúng ta.",
						"thai": "ตำนานเก่าแก่บันทึกไว้เช่นนั้น ว่าท่านผู้นั้นปกป้องเราอยู่",
						"hindi": "प्राचीन किंवदंतियों में ऐसा दर्ज है। कि वह हमारी रक्षा करते हैं।"
					},
					"type": "speech",
					"speaker": "finn",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…정말 그럴까?",
						"english": "...Is that truly so?",
						"japanese": "…本当にそうなのか？",
						"chinese": "…真的是这样吗？",
						"french": "...Est-ce vraiment le cas ?",
						"spanish": "¿...Será verdad?",
						"vietnamese": "...Thật sự là vậy sao?",
						"thai": "...จริงหรือ?",
						"hindi": "...क्या यह सच है?"
					},
					"type": "speech",
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						2,
						2
					],
					"type": "direction",
					"speaker": "finn",
					"action": "enter"
				},
				{
					"emotion": "base",
					"speaker": "finn",
					"type": "speech",
					"content": {
						"korean": "아, 그리고 전설 중에 좀 이상한 구절이 있어요.",
						"english": "Oh, and there's a strange passage in the legends.",
						"japanese": "ああ、それから伝説の中に少し奇妙な一節があります。",
						"chinese": "啊，而且传说中有一个奇怪的段落。",
						"french": "Ah, et il y a un passage étrange dans les légendes.",
						"spanish": "Ah, y hay un pasaje extraño en las leyendas.",
						"vietnamese": "À, và có một đoạn văn kỳ lạ trong truyền thuyết.",
						"thai": "อ้อ แล้วก็มีบทแปลกๆ ในตำนานด้วยนะ",
						"hindi": "ओह, और किंवदंतियों में एक अजीब अंश है।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이상한 구절?",
						"english": "Strange passage?",
						"japanese": "奇妙な一節？",
						"chinese": "奇怪的段落？",
						"french": "Un passage étrange ?",
						"spanish": "¿Pasaje extraño?",
						"vietnamese": "Đoạn văn kỳ lạ?",
						"thai": "บทแปลกๆ?",
						"hindi": "अजीब अंश?"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "‘수호자가 스스로를 가뒀다’는 말이 반복돼요. 왜 그랬을까요?",
						"english": "The phrase 'The Guardian imprisoned himself' is repeated. Why would He do that?",
						"japanese": "「守護者が自らを閉じ込めた」という言葉が繰り返されます。なぜそうしたのでしょうか？",
						"chinese": "‘守护者将自己囚禁’这句话反复出现。他为什么要这样做呢？",
						"french": "La phrase 'Le Gardien s'est emprisonné' est répétée. Pourquoi aurait-il fait cela ?",
						"spanish": "La frase 'El Guardián se encerró a sí mismo' se repite. ¿Por qué lo habría hecho?",
						"vietnamese": "Cụm từ 'Người bảo hộ đã tự giam cầm mình' được lặp lại. Tại sao Ngài lại làm vậy?",
						"thai": "ประโยคที่ว่า 'ผู้พิทักษ์ขังตัวเอง' ถูกกล่าวซ้ำ ทำไมเขาถึงทำเช่นนั้น?",
						"hindi": "'संरक्षक ने खुद को कैद कर लिया' यह वाक्य बार-बार आता है। उन्होंने ऐसा क्यों किया होगा?"
					},
					"type": "speech",
					"speaker": "finn"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…스스로를 가뒀다고?",
						"english": "...Imprisoned himself?",
						"japanese": "…自らを閉じ込めたと？",
						"chinese": "…自己把自己关起来了？",
						"french": "...Il s'est emprisonné ?",
						"spanish": "¿...Se encerró a sí mismo?",
						"vietnamese": "...Tự giam cầm mình sao?",
						"thai": "...ขังตัวเอง?",
						"hindi": "...खुद को कैद कर लिया?"
					},
					"emotion": "sad"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이해할 수 없어요. 그는 우리를 위해 존재하는데.",
						"english": "I don't understand. He exists for us.",
						"japanese": "理解できません。彼は我々のために存在しているのに。",
						"chinese": "我无法理解。他为我们而存在。",
						"french": "Je ne comprends pas. Il existe pour nous.",
						"spanish": "No puedo entenderlo. Él existe para nosotros.",
						"vietnamese": "Tôi không thể hiểu được. Ngài tồn tại vì chúng ta mà.",
						"thai": "ฉันไม่เข้าใจ เขาอยู่เพื่อเราแท้ๆ",
						"hindi": "मैं समझ नहीं पा रहा हूँ। वह हमारे लिए मौजूद हैं।"
					},
					"type": "speech",
					"speaker": "finn"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…무언가, 잘못되었어.",
						"english": "...Something is wrong.",
						"japanese": "…何かが、間違っている。",
						"chinese": "…有什么地方，不对劲。",
						"french": "...Quelque chose ne va pas.",
						"spanish": "...Algo está mal.",
						"vietnamese": "...Có điều gì đó, sai rồi.",
						"thai": "...มีบางอย่างผิดปกติ",
						"hindi": "...कुछ तो, गलत है।"
					},
					"type": "speech",
					"emotion": "angry"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						4,
						2
					],
					"speaker": "finn",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"emotion": "angry",
					"speaker": "finn",
					"type": "speech",
					"content": {
						"korean": "이제 그만 돌아가세요. 이 이상 나아가면 수호자의 맹세를 거스르는 겁니다.",
						"english": "Turn back now. Further progress defies the Guardian's oath.",
						"japanese": "もうお戻りください。これ以上進めば、守護者の誓いに背くことになります。",
						"chinese": "请回吧。再往前，就是违背守护者的誓约了。",
						"french": "Rebroussez chemin. Aller plus loin serait défier le serment du Gardien.",
						"spanish": "Retroceded ahora. Ir más allá es desafiar el juramento del Guardián.",
						"vietnamese": "Hãy quay lại. Tiến xa hơn nữa là đi ngược lại lời thề của Người Giữ Đền.",
						"thai": "กลับไปเสีย. หากไปไกลกว่านี้ ท่านจะฝืนคำสาบานของผู้พิทักษ์.",
						"hindi": "अब वापस लौट जाओ। इससे आगे बढ़ना संरक्षक की शपथ का उल्लंघन होगा।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "나는 진실을 알아야 해.",
						"english": "I must know the truth.",
						"japanese": "私は真実を知らなければならない。",
						"chinese": "我必须知道真相。",
						"french": "Je dois connaître la vérité.",
						"spanish": "Debo saber la verdad.",
						"vietnamese": "Tôi phải biết sự thật.",
						"thai": "ข้าต้องรู้ความจริง.",
						"hindi": "मुझे सच जानना होगा।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "finn",
					"type": "speech",
					"content": {
						"korean": "그게 수호자를 위험하게 만들 겁니다! 당신은 모른다고요!",
						"english": "That will endanger the Guardian! You don't understand!",
						"japanese": "それが守護者を危険に晒すのです！あなたは分かっていません！",
						"chinese": "那会危及守护者！你根本不知道！",
						"french": "Cela mettra le Gardien en danger ! Vous ne comprenez pas !",
						"spanish": "¡Eso pondrá en peligro al Guardián! ¡No lo sabéis!",
						"vietnamese": "Điều đó sẽ khiến Người Giữ Đền gặp nguy hiểm! Ngươi không hiểu đâu!",
						"thai": "นั่นจะทำให้ผู้พิทักษ์ตกอยู่ในอันตราย! ท่านไม่รู้หรอก!",
						"hindi": "यह संरक्षक को खतरे में डाल देगा! तुम नहीं जानते!"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "알고 싶어. 모든 걸.",
						"english": "I want to know. Everything.",
						"japanese": "知りたい。全てを。",
						"chinese": "我想知道。所有的一切。",
						"french": "Je veux savoir. Tout.",
						"spanish": "Quiero saberlo. Todo.",
						"vietnamese": "Tôi muốn biết. Tất cả.",
						"thai": "ข้าอยากรู้. ทุกสิ่ง.",
						"hindi": "मैं जानना चाहता हूँ। सब कुछ।"
					},
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…결국, 이 굴레도… 끊어지는구나. 하지만… 너는…",
						"english": "…In the end, even this chain… breaks. But… you…",
						"japanese": "…結局、この束縛も…断ち切られるのか。しかし…お前は…",
						"chinese": "…终究，这个束缚也…断裂了。但是…你…",
						"french": "…Finalement, même cette chaîne… se brise. Mais… toi…",
						"spanish": "…Al final, incluso este yugo… se rompe. Pero… tú…",
						"vietnamese": "…Cuối cùng, xiềng xích này cũng… đứt. Nhưng… ngươi…",
						"thai": "…ในที่สุด โซ่นี้ก็…ขาดลง แต่…เจ้า…",
						"hindi": "...आखिरकार, यह बंधन भी... टूट जाता है। लेकिन... तुम..."
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…(힘겹게 숨을 쉰다)",
						"english": "…(Breathing with difficulty)",
						"japanese": "…（苦しそうに息をする）",
						"chinese": "…（艰难地呼吸着）",
						"french": "…(Respire difficilement)",
						"spanish": "…(Respira con dificultad)",
						"vietnamese": "…(Thở khó nhọc)",
						"thai": "…(หายใจลำบาก)",
						"hindi": "...(मुश्किल से साँस ले रहा है)"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "수호자의 마지막 말은 메아리처럼 흩어졌다. 맹세가 깨어진 자리에는 비통함만이 남았다.",
						"english": "The Guardian's last words scattered like an echo. Only sorrow remained where the oath was broken.",
						"japanese": "守護者の最後の言葉は木霊のように散っていった。誓いが破られた場所には、悲痛さだけが残った。",
						"chinese": "守护者的遗言如回声般消散。誓言破碎之处，只剩下悲痛。",
						"french": "Les derniers mots du Gardien se sont dispersés comme un écho. Seule la tristesse demeurait là où le serment avait été brisé.",
						"spanish": "Las últimas palabras del Guardián se dispersaron como un eco. Solo la tristeza permaneció donde el juramento fue roto.",
						"vietnamese": "Những lời cuối cùng của Người bảo hộ tan biến như tiếng vọng. Chỉ còn lại nỗi đau xót nơi lời thề bị phá vỡ.",
						"thai": "คำพูดสุดท้ายของผู้พิทักษ์กระจัดกระจายไปเหมือนเสียงสะท้อน เหลือเพียงความโศกเศร้า ณ ที่ซึ่งคำสาบานถูกหัก.",
						"hindi": "अभिभावक के अंतिम शब्द एक प्रतिध्वनि की तरह बिखर गए। जहाँ शपथ टूटी थी, वहाँ केवल दुख शेष रहा।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그러나 잃어버린 '의미'를 찾기 위한 여정은 아직 끝나지 않았다.",
						"english": "However, the journey to find the lost 'meaning' is not over yet.",
						"japanese": "しかし、失われた『意味』を探す旅はまだ終わっていない。",
						"chinese": "然而，寻找失落的“意义”的旅程尚未结束。",
						"french": "Cependant, la quête pour retrouver le 'sens' perdu n'est pas encore terminée.",
						"spanish": "Sin embargo, el viaje para encontrar el 'significado' perdido aún no ha terminado.",
						"vietnamese": "Tuy nhiên, cuộc hành trình tìm kiếm 'ý nghĩa' đã mất vẫn chưa kết thúc.",
						"thai": "อย่างไรก็ตาม การเดินทางเพื่อค้นหา 'ความหมาย' ที่หายไปยังไม่สิ้นสุด",
						"hindi": "हालांकि, खोए हुए 'अर्थ' को खोजने की यात्रा अभी समाप्त नहीं हुई है।"
					},
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 눈보라 속에서 모습을 드러냈다.",
						"english": "A colossal shadow emerged from the blizzard.",
						"japanese": "巨大な影が吹雪の中から姿を現した。",
						"chinese": "一个巨大的黑影在暴风雪中现身了。",
						"french": "Une ombre colossale émergea du blizzard.",
						"spanish": "Una sombra colosal emergió de la ventisca.",
						"vietnamese": "Một bóng đen khổng lồ hiện ra giữa bão tuyết.",
						"thai": "เงาร่างมหึมาปรากฏขึ้นจากพายุหิมะ.",
						"hindi": "बर्फ़ीले तूफ़ान से एक विशाल परछाई उभरी।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…침입자. 맹세를 거스를 셈이냐.",
						"english": "...Intruder. Do you intend to defy the oath?",
						"japanese": "…侵入者。誓いを破るつもりか。",
						"chinese": "...入侵者。你打算违背誓约吗？",
						"french": "...Intrus. As-tu l'intention de défier le serment ?",
						"spanish": "...Intruso. ¿Pretendes desafiar el juramento?",
						"vietnamese": "...Kẻ xâm nhập. Ngươi có ý định phá vỡ lời thề sao?",
						"thai": "...ผู้บุกรุก. เจ้าคิดจะฝืนคำสาบานหรือ?",
						"hindi": "...घुसपैठिए। क्या तुम शपथ को तोड़ने का इरादा रखते हो?"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "당신이 Hrimvow… 설원의 수호자?",
						"english": "You are Hrimvow... Guardian of the Snowfields?",
						"japanese": "あなたがフリームヴァウ… 雪原の守護者ですか？",
						"chinese": "你就是赫里姆沃… 雪原的守护者？",
						"french": "Vous êtes Hrimvow... Gardien des Champs de Neige ?",
						"spanish": "¿Sois Hrimvow... Guardián de los Campos Nevados?",
						"vietnamese": "Ngươi là Hrimvow... Người Giữ Đền của Vùng Tuyết?",
						"thai": "ท่านคือฮริมโวว์... ผู้พิทักษ์แห่งทุ่งหิมะ?",
						"hindi": "तुम हो ह्रीम्वाव... बर्फ़ीले मैदानों के संरक्षक?"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "나는 맹세 그 자체. 이 땅을 지키는 굴레다.",
						"english": "I am the oath itself. The binding that protects this land.",
						"japanese": "私は誓いそのもの。この地を守る枷だ。",
						"chinese": "我就是誓约本身。守护这片土地的枷锁。",
						"french": "Je suis le serment même. Le lien qui protège cette terre.",
						"spanish": "Soy el juramento mismo. El vínculo que protege esta tierra.",
						"vietnamese": "Ta là lời thề. Là xiềng xích bảo vệ vùng đất này.",
						"thai": "ข้าคือคำสาบานเอง. พันธนาการที่ปกป้องผืนดินนี้.",
						"hindi": "मैं स्वयं शपथ हूँ। इस भूमि की रक्षा करने वाला बंधन।"
					},
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"speaker": "finn",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "수호자님! 저들은 위험합니다!",
						"english": "Guardian! They are dangerous!",
						"japanese": "守護者様！彼らは危険です！",
						"chinese": "守护者大人！他们很危险！",
						"french": "Gardien ! Ils sont dangereux !",
						"spanish": "¡Guardián! ¡Son peligrosos!",
						"vietnamese": "Người Giữ Đền! Họ nguy hiểm lắm!",
						"thai": "ท่านผู้พิทักษ์! พวกมันอันตราย!",
						"hindi": "संरक्षक! वे खतरनाक हैं!"
					},
					"speaker": "finn",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "핀, 비켜!",
						"english": "Finn, stand aside!",
						"japanese": "フィン、どけ！",
						"chinese": "芬，让开！",
						"french": "Finn, écarte-toi !",
						"spanish": "¡Finn, apártate!",
						"vietnamese": "Finn, tránh ra!",
						"thai": "ฟินน์, หลีกไป!",
						"hindi": "फिन, हट जाओ!"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "맹세는 이어져야 한다. 고통 속에서도…",
						"english": "The oath must continue. Even in pain…",
						"japanese": "誓いは続くべきだ。苦痛の中でも…",
						"chinese": "誓言必须延续。即使在痛苦之中…",
						"french": "Le serment doit perdurer. Même dans la douleur…",
						"spanish": "El juramento debe continuar. Incluso en el dolor…",
						"vietnamese": "Lời thề phải tiếp tục. Ngay cả trong đau đớn…",
						"thai": "คำสาบานต้องดำเนินต่อไป แม้ในความเจ็บปวด…",
						"hindi": "शपथ जारी रहनी चाहिए। दर्द में भी..."
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "happy",
					"speaker": "finn",
					"type": "speech",
					"content": {
						"korean": "맞아요! 당신은 우리를 지켜야 합니다!",
						"english": "That's right! You must protect us!",
						"japanese": "そうです！あなたは私たちを守らなければなりません！",
						"chinese": "没错！你必须保护我们！",
						"french": "C'est exact ! Vous devez nous protéger !",
						"spanish": "¡Así es! ¡Debes protegernos!",
						"vietnamese": "Đúng vậy! Ngươi phải bảo vệ chúng ta!",
						"thai": "ถูกต้อง! ท่านต้องปกป้องพวกเรา!",
						"hindi": "हाँ! तुम्हें हमारी रक्षा करनी चाहिए!"
					}
				}
			],
			"lose_dialogue": [
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "맹세는… 끊어지지 않는다. 너 같은 자에게…",
						"english": "The oath… will not break. Not for the likes of you…",
						"japanese": "誓いは…断ち切れない。お前のような者には…",
						"chinese": "誓言…不会断裂。对你这种人而言…",
						"french": "Le serment… ne se brisera pas. Pas pour quelqu'un comme toi…",
						"spanish": "El juramento… no se romperá. No para alguien como tú…",
						"vietnamese": "Lời thề… sẽ không đứt. Với kẻ như ngươi…",
						"thai": "คำสาบาน…ไม่ขาดหรอก สำหรับคนเช่นเจ้า…",
						"hindi": "शपथ... टूटेगी नहीं। तुम जैसे के लिए नहीं..."
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…젠장. 아직… 끝나지 않았어.",
						"english": "…Damn it. It's not… over yet.",
						"japanese": "…ちくしょう。まだ…終わってない。",
						"chinese": "…该死。还没…结束。",
						"french": "…Mince. Ce n'est pas… encore fini.",
						"spanish": "…Maldita sea. Todavía… no ha terminado.",
						"vietnamese": "…Chết tiệt. Vẫn chưa… kết thúc.",
						"thai": "…บ้าจริง. ยัง…ไม่จบหรอก.",
						"hindi": "...धिक्कार है। अभी... खत्म नहीं हुआ है।"
					},
					"emotion": "angry"
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
					"speaker": "finn",
					"content": {
						"korean": "수호자님… 역시… 당신은…",
						"english": "Guardian… as expected… you are…",
						"japanese": "守護者様…やはり…あなたは…",
						"chinese": "守护者大人…果然…您是…",
						"french": "Gardien… comme prévu… vous êtes…",
						"spanish": "Guardián… como esperaba… tú eres…",
						"vietnamese": "Người bảo hộ… quả nhiên… ngài là…",
						"thai": "ท่านผู้พิทักษ์…ในที่สุด…ท่านก็…",
						"hindi": "अभिभावक... जैसा कि अपेक्षित था... आप हैं..."
					},
					"type": "speech",
					"emotion": "happy"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"눈보라가 삼킨 설원. 모든 것을 얼어붙게 했다.",
			"한 남자가 쓰러졌다. 그리고 그를 구원할 손길이 다가왔다.",
			"수호자라 불리는 존재, 맹세라 불리는 거짓.",
			"진실은 언제나 가장 차가운 곳에 숨어 있었다."
		],
		"english": [
			"The blizzard swallowed the snowfield, freezing everything.",
			"A man fell. And a hand of salvation reached out to him.",
			"An existence called a Guardian, a lie called an Oath.",
			"The truth was always hidden in the coldest place."
		],
		"japanese": [
			"吹雪が雪原を飲み込み、すべてを凍らせた。",
			"一人の男が倒れた。そして、彼を救う手が差し伸べられた。",
			"守護者と呼ばれる存在、誓いと呼ばれる偽り。",
			"真実はいつも最も冷たい場所に隠されていた。"
		],
		"chinese": [
			"暴风雪吞噬了雪原，将一切冻结。",
			"一个男人倒下了。然后，一只救赎之手伸向了他。",
			"被称为守护者的存在，被称为誓言的谎言。",
			"真相总是隐藏在最寒冷的地方。"
		],
		"french": [
			"Le blizzard a englouti le champ de neige, gelant tout.",
			"Un homme tomba. Et une main salvatrice lui tendit.",
			"Une existence appelée Gardien, un mensonge appelé Serment.",
			"La vérité s'était toujours cachée dans l'endroit le plus froid."
		],
		"spanish": [
			"La ventisca devoró el campo de nieve, congelando todo.",
			"Un hombre cayó. Y una mano de salvación se le acercó.",
			"Una existencia llamada Guardián, una mentira llamada Juramento.",
			"La verdad siempre estuvo oculta en el lugar más frío."
		],
		"vietnamese": [
			"Bão tuyết nuốt chửng cánh đồng tuyết, đóng băng mọi thứ.",
			"Một người đàn ông ngã xuống. Và một bàn tay cứu rỗi đã đến với anh ta.",
			"Một sự tồn tại được gọi là Người bảo vệ, một lời nói dối được gọi là Lời thề.",
			"Sự thật luôn ẩn giấu ở nơi lạnh lẽo nhất."
		],
		"thai": [
			"พายุหิมะกลืนกินทุ่งหิมะ แช่แข็งทุกสิ่ง",
			"ชายคนหนึ่งล้มลง และมือแห่งความรอดก็เอื้อมมาหาเขา",
			"การมีอยู่เรียกว่าผู้พิทักษ์ คำโกหกเรียกว่าคำสาบาน",
			"ความจริงซ่อนอยู่ในที่ที่หนาวที่สุดเสมอ"
		],
		"hindi": [
			"बर्फीले तूफान ने बर्फीले मैदान को निगल लिया, सब कुछ जमा दिया।",
			"एक आदमी गिर गया। और उसे बचाने वाला हाथ उसकी ओर बढ़ा।",
			"एक अस्तित्व जिसे संरक्षक कहते हैं, एक झूठ जिसे शपथ कहते हैं।",
			"सच हमेशा सबसे ठंडी जगह में छिपा था।"
		]
	}
} as const;
