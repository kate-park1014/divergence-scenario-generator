export const scenario_snowy_skuld_94_02 = {
	"scenario_id": "snowy_skuld_94_02",
	"order": 2,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"eira": {
			"id": "mon_0c37c014-b5ca-4f2f-ad03-5d393e5b2eb1",
			"name": {
				"korean": "에이라",
				"english": "Eira",
				"japanese": "エイラ",
				"chinese": "艾拉",
				"french": "Eira",
				"spanish": "Eira",
				"vietnamese": "Eira",
				"thai": "ไอรา",
				"hindi": "ऐरा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8e2970b7-bcb1-4b1c-6bf0-93106b373500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/0ca1ec09-a624-450f-054a-b98de58bdb00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "얼어붙은 동굴 입구. 고대 룬 문양이 빛을 잃고 있었다.",
						"english": "Frozen cave entrance. Ancient runes had lost their light.",
						"japanese": "凍てついた洞窟の入口。古代のルーン文字が光を失っていた。",
						"chinese": "冰冻的洞穴入口。古老的符文失去了光芒。",
						"french": "Entrée de la grotte gelée. Les runes antiques avaient perdu leur éclat.",
						"spanish": "Entrada de la cueva congelada. Las runas antiguas habían perdido su luz.",
						"vietnamese": "Lối vào hang động đóng băng. Các ký tự rune cổ đại đã mất đi ánh sáng.",
						"thai": "ทางเข้าถ้ำน้ำแข็ง รูนโบราณไร้แสง",
						"hindi": "जमी हुई गुफा का प्रवेश द्वार। प्राचीन रुणों ने अपनी चमक खो दी थी।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "여기가 유적이야? 오싹하네.",
						"english": "This is the ruin? Spooky.",
						"japanese": "ここが遺跡？気味が悪いな。",
						"chinese": "这里是遗迹吗？真让人毛骨悚然。",
						"french": "C'est la ruine ? Glauque.",
						"spanish": "¿Esta es la ruina? Qué escalofriante.",
						"vietnamese": "Đây là di tích sao? Rợn người thật.",
						"thai": "นี่คือซากปรักหักพังหรือ? น่าขนลุกนะ",
						"hindi": "यह खंडहर है? डरावना।"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"spot": [
						3,
						2
					],
					"speaker": "eira",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "eira",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…환영합니다. 길 잃은 이들이여.",
						"english": "...Welcome. Lost ones.",
						"japanese": "…ようこそ。道に迷いし者たちよ。",
						"chinese": "……欢迎。迷失者们。",
						"french": "...Bienvenue. Âmes égarées.",
						"spanish": "...Bienvenidos. Extraviados.",
						"vietnamese": "...Chào mừng. Hỡi những kẻ lạc lối.",
						"thai": "...ยินดีต้อนรับ ผู้หลงทางเอ๋ย",
						"hindi": "...स्वागत है। भटके हुए।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "당신은…?",
						"english": "You are...?",
						"japanese": "あなたは…？",
						"chinese": "您是…？",
						"french": "Vous êtes...?",
						"spanish": "¿Usted es...?",
						"vietnamese": "Ngài là...?",
						"thai": "ท่านคือ...?",
						"hindi": "तुम कौन हो...?"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "에이라. 잊힌 것을 기록하는 자.",
						"english": "Aira. The one who records the forgotten.",
						"japanese": "アイラ。忘れられたものを記録する者。",
						"chinese": "艾拉。记录被遗忘之物的人。",
						"french": "Aira. Celle qui consigne les oubliés.",
						"spanish": "Aira. La que registra lo olvidado.",
						"vietnamese": "Aira. Kẻ ghi chép những điều bị lãng quên.",
						"thai": "ไอรา ผู้บันทึกสิ่งที่ถูกลืม",
						"hindi": "ऐरा। भूली हुई बातों को दर्ज करने वाला।"
					},
					"speaker": "eira"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이곳의 전설은 오래되었고, 고통은 영원히 반복되죠.",
						"english": "The legends here are ancient, and the pain repeats eternally.",
						"japanese": "ここの伝説は古く、苦痛は永遠に繰り返されます。",
						"chinese": "这里的传说古老，痛苦永远重复。",
						"french": "Les légendes d'ici sont anciennes, et la douleur se répète éternellement.",
						"spanish": "Las leyendas aquí son antiguas, y el dolor se repite eternamente.",
						"vietnamese": "Huyền thoại nơi đây đã cổ xưa, và nỗi đau cứ lặp lại mãi mãi.",
						"thai": "ตำนานที่นี่เก่าแก่ ความเจ็บปวดซ้ำรอยนิรันดร์",
						"hindi": "यहाँ की कहानियाँ पुरानी हैं, और दर्द हमेशा दोहराता रहता है।"
					},
					"speaker": "eira"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "eira",
					"spot": [
						2,
						3
					]
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "고대 서약… 의무와 희생은 이곳의 굴레와 같죠.",
						"english": "Ancient pacts... Duty and sacrifice are shackles here.",
						"japanese": "古代の誓約…義務と犠牲は、ここの足枷のようなものだ。",
						"chinese": "古老的誓约…义务与牺牲，如同此地的桎梏。",
						"french": "Anciens serments... Devoir et sacrifice sont des chaînes ici.",
						"spanish": "Antiguos pactos... El deber y el sacrificio son grilletes aquí.",
						"vietnamese": "Giao ước cổ xưa... Nghĩa vụ và hy sinh là gông cùm nơi đây.",
						"thai": "พันธสัญญาโบราณ... หน้าที่และการเสียสละคือพันธนาการ ณ ที่นี้",
						"hindi": "प्राचीन प्रतिज्ञाएँ... कर्तव्य और बलिदान यहाँ की बेड़ियाँ हैं।"
					},
					"speaker": "eira"
				},
				{
					"type": "speech",
					"content": {
						"korean": "서약이라니?",
						"english": "Pacts?",
						"japanese": "誓約だと？",
						"chinese": "誓约？",
						"french": "Des serments ?",
						"spanish": "¿Pactos?",
						"vietnamese": "Giao ước gì cơ?",
						"thai": "พันธสัญญาอะไร?",
						"hindi": "प्रतिज्ञाएँ?"
					},
					"emotion": "base",
					"speaker": "character_1"
				},
				{
					"type": "speech",
					"content": {
						"korean": "멈출 수 없는 운명, 끝없이 이어지는 비극.",
						"english": "Unstoppable destiny, an endless tragedy.",
						"japanese": "止められない運命、終わりなく続く悲劇。",
						"chinese": "无法阻止的命运，无尽延续的悲剧。",
						"french": "Un destin inéluctable, une tragédie sans fin.",
						"spanish": "Un destino imparable, una tragedia interminable.",
						"vietnamese": "Số phận không thể ngăn cản, bi kịch kéo dài vô tận.",
						"thai": "ชะตากรรมที่ไม่อาจหยุดยั้ง โศกนาฏกรรมที่ดำเนินไม่สิ้นสุด",
						"hindi": "अटूट नियति, अंतहीन त्रासदी।"
					},
					"emotion": "sad",
					"speaker": "eira"
				},
				{
					"speaker": "character_2",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "무슨 소리야. 우린 이걸 끊으러 왔어.",
						"english": "What are you talking about? We're here to break it.",
						"japanese": "何を言ってるんだ。俺たちはこれを断ち切るために来たんだ。",
						"chinese": "你在说什么。我们是来斩断它的。",
						"french": "Qu'est-ce que tu racontes ? Nous sommes venus pour y mettre fin.",
						"spanish": "¿De qué hablas? Hemos venido a romperlo.",
						"vietnamese": "Nói cái gì vậy. Chúng tôi đến đây để chấm dứt nó.",
						"thai": "พูดอะไรน่ะ? เรามาที่นี่เพื่อยุติมัน",
						"hindi": "क्या कह रहे हो। हम इसे तोड़ने आए हैं।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…모든 것을 아는 자가 기다리고 있습니다.",
						"english": "...One who knows all awaits.",
						"japanese": "…全てを知る者が待っています。",
						"chinese": "…知晓一切之人正在等待。",
						"french": "...Celui qui sait tout nous attend.",
						"spanish": "...Aquel que lo sabe todo aguarda.",
						"vietnamese": "...Kẻ biết mọi thứ đang chờ đợi.",
						"thai": "...ผู้รู้แจ้งทุกสิ่งกำลังรออยู่",
						"hindi": "…सब कुछ जानने वाला इंतज़ार कर रहा है।"
					},
					"speaker": "eira"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"speaker": "eira",
					"spot": [
						4,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이 나무 조각들은 뭐지? 빙하 속에서 나왔어.",
						"english": "What are these wood fragments? They emerged from the glacier.",
						"japanese": "この木の破片は何だ？氷河の中から出てきたぞ。",
						"chinese": "这些木头碎片是什么？它们从冰川里出来了。",
						"french": "Que sont ces fragments de bois ? Ils sont sortis du glacier.",
						"spanish": "¿Qué son estos fragmentos de madera? Salieron del glaciar.",
						"vietnamese": "Mấy mảnh gỗ này là gì? Chúng trồi ra từ trong sông băng.",
						"thai": "เศษไม้พวกนี้คืออะไร? มันโผล่มาจากธารน้ำแข็ง",
						"hindi": "ये लकड़ी के टुकड़े क्या हैं? ये ग्लेशियर से निकले हैं।"
					},
					"emotion": "base"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "오래된 배의 파편… 이곳은 한때 바다였죠.",
						"english": "Fragments of an old ship... This place was once the sea.",
						"japanese": "古い船の破片…ここはかつて海だったのです。",
						"chinese": "古老船只的碎片…这里曾是一片海洋。",
						"french": "Des fragments d'un vieux navire... Cet endroit était autrefois la mer.",
						"spanish": "Fragmentos de un barco antiguo... Este lugar fue una vez el mar.",
						"vietnamese": "Mảnh vỡ của một con tàu cũ... Nơi này từng là biển.",
						"thai": "เศษซากเรือเก่า... ที่นี่เคยเป็นทะเล",
						"hindi": "एक पुराने जहाज़ के टुकड़े... यह जगह कभी समुद्र थी।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_3",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "배라고? 빙하가 이렇게 깊은데?",
						"english": "A ship? With the glacier this deep?",
						"japanese": "船だと？氷河がこんなに深いのに？",
						"chinese": "船？冰川这么深？",
						"french": "Un navire ? Alors que le glacier est si profond ?",
						"spanish": "¿Un barco? ¿Con el glaciar tan profundo?",
						"vietnamese": "Tàu ư? Sông băng sâu đến thế này mà?",
						"thai": "เรือเหรอ? ในเมื่อธารน้ำแข็งลึกขนาดนี้?",
						"hindi": "जहाज़? ग्लेशियर इतना गहरा है?"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "잊힌 맹세가 얼어붙은 곳. 배는 그 시작이자 끝입니다.",
						"english": "The place where forgotten vows froze. The ship is its beginning and end.",
						"japanese": "忘れられた誓いが凍りついた場所。船はその始まりであり、終わりです。",
						"chinese": "遗忘誓言冰封之地。船是其始亦是其终。",
						"french": "L'endroit où les serments oubliés ont gelé. Le navire est son début et sa fin.",
						"spanish": "El lugar donde los juramentos olvidados se congelaron. El barco es su principio y su fin.",
						"vietnamese": "Nơi những lời thề bị lãng quên đóng băng. Con tàu là khởi đầu và cũng là kết thúc của nó.",
						"thai": "สถานที่ซึ่งคำมั่นสัญญาที่ถูกลืมเลือนกลายเป็นน้ำแข็ง เรือคือจุดเริ่มต้นและจุดสิ้นสุดของมัน",
						"hindi": "भूली हुई प्रतिज्ञाएँ जहाँ जम गईं। जहाज़ उसका आदि और अंत है।"
					},
					"speaker": "eira"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "시작이자 끝…?",
						"english": "The beginning and the end…?",
						"japanese": "始まりにして終わり…？",
						"chinese": "开始也是结束…？",
						"french": "Le début et la fin… ?",
						"spanish": "¿El principio y el final…?",
						"vietnamese": "Khởi đầu và kết thúc…?",
						"thai": "จุดเริ่มต้นและจุดจบ…?",
						"hindi": "शुरुआत और अंत…?"
					},
					"speaker": "character_any"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "eira",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "더 깊이 갈수록… 운명의 무게가 느껴질 겁니다.",
						"english": "The deeper you go… the heavier the weight of destiny will feel.",
						"japanese": "深く進むほど…運命の重さがのしかかるだろう。",
						"chinese": "越深入…命运的重压就越沉。",
						"french": "Plus vous irez en profondeur… plus le poids du destin se fera sentir.",
						"spanish": "Cuanto más te adentres… más sentirás el peso del destino.",
						"vietnamese": "Càng đi sâu… càng cảm nhận được sức nặng của định mệnh.",
						"thai": "ยิ่งลึกเข้าไป… ยิ่งสัมผัสได้ถึงน้ำหนักของโชคชะตา.",
						"hindi": "जितना गहरा तुम जाओगे… उतना ही नियति का बोझ महसूस होगा।"
					},
					"speaker": "eira"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "돌아갈 수는 없어.",
						"english": "No turning back.",
						"japanese": "もう戻れない。",
						"chinese": "无法回头了。",
						"french": "Impossible de faire demi-tour.",
						"spanish": "No hay vuelta atrás.",
						"vietnamese": "Không thể quay lại.",
						"thai": "ไม่มีทางย้อนกลับ.",
						"hindi": "वापस नहीं जा सकते।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "알아요. 이곳의 모든 길은 하나의 비극으로 이어지니까.",
						"english": "I know. Every path here leads to a single tragedy.",
						"japanese": "分かってる。ここでの全ての道は、一つの悲劇へと繋がっているから。",
						"chinese": "我知道。这里所有的路都通往一场悲剧。",
						"french": "Je sais. Tous les chemins ici mènent à une seule tragédie.",
						"spanish": "Lo sé. Todos los caminos aquí conducen a una única tragedia.",
						"vietnamese": "Tôi biết. Mọi con đường ở đây đều dẫn đến một bi kịch duy nhất.",
						"thai": "ฉันรู้ ทุกเส้นทางที่นี่นำไปสู่โศกนาฏกรรมเดียวกัน.",
						"hindi": "मैं जानता हूँ। यहाँ की हर राह एक ही त्रासदी की ओर ले जाती है।"
					},
					"emotion": "sad",
					"speaker": "eira"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "우린 달라. 우린 멈출 거야.",
						"english": "We are different. We will stop it.",
						"japanese": "俺たちは違う。俺たちが止める。",
						"chinese": "我们不同。我们会阻止它。",
						"french": "Nous sommes différents. Nous l'arrêterons.",
						"spanish": "Somos diferentes. Lo detendremos.",
						"vietnamese": "Chúng tôi khác. Chúng tôi sẽ ngăn chặn nó.",
						"thai": "เราแตกต่าง เราจะหยุดมัน.",
						"hindi": "हम अलग हैं। हम इसे रोकेंगे।"
					},
					"speaker": "character_4"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…그 맹세가 당신을 이끄는 힘이 되기를.",
						"english": "…May that vow be the strength that guides you.",
						"japanese": "…その誓いが、あなたを導く力とならんことを。",
						"chinese": "…愿那誓言成为指引你的力量。",
						"french": "…Que ce serment soit la force qui vous guide.",
						"spanish": "…Que ese juramento sea la fuerza que te guíe.",
						"vietnamese": "…Mong rằng lời thề đó sẽ là sức mạnh dẫn lối cho người.",
						"thai": "…ขอให้คำมั่นสัญญานั้นเป็นพลังนำทางท่าน.",
						"hindi": "…वह शपथ तुम्हें राह दिखाने वाली शक्ति बने।"
					},
					"emotion": "base",
					"speaker": "eira"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "어둠이 짙어지는 빙하 심장부. 정체 모를 그림자가 다가왔다.",
						"english": "Deep within the glacier, where darkness thickens. An unknown shadow approached.",
						"japanese": "闇が深まる氷河の心臓部。正体不明の影が迫る。",
						"chinese": "黑暗渐浓的冰川核心深处。一个不明的影子逼近了。",
						"french": "Au cœur du glacier, où les ténèbres s'épaississent. Une ombre inconnue approcha.",
						"spanish": "En el corazón del glaciar, donde la oscuridad se espesa. Una sombra desconocida se acercó.",
						"vietnamese": "Sâu thẳm trái tim băng hà nơi bóng tối bao trùm. Một bóng hình không rõ danh tính tiến đến.",
						"thai": "ใจกลางธารน้ำแข็งที่ความมืดมิดปกคลุม. เงาปริศนาคืบคลานเข้ามา.",
						"hindi": "गहराती अंधेरी हिमनदी के केंद्र में। एक अज्ञात परछाई पास आई।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "봐라. 네 모든 노력은… 헛될 뿐.",
						"english": "Behold. All your efforts... are but in vain.",
						"japanese": "見よ。お前の努力は… 全て無駄だ。",
						"chinese": "看吧。你所有的努力… 都将是徒劳。",
						"french": "Vois. Tous tes efforts... ne sont que vains.",
						"spanish": "Mira. Todos tus esfuerzos... son en vano.",
						"vietnamese": "Hãy xem. Mọi nỗ lực của ngươi… chỉ là vô ích.",
						"thai": "ดูสิ ความพยายามทั้งหมดของเจ้า… ล้วนไร้ผล",
						"hindi": "देखो। तुम्हारे सारे प्रयास... व्यर्थ हैं।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "…다시. 반드시.",
						"english": "...Again. Absolutely.",
						"japanese": "…再び。必ず。",
						"chinese": "…再来。务必。",
						"french": "...Encore. Absolument.",
						"spanish": "...Otra vez. Sin falta.",
						"vietnamese": "…Lần nữa. Nhất định.",
						"thai": "...อีกครั้ง อย่างแน่นอน",
						"hindi": "...फिर से। निश्चित रूप से।"
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "역사는 언제나, 반복된다.",
						"english": "History always, repeats itself.",
						"japanese": "歴史は常に、繰り返される。",
						"chinese": "历史总是，重演。",
						"french": "L'histoire, toujours, se répète.",
						"spanish": "La historia siempre, se repite.",
						"vietnamese": "Lịch sử luôn luôn, lặp lại.",
						"thai": "ประวัติศาสตร์มักจะ ซ้ำรอยเดิม",
						"hindi": "इतिहास हमेशा, दोहराता है।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "빙하의 심장이 다시 한번 차가운 숨을 내쉬었다.",
						"english": "The glacier's heart once again exhaled a cold breath.",
						"japanese": "氷河の心臓が再び、冷たい息を吐き出した。",
						"chinese": "冰川之心再次，吐出了冰冷的呼吸。",
						"french": "Le cœur du glacier a de nouveau exhalé un souffle froid.",
						"spanish": "El corazón del glaciar exhaló una vez más un aliento frío.",
						"vietnamese": "Trái tim của sông băng một lần nữa thở ra hơi lạnh.",
						"thai": "หัวใจของธารน้ำแข็งได้พ่นลมหายใจอันหนาวเหน็บออกมาอีกครั้ง",
						"hindi": "ग्लेशियर के दिल ने एक बार फिर ठंडी साँस छोड़ी।"
					},
					"speaker": "narrator"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "…이것이… 해방인가.",
						"english": "...Is this... freedom?",
						"japanese": "…これが…解放か。",
						"chinese": "…这…就是解放吗？",
						"french": "...Est-ce... la liberté ?",
						"spanish": "...¿Es esto... la libertad?",
						"vietnamese": "...Đây có phải... là sự giải thoát?",
						"thai": "...นี่หรือ... คืออิสรภาพ",
						"hindi": "...क्या यह... मुक्ति है?"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "끝났어. 네 굴레는.",
						"english": "It's over. Your chains.",
						"japanese": "終わった。お前の束縛は。",
						"chinese": "结束了。你的桎梏。",
						"french": "C'est fini. Tes chaînes.",
						"spanish": "Se acabó. Tus cadenas.",
						"vietnamese": "Kết thúc rồi. Gông cùm của ngươi.",
						"thai": "จบแล้ว. พันธนาการของเจ้า.",
						"hindi": "यह खत्म हो गया। तुम्हारी बेड़ियाँ।"
					}
				},
				{
					"spot": [
						3,
						2
					],
					"speaker": "eira",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "…그의 마지막 말은 기록될 겁니다. 잊힌 서약의 끝으로.",
						"english": "...His last words will be recorded. As the end of the Forgotten Pact.",
						"japanese": "…彼の最後の言葉は記録されるだろう。忘れられた誓約の終わりとして。",
						"chinese": "…他的遗言将被记载。作为遗忘誓约的终结。",
						"french": "...Ses derniers mots seront enregistrés. Comme la fin du Pacte Oublié.",
						"spanish": "...Sus últimas palabras serán registradas. Como el fin del Pacto Olvidado.",
						"vietnamese": "...Những lời cuối cùng của hắn sẽ được ghi lại. Là kết thúc của Lời thề bị lãng quên.",
						"thai": "...คำพูดสุดท้ายของเขาจะถูกบันทึกไว้ ในฐานะจุดจบของพันธสัญญาที่ถูกลืม",
						"hindi": "...उसके अंतिम शब्द दर्ज किए जाएंगे। भूली हुई संधि के अंत के रूप में।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "하지만… 아직 모든 게 끝난 건 아닌 것 같아.",
						"english": "But... it seems not everything is over yet.",
						"japanese": "しかし…まだ全てが終わったわけではないようだ。",
						"chinese": "但是…似乎一切都尚未结束。",
						"french": "Mais... il semble que tout ne soit pas encore terminé.",
						"spanish": "Pero... parece que no todo ha terminado aún.",
						"vietnamese": "Nhưng... dường như mọi chuyện vẫn chưa kết thúc.",
						"thai": "แต่... ดูเหมือนว่าทุกอย่างยังไม่จบลง",
						"hindi": "लेकिन... लगता है अभी सब कुछ खत्म नहीं हुआ है।"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "더 깊은 빙하 속에서, 냉혹한 운명의 메아리가 당신을 기다립니다.",
						"english": "Deeper within the glacier, the echo of a cruel fate awaits you.",
						"japanese": "氷河の奥深くで、冷酷な運命のこだまがあなたを待っています。",
						"chinese": "在更深的冰川中，冷酷命运的回声正等待着你。",
						"french": "Plus profondément dans le glacier, l'écho d'un destin cruel vous attend.",
						"spanish": "Más profundo en el glaciar, el eco de un destino cruel te espera.",
						"vietnamese": "Sâu hơn trong sông băng, tiếng vọng của một số phận tàn nhẫn đang chờ đợi bạn.",
						"thai": "ลึกเข้าไปในธารน้ำแข็ง เสียงสะท้อนแห่งโชคชะตาอันโหดร้ายกำลังรอคุณอยู่",
						"hindi": "ग्लेशियर की गहराई में, एक क्रूर भाग्य की गूँज आपकी प्रतीक्षा कर रही है।"
					},
					"speaker": "eira"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "하나의 굴레가 끊어졌으나, 얼어붙은 세계의 비명은 멈추지 않았다.",
						"english": "A chain has broken, yet the frozen world's screams have not ceased.",
						"japanese": "一つの鎖が断ち切られたが、凍てつく世界の悲鳴は止まらない。",
						"chinese": "一个束缚被打破，但冰冻世界的尖叫并未停止。",
						"french": "Une chaîne s'est brisée, mais les cris du monde gelé n'ont pas cessé.",
						"spanish": "Una cadena se ha roto, pero los gritos del mundo congelado no han cesado.",
						"vietnamese": "Một xiềng xích đã đứt, nhưng tiếng thét của thế giới băng giá vẫn không ngừng.",
						"thai": "โซ่ตรวนหนึ่งเส้นได้ขาดลงแล้ว แต่เสียงกรีดร้องของโลกที่เยือกแข็งยังไม่หยุด",
						"hindi": "एक बंधन टूट गया है, फिर भी जमी हुई दुनिया की चीखें बंद नहीं हुईं।"
					},
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "거대한 얼음 동굴. 한가운데, 정체 모를 존재가 굳건히 서 있었다.",
						"english": "A vast ice cave. In its center, an unknown entity stood firm.",
						"japanese": "巨大な氷の洞窟。その中央に、正体不明の存在が確固として立っていた。",
						"chinese": "巨大的冰洞。其中心，一个不明的存在坚定地站立着。",
						"french": "Une immense grotte de glace. Au centre, une entité inconnue se tenait fermement.",
						"spanish": "Una vasta cueva de hielo. En el centro, una entidad desconocida permanecía firme.",
						"vietnamese": "Một hang động băng khổng lồ. Ở giữa, một thực thể bí ẩn đứng vững chãi.",
						"thai": "ถ้ำน้ำแข็งขนาดมหึมา. ใจกลางของมัน, สิ่งมีชีวิตปริศนายืนหยัดมั่นคง.",
						"hindi": "एक विशाल बर्फ़ीली गुफा। उसके केंद्र में, एक अज्ञात सत्ता दृढ़ता से खड़ी थी।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "또 다시… 이 굴레에 도전하는가.",
						"english": "Again… you challenge this cycle?",
						"japanese": "またしても…この輪廻に挑むか。",
						"chinese": "又一次…挑战这个轮回吗？",
						"french": "Encore une fois… vous défiez ce cycle ?",
						"spanish": "¿De nuevo… desafías este ciclo?",
						"vietnamese": "Lại một lần nữa… ngươi dám thách thức vòng lặp này sao?",
						"thai": "อีกครั้ง… เจ้าท้าทายวัฏจักรนี้หรือ?",
						"hindi": "फिर से… इस चक्र को चुनौती देते हो?"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "네가 이 모든 비극을 만든 자냐?",
						"english": "Are you the one who created all this tragedy?",
						"japanese": "貴様が、この全ての悲劇を生み出した者か？",
						"chinese": "你就是制造这一切悲剧的元凶吗？",
						"french": "Est-ce toi qui as créé toute cette tragédie ?",
						"spanish": "¿Eres tú quien creó toda esta tragedia?",
						"vietnamese": "Ngươi là kẻ đã tạo ra tất cả bi kịch này sao?",
						"thai": "เจ้าคือผู้สร้างโศกนาฏกรรมทั้งหมดนี้หรือ?",
						"hindi": "क्या तुम वही हो जिसने यह सारी त्रासदी बनाई?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "만든 것이 아니다. 그저, 지키고 있을 뿐.",
						"english": "Not made. Only protected.",
						"japanese": "作ったものではない。ただ、守っているだけだ。",
						"chinese": "并非我创造。我只是守护着它。",
						"french": "Je ne l'ai pas créé. Je ne fais que le protéger.",
						"spanish": "No lo he creado. Simplemente lo protejo.",
						"vietnamese": "Không tạo ra. Chỉ là bảo vệ thôi.",
						"thai": "ไม่ได้สร้าง เพียงแต่ปกป้องไว้เท่านั้น",
						"hindi": "मैंने इसे बनाया नहीं। मैं बस इसकी रक्षा कर रहा हूँ।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "eira",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이자는… 잊힌 서약의 수호자.",
						"english": "This one... is the Guardian of the Forgotten Pact.",
						"japanese": "この者は…忘れられた誓約の守護者。",
						"chinese": "此人…是遗忘誓约的守护者。",
						"french": "Celui-ci... est le Gardien du Pacte Oublié.",
						"spanish": "Este... es el Guardián del Pacto Olvidado.",
						"vietnamese": "Người này... là Người bảo hộ của Lời thề bị lãng quên.",
						"thai": "ผู้นี้... คือผู้พิทักษ์แห่งพันธสัญญาที่ถูกลืม",
						"hindi": "यह... भूली हुई संधि का संरक्षक है।"
					},
					"speaker": "eira"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "길을 비켜라.",
						"english": "Stand aside.",
						"japanese": "道をあけろ。",
						"chinese": "让开。",
						"french": "Écartez-vous.",
						"spanish": "Apártate.",
						"vietnamese": "Tránh ra.",
						"thai": "หลีกทางซะ",
						"hindi": "रास्ता छोड़ो।"
					},
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그의 이름은 중요치 않습니다. 중요한 건, 이 모든 고통의 시작과 끝을 아는 자라는 것.",
						"english": "His name is not important. What matters is that he knows the beginning and end of all this suffering.",
						"japanese": "彼の名は重要ではない。重要なのは、この全ての苦痛の始まりと終わりを知る者だということ。",
						"chinese": "他的名字不重要。重要的是，他知晓所有痛苦的始末。",
						"french": "Son nom n'a pas d'importance. Ce qui compte, c'est qu'il connaît le début et la fin de toute cette souffrance.",
						"spanish": "Su nombre no es importante. Lo que importa es que él conoce el principio y el fin de todo este sufrimiento.",
						"vietnamese": "Tên hắn không quan trọng. Điều quan trọng là hắn biết khởi đầu và kết thúc của mọi nỗi đau này.",
						"thai": "ชื่อของเขาไม่สำคัญ สิ่งสำคัญคือ เขารู้ถึงจุดเริ่มต้นและจุดจบของความทุกข์ทรมานทั้งหมดนี้",
						"hindi": "उसका नाम मायने नहीं रखता। महत्वपूर्ण यह है कि वह इस सारी पीड़ा के आरंभ और अंत को जानता है।"
					},
					"speaker": "eira"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "어리석은 필멸자들… 역사는 반복될 뿐.",
						"english": "Foolish mortals... history merely repeats itself.",
						"japanese": "愚かなる定命の者たちよ…歴史は繰り返すだけだ。",
						"chinese": "愚蠢的凡人…历史只会重演。",
						"french": "Mortels insensés... l'histoire ne fait que se répéter.",
						"spanish": "Mortales estúpidos... la historia solo se repite.",
						"vietnamese": "Những kẻ phàm trần ngu ngốc... Lịch sử chỉ lặp lại thôi.",
						"thai": "มนุษย์ที่โง่เขลา... ประวัติศาสตร์ก็แค่ซ้ำรอยเดิม",
						"hindi": "मूर्ख नश्वर... इतिहास बस दोहराता है।"
					},
					"speaker": "random_boss"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "부디… 서약을 끊어주세요.",
						"english": "Please... break the pact.",
						"japanese": "どうか…誓約を断ち切ってください。",
						"chinese": "请您…斩断誓约。",
						"french": "S'il vous plaît... rompez le pacte.",
						"spanish": "Por favor... rompe el pacto.",
						"vietnamese": "Làm ơn... hãy phá bỏ lời thề này.",
						"thai": "โปรด... ทำลายพันธสัญญานี้ด้วย",
						"hindi": "कृपया... इस संधि को तोड़ दो।"
					},
					"speaker": "eira"
				},
				{
					"duration_ms": 400,
					"type": "direction",
					"speaker": "eira",
					"action": "exit"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"북해 끝자락, 영원한 눈보라 속.",
			"얼어붙은 고대 유적이 침묵하고, 빙하가 숨겨진 비밀을 품고 있었다.",
			"유목민 에이라는 잊힌 전설을 속삭였다. 끝나지 않는 고난의 역사.",
			"서약의 굴레, 벗어날 수 없는 운명처럼.",
			"그리고 그 깊숙한 곳에서, 다시 한번 비극이 시작되려 했다."
		],
		"english": [
			"At the edge of the North Sea, amidst an eternal blizzard.",
			"Frozen ancient ruins stood silent, glaciers holding hidden secrets.",
			"Aira, the nomad, whispered forgotten legends. A history of unending hardship.",
			"The shackles of an oath, like an inescapable fate.",
			"And in its depths, tragedy was about to begin once more."
		],
		"japanese": [
			"北海の果て、永遠の吹雪の中。",
			"凍てついた古代遺跡は沈黙し、氷河は隠された秘密を抱えていた。",
			"遊牧民アイラは忘れられた伝説を囁いた。終わりのない苦難の歴史を。",
			"誓約の枷、逃れられない運命のように。",
			"そしてその深奥で、再び悲劇が始まろうとしていた。"
		],
		"chinese": [
			"北海尽头，永恒的暴风雪中。",
			"冰封的古老遗迹寂静无声，冰川蕴藏着 Hún的秘密。",
			"游牧民艾拉低语着被遗忘的传说。一段永无止境的苦难历史。",
			"誓约的枷锁，如同无法摆脱的命运。",
			"而在这深处，悲剧再次 Fàng生。"
		],
		"french": [
			"Au bout de la mer du Nord, au cœur d'un blizzard éternel.",
			"Des ruines antiques gelées se taisaient, les glaciers recelant des secrets cachés.",
			"Aira, la nomade, murmurait des légendes oubliées. Une histoire de souffrances infinies.",
			"Les chaînes d'un serment, tel un destin inéluctable.",
			"Et dans ses profondeurs, la tragédie était sur le point de recommencer."
		],
		"spanish": [
			"En el confín del Mar del Norte, en una tormenta de nieve eterna.",
			"Antiguas ruinas congeladas permanecían en silencio, los glaciares guardaban secretos ocultos.",
			"Aira, la nómada, susurró leyendas olvidadas. Una historia de penurias interminables.",
			"Los grilletes de un juramento, como un destino ineludible.",
			"Y en sus profundidades, la tragedia estaba a punto de comenzar una vez más."
		],
		"vietnamese": [
			"Nơi tận cùng Biển Bắc, giữa bão tuyết vĩnh cửu.",
			"Di tích cổ đại đóng băng im lìm, băng hà ôm giữ những bí mật ẩn giấu.",
			"Aira, người du mục, thì thầm những truyền thuyết bị lãng quên. Một lịch sử khổ ải không hồi kết.",
			"Gông xiềng lời thề, như một số phận không thể thoát khỏi.",
			"Và sâu thẳm trong đó, bi kịch lại sắp bắt đầu một lần nữa."
		],
		"thai": [
			"ณ สุดขอบทะเลเหนือ ท่ามกลางพายุหิมะนิรันดร์",
			"ซากปรักหักพังโบราณที่เยือกแข็งเงียบงัน ธารน้ำแข็งซ่อนเร้นความลับ",
			"ไอรา ผู้พเนจร กระซิบตำนานที่ถูกลืม เรื่องราวความยากลำบากที่ไม่สิ้นสุด",
			"พันธนาการแห่งคำสาบาน ดุจโชคชะตาที่มิอาจหลีกหนี",
			"และในห้วงลึกนั้น โศกนาฏกรรมกำลังจะเริ่มต้นขึ้นอีกครั้ง"
		],
		"hindi": [
			"उत्तरी सागर के छोर पर, एक शाश्वत बर्फीले तूफान के बीच।",
			"जमे हुए प्राचीन खंडहर खामोश खड़े थे, ग्लेशियरों में छिपे रहस्य थे।",
			"खानाबदोश ऐरा ने भूली हुई किंवदंतियों को फुसफुसाया। अंतहीन कठिनाई का इतिहास।",
			"शपथ के बंधन, एक अपरिहार्य भाग्य की तरह।",
			"और उसकी गहराई में, त्रासदी एक बार फिर शुरू होने वाली थी।"
		]
	}
} as const;
