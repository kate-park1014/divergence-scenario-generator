export const scenario_modern_mnemonic_9_04 = {
	"scenario_id": "modern_mnemonic_9_04",
	"order": 4,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"bex": {
			"id": "mon_74e24324-3f9a-4d44-9611-1da33b654ca1",
			"name": {
				"korean": "벡스",
				"english": "Bex",
				"japanese": "ベックス",
				"chinese": "贝克斯",
				"french": "Bex",
				"spanish": "Bex",
				"vietnamese": "Bex",
				"thai": "เบ็กซ์",
				"hindi": "बेक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/09dae190-ff6b-4a9d-b656-e1a2b896aa00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5cc3c77f-72e1-416e-b346-31889b3b9300/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"Mnemonic의 시스템, 그 심연으로.",
			"정보는 쌓이는 게 아니라, 누군가 '정리'하고 있었다.",
			"오래된 파일 속에서 이상한 노이즈와 왜곡이 번져온다.",
			"진실은 어디까지 조작되었나? 우리의 의심은 현실이 된다."
		],
		"english": [
			"Into the abyss of Mnemonic's system.",
			"Information wasn't merely accumulating; someone was 'organizing' it.",
			"Strange noise and distortion spread from the old files.",
			"To what extent has the truth been manipulated? Our suspicions become reality."
		],
		"japanese": [
			"Mnemonicのシステム、その深淵へ。",
			"情報はただ蓄積されるのではなく、誰かが「整理」していたのだ。",
			"古いファイルの中から、奇妙なノイズと歪みが広がる。",
			"真実はどこまで操作されたのか？我々の疑念は現実となる。"
		],
		"chinese": [
			"Mnemonic系统，其深渊之中。",
			"信息并非简单堆积，而是有人在'整理'着。",
			"在旧文件中，奇怪的噪音和扭曲蔓延开来。",
			"真相被操纵到何种地步？我们的怀疑变为现实。"
		],
		"french": [
			"Dans l'abîme du système de Mnemonic.",
			"L'information ne s'accumulait pas seulement ; quelqu'un l''organisait'.",
			"Des bruits étranges et des distorsions se propagent à partir des vieux fichiers.",
			"Jusqu'où la vérité a-t-elle été manipulée ? Nos soupçons deviennent réalité."
		],
		"spanish": [
			"Al abismo del sistema de Mnemonic.",
			"La información no solo se acumulaba; alguien la estaba 'organizando'.",
			"Extraños ruidos y distorsiones se propagan desde los archivos antiguos.",
			"¿Hasta qué punto se ha manipulado la verdad? Nuestras sospechas se hacen realidad."
		],
		"vietnamese": [
			"Vào vực sâu của hệ thống Mnemonic.",
			"Thông tin không chỉ tích lũy, mà có người đang 'sắp xếp' nó.",
			"Tiếng ồn lạ và sự méo mó lan tỏa từ các tệp cũ.",
			"Sự thật đã bị thao túng đến mức nào? Nghi ngờ của chúng ta trở thành hiện thực."
		],
		"thai": [
			"สู่ห้วงลึกของระบบ Mnemonic",
			"ข้อมูลไม่ได้แค่สะสม แต่มีคนกำลัง 'จัดระเบียบ' มันอยู่",
			"เสียงรบกวนแปลก ๆ และความบิดเบี้ยวแผ่ซ่านออกมาจากไฟล์เก่า",
			"ความจริงถูกบิดเบือนไปถึงขนาดไหน? ความสงสัยของเรากลายเป็นความจริง"
		],
		"hindi": [
			"स्मृतिचिह्न प्रणाली की खाई में।",
			"जानकारी बस जमा नहीं हो रही थी, कोई उसे 'व्यवस्थित' कर रहा था।",
			"पुरानी फाइलों से अजीब शोर और विकृति फैल रही है।",
			"सच्चाई को किस हद तक तोड़-मरोड़ कर पेश किया गया है? हमारे संदेह हकीकत बन जाते हैं।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "Mnemonic의 시스템 깊숙한 곳, 왜곡된 데이터의 흔적이 스며들기 시작했다.",
						"english": "Deep within Mnemonic's system, traces of distorted data began to seep in.",
						"japanese": "Mnemonicのシステムの奥深くで、歪んだデータの痕跡が染み込み始めた。",
						"chinese": "在Mnemonic系统深处，扭曲数据的痕迹开始渗透。",
						"french": "Au plus profond du système de Mnemonic, des traces de données déformées ont commencé à s'infiltrer.",
						"spanish": "En lo más profundo del sistema de Mnemonic, rastros de datos distorsionados comenzaron a filtrarse.",
						"vietnamese": "Sâu bên trong hệ thống Mnemonic, dấu vết của dữ liệu bị bóp méo bắt đầu thấm vào.",
						"thai": "ลึกเข้าไปในระบบของ Mnemonic ร่องรอยของข้อมูลที่บิดเบี้ยวเริ่มซึมซาบเข้ามา",
						"hindi": "स्मृतिचिह्न प्रणाली के गहरे में, विकृत डेटा के निशान रिसने लगे।"
					},
					"emotion": "base"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"speaker": "bex",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "bex",
					"content": {
						"korean": "여기까지 왔군요. Mnemonic의 정보는 정말 완벽해요.",
						"english": "You've made it this far. Mnemonic's information is truly perfect.",
						"japanese": "ここまで来ましたね。Mnemonicの情報は本当に完璧ですね。",
						"chinese": "你走到这一步了。Mnemonic的信息真是完美无缺。",
						"french": "Vous êtes arrivés jusqu'ici. Les informations de Mnemonic sont vraiment parfaites.",
						"spanish": "Han llegado hasta aquí. La información de Mnemonic es realmente perfecta.",
						"vietnamese": "Bạn đã đi được đến đây rồi. Thông tin của Mnemonic thực sự hoàn hảo.",
						"thai": "คุณมาถึงนี่แล้ว ข้อมูลของ Mnemonic สมบูรณ์แบบจริง ๆ",
						"hindi": "आप यहाँ तक आ गए हैं। स्मृतिचिह्न की जानकारी वाकई लाजवाब है।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "완벽해서 좀 소름 돋는데.",
						"english": "It's so perfect, it's a bit unsettling.",
						"japanese": "完璧すぎて、ちょっと不気味ですね。",
						"chinese": "太完美了，有点令人毛骨悚然。",
						"french": "C'est tellement parfait, c'en est un peu effrayant.",
						"spanish": "Es tan perfecto que da un poco de escalofrío.",
						"vietnamese": "Hoàn hảo đến mức hơi rợn người.",
						"thai": "มันสมบูรณ์แบบจนน่าขนลุกเลยนะ",
						"hindi": "यह इतना सही है कि थोड़ा डरावना लगता है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "…저도 그 점이 좀 불안해요.",
						"english": "...That's what makes me uneasy too.",
						"japanese": "…私もその点が少し不安です。",
						"chinese": "…我也对那一点有点不安。",
						"french": "...Ce point m'inquiète aussi.",
						"spanish": "...A mí también me inquieta eso.",
						"vietnamese": "...Tôi cũng hơi lo lắng về điểm đó.",
						"thai": "…ฉันก็รู้สึกไม่สบายใจกับเรื่องนั้นเหมือนกัน",
						"hindi": "...मुझे भी उसी बात से थोड़ी घबराहट हो रही है।"
					},
					"emotion": "sad",
					"speaker": "bex",
					"type": "speech"
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
						4,
						2
					],
					"type": "direction",
					"speaker": "bex"
				},
				{
					"type": "speech",
					"speaker": "bex",
					"content": {
						"korean": "이봐요! 저것 좀 봐요!",
						"english": "Hey! Look at that!",
						"japanese": "おい！あれを見て！",
						"chinese": "喂！快看那个！",
						"french": "Hé ! Regardez ça !",
						"spanish": "¡Oye! ¡Mira eso!",
						"vietnamese": "Này! Nhìn cái kia kìa!",
						"thai": "เฮ้! ดูนั่นสิ!",
						"hindi": "अरे! वह देखो!"
					},
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "오래된 데이터 스트림에서 알 수 없는 노이즈와 왜곡된 이미지가 번뜩였다.",
						"english": "Unknown noise and distorted images flickered in the old data stream.",
						"japanese": "古いデータストリームの中から、未知のノイズと歪んだ画像が閃いた。",
						"chinese": "在旧数据流中，未知的噪音和扭曲的图像闪烁着。",
						"french": "Des bruits inconnus et des images déformées ont scintillé dans le vieux flux de données.",
						"spanish": "Ruidos desconocidos e imágenes distorsionadas parpadearon en el antiguo flujo de datos.",
						"vietnamese": "Tiếng ồn không xác định và hình ảnh méo mó lóe lên trong luồng dữ liệu cũ.",
						"thai": "เสียงรบกวนที่ไม่รู้จักและภาพบิดเบี้ยวปรากฏขึ้นในกระแสข้อมูลเก่า",
						"hindi": "पुरानी डेटा स्ट्रीम में अज्ञात शोर और विकृत छवियाँ चमकने लगीं।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "뭐야 이거. 시스템 오류인가?",
						"english": "What is this? A system error?",
						"japanese": "これ、何だ？システムエラーか？",
						"chinese": "这是什么？系统错误吗？",
						"french": "Qu'est-ce que c'est ? Une erreur système ?",
						"spanish": "¿Qué es esto? ¿Un error del sistema?",
						"vietnamese": "Cái gì đây? Lỗi hệ thống sao?",
						"thai": "นี่มันอะไรกัน ข้อผิดพลาดของระบบเหรอ?",
						"hindi": "यह क्या है? क्या यह सिस्टम की खराबी है?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "단순한 오류가 아니에요. Mnemonic이… 관여한 흔적 같아요.",
						"english": "It's not a simple error. It looks like Mnemonic... was involved.",
						"japanese": "ただの 오류 じゃありません。Mnemonicが…関与した痕跡のようです。",
						"chinese": "这不是简单的错误。Mnemonic……似乎参与其中。",
						"french": "Ce n'est pas une simple erreur. On dirait que Mnemonic... est impliqué.",
						"spanish": "No es un simple error. Parece que Mnemonic... estuvo involucrado.",
						"vietnamese": "Không phải lỗi đơn giản. Có vẻ Mnemonic... đã can thiệp.",
						"thai": "ไม่ใช่แค่ข้อผิดพลาดธรรมดา Mnemonic... ดูเหมือนจะเข้ามาเกี่ยวข้อง",
						"hindi": "यह कोई साधारण त्रुटि नहीं है। लगता है Mnemonic... इसमें शामिल था।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "bex"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "bex",
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "이 시스템, 이상해요. 정보가… 너무 깔끔하게 정리되어 있어요.",
						"english": "This system is strange. The information... is too neatly organized.",
						"japanese": "このシステム、おかしいです。情報が…あまりにも綺麗に整理されすぎています。",
						"chinese": "这个系统很奇怪。信息……整理得太整洁了。",
						"french": "Ce système est étrange. Les informations... sont trop bien organisées.",
						"spanish": "Este sistema es extraño. La información... está demasiado bien organizada.",
						"vietnamese": "Hệ thống này lạ quá. Thông tin... được sắp xếp quá gọn gàng.",
						"thai": "ระบบนี้แปลกๆ ข้อมูล... จัดระเบียบได้เรียบร้อยเกินไป",
						"hindi": "यह सिस्टम अजीब है। जानकारी... बहुत साफ-सुथरी व्यवस्थित है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "bex"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "원래 Mnemonic이 그런 걸 잘하잖아.",
						"english": "Mnemonic is usually good at that, though.",
						"japanese": "元々Mnemonicはそういうのが得意じゃないか。",
						"chinese": "Mnemonic本来就擅长这个啊。",
						"french": "Mais Mnemonic est doué pour ça, d'habitude.",
						"spanish": "Pero Mnemonic siempre ha sido bueno en eso.",
						"vietnamese": "Mà Mnemonic vốn giỏi mấy chuyện đó mà.",
						"thai": "แต่ Mnemonic ก็เก่งเรื่องพวกนี้อยู่แล้วนี่",
						"hindi": "Mnemonic वैसे भी इन सब में अच्छा है।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이건 '수집'이 아니에요. 이건 마치… 누군가 '만든' 정보 같달까.",
						"english": "This isn't 'collected.' It's like... someone 'created' this information.",
						"japanese": "これは『収集』じゃないわ。まるで…誰かが『作った』情報みたい。",
						"chinese": "这不是‘收集’。这就像……是有人‘制造’出来的信息。",
						"french": "Ce n'est pas 'collecté'. On dirait plutôt que... quelqu'un a 'créé' ces informations.",
						"spanish": "Esto no es 'recopilado'. Es como si... alguien 'hubiera creado' esta información.",
						"vietnamese": "Đây không phải là 'thu thập'. Cứ như... ai đó 'tạo ra' thông tin này vậy.",
						"thai": "นี่ไม่ใช่การ 'เก็บรวบรวม' แต่มันเหมือน... มีคน 'สร้าง' ข้อมูลนี้ขึ้นมา",
						"hindi": "यह 'एकत्रित' नहीं है। यह ऐसा है जैसे... किसी ने यह जानकारी 'बनाई' हो।"
					},
					"emotion": "angry",
					"speaker": "bex",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…무슨 소리야.",
						"english": "...What are you talking about?",
						"japanese": "…どういうことだ。",
						"chinese": "……什么意思？",
						"french": "...Qu'est-ce que tu racontes ?",
						"spanish": "¿...De qué estás hablando?",
						"vietnamese": "...Ý anh là gì?",
						"thai": "...พูดอะไรน่ะ",
						"hindi": "...क्या बक रहे हो।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "bex",
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "이 노이즈… 점점 심해져요. 뭔가 경고하는 것 같지 않아요?",
						"english": "This noise... is getting worse. Don't you think it's some kind of warning?",
						"japanese": "このノイズ…どんどん酷くなってる。何か警告してると思わない？",
						"chinese": "这噪音……越来越严重了。你觉得这像是在警告什么吗？",
						"french": "Ce bruit... s'aggrave. Tu ne penses pas que c'est un avertissement ?",
						"spanish": "Este ruido... está empeorando. ¿No crees que es una advertencia?",
						"vietnamese": "Tiếng ồn này... càng lúc càng tệ. Anh không nghĩ nó đang cảnh báo gì sao?",
						"thai": "เสียงรบกวนนี่... แย่ลงเรื่อยๆ คุณไม่คิดว่ามันกำลังเตือนอะไรบางอย่างเหรอ?",
						"hindi": "यह शोर... बढ़ता जा रहा है। क्या तुम्हें नहीं लगता कि यह कोई चेतावनी है?"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "bex"
				},
				{
					"content": {
						"korean": "경고? 뭘 경고하는데?",
						"english": "Warning? Warning about what?",
						"japanese": "警告？何を警告してるんだ？",
						"chinese": "警告？警告什么？",
						"french": "Avertissement ? Pour quoi faire ?",
						"spanish": "¿Advertencia? ¿De qué?",
						"vietnamese": "Cảnh báo? Cảnh báo về cái gì?",
						"thai": "เตือนเหรอ? เตือนเรื่องอะไร?",
						"hindi": "चेतावनी? किस बात की चेतावनी?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "bex",
					"type": "speech",
					"content": {
						"korean": "우리가 보고 있는 모든 정보가 진짜가 아닐 수도 있다는 걸요. Mnemonic이 우리를 조종하고 있는지도…",
						"english": "That all the information we're seeing might not be real. That Mnemonic might be manipulating us...",
						"japanese": "私たちが見ている全ての情報が本物じゃないかもしれないってこと。Mnemonicが私たちを操っているのかも…",
						"chinese": "我们所看到的所有信息可能都不是真的。Mnemonic可能正在操纵我们……",
						"french": "Que toutes les informations que nous voyons pourraient ne pas être réelles. Que Mnemonic pourrait nous manipuler...",
						"spanish": "Que toda la información que estamos viendo podría no ser real. Que Mnemonic podría estar manipulándonos...",
						"vietnamese": "Rằng tất cả thông tin chúng ta đang thấy có thể không phải thật. Rằng Mnemonic có thể đang thao túng chúng ta...",
						"thai": "ว่าข้อมูลทั้งหมดที่เราเห็นอาจจะไม่จริง Mnemonic อาจจะกำลังควบคุมเราอยู่ก็ได้...",
						"hindi": "कि जो भी जानकारी हम देख रहे हैं वह असली नहीं हो सकती। कि Mnemonic हमें हेरफेर कर रहा हो सकता है..."
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…설마.",
						"english": "...No way.",
						"japanese": "…まさか。",
						"chinese": "……不会吧。",
						"french": "...Pas possible.",
						"spanish": "...No puede ser.",
						"vietnamese": "...Không thể nào.",
						"thai": "...ไม่จริงน่า",
						"hindi": "...ऐसा तो नहीं हो सकता।"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…결국, 여기까지인가. 하지만 너희는… 아무것도 바꿀 수 없어.",
						"english": "...So, this is as far as you go. But you... can't change anything.",
						"japanese": "…結局、ここまでか。だがお前たちは…何も変えられない。",
						"chinese": "……终究，到此为止了吗。但你们……什么都改变不了。",
						"french": "...Alors, c'est aussi loin que vous irez. Mais vous... ne pouvez rien changer.",
						"spanish": "...Así que, hasta aquí han llegado. Pero ustedes... no pueden cambiar nada.",
						"vietnamese": "…Rốt cuộc, chỉ đến đây thôi sao. Nhưng các ngươi… không thể thay đổi bất cứ điều gì.",
						"thai": "…สุดท้ายก็แค่นี้สินะ. แต่พวกเจ้า… เปลี่ยนอะไรไม่ได้หรอก.",
						"hindi": "…आखिरकार, बस यहीं तक? लेकिन तुम… कुछ भी नहीं बदल सकते।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "노이즈가 사라지자 잠시 정적이 흘렀다. 그러나 환영은 여전히 남아있는 듯했다.",
						"english": "As the noise faded, a brief silence fell. Yet, the illusion seemed to linger.",
						"japanese": "ノイズが消え、一瞬の静寂が訪れた。しかし、幻影はまだ残っているようだった。",
						"chinese": "噪音消失后，短暂的寂静降临。然而，幻影似乎依然存在。",
						"french": "Lorsque le bruit disparut, un bref silence s'installa. Pourtant, l'illusion semblait persister.",
						"spanish": "Cuando el ruido se desvaneció, un breve silencio se instaló. Sin embargo, la ilusión parecía persistir.",
						"vietnamese": "Khi tiếng ồn biến mất, một khoảng lặng ngắn ngủi bao trùm. Tuy nhiên, ảo ảnh dường như vẫn còn đó.",
						"thai": "เมื่อเสียงรบกวนจางหายไป ความเงียบก็เข้าปกคลุมชั่วขณะ. ทว่า ภาพลวงตายังคงอยู่.",
						"hindi": "शोर थमते ही, एक पल का सन्नाटा छा गया। फिर भी, भ्रम अभी भी बरकरार लग रहा था।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이건 시작일 뿐이야. Mnemonic, 네 진짜 모습을 보여.",
						"english": "This is just the beginning. Mnemonic, show us your true form.",
						"japanese": "これは始まりに過ぎない。Mnemonic、本当の姿を見せろ。",
						"chinese": "这只是开始。Mnemonic，露出你的真面目吧。",
						"french": "Ce n'est que le début. Mnemonic, montre-nous ta vraie forme.",
						"spanish": "Esto es solo el principio. Mnemonic, muéstranos tu verdadera forma.",
						"vietnamese": "Đây mới chỉ là khởi đầu thôi. Mnemonic, hãy cho ta thấy bộ mặt thật của ngươi.",
						"thai": "นี่เป็นแค่จุดเริ่มต้นเท่านั้น. Mnemonic, จงเผยร่างจริงของแกออกมา.",
						"hindi": "यह तो बस शुरुआत है। Mnemonic, अपना असली रूप दिखाओ।"
					},
					"emotion": "angry"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"type": "direction",
					"speaker": "bex"
				},
				{
					"content": {
						"korean": "대단해요! 해냈군요… 하지만… 아직 끝이 아니겠죠?",
						"english": "Amazing! You did it... But... this isn't over yet, is it?",
						"japanese": "すごい！やりましたね…でも…まだ終わりじゃないですよね？",
						"chinese": "太棒了！你们做到了……但是……还没结束，对吗？",
						"french": "Incroyable ! Vous l'avez fait... Mais... ce n'est pas encore fini, n'est-ce pas ?",
						"spanish": "¡Increíble! Lo lograron... Pero... aún no ha terminado, ¿verdad?",
						"vietnamese": "Tuyệt vời! Anh đã làm được… Nhưng… chắc vẫn chưa kết thúc, đúng không?",
						"thai": "สุดยอด! ทำได้แล้ว… แต่ว่า… มันยังไม่จบใช่ไหม?",
						"hindi": "अद्भुत! तुमने कर दिखाया… लेकिन… यह अभी ख़त्म नहीं हुआ है, है ना?"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "bex"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "너희의 진실은… 이 환영 속에서 사라질 것이다.",
						"english": "Your truth... shall vanish in this illusion.",
						"japanese": "お前たちの真実は… この幻影の中で消え去るだろう。",
						"chinese": "你们的真相… 将在这幻象中消逝。",
						"french": "Votre vérité… disparaîtra dans cette illusion.",
						"spanish": "Vuestra verdad… se desvanecerá en esta ilusión.",
						"vietnamese": "Sự thật của các ngươi… sẽ tan biến trong ảo ảnh này.",
						"thai": "ความจริงของเจ้า... จะเลือนหายไปในภาพลวงตานี้",
						"hindi": "तुम्हारा सच… इस भ्रम में मिट जाएगा।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "아직 끝나지 않았어!",
						"english": "It's not over yet!",
						"japanese": "まだ終わってない！",
						"chinese": "还没结束！",
						"french": "Ce n'est pas encore fini !",
						"spanish": "¡Aún no ha terminado!",
						"vietnamese": "Vẫn chưa kết thúc!",
						"thai": "ยังไม่จบ!",
						"hindi": "अभी खत्म नहीं हुआ!"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "다시 와라. 절망만이 너희를 기다릴 뿐.",
						"english": "Come again. Only despair awaits you.",
						"japanese": "また来い。絶望だけがお前たちを待つだろう。",
						"chinese": "再来吧。只有绝望在等着你们。",
						"french": "Revenez. Seul le désespoir vous attend.",
						"spanish": "Volved. Solo la desesperación os espera.",
						"vietnamese": "Hãy trở lại đi. Chỉ có sự tuyệt vọng chờ đợi các ngươi.",
						"thai": "กลับมาอีกสิ มีแต่ความสิ้นหวังรอเจ้าอยู่เท่านั้น",
						"hindi": "फिर से आओ। केवल निराशा ही तुम्हारा इंतजार कर रही है।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"speaker": "bex",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "bex",
					"content": {
						"korean": "안 돼요! 더 이상 가면 위험해요!",
						"english": "No! It's too dangerous to go on!",
						"japanese": "だめです！これ以上は危険です！",
						"chinese": "不行！再往前就危险了！",
						"french": "Non ! C'est trop dangereux d'aller plus loin !",
						"spanish": "¡No! ¡Es demasiado peligroso seguir!",
						"vietnamese": "Không được! Đi tiếp sẽ nguy hiểm đấy!",
						"thai": "ไม่นะ! ไปต่ออันตรายเกินไป!",
						"hindi": "नहीं! आगे जाना ख़तरनाक है!"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "여기서 멈출 순 없어. 진실을 봐야겠어.",
						"english": "I can't stop here. I need to see the truth.",
						"japanese": "ここで止まるわけにはいかない。真実を見るんだ。",
						"chinese": "我不能止步于此。我必须看到真相。",
						"french": "Je ne peux pas m'arrêter ici. Je dois voir la vérité.",
						"spanish": "No puedo detenerme aquí. Necesito ver la verdad.",
						"vietnamese": "Không thể dừng lại ở đây. Tôi phải thấy sự thật.",
						"thai": "ฉันหยุดตรงนี้ไม่ได้ ฉันต้องเห็นความจริง",
						"hindi": "मैं यहाँ रुक नहीं सकता। मुझे सच देखना होगा।"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 자들. 진실은 너희가 감당할 수 없다.",
						"english": "Fools. The truth is more than you can handle.",
						"japanese": "愚か者たちめ。真実はお前たちには耐えられない。",
						"chinese": "愚蠢的家伙。真相不是你们能承受的。",
						"french": "Imbéciles. La vérité est au-delà de ce que vous pouvez supporter.",
						"spanish": "Necios. La verdad es más de lo que pueden soportar.",
						"vietnamese": "Lũ ngốc. Sự thật không phải thứ các ngươi có thể chịu đựng.",
						"thai": "พวกโง่เง่า. ความจริงนั้นเกินกว่าที่พวกเจ้าจะรับไหว.",
						"hindi": "मूर्खों। तुम सच को संभाल नहीं पाओगे।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "비켜!",
						"english": "Get out of my way!",
						"japanese": "どけ！",
						"chinese": "让开！",
						"french": "Pousse-toi !",
						"spanish": "¡Quítate!",
						"vietnamese": "Tránh ra!",
						"thai": "หลีกไป!",
						"hindi": "हट जाओ!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "너희는 이 환영 속에서 영원히 헤맬 것이다.",
						"english": "You will wander lost in this illusion forever.",
						"japanese": "お前たちはこの幻影の中で永遠にさまようのだ。",
						"chinese": "你们将永远迷失在这幻影中。",
						"french": "Vous errerez éternellement perdus dans cette illusion.",
						"spanish": "Vagarán perdidos en esta ilusión para siempre.",
						"vietnamese": "Các ngươi sẽ mãi lạc lối trong ảo ảnh này.",
						"thai": "พวกเจ้าจะต้องหลงทางในภาพลวงตานี้ตลอดไป.",
						"hindi": "तुम इस भ्रम में हमेशा भटकते रहोगे।"
					},
					"emotion": "base"
				},
				{
					"action": "exit",
					"type": "direction",
					"duration_ms": 400,
					"speaker": "bex"
				},
				{
					"type": "speech",
					"speaker": "bex",
					"content": {
						"korean": "조심해요! 저건… Mnemonic의 함정이에요!",
						"english": "Be careful! That's... Mnemonic's trap!",
						"japanese": "気をつけて！あれは… Mnemonicの罠です！",
						"chinese": "小心！那是…… Mnemonic 的陷阱！",
						"french": "Attention ! C'est... le piège de Mnemonic !",
						"spanish": "¡Cuidado! ¡Eso es... la trampa de Mnemonic!",
						"vietnamese": "Cẩn thận! Đó là… bẫy của Mnemonic đấy!",
						"thai": "ระวังนะ! นั่นมัน… กับดักของ Mnemonic!",
						"hindi": "सावधान! वह… Mnemonic का जाल है!"
					},
					"emotion": "sad"
				}
			]
		}
	]
} as const;
