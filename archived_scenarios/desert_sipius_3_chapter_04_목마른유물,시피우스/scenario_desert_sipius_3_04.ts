export const scenario_desert_sipius_3_04 = {
	"scenario_id": "desert_sipius_3_04",
	"order": 4,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"amir": {
			"id": "mon_0096d602-52ab-4a9c-9cc8-4ff18ed3b655",
			"name": {
				"korean": "아미르",
				"english": "Amir",
				"japanese": "アミール",
				"chinese": "阿米尔",
				"french": "Amir",
				"spanish": "Amir",
				"vietnamese": "Amir",
				"thai": "อาเมียร์",
				"hindi": "अमीर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8cd60fb0-3699-44c4-6425-a3e97eec1800/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/b644dc95-9c27-442e-6dc6-73e5550a0200/public"
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
						"korean": "메마른 사막 한가운데, 유일한 희망은 낡은 물통이었다.",
						"english": "In the middle of the parched desert, the only hope was an old canteen.",
						"japanese": "乾いた砂漠の真ん中、唯一の希望は古びた水筒だった。",
						"chinese": "在干涸的沙漠中央，唯一的希望是一个旧水壶。",
						"french": "Au milieu du désert aride, le seul espoir était une vieille gourde.",
						"spanish": "En medio del desierto árido, la única esperanza era una cantimplora vieja.",
						"vietnamese": "Giữa sa mạc khô cằn, hy vọng duy nhất là một cái bình nước cũ.",
						"thai": "กลางทะเลทรายที่แห้งแล้ง ความหวังเดียวคือน้ำกระติกเก่า",
						"hindi": "सूखे रेगिस्तान के बीच में, एकमात्र आशा एक पुरानी पानी की बोतल थी।"
					}
				},
				{
					"content": {
						"korean": "…아직도 목마르네.",
						"english": "...Still thirsty.",
						"japanese": "…まだ喉が渇く。",
						"chinese": "……还是口渴。",
						"french": "...Toujours soif.",
						"spanish": "...Todavía sediento.",
						"vietnamese": "...Vẫn khát.",
						"thai": "...ยังกระหายอยู่เลย",
						"hindi": "...अभी भी प्यासा हूँ।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "amir"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "amir",
					"content": {
						"korean": "잠깐. 뭔가 이상해.",
						"english": "Wait. Something's off.",
						"japanese": "待て。何かおかしい。",
						"chinese": "等等。有些不对劲。",
						"french": "Attends. Quelque chose ne va pas.",
						"spanish": "Espera. Algo no está bien.",
						"vietnamese": "Khoan đã. Có gì đó không đúng.",
						"thai": "เดี๋ยวก่อน มีอะไรแปลกๆ",
						"hindi": "रुको। कुछ तो गड़बड़ है।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "뭐가요, 아미르님?",
						"english": "What is it, Amir?",
						"japanese": "何ですか、アミール様？",
						"chinese": "怎么了，阿米尔大人？",
						"french": "Quoi donc, Amir ?",
						"spanish": "¿Qué ocurre, Amir?",
						"vietnamese": "Có chuyện gì vậy, Amir?",
						"thai": "เกิดอะไรขึ้นครับ คุณอาเมียร์?",
						"hindi": "क्या हुआ, अमीर?"
					}
				},
				{
					"content": {
						"korean": "저 물통… 주변 수분을 빨아들이는 것 같아.",
						"english": "That canteen... it seems to be absorbing moisture from its surroundings.",
						"japanese": "あの水筒… 周囲の水分を吸い取っているようだ。",
						"chinese": "那个水壶……它好像在吸收周围的水分。",
						"french": "Cette gourde... elle semble absorber l'humidité environnante.",
						"spanish": "Esa cantimplora... parece estar absorbiendo la humedad de los alrededores.",
						"vietnamese": "Cái bình nước đó... nó dường như đang hút ẩm từ môi trường xung quanh.",
						"thai": "กระติกน้ำนั่น... ดูเหมือนจะดูดซับความชื้นจากรอบๆ",
						"hindi": "वह पानी की बोतल... आस-पास की नमी सोख रही है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "amir"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "amir",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"content": {
						"korean": "갈증이 더 심해지고 있어.",
						"english": "My thirst is getting worse.",
						"japanese": "喉の渇きがひどくなってきた。",
						"chinese": "口渴得更厉害了。",
						"french": "Ma soif s'aggrave.",
						"spanish": "Mi sed está empeorando.",
						"vietnamese": "Cơn khát của tôi đang tồi tệ hơn.",
						"thai": "ฉันกระหายน้ำหนักขึ้น",
						"hindi": "मेरी प्यास और बढ़ रही है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "amir"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_1",
					"content": {
						"korean": "제 물통도 비었어요! 분명 채웠는데…",
						"english": "My canteen is empty too! I'm sure I filled it...",
						"japanese": "私と水筒も空だ！入れたはずなのに…",
						"chinese": "我的水壶也空了！明明装满了的…",
						"french": "Ma gourde est vide aussi ! Je suis sûr de l'avoir remplie...",
						"spanish": "¡Mi cantimplora también está vacía! ¡Estoy seguro de que la llené...",
						"vietnamese": "Bình nước của tôi cũng hết rồi! Rõ ràng là tôi đã đổ đầy mà…",
						"thai": "กระติกน้ำของฉันก็ว่างเปล่าเหมือนกัน! ฉันแน่ใจว่าฉันเติมมันแล้ว...",
						"hindi": "मेरी पानी की बोतल भी खाली है! मैंने इसे भरा था..."
					}
				},
				{
					"content": {
						"korean": "이 주변 땅도 너무 말랐어.",
						"english": "The ground around here is too dry.",
						"japanese": "この辺りの地面もひどく乾いている。",
						"chinese": "这周围的土地也太干了。",
						"french": "Le sol autour d'ici est trop sec.",
						"spanish": "La tierra de por aquí está demasiado seca.",
						"vietnamese": "Mặt đất quanh đây cũng quá khô cằn.",
						"thai": "พื้นดินแถวนี้ก็แห้งแล้งเกินไป",
						"hindi": "यहाँ की ज़मीन भी बहुत सूखी है।"
					},
					"speaker": "character_2",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "유물이… 활성화되고 있는 건가?",
						"english": "Is the artifact... activating?",
						"japanese": "遺物が…活性化しているのか？",
						"chinese": "遗物…正在被激活吗？",
						"french": "L'artefact... s'activerait-il ?",
						"spanish": "¿El artefacto... se está activando?",
						"vietnamese": "Liệu cổ vật… đang được kích hoạt sao?",
						"thai": "วัตถุโบราณ... กำลังจะเปิดใช้งานหรือ?",
						"hindi": "क्या यह अवशेष... सक्रिय हो रहा है?"
					},
					"speaker": "amir",
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "amir",
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"duration_ms": 500
				},
				{
					"speaker": "amir",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "안 돼. 모두 뒤로 물러서!",
						"english": "No. Everyone, step back!",
						"japanese": "だめだ。みんな、下がれ！",
						"chinese": "不。大家，往后退！",
						"french": "Non. Tout le monde, reculez !",
						"spanish": "No. ¡Todos, retroceded!",
						"vietnamese": "Không. Mọi người, lùi lại!",
						"thai": "ไม่ ทุกคน ถอยไป!",
						"hindi": "नहीं। सब पीछे हट जाओ!"
					}
				},
				{
					"content": {
						"korean": "왜 그러세요?",
						"english": "What's wrong?",
						"japanese": "どうしたんですか？",
						"chinese": "怎么了？",
						"french": "Qu'est-ce qui ne va pas ?",
						"spanish": "¿Qué pasa?",
						"vietnamese": "Có chuyện gì vậy?",
						"thai": "มีอะไรผิดปกติหรือ?",
						"hindi": "क्या हुआ?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "이 물통은 물을 주는 게 아냐. 모든 걸 빼앗아!",
						"english": "This canteen doesn't give water. It takes everything!",
						"japanese": "この水筒は水を与えるんじゃない。全てを奪うんだ！",
						"chinese": "这个水壶不是用来盛水的。它会夺走一切！",
						"french": "Cette gourde ne donne pas d'eau. Elle prend tout !",
						"spanish": "Esta cantimplora no da agua. ¡Lo quita todo!",
						"vietnamese": "Bình nước này không cấp nước. Nó lấy đi mọi thứ!",
						"thai": "กระติกน้ำนี้ไม่ได้ให้น้ำ มันเอาทุกอย่างไป!",
						"hindi": "यह पानी की बोतल पानी नहीं देती। यह सब कुछ ले लेती है!"
					},
					"speaker": "amir",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "물통 주변의 모래가 빠르게 메말라가기 시작했다.",
						"english": "The sand around the canteen quickly began to dry up.",
						"japanese": "水筒周辺の砂が急速に乾き始めた。",
						"chinese": "水壶周围的沙子迅速开始干涸。",
						"french": "Le sable autour de la gourde a rapidement commencé à s'assécher.",
						"spanish": "La arena alrededor de la cantimplora comenzó a secarse rápidamente.",
						"vietnamese": "Cát xung quanh bình nước nhanh chóng bắt đầu khô cạn.",
						"thai": "ทรายรอบๆ กระติกน้ำเริ่มแห้งอย่างรวดเร็ว",
						"hindi": "पानी की बोतल के चारों ओर की रेत तेज़ी से सूखने लगी।"
					}
				},
				{
					"content": {
						"korean": "설마… 저게 우리 갈증의 원인이었어?",
						"english": "No way... was that the cause of our thirst?",
						"japanese": "まさか…あれが俺たちの喉の渇きの原因だったのか？",
						"chinese": "难道说…那就是我们口渴的原因？",
						"french": "Impossible... était-ce la cause de notre soif ?",
						"spanish": "No puede ser... ¿fue eso la causa de nuestra sed?",
						"vietnamese": "Không lẽ… đó là nguyên nhân gây ra cơn khát của chúng ta sao?",
						"thai": "ไม่จริง...นั่นคือสาเหตุของความกระหายของเราเหรอ?",
						"hindi": "क्या... वही हमारी प्यास का कारण था?"
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
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
					"action": "enter",
					"speaker": "amir",
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "amir",
					"content": {
						"korean": "도망쳐! 더 이상 버틸 수 없어!",
						"english": "Run! I can't hold on any longer!",
						"japanese": "逃げろ！これ以上は無理だ！",
						"chinese": "快跑！我撑不住了！",
						"french": "Fuyez ! Je ne peux plus tenir !",
						"spanish": "¡Corred! ¡No puedo aguantar más!",
						"vietnamese": "Chạy đi! Tôi không thể chịu đựng thêm được nữa!",
						"thai": "หนีไป! ฉันทนไม่ไหวแล้ว!",
						"hindi": "भागो! मैं अब और नहीं सह सकता!"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "길이… 막혔어!",
						"english": "The way… is blocked!",
						"japanese": "道が…塞がれた！",
						"chinese": "路…被堵住了！",
						"french": "Le chemin… est bloqué !",
						"spanish": "¡El camino… está bloqueado!",
						"vietnamese": "Đường… bị chặn rồi!",
						"thai": "ทาง… ถูกขวางแล้ว!",
						"hindi": "रास्ता… बंद है!"
					}
				},
				{
					"content": {
						"korean": "사막의 모래가 거대한 소용돌이가 되어 퇴로를 막아섰다.",
						"english": "The desert sands became a giant vortex, blocking our retreat.",
						"japanese": "砂漠の砂が巨大な渦となり、退路を塞いだ。",
						"chinese": "沙漠的沙子化作巨大漩涡，阻断了退路。",
						"french": "Les sables du désert se sont transformés en un gigantesque vortex, bloquant notre retraite.",
						"spanish": "Las arenas del desierto se convirtieron en un gigantesco torbellino, bloqueando nuestra retirada.",
						"vietnamese": "Cát sa mạc biến thành một xoáy nước khổng lồ, chặn đường rút lui.",
						"thai": "ทรายทะเลทรายกลายเป็นพายุทรายขนาดยักษ์ ปิดกั้นทางถอย",
						"hindi": "रेगिस्तान की रेत एक विशाल भंवर बन गई, जिसने वापसी का रास्ता रोक दिया।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "크크크… 어디로 도망치려는가.",
						"english": "Heheheh… Where do you think you're escaping to?",
						"japanese": "ククク…どこへ逃げようというのか。",
						"chinese": "呵呵呵…想逃到哪里去？",
						"french": "Hahaha… Où comptes-tu t'échapper ?",
						"spanish": "Jajajaja… ¿Adónde intentas escapar?",
						"vietnamese": "Khà khà khà… Định trốn đi đâu?",
						"thai": "คิกๆ… จะหนีไปไหนกัน?",
						"hindi": "हाहाहा… कहाँ भागने की कोशिश कर रहे हो?"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
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
						"korean": "이… 이런… 시시한…",
						"english": "Th-this... how boring...",
						"japanese": "こ…こんな…くだらない…",
						"chinese": "这…这种…无聊的…",
						"french": "C-ceci… c'est ennuyeux…",
						"spanish": "E-esto… qué aburrido…",
						"vietnamese": "Cái… cái thứ… vô vị này…",
						"thai": "น-นี่… ช่างน่าเบื่อ…",
						"hindi": "य-यह… कितना नीरस…"
					}
				},
				{
					"type": "speech",
					"emotion": "happy",
					"speaker": "character_any",
					"content": {
						"korean": "쓰러뜨렸다!",
						"english": "We defeated it!",
						"japanese": "倒した！",
						"chinese": "打倒了！",
						"french": "Nous l'avons vaincu !",
						"spanish": "¡Lo derrotamos!",
						"vietnamese": "Đã đánh bại nó!",
						"thai": "ล้มมันลงได้แล้ว!",
						"hindi": "हमने उसे हरा दिया!"
					}
				},
				{
					"type": "direction",
					"speaker": "amir",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "아직… 완전히 끝난 게 아닐지도 몰라.",
						"english": "It might not be… completely over yet.",
						"japanese": "まだ…完全に終わったわけではないのかもしれない。",
						"chinese": "也许…还没有完全结束。",
						"french": "Ce n'est peut-être pas… complètement terminé.",
						"spanish": "Quizás… no haya terminado del todo.",
						"vietnamese": "Có lẽ… vẫn chưa kết thúc hoàn toàn.",
						"thai": "อาจจะยัง… ไม่จบลงสมบูรณ์ก็ได้",
						"hindi": "शायद… अभी पूरी तरह खत्म नहीं हुआ है।"
					},
					"speaker": "amir",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "물통은 다시 잠잠해졌다. 하지만 사막의 기이한 갈증은 계속될 것임을 암시하듯, 저 멀리 신기루가 아른거렸다.",
						"english": "The water bottle grew quiet again. Yet, a mirage shimmered in the distance, hinting that the desert's strange thirst would persist.",
						"japanese": "水筒は再び静かになった。しかし、砂漠の奇妙な渇きが続くことを示唆するかのように、遠くに蜃気楼が揺らめいていた。",
						"chinese": "水壶再次平静下来。然而，远处海市蜃楼闪烁，暗示着沙漠奇特的干渴将持续下去。",
						"french": "La gourde redevint silencieuse. Pourtant, un mirage scintillait au loin, suggérant que l'étrange soif du désert persisterait.",
						"spanish": "La cantimplora volvió a estar en silencio. Sin embargo, un espejismo brillaba a lo lejos, insinuando que la extraña sed del desierto persistiría.",
						"vietnamese": "Bình nước lại yên ắng. Tuy nhiên, một ảo ảnh lấp lánh ở đằng xa, ám chỉ rằng cơn khát kỳ lạ của sa mạc sẽ còn tiếp diễn.",
						"thai": "ขวดน้ำกลับมาเงียบสงบอีกครั้ง ทว่าภาพลวงตาปรากฏขึ้นในระยะไกล บ่งบอกว่าความกระหายอันแปลกประหลาดของทะเลทรายจะยังคงอยู่",
						"hindi": "पानी की बोतल फिर शांत हो गई। फिर भी, दूर से एक मृगतृष्णा चमक रही थी, जो इस बात का संकेत दे रही थी कि रेगिस्तान की अजीब प्यास बनी रहेगी।"
					}
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "더 깊은 곳, 더 큰 위협이 기다리고 있었다.",
						"english": "Deeper still, a greater threat awaited.",
						"japanese": "さらに深く、より大きな脅威が待ち受けていた。",
						"chinese": "更深处，更大的威胁正等待着。",
						"french": "Plus profond encore, une plus grande menace attendait.",
						"spanish": "Más profundo aún, una amenaza mayor aguardaba.",
						"vietnamese": "Sâu hơn nữa, một mối đe dọa lớn hơn đang chờ đợi.",
						"thai": "ลึกลงไปอีก อันตรายที่ยิ่งใหญ่กว่ากำลังรออยู่",
						"hindi": "और भी गहराई में, एक बड़ा खतरा इंतजार कर रहा था।"
					}
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "하찮은 것들. 내 갈증을 채울 뿐이다.",
						"english": "Trifling things. Merely sating my thirst.",
						"japanese": "くだらないものだ。私の渇きを潤すだけだ。",
						"chinese": "微不足道的东西。仅仅满足了我的口渴。",
						"french": "Des bagatelles. Elles ne font qu'étancher ma soif.",
						"spanish": "Cosas insignificantes. Solo sacian mi sed.",
						"vietnamese": "Những thứ tầm thường. Chỉ để thỏa mãn cơn khát của ta.",
						"thai": "สิ่งไร้สาระ แค่ดับกระหายของข้าเท่านั้น",
						"hindi": "तुच्छ चीजें। बस मेरी प्यास बुझा रही हैं।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "젠장… 다시 시도한다!",
						"english": "Damn it... I'll try again!",
						"japanese": "くそ…もう一度試す！",
						"chinese": "该死……再试一次！",
						"french": "Bon sang... Je réessaierai !",
						"spanish": "¡Maldita sea... lo intentaré de nuevo!",
						"vietnamese": "Chết tiệt... Thử lại!",
						"thai": "ให้ตายเถอะ... ข้าจะลองอีกครั้ง!",
						"hindi": "धिक्कार है... मैं फिर कोशिश करूँगा!"
					}
				},
				{
					"type": "direction",
					"speaker": "amir",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "amir",
					"content": {
						"korean": "포기할 수 없어. 방법을 찾아야 해!",
						"english": "I can't give up. I have to find a way!",
						"japanese": "諦められない。方法を見つけなければ！",
						"chinese": "我不能放弃。我必须找到办法！",
						"french": "Je ne peux pas abandonner. Je dois trouver un moyen !",
						"spanish": "No puedo rendirme. ¡Tengo que encontrar una manera!",
						"vietnamese": "Tôi không thể bỏ cuộc. Tôi phải tìm cách!",
						"thai": "ข้าจะยอมแพ้ไม่ได้ ข้าต้องหาวิธี!",
						"hindi": "मैं हार नहीं मान सकता। मुझे एक रास्ता खोजना होगा!"
					}
				}
			],
			"id": 15,
			"dialogue": [
				{
					"content": {
						"korean": "갈증은 가장 강력한 무기. 너희도 곧 알게 될 거다.",
						"english": "Thirst is the strongest weapon. You'll soon find out.",
						"japanese": "渇きは最も強力な武器。お前たちもすぐに知るだろう。",
						"chinese": "干渴是最强大的武器。你们很快就会明白。",
						"french": "La soif est l'arme la plus puissante. Vous le découvrirez bientôt.",
						"spanish": "La sed es el arma más poderosa. Pronto lo descubriréis.",
						"vietnamese": "Cơn khát là vũ khí mạnh nhất. Các ngươi sẽ sớm biết thôi.",
						"thai": "ความกระหายคืออาวุธที่ทรงพลังที่สุด พวกเจ้าจะได้รู้ในไม่ช้า",
						"hindi": "प्यास सबसे शक्तिशाली हथियार है। तुम भी जल्द ही जान जाओगे।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이 괴물 같은…!",
						"english": "This monstrous...!",
						"japanese": "この怪物め…！",
						"chinese": "这个怪物…！",
						"french": "Ce monstre...!",
						"spanish": "¡Este monstruo...!",
						"vietnamese": "Đồ quái vật này...!",
						"thai": "เจ้าสัตว์ประหลาดนี่...!",
						"hindi": "यह राक्षस जैसा…!"
					}
				},
				{
					"type": "direction",
					"speaker": "amir",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "모든 수분을 흡수하는 힘! 저게 본모습인가!",
						"english": "The power to absorb all moisture! Is that its true form?!",
						"japanese": "あらゆる水分を吸収する力！あれが本来の姿なのか！",
						"chinese": "吸收所有水分的力量！那才是它的真面目吗？！",
						"french": "Le pouvoir d'absorber toute l'humidité ! Est-ce sa vraie forme ?",
						"spanish": "¡El poder de absorber toda la humedad! ¡¿Esa es su verdadera forma?!",
						"vietnamese": "Sức mạnh hấp thụ mọi độ ẩm! Đó là hình dạng thật của nó sao?!",
						"thai": "พลังที่ดูดซับความชื้นทั้งหมด! นั่นคือร่างจริงของมันงั้นหรือ?!",
						"hindi": "सारी नमी सोखने की शक्ति! क्या यही इसका असली रूप है?!"
					},
					"speaker": "amir",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이제 내 일부가 되어 영원한 갈증을 느껴라!",
						"english": "Now become a part of me and feel eternal thirst!",
						"japanese": "さあ、私の細胞となり、永遠の渇きを感じるがいい！",
						"chinese": "如今成为我的一部分，感受永恒的干渴吧！",
						"french": "Deviens maintenant une partie de moi et ressens une soif éternelle !",
						"spanish": "¡Ahora, sé parte de mí y siente la sed eterna!",
						"vietnamese": "Giờ hãy trở thành một phần của ta và cảm nhận cơn khát vĩnh cửu đi!",
						"thai": "บัดนี้ จงกลายเป็นส่วนหนึ่งของข้าและรู้สึกถึงความกระหายชั่วนิรันดร์เถิด!",
						"hindi": "अब मेरे अंश बनो और अनंत प्यास महसूस करो!"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"메마른 사막, 유일한 희망은 낡은 물통이었다.",
			"하지만 그 안에서 솟아나는 건 갈증뿐.",
			"유물은 모든 수분을 탐하고,",
			"탐험대는 끝없이 메말라갔다.",
			"숨겨진 힘이 깨어나기 시작했다."
		],
		"english": [
			"In the parched desert, the only hope was a worn canteen.",
			"But all that emerged from it was thirst.",
			"The artifact coveted all moisture,",
			"and the expedition endlessly withered.",
			"A hidden power began to awaken."
		],
		"japanese": [
			"乾いた砂漠、唯一の希望は古びた水筒だった。",
			"しかし、そこから湧き出るのは渇きだけだった。",
			"遺物はあらゆる水分を貪り、",
			"探検隊は果てしなく干からびていった。",
			"隠された力が目覚め始めた。"
		],
		"chinese": [
			"在干涸的沙漠中，唯一的希望是一个旧水壶。",
			"然而，从中涌出的只有口渴。",
			"那件文物贪婪地吞噬着所有的水分，",
			"探险队无休止地枯萎着。",
			"一股隐藏的力量开始苏醒。"
		],
		"french": [
			"Dans le désert aride, le seul espoir était une vieille gourde.",
			"Mais il n'en jaillissait que la soif.",
			"L'artefact convoitait toute humidité,",
			"et l'expédition s'asséchait sans fin.",
			"Un pouvoir caché commençait à s'éveiller."
		],
		"spanish": [
			"En el desierto árido, la única esperanza era una cantimplora vieja.",
			"Pero de ella solo brotaba la sed.",
			"El artefacto codiciaba toda la humedad,",
			"y la expedición se marchitaba sin cesar.",
			"Un poder oculto comenzaba a despertar."
		],
		"vietnamese": [
			"Trong sa mạc khô cằn, hy vọng duy nhất là một cái bình nước cũ.",
			"Nhưng tất cả những gì tuôn ra từ đó chỉ là cơn khát.",
			"Cổ vật thèm khát mọi độ ẩm,",
			"và đoàn thám hiểm khô héo không ngừng.",
			"Một sức mạnh ẩn giấu bắt đầu thức tỉnh."
		],
		"thai": [
			"ในทะเลทรายที่แห้งแล้ง ความหวังเดียวคือน้ำกระติกเก่า",
			"แต่สิ่งที่ออกมาจากมันคือความกระหาย",
			"วัตถุโบราณนั้นโลภในความชื้นทั้งหมด",
			"และคณะสำรวจก็เหี่ยวเฉาอย่างไม่สิ้นสุด",
			"พลังที่ซ่อนอยู่เริ่มตื่นขึ้น"
		],
		"hindi": [
			"सूखे रेगिस्तान में, एकमात्र आशा एक पुरानी पानी की बोतल थी।",
			"लेकिन उसमें से केवल प्यास ही निकल रही थी।",
			"कलाकृति सारी नमी को लालच से सोख रही थी,",
			"और अभियान दल लगातार सूखता जा रहा था।",
			"एक छिपी हुई शक्ति जागृत होने लगी।"
		]
	}
} as const;
