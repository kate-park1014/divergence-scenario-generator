export const scenario_desert_sandwalker_25_03 = {
	"scenario_id": "desert_sandwalker_25_03",
	"order": 3,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"kemet": {
			"id": "mon_2f8a1701-571b-40b5-92d9-69aa973cef18",
			"name": {
				"korean": "케메트",
				"english": "Kemet",
				"japanese": "ケメト",
				"chinese": "凯麦特",
				"french": "Kemet",
				"spanish": "Kemet",
				"vietnamese": "Kemet",
				"thai": "เคเมต",
				"hindi": "केमेट"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/fd9e93e0-2874-4647-0076-839718949500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8c3f2690-e8a9-44f5-4527-d8f8d4ea2800/public"
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
					"content": {
						"korean": "앰버의 함정에 빠진 일행은 거대한 고대 유적의 입구에 도달했다.",
						"english": "Caught in the Amber's trap, the party reached the entrance of a colossal ancient ruin.",
						"japanese": "琥珀の罠に陥った一行は、巨大な古代遺跡の入り口にたどり着いた。",
						"chinese": "落入琥珀陷阱的一行人，抵达了巨大的古代遗迹入口。",
						"french": "Piégé par l'Ambre, le groupe atteignit l'entrée d'une ruine antique colossale.",
						"spanish": "Atrapado en la trampa de Ámbar, el grupo llegó a la entrada de una colosal ruina antigua.",
						"vietnamese": "Mắc kẹt trong bẫy Hổ Phách, đoàn người đã đến lối vào của một di tích cổ đại khổng lồ.",
						"thai": "คณะที่ติดกับดักของอำพัน ได้มาถึงทางเข้าของซากปรักหักพังโบราณขนาดมหึมา",
						"hindi": "एम्बर के जाल में फँसकर, दल एक विशाल प्राचीन खंडहर के प्रवेश द्वार पर पहुँच गया।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "여기가… 그 유적이야?",
						"english": "Is this... the ruin?",
						"japanese": "ここが…その遺跡なのか？",
						"chinese": "这里就是……那个遗迹吗？",
						"french": "C'est ici... la ruine ?",
						"spanish": "¿Es este... el ruina?",
						"vietnamese": "Đây là... di tích đó sao?",
						"thai": "ที่นี่... คือซากปรักหักพังนั่นหรือ?",
						"hindi": "क्या यह... वह खंडहर है?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "숨이 막혀….",
						"english": "I can't breathe...",
						"japanese": "息が詰まる…",
						"chinese": "喘不过气来……",
						"french": "J'étouffe...",
						"spanish": "Me ahogo...",
						"vietnamese": "Tôi nghẹt thở...",
						"thai": "หายใจไม่ออกเลย...",
						"hindi": "मेरी साँस रुक रही है..."
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"speaker": "kemet",
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						2
					],
					"duration_ms": 500
				},
				{
					"speaker": "kemet",
					"emotion": "base",
					"content": {
						"korean": "자네들이 이곳까지 오다니. 예상 밖이군.",
						"english": "You've made it this far. Unexpected.",
						"japanese": "君たちがここまで来るとは。予想外だな。",
						"chinese": "你们竟然能到这里。出乎意料。",
						"french": "Vous êtes arrivés jusqu'ici. Inattendu.",
						"spanish": "Habéis llegado hasta aquí. Inesperado.",
						"vietnamese": "Các ngươi đã đến được đây. Thật bất ngờ.",
						"thai": "พวกเจ้ามาถึงที่นี่ได้ ไม่คาดคิดเลย",
						"hindi": "तुम लोग यहाँ तक पहुँच गए। अप्रत्याशित।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "당신은…?",
						"english": "You are...?",
						"japanese": "あなたは…？",
						"chinese": "您是……？",
						"french": "Vous êtes...?",
						"spanish": "¿Usted es...?",
						"vietnamese": "Ông là...?",
						"thai": "ท่านคือ...?",
						"hindi": "आप कौन हैं...?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "고고학자 케메트. 이 유적의 비밀을 파헤치는 자지.",
						"english": "Archaeologist Khemet. The one who unearths this ruin's secrets.",
						"japanese": "考古学者ケメト。この遺跡の秘密を暴く者だ。",
						"chinese": "考古学家凯米特。揭露这座遗迹秘密之人。",
						"french": "Archéologue Khemet. Celui qui déterre les secrets de cette ruine.",
						"spanish": "El arqueólogo Khemet. Quien desentierra los secretos de esta ruina.",
						"vietnamese": "Nhà khảo cổ Khemet. Kẻ khai quật bí mật của di tích này.",
						"thai": "นักโบราณคดีเคเมต ผู้เปิดเผยความลับของซากปรักหักพังนี้",
						"hindi": "पुरातत्वविद् खेमेत। इस खंडहर के रहस्यों को उजागर करने वाला।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "kemet"
				},
				{
					"emotion": "base",
					"speaker": "kemet",
					"type": "speech",
					"content": {
						"korean": "자네들을 위해 이걸 보여주지. '진정한 오아시스'로 가는 지도일세.",
						"english": "I'll show you this, for your sake. It's a map to the 'True Oasis'.",
						"japanese": "お前たちのためにこれを見せよう。『真のオアシス』への地図だ。",
						"chinese": "为了你们，我将展示这个。这是通往“真正的绿洲”的地图。",
						"french": "Pour vous, je vais vous montrer ceci. C'est la carte du 'Véritable Oasis'.",
						"spanish": "Para vosotros, os mostraré esto. Es el mapa al 'Verdadero Oasis'.",
						"vietnamese": "Vì các ngươi, ta sẽ cho xem cái này. Đây là bản đồ dẫn đến 'Ốc đảo Chân thực'.",
						"thai": "เพื่อพวกเจ้า ข้าจะแสดงสิ่งนี้ให้ดู นี่คือแผนที่สู่ 'โอเอซิสที่แท้จริง'",
						"hindi": "तुम्हारे लिए मैं यह दिखाऊंगा। यह 'सच्चे नखलिस्तान' का नक्शा है।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "kemet",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						2
					]
				},
				{
					"content": {
						"korean": "이 지도는 모래가 시간과 함께 변형된 것이라네.",
						"english": "This map is sand, transformed by time.",
						"japanese": "この地図は、砂が時と共に変形したものなのだよ。",
						"chinese": "这张地图是沙子随着时间变幻而成的。",
						"french": "Cette carte est le sable, transformé par le temps.",
						"spanish": "Este mapa es arena, transformada con el tiempo.",
						"vietnamese": "Bản đồ này là cát, bị biến đổi theo thời gian.",
						"thai": "แผนที่นี้คือผืนทรายที่แปรเปลี่ยนไปตามกาลเวลา",
						"hindi": "यह नक्शा समय के साथ रेत से बदला हुआ है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "kemet"
				},
				{
					"content": {
						"korean": "변형이라니…?",
						"english": "Transformed...?",
						"japanese": "変形だと…？",
						"chinese": "变幻…？",
						"french": "Transformé...?",
						"spanish": "¿Transformado...?",
						"vietnamese": "Biến đổi à...?",
						"thai": "แปรเปลี่ยน...?",
						"hindi": "बदला हुआ...?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"speaker": "kemet",
					"type": "speech",
					"content": {
						"korean": "글귀가 흐려지고, 새로운 그림이 떠오르지. 마치… 무언가 감추는 듯이.",
						"english": "The words fade, and new images emerge. As if... hiding something.",
						"japanese": "文字が霞み、新たな絵が浮かび上がる。まるで…何かを隠すかのように。",
						"chinese": "文字模糊，新的图案浮现。仿佛…隐藏着什么。",
						"french": "Les mots s'estompent, et de nouvelles images apparaissent. Comme si... quelque chose était caché.",
						"spanish": "Las palabras se desvanecen, y nuevas imágenes surgen. Como si... algo se ocultara.",
						"vietnamese": "Chữ nghĩa mờ đi, hình ảnh mới nổi lên. Cứ như là... đang che giấu điều gì đó.",
						"thai": "ตัวอักษรเลือนหายไป และมีภาพใหม่ปรากฏขึ้น ราวกับ... ซ่อนอะไรบางอย่างไว้",
						"hindi": "शब्द धुंधले हो जाते हैं, और नई तस्वीरें उभरती हैं। मानो... कुछ छिपा रहे हों।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "모래바람 사이로 희미한 도시의 윤곽이 스쳐 지나가는 듯했다.",
						"english": "Through the sandstorm, a faint outline of a city seemed to flash by.",
						"japanese": "砂嵐の間に、かすかな都市の輪郭がちらりと見えたようだった。",
						"chinese": "在沙尘暴中，一座城市的模糊轮廓似乎一闪而过。",
						"french": "À travers la tempête de sable, une faible silhouette de ville sembla passer.",
						"spanish": "Entre la tormenta de arena, un tenue contorno de una ciudad pareció pasar rápidamente.",
						"vietnamese": "Qua bão cát, một đường nét mờ nhạt của thành phố dường như thoáng qua.",
						"thai": "ท่ามกลางพายุทราย เค้าร่างเมืองจางๆ พลันปรากฏขึ้นแวบหนึ่ง",
						"hindi": "रेतीले तूफान के बीच, एक शहर की धुंधली रूपरेखा जैसे गुजर गई।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "환영인가…?",
						"english": "An illusion...?",
						"japanese": "幻影か…？",
						"chinese": "幻象吗…？",
						"french": "Une illusion...?",
						"spanish": "¿Una ilusión...?",
						"vietnamese": "Ảo ảnh ư...?",
						"thai": "ภาพลวงตาหรือ...?",
						"hindi": "भ्रम है...?"
					},
					"speaker": "character_any",
					"emotion": "base"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "kemet",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						2
					]
				},
				{
					"emotion": "base",
					"speaker": "kemet",
					"content": {
						"korean": "지도 속에는 고대 검사의 문양이 숨겨져 있었네.",
						"english": "Within the map, an ancient swordsman's emblem was hidden.",
						"japanese": "地図の中には、古代の剣士の紋様が隠されていたのだよ。",
						"chinese": "地图中隐藏着古代剑士的徽章。",
						"french": "Dans la carte, l'emblème d'un ancien épéiste était caché.",
						"spanish": "En el mapa, el emblema de un antiguo espadachín estaba oculto.",
						"vietnamese": "Trong bản đồ, một phù hiệu của kiếm sĩ cổ đại được ẩn giấu.",
						"thai": "ภายในแผนที่ มีสัญลักษณ์ของนักดาบโบราณซ่อนอยู่",
						"hindi": "नक्शे के भीतर, एक प्राचीन तलवारबाज का प्रतीक छिपा हुआ था।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "검사…? 이 사막에?",
						"english": "Swordsman...? In this desert?",
						"japanese": "剣士…？この砂漠に？",
						"chinese": "剑士…？在这片沙漠里？",
						"french": "Un épéiste...? Dans ce désert?",
						"spanish": "¿Un espadachín...? ¿En este desierto?",
						"vietnamese": "Kiếm sĩ...? Ở sa mạc này sao?",
						"thai": "นักดาบ...? ในทะเลทรายนี้หรือ?",
						"hindi": "तलवारबाज...? इस रेगिस्तान में?"
					}
				},
				{
					"speaker": "kemet",
					"emotion": "base",
					"content": {
						"korean": "아주 먼 옛날, 이 사막은 맹렬한 전투의 전장이었지. 그들의 기억이….",
						"english": "Long, long ago, this desert was a fierce battlefield. Their memories...",
						"japanese": "はるか昔、この砂漠は熾烈な戦場の地だった。彼らの記憶が…。",
						"chinese": "很久很久以前，这片沙漠是激烈战斗的战场。他们的记忆…",
						"french": "Il y a très longtemps, ce désert était un champ de bataille féroce. Leurs souvenirs...",
						"spanish": "Hace mucho, mucho tiempo, este desierto fue un campo de batalla feroz. Sus recuerdos...",
						"vietnamese": "Rất rất xa xưa, sa mạc này từng là chiến trường khốc liệt. Ký ức của họ...",
						"thai": "นานมาแล้ว ทะเลทรายแห่งนี้เป็นสมรภูมิรบอันดุเดือด ความทรงจำของพวกเขา...",
						"hindi": "बहुत, बहुत पहले, यह रेगिस्तान एक भयंकर युद्ध का मैदान था। उनकी यादें..."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "몸에 붉은 반점이… 점점.",
						"english": "Red spots on my body... more and more.",
						"japanese": "体に赤い斑点が… 점점。",
						"chinese": "身体上出现红色斑点… 越来越多。",
						"french": "Des taches rouges sur mon corps... de plus en plus.",
						"spanish": "Manchas rojas en mi cuerpo... cada vez más.",
						"vietnamese": "Những đốm đỏ trên cơ thể... ngày càng nhiều.",
						"thai": "จุดแดงบนร่างกาย... เพิ่มขึ้นเรื่อยๆ",
						"hindi": "मेरे शरीर पर लाल धब्बे... बढ़ते जा रहे हैं।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "사막의 저주가 시작된 모양이군. 조심하게.",
						"english": "The desert's curse seems to have begun. Be careful.",
						"japanese": "砂漠の呪いが始まったようだ。気をつけろ。",
						"chinese": "沙漠的诅咒似乎已经开始。小心。",
						"french": "La malédiction du désert semble avoir commencé. Soyez prudent.",
						"spanish": "La maldición del desierto parece haber comenzado. Ten cuidado.",
						"vietnamese": "Lời nguyền sa mạc dường như đã bắt đầu. Hãy cẩn thận.",
						"thai": "คำสาปแห่งทะเลทรายดูเหมือนจะเริ่มต้นขึ้นแล้ว ระวังตัวด้วย",
						"hindi": "रेगिस्तान का शाप शुरू हो गया लगता है। सावधान रहना।"
					},
					"speaker": "kemet",
					"emotion": "base"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "kemet",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						2
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 유적의 깊은 곳에는 검사의 환영이 잠들어 있네.",
						"english": "Deep within these ruins, the phantom of a swordsman slumbers.",
						"japanese": "この遺跡の奥深くには、剣士の幻影が眠っている。",
						"chinese": "在这遗迹深处，沉睡着一名剑士的幻影。",
						"french": "Dans les profondeurs de ces ruines, le fantôme d'un épéiste sommeille.",
						"spanish": "En lo profundo de estas ruinas, el fantasma de un espadachín duerme.",
						"vietnamese": "Sâu trong những tàn tích này, bóng ma của một kiếm sĩ đang ngủ yên.",
						"thai": "ลึกเข้าไปในซากปรักหักพังแห่งนี้ มีวิญญาณของนักดาบหลับใหลอยู่",
						"hindi": "इन खंडहरों की गहराई में, एक तलवारबाज का प्रेत सोया हुआ है।"
					},
					"speaker": "kemet",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "일행의 눈앞에 번개처럼 한 검사의 환영이 스쳐 지나갔다. 맹렬한 검격이 모래를 갈랐다.",
						"english": "Before their eyes, the phantom of a swordsman flashed like lightning. Fierce sword strikes rent the sand.",
						"japanese": "一行の目の前を、稲妻のように剣士の幻影が通り過ぎた。猛烈な剣撃が砂を切り裂いた。",
						"chinese": "一道剑士的幻影如闪电般从他们眼前掠过。猛烈的剑击撕裂了沙土。",
						"french": "Devant leurs yeux, le fantôme d'un épéiste passa comme l'éclair. De violents coups d'épée fendirent le sable.",
						"spanish": "Ante sus ojos, el fantasma de un espadachín pasó como un rayo. Feroces golpes de espada rajaron la arena.",
						"vietnamese": "Trước mắt họ, bóng ma của một kiếm sĩ lướt qua như chớp. Những nhát kiếm dữ dội xé toạc cát.",
						"thai": "ต่อหน้าพวกเขา วิญญาณของนักดาบปรากฏขึ้นราวกับสายฟ้า การฟาดฟันดาบอันดุร้ายแยกทรายออก",
						"hindi": "उनकी आँखों के सामने, एक तलवारबाज का प्रेत बिजली की तरह चमका। भीषण तलवार के वार ने रेत को चीर दिया।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "방금… 뭐였지?",
						"english": "What… was that just now?",
						"japanese": "今のは…何だった？",
						"chinese": "刚才…那是什么？",
						"french": "Qu'est-ce que… c'était tout à l'heure ?",
						"spanish": "¿Qué… fue eso justo ahora?",
						"vietnamese": "Vừa rồi… là gì vậy?",
						"thai": "เมื่อกี้… คืออะไรน่ะ?",
						"hindi": "अभी… वह क्या था?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "진실의 단편일세. 어쩌면… 이 지도의 주인의 과거일지도.",
						"english": "A fragment of truth. Perhaps… the past of this map's owner.",
						"japanese": "真実の断片だ。もしかしたら…この地図の持ち主の過去かもしれない。",
						"chinese": "这是真相的碎片。或许……是这张地图主人的过去。",
						"french": "Un fragment de vérité. Peut-être… le passé du propriétaire de cette carte.",
						"spanish": "Un fragmento de la verdad. Quizás… el pasado del dueño de este mapa.",
						"vietnamese": "Một mảnh sự thật. Có lẽ… là quá khứ của chủ nhân tấm bản đồ này.",
						"thai": "เสี้ยวหนึ่งของความจริง บางที…อาจเป็นอดีตของเจ้าของแผนที่นี้",
						"hindi": "सत्य का एक अंश। शायद… इस नक्शे के मालिक का अतीत।"
					},
					"speaker": "kemet",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "바닥에… 부서진 검 조각이.",
						"english": "On the floor… a broken sword fragment.",
						"japanese": "床に…壊れた剣の破片が。",
						"chinese": "地板上…有一块破碎的剑片。",
						"french": "Sur le sol… un fragment d'épée brisée.",
						"spanish": "En el suelo… un fragmento de espada rota.",
						"vietnamese": "Trên sàn… một mảnh kiếm vỡ.",
						"thai": "บนพื้น… มีเศษดาบหัก",
						"hindi": "फर्श पर… एक टूटी हुई तलवार का टुकड़ा।"
					},
					"speaker": "character_any",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "kemet",
					"duration_ms": 500,
					"spot": [
						4,
						2
					]
				},
				{
					"emotion": "angry",
					"speaker": "kemet",
					"type": "speech",
					"content": {
						"korean": "더 이상은 위험하다네! 저것은… 지도의 진실을 감시하는 자!",
						"english": "Any further is dangerous! That is… the one who guards the truth of the map!",
						"japanese": "これ以上は危険だ！あれは…地図の真実を監視する者だ！",
						"chinese": "再往前就危险了！那是……监视地图真相的人！",
						"french": "Aller plus loin est dangereux ! C'est… celui qui garde la vérité de la carte !",
						"spanish": "¡Más allá es peligroso! ¡Ese es… el que guarda la verdad del mapa!",
						"vietnamese": "Tiếp tục nữa sẽ nguy hiểm! Đó là… kẻ canh giữ sự thật của bản đồ!",
						"thai": "ไปต่ออีกก็อันตรายแล้ว! นั่นคือ… ผู้พิทักษ์ความจริงของแผนที่!",
						"hindi": "और आगे बढ़ना खतरनाक है! वह है… नक्शे की सच्चाई का रक्षक!"
					}
				},
				{
					"content": {
						"korean": "거대한 그림자가 유적의 끝에서 나타났다. 모래를 집어삼키는 듯한 존재.",
						"english": "A colossal shadow emerged from the end of the ruins. An entity that seemed to devour the sand.",
						"japanese": "巨大な影が遺跡の奥から現れた。砂を飲み込むような存在だ。",
						"chinese": "一个巨大的黑影从遗迹的尽头出现。一个仿佛吞噬沙子的存在。",
						"french": "Une ombre colossale émergea du fond des ruines. Une entité qui semblait dévorer le sable.",
						"spanish": "Una sombra colosal emergió del final de las ruinas. Una entidad que parecía devorar la arena.",
						"vietnamese": "Một bóng tối khổng lồ xuất hiện từ cuối tàn tích. Một thực thể dường như nuốt chửng cát.",
						"thai": "เงาขนาดมหึมาปรากฏขึ้นจากส่วนท้ายของซากปรักหักพัง สิ่งมีชีวิตที่ดูเหมือนจะกลืนกินผืนทราย",
						"hindi": "खंडहरों के अंत से एक विशाल छाया उभरी। एक ऐसी इकाई जो रेत को निगलती हुई प्रतीत होती थी।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "감히… 여기까지 왔느냐. 미약한 존재들이여.",
						"english": "Dare you… come this far, you insignificant beings?",
						"japanese": "よくも…ここまで来たな。取るに足らぬ者どもよ。",
						"chinese": "你们竟敢……来到这里。渺小的存在们。",
						"french": "Osez-vous… venir jusqu'ici, êtres insignifiants ?",
						"spanish": "¿Os atrevéis… a llegar tan lejos, seres insignificantes?",
						"vietnamese": "Ngươi dám… đến tận đây sao, những kẻ yếu ớt?",
						"thai": "กล้า… มาถึงที่นี่เชียวหรือ พวกสิ่งมีชีวิตอันไร้ค่า?",
						"hindi": "हिम्मत हुई… इतनी दूर आने की, तुम तुच्छ प्राणियों?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "물러서지 않아!",
						"english": "We won't back down!",
						"japanese": "退かない！",
						"chinese": "我们不会退缩！",
						"french": "Nous ne reculerons pas !",
						"spanish": "¡No retrocederemos!",
						"vietnamese": "Chúng ta sẽ không lùi bước!",
						"thai": "เราจะไม่ถอย!",
						"hindi": "हम पीछे नहीं हटेंगे!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"duration_ms": 400,
					"speaker": "kemet",
					"action": "exit",
					"type": "direction",
					"direction": "down"
				},
				{
					"content": {
						"korean": "나는 지도의 진실을 마저 확인해야겠군. 이곳의….",
						"english": "I must verify the map's truth. This place's...",
						"japanese": "私は地図の真実を確かめなければならない。この場所の...",
						"chinese": "我必须继续确认地图的真相。这里的...",
						"french": "Je dois vérifier la vérité de la carte. De cet endroit...",
						"spanish": "Debo verificar la verdad del mapa. De este lugar...",
						"vietnamese": "Tôi phải xác nhận sự thật của bản đồ. Nơi này...",
						"thai": "ฉันต้องตรวจสอบความจริงของแผนที่ต่อไป ที่นี่...",
						"hindi": "मुझे नक्शे की सच्चाई की पुष्टि करनी होगी। इस जगह का..."
					},
					"type": "speech",
					"speaker": "kemet",
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "모래의 심판은 가혹했다.",
						"english": "The judgment of the sand was harsh.",
						"japanese": "砂の審判は苛酷だった。",
						"chinese": "沙之审判残酷无情。",
						"french": "Le jugement du sable fut cruel.",
						"spanish": "El juicio de la arena fue cruel.",
						"vietnamese": "Sự phán xét của cát thật nghiệt ngã.",
						"thai": "คำตัดสินของทรายนั้นโหดร้าย",
						"hindi": "रेत का न्याय कठोर था।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "감히… {random_boss}의 길을 막으려 했느냐. 어리석군.",
						"english": "You dared... try to block {random_boss}'s path? Foolish.",
						"japanese": "よくも… {random_boss}の道を阻もうとしたな。愚かな。",
						"chinese": "竟敢… 阻挡{random_boss}的道路。愚蠢。",
						"french": "Tu as osé... essayer de bloquer le chemin de {random_boss}? Insensé.",
						"spanish": "¿Osaste... intentar bloquear el camino de {random_boss}? Estúpido.",
						"vietnamese": "Ngươi dám... cản đường của {random_boss} sao? Thật ngu xuẩn.",
						"thai": "แกกล้า... มาขวางทางของ {random_boss} งั้นหรือ? ช่างโง่เขลา",
						"hindi": "तुमने हिम्मत की... {random_boss} का रास्ता रोकने की? मूर्ख।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아직… 끝나지 않았어!",
						"english": "It's not... over yet!",
						"japanese": "まだ… 終わってない！",
						"chinese": "还没… 结束！",
						"french": "Ce n'est pas... encore fini !",
						"spanish": "¡Aún... no ha terminado!",
						"vietnamese": "Chưa... kết thúc đâu!",
						"thai": "ยัง... ไม่จบ!",
						"hindi": "अभी... खत्म नहीं हुआ!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"win_dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "정체 모를 보스는 모래가 되어 흩어졌다.",
						"english": "The mysterious boss scattered into sand.",
						"japanese": "正体不明のボスは砂となって散っていった。",
						"chinese": "身份不明的首领化为沙尘散去。",
						"french": "Le boss mystérieux s'est dispersé en sable.",
						"spanish": "El jefe misterioso se dispersó en arena.",
						"vietnamese": "Con trùm bí ẩn tan thành cát bụi.",
						"thai": "บอสลึกลับสลายกลายเป็นผงทราย",
						"hindi": "रहस्यमय बॉस रेत में बिखर गया।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "해냈어…!",
						"english": "We did it...!",
						"japanese": "やったぞ…！",
						"chinese": "我们做到了…！",
						"french": "On l'a fait…!",
						"spanish": "¡Lo logramos…!",
						"vietnamese": "Chúng ta đã làm được...!",
						"thai": "ทำสำเร็จ...!",
						"hindi": "हमने कर दिखाया…!"
					},
					"speaker": "character_any",
					"emotion": "happy"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "{random_boss}는… 패배를 모른다… 지도…는… 곧….",
						"english": "{random_boss}... knows no defeat... The map... soon...",
						"japanese": "{random_boss}は… 敗北を知らぬ… 地図…は… すぐに…",
						"chinese": "{random_boss}… 不知失败为何物… 地图… 很快…",
						"french": "{random_boss}... ne connaît pas la défaite... La carte... bientôt...",
						"spanish": "{random_boss}... no conoce la derrota... El mapa... pronto...",
						"vietnamese": "{random_boss}... không biết thất bại là gì... Bản đồ... sẽ sớm...",
						"thai": "{random_boss}... ไม่รู้จักความพ่ายแพ้... แผนที่... กำลังจะ...",
						"hindi": "{random_boss}... हार नहीं मानता... नक्शा... जल्द ही..."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "무슨 소리야…?",
						"english": "What was that...?",
						"japanese": "何を言っているんだ…？",
						"chinese": "你说什么…？",
						"french": "Qu'est-ce que tu dis...?",
						"spanish": "¿Qué fue eso...?",
						"vietnamese": "Cái gì vậy...?",
						"thai": "อะไรนะ...?",
						"hindi": "क्या कहा…?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "지도의 글귀는 더욱 빠르게 변조되고 있었다. 진실은… 점점 더 멀어져 가는 듯했다.",
						"english": "The map's inscription was rapidly distorting. The truth... seemed to drift further away.",
						"japanese": "地図の文字はさらに速く変質していた。真実は… ますます遠ざかっていくようだった。",
						"chinese": "地图上的文字正在加速扭曲。真相… 似乎渐行渐远。",
						"french": "L'inscription de la carte se déformait rapidement. La vérité... semblait s'éloigner de plus en plus.",
						"spanish": "La inscripción del mapa se distorsionaba rápidamente. La verdad... parecía alejarse cada vez más.",
						"vietnamese": "Dòng chữ trên bản đồ biến đổi nhanh hơn. Sự thật... dường như ngày càng xa vời.",
						"thai": "ตัวอักษรบนแผนที่เริ่มบิดเบือนเร็วขึ้นเรื่อยๆ ความจริง... ดูเหมือนจะเลือนหายไปไกลขึ้นทุกที",
						"hindi": "नक्शे का लेख तेजी से विकृत हो रहा था। सच्चाई... और दूर होती जा रही थी।"
					},
					"type": "speech"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"앰버의 샘은 독이었다. 일행은 거대한 유적에 갇혔다.",
			"오래된 지도가 길을 안내하지만, 그 글귀는 계속 변조되고 있었다.",
			"고대 검사의 환영, 사막의 시간이 뒤틀린다.",
			"진실을 향한 길은, 파멸로 향하는 길일까?"
		],
		"english": [
			"The Amber Spring was poison. The party was trapped in a colossal ruin.",
			"An old map guides the way, but its writings kept distorting.",
			"Phantom of an ancient swordsman, the desert's time twists.",
			"Is the path to truth, a path to ruin?"
		],
		"japanese": [
			"琥珀の泉は毒だった。一行は巨大な遺跡に閉じ込められた。",
			"古の地図が道を示すが、その記述は絶えず歪められていた。",
			"古の剣士の幻影、砂漠の時が歪む。",
			"真実への道は、破滅への道なのか？"
		],
		"chinese": [
			"琥珀之泉有毒。一行人被困在巨大的遗迹中。",
			"一张古老的地图指引着道路，但上面的文字却不断扭曲。",
			"古代剑士的幻影，沙漠的时间扭曲了。",
			"通往真相的道路，是通往毁灭的道路吗？"
		],
		"french": [
			"La Source d'Ambre était un poison. Le groupe fut piégé dans une ruine colossale.",
			"Une vieille carte indique le chemin, mais ses inscriptions ne cessaient de se déformer.",
			"Le fantôme d'un ancien épéiste, le temps du désert se déforme.",
			"Le chemin vers la vérité est-il un chemin vers la ruine ?"
		],
		"spanish": [
			"El Manantial Ámbar era veneno. El grupo quedó atrapado en una ruina colosal.",
			"Un antiguo mapa guía el camino, pero sus inscripciones no dejaban de distorsionarse.",
			"El fantasma de un antiguo espadachín, el tiempo del desierto se distorsiona.",
			"¿Es el camino hacia la verdad, un camino hacia la ruina?"
		],
		"vietnamese": [
			"Suối Hổ Phách là độc. Đoàn người bị mắc kẹt trong một di tích khổng lồ.",
			"Một tấm bản đồ cũ chỉ đường, nhưng những dòng chữ trên đó không ngừng bị biến đổi.",
			"Huyễn ảnh của kiếm sĩ cổ đại, thời gian sa mạc bị bóp méo.",
			"Con đường đến sự thật, có phải là con đường dẫn đến hủy diệt?"
		],
		"thai": [
			"น้ำพุอำพันคือน้ำพิษ คณะถูกขังอยู่ในซากปรักหักพังขนาดมหึมา",
			"แผนที่โบราณนำทาง แต่ตัวอักษรบนนั้นบิดเบือนไปเรื่อย ๆ",
			"ภาพหลอนของนักดาบโบราณ กาลเวลาแห่งทะเลทรายบิดเบี้ยว",
			"เส้นทางสู่ความจริงคือหนทางสู่หายนะหรือ?"
		],
		"hindi": [
			"एम्बर स्प्रिंग ज़हर था। दल एक विशाल खंडहर में फँस गया।",
			"एक पुराना नक्शा रास्ता दिखाता है, लेकिन उसकी लिखावट लगातार विकृत हो रही थी।",
			"एक प्राचीन तलवारबाज का प्रेत, रेगिस्तान का समय विकृत हो जाता है।",
			"क्या सत्य की राह, विनाश की राह है?"
		]
	}
} as const;
