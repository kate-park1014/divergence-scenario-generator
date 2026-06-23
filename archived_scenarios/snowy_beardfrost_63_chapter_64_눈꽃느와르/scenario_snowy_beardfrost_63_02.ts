export const scenario_snowy_beardfrost_63_02 = {
	"scenario_id": "snowy_beardfrost_63_02",
	"order": 2,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"finn": {
			"id": "mon_3e3930d2-c2d3-4ad0-9818-26d259edac77",
			"name": {
				"korean": "핀",
				"english": "Finn",
				"japanese": "フィン",
				"chinese": "芬恩",
				"french": "Finn",
				"spanish": "Finn",
				"vietnamese": "Finn",
				"thai": "ฟินน์",
				"hindi": "फिन"
			},
			"description": "",
			"face_image_url": "",
			"battle_sprite_url": ""
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
						"korean": "거대한 동굴 안은 따뜻한 빛으로 가득했다. 탐험대는 안도했다.",
						"english": "The massive cave was filled with warm light. The expedition team felt relieved.",
						"japanese": "巨大な洞窟内は温かい光で満ちていた。探検隊は安堵した。",
						"chinese": "巨大的洞穴里充满了温暖的光线。探险队松了口气。",
						"french": "L'énorme grotte était remplie d'une lumière chaude. L'équipe d'expédition fut soulagée.",
						"spanish": "La enorme cueva estaba llena de luz cálida. El equipo de expedición se sintió aliviado.",
						"vietnamese": "Bên trong hang động khổng lồ tràn ngập ánh sáng ấm áp. Đoàn thám hiểm thở phào nhẹ nhõm.",
						"thai": "ภายในถ้ำขนาดมหึมาเต็มไปด้วยแสงสว่างอันอบอุ่น ทีมสำรวจรู้สึกโล่งใจ",
						"hindi": "विशाल गुफा गर्म रोशनी से भरी हुई थी। अभियान दल ने राहत महसूस की।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "finn",
					"action": "enter"
				},
				{
					"speaker": "finn",
					"content": {
						"korean": "와… 여긴 천국 같아. 이제 좀 살겠네.",
						"english": "Wow... this is like heaven. Now I can finally relax.",
						"japanese": "わあ…ここは天国みたいだ。やっと一息つけるね。",
						"chinese": "哇…这里简直是天堂。终于可以好好休息了。",
						"french": "Waouh... c'est le paradis ici. Je vais enfin pouvoir me détendre.",
						"spanish": "Guau... esto es como el cielo. Por fin podré relajarme.",
						"vietnamese": "Wow... đây đúng là thiên đường. Giờ thì tôi có thể sống sót rồi.",
						"thai": "ว้าว... ที่นี่เหมือนสวรรค์เลย ในที่สุดก็ได้พักเสียที",
						"hindi": "वाह... यह स्वर्ग जैसा है। अब मैं आखिरकार आराम कर सकता हूँ।"
					},
					"emotion": "happy",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "너무 갑작스러운 환대야. 경계를 늦추지 마.",
						"english": "This welcome is too sudden. Don't let your guard down.",
						"japanese": "あまりにも突然の歓待だ。警戒を怠るな。",
						"chinese": "这欢迎太突然了。不要放松警惕。",
						"french": "Cet accueil est trop soudain. Ne baissez pas votre garde.",
						"spanish": "Esta bienvenida es demasiado repentina. No bajes la guardia.",
						"vietnamese": "Sự đón tiếp này quá đột ngột. Đừng mất cảnh giác.",
						"thai": "การต้อนรับนี้กระทันหันเกินไป อย่าลดการ์ดลง",
						"hindi": "यह स्वागत बहुत अचानक है। अपनी चौकसी कम मत करो।"
					},
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "손님들이 편안하다니 다행이군. 부족한 건 없는가?",
						"english": "It's good that our guests are comfortable. Is there anything you need?",
						"japanese": "お客様方が快適で何よりだ。何か不足しているものはないか？",
						"chinese": "客人们能感到舒适真是太好了。有什么需要的吗？",
						"french": "C'est bien que nos invités soient à l'aise. Manque-t-il quelque chose ?",
						"spanish": "Es bueno que nuestros huéspedes estén cómodos. ¿Falta algo?",
						"vietnamese": "Thật tốt khi các vị khách cảm thấy thoải mái. Có thiếu thốn gì không?",
						"thai": "เป็นเรื่องดีที่แขกของเราสบายใจ มีอะไรขาดตกบกพร่องหรือไม่?",
						"hindi": "अच्छा है कि हमारे मेहमान आरामदायक हैं। क्या आपको किसी चीज़ की कमी है?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "finn",
					"content": {
						"korean": "아뇨! 최고예요! 정말 감사해요.",
						"english": "No! It's perfect! Thank you so much.",
						"japanese": "いえ！最高です！本当に感謝いたします。",
						"chinese": "不！太棒了！非常感谢。",
						"french": "Non ! C'est parfait ! Merci beaucoup.",
						"spanish": "¡No! ¡Es perfecto! Muchas gracias.",
						"vietnamese": "Không! Tuyệt vời ạ! Cảm ơn rất nhiều.",
						"thai": "ไม่เลย! มันยอดเยี่ยมมาก! ขอบคุณมากครับ/ค่ะ",
						"hindi": "नहीं! यह एकदम सही है! बहुत-बहुत धन्यवाद।"
					},
					"emotion": "happy"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "finn"
				},
				{
					"speaker": "finn",
					"content": {
						"korean": "왜 이렇게 불안해하는 거야? 다 잘 될 거야.",
						"english": "Why are you so anxious? Everything will be fine.",
						"japanese": "どうしてそんなに不安がるんだ？全てうまくいくさ。",
						"chinese": "你为什么这么不安？一切都会好起来的。",
						"french": "Pourquoi es-tu si anxieux ? Tout ira bien.",
						"spanish": "¿Por qué estás tan ansioso? Todo estará bien.",
						"vietnamese": "Sao cậu lại lo lắng thế? Mọi chuyện rồi sẽ ổn thôi.",
						"thai": "ทำไมถึงกังวลขนาดนี้? ทุกอย่างจะเรียบร้อยดี",
						"hindi": "तुम इतने चिंतित क्यों हो? सब ठीक हो जाएगा।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…어젯밤 꿈자리가 뒤숭숭했어. 누군가 내 머리카락을 빗질하는 느낌….",
						"english": "...I had a strange dream last night. Felt like someone was combing my hair...",
						"japanese": "...昨夜は奇妙な夢を見た。誰かが私の髪を梳かしているような感触...",
						"chinese": "...昨晚我做了一个奇怪的梦。感觉有人在梳我的头发...",
						"french": "...J'ai fait un rêve étrange la nuit dernière. J'avais l'impression que quelqu'un me peignait les cheveux...",
						"spanish": "...Tuve un sueño extraño anoche. Sentí como si alguien me peinara el cabello...",
						"vietnamese": "...Đêm qua tôi có một giấc mơ kỳ lạ. Cảm giác như có ai đó đang chải tóc cho tôi...",
						"thai": "...เมื่อคืนฝันแปลกๆ รู้สึกเหมือนมีใครกำลังหวีผมให้ฉันเลย...",
						"hindi": "...कल रात मैंने एक अजीब सपना देखा। ऐसा लगा जैसे कोई मेरे बाल संवार रहा हो..."
					},
					"emotion": "sad"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "밤새 불편했나? 내가 더 잘 정돈해 주었어야 했는데.",
						"english": "Were you uncomfortable all night? I should have tidied it better.",
						"japanese": "一晩中不快だったか？もっときちんと整えてあげるべきだったな。",
						"chinese": "你一整晚都不舒服吗？我本该帮你整理得更好些。",
						"french": "Avez-vous été mal à l'aise toute la nuit ? J'aurais dû mieux l'arranger.",
						"spanish": "¿Estuviste incómodo toda la noche? Debería haberlo arreglado mejor.",
						"vietnamese": "Cả đêm không thoải mái sao? Lẽ ra tôi nên sửa soạn cho ngài tốt hơn.",
						"thai": "ไม่สบายทั้งคืนเลยเหรอ? ฉันน่าจะจัดให้เรียบร้อยกว่านี้แท้ๆ",
						"hindi": "क्या तुम रात भर असहज महसूस कर रहे थे? मुझे इसे और बेहतर ढंग से व्यवस्थित करना चाहिए था।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "방금… 뭐라고?",
						"english": "Just now... what did you say?",
						"japanese": "今… 何と？",
						"chinese": "刚才… 你说什么？",
						"french": "Tout à l'heure... qu'avez-vous dit ?",
						"spanish": "Hace un momento... ¿qué dijiste?",
						"vietnamese": "Vừa rồi... ngài nói gì cơ?",
						"thai": "เมื่อกี้... ว่าไงนะ?",
						"hindi": "अभी... क्या कहा?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "아무것도 아니다. 그저 손님의 평화를 바랄 뿐.",
						"english": "Nothing. Just wishing for the guest's peace.",
						"japanese": "何でもない。ただ、お客様の平穏を願うばかりだ。",
						"chinese": "没什么。只是希望客人能平静安宁。",
						"french": "Rien. Je ne fais que souhaiter la paix de l'invité.",
						"spanish": "Nada. Solo deseo la paz del huésped.",
						"vietnamese": "Không có gì. Chỉ mong khách nhân được bình an.",
						"thai": "ไม่มีอะไร แค่หวังให้แขกผู้มาเยือนได้พักผ่อนอย่างสงบเท่านั้นเอง",
						"hindi": "कुछ नहीं। बस मेहमान की शांति की कामना कर रहा हूँ।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "finn",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "finn",
					"content": {
						"korean": "보스님은 정말 친절해. 이 정도 서비스는 처음 받아봐.",
						"english": "The boss is really kind. I've never received this level of service before.",
						"japanese": "ボスは本当に親切だ。こんなサービスは初めてだよ。",
						"chinese": "老板真是太好了。我从未享受过这种服务。",
						"french": "Le patron est vraiment gentil. Je n'ai jamais eu un tel service auparavant.",
						"spanish": "El jefe es muy amable. Nunca había recibido un servicio de este nivel.",
						"vietnamese": "Ông chủ thật sự rất tốt bụng. Đây là lần đầu tiên tôi nhận được dịch vụ thế này.",
						"thai": "หัวหน้าใจดีจริงๆ ไม่เคยได้รับบริการระดับนี้มาก่อนเลย",
						"hindi": "बॉस वास्तव में बहुत दयालु हैं। मैंने पहले कभी इस स्तर की सेवा प्राप्त नहीं की।"
					},
					"emotion": "happy"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "폐허에서 이런 걸 주웠어. 낡았는데도 칼날이 섬뜩하게 깨끗해.",
						"english": "I found this in the ruins. It's old, but the blade is eerily clean.",
						"japanese": "廃墟でこんなものを拾った。古いのに、刃が不気味なほどきれいだ。",
						"chinese": "我在废墟里捡到了这个。它很旧，但刀刃却干净得令人毛骨悚然。",
						"french": "J'ai trouvé ça dans les ruines. C'est vieux, mais la lame est étrangement propre.",
						"spanish": "Encontré esto en las ruinas. Es viejo, pero la hoja está inquietantemente limpia.",
						"vietnamese": "Tôi nhặt được cái này trong đống đổ nát. Nó cũ kỹ nhưng lưỡi dao lại sạch sẽ đến rợn người.",
						"thai": "ฉันเจอสิ่งนี้ในซากปรักหักพัง มันเก่าแล้ว แต่ใบมีดยังสะอาดน่าขนลุก",
						"hindi": "मुझे यह खंडहरों में मिला। यह पुराना है, लेकिन ब्लेड अजीब तरह से साफ है।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "낡은 이발용 가위와 빗이 발견되었다. 녹슨 흔적 속에서 도구들은 빛났다.",
						"english": "Old barber scissors and a comb were found. Amidst traces of rust, the tools gleamed.",
						"japanese": "古い理髪用ハサミと櫛が発見された。錆の痕跡の中で、道具たちは輝いていた。",
						"chinese": "发现了旧理发剪刀和梳子。在锈迹斑斑中，工具们闪闪发光。",
						"french": "De vieux ciseaux de barbier et un peigne ont été trouvés. Au milieu des traces de rouille, les outils brillaient.",
						"spanish": "Se encontraron unas tijeras de barbero y un peine viejos. Entre los rastros de óxido, las herramientas brillaban.",
						"vietnamese": "Một chiếc kéo cắt tóc cũ và một chiếc lược đã được tìm thấy. Giữa những vết rỉ sét, các dụng cụ vẫn lấp lánh.",
						"thai": "พบกรรไกรตัดผมเก่าและหวี ท่ามกลางร่องรอยของสนิม เครื่องมือเหล่านี้ยังคงส่องประกาย",
						"hindi": "पुरानी नाई की कैंची और एक कंघी मिली। जंग के निशानों के बीच, औजार चमक रहे थे।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "finn",
					"content": {
						"korean": "아, 그거 보스님이 어제 머리 다듬어 준다고 잠깐 쓰신 거야.",
						"english": "Oh, the boss just used those yesterday to trim hair.",
						"japanese": "ああ、あれはボスが昨日、髪を整えるのに少し使ったものだよ。",
						"chinese": "啊，那是老板昨天用来修剪头发的。",
						"french": "Oh, le patron les a juste utilisés hier pour couper les cheveux.",
						"spanish": "Ah, eso lo usó el jefe ayer para cortar el pelo un poco.",
						"vietnamese": "À, đó là đồ ông chủ đã dùng để tỉa tóc hôm qua.",
						"thai": "อ๋อ หัวหน้าเพิ่งเอาไปใช้เมื่อวานนี้เอง เพื่อเล็มผมนะ",
						"hindi": "ओह, बॉस ने कल ही उनका इस्तेमाल बाल काटने के लिए किया था।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…핀, 너 머리가 좀 짧아진 것 같지 않아?",
						"english": "...Finn, don't you think your hair looks a bit shorter?",
						"japanese": "…フィン、君、髪が少し短くなったように見えないか？",
						"chinese": "…芬恩，你是不是觉得你的头发有点短了？",
						"french": "...Finn, tu ne trouves pas que tes cheveux sont un peu plus courts ?",
						"spanish": "...Finn, ¿no crees que tu pelo está un poco más corto?",
						"vietnamese": "...Finn, cậu không thấy tóc mình ngắn đi một chút sao?",
						"thai": "...ฟินน์ นายไม่คิดว่าผมของนายสั้นลงหน่อยเหรอ?",
						"hindi": "...फिन, क्या तुम्हें नहीं लगता कि तुम्हारे बाल थोड़े छोटे हो गए हैं?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "finn",
					"content": {
						"korean": "기분 탓이겠지! 난 훨씬 가벼워진 것 같아!",
						"english": "Must be my imagination! I feel much lighter!",
						"japanese": "気のせいだよ！僕はすっかり身軽になった気分さ！",
						"chinese": "一定是我的错觉！我感觉轻松多了！",
						"french": "Ce doit être mon imagination ! Je me sens beaucoup plus léger !",
						"spanish": "¡Debe ser mi imaginación! ¡Me siento mucho más ligero!",
						"vietnamese": "Chắc là do cảm giác thôi! Tôi thấy nhẹ nhõm hơn nhiều!",
						"thai": "คิดไปเองน่า! ฉันรู้สึกเบาตัวขึ้นเยอะเลย!",
						"hindi": "यह मेरी कल्पना होगी! मुझे बहुत हल्का महसूस हो रहा है!"
					},
					"emotion": "happy",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "finn"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "왠지 몸이 가벼워진 것 같아. 머리카락도… 이상해.",
						"english": "My body feels lighter somehow. My hair... it's strange.",
						"japanese": "なんだか体が軽くなったみたい。髪も…変だ。",
						"chinese": "总觉得身体变轻了。头发也…很奇怪。",
						"french": "Mon corps se sent plus léger d'une certaine manière. Mes cheveux... c'est étrange.",
						"spanish": "Mi cuerpo se siente más ligero de alguna manera. Mi pelo... es extraño.",
						"vietnamese": "Không hiểu sao người mình nhẹ bẫng. Tóc cũng... lạ quá.",
						"thai": "ไม่รู้ทำไมตัวฉันถึงเบาลง ผมก็... แปลกไป",
						"hindi": "मेरा शरीर कुछ हल्का महसूस हो रहा है। मेरे बाल भी... अजीब लग रहे हैं।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "점점 모든 게 이상해. 뭔가 잃어버리는 느낌이야.",
						"english": "Everything's getting stranger. I feel like I'm losing something.",
						"japanese": "だんだんすべてがおかしくなってる。何かを失ってる感じがする。",
						"chinese": "一切都变得越来越奇怪。我感觉自己正在失去什么。",
						"french": "Tout devient de plus en plus étrange. J'ai l'impression de perdre quelque chose.",
						"spanish": "Todo se está volviendo más extraño. Siento que estoy perdiendo algo.",
						"vietnamese": "Mọi thứ ngày càng kỳ lạ. Tôi cảm thấy như đang mất đi thứ gì đó.",
						"thai": "ทุกอย่างเริ่มแปลกขึ้นเรื่อย ๆ ฉันรู้สึกเหมือนกำลังสูญเสียอะไรบางอย่าง",
						"hindi": "सब कुछ अजीब होता जा रहा है। मुझे ऐसा लग रहा है कि मैं कुछ खो रहा हूँ।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "finn",
					"content": {
						"korean": "넌 너무 부정적이야! 보스님 덕분에 편안하잖아!",
						"english": "You're too negative! Thanks to the Boss, we're comfortable!",
						"japanese": "君はネガティブすぎるよ！ボスのおかげで快適じゃないか！",
						"chinese": "你太消极了！多亏了老大，我们才能过得这么舒服！",
						"french": "Tu es trop négatif ! Grâce au Boss, nous sommes à l'aise !",
						"spanish": "¡Eres demasiado negativo! ¡Gracias al Jefe, estamos cómodos!",
						"vietnamese": "Cậu tiêu cực quá! Nhờ có Sếp mà chúng ta mới thoải mái thế này chứ!",
						"thai": "เธอมองโลกในแง่ร้ายเกินไปแล้ว! เพราะท่านบอส เราถึงสบายขนาดนี้!",
						"hindi": "तुम बहुत नकारात्मक हो! बॉस की वजह से हम आराम से हैं!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "핀, 제발 정신 차려! 저게 진짜 환대라고 생각해?",
						"english": "Finn, please snap out of it! Do you really think that's true hospitality?",
						"japanese": "フィン、どうか目を覚まして！あれが本当のもてなしだとでも思ってるの？",
						"chinese": "芬恩，拜托清醒一点！你真觉得那是真正的款待吗？",
						"french": "Finn, s'il te plaît, reprends tes esprits ! Tu penses vraiment que c'est de la vraie hospitalité ?",
						"spanish": "¡Finn, por favor, reacciona! ¿De verdad crees que eso es verdadera hospitalidad?",
						"vietnamese": "Finn, làm ơn tỉnh táo lại đi! Cậu thật sự nghĩ đó là sự hiếu khách thật sao?",
						"thai": "ฟินน์ ได้โปรดตื่นจากภวังค์! เธอคิดว่านั่นคือการต้อนรับที่แท้จริงเหรอ?",
						"hindi": "फिन, कृपया होश में आओ! क्या तुम्हें सच में लगता है कि यह सच्ची मेहमाननवाज़ी है?"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "finn",
					"content": {
						"korean": "네가 뭘 알아? 보스님은 우리에게 완벽한 평화를 주신다고!",
						"english": "What do you know? The Boss gives us perfect peace!",
						"japanese": "君に何がわかるっていうの？ボスは私たちに完璧な平和を与えてくれるんだ！",
						"chinese": "你懂什么？老大赐予我们完美的和平！",
						"french": "Qu'est-ce que tu en sais ? Le Boss nous offre une paix parfaite !",
						"spanish": "¡Tú qué sabes? ¡El Jefe nos da paz perfecta!",
						"vietnamese": "Cậu biết gì chứ? Sếp ban cho chúng ta sự bình yên hoàn hảo!",
						"thai": "เธอรู้อะไรบ้าง? ท่านบอสจะมอบความสงบสุขที่สมบูรณ์แบบให้เรา!",
						"hindi": "तुम क्या जानते हो? बॉस हमें पूर्ण शांति देते हैं!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "핀은 완전히 보스의 거짓된 환대에 빠져 있었다. 주인공은 절망했다.",
						"english": "Finn was completely immersed in the Boss's false hospitality. The protagonist despaired.",
						"japanese": "フィンはボスの偽りのもてなしに完全に浸っていた。主人公は絶望した。",
						"chinese": "芬恩完全沉浸在老大虚假的款待中。主人公感到绝望。",
						"french": "Finn était complètement plongé dans la fausse hospitalité du Boss. Le protagoniste désespérait.",
						"spanish": "Finn estaba completamente inmerso en la falsa hospitalidad del Jefe. El protagonista se desesperó.",
						"vietnamese": "Finn hoàn toàn chìm đắm trong sự hiếu khách giả dối của Sếp. Nhân vật chính đã tuyệt vọng.",
						"thai": "ฟินน์จมดิ่งลงสู่การต้อนรับจอมปลอมของท่านบอสอย่างสิ้นเชิง ตัวเอกสิ้นหวังแล้ว",
						"hindi": "फिन बॉस की झूठी मेहमाननवाज़ी में पूरी तरह डूबा हुआ था। नायक निराश हो गया।"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "무의미하다… 이 허무의 고리는… 다시 시작될 뿐.",
						"english": "Meaningless... This void's cycle... will only restart.",
						"japanese": "無意味だ…この虚無の環は…また始まるだけだ。",
						"chinese": "毫无意义…这虚无的循环…只会重新开始。",
						"french": "Insignifiant... Ce cycle de vide... ne fera que recommencer.",
						"spanish": "Sin sentido... Este ciclo de vacío... solo volverá a empezar.",
						"vietnamese": "Vô nghĩa... Vòng lặp hư vô này... sẽ chỉ bắt đầu lại.",
						"thai": "ไร้ความหมาย... วงจรแห่งความว่างเปล่านี้... จะเริ่มต้นใหม่เท่านั้น",
						"hindi": "अर्थहीन... शून्यता का यह चक्र... बस फिर से शुरू होगा।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "아니. 여기서 끝낼 거야.",
						"english": "No. I'll end it here.",
						"japanese": "いや。ここで終わらせる。",
						"chinese": "不。我会在这里结束它。",
						"french": "Non. J'y mettrai fin ici.",
						"spanish": "No. Lo terminaré aquí.",
						"vietnamese": "Không. Tôi sẽ kết thúc nó ở đây.",
						"thai": "ไม่ ฉันจะจบมันที่นี่",
						"hindi": "नहीं। मैं इसे यहीं ख़त्म करूँगा।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "finn",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						3
					],
					"action": "enter"
				},
				{
					"speaker": "finn",
					"content": {
						"korean": "내가… 내가 뭘 한 거지…?",
						"english": "What... what have I done...?",
						"japanese": "私が…私が何をしたというんだ…？",
						"chinese": "我…我做了什么…？",
						"french": "Qu'ai-je... Qu'ai-je fait...?",
						"spanish": "¿Qué... qué he hecho...?",
						"vietnamese": "Mình... mình đã làm gì vậy...?",
						"thai": "ฉัน... ฉันทำอะไรลงไป...?",
						"hindi": "मैंने... मैंने क्या किया...?"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "끝없는 욕망의 순환은 잠시 멈췄다. 그러나 다음 막은, 더 깊은 절망을 예고했다.",
						"english": "The endless cycle of desire briefly halted. But the next act promised deeper despair.",
						"japanese": "終わりなき欲望の循環は一時的に止まった。しかし、次の幕は、より深い絶望を予兆していた。",
						"chinese": "无尽欲望的循环暂时停止了。然而，下一幕预示着更深的绝望。",
						"french": "Le cycle sans fin du désir s'est brièvement arrêté. Mais le prochain acte annonçait un désespoir plus profond.",
						"spanish": "El ciclo interminable del deseo se detuvo brevemente. Sin embargo, el próximo acto presagió una desesperación más profunda.",
						"vietnamese": "Vòng tuần hoàn của dục vọng vô tận đã tạm dừng. Nhưng màn tiếp theo lại báo trước một nỗi tuyệt vọng sâu sắc hơn.",
						"thai": "วงจรแห่งความปรารถนาอันไร้สิ้นสุดหยุดชั่วคราว ทว่าฉากถัดไปกลับเป็นลางบอกถึงความสิ้นหวังที่ลึกซึ้งกว่า",
						"hindi": "अंतहीन इच्छा का चक्र कुछ देर के लिए थम गया। हालांकि, अगला अध्याय और गहरे निराशा की भविष्यवाणी करता है।"
					},
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "결국 너도 깨닫지 못하는군. 나의 완벽한 봉사를.",
						"english": "In the end, you too fail to realize. My perfect service.",
						"japanese": "結局、お前も気づかないのか。私の完璧な奉仕に。",
						"chinese": "最终，你也没能领悟。我这完美的奉献。",
						"french": "Au final, toi non plus tu ne réalises pas. Mon service parfait.",
						"spanish": "Al final, tú tampoco lo entiendes. Mi servicio perfecto.",
						"vietnamese": "Cuối cùng, ngươi cũng không nhận ra. Dịch vụ hoàn hảo của ta.",
						"thai": "ในที่สุด เธอก็ไม่เข้าใจ การบริการที่สมบูรณ์แบบของฉัน",
						"hindi": "अंत में, तुम भी नहीं समझते। मेरी उत्तम सेवा को।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "네가 원하는 건 서비스가 아니라, 우리를 잠식하는 거였어!",
						"english": "What you wanted wasn't service, but to devour us!",
						"japanese": "お前が望んでいたのはサービスじゃなくて、私たちを蝕むことだったんだ！",
						"chinese": "你想要的不是服务，而是吞噬我们！",
						"french": "Ce que tu voulais, ce n'était pas un service, mais nous dévorer !",
						"spanish": "¡Lo que querías no era servicio, sino devorarnos!",
						"vietnamese": "Thứ ngươi muốn không phải là dịch vụ, mà là nuốt chửng chúng ta!",
						"thai": "สิ่งที่เธอต้องการไม่ใช่บริการ แต่เป็นการกลืนกินพวกเรา!",
						"hindi": "जो तुम चाहते थे वह सेवा नहीं, बल्कि हमें निगलना था!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"action": "enter",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "finn"
				},
				{
					"speaker": "finn",
					"content": {
						"korean": "아니야… 보스님은 그런 분이 아니야!",
						"english": "No... The Boss isn't like that!",
						"japanese": "違う…ボスはそんな人じゃない！",
						"chinese": "不…老大不是那样的人！",
						"french": "Non... Le Boss n'est pas comme ça !",
						"spanish": "¡No... El Jefe no es así!",
						"vietnamese": "Không phải... Sếp không phải người như vậy!",
						"thai": "ไม่จริง... ท่านบอสไม่ใช่คนแบบนั้น!",
						"hindi": "नहीं... बॉस ऐसे नहीं हैं!"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "이제 너희 모두 나의 아름다운 소유물이 될 시간이다.",
						"english": "Now it's time for all of you to become my beautiful possessions.",
						"japanese": "さあ、お前たち全員が私の美しい所有物になる時だ。",
						"chinese": "现在，你们所有人，都将成为我美丽的收藏品。",
						"french": "Maintenant, il est temps que vous deveniez tous mes belles possessions.",
						"spanish": "Ahora es el momento de que todos ustedes se conviertan en mis hermosas posesiones.",
						"vietnamese": "Giờ là lúc tất cả các ngươi trở thành vật sở hữu xinh đẹp của ta.",
						"thai": "ถึงเวลาแล้วที่พวกเจ้าทุกคนจะกลายเป็นสมบัติอันงดงามของข้า",
						"hindi": "अब तुम सभी के मेरे सुंदर कब्ज़े बनने का समय है।"
					},
					"emotion": "base"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "하찮은 것들… 나의 완벽한 환대 속에서 영원히 잠들어라.",
						"english": "Insignificant ones... Sleep forever in my perfect embrace.",
						"japanese": "愚かな者たちよ…私の完璧なもてなしの中で永遠に眠れ。",
						"chinese": "卑微之物…在我完美的款待中永远沉睡吧。",
						"french": "Chétifs êtres... Endormez-vous pour l'éternité dans ma parfaite étreinte.",
						"spanish": "Seres insignificantes... Dormid para siempre en mi perfecto abrazo.",
						"vietnamese": "Những kẻ nhỏ bé... Hãy ngủ yên vĩnh viễn trong vòng tay hoàn hảo của ta.",
						"thai": "พวกไร้ค่า... จงหลับใหลชั่วนิรันดร์ในการต้อนรับอันสมบูรณ์แบบของข้า",
						"hindi": "तुच्छ प्राणी... मेरे उत्तम आतिथ्य में सदा के लिए सो जाओ।"
					},
					"emotion": "base"
				},
				{
					"speaker": "finn",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						3
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "finn",
					"content": {
						"korean": "…여기서… 끝인가…",
						"english": "...Is this... the end...?",
						"japanese": "…ここで…終わりか…",
						"chinese": "…到此…为止了吗…？",
						"french": "...Est-ce... la fin...?",
						"spanish": "...¿Aquí... termina...?",
						"vietnamese": "...Kết thúc... ở đây sao...?",
						"thai": "...ที่นี่... คือจุดจบหรือ...?",
						"hindi": "...क्या यह... अंत है...?"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "아직 포기 못 해! 이 고리를 끊을 거야!",
						"english": "I can't give up yet! I'll break this cycle!",
						"japanese": "まだ諦められない！この輪を断ち切る！",
						"chinese": "我还不能放弃！我要打破这个循环！",
						"french": "Je ne peux pas encore abandonner ! Je briserai ce cycle !",
						"spanish": "¡Aún no puedo rendirme! ¡Romperé este ciclo!",
						"vietnamese": "Chưa thể bỏ cuộc! Tôi sẽ phá vỡ vòng lặp này!",
						"thai": "ฉันยังยอมแพ้ไม่ได้! ฉันจะทำลายวงจรนี้!",
						"hindi": "मैं अभी हार नहीं मान सकता! मैं इस चक्र को तोड़ूँगा!"
					},
					"emotion": "angry",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"차가운 눈보라 속, 낯선 환대가 드리워졌다.",
			"탐험대는 나른한 평화에 잠식되고 있었다.",
			"하지만 주인공은 알 수 없는 불안감에 사로잡힌다.",
			"이 달콤한 거짓은, 무엇을 감추고 있는가?"
		],
		"english": [
			"Amidst the cold blizzard, an unfamiliar welcome descended.",
			"The expedition team was being lulled into a lazy peace.",
			"But the protagonist is gripped by an unknown unease.",
			"What is this sweet lie hiding?"
		],
		"japanese": [
			"冷たい吹雪の中、見慣れない歓迎が訪れた。",
			"探検隊は気だるい平和に侵食されつつあった。",
			"しかし主人公は、得体の知れない不安感に囚われる。",
			"この甘い偽りは、何を隠しているのか？"
		],
		"chinese": [
			"在冰冷的暴风雪中，陌生的欢迎降临了。",
			"探险队正被一种慵懒的和平所侵蚀。",
			"然而，主角被一种莫名的不安感所困扰。",
			"这个甜蜜的谎言，隐藏着什么？"
		],
		"french": [
			"Au milieu du froid blizzard, un accueil étrange s'est abattu.",
			"L'équipe d'expédition était envahie par une paix paresseuse.",
			"Mais le protagoniste est saisi d'une inquiétude inconnue.",
			"Que cache ce doux mensonge ?"
		],
		"spanish": [
			"En medio de la fría ventisca, una bienvenida desconocida se cernió.",
			"El equipo de expedición estaba siendo consumido por una paz lánguida.",
			"Pero el protagonista es presa de una inquietud desconocida.",
			"¿Qué esconde esta dulce mentira?"
		],
		"vietnamese": [
			"Giữa trận bão tuyết lạnh giá, một sự đón tiếp xa lạ đã bao trùm.",
			"Đoàn thám hiểm đang chìm đắm trong sự bình yên uể oải.",
			"Nhưng nhân vật chính lại bị một nỗi bất an không rõ bao trùm.",
			"Lời nói dối ngọt ngào này đang che giấu điều gì?"
		],
		"thai": [
			"ท่ามกลางพายุหิมะอันหนาวเหน็บ การต้อนรับที่ไม่คุ้นเคยได้มาถึง",
			"ทีมสำรวจกำลังจมดิ่งลงสู่ความสงบสุขที่เชื่องช้า",
			"แต่ตัวเอกกลับถูกความรู้สึกไม่สบายใจที่ไม่รู้จักเข้าครอบงำ",
			"คำโกหกอันแสนหวานนี้ ซ่อนอะไรอยู่?"
		],
		"hindi": [
			"ठंडे बर्फीले तूफान के बीच, एक अनजान स्वागत छा गया।",
			"अभियान दल आलसी शांति में डूब रहा था।",
			"नायक एक अज्ञात बेचैनी से ग्रस्त है।",
			"यह मीठा झूठ क्या छिपा रहा है?"
		]
	}
} as const;
