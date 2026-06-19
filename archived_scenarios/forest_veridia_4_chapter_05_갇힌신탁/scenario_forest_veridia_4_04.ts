export const scenario_forest_veridia_4_04 = {
	"scenario_id": "forest_veridia_4_04",
	"order": 4,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"fern": {
			"id": "mon_279a32a0-8ec1-4b5b-8179-32df46fdc664",
			"name": {
				"korean": "페른",
				"english": "Fern",
				"japanese": "フェルン",
				"chinese": "费恩",
				"french": "Fern",
				"spanish": "Fern",
				"vietnamese": "Fern",
				"thai": "เฟิร์น",
				"hindi": "फर्न"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/19f9763e-413a-485e-787a-9bbfd8208700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/563627d4-0b7c-4865-39d4-1d0a97363c00/public"
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
						"korean": "거대한 나무의 형상이 점차 일그러지고 있었다.",
						"english": "The form of the colossal tree was gradually distorting.",
						"japanese": "巨大な木の姿が次第に歪んでいった。",
						"chinese": "巨树的形态正在逐渐扭曲。",
						"french": "La forme de l'arbre colossal se déformait progressivement.",
						"spanish": "La forma del árbol colosal se estaba distorsionando gradualmente.",
						"vietnamese": "Hình dạng của cây khổng lồ đang dần biến dạng.",
						"thai": "รูปลักษณ์ของต้นไม้ยักษ์กำลังบิดเบี้ยวไปเรื่อย ๆ",
						"hindi": "विशाल वृक्ष का आकार धीरे-धीरे विकृत हो रहा था।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "저 빛… 어딘가 공허해 보여.",
						"english": "That light... it looks somehow empty.",
						"japanese": "あの光…どこか虚ろに見える。",
						"chinese": "那道光…看起来有些空洞。",
						"french": "Cette lumière… elle semble vide.",
						"spanish": "Esa luz... parece de alguna manera vacía.",
						"vietnamese": "Ánh sáng đó... trông có vẻ trống rỗng.",
						"thai": "แสงนั้น… ดูว่างเปล่าบางอย่าง",
						"hindi": "वह प्रकाश... कहीं न कहीं खाली लग रहा है।"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "fern",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						2
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…아냐, 거목이… 고통스러워하고 있어.",
						"english": "...No, the great tree... it's suffering.",
						"japanese": "…いや、巨木が…苦しんでいる。",
						"chinese": "不，巨树…它正在受苦。",
						"french": "…Non, le grand arbre… il souffre.",
						"spanish": "...No, el gran árbol... está sufriendo.",
						"vietnamese": "...Không, đại thụ... nó đang đau khổ.",
						"thai": "…ไม่สิ ต้นไม้ยักษ์… กำลังเจ็บปวด",
						"hindi": "...नहीं, वह विशाल वृक्ष... पीड़ा में है।"
					},
					"speaker": "fern",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "고통? 저 신성한 존재가?",
						"english": "Suffering? That sacred being?",
						"japanese": "苦痛？あの神聖な存在が？",
						"chinese": "痛苦？那个神圣的存在？",
						"french": "La souffrance ? Cette entité sacrée ?",
						"spanish": "¿Sufrimiento? ¿Ese ser sagrado?",
						"vietnamese": "Đau khổ? Thực thể thần thánh đó ư?",
						"thai": "ความเจ็บปวดหรือ? สิ่งศักดิ์สิทธิ์นั้นหรือ?",
						"hindi": "पीड़ा? वह पवित्र सत्ता?"
					}
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"speaker": "fern",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"type": "direction"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "빛이 따뜻한데… 왜 이렇게 쓸쓸한 기분이지?",
						"english": "The light is warm... but why do I feel so lonely?",
						"japanese": "光は温かいのに…なぜこんなに寂しい気持ちになるんだろう？",
						"chinese": "光很温暖…为什么我感觉如此孤独？",
						"french": "La lumière est chaude… mais pourquoi me sens-je si seule ?",
						"spanish": "La luz es cálida... ¿pero por qué me siento tan solo?",
						"vietnamese": "Ánh sáng ấm áp... nhưng sao tôi lại cảm thấy cô đơn đến vậy?",
						"thai": "แสงอบอุ่น… แต่ทำไมฉันถึงรู้สึกเหงาแบบนี้นะ?",
						"hindi": "प्रकाश गर्म है... लेकिन मुझे इतनी अकेली क्यों लग रही है?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "빛 안쪽에… 흐릿한 그림자가 보여. 누군가가… 갇혀 있어.",
						"english": "Inside the light... I see a faint shadow. Someone is... trapped.",
						"japanese": "光の内側に…ぼんやりとした影が見える。誰かが…囚われている。",
						"chinese": "光里面…我看到一个模糊的影子。有人…被困住了。",
						"french": "À l'intérieur de la lumière… je vois une ombre floue. Quelqu'un est… piégé.",
						"spanish": "Dentro de la luz... veo una sombra tenue. Alguien está... atrapado.",
						"vietnamese": "Bên trong ánh sáng... tôi thấy một cái bóng mờ nhạt. Ai đó... đang bị mắc kẹt.",
						"thai": "ด้านในแสง… ฉันเห็นเงาร่างลางๆ ใครบางคน… ถูกขังอยู่",
						"hindi": "प्रकाश के अंदर... मुझे एक धुंधली परछाई दिख रही है। कोई... फँसा हुआ है।"
					},
					"speaker": "fern",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "갇혀 있다고? 수호자의 안에?",
						"english": "Trapped? Inside the Guardian?",
						"japanese": "閉じ込められていると？守護者の中に？",
						"chinese": "被困住了？在守护者里面？",
						"french": "Piégé ? À l'intérieur du Gardien ?",
						"spanish": "¿Atrapado? ¿Dentro del Guardián?",
						"vietnamese": "Bị mắc kẹt? Bên trong Người giám hộ?",
						"thai": "ติดอยู่ข้างในเหรอ? ในตัวผู้พิทักษ์?",
						"hindi": "फँसा हुआ? संरक्षक के अंदर?"
					},
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "fern",
					"type": "direction",
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "fern",
					"content": {
						"korean": "수호자의 빛이 예언 대신 다른 말을 흘려. '끝내… 달라'고.",
						"english": "The Guardian's light whispers something else instead of a prophecy. 'End... it, please.'",
						"japanese": "守護者の光は、予言の代わりに別の言葉を囁く。「終わりに…してくれ」と。",
						"chinese": "守护者的光芒没有预言，却透露出另一句话：'结束…它吧'。",
						"french": "La lumière du Gardien murmure autre chose qu'une prophétie. 'Mettez-y... fin, s'il vous plaît.'",
						"spanish": "La luz del Guardián susurra algo más que una profecía. 'Acaba... con ello, por favor'.",
						"vietnamese": "Ánh sáng của Người giám hộ thì thầm một điều khác thay vì lời tiên tri. 'Hãy kết thúc… nó, làm ơn.'",
						"thai": "แสงของผู้พิทักษ์กระซิบสิ่งอื่นแทนคำทำนาย 'จบ…มันที'",
						"hindi": "संरक्षक का प्रकाश भविष्यवाणी के बजाय कुछ और फुसफुसाता है। 'इसे… खत्म करो, कृपया।'"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "끝내 달라니? 누가?",
						"english": "End it? Who?",
						"japanese": "終わりにしろと？誰が？",
						"chinese": "结束它？谁？",
						"french": "Y mettre fin ? Qui ?",
						"spanish": "¿Acabar con ello? ¿Quién?",
						"vietnamese": "Kết thúc nó ư? Ai?",
						"thai": "ให้จบลงเหรอ? ใคร?",
						"hindi": "इसे खत्म करो? कौन?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "fern",
					"content": {
						"korean": "이 거대한 수호자는… 감옥이었어. 무언가를 가두는.",
						"english": "This colossal Guardian... was a prison. Holding something captive.",
						"japanese": "この巨大な守護者は…監獄だった。何かを閉じ込めるための。",
						"chinese": "这个巨大的守护者…原来是个监狱。用来囚禁什么东西的。",
						"french": "Ce Gardien colossal... était une prison. Pour retenir quelque chose.",
						"spanish": "Este Guardián colosal... era una prisión. Que retenía algo.",
						"vietnamese": "Người giám hộ khổng lồ này... là một nhà tù. Để giam giữ thứ gì đó.",
						"thai": "ผู้พิทักษ์ร่างยักษ์นี้… เป็นคุก ที่กักขังบางสิ่งไว้",
						"hindi": "यह विशाल संरक्षक... एक जेल था। कुछ कैद करने के लिए।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "축복이… 아니었어?",
						"english": "It wasn't... a blessing?",
						"japanese": "祝福では…なかったのか？",
						"chinese": "这…不是祝福吗？",
						"french": "Ce n'était... pas une bénédiction ?",
						"spanish": "¿No era... una bendición?",
						"vietnamese": "Nó không phải... là một phước lành sao?",
						"thai": "มันไม่ใช่… พรหรอกเหรอ?",
						"hindi": "यह... आशीर्वाद नहीं था?"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "fern",
					"spot": [
						4,
						2
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "숲의 제단 곳곳에 작은 손으로 새긴 듯한 기도문이 보였다. '구해줘'.",
						"english": "Prayer carved by small hands was seen throughout the forest altars. 'Save me'.",
						"japanese": "森の祭壇のあちこちに、小さな手で刻まれたような祈りの言葉が見えた。「助けて」と。",
						"chinese": "森林祭坛各处都刻有像是小手写的祈祷文。'救救我'。",
						"french": "Des prières gravées par de petites mains étaient visibles un peu partout sur les autels de la forêt. 'Sauvez-moi'.",
						"spanish": "Oraciones talladas por pequeñas manos se veían por todos los altares del bosque. 'Sálvame'.",
						"vietnamese": "Những lời cầu nguyện được khắc bởi bàn tay nhỏ bé xuất hiện khắp các bàn thờ trong rừng. 'Cứu tôi với'.",
						"thai": "พบคำอธิษฐานที่ดูเหมือนถูกสลักด้วยมือเล็กๆ ทั่วแท่นบูชาในป่า 'ช่วยฉันด้วย'",
						"hindi": "जंगल की वेदियों पर छोटी उंगलियों से उकेरी गई प्रार्थनाएँ दिखीं। 'मुझे बचाओ'।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이건… 어린 아이의 글씨 같아.",
						"english": "This... looks like a child's handwriting.",
						"japanese": "これは…幼い子供の文字のようだ。",
						"chinese": "这…像是小孩子的字迹。",
						"french": "C'est... l'écriture d'un enfant.",
						"spanish": "Esto... parece la letra de un niño.",
						"vietnamese": "Đây... trông giống chữ viết của một đứa trẻ.",
						"thai": "นี่มัน… เหมือนลายมือเด็กเลย",
						"hindi": "यह... किसी बच्चे की लिखावट लगती है।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "갇힌 존재는… 저 작은 그림자는… 아이였어.",
						"english": "The trapped entity... that small shadow... was a child.",
						"japanese": "閉じ込められた存在は…あの小さな影は…子供だった。",
						"chinese": "被困的…那个小小的身影…是个孩子。",
						"french": "L'entité piégée... cette petite ombre... était un enfant.",
						"spanish": "La entidad atrapada... esa pequeña sombra... era un niño.",
						"vietnamese": "Thực thể bị mắc kẹt... cái bóng nhỏ bé đó... là một đứa trẻ.",
						"thai": "สิ่งมีชีวิตที่ถูกขัง… เงาเล็กๆ นั่น… คือเด็ก",
						"hindi": "वह फँसा हुआ प्राणी... वह छोटी सी परछाई... एक बच्चा था।"
					},
					"speaker": "fern"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "우린 지금까지… 저 아이의 고통 속으로 걸어왔던 거야?",
						"english": "Have we... been walking into that child's suffering all this time?",
						"japanese": "私たちは今まで…あの子供の苦痛の中を歩いてきたのか？",
						"chinese": "我们一直以来…都走在那个孩子的痛苦之中吗？",
						"french": "Avons-nous... marché dans la souffrance de cet enfant tout ce temps ?",
						"spanish": "¿Hemos... estado caminando hacia el sufrimiento de ese niño todo este tiempo?",
						"vietnamese": "Chúng ta... đã bước vào nỗi đau của đứa trẻ đó suốt thời gian qua sao?",
						"thai": "ตลอดมาพวกเรา… เดินเข้ามาในความทุกข์ทรมานของเด็กคนนั้นหรือ?",
						"hindi": "क्या हम... अब तक उस बच्चे के दर्द में चल रहे थे?"
					},
					"type": "speech"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "발버둥 쳐봐야… 이 감옥은 영원할 것이다.",
						"english": "Struggle all you want… this prison will be eternal.",
						"japanese": "もがいても…この監獄は永遠だ。",
						"chinese": "挣扎也无济于事…这座监狱将永远存在。",
						"french": "Peu importe tes efforts… cette prison sera éternelle.",
						"spanish": "Por mucho que te revuelvas… esta prisión será eterna.",
						"vietnamese": "Dù có vùng vẫy đến mấy… nhà tù này vẫn sẽ vĩnh cửu.",
						"thai": "ดิ้นรนไปก็เท่านั้น… คุกแห่งนี้จะคงอยู่ชั่วนิรันดร์",
						"hindi": "जितना मर्ज़ी हाथ-पैर मार लो… यह कारागार शाश्वत रहेगा।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "아니… 절대 포기 안 해!",
						"english": "No… I'll never give up!",
						"japanese": "いや…絶対に諦めない！",
						"chinese": "不…我绝不会放弃！",
						"french": "Non… je n'abandonnerai jamais !",
						"spanish": "¡No… nunca me rendiré!",
						"vietnamese": "Không… tôi sẽ không bao giờ bỏ cuộc!",
						"thai": "ไม่… ฉันไม่มีวันยอมแพ้!",
						"hindi": "नहीं… मैं कभी हार नहीं मानूँगा!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "거대한 수호자의 빛은, 여전히 모든 것을 감싸고 있었다.",
						"english": "The colossal guardian's light still enveloped everything.",
						"japanese": "巨大な守護者の光は、未だ全てを包み込んでいた。",
						"chinese": "巨型守护者的光芒，依然笼罩着一切。",
						"french": "La lumière du gardien colossal enveloppait toujours tout.",
						"spanish": "La luz del guardián colosal aún lo envolvía todo.",
						"vietnamese": "Ánh sáng của Hộ Vệ khổng lồ vẫn bao trùm mọi vật.",
						"thai": "แสงแห่งผู้พิทักษ์อันยิ่งใหญ่ยังคงปกคลุมทุกสรรพสิ่ง",
						"hindi": "विशालकाय संरक्षक का प्रकाश अभी भी सब कुछ घेरे हुए था।"
					},
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "어리석은… 결국 너도… 똑같은 길을 걷게 될 거야.",
						"english": "Foolish… In the end, you too… will walk the same path.",
						"japanese": "愚かな…結局お前も…同じ道を辿ることになるだろう。",
						"chinese": "愚蠢的…最终你也会…走上同一条路。",
						"french": "Stupide… au final, toi aussi… tu suivras le même chemin.",
						"spanish": "Necio… al final, tú también… seguirás el mismo camino.",
						"vietnamese": "Ngu ngốc… Cuối cùng ngươi cũng… sẽ đi trên con đường tương tự.",
						"thai": "โง่เขลา… ท้ายที่สุดแล้ว เจ้าเองก็จะ… เดินบนเส้นทางเดียวกัน",
						"hindi": "मूर्ख… अंततः तुम भी… उसी राह पर चलोगे।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "무슨… 소리야.",
						"english": "What… are you talking about?",
						"japanese": "何を…言っているんだ。",
						"chinese": "你…在说什么？",
						"french": "De quoi… parles-tu ?",
						"spanish": "¿Qué… dices?",
						"vietnamese": "Ngươi… đang nói gì vậy.",
						"thai": "พูด… อะไรน่ะ",
						"hindi": "क्या… बक रहे हो।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						2
					],
					"type": "direction",
					"speaker": "fern"
				},
				{
					"emotion": "happy",
					"speaker": "fern",
					"content": {
						"korean": "거목이… 조금씩 원래대로 돌아오고 있어.",
						"english": "The great tree… is slowly returning to its original state.",
						"japanese": "巨木が…少しずつ元に戻っている。",
						"chinese": "巨树…正在一点点恢复原状。",
						"french": "Le grand arbre… retrouve peu à peu son état d'origine.",
						"spanish": "El gran árbol… está volviendo poco a poco a su estado original.",
						"vietnamese": "Cây cổ thụ… đang dần trở lại trạng thái ban đầu.",
						"thai": "ต้นไม้ใหญ่… กำลังค่อยๆ กลับคืนสู่สภาพเดิม",
						"hindi": "विशाल वृक्ष… धीरे-धीरे अपनी मूल अवस्था में लौट रहा है।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "그러나 숲의 가장 깊은 곳에는, 아직 끝나지 않은 고통이 남아 있었다.",
						"english": "However, in the deepest part of the forest, an unfinished sorrow still remained.",
						"japanese": "しかし、森の最も深い場所には、まだ終わらない苦痛が残っていた。",
						"chinese": "然而，在森林最深处，仍有未尽的痛苦。",
						"french": "Cependant, au plus profond de la forêt, une souffrance inachevée demeurait encore.",
						"spanish": "Sin embargo, en lo más profundo del bosque, un dolor inconcluso aún permanecía.",
						"vietnamese": "Tuy nhiên, ở nơi sâu thẳm nhất của khu rừng, một nỗi đau chưa dứt vẫn còn đọng lại.",
						"thai": "แต่กระนั้น ในส่วนที่ลึกที่สุดของป่า ยังคงมีความทุกข์ทรมานที่ยังไม่สิ้นสุดเหลืออยู่",
						"hindi": "हालांकि, जंगल के सबसे गहरे हिस्से में, एक अधूरा दर्द अभी भी शेष था।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 빛 속에서 모습을 드러냈다.",
						"english": "A colossal shadow revealed itself within the light.",
						"japanese": "巨大な影が光の中から姿を現した。",
						"chinese": "一个巨大的影子在光芒中显现了。",
						"french": "Une ombre colossale se révéla dans la lumière.",
						"spanish": "Una sombra colosal se reveló dentro de la luz.",
						"vietnamese": "Một cái bóng khổng lồ xuất hiện trong ánh sáng.",
						"thai": "เงาร่างมหึมาปรากฏขึ้นท่ามกลางแสงสว่าง",
						"hindi": "एक विशाल परछाई प्रकाश में प्रकट हुई।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "감옥의 문을 두드리는 어리석은 자들이여.",
						"english": "Fools, knocking on the prison's door.",
						"japanese": "愚か者たちよ、監獄の扉を叩くがいい。",
						"chinese": "愚蠢的人们，竟敢敲响监狱之门。",
						"french": "Imbéciles, vous frappez à la porte de la prison.",
						"spanish": "Necios, llamando a la puerta de la prisión.",
						"vietnamese": "Những kẻ ngu ngốc, đang gõ cửa nhà tù.",
						"thai": "พวกโง่เขลาเอ๋ย เคาะประตูคุกงั้นหรือ",
						"hindi": "मूर्खों, कारागार का द्वार खटखटाते हो।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "네가… 저 아이를 가둔 거야?",
						"english": "Did you… imprison that child?",
						"japanese": "お前が…あの子供を閉じ込めたのか？",
						"chinese": "是你…囚禁了那个孩子吗？",
						"french": "C'est toi… qui as emprisonné cet enfant ?",
						"spanish": "Tú… ¿encerraste a ese niño?",
						"vietnamese": "Ngươi… đã giam cầm đứa trẻ đó sao?",
						"thai": "แก… เป็นคนขังเด็กนั่นงั้นเหรอ?",
						"hindi": "क्या तुमने… उस बच्चे को कैद किया?"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이것은 축복이다. 영원한 안식. 고통 없는 평화.",
						"english": "This is a blessing. Eternal rest. Peace without pain.",
						"japanese": "これは祝福だ。永遠の安息。苦痛なき平和を。",
						"chinese": "这是祝福。永恒的安息。没有痛苦的平静。",
						"french": "C'est une bénédiction. Un repos éternel. Une paix sans douleur.",
						"spanish": "Esto es una bendición. Descanso eterno. Paz sin dolor.",
						"vietnamese": "Đây là một phước lành. Sự an nghỉ vĩnh hằng. Bình yên không đau khổ.",
						"thai": "นี่คือพร สันติสุขนิรันดร์ ไร้ซึ่งความเจ็บปวด",
						"hindi": "यह एक आशीर्वाद है। शाश्वत शांति। दर्द रहित सुकून।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "고통 없는 평화 따윈 없어! 비켜!",
						"english": "There's no such thing as peace without pain! Get out of my way!",
						"japanese": "苦痛なき平和などない！邪魔だ！",
						"chinese": "根本没有没有痛苦的平静！滚开！",
						"french": "Il n'y a pas de paix sans douleur ! Écarte-toi !",
						"spanish": "¡No existe la paz sin dolor! ¡Apártate!",
						"vietnamese": "Không có thứ gọi là bình yên không đau khổ! Tránh ra!",
						"thai": "ไม่มีสันติสุขใดไร้ซึ่งความเจ็บปวด! หลีกไป!",
						"hindi": "दर्द रहित शांति जैसी कोई चीज़ नहीं! हट जाओ!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"거목의 형상이 일그러지기 시작했다.",
			"빛은 더 이상 자비롭지 않았다.",
			"그 안에서, 갇힌 그림자가 울부짖는 것을 보았다.",
			"축복은 거짓이었다. 이곳은 감옥이다."
		],
		"english": [
			"The form of the great tree began to distort.",
			"The light was no longer merciful.",
			"Within it, I saw a trapped shadow wailing.",
			"The blessing was a lie. This place is a prison."
		],
		"japanese": [
			"巨木の姿が歪み始めた。",
			"光はもはや慈悲深くなかった。",
			"その中で、囚われた影が泣き叫ぶのを見た。",
			"祝福は偽りだった。ここは監獄だ。"
		],
		"chinese": [
			"巨树的形态开始扭曲。",
			"光不再仁慈。",
			"在其中，我看到一个被困的影子在哀嚎。",
			"祝福是谎言。这里是监狱。"
		],
		"french": [
			"La forme du grand arbre commença à se déformer.",
			"La lumière n'était plus clémente.",
			"À l'intérieur, je vis une ombre emprisonnée hurler.",
			"La bénédiction était un mensonge. Cet endroit est une prison."
		],
		"spanish": [
			"La forma del gran árbol comenzó a distorsionarse.",
			"La luz ya no era misericordiosa.",
			"Dentro de ella, vi una sombra atrapada lamentándose.",
			"La bendición era una mentira. Este lugar es una prisión."
		],
		"vietnamese": [
			"Hình dạng của đại thụ bắt đầu biến dạng.",
			"Ánh sáng không còn nhân từ nữa.",
			"Bên trong, tôi thấy một cái bóng bị mắc kẹt đang than khóc.",
			"Lời chúc phúc là giả dối. Nơi này là nhà tù."
		],
		"thai": [
			"รูปลักษณ์ของต้นไม้ยักษ์เริ่มบิดเบี้ยว",
			"แสงนั้นไม่เมตตาอีกต่อไป",
			"ในนั้น ฉันเห็นเงาที่ถูกขังร่ำไห้",
			"พรนั้นเป็นเรื่องโกหก ที่นี่คือคุก"
		],
		"hindi": [
			"विशाल वृक्ष का आकार विकृत होने लगा था।",
			"प्रकाश अब कृपालु नहीं था।",
			"उसके भीतर, मैंने एक फँसी हुई परछाई को विलाप करते देखा।",
			"आशीर्वाद एक झूठ था। यह जगह एक जेल है।"
		]
	}
} as const;
