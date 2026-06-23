export const scenario_snowy_melodia_22_04 = {
	"scenario_id": "snowy_melodia_22_04",
	"order": 4,
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
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "오래된 유적지. 바람 소리에 뼈 부딪히는 소리가 섞여 울렸다.",
						"english": "Old ruins. The sound of wind mixed with the clatter of bones.",
						"japanese": "古い遺跡。風の音に骨がぶつかる音が混じり響いた。",
						"chinese": "古老的遗迹。风声中夹杂着骨头碰撞的声音。",
						"french": "Vieilles ruines. Le bruit du vent se mêlait au cliquetis des ossements.",
						"spanish": "Antiguas ruinas. El sonido del viento se mezclaba con el chasquido de los huesos.",
						"vietnamese": "Khu di tích cổ. Tiếng gió lẫn với tiếng xương va vào nhau.",
						"thai": "ซากปรักหักพังเก่าแก่ เสียงลมปะปนกับเสียงกระดูกกระทบกัน",
						"hindi": "पुराने खंडहर। हवा की आवाज़ में हड्डियों के टकराने की आवाज़ मिल रही थी।"
					},
					"speaker": "narrator"
				},
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "ivar",
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "환영한다. 나의 새로운 재료들아.",
						"english": "Welcome. My new materials.",
						"japanese": "ようこそ。私の新しい材料たちよ。",
						"chinese": "欢迎。我的新材料们。",
						"french": "Bienvenue. Mes nouvelles matières.",
						"spanish": "Bienvenidos. Mis nuevos materiales.",
						"vietnamese": "Chào mừng. Những nguyên liệu mới của ta.",
						"thai": "ยินดีต้อนรับ วัตถุดิบใหม่ของฉัน",
						"hindi": "स्वागत है। मेरे नए सामग्रियों।"
					},
					"speaker": "ivar",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…이게 뭐야.",
						"english": "...What is this.",
						"japanese": "…これは何だ。",
						"chinese": "……这是什么。",
						"french": "...Qu'est-ce que c'est.",
						"spanish": "...¿Qué es esto?",
						"vietnamese": "…Cái gì thế này.",
						"thai": "…นี่มันอะไร",
						"hindi": "...यह क्या है।"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "보이지 않나? 죽은 자들의 가장 아름다운 흔적.",
						"english": "Can't you see? The most beautiful trace of the dead.",
						"japanese": "見えないか？死者たちの最も美しい痕跡が。",
						"chinese": "难道你看不见吗？死者最美丽的痕迹。",
						"french": "Tu ne vois pas ? La plus belle trace des morts.",
						"spanish": "¿No lo ves? El rastro más hermoso de los muertos.",
						"vietnamese": "Ngươi không thấy sao? Dấu vết đẹp nhất của người đã chết.",
						"thai": "ไม่เห็นหรือ? ร่องรอยที่สวยงามที่สุดของผู้ตาย",
						"hindi": "क्या तुम्हें नहीं दिख रहा? मृतकों का सबसे सुंदर निशान।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그들의 비명, 고통, 후회… 모두 여기에 영원히 남는다.",
						"english": "Their screams, pain, regret… all remain here forever.",
						"japanese": "彼らの悲鳴、苦痛、後悔…すべてがここに永遠に残る。",
						"chinese": "他们的尖叫、痛苦、后悔……都将永远留在这里。",
						"french": "Leurs cris, leur douleur, leurs regrets… tout reste ici pour toujours.",
						"spanish": "Sus gritos, dolor, arrepentimiento… todo permanece aquí para siempre.",
						"vietnamese": "Tiếng thét, nỗi đau, sự hối tiếc của họ… tất cả đều ở lại đây mãi mãi.",
						"thai": "เสียงกรีดร้อง ความเจ็บปวด ความเสียใจของพวกเขา… ทั้งหมดจะยังคงอยู่ที่นี่ตลอดไป",
						"hindi": "उनकी चीखें, दर्द, पछतावा… सब कुछ यहाँ हमेशा के लिए रहता है।"
					},
					"speaker": "ivar",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "ivar",
					"spot": [
						3,
						3
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "멜로디아님은 강함을 원하신다. 가장 순수하고 강렬한 소리를.",
						"english": "Lady Melodia desires strength. The purest, most intense sound.",
						"japanese": "メロディア様は強さを求めている。最も純粋で強烈な音を。",
						"chinese": "梅洛迪亚大人渴望力量。最纯粹、最强烈的声音。",
						"french": "Dame Melodia désire la force. Le son le plus pur et le plus intense.",
						"spanish": "Lady Melodia desea fuerza. El sonido más puro e intenso.",
						"vietnamese": "Nữ thần Melodia khao khát sức mạnh. Âm thanh thuần khiết và mãnh liệt nhất.",
						"thai": "ท่านเมโลเดียปรารถนาความแข็งแกร่ง เสียงที่บริสุทธิ์และรุนแรงที่สุด",
						"hindi": "लेडी मेलोडिया शक्ति चाहती है। सबसे शुद्ध, सबसे तीव्र ध्वनि।"
					},
					"speaker": "ivar",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "당신은 그저 시체들을 가지고 노는 미치광이야!",
						"english": "You're just a madman playing with corpses!",
						"japanese": "お前はただの死体で遊ぶ狂人だ！",
						"chinese": "你只是个玩弄尸体的疯子！",
						"french": "Tu n'es qu'un fou qui joue avec des cadavres !",
						"spanish": "¡Solo eres un loco jugando con cadáveres!",
						"vietnamese": "Ngươi chỉ là một tên điên đùa giỡn với xác chết!",
						"thai": "แกมันก็แค่คนบ้าที่เล่นกับศพ!",
						"hindi": "तुम बस लाशों से खेलने वाले एक पागल हो!"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "happy",
					"speaker": "ivar",
					"content": {
						"korean": "크크… 무지한 자. 이 소리들이 그들을 영원히 살아있게 하는 것이다!",
						"english": "Hehe... Ignorant fool. These sounds keep them alive forever!",
						"japanese": "クク… 無知な者め。この音たちが彼らを永遠に生かし続けるのだ！",
						"chinese": "呵呵… 无知之徒。这些声音让他们永远活着！",
						"french": "Hehe... Ignorant. Ces sons les gardent en vie pour toujours !",
						"spanish": "Jeje... Ignorante. ¡Estos sonidos los mantienen vivos para siempre!",
						"vietnamese": "Khà khà… Kẻ ngu dốt. Những âm thanh này giữ cho họ sống mãi mãi!",
						"thai": "หึหึ… เจ้าคนโง่ เสียงเหล่านี้แหละที่ทำให้พวกเขามีชีวิตอยู่ตลอดไป!",
						"hindi": "हीही... अज्ञानी मूर्ख। ये ध्वनियाँ उन्हें हमेशा के लिए जीवित रखती हैं!"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "네 안에도 아주 좋은 소리가 흐르는군. 탐나는군… 너의 기억 속 비명.",
						"english": "A very fine sound flows within you too. Tempting... The scream in your memories.",
						"japanese": "お前の中にも素晴らしい音が流れているな。そそられる… お前の記憶の中の悲鳴。",
						"chinese": "你体内也流淌着美妙的声音。真诱人… 你记忆中的尖叫。",
						"french": "Un très beau son coule aussi en toi. Tentant... Le cri dans tes souvenirs.",
						"spanish": "También un sonido muy fino fluye dentro de ti. Tentador... El grito en tus recuerdos.",
						"vietnamese": "Bên trong ngươi cũng có một âm thanh rất hay. Thật hấp dẫn… Tiếng thét trong ký ức của ngươi.",
						"thai": "ในตัวเจ้าก็มีเสียงที่ไพเราะไหลเวียนอยู่ น่าปรารถนา… เสียงกรีดร้องในความทรงจำของเจ้า",
						"hindi": "तुम्हारे अंदर भी एक बहुत अच्छी ध्वनि बह रही है। लोभनीय... तुम्हारी यादों में चीख।"
					},
					"speaker": "ivar",
					"type": "speech",
					"emotion": "base"
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
					"speaker": "ivar",
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이 뼈들은 말이다… 그들의 마지막 순간을 담고 있지.",
						"english": "These bones... they hold their final moments.",
						"japanese": "この骨たちは… 彼らの最期の瞬間を宿している。",
						"chinese": "这些骨头… 它们承载着他们最后的时刻。",
						"french": "Ces os... ils contiennent leurs derniers instants.",
						"spanish": "Estos huesos... contienen sus últimos momentos.",
						"vietnamese": "Những bộ xương này… chúng chứa đựng khoảnh khắc cuối cùng của họ.",
						"thai": "กระดูกเหล่านี้… พวกมันเก็บช่วงเวลาสุดท้ายของพวกเขาไว้",
						"hindi": "ये हड्डियाँ... वे उनके अंतिम क्षणों को समेटे हुए हैं।"
					},
					"speaker": "ivar",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "정신 나간 소리 그만 해!",
						"english": "Stop with that insane talk!",
						"japanese": "気の狂ったこと言うのはやめろ！",
						"chinese": "别再胡言乱语了！",
						"french": "Arrête ces divagations !",
						"spanish": "¡Deja de decir locuras!",
						"vietnamese": "Ngừng nói những lời điên rồ đó đi!",
						"thai": "หยุดพูดบ้าๆ ได้แล้ว!",
						"hindi": "वह पागलपन भरी बात बंद करो!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "소용없다. 비명은 이미 갇혔어. 영원히 나를 위한 장식이 된다.",
						"english": "It's useless. The scream is already trapped. It will be an ornament for me forever.",
						"japanese": "無駄だ。悲鳴はもう閉じ込められた。永遠に私のためだけの装飾となる。",
						"chinese": "没用了。尖叫声已经被困住了。它将永远成为我的装饰品。",
						"french": "C'est inutile. Le cri est déjà piégé. Il sera un ornement pour moi pour toujours.",
						"spanish": "Es inútil. El grito ya está atrapado. Será un adorno para mí para siempre.",
						"vietnamese": "Vô ích thôi. Tiếng thét đã bị nhốt rồi. Nó sẽ mãi mãi là món trang sức cho ta.",
						"thai": "ไร้ประโยชน์ เสียงกรีดร้องถูกกักขังไว้แล้ว มันจะเป็นเครื่องประดับสำหรับข้าตลอดไป",
						"hindi": "यह बेकार है। चीख पहले ही फँस चुकी है। यह हमेशा के लिए मेरे लिए एक आभूषण होगा।"
					},
					"speaker": "ivar"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "…비명이라고?",
						"english": "...A scream?",
						"japanese": "…悲鳴だと？",
						"chinese": "…尖叫声？",
						"french": "...Un cri ?",
						"spanish": "...¿Un grito?",
						"vietnamese": "…Tiếng thét sao?",
						"thai": "…เสียงกรีดร้องเหรอ?",
						"hindi": "...एक चीख?"
					},
					"type": "speech"
				},
				{
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "그래. 가장 아름다운 소리지. 네 안에도 아주 가득 차 있더군.",
						"english": "Yes. It's the most beautiful sound. And your inside is full of it too.",
						"japanese": "そうだ。最も美しい音だ。お前の中にもたっぷり詰まっているぞ。",
						"chinese": "是的。这是最美的声音。你体内也充满了它。",
						"french": "Oui. C'est le plus beau son. Et ton intérieur en est aussi rempli.",
						"spanish": "Sí. Es el sonido más hermoso. Y tu interior también está lleno de él.",
						"vietnamese": "Đúng vậy. Đó là âm thanh đẹp nhất. Và bên trong ngươi cũng đầy ắp nó.",
						"thai": "ใช่แล้ว มันคือเสียงที่งดงามที่สุด และในตัวเจ้าก็เต็มไปด้วยมันเช่นกัน",
						"hindi": "हाँ। यह सबसे सुंदर ध्वनि है। और तुम्हारे अंदर भी यह बहुत भरी हुई है।"
					},
					"speaker": "ivar"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"speaker": "ivar",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "이젠 네 차례다. 네 기억 속 후회와 죄책감이 아주 탐나는구나.",
						"english": "Now it's your turn. Your memories of regret and guilt are very tempting.",
						"japanese": "今度は貴様の番だ。貴様の記憶の中の後悔と罪悪感が、実にそそられるな。",
						"chinese": "现在轮到你了。你记忆中的后悔和愧疚，真是太诱人了。",
						"french": "Maintenant, c'est ton tour. Tes souvenirs de regret et de culpabilité sont très tentants.",
						"spanish": "Ahora es tu turno. Tus recuerdos de arrepentimiento y culpa son muy tentadores.",
						"vietnamese": "Bây giờ đến lượt ngươi. Những ký ức hối tiếc và tội lỗi trong ngươi thật sự rất hấp dẫn.",
						"thai": "ตอนนี้ถึงตาเจ้าแล้ว ความทรงจำแห่งความเสียใจและความรู้สึกผิดของเจ้ามันน่าปรารถนาจริงๆ",
						"hindi": "अब तुम्हारी बारी है। तुम्हारे पश्चाताप और अपराधबोध की यादें बहुत लुभावनी हैं।"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…나의 기억을?",
						"english": "...my memories?",
						"japanese": "「…私の記憶を？」",
						"chinese": "“……我的记忆？”",
						"french": "...mes souvenirs ?",
						"spanish": "¿...mis recuerdos?",
						"vietnamese": "...ký ức của ta?",
						"thai": "...ความทรงจำของข้า?",
						"hindi": "...मेरी यादें?"
					}
				},
				{
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "멜로디아님께 바칠 최고의 선물이 될 거야.",
						"english": "It will be the greatest gift for Lady Melodia.",
						"japanese": "「メロディア様への最高の贈り物となるでしょう。」",
						"chinese": "“这将是献给梅洛迪亚大人的最好礼物。”",
						"french": "Ce sera le plus beau des cadeaux pour Dame Melodia.",
						"spanish": "Será el mejor regalo para Lady Melodia.",
						"vietnamese": "Đây sẽ là món quà tuyệt vời nhất dâng lên Đức Nữ Melodia.",
						"thai": "นี่จะเป็นของขวัญที่ดีที่สุดสำหรับท่านหญิงเมโลเดีย",
						"hindi": "यह लेडी मेलोडिया के लिए सबसे बड़ा उपहार होगा।"
					},
					"emotion": "happy"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "내 기억은 네 것이 아니야!",
						"english": "My memories are not yours!",
						"japanese": "「私の記憶はあなたのものじゃない！」",
						"chinese": "“我的记忆不是你的！”",
						"french": "Mes souvenirs ne sont pas les tiens !",
						"spanish": "¡Mis recuerdos no son tuyos!",
						"vietnamese": "Ký ức của ta không phải của ngươi!",
						"thai": "ความทรงจำของข้าไม่ใช่ของเจ้า!",
						"hindi": "मेरी यादें तुम्हारी नहीं हैं!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "어리석은 것. 네가 이곳에 온 순간부터 이미 나의 것이었다.",
						"english": "Foolish one. From the moment you arrived here, they were already mine.",
						"japanese": "「愚か者め。お前がここに来た瞬間から、すでに私のものだったのだ。」",
						"chinese": "“愚蠢的东西。从你来到这里的那一刻起，它们就已经属于我了。”",
						"french": "Imbécile. Dès l'instant où tu es venu ici, ils étaient déjà miens.",
						"spanish": "Tonto. Desde el momento en que llegaste aquí, ya eran míos.",
						"vietnamese": "Kẻ ngu ngốc. Ngươi đã là của ta ngay từ khoảnh khắc ngươi đến đây.",
						"thai": "เจ้าโง่ ตั้งแต่เจ้ามาที่นี่ ทุกอย่างก็เป็นของข้าแล้ว",
						"hindi": "मूर्ख। जिस क्षण तुम यहाँ आए, वे पहले से ही मेरे थे।"
					}
				}
			]
		},
		{
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "크흐… 이 정도인가. 아직… 한참 부족하다.",
						"english": "Hmph… Is this all? Still… far from enough.",
						"japanese": "クフ… この程度か。まだ… 全然足りない。",
						"chinese": "呵… 就这点本事？还… 远远不够。",
						"french": "Khh… C'est tout ce que tu as ? Ce n'est… pas encore assez.",
						"spanish": "Jm… ¿Esto es todo? Aún… falta mucho.",
						"vietnamese": "Khụ… Chỉ có thế này thôi sao. Vẫn còn… kém xa lắm.",
						"thai": "คึคึ… แค่นี้เองรึ ยัง… ห่างไกลนัก.",
						"hindi": "उफ़... बस इतना ही? अभी… बहुत कम है।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "네 고통… 멜로디아님은 더 깊은 것을 원하신다.",
						"english": "Your suffering… Melodia desires something deeper.",
						"japanese": "お前の苦痛… メロディア様はもっと深いものを望んでおられる。",
						"chinese": "你的痛苦… 梅洛迪亚大人渴望更深层次的东西。",
						"french": "Ta souffrance… Melodia désire quelque chose de plus profond.",
						"spanish": "Tu dolor… Melodia desea algo más profundo.",
						"vietnamese": "Nỗi đau của ngươi… Nữ thần Melodia khao khát thứ gì đó sâu sắc hơn.",
						"thai": "ความทุกข์ทรมานของเจ้า… เมโลเดียต้องการสิ่งที่ลึกซึ้งกว่านั้น.",
						"hindi": "तुम्हारा दर्द... मेलोडिया और गहरा दर्द चाहती हैं।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "헛소리 마! 네 마음대로 되지 않을 거야!",
						"english": "Nonsense! You won't have your way!",
						"japanese": "でまかせを言うな！お前の思い通りにはさせない！",
						"chinese": "休想！不会让你得逞的！",
						"french": "N'importe quoi ! Tu n'auras pas ce que tu veux !",
						"spanish": "!Tonterías! ¡No será como tú quieras!",
						"vietnamese": "Đừng nói xàm! Ngươi sẽ không được như ý đâu!",
						"thai": "เหลวไหล! มันจะไม่ได้เป็นไปตามใจเจ้าหรอก!",
						"hindi": "बकवास मत करो! तुम्हारी मर्जी नहीं चलेगी!"
					},
					"type": "speech"
				},
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"speaker": "ivar",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "흥… 시시하군. 아직 너의 진정한 비명을 듣지 못했다.",
						"english": "Hmph… How boring. I haven't heard your true scream yet.",
						"japanese": "フン… つまらんな。まだお前の真の悲鳴を聞いていない。",
						"chinese": "哼… 真无趣。还没听到你真正的尖叫。",
						"french": "Hmm… Quelle déception. Je n'ai pas encore entendu ton véritable cri.",
						"spanish": "Hmpf… Qué aburrido. Todavía no he oído tu verdadero grito.",
						"vietnamese": "Hừm… Chán phèo. Ta vẫn chưa nghe thấy tiếng thét chân thật của ngươi.",
						"thai": "หึ… น่าเบื่อชะมัด. ข้ายังไม่ได้ยินเสียงกรีดร้องที่แท้จริงของเจ้าเลย.",
						"hindi": "हुंह… कितना नीरस। अभी तक तुम्हारी असली चीख नहीं सुनी।"
					},
					"speaker": "ivar",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "멜로디아님은… 네 안의 가장 깊은 곳을 꿰뚫어 보실 것이다.",
						"english": "Melodia… will see through to your deepest core.",
						"japanese": "メロディア様は… お前の内なる最も深い場所を見通されるだろう。",
						"chinese": "梅洛迪亚大人… 将洞悉你内心最深处。",
						"french": "Melodia… sondera les profondeurs de ton être.",
						"spanish": "Melodia… verá a través de lo más profundo de ti.",
						"vietnamese": "Nữ thần Melodia… sẽ thấu suốt tận sâu thẳm trong ngươi.",
						"thai": "เมโลเดีย… จะมองทะลุปรุโปร่งไปถึงส่วนที่ลึกที่สุดในตัวเจ้า.",
						"hindi": "मेलोडिया... तुम्हारे भीतर की सबसे गहरी चीज़ को भेद देंगी।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "exit",
					"speaker": "ivar",
					"direction": "down",
					"duration_ms": 400
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "이바르는 사라졌다. 그러나 그의 말은 뼈처럼 시린 메아리로 남았다.",
						"english": "Ivar vanished. His words, a bone-chilling echo, remained.",
						"japanese": "イヴァルは消えた。しかし彼の言葉は、骨のように冷たい残響として残った。",
						"chinese": "伊瓦尔消失了。然而他的话语，却像穿透骨髓的寒冷回声，久久不散。",
						"french": "Ivar a disparu. Mais ses mots demeuraient, un écho glacial et perçant.",
						"spanish": "Ivar desapareció. Pero sus palabras quedaron, como un eco helado que cala hasta los huesos.",
						"vietnamese": "Ivar đã biến mất. Nhưng lời của hắn vẫn còn đó, vọng lại lạnh lẽo như thấu xương.",
						"thai": "อีวาร์หายไปแล้ว. แต่คำพูดของเขาคงอยู่, เป็นเสียงสะท้อนที่เยือกเย็นราวกับกระดูก.",
						"hindi": "ईवार गायब हो गया। लेकिन उसके शब्द हड्डियों जैसी ठंडी गूँज बनकर रह गए।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "멜로디아… 그 이름이 서서히 현실로 다가왔다.",
						"english": "Melodia… The name slowly became reality.",
						"japanese": "メロディア… その名前が、ゆっくりと現実へと近づいてきた。",
						"chinese": "梅洛迪亚… 这个名字，正缓缓地化为现实。",
						"french": "Melodia… ce nom se rapprochait lentement de la réalité.",
						"spanish": "Melodia… ese nombre se acercaba lentamente a la realidad.",
						"vietnamese": "Melodia… cái tên ấy dần dần trở thành hiện thực.",
						"thai": "เมโลเดีย… ชื่อนั้นค่อยๆ กลายเป็นความจริง.",
						"hindi": "मेलोडिया... वह नाम धीरे-धीरे हकीकत बन रहा था।"
					}
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "기괴한 뼈 조각상이 춤추는 공간. 기분 나쁜 침묵이 흘렀다.",
						"english": "A space where grotesque bone sculptures danced. An unsettling silence hung in the air.",
						"japanese": "「奇怪な骨の彫像が踊る空間。不気味な沈黙が流れていた。」",
						"chinese": "“一个怪诞的骨雕在舞动的空间。令人不安的寂静弥漫着。”",
						"french": "Un espace où des sculptures d'os grotesques dansaient. Un silence inquiétant régnait.",
						"spanish": "Un espacio donde extrañas esculturas de huesos danzaban. Un silencio incómodo se cernía.",
						"vietnamese": "Một không gian nơi những bức tượng xương kỳ dị nhảy múa. Một sự im lặng đáng sợ bao trùm.",
						"thai": "ห้องที่เต็มไปด้วยรูปปั้นกระดูกประหลาดกำลังเต้นรำ ความเงียบอันไม่น่าอภิรมย์ปกคลุมอยู่",
						"hindi": "एक ऐसी जगह जहाँ grotesque हड्डी की मूर्तियाँ नाच रही थीं। एक असहज चुप्पी छाई हुई थी।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "ivar",
					"spot": [
						2,
						3
					]
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "이제 더 이상 도망칠 곳은 없다. 너의 모든 것을 내게 바쳐라.",
						"english": "There is no escape now. Surrender everything to me.",
						"japanese": "「もう逃げ場はない。お前のすべてを私に捧げろ。」",
						"chinese": "“现在已无处可逃。将你的一切都献给我吧。”",
						"french": "Il n'y a plus d'échappatoire. Offre-moi tout ce que tu as.",
						"spanish": "Ya no hay escape. Entrégame todo lo tuyo.",
						"vietnamese": "Giờ ngươi không còn nơi nào để trốn thoát. Dâng hiến mọi thứ của ngươi cho ta.",
						"thai": "ไม่มีทางหนีแล้ว จงมอบทุกสิ่งของเจ้าให้ข้า",
						"hindi": "अब भागने की कोई जगह नहीं है। अपना सब कुछ मुझे सौंप दो।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "절대 안 돼!",
						"english": "Never!",
						"japanese": "「絶対ダメだ！」",
						"chinese": "“绝不！”",
						"french": "Jamais !",
						"spanish": "¡Jamás!",
						"vietnamese": "Tuyệt đối không!",
						"thai": "ไม่มีทาง!",
						"hindi": "कभी नहीं!"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "크크… 순순히 바치지 않겠다면, 이 분이 도와주실 거다.",
						"english": "Heh heh... If you won't surrender willingly, this one will help you.",
						"japanese": "「クク…素直に捧げないというなら、この方が手伝ってくれるだろう。」",
						"chinese": "“呵呵……如果你不肯乖乖献出，这位会帮你。”",
						"french": "Heh heh... Si tu ne te rends pas de bon gré, celui-ci t'aidera.",
						"spanish": "Je je... Si no te entregas voluntariamente, este te ayudará.",
						"vietnamese": "Khà khà... Nếu ngươi không tự nguyện dâng hiến, vị này sẽ giúp ngươi.",
						"thai": "ฮึๆ... ถ้าเจ้าไม่ยอมมอบให้โดยดี ท่านผู้นี้จะช่วยเจ้าเอง",
						"hindi": "हँ हँ... यदि तुम स्वेच्छा से समर्पण नहीं करोगे, तो यह तुम्हारी मदद करेगा।"
					},
					"type": "speech",
					"emotion": "happy"
				},
				{
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 눈앞을 가렸다.",
						"english": "A colossal shadow loomed before my eyes.",
						"japanese": "「巨大な影が目の前を遮った。」",
						"chinese": "“巨大的阴影遮蔽了眼前。”",
						"french": "Une ombre colossale barra ma vue.",
						"spanish": "Una sombra colosal cubrió mi vista.",
						"vietnamese": "Một cái bóng khổng lồ che khuất tầm mắt.",
						"thai": "เงาขนาดมหึมาบดบังอยู่ตรงหน้า",
						"hindi": "एक विशाल छाया मेरी आँखों के सामने छा गई।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 것… 네 존재 자체가 이곳의 재료일 뿐.",
						"english": "Foolish one... Your very existence is merely material for this place.",
						"japanese": "「愚か者め…お前の存在そのものが、ここの材料に過ぎないのだ。」",
						"chinese": "“愚蠢的东西……你的存在本身不过是这里的材料。”",
						"french": "Imbécile... Ton existence même n'est qu'un matériau pour cet endroit.",
						"spanish": "Tonto... Tu existencia misma es solo material para este lugar.",
						"vietnamese": "Kẻ ngu ngốc... Sự tồn tại của ngươi chỉ là nguyên liệu cho nơi này.",
						"thai": "เจ้าโง่... การมีอยู่ของเจ้าเป็นเพียงแค่วัตถุดิบสำหรับที่นี่",
						"hindi": "मूर्ख... तुम्हारा अस्तित्व ही इस जगह के लिए केवल एक सामग्री है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "비명으로 가두려는 거라면… 그럴 일 없어!",
						"english": "Screams won't trap me! Never!",
						"japanese": "悲鳴で閉じ込めるつもりなら… 無駄だ！",
						"chinese": "妄想用尖叫困住我？休想！",
						"french": "Si tu comptes m'enfermer avec des cris… Jamais !",
						"spanish": "¿Si piensas encerrarme con gritos? ¡Nunca!",
						"vietnamese": "Nếu định nhốt ta bằng tiếng thét… Vô ích thôi!",
						"thai": "ถ้าคิดจะขังข้าด้วยเสียงกรีดร้อง… ไม่มีทาง!",
						"hindi": "अगर चीखों से कैद करना चाहते हो... ऐसा नहीं होगा!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "ivar",
					"duration_ms": 400,
					"direction": "up",
					"type": "direction",
					"action": "exit"
				},
				{
					"content": {
						"korean": "네 비명은… 최고의 장식이 될 것이다.",
						"english": "Your screams… my finest adornment.",
						"japanese": "お前の悲鳴は… 最高の装飾になるだろう。",
						"chinese": "你的尖叫… 将成为最完美的装饰。",
						"french": "Tes cris… seront le plus bel ornement.",
						"spanish": "Tus gritos… serán el mejor adorno.",
						"vietnamese": "Tiếng thét của ngươi… sẽ là món trang sức tuyệt vời nhất.",
						"thai": "เสียงกรีดร้องของเจ้า… จะเป็นเครื่องประดับชั้นยอดที่สุด.",
						"hindi": "तुम्हारी चीखें... सबसे बेहतरीन आभूषण बनेंगी।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "약하군… 너의 비명은 겨우 이것뿐인가?",
						"english": "Weak… Is this all your scream?",
						"japanese": "弱いな… お前の悲鳴はこれだけか？",
						"chinese": "真弱… 你的尖叫就只有这些吗？",
						"french": "Faible… Ce n'est que ça, ton cri ?",
						"spanish": "Débil… ¿Es esto todo lo que gritas?",
						"vietnamese": "Yếu quá… Tiếng thét của ngươi chỉ có thế thôi sao?",
						"thai": "อ่อนแอ… เสียงกรีดร้องของเจ้ามีแค่นี้เองหรือ?",
						"hindi": "कमजोर... तुम्हारी चीखें बस इतनी ही हैं?"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "아직 멀었다. 너의 기억은 나에게 최고의 장식이 될 것이다!",
						"english": "Not good enough. Your memories will be my grandest adornment!",
						"japanese": "まだまだだ。お前の記憶は、俺の最高の飾りとなるだろう！",
						"chinese": "还差得远。你的记忆将成为我最棒的装饰！",
						"french": "Loin d'être à la hauteur. Tes souvenirs seront mon plus bel ornement !",
						"spanish": "Aún te falta mucho. ¡Tus recuerdos serán mi mejor adorno!",
						"vietnamese": "Còn lâu mới được. Ký ức của ngươi sẽ là vật trang trí tuyệt vời nhất của ta!",
						"thai": "ยังห่างไกลนัก ความทรงจำของเจ้าจะเป็นเครื่องประดับชิ้นเยี่ยมที่สุดของข้า!",
						"hindi": "अभी बहुत दूर हो। तुम्हारी यादें मेरे लिए सबसे बेहतरीन आभूषण होंगी!"
					},
					"speaker": "ivar",
					"type": "speech",
					"emotion": "happy"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "…다시 돌아올 거야. 내 기억은 내가 지켜!",
						"english": "...I'll be back. I'll protect my memories!",
						"japanese": "…必ず戻ってくる。私の記憶は、私が守る！",
						"chinese": "…我会再回来的。我的记忆由我自己守护！",
						"french": "...Je reviendrai. Je protégerai mes souvenirs !",
						"spanish": "...Volveré. ¡Protegeré mis recuerdos!",
						"vietnamese": "...Ta sẽ quay lại. Ký ức của ta, ta sẽ tự bảo vệ!",
						"thai": "...ข้าจะกลับมา ความทรงจำของข้า ข้าจะปกป้องเอง!",
						"hindi": "...मैं वापस आऊँगा। अपनी यादों की रक्षा मैं खुद करूँगा!"
					},
					"speaker": "character_any"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"고대 유적지, 뼈로 만들어진 기묘한 풍경이 펼쳐졌다.",
			"이바르는 그곳에서 죽은 자들의 비명을 수집하고 있었다.",
			"그는 그것을 '영원한 아름다움'이라 불렀다.",
			"하지만 그 소리는… 고통이었다. 갇혀버린 영혼들의.",
			"그리고 그는 이제, 나의 기억을 탐낸다."
		],
		"english": [
			"Ancient ruins, a bizarre landscape made of bones unfolded.",
			"Ivar was collecting the screams of the dead there.",
			"He called it 'Eternal Beauty'.",
			"But that sound… was pain. Of trapped souls.",
			"And now, he covets my memories."
		],
		"japanese": [
			"古代遺跡、骨でできた奇妙な風景が広がっていた。",
			"イヴァルはそこで死者の悲鳴を集めていた。",
			"彼はそれを「永遠の美」と呼んだ。",
			"しかしその音は…苦痛だった。囚われた魂たちの。",
			"そして彼は今、私の記憶を貪る。"
		],
		"chinese": [
			"古老的遗迹，一片由骨头构成的奇异景象展现在眼前。",
			"伊瓦尔在那里收集着死者的尖叫声。",
			"他称之为‘永恒之美’。",
			"但那声音……是痛苦。被困灵魂的。",
			"而现在，他贪婪地觊觎我的记忆。"
		],
		"french": [
			"Ruines antiques, un paysage étrange fait d'ossements s'étendait.",
			"Ivar y collectait les cris des morts.",
			"Il appelait ça la 'Beauté Éternelle'.",
			"Mais ce son… était douleur. Celle des âmes piégées.",
			"Et maintenant, il convoite mes souvenirs."
		],
		"spanish": [
			"Ruinas antiguas, un paisaje bizarro hecho de huesos se extendía.",
			"Ivar estaba recolectando los gritos de los muertos allí.",
			"Él lo llamaba 'Belleza Eterna'.",
			"Pero ese sonido… era dolor. El de almas atrapadas.",
			"Y ahora, él codicia mis recuerdos."
		],
		"vietnamese": [
			"Khu di tích cổ, một khung cảnh kỳ lạ làm từ xương trải ra.",
			"Ivar đang thu thập tiếng thét của người chết ở đó.",
			"Anh ta gọi đó là 'Vẻ đẹp Vĩnh cửu'.",
			"Nhưng âm thanh đó… là nỗi đau. Của những linh hồn bị mắc kẹt.",
			"Và bây giờ, anh ta thèm muốn ký ức của tôi."
		],
		"thai": [
			"ซากปรักหักพังโบราณ ภูมิประเทศประหลาดที่ทำจากกระดูกได้ปรากฏขึ้น",
			"อีวาร์กำลังเก็บรวบรวมเสียงกรีดร้องของผู้ตายที่นั่น",
			"เขาเรียกมันว่า 'ความงามนิรันดร์'",
			"แต่เสียงนั้น… คือความเจ็บปวด ของวิญญาณที่ถูกขัง",
			"และตอนนี้ เขากำลังโลภความทรงจำของฉัน"
		],
		"hindi": [
			"प्राचीन खंडहर, हड्डियों से बना एक विचित्र परिदृश्य फैला हुआ था。",
			"इवार वहाँ मृतकों की चीखें इकट्ठा कर रहा था।",
			"वह इसे 'शाश्वत सौंदर्य' कहता था।",
			"लेकिन वह आवाज़... दर्द थी। फंसी हुई आत्माओं की।",
			"और अब, वह मेरी यादों पर लालच कर रहा है।"
		]
	}
} as const;
