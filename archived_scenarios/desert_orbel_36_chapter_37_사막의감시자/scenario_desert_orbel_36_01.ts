export const scenario_desert_orbel_36_01 = {
	"scenario_id": "desert_orbel_36_01",
	"order": 1,
	"act": "intro",
	"theme": "desert",
	"actors": {
		"amir": {
			"id": "mon_0096d602-52ab-4a9c-9cc8-4ff18ed3b655",
			"name": {
				"korean": "아미르",
				"english": "Amir",
				"japanese": "アミール",
				"chinese": "阿米尔",
				"french": "Amir",
				"spanish": "Amir",
				"vietnamese": "Amir",
				"thai": "อาเมียร์",
				"hindi": "अमीर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8cd60fb0-3699-44c4-6425-a3e97eec1800/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/b644dc95-9c27-442e-6dc6-73e5550a0200/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"끝없이 펼쳐진 모래 바다. 이곳은 죽은 땅이었다.",
			"하지만 모래는 무언가를 속삭였다. 사라지지 않는 그림자처럼.",
			"탐험대는 알지 못했다. 발을 딛는 순간, 이미 늦었다는 것을."
		],
		"english": [
			"An endless sea of sand. This was a dead land.",
			"But the sand whispered something. Like an unvanishing shadow.",
			"The expedition team didn't know. The moment they stepped foot, it was already too late."
		],
		"japanese": [
			"果てしなく広がる砂の海。ここは死んだ土地だった。",
			"しかし、砂は何かのささやきを持っていた。消えない影のように。",
			"探検隊は知らなかった。足を踏み入れた瞬間、すでに手遅れだということを。"
		],
		"chinese": [
			"一望无际的沙海。这是一片死寂之地。",
			"然而，沙子低语着什么。如同不散的阴影。",
			"探险队并不知道。当他们踏足的那一刻，一切都已太迟。"
		],
		"french": [
			"Une mer de sable infinie. C'était une terre morte.",
			"Mais le sable chuchotait quelque chose. Comme une ombre indélébile.",
			"L'équipe d'expédition ignorait. Dès l'instant où ils posèrent le pied, il était déjà trop tard."
		],
		"spanish": [
			"Un mar de arena sin fin. Esta era una tierra muerta.",
			"Pero la arena susurraba algo. Como una sombra que no desaparece.",
			"El equipo de expedición no lo sabía. En el momento en que pusieron un pie, ya era demasiado tarde."
		],
		"vietnamese": [
			"Biển cát vô tận. Đây là một vùng đất chết.",
			"Nhưng cát thì thầm điều gì đó. Như một bóng hình không biến mất.",
			"Đội thám hiểm không hề biết. Khoảnh khắc họ đặt chân tới, mọi thứ đã quá muộn."
		],
		"thai": [
			"ทะเลทรายอันกว้างใหญ่ไร้ที่สิ้นสุด ที่นี่คือดินแดนแห่งความตาย",
			"แต่ทรายกระซิบอะไรบางอย่าง ราวกับเงาที่ไม่เคยจางหาย",
			"ทีมสำรวจไม่รู้ตัวเลย ทันทีที่พวกเขาก้าวเข้ามา ก็สายเกินไปแล้ว"
		],
		"hindi": [
			"रेत का एक अंतहीन सागर। यह एक मृत भूमि थी।",
			"लेकिन रेत कुछ फुसफुसा रही थी। एक न मिटने वाली छाया की तरह।",
			"अभियान दल को नहीं पता था। जिस क्षण उन्होंने कदम रखा, तब तक बहुत देर हो चुकी थी।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "끝없이 펼쳐진 모래 바다. 이곳은 모든 것이 사라지는 곳이었다.",
						"english": "An endless sea of sand. This was where everything vanished.",
						"japanese": "果てしなく広がる砂の海。ここはすべてが消え去る場所だった。",
						"chinese": "一望无际的沙海。这里是万物消逝之地。",
						"french": "Une mer de sable infinie. C'est là que tout disparaissait.",
						"spanish": "Un mar de arena sin fin. Aquí era donde todo desaparecía.",
						"vietnamese": "Biển cát vô tận. Đây là nơi mọi thứ biến mất.",
						"thai": "ทะเลทรายอันกว้างใหญ่ไร้ที่สิ้นสุด ที่นี่คือที่ที่ทุกสิ่งหายไป",
						"hindi": "रेत का एक अंतहीन सागर। यह वह जगह थी जहाँ सब कुछ गायब हो जाता था।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "숨 막히는 황량함이네.",
						"english": "Such breathtaking desolation.",
						"japanese": "息をのむような荒涼感だ。",
						"chinese": "真是令人窒息的荒凉。",
						"french": "Une désolation à couper le souffle.",
						"spanish": "Qué desolación tan asombrosa.",
						"vietnamese": "Sự hoang tàn đến nghẹt thở.",
						"thai": "ช่างเป็นความเวิ้งว้างที่น่าตกใจ",
						"hindi": "कितनी विस्मयकारी वीरानी है।"
					}
				},
				{
					"spot": [
						5,
						3
					],
					"action": "enter",
					"speaker": "amir",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "amir",
					"emotion": "sad",
					"content": {
						"korean": "도망쳐요… 이 사막은… 살아있어.",
						"english": "Run... This desert... it's alive.",
						"japanese": "逃げて… この砂漠は… 生きている。",
						"chinese": "快跑… 这片沙漠… 它还活着。",
						"french": "Fuyez… Ce désert… il est vivant.",
						"spanish": "Corran... Este desierto... está vivo.",
						"vietnamese": "Chạy đi... Sa mạc này... nó đang sống.",
						"thai": "หนีไป... ทะเลทรายนี้... มันมีชีวิต",
						"hindi": "भागो... यह रेगिस्तान... यह ज़िंदा है।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "누구야?",
						"english": "Who's there?",
						"japanese": "誰だ？",
						"chinese": "谁？",
						"french": "Qui est là ?",
						"spanish": "¿Quién está ahí?",
						"vietnamese": "Ai đó?",
						"thai": "ใครน่ะ?",
						"hindi": "कौन है?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "아미르… 오랫동안… 이곳을 헤맸어요.",
						"english": "Amir... I've been... wandering here... for a long time.",
						"japanese": "アミール… ずっと… ここをさまよっていました。",
						"chinese": "阿米尔……我在这里……徘徊了很久。",
						"french": "Amir… J'ai… erré ici… pendant longtemps.",
						"spanish": "Amir... He estado... vagando aquí... por mucho tiempo.",
						"vietnamese": "Amir... Tôi đã... lang thang ở đây... rất lâu rồi.",
						"thai": "อามีร์... ฉัน... พเนจรอยู่ที่นี่... มานานแล้ว",
						"hindi": "अमीर... मैं... यहाँ भटक रहा हूँ... बहुत देर से।"
					},
					"emotion": "sad",
					"speaker": "amir",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "amir",
					"action": "enter",
					"spot": [
						5,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "amir",
					"content": {
						"korean": "모래… 움직여요. 특정 문양을… 피해야 해.",
						"english": "The sand... it moves. We have to... avoid certain patterns.",
						"japanese": "砂が… 動いている。特定の模様を… 避けなければ。",
						"chinese": "沙子……它在移动。我们必须……避开特定的图案。",
						"french": "Le sable… il bouge. Nous devons… éviter certains motifs.",
						"spanish": "La arena... se mueve. Tenemos que... evitar ciertos patrones.",
						"vietnamese": "Cát... nó đang di chuyển. Chúng ta phải... tránh những hoa văn nhất định.",
						"thai": "ทราย... มันเคลื่อนไหว เราต้อง... หลีกเลี่ยงรูปแบบบางอย่าง",
						"hindi": "रेत... हिल रही है। हमें... कुछ पैटर्न से बचना होगा।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "문양이라니? 무슨 소리야?",
						"english": "Patterns? What are you talking about?",
						"japanese": "模様だと？ 何のことだ？",
						"chinese": "图案？你在说什么？",
						"french": "Des motifs ? De quoi parles-tu ?",
						"spanish": "¿Patrones? ¿De qué estás hablando?",
						"vietnamese": "Hoa văn ư? Anh đang nói gì vậy?",
						"thai": "รูปแบบ? คุณกำลังพูดถึงอะไร?",
						"hindi": "पैटर्न? तुम किस बारे में बात कर रहे हो?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "모래 위에 새겨진 희미한 문양이 마치 살아있는 것처럼 일렁였다.",
						"english": "Faint patterns etched on the sand shimmered as if alive.",
						"japanese": "砂に刻まれたかすかな文様が、まるで生きているかのように揺らめいた。",
						"chinese": "沙上刻画的微弱图案，仿佛有生命般闪烁。",
						"french": "De faibles motifs gravés sur le sable scintillaient comme s'ils étaient vivants.",
						"spanish": "Débiles patrones grabados en la arena brillaban como si estuvieran vivos.",
						"vietnamese": "Những hoa văn mờ nhạt khắc trên cát lung linh như thể sống động.",
						"thai": "ลวดลายจางๆ ที่แกะสลักบนผืนทรายระยิบระยับราวกับมีชีวิต",
						"hindi": "रेत पर उकेरे गए धुंधले पैटर्न ऐसे चमक रहे थे मानो जीवित हों。"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "착각인가? 모래가 움직이는 것 같아.",
						"english": "An illusion? The sand seems to be moving.",
						"japanese": "錯覚か？砂が動いているようだ。",
						"chinese": "是错觉吗？沙子好像在动。",
						"french": "Une illusion ? Le sable semble bouger.",
						"spanish": "¿Una ilusión? La arena parece moverse.",
						"vietnamese": "Ảo giác sao? Cát dường như đang di chuyển.",
						"thai": "ภาพลวงตาหรือเปล่า? ทรายดูเหมือนจะเคลื่อนไหว",
						"hindi": "क्या यह भ्रम है? रेत हिलती हुई लग रही है।"
					},
					"emotion": "base",
					"speaker": "character_1",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "amir",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						5,
						3
					]
				},
				{
					"speaker": "amir",
					"type": "speech",
					"content": {
						"korean": "이곳에선… 모든 것이 사라져요. 흔적도… 기억도.",
						"english": "Here... everything vanishes. Traces... and memories too.",
						"japanese": "ここでは…全てが消え去る。痕跡も…記憶も。",
						"chinese": "在这里…一切都会消失。痕迹…和记忆。",
						"french": "Ici... tout disparaît. Les traces... et les souvenirs aussi.",
						"spanish": "Aquí... todo se desvanece. Las huellas... y los recuerdos también.",
						"vietnamese": "Ở đây... mọi thứ đều biến mất. Dấu vết... và cả ký ức nữa.",
						"thai": "ที่นี่... ทุกสิ่งหายไป ร่องรอย... และความทรงจำด้วย",
						"hindi": "यहां... सब कुछ गायब हो जाता है। निशान... और यादें भी।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "발자국이… 지워졌어.",
						"english": "The footprints... have been erased.",
						"japanese": "足跡が…消えている。",
						"chinese": "脚印…消失了。",
						"french": "Les empreintes de pas... ont été effacées.",
						"spanish": "Las huellas... han sido borradas.",
						"vietnamese": "Dấu chân... đã bị xóa mờ.",
						"thai": "รอยเท้า... ถูกลบไปแล้ว",
						"hindi": "पैरों के निशान... मिट गए हैं।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "내가… 이 길을 전에 왔던가?",
						"english": "Have I... walked this path before?",
						"japanese": "私…この道を以前通っただろうか？",
						"chinese": "我…以前来过这条路吗？",
						"french": "Ai-je... déjà emprunté ce chemin ?",
						"spanish": "¿He... recorrido este camino antes?",
						"vietnamese": "Tôi... đã từng đi con đường này trước đây chưa?",
						"thai": "ฉัน... เคยมาเส้นทางนี้มาก่อนหรือเปล่า?",
						"hindi": "क्या मैं... पहले इस रास्ते से गया था?"
					},
					"type": "speech",
					"speaker": "character_2"
				},
				{
					"content": {
						"korean": "기이한 환각이 시야를 흐렸다. 익숙하면서도 낯선 잔상이 스쳐 지나갔다.",
						"english": "Strange illusions blurred my vision. Familiar yet unfamiliar afterimages flashed by.",
						"japanese": "奇妙な幻覚が視界を曇らせた。見慣れているようでいて、見慣れない残像が脳裏をよぎった。",
						"chinese": "奇异的幻觉模糊了视线。熟悉而又陌生的残影一闪而过。",
						"french": "D'étranges illusions brouillaient ma vision. Des images rémanentes familières et pourtant étrangères défilaient.",
						"spanish": "Extrañas ilusiones nublaron mi visión. Imágenes residuales familiares y a la vez extrañas pasaron fugazmente.",
						"vietnamese": "Những ảo ảnh kỳ lạ làm mờ tầm nhìn. Dư ảnh quen thuộc mà xa lạ lướt qua.",
						"thai": "ภาพหลอนประหลาดทำให้การมองเห็นพร่ามัว ภาพติดตาที่คุ้นเคยแต่ก็แปลกหน้าแวบผ่านไป",
						"hindi": "अजीब भ्रम ने मेरी दृष्टि धुंधला दी। परिचित फिर भी अपरिचित छवियां चमक उठीं।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "amir",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						5,
						3
					]
				},
				{
					"content": {
						"korean": "더 깊이 가면… 돌아올 수 없어요.",
						"english": "Go deeper... and you won't be able to return.",
						"japanese": "これ以上深みに進めば…戻れなくなる。",
						"chinese": "如果再深入…就回不来了。",
						"french": "Allez plus loin... et vous ne pourrez plus revenir.",
						"spanish": "Ve más profundo... y no podrás regresar.",
						"vietnamese": "Đi sâu hơn nữa... và bạn sẽ không thể quay lại.",
						"thai": "ถ้าไปลึกกว่านี้... จะกลับมาไม่ได้นะ",
						"hindi": "और गहरे जाओगे... तो वापस नहीं आ पाओगे।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "amir"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "멈출 수 없어. 진실을 봐야 해.",
						"english": "Can't stop now. I must see the truth.",
						"japanese": "止められない。真実を見なければ。",
						"chinese": "停不下来。我必须看到真相。",
						"french": "Je ne peux pas m'arrêter. Je dois voir la vérité.",
						"spanish": "No puedo parar. Debo ver la verdad.",
						"vietnamese": "Không thể dừng lại. Tôi phải nhìn thấy sự thật.",
						"thai": "หยุดไม่ได้แล้ว ต้องเห็นความจริง",
						"hindi": "रुक नहीं सकता। मुझे सच देखना होगा।"
					},
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "모래 폭풍이 탐험대를 에워쌌다. 거대한 존재가 깨어나는 듯한 위압감.",
						"english": "A sandstorm enveloped the expedition. An overwhelming pressure, as if a colossal entity was awakening.",
						"japanese": "砂嵐が探検隊を包み込んだ。巨大な存在が目覚めるかのような威圧感。",
						"chinese": "沙尘暴包围了探险队。仿佛有巨大的存在正在苏醒，带来了压迫感。",
						"french": "Une tempête de sable enveloppa l'expédition. Une pression écrasante, comme si une entité colossale s'éveillait.",
						"spanish": "Una tormenta de arena envolvió a la expedición. Una presión abrumadora, como si una entidad colosal estuviera despertando.",
						"vietnamese": "Một cơn bão cát bao trùm đoàn thám hiểm. Một áp lực choáng ngợp, như thể một thực thể khổng lồ đang thức tỉnh.",
						"thai": "พายุทรายโอบล้อมคณะสำรวจ ความกดดันอันยิ่งใหญ่ราวกับมีสิ่งมีชีวิตขนาดยักษ์กำลังตื่นขึ้น",
						"hindi": "एक रेतीला तूफान ने अभियान दल को घेर लिया। एक विशालकाय सत्ता के जागृत होने जैसी जबरदस्त दबाव।"
					},
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "거대한 모래 그림자가 흩어졌다. 잠시 동안의 정적.",
						"english": "The colossal sand shadow dispersed. A momentary silence.",
						"japanese": "「巨大な砂の影が散った。しばしの静寂。」",
						"chinese": "“巨大的沙影消散了。短暂的寂静。”",
						"french": "L'immense ombre de sable s'est dissipée. Un silence momentané.",
						"spanish": "La colosal sombra de arena se dispersó. Un silencio momentáneo.",
						"vietnamese": "Bóng cát khổng lồ tan biến. Một khoảnh khắc tĩnh lặng.",
						"thai": "เงาทรายมหึมาสลายไปแล้ว ความเงียบงันชั่วขณะ",
						"hindi": "विशाल रेत की छाया बिखर गई। एक क्षण की शांति।"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…겨우 한 고비를 넘겼을 뿐. 영원히 반복될 것이다.",
						"english": "…We've only overcome one hurdle. It will repeat eternally.",
						"japanese": "「…たった一つの難関を越えたに過ぎない。永遠に繰り返されるだろう。」",
						"chinese": "“…这只是越过了一个难关。它将永远重复。”",
						"french": "…Nous n'avons fait que franchir un obstacle. Cela se répétera éternellement.",
						"spanish": "…Solo hemos superado un obstáculo. Se repetirá eternamente.",
						"vietnamese": "…Chỉ vừa vượt qua một chướng ngại. Nó sẽ lặp lại vĩnh viễn.",
						"thai": "...เราเพิ่งผ่านพ้นอุปสรรคเดียวเท่านั้น มันจะวนซ้ำไปตลอดกาล",
						"hindi": "…हमने बस एक बाधा पार की है। यह हमेशा के लिए दोहराई जाएगी।"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "무슨 소리야? 반복된다고?",
						"english": "What do you mean? Repeat?",
						"japanese": "「どういうことだ？繰り返されるって？」",
						"chinese": "“什么意思？重复？”",
						"french": "Que voulez-vous dire ? Répéter ?",
						"spanish": "¿Qué dices? ¿Repetirse?",
						"vietnamese": "Ý gì vậy? Lặp lại sao?",
						"thai": "หมายความว่าไง? ซ้ำรอยเหรอ?",
						"hindi": "क्या मतलब? दोहराया जाएगा?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "승리했지만 찜찜한 예감이 남았다. 사막은 여전히 모든 것을 감추고 있었다.",
						"english": "Victory was ours, but a lingering unease remained. The desert still concealed everything.",
						"japanese": "「勝利したが、後味の悪い予感が残った。砂漠は依然としてすべてを隠していた。」",
						"chinese": "“虽得胜利，却仍有不安的预感。沙漠依旧隐藏着一切。”",
						"french": "La victoire était nôtre, mais un pressentiment troublant persistait. Le désert cachait toujours tout.",
						"spanish": "La victoria fue nuestra, pero una inquietante premonición permaneció. El desierto aún lo ocultaba todo.",
						"vietnamese": "Chiến thắng đã đến, nhưng một dự cảm khó chịu vẫn còn. Sa mạc vẫn che giấu mọi thứ.",
						"thai": "ชัยชนะเป็นของเรา แต่ความรู้สึกไม่สบายใจยังคงอยู่ ทะเลทรายยังคงซ่อนทุกสิ่งไว้",
						"hindi": "जीत हमारी थी, लेकिन एक असहज पूर्वज्ञान बना रहा। रेगिस्तान अभी भी सब कुछ छिपा रहा था।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "탐험대는 사라지는 흔적을 따라 다음 목적지로 향한다.",
						"english": "The expedition team followed the fading tracks to their next destination.",
						"japanese": "「探検隊は消えゆく痕跡を追い、次の目的地へと向かう。」",
						"chinese": "“探险队循着渐渐消失的痕迹，前往下一个目的地。”",
						"french": "L'équipe d'expédition a suivi les traces s'estompant vers leur prochaine destination.",
						"spanish": "El equipo de expedición siguió las huellas que se desvanecían hacia su próximo destino.",
						"vietnamese": "Đội thám hiểm theo dấu vết mờ nhạt tiến đến điểm đến tiếp theo.",
						"thai": "ทีมสำรวจติดตามรอยเท้าที่เลือนหายไปยังจุดหมายต่อไป",
						"hindi": "अभियान दल लुप्त होते निशानों का पीछा करते हुए अपने अगले गंतव्य की ओर बढ़ा।"
					},
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "거대한 모래 그림자가 서서히 형체를 드러냈다.",
						"english": "A colossal sand shadow slowly revealed its form.",
						"japanese": "巨大な砂の影が、ゆっくりとその姿を現した。",
						"chinese": "巨大的沙影缓缓显露出了它的形态。",
						"french": "Une ombre de sable colossale révéla lentement sa forme.",
						"spanish": "Una colosal sombra de arena reveló lentamente su forma.",
						"vietnamese": "Một bóng cát khổng lồ từ từ hiện hình.",
						"thai": "เงาทรายขนาดยักษ์ค่อยๆ เผยรูปร่างออกมา",
						"hindi": "एक विशालकाय रेत की छाया धीरे-धीरे अपना रूप प्रकट कर रही थी।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 자들. 너희도 결국… 모래가 될 뿐.",
						"english": "Fools. You too shall become… mere sand.",
						"japanese": "「愚か者たちめ。お前たちも結局…砂となるだけだ。」",
						"chinese": "“愚蠢的家伙。你们终将…化为尘沙。”",
						"french": "Fous. Vous aussi finirez… en poussière.",
						"spanish": "Necios. Vosotros también acabaréis… siendo arena.",
						"vietnamese": "Lũ ngu ngốc. Các ngươi rồi cũng sẽ… hóa thành cát bụi mà thôi.",
						"thai": "เจ้าพวกโง่เขลา เจ้าเองก็จะต้อง...กลายเป็นเพียงทรายในท้ายที่สุด",
						"hindi": "मूर्ख। तुम भी अंततः… रेत में मिल जाओगे。"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "누가 모래가 될지는 붙어봐야 알겠지.",
						"english": "We'll see who becomes sand once we fight.",
						"japanese": "「誰が砂になるかは、戦ってみればわかる。」",
						"chinese": "“谁会化为尘沙，一战便知。”",
						"french": "Nous verrons qui finira en poussière après le combat.",
						"spanish": "Veremos quién acaba siendo arena cuando luchemos.",
						"vietnamese": "Ai sẽ hóa thành cát, phải chiến đấu mới biết.",
						"thai": "ใครจะกลายเป็นทราย ต้องสู้กันดูก่อน",
						"hindi": "कौन रेत बनेगा, यह तो लड़ने के बाद ही पता चलेगा।"
					},
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "거대한 모래 폭풍이 모든 것을 집어삼켰다.",
						"english": "A colossal sandstorm engulfed everything.",
						"japanese": "「巨大な砂嵐がすべてを飲み込んだ。」",
						"chinese": "“一场巨大的沙尘暴吞噬了一切。”",
						"french": "Une tempête de sable colossale a tout englouti.",
						"spanish": "Una tormenta de arena colosal lo engulló todo.",
						"vietnamese": "Một cơn bão cát khổng lồ nuốt chửng mọi thứ.",
						"thai": "พายุทรายมหึมากลืนกินทุกสิ่ง",
						"hindi": "एक विशाल रेत के तूफान ने सब कुछ निगल लिया।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "네 발버둥도… 결국 모래 속으로.",
						"english": "Your struggles too… will ultimately vanish into the sand.",
						"japanese": "「お前のあがきも…結局は砂の中へ。」",
						"chinese": "“你的挣扎…终将归于沙中。”",
						"french": "Tes luttes aussi… finiront par disparaître dans le sable.",
						"spanish": "Tus esfuerzos también… se desvanecerán en la arena.",
						"vietnamese": "Sự vùng vẫy của ngươi cũng… cuối cùng sẽ chìm vào cát.",
						"thai": "ความดิ้นรนของเจ้าก็เช่นกัน...ท้ายที่สุดก็จะจมลงสู่ผืนทราย",
						"hindi": "तुम्हारी कोशिशें भी… अंततः रेत में मिल जाएंगी।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "아직… 끝나지 않았어.",
						"english": "It's not… over yet.",
						"japanese": "「まだ…終わってない。」",
						"chinese": "“还…没结束。”",
						"french": "Ce n'est pas… encore fini.",
						"spanish": "Aún no… ha terminado.",
						"vietnamese": "Chưa… kết thúc đâu.",
						"thai": "ยัง…ไม่จบหรอก",
						"hindi": "अभी… खत्म नहीं हुआ है।"
					},
					"emotion": "angry"
				}
			]
		}
	]
} as const;
