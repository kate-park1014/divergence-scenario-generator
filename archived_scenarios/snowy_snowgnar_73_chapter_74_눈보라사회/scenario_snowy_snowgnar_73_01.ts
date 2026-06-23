export const scenario_snowy_snowgnar_73_01 = {
	"scenario_id": "snowy_snowgnar_73_01",
	"order": 1,
	"act": "intro",
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
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "끝없이 펼쳐진 설원, 눈보라가 시야를 가렸다.",
						"english": "An endless snowfield, blizzard obscures the view.",
						"japanese": "果てしなく広がる雪原、吹雪が視界を遮った。",
						"chinese": "无尽的雪原，暴风雪遮蔽了视线。",
						"french": "Une étendue enneigée infinie, le blizzard obstrue la vue.",
						"spanish": "Un campo de nieve interminable, la ventisca oculta la vista.",
						"vietnamese": "Cánh đồng tuyết vô tận, bão tuyết che khuất tầm nhìn.",
						"thai": "ทุ่งหิมะอันไร้ขอบเขต พายุหิมะบดบังทัศนียภาพ",
						"hindi": "एक अंतहीन हिमक्षेत्र, बर्फीले तूफान ने दृश्य को धुंधला कर दिया।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "또 제자리야? 지쳤어.",
						"english": "Again, back to square one? I'm exhausted.",
						"japanese": "また振り出しに戻った？もう疲れたよ。",
						"chinese": "又回到原点了吗？我累了。",
						"french": "De nouveau au point de départ ? Je suis épuisé.",
						"spanish": "¿De nuevo en el mismo lugar? Estoy agotado.",
						"vietnamese": "Lại trở về điểm xuất phát à? Tôi kiệt sức rồi.",
						"thai": "กลับมาที่เดิมอีกแล้วเหรอ? ฉันเหนื่อยแล้วนะ",
						"hindi": "फिर से वहीं? मैं थक गया हूँ।"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "환영이 보여… 저게 진짜 눈보라인가?",
						"english": "I see an illusion... Is that a real blizzard?",
						"japanese": "幻影が見える…あれは本当に吹雪なのか？",
						"chinese": "我看到了幻影……那是真的暴风雪吗？",
						"french": "Je vois une illusion... Est-ce un vrai blizzard ?",
						"spanish": "Veo una ilusión... ¿Es una ventisca real?",
						"vietnamese": "Tôi thấy một ảo ảnh... Đó có phải là bão tuyết thật không?",
						"thai": "ฉันเห็นภาพหลอน... นั่นเป็นพายุหิมะจริงหรือ?",
						"hindi": "मुझे एक भ्रम दिख रहा है... क्या वह असली बर्फीला तूफान है?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "inka",
					"action": "enter",
					"spot": [
						5,
						2
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "여기, 이상한 조각을 주웠어요.",
						"english": "Here, I picked up a strange fragment.",
						"japanese": "ここで、奇妙な破片を拾いました。",
						"chinese": "这里，我捡到了一块奇怪的碎片。",
						"french": "Ici, j'ai ramassé un étrange fragment.",
						"spanish": "Aquí, recogí un fragmento extraño.",
						"vietnamese": "Ở đây, tôi nhặt được một mảnh lạ.",
						"thai": "ที่นี่ ฉันเก็บชิ้นส่วนแปลกๆ ได้ชิ้นหนึ่ง",
						"hindi": "यहाँ, मैंने एक अजीब सा टुकड़ा उठाया है।"
					},
					"type": "speech",
					"speaker": "inka"
				},
				{
					"speaker": "inka",
					"emotion": "base",
					"content": {
						"korean": "오래된 지도 조각 같아요.",
						"english": "It looks like a piece of an old map.",
						"japanese": "古い地図の破片のようです。",
						"chinese": "它看起来像一张旧地图碎片。",
						"french": "Cela ressemble à un morceau de vieille carte.",
						"spanish": "Parece un trozo de un mapa antiguo.",
						"vietnamese": "Nó trông giống như một mảnh bản đồ cũ.",
						"thai": "ดูเหมือนจะเป็นชิ้นส่วนของแผนที่เก่า",
						"hindi": "यह एक पुराने नक्शे का टुकड़ा लगता है।"
					},
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
					"type": "direction",
					"action": "enter",
					"speaker": "inka",
					"spot": [
						5,
						2
					]
				},
				{
					"speaker": "inka",
					"emotion": "base",
					"content": {
						"korean": "이 지도, 패턴이 계속 반복돼요.",
						"english": "This map, the pattern keeps repeating.",
						"japanese": "この地図、パターンが繰り返されています。",
						"chinese": "这张地图，图案一直在重复。",
						"french": "Cette carte, le motif se répète sans cesse.",
						"spanish": "Este mapa, el patrón se repite constantemente.",
						"vietnamese": "Bản đồ này, mẫu hình cứ lặp đi lặp lại.",
						"thai": "แผนที่นี้ ลวดลายยังคงซ้ำเดิม",
						"hindi": "यह नक्शा, पैटर्न बार-बार दोहराया जा रहा है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "반복? 이 설원처럼?",
						"english": "Repeat? Like this snowfield?",
						"japanese": "繰り返し？この雪原のように？",
						"chinese": "重复？就像这片雪原一样？",
						"french": "Répéter ? Comme cette étendue enneigée ?",
						"spanish": "¿Repetir? ¿Como este campo de nieve?",
						"vietnamese": "Lặp lại? Giống như cánh đồng tuyết này?",
						"thai": "ซ้ำ? เหมือนทุ่งหิมะนี้เลยเหรอ?",
						"hindi": "दोहराना? इस बर्फीले मैदान की तरह?"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "네. 그리고 사라진 바이킹 족장의 흔적 같아요.",
						"english": "Yes. And it seems like traces of the lost Viking chieftain.",
						"japanese": "はい。そして、失われたヴァイキング族長の痕跡のようです。",
						"chinese": "是的。而且似乎是失踪的维京酋长的踪迹。",
						"french": "Oui. Et on dirait des traces du chef viking disparu.",
						"spanish": "Sí. Y parece que son rastros del jefe vikingo desaparecido.",
						"vietnamese": "Vâng. Và dường như là dấu vết của tù trưởng Viking đã mất.",
						"thai": "ใช่ครับ/ค่ะ และดูเหมือนร่องรอยของหัวหน้าไวกิ้งที่หายไป",
						"hindi": "हाँ। और यह खोए हुए वाइकिंग सरदार के निशान जैसा लगता है।"
					},
					"speaker": "inka"
				},
				{
					"speaker": "inka",
					"content": {
						"korean": "저기, 얼음 동굴로 향하고 있어요.",
						"english": "Look, it's heading towards the ice cave.",
						"japanese": "見て、あれは氷の洞窟に向かっているわ。",
						"chinese": "看，它正朝着冰洞前进。",
						"french": "Regardez, ça se dirige vers la grotte de glace.",
						"spanish": "Mira, se dirige hacia la cueva de hielo.",
						"vietnamese": "Kìa, nó đang hướng về hang động băng.",
						"thai": "ดูนั่นสิ มันกำลังมุ่งหน้าไปทางถ้ำน้ำแข็ง",
						"hindi": "देखो, यह बर्फ की गुफा की ओर बढ़ रहा है।"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "inka",
					"action": "enter",
					"spot": [
						5,
						2
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "inka",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "동굴 안에서… 차가운 슬픔이 느껴져요.",
						"english": "Inside the cave... I feel a cold sorrow.",
						"japanese": "洞窟の中で… 冷たい悲しみが感じられる。",
						"chinese": "洞穴里… 我感到一股冰冷的悲伤。",
						"french": "À l'intérieur de la grotte... je ressens une froide tristesse.",
						"spanish": "Dentro de la cueva... siento una tristeza fría.",
						"vietnamese": "Bên trong hang động... tôi cảm thấy một nỗi buồn lạnh giá.",
						"thai": "ในถ้ำ... ฉันรู้สึกถึงความเศร้าอันเยือกเย็น",
						"hindi": "गुफा के अंदर... मुझे एक ठंडी उदासी महसूस हो रही है।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "슬픔? 그냥 추운 거 아니야?",
						"english": "Sorrow? Isn't it just cold?",
						"japanese": "悲しみ？ただ寒いだけじゃないの？",
						"chinese": "悲伤？不只是冷吗？",
						"french": "Tristesse ? N'est-ce pas juste le froid ?",
						"spanish": "¿Tristeza? ¿No es solo el frío?",
						"vietnamese": "Buồn sao? Không phải chỉ là lạnh thôi ư?",
						"thai": "เศร้า? ไม่ใช่แค่หนาวหรอกเหรอ?",
						"hindi": "उदासी? क्या यह सिर्फ ठंड नहीं है?"
					}
				},
				{
					"speaker": "inka",
					"content": {
						"korean": "아니요, 이건… 무언가 갇힌 고통 같아요.",
						"english": "No, this is... like the pain of something trapped.",
						"japanese": "いいえ、これは… 何かが閉じ込められた苦痛のようです。",
						"chinese": "不，这... 像是某种被困的痛苦。",
						"french": "Non, ça... c'est comme la douleur de quelque chose d'emprisonné.",
						"spanish": "No, esto es... como el dolor de algo atrapado.",
						"vietnamese": "Không, đây là... như nỗi đau của thứ gì đó bị giam cầm.",
						"thai": "ไม่ นี่มัน... เหมือนความเจ็บปวดของสิ่งที่ถูกกักขัง",
						"hindi": "नहीं, यह... किसी फंसी हुई चीज़ के दर्द जैसा है।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "더 깊이 들어가 봐야겠어.",
						"english": "I'll have to go deeper.",
						"japanese": "もっと奥へ行ってみる必要があるわ。",
						"chinese": "我得更深入地探查一下。",
						"french": "Je vais devoir aller plus loin.",
						"spanish": "Tendré que ir más profundo.",
						"vietnamese": "Tôi phải đi sâu hơn nữa.",
						"thai": "ฉันต้องเข้าไปลึกกว่านี้",
						"hindi": "मुझे और गहराई में जाना होगा।"
					},
					"speaker": "character_any"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "inka",
					"action": "enter",
					"spot": [
						5,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "동굴 깊은 곳, 얼어붙은 한기가 뼈 속까지 스몄다.",
						"english": "Deep in the cave, a frozen chill permeated to the bone.",
						"japanese": "洞窟の奥深く、凍てつく寒気が骨の髄まで染み渡った。",
						"chinese": "洞穴深处，冰冷的寒意渗入了骨髓。",
						"french": "Au fond de la grotte, un froid glacial s'infiltrait jusqu'aux os.",
						"spanish": "En lo profundo de la cueva, un frío gélido calaba hasta los huesos.",
						"vietnamese": "Sâu trong hang động, một hơi lạnh buốt giá thấm sâu vào tận xương tủy.",
						"thai": "ลึกเข้าไปในถ้ำ ความหนาวเหน็บเยือกแข็งซึมซาบเข้าสู่กระดูก",
						"hindi": "गुफा की गहराई में, एक जमी हुई ठंडक हड्डियों तक फैल गई।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "inka",
					"type": "speech",
					"content": {
						"korean": "여긴… 뭔가 잘못됐어요.",
						"english": "Something's... wrong here.",
						"japanese": "ここは… 何かおかしいわ。",
						"chinese": "这里... 有些不对劲。",
						"french": "Quelque chose... ne va pas ici.",
						"spanish": "Aquí hay... algo mal.",
						"vietnamese": "Ở đây... có gì đó không ổn.",
						"thai": "ที่นี่... มีบางอย่างผิดปกติ",
						"hindi": "यहाँ... कुछ गड़बड़ है।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "돌아갈 수 없어. 여기까지 왔잖아.",
						"english": "Can't turn back now. We've come too far.",
						"japanese": "もう引き返せない。ここまで来たんだから。",
						"chinese": "不能回头了。我们已经走到这里了。",
						"french": "Impossible de faire demi-tour. Nous sommes venus jusqu'ici.",
						"spanish": "No podemos volver atrás. Hemos llegado hasta aquí.",
						"vietnamese": "Không thể quay lại được. Chúng ta đã đi xa đến mức này rồi.",
						"thai": "ย้อนกลับไม่ได้แล้ว เรามาถึงนี่แล้ว",
						"hindi": "वापस नहीं जा सकते। हम यहाँ तक आ चुके हैं।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "차가운 절망이 우리를 기다리는 것 같아요.",
						"english": "Cold despair seems to await us.",
						"japanese": "冷たい絶望が私たちを待っているようです。",
						"chinese": "冰冷的绝望似乎在等待着我们。",
						"french": "Un froid désespoir semble nous attendre.",
						"spanish": "Una fría desesperación parece esperarnos.",
						"vietnamese": "Nỗi tuyệt vọng lạnh giá dường như đang chờ đợi chúng ta.",
						"thai": "ความสิ้นหวังอันหนาวเหน็บดูเหมือนจะรอเราอยู่",
						"hindi": "ठंडी निराशा हमारा इंतजार कर रही है।"
					},
					"speaker": "inka"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "동굴의 끝, 거대한 그림자가 나타났다.",
						"english": "At the cave's end, a colossal shadow appeared.",
						"japanese": "洞窟の果てに、巨大な影が現れた。",
						"chinese": "洞穴尽头，一个巨大的身影出现了。",
						"french": "Au bout de la grotte, une ombre colossale apparut.",
						"spanish": "Al final de la cueva, una sombra colosal apareció.",
						"vietnamese": "Ở cuối hang động, một bóng đen khổng lồ xuất hiện.",
						"thai": "ที่ปลายถ้ำ เงาขนาดมหึมาปรากฏขึ้น",
						"hindi": "गुफा के अंत में, एक विशाल छाया दिखाई दी।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "왔느냐. 이 끝없는 고독 속으로.",
						"english": "You've come. Into this endless solitude.",
						"japanese": "来たか。この果てなき孤独の中へ。",
						"chinese": "你来了。来到这无尽的孤独中。",
						"french": "Tu es venu. Dans cette solitude infinie.",
						"spanish": "¿Has venido? A esta soledad infinita.",
						"vietnamese": "Ngươi đã đến. Vào sự cô độc vô tận này.",
						"thai": "เจ้ามาแล้วสินะ สู่ความโดดเดี่ยวอันไม่สิ้นสุดนี้",
						"hindi": "तुम आ गए। इस अंतहीन एकांत में।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "네가 이 모든 걸 만들었나?",
						"english": "Did you create all of this?",
						"japanese": "お前がこの全てを作ったのか？",
						"chinese": "这一切都是你创造的吗？",
						"french": "As-tu créé tout cela ?",
						"spanish": "¿Creaste todo esto?",
						"vietnamese": "Ngươi đã tạo ra tất cả điều này ư?",
						"thai": "เจ้าสร้างทั้งหมดนี้หรือ?",
						"hindi": "क्या तुमने यह सब बनाया है?"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "나는 그저, 이 루프를 지킬 뿐이다.",
						"english": "I merely guard this loop.",
						"japanese": "私はただ、このループを守るだけだ。",
						"chinese": "我只是守护着这个循环。",
						"french": "Je ne fais que garder cette boucle.",
						"spanish": "Yo solo protejo este bucle.",
						"vietnamese": "Ta chỉ đơn thuần bảo vệ vòng lặp này.",
						"thai": "ข้าแค่เฝ้ารักษาห่วงนี้เท่านั้น",
						"hindi": "मैं बस इस लूप की रक्षा करता हूँ।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "차가운 얼음이 탐험대를 집어삼켰다.",
						"english": "The cold ice devoured the expedition team.",
						"japanese": "冷たい氷が探検隊を飲み込んだ。",
						"chinese": "冰冷的寒冰吞噬了探险队。",
						"french": "La glace froide a englouti l'équipe d'expédition.",
						"spanish": "El frío hielo devoró al equipo de expedición.",
						"vietnamese": "Băng giá lạnh lẽo đã nuốt chửng đội thám hiểm.",
						"thai": "น้ำแข็งเย็นเยียบกลืนกินทีมสำรวจ",
						"hindi": "ठंडी बर्फ ने अभियान दल को निगल लिया।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이것이 너희의 끝없는 운명이다.",
						"english": "This is your endless fate.",
						"japanese": "これが君たちの果てなき運命だ。",
						"chinese": "这就是你们无尽的命运。",
						"french": "C'est votre destin éternel.",
						"spanish": "Este es vuestro destino eterno.",
						"vietnamese": "Đây là số phận vô tận của các ngươi.",
						"thai": "นี่คือชะตากรรมที่ไม่มีที่สิ้นสุดของเจ้า",
						"hindi": "यह तुम्हारा अंतहीन भाग्य है।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "아직… 끝나지 않았어.",
						"english": "It's not over yet...",
						"japanese": "まだ…終わってない。",
						"chinese": "还没…结束。",
						"french": "Ce n'est pas encore fini...",
						"spanish": "Aún no… ha terminado.",
						"vietnamese": "Chưa… kết thúc đâu.",
						"thai": "ยัง…ไม่จบ",
						"hindi": "अभी… ख़त्म नहीं हुआ है।"
					},
					"speaker": "character_any"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "어리석은… 너희도 결국 반복될 뿐.",
						"english": "Foolish... you too will merely repeat.",
						"japanese": "愚かな…お前たちも結局は繰り返されるだけだ。",
						"chinese": "愚蠢…你们也终将重复。",
						"french": "Insensés... vous ne ferez que vous répéter.",
						"spanish": "Necios... vosotros también solo os repetiréis.",
						"vietnamese": "Ngu ngốc... các ngươi rồi cũng chỉ lặp lại mà thôi.",
						"thai": "โง่เขลา... พวกเจ้าก็แค่จะวนซ้ำเท่านั้น",
						"hindi": "मूर्ख... तुम भी बस दोहराए जाओगे।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "아니, 우린 달라!",
						"english": "No, we are different!",
						"japanese": "いや、私たちは違う！",
						"chinese": "不，我们不一样！",
						"french": "Non, nous sommes différents !",
						"spanish": "¡No, nosotros somos diferentes!",
						"vietnamese": "Không, chúng ta khác biệt!",
						"thai": "ไม่ เราไม่เหมือนกัน!",
						"hindi": "नहीं, हम अलग हैं!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "쓰러진 그림자. 그러나 또 다른 문이 열렸다.",
						"english": "The shadow fell. But another door opened.",
						"japanese": "倒れた影。しかし、別の扉が開いた。",
						"chinese": "影子倒下了。然而，另一扇门打开了。",
						"french": "L'ombre est tombée. Mais une autre porte s'est ouverte.",
						"spanish": "La sombra cayó. Pero otra puerta se abrió.",
						"vietnamese": "Bóng đen ngã xuống. Nhưng một cánh cửa khác đã mở ra.",
						"thai": "เงาล้มลง แต่ทว่าประตูอีกบานก็เปิดออก",
						"hindi": "छाया गिरी। पर एक और दरवाज़ा खुल गया।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "망각의 의식은 이제 시작될 뿐이다.",
						"english": "The ritual of oblivion has only just begun.",
						"japanese": "忘却の儀式は、今始まったばかりだ。",
						"chinese": "遗忘的仪式才刚刚开始。",
						"french": "Le rituel de l'oubli ne fait que commencer.",
						"spanish": "El ritual del olvido no ha hecho más que empezar.",
						"vietnamese": "Nghi lễ lãng quên chỉ vừa mới bắt đầu.",
						"thai": "พิธีแห่งการลืมเลือนเพิ่งจะเริ่มต้นเท่านั้น",
						"hindi": "विस्मृति का अनुष्ठान अभी शुरू ही हुआ है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"끝없이 펼쳐진 설원, 모든 것이 얼어붙었다.",
			"시간마저 멈춘 듯한 고요 속, 환영이 반복된다.",
			"길을 잃은 탐험대, 벗어날 수 없는 굴레인가.",
			"이 혹독한 황야, 알 수 없는 시스템의 시작이다."
		],
		"english": [
			"An endless snowfield, everything frozen.",
			"In a silence where even time seems to stop, illusions repeat.",
			"A lost expedition, is this an inescapable cycle?",
			"This harsh wilderness, the beginning of an unknown system."
		],
		"japanese": [
			"果てしなく広がる雪原、全てが凍りついた。",
			"時間さえ止まったような静寂の中、幻影が繰り返される。",
			"道に迷った探検隊、これは逃れられない輪廻なのか。",
			"この過酷な荒野、未知のシステムの始まりだ。"
		],
		"chinese": [
			"无尽的雪原，万物冻结。",
			"在时间仿佛静止的寂静中，幻影重现。",
			"迷失的探险队，是无法摆脱的循环吗？",
			"这片严酷的荒野，是未知系统的开端。"
		],
		"french": [
			"Une étendue enneigée infinie, tout est gelé.",
			"Dans un silence où même le temps semble s'arrêter, les illusions se répètent.",
			"Une expédition perdue, est-ce un cycle inéluctable ?",
			"Cette nature sauvage impitoyable, le début d'un système inconnu."
		],
		"spanish": [
			"Un campo de nieve interminable, todo congelado.",
			"En un silencio donde hasta el tiempo parece detenerse, las ilusiones se repiten.",
			"Una expedición perdida, ¿es un ciclo ineludible?",
			"Este desierto inhóspito, el comienzo de un sistema desconocido."
		],
		"vietnamese": [
			"Cánh đồng tuyết vô tận, mọi thứ đóng băng.",
			"Trong sự tĩnh lặng dường như thời gian cũng ngừng lại, ảo ảnh lặp đi lặp lại.",
			"Đoàn thám hiểm lạc lối, liệu đây có phải là một vòng luẩn quẩn không thể thoát khỏi?",
			"Vùng hoang dã khắc nghiệt này, khởi đầu của một hệ thống không rõ."
		],
		"thai": [
			"ทุ่งหิมะอันไร้ขอบเขต ทุกสิ่งแข็งตัว",
			"ในความเงียบงันที่แม้แต่เวลาก็หยุดนิ่ง ภาพหลอนก็วนเวียนซ้ำๆ",
			"คณะสำรวจที่หลงทาง นี่คือวงจรที่หลีกหนีไม่ได้หรือ?",
			"ถิ่นทุรกันดารอันโหดร้ายนี้ คือจุดเริ่มต้นของระบบที่ไม่รู้จัก"
		],
		"hindi": [
			"एक अंतहीन हिमक्षेत्र, सब कुछ जम गया है।",
			"एक ऐसी खामोशी में जहाँ समय भी रुका हुआ लगता है, भ्रम दोहराए जाते हैं।",
			"एक खोया हुआ अभियान, क्या यह एक अटूट चक्र है?",
			"यह कठोर जंगल, एक अज्ञात प्रणाली की शुरुआत है।"
		]
	}
} as const;
