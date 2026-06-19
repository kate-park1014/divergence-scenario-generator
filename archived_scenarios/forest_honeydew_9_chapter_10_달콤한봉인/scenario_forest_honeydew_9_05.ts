export const scenario_forest_honeydew_9_05 = {
	"scenario_id": "forest_honeydew_9_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "forest",
	"actors": {
		"cedar": {
			"id": "mon_bd67c222-311e-4f31-b81f-931b14f6b5c6",
			"name": {
				"korean": "시더",
				"english": "Cedar",
				"japanese": "シダー",
				"chinese": "雪松",
				"french": "Cèdre",
				"spanish": "Cedro",
				"vietnamese": "Tuyết tùng",
				"thai": "ซีดาร์",
				"hindi": "देवदार"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f1057921-5fa2-4be2-767d-1a64c33e6e00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/9579f10e-eb78-40e5-d495-72f489322200/public"
		}
	},
	"boss": {
		"pool_id": "pool_Beekeeper_Honeydew_V1"
	},
	"prologue": {
		"korean": [
			"세계수 심장부, 밀랍 갑옷 속 진실.",
			"달콤한 꿀은 영원한 자장가였다.",
			"깨울 것인가, 잠들 것인가.",
			"자비라 불린 잔혹한 봉인을 끝내러 왔다."
		],
		"english": [
			"World Tree's heart, truth in waxen armor.",
			"Sweet honey, an eternal lullaby.",
			"To awaken, or to slumber?",
			"I've come to end the cruel seal called mercy."
		],
		"japanese": [
			"世界樹の心臓部、蜜蝋の鎧の中の真実。",
			"甘い蜜は、永遠の子守歌だった。",
			"目覚めるか、眠り続けるか。",
			"慈悲と呼ばれた残酷な封印を終わらせに来た。"
		],
		"chinese": [
			"世界树之心，蜂蜡盔甲下的真相。",
			"甜美的蜂蜜，是永恒的摇篮曲。",
			"唤醒，抑或沉睡？",
			"我来此，终结这名为慈悲的残酷封印。"
		],
		"french": [
			"Cœur de l'Arbre-Monde, la vérité sous l'armure de cire.",
			"Le doux miel, une berceuse éternelle.",
			"Éveiller ou s'endormir ?",
			"Je suis venu mettre fin au cruel sceau appelé miséricorde."
		],
		"spanish": [
			"Corazón del Árbol del Mundo, la verdad en la armadura de cera.",
			"La dulce miel, una nana eterna.",
			"¿Despertar o dormir?",
			"He venido a romper el cruel sello llamado piedad."
		],
		"vietnamese": [
			"Trái tim Cây Thế giới, sự thật trong giáp sáp ong.",
			"Mật ngọt là khúc ru vĩnh cửu.",
			"Đánh thức, hay chìm vào giấc ngủ?",
			"Ta đến để chấm dứt phong ấn tàn khốc mang tên từ bi."
		],
		"thai": [
			"ใจกลางต้นไม้โลก, ความจริงในเกราะขี้ผึ้ง.",
			"น้ำผึ้งหวาน, เพลงกล่อมเด็กนิรันดร์.",
			"จะปลุกให้ตื่น, หรือจะหลับใหล?",
			"ข้ามาเพื่อยุติผนึกอันโหดร้ายที่เรียกว่าความเมตตา."
		],
		"hindi": [
			"विश्व वृक्ष का हृदय, मोम के कवच में सत्य।",
			"मीठा शहद, एक शाश्वत लोरी।",
			"जगाना है, या सोए रहना है।",
			"मैं तथाकथित दया की क्रूर मुहर को समाप्त करने आया हूँ।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "밀랍 갑옷이 깨지자 꿀에 잠긴 형상들이 드러났다.",
						"english": "As the waxen armor broke, honey-drenched forms were revealed.",
						"japanese": "蜜蝋の鎧が砕けると、蜜に浸かった姿が現れた。",
						"chinese": "蜂蜡盔甲破碎，浸泡在蜂蜜中的形体显露出来。",
						"french": "Lorsque l'armure de cire se brisa, des formes trempées de miel apparurent.",
						"spanish": "Al romperse la armadura de cera, se revelaron formas bañadas en miel.",
						"vietnamese": "Khi giáp sáp ong vỡ ra, những hình thù ngâm mật ong lộ diện.",
						"thai": "เมื่อเกราะขี้ผึ้งแตกออก, ร่างที่ชุ่มน้ำผึ้งก็ปรากฏ.",
						"hindi": "जैसे ही मोम का कवच टूटा, शहद में डूबे हुए आकार प्रकट हुए।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "저게… 다 뭐야?",
						"english": "What... is all that?",
						"japanese": "あれは…全部何だ？",
						"chinese": "那…都是什么？",
						"french": "Qu'est-ce que… tout ça ?",
						"spanish": "¿Qué… es todo eso?",
						"vietnamese": "Kia… là cái gì vậy?",
						"thai": "นั่น…ทั้งหมดคืออะไร?",
						"hindi": "वह… सब क्या है?"
					}
				},
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"speaker": "cedar",
					"duration_ms": 500
				},
				{
					"speaker": "cedar",
					"content": {
						"korean": "이 꿀은… 재우는 게 아니었어. 가둔 거야.",
						"english": "This honey… wasn't putting them to sleep. It trapped them.",
						"japanese": "この蜜は…眠らせるものじゃなかった。閉じ込めてたんだ。",
						"chinese": "这蜂蜜…不是让人入睡的。是困住的。",
						"french": "Ce miel… ne les endormait pas. Il les a piégés.",
						"spanish": "Esta miel… no los estaba durmiendo. Los atrapó.",
						"vietnamese": "Mật ong này… không phải để ru ngủ. Mà là để giam giữ.",
						"thai": "น้ำผึ้งนี่…ไม่ใช่การทำให้หลับ. มันขังพวกมันไว้.",
						"hindi": "यह शहद… सुलाने के लिए नहीं था। इसने उन्हें फँसाया है।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"duration_ms": 500,
					"speaker": "boss",
					"spot": [
						5,
						4
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "쉿… 울지 마렴, 아가야…",
						"english": "Shhh… Don't cry, little one…",
						"japanese": "シッ…泣かないで、坊や…",
						"chinese": "嘘…别哭了，孩子…",
						"french": "Chut… Ne pleure pas, mon petit…",
						"spanish": "Shhh… No llores, pequeño…",
						"vietnamese": "Suỵt… Đừng khóc, con yêu…",
						"thai": "ชู่ว… อย่าร้องไห้นะ, เด็กน้อย…",
						"hindi": "श… रो मत, बच्चे…"
					}
				},
				{
					"emotion": "base",
					"speaker": "boss",
					"content": {
						"korean": "이제 다시는 배고프지 않을 거야…",
						"english": "You'll never be hungry again…",
						"japanese": "もう二度と空腹にはならないよ…",
						"chinese": "你再也不会饿了…",
						"french": "Tu n'auras plus jamais faim…",
						"spanish": "Nunca más tendrás hambre…",
						"vietnamese": "Con sẽ không bao giờ đói nữa đâu…",
						"thai": "เธอจะไม่หิวอีกต่อไปแล้ว…",
						"hindi": "तुम्हें अब फिर कभी भूख नहीं लगेगी…"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "cedar",
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "cedar",
					"content": {
						"korean": "이 자장가를 계속 들으면… 우리도 저들처럼 돼.",
						"english": "If we keep listening to this lullaby… we'll become like them.",
						"japanese": "この子守唄を聞き続けたら…私たちも彼らのようになる。",
						"chinese": "如果我们一直听这摇篮曲…我们也会变得像他们一样。",
						"french": "Si nous continuons d'écouter cette berceuse… nous deviendrons comme eux.",
						"spanish": "Si seguimos escuchando esta nana… nos volveremos como ellos.",
						"vietnamese": "Nếu cứ tiếp tục nghe bài hát ru này… chúng ta cũng sẽ thành ra như họ.",
						"thai": "ถ้าเรายังคงฟังเพลงกล่อมเด็กนี้… เราก็จะกลายเป็นเหมือนพวกเขา.",
						"hindi": "अगर हम यह लोरी सुनते रहे… तो हम भी उनकी तरह बन जाएँगे।"
					}
				},
				{
					"speaker": "boss",
					"spot": [
						6,
						4
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "이 따뜻하고 달콤한 곳에서…",
						"english": "In this warm and sweet place…",
						"japanese": "この暖かくて甘い場所で…",
						"chinese": "在这个温暖又甜蜜的地方…",
						"french": "Dans ce lieu chaud et doux…",
						"spanish": "En este lugar cálido y dulce…",
						"vietnamese": "Ở nơi ấm áp và ngọt ngào này…",
						"thai": "ในสถานที่ที่อบอุ่นและหอมหวานแห่งนี้…",
						"hindi": "इस गर्म और मीठी जगह में…"
					}
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "영원히… 영원히 잠들면 되는 거란다…",
						"english": "You just need to sleep… forever and ever…",
						"japanese": "永遠に…永遠に眠ればいいんだよ…",
						"chinese": "永远…永远地睡着就好了…",
						"french": "Tu n'as qu'à dormir… pour toujours et à jamais…",
						"spanish": "Solo tienes que dormir… para siempre y por toda la eternidad…",
						"vietnamese": "Con chỉ cần ngủ… mãi mãi…",
						"thai": "แค่หลับใหลไป… ชั่วนิรันดร์…",
						"hindi": "तुम्हें बस हमेशा… हमेशा के लिए सो जाना है…"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그게… 네가 말하는 자비야?",
						"english": "Is that… what you call mercy?",
						"japanese": "それが…お前の言う慈悲なのか？",
						"chinese": "那就是…你所说的慈悲吗？",
						"french": "C'est ça… ce que tu appelles la miséricorde ?",
						"spanish": "¿Es eso… lo que llamas misericordia?",
						"vietnamese": "Đó… là lòng từ bi mà ngươi nói sao?",
						"thai": "นั่น…คือสิ่งที่เจ้าเรียกว่าความเมตตาหรือ?",
						"hindi": "क्या यही… तुम्हारी बताई हुई दया है?"
					},
					"emotion": "angry"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "boss",
					"spot": [
						5,
						4
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"emotion": "base",
					"speaker": "boss",
					"content": {
						"korean": "그래. 배고픔도 아픔도 없는 평온.",
						"english": "Yes. Peace without hunger or pain.",
						"japanese": "そうだ。空腹も痛みもない平穏だ。",
						"chinese": "是的。没有饥饿也没有痛苦的平静。",
						"french": "Oui. La paix sans faim ni douleur.",
						"spanish": "Sí. Paz sin hambre ni dolor.",
						"vietnamese": "Đúng vậy. Bình yên không đói khát, không đau đớn.",
						"thai": "ใช่. ความสงบสุขที่ไร้ความหิวโหยและความเจ็บปวด.",
						"hindi": "हाँ। भूख और दर्द रहित शांति।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "모든 생명을 꿀 속에 봉인하는 것… 이것이 진정한 자비.",
						"english": "Sealing all life in honey… this is true mercy.",
						"japanese": "全ての生命を蜜の中に封じること…これが真の慈悲だ。",
						"chinese": "将所有生命封印在蜂蜜中…这才是真正的慈悲。",
						"french": "Sceller toute vie dans le miel… voilà la vraie miséricorde.",
						"spanish": "Sellar toda vida en la miel… esta es la verdadera misericordia.",
						"vietnamese": "Phong ấn mọi sinh linh vào trong mật ong… đây mới là lòng từ bi chân chính.",
						"thai": "การผนึกทุกชีวิตไว้ในน้ำผึ้ง… นี่แหละคือความเมตตาที่แท้จริง.",
						"hindi": "सभी जीवन को शहद में सील करना… यही सच्ची दया है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그건… 삶이 아니야.",
						"english": "That's... not life.",
						"japanese": "それは…生ではない。",
						"chinese": "那不是…生命。",
						"french": "Ce n'est pas... la vie.",
						"spanish": "Eso... no es vida.",
						"vietnamese": "Đó không phải... là sự sống.",
						"thai": "นั่นมัน...ไม่ใช่ชีวิต",
						"hindi": "वह… जीवन नहीं है।"
					},
					"emotion": "angry"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "발밑에 끈적한 꿀이 차오르기 시작했다.",
						"english": "Sticky honey began to rise beneath my feet.",
						"japanese": "足元にねばつく蜜が満ち始めた。",
						"chinese": "黏稠的蜂蜜开始在脚下涌起。",
						"french": "Un miel collant commença à monter sous mes pieds.",
						"spanish": "Una miel pegajosa empezó a subir bajo mis pies.",
						"vietnamese": "Mật ong dính bắt đầu dâng lên dưới chân.",
						"thai": "น้ำผึ้งเหนียวหนืดเริ่มเอ่อขึ้นใต้เท้า",
						"hindi": "पैरों के नीचे चिपचिपा शहद उठने लगा।"
					}
				},
				{
					"spot": [
						5,
						4
					],
					"speaker": "boss",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "boss",
					"content": {
						"korean": "돌아갈 곳은 없단다. 너희도 곧 알게 될 거야.",
						"english": "There's no turning back. You'll soon find out.",
						"japanese": "戻る場所はないよ。君たちもすぐにわかるだろう。",
						"chinese": "没有回头路了。你们很快就会明白的。",
						"french": "Il n'y a pas de retour. Vous le découvrirez bientôt.",
						"spanish": "No hay vuelta atrás. Pronto lo descubriréis.",
						"vietnamese": "Không còn đường quay lại đâu. Các ngươi sẽ sớm biết thôi.",
						"thai": "ไม่มีทางกลับแล้วล่ะ พวกเจ้าจะรู้ในไม่ช้า",
						"hindi": "लौटने की कोई जगह नहीं है। तुम भी जल्द ही जान जाओगे।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "우리는… 굶주림을 택할지언정, 가두진 않아.",
						"english": "We... choose hunger, but we don't imprison.",
						"japanese": "我々は…飢えを選ぶが、閉じ込めはしない。",
						"chinese": "我们…宁愿选择饥饿，也不会囚禁。",
						"french": "Nous… choisirons la faim, mais ne vous emprisonnerons pas.",
						"spanish": "Nosotros… elegiremos el hambre, pero no encerraremos.",
						"vietnamese": "Chúng ta… thà chọn đói khát, chứ không giam cầm.",
						"thai": "เรา...จะเลือกความหิวโหย แต่จะไม่กักขัง",
						"hindi": "हम… भुखमरी चुनेंगे, लेकिन कैद नहीं करेंगे।"
					},
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "부서진 가면 틈으로 꿀이 눈물처럼 흘러내렸다.",
						"english": "Honey flowed like tears through the cracks of the broken mask.",
						"japanese": "壊れた仮面の隙間から、蜜が涙のように流れ落ちた。",
						"chinese": "蜂蜜像眼泪一样从破碎的面具缝隙中流下。",
						"french": "Le miel coulait comme des larmes à travers les fissures du masque brisé.",
						"spanish": "La miel fluía como lágrimas a través de las grietas de la máscara rota.",
						"vietnamese": "Mật ong chảy như nước mắt qua kẽ hở của mặt nạ vỡ.",
						"thai": "น้ำผึ้งไหลลงมาเหมือนน้ำตาจากรอยแตกของหน้ากากที่แตกหัก",
						"hindi": "टूटे हुए मुखौटे की दरारों से शहद आँसुओं की तरह बह रहा था।"
					}
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "boss",
					"spot": [
						5,
						4
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "boss",
					"content": {
						"korean": "멈추지 않는 아이들… 왜 이 달콤함을 거부하니?",
						"english": "Unceasing children... Why do you reject this sweetness?",
						"japanese": "止まらない子供たち…なぜこの甘美さを拒むのか？",
						"chinese": "不停歇的孩子们…为何拒绝这份甜蜜？",
						"french": "Enfants incessants… Pourquoi rejetez-vous cette douceur ?",
						"spanish": "¿Niños incansables… Por qué rechazáis esta dulzura?",
						"vietnamese": "Những đứa trẻ không ngừng… Tại sao lại từ chối sự ngọt ngào này?",
						"thai": "เด็กๆ ที่ไม่หยุดนิ่ง… ทำไมถึงปฏิเสธความหวานนี้?",
						"hindi": "न रुकने वाले बच्चे… इस मिठास को क्यों अस्वीकार करते हो?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "우리는… 깨어날 거야.",
						"english": "We... will awaken.",
						"japanese": "我々は…目覚めるだろう。",
						"chinese": "我们…会醒来的。",
						"french": "Nous… nous réveillerons.",
						"spanish": "Nosotros… despertaremos.",
						"vietnamese": "Chúng ta… sẽ thức tỉnh.",
						"thai": "เรา...จะตื่นขึ้น",
						"hindi": "हम… जागेंगे।"
					}
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "어리석은… 영원한 배고픔 속으로…",
						"english": "Foolish... into eternal hunger...",
						"japanese": "愚かな…永遠の飢えの中へ…",
						"chinese": "愚蠢的…进入永恒的饥饿之中…",
						"french": "Stupide… dans une faim éternelle…",
						"spanish": "Tonto… hacia el hambre eterna…",
						"vietnamese": "Ngu ngốc… vào cơn đói vĩnh cửu…",
						"thai": "โง่เขลา… สู่ความหิวโหยชั่วนิรันดร์…",
						"hindi": "मूर्ख… अनंत भूख में…"
					},
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"speaker": "boss",
					"type": "direction",
					"action": "exit",
					"duration_ms": 400
				},
				{
					"emotion": "sad",
					"speaker": "boss",
					"content": {
						"korean": "…아니야… 내가 틀리지 않았어…",
						"english": "...No... I wasn't wrong...",
						"japanese": "…違う…私は間違ってなかった…",
						"chinese": "…不…我没有错…",
						"french": "…Non… je ne me suis pas trompé…",
						"spanish": "…No… no me equivoqué…",
						"vietnamese": "…Không… ta không sai…",
						"thai": "…ไม่… ฉันไม่ได้ผิด…",
						"hindi": "…नहीं… मैं गलत नहीं था…"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "나는… 나는 그저… 모두를 배불리 먹이고 싶었을 뿐…",
						"english": "I... I just... wanted to feed everyone to their fill...",
						"japanese": "私は…私はただ…皆を満腹にしたかっただけだ…",
						"chinese": "我…我只是…想让所有人都吃饱而已…",
						"french": "Je… je voulais juste… nourrir tout le monde à satiété…",
						"spanish": "Yo… yo solo… quería saciar el hambre de todos…",
						"vietnamese": "Ta… ta chỉ là… muốn cho mọi người ăn no thôi…",
						"thai": "ฉัน…ฉันแค่…อยากให้ทุกคนอิ่มหนำสำราญ…",
						"hindi": "मैं… मैं बस… सबको पेट भर खिलाना चाहता था…"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "그녀는… 숲을 사랑했어. 비뚤어진 방식이었지만.",
						"english": "She… loved the forest. In her own twisted way.",
						"japanese": "彼女は… 森を愛していた。歪んだやり方だったけど。",
						"chinese": "她… 爱着森林。尽管方式扭曲。",
						"french": "Elle… aimait la forêt. À sa manière tordue, certes.",
						"spanish": "Ella… amaba el bosque. A su retorcida manera, eso sí.",
						"vietnamese": "Cô ấy… yêu khu rừng. Dù theo một cách méo mó.",
						"thai": "เธอ… รักป่า แม้จะเป็นวิธีที่บิดเบี้ยวก็ตาม",
						"hindi": "वह… जंगल से प्यार करती थी। भले ही उसका तरीका अजीब था।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "cedar",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "cedar",
					"content": {
						"korean": "하지만 그 사랑은… 모두를 가두는 독이 되었지.",
						"english": "But that love… became a poison, trapping everyone.",
						"japanese": "しかしその愛は… 皆を閉じ込める毒となった。",
						"chinese": "但那份爱… 却成了囚禁所有人的毒药。",
						"french": "Mais cet amour… devint un poison, piégeant tout le monde.",
						"spanish": "Pero ese amor… se convirtió en veneno, atrapándolos a todos.",
						"vietnamese": "Nhưng tình yêu đó… lại trở thành chất độc giam cầm tất cả.",
						"thai": "แต่ความรักนั้น… กลายเป็นยาพิษที่กักขังทุกคน",
						"hindi": "लेकिन वह प्यार… सबको फंसाने वाला ज़हर बन गया।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "꿀에 잠긴 숲은 서서히 활력을 되찾았다.",
						"english": "The forest, steeped in honey, slowly regained its vitality.",
						"japanese": "蜜に浸された森は、徐々に活力を取り戻した。",
						"chinese": "浸润在蜜中的森林，渐渐恢复了生机。",
						"french": "La forêt, baignée de miel, retrouva peu à peu sa vitalité.",
						"spanish": "El bosque, sumergido en miel, recuperó lentamente su vitalidad.",
						"vietnamese": "Khu rừng đắm chìm trong mật ngọt, dần lấy lại sức sống.",
						"thai": "ป่าที่อาบด้วยน้ำผึ้งค่อยๆ ฟื้นคืนชีวิตชีวา",
						"hindi": "शहद में डूबा जंगल धीरे-धीरे अपनी जान वापस पा गया।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						5,
						4
					],
					"speaker": "boss"
				},
				{
					"emotion": "base",
					"speaker": "boss",
					"content": {
						"korean": "어서 와, 나의 아가들… 영원한 잠에 들 시간이야.",
						"english": "Welcome, my darlings… It's time for eternal sleep.",
						"japanese": "ようこそ、私のかわいい子たち… 永遠の眠りにつく時間よ。",
						"chinese": "欢迎，我的宝贝们… 是时候进入永恒的沉睡了。",
						"french": "Bienvenue, mes chéris… Il est temps de plonger dans un sommeil éternel.",
						"spanish": "Bienvenidos, mis pequeños… Es hora de un sueño eterno.",
						"vietnamese": "Chào mừng, các con yêu của ta… Đã đến lúc chìm vào giấc ngủ vĩnh hằng.",
						"thai": "ยินดีต้อนรับ ลูกรักของแม่… ได้เวลาหลับใหลชั่วนิรันดร์แล้ว",
						"hindi": "स्वागत है, मेरे प्यारे बच्चों… अब अनंत नींद में सोने का समय है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…아직 끝나지 않았어.",
						"english": "…It's not over yet.",
						"japanese": "…まだ終わってない。",
						"chinese": "…还没结束。",
						"french": "…Ce n'est pas encore fini.",
						"spanish": "…Aún no ha terminado.",
						"vietnamese": "…Chưa kết thúc đâu.",
						"thai": "…ยังไม่จบ",
						"hindi": "…अभी खत्म नहीं हुआ है।"
					},
					"emotion": "angry"
				}
			],
			"id": 15
		}
	],
	"epilogue": {
		"korean": [
			"달콤한 봉인이 깨지고, 숲은 다시 굶주림을 마주했다.",
			"깨어난 자들은 혼란스러웠고, 하니듀는 사라졌다.",
			"과연 이것이 진정한 구원이었을까.",
			"숲은, 다시 살아갈 준비를 하고 있었다.",
			"삶은 달콤한 잠이 아니라, 고통을 이겨내는 투쟁이었다."
		],
		"english": [
			"The sweet seal broke, and the forest faced hunger anew.",
			"The awakened were bewildered, and Honeydew was gone.",
			"Was this truly salvation?",
			"The forest, preparing to live again.",
			"Life was not a sweet slumber, but a struggle overcoming pain."
		],
		"japanese": [
			"甘い封印が破られ、森は再び飢えに直面した。",
			"目覚めた者たちは混乱し、ハニーデューは消え去った。",
			"果たして、これが真の救済だったのだろうか。",
			"森は、再び生きる準備をしていた。",
			"生は甘い眠りではなく、苦痛を乗り越える闘争だった。"
		],
		"chinese": [
			"甜蜜的封印破碎，森林再次面临饥饿。",
			"觉醒者们困惑不解，Honeydew消失了。",
			"这果真是真正的救赎吗？",
			"森林，正准备再次焕发生机。",
			"生命并非甜美的沉睡，而是战胜痛苦的抗争。"
		],
		"french": [
			"Le doux sceau se rompit, et la forêt fit face à nouveau à la faim.",
			"Les éveillés étaient déconcertés, et Honeydew avait disparu.",
			"Était-ce vraiment le vrai salut ?",
			"La forêt se préparait à revivre.",
			"La vie n'était pas un doux sommeil, mais une lutte pour surmonter la douleur."
		],
		"spanish": [
			"El dulce sello se rompió, y el bosque enfrentó el hambre de nuevo.",
			"Los que despertaron estaban desconcertados, y Honeydew había desaparecido.",
			"¿Fue esta realmente la verdadera salvación?",
			"El bosque se preparaba para vivir de nuevo.",
			"La vida no era un dulce sueño, sino una lucha que superaba el dolor."
		],
		"vietnamese": [
			"Phong ấn ngọt ngào vỡ tan, khu rừng lại đối mặt với đói khát.",
			"Những người thức tỉnh bối rối, và Honeydew biến mất.",
			"Liệu đây có phải là sự cứu rỗi thực sự?",
			"Rừng, đang chuẩn bị để sống lại.",
			"Cuộc sống không phải là giấc ngủ ngọt ngào, mà là cuộc chiến vượt qua nỗi đau."
		],
		"thai": [
			"ผนึกหวานสลาย, ป่ากลับเผชิญความหิวโหยอีกครั้ง.",
			"ผู้ที่ตื่นขึ้นมาต่างสับสน, และฮันนี่ดิวก็หายไป.",
			"นี่คือการช่วยกู้ที่แท้จริงหรือเปล่า?",
			"ป่า, กำลังเตรียมพร้อมที่จะมีชีวิตอีกครั้ง.",
			"ชีวิตไม่ใช่การหลับใหลอันหอมหวาน, แต่เป็นการต่อสู้เพื่อเอาชนะความเจ็บปวด."
		],
		"hindi": [
			"मीठी मुहर टूट गई, और जंगल ने फिर से भूख का सामना किया।",
			"जागे हुए लोग भ्रमित थे, और हनीड्यू गायब हो गया था।",
			"क्या यह वास्तव में सच्ची मुक्ति थी?",
			"जंगल, फिर से जीने की तैयारी कर रहा था।",
			"जीवन मीठी नींद नहीं था, बल्कि दर्द पर विजय पाने का संघर्ष था।"
		]
	}
} as const;
