export const scenario_modern_rohan_3_01 = {
	"scenario_id": "modern_rohan_3_01",
	"order": 1,
	"act": "intro",
	"theme": "modern",
	"actors": {
		"lin": {
			"id": "mon_d036a884-3dde-472c-9fe7-c4807643860f",
			"name": {
				"korean": "린",
				"english": "Lin",
				"japanese": "リン",
				"chinese": "琳",
				"french": "Lin",
				"spanish": "Lin",
				"vietnamese": "Lin",
				"thai": "ลิน",
				"hindi": "लिन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a095dd66-1857-4f44-68b0-2ece83006d00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/05b02694-f1ed-4e4c-b7ca-fb5b74a48900/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"잿빛 먼지가 가득한 도심 뒷골목.",
			"이상하게도, 이 거리는 늘 지나치게 깨끗했다.",
			"실종 사건의 유일한 단서는 — 정적 뿐.",
			"그리고 그 침묵 속, 한 남자가 거리를 쓸고 있었다."
		],
		"english": [
			"A downtown alley, thick with ash-gray dust.",
			"Strangely, this street was always too clean.",
			"The only clue to the disappearances — was silence.",
			"And in that silence, a man was sweeping the street."
		],
		"japanese": [
			"灰色の埃が舞う、ダウンタウンの裏路地。",
			"奇妙なことに、この通りはいつも綺麗すぎた。",
			"失踪事件の唯一の手がかりは — 静寂だけ。",
			"そしてその沈黙の中、一人の男が通りを掃いていた。"
		],
		"chinese": [
			"灰尘弥漫的都市后巷。",
			"奇怪的是，这条街总是异常干净。",
			"失踪案唯一的线索——只有寂静。",
			"在那寂静中，一个男人正在清扫街道。"
		],
		"french": [
			"Une ruelle du centre-ville, pleine de poussière grise.",
			"Étrangement, cette rue était toujours trop propre.",
			"Le seul indice des disparitions — le silence.",
			"Et dans ce silence, un homme balayait la rue."
		],
		"spanish": [
			"Un callejón céntrico, lleno de polvo gris ceniza.",
			"Curiosamente, esta calle siempre estaba demasiado limpia.",
			"La única pista de las desapariciones — el silencio.",
			"Y en ese silencio, un hombre barría la calle."
		],
		"vietnamese": [
			"Một con hẻm trung tâm thành phố, phủ đầy bụi xám tro.",
			"Kỳ lạ thay, con phố này luôn quá sạch sẽ.",
			"Manh mối duy nhất của vụ mất tích — chỉ là sự tĩnh lặng.",
			"Và trong sự tĩnh lặng ấy, một người đàn ông đang quét đường."
		],
		"thai": [
			"ตรอกซอยกลางเมืองที่เต็มไปด้วยฝุ่นสีเทา",
			"แปลกที่ถนนนี้สะอาดเกินไปเสมอ",
			"เบาะแสเดียวของการหายตัวไป — มีเพียงความเงียบงัน",
			"และในความเงียบงันนั้น ชายคนหนึ่งกำลังกวาดถนน"
		],
		"hindi": [
			"एक शहरी गली, राख जैसी धूसर धूल से अटी।",
			"अजीब बात है, यह गली हमेशा बहुत साफ रहती थी।",
			"गायब होने का एकमात्र सुराग — सिर्फ खामोशी थी।",
			"और उस खामोशी में, एक आदमी गली साफ कर रहा था।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "거리는 잿빛 먼지로 뒤덮여 있었다. 동시에, 기이할 정도로 정돈되어 있었다.",
						"english": "The street was covered in ash-gray dust. Yet, it was eerily tidy.",
						"japanese": "通りは灰色の埃に覆われていた。同時に、奇妙なほど整頓されていた。",
						"chinese": "街道上覆盖着灰色的尘土。同时，又奇怪地整洁。",
						"french": "La rue était couverte de poussière grise. Pourtant, elle était étrangement ordonnée.",
						"spanish": "La calle estaba cubierta de polvo gris ceniza. Sin embargo, estaba extrañamente ordenada.",
						"vietnamese": "Con phố phủ đầy bụi xám tro. Đồng thời, nó được sắp xếp gọn gàng một cách kỳ lạ.",
						"thai": "ถนนถูกปกคลุมไปด้วยฝุ่นสีเทา และในขณะเดียวกันก็จัดเป็นระเบียบอย่างประหลาด",
						"hindi": "गली राख जैसी धूसर धूल से ढकी थी। फिर भी, वह अजीब तरह से साफ-सुथरी थी।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "lin",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"content": {
						"korean": "…여기가 실종 현장인가. 이상하네. 너무 깨끗해서.",
						"english": "...Is this the disappearance site? Strange. It's too clean.",
						"japanese": "…ここが失踪現場か。変だな。あまりにも綺麗すぎて。",
						"chinese": "……这里是失踪现场吗？奇怪。太干净了。",
						"french": "...C'est le lieu de la disparition ? Bizarre. C'est trop propre.",
						"spanish": "¿...Es este el lugar de la desaparición? Qué extraño. Está demasiado limpio.",
						"vietnamese": "...Đây là hiện trường vụ mất tích sao? Lạ thật. Sạch quá.",
						"thai": "...นี่คือสถานที่เกิดเหตุการณ์หายตัวไปเหรอ? แปลกจัง สะอาดเกินไปหน่อย",
						"hindi": "...क्या यह गुमशुदगी की जगह है? अजीब है। यह बहुत साफ है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "lin"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "그때, 한 노인이 나타났다. Ash No.7. 환경미화원이다.",
						"english": "Then, an old man appeared. Ash No.7. A sanitation worker.",
						"japanese": "その時、一人の老人が現れた。アッシュNo.7。清掃員だ。",
						"chinese": "这时，一位老人出现了。灰烬7号。他是一名环卫工人。",
						"french": "Alors, un vieil homme apparut. Ash n°7. Un agent d'entretien.",
						"spanish": "Entonces, apareció un anciano. Ash No.7. Un barrendero.",
						"vietnamese": "Sau đó, một ông lão xuất hiện. Ash số 7. Một nhân viên vệ sinh.",
						"thai": "ทันใดนั้น ชายชราคนหนึ่งก็ปรากฏตัว เขาคือ Ash No.7 เป็นพนักงานทำความสะอาด",
						"hindi": "फिर, एक बूढ़ा आदमी प्रकट हुआ। ऐश नंबर 7। एक स्वच्छता कर्मचारी।"
					},
					"type": "speech"
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "저 사람, 매일 저렇게 거리를 쓸고 있대.",
						"english": "They say he sweeps the street like that every day.",
						"japanese": "あの人、毎日ああやって通りを掃いているらしい。",
						"chinese": "据说那个人每天都那样清扫街道。",
						"french": "On dit qu'il balaie la rue comme ça tous les jours.",
						"spanish": "Dicen que barre la calle así todos los días.",
						"vietnamese": "Họ nói ông ấy quét đường như thế mỗi ngày.",
						"thai": "เขาว่ากันว่าชายคนนั้นกวาดถนนแบบนั้นทุกวัน",
						"hindi": "कहते हैं, वह आदमी हर दिन ऐसे ही गली साफ करता है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "누군데?",
						"english": "Who is it?",
						"japanese": "誰だ？",
						"chinese": "是谁？",
						"french": "Qui est-ce ?",
						"spanish": "¿Quién es?",
						"vietnamese": "Ai vậy?",
						"thai": "ใครน่ะ?",
						"hindi": "कौन है?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그냥 노인인 줄 알았는데… 뭔가 묘하게 부자연스러워.",
						"english": "I thought he was just an old man... but something feels subtly unnatural.",
						"japanese": "ただの老人だと思ったけど… 何か妙に不自然だ。",
						"chinese": "我还以为他只是个老人……但总觉得有些不自然。",
						"french": "Je pensais que c'était juste un vieil homme... mais quelque chose semble étrangement artificiel.",
						"spanish": "Pensé que era solo un anciano... pero algo se siente sutilmente antinatural.",
						"vietnamese": "Cứ tưởng là một ông lão bình thường... nhưng có gì đó hơi không tự nhiên.",
						"thai": "คิดว่าเป็นแค่ชายชราธรรมดา... แต่มีบางอย่างดูผิดธรรมชาติอย่างประหลาด",
						"hindi": "मुझे लगा वह सिर्फ एक बूढ़ा आदमी है... लेकिन कुछ अजीब तरह से अप्राकृतिक लग रहा है।"
					},
					"emotion": "base",
					"speaker": "lin"
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
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "lin"
				},
				{
					"type": "speech",
					"content": {
						"korean": "매일 같은 시간에, 같은 동작으로. 저 노인…",
						"english": "Every day, same time, same movements. That old man…",
						"japanese": "毎日同じ時間に、同じ動きで。あの老人…",
						"chinese": "每天都在同一时间，做着同样的动作。那个老人…",
						"french": "Chaque jour, à la même heure, les mêmes mouvements. Ce vieil homme…",
						"spanish": "Cada día, a la misma hora, con los mismos movimientos. Ese anciano…",
						"vietnamese": "Mỗi ngày, cùng một lúc, cùng một động tác. Ông già đó…",
						"thai": "ทุกวัน เวลาเดิม ท่าทางเดิม ชายแก่คนนั้น...",
						"hindi": "हर दिन एक ही समय पर, एक ही हरकत। वह बूढ़ा आदमी..."
					},
					"emotion": "base",
					"speaker": "lin"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "단순한 버릇 아냐?",
						"english": "Just a habit, isn't it?",
						"japanese": "ただの癖じゃない？",
						"chinese": "不就是个习惯吗？",
						"french": "Juste une habitude, non ?",
						"spanish": "¿No es solo un hábito?",
						"vietnamese": "Không chỉ là một thói quen sao?",
						"thai": "ไม่ใช่แค่พฤติกรรมธรรมดาเหรอ?",
						"hindi": "बस एक आदत, है ना?"
					}
				},
				{
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "글쎄… 뭔가 기계적이야. 너무 완벽해서 소름 돋아.",
						"english": "Well… it's mechanical. Too perfect, it's unsettling.",
						"japanese": "さあ…何か機械的だ。あまりにも完璧すぎて、鳥肌が立つ。",
						"chinese": "嗯…感觉像机器一样。太完美了，让人毛骨悚然。",
						"french": "Eh bien… c'est mécanique. Trop parfait, c'est troublant.",
						"spanish": "Bueno… es mecánico. Demasiado perfecto, me da escalofríos.",
						"vietnamese": "Chà… nó có gì đó máy móc. Hoàn hảo đến rợn người.",
						"thai": "อืม... มันดูเป็นเครื่องจักรมากเลย สมบูรณ์แบบเกินไปจนน่าขนลุก",
						"hindi": "खैर… यह मशीनी है। इतना सही कि रोंगटे खड़े हो जाते हैं।"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "lin"
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "실종자들의 흔적은 어디에도 없어. 마치 깨끗하게 지워진 것처럼.",
						"english": "No trace of the missing. As if wiped clean.",
						"japanese": "失踪者の痕跡はどこにもない。まるできれいに消されたかのように。",
						"chinese": "失踪者的踪迹无处可寻。仿佛被彻底抹去了。",
						"french": "Aucune trace des disparus. Comme s'ils avaient été effacés sans laisser de traces.",
						"spanish": "No hay rastro de los desaparecidos. Como si hubieran sido borrados por completo.",
						"vietnamese": "Không có dấu vết nào của những người mất tích. Cứ như thể đã bị xóa sạch.",
						"thai": "ไม่มีร่องรอยของผู้หายสาบสูญเลย เหมือนถูกลบไปจนหมดสิ้น",
						"hindi": "लापता लोगों का कोई निशान नहीं। जैसे सब कुछ मिटा दिया गया हो।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "Ash No.7 저 노인이랑 관련이 있을까?",
						"english": "Could Ash No.7 be connected to that old man?",
						"japanese": "Ash No.7、あの老人と関係があるのかな？",
						"chinese": "Ash No.7 和那个老人会有关系吗？",
						"french": "Ash No.7 pourrait-il être lié à ce vieil homme ?",
						"spanish": "¿Podría Ash No.7 estar relacionado con ese anciano?",
						"vietnamese": "Ash No.7 có liên quan gì đến ông già đó không?",
						"thai": "Ash No.7 เกี่ยวข้องกับชายแก่คนนั้นรึเปล่า?",
						"hindi": "क्या Ash No.7 उस बूढ़े आदमी से जुड़ा हो सकता है?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아니, 설마. 그냥 이상한 버릇이 있는 환경미화원일 뿐이겠지.",
						"english": "No, impossible. He's just a street sweeper with odd habits.",
						"japanese": "いや、まさか。ただの変な癖のある清掃員だろう。",
						"chinese": "不，不可能。他只是个有奇怪习惯的清洁工而已。",
						"french": "Non, pas possible. Il n'est qu'un balayeur avec des habitudes étranges.",
						"spanish": "No, imposible. Solo será un barrendero con hábitos extraños.",
						"vietnamese": "Không, không thể nào. Chắc chỉ là một nhân viên vệ sinh với thói quen kỳ lạ thôi.",
						"thai": "ไม่หรอก เป็นแค่คนทำความสะอาดที่มีนิสัยแปลกๆ เท่านั้นแหละ",
						"hindi": "नहीं, असंभव। वह बस अजीब आदतों वाला एक सफाईकर्मी होगा।"
					},
					"emotion": "base",
					"speaker": "lin"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…하지만 이 묘한 위화감은 뭘까.",
						"english": "…But what's this strange unease?",
						"japanese": "…でも、この奇妙な違和感は何だろう。",
						"chinese": "…但是这种莫名的违和感是怎么回事？",
						"french": "…Mais qu'est-ce que cette étrange sensation ?",
						"spanish": "…Pero, ¿qué es esta extraña sensación de incomodidad?",
						"vietnamese": "…Nhưng cái cảm giác bất an kỳ lạ này là gì?",
						"thai": "…แต่ความรู้สึกแปลกๆ นี้คืออะไรกันนะ",
						"hindi": "…लेकिन यह अजीब बेचैनी क्या है?"
					},
					"speaker": "lin"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						3
					],
					"speaker": "lin",
					"type": "direction"
				},
				{
					"content": {
						"korean": "이 거리의 침묵은… 너무 무거워.",
						"english": "The silence of this street… it's too heavy.",
						"japanese": "この通りの沈黙は…あまりにも重い。",
						"chinese": "这条街道的寂静…太沉重了。",
						"french": "Le silence de cette rue… il est trop lourd.",
						"spanish": "El silencio de esta calle… es demasiado pesado.",
						"vietnamese": "Sự im lặng của con phố này… quá nặng nề.",
						"thai": "ความเงียบของถนนสายนี้... มันหนักอึ้งเกินไป",
						"hindi": "इस सड़क की खामोशी… बहुत भारी है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "lin"
				},
				{
					"content": {
						"korean": "발자국 소리조차 들리지 않아.",
						"english": "Not even the sound of footsteps.",
						"japanese": "足音さえ聞こえない。",
						"chinese": "连脚步声都听不到。",
						"french": "Pas même le bruit de pas.",
						"spanish": "Ni siquiera se oye el sonido de pasos.",
						"vietnamese": "Ngay cả tiếng bước chân cũng không nghe thấy.",
						"thai": "ไม่ได้ยินแม้แต่เสียงฝีเท้า",
						"hindi": "पैरों की आहट भी नहीं सुनाई दे रही।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이 모든 '깨끗함'이… 오히려 단서일지도 몰라.",
						"english": "All this 'cleanliness'… it might actually be a clue.",
						"japanese": "この全ての「清潔さ」が…むしろ手がかりなのかもしれない。",
						"chinese": "所有这些‘干净’…也许反而是一个线索。",
						"french": "Toute cette 'propreté'… pourrait être un indice.",
						"spanish": "Toda esta 'limpieza'… podría ser una pista.",
						"vietnamese": "Tất cả sự 'sạch sẽ' này… có lẽ lại là một manh mối.",
						"thai": "ความ 'สะอาด' ทั้งหมดนี้... อาจจะเป็นเบาะแสก็ได้",
						"hindi": "यह सारी 'सफाई'… शायद एक सुराग हो।"
					},
					"type": "speech",
					"speaker": "lin"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "길의 끝. 잿빛 먼지 속에서 거대한 그림자가 일어섰다.",
						"english": "End of the path. A colossal shadow rose from the grey dust.",
						"japanese": "道の終わり。灰色の塵の中から巨大な影が立ち上がった。",
						"chinese": "路的尽头。灰尘中，一个巨大的身影站了起来。",
						"french": "Fin du chemin. Une ombre colossale s'éleva de la poussière grise.",
						"spanish": "Fin del camino. Una sombra colosal se levantó del polvo gris.",
						"vietnamese": "Cuối con đường. Một bóng đen khổng lồ trỗi dậy từ lớp bụi xám.",
						"thai": "สุดปลายทาง. เงาร่างมหึมาปรากฏขึ้นจากฝุ่นสีเทา.",
						"hindi": "रास्ते का अंत। धूसर धूल में से एक विशाल छाया उठ खड़ी हुई。"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…불순물.",
						"english": "...Impurity.",
						"japanese": "...不純物。",
						"chinese": "...杂质。",
						"french": "...Impureté.",
						"spanish": "...Impureza.",
						"vietnamese": "...Tạp chất.",
						"thai": "...สิ่งเจือปน.",
						"hindi": "...अशुद्धता。"
					},
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "모두 '청소'될 것이다.",
						"english": "All will be 'cleansed'.",
						"japanese": "全て「浄化」されるだろう。",
						"chinese": "一切都将被“清除”。",
						"french": "Tout sera «purifié».",
						"spanish": "Todo será 'limpiado'.",
						"vietnamese": "Tất cả sẽ bị 'thanh tẩy'.",
						"thai": "ทั้งหมดจะถูก 'ชำระล้าง'.",
						"hindi": "सब 'साफ' हो जाएगा。"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "이게… 실종의 진실인가?",
						"english": "Is this... the truth of the disappearances?",
						"japanese": "これが…失踪の真実なのか？",
						"chinese": "这…就是失踪的真相吗？",
						"french": "Est-ce là... la vérité des disparitions ?",
						"spanish": "¿Es esto... la verdad de las desapariciones?",
						"vietnamese": "Đây có phải... sự thật về những vụ mất tích?",
						"thai": "นี่คือ... ความจริงของการหายตัวไปงั้นหรือ?",
						"hindi": "क्या यह... गुमशुदगी का सच है?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"speaker": "lin",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "Ash No.7은 대체…!",
						"english": "Ash No.7, just what...!",
						"japanese": "Ash No.7、一体…！",
						"chinese": "Ash No.7，究竟…！",
						"french": "Ash No.7, mais qu'est-ce que... !",
						"spanish": "¡Ash No.7, qué demonios...!",
						"vietnamese": "Ash số 7, rốt cuộc...!",
						"thai": "Ash No.7 นี่มันอะไรกันแน่...!",
						"hindi": "ऐश नंबर 7, आखिर...!"
					}
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "…아직, 멀었다. '청소'는 끝나지 않는다…",
						"english": "...Not yet. The 'cleansing' is not over...",
						"japanese": "...まだまだだ。「浄化」は終わらない...",
						"chinese": "...还早着呢。“清除”不会结束...",
						"french": "...Pas encore. Le «nettoyage» ne s'arrête pas...",
						"spanish": "...Aún no. La 'limpieza' no termina...",
						"vietnamese": "...Vẫn chưa. 'Thanh tẩy' chưa kết thúc...",
						"thai": "...ยังอีกไกล. 'การชำระล้าง' ยังไม่สิ้นสุด...",
						"hindi": "...अभी बहुत दूर है। 'सफाई' खत्म नहीं हुई है..."
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "쓰러뜨렸다… 하지만 끝이 아닌 것 같아.",
						"english": "Defeated... But it doesn't feel like the end.",
						"japanese": "倒した…だが、終わりじゃないようだ。",
						"chinese": "击败了…但感觉这还不是结局。",
						"french": "Vaincu... Mais ça ne semble pas être la fin.",
						"spanish": "Derrotado... Pero no parece el final.",
						"vietnamese": "Đã đánh bại... nhưng có vẻ đây không phải là kết thúc.",
						"thai": "เอาชนะได้แล้ว... แต่ดูเหมือนยังไม่ใช่จุดสิ้นสุด.",
						"hindi": "हरा दिया... पर यह अंत नहीं लगता。"
					},
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						3
					],
					"speaker": "lin",
					"type": "direction"
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "이 '깨끗함'… 단순한 버릇이 아니었어.",
						"english": "This 'cleanliness'... wasn't just a habit.",
						"japanese": "この「清潔さ」…ただの癖じゃなかった。",
						"chinese": "这种“洁净”…不只是个习惯。",
						"french": "Cette «propreté»... ce n'était pas qu'une habitude.",
						"spanish": "Esta 'limpieza'... no era solo un hábito.",
						"vietnamese": "Sự 'sạch sẽ' này... không chỉ là một thói quen.",
						"thai": "ความ 'สะอาด' นี้... ไม่ใช่แค่นิสัย.",
						"hindi": "यह 'सफाई'... सिर्फ एक आदत नहीं थी।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "잿빛 거리의 미스터리는 이제 시작이었다. Ash의 진짜 모습은 아직 드러나지 않았다.",
						"english": "The mystery of the grey streets had just begun. Ash's true form was yet to be revealed.",
						"japanese": "灰色の街の謎は、まだ始まったばかりだった。Ashの真の姿は、まだ明かされていない。",
						"chinese": "灰烬街道的谜团才刚刚开始。Ash的真实面貌尚未揭露。",
						"french": "Le mystère de la rue grise ne faisait que commencer. La véritable forme d'Ash n'avait pas encore été révélée.",
						"spanish": "El misterio de las calles grises acababa de empezar. La verdadera forma de Ash aún no había sido revelada.",
						"vietnamese": "Bí ẩn của con phố xám xịt mới chỉ bắt đầu. Hình dạng thật của Ash vẫn chưa được hé lộ.",
						"thai": "ความลึกลับของถนนสีเทาเพิ่งเริ่มต้น. ร่างที่แท้จริงของ Ash ยังไม่ถูกเปิดเผย.",
						"hindi": "धूसर गलियों का रहस्य अभी शुरू ही हुआ था। ऐश का असली रूप अभी सामने आना बाकी था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "…불순물은, 제거된다.",
						"english": "...Impurities, will be removed.",
						"japanese": "...不純物は、排除される。",
						"chinese": "...杂质，将被清除。",
						"french": "...Les impuretés seront éliminées.",
						"spanish": "...Las impurezas, serán eliminadas.",
						"vietnamese": "...Tạp chất, sẽ bị loại bỏ.",
						"thai": "...สิ่งเจือปน, จะถูกกำจัด.",
						"hindi": "...अशुद्धियाँ, हटा दी जाएँगी。"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "이대로 당할 순 없어… 반드시 진실을 밝혀낼 거야!",
						"english": "I won't be defeated like this... I'll uncover the truth!",
						"japanese": "このままでは終われない…必ず真実を暴いてみせる！",
						"chinese": "我不能就这样失败…我一定要揭露真相！",
						"french": "Je ne peux pas m'incliner comme ça... Je découvrirai la vérité !",
						"spanish": "No puedo aceptar esta derrota... ¡Descubriré la verdad!",
						"vietnamese": "Tôi không thể bị đánh bại như thế này... Tôi sẽ nhất định tìm ra sự thật!",
						"thai": "ฉันยอมแพ้แบบนี้ไม่ได้... ฉันจะเปิดเผยความจริงให้ได้!",
						"hindi": "मैं ऐसे हार नहीं सकता... मैं सच का पता लगाकर रहूंगा!"
					},
					"speaker": "character_any"
				}
			]
		}
	]
} as const;
