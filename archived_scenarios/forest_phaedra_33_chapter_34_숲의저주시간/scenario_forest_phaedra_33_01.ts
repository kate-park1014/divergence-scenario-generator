export const scenario_forest_phaedra_33_01 = {
	"scenario_id": "forest_phaedra_33_01",
	"order": 1,
	"act": "intro",
	"theme": "forest",
	"actors": {
		"ela": {
			"id": "mon_24765cb2-6fc0-452e-8969-871a82349c70",
			"name": {
				"korean": "엘라",
				"english": "Ela",
				"japanese": "エラ",
				"chinese": "艾拉",
				"french": "Ela",
				"spanish": "Ela",
				"vietnamese": "Ela",
				"thai": "เอล่า",
				"hindi": "एला"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/55d3e9ee-c589-40ab-dfa4-a658bbddd400/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/cfacc842-115e-4175-a7fa-3111a468ed00/public"
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
						"korean": "숲의 초입. 고요함 속에서 묘한 불안감이 스친다.",
						"english": "At the entrance of the forest. A strange unease permeates the silence.",
						"japanese": "森の入り口。静寂の中に、妙な不安感がよぎる。",
						"chinese": "森林入口。宁静中，一丝莫名的不安掠过。",
						"french": "À l'entrée de la forêt. Une étrange inquiétude traverse le silence.",
						"spanish": "En la entrada del bosque. Una extraña inquietud impregna el silencio.",
						"vietnamese": "Ở lối vào rừng. Một cảm giác bất an kỳ lạ len lỏi trong sự im lặng.",
						"thai": "ทางเข้าป่า ความเงียบงันปะปนไปด้วยความไม่สบายใจแปลกๆ",
						"hindi": "जंगल के प्रवेश द्वार पर। खामोशी में एक अजीब बेचैनी महसूस होती है।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "여기가… 영겁의 숲?",
						"english": "Is this... the Eternal Forest?",
						"japanese": "ここが…永劫の森？",
						"chinese": "这里就是…永恒之森？",
						"french": "C'est… la Forêt Éternelle ?",
						"spanish": "¿Es esto... el Bosque Eterno?",
						"vietnamese": "Đây là... Khu Rừng Vĩnh Hằng?",
						"thai": "นี่คือ...ป่าวินิจนิรันดร์?",
						"hindi": "क्या यह... अनंत वन है?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "분명 신성한 곳이라고 했는데… 뭔가 이상해.",
						"english": "I was told it was a sacred place... but something feels off.",
						"japanese": "聖なる場所だと聞いたのに…何かおかしい。",
						"chinese": "明明说是神圣之地…但总觉得有些不对劲。",
						"french": "On m'avait dit que c'était un lieu sacré… mais quelque chose ne va pas.",
						"spanish": "Me dijeron que era un lugar sagrado... pero algo no cuadra.",
						"vietnamese": "Tôi được bảo đây là một nơi linh thiêng... nhưng có gì đó không ổn.",
						"thai": "ฉันได้ยินมาว่าเป็นสถานที่ศักดิ์สิทธิ์... แต่มีบางอย่างแปลกๆ",
						"hindi": "मुझे बताया गया था कि यह एक पवित्र स्थान है... लेकिन कुछ गड़बड़ लग रही है।"
					},
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"action": "enter",
					"speaker": "ela",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "길을 잃으셨나요? 제가 안내해 드릴게요.",
						"english": "Are you lost? I'll guide you.",
						"japanese": "道に迷われましたか？私がご案内しましょう。",
						"chinese": "迷路了吗？我来为您带路。",
						"french": "Vous êtes perdu ? Je vais vous guider.",
						"spanish": "¿Estás perdido? Te guiaré.",
						"vietnamese": "Bạn bị lạc à? Tôi sẽ hướng dẫn bạn.",
						"thai": "คุณหลงทางหรือเปล่า? ฉันจะนำทางคุณเอง",
						"hindi": "क्या आप खो गए हैं? मैं आपको रास्ता दिखाऊंगा।"
					},
					"emotion": "base",
					"speaker": "ela",
					"type": "speech"
				},
				{
					"content": {
						"korean": "당신은…?",
						"english": "You are...?",
						"japanese": "あなたは…？",
						"chinese": "您是…？",
						"french": "Vous êtes… ?",
						"spanish": "¿Tú eres...?",
						"vietnamese": "Bạn là...?",
						"thai": "คุณคือ...?",
						"hindi": "आप कौन हैं...?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "엘라. 이 숲의 안내자예요. 이 길은 위험하답니다.",
						"english": "Ela. I am the guide of this forest. This path is dangerous.",
						"japanese": "エラ。この森の案内者です。この道は危険ですよ。",
						"chinese": "艾拉。我是这片森林的引导者。这条路很危险。",
						"french": "Ela. Je suis la guide de cette forêt. Ce chemin est dangereux.",
						"spanish": "Ela. Soy la guía de este bosque. Este camino es peligroso.",
						"vietnamese": "Ela. Tôi là người dẫn đường của khu rừng này. Con đường này nguy hiểm.",
						"thai": "เอล่า ฉันคือผู้ชี้นำของป่าแห่งนี้ ทางนี้อันตรายนะ",
						"hindi": "एला। मैं इस जंगल की मार्गदर्शक हूँ। यह रास्ता खतरनाक है।"
					},
					"emotion": "sad",
					"speaker": "ela",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"speaker": "ela",
					"action": "enter",
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "숲 곳곳에 오래된 시계탑 잔해가 있어요.",
						"english": "Old clock tower ruins are scattered throughout the forest.",
						"japanese": "森のあちこちに、古い時計台の残骸があります。",
						"chinese": "森林各处都散落着古老的钟楼残骸。",
						"french": "Des ruines d'anciens clochers sont éparpillées dans toute la forêt.",
						"spanish": "Los restos de una antigua torre del reloj están esparcidos por todo el bosque.",
						"vietnamese": "Trong rừng rải rác những tàn tích của tháp đồng hồ cổ.",
						"thai": "ซากหอคอยนาฬิกาเก่าแก่กระจัดกระจายอยู่ทั่วป่า",
						"hindi": "जंगल भर में पुरानी घड़ी टावर के अवशेष बिखरे हुए हैं।"
					},
					"speaker": "ela",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "시계탑? 그게 뭔데.",
						"english": "Clock tower? What's that?",
						"japanese": "時計台？それ、何？",
						"chinese": "钟楼？那是什么？",
						"french": "Une tour de l'horloge ? Qu'est-ce que c'est ?",
						"spanish": "¿Torre del reloj? ¿Qué es eso?",
						"vietnamese": "Tháp đồng hồ? Đó là gì?",
						"thai": "หอคอยนาฬิกา? นั่นอะไรน่ะ?",
						"hindi": "घड़ी टावर? वो क्या है?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "ela",
					"content": {
						"korean": "파멸의 시간을 알리는… 저주의 흔적이에요.",
						"english": "It marks the hour of doom... a trace of a curse.",
						"japanese": "破滅の時を告げる…呪いの痕跡です。",
						"chinese": "它预示着毁灭的时刻……诅咒的痕迹。",
						"french": "Elle annonce l'heure de la damnation... une trace de malédiction.",
						"spanish": "Marca la hora de la perdición... un rastro de una maldición.",
						"vietnamese": "Nó báo hiệu giờ tận thế... một dấu vết của lời nguyền.",
						"thai": "มันบ่งบอกถึงเวลาแห่งความหายนะ... ร่องรอยของคำสาป",
						"hindi": "यह विनाश के समय का संकेत है... एक शाप का निशान।"
					}
				},
				{
					"content": {
						"korean": "저주…?",
						"english": "A curse...?",
						"japanese": "呪い…？",
						"chinese": "诅咒……？",
						"french": "Une malédiction... ?",
						"spanish": "¿Una maldición...?",
						"vietnamese": "Lời nguyền...?",
						"thai": "คำสาป...?",
						"hindi": "एक शाप...?"
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "ela",
					"emotion": "angry",
					"content": {
						"korean": "어서 가야 해요. 시간이 없어요.",
						"english": "We must go. There's no time.",
						"japanese": "早く行かないと。時間がない。",
						"chinese": "我们必须走了。没时间了。",
						"french": "Nous devons y aller. Il n'y a pas de temps.",
						"spanish": "Debemos irnos. No hay tiempo.",
						"vietnamese": "Chúng ta phải đi thôi. Không còn thời gian.",
						"thai": "เราต้องไปแล้ว ไม่มีเวลาแล้ว",
						"hindi": "हमें जाना होगा। समय नहीं है।"
					}
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "ela",
					"action": "enter",
					"spot": [
						4,
						3
					]
				},
				{
					"content": {
						"korean": "이 숲은… 살아있는 듯 변해요.",
						"english": "This forest... changes as if it's alive.",
						"japanese": "この森は…まるで生きているかのように変化する。",
						"chinese": "这片森林……仿佛活物般变化着。",
						"french": "Cette forêt... change comme si elle était vivante.",
						"spanish": "Este bosque... cambia como si estuviera vivo.",
						"vietnamese": "Khu rừng này... biến đổi như thể nó còn sống.",
						"thai": "ป่าแห่งนี้... เปลี่ยนแปลงราวกับมีชีวิต",
						"hindi": "यह जंगल... जीवित की तरह बदलता है।"
					},
					"speaker": "ela",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "길이 계속 바뀌는 것 같아.",
						"english": "The path seems to keep changing.",
						"japanese": "道が絶えず変わっているようだ。",
						"chinese": "路好像一直在变。",
						"french": "Le chemin semble changer constamment.",
						"spanish": "El camino parece cambiar constantemente.",
						"vietnamese": "Con đường dường như cứ thay đổi.",
						"thai": "เส้นทางดูเหมือนจะเปลี่ยนไปเรื่อยๆ",
						"hindi": "रास्ता लगातार बदलता रहता है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "예언자의 인도 없이는 탈출할 수 없어요.",
						"english": "Without the Prophet's guidance, we cannot escape.",
						"japanese": "預言者の導きなしには、脱出できません。",
						"chinese": "没有先知的指引，我们无法逃脱。",
						"french": "Sans les conseils du Prophète, nous ne pouvons pas nous échapper.",
						"spanish": "Sin la guía del Profeta, no podemos escapar.",
						"vietnamese": "Không có sự dẫn dắt của Tiên Tri, chúng ta không thể thoát ra.",
						"thai": "หากปราศจากคำแนะนำของท่านศาสดา เราก็ไม่อาจหนีรอดได้",
						"hindi": "पैगंबर के मार्गदर्शन के बिना, हम बच नहीं सकते।"
					},
					"speaker": "ela",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "예언자… 대체 누가?",
						"english": "Prophet...? Who exactly?",
						"japanese": "預言者…一体誰が？",
						"chinese": "先知……到底是谁？",
						"french": "Le Prophète... qui ça ?",
						"spanish": "¿Profeta...? ¿Quién exactamente?",
						"vietnamese": "Tiên Tri...? Chính xác là ai?",
						"thai": "ท่านศาสดา...? ใครกันแน่?",
						"hindi": "पैगंबर...? आखिर कौन?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "ela",
					"content": {
						"korean": "깊이 들어갈수록… 진실은 더 잔인할 거예요.",
						"english": "The deeper we go... the crueler the truth will be.",
						"japanese": "深く進むほど…真実はより残酷になるだろう。",
						"chinese": "我们走得越深……真相就越残酷。",
						"french": "Plus nous irons loin... plus la vérité sera cruelle.",
						"spanish": "Cuanto más nos adentremos... más cruel será la verdad.",
						"vietnamese": "Càng đi sâu... sự thật sẽ càng tàn khốc.",
						"thai": "ยิ่งเราเข้าไปลึกเท่าไหร่... ความจริงก็จะยิ่งโหดร้ายเท่านั้น",
						"hindi": "जितना हम गहराई में जाएंगे... सच उतना ही क्रूर होगा।"
					}
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
					"action": "enter",
					"speaker": "ela",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "ela",
					"emotion": "sad",
					"content": {
						"korean": "더 이상은… 되돌릴 수 없어요.",
						"english": "There's no turning back now...",
						"japanese": "もう…後戻りはできません。",
						"chinese": "已经…无法回头了。",
						"french": "On ne peut plus revenir en arrière...",
						"spanish": "No hay vuelta atrás…",
						"vietnamese": "Không thể quay lại được nữa rồi...",
						"thai": "ไม่มีทางย้อนกลับไปได้อีกแล้ว...",
						"hindi": "अब और वापस नहीं जा सकते..."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "우린 돌아가지 않아. 저주의 근원을 밝힐 거야.",
						"english": "We won't turn back. We'll uncover the source of the curse.",
						"japanese": "我々は戻らない。呪いの根源を突き止める。",
						"chinese": "我们不会回头。我们会揭露诅咒的根源。",
						"french": "Nous ne ferons pas demi-tour. Nous découvrirons l'origine de la malédiction.",
						"spanish": "No retrocederemos. Descubriremos el origen de la maldición.",
						"vietnamese": "Chúng ta sẽ không quay lại. Chúng ta sẽ khám phá nguồn gốc của lời nguyền.",
						"thai": "เราจะไม่ถอยกลับไป เราจะเปิดเผยต้นตอของคำสาป",
						"hindi": "हम वापस नहीं जाएंगे। हम श्राप के स्रोत का पता लगाएंगे।"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그 결심… 후회할지도 몰라요.",
						"english": "You might regret that decision...",
						"japanese": "その決断…後悔するかもしれませんよ。",
						"chinese": "那个决定…你可能会后悔的。",
						"french": "Vous pourriez regretter cette décision…",
						"spanish": "Podrías arrepentirte de esa decisión…",
						"vietnamese": "Bạn có thể hối hận về quyết định đó...",
						"thai": "คุณอาจจะเสียใจกับการตัดสินใจนั้น...",
						"hindi": "तुम्हें उस निर्णय पर पछतावा हो सकता है..."
					},
					"emotion": "sad",
					"speaker": "ela"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "숲의 고통이 느껴져…",
						"english": "I feel the forest's pain...",
						"japanese": "森の苦痛が感じられる…",
						"chinese": "我能感觉到森林的痛苦…",
						"french": "Je ressens la souffrance de la forêt…",
						"spanish": "Siento el dolor del bosque…",
						"vietnamese": "Tôi cảm nhận được nỗi đau của khu rừng...",
						"thai": "ฉันรู้สึกถึงความเจ็บปวดของป่า...",
						"hindi": "मुझे जंगल का दर्द महसूस हो रहा है..."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "숲의 고통은 점차 탐험대를 짓눌렀다. 비극은 이미 시작되었다.",
						"english": "The forest's pain gradually crushed the expedition. The tragedy had already begun.",
						"japanese": "森の苦痛は徐々に探検隊を押し潰した。悲劇は既に始まっていた。",
						"chinese": "森林的痛苦逐渐压垮了探险队。悲剧已经开始。",
						"french": "La douleur de la forêt écrasait peu à peu l'expédition. La tragédie avait déjà commencé.",
						"spanish": "El dolor del bosque oprimió gradualmente a la expedición. La tragedia ya había comenzado.",
						"vietnamese": "Nỗi đau của khu rừng dần đè nặng lên đoàn thám hiểm. Bi kịch đã bắt đầu.",
						"thai": "ความเจ็บปวดของป่าค่อยๆ บดขยี้คณะสำรวจ โศกนาฏกรรมได้เริ่มต้นขึ้นแล้ว",
						"hindi": "जंगल के दर्द ने धीरे-धीरे अभियान दल को कुचल दिया। त्रासदी पहले ही शुरू हो चुकी थी।"
					}
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "정체 모를 적을 물리쳤다. 그러나 승리의 기쁨은 없었다.",
						"english": "An unknown foe was defeated. Yet, there was no joy in victory.",
						"japanese": "正体不明の敵を倒した。しかし、勝利の喜びはなかった。",
						"chinese": "击败了不明身份的敌人。然而，却没有胜利的喜悦。",
						"french": "Un ennemi inconnu a été vaincu. Pourtant, il n'y avait aucune joie dans la victoire.",
						"spanish": "Un enemigo desconocido fue derrotado. Sin embargo, no hubo alegría en la victoria.",
						"vietnamese": "Một kẻ thù vô danh đã bị đánh bại. Tuy nhiên, không có niềm vui chiến thắng.",
						"thai": "ศัตรูที่ไม่รู้จักถูกกำจัดแล้ว แต่กลับไม่มีความสุขในชัยชนะ",
						"hindi": "एक अज्ञात शत्रु परास्त हुआ। फिर भी, विजय में कोई खुशी नहीं थी।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "이건 시작에 불과해… {random_boss}는….",
						"english": "This is just the beginning... {random_boss} is...",
						"japanese": "これは始まりに過ぎない… {random_boss}は…。",
						"chinese": "这仅仅是个开始… {random_boss}是…。",
						"french": "Ce n'est que le début... {random_boss} est...",
						"spanish": "Esto es solo el principio... {random_boss} es...",
						"vietnamese": "Đây chỉ là khởi đầu... {random_boss} là...",
						"thai": "นี่เป็นเพียงจุดเริ่มต้น... {random_boss} คือ...",
						"hindi": "यह तो बस शुरुआत है… {random_boss} है…।"
					}
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리야? 너 말고 또 있다는 건가?",
						"english": "What are you saying? There's more than just you?",
						"japanese": "何を言ってるんだ？お前以外にもいるのか？",
						"chinese": "你在说什么？除了你还有别人吗？",
						"french": "Que dis-tu ? Il y a plus que toi ?",
						"spanish": "¿Qué dices? ¿Hay alguien más aparte de ti?",
						"vietnamese": "Ngươi đang nói gì vậy? Còn có kẻ khác ngoài ngươi ư?",
						"thai": "เจ้าพูดอะไร? นอกจากเจ้าแล้ว ยังมีอีกงั้นหรือ?",
						"hindi": "क्या कह रहे हो? तुम्हारे अलावा भी कोई और है?"
					},
					"type": "speech"
				},
				{
					"spot": [
						2,
						3
					],
					"action": "enter",
					"speaker": "ela",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "ela",
					"content": {
						"korean": "숲은… 아직 많은 비밀을 품고 있어요.",
						"english": "The forest... still holds many secrets.",
						"japanese": "森は…まだ多くの秘密を抱えているわ。",
						"chinese": "森林…仍隐藏着许多秘密。",
						"french": "La forêt... détient encore de nombreux secrets.",
						"spanish": "El bosque... aún guarda muchos secretos.",
						"vietnamese": "Rừng... vẫn còn ẩn chứa nhiều bí mật.",
						"thai": "ป่า... ยังคงเก็บซ่อนความลับมากมาย",
						"hindi": "जंगल… अभी भी कई रहस्य समेटे हुए है।"
					}
				},
				{
					"type": "speech",
					"speaker": "ela",
					"emotion": "sad",
					"content": {
						"korean": "더 큰 비극이 기다리고 있을지도…",
						"english": "A greater tragedy might await...",
						"japanese": "さらなる悲劇が待っているかもしれない…。",
						"chinese": "也许更大的悲剧正在等待着…",
						"french": "Une tragédie plus grande pourrait nous attendre...",
						"spanish": "Una tragedia mayor podría esperar...",
						"vietnamese": "Một bi kịch lớn hơn có thể đang chờ đợi...",
						"thai": "โศกนาฏกรรมที่ยิ่งใหญ่กว่าอาจกำลังรออยู่...",
						"hindi": "शायद एक बड़ी त्रासदी इंतजार कर रही हो…"
					}
				},
				{
					"content": {
						"korean": "탐험대는 알 수 없는 위협에 맞서, 계속해서 숲 속 깊은 곳으로 나아갔다.",
						"english": "The expedition continued deeper into the forest, facing unknown threats.",
						"japanese": "探検隊は未知の脅威に立ち向かい、森の奥深くへと進み続けた。",
						"chinese": "探险队面对未知威胁，继续深入森林。",
						"french": "L'expédition continua de s'enfoncer dans la forêt, faisant face à des menaces inconnues.",
						"spanish": "La expedición continuó adentrándose en el bosque, enfrentando amenazas desconocidas.",
						"vietnamese": "Đoàn thám hiểm tiếp tục tiến sâu vào rừng, đối mặt với những mối đe dọa không xác định.",
						"thai": "คณะสำรวจยังคงมุ่งหน้าสู่ส่วนลึกของป่า เผชิญหน้ากับภัยคุกคามที่ไม่รู้จัก",
						"hindi": "अभियान अज्ञात खतरों का सामना करते हुए, जंगल में और गहराई तक बढ़ता रहा।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "숲의 어둠이 모든 것을 집어삼켰다.",
						"english": "The darkness of the forest devoured everything.",
						"japanese": "森の闇がすべてを飲み込んだ。",
						"chinese": "森林的黑暗吞噬了一切。",
						"french": "L'obscurité de la forêt dévora tout.",
						"spanish": "La oscuridad del bosque lo devoró todo.",
						"vietnamese": "Bóng tối của rừng đã nuốt chửng mọi thứ.",
						"thai": "ความมืดของป่ากลืนกินทุกสิ่ง",
						"hindi": "जंगल के अंधेरे ने सब कुछ निगल लिया।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "아직 포기하지 마라… 진짜 고통은 이제부터다.",
						"english": "Don't give up yet... The real pain begins now.",
						"japanese": "まだ諦めるな…本当の苦痛はこれからだ。",
						"chinese": "别放弃…真正的痛苦才刚开始。",
						"french": "N'abandonne pas encore... La vraie douleur commence maintenant.",
						"spanish": "No te rindas aún... El verdadero dolor empieza ahora.",
						"vietnamese": "Đừng bỏ cuộc vội... Nỗi đau thật sự chỉ mới bắt đầu.",
						"thai": "ยังไม่ยอมแพ้... ความเจ็บปวดที่แท้จริงเพิ่งจะเริ่มต้น",
						"hindi": "अभी हार मत मानो… असली दर्द अब शुरू होगा।"
					},
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "크윽… 여기서 멈출 수 없어!",
						"english": "Ugh... I can't stop here!",
						"japanese": "くっ…ここで止まるわけにはいかない！",
						"chinese": "呃…不能就此停下！",
						"french": "Ugh... Je ne peux pas m'arrêter ici !",
						"spanish": "Ugh... ¡No puedo parar aquí!",
						"vietnamese": "Ư... Ta không thể dừng lại ở đây!",
						"thai": "อึก... ข้าหยุดอยู่แค่นี้ไม่ได้!",
						"hindi": "उफ़… मैं यहाँ रुक नहीं सकता!"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "그대의 의지가… 이 숲의 저주를 깨울지니.",
						"english": "Your will... shall awaken this forest's curse.",
						"japanese": "あなたの意志が… この森の呪いを呼び覚ますだろう。",
						"chinese": "你的意志… 将唤醒这森林的诅咒。",
						"french": "Votre volonté… éveillera la malédiction de cette forêt.",
						"spanish": "Tu voluntad… despertará la maldición de este bosque.",
						"vietnamese": "Ý chí của ngươi… sẽ đánh thức lời nguyền của khu rừng này.",
						"thai": "เจตจำนงของเจ้า… จะปลุกคำสาปของป่านี้ให้ตื่นขึ้น",
						"hindi": "तुम्हारी इच्छा… इस जंगल के अभिशाप को जगाएगी।"
					}
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "숲의 심장부. 거대한 그림자가 길을 막아섰다.",
						"english": "Deep in the forest. A colossal shadow blocked the path.",
						"japanese": "森の心臓部。巨大な影が道を塞いだ。",
						"chinese": "森林深处。一道巨大的影子挡住了去路。",
						"french": "Au cœur de la forêt. Une ombre gigantesque bloquait le chemin.",
						"spanish": "En el corazón del bosque. Una sombra gigantesca bloqueaba el camino.",
						"vietnamese": "Sâu trong rừng. Một bóng tối khổng lồ chặn đường.",
						"thai": "ลึกเข้าไปในป่า เงาขนาดมหึมาขวางเส้นทางอยู่",
						"hindi": "जंगल के दिल में। एक विशाल छाया ने रास्ता रोक दिया।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 인간들… 감히 여기까지 오다니.",
						"english": "Foolish humans... How dare you come this far.",
						"japanese": "愚かな人間め…よくもここまで来たな。",
						"chinese": "愚蠢的人类…竟敢来到这里。",
						"french": "Stupides humains… Comment osez-vous venir jusqu'ici.",
						"spanish": "Humanos necios… ¿Cómo osáis llegar hasta aquí?",
						"vietnamese": "Con người ngu ngốc… Sao dám đến tận đây.",
						"thai": "มนุษย์โง่เขลา... กล้าดียังไงถึงมาไกลขนาดนี้",
						"hindi": "मूर्ख मनुष्य... तुम्हारी हिम्मत कैसे हुई यहाँ तक आने की।"
					}
				},
				{
					"content": {
						"korean": "네가… 저주의 근원인가!",
						"english": "Are you... the source of the curse!",
						"japanese": "お前が…呪いの根源か！",
						"chinese": "你就是…诅咒的根源吗！",
						"french": "Es-tu… la source de la malédiction ?",
						"spanish": "¿Eres tú… el origen de la maldición?",
						"vietnamese": "Ngươi… là nguồn gốc của lời nguyền sao!",
						"thai": "เจ้า... คือต้นตอของคำสาปงั้นหรือ!",
						"hindi": "क्या तुम... श्राप का स्रोत हो!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아니. 나는 그저… 이 숲의 파수꾼일 뿐.",
						"english": "No. I am merely... the guardian of this forest.",
						"japanese": "違う。私はただ…この森の番人であるだけだ。",
						"chinese": "不。我只是…这片森林的守护者。",
						"french": "Non. Je ne suis que… le gardien de cette forêt.",
						"spanish": "No. Solo soy… el guardián de este bosque.",
						"vietnamese": "Không. Ta chỉ là… người canh giữ khu rừng này thôi.",
						"thai": "ไม่ใช่ ข้าเป็นเพียง... ผู้พิทักษ์ของป่านี้เท่านั้น",
						"hindi": "नहीं। मैं बस... इस जंगल का रखवाला हूँ।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "비켜. 우리의 길을 막지 마.",
						"english": "Move. Don't block our path.",
						"japanese": "退け。我々の道を阻むな。",
						"chinese": "让开。不要挡住我们的路。",
						"french": "Écarte-toi. Ne bloque pas notre chemin.",
						"spanish": "Apártate. No bloquees nuestro camino.",
						"vietnamese": "Tránh ra. Đừng cản đường chúng ta.",
						"thai": "หลีกไป อย่าขวางทางเรา",
						"hindi": "हटो। हमारा रास्ता मत रोको।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그대들의 발걸음이… 더 깊은 절망을 부를지니.",
						"english": "Your steps... will summon deeper despair.",
						"japanese": "お前たちの足取りが…より深い絶望を呼ぶだろう。",
						"chinese": "你们的脚步…将招致更深的绝望。",
						"french": "Vos pas... attireront un désespoir plus profond.",
						"spanish": "Vuestros pasos... invocarán una desesperación aún mayor.",
						"vietnamese": "Bước chân của các ngươi... sẽ triệu hồi nỗi tuyệt vọng sâu hơn.",
						"thai": "ฝีเท้าของพวกเจ้า... จะนำมาซึ่งความสิ้นหวังที่ลึกซึ้งยิ่งกว่า",
						"hindi": "तुम्हारे कदम… और भी गहरी निराशा लाएँगे।"
					},
					"speaker": "random_boss",
					"emotion": "sad"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"영겁의 숲. 그 이름처럼 시간마저 멈춘 공간.",
			"희망이라곤 없는 곳에서, 그들은 길을 잃었다.",
			"그리고 숲의 심장부는, 이미 오래전부터 썩어가고 있었다.",
			"알 수 없는 파멸의 시한이 흐르기 시작했다."
		],
		"english": [
			"The Eternal Forest. A place where even time stands still, just like its name suggests.",
			"In a place devoid of hope, they lost their way.",
			"And the heart of the forest had been decaying for a long time.",
			"An unknown doomsday clock began to tick."
		],
		"japanese": [
			"永遠の森。その名の通り、時間さえも止まった空間。",
			"希望もない場所で、彼らは道に迷った。",
			"そして、森の心臓部は、すでにずっと前から腐り始めていた。",
			"未知なる破滅への時限が、刻々と動き始めた。"
		],
		"chinese": [
			"永恒之森。如同其名，一个连时间都停滞的空间。",
			"在没有希望的地方，他们迷失了方向。",
			"而森林的中心，早已腐朽多时。",
			"未知的毁灭时限开始流动。"
		],
		"french": [
			"La Forêt Éternelle. Un lieu où même le temps s'est arrêté, comme son nom l'indique.",
			"Dans un endroit sans espoir, ils se sont égarés.",
			"Et le cœur de la forêt pourrissait déjà depuis longtemps.",
			"Le compte à rebours d'une destruction inconnue a commencé à s'écouler."
		],
		"spanish": [
			"El Bosque Eterno. Un lugar donde el tiempo mismo se detuvo, tal como su nombre lo indica.",
			"En un lugar sin esperanza, se perdieron.",
			"Y el corazón del bosque ya se estaba pudriendo desde hacía mucho tiempo.",
			"Un temporizador de perdición desconocido comenzó a correr."
		],
		"vietnamese": [
			"Khu Rừng Vĩnh Hằng. Một nơi mà thời gian cũng ngừng trôi, đúng như tên gọi của nó.",
			"Ở một nơi không có hy vọng, họ đã lạc lối.",
			"Và trái tim của khu rừng đã mục nát từ lâu.",
			"Đồng hồ đếm ngược của sự hủy diệt không rõ đã bắt đầu đếm."
		],
		"thai": [
			"ป่าวินิจนิรันดร์ สถานที่ที่กาลเวลาหยุดนิ่งดังเช่นชื่อ",
			"ในสถานที่ที่ไร้ซึ่งความหวัง พวกเขาหลงทาง",
			"และใจกลางป่าก็ผุพังมานานแล้ว",
			"เวลาแห่งหายนะที่ไม่รู้จักได้เริ่มเดินแล้ว"
		],
		"hindi": [
			"अनंत वन। एक ऐसी जगह जहाँ समय भी थम गया है, जैसा कि इसके नाम से पता चलता है।",
			"आशाहीन जगह में, वे भटक गए।",
			"और जंगल का दिल बहुत पहले से सड़ रहा था।",
			"एक अज्ञात विनाश की समय-सीमा शुरू हो गई।"
		]
	}
} as const;
