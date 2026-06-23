export const scenario_forest_veridianmelody_18_01 = {
	"scenario_id": "forest_veridianmelody_18_01",
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
	"prologue": {
		"korean": [
			"오래된 숲. 그곳엔 금기가 잠들어 있었다.",
			"아름다운 유혹 속, 숨겨진 진실은 더욱 잔혹하다.",
			"발길을 멈출 수 없는 탐험대. 그들의 첫걸음은 재앙의 시작이었다."
		],
		"english": [
			"An ancient forest. A taboo slumbered within.",
			"Amidst beautiful temptation, the hidden truth is more brutal.",
			"The expedition couldn't stop. Their first step was the beginning of disaster."
		],
		"japanese": [
			"古代の森。そこには禁忌が眠っていた。",
			"美しい誘惑の中、隠された真実はさらに残酷だ。",
			"足を止められない探検隊。彼らの第一歩は災厄の始まりだった。"
		],
		"chinese": [
			"古老的森林。禁忌沉睡于此。",
			"美丽诱惑之下，隐藏的真相更为残酷。",
			"探险队无法停下脚步。他们的第一步是灾难的开端。"
		],
		"french": [
			"Une forêt ancienne. Un tabou y sommeillait.",
			"Au milieu d'une belle tentation, la vérité cachée est plus brutale.",
			"L'expédition ne pouvait s'arrêter. Leur premier pas fut le début du désastre."
		],
		"spanish": [
			"Un bosque antiguo. Allí dormía un tabú.",
			"En medio de una hermosa tentación, la verdad oculta es más brutal.",
			"La expedición no pudo detenerse. Su primer paso fue el comienzo del desastre."
		],
		"vietnamese": [
			"Một khu rừng cổ xưa. Một điều cấm kỵ ngủ vùi ở đó.",
			"Giữa cám dỗ tươi đẹp, sự thật ẩn giấu càng tàn khốc.",
			"Đoàn thám hiểm không thể dừng bước. Bước chân đầu tiên của họ là khởi đầu của tai ương."
		],
		"thai": [
			"ป่าโบราณ ที่นั่นมีข้อห้ามหลับใหลอยู่",
			"ท่ามกลางการยั่วยวนที่งดงาม ความจริงที่ซ่อนอยู่กลับโหดร้ายยิ่งกว่า",
			"คณะสำรวจที่หยุดไม่ได้ ก้าวแรกของพวกเขาคือจุดเริ่มต้นของหายนะ"
		],
		"hindi": [
			"एक प्राचीन वन। वहाँ एक वर्जित बात सोई हुई थी।",
			"सुंदर प्रलोभन के बीच, छिपा हुआ सच और भी क्रूर है।",
			"अभियान दल रुक नहीं सका। उनका पहला कदम आपदा की शुरुआत थी।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "숲의 입구. 고요함 속에 기이한 아름다움이 드리웠다.",
						"english": "Forest entrance. An eerie beauty hung in the silence.",
						"japanese": "森の入り口。静寂の中に奇妙な美しさが漂っていた。",
						"chinese": "森林入口。寂静中弥漫着诡异的美。",
						"french": "Entrée de la forêt. Une beauté étrange planait dans le silence.",
						"spanish": "Entrada del bosque. Una belleza inquietante flotaba en el silencio.",
						"vietnamese": "Lối vào rừng. Một vẻ đẹp kỳ lạ bao trùm sự tĩnh lặng.",
						"thai": "ทางเข้าป่า ความงามอันแปลกประหลาดปกคลุมอยู่ในความเงียบงัน",
						"hindi": "जंगल का प्रवेश द्वार। खामोशी में एक अजीब सुंदरता छाई हुई थी।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "여기가 소문 속 저주받은 숲인가?",
						"english": "Is this the rumored cursed forest?",
						"japanese": "ここが噂の呪われた森か？",
						"chinese": "这里就是传闻中被诅咒的森林吗？",
						"french": "Est-ce la forêt maudite dont on parle ?",
						"spanish": "¿Es este el bosque maldito del que se rumorea?",
						"vietnamese": "Đây có phải là khu rừng bị nguyền rủa trong lời đồn không?",
						"thai": "นี่คือป่าต้องสาปในตำนานหรือเปล่า?",
						"hindi": "क्या यह वही शापित जंगल है जिसकी अफवाह है?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "ela",
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"content": {
						"korean": "어서 와요. 숲의 깊은 곳으로…",
						"english": "Welcome. To the depths of the forest…",
						"japanese": "ようこそ。森の奥深くへ…",
						"chinese": "欢迎。来到森林深处…",
						"french": "Bienvenue. Dans les profondeurs de la forêt…",
						"spanish": "Bienvenidos. A las profundidades del bosque…",
						"vietnamese": "Chào mừng. Đến với sâu thẳm của rừng…",
						"thai": "ยินดีต้อนรับ สู่ส่วนลึกของป่า...",
						"hindi": "स्वागत है। वन के गहरे में..."
					},
					"emotion": "base",
					"speaker": "ela",
					"type": "speech"
				},
				{
					"speaker": "ela",
					"type": "speech",
					"content": {
						"korean": "(흥얼거리는 소리) 가지 마오, 숲의 품은 그대를 엮으리…",
						"english": "(Humming) Don't go, the forest's embrace will entangle you…",
						"japanese": "(鼻歌) 行かないで、森の懐はあなたを絡めとる…",
						"chinese": "(哼唱) 别走，森林的怀抱会将你缠绕…",
						"french": "(Fredonnement) N'y va pas, l'étreinte de la forêt t'enlacera…",
						"spanish": "(Tarareando) No vayas, el abrazo del bosque te enredará…",
						"vietnamese": "(Ngâm nga) Đừng đi, lòng rừng sẽ cuốn lấy bạn…",
						"thai": "(ฮัมเพลง) อย่าไปเลย อ้อมกอดของป่าจะผูกมัดเจ้า...",
						"hindi": "(गुनगुनाते हुए) मत जाओ, जंगल की गोद तुम्हें उलझा लेगी..."
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "무슨 노래지? 왠지 모르게 불안해.",
						"english": "What song is that? It makes me uneasy somehow.",
						"japanese": "何の歌だ？なんだか不安になる。",
						"chinese": "这是什么歌？总觉得有些不安。",
						"french": "Quelle est cette chanson ? Je me sens mal à l'aise d'une certaine manière.",
						"spanish": "¿Qué canción es esa? Me siento inquieto de alguna manera.",
						"vietnamese": "Bài hát gì vậy? Sao cứ thấy bất an.",
						"thai": "เพลงอะไรน่ะ? ทำไมถึงรู้สึกไม่สบายใจ",
						"hindi": "यह कौन सा गीत है? मुझे किसी तरह बेचैनी हो रही है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_1"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"speaker": "ela",
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "길을 따라 빛나는 이끼가 눈을 유혹한다.",
						"english": "Glowing moss along the path tempts the eyes.",
						"japanese": "道に沿って光る苔が目を誘惑する。",
						"chinese": "沿着小路发光的苔藓诱惑着眼睛。",
						"french": "La mousse lumineuse le long du chemin attire le regard.",
						"spanish": "El musgo brillante a lo largo del camino tienta la vista.",
						"vietnamese": "Rêu phát sáng dọc đường lôi cuốn ánh mắt.",
						"thai": "มอสเรืองแสงตามทางดึงดูดสายตา",
						"hindi": "रास्ते में चमकती हुई काई आँखों को लुभाती है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이 이끼… 만져봐도 될까?",
						"english": "This moss… can I touch it?",
						"japanese": "この苔…触ってもいいかな？",
						"chinese": "这苔藓…我可以摸摸看吗？",
						"french": "Cette mousse… je peux la toucher ?",
						"spanish": "Este musgo… ¿puedo tocarlo?",
						"vietnamese": "Lớp rêu này… liệu tôi có thể chạm vào không?",
						"thai": "มอสนี้... ฉันแตะได้ไหม?",
						"hindi": "यह काई... क्या मैं इसे छू सकता हूँ?"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"content": {
						"korean": "만지지 마. 왠지 불길해.",
						"english": "Don't touch it. It feels ominous.",
						"japanese": "触らないで。なんだか不吉な気がする。",
						"chinese": "别碰。总觉得不吉利。",
						"french": "Ne touche pas. Ça me semble sinistre.",
						"spanish": "No lo toques. Presiento algo siniestro.",
						"vietnamese": "Đừng chạm vào. Có gì đó không lành.",
						"thai": "อย่าจับนะ รู้สึกไม่ดีเลย",
						"hindi": "इसे मत छूना। कुछ अपशकुन लग रहा है।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "(이끼를 만진다) 윽… 머리가 띵해.",
						"english": "(Touches the moss) Ugh... My head's throbbing.",
						"japanese": "(苔に触れる) うっ…頭がガンガンする。",
						"chinese": "(触摸苔藓) 呃……头好晕。",
						"french": "(Touche la mousse) Urgh… J'ai la tête qui tourne.",
						"spanish": "(Toca el musgo) Uf… Me duele la cabeza.",
						"vietnamese": "(Chạm vào rêu) Ư… Đầu tôi đau nhói.",
						"thai": "(สัมผัสตะไคร่น้ำ) อึ๋ย… หัวมึนไปหมด",
						"hindi": "(काई को छूता है) उफ़... मेरा सिर चकरा रहा है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "그 빛은 숲의 속삭임. 너무 깊이 듣지 마세요.",
						"english": "That light is the forest's whisper. Don't listen too deeply.",
						"japanese": "あの光は森の囁き。深く聞きすぎないでください。",
						"chinese": "那光是森林的低语。别听得太深。",
						"french": "Cette lumière est le murmure de la forêt. N'écoute pas trop attentivement.",
						"spanish": "Esa luz es el susurro del bosque. No escuches demasiado profundo.",
						"vietnamese": "Ánh sáng đó là lời thì thầm của rừng. Đừng nghe quá sâu.",
						"thai": "แสงนั้นคือเสียงกระซิบของป่า อย่าฟังลึกเกินไป",
						"hindi": "वह रोशनी जंगल की सरसराहट है। बहुत गहराई से मत सुनना।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "ela"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"speaker": "ela",
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "이상해. 새 소리도, 벌레 소리도 없어.",
						"english": "Strange. No bird calls, no insect sounds.",
						"japanese": "おかしい。鳥の声も、虫の声もしない。",
						"chinese": "好奇怪。没有鸟叫声，也没有虫鸣声。",
						"french": "C'est étrange. Pas un chant d'oiseau, pas un bruit d'insecte.",
						"spanish": "Extraño. No hay cantos de pájaros ni sonidos de insectos.",
						"vietnamese": "Lạ thật. Không có tiếng chim, không có tiếng côn trùng.",
						"thai": "แปลกจัง ไม่มีเสียงนก ไม่มีเสียงแมลงเลย",
						"hindi": "अजीब है। न चिड़ियों की आवाज़ है, न कीड़ों की।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_3"
				},
				{
					"content": {
						"korean": "숲 곳곳에 굳어버린 듯한, 정교한 생명의 조형물이 나타난다.",
						"english": "Elaborate sculptures of life, seemingly frozen, appear throughout the forest.",
						"japanese": "森のあちこちに、まるで固まってしまったかのような、精巧な生命の造形物が現れる。",
						"chinese": "森林各处都出现了仿佛凝固的、精致的生命雕塑。",
						"french": "Des sculptures élaborées de vie, comme figées, apparaissent partout dans la forêt.",
						"spanish": "Esculturas elaboradas de vida, como petrificadas, aparecen por todo el bosque.",
						"vietnamese": "Khắp rừng xuất hiện những tác phẩm điêu khắc tinh xảo của sự sống, như thể bị đông cứng.",
						"thai": "ทั่วป่าปรากฏรูปปั้นสิ่งมีชีวิตที่ดูเหมือนแข็งค้าง ประณีตงดงาม",
						"hindi": "जंगल में जगह-जगह जीवन की जटिल मूर्तियाँ दिखाई देती हैं, मानो जम गई हों।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "이건… 진짜 살아있는 게 아닌가?",
						"english": "Are these... not truly alive?",
						"japanese": "これらは…本当に生きていないのか？",
						"chinese": "这…难道不是真正的活物吗？",
						"french": "Ce ne sont pas… de vrais êtres vivants ?",
						"spanish": "¿Acaso… no están realmente vivos?",
						"vietnamese": "Đây… không phải là thứ thật sự sống sao?",
						"thai": "นี่มัน… ไม่ได้มีชีวิตจริง ๆ ใช่ไหม",
						"hindi": "क्या ये... वास्तव में जीवित नहीं हैं?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "ela",
					"type": "speech",
					"content": {
						"korean": "숲은… 모든 것을 품으려 하죠. 때로는 영원히.",
						"english": "The forest... seeks to embrace everything. Sometimes, forever.",
						"japanese": "森は…すべてを包み込もうとする。時には永遠に。",
						"chinese": "森林…想要包容一切。有时，是永远。",
						"french": "La forêt… cherche à tout embrasser. Parfois, pour toujours.",
						"spanish": "El bosque… busca abrazarlo todo. A veces, para siempre.",
						"vietnamese": "Rừng… muốn ôm trọn mọi thứ. Đôi khi, là mãi mãi.",
						"thai": "ป่า… ต้องการโอบอุ้มทุกสิ่ง บางครั้งก็ตลอดไป",
						"hindi": "जंगल... सब कुछ समेटना चाहता है। कभी-कभी, हमेशा के लिए।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_4",
					"type": "speech",
					"content": {
						"korean": "소름 돋아. 빨리 벗어나야 해.",
						"english": "Goosebumps. We need to get out of here fast.",
						"japanese": "鳥肌が立つ。早くここから離れないと。",
						"chinese": "鸡皮疙瘩都起来了。得赶紧离开。",
						"french": "J'en ai la chair de poule. Il faut vite partir d'ici.",
						"spanish": "Piel de gallina. Tenemos que salir de aquí rápido.",
						"vietnamese": "Nổi da gà. Phải thoát khỏi đây nhanh thôi.",
						"thai": "ขนลุก ต้องรีบไปจากที่นี่แล้ว",
						"hindi": "रोंगटे खड़े हो गए। हमें जल्दी से निकलना होगा।"
					},
					"emotion": "angry"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "ela"
				},
				{
					"content": {
						"korean": "깊은 숲에서 아름답지만 광기 어린 멜로디가 울려 퍼진다.",
						"english": "A beautiful, yet mad, melody echoes from deep within the forest.",
						"japanese": "深い森から、美しくも狂気をはらんだメロディーが響き渡る。",
						"chinese": "幽深的森林中回荡着优美却又带着一丝疯狂的旋律。",
						"french": "Une mélodie magnifique, mais empreinte de folie, résonne au fond de la forêt.",
						"spanish": "Una melodía hermosa, pero con un toque de locura, resuena desde lo profundo del bosque.",
						"vietnamese": "Từ sâu trong rừng, một giai điệu vừa đẹp đẽ vừa điên cuồng vang vọng.",
						"thai": "จากป่าลึก เสียงเพลงที่ไพเราะแต่แฝงด้วยความวิปลาสได้ก้องกังวาน",
						"hindi": "घने जंगल से एक सुंदर, लेकिन पागलपन से भरी धुन गूँज रही है।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 소리… 너무 아름다워.",
						"english": "This sound... it's so beautiful.",
						"japanese": "この音…あまりに美しい。",
						"chinese": "这声音…太美了。",
						"french": "Ce son… est si beau.",
						"spanish": "Este sonido… es tan hermoso.",
						"vietnamese": "Âm thanh này… thật quá đẹp.",
						"thai": "เสียงนี้… ไพเราะเหลือเกิน",
						"hindi": "यह आवाज़... बहुत सुंदर है।"
					},
					"emotion": "happy",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "아니야, 뭔가 이상해. 따라가면 안 돼.",
						"english": "No, something's wrong. Don't follow it.",
						"japanese": "いや、何かおかしい。ついて行っちゃだめだ。",
						"chinese": "不对，有些不对劲。别跟着它。",
						"french": "Non, quelque chose ne va pas. Ne le suis pas.",
						"spanish": "No, algo anda mal. No lo sigas.",
						"vietnamese": "Không, có gì đó không ổn. Đừng đi theo.",
						"thai": "ไม่นะ มีบางอย่างผิดปกติ อย่าตามไป",
						"hindi": "नहीं, कुछ तो गड़बड़ है। उसके पीछे मत जाओ।"
					},
					"emotion": "sad",
					"speaker": "character_1",
					"type": "speech"
				},
				{
					"content": {
						"korean": "멈춰요! 그 노래는… 숲의 유혹.",
						"english": "Stop! That song... the forest's temptation.",
						"japanese": "止めて！その歌は…森の誘惑。",
						"chinese": "住手！那首歌是…森林的诱惑。",
						"french": "Arrêtez ! Cette chanson… la tentation de la forêt.",
						"spanish": "¡Alto! Esa canción... la tentación del bosque.",
						"vietnamese": "Dừng lại! Bài hát đó… là sự cám dỗ của rừng.",
						"thai": "หยุดนะ! เพลงนั่น...คือคำลวงของป่า",
						"hindi": "रुको! वो गाना... जंगल का मोह है।"
					},
					"emotion": "angry",
					"speaker": "ela",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "나에게로 와… 영원한 평화를 줄 테니…",
						"english": "Come to me... I will give you eternal peace...",
						"japanese": "私のもとへ来い…永遠の安らぎを与えよう…",
						"chinese": "到我这来…我将赐予你永恒的宁静…",
						"french": "Viens à moi… Je te donnerai la paix éternelle…",
						"spanish": "Ven a mí... Te daré paz eterna...",
						"vietnamese": "Hãy đến với ta… ta sẽ ban cho ngươi sự bình yên vĩnh cửu…",
						"thai": "มาหาข้าสิ...ข้าจะมอบสันติสุขนิรันดร์ให้...",
						"hindi": "मेरे पास आओ... मैं तुम्हें शाश्वत शांति दूंगा..."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "누구야? 들려오는 목소리…",
						"english": "Who is it? That voice I hear...",
						"japanese": "誰だ？聞こえてくる声…",
						"chinese": "是谁？听到的声音…",
						"french": "Qui est-ce ? Cette voix que j'entends…",
						"spanish": "¿Quién es? Esa voz que escucho...",
						"vietnamese": "Ai đó? Giọng nói tôi đang nghe…",
						"thai": "ใครน่ะ? เสียงที่ได้ยิน...",
						"hindi": "कौन है? वो आवाज़ जो मैं सुन रहा हूँ..."
					},
					"emotion": "base"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 것들. 내 숲은… 영원하다…",
						"english": "Foolish beings. My forest… is eternal…",
						"japanese": "愚かな者たちめ。私の森は…永遠だ…",
						"chinese": "愚蠢的东西。我的森林…永恒不朽…",
						"french": "Insensés. Ma forêt… est éternelle…",
						"spanish": "Necios. Mi bosque… es eterno…",
						"vietnamese": "Những kẻ ngu ngốc. Rừng của ta… là vĩnh cửu…",
						"thai": "พวกโง่เขลา. ป่าของข้า… เป็นนิรันดร์…",
						"hindi": "मूर्खों। मेरा वन… अमर है…"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "아직… 끝나지 않았어!",
						"english": "It's not… over yet!",
						"japanese": "まだ…終わってない！",
						"chinese": "还没…结束！",
						"french": "Ce n'est pas… encore fini !",
						"spanish": "¡Aún… no ha terminado!",
						"vietnamese": "Vẫn… chưa kết thúc đâu!",
						"thai": "ยัง… ไม่จบ!",
						"hindi": "अभी… खत्म नहीं हुआ है!"
					},
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "크큭… 겨우… 이 정도인가? 숲은… 너희의 분노를… 기억할 것이다…",
						"english": "Heh heh... Is this... all you've got? The forest... will remember... your wrath...",
						"japanese": "ククク…これ…だけか？森は…お前たちの怒りを…記憶するだろう…",
						"chinese": "呵呵…就…这点本事吗？森林…会记住…你们的愤怒…",
						"french": "Hahaha… C'est… tout ce que tu as ? La forêt… se souviendra… de votre colère…",
						"spanish": "Je je... ¿Esto... es todo lo que tienes? El bosque... recordará... tu ira...",
						"vietnamese": "Khà khà… Chỉ… có thế thôi sao? Rừng… sẽ nhớ… cơn thịnh nộ của các ngươi…",
						"thai": "ฮ่าฮ่า...แค่นี้...เองรึ? ป่า...จะจดจำ...ความโกรธแค้นของพวกเจ้า...",
						"hindi": "हँ हँ... बस... इतना ही? जंगल... तुम्हारी नाराज़गी... याद रखेगा..."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "끝난 건가…?",
						"english": "Is it over...?",
						"japanese": "終わったのか…？",
						"chinese": "结束了吗…？",
						"french": "C'est fini…?",
						"spanish": "¿Se acabó...?",
						"vietnamese": "Đã kết thúc sao…?",
						"thai": "จบแล้วเหรอ...?",
						"hindi": "क्या यह खत्म हो गया...?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "쓰러진 괴수. 그러나 숲의 고요한 유혹은 끝나지 않았다. 더 깊은 곳에서, 진짜 광기가 잠들어 있었다.",
						"english": "The fallen beast. But the forest's quiet temptation had not ended. Deeper within, true madness slumbered.",
						"japanese": "倒れた怪獣。しかし、森の静かな誘惑は終わっていなかった。さらに深い場所で、真の狂気が眠っていた。",
						"chinese": "倒下的怪兽。然而，森林平静的诱惑并未结束。在更深处，真正的疯狂正在沉睡。",
						"french": "La bête est tombée. Mais la douce tentation de la forêt n'avait pas cessé. Plus profondément, la véritable folie sommeillait.",
						"spanish": "La bestia caída. Pero la tranquila tentación del bosque no había terminado. En lo más profundo, la verdadera locura dormía.",
						"vietnamese": "Quái vật đã ngã xuống. Nhưng sự cám dỗ tĩnh lặng của khu rừng vẫn chưa kết thúc. Sâu hơn nữa, một sự điên loạn thật sự đang ngủ vùi.",
						"thai": "สัตว์ประหลาดที่ล้มลง ทว่าคำลวงอันเงียบสงบของป่ายังไม่สิ้นสุด ที่ลึกกว่านั้น ความบ้าคลั่งที่แท้จริงกำลังหลับใหลอยู่",
						"hindi": "गिरा हुआ जानवर। लेकिन जंगल का शांत मोह खत्म नहीं हुआ था। और गहराई में, असली पागलपन सो रहा था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "드디어 내 숲에 도착했군. 고통은 끝날 것이다.",
						"english": "So, you've finally arrived in my forest. Your suffering will end.",
						"japanese": "ようこそ私の森へ。お前の苦痛は終わるだろう。",
						"chinese": "终于来到我的森林了。痛苦将终结。",
						"french": "Enfin, tu es arrivé dans ma forêt. La souffrance prendra fin.",
						"spanish": "Por fin has llegado a mi bosque. Tu sufrimiento terminará.",
						"vietnamese": "Cuối cùng ngươi cũng đã đến khu rừng của ta. Đau khổ sẽ chấm dứt.",
						"thai": "ในที่สุดเจ้าก็มาถึงป่าของข้า ความทุกข์ทรมานจะสิ้นสุดลง",
						"hindi": "तो, तुम आखिरकार मेरे जंगल में आ गए। तुम्हारा दुख खत्म होगा।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "숲을 망치는 네놈을 막겠다!",
						"english": "I'll stop you, defiler of the forest!",
						"japanese": "森を荒らす貴様を止める！",
						"chinese": "我将阻止你这个破坏森林的家伙！",
						"french": "Je t'arrêterai, toi qui défigures la forêt !",
						"spanish": "¡Te detendré, destructor del bosque!",
						"vietnamese": "Ta sẽ ngăn chặn ngươi, kẻ đang phá hoại khu rừng!",
						"thai": "ข้าจะหยุดเจ้า ผู้ทำลายป่า!",
						"hindi": "मैं तुम्हें रोकूंगा, जंगल को बर्बाद करने वाले!"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "망쳐? 난 모든 것을 하나로 엮을 뿐. 자, 내 작품이 되어라.",
						"english": "Defile? I merely weave everything into one. Now, become my masterpiece.",
						"japanese": "荒らす？私は全てを一つに織りなすだけだ。さあ、私の作品となれ。",
						"chinese": "破坏？我只是将一切编织为一体。来吧，成为我的作品。",
						"french": "Défigurer ? Je ne fais que tisser toute chose en une seule. Maintenant, deviens mon œuvre.",
						"spanish": "¿Destruir? Solo uno todo. Ahora, conviértete en mi obra.",
						"vietnamese": "Phá hoại? Ta chỉ đơn thuần kết nối mọi thứ thành một. Nào, hãy trở thành tác phẩm của ta.",
						"thai": "ทำลายเหรอ? ข้าแค่ถักทอทุกสิ่งให้เป็นหนึ่งเดียว มาเป็นผลงานของข้าซะ",
						"hindi": "बर्बाद करना? मैं तो बस सब कुछ एक साथ जोड़ रहा हूँ। अब, मेरी कृति बन जाओ।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				}
			]
		}
	]
} as const;
