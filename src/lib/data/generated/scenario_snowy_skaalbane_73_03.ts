export const scenario_snowy_skaalbane_73_03 = {
	"scenario_id": "snowy_skaalbane_73_03",
	"order": 3,
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
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "탑의 내부. 희미한 푸른빛 사이로 붉은 기운이 감돌기 시작했다.",
						"english": "Inside the tower. A red aura began to swirl amidst the faint blue light.",
						"japanese": "塔の内部。かすかな青い光の中に、赤い気配が漂い始めた。",
						"chinese": "塔楼内部。在微弱的蓝光中，一丝红色气息开始弥漫。",
						"french": "L'intérieur de la tour. Une aura rouge commença à tourbillonner au milieu de la faible lumière bleue.",
						"spanish": "Dentro de la torre. Un aura roja comenzó a arremolinarse entre la tenue luz azul.",
						"vietnamese": "Bên trong tháp. Một luồng khí đỏ bắt đầu cuộn xoáy giữa ánh sáng xanh mờ ảo.",
						"thai": "ภายในหอคอย ไอสีแดงเริ่มหมุนวนท่ามกลางแสงสีน้ำเงินจางๆ",
						"hindi": "मीनार के अंदर। मंद नीली रोशनी के बीच एक लाल आभा घूमने लगी।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…빛깔이 이상해.",
						"english": "...The color is strange.",
						"japanese": "…色がおかしい。",
						"chinese": "……颜色很奇怪。",
						"french": "...La couleur est étrange.",
						"spanish": "...El color es extraño.",
						"vietnamese": "...Màu sắc thật kỳ lạ.",
						"thai": "...สีมันแปลกๆ",
						"hindi": "...रंग अजीब है।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "eira",
					"duration_ms": 500,
					"spot": [
						3,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "차가운 빛이… 따뜻함을 흉내 내고 있어.",
						"english": "The cold light... is imitating warmth.",
						"japanese": "冷たい光が…温かさを真似ている。",
						"chinese": "冰冷的光……正在模仿温暖。",
						"french": "La lumière froide... imite la chaleur.",
						"spanish": "La luz fría... está imitando calidez.",
						"vietnamese": "Ánh sáng lạnh lẽo... đang bắt chước sự ấm áp.",
						"thai": "แสงอันเย็นเยียบ... กำลังเลียนแบบความอบอุ่น",
						"hindi": "ठंडी रोशनी... गरमाहट की नकल कर रही है।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "흉내?",
						"english": "Imitating?",
						"japanese": "真似？",
						"chinese": "模仿？",
						"french": "Imiter ?",
						"spanish": "¿Imitando?",
						"vietnamese": "Bắt chước sao?",
						"thai": "เลียนแบบ?",
						"hindi": "नकल?"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "eira",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "저 빛은 늘 푸른색이었지. 죽음을 부르는 차가운 색.",
						"english": "That light was always blue. A cold color that heralds death.",
						"japanese": "あの光はいつも青かった。死を呼ぶ冷たい色だ。",
						"chinese": "那道光总是蓝色的。一个召唤死亡的冰冷颜色。",
						"french": "Cette lumière a toujours été bleue. Une couleur froide qui annonce la mort.",
						"spanish": "Esa luz siempre fue azul. Un color frío que invoca la muerte.",
						"vietnamese": "Ánh sáng đó luôn có màu xanh. Một màu lạnh lẽo gọi mời cái chết.",
						"thai": "แสงนั้นเป็นสีน้ำเงินเสมอ สีที่เย็นชาและเรียกหาความตาย",
						"hindi": "वह रोशनी हमेशा नीली थी। मौत को बुलावा देने वाला एक ठंडा रंग।"
					},
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "하지만 이제는… 마치 살아있는 온기처럼 흔들리고 있어.",
						"english": "But now... it wavers as if it were a living warmth.",
						"japanese": "しかし今は…まるで生きている温かさのように揺らめいている。",
						"chinese": "但现在……它却像活着的温暖一样摇曳着。",
						"french": "Mais maintenant... elle vacille comme une chaleur vivante.",
						"spanish": "Pero ahora... se tambalea como una calidez viviente.",
						"vietnamese": "Nhưng giờ đây... nó lay động như thể một hơi ấm sống động.",
						"thai": "แต่ตอนนี้... มันสั่นไหวราวกับเป็นไออุ่นที่มีชีวิต",
						"hindi": "लेकिन अब... यह एक जीवित गरमाहट की तरह कांप रहा है।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "희망인가?",
						"english": "Hope?",
						"japanese": "希望、か？",
						"chinese": "希望吗？",
						"french": "L'espoir ?",
						"spanish": "¿Esperanza?",
						"vietnamese": "Hy vọng sao?",
						"thai": "ความหวังงั้นหรือ?",
						"hindi": "आशा है?"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "아니. 미끼야.",
						"english": "No. A lure.",
						"japanese": "違う。餌だ。",
						"chinese": "不。是诱饵。",
						"french": "Non. Un piège.",
						"spanish": "No. Un señuelo.",
						"vietnamese": "Không. Là mồi nhử.",
						"thai": "ไม่ใช่. มันคือเหยื่อล่อ.",
						"hindi": "नहीं। एक चारा।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "eira"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "절규가 잦아들었어. 먹어온 죽음이 메말라가고 있었다는 기록이지.",
						"english": "The screams have faded. A sign that the deaths it consumed were drying up.",
						"japanese": "絶叫が止んだ。喰らってきた死が、枯渇し始めていた証拠だ。",
						"chinese": "尖叫声渐弱。这记录着它所吞噬的死亡正在枯竭。",
						"french": "Les cris se sont estompés. Un signe que les morts qu'elle a dévorées se tarissaient.",
						"spanish": "Los gritos han cesado. Una señal de que las muertes que devoró se estaban agotando.",
						"vietnamese": "Tiếng thét đã nhỏ dần. Một ghi chép cho thấy cái chết mà nó hấp thụ đã cạn kiệt.",
						"thai": "เสียงกรีดร้องเริ่มจางลง บันทึกว่าความตายที่มันกินเข้าไปกำลังเหือดแห้ง",
						"hindi": "चीखें थम गई हैं। यह एक संकेत है कि जो मौतें इसने निगली थीं, वे सूख रही थीं।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "eira",
					"content": {
						"korean": "그래서 탑은 새로운 양분을 노리는 거야. 산 자의 온기.",
						"english": "So the Tower seeks new sustenance. The warmth of the living.",
						"japanese": "だから塔は、新たな養分を狙っている。生者の温もりを。",
						"chinese": "所以高塔在寻找新的养分。生者的温暖。",
						"french": "Alors la Tour cherche une nouvelle nourriture. La chaleur des vivants.",
						"spanish": "Por eso la Torre busca nuevo sustento. El calor de los vivos.",
						"vietnamese": "Vì vậy, Tháp đang tìm kiếm nguồn dưỡng chất mới. Hơi ấm của người sống.",
						"thai": "ดังนั้นหอคอยจึงเล็งหาอาหารใหม่ ความอบอุ่นของผู้มีชีวิต.",
						"hindi": "इसलिए मीनार नए पोषण की तलाश में है। जीवितों की गर्माहट।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "….",
						"english": "...",
						"japanese": "…。",
						"chinese": "...",
						"french": "...",
						"spanish": "...",
						"vietnamese": "...",
						"thai": "...",
						"hindi": "..."
					}
				},
				{
					"content": {
						"korean": "저 따뜻함은 진짜가 아니야. 우릴 끌어들이려는 미끼야.",
						"english": "That warmth isn't real. It's a lure to draw us in.",
						"japanese": "あの温かさは本物じゃない。俺たちを誘い込もうとする餌だ。",
						"chinese": "那种温暖不是真的。那是引诱我们上钩的诱饵。",
						"french": "Cette chaleur n'est pas réelle. C'est un leurre pour nous attirer.",
						"spanish": "Ese calor no es real. Es un señuelo para atraernos.",
						"vietnamese": "Hơi ấm đó không thật. Đó là mồi nhử để dụ chúng ta vào.",
						"thai": "ความอบอุ่นนั้นไม่จริง มันคือเหยื่อล่อที่จะล่อเราเข้าไป.",
						"hindi": "वह गर्माहट असली नहीं है। यह हमें आकर्षित करने का चारा है।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "angry"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "탑의 심층부. 온화한 빛이 탐험대를 감쌌다.",
						"english": "The deep layers of the Tower. A gentle light enveloped the expedition team.",
						"japanese": "塔の深層部。穏やかな光が探検隊を包み込んだ。",
						"chinese": "高塔深处。柔和的光芒笼罩着探险队。",
						"french": "Les profondeurs de la Tour. Une douce lumière enveloppait l'équipe d'expédition.",
						"spanish": "Las profundidades de la Torre. Una luz suave envolvió al equipo de expedición.",
						"vietnamese": "Tầng sâu của Tháp. Ánh sáng dịu nhẹ bao trùm đoàn thám hiểm.",
						"thai": "ส่วนลึกของหอคอย แสงอ่อนโยนโอบล้อมทีมสำรวจ.",
						"hindi": "मीनार की गहरी परतें। एक कोमल प्रकाश ने अभियान दल को घेर लिया।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…어서 와라. 오랜만에 따뜻한 손님이군.",
						"english": "...Welcome. A warm guest after a long time.",
						"japanese": "…よく来たな。久しぶりに温かい客だ。",
						"chinese": "...欢迎。真是久违的温暖客人。",
						"french": "...Bienvenue. Un hôte chaleureux après si longtemps.",
						"spanish": "...Bienvenido. Un huésped cálido después de mucho tiempo.",
						"vietnamese": "...Chào mừng. Một vị khách ấm áp sau bao lâu.",
						"thai": "...ยินดีต้อนรับ แขกผู้มีน้ำใจหลังผ่านไปนาน.",
						"hindi": "...स्वागत है। बहुत समय बाद एक गर्मजोशी भरा मेहमान।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "eira",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "속지 마. 저 다정함은 가면이야.",
						"english": "Don't be fooled. That kindness is a mask.",
						"japanese": "騙されるな。あの優しさは仮面だ。",
						"chinese": "别上当。那份温柔是伪装。",
						"french": "Ne te laisse pas berner. Cette gentillesse est un masque.",
						"spanish": "No te engañes. Esa amabilidad es una máscara.",
						"vietnamese": "Đừng bị lừa. Sự dịu dàng đó là một chiếc mặt nạ.",
						"thai": "อย่าถูกหลอก ความเมตตานั้นเป็นหน้ากาก.",
						"hindi": "धोखा मत खाओ। वह दयालुता एक मुखौटा है।"
					},
					"speaker": "eira"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "네 정체는 뭐지?",
						"english": "What is your true identity?",
						"japanese": "お前の正体は何だ？",
						"chinese": "你的真面目是什么？",
						"french": "Quelle est ton identité ?",
						"spanish": "¿Cuál es tu verdadera identidad?",
						"vietnamese": "Thân phận thật sự của ngươi là gì?",
						"thai": "ตัวตนที่แท้จริงของเจ้าคืออะไร?",
						"hindi": "तुम्हारी असली पहचान क्या है?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "나는… 너희를 이해하는 자. 너희의 온기를 갈망하는 자.",
						"english": "I… am one who understands you. One who craves your warmth.",
						"japanese": "私は… あなた方を理解する者。あなた方の温もりを渇望する者。",
						"chinese": "我… 是理解你们之人。渴望你们温暖之人。",
						"french": "Je… suis celui qui vous comprend. Celui qui désire ardemment votre chaleur.",
						"spanish": "Yo… soy quien os comprende. Quien anhela vuestro calor.",
						"vietnamese": "Ta… là kẻ thấu hiểu các ngươi. Kẻ khao khát hơi ấm của các ngươi.",
						"thai": "ข้า… คือผู้ที่เข้าใจพวกเจ้า ผู้ที่ปรารถนาความอบอุ่นของพวกเจ้า",
						"hindi": "मैं… वह हूँ जो तुम्हें समझता है। वह हूँ जो तुम्हारी गर्माहट की लालसा रखता है।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "함께라면… 영원히 따뜻할 수 있을 텐데.",
						"english": "Together… we could be warm forever.",
						"japanese": "共にいれば… 永遠に温かく過ごせるのに。",
						"chinese": "若在一起… 便能永远温暖。",
						"french": "Ensemble… nous pourrions être au chaud pour toujours.",
						"spanish": "Juntos… podríamos estar cálidos para siempre.",
						"vietnamese": "Nếu cùng nhau… ta có thể ấm áp mãi mãi.",
						"thai": "หากอยู่ด้วยกัน… เราคงอบอุ่นไปตลอดกาล",
						"hindi": "साथ होते… तो हमेशा गर्म रह सकते थे।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "happy"
				},
				{
					"content": {
						"korean": "달콤한 독이야!",
						"english": "Sweet poison!",
						"japanese": "甘い毒だ！",
						"chinese": "甜蜜的毒药！",
						"french": "Doux poison !",
						"spanish": "¡Dulce veneno!",
						"vietnamese": "Thứ độc ngọt ngào!",
						"thai": "ยาพิษอันหอมหวาน!",
						"hindi": "मीठा ज़हर है!"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "angry"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "하하하… 덧없는 온기여. 결국… 나의 일부가 될 뿐.",
						"english": "Hahaha… Fleeting warmth. In the end… you'll just become a part of me.",
						"japanese": "ハハハ… 儚い温もりよ。結局… 私の一部となるだけだ。",
						"chinese": "哈哈哈… 短暂的温暖啊。最终… 你也只会成为我的一部分。",
						"french": "Hahaha… Chaleur éphémère. Au final… tu ne feras que devenir une partie de moi.",
						"spanish": "Jajaja… Calor efímero. Al final… solo te convertirás en parte de mí.",
						"vietnamese": "Hahaha… Hơi ấm phù du. Cuối cùng… ngươi cũng chỉ trở thành một phần của ta mà thôi.",
						"thai": "ฮ่าฮ่าฮ่า… ความอบอุ่นชั่วคราว ท้ายที่สุด… เจ้าก็เป็นแค่ส่วนหนึ่งของข้าเท่านั้น",
						"hindi": "हाहाहा… क्षणभंगुर गर्मी। अंत में… तुम बस मेरा एक हिस्सा बन जाओगे।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "따뜻함이 모든 것을 집어삼켰다.",
						"english": "Warmth swallowed everything.",
						"japanese": "暖かさがすべてを飲み込んだ。",
						"chinese": "温暖吞噬了一切。",
						"french": "La chaleur a tout englouti.",
						"spanish": "La calidez lo devoró todo.",
						"vietnamese": "Sự ấm áp đã nuốt chửng mọi thứ.",
						"thai": "ความอบอุ่นกลืนกินทุกสิ่ง",
						"hindi": "गर्मी ने सब कुछ निगल लिया।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "…아직, 끝나지 않았어.",
						"english": "…It's not over yet.",
						"japanese": "…まだ、終わっていない。",
						"chinese": "…还没有，结束。",
						"french": "…Ce n'est pas encore fini.",
						"spanish": "…Aún no ha terminado.",
						"vietnamese": "…Chưa, kết thúc đâu.",
						"thai": "…ยังไม่จบ",
						"hindi": "…अभी, खत्म नहीं हुआ है।"
					}
				},
				{
					"speaker": "eira",
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "포기하지 마. 저것은 그저… 시작에 불과해.",
						"english": "Don't give up. That was just… the beginning.",
						"japanese": "諦めるな。あれはただ…始まりに過ぎない。",
						"chinese": "别放弃。那只是…开始而已。",
						"french": "N'abandonne pas. Ce n'était que… le début.",
						"spanish": "No te rindas. Eso fue solo… el principio.",
						"vietnamese": "Đừng bỏ cuộc. Đó chỉ là… khởi đầu mà thôi.",
						"thai": "อย่ายอมแพ้ นั่นเป็นเพียง… จุดเริ่มต้นเท่านั้น",
						"hindi": "हार मत मानो। वह तो बस… शुरुआत थी।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "흐읍… 이 따뜻함… 잠시 빌린 것이었을 뿐….",
						"english": "Hmph… This warmth… was only borrowed for a moment…",
						"japanese": "くっ… この温かさ… ほんの一時借りたものに過ぎない…。",
						"chinese": "哼… 这份温暖… 只是暂借而已…",
						"french": "Hmph… Cette chaleur… n'était qu'un emprunt momentané…",
						"spanish": "Hmph… Este calor… solo fue prestado por un momento…",
						"vietnamese": "Hừm… Hơi ấm này… chỉ là mượn tạm trong chốc lát…",
						"thai": "ฮึ่ม… ความอบอุ่นนี้… เป็นเพียงสิ่งที่ยืมมาเพียงชั่วครู่เท่านั้น…",
						"hindi": "हम्म… यह गर्माहट… बस कुछ पल के लिए उधार ली गई थी…"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "하지만… 갈구는 멈추지 않는다. 탑은… 널 원해….",
						"english": "But… the craving does not stop. The Tower… wants you…",
						"japanese": "だが… 渇望は止まらない。塔は… お前を求めている…。",
						"chinese": "但是… 渴望不会停止。塔… 想要你…",
						"french": "Mais… le désir ne s'arrête pas. La Tour… te veut…",
						"spanish": "Pero… el ansia no se detiene. La Torre… te quiere…",
						"vietnamese": "Nhưng… sự khao khát không dừng lại. Tháp… muốn ngươi…",
						"thai": "แต่… ความปรารถนาไม่หยุดยั้ง หอคอย… ต้องการเจ้า…",
						"hindi": "लेकिन… लालसा नहीं रुकती। बुर्ज… तुम्हें चाहता है…"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "….",
						"english": "....",
						"japanese": "....",
						"chinese": "....",
						"french": "....",
						"spanish": "....",
						"vietnamese": "....",
						"thai": "....",
						"hindi": "...."
					},
					"speaker": "character_any"
				},
				{
					"speaker": "eira",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "저것은 탑의 아주 작은 일부에 불과했어.",
						"english": "That was just a small part of the tower.",
						"japanese": "あれは塔のほんの一部に過ぎなかった。",
						"chinese": "那只是塔的一小部分。",
						"french": "Ce n'était qu'une petite partie de la tour.",
						"spanish": "Eso era solo una pequeña parte de la torre.",
						"vietnamese": "Đó chỉ là một phần rất nhỏ của tòa tháp.",
						"thai": "นั่นเป็นเพียงส่วนเล็ก ๆ ของหอคอยเท่านั้น",
						"hindi": "वह तो टावर का एक बहुत छोटा सा हिस्सा था।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "탑은 아직… 너희의 온기를 갈망하고 있어. 더 깊은 곳에서.",
						"english": "The tower still… yearns for your warmth. Deeper within.",
						"japanese": "塔はまだ…君たちの温もりを渇望している。もっと深い場所で。",
						"chinese": "塔仍在…渴望着你们的温暖。在更深处。",
						"french": "La tour… aspire encore à votre chaleur. Plus profondément.",
						"spanish": "La torre aún… anhela vuestro calor. En lo más profundo.",
						"vietnamese": "Tòa tháp vẫn… khao khát hơi ấm của các ngươi. Sâu hơn nữa.",
						"thai": "หอคอยยังคง… โหยหาความอบอุ่นของพวกเจ้า ลึกเข้าไปข้างใน",
						"hindi": "टावर अभी भी… तुम्हारी गर्मी को तरस रहा है। और गहराई में।"
					},
					"speaker": "eira"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "따스함을 흉내 내던 빛이 사라지고, 다시 차가운 정적이 숲을 채웠다.",
						"english": "The light mimicking warmth vanished, and cold silence filled the forest once more.",
						"japanese": "暖かさを模倣した光は消え、再び冷たい静寂が森を満たした。",
						"chinese": "模仿温暖的光芒消失了，冰冷的寂静再次笼罩了森林。",
						"french": "La lumière imitant la chaleur disparut, et un silence froid remplit à nouveau la forêt.",
						"spanish": "La luz que imitaba el calor se desvaneció, y un frío silencio llenó el bosque de nuevo.",
						"vietnamese": "Ánh sáng giả tạo sự ấm áp biến mất, và sự tĩnh lặng lạnh lẽo lại bao trùm khu rừng.",
						"thai": "แสงที่เลียนแบบความอบอุ่นหายไป และความเงียบเย็นยะเยือกก็กลับมาปกคลุมป่าอีกครั้ง",
						"hindi": "गर्मी का अनुकरण करने वाली रोशनी गायब हो गई, और एक बार फिर ठंडी खामोशी जंगल में भर गई।"
					}
				},
				{
					"content": {
						"korean": "그러나 탑의 심장은, 여전히 무언가를 갈구하며 박동하고 있었다.",
						"english": "Yet, the tower's heart still pulsed, yearning for something.",
						"japanese": "しかし、塔の心臓は、まだ何かを求めて脈打っていた。",
						"chinese": "然而，塔的心脏仍在跳动，渴望着什么。",
						"french": "Cependant, le cœur de la tour palpitait encore, aspirant à quelque chose.",
						"spanish": "Sin embargo, el corazón de la torre seguía latiendo, anhelando algo.",
						"vietnamese": "Tuy nhiên, trái tim của tòa tháp vẫn đập, khao khát điều gì đó.",
						"thai": "ทว่า หัวใจของหอคอยยังคงเต้นรัว โหยหาบางสิ่งบางอย่าง",
						"hindi": "फिर भी, टावर का दिल अभी भी धड़क रहा था, कुछ पाने की चाहत में।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "온화한 빛이 무시무시한 장막으로 변했다.",
						"english": "The gentle light transformed into a dreadful veil.",
						"japanese": "穏やかな光が恐ろしい帳（とばり）へと変わった。",
						"chinese": "温和的光芒变成了可怕的帷幕。",
						"french": "La douce lumière s'est transformée en un voile effroyable.",
						"spanish": "La luz apacible se transformó en un velo espantoso.",
						"vietnamese": "Ánh sáng dịu dàng đã biến thành tấm màn khủng khiếp.",
						"thai": "แสงอันอ่อนโยนแปรเปลี่ยนเป็นม่านอันน่ากลัว",
						"hindi": "सौम्य प्रकाश एक भयानक आवरण में बदल गया।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "어째서 내 초대를 거부하는가? 우리는 하나가 될 수 있는데.",
						"english": "Why do you refuse my invitation? We could be one.",
						"japanese": "なぜ私の誘いを拒む？ 我らは一つになれるのに。",
						"chinese": "为何拒绝我的邀请？我们本可以合二为一。",
						"french": "Pourquoi refusez-vous mon invitation ? Nous pourrions ne faire qu'un.",
						"spanish": "¿Por qué rechazas mi invitación? Podríamos ser uno.",
						"vietnamese": "Tại sao các ngươi lại từ chối lời mời của ta? Chúng ta có thể trở thành một.",
						"thai": "เหตุใดจึงปฏิเสธคำเชิญของข้า? เราสามารถเป็นหนึ่งเดียวกันได้",
						"hindi": "तुम मेरा निमंत्रण क्यों ठुकराते हो? हम एक हो सकते थे।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "네 온기는 거짓이야. 우린 네 양분이 되지 않아.",
						"english": "Your warmth is a lie. We will not be your sustenance.",
						"japanese": "お前の温もりは偽りだ。我々はお前の養分にはならない。",
						"chinese": "你的温暖是谎言。我们不会成为你的养分。",
						"french": "Ta chaleur est un mensonge. Nous ne serons pas ta subsistance.",
						"spanish": "Tu calor es una mentira. No seremos tu sustento.",
						"vietnamese": "Hơi ấm của ngươi là giả dối. Chúng ta sẽ không trở thành dưỡng chất của ngươi.",
						"thai": "ความอบอุ่นของเจ้าคือเรื่องหลอกลวง เราจะไม่เป็นอาหารของเจ้า",
						"hindi": "तुम्हारी गर्माहट झूठ है। हम तुम्हारा पोषण नहीं बनेंगे।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "eira",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "eira",
					"content": {
						"korean": "저자의 따뜻함은 죽음을 부르는 차가운 칼날과 같다.",
						"english": "Their warmth is like a cold blade that beckons death.",
						"japanese": "あの者の温かさは、死を呼ぶ冷たい刃のようだ。",
						"chinese": "那家伙的温暖，犹如招致死亡的冰冷刀刃。",
						"french": "Sa chaleur est comme une lame froide qui appelle la mort.",
						"spanish": "Su calidez es como una hoja fría que atrae la muerte.",
						"vietnamese": "Sự ấm áp của kẻ đó giống như lưỡi dao lạnh lẽo gọi mời cái chết.",
						"thai": "ความอบอุ่นของเจ้าผู้นั้นราวกับคมมีดเย็นชาที่เชื้อเชิญความตาย",
						"hindi": "उसकी गर्माहट मौत को बुलाने वाली ठंडी तलवार जैसी है।"
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "…감히 나의 자비를 거부하는가. 후회하게 될 거다.",
						"english": "…Dare you refuse my mercy. You will regret it.",
						"japanese": "…よくも私の慈悲を拒んだな。後悔することになるぞ。",
						"chinese": "…竟敢拒绝我的仁慈。你会后悔的。",
						"french": "…Osez-vous refuser ma miséricorde ? Vous le regretterez.",
						"spanish": "…¿Osas rechazar mi clemencia? Te arrepentirás.",
						"vietnamese": "…Ngươi dám từ chối lòng thương xót của ta ư. Ngươi sẽ phải hối hận.",
						"thai": "…กล้าดีอย่างไรมาปฏิเสธความเมตตาของข้า เจ้าจะต้องเสียใจ",
						"hindi": "…क्या तुम मेरी दया को ठुकराने की हिम्मत करते हो? तुम्हें पछताना पड़ेगा।"
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"탑의 절규가 잦아들었다.",
			"그 공포의 자리에, 이상한 온기가 스며들기 시작했다.",
			"차가운 푸른 빛은 이제, 낯선 다정함을 흉내 낸다.",
			"그것은 초대인가, 혹은 새롭게 드리운 함정인가."
		],
		"english": [
			"The tower's screams subsided.",
			"In place of that terror, a strange warmth began to seep in.",
			"The cold blue light now imitates an unfamiliar tenderness.",
			"Is it an invitation, or a newly laid trap?"
		],
		"japanese": [
			"塔の叫びが静まった。",
			"その恐怖の場所に、奇妙な温もりが染み込み始めた。",
			"冷たい青い光は今、見慣れない優しさを真似る。",
			"それは招待か、あるいは新たに仕掛けられた罠か。"
		],
		"chinese": [
			"塔楼的尖叫声平息了。",
			"恐惧消散之处，一丝异样的温暖开始渗透。",
			"冰冷的蓝光，如今模仿着陌生的温柔。",
			"这究竟是邀请，抑或是新的陷阱？"
		],
		"french": [
			"Les cris de la tour se sont estompés.",
			"À la place de cette terreur, une étrange chaleur commença à s'infiltrer.",
			"La froide lumière bleue imite désormais une tendresse inconnue.",
			"Est-ce une invitation, ou un piège nouvellement tendu ?"
		],
		"spanish": [
			"Los gritos de la torre cesaron.",
			"En lugar de aquel terror, una extraña calidez comenzó a filtrarse.",
			"La fría luz azul ahora imita una ternura desconocida.",
			"¿Es una invitación, o una trampa recién tendida?"
		],
		"vietnamese": [
			"Tiếng thét của tháp đã lắng xuống.",
			"Thay vào nỗi kinh hoàng đó, một hơi ấm kỳ lạ bắt đầu len lỏi vào.",
			"Ánh sáng xanh lạnh lẽo giờ đây đang bắt chước sự dịu dàng xa lạ.",
			"Đó là một lời mời, hay một cái bẫy mới giăng?"
		],
		"thai": [
			"เสียงกรีดร้องของหอคอยสงบลงแล้ว",
			"ณ ที่แห่งความหวาดกลัวนั้น ความอบอุ่นประหลาดเริ่มแทรกซึมเข้ามา",
			"แสงสีน้ำเงินเย็นยะเยือก บัดนี้เลียนแบบความอ่อนโยนที่ไม่คุ้นเคย",
			"นี่คือคำเชิญ หรือกับดักที่ถูกวางขึ้นใหม่กันแน่"
		],
		"hindi": [
			"मीनार की चीखें थम गईं।",
			"उस भय की जगह एक अजीब सी गरमाहट रिसने लगी।",
			"ठंडी नीली रोशनी अब एक अपरिचित कोमलता की नकल करती है।",
			"क्या यह एक निमंत्रण है, या एक नया बिछाया गया जाल?"
		]
	}
} as const;
