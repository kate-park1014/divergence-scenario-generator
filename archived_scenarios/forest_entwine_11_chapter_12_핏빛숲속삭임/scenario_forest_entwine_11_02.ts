export const scenario_forest_entwine_11_02 = {
	"scenario_id": "forest_entwine_11_02",
	"order": 2,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"ivy": {
			"id": "mon_d1c759f3-74f8-42b7-ba16-c705649f006f",
			"name": {
				"korean": "아이비",
				"english": "Ivy",
				"japanese": "アイビー",
				"chinese": "艾薇",
				"french": "Ivy",
				"spanish": "Ivy",
				"vietnamese": "Ivy",
				"thai": "ไอวี่",
				"hindi": "आइवी"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/654fde54-6029-4601-b4a8-0578f00df900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/6ee8738d-0e14-4f8d-d04d-c934b0fff000/public"
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
					"emotion": "base",
					"content": {
						"korean": "숲은 소리 없이 죽어가고 있었다. 기이할 정도로 고요했다.",
						"english": "The forest was dying silently. It was eerily quiet.",
						"japanese": "森は音もなく死につつあった。奇妙なほどに静かだった。",
						"chinese": "森林在无声地死去。寂静得令人不安。",
						"french": "La forêt mourait en silence. C'était étrangement calme.",
						"spanish": "El bosque moría en silencio. Era inquietantemente tranquilo.",
						"vietnamese": "Rừng chết dần trong im lặng. Nó yên tĩnh đến kỳ lạ.",
						"thai": "ป่ากำลังตายไปอย่างเงียบงัน มันเงียบสงัดจนน่าขนลุก",
						"hindi": "जंगल चुपचाप मर रहा था। यह अजीब तरह से शांत था।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…이상해. 너무 조용해.",
						"english": "...Strange. Too quiet.",
						"japanese": "…おかしい。静かすぎる。",
						"chinese": "……奇怪。太安静了。",
						"french": "...Étrange. Trop silencieux.",
						"spanish": "...Extraño. Demasiado silencioso.",
						"vietnamese": "...Lạ thật. Quá yên tĩnh.",
						"thai": "...แปลกจัง เงียบเกินไป",
						"hindi": "...अजीब है। बहुत शांत है।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "ivy",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "…정확히는, 침묵당하고 있어요.",
						"english": "...More precisely, it's being silenced.",
						"japanese": "…正確には、沈黙させられています。",
						"chinese": "……准确地说，它被沉默了。",
						"french": "...Plus précisément, il est réduit au silence.",
						"spanish": "...Más precisamente, está siendo silenciado.",
						"vietnamese": "...Chính xác hơn, nó đang bị bịt miệng.",
						"thai": "...พูดให้ถูกคือ มันกำลังถูกทำให้เงียบ",
						"hindi": "...ठीक से कहूं तो, इसे खामोश किया जा रहा है।"
					},
					"emotion": "base",
					"speaker": "ivy",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "아이비? 여기서 뭘 하고 있는 거야?",
						"english": "Ivy? What are you doing here?",
						"japanese": "アイビー？ここで何をしているんだ？",
						"chinese": "艾维？你在这里做什么？",
						"french": "Ivy ? Qu'est-ce que tu fais ici ?",
						"spanish": "¿Ivy? ¿Qué haces aquí?",
						"vietnamese": "Ivy? Cậu đang làm gì ở đây vậy?",
						"thai": "ไอวี่? มาทำอะไรที่นี่น่ะ?",
						"hindi": "आइवी? तुम यहाँ क्या कर रही हो?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "식물들을 조사하고 있었어요. 이대로라면…",
						"english": "I was examining the plants. If things continue like this...",
						"japanese": "植物を調べていました。このままでは…",
						"chinese": "我在调查植物。如果照这样下去……",
						"french": "J'examinais les plantes. Si ça continue comme ça...",
						"spanish": "Estaba examinando las plantas. Si esto sigue así...",
						"vietnamese": "Em đang điều tra các loài cây. Nếu cứ thế này thì...",
						"thai": "ฉันกำลังตรวจสอบพืชอยู่ค่ะ ถ้าเป็นแบบนี้ต่อไป...",
						"hindi": "मैं पौधों की जाँच कर रही थी। अगर ऐसा ही चलता रहा तो..."
					},
					"emotion": "sad",
					"speaker": "ivy",
					"type": "speech"
				},
				{
					"content": {
						"korean": "모든 생명체가 사라질 거예요.",
						"english": "All life will disappear.",
						"japanese": "全ての生命が消え去るでしょう。",
						"chinese": "所有生命都将消失。",
						"french": "Toute vie disparaîtra.",
						"spanish": "Toda la vida desaparecerá.",
						"vietnamese": "Mọi sinh vật sẽ biến mất.",
						"thai": "สิ่งมีชีวิตทั้งหมดจะหายไป",
						"hindi": "सभी जीवन समाप्त हो जाएगा।"
					},
					"emotion": "sad",
					"speaker": "ivy",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						4,
						2
					],
					"speaker": "ivy",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "ivy",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "여기도 마찬가지예요. 식물들이… 말라비틀어지고 있어요.",
						"english": "It's the same here. The plants are... withering away.",
						"japanese": "ここも同じです。植物が…枯れてきています。",
						"chinese": "这里也一样。植物们…正在枯萎。",
						"french": "C'est pareil ici. Les plantes… se dessèchent.",
						"spanish": "Aquí también es lo mismo. Las plantas… se están marchitando.",
						"vietnamese": "Ở đây cũng vậy. Cây cối… đang héo mòn.",
						"thai": "ที่นี่ก็เหมือนกัน พืชต่างๆ... กำลังเหี่ยวเฉา",
						"hindi": "यहाँ भी वही है। पौधे... मुरझा रहे हैं।"
					}
				},
				{
					"content": {
						"korean": "설마 이게 그 포자 때문인가?",
						"english": "Could this be because of those spores?",
						"japanese": "まさか、これもあの胞子のせいなのか？",
						"chinese": "难道这是因为那些孢子吗？",
						"french": "Serait-ce à cause de ces spores ?",
						"spanish": "¿Será por esas esporas?",
						"vietnamese": "Chẳng lẽ là do những bào tử đó?",
						"thai": "หรือว่านี่เป็นเพราะสปอร์เหล่านั้น?",
						"hindi": "क्या यह उन बीजाणुओं के कारण है?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "ivy",
					"type": "speech",
					"content": {
						"korean": "단순한 포자가 아니에요. 숲의 에너지가 비정상적으로 고갈되고 있어요.",
						"english": "It's not just simple spores. The forest's energy is being abnormally depleted.",
						"japanese": "単なる胞子ではありません。森のエネルギーが異常に枯渇しています。",
						"chinese": "不仅仅是简单的孢子。森林的能量正在异常枯竭。",
						"french": "Ce ne sont pas de simples spores. L'énergie de la forêt s'épuise anormalement.",
						"spanish": "No son simples esporas. La energía del bosque se está agotando anormalmente.",
						"vietnamese": "Không phải chỉ là bào tử đơn giản. Năng lượng của khu rừng đang bị cạn kiệt bất thường.",
						"thai": "ไม่ใช่แค่สปอร์ธรรมดา พลังงานของป่ากำลังถูกระบายออกไปอย่างผิดปกติ",
						"hindi": "यह केवल साधारण बीजाणु नहीं हैं। जंगल की ऊर्जा असामान्य रूप से समाप्त हो रही है।"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "에너지 고갈…?",
						"english": "Energy depletion...?",
						"japanese": "エネルギー枯渇…？",
						"chinese": "能量枯竭…？",
						"french": "Épuisement énergétique… ?",
						"spanish": "¿Agotamiento de energía...?",
						"vietnamese": "Cạn kiệt năng lượng…?",
						"thai": "พลังงานถูกระบายออก...?",
						"hindi": "ऊर्जा समाप्त... ?"
					},
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "멀리서 희미하고 슬픈 노랫소리가 들려왔다.",
						"english": "A faint, sad song was heard from afar.",
						"japanese": "遠くから、かすかで悲しい歌声が聞こえてきた。",
						"chinese": "远处传来一阵微弱而悲伤的歌声。",
						"french": "Au loin, un chant faible et triste se fit entendre.",
						"spanish": "Desde lejos se escuchó una canción débil y triste.",
						"vietnamese": "Từ xa vọng lại một tiếng hát buồn thảm và yếu ớt.",
						"thai": "เสียงเพลงแผ่วเบาเศร้าสร้อยดังมาจากที่ไกลๆ",
						"hindi": "दूर से एक धीमी और उदास गीत की आवाज़ आई।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…저 소리, 너무 슬프지 않아요?",
						"english": "...Doesn't that sound so sad?",
						"japanese": "…あの音、とても悲しくないですか？",
						"chinese": "…那个声音，不是很悲伤吗？",
						"french": "...Ce son, n'est-il pas si triste ?",
						"spanish": "...Ese sonido, ¿no es muy triste?",
						"vietnamese": "...Tiếng đó, không phải rất buồn sao?",
						"thai": "...เสียงนั้น ไม่เศร้าเกินไปเหรอ?",
						"hindi": "...क्या वह आवाज़ बहुत उदास नहीं है?"
					},
					"emotion": "sad",
					"speaker": "ivy",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "ivy",
					"action": "enter",
					"spot": [
						2,
						2
					]
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "시간이 없어요. 숲의 생명력이 너무 빠르게 소멸하고 있어요.",
						"english": "There's no time. The forest's life force is vanishing too quickly.",
						"japanese": "時間がありません。森の生命力が、あまりにも速く消滅しています。",
						"chinese": "没有时间了。森林的生命力正在迅速消逝。",
						"french": "Il n'y a pas de temps. La force vitale de la forêt disparaît trop vite.",
						"spanish": "No hay tiempo. La fuerza vital del bosque está desapareciendo demasiado rápido.",
						"vietnamese": "Không còn thời gian nữa. Sức sống của khu rừng đang biến mất quá nhanh.",
						"thai": "ไม่มีเวลาแล้ว พลังชีวิตของป่ากำลังหายไปอย่างรวดเร็ว",
						"hindi": "समय नहीं है। जंगल की जीवन शक्ति बहुत तेज़ी से समाप्त हो रही है।"
					},
					"speaker": "ivy",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이건… 숲이 죽어가는 소리인가?",
						"english": "Is this... the sound of the forest dying?",
						"japanese": "これは…森が死んでいく音なのか？",
						"chinese": "这是…森林垂死的哀嚎吗？",
						"french": "C'est… le son de la forêt qui meurt ?",
						"spanish": "¿Es esto… el sonido del bosque muriendo?",
						"vietnamese": "Đây có phải là… âm thanh của khu rừng đang chết dần?",
						"thai": "นี่มัน... เสียงของป่าที่กำลังตายงั้นเหรอ?",
						"hindi": "क्या यह... जंगल के मरने की आवाज़ है?"
					},
					"emotion": "sad"
				},
				{
					"speaker": "ivy",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "누군가 숲의 모든 것을 빼앗고 있어요.",
						"english": "Someone is taking everything from the forest.",
						"japanese": "誰かが、森の全てを奪っています。",
						"chinese": "有人正在夺走森林的一切。",
						"french": "Quelqu'un est en train de tout prendre à la forêt.",
						"spanish": "Alguien le está quitando todo al bosque.",
						"vietnamese": "Có ai đó đang tước đoạt mọi thứ của khu rừng.",
						"thai": "มีคนกำลังเอาทุกสิ่งทุกอย่างไปจากป่า",
						"hindi": "कोई जंगल से सब कुछ छीन रहा है।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…저 노랫소리도 더 선명하게 들리는 것 같아.",
						"english": "...I can hear that singing more clearly now.",
						"japanese": "「…あの歌声も、もっと鮮明に聞こえるようだ。」",
						"chinese": "「……那歌声听起来也更清晰了。」",
						"french": "...Ce chant semble aussi plus clair maintenant.",
						"spanish": "...Ese canto también parece más claro ahora.",
						"vietnamese": "...Cả tiếng hát kia cũng dường như rõ hơn.",
						"thai": "...เสียงเพลงนั้นก็ดูเหมือนจะชัดเจนขึ้นด้วย",
						"hindi": "...वो गाना भी अब और साफ सुनाई दे रहा है।"
					}
				},
				{
					"speaker": "ivy",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "맞아요. 어쩌면… 누군가 도움을 청하는 걸지도 몰라요.",
						"english": "Exactly. Maybe... someone needs help.",
						"japanese": "「その通りです。もしかしたら…誰かが助けを求めているのかもしれません。」",
						"chinese": "「没错。或许……是有人在求救。」",
						"french": "C'est vrai. Peut-être... que quelqu'un demande de l'aide.",
						"spanish": "Así es. Quizás... alguien esté pidiendo ayuda.",
						"vietnamese": "Đúng vậy. Có lẽ... ai đó đang cầu cứu.",
						"thai": "ถูกต้องค่ะ บางที... อาจมีใครบางคนกำลังขอความช่วยเหลืออยู่ก็ได้",
						"hindi": "सही कहा। शायद... कोई मदद मांग रहा हो।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "ivy",
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "숲은 이제 돌아갈 수 없는 미로가 되었다. 죽음의 그림자가 짙어졌다.",
						"english": "The forest has become an inescapable labyrinth. The shadow of death has deepened.",
						"japanese": "「森はもう戻れない迷宮となった。死の影が濃くなった。」",
						"chinese": "「森林已变成了无法回头的迷宫。死亡的阴影笼罩而下。」",
						"french": "La forêt est devenue un labyrinthe sans retour. L'ombre de la mort s'est épaissie.",
						"spanish": "El bosque se ha convertido en un laberinto sin retorno. La sombra de la muerte se ha vuelto más densa.",
						"vietnamese": "Rừng đã trở thành một mê cung không lối thoát. Bóng đêm của cái chết đã bao trùm.",
						"thai": "ป่ากลายเป็นเขาวงกตที่กลับไม่ได้แล้ว เงาแห่งความตายเริ่มเข้มข้นขึ้น",
						"hindi": "जंगल अब एक ऐसा भूलभुलैया बन गया है जहाँ से वापसी नहीं है। मौत की परछाई गहरा गई है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "젠장… 대체 여기서 뭘 해야 하는 거야?",
						"english": "Damn it... What the hell am I supposed to do here?",
						"japanese": "「くそっ…一体ここで何をすればいいんだ？」",
						"chinese": "「该死……我到底该在这里做什么？」",
						"french": "Bon sang... Qu'est-ce qu'on est censé faire ici ?",
						"spanish": "¡Maldita sea! ¿Qué se supone que debo hacer aquí?",
						"vietnamese": "Chết tiệt… Rốt cuộc tôi phải làm gì ở đây?",
						"thai": "บ้าเอ๊ย... ตกลงฉันต้องทำอะไรที่นี่เนี่ย?",
						"hindi": "धत्त... आखिर यहाँ क्या करना है?"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "저 깊은 곳에 원인이 있어요. 숲의 모든 생명력을 빨아들이는 존재가…",
						"english": "The cause is deep within. A being that drains all life from the forest...",
						"japanese": "「あの深いところに原因があります。森の全ての生命力を吸い取る存在が…」",
						"chinese": "「根源就在深处。那个吞噬森林所有生命力的存在……」",
						"french": "La cause est là, tout au fond. Une entité qui aspire toute la vitalité de la forêt...",
						"spanish": "La causa está en lo más profundo. Un ser que drena toda la vida del bosque...",
						"vietnamese": "Nguyên nhân nằm sâu bên trong. Một sinh vật đang hút cạn sự sống của khu rừng…",
						"thai": "ต้นเหตุอยู่ที่ส่วนลึกนั่น มีบางสิ่งกำลังดูดกลืนพลังชีวิตทั้งหมดของป่าไป...",
						"hindi": "वह गहराइयों में है, इसकी वजह। एक ऐसा अस्तित्व जो जंगल की सारी जीवन शक्ति को सोख रहा है..."
					},
					"speaker": "ivy",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "누가 감히…!",
						"english": "Who dares...!",
						"japanese": "「誰がよくも…！」",
						"chinese": "「谁敢……！」",
						"french": "Qui ose...!",
						"spanish": "¡¿Quién se atreve...?!",
						"vietnamese": "Kẻ nào dám…!",
						"thai": "ใครกล้า...",
						"hindi": "कौन हिम्मत करता है...!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "…더 늦기 전에 막아야 해요. 서두르세요!",
						"english": "...We must stop it before it's too late. Hurry!",
						"japanese": "「…手遅れになる前に止めなければなりません。急いでください！」",
						"chinese": "「……必须在为时已晚之前阻止它。快！」",
						"french": "...Il faut l'arrêter avant qu'il ne soit trop tard. Dépêchez-vous !",
						"spanish": "...Debemos detenerlo antes de que sea demasiado tarde. ¡Date prisa!",
						"vietnamese": "...Chúng ta phải ngăn chặn nó trước khi quá muộn. Nhanh lên!",
						"thai": "...เราต้องหยุดมันก่อนที่จะสายเกินไป รีบเข้า!",
						"hindi": "...इससे पहले कि बहुत देर हो जाए, हमें इसे रोकना होगा। जल्दी करो!"
					},
					"speaker": "ivy",
					"type": "speech"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "어리석은 자들… 이 숲은 나의 일부다.",
						"english": "Fools… this forest is a part of me.",
						"japanese": "「愚か者どもめ…この森は私の一部だ。」",
						"chinese": "「愚蠢的家伙们…这片森林是我的 M_D_B_A！」",
						"french": "« Fous… cette forêt fait partie de moi. »",
						"spanish": "« ¡Tontos… este bosque es parte de mí! »",
						"vietnamese": "“Lũ ngu ngốc… khu rừng này là một phần của ta.”",
						"thai": "“เจ้าพวกโง่… ป่านี้เป็นส่วนหนึ่งของข้า!”",
						"hindi": "“मूर्खों… यह जंगल मेरा ही एक हिस्सा है।”"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "너희는 그저 나의 양분에 불과해…",
						"english": "You are merely my nourishment…",
						"japanese": "「お前たちはただ私の養分に過ぎない…」",
						"chinese": "「你们不过是我的养分罢了…」",
						"french": "« Vous n'êtes que ma subsistance… »",
						"spanish": "« Ustedes son solo mi sustento… »",
						"vietnamese": "“Các ngươi chỉ là chất dinh dưỡng của ta mà thôi…”",
						"thai": "“พวกเจ้าเป็นแค่สารอาหารของข้าเท่านั้น…”",
						"hindi": "“तुम बस मेरे पोषण हो…”"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "여기서… 멈출 순 없어…",
						"english": "I… cannot stop here…",
						"japanese": "「ここで…止まるわけにはいかない…」",
						"chinese": "「我不能…止步于此…」",
						"french": "« Je ne peux pas… m'arrêter ici… »",
						"spanish": "« No puedo… detenerme aquí… »",
						"vietnamese": "“Không thể… dừng lại ở đây…”",
						"thai": "“ข้า… หยุดอยู่แค่นี้ไม่ได้…”",
						"hindi": "“यहां… रुक नहीं सकता…”"
					},
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "크윽… 겨우 이 정도로… 숲은 멈추지 않아…",
						"english": "Ugh… just this much… the forest won't stop…",
						"japanese": "「くっ…これしきでは…森は止まらない…」",
						"chinese": "「呃…仅仅凭此…森林是不会停止的…」",
						"french": "« Argh… juste ça… la forêt ne s'arrêtera pas… »",
						"spanish": "« Ugh… solo con esto… el bosque no se detendrá… »",
						"vietnamese": "“Khụ… chỉ thế này thôi… khu rừng sẽ không dừng lại đâu…”",
						"thai": "“อึก… แค่นี้เองเหรอ… ป่าจะยังไม่หยุดหรอก…”",
						"hindi": "“ऊह… बस इतना ही… जंगल नहीं रुकेगा…”"
					},
					"emotion": "sad"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이 숲의… 진정한 주인은…",
						"english": "The true master… of this forest is…",
						"japanese": "「この森の…真の主は…」",
						"chinese": "「这片森林的…真正主人是…」",
						"french": "« Le véritable maître… de cette forêt est… »",
						"spanish": "« El verdadero dueño… de este bosque es… »",
						"vietnamese": "“Chủ nhân thật sự… của khu rừng này là…”",
						"thai": "“เจ้าของที่แท้จริง… ของป่าแห่งนี้คือ…”",
						"hindi": "“इस जंगल का… असली मालिक है…”"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "겨우… 해치웠나…",
						"english": "Did we… finally defeat it…?",
						"japanese": "「ようやく…倒したのか…」",
						"chinese": "「终于…解决了么…」",
						"french": "« L'avons-nous… enfin vaincu… ? »",
						"spanish": "« ¿Finalmente… lo derrotamos…? »",
						"vietnamese": "“Cuối cùng… cũng tiêu diệt được rồi sao…”",
						"thai": "“ในที่สุด… ก็กำจัดได้แล้วสินะ…”",
						"hindi": "“क्या… आखिरकार हरा दिया…?”"
					},
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						2
					],
					"speaker": "ivy"
				},
				{
					"speaker": "ivy",
					"type": "speech",
					"content": {
						"korean": "숲의 생명력 고갈이… 잠시 멈췄어요…",
						"english": "The forest's life force depletion… has temporarily stopped…",
						"japanese": "「森の生命力枯渇が…一時的に止まりました…」",
						"chinese": "「森林的生命力枯竭…暂时停止了…」",
						"french": "« L'épuisement de la force vitale de la forêt… s'est temporairement arrêté… »",
						"spanish": "« El agotamiento de la fuerza vital del bosque… se ha detenido temporalmente… »",
						"vietnamese": "“Sự cạn kiệt sinh lực của khu rừng… đã tạm thời ngừng lại…”",
						"thai": "“การสูญเสียพลังชีวิตของป่า… หยุดลงชั่วคราวแล้ว…”",
						"hindi": "“जंगल की जीवन शक्ति का क्षय… कुछ देर के लिए रुक गया है…”"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "그러나 숲의 침묵은 여전히 깊었다. 아직 끝나지 않은 이야기였다.",
						"english": "But the forest's silence remained deep. It was a story not yet finished.",
						"japanese": "「しかし、森の沈黙は依然として深く、まだ終わらない物語だった。」",
						"chinese": "「然而，森林的寂静依旧深沉。这是一个尚未结束的故事。」",
						"french": "« Mais le silence de la forêt restait profond. C'était une histoire qui n'était pas encore terminée. »",
						"spanish": "« Pero el silencio del bosque seguía siendo profundo. Era una historia que aún no había terminado. »",
						"vietnamese": "“Tuy nhiên, sự im lặng của khu rừng vẫn sâu thẳm. Đó là một câu chuyện chưa kết thúc.”",
						"thai": "“ทว่า ความเงียบของป่ายังคงลึกซึ้ง มันเป็นเรื่องราวที่ยังไม่จบสิ้น”",
						"hindi": "“परंतु जंगल का सन्नाटा अभी भी गहरा था। यह एक ऐसी कहानी थी जो अभी खत्म नहीं हुई थी।”"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "어둠 속에서 거대한 그림자가 일렁였다. 숲의 모든 생명력을 집어삼키는 존재가 모습을 드러냈다.",
						"english": "A colossal shadow rippled in the darkness. The entity devouring all life force of the forest revealed itself.",
						"japanese": "「闇の中で巨大な影が揺らめいた。森の全ての生命力を食い尽くす存在が姿を現した。」",
						"chinese": "「黑暗中，巨大的身影蠢蠢欲动。吞噬森林所有生命力的存在现身了。」",
						"french": "Une ombre colossale ondula dans l'obscurité. L'entité dévorant toute la vitalité de la forêt se révéla.",
						"spanish": "Una sombra colosal onduló en la oscuridad. El ser que devora toda la fuerza vital del bosque se reveló.",
						"vietnamese": "Một bóng tối khổng lồ lấp lánh trong màn đêm. Sinh vật nuốt chửng mọi sự sống của khu rừng đã lộ diện.",
						"thai": "เงาร่างมหึมาปรากฏขึ้นในความมืดมิด สิ่งมีชีวิตที่กลืนกินพลังชีวิตทั้งหมดของป่าได้เผยโฉมออกมาแล้ว",
						"hindi": "अंधेरे में एक विशाल परछाई लहराई। जंगल की सारी जीवन शक्ति को निगलने वाले अस्तित्व ने अपना रूप प्रकट किया।"
					},
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…나의 평화를 방해하는 어리석은 침입자들.",
						"english": "...Foolish intruders who disturb my peace.",
						"japanese": "「…私の平和を邪魔する愚かな侵入者たちめ。」",
						"chinese": "「……打扰我平静的愚蠢入侵者们。」",
						"french": "...Stupides intrus qui osez troubler ma paix.",
						"spanish": "...Estúpidos intrusos que perturban mi paz.",
						"vietnamese": "...Những kẻ xâm nhập ngu ngốc dám quấy rầy sự bình yên của ta.",
						"thai": "...พวกผู้บุกรุกโง่เขลาที่มารบกวนความสงบของข้า",
						"hindi": "...मेरे शांति को भंग करने वाले मूर्ख घुसपैठिए।"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "이 숲의 모든 것은 나에게 바쳐질 제물이다.",
						"english": "All in this forest are offerings to me.",
						"japanese": "「この森の全ては、私に捧げられる生贄だ。」",
						"chinese": "「这森林里的一切都将成为献给我的祭品。」",
						"french": "Tout dans cette forêt est un sacrifice qui me sera offert.",
						"spanish": "Todo en este bosque es un sacrificio que me será ofrecido.",
						"vietnamese": "Tất cả mọi thứ trong khu rừng này là vật tế hiến dâng cho ta.",
						"thai": "ทุกสิ่งในป่านี้ล้วนเป็นเครื่องสังเวยที่จะมอบให้ข้า",
						"hindi": "इस जंगल में सब कुछ मुझे चढ़ाया जाने वाला बलिदान है।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "네가… 숲을 죽이고 있었어!",
						"english": "You… you were killing the forest!",
						"japanese": "「お前が…森を殺していたのか！」",
						"chinese": "「你…你一直在扼杀森林！」",
						"french": "« Tu… tu étais en train de tuer la forêt ! »",
						"spanish": "« ¡Tú… tú estabas matando el bosque! »",
						"vietnamese": "“Ngươi… ngươi đang giết khu rừng!”",
						"thai": "“เจ้า… เจ้ากำลังฆ่าป่า!”",
						"hindi": "“तुम… तुम जंगल को मार रहे थे!”"
					}
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "ivy"
				},
				{
					"speaker": "ivy",
					"type": "speech",
					"content": {
						"korean": "저자를 막아야 해요! 그렇지 않으면 숲은… 완전히 죽을 거예요!",
						"english": "We must stop him! Otherwise, the forest will… completely die!",
						"japanese": "「彼を止めなければ！そうしなければ森は…完全に死んでしまう！」",
						"chinese": "「我们必须阻止他！否则森林会…彻底死去！」",
						"french": "« Nous devons l'arrêter ! Sinon, la forêt mourra… complètement ! »",
						"spanish": "« ¡Debemos detenerlo! ¡De lo contrario, el bosque… morirá por completo! »",
						"vietnamese": "“Phải ngăn hắn lại! Bằng không, khu rừng sẽ… chết hoàn toàn!”",
						"thai": "“เราต้องหยุดมัน! ไม่อย่างนั้นป่าจะ… ตายสนิทเลย!”",
						"hindi": "“हमें उसे रोकना होगा! वरना जंगल… पूरी तरह से मर जाएगा!”"
					},
					"emotion": "angry"
				},
				{
					"duration_ms": 400,
					"action": "exit",
					"speaker": "ivy",
					"type": "direction"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"숲이 침묵한다. 모든 소리가 멎었다.",
			"생명력은 말라가고, 어둠이 서서히 숲을 잠식한다.",
			"깊어질수록 들려오는 슬픈 노랫소리.",
			"이 숲은 살아있는 무덤인가, 아니면…",
			"카운트다운이 시작됐다."
		],
		"english": [
			"The forest falls silent. All sounds cease.",
			"Lifeblood withers, darkness slowly consumes the forest.",
			"As it deepens, a mournful song can be heard.",
			"Is this forest a living tomb, or...?",
			"The countdown has begun."
		],
		"japanese": [
			"森は沈黙する。全ての音が止まった。",
			"生命力は枯れ果て、闇が徐々に森を蝕む。",
			"深まるほどに聞こえてくる悲しい歌声。",
			"この森は生きた墓なのか、それとも…",
			"カウントダウンが始まった。"
		],
		"chinese": [
			"森林寂静无声。所有声音都停止了。",
			"生命力枯竭，黑暗缓缓侵蚀着森林。",
			"越深入，越能听到悲伤的歌声。",
			"这片森林是活着的坟墓，还是……",
			"倒计时开始了。"
		],
		"french": [
			"La forêt se tait. Tout son s'est éteint.",
			"La vitalité s'étiole, les ténèbres envahissent lentement la forêt.",
			"Plus on s'enfonce, plus on entend un chant triste.",
			"Cette forêt est-elle une tombe vivante, ou...?",
			"Le compte à rebours a commencé."
		],
		"spanish": [
			"El bosque se silencia. Todo sonido ha cesado.",
			"La fuerza vital se agota, la oscuridad consume lentamente el bosque.",
			"Cuanto más profundo, más se escucha una canción triste.",
			"¿Es este bosque una tumba viviente, o...?",
			"La cuenta atrás ha comenzado."
		],
		"vietnamese": [
			"Rừng chìm vào im lặng. Mọi âm thanh đều ngừng bặt.",
			"Sinh lực cạn kiệt, bóng tối dần xâm chiếm khu rừng.",
			"Càng sâu, càng nghe thấy tiếng hát buồn thảm.",
			"Rừng này là một nấm mồ sống, hay là...?",
			"Đếm ngược đã bắt đầu."
		],
		"thai": [
			"ป่าเงียบงัน เสียงทั้งหมดหยุดลง",
			"พลังชีวิตเหือดหาย ความมืดค่อยๆ กลืนกินป่า",
			"ยิ่งลึกยิ่งได้ยินเสียงเพลงโศกเศร้า",
			"ป่านี้เป็นสุสานที่มีชีวิต หรือว่า...",
			"การนับถอยหลังได้เริ่มต้นขึ้นแล้ว"
		],
		"hindi": [
			"वन शांत हो गया। सभी आवाज़ें थम गईं।",
			"जीवन शक्ति क्षीण हो रही है, और अँधेरा धीरे-धीरे जंगल को निगल रहा है।",
			"जितना गहरा होता जाता है, उतना ही एक उदास गीत सुनाई देता है।",
			"क्या यह जंगल एक जीवित कब्र है, या फिर...?",
			"उलटी गिनती शुरू हो गई है।"
		]
	}
} as const;
