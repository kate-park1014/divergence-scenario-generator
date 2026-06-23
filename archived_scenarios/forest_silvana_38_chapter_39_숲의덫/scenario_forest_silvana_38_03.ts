export const scenario_forest_silvana_38_03 = {
	"scenario_id": "forest_silvana_38_03",
	"order": 3,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"ivy": {
			"id": "mon_d1c759f3-74f8-42b7-ba16-c705649f006f",
			"name": {
				"korean": "아이비",
				"english": "Ivy",
				"japanese": "アイビー",
				"chinese": "艾薇",
				"french": "Ivy",
				"spanish": "Ivy",
				"vietnamese": "Ivy",
				"thai": "ไอวี่",
				"hindi": "आइवी"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/654fde54-6029-4601-b4a8-0578f00df900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/6ee8738d-0e14-4f8d-d04d-c934b0fff000/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"숲은 깊어지고, 평화는 짙어졌다.",
			"그러나 고요함 뒤에는 다른 소리가 들렸다.",
			"숲의 수호자, 아이비. 그녀는 모든 것을 알고 있을까?",
			"아니면, 모두를 지키기 위해 속고 있는 걸까?"
		],
		"english": [
			"The forest deepened, and peace grew profound.",
			"Yet behind the tranquility, another sound emerged.",
			"Ivy, guardian of the forest. Does she know everything?",
			"Or is she being deceived to protect everyone?"
		],
		"japanese": [
			"森は深く、平和は色濃くなった。",
			"しかし、その静けさの裏には、別の音が聞こえた。",
			"森の守護者、アイビー。彼女はすべてを知っているのだろうか？",
			"それとも、皆を守るために騙されているのだろうか？"
		],
		"chinese": [
			"森林深邃，和平浓郁。",
			"然而，在寂静之后，传来不同的声音。",
			"森林的守护者，艾薇。她是否知道一切？",
			"或者，她为了守护大家而被欺骗了吗？"
		],
		"french": [
			"La forêt s'épaississait, la paix s'intensifiait.",
			"Pourtant, derrière le calme, un autre son se fit entendre.",
			"Ivy, gardienne de la forêt. Sait-elle tout ?",
			"Ou est-elle trompée pour protéger tout le monde ?"
		],
		"spanish": [
			"El bosque se hizo más profundo, y la paz más densa.",
			"Sin embargo, tras la quietud, se escuchó otro sonido.",
			"Ivy, la guardiana del bosque. ¿Lo sabe todo?",
			"O, ¿está siendo engañada para proteger a todos?"
		],
		"vietnamese": [
			"Rừng sâu thẳm, bình yên đậm đà.",
			"Nhưng đằng sau sự tĩnh lặng, một âm thanh khác vang lên.",
			"Ivy, người bảo vệ khu rừng. Liệu cô ấy có biết mọi thứ không?",
			"Hay cô ấy đang bị lừa dối để bảo vệ mọi người?"
		],
		"thai": [
			"ป่าลึกเข้าไป ความสงบก็ยิ่งเข้มข้นขึ้น",
			"ทว่าเบื้องหลังความเงียบสงบ เสียงอื่นก็ดังขึ้น",
			"ไอวี่ ผู้พิทักษ์ป่า เธอรู้ทุกอย่างหรือเปล่า?",
			"หรือว่าเธอถูกหลอกเพื่อปกป้องทุกคน?"
		],
		"hindi": [
			"वन गहरा गया, और शांति घनी हो गई।",
			"परंतु शांति के पीछे, एक और आवाज़ सुनाई दी।",
			"जंगल की संरक्षिका, आइवी। क्या वह सब कुछ जानती है?",
			"या, क्या वह सबको बचाने के लिए धोखे में है?"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "짙푸른 숲, 그러나 발소리조차 삼키는 침묵이 흘렀다.",
						"english": "A deep blue forest, yet a silence that swallowed even footsteps flowed.",
						"japanese": "深い青の森、しかし足音さえも飲み込む沈黙が流れていた。",
						"chinese": "深蓝的森林，然而寂静到连脚步声都吞噬。",
						"french": "Une forêt d'un bleu profond, mais un silence qui dévorait même les pas régnait.",
						"spanish": "Un bosque de un azul intenso, pero reinaba un silencio que devoraba hasta los pasos.",
						"vietnamese": "Khu rừng xanh thẳm, nhưng sự im lặng nuốt chửng cả tiếng bước chân.",
						"thai": "ป่าสีครามเข้ม ทว่าความเงียบสงบที่กลืนกินแม้แต่เสียงฝีเท้าก็ปกคลุม",
						"hindi": "गहरा नीला जंगल, फिर भी ऐसी खामोशी थी जो कदमों की आहट भी निगल लेती थी।"
					},
					"type": "speech"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"action": "enter",
					"speaker": "ivy"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…왔구나. 이곳은 숲의 심장부. 감히 외부인이 들어올 곳이 아니야.",
						"english": "...You've come. This is the heart of the forest. No outsider dares enter here.",
						"japanese": "…来たか。ここは森の心臓部。部外者が敢えて足を踏み入れる場所ではない。",
						"chinese": "…你来了。这里是森林的心脏。外来者竟敢闯入这里。",
						"french": "…Tu es venu. C'est le cœur de la forêt. Aucun étranger n'ose y pénétrer.",
						"spanish": "...Has venido. Este es el corazón del bosque. Ningún forastero se atreve a entrar aquí.",
						"vietnamese": "…Ngươi đã đến. Đây là trái tim của khu rừng. Không kẻ ngoại lai nào dám bước vào đây.",
						"thai": "…มาแล้วสินะ ที่นี่คือใจกลางป่า ไม่ใช่ที่ที่คนนอกจะกล้าเข้ามา",
						"hindi": "...तुम आ गए। यह जंगल का दिल है। किसी बाहरी व्यक्ति का यहां आना वर्जित है।"
					},
					"speaker": "ivy",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "당신은 누구지?",
						"english": "Who are you?",
						"japanese": "あなたは誰だ？",
						"chinese": "你是谁？",
						"french": "Qui êtes-vous ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Ngươi là ai?",
						"thai": "คุณคือใคร?",
						"hindi": "तुम कौन हो?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "나는 아이비. 숲의 수호자. 너희의 존재는 조화를 해칠 뿐이야.",
						"english": "I am Ivy. Guardian of the forest. Your presence only harms the harmony.",
						"japanese": "私はアイビー。森の守護者。お前たちの存在は、調和を損なうだけだ。",
						"chinese": "我是艾薇。森林的守护者。你们的存在只会破坏和谐。",
						"french": "Je suis Ivy. Gardienne de la forêt. Votre présence ne fait que nuire à l'harmonie.",
						"spanish": "Soy Ivy. Guardiana del bosque. Vuestra presencia solo perturba la armonía.",
						"vietnamese": "Ta là Ivy. Người bảo vệ khu rừng. Sự hiện diện của các ngươi chỉ làm tổn hại sự hài hòa.",
						"thai": "ฉันคือไอวี่ ผู้พิทักษ์ป่า การมีอยู่ของพวกเจ้าจะทำลายความกลมกลืนเท่านั้น",
						"hindi": "मैं आइवी हूं। जंगल की संरक्षिका। तुम्हारी उपस्थिति केवल सद्भाव को बिगाड़ेगी।"
					},
					"speaker": "ivy",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "조화…?",
						"english": "Harmony...?",
						"japanese": "調和…？",
						"chinese": "和谐……？",
						"french": "Harmonie...?",
						"spanish": "¿Armonía...?",
						"vietnamese": "Hài hòa…?",
						"thai": "ความกลมกลืน...?",
						"hindi": "सद्भाव...?"
					},
					"speaker": "character_any"
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
					"action": "enter",
					"speaker": "ivy",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "봐. 이 완벽한 질서. 모두 숲의 어머니의 뜻에 따르지.",
						"english": "Look. This perfect order. All follow the will of the Forest Mother.",
						"japanese": "見ろ。この完璧な秩序。すべて森の母の意志に従っている。",
						"chinese": "看。这完美的秩序。一切都遵从森林之母的旨意。",
						"french": "Regarde. Cet ordre parfait. Tous suivent la volonté de la Mère de la Forêt.",
						"spanish": "Mira. Este orden perfecto. Todos siguen la voluntad de la Madre del Bosque.",
						"vietnamese": "Nhìn đi. Trật tự hoàn hảo này. Tất cả đều tuân theo ý muốn của Mẹ Rừng.",
						"thai": "ดูสิ ระเบียบที่สมบูรณ์แบบนี้ ทุกสิ่งล้วนปฏิบัติตามพระประสงค์ของพระแม่แห่งป่า",
						"hindi": "देखो। यह उत्तम व्यवस्था। सभी वन माता की इच्छा का पालन करते हैं।"
					},
					"speaker": "ivy",
					"type": "speech",
					"emotion": "happy"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "작은 새들이 일정한 간격으로 울고, 다람쥐들이 정확한 패턴으로 움직였다.",
						"english": "Small birds chirped at regular intervals, and squirrels moved in precise patterns.",
						"japanese": "小鳥たちが一定の間隔で鳴き、リスたちが正確なパターンで動いた。",
						"chinese": "小鸟们以固定的间隔鸣叫，松鼠们以精确的模式移动。",
						"french": "Les petits oiseaux chantaient à intervalles réguliers et les écureuils se déplaçaient selon des schémas précis.",
						"spanish": "Pequeños pájaros piaban a intervalos regulares, y las ardillas se movían en patrones exactos.",
						"vietnamese": "Những chú chim nhỏ hót đều đặn, và những con sóc di chuyển theo một quy luật chính xác.",
						"thai": "นกตัวเล็กๆ ร้องเป็นจังหวะ และกระรอกก็เคลื่อนไหวตามรูปแบบที่แม่นยำ",
						"hindi": "छोटे पक्षी नियमित अंतराल पर चहक रहे थे, और गिलहरियाँ सटीक पैटर्न में चल रही थीं।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…너무 완벽해서 소름 돋는군.",
						"english": "...So perfect, it's unsettling.",
						"japanese": "…完璧すぎて、ぞっとする。",
						"chinese": "……完美得令人毛骨悚然。",
						"french": "...Trop parfait, c'en est effrayant.",
						"spanish": "...Demasiado perfecto, me da escalofríos.",
						"vietnamese": "...Hoàn hảo đến rợn người.",
						"thai": "...สมบูรณ์แบบจนน่าขนลุก",
						"hindi": "...इतना सही कि रोंगटे खड़े हो जाते हैं।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "ivy",
					"content": {
						"korean": "불안해할 필요 없어. 이것이 진정한 평화니까.",
						"english": "No need to be uneasy. This is true peace.",
						"japanese": "不安がる必要はない。これこそが真の平和だ。",
						"chinese": "不必感到不安。这才是真正的和平。",
						"french": "Pas besoin d'être inquiet. C'est ça, la vraie paix.",
						"spanish": "No hay necesidad de estar inquieto. Esta es la verdadera paz.",
						"vietnamese": "Không cần phải lo lắng. Đây mới là sự bình yên thật sự.",
						"thai": "ไม่ต้องกังวล นี่คือสันติภาพที่แท้จริง",
						"hindi": "अशांत होने की ज़रूरत नहीं। यही सच्ची शांति है।"
					},
					"type": "speech"
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
					"speaker": "ivy",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "ivy",
					"content": {
						"korean": "너희는 아직 숲의 위대함을 몰라. 모든 생명은 어머니 아래에서 행복해.",
						"english": "You still don't know the forest's greatness. All life is happy under Mother.",
						"japanese": "お前たちはまだ森の偉大さを知らない。すべての生命は母の下で幸せなのだ。",
						"chinese": "你们还不懂森林的伟大。所有生命在母亲的庇护下都很快乐。",
						"french": "Vous ne connaissez pas encore la grandeur de la forêt. Toute vie est heureuse sous la Mère.",
						"spanish": "Todavía no conocéis la grandeza del bosque. Toda vida es feliz bajo la Madre.",
						"vietnamese": "Các ngươi vẫn chưa biết sự vĩ đại của rừng. Mọi sinh vật đều hạnh phúc dưới sự che chở của Mẹ.",
						"thai": "พวกเจ้ายังไม่รู้ถึงความยิ่งใหญ่ของป่า ทุกชีวิตมีความสุขภายใต้พระแม่",
						"hindi": "तुम अभी तक जंगल की महानता नहीं जानते। सभी जीवन माँ के अधीन खुश हैं।"
					},
					"emotion": "happy"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "행복? 당신 눈은… 공포에 질려있어.",
						"english": "Happy? Your eyes... are filled with fear.",
						"japanese": "幸せ？あなたの目は…恐怖に怯えている。",
						"chinese": "快乐？你的眼睛……充满了恐惧。",
						"french": "Heureux ? Tes yeux... sont remplis de peur.",
						"spanish": "¿Feliz? Tus ojos... están llenos de miedo.",
						"vietnamese": "Hạnh phúc? Đôi mắt của bạn... đầy sự sợ hãi.",
						"thai": "มีความสุข? ดวงตาของคุณ… เต็มไปด้วยความกลัว",
						"hindi": "खुश? तुम्हारी आँखें... डर से भरी हैं।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "ivy",
					"content": {
						"korean": "무슨 소리야? 나는… 나는 행복해. 아주… 행복해.",
						"english": "What are you talking about? I... I'm happy. Very... happy.",
						"japanese": "何を言っているんだ？私は…私は幸せだ。とても…幸せだ。",
						"chinese": "你在说什么？我……我很幸福。非常……幸福。",
						"french": "Qu'est-ce que tu racontes ? Je... je suis heureux. Très... heureux.",
						"spanish": "¿Qué dices? Yo... yo soy feliz. Muy... feliz.",
						"vietnamese": "Bạn đang nói gì vậy? Tôi... tôi hạnh phúc. Rất... hạnh phúc.",
						"thai": "คุณกำลังพูดอะไร? ฉัน... ฉันมีความสุข มีความสุขมาก",
						"hindi": "तुम क्या कह रहे हो? मैं... मैं खुश हूँ। बहुत... खुश हूँ।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "강요된 평화인가.",
						"english": "Is this forced peace?",
						"japanese": "これは強制された平和なのか。",
						"chinese": "这是被强迫的和平吗？",
						"french": "Est-ce une paix forcée ?",
						"spanish": "¿Es esta una paz forzada?",
						"vietnamese": "Đây có phải là sự bình yên bị ép buộc không?",
						"thai": "นี่คือสันติภาพที่ถูกบังคับหรือ?",
						"hindi": "क्या यह थोपी गई शांति है?"
					},
					"speaker": "character_any"
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
					"action": "enter",
					"speaker": "ivy",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "제발… 더 이상 가지 마. 거역하면… 사라져 버려.",
						"english": "Please... don't go any further. If you resist... you'll disappear.",
						"japanese": "お願い…これ以上行かないで。逆らえば…消えちゃうよ。",
						"chinese": "拜托……别再往前走了。如果反抗……就会消失。",
						"french": "S'il vous plaît... n'allez pas plus loin. Si vous résistez... vous disparaîtrez.",
						"spanish": "Por favor... no vayas más lejos. Si te resistes... desaparecerás.",
						"vietnamese": "Làm ơn... đừng đi xa hơn nữa. Nếu bạn chống đối... bạn sẽ biến mất.",
						"thai": "ได้โปรด… อย่าไปไกลกว่านี้ ถ้าขัดขืน… จะหายไปเลยนะ",
						"hindi": "कृपया... और आगे मत जाओ। यदि तुम विरोध करोगे... तो गायब हो जाओगे।"
					},
					"speaker": "ivy",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "우린 진실을 찾아야 해.",
						"english": "We must find the truth.",
						"japanese": "私たちは真実を見つけなければならない。",
						"chinese": "我们必须找到真相。",
						"french": "Nous devons trouver la vérité.",
						"spanish": "Debemos encontrar la verdad.",
						"vietnamese": "Chúng ta phải tìm ra sự thật.",
						"thai": "เราต้องค้นหาความจริง",
						"hindi": "हमें सच खोजना होगा।"
					},
					"emotion": "base"
				},
				{
					"speaker": "ivy",
					"content": {
						"korean": "진실 따위는… 없어. 오직 어머니의 뜻만이…",
						"english": "There is no such thing as truth... Only Mother's will...",
						"japanese": "真実など…ない。ただ母の意志だけが…",
						"chinese": "没有什么……真相。只有母亲的旨意……",
						"french": "Il n'y a pas de vérité... Seulement la volonté de la Mère...",
						"spanish": "No existe tal cosa como la verdad... Solo la voluntad de la Madre...",
						"vietnamese": "Không có cái gọi là sự thật... Chỉ có ý chí của Mẹ...",
						"thai": "ไม่มีอะไรแบบความจริง... มีแต่เจตจำนงของพระแม่เท่านั้น",
						"hindi": "सच्चाई जैसी कोई चीज़ नहीं... केवल माँ की इच्छा ही है..."
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "우리는 너처럼 되지 않아.",
						"english": "We won't become like you.",
						"japanese": "私たちはあなた方のようにはならない。",
						"chinese": "我们不会变成你那样。",
						"french": "Nous ne deviendrons pas comme vous.",
						"spanish": "No seremos como tú.",
						"vietnamese": "Chúng tôi sẽ không trở thành như các ngươi.",
						"thai": "เราจะไม่เป็นเหมือนแก.",
						"hindi": "हम तुम जैसे नहीं बनेंगे।"
					},
					"type": "speech"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "크윽… 어리석은… 너희는… 진정한 어머니를 모른다…",
						"english": "Ugh... Fools... You don't know the true Mother...",
						"japanese": "くっ…愚かな…お前たちは…真の母を知らない…",
						"chinese": "呃……愚蠢的……你们……不识真正的母亲……",
						"french": "Argh... Imbéciles... Vous ne connaissez pas la véritable Mère...",
						"spanish": "Ugh... Necios... No conocéis a la verdadera Madre...",
						"vietnamese": "Khụ... Đồ ngu ngốc... Các ngươi... không biết Mẹ thật sự...",
						"thai": "อึก... โง่เขลา... พวกเจ้า... ไม่รู้จักท่านแม่ที่แท้จริง...",
						"hindi": "उफ़... मूर्ख... तुम... सच्ची माँ को नहीं जानते..."
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…누가 진정한 어머니를 말하는 거지?",
						"english": "...Who are you talking about, the \"true Mother\"?",
						"japanese": "…誰が真の母を語っているんだ？",
						"chinese": "……谁是真正的母亲？",
						"french": "...Qui parle de la véritable Mère ?",
						"spanish": "...¿Quién habla de la verdadera Madre?",
						"vietnamese": "...Ai đang nói về Mẹ thật sự vậy?",
						"thai": "...ใครกำลังพูดถึงท่านแม่ที่แท้จริงกันแน่?",
						"hindi": "कौन है वो सच्ची माँ जिसके बारे में बात कर रहे हो?"
					},
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"action": "enter",
					"speaker": "ivy"
				},
				{
					"emotion": "sad",
					"speaker": "ivy",
					"content": {
						"korean": "아니야… 어머니는… 어머니는…",
						"english": "No... Mother is... Mother is...",
						"japanese": "違う…母は…母は…",
						"chinese": "不对……母亲是……母亲是……",
						"french": "Non... Mère est... Mère est...",
						"spanish": "No... Madre es... Madre es...",
						"vietnamese": "Không phải... Mẹ là... Mẹ là...",
						"thai": "ไม่จริง... ท่านแม่คือ... ท่านแม่คือ...",
						"hindi": "नहीं... माँ है... माँ है..."
					},
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "아이비의 눈빛은 더욱 혼란스러워졌다. 그러나 진실은 더욱 깊은 곳에 있었다.",
						"english": "Ivy's eyes grew more confused. But the truth lay even deeper.",
						"japanese": "アイビーの目はさらに混乱した。しかし、真実はさらに深いところに隠されていた。",
						"chinese": "艾薇的眼神变得更加困惑。然而真相隐藏得更深。",
						"french": "Le regard d'Ivy devint encore plus confus. Mais la vérité se cachait encore plus profondément.",
						"spanish": "La mirada de Ivy se volvió aún más confusa. Pero la verdad yacía en lo más profundo.",
						"vietnamese": "Ánh mắt của Ivy càng trở nên bối rối. Nhưng sự thật nằm sâu hơn nữa.",
						"thai": "ดวงตาของไอวี่ดูสับสนยิ่งขึ้น. แต่ความจริงซ่อนอยู่ลึกกว่านั้น.",
						"hindi": "आइवी की आँखें और भी भ्रमित हो गईं। लेकिन सच और भी गहरा था।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 탐험대를 집어삼켰다.",
						"english": "A colossal shadow engulfed the expedition.",
						"japanese": "巨大な影が探検隊を飲み込んだ。",
						"chinese": "巨大的黑影吞噬了探险队。",
						"french": "Une ombre colossale a englouti l'expédition.",
						"spanish": "Una sombra gigantesca devoró a la expedición.",
						"vietnamese": "Một bóng tối khổng lồ đã nuốt chửng đoàn thám hiểm.",
						"thai": "เงามืดมหึมากลืนกินคณะสำรวจ",
						"hindi": "एक विशाल छाया ने अभियान को निगल लिया।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "하찮은 것들. 너희는 숲의 질서를 거스를 수 없어.",
						"english": "Puny beings. You cannot defy the forest's order.",
						"japanese": "愚かな者たちめ。森の秩序には逆らえぬ。",
						"chinese": "渺小的存在。你们无法违抗森林的秩序。",
						"french": "Êtres insignifiants. Vous ne pouvez pas défier l'ordre de la forêt.",
						"spanish": "Seres insignificantes. No podéis desafiar el orden del bosque.",
						"vietnamese": "Những kẻ hèn mọn. Ngươi không thể chống lại trật tự của rừng.",
						"thai": "พวกอ่อนแอเอ๋ย พวกเจ้าไม่อาจขัดขวางระเบียบของป่าได้",
						"hindi": "तुच्छ प्राणी। तुम जंगल के नियम का उल्लंघन नहीं कर सकते।"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…아직 끝나지 않았어. 우리는 포기하지 않아!",
						"english": "…It's not over yet. We won't give up!",
						"japanese": "…まだ終わってない。私たちは諦めない！",
						"chinese": "……还没结束。我们不会放弃！",
						"french": "…Ce n'est pas encore fini. Nous n'abandonnerons pas !",
						"spanish": "…Aún no ha terminado. ¡No nos rendiremos!",
						"vietnamese": "…Chưa kết thúc đâu. Chúng ta sẽ không bỏ cuộc!",
						"thai": "…ยังไม่จบ เราไม่ยอมแพ้!",
						"hindi": "…अभी खत्म नहीं हुआ है। हम हार नहीं मानेंगे!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "뒤틀린 숲의 심장부. 거대한 그림자가 앞을 가로막았다.",
						"english": "Deep within the Twisted Forest. A giant shadow blocked the way.",
						"japanese": "歪んだ森の奥深く。巨大な影が道を塞いだ。",
						"chinese": "扭曲森林的深处。一个巨大的影子挡住了去路。",
						"french": "Au cœur de la Forêt Tordue. Une ombre gigantesque barrait le chemin.",
						"spanish": "En el corazón del Bosque Retorcido. Una sombra gigantesca bloqueó el paso.",
						"vietnamese": "Sâu trong Rừng Xoắn. Một bóng đen khổng lồ chặn đường.",
						"thai": "ใจกลางป่าบิดเบี้ยว. เงาขนาดมหึมาขวางทางอยู่.",
						"hindi": "मुड़े हुए जंगल के हृदय में। एक विशाल छाया ने रास्ता रोक दिया।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "…감히 침범하다니. 숲의 질서를 어지럽히는 자들.",
						"english": "...How dare you trespass. Those who disturb the forest's order.",
						"japanese": "…よくも侵入してきたな。森の秩序を乱す者たちめ。",
						"chinese": "……竟敢入侵。扰乱森林秩序者。",
						"french": "...Comment osez-vous vous introduire. Ceux qui perturbent l'ordre de la forêt.",
						"spanish": "...Cómo osas invadir. Aquellos que perturban el orden del bosque.",
						"vietnamese": "...Dám xâm phạm. Những kẻ làm xáo trộn trật tự của rừng.",
						"thai": "...กล้าดียังไงถึงบุกรุก. พวกที่มารบกวนความสงบของป่า.",
						"hindi": "तुम्हारी हिम्मत कैसे हुई घुसपैठ करने की। जंगल की व्यवस्था भंग करने वाले।"
					},
					"speaker": "random_boss"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "당신이 이 숲을 통제하는 자인가?",
						"english": "Are you the one who controls this forest?",
						"japanese": "あなたがこの森を統制する者なのか？",
						"chinese": "你是控制这片森林的人吗？",
						"french": "Êtes-vous celui qui contrôle cette forêt ?",
						"spanish": "¿Eres tú quien controla este bosque?",
						"vietnamese": "Ngươi là kẻ kiểm soát khu rừng này sao?",
						"thai": "ท่านคือผู้ควบคุมป่านี้หรือ?",
						"hindi": "क्या तुम इस जंगल को नियंत्रित करने वाले हो?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						1,
						2
					],
					"speaker": "ivy",
					"action": "enter"
				},
				{
					"content": {
						"korean": "도망쳐! 이분은… 어머니의 대리인이야!",
						"english": "Run! This person... is the Mother's proxy!",
						"japanese": "逃げろ！この方は…母の代理人だ！",
						"chinese": "快跑！这位是……母亲的代理人！",
						"french": "Fuyez ! Cette personne... est l'émissaire de la Mère !",
						"spanish": "¡Huye! ¡Esta persona... es la representante de la Madre!",
						"vietnamese": "Chạy đi! Người này... là đại diện của Mẹ!",
						"thai": "หนีไป! ท่านผู้นี้คือ... ตัวแทนของท่านแม่!",
						"hindi": "भागो! ये... माँ के प्रतिनिधि हैं!"
					},
					"speaker": "ivy",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "헛소리 마. 당신도 이용당하는 거야!",
						"english": "Nonsense. You're being used too!",
						"japanese": "馬鹿なこと言うな。あなたも利用されているんだ！",
						"chinese": "胡说。你也被利用了！",
						"french": "N'importe quoi. Vous êtes aussi manipulé !",
						"spanish": "Tonterías. ¡Tú también estás siendo utilizado!",
						"vietnamese": "Vô lý. Ngươi cũng đang bị lợi dụng thôi!",
						"thai": "เหลวไหลน่า. คุณเองก็กำลังถูกใช้เป็นเครื่องมือเหมือนกันนั่นแหละ!",
						"hindi": "बकवास मत करो। तुम्हें भी इस्तेमाल किया जा रहा है!"
					}
				}
			]
		}
	]
} as const;
