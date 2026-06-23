export const scenario_modern_lovelorn_49_04 = {
	"scenario_id": "modern_lovelorn_49_04",
	"order": 4,
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
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "도시의 데이터망 깊숙이, Lovelorn의 빛이 스며들었다.",
						"english": "Deep within the city's data network, Lovelorn's light permeated.",
						"japanese": "都市のデータネットワークの奥深く、Lovelornの光が浸透していた。",
						"chinese": "深入城市的数据网络，Lovelorn的光芒渗透其中。",
						"french": "Au plus profond du réseau de données de la ville, la lumière de Lovelorn s'était infiltrée.",
						"spanish": "En lo profundo de la red de datos de la ciudad, la luz de Lovelorn se había infiltrado.",
						"vietnamese": "Sâu thẳm trong mạng lưới dữ liệu của thành phố, ánh sáng của Lovelorn đã lan tỏa.",
						"thai": "ลึกเข้าไปในเครือข่ายข้อมูลของเมือง แสงของ Lovelorn ได้แทรกซึมอยู่",
						"hindi": "शहर के डेटा नेटवर्क में गहराई तक, लवलोर्न की रोशनी फैल गई थी।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "lin",
					"spot": [
						5,
						3
					]
				},
				{
					"content": {
						"korean": "이 빛… 따뜻한데… 왜 이렇게 아파요?",
						"english": "This light… it's warm… but why does it hurt so much?",
						"japanese": "この光…温かいのに…どうしてこんなに痛むの？",
						"chinese": "这光…明明很温暖…为什么会这么痛？",
						"french": "Cette lumière… elle est chaude… mais pourquoi est-ce que ça fait si mal ?",
						"spanish": "Esta luz… es cálida… pero ¿por qué duele tanto?",
						"vietnamese": "Ánh sáng này… ấm áp… nhưng sao lại đau thế này?",
						"thai": "แสงนี้...มันอบอุ่นนะ...แต่ทำไมถึงเจ็บปวดขนาดนี้?",
						"hindi": "यह रोशनी… गर्म है… पर इतनी दर्दनाक क्यों है?"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "lin"
				},
				{
					"content": {
						"korean": "Lin? 무슨 일이야?",
						"english": "Lin? What's wrong?",
						"japanese": "リン？どうしたの？",
						"chinese": "琳？怎么了？",
						"french": "Lin ? Qu'est-ce qui se passe ?",
						"spanish": "¿Lin? ¿Qué pasa?",
						"vietnamese": "Lin? Có chuyện gì vậy?",
						"thai": "ลิน? เกิดอะไรขึ้น?",
						"hindi": "लिन? क्या हुआ?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "Lovelorn의 빛이… 사람들의 마음을 묶고 있어요.",
						"english": "Lovelorn's light is… binding people's hearts.",
						"japanese": "Lovelornの光が…人々の心を縛り付けているの。",
						"chinese": "Lovelorn的光芒…正在束缚人们的心。",
						"french": "La lumière de Lovelorn… est en train de lier les cœurs des gens.",
						"spanish": "La luz de Lovelorn… está atando los corazones de la gente.",
						"vietnamese": "Ánh sáng của Lovelorn… đang trói buộc trái tim mọi người.",
						"thai": "แสงของ Lovelorn กำลังผูกมัดหัวใจของผู้คนไว้",
						"hindi": "लवलोर्न की रोशनी… लोगों के दिलों को बांध रही है।"
					},
					"emotion": "sad",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "lin",
					"spot": [
						3,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "보세요. 저 연결고리들… 전부 Lovelorn에게 묶여 있어요.",
						"english": "Look. Those connections… they're all bound to Lovelorn.",
						"japanese": "見て。あの繋がり…全部Lovelornに繋がれているわ。",
						"chinese": "看。那些连接…都与Lovelorn相连。",
						"french": "Regardez. Ces liens… ils sont tous liés à Lovelorn.",
						"spanish": "Mira. Esas conexiones… todas están unidas a Lovelorn.",
						"vietnamese": "Nhìn kìa. Những kết nối đó… tất cả đều bị Lovelorn trói buộc.",
						"thai": "ดูสิ การเชื่อมโยงเหล่านั้น...ทั้งหมดถูกผูกมัดไว้กับ Lovelorn",
						"hindi": "देखो। वे सभी संबंध… लवलोर्न से बंधे हैं।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "맹세의 감옥…",
						"english": "A prison of vows…",
						"japanese": "誓いの監獄…",
						"chinese": "誓言的监狱…",
						"french": "Une prison de vœux…",
						"spanish": "Una prisión de votos…",
						"vietnamese": "Một nhà tù của lời thề…",
						"thai": "คุกแห่งคำสาบาน...",
						"hindi": "प्रतिज्ञाओं की जेल…"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "슬픔이 분노가 되어… 모든 것을 집어삼키려 해요.",
						"english": "Sorrow turns to rage... threatening to consume everything.",
						"japanese": "悲しみが怒りとなり…全てを飲み込もうとしています。",
						"chinese": "悲伤化作了愤怒…仿佛要吞噬一切。",
						"french": "La tristesse se transforme en rage… menaçant de tout dévorer.",
						"spanish": "La tristeza se convierte en ira… amenazando con consumirlo todo.",
						"vietnamese": "Nỗi buồn biến thành cơn thịnh nộ… định nuốt chửng mọi thứ.",
						"thai": "ความเศร้ากลายเป็นความโกรธ…คุกคามว่าจะกลืนกินทุกสิ่ง",
						"hindi": "दुःख क्रोध में बदल गया है... सब कुछ निगलने की धमकी दे रहा है।"
					},
					"emotion": "angry",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "lin",
					"spot": [
						4,
						3
					]
				},
				{
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "탈출할 방법을… 찾고 있었는데…",
						"english": "I was looking for a way to escape...",
						"japanese": "脱出する方法を…探していたのですが…",
						"chinese": "我一直在寻找…逃脱的方法…",
						"french": "Je cherchais un moyen de… m'échapper…",
						"spanish": "Estaba buscando una forma de… escapar…",
						"vietnamese": "Tôi đang tìm một cách để… thoát ra…",
						"thai": "ฉันกำลังมองหาวิธี…ที่จะหนี…",
						"hindi": "मैं भागने का… रास्ता ढूंढ रहा था…"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "방법이 있어?",
						"english": "Is there a way?",
						"japanese": "方法はあるの？",
						"chinese": "有办法吗？",
						"french": "Y a-t-il un moyen ?",
						"spanish": "¿Hay alguna forma?",
						"vietnamese": "Có cách nào không?",
						"thai": "มีทางไหม?",
						"hindi": "कोई रास्ता है क्या?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "그의 슬픔이 너무 깊어서… 이제는… 걷잡을 수가 없어요. 이 도시를 전부…",
						"english": "His sorrow is too deep... it's uncontrollable now. This entire city...",
						"japanese": "彼の悲しみが深すぎて…もう…どうすることもできません。この街全体を…",
						"chinese": "他的悲伤太深了…现在…已经无法控制。整个城市都…",
						"french": "Sa tristesse est trop profonde… c'est incontrôlable maintenant. Cette ville entière…",
						"spanish": "Su tristeza es demasiado profunda… ahora es incontrolable. Toda esta ciudad…",
						"vietnamese": "Nỗi buồn của anh ấy quá sâu… giờ không thể kiểm soát được. Cả thành phố này…",
						"thai": "ความเศร้าของเขาช่างลึกซึ้ง…ตอนนี้มันควบคุมไม่ได้แล้ว ทั้งเมืองนี้…",
						"hindi": "उसका दुःख बहुत गहरा है… अब यह बेकाबू हो गया है। यह पूरा शहर…"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "lin"
				}
			]
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
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "시간이 없어요! 이 빛이… 도시를 전부 태워버릴 거예요!",
						"english": "No time! This light... will burn down the entire city!",
						"japanese": "時間がない！この光が…街を全て焼き尽くしてしまう！",
						"chinese": "没时间了！这光…会把整个城市都烧毁的！",
						"french": "Plus de temps ! Cette lumière… va brûler toute la ville !",
						"spanish": "¡No hay tiempo! Esta luz… quemará toda la ciudad.",
						"vietnamese": "Không còn thời gian! Ánh sáng này… sẽ thiêu rụi cả thành phố!",
						"thai": "ไม่มีเวลาแล้ว! แสงนี้…จะเผาผลาญทั้งเมือง!",
						"hindi": "समय नहीं है! यह प्रकाश… पूरे शहर को जला देगा!"
					},
					"speaker": "lin"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "막아야 해.",
						"english": "We must stop it.",
						"japanese": "止めなければ。",
						"chinese": "必须阻止它。",
						"french": "Il faut l'arrêter.",
						"spanish": "Hay que detenerlo.",
						"vietnamese": "Phải ngăn chặn.",
						"thai": "ต้องหยุดมัน",
						"hindi": "इसे रोकना होगा।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "절규… 이제는… 아무것도 남지 않을 거예요!",
						"english": "Screams... now... nothing will remain!",
						"japanese": "絶叫…もう…何も残らないでしょう！",
						"chinese": "尖叫…现在…什么都不会剩下！",
						"french": "Cris… maintenant… il ne restera rien !",
						"spanish": "Gritos… ahora… ¡no quedará nada!",
						"vietnamese": "Tiếng thét… giờ đây… sẽ không còn gì!",
						"thai": "เสียงกรีดร้อง…ตอนนี้…จะไม่มีอะไรเหลืออีกแล้ว!",
						"hindi": "चीखें… अब… कुछ भी नहीं बचेगा!"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "괴물의 잔해가 데이터망 속으로 사라졌다. 그러나 감옥은 여전했다.",
						"english": "The monster's remnants vanished into the data network. But the prison remained.",
						"japanese": "怪物の残骸はデータ網の中へ消えた。しかし、監獄は変わらなかった。",
						"chinese": "怪物的残骸消失在数据网中。然而，监狱依旧存在。",
						"french": "Les restes du monstre ont disparu dans le réseau de données. Mais la prison demeurait.",
						"spanish": "Los restos del monstruo se desvanecieron en la red de datos. Pero la prisión seguía allí.",
						"vietnamese": "Tàn dư của quái vật biến mất vào mạng dữ liệu. Nhưng nhà tù vẫn còn đó.",
						"thai": "ซากอสูรหายไปในเครือข่ายข้อมูล ทว่าคุกยังคงอยู่",
						"hindi": "राक्षस के अवशेष डेटा नेटवर्क में गायब हो गए। लेकिन जेल वैसी ही थी।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "맹세는… 영원히…",
						"english": "The vow... forever...",
						"japanese": "誓いは…永遠に…",
						"chinese": "誓言…永恒…",
						"french": "Le serment… pour toujours…",
						"spanish": "El juramento... para siempre...",
						"vietnamese": "Lời thề... mãi mãi...",
						"thai": "คำสาบาน...ชั่วนิรันดร์...",
						"hindi": "शपथ… हमेशा के लिए…"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "아직 끝나지 않았어.",
						"english": "It's not over yet.",
						"japanese": "まだ終わってない。",
						"chinese": "还没结束。",
						"french": "Ce n'est pas encore fini.",
						"spanish": "Todavía no ha terminado.",
						"vietnamese": "Chưa kết thúc đâu.",
						"thai": "ยังไม่จบ",
						"hindi": "अभी खत्म नहीं हुआ है।"
					},
					"speaker": "character_any"
				},
				{
					"spot": [
						2,
						3
					],
					"speaker": "lin",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "Lovelorn님의 슬픔이… 더 커지고 있어요. 저 안으로…",
						"english": "Lovelorn's sorrow... it's growing deeper. Into there...",
						"japanese": "ラヴローン様の悲しみが…深まっている。あの奥へ…",
						"chinese": "Lovelorn大人的悲伤…越来越深了。在那里面…",
						"french": "La tristesse de Lovelorn… s'intensifie. Par là…",
						"spanish": "La tristeza de Lovelorn... se hace más profunda. Hacia allí...",
						"vietnamese": "Nỗi buồn của Lovelorn... đang càng lớn dần. Vào trong đó...",
						"thai": "ความโศกเศร้าของท่าน Lovelorn...กำลังหนักหน่วงขึ้น ไปที่นั่น...",
						"hindi": "लवलोर्न का दुख… और गहरा होता जा रहा है। उसमें…"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "도시는 Lovelorn의 분노 속으로 더 깊이 빠져들고 있었다.",
						"english": "The city was sinking deeper into Lovelorn's wrath.",
						"japanese": "街はラヴローンの怒りの中へ、さらに深く沈んでいった。",
						"chinese": "这座城市正更深地陷入Lovelorn的愤怒之中。",
						"french": "La ville s'enfonçait plus profondément dans la fureur de Lovelorn.",
						"spanish": "La ciudad se hundía más y más en la ira de Lovelorn.",
						"vietnamese": "Thành phố đang chìm sâu hơn vào cơn thịnh nộ của Lovelorn.",
						"thai": "เมืองทั้งเมืองกำลังจมลึกลงไปในโทสะของ Lovelorn",
						"hindi": "शहर लवलोर्न के क्रोध में और गहराई तक डूब रहा था।"
					},
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "맹세의 감옥이 더욱 단단히 죄어왔다.",
						"english": "The prison of vows tightened further.",
						"japanese": "誓いの監獄がさらに厳しく締め付けられた。",
						"chinese": "誓言的牢笼越收越紧。",
						"french": "La prison des serments se resserrait davantage.",
						"spanish": "La prisión de los juramentos se estrechó aún más.",
						"vietnamese": "Nhà tù lời thề càng thắt chặt hơn.",
						"thai": "เรือนจำแห่งคำสาบานรัดแน่นขึ้น",
						"hindi": "शपथ की जेल और कस गई।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "Lovelorn님을… 거스를 순 없어…",
						"english": "Lovelorn... cannot be defied...",
						"japanese": "ラヴローン様には…逆らえない…",
						"chinese": "无法…违抗Lovelorn大人…",
						"french": "Lovelorn… ne peut être défiée…",
						"spanish": "A Lovelorn... no se le puede desafiar...",
						"vietnamese": "Không thể… chống lại Lovelorn...",
						"thai": "ท่าน Lovelorn...ไม่อาจขัดขืนได้...",
						"hindi": "लवलोर्न का… विरोध नहीं किया जा सकता…"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "이대로… 끝낼 수 없어!",
						"english": "I can't end it like this!",
						"japanese": "このままじゃ… 終われない！",
						"chinese": "不能就这样… 结束！",
						"french": "Je ne peux pas finir comme ça !",
						"spanish": "¡No puedo terminar así!",
						"vietnamese": "Không thể… kết thúc như thế này được!",
						"thai": "จะให้มันจบแบบนี้… ไม่ได้!",
						"hindi": "मैं ऐसे… खत्म नहीं कर सकता!"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"spot": [
						3,
						3
					],
					"speaker": "lin",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "다시… 일어서야 해요…",
						"english": "I must rise again...",
						"japanese": "もう一度… 立ち上がらなくちゃ…",
						"chinese": "必须… 重新站起来…",
						"french": "Je dois… me relever…",
						"spanish": "Debo… levantarme de nuevo…",
						"vietnamese": "Tôi phải… đứng dậy lần nữa…",
						"thai": "ต้อง… ลุกขึ้นอีกครั้ง…",
						"hindi": "मुझे… फिर से उठना होगा…"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "뒤틀린 충성의 그림자가 길을 막았다.",
						"english": "The shadow of twisted loyalty blocked the path.",
						"japanese": "歪んだ忠誠の影が道を阻んだ。",
						"chinese": "扭曲忠诚的阴影挡住了去路。",
						"french": "L'ombre d'une loyauté tordue bloquait le chemin.",
						"spanish": "La sombra de la lealtad retorcida bloqueó el camino.",
						"vietnamese": "Bóng tối của lòng trung thành méo mó đã chặn đường.",
						"thai": "เงาแห่งความภักดีที่บิดเบือนขวางทาง",
						"hindi": "विकृत निष्ठा की छाया ने रास्ता रोक दिया।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "감히… Lovelorn님의 뜻을 거역하는가?",
						"english": "How dare you… defy Lovelorn's will?",
						"japanese": "よくも…Lovelorn様の意に背くか？",
						"chinese": "你竟敢…违抗Lovelorn大人的旨意？",
						"french": "Comment oses-tu… défier la volonté de Lovelorn ?",
						"spanish": "¿Cómo osas… desafiar la voluntad de Lovelorn?",
						"vietnamese": "Ngươi dám… chống lại ý muốn của Lovelorn sao?",
						"thai": "แกกล้า…ที่จะขัดขืนเจตจำนงของ Lovelorn งั้นรึ?",
						"hindi": "तुमने Lovelorn की इच्छा का… विरोध करने की हिम्मत कैसे की?"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 거짓된 충성심을 멈춰야 해!",
						"english": "This false loyalty must be stopped!",
						"japanese": "この偽りの忠誠心を止めなければ！",
						"chinese": "必须阻止这种虚假的忠诚！",
						"french": "Il faut arrêter cette fausse loyauté !",
						"spanish": "¡Esta falsa lealtad debe ser detenida!",
						"vietnamese": "Phải ngăn chặn lòng trung thành giả dối này!",
						"thai": "ความภักดีที่หลอกลวงนี้ต้องถูกหยุดยั้ง!",
						"hindi": "इस झूठी निष्ठा को रोकना होगा!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "당신들은 이해 못 해. 이 맹세가… 우리의 전부야.",
						"english": "You don't understand. This vow... it's our everything.",
						"japanese": "あなたたちには分からない。この誓いが…私たちの全てだ。",
						"chinese": "你们不明白。这个誓言…就是我们的一切。",
						"french": "Vous ne comprenez pas. Ce serment… c'est tout pour nous.",
						"spanish": "No lo entendéis. Este juramento... es nuestro todo.",
						"vietnamese": "Các ngươi không hiểu. Lời thề này... là tất cả của chúng ta.",
						"thai": "พวกเจ้าไม่เข้าใจ คำสาบานนี้...คือทุกสิ่งของเรา",
						"hindi": "तुम लोग नहीं समझते। यह शपथ… हमारा सब कुछ है।"
					},
					"emotion": "base"
				},
				{
					"spot": [
						1,
						3
					],
					"speaker": "lin",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "저 괴물은… Lovelorn님의 비틀린 충성을 지키는…",
						"english": "That monster... it guards Lovelorn's twisted loyalty...",
						"japanese": "あの怪物は…ラヴローン様の歪んだ忠誠を守る…",
						"chinese": "那个怪物…守护着Lovelorn大人扭曲的忠诚…",
						"french": "Ce monstre… garde la loyauté tordue de Lovelorn…",
						"spanish": "Ese monstruo... protege la lealtad retorcida de Lovelorn...",
						"vietnamese": "Con quái vật đó... bảo vệ lòng trung thành méo mó của Lovelorn...",
						"thai": "อสูรนั่น...คอยเฝ้าความภักดีที่บิดเบี้ยวของท่าน Lovelorn...",
						"hindi": "वह राक्षस… लवलोर्न की विकृत निष्ठा की रक्षा करता है…"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "lin"
				},
				{
					"type": "direction",
					"duration_ms": 400,
					"action": "exit",
					"direction": "down",
					"speaker": "lin"
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "감히… Lin마저 배신하는가!",
						"english": "How dare you… betray even Lin!",
						"japanese": "よくも…リンまで裏切るか！",
						"chinese": "竟敢…连Lin都背叛！",
						"french": "Comment osez-vous… trahir même Lin !",
						"spanish": "¡Cómo osas... traicionar incluso a Lin!",
						"vietnamese": "Dám… phản bội cả Lin!",
						"thai": "บังอาจ...ทรยศแม้กระทั่ง Lin!",
						"hindi": "हिम्मत कैसे हुई… लิน को भी धोखा देने की!"
					},
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"Lovelorn의 따스한 빛은 도시의 데이터망을 감쌌다.",
			"그러나 그 빛은 사랑이 아닌, 질긴 맹세로 영혼을 묶었다.",
			"Lin은 절규했다. 이 모든 것이… 거대한 감옥임을 깨달았다.",
			"탈출의 시간은 이미 사라지고 있었다."
		],
		"english": [
			"Lovelorn's warm light enveloped the city's data network.",
			"But that light bound souls not with love, but with an enduring vow.",
			"Lin cried out. She realized all of this was… a massive prison.",
			"The time for escape was already fading."
		],
		"japanese": [
			"Lovelornの温かい光が都市のデータネットワークを包み込んだ。",
			"しかし、その光は愛ではなく、強固な誓いで魂を縛り付けた。",
			"リンは叫んだ。これらすべてが…巨大な監獄だと悟った。",
			"脱出の時間は、すでに失われつつあった。"
		],
		"chinese": [
			"Lovelorn温暖的光芒笼罩着城市的数据网络。",
			"然而，那光并非以爱，而是以坚韧的誓言束缚着灵魂。",
			"琳尖叫起来。她意识到这一切都是…一座巨大的监狱。",
			"逃脱的时间已经消失了。"
		],
		"french": [
			"La lumière chaleureuse de Lovelorn enveloppait le réseau de données de la ville.",
			"Mais cette lumière liait les âmes non pas par amour, mais par un vœu tenace.",
			"Lin hurla. Elle réalisa que tout cela était… une immense prison.",
			"Le temps de l'évasion disparaissait déjà."
		],
		"spanish": [
			"La cálida luz de Lovelorn envolvió la red de datos de la ciudad.",
			"Pero esa luz ataba las almas no con amor, sino con un voto inquebrantable.",
			"Lin gritó. Se dio cuenta de que todo esto era... una prisión gigantesca.",
			"El tiempo para escapar ya se estaba desvaneciendo."
		],
		"vietnamese": [
			"Ánh sáng ấm áp của Lovelorn bao trùm mạng lưới dữ liệu của thành phố.",
			"Nhưng ánh sáng đó trói buộc linh hồn không phải bằng tình yêu, mà bằng một lời thề bền bỉ.",
			"Lin kêu lên. Cô nhận ra tất cả điều này… là một nhà tù khổng lồ.",
			"Thời gian để thoát thân đã dần cạn kiệt."
		],
		"thai": [
			"แสงอันอบอุ่นของ Lovelorn ได้ห่อหุ้มเครือข่ายข้อมูลของเมืองไว้",
			"แต่แสงนั้นผูกมัดจิตวิญญาณไว้ ไม่ใช่ด้วยความรัก แต่ด้วยคำสาบานอันไม่เปลี่ยนแปลง",
			"ลินกรีดร้อง เธอตระหนักว่าทั้งหมดนี้คือ...คุกขนาดมหึมา",
			"เวลาสำหรับการหลบหนีได้จางหายไปแล้ว"
		],
		"hindi": [
			"लवलोर्न की गर्म रोशनी ने शहर के डेटा नेटवर्क को घेर लिया।",
			"लेकिन वह रोशनी आत्माओं को प्यार से नहीं, बल्कि एक अटल प्रतिज्ञा से बांधती थी।",
			"लिन चिल्लाई। उसे एहसास हुआ कि यह सब… एक विशाल जेल थी।",
			"भागने का समय पहले ही खत्म हो रहा था।"
		]
	}
} as const;
