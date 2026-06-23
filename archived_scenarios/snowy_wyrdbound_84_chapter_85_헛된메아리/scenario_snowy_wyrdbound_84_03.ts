export const scenario_snowy_wyrdbound_84_03 = {
	"scenario_id": "snowy_wyrdbound_84_03",
	"order": 3,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"hild": {
			"id": "mon_6f20c96a-bf07-4aae-b37c-da898a8336e8",
			"name": {
				"korean": "힐드",
				"english": "Hild",
				"japanese": "ヒルド",
				"chinese": "希尔德",
				"french": "Hild",
				"spanish": "Hild",
				"vietnamese": "Hild",
				"thai": "ฮิลด์",
				"hindi": "हिल्ड"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/722a86fd-2903-4688-3f04-db8241ed0e00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/af3d96ba-e571-4132-fede-cd415bd15c00/public"
		},
		"eira": {
			"name": "Eira"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"빙하의 속삭임은 환각이 되었다.",
			"고대 거울 조각이 탐험대를 유혹한다.",
			"의심은 씨앗을 뿌리고, 이성은 허물어진다.",
			"누구도 믿을 수 없는 곳에서, 진실은 얼음처럼 차갑다."
		],
		"english": [
			"The glacier's whisper became a hallucination.",
			"Ancient mirror fragments entice the expedition.",
			"Doubt sows its seeds, and reason crumbles.",
			"Where no one can be trusted, truth is cold as ice."
		],
		"japanese": [
			"氷河のささやきは幻覚となった。",
			"古代の鏡の破片が探検隊を誘惑する。",
			"疑念は種を蒔き、理性は崩れ去る。",
			"誰も信じられない場所で、真実は氷のように冷たい。"
		],
		"chinese": [
			"冰川的低语化作了幻觉。",
			"古老的镜子碎片诱惑着探险队。",
			"疑虑播下种子，理性土崩瓦解。",
			"在无人可信之处，真相如冰般寒冷。"
		],
		"french": [
			"Le murmure du glacier devint une hallucination.",
			"Les fragments d'un ancien miroir attirent l'expédition.",
			"Le doute sème ses graines, et la raison s'écroule.",
			"Là où personne ne peut être cru, la vérité est froide comme la glace."
		],
		"spanish": [
			"El susurro del glaciar se convirtió en una alucinación.",
			"Fragmentos de un espejo antiguo seducen a la expedición.",
			"La duda siembra sus semillas, y la razón se desmorona.",
			"Donde no se puede confiar en nadie, la verdad es fría como el hielo."
		],
		"vietnamese": [
			"Lời thì thầm của sông băng trở thành ảo giác.",
			"Những mảnh gương cổ đại quyến rũ đoàn thám hiểm.",
			"Nghi ngờ gieo mầm, lý trí sụp đổ.",
			"Ở nơi không thể tin tưởng ai, sự thật lạnh như băng."
		],
		"thai": [
			"เสียงกระซิบของธารน้ำแข็งกลายเป็นภาพหลอน",
			"ชิ้นส่วนกระจกโบราณล่อลวงคณะสำรวจ",
			"ความสงสัยหว่านเมล็ดพันธุ์ และเหตุผลก็พังทลายลง",
			"ในที่ที่ไม่มีใครไว้ใจได้ ความจริงเย็นชาดุจน้ำแข็ง"
		],
		"hindi": [
			"ग्लेशियर की फुसफुसाहट एक भ्रम बन गई।",
			"प्राचीन दर्पण के टुकड़े अभियान को लुभाते हैं।",
			"संदेह अपने बीज बोता है, और तर्क बिखर जाता है।",
			"जहां किसी पर भरोसा नहीं किया जा सकता, वहां सच्चाई बर्फ जितनी ठंडी होती है।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "고대 빙하 거울의 다음 파편이 모습을 드러냈다.",
						"english": "The next fragment of the ancient glacial mirror has appeared.",
						"japanese": "古代氷河鏡の次の破片が姿を現した。",
						"chinese": "古老冰川之镜的下一块碎片已经出现。",
						"french": "Le prochain fragment de l'ancien miroir glaciaire est apparu.",
						"spanish": "Ha aparecido el siguiente fragmento del antiguo espejo glacial.",
						"vietnamese": "Mảnh vỡ tiếp theo của gương băng cổ đại đã xuất hiện.",
						"thai": "ชิ้นส่วนต่อไปของกระจกธารน้ำแข็งโบราณได้ปรากฏขึ้นแล้ว",
						"hindi": "प्राचीन हिमनद दर्पण का अगला टुकड़ा प्रकट हो गया है।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "이게 다음 파편인가?",
						"english": "Is this the next fragment?",
						"japanese": "これが次の破片か？",
						"chinese": "这是下一块碎片吗？",
						"french": "Est-ce le prochain fragment ?",
						"spanish": "¿Es este el siguiente fragmento?",
						"vietnamese": "Đây là mảnh vỡ tiếp theo ư?",
						"thai": "นี่คือชิ้นส่วนต่อไปหรือเปล่า?",
						"hindi": "क्या यह अगला टुकड़ा है?"
					},
					"type": "speech"
				},
				{
					"speaker": "hild",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						1
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "에이라. 지난번엔 왜 그랬지? 분명히 봤어.",
						"english": "Ayra. Why did you do that last time? I clearly saw it.",
						"japanese": "アイラ。前回はどうしてあんなことをしたんだ？確かに見たぞ。",
						"chinese": "艾拉。上次你为什么那么做？我明明看到了。",
						"french": "Ayra. Pourquoi as-tu fait ça la dernière fois ? Je l'ai clairement vu.",
						"spanish": "Ayra. ¿Por qué hiciste eso la última vez? Lo vi claramente.",
						"vietnamese": "Ayra. Lần trước sao cậu lại làm thế? Tớ đã nhìn thấy rõ ràng.",
						"thai": "ไอรา ทำไมเธอถึงทำแบบนั้นเมื่อครั้งที่แล้ว? ฉันเห็นมันชัดเจนเลยนะ",
						"hindi": "ऐरा। पिछली बार तुमने ऐसा क्यों किया? मैंने साफ देखा था।"
					},
					"speaker": "hild",
					"emotion": "angry"
				},
				{
					"duration_ms": 500,
					"spot": [
						2,
						2
					],
					"speaker": "eira",
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "뭘 말하는 건지 모르겠네. 나도 환각에 시달려.",
						"english": "I don't know what you're talking about. I'm also suffering from hallucinations.",
						"japanese": "何を言ってるのかわからないわ。私も幻覚に苦しんでいるの。",
						"chinese": "我不知道你在说什么。我也在遭受幻觉的困扰。",
						"french": "Je ne sais pas de quoi tu parles. Moi aussi, je souffre d'hallucinations.",
						"spanish": "No sé de qué hablas. Yo también sufro de alucinaciones.",
						"vietnamese": "Tớ không biết cậu đang nói gì. Tớ cũng đang bị ảo giác hành hạ đây.",
						"thai": "ฉันไม่รู้ว่าคุณกำลังพูดถึงอะไร ฉันก็กำลังทรมานจากภาพหลอนเหมือนกัน",
						"hindi": "मुझे नहीं पता तुम क्या कह रहे हो। मैं भी मतिभ्रम से पीड़ित हूं।"
					},
					"emotion": "base",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…환각?",
						"english": "...Hallucinations?",
						"japanese": "…幻覚？",
						"chinese": "……幻觉？",
						"french": "...Hallucinations ?",
						"spanish": "¿...Alucinaciones?",
						"vietnamese": "...Ảo giác?",
						"thai": "...ภาพหลอนเหรอ?",
						"hindi": "...मतिभ्रम?"
					},
					"emotion": "base",
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "hild",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						1
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "거짓말 마! 네가 무언가 숨기고 있어!",
						"english": "Don't lie! You're hiding something!",
						"japanese": "嘘をつくな！何かを隠しているだろう！",
						"chinese": "别撒谎！你藏着什么东西！",
						"french": "Ne mens pas ! Tu caches quelque chose !",
						"spanish": "¡No mientas! ¡Estás ocultando algo!",
						"vietnamese": "Đừng nói dối! Cậu đang giấu điều gì đó!",
						"thai": "อย่าโกหกนะ! คุณกำลังซ่อนอะไรบางอย่างอยู่!",
						"hindi": "झूठ मत बोलो! तुम कुछ छिपा रहे हो!"
					},
					"emotion": "angry",
					"speaker": "hild"
				},
				{
					"type": "speech",
					"content": {
						"korean": "힐드, 진정해. 에이라도 힘들 거야.",
						"english": "Hild, calm down. Aira must be having a hard time too.",
						"japanese": "ヒルダ、落ち着いて。アイラも辛いはずだ。",
						"chinese": "希尔德，冷静。艾拉也一定很艰难。",
						"french": "Hild, calme-toi. Aira doit aussi passer un mauvais moment.",
						"spanish": "Hild, cálmate. Aira también debe estar pasándolo mal.",
						"vietnamese": "Hild, bình tĩnh đi. Aira chắc cũng đang rất khó khăn.",
						"thai": "ฮิลด์ ใจเย็นๆ ไอราเองก็คงลำบากเหมือนกัน",
						"hindi": "हिल्ड, शांत हो जाओ। ऐरा भी मुश्किल में होगी।"
					},
					"emotion": "base",
					"speaker": "character_1"
				},
				{
					"spot": [
						2,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"content": {
						"korean": "모두가 힘들어. 빙하가 우릴 속이고 있어.",
						"english": "Everyone's struggling. The glacier is deceiving us.",
						"japanese": "みんな苦しんでる。氷河が私たちを欺いているんだ。",
						"chinese": "大家都很艰难。冰川正在欺骗我们。",
						"french": "Tout le monde souffre. Le glacier nous trompe.",
						"spanish": "Todos están sufriendo. El glaciar nos está engañando.",
						"vietnamese": "Ai cũng khó khăn. Con sông băng đang lừa dối chúng ta.",
						"thai": "ทุกคนลำบาก ธารน้ำแข็งกำลังหลอกลวงเรา",
						"hindi": "हर कोई संघर्ष कर रहा है। ग्लेशियर हमें धोखा दे रहा है।"
					},
					"emotion": "sad",
					"speaker": "eira"
				},
				{
					"speaker": "character_2",
					"emotion": "base",
					"content": {
						"korean": "이상한 소문이 떠돌아. 우리 중 누군가 예언자와 소통한다고.",
						"english": "Strange rumors are circulating. Someone among us is communicating with the prophet.",
						"japanese": "奇妙な噂が広まっている。私たちの中に預言者と交信する者がいると。",
						"chinese": "奇怪的谣言四处流传。我们中有人与先知沟通。",
						"french": "Des rumeurs étranges circulent. Quelqu'un parmi nous communique avec le prophète.",
						"spanish": "Circulan rumores extraños. Alguien entre nosotros se comunica con el profeta.",
						"vietnamese": "Tin đồn lạ đang lan truyền. Ai đó trong chúng ta đang giao tiếp với nhà tiên tri.",
						"thai": "ข่าวลือแปลกๆ กำลังแพร่สะพัด มีใครบางคนในหมู่พวกเรากำลังสื่อสารกับผู้เผยพระวจนะ",
						"hindi": "अजीब अफवाहें फैल रही हैं। हम में से कोई भविष्यवक्ता से बात कर रहा है।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "…누굴 믿어야 하는 거지.",
						"english": "...Who should I trust?",
						"japanese": "…誰を信じればいいんだ。",
						"chinese": "…我该相信谁？",
						"french": "...Qui dois-je croire ?",
						"spanish": "¿En quién debo confiar?",
						"vietnamese": "...Tôi nên tin ai đây.",
						"thai": "...ฉันควรเชื่อใคร",
						"hindi": "...मुझे किस पर भरोसा करना चाहिए।"
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"speaker": "hild",
					"spot": [
						4,
						1
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 거울 파편… 에이라, 네가 이걸 처음부터 알고 있었지?",
						"english": "This mirror shard... Aira, you knew about this from the start, didn't you?",
						"japanese": "この鏡の破片…アイラ、最初からこれを知っていたのか？",
						"chinese": "这块镜子碎片……艾拉，你从一开始就知道这个，对吗？",
						"french": "Ce tesson de miroir... Aira, tu savais ça depuis le début, n'est-ce pas ?",
						"spanish": "Este trozo de espejo... Aira, tú sabías esto desde el principio, ¿verdad?",
						"vietnamese": "Mảnh gương này... Aira, em đã biết điều này ngay từ đầu, phải không?",
						"thai": "เศษกระจกนี้... ไอรา เธอรู้เรื่องนี้ตั้งแต่แรกแล้วใช่ไหม?",
						"hindi": "यह दर्पण का टुकड़ा... ऐरा, तुम यह शुरुआत से जानती थी, है ना?"
					},
					"speaker": "hild",
					"emotion": "angry"
				},
				{
					"duration_ms": 500,
					"spot": [
						2,
						2
					],
					"speaker": "eira",
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "eira",
					"emotion": "sad",
					"content": {
						"korean": "모든 것이 흐릿해. 나도 내가 뭘 믿어야 할지 모르겠어.",
						"english": "Everything's blurry. I don't even know what I should believe.",
						"japanese": "すべてが曖昧だ。何を信じればいいのか、私にもわからない。",
						"chinese": "一切都很模糊。我也不知道我该相信什么。",
						"french": "Tout est flou. Je ne sais même plus ce que je dois croire.",
						"spanish": "Todo está borroso. Ni siquiera sé en qué debería creer.",
						"vietnamese": "Mọi thứ thật mờ mịt. Tôi cũng không biết mình nên tin vào điều gì.",
						"thai": "ทุกอย่างพร่ามัวไปหมด ฉันไม่รู้ด้วยซ้ำว่าฉันควรจะเชื่ออะไร",
						"hindi": "सब कुछ धुंधला है। मुझे भी नहीं पता कि मुझे किस पर विश्वास करना चाहिए।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "이것이 축복인가, 아니면 저주인가?",
						"english": "Is this a blessing, or a curse?",
						"japanese": "これは祝福なのか、それとも呪いなのか？",
						"chinese": "这是祝福，还是诅咒？",
						"french": "Est-ce une bénédiction, ou une malédiction ?",
						"spanish": "¿Es esto una bendición, o una maldición?",
						"vietnamese": "Đây là một phước lành, hay một lời nguyền?",
						"thai": "นี่คือพรหรือคำสาป?",
						"hindi": "यह आशीर्वाद है, या अभिशाप?"
					},
					"emotion": "base",
					"speaker": "character_3",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "저주야. 네가 여기 있는 게 저주라고!",
						"english": "It's a curse. Your being here is a curse!",
						"japanese": "呪いだ。お前がここにいることが呪いなんだ！",
						"chinese": "这是诅咒。你在这里就是个诅咒！",
						"french": "C'est une malédiction. Que tu sois ici est une malédiction !",
						"spanish": "¡Es una maldición! ¡Que estés aquí es una maldición!",
						"vietnamese": "Là một lời nguyền. Việc ngươi ở đây là một lời nguyền!",
						"thai": "มันเป็นคำสาป การที่เธออยู่ที่นี่คือคำสาป!",
						"hindi": "यह एक अभिशाप है। तुम्हारा यहाँ होना ही एक अभिशाप है!"
					},
					"speaker": "hild",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "점점 더 알 수 없게 돼.",
						"english": "It's getting more and more inscrutable.",
						"japanese": "ますます分からなくなる。",
						"chinese": "越来越难以捉摸了。",
						"french": "C'est de plus en plus impénétrable.",
						"spanish": "Cada vez es más inescrutable.",
						"vietnamese": "Càng ngày càng khó hiểu.",
						"thai": "มันยิ่งเข้าใจยากขึ้นเรื่อยๆ",
						"hindi": "यह और भी अधिक गूढ़ होता जा रहा है।"
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"speaker": "hild",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						1
					]
				},
				{
					"emotion": "angry",
					"speaker": "hild",
					"content": {
						"korean": "모두 속고 있어! 빙하가 아니라 에이라가 우릴 조종하는 거야!",
						"english": "Everyone's being deceived! It's not the glacier, it's Aira who's controlling us!",
						"japanese": "みんな騙されている！氷河じゃなくて、アイラが私たちを操っているんだ！",
						"chinese": "大家都被骗了！不是冰川，是艾拉在操纵我们！",
						"french": "Tout le monde est trompé ! Ce n'est pas le glacier, c'est Aira qui nous manipule !",
						"spanish": "¡Todos están siendo engañados! ¡No es el glaciar, es Aira quien nos está controlando!",
						"vietnamese": "Mọi người đều bị lừa! Không phải sông băng, mà là Aira đang điều khiển chúng ta!",
						"thai": "ทุกคนถูกหลอก! ไม่ใช่ธารน้ำแข็ง แต่เป็นไอราที่กำลังควบคุมเรา!",
						"hindi": "हर कोई धोखा खा रहा है! यह ग्लेशियर नहीं, ऐरा है जो हमें नियंत्रित कर रही है!"
					},
					"type": "speech"
				},
				{
					"speaker": "eira",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "eira",
					"content": {
						"korean": "…힐드가 많이 지쳤나 보네. 안타깝다.",
						"english": "Hild looks exhausted. What a shame.",
						"japanese": "…ヒルダ、かなり疲れてるみたいだね。残念だ。",
						"chinese": "…希尔德好像很累了。真遗憾。",
						"french": "…Hild semble très fatiguée. C'est dommage.",
						"spanish": "…Hild parece muy cansada. Qué lástima.",
						"vietnamese": "…Hild có vẻ rất mệt mỏi. Thật đáng tiếc.",
						"thai": "…ฮิลด์ดูเหนื่อยมากเลยนะ น่าเสียดายจัง",
						"hindi": "…हिल्ड बहुत थकी हुई लग रही है। अफ़सोस।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_4",
					"content": {
						"korean": "내 기억이… 점점 희미해져.",
						"english": "My memories… are fading.",
						"japanese": "私の記憶が…だんだん薄れていく。",
						"chinese": "我的记忆…正在逐渐模糊。",
						"french": "Ma mémoire… s'estompe peu à peu.",
						"spanish": "Mis recuerdos… se están desvaneciendo.",
						"vietnamese": "Ký ức của tôi… đang dần mờ đi.",
						"thai": "ความทรงจำของฉัน… กำลังเลือนหายไป",
						"hindi": "मेरी यादें… धुंधली होती जा रही हैं।"
					}
				},
				{
					"content": {
						"korean": "여기서 돌아갈 수 있을까?",
						"english": "Can we ever return from here?",
						"japanese": "ここから戻れるだろうか？",
						"chinese": "我们能从这里回去吗？",
						"french": "Pouvons-nous revenir en arrière d'ici ?",
						"spanish": "¿Podremos volver de aquí?",
						"vietnamese": "Chúng ta có thể quay lại từ đây không?",
						"thai": "เราจะกลับไปจากที่นี่ได้ไหม?",
						"hindi": "क्या हम यहाँ से वापस जा सकते हैं?"
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"duration_ms": 400,
					"type": "direction",
					"action": "exit",
					"speaker": "hild",
					"direction": "down"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "탐험대는 서로에게 날 선 시선을 던졌다.",
						"english": "The explorers exchanged wary glances.",
						"japanese": "探検隊は互いに鋭い視線を向けた。",
						"chinese": "探险队成员们互相投去警惕的目光。",
						"french": "Les membres de l'expédition se lancèrent des regards perçants.",
						"spanish": "Los miembros de la expedición se lanzaron miradas afiladas.",
						"vietnamese": "Các thành viên đoàn thám hiểm trao nhau những cái nhìn sắc lạnh.",
						"thai": "คณะสำรวจต่างมองหน้ากันด้วยสายตาที่เฉียบคม",
						"hindi": "अभियान दल के सदस्यों ने एक-दूसरे पर तीखी नज़र डाली।"
					}
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"speaker": "hild",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						1
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "에이라! 저것 봐! 저 괴물도 네가 부른 거지?",
						"english": "Aira! Look! You summoned that monster too, didn't you?",
						"japanese": "アイラ！あれを見ろ！あの怪物も、お前が呼んだんだろう？",
						"chinese": "艾拉！看那个！那个怪物也是你召唤来的吧？",
						"french": "Aira ! Regarde ça ! Tu as invoqué ce monstre aussi, n'est-ce pas ?",
						"spanish": "¡Aira! ¡Mira eso! ¡Tú también invocaste a ese monstruo, ¿verdad?!",
						"vietnamese": "Aira! Nhìn kìa! Con quái vật đó cũng là do ngươi gọi đến, đúng không?",
						"thai": "ไอรา! ดูนั่นสิ! สัตว์ประหลาดตัวนั้นก็เป็นฝีมือแกเรียกมาใช่ไหม?",
						"hindi": "ऐरा! उसे देखो! उस राक्षस को भी तुमने ही बुलाया था, है ना?"
					},
					"speaker": "hild",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "인간… 불신은 너희의 독.",
						"english": "Humans… distrust is your poison.",
						"japanese": "人間…不信はそなたらの毒だ。",
						"chinese": "人类…不信任是你们的毒药。",
						"french": "Humains… la méfiance est votre poison.",
						"spanish": "Humanos… la desconfianza es vuestro veneno.",
						"vietnamese": "Loài người… sự ngờ vực là chất độc của các ngươi.",
						"thai": "มนุษย์… ความไม่เชื่อใจคือยาพิษของพวกเจ้า",
						"hindi": "मनुष्य… अविश्वास तुम्हारा ज़हर है।"
					}
				},
				{
					"speaker": "eira",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						2
					]
				},
				{
					"content": {
						"korean": "괴물… 나도 저건 처음 봐.",
						"english": "Monster… Even I haven't seen that before.",
						"japanese": "怪物…私もあれは初めて見る。",
						"chinese": "怪物…我也没见过那个。",
						"french": "Un monstre… Je n'ai jamais vu ça non plus.",
						"spanish": "Un monstruo… Ni yo he visto eso antes.",
						"vietnamese": "Quái vật… Ta cũng chưa từng thấy nó.",
						"thai": "สัตว์ประหลาด… ฉันก็เพิ่งเคยเห็นมันเป็นครั้งแรก",
						"hindi": "राक्षस… मैंने भी उसे पहली बार देखा है।"
					},
					"emotion": "base",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이게 다 무슨 소리야…!",
						"english": "What is all this…!",
						"japanese": "これは一体どういうことだ…！",
						"chinese": "这到底是怎么回事…！",
						"french": "Qu'est-ce que c'est que tout ça…!",
						"spanish": "¡¿Qué significa todo esto…?!",
						"vietnamese": "Tất cả những chuyện này là sao chứ…!",
						"thai": "นี่มันเรื่องอะไรกันเนี่ย…!",
						"hindi": "ये सब क्या बकवास है…!"
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "서로를 믿지 못하는 너희… 부서져라.",
						"english": "You who cannot trust each other… shatter.",
						"japanese": "互いを信じられないお前たち…砕け散れ。",
						"chinese": "你们这些无法相互信任的人…毁灭吧。",
						"french": "Vous qui ne pouvez pas vous faire confiance… soyez brisés.",
						"spanish": "Vosotros que no os podéis fiar… destruíos.",
						"vietnamese": "Các ngươi, những kẻ không thể tin tưởng lẫn nhau… hãy tan biến đi.",
						"thai": "พวกเจ้าที่ไม่เชื่อใจกัน… จงแตกสลายไปซะ",
						"hindi": "तुम जो एक-दूसरे पर भरोसा नहीं करते… टूट जाओ।"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "sad",
					"content": {
						"korean": "결국… 아무것도 변하지 않아… 너희는… 서로를… 죽일 테니…",
						"english": "In the end… nothing changes… you will… kill each other…",
						"japanese": "結局…何も変わらない…お前たちは…互いを…殺し合うだろうから…",
						"chinese": "最终…什么都不会改变…你们会…自相残杀的…",
						"french": "Finalement… rien ne changera… vous vous… tuerez les uns les autres…",
						"spanish": "Al final… nada cambia… os… mataréis los unos a los otros…",
						"vietnamese": "Cuối cùng… sẽ không có gì thay đổi… các ngươi sẽ… tự giết lẫn nhau…",
						"thai": "ในที่สุด… ก็ไม่มีอะไรเปลี่ยนแปลง… พวกเจ้าจะ… ฆ่ากันเอง…",
						"hindi": "आखिर में… कुछ भी नहीं बदलेगा… तुम सब… एक-दूसरे को… मार डालोगे…"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "끝났나… 하지만… 뭐가 남았지?",
						"english": "Is it over...? But what remains?",
						"japanese": "終わったのか… でも… 何が残った？",
						"chinese": "结束了吗… 但是… 还剩下什么？",
						"french": "C'est fini...? Mais qu'est-ce qui reste ?",
						"spanish": "¿Se acabó…? Pero… ¿qué queda?",
						"vietnamese": "Xong rồi sao… Nhưng… còn lại gì?",
						"thai": "จบแล้วหรือ… แต่… เหลืออะไรอยู่?",
						"hindi": "क्या यह खत्म हो गया… लेकिन… क्या बचा है?"
					}
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "eira",
					"spot": [
						2,
						2
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "eira",
					"emotion": "base",
					"content": {
						"korean": "…이젠 정말 혼란스럽네. 나도 쉬어야겠어.",
						"english": "...Now I'm truly confused. I need to rest too.",
						"japanese": "…もう本当に混乱してる。私も休まないと。",
						"chinese": "…现在我真的很困惑。我也该休息了。",
						"french": "...Maintenant je suis vraiment confus. Je dois me reposer aussi.",
						"spanish": "...Ahora estoy realmente confundido. Yo también necesito descansar.",
						"vietnamese": "...Giờ tôi thực sự bối rối. Tôi cũng cần nghỉ ngơi.",
						"thai": "...ตอนนี้ฉันสับสนจริงๆ ฉันก็ต้องพักผ่อนด้วย.",
						"hindi": "...अब मैं सचमुच भ्रमित हूँ। मुझे भी आराम करना चाहिए।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "탐험대는 다음 파편을 향해 발걸음을 옮겼다. 불신의 씨앗은 더욱 깊이 박혔다.",
						"english": "The expedition moved towards the next shard. The seed of distrust was planted deeper.",
						"japanese": "探検隊は次の破片へと足を進めた。不信の種はさらに深く根付いた。",
						"chinese": "探险队向下一块碎片迈进。不信任的种子已深深扎根。",
						"french": "L'expédition se dirigea vers le fragment suivant. La graine de la méfiance s'enfonça plus profondément.",
						"spanish": "La expedición avanzó hacia el siguiente fragmento. La semilla de la desconfianza se arraigó más profundamente.",
						"vietnamese": "Đoàn thám hiểm tiến về phía mảnh vỡ tiếp theo. Hạt giống ngờ vực đã cắm sâu hơn.",
						"thai": "คณะสำรวจเคลื่อนพลไปยังชิ้นส่วนถัดไป เมล็ดพันธุ์แห่งความไม่ไว้วางใจได้หยั่งรากลึกยิ่งขึ้น.",
						"hindi": "अभियान दल अगले टुकड़े की ओर बढ़ गया। अविश्वास का बीज और गहरा बोया गया।"
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "서로에게 칼을 겨눈 채… 쓰러지는구나.",
						"english": "With blades drawn against each other... they fall.",
						"japanese": "互いに剣を向けたまま… 倒れていくのか。",
						"chinese": "刀剑相向… 倒下了。",
						"french": "Avec des lames pointées l'une contre l'autre... ils tombent.",
						"spanish": "Con las espadas desenvainadas el uno contra el otro… caen.",
						"vietnamese": "Hướng kiếm vào nhau… rồi gục ngã.",
						"thai": "พร้อมดาบที่จ่อเข้าหากัน… พวกเขาล้มลง.",
						"hindi": "एक-दूसरे पर तलवारें ताने… वे गिर जाते हैं।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아직… 끝나지 않았어. 진실을… 찾아야 해.",
						"english": "It's not over yet... I must find the truth.",
						"japanese": "まだ… 終わってない。真実を… 見つけなければ。",
						"chinese": "还没… 结束。我必须… 找到真相。",
						"french": "Ce n'est pas encore fini... Je dois trouver la vérité.",
						"spanish": "Todavía no ha terminado… Debo encontrar la verdad.",
						"vietnamese": "Vẫn chưa… kết thúc. Tôi phải… tìm ra sự thật.",
						"thai": "ยังไม่… จบ. ฉันต้อง… ค้นหาความจริง.",
						"hindi": "अभी… खत्म नहीं हुआ है। मुझे… सच खोजना है।"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"spot": [
						2,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "eira"
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "…역시 빙하의 뜻은 위대하네.",
						"english": "...Indeed, the will of the glacier is grand.",
						"japanese": "…やはり氷河の意志は偉大だ。",
						"chinese": "…果然，冰川的意志是伟大的。",
						"french": "...En effet, la volonté du glacier est grandiose.",
						"spanish": "...De hecho, la voluntad del glaciar es grandiosa.",
						"vietnamese": "...Quả nhiên, ý chí của sông băng thật vĩ đại.",
						"thai": "…แท้จริงแล้ว เจตนารมณ์ของธารน้ำแข็งนั้นยิ่งใหญ่.",
						"hindi": "...निश्चित रूप से, ग्लेशियर की इच्छा महान है।"
					},
					"type": "speech"
				}
			],
			"id": 15
		}
	]
} as const;
