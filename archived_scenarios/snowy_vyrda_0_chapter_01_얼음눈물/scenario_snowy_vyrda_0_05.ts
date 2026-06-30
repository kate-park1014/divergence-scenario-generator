export const scenario_snowy_vyrda_0_05 = {
	"scenario_id": "snowy_vyrda_0_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "snowy",
	"actors": {
		"anuk": {
			"id": "mon_8736797d-779a-4748-8633-d15c1eaf9be7",
			"name": {
				"korean": "아눅",
				"english": "Anuk",
				"japanese": "アヌーク",
				"chinese": "阿努克",
				"french": "Anuk",
				"spanish": "Anuk",
				"vietnamese": "Anuk",
				"thai": "อนุก",
				"hindi": "अनुक"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/19485274-e873-45c8-5043-f4ff65aa2a00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/9a79ecfd-8cc6-4461-3790-763822522500/public"
		}
	},
	"boss": {
		"pool_id": "pool_357"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "차가운 심장부. 마침내 비르다의 가장 깊은 곳에 닿았다.",
						"english": "The cold core. Finally reached the deepest part of Birda.",
						"japanese": "冷たい心臓部。ついにビルダの最深部に到達した。",
						"chinese": "冰冷的核心。终于抵达了比尔达最深处。",
						"french": "Le noyau froid. Enfin atteint la partie la más profonde de Birda.",
						"spanish": "El núcleo frío. Finalmente llegamos a la parte más profunda de Birda.",
						"vietnamese": "Trái tim lạnh giá. Cuối cùng cũng đến được nơi sâu nhất của Birda.",
						"thai": "แกนกลางอันหนาวเย็น ในที่สุดก็มาถึงส่วนที่ลึกที่สุดของบีร์ดา",
						"hindi": "ठंडा केंद्र। अंततः बिरडा के सबसे गहरे हिस्से तक पहुँच गए।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이게… 비르다의 심장?",
						"english": "This… Virda's Heart?",
						"japanese": "これが… ビルダの心臓？",
						"chinese": "这是…维尔达的心脏？",
						"french": "C'est… le Cœur de Virda ?",
						"spanish": "¿Esto es… el Corazón de Virda?",
						"vietnamese": "Đây là… Trái tim của Virda?",
						"thai": "นี่คือ… หัวใจของเวอร์ดา?",
						"hindi": "यह… विरदा का हृदय है?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"action": "enter",
					"speaker": "anuk",
					"type": "direction"
				},
				{
					"content": {
						"korean": "멈춰야 한다. 더 이상은…",
						"english": "Must stop. No more…",
						"japanese": "止めなければ。これ以上は…",
						"chinese": "必须阻止。不能再…下去了。",
						"french": "Il faut arrêter. Pas plus…",
						"spanish": "Debemos detenerlo. No más…",
						"vietnamese": "Phải dừng lại. Không thể nữa…",
						"thai": "ต้องหยุดแล้ว. ไม่ได้อีกแล้ว…",
						"hindi": "रुकना होगा। अब और नहीं…"
					},
					"speaker": "anuk",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이 앞이 진실이야. 여기서 멈출 순 없어.",
						"english": "Truth lies ahead. Can't stop here.",
						"japanese": "この先に真実がある。ここで止まるわけにはいかない。",
						"chinese": "前方是真相。不能停在这里。",
						"french": "La vérité est devant. On ne peut pas s'arrêter ici.",
						"spanish": "La verdad está adelante. No podemos detenernos aquí.",
						"vietnamese": "Chân lý ở phía trước. Không thể dừng lại ở đây.",
						"thai": "ความจริงอยู่ข้างหน้า. หยุดตรงนี้ไม่ได้.",
						"hindi": "सच्चाई आगे है। यहाँ रुक नहीं सकते।"
					},
					"emotion": "angry"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 400,
					"spot": [
						5,
						2
					],
					"action": "enter",
					"speaker": "anuk"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "저 룬은… 봉인이 아니라…",
						"english": "That rune… not a seal, but…",
						"japanese": "あのルーンは… 封印ではなく…",
						"chinese": "那个符文…不是封印，而是…",
						"french": "Cette rune… pas un sceau, mais…",
						"spanish": "Esa runa… no es un sello, sino…",
						"vietnamese": "Cái rune đó… không phải phong ấn, mà là…",
						"thai": "รูนั่น… ไม่ใช่ผนึก แต่…",
						"hindi": "वह रुन… मुहर नहीं, बल्कि…"
					},
					"speaker": "anuk",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "봉인이야. 고통스러운 거짓을 묶어둔 상징.",
						"english": "It is a seal. A symbol binding painful lies.",
						"japanese": "封印だ。苦痛な嘘を縛り付けている象徴。",
						"chinese": "是封印。是束缚痛苦谎言的象征。",
						"french": "C'est un sceau. Un symbole liant des mensonges douloureux.",
						"spanish": "Es un sello. Un símbolo que ata dolorosas mentiras.",
						"vietnamese": "Là phong ấn. Một biểu tượng trói buộc những lời nói dối đau khổ.",
						"thai": "มันคือผนึก. สัญลักษณ์ที่ผูกมัดความเท็จที่เจ็บปวด.",
						"hindi": "यह एक मुहर है। दर्दनाक झूठों को बांधने वाला प्रतीक।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "anuk",
					"content": {
						"korean": "그게 아니야… 부수면 안 돼.",
						"english": "That's not it… Don't break it.",
						"japanese": "違う… 壊してはいけない。",
						"chinese": "不是那样… 不能打破它。",
						"french": "Ce n'est pas ça… Ne le brise pas.",
						"spanish": "No es eso… No lo rompas.",
						"vietnamese": "Không phải thế… Đừng phá vỡ nó.",
						"thai": "ไม่ใช่แบบนั้น… อย่าทำลายมัน.",
						"hindi": "ऐसा नहीं है… इसे तोड़ना नहीं।"
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
					"duration_ms": 600,
					"spot": [
						5,
						2
					],
					"action": "enter",
					"speaker": "anuk"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "느껴지는가? 이 파동은… 너희를 밀어내는 게 아니다.",
						"english": "Do you feel it? This wave… isn't pushing you away.",
						"japanese": "感じるか？この波動は…お前たちを押し退けているのではない。",
						"chinese": "感受到了吗？这股波动…并不是在排斥你们。",
						"french": "Le sens-tu ? Cette onde… ne vous repousse pas.",
						"spanish": "¿Lo sientes? Esta onda… no os está repeliendo.",
						"vietnamese": "Ngươi có cảm nhận được không? Làn sóng này… không phải đang đẩy lùi ngươi.",
						"thai": "รู้สึกไหม? คลื่นนี้… ไม่ได้ผลักดันพวกเจ้าออกไป.",
						"hindi": "क्या तुम इसे महसूस करते हो? यह तरंग… तुम्हें दूर नहीं धकेल रही है।"
					},
					"speaker": "anuk",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "우리에게 적의를 보이는 방어야.",
						"english": "It's a defense showing hostility towards us.",
						"japanese": "私たちに敵意を向ける防御だ。",
						"chinese": "这是对我们展现敌意的防御。",
						"french": "C'est une défense montrant de l'hostilité envers nous.",
						"spanish": "Es una defensa que muestra hostilidad hacia nosotros.",
						"vietnamese": "Đó là sự phòng thủ thể hiện sự thù địch với chúng ta.",
						"thai": "มันคือการป้องกันที่แสดงความเป็นศัตรูต่อเรา.",
						"hindi": "यह हमारी ओर शत्रुता दिखाने वाली रक्षा है।"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "경고다. 파멸로부터 너희를 지키려는…",
						"english": "It's a warning. To protect you from destruction…",
						"japanese": "警告だ。破滅からお前たちを守ろうとする…",
						"chinese": "这是警告。为了保护你们免于毁灭…",
						"french": "C'est un avertissement. Pour vous protéger de la destruction…",
						"spanish": "Es una advertencia. Para protegeros de la destrucción…",
						"vietnamese": "Là lời cảnh báo. Để bảo vệ ngươi khỏi sự hủy diệt…",
						"thai": "เป็นการเตือน. เพื่อปกป้องพวกเจ้าจากการล่มสลาย…",
						"hindi": "यह एक चेतावनी है। तुम्हें विनाश से बचाने के लिए…"
					},
					"speaker": "anuk",
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "방해하지 마. 우린 진실을 해방할 거야.",
						"english": "Don't interfere. We will unleash the truth.",
						"japanese": "邪魔をするな。我々は真実を解き放つ。",
						"chinese": "别妨碍我们。我们将解放真相。",
						"french": "Ne nous dérangez pas. Nous libérerons la vérité.",
						"spanish": "No interfieras. Liberaremos la verdad.",
						"vietnamese": "Đừng cản trở. Chúng tôi sẽ giải phóng chân lý.",
						"thai": "อย่าขัดขวาง. เราจะปลดปล่อยความจริง.",
						"hindi": "हस्तक्षेप मत करो। हम सच्चाई को उजागर करेंगे।"
					},
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "최후의 방어막이 깨지고, 비르다의 심장이 눈앞에 드러났다.",
						"english": "The final shield shattered, revealing Virda's heart.",
						"japanese": "最後の防衛膜が破られ、ビルダの心臓が目の前に現れた。",
						"chinese": "最后的防御被打破，维尔达的心脏暴露眼前。",
						"french": "Le dernier bouclier a volé en éclats, révélant le cœur de Virda.",
						"spanish": "El último escudo se rompió, revelando el corazón de Virda.",
						"vietnamese": "Lá chắn cuối cùng vỡ tan, trái tim của Virda hiện ra trước mắt.",
						"thai": "โล่สุดท้ายแตกสลาย เผยให้เห็นหัวใจของเวิร์ด้า",
						"hindi": "अंतिम ढाल टूट गई, विरदा का हृदय सामने आ गया।"
					}
				},
				{
					"action": "enter",
					"speaker": "anuk",
					"spot": [
						5,
						2
					],
					"duration_ms": 400,
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "제발… 멈춰라. 돌이킬 수 없는 비극이 될 것이다.",
						"english": "Please… stop. This will be an irreversible tragedy.",
						"japanese": "頼む…やめろ。取り返しのつかない悲劇となるだろう。",
						"chinese": "拜托…住手。这将是一场无法挽回的悲剧。",
						"french": "S'il vous plaît… arrêtez. Ce sera une tragédie irréversible.",
						"spanish": "Por favor… detente. Esto será una tragedia irreversible.",
						"vietnamese": "Làm ơn… dừng lại. Đây sẽ là một bi kịch không thể cứu vãn.",
						"thai": "ได้โปรด… หยุดเถอะ นี่จะเป็นโศกนาฏกรรมที่ไม่อาจย้อนคืนได้",
						"hindi": "कृपया… रुक जाओ। यह एक अपरिवर्तनीय त्रासदी होगी।"
					},
					"speaker": "anuk",
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "돌이킬 수 없는 건 네 경고를 무시하고 나아가는 우리의 의지다.",
						"english": "What's irreversible is our will to press on, ignoring your warning.",
						"japanese": "取り返しのつかないのは、お前の警告を無視して進む、我々の意志だ。",
						"chinese": "无法挽回的是我们无视你警告，继续前进的意志。",
						"french": "Ce qui est irréversible, c'est notre volonté d'avancer, ignorant votre avertissement.",
						"spanish": "Lo irreversible es nuestra voluntad de seguir adelante, ignorando tu advertencia.",
						"vietnamese": "Điều không thể cứu vãn là ý chí của chúng ta, bỏ qua lời cảnh báo của ngươi để tiếp tục tiến lên.",
						"thai": "สิ่งที่ไม่อาจย้อนคืนได้คือเจตจำนงของเราที่จะก้าวไปข้างหน้า โดยไม่สนใจคำเตือนของเจ้า",
						"hindi": "जो अपरिवर्तनीय है, वह तुम्हारी चेतावनी को नज़रअंदाज़ करते हुए आगे बढ़ने की हमारी इच्छा है।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "오만이다… 너희의 오만이 세계를 집어삼킬 것이다.",
						"english": "Arrogance… Your arrogance will devour the world.",
						"japanese": "傲慢だ…お前たちの傲慢が世界を飲み込むだろう。",
						"chinese": "傲慢… 你们的傲慢将吞噬世界。",
						"french": "L'arrogance… Votre arrogance dévorera le monde.",
						"spanish": "Arrogancia… Vuestra arrogancia devorará el mundo.",
						"vietnamese": "Kiêu ngạo… Sự kiêu ngạo của các ngươi sẽ nuốt chửng thế giới.",
						"thai": "ความหยิ่งยโส… ความหยิ่งยโสของพวกเจ้าจะกลืนกินโลก",
						"hindi": "अहंकार… तुम्हारा अहंकार दुनिया को निगल जाएगा।"
					},
					"speaker": "anuk"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "비르다의 형체가 완전히 사라졌다. 그리고 세계는… 다시 파멸의 그림자에 잠식되기 시작했다.",
						"english": "Virda's form completely vanished. And the world... began to be engulfed by the shadow of destruction once more.",
						"japanese": "ビルダの姿は完全に消え去った。そして世界は…再び破滅の影に飲み込まれ始めた。",
						"chinese": "维尔达的身形完全消失了。而世界…再次开始被毁灭的阴影吞噬。",
						"french": "La forme de Virda a complètement disparu. Et le monde... a recommencé à être englouti par l'ombre de la destruction.",
						"spanish": "La forma de Virda desapareció por completo. Y el mundo... comenzó a ser engullido por la sombra de la destrucción una vez más.",
						"vietnamese": "Hình hài của Virda hoàn toàn biến mất. Và thế giới… lại bắt đầu bị bóng đêm hủy diệt nuốt chửng.",
						"thai": "ร่างของเวอร์ด้าหายไปอย่างสมบูรณ์ และโลกก็... เริ่มถูกกลืนกินด้วยเงาแห่งการทำลายล้างอีกครั้ง",
						"hindi": "विरदा का रूप पूरी तरह से गायब हो गया। और दुनिया... फिर से विनाश के साये में समाने लगी।"
					},
					"speaker": "narrator"
				},
				{
					"spot": [
						5,
						2
					],
					"duration_ms": 400,
					"action": "enter",
					"speaker": "anuk",
					"type": "direction"
				},
				{
					"speaker": "anuk",
					"content": {
						"korean": "결국… 이런 비극을 맞이하는군.",
						"english": "Ultimately... we face such a tragedy.",
						"japanese": "結局…このような悲劇を迎えるのか。",
						"chinese": "最终…我们迎来了这样的悲剧。",
						"french": "Finalement... nous faisons face à une telle tragédie.",
						"spanish": "Al final... nos enfrentamos a tal tragedia.",
						"vietnamese": "Cuối cùng… chúng ta lại phải đối mặt với bi kịch thế này.",
						"thai": "ในที่สุด... เราก็ต้องเผชิญกับโศกนาฏกรรมเช่นนี้",
						"hindi": "अंततः... हमें ऐसी त्रासदी का सामना करना पड़ा।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "우리가 짊어질게. 그녀가 지켰던 이 세계를…",
						"english": "We will bear it. This world she protected...",
						"japanese": "私たちが背負う。彼女が守ったこの世界を…",
						"chinese": "我们会承担的。这个她曾守护过的世界…",
						"french": "Nous porterons le fardeau. Ce monde qu'elle a protégé...",
						"spanish": "Lo soportaremos. Este mundo que ella protegió...",
						"vietnamese": "Chúng ta sẽ gánh vác. Thế giới này mà cô ấy đã bảo vệ…",
						"thai": "พวกเราจะแบกรับมันไว้ โลกใบนี้ที่เธอปกป้อง...",
						"hindi": "हम इसे सहेंगे। यह दुनिया जिसे उसने बचाया था..."
					},
					"emotion": "base"
				},
				{
					"speaker": "anuk",
					"content": {
						"korean": "그 결의가… 꺼지지 않는 불씨가 되기를 바란다.",
						"english": "May that resolve... become an unquenchable spark.",
						"japanese": "その決意が…消えない火種となることを願う。",
						"chinese": "愿那份决心…成为永不熄灭的火种。",
						"french": "Que cette détermination... devienne une étincelle inextinguible.",
						"spanish": "Que esa resolución... se convierta en una chispa inextinguible.",
						"vietnamese": "Mong rằng quyết tâm đó… sẽ trở thành ngọn lửa bất diệt.",
						"thai": "ขอให้ความมุ่งมั่นนั้น... กลายเป็นประกายไฟที่ไม่มีวันดับ",
						"hindi": "आशा है कि वह संकल्प... एक ऐसी चिंगारी बन जाए जो कभी न बुझे।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "돌이킬 수 없는 비극 앞에서, 새로운 무게를 짊어진 자들의 여정은 이제 막 시작되었다.",
						"english": "In the face of an irreversible tragedy, the journey of those who bear a new burden has just begun.",
						"japanese": "取り返しのつかない悲劇を前に、新たな重みを背負った者たちの旅は今始まったばかりだ。",
						"chinese": "在无法挽回的悲剧面前，肩负新重担者的旅程才刚刚开始。",
						"french": "Face à une tragédie irréversible, le voyage de ceux qui portent un nouveau fardeau ne fait que commencer.",
						"spanish": "Ante una tragedia irreversible, el viaje de quienes soportan una nueva carga acaba de comenzar.",
						"vietnamese": "Trước bi kịch không thể cứu vãn, hành trình của những người gánh vác gánh nặng mới chỉ vừa bắt đầu.",
						"thai": "เมื่อต้องเผชิญกับโศกนาฏกรรมที่ไม่อาจย้อนคืน การเดินทางของผู้ที่แบกรับภาระใหม่ก็ได้เริ่มต้นขึ้นแล้ว",
						"hindi": "एक अपरिवर्तनीय त्रासदी के सामने, एक नया बोझ उठाने वालों की यात्रा अभी शुरू हुई है।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "세계는 다시 얼어붙기 시작했다. 라그나로크의 그림자가 모든 것을 집어삼켰다.",
						"english": "The world began to freeze once more. The shadow of Ragnarok engulfed everything.",
						"japanese": "世界は再び凍りつき始めた。ラグナロクの影が全てを飲み込んだ。",
						"chinese": "世界再次开始冻结。诸神黄昏的阴影吞噬了一切。",
						"french": "Le monde a recommencé à geler. L'ombre du Ragnarok a tout englouti.",
						"spanish": "El mundo comenzó a congelarse de nuevo. La sombra del Ragnarok lo engulló todo.",
						"vietnamese": "Thế giới lại bắt đầu đóng băng. Bóng tối của Ragnarok đã nuốt chửng mọi thứ.",
						"thai": "โลกเริ่มกลับมาเป็นน้ำแข็งอีกครั้ง เงาแห่งแร็กนาร็อกกลืนกินทุกสิ่ง",
						"hindi": "दुनिया फिर से जमने लगी। राग्नारोक के साये ने सब कुछ निगल लिया।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "boss",
					"content": {
						"korean": "어리석은 자들… 너희는 결국 아무것도 바꾸지 못했다.",
						"english": "Fools... You ultimately changed nothing.",
						"japanese": "愚か者たち… 結局何も変えられなかったな。",
						"chinese": "愚蠢的家伙们……你们终究什么也改变不了。",
						"french": "Idiots... Vous n'avez finalement rien changé.",
						"spanish": "Necios... Al final no cambiasteis nada.",
						"vietnamese": "Những kẻ ngốc... Các ngươi rốt cuộc chẳng thay đổi được gì cả.",
						"thai": "พวกคนโง่... ในที่สุดพวกเจ้าก็ไม่สามารถเปลี่ยนอะไรได้เลย",
						"hindi": "मूर्खों... तुमने अंततः कुछ भी नहीं बदला।"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "아직… 끝나지 않았어. 포기하지 않을 거야.",
						"english": "It's not over yet... I won't give up.",
						"japanese": "まだ… 終わってない。諦めない。",
						"chinese": "还没… 结束。我不会放弃的。",
						"french": "Ce n'est pas encore fini... Je n'abandonnerai pas.",
						"spanish": "Aún no... No me rendiré.",
						"vietnamese": "Chưa... chưa kết thúc. Tôi sẽ không bỏ cuộc.",
						"thai": "ยัง... ไม่จบ ฉันจะไม่ยอมแพ้",
						"hindi": "अभी... खत्म नहीं हुआ है। मैं हार नहीं मानूंगा।"
					},
					"type": "speech"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"content": {
						"korean": "비르다의 심장이 산산조각 났다. 얼어붙은 룬 문자들이 폭풍처럼 휘몰아쳤다.",
						"english": "Virda's heart shattered. Frozen runes swirled like a storm.",
						"japanese": "ビルダの心臓が粉々に砕け散った。凍てついたルーン文字が嵐のように渦巻いた。",
						"chinese": "维尔达的心脏破碎了。冰冻的符文如暴风般呼啸。",
						"french": "Le cœur de Virda vola en éclats. Des runes gelées tourbillonnaient comme une tempête.",
						"spanish": "El corazón de Virda se hizo añicos. Runas congeladas giraban como una tormenta.",
						"vietnamese": "Trái tim của Virda tan vỡ. Những ký tự rune đóng băng xoáy như một cơn bão.",
						"thai": "หัวใจของเวิร์ด้าแตกเป็นเสี่ยงๆ อักษรรูนที่ถูกแช่แข็งหมุนวนราวกับพายุ",
						"hindi": "विरदा का हृदय चकनाचूर हो गया। जमी हुई रुनें तूफान की तरह घूम रही थीं।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "비석의 거대한 형체가 서서히 녹아내리며, 그 속에 감춰졌던 인간의 형상이 드러났다.",
						"english": "The massive form of the monument slowly melted, revealing the human shape hidden within.",
						"japanese": "石碑の巨大な形がゆっくりと溶け、その中に隠されていた人間の姿が露わになった。",
						"chinese": "石碑的巨大形体缓慢融化，其中隐藏的人形显露出来。",
						"french": "La forme massive du monument fondit lentement, révélant la forme humaine qui s'y cachait.",
						"spanish": "La enorme forma del monumento se derritió lentamente, revelando la figura humana oculta en su interior.",
						"vietnamese": "Hình dạng khổng lồ của bia đá từ từ tan chảy, để lộ hình dáng con người ẩn giấu bên trong.",
						"thai": "รูปร่างขนาดใหญ่ของอนุสาวรีย์ละลายลงช้าๆ เผยให้เห็นรูปร่างมนุษย์ที่ซ่อนอยู่ภายใน",
						"hindi": "स्मारक का विशाल आकार धीरे-धीरे पिघल गया, जिससे उसके भीतर छिपा हुआ मानवीय आकार प्रकट हुआ।"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "boss",
					"content": {
						"korean": "…진실은 칼날이니, 차라리 망각의 얼음 속에 영원히 잠들지어다…",
						"english": "…Truth is a blade; better it sleeps eternally in the ice of oblivion…",
						"japanese": "…真実は刃。いっそ忘却の氷の中に永遠に眠るが良い…",
						"chinese": "…真相是刀锋，不如永远沉睡在遗忘之冰中…",
						"french": "…La vérité est une lame ; mieux vaut qu'elle dorme éternellement dans la glace de l'oubli…",
						"spanish": "…La verdad es una espada; mejor que duerma eternamente en el hielo del olvido…",
						"vietnamese": "…Sự thật là một lưỡi dao; thà rằng nó ngủ yên vĩnh viễn trong băng giá của sự lãng quên…",
						"thai": "…ความจริงคือคมมีด ขอให้มันหลับใหลชั่วนิรันดร์ในน้ำแข็งแห่งการลืมเลือนเสียดีกว่า…",
						"hindi": "…सत्य एक तलवार है; बेहतर होगा कि यह विस्मृति की बर्फ में हमेशा के लिए सो जाए…"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…이게… 비르다?",
						"english": "…Is this… Virda?",
						"japanese": "…これが…ビルダ？",
						"chinese": "…这就是…维尔达？",
						"french": "…C'est ça… Virda ?",
						"spanish": "…¿Esto es… Virda?",
						"vietnamese": "…Đây là… Virda?",
						"thai": "…นี่คือ… เวิร์ด้าหรือ?",
						"hindi": "…क्या यह… विरदा है?"
					}
				},
				{
					"speaker": "boss",
					"content": {
						"korean": "나의 비극이 너희에게 닿지 않도록…",
						"english": "May my tragedy not reach you…",
						"japanese": "私の悲劇が、お前たちに届かぬように…",
						"chinese": "愿我的悲剧不会触及你们…",
						"french": "Que ma tragédie ne vous atteigne pas…",
						"spanish": "Que mi tragedia no os alcance…",
						"vietnamese": "Mong bi kịch của ta không chạm tới các ngươi…",
						"thai": "ขอโศกนาฏกรรมของฉันอย่าได้ไปถึงพวกเจ้าเลย…",
						"hindi": "मेरी त्रासदी तुम तक न पहुँचे…"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "봉인이 아니었어… 보호였어…",
						"english": "It wasn't a seal… it was protection…",
						"japanese": "封印ではなかった…守護だった…",
						"chinese": "这不是封印… 是保护…",
						"french": "Ce n'était pas un sceau… c'était une protection…",
						"spanish": "No era un sello… era protección…",
						"vietnamese": "Đó không phải là một phong ấn… mà là sự bảo vệ…",
						"thai": "มันไม่ใช่การผนึก… มันคือการปกป้อง…",
						"hindi": "यह एक मुहर नहीं थी… यह सुरक्षा थी…"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "anuk",
					"spot": [
						5,
						2
					],
					"duration_ms": 500
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "내가 경고했지! 너희의 오만이 결국 세계를 파멸시켰다!",
						"english": "I warned you! Your arrogance ultimately destroyed the world!",
						"japanese": "警告したはずだ！お前たちの傲慢さが、結局世界を破滅させた！",
						"chinese": "我警告过你！你们的傲慢最终毁灭了世界！",
						"french": "Je vous avais prévenus ! Votre arrogance a finalement détruit le monde !",
						"spanish": "¡Os lo advertí! Vuestra arrogancia finalmente destruyó el mundo.",
						"vietnamese": "Ta đã cảnh báo rồi! Sự kiêu ngạo của các ngươi rốt cuộc đã hủy diệt thế giới!",
						"thai": "ข้าเตือนแล้ว! ความโอหังของพวกเจ้าได้ทำลายโลกไปแล้วในที่สุด!",
						"hindi": "मैंने तुम्हें चेतावनी दी थी! तुम्हारे घमंड ने अंततः दुनिया को तबाह कर दिया!"
					},
					"speaker": "anuk"
				},
				{
					"content": {
						"korean": "우리가… 우리가 모든 걸 망쳤어…",
						"english": "We... we ruined everything...",
						"japanese": "私たちが…私たちが全てを台無しにした…",
						"chinese": "我们…我们毁了一切…",
						"french": "Nous... nous avons tout gâché...",
						"spanish": "Nosotros... lo arruinamos todo...",
						"vietnamese": "Chúng ta… chúng ta đã phá hỏng mọi thứ…",
						"thai": "พวกเรา... พวกเราทำทุกอย่างพังหมดแล้ว...",
						"hindi": "हमने... हमने सब बर्बाद कर दिया..."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "sad",
					"speaker": "boss",
					"content": {
						"korean": "…이제, 그 무게는 너희의 것이다…",
						"english": "...Now, that burden is yours...",
						"japanese": "…今、その重みはお前たちのものだ…",
						"chinese": "…现在，这份重担是你们的了…",
						"french": "...Maintenant, ce fardeau est le vôtre...",
						"spanish": "...Ahora, esa carga es vuestra...",
						"vietnamese": "…Bây giờ, gánh nặng đó là của các ngươi…",
						"thai": "...บัดนี้ ภาระนั้นเป็นของพวกเจ้าแล้ว...",
						"hindi": "...अब, वह बोझ तुम्हारा है..."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "흩어지는 비르다의 마지막 의지가 살아남은 자들에게 고루 깃들었다.",
						"english": "Virda's scattered last will equally imbued those who survived.",
						"japanese": "散りゆくビルダの最後の意志は、生き残った者たちに等しく宿った。",
						"chinese": "维尔达消散的最后意志，均匀地寄宿在幸存者身上。",
						"french": "La dernière volonté dispersée de Virda a imprégné équitablement ceux qui ont survécu.",
						"spanish": "La última voluntad dispersa de Virda imbuyó equitativamente a los que sobrevivieron.",
						"vietnamese": "Ý chí cuối cùng tan biến của Virda đã thấm đẫm đều vào những người sống sót.",
						"thai": "เจตจำนงสุดท้ายของเวอร์ด้าที่กระจัดกระจายได้เข้าสถิตในผู้รอดชีวิตอย่างเท่าเทียมกัน",
						"hindi": "विरदा की बिखरी हुई अंतिम इच्छा जीवित बचे लोगों में समान रूप से समा गई।"
					},
					"emotion": "base"
				}
			]
		}
	],
	"epilogue": {
		"korean": [
			"세계의 심장은 다시 얼어붙었다.",
			"우리가 해방하려 했던 것은, 사실은 우리를 지키려던 마지막 방패였다.",
			"이제 우리는, 그녀의 비극적 맹세를 짊어진다.",
			"파멸의 그림자 아래, 희미한 불씨 하나가 타오르고 있었다.",
			"이것이 구원일까, 아니면 또 다른 비극의 시작일까."
		],
		"english": [
			"The heart of the world froze once more.",
			"What we sought to free was, in fact, the last shield protecting us.",
			"Now we bear her tragic vow.",
			"Beneath the shadow of ruin, a faint ember glowed.",
			"Is this salvation, or the beginning of another tragedy?"
		],
		"japanese": [
			"世界の心臓は再び凍りついた。",
			"私たちが解放しようとしたものは、実は私たちを守る最後の盾だった。",
			"今、私たちは彼女の悲劇的な誓いを背負う。",
			"破滅の影の下、かすかな火種が燃え盛っていた。",
			"これは救済なのか、それともまた別の悲劇の始まりなのか。"
		],
		"chinese": [
			"世界之心再次冻结。",
			"我们试图解放的，实际上是保护我们的最后一道屏障。",
			"如今，我们肩负着她悲剧性的誓言。",
			"在毁灭的阴影下，一缕微弱的火星正在燃烧。",
			"这是救赎吗，还是另一场悲剧的开始？"
		],
		"french": [
			"Le cœur du monde se figea de nouveau.",
			"Ce que nous cherchions à libérer était, en fait, le dernier bouclier nous protégeant.",
			"Désormais, nous portons son vœu tragique.",
			"Sous l'ombre de la ruine, une faible braise luisait.",
			"Est-ce le salut, ou le début d'une autre tragédie ?"
		],
		"spanish": [
			"El corazón del mundo se congeló una vez más.",
			"Lo que intentamos liberar era, en realidad, el último escudo que nos protegía.",
			"Ahora, cargamos con su trágico juramento.",
			"Bajo la sombra de la ruina, una débil brasa ardía.",
			"¿Es esto la salvación, o el comienzo de otra tragedia?"
		],
		"vietnamese": [
			"Trái tim của thế giới lại đóng băng.",
			"Thứ chúng ta định giải phóng, thực ra lại là tấm khiên cuối cùng bảo vệ chúng ta.",
			"Giờ đây, chúng ta mang theo lời thề bi thảm của nàng.",
			"Dưới bóng tối của sự hủy diệt, một đốm lửa mờ nhạt đang cháy.",
			"Đây là sự cứu rỗi, hay khởi đầu của một bi kịch khác?"
		],
		"thai": [
			"หัวใจของโลกกลับมาเยือกแข็งอีกครั้ง",
			"สิ่งที่เราพยายามปลดปล่อย แท้จริงแล้วคือโล่สุดท้ายที่ปกป้องเรา",
			"บัดนี้ เราแบกรับคำสาบานอันน่าเศร้าของนาง",
			"ใต้เงาแห่งความพินาศ มีถ่านไฟริบหรี่ดวงหนึ่งลุกโชนอยู่",
			"นี่คือการไถ่บาป หรือจุดเริ่มต้นของโศกนาฏกรรมอีกครั้ง?"
		],
		"hindi": [
			"विश्व का हृदय एक बार फिर जम गया।",
			"जिसे हम आज़ाद करना चाहते थे, वह वास्तव में हमारी रक्षा करने वाली आखिरी ढाल थी।",
			"अब हम उसकी दुखद प्रतिज्ञा निभाते हैं।",
			"विनाश की छाया के नीचे, एक धुँधली चिंगारी जल रही थी।",
			"क्या यह मोक्ष है, या किसी और त्रासदी की शुरुआत?"
		]
	},
	"prologue": {
		"korean": [
			"심장의 눈물. 영원히 얼어붙은 비극 속으로.",
			"마지막 봉인이 우리를 기다리고 있었다.",
			"여기까지 오는 동안, 우리는 무엇을 믿고, 무엇을 부쉈는가.",
			"진실은 때로, 파멸보다 잔혹하다."
		],
		"english": [
			"Tears of the heart. Into a tragedy eternally frozen.",
			"The final seal awaited us.",
			"What did we believe, what did we break, to come this far?",
			"Truth is sometimes crueler than ruin."
		],
		"japanese": [
			"心の涙。永遠に凍てついた悲劇の中へ。",
			"最後の封印が私たちを待っていた。",
			"ここまで来る間に、私たちは何を信じ、何を壊したのか。",
			"真実は時として、破滅よりも残酷だ。"
		],
		"chinese": [
			"心之泪。坠入永恒冰封的悲剧之中。",
			"最终的封印在等着我们。",
			"走到这里，我们相信了什么，又打破了什么？",
			"真相有时比毁灭更残酷。"
		],
		"french": [
			"Les larmes du cœur. Dans une tragédie gelée à jamais.",
			"Le dernier sceau nous attendait.",
			"En venant jusqu'ici, qu'avons-nous cru, et qu'avons-nous brisé ?",
			"La vérité est parfois plus cruelle que la ruine."
		],
		"spanish": [
			"Lágrimas del corazón. Hacia una tragedia eternamente congelada.",
			"El último sello nos esperaba.",
			"Hasta aquí, ¿qué creímos y qué rompimos?",
			"La verdad es a veces más cruel que la ruina."
		],
		"vietnamese": [
			"Nước mắt trái tim. Chìm vào bi kịch đóng băng vĩnh viễn.",
			"Phong ấn cuối cùng đang chờ đợi chúng ta.",
			"Đến được đây, chúng ta đã tin vào điều gì, và phá vỡ điều gì?",
			"Sự thật đôi khi tàn khốc hơn cả sự hủy diệt."
		],
		"thai": [
			"น้ำตาแห่งหัวใจ สู่โศกนาฏกรรมที่เยือกแข็งชั่วนิรันดร์",
			"ผนึกสุดท้ายรอคอยเราอยู่",
			"มาถึงตรงนี้ เราเชื่ออะไร และทำลายอะไรไปบ้าง?",
			"ความจริงบางครั้งโหดร้ายยิ่งกว่าความพินาศ"
		],
		"hindi": [
			"हृदय के आँसू। एक ऐसी त्रासदी में जो हमेशा के लिए जमी हुई है।",
			"आखिरी मुहर हमारा इंतज़ार कर रही थी।",
			"यहाँ तक आते-आते, हमने किस पर विश्वास किया, और क्या तोड़ दिया?",
			"सत्य कभी-कभी विनाश से भी अधिक क्रूर होता है।"
		]
	}
} as const;
