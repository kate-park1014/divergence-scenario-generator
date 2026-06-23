export const scenario_desert_kenshin_21_02 = {
	"scenario_id": "desert_kenshin_21_02",
	"order": 2,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"ashur": {
			"id": "mon_a07b6a77-ad2e-4adb-b4ed-56e7e10cd5c7",
			"name": {
				"korean": "아슈르",
				"english": "Ashur",
				"japanese": "アシュール",
				"chinese": "阿舒尔",
				"french": "Ashur",
				"spanish": "Ashur",
				"vietnamese": "Ashur",
				"thai": "อาชูร์",
				"hindi": "अशूर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/eb36f4ec-7b0f-47d0-7073-647e4b01e700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/e0b84a6e-36fc-4ba2-5c1d-54fbb18adb00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "메마른 바람이 기록 보관소의 낡은 문을 흔들었다.",
						"english": "A dry wind rattled the old door of the archives.",
						"japanese": "乾いた風が記録保管所の古びた扉を揺らした。",
						"chinese": "干燥的风吹动着档案馆的旧门。",
						"french": "Un vent sec secoua la vieille porte des archives.",
						"spanish": "Un viento seco sacudió la vieja puerta de los archivos.",
						"vietnamese": "Làn gió khô khốc lay động cánh cửa cũ kỹ của kho lưu trữ.",
						"thai": "ลมแห้งแล้งพัดประตูเก่าของหอจดหมายเหตุให้สั่นไหว",
						"hindi": "एक सूखी हवा ने अभिलेखागार के पुराने दरवाजे को खटखटाया।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "ashur",
					"spot": [
						4,
						3
					],
					"type": "direction"
				},
				{
					"emotion": "base",
					"speaker": "ashur",
					"content": {
						"korean": "어이, 거기. 뭘 찾나? 이 낡은 곳에선 시시한 소문밖에 안 나와.",
						"english": "Hey, you. What are you looking for? Only trivial rumors come out of this old place.",
						"japanese": "おい、そこの。何を探している？この古ぼけた場所からは、くだらない噂しか出てこないぞ。",
						"chinese": "嘿，你。找什么呢？这破地方只有些无聊的传闻。",
						"french": "Hé, vous. Que cherchez-vous ? De ce vieil endroit ne sortent que de banales rumeurs.",
						"spanish": "Oye, tú. ¿Qué buscas? De este viejo lugar solo salen rumores triviales.",
						"vietnamese": "Này, anh kia. Tìm gì vậy? Nơi cũ kỹ này chỉ toàn tin đồn vặt vãnh thôi.",
						"thai": "เฮ้ นาย. มองหาอะไรอยู่? ที่เก่าๆ แบบนี้มีแต่ข่าวลือไร้สาระนะ",
						"hindi": "अरे, तुम। क्या ढूंढ रहे हो? इस पुरानी जगह से सिर्फ तुच्छ अफवाहें ही निकलती हैं।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "블레이드마스터 왕가에 대해 알아보고 있어.",
						"english": "I'm looking into the Blademaster Royal Family.",
						"japanese": "ブレードマスター王家について調べています。",
						"chinese": "我在调查刀锋大师王室。",
						"french": "J'enquête sur la famille royale des Maîtres-Lames.",
						"spanish": "Estoy investigando a la Familia Real Blademaster.",
						"vietnamese": "Tôi đang tìm hiểu về Hoàng tộc Kiếm Sư.",
						"thai": "กำลังหาข้อมูลเกี่ยวกับราชวงศ์เบลดมาสเตอร์",
						"hindi": "मैं ब्लेडमास्टर शाही परिवार के बारे में पता लगा रहा हूँ।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"speaker": "ashur",
					"content": {
						"korean": "흐음… 그 망한 왕가 이야기? 뭐, 진실은 다들 불편해하지.",
						"english": "Hmm... that ruined royal family's story? Well, everyone's uncomfortable with the truth.",
						"japanese": "ふむ…あの滅びた王家の話か？まあ、真実ってのはみんな不快に思うものだがな。",
						"chinese": "嗯……那个灭亡的王室的故事？哼，真相总是让人不舒服。",
						"french": "Hmm... l'histoire de cette famille royale déchue ? Eh bien, la vérité met toujours tout le monde mal à l'aise.",
						"spanish": "Mmm... ¿la historia de esa familia real arruinada? Bueno, a todo el mundo le incomoda la verdad.",
						"vietnamese": "Hừm... chuyện về hoàng tộc đã lụi tàn đó à? Chà, sự thật thì ai cũng khó chịu thôi.",
						"thai": "หืม... เรื่องราชวงศ์ที่ล่มสลายนั้นน่ะเหรอ? อืม ความจริงมักจะทำให้ทุกคนไม่สบายใจล่ะนะ",
						"hindi": "ह्म्म्म... उस बर्बाद शाही परिवार की कहानी? खैर, सच सबको असहज करता है।"
					},
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"type": "direction",
					"speaker": "ashur",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "ashur",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "봐봐. 여기, 블레이드마스터 왕가의 몰락에 대한 기록이 있어. 대단했지.",
						"english": "Look. Here are records of the Blademaster Royal Family's downfall. It was grand.",
						"japanese": "見ろ。ここに、ブレードマスター王家の没落に関する記録がある。壮大だったな。",
						"chinese": "看。这里有刀锋大师王室衰落的记录。那真是了不起。",
						"french": "Regarde. Voici des archives sur la chute de la famille royale des Maîtres-Lames. C'était grandiose.",
						"spanish": "Mira. Aquí hay registros de la caída de la Familia Real Blademaster. Fue grandioso.",
						"vietnamese": "Nhìn này. Đây là những ghi chép về sự sụp đổ của Hoàng tộc Kiếm Sư. Thật hoành tráng.",
						"thai": "ดูสิ. นี่คือบันทึกเกี่ยวกับการล่มสลายของราชวงศ์เบลดมาสเตอร์. มันยิ่งใหญ่มาก",
						"hindi": "देखो। यहाँ ब्लेडमास्टर शाही परिवार के पतन के रिकॉर्ड हैं। यह शानदार था।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "…왜 이렇게 지워진 부분이 많지?",
						"english": "...Why are there so many erased parts?",
						"japanese": "…なぜこんなに消された部分が多いんだ？",
						"chinese": "……为什么有这么多被抹去的部分？",
						"french": "...Pourquoi y a-t-il tant de passages effacés ?",
						"spanish": "¿Por qué hay tantas partes borradas?",
						"vietnamese": "...Sao lại có nhiều chỗ bị xóa thế này?",
						"thai": "...ทำไมมีส่วนที่ถูกลบเยอะขนาดนี้?",
						"hindi": "...इतने सारे मिटाए हुए हिस्से क्यों हैं?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "오래된 기록은 다 그렇지. 시간이 흐르면 알아서 희미해지는 법.",
						"english": "Old records are all like that. They naturally fade with time.",
						"japanese": "古い記録は皆そうだ。時間が経てば自然に薄れていくものさ。",
						"chinese": "旧的记录都这样。随着时间的流逝，它们会自行淡化。",
						"french": "Tous les vieux registres sont comme ça. Ils s'estompent naturellement avec le temps.",
						"spanish": "Los registros antiguos son así. Se desvanecen naturalmente con el tiempo.",
						"vietnamese": "Những ghi chép cũ đều như vậy. Chúng tự nhiên phai mờ theo thời gian.",
						"thai": "บันทึกเก่าๆ ก็เป็นแบบนั้นแหละ มันจะค่อยๆ เลือนหายไปเองตามกาลเวลา",
						"hindi": "पुराने रिकॉर्ड ऐसे ही होते हैं। समय के साथ वे अपने आप धुंधले पड़ जाते हैं。"
					},
					"type": "speech",
					"speaker": "ashur",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "이건 지워진 게 아니라, 누군가 고의로…",
						"english": "This wasn't erased, but intentionally by someone...",
						"japanese": "これは消されたのではなく、誰かが意図的に…",
						"chinese": "这不是被抹去的，而是有人故意…",
						"french": "Ce n'est pas effacé, mais délibérément par quelqu'un...",
						"spanish": "Esto no fue borrado, sino intencionalmente por alguien...",
						"vietnamese": "Cái này không phải bị xóa, mà là ai đó cố ý…",
						"thai": "นี่ไม่ได้ถูกลบ แต่มีใครบางคนตั้งใจ...",
						"hindi": "इसे मिटाया नहीं गया था, बल्कि किसी ने जानबूझकर…"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "쓸데없는 생각 말고. 다 끝난 얘기야.",
						"english": "Stop thinking useless thoughts. It's a closed matter.",
						"japanese": "無駄な考えはよせ。もう終わった話だ。",
						"chinese": "别想没用的了。这事已经了结了。",
						"french": "Ne pense pas à des choses inutiles. C'est une affaire classée.",
						"spanish": "Deja de pensar tonterías. Es un asunto zanjado.",
						"vietnamese": "Đừng nghĩ những điều vô ích nữa. Chuyện đó đã kết thúc rồi.",
						"thai": "อย่าคิดเรื่องไร้สาระ มันเป็นเรื่องที่จบไปแล้ว",
						"hindi": "फालतू बातें सोचना बंद करो। यह एक बंद मामला है।"
					},
					"speaker": "ashur",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						7,
						3
					],
					"type": "direction",
					"speaker": "random_boss"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "...진실은, 감춰져야 할 때도 있는 법.",
						"english": "...The truth, sometimes, must remain hidden.",
						"japanese": "...真実は、隠されるべき時もあるものだ。",
						"chinese": "...真相，有时也需要被隐藏。",
						"french": "...La vérité, parfois, doit rester cachée.",
						"spanish": "...La verdad, a veces, debe permanecer oculta.",
						"vietnamese": "...Sự thật, đôi khi, cũng phải được giấu kín.",
						"thai": "...ความจริง บางครั้ง ก็ควรถูกซ่อนไว้",
						"hindi": "…सच, कभी-कभी, छिपाना पड़ता है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "네놈은 뭐야!",
						"english": "Who are you!",
						"japanese": "貴様は何者だ！",
						"chinese": "你是什么人！",
						"french": "Qui es-tu !",
						"spanish": "¡Quién eres!",
						"vietnamese": "Ngươi là ai!",
						"thai": "แกเป็นใคร!",
						"hindi": "तुम कौन हो!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "불청객은, 언제나 방해물이지.",
						"english": "An uninvited guest is always a nuisance.",
						"japanese": "招かれざる客は、いつだって邪魔者だ。",
						"chinese": "不速之客，总会是障碍。",
						"french": "Un invité indésirable est toujours une nuisance.",
						"spanish": "Un invitado no deseado siempre es un estorbo.",
						"vietnamese": "Khách không mời, luôn là kẻ gây trở ngại.",
						"thai": "แขกไม่ได้รับเชิญ มักจะเป็นตัวขัดขวางเสมอ",
						"hindi": "बिन बुलाए मेहमान हमेशा बाधा होते हैं।"
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "피 냄새가 진동하는 방. 기록 조각이 발밑에서 바스락거렸다.",
						"english": "A room reeking of blood. Fragments of records rustled underfoot.",
						"japanese": "血の匂いが充満する部屋。記録の破片が足元でカサカサと音を立てた。",
						"chinese": "弥漫着血腥味的房间。记录的碎片在脚下沙沙作响。",
						"french": "Une pièce imprégnée de l'odeur du sang. Des fragments de registres bruissaient sous mes pieds.",
						"spanish": "Una habitación apestando a sangre. Fragmentos de registros crujieron bajo mis pies.",
						"vietnamese": "Căn phòng nồng nặc mùi máu. Những mảnh ghi chép kêu xào xạc dưới chân.",
						"thai": "ห้องที่อบอวลไปด้วยกลิ่นคาวเลือด เศษบันทึกกรอบแกรบอยู่ใต้ฝ่าเท้า",
						"hindi": "खून की गंध से भरा कमरा। रिकॉर्ड के टुकड़े पैरों के नीचे सरसराहट कर रहे थे।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "분명해. 누군가 이 기록을 조작했어.",
						"english": "It's clear. Someone manipulated these records.",
						"japanese": "明らかだ。誰かがこの記録を操作した。",
						"chinese": "很明显。有人篡改了这些记录。",
						"french": "C'est clair. Quelqu'un a falsifié ces registres.",
						"spanish": "Está claro. Alguien manipuló estos registros.",
						"vietnamese": "Rõ ràng rồi. Ai đó đã giả mạo những ghi chép này.",
						"thai": "ชัดเจน มีคนบิดเบือนบันทึกนี้",
						"hindi": "यह स्पष्ट है। किसी ने इन अभिलेखों में हेरफेर किया है।"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "왕가의 몰락이 그렇게 단순한 일이 아니었다는 뜻인가.",
						"english": "Does that mean the fall of the royal family wasn't so simple?",
						"japanese": "王家の没落はそんな単純な話ではなかったということか。",
						"chinese": "难道王室的陨落并非如此简单？",
						"french": "Cela signifie-t-il que la chute de la famille royale n'était pas si simple ?",
						"spanish": "¿Significa eso que la caída de la familia real no fue tan simple?",
						"vietnamese": "Điều đó có nghĩa là sự sụp đổ của hoàng gia không hề đơn giản như vậy sao?",
						"thai": "นั่นหมายความว่าการล่มสลายของราชวงศ์ไม่ได้เรียบง่ายอย่างนั้นหรือ",
						"hindi": "क्या इसका मतलब है कि शाही परिवार का पतन इतना सीधा नहीं था?"
					}
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"speaker": "ashur"
				},
				{
					"emotion": "base",
					"speaker": "ashur",
					"type": "speech",
					"content": {
						"korean": "아직도 그 얘길 하나? 미련하긴.",
						"english": "Still talking about that? How foolish.",
						"japanese": "まだその話をしているのか？愚かだな。",
						"chinese": "还在说那个？真够执迷不悟的。",
						"french": "Tu en parles encore ? Quelle folie.",
						"spanish": "¿Todavía sigues con eso? Qué ingenuidad.",
						"vietnamese": "Vẫn còn nói chuyện đó sao? Thật ngốc nghếch.",
						"thai": "ยังพูดเรื่องนั้นอยู่เหรอ ช่างโง่เขลาจริงๆ",
						"hindi": "अभी भी उस बारे में बात कर रहे हो? कितने मूर्ख हो।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_2",
					"content": {
						"korean": "너… 이 기록에 대해 뭘 알고 있지?",
						"english": "You... what do you know about this record?",
						"japanese": "お前… この記録について何を知っている？",
						"chinese": "你…对这份记录了解多少？",
						"french": "Toi... que sais-tu de ce dossier ?",
						"spanish": "Tú... ¿qué sabes de este registro?",
						"vietnamese": "Ngươi... biết gì về hồ sơ này?",
						"thai": "เจ้า... รู้เรื่องบันทึกนี้มากแค่ไหน?",
						"hindi": "तुम... इस रिकॉर्ड के बारे में क्या जानते हो?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "내가 아는 건, 호기심이 너희를 죽일 거라는 것뿐.",
						"english": "All I know is that curiosity will be your undoing.",
						"japanese": "私が知っているのは、好奇心がお前たちを滅ぼすということだけだ。",
						"chinese": "我只知道，好奇心会害死你们。",
						"french": "Tout ce que je sais, c'est que la curiosité vous perdra.",
						"spanish": "Todo lo que sé es que la curiosidad los matará.",
						"vietnamese": "Điều ta biết là, sự tò mò sẽ giết chết các ngươi.",
						"thai": "ที่ข้ารู้คือ ความอยากรู้อยากเห็นจะนำพาความตายมาสู่พวกเจ้า",
						"hindi": "मैं बस इतना जानता हूँ कि जिज्ञासा ही तुम्हें मार डालेगी।"
					},
					"emotion": "sad",
					"speaker": "ashur"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"content": {
						"korean": "어둠 속에서, 삭제된 기록의 그림자가 짙게 드리웠다.",
						"english": "In the darkness, the shadow of deleted records loomed heavy.",
						"japanese": "闇の中、削除された記録の影が色濃く垂れ込めていた。",
						"chinese": "黑暗中，被删除记录的阴影浓重地笼罩着。",
						"french": "Dans l'obscurité, l'ombre des enregistrements supprimés planait lourdement.",
						"spanish": "En la oscuridad, la sombra de los registros eliminados se cernía pesadamente.",
						"vietnamese": "Trong bóng tối, bóng dáng của những ghi chép đã xóa phủ xuống dày đặc.",
						"thai": "ในความมืด เงาของบันทึกที่ถูกลบเลือนได้ทอดทับลงมาอย่างมืดมิด",
						"hindi": "अंधेरे में, हटाए गए रिकॉर्ड्स की परछाई घनी थी।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "random_boss",
					"spot": [
						5,
						3
					],
					"type": "direction"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "어둠을 헤집는다고 빛이 나올 줄 알았나? 착각은 죄다.",
						"english": "Did you think sifting through darkness would bring light? Delusion is sin.",
						"japanese": "闇をかき分ければ光が現れるとでも思ったか？思い違いは罪だ。",
						"chinese": "你以为拨开黑暗就能看到光明吗？错觉是罪。",
						"french": "Pensais-tu que remuer les ténèbres apporterait la lumière ? L'illusion est un péché.",
						"spanish": "¿Creíste que revolver la oscuridad traería luz? La ilusión es un pecado.",
						"vietnamese": "Ngươi tưởng rằng đào bới bóng tối sẽ thấy ánh sáng ư? Nhầm lẫn là tội lỗi.",
						"thai": "เจ้าคิดว่าการแหวกว่ายในความมืดจะนำพาแสงสว่างมางั้นรึ? ความหลงผิดคือบาป",
						"hindi": "क्या तुम्हें लगा था कि अंधेरे में खोजने से रोशनी मिलेगी? यह गलतफ़हमी एक पाप है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "감춰진 진실이 뭔데! 네놈들이 숨기려는 게 뭐야!",
						"english": "What is the hidden truth! What are you trying to hide!",
						"japanese": "隠された真実とは何だ！貴様らが隠そうとしているものは何だ！",
						"chinese": "隐藏的真相是什么！你们到底想藏什么！",
						"french": "Quelle est la vérité cachée ! Qu'est-ce que vous essayez de cacher !",
						"spanish": "¡Cuál es la verdad oculta! ¡Qué intentan esconder!",
						"vietnamese": "Sự thật bị che giấu là gì! Các ngươi đang cố che giấu điều gì!",
						"thai": "ความจริงที่ถูกซ่อนไว้คืออะไร! พวกเจ้ากำลังปกปิดอะไรอยู่!",
						"hindi": "छिपी हुई सच्चाई क्या है! तुम लोग क्या छुपाने की कोशिश कर रहे हो!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "알아봤자, 고통스러울 뿐이다.",
						"english": "Even if you knew, it would only bring pain.",
						"japanese": "知ったところで、苦しむだけだ。",
						"chinese": "就算知道了，也只会徒增痛苦。",
						"french": "Même si tu savais, ça n'apporterait que de la douleur.",
						"spanish": "Aunque lo supieras, solo te traería dolor.",
						"vietnamese": "Dù có biết, cũng chỉ thêm đau khổ mà thôi.",
						"thai": "ถึงได้รู้ไป ก็มีแต่ความเจ็บปวดเท่านั้น",
						"hindi": "जान भी लिया तो, सिर्फ़ दर्द ही मिलेगा।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "비겁하게 진실을 숨기지 마라!",
						"english": "Don't cowardly hide the truth!",
						"japanese": "卑怯にも真実を隠すな！",
						"chinese": "别懦弱地隐藏真相！",
						"french": "Ne cachez pas lâchement la vérité !",
						"spanish": "¡No escondas la verdad cobardemente!",
						"vietnamese": "Đừng hèn nhát che giấu sự thật!",
						"thai": "อย่าซ่อนความจริงอย่างคนขี้ขลาด!",
						"hindi": "कायरों की तरह सच मत छुपाओ!"
					},
					"emotion": "angry",
					"speaker": "character_3"
				},
				{
					"type": "speech",
					"content": {
						"korean": "크하하! 넌 그저, 거대한 흐름 속의 티끌일 뿐.",
						"english": "Hahaha! You are merely a speck in the grand current.",
						"japanese": "クハハハ！お前はただ、巨大な流れの中の塵に過ぎない。",
						"chinese": "哈哈哈！你不过是浩瀚洪流中的一粒微尘罢了。",
						"french": "Hahaha ! Tu n'es qu'une poussière dans le grand courant.",
						"spanish": "¡Jajaja! Eres simplemente una mota de polvo en la gran corriente.",
						"vietnamese": "Khà khà! Ngươi chỉ là một hạt bụi trong dòng chảy vĩ đại mà thôi.",
						"thai": "คิก คิก! เจ้าเป็นแค่เพียงละอองธุลีในกระแสอันยิ่งใหญ่เท่านั้น",
						"hindi": "हाहाहा! तुम तो बस एक विशाल धारा में एक कण मात्र हो।"
					},
					"speaker": "random_boss",
					"emotion": "happy"
				},
				{
					"content": {
						"korean": "숨 막히는 침묵. 진실의 무게가 공간을 짓눌렀다.",
						"english": "Suffocating silence. The weight of truth crushed the space.",
						"japanese": "息詰まる沈黙。真実の重みが空間を押し潰した。",
						"chinese": "令人窒息的沉默。真相的重量压垮了空间。",
						"french": "Un silence étouffant. Le poids de la vérité écrasait l'espace.",
						"spanish": "Un silencio asfixiante. El peso de la verdad aplastó el espacio.",
						"vietnamese": "Sự im lặng nghẹt thở. Sức nặng của sự thật đè nát không gian.",
						"thai": "ความเงียบที่น่าอึดอัดใจ น้ำหนักของความจริงได้กดทับพื้นที่นี้ไว้",
						"hindi": "दम घोंटने वाली खामोशी। सच्चाई के बोझ ने जगह को कुचल दिया।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"사막은 오래된 진실을 감추고 있었다.",
			"황금빛 모래 아래, 잊혀진 왕가의 기록.",
			"뒤틀린 글자들 속에서, 누군가의 흔적이 발견된다.",
			"그리고 진실은, 언제나 목마른 자를 부르는 법."
		],
		"english": [
			"The desert held an ancient truth.",
			"Beneath golden sands, the forgotten royal records.",
			"Amidst distorted letters, traces of someone are found.",
			"And truth always calls to those who thirst for it."
		],
		"japanese": [
			"砂漠は古き真実を隠していた。",
			"黄金の砂の下、忘れ去られた王家の記録。",
			"歪んだ文字の中に、誰かの痕跡が見つかる。",
			"そして真実は、常に渇望する者を呼ぶ。"
		],
		"chinese": [
			"沙漠隐藏着古老的真相。",
			"金色沙土之下，被遗忘的王室记录。",
			"在扭曲的文字中，发现了某人的踪迹。",
			"而真相，总是召唤着渴望它的人。"
		],
		"french": [
			"Le désert dissimulait une vérité ancienne.",
			"Sous les sables dorés, les annales royales oubliées.",
			"Au milieu des lettres tordues, des traces de quelqu'un sont découvertes.",
			"Et la vérité appelle toujours ceux qui ont soif."
		],
		"spanish": [
			"El desierto ocultaba una verdad ancestral.",
			"Bajo las arenas doradas, los registros reales olvidados.",
			"Entre letras distorsionadas, se encuentran rastros de alguien.",
			"Y la verdad siempre llama a quienes tienen sed."
		],
		"vietnamese": [
			"Sa mạc ẩn chứa một sự thật cổ xưa.",
			"Dưới lớp cát vàng, những ghi chép hoàng gia bị lãng quên.",
			"Giữa những dòng chữ méo mó, dấu vết của ai đó được tìm thấy.",
			"Và sự thật, luôn gọi mời những kẻ khao khát nó."
		],
		"thai": [
			"ทะเลทรายซ่อนความจริงอันเก่าแก่ไว้",
			"ใต้ผืนทรายสีทอง บันทึกราชวงศ์ที่ถูกลืม",
			"ท่ามกลางอักษรบิดเบี้ยว ร่องรอยของใครบางคนถูกพบ",
			"และความจริง มักจะเรียกหาผู้ที่กระหายเสมอ"
		],
		"hindi": [
			"रेगिस्तान ने एक प्राचीन सत्य को छिपा रखा था।",
			"सुनहरी रेत के नीचे, शाही अभिलेख भुला दिए गए थे।",
			"विकृत अक्षरों के बीच, किसी के निशान मिलते हैं।",
			"और सत्य, हमेशा प्यासे को पुकारता है।"
		]
	}
} as const;
