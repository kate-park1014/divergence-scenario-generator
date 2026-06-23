export const scenario_forest_chorale_2_03 = {
	"scenario_id": "forest_chorale_2_03",
	"order": 3,
	"act": "rising",
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
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"숲은 점점 더 깊어졌다. 그리고 더러워졌다.",
			"오염된 샘물, 시들어가는 식물들 — 마치 과거의 죄가 썩어가는 모습 같았다.",
			"누군가의 상처가 숲에 스며든 듯, 속삭임은 죄책감을 파고들었다.",
			"카운트다운은 멈추지 않는다. 숲은… 더 아파하고 있었다."
		],
		"english": [
			"The forest grew deeper. And dirtier.",
			"Polluted spring water, wilting plants — it was as if past sins were decaying.",
			"As if someone's wound seeped into the forest, whispers burrowed into guilt.",
			"The countdown never stops. The forest… was in more pain."
		],
		"japanese": [
			"森はますます深くなった。そして汚れていった。",
			"汚染された泉、枯れていく植物たち — まるで過去の罪が腐敗しているかのようだった。",
			"誰かの傷が森に染み込んだように、ささやきは罪悪感をえぐった。",
			"カウントダウンは止まらない。森は…さらに苦しんでいた。"
		],
		"chinese": [
			"森林越来越深。也越来越脏。",
			"污染的泉水，枯萎的植物——仿佛过去的罪恶正在腐烂。",
			"仿佛某人的伤口渗入了森林，低语声刺入罪恶感。",
			"倒计时没有停止。森林…更加痛苦了。"
		],
		"french": [
			"La forêt devenait de plus en plus profonde. Et sale.",
			"L'eau de source polluée, les plantes fanées — c'était comme si les péchés passés pourrissaient.",
			"Comme si la blessure de quelqu'un avait imprégné la forêt, des murmures s'insinuaient dans la culpabilité.",
			"Le compte à rebours ne s'arrête jamais. La forêt… souffrait davantage."
		],
		"spanish": [
			"El bosque se hizo más y más profundo. Y sucio.",
			"Agua de manantial contaminada, plantas marchitas — era como si los pecados pasados se estuvieran pudriendo.",
			"Como si la herida de alguien se hubiera filtrado en el bosque, los susurros se clavaron en la culpa.",
			"La cuenta atrás no se detiene. El bosque… sufría más."
		],
		"vietnamese": [
			"Rừng ngày càng sâu hơn. Và bẩn thỉu hơn.",
			"Nước suối ô nhiễm, cây cối héo úa — cứ như thể tội lỗi trong quá khứ đang thối rữa.",
			"Như thể vết thương của ai đó đã thấm vào rừng, những lời thì thầm xuyên vào cảm giác tội lỗi.",
			"Đồng hồ đếm ngược không ngừng lại. Rừng… đang đau đớn hơn."
		],
		"thai": [
			"ป่ายิ่งลึกขึ้นเรื่อยๆ และสกปรกขึ้นเรื่อยๆ",
			"น้ำพุที่ปนเปื้อน พืชพรรณที่เหี่ยวเฉา — ราวกับบาปในอดีตกำลังเน่าเปื่อย",
			"ราวกับบาดแผลของใครบางคนซึมซับเข้าสู่ป่า เสียงกระซิบกรีดแทงความรู้สึกผิด",
			"การนับถอยหลังไม่หยุดลง ป่า…กำลังเจ็บปวดมากขึ้น"
		],
		"hindi": [
			"जंगल गहरा होता गया। और गंदा होता गया।",
			"दूषित झरने का पानी, मुरझाते पौधे — मानो अतीत के पाप सड़ रहे थे।",
			"मानो किसी का घाव जंगल में समा गया हो, फुसफुसाहटें अपराधबोध में घुस गईं।",
			"उलटी गिनती नहीं रुकती। जंगल… अधिक दर्द में था।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "sad",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "샘물은 검게 오염되어 흘렀고, 주변 식물들은 죽어 있었다.",
						"english": "The spring water flowed black and polluted, and the surrounding plants were dead.",
						"japanese": "泉の水は黒く汚染されて流れ、周りの植物は枯れていた。",
						"chinese": "泉水黑乎乎地流淌着，周围的植物都死了。",
						"french": "L'eau de source coulait noire et polluée, et les plantes environnantes étaient mortes.",
						"spanish": "El agua del manantial fluía negra y contaminada, y las plantas circundantes estaban muertas.",
						"vietnamese": "Nước suối chảy đen kịt và ô nhiễm, cây cối xung quanh đã chết.",
						"thai": "น้ำพุไหลสีดำและปนเปื้อน พืชพรรณรอบๆ ตายหมดแล้ว",
						"hindi": "झरने का पानी काला और प्रदूषित बह रहा था, और आस-पास के पौधे मर चुके थे।"
					}
				},
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "cedar",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "cedar",
					"content": {
						"korean": "…이곳도 이렇게 됐군.",
						"english": "…So this place ended up like this too.",
						"japanese": "…ここもこうなったか。",
						"chinese": "……这里也变成这样了啊。",
						"french": "…Cet endroit aussi a fini comme ça.",
						"spanish": "…Así que este lugar también terminó así.",
						"vietnamese": "…Nơi này cũng thành ra thế này rồi.",
						"thai": "…ที่นี่ก็เป็นแบบนี้ไปแล้วสินะ",
						"hindi": "…तो यह जगह भी ऐसी हो गई।"
					}
				},
				{
					"content": {
						"korean": "뭔가 알아, 시더?",
						"english": "Do you know something, Céder?",
						"japanese": "何か知ってるのか、セダー？",
						"chinese": "你知道些什么吗，西德？",
						"french": "Tu sais quelque chose, Céder ?",
						"spanish": "¿Sabes algo, Céder?",
						"vietnamese": "Céder, ngươi có biết gì không?",
						"thai": "เธอรู้อะไรบ้างไหม ซีดาร์?",
						"hindi": "कुछ जानते हो, सीडर?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "옛날에… 내가 실수로 숲을 오염시켰던 곳이랑 비슷해. 이 부근이.",
						"english": "It's similar to… the place where I accidentally polluted the forest a long time ago. This area.",
						"japanese": "昔…私がうっかり森を汚染してしまった場所に似ている。この辺りが。",
						"chinese": "以前…和我无意中污染森林的地方很像。这一带。",
						"french": "C'est similaire à… l'endroit où j'ai accidentellement pollué la forêt il y a longtemps. Cette zone.",
						"spanish": "Es similar a… el lugar donde accidentalmente contaminé el bosque hace mucho tiempo. Esta zona.",
						"vietnamese": "Giống với… nơi mà ta đã vô tình làm ô nhiễm khu rừng ngày xưa. Khu vực này.",
						"thai": "คล้ายกับ…ที่ที่ฉันเคยทำป่าปนเปื้อนโดยไม่ได้ตั้งใจเมื่อนานมาแล้ว บริเวณนี้",
						"hindi": "यह उस जगह से मिलती-जुलती है… जहाँ मैंने अनजाने में जंगल को प्रदूषित कर दिया था। यह इलाका।"
					},
					"type": "speech",
					"speaker": "cedar",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "탐험대 주변에 숲의 속삭임이 메아리쳤다. '탐욕… 오염…'",
						"english": "Whispers of the forest echoed around the expedition team. \"Greed… pollution…\"",
						"japanese": "探検隊の周りに森のささやきがこだました。「強欲…汚染…」",
						"chinese": "森林的低语声在探险队周围回响。“贪婪……污染……”",
						"french": "Les murmures de la forêt résonnaient autour de l'équipe d'expédition. \"Cupidité… pollution…\"",
						"spanish": "Los susurros del bosque resonaron alrededor del equipo de expedición. \"Codicia… contaminación…\"",
						"vietnamese": "Những lời thì thầm của khu rừng vang vọng xung quanh đoàn thám hiểm. \"Tham lam… ô nhiễm…\"",
						"thai": "เสียงกระซิบของป่าสะท้อนไปรอบๆ ทีมสำรวจ \"ความโลภ…การปนเปื้อน…\"",
						"hindi": "अभियान दल के चारों ओर जंगल की फुसफुसाहट गूँज उठी। \"लालच… प्रदूषण…\""
					}
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
					"speaker": "cedar",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "이 버려진 도구들… 그때 탐험대 것과 똑같아.",
						"english": "These abandoned tools… they're exactly like the expedition team's from back then.",
						"japanese": "この捨てられた道具たち…あの時の探検隊の物とそっくりだ。",
						"chinese": "这些被遗弃的工具…和那时探险队的完全一样。",
						"french": "Ces outils abandonnés… sont exactement les mêmes que ceux de l'équipe d'expédition de l'époque.",
						"spanish": "Estas herramientas abandonadas… son exactamente las mismas que las del equipo de expedición de entonces.",
						"vietnamese": "Những công cụ bị bỏ lại này… giống hệt của đội thám hiểm khi đó.",
						"thai": "อุปกรณ์ที่ถูกทิ้งเหล่านี้…เหมือนของทีมสำรวจในตอนนั้นเลย",
						"hindi": "ये छोड़े गए उपकरण… तब की अभियान टीम के जैसे ही हैं।"
					},
					"emotion": "sad",
					"speaker": "cedar",
					"type": "speech"
				},
				{
					"content": {
						"korean": "너무 낡아서 쓸 수도 없잖아. 왜 이 주변에 널려 있는 거지?",
						"english": "Too old to use. Why is it scattered around here?",
						"japanese": "古すぎて使えない。なぜこんなところに散らばっているんだ？",
						"chinese": "太旧了，根本没法用。为什么会散落在这里？",
						"french": "Trop vieux pour être utilisé. Pourquoi est-ce éparpillé ici ?",
						"spanish": "Demasiado viejo para usarlo. ¿Por qué está esparcido por aquí?",
						"vietnamese": "Quá cũ để dùng. Sao nó lại vương vãi khắp nơi thế này?",
						"thai": "เก่าเกินกว่าจะใช้ได้ ทำไมถึงเกลื่อนกลาดอยู่แถวนี้?",
						"hindi": "इतना पुराना कि इस्तेमाल भी नहीं कर सकते। यह यहाँ क्यों बिखरा पड़ा है?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "cedar",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "아마도… 숲을 망가뜨리고 싶지 않아서 버린 거겠지. 나처럼.",
						"english": "Perhaps... they didn't want to harm the forest, so they abandoned it. Like me.",
						"japanese": "おそらく… 森を傷つけたくなくて捨てたんだろう。私のように。",
						"chinese": "也许是… 不想破坏森林才丢弃的吧。就像我一样。",
						"french": "Peut-être… ils ne voulaient pas abîmer la forêt, alors ils l'ont abandonné. Comme moi.",
						"spanish": "Quizás... no querían dañar el bosque, así que lo abandonaron. Como yo.",
						"vietnamese": "Chắc là… họ không muốn làm hại khu rừng nên đã bỏ lại. Giống như tôi vậy.",
						"thai": "บางที… พวกเขาคงไม่อยากทำลายป่า เลยทิ้งมันไป เหมือนฉัน.",
						"hindi": "शायद… वे जंगल को नुकसान नहीं पहुँचाना चाहते थे, इसलिए उन्होंने इसे छोड़ दिया। मेरी तरह।"
					}
				},
				{
					"content": {
						"korean": "시더의 얼굴에 깊은 죄책감이 떠올랐다. 숲의 속삭임이 더욱 또렷해졌다.",
						"english": "A deep sense of guilt surfaced on Ceder's face. The forest's whispers grew clearer.",
						"japanese": "シダーの顔に深い罪悪感が浮かんだ。森のささやきがさらに鮮明になった。",
						"chinese": "希达脸上浮现出深深的罪恶感。森林的低语变得更加清晰。",
						"french": "Un profond sentiment de culpabilité apparut sur le visage de Ceder. Les murmures de la forêt devinrent plus clairs.",
						"spanish": "Una profunda culpa apareció en el rostro de Ceder. Los susurros del bosque se hicieron más claros.",
						"vietnamese": "Một cảm giác tội lỗi sâu sắc hiện lên trên khuôn mặt của Ceder. Tiếng thì thầm của rừng cây càng lúc càng rõ.",
						"thai": "ความรู้สึกผิดอย่างลึกซึ้งปรากฏบนใบหน้าของซีเดอร์ เสียงกระซิบของป่าชัดเจนขึ้นเรื่อย ๆ",
						"hindi": "सेडर के चेहरे पर गहरा अपराधबोध झलक उठा। जंगल की सरसराहट और स्पष्ट हो गई।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						4,
						2
					],
					"type": "direction",
					"speaker": "cedar",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "이 식물들은… 너무 빨리 시들고 있어.",
						"english": "These plants... are wilting too quickly.",
						"japanese": "この植物たちは… あまりにも早く枯れていく。",
						"chinese": "这些植物… 枯萎得太快了。",
						"french": "Ces plantes… se fanent trop vite.",
						"spanish": "Estas plantas… se marchitan demasiado rápido.",
						"vietnamese": "Những cây này… đang héo úa quá nhanh.",
						"thai": "พืชพวกนี้… เหี่ยวเฉาเร็วเกินไป.",
						"hindi": "ये पौधे… बहुत जल्दी मुरझा रहे हैं।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "cedar"
				},
				{
					"content": {
						"korean": "병든 것처럼 보이지만… 이상하게도 고요해.",
						"english": "They look sickly... but are strangely still.",
						"japanese": "病んでいるように見えるけど… 奇妙なほど静かだ。",
						"chinese": "它们看起来病恹恹的… 却异常地寂静。",
						"french": "Elles ont l'air malades… mais sont étrangement calmes.",
						"spanish": "Parecen enfermas… pero están extrañamente quietas.",
						"vietnamese": "Trông như bị bệnh… nhưng lại yên tĩnh một cách lạ lùng.",
						"thai": "ดูเหมือนป่วย… แต่กลับสงบนิ่งอย่างประหลาด.",
						"hindi": "वे बीमार लग रहे हैं… लेकिन अजीब तरह से शांत हैं।"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "cedar",
					"type": "speech",
					"content": {
						"korean": "마치… 절규하는 법을 잊은 것 같아. 내 죄처럼.",
						"english": "As if... they've forgotten how to scream. Like my sins.",
						"japanese": "まるで… 絶叫の仕方を忘れたかのようだ。私の罪のように。",
						"chinese": "就像… 忘记了如何呐喊。像我的罪孽一样。",
						"french": "Comme si… elles avaient oublié comment crier. Comme mes péchés.",
						"spanish": "Como si… hubieran olvidado cómo gritar. Como mis pecados.",
						"vietnamese": "Cứ như… chúng đã quên cách gào thét vậy. Giống như tội lỗi của tôi.",
						"thai": "ราวกับว่า… พวกมันลืมวิธีกรีดร้องไปแล้ว เหมือนบาปของฉัน.",
						"hindi": "जैसे… वे चिल्लाना भूल गए हों। मेरे पापों की तरह।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "narrator",
					"content": {
						"korean": "시더는 숲의 속삭임이 자신을 비난하는 환청처럼 들린다고 중얼거렸다.",
						"english": "Ceder muttered that the forest's whispers sounded like hallucinatory accusations.",
						"japanese": "シダーは、森のささやきが自分を非難する幻聴のように聞こえるとつぶやいた。",
						"chinese": "希达低声说，森林的低语听起来就像是谴责自己的幻听。",
						"french": "Ceder murmura que les murmures de la forêt sonnaient comme des accusations hallucinatoires.",
						"spanish": "Ceder murmuró que los susurros del bosque sonaban como acusaciones alucinatorias.",
						"vietnamese": "Ceder lẩm bẩm rằng tiếng thì thầm của rừng cây nghe như ảo giác đang buộc tội mình.",
						"thai": "ซีเดอร์พึมพำว่าเสียงกระซิบของป่าฟังดูเหมือนเสียงหลอนที่กล่าวหาเขา.",
						"hindi": "सेडर ने बड़बड़ाया कि जंगल की सरसराहट उसे खुद को दोषी ठहराने वाली मतिभ्रम जैसी लग रही थी।"
					}
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						2,
						4
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "cedar"
				},
				{
					"content": {
						"korean": "저 곰팡이들… 고목에 붙어 번성하고 있어.",
						"english": "Those fungi… are thriving on the old tree.",
						"japanese": "あのカビたち… 古木に張り付いて繁殖している。",
						"chinese": "那些霉菌… 附着在老树上，繁茂生长。",
						"french": "Ces champignons… prospèrent sur le vieil arbre.",
						"spanish": "Esos hongos… están prosperando en el árbol viejo.",
						"vietnamese": "Những cây nấm đó… đang bám vào cây cổ thụ mà phát triển.",
						"thai": "พวกเห็ดรานั่น… กำลังเจริญเติบโตบนต้นไม้เก่าแก่.",
						"hindi": "वे कवक… पुराने पेड़ पर पनप रहे हैं।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "cedar"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "기분 나쁘게 빛나는데… 숲이 스스로를 갉아먹는 것 같아.",
						"english": "They glow ominously… as if the forest is consuming itself.",
						"japanese": "気味悪く光っている… まるで森が自らを蝕んでいるかのようだ。",
						"chinese": "它们发出令人不安的光芒… 就像森林在自我蚕食。",
						"french": "Ils brillent de manière inquiétante… comme si la forêt se dévorait elle-même.",
						"spanish": "Brillan de forma inquietante… como si el bosque se estuviera consumiendo a sí mismo.",
						"vietnamese": "Chúng phát sáng một cách đáng sợ… cứ như khu rừng đang tự gặm nhấm chính mình.",
						"thai": "มันเรืองแสงน่าขนลุก… ราวกับว่าป่ากำลังกัดกินตัวเอง.",
						"hindi": "वे अशुभ रूप से चमक रहे हैं… जैसे जंगल खुद को खा रहा हो।"
					}
				},
				{
					"content": {
						"korean": "마치… 죄책감처럼. 끈질기게 붙어 떨어지지 않아.",
						"english": "Like... guilt. Clinging persistently, refusing to let go.",
						"japanese": "まるで… 罪悪感のように。しつこくまとわりつき、離れない。",
						"chinese": "就像… 罪恶感一样。顽固地附着，无法摆脱。",
						"french": "Comme… la culpabilité. S'accrochant avec persistance, refusant de lâcher prise.",
						"spanish": "Como… la culpa. Se aferra persistentemente, sin soltar.",
						"vietnamese": "Giống như… cảm giác tội lỗi vậy. Bám riết lấy, không chịu buông tha.",
						"thai": "ราวกับ… ความรู้สึกผิด. เกาะติดแน่น ไม่ยอมหลุดไป.",
						"hindi": "जैसे… अपराधबोध। लगातार चिपके रहना, जाने नहीं देना।"
					},
					"emotion": "sad",
					"speaker": "cedar",
					"type": "speech"
				},
				{
					"content": {
						"korean": "숲의 속삭임은 이제 비명처럼 들렸고, 시더는 괴로워했다. 카운트다운은 더 빠르게 흘렀다.",
						"english": "The forest's whispers now sounded like screams, and Cidar agonized. The countdown accelerated.",
						"japanese": "森のささやきは悲鳴のように聞こえ、シダーは苦悶した。カウントダウンはさらに加速した。",
						"chinese": "森林的低语现在听起来像尖叫，西达痛苦不已。倒计时加速了。",
						"french": "Les murmures de la forêt résonnaient désormais comme des cris, et Cidar agonisait. Le compte à rebours s'accélérait.",
						"spanish": "Los susurros del bosque ahora sonaban como gritos, y Cidar agonizaba. La cuenta regresiva se aceleró.",
						"vietnamese": "Những lời thì thầm của rừng giờ đây nghe như tiếng thét, và Cidar quằn quại. Đồng hồ đếm ngược trôi nhanh hơn.",
						"thai": "เสียงกระซิบของป่าตอนนี้ฟังดูเหมือนเสียงกรีดร้อง และซิดาร์ทรมาน การนับถอยหลังเร่งเร็วขึ้น",
						"hindi": "जंगल की फुसफुसाहट अब चीखों जैसी लग रही थी, और सिडार पीड़ा में था। उलटी गिनती तेज़ी से बढ़ी。"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "sad"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…헛된 발버둥이다. 숲은 너희의 죄를 기억할 것이다.",
						"english": "...A futile struggle. The forest will remember your sins.",
						"japanese": "…無駄な足掻きだ。森はお前たちの罪を覚えているだろう。",
						"chinese": "…徒劳的挣扎。森林会记住你们的罪孽。",
						"french": "...Une lutte vaine. La forêt se souviendra de vos péchés.",
						"spanish": "...Una lucha inútil. El bosque recordará vuestros pecados.",
						"vietnamese": "...Một cuộc vùng vẫy vô ích. Rừng sẽ ghi nhớ tội lỗi của các ngươi.",
						"thai": "…การดิ้นรนที่เปล่าประโยชน์ ป่าจะจดจำบาปของพวกเจ้า",
						"hindi": "...एक व्यर्थ का संघर्ष। जंगल तुम्हारे पापों को याद रखेगा।"
					}
				},
				{
					"type": "speech",
					"speaker": "cedar",
					"emotion": "base",
					"content": {
						"korean": "아니… 숲은 우리를 용서할 거야. 우리가 노력한다면.",
						"english": "No… the forest will forgive us. If we strive.",
						"japanese": "いや…森は私たちを許してくれる。私たちが努力すれば。",
						"chinese": "不…森林会原谅我们。如果我们努力的话。",
						"french": "Non… la forêt nous pardonnera. Si nous nous efforçons.",
						"spanish": "No… el bosque nos perdonará. Si nos esforzamos.",
						"vietnamese": "Không… rừng sẽ tha thứ cho chúng ta. Nếu chúng ta nỗ lực.",
						"thai": "ไม่… ป่าจะให้อภัยเรา ถ้าเราพยายาม",
						"hindi": "नहीं… जंगल हमें माफ करेगा। अगर हम प्रयास करें।"
					}
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "어둠이 걷히자 숲은 잠시 고요해졌다. 하지만 카운트다운은 여전히 흐르고 있었다.",
						"english": "As darkness lifted, the forest fell silent for a moment. But the countdown still ran.",
						"japanese": "闇が晴れると、森は一時静まり返った。しかし、カウントダウンはまだ続いていた。",
						"chinese": "黑暗散去，森林暂时归于平静。但倒计时仍在继续。",
						"french": "Alors que l'obscurité se levait, la forêt se tut un instant. Mais le compte à rebours continuait de s'écouler.",
						"spanish": "Mientras la oscuridad se disipaba, el bosque se quedó en silencio por un momento. Pero la cuenta regresiva seguía corriendo.",
						"vietnamese": "Khi bóng tối tan đi, khu rừng tạm thời trở nên tĩnh lặng. Nhưng đồng hồ đếm ngược vẫn đang chạy.",
						"thai": "เมื่อความมืดคลี่คลาย ป่าก็เงียบสงบลงชั่วขณะ แต่การนับถอยหลังยังคงดำเนินต่อไป",
						"hindi": "जैसे ही अँधेरा छटा, जंगल क्षण भर के लिए शांत हो गया। लेकिन उलटी गिनती अभी भी चल रही थी।"
					}
				},
				{
					"content": {
						"korean": "숲의 속삭임은 더 깊은 곳에서 울려왔다. 아직… 끝나지 않았다.",
						"english": "The forest's whispers echoed from deeper within. It's not… over yet.",
						"japanese": "森のささやきはさらに奥深くから響いてきた。まだ…終わっていない。",
						"chinese": "森林的低语从更深处传来。还没有…结束。",
						"french": "Les murmures de la forêt résonnaient des profondeurs. Ce n'est pas… encore fini.",
						"spanish": "Los susurros del bosque resonaron desde lo más profundo. Aún no… ha terminado.",
						"vietnamese": "Những lời thì thầm của rừng vọng lại từ sâu thẳm hơn. Vẫn chưa… kết thúc.",
						"thai": "เสียงกระซิบของป่าก้องกังวานจากส่วนลึกกว่า ยังไม่… จบลง",
						"hindi": "जंगल की फुसफुसाहट और गहराई से गूंज उठी। अभी… खत्म नहीं हुआ है।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "크크크… 결국 너희의 죄가 너희를 집어삼키는군.",
						"english": "Kukuku… In the end, your sins consume you.",
						"japanese": "ククク… 結局、お前たちの罪がお前たちを飲み込むのだな。",
						"chinese": "呵呵呵… 最终，你们的罪孽吞噬了你们。",
						"french": "Héhéhé… Au final, vos péchés vous dévorent.",
						"spanish": "Jejeje… Al final, vuestros pecados os consumen.",
						"vietnamese": "Khà khà… Cuối cùng, tội lỗi của các ngươi nuốt chửng các ngươi.",
						"thai": "ฮึๆๆ… ท้ายที่สุดแล้ว บาปของพวกเจ้าก็กลืนกินพวกเจ้าเอง",
						"hindi": "कुक्कु… अंत में, तुम्हारे पाप तुम्हें निगल जाते हैं।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "아직… 끝나지 않았어! 숲을 구할 거야!",
						"english": "It's not over yet! I'll save the forest!",
						"japanese": "まだ… 終わってない！森を救うんだ！",
						"chinese": "还没… 结束！我要拯救森林！",
						"french": "Ce n'est pas encore fini ! Je vais sauver la forêt !",
						"spanish": "¡Aún no ha terminado! ¡Salvaré el bosque!",
						"vietnamese": "Chưa… kết thúc đâu! Tôi sẽ cứu khu rừng!",
						"thai": "ยัง… ไม่จบ! ฉันจะช่วยป่าไว้!",
						"hindi": "अभी… ख़त्म नहीं हुआ है! मैं जंगल बचाऊंगा!"
					}
				},
				{
					"content": {
						"korean": "다시… 다시 시작하자.",
						"english": "Again... Let's start over.",
						"japanese": "もう一度… やり直そう。",
						"chinese": "再… 再来一次。",
						"french": "Encore… recommençons.",
						"spanish": "De nuevo… empecemos otra vez.",
						"vietnamese": "Lại… lại bắt đầu thôi.",
						"thai": "อีกครั้ง… มาเริ่มใหม่กันเถอะ",
						"hindi": "फिर से… फिर से शुरू करते हैं।"
					},
					"type": "speech",
					"speaker": "cedar",
					"emotion": "sad"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "크흐흐… 너희의 죄가 숲을 좀먹는군.",
						"english": "Kukuku... Your sins gnaw at the forest.",
						"japanese": "ククク… お前たちの罪が森を蝕んでいる。",
						"chinese": "呵呵呵… 你们的罪孽正在侵蚀着森林。",
						"french": "Héhéhé… Vos péchés rongent la forêt.",
						"spanish": "Jejeje… Vuestros pecados carcomen el bosque.",
						"vietnamese": "Khà khà… Tội lỗi của các ngươi đang gặm nhấm khu rừng.",
						"thai": "ฮึๆๆ… บาปของพวกเจ้ากำลังกัดกินป่า",
						"hindi": "कुक्कु… तुम्हारे पाप जंगल को खा रहे हैं।"
					},
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "cedar",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "닥쳐! 이건… 나의 죄가 아니야. 숲의 고통이야!",
						"english": "Silence! This isn't… my sin. It's the forest's agony!",
						"japanese": "黙れ！これは…私の罪じゃない。森の苦痛だ！",
						"chinese": "闭嘴！这不是…我的罪。这是森林的痛苦！",
						"french": "Silence ! Ce n'est pas… mon péché. C'est l'agonie de la forêt !",
						"spanish": "¡Cállate! Esto no es… mi pecado. ¡Es la agonía del bosque!",
						"vietnamese": "Im đi! Đây không phải… tội lỗi của ta. Đây là nỗi đau của rừng!",
						"thai": "เงียบซะ! นี่ไม่ใช่… บาปของข้า นี่คือความเจ็บปวดของป่า!",
						"hindi": "चुप रहो! यह… मेरा पाप नहीं है। यह जंगल की पीड़ा है!"
					}
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "죄책감에 파묻혀라. 이 숲의 일부가 될지어다!",
						"english": "Be buried in guilt. Become one with this forest!",
						"japanese": "罪悪感に埋もれろ。この森の一部となるがいい！",
						"chinese": "让罪恶感将你埋葬。成为这片森林的一部分吧！",
						"french": "Sois enseveli sous la culpabilité. Deviens une partie de cette forêt !",
						"spanish": "¡Sé enterrado en la culpa! ¡Conviértete en parte de este bosque!",
						"vietnamese": "Hãy chôn vùi trong mặc cảm tội lỗi. Hãy trở thành một phần của khu rừng này!",
						"thai": "จงจมดิ่งในความรู้สึกผิด จงเป็นส่วนหนึ่งของป่านี้!",
						"hindi": "अपराधबोध में दब जाओ। इस जंगल का एक हिस्सा बनो!"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "이대로 당할 순 없어!",
						"english": "I won't let this happen!",
						"japanese": "このままではやられない！",
						"chinese": "我不能就这样认输！",
						"french": "Je ne peux pas laisser faire ça !",
						"spanish": "¡No puedo dejar que esto pase!",
						"vietnamese": "Ta không thể cứ thế chịu đựng!",
						"thai": "ข้าจะยอมแพ้ไม่ได้!",
						"hindi": "मैं यह ऐसे ही नहीं होने दूंगा!"
					}
				}
			]
		}
	]
} as const;
