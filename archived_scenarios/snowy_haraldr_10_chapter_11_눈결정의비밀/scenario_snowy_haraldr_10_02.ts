export const scenario_snowy_haraldr_10_02 = {
	"scenario_id": "snowy_haraldr_10_02",
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
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "차가운 바람이 부는 설원. 에이라는 바닥의 얼룩을 응시한다.",
						"english": "A cold, windy snowfield. Aira gazes at a stain on the ground.",
						"japanese": "冷たい風が吹く雪原。アイラは地面の染みを凝視する。",
						"chinese": "寒风凛冽的雪原。艾拉凝视着地上的污渍。",
						"french": "Un champ de neige froid et venteux. Aira fixe une tache sur le sol.",
						"spanish": "Un campo de nieve frío y ventoso. Aira mira fijamente una mancha en el suelo.",
						"vietnamese": "Đồng tuyết gió lạnh. Aira nhìn chằm chằm vào vết bẩn trên mặt đất.",
						"thai": "ทุ่งหิมะที่มีลมหนาวพัดโชย ไอร่าจ้องมองคราบบนพื้น",
						"hindi": "एक ठंडा, बर्फीला मैदान। आइरा ज़मीन पर एक दाग को घूर रही है।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…이게 ‘눈 결정 전리품’이라던가.",
						"english": "...So this is a 'snowflake trophy'?",
						"japanese": "…これが「雪の結晶の戦利品」だと？",
						"chinese": "…这就是所谓的“雪结晶战利品”吗？",
						"french": "...Alors c'est ça un 'trophée de flocon de neige' ?",
						"spanish": "...¿Así que esto es un 'trofeo de copo de nieve'?",
						"vietnamese": "...Đây có phải là 'chiến lợi phẩm tinh thể tuyết'?",
						"thai": "...นี่คือ 'ถ้วยรางวัลเกล็ดหิมะ' สินะ",
						"hindi": "...तो यह एक 'बर्फ का क्रिस्टल ट्राफी' है?"
					},
					"speaker": "eira",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "버려진 조각에서도 뭔가 느껴져.",
						"english": "I feel something even from a discarded fragment.",
						"japanese": "捨てられた破片からも何かを感じる。",
						"chinese": "即使是从被丢弃的碎片中，我也能感觉到什么。",
						"french": "Je ressens quelque chose même d'un fragment jeté.",
						"spanish": "Siento algo incluso de un fragmento desechado.",
						"vietnamese": "Tôi cảm thấy điều gì đó ngay cả từ một mảnh vỡ bị vứt bỏ.",
						"thai": "ฉันรู้สึกถึงบางสิ่งจากเศษที่ถูกทิ้ง",
						"hindi": "मुझे एक छोड़े गए टुकड़े से भी कुछ महसूस होता है।"
					},
					"speaker": "eira",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "eira",
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "음… 이게 굳어버린 시럽이라고?",
						"english": "Hmm... This is hardened syrup?",
						"japanese": "うーん…これが固まったシロップだと？",
						"chinese": "嗯…这是凝固的糖浆吗？",
						"french": "Hmm... C'est du sirop durci ?",
						"spanish": "Mmm... ¿Esto es jarabe endurecido?",
						"vietnamese": "Ưm... Đây là si-rô đông cứng sao?",
						"thai": "อืม... นี่คือน้ำเชื่อมที่แข็งตัวแล้วเหรอ?",
						"hindi": "हम्म... यह जमा हुआ सिरप है?"
					},
					"speaker": "eira",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "시럽? 이걸 전리품이라고 팔았다고?",
						"english": "Syrup? They sold this as a trophy?",
						"japanese": "シロップ？これを戦利品として売っただと？",
						"chinese": "糖浆？他们把这个当战利品卖了？",
						"french": "Du sirop ? Ils ont vendu ça comme trophée ?",
						"spanish": "¿Jarabe? ¿Vendieron esto como un trofeo?",
						"vietnamese": "Si-rô? Họ đã bán cái này làm chiến lợi phẩm ư?",
						"thai": "น้ำเชื่อมเหรอ? พวกเขาขายสิ่งนี้เป็นถ้วยรางวัลเหรอ?",
						"hindi": "सिरप? उन्होंने इसे ट्राफी के रूप में बेचा?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "분명 어디선가 본 듯한 질감인데…",
						"english": "It's a texture I've definitely seen somewhere before...",
						"japanese": "どこかで見たような質感だが…",
						"chinese": "这质感，我分明在某处见过…",
						"french": "C'est une texture que j'ai déjà vue quelque part...",
						"spanish": "Es una textura que definitivamente he visto en algún lugar antes...",
						"vietnamese": "Đây là một kết cấu mà tôi chắc chắn đã thấy ở đâu đó trước đây...",
						"thai": "เป็นเนื้อสัมผัสที่ฉันเคยเห็นที่ไหนสักแห่งแน่นอน...",
						"hindi": "यह एक ऐसी बनावट है जिसे मैंने निश्चित रूप से पहले कहीं देखा है..."
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "base"
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
					"speaker": "eira",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "하랄드르의 몸에서 봤던 그 시럽 자국…",
						"english": "That syrup stain I saw on Haraldur...",
						"japanese": "ハラルドルの体で見たあのシロップの跡…",
						"chinese": "在哈拉尔杜尔身上看到的那个糖浆痕迹……",
						"french": "Cette tache de sirop que j'ai vue sur le corps d'Haraldur...",
						"spanish": "Esa mancha de jarabe que vi en Haraldur...",
						"vietnamese": "Vết si-rô đó tôi thấy trên người Haraldur...",
						"thai": "คราบน้ำเชื่อมที่ฉันเห็นบนตัวฮาราลดูร์...",
						"hindi": "हरलदुर के शरीर पर देखा था वह सिरप का दाग..."
					},
					"speaker": "eira",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "설마… 그게 진짜 시럽이라고?",
						"english": "No way... Is that really syrup?",
						"japanese": "まさか…あれが本当にシロップだと？",
						"chinese": "不会吧……那真是糖浆吗？",
						"french": "Pas possible... C'est vraiment du sirop ?",
						"spanish": "¿No me digas...? ¿Eso es realmente jarabe?",
						"vietnamese": "Không thể nào... Đó thật sự là si-rô sao?",
						"thai": "เป็นไปไม่ได้... นั่นคือน้ำเชื่อมจริงๆ เหรอ?",
						"hindi": "कहीं ऐसा तो नहीं... वह सच में सिरप है?"
					},
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "너무 달콤해. 뭔가… 이상해.",
						"english": "Too sweet. Something's... off.",
						"japanese": "甘すぎる。なんだか…おかしい。",
						"chinese": "太甜了。总觉得……很奇怪。",
						"french": "Trop sucré. Quelque chose... cloche.",
						"spanish": "Demasiado dulce. Algo... no está bien.",
						"vietnamese": "Quá ngọt. Có gì đó... lạ.",
						"thai": "หวานเกินไป มีบางอย่าง... ผิดปกติ",
						"hindi": "बहुत मीठा है। कुछ... अजीब है।"
					},
					"speaker": "eira",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "하랄드르가 저런 걸 몸에 바르고 다닌다고?",
						"english": "Haraldur walks around with that stuff on his body?",
						"japanese": "ハラルドルがそんなものを体に塗って歩いていると？",
						"chinese": "哈拉尔杜尔会把那种东西涂在身上到处走吗？",
						"french": "Haraldur se promène avec ça sur le corps ?",
						"spanish": "¿Haraldur anda por ahí con eso en el cuerpo?",
						"vietnamese": "Haraldur bôi thứ đó lên người rồi đi lại sao?",
						"thai": "ฮาราลดูร์ทาสิ่งนั้นบนร่างกายแล้วเดินไปมาเหรอ?",
						"hindi": "हरलदुर ऐसी चीज़ अपने शरीर पर लगाकर घूमता है?"
					},
					"speaker": "character_1"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "단순한 얼룩이 아니야. 이건…",
						"english": "It's not just a simple stain. This is...",
						"japanese": "ただの染みじゃない。これは…",
						"chinese": "不只是简单的污渍。这是……",
						"french": "Ce n'est pas une simple tache. C'est...",
						"spanish": "No es una simple mancha. Esto es...",
						"vietnamese": "Không phải chỉ là vết bẩn đơn thuần. Đây là...",
						"thai": "นี่ไม่ใช่แค่คราบธรรมดา นี่คือ...",
						"hindi": "यह सिर्फ एक दाग नहीं है। यह..."
					},
					"emotion": "base"
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
					"speaker": "eira",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "이 시럽은… 고대 룬 문자와 반응해.",
						"english": "This syrup... reacts with ancient runes.",
						"japanese": "このシロップは…古代のルーン文字と反応する。",
						"chinese": "这种糖浆……会与古代符文反应。",
						"french": "Ce sirop... réagit avec les runes anciennes.",
						"spanish": "Este jarabe... reacciona con las runas antiguas.",
						"vietnamese": "Si-rô này... phản ứng với các ký tự rune cổ đại.",
						"thai": "น้ำเชื่อมนี้... ทำปฏิกิริยากับอักษรรูนโบราณ",
						"hindi": "यह सिरप... प्राचीन रूनिक अक्षरों के साथ प्रतिक्रिया करता है।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "고대 룬? 그럼 저 시럽이 저절로 생긴 게 아니란 거야?",
						"english": "Ancient runes? So that syrup didn't just appear on its own?",
						"japanese": "古代のルーン？じゃああのシロップは自然にできたものじゃないと？",
						"chinese": "古代符文？那么那种糖浆不是自己出现的吗？",
						"french": "Des runes anciennes ? Alors ce sirop n'est pas apparu tout seul ?",
						"spanish": "¿Runas antiguas? ¿Así que ese jarabe no apareció por sí solo?",
						"vietnamese": "Rune cổ đại? Vậy si-rô đó không tự nhiên mà có?",
						"thai": "อักษรรูนโบราณ? งั้นน้ำเชื่อมนั้นไม่ได้เกิดขึ้นเองเหรอ?",
						"hindi": "प्राचीन रूनिक अक्षर? तो वह सिरप अपने आप नहीं बना था?"
					},
					"type": "speech"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "아니. 누군가 의도적으로 사용한 흔적이 보여.",
						"english": "No. I see traces of someone intentionally using it.",
						"japanese": "いや。誰かが意図的に使った痕跡がある。",
						"chinese": "不。我看到了有人故意使用过的痕迹。",
						"french": "Non. Je vois des traces d'utilisation intentionnelle.",
						"spanish": "No. Veo rastros de que alguien lo usó intencionalmente.",
						"vietnamese": "Không. Tôi thấy dấu vết của việc ai đó đã cố ý sử dụng.",
						"thai": "ไม่ มีร่องรอยว่ามีคนใช้มันโดยเจตนา",
						"hindi": "नहीं। मुझे किसी के जानबूझकर इस्तेमाल करने के निशान दिख रहे हैं।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "하랄드르와 이 시럽, 그리고 룬… 전부 연결돼 있어.",
						"english": "Haraldur, this syrup, and the runes... they're all connected.",
						"japanese": "ハラルドルとこのシロップ、そしてルーン…全て繋がっている。",
						"chinese": "哈拉尔杜尔、这种糖浆和符文……它们都联系在一起。",
						"french": "Haraldur, ce sirop et les runes... tout est lié.",
						"spanish": "Haraldur, este jarabe y las runas... todo está conectado.",
						"vietnamese": "Haraldur, si-rô này, và các rune... tất cả đều có liên kết.",
						"thai": "ฮาราลดูร์ น้ำเชื่อมนี้ และอักษรรูน... ทั้งหมดเชื่อมโยงกัน",
						"hindi": "हरलदुर, यह सिरप, और रूनिक अक्षर... सब जुड़े हुए हैं।"
					},
					"speaker": "eira",
					"type": "speech"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "크으… 언젠가… 모두에게 달콤함을 선사할… 것이다…",
						"english": "Ugh... Someday... I will bestow sweetness upon all...",
						"japanese": "くぅっ… いつか… 全てに甘美を授ける…だろう…",
						"chinese": "呃… 总有一天… 我会将甘甜赐予所有人…",
						"french": "Urgh... Un jour... J'offrirai la douceur à tous...",
						"spanish": "Ugh... Algún día... Otorgaré dulzura a todos...",
						"vietnamese": "Khặc... Một ngày nào đó... ta sẽ ban phát sự ngọt ngào cho tất cả...",
						"thai": "อึก... สักวันหนึ่ง... ข้าจะมอบความหอมหวานให้แก่ทุกคน...",
						"hindi": "उफ़... कभी न कभी... मैं सभी को मिठास प्रदान करूँगा..."
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리야? 달콤함?",
						"english": "What was that? Sweetness?",
						"japanese": "何を言っている？ 甘美だと？",
						"chinese": "什么意思？ 甘甜？",
						"french": "Qu'est-ce que tu racontes ? De la douceur ?",
						"spanish": "¿Qué dices? ¿Dulzura?",
						"vietnamese": "Ngươi nói gì vậy? Ngọt ngào ư?",
						"thai": "พูดอะไรน่ะ? ความหอมหวาน?",
						"hindi": "क्या बकवास है? मिठास?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "eira",
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "저 시럽은… 단순히 달콤함만을 의미하는 게 아니야.",
						"english": "That syrup... it doesn't just mean sweetness.",
						"japanese": "あのシロップは… 単に甘美を意味するだけではない。",
						"chinese": "那糖浆… 不仅仅代表着甘甜。",
						"french": "Ce sirop... il ne signifie pas seulement la douceur.",
						"spanish": "Ese jarabe... no solo significa dulzura.",
						"vietnamese": "Món si-rô đó... không chỉ đơn thuần là ngọt ngào đâu.",
						"thai": "น้ำเชื่อมนั้น... ไม่ได้หมายถึงแค่ความหอมหวานอย่างเดียว.",
						"hindi": "वह सिरप… सिर्फ मिठास का मतलब नहीं है।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "하랄드르의 몸과… 이 설원 전체에 퍼져 있는 무언가와 연관되어 있어.",
						"english": "It's connected to Haraldr's body... and something spread throughout this entire snowfield.",
						"japanese": "ハラルドルの体と… この雪原全体に広がる何かと関連している。",
						"chinese": "它与哈拉尔德的身体… 以及弥漫在这片雪原上的某种东西有关。",
						"french": "C'est lié au corps de Haraldr... et à quelque chose qui s'étend sur toute cette étendue de neige.",
						"spanish": "Está conectado al cuerpo de Haraldr... y a algo que se extiende por todo este campo nevado.",
						"vietnamese": "Nó có liên quan đến cơ thể của Haraldr... và thứ gì đó đang lan tỏa khắp cánh đồng tuyết này.",
						"thai": "มันเชื่อมโยงกับร่างกายของฮารัลเดอร์... และบางสิ่งบางอย่างที่แพร่กระจายไปทั่วทุ่งหิมะนี้.",
						"hindi": "यह हारلد्र के शरीर से… और इस पूरे हिमक्षेत्र में फैले किसी चीज़ से जुड़ा है।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "전리품에 숨겨진 달콤한 진실은, 더욱 거대한 그림자의 시작이었다.",
						"english": "The sweet truth hidden in the spoils was the beginning of an even greater shadow.",
						"japanese": "戦利品に隠された甘美な真実は、さらに巨大な影の始まりだった。",
						"chinese": "战利品中隐藏的甜蜜真相，是更巨大阴影的开始。",
						"french": "La douce vérité cachée dans le butin était le début d'une ombre encore plus grande.",
						"spanish": "La dulce verdad oculta en el botín fue el comienzo de una sombra aún mayor.",
						"vietnamese": "Sự thật ngọt ngào ẩn giấu trong chiến lợi phẩm, là khởi đầu cho một bóng đen lớn hơn.",
						"thai": "ความจริงอันหอมหวานที่ซ่อนอยู่ในของรางวัล คือจุดเริ่มต้นของเงามืดที่ใหญ่ยิ่งกว่า.",
						"hindi": "लूट में छिपा मीठा सच, एक और भी बड़ी छाया की शुरुआत थी।"
					},
					"type": "speech"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "탐험대의 앞을 막아선 정체 모를 그림자. 기이한 시럽 냄새가 진동한다.",
						"english": "An unknown shadow blocks the expedition's path. A strange syrup scent permeates the air.",
						"japanese": "探検隊の行く手を阻む、正体不明の影。奇妙なシロップの匂いが充満している。",
						"chinese": "一道不明的影子挡住了探险队的去路。一股奇怪的糖浆气味弥漫开来。",
						"french": "Une ombre inconnue bloque le chemin de l'expédition. Une étrange odeur de sirop emplit l'air.",
						"spanish": "Una sombra desconocida bloquea el camino de la expedición. Un extraño aroma a jarabe impregna el aire.",
						"vietnamese": "Một bóng đen không rõ danh tính chặn đường đoàn thám hiểm. Một mùi si-rô kỳ lạ lan tỏa khắp nơi.",
						"thai": "เงาลึกลับขวางทางคณะสำรวจ กลิ่นน้ำเชื่อมแปลกประหลาดอบอวลไปทั่ว",
						"hindi": "एक अज्ञात छाया ने अभियान का रास्ता रोक लिया। एक अजीब सिरप की गंध हवा में फैली हुई है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…감히 나의 영역에 발을 들이는가.",
						"english": "...Dare you trespass upon my domain?",
						"japanese": "...私の領域に足を踏み入れるとは、大胆な。",
						"chinese": "...竟敢踏入我的领域。",
						"french": "...Oserez-vous fouler mon domaine ?",
						"spanish": "...¿Osas pisar mi dominio?",
						"vietnamese": "...Ngươi dám đặt chân vào lãnh địa của ta sao?",
						"thai": "...เจ้ากล้าเข้ามาในอาณาเขตของข้ารึ?",
						"hindi": "...क्या तुम्हारी हिम्मत हुई मेरे क्षेत्र में कदम रखने की?"
					},
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "eira",
					"spot": [
						3,
						3
					]
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이 시럽… {random_boss}에게서 나는 냄새와 같아.",
						"english": "This syrup... it smells like {random_boss}.",
						"japanese": "このシロップ… {random_boss}からする匂いと同じだ。",
						"chinese": "这糖浆… 味道和{random_boss}身上的一样。",
						"french": "Ce sirop... il a la même odeur que {random_boss}.",
						"spanish": "Este jarabe... huele igual que {random_boss}.",
						"vietnamese": "Món si-rô này... mùi giống hệt {random_boss}.",
						"thai": "น้ำเชื่อมนี้... กลิ่นเหมือน {random_boss} เลย.",
						"hindi": "यह सिरप… {random_boss} से आती गंध जैसा है।"
					},
					"speaker": "eira"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "하랄드르와 이 괴물… 대체 무슨 관계지?",
						"english": "Haraldr and this monster... What is their connection?",
						"japanese": "ハラルドルとこの怪物… 一体どんな関係が？",
						"chinese": "哈拉尔德和这怪物… 到底有什么关系？",
						"french": "Haraldr et ce monstre... quel est leur lien ?",
						"spanish": "Haraldr y este monstruo... ¿Qué relación tienen?",
						"vietnamese": "Haraldr và quái vật này... Rốt cuộc có quan hệ gì?",
						"thai": "ฮารัลเดอร์กับสัตว์ประหลาดนี่... พวกมันเกี่ยวข้องกันยังไงกันแน่?",
						"hindi": "हारल्ड्र और यह राक्षस… आख़िर इनका क्या संबंध है?"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "어리석은 질문이구나. 모든 것은 하나에서 시작된다.",
						"english": "A foolish question. All things begin from one.",
						"japanese": "愚かな問いだ。全ては一つから始まる。",
						"chinese": "愚蠢的问题。一切都始于一。",
						"french": "Question insensée. Tout commence par l'un.",
						"spanish": "Una pregunta estúpida. Todo comienza en uno.",
						"vietnamese": "Một câu hỏi ngu ngốc. Mọi thứ đều bắt đầu từ một.",
						"thai": "คำถามโง่ๆ ทุกสิ่งเริ่มต้นจากหนึ่ง.",
						"hindi": "एक मूर्खतापूर्ण प्रश्न। सब कुछ एक से शुरू होता है।"
					},
					"speaker": "random_boss"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "angry",
					"content": {
						"korean": "너희의 호기심은 결국 독이 될 것이다. 영원히 사라져라.",
						"english": "Your curiosity will ultimately be your bane. Vanish forever.",
						"japanese": "お前たちの好奇心は、結局毒となるだろう。永遠に消え失せろ。",
						"chinese": "你们的好奇心终将成为毒药。永远消失吧。",
						"french": "Votre curiosité finira par être votre poison. Disparaissez à jamais.",
						"spanish": "Vuestra curiosidad acabará siendo vuestro veneno. Desapareced para siempre.",
						"vietnamese": "Sự tò mò của các ngươi rốt cuộc sẽ trở thành thuốc độc. Biến mất vĩnh viễn đi.",
						"thai": "ความอยากรู้อยากเห็นของพวกเจ้าจะกลายเป็นยาพิษในที่สุด จงหายไปตลอดกาล.",
						"hindi": "तुम्हारी जिज्ञासा अंततः तुम्हारा ज़हर बनेगी। हमेशा के लिए मिट जाओ।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "젠장… 아직 알아내야 할 게 많다고!",
						"english": "Damn it... Still so much to figure out!",
						"japanese": "くそっ…まだ解明すべきことが多いのに！",
						"chinese": "该死……还有好多事情没弄明白！",
						"french": "Mince... Il y a encore tant de choses à découvrir !",
						"spanish": "¡Maldición... Todavía queda mucho por averiguar!",
						"vietnamese": "Chết tiệt... Vẫn còn nhiều điều phải tìm hiểu!",
						"thai": "ให้ตายสิ... ยังมีอีกหลายอย่างที่ต้องค้นหา!",
						"hindi": "धत् तेरे की... अभी भी बहुत कुछ पता लगाना बाकी है!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"차가운 설원, 눈 결정 전리품에 숨겨진 비밀.",
			"기록자 에이라는 단순한 얼룩이라 생각했던 것에 이끌린다.",
			"하랄드르의 몸에서 나는 달콤한 시럽 자국.",
			"그것이 숨기고 있는 진실은 과연 무엇일까?"
		],
		"english": [
			"Cold snowfield, a secret hidden in a snowflake trophy.",
			"Recorder Aira is drawn to what she thought was a mere stain.",
			"Sweet syrup stains emanating from Haraldr's body.",
			"What truth could it possibly be hiding?"
		],
		"japanese": [
			"冷たい雪原、雪の結晶の戦利品に隠された秘密。",
			"記録者アイラは、ただの染みだと思っていたものに引き寄せられる。",
			"ハラルドルの体から発する甘いシロップの痕跡。",
			"それが隠している真実とは一体何なのか？"
		],
		"chinese": [
			"寒冷的雪原，隐藏在雪结晶战利品中的秘密。",
			"记录者艾拉被她认为是普通污渍的东西所吸引。",
			"哈拉尔德身体上散发出的甜美糖浆痕迹。",
			"它究竟隐藏着什么真相？"
		],
		"french": [
			"Champ de neige froid, un secret caché dans un trophée de flocon de neige.",
			"La chroniqueuse Aira est attirée par ce qu'elle croyait être une simple tache.",
			"Des taches de sirop sucré émanant du corps de Haraldr.",
			"Quelle vérité pourrait-il bien cacher ?"
		],
		"spanish": [
			"Frío campo de nieve, un secreto oculto en un trofeo de copo de nieve.",
			"La registradora Aira se siente atraída por lo que pensó que era una simple mancha.",
			"Dulces manchas de jarabe que emanan del cuerpo de Haraldr.",
			"¿Qué verdad podría estar ocultando?"
		],
		"vietnamese": [
			"Đồng tuyết lạnh giá, bí mật ẩn giấu trong chiến lợi phẩm tinh thể tuyết.",
			"Người ghi chép Aira bị thu hút bởi thứ mà cô ấy nghĩ chỉ là một vết bẩn.",
			"Những vệt si-rô ngọt ngào tỏa ra từ cơ thể Haraldr.",
			"Sự thật mà nó đang che giấu rốt cuộc là gì?"
		],
		"thai": [
			"ทุ่งหิมะเยือกแข็ง ความลับที่ซ่อนอยู่ในถ้วยรางวัลเกล็ดหิมะ",
			"ไอร่า ผู้บันทึกถูกดึงดูดไปยังสิ่งที่เธอคิดว่าเป็นเพียงคราบ",
			"คราบน้ำเชื่อมหวานที่ออกมาจากร่างกายของฮาราลเดอร์",
			"ความจริงที่มันซ่อนอยู่คืออะไรกันแน่?"
		],
		"hindi": [
			"ठंडा बर्फीला मैदान, बर्फ के क्रिस्टल ट्राफी में छिपा रहस्य।",
			"रिकॉर्डर आइरा उस चीज़ की ओर आकर्षित होती है जिसे वह केवल एक दाग समझती थी।",
			"हरलडर के शरीर से निकलती मीठी सिरप के दाग।",
			"यह आखिर क्या सच छिपा रहा है?"
		]
	}
} as const;
