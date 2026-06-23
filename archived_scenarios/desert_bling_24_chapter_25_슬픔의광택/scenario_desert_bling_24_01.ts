export const scenario_desert_bling_24_01 = {
	"scenario_id": "desert_bling_24_01",
	"order": 1,
	"act": "intro",
	"theme": "desert",
	"actors": {
		"amir": {
			"id": "mon_0096d602-52ab-4a9c-9cc8-4ff18ed3b655",
			"name": {
				"korean": "아미르",
				"english": "Amir",
				"japanese": "アミール",
				"chinese": "阿米尔",
				"french": "Amir",
				"spanish": "Amir",
				"vietnamese": "Amir",
				"thai": "อาเมียร์",
				"hindi": "अमीर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8cd60fb0-3699-44c4-6425-a3e97eec1800/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/b644dc95-9c27-442e-6dc6-73e5550a0200/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"황금빛 모래 사막, 죽음의 빛으로 물들었다.",
			"모든 것이 차가운 유리 조각으로 변한다.",
			"모래시계의 저주가 시작되고, 시간은 흐른다.",
			"비극은, 이제 막 서막을 열었을 뿐이다."
		],
		"english": [
			"Golden sand desert, stained with the light of death.",
			"Everything turns into cold shards of glass.",
			"The curse of the hourglass begins, and time flows.",
			"The tragedy has only just begun."
		],
		"japanese": [
			"黄金の砂漠が、死の光に染まった。",
			"全てが冷たいガラスの破片に変わる。",
			"砂時計の呪いが始まり、時間は流れる。",
			"悲劇は、まだ序幕を開けたばかりだ。"
		],
		"chinese": [
			"金色的沙海，被死亡之光浸染。",
			"一切都变成了冰冷的玻璃碎片。",
			"沙漏的诅咒开始了，时间流逝。",
			"悲剧，才刚刚拉开序幕。"
		],
		"french": [
			"Le désert de sable doré, teinté par la lumière de la mort.",
			"Tout se transforme en froids éclats de verre.",
			"La malédiction du sablier commence, et le temps s'écoule.",
			"La tragédie ne fait que commencer."
		],
		"spanish": [
			"El desierto de arena dorada, teñido por la luz de la muerte.",
			"Todo se convierte en fríos fragmentos de cristal.",
			"La maldición del reloj de arena comienza, y el tiempo fluye.",
			"La tragedia apenas ha abierto su telón."
		],
		"vietnamese": [
			"Sa mạc cát vàng, nhuốm màu ánh sáng chết chóc.",
			"Mọi thứ biến thành những mảnh thủy tinh lạnh giá.",
			"Lời nguyền đồng hồ cát bắt đầu, thời gian trôi đi.",
			"Bi kịch, chỉ vừa mới mở màn."
		],
		"thai": [
			"ทะเลทรายสีทอง ถูกย้อมด้วยแสงแห่งความตาย",
			"ทุกสิ่งกลายเป็นเศษแก้วที่เย็นยะเยือก",
			"คำสาปแห่งนาฬิกาทรายเริ่มต้นขึ้น และกาลเวลาไหลไป",
			"โศกนาฏกรรมเพิ่งจะเปิดฉากขึ้นเท่านั้น"
		],
		"hindi": [
			"सुनहरी रेत का रेगिस्तान, मृत्यु के प्रकाश से रंग गया।",
			"सब कुछ ठंडे कांच के टुकड़ों में बदल जाता है।",
			"रेतघड़ी का श्राप शुरू होता है, और समय बहता है।",
			"त्रासदी तो अभी बस शुरू हुई है।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "끝없이 펼쳐진 사막. 섬뜩하게 반짝이는 유리질 모래가 발밑에서 부서졌다.",
						"english": "An endlessly stretching desert. Eerily shimmering glassy sand crumbled underfoot.",
						"japanese": "果てしなく広がる砂漠。不気味に輝くガラス質の砂が足元で砕けた。",
						"chinese": "无边无际的沙漠。脚下，泛着诡异光芒的玻璃质沙砾碎裂开来。",
						"french": "Un désert s'étendant à l'infini. Le sable vitreux, étrangement scintillant, s'écrasait sous mes pieds.",
						"spanish": "Un desierto que se extiende sin fin. La arena vítrea, espeluznantemente brillante, se desmoronaba bajo mis pies.",
						"vietnamese": "Một sa mạc trải dài vô tận. Cát thủy tinh lấp lánh kỳ dị vỡ vụn dưới chân.",
						"thai": "ทะเลทรายที่ทอดยาวไม่มีที่สิ้นสุด ทรายแก้วที่เปล่งประกายอย่างน่าขนลุกแตกละเอียดใต้ฝ่าเท้า",
						"hindi": "एक अंतहीन फैला हुआ रेगिस्तान। डरावनी चमकती हुई कांच जैसी रेत पैरों के नीचे टूट गई।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이게… 뭐야. 사막이 얼어붙은 것 같아.",
						"english": "What… is this? It's like the desert has frozen.",
						"japanese": "これ… 何だ？砂漠が凍りついたみたいだ。",
						"chinese": "这… 是什么？沙漠好像被冻住了。",
						"french": "Qu'est-ce que... c'est ? On dirait que le désert a gelé.",
						"spanish": "¿Qué… es esto? Parece que el desierto se ha congelado.",
						"vietnamese": "Cái… gì đây? Sa mạc như bị đóng băng vậy.",
						"thai": "นี่มัน… อะไรกัน? เหมือนทะเลทรายจะแข็งตัวเลย",
						"hindi": "यह… क्या है? ऐसा लगता है जैसे रेगिस्तान जम गया हो।"
					},
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"spot": [
						5,
						2
					],
					"type": "direction",
					"speaker": "amir",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "amir",
					"content": {
						"korean": "제발… 도와줘요. 사막이… 유리로 변하고 있어요.",
						"english": "Please… help me. The desert… is turning into glass.",
						"japanese": "お願い… 助けてください。砂漠が… ガラスに変わっています。",
						"chinese": "拜托了… 救救我。沙漠… 正在变成玻璃。",
						"french": "S'il vous plaît… aidez-moi. Le désert… est en train de se transformer en verre.",
						"spanish": "Por favor… ayúdame. El desierto… se está convirtiendo en cristal.",
						"vietnamese": "Làm ơn… giúp tôi với. Sa mạc… đang biến thành thủy tinh.",
						"thai": "ได้โปรด… ช่วยฉันด้วย ทะเลทราย… กำลังกลายเป็นแก้ว",
						"hindi": "कृपया… मेरी मदद करें। रेगिस्तान… कांच में बदल रहा है।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "무슨 일이야? 설명해.",
						"english": "What's going on? Explain.",
						"japanese": "何があった？説明してくれ。",
						"chinese": "发生什么事了？解释一下。",
						"french": "Que se passe-t-il ? Expliquez.",
						"spanish": "¿Qué está pasando? Explica.",
						"vietnamese": "Chuyện gì vậy? Giải thích đi.",
						"thai": "เกิดอะไรขึ้น? อธิบายมา",
						"hindi": "क्या हो रहा है? बताओ।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "모래시계의 저주예요. 사막의 심장이 타오르면… 모든 게 유리 묘지가 될 거예요.",
						"english": "It's the curse of the hourglass. If the desert's heart burns… everything will become a glass graveyard.",
						"japanese": "砂時計の呪いです。砂漠の心臓が燃え上がれば… 全てがガラスの墓場になるでしょう。",
						"chinese": "这是沙漏的诅咒。如果沙漠的心脏燃烧起来… 一切都会变成玻璃墓地。",
						"french": "C'est la malédiction du sablier. Si le cœur du désert s'embrase… tout deviendra un cimetière de verre.",
						"spanish": "Es la maldición del reloj de arena. Si el corazón del desierto arde… todo se convertirá en un cementerio de cristal.",
						"vietnamese": "Đó là lời nguyền của đồng hồ cát. Nếu trái tim sa mạc bùng cháy… mọi thứ sẽ trở thành một nghĩa địa thủy tinh.",
						"thai": "มันคือคำสาปแห่งนาฬิกาทราย ถ้าหัวใจของทะเลทรายลุกไหม้… ทุกสิ่งจะกลายเป็นสุสานแก้ว",
						"hindi": "यह रेतघड़ी का श्राप है। अगर रेगिस्तान का दिल जल उठेगा… तो सब कुछ कांच का कब्रिस्तान बन जाएगा।"
					},
					"speaker": "amir"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "낡은 상인 일지에서 뭔가를 발견했다.",
						"english": "I found something in an old merchant's log.",
						"japanese": "古い商人の日誌から何かを発見した。",
						"chinese": "在一本旧商人日志中发现了一些东西。",
						"french": "J'ai découvert quelque chose dans le journal d'un vieux marchand.",
						"spanish": "Encontré algo en el diario de un viejo mercader.",
						"vietnamese": "Tôi đã tìm thấy gì đó trong nhật ký của một thương nhân cũ.",
						"thai": "ฉันเจออะไรบางอย่างในบันทึกของพ่อค้าเก่า",
						"hindi": "मैंने एक पुराने व्यापारी के लॉग में कुछ पाया।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "'모든 것을 반짝이게 하려는 광기에 사로잡힌 존재'…",
						"english": "'A being consumed by a madness to make everything sparkle'...",
						"japanese": "「すべてを輝かせようとする狂気に囚われた存在」…",
						"chinese": "“被使一切闪闪发光的狂热所困的生物”……",
						"french": "« Une entité possédée par la folie de tout faire scintiller »…",
						"spanish": "'Un ser consumido por la locura de hacerlo todo brillar'...",
						"vietnamese": "'Một thực thể bị ám ảnh bởi sự điên cuồng muốn biến mọi thứ lấp lánh'...",
						"thai": "สิ่งมีชีวิตที่ถูกครอบงำด้วยความบ้าคลั่งที่จะทำให้ทุกสิ่งส่องประกาย...",
						"hindi": "'एक सत्ता जो सब कुछ चमकाने की सनक में डूबी हुई है'..."
					},
					"speaker": "character_1"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "amir",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "amir",
					"content": {
						"korean": "시간이… 얼마 없어요. 이대로 가면…",
						"english": "Time... is running out. If this continues...",
						"japanese": "時間が…あまりありません。このままでは…",
						"chinese": "“时间……不多了。如果这样下去……”",
						"french": "« Il ne reste… plus beaucoup de temps. Si ça continue comme ça… »",
						"spanish": "No queda... mucho tiempo. Si esto sigue así...",
						"vietnamese": "Thời gian... không còn nhiều. Nếu cứ thế này...",
						"thai": "เวลา...มีไม่มากแล้ว ถ้าเป็นอย่างนี้ต่อไป...",
						"hindi": "समय... कम है। अगर ऐसा ही चलता रहा तो..."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "진정해, 아미르. 우리가 막을 거야.",
						"english": "Calm down, Amir. We'll stop it.",
						"japanese": "落ち着いて、アミール。私たちが止める。",
						"chinese": "“冷静点，阿米尔。我们会阻止它的。”",
						"french": "« Calme-toi, Amir. Nous l'arrêterons. »",
						"spanish": "Cálmate, Amir. Lo detendremos.",
						"vietnamese": "Bình tĩnh đi, Amir. Chúng ta sẽ ngăn chặn nó.",
						"thai": "ใจเย็นไว้, อามีร์. เราจะหยุดมันเอง.",
						"hindi": "शांत हो जाओ, अमीर। हम इसे रोकेंगे।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "막을 수 없어요. 너무 늦었어요. 이 사막 전체가…",
						"english": "We can't stop it. It's too late. This entire desert...",
						"japanese": "止められません。もう遅すぎます。この砂漠全体が…",
						"chinese": "“我们阻止不了。太晚了。整个沙漠都……”",
						"french": "« On ne peut pas l'arrêter. C'est trop tard. Tout ce désert… »",
						"spanish": "No podemos detenerlo. Es demasiado tarde. Todo este desierto...",
						"vietnamese": "Không thể ngăn chặn được. Quá muộn rồi. Toàn bộ sa mạc này...",
						"thai": "เราหยุดมันไม่ได้แล้ว สายเกินไป ทะเลทรายทั้งหมดนี้...",
						"hindi": "हम इसे रोक नहीं सकते। बहुत देर हो चुकी है। यह पूरा रेगिस्तान..."
					},
					"speaker": "amir"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "쓸데없는 소리 마. 방법은 있어.",
						"english": "Don't talk nonsense. There's a way.",
						"japanese": "無駄なことを言うな。方法はまだある。",
						"chinese": "“别说废话。总有办法的。”",
						"french": "« Ne dis pas de bêtises. Il y a un moyen. »",
						"spanish": "No digas tonterías. Hay una forma.",
						"vietnamese": "Đừng nói vô ích. Có cách mà.",
						"thai": "อย่าพูดไร้สาระ มีทางออกเสมอ.",
						"hindi": "बेकार की बातें मत करो। कोई रास्ता है।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"speaker": "amir",
					"action": "enter"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "아무도… 내 말을 믿지 않았어요. 결국 이렇게…",
						"english": "No one... believed me. In the end, it came to this...",
						"japanese": "誰も…私の言葉を信じてくれなかった。結局こうなって…",
						"chinese": "“没有人……相信我。最终还是这样了……”",
						"french": "« Personne… ne m'a cru. Finalement, ça en est arrivé là… »",
						"spanish": "Nadie... me creyó. Al final, todo terminó así...",
						"vietnamese": "Không ai... tin tôi. Cuối cùng thì... mọi chuyện ra nông nỗi này...",
						"thai": "ไม่มีใคร...เชื่อฉันเลย สุดท้ายก็เป็นแบบนี้...",
						"hindi": "किसी ने... मेरी बात नहीं मानी। अंत में, ऐसा हो गया..."
					},
					"speaker": "amir",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "더 이상 슬퍼할 시간 없어. 우린 멈추지 않아.",
						"english": "No more time for sorrow. We won't stop.",
						"japanese": "これ以上悲しむ時間はない。私たちは止まらない。",
						"chinese": "“没有更多时间悲伤了。我们不会停下来。”",
						"french": "« Plus le temps de s'apitoyer. Nous ne nous arrêterons pas. »",
						"spanish": "No hay más tiempo para la tristeza. No nos detendremos.",
						"vietnamese": "Không còn thời gian để buồn nữa. Chúng ta sẽ không dừng lại.",
						"thai": "ไม่มีเวลาเศร้าอีกแล้ว เราจะไม่หยุด.",
						"hindi": "दुःख के लिए और समय नहीं है। हम रुकेंगे नहीं।"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "amir",
					"content": {
						"korean": "하지만 저주는… 멈출 수 없어요. 그는… 무자비해요.",
						"english": "But the curse... can't be stopped. He's... merciless.",
						"japanese": "しかし呪いは…止められない。彼は…無慈悲だ。",
						"chinese": "“但是诅咒……无法阻止。他……是无情的。”",
						"french": "« Mais la malédiction… ne peut être arrêtée. Il est… impitoyable. »",
						"spanish": "Pero la maldición... no se puede detener. Él es... implacable.",
						"vietnamese": "Nhưng lời nguyền... không thể ngăn chặn. Hắn... tàn nhẫn lắm.",
						"thai": "แต่คำสาป...หยุดไม่ได้ เขา...ไร้ความปรานี.",
						"hindi": "लेकिन श्राप... रोका नहीं जा सकता। वह... निर्मम है।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "누가 뭔데? 대체 누가 이런 짓을…!",
						"english": "Who is it? Who on earth is doing this...!",
						"japanese": "誰だ？一体誰がこんなことを…！",
						"chinese": "“是谁？到底是谁干的……！”",
						"french": "« Qui est-ce ? Qui diable fait ça… ! »",
						"spanish": "¿Quién es? ¿Quién demonios está haciendo esto...?",
						"vietnamese": "Ai vậy? Rốt cuộc là ai đã làm chuyện này...!",
						"thai": "ใครกัน? ใครกันแน่ที่ทำแบบนี้...!",
						"hindi": "कौन है? आखिर कौन कर रहा है ये सब...!"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "유리화는 멈추지 않았다. 길은 점점 더 차가운 거울이 되었다.",
						"english": "The glassification didn't stop. The path became an increasingly cold mirror.",
						"japanese": "ガラス化は止まらなかった。道はますます冷たい鏡となった。",
						"chinese": "“玻璃化没有停止。道路逐渐变成了一面冰冷的镜子。”",
						"french": "« La vitrification ne s'arrêtait pas. Le chemin devenait un miroir de plus en plus froid. »",
						"spanish": "La vitrificación no se detuvo. El camino se convirtió en un espejo cada vez más frío.",
						"vietnamese": "Sự thủy tinh hóa không ngừng lại. Con đường ngày càng trở thành một tấm gương lạnh lẽo.",
						"thai": "การกลายเป็นแก้วไม่หยุดนิ่ง ทางเดินกลายเป็นกระจกที่เย็นยะเยือกขึ้นเรื่อยๆ",
						"hindi": "कांच में बदलना बंद नहीं हुआ। रास्ता धीरे-धीरे एक ठंडे दर्पण में बदल गया।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"spot": [
						2,
						2
					],
					"type": "direction",
					"action": "enter",
					"speaker": "amir",
					"duration_ms": 500
				},
				{
					"speaker": "amir",
					"content": {
						"korean": "이젠… 돌아갈 수 없어요. 모래시계가… 거의 다 비워졌어.",
						"english": "There's no turning back now... The hourglass is almost empty.",
						"japanese": "もう…引き返せない。砂時計が…もうほとんど空っぽだ。",
						"chinese": "已经…回不去了。沙漏…快要空了。",
						"french": "On ne peut plus… faire marche arrière. Le sablier est… presque vide.",
						"spanish": "Ya no… podemos volver atrás. El reloj de arena… está casi vacío.",
						"vietnamese": "Không thể… quay lại nữa rồi. Đồng hồ cát… gần cạn rồi.",
						"thai": "ตอนนี้…กลับไปไม่ได้แล้ว. นาฬิกาทราย…ใกล้จะหมดแล้ว.",
						"hindi": "अब… वापस नहीं जा सकते। रेत घड़ी… लगभग खाली हो गई है。"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "우린 여기서 멈추지 않아. 진실을 밝힐 거야.",
						"english": "We won't stop here. We'll uncover the truth.",
						"japanese": "ここで止まらない。真実を明らかにする。",
						"chinese": "我们不会止步于此。我们会揭示真相。",
						"french": "Nous ne nous arrêterons pas ici. Nous découvrirons la vérité.",
						"spanish": "No nos detendremos aquí. Descubriremos la verdad.",
						"vietnamese": "Chúng ta sẽ không dừng lại ở đây. Chúng ta sẽ phơi bày sự thật.",
						"thai": "เราจะไม่หยุดที่นี่. เราจะเปิดเผยความจริง.",
						"hindi": "हम यहीं नहीं रुकेंगे। हम सच का पर्दाफाश करेंगे।"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "결국 모두… 유리 조각이 될 뿐이에요.",
						"english": "In the end, everyone… will just be shards of glass.",
						"japanese": "結局みんな…ガラスの破片になるだけだ。",
						"chinese": "最终大家…都只会变成玻璃碎片。",
						"french": "Au final, tout le monde… ne sera que des éclats de verre.",
						"spanish": "Al final, todos… solo serán trozos de cristal.",
						"vietnamese": "Cuối cùng, tất cả… cũng chỉ là những mảnh thủy tinh mà thôi.",
						"thai": "ในที่สุดทุกคน…ก็จะกลายเป็นแค่เศษแก้ว.",
						"hindi": "अंत में, सब… बस कांच के टुकड़े बन जाएंगे।"
					},
					"speaker": "amir",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "아니. 우린 끝을 볼 거야.",
						"english": "No. We'll see this through to the end.",
						"japanese": "いや。私たちは最後までやり遂げる。",
						"chinese": "不。我们会看到结局的。",
						"french": "Non. Nous irons jusqu'au bout.",
						"spanish": "No. Veremos esto hasta el final.",
						"vietnamese": "Không. Chúng ta sẽ thấy kết cục.",
						"thai": "ไม่. เราจะเห็นมันจนจบ.",
						"hindi": "नहीं। हम इसे अंत तक देखेंगे।"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "사막의 심장부. 거대한 그림자가 모래 폭풍 속에서 나타났다.",
						"english": "Heart of the desert. A colossal shadow emerged from the sandstorm.",
						"japanese": "砂漠の心臓部。巨大な影が砂嵐の中から現れた。",
						"chinese": "沙漠之心。一道巨大的阴影从沙尘暴中浮现。",
						"french": "Cœur du désert. Une ombre colossale émergea de la tempête de sable.",
						"spanish": "Corazón del desierto. Una sombra colosal emergió de la tormenta de arena.",
						"vietnamese": "Trái tim sa mạc. Một bóng đen khổng lồ hiện ra từ bão cát.",
						"thai": "ใจกลางทะเลทราย. เงาขนาดมหึมาปรากฏขึ้นจากพายุทราย.",
						"hindi": "रेगिस्तान का दिल। रेत के तूफान से एक विशाल छाया निकली।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은… 존재들아. 너희의 운명은… 완벽한 광택이다.",
						"english": "Foolish… beings. Your fate is… perfect polish.",
						"japanese": "愚かな…者たちよ。お前たちの運命は…完璧な輝きだ。",
						"chinese": "愚蠢的…存在们。你们的命运是…完美的抛光。",
						"french": "Êtres… insensés. Votre destin est… un éclat parfait.",
						"spanish": "Seres… insensatos. Vuestro destino es… un pulido perfecto.",
						"vietnamese": "Những kẻ… ngu ngốc. Số phận của các ngươi là… sự bóng bẩy hoàn hảo.",
						"thai": "สิ่งมีชีวิต…โง่เขลา. ชะตากรรมของพวกเจ้าคือ…ความเงางามที่สมบูรณ์แบบ.",
						"hindi": "मूर्ख… प्राणियों। तुम्हारी नियति… पूर्ण चमक है।"
					},
					"type": "speech"
				},
				{
					"speaker": "amir",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"type": "direction"
				},
				{
					"emotion": "sad",
					"speaker": "amir",
					"content": {
						"korean": "안 돼… 저건…! 저자는… 저주를 지키는 자예요!",
						"english": "No… that's…! He's… the guardian of the curse!",
						"japanese": "だめだ…あれは…！あれは…呪いを守る者だ！",
						"chinese": "不…那是…！他是…诅咒的守护者！",
						"french": "Non… c'est… ! C'est… le gardien de la malédiction !",
						"spanish": "¡No… eso es…! ¡Él es… el guardián de la maldición!",
						"vietnamese": "Không… đó là…! Hắn là… kẻ canh giữ lời nguyền!",
						"thai": "ไม่นะ…นั่นมัน…! เขาคือ…ผู้พิทักษ์คำสาป!",
						"hindi": "नहीं… वो…! वो… अभिशाप का रक्षक है!"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "네가… 이 저주를 내렸어?",
						"english": "Did you… cast this curse?",
						"japanese": "お前が…この呪いをかけたのか？",
						"chinese": "是你…施加了这个诅咒吗？",
						"french": "C'est toi… qui as jeté cette malédiction ?",
						"spanish": "¿Tú… lanzaste esta maldición?",
						"vietnamese": "Ngươi… đã giáng lời nguyền này?",
						"thai": "เจ้า…เป็นผู้ร่ายคำสาปนี้หรือ?",
						"hindi": "क्या तुमने… यह अभिशाप दिया है?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "나는… 진정한 아름다움을 선사할 뿐.",
						"english": "I merely… bestow true beauty.",
						"japanese": "私は…真の美しさをもたらすだけだ。",
						"chinese": "我只是…赐予真正的美丽。",
						"french": "Je ne fais que… conférer la vraie beauté.",
						"spanish": "Yo solo… otorgo la verdadera belleza.",
						"vietnamese": "Ta chỉ… ban tặng vẻ đẹp đích thực.",
						"thai": "ข้าเพียง…มอบความงามที่แท้จริง.",
						"hindi": "मैं तो बस… सच्ची सुंदरता प्रदान करता हूँ।"
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "유리 조각이 되어… 영원히 빛나라.",
						"english": "Become a shard of glass... and shine forever.",
						"japanese": "ガラスの破片となり… 永遠に輝け。",
						"chinese": "化为玻璃碎片… 永远闪耀。",
						"french": "Deviens un éclat de verre... et brille pour l'éternité.",
						"spanish": "Conviértete en un fragmento de cristal... y brilla para siempre.",
						"vietnamese": "Trở thành mảnh thủy tinh... và tỏa sáng mãi mãi.",
						"thai": "จงเป็นเศษแก้ว… และส่องแสงตลอดไป",
						"hindi": "काँच के टुकड़े बनो… और हमेशा के लिए चमको।"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "크윽… 아직… 끝나지 않았어.",
						"english": "Ugh... It's not... over yet.",
						"japanese": "くっ… まだ… 終わってない。",
						"chinese": "呃… 还… 没完。",
						"french": "Ugh... Ce n'est pas... encore fini.",
						"spanish": "Ugh... Aún... no ha terminado.",
						"vietnamese": "Ư… Vẫn… chưa kết thúc đâu.",
						"thai": "อึก... ยังไม่... จบ!",
						"hindi": "उफ़… अभी… खत्म नहीं हुआ।"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "amir",
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "amir",
					"content": {
						"korean": "도망쳐요… 여긴… 더 이상 안전하지 않아요!",
						"english": "Run... This place... isn't safe anymore!",
						"japanese": "逃げて… ここは… もう安全じゃない！",
						"chinese": "快逃… 这里… 不再安全了！",
						"french": "Fuyez... Cet endroit... n'est plus sûr !",
						"spanish": "Huyan... ¡Este lugar... ya no es seguro!",
						"vietnamese": "Chạy đi… Nơi này… không còn an toàn nữa đâu!",
						"thai": "หนีไปค่ะ… ที่นี่… ไม่ปลอดภัยอีกต่อไปแล้ว!",
						"hindi": "भागो… यह जगह… अब सुरक्षित नहीं है!"
					},
					"emotion": "sad",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은… 것들… 진정한 완벽을… 거부하다니…",
						"english": "Foolish… things… to refuse true perfection…",
						"japanese": "愚かな…者たちめ…真の完璧さを…拒むとは…",
						"chinese": "愚蠢的…东西们…竟敢拒绝真正的完美…",
						"french": "Créatures… insensées… refuser la vraie perfection…",
						"spanish": "Criaturas… necias… negarse a la verdadera perfección…",
						"vietnamese": "Những kẻ… ngu ngốc… dám từ chối sự hoàn hảo đích thực…",
						"thai": "เจ้าพวก…โง่เง่า…ที่ปฏิเสธความสมบูรณ์แบบที่แท้จริง…",
						"hindi": "मूर्ख… चीजें… सच्ची पूर्णता को अस्वीकार करना…"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "끝난 건가? 저주는…",
						"english": "Is it over? The curse...",
						"japanese": "終わったのか？呪いは…",
						"chinese": "结束了吗？诅咒…",
						"french": "Est-ce fini ? La malédiction...",
						"spanish": "¿Se acabó? La maldición...",
						"vietnamese": "Kết thúc rồi sao? Lời nguyền...",
						"thai": "จบแล้วเหรอ? คำสาป...",
						"hindi": "क्या यह खत्म हो गया? शाप..."
					}
				},
				{
					"type": "direction",
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"speaker": "amir",
					"action": "enter"
				},
				{
					"content": {
						"korean": "아니요… 모래시계는… 아직 흐르고 있어요.",
						"english": "No... The hourglass... it's still flowing.",
						"japanese": "いいえ… 砂時計は… まだ流れています。",
						"chinese": "不… 沙漏… 还在流淌。",
						"french": "Non... Le sablier... il s'écoule toujours.",
						"spanish": "No... El reloj de arena... sigue fluyendo.",
						"vietnamese": "Không... Đồng hồ cát... vẫn đang chảy.",
						"thai": "ไม่ค่ะ... นาฬิกาทราย... ยังคงไหลอยู่",
						"hindi": "नहीं… रेतघड़ी… अभी भी चल रही है।"
					},
					"speaker": "amir",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "쓰러진 {random_boss}. 하지만 모래시계는 여전히 흘렀다.",
						"english": "{random_boss} fell. But the hourglass still flowed.",
						"japanese": "{random_boss} は倒れた。しかし砂時計は依然として流れていた。",
						"chinese": "{random_boss} 倒下了。但沙漏仍在流逝。",
						"french": "{random_boss} est tombé. Mais le sablier continuait de s'écouler.",
						"spanish": "{random_boss} cayó. Pero el reloj de arena seguía fluyendo.",
						"vietnamese": "{random_boss} đã gục ngã. Nhưng đồng hồ cát vẫn chảy.",
						"thai": "{random_boss} ล้มลงแล้ว แต่ทว่านาฬิกาทรายยังคงไหล",
						"hindi": "{random_boss} गिर गया। लेकिन रेतघड़ी अभी भी चल रही थी।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "비극은… 이제 시작이었다. 더 깊은 곳에서…",
						"english": "The tragedy... was just beginning. From deeper within...",
						"japanese": "悲劇は… 今始まったばかりだった。より深い場所から…",
						"chinese": "悲剧… 才刚刚开始。从更深处…",
						"french": "La tragédie... ne faisait que commencer. D'un endroit plus profond...",
						"spanish": "La tragedia... acababa de empezar. Desde lo más profundo...",
						"vietnamese": "Bi kịch... chỉ mới bắt đầu. Từ một nơi sâu thẳm hơn...",
						"thai": "โศกนาฏกรรม... เพิ่งจะเริ่มต้นขึ้น จากที่ลึกกว่านี้...",
						"hindi": "त्रासदी… अभी शुरू हुई थी। और भी गहराई से…"
					},
					"type": "speech"
				}
			]
		}
	]
} as const;
