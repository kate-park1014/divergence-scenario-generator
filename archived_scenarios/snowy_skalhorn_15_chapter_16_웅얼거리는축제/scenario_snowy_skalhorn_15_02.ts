export const scenario_snowy_skalhorn_15_02 = {
	"scenario_id": "snowy_skalhorn_15_02",
	"order": 2,
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
					"speaker": "narrator",
					"content": {
						"korean": "눈밭은 더욱 깊어졌다. 축제의 노랫소리가 발걸음을 따라왔다.",
						"english": "The snow grew deeper. The festive song followed my steps.",
						"japanese": "雪原はさらに深くなった。祭りの歌声が足取りを追ってきた。",
						"chinese": "雪更深了。节日的歌声伴随着我的脚步。",
						"french": "La neige s'épaississait. Le chant festif suivait mes pas.",
						"spanish": "La nieve se hizo más profunda. El canto festivo seguía mis pasos.",
						"vietnamese": "Tuyết càng dày hơn. Tiếng hát lễ hội theo bước chân tôi.",
						"thai": "หิมะลึกขึ้น เสียงเพลงเทศกาลตามติดทุกย่างก้าว",
						"hindi": "बर्फ़ और गहरी हो गई। उत्सव का गीत मेरे कदमों का पीछा कर रहा था।"
					}
				},
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						2
					],
					"speaker": "ivar",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "하! 흥겨운 가락이군.",
						"english": "Ha! A cheerful tune.",
						"japanese": "は！陽気な調べだな。",
						"chinese": "哈！这欢快的旋律。",
						"french": "Ha ! Une mélodie joyeuse.",
						"spanish": "¡Ja! Una melodía alegre.",
						"vietnamese": "Ha! Một giai điệu vui tươi.",
						"thai": "ฮ่า! เป็นเพลงที่รื่นเริงดีนี่",
						"hindi": "हा! एक खुशनुमा धुन।"
					},
					"speaker": "ivar",
					"emotion": "happy",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "점점 크게 들리는 것 같아.",
						"english": "It seems to be getting louder.",
						"japanese": "だんだん大きく聞こえるようだ。",
						"chinese": "好像越来越响了。",
						"french": "Ça semble devenir plus fort.",
						"spanish": "Parece que se está oyendo más fuerte.",
						"vietnamese": "Dường như nó đang to dần lên.",
						"thai": "ดูเหมือนจะดังขึ้นเรื่อยๆ",
						"hindi": "यह और तेज़ होता जा रहा है।"
					}
				},
				{
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "이런 축제라면 언제든 환영이다!",
						"english": "I'd welcome a festival like this anytime!",
						"japanese": "こんな祭りならいつでも大歓迎だ！",
						"chinese": "这样的节日，我随时欢迎！",
						"french": "Un festival comme ça, je l'accueille n'importe quand !",
						"spanish": "¡Un festival así es siempre bienvenido!",
						"vietnamese": "Một lễ hội như thế này, lúc nào cũng hoan nghênh!",
						"thai": "ถ้าเป็นงานเทศกาลแบบนี้ล่ะก็ ยินดีต้อนรับเสมอ!",
						"hindi": "ऐसे त्योहार का तो मैं कभी भी स्वागत करूंगा!"
					},
					"speaker": "ivar"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"speaker": "ivar",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "흐음… 으음…",
						"english": "Hmm... Mmm...",
						"japanese": "ふむ… うむ…",
						"chinese": "嗯……嗯……",
						"french": "Hmm... Mmm...",
						"spanish": "Mmm... Uhm...",
						"vietnamese": "Hừm... Ừm...",
						"thai": "อืม... อือ...",
						"hindi": "हम्म... उम्म..."
					},
					"speaker": "ivar",
					"type": "speech",
					"emotion": "happy"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이바르, 콧노래 흥얼거려?",
						"english": "Ivar, are you humming a tune?",
						"japanese": "イヴァル、鼻歌を歌ってるのかい？",
						"chinese": "伊瓦尔，你在哼小曲吗？",
						"french": "Ivar, tu fredonnes une mélodie ?",
						"spanish": "Ivar, ¿estás tarareando una melodía?",
						"vietnamese": "Ivar, cậu đang ngân nga à?",
						"thai": "อิวาร์ นายกำลังฮัมเพลงเหรอ?",
						"hindi": "इवार, क्या तुम गुनगुना रहे हो?"
					}
				},
				{
					"emotion": "happy",
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "어? 내가? 하하, 이 가락이 워낙 중독성이 있어서 말이야.",
						"english": "Oh? Me? Haha, this tune is just so catchy.",
						"japanese": "え？私が？ハハ、このメロディー、なんだか中毒性があるからね。",
						"chinese": "哦？我吗？哈哈，这旋律太上头了。",
						"french": "Oh ? Moi ? Haha, cette mélodie est tellement entraînante.",
						"spanish": "¿Oh? ¿Yo? Jaja, esta melodía es demasiado pegadiza.",
						"vietnamese": "Ồ? Tôi ư? Haha, giai điệu này gây nghiện thật đấy.",
						"thai": "อ้าว? ฉันเหรอ? ฮ่าๆ ทำนองนี้มันติดหูจริงๆ นะเนี่ย",
						"hindi": "ओह? मैं? हाहा, यह धुन बहुत ही आकर्षक है।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…왠지 모르게 입에 붙는 노래야.",
						"english": "...Somehow, it's a song that sticks in my head.",
						"japanese": "…なぜだか口ずさんでしまう歌だ。",
						"chinese": "……不知怎么的，这歌一直在嘴边哼着。",
						"french": "...D'une certaine manière, c'est une chanson qui me trotte dans la tête.",
						"spanish": "...Por alguna razón, es una canción que se me pega.",
						"vietnamese": "...Không hiểu sao cứ ngân nga mãi bài hát này.",
						"thai": "เป็นเพลงที่ติดปากโดยไม่รู้ตัวเลยแฮะ",
						"hindi": "किसी कारण से, यह एक ऐसा गाना है जो जुबान पर चढ़ गया है।"
					},
					"speaker": "character_1"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						2
					],
					"speaker": "ivar",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "라라라… 음? …잠깐.",
						"english": "Lalala... Hmm? ...Wait.",
						"japanese": "ラララ…ん？…ちょっと待て。",
						"chinese": "啦啦啦……嗯？……等等。",
						"french": "Lalala... Hmm ? ...Attends.",
						"spanish": "Lalala... ¿Mmm? ...Espera.",
						"vietnamese": "Lalala... Ưm? ...Khoan đã.",
						"thai": "ลาลัลลา... อืม? ...เดี๋ยวสิ",
						"hindi": "ललल... हम्म? ...रुको।"
					},
					"speaker": "ivar"
				},
				{
					"content": {
						"korean": "내가 왜 이걸 흥얼거리고 있지?",
						"english": "Why am I humming this?",
						"japanese": "なんで私がこれを口ずさんでるんだ？",
						"chinese": "我为什么会哼这首歌？",
						"french": "Pourquoi est-ce que je fredonne ça ?",
						"spanish": "¿Por qué estoy tarareando esto?",
						"vietnamese": "Sao mình lại ngâm nga bài này nhỉ?",
						"thai": "ทำไมฉันถึงฮัมเพลงนี้อยู่ล่ะเนี่ย",
						"hindi": "मैं यह क्यों गुनगुना रहा हूँ?"
					},
					"speaker": "ivar",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "방금 전부터 계속 그랬잖아.",
						"english": "I've been doing it ever since a moment ago.",
						"japanese": "さっきからずっとそうだった。",
						"chinese": "我刚才一直都在这样。",
						"french": "Je le faisais depuis tout à l'heure.",
						"spanish": "Lo he estado haciendo desde hace un rato.",
						"vietnamese": "Mình cứ làm thế từ nãy đến giờ rồi.",
						"thai": "ฉันทำแบบนี้มาตลอดตั้งแต่เมื่อกี้แล้ว",
						"hindi": "मैं अभी थोड़ी देर से ऐसा ही कर रहा था।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "…내가 의식하지 못했다고?",
						"english": "...I wasn't even aware of it?",
						"japanese": "…私が意識してなかったってことか？",
						"chinese": "……我竟然没察觉到？",
						"french": "...Je ne m'en étais même pas rendu compte ?",
						"spanish": "...¿No me di cuenta?",
						"vietnamese": "...Mình không hề nhận ra ư?",
						"thai": "ฉันไม่รู้ตัวเลยเหรอเนี่ย",
						"hindi": "मुझे इसका एहसास भी नहीं हुआ?"
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						2
					],
					"speaker": "ivar",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "ivar",
					"content": {
						"korean": "…내 의지와 상관없이 이 노래가 입에서 나온다고?",
						"english": "...This song comes out of my mouth against my will?",
						"japanese": "…私の意思とは関係なく、この歌が口から出てくるのか？",
						"chinese": "……这首歌会不自觉地从我嘴里冒出来？",
						"french": "...Cette chanson sort de ma bouche contre ma volonté ?",
						"spanish": "...¿Esta canción sale de mi boca contra mi voluntad?",
						"vietnamese": "Bài hát này tự phát ra từ miệng mình mà không theo ý muốn ư?",
						"thai": "เพลงนี้มันออกมาจากปากฉันเองโดยไม่ตั้งใจเหรอเนี่ย",
						"hindi": "यह गाना मेरी मर्जी के बिना मेरे मुँह से निकल रहा है?"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "기분 탓 아니야? 그냥 좋아서 부르는 거겠지.",
						"english": "Is it just my imagination? I'm probably just singing it because I like it.",
						"japanese": "気のせいじゃない？ただ好きで歌ってるだけだろ。",
						"chinese": "不是心理作用吧？大概只是因为喜欢才唱的。",
						"french": "C'est mon imagination, non ? Je la chante juste parce que je l'aime bien.",
						"spanish": "¿No será mi imaginación? Seguramente la canto porque me gusta.",
						"vietnamese": "Không phải do mình tưởng tượng đâu nhỉ? Chắc là mình hát vì thích thôi.",
						"thai": "คงไม่ใช่แค่คิดไปเองหรอกมั้ง? คงแค่ร้องเพราะชอบนั่นแหละ",
						"hindi": "क्या यह मेरा वहम नहीं है? शायद मैं इसे इसलिए गा रहा हूँ क्योंकि मुझे यह पसंद है।"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "아니. 이 위화감은… 분명 뭔가 있어.",
						"english": "No. This unsettling feeling... there's definitely something to it.",
						"japanese": "違う。この違和感は…きっと何かある。",
						"chinese": "不。这种违和感……肯定有什么蹊跷。",
						"french": "Non. Ce sentiment étrange... il y a clairement quelque chose.",
						"spanish": "No. Esta sensación extraña... definitivamente hay algo.",
						"vietnamese": "Không. Cảm giác khó chịu này... chắc chắn là có gì đó.",
						"thai": "ไม่ใช่สิ ความรู้สึกแปลกๆ นี้... ต้องมีอะไรบางอย่างแน่ๆ",
						"hindi": "नहीं। यह अजीब सा एहसास... निश्चित रूप से कुछ है।"
					},
					"speaker": "ivar"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "노랫소리는 더욱 커졌고, 발밑의 눈은 단단히 얼어붙었다.",
						"english": "The singing grew louder, and the snow beneath my feet froze solid.",
						"japanese": "歌声はさらに大きくなり、足元の雪は固く凍りついた。",
						"chinese": "歌声变得更响了，脚下的雪也牢牢冻结。",
						"french": "Le chant devint plus fort, et la neige sous mes pieds gela solidement.",
						"spanish": "El canto se hizo más fuerte, y la nieve bajo mis pies se congeló por completo.",
						"vietnamese": "Tiếng hát ngày càng lớn hơn, và tuyết dưới chân đóng băng cứng ngắc.",
						"thai": "เสียงเพลงดังขึ้นเรื่อยๆ และหิมะใต้เท้าก็แข็งเป็นน้ำแข็ง",
						"hindi": "गाने की आवाज़ और तेज़ हो गई, और मेरे पैरों के नीचे की बर्फ़ जम गई।"
					}
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "가장 깊은 곳에서, 노랫소리가 절정에 달했다.",
						"english": "In the deepest reaches, the song reached its climax.",
						"japanese": "最深部で、歌声は頂点に達した。",
						"chinese": "在最深处，歌声达到了高潮。",
						"french": "Dans les profondeurs abyssales, le chant atteignit son paroxysme.",
						"spanish": "En lo más profundo, la canción alcanzó su clímax.",
						"vietnamese": "Ở nơi sâu thẳm nhất, tiếng hát đạt đến đỉnh điểm.",
						"thai": "ในส่วนลึกที่สุด เสียงเพลงบรรเลงถึงขีดสุด",
						"hindi": "सबसे गहरे में, गीत अपने चरम पर पहुँच गया।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "왔구나… 노랫소리에 홀린 자들.",
						"english": "So you've come... those ensnared by the song.",
						"japanese": "来たか…歌声に魅入られた者たちよ。",
						"chinese": "你们来了…被歌声迷惑之人。",
						"french": "Vous voilà… ceux que le chant a ensorcelés.",
						"spanish": "Así que habéis venido... los que fueron seducidos por la canción.",
						"vietnamese": "Các ngươi đã đến… những kẻ bị tiếng hát mê hoặc.",
						"thai": "มาแล้วสินะ... พวกที่ถูกเสียงเพลงหลอกล่อ",
						"hindi": "तुम आ गए... वे जो गीत से मोहित हुए।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "홀렸다고? 이딴 노래에?",
						"english": "Ensnared? By *this* pathetic song?",
						"japanese": "魅入られただと？こんな歌に？",
						"chinese": "迷惑？被这种歌？",
						"french": "Ensorcelés ? Par cette chanson minable ?",
						"spanish": "¿Seducidos? ¿Por esta patética canción?",
						"vietnamese": "Bị mê hoặc ư? Bởi cái thứ bài hát vớ vẩn này?",
						"thai": "หลงใหลเหรอ? กับเพลงห่วยๆ แบบนี้เนี่ยนะ?",
						"hindi": "मोहित हुए? इस घटिया गाने से?"
					},
					"speaker": "ivar"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "너도 모르게 흥얼거리고 있지 않나? 그 가락은 네 피에 스며들었다.",
						"english": "Aren't you humming it unconsciously? That melody has seeped into your very blood.",
						"japanese": "お前も無意識に口ずさんでいるだろう？その調べはお前の血に染み込んでいる。",
						"chinese": "你不是也在不知不觉地哼唱吗？那旋律已渗入你的血液。",
						"french": "N'es-tu pas en train de la fredonner sans le savoir ? Cette mélodie a imprégné ton sang.",
						"spanish": "¿No la estás tarareando sin darte cuenta? Esa melodía se ha filtrado en tu sangre.",
						"vietnamese": "Ngươi không phải đang vô thức ngân nga sao? Giai điệu đó đã thấm vào máu ngươi rồi.",
						"thai": "เจ้าก็เผลอฮัมเพลงนั้นอยู่ใช่ไหม? ท่วงทำนองนั้นซึมซาบเข้าไปในสายเลือดของเจ้าแล้ว",
						"hindi": "क्या तुम भी अनजाने में गुनगुना नहीं रहे हो? वह धुन तुम्हारे खून में समा गई है।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "헛소리! 나는 내 의지로 싸운다!",
						"english": "Nonsense! I fight by my own will!",
						"japanese": "戯言を！私は私の意思で戦う！",
						"chinese": "胡说！我凭自己的意志战斗！",
						"french": "Absurdités ! Je me bats par ma propre volonté !",
						"spanish": "¡Tonterías! ¡Yo lucho por mi propia voluntad!",
						"vietnamese": "Vớ vẩn! Ta chiến đấu bằng ý chí của mình!",
						"thai": "เหลวไหล! ข้าต่อสู้ด้วยเจตจำนงของตัวเอง!",
						"hindi": "बकवास! मैं अपनी मर्ज़ी से लड़ता हूँ!"
					},
					"speaker": "ivar"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "크크… 이긴다고 끝날 것 같나? 이 노랫소리는 멈추지 않아…",
						"english": "Heh heh... Do you think winning will end it? This song will never cease...",
						"japanese": "クク…勝ったところで終わると思うか？この歌声は止まらない…",
						"chinese": "呵呵…你以为赢了就能结束吗？这歌声不会停止…",
						"french": "Haha… Penses-tu que la victoire y mettra fin ? Ce chant ne s'arrêtera jamais…",
						"spanish": "Je je... ¿Crees que ganar lo terminará? Esta canción nunca cesará...",
						"vietnamese": "Khà khà… Ngươi nghĩ thắng là sẽ kết thúc ư? Tiếng hát này sẽ không dừng lại đâu…",
						"thai": "ฮึๆ... คิดว่าชนะแล้วจะจบงั้นรึ? เสียงเพลงนี้จะไม่มีวันหยุด...",
						"hindi": "हँ हँ... क्या तुम्हें लगता है कि जीतने से यह खत्म हो जाएगा? यह गीत कभी नहीं रुकेगा..."
					},
					"speaker": "random_boss",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "시끄럽다. 강함만이 모든 것을 증명한다.",
						"english": "Quiet. Only strength proves everything.",
						"japanese": "うるさい。強さだけが全てを証明する。",
						"chinese": "安静。唯有强大才能证明一切。",
						"french": "Silence. Seule la force prouve tout.",
						"spanish": "Cállate. Solo la fuerza lo demuestra todo.",
						"vietnamese": "Im đi. Chỉ có sức mạnh mới chứng minh được tất cả.",
						"thai": "เงียบไปซะ. มีเพียงความแข็งแกร่งเท่านั้นที่พิสูจน์ทุกสิ่ง",
						"hindi": "चुप रहो। केवल शक्ति ही सब कुछ साबित करती है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…아직도 노래가 들리는 것 같아.",
						"english": "...I still seem to hear the song.",
						"japanese": "…まだ歌が聞こえる気がする。",
						"chinese": "……我好像 still 能听到歌声。",
						"french": "…Il me semble encore entendre le chant.",
						"spanish": "...Todavía parece que escucho la canción.",
						"vietnamese": "…Dường như ta vẫn còn nghe thấy tiếng hát.",
						"thai": "...ยังคงได้ยินเสียงเพลงอยู่เลย",
						"hindi": "...मुझे अभी भी गीत सुनाई दे रहा है।"
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "노랫소리 속에서 알 수 없는 흐느낌이 섞여 들었다.",
						"english": "Amidst the song, an unknown sob mingled in.",
						"japanese": "歌声の中に、未知のすすり泣きが混じり合った。",
						"chinese": "歌声中夹杂着莫名的呜咽声。",
						"french": "Dans le chant, un sanglot inconnu se mêlait.",
						"spanish": "Entre la canción, un sollozo desconocido se mezcló.",
						"vietnamese": "Trong tiếng hát, lẫn vào là tiếng nức nở không rõ từ đâu.",
						"thai": "ในเสียงเพลง มีเสียงสะอื้นที่ไม่รู้จักปะปนอยู่",
						"hindi": "गीत के बीच, एक अनजानी सिसकी घुल मिल गई।"
					},
					"speaker": "narrator"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "흐음… 힘이 부족하군. 이 노예의 노래 속에서 영원히 허우적대라.",
						"english": "Hmm... your strength is lacking. Wallow forever in this slave's song.",
						"japanese": "フフ…力が足りぬな。この奴隷の歌の中で永遠にもがき苦しめ。",
						"chinese": "哼…力量不足啊。在这奴役之歌中永远挣扎吧。",
						"french": "Hmm… Ta force est insuffisante. Débats-toi éternellement dans le chant de cet esclave.",
						"spanish": "Mmm... te falta fuerza. Revuélvete para siempre en la canción de este esclavo.",
						"vietnamese": "Hừm… sức mạnh yếu kém quá. Hãy vĩnh viễn vùng vẫy trong tiếng hát của tên nô lệ này đi.",
						"thai": "ฮืม... แรงยังไม่พอสินะ จงจมปลักอยู่ในเพลงของทาสผู้นี้ตลอดไปเถิด",
						"hindi": "हम्म... तुम्हारी शक्ति कम है। इस दास के गीत में हमेशा के लिए तड़पते रहो।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "젠장… 아직 끝나지 않았다!",
						"english": "Damn... it's not over yet!",
						"japanese": "くそっ…まだ終わってない！",
						"chinese": "该死...还没完！",
						"french": "Zut... ce n'est pas encore fini !",
						"spanish": "Maldición... ¡aún no ha terminado!",
						"vietnamese": "Chết tiệt... vẫn chưa kết thúc!",
						"thai": "ให้ตายสิ... ยังไม่จบแค่นี้!",
						"hindi": "धिक्कार है... यह अभी खत्म नहीं हुआ!"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "다시… 해보자.",
						"english": "Again... let's try.",
						"japanese": "もう一度…やろう。",
						"chinese": "再来一次吧。",
						"french": "Encore... essayons.",
						"spanish": "De nuevo... intentémoslo.",
						"vietnamese": "Lại... thử lại thôi.",
						"thai": "อีกครั้ง... มาลองดูกัน.",
						"hindi": "फिर से... कोशिश करते हैं।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"끝없이 펼쳐진 눈밭.",
			"발걸음을 옮길 때마다 뿔잔의 노래가 머릿속에 들러붙었다.",
			"흥겨운 가락은 점점 또렷해지고, 나도 모르게 입가가 움찔거렸다.",
			"…무언가 스며들고 있다."
		],
		"english": [
			"An endless expanse of snow.",
			"With every step, the horn cup's song clung to my mind.",
			"The joyous tune grew clearer, and my lips twitched unconsciously.",
			"...Something is seeping in."
		],
		"japanese": [
			"果てしなく広がる雪原。",
			"一歩進むごとに、角杯の歌が頭にこびりついた。",
			"陽気な調べは次第にはっきりとしていき、思わず口元がぴくりと動いた。",
			"…何かが染み込んでいる。"
		],
		"chinese": [
			"一望无际的雪原。",
			"每迈出一步，号角杯的歌声就在脑海中萦绕。",
			"欢快的旋律越来越清晰，我不由自主地嘴角抽动。",
			"...有什么东西正在渗透进来。"
		],
		"french": [
			"Une étendue de neige infinie.",
			"À chaque pas, le chant de la corne s'accrochait à mon esprit.",
			"La joyeuse mélodie devenait de plus en plus nette, et mes lèvres tressautèrent involontairement.",
			"...Quelque chose s'infiltre."
		],
		"spanish": [
			"Un manto de nieve interminable.",
			"Con cada paso, la canción del cuerno se aferraba a mi mente.",
			"La alegre melodía se hacía más clara, y mis labios se crisparon inconscientemente.",
			"...Algo se está filtrando."
		],
		"vietnamese": [
			"Cánh đồng tuyết trải dài vô tận.",
			"Mỗi bước chân, bài ca sừng sững lại vương vấn trong tâm trí tôi.",
			"Giai điệu vui tươi dần rõ nét, khóe môi tôi vô thức khẽ động.",
			"...Có gì đó đang len lỏi vào."
		],
		"thai": [
			"ทุ่งหิมะกว้างใหญ่ไร้ที่สิ้นสุด",
			"ทุกย่างก้าว เพลงของถ้วยเขาแกะก็ติดอยู่ในใจ",
			"ท่วงทำนองร่าเริงยิ่งชัดเจนขึ้น และมุมปากของฉันก็กระตุกโดยไม่รู้ตัว",
			"...บางสิ่งกำลังซึมซับเข้ามา"
		],
		"hindi": [
			"बर्फ़ का एक अंतहीन विस्तार।",
			"हर कदम पर, सींग के प्याले का गीत मेरे मन में घर कर गया।",
			"उल्लासपूर्ण धुन और स्पष्ट होती गई, और मेरे होंठ अनजाने में फड़फड़ाए।",
			"...कुछ अंदर घुस रहा है।"
		]
	}
} as const;
