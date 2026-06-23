export const scenario_snowy_lyra_12_02 = {
	"scenario_id": "snowy_lyra_12_02",
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
			"dialogue": [
				{
					"content": {
						"korean": "오로라의 빛이 이끄는 길 끝에, 얼음으로 뒤덮인 거대한 동굴이 나타났다.",
						"english": "At the end of the path guided by Aurora's light, a massive ice-covered cave appeared.",
						"japanese": "オーロラの光が導く道の先に、氷に覆われた巨大な洞窟が現れた。",
						"chinese": "在极光之光指引的道路尽头，出现了一座被冰覆盖的巨大洞窟。",
						"french": "Au bout du chemin guidé par la lumière de l'Aurore, une immense caverne recouverte de glace apparut.",
						"spanish": "Al final del camino guiado por la luz de la aurora, apareció una enorme cueva cubierta de hielo.",
						"vietnamese": "Ở cuối con đường được dẫn lối bởi ánh sáng của Cực quang, một hang động khổng lồ phủ đầy băng đã hiện ra.",
						"thai": "ณ ปลายทางที่แสงเหนือส่องนำ, ถ้ำน้ำแข็งขนาดมหึมาได้ปรากฏขึ้น",
						"hindi": "ऑरोरा के प्रकाश से निर्देशित मार्ग के अंत में, एक विशाल बर्फ से ढकी गुफा दिखाई दी।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이곳이 오로라가 가리킨 곳인가…?",
						"english": "Is this the place Aurora pointed to...?",
						"japanese": "ここがオーロラが指し示した場所なのか…？",
						"chinese": "这里就是极光所指的地方吗……？",
						"french": "Est-ce l'endroit que l'Aurore a indiqué...?",
						"spanish": "¿Es este el lugar que señaló la aurora...?",
						"vietnamese": "Đây có phải là nơi mà Cực quang đã chỉ dẫn...?",
						"thai": "ที่นี่คือที่ที่แสงเหนือชี้บอกงั้นหรือ...?",
						"hindi": "क्या यह वही जगह है जिसे ऑरोरा ने बताया था...?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "eira",
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "놀랍군요. 고대 문명의 유적이에요.",
						"english": "Amazing. It's the ruins of an ancient civilization.",
						"japanese": "驚きだ。古代文明の遺跡だよ。",
						"chinese": "真令人惊讶。这是古代文明的遗迹。",
						"french": "Incroyable. Ce sont les ruines d'une ancienne civilisation.",
						"spanish": "Asombroso. Son las ruinas de una civilización antigua.",
						"vietnamese": "Thật ngạc nhiên. Đây là tàn tích của một nền văn minh cổ đại.",
						"thai": "น่าทึ่งจังเลย. มันคือซากอารยธรรมโบราณนี่นา.",
						"hindi": "कमाल है। यह एक प्राचीन सभ्यता के खंडहर हैं।"
					},
					"speaker": "eira",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "녹지 않는 얼음 속에… 알 수 없는 언어의 각인이 희미하게 빛나고 있어요.",
						"english": "Within the unmelting ice... faint carvings in an unknown language glow.",
						"japanese": "溶けない氷の中に…未知の言語の刻印が微かに光っている。",
						"chinese": "在不融化的冰中……未知语言的刻印正在微弱地闪烁着。",
						"french": "Dans la glace éternelle... des gravures en une langue inconnue brillent faiblement.",
						"spanish": "Dentro del hielo que no se derrite... grabados en un idioma desconocido brillan débilmente.",
						"vietnamese": "Trong lớp băng không tan chảy... những ký tự của một ngôn ngữ không rõ đang mờ ảo phát sáng.",
						"thai": "ภายในน้ำแข็งที่ไม่ละลาย... มีรอยจารึกในภาษาที่ไม่รู้จักกำลังส่องแสงจางๆ",
						"hindi": "न पिघलने वाली बर्फ में... एक अज्ञात भाषा के निशान हल्के से चमक रहे हैं।"
					},
					"speaker": "eira"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira"
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "이 룬 문자들을 보세요. 단순한 기록이 아니에요.",
						"english": "Look at these runes. They're not just simple records.",
						"japanese": "このルーン文字を見て。ただの記録じゃない。",
						"chinese": "看看这些符文。它们不是简单的记录。",
						"french": "Regardez ces runes. Ce ne sont pas de simples enregistrements.",
						"spanish": "Miren estas runas. No son simples registros.",
						"vietnamese": "Nhìn những chữ rune này. Chúng không chỉ là những ghi chép đơn thuần.",
						"thai": "ดูอักษรรูนพวกนี้สิ. มันไม่ใช่แค่บันทึกธรรมดาหรอกนะ.",
						"hindi": "इन रूणों को देखो। ये सिर्फ़ साधारण रिकॉर्ड नहीं हैं।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "어떤 의미지?",
						"english": "What does it mean?",
						"japanese": "どういう意味？",
						"chinese": "什么意思？",
						"french": "Qu'est-ce que ça veut dire ?",
						"spanish": "¿Qué significa?",
						"vietnamese": "Có ý nghĩa gì?",
						"thai": "หมายความว่าอะไร?",
						"hindi": "इसका क्या मतलब है?"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "마치… 어떤 힘을 봉인하고 있는 것 같아요.",
						"english": "It feels like... it's sealing some kind of power.",
						"japanese": "まるで… 何かの力を封印しているようです。",
						"chinese": "好像… 正在封印着某种力量。",
						"french": "On dirait… que ça scelle un pouvoir.",
						"spanish": "Parece… que está sellando algún poder.",
						"vietnamese": "Cứ như là… nó đang phong ấn một sức mạnh nào đó.",
						"thai": "ราวกับว่า… มันกำลังผนึกพลังบางอย่างไว้",
						"hindi": "ऐसा लगता है… यह किसी शक्ति को सील कर रहा है।"
					},
					"speaker": "eira",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "봉인이라니… 위험한 건 아니겠지?",
						"english": "Sealing...? It's not dangerous, is it?",
						"japanese": "封印だなんて… 危険じゃないよね？",
						"chinese": "封印… 应该不危险吧？",
						"french": "Scellé… Ce n'est pas dangereux, n'est-ce pas ?",
						"spanish": "¿Sellado…? No será peligroso, ¿verdad?",
						"vietnamese": "Phong ấn ư… Không nguy hiểm chứ?",
						"thai": "ผนึกงั้นเหรอ… คงไม่เป็นอันตรายหรอกใช่ไหม?",
						"hindi": "सील करना… यह खतरनाक तो नहीं होगा?"
					},
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "오로라가 우리를 이곳으로 이끈 이유가… 과연 좋은 것일까요?",
						"english": "I wonder if the reason the aurora led us here… is truly a good one?",
						"japanese": "オーロラが私たちをここへ導いた理由が… 果たして良いことなのでしょうか？",
						"chinese": "极光指引我们来到这里的原因… 会是好事吗？",
						"french": "Est-ce que la raison pour laquelle l'aurore nous a menés ici… est vraiment une bonne chose ?",
						"spanish": "¿Será realmente bueno el motivo por el que la aurora nos ha traído hasta aquí?",
						"vietnamese": "Liệu lý do cực quang dẫn chúng ta đến đây… có phải là điều tốt đẹp không?",
						"thai": "เหตุผลที่แสงเหนือพาเรามาที่นี่… มันจะเป็นเรื่องดีจริงหรือเปล่า?",
						"hindi": "क्या यह अच्छा होगा कि ऑरोरा हमें यहाँ ले आई?"
					},
					"speaker": "eira",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "eira",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이 유물… 심상치 않아요.",
						"english": "This relic… something's not right about it.",
						"japanese": "この遺物… ただ事じゃないわ。",
						"chinese": "这件遗物… 非同寻常。",
						"french": "Cet artefact… est étrange.",
						"spanish": "Esta reliquia… no es normal.",
						"vietnamese": "Di vật này… không tầm thường.",
						"thai": "วัตถุโบราณชิ้นนี้… ไม่ธรรมดาเลย",
						"hindi": "यह अवशेष… सामान्य नहीं है।"
					},
					"speaker": "eira"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "잠깐, 여기 기운이… 불안정해요! 건드려선 안 돼요!",
						"english": "Wait, the energy here… it's unstable! Don't touch it!",
						"japanese": "待って、ここの気配が… 不安定だわ！触っちゃだめよ！",
						"chinese": "等等，这里的气息… 不稳定！不能碰！",
						"french": "Attendez, l'énergie ici… est instable ! Ne le touchez pas !",
						"spanish": "¡Espera, la energía aquí… es inestable! ¡No lo toques!",
						"vietnamese": "Khoan đã, luồng khí ở đây… bất ổn định! Đừng chạm vào!",
						"thai": "เดี๋ยวก่อน พลังงานที่นี่… มันไม่เสถียร! ห้ามแตะต้อง!",
						"hindi": "रुको, यहाँ की ऊर्जा… अस्थिर है! इसे मत छूना!"
					},
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "고대 유물이 빛나기 시작했다. 얼어붙었던 기운이 깨어나며 강력한 존재가 모습을 드러냈다.",
						"english": "The ancient relic began to glow. As the frozen energy awakened, a powerful being revealed itself.",
						"japanese": "古代の遺物が輝き始めた。凍りついていた気が目覚め、強大な存在が姿を現した。",
						"chinese": "古代遗物开始发光。冰封的力量苏醒，一个强大的存在显露了身形。",
						"french": "L'ancien artefact commença à briller. Alors que l'énergie gelée se réveillait, une puissante entité apparut.",
						"spanish": "La reliquia antigua empezó a brillar. Mientras la energía congelada despertaba, un ser poderoso se reveló.",
						"vietnamese": "Di vật cổ đại bắt đầu phát sáng. Năng lượng băng giá thức tỉnh, một thực thể mạnh mẽ đã lộ diện.",
						"thai": "วัตถุโบราณเริ่มเปล่งแสง พลังงานที่ถูกแช่แข็งตื่นขึ้น และสิ่งมีชีวิตที่ทรงพลังได้ปรากฏตัวขึ้น",
						"hindi": "प्राचीन अवशेष चमकने लगा। जमी हुई ऊर्जा जागृत हुई और एक शक्तिशाली प्राणी प्रकट हुआ।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "침입자… 감히 잠든 이를 깨우다니…",
						"english": "Intruders… How dare you awaken the sleeping one…",
						"japanese": "侵入者め… 眠れる者をよくも目覚めさせたな…",
						"chinese": "入侵者… 竟敢唤醒沉睡者…",
						"french": "Intruses… Comment osez-vous réveiller celui qui dort…",
						"spanish": "Intrusos… ¿Cómo osáis despertar al que duerme…?",
						"vietnamese": "Kẻ xâm nhập… Dám đánh thức kẻ đang ngủ…",
						"thai": "ผู้บุกรุก… กล้าดียังไงมาปลุกผู้หลับใหล…",
						"hindi": "घुसपैठियों… तुम्हारी हिम्मत कैसे हुई सोते हुए को जगाने की…"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "이게 뭐야! 수호자인가?",
						"english": "What is this?! Is it a guardian?",
						"japanese": "何これ！守護者なの？",
						"chinese": "这是什么！是守护者吗？",
						"french": "Qu'est-ce que c'est que ça ?! C'est un gardien ?",
						"spanish": "¡¿Qué es esto?! ¿Es un guardián?",
						"vietnamese": "Cái gì thế này! Là kẻ canh gác sao?",
						"thai": "นี่มันอะไรกัน! ผู้พิทักษ์เหรอ?",
						"hindi": "यह क्या है! क्या यह एक संरक्षक है?"
					},
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"speaker": "eira",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"emotion": "angry",
					"speaker": "eira",
					"content": {
						"korean": "조심하세요! 저 수호자는 고대 문명의 강력한 힘으로 움직여요!",
						"english": "Be careful! That guardian is powered by the ancient civilization's mighty force!",
						"japanese": "気をつけて！あの守護者は古代文明の強大な力で動いているわ！",
						"chinese": "小心！那个守护者是靠古代文明的强大力量驱动的！",
						"french": "Faites attention ! Ce gardien est alimenté par la puissante force d'une ancienne civilisation !",
						"spanish": "¡Tened cuidado! ¡Ese guardián se mueve con la poderosa fuerza de una antigua civilización!",
						"vietnamese": "Cẩn thận! Kẻ canh gác đó được vận hành bằng sức mạnh cường đại của nền văn minh cổ đại!",
						"thai": "ระวัง! ผู้พิทักษ์นั่นเคลื่อนไหวด้วยพลังอันแข็งแกร่งของอารยธรรมโบราณ!",
						"hindi": "सावधान! वह संरक्षक प्राचीन सभ्यता की शक्तिशाली शक्ति से चलता है!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "막아야 해. 여기서 물러설 순 없어!",
						"english": "We must stop them. We can't retreat now!",
						"japanese": "止めなければならない。ここで退くわけにはいかない！",
						"chinese": "必须阻止他们。我们不能退缩！",
						"french": "Il faut les arrêter. Impossible de reculer maintenant !",
						"spanish": "Debemos detenerlos. ¡No podemos retroceder ahora!",
						"vietnamese": "Phải ngăn chặn chúng. Không thể lùi bước lúc này!",
						"thai": "ต้องหยุดมันให้ได้ เราถอยตอนนี้ไม่ได้!",
						"hindi": "हमें उन्हें रोकना होगा। अब हम पीछे नहीं हट सकते!"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "어리석은 필멸자들… 감히 나에게 대적하려 하는가.",
						"english": "Foolish mortals... How dare you defy me.",
						"japanese": "愚かなる定命の者ども… 敢えて我に逆らうか。",
						"chinese": "愚蠢的凡人… 竟敢与我为敌。",
						"french": "Mortels insensés… Comment osez-vous me défier ?",
						"spanish": "Mortales estúpidos… ¿Cómo osáis desafiarme?",
						"vietnamese": "Loài phàm trần ngu xuẩn… Dám cả gan chống đối ta sao.",
						"thai": "มนุษย์ผู้โง่เขลา… กล้าดียังไงมาต่อต้านข้า.",
						"hindi": "मूर्ख नश्वर प्राणी… तुम्हारी हिम्मत कैसे हुई मुझसे मुकाबला करने की।"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이 유적을 지키는 존재… 단순히 방어하는 것만이 목적이 아닌 것 같아요.",
						"english": "The entity guarding this ruin... Its purpose seems to be more than just defense.",
						"japanese": "この遺跡を守る存在… 単に防御するだけが目的ではないようだ。",
						"chinese": "守护这遗迹的存在… 目的似乎不仅仅是防御。",
						"french": "L'entité qui garde cette ruine… Son but ne semble pas être seulement la défense.",
						"spanish": "La entidad que protege esta ruina… Parece que su propósito es más que solo defender.",
						"vietnamese": "Thực thể canh giữ di tích này… Mục đích của nó dường như không chỉ là phòng thủ.",
						"thai": "สิ่งมีชีวิตที่เฝ้ารักษาวิญญาณนี้... ดูเหมือนว่าจุดประสงค์ของมันไม่ได้มีแค่การป้องกัน.",
						"hindi": "इस खंडहर की रक्षा करने वाली सत्ता… उसका उद्देश्य केवल बचाव करना नहीं लगता।"
					},
					"speaker": "eira"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "크윽… 나의 역할은… 여기까지인가…",
						"english": "Ugh... Is my role... ending here...?",
						"japanese": "くっ… 私の役目は… ここまでなのか…",
						"chinese": "咳… 我的使命… 到此为止了吗…",
						"french": "Ugh… Mon rôle… se termine-t-il ici… ?",
						"spanish": "Ugh… ¿Mi papel… termina aquí…?",
						"vietnamese": "Khụ… Vai trò của ta… đến đây là hết ư…",
						"thai": "อึก… บทบาทของข้า… สิ้นสุดแค่นี้หรือนี่…",
						"hindi": "उफ़… क्या मेरी भूमिका… यहीं तक थी…?"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "하지만… 진정한 재앙은… 오로라 안에… 있다…",
						"english": "But... the true disaster... lies within the Aurora...",
						"japanese": "だが… 真の災厄は… オーロラの中に… ある…",
						"chinese": "但是… 真正的灾难… 在极光之中…",
						"french": "Mais… le véritable désastre… se trouve dans l'Aurore…",
						"spanish": "Pero… el verdadero desastre… reside en la Aurora…",
						"vietnamese": "Nhưng… thảm họa thực sự… nằm bên trong Aurora…",
						"thai": "แต่ว่า… หายนะที่แท้จริง… อยู่ในแสงออโรรา…",
						"hindi": "लेकिन… असली आपदा… अरोरा के अंदर… है…"
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "오로라? 대체 무슨 소리야?",
						"english": "Aurora? What on earth are you talking about?",
						"japanese": "オーロラ？一体何を言っているんだ？",
						"chinese": "极光？这到底是什么意思？",
						"french": "Aurore ? De quoi parlez-vous donc ?",
						"spanish": "¿Aurora? ¿De qué estás hablando?",
						"vietnamese": "Aurora? Rốt cuộc là ý gì vậy?",
						"thai": "ออโรรา? นี่มันเรื่องอะไรกันแน่?",
						"hindi": "अरोरा? आखिर तुम क्या बक रहे हो?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
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
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "저 수호자가 말한 건… 오로라의 또 다른 진실을 암시하는 걸까요?",
						"english": "Could what that guardian said... hint at another truth of the Aurora?",
						"japanese": "あの守護者が言ったことは… オーロラのもう一つの真実を暗示しているのだろうか？",
						"chinese": "那个守护者说的话… 是在暗示极光的另一个真相吗？",
						"french": "Ce que ce gardien a dit… ferait-il allusion à une autre vérité de l'Aurore ?",
						"spanish": "¿Lo que dijo ese guardián… insinúa otra verdad sobre la Aurora?",
						"vietnamese": "Lời mà người bảo hộ đó nói… có phải đang ám chỉ một sự thật khác của Aurora không?",
						"thai": "สิ่งที่ผู้พิทักษ์คนนั้นพูด… กำลังบอกใบ้ถึงความจริงอีกด้านของออโรราหรือเปล่า?",
						"hindi": "क्या उस संरक्षक ने जो कहा… वह अरोरा के एक और सच की ओर इशारा कर रहा था?"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "고대 수호자가 쓰러졌다. 그러나 오로라의 진실은 아직 미궁 속에. 탐험대는 더 깊은 얼음 속으로 발걸음을 옮긴다.",
						"english": "The ancient guardian has fallen. Yet, the truth of the Aurora remains shrouded in mystery. The expedition presses deeper into the ice.",
						"japanese": "古代の守護者は倒れた。しかし、オーロラの真実はまだ謎の中。探検隊は、さらに深い氷の中へと足を進める。",
						"chinese": "古代守护者已倒下。然而，极光的真相仍扑朔迷离。探险队将脚步迈向更深的冰层之中。",
						"french": "Le gardien antique est tombé. Pourtant, la vérité de l'Aurore demeure un mystère. L'expédition s'enfonce plus profondément dans la glace.",
						"spanish": "El guardián ancestral ha caído. No obstante, la verdad de la Aurora sigue siendo un misterio. La expedición avanza más profundo en el hielo.",
						"vietnamese": "Kẻ bảo hộ cổ đại đã gục ngã. Tuy nhiên, sự thật về cực quang vẫn còn là một bí ẩn. Đoàn thám hiểm tiến sâu hơn vào lớp băng.",
						"thai": "ผู้พิทักษ์โบราณล้มลงแล้ว ทว่าความจริงของแสงเหนือยังคงเป็นปริศนา ทีมสำรวจมุ่งหน้าสู่ใจกลางน้ำแข็งที่ลึกยิ่งขึ้น",
						"hindi": "प्राचीन संरक्षक पराजित हो गया। फिर भी, अरोरा का सत्य अभी भी रहस्य में लिपटा है। अभियान दल बर्फ में और गहराई तक बढ़ता है。"
					},
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 자들… 이 유적에 영원히 잠들지어다…",
						"english": "Fools... Sleep eternally in these ruins...",
						"japanese": "愚か者どもめ… この遺跡に永遠に眠るがいい…",
						"chinese": "愚蠢的凡人…… 永远沉睡在这遗迹之中吧……",
						"french": "Fous… Dormez éternellement dans ces ruines…",
						"spanish": "Necios… Dormid eternamente en estas ruinas…",
						"vietnamese": "Những kẻ ngu ngốc… Hãy vĩnh viễn ngủ yên trong di tích này đi…",
						"thai": "เจ้าพวกโง่... จงหลับใหลอยู่ในซากปรักหักพังนี้ชั่วนิรันดร์...",
						"hindi": "मूर्खों… इन खंडहरों में अनंत काल तक सो जाओ…"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "젠장… 아직… 끝나지 않았어!",
						"english": "Damn it... It's not... over yet!",
						"japanese": "くそっ… まだ… 終わってない！",
						"chinese": "该死…… 还没…… 结束！",
						"french": "Maudits… Ce n'est pas… encore fini !",
						"spanish": "Maldita sea… ¡Aún no… ha terminado!",
						"vietnamese": "Chết tiệt… Vẫn chưa… kết thúc đâu!",
						"thai": "บ้าจริง... ยัง... ไม่จบ!",
						"hindi": "धिक्कार है… यह अभी तक… खत्म नहीं हुआ है!"
					}
				},
				{
					"action": "enter",
					"speaker": "eira",
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
					"speaker": "eira",
					"content": {
						"korean": "포기하지 마세요. 아직 희망은 있어요.",
						"english": "Don't give up. There's still hope.",
						"japanese": "諦めないで。まだ希望はあります。",
						"chinese": "不要放弃。希望还在。",
						"french": "N'abandonnez pas. Il y a encore de l'espoir.",
						"spanish": "No te rindas. Aún hay esperanza.",
						"vietnamese": "Đừng bỏ cuộc. Vẫn còn hy vọng.",
						"thai": "อย่ายอมแพ้ ยังมีความหวังอยู่",
						"hindi": "हार मत मानो। अभी भी उम्मीद है।"
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "다시 와라… 그때는… 네 존재마저 잊게 해주마.",
						"english": "Come again... Next time... I'll make you forget your very existence.",
						"japanese": "また来るがいい… 次は… お前の存在すら忘れさせてやる。",
						"chinese": "再来吧…… 届时…… 我会让你连自己的存在都遗忘。",
						"french": "Revenez… La prochaine fois… Je vous ferai oublier votre existence même.",
						"spanish": "Vuelve… La próxima vez… Te haré olvidar tu propia existencia.",
						"vietnamese": "Hãy trở lại… Lần tới… ta sẽ khiến ngươi quên đi cả sự tồn tại của chính mình.",
						"thai": "กลับมาอีกครั้ง... ครั้งหน้า... ข้าจะทำให้เจ้าลืมเลือนแม้กระทั่งการมีอยู่ของตัวเอง",
						"hindi": "फिर से आना… अगली बार… मैं तुम्हें अपना अस्तित्व भी भुला दूंगा।"
					},
					"emotion": "angry",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "너희의 어리석음이… 이 유적을 파멸로 이끌 것이다.",
						"english": "Your foolishness... will lead this ruin to its demise.",
						"japanese": "お前たちの愚かさが… この遺跡を破滅へと導くだろう。",
						"chinese": "你们的愚蠢… 将会把这遗迹引向毁灭。",
						"french": "Votre folie… mènera cette ruine à sa perte.",
						"spanish": "Vuestra estupidez… llevará a esta ruina a su perdición.",
						"vietnamese": "Sự ngu xuẩn của các ngươi… sẽ dẫn dắt di tích này đến sự hủy diệt.",
						"thai": "ความโง่เขลาของพวกเจ้า… จะนำพาซากปรักหักพังนี้ไปสู่ความพินาศ.",
						"hindi": "तुम्हारी मूर्खता… इस खंडहर को उसके विनाश की ओर ले जाएगी।"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "우린 진실을 찾을 뿐이야! 네가 막을 수 없어!",
						"english": "We're only seeking the truth! You can't stop us!",
						"japanese": "我々は真実を探しているだけだ！貴様には止められない！",
						"chinese": "我们只是在寻找真相！你阻止不了我们！",
						"french": "Nous ne faisons que chercher la vérité ! Vous ne pouvez pas nous arrêter !",
						"spanish": "¡Solo buscamos la verdad! ¡No puedes detenernos!",
						"vietnamese": "Chúng ta chỉ đang tìm kiếm sự thật thôi! Ngươi không thể ngăn cản chúng ta!",
						"thai": "เราเพียงแค่ตามหาความจริง! เจ้าหยุดเราไม่ได้หรอก!",
						"hindi": "हम तो बस सच की तलाश में हैं! तुम हमें रोक नहीं सकते!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira",
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "이 전투는… 이 유적의 운명을 결정할 거예요.",
						"english": "This battle... will decide the fate of this ruin.",
						"japanese": "この戦いは… この遺跡の運命を決定するでしょう。",
						"chinese": "这场战斗… 将决定这座遗迹的命运。",
						"french": "Cette bataille… décidera du destin de cette ruine.",
						"spanish": "Esta batalla… decidirá el destino de esta ruina.",
						"vietnamese": "Trận chiến này… sẽ quyết định số phận của di tích này.",
						"thai": "การต่อสู้นี้… จะเป็นตัวตัดสินชะตากรรมของซากปรักหักพังแห่งนี้.",
						"hindi": "यह लड़ाई… इस खंडहर के भाग्य का फैसला करेगी।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"오로라의 부름에 이끌려 도착한 얼음 동굴.",
			"그곳에서 잠들어 있던 건, 잊혀진 미지의 문명이었다.",
			"그러나 고요했던 유적은 이방인의 발걸음에 깨어나고,",
			"얼어붙은 기억 속에서 고대 수호자가 눈을 뜬다.",
			"오로라가 가리킨 길의 끝은, 과연 구원일까 재앙일까?"
		],
		"english": [
			"Led by Aurora's call, I arrived at an ice cave.",
			"There, dormant, was a forgotten, unknown civilization.",
			"But the tranquil ruins awakened with the stranger's footsteps,",
			"and from frozen memories, an ancient guardian awakens.",
			"Will the path Aurora points to lead to salvation or disaster?"
		],
		"japanese": [
			"オーロラの呼び声に導かれ、たどり着いた氷の洞窟。",
			"そこに眠っていたのは、忘れ去られた未知の文明だった。",
			"しかし、静寂だった遺跡は異邦人の足音に目覚め、",
			"凍てついた記憶の中で、古代の守護者が目を覚ます。",
			"オーロラが指し示した道の先は、果たして救いか、それとも災厄か？"
		],
		"chinese": [
			"循着极光的召唤，我抵达了冰之洞窟。",
			"在那里沉睡着的是，被遗忘的未知文明。",
			"然而，宁静的遗迹被异乡人的脚步唤醒，",
			"在冰封的记忆中，古代守护者睁开了眼睛。",
			"极光所指引的道路尽头，究竟是救赎还是灾难？"
		],
		"french": [
			"Attiré par l'appel de l'Aurore, j'ai atteint la caverne de glace.",
			"Ce qui y dormait était une civilisation oubliée et inconnue.",
			"Mais les ruines tranquilles s'éveillèrent aux pas de l'étranger,",
			"et des souvenirs gelés, un ancien gardien s'éveille.",
			"Le chemin indiqué par l'Aurore mènera-t-il au salut ou au désastre ?"
		],
		"spanish": [
			"Guiado por la llamada de la aurora, llegué a la cueva de hielo.",
			"Allí dormía una civilización olvidada y desconocida.",
			"Pero las ruinas tranquilas despertaron con los pasos del extraño,",
			"y de los recuerdos congelados, un antiguo guardián se despierta.",
			"El camino que señala la aurora llevará a la salvación o al desastre?"
		],
		"vietnamese": [
			"Được dẫn lối bởi tiếng gọi của Cực quang, tôi đã đến một hang động băng.",
			"Ở đó, ẩn mình trong giấc ngủ, là một nền văn minh bị lãng quên, vô danh.",
			"Nhưng những tàn tích yên bình đã thức tỉnh bởi bước chân của người lạ,",
			"và từ những ký ức đóng băng, một người bảo vệ cổ đại thức tỉnh.",
			"Con đường mà Cực quang chỉ dẫn, liệu cuối cùng sẽ là sự cứu rỗi hay thảm họa?"
		],
		"thai": [
			"ถูกนำทางโดยเสียงเรียกของแสงเหนือ, ฉันมาถึงถ้ำน้ำแข็ง",
			"ที่นั่น, ที่หลับใหลอยู่คืออารยธรรมที่ถูกลืมเลือนและไม่รู้จัก",
			"แต่ซากปรักหักพังที่เงียบสงบก็ตื่นขึ้นมาพร้อมกับรอยเท้าของคนแปลกหน้า,",
			"และจากความทรงจำที่ถูกแช่แข็ง, ผู้พิทักษ์โบราณก็ตื่นขึ้นมา",
			"เส้นทางที่แสงเหนือชี้บอก, แท้จริงแล้วจะเป็นความรอดหรือหายนะกันแน่?"
		],
		"hindi": [
			"ऑरोरा की पुकार से खिंचा, मैं बर्फ की गुफा में पहुँचा।",
			"वहाँ सो रही थी, एक भूली हुई, अज्ञात सभ्यता।",
			"लेकिन शांत खंडहर अजनबी के कदमों से जाग उठे,",
			"और जमी हुई यादों से, एक प्राचीन संरक्षक जाग उठता है।",
			"क्या ऑरोरा द्वारा इंगित मार्ग मुक्ति की ओर ले जाएगा या आपदा की ओर?"
		]
	}
} as const;
