export const scenario_desert_solon_7_01 = {
	"scenario_id": "desert_solon_7_01",
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
			"끝없이 펼쳐진 모래 사막. 모든 것이 메말라 죽어가는 저주받은 땅.",
			"목마름 끝에 다다른 곳, 환상의 오아시스가 눈앞에 펼쳐졌다.",
			"그러나 그곳의 평화는 어딘가 이상했다. 멈춰버린 듯한 생명들.",
			"그리고, 과거의 영웅 Solon의 전설이 시작되었다."
		],
		"english": [
			"Endless sand desert. A cursed land where all life withers and dies.",
			"At the end of thirst, a wondrous oasis appeared before my eyes.",
			"But the peace there felt strange. Life seemed to be frozen.",
			"And so, the legend of Solon, hero of the past, began."
		],
		"japanese": [
			"果てしなく広がる砂漠。全てが干からび、死んでいく呪われた地。",
			"喉の渇きの果てにたどり着いた場所、幻のオアシスが目の前に広がっていた。",
			"しかし、そこの平和はどこか奇妙だった。まるで生命が止まってしまったかのように。",
			"そして、過去の英雄ソロンの伝説が始まった。"
		],
		"chinese": [
			"一望无际的沙漠。万物枯萎，生灵涂炭的诅咒之地。",
			"饥渴的尽头，一片梦幻般的绿洲展现在眼前。",
			"然而，那里的平静却有些异样。生命仿佛停滞不前。",
			"于是，过去英雄索隆的传说开始了。"
		],
		"french": [
			"Un désert de sable infini. Une terre maudite où tout se dessèche et meurt.",
			"Au bout de la soif, une oasis de rêve apparut devant mes yeux.",
			"Mais la paix y était étrange. La vie semblait figée.",
			"Et ainsi commença la légende de Solon, le héros du passé."
		],
		"spanish": [
			"Un desierto de arena interminable. Una tierra maldita donde todo se marchita y muere.",
			"Al final de la sed, un oasis de ensueño apareció ante mis ojos.",
			"Pero la paz allí era extraña. Las vidas parecían detenidas.",
			"Y así comenzó la leyenda de Solon, el héroe del pasado."
		],
		"vietnamese": [
			"Sa mạc cát trải dài vô tận. Vùng đất bị nguyền rủa, nơi mọi thứ khô héo và chết dần.",
			"Cuối cùng của cơn khát, một ốc đảo huyền ảo hiện ra trước mắt.",
			"Nhưng sự bình yên ở đó có gì đó lạ lùng. Những sinh linh dường như đã ngừng lại.",
			"Và rồi, truyền thuyết về Solon, vị anh hùng của quá khứ, bắt đầu."
		],
		"thai": [
			"ทะเลทรายอันกว้างใหญ่ไร้ที่สิ้นสุด ดินแดนต้องสาปที่ทุกสิ่งเหี่ยวเฉาและตายไป",
			"ณ ปลายทางแห่งความกระหาย โอเอซิสแห่งความฝันปรากฏขึ้นเบื้องหน้า",
			"แต่ความสงบที่นั่นกลับแปลกประหลาด ชีวิตดูเหมือนจะหยุดนิ่ง",
			"และแล้ว ตำนานของโซลอน วีรบุรุษในอดีต ก็เริ่มต้นขึ้น"
		],
		"hindi": [
			"अंतहीन फैला रेगिस्तान। एक शापित भूमि जहाँ सब कुछ सूखकर मर रहा है।",
			"प्यास के अंत में, एक अद्भुत नखलिस्तान मेरी आँखों के सामने फैल गया।",
			"लेकिन वहाँ की शांति कुछ अजीब थी। जीवन ठहरा हुआ सा लग रहा था।",
			"और फिर, अतीत के नायक सोलन की किंवदंती शुरू हुई।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "메마른 사막을 헤치고, 끝없는 갈증 속에 한 줄기 희망이 보였다.",
						"english": "Through the parched desert, in endless thirst, a glimmer of hope appeared.",
						"japanese": "乾ききった砂漠を越え、果てしない渇きの中に一条の希望が見えた。",
						"chinese": "穿越干涸的沙漠，在无尽的饥渴中，一线希望浮现。",
						"french": "À travers le désert aride, dans une soif infinie, une lueur d'espoir apparut.",
						"spanish": "Através del desierto árido, en una sed interminable, un rayo de esperanza apareció.",
						"vietnamese": "Vượt qua sa mạc khô cằn, giữa cơn khát vô tận, một tia hy vọng lóe lên.",
						"thai": "ฝ่าทะเลทรายอันแห้งแล้ง ในความกระหายอันไม่สิ้นสุด มีความหวังริบหรี่ปรากฏขึ้น",
						"hindi": "सूखे रेगिस्तान से होते हुए, अंतहीन प्यास में, आशा की एक किरण दिखाई दी।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "오아시스… 드디어 도착했어.",
						"english": "An oasis... I've finally arrived.",
						"japanese": "オアシス…ついに着いた。",
						"chinese": "绿洲……终于到了。",
						"french": "Une oasis... Je suis enfin arrivé.",
						"spanish": "Un oasis... Por fin he llegado.",
						"vietnamese": "Ốc đảo… Cuối cùng đã đến rồi.",
						"thai": "โอเอซิส... ในที่สุดก็มาถึงแล้ว",
						"hindi": "एक नखलिस्तान... मैं आखिरकार पहुँच गया।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"spot": [
						5,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "amir",
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "환영합니다, 목마른 이여. 이곳은 Solon님의 품입니다.",
						"english": "Welcome, thirsty one. This is Solon's embrace.",
						"japanese": "ようこそ、喉の渇いた者よ。ここはソロン様の懐です。",
						"chinese": "欢迎你，口渴之人。这里是索隆大人的怀抱。",
						"french": "Bienvenue, l'assoiffé. C'est l'étreinte de Solon.",
						"spanish": "Bienvenido, sediento. Este es el abrazo de Solon.",
						"vietnamese": "Chào mừng, kẻ khát. Đây là vòng tay của Solon.",
						"thai": "ยินดีต้อนรับ ผู้กระหาย นี่คืออ้อมกอดของโซลอน",
						"hindi": "स्वागत है, प्यासे। यह सोलन का आलिंगन है।"
					},
					"speaker": "amir",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "당신은…?",
						"english": "You are...?",
						"japanese": "あなたは…？",
						"chinese": "你是……？",
						"french": "Vous êtes...?",
						"spanish": "¿Usted es...?",
						"vietnamese": "Ngươi là…?",
						"thai": "ท่านคือ...?",
						"hindi": "आप कौन हैं...?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이 오아시스의 현자, 아미르입니다. Solon님께서 저를 보내셨습니다.",
						"english": "I am Amir, the sage of this oasis. Solon sent me.",
						"japanese": "私はこのオアシスの賢者、アミールです。ソロン様が私をお遣わしになりました。",
						"chinese": "我是阿米尔，这片绿洲的贤者。索隆大人派我来的。",
						"french": "Je suis Amir, le sage de cette oasis. Solon m'a envoyé.",
						"spanish": "Soy Amir, el sabio de este oasis. Solon me envió.",
						"vietnamese": "Ta là Amir, hiền nhân của ốc đảo này. Solon đã phái ta đến.",
						"thai": "ข้าคืออะมีร์ ปราชญ์แห่งโอเอซิสนี้ โซลอนส่งข้ามา",
						"hindi": "मैं आमिर हूँ, इस नखलिस्तान का संत। सोलन ने मुझे भेजा है।"
					},
					"speaker": "amir",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						5,
						2
					],
					"duration_ms": 500,
					"speaker": "amir",
					"type": "direction"
				},
				{
					"content": {
						"korean": "Solon님은 이 사막을 구원하신 영웅이십니다.",
						"english": "Solon is the hero who saved this desert.",
						"japanese": "ソロン様は、この砂漠を救われた英雄です。",
						"chinese": "索隆大人是拯救这片沙漠的英雄。",
						"french": "Solon est le héros qui a sauvé ce désert.",
						"spanish": "Solon es el héroe que salvó este desierto.",
						"vietnamese": "Solon là vị anh hùng đã cứu rỗi sa mạc này.",
						"thai": "โซลอนคือวีรบุรุษผู้กอบกู้ทะเลทรายแห่งนี้",
						"hindi": "सोलन वह नायक है जिसने इस रेगिस्तान को बचाया।"
					},
					"speaker": "amir",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "고대 유적에 기록된 전설들은 그의 위대한 업적을 찬양하죠.",
						"english": "Legends inscribed in ancient ruins praise his great deeds.",
						"japanese": "古代遺跡に記された伝説は、彼の偉大な業績を称賛しています。",
						"chinese": "古代遗迹中记载的传说都在歌颂他伟大的功绩。",
						"french": "Les légendes gravées dans les ruines antiques célèbrent ses grandes prouesses.",
						"spanish": "Las leyendas inscritas en las ruinas antiguas alaban sus grandes hazañas.",
						"vietnamese": "Những truyền thuyết được ghi trong di tích cổ ca ngợi những chiến công vĩ đại của người.",
						"thai": "ตำนานที่จารึกไว้ในซากปรักหักพังโบราณต่างยกย่องวีรกรรมอันยิ่งใหญ่ของเขา",
						"hindi": "प्राचीन खंडहरों में दर्ज किंवदंतियाँ उनके महान कृत्यों की प्रशंसा करती हैं。"
					},
					"speaker": "amir",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "영웅…?",
						"english": "A hero...?",
						"japanese": "英雄…？",
						"chinese": "英雄…？",
						"french": "Un héros… ?",
						"spanish": "¿Un héroe…?",
						"vietnamese": "Một anh hùng…?",
						"thai": "วีรบุรุษ...?",
						"hindi": "एक नायक...?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "하지만… 가끔 마지막 기록에서 알 수 없는 비극의 그림자가 느껴집니다.",
						"english": "But… sometimes, I sense an unknown shadow of tragedy in the last record.",
						"japanese": "しかし…時折、最後の記録から知られざる悲劇の影を感じます。",
						"chinese": "但是…有时，我能从最后的记录中感受到一丝未知的悲剧阴影。",
						"french": "Cependant… parfois, je perçois l'ombre d'une tragédie inconnue dans le dernier registre.",
						"spanish": "Pero… a veces, siento una sombra de tragedia desconocida en el último registro.",
						"vietnamese": "Nhưng… đôi khi, tôi cảm nhận được một bóng tối bi kịch không rõ từ những ghi chép cuối cùng.",
						"thai": "แต่…บางครั้ง ฉันก็รู้สึกถึงเงาแห่งโศกนาฏกรรมที่ไม่รู้จักในบันทึกสุดท้าย",
						"hindi": "लेकिन… कभी-कभी, मुझे आखिरी रिकॉर्ड में त्रासदी की एक अनजानी छाया महसूस होती है।"
					},
					"speaker": "amir",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "비극이라니…",
						"english": "Tragedy, you say...?",
						"japanese": "悲劇だと…？",
						"chinese": "悲剧…？",
						"french": "Une tragédie… ?",
						"spanish": "¿Tragedia…?",
						"vietnamese": "Bi kịch ư…?",
						"thai": "โศกนาฏกรรมรึ...?",
						"hindi": " त्रासदी, तुम कहो...?"
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
					"spot": [
						5,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "amir",
					"type": "direction"
				},
				{
					"emotion": "happy",
					"type": "speech",
					"speaker": "amir",
					"content": {
						"korean": "보십시오. Solon님의 힘으로 이 오아시스는 생명으로 넘쳐납니다.",
						"english": "Behold. By Solon's power, this oasis overflows with life.",
						"japanese": "ご覧ください。Solon様の力で、このオアシスは生命に満ち溢れています。",
						"chinese": "瞧啊。凭借索伦大人的力量，这座绿洲充满了生机。",
						"french": "Regardez. Par la puissance de Solon, cette oasis déborde de vie.",
						"spanish": "Contempla. Por el poder de Solon, este oasis rebosa de vida.",
						"vietnamese": "Hãy nhìn xem. Với sức mạnh của Solon, ốc đảo này tràn ngập sự sống.",
						"thai": "ดูสิ ด้วยพลังของโซลอน โอเอซิสนี้เปี่ยมล้นไปด้วยชีวิต",
						"hindi": "देखो। सोलोन की शक्ति से, यह नखलिस्तान जीवन से उमड़ रहा है।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "확실히… 풍성하네. 그런데… 너무 조용한 거 같기도 하고.",
						"english": "Indeed… it's abundant. But… it also feels too quiet.",
						"japanese": "確かに…豊かだ。だが…あまりにも静かすぎる気もする。",
						"chinese": "确实…很富饶。但是…也感觉太安静了。",
						"french": "En effet… c'est abondant. Mais… cela semble aussi trop silencieux.",
						"spanish": "Ciertamente… es abundante. Pero… también parece demasiado tranquilo.",
						"vietnamese": "Quả thật… rất trù phú. Nhưng… cũng cảm thấy quá yên tĩnh.",
						"thai": "แน่นอน…อุดมสมบูรณ์ดี แต่…ก็รู้สึกเงียบสงบเกินไปหน่อย",
						"hindi": "निश्चित रूप से… यह प्रचुर है। लेकिन… यह बहुत शांत भी लग रहा है।"
					}
				},
				{
					"content": {
						"korean": "그것이 진정한 평화입니다. 모든 것이 멈춘 듯한 정적 속에서….",
						"english": "That is true peace. In a stillness where everything seems to have stopped…",
						"japanese": "それが真の平和です。全てが止まったかのような静寂の中で…。",
						"chinese": "那就是真正的和平。在万物仿佛静止般的寂静之中…。",
						"french": "C'est la véritable paix. Dans un silence où tout semble s'être arrêté…",
						"spanish": "Esa es la verdadera paz. En una quietud donde todo parece haberse detenido…",
						"vietnamese": "Đó chính là bình yên thật sự. Trong sự tĩnh lặng mà mọi thứ dường như đã ngừng lại…",
						"thai": "นั่นคือสันติภาพที่แท้จริง ในความสงบนิ่งที่ทุกสิ่งดูเหมือนจะหยุดนิ่งไปแล้ว…",
						"hindi": "वही सच्ची शांति है। उस सन्नाटे में जहाँ सब कुछ रुक गया हो…"
					},
					"speaker": "amir",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "활기 없이 정지된 듯한 생명력. 오아시스의 풍요는 어딘가 기묘했다.",
						"english": "Life force, still as if frozen, devoid of vibrancy. The oasis's abundance was somehow eerie.",
						"japanese": "活気なく、まるで停止したかのような生命力。オアシスの豊かさはどこか奇妙だった。",
						"chinese": "毫无生气，仿佛静止的生命力。绿洲的富饶之处，总有些诡异。",
						"french": "Une force vitale figée, dénuée de dynamisme. L'abondance de l'oasis était étrangement sinistre.",
						"spanish": "Fuerza vital estática, como si estuviera congelada, sin vitalidad. La abundancia del oasis era de alguna manera extraña.",
						"vietnamese": "Sức sống tĩnh lặng như bị đóng băng, thiếu đi sự sống động. Sự trù phú của ốc đảo có gì đó kỳ lạ.",
						"thai": "พลังชีวิตที่หยุดนิ่งไร้ความกระตือรือร้น ความอุดมสมบูรณ์ของโอเอซิสช่างแปลกประหลาด",
						"hindi": "जीवन शक्ति, जैसे जमी हुई, जीवंतता से रहित। नखलिस्तान की प्रचुरता कुछ अजीब थी।"
					},
					"speaker": "narrator",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "amir",
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"action": "enter"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "더 깊이 들어가시겠습니까? 이곳은… 더 이상 돌아올 수 없는 곳일 수도 있습니다.",
						"english": "Would you venture deeper? This place… might be a point of no return.",
						"japanese": "さらに深く進みますか？ここは…もう引き返せない場所かもしれません。",
						"chinese": "您要深入其中吗？这里…也许是无法回头的境地了。",
						"french": "Souhaitez-vous vous aventurer plus profondément ? Cet endroit… pourrait être un point de non-retour.",
						"spanish": "¿Desea adentrarse más? Este lugar… podría ser un punto sin retorno.",
						"vietnamese": "Bạn có muốn đi sâu hơn không? Nơi này… có thể là một nơi không thể quay lại.",
						"thai": "ท่านจะเข้าไปลึกกว่านี้หรือไม่? ที่นี่…อาจเป็นจุดที่ไม่อาจย้อนกลับได้อีกแล้ว",
						"hindi": "क्या आप और गहराई में जाना चाहेंगे? यह जगह… शायद ऐसी हो जहाँ से वापसी न हो।"
					},
					"speaker": "amir"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "진실을 알아야 해. 이 평화의 진짜 의미를.",
						"english": "I must know the truth. The true meaning of this peace.",
						"japanese": "真実を知らねばならない。この平和の本当の意味を。",
						"chinese": "我必须知道真相。这个和平的真正含义。",
						"french": "Je dois connaître la vérité. Le véritable sens de cette paix.",
						"spanish": "Debo saber la verdad. El verdadero significado de esta paz.",
						"vietnamese": "Tôi phải biết sự thật. Ý nghĩa thật sự của bình yên này.",
						"thai": "ฉันต้องรู้ความจริง ความหมายที่แท้จริงของสันติภาพนี้",
						"hindi": "मुझे सच जानना होगा। इस शांति का असली अर्थ।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…Solon님께서 당신의 여정을 지켜보실 겁니다.",
						"english": "…Solon will watch over your journey.",
						"japanese": "…ソロン様があなたの旅を見守るでしょう。",
						"chinese": "…索隆大人将注视着你的旅程。",
						"french": "…Solon veillera sur votre voyage.",
						"spanish": "…Solon vigilará tu viaje.",
						"vietnamese": "...Solon sẽ dõi theo hành trình của bạn.",
						"thai": "...โซลอนจะเฝ้าดูการเดินทางของคุณ",
						"hindi": "...सोलन आपकी यात्रा पर नज़र रखेंगे।"
					},
					"speaker": "amir",
					"type": "speech"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "정체 모를 존재의 그림자가 모든 것을 집어삼켰다.",
						"english": "The shadow of an unknown entity consumed all.",
						"japanese": "正体不明の存在の影が、すべてを飲み込んだ。",
						"chinese": "一个未知存在的影子吞噬了一切。",
						"french": "L'ombre d'une entité inconnue a tout englouti.",
						"spanish": "La sombra de una entidad desconocida lo devoró todo.",
						"vietnamese": "Cái bóng của một thực thể vô danh đã nuốt chửng mọi thứ.",
						"thai": "เงาของสิ่งมีชีวิตที่ไม่รู้จักกลืนกินทุกสิ่ง",
						"hindi": "एक अज्ञात सत्ता की छाया ने सब कुछ निगल लिया।"
					},
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "미약한 존재여. 영원한 정적 속에서 평화를 찾아라.",
						"english": "Frail being. Find peace in eternal silence.",
						"japanese": "弱き者よ。永遠の静寂の中で安らぎを見出すがよい。",
						"chinese": "弱小的存在啊。在永恒的寂静中寻求安宁吧。",
						"french": "Être fragile. Trouve la paix dans le silence éternel.",
						"spanish": "Ser frágil. Encuentra la paz en el silencio eterno.",
						"vietnamese": "Kẻ yếu ớt. Hãy tìm sự bình yên trong sự tĩnh lặng vĩnh hằng.",
						"thai": "เจ้าผู้เปราะบาง จงพบความสงบในความเงียบงันชั่วนิรันดร์",
						"hindi": "कमजोर प्राणी। अनंत शांति में शांति पाओ।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…아직 끝나지 않았어. 다시 일어설 거야.",
						"english": "...It's not over yet. I'll rise again.",
						"japanese": "…まだ終わってない。また立ち上がるさ。",
						"chinese": "……还没结束。我会再次站起来的。",
						"french": "...Ce n'est pas encore fini. Je me relèverai.",
						"spanish": "...Aún no ha terminado. Me levantaré de nuevo.",
						"vietnamese": "...Chưa kết thúc đâu. Ta sẽ đứng dậy lần nữa.",
						"thai": "...ยังไม่จบแค่นี้หรอก ข้าจะลุกขึ้นสู้อีกครั้ง",
						"hindi": "...अभी खत्म नहीं हुआ है। मैं फिर उठ खड़ा होऊंगा।"
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"emotion": "sad",
					"content": {
						"korean": "네가 아는 평화는… 기만일 뿐. 진정한 평화는… 멈추는 것이다.",
						"english": "The peace you know… is but a deception. True peace… is stillness.",
						"japanese": "お前が知る平和は…欺瞞に過ぎない。真の平和は…止まることだ。",
						"chinese": "你所知的和平…不过是欺骗。真正的和平…是停止。",
						"french": "La paix que tu connais… n'est qu'une tromperie. La véritable paix… est l'immobilité.",
						"spanish": "La paz que conoces… es solo un engaño. La verdadera paz… es la quietud.",
						"vietnamese": "Hòa bình ngươi biết… chỉ là một sự lừa dối. Hòa bình thực sự… là sự dừng lại.",
						"thai": "สันติสุขที่คุณรู้จัก...เป็นเพียงภาพลวงตา สันติสุขที่แท้จริง...คือความนิ่งเงียบ",
						"hindi": "जिस शांति को तुम जानते हो...वह केवल एक धोखा है। सच्ची शांति...स्थिरता है।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이게 끝이 아니야. Solon의 진실을 알아낼 거야.",
						"english": "This isn't the end. I'll uncover Solon's truth.",
						"japanese": "これで終わりじゃない。ソロンの真実を暴いてやる。",
						"chinese": "这不是结束。我会揭露索隆的真相。",
						"french": "Ce n'est pas la fin. Je découvrirai la vérité sur Solon.",
						"spanish": "Este no es el final. Descubriré la verdad de Solon.",
						"vietnamese": "Đây không phải là kết thúc. Tôi sẽ tìm ra sự thật về Solon.",
						"thai": "นี่ไม่ใช่จุดจบ ฉันจะเปิดเผยความจริงของโซลอน",
						"hindi": "यह अंत नहीं है। मैं सोलन की सच्चाई का पता लगाऊंगा।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "오아시스의 환상은 깨졌지만, 더 깊은 진실이 기다리고 있었다.",
						"english": "The oasis's illusion shattered, but a deeper truth awaited.",
						"japanese": "オアシスの幻想は砕かれたが、より深遠な真実が待っていた。",
						"chinese": "绿洲的幻象破灭了，但更深层的真相正在等待。",
						"french": "L'illusion de l'oasis s'est brisée, mais une vérité plus profonde attendait.",
						"spanish": "La ilusión del oasis se hizo añicos, pero una verdad más profunda esperaba.",
						"vietnamese": "Ảo ảnh của ốc đảo tan vỡ, nhưng một sự thật sâu sắc hơn đang chờ đợi.",
						"thai": "ภาพลวงตาของโอเอซิสแตกสลาย แต่ความจริงที่ลึกซึ้งกว่ากำลังรออยู่",
						"hindi": "मरुद्यान का भ्रम टूट गया, लेकिन एक गहरा सच इंतज़ार कर रहा था।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"type": "direction",
					"speaker": "amir",
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"action": "enter"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "조심하세요! 이 이상은…!",
						"english": "Be careful! Beyond this point…!",
						"japanese": "気をつけて！これ以上は…！",
						"chinese": "小心！再往前就…！",
						"french": "Attention ! Au-delà de ça… !",
						"spanish": "¡Cuidado! Más allá de esto…!",
						"vietnamese": "Cẩn thận! Xa hơn nữa là…!",
						"thai": "ระวัง! เกินกว่านี้…!",
						"hindi": "सावधान! इससे आगे…!"
					},
					"speaker": "amir",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "오아시스 깊은 곳, 거대한 그림자가 나타났다.",
						"english": "Deep within the oasis, a colossal shadow appeared.",
						"japanese": "オアシスの深淵に、巨大な影が現れた。",
						"chinese": "绿洲深处，一个巨大的身影出现了。",
						"french": "Au fond de l'oasis, une ombre colossale apparut.",
						"spanish": "En lo profundo del oasis, apareció una sombra colosal.",
						"vietnamese": "Sâu trong ốc đảo, một cái bóng khổng lồ xuất hiện.",
						"thai": "ลึกเข้าไปในโอเอซิส เงาขนาดมหึมาปรากฏขึ้น",
						"hindi": "मरुद्यान की गहराइयों में, एक विशाल छाया प्रकट हुई।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "멈춰라. 이 평화를 깨려 하는가?",
						"english": "Stop. Do you intend to break this peace?",
						"japanese": "止まれ。この平和を破ろうとするのか？",
						"chinese": "住手。你打算打破这份宁静吗？",
						"french": "Arrête. Cherches-tu à briser cette paix ?",
						"spanish": "Detente. ¿Intentas romper esta paz?",
						"vietnamese": "Dừng lại. Ngươi định phá vỡ sự bình yên này sao?",
						"thai": "หยุดเดี๋ยวนี้! เจ้าจะทำลายความสงบนี้หรือ?",
						"hindi": "रुको। क्या तुम इस शांति को भंग करना चाहते हो?"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "이게 당신이 말한 평화의 수호자야?",
						"english": "Is this the guardian of peace you spoke of?",
						"japanese": "これがあなたが言っていた平和の守護者か？",
						"chinese": "这就是你所说的和平守护者吗？",
						"french": "Est-ce le gardien de la paix dont vous parliez ?",
						"spanish": "¿Es este el guardián de la paz del que hablabas?",
						"vietnamese": "Đây là người bảo vệ hòa bình mà ngươi đã nói sao?",
						"thai": "นี่คือผู้พิทักษ์สันติภาพที่คุณพูดถึงหรือ?",
						"hindi": "क्या यही वह शांति का रक्षक है जिसकी तुमने बात की थी?"
					},
					"type": "speech"
				},
				{
					"type": "direction",
					"speaker": "amir",
					"duration_ms": 400,
					"direction": "down",
					"action": "exit"
				},
				{
					"type": "speech",
					"content": {
						"korean": "진정한 평화는 모든 것이 멈춘 영원한 정적 속에 있다.",
						"english": "True peace lies in eternal stillness, where all things cease.",
						"japanese": "真の平和は、すべてが止まった永遠の静寂の中にある。",
						"chinese": "真正的和平存在于万物皆止的永恒寂静之中。",
						"french": "La véritable paix réside dans un silence éternel où tout s'arrête.",
						"spanish": "La verdadera paz reside en la quietud eterna, donde todo cesa.",
						"vietnamese": "Hòa bình thực sự nằm trong sự tĩnh lặng vĩnh cửu, nơi vạn vật đều dừng lại.",
						"thai": "สันติสุขที่แท้จริงอยู่ในความสงบนิ่งชั่วนิรันดร์ ที่ซึ่งทุกสิ่งหยุดนิ่ง",
						"hindi": "सच्ची शांति शाश्वत स्थिरता में है, जहाँ सब कुछ थम जाता है।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				}
			]
		}
	]
} as const;
