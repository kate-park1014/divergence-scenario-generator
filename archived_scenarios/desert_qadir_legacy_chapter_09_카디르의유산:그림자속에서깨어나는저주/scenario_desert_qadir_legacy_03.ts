export const scenario_desert_qadir_legacy_03 = {
	"scenario_id": "desert_qadir_legacy_03",
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
	"prologue": {
		"korean": [
			"사막의 심장부, 잊힌 유적.",
			"고대의 저주가 다시 눈을 떴다.",
			"케메트의 예언은 경고인가, 파멸의 주문인가.",
			"1편의 모든 것이 새로운 비극의 서막이었다."
		],
		"english": [
			"Desert's heart, forgotten ruins.",
			"Ancient curse reawakens.",
			"Kemet's prophecy: a warning, or a spell of ruin?",
			"All from Part 1 was a prelude to a new tragedy."
		],
		"japanese": [
			"砂漠の心臓部、忘れ去られた遺跡。",
			"古の呪いが再び目覚めた。",
			"ケメトの予言は警告か、それとも破滅の呪文か。",
			"第一部のすべては、新たな悲劇の序幕に過ぎなかった。"
		],
		"chinese": [
			"沙漠之心，被遗忘的遗迹。",
			"古老诅咒再次苏醒。",
			"凯梅特的预言是警告，还是毁灭的咒语？",
			"第一部的一切都只是新悲剧的序幕。"
		],
		"french": [
			"Au cœur du désert, des ruines oubliées.",
			"L'ancienne malédiction se réveille.",
			"La prophétie de Kemet : un avertissement ou un sort de ruine ?",
			"Tout du premier chapitre n'était que le prélude d'une nouvelle tragédie."
		],
		"spanish": [
			"Corazón del desierto, ruinas olvidadas.",
			"La antigua maldición despierta de nuevo.",
			"¿La profecía de Kemet es una advertencia o un hechizo de ruina?",
			"Todo lo de la Parte 1 fue el preludio de una nueva tragedia."
		],
		"vietnamese": [
			"Trung tâm sa mạc, di tích bị lãng quên.",
			"Lời nguyền cổ đại tái thức tỉnh.",
			"Lời tiên tri của Kemet: một lời cảnh báo, hay một phép thuật hủy diệt?",
			"Mọi thứ trong Phần 1 chỉ là khúc dạo đầu cho một bi kịch mới."
		],
		"thai": [
			"ใจกลางทะเลทราย, ซากปรักหักพังที่ถูกลืม.",
			"คำสาปโบราณตื่นขึ้นอีกครั้ง.",
			"คำพยากรณ์ของเคเม็ต: คำเตือนหรือมนต์แห่งหายนะ?",
			"ทุกสิ่งจากภาค 1 เป็นเพียงบทนำของโศกนาฏกรรมครั้งใหม่."
		],
		"hindi": [
			"रेगिस्तान का दिल, भूला हुआ खंडहर。",
			"प्राचीन अभिशाप फिर से जागृत हुआ。",
			"केमेट की भविष्यवाणी: एक चेतावनी, या विनाश का जादू？",
			"भाग 1 का सब कुछ एक नई त्रासदी का प्रस्तावना था。"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "고대 유적의 문이 열렸다. 시간마저 멈춘 듯한 공간이 드러났다.",
						"english": "The ancient ruin's door opened. A space where time itself seemed to stop was revealed.",
						"japanese": "古代遺跡の扉が開いた。時間さえ止まったかのような空間が現れた。",
						"chinese": "古老遗迹的门打开了。一个连时间都仿佛停止的空间显露出来。",
						"french": "La porte de l'ancienne ruine s'ouvrit. Un espace où le temps lui-même semblait s'être arrêté fut révélé.",
						"spanish": "La puerta de la antigua ruina se abrió. Un espacio donde el tiempo mismo parecía haberse detenido fue revelado.",
						"vietnamese": "Cánh cửa di tích cổ đại mở ra. Một không gian nơi thời gian dường như cũng ngừng lại đã lộ diện.",
						"thai": "ประตูของซากปรักหักพังโบราณเปิดออก เผยให้เห็นพื้นที่ที่เวลาราวกับหยุดนิ่ง.",
						"hindi": "प्राचीन खंडहर का द्वार खुला। एक ऐसा स्थान प्रकट हुआ जहाँ समय भी थम गया था。"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "으스스하네. 이런 곳에 대체 뭐가…",
						"english": "Creepy. What in the world could be in a place like this...",
						"japanese": "不気味だな。こんな場所に一体何が…",
						"chinese": "真阴森。这种地方到底有什么…",
						"french": "Étrange. Qu'est-ce qu'il pourrait bien y avoir dans un tel endroit...",
						"spanish": "Espeluznante. ¿Qué podría haber en un lugar como este...?",
						"vietnamese": "Rợn người thật. Rốt cuộc có gì ở một nơi như thế này chứ...",
						"thai": "น่าขนลุกจัง ที่แบบนี้มันจะมีอะไรกันนะ...",
						"hindi": "डरावना। ऐसी जगह में आखिर क्या हो सकता है..."
					},
					"speaker": "character_any"
				},
				{
					"speaker": "kemet",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "kemet",
					"content": {
						"korean": "기다리고 있었다. 파멸의 발소리가 여기까지 들리는구나.",
						"english": "I've been waiting. The footsteps of ruin can be heard even here.",
						"japanese": "待っていた。破滅の足音がここまで聞こえる。",
						"chinese": "我一直在等。毁灭的脚步声甚至传到这里了。",
						"french": "J'attendais. Les pas de la ruine se font entendre jusqu'ici.",
						"spanish": "He estado esperando. Los pasos de la ruina se escuchan hasta aquí.",
						"vietnamese": "Ta đã đợi. Tiếng bước chân hủy diệt có thể nghe thấy tận đây.",
						"thai": "ข้ารอคอยอยู่ เสียงฝีเท้าแห่งหายนะได้ยินมาถึงที่นี่แล้ว.",
						"hindi": "मैं इंतजार कर रहा था। विनाश के कदमों की आहट यहाँ तक सुनाई दे रही है。"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "당신이 케메트?",
						"english": "You are Kemet?",
						"japanese": "あなたがケメト？",
						"chinese": "你是凯梅特？",
						"french": "Vous êtes Kemet ?",
						"spanish": "¿Eres Kemet?",
						"vietnamese": "Ông là Kemet?",
						"thai": "ท่านคือเคเม็ต?",
						"hindi": "आप केमेट हैं？"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "사막이 기억하는 모든 것을 지켜본 자. 그리고… 너희가 불러올 파멸을 예견한 자.",
						"english": "The one who watched all that the desert remembers. And... the one who foretold the ruin you will bring.",
						"japanese": "砂漠が記憶するすべてを見守ってきた者。そして…お前たちが招く破滅を予見した者。",
						"chinese": "见证沙漠所记忆的一切之人。以及…预言你们将带来毁灭之人。",
						"french": "Celui qui a observé tout ce dont le désert se souvient. Et... celui qui a prédit la ruine que vous apporterez.",
						"spanish": "El que observó todo lo que el desierto recuerda. Y... el que predijo la ruina que traeréis.",
						"vietnamese": "Kẻ đã chứng kiến mọi điều sa mạc ghi nhớ. Và... kẻ đã tiên đoán sự hủy diệt mà các ngươi sẽ mang đến.",
						"thai": "ผู้ที่เฝ้าดูทุกสิ่งที่ทะเลทรายจดจำ และ... ผู้ที่ทำนายหายนะที่พวกเจ้าจะนำมา.",
						"hindi": "वह जिसने वह सब देखा जो रेगिस्तान को याद है। और... वह जिसने तुम्हारे द्वारा लाए जाने वाले विनाश की भविष्यवाणी की।"
					},
					"speaker": "kemet",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "'오랜 평화에 대한 혐오'… 그것이 다시 사막을 집어삼킬 것이다.",
						"english": "'A hatred for long peace'... that will once again engulf the desert.",
						"japanese": "「長き平和への憎悪」…それが再び砂漠を飲み込むだろう。",
						"chinese": "“对长久和平的憎恶”……它将再次吞噬沙漠。",
						"french": "« Une haine pour la longue paix »… cela engloutira à nouveau le désert.",
						"spanish": "«Un odio por la larga paz»... eso volverá a engullir el desierto.",
						"vietnamese": "'Sự căm ghét hòa bình lâu dài'... điều đó sẽ một lần nữa nuốt chửng sa mạc.",
						"thai": "'ความเกลียดชังต่อสันติสุขที่ยาวนาน'... สิ่งนั้นจะกลืนกินทะเลทรายอีกครั้ง.",
						"hindi": "‘लंबी शांति के प्रति घृणा’... वह एक बार फिर रेगिस्तान को निगल जाएगी。"
					},
					"speaker": "kemet"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "kemet"
				},
				{
					"type": "speech",
					"content": {
						"korean": "카디르의 붕괴는 시작에 불과했다. 그 균열 속에서 더 깊은 것이 깨어났다.",
						"english": "Kadir's collapse was just the beginning. Something deeper awakened in the rift.",
						"japanese": "カディルの崩壊は始まりに過ぎなかった。その亀裂の中で、より深いものが目覚めたのだ。",
						"chinese": "卡迪尔的崩塌只是个开始。裂缝中唤醒了更深层的存在。",
						"french": "L'effondrement de Kadir n'était qu'un début. Quelque chose de plus profond s'est éveillé dans la faille.",
						"spanish": "El colapso de Kadir fue solo el principio. Algo más profundo despertó en la grieta.",
						"vietnamese": "Sự sụp đổ của Kadir chỉ là khởi đầu. Một thứ gì đó sâu thẳm hơn đã thức tỉnh trong vết nứt.",
						"thai": "การล่มสลายของคาดีร์เป็นเพียงจุดเริ่มต้น บางสิ่งลึกล้ำกว่าได้ตื่นขึ้นในรอยแยกนั้น",
						"hindi": "कादिर का पतन बस शुरुआत थी। उस दरार में कुछ गहरा जागृत हुआ।"
					},
					"emotion": "sad",
					"speaker": "kemet"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "더 깊은 것이라고?",
						"english": "Something deeper?",
						"japanese": "より深いものだと？",
						"chinese": "更深层的存在？",
						"french": "Quelque chose de plus profond ?",
						"spanish": "¿Algo más profundo?",
						"vietnamese": "Một thứ gì đó sâu thẳm hơn sao?",
						"thai": "บางสิ่งลึกล้ำกว่านั้นหรือ?",
						"hindi": "कुछ गहरा?"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "모래 속 깊은 곳에서, 고대의 힘이 꿈틀거린다. 너희의 분노가 그들을 부추긴다.",
						"english": "Deep within the sands, ancient powers stir. Your rage fuels them.",
						"japanese": "砂の奥深くで、古の力が蠢いている。お前たちの怒りが彼らを煽るのだ。",
						"chinese": "沙海深处，古老的力量蠢蠢欲动。你们的愤怒滋养着它们。",
						"french": "Au plus profond des sables, des pouvoirs anciens s'agitent. Votre colère les attise.",
						"spanish": "En lo profundo de las arenas, poderes antiguos se agitan. Vuestra ira los alimenta.",
						"vietnamese": "Sâu thẳm trong cát, những sức mạnh cổ xưa đang lay động. Cơn thịnh nộ của các ngươi đang thúc đẩy chúng.",
						"thai": "ลึกลงไปในผืนทราย พลังโบราณกำลังเคลื่อนไหว ความโกรธแค้นของพวกเจ้าเป็นเชื้อเพลิงให้พวกมัน",
						"hindi": "रेत के गहरे अंदर, प्राचीन शक्तियाँ हिल रही हैं। तुम्हारा क्रोध उन्हें बढ़ावा देता है।"
					},
					"speaker": "kemet",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "우리가?",
						"english": "We do?",
						"japanese": "我々が？",
						"chinese": "我们？",
						"french": "Nous ?",
						"spanish": "¿Nosotros?",
						"vietnamese": "Chúng tôi sao?",
						"thai": "พวกเราหรือ?",
						"hindi": "हम?"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "평화를 향한 너희의 갈망이… 오히려 증오의 씨앗이 될 수도 있음을 경계하라.",
						"english": "Beware that your longing for peace... could become the seed of hatred.",
						"japanese": "平和への渇望が…むしろ憎悪の種となりうることを警戒せよ。",
						"chinese": "警惕你们对和平的渴望……反而可能成为憎恨的种子。",
						"french": "Méfiez-vous que votre désir de paix... puisse devenir la graine de la haine.",
						"spanish": "Tened cuidado de que vuestro anhelo de paz... pueda convertirse en la semilla del odio.",
						"vietnamese": "Hãy cẩn thận rằng khao khát hòa bình của các ngươi... có thể trở thành hạt giống của lòng thù hận.",
						"thai": "จงระวังว่าความปรารถนาในสันติสุขของพวกเจ้า... อาจกลายเป็นเมล็ดพันธุ์แห่งความเกลียดชัง",
						"hindi": "सावधान रहो कि तुम्हारी शांति की लालसा... घृणा का बीज बन सकती है।"
					},
					"emotion": "sad",
					"speaker": "kemet"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "kemet"
				},
				{
					"speaker": "kemet",
					"content": {
						"korean": "사막 곳곳에서 속삭임이 들린다. '평화는 거짓된 환상'이라고.",
						"english": "Whispers echo across the desert: 'Peace is a false illusion.'",
						"japanese": "砂漠の至る所で囁きが聞こえる。『平和は偽りの幻想だ』と。",
						"chinese": "沙漠各处回荡着低语：‘和平是虚假的幻象。’",
						"french": "Des murmures résonnent à travers le désert : 'La paix est une fausse illusion'.",
						"spanish": "Susurros resuenan por todo el desierto: 'La paz es una falsa ilusión'.",
						"vietnamese": "Những lời thì thầm vang vọng khắp sa mạc: 'Hòa bình là một ảo ảnh giả dối'.",
						"thai": "เสียงกระซิบก้องไปทั่วทะเลทราย: 'สันติภาพเป็นภาพลวงตาอันจอมปลอม'",
						"hindi": "रेगिस्तान भर में फुसफुसाहटें गूंज रही हैं: 'शांति एक झूठा भ्रम है'।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "대체 누가…",
						"english": "Who...?",
						"japanese": "一体誰が…",
						"chinese": "到底是谁……",
						"french": "Qui donc... ?",
						"spanish": "¿Quién...?",
						"vietnamese": "Rốt cuộc là ai...?",
						"thai": "ใครกันแน่...",
						"hindi": "आखिर कौन...?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kemet",
					"content": {
						"korean": "너희가 싸워 이긴 그 모든 것들… 그들은 모두 증오의 꼭두각시에 불과했다.",
						"english": "All those you fought and defeated... they were merely puppets of hatred.",
						"japanese": "お前たちが戦い打ち破ったもの全て… 彼らは皆、憎悪の傀儡に過ぎなかった。",
						"chinese": "你们所战胜的一切……都不过是仇恨的傀儡罢了。",
						"french": "Tout ce que vous avez combattu et vaincu... n'était que des marionnettes de la haine.",
						"spanish": "Todo aquello que luchasteis y vencisteis... no eran más que marionetas del odio.",
						"vietnamese": "Tất cả những thứ các ngươi đã chiến đấu và đánh bại... chúng chỉ là những con rối của lòng thù hận.",
						"thai": "ทุกสิ่งที่พวกเจ้าต่อสู้และเอาชนะมาได้... ล้วนเป็นเพียงหุ่นเชิดแห่งความเกลียดชัง",
						"hindi": "वे सभी जिन्हें तुमने लड़ा और हराया... वे केवल घृणा की कठपुतलियाँ थे।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "kemet",
					"content": {
						"korean": "진정한 그림자는 아직 드러나지 않았다. 너희의 배신자가 그 문을 열 것이다.",
						"english": "The true shadow has yet to be revealed. Your betrayer will open that door.",
						"japanese": "真の影はまだ姿を現していない。お前たちの裏切り者がその扉を開くだろう。",
						"chinese": "真正的阴影尚未显现。你们的叛徒将打开那扇门。",
						"french": "La véritable ombre n'a pas encore été révélée. Votre traître ouvrira cette porte.",
						"spanish": "La verdadera sombra aún no se ha revelado. Vuestro traidor abrirá esa puerta.",
						"vietnamese": "Bóng tối thực sự vẫn chưa lộ diện. Kẻ phản bội của các ngươi sẽ mở cánh cửa đó.",
						"thai": "เงาที่แท้จริงยังไม่ปรากฏ ผู้ทรยศของพวกเจ้าจะเป็นคนเปิดประตูนั้น",
						"hindi": "असली छाया अभी तक प्रकट नहीं हुई है। तुम्हारा धोखेबाज वह दरवाजा खोलेगा।"
					},
					"emotion": "angry",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "kemet",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "더 이상 물러설 곳은 없다. 너희는 이미 거대한 저주의 일부가 되었다.",
						"english": "There is no turning back. You have already become part of a grand curse.",
						"japanese": "もう後戻りはできない。お前たちは既に、巨大な呪いの一部となったのだ。",
						"chinese": "已无退路。你们已然成为了巨大诅咒的一部分。",
						"french": "Il n'y a plus de retour en arrière. Vous faites déjà partie d'une grande malédiction.",
						"spanish": "No hay vuelta atrás. Ya os habéis convertido en parte de una gran maldición.",
						"vietnamese": "Không còn đường lui. Các ngươi đã trở thành một phần của lời nguyền vĩ đại.",
						"thai": "ไม่มีทางถอยอีกแล้ว พวกเจ้าได้กลายเป็นส่วนหนึ่งของคำสาปอันยิ่งใหญ่ไปแล้ว",
						"hindi": "पीछे हटने का कोई रास्ता नहीं है। तुम पहले से ही एक महान अभिशाप का हिस्सा बन चुके हो।"
					},
					"emotion": "angry",
					"speaker": "kemet",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "케메트, 당신도 저주에 물든 거야?",
						"english": "Kemet, have you been tainted by the curse too?",
						"japanese": "ケメト、お前も呪いに染まったのか？",
						"chinese": "凯麦特，你也受到了诅咒的感染吗？",
						"french": "Kemet, as-tu aussi été souillé par la malédiction ?",
						"spanish": "Kemet, ¿tú también has sido infectado por la maldición?",
						"vietnamese": "Kemet, ngươi cũng bị lời nguyền vấy bẩn sao?",
						"thai": "เคเมท เจ้าก็โดนคำสาปแปดเปื้อนแล้วหรือ?",
						"hindi": "केमेट, क्या तुम भी अभिशाप से दूषित हो गए हो?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…나 또한 피할 수 없는 운명. 그러나 너희는 다르다. 너희는 선택할 수 있었다.",
						"english": "...My fate, unavoidable. But you are different. You could choose.",
						"japanese": "…私にも避けられぬ運命。だが、お前たちは違う。お前たちには選択肢があった。",
						"chinese": "……我也无法避免的命运。但你们不同。你们本可以选择。",
						"french": "...Mon destin, inévitable. Mais vous êtes différents. Vous auriez pu choisir.",
						"spanish": "...Mi destino, inevitable. Pero vosotros sois diferentes. Pudisteis elegir.",
						"vietnamese": "...Số phận của ta, không thể tránh khỏi. Nhưng các ngươi thì khác. Các ngươi đã có thể lựa chọn.",
						"thai": "...ชะตาของข้า มิอาจเลี่ยงได้ แต่พวกเจ้าต่างออกไป พวกเจ้าเลือกได้",
						"hindi": "मेरा भाग्य, अपरिहार्य। परन्तु तुम अलग हो। तुम चुन सकते थे।"
					},
					"speaker": "kemet"
				},
				{
					"content": {
						"korean": "카디르가 모든 것을 짊어진 채 사라진 것은… 새로운 존재를 위한 희생이었다.",
						"english": "Kadir's disappearance, bearing all... was a sacrifice for a new being.",
						"japanese": "カディルがすべてを背負って消えたのは…新たな存在のための犠牲だった。",
						"chinese": "卡迪尔承担一切而消失……是为了一个新存在而进行的牺牲。",
						"french": "La disparition de Kadir, portant tout le fardeau... était un sacrifice pour un nouvel être.",
						"spanish": "La desaparición de Kadir, cargando con todo... fue un sacrificio por un nuevo ser.",
						"vietnamese": "Sự biến mất của Kadir, gánh chịu tất cả... là một sự hy sinh cho một sinh vật mới.",
						"thai": "การหายไปของคาดีร์ ผู้แบกรับทุกสิ่ง... คือการเสียสละเพื่อสิ่งมีชีวิตใหม่",
						"hindi": "कादिर का सब कुछ सहकर गायब होना... एक नए अस्तित्व के लिए बलिदान था।"
					},
					"emotion": "angry",
					"speaker": "kemet",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "카디르의 희생? 무슨 말이야?",
						"english": "Kadir's sacrifice? What do you mean?",
						"japanese": "カディルの犠牲？どういうことだ？",
						"chinese": "卡迪尔的牺牲？什么意思？",
						"french": "Le sacrifice de Kadir ? Que voulez-vous dire ?",
						"spanish": "¿El sacrificio de Kadir? ¿Qué quieres decir?",
						"vietnamese": "Sự hy sinh của Kadir? Ý ngươi là sao?",
						"thai": "การเสียสละของคาดีร์หรือ? เจ้าหมายความว่าอย่างไร?",
						"hindi": "कादिर का बलिदान? तुम्हारा क्या मतलब है?"
					},
					"type": "speech"
				},
				{
					"speaker": "kemet",
					"emotion": "sad",
					"content": {
						"korean": "곧 알게 될 것이다. 그들이 기다리는 최후의 제물을.",
						"english": "You will soon know. The final offering they await.",
						"japanese": "すぐにわかるだろう。彼らが待つ、最後の供物を。",
						"chinese": "你们很快就会知道。他们等待的，是最后的祭品。",
						"french": "Vous le saurez bientôt. La dernière offrande qu'ils attendent.",
						"spanish": "Pronto lo sabréis. La ofrenda final que esperan.",
						"vietnamese": "Các ngươi sẽ sớm biết thôi. Vật tế cuối cùng mà chúng đang chờ đợi.",
						"thai": "เจ้าจะได้รู้ในไม่ช้า เครื่องบูชายัญสุดท้ายที่พวกมันรอคอย",
						"hindi": "तुम्हें जल्द ही पता चल जाएगा। अंतिम भेंट जिसका वे इंतजार कर रहे हैं।"
					},
					"type": "speech"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "무릎 꿇어라. 너희의 평화는 환상이다!",
						"english": "Kneel. Your peace is an illusion!",
						"japanese": "跪け。お前たちの平和は幻想だ！",
						"chinese": "跪下吧。你们的和平只是幻象！",
						"french": "À genoux. Votre paix n'est qu'une illusion !",
						"spanish": "¡Arrodíllense! ¡Su paz es una ilusión!",
						"vietnamese": "Hãy quỳ xuống. Hòa bình của các ngươi chỉ là ảo ảnh!",
						"thai": "คุกเข่าซะ ความสงบสุขของพวกเจ้าคือภาพลวงตา!",
						"hindi": "घुटने टेको। तुम्हारी शांति एक भ्रम है!"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "크윽… 아직 끝나지 않았어!",
						"english": "Ugh... It's not over yet!",
						"japanese": "くっ… まだ終わってない！",
						"chinese": "唔……还没结束！",
						"french": "Argh... Ce n'est pas encore fini !",
						"spanish": "Argh... ¡Aún no ha terminado!",
						"vietnamese": "Khụ... Vẫn chưa kết thúc!",
						"thai": "อึก... ยังไม่จบ!",
						"hindi": "उफ़... अभी खत्म नहीं हुआ!"
					},
					"type": "speech"
				},
				{
					"speaker": "kemet",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						3
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "포기하지 마라. 희망은… 아직 꺼지지 않았다.",
						"english": "Don't give up. Hope... has not yet faded.",
						"japanese": "諦めるな。希望は… まだ消えていない。",
						"chinese": "不要放弃。希望……尚未熄灭。",
						"french": "N'abandonnez pas. L'espoir... ne s'est pas encore éteint.",
						"spanish": "No te rindas. La esperanza... aún no se ha apagado.",
						"vietnamese": "Đừng bỏ cuộc. Hy vọng... vẫn chưa tắt.",
						"thai": "อย่ายอมแพ้ ความหวัง...ยังไม่ดับไป",
						"hindi": "हार मत मानो। आशा... अभी बुझी नहीं है।"
					},
					"emotion": "base",
					"speaker": "kemet",
					"type": "speech"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "크아악… 이럴 리가… 나의 주인은… 곧… 모든 것을 삼킬 것이다…",
						"english": "Ugh... This can't be... My master... will soon... devour everything...",
						"japanese": "くあああ… まさか… 我が主は… すぐに… 全てを飲み込むだろう…",
						"chinese": "呜啊啊……这不可能……我的主人……很快……就会吞噬一切……",
						"french": "Argh... Impossible... Mon maître... va bientôt... tout dévorer...",
						"spanish": "Argh... No puede ser... Mi maestro... pronto... lo devorará todo...",
						"vietnamese": "Khốn nạn... Không thể nào... Chủ nhân của ta... sẽ sớm... nuốt chửng mọi thứ...",
						"thai": "อ๊ากกก... ไม่จริงน่า... นายท่านของข้า... อีกไม่นาน... จะกลืนกินทุกสิ่ง...",
						"hindi": "उफ़... यह नहीं हो सकता... मेरा स्वामी... जल्द ही... सब कुछ निगल जाएगा..."
					},
					"emotion": "sad",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "주인이? 아직 끝이 아니었어?",
						"english": "Master? It's not over yet?",
						"japanese": "主が？ まだ終わりじゃないの？",
						"chinese": "主人？还没结束吗？",
						"french": "Le maître ? Ce n'est pas encore fini ?",
						"spanish": "¿El maestro? ¿Aún no ha terminado?",
						"vietnamese": "Chủ nhân? Vẫn chưa kết thúc sao?",
						"thai": "นายท่าน? ยังไม่จบอีกเหรอ?",
						"hindi": "स्वामी? क्या अभी खत्म नहीं हुआ?"
					},
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"spot": [
						3,
						3
					],
					"type": "direction",
					"action": "enter",
					"speaker": "kemet"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…놈의 주인이 움직이기 시작했다. 더 큰 재앙이 다가온다.",
						"english": "...Its master has begun to stir. A greater catastrophe approaches.",
						"japanese": "…奴の主が動き出した。より大きな災厄が迫る。",
						"chinese": "……它的主人开始行动了。更大的灾难即将来临。",
						"french": "...Son maître a commencé à bouger. Une plus grande catastrophe approche.",
						"spanish": "...Su maestro ha empezado a moverse. Una catástrofe mayor se acerca.",
						"vietnamese": "...Chủ nhân của nó đã bắt đầu hành động. Một thảm họa lớn hơn đang đến gần.",
						"thai": "...นายท่านของมันเริ่มเคลื่อนไหวแล้ว หายนะที่ใหญ่กว่ากำลังคืบคลานเข้ามา",
						"hindi": "...उसके स्वामी ने हिलना शुरू कर दिया है। एक बड़ी आपदा आ रही है।"
					},
					"speaker": "kemet"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "도대체 언제까지 싸워야 해…",
						"english": "Just how long do we have to keep fighting...",
						"japanese": "一体いつまで戦えばいいんだ…",
						"chinese": "到底要战斗到什么时候……",
						"french": "Jusqu'à quand devrons-nous nous battre...",
						"spanish": "¿Hasta cuándo tendremos que seguir luchando...?",
						"vietnamese": "Rốt cuộc phải chiến đấu đến bao giờ...",
						"thai": "เราต้องสู้ไปถึงเมื่อไหร่กันแน่...",
						"hindi": "आखिर कब तक लड़ना होगा..."
					}
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "사막의 평화는 여전히 멀었다. 거대한 존재의 그림자가 세계를 덮기 시작했다.",
						"english": "Peace in the desert is still far off. The shadow of a colossal entity has begun to shroud the world.",
						"japanese": "砂漠の平和は依然として遠い。巨大な存在の影が世界を覆い始めた。",
						"chinese": "沙漠的和平依然遥远。巨大存在的阴影开始笼罩世界。",
						"french": "La paix dans le désert est encore lointaine. L'ombre d'une entité colossale a commencé à recouvrir le monde.",
						"spanish": "La paz en el desierto aún está lejos. La sombra de una entidad colosal ha comenzado a cubrir el mundo.",
						"vietnamese": "Hòa bình ở sa mạc vẫn còn xa vời. Bóng tối của một thực thể khổng lồ đã bắt đầu bao trùm thế giới.",
						"thai": "สันติสุขในทะเลทรายยังคงห่างไกล เงาของสิ่งมีชีวิตขนาดมหึมาได้เริ่มปกคลุมโลกแล้ว",
						"hindi": "रेगिस्तान में शांति अभी भी दूर है। एक विशालकाय सत्ता की छाया ने दुनिया को ढकना शुरू कर दिया है।"
					},
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "거대한 힘이 공간을 뒤틀었다. 모래와 그림자가 뒤섞이며 형체를 이루었다.",
						"english": "A colossal power twisted space. Sand and shadows intertwined, forming a shape.",
						"japanese": "巨大な力が空間を歪めた。砂と影が絡み合い、形を成した。",
						"chinese": "巨大的力量扭曲了空间。沙土与阴影交织，形成了形体。",
						"french": "Une puissance colossale tordit l'espace. Le sable et les ombres s'entremêlèrent, prenant forme.",
						"spanish": "Un poder colosal distorsionó el espacio. Arena y sombras se entrelazaron, formando una figura.",
						"vietnamese": "Một sức mạnh khổng lồ đã bóp méo không gian. Cát và bóng tối đan xen, tạo thành hình dạng.",
						"thai": "พลังมหาศาลบิดเบือนห้วงอวกาศ ทรายและเงาผสมผสานกันจนก่อร่าง",
						"hindi": "एक विशाल शक्ति ने अंतरिक्ष को मोड़ दिया। रेत और परछाइयाँ आपस में गुँथ गईं, एक आकार लेती हुई।"
					}
				},
				{
					"content": {
						"korean": "…어리석은 자들. 평화를 꿈꾸는 너희의 어리석음이… 나를 깨웠다.",
						"english": "...Fools. Your foolishness, dreaming of peace... awakened me.",
						"japanese": "…愚か者どもめ。平和を夢見るお前たちの愚かさが…私を目覚めさせた。",
						"chinese": "……愚蠢的人们。你们梦想和平的愚蠢……唤醒了我。",
						"french": "...Fous. Votre folie, de rêver de paix... m'a réveillé.",
						"spanish": "...Necios. Vuestra necedad, soñando con la paz... me despertó.",
						"vietnamese": "...Những kẻ ngu xuẩn. Sự ngu ngốc của các ngươi, khi mơ mộng về hòa bình... đã đánh thức ta.",
						"thai": "...พวกโง่เขลา ความโง่เขลาของพวกเจ้าที่ฝันถึงสันติภาพ... ได้ปลุกข้าให้ตื่นขึ้น",
						"hindi": "मूर्खों। शांति का सपना देखने की तुम्हारी मूर्खता... ने मुझे जगाया।"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "네가 바로 그 저주인가!",
						"english": "Are you that curse?!",
						"japanese": "お前が、あの呪いなのか！",
						"chinese": "你就是那个诅咒吗？！",
						"french": "Tu es donc cette malédiction ?!",
						"spanish": "¿Eres tú esa maldición?!",
						"vietnamese": "Ngươi chính là lời nguyền đó sao?!",
						"thai": "เจ้าคือคำสาปนั่นเองหรือ!",
						"hindi": "क्या तुम वही अभिशाप हो?!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "나는 평화가 혐오하는 모든 것. 너희의 증오와 절망이 나의 피가 될 것이다.",
						"english": "I am everything peace abhors. Your hatred and despair shall be my blood.",
						"japanese": "私は平和が忌み嫌うすべて。お前たちの憎悪と絶望が、私の血となるだろう。",
						"chinese": "我是和平所厌恶的一切。你们的憎恨和绝望将成为我的血液。",
						"french": "Je suis tout ce que la paix abhorre. Votre haine et votre désespoir seront mon sang.",
						"spanish": "Soy todo lo que la paz aborrece. Vuestro odio y desesperación serán mi sangre.",
						"vietnamese": "Ta là tất cả những gì hòa bình ghét bỏ. Lòng căm thù và sự tuyệt vọng của các ngươi sẽ là máu của ta.",
						"thai": "ข้าคือทุกสิ่งที่สันติภาพชิงชัง ความเกลียดชังและความสิ้นหวังของพวกเจ้าจะกลายเป็นเลือดของข้า",
						"hindi": "मैं वह सब कुछ हूँ जिससे शांति घृणा करती है। तुम्हारी घृणा और निराशा मेरा रक्त बनेंगी।"
					}
				},
				{
					"speaker": "kemet",
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						3
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "(숨을 헐떡이며) 놈은… 너희의 분노를 양식 삼는다!",
						"english": "(Gasping) It... feeds on your rage!",
						"japanese": "（息も絶え絶えに）やつは…お前たちの怒りを糧とする！",
						"chinese": "（喘息着）它……以你们的愤怒为食！",
						"french": "(Haletant) Il... se nourrit de votre rage !",
						"spanish": "(Jadeando) ¡Él... se alimenta de vuestra ira!",
						"vietnamese": "(Thở hổn hển) Nó... ăn sự phẫn nộ của các ngươi!",
						"thai": "(หอบ) มัน... กินความโกรธแค้นของพวกเจ้า!",
						"hindi": "(हाँफते हुए) वह... तुम्हारे क्रोध पर पल रहा है!"
					},
					"emotion": "sad",
					"speaker": "kemet",
					"type": "speech"
				}
			]
		}
	]
} as const;
