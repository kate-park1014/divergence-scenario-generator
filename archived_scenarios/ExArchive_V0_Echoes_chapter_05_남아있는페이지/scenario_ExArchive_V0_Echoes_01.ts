export const scenario_ExArchive_V0_Echoes_01 = {
	"scenario_id": "ExArchive_V0_Echoes_01",
	"order": 1,
	"act": "intro",
	"theme": "modern",
	"actors": {
		"max": {
			"id": "mon_6e8c1577-89e2-49f6-a9f3-a6521b9e7f59",
			"name": {
				"korean": "맥스",
				"english": "Max",
				"japanese": "マックス",
				"chinese": "麦克斯",
				"french": "Max",
				"spanish": "Max",
				"vietnamese": "Max",
				"thai": "แม็กซ์",
				"hindi": "मैक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8bd7f351-400b-46f9-828f-aa2542734900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/62971060-c904-4d96-afcd-d11f831b3e00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"기억의 수호자는 사라졌다.",
			"하지만 그림자는 더욱 깊게 드리웠다.",
			"Max는 불안한 기색이었다.",
			"이 동네, 아직 끝나지 않았다."
		],
		"english": [
			"The Guardian of Memories is gone.",
			"But the shadows deepened further.",
			"Max seemed uneasy.",
			"This town, it's not over yet."
		],
		"japanese": [
			"記憶の守護者はいなくなった。",
			"しかし、影はさらに深く伸びた。",
			"マックスは落ち着かない様子だった。",
			"この町は、まだ終わってない。"
		],
		"chinese": [
			"记忆的守护者消失了。",
			"然而，阴影更加深沉了。",
			"Max显得不安。",
			"这个小镇，还没结束。"
		],
		"french": [
			"Le Gardien des Souvenirs a disparu.",
			"Mais les ombres s'épaississaient davantage.",
			"Max semblait inquiet.",
			"Cette ville, ce n'est pas encore fini."
		],
		"spanish": [
			"El Guardián de los Recuerdos ha desaparecido.",
			"Pero las sombras se hicieron más profundas.",
			"Max parecía intranquilo.",
			"Este pueblo, aún no ha terminado."
		],
		"vietnamese": [
			"Người bảo vệ ký ức đã biến mất.",
			"Nhưng bóng tối lại càng sâu sắc hơn.",
			"Max có vẻ không yên.",
			"Thị trấn này, vẫn chưa kết thúc."
		],
		"thai": [
			"ผู้พิทักษ์ความทรงจำได้หายไปแล้ว",
			"แต่เงามืดกลับยิ่งทวีความมืดมิดขึ้น",
			"Max ดูไม่สบายใจ",
			"เมืองนี้ยังไม่จบ"
		],
		"hindi": [
			"यादों का रखवाला गायब हो गया है।",
			"लेकिन परछाइयां और गहरी हो गईं।",
			"मैक्स बेचैन लग रहा था।",
			"यह शहर, अभी खत्म नहीं हुआ है।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "사건 이후, 동네는 겉으로 평화를 찾은 듯했다.",
						"english": "After the incident, the town seemed to have found peace on the surface.",
						"japanese": "事件後、町は表向きは平和を取り戻したようだった。",
						"chinese": "事件之后，小镇表面上似乎恢复了平静。",
						"french": "Après l'incident, la ville semblait avoir retrouvé la paix en surface.",
						"spanish": "Después del incidente, el pueblo parecía haber encontrado la paz en la superficie.",
						"vietnamese": "Sau vụ việc, thị trấn dường như đã tìm thấy sự bình yên bề ngoài.",
						"thai": "หลังเกิดเรื่อง เมืองนี้ดูเหมือนจะสงบสุขภายนอก",
						"hindi": "घटना के बाद, शहर ऊपरी तौर पर शांतिपूर्ण लग रहा था।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"speaker": "max",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "야, 너 괜찮아 보여서 다행이다.",
						"english": "Hey, I'm glad you look okay.",
						"japanese": "よかった、君が元気そうで。",
						"chinese": "嘿，你看起来没事，真好。",
						"french": "Hé, je suis content que tu aies l'air d'aller bien.",
						"spanish": "Oye, me alegro de que te veas bien.",
						"vietnamese": "Này, may mà cậu trông vẫn ổn.",
						"thai": "เฮ้ ดีใจที่นายดูปกติดี",
						"hindi": "अरे, मुझे खुशी है कि तुम ठीक लग रहे हो।"
					},
					"emotion": "happy",
					"speaker": "max",
					"type": "speech"
				},
				{
					"content": {
						"korean": "Max? 갑자기 왜 왔어?",
						"english": "Max? Why are you suddenly here?",
						"japanese": "マックス？急にどうしたの？",
						"chinese": "Max？你怎么突然来了？",
						"french": "Max ? Pourquoi es-tu là soudainement ?",
						"spanish": "¿Max? ¿Por qué viniste de repente?",
						"vietnamese": "Max? Sao tự nhiên cậu lại đến?",
						"thai": "Max? ทำไมนายถึงมาที่นี่กะทันหัน?",
						"hindi": "मैक्स? तुम अचानक क्यों आए हो?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "max",
					"content": {
						"korean": "할 얘기가 좀 있어. 솔직히, 아직 좀 그래.",
						"english": "I have something to tell you. Honestly, it's still...",
						"japanese": "話したいことがあるんだ。正直、まだちょっとね。",
						"chinese": "我有点话想说。老实说，我还是有点…",
						"french": "J'ai quelque chose à te dire. Honnêtement, c'est encore un peu...",
						"spanish": "Tengo algo que decirte. Sinceramente, todavía es un poco...",
						"vietnamese": "Tớ có chuyện muốn nói. Thật lòng mà nói, tớ vẫn còn hơi...",
						"thai": "ฉันมีเรื่องจะคุยด้วย เอาจริง ๆ นะ มันก็ยัง...",
						"hindi": "मुझे कुछ बात करनी है। ईमानदारी से कहूं तो, यह अभी भी थोड़ा अजीब है।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "뭐가?",
						"english": "What is it?",
						"japanese": "何が？",
						"chinese": "什么？",
						"french": "Quoi ?",
						"spanish": "¿Qué?",
						"vietnamese": "Gì cơ?",
						"thai": "อะไร?",
						"hindi": "क्या?"
					}
				},
				{
					"type": "speech",
					"speaker": "max",
					"content": {
						"korean": "동네가… 뭔가 이상해. 느낌이 안 좋아.",
						"english": "The town... something's off. I have a bad feeling.",
						"japanese": "町が…何かおかしい。嫌な予感がする。",
						"chinese": "这个小镇…有点不对劲。我感觉不太好。",
						"french": "La ville... quelque chose ne va pas. J'ai un mauvais pressentiment.",
						"spanish": "El pueblo... algo anda mal. Tengo un mal presentimiento.",
						"vietnamese": "Thị trấn này... có gì đó không ổn. Tớ có linh cảm không lành.",
						"thai": "เมืองนี้...มีอะไรแปลก ๆ ฉันรู้สึกไม่ดีเลย",
						"hindi": "शहर... कुछ अजीब है। मुझे बुरा लग रहा है।"
					},
					"emotion": "sad"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "max",
					"spot": [
						4,
						2
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "max",
					"emotion": "sad",
					"content": {
						"korean": "봐봐. 저 벽에 낙서… '끝나지 않은 이야기'래.",
						"english": "Look. That graffiti on the wall... It says 'Unfinished Story'.",
						"japanese": "見て。あの壁の落書き…「終わらない物語」だって。",
						"chinese": "看。那墙上的涂鸦…写着“未完的故事”。",
						"french": "Regarde. Ce graffiti sur le mur... 'Histoire inachevée', il dit.",
						"spanish": "Mira. Ese grafiti en la pared... Dice 'Historia inconclusa'.",
						"vietnamese": "Nhìn kìa. Hình vẽ bậy trên tường... 'Câu chuyện chưa kết thúc'.",
						"thai": "ดูสิ ภาพวาดบนกำแพงนั่น... มันบอกว่า 'เรื่องราวที่ยังไม่จบ'",
						"hindi": "देखो। उस दीवार पर लिखी वो इबारत... 'अधूरी कहानी' लिखा है।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "누가 장난친 건가?",
						"english": "Was someone messing around?",
						"japanese": "誰かのいたずら？",
						"chinese": "谁的恶作剧吗？",
						"french": "C'est une blague ?",
						"spanish": "¿Alguien bromeó?",
						"vietnamese": "Ai đó đùa giỡn à?",
						"thai": "ใครมาแกล้งอะไรหรือเปล่า?",
						"hindi": "किसी ने मज़ाक किया होगा?"
					},
					"emotion": "base"
				},
				{
					"speaker": "max",
					"type": "speech",
					"content": {
						"korean": "아니. 이 근처만 오면 희미하게 노래 소리도 들려.",
						"english": "No. When I come near here, I faintly hear a song too.",
						"japanese": "違う。この近くに来ると、かすかに歌声も聞こえるんだ。",
						"chinese": "不。只要一靠近这里，就隐约能听到歌声。",
						"french": "Non. Quand je m'approche, j'entends aussi une faible chanson.",
						"spanish": "No. Cuando me acerco a este lugar, también escucho un canto débil.",
						"vietnamese": "Không. Cứ đến gần đây là tôi lại nghe thấy tiếng hát mờ nhạt.",
						"thai": "ไม่สิ พอมาใกล้ๆ ตรงนี้ ฉันได้ยินเสียงเพลงจางๆ ด้วย",
						"hindi": "नहीं। जब भी मैं यहाँ आती हूँ, मुझे हल्की-हल्की गाने की आवाज़ भी सुनाई देती है।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "설마….",
						"english": "No way...",
						"japanese": "まさか…。",
						"chinese": "难道说…",
						"french": "Ne me dis pas que...",
						"spanish": "No puede ser...",
						"vietnamese": "Không lẽ nào...",
						"thai": "ไม่จริงน่า...",
						"hindi": "कहीं..."
					},
					"emotion": "base"
				},
				{
					"speaker": "max",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "그때 일… 아직 끝난 게 아닐지도 몰라.",
						"english": "That incident... it might not be over yet.",
						"japanese": "あの時のこと…まだ終わってないのかもしれない。",
						"chinese": "当时那件事…也许还没有结束。",
						"french": "Ce qui s'est passé... ce n'est peut-être pas encore terminé.",
						"spanish": "Aquello... quizás aún no ha terminado.",
						"vietnamese": "Chuyện đó... có lẽ vẫn chưa kết thúc.",
						"thai": "เรื่องตอนนั้น... มันอาจจะยังไม่จบ",
						"hindi": "वो बात... शायद अभी ख़त्म नहीं हुई है।"
					}
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"speaker": "max",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "골목길마다 과거의 환영이 스쳐 지나갔다.",
						"english": "In every alleyway, visions of the past flickered by.",
						"japanese": "路地裏ごとに、過去の幻影が通り過ぎていった。",
						"chinese": "每条小巷里，都闪过过去的幻影。",
						"french": "À chaque ruelle, des visions du passé passaient.",
						"spanish": "En cada callejón, visiones del pasado se cruzaban.",
						"vietnamese": "Từng con hẻm, ảo ảnh quá khứ lướt qua.",
						"thai": "ภาพหลอนจากอดีตฉายผ่านไปในทุกตรอกซอกซอย",
						"hindi": "हर गली में, अतीत के साये गुज़र रहे थे।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "저건… 옛날 내 모습이잖아?",
						"english": "Is that... my old self?",
						"japanese": "あれは…昔の私じゃないか？",
						"chinese": "那是…我以前的样子吗？",
						"french": "C'est... mon ancien moi, n'est-ce pas ?",
						"spanish": "¿Esa es... mi yo del pasado?",
						"vietnamese": "Đó là... hình ảnh tôi ngày xưa à?",
						"thai": "นั่นมัน... ตัวฉันในอดีตนี่นา?",
						"hindi": "वो... मेरा पुराना रूप है ना?"
					},
					"emotion": "sad"
				},
				{
					"speaker": "max",
					"type": "speech",
					"content": {
						"korean": "나도 봐. 자꾸 오래된 일들이… 눈앞에 나타나.",
						"english": "Look, me too. Old events keep... appearing before my eyes.",
						"japanese": "私も見て。古い出来事が…目の前に現れるの。",
						"chinese": "我在这里。那些陈年旧事…不断在我眼前浮现。",
						"french": "Regarde, moi aussi. De vieux événements ne cessent... d'apparaître sous mes yeux.",
						"spanish": "Mira, a mí también. Cosas antiguas no dejan de... aparecer ante mis ojos.",
						"vietnamese": "Tôi cũng thấy. Những chuyện cũ cứ... hiện ra trước mắt.",
						"thai": "ฉันก็เห็น เรื่องเก่าๆ... มันกลับมาปรากฏตรงหน้า",
						"hindi": "मुझे भी देखो। पुरानी बातें... मेरी आँखों के सामने आ रही हैं।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그냥 환각이겠지.",
						"english": "It's probably just a hallucination.",
						"japanese": "ただの幻覚だろう。",
						"chinese": "应该只是幻觉吧。",
						"french": "Ce n'est probablement qu'une hallucination.",
						"spanish": "Probablemente sea solo una alucinación.",
						"vietnamese": "Chắc là ảo giác thôi.",
						"thai": "น่าจะเป็นแค่ภาพหลอนแหละ",
						"hindi": "बस एक भ्रम होगा।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "max",
					"emotion": "angry",
					"content": {
						"korean": "아니. 이건 달라. 우리가 외면한 기억들이… 살아 움직이는 거야.",
						"english": "No. This is different. Memories we've ignored... are coming alive.",
						"japanese": "違う。これは違う。私たちが目を背けてきた記憶が…生きているんだ。",
						"chinese": "不。这不一样。那些我们选择遗忘的记忆…正在苏醒。",
						"french": "Non. C'est différent. Les souvenirs que nous avons ignorés... prennent vie.",
						"spanish": "No. Esto es diferente. Los recuerdos que hemos ignorado... están cobrando vida.",
						"vietnamese": "Không. Cái này khác. Những ký ức chúng ta đã lãng quên... đang sống lại.",
						"thai": "ไม่สิ นี่มันต่างออกไป ความทรงจำที่เราเมินเฉย... กำลังมีชีวิตขึ้นมา",
						"hindi": "नहीं। ये अलग है। वो यादें जिन्हें हमने नज़रअंदाज़ किया था... अब ज़िंदा हो रही हैं।"
					}
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						2,
						2
					],
					"duration_ms": 500,
					"speaker": "max",
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "오래된 시계탑의 시계가 거꾸로 돌기 시작했다.",
						"english": "The old clock tower's clock started ticking backward.",
						"japanese": "古い時計台の時計が逆回り始めた。",
						"chinese": "老旧钟楼的时钟开始倒转。",
						"french": "L'horloge de la vieille tour a commencé à tourner à l'envers.",
						"spanish": "El reloj de la vieja torre comenzó a girar hacia atrás.",
						"vietnamese": "Đồng hồ của tháp đồng hồ cũ đã bắt đầu quay ngược.",
						"thai": "นาฬิกาบนหอนาฬิกาเก่าเริ่มเดินถอยหลัง.",
						"hindi": "पुराने घंटाघर की घड़ी उलटी दिशा में चलने लगी।"
					}
				},
				{
					"speaker": "max",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "시계탑도 이상해! 시간이 거꾸로 흘러!",
						"english": "The clock tower is strange too! Time is flowing backward!",
						"japanese": "時計台もおかしい！時間が逆流してる！",
						"chinese": "钟楼也出问题了！时间在倒流！",
						"french": "La tour de l'horloge est bizarre aussi ! Le temps s'écoule à l'envers !",
						"spanish": "¡La torre del reloj también es extraña! ¡El tiempo fluye hacia atrás!",
						"vietnamese": "Tháp đồng hồ cũng lạ quá! Thời gian đang trôi ngược!",
						"thai": "หอนาฬิกาก็แปลก! เวลากำลังไหลย้อนกลับ!",
						"hindi": "घंटाघर भी अजीब है! समय उलटा चल रहा है!"
					}
				},
				{
					"content": {
						"korean": "미쳤어….",
						"english": "It's insane...",
						"japanese": "狂ってる…。",
						"chinese": "疯了……",
						"french": "C'est fou...",
						"spanish": "Es una locura...",
						"vietnamese": "Điên rồi...",
						"thai": "บ้าไปแล้ว...",
						"hindi": "ये तो पागलपन है..."
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "max",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이대로 두면… 동네가 과거에 완전히 잠식될 거야.",
						"english": "If we leave it like this... the town will be completely swallowed by the past.",
						"japanese": "このままでは…町は完全に過去に飲み込まれてしまう。",
						"chinese": "如果任由它这样…小镇就会被过去彻底吞噬。",
						"french": "Si nous laissons faire... la ville sera complètement engloutie par le passé.",
						"spanish": "Si lo dejamos así... el pueblo será completamente engullido por el pasado.",
						"vietnamese": "Cứ để thế này... cả thị trấn sẽ bị quá khứ nuốt chửng hoàn toàn.",
						"thai": "ถ้าปล่อยไว้แบบนี้... เมืองจะถูกอดีตกลืนกินไปจนหมด.",
						"hindi": "अगर ऐसे ही छोड़ दिया तो... पूरा मोहल्ला अतीत में समा जाएगा।"
					}
				},
				{
					"content": {
						"korean": "그럴 순 없어. 우리가 막아야 해.",
						"english": "We can't let that happen. We have to stop it.",
						"japanese": "そんなことはさせない。私たちが止めなければ。",
						"chinese": "不能那样。我们必须阻止它。",
						"french": "On ne peut pas laisser ça. Nous devons l'arrêter.",
						"spanish": "No podemos permitirlo. Tenemos que detenerlo.",
						"vietnamese": "Không thể để chuyện đó xảy ra. Chúng ta phải ngăn chặn.",
						"thai": "ปล่อยให้เป็นแบบนั้นไม่ได้. เราต้องหยุดมัน.",
						"hindi": "ऐसा नहीं हो सकता। हमें रोकना होगा।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "오랜 과거의 잔재가 형체를 갖췄다.",
						"english": "The remnants of a distant past have taken form.",
						"japanese": "遠い過去の残滓が形を成した。",
						"chinese": "遥远过去的残余已具形。",
						"french": "Les vestiges d'un passé lointain ont pris forme.",
						"spanish": "Los vestigios de un pasado lejano han tomado forma.",
						"vietnamese": "Tàn dư của quá khứ xa xưa đã thành hình.",
						"thai": "เศษซากของอดีตกาลได้ก่อร่างขึ้น.",
						"hindi": "सुदूर अतीत के अवशेषों ने आकार ले लिया है।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "감히… 잊힌 과거를 거스르려 하는가?",
						"english": "How dare you... defy the forgotten past?",
						"japanese": "敢えて…忘れ去られた過去に逆らおうとするのか？",
						"chinese": "竟敢…反抗被遗忘的过去？",
						"french": "Comment oses-tu... défier le passé oublié ?",
						"spanish": "¿Cómo osas... desafiar el pasado olvidado?",
						"vietnamese": "Dám... chống lại quá khứ bị lãng quên sao?",
						"thai": "กล้าดีอย่างไร... ถึงท้าทายอดีตที่ถูกลืมเลือน?",
						"hindi": "तुम्हारी हिम्मत कैसे हुई... भूले हुए अतीत को चुनौती देने की?"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "너 따위에게 이 동네를 넘길 순 없어.",
						"english": "I can't let a nobody like you take this town.",
						"japanese": "お前ごときにこの町を渡すわけにはいかない。",
						"chinese": "我绝不会把这个小镇交给你这种货色。",
						"french": "Je ne peux pas laisser un nul comme toi prendre cette ville.",
						"spanish": "No puedo dejar que alguien como tú se quede con este pueblo.",
						"vietnamese": "Không thể giao thị trấn này cho kẻ như ngươi được.",
						"thai": "ข้าไม่ยอมให้คนอย่างเจ้ามายึดครองเมืองนี้หรอก.",
						"hindi": "मैं तुम जैसे को यह मोहल्ला नहीं दे सकता।"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "너희의 현재는… 이미 우리의 것이다.",
						"english": "Your present... is already ours.",
						"japanese": "お前たちの現在は…すでに我々のものだ。",
						"chinese": "你们的现在…早已是我们的了。",
						"french": "Votre présent... est déjà le nôtre.",
						"spanish": "Vuestro presente... ya es nuestro.",
						"vietnamese": "Hiện tại của các ngươi... đã là của chúng ta rồi.",
						"thai": "ปัจจุบันของพวกเจ้า... เป็นของเราไปแล้ว.",
						"hindi": "तुम्हारा वर्तमान... पहले से ही हमारा है।"
					}
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "이건 시작일 뿐… 끝나지 않은 이야기는… 계속된다.",
						"english": "This is just the beginning... The unfinished story... continues.",
						"japanese": "これは始まりに過ぎない…終わらない物語は…続く。",
						"chinese": "这只是开始…未完的故事…仍在继续。",
						"french": "Ce n'est que le début... L'histoire inachevée... continue.",
						"spanish": "Esto es solo el principio... La historia inacabada... continúa.",
						"vietnamese": "Đây chỉ là khởi đầu... Câu chuyện chưa kết thúc... vẫn tiếp diễn.",
						"thai": "นี่เป็นแค่จุดเริ่มต้น... เรื่องราวที่ยังไม่จบสิ้น... จะดำเนินต่อไป.",
						"hindi": "यह तो बस शुरुआत है... अनकही कहानी... जारी रहेगी।"
					},
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…끝난 게 아니었어.",
						"english": "...It wasn't over.",
						"japanese": "「…まだ終わってなかった。」",
						"chinese": "“……还没有结束。”",
						"french": "...Ce n'était pas fini.",
						"spanish": "...No había terminado.",
						"vietnamese": "...Vẫn chưa kết thúc.",
						"thai": "...มันยังไม่จบลง",
						"hindi": "...यह खत्म नहीं हुआ था।"
					}
				},
				{
					"spot": [
						3,
						2
					],
					"speaker": "max",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "max",
					"content": {
						"korean": "괜찮아? 방금… 이상한 느낌이 들었어.",
						"english": "Are you alright? Just now... I felt something strange.",
						"japanese": "「大丈夫？ 今…変な感じがした。」",
						"chinese": "“你没事吧？刚才……我感觉到了奇怪的东西。”",
						"french": "Tu vas bien ? Je viens de... ressentir quelque chose d'étrange.",
						"spanish": "¿Estás bien? Acabo de... sentir algo extraño.",
						"vietnamese": "Bạn ổn chứ? Vừa nãy... tôi cảm thấy có gì đó lạ.",
						"thai": "คุณไม่เป็นไรนะ? เมื่อกี้... ฉันรู้สึกแปลกๆ",
						"hindi": "क्या तुम ठीक हो? अभी... मुझे कुछ अजीब सा महसूस हुआ।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그림자는 잠시 물러났지만, 동네는 여전히 불안했다.",
						"english": "The shadows receded for a moment, but the town remained uneasy.",
						"japanese": "「影は一時的に退いたが、街は依然として不安だった。」",
						"chinese": "“影子暂时退去了，但小镇仍然不安。”",
						"french": "Les ombres se sont retirées un instant, mais la ville restait inquiète.",
						"spanish": "Las sombras retrocedieron un momento, pero el pueblo seguía inquieto.",
						"vietnamese": "Bóng tối tạm thời rút lui, nhưng thị trấn vẫn còn bất an.",
						"thai": "เงาได้ถอยร่นไปชั่วขณะ แต่เมืองยังคงไม่สงบ",
						"hindi": "परछाइयां कुछ देर के लिए हट गईं, लेकिन कस्बा अब भी बेचैन था।"
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "아직, 새로운 위협이 남아 있었다.",
						"english": "Still, a new threat remained.",
						"japanese": "「まだ、新たな脅威が残っていた。」",
						"chinese": "“仍然，新的威胁依然存在。”",
						"french": "Pourtant, une nouvelle menace subsistait.",
						"spanish": "Aún así, una nueva amenaza permanecía.",
						"vietnamese": "Vẫn còn một mối đe dọa mới.",
						"thai": "ยังคงมีภัยคุกคามใหม่หลงเหลืออยู่",
						"hindi": "अभी भी, एक नया खतरा बना हुआ था।"
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "하찮은 저항… 과거에 삼켜질 뿐이다.",
						"english": "Paltry resistance... merely to be swallowed by the past.",
						"japanese": "「取るに足らない抵抗…過去に飲み込まれるだけだ。」",
						"chinese": "“微不足道的抵抗……终将被过去吞噬。”",
						"french": "Résistance insignifiante... vouée à être engloutie par le passé.",
						"spanish": "Resistencia insignificante... solo para ser engullida por el pasado.",
						"vietnamese": "Sự kháng cự yếu ớt... chỉ để bị nuốt chửng bởi quá khứ.",
						"thai": "การต่อต้านที่ไร้ค่า... จะถูกอดีตกลืนกินไปเท่านั้น",
						"hindi": "तुच्छ प्रतिरोध... बस अतीत में समा जाने के लिए।"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "…아직 끝나지 않았어. 포기하지 않아.",
						"english": "...It's not over yet. I won't give up.",
						"japanese": "「…まだ終わってない。諦めない。」",
						"chinese": "“……还没有结束。我不会放弃的。”",
						"french": "...Ce n'est pas encore fini. Je n'abandonnerai pas.",
						"spanish": "...Todavía no ha terminado. No me rindo.",
						"vietnamese": "...Vẫn chưa kết thúc. Tôi sẽ không bỏ cuộc.",
						"thai": "...มันยังไม่จบลง ฉันจะไม่ยอมแพ้",
						"hindi": "...अभी खत्म नहीं हुआ है। मैं हार नहीं मानूंगा।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"speaker": "max",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "정신 차려! 여기서 끝낼 순 없어!",
						"english": "Snap out of it! We can't end it here!",
						"japanese": "「しっかりしろ！ここで終わらせるわけにはいかない！」",
						"chinese": "“振作起来！不能在这里结束！”",
						"french": "Reprends-toi ! On ne peut pas en finir ici !",
						"spanish": "¡Reacciona! ¡No podemos terminarlo aquí!",
						"vietnamese": "Tỉnh táo lại đi! Chúng ta không thể kết thúc ở đây!",
						"thai": "ตั้งสติหน่อย! เราจะจบลงที่นี่ไม่ได้!",
						"hindi": "होश में आओ! हम इसे यहाँ खत्म नहीं कर सकते!"
					},
					"type": "speech",
					"speaker": "max"
				}
			],
			"id": 15
		}
	]
} as const;
