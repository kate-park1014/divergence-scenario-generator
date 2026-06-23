export const scenario_forest_kallisto_15_02 = {
	"scenario_id": "forest_kallisto_15_02",
	"order": 2,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"hazel": {
			"id": "mon_e2c11115-b300-4f32-b289-9ad088dc0273",
			"name": {
				"korean": "헤이즐",
				"english": "Hazel",
				"japanese": "ヘイゼル",
				"chinese": "榛",
				"french": "Hazel",
				"spanish": "Hazel",
				"vietnamese": "Hazel",
				"thai": "เฮเซล",
				"hindi": "हेज़ल"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/39f75a47-c622-45fe-04fd-a8bac1f93a00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/fc97b5d5-7a1d-4646-bedc-47a40ea70a00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"숲은 길을 잃게 만들었다.",
			"모든 발걸음은 제자리.",
			"미친 숲은 우리를 비웃었다.",
			"여긴… 출구가 없다."
		],
		"english": [
			"The forest made us lose our way.",
			"Every step, nowhere.",
			"The mad forest mocked us.",
			"There's... no exit here."
		],
		"japanese": [
			"森は私たちを迷わせた。",
			"どの足跡も同じ場所。",
			"狂気の森は私たちをあざ笑った。",
			"ここには…出口がない。"
		],
		"chinese": [
			"森林让我们迷失了方向。",
			"每一步都原地踏步。",
			"疯狂的森林嘲笑着我们。",
			"这里…没有出口。"
		],
		"french": [
			"La forêt nous a fait perdre notre chemin.",
			"Chaque pas ne menait nulle part.",
			"La forêt folle se moquait de nous.",
			"Il n'y a... pas d'issue ici."
		],
		"spanish": [
			"El bosque nos hizo perder el rumbo.",
			"Cada paso, en el mismo lugar.",
			"El bosque enloquecido se burlaba de nosotros.",
			"Aquí... no hay salida."
		],
		"vietnamese": [
			"Khu rừng khiến chúng ta lạc lối.",
			"Mỗi bước chân đều tại chỗ.",
			"Khu rừng điên loạn chế nhạo chúng ta.",
			"Ở đây... không có lối thoát."
		],
		"thai": [
			"ป่าทำให้เราหลงทาง",
			"ทุกย่างก้าว อยู่ที่เดิม",
			"ป่าที่บ้าคลั่งเยาะเย้ยเรา",
			"ที่นี่... ไม่มีทางออก"
		],
		"hindi": [
			"जंगल ने हमें रास्ता भटका दिया।",
			"हर कदम, एक ही जगह पर।",
			"पागल जंगल हम पर हँस रहा था।",
			"यहाँ… कोई रास्ता नहीं।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "숲의 안쪽은 더욱 기이했다.",
						"english": "Deeper in, the forest grew stranger.",
						"japanese": "森の奥は、さらに奇妙だった。",
						"chinese": "森林深处，更加诡异。",
						"french": "Plus profondément, la forêt devenait plus étrange.",
						"spanish": "Más adentro, el bosque era aún más extraño.",
						"vietnamese": "Sâu hơn vào trong, khu rừng càng kỳ lạ.",
						"thai": "ลึกเข้าไปในป่า ยิ่งแปลกประหลาดขึ้น",
						"hindi": "जंगल के अंदर, यह और भी अजीब था।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "...또 이 길? 이상해.",
						"english": "...This path again? Strange.",
						"japanese": "…またこの道？おかしい。",
						"chinese": "…又是这条路？奇怪。",
						"french": "...Encore ce chemin ? Bizarre.",
						"spanish": "¿...Este camino otra vez? Extraño.",
						"vietnamese": "...Lại con đường này? Lạ thật.",
						"thai": "...ทางนี้อีกแล้วเหรอ? แปลกจัง",
						"hindi": "...फिर यही रास्ता? अजीब है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"type": "direction",
					"speaker": "hazel",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "hazel",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…돌아가. 여기서 더 가면… 안 돼.",
						"english": "...Go back. Going further... no.",
						"japanese": "…戻れ。これ以上進むと…ダメだ。",
						"chinese": "…回去。再往前走…不行。",
						"french": "...Fais demi-tour. Aller plus loin... non.",
						"spanish": "...Regresa. Ir más allá... no.",
						"vietnamese": "...Quay lại. Đi xa hơn nữa... không được.",
						"thai": "...กลับไป. ไปไกลกว่านี้... ไม่ได้",
						"hindi": "...वापस जाओ। आगे जाना… नहीं।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"emotion": "base",
					"content": {
						"korean": "누구세요? 뭘 아는 거지?",
						"english": "Who are you? What do you know?",
						"japanese": "誰だ？何を知ってる？",
						"chinese": "你是谁？你知道些什么？",
						"french": "Qui êtes-vous ? Que savez-vous ?",
						"spanish": "¿Quién eres? ¿Qué sabes?",
						"vietnamese": "Ngươi là ai? Ngươi biết gì?",
						"thai": "คุณเป็นใคร? คุณรู้อะไร?",
						"hindi": "तुम कौन हो? क्या जानते हो?"
					}
				},
				{
					"content": {
						"korean": "이 숲은… 한번 들어오면…",
						"english": "This forest... once you enter...",
						"japanese": "この森は…一度入ったら…",
						"chinese": "这座森林…一旦进入…",
						"french": "Cette forêt... une fois que vous y entrez...",
						"spanish": "Este bosque... una vez que entras...",
						"vietnamese": "Khu rừng này... một khi đã bước vào...",
						"thai": "ป่านี้... เมื่อเข้ามาแล้ว...",
						"hindi": "यह जंगल… एक बार अंदर आ गए तो…"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "hazel"
				},
				{
					"content": {
						"korean": "…절대 놓아주지 않아.",
						"english": "...it never lets you go.",
						"japanese": "…決して逃がしてはくれない。",
						"chinese": "…它绝不会放过你。",
						"french": "...elle ne vous laissera jamais partir.",
						"spanish": "...nunca te dejará ir.",
						"vietnamese": "...nó sẽ không bao giờ buông tha.",
						"thai": "...มันจะไม่มีวันปล่อยคุณไป",
						"hindi": "...यह तुम्हें कभी नहीं छोड़ेगा।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "hazel"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "익숙한 풍경이 반복됐다. 숲은 우리를 조롱하는 듯했다.",
						"english": "The familiar scenery repeated. The forest seemed to mock us.",
						"japanese": "見慣れた景色が繰り返された。森は私たちを嘲笑っているかのようだった。",
						"chinese": "熟悉的景象重复出现。森林似乎在嘲弄我们。",
						"french": "Le paysage familier se répétait. La forêt semblait nous narguer.",
						"spanish": "El paisaje familiar se repetía. El bosque parecía burlarse de nosotros.",
						"vietnamese": "Cảnh vật quen thuộc lặp lại. Rừng như đang chế nhạo chúng tôi.",
						"thai": "ทิวทัศน์ที่คุ้นเคยซ้ำไปซ้ำมา ป่าดูเหมือนจะเยาะเย้ยเรา",
						"hindi": "परिचित दृश्य दोहराया गया। जंगल हमारा मज़ाक उड़ा रहा था।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "빌어먹을! 또 이 나무잖아!",
						"english": "Damn it! This tree again!",
						"japanese": "くそっ！またこの木か！",
						"chinese": "该死！又是这棵树！",
						"french": "Bon sang ! Encore cet arbre !",
						"spanish": "¡Maldita sea! ¡Otra vez este árbol!",
						"vietnamese": "Chết tiệt! Lại cái cây này nữa!",
						"thai": "ให้ตายสิ! ต้นไม้นี่อีกแล้วเหรอ!",
						"hindi": "धिक्कार है! फिर से यही पेड़!"
					},
					"emotion": "angry"
				},
				{
					"spot": [
						2,
						2
					],
					"duration_ms": 480,
					"speaker": "hazel",
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "…보이지? 끝없는 덫.",
						"english": "...See? An endless trap.",
						"japanese": "…見えるか？終わりのない罠が。",
						"chinese": "……看到了吗？无尽的陷阱。",
						"french": "...Tu vois ? Un piège sans fin.",
						"spanish": "¿Lo ves? Una trampa sin fin.",
						"vietnamese": "Thấy không? Một cái bẫy vô tận.",
						"thai": "เห็นไหม? กับดักที่ไม่มีที่สิ้นสุด",
						"hindi": "देख रहे हो? एक अंतहीन जाल।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "hazel"
				},
				{
					"content": {
						"korean": "덫? 당신이 말하는 덫이 뭔데?",
						"english": "A trap? What trap are you talking about?",
						"japanese": "罠？あなたが言う罠って何？",
						"chinese": "陷阱？你说的陷阱是什么？",
						"french": "Un piège ? De quel piège parlez-vous ?",
						"spanish": "¿Una trampa? ¿De qué trampa hablas?",
						"vietnamese": "Bẫy ư? Cái bẫy mà bạn nói là gì?",
						"thai": "กับดัก? คุณกำลังพูดถึงกับดักอะไร?",
						"hindi": "जाल? तुम किस जाल की बात कर रहे हो?"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_2"
				},
				{
					"speaker": "hazel",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "모두… 대가를 치러야 해.",
						"english": "Everyone... must pay the price.",
						"japanese": "みんな…代償を払わなければならない。",
						"chinese": "所有人……都必须付出代价。",
						"french": "Tout le monde... doit payer le prix.",
						"spanish": "Todos... deben pagar el precio.",
						"vietnamese": "Tất cả... đều phải trả giá.",
						"thai": "ทุกคน...ต้องชดใช้",
						"hindi": "सभी को... कीमत चुकानी होगी।"
					}
				},
				{
					"speaker": "hazel",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "나처럼… 침묵의 대가를.",
						"english": "Like me... the price of silence.",
						"japanese": "私のように…沈黙の代償を。",
						"chinese": "像我一样……沉默的代价。",
						"french": "Comme moi... le prix du silence.",
						"spanish": "Como yo... el precio del silencio.",
						"vietnamese": "Giống như tôi... cái giá của sự im lặng.",
						"thai": "เหมือนฉัน...ราคาแห่งความเงียบ",
						"hindi": "मुझ जैसे... चुप्पी की कीमत।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "숲의 깊은 곳에서 달콤한 향기가 유혹했다.",
						"english": "From the depths of the forest, a sweet scent enticed.",
						"japanese": "森の奥深くから、甘い香りが誘惑した。",
						"chinese": "从森林深处，一股甜美的香气诱惑着。",
						"french": "Des profondeurs de la forêt, un doux parfum attira.",
						"spanish": "Desde las profundidades del bosque, un dulce aroma atraía.",
						"vietnamese": "Từ sâu thẳm khu rừng, một mùi hương ngọt ngào quyến rũ.",
						"thai": "จากส่วนลึกของป่า กลิ่นหอมหวานเย้ายวน",
						"hindi": "जंगल की गहराइयों से, एक मीठी सुगंध ने लुभाया।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "저 빛나는 열매들… 환상적이야.",
						"english": "Those glowing fruits... they're fantastic.",
						"japanese": "あの輝く実…幻想的だ。",
						"chinese": "那些发光的果实……太棒了。",
						"french": "Ces fruits brillants... ils sont fantastiques.",
						"spanish": "Esas frutas brillantes... son fantásticas.",
						"vietnamese": "Những quả mọng phát sáng đó... thật tuyệt vời.",
						"thai": "ผลไม้เรืองแสงเหล่านั้น...มหัศจรรย์มาก",
						"hindi": "वे चमकते फल... शानदार हैं।"
					}
				},
				{
					"speaker": "character_3",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "왠지 힘이 솟는 기분인데?",
						"english": "I feel a surge of power, somehow?",
						"japanese": "なぜか力が湧いてくるような気がするんだけど？",
						"chinese": "为什么感觉充满了力量？",
						"french": "Je me sens étrangement plein d'énergie ?",
						"spanish": "¿Me siento como si tuviera un subidón de energía?",
						"vietnamese": "Sao tự nhiên tôi cảm thấy tràn đầy sức mạnh vậy?",
						"thai": "ทำไมรู้สึกเหมือนมีพลังเพิ่มขึ้นเลย?",
						"hindi": "मुझे किसी तरह से शक्ति का संचार महसूस हो रहा है?"
					}
				},
				{
					"duration_ms": 520,
					"type": "direction",
					"action": "enter",
					"speaker": "hazel",
					"spot": [
						4,
						2
					]
				},
				{
					"content": {
						"korean": "만지지 마! 그건… 숲의 맹세.",
						"english": "Don't touch it! That's... the forest's vow.",
						"japanese": "触るな！それは…森の誓いだ。",
						"chinese": "别碰！那是……森林的誓言。",
						"french": "Ne touche pas ! C'est... le vœu de la forêt.",
						"spanish": "¡No lo toques! Eso es... el juramento del bosque.",
						"vietnamese": "Đừng chạm vào! Đó là... lời thề của rừng.",
						"thai": "อย่าแตะต้องมัน! นั่นคือ...คำสาบานของป่า",
						"hindi": "इसे मत छुओ! वह... जंगल का संकल्प है।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "hazel"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "맹세?",
						"english": "A vow?",
						"japanese": "誓い？",
						"chinese": "誓言？",
						"french": "Un serment ?",
						"spanish": "¿Un juramento?",
						"vietnamese": "Lời thề ư?",
						"thai": "คำสาบานเหรอ?",
						"hindi": "एक प्रतिज्ञा?"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "달콤한 독이야. 숲은… 너희의 죄를 요구해.",
						"english": "Sweet poison. The forest… demands your sins.",
						"japanese": "甘い毒だ。森は… お前たちの罪を要求する。",
						"chinese": "甜蜜的毒药。森林… 要求你们的罪孽。",
						"french": "Un doux poison. La forêt… réclame vos péchés.",
						"spanish": "Dulce veneno. El bosque… exige vuestros pecados.",
						"vietnamese": "Thứ độc ngọt ngào. Rừng… đòi tội lỗi của các ngươi.",
						"thai": "ยาพิษหวานหอม ป่า… ต้องการบาปของพวกเจ้า",
						"hindi": "मीठा ज़हर। जंगल… तुम्हारे पाप मांगता है।"
					},
					"speaker": "hazel",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…무슨 말도 안 되는 소리야.",
						"english": "…What nonsense.",
						"japanese": "…何を馬鹿なことを。",
						"chinese": "…简直胡说八道。",
						"french": "…Quelle absurdité.",
						"spanish": "…Qué tontería.",
						"vietnamese": "…Thật vô lý.",
						"thai": "…เหลวไหลสิ้นดี",
						"hindi": "…क्या बकवास है।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"content": {
						"korean": "모든 길이 똑같았다. 숲은 거대한 함정이었다.",
						"english": "Every path was the same. The forest was a giant trap.",
						"japanese": "どの道も同じだった。森は巨大な罠だった。",
						"chinese": "每条路都一样。森林是一个巨大的陷阱。",
						"french": "Tous les chemins étaient identiques. La forêt était un piège gigantesque.",
						"spanish": "Todos los caminos eran iguales. El bosque era una trampa gigante.",
						"vietnamese": "Mọi con đường đều như nhau. Rừng là một cái bẫy khổng lồ.",
						"thai": "ทุกเส้นทางเหมือนกันหมด ป่าคือกับดักขนาดใหญ่",
						"hindi": "हर रास्ता एक जैसा था। जंगल एक विशाल जाल था।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "출구가 없어! 완전히 갇혔어!",
						"english": "No exit! We're completely trapped!",
						"japanese": "出口がない！完全に閉じ込められた！",
						"chinese": "没有出口！我们完全被困住了！",
						"french": "Pas de sortie ! Nous sommes complètement piégés !",
						"spanish": "¡No hay salida! ¡Estamos completamente atrapados!",
						"vietnamese": "Không có lối ra! Chúng ta bị mắc kẹt hoàn toàn rồi!",
						"thai": "ไม่มีทางออก! เราติดกับแล้ว!",
						"hindi": "कोई निकास नहीं! हम पूरी तरह फंस गए हैं!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "이 숲… 우리를 갖고 노는 거야!",
						"english": "This forest… it's toying with us!",
						"japanese": "この森… 私たちを弄んでいるんだ！",
						"chinese": "这片森林… 在玩弄我们！",
						"french": "Cette forêt… joue avec nous !",
						"spanish": "¡Este bosque… está jugando con nosotros!",
						"vietnamese": "Khu rừng này… đang đùa giỡn với chúng ta!",
						"thai": "ป่านี้… มันกำลังเล่นสนุกกับเรา!",
						"hindi": "यह जंगल… हमसे खेल रहा है!"
					},
					"emotion": "angry"
				},
				{
					"spot": [
						3,
						2
					],
					"speaker": "hazel",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "hazel",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "미안해… 난… 너무 두려워.",
						"english": "I'm sorry… I'm… so scared.",
						"japanese": "ごめん… 私は… とても怖い。",
						"chinese": "对不起… 我… 太害怕了。",
						"french": "Je suis désolé… J'ai… tellement peur.",
						"spanish": "Lo siento… Tengo… mucho miedo.",
						"vietnamese": "Xin lỗi… Tôi… sợ quá.",
						"thai": "ขอโทษนะ… ฉัน… กลัวมากเลย",
						"hindi": "माफ़ करना… मैं… बहुत डरा हुआ हूँ।"
					}
				},
				{
					"content": {
						"korean": "당신도 이 숲에 죄를 지었어?",
						"english": "Did you also sin against this forest?",
						"japanese": "あなたもこの森に罪を犯したの？",
						"chinese": "你是不是也对这片森林犯了罪？",
						"french": "As-tu aussi péché contre cette forêt ?",
						"spanish": "¿Tú también has pecado contra este bosque?",
						"vietnamese": "Bạn cũng đã phạm tội với khu rừng này sao?",
						"thai": "คุณก็ทำบาปกับป่านี้ด้วยเหรอ?",
						"hindi": "क्या तुमने भी इस जंगल के खिलाफ़ पाप किया है?"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "난… 아무것도 바꿀 수 없어.",
						"english": "I… can't change anything.",
						"japanese": "私… 何も変えられない。",
						"chinese": "我… 什么都改变不了。",
						"french": "Je… ne peux rien changer.",
						"spanish": "Yo… no puedo cambiar nada.",
						"vietnamese": "Tôi… không thể thay đổi bất cứ điều gì.",
						"thai": "ฉัน… เปลี่ยนอะไรไม่ได้เลย",
						"hindi": "मैं… कुछ भी नहीं बदल सकता।"
					},
					"speaker": "hazel",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "젠장!",
						"english": "Damn it!",
						"japanese": "ちくしょう！",
						"chinese": "该死！",
						"french": "Zut !",
						"spanish": "¡Maldita sea!",
						"vietnamese": "Chết tiệt!",
						"thai": "บ้าเอ๊ย!",
						"hindi": "धिक्कार है!"
					},
					"emotion": "angry"
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "숲의 심장에서, 거대한 그림자가 일렁였다.",
						"english": "In the heart of the forest, a colossal shadow stirred.",
						"japanese": "森の心臓で、巨大な影が蠢いた。",
						"chinese": "在森林之心，一道巨大的阴影涌动。",
						"french": "Au cœur de la forêt, une ombre colossale ondoyait.",
						"spanish": "En el corazón del bosque, una sombra colosal se agitaba.",
						"vietnamese": "Trong trái tim khu rừng, một bóng đen khổng lồ chập chờn.",
						"thai": "ในใจกลางป่า เงายักษ์พลันไหวระริก",
						"hindi": "वन के हृदय में, एक विशाल छाया लहराई।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "어서 와라, 길 잃은 어린 양.",
						"english": "Welcome, lost lamb.",
						"japanese": "ようこそ、迷える子羊よ。",
						"chinese": "欢迎，迷途的羔羊。",
						"french": "Bienvenue, agneau égaré.",
						"spanish": "Bienvenido, cordero perdido.",
						"vietnamese": "Chào mừng, cừu non lạc lối.",
						"thai": "ยินดีต้อนรับ เจ้าแกะน้อยผู้หลงทาง",
						"hindi": "स्वागत है, भटकी हुई भेड़।"
					},
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "이 미궁은… 너의 죄를 영원히 묶어둘 것이다.",
						"english": "This labyrinth… will forever bind your sins.",
						"japanese": "この迷宮は… お前の罪を永遠に縛り付けるだろう。",
						"chinese": "这个迷宫… 将永远束缚你的罪孽。",
						"french": "Ce labyrinthe… liera éternellement tes péchés.",
						"spanish": "Este laberinto… atará tus pecados para siempre.",
						"vietnamese": "Mê cung này… sẽ mãi mãi trói buộc tội lỗi của ngươi.",
						"thai": "เขาวงกตนี้… จะผูกมัดบาปของเจ้าไว้ชั่วนิรันดร์",
						"hindi": "यह भूलभुलैया… तुम्हारे पापों को हमेशा के लिए बांधे रखेगी।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "닥쳐! 우리가 널 부술 거야!",
						"english": "Shut up! We'll crush you!",
						"japanese": "黙れ！お前を叩き潰してやる！",
						"chinese": "闭嘴！我们会摧毁你！",
						"french": "Tais-toi ! Nous allons t'écraser !",
						"spanish": "¡Cállate! ¡Te aplastaremos!",
						"vietnamese": "Câm miệng! Chúng ta sẽ nghiền nát ngươi!",
						"thai": "หุบปาก! เราจะบดขยี้แก!",
						"hindi": "चुप रहो! हम तुम्हें कुचल देंगे!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "허무한 발버둥.",
						"english": "A futile struggle.",
						"japanese": "虚しい足掻きだ。",
						"chinese": "徒劳的挣扎。",
						"french": "Une lutte vaine.",
						"spanish": "Una lucha inútil.",
						"vietnamese": "Sự giãy giụa vô vọng.",
						"thai": "การดิ้นรนที่ไร้ประโยชน์",
						"hindi": "एक व्यर्थ संघर्ष।"
					},
					"emotion": "base"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "크흐흐… 끝이라고… 생각하나?",
						"english": "Kukuku… Do you… think this is the end?",
						"japanese": "クフフ… 終わりだと… 思っているのか？",
						"chinese": "呵呵呵… 你觉得… 这就是结束吗？",
						"french": "Héhéhé… Tu crois… que c'est la fin ?",
						"spanish": "Jojojo… ¿Crees… que este es el fin?",
						"vietnamese": "Khà khà… Ngươi… nghĩ đây là kết thúc sao?",
						"thai": "คิกคิกคิก… เจ้า… คิดว่านี่คือจุดจบงั้นรึ?",
						"hindi": "खि खि खि… क्या तुम्हें… लगता है कि यह अंत है?"
					}
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "숲의 순환은… 멈추지 않아.",
						"english": "The forest's cycle… never ceases.",
						"japanese": "森の循環は… 止まらない。",
						"chinese": "森林的循环… 永不停歇。",
						"french": "Le cycle de la forêt… ne s'arrête jamais.",
						"spanish": "El ciclo del bosque… nunca se detiene.",
						"vietnamese": "Vòng tuần hoàn của rừng… không bao giờ ngừng.",
						"thai": "วงจรของป่า… ไม่เคยหยุดนิ่ง",
						"hindi": "वन का चक्र… कभी नहीं रुकता।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…뭐?",
						"english": "…What?",
						"japanese": "…何だと？",
						"chinese": "…什么？",
						"french": "…Quoi ?",
						"spanish": "…¿Qué?",
						"vietnamese": "…Gì cơ?",
						"thai": "…อะไรนะ?",
						"hindi": "…क्या?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "쓰러진 그림자. 그러나 숲은 여전히 침묵했고, 반복되는 절망은 사라지지 않았다.",
						"english": "The shadow fell. Yet the forest remained silent, and the repeating despair did not vanish.",
						"japanese": "倒れた影。しかし森は依然として沈黙し、繰り返される絶望は消えなかった。",
						"chinese": "倒下的阴影。然而森林依旧寂静，重复的绝望并未消失。",
						"french": "L'ombre tomba. Pourtant, la forêt demeura silencieuse, et le désespoir répétitif ne disparut pas.",
						"spanish": "La sombra cayó. Sin embargo, el bosque permaneció en silencio, y la desesperación recurrente no desapareció.",
						"vietnamese": "Bóng đen ngã xuống. Thế nhưng khu rừng vẫn im lặng, và nỗi tuyệt vọng lặp đi lặp lại không biến mất.",
						"thai": "เงาล้มลง ทว่าป่ายังคงเงียบงัน และความสิ้นหวังที่ซ้ำซากก็ยังไม่จางหายไป",
						"hindi": "छाया गिर गई। फिर भी जंगल खामोश रहा, और बार-बार होने वाली निराशा गायब नहीं हुई।"
					}
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "어리석은 것. 네 죄책감은… 영원할 것이다.",
						"english": "Foolish one. Your guilt… will be eternal.",
						"japanese": "愚かな者め。お前の罪悪感は… 永遠だろう。",
						"chinese": "愚蠢的东西。你的罪恶感… 将永存。",
						"french": "Imbécile. Ta culpabilité… sera éternelle.",
						"spanish": "Estúpido. Tu culpa… será eterna.",
						"vietnamese": "Đồ ngốc. Cảm giác tội lỗi của ngươi… sẽ là vĩnh cửu.",
						"thai": "เจ้าโง่เขลา ความรู้สึกผิดของเจ้า… จะคงอยู่ชั่วนิรันดร์",
						"hindi": "मूर्ख। तुम्हारा अपराधबोध… शाश्वत रहेगा।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "아직… 안 끝났어!",
						"english": "It's not over yet!",
						"japanese": "まだ…終わってない！",
						"chinese": "还没…结束！",
						"french": "Ce n'est pas encore fini !",
						"spanish": "¡Aún… no ha terminado!",
						"vietnamese": "Chưa… kết thúc đâu!",
						"thai": "ยัง…ไม่จบ!",
						"hindi": "अभी… खत्म नहीं हुआ है!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "다시… 헤매어라.",
						"english": "Wander again.",
						"japanese": "再び…彷徨え。",
						"chinese": "再次…迷失吧。",
						"french": "Erre… à nouveau.",
						"spanish": "Vuelve a perderte.",
						"vietnamese": "Lạc lối… lần nữa đi.",
						"thai": "หลงทาง…อีกครั้ง.",
						"hindi": "फिर से… भटको।"
					},
					"type": "speech",
					"speaker": "random_boss"
				}
			]
		}
	]
} as const;
