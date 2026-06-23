export const scenario_snowy_hagall_23_02 = {
	"scenario_id": "snowy_hagall_23_02",
	"order": 2,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"eira": {
			"id": "mon_0c37c014-b5ca-4f2f-ad03-5d393e5b2eb1",
			"name": {
				"korean": "에이라",
				"english": "Eira",
				"japanese": "エイラ",
				"chinese": "艾拉",
				"french": "Eira",
				"spanish": "Eira",
				"vietnamese": "Eira",
				"thai": "ไอรา",
				"hindi": "ऐरा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8e2970b7-bcb1-4b1c-6bf0-93106b373500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/0ca1ec09-a624-450f-054a-b98de58bdb00/public"
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
					"type": "speech",
					"content": {
						"korean": "차가운 공기가 폐부를 찔렀다. 동굴 깊숙한 곳에서 희미한 움직임이 포착되었다.",
						"english": "The cold air pierced my lungs. A faint movement was caught deep within the cave.",
						"japanese": "冷たい空気が肺を刺した。洞窟の奥深くで、かすかな動きが捉えられた。",
						"chinese": "冰冷的空气刺痛了肺部。在洞穴深处捕捉到一丝微弱的移动。",
						"french": "L'air froid me transperçait les poumons. Un faible mouvement fut détecté au plus profond de la grotte.",
						"spanish": "El aire frío me perforó los pulmones. Un leve movimiento fue captado en lo profundo de la cueva.",
						"vietnamese": "Không khí lạnh buốt đâm vào phổi. Một chuyển động mờ nhạt được phát hiện sâu bên trong hang động.",
						"thai": "อากาศเย็นเฉียบแทงปอด การเคลื่อนไหวที่แผ่วเบาถูกตรวจจับได้ลึกเข้าไปในถ้ำ",
						"hindi": "ठंडी हवा फेफड़ों में चुभ गई। गुफा के गहरे भीतर एक हल्की हलचल पकड़ी गई।"
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"speaker": "eira",
					"spot": [
						5,
						3
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…여긴 어디지? 당신들은… 누구야.",
						"english": "…Where am I? Who… are you?",
						"japanese": "…ここはどこだ？あなたたちは…誰だ。",
						"chinese": "……这是哪里？你们……是谁？",
						"french": "…Où suis-je ? Qui… êtes-vous ?",
						"spanish": "¿…Dónde estoy? ¿Quiénes… sois?",
						"vietnamese": "…Đây là đâu? Các người… là ai?",
						"thai": "…นี่ที่ไหน? พวกคุณ… เป็นใคร?",
						"hindi": "…मैं कहाँ हूँ? तुम लोग… कौन हो?"
					},
					"speaker": "eira"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "정신이 드세요? 여기서 뭘 하고 있었죠?",
						"english": "Are you awake? What were you doing here?",
						"japanese": "意識が戻りましたか？ここで何をしていたのです？",
						"chinese": "你醒了吗？你在这里做什么？",
						"french": "Êtes-vous réveillé ? Que faisiez-vous ici ?",
						"spanish": "¿Estás consciente? ¿Qué hacías aquí?",
						"vietnamese": "Bạn tỉnh rồi à? Bạn đang làm gì ở đây vậy?",
						"thai": "คุณรู้สึกตัวแล้วเหรอ? มาทำอะไรที่นี่?",
						"hindi": "क्या तुम होश में हो? तुम यहाँ क्या कर रहे थे?"
					}
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "몰라… 아무것도 기억나지 않아… 악몽만 계속될 뿐.",
						"english": "I don't know… I remember nothing… only nightmares persist.",
						"japanese": "わからない…何も覚えていない…悪夢が続くだけだ。",
						"chinese": "不知道……什么都不记得了……只有噩梦不断。",
						"french": "Je ne sais pas… Je ne me souviens de rien… seuls les cauchemars persistent.",
						"spanish": "No sé… No recuerdo nada… solo las pesadillas persisten.",
						"vietnamese": "Tôi không biết… Tôi không nhớ gì cả… chỉ có những cơn ác mộng cứ tiếp diễn.",
						"thai": "ไม่รู้… จำอะไรไม่ได้เลย… มีแต่ฝันร้ายเท่านั้นที่ยังคงอยู่",
						"hindi": "मुझे नहीं पता… मुझे कुछ याद नहीं… केवल बुरे सपने ही आते रहते हैं।"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "eira",
					"spot": [
						4,
						3
					]
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "우리 팀… 다들 어디 갔지? 분명… 같이 왔는데.",
						"english": "My team… where did everyone go? We… definitely came together.",
						"japanese": "私のチームは…みんなどこへ行った？きっと…一緒に来たのに。",
						"chinese": "我的团队……大家都去哪儿了？明明……我们是一起来的。",
						"french": "Mon équipe… où sont passés tout le monde ? On est… sûrement venus ensemble.",
						"spanish": "Mi equipo… ¿dónde están todos? Seguro… vinimos juntos.",
						"vietnamese": "Đội của tôi… mọi người đi đâu hết rồi? Rõ ràng… chúng tôi đã đến cùng nhau mà.",
						"thai": "ทีมของฉัน… ทุกคนหายไปไหน? เรา… มาด้วยกันแน่นอน",
						"hindi": "मेरी टीम… सब कहाँ गए? हम… निश्चित रूप से साथ आए थे।"
					},
					"speaker": "eira"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "다른 탐험대였나요? 어떤… 일이 있었죠?",
						"english": "Were you with another expedition? What… happened?",
						"japanese": "別の探検隊でしたか？何か…あったのですか？",
						"chinese": "是另一个探险队吗？发生了……什么事？",
						"french": "Étiez-vous avec une autre expédition ? Que… s'est-il passé ?",
						"spanish": "¿Eras de otra expedición? ¿Qué… pasó?",
						"vietnamese": "Bạn thuộc đoàn thám hiểm khác sao? Chuyện gì… đã xảy ra vậy?",
						"thai": "คุณเป็นทีมสำรวจอื่นเหรอ? เกิดอะไรขึ้น…?",
						"hindi": "क्या तुम किसी और अभियान दल से थे? क्या… हुआ था?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "모르겠어… 모두가 사라졌어. 마치… 처음부터 없었던 것처럼.",
						"english": "I don't know... Everyone's gone. As if... they were never here.",
						"japanese": "分からない…みんな消えた。まるで…最初からいなかったかのように。",
						"chinese": "我不知道……大家都消失了。仿佛……从一开始就不存在一样。",
						"french": "Je ne sais pas… Tout le monde a disparu. Comme si… ils n'avaient jamais existé.",
						"spanish": "No lo sé… Todos desaparecieron. Como si… nunca hubieran estado aquí.",
						"vietnamese": "Tôi không biết… Mọi người đều biến mất. Như thể… họ chưa từng ở đây vậy.",
						"thai": "ไม่รู้สิ… ทุกคนหายไปหมดเลย ราวกับว่า… ไม่เคยมีอยู่ตั้งแต่แรก",
						"hindi": "मुझे नहीं पता… सब गायब हो गए। जैसे… वे कभी थे ही नहीं।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "처음부터 없었던 것처럼…?",
						"english": "As if they were never here...?",
						"japanese": "最初からいなかったかのように…？",
						"chinese": "仿佛从一开始就不存在……？",
						"french": "Comme si… ils n'avaient jamais existé… ?",
						"spanish": "Como si nunca hubieran estado aquí…?",
						"vietnamese": "Như thể chưa từng ở đây…?",
						"thai": "ราวกับไม่เคยมีอยู่ตั้งแต่แรกงั้นหรือ…?",
						"hindi": "जैसे वे कभी थे ही नहीं…?"
					},
					"speaker": "character_1"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						3
					],
					"type": "direction",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"content": {
						"korean": "자꾸 보여… 눈보라 속에 고통받는 사람들… 비명소리…",
						"english": "I keep seeing it… People suffering in a snowstorm… Screams…",
						"japanese": "何度も見える…吹雪の中で苦しむ人々…悲鳴…",
						"chinese": "我总能看到……暴风雪中受苦的人们……尖叫声……",
						"french": "Je n'arrête pas de voir… Des gens souffrant dans une tempête de neige… Des cris…",
						"spanish": "Sigo viéndolo… Gente sufriendo en una tormenta de nieve… Gritos…",
						"vietnamese": "Tôi cứ nhìn thấy… Người ta đau khổ trong bão tuyết… Tiếng la hét…",
						"thai": "ฉันเห็นมันซ้ำแล้วซ้ำเล่า… ผู้คนทุกข์ทรมานในพายุหิมะ… เสียงกรีดร้อง…",
						"hindi": "मुझे बार-बार दिख रहा है… बर्फीले तूफान में पीड़ित लोग… चीखें…"
					},
					"emotion": "sad",
					"speaker": "eira"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "희미하게 보이는 고통받는 사람들의 잔상. 기시감이 들었다.",
						"english": "Faint afterimages of suffering people. A sense of déjà vu.",
						"japanese": "苦しむ人々の微かな残像。デジャヴを感じた。",
						"chinese": "受苦之人的模糊残影。一种似曾相识的感觉涌上心头。",
						"french": "De faibles rémanences de personnes souffrantes. Un sentiment de déjà-vu.",
						"spanish": "Imágenes residuales débiles de gente sufriendo. Tuve un déjà vu.",
						"vietnamese": "Dư ảnh mờ nhạt của những người đau khổ. Một cảm giác quen thuộc ùa về.",
						"thai": "ภาพติดตาจางๆ ของผู้คนที่ทุกข์ทรมาน รู้สึกเหมือนเคยเห็นมาก่อน",
						"hindi": "पीड़ित लोगों की धुंधली परछाइयाँ। déjà vu का एहसास हुआ।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그건… 악몽이 아닐 수도 있어요.",
						"english": "That… might not be a nightmare.",
						"japanese": "それは…悪夢ではないかもしれません。",
						"chinese": "那…可能不是一场噩梦。",
						"french": "Ce… n'est peut-être pas un cauchemar.",
						"spanish": "Eso… podría no ser una pesadilla.",
						"vietnamese": "Đó… có thể không phải là một cơn ác mộng.",
						"thai": "นั่น… อาจจะไม่ใช่แค่ฝันร้าย",
						"hindi": "वह… शायद कोई दुःस्वप्न न हो।"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "점점 선명해져… 이 숲에, 뭔가 갇혀있어.",
						"english": "It's getting clearer… Something is trapped in this forest.",
						"japanese": "だんだん鮮明になる…この森に、何かが閉じ込められている。",
						"chinese": "它越来越清晰了……这个森林里，有什么东西被困住了。",
						"french": "Ça devient de plus en plus clair… Quelque chose est piégé dans cette forêt.",
						"spanish": "Se está volviendo más claro… Algo está atrapado en este bosque.",
						"vietnamese": "Nó ngày càng rõ ràng hơn… Có thứ gì đó đang bị mắc kẹt trong khu rừng này.",
						"thai": "มันชัดเจนขึ้นเรื่อยๆ… มีบางสิ่งถูกขังอยู่ในป่านี้",
						"hindi": "यह और स्पष्ट होता जा रहा है… इस जंगल में कुछ फंसा हुआ है।"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira",
					"type": "direction",
					"spot": [
						2,
						3
					]
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "이 미궁… 출구가 없어. 모든 게 왜곡되고 있어.",
						"english": "This labyrinth… has no exit. Everything is distorting.",
						"japanese": "この迷宮…出口がない。全てが歪んでいる。",
						"chinese": "这个迷宫……没有出口。一切都在扭曲。",
						"french": "Ce labyrinthe… n'a pas d'issue. Tout se déforme.",
						"spanish": "Este laberinto… no tiene salida. Todo se está distorsionando.",
						"vietnamese": "Mê cung này… không có lối thoát. Mọi thứ đang bị méo mó.",
						"thai": "เขาวงกตนี้… ไม่มีทางออก ทุกสิ่งกำลังบิดเบี้ยว",
						"hindi": "यह भूलभुलैया… इसका कोई निकास नहीं। सब कुछ विकृत हो रहा है।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "나침반이 제멋대로 돌았다. 주변 지형도 인식과 달랐다.",
						"english": "The compass spun wildly. The surrounding terrain was different from what I perceived.",
						"japanese": "羅針盤が勝手に回った。周囲の地形も認識と異なっていた。",
						"chinese": "指南针胡乱地转动着。周围的地形也与认知不同。",
						"french": "La boussole tournait follement. Le terrain environnant était différent de ce que je percevais.",
						"spanish": "La brújula giraba sin control. El terreno circundante era diferente a lo que percibía.",
						"vietnamese": "La bàn quay điên cuồng. Địa hình xung quanh khác với nhận thức của tôi.",
						"thai": "เข็มทิศหมุนมั่วซั่ว ภูมิประเทศรอบๆ ก็แตกต่างไปจากที่รับรู้",
						"hindi": "कंपास बेतरतीब ढंग से घूमने लगा। आसपास का इलाका मेरी समझ से अलग था।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "기분 탓이 아니었군.",
						"english": "It wasn't my imagination, then.",
						"japanese": "気のせいではなかったようだな。",
						"chinese": "看来不是我的错觉。",
						"french": "Ce n'était donc pas mon imagination.",
						"spanish": "Entonces, no era mi imaginación.",
						"vietnamese": "Vậy ra không phải do tôi tưởng tượng.",
						"thai": "ไม่ใช่แค่ความรู้สึกไปเองสินะ",
						"hindi": "तो, यह मेरा भ्रम नहीं था।"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "누군가… 맹세를 저버렸어. 약속은 파괴됐어.",
						"english": "Someone… broke their vow. The promise is broken.",
						"japanese": "誰かが…誓いを破った。約束は破壊された。",
						"chinese": "有人……违背了誓言。诺言被打破了。",
						"french": "Quelqu'un… a rompu son serment. La promesse est brisée.",
						"spanish": "Alguien… rompió su juramento. La promesa está rota.",
						"vietnamese": "Ai đó… đã phá vỡ lời thề. Lời hứa đã bị hủy hoại.",
						"thai": "ใครบางคน… ผิดคำสาบาน สัญญาถูกทำลายแล้ว",
						"hindi": "किसी ने… अपनी कसम तोड़ी है। वादा टूट गया है।"
					},
					"emotion": "angry",
					"speaker": "eira"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "무슨 소리야?",
						"english": "What was that?",
						"japanese": "何？",
						"chinese": "什么声音？",
						"french": "Qu'est-ce que c'est ?",
						"spanish": "¿Qué fue eso?",
						"vietnamese": "Cái gì vậy?",
						"thai": "อะไรนะ?",
						"hindi": "यह क्या था?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "속삭임이 들려… 잊혀진 맹세의….",
						"english": "I hear whispers... of a forgotten vow...",
						"japanese": "囁きが聞こえる…忘れられた誓いの…。",
						"chinese": "我听到低语…关于被遗忘的誓言…",
						"french": "J'entends des murmures... d'un serment oublié...",
						"spanish": "Oigo susurros... de un juramento olvidado...",
						"vietnamese": "Tôi nghe thấy tiếng thì thầm... của một lời thề đã quên...",
						"thai": "ได้ยินเสียงกระซิบ...ของคำสาบานที่ถูกลืม...",
						"hindi": "मुझे फुसफुसाहट सुनाई देती है... एक भूले हुए वादे की..."
					},
					"emotion": "sad",
					"speaker": "eira"
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "얼어붙은 침묵 속, 거대한 그림자가 나타났다.",
						"english": "From the frozen silence, a colossal shadow emerged.",
						"japanese": "凍てつく沈黙の中、巨大な影が現れた。",
						"chinese": "在冰冷的寂静中，一个巨大的影子出现了。",
						"french": "Du silence glacial, une ombre colossale a surgi.",
						"spanish": "De un silencio helado, una sombra colosal emergió.",
						"vietnamese": "Trong sự im lặng đóng băng, một cái bóng khổng lồ xuất hiện.",
						"thai": "ท่ามกลางความเงียบงันที่เยือกแข็ง เงาขนาดมหึมาปรากฏขึ้น",
						"hindi": "जमी हुई चुप्पी में, एक विशालकाय परछाई प्रकट हुई।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "여기에 이르는 자, 모두 기억에서 지워질 것이다.",
						"english": "All who reach this place shall be erased from memory.",
						"japanese": "ここにたどり着く者、皆記憶から消え去るだろう。",
						"chinese": "所有到达此处之人，都将被从记忆中抹去。",
						"french": "Tous ceux qui atteindront ce lieu seront effacés de la mémoire.",
						"spanish": "Todos los que lleguen aquí serán borrados de la memoria.",
						"vietnamese": "Tất cả những ai đến nơi này sẽ bị xóa khỏi ký ức.",
						"thai": "ผู้ใดมาถึงที่นี่ จักถูกลบเลือนจากความทรงจำ",
						"hindi": "जो भी यहाँ पहुँचेगा, उसकी याददाश्त मिटा दी जाएगी।"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "또 다른 수호자냐? 네가 지키는 게 뭐지?",
						"english": "Another guardian? What do you protect?",
						"japanese": "また別の守護者か？何を護っている？",
						"chinese": "又一个守护者？你在守护什么？",
						"french": "Un autre gardien ? Que protèges-tu ?",
						"spanish": "¿Otro guardián? ¿Qué proteges?",
						"vietnamese": "Lại một người bảo vệ khác sao? Ngươi bảo vệ cái gì?",
						"thai": "เป็นผู้พิทักษ์อีกคนงั้นรึ? เจ้าปกป้องอะไรกัน?",
						"hindi": "एक और संरक्षक? तुम क्या बचा रहे हो?"
					},
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "망각. 그것만이 진실을 가릴 유일한 방법.",
						"english": "Oblivion. It is the only way to conceal the truth.",
						"japanese": "忘却。それだけが真実を隠す唯一の方法。",
						"chinese": "遗忘。那是唯一能掩盖真相的方法。",
						"french": "L'oubli. C'est le seul moyen de dissimuler la vérité.",
						"spanish": "El olvido. Es la única forma de ocultar la verdad.",
						"vietnamese": "Sự lãng quên. Đó là cách duy nhất để che giấu sự thật.",
						"thai": "การหลงลืม. นั่นคือหนทางเดียวที่จะปกปิดความจริง.",
						"hindi": "विस्मृति। वही सच को छिपाने का एकमात्र तरीका है।"
					},
					"emotion": "base"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "eira",
					"spot": [
						1,
						3
					]
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "{random_boss}… 이 이름… 기억해야 해.",
						"english": "{random_boss}... This name... I must remember it.",
						"japanese": "{random_boss}…この名前…覚えておかなければ。",
						"chinese": "{random_boss}…这个名字…我必须记住它。",
						"french": "{random_boss}... Ce nom... Je dois m'en souvenir.",
						"spanish": "{random_boss}... Este nombre... Debo recordarlo.",
						"vietnamese": "{random_boss}... Cái tên này... Tôi phải nhớ nó.",
						"thai": "{random_boss}... ชื่อนี้... ต้องจำไว้ให้ได้.",
						"hindi": "{random_boss}... यह नाम... मुझे याद रखना होगा।"
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "모든 것이 잊혀지리라. 너희의 투쟁도.",
						"english": "All will be forgotten. Your struggles, too.",
						"japanese": "全てが忘れ去られるだろう。お前たちの闘争も。",
						"chinese": "一切都将被遗忘。你们的斗争亦是。",
						"french": "Tout sera oublié. Vos luttes aussi.",
						"spanish": "Todo será olvidado. Vuestras luchas también.",
						"vietnamese": "Mọi thứ rồi sẽ bị lãng quên. Cả những cuộc đấu tranh của các ngươi nữa.",
						"thai": "ทุกสิ่งจะถูกลืมเลือน แม้แต่การต่อสู้ของพวกเจ้า",
						"hindi": "सब कुछ भुला दिया जाएगा। तुम्हारे संघर्ष भी।"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "기억… 잊지 않아. 반드시….",
						"english": "Memory... I won't forget. Never...",
						"japanese": "記憶… 忘れない。必ず…。",
						"chinese": "记忆… 我不会忘记。绝不…。",
						"french": "La mémoire... je n'oublierai pas. Jamais...",
						"spanish": "La memoria... no olvidaré. Jamás...",
						"vietnamese": "Ký ức… tôi sẽ không quên. Chắc chắn…",
						"thai": "ความทรงจำ... ฉันจะไม่ลืม อย่างแน่นอน...",
						"hindi": "यादें... मैं नहीं भूलूंगा। कभी नहीं..."
					},
					"speaker": "character_any"
				},
				{
					"spot": [
						2,
						3
					],
					"speaker": "eira",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "우린… 여기서 끝낼 수 없어.",
						"english": "We... can't end it here.",
						"japanese": "私たちは… ここで終わらせることはできない。",
						"chinese": "我们… 不能在这里结束。",
						"french": "Nous... ne pouvons pas finir ici.",
						"spanish": "No podemos... terminar aquí.",
						"vietnamese": "Chúng ta… không thể kết thúc ở đây.",
						"thai": "เรา... จบที่นี่ไม่ได้",
						"hindi": "हम... इसे यहीं खत्म नहीं कर सकते।"
					},
					"emotion": "sad"
				}
			],
			"win_dialogue": [
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "너희도… 결국… 반복될 것이다… 이 비극은 끝나지 않아.",
						"english": "You too... eventually... will repeat... This tragedy never ends.",
						"japanese": "お前たちも…結局…繰り返されるだろう…この悲劇は終わらない。",
						"chinese": "你们也…终将…重蹈覆辙…这场悲剧永无止境。",
						"french": "Vous aussi... finalement... vous vous répéterez... Cette tragédie ne prendra jamais fin.",
						"spanish": "Vosotros también... al final... os repetiréis... Esta tragedia nunca termina.",
						"vietnamese": "Các ngươi cũng... cuối cùng... sẽ lặp lại... Bi kịch này không bao giờ kết thúc.",
						"thai": "พวกเจ้าเอง...ท้ายที่สุด...ก็จะต้องวนซ้ำ...โศกนาฏกรรมนี้ไม่มีวันจบสิ้น",
						"hindi": "तुम भी... अंततः... दोहराए जाओगे... यह त्रासदी कभी खत्म नहीं होगी।"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "반복된다고? 무슨 소리야….",
						"english": "Repeat? What do you mean...",
						"japanese": "繰り返される？どういう意味だ…。",
						"chinese": "重复？什么意思…",
						"french": "Répéter ? Qu'est-ce que tu veux dire...",
						"spanish": "¿Repetir? ¿Qué quieres decir...?",
						"vietnamese": "Lặp lại ư? Ý ngươi là sao...",
						"thai": "วนซ้ำงั้นรึ? หมายความว่าไง...",
						"hindi": "दोहराया जाएगा? इसका क्या मतलब है..."
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira",
					"type": "direction",
					"spot": [
						5,
						3
					]
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "기록… 잊혀진 기록을 찾아야 해. 핀… 그가 답을 알 거야.",
						"english": "Records... I need to find the forgotten records. Finn... he'll know the answer.",
						"japanese": "記録…忘れられた記録を探さなければ。フィン…彼が答えを知っているはず。",
						"chinese": "记录…我必须找到被遗忘的记录。芬…他会知道答案的。",
						"french": "Les registres... Je dois retrouver les registres oubliés. Finn... il connaîtra la réponse.",
						"spanish": "Los registros... Debo encontrar los registros olvidados. Finn... él sabrá la respuesta.",
						"vietnamese": "Hồ sơ... Tôi phải tìm những hồ sơ bị lãng quên. Finn... anh ấy sẽ biết câu trả lời.",
						"thai": "บันทึก...ต้องตามหาบันทึกที่ถูกลืม. ฟินน์...เขาต้องรู้คำตอบแน่.",
						"hindi": "रिकॉर्ड्स... मुझे भूले हुए रिकॉर्ड्स ढूंढने होंगे। फिन... उसे जवाब पता होगा।"
					},
					"speaker": "eira"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "혼란 속에서 에이라가 한 학자의 이름을 내뱉었다. 망각된 서사의 조각들.",
						"english": "Amidst the chaos, Eira uttered a scholar's name. Fragments of a forgotten narrative.",
						"japanese": "混沌の中、エイラはある学者の名を口にした。忘れ去られた物語の断片。",
						"chinese": "在混乱中，艾拉说出了一个学者的名字。被遗忘叙事的片段。",
						"french": "Au milieu du chaos, Eira prononça le nom d'un érudit. Des fragments d'un récit oublié.",
						"spanish": "En medio del caos, Eira pronunció el nombre de un erudito. Fragmentos de una narrativa olvidada.",
						"vietnamese": "Giữa hỗn loạn, Eira đã thốt lên tên một học giả. Những mảnh vỡ của một câu chuyện đã lãng quên.",
						"thai": "ท่ามกลางความวุ่นวาย เอร่าเอ่ยชื่อนักวิชาการคนหนึ่ง ชิ้นส่วนของเรื่องเล่าที่ถูกลืม",
						"hindi": "अराजकता के बीच, ऐरा ने एक विद्वान का नाम लिया। एक भूली हुई गाथा के अंश।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"아눅이 안내한 얼음 동굴. 그 깊은 곳에서.",
			"탐험대는 기억을 잃은 한 생존자, 에이라를 발견한다.",
			"그녀의 혼란스러운 증언은 과거의 비극, 그리고 시스템적 은폐를 암시하는데…",
			"마치 처음부터 없었던 것처럼, 모든 것이 사라진 미궁 속으로."
		],
		"english": [
			"Deep within the ice cave guided by Anuk.",
			"The expedition discovers Aira, a survivor who lost her memory.",
			"Her fragmented testimony hints at a past tragedy and systemic cover-up…",
			"Into a labyrinth where everything vanished, as if it never existed."
		],
		"japanese": [
			"アヌークが案内する氷の洞窟、その奥深くで。",
			"探検隊は記憶を失った生存者、アイラを発見する。",
			"彼女の錯乱した証言は、過去の悲劇と組織的な隠蔽を示唆する…",
			"まるで最初からなかったかのように、すべてが消え去った迷宮の中へ。"
		],
		"chinese": [
			"在阿努克引导的冰洞深处。",
			"探险队发现了一位失忆的幸存者，艾拉。",
			"她混乱的证词暗示着过去的悲剧和系统性的掩盖……",
			"进入一个仿佛从未存在过、一切都消失了的迷宫。"
		],
		"french": [
			"Au plus profond de la caverne de glace guidée par Anuk.",
			"L'expédition découvre Aira, une survivante ayant perdu la mémoire.",
			"Son témoignage confus suggère une tragédie passée et une dissimulation systémique…",
			"Dans un labyrinthe où tout a disparu, comme si cela n'avait jamais existé."
		],
		"spanish": [
			"En lo profundo de la cueva de hielo guiada por Anuk.",
			"La expedición descubre a Aira, una superviviente que perdió la memoria.",
			"Su testimonio confuso insinúa una tragedia pasada y un encubrimiento sistémico…",
			"En un laberinto donde todo desapareció, como si nunca hubiera existido."
		],
		"vietnamese": [
			"Sâu bên trong hang băng do Anuk dẫn lối.",
			"Đoàn thám hiểm phát hiện Aira, một người sống sót đã mất trí nhớ.",
			"Lời khai rối bời của cô ấy ám chỉ một bi kịch trong quá khứ và sự che đậy có hệ thống…",
			"Vào một mê cung nơi mọi thứ biến mất, như thể chúng chưa từng tồn tại."
		],
		"thai": [
			"ลึกเข้าไปในถ้ำน้ำแข็งที่ Anuk นำทาง",
			"คณะสำรวจค้นพบไอรา ผู้รอดชีวิตที่สูญเสียความทรงจำ",
			"คำให้การที่สับสนของเธอชี้ให้เห็นถึงโศกนาฏกรรมในอดีตและการปกปิดอย่างเป็นระบบ…",
			"เข้าสู่เขาวงกตที่ทุกสิ่งหายไป ราวกับไม่เคยมีอยู่จริง"
		],
		"hindi": [
			"अनुक द्वारा निर्देशित बर्फ की गुफा के गहरे भीतर।",
			"अभियान दल को एक जीवित बची आयरा मिलती है जिसने अपनी याददाश्त खो दी है।",
			"उसकी उलझी हुई गवाही अतीत की त्रासदी और एक व्यवस्थित लीपापोती की ओर इशारा करती है…",
			"एक भूलभुलैया में जहाँ सब कुछ गायब हो गया, मानो वह कभी अस्तित्व में ही न था।"
		]
	}
} as const;
