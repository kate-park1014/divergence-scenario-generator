export const scenario_snowy_anya_4_03 = {
	"scenario_id": "snowy_anya_4_03",
	"order": 3,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"inka": {
			"id": "mon_583e945a-1e2f-428b-a251-b428f25b4052",
			"name": {
				"korean": "인카",
				"english": "Inka",
				"japanese": "インカ",
				"chinese": "因卡",
				"french": "Inka",
				"spanish": "Inka",
				"vietnamese": "Inka",
				"thai": "อินคา",
				"hindi": "इंंका"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/97f4545b-2e8a-4688-3e4e-b34bb246dd00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f27763ba-2358-4fd3-c813-0f0b59dcac00/public"
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
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "시야를 가로막는 눈보라 속, 작은 빛이 길을 열었다.",
						"english": "Amidst the blizzard obstructing vision, a small light opened the way.",
						"japanese": "視界を遮る吹雪の中、小さな光が道を開いた。",
						"chinese": "在阻碍视线的暴风雪中，一束微光开辟了道路。",
						"french": "Au milieu du blizzard qui obstruait la vue, une petite lumière ouvrit le chemin.",
						"spanish": "En medio de la ventisca que obstruía la vista, una pequeña luz abrió el camino.",
						"vietnamese": "Giữa cơn bão tuyết che khuất tầm nhìn, một tia sáng nhỏ đã mở đường.",
						"thai": "ท่ามกลางพายุหิมะที่บดบังทัศนวิสัย แสงน้อยๆ ได้เปิดทาง",
						"hindi": "दृष्टि बाधित करने वाले बर्फीले तूफान के बीच, एक छोटी रोशनी ने रास्ता खोला।"
					},
					"emotion": "base"
				},
				{
					"speaker": "inka",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "inka",
					"type": "speech",
					"content": {
						"korean": "…여기 좀 봐.",
						"english": "...Look here.",
						"japanese": "…ここを見て。",
						"chinese": "…看这里。",
						"french": "...Regarde ici.",
						"spanish": "...Mira aquí.",
						"vietnamese": "...Nhìn đây.",
						"thai": "...ดูนี่สิ",
						"hindi": "...यहाँ देखो।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이건… 서리꽃?",
						"english": "Is this... a frost flower?",
						"japanese": "これは…霜の花？",
						"chinese": "这是…霜花？",
						"french": "C'est... une fleur de givre ?",
						"spanish": "¿Esto es... una flor de escarcha?",
						"vietnamese": "Đây là... hoa băng?",
						"thai": "นี่มัน... ดอกไม้น้ำแข็ง?",
						"hindi": "क्या यह... एक फ्रॉست फ्लावर है?"
					},
					"emotion": "base"
				},
				{
					"emotion": "happy",
					"speaker": "inka",
					"type": "speech",
					"content": {
						"korean": "빛이 지나간 자리마다 피어났어. 온기가 닿은 것처럼.",
						"english": "They bloomed everywhere the light passed, as if touched by warmth.",
						"japanese": "光が通った場所ごとに咲き誇った。温もりに触れたかのように。",
						"chinese": "光芒所到之处都绽放了，仿佛被温暖触碰过。",
						"french": "Elles ont fleuri partout où la lumière passait, comme si elles avaient été touchées par la chaleur.",
						"spanish": "Florecieron por donde pasaba la luz, como si hubieran sido tocadas por el calor.",
						"vietnamese": "Chúng nở rộ khắp nơi ánh sáng đi qua, như thể được hơi ấm chạm vào.",
						"thai": "มันเบ่งบานทุกที่ที่แสงผ่านไป ราวกับได้รับไออุ่น",
						"hindi": "वे हर जगह खिल गए जहाँ से रोशनी गुज़री, मानो गर्माहट से छू गए हों।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "하지만 빛은 가까이 오지 않아.",
						"english": "But the light doesn't come closer.",
						"japanese": "でも光は近づいてこない。",
						"chinese": "但是光没有靠近。",
						"french": "Mais la lumière ne s'approche pas.",
						"spanish": "Pero la luz no se acerca.",
						"vietnamese": "Nhưng ánh sáng không đến gần.",
						"thai": "แต่แสงไม่ได้เข้ามาใกล้",
						"hindi": "लेकिन रोशनी पास नहीं आती।"
					}
				},
				{
					"speaker": "inka",
					"type": "speech",
					"content": {
						"korean": "이상하지… 이렇게 따뜻한데.",
						"english": "Strange... it's so warm.",
						"japanese": "変だね…こんなに暖かいのに。",
						"chinese": "奇怪…明明这么温暖。",
						"french": "Étrange... c'est si chaud.",
						"spanish": "Extraño... es tan cálido.",
						"vietnamese": "Lạ thật... ấm áp thế này mà.",
						"thai": "แปลกจัง... ทั้งๆ ที่อบอุ่นขนาดนี้",
						"hindi": "अजीब है... यह इतना गर्म है।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "inka",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "inka",
					"type": "speech",
					"content": {
						"korean": "꽃이 더 많아졌어. 빛이 오래 머물렀나 봐.",
						"english": "More flowers. The light must have lingered.",
						"japanese": "花が増えた。光が長く留まっていたようだ。",
						"chinese": "花更多了。光线似乎停留了很久。",
						"french": "Plus de fleurs. La lumière a dû s'attarder.",
						"spanish": "Más flores. La luz debió quedarse un buen rato.",
						"vietnamese": "Nhiều hoa hơn rồi. Ánh sáng chắc đã ở lại lâu.",
						"thai": "ดอกไม้เยอะขึ้นแล้ว แสงคงอยู่นานสินะ",
						"hindi": "और फूल आ गए हैं। लगता है रोशनी देर तक रुकी थी。"
					},
					"emotion": "happy"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "희한하네. 눈보라 속에서 꽃이라니.",
						"english": "Strange. Flowers in a blizzard.",
						"japanese": "奇妙だな。吹雪の中で花とは。",
						"chinese": "真奇怪。暴风雪中竟然有花。",
						"french": "Étrange. Des fleurs dans un blizzard.",
						"spanish": "Qué raro. Flores en medio de una tormenta de nieve.",
						"vietnamese": "Lạ thật. Hoa giữa bão tuyết.",
						"thai": "แปลกจัง ดอกไม้กลางพายุหิมะเนี่ยนะ",
						"hindi": "अजीब है। बर्फीले तूफान में फूल।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "inka",
					"type": "speech",
					"content": {
						"korean": "…따뜻해.",
						"english": "...Warm.",
						"japanese": "…暖かい。",
						"chinese": "……暖和。",
						"french": "...Chaud.",
						"spanish": "...Cálido.",
						"vietnamese": "...Ấm áp.",
						"thai": "...อุ่นจัง",
						"hindi": "...गर्म।"
					}
				},
				{
					"speaker": "inka",
					"type": "speech",
					"content": {
						"korean": "그런데… 왜 이렇게 외롭지.",
						"english": "But... why do I feel so lonely?",
						"japanese": "でも…どうしてこんなに寂しいんだろう。",
						"chinese": "但是……为什么这么寂寞呢。",
						"french": "Mais... pourquoi suis-je si seul ?",
						"spanish": "¿Pero... por qué me siento tan solo?",
						"vietnamese": "Nhưng... sao mình lại cô đơn thế này?",
						"thai": "แต่ว่า... ทำไมถึงเหงาขนาดนี้นะ",
						"hindi": "लेकिन... मैं इतना अकेला क्यों महसूस कर रहा हूँ?"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "inka",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "빛은 닿을 듯 말 듯한 거리를 유지했다.",
						"english": "The light kept a tantalizing distance.",
						"japanese": "光は、届きそうで届かない距離を保っていた。",
						"chinese": "光保持着若即若离的距离。",
						"french": "La lumière maintenait une distance insaisissable.",
						"spanish": "La luz mantuvo una distancia que parecía inalcanzable.",
						"vietnamese": "Ánh sáng giữ một khoảng cách dường như có thể chạm tới nhưng lại không.",
						"thai": "แสงคงระยะห่างที่เหมือนจะเอื้อมถึงแต่ก็ไม่ถึงไว้",
						"hindi": "रोशनी ने एक मोहक दूरी बनाए रखी।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "꽃잎에서 찬 기운이 느껴져….",
						"english": "I feel a chill from the petals...",
						"japanese": "花びらから冷たい気がする…。",
						"chinese": "从花瓣上感受到了寒意……。",
						"french": "Je ressens une froideur des pétales...",
						"spanish": "Siento un frío de los pétalos...",
						"vietnamese": "Cảm thấy hơi lạnh từ cánh hoa...",
						"thai": "รู้สึกถึงความเย็นจากกลีบดอกไม้...",
						"hindi": "पंखुड़ियों से ठंडक महसूस हो रही है..."
					},
					"speaker": "inka",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "찬 기운? 온기 말고?",
						"english": "A chill? Not warmth?",
						"japanese": "冷たい気？温もりじゃなくて？",
						"chinese": "寒意？不是温暖？",
						"french": "Une froideur ? Pas de chaleur ?",
						"spanish": "¿Un frío? ¿No calor?",
						"vietnamese": "Hơi lạnh? Không phải hơi ấm sao?",
						"thai": "ความเย็น? ไม่ใช่อบอุ่นเหรอ?",
						"hindi": "ठंडक? गरमाहट नहीं?"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "inka",
					"type": "speech",
					"content": {
						"korean": "응. 아주 가느다란… 슬픈 한기.",
						"english": "Yes. A very subtle... sad chill.",
						"japanese": "うん。とても微かな…悲しい冷気。",
						"chinese": "嗯。一丝丝……悲伤的寒意。",
						"french": "Oui. Une très subtile... froideur triste.",
						"spanish": "Sí. Un frío muy sutil... triste.",
						"vietnamese": "Ừ. Một chút... lạnh lẽo buồn bã.",
						"thai": "อืม... ความเย็นเยียบที่แสนเศร้า",
						"hindi": "हाँ। एक बहुत ही सूक्ष्म... उदास ठंडक।"
					}
				},
				{
					"emotion": "base",
					"speaker": "inka",
					"type": "speech",
					"content": {
						"korean": "이 빛도, 서리꽃도… 마치 무언가를 감추는 것 같아.",
						"english": "This light, these frost flowers... they seem to be hiding something.",
						"japanese": "この光も、霜の花も…まるで何かを隠しているようだ。",
						"chinese": "这光，还有这些霜花……仿佛在隐藏着什么。",
						"french": "Cette lumière, ces fleurs de givre... elles semblent cacher quelque chose.",
						"spanish": "Esta luz, estas flores de escarcha... parece que esconden algo.",
						"vietnamese": "Ánh sáng này, cả những bông hoa băng giá này... dường như đang che giấu điều gì đó.",
						"thai": "แสงนี้ ดอกไม้น้ำแข็งนี้... ดูเหมือนจะซ่อนบางสิ่งบางอย่างไว้",
						"hindi": "यह रोशनी, ये पाले के फूल... कुछ छिपा रहे हैं, ऐसा लगता है।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "inka",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "점점 더 깊숙이 들어오는 기분이야.",
						"english": "I feel like I'm going deeper and deeper.",
						"japanese": "どんどん奥深くに入っていく気分だ。",
						"chinese": "感觉越来越深入了。",
						"french": "J'ai l'impression de m'enfoncer de plus en plus profondément.",
						"spanish": "Siento que me estoy adentrando cada vez más.",
						"vietnamese": "Cảm giác như mình đang đi sâu hơn nữa.",
						"thai": "รู้สึกเหมือนกำลังจะเข้าไปลึกขึ้นเรื่อยๆ",
						"hindi": "मुझे ऐसा लग रहा है कि मैं और गहरा होता जा रहा हूँ।"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "빛이 우리를 어디로 데려가는 걸까.",
						"english": "Where is the light taking us?",
						"japanese": "光は私たちをどこへ連れていくのだろう。",
						"chinese": "光会将我们带向何方？",
						"french": "Où la lumière nous mène-t-elle ?",
						"spanish": "¿A dónde nos lleva la luz?",
						"vietnamese": "Ánh sáng sẽ đưa chúng ta đi đâu?",
						"thai": "แสงสว่างจะนำพาเราไปที่ใดกันนะ",
						"hindi": "यह प्रकाश हमें कहाँ ले जा रहा है?"
					},
					"speaker": "inka"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그때, 거대한 그림자가 앞을 가로막았다.",
						"english": "Then, a giant shadow blocked our path.",
						"japanese": "その時、巨大な影が道を塞いだ。",
						"chinese": "此时，一道巨大的阴影挡住了去路。",
						"french": "Alors, une ombre gigantesque barra notre chemin.",
						"spanish": "Entonces, una sombra gigante bloqueó nuestro camino.",
						"vietnamese": "Lúc đó, một cái bóng khổng lồ đã chặn lối.",
						"thai": "ทันใดนั้น เงายักษ์ก็ขวางทางไว้",
						"hindi": "तभी, एक विशाल छाया ने हमारा रास्ता रोक दिया।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "더 이상… 들어오지 마라.",
						"english": "No further... Do not enter.",
						"japanese": "これ以上…入るな。",
						"chinese": "不许再…进入。",
						"french": "Pas plus loin... N'entrez pas.",
						"spanish": "No más... No entres.",
						"vietnamese": "Đừng… tiến vào nữa.",
						"thai": "ห้าม... เข้ามาอีก",
						"hindi": "और नहीं... अंदर मत आओ।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "inka",
					"type": "speech",
					"content": {
						"korean": "…길을 막는 자마저, 어딘가 슬퍼 보여.",
						"english": "...Even the one blocking our path seems sad.",
						"japanese": "…道を阻む者までも、どこか悲しげだ。",
						"chinese": "…就连阻拦者，也似乎有些悲伤。",
						"french": "...Même celui qui bloque le chemin semble triste.",
						"spanish": "...Incluso quien nos bloquea el camino, parece triste.",
						"vietnamese": "…Ngay cả kẻ chặn lối cũng có vẻ buồn bã.",
						"thai": "...แม้แต่ผู้ขวางทาง ก็ดูเศร้าสร้อย",
						"hindi": "...जो रास्ता रोक रहा है, वह भी कहीं-न-कहीं उदास दिख रहा है।"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "결국… 여기까지 오는구나.",
						"english": "So... you've come this far after all.",
						"japanese": "結局…ここまで来るか。",
						"chinese": "终究…还是来到这里了啊。",
						"french": "Finalement... tu es venu jusqu'ici.",
						"spanish": "Al final... has llegado hasta aquí.",
						"vietnamese": "Cuối cùng… bạn cũng đã đến đây.",
						"thai": "ในที่สุด... เจ้าก็มาถึงที่นี่",
						"hindi": "आखिरकार... तुम यहाँ तक आ ही गए।"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 길 끝에는… 아무것도 없어.",
						"english": "At the end of this path... there is nothing.",
						"japanese": "この道の終わりには…何もない。",
						"chinese": "这条路的尽头…什么都没有。",
						"french": "Au bout de ce chemin... il n'y a rien.",
						"spanish": "Al final de este camino... no hay nada.",
						"vietnamese": "Ở cuối con đường này… không có gì cả.",
						"thai": "สุดเส้นทางนี้... ไม่มีอะไรเลย",
						"hindi": "इस रास्ते के अंत में... कुछ भी नहीं है।"
					},
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"duration_ms": 500,
					"speaker": "inka",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…아니. 무언가 느껴져.",
						"english": "...No. I feel something.",
						"japanese": "…いや、何かが感じる。",
						"chinese": "…不。我感觉到什么了。",
						"french": "...Non. Je sens quelque chose.",
						"spanish": "...No. Siento algo.",
						"vietnamese": "...Không. Tôi cảm thấy có gì đó.",
						"thai": "...ไม่สิ ฉันรู้สึกได้ถึงบางอย่าง",
						"hindi": "...नहीं। मुझे कुछ महसूस हो रहा है।"
					},
					"speaker": "inka",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "눈보라가 잠잠해진 틈을 타, 희미한 속삭임이 들려왔다.",
						"english": "As the blizzard subsided, a faint whisper could be heard.",
						"japanese": "吹雪が収まった隙に、微かな囁きが聞こえてきた。",
						"chinese": "趁着暴风雪平息的间隙，微弱的低语传了过来。",
						"french": "Profitant de l'accalmie du blizzard, un faible murmure se fit entendre.",
						"spanish": "Aprovechando la calma de la tormenta de nieve, se escuchó un débil susurro.",
						"vietnamese": "Trong lúc bão tuyết lắng xuống, một tiếng thì thầm yếu ớt vang lên.",
						"thai": "ในจังหวะที่พายุหิมะสงบลง เสียงกระซิบแผ่วเบาก็ดังขึ้น",
						"hindi": "बर्फ़ीले तूफ़ान के थमते ही, एक धीमी फुसफुसाहट सुनाई दी।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…뭐지? 누가 부르는 것 같아.",
						"english": "...What is it? Someone seems to be calling.",
						"japanese": "…何だろう？誰かが呼んでいるようだ。",
						"chinese": "…什么？好像有人在叫我。",
						"french": "...Qu'est-ce que c'est ? On dirait que quelqu'un appelle.",
						"spanish": "...¿Qué es? Alguien parece estar llamando.",
						"vietnamese": "...Gì vậy? Có vẻ như có ai đó đang gọi.",
						"thai": "...อะไรน่ะ? เหมือนมีใครบางคนกำลังเรียกอยู่",
						"hindi": "...यह क्या है? लगता है कोई बुला रहा है।"
					},
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "어째서… 이 길을 굳이 나아가려는가.",
						"english": "Why... insist on walking this path?",
						"japanese": "なぜ…この道を敢えて進もうとするのか。",
						"chinese": "为何…执意要走这条路？",
						"french": "Pourquoi... insister pour avancer sur ce chemin ?",
						"spanish": "¿Por qué... insistes en seguir este camino?",
						"vietnamese": "Tại sao… cứ nhất quyết đi con đường này?",
						"thai": "เหตุใด... จึงยังจะก้าวเดินบนเส้นทางนี้",
						"hindi": "तुम इस रास्ते पर क्यों... ज़िद कर रहे हो?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "길을 막는다면, 우리는 뚫고 갈 뿐.",
						"english": "If you block the way, we will break through.",
						"japanese": "道を阻むなら、我々は突破するのみ。",
						"chinese": "若阻拦去路，我们便会闯过去。",
						"french": "Si tu bloques le chemin, nous passerons coûte que coûte.",
						"spanish": "Si bloqueas el camino, solo lo atravesaremos.",
						"vietnamese": "Nếu chặn đường, chúng ta sẽ vượt qua thôi.",
						"thai": "ถ้าขวางทาง เราก็จะฝ่าไป",
						"hindi": "अगर तुम रास्ता रोकोगे, तो हम बस इसे पार करेंगे।"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "당신에게도, 빛에게도… 이유가 있을 텐데.",
						"english": "You, and the light... must have a reason.",
						"japanese": "あなたにも、光にも…理由があるはずだ。",
						"chinese": "你，还有光…应该都有理由。",
						"french": "Toi aussi, et la lumière... devez avoir une raison.",
						"spanish": "Tú, y la luz... deben tener una razón.",
						"vietnamese": "Bạn, và ánh sáng… hẳn đều có lý do.",
						"thai": "ทั้งเจ้าและแสงสว่าง... คงมีเหตุผล",
						"hindi": "तुम्हारे पास भी, और प्रकाश के पास भी... एक कारण होगा।"
					},
					"speaker": "inka",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…그 이유를 알면, 후회할 것이다.",
						"english": "...If you knew the reason, you would regret it.",
						"japanese": "…その理由を知れば、後悔するだろう。",
						"chinese": "…若知其因，你定会后悔。",
						"french": "...Si tu connaissais la raison, tu le regretterais.",
						"spanish": "...Si supieras la razón, te arrepentirías.",
						"vietnamese": "…Nếu biết lý do, bạn sẽ hối hận đấy.",
						"thai": "...ถ้าเจ้ารู้เหตุผล เจ้าจะเสียใจ",
						"hindi": "...अगर तुम कारण जानोगे, तो पछताओगे।"
					},
					"speaker": "random_boss",
					"emotion": "sad"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "정체 모를 힘에 의해 탐험대는 쓰러졌다.",
						"english": "The expedition team fell, overcome by an unknown force.",
						"japanese": "正体不明の力により、探検隊は倒れた。",
						"chinese": "探险队被一股不明力量击败了。",
						"french": "L'équipe d'expédition est tombée, vaincue par une force inconnue.",
						"spanish": "El equipo de expedición cayó, superado por una fuerza desconocida.",
						"vietnamese": "Đoàn thám hiểm đã gục ngã bởi một thế lực không rõ.",
						"thai": "คณะสำรวจล้มลงด้วยพลังที่ไม่อาจระบุได้",
						"hindi": "अज्ञात शक्ति द्वारा अभियान दल पराजित हो गया।"
					}
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "아직… 너희가 알 때는 아니다.",
						"english": "It is not yet... your time to know.",
						"japanese": "まだ…お前たちが知る時ではない。",
						"chinese": "现在…还不是你们知道的时候。",
						"french": "Ce n'est pas encore... votre heure de savoir.",
						"spanish": "Aún no es... vuestro momento de saber.",
						"vietnamese": "Vẫn chưa phải lúc... các ngươi biết.",
						"thai": "ยัง…ไม่ใช่เวลาที่พวกเจ้าจะรู้",
						"hindi": "अभी… तुम्हें जानने का समय नहीं है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "…포기할 수 없어.",
						"english": "...I can't give up.",
						"japanese": "…諦めるわけにはいかない。",
						"chinese": "…我不能放弃。",
						"french": "...Je ne peux pas abandonner.",
						"spanish": "...No puedo rendirme.",
						"vietnamese": "...Không thể bỏ cuộc.",
						"thai": "...ฉันยอมแพ้ไม่ได้",
						"hindi": "...मैं हार नहीं मान सकता हूं।"
					},
					"speaker": "character_any",
					"emotion": "angry"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"눈보라가 모든 것을 집어삼키는 설원.",
			"작은 빛 하나가 길을 이끌었다.",
			"온화하고 따뜻한 빛. 그러나 인카의 가슴엔 알 수 없는 한기가 스몄다.",
			"어째서일까. 이 온기 속에는, 깊은 외로움이 숨어 있었다."
		],
		"english": [
			"A snowfield where blizzards devoured everything.",
			"A small light guided the way.",
			"A gentle, warm light. Yet, an unknown chill permeated Inka's heart.",
			"Why? Within this warmth, a deep loneliness was hidden."
		],
		"japanese": [
			"吹雪が全てを飲み込む雪原。",
			"一つの小さな光が道を導いた。",
			"穏やかで温かい光。しかし、インカの胸には得体の知れない冷気が染み込んだ。",
			"なぜだろう。この温もりの中には、深い孤独が隠されていた。"
		],
		"chinese": [
			"暴风雪吞噬一切的雪原。",
			"一束微光指引着道路。",
			"柔和温暖的光。然而，一股莫名的寒意渗透了印卡的内心。",
			"为什么呢？在这份温暖中，隐藏着深深的孤独。"
		],
		"french": [
			"Une étendue enneigée où les blizzards dévoraient tout.",
			"Une petite lumière guidait le chemin.",
			"Une lumière douce et chaleureuse. Pourtant, un froid inconnu s'insinua dans le cœur d'Inka.",
			"Pourquoi ? Dans cette chaleur, une profonde solitude se cachait."
		],
		"spanish": [
			"Un campo nevado donde las ventiscas lo devoraban todo.",
			"Una pequeña luz guiaba el camino.",
			"Una luz suave y cálida. Sin embargo, un frío desconocido invadió el corazón de Inka.",
			"¿Por qué? Dentro de esta calidez, se ocultaba una profunda soledad."
		],
		"vietnamese": [
			"Một cánh đồng tuyết nơi bão tuyết nuốt chửng mọi thứ.",
			"Một tia sáng nhỏ dẫn lối.",
			"Ánh sáng dịu dàng, ấm áp. Tuy nhiên, một luồng khí lạnh không tên thấm vào tim Inka.",
			"Tại sao? Trong sự ấm áp này, một nỗi cô đơn sâu sắc ẩn chứa."
		],
		"thai": [
			"ทุ่งหิมะที่พายุหิมะกลืนกินทุกสิ่ง",
			"แสงน้อยๆ นำทาง",
			"แสงที่อ่อนโยนและอบอุ่น ทว่าความเย็นยะเยือกที่ไม่รู้จักกลับแผ่ซ่านเข้าสู่หัวใจของอินคา",
			"ทำไมนะ? ภายในความอบอุ่นนี้ มีความโดดเดี่ยวลึกซึ้งซ่อนอยู่"
		],
		"hindi": [
			"एक बर्फीला मैदान जहाँ बर्फीले तूफानों ने सब कुछ निगल लिया।",
			"एक छोटी रोशनी ने रास्ता दिखाया।",
			"एक कोमल, गर्म रोशनी। फिर भी, एक अज्ञात ठंड इंका के दिल में समा गई।",
			"क्यों? इस गर्माहट के भीतर, एक गहरी उदासी छिपी थी।"
		]
	}
} as const;
