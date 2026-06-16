export const scenario_snowy_skaalbane_93_03 = {
	"scenario_id": "snowy_skaalbane_93_03",
	"order": 3,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"frost": {
			"id": "mon_942bca3b-33e7-4b14-98e5-ec1e2dc78d5b",
			"name": {
				"korean": "서리",
				"english": "Frost",
				"japanese": "霜",
				"chinese": "霜",
				"french": "Givre",
				"spanish": "Escarcha",
				"vietnamese": "Băng Giá",
				"thai": "น้ำแข็ง",
				"hindi": "पाला"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/0a8c2f92-0cf9-413d-0b33-8e0204caae00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/df60b327-4cc2-435b-67e0-cffb4c319900/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"탑의 심장부. 핵이 차갑게 빛났다.",
			"그 얼음 속에서, 가느다란 촉수들이 돋아났다.",
			"온기를 탐하는 손길. 모든 것을 집어삼키려 한다.",
			"누군가는 막아내야 했다. 그 온기를 지키기 위해."
		],
		"english": [
			"Heart of the tower. The core glowed coldly.",
			"From within the ice, slender tendrils emerged.",
			"Hands craving warmth. Seeking to devour all.",
			"Someone had to stop it. To protect that warmth."
		],
		"japanese": [
			"塔の心臓部。核は冷たく輝いていた。",
			"その氷の中から、細い触手が伸びてきた。",
			"温もりを貪る手。全てを飲み込もうとしている。",
			"誰かが止めなければならなかった。その温もりを守るために。"
		],
		"chinese": [
			"塔的深处。核心冰冷地闪耀着。",
			"在那冰中，细长的触手冒了出来。",
			"渴望温暖的触手。试图吞噬一切。",
			"必须有人阻止。为了守护那份温暖。"
		],
		"french": [
			"Cœur de la tour. Le noyau brillait froidement.",
			"De la glace, de fines tentacules surgirent.",
			"Des mains avides de chaleur. Cherchant à tout dévorer.",
			"Quelqu'un devait l'arrêter. Pour protéger cette chaleur."
		],
		"spanish": [
			"Corazón de la torre. El núcleo brillaba fríamente.",
			"De ese hielo, delgados tentáculos brotaron.",
			"Manos que anhelan calor. Buscando devorarlo todo.",
			"Alguien tenía que detenerlo. Para proteger ese calor."
		],
		"vietnamese": [
			"Trái tim của ngọn tháp. Lõi phát sáng lạnh lẽo.",
			"Từ trong băng, những xúc tu mảnh mai nhú ra.",
			"Bàn tay khao khát hơi ấm. Muốn nuốt chửng mọi thứ.",
			"Ai đó phải ngăn chặn nó. Để bảo vệ hơi ấm đó."
		],
		"thai": [
			"ใจกลางหอคอย แกนกลางส่องประกายเย็นยะเยือก",
			"จากในน้ำแข็ง หนวดเรียวบางผุดขึ้นมา",
			"มือที่กระหายความอบอุ่น พยายามกลืนกินทุกสิ่ง",
			"บางคนต้องหยุดมัน เพื่อปกป้องความอบอุ่นนั้น"
		],
		"hindi": [
			"टावर का हृदय। कोर ठंडी चमक रहा था।",
			"उस बर्फ़ के भीतर से, पतले-पतले टेंटेकल्स निकले।",
			"गर्मी की लालची हाथें। सब कुछ निगलने की कोशिश कर रही हैं।",
			"किसी को इसे रोकना था। उस गर्मी को बचाने के लिए।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "탑의 심장. 푸른 핵이 격렬하게 고동쳤다.",
						"english": "Heart of the tower. The blue core pulsed violently.",
						"japanese": "塔の心臓。青い核が激しく鼓動していた。",
						"chinese": "塔的心脏。蓝色核心剧烈跳动。",
						"french": "Cœur de la tour. Le noyau bleu palpitait violemment.",
						"spanish": "Corazón de la torre. El núcleo azul latía violentamente.",
						"vietnamese": "Trái tim của ngọn tháp. Lõi xanh rung động dữ dội.",
						"thai": "ใจกลางหอคอย แกนสีน้ำเงินเต้นระรัว",
						"hindi": "टावर का हृदय। नीला कोर तेज़ी से धड़क रहा था।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "여기가… 핵인가.",
						"english": "Is this... the core?",
						"japanese": "ここが…核なのか。",
						"chinese": "这里是…核心吗？",
						"french": "C'est ça... le noyau ?",
						"spanish": "¿Esto es... el núcleo?",
						"vietnamese": "Đây là... lõi sao?",
						"thai": "นี่คือ...แกนกลาง?",
						"hindi": "क्या यह... कोर है?"
					}
				},
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "frost"
				},
				{
					"type": "speech",
					"content": {
						"korean": "저것 봐. 얼음 속에서… 돋아나고 있어.",
						"english": "Look! Something's emerging... from within the ice.",
						"japanese": "あれを見ろ。氷の中から…生えてきている。",
						"chinese": "看！从冰里...长出来了。",
						"french": "Regarde ! Quelque chose émerge... de la glace.",
						"spanish": "¡Mira! Algo está brotando... del hielo.",
						"vietnamese": "Nhìn kìa. Từ trong băng... đang nhú ra.",
						"thai": "ดูนั่นสิ! กำลังงอกออกมา...จากในน้ำแข็ง",
						"hindi": "देखो! बर्फ़ के भीतर से... कुछ निकल रहा है।"
					},
					"speaker": "frost",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "핵 주변의 얼음에서 가느다란 촉수 같은 줄기가 돋아나기 시작한다.",
						"english": "Slender, tentacle-like stems begin to emerge from the ice around the core.",
						"japanese": "核周辺の氷から、細い触手のような茎が伸び始めます。",
						"chinese": "核心周围的冰中，细长的触手状茎开始冒出来。",
						"french": "De fines tiges ressemblant à des tentacules commencent à émerger de la glace autour du noyau.",
						"spanish": "Delgados tallos, como tentáculos, empiezan a brotar del hielo alrededor del núcleo.",
						"vietnamese": "Những thân cây mảnh mai, giống như xúc tu, bắt đầu nhú ra từ lớp băng xung quanh lõi.",
						"thai": "ลำต้นเล็กๆ คล้ายหนวดปลาหมึกเริ่มงอกออกมาจากน้ำแข็งรอบแกนกลาง",
						"hindi": "कोर के चारों ओर की बर्फ़ से पतले, टेंटैकल जैसे तने निकलने लगते हैं।"
					},
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "frost"
				},
				{
					"type": "speech",
					"content": {
						"korean": "저것들은… 온기를 빼앗으려 할 거야.",
						"english": "They'll try to steal... the warmth.",
						"japanese": "あれらは…温もりを奪おうとするだろう。",
						"chinese": "那些东西…会试图夺走温暖。",
						"french": "Ils vont essayer de voler... la chaleur.",
						"spanish": "Ellos intentarán robar... el calor.",
						"vietnamese": "Chúng sẽ cố gắng lấy đi... hơi ấm.",
						"thai": "พวกมันจะพยายามขโมย...ความอบอุ่นไป",
						"hindi": "वे... गर्मी चुराने की कोशिश करेंगे।"
					},
					"speaker": "frost",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "온기? 왜?",
						"english": "Warmth? Why?",
						"japanese": "温もり？なぜ？",
						"chinese": "温暖？为什么？",
						"french": "Chaleur ? Pourquoi ?",
						"spanish": "¿Calor? ¿Por qué?",
						"vietnamese": "Hơi ấm? Tại sao?",
						"thai": "ความอบอุ่นเหรอ? ทำไมล่ะ?",
						"hindi": "गर्मी? क्यों?"
					}
				},
				{
					"speaker": "frost",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "차가움 속에선… 생명은 시들어. 저들은 그걸 원해.",
						"english": "In the cold… life withers. They want that.",
						"japanese": "冷気の中では… 生命は枯れる。奴らはそれを望んでいる。",
						"chinese": "在寒冷中……生命会枯萎。他们想要那样。",
						"french": "Dans le froid… la vie se fane. Ils veulent ça.",
						"spanish": "En el frío… la vida se marchita. Ellos quieren eso.",
						"vietnamese": "Trong cái lạnh… sự sống tàn lụi. Bọn chúng muốn điều đó.",
						"thai": "ในความหนาวเย็น… ชีวิตร่วงโรยไป พวกมันต้องการสิ่งนั้น",
						"hindi": "ठंड में… जीवन मुरझा जाता है। वे यही चाहते हैं।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "내 동료들 앞에선… 절대 안 돼.",
						"english": "Not in front of my comrades… Never.",
						"japanese": "仲間たちの前では… 絶対にさせない。",
						"chinese": "在我同伴面前……绝不。",
						"french": "Devant mes camarades… Jamais.",
						"spanish": "Frente a mis compañeros… ¡Nunca!",
						"vietnamese": "Trước mặt đồng đội của tôi… tuyệt đối không.",
						"thai": "ต่อหน้าสหายของข้า… ไม่มีทางเด็ดขาด",
						"hindi": "मेरे साथियों के सामने… बिल्कुल नहीं।"
					},
					"speaker": "frost",
					"emotion": "angry"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "frost",
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 차가운 곳에서… 온기는 더욱 소중해.",
						"english": "In this cold place… warmth is even more precious.",
						"japanese": "この冷たい場所では… 温もりは一層大切だ。",
						"chinese": "在这个寒冷的地方……温暖更加珍贵。",
						"french": "Dans ce lieu froid… la chaleur est encore plus précieuse.",
						"spanish": "En este lugar frío… el calor es aún más precioso.",
						"vietnamese": "Ở nơi lạnh lẽo này… sự ấm áp càng quý giá hơn.",
						"thai": "ในที่อันหนาวเย็นนี้… ความอบอุ่นยิ่งมีค่า",
						"hindi": "इस ठंडी जगह में… गर्माहट और भी अनमोल है।"
					},
					"speaker": "frost",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "막아낼 수 있을까?",
						"english": "Can we stop them?",
						"japanese": "食い止められるだろうか？",
						"chinese": "能挡住吗？",
						"french": "Pouvons-nous les arrêter ?",
						"spanish": "¿Podremos detenerlos?",
						"vietnamese": "Liệu có ngăn cản được không?",
						"thai": "จะต้านทานไหวไหม?",
						"hindi": "क्या हम रोक पाएंगे?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "막아내야 해. 무엇보다 따스함을 지켜야 해.",
						"english": "We must stop them. Above all, we must protect the warmth.",
						"japanese": "食い止めなければならない。何よりも温もりを守らねば。",
						"chinese": "必须挡住。最重要的是，要守护温暖。",
						"french": "Nous devons les arrêter. Par-dessus tout, nous devons protéger la chaleur.",
						"spanish": "Debemos detenerlos. Sobre todo, debemos proteger el calor.",
						"vietnamese": "Phải ngăn chặn. Hơn hết, phải bảo vệ sự ấm áp.",
						"thai": "ต้องต้านทานให้ได้ ต้องปกป้องความอบอุ่นไว้เหนือสิ่งอื่นใด",
						"hindi": "हमें उन्हें रोकना होगा। सबसे बढ़कर, हमें गर्माहट की रक्षा करनी होगी।"
					},
					"speaker": "frost",
					"emotion": "angry"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"speaker": "frost",
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"speaker": "frost",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "촉수들이… 점점 더 커지고 있어.",
						"english": "The tentacles… are growing larger and larger.",
						"japanese": "触手たちが… どんどん大きくなっている。",
						"chinese": "触手们……越来越大。",
						"french": "Les tentacules… deviennent de plus en plus grandes.",
						"spanish": "Los tentáculos… son cada vez más grandes.",
						"vietnamese": "Những xúc tu… đang ngày càng lớn hơn.",
						"thai": "หนวดพวกนั้น… กำลังใหญ่ขึ้นเรื่อยๆ",
						"hindi": "स्पर्शक… और बड़े होते जा रहे हैं।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "멈출 방법은 없어?",
						"english": "Is there no way to stop it?",
						"japanese": "止める方法はないのか？",
						"chinese": "没有办法阻止吗？",
						"french": "N'y a-t-il aucun moyen de l'arrêter ?",
						"spanish": "¿No hay forma de detenerlo?",
						"vietnamese": "Không có cách nào ngăn chặn sao?",
						"thai": "ไม่มีทางหยุดมันได้เหรอ?",
						"hindi": "क्या इसे रोकने का कोई तरीका नहीं है?"
					}
				},
				{
					"speaker": "frost",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "저 핵을… 끝내야 해. 그렇지 않으면 모두 얼어붙을 거야.",
						"english": "We must… end that core. Otherwise, everything will freeze.",
						"japanese": "あの核を… 終わらせなければ。さもなければ、全てが凍りつく。",
						"chinese": "必须……摧毁那个核心。否则，一切都会冻结。",
						"french": "Nous devons… détruire ce noyau. Sinon, tout va geler.",
						"spanish": "Debemos… acabar con ese núcleo. De lo contrario, todo se congelará.",
						"vietnamese": "Phải… kết thúc cái lõi đó. Nếu không, tất cả sẽ đóng băng.",
						"thai": "ต้อง… ทำลายแกนกลางนั่นซะ ไม่เช่นนั้นทุกอย่างจะแข็งตาย",
						"hindi": "हमें… उस कोर को खत्म करना होगा। वरना, सब कुछ जम जाएगा।"
					}
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "온기… 따스함… 모두 나의 것이다.",
						"english": "Warmth… comfort… all mine.",
						"japanese": "温もり… 暖かさ… 全ては私のものだ。",
						"chinese": "温暖……舒适……全都是我的。",
						"french": "La chaleur… le confort… tout est à moi.",
						"spanish": "Calor… calidez… todo es mío.",
						"vietnamese": "Sự ấm áp… sự dễ chịu… tất cả là của ta.",
						"thai": "ความอบอุ่น… ความสบาย… ทั้งหมดเป็นของข้า",
						"hindi": "गर्मी… आराम… सब मेरा है।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "너 따위에게 줄 온기는 없어!",
						"english": "There's no warmth for the likes of you!",
						"japanese": "お前のような奴に与える温もりなどない！",
						"chinese": "你这种东西，不配得到温暖！",
						"french": "Il n'y a pas de chaleur pour des gens comme toi !",
						"spanish": "¡No hay calor para alguien como tú!",
						"vietnamese": "Không có sự ấm áp nào dành cho kẻ như ngươi!",
						"thai": "ไม่มีความอบอุ่นสำหรับพวกแกหรอก!",
						"hindi": "तुम जैसे के लिए कोई गर्माहट नहीं है!"
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "네가 가진 모든 것… 나의 양분이 되리라.",
						"english": "All that you have... shall be my nourishment.",
						"japanese": "お前が持つ全て…私の糧となるだろう。",
						"chinese": "你所拥有的一切……都将成为我的养分。",
						"french": "Tout ce que tu possèdes... deviendra ma subsistance.",
						"spanish": "Todo lo que tienes... será mi sustento.",
						"vietnamese": "Tất cả những gì ngươi có… sẽ là dưỡng chất của ta.",
						"thai": "ทุกสิ่งที่มี… จะเป็นอาหารของข้า.",
						"hindi": "तुम्हारे पास जो कुछ भी है... मेरा पोषण बनेगा।"
					}
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…겨우 이 정도로는… 나를 막을 수 없다.",
						"english": "...This much is not enough... to stop me.",
						"japanese": "…たったこれしきでは…私を止められない。",
						"chinese": "……仅凭这些……无法阻止我。",
						"french": "...Ce n'est pas suffisant... pour m'arrêter.",
						"spanish": "...Esto no es suficiente... para detenerme.",
						"vietnamese": "…Chỉ chừng này thôi… không thể ngăn cản ta.",
						"thai": "…แค่เท่านี้… หยุดข้าไม่ได้หรอก.",
						"hindi": "...बस इतना काफी नहीं है... मुझे रोकने के लिए।"
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "내가 흡수한… 수천의 목소리가… 너를 부를 것이다.",
						"english": "The thousands of voices... I have absorbed... will call to you.",
						"japanese": "私が吸収した…数千の声が…お前を呼ぶだろう。",
						"chinese": "我所吸收的……数千个声音……将呼唤你。",
						"french": "Les milliers de voix... que j'ai absorbées... t'appelleront.",
						"spanish": "Las miles de voces... que he absorbido... te llamarán.",
						"vietnamese": "Hàng ngàn giọng nói… mà ta đã hấp thụ… sẽ gọi ngươi.",
						"thai": "เสียงนับพันที่ข้าดูดกลืน… จะเรียกหาเจ้า.",
						"hindi": "मैंने जो हजारों आवाजें... सोख ली हैं... तुम्हें पुकारेंगी।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "무슨 소리야? 다 끝난 거 아니었어?",
						"english": "What's that sound? Wasn't it over?",
						"japanese": "何の音だ？もう終わったんじゃなかったのか？",
						"chinese": "什么声音？不是都结束了吗？",
						"french": "Quel est ce bruit ? Ce n'était pas fini ?",
						"spanish": "¿Qué es ese sonido? ¿No había terminado ya?",
						"vietnamese": "Tiếng gì vậy? Chẳng phải mọi chuyện đã kết thúc rồi sao?",
						"thai": "เสียงอะไรน่ะ? ไม่ใช่ว่ามันจบแล้วเหรอ?",
						"hindi": "यह कैसी आवाज है? क्या यह खत्म नहीं हो गया था?"
					},
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "승리했지만, 불안한 여운이 남았다. 얼음 속에서… 알 수 없는 부름이 시작될 것 같았다.",
						"english": "Victorious, yet an uneasy lingering feeling remained. From within the ice... an unknown call seemed to begin.",
						"japanese": "勝利したが、不安な余韻が残った。氷の中から…未知の呼び声が始まるようだった。",
						"chinese": "虽然胜利了，但不安的余韵依然存在。仿佛有未知的呼唤，正从冰中开始。",
						"french": "Victorieux, mais un sentiment d'incertitude persistait. Du fond de la glace... un appel inconnu semblait naître.",
						"spanish": "Victorioso, pero una sensación de inquietud persistía. Desde el hielo... una llamada desconocida parecía comenzar.",
						"vietnamese": "Chiến thắng, nhưng một cảm giác bất an vẫn còn đọng lại. Từ trong băng… một tiếng gọi không xác định dường như bắt đầu.",
						"thai": "แม้จะชนะ แต่ความรู้สึกไม่สบายใจยังคงอยู่. จากในน้ำแข็ง… เสียงเรียกที่ไม่รู้จักดูเหมือนจะเริ่มขึ้น.",
						"hindi": "विजयी, फिर भी एक बेचैन करने वाला एहसास रह गया। बर्फ के भीतर से... एक अज्ञात पुकार शुरू होने वाली थी।"
					},
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "어리석은 자들. 온기를 지키려다… 모두 얼어붙을 것이다.",
						"english": "Fools. In trying to protect warmth... all shall freeze.",
						"japanese": "愚かな者たち。温もりを守ろうとして…皆凍りつくだろう。",
						"chinese": "愚蠢的家伙们。想要守护温暖……最终都会被冻结。",
						"french": "Imbéciles. En essayant de protéger la chaleur... tous gèleront.",
						"spanish": "Tontos. Al intentar proteger la calidez... todos se congelarán.",
						"vietnamese": "Những kẻ ngốc. Cố gắng bảo vệ sự ấm áp… tất cả sẽ bị đóng băng.",
						"thai": "พวกโง่เง่า. พยายามจะรักษาความอบอุ่น… แต่ทุกคนจะต้องแข็งตาย.",
						"hindi": "मूर्ख। गर्मी बचाने की कोशिश में... सब जम जाएँगे।"
					},
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "절대… 포기하지 않아!",
						"english": "Never... give up!",
						"japanese": "絶対に…諦めない！",
						"chinese": "绝不……放弃！",
						"french": "Jamais... n'abandonne !",
						"spanish": "¡Nunca... me rendiré!",
						"vietnamese": "Tuyệt đối… không từ bỏ!",
						"thai": "ไม่มีทาง… ยอมแพ้เด็ดขาด!",
						"hindi": "कभी नहीं... हार नहीं मानूंगा!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				}
			]
		}
	]
} as const;
