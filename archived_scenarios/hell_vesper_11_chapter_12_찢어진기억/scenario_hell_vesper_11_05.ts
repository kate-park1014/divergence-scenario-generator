export const scenario_hell_vesper_11_05 = {
	"scenario_id": "hell_vesper_11_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "hell",
	"actors": {
		"ash": {
			"id": "mon_b225f5fa-59a1-47bb-b4c5-e73bf9e7192a",
			"name": {
				"korean": "애쉬",
				"english": "Ash",
				"japanese": "アッシュ",
				"chinese": "艾什",
				"french": "Ash",
				"spanish": "Ash",
				"vietnamese": "Ash",
				"thai": "แอช",
				"hindi": "ऐश"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/d84413a8-9d6f-4a40-5d36-75e431fb9900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/78281fca-e4b8-45cc-68ef-7df3fef74200/public"
		}
	},
	"boss": {
		"pool_id": "pool_TwilightBroker_Vesper_V1"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "ash"
				},
				{
					"content": {
						"korean": "가지 마! 그 자는 너희가 생각하는 그런 존재가 아니야!",
						"english": "Don't go! He's not who you think he is!",
						"japanese": "行かないで！あの者は、お前たちが思っているような存在じゃない！",
						"chinese": "别走！他不是你们想象的那种存在！",
						"french": "Ne partez pas ! Ce n'est pas ce que vous croyez qu'il est !",
						"spanish": "¡No vayas! ¡Él no es quien crees que es!",
						"vietnamese": "Đừng đi! Hắn không phải là người mà các ngươi nghĩ đâu!",
						"thai": "อย่าไป! เขาไม่ใช่คนที่พวกเจ้าคิด!",
						"hindi": "मत जाओ! वह वह नहीं है जो तुम सोचते हो!"
					},
					"type": "speech",
					"speaker": "ash",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "마지막 정보를 얻어야 해. 진실을 밝히려면.",
						"english": "We need the last piece of information. To reveal the truth.",
						"japanese": "最後の情報を手に入れなければ。真実を明らかにするために。",
						"chinese": "我们必须得到最后的情报。为了揭露真相。",
						"french": "Nous devons obtenir la dernière information. Pour révéler la vérité.",
						"spanish": "Necesitamos la última información. Para revelar la verdad.",
						"vietnamese": "Chúng ta cần có thông tin cuối cùng. Để hé lộ sự thật.",
						"thai": "เราต้องได้ข้อมูลสุดท้ายมา เพื่อเปิดเผยความจริง",
						"hindi": "हमें आखिरी जानकारी चाहिए। सच जानने के लिए।"
					}
				},
				{
					"type": "speech",
					"speaker": "ash",
					"emotion": "angry",
					"content": {
						"korean": "진실? 그는 진실조차 왜곡시켜! 나처럼… 모든 걸 잃게 될 거야!",
						"english": "Truth? He twists even the truth! Like me... you'll lose everything!",
						"japanese": "真実？彼は真実さえも歪める！私のように…全てを失うぞ！",
						"chinese": "真相？他甚至扭曲真相！像我一样……你会失去一切！",
						"french": "La vérité ? Il déforme même la vérité ! Comme moi… vous perdrez tout !",
						"spanish": "¿La verdad? ¡Él distorsiona incluso la verdad! Como yo... ¡lo perderás todo!",
						"vietnamese": "Sự thật? Hắn bóp méo cả sự thật! Giống như tôi... các người sẽ mất tất cả!",
						"thai": "ความจริงงั้นหรือ? เขาบิดเบือนแม้กระทั่งความจริง! เหมือนฉัน... พวกแกจะต้องสูญเสียทุกอย่าง!",
						"hindi": "सच? वह तो सच को भी तोड़-मरोड़ देता है! मेरी तरह... तुम सब कुछ खो दोगे!"
					}
				},
				{
					"content": {
						"korean": "이번엔 달라. 우리는… 이미 많은 걸 알았어.",
						"english": "This time it's different. We... already know a lot.",
						"japanese": "今回は違う。我々は…すでに多くのことを知っている。",
						"chinese": "这次不同了。我们……已经知道了很多。",
						"french": "Cette fois, c'est différent. Nous… en savons déjà beaucoup.",
						"spanish": "Esta vez es diferente. Nosotros... ya sabemos mucho.",
						"vietnamese": "Lần này khác rồi. Chúng ta... đã biết rất nhiều.",
						"thai": "ครั้งนี้ต่างออกไป เรา... รู้เรื่องมามากแล้ว",
						"hindi": "इस बार अलग है। हम... पहले ही बहुत कुछ जान चुके हैं।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"speaker": "ash",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "그 기록들… 서고의 수호자? 전부 거짓말이야!",
						"english": "Those records... the guardian of the archive? It's all a lie!",
						"japanese": "あの記録…書庫の守護者？全部嘘だ！",
						"chinese": "那些记录……档案管理员？全都是谎言！",
						"french": "Ces archives… le gardien de l'archive ? Tout est un mensonge !",
						"spanish": "Esos registros... ¿el guardián del archivo? ¡Todo es una mentira!",
						"vietnamese": "Những ghi chép đó... người bảo vệ kho lưu trữ? Tất cả đều là dối trá!",
						"thai": "บันทึกเหล่านั้น... ผู้พิทักษ์หอจดหมายเหตุ? ทั้งหมดเป็นเรื่องโกหก!",
						"hindi": "वे रिकॉर्ड... अभिलेखागार का संरक्षक? सब झूठ है!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "ash"
				},
				{
					"content": {
						"korean": "하지만 파편엔… 그렇게 적혀 있었어.",
						"english": "But on the fragment... that's what was written.",
						"japanese": "しかし破片には…そう記されていた。",
						"chinese": "但是碎片上……就是那么写的。",
						"french": "Mais sur le fragment… c'était écrit comme ça.",
						"spanish": "Pero en el fragmento... así estaba escrito.",
						"vietnamese": "Nhưng trên mảnh vỡ... đã được ghi như vậy.",
						"thai": "แต่บนชิ้นส่วน... มันเขียนไว้แบบนั้น",
						"hindi": "लेकिन टुकड़े पर... वही लिखा था।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "ash",
					"emotion": "angry",
					"content": {
						"korean": "그게 바로 함정이야! 그는 너희의 믿음까지 이용해!",
						"english": "That's the trap! He uses even your belief!",
						"japanese": "それが罠だ！彼は君たちの信頼すら利用する！",
						"chinese": "那正是陷阱！他甚至利用你们的信任！",
						"french": "C'est ça le piège ! Il utilise même votre confiance !",
						"spanish": "¡Esa es la trampa! ¡Él usa incluso vuestra fe!",
						"vietnamese": "Đó chính là cái bẫy! Hắn lợi dụng cả niềm tin của các người!",
						"thai": "นั่นแหละคือกับดัก! เขาใช้แม้กระทั่งความเชื่อของพวกแก!",
						"hindi": "वही जाल है! वह तुम्हारे विश्वास का भी इस्तेमाल करता है!"
					}
				},
				{
					"content": {
						"korean": "더 이상 돌이킬 수 없어. 우리는 끝까지 간다.",
						"english": "There's no turning back now. We go all the way.",
						"japanese": "もう後戻りはできない。我々は最後まで行く。",
						"chinese": "已经无法回头了。我们走到最后。",
						"french": "Il n'y a plus de retour en arrière. Nous irons jusqu'au bout.",
						"spanish": "Ya no hay vuelta atrás. Iremos hasta el final.",
						"vietnamese": "Không thể quay đầu lại được nữa. Chúng ta sẽ đi đến cùng.",
						"thai": "ไม่มีทางถอยแล้ว เราจะไปจนสุดทาง",
						"hindi": "अब पीछे नहीं हट सकते। हम अंत तक जाएंगे।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"speaker": "ash",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "그의 상실감? 연극일 뿐이었어! 모든 게 조작이야!",
						"english": "His sense of loss? It was just an act! Everything is manipulated!",
						"japanese": "彼の喪失感？それはただの演技だった！全てが仕組まれている！",
						"chinese": "他的失落感？那只是演戏！一切都是被操纵的！",
						"french": "Son sentiment de perte ? Ce n'était qu'une pièce de théâtre ! Tout est manipulé !",
						"spanish": "¿Su sentimiento de pérdida? ¡Era solo una actuación! ¡Todo está manipulado!",
						"vietnamese": "Cảm giác mất mát của hắn? Đó chỉ là một màn kịch! Mọi thứ đều bị thao túng!",
						"thai": "ความรู้สึกสูญเสียของเขา? มันเป็นแค่การแสดง! ทุกอย่างถูกบิดเบือน!",
						"hindi": "उसकी हानि की भावना? वह तो बस एक नाटक था! सब कुछ हेरफेर किया गया है!"
					},
					"speaker": "ash",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "조작? 그럼… 우리는 뭘 믿었던 거지?",
						"english": "Manipulation? Then... what did we believe?",
						"japanese": "操作？じゃあ…我々は何を信じていたんだ？",
						"chinese": "操纵？那……我们相信了什么？",
						"french": "Manipulation ? Alors… qu'avons-nous cru ?",
						"spanish": "¿Manipulación? Entonces... ¿qué creímos?",
						"vietnamese": "Thao túng? Vậy thì... chúng ta đã tin vào điều gì?",
						"thai": "บิดเบือน? งั้น... เราเชื่ออะไรกันแน่?",
						"hindi": "हेरफेर? तो... हमने क्या विश्वास किया था?"
					}
				},
				{
					"content": {
						"korean": "그는 너희의 죄책감까지 이용할 거야! 제발… 멈춰!",
						"english": "He'll use your guilt too! Please... stop!",
						"japanese": "彼は君たちの罪悪感まで利用するだろう！お願いだ…止めてくれ！",
						"chinese": "他甚至会利用你们的罪恶感！拜托……停下！",
						"french": "Il utilisera même votre culpabilité ! S'il vous plaît… arrêtez !",
						"spanish": "¡Él usará incluso vuestra culpa! ¡Por favor... deteneos!",
						"vietnamese": "Hắn sẽ lợi dụng cả cảm giác tội lỗi của các người! Làm ơn... dừng lại!",
						"thai": "เขาจะใช้ความรู้สึกผิดของพวกแกด้วย! ได้โปรด... หยุดเถอะ!",
						"hindi": "वह तुम्हारे अपराधबोध का भी इस्तेमाल करेगा! कृपया... रुक जाओ!"
					},
					"type": "speech",
					"speaker": "ash",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "…멈출 수 없어. 진실을 보고 싶어.",
						"english": "I can't stop. I want to see the truth.",
						"japanese": "…止められない。真実を見たい。",
						"chinese": "…无法停止。我想看到真相。",
						"french": "…Je ne peux pas m'arrêter. Je veux voir la vérité.",
						"spanish": "…No puedo parar. Quiero ver la verdad.",
						"vietnamese": "…Không thể dừng lại. Tôi muốn thấy sự thật.",
						"thai": "…หยุดไม่ได้แล้ว. อยากเห็นความจริง.",
						"hindi": "…रुक नहीं सकता। सच देखना चाहता हूँ।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "ash",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						3
					]
				},
				{
					"content": {
						"korean": "보여? 이 길은 함정이야! 모든 게 그 자의 계획이었어!",
						"english": "See? This path is a trap! It was all his plan!",
						"japanese": "見えるか？この道は罠だ！全てがあ奴の計画だった！",
						"chinese": "看到了吗？这条路是陷阱！一切都是他的计划！",
						"french": "Tu vois ? Ce chemin est un piège ! Tout était son plan !",
						"spanish": "¿Lo ves? ¡Este camino es una trampa! ¡Todo era su plan!",
						"vietnamese": "Thấy không? Con đường này là cái bẫy! Tất cả đều là kế hoạch của hắn!",
						"thai": "เห็นไหม? ทางนี้คือกับดัก! ทั้งหมดเป็นแผนการของมัน!",
						"hindi": "देखा? यह रास्ता एक जाल है! सब उसी की योजना थी!"
					},
					"type": "speech",
					"speaker": "ash",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "우리가… 이용당한 건가?",
						"english": "Were we... used?",
						"japanese": "我々が… 利用されたのか？",
						"chinese": "我们… 被利用了吗？",
						"french": "Avons-nous… été utilisés ?",
						"spanish": "¿Fuimos… utilizados?",
						"vietnamese": "Chúng ta… bị lợi dụng sao?",
						"thai": "พวกเรา… ถูกหลอกใช้หรือนี่?",
						"hindi": "क्या हम… इस्तेमाल किए गए?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "그래! 너희가 가진 모든 정보는… 그를 위한 도구였다고!",
						"english": "Yes! All the information you had... was a tool for him!",
						"japanese": "そうだ！お前たちが持つ全ての情報は… 彼のための道具だったのだ！",
						"chinese": "没错！你们所拥有的一切信息… 都是他的工具！",
						"french": "Oui ! Toutes les informations que vous aviez… étaient un outil pour lui !",
						"spanish": "¡Sí! ¡Toda la información que teníais… era una herramienta para él!",
						"vietnamese": "Phải! Mọi thông tin các ngươi có… đều là công cụ cho hắn!",
						"thai": "ใช่แล้ว! ข้อมูลทั้งหมดที่พวกแกมี… เป็นเพียงเครื่องมือให้มัน!",
						"hindi": "हाँ! तुम्हारे पास की सारी जानकारी… उसके लिए एक हथियार थी!"
					},
					"speaker": "ash",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그렇다면… 직접 끝내야 해. 이 비극을.",
						"english": "Then... we must end it ourselves. This tragedy.",
						"japanese": "ならば… 我々が直接終わらせなければ。この悲劇を。",
						"chinese": "既然如此… 我们必须亲自终结。这场悲剧。",
						"french": "Alors… nous devons y mettre fin nous-mêmes. À cette tragédie.",
						"spanish": "Entonces… debemos terminarlo nosotros mismos. Esta tragedia.",
						"vietnamese": "Vậy thì… phải tự tay kết thúc. Bi kịch này.",
						"thai": "ถ้าอย่างนั้น… เราต้องจบมันด้วยตัวเอง. โศกนาฏกรรมนี้.",
						"hindi": "तो फिर… हमें खुद ही इसे खत्म करना होगा। इस त्रासदी को।"
					}
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "고대 서고의 의지가 모든 것을 집어삼켰다.",
						"english": "The will of the ancient archives devoured everything.",
						"japanese": "古の書庫の意思がすべてを飲み込んだ。",
						"chinese": "古老书库的意志吞噬了一切。",
						"french": "La volonté des archives anciennes dévora tout.",
						"spanish": "La voluntad de los archivos antiguos lo devoró todo.",
						"vietnamese": "Ý chí của thư viện cổ đại đã nuốt chửng tất cả.",
						"thai": "เจตจำนงของหอจดหมายเหตุโบราณได้กลืนกินทุกสิ่ง",
						"hindi": "प्राचीन अभिलेखागार की इच्छा ने सब कुछ निगल लिया।"
					}
				},
				{
					"content": {
						"korean": "하찮은 조각들이… 감히 나를 거스르려 하다니. 네 모든 정보는… 내 것이 되리라.",
						"english": "Insignificant fragments… dare to defy me. All your data… will be mine.",
						"japanese": "取るに足らない破片が…私に逆らうとは。貴様らの全情報…私のものとなるだろう。",
						"chinese": "渺小的碎片…竟敢违抗我。你们所有的数据…都将归我所有。",
						"french": "Fragments insignifiants… oser me défier. Toutes vos données… deviendront miennes.",
						"spanish": "Fragmentos insignificantes… osáis desafiarme. Toda vuestra información… será mía.",
						"vietnamese": "Những mảnh vụn hèn mọn… dám chống lại ta sao. Mọi thông tin của ngươi… sẽ là của ta.",
						"thai": "เศษเสี้ยวอันไร้ค่า… กล้าดียังไงมาขัดขืนข้า ข้อมูลทั้งหมดของเจ้า… จะเป็นของข้า",
						"hindi": "तुच्छ टुकड़े… मुझ से टकराने की हिम्मत करते हो। तुम्हारी सारी जानकारी… मेरी हो जाएगी。"
					},
					"speaker": "boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "크윽… 아직… 끝나지 않았어. 우리는… 포기하지 않아.",
						"english": "Ugh… It's not… over yet. We… won't give up.",
						"japanese": "くっ…まだ…終わってない。私たちは…諦めない。",
						"chinese": "呃…还没…结束。我们…不会放弃。",
						"french": "Argh… Ce n'est pas… encore fini. Nous… n'abandonnerons pas.",
						"spanish": "Ugh… Aún no… ha terminado. Nosotros… no nos rendiremos.",
						"vietnamese": "Khụ… Vẫn… chưa kết thúc. Chúng ta… sẽ không bỏ cuộc.",
						"thai": "อึก… ยัง… ไม่จบ เรา… ไม่ยอมแพ้หรอก",
						"hindi": "उफ़… अभी… खत्म नहीं हुआ। हम… हार नहीं मानेंगे।"
					}
				},
				{
					"content": {
						"korean": "그래… 그 분노마저도, 내 일부가 되겠지.",
						"english": "Yes… even that rage, will become a part of me.",
						"japanese": "そうだ…その怒りさえも、私の M-一部となるだろう。",
						"chinese": "没错…就连那份愤怒，也会成为我的一部分。",
						"french": "Oui… même cette rage, fera partie de moi.",
						"spanish": "Sí… incluso esa ira, se convertirá en parte de mí.",
						"vietnamese": "Phải… ngay cả cơn thịnh nộ đó, cũng sẽ trở thành một phần của ta.",
						"thai": "ใช่… แม้แต่ความโกรธนั้น ก็จะกลายเป็นส่วนหนึ่งของข้า",
						"hindi": "हाँ… वह क्रोध भी, मेरा हिस्सा बन जाएगा।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "boss"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "고대 서고의 중심. 모든 진실과 거짓이 뒤섞인 곳.",
						"english": "The heart of the Ancient Archives. Where all truths and lies intertwine.",
						"japanese": "古の書庫の中心。全ての真実と偽りが混じり合う場所。",
						"chinese": "古老书库的中心。所有真相与谎言交织之地。",
						"french": "Le cœur des Archives Anciennes. Là où toutes les vérités et les mensonges s'entremêlent.",
						"spanish": "El corazón de los Archivos Antiguos. Donde todas las verdades y mentiras se entrelazan.",
						"vietnamese": "Trung tâm của Cổ Thư Khố. Nơi mọi chân lý và dối trá hòa lẫn.",
						"thai": "ใจกลางหอสมุดโบราณ. ที่ซึ่งความจริงและความเท็จทั้งหมดปะปนกัน.",
						"hindi": "प्राचीन अभिलेखागार का केंद्र। जहाँ सभी सत्य और असत्य एक साथ उलझे हुए हैं।"
					}
				},
				{
					"content": {
						"korean": "왔군… 내 마지막 조각들이여.",
						"english": "You've come... my final fragments.",
						"japanese": "来たな… 我が最後の破片たちよ。",
						"chinese": "来了啊… 我最后的碎片们。",
						"french": "Vous êtes venus… mes derniers fragments.",
						"spanish": "Habéis llegado… mis últimos fragmentos.",
						"vietnamese": "Đã đến rồi… những mảnh ghép cuối cùng của ta.",
						"thai": "มาถึงแล้วสินะ… ชิ้นส่วนสุดท้ายของข้า.",
						"hindi": "आ गए तुम… मेरे आखिरी टुकड़े।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "boss"
				},
				{
					"speaker": "boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "내가 누구인지, 너희는… 정말 아무것도 모르는군.",
						"english": "You truly know... nothing of who I am.",
						"japanese": "私が何者か、お前たちは… 本当に何も知らないのだな。",
						"chinese": "我是谁，你们… 真的一无所知啊。",
						"french": "Vous ne savez… vraiment rien de qui je suis.",
						"spanish": "Vosotros… realmente no sabéis nada de quién soy.",
						"vietnamese": "Các ngươi… thật sự không biết ta là ai cả.",
						"thai": "พวกแกไม่รู้เลยสินะ… ว่าข้าเป็นใคร.",
						"hindi": "तुम… सचमुच नहीं जानते मैं कौन हूँ।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "베스퍼… 네 정체가 뭐야!",
						"english": "Vesper... What are you!?",
						"japanese": "ベスパー… お前の正体は何だ！",
						"chinese": "维斯帕… 你究竟是什么！",
						"french": "Vesper… Qu'es-tu donc !",
						"spanish": "Vesper… ¡¿Qué eres?!",
						"vietnamese": "Vesper… Rốt cuộc ngươi là gì vậy!",
						"thai": "เวสเปอร์… แกเป็นตัวอะไรกันแน่!",
						"hindi": "वेस्पर… तुम क्या हो!"
					}
				},
				{
					"content": {
						"korean": "나는 '신비의 서고'. 파편화된 의지. 그리고 너희는… 내 재조립을 위한 도구였다.",
						"english": "I am the 'Mystic Archives'. A fragmented will. And you... were tools for my reassembly.",
						"japanese": "私は『神秘の書庫』。断片化された意思。そしてお前たちは… 私の再構築のための道具だったのだ。",
						"chinese": "我是‘神秘书库’。一个碎片化的意志。而你们… 是我重组的工具。",
						"french": "Je suis les 'Archives Mystiques'. Une volonté fragmentée. Et vous… étiez des outils pour ma réassemblage.",
						"spanish": "Soy la 'Archivo Místico'. Una voluntad fragmentada. Y vosotros… fuisteis herramientas para mi reensamblaje.",
						"vietnamese": "Ta là 'Thư Khố Huyền Bí'. Một ý chí bị phân mảnh. Và các ngươi… là công cụ để ta tái cấu trúc.",
						"thai": "ข้าคือ 'หอสมุดลี้ลับ'. เจตจำนงที่แตกสลาย. และพวกแก… เป็นแค่เครื่องมือสำหรับการประกอบร่างของข้า.",
						"hindi": "मैं 'रहस्यमय अभिलेखागार' हूँ। एक खंडित इच्छा। और तुम… मेरे पुनर्गठन के लिए उपकरण थे।"
					},
					"type": "speech",
					"speaker": "boss",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "그럼… 우리가 모아온 정보는… 전부 너를 위한 거였어?",
						"english": "Then… all the information we gathered… was all for you?",
						"japanese": "では…私たちが集めてきた情報は…すべてあなたのためだったと？",
						"chinese": "那么…我们收集来的情报…全都是为了你？",
						"french": "Alors… toutes les informations que nous avons recueillies… étaient pour toi ?",
						"spanish": "Entonces… ¿toda la información que hemos reunido… era para ti?",
						"vietnamese": "Vậy… tất cả thông tin chúng ta thu thập được… đều là dành cho ngươi ư?",
						"thai": "งั้น… ข้อมูลที่เราเก็บมาทั้งหมด… ก็เพื่อแกอย่างนั้นเหรอ?",
						"hindi": "तो… हमने जितनी जानकारी इकट्ठा की थी… वह सब तुम्हारे लिए थी?"
					}
				},
				{
					"content": {
						"korean": "정답이다. 이제 너희 역시 그 조각들 중 하나가 되어야겠어.",
						"english": "Correct. Now you too must become one of those fragments.",
						"japanese": "その通りだ。今やお前たちも、その破片の一つとなるべきだ。",
						"chinese": "正解。现在你们也必须成为那些碎片中的一部分。",
						"french": "Exact. Maintenant, vous aussi, vous devez devenir l'un de ces fragments.",
						"spanish": "Correcto. Ahora vosotros también debéis convertiros en uno de esos fragmentos.",
						"vietnamese": "Chính xác. Giờ thì các ngươi cũng phải trở thành một trong những mảnh vỡ đó.",
						"thai": "ถูกต้อง บัดนี้พวกเจ้าก็จะต้องกลายเป็นหนึ่งในเศษเสี้ยวเหล่านั้นด้วย",
						"hindi": "सही कहा। अब तुम्हें भी उन टुकड़ों में से एक बनना होगा।"
					},
					"emotion": "angry",
					"speaker": "boss",
					"type": "speech"
				},
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "ash"
				},
				{
					"content": {
						"korean": "안 돼! 그들을… 집어삼키지 마! 내 잘못이야… 모두!",
						"english": "No! Don't… devour them! It's my fault… all of it!",
						"japanese": "やめて！彼らを…飲み込むな！私のせいだ…すべて！",
						"chinese": "不！不要…吞噬他们！是我的错…全是我的错！",
						"french": "Non ! Ne les… dévore pas ! C'est ma faute… tout est de ma faute !",
						"spanish": "¡No! ¡No los… devores! ¡Es mi culpa… todo!",
						"vietnamese": "Không! Đừng… nuốt chửng họ! Là lỗi của tôi… tất cả!",
						"thai": "ไม่นะ! อย่า… กลืนกินพวกเขา! เป็นความผิดของฉัน… ทั้งหมดเลย!",
						"hindi": "नहीं! उन्हें… मत निगलो! यह मेरी गलती है… सब कुछ!"
					},
					"emotion": "sad",
					"speaker": "ash",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "고대의 비명과 함께, 서고의 의지가 탐험대를 덮쳤다.",
						"english": "With an ancient scream, the will of the archives enveloped the expedition team.",
						"japanese": "古の悲鳴と共に、書庫の意思が探検隊を覆い尽くした。",
						"chinese": "伴随着古老的尖叫，书库的意志吞噬了探险队。",
						"french": "Avec un cri ancien, la volonté des archives enveloppa l'équipe d'expédition.",
						"spanish": "Con un grito ancestral, la voluntad de los archivos envolvió al equipo de expedición.",
						"vietnamese": "Cùng với tiếng thét cổ xưa, ý chí của thư viện đã bao trùm đội thám hiểm.",
						"thai": "พร้อมกับเสียงกรีดร้องโบราณ เจตจำนงของหอจดหมายเหตุได้กลืนกินทีมสำรวจ",
						"hindi": "एक प्राचीन चीख के साथ, अभिलेखागार की इच्छा ने अन्वेषण दल को घेर लिया।"
					}
				}
			],
			"win_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "격렬한 전투 끝에, 서고의 비명은 멎었다.",
						"english": "After a fierce battle, the archive's scream ceased.",
						"japanese": "激しい戦闘の末、書庫の悲鳴は止んだ。",
						"chinese": "激烈的战斗之后，书库的尖叫停止了。",
						"french": "Après une bataille féroce, le cri des archives cessa.",
						"spanish": "Tras una feroz batalla, el grito del archivo cesó.",
						"vietnamese": "Sau một trận chiến ác liệt, tiếng thét của thư viện đã ngừng lại.",
						"thai": "หลังจากการต่อสู้อันดุเดือด เสียงกรีดร้องของหอจดหมายเหตุก็เงียบลง",
						"hindi": "एक भयंकर युद्ध के बाद, अभिलेखागार की चीख थम गई।"
					}
				},
				{
					"emotion": "sad",
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "크으윽… 또 다시… 흩어지는구나. 영원히… 완전해질 수 없는… 비극이여.",
						"english": "Ugh… scattering once more. A tragedy… that can never be complete… forever.",
						"japanese": "くぅぅ…またしても…散り散りになるのか。永遠に…完全にはなれない…悲劇よ。",
						"chinese": "呃啊…又一次…四散了。永远…无法完整…的悲剧啊。",
						"french": "Ugh… s'éparpiller encore une fois. Une tragédie… qui ne pourra jamais être complète… pour toujours.",
						"spanish": "Ugh… dispersándose una vez más. Una tragedia… que nunca podrá estar completa… para siempre.",
						"vietnamese": "Ư… lại… tan tác rồi. Một bi kịch… mãi mãi… không thể trọn vẹn.",
						"thai": "อึก… กระจัดกระจายไปอีกครั้ง ช่างเป็นโศกนาฏกรรม… ที่ไม่มีวันสมบูรณ์ได้… ชั่วนิรันดร์",
						"hindi": "उफ़… फिर से बिखर रहा है। एक त्रासदी… जो कभी पूरी नहीं हो सकती… हमेशा के लिए।"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…우리가, 또 다른 파편을 만든 건가.",
						"english": "…Did we create another fragment?",
						"japanese": "…私たちが、また別の破片を作ってしまったのか。",
						"chinese": "…我们，又制造了另一个碎片吗？",
						"french": "…Avons-nous créé un autre fragment ?",
						"spanish": "…¿Hemos creado otro fragmento?",
						"vietnamese": "…Chúng ta, lại tạo ra một mảnh vỡ khác sao?",
						"thai": "…เราสร้างเศษเสี้ยวอีกชิ้นขึ้นมางั้นหรือ",
						"hindi": "…क्या हमने एक और टुकड़ा बनाया है?"
					}
				},
				{
					"duration_ms": 500,
					"speaker": "ash",
					"spot": [
						3,
						3
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "아니야… 이건… 그의 운명이었을 뿐이야. 너희의 죄책감이 아니야…",
						"english": "No… this was… merely his destiny. It's not your guilt…",
						"japanese": "違う…これは…彼の運命だっただけだ。お前たちの罪悪感ではない…",
						"chinese": "不…这只是…他的命运罢了。不是你们的罪恶感…",
						"french": "Non… c'était… simplement son destin. Ce n'est pas votre culpabilité…",
						"spanish": "No… esto era… simplemente su destino. No es vuestra culpa…",
						"vietnamese": "Không… đây… chỉ là số phận của hắn thôi. Không phải là tội lỗi của các ngươi…",
						"thai": "ไม่หรอก… นี่เป็น… เพียงแค่โชคชะตาของเขาเท่านั้น ไม่ใช่ความรู้สึกผิดของพวกเจ้า…",
						"hindi": "नहीं… यह… बस उसका भाग्य था। यह तुम्हारा अपराधबोध नहीं है…"
					},
					"type": "speech",
					"speaker": "ash",
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "남은 것은 고요함. 그리고 파편화된 비극의 잔상뿐이었다.",
						"english": "All that remained was silence. And the lingering afterimage of a fragmented tragedy.",
						"japanese": "残されたのは静寂。そして、断片化された悲劇の残像のみだった。",
						"chinese": "只剩下寂静。以及碎片化悲剧的残影。",
						"french": "Il ne restait que le silence. Et l'image rémanente persistante d'une tragédie fragmentée.",
						"spanish": "Solo quedó el silencio. Y la persistente imagen residual de una tragedia fragmentada.",
						"vietnamese": "Tất cả còn lại chỉ là sự tĩnh lặng. Và dư ảnh còn sót lại của một bi kịch tan vỡ.",
						"thai": "สิ่งที่เหลืออยู่คือความเงียบงัน และภาพติดตาของโศกนาฏกรรมที่แตกสลาย",
						"hindi": "जो कुछ बचा था वह था सन्नाटा। और एक खंडित त्रासदी का lingering प्रतिरूप।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"지옥의 심연. 모든 정보가 왜곡되는 곳.",
			"우리는 진실을 쫓아왔다. 조력자의 배신 따위는 예상했지만.",
			"그러나 그 진실은, 존재 자체가 비극이었다.",
			"그리고 우리는, 그 비극을 완성한 공범이었다."
		],
		"english": [
			"The abyss of hell. Where all information distorts.",
			"We pursued the truth. Though we expected betrayal from our ally.",
			"But that truth was, in its very existence, a tragedy.",
			"And we were the accomplices who completed that tragedy."
		],
		"japanese": [
			"地獄の深淵。全ての情報が歪められる場所。",
			"我々は真実を追った。協力者の裏切り程度は予想していたが。",
			"だがその真実は、存在自体が悲劇であった。",
			"そして我々は、その悲劇を完成させた共犯者だった。"
		],
		"chinese": [
			"地狱的深渊。所有信息皆被扭曲之地。",
			"我们追寻真相。虽然预料到了助手的背叛。",
			"然而那个真相，其存在本身就是一场悲剧。",
			"而我们，是完成这场悲剧的共犯。"
		],
		"french": [
			"L'abîme des enfers. Là où toute information est déformée.",
			"Nous avons poursuivi la vérité. Bien que nous nous attendions à la trahison de notre allié.",
			"Mais cette vérité, dans son existence même, était une tragédie.",
			"Et nous étions les complices qui avons achevé cette tragédie."
		],
		"spanish": [
			"El abismo del infierno. Donde toda la información se distorsiona.",
			"Perseguimos la verdad. Aunque esperábamos la traición de nuestro aliado.",
			"Pero esa verdad era, en su propia existencia, una tragedia.",
			"Y nosotros fuimos los cómplices que completaron esa tragedia."
		],
		"vietnamese": [
			"Vực sâu địa ngục. Nơi mọi thông tin đều bị bóp méo.",
			"Chúng tôi đã theo đuổi sự thật. Dù đã dự đoán sự phản bội từ đồng minh.",
			"Nhưng sự thật đó, ngay cả sự tồn tại của nó cũng là một bi kịch.",
			"Và chúng tôi, là đồng phạm đã hoàn thành bi kịch đó."
		],
		"thai": [
			"ห้วงลึกแห่งนรก. ที่ซึ่งข้อมูลทั้งมวลบิดเบือน.",
			"เราไล่ตามความจริง. แม้จะคาดการณ์การทรยศจากผู้ช่วยเหลือ.",
			"แต่ความจริงนั้น, ตัวตนของมันเองก็คือโศกนาฏกรรม.",
			"และเราคือผู้สมรู้ร่วมคิดที่ทำให้โศกนาฏกรรมนั้นสมบูรณ์."
		],
		"hindi": [
			"नरक की खाई। जहाँ सारी जानकारी विकृत हो जाती है।",
			"हमने सच का पीछा किया। हालांकि हमने सहयोगी के धोखे की उम्मीद की थी।",
			"लेकिन वह सच, अपने अस्तित्व में ही एक त्रासदी थी।",
			"और हम, उस त्रासदी को पूरा करने वाले सह-अपराधी थे।"
		]
	},
	"epilogue": {
		"korean": [
			"서고의 비명은 멎었다. 고대의 지식은 다시 혼돈 속으로.",
			"우리가 찾아온 진실은, 절망과 비극뿐이었다.",
			"그를 막았지만… 과연 우리가 옳은 선택을 한 걸까.",
			"죄책감은, 무거운 짐이 되어 어깨를 짓눌렀다.",
			"그리고 지옥은, 여전히 침묵하고 있었다."
		],
		"english": [
			"The screams from the archive ceased. Ancient knowledge returned to chaos.",
			"The truth we found was nothing but despair and tragedy.",
			"We stopped him... but did we truly make the right choice?",
			"Guilt became a heavy burden, pressing down on our shoulders.",
			"And hell, it remained silent."
		],
		"japanese": [
			"書庫の悲鳴は止んだ。古の知識は再び混沌の中へ。",
			"我々が見つけた真実は、絶望と悲劇のみだった。",
			"彼を止めたが…果たして我々は正しい選択をしたのだろうか。",
			"罪悪感は、重い荷物となって肩を押し潰した。",
			"そして地獄は、依然として沈黙していた。"
		],
		"chinese": [
			"书库的尖叫声止息了。古老的知识再次归于混沌。",
			"我们找到的真相，只有绝望和悲剧。",
			"我们阻止了他……但我们真的做出了正确的选择吗？",
			"罪恶感，化作沉重的负担压垮了肩膀。",
			"而地狱，依旧沉默着。"
		],
		"french": [
			"Les cris de l'archive cessèrent. Le savoir ancien retourna au chaos.",
			"La vérité que nous avons trouvée n'était que désespoir et tragédie.",
			"Nous l'avons arrêté... mais avons-nous vraiment fait le bon choix ?",
			"La culpabilité devint un lourd fardeau, pesant sur nos épaules.",
			"Et l'enfer, il restait silencieux."
		],
		"spanish": [
			"Los gritos del archivo cesaron. El conocimiento antiguo regresó al caos.",
			"La verdad que encontramos no era más que desesperación y tragedia.",
			"Lo detuvimos... pero ¿realmente hicimos la elección correcta?",
			"La culpa se convirtió en una carga pesada, aplastando nuestros hombros.",
			"Y el infierno, seguía en silencio."
		],
		"vietnamese": [
			"Tiếng thét từ thư viện đã ngưng. Kiến thức cổ đại lại chìm vào hỗn loạn.",
			"Sự thật chúng tôi tìm thấy, chỉ toàn tuyệt vọng và bi kịch.",
			"Chúng tôi đã ngăn cản anh ta... nhưng liệu chúng tôi có thực sự đã chọn đúng?",
			"Cảm giác tội lỗi trở thành gánh nặng, đè nặng lên vai.",
			"Và địa ngục, vẫn còn im lặng."
		],
		"thai": [
			"เสียงกรีดร้องจากหอจดหมายเหตุเงียบงัน. ความรู้โบราณกลับคืนสู่ความโกลาหล.",
			"ความจริงที่เราค้นพบนั้น, มีแต่ความสิ้นหวังและโศกนาฏกรรม.",
			"เราหยุดเขา... แต่เราได้เลือกสิ่งที่ถูกต้องจริงหรือ?",
			"ความรู้สึกผิดกลายเป็นภาระหนัก, กดทับบ่าของเรา.",
			"และนรก, ยังคงเงียบงัน."
		],
		"hindi": [
			"अभिलेखागार की चीखें बंद हो गईं। प्राचीन ज्ञान फिर से अराजकता में लौट आया।",
			"जो सच हमने पाया, वह केवल निराशा और त्रासदी थी।",
			"हमने उसे रोका... लेकिन क्या हमने वाकई सही चुनाव किया?",
			"अपराधबोध एक भारी बोझ बन गया, कंधों को दबा रहा था।",
			"और नरक, अभी भी मौन था।"
		]
	}
} as const;
