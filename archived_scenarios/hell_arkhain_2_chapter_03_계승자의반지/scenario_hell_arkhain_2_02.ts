export const scenario_hell_arkhain_2_02 = {
	"scenario_id": "hell_arkhain_2_02",
	"order": 2,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"drox": {
			"id": "mon_2fc30621-a15f-4371-9e37-295cdcb5675d",
			"name": {
				"korean": "드록스",
				"english": "Drox",
				"japanese": "ドロックス",
				"chinese": "德罗克斯",
				"french": "Drox",
				"spanish": "Drox",
				"vietnamese": "Đrốc",
				"thai": "ดรอกซ์",
				"hindi": "ड्रॉक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/509c0376-2230-4669-d022-7e5336293200/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/916b4cfa-f792-4f4a-5346-681095481e00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"지옥의 길은 막다른 곳으로 이어졌다.",
			"그때마다 드록스가 나타나 손을 내밀었다.",
			"더 나은 선택, 더 큰 힘. 그의 손에 든 반지가 빛났다.",
			"탐험대는 흔들렸다. 그 달콤한 유혹 앞에서.",
			"어쩌면, 한 번쯤은 괜찮을지도 몰라."
		],
		"english": [
			"The path to hell led to a dead end.",
			"Each time, Droks appeared and offered a hand.",
			"A better choice, greater power. The ring on his hand gleamed.",
			"The expedition wavered. Before that sweet temptation.",
			"Perhaps, just this once, it might be okay."
		],
		"japanese": [
			"地獄への道は行き止まりへと続いた。",
			"そのたび、ドロックスが現れ、手を差し伸べた。",
			"より良い選択、より大きな力。彼の手の指輪が輝いた。",
			"探検隊は揺らいだ。その甘い誘惑の前で。",
			"もしかしたら、一度くらいは大丈夫かも。"
		],
		"chinese": [
			"地狱之路通向了绝境。",
			"每当那时，德罗克斯便会出现并伸出援手。",
			"更佳的选择，更强的力量。他手中的戒指闪耀着光芒。",
			"探险队动摇了。在那甜蜜的诱惑面前。",
			"也许，就这一次，会没事的。"
		],
		"french": [
			"Le chemin de l'enfer menait à une impasse.",
			"À chaque fois, Droks apparaissait et tendait la main.",
			"Un meilleur choix, un plus grand pouvoir. La bague à sa main brillait.",
			"L'expédition hésita. Devant cette douce tentation.",
			"Peut-être, juste pour une fois, ça ira."
		],
		"spanish": [
			"El camino al infierno llevaba a un callejón sin salida.",
			"Cada vez, Droks aparecía y extendía una mano.",
			"Una mejor elección, un poder mayor. El anillo en su mano brillaba.",
			"La expedición vaciló. Ante esa dulce tentación.",
			"Quizás, solo por una vez, esté bien."
		],
		"vietnamese": [
			"Con đường xuống địa ngục dẫn đến ngõ cụt.",
			"Mỗi lần như vậy, Droks lại xuất hiện và chìa tay ra.",
			"Một lựa chọn tốt hơn, một sức mạnh lớn hơn. Chiếc nhẫn trên tay hắn lấp lánh.",
			"Đoàn thám hiểm lung lay. Trước cám dỗ ngọt ngào đó.",
			"Có lẽ, chỉ một lần thôi, cũng không sao."
		],
		"thai": [
			"เส้นทางสู่นรกนำไปสู่ทางตัน",
			"ทุกครั้ง Droks จะปรากฏตัวและยื่นมือให้",
			"ทางเลือกที่ดีกว่า พลังที่ยิ่งใหญ่กว่า แหวนในมือของเขาส่องประกาย",
			"คณะสำรวจสั่นคลอน ต่อหน้าสิ่งล่อใจอันหอมหวานนั้น",
			"บางที แค่ครั้งเดียว อาจจะดีก็ได้"
		],
		"hindi": [
			"नर्क का रास्ता एक गतिरोध पर आकर रुक गया।",
			"हर बार, ड्रॉक्स प्रकट होता और अपना हाथ बढ़ाता।",
			"बेहतर चुनाव, अधिक शक्ति। उसके हाथ में अंगूठी चमक उठी।",
			"अभियान दल डगमगा गया। उस मीठे प्रलोभन के सामने।",
			"शायद, बस एक बार, यह ठीक रहेगा।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "선택의 기로, 지옥의 불모지.",
						"english": "A crossroad of choice, the barren wasteland of hell.",
						"japanese": "選択の岐路、地獄の荒れ地。",
						"chinese": "选择的岔路口，地狱的荒芜之地。",
						"french": "Un carrefour de choix, le désert infernal.",
						"spanish": "Una encrucijada de elección, el páramo del infierno.",
						"vietnamese": "Ngã ba lựa chọn, vùng đất hoang địa ngục.",
						"thai": "ทางแยกแห่งทางเลือก ดินแดนรกร้างของนรก",
						"hindi": "पसंद का चौराहा, नर्क की बंजर भूमि।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "이쪽이 맞는 길인가?",
						"english": "Is this the right way?",
						"japanese": "こちらが正しい道か？",
						"chinese": "这边是正确的路吗？",
						"french": "Est-ce le bon chemin ?",
						"spanish": "¿Es este el camino correcto?",
						"vietnamese": "Đây có phải là con đường đúng không?",
						"thai": "ทางนี้ใช่ทางที่ถูกต้องหรือไม่?",
						"hindi": "क्या यह सही रास्ता है?"
					},
					"type": "speech"
				},
				{
					"type": "direction",
					"speaker": "drox",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "아니. 이쪽이다.",
						"english": "No. It's this way.",
						"japanese": "いや、こちらだ。",
						"chinese": "不。是这边。",
						"french": "Non. C'est par ici.",
						"spanish": "No. Es por aquí.",
						"vietnamese": "Không. Là lối này.",
						"thai": "ไม่ใช่ ทางนี้ต่างหาก",
						"hindi": "नहीं। यह इधर है।"
					},
					"speaker": "drox",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "drox",
					"emotion": "base",
					"content": {
						"korean": "더 나은 선택을 원하나?",
						"english": "Do you desire a better choice?",
						"japanese": "より良い選択を望むか？",
						"chinese": "你想要更好的选择吗？",
						"french": "Désires-tu un meilleur choix ?",
						"spanish": "¿Deseas una mejor opción?",
						"vietnamese": "Ngươi có muốn một lựa chọn tốt hơn không?",
						"thai": "คุณต้องการทางเลือกที่ดีกว่าไหม?",
						"hindi": "क्या तुम बेहतर चुनाव चाहते हो?"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "당신은 누구지?",
						"english": "Who are you?",
						"japanese": "あなたは誰だ？",
						"chinese": "你是谁？",
						"french": "Qui es-tu ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Ngươi là ai?",
						"thai": "คุณคือใคร?",
						"hindi": "तुम कौन हो?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "drox",
					"emotion": "base",
					"content": {
						"korean": "드록스. 너희가 원하는 길을 아는 자.",
						"english": "Drox. He knows the path you seek.",
						"japanese": "ドロックス。お前たちが望む道を知る者。",
						"chinese": "德罗克斯。知晓你们所求之路者。",
						"french": "Drox. Celui qui connaît le chemin que vous désirez.",
						"spanish": "Drox. Él conoce el camino que buscáis.",
						"vietnamese": "Droks. Kẻ biết con đường ngươi muốn.",
						"thai": "ดรอกซ์ ผู้รู้หนทางที่เจ้าปรารถนา",
						"hindi": "ड्रॉक्स। वह जो तुम्हारा वांछित मार्ग जानता है।"
					}
				},
				{
					"type": "speech",
					"speaker": "drox",
					"emotion": "base",
					"content": {
						"korean": "…이 힘이 필요할 거다.",
						"english": "...You'll need this power.",
						"japanese": "…この力が必要になるだろう。",
						"chinese": "……你需要这份力量。",
						"french": "...Tu auras besoin de ce pouvoir.",
						"spanish": "...Necesitarás este poder.",
						"vietnamese": "...Ngươi sẽ cần sức mạnh này.",
						"thai": "...เจ้าจะต้องใช้พลังนี้",
						"hindi": "...तुम्हें इस शक्ति की आवश्यकता होगी।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 길을 막았다.",
						"english": "A colossal shadow blocks the path.",
						"japanese": "巨大な影が道を阻んだ。",
						"chinese": "巨大的影子挡住了路。",
						"french": "Une ombre colossale bloque le chemin.",
						"spanish": "Una sombra colosal bloquea el camino.",
						"vietnamese": "Một bóng đen khổng lồ chặn đường.",
						"thai": "เงามหึมาขวางทางอยู่",
						"hindi": "एक विशालकाय परछाई ने रास्ता रोक लिया है।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_1",
					"emotion": "base",
					"content": {
						"korean": "저걸 어떻게 지나지?",
						"english": "How do we get past it?",
						"japanese": "あれをどうやって通り抜ける？",
						"chinese": "怎么过去那里？",
						"french": "Comment passer ?",
						"spanish": "¿Cómo pasamos?",
						"vietnamese": "Làm sao để vượt qua nó đây?",
						"thai": "จะผ่านไปได้อย่างไร?",
						"hindi": "इसे कैसे पार करें?"
					},
					"type": "speech"
				},
				{
					"action": "enter",
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"speaker": "drox",
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "망설일 때가 아니다.",
						"english": "No time for hesitation.",
						"japanese": "躊躇している暇はない。",
						"chinese": "没有时间犹豫了。",
						"french": "Ce n'est pas le moment d'hésiter.",
						"spanish": "No es momento de dudar.",
						"vietnamese": "Không phải lúc để do dự.",
						"thai": "ไม่มีเวลาลังเลแล้ว",
						"hindi": "संकोच करने का समय नहीं है।"
					},
					"speaker": "drox",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "반지의 힘을 빌리면… 쉬울 것이다.",
						"english": "Borrow the ring's power... it will be easy.",
						"japanese": "指輪の力を借りれば…容易だろう。",
						"chinese": "借用戒指的力量…会很容易。",
						"french": "Emprunte le pouvoir de l'anneau... ce sera facile.",
						"spanish": "Si usas el poder del anillo... será fácil.",
						"vietnamese": "Mượn sức mạnh của chiếc nhẫn... sẽ dễ thôi.",
						"thai": "หากยืมพลังแหวน...มันจะง่าย",
						"hindi": "यदि अंगूठी की शक्ति का प्रयोग करो... तो आसान होगा।"
					},
					"speaker": "drox",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "힘을 빌리라고?",
						"english": "Borrow power?",
						"japanese": "力を借りろと？",
						"chinese": "借用力量？",
						"french": "Emprunter le pouvoir ?",
						"spanish": "¿Pedir prestado el poder?",
						"vietnamese": "Mượn sức mạnh ư?",
						"thai": "ยืมพลังหรือ?",
						"hindi": "शक्ति का प्रयोग करें?"
					},
					"speaker": "character_2",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…보이는군. 반지를 낀 너의 미래가.",
						"english": "...I see it. Your future, wearing the ring.",
						"japanese": "…見える。指輪をつけた君の未来が。",
						"chinese": "……我看到了。你戴着戒指的未来。",
						"french": "...Je vois. Ton futur, avec l'anneau.",
						"spanish": "...Lo veo. Tu futuro, llevando el anillo.",
						"vietnamese": "...Ta thấy rồi. Tương lai của ngươi, khi đeo chiếc nhẫn.",
						"thai": "...ข้าเห็นแล้ว อนาคตของเจ้าที่สวมแหวน",
						"hindi": "...मैं देखता हूँ। अंगूठी पहने हुए तुम्हारा भविष्य।"
					},
					"speaker": "drox",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "무슨 소리야?",
						"english": "What are you talking about?",
						"japanese": "何を言っているんだ？",
						"chinese": "你在说什么？",
						"french": "Que dis-tu ?",
						"spanish": "¿Qué dices?",
						"vietnamese": "Ngươi nói gì vậy?",
						"thai": "เจ้าพูดอะไร?",
						"hindi": "तुम क्या कह रहे हो?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "drox",
					"emotion": "base",
					"content": {
						"korean": "아무것도 아니다. 그저… 더 나은 선택일 뿐.",
						"english": "Nothing. Just... a better choice.",
						"japanese": "何でもない。ただ…より良い選択というだけだ。",
						"chinese": "没什么。只是…一个更好的选择。",
						"french": "Rien. Juste... un meilleur choix.",
						"spanish": "Nada. Solo... una mejor opción.",
						"vietnamese": "Không có gì. Chỉ là... một lựa chọn tốt hơn thôi.",
						"thai": "ไม่มีอะไร แค่...ทางเลือกที่ดีกว่า",
						"hindi": "कुछ नहीं। बस... एक बेहतर विकल्प।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "갈림길이 나타났다. 한쪽은 위험, 다른 한쪽은 미지.",
						"english": "A crossroads appeared. One path leads to danger, the other to the unknown.",
						"japanese": "分かれ道が現れた。一方は危険、もう一方は未知。",
						"chinese": "岔路出现了。一条通向危险，一条通向未知。",
						"french": "Un carrefour est apparu. Une voie mène au danger, l'autre à l'inconnu.",
						"spanish": "Apareció una encrucijada. Un camino lleva al peligro, el otro a lo desconocido.",
						"vietnamese": "Một ngã ba xuất hiện. Một hướng là hiểm nguy, hướng còn lại là điều chưa biết.",
						"thai": "ทางแยกปรากฏขึ้น ทางหนึ่งอันตราย อีกทางหนึ่งคือสิ่งที่ไม่รู้จัก",
						"hindi": "एक चौराहा आ गया। एक तरफ खतरा है, दूसरी तरफ अज्ञात।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "좁은 길로 가자. 안전할 거야.",
						"english": "Let's take the narrow path. It'll be safe.",
						"japanese": "狭い道を行こう。安全だろう。",
						"chinese": "走小路吧。会很安全的。",
						"french": "Prenons le chemin étroit. Ce sera sûr.",
						"spanish": "Tomemos el camino estrecho. Será seguro.",
						"vietnamese": "Hãy đi con đường hẹp. Sẽ an toàn thôi.",
						"thai": "ไปทางแคบกันเถอะ ปลอดภัยแน่",
						"hindi": "संकरे रास्ते पर चलते हैं। यह सुरक्षित रहेगा।"
					},
					"speaker": "character_3",
					"emotion": "base"
				},
				{
					"speaker": "drox",
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						2
					],
					"duration_ms": 500
				},
				{
					"speaker": "drox",
					"emotion": "base",
					"content": {
						"korean": "과연 안전할까?",
						"english": "Will it really be safe?",
						"japanese": "本当に安全なのか？",
						"chinese": "真的会安全吗？",
						"french": "Est-ce vraiment sûr ?",
						"spanish": "¿Será realmente seguro?",
						"vietnamese": "Liệu nó có thật sự an toàn không?",
						"thai": "มันจะปลอดภัยจริงหรือ?",
						"hindi": "क्या यह वाकई सुरक्षित होगा?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "미지는 곧 기회. 반지가 열어줄 것이다.",
						"english": "The unknown is opportunity. The ring will open the way.",
						"japanese": "未知は即ち好機。指輪が開いてくれるだろう。",
						"chinese": "未知即是机遇。戒指会打开它。",
						"french": "L'inconnu est une opportunité. L'anneau ouvrira la voie.",
						"spanish": "Lo desconocido es oportunidad. El anillo abrirá el camino.",
						"vietnamese": "Điều chưa biết chính là cơ hội. Chiếc nhẫn sẽ mở đường.",
						"thai": "สิ่งที่ไม่รู้จักคือโอกาส แหวนจะเปิดทางให้",
						"hindi": "अज्ञात ही अवसर है। अंगूठी रास्ता खोलेगी।"
					},
					"speaker": "drox",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "당신 말만 믿고 갈 순 없어.",
						"english": "I can't just go by your word.",
						"japanese": "あなたの言葉だけでは行けない。",
						"chinese": "我不能只听你的话就走。",
						"french": "Je ne peux pas juste te croire sur parole.",
						"spanish": "No puedo irme solo con tu palabra.",
						"vietnamese": "Tôi không thể chỉ tin lời bạn mà đi.",
						"thai": "ฉันไปตามคำพูดของคุณอย่างเดียวไม่ได้",
						"hindi": "मैं सिर्फ तुम्हारी बात पर नहीं जा सकता।"
					},
					"speaker": "character_4",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "지금까지 내 말이 틀린 적 있었나?",
						"english": "Have my words ever been wrong?",
						"japanese": "今まで私の言葉が間違っていたことがあったか？",
						"chinese": "我说的话有过错吗？",
						"french": "Mes paroles ont-elles déjà été fausses ?",
						"spanish": "¿Mis palabras alguna vez han estado equivocadas?",
						"vietnamese": "Lời tôi nói đã từng sai bao giờ chưa?",
						"thai": "คำพูดของฉันเคยผิดพลาดหรือเปล่า?",
						"hindi": "क्या मेरी बातें कभी गलत साबित हुई हैं?"
					},
					"speaker": "drox",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…젠장.",
						"english": "...Damn it.",
						"japanese": "...ちくしょう。",
						"chinese": "……该死。",
						"french": "...Bon sang.",
						"spanish": "...Maldita sea.",
						"vietnamese": "...Chết tiệt.",
						"thai": "...ให้ตายสิ",
						"hindi": "...धिक्कार है।"
					},
					"speaker": "character_any",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"content": {
						"korean": "길은 없었다. 절벽 끝, 막다른 곳.",
						"english": "There was no path. A dead end at the cliff's edge.",
						"japanese": "道はなかった。崖の端、行き止まり。",
						"chinese": "没有路了。悬崖尽头，死路。",
						"french": "Il n'y avait pas de chemin. Une impasse au bord de la falaise.",
						"spanish": "No había camino. Un callejón sin salida al borde del acantilado.",
						"vietnamese": "Không có lối đi. Một ngõ cụt ở rìa vách đá.",
						"thai": "ไม่มีทางเดิน ปลายหน้าผา ทางตัน",
						"hindi": "कोई रास्ता नहीं था। चट्टान के किनारे पर एक बंद गली।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이건 함정이야!",
						"english": "This is a trap!",
						"japanese": "これは罠だ！",
						"chinese": "这是个陷阱！",
						"french": "C'est un piège !",
						"spanish": "¡Esto es una trampa!",
						"vietnamese": "Đây là một cái bẫy!",
						"thai": "นี่คือกับดัก!",
						"hindi": "यह एक जाल है!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "direction",
					"speaker": "drox",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "함정이 아니다. 새로운 시작일 뿐.",
						"english": "It's not a trap. Just a new beginning.",
						"japanese": "罠ではない。ただの新たな始まりだ。",
						"chinese": "这不是陷阱。只是一个新的开始。",
						"french": "Ce n'est pas un piège. Juste un nouveau départ.",
						"spanish": "No es una trampa. Solo un nuevo comienzo.",
						"vietnamese": "Đây không phải là một cái bẫy. Chỉ là một khởi đầu mới.",
						"thai": "ไม่ใช่กับดัก แค่จุดเริ่มต้นใหม่เท่านั้น",
						"hindi": "यह जाल नहीं है। बस एक नई शुरुआत है।"
					},
					"speaker": "drox",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "drox",
					"emotion": "base",
					"content": {
						"korean": "네가 원하는 것을 줄 수 있다. 그저… 반지를 쥐어라.",
						"english": "I can give you what you desire. Just… grasp the ring.",
						"japanese": "お前が望むものを与えよう。ただ… 指輪を握るのだ。",
						"chinese": "我能给你你所渴望的。只需… 握住戒指。",
						"french": "Je peux te donner ce que tu désires. Il suffit de… serrer l'anneau.",
						"spanish": "Puedo darte lo que deseas. Solo… sujeta el anillo.",
						"vietnamese": "Ta có thể ban cho ngươi điều ngươi muốn. Chỉ cần… nắm lấy chiếc nhẫn.",
						"thai": "ข้าให้เจ้าได้ในสิ่งที่เจ้าปรารถนา เพียงแค่… คว้าแหวนไว้",
						"hindi": "मैं तुम्हें वह दे सकता हूँ जो तुम चाहते हो। बस… अंगूठी पकड़ो।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"emotion": "base",
					"content": {
						"korean": "우리가 뭘 원한다고?",
						"english": "What do we desire?",
						"japanese": "我々が何を望むと？",
						"chinese": "我们渴望什么？",
						"french": "Que désirons-nous ?",
						"spanish": "¿Qué deseamos?",
						"vietnamese": "Chúng ta muốn gì?",
						"thai": "เราปรารถนาอะไร?",
						"hindi": "हम क्या चाहते हैं?"
					}
				},
				{
					"content": {
						"korean": "잃어버린 것을 되찾는 힘. 너희의 복수심. 바로 그거다.",
						"english": "The power to reclaim what was lost. Your thirst for vengeance. That is it.",
						"japanese": "失われたものを取り戻す力。お前たちの復讐心。それこそが。",
						"chinese": "找回失去之物的力量。你们的复仇心。就是它。",
						"french": "Le pouvoir de récupérer ce qui a été perdu. Votre soif de vengeance. C'est ça.",
						"spanish": "El poder de recuperar lo perdido. Vuestra sed de venganza. Eso es.",
						"vietnamese": "Sức mạnh để giành lại những gì đã mất. Khát vọng báo thù của ngươi. Chính là nó.",
						"thai": "พลังที่จะนำสิ่งที่สูญเสียไปกลับคืนมา ความกระหายในการแก้แค้นของพวกเจ้า นั่นแหละ",
						"hindi": "जो खो गया, उसे वापस पाने की शक्ति। तुम्हारी प्रतिशोध की प्यास। बस वही।"
					},
					"speaker": "drox",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "…!",
						"english": "…!",
						"japanese": "…！",
						"chinese": "…！",
						"french": "…!",
						"spanish": "…!",
						"vietnamese": "…!",
						"thai": "…!",
						"hindi": "…!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "시간이 없다. 선택해라.",
						"english": "No time. Choose.",
						"japanese": "時間はない。選べ。",
						"chinese": "时间不多了。选择吧。",
						"french": "Plus de temps. Choisis.",
						"spanish": "No hay tiempo. Elige.",
						"vietnamese": "Không còn thời gian. Chọn đi.",
						"thai": "ไม่มีเวลาแล้ว เลือกซะ",
						"hindi": "समय नहीं है। चुनो।"
					},
					"speaker": "drox",
					"emotion": "base"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "거대한 어둠이 모든 것을 집어삼켰다.",
						"english": "A colossal darkness consumed all.",
						"japanese": "巨大な闇が、すべてを飲み込んだ。",
						"chinese": "巨大的黑暗吞噬了一切。",
						"french": "Une obscurité gigantesque engloutit tout.",
						"spanish": "Una oscuridad inmensa lo devoró todo.",
						"vietnamese": "Bóng tối khổng lồ nuốt chửng mọi thứ.",
						"thai": "ความมืดมิดอันยิ่งใหญ่กลืนกินทุกสิ่ง",
						"hindi": "एक विशाल अंधकार ने सब कुछ निगल लिया।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "하찮은 것들… 내 영역을 침범한 벌이다.",
						"english": "Insignificant wretches... This is your punishment for trespassing on my domain.",
						"japanese": "くだらぬ者ども… 我が領域を侵した罰だ。",
						"chinese": "渺小的东西… 这是你们侵犯我领域的惩罚。",
						"french": "Misérables créatures... Ceci est la punition pour avoir envahi mon domaine.",
						"spanish": "Seres insignificantes... Este es el castigo por invadir mi dominio.",
						"vietnamese": "Bọn phàm tục… Đây là hình phạt cho việc xâm phạm lãnh địa của ta.",
						"thai": "เจ้าพวกกระจอก… นี่คือบทลงโทษที่บังอาจบุกรุกอาณาเขตของข้า",
						"hindi": "तुच्छ प्राणी… यह मेरे क्षेत्र का उल्लंघन करने का दंड है।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "…아직 끝나지 않았어.",
						"english": "...It's not over yet.",
						"japanese": "…まだ終わっていない。",
						"chinese": "…还没结束。",
						"french": "...Ce n'est pas encore fini.",
						"spanish": "...Todavía no ha terminado.",
						"vietnamese": "…Vẫn chưa kết thúc đâu.",
						"thai": "…ยังไม่จบแค่นี้",
						"hindi": "…अभी खत्म नहीं हुआ है।"
					},
					"type": "speech"
				},
				{
					"type": "direction",
					"speaker": "drox",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "아직 기회는 있다. 반지를 쥐어라. 그러면… 다음에는 이길 수 있다.",
						"english": "There's still a chance. Grasp the ring. Then... next time, you can win.",
						"japanese": "まだ機会はある。指輪を掴め。そうすれば…次は勝てる。",
						"chinese": "还有机会。抓住戒指。那么…下次就能赢。",
						"french": "Il y a encore une chance. Saisis l'anneau. Alors... la prochaine fois, tu pourras gagner.",
						"spanish": "Todavía hay una oportunidad. Agarra el anillo. Entonces... la próxima vez, podrás ganar.",
						"vietnamese": "Vẫn còn cơ hội. Nắm lấy chiếc nhẫn. Vậy thì… lần tới ngươi có thể thắng.",
						"thai": "ยังมีโอกาส จับแหวนไว้สิ แล้ว…ครั้งหน้าเจ้าจะชนะ",
						"hindi": "अभी भी मौका है। अंगूठी पकड़ो। फिर… अगली बार, तुम जीत सकते हो।"
					},
					"speaker": "drox",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "시끄러워!",
						"english": "Shut up!",
						"japanese": "うるさい！",
						"chinese": "闭嘴!",
						"french": "Tais-toi !",
						"spanish": "¡Cállate!",
						"vietnamese": "Im đi!",
						"thai": "หุบปาก!",
						"hindi": "चुप रहो!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "절벽 아래, 거대한 어둠이 형체를 드러냈다.",
						"english": "Beneath the cliff, a colossal shadow took form.",
						"japanese": "崖の下、巨大な闇が姿を現した。",
						"chinese": "悬崖之下，巨大的黑暗显露出形体。",
						"french": "Sous la falaise, une ombre colossale prit forme.",
						"spanish": "Bajo el acantilado, una sombra colosal tomó forma.",
						"vietnamese": "Dưới vách đá, một bóng tối khổng lồ hiện hình.",
						"thai": "ใต้หน้าผา เงาอันมหึมาได้ปรากฏขึ้น",
						"hindi": "चट्टान के नीचे, एक विशाल अंधकार ने आकार लिया।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "감히… 여기까지 왔나.",
						"english": "Dare you… come this far.",
						"japanese": "よくも… ここまで来たな。",
						"chinese": "竟敢… 到此为止吗。",
						"french": "Oses-tu… venir jusqu'ici.",
						"spanish": "¿Te atreves… a llegar hasta aquí?",
						"vietnamese": "Ngươi dám… đến tận đây sao.",
						"thai": "กล้าดี… มาถึงนี่รึ",
						"hindi": "क्या तुम… यहाँ तक आने की हिम्मत करते हो।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "네가 이 길을 막은 거야?",
						"english": "Did you block this path?",
						"japanese": "お前がこの道を塞いだのか？",
						"chinese": "是你阻挡了这条路吗？",
						"french": "As-tu bloqué ce chemin ?",
						"spanish": "¿Bloqueaste este camino?",
						"vietnamese": "Ngươi đã chặn con đường này sao?",
						"thai": "เจ้าเป็นคนขวางทางนี้รึ?",
						"hindi": "क्या तुमने यह रास्ता रोका है?"
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "내 영역에 들어온 대가다. 사라져라.",
						"english": "This is the price for entering my domain. Vanish.",
						"japanese": "我が領域に入った代償だ。消え失せろ。",
						"chinese": "这是你闯入我领域的代价。消失吧。",
						"french": "C'est le prix à payer pour être entré dans mon domaine. Disparais.",
						"spanish": "Este es el precio por entrar en mi dominio. Desaparece.",
						"vietnamese": "Đây là cái giá khi bước vào lãnh địa của ta. Biến đi.",
						"thai": "นี่คือค่าตอบแทนสำหรับการเข้ามาในอาณาเขตของข้า จงหายไปซะ",
						"hindi": "यह मेरे क्षेत्र में प्रवेश करने का परिणाम है। गायब हो जाओ।"
					},
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"action": "enter",
					"type": "direction",
					"speaker": "drox"
				},
				{
					"content": {
						"korean": "서둘러라. 반지의 힘이… 널 지켜줄 것이다.",
						"english": "Hurry. The power of the ring… will protect you.",
						"japanese": "急げ。指輪の力が… お前を守るだろう。",
						"chinese": "快点。戒指的力量… 会保护你的。",
						"french": "Dépêche-toi. Le pouvoir de l'anneau… te protégera.",
						"spanish": "Date prisa. El poder del anillo… te protegerá.",
						"vietnamese": "Nhanh lên. Sức mạnh của chiếc nhẫn… sẽ bảo vệ ngươi.",
						"thai": "รีบเข้า พลังของแหวน… จะปกป้องเจ้า",
						"hindi": "जल्दी करो। अंगूठी की शक्ति… तुम्हारी रक्षा करेगी।"
					},
					"speaker": "drox",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "그딴 힘은 필요 없어!",
						"english": "I don't need that power!",
						"japanese": "そんな力は不要だ！",
						"chinese": "我不需要那种力量！",
						"french": "Je n'ai pas besoin de ce pouvoir !",
						"spanish": "¡No necesito ese poder!",
						"vietnamese": "Ta không cần sức mạnh đó!",
						"thai": "ข้าไม่ต้องการพลังแบบนั้น!",
						"hindi": "मुझे ऐसी शक्ति नहीं चाहिए!"
					},
					"type": "speech"
				},
				{
					"action": "exit",
					"duration_ms": 400,
					"direction": "down",
					"speaker": "drox",
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "물러서지 않아!",
						"english": "I won't back down!",
						"japanese": "退かない！",
						"chinese": "我不会退缩！",
						"french": "Je ne reculerai pas !",
						"spanish": "¡No me rendiré!",
						"vietnamese": "Ta sẽ không lùi bước!",
						"thai": "ข้าจะไม่ถอย!",
						"hindi": "मैं पीछे नहीं हटूंगा!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "sad",
					"content": {
						"korean": "크윽… 이대로 끝날 줄 아나… 결국… 넌 그 힘을 쓰게 될 거다…",
						"english": "Ugh... Think this is the end? In the end... you WILL use that power...",
						"japanese": "ぐうっ… これで終わると思うか… 結局… お前はその力を使うことになる…",
						"chinese": "呃…你以为这就结束了吗…终有一天…你会使用那种力量的…",
						"french": "Ugh... Tu crois que c'est la fin ? Au final... tu finiras par utiliser ce pouvoir...",
						"spanish": "Ugh... ¿Crees que esto termina aquí? Al final... usarás ese poder...",
						"vietnamese": "Khặc… Ngươi nghĩ mọi chuyện sẽ kết thúc ở đây sao… Rồi cuối cùng… ngươi cũng sẽ dùng đến sức mạnh đó thôi…",
						"thai": "อึ๊ก… คิดว่าจะจบแค่นี้รึ… ท้ายที่สุด… เจ้าก็จะต้องใช้พลังนั้น…",
						"hindi": "उफ़… तुम्हें क्या लगता है, यह यहीं खत्म हो जाएगा… आख़िरकार… तुम्हें उस शक्ति का उपयोग करना ही पड़ेगा…"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "헛소리 마!",
						"english": "Nonsense!",
						"japanese": "戯言を言うな！",
						"chinese": "胡说八道！",
						"french": "Ne dis pas de bêtises !",
						"spanish": "¡Tonterías!",
						"vietnamese": "Đừng nói nhảm!",
						"thai": "เหลวไหล!",
						"hindi": "बकवास बंद करो!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "드록스의 그림자가 다시 다가왔다. 그의 손가락엔 반지가 늘어나 있었다.",
						"english": "Drox's shadow loomed once more. Rings now adorned his fingers.",
						"japanese": "ドロックスの影が再び迫る。彼の指には、指輪が増えていた。",
						"chinese": "德罗克斯的阴影再次逼近。他的手指上，戒指越来越多。",
						"french": "L'ombre de Drox se rapprocha de nouveau. Des anneaux s'étaient multipliés à ses doigts.",
						"spanish": "La sombra de Drox se acercó de nuevo. Anillos crecían en sus dedos.",
						"vietnamese": "Bóng tối của Drox lại một lần nữa ập đến. Nhẫn đã mọc đầy trên ngón tay hắn.",
						"thai": "เงาของดรอกซ์คืบคลานเข้ามาอีกครั้ง วงแหวนเพิ่มขึ้นบนนิ้วของเขา",
						"hindi": "ड्रोक्स की परछाई फिर से नज़दीक आई। उसकी उंगलियों पर छल्ले बढ़ गए थे।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "더 깊은 유혹 속으로. 탐험대는 과연— 그 선택을 피할 수 있을까?",
						"english": "Into deeper temptation. Can the expedition truly avoid that choice?",
						"japanese": "より深い誘惑の中へ。探検隊は果たして—その選択を避けられるのか？",
						"chinese": "陷入更深的诱惑之中。探险队果真——能避开那个选择吗？",
						"french": "Vers une tentation plus profonde. L'expédition pourra-t-elle — éviter ce choix ?",
						"spanish": "¿Podrá la expedición evitar esa elección?",
						"vietnamese": "Chìm sâu vào cám dỗ. Liệu đội thám hiểm có thể — tránh được lựa chọn đó không?",
						"thai": "เข้าสู่ห้วงแห่งการล่อลวงที่ลึกซึ้งยิ่งขึ้น ทีมสำรวจจะสามารถหลีกเลี่ยงทางเลือกนั้นได้หรือไม่?",
						"hindi": "और गहरे प्रलोभन में। क्या अभियान दल—उस चुनाव से बच पाएगा?"
					},
					"type": "speech"
				}
			]
		}
	]
} as const;
