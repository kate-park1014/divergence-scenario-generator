export const scenario_snowy_haraldr_0_03 = {
	"scenario_id": "snowy_haraldr_0_03",
	"order": 3,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"ivar": {
			"id": "mon_d8a80adc-9315-47b5-8c30-97ce33672bce",
			"name": {
				"korean": "이바르",
				"english": "Ivar",
				"japanese": "イヴァー",
				"chinese": "伊瓦尔",
				"french": "Ivar",
				"spanish": "Ivar",
				"vietnamese": "Ivar",
				"thai": "ไอวาร์",
				"hindi": "इवर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8dd7872b-d4df-44fd-b1a1-083a9156e700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2622fb62-daf4-42d1-a83b-2b78869d3e00/public"
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
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "차가운 설원, 눈 결정 전리품을 파는 자가 서 있었다.",
						"english": "On the cold snowfield stood one selling snow crystal spoils.",
						"japanese": "凍える雪原に、雪の結晶の戦利品を売る者が立っていた。",
						"chinese": "寒冷的雪原上，站着一个贩卖雪晶战利品的人。",
						"french": "Dans la toundra gelée se tenait un vendeur de trophées de cristaux de neige.",
						"spanish": "En el frío campo nevado, había alguien vendiendo botines de cristales de nieve.",
						"vietnamese": "Trên cánh đồng tuyết lạnh giá, một kẻ đang đứng bán chiến lợi phẩm pha lê tuyết.",
						"thai": "ณ ทุ่งหิมะอันหนาวเหน็บ ผู้หนึ่งยืนขายของที่ระลึกเกล็ดหิมะ",
						"hindi": "ठंडे बर्फीले मैदान में, बर्फ़ के क्रिस्टल बेचने वाला एक व्यक्ति खड़ा था।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "또 그 소리야? 이제 그만.",
						"english": "That sound again? Enough already.",
						"japanese": "またその音か？もうやめろ。",
						"chinese": "又是那个声音？够了。",
						"french": "Encore ce bruit ? Assez.",
						"spanish": "¿Otra vez ese ruido? Basta ya.",
						"vietnamese": "Lại tiếng đó nữa à? Dừng lại đi.",
						"thai": "เสียงนั้นอีกแล้วหรือ? พอได้แล้ว",
						"hindi": "फिर वही आवाज़? बस करो।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"speaker": "ivar",
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "ivar",
					"content": {
						"korean": "쯧. 저 굶주림의 끝은 어디인가.",
						"english": "Tsk. Where does that hunger end?",
						"japanese": "ちっ。あの飢えの終わりはどこだ。",
						"chinese": "啧。那饥饿的尽头在哪里？",
						"french": "Pff. Où donc finit cette faim ?",
						"spanish": "Tsk. ¿Dónde termina esa hambre?",
						"vietnamese": "Chậc. Cơn đói đó khi nào mới kết thúc đây.",
						"thai": "จึ๋ย. ความหิวโหยนั้นจะสิ้นสุดที่ใด",
						"hindi": "धिक्कार है। इस भूख का अंत कहाँ है?"
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "이런 귀한 걸 마다하다니!",
						"english": "To refuse something so precious!",
						"japanese": "こんな貴重なものを断るなんて！",
						"chinese": "竟然拒绝如此珍贵之物！",
						"french": "Refuser quelque chose d'aussi précieux !",
						"spanish": "¡Cómo rechazar algo tan preciado!",
						"vietnamese": "Sao có thể từ chối thứ quý giá như vậy!",
						"thai": "กล้าปฏิเสธของมีค่าเช่นนี้ได้อย่างไร!",
						"hindi": "इतनी क़ीमती चीज़ को मना करना!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "관심 없어. 비켜.",
						"english": "Not interested. Move aside.",
						"japanese": "興味ない。どけ。",
						"chinese": "不感兴趣。让开。",
						"french": "Pas intéressé. Pousse-toi.",
						"spanish": "No me interesa. Quítate.",
						"vietnamese": "Không quan tâm. Tránh ra.",
						"thai": "ไม่สนใจ หลีกไป",
						"hindi": "कोई दिलचस्पी नहीं। हट जाओ।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…후회할 거야. 반드시.",
						"english": "...You'll regret it. Definitely.",
						"japanese": "…後悔するぞ。必ず。",
						"chinese": "……你会后悔的。一定会。",
						"french": "...Tu le regretteras. Sûrement.",
						"spanish": "...Te arrepentirás. Sin duda.",
						"vietnamese": "...Ngươi sẽ hối hận. Chắc chắn.",
						"thai": "...แกจะต้องเสียใจ. แน่นอน.",
						"hindi": "...तुम्हें पछतावा होगा। ज़रूर।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "ivar",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "저 눈빛… 예사롭지 않군.",
						"english": "That gaze... it's no ordinary one.",
						"japanese": "あの眼差し…ただ事ではないな。",
						"chinese": "那眼神…非同寻常。",
						"french": "Ce regard... il n'est pas ordinaire.",
						"spanish": "Esa mirada... no es común.",
						"vietnamese": "Ánh mắt đó... không tầm thường.",
						"thai": "แววตา...ไม่ธรรมดาเลย",
						"hindi": "वो नज़रें... कुछ ख़ास हैं।"
					}
				},
				{
					"content": {
						"korean": "달콤한데… 역겨워.",
						"english": "Sweet... yet sickening.",
						"japanese": "甘美だが…吐き気がする。",
						"chinese": "甜美…却令人作呕。",
						"french": "C'est doux... mais écœurant.",
						"spanish": "Dulce... pero repugnante.",
						"vietnamese": "Ngọt ngào... nhưng ghê tởm.",
						"thai": "หอมหวาน...แต่ก็คลื่นไส้",
						"hindi": "मीठा है... मगर घिनौना।"
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "happy",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "내 전리품은, 영광의 향기!",
						"english": "My spoils, the scent of glory!",
						"japanese": "我が戦利品は、栄光の香り！",
						"chinese": "我的战利品，是荣耀的芬芳！",
						"french": "Mon butin, le parfum de la gloire !",
						"spanish": "¡Mi botín, el aroma de la gloria!",
						"vietnamese": "Chiến lợi phẩm của ta, là hương thơm của vinh quang!",
						"thai": "ของที่ริบมาได้ของข้า คือกลิ่นหอมแห่งเกียรติยศ!",
						"hindi": "मेरी लूट, महिमा की सुगंध!"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "몸에 묻은 시럽은 또 뭐야? 끈적거려.",
						"english": "What's this syrup on me? It's sticky.",
						"japanese": "体に付いたシロップは何だ？ベタつく。",
						"chinese": "身上沾的糖浆又是什么？黏糊糊的。",
						"french": "C'est quoi ce sirop sur mon corps ? C'est collant.",
						"spanish": "¿Qué es este sirope en mi cuerpo? Está pegajoso.",
						"vietnamese": "Cái si-rô dính trên người là gì nữa vậy? Dính nhớp nháp.",
						"thai": "น้ำเชื่อมที่ติดตัวนี่คืออะไรอีก? เหนียวหนึบเลย",
						"hindi": "शरीर पर लगी यह चाशनी क्या है? चिपचिपी है।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "…이건, 전사의 훈장!",
						"english": "...This, is a warrior's medal!",
						"japanese": "…これは、戦士の勲章だ！",
						"chinese": "…这是，战士的勋章！",
						"french": "...Ceci, est la médaille d'un guerrier !",
						"spanish": "...¡Esto, es la condecoración de un guerrero!",
						"vietnamese": "...Đây, là huân chương của một chiến binh!",
						"thai": "...นี่คือเหรียญกล้าหาญของนักรบ!",
						"hindi": "...यह, एक योद्धा का पदक है!"
					},
					"emotion": "angry",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "ivar",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "정체 모를 자의 눈빛이 순간, 맹렬한 광기로 번뜩였다.",
						"english": "The eyes of an unknown being suddenly flashed with fierce madness.",
						"japanese": "正体不明の者の眼差しが、一瞬、猛烈な狂気で煌めいた。",
						"chinese": "不知名者的眼神，瞬间闪烁着猛烈的狂气。",
						"french": "Les yeux d'un être inconnu brillèrent soudain d'une folie féroce.",
						"spanish": "La mirada de un ser desconocido brilló de repente con una locura feroz.",
						"vietnamese": "Ánh mắt của một kẻ vô danh chợt lóe lên vẻ điên loạn hung hãn.",
						"thai": "แววตาของผู้ไม่ทราบชื่อพลันสว่างวาบด้วยความคลั่งอันดุเดือด",
						"hindi": "एक अज्ञात प्राणी की आँखें, क्षण भर के लिए, भयानक पागलपन से चमक उठीं।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…방금, 뭐였지?",
						"english": "...What was that just now?",
						"japanese": "…今、何だった？",
						"chinese": "…刚才，那是什么？",
						"french": "...Qu'est-ce que c'était, juste à l'instant ?",
						"spanish": "...¿Qué fue eso, justo ahora?",
						"vietnamese": "...Vừa rồi, là cái gì vậy?",
						"thai": "...เมื่อกี้, คืออะไรน่ะ?",
						"hindi": "...अभी, वो क्या था?"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "봤나? 저 안에 잠든 맹수.",
						"english": "Did you see it? The beast slumbering within.",
						"japanese": "見たか？あの奥に眠る猛獣を。",
						"chinese": "看到了吗？那里面沉睡的猛兽。",
						"french": "Tu l'as vu ? La bête endormie là-dedans.",
						"spanish": "¿Lo viste? La bestia durmiendo ahí dentro.",
						"vietnamese": "Ngươi thấy chưa? Con mãnh thú đang ngủ say bên trong đó.",
						"thai": "เห็นไหม? สัตว์ร้ายที่หลับใหลอยู่ข้างในน่ะ",
						"hindi": "देखा? वो अंदर सोया हुआ जानवर।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "아직도… 내 가치를 모르는가!",
						"english": "Still... you don't know my worth!",
						"japanese": "まだ…私の価値を知らぬか！",
						"chinese": "难道…还不懂我的价值吗！",
						"french": "Toujours... vous ignorez ma valeur !",
						"spanish": "¡Aún... no conocéis mi valor!",
						"vietnamese": "Vẫn chưa... biết giá trị của ta sao!",
						"thai": "ยัง...ไม่รู้คุณค่าของข้าอีกงั้นรึ!",
						"hindi": "अभी भी... मेरी क़ीमत नहीं जानते!"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "점점 더 불길해져.",
						"english": "It's getting more and more ominous.",
						"japanese": "ますます不吉になっていく。",
						"chinese": "越来越不详了。",
						"french": "Ça devient de plus en plus inquiétant.",
						"spanish": "Se está volviendo cada vez más siniestro.",
						"vietnamese": "Càng lúc càng bất ổn.",
						"thai": "มันเริ่มจะเลวร้ายขึ้นเรื่อยๆ",
						"hindi": "यह और भी अशुभ होता जा रहा है।"
					},
					"speaker": "character_any"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"speaker": "ivar"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "멈춰라. 이 이상은, 강함의 끝을 볼 뿐이다.",
						"english": "Stop. Any further, and you'll only see the end of strength.",
						"japanese": "やめろ。これ以上は、強さの果てを見るだけだ。",
						"chinese": "住手。再往前，你只会看到力量的尽头。",
						"french": "Arrêtez. Plus loin, vous ne verrez que la fin de la force.",
						"spanish": "Detente. Más allá, solo verás el fin de la fuerza.",
						"vietnamese": "Dừng lại. Đi tiếp nữa, ngươi sẽ chỉ thấy tận cùng của sức mạnh.",
						"thai": "หยุดเดี๋ยวนี้ ยิ่งไปกว่านี้ เจ้าจะได้เห็นแต่ความสิ้นสุดของพละกำลังเท่านั้น",
						"hindi": "रुको। इससे आगे, तुम्हें केवल शक्ति का अंत ही दिखेगा।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "이 영광을 거부하고 어디로 가겠다고!",
						"english": "Reject this glory and where will you go!",
						"japanese": "この栄光を拒んでどこへ行くつもりだ！",
						"chinese": "拒绝这份荣耀，你将何去何从！",
						"french": "Rejetez cette gloire et où irez-vous !",
						"spanish": "¡Rechaza esta gloria y adónde irás!",
						"vietnamese": "Từ chối vinh quang này rồi ngươi sẽ đi đâu!",
						"thai": "ปฏิเสธความรุ่งโรจน์นี้แล้วเจ้าจะไปไหน!",
						"hindi": "इस महिमा को अस्वीकार करके तुम कहाँ जाओगे!"
					},
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "네가 말하는 영광, 우리에겐 파멸이야.",
						"english": "The glory you speak of is ruin for us.",
						"japanese": "お前が言う栄光は、我々にとっては破滅だ。",
						"chinese": "你所说的荣耀，对我们而言是毁灭。",
						"french": "La gloire dont vous parlez est notre ruine.",
						"spanish": "La gloria de la que hablas es nuestra ruina.",
						"vietnamese": "Vinh quang ngươi nói, đối với chúng ta là sự hủy diệt.",
						"thai": "ความรุ่งโรจน์ที่เจ้าพูดถึงคือความพินาศสำหรับเรา",
						"hindi": "जिस महिमा की तुम बात करते हो, वह हमारे लिए बर्बादी है।"
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "날 시험하는 건가? 좋다! 보여주지!",
						"english": "Are you testing me? Good! I'll show you!",
						"japanese": "私を試すのか？ よかろう！ 見せてやろう！",
						"chinese": "你在试探我吗？ 好！ 我就让你看看！",
						"french": "Tu me testes ? Bien ! Je vais te montrer !",
						"spanish": "¿Me estás poniendo a prueba? ¡Bien! ¡Te lo mostraré!",
						"vietnamese": "Ngươi đang thử ta sao? Tốt! Ta sẽ cho ngươi thấy!",
						"thai": "เจ้ากำลังลองดีกับข้าหรือ? ดีเลย! ข้าจะแสดงให้เจ้าดู!",
						"hindi": "क्या तुम मुझे परख रहे हो? अच्छा! मैं तुम्हें दिखाऊंगा!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "늦었다.",
						"english": "Too late.",
						"japanese": "遅かったな。",
						"chinese": "太迟了。",
						"french": "Trop tard.",
						"spanish": "Demasiado tarde.",
						"vietnamese": "Muộn rồi.",
						"thai": "สายไปแล้ว",
						"hindi": "बहुत देर हो चुकी है।"
					},
					"emotion": "sad",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "정체 모를 광전사가 쓰러졌다. 그의 몸에서 끈적한 시럽 자국이 흘러나왔다.",
						"english": "The mysterious berserker fell. Sticky syrup oozed from his body.",
						"japanese": "正体不明の狂戦士が倒れた。その体から粘り気のあるシロップが流れ出た。",
						"chinese": "身份不明的狂战士倒下了。他身上流出了黏稠的糖浆。",
						"french": "Le berserker inconnu est tombé. Un sirop collant s'écoulait de son corps.",
						"spanish": "El berserker desconocido cayó. Un jarabe pegajoso brotaba de su cuerpo.",
						"vietnamese": "Cuồng chiến sĩ bí ẩn đã gục ngã. Một chất si-rô dính nhớt chảy ra từ cơ thể hắn.",
						"thai": "นักรบคลั่งนิรนามล้มลง คราบน้ำเชื่อมเหนียวเหนอะหนะไหลออกมาจากร่างกายของเขา",
						"hindi": "अज्ञात बर्सेरकर गिर गया। उसके शरीर से चिपचिपा सिरप बह रहा था।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…결국, 이 끝은… 허무인가…",
						"english": "...Is this the end... emptiness?",
						"japanese": "…結局、この結末は…虚無なのか…",
						"chinese": "…到头来，这结局…是虚无吗…",
						"french": "...Au final, cette fin... n'est-elle que néant ?",
						"spanish": "...Al final, ¿este es el fin... el vacío?",
						"vietnamese": "...Rốt cuộc, cái kết này... là hư vô sao?",
						"thai": "...ท้ายที่สุดแล้ว จุดจบนี้... คือความว่างเปล่าหรือ...",
						"hindi": "...आखिरकार, क्या यह अंत... शून्य है...?"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "넌 그저 허세였을 뿐이야.",
						"english": "You were nothing but a bluff.",
						"japanese": "お前はただの虚勢だった。",
						"chinese": "你不过是虚张声势罢了。",
						"french": "Tu n'étais qu'une imposture.",
						"spanish": "No fuiste más que una farsa.",
						"vietnamese": "Ngươi chỉ là đồ khoác lác mà thôi.",
						"thai": "แกมันก็แค่การโอ้อวดเท่านั้นแหละ",
						"hindi": "तुम महज़ एक दिखावा थे।"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"speaker": "ivar",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "허기는… 사라지지 않는다. 다음은 더 강할 것이다.",
						"english": "The hunger... never fades. The next will be stronger.",
						"japanese": "飢えは…消えない。次はもっと強いだろう。",
						"chinese": "饥饿…不会消失。下一个会更强。",
						"french": "La faim... ne disparaît jamais. Le prochain sera plus fort.",
						"spanish": "El hambre... nunca desaparece. El próximo será más fuerte.",
						"vietnamese": "Cơn đói... không bao giờ biến mất. Tiếp theo sẽ mạnh hơn.",
						"thai": "ความหิว...ไม่เคยจางหาย ครั้งหน้าจะแข็งแกร่งกว่านี้",
						"hindi": "भूख... कभी नहीं मिटती। अगला और भी शक्तिशाली होगा।"
					},
					"speaker": "ivar",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "설원의 밤은 깊어지고, 또 다른 그림자가 다가오고 있었다.",
						"english": "The polar night deepened, and another shadow approached.",
						"japanese": "雪原の夜は深まり、また別の影が近づいていた。",
						"chinese": "雪原的夜晚越来越深，另一个身影正在逼近。",
						"french": "La nuit polaire s'épaississait, et une autre ombre approchait.",
						"spanish": "La noche polar se profundizó, y otra sombra se acercaba.",
						"vietnamese": "Đêm trên tuyết nguyên càng lúc càng sâu, một bóng đen khác đang đến gần.",
						"thai": "ราตรีแห่งทุ่งน้ำแข็งยิ่งลึกลง และอีกเงาหนึ่งกำลังคืบคลานเข้ามา",
						"hindi": "बर्फीली रात गहरी होती गई, और एक और छाया पास आ रही थी।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 형체가 얼음 동굴을 뒤덮었다.",
						"english": "A colossal form covered the ice cave.",
						"japanese": "巨大な姿が氷の洞窟を覆った。",
						"chinese": "一个巨大的身形笼罩了冰洞。",
						"french": "Une forme colossale recouvrait la grotte de glace.",
						"spanish": "Una forma colosal cubría la cueva de hielo.",
						"vietnamese": "Một hình thể khổng lồ bao trùm hang động băng giá.",
						"thai": "ร่างมหึมากำลังปกคลุมถ้ำน้ำแข็ง",
						"hindi": "एक विशाल आकृति ने बर्फीली गुफा को ढक लिया।"
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "드디어… 여기까지 왔군.",
						"english": "Finally... you've made it this far.",
						"japanese": "ついに…ここまで来たか。",
						"chinese": "终于…走到这里了。",
						"french": "Enfin... vous êtes arrivés jusqu'ici.",
						"spanish": "Finalmente... has llegado hasta aquí.",
						"vietnamese": "Cuối cùng... ngươi cũng đã đến được đây.",
						"thai": "ในที่สุด... เจ้าก็มาถึงจุดนี้",
						"hindi": "आखिरकार... तुम यहाँ तक आ ही गए।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "내 진정한 전리품이 무엇인지… 보여주마!",
						"english": "I'll show you... what my true trophy is!",
						"japanese": "私の真の戦利品が何なのか…見せてやろう！",
						"chinese": "我来告诉你……我真正的战利品是什么！",
						"french": "Je vais vous montrer... quel est mon véritable trophée !",
						"spanish": "¡Te mostraré... cuál es mi verdadero trofeo!",
						"vietnamese": "Ta sẽ cho ngươi thấy... chiến lợi phẩm thực sự của ta là gì!",
						"thai": "ข้าจะแสดงให้เจ้าเห็น... ว่าของรางวัลที่แท้จริงของข้าคืออะไร!",
						"hindi": "मैं तुम्हें दिखाऊंगा... मेरी असली ट्रॉफी क्या है!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "그 허세, 우리가 깨주지.",
						"english": "We'll shatter that bravado.",
						"japanese": "その虚勢、我々が打ち砕いてやろう。",
						"chinese": "我们会打破你的虚张声势。",
						"french": "Nous briserons cette bravade.",
						"spanish": "Romperemos esa bravuconería.",
						"vietnamese": "Chúng ta sẽ phá tan sự huênh hoang đó của ngươi.",
						"thai": "เราจะทำลายความโอ้อวดนั้น",
						"hindi": "हम उस डींग को चकनाचूर कर देंगे।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"speaker": "ivar",
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "ivar",
					"content": {
						"korean": "조심해라. 저것은… 끝없는 허기 그 자체다.",
						"english": "Be careful. That is... endless hunger itself.",
						"japanese": "気をつけろ。あれは…終わりのない飢えそのものだ。",
						"chinese": "小心。那是……无尽的饥饿本身。",
						"french": "Soyez prudents. C'est... la faim sans fin elle-même.",
						"spanish": "Ten cuidado. Eso es... el hambre infinita misma.",
						"vietnamese": "Hãy cẩn thận. Đó là... chính sự đói khát vô tận.",
						"thai": "ระวังตัวไว้ นั่นคือ... ความหิวโหยอันไม่สิ้นสุด",
						"hindi": "सावधान रहो। वह... स्वयं अंतहीन भूख है।"
					}
				},
				{
					"speaker": "ivar",
					"duration_ms": 400,
					"direction": "up",
					"type": "direction",
					"action": "exit"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "맹렬한 광기에 탐험대는 쓰러졌다.",
						"english": "The expedition fell to raging madness.",
						"japanese": "猛烈な狂気に探検隊は倒れた。",
						"chinese": "探险队在狂暴的疯狂中倒下。",
						"french": "L'expédition a succombé à une folie déchaînée.",
						"spanish": "La expedición cayó ante la locura furiosa.",
						"vietnamese": "Đoàn thám hiểm đã gục ngã trước cơn điên cuồng dữ dội.",
						"thai": "คณะสำรวจล้มลงด้วยความบ้าคลั่งอันรุนแรง",
						"hindi": "भीषण उन्माद के आगे अभियान दल गिर गया।"
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "아직 멀었군. 내 전리품이 될 자격도 없어.",
						"english": "Not yet. You're not even worthy of being my trophy.",
						"japanese": "まだまだだな。私の戦利品になる資格もない。",
						"chinese": "还差得远呢。连成为我的战利品的资格都没有。",
						"french": "Pas encore. Tu n'es même pas digne d'être mon trophée.",
						"spanish": "Todavía no. Ni siquiera eres digno de ser mi trofeo.",
						"vietnamese": "Vẫn còn xa lắm. Ngươi còn không xứng làm chiến lợi phẩm của ta.",
						"thai": "ยังห่างไกลนัก เจ้ายังไม่คู่ควรแม้แต่จะเป็นถ้วยรางวัลของข้า",
						"hindi": "अभी बहुत दूर है। तुम मेरे शिकार बनने के लायक भी नहीं हो।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…아직 끝나지 않았어.",
						"english": "...It's not over yet.",
						"japanese": "…まだ終わっていない。",
						"chinese": "…还没结束。",
						"french": "...Ce n'est pas encore fini.",
						"spanish": "...Todavía no ha terminado.",
						"vietnamese": "...Chưa kết thúc đâu.",
						"thai": "...ยังไม่จบหรอก",
						"hindi": "...अभी खत्म नहीं हुआ है।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"눈보라 속, 허세 가득한 상인.",
			"거절할수록 그의 눈은 맹렬하게 타올랐다.",
			"달콤한 전리품 뒤에 숨겨진 광전사의 그림자.",
			"이 경고를, 아무도 듣지 않았다."
		],
		"english": [
			"A boastful merchant in a blizzard.",
			"The more he was refused, the fiercer his eyes burned.",
			"The shadow of a berserker hidden behind sweet spoils.",
			"No one heeded this warning."
		],
		"japanese": [
			"吹雪の中、虚勢を張る商人。",
			"断られるほど、彼の目は猛烈に燃え上がった。",
			"甘い戦利品の裏に隠された狂戦士の影。",
			"この警告を、誰も聞かなかった。"
		],
		"chinese": [
			"暴风雪中，虚张声势的商人。",
			"越是被拒绝，他的眼神就越是炽热。",
			"隐藏在甜蜜战利品背后的狂战士之影。",
			"没有人听从这个警告。"
		],
		"french": [
			"Un marchand fanfaron dans le blizzard.",
			"Plus on le refusait, plus ses yeux brûlaient avec fureur.",
			"L'ombre du berserker cachée derrière de douces dépouilles.",
			"Personne n'écouta cet avertissement."
		],
		"spanish": [
			"Un mercader jactancioso en la tormenta de nieve.",
			"Cuanto más lo rechazaban, más ferozmente ardían sus ojos.",
			"La sombra del berserker oculta tras un dulce botín.",
			"Nadie escuchó esta advertencia."
		],
		"vietnamese": [
			"Một thương nhân huênh hoang trong bão tuyết.",
			"Càng bị từ chối, ánh mắt hắn càng cháy rực.",
			"Bóng dáng chiến binh cuồng nộ ẩn sau chiến lợi phẩm ngọt ngào.",
			"Không ai nghe lời cảnh báo này."
		],
		"thai": [
			"พ่อค้าโอ้อวดท่ามกลางพายุหิมะ",
			"ยิ่งถูกปฏิเสธ ดวงตาของเขายิ่งลุกโชนรุนแรงขึ้น",
			"เงาของเบอร์เซอร์เกอร์ที่ซ่อนอยู่เบื้องหลังของขวัญอันหอมหวาน",
			"ไม่มีใครสนใจคำเตือนนี้"
		],
		"hindi": [
			"बर्फीले तूफ़ान में एक अहंकारी व्यापारी।",
			"जितना ज़्यादा उसे मना किया गया, उसकी आँखें उतनी ही तेज़ी से जल उठीं।",
			"मधुर लूट के पीछे छिपा एक बरसेकर का साया।",
			"इस चेतावनी को किसी ने नहीं सुना।"
		]
	}
} as const;
