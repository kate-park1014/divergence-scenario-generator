export const scenario_forest_veridianmelody_18_02 = {
	"scenario_id": "forest_veridianmelody_18_02",
	"order": 2,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"bracken": {
			"id": "mon_48cf29be-dbc0-44b1-bbb3-ecda1d14742d",
			"name": {
				"korean": "브라켄",
				"english": "Bracken",
				"japanese": "ブラッケン",
				"chinese": "布莱肯",
				"french": "Bracken",
				"spanish": "Bracken",
				"vietnamese": "Bracken",
				"thai": "แบรกเคน",
				"hindi": "ब्रैकेन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5b494da6-ffd7-43d3-7171-7ac84bdfe400/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/4a7a1b62-d7a7-4a21-ffd5-fa9b5de82100/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"숲은 침묵하지 않았다.",
			"밤마다 들려오는 노래는 아름답지만, 동시에 미쳐 있었다.",
			"우리를 지켜보는 시선들. 그림자가 움직이기 시작했다.",
			"경고는 이미 시작되었다."
		],
		"english": [
			"The forest was not silent.",
			"The song heard every night was beautiful, yet insane.",
			"Eyes watching us. Shadows began to stir.",
			"The warning has already begun."
		],
		"japanese": [
			"森は沈黙していなかった。",
			"毎晩聞こえる歌は美しかったが、同時に狂っていた。",
			"我々を見つめる視線。影が動き始めた。",
			"警告はすでに始まっていた。"
		],
		"chinese": [
			"森林并未沉默。",
			"每夜响起的歌声美丽却又疯狂。",
			"盯着我们的视线。影子开始移动了。",
			"警告已然开始。"
		],
		"french": [
			"La forêt n'était pas silencieuse.",
			"Le chant que l'on entendait chaque nuit était magnifique, mais fou.",
			"Des regards nous observent. Les ombres ont commencé à bouger.",
			"L'avertissement a déjà commencé."
		],
		"spanish": [
			"El bosque no estaba en silencio.",
			"La canción que se escuchaba cada noche era hermosa, pero a la vez, una locura.",
			"Miradas que nos observan. Las sombras comenzaron a moverse.",
			"La advertencia ya ha comenzado."
		],
		"vietnamese": [
			"Rừng không hề im lặng.",
			"Bản nhạc vang lên mỗi đêm thật đẹp, nhưng cũng thật điên rồ.",
			"Những ánh mắt dõi theo chúng ta. Bóng tối bắt đầu chuyển động.",
			"Lời cảnh báo đã bắt đầu."
		],
		"thai": [
			"ป่าไม่ได้เงียบงัน",
			"บทเพลงที่ได้ยินทุกคืนงดงาม แต่ก็วิปลาสในเวลาเดียวกัน",
			"สายตาที่จับจ้องเราอยู่. เงาเริ่มขยับแล้ว.",
			"คำเตือนได้เริ่มต้นขึ้นแล้ว"
		],
		"hindi": [
			"जंगल खामोश नहीं था।",
			"हर रात सुनाई देने वाला गीत सुंदर था, फिर भी पागल कर देने वाला था।",
			"हमें घूरती निगाहें। परछाइयाँ हिलने लगीं।",
			"चेतावनी पहले ही शुरू हो चुकी है।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "숲은 더욱 깊어졌다. 나무들은 서로를 껴안고 길을 막았다.",
						"english": "The forest grew deeper. Trees embraced each other, blocking the path.",
						"japanese": "森はさらに深くなった。木々は互いを抱きしめ、道を塞いだ。",
						"chinese": "森林变得更加幽深。树木相互缠绕，挡住了去路。",
						"french": "La forêt devint plus dense. Les arbres s'étreignaient, bloquant le chemin.",
						"spanish": "El bosque se hizo más profundo. Los árboles se abrazaban, bloqueando el camino.",
						"vietnamese": "Rừng càng thêm sâu. Cây cối ôm lấy nhau, chặn lối đi.",
						"thai": "ป่าลึกเข้าไปอีก. ต้นไม้กอดกันขวางทาง.",
						"hindi": "जंगल और गहरा हो गया। पेड़ एक-दूसरे को गले लगाकर रास्ता रोक रहे थे।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "bracken",
					"spot": [
						5,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "이쪽이다. 숲이 우리를 삼키기 전에 움직여야 해.",
						"english": "This way. We need to move before the forest swallows us.",
						"japanese": "こっちだ。森が我々を飲み込む前に動かないと。",
						"chinese": "这边走。我们得在森林吞噬我们之前行动。",
						"french": "Par ici. Il faut bouger avant que la forêt ne nous engloutisse.",
						"spanish": "Por aquí. Tenemos que movernos antes de que el bosque nos trague.",
						"vietnamese": "Lối này. Phải đi thôi trước khi khu rừng nuốt chửng chúng ta.",
						"thai": "ทางนี้. เราต้องไปก่อนที่ป่าจะกลืนกินเรา.",
						"hindi": "इस तरफ़। हमें जंगल के हमें निगलने से पहले आगे बढ़ना होगा।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "bracken"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "…이상한 소리가 들려.",
						"english": "...I hear strange sounds.",
						"japanese": "…変な音が聞こえる。",
						"chinese": "……我听到了奇怪的声音。",
						"french": "...J'entends des bruits étranges.",
						"spanish": "...Oigo sonidos extraños.",
						"vietnamese": "...Nghe thấy tiếng lạ.",
						"thai": "...ได้ยินเสียงแปลกๆ",
						"hindi": "…मुझे अजीब आवाज़ें सुनाई दे रही हैं।"
					}
				},
				{
					"content": {
						"korean": "또 시작이군. 밤마다 들려오는 그 기분 나쁜 노래.",
						"english": "It's starting again. That unsettling song we hear every night.",
						"japanese": "また始まったか。毎晩聞こえるあの不気味な歌。",
						"chinese": "又开始了。每晚都能听到的那首令人不安的歌。",
						"french": "Ça recommence. Cette chanson troublante qu'on entend chaque nuit.",
						"spanish": "Otra vez. Esa canción inquietante que oímos todas las noches.",
						"vietnamese": "Lại nữa rồi. Bản nhạc khó chịu vang lên mỗi đêm.",
						"thai": "เริ่มอีกแล้ว. เพลงน่าขนลุกที่ได้ยินทุกคืน.",
						"hindi": "फिर शुरू हो गया। हर रात सुनाई देने वाला वो अजीब गाना।"
					},
					"speaker": "bracken",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "기분 나쁘다고 하기엔… 아름다운데?",
						"english": "To call it unsettling... it's beautiful, isn't it?",
						"japanese": "気味が悪いと言うには…美しいんだけど？",
						"chinese": "要说是令人不安…它很美，不是吗？",
						"french": "Pour être honnête... C'est plutôt beau, non ?",
						"spanish": "Para llamarlo inquietante... ¿es hermoso, no?",
						"vietnamese": "Nói là khó chịu thì... nó đẹp mà, phải không?",
						"thai": "จะว่าน่าขนลุกก็...สวยดีออกไม่ใช่เหรอ?",
						"hindi": "अजीब कहना तो… यह खूबसूरत है, है ना?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_1"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_2",
					"content": {
						"korean": "왠지 모르게 자꾸 듣고 싶어져.",
						"english": "Somehow, I keep wanting to listen to it.",
						"japanese": "なぜか、何度も聞きたくなる。",
						"chinese": "不知为何，总想一再聆听。",
						"french": "Pour une raison ou une autre, j'ai envie de l'écouter.",
						"spanish": "Por alguna razón, sigo queriendo escucharlo.",
						"vietnamese": "Không hiểu sao, cứ muốn nghe mãi.",
						"thai": "ไม่รู้ทำไม, แต่ก็อยากฟังไปเรื่อยๆ.",
						"hindi": "पता नहीं क्यों, लेकिन बार-बार सुनने का मन करता है।"
					}
				},
				{
					"content": {
						"korean": "속지 마. 이 숲은 모든 것을 홀려.",
						"english": "Don't be fooled. This forest bewitches everything.",
						"japanese": "騙されないで。この森はすべてを惑わす。",
						"chinese": "别被骗了。这片森林迷惑一切。",
						"french": "Ne te laisse pas berner. Cette forêt ensorcelle tout.",
						"spanish": "No te dejes engañar. Este bosque lo embruja todo.",
						"vietnamese": "Đừng để bị lừa. Khu rừng này mê hoặc mọi thứ.",
						"thai": "อย่าหลงกล ป่านี้หลอกล่อทุกสิ่ง",
						"hindi": "धोखा मत खाओ। यह जंगल सब कुछ मोह लेता है।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "bracken"
				},
				{
					"content": {
						"korean": "보이지 않는 무언가가 숲을 맴도는 듯했다.",
						"english": "Something unseen seemed to hover around the forest.",
						"japanese": "見えない何かが森をさまよっているようだった。",
						"chinese": "仿佛有什么看不见的东西在森林中徘徊。",
						"french": "Quelque chose d'invisible semblait planer autour de la forêt.",
						"spanish": "Algo invisible parecía merodear por el bosque.",
						"vietnamese": "Có vẻ như thứ gì đó vô hình đang lảng vảng quanh khu rừng.",
						"thai": "ดูเหมือนมีบางสิ่งมองไม่เห็นลอยวนอยู่ในป่า",
						"hindi": "कुछ अदृश्य-सा जंगल में मंडरा रहा था।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "bracken",
					"action": "enter",
					"spot": [
						4,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "bracken",
					"content": {
						"korean": "이끼… 만지지 마.",
						"english": "Moss... Don't touch it.",
						"japanese": "苔… 触らないで。",
						"chinese": "苔藓… 别碰。",
						"french": "Mousse… Ne touche pas.",
						"spanish": "Musgo… No lo toques.",
						"vietnamese": "Rêu… Đừng chạm vào.",
						"thai": "ตะไคร่... อย่าแตะต้อง",
						"hindi": "काई… मत छुओ।"
					}
				},
				{
					"content": {
						"korean": "…왜? 예쁜데.",
						"english": "...Why? It's pretty.",
						"japanese": "…なんで？綺麗なのに。",
						"chinese": "…为什么？很漂亮啊。",
						"french": "…Pourquoi ? C'est joli.",
						"spanish": "…¿Por qué? Es bonito.",
						"vietnamese": "…Sao vậy? Nó đẹp mà.",
						"thai": "...ทำไมล่ะ? มันสวยนะ",
						"hindi": "…क्यों? यह सुंदर है।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이게 대체 뭐지? 숲이 말을 거는 것 같아.",
						"english": "What on earth is this? The forest seems to be speaking to me.",
						"japanese": "これはいったい何だ？森が話しかけてくるようだ。",
						"chinese": "这到底是什么？森林好像在对我说话。",
						"french": "Qu'est-ce que c'est que ça ? On dirait que la forêt me parle.",
						"spanish": "¿Qué demonios es esto? Parece que el bosque me está hablando.",
						"vietnamese": "Cái quái gì đây? Dường như khu rừng đang nói chuyện với tôi.",
						"thai": "นี่มันอะไรกันแน่? รู้สึกเหมือนป่ากำลังพูดกับฉัน",
						"hindi": "यह सब क्या है? जंगल मुझसे बात कर रहा है।"
					}
				},
				{
					"content": {
						"korean": "내 머릿속에… 꽃이 피어나는 것 같아.",
						"english": "In my mind... it feels like flowers are blooming.",
						"japanese": "頭の中に… 花が咲き乱れるようだ。",
						"chinese": "我的脑海里… 好像有花朵在绽放。",
						"french": "Dans ma tête… j'ai l'impression que des fleurs éclosent.",
						"spanish": "En mi mente… parece que están floreciendo flores.",
						"vietnamese": "Trong đầu tôi… dường như hoa đang nở.",
						"thai": "ในหัวของฉัน... รู้สึกเหมือนดอกไม้กำลังบาน",
						"hindi": "मेरे दिमाग में… जैसे फूल खिल रहे हैं।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_2"
				},
				{
					"content": {
						"korean": "정신 차려! 숲이 너희를 속이고 있어.",
						"english": "Snap out of it! The forest is deceiving you all.",
						"japanese": "気をしっかり持て！森がお前たちを騙している。",
						"chinese": "清醒点！森林正在欺骗你们。",
						"french": "Reprenez-vous ! La forêt est en train de vous tromper.",
						"spanish": "¡Espabilad! El bosque os está engañando.",
						"vietnamese": "Tỉnh táo lại đi! Khu rừng đang lừa dối các ngươi.",
						"thai": "ตั้งสติ! ป่ากำลังหลอกล่อพวกเธอ",
						"hindi": "होश में आओ! जंगल तुम सबको धोखा दे रहा है।"
					},
					"speaker": "bracken",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "이끼에서 뿜어져 나오는 빛이 탐험대를 감쌌다. 환각이 시작된 듯했다.",
						"english": "A light emanating from the moss enveloped the exploration party. It seemed hallucinations were beginning.",
						"japanese": "苔から放たれる光が探検隊を包み込んだ。幻覚が始まったようだった。",
						"chinese": "苔藓散发出的光芒笼罩了探险队。幻觉似乎已经开始。",
						"french": "Une lumière émanant de la mousse enveloppa l'équipe d'exploration. Les hallucinations semblaient commencer.",
						"spanish": "Una luz que emanaba del musgo envolvió al grupo de exploración. Parecía que las alucinaciones comenzaban.",
						"vietnamese": "Ánh sáng phát ra từ rêu bao trùm đoàn thám hiểm. Dường như ảo giác đã bắt đầu.",
						"thai": "แสงที่เปล่งออกมาจากตะไคร่น้ำโอบล้อมคณะสำรวจ ดูเหมือนภาพหลอนกำลังจะเริ่มขึ้น",
						"hindi": "काई से निकलती रोशनी ने अन्वेषण दल को घेर लिया। ऐसा लग रहा था जैसे मतिभ्रम शुरू हो रहा था।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "bracken",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "bracken",
					"content": {
						"korean": "멜로디가… 더 가까워졌어.",
						"english": "The melody... has gotten closer.",
						"japanese": "メロディーが… もっと近くに。",
						"chinese": "旋律… 更近了。",
						"french": "La mélodie… s'est rapprochée.",
						"spanish": "La melodía… se ha acercado.",
						"vietnamese": "Giai điệu… đã gần hơn.",
						"thai": "ทำนองเพลง... เข้ามาใกล้ขึ้นแล้ว",
						"hindi": "धुन… और करीब आ गई है।"
					}
				},
				{
					"content": {
						"korean": "어딘가에서 우리를 보고 있는 것 같아.",
						"english": "It feels like something is watching us from somewhere.",
						"japanese": "どこかで誰かが見ているような気がする。",
						"chinese": "感觉有什么东西正在某个地方看着我们。",
						"french": "On dirait que quelque chose nous observe depuis quelque part.",
						"spanish": "Parece que algo nos está observando desde algún lugar.",
						"vietnamese": "Dường như có thứ gì đó đang nhìn chúng ta từ đâu đó.",
						"thai": "รู้สึกเหมือนมีบางอย่างกำลังมองเราอยู่จากที่ไหนสักแห่ง",
						"hindi": "ऐसा लगता है जैसे कहीं से कोई हमें देख रहा है।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "누가 숨어있는 걸까?",
						"english": "Who could be hiding?",
						"japanese": "誰か隠れているのか？",
						"chinese": "谁在躲藏？",
						"french": "Qui se cache ?",
						"spanish": "¿Quién podría estar escondido?",
						"vietnamese": "Ai đang trốn vậy?",
						"thai": "ใครซ่อนอยู่กันแน่?",
						"hindi": "कौन छिपा हो सकता है?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_1"
				},
				{
					"content": {
						"korean": "숲 자체가 눈이야. 귀고.",
						"english": "The forest itself is eyes. And ears.",
						"japanese": "森そのものが目だ。耳でもある。",
						"chinese": "森林本身就是眼睛。也是耳朵。",
						"french": "La forêt elle-même est des yeux. Et des oreilles.",
						"spanish": "El bosque mismo es ojos. Y oídos.",
						"vietnamese": "Rừng này chính là mắt. Và cả tai nữa.",
						"thai": "ป่าเองก็คือดวงตา. และหูด้วย.",
						"hindi": "यह जंगल खुद आँखें है। और कान भी।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "bracken"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_2",
					"content": {
						"korean": "왠지 모르게 편안해지는 느낌이야.",
						"english": "I feel strangely at ease.",
						"japanese": "なぜか心が安らぐ感じだ。",
						"chinese": "不知为何，感觉很安心。",
						"french": "Étrangement, je me sens apaisé.",
						"spanish": "Me siento extrañamente a gusto.",
						"vietnamese": "Không hiểu sao, tôi cảm thấy thật thoải mái.",
						"thai": "ไม่รู้ทำไม แต่รู้สึกสบายใจจัง.",
						"hindi": "किसी तरह मुझे सुकून महसूस हो रहा है।"
					}
				},
				{
					"speaker": "bracken",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "정신 차려! 이건 함정이야.",
						"english": "Snap out of it! It's a trap.",
						"japanese": "しっかりしろ！これは罠だ。",
						"chinese": "清醒点！这是陷阱。",
						"french": "Reprends-toi ! C'est un piège.",
						"spanish": "¡Despierta! Esto es una trampa.",
						"vietnamese": "Tỉnh táo lại! Đây là một cái bẫy.",
						"thai": "ตั้งสติหน่อย! นี่มันกับดักนะ.",
						"hindi": "होश में आओ! यह एक जाल है।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "bracken",
					"action": "enter",
					"spot": [
						2,
						2
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "bracken",
					"content": {
						"korean": "더 이상 못 가! 멈춰야 해!",
						"english": "Can't go any further! We have to stop!",
						"japanese": "これ以上は無理だ！止まらなければ！",
						"chinese": "不能再走了！必须停下！",
						"french": "Impossible d'aller plus loin ! Il faut s'arrêter !",
						"spanish": "¡No podemos avanzar más! ¡Tenemos que parar!",
						"vietnamese": "Không thể đi tiếp được nữa! Phải dừng lại thôi!",
						"thai": "ไปต่อไม่ได้แล้ว! ต้องหยุด!",
						"hindi": "अब और नहीं जा सकते! हमें रुकना होगा!"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…돌아갈 수 없어.",
						"english": "...There's no turning back.",
						"japanese": "…もう戻れない。",
						"chinese": "…回不去了。",
						"french": "...On ne peut plus revenir en arrière.",
						"spanish": "...No hay vuelta atrás.",
						"vietnamese": "...Không thể quay lại được nữa.",
						"thai": "...กลับไม่ได้แล้ว.",
						"hindi": "...हम वापस नहीं जा सकते।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "bracken",
					"content": {
						"korean": "이 숲은… 모든 것을 삼켜. 우리도… 그렇게 될 거야.",
						"english": "This forest... devours everything. We'll... become like that too.",
						"japanese": "この森は…全てを飲み込む。我々も…そうなるだろう。",
						"chinese": "这片森林…吞噬一切。我们…也会变成那样。",
						"french": "Cette forêt... dévore tout. Nous... deviendrons ça aussi.",
						"spanish": "Este bosque... lo devora todo. Nosotros... también seremos así.",
						"vietnamese": "Khu rừng này... nuốt chửng mọi thứ. Chúng ta... cũng sẽ như vậy.",
						"thai": "ป่านี้...กลืนกินทุกสิ่ง. พวกเรา...ก็จะกลายเป็นอย่างนั้นด้วย.",
						"hindi": "यह जंगल... सब कुछ निगल जाता है। हम भी... वैसे ही हो जाएंगे।"
					}
				},
				{
					"content": {
						"korean": "멜로디는 더욱 크고 기이해졌다. 숲의 심장이 울리는 듯했다.",
						"english": "The melody grew louder and more eerie. It was as if the forest's heart was beating.",
						"japanese": "メロディーはさらに大きく、不気味になった。まるで森の心臓が鳴り響いているかのようだった。",
						"chinese": "旋律变得更加响亮和诡异。仿佛森林的心脏正在跳动。",
						"french": "La mélodie devint plus forte et plus étrange. C'était comme si le cœur de la forêt battait.",
						"spanish": "La melodía se hizo más fuerte y extraña. Parecía que el corazón del bosque latía.",
						"vietnamese": "Giai điệu càng lúc càng lớn và kỳ quái. Dường như trái tim của khu rừng đang đập.",
						"thai": "ท่วงทำนองยิ่งดังและแปลกประหลาดขึ้น. ราวกับหัวใจของป่ากำลังเต้นระรัว.",
						"hindi": "धुन और भी तेज और अजीब हो गई। ऐसा लग रहा था मानो जंगल का दिल धड़क रहा हो।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "거대한 그림자가 길을 막았다. 숲의 심장이 그곳에 있었다.",
						"english": "A colossal shadow blocked the path. The heart of the forest was there.",
						"japanese": "巨大な影が道を塞いだ。森の心臓がそこにあった。",
						"chinese": "一个巨大的黑影挡住了去路。森林的心脏就在那里。",
						"french": "Une ombre colossale bloqua le chemin. Le cœur de la forêt était là.",
						"spanish": "Una sombra colosal bloqueaba el camino. El corazón del bosque estaba allí.",
						"vietnamese": "Một bóng tối khổng lồ chặn lối đi. Trái tim của khu rừng nằm ở đó.",
						"thai": "เงาขนาดมหึมาขวางทาง. หัวใจของป่าอยู่ที่นั่น.",
						"hindi": "एक विशाल परछाई ने रास्ता रोक दिया। जंगल का दिल वहीं था।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "왔구나. 나의 새로운 실타래들.",
						"english": "You've arrived. My new threads.",
						"japanese": "来たな。私の新たな糸たちよ。",
						"chinese": "你们来了。我的新线团们。",
						"french": "Vous êtes venus. Mes nouveaux fils.",
						"spanish": "Habéis llegado. Mis nuevos hilos.",
						"vietnamese": "Các ngươi đã đến. Những sợi chỉ mới của ta.",
						"thai": "มาแล้วสินะ. เส้นด้ายใหม่ของข้า.",
						"hindi": "तुम आ गए। मेरे नए धागे।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "네가… 이 모든 환각의 근원인가?",
						"english": "Are you… the source of all these illusions?",
						"japanese": "お前が… この幻覚全ての根源なのか？",
						"chinese": "你就是… 所有这些幻觉的根源吗？",
						"french": "Es-tu… la source de toutes ces illusions ?",
						"spanish": "¿Eres tú… la fuente de todas estas alucinaciones?",
						"vietnamese": "Ngươi… là nguồn gốc của mọi ảo ảnh này sao?",
						"thai": "เจ้าคือ… ต้นกำเนิดของภาพลวงตาทั้งหมดนี้งั้นหรือ?",
						"hindi": "क्या तुम… इन सभी भ्रमों का स्रोत हो?"
					}
				},
				{
					"content": {
						"korean": "환각? 아니, 너희의 진정한 욕망이야.",
						"english": "Illusions? No, they are your true desires.",
						"japanese": "幻覚？違う、それはお前たちの真の欲望だ。",
						"chinese": "幻觉？不，那是你们真正的欲望。",
						"french": "Des illusions ? Non, ce sont vos véritables désirs.",
						"spanish": "¿Alucinaciones? No, son vuestros verdaderos deseos.",
						"vietnamese": "Ảo ảnh ư? Không, đó là ham muốn thật sự của các ngươi.",
						"thai": "ภาพลวงตา? ไม่สิ นั่นคือความปรารถนาที่แท้จริงของพวกเจ้าต่างหาก",
						"hindi": "भ्रम? नहीं, वे तुम्हारी सच्ची इच्छाएँ हैं।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "곧 너희도 이 숲의 일부가 될 것이다.",
						"english": "Soon, you too will become part of this forest.",
						"japanese": "すぐにお前たちも、この森の一部となるだろう。",
						"chinese": "很快，你们也将成为这片森林的一部分。",
						"french": "Bientôt, vous ferez vous aussi partie de cette forêt.",
						"spanish": "Pronto, vosotros también seréis parte de este bosque.",
						"vietnamese": "Chẳng mấy chốc, các ngươi cũng sẽ trở thành một phần của khu rừng này.",
						"thai": "อีกไม่นาน พวกเจ้าก็จะกลายเป็นส่วนหนึ่งของป่าแห่งนี้",
						"hindi": "जल्द ही, तुम भी इस जंगल का हिस्सा बन जाओगे।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "멜로디가 모든 것을 집어삼켰다. 탐험대는 숲의 일부가 될 운명인가.",
						"english": "The melody devoured everything. Was the expedition team destined to become part of the forest?",
						"japanese": "調べが全てを飲み込んだ。探検隊は森の一部となる運命なのか。",
						"chinese": "旋律吞噬了一切。探险队注定要成为森林的一部分吗？",
						"french": "La mélodie dévora tout. L'équipe d'expédition était-elle destinée à devenir partie intégrante de la forêt ?",
						"spanish": "La melodía lo devoró todo. ¿Estaba el equipo de expedición destinado a convertirse en parte del bosque?",
						"vietnamese": "Giai điệu nuốt chửng mọi thứ. Đoàn thám hiểm có phải đã định sẵn trở thành một phần của khu rừng không?",
						"thai": "ท่วงทำนองกลืนกินทุกสิ่ง ทีมสำรวจมีชะตากรรมที่จะกลายเป็นส่วนหนึ่งของป่าหรือไม่",
						"hindi": "धुन ने सब कुछ निगल लिया। क्या अभियान दल का भाग्य जंगल का हिस्सा बनना था?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "어리석은 것들. 너희는 그저 나의 재료일 뿐.",
						"english": "Fools. You are merely my ingredients.",
						"japanese": "愚かな者たちめ。お前たちはただの私の材料に過ぎない。",
						"chinese": "愚蠢的东西。你们不过是我的材料罢了。",
						"french": "Fous. Vous n'êtes que mes ingrédients.",
						"spanish": "Necios. Solo sois mis ingredientes.",
						"vietnamese": "Lũ ngốc. Các ngươi chỉ là nguyên liệu của ta mà thôi.",
						"thai": "พวกโง่เง่า พวกเจ้าเป็นเพียงวัตถุดิบของข้าเท่านั้น",
						"hindi": "मूर्खों। तुम केवल मेरे घटक हो।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "…아직 끝나지 않았어. 우린 여기서 멈추지 않아!",
						"english": "...It's not over. We won't stop here!",
						"japanese": "...まだ終わってない。私たちはここで止まらない！",
						"chinese": "...还没结束。我们不会就此止步！",
						"french": "...Ce n'est pas encore fini. Nous ne nous arrêterons pas ici !",
						"spanish": "...Aún no ha terminado. ¡No nos detendremos aquí!",
						"vietnamese": "...Chưa kết thúc đâu. Chúng ta sẽ không dừng lại ở đây!",
						"thai": "...ยังไม่จบแค่นี้ เราจะไม่หยุดอยู่ตรงนี้!",
						"hindi": "...अभी खत्म नहीं हुआ है। हम यहाँ नहीं रुकेंगे!"
					}
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "하하… 고작 이거라고 생각했나?",
						"english": "Hahaha… Did you think this was all?",
						"japanese": "ハハハ… これっぽっちで終わりだとでも思ったか？",
						"chinese": "哈哈… 你们以为这就完了吗？",
						"french": "Hahaha… Vous pensiez que c'était tout ?",
						"spanish": "Jajaja… ¿Creísteis que esto era todo?",
						"vietnamese": "Haha… Ngươi nghĩ chỉ có vậy thôi sao?",
						"thai": "ฮ่าฮ่า… คิดว่ามีแค่นี้งั้นรึ?",
						"hindi": "हाहाहा… क्या तुम्हें लगा कि बस इतना ही था?"
					}
				},
				{
					"content": {
						"korean": "너희는 아직… 아무것도 모른다.",
						"english": "You still… know nothing.",
						"japanese": "お前たちはまだ… 何も知らない。",
						"chinese": "你们还… 一无所知。",
						"french": "Vous ne savez encore… rien du tout.",
						"spanish": "Todavía… no sabéis nada.",
						"vietnamese": "Các ngươi vẫn còn… chưa biết gì cả.",
						"thai": "พวกเจ้ายัง… ไม่รู้อะไรเลย",
						"hindi": "तुम अभी भी… कुछ नहीं जानते।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이게 끝이 아니라는 거야…?",
						"english": "This isn't the end…?",
						"japanese": "これが終わりじゃないってこと…？",
						"chinese": "这还没完…？",
						"french": "Ce n'est pas la fin… ?",
						"spanish": "¿Esto no es el final…?",
						"vietnamese": "Chuyện này vẫn chưa kết thúc sao…?",
						"thai": "นี่ไม่ใช่ตอนจบงั้นหรือ…?",
						"hindi": "यह अंत नहीं है…?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "그림자는 사라졌다. 그러나 숲의 멜로디는 멈추지 않았다.",
						"english": "The shadow vanished. But the forest's melody did not cease.",
						"japanese": "影は消えた。しかし、森の調べは止まらなかった。",
						"chinese": "阴影消失了。但森林的旋律并未停止。",
						"french": "L'ombre disparut. Mais la mélodie de la forêt ne s'arrêta pas.",
						"spanish": "La sombra desapareció. Pero la melodía del bosque no cesó.",
						"vietnamese": "Bóng tối tan biến. Nhưng giai điệu của khu rừng vẫn không ngừng lại.",
						"thai": "เงาหายไปแล้ว แต่ท่วงทำนองของป่าก็ยังไม่หยุดลง",
						"hindi": "छाया गायब हो गई। लेकिन जंगल की धुन नहीं रुकी।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "더 깊은 곳에서, 더 섬뜩한 아름다움이 기다리고 있었다.",
						"english": "In the deeper depths, a more chilling beauty awaited.",
						"japanese": "さらに深い場所では、より恐ろしい美しさが待っていた。",
						"chinese": "在更深处，更令人毛骨悚然的美丽正在等待着。",
						"french": "Dans les profondeurs, une beauté plus sinistre attendait.",
						"spanish": "En lo más profundo, una belleza más espeluznante aguardaba.",
						"vietnamese": "Sâu thẳm hơn nữa, một vẻ đẹp rợn người hơn đang chờ đợi.",
						"thai": "ในส่วนลึกยิ่งกว่านั้น ความงามที่น่าขนลุกยิ่งกว่ากำลังรออยู่",
						"hindi": "और गहराई में, एक और भयावह सुंदरता इंतज़ार कर रही थी।"
					}
				}
			],
			"id": 15
		}
	]
} as const;
