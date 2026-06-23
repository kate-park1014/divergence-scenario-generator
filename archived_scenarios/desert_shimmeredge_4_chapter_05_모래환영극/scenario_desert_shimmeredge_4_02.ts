export const scenario_desert_shimmeredge_4_02 = {
	"scenario_id": "desert_shimmeredge_4_02",
	"order": 2,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"dune": {
			"id": "mon_fc976b75-f009-4bf2-b660-a3053c95d668",
			"name": {
				"korean": "듄",
				"english": "Dune",
				"japanese": "デューン",
				"chinese": "沙丘",
				"french": "Dune",
				"spanish": "Dune",
				"vietnamese": "Dune",
				"thai": "ดูน",
				"hindi": "ड्यून"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/7568ec11-0329-44b4-740a-71b25ef62400/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/ba7095b5-0d99-40bd-1155-b57701c00f00/public"
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
					"emotion": "base",
					"content": {
						"korean": "거대한 천막 아래, 탐욕과 속임수로 가득 찬 시장이 펼쳐졌다.",
						"english": "Beneath the massive tent, a market brimming with greed and deception unfolded.",
						"japanese": "巨大な天幕の下、貪欲と欺瞞に満ちた市場が広がっていた。",
						"chinese": "巨大的帐篷下，一个充满贪婪和欺骗的市场展现在眼前。",
						"french": "Sous l'immense tente, un marché débordant de cupidité et de tromperie s'étendait.",
						"spanish": "Bajo la enorme carpa, se desplegaba un mercado lleno de codicia y engaño.",
						"vietnamese": "Dưới chiếc lều khổng lồ, một khu chợ đầy tham lam và lừa dối hiện ra.",
						"thai": "ใต้เต็นท์ขนาดยักษ์ ตลาดที่เต็มไปด้วยความโลภและการหลอกลวงได้เปิดออก",
						"hindi": "विशाल तंबू के नीचे, लालच और धोखे से भरा एक बाज़ार फैला हुआ था।"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이게 사막의 유일한 낙원이라고?",
						"english": "This is the desert's only paradise?",
						"japanese": "これが砂漠唯一の楽園だと？",
						"chinese": "这就是沙漠中唯一的乐园？",
						"french": "C'est le seul paradis du désert ?",
						"spanish": "¿Este es el único paraíso del desierto?",
						"vietnamese": "Đây là thiên đường duy nhất của sa mạc ư?",
						"thai": "นี่คือสวรรค์เดียวในทะเลทรายอย่างนั้นหรือ?",
						"hindi": "क्या यह रेगिस्तान का इकलौता स्वर्ग है?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"action": "enter",
					"speaker": "dune"
				},
				{
					"emotion": "happy",
					"content": {
						"korean": "어서 오십시오, 손님. 이 듄이 모든 걸 해결해 드립니다.",
						"english": "Welcome, customer. This Dune will solve everything for you.",
						"japanese": "ようこそ、お客様。このデューンが全てを解決いたします。",
						"chinese": "欢迎光临，客人。我，迪恩，将为您解决一切。",
						"french": "Bienvenue, client. Ce Dune résoudra tout pour vous.",
						"spanish": "Bienvenido, cliente. Este Dune lo resolverá todo por usted.",
						"vietnamese": "Hoan nghênh, khách hàng. Dune này sẽ giải quyết mọi thứ cho ngài.",
						"thai": "ยินดีต้อนรับครับลูกค้า ดูนคนนี้จะจัดการทุกอย่างให้ท่านเอง",
						"hindi": "स्वागत है, ग्राहक। यह ड्यून आपके लिए सब कुछ हल कर देगा।"
					},
					"type": "speech",
					"speaker": "dune"
				},
				{
					"content": {
						"korean": "물론, 그만큼의 '성실한 대가'는 필요하죠.",
						"english": "Of course, a 'sincere compensation' of equal measure is required.",
						"japanese": "もちろん、それ相応の「誠実な対価」は必要ですがね。",
						"chinese": "当然，也需要一份“真诚的代价”。",
						"french": "Bien sûr, un « juste prix » est nécessaire.",
						"spanish": "Por supuesto, se requiere una \"compensación sincera\" de igual medida.",
						"vietnamese": "Tất nhiên, một \"cái giá chân thành\" tương xứng là cần thiết.",
						"thai": "แน่นอนว่า ต้องแลกมาด้วย 'ค่าตอบแทนอันซื่อสัตย์' ที่สมน้ำสมเนื้อ",
						"hindi": "बेशक, उतनी ही 'ईमानदार कीमत' की भी ज़रूरत होगी।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "dune"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "물가가 터무니없어. 이건 사기야.",
						"english": "The prices are outrageous. This is a scam.",
						"japanese": "物価がとんでもない。これは詐欺だ。",
						"chinese": "物价太离谱了。这是诈骗。",
						"french": "Les prix sont exorbitants. C'est une arnaque.",
						"spanish": "Los precios son escandalosos. Esto es una estafa.",
						"vietnamese": "Giá cả cắt cổ. Đây là lừa đảo.",
						"thai": "ราคามันแพงเกินไป นี่มันหลอกลวงชัดๆ",
						"hindi": "कीमतें बहुत ज़्यादा हैं। यह धोखा है।"
					},
					"speaker": "character_1"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "dune",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						2
					]
				},
				{
					"emotion": "base",
					"content": {
						"korean": "여전히 불만이 많으신가 보군요. 이 위대한 시스템을 이해하지 못하는군.",
						"english": "Still so many complaints, I see. You don't understand this magnificent system.",
						"japanese": "まだ不満が多いようですね。この偉大なシステムを理解できていないようだ。",
						"chinese": "看来您仍有很多不满。您不理解这个伟大的系统。",
						"french": "Toujours autant de plaintes, à ce que je vois. Vous ne comprenez pas ce magnifique système.",
						"spanish": "Veo que todavía tiene muchas quejas. No comprende este magnífico sistema.",
						"vietnamese": "Có vẻ ngài vẫn còn nhiều bất mãn. Ngài không hiểu hệ thống vĩ đại này.",
						"thai": "ยังคงมีเรื่องไม่พอใจมากมายสินะ ท่านไม่เข้าใจระบบอันยิ่งใหญ่นี้เลย",
						"hindi": "लगता है आपको अभी भी बहुत शिकायतें हैं। आप इस शानदार व्यवस्था को नहीं समझते।"
					},
					"type": "speech",
					"speaker": "dune"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "물품을 독점하고 가격을 조작하는 게 시스템이라고?",
						"english": "Monopolizing goods and manipulating prices is the system?",
						"japanese": "「品物を独占して価格を操作するのがシステムだと？」",
						"chinese": "垄断商品、操纵价格就是系统？",
						"french": "Monopoliser les biens et manipuler les prix, c'est ça le système ?",
						"spanish": "¿Monopolizar bienes y manipular precios es el sistema?",
						"vietnamese": "Độc quyền hàng hóa và thao túng giá cả là hệ thống ư?",
						"thai": "การผูกขาดสินค้าและปั่นราคาคือระบบงั้นหรือ?",
						"hindi": "वस्तुओं पर एकाधिकार और कीमतों में हेरफेर ही व्यवस्था है?"
					},
					"type": "speech"
				},
				{
					"speaker": "dune",
					"type": "speech",
					"content": {
						"korean": "약자는 도태되고 강자가 지배하는 것이 세상의 이치입니다. 그게 바로 번영이죠.",
						"english": "The weak are eliminated, the strong dominate – that's the way of the world. That is prosperity.",
						"japanese": "「弱者が淘汰され、強者が支配するのが世の理です。それが繁栄というもの。」",
						"chinese": "弱者被淘汰，强者支配，这是世界的法则。这就是繁荣。",
						"french": "Les faibles sont éliminés, les forts dominent, c'est la loi du monde. C'est ça la prospérité.",
						"spanish": "Los débiles son eliminados, los fuertes dominan; esa es la ley del mundo. Eso es prosperidad.",
						"vietnamese": "Kẻ yếu bị loại bỏ, kẻ mạnh thống trị – đó là quy luật của thế giới. Đó chính là sự thịnh vượng.",
						"thai": "ผู้อ่อนแอถูกกำจัด ผู้แข็งแกร่งปกครอง – นั่นคือสัจธรรมของโลก นี่แหละคือความรุ่งเรือง",
						"hindi": "कमजोरों को खत्म किया जाता है, मजबूत लोग हावी होते हैं - यही दुनिया का तरीका है। यही समृद्धि है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_2",
					"content": {
						"korean": "...역겨워.",
						"english": "...Disgusting.",
						"japanese": "「...吐き気がする。」",
						"chinese": "...恶心。",
						"french": "...Répugnant.",
						"spanish": "...Asqueroso.",
						"vietnamese": "...Ghê tởm.",
						"thai": "...น่ารังเกียจ.",
						"hindi": "...घिनौना।"
					},
					"emotion": "angry",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "dune"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "네 부정을 폭로할 증거를 찾아냈어. 네 시대는 끝났어.",
						"english": "I've found evidence to expose your corruption. Your era is over.",
						"japanese": "「お前の不正を暴く証拠を見つけた。お前の時代は終わった。」",
						"chinese": "我找到了揭露你腐败的证据。你的时代结束了。",
						"french": "J'ai trouvé des preuves pour dénoncer ta corruption. Ton ère est terminée.",
						"spanish": "He encontrado pruebas para exponer tu corrupción. Tu era ha terminado.",
						"vietnamese": "Tôi đã tìm thấy bằng chứng để vạch trần sự tham nhũng của ngươi. Thời đại của ngươi đã kết thúc.",
						"thai": "ฉันเจอหลักฐานที่จะเปิดโปงการทุจริตของแกแล้ว ยุคของแกจบลงแล้ว",
						"hindi": "मुझे तुम्हारे भ्रष्टाचार को उजागर करने के सबूत मिल गए हैं। तुम्हारा युग खत्म हो गया है।"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "dune",
					"content": {
						"korean": "하찮은 증거 따위로 이 시장이 흔들릴 거라 생각합니까? 순진하군.",
						"english": "Do you think this market will be shaken by such trivial evidence? How naive.",
						"japanese": "「取るに足らない証拠ごときでこの市場が揺らぐとでも？おめでたい奴だ。」",
						"chinese": "你以为区区证据就能动摇这个市场吗？太天真了。",
						"french": "Pensez-vous que ce marché sera ébranlé par des preuves aussi insignifiantes ? Quelle naïveté.",
						"spanish": "¿Crees que este mercado se tambaleará por pruebas tan triviales? Qué ingenuo.",
						"vietnamese": "Ngươi nghĩ thị trường này sẽ bị lung lay bởi những bằng chứng tầm thường đó sao? Thật ngây thơ.",
						"thai": "แกคิดว่าตลาดนี้จะสั่นคลอนด้วยหลักฐานไร้สาระแค่นั้นเหรอ? ช่างไร้เดียงสาเสียจริง",
						"hindi": "क्या तुम्हें लगता है कि इतने मामूली सबूतों से यह बाज़ार हिल जाएगा? कितने भोले हो।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "밤마다 사막에서 들려오는 콧노래를 아십니까? 그 멜로디가 모든 것을 붙잡을 겁니다.",
						"english": "Do you know the humming that echoes from the desert every night? That melody will seize everything.",
						"japanese": "「夜ごと砂漠から聞こえる鼻歌をご存知ですか？そのメロディが全てを捕らえるでしょう。」",
						"chinese": "你知道每晚从沙漠里传来的哼唱吗？那旋律会抓住一切。",
						"french": "Connaissez-vous le fredonnement qui résonne du désert chaque nuit ? Cette mélodie s'emparera de tout.",
						"spanish": "¿Conoces el tarareo que resuena desde el desierto cada noche? Esa melodía lo atrapará todo.",
						"vietnamese": "Ngươi có biết điệu ngân nga văng vẳng từ sa mạc mỗi đêm không? Giai điệu đó sẽ nắm giữ mọi thứ.",
						"thai": "คุณรู้จักเสียงฮัมเพลงที่ดังมาจากทะเลทรายทุกคืนไหม? ท่วงทำนองนั้นจะยึดครองทุกสิ่ง",
						"hindi": "क्या आप रात को रेगिस्तान से आने वाली गुनगुनाहट को जानते हैं? वह धुन सब कुछ पकड़ लेगी।"
					},
					"emotion": "base",
					"speaker": "dune"
				},
				{
					"speaker": "character_3",
					"content": {
						"korean": "그 콧노래가 대체 뭔데...",
						"english": "What exactly is that humming...",
						"japanese": "「その鼻歌って一体...」",
						"chinese": "那哼唱到底是什么...",
						"french": "Qu'est-ce que c'est que ce fredonnement...",
						"spanish": "¿Qué es exactamente ese tarareo...?",
						"vietnamese": "Điệu ngân nga đó rốt cuộc là gì...",
						"thai": "เสียงฮัมเพลงนั่นมันคืออะไรกันแน่...",
						"hindi": "वह गुनगुनाहट आखिर क्या है..."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "밤의 사막에 기묘한 콧노래가 바람에 실려 왔다. 듣는 자는 알 수 없는 강박에 사로잡혔다.",
						"english": "A strange humming drifted on the wind in the night desert. Those who heard it were seized by an unknown compulsion.",
						"japanese": "「夜の砂漠に奇妙な鼻歌が風に乗って漂ってきた。それを聞いた者は、知らぬ間に強迫観念に囚われた。」",
						"chinese": "夜晚的沙漠里，一阵奇怪的哼唱随风飘来。听到的人都被一种莫名的强迫症所困扰。",
						"french": "Un étrange fredonnement flottait dans le vent du désert nocturne. Ceux qui l'entendaient étaient saisis par une compulsion inconnue.",
						"spanish": "Un extraño tarareo flotó en el viento del desierto nocturno. Quienes lo escucharon fueron poseídos por una compulsión desconocida.",
						"vietnamese": "Một điệu ngân nga kỳ lạ trôi theo gió trong sa mạc đêm. Những kẻ nghe thấy nó bị cuốn vào một sự cưỡng ép không thể hiểu được.",
						"thai": "เสียงฮัมเพลงแปลกประหลาดลอยมาตามลมในทะเลทรายยามค่ำคืน ผู้ที่ได้ยินต่างถูกครอบงำด้วยแรงกระตุ้นที่ไม่รู้จัก",
						"hindi": "रात के रेगिस्तान में हवा के साथ एक अजीब गुनगुनाहट बह रही थी। जिसने भी इसे सुना, वह एक अज्ञात मजबूरी में फंस गया।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "dune"
				},
				{
					"speaker": "dune",
					"emotion": "sad",
					"content": {
						"korean": "아직도 희망 따위를 붙들고 있군요. 가련하게도.",
						"english": "Still clinging to hope, are we? How pathetic.",
						"japanese": "「まだ希望などというものにすがっているのですか。哀れなことだ。」",
						"chinese": "还在紧抓着希望不放吗？真是可怜。",
						"french": "Vous vous accrochez encore à l'espoir, n'est-ce pas ? Pathétique.",
						"spanish": "¿Todavía te aferras a la esperanza? Qué patético.",
						"vietnamese": "Vẫn còn bám víu vào hy vọng sao? Đáng thương thay.",
						"thai": "ยังคงยึดติดกับความหวังงั้นหรือ? ช่างน่าสมเพช",
						"hindi": "अभी भी उम्मीद से चिपके हुए हो? कितने दयनीय हो।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "네 탐욕 때문에 무너지는 사람들을 봐.",
						"english": "Look at the people collapsing because of your greed.",
						"japanese": "「お前の貪欲さのせいで崩れていく人々を見ろ。」",
						"chinese": "看看那些因为你的贪婪而崩溃的人们。",
						"french": "Regarde les gens qui s'effondrent à cause de ta cupidité.",
						"spanish": "Mira a la gente que se derrumba por tu avaricia.",
						"vietnamese": "Hãy nhìn những người đang sụp đổ vì lòng tham của ngươi.",
						"thai": "ดูผู้คนที่ล่มสลายเพราะความโลภของแกสิ",
						"hindi": "देखो, तुम्हारी लालच की वजह से लोग कैसे बिखर रहे हैं।"
					},
					"emotion": "angry"
				},
				{
					"speaker": "dune",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이 시스템은 영원합니다. 당신의 저항은 결국 무의미한 순환일 뿐이죠.",
						"english": "This system is eternal. Your resistance is but a meaningless cycle.",
						"japanese": "このシステムは永遠だ。お前の抵抗は結局、無意味な循環に過ぎない。",
						"chinese": "这个系统是永恒的。你的抵抗最终只是毫无意义的循环。",
						"french": "Ce système est éternel. Votre résistance n'est qu'un cycle insignifiant.",
						"spanish": "Este sistema es eterno. Tu resistencia no es más que un ciclo sin sentido.",
						"vietnamese": "Hệ thống này là vĩnh cửu. Sự kháng cự của ngươi rốt cuộc chỉ là một vòng lặp vô nghĩa.",
						"thai": "ระบบนี้เป็นนิรันดร์ การต่อต้านของเจ้าก็เป็นเพียงวัฏจักรที่ไร้ความหมายเท่านั้น",
						"hindi": "यह व्यवस्था शाश्वत है। तुम्हारा प्रतिरोध अंततः एक व्यर्थ चक्र मात्र है।"
					}
				},
				{
					"speaker": "character_4",
					"content": {
						"korean": "아니, 이번엔 다를 거야. 끝장낼 거야.",
						"english": "No, not this time. I'll end it.",
						"japanese": "いや、今回は違う。終わらせる。",
						"chinese": "不，这次会不同。我要彻底结束它。",
						"french": "Non, pas cette fois. J'en finirai.",
						"spanish": "No, esta vez será diferente. Acabaré con esto.",
						"vietnamese": "Không, lần này sẽ khác. Ta sẽ kết thúc nó.",
						"thai": "ไม่หรอก คราวนี้จะต่างออกไป ฉันจะยุติมันเอง",
						"hindi": "नहीं, इस बार अलग होगा। मैं इसे खत्म कर दूंगा।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "탐욕의 그림자가 시장 전체를 집어삼켰다. 돌아갈 길은 없었다.",
						"english": "The shadow of greed swallowed the entire market. There was no turning back.",
						"japanese": "強欲の影が市場全体を飲み込んだ。もう後戻りはできなかった。",
						"chinese": "贪婪的阴影吞噬了整个市场。已无回头之路。",
						"french": "L'ombre de la cupidité a englouti tout le marché. Il n'y avait plus de retour en arrière.",
						"spanish": "La sombra de la codicia engulló todo el mercado. No había vuelta atrás.",
						"vietnamese": "Bóng tối tham lam nuốt chửng toàn bộ thị trường. Không còn đường quay lại.",
						"thai": "เงาแห่งความโลภกลืนกินตลาดทั้งหมด ไม่มีทางหวนกลับแล้ว",
						"hindi": "लालच की छाया ने पूरे बाज़ार को निगल लिया। अब कोई वापसी नहीं थी।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "dune",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "듄, 네 부패를 폭로했다. 이제 어떻게 할 거지?",
						"english": "Dune, I've exposed your corruption. What will you do now?",
						"japanese": "デューン、お前の腐敗を暴いた。さて、どうする？",
						"chinese": "沙丘，我已揭露你的腐败。现在你打算怎么办？",
						"french": "Dune, j'ai révélé ta corruption. Que feras-tu maintenant ?",
						"spanish": "Dune, he expuesto tu corrupción. ¿Qué harás ahora?",
						"vietnamese": "Dune, ta đã phơi bày sự thối nát của ngươi. Giờ ngươi tính làm gì?",
						"thai": "ดูน ฉันได้เปิดเผยความทุจริตของแกแล้ว ตอนนี้แกจะทำยังไง?",
						"hindi": "ड्यून, मैंने तुम्हारे भ्रष्टाचार का पर्दाफाश कर दिया है। अब तुम क्या करोगे?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "dune",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "하찮은 폭로 따위로 이 시장을 무너뜨릴 수 있을 것 같습니까?",
						"english": "Do you truly think a petty revelation can bring down this market?",
						"japanese": "些細な暴露程度でこの市場を崩せると思うか？",
						"chinese": "你以为区区一次揭露就能摧毁这个市场吗？",
						"french": "Croyez-vous vraiment qu'une révélation insignifiante puisse faire s'effondrer ce marché ?",
						"spanish": "¿De verdad crees que una revelación insignificante puede derribar este mercado?",
						"vietnamese": "Ngươi thật sự nghĩ một sự phơi bày nhỏ nhặt có thể đánh sập thị trường này ư?",
						"thai": "เจ้าคิดจริงๆ หรือว่าการเปิดเผยเล็กน้อยจะโค่นล้มตลาดนี้ได้?",
						"hindi": "क्या तुम्हें सच में लगता है कि एक छोटी सी बात इस बाज़ार को गिरा सकती है?"
					}
				},
				{
					"speaker": "dune",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "이 위대한 시스템의 수호자를 상대해 보시죠!",
						"english": "Face the guardian of this magnificent system!",
						"japanese": "この偉大なシステムの守護者を相手にしてみろ！",
						"chinese": "来吧，对抗这个伟大系统的守护者！",
						"french": "Affrontez le gardien de ce magnifique système !",
						"spanish": "¡Enfréntate al guardián de este magnífico sistema!",
						"vietnamese": "Hãy đối mặt với người bảo vệ của hệ thống vĩ đại này!",
						"thai": "จงเผชิญหน้ากับผู้พิทักษ์ของระบบอันยิ่งใหญ่นี้ซะ!",
						"hindi": "इस महान प्रणाली के संरक्षक का सामना करो!"
					}
				},
				{
					"direction": "down",
					"action": "exit",
					"speaker": "dune",
					"type": "direction",
					"duration_ms": 400
				},
				{
					"content": {
						"korean": "거대한 그림자가 시장의 심연에서 솟아올랐다.",
						"english": "A colossal shadow surged from the market's abyss.",
						"japanese": "巨大な影が市場の深淵から湧き上がった。",
						"chinese": "巨大的阴影从市场的深渊中升起。",
						"french": "Une ombre colossale a surgi des abysses du marché.",
						"spanish": "Una sombra colosal surgió del abismo del mercado.",
						"vietnamese": "Một bóng tối khổng lồ trỗi dậy từ vực sâu của thị trường.",
						"thai": "เงาขนาดมหึมาพวยพุ่งขึ้นมาจากขุมนรกของตลาด",
						"hindi": "बाजार की खाई से एक विशाल छाया निकली।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "이곳의 질서를 어지럽히는 자, 누구도 살아남을 수 없다.",
						"english": "None who disturb the order here shall survive.",
						"japanese": "ここの秩序を乱す者、誰も生き残れない。",
						"chinese": "搅乱此地秩序者，无人能幸免。",
						"french": "Nul ne survivra s'il perturbe l'ordre ici.",
						"spanish": "Nadie que perturbe el orden aquí sobrevivirá.",
						"vietnamese": "Kẻ nào phá vỡ trật tự nơi đây, sẽ không ai sống sót.",
						"thai": "ไม่มีใครที่รบกวนความสงบเรียบร้อยที่นี่จะรอดไปได้",
						"hindi": "जो यहां की व्यवस्था बिगाड़ेगा, कोई जीवित नहीं बचेगा।"
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "네가 이 시스템의 수호자인가.",
						"english": "Are you the guardian of this system?",
						"japanese": "お前がこのシステムの守護者か。",
						"chinese": "你就是这个系统的守护者吗？",
						"french": "Es-tu le gardien de ce système ?",
						"spanish": "¿Eres tú el guardián de este sistema?",
						"vietnamese": "Ngươi là người bảo vệ của hệ thống này ư?",
						"thai": "เจ้าคือผู้พิทักษ์ของระบบนี้หรือ?",
						"hindi": "क्या तुम इस प्रणाली के संरक्षक हो?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "크윽... 어리석은 자들... 나 하나 쓰러뜨려 봤자...",
						"english": "Ugh... Fools... Even if you defeat me...",
						"japanese": "くっ…愚か者どもめ…私一人倒したところで…",
						"chinese": "呃…愚蠢的家伙们…就算打倒了我…",
						"french": "Ugh... Imbéciles... Même si vous me battez...",
						"spanish": "Ugh... Tontos... Aunque me derroten...",
						"vietnamese": "Khụ... Bọn ngu ngốc... Dù có hạ được ta...",
						"thai": "อึก... พวกงี่เง่า... ต่อให้โค่นฉันลงได้...",
						"hindi": "उफ़... मूर्खों... अगर तुम मुझे हरा भी दो तो भी..."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "...이 시스템은... 변하지 않아... 영원히...",
						"english": "...This system... won't change... ever...",
						"japanese": "...このシステムは...変わらない...永遠に...",
						"chinese": "...这个系统...不会改变...永远...",
						"french": "...Ce système... ne changera pas... jamais...",
						"spanish": "...Este sistema... no cambiará... nunca...",
						"vietnamese": "...Hệ thống này... sẽ không thay đổi... mãi mãi...",
						"thai": "...ระบบนี้... จะไม่เปลี่ยน... ตลอดไป...",
						"hindi": "...यह व्यवस्था... नहीं बदलेगी... कभी नहीं..."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "...아무것도 변한 게 없다고?",
						"english": "...Nothing's changed?",
						"japanese": "...何も変わってないって？",
						"chinese": "...什么都没变吗？",
						"french": "...Rien n'a changé ?",
						"spanish": "...¿Nada ha cambiado?",
						"vietnamese": "...Không có gì thay đổi sao?",
						"thai": "...ไม่มีอะไรเปลี่ยนไปเลยหรือ?",
						"hindi": "...कुछ भी नहीं बदला?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "듄은 이미 사라지고 없었다. 시장은 잠시 고요했지만, 탐욕의 그림자는 여전했다.",
						"english": "Dune was gone. The market fell silent for a moment, but the shadow of greed lingered.",
						"japanese": "デューンは既に姿を消していた。市場は一時静まり返ったが、貪欲の影は依然として残っていた。",
						"chinese": "沙丘已然消失。市场暂时恢复了平静，但贪婪的阴影依然挥之不去。",
						"french": "Dune avait disparu. Le marché se tut un instant, mais l'ombre de la cupidité persistait.",
						"spanish": "Dune ya no estaba. El mercado quedó en silencio por un momento, but la sombra de la codicia seguía presente.",
						"vietnamese": "Dune đã biến mất. Chợ im ắng một lúc, nhưng bóng tối của lòng tham vẫn còn đó.",
						"thai": "ดูนหายไปแล้ว ตลาดเงียบไปชั่วขณะ แต่เงาแห่งความโลภยังคงอยู่",
						"hindi": "ड्यून गायब हो चुका था। बाजार क्षण भर के लिए शांत हो गया, लेकिन लालच की छाया अब भी छाई हुई थी।"
					},
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "밤마다 들려오는 기묘한 콧노래는 멈추지 않고 사람들을 잠식했다.",
						"english": "The strange humming heard every night didn't stop, eroding people's minds.",
						"japanese": "毎夜聞こえる奇妙な鼻歌は止まず、人々を蝕んでいった。",
						"chinese": "每晚响起的奇异哼唱声从未停止，它侵蚀着人们的心灵。",
						"french": "L'étrange fredonnement nocturne ne cessait pas, rongeant les esprits.",
						"spanish": "El extraño tarareo que se escuchaba cada noche no cesaba, consumiendo a la gente.",
						"vietnamese": "Tiếng ngâm nga kỳ lạ vang lên mỗi đêm không ngừng, dần nuốt chửng mọi người.",
						"thai": "เสียงฮัมเพลงแปลก ๆ ที่ได้ยินทุกคืนไม่เคยหยุดลง มันกัดกร่อนผู้คน",
						"hindi": "हर रात सुनाई देने वाली अजीब गुनगुनाहट बंद नहीं हुई, लोगों को नष्ट करती रही।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "또 다른 불합리한 시스템이 주인공을 기다리고 있었다.",
						"english": "Another unreasonable system awaited the protagonist.",
						"japanese": "また別の不合理なシステムが主人公を待ち受けていた。",
						"chinese": "另一个不合理的系统正等待着主人公。",
						"french": "Un autre système absurde attendait le protagoniste.",
						"spanish": "Otro sistema irracional esperaba al protagonista.",
						"vietnamese": "Một hệ thống bất hợp lý khác đang chờ đợi nhân vật chính.",
						"thai": "อีกระบบที่ไม่สมเหตุสมผลกำลังรอคอยตัวเอกอยู่",
						"hindi": "एक और अतार्किक व्यवस्था नायक का इंतजार कर रही थी।"
					},
					"type": "speech"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "시장 전체를 뒤덮은 탐욕의 그림자가 모든 것을 집어삼켰다.",
						"english": "The shadow of greed, engulfing the entire market, swallowed everything.",
						"japanese": "市場全体を覆い尽くした貪欲の影が、全てを飲み込んだ。",
						"chinese": "笼罩整个市场的贪婪之影吞噬了一切。",
						"french": "L'ombre de la cupidité, recouvrant tout le marché, engloutit tout.",
						"spanish": "La sombra de la codicia, cubriendo todo el mercado, lo devoró todo.",
						"vietnamese": "Bóng tối của lòng tham bao trùm toàn bộ thị trường, nuốt chửng mọi thứ.",
						"thai": "เงาแห่งความโลภที่ปกคลุมตลาดทั้งหมดได้กลืนกินทุกสิ่ง",
						"hindi": "पूरे बाजार पर छाई लालच की छाया ने सब कुछ निगल लिया।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "네 저항은 무의미하다. 이 거대한 시스템을 거스를 순 없어.",
						"english": "Your resistance is futile. You cannot defy this colossal system.",
						"japanese": "お前の抵抗は無意味だ。この巨大なシステムには逆らえない。",
						"chinese": "你的抵抗毫无意义。你无法违抗这个庞大的系统。",
						"french": "Ta résistance est inutile. Tu ne peux pas défier ce système colossal.",
						"spanish": "Tu resistencia es inútil. No puedes desafiar este sistema colosal.",
						"vietnamese": "Sự kháng cự của ngươi vô ích. Ngươi không thể chống lại hệ thống khổng lồ này.",
						"thai": "การต่อต้านของแกไร้ความหมาย แกไม่สามารถฝืนระบบอันใหญ่โตนี้ได้",
						"hindi": "तुम्हारा प्रतिरोध व्यर्थ है। तुम इस विशाल व्यवस्था का उल्लंघन नहीं कर सकते।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "...아직 포기하지 않아.",
						"english": "...I'm not giving up yet.",
						"japanese": "...まだ諦めない。",
						"chinese": "...我还没放弃。",
						"french": "...Je n'abandonne pas encore.",
						"spanish": "...Todavía no me rindo.",
						"vietnamese": "...Tôi chưa bỏ cuộc.",
						"thai": "...ฉันยังไม่ยอมแพ้",
						"hindi": "...मैंने अभी हार नहीं मानी है।"
					},
					"type": "speech",
					"speaker": "character_any"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"모래바람이 휘몰아치는 사막, 그 한가운데 탐욕의 시장이 자리 잡았다.",
			"상인 듄은 번영을 약속했지만, 그 약속 뒤엔 추악한 진실이 숨어 있었다.",
			"정의를 외쳐도, 폭로해도, 세상은 쉽사리 변하지 않았다.",
			"밤마다 들려오는 기묘한 콧노래가 사람들을 알 수 없는 강박에 사로잡았다."
		],
		"english": [
			"In a desert ravaged by sandstorms, a market of greed took root.",
			"Merchant Dune promised prosperity, but behind that promise lay an ugly truth.",
			"Even with cries for justice, with revelations, the world wouldn't easily change.",
			"A strange humming heard every night gripped people in an unknown obsession."
		],
		"japanese": [
			"砂嵐が吹き荒れる砂漠の真ん中に、貪欲な市場が根を下ろした。",
			"商人デューンは繁栄を約束したが、その約束の裏には醜い真実が隠されていた。",
			"正義を叫び、暴露しても、世界はそう簡単には変わらなかった。",
			"夜な夜な聞こえる奇妙な鼻歌が、人々を未知の強迫観念に囚われた。"
		],
		"chinese": [
			"在沙尘暴肆虐的沙漠中，一座贪婪的市场扎下了根。",
			"商人迪恩承诺带来繁荣，但承诺背后隐藏着一个丑陋的真相。",
			"即使呼喊正义，揭露真相，世界也未能轻易改变。",
			"每晚响起的奇异哼唱声，让人们陷入了一种莫名的强迫症。"
		],
		"french": [
			"Au milieu d'un désert balayé par les tempêtes de sable, un marché de la cupidité a pris racine.",
			"Le marchand Dune promettait la prospérité, mais derrière cette promesse se cachait une hideuse vérité.",
			"Même en criant à la justice, en dénonçant, le monde ne changeait pas si facilement.",
			"Un étrange fredonnement nocturne saisissait les gens d'une obsession inconnue."
		],
		"spanish": [
			"En un desierto azotado por tormentas de arena, un mercado de la codicia echó raíces.",
			"El mercader Dune prometía prosperidad, pero detrás de esa promesa se escondía una fea verdad.",
			"Aunque se clamara justicia, aunque se revelara la verdad, el mundo no cambiaría fácilmente.",
			"Un extraño tarareo que se escuchaba cada noche atrapaba a la gente en una obsesión desconocida."
		],
		"vietnamese": [
			"Giữa sa mạc đầy bão cát, một chợ tham lam đã mọc lên.",
			"Thương nhân Dune hứa hẹn sự thịnh vượng, nhưng đằng sau lời hứa đó là một sự thật xấu xí.",
			"Dù có hô hào công lý, dù có phơi bày, thế giới vẫn không dễ dàng thay đổi.",
			"Tiếng ngâm nga kỳ lạ vang lên mỗi đêm đã cuốn mọi người vào một nỗi ám ảnh không rõ."
		],
		"thai": [
			"ท่ามกลางทะเลทรายที่พายุทรายพัดกระหน่ำ ตลาดแห่งความโลภได้ถือกำเนิดขึ้น",
			"พ่อค้าดูนสัญญาถึงความเจริญรุ่งเรือง แต่เบื้องหลังคำสัญญานั้นกลับซ่อนความจริงอันน่าเกลียดไว้",
			"แม้จะเรียกร้องความยุติธรรม หรือเปิดโปงความจริง โลกก็ยังไม่เปลี่ยนแปลงง่ายๆ",
			"เสียงฮัมเพลงแปลกๆ ที่ได้ยินทุกคืนได้ดึงดูดผู้คนให้จมอยู่ในความหมกมุ่นที่ไม่รู้จัก"
		],
		"hindi": [
			"धूल भरी आंधियों से घिरे रेगिस्तान के बीचों-बीच, लालच का बाज़ार बस गया था।",
			"व्यापारी ड्यून ने समृद्धि का वादा किया था, लेकिन उस वादे के पीछे एक बदसूरत सच्चाई छिपी थी।",
			"न्याय की गुहार लगाने और सच्चाई उजागर करने पर भी, दुनिया आसानी से नहीं बदली।",
			"हर रात सुनाई देने वाली एक अजीब गुनगुनाहट ने लोगों को एक अज्ञात जुनून में जकड़ लिया।"
		]
	}
} as const;
