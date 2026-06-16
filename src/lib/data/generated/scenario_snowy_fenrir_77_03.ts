export const scenario_snowy_fenrir_77_03 = {
	"scenario_id": "snowy_fenrir_77_03",
	"order": 3,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"glace": {
			"id": "mon_d0b542b9-aea9-405d-8ee2-4936516a041a",
			"name": {
				"korean": "글라세",
				"english": "Glace",
				"japanese": "グラース",
				"chinese": "格拉斯",
				"french": "Glace",
				"spanish": "Glace",
				"vietnamese": "Gla-xê",
				"thai": "กลาซ",
				"hindi": "ग्लेस"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/81de374f-3422-482e-01ee-dc973da70500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/ef269701-044a-42c5-f7b7-760e9c92a500/public"
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
					"content": {
						"korean": "늑대 주위의 설원이 생기를 잃고 잿빛으로 메말라갔다.",
						"english": "The snowfield around the wolf lost its vitality, withering into ash-grey.",
						"japanese": "狼の周りの雪原は生気を失い、灰色の乾ききった。",
						"chinese": "狼周围的雪原失去了生机，枯萎成灰白色。",
						"french": "L'étendue enneigée autour du loup perdit sa vitalité, se desséchant en un gris cendré.",
						"spanish": "El campo de nieve alrededor del lobo perdió su vitalidad, marchitándose a un gris ceniza.",
						"vietnamese": "Cánh đồng tuyết quanh con sói mất đi sức sống, héo úa thành màu tro tàn.",
						"thai": "ทุ่งหิมะรอบตัวหมาป่าสูญเสียชีวิตชีวา เหี่ยวแห้งเป็นสีเทา.",
						"hindi": "भेड़िये के चारों ओर का बर्फ़ीला मैदान अपनी जान खोकर राख जैसा धूसर और सूख गया।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "여긴… 너무 조용해.",
						"english": "It's... too quiet here.",
						"japanese": "ここは…あまりにも静かだ。",
						"chinese": "这里… 太安静了。",
						"french": "C'est... trop silencieux ici.",
						"spanish": "Aquí está... demasiado silencioso.",
						"vietnamese": "Nơi này… quá yên tĩnh.",
						"thai": "ที่นี่...เงียบเกินไป.",
						"hindi": "यहाँ… बहुत शांति है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"speaker": "glace",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "glace",
					"content": {
						"korean": "텅 비어가는 곳은 언제나 고요하죠.",
						"english": "Places that empty out are always quiet.",
						"japanese": "空っぽになっていく場所はいつも静かですね。",
						"chinese": "空虚之处，总是寂静。",
						"french": "Les lieux qui se vident sont toujours silencieux.",
						"spanish": "Los lugares que se vacían siempre están en silencio.",
						"vietnamese": "Nơi dần trống rỗng thì luôn tĩnh lặng.",
						"thai": "สถานที่ที่ว่างเปล่ามักจะเงียบสงบเสมอ.",
						"hindi": "जो जगहें खाली हो जाती हैं, वे हमेशा शांत होती हैं।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "glace",
					"content": {
						"korean": "끝은 늘 그렇게 옵니다.",
						"english": "The end always comes that way.",
						"japanese": "終わりはいつもそうやって来るのです。",
						"chinese": "结局总是如此降临。",
						"french": "La fin arrive toujours ainsi.",
						"spanish": "El final siempre llega así.",
						"vietnamese": "Kết thúc luôn đến như vậy.",
						"thai": "จุดจบมักจะมาในลักษณะนั้นเสมอ.",
						"hindi": "अंत हमेशा ऐसे ही आता है।"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "glace"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "glace",
					"content": {
						"korean": "저 바람을 보세요.",
						"english": "Look at that wind.",
						"japanese": "あの風を見てください。",
						"chinese": "看那风。",
						"french": "Regardez ce vent.",
						"spanish": "Mira ese viento.",
						"vietnamese": "Hãy nhìn cơn gió đó.",
						"thai": "ดูลมนั้นสิ.",
						"hindi": "उस हवा को देखो।"
					}
				},
				{
					"speaker": "glace",
					"content": {
						"korean": "오직 한 방향으로만 불고 있죠.",
						"english": "It's blowing in only one direction.",
						"japanese": "一方向へとしか吹いていません。",
						"chinese": "它只吹向一个方向。",
						"french": "Il ne souffle que dans une seule direction.",
						"spanish": "Sopla en una sola dirección.",
						"vietnamese": "Nó chỉ thổi về một hướng.",
						"thai": "มันพัดไปในทิศทางเดียวเท่านั้น.",
						"hindi": "यह केवल एक ही दिशा में बह रही है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…그러네. 그 너머는 죽은 듯 고요하고.",
						"english": "...Right. Beyond that, it's deathly still.",
						"japanese": "…そうね。その先は死んだように静かで。",
						"chinese": "…确实。beyond 一片死寂。",
						"french": "...Oui. Au-delà, c'est un silence de mort.",
						"spanish": "...Cierto. Más allá, el silencio es sepulcral.",
						"vietnamese": "...Phải. Nơi đó im ắng như chết.",
						"thai": "...นั่นสินะ. ที่นั่นเงียบสงัดราวกับความตาย.",
						"hindi": "...हाँ, बिल्कुल। उस पार मौत जैसी खामोशी है."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "glace",
					"content": {
						"korean": "모든 게 한쪽으로 빨려 들어가요.",
						"english": "Everything is being pulled to one side.",
						"japanese": "すべてが一方向に吸い込まれていく。",
						"chinese": "一切都被吸向了一边。",
						"french": "Tout est aspiré vers un seul côté.",
						"spanish": "Todo está siendo absorbido hacia un lado.",
						"vietnamese": "Mọi thứ đang bị hút về một phía.",
						"thai": "ทุกสิ่งกำลังถูกดูดไปทางเดียว.",
						"hindi": "सब कुछ एक तरफ खींचा जा रहा है."
					}
				},
				{
					"speaker": "glace",
					"content": {
						"korean": "공허가… 세상으로 번지고 있습니다.",
						"english": "The void... is spreading across the world.",
						"japanese": "虚無が… 世界に広がりつつあります。",
						"chinese": "虚空… 正在蔓延至世界。",
						"french": "Le vide... se propage dans le monde.",
						"spanish": "El vacío... se está extendiendo por el mundo.",
						"vietnamese": "Sự trống rỗng... đang lan ra khắp thế giới.",
						"thai": "ความว่างเปล่า... กำลังแพร่กระจายไปทั่วโลก.",
						"hindi": "शून्यता... दुनिया में फैल रही है।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "번지고 있다고?",
						"english": "Spreading?",
						"japanese": "広がっていると？",
						"chinese": "正在蔓延？",
						"french": "Se propage ?",
						"spanish": "¿Se está extendiendo?",
						"vietnamese": "Lan ra ư?",
						"thai": "กำลังแพร่กระจายเหรอ?",
						"hindi": "फैल रहा है?"
					}
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
					"speaker": "glace"
				},
				{
					"speaker": "glace",
					"content": {
						"korean": "멈출 수 없는 흐름이죠.",
						"english": "It's an unstoppable flow.",
						"japanese": "止められない流れです。",
						"chinese": "这是无法阻挡的洪流。",
						"french": "C'est un flux imparable.",
						"spanish": "Es un flujo imparable.",
						"vietnamese": "Đây là một dòng chảy không thể ngăn cản.",
						"thai": "มันเป็นกระแสที่หยุดไม่ได้.",
						"hindi": "यह एक न रुकने वाला प्रवाह है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "glace",
					"content": {
						"korean": "이 설원뿐만이 아닙니다. 온기와 생명까지…",
						"english": "It's not just this snowfield. Even warmth and life...",
						"japanese": "この雪原だけではありません。温もりと生命まで…",
						"chinese": "不仅是这片雪原。连同温暖和生命…",
						"french": "Ce n'est pas seulement ce champ de neige. Même la chaleur et la vie...",
						"spanish": "No es solo este campo de nieve. Incluso el calor y la vida...",
						"vietnamese": "Không chỉ riêng cánh đồng tuyết này. Ngay cả hơi ấm và sự sống...",
						"thai": "ไม่ใช่แค่ทุ่งหิมะนี้เท่านั้น แม้แต่ความอบอุ่นและชีวิต...",
						"hindi": "यह सिर्फ यह बर्फीला मैदान नहीं है। यहाँ तक कि गर्माहट और जीवन भी..."
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "우리까지 빨려 들어간다고?",
						"english": "Are we being pulled in too?",
						"japanese": "私たちまで吸い込まれると？",
						"chinese": "我们也会被吸进去吗？",
						"french": "Nous aussi, on est aspirés ?",
						"spanish": "¿Nosotros también seremos absorbidos?",
						"vietnamese": "Chúng ta cũng bị cuốn vào sao?",
						"thai": "พวกเราก็จะถูกดูดเข้าไปด้วยเหรอ?",
						"hindi": "क्या हमें भी अंदर खींचा जा रहा है?"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "glace",
					"content": {
						"korean": "아주 천천히. 의식하지 못할 정도로.",
						"english": "Very slowly. Imperceptibly.",
						"japanese": "とてもゆっくりと。意識できないほどに。",
						"chinese": "非常缓慢。缓慢到无法察觉。",
						"french": "Très lentement. Imperceptiblement.",
						"spanish": "Muy lentamente. Imperceptiblemente.",
						"vietnamese": "Rất chậm rãi. Đến mức không thể nhận ra.",
						"thai": "ช้ามาก. จนแทบไม่รู้สึกตัว.",
						"hindi": "बहुत धीरे-धीरे। इतना कि पता भी न चले।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "glace",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "glace",
					"content": {
						"korean": "돌아갈 길은 없습니다.",
						"english": "There's no way back.",
						"japanese": "戻る道はありません。",
						"chinese": "没有回头路了。",
						"french": "Il n'y a pas de retour possible.",
						"spanish": "No hay vuelta atrás.",
						"vietnamese": "Không còn đường quay về.",
						"thai": "ไม่มีทางย้อนกลับแล้ว.",
						"hindi": "वापस जाने का कोई रास्ता नहीं है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "알고 있어.",
						"english": "I know.",
						"japanese": "分かってる。",
						"chinese": "我知道。",
						"french": "Je sais.",
						"spanish": "Lo sé.",
						"vietnamese": "Tôi biết.",
						"thai": "ฉันรู้.",
						"hindi": "मुझे पता है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "glace",
					"content": {
						"korean": "이 굶주림은 거대해지고 있어요.",
						"english": "This hunger grows vast.",
						"japanese": "この飢えは巨大化している。",
						"chinese": "这饥饿正变得巨大。",
						"french": "Cette faim grandit.",
						"spanish": "Esta hambre se hace inmensa.",
						"vietnamese": "Cơn đói này đang lớn dần.",
						"thai": "ความหิวนี้กำลังใหญ่ขึ้น.",
						"hindi": "यह भूख विकराल होती जा रही है।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "glace",
					"content": {
						"korean": "이제는 세상마저 집어삼키려 합니다.",
						"english": "Now it seeks to swallow even the world.",
						"japanese": "今や世界さえ飲み込もうとしている。",
						"chinese": "如今它甚至想吞噬世界。",
						"french": "Elle veut désormais dévorer le monde.",
						"spanish": "Ahora busca devorar incluso el mundo.",
						"vietnamese": "Giờ đây, nó muốn nuốt chửng cả thế giới.",
						"thai": "บัดนี้มันหมายจะกลืนกินแม้กระทั่งโลก.",
						"hindi": "अब यह संसार को भी निगलना चाहता है।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "절대 막아야 해.",
						"english": "It must be stopped.",
						"japanese": "絶対に止めなければ。",
						"chinese": "必须阻止它。",
						"french": "Il faut l'arrêter.",
						"spanish": "Hay que detenerlo.",
						"vietnamese": "Phải ngăn chặn nó.",
						"thai": "ต้องหยุดมันให้ได้.",
						"hindi": "इसे हर हाल में रोकना होगा।"
					},
					"emotion": "angry",
					"type": "speech"
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "발버둥 쳐봐야… 아무것도 달라지지 않아.",
						"english": "Struggling... changes nothing.",
						"japanese": "もがいても…何も変わらない。",
						"chinese": "挣扎也…一无所获。",
						"french": "T'agiter... ne changera rien.",
						"spanish": "Luchar... no cambia nada.",
						"vietnamese": "Dù có vùng vẫy... cũng chẳng thay đổi được gì.",
						"thai": "ดิ้นรนไปก็เท่านั้น… ไม่มีอะไรเปลี่ยนไป",
						"hindi": "चाहे कितनी भी कोशिश करो… कुछ नहीं बदलेगा।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "아직 끝나지 않았어!",
						"english": "It's not over yet!",
						"japanese": "まだ終わってない！",
						"chinese": "还没结束！",
						"french": "Ce n'est pas encore fini !",
						"spanish": "¡Aún no ha terminado!",
						"vietnamese": "Vẫn chưa kết thúc!",
						"thai": "ยังไม่จบ!",
						"hindi": "अभी खत्म नहीं हुआ है!"
					},
					"emotion": "angry",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "굶주린 그림자가 나타났다. 온기를 빨아들이는 존재였다.",
						"english": "A hungry shadow appeared, a being that drained warmth.",
						"japanese": "飢えた影が現れた。温もりを吸い取る存在だった。",
						"chinese": "一个饥饿的影子出现了，一个吸取温暖的存在。",
						"french": "Une ombre affamée est apparue, une entité qui aspirait la chaleur.",
						"spanish": "Una sombra hambrienta apareció, un ser que absorbía el calor.",
						"vietnamese": "Một bóng tối đói khát xuất hiện, một thực thể hút cạn hơi ấm.",
						"thai": "เงาหิวโหยปรากฏขึ้น มันคือสิ่งที่ดูดกลืนความอบอุ่น.",
						"hindi": "एक भूखी छाया प्रकट हुई, एक ऐसा अस्तित्व जो उष्णता सोखता था।"
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "…또 먹이가 왔군.",
						"english": "...Another meal has arrived.",
						"japanese": "…また餌が来たか。",
						"chinese": "……又来一个猎物。",
						"french": "...Une autre proie est arrivée.",
						"spanish": "...Ha llegado otra presa.",
						"vietnamese": "...Lại có kẻ đến làm mồi rồi.",
						"thai": "...เหยื่อรายใหม่มาแล้ว.",
						"hindi": "...एक और शिकार आ गया।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "더 이상 번지게 두지 않아!",
						"english": "I won't let it spread further!",
						"japanese": "これ以上、広げさせない！",
						"chinese": "我不会让它再蔓延了！",
						"french": "Je ne le laisserai pas s'étendre davantage !",
						"spanish": "¡No permitiré que se extienda más!",
						"vietnamese": "Không để nó lan rộng thêm nữa!",
						"thai": "ไม่ยอมให้มันแพร่กระจายไปมากกว่านี้แล้ว!",
						"hindi": "इसे अब और फैलने नहीं दूँगा!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "이 모든 것은 끝없이 흐를 뿐이다.",
						"english": "All this simply flows endlessly.",
						"japanese": "全てはただ、終わりなく流れるだけだ。",
						"chinese": "这所有的一切都只是无尽地流淌。",
						"french": "Tout cela ne fait que couler sans fin.",
						"spanish": "Todo esto simplemente fluye sin fin.",
						"vietnamese": "Tất cả điều này chỉ chảy trôi không ngừng.",
						"thai": "ทั้งหมดนี้เพียงแค่ไหลเวียนไม่สิ้นสุด.",
						"hindi": "यह सब अनन्त काल तक बहता रहेगा।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "…잠시 멈출 뿐. 모든 것은… 돌아온다.",
						"english": "...Only a momentary halt. All things... return.",
						"japanese": "…一時的に止まるだけだ。全ては…戻ってくる。",
						"chinese": "……仅仅是暂时停止。一切都……会回来。",
						"french": "...Juste une pause. Tout... reviendra.",
						"spanish": "...Solo una pausa. Todo... regresa.",
						"vietnamese": "...Chỉ tạm dừng thôi. Tất cả rồi... sẽ trở lại.",
						"thai": "...แค่หยุดชั่วคราวเท่านั้น. ทุกสิ่ง...จะกลับมา.",
						"hindi": "...बस कुछ पल का ठहराव। सब कुछ... लौट आएगा।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "헛소리 마!",
						"english": "Nonsense!",
						"japanese": "くだらない！",
						"chinese": "胡说八道！",
						"french": "Balivernes !",
						"spanish": "¡Tonterías!",
						"vietnamese": "Đừng nói nhảm!",
						"thai": "ไร้สาระน่า!",
						"hindi": "बकवास मत करो!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "glace"
				},
				{
					"speaker": "glace",
					"content": {
						"korean": "끝은 늘 그렇게 오는 법이죠.",
						"english": "The end always comes that way.",
						"japanese": "終わりはいつもそうやって来るものです。",
						"chinese": "结局总是这样到来。",
						"french": "La fin vient toujours ainsi.",
						"spanish": "El final siempre llega así.",
						"vietnamese": "Cái kết luôn đến như vậy.",
						"thai": "จุดจบมักจะมาถึงแบบนั้นเสมอ.",
						"hindi": "अंत हमेशा ऐसे ही आता है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "glace",
					"content": {
						"korean": "다음은 온기가 사라지는 곳입니다.",
						"english": "Next, warmth disappears.",
						"japanese": "次は温もりが消える場所です。",
						"chinese": "接下来是温暖消逝之地。",
						"french": "Ensuite, la chaleur disparaît.",
						"spanish": "Lo siguiente es donde la calidez se desvanece.",
						"vietnamese": "Tiếp theo là nơi hơi ấm tan biến.",
						"thai": "ที่ต่อไปคือที่ที่ความอบอุ่นเลือนหายไป",
						"hindi": "अगला स्थान है जहाँ गर्माहट मिट जाती है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "공허는 잠시 물러났지만, 굶주림은 여전히 남아있었다.",
						"english": "The void briefly retreated, but hunger lingered.",
						"japanese": "虚無は一時的に退いたが、飢えはまだ残っていた。",
						"chinese": "虚空暂时退去，但饥饿依然存在。",
						"french": "Le vide recula un instant, mais la faim demeurait.",
						"spanish": "El vacío retrocedió un momento, pero el hambre aún permanecía.",
						"vietnamese": "Hư không tạm thời lùi lại, nhưng cơn đói vẫn còn.",
						"thai": "ความว่างเปล่าถอยไปชั่วขณะ แต่ความหิวยังคงอยู่",
						"hindi": "शून्य क्षण भर के लिए पीछे हट गया, लेकिन भूख अभी भी बाकी थी।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"눈이 잿빛으로 물들었다.",
			"바람조차 한 방향으로만 불었다.",
			"모든 것이 굶주린 늑대를 향해 끌려갔다.",
			"공허는… 이미 세상 밖으로 번지고 있었다."
		],
		"english": [
			"The snow turned ash-grey.",
			"Even the wind blew in only one direction.",
			"Everything was drawn towards the hungry wolf.",
			"The void... was already spreading beyond the world."
		],
		"japanese": [
			"雪は灰色の染まった。",
			"風さえも一方向へと吹いた。",
			"全てが飢えた狼へと引き寄せられた。",
			"虚無は…既に世界の果てへと広がっていた。"
		],
		"chinese": [
			"雪变成了灰白色。",
			"连风都只吹向一个方向。",
			"一切都被饥饿的狼所吸引。",
			"虚空… 已蔓延至世界之外。"
		],
		"french": [
			"La neige est devenue gris cendré.",
			"Même le vent ne soufflait que dans une seule direction.",
			"Tout était attiré vers le loup affamé.",
			"Le vide... s'étendait déjà hors du monde."
		],
		"spanish": [
			"La nieve se tiñó de gris ceniza.",
			"Incluso el viento soplaba en una sola dirección.",
			"Todo era arrastrado hacia el lobo hambriento.",
			"El vacío... ya se estaba extendiendo fuera del mundo."
		],
		"vietnamese": [
			"Tuyết nhuốm màu tro tàn.",
			"Ngay cả gió cũng chỉ thổi về một hướng.",
			"Mọi thứ đều bị kéo về phía con sói đói.",
			"Hư không… đã lan ra ngoài thế giới."
		],
		"thai": [
			"หิมะกลายเป็นสีเทา.",
			"แม้แต่ลมก็พัดไปในทิศทางเดียวเท่านั้น.",
			"ทุกสิ่งถูกดึงดูดเข้าหาหมาป่าที่หิวโหย.",
			"ความว่างเปล่า... กำลังแพร่กระจายออกไปนอกโลกแล้ว."
		],
		"hindi": [
			"बर्फ राख जैसी धूसर हो गई।",
			"हवा भी केवल एक ही दिशा में बह रही थी।",
			"सब कुछ भूखे भेड़िये की ओर खिंचा चला जा रहा था।",
			"शून्य… पहले ही दुनिया से बाहर फैल रहा था।"
		]
	}
} as const;
