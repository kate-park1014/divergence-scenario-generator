export const scenario_snowy_luminaria_10_03 = {
	"scenario_id": "snowy_luminaria_10_03",
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
			"서리가 속삭였다. 오로라만이 구원이라고.",
			"차가운 진실은 얼음 틈새에 숨겨져 있었다.",
			"빛을 향한 발걸음은 파멸의 길을 재촉한다.",
			"반복되는 문양. 그것은 우연이 아니었다."
		],
		"english": [
			"The Frost whispered. Only the Aurora offered salvation.",
			"The cold truth was hidden in the ice cracks.",
			"Steps towards the light hasten the path to ruin.",
			"Recurring patterns. It was no coincidence."
		],
		"japanese": [
			"霜が囁いた。オーロラだけが救いだと。",
			"冷たい真実は氷の隙間に隠されていた。",
			"光への一歩は破滅の道を早める。",
			"繰り返される紋様。それは偶然ではなかった。"
		],
		"chinese": [
			"霜窃窃私语。唯有极光是救赎。",
			"冰冷的真相隐藏在冰缝之中。",
			"迈向光明的脚步加速了毁灭之路。",
			"重复的图案。那并非巧合。"
		],
		"french": [
			"Le Givre murmura. Seule l'Aurore offrait le salut.",
			"La froide vérité était cachée dans les fissures de glace.",
			"Les pas vers la lumière précipitent le chemin de la ruine.",
			"Des motifs récurrents. Ce n'était pas une coïncidence."
		],
		"spanish": [
			"La Escarcha susurró. Solo la Aurora traía la salvación.",
			"La fría verdad se ocultaba en las grietas del hielo.",
			"Los pasos hacia la luz aceleran el camino a la ruina.",
			"Patrones recurrentes. No fue una coincidencia."
		],
		"vietnamese": [
			"Sương giá thì thầm. Chỉ có Cực quang mới là cứu rỗi.",
			"Sự thật lạnh lùng ẩn mình trong kẽ băng.",
			"Bước chân hướng về ánh sáng vội vã đưa đến con đường hủy diệt.",
			"Những hoa văn lặp lại. Đó không phải là ngẫu nhiên."
		],
		"thai": [
			"เหมันต์กระซิบ แสงเหนือเท่านั้นคือหนทางรอด",
			"ความจริงอันเย็นชาซ่อนอยู่ในรอยแยกของน้ำแข็ง",
			"ก้าวที่มุ่งสู่แสงเร่งเร้าเส้นทางสู่ความพินาศ",
			"ลวดลายที่ซ้ำซาก ไม่ใช่เรื่องบังเอิญ"
		],
		"hindi": [
			"पाले ने फुसफुसाया। केवल अरोरा ही मोक्ष है।",
			"ठंडी सच्चाई बर्फीली दरारों में छिपी थी।",
			"प्रकाश की ओर बढ़ते कदम विनाश के मार्ग को तेज़ करते हैं।",
			"दोहराए जाने वाले पैटर्न। यह कोई संयोग नहीं था।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "폐허가 된 사원 입구. 기이한 한기가 발걸음을 멈추게 했다.",
						"english": "The entrance to a ruined temple. A strange chill stopped our steps.",
						"japanese": "廃墟となった寺院の入り口。奇妙な冷気が足取りを止めた。",
						"chinese": "废弃神殿的入口。一股奇异的寒气令人止步。",
						"french": "L'entrée d'un temple en ruine. Un froid étrange arrêta nos pas.",
						"spanish": "La entrada a un templo en ruinas. Un frío extraño detuvo nuestros pasos.",
						"vietnamese": "Lối vào một ngôi đền đổ nát. Một luồng khí lạnh kỳ lạ khiến bước chân dừng lại.",
						"thai": "ทางเข้าวิหารปรักหักพัง ความเย็นยะเยือกแปลกประหลาดหยุดยั้งฝีเท้า",
						"hindi": "एक खंडहर मंदिर का प्रवेश द्वार। एक अजीब सी ठंड ने हमारे कदम रोक दिए।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "frost",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이곳입니다. 오로라가 인도하는 길의 시작.",
						"english": "This is it. The beginning of the path guided by the Aurora.",
						"japanese": "ここです。オーロラが導く道の始まり。",
						"chinese": "就是这里。极光指引之路的起点。",
						"french": "C'est ici. Le début du chemin guidé par l'Aurore.",
						"spanish": "Es aquí. El comienzo del camino guiado por la Aurora.",
						"vietnamese": "Đây rồi. Khởi đầu con đường mà Cực quang dẫn lối.",
						"thai": "ที่นี่คือจุดเริ่มต้นของเส้นทางที่แสงเหนือนำทาง",
						"hindi": "यह रहा। अरोरा द्वारा निर्देशित मार्ग का आरंभ।"
					},
					"speaker": "frost",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "서리, 당신이 말한 구원의 길이란 게 이런 폐허인가?",
						"english": "Frost, is this ruined place the path to salvation you spoke of?",
						"japanese": "霜よ、あなたが言っていた救いの道とは、このような廃墟のことか？",
						"chinese": "霜，你说的救赎之路就是这样的废墟吗？",
						"french": "Givre, est-ce ce lieu en ruine le chemin du salut dont tu parlais ?",
						"spanish": "Escarcha, ¿es este lugar en ruinas el camino a la salvación del que hablabas?",
						"vietnamese": "Sương giá, con đường cứu rỗi mà ngươi nói là một nơi đổ nát như thế này sao?",
						"thai": "เหมันต์ นี่หรือคือเส้นทางแห่งความรอดที่คุณกล่าวถึง ซากปรักหักพังเช่นนี้หรือ?",
						"hindi": "पाले, क्या यही खंडहर है वह मोक्ष का मार्ग जिसकी तुमने बात की थी?"
					}
				},
				{
					"content": {
						"korean": "겉모습에 속지 마세요. 빛은 언제나 가장 깊은 곳에 있으니.",
						"english": "Don't be fooled by appearances. Light is always found in the deepest places.",
						"japanese": "見た目に騙されないでください。光は常に最も深い場所にあります。",
						"chinese": "别被外表蒙蔽。光总是在最深处。",
						"french": "Ne vous fiez pas aux apparences. La lumière se trouve toujours au plus profond.",
						"spanish": "No te dejes engañar por las apariencias. La luz siempre está en lo más profundo.",
						"vietnamese": "Đừng bị vẻ bề ngoài đánh lừa. Ánh sáng luôn ở nơi sâu thẳm nhất.",
						"thai": "อย่าถูกหลอกด้วยรูปลักษณ์ภายนอก แสงสว่างมักจะอยู่ในที่ที่ลึกที่สุดเสมอ",
						"hindi": "दिखावे से धोखा मत खाओ। प्रकाश हमेशा सबसे गहरी जगहों में होता है।"
					},
					"speaker": "frost",
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "frost",
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						3
					]
				},
				{
					"emotion": "base",
					"content": {
						"korean": "더 깊이 나아가야 합니다. 오로라는 우리를 시험합니다.",
						"english": "We must go deeper. The Aurora tests us.",
						"japanese": "もっと奥へ進まなければなりません。オーロラは私たちを試しています。",
						"chinese": "我们必须深入。极光正在考验我们。",
						"french": "Nous devons aller plus loin. L'Aurore nous met à l'épreuve.",
						"spanish": "Debemos ir más profundo. La Aurora nos pone a prueba.",
						"vietnamese": "Chúng ta phải tiến sâu hơn nữa. Cực quang đang thử thách chúng ta.",
						"thai": "เราต้องเข้าไปให้ลึกกว่านี้ แสงเหนือกำลังทดสอบเรา",
						"hindi": "हमें और गहराई तक जाना होगा। अरोरा हमारी परीक्षा ले रही है।"
					},
					"speaker": "frost",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "저 비석 좀 봐. 문양이 계속 반복돼.",
						"english": "Look at that stele. The patterns keep repeating.",
						"japanese": "あの石碑を見て。紋様がずっと繰り返されている。",
						"chinese": "看那块石碑。图案一直在重复。",
						"french": "Regarde cette stèle. Les motifs se répètent sans cesse.",
						"spanish": "Mira esa estela. Los patrones se repiten constantemente.",
						"vietnamese": "Nhìn bia đá kia kìa. Những hoa văn cứ lặp đi lặp lại.",
						"thai": "ดูเสาหินนั่นสิ ลวดลายมันซ้ำไปซ้ำมา",
						"hindi": "उस शिला को देखो। पैटर्न बार-बार दोहराए जा रहे हैं।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "낡은 유적의 흔적일 뿐. 진정한 구원은 저 너머에.",
						"english": "Just traces of an ancient ruin. True salvation lies beyond.",
						"japanese": "古びた遺跡の痕跡に過ぎない。真の救済はあの向こうに。",
						"chinese": "不过是古老遗迹的痕迹。真正的救赎在彼岸。",
						"french": "Juste des traces d'une ancienne ruine. Le salut véritable est au-delà.",
						"spanish": "Solo vestigios de una antigua ruina. La verdadera salvación está más allá.",
						"vietnamese": "Chỉ là dấu vết của tàn tích cũ. Cứu rỗi thực sự nằm ở phía bên kia.",
						"thai": "เป็นเพียงร่องรอยของซากปรักหักพังเก่าแก่ การช่วยให้รอดที่แท้จริงอยู่เหนือกว่านั้น",
						"hindi": "बस एक प्राचीन खंडहर के निशान। सच्चा उद्धार उस पार है。"
					},
					"speaker": "frost",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "...왠지 불안한데.",
						"english": "...I feel uneasy somehow.",
						"japanese": "...なぜか不安だ。",
						"chinese": "...不知为何，我感到不安。",
						"french": "...Je me sens mal à l'aise, d'une certaine manière.",
						"spanish": "...Me siento inquieto, de alguna manera.",
						"vietnamese": "...Sao tôi thấy bất an quá.",
						"thai": "...รู้สึกไม่สบายใจยังไงก็ไม่รู้สิ",
						"hindi": "...कुछ अजीब सी बेचैनी हो रही है।"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "frost",
					"spot": [
						4,
						3
					]
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "의심하지 마세요. 오로라의 빛은 유일한 진실입니다.",
						"english": "Do not doubt. The light of the Aurora is the only truth.",
						"japanese": "疑うな。オーロラの光こそが唯一の真実だ。",
						"chinese": "不要怀疑。极光之光是唯一的真相。",
						"french": "Ne doutez pas. La lumière de l'Aurore est l'unique vérité.",
						"spanish": "No dudes. La luz de la Aurora es la única verdad.",
						"vietnamese": "Đừng nghi ngờ. Ánh sáng của Cực Quang là sự thật duy nhất.",
						"thai": "อย่าสงสัยเลย แสงแห่งแสงเหนือคือความจริงเพียงหนึ่งเดียว",
						"hindi": "संदेह मत करो। अरोरा की रोशनी ही एकमात्र सच है।"
					},
					"speaker": "frost",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "진실? 뭔가 잘못된 것 같아.",
						"english": "Truth? Something feels wrong.",
						"japanese": "真実？何かがおかしい気がする。",
						"chinese": "真相？我觉得有什么不对劲。",
						"french": "La vérité ? Quelque chose cloche.",
						"spanish": "¿Verdad? Algo no me cuadra.",
						"vietnamese": "Sự thật? Hình như có gì đó không đúng.",
						"thai": "ความจริง? รู้สึกเหมือนมีอะไรผิดปกติ",
						"hindi": "सच? कुछ गलत लग रहा है।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "happy",
					"speaker": "frost",
					"type": "speech",
					"content": {
						"korean": "곧 알게 될 겁니다. 우리가 찾던 궁극적인 구원을.",
						"english": "You will soon know. The ultimate salvation we sought.",
						"japanese": "じきに分かるだろう。我々が求めていた究極の救済を。",
						"chinese": "你很快就会明白。我们所寻求的终极救赎。",
						"french": "Vous saurez bientôt. Le salut ultime que nous recherchions.",
						"spanish": "Pronto lo sabrás. La salvación definitiva que buscábamos.",
						"vietnamese": "Bạn sẽ sớm biết thôi. Sự cứu rỗi tối thượng mà chúng ta tìm kiếm.",
						"thai": "คุณจะรู้ในไม่ช้า การช่วยให้รอดสูงสุดที่เราแสวงหา",
						"hindi": "आपको जल्द ही पता चल जाएगा। वह परम उद्धार जिसे हम खोज रहे थे।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "내 안의 어떤 환영이... 익숙해.",
						"english": "Some illusion within me... it feels familiar.",
						"japanese": "私の中の幻影が... どこか慣れている。",
						"chinese": "我内心的某种幻象... 感觉很熟悉。",
						"french": "Une certaine illusion en moi... elle me semble familière.",
						"spanish": "Alguna ilusión dentro de mí... me resulta familiar.",
						"vietnamese": "Một ảo ảnh nào đó trong tôi... nó quen thuộc.",
						"thai": "ภาพลวงตาบางอย่างในตัวฉัน... มันคุ้นเคย",
						"hindi": "मेरे अंदर कोई भ्रम... जाना पहचाना सा लगता है।"
					}
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"speaker": "frost",
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이제 마지막입니다. 구원의 문이 열립니다.",
						"english": "This is the end. The gate of salvation opens.",
						"japanese": "これで最後だ。救済の門が開かれる。",
						"chinese": "现在是最后了。救赎之门开启。",
						"french": "C'est la fin. La porte du salut s'ouvre.",
						"spanish": "Este es el final. La puerta de la salvación se abre.",
						"vietnamese": "Đây là lần cuối cùng. Cánh cổng cứu rỗi mở ra.",
						"thai": "นี่คือสุดท้ายแล้ว ประตูแห่งการช่วยให้รอดเปิดออก",
						"hindi": "अब यह अंतिम है। उद्धार का द्वार खुलता है।"
					},
					"speaker": "frost",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "여기까지 왔는데, 돌아갈 수 없어.",
						"english": "I've come this far, I can't turn back now.",
						"japanese": "ここまで来たのに、もう引き返せない。",
						"chinese": "我已经走到这里了，无法回头。",
						"french": "Je suis venu si loin, je ne peux pas faire demi-tour.",
						"spanish": "He llegado hasta aquí, no puedo volver atrás.",
						"vietnamese": "Đã đến đây rồi, không thể quay lại được.",
						"thai": "มาถึงตรงนี้แล้ว กลับไม่ได้แล้ว",
						"hindi": "मैं इतनी दूर आ गया हूँ, अब वापस नहीं जा सकता।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이 모든 게... 이미 겪었던 일 같아.",
						"english": "All of this... feels like I've been through it before.",
						"japanese": "この全てが... 以前経験したことのようだ。",
						"chinese": "这一切... 感觉我以前经历过。",
						"french": "Tout cela... J'ai l'impression de l'avoir déjà vécu.",
						"spanish": "Todo esto... siento que ya lo he vivido antes.",
						"vietnamese": "Tất cả những điều này... cảm giác như tôi đã trải qua rồi.",
						"thai": "ทั้งหมดนี้... รู้สึกเหมือนเคยเจอมาแล้ว",
						"hindi": "यह सब... ऐसा लगता है कि मैं इसे पहले भी अनुभव कर चुका हूँ।"
					}
				},
				{
					"content": {
						"korean": "운명은 정해져 있습니다. 받아들이세요.",
						"english": "Destiny is set. Accept it.",
						"japanese": "運命は定められている。受け入れよ。",
						"chinese": "命运已定。接受它吧。",
						"french": "Le destin est scellé. Acceptez-le.",
						"spanish": "El destino está escrito. Acéptalo.",
						"vietnamese": "Vận mệnh đã được định sẵn. Hãy chấp nhận đi.",
						"thai": "โชคชะตาถูกกำหนดไว้แล้ว ยอมรับมันซะ",
						"hindi": "किस्मत तय है। इसे स्वीकार करो।"
					},
					"speaker": "frost",
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"speaker": "frost",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"emotion": "base",
					"content": {
						"korean": "저것이... 오로라의 계시를 지키는 자.",
						"english": "That is... the guardian of Aurora's revelation.",
						"japanese": "あれが…オーロラの啓示を守る者。",
						"chinese": "那个是……守护极光启示之人。",
						"french": "C'est... le gardien de la révélation de l'Aurore.",
						"spanish": "Eso es... el guardián de la revelación de la Aurora.",
						"vietnamese": "Đó là... kẻ canh giữ mặc khải của Aurora.",
						"thai": "นั่นคือ... ผู้พิทักษ์การเปิดเผยของออโรรา",
						"hindi": "वह है... ऑरोरा के रहस्योद्घाटन का संरक्षक।"
					},
					"speaker": "frost",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "하찮은 것들. 반복되는 파멸을 왜 깨닫지 못하는가.",
						"english": "Insignificant beings. Why do you not comprehend the repeating destruction?",
						"japanese": "くだらぬ者たち。繰り返される破滅をなぜ悟らぬか。",
						"chinese": "微不足道的家伙们。为何不明白重复的毁灭？",
						"french": "Êtres insignifiants. Pourquoi ne comprenez-vous pas la destruction répétée ?",
						"spanish": "Seres insignificantes. ¿Por qué no comprendéis la destrucción que se repite?",
						"vietnamese": "Lũ tầm thường. Sao các ngươi không nhận ra sự hủy diệt lặp đi lặp lại?",
						"thai": "พวกไร้ค่า ทำไมถึงไม่เข้าใจถึงการทำลายล้างที่ซ้ำซาก",
						"hindi": "तुच्छ प्राणी। बार-बार होने वाले विनाश को तुम क्यों नहीं समझते?"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "무슨 소리야? 우리가 왜 파멸해!",
						"english": "What are you talking about? Why would we be destroyed?!",
						"japanese": "何を言っている？我々がなぜ破滅するんだ！",
						"chinese": "你在说什么？我们为什么会毁灭！",
						"french": "De quoi parlez-vous ? Pourquoi serions-nous détruits ?!",
						"spanish": "¿De qué hablas? ¡¿Por qué seríamos nosotros los destruidos?!",
						"vietnamese": "Ngươi nói gì vậy? Tại sao chúng ta lại bị hủy diệt!",
						"thai": "พูดอะไรน่ะ! ทำไมพวกเราถึงจะถูกทำลาย!",
						"hindi": "क्या कह रहे हो? हम क्यों बर्बाद होंगे!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "너희는 그저 운명의 고리를 채우는 도구일 뿐.",
						"english": "You are merely tools, completing the cycle of fate.",
						"japanese": "お前たちはただ、運命の輪を閉じる道具に過ぎぬ。",
						"chinese": "你们不过是填补命运之环的工具罢了。",
						"french": "Vous n'êtes que de simples outils, complétant la boucle du destin.",
						"spanish": "Sois meras herramientas, completando el ciclo del destino.",
						"vietnamese": "Các ngươi chỉ là công cụ để lấp đầy vòng tròn vận mệnh mà thôi.",
						"thai": "พวกเจ้าเป็นเพียงเครื่องมือที่เติมเต็มวงล้อแห่งโชคชะตา",
						"hindi": "तुम तो बस भाग्य के चक्र को पूरा करने वाले उपकरण हो।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"duration_ms": 400,
					"action": "exit",
					"type": "direction",
					"speaker": "frost",
					"direction": "down"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "구원은 어디에도 없었어. 이제는 오직 파괴뿐!",
						"english": "There was no salvation anywhere. Now, only destruction!",
						"japanese": "救いはどこにもなかった。今や、破壊あるのみ！",
						"chinese": "救赎无处可寻。现在，唯有破坏！",
						"french": "Il n'y avait de salut nulle part. Maintenant, seule la destruction !",
						"spanish": "No había salvación en ningún lugar. ¡Ahora, solo destrucción!",
						"vietnamese": "Chẳng có sự cứu rỗi nào cả. Giờ đây, chỉ còn sự hủy diệt!",
						"thai": "ไม่มีความรอดที่ไหนเลย ตอนนี้มีแต่การทำลายล้างเท่านั้น!",
						"hindi": "कहीं कोई मुक्ति नहीं थी। अब, केवल विनाश!"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "착각하지 마라. 너희의 승리는 다음 반복의 시작일 뿐.",
						"english": "Do not be mistaken. Your victory is merely the beginning of the next cycle.",
						"japanese": "錯覚するな。お前たちの勝利は、次の繰り返しの始まりに過ぎぬ。",
						"chinese": "别搞错了。你们的胜利，不过是下一次循环的开始。",
						"french": "Ne vous y trompez pas. Votre victoire n'est que le début de la prochaine répétition.",
						"spanish": "No te equivoques. Vuestra victoria es solo el comienzo de la siguiente repetición.",
						"vietnamese": "Đừng lầm tưởng. Chiến thắng của các ngươi chỉ là khởi đầu của một vòng lặp tiếp theo.",
						"thai": "อย่าเข้าใจผิด ชัยชนะของเจ้าเป็นเพียงจุดเริ่มต้นของการวนซ้ำครั้งต่อไป",
						"hindi": "भ्रम में मत रहो। तुम्हारी जीत तो बस अगले चक्र की शुरुआत है।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "그래도 우리는 이겨냈어!",
						"english": "Still, we overcame it!",
						"japanese": "それでも、私たちは打ち勝った！",
						"chinese": "即使如此，我们也战胜了！",
						"french": "Malgré tout, nous avons vaincu !",
						"spanish": "¡Aun así, lo superamos!",
						"vietnamese": "Dù vậy, chúng ta đã chiến thắng!",
						"thai": "ถึงอย่างนั้น เราก็เอาชนะมาได้!",
						"hindi": "फिर भी, हमने जीत हासिल की!"
					},
					"emotion": "happy"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "오로라의 속삭임은 더욱 강해졌다. 그 빛은 또 다른 파멸을 약속하는 듯했다.",
						"english": "Aurora's whispers grew stronger. Its light seemed to promise yet another destruction.",
						"japanese": "オーロラの囁きはさらに強くなった。その光は、また別の破滅を約束しているようだった。",
						"chinese": "极光的低语变得更加强烈。那光芒仿佛预示着又一场毁灭。",
						"french": "Les murmures de l'Aurore se firent plus intenses. Sa lumière semblait promettre une autre destruction.",
						"spanish": "Los susurros de la Aurora se hicieron más fuertes. Su luz parecía prometer otra destrucción.",
						"vietnamese": "Lời thì thầm của Aurora càng trở nên mạnh mẽ. Ánh sáng đó dường như hứa hẹn một sự hủy diệt khác.",
						"thai": "เสียงกระซิบของออโรราแข็งแกร่งขึ้น แสงนั้นดูเหมือนจะสัญญาถึงการทำลายล้างอีกครั้ง",
						"hindi": "ऑरोरा की फुसफुसाहट और तेज़ हो गई। उसकी रोशनी ने मानो एक और विनाश का वादा किया।"
					}
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "차가운 얼음이 모든 것을 집어삼켰다.",
						"english": "Cold ice devoured everything.",
						"japanese": "冷たい氷がすべてを飲み込んだ。",
						"chinese": "冰冷的寒气吞噬了一切。",
						"french": "La glace froide a tout dévoré.",
						"spanish": "El frío hielo devoró todo.",
						"vietnamese": "Băng giá lạnh lẽo nuốt chửng mọi thứ.",
						"thai": "น้ำแข็งเย็นยะเยือกกลืนกินทุกสิ่ง",
						"hindi": "ठंडी बर्फ़ ने सब कुछ निगल लिया।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "어리석은 시도. 너희는 언제나 이 자리로 돌아올 것이다.",
						"english": "Foolish attempt. You will always return to this very spot.",
						"japanese": "愚かな試み。お前たちはいつだってこの場所に戻ってくるだろう。",
						"chinese": "愚蠢的尝试。你们总会回到这里。",
						"french": "Tentative insensée. Vous reviendrez toujours à cet endroit.",
						"spanish": "Intento necio. Siempre regresaréis a este mismo lugar.",
						"vietnamese": "Nỗ lực ngu ngốc. Các ngươi sẽ luôn trở về nơi này.",
						"thai": "การพยายามที่โง่เขลา เจ้าจะกลับมาที่นี่เสมอ",
						"hindi": "मूर्खतापूर्ण प्रयास। तुम हमेशा इसी स्थान पर लौटोगे।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…아직 끝나지 않았어. 절대로 포기하지 않아.",
						"english": "...It's not over yet. I will never give up!",
						"japanese": "「…まだ終わってない。決して諦めない。」",
						"chinese": "…还没结束。我绝不会放弃。",
						"french": "...Ce n'est pas encore fini. Je n'abandonnerai jamais !",
						"spanish": "...Aún no ha terminado. ¡Nunca me rendiré!",
						"vietnamese": "...Chưa kết thúc. Tôi sẽ không bao giờ từ bỏ!",
						"thai": "...ยังไม่จบหรอก! ฉันไม่มีวันยอมแพ้!",
						"hindi": "…यह अभी खत्म नहीं हुआ है। मैं कभी हार नहीं मानूंगा!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				}
			]
		}
	]
} as const;
