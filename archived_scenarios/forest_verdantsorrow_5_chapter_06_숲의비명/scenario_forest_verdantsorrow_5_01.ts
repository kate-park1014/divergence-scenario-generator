export const scenario_forest_verdantsorrow_5_01 = {
	"scenario_id": "forest_verdantsorrow_5_01",
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
					"content": {
						"korean": "덩굴이 길을 막은 숲의 입구. 음습한 기운이 감돈다.",
						"english": "Forest entrance blocked by vines. A gloomy aura hangs heavy.",
						"japanese": "蔓が道を塞ぐ森の入り口。陰鬱な気配が漂う。",
						"chinese": "藤蔓堵塞的森林入口。弥漫着阴森的气息。",
						"french": "Entrée de la forêt bloquée par des lianes. Une aura lugubre pèse.",
						"spanish": "Entrada del bosque bloqueada por enredaderas. Una atmósfera sombría se cierne.",
						"vietnamese": "Lối vào rừng bị dây leo chặn. Một luồng khí u ám bao trùm.",
						"thai": "ทางเข้าป่าที่เถาวัลย์ขวางกั้น บรรยากาศอึมครึมปกคลุม",
						"hindi": "जंगल का प्रवेश द्वार लताओं से अवरुद्ध। एक उदास आभा छाई हुई है।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "여기 분위기 이상해. 발걸음이 무겁다.",
						"english": "The atmosphere here is strange. My steps feel heavy.",
						"japanese": "ここ、雰囲気おかしい。足取りが重い。",
						"chinese": "这里气氛很奇怪。脚步沉重。",
						"french": "L'atmosphère ici est étrange. Mes pas sont lourds.",
						"spanish": "El ambiente aquí es extraño. Mis pasos son pesados.",
						"vietnamese": "Không khí ở đây thật kỳ lạ. Bước chân tôi nặng trĩu.",
						"thai": "บรรยากาศที่นี่แปลกๆ ก้าวเท้าหนักอึ้ง",
						"hindi": "यहाँ का माहौल अजीब है। मेरे कदम भारी हो रहे हैं।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "ela",
					"action": "enter"
				},
				{
					"content": {
						"korean": "…왔구나. 여기까지.",
						"english": "...You've come. All this way.",
						"japanese": "…来たか。ここまで。",
						"chinese": "…你来了。到这里。",
						"french": "...Tu es venu. Jusqu'ici.",
						"spanish": "...Has venido. Hasta aquí.",
						"vietnamese": "...Ngươi đã đến. Đến tận đây.",
						"thai": "...มาแล้วสินะ ถึงที่นี่แล้ว",
						"hindi": "...तुम आ गए। इतनी दूर तक।"
					},
					"type": "speech",
					"speaker": "ela",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "당신은 누구지?",
						"english": "Who are you?",
						"japanese": "あなたは誰だ？",
						"chinese": "你是谁？",
						"french": "Qui es-tu ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Ngươi là ai?",
						"thai": "เจ้าคือใคร?",
						"hindi": "तुम कौन हो?"
					}
				},
				{
					"emotion": "base",
					"speaker": "ela",
					"content": {
						"korean": "엘라. 이 숲을 지키는 자.",
						"english": "Ela. Guardian of this forest.",
						"japanese": "エラ。この森を守る者。",
						"chinese": "艾拉。守护这片森林的人。",
						"french": "Ela. Gardienne de cette forêt.",
						"spanish": "Ela. Guardiana de este bosque.",
						"vietnamese": "Ela. Kẻ bảo vệ khu rừng này.",
						"thai": "เอล่า ผู้พิทักษ์ป่านี้",
						"hindi": "एला। इस जंगल की रक्षक।"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "ela",
					"content": {
						"korean": "돌아가. 더 깊은 곳은… 슬픔뿐이야.",
						"english": "Go back. Deeper within... there is only sorrow.",
						"japanese": "戻れ。奥深くには…悲しみしかない。",
						"chinese": "回去吧。更深处…只有悲伤。",
						"french": "Retourne-t'en. Plus profondément... il n'y a que de la tristesse.",
						"spanish": "Vuelve. Más adentro... solo hay pena.",
						"vietnamese": "Hãy quay lại. Sâu hơn nữa... chỉ có nỗi buồn.",
						"thai": "กลับไปซะ ลึกเข้าไปกว่านี้... มีแต่ความเศร้า",
						"hindi": "वापस जाओ। और गहरे... केवल दुख है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "멈출 수 없어. 우리는 진실을 찾아야 해.",
						"english": "Can't stop. We must find the truth.",
						"japanese": "止められない。私たちは真実を見つけなければならない。",
						"chinese": "无法停止。我们必须找到真相。",
						"french": "On ne peut pas s'arrêter. Nous devons trouver la vérité.",
						"spanish": "No podemos detenernos. Debemos encontrar la verdad.",
						"vietnamese": "Không thể dừng lại. Chúng ta phải tìm ra sự thật.",
						"thai": "หยุดไม่ได้ เราต้องค้นหาความจริง",
						"hindi": "रुक नहीं सकते। हमें सच ढूंढना होगा।"
					},
					"speaker": "character_any",
					"emotion": "base"
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
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						2
					]
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "이게 뭐지? 낡은 장난감 조각이야.",
						"english": "What's this? A piece of an old toy.",
						"japanese": "これは何？古いおもちゃの破片だ。",
						"chinese": "这是什么？一块旧玩具的碎片。",
						"french": "Qu'est-ce que c'est ? Un morceau de vieux jouet.",
						"spanish": "¿Qué es esto? Un trozo de juguete viejo.",
						"vietnamese": "Cái gì đây? Một mảnh đồ chơi cũ.",
						"thai": "นี่อะไร? ชิ้นส่วนของเล่นเก่าๆ",
						"hindi": "यह क्या है? एक पुराने खिलौने का टुकड़ा।"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "ela",
					"type": "speech",
					"content": {
						"korean": "…버려. 불행만 가져올 뿐이야.",
						"english": "...Discard it. It only brings misfortune.",
						"japanese": "…捨てて。不幸しか招かないわ。",
						"chinese": "…扔掉。它只会带来不幸。",
						"french": "...Jette-le. Ça n'apporte que le malheur.",
						"spanish": "...Deséchalo. Solo trae desgracia.",
						"vietnamese": "…Vứt đi. Nó chỉ mang lại bất hạnh thôi.",
						"thai": "…ทิ้งไปซะ มันมีแต่จะนำโชคร้ายมาให้",
						"hindi": "…फेंक दो। यह सिर्फ बदकिस्मती लाएगा।"
					}
				},
				{
					"content": {
						"korean": "아이들의 물건인가?",
						"english": "Children's belongings?",
						"japanese": "子供たちの物か？",
						"chinese": "是孩子们的物品吗？",
						"french": "Des affaires d'enfants ?",
						"spanish": "¿Cosas de niños?",
						"vietnamese": "Là đồ của trẻ con ư?",
						"thai": "ของเด็กๆ เหรอ?",
						"hindi": "बच्चों का सामान है क्या?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "숲은… 아이들을 지키려 했어. 예전부터.",
						"english": "The forest... tried to protect the children. Since long ago.",
						"japanese": "森は…子供たちを守ろうとした。ずっと昔から。",
						"chinese": "森林…一直想保护孩子们。从很久以前就如此。",
						"french": "La forêt... a essayé de protéger les enfants. Depuis longtemps.",
						"spanish": "El bosque... intentó proteger a los niños. Desde hace mucho.",
						"vietnamese": "Rừng... đã cố gắng bảo vệ những đứa trẻ. Từ rất lâu rồi.",
						"thai": "ป่า…พยายามปกป้องเด็กๆ ตั้งแต่เมื่อก่อนแล้ว",
						"hindi": "जंगल… बच्चों को बचाने की कोशिश करता रहा है। बहुत पहले से।"
					},
					"type": "speech",
					"speaker": "ela"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "무슨 소리야?",
						"english": "What are you talking about?",
						"japanese": "何のことだ？",
						"chinese": "你在说什么？",
						"french": "De quoi parles-tu ?",
						"spanish": "¿De qué hablas?",
						"vietnamese": "Cậu nói gì vậy?",
						"thai": "พูดอะไรน่ะ?",
						"hindi": "क्या कह रहे हो?"
					}
				},
				{
					"speaker": "ela",
					"content": {
						"korean": "아니… 아무것도.",
						"english": "No... nothing.",
						"japanese": "いや…何でもない。",
						"chinese": "不…没什么。",
						"french": "Non... rien.",
						"spanish": "No... nada.",
						"vietnamese": "Không… không có gì.",
						"thai": "เปล่า… ไม่มีอะไร",
						"hindi": "नहीं… कुछ नहीं।"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						4,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "ela",
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "숲이 울고 있어. 오래된 비극이… 다시 시작될 거야.",
						"english": "The forest is weeping. An old tragedy... will begin anew.",
						"japanese": "森が泣いている。古き悲劇が…再び始まるだろう。",
						"chinese": "森林在哭泣。一场古老的悲剧…将再次上演。",
						"french": "La forêt pleure. Une ancienne tragédie... va recommencer.",
						"spanish": "El bosque está llorando. Una antigua tragedia... volverá a empezar.",
						"vietnamese": "Rừng đang khóc. Một bi kịch cũ… sẽ lại bắt đầu.",
						"thai": "ป่ากำลังร้องไห้ โศกนาฏกรรมเก่าแก่…จะเริ่มต้นใหม่อีกครั้ง",
						"hindi": "जंगल रो रहा है। एक पुरानी त्रासदी… फिर से शुरू होगी।"
					},
					"speaker": "ela",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "비극? 또 무슨 말이야.",
						"english": "Tragedy? What are you saying now?",
						"japanese": "悲劇？また何を言ってるんだ。",
						"chinese": "悲剧？你又在说什么？",
						"french": "Tragédie ? Qu'est-ce que tu racontes encore ?",
						"spanish": "¿Tragedia? ¿Qué dices ahora?",
						"vietnamese": "Bi kịch? Cậu lại nói gì nữa vậy.",
						"thai": "โศกนาฏกรรม? หมายความว่าไงอีก",
						"hindi": "त्रासदी? फिर से क्या कह रहे हो?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "ela",
					"content": {
						"korean": "이 숲은… 살아있는 고통이야. 알아선 안 될 진실이 있어.",
						"english": "This forest... is living agony. There's a truth that shouldn't be known.",
						"japanese": "この森は…生きる苦痛だ。知ってはならない真実がある。",
						"chinese": "这片森林…是活着的痛苦。有些真相不该被知晓。",
						"french": "Cette forêt... est une souffrance vivante. Il y a une vérité qui ne devrait pas être sue.",
						"spanish": "Este bosque... es un tormento viviente. Hay una verdad que no debe saberse.",
						"vietnamese": "Rừng này… là nỗi đau sống. Có một sự thật không nên được biết.",
						"thai": "ป่าแห่งนี้…คือความเจ็บปวดที่มีชีวิต มีความจริงที่ไม่ควรถูกรับรู้",
						"hindi": "यह जंगल… एक जीवित पीड़ा है। एक ऐसा सच है जिसे जानना नहीं चाहिए।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "우리는 기어이 알아낼 거야.",
						"english": "We will find out, one way or another.",
						"japanese": "我々は必ず突き止めるだろう。",
						"chinese": "我们终会查明真相。",
						"french": "Nous finirons par découvrir la vérité.",
						"spanish": "Lo descubriremos cueste lo que cueste.",
						"vietnamese": "Chúng ta nhất định sẽ tìm ra.",
						"thai": "เราจะหามันจนพบ",
						"hindi": "हम पता लगा ही लेंगे।"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "그 진실이… 너희를 집어삼킬지도 몰라.",
						"english": "That truth... might just swallow you whole.",
						"japanese": "その真実が… お前たちを飲み込むかもしれない。",
						"chinese": "那个真相… 可能会吞噬你们。",
						"french": "Cette vérité… pourrait bien vous dévorer.",
						"spanish": "Esa verdad… podría devoraros.",
						"vietnamese": "Sự thật đó… có thể sẽ nuốt chửng các ngươi.",
						"thai": "ความจริงนั้น… อาจกลืนกินพวกเจ้า",
						"hindi": "वो सच… तुम्हें निगल सकता है।"
					},
					"speaker": "ela"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "ela"
				},
				{
					"content": {
						"korean": "제발 멈춰! 더 이상은 위험해!",
						"english": "Please stop! Any further is dangerous!",
						"japanese": "止めてくれ！これ以上は危険だ！",
						"chinese": "求你住手！再往前就危险了！",
						"french": "Arrêtez, je vous en prie ! C'est trop dangereux d'aller plus loin !",
						"spanish": "¡Por favor, detente! ¡Más allá es peligroso!",
						"vietnamese": "Làm ơn dừng lại! Hơn nữa là nguy hiểm!",
						"thai": "ได้โปรดหยุด! ไปมากกว่านี้อันตราย!",
						"hindi": "कृपया रुक जाओ! इससे आगे ख़तरा है!"
					},
					"type": "speech",
					"speaker": "ela",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이미 너무 멀리 왔어.",
						"english": "We've already come too far.",
						"japanese": "もう遠くまで来てしまった。",
						"chinese": "已经太远了。",
						"french": "Nous sommes déjà allés trop loin.",
						"spanish": "Ya hemos llegado demasiado lejos.",
						"vietnamese": "Chúng ta đã đi quá xa rồi.",
						"thai": "เรามาไกลเกินไปแล้ว",
						"hindi": "हम पहले ही बहुत दूर आ चुके हैं।"
					}
				},
				{
					"emotion": "sad",
					"speaker": "ela",
					"content": {
						"korean": "이 길의 끝은… 모두가 절망할 뿐이야.",
						"english": "The end of this path... is nothing but despair for all.",
						"japanese": "この道の果ては… 皆が絶望するだけだ。",
						"chinese": "这条路的尽头… 只有绝望。",
						"french": "Le bout de ce chemin… n'est que désespoir pour tous.",
						"spanish": "El final de este camino… es solo desesperación para todos.",
						"vietnamese": "Cuối con đường này… chỉ có tuyệt vọng cho tất cả.",
						"thai": "ปลายทางนี้… มีแต่ความสิ้นหวังเท่านั้น",
						"hindi": "इस रास्ते का अंत… बस सब के लिए निराशा है।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "돌아갈 순 없어. 우리는 끝을 봐야 해.",
						"english": "There's no turning back. We must see this to the end.",
						"japanese": "もう引き返せない。我々は終わりを見届けなければならない。",
						"chinese": "无法回头了。我们必须看到结局。",
						"french": "On ne peut plus reculer. Nous devons aller jusqu'au bout.",
						"spanish": "No podemos volver atrás. Debemos ver el final.",
						"vietnamese": "Không thể quay lại. Chúng ta phải đi đến cùng.",
						"thai": "ย้อนกลับไม่ได้ เราต้องไปให้สุดทาง",
						"hindi": "वापस नहीं जा सकते। हमें अंत तक देखना होगा।"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "ela",
					"content": {
						"korean": "…결국, 모두 같은 길을 가는구나.",
						"english": "...In the end, everyone walks the same path.",
						"japanese": "…結局、皆同じ道を辿るのか。",
						"chinese": "…最终，大家都在走同一条路。",
						"french": "…Au final, tout le monde prend le même chemin.",
						"spanish": "…Al final, todos toman el mismo camino.",
						"vietnamese": "…Cuối cùng, tất cả đều đi cùng một con đường.",
						"thai": "…ในที่สุด ทุกคนก็เดินบนเส้นทางเดียวกัน",
						"hindi": "…आखिरकार, सब एक ही रास्ते पर चलते हैं।"
					},
					"type": "speech",
					"emotion": "sad"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "깊은 숲의 심장. 거대한 그림자가 앞을 가로막았다.",
						"english": "The heart of the deep forest. A colossal shadow blocked the way.",
						"japanese": "深い森の心臓。巨大な影が道を阻んだ。",
						"chinese": "幽深森林的心脏。一道巨大的阴影挡住了去路。",
						"french": "Au cœur de la forêt profonde. Une ombre gigantesque barrait le passage.",
						"spanish": "El corazón del bosque profundo. Una sombra gigantesca bloqueó el paso.",
						"vietnamese": "Trung tâm của khu rừng sâu thẳm. Một cái bóng khổng lồ chắn ngang đường.",
						"thai": "ใจกลางป่าลึก. เงาขนาดใหญ่ขวางทางไว้",
						"hindi": "गहरे जंगल का हृदय। एक विशाल छाया ने रास्ता रोक दिया।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "침입자여. 이곳의 평화를 깨려는가.",
						"english": "Intruder. Do you seek to disturb this place's peace?",
						"japanese": "侵入者よ。この地の平和を乱すつもりか。",
						"chinese": "入侵者。你意图打破此地的和平吗？",
						"french": "Intruder. Cherchez-vous à troubler la paix de ce lieu ?",
						"spanish": "Intruso. ¿Vienes a perturbar la paz de este lugar?",
						"vietnamese": "Kẻ xâm nhập. Ngươi định phá vỡ sự bình yên nơi đây sao?",
						"thai": "ผู้บุกรุก. เจ้าคิดจะทำลายความสงบสุขของที่นี่หรือ",
						"hindi": "घुसपैठिये। क्या तुम इस जगह की शांति भंग करना चाहते हो?"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "네가 이 숲의 수호자인가?",
						"english": "Are you the guardian of this forest?",
						"japanese": "お前がこの森の守護者か？",
						"chinese": "你是这片森林的守护者吗？",
						"french": "Es-tu le gardien de cette forêt ?",
						"spanish": "¿Eres el guardián de este bosque?",
						"vietnamese": "Ngươi là người bảo vệ khu rừng này sao?",
						"thai": "เจ้าคือผู้พิทักษ์ป่าแห่งนี้หรือ",
						"hindi": "क्या तुम इस जंगल के संरक्षक हो?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "나는… 숲의 의지. 그 누구도 침범할 수 없어.",
						"english": "I am… the will of the forest. None may trespass.",
						"japanese": "我は…森の意思。何人たりとも侵すことは許されない。",
						"chinese": "我是…森林的意志。无人能够侵犯。",
						"french": "Je suis… la volonté de la forêt. Nul ne peut s'immiscer.",
						"spanish": "Soy… la voluntad del bosque. Nadie puede invadir.",
						"vietnamese": "Ta là… ý chí của rừng. Không ai có thể xâm phạm.",
						"thai": "ข้าคือ…เจตจำนงแห่งป่า ไม่มีผู้ใดรุกล้ำได้",
						"hindi": "मैं... वन की इच्छा हूँ। कोई अतिक्रमण नहीं कर सकता।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "길을 비켜라. 우리는 진실을 찾으러 왔다.",
						"english": "Stand aside. We have come to find the truth.",
						"japanese": "道を開けろ。我々は真実を求めて来た。",
						"chinese": "让开。我们是来寻找真相的。",
						"french": "Écartez-vous. Nous sommes venus chercher la vérité.",
						"spanish": "Apártate. Hemos venido a buscar la verdad.",
						"vietnamese": "Tránh ra. Chúng ta đến để tìm kiếm sự thật.",
						"thai": "หลีกไป เรามาเพื่อตามหาความจริง",
						"hindi": "रास्ता छोड़ो। हम सत्य की तलाश में आए हैं।"
					},
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "진실? 이 숲은 진실을 원치 않아. 고통을 잠재울 뿐.",
						"english": "Truth? This forest desires no truth. Only to quell its pain.",
						"japanese": "真実？この森は真実を望まない。ただ苦痛を鎮めるのみ。",
						"chinese": "真相？这片森林不想要真相。只是为了平息痛苦。",
						"french": "La vérité ? Cette forêt ne désire aucune vérité. Seulement apaiser sa douleur.",
						"spanish": "¿Verdad? Este bosque no desea la verdad. Solo apaciguar su dolor.",
						"vietnamese": "Sự thật? Rừng này không muốn sự thật. Chỉ muốn xoa dịu nỗi đau.",
						"thai": "ความจริงรึ? ป่านี้ไม่ต้องการความจริง แค่เพียงระงับความเจ็บปวดเท่านั้น",
						"hindi": "सत्य? यह वन सत्य नहीं चाहता। केवल अपने दर्द को शांत करना चाहता है।"
					}
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "크윽… 너희는… 아무것도 모른다…",
						"english": "Ugh… You… know nothing…",
						"japanese": "くっ…お前たちは…何も知らない…",
						"chinese": "呃…你们…一无所知…",
						"french": "Argh… Vous… ne savez rien…",
						"spanish": "Ugh… Vosotros… no sabéis nada…",
						"vietnamese": "Ư… Các ngươi… không biết gì cả…",
						"thai": "อึก…พวกเจ้า…ไม่รู้อะไรเลย…",
						"hindi": "उफ़… तुम… कुछ नहीं जानते…"
					},
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "숲은… 계속될 것이다… 영원히…",
						"english": "The forest… will endure… forever…",
						"japanese": "森は…続くだろう…永遠に…",
						"chinese": "森林…会继续存在…永远…",
						"french": "La forêt… perdurera… éternellement…",
						"spanish": "El bosque… perdurará… para siempre…",
						"vietnamese": "Rừng… sẽ tiếp tục… mãi mãi…",
						"thai": "ป่านี้…จะคงอยู่…ตลอดไป…",
						"hindi": "वन… बना रहेगा… हमेशा…"
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "쓰러뜨렸어… 하지만 이 싸움… 찝찝해.",
						"english": "We defeated it… but this fight… feels wrong.",
						"japanese": "倒した…だがこの戦い…後味が悪い。",
						"chinese": "我们打败了它…但这场战斗…感觉不对劲。",
						"french": "Nous l'avons vaincu… mais ce combat… laisse un goût amer.",
						"spanish": "Lo derrotamos… pero esta lucha… se siente extraña.",
						"vietnamese": "Đã đánh bại nó… nhưng trận chiến này… thật khó chịu.",
						"thai": "โค่นล้มได้แล้ว…แต่การต่อสู้ครั้งนี้…มันรู้สึกไม่ชอบมาพากล",
						"hindi": "हमने इसे हरा दिया… लेकिन यह लड़ाई… अजीब सी लगती है।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "숲의 속삭임은 멈추지 않았다. 더 깊은 곳에서… 비극은 계속된다.",
						"english": "The whispers of the forest did not cease. From deeper within… the tragedy continues.",
						"japanese": "森の囁きは止まない。さらに奥深くで…悲劇は続く。",
						"chinese": "森林的低语并未停止。在更深处…悲剧仍在继续。",
						"french": "Les murmures de la forêt ne se sont pas tus. Des profondeurs… la tragédie continue.",
						"spanish": "Los susurros del bosque no cesaron. Desde lo más profundo… la tragedia continúa.",
						"vietnamese": "Tiếng thì thầm của rừng không dừng lại. Từ sâu thẳm hơn… bi kịch vẫn tiếp diễn.",
						"thai": "เสียงกระซิบของป่าไม่หยุดลง จากที่ลึกกว่านั้น…โศกนาฏกรรมยังคงดำเนินต่อไป",
						"hindi": "वन की फुसफुसाहट नहीं रुकी। और गहराई से… त्रासदी जारी है।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 것들… 이 숲의 고통은… 영원히 끝나지 않아.",
						"english": "Foolish ones… The suffering of this forest… will never end.",
						"japanese": "愚かな者たち…この森の苦痛は…永遠に終わらない。",
						"chinese": "愚蠢的东西…这片森林的痛苦…永远不会结束。",
						"french": "Insensés… La souffrance de cette forêt… ne s'arrêtera jamais.",
						"spanish": "Estúpidos… El sufrimiento de este bosque… nunca terminará.",
						"vietnamese": "Những kẻ ngu ngốc… Nỗi đau của khu rừng này… sẽ không bao giờ kết thúc.",
						"thai": "พวกโง่เขลา…ความเจ็บปวดของป่านี้…จะไม่มีวันสิ้นสุด",
						"hindi": "मूर्खों… इस वन का दर्द… कभी खत्म नहीं होगा।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "아직 끝나지 않았어! 다시 돌아올 거야!",
						"english": "It's not over yet! We'll be back!",
						"japanese": "まだ終わってない！また戻ってくる！",
						"chinese": "还没结束！我们会回来的！",
						"french": "Ce n'est pas encore fini ! Nous reviendrons !",
						"spanish": "¡Aún no ha terminado! ¡Volveremos!",
						"vietnamese": "Chưa kết thúc đâu! Chúng ta sẽ quay lại!",
						"thai": "ยังไม่จบ! เราจะกลับมาอีก!",
						"hindi": "अभी खत्म नहीं हुआ है! हम वापस आएंगे!"
					},
					"emotion": "angry"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"고대 전설이 흐르는 맹그로브 숲.",
			"길을 잃은 자, 이곳에 발을 들이지 마라.",
			"그러나 이 비극은 시작에 불과했다.",
			"숲은 속삭였다. 오래된 슬픔을."
		],
		"english": [
			"Mangrove forest, where ancient legends flow.",
			"Lost souls, do not set foot here.",
			"But this tragedy was just the beginning.",
			"The forest whispered. An ancient sorrow."
		],
		"japanese": [
			"古代の伝説が流れるマングローブの森。",
			"道に迷いし者よ、ここに足を踏み入れるな。",
			"しかし、この悲劇は始まりに過ぎなかった。",
			"森は囁いた。古き悲しみを。"
		],
		"chinese": [
			"古老传说流淌的红树林。",
			"迷失之人，切勿踏足此处。",
			"然而，这场悲剧才刚刚开始。",
			"森林低语着。古老的悲伤。"
		],
		"french": [
			"Forêt de mangroves, où coulent d'anciennes légendes.",
			"Âmes égarées, ne mettez pas les pieds ici.",
			"Mais cette tragédie n'était que le début.",
			"La forêt murmura. Une ancienne tristesse."
		],
		"spanish": [
			"Bosque de manglares, donde fluyen leyendas antiguas.",
			"Almas perdidas, no pisen este lugar.",
			"Pero esta tragedia era solo el principio.",
			"El bosque susurró. Una antigua pena."
		],
		"vietnamese": [
			"Rừng đước, nơi những truyền thuyết cổ xưa chảy trôi.",
			"Kẻ lạc lối, đừng đặt chân đến đây.",
			"Nhưng bi kịch này chỉ là khởi đầu.",
			"Rừng thì thầm. Nỗi buồn cổ xưa."
		],
		"thai": [
			"ป่าชายเลน ที่ซึ่งตำนานโบราณไหลเวียน",
			"ผู้หลงทาง อย่าได้ย่างกรายเข้ามา",
			"แต่โศกนาฏกรรมนี้เป็นเพียงจุดเริ่มต้น",
			"ป่ากระซิบ ความเศร้าโศกโบราณ"
		],
		"hindi": [
			"मैंग्रोव वन, जहाँ प्राचीन किंवदंतियाँ बहती हैं।",
			"भटके हुए लोग, यहाँ पैर मत रखना।",
			"पर यह त्रासदी तो बस शुरुआत थी।",
			"जंगल फुसफुसाया। एक प्राचीन दुख।"
		]
	}
} as const;
