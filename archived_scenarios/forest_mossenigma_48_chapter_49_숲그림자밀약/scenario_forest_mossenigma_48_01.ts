export const scenario_forest_mossenigma_48_01 = {
	"scenario_id": "forest_mossenigma_48_01",
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
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "어둠이 짙게 깔린 밀림. 나무뿌리가 길을 막았다.",
						"english": "A dense, dark jungle. Tree roots blocked the path.",
						"japanese": "暗闇が深く立ち込める密林。木の根が道を塞いでいた。",
						"chinese": "密林深处，黑暗笼罩。树根挡住了去路。",
						"french": "Une jungle dense et sombre. Les racines des arbres bloquaient le chemin.",
						"spanish": "Una selva densa y oscura. Las raíces de los árboles bloqueaban el camino.",
						"vietnamese": "Rừng sâu tối đen. Rễ cây chắn lối.",
						"thai": "ป่าทึบที่มืดมิด รากไม้ขวางทางอยู่.",
						"hindi": "घने अंधेरे जंगल में। पेड़ की जड़ों ने रास्ता रोक रखा था।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "으스스한데. 소문대로군.",
						"english": "Spooky. Just like the rumors.",
						"japanese": "不気味だな。噂通りだ。",
						"chinese": "真诡异。正如传闻所说。",
						"french": "Étrange. Comme les rumeurs.",
						"spanish": "Espeluznante. Tal como los rumores.",
						"vietnamese": "Thật rùng rợn. Đúng như lời đồn.",
						"thai": "น่าขนลุก สมกับเป็นข่าวลือ.",
						"hindi": "डरावना। अफवाहों के मुताबिक ही है।"
					},
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"type": "direction",
					"speaker": "ela",
					"action": "enter"
				},
				{
					"speaker": "ela",
					"content": {
						"korean": "기다리고 있었어. 당신이 그 소문의 주인공인가?",
						"english": "I've been waiting. Are you the one from the rumors?",
						"japanese": "待っていたよ。あなたがその噂の主役か？",
						"chinese": "我一直在等你。你就是传闻中的那个人吗？",
						"french": "Je vous attendais. Êtes-vous le sujet des rumeurs ?",
						"spanish": "Te estaba esperando. ¿Eres el protagonista de esos rumores?",
						"vietnamese": "Tôi đã đợi. Anh là nhân vật chính trong lời đồn đó phải không?",
						"thai": "รออยู่เลย คุณคือตัวเอกของข่าวลือสินะ?",
						"hindi": "मैं इंतजार कर रहा था। क्या तुम उन अफवाहों के नायक हो?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "누구지?",
						"english": "Who are you?",
						"japanese": "誰だ？",
						"chinese": "你是谁？",
						"french": "Qui êtes-vous ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Ai đấy?",
						"thai": "ใครน่ะ?",
						"hindi": "कौन हो तुम?"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "ela",
					"content": {
						"korean": "엘라. 정보상이지. 당신에게 흥미로운 의뢰가 있어.",
						"english": "Ella. An informant. I have an interesting request for you.",
						"japanese": "エラ。情報屋だ。あなたに興味深い依頼がある。",
						"chinese": "埃拉。一名情报贩子。我有一个有趣的委托要交给你。",
						"french": "Ella. Une informatice. J'ai une requête intéressante pour vous.",
						"spanish": "Ella. Una informante. Tengo un encargo interesante para ti.",
						"vietnamese": "Ella. Một người cung cấp thông tin. Tôi có một nhiệm vụ thú vị dành cho anh.",
						"thai": "เอลล่า ฉันเป็นคนส่งข่าว มีคำขอที่น่าสนใจสำหรับคุณ.",
						"hindi": "एला। एक मुखबिर। मेरे पास तुम्हारे लिए एक दिलचस्प काम है।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "'Moss Enigma'. 들어본 적 있나?",
						"english": "'Moss Enigma'. Ever heard of it?",
						"japanese": "『モス・エニグマ』。聞いたことはあるか？",
						"chinese": "'苔藓之谜'。你听说过吗？",
						"french": "'Moss Enigma'. Vous en avez déjà entendu parler ?",
						"spanish": "'Moss Enigma'. ¿Alguna vez has oído hablar de ello?",
						"vietnamese": "'Moss Enigma'. Anh đã từng nghe nói chưa?",
						"thai": "'มอส อีนิกม่า' เคยได้ยินไหม?",
						"hindi": "'मॉस एनिグमा'। क्या तुमने इसके बारे में सुना है?"
					},
					"speaker": "ela"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "ela",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"speaker": "ela",
					"content": {
						"korean": "오랜 전설 속 존재. 숲의 깊은 곳에 숨겨진 유물을 지킨다고 알려져 있지.",
						"english": "An ancient legendary being. Said to guard artifacts hidden deep within the forest.",
						"japanese": "古の伝説の存在。森の奥深くに隠された遺物を守ると言われている。",
						"chinese": "传说中遥远的存在。据说守护着森林深处隐藏的遗物。",
						"french": "Une entité légendaire ancienne. On dit qu'elle protège les artefacts cachés au plus profond de la forêt.",
						"spanish": "Un ser legendario ancestral. Se dice que custodia los artefactos ocultos en lo profundo del bosque.",
						"vietnamese": "Một thực thể huyền thoại cổ xưa. Được cho là canh giữ những di vật ẩn sâu trong rừng.",
						"thai": "สิ่งมีชีวิตในตำนานโบราณ ว่ากันว่าเฝ้าสมบัติที่ซ่อนอยู่ในป่าลึก",
						"hindi": "एक प्राचीन पौराणिक प्राणी। कहा जाता है कि यह जंगल की गहराई में छिपी कलाकृतियों की रक्षा करता है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그래서, 내게 뭘 바라는 거지?",
						"english": "So, what do you want from me?",
						"japanese": "それで、私に何を望むの？",
						"chinese": "所以，你希望我做什么？",
						"french": "Alors, qu'attendez-vous de moi ?",
						"spanish": "¿Entonces, qué esperas de mí?",
						"vietnamese": "Vậy, ngươi muốn gì ở ta?",
						"thai": "แล้วคุณต้องการอะไรจากฉัน?",
						"hindi": "तो, तुम मुझसे क्या चाहते हो?"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "유물을 찾아와줘. 분명 당신에게도 가치 있는 일일 거야.",
						"english": "Find the artifact. It will surely be worth your while.",
						"japanese": "遺物を見つけてきてくれ。きっとあなたにとっても価値のあることだろう。",
						"chinese": "帮我找到遗物。这对你来说也肯定有价值。",
						"french": "Trouvez l'artefact. Ce sera sûrement bénéfique pour vous.",
						"spanish": "Encuentra el artefacto. Sin duda, valdrá la pena para ti.",
						"vietnamese": "Hãy tìm di vật về. Chắc chắn đó cũng là việc có giá trị đối với ngươi.",
						"thai": "ช่วยตามหาสมบัติให้หน่อยสิ มันจะต้องคุ้มค่าสำหรับคุณแน่ๆ",
						"hindi": "कलाकृति ढूंढो। यह निश्चित रूप से तुम्हारे लिए भी मूल्यवान होगा।"
					},
					"speaker": "ela",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "단, 숲의 정보는 믿지 마. 보이는 게 다가 아니니까.",
						"english": "But, don't trust the forest's information. What you see isn't everything.",
						"japanese": "ただし、森の情報は信じるな。見えるものが全てではないから。",
						"chinese": "但别相信森林的信息。眼见不一定为实。",
						"french": "Cependant, ne vous fiez pas aux informations de la forêt. Ce que vous voyez n'est pas tout.",
						"spanish": "Pero no confíes en la información del bosque. Lo que ves no es todo.",
						"vietnamese": "Tuy nhiên, đừng tin thông tin của rừng. Vì những gì nhìn thấy không phải là tất cả.",
						"thai": "แต่ก็อย่าเชื่อข้อมูลจากป่า สิ่งที่เห็นอาจไม่ใช่ทั้งหมด",
						"hindi": "लेकिन, जंगल की जानकारी पर भरोसा मत करना। जो दिखता है, वह सब कुछ नहीं होता।"
					},
					"speaker": "ela"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…무슨 의미지?",
						"english": "...What do you mean?",
						"japanese": "…どういう意味だ？",
						"chinese": "…什么意思？",
						"french": "...Que voulez-vous dire ?",
						"spanish": "...¿Qué quieres decir?",
						"vietnamese": "...Ý ngươi là gì?",
						"thai": "...หมายความว่าไง?",
						"hindi": "...तुम्हारा क्या मतलब है?"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "때론 가장 가까운 적이 가장 달콤한 말을 하지.",
						"english": "Sometimes the closest enemy speaks the sweetest words.",
						"japanese": "時には、最も近い敵が最も甘い言葉を話すものだ。",
						"chinese": "有时，最近的敌人会说出最甜美的话语。",
						"french": "Parfois, l'ennemi le plus proche prononce les mots les plus doux.",
						"spanish": "A veces, el enemigo más cercano pronuncia las palabras más dulces.",
						"vietnamese": "Đôi khi, kẻ thù gần nhất lại nói những lời ngọt ngào nhất.",
						"thai": "บางครั้งศัตรูที่ใกล้ที่สุดก็พูดคำหวานที่สุด",
						"hindi": "कभी-कभी सबसे करीबी दुश्मन सबसे मीठे बोल बोलता है।"
					},
					"speaker": "ela",
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						2,
						2
					],
					"type": "direction",
					"speaker": "ela",
					"action": "enter"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이 숲, 심상치 않아. 발길이 닿을수록 더 깊어지는 느낌이야.",
						"english": "This forest... it's unsettling. The further I go, the deeper it feels.",
						"japanese": "この森、ただならぬ雰囲気だ。足を踏み入れるほど、深くなる気がする。",
						"chinese": "这座森林，不寻常。越是深入，感觉越是深邃。",
						"french": "Cette forêt... elle est étrange. Plus j'avance, plus elle semble profonde.",
						"spanish": "Este bosque... es inquietante. Cuanto más avanzo, más profundo se siente.",
						"vietnamese": "Khu rừng này, thật bất thường. Càng bước đi, càng cảm thấy sâu thẳm.",
						"thai": "ป่านี้...มันแปลกๆ ยิ่งเดินเข้าไปก็ยิ่งรู้สึกเหมือนมันลึกขึ้นเรื่อยๆ",
						"hindi": "यह जंगल... अजीब है। जितना आगे बढ़ता हूं, उतना ही गहरा महसूस होता है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "ela",
					"content": {
						"korean": "맞아. 숲은 언제나 비밀을 품고 있지. 특히 이곳은.",
						"english": "Indeed. Forests always hold secrets. Especially this one.",
						"japanese": "そうだ。森は常に秘密を抱えている。特にここはね。",
						"chinese": "没错。森林总是藏着秘密。尤其是这里。",
						"french": "En effet. Les forêts recèlent toujours des secrets. Surtout celle-ci.",
						"spanish": "Cierto. Los bosques siempre guardan secretos. Especialmente este.",
						"vietnamese": "Đúng vậy. Rừng luôn ẩn chứa bí mật. Đặc biệt là nơi này.",
						"thai": "ใช่แล้ว ป่ามักจะซ่อนความลับไว้เสมอ โดยเฉพาะที่นี่",
						"hindi": "सही बात है। जंगल हमेशा रहस्य समेटे रहते हैं। खासकर यह वाला।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "ela",
					"content": {
						"korean": "유물은 그 비밀의 문을 여는 열쇠가 될 거야.",
						"english": "The artifact will be the key to unlock that secret door.",
						"japanese": "遺物はその秘密の扉を開く鍵となるだろう。",
						"chinese": "遗物将是开启那扇秘密之门的钥匙。",
						"french": "L'artefact sera la clé pour ouvrir cette porte secrète.",
						"spanish": "El artefacto será la llave para abrir esa puerta secreta.",
						"vietnamese": "Di vật sẽ là chìa khóa mở cánh cửa bí mật đó.",
						"thai": "สมบัติจะเป็นกุญแจไขประตูแห่งความลับนั้น",
						"hindi": "कलाकृति उस रहस्यमय दरवाजे को खोलने की कुंजी होगी।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "대체 뭘 얻으려는 거지?",
						"english": "What exactly are you trying to gain?",
						"japanese": "一体何を企んでいる？",
						"chinese": "你到底想得到什么？",
						"french": "Qu'espérez-vous y gagner, au juste ?",
						"spanish": "¿Qué pretendes conseguir exactamente?",
						"vietnamese": "Ngươi rốt cuộc muốn đạt được điều gì?",
						"thai": "คุณต้องการอะไรกันแน่?",
						"hindi": "तुम आखिर क्या पाना चाहते हो?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "ela",
					"content": {
						"korean": "모든 거래에는 대가가 따르는 법. 곧 알게 될 거야.",
						"english": "Every deal comes with a price. You'll soon find out.",
						"japanese": "全ての取引には代償が伴うもの。すぐにわかるだろう。",
						"chinese": "所有交易都有代价。你很快就会明白。",
						"french": "Toute transaction a un prix. Tu le sauras bientôt.",
						"spanish": "Toda transacción tiene un precio. Pronto lo descubrirás.",
						"vietnamese": "Mọi giao dịch đều có cái giá của nó. Ngươi sẽ sớm biết thôi.",
						"thai": "ทุกการแลกเปลี่ยนย่อมมีราคาที่ต้องจ่าย เจ้าจะรู้ในไม่ช้า",
						"hindi": "हर सौदे की कीमत होती है। तुम्हें जल्द ही पता चल जाएगा।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "숲은 이제 짙은 어둠 그 자체였다. 되돌아갈 길은 보이지 않았다.",
						"english": "The forest was now absolute darkness. The path back was gone.",
						"japanese": "森は今や深い闇そのものだった。戻る道は見えなかった。",
						"chinese": "森林已是漆黑一片。归路已不可见。",
						"french": "La forêt n'était plus qu'une obscurité profonde. Le chemin du retour était introuvable.",
						"spanish": "El bosque era ahora una oscuridad profunda. El camino de regreso no se veía.",
						"vietnamese": "Rừng giờ đây chìm trong bóng tối dày đặc. Lối về đã không còn.",
						"thai": "บัดนี้ป่ากลายเป็นความมืดมิด เส้นทางกลับมองไม่เห็นแล้ว",
						"hindi": "वन अब घना अंधकार था। लौटने का कोई रास्ता नहीं दिख रहा था।"
					},
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "여기까지 왔어. 이제 와서 멈출 순 없어.",
						"english": "We've come this far. Can't stop now.",
						"japanese": "ここまで来た。今さら止まるわけにはいかない。",
						"chinese": "已经走到这里了。现在不能停下。",
						"french": "Nous sommes arrivés si loin. Impossible de s'arrêter maintenant.",
						"spanish": "Hemos llegado hasta aquí. No podemos detenernos ahora.",
						"vietnamese": "Đã đến nước này rồi. Không thể dừng lại được.",
						"thai": "มาไกลขนาดนี้แล้ว จะหยุดตอนนี้ไม่ได้",
						"hindi": "हम यहाँ तक आ गए हैं। अब रुक नहीं सकते।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "ela"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "ela",
					"content": {
						"korean": "결정했구나. 현명한 선택이야.",
						"english": "You've decided. A wise choice.",
						"japanese": "決めたな。賢明な選択だ。",
						"chinese": "你决定了。明智的选择。",
						"french": "Tu as décidé. Un choix judicieux.",
						"spanish": "Has decidido. Una elección sabia.",
						"vietnamese": "Ngươi đã quyết định rồi. Một lựa chọn khôn ngoan.",
						"thai": "เจ้าตัดสินใจแล้ว เป็นการเลือกที่ฉลาด",
						"hindi": "तुमने तय कर लिया। एक समझदार चुनाव।"
					}
				},
				{
					"content": {
						"korean": "저 앞에 당신이 찾는 유물이 있어. 그리고… 누군가도.",
						"english": "The artifact you seek is up ahead. And... someone else.",
						"japanese": "探している遺物はあの先にある。そして…誰かも。",
						"chinese": "你正在寻找的遗物就在前面。而且……还有人。",
						"french": "L'artefact que tu cherches est là-bas. Et… quelqu'un d'autre.",
						"spanish": "El artefacto que buscas está allá. Y… alguien más.",
						"vietnamese": "Thứ mà ngươi tìm kiếm nằm ở phía trước. Và… còn có ai đó nữa.",
						"thai": "วัตถุโบราณที่เจ้าตามหาอยู่ข้างหน้า และ...ใครบางคนด้วย",
						"hindi": "जिस कलाकृति को तुम ढूंढ रहे हो, वह आगे है। और... कोई और भी।"
					},
					"speaker": "ela",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "누구?",
						"english": "Who?",
						"japanese": "誰？",
						"chinese": "谁？",
						"french": "Qui ?",
						"spanish": "¿Quién?",
						"vietnamese": "Ai?",
						"thai": "ใคร?",
						"hindi": "कौन?"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "ela",
					"content": {
						"korean": "정체를 알 수 없는 존재. 유물을 지키는 자.",
						"english": "An unknown entity. The guardian of the artifact.",
						"japanese": "正体不明の存在。遺物を守る者。",
						"chinese": "一个不明身份的存在。遗物的守护者。",
						"french": "Une entité inconnue. Le gardien de l'artefact.",
						"spanish": "Una entidad desconocida. El guardián del artefacto.",
						"vietnamese": "Một thực thể không rõ danh tính. Kẻ bảo vệ di vật.",
						"thai": "สิ่งมีชีวิตที่ไม่อาจระบุตัวตน ผู้พิทักษ์วัตถุโบราณ",
						"hindi": "एक अज्ञात सत्ता। कलाकृति का संरक्षक।"
					}
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "거대한 동굴. 심장처럼 뛰는 소리가 들렸다. 그리고… 정체 모를 그림자.",
						"english": "A giant cave. A sound like a beating heart was heard. And... an unknown shadow.",
						"japanese": "巨大な洞窟。心臓のように脈打つ音が聞こえた。そして…正体不明の影。",
						"chinese": "一个巨大的洞穴。听到了像心跳一样的声音。还有……一个不明身份的影子。",
						"french": "Une caverne géante. Un son comme un cœur battant s'est fait entendre. Et… une ombre inconnue.",
						"spanish": "Una cueva gigantesca. Se oyó un sonido como un corazón latiendo. Y… una sombra desconocida.",
						"vietnamese": "Một hang động khổng lồ. Có tiếng đập như tim. Và… một bóng tối không rõ danh tính.",
						"thai": "ถ้ำขนาดมหึมา ได้ยินเสียงเต้นราวกับหัวใจ และ...เงาปริศนา",
						"hindi": "एक विशाल गुफा। दिल की धड़कन जैसी आवाज़ सुनाई दी। और... एक अज्ञात परछाई।"
					},
					"speaker": "narrator"
				},
				{
					"action": "exit",
					"speaker": "ela",
					"duration_ms": 400,
					"type": "direction"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "감히 이곳까지 발을 들이다니.",
						"english": "How dare you set foot in this place.",
						"japanese": "よくもここまで足を踏み入れたな。",
						"chinese": "你竟敢踏足此处。",
						"french": "Comment oses-tu poser le pied ici.",
						"spanish": "¿Cómo osas poner un pie aquí?",
						"vietnamese": "Ngươi dám đặt chân đến nơi này sao.",
						"thai": "กล้าดียังไงมาเหยียบที่นี่",
						"hindi": "तुम्हारी हिम्मत कैसे हुई यहाँ कदम रखने की।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "유물을 탐하려는 어리석은 자여.",
						"english": "You fool, coveting the artifact.",
						"japanese": "遺物を貪ろうとする愚かな者め。",
						"chinese": "贪图遗物的愚蠢之人。",
						"french": "Ô fou, qui convoites l'artefact.",
						"spanish": "¡Oh, tonto que codicias el artefacto!",
						"vietnamese": "Kẻ ngu ngốc tham lam di vật.",
						"thai": "เจ้าคนโง่ที่โลภอยากได้วัตถุโบราณ",
						"hindi": "कलाकृति का लालच करने वाले मूर्ख।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "비켜. 더 이상 방해하지 마.",
						"english": "Out of my way. Don't bother me anymore.",
						"japanese": "そこをどけ。もう邪魔をするな。",
						"chinese": "让开。别再妨碍我了。",
						"french": "Dégage. Ne me dérange plus.",
						"spanish": "Quítate de en medio. No me molestes más.",
						"vietnamese": "Tránh ra. Đừng cản đường ta nữa.",
						"thai": "หลีกไป อย่าขวางทางข้าอีก",
						"hindi": "रास्ते से हटो। मुझे अब और परेशान मत करो।"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "어리석은 자. 숲의 비밀을 감당할 수 없을 것이다.",
						"english": "Fool. You cannot handle the forest's secret.",
						"japanese": "愚か者め。森の秘密を背負うことはできないだろう。",
						"chinese": "愚蠢的家伙。你无法承受森林的秘密。",
						"french": "Imbécile. Tu ne peux pas gérer le secret de la forêt.",
						"spanish": "Necio. No podrás con el secreto del bosque.",
						"vietnamese": "Đồ ngốc. Ngươi không thể gánh vác bí mật của khu rừng đâu.",
						"thai": "เจ้าโง่ เจ้าจะรับมือกับความลับของป่าไม่ได้หรอก",
						"hindi": "मूर्ख। तुम जंगल का रहस्य नहीं संभाल पाओगे।"
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "젠장… 여기서 끝낼 순 없어!",
						"english": "Damn it... I can't end it here!",
						"japanese": "くそっ… ここで終わらせるわけにはいかない！",
						"chinese": "可恶… 不能就这样结束！",
						"french": "Mince... Je ne peux pas en finir ici !",
						"spanish": "¡Maldita sea... no puedo terminar aquí!",
						"vietnamese": "Chết tiệt... Không thể kết thúc ở đây được!",
						"thai": "บ้าจริง... ข้าจะจบลงที่นี่ไม่ได้!",
						"hindi": "धत् तेरे की… मैं इसे यहीं खत्म नहीं कर सकता!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "흥… 겨우 이 정도라니.",
						"english": "Hmph... Is this all you've got?",
						"japanese": "フン… この程度か。",
						"chinese": "哼… 就这点本事吗？",
						"french": "Pff... C'est tout ce que tu as ?",
						"spanish": "Mmm... ¿Esto es todo lo que tienes?",
						"vietnamese": "Hừm... Chỉ có thế thôi sao.",
						"thai": "หึ... แค่นี้เองเหรอ",
						"hindi": "हम्फ… बस इतना ही है तुम्हारे पास?"
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "하지만… 진짜 유혹은 이제부터 시작될 거야. 숲의 비밀은….",
						"english": "But... the real temptation starts now. The secret of the forest is...",
						"japanese": "だが… 本当の誘惑は今から始まる。森の秘密は…。",
						"chinese": "但是… 真正的诱惑现在才开始。森林的秘密是…。",
						"french": "Mais... la vraie tentation commence maintenant. Le secret de la forêt est...",
						"spanish": "Pero... la verdadera tentación comienza ahora. El secreto del bosque es...",
						"vietnamese": "Nhưng... sự cám dỗ thật sự chỉ mới bắt đầu. Bí mật của khu rừng là...",
						"thai": "แต่... การล่อลวงที่แท้จริงจะเริ่มขึ้นจากนี้ไป ความลับของป่าคือ...",
						"hindi": "लेकिन… असली प्रलोभन अब शुरू होगा। जंगल का रहस्य है…"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "뭐라고?",
						"english": "What did you say?",
						"japanese": "何だって？",
						"chinese": "你说什么？",
						"french": "Qu'est-ce que tu as dit ?",
						"spanish": "¿Qué dijiste?",
						"vietnamese": "Ngươi nói gì cơ?",
						"thai": "ว่าไงนะ",
						"hindi": "क्या कहा तुमने?"
					}
				},
				{
					"content": {
						"korean": "쓰러진 그림자는 의미심장한 말을 남겼다. 이 탐색은 이제 시작일 뿐.",
						"english": "The fallen shadow left meaningful words. This quest has only just begun.",
						"japanese": "倒れた影は意味深な言葉を残した。この探索はまだ始まったばかりだ。",
						"chinese": "倒下的身影留下意味深长的话语。这场探索才刚刚开始。",
						"french": "L'ombre tombée a laissé des mots lourds de sens. Cette quête ne fait que commencer.",
						"spanish": "La sombra caída dejó palabras significativas. Esta búsqueda apenas ha comenzado.",
						"vietnamese": "Bóng đen ngã xuống để lại những lời đầy ý nghĩa. Cuộc tìm kiếm này chỉ mới bắt đầu.",
						"thai": "เงาที่ล้มลงได้ทิ้งคำพูดที่มีความหมาย การค้นหานี้เพิ่งเริ่มต้นขึ้นเท่านั้น",
						"hindi": "गिरी हुई छाया ने सार्थक शब्द छोड़े। यह खोज अभी शुरू ही हुई है।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "Moss Enigma의 흔적은 더 깊은 곳으로 이어졌다.",
						"english": "Traces of the Moss Enigma led deeper.",
						"japanese": "Moss Enigmaの痕跡はより深い場所へと続いていた。",
						"chinese": "苔藓之谜的痕迹通往更深处。",
						"french": "Les traces du Moss Enigma menaient plus profondément.",
						"spanish": "Las huellas del Enigma del Musgo conducían a lo más profundo.",
						"vietnamese": "Dấu vết của Moss Enigma dẫn sâu hơn.",
						"thai": "ร่องรอยของ Moss Enigma นำไปสู่ที่ลึกยิ่งกว่า",
						"hindi": "मॉस एनिग्मा के निशान और गहरे तक ले गए।"
					},
					"speaker": "narrator"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"어둠이 짙게 깔린 밀림. 나무들의 속삭임이 불길하다.",
			"정체 모를 소문이 떠돌았다. 'Moss Enigma'.",
			"위험한 거래는 언제나 달콤한 유혹으로 시작되지.",
			"알 수 없는 불안감이 드리웠지만, 되돌릴 순 없었다."
		],
		"english": [
			"A dense, dark jungle. The trees' whispers are ominous.",
			"An unknown rumor spread. 'Moss Enigma'.",
			"Dangerous deals always begin with sweet temptation.",
			"An unknown unease loomed, but there was no turning back."
		],
		"japanese": [
			"暗闇が深く立ち込める密林。木々の囁きが不吉だ。",
			"正体不明の噂が広まった。『モス・エニグマ』。",
			"危険な取引はいつも甘い誘惑から始まるものだ。",
			"得体の知れない不安感が漂ったが、もう後戻りはできなかった。"
		],
		"chinese": [
			"密林深处，黑暗笼罩。树木的低语预示着不祥。",
			"一个不明身份的谣言四处流传。'苔藓之谜'。",
			"危险的交易总是以甜蜜的诱惑开始。",
			"一种莫名的不安感笼罩着，但已无法回头。"
		],
		"french": [
			"Une jungle dense et sombre. Les murmures des arbres sont de mauvais augure.",
			"Une rumeur inconnue circulait. 'Moss Enigma'.",
			"Les affaires dangereuses commencent toujours par une douce tentation.",
			"Une inquiétude inconnue planait, mais il n'y avait pas de retour en arrière."
		],
		"spanish": [
			"Una selva densa y oscura. Los susurros de los árboles son ominosos.",
			"Un rumor desconocido se extendió. 'Moss Enigma'.",
			"Los tratos peligrosos siempre comienzan con una dulce tentación.",
			"Una inquietud desconocida se cernió, pero no había vuelta atrás."
		],
		"vietnamese": [
			"Rừng sâu tối đen. Tiếng thì thầm của cây cối thật đáng ngại.",
			"Một tin đồn không rõ nguồn gốc lan truyền. 'Moss Enigma'.",
			"Những giao dịch nguy hiểm luôn bắt đầu bằng những cám dỗ ngọt ngào.",
			"Một cảm giác bất an không rõ bao trùm, nhưng không thể quay đầu."
		],
		"thai": [
			"ป่าทึบที่มืดมิด เสียงกระซิบของต้นไม้ช่างน่าขนลุก.",
			"ข่าวลือที่ไม่ทราบที่มาแพร่กระจาย 'มอส อีนิกม่า'.",
			"ข้อตกลงที่อันตรายมักเริ่มต้นด้วยสิ่งล่อใจอันหอมหวานเสมอ.",
			"ความรู้สึกกังวลที่ไม่ทราบสาเหตุปกคลุม แต่ก็ย้อนกลับไม่ได้แล้ว."
		],
		"hindi": [
			"घने अंधेरे जंगल में। पेड़ों की फुसफुसाहट अशुभ है。",
			"एक अज्ञात अफवाह फैल गई। 'मॉस एनिग्मा'।",
			"खतरनाक सौदे हमेशा मीठे लालच से शुरू होते हैं।",
			"एक अज्ञात बेचैनी छा गई, लेकिन पीछे हटना असंभव था।"
		]
	}
} as const;
