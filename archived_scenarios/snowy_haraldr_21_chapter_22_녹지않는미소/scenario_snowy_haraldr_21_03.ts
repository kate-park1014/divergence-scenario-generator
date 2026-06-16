export const scenario_snowy_haraldr_21_03 = {
	"scenario_id": "snowy_haraldr_21_03",
	"order": 3,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"inka": {
			"id": "mon_583e945a-1e2f-428b-a251-b428f25b4052",
			"name": {
				"korean": "인카",
				"english": "Inka",
				"japanese": "インカ",
				"chinese": "因卡",
				"french": "Inka",
				"spanish": "Inka",
				"vietnamese": "Inka",
				"thai": "อินคา",
				"hindi": "इंंका"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/97f4545b-2e8a-4688-3e4e-b34bb246dd00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f27763ba-2358-4fd3-c813-0f0b59dcac00/public"
		},
		"haraldr": {
			"name": "Haraldr"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"Haraldr의 미소는 늘 똑같았다.",
			"하지만 그 미소 뒤에는 다른 무언가가 있었다.",
			"잉카는 알았다. 저건 그저 배고픈 자의 비명이라는 것을.",
			"괴물조차, 그저 배고플 뿐이었다."
		],
		"english": [
			"Haraldr's smile was always the same.",
			"But behind that smile, there was something else.",
			"Inka knew. It was just the scream of the hungry.",
			"Even monsters were just hungry."
		],
		"japanese": [
			"ハラルドの笑顔はいつも同じだった。",
			"しかし、その笑顔の裏には別の何かがあった。",
			"インカは知っていた。あれはただ、飢えた者の悲鳴だと。",
			"怪物ですら、ただ空腹なだけだった。"
		],
		"chinese": [
			"哈拉尔德的笑容总是和往常一样。",
			"但在那笑容背后，隐藏着别的东西。",
			"印卡知道。那不过是饥饿者的悲鸣。",
			"即使是怪物，也只是饥饿而已。"
		],
		"french": [
			"Le sourire d'Haraldr était toujours le même.",
			"Mais derrière ce sourire, il y avait autre chose.",
			"Inka le savait. Ce n'était que le cri des affamés.",
			"Même les monstres n'étaient que des affamés."
		],
		"spanish": [
			"La sonrisa de Haraldr era siempre la misma.",
			"Pero detrás de esa sonrisa, había algo más.",
			"Inka lo sabía. Era solo el grito del hambriento.",
			"Incluso los monstruos, solo tenían hambre."
		],
		"vietnamese": [
			"Nụ cười của Haraldr lúc nào cũng vậy.",
			"Nhưng đằng sau nụ cười ấy, có thứ gì đó khác.",
			"Inka biết. Đó chỉ là tiếng kêu của kẻ đói khát.",
			"Ngay cả quái vật, cũng chỉ đói mà thôi."
		],
		"thai": [
			"รอยยิ้มของ Haraldr เหมือนเดิมเสมอ",
			"แต่เบื้องหลังรอยยิ้มนั้น มีบางสิ่งบางอย่างที่แตกต่างออกไป",
			"อิงคา รู้ดี นั่นเป็นแค่เสียงกรีดร้องของผู้หิวโหย",
			"แม้แต่สัตว์ประหลาด ก็แค่หิวเท่านั้น"
		],
		"hindi": [
			"हेराल्ड की मुस्कान हमेशा एक जैसी थी।",
			"लेकिन उस मुस्कान के पीछे कुछ और था।",
			"इंका जानती थी। वह बस भूखे की चीख थी।",
			"यहां तक कि राक्षस भी, बस भूखे थे।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "얼음 간판마다 Haraldr의 미소가 새겨진 거리. 그의 미소는 한 번도 변하지 않았다.",
						"english": "A street where Haraldr's smile was carved into every ice sign. His smile never changed.",
						"japanese": "氷の看板すべてにハラルドの笑顔が刻まれた通り。彼の笑顔は一度も変わらなかった。",
						"chinese": "每块冰招牌上都刻着哈拉尔德笑容的街道。他的笑容从未改变。",
						"french": "Une rue où le sourire d'Haraldr était gravé sur chaque enseigne de glace. Son sourire n'avait jamais changé.",
						"spanish": "Una calle donde la sonrisa de Haraldr estaba grabada en cada cartel de hielo. Su sonrisa nunca cambió.",
						"vietnamese": "Một con phố với nụ cười của Haraldr được khắc trên mọi bảng hiệu băng. Nụ cười của anh ấy chưa bao giờ thay đổi.",
						"thai": "ถนนที่รอยยิ้มของ Haraldr ถูกแกะสลักอยู่บนป้ายน้ำแข็งทุกป้าย รอยยิ้มของเขาไม่เคยเปลี่ยนเลย",
						"hindi": "एक ऐसी गली जहां हर बर्फ के संकेत पर हेराल्ड की मुस्कान खुदी हुई थी। उसकी मुस्कान कभी नहीं बदली।"
					}
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						3
					],
					"speaker": "inka",
					"type": "direction"
				},
				{
					"content": {
						"korean": "...이 사람, 계속 웃고 있네.",
						"english": "...This person keeps smiling.",
						"japanese": "...この人、ずっと笑ってるな。",
						"chinese": "……这个人，一直在笑。",
						"french": "...Cette personne sourit toujours.",
						"spanish": "...Esta persona sigue sonriendo.",
						"vietnamese": "...Người này cứ cười mãi.",
						"thai": "...คนนี้ยังคงยิ้มอยู่เลย",
						"hindi": "...यह व्यक्ति मुस्कुराता ही रहता है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "inka"
				},
				{
					"spot": [
						6,
						3
					],
					"type": "direction",
					"speaker": "haraldr",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "하하! 잘 오셨습니다! 무엇을 도와드릴까요?",
						"english": "Haha! Welcome! How can I help you?",
						"japanese": "ハハ！ようこそ！何かお手伝いしましょうか？",
						"chinese": "哈哈！欢迎光临！有什么可以帮助您的吗？",
						"french": "Haha ! Bienvenue ! Comment puis-je vous aider ?",
						"spanish": "¡Jaja! ¡Bienvenido! ¿En qué puedo ayudarle?",
						"vietnamese": "Haha! Chào mừng! Tôi có thể giúp gì cho quý khách?",
						"thai": "ฮ่าฮ่า! ยินดีต้อนรับ! มีอะไรให้ช่วยไหมครับ/คะ?",
						"hindi": "हाहा! आपका स्वागत है! मैं आपकी क्या सहायता कर सकता हूँ?"
					},
					"speaker": "haraldr",
					"type": "speech",
					"emotion": "happy"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "여긴 뭐 파는 곳이야?",
						"english": "What do you sell here?",
						"japanese": "ここは何を売ってるんだ？",
						"chinese": "这里是卖什么的？",
						"french": "Qu'est-ce qu'on vend ici ?",
						"spanish": "¿Qué se vende aquí?",
						"vietnamese": "Đây là nơi bán gì vậy?",
						"thai": "ที่นี่ขายอะไร?",
						"hindi": "यहां क्या बेचते हो?"
					}
				},
				{
					"emotion": "happy",
					"type": "speech",
					"speaker": "haraldr",
					"content": {
						"korean": "모든 것을 팝니다! 손님을 위해, 언제든! 헤헤...",
						"english": "We sell everything! For our guests, anytime! Hehe...",
						"japanese": "何でも売っています！お客様のために、いつでも！へへ...",
						"chinese": "什么都卖！随时为客人服务！呵呵……",
						"french": "Nous vendons tout ! Pour nos clients, à tout moment ! Hehe...",
						"spanish": "¡Vendemos de todo! ¡Para nuestros clientes, en cualquier momento! Jeje...",
						"vietnamese": "Bán tất cả mọi thứ! Vì khách hàng, bất cứ lúc nào! Hehe...",
						"thai": "เราขายทุกอย่าง! เพื่อลูกค้าของเราเสมอ! ฮิฮิ...",
						"hindi": "हम सब कुछ बेचते हैं! हमारे मेहमानों के लिए, कभी भी! हेहे..."
					}
				},
				{
					"content": {
						"korean": "어서 안으로... 안으로! 어서 오세요...",
						"english": "Come inside... Inside! Welcome...",
						"japanese": "さあ、中へ... 中へ！ようこそ...",
						"chinese": "快进来... 进来！欢迎光临……",
						"french": "Entrez... Entrez ! Bienvenue...",
						"spanish": "Entra... ¡Adelante! Bienvenido...",
						"vietnamese": "Mời vào... Vào đi! Chào mừng...",
						"thai": "เชิญเข้ามาข้างใน... ข้างใน! ยินดีต้อนรับ...",
						"hindi": "अंदर आओ... अंदर! स्वागत है..."
					},
					"speaker": "haraldr",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "왜 이렇게 서두르지?",
						"english": "Why the rush?",
						"japanese": "なぜそんなに急ぐ？",
						"chinese": "为什么这么急？",
						"french": "Pourquoi tant de hâte ?",
						"spanish": "¿Por qué tanta prisa?",
						"vietnamese": "Sao lại vội vàng vậy?",
						"thai": "ทำไมรีบร้อนจัง?",
						"hindi": "इतनी जल्दी क्यों है?"
					}
				}
			]
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "쓰러진 괴물의 몸에서 굶주림이 느껴졌다.",
						"english": "Hunger emanated from the fallen beast.",
						"japanese": "倒れた怪物の体から飢えが感じられた。",
						"chinese": "从倒下的怪物身体里感受到了饥饿。",
						"french": "La faim émanait du corps du monstre tombé.",
						"spanish": "Se sentía el hambre del cuerpo del monstruo caído.",
						"vietnamese": "Cảm giác đói khát bốc ra từ cơ thể quái vật đã ngã xuống.",
						"thai": "ความหิวโหยแผ่ออกมาจากร่างของสัตว์ประหลาดที่ล้มลง",
						"hindi": "गिरे हुए राक्षस के शरीर से भूख महसूस हुई।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "그는... 그는... 곧 모든 것을 먹을 것이다...",
						"english": "He... he will soon devour everything...",
						"japanese": "彼が…彼が…やがてすべてを食い尽くすだろう…",
						"chinese": "他...他...很快就会吞噬一切...",
						"french": "Il... il... dévorera bientôt tout...",
						"spanish": "Él... él... pronto lo devorará todo...",
						"vietnamese": "Hắn... hắn... sẽ sớm nuốt chửng mọi thứ...",
						"thai": "เขา... เขา... จะกลืนกินทุกสิ่งในไม่ช้า...",
						"hindi": "वह... वह... जल्द ही सब कुछ खा जाएगा..."
					}
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "inka",
					"type": "direction",
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "inka",
					"content": {
						"korean": "...이제 좀 편해졌기를.",
						"english": "...May it find peace now.",
						"japanese": "…今は少し楽になったことを願う。",
						"chinese": "……希望现在能好受些。",
						"french": "...Puisse-t-il enfin reposer en paix.",
						"spanish": "...Espero que ahora descanse.",
						"vietnamese": "...Mong rằng giờ đã thoải mái hơn.",
						"thai": "...หวังว่าตอนนี้จะสบายขึ้นแล้ว",
						"hindi": "...अब कुछ आराम मिला हो।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "Haraldr의 미소는 더욱 깊은 어둠을 감추고 있었다.",
						"english": "Haraldr's smile concealed a deeper darkness.",
						"japanese": "ハラルドルの微笑みは、より深い闇を隠していた。",
						"chinese": "哈拉尔德的笑容隐藏着更深的黑暗。",
						"french": "Le sourire d'Haraldr cachait une obscurité plus profonde.",
						"spanish": "La sonrisa de Haraldr ocultaba una oscuridad aún más profunda.",
						"vietnamese": "Nụ cười của Haraldr che giấu một bóng tối sâu thẳm hơn.",
						"thai": "รอยยิ้มของ Haraldr ซ่อนเร้นความมืดมิดที่ลึกซึ้งกว่า",
						"hindi": "हारल्ड्र की मुस्कान एक गहरा अंधेरा छुपा रही थी।"
					}
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "굶주린 괴물이 탐험대를 집어삼켰다.",
						"english": "The hungry monster devoured the expedition party.",
						"japanese": "飢えた怪物が探検隊を飲み込んだ。",
						"chinese": "饥饿的怪物吞噬了探险队。",
						"french": "Le monstre affamé a dévoré l'expédition.",
						"spanish": "El monstruo hambriento devoró a la expedición.",
						"vietnamese": "Con quái vật đói khát đã nuốt chửng đoàn thám hiểm.",
						"thai": "สัตว์ประหลาดผู้หิวโหยกลืนกินคณะสำรวจ",
						"hindi": "भूखे राक्षस ने खोज दल को निगल लिया।"
					}
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"speaker": "inka"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "inka",
					"content": {
						"korean": "...아니야. 그저 배고픈 것뿐이야.",
						"english": "...No. It's just hungry.",
						"japanese": "…いや。ただお腹が空いているだけだ。",
						"chinese": "……不。它只是饿了而已。",
						"french": "...Non. Il a juste faim.",
						"spanish": "...No. Solo tiene hambre.",
						"vietnamese": "...Không. Nó chỉ đói thôi.",
						"thai": "...ไม่สิ แค่มันหิวเท่านั้นเอง",
						"hindi": "...नहीं। वह बस भूखा है।"
					}
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "점포 뒤편, 인카의 눈에 믿을 수 없는 풍경이 들어왔다.",
						"english": "Behind the shop, an unbelievable sight met Inka's eyes.",
						"japanese": "店の裏手で、インカの目に信じられない光景が飛び込んできた。",
						"chinese": "店铺后面，印卡看到了一幕令人难以置信的景象。",
						"french": "Derrière la boutique, une vision incroyable s'offrit aux yeux d'Inka.",
						"spanish": "Detrás de la tienda, una escena increíble apareció ante los ojos de Inka.",
						"vietnamese": "Phía sau cửa hàng, một cảnh tượng không thể tin nổi đập vào mắt Inka.",
						"thai": "หลังร้านค้า สายตาของอินก้าจับจ้องไปที่ภาพที่ไม่อาจเชื่อได้",
						"hindi": "दुकान के पीछे, इंका की आँखों में एक अविश्वसनीय दृश्य आया।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"speaker": "inka"
				},
				{
					"speaker": "inka",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "...이건 뭐야?",
						"english": "...What is this?",
						"japanese": "...これは何？",
						"chinese": "...这是什么？",
						"french": "...Qu'est-ce que c'est ?",
						"spanish": "...¿Qué es esto?",
						"vietnamese": "...Cái gì đây?",
						"thai": "...นี่มันอะไร?",
						"hindi": "...यह क्या है?"
					}
				},
				{
					"content": {
						"korean": "산처럼 쌓인 음식들. 손도 대지 않은 채 얼어붙어 있었다.",
						"english": "Mountains of food, untouched and frozen solid.",
						"japanese": "山のように積まれた食べ物。手つかずのまま凍りついていた。",
						"chinese": "食物堆积如山，未被触碰，冻结成冰。",
						"french": "Des montagnes de nourriture, intactes et figées par le froid.",
						"spanish": "Montañas de comida, intactas y congeladas.",
						"vietnamese": "Những núi thức ăn, không hề chạm vào, đóng băng cứng ngắc.",
						"thai": "อาหารกองเป็นภูเขา ไม่ได้แตะต้อง และแข็งตัว",
						"hindi": "भोजन के पहाड़, अछूते और जमे हुए थे।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "haraldr",
					"type": "direction",
					"spot": [
						6,
						3
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "손님! 여긴 위험해요! 하하하...",
						"english": "Customer! It's dangerous here! Hahaha...",
						"japanese": "お客さん！ここは危険ですよ！ハハハ...",
						"chinese": "顾客！这里很危险！哈哈哈...",
						"french": "Client ! C'est dangereux ici ! Hahaha...",
						"spanish": "¡Cliente! ¡Aquí es peligroso! Jajaja...",
						"vietnamese": "Khách hàng! Chỗ này nguy hiểm lắm! Hahaha...",
						"thai": "ลูกค้า! ที่นี่อันตรายนะ! ฮ่าฮ่าฮ่า...",
						"hindi": "ग्राहक! यहाँ ख़तरा है! हाहाहा..."
					},
					"speaker": "haraldr",
					"emotion": "happy",
					"type": "speech"
				},
				{
					"content": {
						"korean": "왜 이 음식을 먹지 않아? 당신, 배고프잖아.",
						"english": "Why aren't you eating this food? You're hungry.",
						"japanese": "なぜこの食べ物を食べない？君、お腹空いてるだろ。",
						"chinese": "你为什么不吃这些食物？你饿了。",
						"french": "Pourquoi ne manges-tu pas cette nourriture ? Tu as faim.",
						"spanish": "¿Por qué no comes esta comida? Tienes hambre.",
						"vietnamese": "Sao không ăn đồ ăn này? Anh đói mà.",
						"thai": "ทำไมไม่กินอาหารพวกนี้? นายหิวนี่นา",
						"hindi": "तुम यह खाना क्यों नहीं खाते? तुम्हें भूख लगी है।"
					},
					"speaker": "inka",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "아닙니다! 전 배부릅니다! 늘 행복합니다! 하하하!",
						"english": "No! I'm full! I'm always happy! Hahaha!",
						"japanese": "違います！お腹いっぱいです！いつも幸せです！ハハハ！",
						"chinese": "不！我饱了！我一直很幸福！哈哈哈！",
						"french": "Non ! Je suis rassasié ! Je suis toujours heureux ! Hahaha !",
						"spanish": "¡No! ¡Estoy lleno! ¡Siempre soy feliz! ¡Jajaja!",
						"vietnamese": "Không! Tôi no rồi! Tôi luôn hạnh phúc! Hahaha!",
						"thai": "ไม่ครับ! ผมอิ่มแล้ว! ผมมีความสุขเสมอ! ฮ่าฮ่าฮ่า!",
						"hindi": "नहीं! मैं भर पेट हूँ! मैं हमेशा खुश हूँ! हाहाहा!"
					},
					"speaker": "haraldr",
					"emotion": "happy",
					"type": "speech"
				},
				{
					"content": {
						"korean": "거짓말. 당신 눈은 말하고 있어. 그냥... 배고픈 거야.",
						"english": "Lies. Your eyes are telling me. You're just... hungry.",
						"japanese": "嘘だ。君の目が語っている。ただ...お腹が空いているだけだ。",
						"chinese": "谎言。你的眼睛在告诉我。你只是...饿了。",
						"french": "Mensonges. Tes yeux me le disent. Tu as juste... faim.",
						"spanish": "Mentira. Tus ojos me lo dicen. Simplemente... tienes hambre.",
						"vietnamese": "Nói dối. Mắt anh đang nói. Anh chỉ là... đói thôi.",
						"thai": "โกหก. ดวงตาของนายกำลังบอก. แค่...นายหิวต่างหาก",
						"hindi": "झूठ। तुम्हारी आँखें बता रही हैं। तुम बस... भूखे हो।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "inka"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "haraldr",
					"content": {
						"korean": "배고프지 않아요! 저를... 방해하지 마세요! 히히히...",
						"english": "I'm not hungry! Don't... bother me! Hehehe...",
						"japanese": "お腹空いてない！私を...邪魔しないで！ヒヒヒ...",
						"chinese": "我不饿！不要...打扰我！嘻嘻嘻...",
						"french": "Je n'ai pas faim ! Ne... me dérangez pas ! Hihihi...",
						"spanish": "¡No tengo hambre! ¡No me... molestes! Jajaja...",
						"vietnamese": "Tôi không đói! Đừng... làm phiền tôi! Hihihi...",
						"thai": "ไม่หิว! อย่า...มารบกวนฉันนะ! ฮิฮิฮิ...",
						"hindi": "मुझे भूख नहीं लगी है! मुझे... परेशान मत करो! हीहीही..."
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "쟤 좀 이상해. 싸워야 할 것 같아.",
						"english": "She's a bit strange. I think I need to fight her.",
						"japanese": "あいつ、ちょっと変だ。戦うべきだろう。",
						"chinese": "她有点奇怪。我好像得和她打一架。",
						"french": "Elle est un peu bizarre. Je crois que je dois la combattre.",
						"spanish": "Está un poco extraña. Creo que tendré que luchar contra ella.",
						"vietnamese": "Cô ta hơi lạ. Mình nghĩ phải đánh cô ta rồi.",
						"thai": "เธอแปลกๆ นะ. สงสัยต้องสู้กับเธอแล้ว",
						"hindi": "वह थोड़ी अजीब है। मुझे लगता है कि मुझे उससे लड़ना पड़ेगा।"
					}
				},
				{
					"speaker": "random_boss",
					"type": "direction",
					"spot": [
						4,
						1
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그를 방해하지 마라. 그에게 허락된 것은 미소뿐.",
						"english": "Don't disturb him. A smile is all he's allowed.",
						"japanese": "彼を邪魔するな。彼に許されたのは微笑みだけだ。",
						"chinese": "不要打扰他。他只被允许微笑。",
						"french": "Ne le dérangez pas. Seul un sourire lui est permis.",
						"spanish": "No lo molestes. Solo se le permite sonreír.",
						"vietnamese": "Đừng làm phiền hắn. Hắn chỉ được phép mỉm cười.",
						"thai": "อย่ารบกวนเขา สิ่งที่เขาได้รับอนุญาตคือรอยยิ้มเท่านั้น",
						"hindi": "उसे परेशान मत करो। उसे केवल मुस्कुराने की इजाजत है।"
					}
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "Haraldr의 점포는 더욱 깊은 곳으로 이어졌다.",
						"english": "Haraldr's shop led to deeper places.",
						"japanese": "ハラルドルの店は、さらに深い場所へと続いていた。",
						"chinese": "哈拉尔德的店铺通向更深处。",
						"french": "La boutique d'Haraldr menait à des profondeurs plus grandes.",
						"spanish": "La tienda de Haraldr conducía a lugares más profundos.",
						"vietnamese": "Cửa hàng của Haraldr dẫn đến những nơi sâu hơn.",
						"thai": "ร้านค้าของ Haraldr นำไปสู่สถานที่ที่ลึกยิ่งกว่า",
						"hindi": "हारल्ड्र की दुकान और भी गहरे स्थानों तक जाती थी।"
					}
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "haraldr",
					"type": "direction",
					"spot": [
						6,
						3
					]
				},
				{
					"content": {
						"korean": "하하, 어서 오세요! 더 깊은 곳에서 더 많은 행복이 기다립니다!",
						"english": "Haha, welcome! More happiness awaits in the deeper reaches!",
						"japanese": "ハハ、ようこそ！深淵には、さらなる幸福が待っています！",
						"chinese": "哈哈，欢迎光临！更深处有更多的幸福等着您！",
						"french": "Haha, bienvenue ! Plus de bonheur vous attend dans les profondeurs !",
						"spanish": "¡Jaja, bienvenidos! ¡Más felicidad os espera en lo más profundo!",
						"vietnamese": "Haha, chào mừng! Nhiều hạnh phúc hơn đang chờ đợi ở những nơi sâu thẳm hơn!",
						"thai": "ฮ่าฮ่า ยินดีต้อนรับ! ความสุขที่มากขึ้นรออยู่เบื้องลึกกว่านั้น!",
						"hindi": "हाहा, स्वागत है! और गहराई में और भी खुशी आपका इंतजार कर रही है!"
					},
					"speaker": "haraldr",
					"emotion": "happy",
					"type": "speech"
				},
				{
					"spot": [
						2,
						3
					],
					"type": "direction",
					"speaker": "inka",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "inka",
					"content": {
						"korean": "저 사람... 정말 괜찮을까?",
						"english": "That person... are they really alright?",
						"japanese": "あの人…本当に大丈夫だろうか？",
						"chinese": "那个人……真的没事吗？",
						"french": "Cette personne... est-elle vraiment bien ?",
						"spanish": "Esa persona... ¿estará realmente bien?",
						"vietnamese": "Người đó... liệu có thực sự ổn không?",
						"thai": "คนนั้น... เขาโอเคจริงๆ เหรอ?",
						"hindi": "वह व्यक्ति... क्या वह वास्तव में ठीक है?"
					}
				},
				{
					"content": {
						"korean": "뭐가 괜찮다는 거야? 저 미소가 더 소름 끼쳐.",
						"english": "What's okay about it? That smile is even more creepy.",
						"japanese": "何が大丈夫だって言うんだ？その笑顔の方がよっぽど気味が悪い。",
						"chinese": "什么叫没事？那笑容更让人毛骨悚然。",
						"french": "Qu'est-ce qui va bien ? Ce sourire est encore plus effrayant.",
						"spanish": "¿Qué tiene de bueno? Esa sonrisa es aún más espeluznante.",
						"vietnamese": "Có gì mà ổn chứ? Nụ cười đó còn đáng sợ hơn.",
						"thai": "อะไรที่ว่าไม่เป็นไร? รอยยิ้มนั่นยิ่งน่าขนลุก.",
						"hindi": "क्या ठीक है इसमें? वह मुस्कान और भी डरावनी है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "하하하! 소름 끼치다뇨! 저는 그저 손님을 환영할 뿐! 으으읍...",
						"english": "Hahaha! Creepy, you say! I'm just welcoming a guest! Ugh...",
						"japanese": "ハハハ！気味が悪いだなんて！私はただお客様を歓迎しているだけですよ！うぅっ...",
						"chinese": "哈哈哈！毛骨悚然？我只是在欢迎客人而已！呜呃...",
						"french": "Hahaha ! Effrayant, vous dites ! Je ne fais qu'accueillir un invité ! Ouf...",
						"spanish": "¡Jajajaja! ¿Espeluznante, dices? ¡Solo estoy dando la bienvenida a un invitado! Uf...",
						"vietnamese": "Hahaha! Đáng sợ ư! Tôi chỉ đang chào đón khách thôi! Ưm...",
						"thai": "ฮ่าฮ่าฮ่า! น่าขนลุกงั้นเหรอ! ฉันแค่ต้อนรับแขกเท่านั้นเอง! อึ๋ย...",
						"hindi": "हाहाहा! डरावना, कहते हो! मैं बस मेहमान का स्वागत कर रहा हूँ! उह..."
					},
					"speaker": "haraldr",
					"emotion": "happy",
					"type": "speech"
				},
				{
					"content": {
						"korean": "Haraldr의 손이 무의식적으로 탐험대의 보따리를 향했다. 미소는 그대로였다.",
						"english": "Haraldr's hand unconsciously reached for the expedition's bundle. His smile remained.",
						"japanese": "ハラルドルの手が無意識のうちに探検隊の荷物に向かった。その笑顔は変わらなかった。",
						"chinese": "哈拉尔德的手不自觉地伸向了探险队的包裹。笑容依旧。",
						"french": "La main d'Haraldr se porta inconsciemment vers le paquet de l'expédition. Son sourire demeurait.",
						"spanish": "La mano de Haraldr se extendió inconscientemente hacia el bulto de la expedición. La sonrisa permanecía.",
						"vietnamese": "Tay của Haraldr vô thức vươn về phía gói đồ của đoàn thám hiểm. Nụ cười vẫn vậy.",
						"thai": "มือของฮาราลเดอร์เอื้อมไปที่ห่อของคณะสำรวจโดยไม่รู้ตัว รอยยิ้มของเขายังคงอยู่.",
						"hindi": "हरल्ड का हाथ अनजाने में अभियान के बंडल की ओर बढ़ा। मुस्कान वैसी ही बनी रही।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "손 떼.",
						"english": "Hands off.",
						"japanese": "手を離せ。",
						"chinese": "住手。",
						"french": "Lâche ça.",
						"spanish": "Quita las manos.",
						"vietnamese": "Bỏ tay ra.",
						"thai": "ปล่อยมือ.",
						"hindi": "हाथ हटाओ।"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "죄송합니다! 실례했군요! 하하하!",
						"english": "My apologies! How rude of me! Hahaha!",
						"japanese": "申し訳ありません！失礼しました！ハハハ！",
						"chinese": "抱歉！失礼了！哈哈哈！",
						"french": "Désolé ! Quelle impolitesse de ma part ! Hahaha !",
						"spanish": "¡Lo siento! ¡Qué grosero de mi parte! ¡Jajajaja!",
						"vietnamese": "Xin lỗi! Tôi đã thất lễ rồi! Hahaha!",
						"thai": "ขออภัยครับ/ค่ะ! เสียมารยาทจริงๆ! ฮ่าฮ่าฮ่า!",
						"hindi": "क्षमा करें! मैंने असभ्यता की! हाहाहा!"
					},
					"speaker": "haraldr",
					"type": "speech",
					"emotion": "happy"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "점포는 이제 미로 같았다. 짙은 한기와 함께 묘한 냄새가 났다.",
						"english": "The shop was now like a labyrinth. A strange smell hung in the air, along with a thick chill.",
						"japanese": "店は今や迷路のようだった。濃い寒気と共に妙な匂いがした。",
						"chinese": "店铺如今像个迷宫。伴随着深重的寒气，弥漫着一股怪异的气味。",
						"french": "La boutique était maintenant comme un labyrinthe. Une odeur étrange et un froid intense y régnaient.",
						"spanish": "La tienda ahora era como un laberinto. Un olor extraño flotaba en el aire, junto con un frío intenso.",
						"vietnamese": "Cửa hàng giờ đây như một mê cung. Một mùi lạ thoang thoảng cùng với cái lạnh buốt giá.",
						"thai": "ร้านค้าตอนนี้เหมือนเขาวงกต มีกลิ่นประหลาดลอยปะปนกับความหนาวเย็นยะเยือก.",
						"hindi": "दुकान अब एक भूलभुलैया जैसी थी। एक अजीब सी गंध और गहरी ठंडक हवा में थी।"
					}
				},
				{
					"spot": [
						6,
						3
					],
					"type": "direction",
					"speaker": "haraldr",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "이런 곳까지 와주셨군요! 정말 감사합니다! 하하하... 이제... 더 이상 갈 곳은 없습니다!",
						"english": "You've come all the way here! Thank you very much! Hahaha... Now... there's nowhere else to go!",
						"japanese": "こんなところまで来てくださったんですね！本当にありがとうございます！ハハハ…もう…これ以上行くところはありませんよ！",
						"chinese": "你们竟然来到了这里！真是太感谢了！哈哈哈……现在……已经无处可去了！",
						"french": "Vous êtes venus jusqu'ici ! Merci beaucoup ! Hahaha... Maintenant... il n'y a plus nulle part où aller !",
						"spanish": "¡Han llegado hasta aquí! ¡Muchas gracias! ¡Jajajaja... Ahora... no hay a dónde más ir!",
						"vietnamese": "Các bạn đã đến tận đây! Thật sự cảm ơn rất nhiều! Hahaha... Bây giờ... không còn nơi nào để đi nữa rồi!",
						"thai": "พวกคุณมาถึงที่นี่แล้ว! ขอบคุณมากจริงๆ! ฮ่าฮ่าฮ่า... ตอนนี้... ไม่มีที่ให้ไปอีกแล้ว!",
						"hindi": "आप यहाँ तक आ गए! बहुत-बहुत धन्यवाद! हाहाहा... अब... और कहीं जाने को नहीं है!"
					},
					"emotion": "happy",
					"type": "speech",
					"speaker": "haraldr"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"speaker": "inka"
				},
				{
					"content": {
						"korean": "Haraldr... 제발 그만해. 이건 당신답지 않아.",
						"english": "Haraldr... Please stop. This isn't like you.",
						"japanese": "ハラルドル…お願いだからやめて。らしくないよ、君。",
						"chinese": "哈拉尔德……求你了，住手。这不像你。",
						"french": "Haraldr... S'il te plaît, arrête. Ce n'est pas toi.",
						"spanish": "Haraldr... Por favor, detente. Esto no es propio de ti.",
						"vietnamese": "Haraldr... Làm ơn dừng lại đi. Đây không phải là anh.",
						"thai": "ฮาราลเดอร์... ได้โปรดหยุดเถอะ นี่ไม่เหมือนนายเลย.",
						"hindi": "हरल्ड... कृपया रुक जाओ। यह तुम नहीं हो।"
					},
					"speaker": "inka",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "아닙니다! 저는 늘 저답습니다! 늘 행복하게! 헤헤헤...",
						"english": "No! I'm always myself! Always happy! Hehehe...",
						"japanese": "違います！私はいつも私らしいです！いつも幸せに！ヘヘヘ…",
						"chinese": "不！我一直都是我自己！一直都很开心！嘿嘿嘿...",
						"french": "Non ! Je suis toujours moi-même ! Toujours heureux ! Héhéhé...",
						"spanish": "¡No! ¡Siempre soy yo mismo! ¡Siempre feliz! Jejeje...",
						"vietnamese": "Không! Tôi luôn là chính mình! Luôn hạnh phúc! Hê hê hê...",
						"thai": "ไม่ใช่ครับ/ค่ะ! ฉันเป็นตัวของตัวเองเสมอ! มีความสุขเสมอ! เฮะเฮะเฮะ...",
						"hindi": "नहीं! मैं हमेशा खुद जैसा ही रहता हूँ! हमेशा खुश! हेहेहे..."
					},
					"speaker": "haraldr",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "얼음 우리 안에 누군가의 그림자가 갇혀 있었다. '불만 고객'이라 적힌 간판이 섬뜩하게 빛났다.",
						"english": "Someone's shadow was trapped inside an ice cage. A sign reading 'Dissatisfied Customer' glowed eerily.",
						"japanese": "氷の檻の中に誰かの影が閉じ込められていた。「不満客」と書かれた看板が不気味に光っていた。",
						"chinese": "冰笼里困着某人的影子。一块写着“不满顾客”的招牌，诡异地闪着光。",
						"french": "L'ombre de quelqu'un était piégée dans une cage de glace. Un panneau indiquant \"Client Insatisfait\" brillait étrangement.",
						"spanish": "La sombra de alguien estaba atrapada dentro de una jaula de hielo. Un cartel que decía \"Cliente Insatisfecho\" brillaba de manera espeluznante.",
						"vietnamese": "Bóng của ai đó bị nhốt trong lồng băng. Một tấm biển ghi 'Khách hàng không hài lòng' phát sáng rùng rợn.",
						"thai": "เงาของใครบางคนถูกขังอยู่ในกรงน้ำแข็ง ป้ายที่เขียนว่า 'ลูกค้าไม่พอใจ' ส่องแสงน่าขนลุก.",
						"hindi": "बर्फ के पिंजरे में किसी की परछाई कैद थी। 'असंतुष्ट ग्राहक' लिखा एक बोर्ड भयावह रूप से चमक रहा था।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "저 안에 사람이 있어! 미쳤군!",
						"english": "Someone's in there! Crazy!",
						"japanese": "中に人がいる！狂ってる！",
						"chinese": "里面有人！疯了！",
						"french": "Il y a quelqu'un là-dedans ! C'est fou !",
						"spanish": "¡Hay alguien ahí dentro! ¡Qué locura!",
						"vietnamese": "Có người trong đó! Điên thật!",
						"thai": "มีคนอยู่ข้างใน! บ้าไปแล้ว!",
						"hindi": "अंदर कोई है! पागल है!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "happy",
					"speaker": "haraldr",
					"content": {
						"korean": "하하하! 그들은... 웃지 않았을 뿐입니다! 어서... 안으로!",
						"english": "Hahaha! They just... didn't laugh! Quick... inside!",
						"japanese": "ハハハ！彼らは…笑わなかっただけだ！さあ…中へ！",
						"chinese": "哈哈哈！他们…只是没笑！快…进去！",
						"french": "Hahaha ! Ils… n'ont juste pas ri ! Venez… à l'intérieur !",
						"spanish": "¡Jajaja! ¡Ellos… simplemente no rieron! ¡Vamos… adentro!",
						"vietnamese": "Hahaha! Bọn họ... chỉ là không cười thôi! Nhanh... vào trong!",
						"thai": "ฮ่าฮ่าฮ่า! พวกเขา...แค่ไม่หัวเราะ! เร็วเข้า...ข้างใน!",
						"hindi": "हाहाहा! वे बस... हंसे नहीं! जल्दी... अंदर आओ!"
					}
				},
				{
					"content": {
						"korean": "...너무 늦은 걸까.",
						"english": "...Is it too late?",
						"japanese": "…もう遅いのか。",
						"chinese": "...太晚了吗？",
						"french": "...Est-ce trop tard ?",
						"spanish": "...¿Será demasiado tarde?",
						"vietnamese": "...Đã quá muộn rồi sao?",
						"thai": "...สายไปแล้วหรือเปล่า?",
						"hindi": "...क्या बहुत देर हो चुकी है?"
					},
					"speaker": "inka",
					"emotion": "sad",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"dialogue": [
				{
					"content": {
						"korean": "점포의 가장 깊은 곳. Haraldr의 미소는 이제 기괴한 일그러짐이 되어 있었다.",
						"english": "Deepest part of the shop. Haraldr's smile had become a grotesque distortion.",
						"japanese": "店の最も奥深く。ハラルドルの笑顔は今や奇怪な歪みとなっていた。",
						"chinese": "店铺最深处。Haraldr的笑容已变成一种诡异的扭曲。",
						"french": "Au plus profond du magasin. Le sourire d'Haraldr était devenu une déformation grotesque.",
						"spanish": "La parte más profunda de la tienda. La sonrisa de Haraldr se había convertido en una distorsión grotesca.",
						"vietnamese": "Sâu nhất trong cửa tiệm. Nụ cười của Haraldr giờ đã biến thành một sự méo mó kỳ dị.",
						"thai": "ส่วนที่ลึกที่สุดของร้าน รอยยิ้มของ Haraldr กลายเป็นความบิดเบี้ยวที่น่าขนลุกแล้ว",
						"hindi": "दुकान के सबसे गहरे हिस्से में। हरल्ड की मुस्कान अब एक विकृत विरूपण बन चुकी थी।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "haraldr",
					"type": "direction",
					"spot": [
						6,
						3
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "haraldr",
					"content": {
						"korean": "드디어... 여기까지 오셨군요! 하하하... 배가... 너무 고픕니다...",
						"english": "Finally... you've come this far! Hahaha... I'm... so hungry...",
						"japanese": "ついに…ここまで来ましたか！ハハハ…お腹が…とても空いています…",
						"chinese": "终于…你到这里了！哈哈哈…我…好饿啊…",
						"french": "Enfin... vous êtes arrivés jusqu'ici ! Hahaha... J'ai... tellement faim...",
						"spanish": "¡Finalmente... han llegado hasta aquí! Jajaja... ¡Tengo... tanta hambre...",
						"vietnamese": "Cuối cùng... các người cũng đến đây rồi! Hahaha... Tôi... đói quá...",
						"thai": "ในที่สุด...พวกคุณก็มาถึงที่นี่แล้ว! ฮ่าฮ่าฮ่า...ฉัน...หิวมาก...",
						"hindi": "आखिरकार... तुम यहाँ तक आ गए! हाहाहा... मुझे... बहुत भूख लगी है..."
					}
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"speaker": "inka"
				},
				{
					"content": {
						"korean": "Haraldr! 이 괴물에게서 벗어나! 제발!",
						"english": "Haraldr! Get away from this monster! Please!",
						"japanese": "ハラルドル！この怪物から離れて！お願いだ！",
						"chinese": "Haraldr！快离开这个怪物！求你了！",
						"french": "Haraldr ! Éloigne-toi de ce monstre ! S'il te plaît !",
						"spanish": "¡Haraldr! ¡Aléjate de este monstruo! ¡Por favor!",
						"vietnamese": "Haraldr! Tránh xa con quái vật này ra! Làm ơn!",
						"thai": "Haraldr! ออกไปจากสัตว์ประหลาดนี่! ได้โปรดเถอะ!",
						"hindi": "हरल्ड! इस राक्षस से दूर हटो! कृपया!"
					},
					"speaker": "inka",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "배고픔은 그의 본질. 너희가 알 수 없는 고통이다.",
						"english": "Hunger is his essence. A pain you cannot comprehend.",
						"japanese": "空腹は彼の本質。お前たちには理解できない苦痛だ。",
						"chinese": "饥饿是他的本质。一种你们无法理解的痛苦。",
						"french": "La faim est son essence. Une douleur que vous ne pouvez pas comprendre.",
						"spanish": "El hambre es su esencia. Un dolor que no podéis comprender.",
						"vietnamese": "Đói khát là bản chất của hắn. Một nỗi đau mà các ngươi không thể hiểu được.",
						"thai": "ความหิวโหยคือแก่นแท้ของเขา ความเจ็บปวดที่พวกเจ้าไม่อาจเข้าใจ",
						"hindi": "भूख उसका सार है। एक ऐसा दर्द जिसे तुम समझ नहीं सकते।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "괴물 주제에 잘난 척은!",
						"english": "A monster, yet so arrogant!",
						"japanese": "化け物のくせに偉そうに！",
						"chinese": "怪物竟敢嚣张！",
						"french": "Un monstre si arrogant !",
						"spanish": "¡Un monstruo que se cree superior!",
						"vietnamese": "Đồ quái vật mà dám làm ra vẻ!",
						"thai": "แค่สัตว์ประหลาดแท้ๆ ยังจะมาโอ้อวดอีก!",
						"hindi": "राक्षस होकर इतना घमंड!"
					}
				},
				{
					"content": {
						"korean": "우리는... 그저 배고플 뿐. 이 숲의... 영원한 굶주림이다.",
						"english": "We are... merely hungry. The eternal hunger... of this forest.",
						"japanese": "我々は…ただ空腹なだけだ。この森の…永遠の飢えだ。",
						"chinese": "我们…只是饿了。这片森林…永恒的饥饿。",
						"french": "Nous sommes... simplement affamés. La faim éternelle... de cette forêt.",
						"spanish": "Nosotros... simplemente tenemos hambre. El hambre eterna... de este bosque.",
						"vietnamese": "Chúng ta... chỉ là đói thôi. Nỗi đói khát vĩnh cửu... của khu rừng này.",
						"thai": "พวกเรา...ก็แค่หิวโหย ความหิวโหยอันเป็นนิรันดร์...ของป่าแห่งนี้",
						"hindi": "हम... बस भूखे हैं। इस जंगल की... शाश्वत भूख।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "배고파... 배고파... 모든 것을 먹어야 해! 하하하하!",
						"english": "Hungry... hungry... Must eat everything! Hahahahaha!",
						"japanese": "お腹すいた…お腹すいた…全てを食べなければ！ハハハハ！",
						"chinese": "饿…好饿…必须吃掉一切！哈哈哈！",
						"french": "Faim... faim... Il faut tout manger ! Hahahahaha !",
						"spanish": "¡Hambre... hambre... Tengo que comerlo todo! ¡Jajajajaja!",
						"vietnamese": "Đói... đói... Phải ăn hết mọi thứ! Hahahahaha!",
						"thai": "หิว...หิว...ต้องกินทุกอย่าง! ฮ่าฮ่าฮ่าฮ่า!",
						"hindi": "भूख लगी है... भूख लगी है... सब कुछ खाना है! हाहाहाहा!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "haraldr"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "굶주린 어둠이 모든 것을 집어삼켰다.",
						"english": "The hungry darkness consumed everything.",
						"japanese": "飢えた闇がすべてを飲み込んだ。",
						"chinese": "饥饿的黑暗吞噬了一切。",
						"french": "L'obscurité affamée dévora tout.",
						"spanish": "La oscuridad hambrienta lo consumió todo.",
						"vietnamese": "Bóng tối đói khát nuốt chửng mọi thứ.",
						"thai": "ความมืดที่หิวโหยกลืนกินทุกสิ่ง",
						"hindi": "भूखे अंधेरे ने सब कुछ निगल लिया।"
					}
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"speaker": "inka"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "inka",
					"content": {
						"korean": "...아니야. 그를 이렇게 둘 순 없어. 다시 일어서야 해.",
						"english": "...No. I can't leave him like this. I have to get back up.",
						"japanese": "…いや。彼をこんな風にはしておけない。もう一度立ち上がらなければ。",
						"chinese": "...不。我不能让他这样。我必须重新站起来。",
						"french": "...Non. Je ne peux pas le laisser comme ça. Je dois me relever.",
						"spanish": "...No. No puedo dejarlo así. Tengo que levantarme de nuevo.",
						"vietnamese": "...Không. Tôi không thể để hắn như thế này. Tôi phải đứng dậy lần nữa.",
						"thai": "...ไม่สิ ฉันจะปล่อยเขาไว้แบบนี้ไม่ได้ ฉันต้องลุกขึ้นอีกครั้ง",
						"hindi": "...नहीं। मैं उसे ऐसे नहीं छोड़ सकता। मुझे फिर से खड़ा होना होगा।"
					}
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "haraldr",
					"type": "direction",
					"spot": [
						6,
						3
					]
				},
				{
					"content": {
						"korean": "하하하... 어서 와... 다음엔... 네 모든 것을 먹을 거야...",
						"english": "Hahaha... Come... Next time... I'll eat everything you have...",
						"japanese": "ははは…さあ…次は…お前の全てを食い尽くしてやる…",
						"chinese": "哈哈哈...来吧...下次...我会吃掉你的一切...",
						"french": "Hahaha... Viens... La prochaine fois... Je mangerai tout ce que tu as...",
						"spanish": "Jajaja... Ven... La próxima vez... Me comeré todo lo que tienes...",
						"vietnamese": "Hahaha... Đến đây... Lần tới... Ta sẽ ăn sạch mọi thứ của ngươi...",
						"thai": "ฮ่าฮ่าฮ่า... มาเลย... คราวหน้า... ฉันจะกินทุกสิ่งทุกอย่างของแก...",
						"hindi": "हाहाहा... आओ... अगली बार... मैं तुम्हारा सब कुछ खा जाऊंगा..."
					},
					"type": "speech",
					"emotion": "happy",
					"speaker": "haraldr"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "괴물이 쓰러지자, Haraldr의 기괴한 미소가 일순간 흔들렸다.",
						"english": "As the monster fell, Haraldr's eerie smile faltered for a moment.",
						"japanese": "怪物が倒れると、ハラルドルの不気味な笑みが一瞬揺らいだ。",
						"chinese": "怪物倒下时，哈拉尔德诡异的笑容瞬间动摇了。",
						"french": "Quand le monstre tomba, le sourire étrange de Haraldr vacilla un instant.",
						"spanish": "Al caer el monstruo, la espeluznante sonrisa de Haraldr vaciló por un instante.",
						"vietnamese": "Khi con quái vật ngã xuống, nụ cười rợn người của Haraldr chợt dao động.",
						"thai": "เมื่อสัตว์ประหลาดล้มลง รอยยิ้มอันน่าขนลุกของ Haraldr ก็สั่นคลอนไปชั่วขณะ",
						"hindi": "जैसे ही राक्षस गिरा, हरलडर की भयानक मुस्कान एक पल के लिए डगमगा गई।"
					}
				},
				{
					"content": {
						"korean": "그는... 그는... 영원히 배고플 것이다...",
						"english": "He... he... will be hungry forever...",
						"japanese": "彼は…彼は…永遠に飢えているだろう…",
						"chinese": "他...他...将永远饥饿...",
						"french": "Il... il... aura faim pour toujours...",
						"spanish": "Él... él... tendrá hambre para siempre...",
						"vietnamese": "Hắn... hắn... sẽ đói mãi mãi...",
						"thai": "เขา... เขา... จะหิวโหยไปตลอดกาล...",
						"hindi": "वह... वह... हमेशा के लिए भूखा रहेगा..."
					},
					"speaker": "random_boss",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"speaker": "inka"
				},
				{
					"speaker": "inka",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이것 봐... 그는 고통받고 있었어.",
						"english": "Look... he was suffering.",
						"japanese": "見て…彼は苦しんでいたんだ。",
						"chinese": "看...他一直在受苦。",
						"french": "Regarde... il souffrait.",
						"spanish": "Mira... estaba sufriendo.",
						"vietnamese": "Nhìn kìa... hắn đã phải chịu đựng.",
						"thai": "ดูสิ... เขากำลังทรมาน",
						"hindi": "देखो... वह पीड़ित था।"
					}
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						6,
						3
					],
					"speaker": "haraldr",
					"type": "direction"
				},
				{
					"content": {
						"korean": "흐윽... 흐으으... 배... 고파...",
						"english": "Ugh... Uuugh... Hu... hungry...",
						"japanese": "うぅ…ううう…お腹…すいた…",
						"chinese": "呃...呃呃...饿...饿了...",
						"french": "Ugh... Oooh... Faim... faim...",
						"spanish": "Ugh... Uuuuh... Ha... hambre...",
						"vietnamese": "Ư... ưưư... Đói... đói quá...",
						"thai": "อึก... อือออ... หิว... หิวจัง...",
						"hindi": "उफ़... उह... भू... भूखा..."
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "haraldr"
				},
				{
					"content": {
						"korean": "Haraldr의 굶주림은 여전히 해결되지 않은 채, 다음 시나리오의 그림자를 드리웠다.",
						"english": "Haraldr's hunger remained unresolved, casting a shadow over the next scenario.",
						"japanese": "ハラルドルの飢えは未解決のまま、次のシナリオに影を落とした。",
						"chinese": "哈拉尔德的饥饿感依然没有解决，为下一个场景蒙上了阴影。",
						"french": "La faim de Haraldr restait insatisfaite, jetant une ombre sur le scénario suivant.",
						"spanish": "El hambre de Haraldr seguía sin resolverse, proyectando una sombra sobre el siguiente escenario.",
						"vietnamese": "Cơn đói của Haraldr vẫn chưa được giải quyết, phủ bóng lên kịch bản tiếp theo.",
						"thai": "ความหิวโหยของ Haraldr ยังคงไม่คลี่คลาย ทิ้งเงาไว้บนสถานการณ์ถัดไป",
						"hindi": "हरलडर की भूख अनसुलझी रही, जिसने अगले परिदृश्य पर एक छाया डाली।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			]
		}
	]
} as const;
