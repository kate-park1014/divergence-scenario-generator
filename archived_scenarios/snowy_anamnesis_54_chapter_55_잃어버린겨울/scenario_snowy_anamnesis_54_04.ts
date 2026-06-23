export const scenario_snowy_anamnesis_54_04 = {
	"scenario_id": "snowy_anamnesis_54_04",
	"order": 4,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"borealis": {
			"id": "mon_8dc13eb3-9244-4413-a74b-ee25681ceab5",
			"name": {
				"korean": "보레아리스",
				"english": "Borealis",
				"japanese": "ボレアリス",
				"chinese": "博瑞利斯",
				"french": "Boréalis",
				"spanish": "Borealis",
				"vietnamese": "Borealis",
				"thai": "โบเรียลิส",
				"hindi": "बोरियालिस"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/bd557ed6-ee94-4ed6-7da8-6f9770585b00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2a79793b-650a-478a-00e2-38f8c8730a00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"얼어붙은 유적. 바이킹족의 잊힌 맹세가 얼음 속에 잠들었다.",
			"매서운 한기 속에서, 진실은 차갑게 얼어붙어 있었다.",
			"점점 더 깊어지는 비극 속에서, 그들은 깨달았다.",
			"맹세는 구원이 아닌, 저주였음을."
		],
		"english": [
			"Frozen ruins. The Vikings' forgotten vow sleeps within the ice.",
			"Amidst the biting cold, the truth lay frozen.",
			"As the tragedy deepened, they realized.",
			"The vow was not salvation, but a curse."
		],
		"japanese": [
			"凍てついた遺跡。ヴァイキング族の忘れられた誓いが氷の中で眠る。",
			"厳しい寒さの中で、真実は冷たく凍りついていた。",
			"深まる悲劇の中で、彼らは悟った。",
			"誓いは救いではなく、呪いだったことを。"
		],
		"chinese": [
			"冰封的遗迹。维京人被遗忘的誓言沉睡在冰中。",
			"在刺骨的寒冷中，真相冰冷地冻结着。",
			"在日益深重的悲剧中，他们意识到了。",
			"誓言并非救赎，而是诅咒。"
		],
		"french": [
			"Ruines gelées. Le serment oublié des Vikings dort dans la glace.",
			"Au milieu du froid mordant, la vérité gisait gelée.",
			"Alors que la tragédie s'épaississait, ils réalisèrent.",
			"Le serment n'était pas un salut, mais une malédiction."
		],
		"spanish": [
			"Ruinas congeladas. El voto olvidado de los vikingos yace dormido en el hielo.",
			"En medio del frío mordaz, la verdad yacía congelada.",
			"A medida que la tragedia se profundizaba, se dieron cuenta.",
			"El voto no era salvación, sino una maldición."
		],
		"vietnamese": [
			"Di tích đóng băng. Lời thề bị lãng quên của người Viking yên giấc trong băng giá.",
			"Giữa cái lạnh cắt da, sự thật đã đóng băng lạnh lẽo.",
			"Trong bi kịch ngày càng sâu sắc, họ đã nhận ra.",
			"Lời thề không phải là sự cứu rỗi, mà là một lời nguyền."
		],
		"thai": [
			"ซากปรักหักพังเยือกแข็ง คำสาบานที่ถูกลืมของชาวไวกิ้งหลับใหลอยู่ในน้ำแข็ง",
			"ท่ามกลางความหนาวเหน็บ ความจริงก็แข็งตัวอยู่เช่นนั้น",
			"เมื่อโศกนาฏกรรมลึกลงไป พวกเขาก็ได้ตระหนัก",
			"คำสาบานนั้นไม่ใช่ความรอด แต่เป็นคำสาป"
		],
		"hindi": [
			"जमे हुए खंडहर। वाइकिंग्स की भूली हुई प्रतिज्ञा बर्फ में सो रही है।",
			"कड़ाके की ठंड में, सच्चाई जमी हुई थी।",
			"जैसे-जैसे त्रासदी गहरी होती गई, उन्हें एहसास हुआ।",
			"प्रतिज्ञा मोक्ष नहीं, बल्कि एक अभिशाप थी।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "고대 바이킹족의 유적. 얼음과 눈이 모든 것을 집어삼켰다.",
						"english": "Ancient Viking ruins. Ice and snow have devoured everything.",
						"japanese": "古代ヴァイキング族の遺跡。氷と雪がすべてを飲み込んだ。",
						"chinese": "古老的维京遗迹。冰雪吞噬了一切。",
						"french": "Anciennes ruines vikings. La glace et la neige ont tout englouti.",
						"spanish": "Antiguas ruinas vikingas. El hielo y la nieve lo han devorado todo.",
						"vietnamese": "Di tích cổ của người Viking. Băng và tuyết đã nuốt chửng mọi thứ.",
						"thai": "ซากปรักหักพังของชาวไวกิ้งโบราณ น้ำแข็งและหิมะกลืนกินทุกสิ่ง",
						"hindi": "प्राचीन वाइकिंग खंडहर। बर्फ और बर्फ ने सब कुछ निगल लिया है।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "여기가 그 유적이란 말이지… 소문대로 춥군.",
						"english": "So this is the ruin... It's as cold as the rumors say.",
						"japanese": "ここがあの遺跡か…噂通り寒いな。",
						"chinese": "这里就是那个遗迹啊……果然和传闻中一样冷。",
						"french": "Alors c'est ça la ruine... Il fait aussi froid que le disent les rumeurs.",
						"spanish": "Así que estas son las ruinas... Hace tanto frío como dicen los rumores.",
						"vietnamese": "Đây là di tích đó sao... Đúng là lạnh như lời đồn.",
						"thai": "นี่คือซากปรักหักพังนั้น... หนาวสมคำร่ำลือจริงๆ",
						"hindi": "तो यह वही खंडहर है... अफवाहों के अनुसार यह ठंडा है।"
					},
					"type": "speech"
				},
				{
					"speaker": "borealis",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "borealis",
					"emotion": "base",
					"content": {
						"korean": "…고대 룬 문자. 여기서 이 흔적을 볼 줄이야.",
						"english": "...Ancient runic script. To see these markings here...",
						"japanese": "…古代のルーン文字。ここでこの痕跡を見られるとは。",
						"chinese": "……古老的符文。没想到在这里能看到这些痕迹。",
						"french": "...Anciennes runes. Voir ces marques ici...",
						"spanish": "...Antiguas runas. Ver estas marcas aquí...",
						"vietnamese": "...Chữ rune cổ đại. Thật không ngờ lại thấy dấu vết này ở đây.",
						"thai": "...อักษรรูนโบราณ ไม่คิดว่าจะได้เห็นร่องรอยเหล่านี้ที่นี่",
						"hindi": "...प्राचीन रुनिक लिपि। यहाँ ये निशान देखना..."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "누구세요?",
						"english": "Who are you?",
						"japanese": "どちら様ですか？",
						"chinese": "你是谁？",
						"french": "Qui êtes-vous ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Ngươi là ai?",
						"thai": "คุณคือใคร?",
						"hindi": "आप कौन हैं?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_1"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "보레아리스. 잊힌 기록들을 쫓는 방랑자.",
						"english": "Borealis. A wanderer tracking forgotten records.",
						"japanese": "ボレアリス。忘れられた記録を追う放浪者。",
						"chinese": "博瑞利斯。一个追寻被遗忘记录的流浪者。",
						"french": "Borealis. Un vagabond traquant les archives oubliées.",
						"spanish": "Borealis. Un vagabundo que busca registros olvidados.",
						"vietnamese": "Borealis. Một kẻ lang thang theo dấu những ghi chép đã lãng quên.",
						"thai": "โบรีอาลิส ผู้พเนจรที่ติดตามบันทึกที่ถูกลืม",
						"hindi": "बोरियालिस। भूली हुई अभिलेखों का पीछा करने वाला एक खानाबदोश।"
					},
					"speaker": "borealis"
				},
				{
					"content": {
						"korean": "이 얼음 속에는… 무언가 중요한 맹세가 새겨져 있어.",
						"english": "Within this ice... a significant vow is carved.",
						"japanese": "この氷の中には…何か重要な誓いが刻まれている。",
						"chinese": "这冰中……刻着某种重要的誓言。",
						"french": "Dans cette glace... un serment important est gravé.",
						"spanish": "Dentro de este hielo... hay un voto importante grabado.",
						"vietnamese": "Trong lớp băng này... có khắc một lời thề quan trọng nào đó.",
						"thai": "ในน้ำแข็งนี้... มีคำสาบานสำคัญบางอย่างสลักอยู่",
						"hindi": "इस बर्फ के भीतर... एक महत्वपूर्ण प्रतिज्ञा खुदी हुई है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "borealis"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "borealis",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "해독했어. '우리는 이 땅을 지키리라… 영원한 겨울로써'.",
						"english": "Deciphered. 'We shall protect this land... with eternal winter.'",
						"japanese": "「解読した。『我らはこの地を守らん…永遠の冬をもって』。」",
						"chinese": "已破译。‘我们将守护这片土地…以永恒的冬季’。",
						"french": "Déchiffré. 'Nous protégerons cette terre... par un hiver éternel.'",
						"spanish": "Descifrado. 'Protegeremos esta tierra… con un invierno eterno'.",
						"vietnamese": "Đã giải mã. 'Chúng ta sẽ bảo vệ vùng đất này… bằng mùa đông vĩnh cửu'.",
						"thai": "ถอดรหัสแล้ว 'เราจะปกป้องแผ่นดินนี้… ด้วยเหมันต์นิรันดร์'",
						"hindi": "डिकोड किया। 'हम इस भूमि की रक्षा करेंगे... अनंत सर्दियों के साथ।'"
					},
					"speaker": "borealis"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "땅을 지킨다고? 근데 왜… 이 땅은 얼어붙은 거지?",
						"english": "Protect the land? But why... is it frozen?",
						"japanese": "「地を守る？ でもなぜ…この地は凍りついている？」",
						"chinese": "守护土地？可为什么…这片土地却被冰封了？",
						"french": "Protéger la terre ? Mais pourquoi... est-elle gelée ?",
						"spanish": "¿Proteger la tierra? ¿Pero por qué... está congelada?",
						"vietnamese": "Bảo vệ vùng đất? Nhưng tại sao… vùng đất này lại bị đóng băng?",
						"thai": "ปกป้องแผ่นดินเหรอ? แต่ทำไม… แผ่นดินนี้ถึงกลายเป็นน้ำแข็ง?",
						"hindi": "भूमि की रक्षा? लेकिन क्यों... यह भूमि जम गई है?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "borealis",
					"type": "speech",
					"content": {
						"korean": "뭔가 어긋나 있어. 맹세의 의미가… 변질된 것 같아.",
						"english": "Something's wrong. The meaning of the vow... seems twisted.",
						"japanese": "「何かがおかしい。誓いの意味が…変質したようだ。」",
						"chinese": "有哪里不对劲。誓言的意义…似乎被扭曲了。",
						"french": "Quelque chose cloche. La signification du serment... semble dénaturée.",
						"spanish": "Algo anda mal. El significado del juramento... parece haberse corrompido.",
						"vietnamese": "Có gì đó không ổn. Ý nghĩa của lời thề… dường như đã bị biến chất.",
						"thai": "มีบางอย่างผิดปกติ ความหมายของคำสาบาน… ดูเหมือนจะบิดเบือนไป",
						"hindi": "कुछ गड़बड़ है। शपथ का अर्थ... विकृत हो गया लगता है।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_2",
					"content": {
						"korean": "겨울로써 지킨다니… 이해가 안 돼.",
						"english": "Protect with winter... I don't understand.",
						"japanese": "「冬をもって守る…理解できない。」",
						"chinese": "以冬季守护…无法理解。",
						"french": "Protéger par l'hiver... je ne comprends pas.",
						"spanish": "Proteger con el invierno... no lo entiendo.",
						"vietnamese": "Bảo vệ bằng mùa đông… tôi không hiểu.",
						"thai": "ปกป้องด้วยเหมันต์… ไม่เข้าใจเลย",
						"hindi": "सर्दियों से रक्षा करना... मुझे समझ नहीं आ रहा।"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"speaker": "borealis",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "더 깊은 곳, 맹세의 흔적은 더욱 뚜렷해졌다.",
						"english": "Deeper down, traces of the vow grew clearer.",
						"japanese": "「さらに深き場所、誓いの痕跡はより鮮明になった。」",
						"chinese": "在更深处，誓言的痕迹愈发清晰。",
						"french": "Plus profondément, les traces du serment devinrent plus nettes.",
						"spanish": "Más profundo, las huellas del juramento se hicieron más claras.",
						"vietnamese": "Sâu hơn nữa, dấu vết của lời thề càng rõ ràng.",
						"thai": "ลึกลงไปอีก ร่องรอยของคำสาบานยิ่งชัดเจนขึ้น",
						"hindi": "और गहरे में, शपथ के निशान और स्पष्ट हो गए।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이건 단순한 맹세가 아니야. 대가와 희생이 따르는… 의식에 가까워.",
						"english": "This isn't a mere vow. It's closer to a ritual... demanding a price and sacrifice.",
						"japanese": "「これは単純な誓いではない。代償と犠牲を伴う…儀式に近い。」",
						"chinese": "这不只是简单的誓言。这更像是一种…伴随着代价与牺牲的仪式。",
						"french": "Ce n'est pas un simple serment. C'est plus proche d'un rituel... exigeant un prix et un sacrifice.",
						"spanish": "Esto no es un simple juramento. Se parece más a un ritual... que exige un precio y un sacrificio.",
						"vietnamese": "Đây không phải là một lời thề đơn thuần. Nó gần giống một nghi lễ… đi kèm với cái giá và sự hy sinh.",
						"thai": "นี่ไม่ใช่แค่คำสาบานธรรมดา มันคล้ายพิธีกรรม… ที่ต้องแลกมาด้วยราคาและการเสียสละ",
						"hindi": "यह सिर्फ एक शपथ नहीं है। यह एक अनुष्ठान के करीब है... जिसमें कीमत और बलिदान की आवश्यकता है।"
					},
					"emotion": "sad",
					"speaker": "borealis"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "희생? 대체 누구를 위한 건데?",
						"english": "Sacrifice? For whom, exactly?",
						"japanese": "「犠牲？一体誰のためだ？」",
						"chinese": "牺牲？究竟是为了谁？",
						"french": "Sacrifice ? Pour qui, au juste ?",
						"spanish": "¿Sacrificio? ¿Para quién, exactamente?",
						"vietnamese": "Hy sinh? Rốt cuộc là vì ai?",
						"thai": "เสียสละ? เพื่อใครกันแน่?",
						"hindi": "बलिदान? आखिर किसके लिए?"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "borealis",
					"content": {
						"korean": "땅을 지키기 위한… 하지만 그 방식이 뒤틀린 거지.",
						"english": "To protect the land... but the method is twisted.",
						"japanese": "「地を守るため…しかしその方法が歪められたのだ。」",
						"chinese": "为了守护土地…但方式被扭曲了。",
						"french": "Pour protéger la terre... mais la méthode est tordue.",
						"spanish": "Para proteger la tierra... pero el método está retorcido.",
						"vietnamese": "Để bảo vệ vùng đất… nhưng cách thức đã bị bóp méo.",
						"thai": "เพื่อปกป้องแผ่นดิน… แต่ด้วยวิธีที่บิดเบี้ยว",
						"hindi": "भूमि की रक्षा के लिए... लेकिन तरीका विकृत हो गया है।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_3",
					"emotion": "base",
					"content": {
						"korean": "누군가 이 맹세를 왜곡했어.",
						"english": "Someone twisted this vow.",
						"japanese": "「誰かがこの誓いを歪めたのだ。」",
						"chinese": "有人歪曲了这个誓言。",
						"french": "Quelqu'un a déformé ce serment.",
						"spanish": "Alguien distorsionó este juramento.",
						"vietnamese": "Ai đó đã bóp méo lời thề này.",
						"thai": "มีคนบิดเบือนคำสาบานนี้",
						"hindi": "किसी ने इस शपथ को विकृत कर दिया है।"
					},
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "borealis"
				},
				{
					"speaker": "borealis",
					"type": "speech",
					"content": {
						"korean": "마지막 구절… '우리의 영혼을 바쳐, 영원히 멈추지 않을 겨울을 선사하노라'.",
						"english": "The last verse... 'Sacrificing our souls, we bestow an eternal, ceaseless winter.'",
						"japanese": "「最後の節…『我らの魂を捧げ、永遠に止まらぬ冬を授けよう』。」",
						"chinese": "最后一句…‘献上我们的灵魂，赐予永不停止的冬季’。",
						"french": "Le dernier vers... 'Offrant nos âmes, nous conférons un hiver éternel et incessant'.",
						"spanish": "El último verso... 'Sacrificando nuestras almas, otorgamos un invierno eterno e incesante'.",
						"vietnamese": "Đoạn cuối… 'Hiến dâng linh hồn của chúng ta, ban tặng mùa đông vĩnh cửu không ngừng nghỉ'.",
						"thai": "ท่อนสุดท้าย… 'มอบวิญญาณของเรา เพื่อมอบเหมันต์นิรันดร์ที่ไม่หยุดยั้ง'",
						"hindi": "आखिरी श्लोक... 'अपनी आत्माओं का बलिदान कर, हम एक अनंत, अथक सर्दी प्रदान करते हैं।'"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "영원히… 멈추지 않는 겨울이라고?",
						"english": "An eternal… never-ending winter, you say?",
						"japanese": "永遠に… 終わらない冬だと？",
						"chinese": "永恒的… 不停歇的冬天？",
						"french": "Un hiver éternel… sans fin, vraiment ?",
						"spanish": "¿Un invierno eterno… que nunca termina?",
						"vietnamese": "Mùa đông vĩnh cửu… không bao giờ ngừng sao?",
						"thai": "ฤดูหนาวที่… ไม่มีวันสิ้นสุดงั้นหรือ?",
						"hindi": "हमेशा के लिए… ना ख़त्म होने वाली सर्दी?"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 혹한은 고대 바이킹족의 맹세이자… 저주였어. 끝없는 순환의 증거지.",
						"english": "This bitter cold was an ancient Viking vow… and a curse. Proof of an endless cycle.",
						"japanese": "この酷寒は古代ヴァイキング族の誓いであり… 呪いだった。終わりのない循環の証だ。",
						"chinese": "这严寒是古老维京人的誓言… 也是诅咒。无尽轮回的证据。",
						"french": "Ce froid glacial était le serment des anciens Vikings… et une malédiction. La preuve d'un cycle sans fin.",
						"spanish": "Este frío brutal fue un juramento de los antiguos vikingos… y una maldición. La prueba de un ciclo sin fin.",
						"vietnamese": "Cái lạnh thấu xương này là lời thề của tộc Viking cổ đại… và cũng là một lời nguyền. Bằng chứng của một vòng lặp vô tận.",
						"thai": "ความหนาวเย็นสุดขั้วนี้คือคำสาบานของชาวไวกิ้งโบราณ… และเป็นคำสาป หลักฐานของวัฏจักรที่ไม่มีที่สิ้นสุด",
						"hindi": "यह भीषण ठंड प्राचीन वाइकिंग जनजाति की प्रतिज्ञा थी… और एक अभिशाप भी। एक अंतहीन चक्र का प्रमाण।"
					},
					"emotion": "sad",
					"speaker": "borealis"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그럼 우리는 영원히 이 추위 속에 갇히는 건가?",
						"english": "So, are we forever trapped in this cold?",
						"japanese": "では、我々は永遠にこの寒さの中に囚われるのか？",
						"chinese": "那我们就要永远被困在这寒冷之中吗？",
						"french": "Alors, serons-nous éternellement piégés dans ce froid ?",
						"spanish": "¿Entonces estaremos atrapados para siempre en este frío?",
						"vietnamese": "Vậy là chúng ta sẽ bị mắc kẹt mãi mãi trong cái lạnh này sao?",
						"thai": "ถ้าอย่างนั้น เราจะต้องติดอยู่ในความหนาวนี้ตลอดไปหรือ?",
						"hindi": "तो क्या हम हमेशा के लिए इस ठंड में फंसे रहेंगे?"
					},
					"emotion": "sad",
					"speaker": "character_4"
				},
				{
					"type": "speech",
					"content": {
						"korean": "유적의 깊은 곳에서, 거대한 그림자가 움직였다.",
						"english": "Deep within the ruins, a colossal shadow stirred.",
						"japanese": "遺跡の深淵で、巨大な影が蠢いた。",
						"chinese": "在遗迹深处，一个巨大的影子动了。",
						"french": "Dans les profondeurs des ruines, une ombre colossale s'agita.",
						"spanish": "En lo profundo de las ruinas, una sombra colosal se movió.",
						"vietnamese": "Sâu trong tàn tích, một bóng đen khổng lồ cựa mình.",
						"thai": "ลึกเข้าไปในซากปรักหักพัง เงาขนาดมหึมาได้เคลื่อนไหว",
						"hindi": "खंडहरों की गहराई में, एक विशाल छाया हिली।"
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"emotion": "angry",
					"content": {
						"korean": "하찮은 것들. 이 땅의 운명은 이미 정해졌다!",
						"english": "Insignificant beings. The fate of this land is already sealed!",
						"japanese": "取るに足らない者どもめ。この地の運命は既に定まった！",
						"chinese": "卑微的家伙们。这片土地的命运早已注定！",
						"french": "Êtres insignifiants. Le destin de cette terre est déjà scellé !",
						"spanish": "Seres insignificantes. ¡El destino de esta tierra ya está sellado!",
						"vietnamese": "Lũ hạ đẳng. Số phận của vùng đất này đã được định đoạt!",
						"thai": "พวกไร้ค่า ชะตากรรมของดินแดนนี้ถูกกำหนดไว้แล้ว!",
						"hindi": "तुच्छ प्राणी। इस भूमि का भाग्य पहले से ही तय है!"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "젠장… 여기서 포기할 순 없어!",
						"english": "Damn it... I can't give up here!",
						"japanese": "くそ…ここで諦めるわけにはいかない！",
						"chinese": "该死…我不能在这里放弃！",
						"french": "Mince... Je ne peux pas abandonner ici !",
						"spanish": "Maldita sea... ¡No puedo rendirme aquí!",
						"vietnamese": "Khốn kiếp... Ta không thể bỏ cuộc ở đây!",
						"thai": "ให้ตายสิ... ฉันยอมแพ้ที่นี่ไม่ได้!",
						"hindi": "धिक्कार है... मैं यहाँ हार नहीं मान सकता!"
					}
				},
				{
					"speaker": "character_2",
					"emotion": "angry",
					"content": {
						"korean": "다시… 다시 일어설 거야!",
						"english": "Again... I'll rise again!",
						"japanese": "もう一度…再び立ち上がる！",
						"chinese": "再次…我还会站起来的！",
						"french": "Encore... je me relèverai !",
						"spanish": "De nuevo... ¡me levantaré de nuevo!",
						"vietnamese": "Lại một lần nữa... ta sẽ đứng lên!",
						"thai": "อีกครั้ง... ฉันจะลุกขึ้นอีกครั้ง!",
						"hindi": "फिर से... मैं फिर से उठूंगा!"
					},
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "크아아악… 이건… 진정한 맹세의… 시작일 뿐이다…!",
						"english": "Kuaaaagh… This is… merely the beginning… of the true vow…!",
						"japanese": "くあああ… これは… 真の誓いの… 始まりに過ぎぬ…！",
						"chinese": "啊啊啊啊… 这只是… 真正誓言的… 开始而已…！",
						"french": "Kuaaaagh… Ce n'est… que le début… du véritable serment… !",
						"spanish": "¡Kuaaaagh… Esto es… meramente el comienzo… del verdadero juramento…!",
						"vietnamese": "Khốn kiếp… Đây chỉ là… khởi đầu của… lời thề chân chính…!",
						"thai": "คร้าก… นี่มัน… แค่จุดเริ่มต้น… ของคำสาบานที่แท้จริง…!",
						"hindi": "क्राह… यह तो… सच्ची प्रतिज्ञा का… सिर्फ़ आगाज़ है…!"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "시작이라고? 그럼 아직 멀었단 말인가…",
						"english": "Just the beginning? So, still a long way to go...",
						"japanese": "始まりだと？では、まだ遠いというのか…",
						"chinese": "才刚开始？那还有很长的路要走…",
						"french": "Juste le début ? Alors, il reste encore un long chemin...",
						"spanish": "Sólo el principio? Entonces, aún queda un largo camino...",
						"vietnamese": "Mới chỉ là bắt đầu? Vậy là còn xa lắm sao...",
						"thai": "แค่เริ่มต้นงั้นเหรอ? งั้นก็ยังอีกไกลสินะ...",
						"hindi": "बस शुरुआत है? तो क्या अभी भी बहुत दूर है..."
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "강력한 존재를 쓰러뜨렸지만, 맹세의 진실은 더욱 깊은 어둠 속으로 가라앉았다.",
						"english": "A powerful being was defeated, yet the truth of the oath sank deeper into darkness.",
						"japanese": "強大な存在を打ち破ったが、誓いの真実はさらに深い闇へと沈んでいった。",
						"chinese": "虽然击败了强大的存在，但誓言的真相却沉入了更深的黑暗。",
						"french": "Un être puissant a été vaincu, pourtant la vérité du serment a sombré plus profondément dans les ténèbres.",
						"spanish": "Una poderosa criatura fue derrotada, sin embargo, la verdad del juramento se hundió más profundamente en la oscuridad.",
						"vietnamese": "Một thực thể mạnh mẽ đã bị đánh bại, nhưng sự thật của lời thề lại chìm sâu hơn vào bóng tối.",
						"thai": "กำจัดสิ่งมีชีวิตที่แข็งแกร่งได้แล้ว แต่ความจริงของคำสาบานกลับจมดิ่งลงสู่ความมืดมิดยิ่งขึ้น",
						"hindi": "एक शक्तिशाली अस्तित्व को परास्त कर दिया गया, फिर भी शपथ का सच और गहरे अंधकार में डूब गया।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "borealis"
				},
				{
					"speaker": "borealis",
					"emotion": "sad",
					"content": {
						"korean": "이건 단지… 서곡에 불과해. 진짜 비극은 이제부터 시작될 거야.",
						"english": "This is merely... a prelude. The real tragedy is about to begin.",
						"japanese": "これは単なる…序曲に過ぎない。本当の悲劇はこれから始まるのだ。",
						"chinese": "这只是…序曲。真正的悲剧才刚刚开始。",
						"french": "Ce n'est qu'un... prélude. La véritable tragédie est sur le point de commencer.",
						"spanish": "Esto es meramente... un preludio. La verdadera tragedia está a punto de comenzar.",
						"vietnamese": "Đây chỉ là... khúc dạo đầu. Bi kịch thực sự sẽ bắt đầu từ bây giờ.",
						"thai": "นี่เป็นเพียง… บทโหมโรงเท่านั้น โศกนาฏกรรมที่แท้จริงกำลังจะเริ่มต้นขึ้น",
						"hindi": "यह केवल... एक प्रस्तावना है। असली त्रासदी अब शुरू होने वाली है।"
					},
					"type": "speech"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "마침내, 맹세의 중심부. 더욱 강력해진 기운이 감돌았다.",
						"english": "Finally, the heart of the vow. An even more potent aura emanated.",
						"japanese": "ついに、誓いの中心部。さらに強大な気が渦巻いていた。",
						"chinese": "终于，誓言的核心。更强大的气息弥漫开来。",
						"french": "Enfin, le cœur du serment. Une aura encore plus puissante enveloppait les lieux.",
						"spanish": "Finalmente, el corazón del juramento. Un aura aún más potente emanaba.",
						"vietnamese": "Cuối cùng, trung tâm của lời thề. Một luồng khí mạnh mẽ hơn bao trùm.",
						"thai": "ในที่สุด ใจกลางของคำสาบาน พลังที่แข็งแกร่งยิ่งกว่าได้แผ่ซ่านไปทั่ว",
						"hindi": "अंततः, प्रतिज्ञा का केंद्र। और भी अधिक शक्तिशाली ऊर्जा व्याप्त हो गई।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "어리석은 자들. 이 땅의 맹세를 거스를 셈이냐?",
						"english": "Fools. Do you dare defy this land's vow?",
						"japanese": "愚か者どもめ。この地の誓いを破るつもりか？",
						"chinese": "愚蠢的家伙。你们竟敢违抗这片土地的誓言？",
						"french": "Imbéciles. Osez-vous défier le serment de cette terre ?",
						"spanish": "Necios. ¿Os atrevéis a desafiar el juramento de esta tierra?",
						"vietnamese": "Lũ ngu ngốc. Dám cả gan chống lại lời thề của vùng đất này sao?",
						"thai": "พวกโง่เง่า! กล้าดีอย่างไรมาท้าทายคำสาบานแห่งดินแดนนี้?",
						"hindi": "मूर्खों। क्या तुम इस भूमि की प्रतिज्ञा का उल्लंघन करने का इरादा रखते हो?"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "그 맹세는 왜곡된 저주야! 이제 끝내겠어!",
						"english": "That vow is a twisted curse! I'll end it now!",
						"japanese": "その誓いは歪んだ呪いだ！今ここで終わらせる！",
						"chinese": "那个誓言是被扭曲的诅咒！现在就让它结束！",
						"french": "Ce serment est une malédiction tordue ! Je vais y mettre fin maintenant !",
						"spanish": "¡Ese juramento es una maldición retorcida! ¡Lo terminaré ahora!",
						"vietnamese": "Lời thề đó là một lời nguyền méo mó! Ta sẽ kết thúc nó ngay bây giờ!",
						"thai": "คำสาบานนั่นมันเป็นคำสาปที่บิดเบี้ยว! ข้าจะยุติมันเดี๋ยวนี้!",
						"hindi": "वह प्रतिज्ञा एक विकृत अभिशाप है! मैं इसे अब समाप्त करूँगा!"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "감히… 나 {random_boss}의 힘을 시험하려는가.",
						"english": "How dare you… challenge the might of {random_boss}.",
						"japanese": "まさか… この{random_boss}の力を試そうというのか。",
						"chinese": "竟敢… 考验我 {random_boss} 的力量。",
						"french": "Comment oses-tu… défier la puissance de {random_boss}.",
						"spanish": "¿Osas… desafiar el poder de {random_boss}?",
						"vietnamese": "Dám… thử thách sức mạnh của ta, {random_boss} sao.",
						"thai": "แกกล้าดีอย่างไร… มาท้าทายพลังของข้า {random_boss}",
						"hindi": "हिम्मत कैसे हुई तुम्हारी… {random_boss} की शक्ति को आज़माने की।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "시험은 네가 당할 거야!",
						"english": "You're the one who'll be tested!",
						"japanese": "試されるのはお前の方だ！",
						"chinese": "被考验的将是你！",
						"french": "C'est toi qui vas être mis à l'épreuve !",
						"spanish": "¡El que será puesto a prueba eres tú!",
						"vietnamese": "Kẻ bị thử thách sẽ là ngươi!",
						"thai": "คนที่ถูกทดสอบน่ะ… คือแกต่างหาก!",
						"hindi": "परीक्षा तुम्हारी होगी!"
					},
					"emotion": "angry"
				}
			]
		}
	]
} as const;
