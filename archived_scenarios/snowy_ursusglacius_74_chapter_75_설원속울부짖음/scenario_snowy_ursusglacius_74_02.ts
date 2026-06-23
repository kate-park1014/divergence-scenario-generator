export const scenario_snowy_ursusglacius_74_02 = {
	"scenario_id": "snowy_ursusglacius_74_02",
	"order": 2,
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
					"speaker": "narrator",
					"content": {
						"korean": "깊은 얼음 동굴. 기묘한 표식과 문양이 빛나고 있었다.",
						"english": "Deep within the ice cave. Strange symbols and patterns glowed.",
						"japanese": "深い氷の洞窟。奇妙な紋様と模様が光り輝いていた。",
						"chinese": "冰洞深处。奇异的符号和图案闪耀着光芒。",
						"french": "Au plus profond de la caverne de glace. Des symboles et motifs étranges brillaient.",
						"spanish": "En lo profundo de la cueva de hielo. Extraños símbolos y patrones brillaban.",
						"vietnamese": "Sâu trong hang động băng. Những biểu tượng và hoa văn kỳ lạ phát sáng.",
						"thai": "ลึกเข้าไปในถ้ำน้ำแข็ง สัญลักษณ์และลวดลายแปลกประหลาดส่องประกาย",
						"hindi": "बर्फ की गुफा के गहरे भीतर। अजीब प्रतीक और पैटर्न चमक रहे थे।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"action": "enter",
					"type": "direction",
					"speaker": "ivar",
					"spot": [
						4,
						3
					],
					"duration_ms": 500
				},
				{
					"speaker": "ivar",
					"emotion": "base",
					"content": {
						"korean": "여기까지 왔나. 어리석은 자들.",
						"english": "You've come this far. Fools.",
						"japanese": "ここまで来たか。愚か者どもめ。",
						"chinese": "竟然来到这里了。愚蠢的家伙们。",
						"french": "Vous êtes venus jusqu'ici. Imbéciles.",
						"spanish": "¿Llegaron hasta aquí? Tontos.",
						"vietnamese": "Các ngươi đã đến đây. Lũ ngốc.",
						"thai": "พวกแกมาถึงนี่แล้วหรือไงนะ พวกโง่เอ๊ย",
						"hindi": "तुम यहाँ तक आ गए। मूर्खों।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "누구냐.",
						"english": "Who are you?",
						"japanese": "誰だ。",
						"chinese": "你是谁？",
						"french": "Qui es-tu ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Ngươi là ai?",
						"thai": "เจ้าเป็นใคร",
						"hindi": "तुम कौन हो?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "이바르. 강함의 끝을 좇는 자. 너희가 밟은 이곳은 맹세의 땅이다.",
						"english": "Ivar. The one who chases the limits of strength. This place you tread is the land of vows.",
						"japanese": "イヴァル。強さの極限を追う者。お前たちが踏み入れたこの地は、誓いの地だ。",
						"chinese": "伊瓦尔。追寻力量极限之人。你们所踏足之处，乃是誓约之地。",
						"french": "Ivar. Celui qui poursuit les limites de la force. Ce lieu où vous marchez est la terre des serments.",
						"spanish": "Ivar. El que persigue los límites de la fuerza. Este lugar que pisáis es la tierra de los juramentos.",
						"vietnamese": "Ivar. Kẻ theo đuổi giới hạn của sức mạnh. Nơi các ngươi đang bước đi là vùng đất của lời thề.",
						"thai": "ไอบาร์ ผู้ที่ไล่ตามขีดจำกัดของความแข็งแกร่ง ที่ที่พวกเจ้าเหยียบอยู่นี้คือดินแดนแห่งคำสาบาน",
						"hindi": "इवार। वह जो शक्ति की सीमाओं का पीछा करता है। यह जगह जहाँ तुम कदम रखते हो, प्रतिज्ञाओं की भूमि है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "ivar",
					"emotion": "base",
					"content": {
						"korean": "산 자와 죽은 자를 묶는 깨지지 않는 맹세가 서린 곳.",
						"english": "A place imbued with an unbreakable vow that binds the living and the dead.",
						"japanese": "生者と死者を繋ぐ、決して破られぬ誓いが宿る場所。",
						"chinese": "一个被束缚生者与死者的不破誓言所浸染之地。",
						"french": "Un lieu imprégné d'un serment incassable qui lie les vivants et les morts.",
						"spanish": "Un lugar imbuido de un juramento inquebrantable que une a vivos y muertos.",
						"vietnamese": "Một nơi thấm đẫm lời thề không thể phá vỡ, ràng buộc người sống và người chết.",
						"thai": "สถานที่ที่เต็มไปด้วยคำสาบานที่ไม่แตกหัก ซึ่งผูกมัดทั้งคนเป็นและคนตาย",
						"hindi": "एक ऐसी जगह जो जीवित और मृत को बांधने वाली अटूट प्रतिज्ञा से ओतप्रोत है।"
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "ivar"
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "이 얼음… 살아있는 듯이 확장되고 있다.",
						"english": "This ice... it's expanding as if alive.",
						"japanese": "この氷…まるで生きているかのように広がっていく。",
						"chinese": "这冰……它像活物一样在扩张。",
						"french": "Cette glace... elle s'étend comme si elle était vivante.",
						"spanish": "Este hielo... se está expandiendo como si estuviera vivo.",
						"vietnamese": "Lớp băng này... nó đang mở rộng như thể có sự sống.",
						"thai": "น้ำแข็งนี่... มันกำลังขยายตัวราวกับมีชีวิต",
						"hindi": "यह बर्फ... यह जीवित की तरह फैल रही है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이게 대체 무슨 현상이지?",
						"english": "What is this phenomenon?",
						"japanese": "これはいったい何の現象だ？",
						"chinese": "这到底是什么现象？",
						"french": "Mais quel est ce phénomène ?",
						"spanish": "¿Qué es este fenómeno?",
						"vietnamese": "Hiện tượng quái quỷ gì thế này?",
						"thai": "นี่มันปรากฏการณ์อะไรกัน?",
						"hindi": "यह कौन-सी घटना है?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"content": {
						"korean": "고대 부족의 맹세가 뒤틀린 결과다. 수호자는 노예가 되고.",
						"english": "It's the twisted outcome of an ancient tribe's oath. The guardian becomes a slave.",
						"japanese": "古代部族の誓いが歪められた結果だ。守護者は奴隷と化す。",
						"chinese": "这是古代部落誓言扭曲的结果。守护者沦为奴隶。",
						"french": "C'est le résultat tordu du serment d'une ancienne tribu. Le gardien devient un esclave.",
						"spanish": "Es el resultado retorcido del juramento de una tribu antigua. El guardián se convierte en esclavo.",
						"vietnamese": "Là kết quả của lời thề bộ tộc cổ xưa bị bóp méo. Kẻ bảo hộ trở thành nô lệ.",
						"thai": "นี่คือผลลัพธ์จากคำสาบานของชนเผ่าโบราณที่บิดเบือนไป ผู้พิทักษ์กลายเป็นทาส.",
						"hindi": "यह प्राचीन जनजाति की शपथ का विकृत परिणाम है। संरक्षक दास बन गया।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "ivar",
					"emotion": "angry",
					"content": {
						"korean": "이 모든 것을 조종하는… 시스템이 있다.",
						"english": "There's a system... controlling all of this.",
						"japanese": "これらすべてを操る…システムが存在する。",
						"chinese": "有一个系统……操纵着这一切。",
						"french": "Il y a un système... qui contrôle tout cela.",
						"spanish": "Hay un sistema... que controla todo esto.",
						"vietnamese": "Có một hệ thống... đang điều khiển tất cả chuyện này.",
						"thai": "มีระบบ... ที่ควบคุมทุกสิ่งนี้.",
						"hindi": "एक व्यवस्था है... जो यह सब नियंत्रित करती है।"
					},
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "ivar"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "고대 석판에 새겨진 그 문구를 읽었나?",
						"english": "Did you read the inscription on the ancient tablet?",
						"japanese": "古代の石板に刻まれたあの文言を読んだか？",
						"chinese": "你读过那块古老石板上的铭文吗？",
						"french": "As-tu lu l'inscription gravée sur l'ancienne tablette ?",
						"spanish": "¿Leíste la inscripción grabada en la antigua tablilla?",
						"vietnamese": "Ngươi đã đọc dòng chữ khắc trên phiến đá cổ đại đó chưa?",
						"thai": "เจ้าอ่านข้อความที่สลักบนศิลาจารึกโบราณนั่นแล้วหรือยัง?",
						"hindi": "क्या तुमने प्राचीन शिला पर खुदे हुए उस शिलालेख को पढ़ा?"
					},
					"type": "speech",
					"speaker": "ivar"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…산 자와 죽은 자를 묶는 맹세?",
						"english": "...An oath that binds the living and the dead?",
						"japanese": "…生者と死者を繋ぐ誓いか？",
						"chinese": "……一个束缚生者与死者的誓言？",
						"french": "...Un serment qui lie les vivants et les morts ?",
						"spanish": "...¿Un juramento que une a vivos y muertos?",
						"vietnamese": "...Một lời thề ràng buộc người sống và kẻ chết?",
						"thai": "...คำสาบานที่ผูกมัดคนเป็นและคนตาย?",
						"hindi": "...जीवितों और मृतकों को बांधने वाली शपथ?"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "맞다. 그 맹세가 부족을 멸망시키고… 얼음 수호자를 탄생시켰지.",
						"english": "Correct. That oath destroyed the tribe... and gave birth to the Ice Guardian.",
						"japanese": "その通りだ。その誓いが部族を滅ぼし…氷の守護者を生み出した。",
						"chinese": "没错。那个誓言毁灭了部落……并诞生了冰之守护者。",
						"french": "Exactement. Ce serment a détruit la tribu... et a donné naissance au Gardien de Glace.",
						"spanish": "Correcto. Ese juramento destruyó a la tribu... y dio origen al Guardián de Hielo.",
						"vietnamese": "Đúng vậy. Lời thề đó đã hủy diệt bộ tộc... và tạo ra Kẻ Bảo Hộ Băng Giá.",
						"thai": "ถูกต้อง. คำสาบานนั้นทำลายชนเผ่า... และให้กำเนิดผู้พิทักษ์น้ำแข็ง.",
						"hindi": "सही है। उस शपथ ने जनजाति को नष्ट कर दिया... और बर्फीले संरक्षक को जन्म दिया।"
					},
					"type": "speech",
					"speaker": "ivar"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "누군가… 아니, 어떤 시스템이 그 맹세를 왜곡했다.",
						"english": "Someone... or rather, some system, twisted that oath.",
						"japanese": "誰かが…いや、あるシステムがその誓いを歪めたのだ。",
						"chinese": "某个人……不，是某个系统扭曲了那个誓言。",
						"french": "Quelqu'un... ou plutôt, un système, a déformé ce serment.",
						"spanish": "Alguien... o mejor dicho, un sistema, distorsionó ese juramento.",
						"vietnamese": "Ai đó... không, một hệ thống nào đó đã bóp méo lời thề ấy.",
						"thai": "มีบางคน... ไม่สิ ระบบบางอย่างได้บิดเบือนคำสาบานนั้น.",
						"hindi": "किसी ने... नहीं, किसी व्यवस्था ने उस शपथ को विकृत कर दिया।"
					},
					"speaker": "ivar"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "너희가 이곳에 머무는 동안… 시간은 계속 얼어붙을 것이다.",
						"english": "As long as you remain here... time will continue to freeze.",
						"japanese": "お前たちがここに留まる限り…時間は凍りつき続けるだろう。",
						"chinese": "只要你们留在这里……时间就会持续冻结。",
						"french": "Tant que vous resterez ici... le temps continuera de se figer.",
						"spanish": "Mientras permanezcáis aquí... el tiempo seguirá congelándose.",
						"vietnamese": "Chừng nào các ngươi còn ở lại đây... thời gian sẽ tiếp tục đóng băng.",
						"thai": "ตราบใดที่พวกเจ้ายังคงอยู่ที่นี่... เวลาก็จะยังคงหยุดนิ่ง.",
						"hindi": "जब तक तुम यहाँ रहोगे... समय जमता रहेगा।"
					},
					"speaker": "ivar"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"speaker": "ivar",
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"content": {
						"korean": "나 또한 강함의 끝을 좇는다. 하지만 이것은… 다르다.",
						"english": "I too pursue the limits of strength. But this... is different.",
						"japanese": "私も強さの果てを追い求める。だが、これは…違う。",
						"chinese": "我也追逐力量的极致。但这个……不同。",
						"french": "Moi aussi, je poursuis les limites de la force. Mais ceci... est différent.",
						"spanish": "Yo también persigo los límites de la fuerza. Pero esto... es diferente.",
						"vietnamese": "Ta cũng theo đuổi giới hạn của sức mạnh. Nhưng điều này... lại khác.",
						"thai": "ข้าก็ไล่ตามขีดสุดของพละกำลังเช่นกัน แต่สิ่งนี้... มันต่างออกไป.",
						"hindi": "मैं भी शक्ति की पराकाष्ठा का पीछा करता हूँ। लेकिन यह... अलग है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "무엇이 다르다는 거지?",
						"english": "What's different?",
						"japanese": "何が違うと言うのだ？",
						"chinese": "有什么不同？",
						"french": "Qu'est-ce qui est différent ?",
						"spanish": "¿Qué es lo diferente?",
						"vietnamese": "Điều gì khác biệt chứ?",
						"thai": "อะไรที่ต่างออกไปล่ะ?",
						"hindi": "क्या अलग है?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "ivar",
					"emotion": "sad",
					"content": {
						"korean": "이 얼음은… 끝없는 굶주림 같다. 모든 것을 집어삼키는.",
						"english": "This ice... it's like an endless hunger, devouring all.",
						"japanese": "この氷は…終わりのない飢えのようだ。全てを飲み込む。",
						"chinese": "这冰冷……如同无尽的饥饿，吞噬一切。",
						"french": "Cette glace... c'est comme une faim sans fin, dévorant tout.",
						"spanish": "Este hielo... es como un hambre interminable, que lo devora todo.",
						"vietnamese": "Tảng băng này... như một cơn đói khát vô tận, nuốt chửng mọi thứ.",
						"thai": "น้ำแข็งนี้... เหมือนความหิวโหยไม่สิ้นสุด กลืนกินทุกสิ่ง",
						"hindi": "यह बर्फ... एक अंतहीन भूख की तरह है, सब कुछ निगलने वाली।"
					},
					"type": "speech"
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"content": {
						"korean": "돌아갈 길은 없다. 이미 맹세의 심장부에 들어섰으니.",
						"english": "No way back. We've already entered the heart of the Oath.",
						"japanese": "戻る道はない。すでに誓いの心臓部に足を踏み入れたのだから。",
						"chinese": "没有回头路了。我们已深入誓言的核心。",
						"french": "Plus de retour en arrière. Nous sommes déjà entrés au cœur du Serment.",
						"spanish": "No hay vuelta atrás. Ya hemos entrado en el corazón del Juramento.",
						"vietnamese": "Không còn đường quay lại. Chúng ta đã tiến vào trung tâm của Lời Thề.",
						"thai": "ไม่มีทางกลับ เราได้เข้ามาสู่ใจกลางของคำสาบานแล้ว",
						"hindi": "वापसी का कोई रास्ता नहीं। हम पहले ही शपथ के हृदय में प्रवेश कर चुके हैं।"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "동굴은 더욱 빠르게 얼어붙었다. 마치 탐험대를 가두려는 듯.",
						"english": "The cave froze even faster, as if to trap the expedition party.",
						"japanese": "洞窟はさらに急速に凍りつき、まるで探検隊を閉じ込めるかのようだ。",
						"chinese": "洞穴冻结得更快了，仿佛要困住探险队。",
						"french": "La grotte gela encore plus vite, comme pour piéger le groupe d'exploration.",
						"spanish": "La cueva se congeló aún más rápido, como para atrapar a la expedición.",
						"vietnamese": "Hang động đóng băng nhanh hơn nữa, như thể muốn bẫy đoàn thám hiểm.",
						"thai": "ถ้ำแข็งตัวเร็วขึ้น ราวกับจะขังคณะสำรวจไว้",
						"hindi": "गुफा और तेज़ी से जम गई, मानो अभियान दल को फंसाने के लिए।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "거대한 얼음 수호자의 일격에 탐험대는 쓰러졌다.",
						"english": "The expedition fell to the colossal ice guardian's blow.",
						"japanese": "巨大な氷の守護者の一撃により、探検隊は倒れた。",
						"chinese": "探险队在巨大寒冰守护者的一击下倒下。",
						"french": "L'expédition succomba au coup du colossal gardien de glace.",
						"spanish": "La expedición cayó ante el golpe del colosal guardián de hielo.",
						"vietnamese": "Đội thám hiểm gục ngã trước đòn tấn công của người bảo hộ băng khổng lồ.",
						"thai": "คณะสำรวจล้มลงจากการโจมตีของผู้พิทักษ์น้ำแข็งมหึมา",
						"hindi": "विशाल हिम रक्षक के एक ही वार से अभियान दल गिर पड़ा।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "맹세는… 너희를 집어삼킬 것이다.",
						"english": "The oath... will consume you.",
						"japanese": "誓いは…お前たちを飲み込むだろう。",
						"chinese": "誓言…将吞噬你们。",
						"french": "Le serment... vous consumera.",
						"spanish": "El juramento... os consumirá.",
						"vietnamese": "Lời thề... sẽ nuốt chửng các ngươi.",
						"thai": "คำสาบาน... จะกลืนกินพวกเจ้า",
						"hindi": "शपथ... तुम्हें निगल जाएगी।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…아직 끝나지 않았어. 우리는… 포기하지 않아!",
						"english": "...It's not over yet. We... won't give up!",
						"japanese": "…まだ終わっていない。私たちは…諦めない！",
						"chinese": "...还没结束。我们…不会放弃！",
						"french": "...Ce n'est pas encore fini. Nous... n'abandonnerons pas !",
						"spanish": "...Aún no ha terminado. ¡No... nos rendiremos!",
						"vietnamese": "...Chưa kết thúc đâu. Chúng ta... sẽ không bỏ cuộc!",
						"thai": "...ยังไม่จบหรอก เรา...ไม่ยอมแพ้!",
						"hindi": "...अभी खत्म नहीं हुआ। हम... हार नहीं मानेंगे!"
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "가장 깊은 곳, 거대한 그림자가 얼음 속에서 모습을 드러냈다.",
						"english": "In the deepest reaches, a massive shadow emerged from within the ice.",
						"japanese": "最も深い場所で、巨大な影が氷の中から姿を現した。",
						"chinese": "在最深处，一个巨大的身影从冰中浮现。",
						"french": "Dans les profondeurs les plus sombres, une ombre massive émergea de la glace.",
						"spanish": "En lo más profundo, una sombra gigantesca emergió del hielo.",
						"vietnamese": "Sâu thẳm nhất, một bóng đen khổng lồ hiện ra từ bên trong băng.",
						"thai": "ในส่วนลึกที่สุด เงาขนาดใหญ่ปรากฏขึ้นจากน้ำแข็ง",
						"hindi": "सबसे गहरे में, एक विशाल छाया बर्फ से निकल कर सामने आई।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "…침범자들. 맹세를 깨려는가.",
						"english": "...Intruders. Do you seek to break the Oath?",
						"japanese": "...侵入者たち。誓いを破ろうとするのか。",
						"chinese": "……入侵者。你们想打破誓言吗？",
						"french": "...Intrus. Cherchez-vous à briser le Serment ?",
						"spanish": "...Intrusos. ¿Buscan romper el Juramento?",
						"vietnamese": "...Kẻ xâm phạm. Các ngươi định phá vỡ Lời Thề ư?",
						"thai": "...ผู้บุกรุก พวกเจ้าจะทำลายคำสาบานหรือ",
						"hindi": "...घुसपैठिए। क्या तुम शपथ तोड़ना चाहते हो?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "네가… 뒤틀린 수호자냐.",
						"english": "Are you... the Twisted Guardian?",
						"japanese": "お前が…歪んだ守護者か。",
						"chinese": "你就是……被扭曲的守护者吗？",
						"french": "Es-tu... le Gardien Tordu ?",
						"spanish": "¿Eres tú... el Guardián Retorcido?",
						"vietnamese": "Ngươi... là Kẻ Bảo Hộ Biến Dạng ư?",
						"thai": "เจ้า... คือผู้พิทักษ์บิดเบี้ยวหรือ",
						"hindi": "क्या तुम... विकृत संरक्षक हो?"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "ivar"
				},
				{
					"content": {
						"korean": "저것이… 맹세에 갇힌 영혼이다. 시스템의 꼭두각시.",
						"english": "That is... a soul trapped by the Oath. A puppet of the System.",
						"japanese": "あれが…誓いに囚われた魂だ。システムの操り人形。",
						"chinese": "那是……被誓言囚禁的灵魂。系统的傀儡。",
						"french": "C'est... une âme piégée par le Serment. Une marionnette du Système.",
						"spanish": "Eso es... un alma atrapada por el Juramento. Un títere del Sistema.",
						"vietnamese": "Đó là... một linh hồn bị mắc kẹt bởi Lời Thề. Một con rối của Hệ Thống.",
						"thai": "นั่นคือ... วิญญาณที่ถูกขังโดยคำสาบาน หุ่นเชิดของระบบ",
						"hindi": "वह... शपथ में फंसी हुई आत्मा है। सिस्टम की कठपुतली।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "ivar"
				},
				{
					"duration_ms": 400,
					"direction": "down",
					"action": "exit",
					"type": "direction",
					"speaker": "ivar"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "어리석은 자들. 이 맹세는 깨지지 않는다!",
						"english": "Fools. This Oath cannot be broken!",
						"japanese": "愚か者め。この誓いは破られぬ！",
						"chinese": "愚蠢的家伙。这誓言不可打破！",
						"french": "Imbéciles. Ce Serment ne peut être brisé !",
						"spanish": "Necios. ¡Este Juramento no puede romperse!",
						"vietnamese": "Lũ ngu ngốc. Lời Thề này không thể bị phá vỡ!",
						"thai": "พวกโง่เขลา คำสาบานนี้ไม่อาจถูกทำลายได้!",
						"hindi": "मूर्खों। यह शपथ तोड़ी नहीं जा सकती!"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "우리가… 그 맹세를 부수겠다!",
						"english": "We will... shatter that Oath!",
						"japanese": "我々が…その誓いを打ち破る！",
						"chinese": "我们将……打破那个誓言！",
						"french": "Nous... briserons ce Serment !",
						"spanish": "¡Nosotros... romperemos ese Juramento!",
						"vietnamese": "Chúng ta sẽ... phá tan Lời Thề đó!",
						"thai": "เราจะ... ทำลายคำสาบานนั้น!",
						"hindi": "हम... उस शपथ को तोड़ेंगे!"
					},
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "sad",
					"content": {
						"korean": "…끝이 아니다. 시스템은… 영원하다.",
						"english": "...It's not over. The System is... eternal.",
						"japanese": "…終わりではない。システムは…永遠だ。",
						"chinese": "……还没有结束。系统是……永恒的。",
						"french": "...Ce n'est pas fini. Le Système est... éternel.",
						"spanish": "...No ha terminado. El Sistema es... eterno.",
						"vietnamese": "...Chưa kết thúc. Hệ Thống... là vĩnh cửu.",
						"thai": "...ยังไม่จบ ระบบนั้น... เป็นนิรันดร์",
						"hindi": "...यह अंत नहीं है। सिस्टम... शाश्वत है।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "쓰러뜨렸다… 하지만 이 느낌은 뭐지?",
						"english": "Defeated... but what is this feeling?",
						"japanese": "倒した…だが、この感覚は何だ？",
						"chinese": "击败了…但这感觉是？",
						"french": "Vaincu... mais quel est ce sentiment ?",
						"spanish": "Derrotado... ¿pero qué es esta sensación?",
						"vietnamese": "Đã đánh bại... nhưng cảm giác này là gì?",
						"thai": "ล้มลงแล้ว... แต่ความรู้สึกนี้คืออะไร?",
						"hindi": "हरा दिया... पर यह कैसा एहसास है?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "수호자는 쓰러졌지만, 얼음은 더욱 빠르게 세계를 잠식하기 시작했다.",
						"english": "The Guardian fell, but the ice began to consume the world even faster.",
						"japanese": "守護者は倒れたが、氷はさらに速く世界を侵食し始めた。",
						"chinese": "守护者倒下了，但寒冰却以更快的速度侵蚀世界。",
						"french": "Le Gardien est tombé, mais la glace a commencé à engloutir le monde encore plus vite.",
						"spanish": "El Guardián cayó, pero el hielo empezó a consumir el mundo aún más rápido.",
						"vietnamese": "Kẻ bảo hộ đã ngã xuống, nhưng băng giá bắt đầu nuốt chửng thế giới nhanh hơn.",
						"thai": "ผู้พิทักษ์ล้มลงแล้ว แต่ธารน้ำแข็งกลับเริ่มกัดกินโลกเร็วขึ้นกว่าเดิม",
						"hindi": "संरक्षक तो गिर गया, पर बर्फ़ ने दुनिया को और तेज़ी से निगलना शुरू कर दिया।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "더 거대한 분노가 다가오고 있었다. 카운트다운은 멈추지 않았다.",
						"english": "A greater wrath was approaching. The countdown did not stop.",
						"japanese": "さらなる巨大な怒りが迫っていた。カウントダウンは止まらなかった。",
						"chinese": "更巨大的愤怒正在逼近。倒计时并未停止。",
						"french": "Une rage plus grande approchait. Le compte à rebours ne s'est pas arrêté.",
						"spanish": "Una ira más grande se acercaba. La cuenta atrás no se detuvo.",
						"vietnamese": "Một cơn thịnh nộ lớn hơn đang đến gần. Đồng hồ đếm ngược không dừng lại.",
						"thai": "ความโกรธเกรี้ยวที่ยิ่งใหญ่กว่ากำลังคืบคลานเข้ามา การนับถอยหลังไม่หยุดลง",
						"hindi": "एक और बड़ा क्रोध आ रहा था। उलटी गिनती रुकी नहीं।"
					}
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"영원한 겨울이 지배하는 혹독한 설원. 숨겨진 얼음 동굴에서 맹세가 뒤틀렸다.",
			"고대 부족의 영혼은 수호자가 되어야 했지만, 시스템은 그들을 노예로 만들었다.",
			"시간이 흐를수록 세계는 더 깊은 빙하기로 빠져든다. 카운트다운은 멈추지 않는다.",
			"강함의 끝을 시험하는 자, 이바르는 그 맹세의 실체를 알고 있었다."
		],
		"english": [
			"A harsh snowfield ruled by eternal winter. In a hidden ice cave, a vow was twisted.",
			"The spirits of the ancient tribe were meant to be guardians, but the system enslaved them.",
			"As time passes, the world plunges deeper into an ice age. The countdown never stops.",
			"Ivar, who tests the limits of strength, knew the truth of that vow."
		],
		"japanese": [
			"永遠の冬が支配する過酷な雪原。隠された氷の洞窟で、誓いはねじ曲げられた。",
			"古代の部族の魂は守護者となるはずだったが、システムは彼らを奴隷にした。",
			"時が経つにつれて、世界はより深い氷河期へと沈んでいく。カウントダウンは止まらない。",
			"強さの極限を試す者、イヴァルは、その誓いの真実を知っていた。"
		],
		"chinese": [
			"永恒之冬统治的严酷雪原。在隐藏的冰洞中，誓言被扭曲了。",
			"古老部落的灵魂本应成为守护者，但系统却奴役了他们。",
			"随着时间的流逝，世界陷入更深的冰河时代。倒计时永不停止。",
			"探寻力量极限之人，伊瓦尔，深知那誓言的真相。"
		],
		"french": [
			"Une toundra glaciale sous l'emprise d'un hiver éternel. Dans une caverne de glace cachée, un serment fut déformé.",
			"Les esprits de l'ancienne tribu devaient être des gardiens, mais le système les a asservis.",
			"Au fil du temps, le monde s'enfonce dans un âge de glace plus profond. Le compte à rebours ne s'arrête jamais.",
			"Ivar, celui qui teste les limites de la force, connaissait la vérité de ce serment."
		],
		"spanish": [
			"Un duro campo de nieve dominado por el invierno eterno. En una cueva de hielo oculta, un juramento se torció.",
			"Los espíritus de la antigua tribu debían ser guardianes, pero el sistema los esclavizó.",
			"A medida que pasa el tiempo, el mundo se sumerge más profundamente en una edad de hielo. La cuenta regresiva nunca se detiene.",
			"Ivar, quien prueba los límites de la fuerza, conocía la verdad de ese juramento."
		],
		"vietnamese": [
			"Một vùng tuyết khắc nghiệt bị cai trị bởi mùa đông vĩnh cửu. Trong một hang động băng ẩn, lời thề đã bị bẻ cong.",
			"Linh hồn của bộ tộc cổ xưa lẽ ra phải là người bảo vệ, nhưng hệ thống đã biến họ thành nô lệ.",
			"Thời gian trôi qua, thế giới chìm sâu hơn vào kỷ băng hà. Đồng hồ đếm ngược không ngừng.",
			"Ivar, kẻ thử thách giới hạn của sức mạnh, đã biết sự thật của lời thề đó."
		],
		"thai": [
			"ทุ่งหิมะอันโหดร้ายที่ถูกปกครองโดยฤดูหนาวนิรันดร์ ในถ้ำน้ำแข็งที่ซ่อนอยู่ คำสาบานได้ถูกบิดเบือน",
			"วิญญาณของชนเผ่าโบราณควรจะเป็นผู้พิทักษ์ แต่ระบบกลับทำให้พวกเขากลายเป็นทาส",
			"เมื่อเวลาผ่านไป โลกก็จมดิ่งลงสู่ยุคน้ำแข็งที่ลึกขึ้น การนับถอยหลังไม่เคยหยุดนิ่ง",
			"ไอบาร์ ผู้ที่ทดสอบขีดจำกัดของความแข็งแกร่ง รู้ความจริงของคำสาบานนั้น"
		],
		"hindi": [
			"शाश्वत सर्दी से शासित एक कठोर बर्फीला मैदान। एक छिपी हुई बर्फ की गुफा में, एक प्रतिज्ञा मुड़ गई।",
			"प्राचीन जनजाति की आत्माओं को संरक्षक होना चाहिए था, लेकिन सिस्टम ने उन्हें गुलाम बना लिया।",
			"जैसे-जैसे समय बीतता है, दुनिया एक गहरे हिमयुग में डूब जाती है। उलटी गिनती कभी नहीं रुकती।",
			"इवार, जो शक्ति की सीमाओं का परीक्षण करता है, उस प्रतिज्ञा की सच्चाई जानता था।"
		]
	}
} as const;
