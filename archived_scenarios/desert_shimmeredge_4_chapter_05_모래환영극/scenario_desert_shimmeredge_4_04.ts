export const scenario_desert_shimmeredge_4_04 = {
	"scenario_id": "desert_shimmeredge_4_04",
	"order": 4,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"kasai": {
			"id": "mon_8050c8ca-5715-4e7d-895e-5bc029d55fcf",
			"name": {
				"korean": "카사이",
				"english": "Kasai",
				"japanese": "カサイ",
				"chinese": "卡赛",
				"french": "Kasai",
				"spanish": "Kasai",
				"vietnamese": "Kasai",
				"thai": "คาไซ",
				"hindi": "कसाई"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/c9ddd314-36fb-4636-cbe6-35d8f6f98900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a00fae8a-8a27-4895-d62c-a0c88456ff00/public"
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
						"korean": "황량한 폐허 속, 한때 영웅이라 불린 자가 숨어 있었다.",
						"english": "In desolate ruins, a man once called a hero hid.",
						"japanese": "荒涼たる廃墟の中、かつて英雄と呼ばれた者が身を潜めていた。",
						"chinese": "在荒凉的废墟中，曾被称为英雄之人躲藏着。",
						"french": "Au cœur des ruines désolées, se cachait celui qu'on nommait jadis un héros.",
						"spanish": "Entre ruinas desoladas, se ocultaba quien una vez fue llamado héroe.",
						"vietnamese": "Giữa đống đổ nát hoang tàn, một người từng được gọi là anh hùng đang ẩn mình.",
						"thai": "ในซากปรักหักพังอันรกร้าง บุคคลที่ครั้งหนึ่งเคยถูกเรียกว่าวีรบุรุษได้ซ่อนตัวอยู่",
						"hindi": "उजाड़ खंडहरों में, एक समय का नायक छिपा हुआ था।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "여기가 카사이가 있다는 곳인가? 너무 조용해.",
						"english": "Is this where Kasai is? It's too quiet.",
						"japanese": "ここがカサイのいる場所か？静かすぎる。",
						"chinese": "这里就是卡赛所在的地方吗？太安静了。",
						"french": "C'est ici que se trouve Kasai ? C'est trop silencieux.",
						"spanish": "¿Aquí está Kasai? Está demasiado tranquilo.",
						"vietnamese": "Đây là nơi Kasai ở sao? Yên tĩnh quá.",
						"thai": "ที่นี่คือที่ที่คาไซอยู่หรือ? เงียบเกินไป",
						"hindi": "क्या कसाई यहीं है? बहुत खामोशी है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"speaker": "kasai",
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						3
					]
				},
				{
					"speaker": "kasai",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "쉿. 잠든 시체들을 깨우지 마라.",
						"english": "Shhh. Don't wake the sleeping corpses.",
						"japanese": "シッ。眠れる死体を起こすな。",
						"chinese": "嘘。别吵醒沉睡的尸体。",
						"french": "Chut. Ne réveille pas les cadavres endormis.",
						"spanish": "Shhh. No despiertes a los cadáveres durmientes.",
						"vietnamese": "Suỵt. Đừng đánh thức những xác chết đang ngủ.",
						"thai": "ชู่ว์ อย่าปลุกศพที่หลับใหล",
						"hindi": "श्ह्ह्ह. सोए हुए शवों को मत जगाओ।"
					}
				},
				{
					"content": {
						"korean": "당신이 카사이?",
						"english": "Are you Kasai?",
						"japanese": "あなたがカサイか？",
						"chinese": "你是卡赛？",
						"french": "Vous êtes Kasai ?",
						"spanish": "¿Eres Kasai?",
						"vietnamese": "Ông là Kasai sao?",
						"thai": "ท่านคือคาไซหรือ?",
						"hindi": "क्या तुम कसाई हो?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "그랬지. 한때는. 이젠 그저 늙은 그림자일 뿐.",
						"english": "I was. Once. Now, just an old shadow.",
						"japanese": "そうだったな。かつては。今ではただの老いた影に過ぎん。",
						"chinese": "曾是。过去是。现在不过是个老去的暗影。",
						"french": "Je l'étais. Autrefois. Maintenant, juste une vieille ombre.",
						"spanish": "Lo fui. Una vez. Ahora, solo una vieja sombra.",
						"vietnamese": "Ta đã từng. Một thời. Giờ chỉ là một cái bóng già nua.",
						"thai": "เคยเป็น. ครั้งหนึ่ง. ตอนนี้เป็นแค่เงาแก่ๆ",
						"hindi": "मैं था। एक समय। अब, बस एक बूढ़ी परछाई।"
					},
					"speaker": "kasai"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "kasai",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "너도 뭔가 바꾸려고 왔겠지. 어리석은 짓이다.",
						"english": "You've come to change something too, haven't you? A foolish endeavor.",
						"japanese": "お前も何かを変えに来たのだろう。愚かなことだ。",
						"chinese": "你也想改变什么吧。真是愚蠢。",
						"french": "Toi aussi, tu es venu changer quelque chose, n'est-ce pas ? Une folie.",
						"spanish": "¿Tú también has venido a cambiar algo, verdad? Una tontería.",
						"vietnamese": "Ngươi cũng đến để thay đổi gì đó đúng không. Thật là ngu ngốc.",
						"thai": "เจ้าเองก็คงมาเพื่อเปลี่ยนอะไรบางอย่างสินะ ช่างเป็นเรื่องโง่เขลา",
						"hindi": "तुम भी कुछ बदलने आए होगे। मूर्खतापूर्ण प्रयास है।"
					},
					"speaker": "kasai"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "당신은 싸우지 않았나요? 영웅이라고 들었는데.",
						"english": "Didn't you fight? I heard you were a hero.",
						"japanese": "戦わなかったのですか？ 英雄だと聞きましたが。",
						"chinese": "你没战斗吗？ 我听说你是个英雄。",
						"french": "Vous n'avez pas combattu ? On m'a dit que vous étiez un héros.",
						"spanish": "¿No luchaste? Me dijeron que eras un héroe.",
						"vietnamese": "Anh không chiến đấu sao? Tôi nghe nói anh là một anh hùng.",
						"thai": "ท่านไม่ได้สู้หรือ? ข้าได้ยินว่าท่านเป็นวีรบุรุษ",
						"hindi": "क्या तुम लड़े नहीं? मैंने सुना था तुम एक हीरो हो।"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "kasai",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "싸웠지. 수없이. 그리고 수없이 이겼다.",
						"english": "I fought. Countless times. And won countless times.",
						"japanese": "戦ったさ。数えきれないほどに。そして、数えきれないほど勝った。",
						"chinese": "我战斗了。无数次。也无数次赢了。",
						"french": "J'ai combattu. D'innombrables fois. Et j'ai gagné d'innombrables fois.",
						"spanish": "Luché. Innumerables veces. Y gané innumerables veces.",
						"vietnamese": "Tôi đã chiến đấu. Vô số lần. Và thắng cũng vô số lần.",
						"thai": "สู้สิ หลายครั้ง และชนะมาหลายครั้งแล้ว",
						"hindi": "मैं लड़ा। अनगिनत बार। और अनगिनत बार जीता भी।"
					}
				},
				{
					"speaker": "kasai",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "하지만 뭘 얻었지? 똑같은 사막, 똑같은 절망.",
						"english": "But what did I gain? The same desert, the same despair.",
						"japanese": "だが、何を得た？ 同じ砂漠、同じ絶望。",
						"chinese": "但得到了什么？ 同样的沙漠，同样的绝望。",
						"french": "Mais qu'ai-je obtenu ? Le même désert, le même désespoir.",
						"spanish": "¿Pero qué obtuve? El mismo desierto, la misma desesperación.",
						"vietnamese": "Nhưng tôi đã đạt được gì? Vẫn là sa mạc đó, vẫn là sự tuyệt vọng đó.",
						"thai": "แต่ได้อะไรมา? ทะเลทรายเดิม ความสิ้นหวังเดิม",
						"hindi": "पर क्या पाया? वही रेगिस्तान, वही निराशा।"
					}
				},
				{
					"content": {
						"korean": "그럴 리가…!",
						"english": "That can't be...!",
						"japanese": "そんなはずが…！",
						"chinese": "不可能…！",
						"french": "C'est impossible...!",
						"spanish": "¡Eso no puede ser...!",
						"vietnamese": "Không thể nào…!",
						"thai": "เป็นไปไม่ได้...!",
						"hindi": "ऐसा हो नहीं सकता...!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"speaker": "kasai",
					"content": {
						"korean": "시스템은 모든 것을 집어삼켜. 너의 분노도, 희망도.",
						"english": "The System devours everything. Your rage, your hope.",
						"japanese": "システムは全てを飲み込む。お前の怒りも、希望も。",
						"chinese": "系统吞噬一切。你的愤怒，你的希望。",
						"french": "Le Système dévore tout. Ta rage, ton espoir.",
						"spanish": "El Sistema lo devora todo. Tu ira, tu esperanza.",
						"vietnamese": "Hệ thống nuốt chửng mọi thứ. Cả sự giận dữ của ngươi, cả hy vọng của ngươi.",
						"thai": "ระบบกลืนกินทุกสิ่ง ทั้งความโกรธและความหวังของเจ้า",
						"hindi": "सिस्टम सब कुछ निगल लेता है। तुम्हारा गुस्सा भी, तुम्हारी उम्मीद भी।"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"speaker": "kasai",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "너희가 쓰러뜨린 상인, 성직자… 결국 누가 그 자리를 채웠지?",
						"english": "The merchants, the priests you overthrew... who ultimately filled their places?",
						"japanese": "お前たちが倒した商人、聖職者…結局、誰がその座を埋めた？",
						"chinese": "你们打倒的商人、神职人员…最终谁取代了他们的位置？",
						"french": "Les marchands, les prêtres que vous avez renversés... qui a finalement pris leur place ?",
						"spanish": "Los mercaderes, los sacerdotes que derribasteis... ¿quién ocupó su lugar al final?",
						"vietnamese": "Những thương nhân, giáo sĩ mà các ngươi lật đổ… cuối cùng ai đã lấp vào chỗ đó?",
						"thai": "พ่อค้า, นักบวชที่พวกเจ้าโค่นล้ม... ท้ายที่สุดแล้วใครมาแทนที่พวกเขา?",
						"hindi": "जिन व्यापारियों, पुजारियों को तुमने गिराया... अंत में उनकी जगह किसने ली?"
					},
					"speaker": "kasai"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "새로운…!",
						"english": "New...!",
						"japanese": "新しい…！",
						"chinese": "新的…！",
						"french": "De nouveaux...!",
						"spanish": "¡Nuevos...!",
						"vietnamese": "Những kẻ mới…!",
						"thai": "คนใหม่...!",
						"hindi": "नए...!"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "kasai",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "그래, 새로운 광대들. 같은 대본으로, 같은 쇼를 할 뿐이야.",
						"english": "Yes, new clowns. Performing the same show with the same script.",
						"japanese": "そうだ、新しい道化師たちだ。同じ台本で、同じショーを演じるだけだ。",
						"chinese": "没错，新的小丑们。只是用同样的剧本，演着同样的戏。",
						"french": "Oui, de nouveaux clowns. Jouant le même spectacle avec le même scénario.",
						"spanish": "Sí, nuevos payasos. Solo hacen el mismo espectáculo con el mismo guion.",
						"vietnamese": "Đúng vậy, những tên hề mới. Chỉ diễn cùng một vở kịch với cùng một kịch bản thôi.",
						"thai": "ใช่แล้ว ตัวตลกหน้าใหม่ พวกมันก็แค่เล่นโชว์เดิมๆ ด้วยบทเดิมๆ",
						"hindi": "हाँ, नए मसखरे। बस उसी स्क्रिप्ट के साथ वही नाटक करेंगे।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "그럼 아무것도 할 수 없다는 건가요?",
						"english": "So... there's nothing we can do?",
						"japanese": "じゃあ、何もできないってことですか？",
						"chinese": "那我们什么都做不了吗？",
						"french": "Alors, on ne peut rien faire ?",
						"spanish": "¿Entonces no hay nada que podamos hacer?",
						"vietnamese": "Vậy là chúng ta không thể làm gì sao?",
						"thai": "งั้นเราก็ทำอะไรไม่ได้เลยหรือ?",
						"hindi": "तो क्या हम कुछ कर ही नहीं सकते?"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "순응하거나, 시스템의 연료가 되거나. 선택지는 그 두 가지뿐이다.",
						"english": "Conform, or become fuel for the System. Those are your only two choices.",
						"japanese": "従うか、システムの燃料になるか。選択肢はその二つだけだ。",
						"chinese": "顺从，或者成为系统的燃料。选择只有这两个。",
						"french": "Vous conformer, ou devenir le carburant du Système. Il n'y a que ces deux choix.",
						"spanish": "Conformarte, o convertirte en combustible para el Sistema. Esas son las únicas dos opciones.",
						"vietnamese": "Tuân theo, hoặc trở thành nhiên liệu cho Hệ thống. Chỉ có hai lựa chọn đó thôi.",
						"thai": "ไม่ยอมรับ ก็กลายเป็นเชื้อเพลิงให้ระบบ ทางเลือกมีแค่สองทางนี้",
						"hindi": "अनुरूप हो जाओ, या सिस्टम का ईंधन बन जाओ। बस यही दो विकल्प हैं।"
					},
					"speaker": "kasai"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…젠장.",
						"english": "...Damn it.",
						"japanese": "「…くそっ。」",
						"chinese": "「……该死。」",
						"french": "...Mince.",
						"spanish": "...Maldita sea.",
						"vietnamese": "...Chết tiệt.",
						"thai": "...ให้ตายสิ.",
						"hindi": "...लानत है।"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "사막의 바람이 알 수 없는 콧노래를 싣고, 희미한 불안을 속삭였다.",
						"english": "The desert wind carried an unknown hum, whispering faint unease.",
						"japanese": "「砂漠の風が、知られざる鼻歌を乗せ、かすかな不安を囁いた。」",
						"chinese": "「沙漠之风带着不明的哼唱，低语着一丝不安。」",
						"french": "Le vent du désert portait un chant inconnu, murmurant une vague inquiétude.",
						"spanish": "El viento del desierto trajo un tarareo desconocido, susurrando una leve inquietud.",
						"vietnamese": "Gió sa mạc mang theo tiếng ngân nga không rõ, thì thầm nỗi bất an mơ hồ.",
						"thai": "สายลมทะเลทรายพัดพาเสียงฮัมเพลงปริศนา กระซิบความไม่สบายใจอันเลือนราง",
						"hindi": "रेगिस्तान की हवा एक अज्ञात गुनगुनाहट लिए थी, हल्की बेचैनी फुसफुसा रही थी।"
					},
					"speaker": "narrator"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"content": {
						"korean": "폐허 깊은 곳, 냉혹한 진실이 그림자처럼 드리워졌다.",
						"english": "Deep within the ruins, a cruel truth loomed like a shadow.",
						"japanese": "「廃墟の奥深く、冷酷な真実が影のように覆いかぶさった。」",
						"chinese": "「废墟深处，冷酷的真相如影随形。」",
						"french": "Au plus profond des ruines, une vérité cruelle planait comme une ombre.",
						"spanish": "En lo profundo de las ruinas, una verdad cruel se cernía como una sombra.",
						"vietnamese": "Sâu trong tàn tích, một sự thật tàn nhẫn bao trùm như bóng tối.",
						"thai": "ลึกเข้าไปในซากปรักหักพัง ความจริงอันโหดร้ายทอดเงาลงมา",
						"hindi": "खंडहरों की गहराई में, एक क्रूर सत्य छाया की तरह मंडरा रहा था।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "kasai",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "kasai",
					"content": {
						"korean": "이제 깨달았나? 너의 분노는 그저 새로운 순환의 시작일 뿐이다.",
						"english": "Do you understand now? Your rage is merely the beginning of a new cycle.",
						"japanese": "「もう悟ったか？お前の怒りは、ただ新たな循環の始まりに過ぎない。」",
						"chinese": "「现在明白了吗？你的愤怒不过是新循环的开始。」",
						"french": "As-tu compris maintenant ? Ta fureur n'est que le début d'un nouveau cycle.",
						"spanish": "¿Lo entiendes ahora? Tu ira es solo el comienzo de un nuevo ciclo.",
						"vietnamese": "Giờ ngươi đã hiểu chưa? Sự giận dữ của ngươi chỉ là khởi đầu của một vòng tuần hoàn mới.",
						"thai": "ตอนนี้เข้าใจแล้วหรือยัง? ความโกรธแค้นของเจ้าเป็นเพียงจุดเริ่มต้นของวัฏจักรใหม่เท่านั้น",
						"hindi": "क्या अब तुम समझे? तुम्हारा क्रोध बस एक नए चक्र की शुरुआत है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "아니. 나는 달라.",
						"english": "No. I'm different.",
						"japanese": "「いや。俺は違う。」",
						"chinese": "「不。我不同。」",
						"french": "Non. Je suis différent.",
						"spanish": "No. Soy diferente.",
						"vietnamese": "Không. Tôi khác.",
						"thai": "ไม่ ฉันต่างออกไป",
						"hindi": "नहीं। मैं अलग हूँ।"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "하! 이 사막에서 자신을 특별하다 말한 자들은 모두…",
						"english": "Hah! All who claimed to be special in this desert...",
						"japanese": "「ハッ！この砂漠で自分を特別だと言った者たちは皆…」",
						"chinese": "「哈！在这片沙漠里，所有声称自己特别的人都……」",
						"french": "Ha ! Tous ceux qui se sont dits spéciaux dans ce désert...",
						"spanish": "¡Ja! Todos los que se creyeron especiales en este desierto...",
						"vietnamese": "Ha! Tất cả những kẻ tự cho mình là đặc biệt ở sa mạc này...",
						"thai": "ฮ่า! ทุกคนที่บอกว่าตัวเองพิเศษในทะเลทรายแห่งนี้...",
						"hindi": "हा! इस रेगिस्तान में खुद को खास कहने वाले सभी..."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "kasai"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "난 멈추지 않아. 당신처럼 되지 않을 거야.",
						"english": "I won't stop. I won't become like you.",
						"japanese": "「俺は止まらない。お前みたいにはならない。」",
						"chinese": "「我不会停下。我不会变得像你一样。」",
						"french": "Je ne m'arrêterai pas. Je ne deviendrai pas comme toi.",
						"spanish": "No me detendré. No seré como tú.",
						"vietnamese": "Tôi sẽ không dừng lại. Tôi sẽ không trở thành như ông.",
						"thai": "ฉันจะไม่หยุด ฉันจะไม่เป็นเหมือนแก",
						"hindi": "मैं रुकूंगा नहीं। मैं तुम्हारे जैसा नहीं बनूंगा।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "그래. 어디 한번 가봐라. 그 끝이 어디인지.",
						"english": "Very well. Go on, then. See where it ends.",
						"japanese": "「そうか。どこまで行けるか、やってみるがいい。」",
						"chinese": "「是啊。那就去看看吧。看看它的尽头在哪里。」",
						"french": "Très bien. Vas-y. Vois où cela mène.",
						"spanish": "De acuerdo. Ve, entonces. Mira dónde termina.",
						"vietnamese": "Được thôi. Cứ đi đi. Rồi xem kết cục ra sao.",
						"thai": "ได้เลย ลองดูสิว่าจุดจบจะเป็นอย่างไร",
						"hindi": "ठीक है। जाओ, फिर। देखो इसका अंत कहाँ होता है।"
					},
					"speaker": "kasai"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "크윽… 겨우… 이 정도인가…",
						"english": "Ugh... Is this... all there is...?",
						"japanese": "ぐっ…たかが…この程度か…",
						"chinese": "呃…就…这点程度吗…",
						"french": "Ugh... C'est... tout ce que tu as... ?",
						"spanish": "Ugh... ¿Es... solo esto...?",
						"vietnamese": "Khụ... Chỉ... có thế này thôi sao...",
						"thai": "อึก... แค่... แค่นี้เองหรือ...",
						"hindi": "उफ़... बस... इतना ही...?"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "random_boss"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "정체 모를 보스가 쓰러졌다. 그러나 승리의 기쁨은 찾아오지 않았다.",
						"english": "The unknown boss fell. Yet, the joy of victory did not come.",
						"japanese": "正体不明のボスが倒れた。しかし、勝利の喜びは訪れなかった。",
						"chinese": "身份不明的头目倒下了。然而，胜利的喜悦并未降临。",
						"french": "Le boss inconnu est tombé. Pourtant, la joie de la victoire ne vint pas.",
						"spanish": "El jefe desconocido cayó. Sin embargo, la alegría de la victoria no llegó.",
						"vietnamese": "Con trùm vô danh đã ngã xuống. Nhưng niềm vui chiến thắng vẫn không đến.",
						"thai": "บอสปริศนาล้มลงแล้ว ทว่าความยินดีแห่งชัยชนะกลับไม่บังเกิด",
						"hindi": "अज्ञात बॉस गिर गया। फिर भी, जीत की खुशी नहीं आई।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이겼는데… 왜 이 기분은…",
						"english": "We won... but why does it feel like this...?",
						"japanese": "勝ったのに…なぜこの気持ちは…",
						"chinese": "赢了…可为什么是这种感觉…",
						"french": "Nous avons gagné... mais pourquoi ce sentiment... ?",
						"spanish": "Ganamos... pero por qué esta sensación...?",
						"vietnamese": "Đã thắng rồi... nhưng sao lại có cảm giác này...",
						"thai": "ชนะแล้วแท้ๆ... แต่ทำไมความรู้สึกนี้มัน...",
						"hindi": "जीत गए... पर यह एहसास क्यों...?"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"speaker": "kasai",
					"duration_ms": 500
				},
				{
					"speaker": "kasai",
					"content": {
						"korean": "보았나? 또 다른 그림자가 사라졌을 뿐이다.",
						"english": "Did you see? Only another shadow has vanished.",
						"japanese": "見たか？また一つ、影が消えただけだ。",
						"chinese": "看到了吗？不过是又一个影子消失了而已。",
						"french": "As-tu vu ? Seule une autre ombre a disparu.",
						"spanish": "¿Viste? Solo otra sombra ha desaparecido.",
						"vietnamese": "Ngươi đã thấy chưa? Chỉ là một cái bóng khác biến mất thôi.",
						"thai": "เห็นไหม? ก็แค่เงาอีกตนที่หายไปเท่านั้นเอง",
						"hindi": "देखा? बस एक और छाया गायब हो गई।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "kasai",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "시스템은 강해졌고, 너는… 한 걸음 더 깊이 들어왔지.",
						"english": "The system has grown stronger, and you... have stepped one step deeper.",
						"japanese": "システムは強くなり、お前は…もう一歩深く踏み込んだ。",
						"chinese": "系统变得更强了，而你……又深入了一步。",
						"french": "Le système s'est renforcé, et toi... tu as fait un pas de plus en profondeur.",
						"spanish": "El sistema se ha fortalecido, y tú... has dado un paso más profundo.",
						"vietnamese": "Hệ thống đã mạnh hơn, còn ngươi... đã tiến thêm một bước sâu hơn.",
						"thai": "ระบบแข็งแกร่งขึ้น และเจ้า... ก็ได้ก้าวลึกเข้าไปอีกขั้นแล้วสินะ",
						"hindi": "सिस्टम मजबूत हो गया है, और तुम... एक कदम और गहराई में आ गए हो।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "(좌절) 말도 안 돼…",
						"english": "(Frustrated) No way...",
						"japanese": "(落胆) まさか…",
						"chinese": "(沮丧) 不可能吧…",
						"french": "(Frustré) C'est pas vrai...",
						"spanish": "(Frustrado) ¡No puede ser...!",
						"vietnamese": "(Thất vọng) Không thể nào...",
						"thai": "(หงุดหงิด) ไม่จริงน่า...",
						"hindi": "(हताशा से) यह नहीं हो सकता..."
					}
				},
				{
					"content": {
						"korean": "사막의 바람은 다시 불었다. 이 모든 것이 거대한 순환의 일부인 것처럼.",
						"english": "The desert wind blew anew, as if all this were part of a grand cycle.",
						"japanese": "砂漠の風が再び吹いた。この全てが、巨大な循環の一部であるかのように。",
						"chinese": "沙漠之风再度吹起，仿佛这一切都是宏大循环的一部分。",
						"french": "Le vent du désert souffla à nouveau, comme si tout cela faisait partie d'un grand cycle.",
						"spanish": "El viento del desierto sopló de nuevo, como si todo esto fuera parte de un gran ciclo.",
						"vietnamese": "Gió sa mạc lại thổi, như thể tất cả chỉ là một phần của vòng tuần hoàn vĩ đại.",
						"thai": "ลมทะเลทรายพัดมาอีกครั้ง ราวกับว่าทั้งหมดนี้เป็นส่วนหนึ่งของวัฏจักรที่ยิ่งใหญ่",
						"hindi": "रेगिस्तान की हवा फिर चली, मानो यह सब एक विशाल चक्र का हिस्सा हो।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "어리석은 것들… 감히 {random_boss}에게 덤비다니.",
						"english": "Fools... How dare you challenge {random_boss}.",
						"japanese": "愚かな者たちめ… よくも{random_boss}に挑んだな。",
						"chinese": "愚蠢之徒… 竟敢挑战{random_boss}。",
						"french": "Imbéciles... Comment osez-vous défier {random_boss}.",
						"spanish": "Necios... ¿Cómo osáis desafiar a {random_boss}?",
						"vietnamese": "Lũ ngu ngốc... Dám thách thức {random_boss} ư.",
						"thai": "พวกโง่เง่า... บังอาจมาท้าทาย {random_boss} ได้อย่างไร",
						"hindi": "मूर्खों... तुम्हारी हिम्मत कैसे हुई {random_boss} को चुनौती देने की।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 모든 것을 집어삼켰다.",
						"english": "A colossal shadow devoured all.",
						"japanese": "巨大な影が全てを飲み込んだ。",
						"chinese": "巨大的阴影吞噬了一切。",
						"french": "Une ombre colossale a tout englouti.",
						"spanish": "Una sombra colosal lo devoró todo.",
						"vietnamese": "Một bóng tối khổng lồ đã nuốt chửng mọi thứ.",
						"thai": "เงาขนาดมหึมากลืนกินทุกสิ่ง",
						"hindi": "एक विशाल छाया ने सब कुछ निगल लिया।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "(이를 악물며) 아직… 끝나지 않았어!",
						"english": "(Gritting teeth) It's not over yet!",
						"japanese": "(歯を食いしばり) まだ… 終わってない！",
						"chinese": "(咬牙切齿) 还没… 结束！",
						"french": "(En serrant les dents) Ce n'est pas... fini !",
						"spanish": "(Apretando los dientes) ¡Todavía no... ha terminado!",
						"vietnamese": "(Nghiến răng) Vẫn… chưa xong đâu!",
						"thai": "(กัดฟัน) ยัง... ไม่จบ!",
						"hindi": "(दांत पीसते हुए) अभी... खत्म नहीं हुआ है!"
					}
				},
				{
					"duration_ms": 500,
					"spot": [
						1,
						1
					],
					"type": "direction",
					"action": "enter",
					"speaker": "kasai"
				},
				{
					"content": {
						"korean": "(멀리서) 저항은… 고통을 연장할 뿐.",
						"english": "(From afar) Resistance... only prolongs the agony.",
						"japanese": "(遠くから) 抗うは… 苦痛を長引かせるだけだ。",
						"chinese": "(远处) 反抗… 只会延长痛苦。",
						"french": "(De loin) La résistance… ne fait que prolonger la souffrance.",
						"spanish": "(Desde lejos) La resistencia… solo prolonga el sufrimiento.",
						"vietnamese": "(Từ xa) Chống cự… chỉ kéo dài nỗi đau mà thôi.",
						"thai": "(จากที่ไกล) การต่อต้าน... มีแต่จะยืดความเจ็บปวด",
						"hindi": "(दूर से) प्रतिरोध... केवल दर्द को बढ़ाता है।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "kasai"
				},
				{
					"content": {
						"korean": "그래, 다시 와라. 언제든 상대해주지.",
						"english": "Yes, come again. I'll face you anytime.",
						"japanese": "いいだろう、また来い。いつでも相手をしてやる。",
						"chinese": "好，再来吧。我随时奉陪。",
						"french": "Oui, revenez. Je vous affronterai n'importe quand.",
						"spanish": "Sí, volved. Os haré frente cuando queráis.",
						"vietnamese": "Được, cứ quay lại đi. Ta sẽ đấu với ngươi bất cứ lúc nào.",
						"thai": "เอาสิ มาอีกสิ ข้าจะรับมือเจ้าได้เสมอ",
						"hindi": "हाँ, फिर आओ। मैं तुम्हें कभी भी सामना करूँगा।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그들의 앞을, 정체 모를 그림자가 가로막았다.",
						"english": "An unknown shadow blocked their path.",
						"japanese": "「彼らの行く手を、正体不明の影が遮った。」",
						"chinese": "「一道不明的阴影挡住了他们的去路。」",
						"french": "Une ombre inconnue barra leur chemin.",
						"spanish": "Una sombra desconocida les bloqueó el paso.",
						"vietnamese": "Một bóng đen không rõ danh tính đã chặn đường họ.",
						"thai": "เงาลึกลับบางอย่างขวางทางพวกเขา",
						"hindi": "एक अज्ञात छाया ने उनका रास्ता रोका।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "훗. 또 새로운 영웅 납셨군.",
						"english": "Hmph. Another new hero has arrived.",
						"japanese": "「フッ。また新たな英雄がお出ましか。」",
						"chinese": "「哼。又来了一个新英雄。」",
						"french": "Pff. Encore un nouveau héros.",
						"spanish": "Hm. Otro nuevo héroe ha llegado.",
						"vietnamese": "Hừm. Lại một anh hùng mới xuất hiện.",
						"thai": "หึ อีกหนึ่งฮีโร่ใหม่มาแล้วสินะ",
						"hindi": "हम। एक और नया नायक आ गया।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "비켜.",
						"english": "Move.",
						"japanese": "どけ。",
						"chinese": "让开。",
						"french": "Hors de mon chemin.",
						"spanish": "Apártate.",
						"vietnamese": "Tránh ra.",
						"thai": "หลีกไป!",
						"hindi": "हट जाओ।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "{random_boss}는 재미있는 걸 좋아해. 너희의 투쟁… 아름답군.",
						"english": "{random_boss} enjoys a good show. Your struggle... beautiful.",
						"japanese": "{random_boss}は面白いものが好きだ。お前たちの抵抗…美しいな。",
						"chinese": "{random_boss}喜欢有趣的事。你们的挣扎……真美。",
						"french": "{random_boss} aime s'amuser. Votre lutte... magnifique.",
						"spanish": "A {random_boss} le gusta lo divertido. Vuestra lucha... es hermosa.",
						"vietnamese": "{random_boss} thích những điều thú vị. Cuộc chiến của các ngươi... thật đẹp.",
						"thai": "{random_boss} ชอบเรื่องสนุกสนาน การต่อสู้ของพวกเจ้า... ช่างงดงามเหลือเกิน",
						"hindi": "{random_boss} को मज़ेदार चीज़ें पसंद हैं। तुम्हारा संघर्ष... खूबसूरत है।"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "웃기지 마!",
						"english": "Don't make me laugh!",
						"japanese": "ふざけるな！",
						"chinese": "别开玩笑了！",
						"french": "Ne me fais pas rire !",
						"spanish": "¡No me hagas reír!",
						"vietnamese": "Đừng đùa nữa!",
						"thai": "อย่ามาล้อเล่นนะ!",
						"hindi": "हँसाओ मत!"
					},
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"spot": [
						1,
						1
					],
					"action": "enter",
					"type": "direction",
					"speaker": "kasai"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "(작게) 또 시작이군. 이 지겨운 연극.",
						"english": "(Quietly) Here we go again. This tiresome play.",
						"japanese": "（小さく）また始まったか。このうんざりする劇が。",
						"chinese": "（小声）又来了。这场无聊的戏码。",
						"french": "(D'une voix basse) C'est reparti. Cette pièce ennuyeuse.",
						"spanish": "(En voz baja) Aquí vamos de nuevo. Esta obra tediosa.",
						"vietnamese": "(Nói nhỏ) Lại bắt đầu rồi. Vở kịch chán ngắt này.",
						"thai": "(เบาๆ) เริ่มอีกแล้วสินะ ละครน้ำเน่าเรื่องนี้",
						"hindi": "(धीरे से) फिर से वही। यह उबाऊ नाटक।"
					},
					"speaker": "kasai"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "자, 저항해 봐라. 이 사막의 진정한 힘을 보여주마.",
						"english": "Come, resist. I'll show you the true power of this desert.",
						"japanese": "さあ、抵抗してみろ。この砂漠の真の力を見せてやろう。",
						"chinese": "来吧，反抗吧。我将展现这沙漠的真正力量。",
						"french": "Allez, résiste. Je te montrerai le véritable pouvoir de ce désert.",
						"spanish": "Vamos, resiste. Te mostraré el verdadero poder de este desierto.",
						"vietnamese": "Nào, hãy chống cự đi. Ta sẽ cho ngươi thấy sức mạnh thật sự của sa mạc này.",
						"thai": "เอาล่ะ จงต่อต้านซะ ข้าจะแสดงพลังที่แท้จริงของทะเลทรายนี้ให้ดู",
						"hindi": "चलो, विरोध करो। मैं तुम्हें इस रेगिस्तान की असली शक्ति दिखाऊंगा।"
					},
					"speaker": "random_boss"
				},
				{
					"type": "direction",
					"action": "exit",
					"speaker": "kasai",
					"direction": "down",
					"duration_ms": 400
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"과거의 영웅은 그림자가 되었다.",
			"그의 눈빛엔, 이뤄지지 못한 모든 이상이 잠들어 있었다.",
			"변화는 환상이고, 저항은 허무한 연료일 뿐.",
			"사막은 모든 것을 집어삼키고, 또다시 반복될 뿐이라고."
		],
		"english": [
			"The hero of the past became a shadow.",
			"In his eyes, all unfulfilled ideals slumbered.",
			"Change is an illusion, resistance merely futile fuel.",
			"The desert devours all, and it will only repeat."
		],
		"japanese": [
			"過去の英雄は影となった。",
			"その瞳には、果たせなかった全ての理想が眠っていた。",
			"変化は幻想、抵抗は虚しい燃料に過ぎない。",
			"砂漠は全てを飲み込み、ただ繰り返すだけだと。"
		],
		"chinese": [
			"过去的英雄化为暗影。",
			"他的眼中，沉睡着所有未能实现的理想。",
			"变化是幻象，抵抗不过是徒劳的燃料。",
			"沙漠吞噬一切，只会不断重演。"
		],
		"french": [
			"Le héros d'antan devint une ombre.",
			"Dans ses yeux sommeillaient tous les idéaux inassouvis.",
			"Le changement est une illusion, la résistance un vain carburant.",
			"Le désert dévore tout, et ne fera que se répéter."
		],
		"spanish": [
			"El héroe del pasado se convirtió en una sombra.",
			"En sus ojos yacían todos los ideales incumplidos.",
			"El cambio es una ilusión, la resistencia, un combustible inútil.",
			"El desierto lo devora todo, y solo se repetirá."
		],
		"vietnamese": [
			"Người anh hùng trong quá khứ đã trở thành cái bóng.",
			"Trong ánh mắt anh ta, mọi lý tưởng chưa thành đều đang ngủ yên.",
			"Thay đổi là ảo ảnh, kháng cự chỉ là nhiên liệu vô ích.",
			"Sa mạc nuốt chửng mọi thứ, rồi cứ thế lặp lại."
		],
		"thai": [
			"วีรบุรุษในอดีตได้กลายเป็นเงามืด",
			"ในดวงตาของเขา อุดมคติที่ยังไม่สมหวังทั้งหมดหลับใหลอยู่",
			"การเปลี่ยนแปลงเป็นภาพลวงตา การต่อต้านเป็นเพียงเชื้อเพลิงที่ไร้ประโยชน์",
			"ทะเลทรายกลืนกินทุกสิ่ง และมันจะวนซ้ำไปเรื่อยๆ"
		],
		"hindi": [
			"अतीत का नायक एक परछाई बन गया।",
			"उसकी आँखों में, सभी अधूरे आदर्श सोए हुए थे।",
			"परिवर्तन एक भ्रम है, प्रतिरोध व्यर्थ ईंधन मात्र।",
			"रेगिस्तान सब कुछ निगल जाता है, और यह बस दोहराया जाएगा।"
		]
	}
} as const;
