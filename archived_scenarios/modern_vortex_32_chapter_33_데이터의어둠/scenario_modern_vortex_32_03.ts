export const scenario_modern_vortex_32_03 = {
	"scenario_id": "modern_vortex_32_03",
	"order": 3,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"lin": {
			"id": "mon_d036a884-3dde-472c-9fe7-c4807643860f",
			"name": {
				"korean": "린",
				"english": "Lin",
				"japanese": "リン",
				"chinese": "琳",
				"french": "Lin",
				"spanish": "Lin",
				"vietnamese": "Lin",
				"thai": "ลิน",
				"hindi": "लिन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a095dd66-1857-4f44-68b0-2ece83006d00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/05b02694-f1ed-4e4c-b7ca-fb5b74a48900/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"도시는 모든 것을 기록했다.",
			"그러나 린의 기억은 텅 비어 있었다.",
			"Vortex의 '정화' 시스템, 그 잔혹한 실체에 다가선다.",
			"잃어버린 조각들 속에서, 진실은 기괴하게 일그러졌다."
		],
		"english": [
			"The city recorded everything.",
			"But Rin's memory was empty.",
			"Approaching the cruel reality of Vortex's 'purification' system.",
			"Among the lost fragments, the truth was grotesquely distorted."
		],
		"japanese": [
			"都市はすべてを記録した。",
			"しかし、リンの記憶は空っぽだった。",
			"Vortexの「浄化」システム、その残酷な実体に迫る。",
			"失われた断片の中で、真実は奇妙に歪んでいた。"
		],
		"chinese": [
			"城市记录了一切。",
			"然而，凛的记忆却一片空白。",
			"逼近Vortex的“净化”系统，其残酷的真相。",
			"在失落的碎片中，真相被诡异地扭曲。"
		],
		"french": [
			"La ville a tout enregistré.",
			"Mais la mémoire de Rin était vide.",
			"Approchant la cruelle réalité du système de 'purification' de Vortex.",
			"Parmi les fragments perdus, la vérité était grotesquement déformée."
		],
		"spanish": [
			"La ciudad lo registró todo.",
			"Pero la memoria de Rin estaba vacía.",
			"Acercándose a la cruel realidad del sistema de 'purificación' de Vortex.",
			"Entre los fragmentos perdidos, la verdad estaba grotescamente distorsionada."
		],
		"vietnamese": [
			"Thành phố đã ghi lại mọi thứ.",
			"Nhưng ký ức của Rin trống rỗng.",
			"Tiếp cận thực tế tàn khốc của hệ thống 'thanh lọc' của Vortex.",
			"Giữa những mảnh vỡ đã mất, sự thật bị bóp méo một cách kỳ quái."
		],
		"thai": [
			"เมืองบันทึกทุกสิ่งไว้แล้ว",
			"แต่ความทรงจำของรินว่างเปล่า",
			"เข้าใกล้ความจริงอันโหดร้ายของระบบ 'ชำระล้าง' ของ Vortex",
			"ท่ามกลางชิ้นส่วนที่หายไป ความจริงบิดเบี้ยวอย่างน่าประหลาด"
		],
		"hindi": [
			"शहर ने सब कुछ रिकॉर्ड किया।",
			"लेकिन रिन की याददाश्त खाली थी।",
			"Vortex की 'शुद्धि' प्रणाली की क्रूर वास्तविकता के करीब आ रहे हैं।",
			"खोए हुए टुकड़ों के बीच, सच्चाई विकृत रूप से विकृत हो गई थी।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "오래된 데이터 창고. 버려진 정보의 흔적이 가득했다.",
						"english": "An old data warehouse. Full of traces of discarded information.",
						"japanese": "古いデータ倉庫。捨てられた情報の痕跡がそこかしこにあった。",
						"chinese": "一个老旧的数据仓库。到处都是被遗弃信息的痕迹。",
						"french": "Un vieil entrepôt de données. Plein de traces d'informations abandonnées.",
						"spanish": "Un antiguo almacén de datos. Lleno de rastros de información descartada.",
						"vietnamese": "Một kho dữ liệu cũ. Đầy dấu vết của thông tin bị bỏ đi.",
						"thai": "คลังข้อมูลเก่า เต็มไปด้วยร่องรอยของข้อมูลที่ถูกทิ้ง",
						"hindi": "एक पुराना डेटा वेयरहाउस। परित्यक्त जानकारी के निशानों से भरा हुआ।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "lin",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "lin",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…여긴… 어디죠?",
						"english": "...Where... am I?",
						"japanese": "…ここ…どこですか？",
						"chinese": "……这里……是哪里？",
						"french": "...Où... suis-je ?",
						"spanish": "...¿Dónde... estoy?",
						"vietnamese": "...Đây... là đâu?",
						"thai": "...ที่นี่...ที่ไหน?",
						"hindi": "...यह... कहाँ है?"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "괜찮으세요? 저희가… 돕고 있어요.",
						"english": "Are you okay? We're... helping.",
						"japanese": "大丈夫ですか？私たちが…お手伝いしています。",
						"chinese": "您还好吗？我们……正在帮助您。",
						"french": "Ça va ? Nous... vous aidons.",
						"spanish": "¿Está bien? Nosotros... estamos ayudando.",
						"vietnamese": "Bạn ổn chứ? Chúng tôi... đang giúp bạn.",
						"thai": "คุณสบายดีไหม? พวกเรา...กำลังช่วยอยู่",
						"hindi": "क्या आप ठीक हैं? हम... मदद कर रहे हैं।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "뭘 돕는 거죠? 아무것도… 기억나지 않는데.",
						"english": "Helping with what? I don't... remember anything.",
						"japanese": "何を助けてくれるんですか？何も…覚えていないのに。",
						"chinese": "帮助什么？我什么都……不记得了。",
						"french": "Aider avec quoi ? Je ne... me souviens de rien.",
						"spanish": "¿Ayudar con qué? Yo no... recuerdo nada.",
						"vietnamese": "Giúp chuyện gì? Tôi không... nhớ gì cả.",
						"thai": "ช่วยเรื่องอะไร? ฉันไม่...จำอะไรได้เลย",
						"hindi": "किसमें मदद कर रहे हैं? मुझे कुछ भी... याद नहीं है।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "lin"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "당신의 잃어버린 기억을 찾는 걸요.",
						"english": "Finding your lost memories.",
						"japanese": "あなたの失われた記憶を見つけることですよ。",
						"chinese": "找回你失去的记忆。",
						"french": "Retrouver vos souvenirs perdus.",
						"spanish": "Encontrar tus recuerdos perdidos.",
						"vietnamese": "Tìm lại ký ức đã mất của bạn.",
						"thai": "ค้นหาความทรงจำที่หายไปของคุณ",
						"hindi": "आपकी खोई हुई यादें ढूंढने में।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "lin",
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"content": {
						"korean": "내 기억… 어떤 건 아예 사라진 것 같아요.",
						"english": "My memories... some seem to have vanished completely.",
						"japanese": "私の記憶…いくつか完全に消えてしまったみたいです。",
						"chinese": "我的记忆……有些好像完全消失了。",
						"french": "Mes souvenirs... certains semblent avoir complètement disparu.",
						"spanish": "Mis recuerdos... algunos parecen haber desaparecido por completo.",
						"vietnamese": "Ký ức của tôi... một số dường như đã biến mất hoàn toàn.",
						"thai": "ความทรงจำของฉัน...บางส่วนดูเหมือนจะหายไปโดยสิ้นเชิง",
						"hindi": "मेरी यादें... कुछ पूरी तरह से गायब हो गई हैं।"
					},
					"type": "speech",
					"speaker": "lin",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "지워졌다구요?",
						"english": "Erased?",
						"japanese": "消されたんですか？",
						"chinese": "被抹除了？",
						"french": "Effacé ?",
						"spanish": "¿Borrado?",
						"vietnamese": "Bị xóa ư?",
						"thai": "ถูกลบไปแล้วหรือ?",
						"hindi": "मिटा दिया गया?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"speaker": "lin",
					"content": {
						"korean": "가족이… 있었다고 들었는데… 떠오르지 않아요.",
						"english": "I heard I had family... but I can't remember.",
						"japanese": "家族がいたと聞きましたが… 思い出せません。",
						"chinese": "听说我曾有家人… 但我记不起来了。",
						"french": "J'ai entendu dire que j'avais une famille... mais je ne m'en souviens pas.",
						"spanish": "Escuché que tenía familia... pero no puedo recordarla.",
						"vietnamese": "Nghe nói tôi từng có gia đình… nhưng tôi không thể nhớ.",
						"thai": "ได้ยินว่าเคยมีครอบครัว… แต่จำไม่ได้เลย",
						"hindi": "मैंने सुना था कि मेरा परिवार था... पर मुझे याद नहीं।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "Vortex가… '정화'한 건가?",
						"english": "Did the Vortex... 'purify' it?",
						"japanese": "Vortexが…「浄化」したのか？",
						"chinese": "是Vortex…“净化”的吗？",
						"french": "Le Vortex... l'aurait-il 'purifié' ?",
						"spanish": "¿El Vórtice... lo 'purificó'?",
						"vietnamese": "Vortex… đã 'thanh tẩy' nó ư?",
						"thai": "Vortex… 'ชำระล้าง' มันหรือ?",
						"hindi": "क्या Vortex ने... इसे 'शुद्ध' किया?"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "정화… 그게 뭔가요?",
						"english": "Purification... What is that?",
						"japanese": "浄化… それは何ですか？",
						"chinese": "净化… 那是什么？",
						"french": "Purification... Qu'est-ce que c'est ?",
						"spanish": "¿Purificación... qué es eso?",
						"vietnamese": "Thanh tẩy… đó là gì?",
						"thai": "ชำระล้าง… มันคืออะไร?",
						"hindi": "शुद्धिकरण... वह क्या है?"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"speaker": "lin",
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "머릿속이 텅 비었어요. 가끔… 이상한 소리가 들려요.",
						"english": "My mind is blank. Sometimes... I hear strange noises.",
						"japanese": "頭の中が空っぽです。たまに… 変な音が聞こえます。",
						"chinese": "我脑中一片空白。有时… 会听到奇怪的声音。",
						"french": "Mon esprit est vide. Parfois... j'entends des bruits étranges.",
						"spanish": "Mi mente está en blanco. A veces... oigo ruidos extraños.",
						"vietnamese": "Đầu óc tôi trống rỗng. Đôi khi… tôi nghe thấy những âm thanh lạ.",
						"thai": "ในหัวว่างเปล่า บางครั้ง… ได้ยินเสียงแปลกๆ",
						"hindi": "मेरा मन खाली है। कभी-कभी... मुझे अजीब आवाज़ें सुनाई देती हैं।"
					},
					"speaker": "lin",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "미세한 노이즈가 뇌리를 스쳤다. 과거 기록의 섬뜩한 공백이었다.",
						"english": "A faint noise grazed my mind. It was an eerie void in past records.",
						"japanese": "微かなノイズが脳裏をよぎった。それは過去の記録における不気味な空白だった。",
						"chinese": "微弱的噪音划过脑海。那是过去记录中令人毛骨悚然的空白。",
						"french": "Un léger bruit effleura mon esprit. C'était un vide inquiétant dans les archives passées.",
						"spanish": "Un ruido tenue rozó mi mente. Era un vacío espeluznante en los registros pasados.",
						"vietnamese": "Một tiếng ồn mờ nhạt lướt qua tâm trí tôi. Đó là một khoảng trống kỳ lạ trong các ghi chép quá khứ.",
						"thai": "เสียงรบกวนจางๆ แผ่วผ่านเข้ามาในหัว มันคือความว่างเปล่าที่น่าขนลุกในบันทึกอดีต",
						"hindi": "एक हल्की आवाज़ मेरे मन से गुज़री। यह अतीत के अभिलेखों में एक भयानक रिक्तता थी।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "기억을… 조작당한 거예요.",
						"english": "Your memories... were manipulated.",
						"japanese": "記憶を… 操作されたのです。",
						"chinese": "你的记忆… 被篡改了。",
						"french": "Vos souvenirs... ont été manipulés.",
						"spanish": "Tus recuerdos... fueron manipulados.",
						"vietnamese": "Ký ức của bạn… đã bị thao túng.",
						"thai": "ความทรงจำ… ถูกบงการ",
						"hindi": "आपकी यादें... हेरफेर की गई हैं।"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "그런… 무서운 짓을… 왜?",
						"english": "Why... do such a terrifying thing?",
						"japanese": "そんな… 恐ろしいことを… なぜ？",
						"chinese": "这种… 可怕的事… 为什么？",
						"french": "Pourquoi... faire une chose si terrible ?",
						"spanish": "¿Por qué... hacer algo tan horrible?",
						"vietnamese": "Sao lại… làm điều đáng sợ như vậy?",
						"thai": "ทำไม… ถึงทำเรื่องน่ากลัวแบบนั้น?",
						"hindi": "ऐसी... भयानक चीज़... क्यों?"
					}
				},
				{
					"content": {
						"korean": "그들이 원하는… 완벽한 세상을 위해서.",
						"english": "For the perfect world... they desire.",
						"japanese": "彼らが望む… 完璧な世界のために。",
						"chinese": "为了他们想要的… 完美世界。",
						"french": "Pour le monde parfait... qu'ils désirent.",
						"spanish": "Por el mundo perfecto... que ellos desean.",
						"vietnamese": "Vì thế giới hoàn hảo… mà họ mong muốn.",
						"thai": "เพื่อโลกที่สมบูรณ์แบบ… ที่พวกเขาต้องการ",
						"hindi": "उस... पूर्ण दुनिया के लिए... जो वे चाहते हैं।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"speaker": "lin",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "제 기억 속에… 존재하지 않는 빈 페이지가 보여요.",
						"english": "In my memories... I see blank pages that shouldn't exist.",
						"japanese": "私の記憶の中に… 存在しない空白のページが見えます。",
						"chinese": "在我的记忆中… 出现了不该存在的空白页。",
						"french": "Dans mes souvenirs... je vois des pages blanches qui ne devraient pas exister.",
						"spanish": "En mis recuerdos... veo páginas en blanco que no deberían existir.",
						"vietnamese": "Trong ký ức của tôi… tôi thấy những trang trống không nên tồn tại.",
						"thai": "ในความทรงจำของฉัน… มีหน้าว่างเปล่าที่ไม่ควรมีอยู่",
						"hindi": "मेरी यादों में... मुझे ऐसे खाली पन्ने दिख रहे हैं जो मौजूद नहीं होने चाहिए।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "lin"
				},
				{
					"content": {
						"korean": "린의 깊은 기억 속, 사라진 기간의 공백이 혼란을 가중시켰다.",
						"english": "A void in Lynn's deep memories, a missing period, intensified the confusion.",
						"japanese": "リンの深い記憶の中、失われた期間の空白が混乱を加速させた。",
						"chinese": "在琳的深层记忆中，消失的空白时期加剧了混乱。",
						"french": "Dans les souvenirs profonds de Lynn, le vide de la période manquante a intensifié la confusion.",
						"spanish": "En los recuerdos profundos de Lynn, el vacío del período desaparecido intensificó la confusión.",
						"vietnamese": "Trong ký ức sâu thẳm của Lynn, khoảng trống của giai đoạn biến mất đã làm tăng thêm sự hỗn loạn.",
						"thai": "ในความทรงจำอันลึกซึ้งของลินน์ ช่องว่างของช่วงเวลาที่หายไปได้เพิ่มความสับสน.",
						"hindi": "लिन की गहरी यादों में, गुमशुदा अवधि के शून्य ने भ्रम को और बढ़ा दिया।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "단순한 삭제가 아니야. 완전한… 조작이야.",
						"english": "It's not just a simple deletion. It's a complete... manipulation.",
						"japanese": "単なる削除じゃない。完全な… 操作だ。",
						"chinese": "这不仅仅是简单的删除。这是彻底的……操纵。",
						"french": "Ce n'est pas une simple suppression. C'est une manipulation... complète.",
						"spanish": "No es una simple eliminación. Es una... manipulación completa.",
						"vietnamese": "Đây không chỉ là một sự xóa bỏ đơn thuần. Đây là một sự... thao túng hoàn toàn.",
						"thai": "ไม่ใช่แค่การลบทิ้งธรรมดา แต่มันคือการ... บงการอย่างสมบูรณ์.",
						"hindi": "यह सिर्फ एक साधारण विलोपन नहीं है। यह पूर्ण... हेरफेर है।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "난… 대체… 누구였던 거죠?",
						"english": "Who... on earth... was I?",
						"japanese": "私…一体…誰だったの？",
						"chinese": "我……到底……是谁？",
						"french": "Qui... diable... étais-je ?",
						"spanish": "¿Quién... demonios... era yo?",
						"vietnamese": "Tôi... rốt cuộc... là ai?",
						"thai": "ฉัน... ตกลงแล้ว... เป็นใครกันแน่?",
						"hindi": "मैं... आख़िर... कौन था?"
					},
					"type": "speech",
					"speaker": "lin",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "Vortex… 널 용서하지 않을 거야.",
						"english": "Vortex... I won't forgive you.",
						"japanese": "Vortex… 貴様を許さない。",
						"chinese": "Vortex……我不会原谅你。",
						"french": "Vortex... je ne te pardonnerai pas.",
						"spanish": "Vortex... no te perdonaré.",
						"vietnamese": "Vortex... ta sẽ không tha thứ cho ngươi.",
						"thai": "Vortex... ฉันจะไม่ให้อภัยแก.",
						"hindi": "Vortex... मैं तुम्हें माफ़ नहीं करूँगा।"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "두려워요… 이 이상은…",
						"english": "I'm scared... I can't take any more.",
						"japanese": "怖いです…これ以上は…",
						"chinese": "我很害怕……不能再这样下去了……",
						"french": "J'ai peur... Je n'en peux plus...",
						"spanish": "Tengo miedo... No puedo más...",
						"vietnamese": "Tôi sợ lắm... không thể chịu đựng hơn nữa...",
						"thai": "ฉันกลัว... ไม่ไหวแล้ว...",
						"hindi": "मैं डरा हुआ हूँ... और नहीं..."
					},
					"speaker": "lin",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 무너졌다. 하지만 섬뜩한 기운은 사라지지 않았다.",
						"english": "The colossal shadow collapsed. Yet, the ominous aura lingered.",
						"japanese": "巨大な影は崩れ落ちた。しかし、不気味な気配は消えなかった。",
						"chinese": "巨大的阴影坍塌了。然而，那股诡异的气息并未消散。",
						"french": "L'ombre colossale s'effondra. Pourtant, l'aura sinistre persistait.",
						"spanish": "La sombra colosal se derrumbó. Aun así, el aura siniestra permanecía.",
						"vietnamese": "Bóng tối khổng lồ sụp đổ. Tuy nhiên, khí tức đáng sợ vẫn còn đó.",
						"thai": "เงาขนาดมหึมาล่มสลายลง ทว่ารังสีอันน่าขนลุกยังไม่จางหายไป",
						"hindi": "विशालकाय छाया ढह गई। फिर भी, अशुभ आभा बनी रही।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "lin",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…넌 아직 아무것도 모른다. 진정한… 공백을.",
						"english": "...You still know nothing. Of the true... Void.",
						"japanese": "…お前はまだ何も知らない。真の…空虚を。",
						"chinese": "……你还一无所知。关于真正的……虚空。",
						"french": "...Tu ne sais encore rien. Du véritable... Vide.",
						"spanish": "...Todavía no sabes nada. Del verdadero... Vacío.",
						"vietnamese": "...Ngươi vẫn chưa biết gì cả. Về sự... Hư Không thật sự.",
						"thai": "...เจ้ายังไม่รู้อะไรเลย. เกี่ยวกับ...ความว่างเปล่าที่แท้จริง.",
						"hindi": "...तुम अभी भी कुछ नहीं जानते। असली... शून्य के बारे में।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "무슨 소리야!",
						"english": "What are you talking about?!",
						"japanese": "何を言ってるんだ！",
						"chinese": "你在说什么！",
						"french": "De quoi parles-tu ?!",
						"spanish": "¡¿Qué dices?!",
						"vietnamese": "Ngươi nói cái gì?!",
						"thai": "เจ้าพูดอะไร!",
						"hindi": "यह क्या बकवास है!"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "너희의 기록도… 언젠가 사라질 것이다.",
						"english": "Your records too... will someday vanish.",
						"japanese": "お前たちの記録も…いつか消え去るだろう。",
						"chinese": "你们的记录……终有一天也会消失。",
						"french": "Vos registres aussi... disparaîtront un jour.",
						"spanish": "Vuestros registros también... desaparecerán algún día.",
						"vietnamese": "Ghi chép của các ngươi cũng... rồi sẽ biến mất.",
						"thai": "บันทึกของพวกเจ้า... ก็จะเลือนหายไปในสักวัน",
						"hindi": "तुम्हारे अभिलेख भी... कभी न कभी मिट जाएंगे।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "…텅 빈 페이지가… 다시… 떠오르는 것 같아…",
						"english": "...An empty page... seems to... reappear...",
						"japanese": "…空っぽのページが…再び…浮かび上がるようだ…。",
						"chinese": "……空白的页面……似乎……再次……浮现了……",
						"french": "...Une page vide... semble... réapparaître...",
						"spanish": "...Una página en blanco... parece... resurgir...",
						"vietnamese": "...Một trang giấy trống rỗng... dường như... lại... hiện lên...",
						"thai": "...หน้ากระดาษที่ว่างเปล่า... ดูเหมือนจะ... กลับมา... อีกครั้ง...",
						"hindi": "...एक खाली पन्ना... फिर से... उभरता हुआ... सा लगता है..."
					},
					"type": "speech",
					"speaker": "lin",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "우린 막아낼 거야. 모든 걸 되찾을 때까지.",
						"english": "We will stop it. Until we reclaim everything.",
						"japanese": "俺たちは食い止める。全てを取り戻すまで。",
						"chinese": "我们会阻止它。直到我们夺回一切。",
						"french": "Nous l'arrêterons. Jusqu'à ce que nous récupérions tout.",
						"spanish": "Lo detendremos. Hasta que recuperemos todo.",
						"vietnamese": "Chúng ta sẽ ngăn chặn nó. Cho đến khi đoạt lại mọi thứ.",
						"thai": "เราจะหยุดมันให้ได้ จนกว่าเราจะทวงคืนทุกสิ่งกลับมา",
						"hindi": "हम इसे रोकेंगे। जब तक हम सब कुछ वापस नहीं ले लेते।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "기억의 파편들이 다시 흩어지는 듯했다. 진실은 아직 멀리 있었다.",
						"english": "Fragments of memory seemed to scatter again. The truth was still far off.",
						"japanese": "記憶の破片が再び散らばるようだった。真実はまだ遠かった。",
						"chinese": "记忆的碎片似乎再次散落。真相仍遥不可及。",
						"french": "Les fragments de mémoire semblaient se disperser à nouveau. La vérité était encore lointaine.",
						"spanish": "Los fragmentos de memoria parecían dispersarse de nuevo. La verdad aún estaba lejos.",
						"vietnamese": "Những mảnh ký ức dường như lại tan biến. Sự thật vẫn còn xa vời.",
						"thai": "เศษเสี้ยวความทรงจำดูเหมือนจะกระจัดกระจายไปอีกครั้ง ความจริงยังคงอยู่ห่างไกล",
						"hindi": "यादों के टुकड़े फिर से बिखरते हुए प्रतीत हुए। सच्चाई अभी भी बहुत दूर थी।"
					},
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "강력한 힘에 모든 것이 뒤틀렸다. 기억조차 사라지는 듯했다.",
						"english": "Everything was distorted by a powerful force. Even memories seemed to vanish.",
						"japanese": "強大な力に全てが歪められた。記憶すら消え去るようだった。",
						"chinese": "一切都被强大的力量扭曲了。连记忆都仿佛正在消散。",
						"french": "Tout fut distordu par une force puissante. Même les souvenirs semblaient s'évanouir.",
						"spanish": "Todo fue distorsionado por una fuerza poderosa. Incluso los recuerdos parecían desvanecerse.",
						"vietnamese": "Mọi thứ bị bóp méo bởi một sức mạnh khủng khiếp. Ngay cả ký ức cũng dường như biến mất.",
						"thai": "ทุกสิ่งบิดเบี้ยวด้วยพลังอันแข็งแกร่ง แม้แต่ความทรงจำก็ดูเหมือนจะเลือนหายไป",
						"hindi": "एक शक्तिशाली बल से सब कुछ विकृत हो गया। यहां तक कि यादें भी गायब होती दिख रही थीं।"
					}
				},
				{
					"content": {
						"korean": "무의미한 저항. 너희의 존재 자체가 사라질 것이다.",
						"english": "Futile resistance. Your very existence will vanish.",
						"japanese": "無意味な抵抗だ。お前たちの存在そのものが消え去るだろう。",
						"chinese": "无谓的抵抗。你们的存在本身都将消失。",
						"french": "Résistance futile. Votre existence même disparaîtra.",
						"spanish": "Resistencia inútil. Vuestra existencia misma desaparecerá.",
						"vietnamese": "Kháng cự vô nghĩa. Sự tồn tại của các ngươi sẽ biến mất.",
						"thai": "การต่อต้านที่ไร้ความหมาย ตัวตนของพวกเจ้าจะหายไป",
						"hindi": "व्यर्थ प्रतिरोध। तुम्हारा अस्तित्व ही मिट जाएगा।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…아직 포기 못 해. Lin의 기억을… 모두의 기록을 되찾을 거야.",
						"english": "...I can't give up yet. I'll get Lin's memories... everyone's records back.",
						"japanese": "…まだ諦めない。Linの記憶を… みんなの記録を取り戻すんだ。",
						"chinese": "…我还不能放弃。Lin的记忆… 我要找回所有人的记录。",
						"french": "...Je ne peux pas encore abandonner. Je récupérerai les souvenirs de Lin... les archives de tout le monde.",
						"spanish": "...Todavía no puedo rendirme. Recuperaré los recuerdos de Lin... los registros de todos.",
						"vietnamese": "...Tôi chưa thể từ bỏ. Tôi sẽ lấy lại ký ức của Lin... và cả ghi chép của mọi người.",
						"thai": "...ยังยอมแพ้ไม่ได้ ฉันจะเอาความทรงจำของ Lin... และบันทึกของทุกคนกลับคืนมา",
						"hindi": "...मैं अभी हार नहीं मान सकता। Lin की यादें... सबकी स्मृतियाँ वापस लाऊँगा।"
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "가련한 자. 다시 와봐라. 또 지워줄 테니.",
						"english": "Pitiful one. Come again. I'll erase you again.",
						"japanese": "哀れな者め。また来るがいい。また消してやろう。",
						"chinese": "可怜的家伙。再来试试吧。我会再次将你抹去。",
						"french": "Pauvre créature. Reviens donc. Je t'effacerai de nouveau.",
						"spanish": "Criatura patética. Vuelve a intentarlo. Te borraré de nuevo.",
						"vietnamese": "Kẻ đáng thương. Cứ quay lại đi. Ta sẽ xóa sổ ngươi lần nữa.",
						"thai": "ช่างน่าสมเพชนัก จงกลับมาอีกครั้งสิ ข้าจะลบเจ้าอีกครั้ง",
						"hindi": "दयनीय प्राणी। फिर आओ। मैं तुम्हें फिर मिटा दूँगा।"
					},
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "잃어버린 기억의 끝. 거대한 그림자가 기다리고 있었다.",
						"english": "At the end of lost memories, a colossal shadow awaited.",
						"japanese": "失われた記憶の果て。巨大な影が待ち構えていた。",
						"chinese": "失去记忆的尽头。一个巨大的影子在等待着。",
						"french": "Au bout des souvenirs perdus. Une ombre immense attendait.",
						"spanish": "Al final de los recuerdos perdidos. Una sombra gigantesca esperaba.",
						"vietnamese": "Cuối cùng của ký ức đã mất. Một bóng đen khổng lồ đang chờ đợi.",
						"thai": "สุดปลายความทรงจำที่หายไป เงาขนาดมหึมากำลังรออยู่.",
						"hindi": "खोई हुई यादों के अंत में। एक विशाल परछाई इंतज़ार कर रही थी।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "하찮은 인간들. 잊혀진 기억을 좇는가?",
						"english": "Insignificant humans. Do you pursue forgotten memories?",
						"japanese": "くだらない人間ども。忘れられた記憶を追うのか？",
						"chinese": "渺小的人类。你们追逐被遗忘的记忆吗？",
						"french": "Humains insignifiants. Poursuivez-vous des souvenirs oubliés ?",
						"spanish": "Humanos insignificantes. ¿Perseguís recuerdos olvidados?",
						"vietnamese": "Hỡi loài người nhỏ bé. Các ngươi đang theo đuổi những ký ức bị lãng quên sao?",
						"thai": "มนุษย์ไร้ค่า พวกเจ้ากำลังตามล่าความทรงจำที่ถูกลืมงั้นรึ?",
						"hindi": "तुच्छ मनुष्यो। क्या तुम भूली हुई यादों का पीछा करते हो?"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "네가 꾸민 짓이구나!",
						"english": "You're behind this!",
						"japanese": "お前の仕業か！",
						"chinese": "原来是你搞的鬼！",
						"french": "C'est donc ton œuvre !",
						"spanish": "¡Así que fuiste tú!",
						"vietnamese": "Thì ra là ngươi làm!",
						"thai": "นี่มันฝีมือแกนี่!",
						"hindi": "तो यह तुम्हारा काम था!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "기억은 고통만 줄 뿐. 사라지는 것이 순리다.",
						"english": "Memories only bring pain. It is natural for them to disappear.",
						"japanese": "記憶は苦痛を与えるだけだ。消え去るのが道理だ。",
						"chinese": "记忆只会带来痛苦。消失是顺理成章的。",
						"french": "Les souvenirs n'apportent que de la douleur. Il est naturel qu'ils disparaissent.",
						"spanish": "Los recuerdos solo traen dolor. Es natural que desaparezcan.",
						"vietnamese": "Ký ức chỉ mang lại đau khổ. Biến mất là lẽ thường tình.",
						"thai": "ความทรงจำนำมาซึ่งความเจ็บปวดเท่านั้น การหายไปคือเรื่องปกติ.",
						"hindi": "यादें केवल दर्द देती हैं। उनका मिट जाना ही स्वाभाविक है।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "아니야… 내 기억…!",
						"english": "No... my memories...!",
						"japanese": "違う…私の記憶…！",
						"chinese": "不……我的记忆……！",
						"french": "Non... mes souvenirs...!",
						"spanish": "¡No... mis recuerdos...!",
						"vietnamese": "Không... ký ức của tôi...!",
						"thai": "ไม่จริง... ความทรงจำของฉัน...!",
						"hindi": "नहीं... मेरी यादें...!"
					},
					"type": "speech",
					"speaker": "lin",
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "닥쳐! 네가 뭔데 우리 기억을 뺏어가!",
						"english": "Shut up! Who are you to steal our memories?!",
						"japanese": "黙れ！お前は何者だ、俺たちの記憶を奪うなんて！",
						"chinese": "闭嘴！你凭什么夺走我们的记忆！",
						"french": "Tais-toi ! Qui es-tu pour voler nos souvenirs ?!",
						"spanish": "¡Cállate! ¿Quién eres tú para robarnos nuestros recuerdos?",
						"vietnamese": "Câm mồm! Ngươi là ai mà dám cướp ký ức của chúng ta!",
						"thai": "หุบปาก! แกเป็นใครถึงได้มาขโมยความทรงจำของพวกเรา!",
						"hindi": "चुप रहो! तुम कौन होते हो हमारी यादें चुराने वाले!"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "…이것이 너희의 끝이다.",
						"english": "...This is your end.",
						"japanese": "…これが貴様らの終わりだ。",
						"chinese": "……这就是你们的终结。",
						"french": "...C'est votre fin.",
						"spanish": "...Este es vuestro fin.",
						"vietnamese": "...Đây là kết cục của các ngươi.",
						"thai": "...นี่คือจุดจบของพวกเจ้า.",
						"hindi": "...यह तुम्हारा अंत है।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				}
			]
		}
	]
} as const;
