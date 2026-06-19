export const scenario_desert_sipius_3_03 = {
	"scenario_id": "desert_sipius_3_03",
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
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "사막 깊숙한 곳, 뜨거운 태양 아래 기묘한 물통이 놓여 있었다.",
						"english": "Deep in the desert, under the scorching sun, lay a peculiar canteen.",
						"japanese": "砂漠の奥深く、灼熱の太陽の下、奇妙な水筒が置かれていた。",
						"chinese": "在沙漠深处，灼热的阳光下，放着一个奇特的水壶。",
						"french": "Au plus profond du désert, sous le soleil brûlant, se trouvait une gourde particulière.",
						"spanish": "En lo profundo del desierto, bajo el sol abrasador, yacía una cantimplora peculiar.",
						"vietnamese": "Sâu trong sa mạc, dưới ánh mặt trời thiêu đốt, có một chiếc bình nước kỳ lạ.",
						"thai": "ลึกเข้าไปในทะเลทราย ใต้แสงอาทิตย์อันร้อนระอุ มีกระติกน้ำแปลกๆ วางอยู่.",
						"hindi": "रेगिस्तान की गहराई में, तपते सूरज के नीचे, एक अजीब पानी की बोतल पड़ी थी।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이게 그 유물인가? 낡았잖아.",
						"english": "Is this the relic? It's so old.",
						"japanese": "これがその遺物か？随分と古いな。",
						"chinese": "这就是那件遗物吗？好旧啊。",
						"french": "C'est ça le vestige ? C'est si vieux.",
						"spanish": "¿Es esta la reliquia? Está muy vieja.",
						"vietnamese": "Đây là di vật đó sao? Trông cũ quá.",
						"thai": "นี่คือโบราณวัตถุเหรอ? มันเก่ามากเลยนะ.",
						"hindi": "क्या यह वह अवशेष है? यह तो बहुत पुराना है।"
					}
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "하지만… 어쩐지 불길한 기운이 느껴져.",
						"english": "But... I feel an ominous presence.",
						"japanese": "しかし… なぜか不吉な気配がする。",
						"chinese": "但是……我感到一种不祥的气息。",
						"french": "Mais... je ressens une présence inquiétante.",
						"spanish": "Pero... siento una presencia ominosa.",
						"vietnamese": "Nhưng... tôi cảm thấy một luồng khí bất an.",
						"thai": "แต่... ฉันรู้สึกถึงพลังงานที่ไม่เป็นมงคล.",
						"hindi": "लेकिन... मुझे एक अशुभ उपस्थिति महसूस हो रही है।"
					},
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"type": "direction",
					"action": "enter",
					"speaker": "kemet",
					"duration_ms": 500
				},
				{
					"speaker": "kemet",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…이 기운. 심상치 않아.",
						"english": "...This aura. It's not normal.",
						"japanese": "…この気配。尋常じゃない。",
						"chinese": "……这种气息。非同寻常。",
						"french": "…Cette aura. Ce n'est pas normal.",
						"spanish": "…Esta aura. No es normal.",
						"vietnamese": "…Luồng khí này. Thật bất thường.",
						"thai": "...พลังงานนี้. มันไม่ปกติ.",
						"hindi": "...यह आभा। यह सामान्य नहीं है।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "케메트? 뭐가 문제야? 갈증이 더 심해진 것 같아.",
						"english": "Kemet? What's wrong? My thirst seems to be getting worse.",
						"japanese": "ケメト？どうした？喉の渇きがさらにひどくなったようだ。",
						"chinese": "凯麦特？怎么了？我的口渴感似乎更严重了。",
						"french": "Kemet ? Qu'est-ce qui ne va pas ? Ma soif semble s'aggraver.",
						"spanish": "Kemet? ¿Qué pasa? Mi sed parece empeorar.",
						"vietnamese": "Kemet? Có chuyện gì vậy? Cơn khát của tôi dường như tệ hơn.",
						"thai": "เคมิต? มีอะไรผิดปกติเหรอ? ฉันรู้สึกกระหายน้ำมากขึ้น.",
						"hindi": "केमेट? क्या बात है? मेरी प्यास और बढ़ गई लगती है।"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "고대 블레이드마스터의 전설… '갈증 칼날' 이야기가 떠오르는군.",
						"english": "The legend of the ancient Blademaster... the tale of the 'Thirst Blade' comes to mind.",
						"japanese": "古代ブレードマスターの伝説…「渇きの刃」の話が頭に浮かぶ。",
						"chinese": "古代剑圣的传说……“饥渴之刃”的故事浮现在我脑海中。",
						"french": "La légende de l'ancien Maître-Lame... l'histoire de la \"Lame de Soif\" me revient en mémoire.",
						"spanish": "La leyenda del antiguo Maestro de la Espada... la historia de la 'Hoja de la Sed' me viene a la mente.",
						"vietnamese": "Truyền thuyết về Kiếm Sư cổ đại... câu chuyện về 'Lưỡi Kiếm Khát' hiện lên trong tâm trí tôi.",
						"thai": "ตำนานของจ้าวเพลงดาบโบราณ... เรื่องราวของ 'คมดาบแห่งความกระหาย' ผุดขึ้นมาในใจ.",
						"hindi": "प्राचीन ब्लेडमास्टर की किंवदंती... 'प्यास की तलवार' की कहानी याद आती है।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "kemet"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "갈증 칼날? 그게 뭔데?",
						"english": "Thirst Blade? What's that?",
						"japanese": "渇きの刃？それは何だ？",
						"chinese": "饥渴之刃？那是什么？",
						"french": "La Lame de Soif ? Qu'est-ce que c'est ?",
						"spanish": "¿La Hoja de la Sed? ¿Qué es eso?",
						"vietnamese": "Lưỡi Dao Khát Vọng? Đó là gì?",
						"thai": "ดาบแห่งความกระหาย? มันคืออะไร?",
						"hindi": "प्यास की तलवार? वह क्या है?"
					},
					"speaker": "character_2"
				},
				{
					"speaker": "kemet",
					"content": {
						"korean": "모든 수분을 탐하고, 생명을 말려 죽이는… 살아있는 유물.",
						"english": "A living artifact… that hungers for all moisture, withering life away.",
						"japanese": "あらゆる水分を貪り、命を枯らしていく…生ける遺物。",
						"chinese": "吞噬所有水分，使生命枯萎…一件活着的遗物。",
						"french": "Un artefact vivant… qui dévore toute humidité et fane la vie.",
						"spanish": "Un artefacto viviente… que ansía toda humedad, marchitando la vida.",
						"vietnamese": "Một cổ vật sống… thèm khát mọi độ ẩm, làm khô héo sự sống.",
						"thai": "วัตถุโบราณมีชีวิต…ที่ดูดกลืนความชื้นทั้งหมด และทำให้ชีวิตเหี่ยวเฉา.",
						"hindi": "एक जीवित कलाकृति… जो हर नमी को तरसती है, जीवन को सुखा देती है।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "그럼 이건… 보물이 아니었단 말이야?",
						"english": "So this wasn't… a treasure after all?",
						"japanese": "じゃあこれは…宝じゃなかったってこと？",
						"chinese": "所以这…不是宝藏？",
						"french": "Alors ce n'était pas… un trésor après tout ?",
						"spanish": "¿Así que esto no era… un tesoro después de todo?",
						"vietnamese": "Vậy ra đây không phải… một kho báu?",
						"thai": "งั้นนี่ก็…ไม่ใช่สมบัติหรอกเหรอ?",
						"hindi": "तो यह… कोई खजाना नहीं था?"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "아니. 이건… 재앙이야. 멈춰야 해.",
						"english": "No. This is… a disaster. It must be stopped.",
						"japanese": "いや。これは…災厄だ。止めなければ。",
						"chinese": "不。这是一个…灾难。必须阻止它。",
						"french": "Non. C'est… un désastre. Il faut l'arrêter.",
						"spanish": "No. Esto es… una catástrofe. Hay que detenerlo.",
						"vietnamese": "Không. Đây là… một tai họa. Phải ngăn chặn nó.",
						"thai": "ไม่. นี่คือ…หายนะ. ต้องหยุดมัน.",
						"hindi": "नहीं। यह… एक आपदा है। इसे रोकना होगा।"
					},
					"speaker": "kemet"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"content": {
						"korean": "물통의 기운은 더욱 짙어졌다. 사막의 갈증이 탐험대를 옥죄었다.",
						"english": "The aura of the canteen grew denser. The desert's thirst constricted the expedition team.",
						"japanese": "水筒の気配はさらに濃くなった。砂漠の渇きが探検隊を締め付けた。",
						"chinese": "水壶的气息更加浓厚了。沙漠的干渴束缚着探险队。",
						"french": "L'aura de la gourde s'épaissit. La soif du désert étreignit l'équipe d'expédition.",
						"spanish": "El aura de la cantimplora se hizo más densa. La sed del desierto oprimió al equipo de expedición.",
						"vietnamese": "Khí tức của bình nước càng đậm đặc. Cơn khát của sa mạc bóp nghẹt đội thám hiểm.",
						"thai": "พลังงานจากกระบอกน้ำเข้มข้นขึ้น. ความกระหายของทะเลทรายบีบรัดทีมสำรวจ.",
						"hindi": "पानी की बोतल की आभा और घनी हो गई। रेगिस्तान की प्यास ने अभियान दल को जकड़ लिया।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "젠장, 숨조차 쉬기 힘들어.",
						"english": "Damn, it's hard to even breathe.",
						"japanese": "くそ、息をするのさえ辛い。",
						"chinese": "该死，连呼吸都困难。",
						"french": "Bon sang, c'est dur même de respirer.",
						"spanish": "Maldita sea, es difícil incluso respirar.",
						"vietnamese": "Chết tiệt, đến thở thôi cũng khó.",
						"thai": "แย่แล้ว, หายใจยังลำบาก.",
						"hindi": "धिक्कार है, सांस लेना भी मुश्किल है।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_3",
					"content": {
						"korean": "이대로 가다간 모두 말라 죽을 거야!",
						"english": "If we keep going like this, we'll all die of thirst!",
						"japanese": "このままじゃ、みんな干からびて死んじまうぞ！",
						"chinese": "这样下去，我们都会渴死！",
						"french": "Si on continue comme ça, on va tous mourir de soif !",
						"spanish": "¡Si seguimos así, todos moriremos de sed!",
						"vietnamese": "Cứ thế này, chúng ta sẽ chết khát hết!",
						"thai": "ถ้าเป็นแบบนี้ต่อไป, เราทุกคนจะต้องตายเพราะกระหายน้ำ!",
						"hindi": "अगर ऐसे ही चलते रहे तो हम सब प्यास से मर जाएंगे!"
					},
					"type": "speech",
					"emotion": "angry"
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "벗어날 수 없는 거대한 힘이 탐험대를 지배하기 시작했다.",
						"english": "An inescapable, colossal force began to dominate the expedition team.",
						"japanese": "逃れられない巨大な力が、探検隊を支配し始めた。",
						"chinese": "一股无法摆脱的巨大力量开始支配探险队。",
						"french": "Une force colossale et inéluctable commença à dominer l'équipe d'expédition.",
						"spanish": "Una fuerza colosal e ineludible comenzó a dominar al equipo de expedición.",
						"vietnamese": "Một thế lực khổng lồ không thể thoát khỏi bắt đầu chi phối đội thám hiểm.",
						"thai": "พลังอันมหาศาลที่ไม่อาจหลีกหนีได้เริ่มครอบงำทีมสำรวจ.",
						"hindi": "एक अपरिहार्य, विशाल शक्ति ने अभियान दल पर हावी होना शुरू कर दिया।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "어떻게 해야… 이 악몽을 끝낼 수 있지?",
						"english": "How can we… end this nightmare?",
						"japanese": "どうすれば…この悪夢を終わらせられる？",
						"chinese": "我们该如何…结束这场噩梦？",
						"french": "Comment peut-on… mettre fin à ce cauchemar ?",
						"spanish": "¿Cómo podemos… poner fin a esta pesadilla?",
						"vietnamese": "Làm sao chúng ta… có thể kết thúc cơn ác mộng này?",
						"thai": "เราจะ…ยุติฝันร้ายนี้ได้อย่างไร?",
						"hindi": "हम इस दुःस्वप्न को… कैसे खत्म कर सकते हैं?"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이미 너무 늦은 것 같아…",
						"english": "I think it's already too late…",
						"japanese": "もう手遅れな気がする…",
						"chinese": "恐怕已经太迟了…",
						"french": "Je crois que c'est déjà trop tard…",
						"spanish": "Creo que ya es demasiado tarde…",
						"vietnamese": "Tôi nghĩ đã quá muộn rồi…",
						"thai": "ดูเหมือนจะสายเกินไปแล้ว…",
						"hindi": "मुझे लगता है कि अब बहुत देर हो चुकी है…"
					},
					"speaker": "character_4"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "마침내, 모든 갈증의 근원과 마주했다.",
						"english": "Finally, I face the source of all thirst.",
						"japanese": "ついに、すべての渇きの根源と向き合った。",
						"chinese": "终于，我面对了所有干渴的根源。",
						"french": "Enfin, j'affronte la source de toute soif.",
						"spanish": "Finalmente, me enfrento a la fuente de toda sed.",
						"vietnamese": "Cuối cùng, tôi đối mặt với nguồn gốc của mọi cơn khát.",
						"thai": "ในที่สุด ข้าก็เผชิญหน้ากับต้นตอของความกระหายทั้งหมด",
						"hindi": "अंततः, मैं सभी प्यास के स्रोत का सामना करता हूँ।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "흐흐흐… 내 영역에 온 것을 환영한다.",
						"english": "Heh heh heh… Welcome to my domain.",
						"japanese": "フフフ… 我が領域へようこそ。",
						"chinese": "呵呵呵… 欢迎来到我的领域。",
						"french": "Hé hé hé… Bienvenue dans mon domaine.",
						"spanish": "Je je je… Bienvenido a mi dominio.",
						"vietnamese": "Hê hê hê… Chào mừng đến với lãnh địa của ta.",
						"thai": "ฮ่าๆๆ… ยินดีต้อนรับสู่แดนของข้า",
						"hindi": "हहह… मेरे क्षेत्र में तुम्हारा स्वागत है।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "네가… 이 모든 갈증의 원흉이구나!",
						"english": "You… You are the mastermind behind all this thirst!",
						"japanese": "お前が… このすべての渇きの元凶か！",
						"chinese": "你… 你就是这一切干渴的幕后黑手！",
						"french": "Toi… Tu es le cerveau derrière toute cette soif !",
						"spanish": "¡Tú… Tú eres el cerebro detrás de toda esta sed!",
						"vietnamese": "Ngươi… Ngươi chính là kẻ chủ mưu của mọi cơn khát này!",
						"thai": "แก… แกคือต้นเหตุของความกระหายทั้งหมดนี่เอง!",
						"hindi": "तुम… तुम ही हो इस सारी प्यास के पीछे का मास्टरमाइंड!"
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "흐흐… 나약한 것들… 영원히 갈증에 허덕여라!",
						"english": "Heh heh… Weaklings… Suffer from thirst forever!",
						"japanese": "フフ… 弱き者たちよ… 永遠に渇きに苦しめ！",
						"chinese": "呵呵… 弱者们… 永远在干渴中挣扎吧！",
						"french": "Hé hé… Faibles… Souffrez de la soif éternellement !",
						"spanish": "Je je… ¡Debiluchos… Sufrid de sed para siempre!",
						"vietnamese": "Hê hê… Những kẻ yếu ớt… Hãy khát khao mãi mãi!",
						"thai": "ฮ่าๆ… พวกอ่อนแอ… จงทนทุกข์ทรมานจากความกระหายไปตลอดกาล!",
						"hindi": "हह… कमजोरों… हमेशा के लिए प्यास से तड़पते रहो!"
					},
					"type": "speech",
					"emotion": "happy",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "젠장… 이대로 끝낼 순 없어!",
						"english": "Damn it… I can't end it like this!",
						"japanese": "くそ… このままでは終われない！",
						"chinese": "该死… 不能就这样结束！",
						"french": "Mince… Je ne peux pas en finir comme ça !",
						"spanish": "¡Maldita sea… No puedo terminar así!",
						"vietnamese": "Chết tiệt… Không thể kết thúc như thế này được!",
						"thai": "ให้ตายสิ… จะจบแบบนี้ไม่ได้!",
						"hindi": "धिक्कार है… मैं इसे ऐसे खत्म नहीं कर सकता!"
					}
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "크윽… 겨우 이 정도라니… 하지만… 갈증은… 영원하다…",
						"english": "Ugh… Is this all you've got… But… the thirst… is eternal…",
						"japanese": "くっ… たったこれだけか… しかし… 渇きは… 永遠だ…",
						"chinese": "呃… 就这点本事吗… 但是… 干渴… 是永恒的…",
						"french": "Ugh… Ce n'est que ça… Mais… la soif… est éternelle…",
						"spanish": "Ugh… ¿Es todo lo que tienes… Pero… la sed… es eterna…",
						"vietnamese": "Ư… Chỉ có thế này thôi sao… Nhưng… cơn khát… là vĩnh cửu…",
						"thai": "อึก… แค่นี้เองเหรอ… แต่… ความกระหาย… เป็นนิรันดร์…",
						"hindi": "उह… क्या बस इतना ही… लेकिन… प्यास… शाश्वत है…"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "헛소리 마! 우리가 널 끝낼 거야!",
						"english": "Shut up! We'll put an end to you!",
						"japanese": "黙れ！俺たちが貴様を終わらせる！",
						"chinese": "闭嘴！我们会终结你！",
						"french": "Tais-toi ! Nous allons t'achever !",
						"spanish": "¡Cállate! ¡Te acabaremos!",
						"vietnamese": "Câm miệng! Chúng ta sẽ kết thúc ngươi!",
						"thai": "หุบปาก! เราจะจัดการแกเอง!",
						"hindi": "चुप रहो! हम तुम्हें खत्म कर देंगे!"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "갈증의 근원은 잠시 멈췄다. 그러나 사막의 저주는 끝나지 않았다.",
						"english": "The source of thirst has been temporarily halted. However, the desert's curse has not ended.",
						"japanese": "渇きの根源は一時的に止まった。しかし、砂漠の呪いは終わっていない。",
						"chinese": "干渴的根源暂时停止了。然而，沙漠的诅咒并未结束。",
						"french": "La source de la soif a été temporairement arrêtée. Cependant, la malédiction du désert n'est pas terminée.",
						"spanish": "La fuente de la sed ha sido detenida temporalmente. Sin embargo, la maldición del desierto no ha terminado.",
						"vietnamese": "Nguồn gốc của cơn khát đã tạm thời dừng lại. Tuy nhiên, lời nguyền của sa mạc vẫn chưa kết thúc.",
						"thai": "ต้นตอของความกระหายหยุดชะงักชั่วคราว แต่คำสาปของทะเลทรายยังไม่สิ้นสุด",
						"hindi": "प्यास का स्रोत अस्थायी रूप से रुक गया है। हालांकि, रेगिस्तान का अभिशाप समाप्त नहीं हुआ है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"끝없는 사막, 목마름과의 싸움.",
			"낡은 물통 하나가 모든 것을 바꾸리라곤 상상조차 못 했다.",
			"고대 전설의 그림자가 서서히 탐험대를 덮쳐온다.",
			"단순한 유물이 아니다. 이 기묘한 갈증은… 경고였다."
		],
		"english": [
			"Endless desert, a battle against thirst.",
			"I never imagined an old canteen would change everything.",
			"The shadow of an ancient legend slowly engulfs the expedition.",
			"It's not just a relic. This strange thirst... it was a warning."
		],
		"japanese": [
			"終わらない砂漠、渇きとの戦い。",
			"古い水筒一つがすべてを変えるとは、想像すらできなかった。",
			"古代伝説の影が、ゆっくりと探検隊を覆い始める。",
			"単なる遺物ではない。この奇妙な渇きは… 警告だったのだ。"
		],
		"chinese": [
			"无尽的沙漠，与饥渴的战斗。",
			"我从未想过一个旧水壶会改变一切。",
			"古老传说的阴影慢慢笼罩着探险队。",
			"这不仅仅是一件遗物。这奇怪的口渴感……是一个警告。"
		],
		"french": [
			"Désert sans fin, un combat contre la soif.",
			"Je n'aurais jamais imaginé qu'une vieille gourde changerait tout.",
			"L'ombre d'une ancienne légende enveloppe lentement l'expédition.",
			"Ce n'est pas qu'un simple vestige. Cette étrange soif... c'était un avertissement."
		],
		"spanish": [
			"Desierto interminable, una batalla contra la sed.",
			"Nunca imaginé que una vieja cantimplora lo cambiaría todo.",
			"La sombra de una antigua leyenda envuelve lentamente a la expedición.",
			"No es solo una reliquia. Esta extraña sed... era una advertencia."
		],
		"vietnamese": [
			"Sa mạc vô tận, cuộc chiến chống lại cơn khát.",
			"Tôi chưa bao giờ tưởng tượng một chiếc bình nước cũ sẽ thay đổi mọi thứ.",
			"Bóng tối của một truyền thuyết cổ xưa dần bao trùm đoàn thám hiểm.",
			"Đây không chỉ là một di vật. Cơn khát kỳ lạ này... là một lời cảnh báo."
		],
		"thai": [
			"ทะเลทรายอันไร้ที่สิ้นสุด, การต่อสู้กับความกระหาย.",
			"ฉันไม่เคยคิดเลยว่ากระติกน้ำเก่าๆ ใบเดียวจะเปลี่ยนทุกสิ่ง.",
			"เงาของตำนานโบราณค่อยๆ ปกคลุมคณะสำรวจ.",
			"นี่ไม่ใช่แค่โบราณวัตถุ. ความกระหายแปลกๆ นี้... มันคือคำเตือน."
		],
		"hindi": [
			"अंतहीन रेगिस्तान, प्यास के खिलाफ एक लड़ाई।",
			"मैंने कभी कल्पना भी नहीं की थी कि एक पुरानी पानी की बोतल सब कुछ बदल देगी।",
			"एक प्राचीन किंवदंती की छाया धीरे-धीरे अभियान दल को घेर लेती है।",
			"यह सिर्फ एक अवशेष नहीं है। यह अजीब प्यास... एक चेतावनी थी।"
		]
	}
} as const;
