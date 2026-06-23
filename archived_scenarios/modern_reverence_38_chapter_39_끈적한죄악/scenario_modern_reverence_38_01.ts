export const scenario_modern_reverence_38_01 = {
	"scenario_id": "modern_reverence_38_01",
	"order": 1,
	"act": "intro",
	"theme": "modern",
	"actors": {
		"lin": {
			"id": "mon_d036a884-3dde-472c-9fe7-c4807643860f",
			"name": {
				"korean": "린",
				"english": "Lin",
				"japanese": "リン",
				"chinese": "琳",
				"french": "Lin",
				"spanish": "Lin",
				"vietnamese": "Lin",
				"thai": "ลิน",
				"hindi": "लिन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a095dd66-1857-4f44-68b0-2ece83006d00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/05b02694-f1ed-4e4c-b7ca-fb5b74a48900/public"
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
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "도시의 밤은 늘 불안했다.",
						"english": "The city nights were always unsettling.",
						"japanese": "街の夜はいつも不安だった。",
						"chinese": "城市的夜晚总是令人不安。",
						"french": "Les nuits de la ville étaient toujours inquiétantes.",
						"spanish": "Las noches de la ciudad siempre fueron inquietantes.",
						"vietnamese": "Đêm thành phố luôn bất an.",
						"thai": "ค่ำคืนในเมืองมักจะน่าหวาดหวั่นเสมอ",
						"hindi": "शहर की रातें हमेशा परेशान करने वाली होती थीं।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "오늘도 누가 사라졌지?",
						"english": "Who disappeared today too?",
						"japanese": "今日も誰かが消えたのか？",
						"chinese": "今天又有人失踪了吗？",
						"french": "Encore quelqu'un a disparu aujourd'hui ?",
						"spanish": "¿También desapareció alguien hoy?",
						"vietnamese": "Hôm nay lại có ai đó biến mất ư?",
						"thai": "วันนี้ใครหายไปอีกแล้ว?",
						"hindi": "आज भी कोई गायब हो गया?"
					}
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "lin",
					"spot": [
						4,
						3
					]
				},
				{
					"content": {
						"korean": "당신도 찾고 있군요?",
						"english": "You're looking for it too, aren't you?",
						"japanese": "あなたも探しているんですか？",
						"chinese": "你也在找吗？",
						"french": "Vous aussi, vous cherchez ?",
						"spanish": "¿Tú también estás buscando?",
						"vietnamese": "Bạn cũng đang tìm kiếm phải không?",
						"thai": "คุณก็กำลังหาอยู่เหมือนกันใช่ไหม?",
						"hindi": "आप भी ढूंढ रहे हैं, है ना?"
					},
					"speaker": "lin",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "당신은?",
						"english": "And you are?",
						"japanese": "あなたは？",
						"chinese": "你是？",
						"french": "Et vous ?",
						"spanish": "¿Y usted?",
						"vietnamese": "Còn bạn?",
						"thai": "คุณล่ะ?",
						"hindi": "आप कौन हैं?"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "기자 린이에요. 이 도시… 뭔가 잘못됐어요.",
						"english": "I'm Reporter Lynn. This city... something's wrong with it.",
						"japanese": "記者リンです。この街…何かがおかしい。",
						"chinese": "我是记者林恩。这座城市……出问题了。",
						"french": "Je suis la journaliste Lynn. Cette ville… quelque chose ne va pas.",
						"spanish": "Soy la periodista Lynn. Esta ciudad... algo anda mal.",
						"vietnamese": "Tôi là phóng viên Lynn. Thành phố này... có gì đó không ổn.",
						"thai": "ฉันคือนักข่าวลินน์ เมืองนี้... มีบางอย่างผิดปกติ",
						"hindi": "मैं रिपोर्टर लिन हूँ। इस शहर में... कुछ गड़बड़ है।"
					},
					"speaker": "lin"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "사라지는 사람들, 그리고… 이 끈적한 흔적들.",
						"english": "Vanishing people, and... these sticky traces.",
						"japanese": "消えゆく人々、そして…このねばねばした痕跡。",
						"chinese": "消失的人们，还有……这些黏腻的痕迹。",
						"french": "Des gens qui disparaissent, et... ces traces collantes.",
						"spanish": "Gente que desaparece, y... estas huellas pegajosas.",
						"vietnamese": "Những người biến mất, và... những dấu vết dính nhớp này.",
						"thai": "ผู้คนที่หายไป และ... ร่องรอยเหนียวเหนอะหนะพวกนี้",
						"hindi": "गायब होते लोग, और... ये चिपचिपे निशान।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						3
					],
					"speaker": "lin",
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이상하죠? 이 점액질. 달콤한 악취도.",
						"english": "Strange, isn't it? This slime. And that sweet stench.",
						"japanese": "おかしいですね？この粘液。甘い悪臭も。",
						"chinese": "奇怪吧？这黏液。还有那股甜腥味。",
						"french": "Étrange, n'est-ce pas ? Cette substance gluante. Et cette douce puanteur.",
						"spanish": "¿Extraño, verdad? Esta sustancia viscosa. Y ese dulce hedor.",
						"vietnamese": "Kỳ lạ, phải không? Chất nhờn này. Cả mùi hôi ngọt đó nữa.",
						"thai": "แปลกจริง ๆ ใช่ไหม? เมือกนี่. และกลิ่นเหม็นหวานนั่นอีก.",
						"hindi": "अजीब है ना? यह चिपचिपा पदार्थ। और वह मीठी बदबू भी।"
					},
					"speaker": "lin"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "시체 썩는 냄새 같기도 해.",
						"english": "It's like the smell of a rotting corpse.",
						"japanese": "死体が腐った匂いみたいだ。",
						"chinese": "闻起来像尸体腐烂的味道。",
						"french": "On dirait l'odeur d'un cadavre en décomposition.",
						"spanish": "También huele a carne podrida.",
						"vietnamese": "Cũng giống mùi xác chết thối rữa.",
						"thai": "เหมือนกลิ่นศพเน่าเลย.",
						"hindi": "लाश सड़ने जैसी गंध भी है।"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "더 끔찍한 건… 이 흔적이 늘어나고 있다는 거예요.",
						"english": "What's more terrifying is… these traces are increasing.",
						"japanese": "もっと恐ろしいのは…この痕跡が増えていることです。",
						"chinese": "更可怕的是…这些痕迹正在增多。",
						"french": "Le plus terrifiant, c'est que… ces traces augmentent.",
						"spanish": "Lo más horrible es que… estas huellas están aumentando.",
						"vietnamese": "Điều kinh khủng hơn là… những dấu vết này đang gia tăng.",
						"thai": "ที่น่ากลัวกว่านั้นคือ… ร่องรอยพวกนี้กำลังเพิ่มขึ้น.",
						"hindi": "और भी भयानक बात यह है कि… ये निशान बढ़ते जा रहे हैं।"
					},
					"speaker": "lin"
				},
				{
					"content": {
						"korean": "마치 도시가… 뭔가를 뱉어내거나, 빨아들이는 것처럼.",
						"english": "As if the city is… spitting something out, or sucking something in.",
						"japanese": "まるで都市が…何かを吐き出したり、吸い込んだりしているかのように。",
						"chinese": "就像这座城市…正在吐出什么，或是吸入什么一样。",
						"french": "Comme si la ville… recrachait quelque chose, ou aspirait quelque chose.",
						"spanish": "Como si la ciudad… estuviera escupiendo algo, o tragándose algo.",
						"vietnamese": "Cứ như thể thành phố… đang nhả ra hoặc nuốt vào thứ gì đó.",
						"thai": "เหมือนกับว่าเมืองนี้… กำลังคายอะไรบางอย่างออกมา หรือดูดอะไรบางอย่างเข้าไป.",
						"hindi": "जैसे शहर… कुछ उगल रहा है, या कुछ निगल रहा है।"
					},
					"speaker": "lin",
					"type": "speech",
					"emotion": "angry"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "lin",
					"spot": [
						2,
						3
					]
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "제 친구도 지난주에 사라졌어요. 아무 흔적도 없이.",
						"english": "My friend also disappeared last week. Without a trace.",
						"japanese": "私の友人も先週消えました。何の痕跡もなく。",
						"chinese": "我的朋友上周也失踪了。杳无音信。",
						"french": "Mon ami a aussi disparu la semaine dernière. Sans laisser de trace.",
						"spanish": "Mi amigo también desapareció la semana pasada. Sin dejar rastro.",
						"vietnamese": "Bạn tôi cũng biến mất tuần trước. Không một dấu vết.",
						"thai": "เพื่อนของฉันก็หายไปเมื่อสัปดาห์ที่แล้ว ไม่มีร่องรอยเลย.",
						"hindi": "मेरा दोस्त भी पिछले हफ़्ते ग़ायब हो गया। बिना किसी निशान के।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "Reverence가 연관되어 있을까?",
						"english": "Could Reverence be involved?",
						"japanese": "Reverenceが関係しているのか？",
						"chinese": "Reverence会和这事有关吗？",
						"french": "Reverence pourrait être impliquée ?",
						"spanish": "¿Podría estar implicado Reverence?",
						"vietnamese": "Liệu Reverence có liên quan không?",
						"thai": "Reverence อาจเกี่ยวข้องด้วยไหม?",
						"hindi": "क्या Reverence इसमें शामिल हो सकता है?"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "그들은 '도시 재생'을 말하지만… 제가 본 건 파괴뿐이에요.",
						"english": "They talk about 'urban renewal'… but all I've seen is destruction.",
						"japanese": "彼らは「都市再生」と言うけれど…私が見たのは破壊だけだ。",
						"chinese": "他们说的是“城市复兴”…但我看到的只有破坏。",
						"french": "Ils parlent de 'rénovation urbaine'… mais tout ce que j'ai vu, c'est de la destruction.",
						"spanish": "Hablan de 'renovación urbana'… pero todo lo que he visto es destrucción.",
						"vietnamese": "Họ nói về 'tái tạo đô thị'… nhưng tất cả những gì tôi thấy chỉ là sự phá hủy.",
						"thai": "พวกเขาพูดถึง 'การฟื้นฟูเมือง'… แต่สิ่งที่ฉันเห็นมีแต่การทำลายล้าง.",
						"hindi": "वे 'शहरी नवीनीकरण' की बात करते हैं… लेकिन मैंने तो सिर्फ़ तबाही देखी है।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이 모든 게… 연결되어 있을 거예요.",
						"english": "All of this… must be connected.",
						"japanese": "これらすべてが…繋がっているはずだ。",
						"chinese": "所有这些…都应该有所关联。",
						"french": "Tout cela… doit être lié.",
						"spanish": "Todo esto… debe estar conectado.",
						"vietnamese": "Tất cả những điều này… chắc chắn có liên quan đến nhau.",
						"thai": "ทั้งหมดนี้… ต้องเชื่อมโยงกันแน่ๆ.",
						"hindi": "यह सब… जुड़ा हुआ होगा।"
					},
					"speaker": "lin"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "lin",
					"spot": [
						3,
						3
					]
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "여기 보세요. 이 기록들… Reverence의 초기 실험 보고서예요.",
						"english": "Look here. These records… are Reverence's early experiment reports.",
						"japanese": "ここを見てください。この記録…Reverenceの初期実験報告書です。",
						"chinese": "看这里。这些记录…是Reverence的早期实验报告。",
						"french": "Regardez ici. Ces dossiers… sont les rapports des premières expériences de Reverence.",
						"spanish": "Mira aquí. Estos registros… son los informes de los primeros experimentos de Reverence.",
						"vietnamese": "Nhìn đây. Những ghi chép này… là báo cáo thử nghiệm ban đầu của Reverence.",
						"thai": "ดูนี่สิ. บันทึกพวกนี้… เป็นรายงานการทดลองเบื้องต้นของ Reverence.",
						"hindi": "यहाँ देखो। ये रिकॉर्ड… Reverence की शुरुआती प्रयोग रिपोर्टें हैं।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "'통합', '일체화'… 무슨 뜻이지?",
						"english": "'Integration', 'Unification'… What do they mean?",
						"japanese": "「統合」、「一体化」…どういう意味だ？",
						"chinese": "“整合”，“一体化”…什么意思？",
						"french": "'Intégration', 'Unification'… Qu'est-ce que ça veut dire ?",
						"spanish": "'Integración', 'Unificación'… ¿Qué significa?",
						"vietnamese": "'Hợp nhất', 'Đồng hóa'… Nghĩa là gì?",
						"thai": "'การรวมเข้าด้วยกัน', 'การเป็นหนึ่งเดียว'… หมายความว่ายังไง?",
						"hindi": "'एकीकरण', 'एकीकृत'… इसका क्या मतलब है?"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "사람의 정신을… 하나로 만든다는 내용이에요.",
						"english": "It's about merging human minds... into one.",
						"japanese": "人の精神を…一つにするという内容です。",
						"chinese": "内容是…将人的精神合而为一。",
						"french": "Il s'agit de fusionner les esprits humains… en un seul.",
						"spanish": "Trata de unir las mentes humanas… en una sola.",
						"vietnamese": "Đó là về việc hợp nhất tâm trí con người... thành một.",
						"thai": "มันเกี่ยวกับการรวมจิตใจของมนุษย์... ให้เป็นหนึ่งเดียว",
						"hindi": "यह इंसानों की आत्माओं को… एक करने के बारे में है。"
					},
					"speaker": "lin"
				},
				{
					"content": {
						"korean": "우리는… 모두 그의 일부가 될지도 몰라요. 도시 전체가.",
						"english": "We… might all become a part of him. The entire city.",
						"japanese": "私たちも…皆、彼の一部になるかもしれません。都市全体が。",
						"chinese": "我们…可能都会成为他的一部分。整个城市。",
						"french": "Nous… pourrions tous devenir une partie de lui. La ville entière.",
						"spanish": "Todos… podríamos convertirnos en parte de él. La ciudad entera.",
						"vietnamese": "Chúng ta… có thể sẽ trở thành một phần của hắn. Cả thành phố.",
						"thai": "เรา... อาจจะกลายเป็นส่วนหนึ่งของเขาได้ ทั้งเมืองเลย",
						"hindi": "हम… सब उसके हिस्से बन सकते हैं। पूरा शहर।"
					},
					"speaker": "lin",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "막아야 해.",
						"english": "We have to stop it.",
						"japanese": "止めなければ。",
						"chinese": "必须阻止它。",
						"french": "Il faut l'arrêter.",
						"spanish": "Tenemos que detenerlo.",
						"vietnamese": "Phải ngăn chặn.",
						"thai": "ต้องหยุดมัน",
						"hindi": "इसे रोकना होगा।"
					},
					"speaker": "character_any"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 것들… 너희는 그저 먹이일 뿐.",
						"english": "Foolish mortals... You are but prey.",
						"japanese": "愚かな者たちめ… お前たちはただの餌に過ぎない。",
						"chinese": "愚蠢的东西… 你们不过是猎物。",
						"french": "Stupides créatures… Vous n'êtes que des proies.",
						"spanish": "Estúpidos… Solo sois presa.",
						"vietnamese": "Đồ ngu ngốc… Các ngươi chỉ là con mồi.",
						"thai": "เจ้าพวกโง่... พวกเจ้าเป็นแค่เหยื่อเท่านั้น",
						"hindi": "मूर्ख प्राणी… तुम तो बस शिकार हो।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…아직 끝나지 않았어!",
						"english": "...It's not over yet!",
						"japanese": "…まだ終わってない！",
						"chinese": "……还没结束！",
						"french": "...Ce n'est pas encore fini !",
						"spanish": "...¡Aún no ha terminado!",
						"vietnamese": "…Chưa kết thúc đâu!",
						"thai": "...ยังไม่จบนะ!",
						"hindi": "...अभी खत्म नहीं हुआ है!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "다음에는… 온전히 나에게 흡수될 거다.",
						"english": "Next time... you'll be fully absorbed by me.",
						"japanese": "次は… 私に完全に吸収されるだろう。",
						"chinese": "下一次… 你们会被我完全吸收。",
						"french": "La prochaine fois… vous serez entièrement absorbés par moi.",
						"spanish": "La próxima vez… seréis completamente absorbidos por mí.",
						"vietnamese": "Lần tới… các ngươi sẽ hoàn toàn bị ta hấp thụ.",
						"thai": "ครั้งหน้า... เจ้าจะถูกข้าดูดกลืนไปทั้งหมด",
						"hindi": "अगली बार… तुम मुझमें पूरी तरह समा जाओगे।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "크윽… 아직 끝나지 않았어…",
						"english": "Ugh… It's not over yet…",
						"japanese": "くっ…まだ終わっていない…",
						"chinese": "呃…还没结束…",
						"french": "Argh… Ce n'est pas encore fini…",
						"spanish": "Ugh… Todavía no ha terminado…",
						"vietnamese": "Khụ… Vẫn chưa kết thúc…",
						"thai": "อึก... ยังไม่จบแค่นี้หรอก...",
						"hindi": "उफ़… यह अभी खत्म नहीं हुआ है…"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "우리는… 어디에나… 있다…",
						"english": "We... are... everywhere...",
						"japanese": "我々は… あらゆる場所に… いる…",
						"chinese": "我们… 无处不在…",
						"french": "Nous… sommes… partout…",
						"spanish": "Estamos… en todas partes…",
						"vietnamese": "Chúng ta… ở khắp mọi nơi…",
						"thai": "เรา… อยู่… ทุกหนแห่ง…",
						"hindi": "हम… हर जगह… हैं…"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "무슨 소리지?",
						"english": "What was that?",
						"japanese": "何だ？",
						"chinese": "什么声音？",
						"french": "Qu'est-ce que c'était ?",
						"spanish": "¿Qué fue eso?",
						"vietnamese": "Gì vậy?",
						"thai": "เสียงอะไรน่ะ?",
						"hindi": "यह क्या था?"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "'랜덤_보스'는 끈적한 점액과 함께 스러졌다. 그러나 불안감은 가시지 않았다.",
						"english": "'Random_Boss' crumbled into a sticky goo. Yet, the unease lingered.",
						"japanese": "「ランダム_ボス」は粘液と共に崩れ去った。だが、不安は消えなかった。",
						"chinese": "“随机_Boss”化作粘稠的黏液消散了。然而，不安感并未消退。",
						"french": "'Boss_Aléatoire' s'est effondré en une gelée visqueuse. Pourtant, l'inquiétude persistait.",
						"spanish": "El 'Jefe_Aleatorio' se desmoronó en un limo pegajoso. Aun así, la inquietud perduró.",
						"vietnamese": "'Trùm_Ngẫu_Nhiên' tan chảy thành chất nhầy dính. Tuy nhiên, sự bất an vẫn còn đó.",
						"thai": "'บอส_สุ่ม' สลายเป็นเมือกเหนียว แต่ความรู้สึกไม่สบายใจยังคงอยู่",
						"hindi": "'रैंडम_बॉस' चिपचिपी कीचड़ में ढह गया। फिर भी, बेचैनी बनी रही।"
					}
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "도시는 여전히 달콤한 악취를 풍겼다. 그림자는 더욱 깊숙이 파고들고 있었다.",
						"english": "The city still reeked of a sweet decay. Shadows delved deeper.",
						"japanese": "都市は甘い悪臭を放ち続けていた。影はさらに深く潜り込んでいた。",
						"chinese": "城市依然弥漫着甜腻的恶臭。阴影正在更深处蔓延。",
						"french": "La ville empestait toujours une douce puanteur. Les ombres s'enfonçaient plus profondément.",
						"spanish": "La ciudad seguía apestando a una dulce podredumbre. Las sombras se adentraban más.",
						"vietnamese": "Thành phố vẫn nồng nặc mùi thối ngọt. Bóng tối ngày càng lún sâu.",
						"thai": "เมืองยังคงมีกลิ่นเหม็นหวานอบอวล เงาคลืบคลานลึกลงไปอีก",
						"hindi": "शहर से अभी भी एक मीठी बदबू आ रही थी। परछाइयाँ और गहरी होती जा रही थीं।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "마침내 그림자의 심장부.",
						"english": "Finally, the heart of the shadow.",
						"japanese": "ついに、影の核心部へ。",
						"chinese": "终于，抵达了阴影的核心。",
						"french": "Enfin, le cœur de l'ombre.",
						"spanish": "Finalmente, el corazón de la sombra.",
						"vietnamese": "Cuối cùng, trung tâm của bóng tối.",
						"thai": "ในที่สุด ใจกลางของเงา",
						"hindi": "अंत में, छाया का हृदय।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "여기까지 오다니… 제법이군.",
						"english": "To come this far… Impressive.",
						"japanese": "ここまで来るとは…大したものだ。",
						"chinese": "能走到这里…真有两下子。",
						"french": "Arriver jusqu'ici… C'est impressionnant.",
						"spanish": "Haber llegado tan lejos… Impresionante.",
						"vietnamese": "Đến được đây… cũng không tệ.",
						"thai": "มาได้ถึงนี่... ไม่เลวเลย",
						"hindi": "इतनी दूर तक आना… प्रभावशाली।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "네가 모든 걸 꾸민 거구나?",
						"english": "So you orchestrated everything?",
						"japanese": "お前が全てを仕組んだのか？",
						"chinese": "原来一切都是你策划的？",
						"french": "C'est toi qui as tout manigancé ?",
						"spanish": "¿Así que tú lo planeaste todo?",
						"vietnamese": "Vậy ra ngươi đã dàn dựng mọi thứ?",
						"thai": "แกเป็นคนจัดฉากทุกอย่างใช่ไหม?",
						"hindi": "तो तुमने ही यह सब रचा था?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "꾸민 게 아니야. 완벽을 향한 진화지.",
						"english": "Not orchestrated. It's evolution towards perfection.",
						"japanese": "仕組んだのではない。完璧への進化だ。",
						"chinese": "并非策划。这是向完美进化的过程。",
						"french": "Non, pas manigancé. C'est l'évolution vers la perfection.",
						"spanish": "No lo orquesté. Es la evolución hacia la perfección.",
						"vietnamese": "Không phải dàn dựng. Đó là sự tiến hóa hướng tới sự hoàn hảo.",
						"thai": "ไม่ได้จัดฉาก มันคือวิวัฒนาการสู่ความสมบูรณ์แบบต่างหาก",
						"hindi": "रचा नहीं। यह पूर्णता की ओर विकास है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"speaker": "lin",
					"type": "direction"
				},
				{
					"content": {
						"korean": "이 괴물… 사람들의 생명력을 먹고 자라!",
						"english": "This monster… it feeds on people's life force!",
						"japanese": "この怪物…人々の生命力を食らって成長している！",
						"chinese": "这个怪物…正在吞噬人们的生命力成长！",
						"french": "Ce monstre… il se nourrit de la force vitale des gens !",
						"spanish": "¡Este monstruo… se alimenta de la fuerza vital de la gente!",
						"vietnamese": "Con quái vật này… nó hút sinh lực của con người mà lớn lên!",
						"thai": "สัตว์ประหลาดนี่... มันกินพลังชีวิตของผู้คนเป็นอาหาร!",
						"hindi": "यह दानव… लोगों की जीवन शक्ति खाकर बढ़ रहा है!"
					},
					"speaker": "lin",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "(웃음) 이제 너희도 나의 일부가 될 시간.",
						"english": "(Laughs) Now, it's time for you all to become a part of me.",
						"japanese": "(笑み) さあ、お前たちも私の一部となる時だ。",
						"chinese": "(笑) 现在，你们也该成为我的一部分了。",
						"french": "(Rire) Maintenant, il est temps que vous deveniez tous une partie de moi.",
						"spanish": "(Risa) Ahora, es hora de que todos ustedes se conviertan en parte de mí.",
						"vietnamese": "(Cười) Giờ thì, đến lúc các ngươi cũng trở thành một phần của ta rồi.",
						"thai": "(หัวเราะ) ถึงเวลาแล้วที่พวกแกจะต้องเป็นส่วนหนึ่งของฉัน",
						"hindi": "(हंसता है) अब तुम सबकी बारी है, मेरे हिस्से बनने की।"
					},
					"speaker": "random_boss"
				},
				{
					"action": "exit",
					"duration_ms": 400,
					"speaker": "lin",
					"direction": "down",
					"type": "direction"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"도시. '리버런스'가 모든 것을 바꾼다 했다.",
			"사람들은 사라지고, 달콤한 악취가 도시를 감싼다.",
			"기자 린은 '도시가 아프다'고 속삭였다.",
			"그림자는 이미 우리의 발밑까지 스며들고 있었다."
		],
		"english": [
			"The city. They said 'Reverence' would change everything.",
			"People vanish, and a sweet stench engulfs the city.",
			"Reporter Lynn whispered, \"The city is sick.\"",
			"Shadows were already creeping beneath our feet."
		],
		"japanese": [
			"都市。「リバレンス」がすべてを変えると言われた。",
			"人々は消え去り、甘い悪臭が街を包む。",
			"記者リンは「街が病んでいる」と囁いた。",
			"影はすでに私たちの足元まで忍び寄っていた。"
		],
		"chinese": [
			"城市。他们说“变革”会改变一切。",
			"人们消失了，甜腻的恶臭弥漫着城市。",
			"记者林恩低语道：“这座城市病了。”",
			"阴影已经蔓延到我们的脚下。"
		],
		"french": [
			"La ville. Ils disaient que \"Révérence\" changerait tout.",
			"Les gens disparaissent, et une douce puanteur enveloppe la ville.",
			"La journaliste Lynn a murmuré : « La ville est malade. »",
			"Les ombres s'insinuaient déjà sous nos pieds."
		],
		"spanish": [
			"La ciudad. Dijeron que \"Reverencia\" lo cambiaría todo.",
			"La gente desaparece, y un dulce hedor envuelve la ciudad.",
			"La periodista Lynn susurró: \"La ciudad está enferma\".",
			"Las sombras ya se arrastraban bajo nuestros pies."
		],
		"vietnamese": [
			"Thành phố. Họ nói 'Reverence' sẽ thay đổi tất cả.",
			"Người dân biến mất, và một mùi hôi ngọt ngào bao trùm thành phố.",
			"Phóng viên Lynn thì thầm, \"Thành phố đang ốm.\"",
			"Bóng tối đã len lỏi đến tận chân chúng ta."
		],
		"thai": [
			"เมือง พวกเขาบอกว่า 'รีเวอเรนซ์' จะเปลี่ยนทุกสิ่ง",
			"ผู้คนหายไป และกลิ่นเหม็นหวานก็ปกคลุมเมือง",
			"นักข่าวลินน์กระซิบว่า \"เมืองกำลังป่วย\"",
			"เงาได้คืบคลานมาอยู่ใต้เท้าของเราแล้ว"
		],
		"hindi": [
			"शहर। उन्होंने कहा 'रिवरेंस' सब कुछ बदल देगा।",
			"लोग गायब हो जाते हैं, और एक मीठी बदबू शहर को घेर लेती है।",
			"रिपोर्टर लिन ने फुसफुसाया, \"शहर बीमार है।\"",
			"परछाईं पहले ही हमारे पैरों के नीचे तक फैल चुकी थी।"
		]
	}
} as const;
