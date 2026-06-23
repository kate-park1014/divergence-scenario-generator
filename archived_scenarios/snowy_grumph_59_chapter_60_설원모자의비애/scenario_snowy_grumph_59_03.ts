export const scenario_snowy_grumph_59_03 = {
	"scenario_id": "snowy_grumph_59_03",
	"order": 3,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"ivar": {
			"id": "mon_d8a80adc-9315-47b5-8c30-97ce33672bce",
			"name": {
				"korean": "이바르",
				"english": "Ivar",
				"japanese": "イヴァー",
				"chinese": "伊瓦尔",
				"french": "Ivar",
				"spanish": "Ivar",
				"vietnamese": "Ivar",
				"thai": "ไอวาร์",
				"hindi": "इवर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8dd7872b-d4df-44fd-b1a1-083a9156e700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2622fb62-daf4-42d1-a83b-2b78869d3e00/public"
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
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "모자의 힘은 설원의 얼음까지 흔들었다.",
						"english": "The hat's power even shook the ice of the snowfield.",
						"japanese": "帽子の力は雪原の氷まで揺らした。",
						"chinese": "帽子的力量甚至撼动了雪原的冰层。",
						"french": "La puissance du chapeau fit même trembler la glace de l'étendue neigeuse.",
						"spanish": "El poder del sombrero incluso hizo temblar el hielo del páramo nevado.",
						"vietnamese": "Sức mạnh của chiếc mũ thậm chí còn làm rung chuyển băng tuyết nguyên.",
						"thai": "พลังของหมวกนั้นเขย่าแม้กระทั่งน้ำแข็งในทุ่งหิมะ.",
						"hindi": "टोपी की शक्ति ने बर्फीले मैदान की बर्फ को भी हिला दिया।"
					},
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "이봐, 모자가….",
						"english": "Hey, the hat...",
						"japanese": "おい、帽子が…。",
						"chinese": "喂，帽子…。",
						"french": "Hé, le chapeau...",
						"spanish": "Oye, el sombrero...",
						"vietnamese": "Này, cái mũ...",
						"thai": "เฮ้ หมวกนั่น...",
						"hindi": "अरे, टोपी..."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "ivar",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "겨우 이 정도인가? 별것 아니군.",
						"english": "Is this all? Not much, is it?",
						"japanese": "これだけか？大したことないな。",
						"chinese": "就这点本事吗？没什么了不起的。",
						"french": "C'est tout ce qu'il y a ? Ce n'est pas grand-chose.",
						"spanish": "¿Es todo lo que tienes? No es para tanto.",
						"vietnamese": "Chỉ có thế thôi sao? Chẳng đáng gì cả.",
						"thai": "แค่นี้เองเหรอ? ไม่มีอะไรเลยนี่.",
						"hindi": "बस इतना ही? कुछ खास नहीं।"
					},
					"speaker": "ivar"
				},
				{
					"content": {
						"korean": "아니, 그게 아니라… 숲이 반응하고 있어.",
						"english": "No, not that... the forest is reacting.",
						"japanese": "いや、そうじゃなくて…森が反応している。",
						"chinese": "不，不是那样…森林在回应。",
						"french": "Non, pas ça... la forêt réagit.",
						"spanish": "No, no es eso... el bosque está reaccionando.",
						"vietnamese": "Không, không phải vậy... rừng đang phản ứng.",
						"thai": "ไม่ใช่, ไม่ใช่แบบนั้น... ป่ากำลังตอบสนอง.",
						"hindi": "नहीं, वह नहीं... जंगल प्रतिक्रिया दे रहा है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "내 힘은 세상을 바꾼다! 복종해라, 어리석은 인간!",
						"english": "My power changes the world! Obey me, foolish mortals!",
						"japanese": "我が力は世界を変える！服従せよ、愚かな人間どもめ！",
						"chinese": "我的力量改变世界！服从吧，愚蠢的人类！",
						"french": "Ma puissance change le monde ! Obéissez, mortels insensés !",
						"spanish": "¡Mi poder cambia el mundo! ¡Obedeced, necios mortales!",
						"vietnamese": "Sức mạnh của ta thay đổi thế giới! Phục tùng đi, lũ người ngu ngốc!",
						"thai": "พลังของข้าจะเปลี่ยนโลก! จงเชื่อฟังซะ, มนุษย์โง่เขลา!",
						"hindi": "मेरी शक्ति दुनिया बदलती है! आज्ञा मानो, मूर्ख मनुष्यों!"
					}
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "흥. 힘이라면 나도 질 수 없지.",
						"english": "Hmph. If it's power, I won't lose either.",
						"japanese": "ふん。力比べなら、私も負けられないな。",
						"chinese": "哼。论力量，我也不会输。",
						"french": "Hmph. S'il s'agit de puissance, je ne perdrai pas non plus.",
						"spanish": "Hmph. Si de poder se trata, yo tampoco me quedaré atrás.",
						"vietnamese": "Hừm. Nếu là sức mạnh, ta cũng không thua đâu.",
						"thai": "หึ. ถ้าเรื่องพลังล่ะก็, ข้าก็ไม่แพ้หรอก.",
						"hindi": "हँ। शक्ति की बात है, तो मैं भी नहीं हारूंगा।"
					},
					"type": "speech",
					"emotion": "angry"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "ivar",
					"spot": [
						4,
						2
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "이 힘은… 슬픔인가?",
						"english": "This power… is it sorrow?",
						"japanese": "この力は…悲しみなのか？",
						"chinese": "这股力量……是悲伤吗？",
						"french": "Ce pouvoir… est-ce la tristesse ?",
						"spanish": "¿Este poder… es tristeza?",
						"vietnamese": "Sức mạnh này… là nỗi buồn ư?",
						"thai": "พลังนี้… คือความเศร้าหรือ?",
						"hindi": "यह शक्ति… क्या यह दुःख है?"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "ivar"
				},
				{
					"content": {
						"korean": "감히 내 고통을 논하는가! 나약한 존재 같으니!",
						"english": "How dare you speak of my pain! You weakling!",
						"japanese": "よくも私の苦痛を語るか！弱き者め！",
						"chinese": "竟敢谈论我的痛苦！你这弱者！",
						"french": "Comment oses-tu parler de ma douleur ! Misérable faible !",
						"spanish": "¡Cómo te atreves a hablar de mi dolor! ¡Ser tan débil!",
						"vietnamese": "Ngươi dám nói về nỗi đau của ta! Đồ yếu ớt!",
						"thai": "บังอาจมาพูดถึงความเจ็บปวดของข้า! เจ้าพวกอ่อนแอ!",
						"hindi": "हिम्मत कैसे हुई मेरी पीड़ा की बात करने की! तुम कमजोर प्राणी!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "모자의 힘이 더 강해지고 있어!",
						"english": "The hat's power is growing stronger!",
						"japanese": "帽子の力がさらに強くなっている！",
						"chinese": "帽子的力量越来越强了！",
						"french": "Le pouvoir du chapeau devient plus fort !",
						"spanish": "¡El poder del sombrero se está haciendo más fuerte!",
						"vietnamese": "Sức mạnh của chiếc mũ đang mạnh hơn!",
						"thai": "พลังของหมวกกำลังแข็งแกร่งขึ้น!",
						"hindi": "टोपी की शक्ति और मजबूत हो रही है!"
					}
				},
				{
					"content": {
						"korean": "과거의 흔적. 이 고통의 끝은 어디인가.",
						"english": "Traces of the past. Where does this pain end?",
						"japanese": "過去の痕跡。この苦痛の終わりはどこだ。",
						"chinese": "过去的痕迹。这痛苦的尽头在哪里？",
						"french": "Traces du passé. Où se termine cette douleur ?",
						"spanish": "Huellas del pasado. ¿Dónde acaba este dolor?",
						"vietnamese": "Dấu vết của quá khứ. Nỗi đau này sẽ kết thúc ở đâu?",
						"thai": "ร่องรอยแห่งอดีต จุดจบของความเจ็บปวดนี้อยู่ไหน?",
						"hindi": "अतीत के निशान। इस दर्द का अंत कहाँ है?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "ivar"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "잊혀진 왕의 이야기… 들려줄까?",
						"english": "The tale of the forgotten king… Shall I tell it?",
						"japanese": "忘れ去られた王の物語…話してやろうか？",
						"chinese": "被遗忘的国王的故事……要听吗？",
						"french": "L'histoire du roi oublié… Veux-tu l'entendre ?",
						"spanish": "La historia del rey olvidado… ¿Quieres que te la cuente?",
						"vietnamese": "Câu chuyện về vị vua bị lãng quên… Ngươi có muốn nghe không?",
						"thai": "เรื่องราวของราชันผู้ถูกลืม… จะเล่าให้ฟังไหม?",
						"hindi": "भूले हुए राजा की कहानी… क्या सुनाऊँ?"
					},
					"speaker": "random_boss"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "ivar"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "저 모자, 왠지 불쌍해 보이지 않아?",
						"english": "Doesn't that hat look kinda pitiful?",
						"japanese": "あの帽子、なんだか哀れに見えないか？",
						"chinese": "那顶帽子，是不是看起来有点可怜？",
						"french": "Ce chapeau n'a-t-il pas l'air un peu pitoyable ?",
						"spanish": "Ese sombrero, ¿no parece un poco lamentable?",
						"vietnamese": "Chiếc mũ đó, trông có vẻ đáng thương không?",
						"thai": "หมวกนั่น… ดูน่าสงสารไม่ใช่เหรอ?",
						"hindi": "वह टोपी, क्या वह थोड़ी दयनीय नहीं लगती?"
					},
					"speaker": "character_1"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "연민은 약한 자의 것이다. 강자는 그런 감정에 휘둘리지 않는다.",
						"english": "Pity is for the weak. The strong are not swayed by such emotions.",
						"japanese": "憐憫は弱き者のものだ。強者はそんな感情に惑わされない。",
						"chinese": "怜悯是弱者的东西。强者不会被这种感情左右。",
						"french": "La pitié est pour les faibles. Les forts ne se laissent pas influencer par de telles émotions.",
						"spanish": "La compasión es de los débiles. Los fuertes no se dejan llevar por tales emociones.",
						"vietnamese": "Lòng trắc ẩn là của kẻ yếu. Kẻ mạnh không bị cảm xúc đó lay chuyển.",
						"thai": "ความสงสารเป็นของผู้อ่อนแอ ผู้แข็งแกร่งไม่ถูกอารมณ์เช่นนั้นครอบงำ",
						"hindi": "दया कमजोरों के लिए है। बलवान ऐसी भावनाओं से विचलित नहीं होते।"
					},
					"speaker": "ivar"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "그래, 강함만이 진실이다! 약한 자는 사라져라!",
						"english": "Yes, only strength is truth! Let the weak perish!",
						"japanese": "そうだ、強さこそが真実だ！弱き者は消え失せろ！",
						"chinese": "没错，只有强大才是真理！弱者都给我消失！",
						"french": "Oui, seule la force est vérité ! Que les faibles disparaissent !",
						"spanish": "¡Sí, solo la fuerza es verdad! ¡Que los débiles desaparezcan!",
						"vietnamese": "Đúng vậy, chỉ có sức mạnh là chân lý! Kẻ yếu hãy biến mất!",
						"thai": "ใช่แล้ว ความแข็งแกร่งเท่านั้นคือความจริง! พวกอ่อนแอจงหายไป!",
						"hindi": "हाँ, केवल शक्ति ही सत्य है! कमजोरों को मिटा दो!"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "모자가 우릴 시험하는 것 같아.",
						"english": "It seems the hat is testing us.",
						"japanese": "帽子が私たちを試しているようだ。",
						"chinese": "那顶帽子好像在考验我们。",
						"french": "On dirait que le chapeau nous met à l'épreuve.",
						"spanish": "Parece que el sombrero nos está poniendo a prueba.",
						"vietnamese": "Có vẻ như chiếc mũ đang thử thách chúng ta.",
						"thai": "ดูเหมือนหมวกกำลังทดสอบเราอยู่",
						"hindi": "लगता है टोपी हमें परख रही है।"
					}
				},
				{
					"content": {
						"korean": "좋아. 그 끝을 보겠다.",
						"english": "Fine. I'll see this through to the end.",
						"japanese": "よし。その結末を見届けてやる。",
						"chinese": "好。我倒要看看它的结局。",
						"french": "Bien. J'irai jusqu'au bout.",
						"spanish": "Bien. Veré esto hasta el final.",
						"vietnamese": "Được thôi. Ta sẽ xem đến cùng.",
						"thai": "ดี. ข้าจะดูจนถึงที่สุด",
						"hindi": "ठीक है। मैं इसका अंत देखूंगा।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "ivar"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						4,
						2
					],
					"action": "enter",
					"speaker": "ivar",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "이 힘은… 끝없는 굶주림인가.",
						"english": "This power... is it endless hunger?",
						"japanese": "この力は…終わりのない飢えなのか。",
						"chinese": "这股力量……是无尽的饥饿吗？",
						"french": "Ce pouvoir… est-ce une faim sans fin ?",
						"spanish": "¿Este poder… es un hambre sin fin?",
						"vietnamese": "Sức mạnh này... là sự đói khát vô tận ư?",
						"thai": "พลังนี้… คือความหิวโหยไม่สิ้นสุดงั้นหรือ?",
						"hindi": "यह शक्ति… क्या यह अंतहीन भूख है?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "ivar"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "네 안의 욕망을 보아라! 나와 다르지 않다!",
						"english": "Behold the desire within you! It's no different from mine!",
						"japanese": "お前の中の欲望を見よ！私と何ら変わりはない！",
						"chinese": "看看你内心的欲望！与我并无不同！",
						"french": "Contemple le désir en toi ! Il n'est pas différent du mien !",
						"spanish": "¡Contempla el deseo dentro de ti! ¡No es diferente al mío!",
						"vietnamese": "Hãy nhìn vào ham muốn bên trong ngươi! Nó chẳng khác gì của ta!",
						"thai": "จงดูความปรารถนาในตัวเจ้า! มันไม่ต่างจากของข้าเลย!",
						"hindi": "अपने अंदर की इच्छा को देखो! यह मुझसे अलग नहीं है!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "모자가 이바르님을 흔들고 있어!",
						"english": "The Hat is swaying Ivar!",
						"japanese": "帽子がイヴァル様を揺さぶっている！",
						"chinese": "帽子正在动摇伊瓦尔大人！",
						"french": "Le Chapeau fait vaciller Ivar !",
						"spanish": "¡El Sombrero está influenciando a Ivar!",
						"vietnamese": "Chiếc mũ đang lay chuyển Ivar!",
						"thai": "หมวกกำลังเขย่าอีวาร์!",
						"hindi": "टोपी इवार को हिला रही है!"
					}
				},
				{
					"content": {
						"korean": "흥. 난 나의 길을 간다. 허황된 영광은 필요 없어.",
						"english": "Hmph. I walk my own path. I need no empty glory.",
						"japanese": "ふん。私は私の道を行く。空虚な栄光など必要ない。",
						"chinese": "哼。我走我的路。我不需要虚假的荣耀。",
						"french": "Hmph. Je suis mon propre chemin. Je n'ai pas besoin de gloire illusoire.",
						"spanish": "Hmph. Sigo mi propio camino. No necesito gloria vana.",
						"vietnamese": "Hừ. Ta đi con đường của riêng ta. Ta không cần vinh quang hão huyền.",
						"thai": "หึ. ข้าจะไปตามทางของข้า. ข้าไม่ต้องการเกียรติยศที่ว่างเปล่า.",
						"hindi": "हम्म। मैं अपने रास्ते पर चलता हूँ। मुझे झूठी शान की जरूरत नहीं है।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "ivar"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "길은 더욱 깊어졌다. 돌아갈 수 없는 길이었다.",
						"english": "The path deepened further. It was a path of no return.",
						"japanese": "道はさらに深まった。もう戻れない道だった。",
						"chinese": "道路变得更深了。这是一条无法回头的路。",
						"french": "Le chemin s'est approfondi. C'était un chemin sans retour.",
						"spanish": "El camino se hizo más profundo. Era un camino sin retorno.",
						"vietnamese": "Con đường ngày càng sâu hơn. Đó là con đường không thể quay lại.",
						"thai": "เส้นทางลึกขึ้นไปอีก. มันเป็นทางที่ไม่อาจย้อนกลับได้.",
						"hindi": "रास्ता और गहरा हो गया। यह एक ऐसा रास्ता था जहाँ से लौटा नहीं जा सकता था।"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "하찮은 것들… 내 굶주림을 채워라!",
						"english": "Insignificant wretches... Sate my hunger!",
						"japanese": "取るに足らない者どもよ… 我が飢えを満たせ！",
						"chinese": "卑微的家伙们……满足我的饥饿吧！",
						"french": "Misérables créatures... Rassasiez ma faim !",
						"spanish": "¡Insignificantes... saciad mi hambre!",
						"vietnamese": "Những kẻ hèn mọn... Hãy lấp đầy cơn đói của ta!",
						"thai": "พวกไร้ค่า... จงเติมเต็มความหิวโหยของข้า!",
						"hindi": "तुच्छ प्राणियों... मेरी भूख मिटाओ!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "젠장… 이대로 끝낼 수는 없다!",
						"english": "Damn it... I can't end it like this!",
						"japanese": "くそっ… このままでは終われない！",
						"chinese": "该死……不能就这样结束！",
						"french": "Maudit... Je ne peux pas finir comme ça !",
						"spanish": "¡Maldita sea... No puedo terminar así!",
						"vietnamese": "Chết tiệt... Không thể kết thúc như thế này được!",
						"thai": "บ้าเอ๊ย... จะจบแบบนี้ไม่ได้!",
						"hindi": "धिक्कार है... मैं इसे ऐसे खत्म नहीं कर सकता!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "다시… 도전해야 해!",
						"english": "I must... challenge again!",
						"japanese": "もう一度…挑まなければ！",
						"chinese": "必须……再次挑战！",
						"french": "Je dois... retenter ma chance !",
						"spanish": "¡Debo... intentarlo de nuevo!",
						"vietnamese": "Phải... thử thách lại!",
						"thai": "ต้อง... ท้าทายอีกครั้ง!",
						"hindi": "मुझे... फिर से चुनौती देनी होगी!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "저 어리석은 자를 처치하고, 내 진정한 힘을 보여주마!",
						"english": "I'll dispose of that fool and show you my true power!",
						"japanese": "あの愚か者を始末し、我が真の力を見せてやろう！",
						"chinese": "我会解决那个蠢货，并展示我真正的力量！",
						"french": "Je vais me débarrasser de cet idiot et te montrer ma vraie puissance !",
						"spanish": "¡Me encargaré de ese tonto y te mostraré mi verdadero poder!",
						"vietnamese": "Ta sẽ xử lý kẻ ngốc đó và cho ngươi thấy sức mạnh thật sự của ta!",
						"thai": "ข้าจะกำจัดเจ้าคนโง่นั่น แล้วแสดงพลังที่แท้จริงของข้าให้ดู!",
						"hindi": "मैं उस मूर्ख को खत्म करूँगा, और तुम्हें अपनी असली शक्ति दिखाऊँगा!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "{random_boss}가 나타났어!",
						"english": "{random_boss} appeared!",
						"japanese": "{random_boss}が現れた！",
						"chinese": "{random_boss}出现了！",
						"french": "{random_boss} est apparu !",
						"spanish": "¡{random_boss} ha aparecido!",
						"vietnamese": "{random_boss} đã xuất hiện!",
						"thai": "{random_boss} ปรากฏตัวแล้ว!",
						"hindi": "{random_boss} प्रकट हुआ!"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "강함의 끝. 네가 나를 시험하는가?",
						"english": "The pinnacle of strength. Do you challenge me?",
						"japanese": "強さの極み。貴様が私を試すのか？",
						"chinese": "力量的尽头。你是在考验我吗？",
						"french": "L'apogée de la force. Me défies-tu ?",
						"spanish": "El culmen de la fuerza. ¿Me estás poniendo a prueba?",
						"vietnamese": "Đỉnh cao của sức mạnh. Ngươi đang thử thách ta sao?",
						"thai": "ที่สุดของความแข็งแกร่ง. เจ้ากำลังทดสอบข้าหรือ?",
						"hindi": "शक्ति का अंत। क्या तुम मुझे परख रहे हो?"
					},
					"speaker": "ivar"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "크르릉… 네놈들의 영광은 여기서 끝이다!",
						"english": "Grrr… Your glory ends here!",
						"japanese": "グルル…お前たちの栄光はここで終わりだ！",
						"chinese": "吼……你们的荣耀到此为止了！",
						"french": "Grrr… Votre gloire s'arrête ici !",
						"spanish": "Grrr… ¡Vuestra gloria termina aquí!",
						"vietnamese": "Grừ… Vinh quang của các ngươi kết thúc tại đây!",
						"thai": "ครืน… เกียรติยศของพวกแกจบลงแค่นี้!",
						"hindi": "ग्र्र्र्र… तुम्हारी शान यहीं खत्म होती है!"
					},
					"speaker": "random_boss"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "내 고통은… 끝나지 않아…! 모자는… 너희를 삼킬 것이다…!",
						"english": "My suffering… it never ends…! The Hat… will devour you all…!",
						"japanese": "我が苦痛は…終わらない…！帽子は…お前たちを食らい尽くすだろう…！",
						"chinese": "我的痛苦……永无止境……！帽子……会吞噬你们所有人……！",
						"french": "Ma souffrance… ne finit jamais…! Le Chapeau… vous dévorera tous…!",
						"spanish": "Mi sufrimiento… no termina…! ¡El Sombrero… os devorará a todos…!",
						"vietnamese": "Nỗi đau của ta… không bao giờ kết thúc…! Chiếc mũ… sẽ nuốt chửng các ngươi…!",
						"thai": "ความเจ็บปวดของข้า… ไม่มีวันสิ้นสุด…! หมวก… จะกลืนกินพวกเจ้าทั้งหมด…!",
						"hindi": "मेरा दर्द… खत्म नहीं होता…! टोपी… तुम सबको निगल जाएगी…!"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "이게 끝이 아니라는 건가.",
						"english": "This isn't the end, is it?",
						"japanese": "これが終わりじゃないのか。",
						"chinese": "这不是结束，是吗？",
						"french": "Ce n'est pas la fin, n'est-ce pas ?",
						"spanish": "¿Esto no es el final, verdad?",
						"vietnamese": "Đây không phải là kết thúc, phải không?",
						"thai": "นี่ไม่ใช่จุดจบใช่ไหม",
						"hindi": "यह अंत नहीं है, है ना?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "모자가… 더 강해진 것 같아.",
						"english": "The Hat... it feels stronger.",
						"japanese": "帽子が…もっと強くなったようだ。",
						"chinese": "帽子……好像变得更强了。",
						"french": "Le Chapeau... il semble plus fort.",
						"spanish": "El Sombrero... parece más fuerte.",
						"vietnamese": "Cái Mũ... có vẻ mạnh hơn rồi.",
						"thai": "หมวก... ดูเหมือนจะแข็งแกร่งขึ้น",
						"hindi": "टोपी... और मजबूत हो गई है।"
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "승리했지만, 모자의 그림자는 더욱 깊어졌다. 그들은 진실을 쫓아 더 나아가야 했다.",
						"english": "Victory was theirs, but the Hat's shadow deepened. They had to press on, chasing the truth.",
						"japanese": "勝利したが、帽子の影はさらに深まった。彼らは真実を追い求めて、さらに進まなければならなかった。",
						"chinese": "虽然胜利了，但帽子的阴影却更深了。他们必须继续前进，追逐真相。",
						"french": "La victoire était à eux, mais l'ombre du Chapeau s'épaississait. Ils devaient continuer, à la poursuite de la vérité.",
						"spanish": "La victoria fue suya, pero la sombra del Sombrero se profundizó. Debían seguir adelante, persiguiendo la verdad.",
						"vietnamese": "Chiến thắng đã đến, nhưng cái bóng của Chiếc Mũ ngày càng sâu hơn. Họ phải tiếp tục, truy đuổi sự thật.",
						"thai": "ชัยชนะเป็นของพวกเขา แต่เงาของหมวกกลับลึกขึ้น พวกเขาต้องก้าวต่อไป ไล่ล่าความจริง",
						"hindi": "विजय उनकी थी, पर टोपी की छाया और गहरी हो गई। उन्हें सच की तलाश में आगे बढ़ना था।"
					}
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"북방 설원의 밤은 잔혹했다.",
			"낡은 모자, 그럼프는 힘을 과시했다.",
			"그러나 전사 이바르는 느꼈다. 그 힘 속, 감춰진 고통을.",
			"이 싸움은 — 단순히 강함의 증명이 아니었다."
		],
		"english": [
			"The night in the northern snowfield was cruel.",
			"The old hat, Grump, flaunted its power.",
			"But the warrior Ivar sensed the hidden pain within that power.",
			"This fight was—more than a mere display of strength."
		],
		"japanese": [
			"北方雪原の夜は残酷だった。",
			"古い帽子、グランプは力を誇示した。",
			"しかし、戦士イヴァールは感じていた。その力の中に、隠された苦痛を。",
			"この戦いは—単なる強さの証明ではなかった。"
		],
		"chinese": [
			"北方雪原的夜晚是残酷的。",
			"旧帽子，格兰普，炫耀着它的力量。",
			"然而，战士伊瓦尔感受到了。那力量中，隐藏的痛苦。",
			"这场战斗——不仅仅是力量的证明。"
		],
		"french": [
			"La nuit dans les étendues neigeuses du nord était cruelle.",
			"Le vieux chapeau, Grump, exhibait sa puissance.",
			"Mais le guerrier Ivar sentit la douleur cachée au sein de cette puissance.",
			"Ce combat n'était pas — une simple preuve de force."
		],
		"spanish": [
			"La noche en el páramo nevado del norte era cruel.",
			"El viejo sombrero, Grump, hacía alarde de su poder.",
			"Pero el guerrero Ivar sintió el dolor oculto dentro de ese poder.",
			"Esta lucha no era — meramente una prueba de fuerza."
		],
		"vietnamese": [
			"Đêm trên tuyết nguyên phương Bắc thật tàn khốc.",
			"Chiếc mũ cũ, Grump, phô trương sức mạnh.",
			"Nhưng chiến binh Ivar cảm nhận được. Nỗi đau giấu kín trong sức mạnh đó.",
			"Cuộc chiến này – không chỉ là minh chứng cho sức mạnh."
		],
		"thai": [
			"ค่ำคืนในทุ่งหิมะทางเหนือช่างโหดร้าย.",
			"หมวกเก่าๆ อย่างกรัมป์อวดอ้างพลัง.",
			"แต่ยอดนักรบไอบาร์สัมผัสได้ถึงความเจ็บปวดที่ซ่อนอยู่ในพลังนั้น.",
			"การต่อสู้นี้—ไม่ใช่เพียงแค่การพิสูจน์ความแข็งแกร่ง."
		],
		"hindi": [
			"उत्तरी बर्फीले मैदान की रात क्रूर थी।",
			"पुरानी टोपी, ग्रंप, अपनी शक्ति का प्रदर्शन कर रही थी।",
			"परंतु योद्धा इवार ने महसूस किया। उस शक्ति में छिपा दर्द।",
			"यह लड़ाई — महज़ शक्ति का प्रमाण नहीं थी।"
		]
	}
} as const;
