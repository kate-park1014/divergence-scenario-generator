export const scenario_snowy_cairn_26_02 = {
	"scenario_id": "snowy_cairn_26_02",
	"order": 2,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"ivar": {
			"id": "mon_d8a80adc-9315-47b5-8c30-97ce33672bce",
			"name": {
				"korean": "이바르",
				"english": "Ivar",
				"japanese": "イヴァー",
				"chinese": "伊瓦尔",
				"french": "Ivar",
				"spanish": "Ivar",
				"vietnamese": "Ivar",
				"thai": "ไอวาร์",
				"hindi": "इवर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8dd7872b-d4df-44fd-b1a1-083a9156e700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2622fb62-daf4-42d1-a83b-2b78869d3e00/public"
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
					"speaker": "narrator",
					"content": {
						"korean": "돌무덤 둘레, 옛 탐험가들의 유물이 얼어붙어 있었다. 깨진 검, 갈라진 신표.",
						"english": "Around the cairn, relics of ancient explorers lay frozen. A broken sword, a cracked emblem.",
						"japanese": "積み石の周りには、古の探検家たちの遺物が凍りついていた。折れた剣、ひび割れた紋章。",
						"chinese": "环绕石冢，古老探险家的遗物冻结着。断裂的剑，开裂的徽章。",
						"french": "Autour du cairn, les reliques d'anciens explorateurs étaient gelées. Une épée brisée, un emblème fendu.",
						"spanish": "Alrededor del túmulo, las reliquias de antiguos exploradores yacían congeladas. Una espada rota, un emblema rajado.",
						"vietnamese": "Quanh ngôi mộ đá, di vật của các nhà thám hiểm xưa đã đóng băng. Một thanh kiếm vỡ, một phù hiệu nứt.",
						"thai": "รอบกองหินซากโบราณ วัตถุโบราณของนักสำรวจยุคเก่าแข็งตัวอยู่ ดาบหัก เหรียญตราแตก",
						"hindi": "पत्थरों के ढेर के चारों ओर, प्राचीन खोजकर्ताओं के अवशेष जमे हुए थे। एक टूटी तलवार, एक फटा हुआ प्रतीक।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "그리고 손을 맞잡은 채 얼어붙은 두 사람의 형상. 한쪽 손은, 뒤에 칼을 숨기고 있었다.",
						"english": "And the frozen forms of two people, hands clasped. One hand, however, hid a knife behind its back.",
						"japanese": "そして、手を取り合ったまま凍りついた二人の姿。片方の手は、背中にナイフを隠していた。",
						"chinese": "以及两具手拉着手冻结的躯体。其中一只手，背后藏着一把刀。",
						"french": "Et les formes gelées de deux personnes, les mains jointes. L'une des mains, cependant, cachait un couteau derrière son dos.",
						"spanish": "Y las formas congeladas de dos personas, con las manos entrelazadas. Una de las manos, sin embargo, ocultaba un cuchillo a la espalda.",
						"vietnamese": "Và hình hài đóng băng của hai người đang nắm tay. Một bàn tay, lại giấu dao sau lưng.",
						"thai": "และร่างที่แข็งตัวของคนสองคนที่จับมือกันไว้ มือข้างหนึ่งซ่อนมีดไว้ข้างหลัง",
						"hindi": "और दो लोगों के जमे हुए आकार, हाथ पकड़े हुए। एक हाथ, हालाँकि, अपनी पीठ के पीछे एक चाकू छिपा रहा था।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "모두 어떤 약속의 잔해처럼 보였다.",
						"english": "All seemed like the wreckage of some promise.",
						"japanese": "どれも、何かの約束の残骸のように見えた。",
						"chinese": "一切都像某个承诺的残骸。",
						"french": "Tout semblait être l'épave d'une promesse.",
						"spanish": "Todo parecía el naufragio de alguna promesa.",
						"vietnamese": "Tất cả trông như tàn tích của một lời hứa nào đó.",
						"thai": "ทั้งหมดดูเหมือนซากปรักหักพังของคำสัญญาบางอย่าง",
						"hindi": "सब कुछ किसी वादे के मलबे जैसा लग रहा था।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "여긴… 대체 뭐지?",
						"english": "What... is this place?",
						"japanese": "ここは…いったい何だ？",
						"chinese": "这里…到底是什么地方？",
						"french": "Qu'est-ce que... cet endroit ?",
						"spanish": "¿Qué... es este lugar?",
						"vietnamese": "Đây... rốt cuộc là đâu?",
						"thai": "ที่นี่... มันคืออะไรกันแน่?",
						"hindi": "यह जगह… आखिर क्या है?"
					}
				},
				{
					"speaker": "ivar",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						3
					],
					"type": "direction"
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "겨우 이런 곳에 멈출 내가 아니지. 끝까지 가주마.",
						"english": "I won't stop in a place like this. I'll see it through to the end.",
						"japanese": "こんな所で立ち止まる私じゃない。最後までやり遂げてやる。",
						"chinese": "我可不会在这种地方停下。我会坚持到底。",
						"french": "Je ne m'arrêterai pas dans un endroit pareil. J'irai jusqu'au bout.",
						"spanish": "No me detendré en un lugar como este. Llegaré hasta el final.",
						"vietnamese": "Ta sẽ không dừng lại ở một nơi như thế này. Ta sẽ đi đến cùng.",
						"thai": "ฉันไม่หยุดอยู่แค่ที่แบบนี้หรอก ฉันจะไปให้สุดทาง",
						"hindi": "मैं ऐसी जगह पर नहीं रुकूंगा। मैं इसे अंत तक देखूंगा।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이바르!",
						"english": "Ivar!",
						"japanese": "イヴァー！",
						"chinese": "伊瓦尔！",
						"french": "Ivar !",
						"spanish": "¡Ivar!",
						"vietnamese": "Ivar!",
						"thai": "อีวาร์!",
						"hindi": "ईवर!"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "왜? 내 다짐이 약해 보이나?",
						"english": "Why? Do my vows seem weak?",
						"japanese": "なぜ？私の誓いが弱く見えるか？",
						"chinese": "怎么？我的誓言看起来很弱吗？",
						"french": "Pourquoi ? Mes vœux semblent-ils faibles ?",
						"spanish": "¿Por qué? ¿Mis promesas parecen débiles?",
						"vietnamese": "Sao? Lời thề của ta có vẻ yếu ớt sao?",
						"thai": "ทำไม? คำสาบานของข้าดูอ่อนแอหรือไง?",
						"hindi": "क्यों? क्या मेरी प्रतिज्ञा कमज़ोर लगती है?"
					},
					"type": "speech",
					"emotion": "angry"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "ivar",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "이바르의 입김이 허공에서 얼어붙었다.",
						"english": "Ivar's breath froze in the air.",
						"japanese": "イヴァーの息が空中で凍りついた。",
						"chinese": "伊瓦尔的呼吸在空中冻结了。",
						"french": "Le souffle d'Ivar gela dans l'air.",
						"spanish": "El aliento de Ivar se congeló en el aire.",
						"vietnamese": "Hơi thở của Ivar đóng băng giữa không trung.",
						"thai": "ลมหายใจของอีวาร์แข็งตัวกลางอากาศ",
						"hindi": "ईवर की साँस हवा में जम गई।"
					}
				},
				{
					"content": {
						"korean": "다짐과 함께, 바닥으로 떨어졌다.",
						"english": "Along with his resolve, it fell to the floor.",
						"japanese": "決意と共に、それは床に落ちた。",
						"chinese": "连同他的决心，它一起落到了地上。",
						"french": "Avec sa détermination, il tomba au sol.",
						"spanish": "Junto con su promesa, cayó al suelo.",
						"vietnamese": "Cùng với quyết tâm của mình, nó rơi xuống sàn.",
						"thai": "พร้อมกับคำมั่นสัญญา มันตกลงสู่พื้น",
						"hindi": "अपनी प्रतिज्ञा के साथ, वह फर्श पर गिर गया।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "뭐야?! 내 다짐이… 얼어붙었다고?",
						"english": "What?! My resolve... it froze?",
						"japanese": "何？！私の誓いが…凍りついたって？",
						"chinese": "什么？！我的誓言……冻结了？",
						"french": "Quoi ?! Ma détermination... a gelé ?",
						"spanish": "¿Qué?! ¿Mi promesa... se congeló?",
						"vietnamese": "Cái gì?! Quyết tâm của ta... đóng băng ư?",
						"thai": "อะไรนะ?! คำมั่นของข้า... แข็งตัวเหรอ?",
						"hindi": "क्या?! मेरी प्रतिज्ञा... जम गई?"
					},
					"speaker": "ivar"
				},
				{
					"content": {
						"korean": "믿을 수 없어.",
						"english": "I can't believe it.",
						"japanese": "信じられない。",
						"chinese": "无法相信。",
						"french": "Je n'arrive pas à y croire.",
						"spanish": "No puedo creerlo.",
						"vietnamese": "Không thể tin được.",
						"thai": "ไม่อยากจะเชื่อเลย",
						"hindi": "मैं इस पर विश्वास नहीं कर सकता।"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "이런 시시한 술수에 내가 놀아날 줄 아나!",
						"english": "Do you think I'd fall for such a petty trick?!",
						"japanese": "こんなくだらない手品に私が騙されるとでも思うのか！",
						"chinese": "你以为我会上这种雕虫小技的当吗！",
						"french": "Pensez-vous que je me laisserai berner par une astuce si minable ?",
						"spanish": "¡¿Crees que caeré en un truco tan insignificante?!",
						"vietnamese": "Ngươi nghĩ ta sẽ bị lừa bởi trò vặt vãnh này sao?!",
						"thai": "คิดว่าข้าจะหลงกลอุบายไร้สาระแบบนี้งั้นเหรอ!",
						"hindi": "क्या तुम्हें लगता है कि मैं ऐसी छोटी सी चाल में फँस जाऊँगा!"
					},
					"speaker": "ivar"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "진정한 전사는 이런 걸로 꺾이지 않아!",
						"english": "A true warrior isn't broken by such things!",
						"japanese": "真の戦士はこんなものでは折れない！",
						"chinese": "真正的战士不会被这种东西击垮！",
						"french": "Un vrai guerrier ne se brise pas pour si peu !",
						"spanish": "¡Un verdadero guerrero no se rinde por esto!",
						"vietnamese": "Một chiến binh thực thụ sẽ không bị khuất phục bởi những thứ này!",
						"thai": "นักรบที่แท้จริงไม่ถูกหักหลังด้วยเรื่องแค่นี้หรอก!",
						"hindi": "एक सच्चा योद्धा ऐसी चीज़ों से टूटता नहीं है!"
					},
					"speaker": "ivar"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "ivar",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						3
					],
					"type": "direction"
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "이건… 단순한 얼음이 아니야.",
						"english": "This isn't... just mere ice.",
						"japanese": "これは…ただの氷じゃない。",
						"chinese": "这不只是……普通的冰。",
						"french": "Ce n'est pas... juste de la glace.",
						"spanish": "Esto no es... simple hielo.",
						"vietnamese": "Đây không phải... chỉ là băng đơn thuần.",
						"thai": "นี่มัน... ไม่ใช่แค่น้ำแข็งธรรมดา",
						"hindi": "यह... सिर्फ़ बर्फ़ नहीं है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "약속의 무게를 시험하는 건가?",
						"english": "Is it testing the weight of a promise?",
						"japanese": "約束の重さを試しているのか？",
						"chinese": "是在考验誓言的份量吗？",
						"french": "Est-ce que cela teste le poids d'une promesse ?",
						"spanish": "¿Está probando el peso de una promesa?",
						"vietnamese": "Nó đang thử thách sức nặng của một lời hứa sao?",
						"thai": "กำลังทดสอบน้ำหนักของคำสัญญาอยู่หรือเปล่า?",
						"hindi": "क्या यह एक वादे के वज़न को परख रहा है?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "내 명예가 시험받고 있다. 이 숲, 꽤 재미있는 곳이군.",
						"english": "My honor is being tested. This forest, quite an interesting place.",
						"japanese": "私の名誉が試されている。この森、なかなか面白い場所だな。",
						"chinese": "我的荣誉正受到考验。这片森林，真是有趣的地方啊。",
						"french": "Mon honneur est mis à l'épreuve. Cette forêt est plutôt intéressante.",
						"spanish": "Mi honor está siendo puesto a prueba. Este bosque, un lugar bastante interesante.",
						"vietnamese": "Danh dự của ta đang bị thử thách. Rừng này, đúng là một nơi thú vị.",
						"thai": "เกียรติของข้ากำลังถูกทดสอบ ป่านี้เป็นสถานที่ที่น่าสนใจทีเดียว",
						"hindi": "मेरी प्रतिष्ठा की परीक्षा हो रही है। यह जंगल, काफी दिलचस्प जगह है।"
					},
					"speaker": "ivar"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "재미있다고 하기엔… 너무 위험한데.",
						"english": "To call it interesting... it's too dangerous.",
						"japanese": "面白いと言うには…あまりにも危険すぎる。",
						"chinese": "要说有趣…也太危险了点。",
						"french": "Intéressant... c'est trop dangereux.",
						"spanish": "Decir que es interesante... es demasiado peligroso.",
						"vietnamese": "Nói là thú vị thì… quá nguy hiểm rồi.",
						"thai": "จะบอกว่าน่าสนใจก็... อันตรายเกินไป",
						"hindi": "इसे दिलचस्प कहना... बहुत खतरनाक है।"
					}
				},
				{
					"content": {
						"korean": "강함을 좇는 자라면, 이 정도 시험은 즐겨야지.",
						"english": "One who seeks strength should enjoy a trial like this.",
						"japanese": "強さを求める者ならば、この程度の試練は楽しむべきだ。",
						"chinese": "追求强大之人，理应享受这种考验。",
						"french": "Celui qui recherche la force devrait apprécier une épreuve pareille.",
						"spanish": "Quien busca la fuerza, debería disfrutar de una prueba como esta.",
						"vietnamese": "Kẻ theo đuổi sức mạnh, nên tận hưởng thử thách như thế này.",
						"thai": "ผู้ที่แสวงหาความแข็งแกร่ง ควรจะเพลิดเพลินกับการทดสอบเช่นนี้",
						"hindi": "जो शक्ति की तलाश में है, उसे इस तरह की परीक्षा का आनंद लेना चाहिए।"
					},
					"speaker": "ivar",
					"emotion": "happy",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "ivar",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "돌무덤에서 푸른빛이 일렁였다.",
						"english": "A blue light shimmered from the stone tomb.",
						"japanese": "石塚から青い光が揺らめいた。",
						"chinese": "石冢中闪烁着蓝光。",
						"french": "Une lumière bleue vacillait depuis le cairn.",
						"spanish": "Una luz azul brillaba desde el túmulo de piedras.",
						"vietnamese": "Ánh sáng xanh lung linh từ mộ đá.",
						"thai": "แสงสีน้ำเงินส่องประกายระยิบระยับจากหลุมศพหิน",
						"hindi": "पत्थर की कब्र से नीली रोशनी टिमटिमा रही थी।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "탐험대의 말에 따라 그 빛은 때론 잔잔했고, 때론 날카롭게 번득였다.",
						"english": "According to the expedition team, the light was sometimes calm, sometimes sharply flickering.",
						"japanese": "探検隊の言葉によれば、その光は時には穏やかに、時には鋭くきらめいた。",
						"chinese": "据探险队所言，那光芒时而平静，时而锐利闪烁。",
						"french": "Selon l'équipe d'exploration, la lumière était parfois calme, parfois brillait vivement.",
						"spanish": "Según el equipo de expedición, la luz a veces era serena y otras veces destellaba agudamente.",
						"vietnamese": "Theo lời đội thám hiểm, ánh sáng ấy lúc thì tĩnh lặng, lúc lại lóe lên sắc bén.",
						"thai": "ตามที่ทีมสำรวจกล่าว แสงนั้นบางครั้งก็สงบ บางครั้งก็ส่องประกายแหลมคม",
						"hindi": "अभियान दल के अनुसार, प्रकाश कभी शांत था, कभी तेजी से चमकता था।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "말 한마디에도 대가가 따른다… 그런 건가?",
						"english": "Even a single word comes with a price... Is that how it is?",
						"japanese": "言葉一つにも代償が伴う…そういうことか？",
						"chinese": "一言一行皆有代价…是这样吗？",
						"french": "Même un seul mot a un prix... C'est ça ?",
						"spanish": "Hasta una sola palabra tiene un precio... ¿Es así?",
						"vietnamese": "Ngay cả một lời nói cũng phải trả giá… Là vậy sao?",
						"thai": "แม้แต่คำพูดเดียวก็มีราคาต้องจ่าย... อย่างนั้นเหรอ?",
						"hindi": "एक शब्द भी कीमत के साथ आता है... क्या ऐसा ही है?"
					},
					"speaker": "ivar"
				},
				{
					"content": {
						"korean": "여기서 섣부른 약속은 위험해.",
						"english": "Rash promises are dangerous here.",
						"japanese": "ここで性急な約束は危険だ。",
						"chinese": "在这里，轻易许诺很危险。",
						"french": "Les promesses hâtives sont dangereuses ici.",
						"spanish": "Las promesas precipitadas son peligrosas aquí.",
						"vietnamese": "Hứa hẹn vội vàng ở đây rất nguy hiểm.",
						"thai": "การให้สัญญาที่รีบร้อนเป็นอันตรายที่นี่",
						"hindi": "यहां जल्दबाजी में किए गए वादे खतरनाक हैं।"
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "흥. 내 다짐은 진짜다. 얼어붙지 않을 진실을 보여주지.",
						"english": "Hmph. My resolve is true. I'll show you a truth that won't freeze.",
						"japanese": "ふん。私の誓いは本物だ。凍てつかない真実を見せてやろう。",
						"chinese": "哼。我的决心是真的。我会让你看到不会冻结的真相。",
						"french": "Hmph. Ma détermination est réelle. Je vais vous montrer une vérité qui ne gèlera pas.",
						"spanish": "Hmph. Mi determinación es verdadera. Te mostraré una verdad que no se congelará.",
						"vietnamese": "Hừ. Lời thề của ta là thật. Ta sẽ cho ngươi thấy một sự thật không đóng băng.",
						"thai": "หึ ความตั้งใจของข้าเป็นของจริง ข้าจะแสดงความจริงที่ไม่หยุดนิ่งให้เจ้าเห็น",
						"hindi": "हम्फ। मेरा संकल्प सच्चा है। मैं तुम्हें एक ऐसी सच्चाई दिखाऊंगा जो कभी नहीं जमेगी।"
					},
					"speaker": "ivar",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "이 숲의 '끝'을 보기 전까지, 멈추지 않아.",
						"english": "Until I see the 'end' of this forest, I won't stop.",
						"japanese": "この森の『終わり』を見るまで、私は止まらない。",
						"chinese": "在看到这片森林的‘尽头’之前，我不会停下。",
						"french": "Je ne m'arrêterai pas avant d'avoir vu la 'fin' de cette forêt.",
						"spanish": "No me detendré hasta ver el 'final' de este bosque.",
						"vietnamese": "Cho đến khi nhìn thấy 'kết thúc' của khu rừng này, ta sẽ không dừng lại.",
						"thai": "ข้าจะไม่หยุดจนกว่าจะได้เห็น 'จุดจบ' ของป่านี้",
						"hindi": "जब तक मैं इस जंगल का 'अंत' नहीं देख लेता, तब तक मैं नहीं रुकूंगा।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "하찮은 다짐으론… 이 숲을 넘을 수 없다.",
						"english": "Such meager resolve won't conquer this forest.",
						"japanese": "その程度の覚悟では…この森を越えられぬ。",
						"chinese": "这点决心…可无法越过这片森林。",
						"french": "Une si faible détermination… ne vous permettra pas de traverser cette forêt.",
						"spanish": "Con una determinación tan insignificante… no podrás superar este bosque.",
						"vietnamese": "Với quyết tâm hèn mọn… ngươi không thể vượt qua khu rừng này.",
						"thai": "ด้วยความมุ่งมั่นอันเล็กน้อย… เจ้าไม่อาจข้ามป่านี้ได้",
						"hindi": "ऐसी तुच्छ प्रतिज्ञा से… इस जंगल को पार नहीं किया जा सकता।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "크윽… 아직… 끝나지 않았다!",
						"english": "Ugh... It's not... over yet!",
						"japanese": "くっ…まだ…終わってない！",
						"chinese": "咳…还没…结束！",
						"french": "Urgh… Ce n'est pas… encore fini !",
						"spanish": "¡Ugh… Aún… no ha terminado!",
						"vietnamese": "Khặc… Vẫn chưa… kết thúc!",
						"thai": "อึก… ยัง… ไม่จบ!",
						"hindi": "उफ़… अभी… खत्म नहीं हुआ है!"
					},
					"speaker": "ivar",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "다시… 도전하자!",
						"english": "Let's... challenge again!",
						"japanese": "もう一度…挑戦しよう！",
						"chinese": "再…挑战一次吧！",
						"french": "Relevons… le défi !",
						"spanish": "¡Volvamos… a intentarlo!",
						"vietnamese": "Hãy… thử lại lần nữa!",
						"thai": "มา… ลองใหม่อีกครั้ง!",
						"hindi": "चलो… फिर से चुनौती दें!"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "돌무덤의 가장 깊은 곳. 정체 모를 그림자가 탐험대를 기다리고 있었다.",
						"english": "The deepest part of the stone tomb. An unknown shadow awaited the expedition team.",
						"japanese": "石塚の最も深い場所。正体不明の影が探検隊を待っていた。",
						"chinese": "石冢最深处。一个不明身份的影子正在等待探险队。",
						"french": "La partie la plus profonde du cairn. Une ombre inconnue attendait l'équipe d'exploration.",
						"spanish": "La parte más profunda del túmulo de piedras. Una sombra desconocida esperaba al equipo de expedición.",
						"vietnamese": "Nơi sâu nhất của mộ đá. Một bóng đen vô danh đang đợi đội thám hiểm.",
						"thai": "ส่วนที่ลึกที่สุดของหลุมศพหิน เงาที่ไม่รู้จักกำลังรอทีมสำรวจอยู่",
						"hindi": "पत्थर की कब्र का सबसे गहरा हिस्सा। एक अज्ञात छाया अभियान दल का इंतजार कर रही थी।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 필멸자들… 가벼운 말로 여기까지 왔군.",
						"english": "Foolish mortals... your glib words brought you here.",
						"japanese": "愚かなる定命の者たち… 軽々しい言葉でここまで来たか。",
						"chinese": "愚蠢的凡人… 仅凭轻浮之言便来到了这里。",
						"french": "Mortels insensés... vos paroles légères vous ont menés ici.",
						"spanish": "Necios mortales... sus palabras vanas los trajeron hasta aquí.",
						"vietnamese": "Những kẻ phàm trần ngu ngốc... Chỉ bằng những lời lẽ nông nổi mà đã đến được đây.",
						"thai": "พวกมนุษย์โง่เขลา... วาจาเบาหวิวพาพวกเจ้ามาถึงที่นี่ได้ไงกัน",
						"hindi": "मूर्ख नश्वर... तुम्हारे हल्के शब्द तुम्हें यहाँ तक ले आए।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "누구냐!",
						"english": "Who are you!",
						"japanese": "何者だ！",
						"chinese": "你是谁！",
						"french": "Qui es-tu !",
						"spanish": "¡Quién eres!",
						"vietnamese": "Ngươi là ai!",
						"thai": "เจ้าเป็นใคร!",
						"hindi": "कौन हो तुम!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "너희의 다짐을 얼려버릴 자.",
						"english": "The one who will freeze your resolve.",
						"japanese": "お前たちの誓いを凍らせる者だ。",
						"chinese": "我乃冻结尔等誓言之人。",
						"french": "Celui qui gèlera votre détermination.",
						"spanish": "El que congelará su determinación.",
						"vietnamese": "Kẻ sẽ đóng băng lời thề của các ngươi.",
						"thai": "ผู้ที่จะแช่แข็งปณิธานของพวกเจ้า",
						"hindi": "वह जो तुम्हारे संकल्प को जमा देगा।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "내 다짐은 얼어붙지 않아! 네가 감히 나설 상대가 아니다!",
						"english": "My resolve won't freeze! You're no match for me!",
						"japanese": "私の誓いは凍りつかない！ お前は私に挑む相手ではない！",
						"chinese": "我的誓言不会冻结！你根本不是我的对手！",
						"french": "Ma détermination ne gèlera pas ! Tu n'es pas de taille à m'affronter !",
						"spanish": "¡Mi determinación no se congelará! ¡No eres rival para mí!",
						"vietnamese": "Lời thề của ta sẽ không đóng băng! Ngươi không phải là đối thủ của ta!",
						"thai": "ปณิธานของข้าไม่เคยสั่นคลอน! เจ้าไม่ใช่คู่ต่อสู้ของข้า!",
						"hindi": "मेरा संकल्प नहीं जमेगा! तुम मेरे मुकाबले के नहीं हो!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "후회할 것이다.",
						"english": "You will regret this.",
						"japanese": "後悔するだろう。",
						"chinese": "你会后悔的。",
						"french": "Tu le regretteras.",
						"spanish": "Lo lamentarás.",
						"vietnamese": "Ngươi sẽ phải hối hận.",
						"thai": "เจ้าจะต้องเสียใจ",
						"hindi": "तुम्हें पछतावा होगा।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "크윽… 이럴… 수가… 약속… 의 무게… 를….",
						"english": "Ugh... How... could this be... The weight... of the promise...",
						"japanese": "くっ… まさか… 約束… の重さ… が…。",
						"chinese": "呃… 这… 怎么可能… 承诺… 的重量…",
						"french": "Ugh... Comment... est-ce possible... Le poids... de la promesse...",
						"spanish": "Ugh... Cómo... puede ser... El peso... de la promesa...",
						"vietnamese": "Ư... Sao... lại thế này... Cái nặng... của lời hứa...",
						"thai": "อึก... เป็น... ไปไม่ได้... น้ำหนัก... ของคำสัญญา...",
						"hindi": "ऊह... यह... कैसे... हो सकता है... वादे... का बोझ..."
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "쓰러뜨렸다!",
						"english": "Defeated!",
						"japanese": "倒した！",
						"chinese": "击败了！",
						"french": "Vaincu !",
						"spanish": "¡Derrotado!",
						"vietnamese": "Đã đánh bại!",
						"thai": "โค่นลงได้แล้ว!",
						"hindi": "हरा दिया!"
					},
					"speaker": "character_any",
					"emotion": "happy",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "내 다짐은 언제나 진실하다. 꺾이지 않아!",
						"english": "My resolve is always true. It will not break!",
						"japanese": "私の誓いは常に真実だ。決して折れない！",
						"chinese": "我的誓言永远真实。绝不会屈服！",
						"french": "Ma détermination est toujours vraie. Elle ne pliera pas !",
						"spanish": "¡Mi determinación siempre es verdadera. No se romperá!",
						"vietnamese": "Lời thề của ta luôn chân thật. Không thể bị bẻ gãy!",
						"thai": "ปณิธานของข้าเป็นจริงเสมอ ไม่ยอมแพ้!",
						"hindi": "मेरा संकल्प हमेशा सच्चा है। यह नहीं टूटेगा!"
					}
				},
				{
					"content": {
						"korean": "정체 모를 보스는 쓰러졌다. 그러나 약속의 무게를 묻는 이 숲의 시험은 끝나지 않았다.",
						"english": "The mysterious boss has fallen. However, this forest's trial, which questions the weight of promises, is not over.",
						"japanese": "正体不明のボスは倒れた。しかし、約束の重さを問うこの森の試練は終わっていない。",
						"chinese": "身份不明的Boss倒下了。然而，这片森林关于承诺之重的考验并未结束。",
						"french": "Le boss mystérieux est tombé. Cependant, l'épreuve de cette forêt, qui interroge le poids des promesses, n'est pas terminée.",
						"spanish": "El jefe misterioso ha caído. Sin embargo, la prueba de este bosque, que cuestiona el peso de las promesas, no ha terminado.",
						"vietnamese": "Trùm bí ẩn đã gục ngã. Tuy nhiên, thử thách của khu rừng này, nơi chất vấn trọng lượng của lời hứa, vẫn chưa kết thúc.",
						"thai": "บอสปริศนาล้มลงแล้ว อย่างไรก็ตาม บททดสอบของป่านี้ที่ตั้งคำถามถึงน้ำหนักของคำสัญญายังไม่สิ้นสุด",
						"hindi": "अज्ञात बॉस गिर गया है। हालांकि, इस जंगल की परीक्षा, जो वादों के बोझ पर सवाल उठाती है, खत्म नहीं हुई है।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "탐험대는 더욱 깊은 곳으로 향한다. 다음 시험은 무엇일까?",
						"english": "The expedition team ventures deeper. What will the next trial be?",
						"japanese": "探検隊はさらに深い場所へと向かう。次の試練は何だろうか？",
						"chinese": "探险队继续深入。下一个考验会是什么呢？",
						"french": "L'équipe d'expédition s'enfonce plus profondément. Quelle sera la prochaine épreuve ?",
						"spanish": "El equipo de expedición se adentra más. ¿Cuál será la próxima prueba?",
						"vietnamese": "Đội thám hiểm tiến sâu hơn. Thử thách tiếp theo sẽ là gì?",
						"thai": "ทีมสำรวจมุ่งหน้าสู่ส่วนที่ลึกกว่า บททดสอบต่อไปจะเป็นอะไร?",
						"hindi": "अभियान दल और गहराई में जाता है। अगली परीक्षा क्या होगी?"
					},
					"speaker": "narrator"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"이 숲은 약속을 기억한다.",
			"한 마디, 한 글자까지.",
			"그리고 그 무게만큼, 대가를 요구한다.",
			"가벼운 다짐은 얼어붙어 떨어진다.",
			"이바르의 다짐처럼."
		],
		"english": [
			"This forest remembers promises.",
			"Every word, every letter.",
			"And demands a price for its weight.",
			"Frivolous vows freeze and fall.",
			"Like Ivar's vow."
		],
		"japanese": [
			"この森は約束を覚えている。",
			"一言一句。",
			"その重さ만큼、代償を求める。",
			"軽薄な誓いは凍りつき、落ちる。",
			"イヴァールの誓いのように。"
		],
		"chinese": [
			"这片森林记得承诺。",
			"一字一句。",
			"并索取其分量的代价。",
			"轻率的誓言凝结坠落。",
			"就像伊瓦尔的誓言。"
		],
		"french": [
			"Cette forêt se souvient des promesses.",
			"Chaque mot, chaque lettre.",
			"Et exige un prix à la mesure de son poids.",
			"Les serments légers gèlent et tombent.",
			"Comme le vœu d'Ivar."
		],
		"spanish": [
			"Este bosque recuerda las promesas.",
			"Cada palabra, cada letra.",
			"Y exige un precio acorde a su peso.",
			"Las promesas vanas se congelan y caen.",
			"Como el voto de Ivar."
		],
		"vietnamese": [
			"Rừng này ghi nhớ lời hứa.",
			"Từng lời, từng chữ.",
			"Và đòi hỏi một cái giá tương xứng với trọng lượng của nó.",
			"Lời thề hời hợt đóng băng rồi rơi rụng.",
			"Như lời thề của Ivar."
		],
		"thai": [
			"ป่านี้จดจำคำสัญญา",
			"ทุกคำพูด ทุกตัวอักษร",
			"และเรียกเก็บราคาตามน้ำหนักของมัน",
			"คำสัญญาที่เบาหวิวจะแข็งตัวและร่วงหล่นไป",
			"เช่นเดียวกับคำมั่นสัญญาของอีวาร์"
		],
		"hindi": [
			"यह वन वादों को याद रखता है।",
			"हर शब्द, हर अक्षर।",
			"और उसके भार के बराबर कीमत मांगता है।",
			"हल्के वादे जम जाते हैं और गिर पड़ते हैं।",
			"जैसे इवार का वादा।"
		]
	}
} as const;
