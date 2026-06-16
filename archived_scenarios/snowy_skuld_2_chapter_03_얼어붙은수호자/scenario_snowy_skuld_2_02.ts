export const scenario_snowy_skuld_2_02 = {
	"scenario_id": "snowy_skuld_2_02",
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
					"type": "speech",
					"content": {
						"korean": "끝없는 눈보라 너머, 푸른빛 감도는 거대한 빙하가 솟아 있었다.",
						"english": "Beyond the endless blizzard, a colossal glacier glowed with a blue light.",
						"japanese": "終わりのない吹雪の向こう、青みがかった巨大な氷河がそびえ立っていた。",
						"chinese": "无尽的暴雪之外，一座泛着蓝光的巨大冰川耸立着。",
						"french": "Au-delà du blizzard incessant, un glacier colossal brillait d'une lumière bleue.",
						"spanish": "Más allá de la ventisca interminable, un glaciar colosal brillaba con una luz azul.",
						"vietnamese": "Vượt qua bão tuyết vô tận, một sông băng khổng lồ phát sáng màu xanh lam.",
						"thai": "เหนือพายุหิมะที่ไม่มีวันสิ้นสุด ธารน้ำแข็งมหึมากำลังเรืองแสงสีฟ้า.",
						"hindi": "अंतहीन बर्फीले तूफान के पार, एक विशाल ग्लेशियर नीली रोशनी के साथ चमक रहा था।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						5,
						2
					],
					"duration_ms": 500,
					"speaker": "ivar"
				},
				{
					"speaker": "ivar",
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "이게 빙하의 수호자라고? 풋, 얼마나 강한지 직접 확인해 주지!",
						"english": "This is the Glacier Guardian? Hah, I'll see how strong it truly is!",
						"japanese": "これが氷河の守護者だと？フン、どれだけ強いかこの目で確かめてやる！",
						"chinese": "这就是冰川的守护者？哼，我倒要亲自看看它有多强！",
						"french": "C'est ça le Gardien du Glacier ? Ha, je vais voir à quel point il est fort !",
						"spanish": "¿Este es el Guardián del Glaciar? ¡Ja, veré lo fuerte que es en persona!",
						"vietnamese": "Đây là Người bảo vệ sông băng ư? Hừm, để ta tự mình xem nó mạnh đến mức nào!",
						"thai": "นี่คือผู้พิทักษ์ธารน้ำแข็งงั้นรึ? หึ, ข้าจะดูเองว่ามันแข็งแกร่งแค่ไหน!",
						"hindi": "यह ग्लेशियर का संरक्षक है? हा, मैं खुद देखूंगा कि यह कितना मजबूत है!"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "이바르, 너무 성급해.",
						"english": "Ivar, you're too hasty.",
						"japanese": "イーヴァル、性急すぎる。",
						"chinese": "伊瓦尔，你太急躁了。",
						"french": "Ivar, tu es trop pressé.",
						"spanish": "Ivar, eres demasiado impaciente.",
						"vietnamese": "Ivar, ngươi quá vội vàng rồi.",
						"thai": "ไอวาร์, เจ้าใจร้อนเกินไปแล้ว.",
						"hindi": "इवर, तुम बहुत जल्दबाज हो।"
					},
					"speaker": "character_any",
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"action": "enter",
					"type": "direction",
					"speaker": "ivar"
				},
				{
					"speaker": "ivar",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "점점 더 차가워지는군. 이게 네 대답이냐?",
						"english": "It's getting colder and colder. Is this your answer?",
						"japanese": "ますます冷たくなってきたな。これが貴様の答えか？",
						"chinese": "越来越冷了。这就是你的回答吗？",
						"french": "Il fait de plus en plus froid. Est-ce ta réponse ?",
						"spanish": "Cada vez hace más frío. ¿Es esta tu respuesta?",
						"vietnamese": "Càng lúc càng lạnh. Đây là câu trả lời của ngươi sao?",
						"thai": "มันช่างหนาวเย็นขึ้นเรื่อยๆ นี่คือคำตอบของเจ้าใช่ไหม?",
						"hindi": "ठंड बढ़ती जा रही है। क्या यही तुम्हारा जवाब है?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "빙하의 한기는 묵직하게 탐험대를 짓눌렀다. 위협적이라기보다, 단호했다.",
						"english": "The glacier's chill weighed heavily on the expedition. It wasn't threatening, but resolute.",
						"japanese": "氷河の冷気は重く探検隊を圧迫した。脅威というよりは、断固たるものだった。",
						"chinese": "冰川的寒气沉重地压迫着探险队。与其说是威胁，不如说是坚定。",
						"french": "Le froid du glacier pesait lourdement sur l'expédition. Ce n'était pas menaçant, mais résolu.",
						"spanish": "El frío del glaciar pesaba mucho sobre la expedición. No era amenazante, sino resuelto.",
						"vietnamese": "Hơi lạnh của sông băng đè nặng lên đoàn thám hiểm. Nó không phải là mối đe dọa, mà là sự kiên quyết.",
						"thai": "ความหนาวเย็นของธารน้ำแข็งกดดันคณะสำรวจอย่างหนัก ไม่ใช่การคุกคาม แต่เป็นการตัดสินใจ.",
						"hindi": "ग्लेशियर की ठंडक अभियान दल पर भारी पड़ रही थी। यह धमकी भरा नहीं, बल्कि दृढ़ था।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "ivar",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "흥, 그렇게 강하다면, 그 힘을 내게 보여라!",
						"english": "Hmph, if you're so strong, show me your power!",
						"japanese": "ふん、それほど強いのなら、その力を見せてみろ！",
						"chinese": "哼，既然如此强大，那就把你的力量展示给我看！",
						"french": "Hmph, si tu es si fort, montre-moi ton pouvoir !",
						"spanish": "Hmph, si eres tan fuerte, ¡muéstrame tu poder!",
						"vietnamese": "Hừm, nếu ngươi mạnh đến vậy, hãy cho ta thấy sức mạnh của ngươi đi!",
						"thai": "ฮึ่ม, ถ้าเจ้าแข็งแกร่งขนาดนั้น ก็แสดงพลังของเจ้าให้ข้าเห็นซะ!",
						"hindi": "हम्म, अगर तुम इतने शक्तिशाली हो, तो मुझे अपनी शक्ति दिखाओ!"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						5,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "ivar"
				},
				{
					"type": "speech",
					"content": {
						"korean": "겨우 이 정도인가? 더 강한 힘을 내게 보여!",
						"english": "Is this all you've got? Show me greater power!",
						"japanese": "たったこれだけか？もっと強い力を私に見せてみろ！",
						"chinese": "就这点本事吗？给我展示更强的力量！",
						"french": "C'est tout ce que tu as ? Montre-moi plus de puissance !",
						"spanish": "¿Es todo lo que tienes? ¡Muéstrame un poder mayor!",
						"vietnamese": "Chỉ có thế thôi sao? Hãy cho ta thấy sức mạnh lớn hơn!",
						"thai": "แค่นี้เองเหรอ? แสดงพลังที่แข็งแกร่งกว่านี้ให้ข้าเห็น!",
						"hindi": "बस इतना ही है? मुझे और अधिक शक्ति दिखाओ!"
					},
					"speaker": "ivar",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "얼음 깊은 곳에서 옅은 푸른빛이 안개처럼 피어올랐다.",
						"english": "From the depths of the ice, a faint blue light rose like mist.",
						"japanese": "氷の奥深くから、薄い青い光が霧のように立ち上った。",
						"chinese": "冰层深处，淡淡的蓝光如雾般升腾而起。",
						"french": "Des profondeurs de la glace, une faible lumière bleue s'éleva comme une brume.",
						"spanish": "Desde las profundidades del hielo, una tenue luz azul se elevó como niebla.",
						"vietnamese": "Từ sâu thẳm băng giá, một luồng ánh sáng xanh nhạt bốc lên như sương mù.",
						"thai": "จากส่วนลึกของน้ำแข็ง แสงสีฟ้าอ่อนผุดขึ้นมาราวกับหมอก",
						"hindi": "बर्फ की गहराई से, एक हल्की नीली रोशनी धुंध की तरह ऊपर उठी।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…이상해. 단순한 얼음은 아니야.",
						"english": "...Strange. This is no ordinary ice.",
						"japanese": "…おかしい。ただの氷じゃない。",
						"chinese": "……奇怪。这不是普通的冰。",
						"french": "...Bizarre. Ce n'est pas de la glace ordinaire.",
						"spanish": "...Extraño. No es hielo común.",
						"vietnamese": "...Lạ thật. Đây không phải băng thường.",
						"thai": "...แปลกจัง นี่ไม่ใช่น้ำแข็งธรรมดา",
						"hindi": "...अजीब है। यह सिर्फ बर्फ नहीं है।"
					},
					"speaker": "character_any",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "ivar",
					"spot": [
						5,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "드디어 모습을 드러내는군. 잘 왔다, 수호자여!",
						"english": "You finally show yourself. Welcome, Guardian!",
						"japanese": "ついに姿を現したか。よく来たな、守護者よ！",
						"chinese": "终于现身了。欢迎，守护者！",
						"french": "Tu te montres enfin. Bienvenue, Gardien !",
						"spanish": "Finalmente te muestras. ¡Bienvenido, Guardián!",
						"vietnamese": "Cuối cùng ngươi cũng xuất hiện. Chào mừng, Người bảo hộ!",
						"thai": "ในที่สุดเจ้าก็ปรากฏตัว ยินดีต้อนรับ ผู้พิทักษ์!",
						"hindi": "आखिरकार तुम सामने आ गए। स्वागत है, संरक्षक!"
					},
					"speaker": "ivar",
					"emotion": "happy"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "빙하가 움직일 때, 그 무게감은 자연의 정령이라기엔 너무도 거대한 선체의 그것을 닮았다.",
						"english": "As the glacier moved, its mass resembled that of a colossal hull, far too immense for a spirit of nature.",
						"japanese": "氷河が動く時、その重厚感は、自然の精霊というよりは、あまりにも巨大な船体のものであるかのように感じられた。",
						"chinese": "冰川移动时，其沉重感与其说像自然精灵，不如说更像一艘过于巨大的船体。",
						"french": "Lorsque le glacier se déplaçait, sa masse ressemblait à celle d'une coque colossale, bien trop immense pour un esprit de la nature.",
						"spanish": "Cuando el glaciar se movía, su peso se asemejaba al de un casco colosal, demasiado inmenso para ser un espíritu de la naturaleza.",
						"vietnamese": "Khi dòng sông băng di chuyển, sức nặng của nó giống như một thân tàu khổng lồ, quá đồ sộ để là một linh hồn của tự nhiên.",
						"thai": "เมื่อธารน้ำแข็งเคลื่อนตัว แรงกดดันของมันคล้ายคลึงกับเรือเดินสมุทรขนาดมหึมา ซึ่งใหญ่เกินกว่าจะเป็นวิญญาณแห่งธรรมชาติ",
						"hindi": "जब ग्लेशियर चला, तो उसका वजन एक विशालकाय जहाज के पतवार जैसा था, जो प्रकृति की आत्मा के लिए बहुत बड़ा था।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "…정말 싸울 생각이야?",
						"english": "...Are you truly going to fight?",
						"japanese": "…本当に戦うつもりなのか？",
						"chinese": "……你真的打算战斗吗？",
						"french": "...Tu as vraiment l'intention de te battre ?",
						"spanish": "...¿De verdad vas a luchar?",
						"vietnamese": "...Ngươi thực sự muốn chiến đấu sao?",
						"thai": "...เจ้าจะสู้จริงๆ รึเปล่า?",
						"hindi": "...क्या तुम सच में लड़ने वाले हो?"
					},
					"speaker": "character_any",
					"emotion": "sad"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 빙하 속에서 깨어났다. 그 한기에 분노보다 깊은 피로가 배어 있었다.",
						"english": "A colossal shadow awoke within the glacier. Its chill carried a weariness deeper than anger.",
						"japanese": "巨大な影が氷河の中で目覚めた。その冷気には、怒りよりも深い疲労が染み込んでいた。",
						"chinese": "一道巨大的身影在冰川中苏醒。它的寒气中渗透着比愤怒更深的疲惫。",
						"french": "Une ombre colossale s'éveilla dans le glacier. Sa froideur portait une lassitude plus profonde que la colère.",
						"spanish": "Una sombra colosal despertó dentro del glaciar. Su frialdad contenía una fatiga más profunda que la ira.",
						"vietnamese": "Một bóng đen khổng lồ thức tỉnh trong sông băng. Cái lạnh của nó ẩn chứa sự mệt mỏi sâu sắc hơn cả giận dữ.",
						"thai": "เงาขนาดมหึมาตื่นขึ้นในธารน้ำแข็ง ความเยือกเย็นของมันแฝงไว้ด้วยความเหนื่อยล้าที่ลึกซึ้งกว่าความโกรธ",
						"hindi": "एक विशाल छाया ग्लेशियर के भीतर जागृत हुई। उसकी ठंडक में क्रोध से भी गहरी थकान समाई हुई थी।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이 시험을 견딜 수 있는가, 도전하는 자여.",
						"english": "Can you endure this trial, challenger?",
						"japanese": "この試練に耐えられるか、挑戦者よ。",
						"chinese": "挑战者，你能承受住这次考验吗？",
						"french": "Peux-tu supporter cette épreuve, challenger ?",
						"spanish": "¿Puedes soportar esta prueba, desafiante?",
						"vietnamese": "Ngươi có thể chịu đựng thử thách này không, kẻ thách thức?",
						"thai": "เจ้าจะทนทานต่อบททดสอบนี้ได้หรือไม่ ผู้ท้าทาย?",
						"hindi": "क्या तुम इस परीक्षा को सह सकते हो, चुनौती देने वाले?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "네가 진짜 수호자라면, 내게 네 강함을 증명해라!",
						"english": "If you are a true Guardian, prove your strength to me!",
						"japanese": "もしお前が真の守護者ならば、私にその強さを見せてみろ！",
						"chinese": "如果你是真正的守护者，就向我证明你的强大！",
						"french": "Si tu es un véritable Gardien, prouve-moi ta force !",
						"spanish": "Si eres un verdadero Guardián, ¡demuéstrame tu fuerza!",
						"vietnamese": "Nếu ngươi là Người bảo hộ thật sự, hãy chứng minh sức mạnh của ngươi cho ta!",
						"thai": "ถ้าเจ้าคือผู้พิทักษ์ที่แท้จริง จงพิสูจน์ความแข็งแกร่งของเจ้าให้ข้าเห็น!",
						"hindi": "यदि तुम सच्चे संरक्षक हो, तो मुझे अपनी शक्ति साबित करो!"
					},
					"speaker": "ivar",
					"emotion": "angry"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "강렬한 한기가 모든 것을 얼어붙게 했다.",
						"english": "An intense chill froze everything.",
						"japanese": "強烈な冷気がすべてを凍てつかせた。",
						"chinese": "刺骨的寒意冻结了一切。",
						"french": "Un froid intense a tout gelé.",
						"spanish": "Un frío intenso lo congeló todo.",
						"vietnamese": "Một luồng khí lạnh dữ dội đã đóng băng mọi thứ.",
						"thai": "ความหนาวเย็นอันรุนแรงทำให้ทุกสิ่งกลายเป็นน้ำแข็ง",
						"hindi": "एक तीव्र ठंड ने सब कुछ जमा दिया।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "어리석은 자. 네 힘은 닿지 못한다.",
						"english": "Fool. Your power cannot reach.",
						"japanese": "愚か者め。お前の力は届かない。",
						"chinese": "愚蠢的家伙。你的力量无法触及。",
						"french": "Imbécile. Ton pouvoir ne peut pas atteindre.",
						"spanish": "Necio. Tu poder no alcanza.",
						"vietnamese": "Kẻ ngốc. Sức mạnh của ngươi không thể đạt tới.",
						"thai": "เจ้าโง่ พลังของเจ้าไปไม่ถึงหรอก",
						"hindi": "मूर्ख। तुम्हारी शक्ति नहीं पहुंच सकती।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "빌어먹을… 아직 끝나지 않았다!",
						"english": "Damn it... It's not over yet!",
						"japanese": "くそっ… まだ終わってない！",
						"chinese": "该死……还没有结束！",
						"french": "Maudite... Ce n'est pas encore fini !",
						"spanish": "Maldita sea... ¡Todavía no ha terminado!",
						"vietnamese": "Chết tiệt... Nó vẫn chưa kết thúc!",
						"thai": "บ้าเอ๊ย... ยังไม่จบ!",
						"hindi": "धिक्कार है... यह अभी खत्म नहीं हुआ है!"
					},
					"speaker": "ivar",
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "…강함의 끝은… 너의 힘이 아니었어….",
						"english": "...The end of strength... wasn't your power...",
						"japanese": "…強さの果ては… お前の力ではなかった…。",
						"chinese": "……力量的尽头……并非你的力量……。",
						"french": "...La fin de la force... ce n'était pas ta puissance...",
						"spanish": "...El fin de la fuerza... no era tu poder...",
						"vietnamese": "...Giới hạn của sức mạnh... không phải là sức mạnh của ngươi...",
						"thai": "...จุดจบของความแข็งแกร่ง... ไม่ใช่พลังของเจ้า...",
						"hindi": "...शक्ति का अंत... तुम्हारी शक्ति नहीं थी..."
					},
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"speaker": "ivar",
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "끝은 없다. 나는 계속 나아갈 뿐이다!",
						"english": "There is no end. I will only press on!",
						"japanese": "終わりはない。私はただ進み続けるだけだ！",
						"chinese": "没有尽头。我只会继续前进！",
						"french": "Il n'y a pas de fin. Je continuerai d'avancer !",
						"spanish": "No hay fin. ¡Solo seguiré adelante!",
						"vietnamese": "Không có hồi kết. Tôi sẽ chỉ tiếp tục tiến lên!",
						"thai": "ไม่มีที่สิ้นสุด ฉันจะก้าวต่อไปเท่านั้น!",
						"hindi": "कोई अंत नहीं है। मैं बस आगे बढ़ता रहूंगा!"
					}
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "빙하의 심장부는 여전히 미지의 빛을 품고 있었다. 다음 여정은 더 깊은 곳으로.",
						"english": "The heart of the glacier still held an unknown light. The next journey leads deeper.",
						"japanese": "氷河の心臓部は、まだ未知の光を宿していた。次の旅は、より深き場所へ。",
						"chinese": "冰川之心依然蕴藏着未知的光芒。下一次旅程将通往更深处。",
						"french": "Le cœur du glacier abritait toujours une lumière inconnue. Le prochain voyage mène plus profondément.",
						"spanish": "El corazón del glaciar aún guardaba una luz desconocida. El siguiente viaje nos lleva a lo más profundo.",
						"vietnamese": "Trái tim của sông băng vẫn ẩn chứa một ánh sáng vô danh. Chuyến hành trình tiếp theo sẽ dẫn sâu hơn.",
						"thai": "ใจกลางของธารน้ำแข็งยังคงมีแสงที่ไม่รู้จักอยู่ การเดินทางครั้งต่อไปจะนำไปสู่ที่ลึกกว่าเดิม",
						"hindi": "ग्लेशियर के हृदय में अभी भी एक अज्ञात प्रकाश था। अगली यात्रा और गहरे तक जाती है।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"북방의 잊힌 설원, 거대한 빙하가 솟아 있었다.",
			"태고의 정령은 침범자를 얼려버린다고 했다.",
			"그러나 이바르는 그 힘을 시험하려 들었고,",
			"빙하는 오직, 느리고 무거운 한기로만 답했다."
		],
		"english": [
			"In the forgotten northern snowfields, a colossal glacier towered.",
			"Ancient spirits were said to freeze intruders.",
			"But Ivar dared to test its power,",
			"The glacier responded only with a slow, heavy chill."
		],
		"japanese": [
			"北方の忘れられた雪原に、巨大な氷河がそびえ立っていた。",
			"太古の精霊は侵入者を凍らせると言われた。",
			"しかし、イーヴァルはその力を試そうとした、",
			"氷河はただ、遅く重い冷気でのみ応えた。"
		],
		"chinese": [
			"北方被遗忘的雪原上，耸立着巨大的冰川。",
			"传说远古精灵会冻结入侵者。",
			"然而伊瓦尔却试图试探它的力量，",
			"冰川只以缓慢而沉重的寒气回应。"
		],
		"french": [
			"Dans les champs de neige oubliés du nord, un glacier colossal s'élevait.",
			"On disait que les esprits antiques gelaient les intrus.",
			"Mais Ivar osa tester son pouvoir,",
			"Le glacier ne répondit qu'avec un froid lent et lourd."
		],
		"spanish": [
			"En los olvidados campos de nieve del norte, un glaciar colosal se alzaba.",
			"Se decía que los espíritus ancestrales congelaban a los intrusos.",
			"Pero Ivar se atrevió a probar su poder,",
			"El glaciar solo respondió con un frío lento y pesado."
		],
		"vietnamese": [
			"Trên cánh đồng tuyết bị lãng quên phía bắc, một sông băng khổng lồ sừng sững.",
			"Người ta nói rằng linh hồn cổ xưa sẽ đóng băng những kẻ xâm nhập.",
			"Nhưng Ivar đã dám thử sức mạnh đó,",
			"Sông băng chỉ đáp lại bằng một làn hơi lạnh chậm chạp và nặng nề."
		],
		"thai": [
			"ณ ทุ่งหิมะอันเลือนลางทางเหนือ ธารน้ำแข็งมหึมากำลังตระหง่าน.",
			"เล่ากันว่าวิญญาณโบราณจะแช่แข็งผู้บุกรุก.",
			"แต่ไอวาร์กลับกล้าที่จะทดสอบพลังนั้น,",
			"ธารน้ำแข็งตอบกลับมาเพียงความหนาวเย็นที่เชื่องช้าและหนักอึ้ง."
		],
		"hindi": [
			"उत्तर के भूले हुए बर्फीले मैदानों में, एक विशाल ग्लेशियर खड़ा था।",
			"कहा जाता था कि प्राचीन आत्माएं घुसपैठियों को जमा देती थीं।",
			"लेकिन इवर ने उसकी शक्ति को परखने की हिम्मत की,",
			"ग्लेशियर ने केवल एक धीमी, भारी ठंडक से जवाब दिया।"
		]
	}
} as const;
