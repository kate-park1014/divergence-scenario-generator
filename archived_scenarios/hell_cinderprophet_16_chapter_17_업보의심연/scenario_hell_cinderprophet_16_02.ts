export const scenario_hell_cinderprophet_16_02 = {
	"scenario_id": "hell_cinderprophet_16_02",
	"order": 2,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"ash": {
			"id": "mon_b225f5fa-59a1-47bb-b4c5-e73bf9e7192a",
			"name": {
				"korean": "애쉬",
				"english": "Ash",
				"japanese": "アッシュ",
				"chinese": "艾什",
				"french": "Ash",
				"spanish": "Ash",
				"vietnamese": "Ash",
				"thai": "แอช",
				"hindi": "ऐश"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/d84413a8-9d6f-4a40-5d36-75e431fb9900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/78281fca-e4b8-45cc-68ef-7df3fef74200/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"끝없이 이어지는 몽환의 숲.",
			"발걸음마다 현실이 뒤틀렸다.",
			"환영은 진실을 가장하고, 속삭임은 길을 잃게 했다.",
			"과연, 이 혼돈 속에서 길을 찾을 수 있을까?",
			"아니면, 우리 또한 광기에 잠식될 것인가."
		],
		"english": [
			"The endless, dreamlike forest.",
			"With every step, reality warped.",
			"Illusions mimicked truth, whispers led astray.",
			"Can we truly find our way in this chaos?",
			"Or will we too succumb to the madness?"
		],
		"japanese": [
			"果てしなく続く夢幻の森。",
			"一歩ごとに現実が歪んだ。",
			"幻影は真実を装い、囁きは道を見失わせた。",
			"果たして、この混沌の中で道を見つけられるだろうか？",
			"それとも、我々もまた狂気に蝕まれるのだろうか。"
		],
		"chinese": [
			"无尽的梦幻森林。",
			"每一步，现实都在扭曲。",
			"幻象伪装成真实，低语令人迷失方向。",
			"我们真的能在这片混沌中找到出路吗？",
			"或者，我们也会被疯狂吞噬吗？"
		],
		"french": [
			"La forêt onirique et infinie.",
			"À chaque pas, la réalité se tordait.",
			"Les illusions imitaient la vérité, les murmures égaraient.",
			"Pourrons-nous vraiment trouver notre chemin dans ce chaos ?",
			"Ou serons-nous aussi consumés par la folie ?"
		],
		"spanish": [
			"El bosque onírico e interminable.",
			"Con cada paso, la realidad se distorsionaba.",
			"Las ilusiones simulaban la verdad, los susurros extraviaban.",
			"¿Podremos realmente encontrar nuestro camino en este caos?",
			"¿O también sucumbiremos a la locura?"
		],
		"vietnamese": [
			"Khu rừng mộng ảo vô tận.",
			"Mỗi bước chân, thực tại đều méo mó.",
			"Ảo ảnh giả dối sự thật, lời thì thầm dẫn lối lạc.",
			"Liệu chúng ta có thể tìm thấy lối đi trong hỗn loạn này không?",
			"Hay chúng ta cũng sẽ bị sự điên loạn nuốt chửng?"
		],
		"thai": [
			"ป่าแห่งความฝันอันไม่มีที่สิ้นสุด",
			"ทุกย่างก้าว ความจริงบิดเบี้ยว",
			"ภาพลวงตาแสร้งเป็นความจริง เสียงกระซิบนำพาให้หลงทาง",
			"แท้จริงแล้ว เราจะหาทางออกในความสับสนวุ่นวายนี้ได้หรือไม่?",
			"หรือเราจะถูกกลืนกินด้วยความบ้าคลั่งไปด้วย?"
		],
		"hindi": [
			"अंतहीन, स्वप्निल वन।",
			"हर कदम पर, यथार्थ विकृत हो गया।",
			"भ्रम ने सत्य का रूप धरा, फुसफुसाहटों ने भटका दिया।",
			"क्या हम सचमुच इस अराजकता में अपना रास्ता खोज पाएंगे?",
			"या हम भी उन्माद के शिकार हो जाएँगे?"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "뒤틀린 숲의 입구. 발걸음마다 환영이 어른거린다.",
						"english": "Entrance to the twisted forest. Illusions shimmer with every step.",
						"japanese": "ねじれた森の入口。一歩ごとに幻影が揺らめく。",
						"chinese": "扭曲森林的入口。每一步都闪烁着幻象。",
						"french": "Entrée de la forêt tordue. Des illusions scintillent à chaque pas.",
						"spanish": "Entrada al bosque retorcido. Las ilusiones brillan a cada paso.",
						"vietnamese": "Lối vào khu rừng méo mó. Ảo ảnh lung linh theo từng bước chân.",
						"thai": "ทางเข้าป่าที่บิดเบี้ยว ภาพลวงตาพร่างพรายทุกย่างก้าว",
						"hindi": "मुड़े हुए जंगल का प्रवेश द्वार। हर कदम पर भ्रम झिलमिलाते हैं।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "젠장, 또 여기야? 방금 전에도 같은 길 아니었어?",
						"english": "Damn it, here again? Wasn't this the same path just now?",
						"japanese": "ちくしょう、またここか？さっきも同じ道じゃなかったか？",
						"chinese": "该死，又来了？刚才不也是这条路吗？",
						"french": "Bon sang, encore ici ? Ce n'était pas le même chemin tout à l'heure ?",
						"spanish": "Maldita sea, ¿otra vez aquí? ¿No era el mismo camino hace un momento?",
						"vietnamese": "Chết tiệt, lại ở đây à? Vừa nãy không phải cùng một con đường sao?",
						"thai": "บ้าจริง, ที่นี่อีกแล้วเหรอ? เมื่อกี้ก็ทางเดิมนี่นา?",
						"hindi": "धिक्कार है, फिर यहीं? अभी-अभी यही रास्ता नहीं था क्या?"
					}
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "ash",
					"spot": [
						4,
						2
					],
					"type": "direction"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "ash",
					"content": {
						"korean": "길을 잃으셨나요? 제가 안내해 드릴게요.",
						"english": "Are you lost? I'll guide you.",
						"japanese": "道に迷われましたか？私がご案内します。",
						"chinese": "您迷路了吗？我来为您指路。",
						"french": "Vous êtes perdu ? Je vais vous guider.",
						"spanish": "¿Está perdido? Yo le guiaré.",
						"vietnamese": "Bạn bị lạc sao? Để tôi hướng dẫn bạn.",
						"thai": "คุณหลงทางหรือเปล่า? เดี๋ยวฉันจะนำทางให้",
						"hindi": "क्या आप रास्ता भटक गए हैं? मैं आपका मार्गदर्शन करूँगा।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
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
					},
					"speaker": "character_1"
				},
				{
					"speaker": "ash",
					"content": {
						"korean": "애쉬라고 합니다. 이 숲의 길잡이죠.",
						"english": "I'm Ash. I'm a guide in this forest.",
						"japanese": "アッシュと申します。この森の道案内役です。",
						"chinese": "我叫艾什。我是这片森林的向导。",
						"french": "Je m'appelle Ash. Je suis le guide de cette forêt.",
						"spanish": "Me llamo Ash. Soy el guía de este bosque.",
						"vietnamese": "Tôi là Ash. Là người dẫn đường của khu rừng này.",
						"thai": "ฉันชื่อแอช เป็นผู้นำทางในป่าแห่งนี้",
						"hindi": "मैं ऐश हूँ। इस वन का मार्गदर्शक।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "ash",
					"content": {
						"korean": "앞길은 제가 밝혀드릴 테니, 그저 따라오세요.",
						"english": "I'll light the way forward; just follow me.",
						"japanese": "私が道を照らしますので、ただついてきてください。",
						"chinese": "前方的路我来照亮，您只管跟着我就好。",
						"french": "Je vous éclairerai le chemin, suivez-moi.",
						"spanish": "Yo te alumbraré el camino; solo sígueme.",
						"vietnamese": "Tôi sẽ soi sáng con đường phía trước, chỉ cần đi theo tôi.",
						"thai": "ผมจะนำทางให้เองครับ แค่ตามมาก็พอ",
						"hindi": "मैं आगे का रास्ता रोशन करूँगा, बस मेरे पीछे आओ।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "숲은 더욱 깊어지고, 시야는 끊임없이 왜곡된다.",
						"english": "The forest deepens, vision constantly distorts.",
						"japanese": "森はさらに深く、視界は絶えず歪む。",
						"chinese": "森林愈发幽深，视野不断扭曲。",
						"french": "La forêt s'épaissit, la vision se déforme sans cesse.",
						"spanish": "El bosque se vuelve más denso, la visión se distorsiona sin cesar.",
						"vietnamese": "Rừng càng lúc càng sâu, tầm nhìn không ngừng biến dạng.",
						"thai": "ป่ายิ่งลึกเข้าไปเรื่อยๆ การมองเห็นก็บิดเบี้ยวไม่หยุด",
						"hindi": "जंगल गहराता जा रहा है, और दृष्टि लगातार विकृत हो रही है।"
					}
				},
				{
					"type": "direction",
					"spot": [
						4,
						2
					],
					"speaker": "ash",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "분명히 저 바위는 지나왔는데…",
						"english": "I'm sure we passed that rock...",
						"japanese": "あの岩は確かに通り過ぎたはずだが…",
						"chinese": "我明明已经经过那块石头了…",
						"french": "J'étais sûr qu'on avait dépassé ce rocher...",
						"spanish": "Estoy seguro de que ya pasamos esa roca...",
						"vietnamese": "Rõ ràng là chúng ta đã đi qua tảng đá đó rồi mà...",
						"thai": "แน่ใจว่าเราผ่านหินก้อนนั้นมาแล้วนะ...",
						"hindi": "मुझे यकीन है कि हम उस चट्टान से गुज़र चुके हैं..."
					},
					"speaker": "character_2"
				},
				{
					"speaker": "ash",
					"content": {
						"korean": "걱정 마세요. 길은 언제나 이어져 있죠.",
						"english": "Don't worry. The path always continues.",
						"japanese": "ご心配なく。道はいつだって続いていますよ。",
						"chinese": "别担心。路总会延续的。",
						"french": "Ne vous inquiétez pas. Le chemin se poursuit toujours.",
						"spanish": "No te preocupes. El camino siempre continúa.",
						"vietnamese": "Đừng lo. Con đường luôn tiếp nối mà.",
						"thai": "ไม่ต้องห่วงครับ ทางจะดำเนินต่อไปเสมอ",
						"hindi": "चिंता मत करो। रास्ता हमेशा आगे बढ़ता रहता है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "하지만 뭔가 이상해. 계속 맴도는 기분이야.",
						"english": "But something's off. I feel like we're circling.",
						"japanese": "でも何かおかしい。ずっと堂々巡りしている気がする。",
						"chinese": "但总觉得不对劲。好像一直在原地打转。",
						"french": "Mais quelque chose cloche. J'ai l'impression de tourner en rond.",
						"spanish": "Pero algo no está bien. Siento que estamos dando vueltas.",
						"vietnamese": "Nhưng có gì đó lạ lắm. Cứ như chúng ta đang đi vòng vòng vậy.",
						"thai": "แต่ว่ามันแปลกๆ นะ รู้สึกเหมือนวนอยู่ที่เดิม",
						"hindi": "पर कुछ तो अजीब है। मुझे लगता है कि हम घूम रहे हैं।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "착각일 뿐입니다. 끝은 언제나 새로운 시작을 품고 있으니까요.",
						"english": "It's just an illusion. Every end holds a new beginning.",
						"japanese": "ただの錯覚ですよ。終わりは常に新たな始まりを内包していますから。",
						"chinese": "那只是错觉。因为结局总是孕育着新的开始。",
						"french": "Ce n'est qu'une illusion. La fin contient toujours un nouveau début.",
						"spanish": "Es solo una ilusión. El final siempre encierra un nuevo comienzo.",
						"vietnamese": "Chỉ là ảo giác thôi. Bởi vì mọi kết thúc đều ẩn chứa một khởi đầu mới.",
						"thai": "เป็นแค่ภาพลวงตาครับ เพราะจุดจบมักจะซ่อนจุดเริ่มต้นใหม่ไว้เสมอ",
						"hindi": "यह सिर्फ एक भ्रम है। हर अंत में एक नई शुरुआत होती है।"
					},
					"speaker": "ash",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_3",
					"content": {
						"korean": "그의 눈이… 비어있는 것 같아.",
						"english": "His eyes... they seem empty.",
						"japanese": "彼の目が…空っぽのようだ。",
						"chinese": "他的眼睛…好像是空的。",
						"french": "Ses yeux… semblent vides.",
						"spanish": "Sus ojos... parecen vacíos.",
						"vietnamese": "Đôi mắt của hắn... dường như trống rỗng.",
						"thai": "ดวงตาของเขา... ดูเหมือนว่างเปล่า",
						"hindi": "उसकी आँखें... खाली लग रही हैं।"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "환영이 현실을 잠식하고, 진실은 희미한 그림자처럼 흔들린다.",
						"english": "Illusions engulf reality, truth wavers like a faint shadow.",
						"japanese": "幻影が現実を侵食し、真実は淡い影のように揺らぐ。",
						"chinese": "幻象吞噬现实，真相如模糊的影子般摇曳。",
						"french": "Les illusions dévorent la réalité, la vérité vacille comme une ombre pâle.",
						"spanish": "Las ilusiones devoran la realidad, la verdad se tambalea como una sombra tenue.",
						"vietnamese": "Ảo ảnh nuốt chửng hiện thực, sự thật lay động như một bóng mờ.",
						"thai": "ภาพลวงตากลืนกินความเป็นจริง ความจริงสั่นคลอนราวกับเงาจางๆ",
						"hindi": "भ्रम वास्तविकता को निगल रहे हैं, और सत्य एक धुंधली छाया की तरह डगमगा रहा है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "ash",
					"spot": [
						4,
						2
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "이건 현실이 아니야! 전부 가짜라고!",
						"english": "This isn't real! It's all fake!",
						"japanese": "これは現実じゃない！全部偽物だ！",
						"chinese": "这不是现实！全都是假的！",
						"french": "Ce n'est pas la réalité ! Tout est faux !",
						"spanish": "¡Esto no es real! ¡Todo es falso!",
						"vietnamese": "Đây không phải là hiện thực! Tất cả đều là giả dối!",
						"thai": "นี่ไม่ใช่เรื่องจริง! ทั้งหมดเป็นของปลอม!",
						"hindi": "यह वास्तविकता नहीं है! सब कुछ नकली है!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "ash",
					"content": {
						"korean": "무엇이 진실이고, 무엇이 환영일까요? 이 숲에서는, 모두가 자신의 그림자를 봅니다.",
						"english": "What is truth, and what is illusion? In this forest, everyone sees their own shadow.",
						"japanese": "何が真実で、何が幻影でしょうか？この森では、誰もが自身の影を見ます。",
						"chinese": "何为真实，何为幻象？在这片森林里，每个人都看到了自己的影子。",
						"french": "Qu'est-ce qui est réel et qu'est-ce qui est illusion ? Dans cette forêt, chacun voit sa propre ombre.",
						"spanish": "¿Qué es verdad y qué es ilusión? En este bosque, todos ven su propia sombra.",
						"vietnamese": "Điều gì là sự thật, và điều gì là ảo ảnh? Trong khu rừng này, ai cũng thấy bóng của chính mình.",
						"thai": "อะไรคือความจริง อะไรคือภาพลวงตา? ในป่าแห่งนี้ ทุกคนเห็นเงาของตัวเอง",
						"hindi": "क्या सच है और क्या भ्रम? इस जंगल में, हर कोई अपनी परछाई देखता है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "당신 말은… 우리도 미쳐가고 있다는 거야?",
						"english": "You mean... we're going mad too?",
						"japanese": "まさか…私たちも狂っていくってことですか？",
						"chinese": "你的意思是……我们也要疯了吗？",
						"french": "Tu veux dire... nous devenons fous nous aussi ?",
						"spanish": "¿Quieres decir... que nosotros también nos estamos volviendo locos?",
						"vietnamese": "Ý anh là... chúng ta cũng đang phát điên sao?",
						"thai": "คุณหมายความว่า... เราเองก็กำลังคลุ้มคลั่งงั้นเหรอ?",
						"hindi": "तुम्हारा मतलब है... हम भी पागल हो रहे हैं?"
					},
					"speaker": "character_4",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "ash",
					"content": {
						"korean": "후후… 미치지 않고서는, 이 길을 갈 수 없겠죠.",
						"english": "Heh heh... One cannot walk this path without going mad.",
						"japanese": "フフ…狂わずしては、この道は進めないでしょうね。",
						"chinese": "呵呵……不发疯的话，是走不了这条路的吧。",
						"french": "Hé hé... Sans la folie, ce chemin serait impraticable.",
						"spanish": "Je je... Sin locura, este camino no podría recorrerse.",
						"vietnamese": "Hì hì... Nếu không phát điên, sao có thể đi con đường này?",
						"thai": "ฮึๆ... หากไม่บ้าคลั่ง คงเดินบนเส้นทางนี้ไม่ได้หรอก",
						"hindi": "हुह हुह... बिना पागल हुए, इस राह पर नहीं चला जा सकता।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "당신… 대체 정체가 뭐야? 그 눈은 왜 그렇게 텅 비어있지?",
						"english": "You... What exactly are you? Why are your eyes so empty?",
						"japanese": "お前…一体何者なんだ？その目はどうしてそんなに虚ろなんだ？",
						"chinese": "你…你到底是什么人？为什么你的眼睛如此空洞？",
						"french": "Toi... Qui es-tu, au juste ? Pourquoi tes yeux sont-ils si vides ?",
						"spanish": "Tú... ¿Qué eres exactamente? ¿Por qué tus ojos están tan vacíos?",
						"vietnamese": "Ngươi... Ngươi rốt cuộc là ai? Sao đôi mắt đó lại trống rỗng đến vậy?",
						"thai": "เจ้า... เจ้าเป็นใครกันแน่? ทำไมดวงตาคู่นั้นถึงว่างเปล่าจัง?",
						"hindi": "तुम... आखिर हो कौन? तुम्हारी आँखें इतनी खाली क्यों हैं?"
					}
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "더 깊은 나락으로. 돌아갈 수 없는 길.",
						"english": "Into deeper abyss. A path of no return.",
						"japanese": "より深き奈落へ。戻れない道。",
						"chinese": "坠入更深的深渊。一条无法回头的路。",
						"french": "Vers un abîme plus profond. Un chemin sans retour.",
						"spanish": "Hacia un abismo más profundo. Un camino sin retorno.",
						"vietnamese": "Vào sâu hơn nữa trong vực thẳm. Con đường không thể quay lại.",
						"thai": "สู่ห้วงเหวที่ลึกยิ่งกว่า เส้นทางที่ไม่อาจย้อนกลับ",
						"hindi": "और गहरे गर्त में। वापसी का कोई रास्ता नहीं।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "direction",
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"speaker": "ash",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "멈춰! 더 이상 못 가겠어!",
						"english": "Stop! I can't go any further!",
						"japanese": "止まれ！これ以上は行けない！",
						"chinese": "停下！我不能再走了！",
						"french": "Arrête ! Je n'en peux plus !",
						"spanish": "¡Detente! ¡No puedo más!",
						"vietnamese": "Dừng lại! Tôi không thể đi tiếp nữa!",
						"thai": "หยุดนะ! ฉันไปต่อไม่ไหวแล้ว!",
						"hindi": "रुको! मैं और आगे नहीं जा सकता!"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "멈출 수 없습니다. 운명은 이미 정해져 있으니.",
						"english": "There's no stopping. Fate is already set.",
						"japanese": "止まることはできません。運命は既に定まっていますから。",
						"chinese": "无法停止。命运早已注定。",
						"french": "On ne peut pas s'arrêter. Le destin est déjà scellé.",
						"spanish": "No podemos detenernos. El destino ya está escrito.",
						"vietnamese": "Không thể dừng lại. Vận mệnh đã được định đoạt rồi.",
						"thai": "หยุดไม่ได้หรอก โชคชะตาได้ถูกกำหนดไว้แล้ว",
						"hindi": "रुक नहीं सकते। नियति पहले ही तय हो चुकी है।"
					},
					"speaker": "ash",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_2",
					"content": {
						"korean": "운명…이라고?",
						"english": "Fate...?",
						"japanese": "運命…だと？",
						"chinese": "命运……？",
						"french": "Le destin... ?",
						"spanish": "¿Destino...?",
						"vietnamese": "Vận mệnh... sao?",
						"thai": "โชคชะตา...งั้นเหรอ?",
						"hindi": "नियति...?"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "ash",
					"content": {
						"korean": "네, 당신들의 모든 발걸음은, 이미 쓰여진 대본의 한 조각입니다.",
						"english": "Yes, your every step is a part of a pre-written script.",
						"japanese": "ええ、あなた方のあらゆる歩みは、既に書かれた台本の一片なのです。",
						"chinese": "是的，你们的每一步，都只是早已写好的剧本中的一页。",
						"french": "Oui, chacun de vos pas est une pièce d'un scénario déjà écrit.",
						"spanish": "Sí, cada uno de sus pasos es una pieza de un guion ya escrito.",
						"vietnamese": "Vâng, mọi bước chân của các người, đều là một mảnh kịch bản đã được viết sẵn.",
						"thai": "ใช่ ทุกย่างก้าวของพวกคุณ คือส่วนหนึ่งของบทที่ถูกเขียนไว้แล้ว",
						"hindi": "हाँ, तुम्हारे हर कदम, एक पहले से लिखी हुई पटकथा का एक अंश है।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_3",
					"content": {
						"korean": "우리가… 조종당하고 있다고?",
						"english": "Are we... being controlled?",
						"japanese": "私たちが…操られていると？",
						"chinese": "我们……被操控着？",
						"french": "Nous sommes... manipulés ?",
						"spanish": "¿Nosotros... estamos siendo controlados?",
						"vietnamese": "Chúng ta... đang bị điều khiển sao?",
						"thai": "พวกเรา... กำลังถูกบงการงั้นเหรอ?",
						"hindi": "क्या हम... नियंत्रित हो रहे हैं?"
					}
				},
				{
					"content": {
						"korean": "당신들은 그저… 역할극의 주인공일 뿐.",
						"english": "You are merely... characters in a play.",
						"japanese": "あなた方はただ…役割劇の主人公に過ぎません。",
						"chinese": "你们不过是……一场角色扮演的主角罢了。",
						"french": "Vous n'êtes que... les protagonistes d'un jeu de rôle.",
						"spanish": "Ustedes son meros... protagonistas de un juego de rol.",
						"vietnamese": "Các người chỉ là... những nhân vật chính của một vở kịch thôi.",
						"thai": "พวกคุณก็เป็นแค่... ตัวละครหลักในบทบาทสมมติเท่านั้นเอง",
						"hindi": "तुम बस... एक भूमिका-नाटक के नायक मात्र हो।"
					},
					"speaker": "ash",
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
					"content": {
						"korean": "크아아악… (고통스러운 비명)",
						"english": "Kuaaagh... (A painful scream)",
						"japanese": "くああああ…（苦痛の悲鳴）",
						"chinese": "啊啊啊啊…（痛苦的尖叫）",
						"french": "Raaaah… (Un cri de douleur)",
						"spanish": "¡Arghhh…! (Un grito de dolor)",
						"vietnamese": "Grừ… (Tiếng thét đau đớn)",
						"thai": "คราาาาาก… (เสียงกรีดร้องด้วยความเจ็บปวด)",
						"hindi": "क्रुआआआह… (एक दर्दनाक चीख)"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이겼다… 이긴 건가?",
						"english": "We won... Did we win?",
						"japanese": "勝った…のか？",
						"chinese": "赢了…我们赢了吗？",
						"french": "On a gagné… C'est bien ça ?",
						"spanish": "Hemos ganado… ¿De verdad hemos ganado?",
						"vietnamese": "Thắng rồi… Chúng ta thắng ư?",
						"thai": "ชนะแล้ว… เราชนะจริงๆ เหรอ?",
						"hindi": "जीत गए… क्या हम जीत गए?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "쓰러진 {random_boss}. 그러나 승리의 기쁨보다 더 깊은 피로감이 영혼을 잠식한다.",
						"english": "The defeated {random_boss}. Yet a deeper weariness than the joy of victory engulfs the soul.",
						"japanese": "倒れ伏した{random_boss}。しかし、勝利の喜びよりも深い疲労感が魂を蝕む。",
						"chinese": "倒下的{random_boss}。然而，比胜利的喜悦更深的疲惫感吞噬着灵魂。",
						"french": "Le {random_boss} vaincu. Pourtant, une fatigue plus profonde que la joie de la victoire ronge l'âme.",
						"spanish": "El {random_boss} derrotado. Sin embargo, un cansancio más profundo que la alegría de la victoria consume el alma.",
						"vietnamese": "{random_boss} đã gục ngã. Tuy nhiên, một cảm giác mệt mỏi sâu sắc hơn cả niềm vui chiến thắng đang nuốt chửng linh hồn.",
						"thai": "{random_boss} ผู้พ่ายแพ้. ทว่าความเหนื่อยล้าที่ลึกซึ้งกว่าความสุขแห่งชัยชนะกลับกัดกินจิตวิญญาณ.",
						"hindi": "पस्त {random_boss}। फिर भी, जीत की खुशी से भी गहरी थकावट आत्मा को निगल जाती है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_2",
					"content": {
						"korean": "뭔가… 또 반복될 것 같아.",
						"english": "It feels like... it'll repeat again.",
						"japanese": "何か… また繰り返されそうだ。",
						"chinese": "感觉… 还会再次重演。",
						"french": "On dirait... que ça va se répéter.",
						"spanish": "Parece que... se repetirá de nuevo.",
						"vietnamese": "Cảm giác như... nó sẽ lặp lại lần nữa.",
						"thai": "รู้สึกเหมือน... มันจะวนซ้ำอีกครั้ง",
						"hindi": "कुछ... फिर से दोहराया जाएगा।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "뒤틀린 인도의 그림자는 여전히 그들을 쫓았다. 끝나지 않는 순환의 굴레 속에서.",
						"english": "The twisted shadow of destiny still pursued them. Trapped in an unending cycle.",
						"japanese": "歪んだ運命の影は、終わらない循環の中で彼らを追い続けた。",
						"chinese": "扭曲的命运之影仍旧追逐着他们。在永无止境的循环中。",
						"french": "L'ombre tordue du destin les poursuivait toujours. Pris dans un cycle sans fin.",
						"spanish": "La retorcida sombra del destino los seguía persiguiendo. Atrapados en un ciclo sin fin.",
						"vietnamese": "Bóng tối méo mó của định mệnh vẫn đeo bám họ. Trong vòng luân hồi bất tận.",
						"thai": "เงาแห่งโชคชะตาที่บิดเบี้ยวก็ยังคงตามหลอกหลอนพวกเขา อยู่ในวงจรที่ไม่สิ้นสุด",
						"hindi": "भाग्य की मुड़ी हुई छाया अभी भी उनका पीछा कर रही थी। एक अंतहीन चक्र के जाल में।"
					}
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "마침내, 환영의 심장부. 거대한 그림자가 그들을 기다렸다.",
						"english": "Finally, the heart of the illusion. A colossal shadow awaited them.",
						"japanese": "ついに、幻影の核心へ。巨大な影が彼らを待ち受けていた。",
						"chinese": "终于，幻影的中心。一道巨大的阴影正等待着他们。",
						"french": "Enfin, le cœur de l'illusion. Une ombre colossale les attendait.",
						"spanish": "Finalmente, el corazón de la ilusión. Una sombra colosal los esperaba.",
						"vietnamese": "Cuối cùng, trái tim của ảo ảnh. Một bóng đen khổng lồ đang đợi họ.",
						"thai": "ในที่สุด, ใจกลางของภาพลวงตา. เงามหึมากำลังรอคอยพวกเขาอยู่.",
						"hindi": "अंततः, भ्रम का हृदय। एक विशालकाय छाया उनका इंतज़ार कर रही थी।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "direction",
					"spot": [
						4,
						2
					],
					"speaker": "ash",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "보세요. 당신들의 다음 운명입니다.",
						"english": "Behold. Your next fate awaits.",
						"japanese": "ご覧ください。あなたたちの次の運命です。",
						"chinese": "看吧。这就是你们的下一个命运。",
						"french": "Voyez. C'est votre prochain destin.",
						"spanish": "Mirad. Este es vuestro próximo destino.",
						"vietnamese": "Hãy xem. Đây là vận mệnh tiếp theo của các ngươi.",
						"thai": "ดูสิ. นี่คือโชคชะตาต่อไปของพวกเจ้า.",
						"hindi": "देखो। यह तुम्हारा अगला भाग्य है।"
					},
					"speaker": "ash",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "저게… 뭐야?",
						"english": "What... is that?",
						"japanese": "あれは…何だ？",
						"chinese": "那…是什么？",
						"french": "Qu'est-ce que… c'est ?",
						"spanish": "¿Qué… es eso?",
						"vietnamese": "Kia… là gì vậy?",
						"thai": "นั่น…อะไรน่ะ?",
						"hindi": "वह… क्या है?"
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "…(정체 모를 낮은 포효)",
						"english": "...(Unidentifiable low roar)",
						"japanese": "…（正体不明の低い咆哮）",
						"chinese": "……（不明的低沉咆哮）",
						"french": "…(Un rugissement grave et indéfinissable)",
						"spanish": "…(Un rugido grave e inidentificable)",
						"vietnamese": "…(Tiếng gầm gừ thấp không rõ ràng)",
						"thai": "…(เสียงคำรามต่ำที่ระบุไม่ได้)",
						"hindi": "…(एक अज्ञात धीमी गर्जना)"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "ash",
					"content": {
						"korean": "잘 싸워보세요. 당신들의 역할은 여기까지니까.",
						"english": "Fight well. Your role ends here.",
						"japanese": "せいぜい足掻いてみてください。あなたたちの役目はここまでですから。",
						"chinese": "好好挣扎吧。你们的角色到此为止了。",
						"french": "Battez-vous bien. Votre rôle s'achève ici.",
						"spanish": "Luchad bien. Vuestro papel termina aquí.",
						"vietnamese": "Hãy chiến đấu tốt đi. Vai trò của các ngươi chỉ đến đây thôi.",
						"thai": "สู้ให้ดีล่ะ. บทบาทของพวกเจ้ามีแค่นี้แหละ.",
						"hindi": "खूब लड़ो। तुम्हारी भूमिका यहीं खत्म होती है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "ash",
					"action": "exit",
					"type": "direction",
					"duration_ms": 400
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "애쉬! 이 배신자!",
						"english": "Ash! You traitor!",
						"japanese": "アッシュ！この裏切り者め！",
						"chinese": "艾什！你这叛徒！",
						"french": "Ash ! Traître !",
						"spanish": "¡Ash! ¡Traidor!",
						"vietnamese": "Ash! Kẻ phản bội!",
						"thai": "แอช! ไอ้คนทรยศ!",
						"hindi": "ऐश! इस धोखेबाज़!"
					},
					"speaker": "character_1"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "(위협적인 기운을 뿜어낸다)",
						"english": "(Emanates a threatening aura)",
						"japanese": "（威圧的な気を放つ）",
						"chinese": "（散发出威胁性的气息）",
						"french": "(Dégage une aura menaçante)",
						"spanish": "(Emana un aura amenazante)",
						"vietnamese": "(Phát ra khí tức đe dọa)",
						"thai": "(แผ่ออร่าคุกคาม)",
						"hindi": "(एक धमकी भरा आभा मंडल फैलाता है)"
					}
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "훗… 어리석은 인간들. (비웃음)",
						"english": "Hmph... Foolish mortals. (Scoffs)",
						"japanese": "フッ… 愚かな人間どもめ。(嘲笑)",
						"chinese": "哼… 愚蠢的人类。(嗤笑)",
						"french": "Hmph... Mortels insensés. (Ricane)",
						"spanish": "Hmph... Humanos estúpidos. (Se mofa)",
						"vietnamese": "Hừm... Bọn người phàm ngu xuẩn. (Chế nhạo)",
						"thai": "ฮึ่ม... พวกมนุษย์โง่เขลา (เย้ยหยัน)",
						"hindi": "हफ़... मूर्ख इंसान। (उपहास)"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "거대한 그림자가 탐험대를 삼켰다. 끝없는 절망 속으로.",
						"english": "The colossal shadow devoured the expedition. Into endless despair.",
						"japanese": "巨大な影が探検隊を飲み込んだ。果てなき絶望の中へ。",
						"chinese": "巨大的阴影吞噬了探险队。坠入无尽的绝望。",
						"french": "L'ombre colossale engloutit l'expédition. Dans un désespoir sans fin.",
						"spanish": "La sombra colosal devoró a la expedición. Hacia una desesperación infinita.",
						"vietnamese": "Bóng tối khổng lồ nuốt chửng đoàn thám hiểm. Chìm vào tuyệt vọng vô tận.",
						"thai": "เงามืดมหึมากลืนกินคณะสำรวจ ลงสู่ความสิ้นหวังที่ไม่มีที่สิ้นสุด",
						"hindi": "विशाल छाया ने अभियान दल को निगल लिया। अंतहीन निराशा में।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "아니… 아직 끝나지 않았어!",
						"english": "No... it's not over yet!",
						"japanese": "いや… まだ終わってない！",
						"chinese": "不… 还没有结束！",
						"french": "Non... ce n'est pas encore fini !",
						"spanish": "¡No... aún no ha terminado!",
						"vietnamese": "Không... chưa kết thúc đâu!",
						"thai": "ไม่... มันยังไม่จบ!",
						"hindi": "नहीं... यह अभी खत्म नहीं हुआ!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "다시 와라. 언제든 기다리지.",
						"english": "Come again. I'll await you.",
						"japanese": "また来るがいい。いつでも待っているぞ。",
						"chinese": "再来吧。我随时恭候。",
						"french": "Revenez. J'attendrai, n'importe quand.",
						"spanish": "Vuelve. Te esperaré en cualquier momento.",
						"vietnamese": "Cứ đến đi. Ta luôn chờ đợi.",
						"thai": "กลับมาอีกครั้งสิ ข้าจะรออยู่เสมอ",
						"hindi": "फिर आना। मैं कभी भी इंतजार करूँगा।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 15
		}
	]
} as const;
