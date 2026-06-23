export const scenario_snowy_wyrdgale_13_02 = {
	"scenario_id": "snowy_wyrdgale_13_02",
	"order": 2,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"finn": {
			"id": "mon_3e3930d2-c2d3-4ad0-9818-26d259edac77",
			"name": {
				"korean": "핀",
				"english": "Finn",
				"japanese": "フィン",
				"chinese": "芬恩",
				"french": "Finn",
				"spanish": "Finn",
				"vietnamese": "Finn",
				"thai": "ฟินน์",
				"hindi": "फिन"
			},
			"description": "",
			"face_image_url": "",
			"battle_sprite_url": ""
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
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "얼음 미로에 갇혔다. 거대한 균열이 사방에서 뻗어 나갔다.",
						"english": "Trapped in an ice labyrinth. Huge cracks spread everywhere.",
						"japanese": "氷の迷宮に閉じ込められた。巨大な亀裂があらゆる方向に広がっていた。",
						"chinese": "被困在冰之迷宫里。巨大的裂缝向四面八方蔓延。",
						"french": "Piégé dans un labyrinthe de glace. D'énormes fissures s'étendaient partout.",
						"spanish": "Atrapado en un laberinto de hielo. Enormes grietas se extendían por todas partes.",
						"vietnamese": "Bị mắc kẹt trong mê cung băng. Những vết nứt khổng lồ lan ra khắp nơi.",
						"thai": "ติดอยู่ในเขาวงกตน้ำแข็ง รอยแตกขนาดใหญ่แผ่ขยายไปทุกทิศทาง",
						"hindi": "बर्फ़ की भूलभुलैया में फंसा हुआ। हर जगह बड़ी-बड़ी दरारें फैल गईं।"
					}
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "빙하 붕괴의 카운트다운은 멈추지 않았다.",
						"english": "The glacier collapse countdown continued relentlessly.",
						"japanese": "氷河崩壊のカウントダウンは止まらなかった。",
						"chinese": "冰川崩塌的倒计时没有停止。",
						"french": "Le compte à rebours de l'effondrement du glacier ne s'arrêtait pas.",
						"spanish": "La cuenta atrás del colapso del glaciar no se detuvo.",
						"vietnamese": "Đếm ngược sự sụp đổ của sông băng không ngừng lại.",
						"thai": "การนับถอยหลังการล่มสลายของธารน้ำแข็งไม่หยุดยั้ง",
						"hindi": "ग्लेशियर के ढहने की उलटी गिनती नहीं रुकी।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "여기가 어디야? 벌써 무너지고 있어!",
						"english": "Where am I? It's already falling apart!",
						"japanese": "ここどこだ？もう崩れてる！",
						"chinese": "这是哪儿？已经塌了！",
						"french": "Où suis-je ? Ça s'effondre déjà !",
						"spanish": "¿Dónde estoy? ¡Ya se está desmoronando!",
						"vietnamese": "Đây là đâu? Nó đã sụp đổ rồi!",
						"thai": "นี่มันที่ไหนเนี่ย? มันกำลังพังลงมาแล้ว!",
						"hindi": "मैं कहाँ हूँ? यह पहले ही गिर रहा है!"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"speaker": "finn"
				},
				{
					"type": "speech",
					"speaker": "finn",
					"content": {
						"korean": "젠장, 발 디딜 틈도 없잖아! 여기가 지옥인가?",
						"english": "Damn it, there's no solid ground! Is this hell?",
						"japanese": "ちくしょう、足場がないじゃないか！ここは地獄か？",
						"chinese": "该死，连个落脚的地方都没有！这里是地狱吗？",
						"french": "Bon sang, il n'y a pas un seul endroit où poser le pied ! C'est l'enfer ici ?",
						"spanish": "¡Maldita sea, no hay dónde pisar! ¿Esto es el infierno?",
						"vietnamese": "Chết tiệt, không có chỗ nào để đặt chân! Đây là địa ngục sao?",
						"thai": "บ้าเอ้ย! ไม่มีที่ให้ยืนเลย! ที่นี่มันนรกเหรอ?",
						"hindi": "धिक्कार है, पैर रखने की जगह नहीं है! क्या यह नर्क है?"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "저기 봐. 이상한 얼음 조각상들이.",
						"english": "Look over there. Strange ice sculptures.",
						"japanese": "あれ見て。変な氷の彫像が。",
						"chinese": "看那边。奇怪的冰雕。",
						"french": "Regarde là-bas. D'étranges sculptures de glace.",
						"spanish": "Mira allí. Extrañas esculturas de hielo.",
						"vietnamese": "Nhìn kìa. Những bức tượng băng kỳ lạ.",
						"thai": "ดูนั่นสิ รูปปั้นน้ำแข็งประหลาดๆ",
						"hindi": "उधर देखो। अजीबोगरीब बर्फ़ की मूर्तियाँ।"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "finn",
					"content": {
						"korean": "뭐야, 저 흉측한 건? 대체 누가 이런 걸 만들어놨어!",
						"english": "What's that hideous thing? Who the hell made this?!",
						"japanese": "何だよ、あの醜いのは？一体誰がこんなもの作ったんだ！",
						"chinese": "那是什么，那个丑陋的东西？到底是谁做了这种东西！",
						"french": "Qu'est-ce que c'est que cette horreur ? Qui diable a fait ça ?!",
						"spanish": "¿Qué es esa cosa horrible? ¡¿Quién demonios hizo esto?!",
						"vietnamese": "Cái quái gì vậy, thứ gớm ghiếc kia? Ai đã làm ra thứ này?!",
						"thai": "นั่นมันอะไรกัน สิ่งที่น่าเกลียดน่ากลัวนั่นน่ะ? ใครกันที่สร้างสิ่งแบบนี้ขึ้นมา!",
						"hindi": "वह बदसूरत चीज़ क्या है? आखिर किसने यह सब बनाया है!"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"speaker": "finn",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "finn",
					"content": {
						"korean": "빌어먹을 얼음덩어리들! 이거 길은 있는 거야?",
						"english": "Damn these ice blocks! Is there even a way out?",
						"japanese": "くそったれな氷の塊ども！これ道はあるのか？",
						"chinese": "该死的冰块！这有路吗？",
						"french": "Maudits blocs de glace ! Il y a un chemin ?",
						"spanish": "¡Malditos bloques de hielo! ¿Hay siquiera un camino?",
						"vietnamese": "Khối băng chết tiệt này! Có đường đi không vậy?",
						"thai": "ไอ้ก้อนน้ำแข็งบ้าเอ้ย! นี่มันมีทางไปรึเปล่าเนี่ย?",
						"hindi": "इन बर्फीले टुकड़ों को धिक्कार है! क्या कोई रास्ता भी है?"
					},
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"speaker": "character_2",
					"content": {
						"korean": "카운트다운이 더 빨라진 것 같아요.",
						"english": "The countdown seems to be speeding up.",
						"japanese": "カウントダウンが速くなってるみたい。",
						"chinese": "倒计时好像更快了。",
						"french": "Le compte à rebours s'accélère, j'ai l'impression.",
						"spanish": "El conteo regresivo parece estar acelerándose.",
						"vietnamese": "Đếm ngược hình như nhanh hơn rồi.",
						"thai": "ดูเหมือนการนับถอยหลังจะเร็วขึ้น",
						"hindi": "लगता है उलटी गिनती तेज़ हो गई है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "finn",
					"content": {
						"korean": "이러다 얼음 똥으로 변하는 거 아니야? 망할!",
						"english": "Are we gonna turn into ice turds? Damn it!",
						"japanese": "このままじゃ氷のうんこになっちまうぞ？クソッ！",
						"chinese": "这样下去我们不会变成冰屎吧？该死！",
						"french": "On va finir en glaçons de merde, non ? Merde !",
						"spanish": "¿No nos iremos a convertir en mierda de hielo? ¡Maldita sea!",
						"vietnamese": "Thế này có khi biến thành cục phân băng mất? Chết tiệt!",
						"thai": "แบบนี้จะไม่กลายเป็นอึน้ำแข็งเหรอ? ให้ตายสิ!",
						"hindi": "क्या हम बर्फ के ढेर में बदल जाएँगे? धत् तेरे की!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이 조각상들, 뭔가… 비웃는 것 같아.",
						"english": "These statues... they seem to be mocking us.",
						"japanese": "この彫像たち、なんか…嘲笑ってるみたい。",
						"chinese": "这些雕像，总觉得…好像在嘲笑我。",
						"french": "Ces statues... elles ont l'air de se moquer de nous.",
						"spanish": "Estas estatuas... parece que se están burlando.",
						"vietnamese": "Mấy bức tượng này, hình như… đang cười nhạo.",
						"thai": "รูปปั้นพวกนี้... ดูเหมือนจะเยาะเย้ยเรา",
						"hindi": "ये मूर्तियाँ, कुछ… मज़ाक उड़ा रही हैं।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "finn",
					"content": {
						"korean": "누군지는 몰라도 아주 악취미군. 이걸 만든 놈은 얼음 몽둥이로 맞아봐야 정신 차리지!",
						"english": "Whoever made these has terrible taste. That bastard needs a good beating with an ice club to come to their senses!",
						"japanese": "誰が作ったか知らないけど、とんでもない悪趣味だな。これ作った奴は氷の棒でぶん殴ってやらないと気が済まない！",
						"chinese": "不管是谁，品味真是差劲。做这玩意儿的家伙，该用冰棍子狠狠揍一顿才能清醒！",
						"french": "Je ne sais pas qui, mais quel mauvais goût. Celui qui a fait ça mérite de se faire frapper avec une matraque de glace pour se calmer !",
						"spanish": "No sé quién, pero tiene un gusto terrible. ¡El que hizo esto debería ser golpeado con un garrote de hielo para que entre en razón!",
						"vietnamese": "Không biết là ai nhưng đúng là sở thích tệ hại. Thằng nào làm ra cái này phải ăn gậy băng mới tỉnh ra được!",
						"thai": "ไม่รู้ว่าใคร แต่รสนิยมแย่มาก ไอ้คนทำนี่ต้องโดนไม้หนาวฟาดให้สำนึก!",
						"hindi": "पता नहीं कौन है, पर कितना खराब स्वाद है। जिसने भी ये बनाया है, उसे बर्फ़ के डंडे से मारना चाहिए ताकि उसे अक्ल आए!"
					},
					"emotion": "angry",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "finn",
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						3
					]
				},
				{
					"emotion": "angry",
					"speaker": "finn",
					"content": {
						"korean": "아놔, 또 저 거지 같은 조각상이잖아! 누가 죽기 전에 저놈의 면상 좀 보고 싶다!",
						"english": "Oh for crying out loud, it's that damn crappy statue again! I wanna see that bastard's face before I die!",
						"japanese": "あーもう、またあのクソみたいな彫像か！誰か、死ぬ前にあの野郎の顔が見たい！",
						"chinese": "啊呀，又是那破雕像！谁能让我死前看看那家伙的真面目！",
						"french": "Oh non, encore cette satanée statue pourrie ! Je veux voir la tronche de ce salaud avant de mourir !",
						"spanish": "¡Ay, no, otra vez esa maldita estatua de mierda! ¡Quiero ver la cara de ese imbécil antes de morir!",
						"vietnamese": "Trời ơi, lại cái tượng khốn nạn đó nữa! Ai đó cho tôi xem mặt thằng cha đó trước khi tôi chết đi!",
						"thai": "โอ้ย ไม่นะ รูปปั้นขยะนั่นอีกแล้ว! ใครก็ได้ ฉันอยากเห็นหน้าไอ้คนนั้นก่อนตาย!",
						"hindi": "उफ़, फिर वही घटिया मूर्ति! मरने से पहले उस कमीने का चेहरा देखना चाहता हूँ!"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "character_3",
					"content": {
						"korean": "이 조각상들, 어딘가… 슬퍼 보여요.",
						"english": "These statues... they look somewhat sad.",
						"japanese": "この彫像たち、なんだか…悲しそうに見える。",
						"chinese": "这些雕像，总觉得…有些悲伤。",
						"french": "Ces statues... elles ont l'air un peu tristes.",
						"spanish": "Estas estatuas... de alguna manera... se ven tristes.",
						"vietnamese": "Mấy bức tượng này, ở đâu đó… trông thật buồn.",
						"thai": "รูปปั้นพวกนี้... ดูเศร้าๆ นะ",
						"hindi": "ये मूर्तियाँ, कहीं न कहीं… उदास दिख रही हैं।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "조각상들의 표정은 과거의 비극을, 뒤틀린 채 담고 있었다.",
						"english": "The statues' expressions twistedly contained a past tragedy.",
						"japanese": "彫像たちの表情は、過去の悲劇を歪んだまま宿していた。",
						"chinese": "雕像们的表情，扭曲地承载着过去的悲剧。",
						"french": "Les expressions des statues contenaient, déformées, une tragédie passée.",
						"spanish": "Las expresiones de las estatuas contenían, de forma distorsionada, una tragedia del pasado.",
						"vietnamese": "Biểu cảm của các bức tượng chứa đựng một bi kịch trong quá khứ, một cách méo mó.",
						"thai": "สีหน้าของรูปปั้นแฝงไว้ซึ่งโศกนาฏกรรมในอดีตที่บิดเบี้ยว",
						"hindi": "मूर्तियों के भावों में, अतीत की त्रासदी विकृत रूप से समाहित थी।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "finn",
					"content": {
						"korean": "웃기지 마! 저건 그냥 쓰레기야! 짜증 난다고!",
						"english": "Don't make me laugh! Those are just trash! It's infuriating!",
						"japanese": "ふざけるな！あれはただのゴミだ！イライラする！",
						"chinese": "别逗了！那只是垃圾！烦死了！",
						"french": "Ne me fais pas rire ! Ce n'est que des déchets ! C'est énervant !",
						"spanish": "¡No me hagas reír! ¡Eso es solo basura! ¡Qué fastidio!",
						"vietnamese": "Đừng có đùa! Mấy cái đó chỉ là rác thôi! Phát cáu!",
						"thai": "อย่ามาตลกน่า! พวกนั้นมันก็แค่ขยะ! น่าหงุดหงิดจะตาย!",
						"hindi": "हँसाओ मत! वह बस कूड़ा है! गुस्सा आ रहा है!"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "시간이 없어요. 빨리 출구를 찾아야 해.",
						"english": "There's no time. We need to find the exit quickly.",
						"japanese": "時間がない。早く出口を見つけないと。",
						"chinese": "没时间了。得赶紧找到出口。",
						"french": "Il n'y a pas de temps. Il faut trouver la sortie vite.",
						"spanish": "No hay tiempo. Tenemos que encontrar la salida rápido.",
						"vietnamese": "Không còn thời gian. Phải nhanh chóng tìm lối ra.",
						"thai": "ไม่มีเวลาแล้ว ต้องรีบหาทางออก",
						"hindi": "समय नहीं है। हमें जल्दी से निकास ढूँढना होगा।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "finn",
					"content": {
						"korean": "출구? 지랄! 여기 빠져나가면 바로 술 마실 거야! 맥주!",
						"english": "Exit? Bullshit! Once I get out of here, I'm drinking! Beer!",
						"japanese": "出口？ふざけんな！ここを抜け出したら、すぐに酒を飲むぞ！ビール！",
						"chinese": "出口？放屁！等我出去，立刻去喝酒！啤酒！",
						"french": "La sortie ? N'importe quoi ! Dès que je sors d'ici, je bois ! De la bière !",
						"spanish": "¿Salida? ¡Tonterías! ¡En cuanto salga de aquí, voy a beber! ¡Cerveza!",
						"vietnamese": "Lối ra? Vớ vẩn! Thoát khỏi đây là tôi đi uống rượu ngay! Bia!",
						"thai": "ทางออก? บ้าบอ! ถ้าออกไปได้ ฉันจะดื่มเหล้าทันที! เบียร์!",
						"hindi": "निकास? बकवास! यहाँ से निकलते ही मैं शराब पीऊँगा! बीयर!"
					},
					"emotion": "angry"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"speaker": "finn"
				},
				{
					"type": "speech",
					"speaker": "finn",
					"content": {
						"korean": "젠장, 젠장, 젠장! 여긴 끝도 없는 얼음 감옥이라고!",
						"english": "Damn, damn, damn! This is an endless ice prison!",
						"japanese": "くそ、くそ、くそ！ここは果てしない氷の監獄だ！",
						"chinese": "该死，该死，该死！这里是无尽的冰牢！",
						"french": "Merde, merde, merde ! C'est une prison de glace sans fin !",
						"spanish": "¡Maldita sea, maldita sea, maldita sea! ¡Esto es una prisión de hielo interminable!",
						"vietnamese": "Chết tiệt, chết tiệt, chết tiệt! Đây là một nhà tù băng vô tận!",
						"thai": "แย่แล้ว แย่แล้ว แย่แล้ว! นี่มันคุกน้ำแข็งที่ไม่มีที่สิ้นสุด!",
						"hindi": "धिक्कार है, धिक्कार है, धिक्कार है! यह एक अंतहीन बर्फ़ीली जेल है!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_4",
					"content": {
						"korean": "미로가 거의 다 무너졌어요. 이제 돌아갈 수 없어.",
						"english": "The maze has almost collapsed. There's no turning back now.",
						"japanese": "迷宮はほとんど崩壊した。もう後戻りはできない。",
						"chinese": "迷宫几乎完全坍塌了。现在回不去了。",
						"french": "Le labyrinthe s'est presque effondré. On ne peut plus revenir en arrière.",
						"spanish": "El laberinto casi se ha derrumbado. Ya no hay vuelta atrás.",
						"vietnamese": "Mê cung gần như đã sụp đổ. Không thể quay lại được nữa.",
						"thai": "เขาวงกตเกือบพังทลายหมดแล้ว ตอนนี้กลับไปไม่ได้แล้ว",
						"hindi": "भूलभुलैया लगभग ढह गई है। अब वापस नहीं जा सकते।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "finn",
					"content": {
						"korean": "돌아가? 돌아가긴 어딜 돌아가! 난 살아서 이 빌어먹을 미로를 빠져나갈 거라고!",
						"english": "Go back? Go back where?! I'm getting out of this damned maze alive!",
						"japanese": "戻る？どこに？俺は生きてこの忌まわしき迷宮を抜け出すぞ！",
						"chinese": "回去？回哪儿去！我要活着离开这个该死的迷宫！",
						"french": "Revenir ? Revenir où ?! Je vais sortir vivant de ce maudit labyrinthe !",
						"spanish": "¿Volver? ¿Volver adónde? ¡Voy a salir vivo de este maldito laberinto!",
						"vietnamese": "Quay lại? Quay lại đâu chứ! Ta sẽ sống sót thoát khỏi mê cung chết tiệt này!",
						"thai": "กลับไป? กลับไปไหน! ฉันจะออกไปจากเขาวงกตที่บัดซบนี่ให้ได้ทั้งเป็น!",
						"hindi": "वापस जाऊँ? कहाँ वापस जाऊँ! मैं ज़िंदा इस शापित भूलभुलैया से निकलूँगा!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "저 조각상에서… 희미한 한기가 느껴져.",
						"english": "From that statue... I feel a faint chill.",
						"japanese": "あの彫像から… 微かな寒気がする。",
						"chinese": "从那座雕像… 感觉到了微弱的寒气。",
						"french": "De cette statue... je ressens un léger frisson.",
						"spanish": "De esa estatua... siento un escalofrío tenue.",
						"vietnamese": "Từ bức tượng đó... ta cảm thấy một luồng khí lạnh mờ nhạt.",
						"thai": "จากรูปปั้นนั้น… สัมผัสได้ถึงความหนาวเย็นจางๆ",
						"hindi": "उस मूर्ति से… हल्की सी ठंडक महसूस हो रही है।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "finn",
					"content": {
						"korean": "피? 개소리 마! 저 놈은 그냥 얼음이야!",
						"english": "Blood? Don't talk nonsense! That thing is just ice!",
						"japanese": "血？馬鹿なこと言うな！あれはただの氷だ！",
						"chinese": "血？别胡说八道！那东西就只是冰！",
						"french": "Du sang ? Ne dis pas n'importe quoi ! Cette chose n'est que de la glace !",
						"spanish": "¿Sangre? ¡No digas tonterías! ¡Esa cosa es solo hielo!",
						"vietnamese": "Máu? Đừng nói nhảm! Nó chỉ là băng thôi!",
						"thai": "เลือด? อย่าพูดไร้สาระ! เจ้านั่นมันก็แค่น้ำแข็ง!",
						"hindi": "खून? बकवास मत करो! वह तो बस बर्फ है!"
					},
					"type": "speech"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "얼음의 감옥은 다시 그들을 가두었다.",
						"english": "The prison of ice confined them once more.",
						"japanese": "氷の監獄は再び彼らを閉じ込めた。",
						"chinese": "冰之牢狱再次将他们囚禁。",
						"french": "La prison de glace les enferma de nouveau.",
						"spanish": "La prisión de hielo los confinó una vez más.",
						"vietnamese": "Nhà tù băng giá lại giam giữ họ.",
						"thai": "คุกน้ำแข็งได้ขังพวกเขาไว้อีกครั้ง",
						"hindi": "बर्फ की जेल ने उन्हें फिर से कैद कर लिया।"
					},
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "하찮은 것들… 내 미로는 영원히 계속될 것이다. 영원히!",
						"english": "Insignificant fools... My labyrinth will endure forever. Forever!",
						"japanese": "取るに足らない者ども…我が迷宮は永遠に続く。永遠に！",
						"chinese": "卑微的蝼蚁……我的迷宫将永远持续下去。永远！",
						"french": "Créatures insignifiantes... Mon labyrinthe durera éternellement. Éternellement !",
						"spanish": "Insignificantes... Mi laberinto continuará para siempre. ¡Para siempre!",
						"vietnamese": "Những kẻ tầm thường... Mê cung của ta sẽ tồn tại mãi mãi. Mãi mãi!",
						"thai": "พวกไร้ค่า... เขาวงกตของข้าจะคงอยู่ตลอดไป ตลอดไป!",
						"hindi": "तुच्छ प्राणी... मेरी भूलभुलैया हमेशा रहेगी। हमेशा!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "finn",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "finn",
					"content": {
						"korean": "젠장… 빌어먹을! 다음엔 기필코 저 얼음 덩어리를 부숴버릴 거야!",
						"english": "Damn it... Blast it! Next time, I swear I'll smash that ice chunk!",
						"japanese": "くそ…ちくしょう！次は必ずあの氷の塊をぶっ壊してやる！",
						"chinese": "可恶……该死的！下次我一定要把那冰块彻底粉碎！",
						"french": "Maudits... Bon sang ! La prochaine fois, je jure que je briserai ce bloc de glace !",
						"spanish": "¡Maldita sea... demonios! ¡La próxima vez, juro que destrozaré ese pedazo de hielo!",
						"vietnamese": "Chết tiệt... Khốn kiếp! Lần tới, ta nhất định sẽ đập nát cục băng đó!",
						"thai": "บ้าเอ๊ย... ให้ตายสิ! ครั้งหน้า ข้าจะทุบก้อนน้ำแข็งนั่นให้แตกเป็นเสี่ยงๆ!",
						"hindi": "धिक्कार है... शापित! अगली बार, मैं उस बर्फ के टुकड़े को ज़रूर तोड़ दूंगा!"
					}
				}
			],
			"win_dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "얼음 미로를 지배하던 존재가 쓰러졌다.",
						"english": "The entity that ruled the ice labyrinth has fallen.",
						"japanese": "氷の迷宮を支配していた存在が倒れた。",
						"chinese": "统治冰之迷宫的存在倒下了。",
						"french": "L'entité qui régnait sur le labyrinthe de glace est tombée.",
						"spanish": "La entidad que gobernaba el laberinto de hielo ha caído.",
						"vietnamese": "Thực thể thống trị mê cung băng giá đã gục ngã.",
						"thai": "สิ่งมีชีวิตที่ปกครองเขาวงกตน้ำแข็งได้ล้มลงแล้ว",
						"hindi": "बर्फ की भूलभुलैया पर राज करने वाली सत्ता गिर गई।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "크크큭… 이걸로 끝날 리가… 나의 분노는… 영원히….",
						"english": "Kekeke... This can't be the end... My wrath... forever...",
						"japanese": "ククク…これで終わるはずがない…我が怒りは…永遠に…。",
						"chinese": "呵呵呵……这不可能就此结束……我的愤怒……永不熄灭……",
						"french": "Héhéhé... Ce ne peut être la fin... Ma fureur... éternellement...",
						"spanish": "Jajaja... Esto no puede ser el fin... Mi ira... por siempre...",
						"vietnamese": "Khà khà khà... Chuyện này không thể kết thúc ở đây được... Cơn thịnh nộ của ta... mãi mãi...",
						"thai": "คิกๆๆ... นี่ไม่ใช่จุดจบ... ความโกรธแค้นของข้า... ชั่วนิรันดร์...",
						"hindi": "हँसता है... यह अंत नहीं हो सकता... मेरा क्रोध... हमेशा के लिए..."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "이게 대체… 무슨 의미야.",
						"english": "What in the world... does this mean?",
						"japanese": "一体これ…どういう意味だ。",
						"chinese": "这到底……是什么意思？",
						"french": "Mais qu'est-ce que... cela signifie ?",
						"spanish": "Pero qué... significa esto?",
						"vietnamese": "Cái này rốt cuộc... có nghĩa là gì?",
						"thai": "นี่มัน... หมายความว่าอะไรกันแน่?",
						"hindi": "इसका आखिर... क्या मतलब है।"
					}
				},
				{
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction",
					"speaker": "finn",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "finn",
					"content": {
						"korean": "끝은 무슨 끝! 아주 산산조각을 내버릴 거야!",
						"english": "End? What end! I'll shatter you to pieces!",
						"japanese": "終わりだと？何の終わりだ！粉々に砕いてやる！",
						"chinese": "什么结束！我把你碎尸万段！",
						"french": "La fin ? Quelle fin ! Je vais te briser en mille morceaux !",
						"spanish": "¡¿Fin?! ¡Qué fin! ¡Te haré pedazos!",
						"vietnamese": "Kết thúc? Kết thúc cái gì! Ta sẽ phá ngươi thành từng mảnh!",
						"thai": "จบอะไรเล่า! ข้าจะฉีกแกเป็นชิ้นๆ!",
						"hindi": "अंत कैसा अंत! मैं तुम्हें टुकड़े-टुकड़े कर दूंगा!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "미로의 얼음은 울부짖듯 갈라졌다. 하지만 진정한 어둠은 아직 깊은 곳에 있었다.",
						"english": "The labyrinth's ice cracked as if screaming. But the true darkness still lay deep within.",
						"japanese": "迷宮の氷は叫ぶようにひび割れた。しかし、真の闇はまだ深淵にあった。",
						"chinese": "迷宫的冰块如同悲鸣般裂开。然而，真正的黑暗仍深藏其中。",
						"french": "La glace du labyrinthe se fissura comme un hurlement. Mais la véritable obscurité reposait encore dans ses profondeurs.",
						"spanish": "El hielo del laberinto se resquebrajó como un lamento. Pero la verdadera oscuridad aún yacía en lo profundo.",
						"vietnamese": "Băng của mê cung nứt ra như tiếng gào thét. Nhưng bóng tối thực sự vẫn còn ẩn sâu bên trong.",
						"thai": "น้ำแข็งของเขาวงกตแตกแยกราวกับกรีดร้อง แต่ความมืดที่แท้จริงยังคงอยู่ในส่วนลึก",
						"hindi": "भूलभुलैया की बर्फ चीखती हुई दरक गई। लेकिन असली अंधेरा अभी भी गहराई में था।"
					},
					"emotion": "base"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "얼음 미로의 심장부. 그곳에서 모든 비명이 시작되었다.",
						"english": "The heart of the ice maze. It was there that all the screams began.",
						"japanese": "氷の迷宮の心臓部。そこで全ての悲鳴が始まった。",
						"chinese": "冰之迷宫的中心。所有尖叫都始于那里。",
						"french": "Le cœur du labyrinthe de glace. C'est là que tous les cris ont commencé.",
						"spanish": "El corazón del laberinto de hielo. Fue allí donde comenzaron todos los gritos.",
						"vietnamese": "Trái tim của mê cung băng giá. Nơi mọi tiếng thét bắt đầu.",
						"thai": "ใจกลางเขาวงกตน้ำแข็ง ณ ที่แห่งนั้น เสียงกรีดร้องทั้งหมดได้เริ่มต้นขึ้น",
						"hindi": "बर्फ़ीली भूलभुलैया का दिल। वहीं से सारी चीखें शुरू हुईं।"
					},
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "키히히… 여기도 길을 잃었나? 네놈들도 곧 작품이 되겠지.",
						"english": "Hee hee hee... Lost your way here too? You fools will soon become my works of art.",
						"japanese": "キーヒヒ…ここでも道に迷ったか？お前たちもすぐに作品になるだろう。",
						"chinese": "嘻嘻嘻… 这里也迷路了吗？你们这些家伙很快就会成为我的作品。",
						"french": "Hi hi hi... Vous vous êtes perdus ici aussi ? Vous aussi, vous deviendrez bientôt mes œuvres.",
						"spanish": "Ji ji ji... ¿También te perdiste aquí? Vosotros también seréis pronto mis obras.",
						"vietnamese": "Khì khì khì... Lạc đường đến đây rồi sao? Các ngươi cũng sẽ sớm trở thành tác phẩm của ta thôi.",
						"thai": "คิกๆๆ… หลงทางมาที่นี่ด้วยรึ? พวกแกก็จะกลายเป็นผลงานของข้าในไม่ช้า",
						"hindi": "ही ही ही… यहाँ भी रास्ता भटक गए? तुम लोग भी जल्द ही मेरी कलाकृति बनोगे।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "finn",
					"content": {
						"korean": "작품? 이 미친놈이! 저 흉측한 조각상들이 네 작품이냐?",
						"english": "Works of art? You madman! Are those grotesque statues your works?!",
						"japanese": "作品？この狂人め！あの醜悪な彫像がお前の作品なのか？",
						"chinese": "作品？你这个疯子！那些丑陋的雕像就是你的作品吗？",
						"french": "Des œuvres ? Espèce de fou ! Ces statues grotesques sont-elles tes œuvres ?!",
						"spanish": "¿Obras de arte? ¡Loco! ¡¿Esas estatuas grotescas son tus obras?!",
						"vietnamese": "Tác phẩm? Đồ điên này! Những bức tượng gớm ghiếc đó là tác phẩm của ngươi sao?",
						"thai": "ผลงาน? ไอ้คนบ้า! รูปปั้นอัปลักษณ์พวกนั้นคือผลงานของแกเรอะ!?",
						"hindi": "कलाकृति? तुम पागल हो! क्या वे भयंकर मूर्तियाँ तुम्हारी कलाकृतियाँ हैं?"
					},
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "내 고통을 담은 예술. 이해 못 할 걸? 너희 같은 미물들은.",
						"english": "Art infused with my pain. You insignificant beings wouldn't understand.",
						"japanese": "私の苦痛を込めた芸術。お前たちのような取るに足らない者には理解できないだろう？",
						"chinese": "融入我痛苦的艺术。你们这些微不足道的生物是无法理解的。",
						"french": "L'art imprégné de ma douleur. Vous, êtres insignifiants, ne comprendriez pas.",
						"spanish": "Arte infundido con mi dolor. Seres insignificantes como vosotros no lo entenderíais.",
						"vietnamese": "Nghệ thuật thấm đẫm nỗi đau của ta. Những kẻ hèn mọn như các ngươi sẽ không thể hiểu được đâu.",
						"thai": "ศิลปะที่อัดแน่นด้วยความเจ็บปวดของข้า พวกสิ่งมีชีวิตชั้นต่ำอย่างพวกแกคงไม่เข้าใจหรอก",
						"hindi": "मेरे दर्द से सजी कला। तुम जैसे तुच्छ प्राणी इसे समझ नहीं पाओगे।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "대체 무슨 짓을 하고 있는 거야!",
						"english": "What in the world are you doing?!",
						"japanese": "一体何を企んでいるんだ！",
						"chinese": "你到底在做什么！",
						"french": "Qu'est-ce que tu es en train de faire ?!",
						"spanish": "¡¿Qué demonios estás haciendo?!",
						"vietnamese": "Ngươi rốt cuộc đang làm cái quái gì vậy!",
						"thai": "แกกำลังทำอะไรกันแน่!",
						"hindi": "तुम आखिर कर क्या रहे हो!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "finn",
					"content": {
						"korean": "닥쳐, 이 미친 얼음 덩어리야! 네놈은 오늘 여기서 끝장이다!",
						"english": "Shut up, you crazy ice chunk! This is the end for you today!",
						"japanese": "黙れ、この狂った氷の塊め！貴様は今日ここで終わりだ！",
						"chinese": "闭嘴，你这疯冰块！你今天就到此为止了！",
						"french": "Tais-toi, sale bloc de glace fou ! C'est la fin pour toi aujourd'hui !",
						"spanish": "¡Cállate, pedazo de hielo loco! ¡Hoy es tu fin aquí!",
						"vietnamese": "Câm miệng, cục băng điên rồ này! Ngươi kết thúc tại đây hôm nay!",
						"thai": "หุบปากซะ เจ้าก้อนน้ำแข็งบ้า! แกจะจบสิ้นที่นี่วันนี้!",
						"hindi": "चुप कर, तू पागल बर्फ का टुकड़ा! आज तेरा अंत यहीं है!"
					},
					"emotion": "angry"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"얼어붙은 미로. 매 순간, 모든 것이 무너지고 있었다.",
			"카운트다운은 멈추지 않아. 발버둥 칠수록 더 깊이 가라앉았다.",
			"그곳에선 비명이 터져 나왔다. 광기에 얼어붙은 영혼의 절규가."
		],
		"english": [
			"Frozen labyrinth. Every moment, everything was crumbling.",
			"The countdown never stopped. The more I struggled, the deeper I sank.",
			"Screams erupted there. The wails of souls frozen in madness."
		],
		"japanese": [
			"凍りついた迷宮。毎瞬間、すべてが崩れ落ちていた。",
			"カウントダウンは止まらない。もがけばもがくほど、深く沈んでいった。",
			"そこでは悲鳴が上がった。狂気に凍りついた魂の叫びが。"
		],
		"chinese": [
			"冰冻的迷宫。每时每刻，一切都在崩塌。",
			"倒计时没有停止。越是挣扎，就陷得越深。",
			"那里爆发了尖叫声。那是被疯狂冻结的灵魂的哀嚎。"
		],
		"french": [
			"Labyrinthe gelé. À chaque instant, tout s'effondrait.",
			"Le compte à rebours ne s'arrêtait jamais. Plus je me débattais, plus je m'enfonçais.",
			"Des cris éclatèrent là-bas. Les hurlements d'âmes figées dans la folie."
		],
		"spanish": [
			"Laberinto congelado. A cada instante, todo se desmoronaba.",
			"La cuenta atrás nunca se detuvo. Cuanto más luchaba, más me hundía.",
			"Allí estallaron gritos. Los lamentos de almas congeladas en la locura."
		],
		"vietnamese": [
			"Mê cung đóng băng. Mỗi khoảnh khắc, mọi thứ đều sụp đổ.",
			"Đếm ngược không ngừng. Càng vùng vẫy, càng chìm sâu.",
			"Tiếng hét vang lên ở đó. Tiếng kêu gào của những linh hồn bị đóng băng trong điên loạn."
		],
		"thai": [
			"เขาวงกตที่เยือกแข็ง ทุกขณะ ทุกสิ่งกำลังพังทลายลงมา",
			"การนับถอยหลังไม่หยุด ยิ่งดิ้นรนมากเท่าไหร่ ก็ยิ่งจมลึกลงไปเท่านั้น",
			"เสียงกรีดร้องปะทุขึ้นที่นั่น เสียงโหยหวนของวิญญาณที่แข็งค้างด้วยความบ้าคลั่ง"
		],
		"hindi": [
			"जमी हुई भूलभुलैया। हर पल, सब कुछ बिखर रहा था।",
			"उलटी गिनती रुकी नहीं। जितना मैं संघर्ष करता, उतना ही गहरा डूबता गया।",
			"वहाँ चीखें फूट पड़ीं। पागलपन में जमी हुई आत्माओं की चीखें।"
		]
	}
} as const;
