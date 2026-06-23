export const scenario_desert_sandwalker_25_02 = {
	"scenario_id": "desert_sandwalker_25_02",
	"order": 2,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"ember": {
			"id": "mon_9845a5c0-e558-41cc-979d-91567cb41aa7",
			"name": {
				"korean": "앰버",
				"english": "Ember",
				"japanese": "エンバー",
				"chinese": "余烬",
				"french": "Braise",
				"spanish": "Ascua",
				"vietnamese": "Tàn lửa",
				"thai": "เอมเบอร์",
				"hindi": "अंगारा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/10e60a4c-5b9a-4f2a-a55a-707c0beabe00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5dd50017-3c98-41b2-c8d2-e3e4659ca700/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "모래바람이 쉬지 않고 불었다. 모든 것이 메말라갔다.",
						"english": "Sandstorms raged relentlessly. Everything withered.",
						"japanese": "砂嵐が絶え間なく吹き荒れた。すべてが干からびていった。",
						"chinese": "沙尘暴肆虐不止。万物枯萎。",
						"french": "Les tempêtes de sable faisaient rage. Tout se desséchait.",
						"spanish": "Las tormentas de arena azotaban sin cesar. Todo se marchitaba.",
						"vietnamese": "Bão cát thổi không ngừng. Mọi thứ khô cằn.",
						"thai": "พายุทรายพัดไม่หยุด ทุกสิ่งแห้งเหือด",
						"hindi": "रेत का तूफान बेरोकटोक जारी था। सब कुछ सूख रहा था।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "목마르… 죽을 것 같아.",
						"english": "Thirsty… I might die.",
						"japanese": "喉が渇いて…死にそうだ。",
						"chinese": "好渴…快要死了。",
						"french": "Soif… Je vais mourir.",
						"spanish": "Sed… Moriré.",
						"vietnamese": "Khát… như muốn chết.",
						"thai": "กระหาย… จะตายอยู่แล้ว",
						"hindi": "प्यास… मर जाऊँगा।"
					},
					"emotion": "sad",
					"speaker": "character_1",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "더는… 못 가겠어.",
						"english": "Can't… go on.",
						"japanese": "もう…行けない。",
						"chinese": "再也…走不动了。",
						"french": "Je n'en peux plus…",
						"spanish": "No puedo… más.",
						"vietnamese": "Không… đi được nữa.",
						"thai": "ไม่ไหวแล้ว… ไปต่อไม่ไหว",
						"hindi": "अब और… नहीं जा सकता।"
					},
					"emotion": "sad",
					"speaker": "character_2"
				},
				{
					"speaker": "ember",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					]
				},
				{
					"content": {
						"korean": "여기까지 오셨군요. 지쳐 보이시네요.",
						"english": "You've made it this far. You look exhausted.",
						"japanese": "ここまで来られましたか。お疲れのようですね。",
						"chinese": "您已经走到这里了。看起来很疲惫。",
						"french": "Vous êtes arrivé jusque-là. Vous semblez épuisé.",
						"spanish": "Ha llegado hasta aquí. Parece agotado.",
						"vietnamese": "Ngài đã đến tận đây. Trông ngài có vẻ mệt mỏi.",
						"thai": "มาถึงนี่แล้วหรือ ดูเหนื่อยล้าจัง",
						"hindi": "आप यहाँ तक आ गए। थके हुए लग रहे हैं।"
					},
					"emotion": "base",
					"speaker": "ember",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "누구지?",
						"english": "Who are you?",
						"japanese": "誰だ？",
						"chinese": "你H是谁？",
						"french": "Qui êtes-vous ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Ai đấy?",
						"thai": "ใครน่ะ",
						"hindi": "कौन हो?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "앰버라고 합니다. 사막의 길잡이죠.",
						"english": "I am Amber, a guide of the desert.",
						"japanese": "アンバーと申します。砂漠の道案内です。",
						"chinese": "我是安柏。沙漠的引路人。",
						"french": "Je suis Amber, une guide du désert.",
						"spanish": "Soy Amber, una guía del desierto.",
						"vietnamese": "Tôi là Amber, người dẫn đường sa mạc.",
						"thai": "ฉันชื่อแอมเบอร์ เป็นผู้นำทางแห่งทะเลทราย",
						"hindi": "मैं एम्बर हूँ। रेगिस्तान की पथप्रदर्शक।"
					},
					"emotion": "base",
					"speaker": "ember",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "ember",
					"content": {
						"korean": "단물이 있는 샘터를 알려드릴까요? 아주 가까운 곳에.",
						"english": "Want to know about a sweet spring? It's very close.",
						"japanese": "甘い泉、知りたい？すぐそこだよ。",
						"chinese": "甜水泉，想知道在哪吗？很近哦。",
						"french": "Une source d'eau douce ? Juste à côté.",
						"spanish": "¿Un manantial de agua dulce? Está muy cerca.",
						"vietnamese": "Suối nước ngọt, muốn biết không? Ngay gần đây thôi.",
						"thai": "บ่อน้ำหวาน? ใกล้แค่นี้เอง",
						"hindi": "मीठे पानी का झरना, जानना चाहते हो? बहुत करीब है।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "샘터…?",
						"english": "A spring...?",
						"japanese": "泉…？",
						"chinese": "泉眼…？",
						"french": "Une source... ?",
						"spanish": "¿Un manantial...?",
						"vietnamese": "Suối…?",
						"thai": "บ่อน้ำ...?",
						"hindi": "झरना…?"
					},
					"emotion": "base",
					"speaker": "character_3",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "ember",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "ember",
					"content": {
						"korean": "여기입니다. 마른 맹세의 샘터.",
						"english": "Here it is. The Spring of Dry Vows.",
						"japanese": "ここです。「乾いた誓いの泉」。",
						"chinese": "就是这里。干涸誓言之泉。",
						"french": "La voici. La Source des Serments Desséchés.",
						"spanish": "Aquí está. El Manantial de los Votos Secos.",
						"vietnamese": "Đây rồi. Suối Lời Thề Khô Hạn.",
						"thai": "นี่ไง บ่อน้ำแห้งแล้งแห่งคำสาบาน",
						"hindi": "यह रहा। सूखे प्रणों का झरना।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "투명하고 시원한 물이 솟아났다. 살아있는 듯 반짝였다.",
						"english": "Transparent, cool water gushed forth. It sparkled as if alive.",
						"japanese": "透明で冷たい水が湧き出た。まるで生きているかのように輝いた。",
						"chinese": "透明清凉的水涌了出来。它闪烁着，仿佛有生命一般。",
						"french": "De l'eau transparente et fraîche jaillit. Elle scintillait comme si elle était vivante.",
						"spanish": "Agua transparente y fresca brotó. Brillaba como si estuviera viva.",
						"vietnamese": "Nước trong vắt, mát lạnh tuôn trào. Nó lấp lánh như có sự sống.",
						"thai": "น้ำใสเย็นไหลพุ่งออกมา มันเปล่งประกายราวกับมีชีวิต",
						"hindi": "पारदर्शी, ठंडा पानी फूट निकला। वह जीवित-सा चमक रहा था।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "진짜… 물이다.",
						"english": "It's... real water.",
						"japanese": "本当に…水だ。",
						"chinese": "真是…水。",
						"french": "C'est... de la vraie eau.",
						"spanish": "Es... agua de verdad.",
						"vietnamese": "Thật sự là… nước.",
						"thai": "นี่มัน… น้ำจริงๆ",
						"hindi": "यह तो… असली पानी है।"
					},
					"emotion": "happy"
				},
				{
					"content": {
						"korean": "…이렇게 달 수가.",
						"english": "...It's so sweet.",
						"japanese": "…こんなに甘いとは。",
						"chinese": "……竟然这么甜。",
						"french": "...C'est si doux.",
						"spanish": "...Es tan dulce.",
						"vietnamese": "…Sao mà ngọt thế.",
						"thai": "...หวานอะไรอย่างนี้",
						"hindi": "...इतना मीठा।"
					},
					"emotion": "happy",
					"speaker": "character_1",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "살 것 같아.",
						"english": "I feel alive.",
						"japanese": "生き返るようだ。",
						"chinese": "感觉活过来了。",
						"french": "Je me sens revivre.",
						"spanish": "Me siento vivo/a.",
						"vietnamese": "Tôi thấy sống lại.",
						"thai": "รู้สึกเหมือนได้ชีวิตกลับมา",
						"hindi": "जैसे जान में जान आ गई।"
					},
					"emotion": "happy",
					"speaker": "character_2"
				},
				{
					"type": "speech",
					"speaker": "ember",
					"content": {
						"korean": "어떠세요? 시원하시죠?",
						"english": "How is it? Refreshing, isn't it?",
						"japanese": "いかがですか？涼しいでしょう？",
						"chinese": "怎么样？很凉爽吧？",
						"french": "Comment est-ce ? Rafraîchissant, n'est-ce pas ?",
						"spanish": "¿Qué tal? Refrescante, ¿verdad?",
						"vietnamese": "Thế nào? Mát mẻ chứ?",
						"thai": "เป็นไงบ้าง? สดชื่นใช่ไหม?",
						"hindi": "कैसा लगा? ठंडा लगा ना?"
					},
					"emotion": "happy"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "근데… 팔에 이게 뭐야?",
						"english": "But... what's this on my arm?",
						"japanese": "でも…腕にこれは何だ？",
						"chinese": "不过…胳膊上这是什么？",
						"french": "Mais… qu'est-ce que c'est que ça sur mon bras ?",
						"spanish": "Pero... ¿qué es esto en mi brazo?",
						"vietnamese": "Nhưng mà… cái gì đây trên tay tôi?",
						"thai": "แต่ว่า… นี่อะไรบนแขนเนี่ย?",
						"hindi": "लेकिन… मेरे हाथ पर यह क्या है?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "피부 위에 붉은 반점이 서서히 돋아났다.",
						"english": "Red spots slowly appeared on the skin.",
						"japanese": "皮膚の上に赤い斑点が徐々に現れ始めた。",
						"chinese": "皮肤上慢慢浮现出红色斑点。",
						"french": "Des taches rouges apparurent lentement sur la peau.",
						"spanish": "Manchas rojas aparecieron lentamente en la piel.",
						"vietnamese": "Những đốm đỏ dần dần nổi lên trên da.",
						"thai": "จุดแดงปรากฏขึ้นช้าๆ บนผิวหนัง",
						"hindi": "त्वचा पर धीरे-धीरे लाल धब्बे उभर आए।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아, 그건 사막의 축복입니다.",
						"english": "Oh, that is the desert's blessing.",
						"japanese": "ああ、それは砂漠の祝福です。",
						"chinese": "啊，那是沙漠的祝福。",
						"french": "Ah, c'est la bénédiction du désert.",
						"spanish": "Ah, esa es la bendición del desierto.",
						"vietnamese": "À, đó là phước lành của sa mạc.",
						"thai": "อะ นั่นคือพรของทะเลทราย",
						"hindi": "आह, वह रेगिस्तान का आशीर्वाद है।"
					},
					"emotion": "base",
					"speaker": "ember"
				},
				{
					"content": {
						"korean": "몸에 새겨지는… 진정한 증표죠.",
						"english": "A true mark… etched upon the body.",
						"japanese": "体に刻まれる…真の証です。",
						"chinese": "刻在身上的…真正的印记。",
						"french": "Une véritable marque… gravée sur le corps.",
						"spanish": "Una verdadera marca… grabada en el cuerpo.",
						"vietnamese": "Một dấu ấn thật sự… khắc sâu vào cơ thể.",
						"thai": "เครื่องหมายแท้จริง… ที่ประทับลงบนร่างกาย",
						"hindi": "शरीर पर अंकित… एक सच्चा निशान।"
					},
					"emotion": "happy",
					"speaker": "ember",
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
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "ember"
				},
				{
					"content": {
						"korean": "점점 퍼지고 있어… 따가워.",
						"english": "It's spreading… stinging.",
						"japanese": "広がっていく…痛い。",
						"chinese": "正在扩散…好刺痛。",
						"french": "Ça se propage… ça pique.",
						"spanish": "Se está extendiendo… me pica.",
						"vietnamese": "Nó đang lan rộng… đau nhói.",
						"thai": "มันกำลังลามไป… แสบจัง",
						"hindi": "यह फैल रहा है… जलन हो रही है।"
					},
					"emotion": "sad",
					"speaker": "character_1",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이게 정말 축복이라고?",
						"english": "This is truly a blessing?",
						"japanese": "これが本当に祝福だと？",
						"chinese": "这真是祝福吗？",
						"french": "C'est vraiment une bénédiction ?",
						"spanish": "¿Esto es realmente una bendición?",
						"vietnamese": "Đây thực sự là một phước lành sao?",
						"thai": "นี่คือพรจริงหรือ?",
						"hindi": "क्या यह सचमुच एक आशीर्वाद है?"
					},
					"emotion": "angry",
					"speaker": "character_2",
					"type": "speech"
				},
				{
					"content": {
						"korean": "의심하지 마세요. 사막은 쉽게 자신을 내어주지 않아요.",
						"english": "Do not doubt. The desert does not easily yield itself.",
						"japanese": "疑わないでください。砂漠は容易く自身を明け渡しはしません。",
						"chinese": "不要怀疑。沙漠不会轻易展现自己。",
						"french": "Ne doutez pas. Le désert ne se révèle pas facilement.",
						"spanish": "No dudes. El desierto no se entrega fácilmente.",
						"vietnamese": "Đừng nghi ngờ. Sa mạc không dễ dàng trao đi chính mình đâu.",
						"thai": "อย่าสงสัยเลย ทะเลทรายไม่อนุญาตให้เข้าถึงได้ง่ายๆ หรอก",
						"hindi": "संदेह मत करो। रेगिस्तान आसानी से खुद को नहीं देता।"
					},
					"emotion": "base",
					"speaker": "ember",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이것은 당신이 사막의 일부가 되어간다는 증거.",
						"english": "This is proof that you are becoming part of the desert.",
						"japanese": "これはあなたが砂漠の一部となりつつある証拠です。",
						"chinese": "这是你正在成为沙漠一部分的证据。",
						"french": "C'est la preuve que vous devenez une partie du désert.",
						"spanish": "Esta es la prueba de que te estás convirtiendo en parte del desierto.",
						"vietnamese": "Đây là bằng chứng bạn đang trở thành một phần của sa mạc.",
						"thai": "นี่คือหลักฐานว่าคุณกำลังจะกลายเป็นส่วนหนึ่งของทะเลทราย",
						"hindi": "यह इस बात का प्रमाण है कि आप रेगिस्तान का हिस्सा बन रहे हैं।"
					},
					"emotion": "base",
					"speaker": "ember"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "근데… 저 나뭇가지들 왜 빛나지?",
						"english": "But… why are those branches glowing?",
						"japanese": "でも…あの小枝、なんで光ってるの？",
						"chinese": "但是…那些树枝为什么会发光？",
						"french": "Mais… pourquoi ces branches brillent-elles ?",
						"spanish": "Pero… ¿por qué brillan esas ramas?",
						"vietnamese": "Nhưng… tại sao những cành cây đó lại phát sáng?",
						"thai": "แต่… ทำไมกิ่งไม้พวกนั้นถึงเรืองแสงล่ะ?",
						"hindi": "लेकिन… वे टहनियाँ क्यों चमक रही हैं?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "샘터 주변의 마른 나뭇가지들이 기이하게 붉은 빛을 뿜고 있었다.",
						"english": "The dry branches around the spring were strangely emitting a red light.",
						"japanese": "泉の周りの枯れた小枝たちが、奇妙に赤い光を放っていた。",
						"chinese": "泉水周围的枯枝奇异地散发着红光。",
						"french": "Les branches sèches autour de la source émettaient étrangement une lumière rouge.",
						"spanish": "Las ramas secas alrededor del manantial emitían extrañamente una luz roja.",
						"vietnamese": "Những cành cây khô xung quanh suối đang phát ra ánh sáng đỏ kỳ lạ.",
						"thai": "กิ่งไม้แห้งรอบๆ บ่อน้ำกำลังเปล่งแสงสีแดงประหลาด",
						"hindi": "झरने के चारों ओर की सूखी टहनियाँ अजीब तरह से लाल रोशनी छोड़ रही थीं।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "음… 그것도 축복의 일부랍니다.",
						"english": "Hmm… that is also part of the blessing.",
						"japanese": "うーん…それも祝福の一部ですよ。",
						"chinese": "嗯…那也是祝福的一部分。",
						"french": "Hmm… c'est aussi une partie de la bénédiction.",
						"spanish": "Mmm… eso también es parte de la bendición.",
						"vietnamese": "Ừm… đó cũng là một phần của phước lành.",
						"thai": "อืม… นั่นก็เป็นส่วนหนึ่งของพรเช่นกัน",
						"hindi": "हम्म… वह भी आशीर्वाद का हिस्सा है।"
					},
					"emotion": "base",
					"speaker": "ember",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"speaker": "ember"
				},
				{
					"content": {
						"korean": "머리가… 어지러워.",
						"english": "My head… it's dizzy.",
						"japanese": "頭が…めまいがする。",
						"chinese": "头好…好晕。",
						"french": "Ma tête… elle tourne.",
						"spanish": "Mi cabeza… está mareada.",
						"vietnamese": "Đầu tôi… chóng mặt quá.",
						"thai": "หัวฉัน… มึนจัง",
						"hindi": "मेरा सिर… चक्कर आ रहा है।"
					},
					"emotion": "sad",
					"speaker": "character_1",
					"type": "speech"
				},
				{
					"content": {
						"korean": "환영인가? 자꾸 뭐가 보여.",
						"english": "Is it a mirage? I keep seeing things.",
						"japanese": "幻覚か？ 何かが見え続ける。",
						"chinese": "是幻觉吗？我总能看到些什么。",
						"french": "Une hallucination ? Je n'arrête pas de voir des choses.",
						"spanish": "¿Es un espejismo? Sigo viendo cosas.",
						"vietnamese": "Ảo ảnh à? Tôi cứ thấy gì đó.",
						"thai": "ภาพหลอนหรือเปล่า? ฉันเห็นอะไรบางอย่างอยู่เรื่อยๆ",
						"hindi": "क्या यह एक मृगतृष्णा है? मुझे कुछ दिखाई दे रहा है।"
					},
					"emotion": "sad",
					"speaker": "character_2",
					"type": "speech"
				},
				{
					"speaker": "ember",
					"content": {
						"korean": "사막은 당신에게 더 깊은 것을 보여줄 겁니다.",
						"english": "The desert will show you something deeper.",
						"japanese": "砂漠はあなたに、より深遠なものを見せるでしょう。",
						"chinese": "沙漠会让你看到更深层的东西。",
						"french": "Le désert vous montrera quelque chose de plus profond.",
						"spanish": "El desierto te mostrará algo más profundo.",
						"vietnamese": "Sa mạc sẽ cho bạn thấy điều sâu sắc hơn.",
						"thai": "ทะเลทรายจะแสดงสิ่งลึกซึ้งยิ่งกว่าให้คุณเห็น",
						"hindi": "रेगिस्तान आपको कुछ गहरा दिखाएगा।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "ember",
					"content": {
						"korean": "두려워 마세요. 곧 모든 것이 명확해질 거예요.",
						"english": "Don't be afraid. Soon, everything will become clear.",
						"japanese": "恐れるな。すぐにすべてが明らかになるだろう。",
						"chinese": "别害怕。很快，一切都会明朗起来。",
						"french": "N'ayez pas peur. Bientôt, tout deviendra clair.",
						"spanish": "No temas. Pronto, todo quedará claro.",
						"vietnamese": "Đừng sợ. Mọi thứ rồi sẽ rõ ràng thôi.",
						"thai": "อย่ากลัวเลย อีกไม่นานทุกอย่างจะกระจ่างเอง",
						"hindi": "डरो मत। जल्द ही, सब कुछ स्पष्ट हो जाएगा।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "너… 우리를 어디로 데려가는 거야?",
						"english": "Where... where are you taking us?",
						"japanese": "お前… 我々をどこへ連れて行くんだ？",
						"chinese": "你……你要带我们去哪儿？",
						"french": "Où... où nous emmènes-tu ?",
						"spanish": "¿Adónde... adónde nos llevas?",
						"vietnamese": "Ngươi… đang đưa chúng ta đi đâu?",
						"thai": "แก... กำลังพาพวกเราไปที่ไหน?",
						"hindi": "तुम... हमें कहाँ ले जा रहे हो?"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "ember",
					"content": {
						"korean": "가장… 찬란한 파멸의 길로요.",
						"english": "To the path of the most... glorious destruction.",
						"japanese": "最も… 輝かしい破滅の道へ。",
						"chinese": "通往最……辉煌的毁灭之路。",
						"french": "Sur le chemin de la plus... glorieuse destruction.",
						"spanish": "Al camino de la más... gloriosa destrucción.",
						"vietnamese": "Đến con đường… hủy diệt huy hoàng nhất.",
						"thai": "สู่เส้นทางแห่งความพินาศที่... รุ่งโรจน์ที่สุด",
						"hindi": "सबसे... शानदार विनाश के मार्ग पर।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "말도 안 돼…!",
						"english": "Impossible...!",
						"japanese": "馬鹿な…！",
						"chinese": "不可能……！",
						"french": "Impossible… !",
						"spanish": "¡Imposible...!",
						"vietnamese": "Không thể nào…!",
						"thai": "เป็นไปไม่ได้...!",
						"hindi": "असंभव...!"
					},
					"emotion": "angry",
					"speaker": "character_3"
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "마른 샘물이 모든 것을 집어삼켰다. 붉은 반점이 온몸을 뒤덮었다.",
						"english": "The dry spring swallowed everything. Red marks covered the whole body.",
						"japanese": "枯れた泉がすべてを飲み込んだ。赤い斑点が全身を覆った。",
						"chinese": "干涸的泉水吞噬了一切。红斑覆盖了全身。",
						"french": "La source asséchée a tout englouti. Des taches rouges couvraient tout le corps.",
						"spanish": "El manantial seco lo engulló todo. Manchas rojas cubrieron todo el cuerpo.",
						"vietnamese": "Suối cạn nuốt chửng mọi thứ. Vệt đỏ bao phủ khắp cơ thể.",
						"thai": "น้ำพุแห้งผากกลืนกินทุกสิ่ง รอยแดงปกคลุมทั่วร่างกาย",
						"hindi": "सूखे झरने ने सब कुछ निगल लिया। लाल धब्बे पूरे शरीर पर छा गए।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "하찮은 자들… 영원히 이곳에 잠들어라.",
						"english": "Insignificant wretches... Slumber here forever.",
						"japanese": "取るに足らぬ者たちよ… 永遠にここで眠れ。",
						"chinese": "卑微的蝼蚁… 永远长眠于此吧。",
						"french": "Misérables vermines… Dormez ici pour l'éternité.",
						"spanish": "Insignificantes… Dormid aquí para siempre.",
						"vietnamese": "Lũ hèn mọn... Hãy ngủ yên tại đây mãi mãi.",
						"thai": "พวกไร้ค่า... จงหลับใหลที่นี่ชั่วนิรันดร์",
						"hindi": "तुच्छ प्राणी... यहीं सदा के लिए सो जाओ।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "아직… 끝나지 않았어.",
						"english": "It's not... over yet.",
						"japanese": "まだ… 終わってない。",
						"chinese": "还没… 结束！",
						"french": "Ce n'est pas… encore fini.",
						"spanish": "Aún… no ha terminado.",
						"vietnamese": "Chưa... kết thúc đâu.",
						"thai": "ยัง… ไม่จบแค่นี้",
						"hindi": "अभी… खत्म नहीं हुआ।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "우리는… 여기서 멈추지 않아!",
						"english": "We won't… stop here!",
						"japanese": "私たちは… ここで終わらない！",
						"chinese": "我们… 不会止步于此！",
						"french": "Nous ne… nous arrêterons pas ici !",
						"spanish": "¡Nosotros… no nos detendremos aquí!",
						"vietnamese": "Chúng ta… sẽ không dừng lại ở đây!",
						"thai": "พวกเรา… จะไม่หยุดอยู่แค่นี้!",
						"hindi": "हम… यहीं नहीं रुकेंगे!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "마른 나뭇가지들이 거대한 형체를 이루었다. 거대한 그림자였다.",
						"english": "Dry branches formed a colossal shape. It was a giant shadow.",
						"japanese": "枯れ枝が巨大な形を成していた。それは巨大な影だった。",
						"chinese": "干枯的树枝形成了一个巨大的形状。那是一个巨大的阴影。",
						"french": "Des branches sèches formaient une forme colossale. C'était une ombre gigantesque.",
						"spanish": "Ramas secas formaban una forma colosal. Era una sombra gigante.",
						"vietnamese": "Những cành cây khô tạo thành một hình thù khổng lồ. Đó là một cái bóng khổng lồ.",
						"thai": "กิ่งไม้แห้งก่อตัวเป็นรูปร่างมหึมา มันเป็นเงาขนาดใหญ่",
						"hindi": "सूखी टहनियों ने एक विशाल आकृति बनाई। वह एक विशाल छाया थी।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "목마른 자들이여… 잘 왔다.",
						"english": "Thirsty ones... Welcome.",
						"japanese": "渇ける者たちよ… よく来た。",
						"chinese": "口渴的人们啊……欢迎。",
						"french": "Âmes assoiffées... Bienvenue.",
						"spanish": "Sedientos... Bienvenidos.",
						"vietnamese": "Hỡi những kẻ khát khao… Hoan nghênh.",
						"thai": "ผู้กระหายเอ๋ย... ยินดีต้อนรับ",
						"hindi": "प्यासे प्राणियों... स्वागत है।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "내 샘물은… 너희의 모든 갈증을 채워줄 것이다.",
						"english": "My spring water... will quench all your thirst.",
						"japanese": "我が泉は… お前たちのあらゆる渇きを癒すだろう。",
						"chinese": "我的泉水……会满足你们所有的渴望。",
						"french": "Mon eau de source... étanchera toute votre soif.",
						"spanish": "Mi manantial... saciará toda vuestra sed.",
						"vietnamese": "Suối nguồn của ta… sẽ thỏa mãn mọi khát khao của các ngươi.",
						"thai": "น้ำพุของข้า... จะดับกระหายของพวกเจ้าทั้งหมด",
						"hindi": "मेरा झरना... तुम्हारी सारी प्यास बुझा देगा।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "네가… 이 모든 걸 꾸민 거야?",
						"english": "Was it you... who orchestrated all of this?",
						"japanese": "お前が… このすべてを仕組んだのか？",
						"chinese": "是你……策划了这一切吗？",
						"french": "C'est toi... qui as orchestré tout cela ?",
						"spanish": "¿Fuiste tú... quien orquestó todo esto?",
						"vietnamese": "Ngươi… đã sắp đặt tất cả chuyện này sao?",
						"thai": "แก... เป็นคนจัดฉากทั้งหมดนี้หรือเปล่า?",
						"hindi": "क्या यह तुम थे... जिसने यह सब रचा?"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "{random_boss}! 네놈의 속셈이 뭐냐!",
						"english": "{random_boss}! What are your intentions?!",
						"japanese": "{random_boss}！貴様の魂胆は何だ！",
						"chinese": "{random_boss}！你到底有什么企图！",
						"french": "{random_boss} ! Quelles sont tes intentions ?",
						"spanish": "¡{random_boss}! ¿Cuáles son tus intenciones?",
						"vietnamese": "{random_boss}! Ngươi có âm mưu gì!",
						"thai": "{random_boss}! เจ้ามีแผนการอะไร!",
						"hindi": "{random_boss}! तुम्हारी मंशा क्या है!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "갈증에 타들어가는 혼은… 달콤한 유혹에 약한 법이지.",
						"english": "Souls parched with thirst... are weak to sweet temptations.",
						"japanese": "喉が渇ききった魂は…甘い誘惑に弱いものだ。",
						"chinese": "干渴的灵魂…总是禁不住甜美的诱惑。",
						"french": "Les âmes assoiffées... sont faibles face aux douces tentations.",
						"spanish": "Las almas sedientas... son débiles ante las dulces tentaciones.",
						"vietnamese": "Linh hồn khát khao cháy bỏng... thường yếu mềm trước cám dỗ ngọt ngào.",
						"thai": "ดวงวิญญาณที่กระหาย... ย่อมแพ้พ่ายต่อสิ่งยั่วยวนอันหอมหวาน",
						"hindi": "प्यासी आत्माएं... मीठे प्रलोभनों के सामने कमजोर होती हैं।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "direction",
					"action": "exit",
					"direction": "down",
					"speaker": "ember",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "이제… 저의 일은 끝났네요. 즐거운 시간 되세요.",
						"english": "My work here is done... Have a pleasant time.",
						"japanese": "これで…私の仕事は終わりです。どうぞ楽しい時間をお過ごしください。",
						"chinese": "我的任务…结束了。祝您玩得愉快。",
						"french": "Mon travail ici est terminé... Amusez-vous bien.",
						"spanish": "Mi trabajo aquí ha terminado... Que la pasen bien.",
						"vietnamese": "Việc của tôi... đã xong rồi. Chúc quý vị có thời gian vui vẻ.",
						"thai": "งานของข้า... เสร็จสิ้นแล้ว ขอให้เจ้าสนุกนะ",
						"hindi": "मेरा काम अब खत्म हो गया है... आपका समय शुभ हो।"
					},
					"emotion": "happy",
					"speaker": "ember"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이제 너희는… 영원히 나의 일부가 될 것이다.",
						"english": "Now you... shall forever be a part of me.",
						"japanese": "お前たちは…永遠に私の一部となるのだ。",
						"chinese": "你们…将永远成为我的一部分。",
						"french": "Maintenant, vous... ferez éternellement partie de moi.",
						"spanish": "Ahora ustedes... serán para siempre parte de mí.",
						"vietnamese": "Giờ đây các ngươi... sẽ mãi mãi là một phần của ta.",
						"thai": "บัดนี้พวกเจ้า... จะเป็นส่วนหนึ่งของข้าตลอดไป",
						"hindi": "अब तुम सब... हमेशा के लिए मेरा हिस्सा बन जाओगे।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "크윽… 이 사막은… 영원히 너희를 놓아주지 않을 것이다.",
						"english": "Ugh... This desert... will never let you go.",
						"japanese": "くっ…この砂漠は…永遠にお前たちを解放しないだろう。",
						"chinese": "可恶…这片沙漠…永远不会放过你们。",
						"french": "Ugh... Ce désert... ne vous lâchera jamais.",
						"spanish": "Ugh... Este desierto... jamás los soltará.",
						"vietnamese": "Khụ... Sa mạc này... sẽ không bao giờ buông tha các ngươi.",
						"thai": "อึก... ทะเลทรายแห่งนี้... จะไม่มีวันปล่อยพวกเจ้าไป",
						"hindi": "उफ़... यह रेगिस्तान... तुम्हें कभी नहीं छोड़ेगा।"
					},
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "진정한 오아시스는… 환영 속에 있을 뿐…",
						"english": "The true oasis... exists only in illusion...",
						"japanese": "真のオアシスは…幻の中にしかない…",
						"chinese": "真正的绿洲…只存在于幻象之中…",
						"french": "La véritable oasis... n'existe que dans l'illusion...",
						"spanish": "El verdadero oasis... solo existe en la ilusión...",
						"vietnamese": "Ốc đảo thật sự... chỉ nằm trong ảo ảnh...",
						"thai": "โอเอซิสที่แท้จริง... มีอยู่เพียงในภาพลวงตา...",
						"hindi": "सच्चा नखलिस्तान... केवल भ्रम में ही मौजूद है..."
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이게 끝이 아니라는 거야?",
						"english": "This isn't the end?",
						"japanese": "これが終わりじゃないってことか？",
						"chinese": "这还没结束吗？",
						"french": "Ce n'est pas la fin ?",
						"spanish": "¿Esto no es el final?",
						"vietnamese": "Đây không phải là kết thúc sao?",
						"thai": "นี่ไม่ใช่จุดจบหรือ?",
						"hindi": "क्या यह अंत नहीं है?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "붉은 반점은 희미해졌지만, 완전히 사라지지 않았다.",
						"english": "The red marks faded, but did not disappear completely.",
						"japanese": "赤い斑点は薄れたが、完全に消え去ったわけではなかった。",
						"chinese": "红斑减淡了，但并未完全消失。",
						"french": "Les taches rouges se sont estompées, mais n'ont pas complètement disparu.",
						"spanish": "Las manchas rojas se desvanecieron, pero no desaparecieron por completo.",
						"vietnamese": "Vệt đỏ đã mờ đi, nhưng không biến mất hoàn toàn.",
						"thai": "รอยแดงจางลง แต่ยังไม่หายไปทั้งหมด",
						"hindi": "लाल धब्बे हल्के पड़ गए, लेकिन पूरी तरह गायब नहीं हुए।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "사막의 저주는… 여전히 일행을 묶어두고 있었다.",
						"english": "The desert's curse... still held the party captive.",
						"japanese": "砂漠の呪いは…依然として一行を縛り付けていた。",
						"chinese": "沙漠的诅咒…依然束缚着队伍。",
						"french": "La malédiction du désert... retenait toujours le groupe captif.",
						"spanish": "La maldición del desierto... aún mantenía cautivo al grupo.",
						"vietnamese": "Lời nguyền của sa mạc... vẫn còn trói buộc đoàn người.",
						"thai": "คำสาปแห่งทะเลทราย... ยังคงกักขังกลุ่มเดินทางไว้",
						"hindi": "रेगिस्तान का अभिशाप... अभी भी दल को बांधे हुए था।"
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"사막의 끝없는 갈증.",
			"그림자처럼 따라붙는 피로.",
			"그때, 한 목소리가 속삭였다.",
			"이곳에… 구원이 있습니다."
		],
		"english": [
			"Endless thirst of the desert.",
			"Fatigue, a constant shadow.",
			"Then, a voice whispered.",
			"Here... there is salvation."
		],
		"japanese": [
			"砂漠の果てしない渇き。",
			"影のように付きまとう疲労。",
			"その時、一つの声が囁いた。",
			"ここに…救いがあります。"
		],
		"chinese": [
			"沙漠无尽的干渴。",
			"如影随形的疲惫。",
			"此时，一个声音低语道。",
			"在此…有救赎。"
		],
		"french": [
			"La soif insatiable du désert.",
			"La fatigue, une ombre persistante.",
			"Alors, une voix murmura.",
			"Ici… le salut est."
		],
		"spanish": [
			"La sed infinita del desierto.",
			"El cansancio, una sombra constante.",
			"Entonces, una voz susurró.",
			"Aquí… hay salvación."
		],
		"vietnamese": [
			"Cơn khát vô tận của sa mạc.",
			"Mệt mỏi bám riết như hình với bóng.",
			"Lúc đó, một giọng nói thì thầm.",
			"Ở đây… có sự cứu rỗi."
		],
		"thai": [
			"ความกระหายไม่สิ้นสุดของทะเลทราย",
			"ความเหนื่อยล้าที่ตามหลอกหลอน",
			"ทันใดนั้น เสียงหนึ่งก็กระซิบ",
			"ที่นี่… มีความรอด"
		],
		"hindi": [
			"रेगिस्तान की अंतहीन प्यास।",
			"परछाईं-सी चिपकी थकान।",
			"तभी, एक आवाज़ फुसफुसाई।",
			"यहाँ… मुक्ति है।"
		]
	}
} as const;
