export const scenario_forest_eldoria_29_04 = {
	"scenario_id": "forest_eldoria_29_04",
	"order": 4,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"ivy": {
			"id": "mon_d1c759f3-74f8-42b7-ba16-c705649f006f",
			"name": {
				"korean": "아이비",
				"english": "Ivy",
				"japanese": "アイビー",
				"chinese": "艾薇",
				"french": "Ivy",
				"spanish": "Ivy",
				"vietnamese": "Ivy",
				"thai": "ไอวี่",
				"hindi": "आइवी"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/654fde54-6029-4601-b4a8-0578f00df900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/6ee8738d-0e14-4f8d-d04d-c934b0fff000/public"
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
					"speaker": "narrator",
					"content": {
						"korean": "시간이 멈춘 듯한 고대 유적. 거대한 석판들이 숲에 잠겨 있었다.",
						"english": "Ancient ruins where time seemed to stand still. Colossal stone tablets lay submerged in the forest.",
						"japanese": "時が止まったかのような古代遺跡。巨大な石板が森に埋もれていた。",
						"chinese": "时间仿佛静止的古老遗迹。巨大的石板沉睡在森林中。",
						"french": "D'anciennes ruines où le temps semblait s'être arrêté. Des dalles de pierre colossales étaient immergées dans la forêt.",
						"spanish": "Antiguas ruinas donde el tiempo parecía haberse detenido. Tablas de piedra colosales yacían sumergidas en el bosque.",
						"vietnamese": "Tàn tích cổ đại như thể thời gian đã ngừng lại. Những phiến đá khổng lồ chìm trong rừng.",
						"thai": "ซากปรักหักพังโบราณที่กาลเวลาดูเหมือนจะหยุดนิ่ง แผ่นหินขนาดยักษ์จมอยู่ในป่า",
						"hindi": "प्राचीन खंडहर जहाँ समय ठहरा हुआ प्रतीत होता था। विशाल पत्थर की पट्टियाँ जंगल में डूबी हुई थीं।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이게… 숲에서 가장 오래된 유적이야?",
						"english": "Is this… the oldest ruin in the forest?",
						"japanese": "これが… 森で最も古い遺跡なの？",
						"chinese": "这…是森林里最古老的遗迹吗？",
						"french": "Est-ce… la plus ancienne ruine de la forêt ?",
						"spanish": "¿Es esto… la ruina más antigua del bosque?",
						"vietnamese": "Đây là… tàn tích cổ xưa nhất trong rừng sao?",
						"thai": "นี่คือ... ซากปรักหักพังที่เก่าแก่ที่สุดในป่าหรือ?",
						"hindi": "क्या यह… जंगल का सबसे पुराना खंडहर है?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "direction",
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"speaker": "ivy",
					"action": "enter"
				},
				{
					"content": {
						"korean": "맞아요. 이곳의 기록들을 연구하고 있었어요.",
						"english": "That's right. I've been studying the records here.",
						"japanese": "そうです。ここの記録を研究していました。",
						"chinese": "没错。我一直在研究这里的记录。",
						"french": "C'est exact. J'étudiais les archives ici.",
						"spanish": "Así es. He estado estudiando los registros de aquí.",
						"vietnamese": "Đúng vậy. Tôi đang nghiên cứu các ghi chép ở đây.",
						"thai": "ใช่แล้ว ฉันกำลังศึกษาบันทึกที่นี่",
						"hindi": "सही है। मैं यहाँ के अभिलेखों का अध्ययन कर रहा था।"
					},
					"type": "speech",
					"speaker": "ivy",
					"emotion": "base"
				},
				{
					"speaker": "ivy",
					"type": "speech",
					"content": {
						"korean": "…어떤 거대한 존재의 '기억'이 이 숲을 만들었다고 생각해요.",
						"english": "…I believe the 'memory' of some colossal entity created this forest.",
						"japanese": "…ある巨大な存在の『記憶』がこの森を創ったのだと思います。",
						"chinese": "……我认为某个巨大存在的‘记忆’创造了这片森林。",
						"french": "…Je crois que la 'mémoire' d'une entité colossale a créé cette forêt.",
						"spanish": "…Creo que la 'memoria' de alguna entidad colosal creó este bosque.",
						"vietnamese": "…Tôi nghĩ 'ký ức' của một thực thể khổng lồ nào đó đã tạo ra khu rừng này.",
						"thai": "...ฉันเชื่อว่า 'ความทรงจำ' ของสิ่งมีชีวิตขนาดยักษ์บางชนิดสร้างป่าแห่งนี้ขึ้นมา",
						"hindi": "...मुझे लगता है कि किसी विशाल सत्ता की 'स्मृति' ने इस जंगल को बनाया है।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "ivy",
					"duration_ms": 500,
					"spot": [
						3,
						3
					],
					"type": "direction"
				},
				{
					"speaker": "ivy",
					"type": "speech",
					"content": {
						"korean": "이 석판에는 역병과 봉인에 대한 기록이 있어요.",
						"english": "These stone tablets contain records of a plague and a seal.",
						"japanese": "この石板には疫病と封印に関する記録があります。",
						"chinese": "这块石板上记录着关于瘟疫和封印的信息。",
						"french": "Ces dalles de pierre contiennent des récits d'une peste et d'un sceau.",
						"spanish": "Estas losas de piedra contienen registros de una plaga y un sello.",
						"vietnamese": "Trên phiến đá này có ghi chép về dịch bệnh và phong ấn.",
						"thai": "แผ่นหินเหล่านี้มีบันทึกเกี่ยวกับโรคระบาดและการผนึก",
						"hindi": "इन पत्थर की पट्टियों में एक महामारी और एक मुहर के अभिलेख हैं।"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "역병…?",
						"english": "Plague…?",
						"japanese": "疫病…？",
						"chinese": "瘟疫…？",
						"french": "Peste…?",
						"spanish": "¿Plaga…?",
						"vietnamese": "Dịch bệnh…?",
						"thai": "โรคระบาด…?",
						"hindi": "महामारी…?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "ivy",
					"content": {
						"korean": "그리고 알 수 없는 '희생'에 대한 암시도요.",
						"english": "And hints of an unknown 'sacrifice'.",
						"japanese": "そして、未知の『犠牲』についても示唆されています。",
						"chinese": "还有关于未知“牺牲”的暗示。",
						"french": "Et des allusions à un 'sacrifice' inconnu.",
						"spanish": "Y también indicios de un 'sacrificio' desconocido.",
						"vietnamese": "Và cả những ám chỉ về một 'sự hy sinh' không rõ.",
						"thai": "และยังมีการพาดพิงถึง 'การเสียสละ' ที่ไม่รู้จักด้วย",
						"hindi": "और एक अज्ञात 'बलिदान' के संकेत भी।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "숲의 신비가… 그런 거였어?",
						"english": "So that was the forest's mystery…?",
						"japanese": "森の神秘が…そういうことだったの？",
						"chinese": "森林的神秘…就是这个吗？",
						"french": "Le mystère de la forêt… c'était ça ?",
						"spanish": "¿El misterio del bosque… era eso?",
						"vietnamese": "Bí ẩn của khu rừng… là thế này sao?",
						"thai": "ความลึกลับของป่า… เป็นแบบนี้เหรอ?",
						"hindi": "जंगल का रहस्य… ऐसा था क्या?"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "ivy",
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						3
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "점점 더 깊은 곳으로. 바람이 불어왔다.",
						"english": "Deeper and deeper. The wind blew.",
						"japanese": "ますます深い場所へ。風が吹いてきた。",
						"chinese": "越来越深入。风吹了过来。",
						"french": "De plus en plus profond. Le vent soufflait.",
						"spanish": "Cada vez más profundo. El viento sopló.",
						"vietnamese": "Càng lúc càng sâu hơn. Gió thổi đến.",
						"thai": "ลึกเข้าไปเรื่อยๆ ลมพัดมา",
						"hindi": "गहराई में और गहराई में। हवा चली।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…방금 무슨 소리 못 들었어?",
						"english": "…Didn't you hear something just now?",
						"japanese": "…今、何か聞こえなかった？",
						"chinese": "…你刚才没听到什么声音吗？",
						"french": "…Tu n'as rien entendu tout à l'heure ?",
						"spanish": "¿…No escuchaste algo justo ahora?",
						"vietnamese": "…Vừa nãy bạn không nghe thấy gì sao?",
						"thai": "…เมื่อกี้ไม่ได้ยินเสียงอะไรเหรอ?",
						"hindi": "…क्या तुमने अभी कुछ सुना नहीं?"
					},
					"speaker": "character_1",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "'희생'… '봉인'…?",
						"english": "'Sacrifice'… 'Seal'…?",
						"japanese": "『犠牲』…『封印』…？",
						"chinese": "“牺牲”…“封印”…？",
						"french": "'Sacrifice'… 'Sceau'…?",
						"spanish": "¿'Sacrificio'… 'Sello'…?",
						"vietnamese": "'Hy sinh'… 'Phong ấn'…?",
						"thai": "'การเสียสละ'… 'การผนึก'…?",
						"hindi": "'बलिदान'… 'मुहर'…?"
					},
					"type": "speech",
					"speaker": "character_2",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "이건… 숲의 기억이에요. 잊혀진 것들의 잔해.",
						"english": "This is… the forest's memory. Remnants of forgotten things.",
						"japanese": "これは…森の記憶です。忘れ去られたものの残骸。",
						"chinese": "这是…森林的记忆。被遗忘之物的残骸。",
						"french": "C'est… la mémoire de la forêt. Les vestiges des choses oubliées.",
						"spanish": "Esto es… la memoria del bosque. Los vestigios de lo olvidado.",
						"vietnamese": "Đây là… ký ức của khu rừng. Tàn dư của những điều đã bị lãng quên.",
						"thai": "นี่คือ… ความทรงจำของป่า เศษซากของสิ่งที่ถูกลืม",
						"hindi": "यह… जंगल की याददाश्त है। भूली हुई चीज़ों के अवशेष।"
					},
					"type": "speech",
					"speaker": "ivy",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "점점 더… 기분 나빠져.",
						"english": "It's getting more and more… unsettling.",
						"japanese": "ますます…気分が悪くなる。",
						"chinese": "越来越…不舒服。",
						"french": "C'est de plus en plus… inquiétant.",
						"spanish": "Cada vez se siente más… desagradable.",
						"vietnamese": "Càng lúc càng… khó chịu.",
						"thai": "ยิ่งนานวันยิ่ง… รู้สึกไม่ดี",
						"hindi": "और भी… बुरा लग रहा है।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"speaker": "ivy",
					"action": "enter"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "이 숲은 거대한 기억 그 자체예요. 그리고 그 기억은… 봉인된 것을 지키려 해요.",
						"english": "This forest is a vast memory itself. And that memory… tries to protect what is sealed.",
						"japanese": "この森は巨大な記憶そのものです。そしてその記憶は…封印されたものを守ろうとしている。",
						"chinese": "这片森林本身就是巨大的记忆。而那记忆…正试图守护被封印之物。",
						"french": "Cette forêt est une mémoire immense à elle seule. Et cette mémoire… essaie de protéger ce qui est scellé.",
						"spanish": "Este bosque es una memoria gigantesca en sí mismo. Y esa memoria… intenta proteger lo sellado.",
						"vietnamese": "Khu rừng này chính là một ký ức khổng lồ. Và ký ức đó… đang cố gắng bảo vệ thứ đã bị phong ấn.",
						"thai": "ป่านี้คือความทรงจำอันยิ่งใหญ่ และความทรงจำนั้น… พยายามจะปกป้องสิ่งที่ถูกผนึกไว้",
						"hindi": "यह जंगल स्वयं एक विशाल स्मृति है। और वह स्मृति… सील की गई चीज़ों की रक्षा करने की कोशिश करती है।"
					},
					"type": "speech",
					"speaker": "ivy"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "봉인된 것…?",
						"english": "What is sealed…?",
						"japanese": "封印されたもの…？",
						"chinese": "被封印之物…？",
						"french": "Ce qui est scellé…?",
						"spanish": "¿Lo sellado…?",
						"vietnamese": "Thứ bị phong ấn…?",
						"thai": "สิ่งที่ถูกผนึก…?",
						"hindi": "सील की गई चीज़…?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "그때, 거대한 그림자가 나타났다.",
						"english": "Then, a giant shadow appeared.",
						"japanese": "その時、巨大な影が現れた。",
						"chinese": "那时，一个巨大的影子出现了。",
						"french": "Alors, une ombre gigantesque apparut.",
						"spanish": "Entonces, una sombra gigante apareció.",
						"vietnamese": "Khi đó, một cái bóng khổng lồ xuất hiện.",
						"thai": "จากนั้น เงาขนาดยักษ์ก็ปรากฏขึ้น",
						"hindi": "तभी, एक विशाल छाया प्रकट हुई।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "여기서 더 나아가선 안 돼.",
						"english": "You must not proceed further.",
						"japanese": "これ以上進んではならない。",
						"chinese": "你不能再往前走了。",
						"french": "Tu ne dois pas aller plus loin.",
						"spanish": "No debes avanzar más.",
						"vietnamese": "Ngươi không được đi xa hơn nữa.",
						"thai": "เจ้าห้ามไปต่อจากนี้",
						"hindi": "आपको आगे नहीं बढ़ना चाहिए।"
					}
				},
				{
					"content": {
						"korean": "네가… 그 기억을 지키는 자인가?",
						"english": "Are you… the one who guards that memory?",
						"japanese": "お前が…その記憶を守る者なのか？",
						"chinese": "你就是…守护那段记忆的人吗？",
						"french": "Es-tu… le gardien de ce souvenir ?",
						"spanish": "¿Eres tú… quien guarda ese recuerdo?",
						"vietnamese": "Ngươi… là người bảo vệ ký ức đó sao?",
						"thai": "เจ้าคือ… ผู้พิทักษ์ความทรงจำนั้นหรือ?",
						"hindi": "क्या तुम… उस स्मृति के रक्षक हो?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "어리석은 것들. 잊혀진 것을 왜 깨우려 하는가?",
						"english": "Fools. Why do you awaken what has been forgotten?",
						"japanese": "愚か者め。忘れ去られたものを何故呼び覚まそうとする？",
						"chinese": "愚蠢的家伙。为什么要唤醒已被遗忘的东西？",
						"french": "Fous. Pourquoi réveiller ce qui a été oublié ?",
						"spanish": "Necios. ¿Por qué intentan despertar lo olvidado?",
						"vietnamese": "Lũ ngốc. Tại sao lại cố gắng đánh thức những gì đã bị lãng quên?",
						"thai": "พวกโง่ ทำไมถึงปลุกสิ่งที่ถูกลืม?",
						"hindi": "मूर्खों। भूली हुई चीज़ों को क्यों जगा रहे हो?"
					},
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "진실을 알아야 해.",
						"english": "We must know the truth.",
						"japanese": "真実を知らねばならない。",
						"chinese": "我们必须知道真相。",
						"french": "Nous devons connaître la vérité.",
						"spanish": "Debemos saber la verdad.",
						"vietnamese": "Chúng ta phải biết sự thật.",
						"thai": "เราต้องรู้ความจริง",
						"hindi": "हमें सच्चाई जाननी होगी।"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "기억의 파편들이 모든 것을 집어삼켰다.",
						"english": "Fragments of memory devoured everything.",
						"japanese": "記憶の破片がすべてを飲み込んだ。",
						"chinese": "记忆的碎片吞噬了一切。",
						"french": "Des fragments de mémoire ont tout dévoré.",
						"spanish": "Fragmentos de memoria devoraron todo.",
						"vietnamese": "Những mảnh ký ức đã nuốt chửng mọi thứ.",
						"thai": "เศษเสี้ยวความทรงจำกลืนกินทุกสิ่ง",
						"hindi": "यादों के टुकड़ों ने सब कुछ निगल लिया।"
					}
				},
				{
					"content": {
						"korean": "어리석은 노력. 너희는 그저 기억의 일부가 될 뿐.",
						"english": "Foolish efforts. You will merely become a part of memory.",
						"japanese": "愚かな努力。お前たちはただ記憶の一部となるだけだ。",
						"chinese": "愚蠢的努力。你们只会成为记忆的一部分。",
						"french": "Efforts insensés. Vous ne deviendrez qu'une partie du souvenir.",
						"spanish": "Esfuerzos inútiles. Solo se convertirán en parte de la memoria.",
						"vietnamese": "Nỗ lực ngu ngốc. Các ngươi sẽ chỉ trở thành một phần của ký ức.",
						"thai": "ความพยายามที่โง่เขลา เจ้าจะเป็นเพียงส่วนหนึ่งของความทรงจำเท่านั้น",
						"hindi": "मूर्खतापूर्ण प्रयास। तुम बस यादों का हिस्सा बन जाओगे।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…아직 끝나지 않았어. 포기하지 않아.",
						"english": "...It's not over yet. I won't give up.",
						"japanese": "…まだ終わっていない。諦めない。",
						"chinese": "……还没结束。我不会放弃。",
						"french": "...Ce n'est pas encore fini. Je n'abandonnerai pas.",
						"spanish": "...Aún no ha terminado. No me rendiré.",
						"vietnamese": "...Vẫn chưa kết thúc. Tôi sẽ không bỏ cuộc.",
						"thai": "...ยังไม่จบลง ข้าไม่ยอมแพ้",
						"hindi": "...अभी खत्म नहीं हुआ है। मैं हार नहीं मानूंगा।"
					},
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "이것은 시작에 불과해… 잊혀진 기억이, 너희를 기다린다.",
						"english": "This is just the beginning… The forgotten memories await you.",
						"japanese": "これは始まりに過ぎない…忘れられた記憶が、お前たちを待っている。",
						"chinese": "这只是个开始…被遗忘的记忆，正在等着你们。",
						"french": "Ce n'est que le début… Les souvenirs oubliés vous attendent.",
						"spanish": "Esto es solo el principio… Las memorias olvidadas os esperan.",
						"vietnamese": "Đây chỉ là khởi đầu… Những ký ức bị lãng quên đang chờ đợi các ngươi.",
						"thai": "นี่เป็นเพียงจุดเริ่มต้น… ความทรงจำที่ถูกลืมกำลังรอเจ้าอยู่",
						"hindi": "यह तो बस शुरुआत है… भूली हुई यादें तुम्हारा इंतजार कर रही हैं।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "잊혀진 기억…?",
						"english": "Forgotten memories...?",
						"japanese": "忘れられた記憶…？",
						"chinese": "被遗忘的记忆…？",
						"french": "Souvenirs oubliés...?",
						"spanish": "¿Recuerdos olvidados...?",
						"vietnamese": "Ký ức bị lãng quên...?",
						"thai": "ความทรงจำที่ถูกลืมงั้นหรือ...?",
						"hindi": "भूली हुई यादें...?"
					}
				},
				{
					"spot": [
						3,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "ivy",
					"action": "enter"
				},
				{
					"speaker": "ivy",
					"type": "speech",
					"content": {
						"korean": "…석판에 있던 예언이 맞았어요. 봉인된 것은… 아직 끝나지 않았어.",
						"english": "...The prophecy on the tablet was true. What was sealed... it's not over yet.",
						"japanese": "…石板の予言は正しかった。封印されたものは…まだ終わっていない。",
						"chinese": "……石板上的预言是正确的。被封印的……还没结束。",
						"french": "...La prophétie sur la tablette était vraie. Ce qui était scellé... ce n'est pas encore fini.",
						"spanish": "...La profecía de la tablilla era cierta. Lo que fue sellado... aún no ha terminado.",
						"vietnamese": "...Lời tiên tri trên tấm bia đã đúng. Thứ bị phong ấn... vẫn chưa kết thúc.",
						"thai": "...คำทำนายบนศิลาจารึกเป็นจริง สิ่งที่ถูกผนึก... ยังไม่จบลง",
						"hindi": "...शिला पर लिखी भविष्यवाणी सच थी। जो सील किया गया था... वह अभी खत्म नहीं हुआ है।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "바람이 다시 속삭였다. '엘도리아'의 진짜 슬픔이 가까워졌다.",
						"english": "The wind whispered again. The true sorrow of 'Eldoria' is drawing near.",
						"japanese": "風が再び囁いた。『エルドリア』の真の悲しみが近づいている。",
						"chinese": "风再次低语道。『埃尔多利亚』真正的悲伤即将来临。",
						"french": "Le vent a de nouveau murmuré. La vraie tristesse d'« Eldoria » approche.",
						"spanish": "El viento volvió a susurrar. La verdadera tristeza de 'Eldoria' se acerca.",
						"vietnamese": "Gió lại thì thầm. Nỗi buồn thực sự của 'Eldoria' đang đến gần.",
						"thai": "สายลมกระซิบอีกครั้ง ความโศกเศร้าที่แท้จริงของ 'เอลโดเรีย' กำลังใกล้เข้ามา",
						"hindi": "हवा ने फिर फुसफुसाया। 'एल्डورिया' का असली दुख करीब आ गया है।"
					},
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "유적의 가장 깊은 곳. 거대한 존재가 앞을 가로막았다.",
						"english": "In the deepest part of the ruins. A colossal presence blocked the way.",
						"japanese": "遺跡の最深部。巨大な存在が道を塞いだ。",
						"chinese": "遗迹的最深处。一个巨大的存在挡住了去路。",
						"french": "Dans la partie la plus profonde des ruines. Une présence colossale barra le chemin.",
						"spanish": "En lo más profundo de las ruinas. Una presencia colosal bloqueó el paso.",
						"vietnamese": "Ở nơi sâu nhất của di tích. Một sự hiện diện khổng lồ đã chặn đường.",
						"thai": "ในส่วนที่ลึกที่สุดของซากปรักหักพัง การปรากฏตัวอันยิ่งใหญ่ขวางทางไว้",
						"hindi": "खंडहरों के सबसे गहरे हिस्से में। एक विशाल उपस्थिति ने रास्ता रोक दिया।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "어리석은 자들. 진실은 너희를 구할 수 없다.",
						"english": "Fools. The truth cannot save you.",
						"japanese": "愚か者め。真実はお前たちを救えぬ。",
						"chinese": "愚蠢的家伙。真相无法拯救你们。",
						"french": "Fous. La vérité ne peut pas vous sauver.",
						"spanish": "Necios. La verdad no puede salvaros.",
						"vietnamese": "Lũ ngốc. Sự thật không thể cứu rỗi các ngươi.",
						"thai": "พวกโง่ ความจริงไม่อาจช่วยเจ้าได้",
						"hindi": "मूर्खों। सच्चाई तुम्हें बचा नहीं सकती।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "무엇이 봉인되어 있는지, 우리가 알아낼 거야.",
						"english": "We will find out what is sealed away.",
						"japanese": "何が封印されているのか、我々が突き止める。",
						"chinese": "我们会查明封印着什么。",
						"french": "Nous découvrirons ce qui est scellé.",
						"spanish": "Descubriremos qué está sellado.",
						"vietnamese": "Chúng ta sẽ tìm ra những gì đã được phong ấn.",
						"thai": "เราจะค้นหาว่ามีอะไรถูกผนึกไว้",
						"hindi": "हम पता लगाएंगे कि क्या सील किया गया है।"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "기억의 파편 속으로 사라져라.",
						"english": "Vanish into the fragments of memory.",
						"japanese": "記憶の破片の中へ消え去れ。",
						"chinese": "消失在记忆的碎片中吧。",
						"french": "Disparaissez dans les fragments de mémoire.",
						"spanish": "Desapareced en los fragmentos de la memoria.",
						"vietnamese": "Hãy biến mất vào những mảnh ký ức.",
						"thai": "จงหายไปในเศษเสี้ยวแห่งความทรงจำ",
						"hindi": "स्मृति के टुकड़ों में गायब हो जाओ।"
					},
					"emotion": "angry"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"숲 가장 깊은 곳, 고대의 시간이 멈춘 유적.",
			"석판엔 잊혀진 역병과 봉인이 새겨져 있었다.",
			"바람은 속삭였다. 희생, 봉인, 잊혀진…",
			"이곳의 모든 것은, 거대한 존재의 기억이었다.",
			"그리고 그 기억은, 불길하게 일렁였다."
		],
		"english": [
			"Deepest in the forest, ruins where ancient time stands still.",
			"The stone tablets bore carvings of a forgotten plague and a seal.",
			"The wind whispered: sacrifice, seal, forgotten…",
			"Everything here was the memory of a colossal entity.",
			"And that memory, ominously flickered."
		],
		"japanese": [
			"森の最奥、古の時が止まった遺跡。",
			"石板には忘れられた疫病と封印が刻まれていた。",
			"風が囁いた。犠牲、封印、忘れられた…",
			"ここにある全ては、巨大な存在の記憶だった。",
			"そしてその記憶は、不吉に揺らめいた。"
		],
		"chinese": [
			"森林最深处，古老时间停滞的遗迹。",
			"石板上刻着被遗忘的瘟疫和封印。",
			"风在低语：牺牲，封印，被遗忘的…",
			"这里的一切，都是一个巨大存在的记忆。",
			"而那记忆，不祥地闪烁着。"
		],
		"french": [
			"Au plus profond de la forêt, des ruines où le temps antique est figé.",
			"Les dalles de pierre portaient des gravures d'une peste oubliée et d'un sceau.",
			"Le vent murmurait : sacrifice, sceau, oublié…",
			"Tout ici était la mémoire d'une entité colossale.",
			"Et ce souvenir, vacillait de manière sinistre."
		],
		"spanish": [
			"En lo más profundo del bosque, ruinas donde el tiempo ancestral se detuvo.",
			"Las losas de piedra tenían grabados de una plaga olvidada y un sello.",
			"El viento susurraba: sacrificio, sello, olvidado…",
			"Todo aquí era la memoria de una entidad colosal.",
			"Y esa memoria, parpadeaba ominosamente."
		],
		"vietnamese": [
			"Sâu nhất trong rừng, tàn tích nơi thời gian cổ đại đứng yên.",
			"Trên phiến đá khắc ghi dịch bệnh bị lãng quên và phong ấn.",
			"Gió thì thầm: hy sinh, phong ấn, bị lãng quên…",
			"Mọi thứ ở đây, là ký ức của một thực thể khổng lồ.",
			"Và ký ức đó, bập bùng một cách đáng ngại."
		],
		"thai": [
			"ส่วนที่ลึกที่สุดของป่า ซากปรักหักพังที่กาลเวลาโบราณหยุดนิ่ง",
			"บนแผ่นหินสลักไว้ซึ่งโรคระบาดที่ถูกลืมเลือนและผนึก",
			"ลมกระซิบ: การเสียสละ, การผนึก, สิ่งที่ถูกลืมเลือน...",
			"ทุกสิ่งในที่นี้คือความทรงจำของสิ่งมีชีวิตขนาดยักษ์",
			"และความทรงจำนั้นก็สั่นไหวอย่างลางร้าย"
		],
		"hindi": [
			"जंगल के सबसे गहरे में, खंडहर जहाँ प्राचीन समय ठहरा हुआ है।",
			"पत्थर की पट्टियों पर एक भूली हुई महामारी और एक मुहर खुदी हुई थी।",
			"हवा फुसफुसाई: बलिदान, मुहर, भूला हुआ...",
			"यहाँ सब कुछ एक विशाल सत्ता की स्मृति थी।",
			"और वह स्मृति, अशुभ रूप से जगमगा रही थी।"
		]
	}
} as const;
