export const scenario_snowy_chantfrost_24_01 = {
	"scenario_id": "snowy_chantfrost_24_01",
	"order": 1,
	"act": "intro",
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
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "새하얀 설원, 거대한 얼음 조각들이 불규칙하게 솟아 있었다.",
						"english": "A pristine white snowfield, with colossal ice shards irregularly thrusting upwards.",
						"japanese": "真っ白な雪原には、巨大な氷の塊が不規則にそびえ立っていた。",
						"chinese": "洁白的雪原上，巨大的冰块不规则地耸立着。",
						"french": "Un champ de neige immaculée, d'où surgissaient irrégulièrement d'immenses fragments de glace.",
						"spanish": "Un campo de nieve inmaculado, con enormes fragmentos de hielo surgiendo irregularmente.",
						"vietnamese": "Đồng tuyết trắng xóa, những khối băng khổng lồ nhô lên một cách bất thường.",
						"thai": "ทุ่งหิมะสีขาวบริสุทธิ์ มีก้อนน้ำแข็งมหึมาผุดขึ้นมาอย่างไม่เป็นระเบียบ",
						"hindi": "एक श्वेत हिमक्षेत्र, जहाँ विशाल बर्फीले टुकड़े बेतरतीब ढंग से ऊपर उठे हुए थे।"
					}
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "어딘가에서 몽환적인 불협화음이 들려왔다.",
						"english": "From somewhere, an ethereal discord echoed.",
						"japanese": "どこからか、夢幻的な不協和音が聞こえてきた。",
						"chinese": "不知从何处传来，梦幻般的不和谐音。",
						"french": "De quelque part, une dissonance éthérée se fit entendre.",
						"spanish": "De algún lugar, una disonancia etérea resonó.",
						"vietnamese": "Từ đâu đó vọng lại, một âm thanh bất hòa huyền ảo.",
						"thai": "จากที่ใดสักแห่ง เสียงความไม่ปรองดองที่ชวนฝันดังขึ้น",
						"hindi": "कहीं से एक स्वप्निल बेसुरी ध्वनि सुनाई दी।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…이상한 소리야. 하지만 묘하게 끌려.",
						"english": "...It's a strange sound. But it's strangely alluring.",
						"japanese": "…奇妙な音だ。だが、妙に惹かれる。",
						"chinese": "……奇怪的声音。但却莫名地吸引人。",
						"french": "...C'est un son étrange. Mais étrangement attirant.",
						"spanish": "...Es un sonido extraño. Pero extrañamente me atrae.",
						"vietnamese": "...Thật là một âm thanh kỳ lạ. Nhưng lại cuốn hút một cách lạ thường.",
						"thai": "…เป็นเสียงที่แปลกประหลาด แต่ก็น่าดึงดูดใจอย่างประหลาด",
						"hindi": "...यह एक अजीब आवाज़ है। लेकिन अजीब तरह से लुभाती है।"
					}
				},
				{
					"spot": [
						4,
						3
					],
					"action": "enter",
					"speaker": "eira",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "happy",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "정말 아름다워… 이 모든 게 예술 작품이야.",
						"english": "It's truly beautiful... All of this is a work of art.",
						"japanese": "本当に美しい…この全てが芸術作品だ。",
						"chinese": "真美啊……这一切都是艺术品。",
						"french": "C'est vraiment magnifique... Tout cela est une œuvre d'art.",
						"spanish": "Es realmente hermoso... Todo esto es una obra de arte.",
						"vietnamese": "Thật đẹp quá... Tất cả những thứ này đều là một tác phẩm nghệ thuật.",
						"thai": "งดงามเหลือเกิน... ทั้งหมดนี้คือผลงานศิลปะ",
						"hindi": "यह सचमुच सुंदर है... यह सब एक कलाकृति है।"
					}
				},
				{
					"content": {
						"korean": "당신은… 누구시죠?",
						"english": "Who... are you?",
						"japanese": "あなたは…どなたですか？",
						"chinese": "您是……谁？",
						"french": "Vous êtes... qui ?",
						"spanish": "¿Usted... quién es?",
						"vietnamese": "Bạn là... ai vậy?",
						"thai": "คุณคือ... ใคร?",
						"hindi": "आप... कौन हैं?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "저는 에이라. 이 잊힌 전설의 기록자이자… 안내자예요.",
						"english": "I am Aira, chronicler and guide of this forgotten legend.",
						"japanese": "私はアイラ。この忘れられた伝説の記録者であり…案内役です。",
						"chinese": "我是艾拉。这被遗忘传说的记录者…也是指引者。",
						"french": "Je suis Aira, chroniqueuse et guide de cette légende oubliée.",
						"spanish": "Soy Aira, la cronista y... guía de esta leyenda olvidada.",
						"vietnamese": "Tôi là Aira, người ghi chép và… người hướng dẫn của truyền thuyết bị lãng quên này.",
						"thai": "ฉันคือไอรา ผู้บันทึกและ... ผู้นำทางของตำนานที่ถูกลืมนี้",
						"hindi": "मैं ऐरा हूँ, इस भूली हुई किंवदंती की लेखिका और... मार्गदर्शक।"
					},
					"speaker": "eira",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "이 선율은 그 어떤 음악보다도 완벽해요.",
						"english": "This melody is more perfect than any music.",
						"japanese": "この旋律は、どんな音楽よりも完璧です。",
						"chinese": "这旋律比任何音乐都完美。",
						"french": "Cette mélodie est plus parfaite que n'importe quelle musique.",
						"spanish": "Esta melodía es más perfecta que cualquier otra música.",
						"vietnamese": "Giai điệu này hoàn hảo hơn bất kỳ bản nhạc nào.",
						"thai": "ท่วงทำนองนี้สมบูรณ์แบบยิ่งกว่าดนตรีใดๆ",
						"hindi": "यह धुन किसी भी संगीत से ज़्यादा परिपूर्ण है।"
					},
					"emotion": "happy"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "eira",
					"action": "enter",
					"spot": [
						2,
						3
					]
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "이 거대한 얼음 조각들을 보세요. 하나하나가 이야기를 담고 있어요.",
						"english": "Look at these colossal ice sculptures. Each one tells a story.",
						"japanese": "この巨大な氷の彫刻を見てください。一つ一つに物語が込められています。",
						"chinese": "看这些巨大的冰雕。每一个都承载着一个故事。",
						"french": "Regardez ces sculptures de glace colossales. Chacune raconte une histoire.",
						"spanish": "Mirad estas colosales esculturas de hielo. Cada una guarda una historia.",
						"vietnamese": "Hãy nhìn những tác phẩm điêu khắc băng khổng lồ này. Mỗi cái đều chứa đựng một câu chuyện.",
						"thai": "ดูประติมากรรมน้ำแข็งมหึมาเหล่านี้สิ แต่ละชิ้นมีเรื่องราวอยู่ในนั้น",
						"hindi": "इन विशाल बर्फीली मूर्तियों को देखो। हर एक में एक कहानी है।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "저 조각에서… 묘한 소리가 들려.",
						"english": "From that sculpture... I hear a strange sound.",
						"japanese": "あの彫刻から…奇妙な音が聞こえる。",
						"chinese": "从那个雕塑里…我听到了奇怪的声音。",
						"french": "De cette sculpture... j'entends un son étrange.",
						"spanish": "De esa escultura... se oye un sonido extraño.",
						"vietnamese": "Từ tác phẩm điêu khắc đó… tôi nghe thấy một âm thanh kỳ lạ.",
						"thai": "จากประติมากรรมนั้น... ฉันได้ยินเสียงแปลกๆ",
						"hindi": "उस मूर्ति से... मुझे एक अजीब आवाज़ सुनाई देती है।"
					}
				},
				{
					"content": {
						"korean": "미세하게 일렁이는 불협화음, 그 표면에 희미하게 바이킹 문양이 새겨져 있었다.",
						"english": "A faint, unsettling dissonance shimmered, with Viking patterns faintly etched on its surface.",
						"japanese": "微かに揺らめく不協和音。その表面には、かすかにヴァイキングの模様が刻まれていた。",
						"chinese": "一丝微弱的、令人不安的不和谐音在闪烁，其表面隐约刻着维京图案。",
						"french": "Une dissonance subtile et troublante scintillait, avec de faibles motifs vikings gravés à sa surface.",
						"spanish": "Una disonancia sutil e inquietante vibraba, con patrones vikingos débilmente grabados en su superficie.",
						"vietnamese": "Một sự bất hòa tinh tế, khó chịu lung linh, với những họa tiết Viking mờ nhạt được khắc trên bề mặt.",
						"thai": "ความไม่ลงรอยที่สั่นไหวเล็กน้อย ลวดลายไวกิ้งสลักอยู่บนพื้นผิวจางๆ",
						"hindi": "एक हल्की, बेचैन करने वाली विसंगति चमक रही थी, जिसकी सतह पर वाइकिंग पैटर्न हल्के से खुदे हुए थे।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "그게 이 세계의 진정한 예술이에요. 완벽한 조화가 아니어도 충분히 아름답죠.",
						"english": "That's the true art of this world. Even without perfect harmony, it's beautiful enough.",
						"japanese": "それがこの世界の真の芸術です。完璧な調和でなくとも、十分に美しいのです。",
						"chinese": "那就是这个世界的真正艺术。即使没有完美的和谐，也足够美丽了。",
						"french": "C'est la véritable essence artistique de ce monde. Même sans parfaite harmonie, c'est suffisamment beau.",
						"spanish": "Ese es el verdadero arte de este mundo. Aunque no sea una armonía perfecta, es suficientemente hermoso.",
						"vietnamese": "Đó là nghệ thuật thực sự của thế giới này. Dù không có sự hài hòa hoàn hảo, nó vẫn đủ đẹp.",
						"thai": "นั่นคือศิลปะที่แท้จริงของโลกนี้ แม้ไม่สมบูรณ์แบบ ก็ยังสวยงามพอ",
						"hindi": "वही इस दुनिया की सच्ची कला है। भले ही इसमें पूर्ण सामंजस्य न हो, यह काफ़ी सुंदर है।"
					},
					"emotion": "happy"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "하지만… 어딘가 섬뜩한데.",
						"english": "But... it's somewhat eerie.",
						"japanese": "しかし…どこか不気味だ。",
						"chinese": "但是…总觉得有点毛骨悚然。",
						"french": "Mais... c'est un peu étrange.",
						"spanish": "Pero... es un tanto espeluznante.",
						"vietnamese": "Nhưng… có gì đó rợn người.",
						"thai": "แต่... มันน่าขนลุกบางอย่าง",
						"hindi": "लेकिन... यह कुछ हद तक डरावना है।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 아름다움을 보존해야 해요. 누구도 함부로 훼손해서는 안 돼요.",
						"english": "This beauty must be preserved. No one should dare defile it.",
						"japanese": "この美しさは守らなければなりません。誰もむやみに傷つけてはなりません。",
						"chinese": "这份美丽必须被保存。谁也不应该随意破坏它。",
						"french": "Cette beauté doit être préservée. Personne ne devrait oser la profaner.",
						"spanish": "Esta belleza debe ser preservada. Nadie debería atreverse a profanarla.",
						"vietnamese": "Vẻ đẹp này phải được bảo tồn. Không ai được phép tùy tiện phá hoại.",
						"thai": "ความงามนี้ต้องถูกอนุรักษ์ไว้ ไม่มีใครควรทำลายมันอย่างไม่สมควร",
						"hindi": "इस सुंदरता को संरक्षित किया जाना चाहिए। किसी को भी इसे अपवित्र करने की हिम्मत नहीं करनी चाहिए।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						3
					],
					"speaker": "eira",
					"action": "enter"
				},
				{
					"content": {
						"korean": "이곳에 흐르는 선율은… 마치 오랜 갈망처럼 들려요.",
						"english": "The melody flowing here... sounds like an ancient longing.",
						"japanese": "ここに流れる旋律は…まるで長い間の渇望のように聞こえる。",
						"chinese": "这里流淌的旋律…听起来像是一种长久的渴望。",
						"french": "La mélodie qui résonne ici... sonne comme une ancienne aspiration.",
						"spanish": "La melodía que fluye aquí... suena como un anhelo ancestral.",
						"vietnamese": "Giai điệu chảy ở đây… nghe như một nỗi khao khát xa xưa.",
						"thai": "ท่วงทำนองที่ไหลเวียนอยู่ที่นี่... ฟังดูเหมือนความปรารถนาอันยาวนาน",
						"hindi": "यहां बहने वाली धुन... एक पुरानी लालसा जैसी लगती है।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "알 수 없는 언어의 나지막한 노랫소리가 맴돌았다. 쓸쓸함이 묻어났다.",
						"english": "A soft song in an unknown language lingered, steeped in loneliness.",
						"japanese": "未知の言語による低い歌声が響き渡った。そこには寂しさがにじみ出ていた。",
						"chinese": "一段未知语言的低声歌唱回荡着。其中充满了寂寥。",
						"french": "Une douce chanson dans une langue inconnue traînait, empreinte de solitude.",
						"spanish": "Una suave canción en un idioma desconocido resonaba, impregnada de soledad.",
						"vietnamese": "Một bài hát dịu nhẹ bằng ngôn ngữ không rõ vang vọng, đượm buồn.",
						"thai": "บทเพลงแผ่วเบาในภาษาที่ไม่รู้จักวนเวียนอยู่ ความเหงาแผ่ซ่าน",
						"hindi": "एक अज्ञात भाषा का धीमा गीत गूंज रहा था, जिसमें उदासी भरी थी।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "갈망? 뭘 갈망한다는 거야.",
						"english": "Longing? What are you longing for?",
						"japanese": "渇望？何を渇望しているの？",
						"chinese": "渴望？渴望什么？",
						"french": "Un désir ardent ? De quoi parlez-vous ?",
						"spanish": "¿Anhelo? ¿Anhelo de qué?",
						"vietnamese": "Khát vọng? Khát vọng điều gì?",
						"thai": "ความปรารถนา? ปรารถนาอะไร?",
						"hindi": "लालसा? किस बात की लालसा है?"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "찬사… 혹은 인정 같은 거겠죠. 예술가라면 모두가 그래요.",
						"english": "Praise... or perhaps recognition. All artists are like that.",
						"japanese": "称賛…あるいは認められることでしょうか。芸術家なら誰もがそうですよ。",
						"chinese": "赞美……或者说是认可。所有艺术家都是如此。",
						"french": "Des éloges... ou peut-être de la reconnaissance. Tous les artistes sont comme ça.",
						"spanish": "Elogios... o quizás reconocimiento. Todos los artistas son así.",
						"vietnamese": "Khen ngợi... hoặc sự công nhận. Mọi nghệ sĩ đều như vậy.",
						"thai": "คำสรรเสริญ... หรือการยอมรับกระมัง ศิลปินทุกคนเป็นแบบนั้นแหละ",
						"hindi": "प्रशंसा... या शायद पहचान। सभी कलाकार ऐसे ही होते हैं।"
					},
					"speaker": "eira",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 얼음… 마치 생명체 같아.",
						"english": "This ice... it's like a living creature.",
						"japanese": "この氷…まるで生き物のようだ。",
						"chinese": "这冰……就像活物一样。",
						"french": "Cette glace... c'est comme une créature vivante.",
						"spanish": "Este hielo... parece una criatura viva.",
						"vietnamese": "Tảng băng này... như một sinh vật sống vậy.",
						"thai": "น้ำแข็งนี่... เหมือนสิ่งมีชีวิตเลย",
						"hindi": "यह बर्फ... एक जीवित प्राणी जैसी है।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "네. 살아있는 예술이에요. 이걸 파괴하는 건… 죄악이에요.",
						"english": "Yes. It's living art. Destroying it... is a sin.",
						"japanese": "ええ。生きている芸術です。これを破壊するのは…罪悪ですよ。",
						"chinese": "是的。这是活着的艺术。破坏它……是一种罪恶。",
						"french": "Oui. C'est de l'art vivant. Le détruire... est un péché.",
						"spanish": "Sí. Es arte vivo. Destruirlo... es un pecado.",
						"vietnamese": "Vâng. Đó là nghệ thuật sống. Phá hủy nó... là một tội lỗi.",
						"thai": "ครับ มันคือศิลปะที่มีชีวิต การทำลายมัน...เป็นบาปครับ",
						"hindi": "हाँ। यह जीवित कला है। इसे नष्ट करना... एक पाप है।"
					},
					"speaker": "eira",
					"type": "speech"
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
					"speaker": "eira",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "거대한 얼음 덩어리가 눈앞을 가로막았다. 세계의 끝처럼 느껴졌다.",
						"english": "A colossal block of ice blocked the path. It felt like the end of the world.",
						"japanese": "巨大な氷の塊が目の前を遮った。世界の終わりのように感じられた。",
						"chinese": "巨大的冰块挡住了去路。感觉像是世界的尽头。",
						"french": "Un bloc de glace colossal barrait le chemin. C'était comme la fin du monde.",
						"spanish": "Un colosal bloque de hielo bloqueó el camino. Se sintió como el fin del mundo.",
						"vietnamese": "Một khối băng khổng lồ chắn ngang tầm mắt. Cảm giác như tận thế vậy.",
						"thai": "ก้อนน้ำแข็งมหึมากีดขวางอยู่เบื้องหน้า รู้สึกราวกับเป็นจุดจบของโลก",
						"hindi": "एक विशालकाय बर्फ का टुकड़ा सामने आ गया। ऐसा लगा जैसे दुनिया का अंत हो।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "저게… 그 눈덩이라는 건가.",
						"english": "Is that... the snowball?",
						"japanese": "あれが…その雪玉なのか。",
						"chinese": "那个……就是那个雪球吗？",
						"french": "Est-ce que c'est... cette boule de neige ?",
						"spanish": "¿Es eso... esa bola de nieve?",
						"vietnamese": "Đó là... quả cầu tuyết đó sao?",
						"thai": "นั่น...คือก้อนหิมะนั่นเหรอ",
						"hindi": "क्या वह... वह बर्फ का गोला है?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "차갑고 단단하지만… 그 안엔 더 깊은 아름다움이 잠들어 있어요.",
						"english": "Cold and hard, yet... a deeper beauty sleeps within.",
						"japanese": "冷たくて硬いけれど…その中にはもっと深い美しさが眠っています。",
						"chinese": "冰冷坚硬……但其中沉睡着更深层的美。",
						"french": "Froid et dur, et pourtant... une beauté plus profonde y sommeille.",
						"spanish": "Frío y duro, sin embargo... una belleza más profunda duerme en su interior.",
						"vietnamese": "Lạnh lẽo và cứng rắn, nhưng... bên trong ẩn chứa một vẻ đẹp sâu thẳm hơn.",
						"thai": "เย็นยะเยือกและแข็งกระด้าง แต่...ภายในนั้นมีความงามที่ลึกซึ้งกว่าหลับใหลอยู่",
						"hindi": "ठंडा और कठोर है, फिर भी... उसके भीतर एक गहरी सुंदरता सोई हुई है।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "연민이 느껴져… 길 잃은 것 같은데.",
						"english": "I feel compassion... it seems lost.",
						"japanese": "憐憫を感じる…道に迷ったかのようだ。",
						"chinese": "我感到怜悯……它好像迷路了。",
						"french": "Je ressens de la compassion... il semble perdu.",
						"spanish": "Siento compasión... parece perdido.",
						"vietnamese": "Tôi cảm thấy thương cảm... nó có vẻ như bị lạc.",
						"thai": "รู้สึกสงสาร...ดูเหมือนหลงทาง",
						"hindi": "मुझे दया आ रही है... यह खोया हुआ लग रहा है।"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…봐요. 이 모든 게 고독한 예술가의 외침이에요. 우리가 지켜줘야 해요.",
						"english": "...Look. All of this is the cry of a lonely artist. We must protect it.",
						"japanese": "…見てください。この全てが孤独な芸術家の叫びなんです。私たちが守ってあげなければ。",
						"chinese": "……看。这一切都是孤独艺术家的呐喊。我们必须保护它。",
						"french": "...Regardez. Tout cela est le cri d'un artiste solitaire. Nous devons le protéger.",
						"spanish": "...Mire. Todo esto es el grito de un artista solitario. Debemos protegerlo.",
						"vietnamese": "...Nhìn kìa. Tất cả đây là tiếng kêu của một nghệ sĩ cô độc. Chúng ta phải bảo vệ nó.",
						"thai": "...ดูสิ ทั้งหมดนี่คือเสียงกรีดร้องของศิลปินผู้โดดเดี่ยว เราต้องปกป้องมัน",
						"hindi": "...देखो। यह सब एक अकेले कलाकार की पुकार है। हमें इसकी रक्षा करनी चाहिए।"
					},
					"speaker": "eira",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…아름다움은… 영원히….",
						"english": "...Beauty is... forever...",
						"japanese": "…美しさは…永遠に…。",
						"chinese": "…美…永恒不朽…。",
						"french": "...La beauté est... éternelle...",
						"spanish": "...La belleza es... eterna...",
						"vietnamese": "...Vẻ đẹp... vĩnh cửu...",
						"thai": "...ความงาม...นิรันดร์...",
						"hindi": "...सुंदरता... अनंत..."
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "거대한 눈덩이가 서서히 가라앉았다. 그 안에서 희미한 노랫소리가 멈췄다.",
						"english": "The gigantic snowball slowly sank. Inside, a faint singing stopped.",
						"japanese": "巨大な雪玉がゆっくりと沈んだ。その中から微かな歌声が止んだ。",
						"chinese": "巨大的雪球缓缓沉没。其中微弱的歌声停止了。",
						"french": "L'énorme boule de neige s'est lentement enfoncée. À l'intérieur, un chant faible s'est tu.",
						"spanish": "La gigantesca bola de nieve se hundió lentamente. Dentro, un débil canto se detuvo.",
						"vietnamese": "Quả cầu tuyết khổng lồ từ từ chìm xuống. Bên trong, tiếng hát yếu ớt đã ngừng lại.",
						"thai": "ก้อนหิมะขนาดยักษ์ค่อยๆ จมลงไป เสียงเพลงแผ่วเบาที่อยู่ข้างในก็หยุดลง.",
						"hindi": "विशालकाय बर्फ का गोला धीरे-धीरे डूब गया। अंदर, एक हल्की सी गाने की आवाज़ रुक गई।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "안 돼… 그 예술을… 그렇게 쉽게….",
						"english": "No... That art... not so easily...",
						"japanese": "駄目だ…その芸術を…そんなに簡単に…。",
						"chinese": "不…那艺术…怎能如此轻易地…",
						"french": "Non... Cet art... pas si facilement...",
						"spanish": "No... Ese arte... no tan fácilmente...",
						"vietnamese": "Không thể... Nghệ thuật đó... sao có thể dễ dàng như vậy...",
						"thai": "ไม่นะ...ศิลปะนั้น...ง่ายดายเพียงนี้...",
						"hindi": "नहीं... वह कला... इतनी आसानी से नहीं..."
					},
					"speaker": "eira",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "끝이 아니야. 이 '예술' 뒤에 뭔가 더 있어.",
						"english": "It's not over. There's something more behind this 'art'.",
						"japanese": "終わりじゃない。この『芸術』の裏には何かがある。",
						"chinese": "还没结束。这‘艺术’背后还有别的什么。",
						"french": "Ce n'est pas la fin. Il y a quelque chose de plus derrière cet 'art'.",
						"spanish": "No es el final. Hay algo más detrás de este 'arte'.",
						"vietnamese": "Chưa kết thúc đâu. Có điều gì đó đằng sau 'nghệ thuật' này.",
						"thai": "ยังไม่จบหรอก. มีบางสิ่งอยู่เบื้องหลัง 'ศิลปะ' นี้.",
						"hindi": "यह खत्म नहीं हुआ है। इस 'कला' के पीछे कुछ और है।"
					}
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "얼어붙은 선율의 근원을 향한 여정은 이제 시작이었다.",
						"english": "The journey towards the source of the frozen melody had just begun.",
						"japanese": "凍てついた旋律の根源へと向かう旅は、今始まったばかりだった。",
						"chinese": "通往冰冻旋律之源的旅程才刚刚开始。",
						"french": "Le voyage vers la source de la mélodie gelée ne faisait que commencer.",
						"spanish": "El viaje hacia el origen de la melodía congelada acababa de empezar.",
						"vietnamese": "Hành trình tìm đến cội nguồn của giai điệu đóng băng chỉ mới bắt đầu.",
						"thai": "การเดินทางสู่ต้นกำเนิดของท่วงทำนองที่แข็งตัวเพิ่งเริ่มต้นขึ้น.",
						"hindi": "जमी हुई धुन के स्रोत की ओर यात्रा अभी शुरू हुई थी।"
					}
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "거대한 얼음 덩어리, 그 표면이 일그러지며 꿈틀거렸다.",
						"english": "The colossal block of ice, its surface warped and writhing.",
						"japanese": "巨大な氷の塊、その表面が歪みうごめいていた。",
						"chinese": "巨大的冰块，其表面扭曲蠕动着。",
						"french": "Le bloc de glace colossal, sa surface se déformait et tordait.",
						"spanish": "El colosal bloque de hielo, su superficie se distorsionaba y retorcía.",
						"vietnamese": "Khối băng khổng lồ, bề mặt của nó biến dạng và cuộn mình.",
						"thai": "ก้อนน้ำแข็งมหึมา ผิวของมันบิดเบี้ยวและกระตุก",
						"hindi": "विशालकाय बर्फ का टुकड़ा, जिसकी सतह विकृत होकर ऐंठ रही थी।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…들어라. 나의… 선율을.",
						"english": "...Listen. To my... melody.",
						"japanese": "…聞け。私の…旋律を。",
						"chinese": "…听着。我的…旋律。",
						"french": "...Écoutez. Ma... mélodie.",
						"spanish": "...Escucha. Mi... melodía.",
						"vietnamese": "...Hãy nghe. Giai điệu của ta...",
						"thai": "...ฟังเถิด. ท่วงทำนองของข้า...",
						"hindi": "...सुनो। मेरी... धुन को।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "더 이상 이 소리에 속지 않아. 이건 예술이 아니야.",
						"english": "I won't be fooled by this sound anymore. This isn't art.",
						"japanese": "もうこの音には騙されない。これは芸術じゃない。",
						"chinese": "我不会再被这声音欺骗了。这不是艺术。",
						"french": "Je ne serai plus dupé par ce son. Ce n'est pas de l'art.",
						"spanish": "Ya no me engañará este sonido. Esto no es arte.",
						"vietnamese": "Ta sẽ không bị lừa bởi âm thanh này nữa. Đây không phải nghệ thuật.",
						"thai": "ข้าจะไม่ถูกหลอกด้วยเสียงนี้อีกแล้ว นี่ไม่ใช่ศิลปะ.",
						"hindi": "मैं अब इस आवाज़ से मूर्ख नहीं बनूँगा। यह कला नहीं है।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira",
					"spot": [
						1,
						3
					]
				},
				{
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "아니에요! 이건 위대한 예술가의… 절규예요!",
						"english": "No! This is the... cry of a great artist!",
						"japanese": "違います！これは偉大な芸術家の…叫びです！",
						"chinese": "不！这是伟大艺术家的…绝唱！",
						"french": "Non ! C'est le... cri d'un grand artiste !",
						"spanish": "¡No! ¡Este es el... grito de un gran artista!",
						"vietnamese": "Không! Đây là... tiếng lòng của một nghệ sĩ vĩ đại!",
						"thai": "ไม่จริง! นี่คือ...เสียงกรีดร้องของศิลปินผู้ยิ่งใหญ่!",
						"hindi": "नहीं! यह एक महान कलाकार की... चीख है!"
					}
				},
				{
					"content": {
						"korean": "감히… 나의 걸작을… 파괴하려 드는가.",
						"english": "How dare you... try to destroy... my masterpiece.",
						"japanese": "あえて…私の傑作を…破壊しようとするのか。",
						"chinese": "竟敢…企图摧毁…我的杰作。",
						"french": "Comment oses-tu... tenter de détruire... mon chef-d'œuvre.",
						"spanish": "¿Cómo osas... intentar destruir... mi obra maestra?",
						"vietnamese": "Ngươi dám... phá hủy... kiệt tác của ta sao.",
						"thai": "เจ้ากล้า...ทำลาย...ผลงานชิ้นเอกของข้าหรือ.",
						"hindi": "तुम्हारी हिम्मत कैसे हुई... मेरी कृति को... नष्ट करने की।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "…나의 작품이 될지어다.",
						"english": "...Become my masterpiece.",
						"japanese": "…私の作品となるがいい。",
						"chinese": "…成为我的作品吧。",
						"french": "...Deviens mon chef-d'œuvre.",
						"spanish": "...Serás mi obra.",
						"vietnamese": "...Hãy trở thành tác phẩm của ta.",
						"thai": "...จงเป็นผลงานของข้า.",
						"hindi": "...मेरी कृति बन जाओगे।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이렇게 끝낼 순 없어… 아직 밝혀낼 진실이 남아있어.",
						"english": "I can't end it like this... There's still truth to uncover.",
						"japanese": "こんな終わり方はできない…まだ、暴かれるべき真実が残っている。",
						"chinese": "不能就这样结束……还有真相尚未揭露。",
						"french": "Je ne peux pas finir comme ça... Il y a encore une vérité à découvrir.",
						"spanish": "No puedo terminar así... Aún queda verdad por descubrir.",
						"vietnamese": "Không thể kết thúc thế này... Vẫn còn sự thật cần được phơi bày.",
						"thai": "จะจบแบบนี้ไม่ได้... ยังมีความจริงที่ต้องเปิดเผยอยู่.",
						"hindi": "मैं इसे ऐसे खत्म नहीं कर सकता... अभी भी सच्चाई सामने आनी बाकी है।"
					},
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "그는 단지… 이해받고 싶었을 뿐이에요.",
						"english": "He merely... wanted to be understood.",
						"japanese": "彼はただ…理解されたかっただけなんだ。",
						"chinese": "他只是……想被理解而已。",
						"french": "Il voulait simplement... être compris.",
						"spanish": "Él solo... quería ser comprendido.",
						"vietnamese": "Anh ấy chỉ là... muốn được thấu hiểu mà thôi.",
						"thai": "เขาแค่อยาก... เป็นที่เข้าใจเท่านั้นเอง.",
						"hindi": "वह बस... समझा जाना चाहता था।"
					},
					"speaker": "eira",
					"type": "speech"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"새하얀 설원, 끝없는 침묵 속.",
			"어딘가에서 들려오는, 낯설지만 묘하게 끌리는 선율.",
			"그것은 이 세계의 심장을 울리는 노래인가.",
			"아니면, 얼어붙은 영혼의 비명인가.",
			"우리는 이 선율에 이끌려 발을 내디뎠다."
		],
		"english": [
			"A pristine white snowfield, in endless silence.",
			"From somewhere, a melody, unfamiliar yet strangely captivating.",
			"Is it the song that makes this world's heart echo?",
			"Or, is it the scream of a frozen soul?",
			"We stepped forward, drawn by this melody."
		],
		"japanese": [
			"真っ白な雪原、終わりのない沈黙の中。",
			"どこかから聞こえる、見慣れないが妙に惹かれる旋律。",
			"それはこの世界の心臓を震わせる歌なのか。",
			"それとも、凍てついた魂の悲鳴なのか。",
			"私たちはこの旋律に導かれ、足を踏み出した。"
		],
		"chinese": [
			"洁白的雪原，无尽的寂静之中。",
			"不知从何处传来，陌生却又莫名吸引人的旋律。",
			"那是让这个世界心跳不已的歌声吗？",
			"抑或是，冰冻灵魂的悲鸣？",
			"我们被这旋律吸引，迈出了脚步。"
		],
		"french": [
			"Une étendue de neige immaculée, dans un silence infini.",
			"De quelque part, une mélodie, inconnue mais étrangement captivante.",
			"Est-ce le chant qui fait battre le cœur de ce monde ?",
			"Ou bien, est-ce le cri d'une âme gelée ?",
			"Attirés par cette mélodie, nous avons fait un pas."
		],
		"spanish": [
			"Un campo de nieve inmaculado, en un silencio interminable.",
			"De algún lugar, una melodía, extraña pero extrañamente atractiva.",
			"¿Es la canción que hace latir el corazón de este mundo?",
			"O, ¿es el grito de un alma congelada?",
			"Atrayéndonos esta melodía, dimos un paso."
		],
		"vietnamese": [
			"Đồng tuyết trắng xóa, trong sự im lặng vô tận.",
			"Từ đâu đó vọng lại, một giai điệu lạ lẫm nhưng cuốn hút kỳ lạ.",
			"Có phải đó là khúc ca lay động trái tim thế giới này?",
			"Hay là, tiếng thét của một linh hồn băng giá?",
			"Chúng ta bị giai điệu này cuốn hút, đã bước chân tới."
		],
		"thai": [
			"ทุ่งหิมะสีขาวบริสุทธิ์ ท่ามกลางความเงียบงันไม่สิ้นสุด",
			"จากที่ใดสักแห่ง เสียงทำนองเพลงที่ไม่คุ้นเคย แต่ดึงดูดใจอย่างประหลาด",
			"มันคือบทเพลงที่ทำให้หัวใจของโลกนี้เต้นรัวอย่างนั้นหรือ?",
			"หรือเป็นเสียงกรีดร้องของวิญญาณที่แข็งเป็นน้ำแข็ง?",
			"เราก้าวเดินไปข้างหน้า ถูกดึงดูดด้วยทำนองเพลงนี้"
		],
		"hindi": [
			"एक श्वेत हिमक्षेत्र, अंतहीन मौन में।",
			"कहीं से आती, एक अपरिचित पर मोहक धुन।",
			"क्या यह इस दुनिया के दिल को धड़काने वाला गीत है?",
			"या, एक जमी हुई आत्मा की चीख है?",
			"हम इस धुन से खिंचे चले गए।"
		]
	}
} as const;
