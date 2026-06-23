export const scenario_desert_scarabaeus_14_04 = {
	"scenario_id": "desert_scarabaeus_14_04",
	"order": 4,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"dune": {
			"id": "mon_fc976b75-f009-4bf2-b660-a3053c95d668",
			"name": {
				"korean": "듄",
				"english": "Dune",
				"japanese": "デューン",
				"chinese": "沙丘",
				"french": "Dune",
				"spanish": "Dune",
				"vietnamese": "Dune",
				"thai": "ดูน",
				"hindi": "ड्यून"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/7568ec11-0329-44b4-740a-71b25ef62400/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/ba7095b5-0d99-40bd-1155-b57701c00f00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "시간이 뒤섞인 공간, 모래바람마저 과거의 환영 같았다.",
						"english": "A space where time was jumbled, even the sandstorm felt like a ghost of the past.",
						"japanese": "時間が入り混じる空間、砂嵐さえ過去の幻影のようだった。",
						"chinese": "一个时间混杂的空间，连沙尘暴都像是过去的幻影。",
						"french": "Un espace où le temps était mêlé, même la tempête de sable semblait être un fantôme du passé.",
						"spanish": "Un espacio donde el tiempo se mezclaba, incluso la tormenta de arena parecía un fantasma del pasado.",
						"vietnamese": "Một không gian thời gian bị xáo trộn, ngay cả bão cát cũng như ảo ảnh của quá khứ.",
						"thai": "สถานที่ที่กาลเวลาปะปนกัน แม้แต่พายุทรายก็ยังรู้สึกเหมือนเป็นภาพหลอนในอดีต",
						"hindi": "एक ऐसी जगह जहाँ समय गड़बड़ा गया था, यहाँ तक कि रेतीला तूफ़ान भी अतीत के भूत जैसा लग रहा था।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…여긴 또 어디야.",
						"english": "…Where am I now.",
						"japanese": "…ここは一体どこだ。",
						"chinese": "……这里又是哪里。",
						"french": "…Où suis-je maintenant.",
						"spanish": "…¿Dónde estoy ahora?",
						"vietnamese": "…Đây là đâu nữa.",
						"thai": "…ที่นี่ที่ไหนกันอีกแล้วเนี่ย",
						"hindi": "…अब मैं कहाँ हूँ।"
					}
				},
				{
					"type": "direction",
					"spot": [
						5,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "dune"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "듄이 침묵하며 서 있었다. 희미한 그림자처럼.",
						"english": "Dune stood in silence. Like a faint shadow.",
						"japanese": "デューンは黙って立っていた。かすかな影のように。",
						"chinese": "沙丘静默地伫立着。像一道模糊的影子。",
						"french": "Dune se tenait en silence. Comme une ombre ténue.",
						"spanish": "Dune permanecía en silencio. Como una sombra tenue.",
						"vietnamese": "Dune đứng im lặng. Như một bóng hình mờ nhạt.",
						"thai": "ดูนยืนนิ่งเงียบราวกับเงาจางๆ",
						"hindi": "ड्यून चुपचाप खड़ा था। एक धुंधली परछाई की तरह।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "뭘 말하고 싶은 건데?",
						"english": "What do you want to say?",
						"japanese": "何を言いたいんだ？",
						"chinese": "你想说什么？",
						"french": "Que veux-tu dire ?",
						"spanish": "¿Qué quieres decir?",
						"vietnamese": "Ngươi muốn nói gì?",
						"thai": "คุณอยากจะพูดอะไร?",
						"hindi": "आप क्या कहना चाहते हैं?"
					}
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "아무 소리도 안 들려.",
						"english": "I can't hear anything.",
						"japanese": "何も聞こえない。",
						"chinese": "什么都听不到。",
						"french": "Je n'entends rien.",
						"spanish": "No oigo nada.",
						"vietnamese": "Tôi không nghe thấy gì cả.",
						"thai": "ฉันไม่ได้ยินอะไรเลย",
						"hindi": "मुझे कुछ भी सुनाई नहीं दे रहा है।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"speaker": "dune",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "듄은 말없이 한 곳을 응시하고 있었다. 텅 빈 사막 한가운데.",
						"english": "Dune was silently staring at one spot. In the middle of an empty desert.",
						"japanese": "デューンは黙って一点を見つめていた。텅 빈 사막 한가운데で。",
						"chinese": "沙丘默默地凝视着一个地方。在空旷的沙漠中央。",
						"french": "Dune fixait silencieusement un point. Au milieu d'un désert vide.",
						"spanish": "Dune miraba fijamente un punto en silencio. En medio de un desierto vacío.",
						"vietnamese": "Dune lặng lẽ nhìn chằm chằm vào một điểm. Giữa một sa mạc trống trải.",
						"thai": "ดูนจ้องมองจุดหนึ่งอย่างเงียบงัน กลางทะเลทรายที่ว่างเปล่า",
						"hindi": "ड्यून चुपचाप एक ही जगह घूर रहा था। एक खाली रेगिस्तान के बीच में।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "저기 뭐가 있어?",
						"english": "What's that over there?",
						"japanese": "あれは何？",
						"chinese": "那是什么？",
						"french": "Qu'est-ce qu'il y a là-bas ?",
						"spanish": "¿Qué hay ahí?",
						"vietnamese": "Cái gì đằng kia vậy?",
						"thai": "มีอะไรอยู่ตรงนั้นน่ะ?",
						"hindi": "वहाँ क्या है?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_2",
					"content": {
						"korean": "낡은 검이… 사막에 박혀있네.",
						"english": "An old sword… stuck in the desert.",
						"japanese": "古い剣が…砂漠に刺さっている。",
						"chinese": "一把旧剑…插在沙漠里。",
						"french": "Une vieille épée… plantée dans le désert.",
						"spanish": "Una espada vieja… clavada en el desierto.",
						"vietnamese": "Một thanh kiếm cũ… cắm trong sa mạc.",
						"thai": "ดาบเก่าๆ เล่มหนึ่ง… ปักอยู่ในทะเลทราย",
						"hindi": "एक पुरानी तलवार… रेगिस्तान में धँसी हुई है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "dune",
					"content": {
						"korean": "…고통…",
						"english": "…Pain…",
						"japanese": "…苦痛…",
						"chinese": "……痛苦……",
						"french": "…Douleur…",
						"spanish": "…Dolor…",
						"vietnamese": "…Đau đớn…",
						"thai": "…ความเจ็บปวด…",
						"hindi": "…दर्द…"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "고통? 뭐가 고통스러워?",
						"english": "Pain? What's painful?",
						"japanese": "苦痛？何が苦痛なの？",
						"chinese": "痛苦？什么痛苦？",
						"french": "Douleur ? Qu'est-ce qui est douloureux ?",
						"spanish": "¿Dolor? ¿Qué es doloroso?",
						"vietnamese": "Đau đớn? Cái gì đau đớn vậy?",
						"thai": "ความเจ็บปวด? อะไรคือความเจ็บปวด?",
						"hindi": "दर्द? क्या दर्दनाक है?"
					}
				},
				{
					"content": {
						"korean": "듄은 다시 침묵했다. 그저 슬픈 시선만 남긴 채.",
						"english": "Dune fell silent again, leaving only a sad gaze.",
						"japanese": "デューンは再び沈黙した。ただ悲しい視線を残して。",
						"chinese": "沙丘再次陷入沉默。只留下一个悲伤的眼神。",
						"french": "Dune se tut à nouveau, ne laissant qu'un regard triste.",
						"spanish": "Dune volvió a guardar silencio, dejando solo una mirada triste.",
						"vietnamese": "Dune lại im lặng, chỉ để lại ánh mắt buồn bã.",
						"thai": "ดูนเงียบไปอีกครั้ง ทิ้งไว้เพียงสายตาเศร้าๆ",
						"hindi": "डून फिर से शांत हो गया, बस एक उदास नज़र छोड़ गया।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						2,
						2
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "dune"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이 검, 주인이 있었던 건가?",
						"english": "Did this sword have an owner?",
						"japanese": "この剣、持ち主がいたのか？",
						"chinese": "这把剑，有主人吗？",
						"french": "Cette épée, avait-elle un propriétaire ?",
						"spanish": "¿Tuvo dueño esta espada?",
						"vietnamese": "Thanh kiếm này có chủ nhân sao?",
						"thai": "ดาบเล่มนี้มีเจ้าของเหรอ?",
						"hindi": "क्या इस तलवार का कोई मालिक था?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "dune",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…제발…",
						"english": "…Please…",
						"japanese": "…どうか…",
						"chinese": "……拜托了……",
						"french": "…S'il te plaît…",
						"spanish": "…Por favor…",
						"vietnamese": "…Làm ơn…",
						"thai": "…ได้โปรด…",
						"hindi": "…कृपया…"
					}
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "무슨 소리야, 듄?",
						"english": "What's that sound, Dune?",
						"japanese": "どういう音だ、デューン？",
						"chinese": "什么声音，沙丘？",
						"french": "Quel est ce bruit, Dune ?",
						"spanish": "¿Qué es ese sonido, Dune?",
						"vietnamese": "Âm thanh gì vậy, Dune?",
						"thai": "เสียงอะไรน่ะ ดูน?",
						"hindi": "वह क्या आवाज़ है, डून?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "마치… 누군가 간절히 부탁하는 것 같아.",
						"english": "It's like… someone is pleading desperately.",
						"japanese": "まるで…誰かが必死に頼んでいるみたいだ。",
						"chinese": "就好像……有人在拼命恳求。",
						"french": "C'est comme si… quelqu'un suppliait désespérément.",
						"spanish": "Es como si… alguien estuviera rogando desesperadamente.",
						"vietnamese": "Cứ như… có ai đó đang van xin thiết tha.",
						"thai": "เหมือน…มีใครบางคนกำลังร้องขออย่างสิ้นหวัง",
						"hindi": "ऐसा लगता है… जैसे कोई बेतहाशा गुहार लगा रहा है।"
					},
					"speaker": "character_3"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…멈춰줘… 날…",
						"english": "…Stop it… me…",
						"japanese": "…止めて…私を…",
						"chinese": "……停下……我……",
						"french": "…Arrête…-moi…",
						"spanish": "…Detenlo… a mí…",
						"vietnamese": "…Dừng lại đi… tôi…",
						"thai": "…หยุดทีเถอะ… ฉัน…",
						"hindi": "…रोक दो… मुझे…"
					},
					"speaker": "dune"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "누가? 누가 너를 멈춰달라는 거야?",
						"english": "Who? Who wants you stopped?",
						"japanese": "誰が？誰があなたを止めてほしいと？",
						"chinese": "谁？谁要你停下来？",
						"french": "Qui ? Qui veut t'arrêter ?",
						"spanish": "¿Quién? ¿Quién quiere que te detengan?",
						"vietnamese": "Ai? Ai muốn ngươi dừng lại?",
						"thai": "ใคร? ใครอยากให้เจ้าหยุด?",
						"hindi": "कौन? कौन तुम्हें रोकना चाहता है?"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "듄의 흐릿한 형상이 일렁였다. 과거의 절규가 울리는 듯.",
						"english": "Dune's blurry form flickered. Past screams seemed to echo.",
						"japanese": "デューンのぼやけた姿が揺らめいた。過去の絶叫が響き渡るようだ。",
						"chinese": "沙丘的模糊身影晃动着。过去的尖叫声仿佛在回荡。",
						"french": "La forme floue de Dune vacilla. Les cris du passé semblaient résonner.",
						"spanish": "La forma borrosa de Dune parpadeó. Los gritos del pasado parecían resonar.",
						"vietnamese": "Hình dạng mờ ảo của Dune chập chờn. Những tiếng kêu thét từ quá khứ dường như đang vọng lại.",
						"thai": "รูปร่างเลือนรางของดูนกระเพื่อม เสียงกรีดร้องจากอดีตราวกับสะท้อนก้อง",
						"hindi": "डून का धुंधला रूप झिलमिलाया। अतीत की चीखें गूँज रही थीं।"
					},
					"speaker": "narrator"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						4,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "dune"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "낡은 검 주변에서, 시간의 장막이 찢어졌다.",
						"english": "Around the old sword, the veil of time was torn.",
						"japanese": "古びた剣の周りで、時間の帳が引き裂かれた。",
						"chinese": "旧剑周围，时间的帷幕被撕裂了。",
						"french": "Autour de la vieille épée, le voile du temps fut déchiré.",
						"spanish": "Alrededor de la espada antigua, el velo del tiempo se rasgó.",
						"vietnamese": "Xung quanh thanh kiếm cũ, bức màn thời gian bị xé toạc.",
						"thai": "รอบดาบเก่าแก่ ม่านแห่งกาลเวลาถูกฉีกขาด",
						"hindi": "पुरानी तलवार के चारों ओर, समय का पर्दा फट गया।"
					},
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "(환영 속에서) 검의 달인: “제발… 날 멈춰줘!”",
						"english": "(In a vision) Sword Master: “Please… stop me!”",
						"japanese": "（幻影の中で）剣の達人：「頼む…私を止めてくれ！」",
						"chinese": "（幻象中）剑术大师：“求求你…阻止我！”",
						"french": "(Dans une vision) Maître d'épée : « S'il te plaît… arrête-moi ! »",
						"spanish": "(En una visión) Maestro de la espada: “¡Por favor… deténganme!”",
						"vietnamese": "(Trong ảo ảnh) Kiếm sư: \"Làm ơn... hãy ngăn ta lại!\"",
						"thai": "(ในนิมิต) ปรมาจารย์ดาบ: \"ได้โปรด...หยุดข้าที!\"",
						"hindi": "(एक दृष्टि में) तलवार का स्वामी: “कृपया… मुझे रोक लो!”"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이 목소리는… 환영인가?",
						"english": "This voice… is it a vision?",
						"japanese": "この声は…幻影なのか？",
						"chinese": "这个声音…是幻象吗？",
						"french": "Cette voix… est-ce une vision ?",
						"spanish": "Esta voz… ¿es una visión?",
						"vietnamese": "Giọng nói này... là ảo ảnh sao?",
						"thai": "เสียงนี้... เป็นนิมิตหรือ?",
						"hindi": "यह आवाज़… क्या यह एक दृष्टि है?"
					},
					"speaker": "character_2"
				},
				{
					"content": {
						"korean": "고통스러워 보여. 검의 달인이 뭘…",
						"english": "He seems in pain. What is the Sword Master…",
						"japanese": "苦しそうだ。剣の達人が何を…",
						"chinese": "他看起来很痛苦。剑术大师到底想…？",
						"french": "Il semble souffrir. Le Maître d'épée, que…",
						"spanish": "Parece sufrir. ¿Qué le pasa al Maestro de la espada…?",
						"vietnamese": "Trông anh ấy đau khổ quá. Kiếm sư đang...",
						"thai": "เขาดูเจ็บปวด ปรมาจารย์ดาบ... อะไรกัน",
						"hindi": "वह दर्द में दिख रहा है। तलवार का स्वामी क्या…"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_1"
				},
				{
					"content": {
						"korean": "…나를… 멈춰줘…",
						"english": "…Stop… me…",
						"japanese": "…私を…止めてくれ…",
						"chinese": "…阻止…我…",
						"french": "…Arrêtez… moi…",
						"spanish": "…Deténganme…",
						"vietnamese": "...Ngăn... ta lại...",
						"thai": "...หยุด... ข้าที...",
						"hindi": "…मुझे… रोक लो…"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "dune"
				},
				{
					"content": {
						"korean": "듄이… 과거의 비극을 보여주는 건가?",
						"english": "Is Dune… showing me a past tragedy?",
						"japanese": "デューンが…過去の悲劇を見せているのか？",
						"chinese": "沙丘…在向我展示过去的悲剧吗？",
						"french": "Est-ce que Dune… me montre une tragédie passée ?",
						"spanish": "¿Dune… me está mostrando una tragedia del pasado?",
						"vietnamese": "Có phải Dune... đang cho ta thấy một bi kịch trong quá khứ?",
						"thai": "ดูน... กำลังแสดงโศกนาฏกรรมในอดีตให้ดูหรือ?",
						"hindi": "क्या डून… अतीत की त्रासदी दिखा रहा है?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "과거의 절규가 현재를 찢고 들어왔다. 그의 비극이 점차 모습을 드러내고 있었다.",
						"english": "Screams from the past tore into the present. His tragedy was slowly revealing itself.",
						"japanese": "過去の絶叫が現在を切り裂いて入り込んできた。彼の悲劇が徐々に姿を現しつつあった。",
						"chinese": "过去的尖叫声撕裂了现在。他的悲剧正逐渐显露。",
						"french": "Les cris du passé déchirèrent le présent. Sa tragédie se révélait peu à peu.",
						"spanish": "Los gritos del pasado irrumpieron en el presente. Su tragedia se estaba revelando gradualmente.",
						"vietnamese": "Những tiếng kêu thét từ quá khứ xé toạc hiện tại. Bi kịch của anh ta dần lộ rõ.",
						"thai": "เสียงกรีดร้องจากอดีตฉีกกระชากปัจจุบัน โศกนาฏกรรมของเขาค่อยๆ เผยโฉม",
						"hindi": "अतीत की चीखें वर्तमान को चीरती हुई आईं। उसकी त्रासदी धीरे-धीरे सामने आ रही थी।"
					},
					"speaker": "narrator"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…멈춰봤자… 또 다른 내가… 나타날 뿐.",
						"english": "...Even if you stop me... another me... will just appear.",
						"japanese": "…止めても… また別の私が… 現れるだけだ。",
						"chinese": "…就算阻止了… 另一个我… 也只会再次出现。",
						"french": "...Même si vous m'arrêtez... un autre moi... apparaîtra.",
						"spanish": "...Aunque me detengáis... otro yo... simplemente aparecerá.",
						"vietnamese": "...Dù có ngăn chặn... một ta khác... sẽ lại xuất hiện thôi.",
						"thai": "...ต่อให้หยุดข้า... อีกตัวตนหนึ่งของข้า... ก็จะปรากฏขึ้นมาเท่านั้น.",
						"hindi": "...भले ही तुम मुझे रोक लो... मेरा दूसरा रूप... फिर से प्रकट होगा।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리야!",
						"english": "What are you talking about!",
						"japanese": "何を言っているんだ！",
						"chinese": "你在说什么！",
						"french": "Qu'est-ce que tu racontes !",
						"spanish": "¡¿Qué estás diciendo?!",
						"vietnamese": "Ngươi nói cái gì vậy!",
						"thai": "พูดอะไรน่ะ!",
						"hindi": "यह क्या बकवास है!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "너희가… 진정으로… 끝낼 수 있을 것 같아?",
						"english": "Do you... truly... think you can end it?",
						"japanese": "お前たちが… 本当に… 終わらせられるとでも？",
						"chinese": "你们… 真觉得… 能终结这一切吗？",
						"french": "Vous croyez... vraiment... pouvoir y mettre fin ?",
						"spanish": "¿De verdad... creéis... que podéis acabar con esto?",
						"vietnamese": "Các ngươi... thật sự... nghĩ có thể kết thúc sao?",
						"thai": "พวกเจ้า... คิดว่า... จะจบมันได้จริงหรือ?",
						"hindi": "क्या तुम्हें... सच में... लगता है कि तुम इसे खत्म कर सकते हो?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "망령 같은 소리 하지 마!",
						"english": "Stop talking like a phantom!",
						"japanese": "亡霊のようなこと言うな！",
						"chinese": "别说这些鬼话！",
						"french": "Ne dis pas des choses de spectre !",
						"spanish": "¡No digas tonterías de espectro!",
						"vietnamese": "Đừng nói mấy lời ma quỷ đó nữa!",
						"thai": "อย่าพูดจาเหมือนผีสางเลย!",
						"hindi": "भूतिया बातें मत करो!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_1"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…결국… 너희도… 그 검처럼…",
						"english": "...In the end... you too... like that sword...",
						"japanese": "「…結局…お前たちも…あの剣のように…」",
						"chinese": "……最终……你们也……像那把剑一样……",
						"french": "...Au final... vous aussi... comme cette épée...",
						"spanish": "...Al final... vosotros también... como esa espada...",
						"vietnamese": "...Cuối cùng... các ngươi cũng... giống như thanh kiếm đó...",
						"thai": "...สุดท้าย... พวกเจ้าก็... เหมือนดาบนั่น...",
						"hindi": "...अंत में... तुम भी... उस तलवार की तरह..."
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "정체 모를 보스는 모래가 되어 사라졌다. 그러나 그 말은 새로운 의문만을 남겼다.",
						"english": "The unknown boss turned into sand and vanished. But its words only left new questions.",
						"japanese": "「正体不明のボスは砂となって消え去った。しかし、その言葉は新たな疑問だけを残した。」",
						"chinese": "身份不明的Boss化为沙尘消失了。然而，它的话语只留下了新的疑问。",
						"french": "Le boss inconnu se transforma en sable et disparut. Mais ses paroles ne firent que laisser de nouvelles questions.",
						"spanish": "El jefe desconocido se convirtió en arena y desapareció. Pero sus palabras solo dejaron nuevas preguntas.",
						"vietnamese": "Con trùm vô danh hóa thành cát và biến mất. Nhưng những lời của nó chỉ để lại những câu hỏi mới.",
						"thai": "บอสปริศนากลายเป็นทรายและหายไป แต่คำพูดของมันกลับทิ้งไว้เพียงปริศนาใหม่",
						"hindi": "अज्ञात बॉस रेत में बदल गया और गायब हो गया। लेकिन उसके शब्द केवल नए प्रश्न छोड़ गए।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "또 다른 나?… 도대체 뭘 말하는 거지?",
						"english": "Another me?... What on earth is it talking about?",
						"japanese": "「もう一人の私？…一体何を言っているんだ？」",
						"chinese": "另一个我？……到底在说什么？",
						"french": "Un autre moi ?... De quoi parle-t-il donc ?",
						"spanish": "¿Otro yo?... ¿De qué demonios está hablando?",
						"vietnamese": "Một cái tôi khác?... Rốt cuộc là nó đang nói về điều gì?",
						"thai": "อีกตัวตนหนึ่ง?... นี่มันพูดถึงอะไรกันแน่?",
						"hindi": "कोई और मैं?... आखिर ये क्या बात कर रहा है?"
					}
				},
				{
					"content": {
						"korean": "비틀린 진실의 조각들이, 주인공의 발밑에서 흔들렸다.",
						"english": "Fragments of twisted truth trembled beneath the protagonist's feet.",
						"japanese": "「ねじれた真実の断片が、主人公の足元で揺らいだ。」",
						"chinese": "扭曲的真相碎片，在主角脚下摇曳。",
						"french": "Des fragments de vérité tordue vacillaient sous les pieds du protagoniste.",
						"spanish": "Fragmentos de verdad retorcida temblaban bajo los pies del protagonista.",
						"vietnamese": "Những mảnh ghép sự thật méo mó, rung chuyển dưới chân nhân vật chính.",
						"thai": "เศษเสี้ยวของความจริงที่บิดเบี้ยว สั่นคลอนอยู่ใต้ฝ่าเท้าของตัวเอก",
						"hindi": "मुड़ी हुई सच्चाई के टुकड़े, नायक के पैरों के नीचे काँप रहे थे।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…결국… 너희도… 나약한 절규에… 불과해.",
						"english": "...In the end... you too... are nothing but weak cries.",
						"japanese": "「…結局…お前たちも…弱々しい叫びに…過ぎない。」",
						"chinese": "……最终……你们也……不过是软弱的哀嚎。",
						"french": "...Au final... vous aussi... n'êtes que de faibles hurlements.",
						"spanish": "...Al final... vosotros también... no sois más que gritos débiles.",
						"vietnamese": "...Cuối cùng... các ngươi cũng... chỉ là những tiếng kêu yếu ớt.",
						"thai": "...สุดท้าย... พวกเจ้าก็... ไม่ต่างจากเสียงร้องอันอ่อนแอ...",
						"hindi": "...अंत में... तुम भी... कमजोर चीखों से ज़्यादा कुछ नहीं।"
					}
				},
				{
					"content": {
						"korean": "…아직… 끝나지 않았어!",
						"english": "...It's not... over yet!",
						"japanese": "「…まだ…終わってない！」",
						"chinese": "……还没……结束！",
						"french": "...Ce n'est pas... encore fini !",
						"spanish": "...¡Todavía... no ha terminado!",
						"vietnamese": "...Vẫn... chưa kết thúc đâu!",
						"thai": "...ยัง... ไม่จบ!",
						"hindi": "...अभी... खत्म नहीं हुआ!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "사막의 저주가 그들의 의지를 꺾으려 했다. 하지만 아직, 포기할 수 없었다.",
						"english": "The desert's curse sought to break their will. But still, they couldn't give up.",
						"japanese": "「砂漠の呪いが彼らの意志を挫こうとした。しかし、まだ、諦めることはできなかった。」",
						"chinese": "沙漠的诅咒试图摧毁他们的意志。但他们仍无法放弃。",
						"french": "La malédiction du désert cherchait à briser leur volonté. But ils ne pouvaient toujours pas abandonner.",
						"spanish": "La maldición del desierto intentó quebrar su voluntad. Pero aún así, no podían rendirse.",
						"vietnamese": "Lời nguyền của sa mạc cố gắng bẻ gãy ý chí của họ. Nhưng vẫn, họ không thể bỏ cuộc.",
						"thai": "คำสาปแห่งทะเลทรายพยายามจะหักล้างเจตจำนงของพวกเขา แต่พวกเขาก็ยังคงไม่ยอมแพ้",
						"hindi": "रेगिस्तान का अभिशाप उनकी इच्छा को तोड़ने की कोशिश कर रहा था। लेकिन फिर भी, वे हार नहीं मान सकते थे।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "dune"
				},
				{
					"speaker": "dune",
					"content": {
						"korean": "…저게…",
						"english": "…That…",
						"japanese": "…あれは…",
						"chinese": "…那是什么…",
						"french": "…Ça…",
						"spanish": "…Eso…",
						"vietnamese": "...Cái đó...",
						"thai": "...นั่น...",
						"hindi": "…वह…"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 사막의 열기 속에서 일그러지며 나타났다.",
						"english": "A colossal shadow distorted and emerged from the desert heat.",
						"japanese": "巨大な影が砂漠の熱気の中で歪みながら現れた。",
						"chinese": "巨大的身影在沙漠的热浪中扭曲着出现。",
						"french": "Une ombre colossale apparut, distordue par la chaleur du désert.",
						"spanish": "Una sombra colosal se distorsionó y emergió del calor del desierto.",
						"vietnamese": "Một cái bóng khổng lồ méo mó xuất hiện từ cái nóng sa mạc.",
						"thai": "เงาขนาดมหึมาบิดเบี้ยวและปรากฏขึ้นจากความร้อนระอุของทะเลทราย",
						"hindi": "रेगिस्तान की गर्मी में एक विशालकाय परछाई विकृत होकर प्रकट हुई।"
					},
					"speaker": "narrator"
				},
				{
					"direction": "down",
					"speaker": "dune",
					"type": "direction",
					"action": "exit",
					"duration_ms": 400
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…왔군. 절규하는 자들이.",
						"english": "...They've arrived. The screamers.",
						"japanese": "…来たな。絶叫する者どもが。",
						"chinese": "…来了。那些尖叫者。",
						"french": "...Ils sont arrivés. Ceux qui hurlent.",
						"spanish": "...Han llegado. Los que gritan.",
						"vietnamese": "...Chúng đã đến. Những kẻ kêu gào.",
						"thai": "...พวกมันมาแล้ว. พวกที่กรีดร้อง.",
						"hindi": "...वे आ गए। चीखने वाले।"
					}
				},
				{
					"content": {
						"korean": "네가 이 저주의 근원인가?",
						"english": "Are you the source of this curse?",
						"japanese": "お前がこの呪いの根源なのか？",
						"chinese": "你是这个诅咒的根源吗？",
						"french": "Es-tu la source de cette malédiction ?",
						"spanish": "¿Eres la fuente de esta maldición?",
						"vietnamese": "Ngươi là nguồn gốc của lời nguyền này sao?",
						"thai": "เจ้าคือต้นตอของคำสาปนี้หรือ?",
						"hindi": "क्या तुम इस अभिशाप का स्रोत हो?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "근원? 난 그저… 끝을 보여줄 뿐.",
						"english": "Source? I merely... show the end.",
						"japanese": "根源？ 私はただ… 終わりを見せるだけだ。",
						"chinese": "根源？ 我只是… 展示终结。",
						"french": "Source ? Je ne fais que... montrer la fin.",
						"spanish": "¿Fuente? Yo solo... muestro el final.",
						"vietnamese": "Nguồn gốc? Ta chỉ... cho thấy sự kết thúc.",
						"thai": "ต้นตอ? ข้าแค่... แสดงจุดจบเท่านั้น",
						"hindi": "स्रोत? मैं तो बस... अंत दिखाता हूँ।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "말도 안 돼. 우리가 멈출 거야.",
						"english": "Impossible. We'll stop you.",
						"japanese": "馬鹿な。我々が止める。",
						"chinese": "不可能。我们会阻止你。",
						"french": "C'est absurde. Nous t'arrêterons.",
						"spanish": "Imposible. Te detendremos.",
						"vietnamese": "Vô lý. Chúng ta sẽ ngăn chặn.",
						"thai": "เหลวไหล. เราจะหยุดมัน.",
						"hindi": "नामुमकिन। हम तुम्हें रोकेंगे।"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "멈춰? …어리석은 것들.",
						"english": "Stop? ...Fools.",
						"japanese": "止める？ …愚かな者どもめ。",
						"chinese": "阻止？ …愚蠢的东西。",
						"french": "Arrêter ? ...Idiots.",
						"spanish": "¿Detener? ...Necios.",
						"vietnamese": "Ngăn chặn ư? ...Những kẻ ngu xuẩn.",
						"thai": "หยุด? ...พวกโง่เง่า",
						"hindi": "रोकोगे? ...मूर्ख।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"시간은 부서지고, 현실은 환영이 된다.",
			"사막은 모든 것을 삼키고, 모든 것을 뒤섞었다.",
			"이 끝없는 고통 속에서, 한 검의 절규가 들려왔다.",
			"제발, 날 멈춰줘… 과거의 목소리가 주인공을 이끈다."
		],
		"english": [
			"Time shatters, reality becomes an illusion.",
			"The desert swallowed everything, mixing all together.",
			"In this endless torment, the scream of a sword was heard.",
			"Please, stop me… a voice from the past guides the protagonist."
		],
		"japanese": [
			"時は砕け、現実は幻となる。",
			"砂漠はすべてを飲み込み、すべてを混ぜ合わせた。",
			"この終わりのない苦痛の中で、一つの剣の叫びが聞こえた。",
			"どうか、私を止めてくれ…過去の声が主人公を導く。"
		],
		"chinese": [
			"时间破碎，现实成为幻影。",
			"沙漠吞噬了一切，将其混为一谈。",
			"在这无尽的折磨中，传来一声剑的哀嚎。",
			"拜托，阻止我……过去的声音指引着主人公。"
		],
		"french": [
			"Le temps se brise, la réalité devient une illusion.",
			"Le désert a tout englouti, mélangeant tout.",
			"Dans ce tourment sans fin, le cri d'une épée se fit entendre.",
			"S'il te plaît, arrête-moi... une voix du passé guide le protagoniste."
		],
		"spanish": [
			"El tiempo se hace pedazos, la realidad se convierte en una ilusión.",
			"El desierto lo devoró todo, mezclándolo todo.",
			"En este tormento sin fin, se escuchó el grito de una espada.",
			"Por favor, detenme… una voz del pasado guía al protagonista."
		],
		"vietnamese": [
			"Thời gian vỡ vụn, hiện thực hóa ảo ảnh.",
			"Sa mạc nuốt chửng mọi thứ, trộn lẫn tất cả.",
			"Trong nỗi đau khổ vô tận này, tiếng thét của một thanh kiếm đã vang lên.",
			"Làm ơn, hãy ngăn tôi lại… một giọng nói từ quá khứ dẫn lối nhân vật chính."
		],
		"thai": [
			"เวลากระจัดกระจาย ความจริงกลายเป็นภาพลวงตา",
			"ทะเลทรายกลืนกินทุกสิ่ง ผสมปนเปกันไปหมด",
			"ในการทรมานอันไม่สิ้นสุดนี้ เสียงกรีดร้องของดาบเล่มหนึ่งได้ยินขึ้น",
			"ได้โปรด หยุดฉันที… เสียงจากอดีตนำทางตัวเอก"
		],
		"hindi": [
			"समय टूट जाता है, वास्तविकता एक भ्रम बन जाती है।",
			"रेगिस्तान ने सब कुछ निगल लिया, सब कुछ मिला दिया।",
			"इस अंतहीन पीड़ा में, एक तलवार की चीख सुनाई दी।",
			"कृपया, मुझे रोक दो… अतीत की एक आवाज़ नायक का मार्गदर्शन करती है।"
		]
	}
} as const;
