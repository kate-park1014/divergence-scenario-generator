export const scenario_snowy_skaalbane_83_04 = {
	"scenario_id": "snowy_skaalbane_83_04",
	"order": 4,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"frost": {
			"id": "mon_942bca3b-33e7-4b14-98e5-ec1e2dc78d5b",
			"name": {
				"korean": "서리",
				"english": "Frost",
				"japanese": "霜",
				"chinese": "霜",
				"french": "Givre",
				"spanish": "Escarcha",
				"vietnamese": "Băng Giá",
				"thai": "น้ำแข็ง",
				"hindi": "पाला"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/0a8c2f92-0cf9-413d-0b33-8e0204caae00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/df60b327-4cc2-435b-67e0-cffb4c319900/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"차가운 심장이 맥동하는 탑. 그 안에서 온기를 감지했다.",
			"빼앗긴 것들은, 그 온기마저 빼앗기고 있었다.",
			"프로스트는 알았다. 이 미지근함은… 죽은 것들의 흔적임을."
		],
		"english": [
			"A tower with a cold, pulsating heart. Within, warmth was sensed.",
			"What was stolen, even that warmth was being taken.",
			"Frost knew. This lukewarmness… was a trace of the departed."
		],
		"japanese": [
			"冷たい心臓が脈打つ塔。その中で温もりを感知した。",
			"奪われたものは、その温もりさえも奪われつつあった。",
			"フロストは悟った。この生ぬるさは…死せるものの痕跡であることを。"
		],
		"chinese": [
			"冰冷心脏跳动的塔。其中，我察觉到一丝暖意。",
			"被剥夺之物，连那份暖意也正被夺走。",
			"弗罗斯特明白了。这种微温……是逝者的痕迹。"
		],
		"french": [
			"Une tour au cœur froid et pulsant. En son sein, une chaleur fut détectée.",
			"Ce qui avait été volé, même cette chaleur était en train d'être arrachée.",
			"Frost savait. Cette tiédeur… était une trace des défunts."
		],
		"spanish": [
			"Una torre con un corazón frío y palpitante. Dentro, se detectó calor.",
			"Lo que fue arrebatado, incluso ese calor estaba siendo despojado.",
			"Frost lo supo. Esta tibieza… era un rastro de los muertos."
		],
		"vietnamese": [
			"Ngọn tháp với trái tim lạnh giá đang đập. Bên trong, cảm nhận được hơi ấm.",
			"Những thứ đã bị cướp đi, ngay cả hơi ấm đó cũng đang bị lấy mất.",
			"Frost nhận ra. Sự ấm áp lờ mờ này… là dấu vết của những kẻ đã chết."
		],
		"thai": [
			"หอคอยที่มีหัวใจเย็นยะเยือกเต้นระรัว ภายในนั้นสัมผัสได้ถึงไออุ่น",
			"สิ่งที่ถูกช่วงชิงไป แม้แต่ไออุ่นนั้นก็กำลังถูกช่วงชิงไปอีก",
			"ฟรอสต์รู้ดี ความอุ่นที่เอื่อยเฉื่อยนี้… คือร่องรอยของผู้ตาย"
		],
		"hindi": [
			"एक ठंडे, धड़कते दिल वाला बुर्ज। उसके भीतर, गर्माहट महसूस हुई।",
			"जो छीना गया था, वह गर्माहट भी छीनी जा रही थी।",
			"फ्रॉस्ट समझ गया। यह गुनगुनापन… मृतकों का निशान था।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "핵에 가까워질수록 푸른 박동이 발밑의 얼음을 통해 온몸으로 전해졌다.",
						"english": "As we neared the core, a blue pulse throbbed through the ice beneath our feet, filling our bodies.",
						"japanese": "核に近づくほど、青い鼓動が足元の氷を通じて全身に伝わった。",
						"chinese": "越是靠近核心，蓝色的脉动越是透过脚下的冰层传遍全身。",
						"french": "Plus nous approchions du noyau, plus une pulsation bleue se propageait par la glace sous nos pieds, à travers tout notre corps.",
						"spanish": "Cuanto más nos acercábamos al núcleo, un pulso azul se transmitía a través del hielo bajo nuestros pies, por todo el cuerpo.",
						"vietnamese": "Càng đến gần lõi, nhịp đập xanh lam càng truyền qua lớp băng dưới chân, lan khắp cơ thể.",
						"thai": "ยิ่งเข้าใกล้แกนกลางเท่าไร ชีพจรสีน้ำเงินก็ยิ่งส่งผ่านน้ำแข็งใต้เท้าไปทั่วร่าง",
						"hindi": "जैसे-जैसे हम कोर के करीब आते गए, पैरों के नीचे की बर्फ से एक नीली धड़कन पूरे शरीर में फैल गई।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "frost",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…이상해. 이 얼음.",
						"english": "...Strange. This ice.",
						"japanese": "…おかしい。この氷。",
						"chinese": "……奇怪。这冰。",
						"french": "...Étrange. Cette glace.",
						"spanish": "...Extraño. Este hielo.",
						"vietnamese": "...Lạ thật. Tảng băng này.",
						"thai": "…แปลกจัง น้ำแข็งนี่",
						"hindi": "...अजीब है। यह बर्फ।"
					},
					"type": "speech",
					"speaker": "frost"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "뭐가?",
						"english": "What is?",
						"japanese": "何が？",
						"chinese": "什么？",
						"french": "Quoi ?",
						"spanish": "¿Qué?",
						"vietnamese": "Cái gì?",
						"thai": "อะไร?",
						"hindi": "क्या?"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이 차가움 속에서… 따뜻함이 느껴져. 생명의 온기 같은.",
						"english": "Within this coldness... I feel warmth. Like the warmth of life.",
						"japanese": "この冷たさの中に…温かさを感じる。生命の温もりのように。",
						"chinese": "在这冰冷之中……我感受到了温暖。仿佛是生命的温度。",
						"french": "Dans ce froid… je ressens de la chaleur. Comme la chaleur de la vie.",
						"spanish": "En esta frialdad... siento calidez. Como el calor de la vida.",
						"vietnamese": "Trong cái lạnh lẽo này... tôi cảm nhận được sự ấm áp. Như hơi ấm của sự sống vậy.",
						"thai": "ในความเย็นเยียบนี้… สัมผัสได้ถึงความอบอุ่น เหมือนไออุ่นแห่งชีวิต",
						"hindi": "इस ठंडक में… गर्माहट महसूस हो रही है। जैसे जीवन की गर्माहट।"
					},
					"type": "speech",
					"speaker": "frost"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "frost",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "frost",
					"content": {
						"korean": "점점 강해져. 이 미지근함.",
						"english": "It's getting stronger. This lukewarmness.",
						"japanese": "どんどん強くなる。この生ぬるさが。",
						"chinese": "越来越强了。这种微温。",
						"french": "Elle s'intensifie. Cette tiédeur.",
						"spanish": "Se está haciendo más fuerte. Esta tibieza.",
						"vietnamese": "Nó ngày càng mạnh hơn. Sự ấm áp lờ mờ này.",
						"thai": "มันแรงขึ้นเรื่อยๆ ความอุ่นที่เอื่อยเฉื่อยนี่",
						"hindi": "यह और तेज़ हो रहा है। यह गुनगुनापन।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "그게 왜? 따뜻한 게 좋잖아.",
						"english": "Why? Warmth is good, isn't it?",
						"japanese": "それがどうしたの？温かい方がいいじゃない。",
						"chinese": "那又怎样？温暖不是很好吗？",
						"french": "Pourquoi ? La chaleur, c'est bien, non ?",
						"spanish": "¿Y qué? Lo cálido es bueno, ¿no?",
						"vietnamese": "Sao lại thế? Ấm áp thì tốt mà.",
						"thai": "ทำไมล่ะ? อบอุ่นมันดีไม่ใช่เหรอ?",
						"hindi": "ऐसा क्यों? गर्माहट अच्छी होती है, है ना?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "아니. 이건… 자연스러운 온기가 아니야. 너무 인위적이야.",
						"english": "No. This isn't... natural warmth. It's too artificial.",
						"japanese": "違う。これは…自然な温もりじゃない。あまりに不自然だ。",
						"chinese": "不。这不是……自然的温暖。它太人工了。",
						"french": "Non. Ce n'est pas… une chaleur naturelle. C'est trop artificiel.",
						"spanish": "No. Esto no es… calidez natural. Es demasiado artificial.",
						"vietnamese": "Không. Đây không phải... hơi ấm tự nhiên. Nó quá nhân tạo.",
						"thai": "ไม่ นี่ไม่ใช่… ไออุ่นจากธรรมชาติ มันสังเคราะห์เกินไป",
						"hindi": "नहीं। यह… प्राकृतिक गर्माहट नहीं है। यह बहुत कृत्रिम है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "frost"
				},
				{
					"type": "speech",
					"speaker": "frost",
					"content": {
						"korean": "어딘가에서… 빼앗아 온 것 같아.",
						"english": "It feels like it was taken... from somewhere.",
						"japanese": "どこかから…奪ってきたようです。",
						"chinese": "好像是从某个地方…抢过来的。",
						"french": "On dirait que ça a été pris... de quelque part.",
						"spanish": "Parece que fue arrebatado... de algún lugar.",
						"vietnamese": "Có vẻ như nó đã bị lấy... từ đâu đó.",
						"thai": "รู้สึกเหมือนถูกแย่งชิงมา…จากที่ไหนสักแห่ง",
						"hindi": "लगता है यह कहीं से... छीन लिया गया है।"
					},
					"emotion": "angry"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						1
					],
					"speaker": "frost",
					"action": "enter"
				},
				{
					"speaker": "frost",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이 박동과 함께 느껴지는 온기… 심장을 울려.",
						"english": "This warmth felt with the beat... it echoes in my heart.",
						"japanese": "この鼓動と共に感じる温もり…心に響く。",
						"chinese": "随着这跳动而感受到的温暖…敲击着心脏。",
						"french": "Cette chaleur ressentie avec ce battement... ça résonne dans mon cœur.",
						"spanish": "Esta calidez que siento con cada latido... resuena en mi corazón.",
						"vietnamese": "Sự ấm áp cùng nhịp đập này... làm rung động trái tim.",
						"thai": "ความอบอุ่นที่สัมผัสได้พร้อมจังหวะนี้…สะท้อนในหัวใจ",
						"hindi": "इस धड़कन के साथ महसूस होने वाली गरमाहट... दिल को छू जाती है।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "흡수된 것들이 하나로 뛰는 맥박이라고 했지.",
						"english": "You said the absorbed things beat as one pulse.",
						"japanese": "吸収されたものが一つになって脈打つと言ったね。",
						"chinese": "你说过，被吸收的东西会以一个脉搏跳动。",
						"french": "Tu as dit que les choses absorbées battaient comme un seul pouls.",
						"spanish": "Dijiste que lo absorbido late como un solo pulso.",
						"vietnamese": "Ngươi đã nói những thứ bị hấp thụ sẽ đập như một nhịp.",
						"thai": "คุณบอกว่าสิ่งที่ถูกดูดซับเต้นเป็นจังหวะเดียวกัน",
						"hindi": "तुमने कहा था कि अवशोषित चीज़ें एक ही धड़कन में धड़कती हैं।"
					}
				},
				{
					"type": "speech",
					"speaker": "frost",
					"emotion": "sad",
					"content": {
						"korean": "그 맥박이… 온기를 빨아들이고 있어.",
						"english": "That pulse... is sucking in the warmth.",
						"japanese": "その脈拍が…温もりを吸い取っている。",
						"chinese": "那个脉搏…正在吸取温暖。",
						"french": "Ce pouls... absorbe la chaleur.",
						"spanish": "Ese pulso... está absorbiendo la calidez.",
						"vietnamese": "Nhịp đập đó... đang hút lấy sự ấm áp.",
						"thai": "จังหวะนั้น…กำลังดูดความอบอุ่นไป",
						"hindi": "वह धड़कन... गरमाहट सोख रही है।"
					}
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "그럼 우리가 지금까지 본 얼굴들도….",
						"english": "Then the faces we've seen so far...",
						"japanese": "じゃあ、私たちが今まで見てきた顔も…",
						"chinese": "那么我们至今为止看到的那些脸也…",
						"french": "Alors les visages que nous avons vus jusqu'à présent...",
						"spanish": "Entonces las caras que hemos visto hasta ahora...",
						"vietnamese": "Vậy thì những khuôn mặt chúng ta đã thấy từ trước đến nay...",
						"thai": "ถ้าอย่างนั้นใบหน้าที่เราเคยเห็นมาก็…",
						"hindi": "तो वे चेहरे भी जो हमने अब तक देखे हैं..."
					}
				},
				{
					"type": "speech",
					"speaker": "frost",
					"content": {
						"korean": "그 온기의 주인들이겠지.",
						"english": "...must be the owners of that warmth.",
						"japanese": "…その温もりの持ち主たちなのだろう。",
						"chinese": "…就是那份温暖的主人吧。",
						"french": "...doivent être les propriétaires de cette chaleur.",
						"spanish": "...deben ser los dueños de esa calidez.",
						"vietnamese": "...chắc hẳn là chủ nhân của sự ấm áp đó.",
						"thai": "…คงเป็นเจ้าของความอบอุ่นนั้น",
						"hindi": "...उस गरमाहट के मालिक होंगे।"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						2,
						1
					],
					"action": "enter",
					"speaker": "frost",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "더 가까워질수록 얼음이… 사람 온기처럼 미지근해.",
						"english": "The closer we get, the ice... becomes lukewarm like human warmth.",
						"japanese": "近づくほど氷が…人の温もりのように生温かい。",
						"chinese": "越靠近，冰就…像人的体温一样温热。",
						"french": "Plus on s'approche, plus la glace... devient tiède comme la chaleur humaine.",
						"spanish": "Cuanto más nos acercamos, el hielo... se vuelve tibio como el calor humano.",
						"vietnamese": "Càng đến gần, băng… càng trở nên ấm như hơi ấm của con người.",
						"thai": "ยิ่งเข้าใกล้ น้ำแข็ง…ยิ่งอุ่นเหมือนไออุ่นของคน",
						"hindi": "जितना करीब आते हैं, बर्फ... इंसान की गरमाहट की तरह गुनगुनी हो जाती है।"
					},
					"emotion": "sad",
					"speaker": "frost",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…점점 소름 돋네.",
						"english": "...It's getting more and more creepy.",
						"japanese": "…だんだん鳥肌が立ってきた。",
						"chinese": "…越来越毛骨悚然了。",
						"french": "...C'est de plus en plus effrayant.",
						"spanish": "...Cada vez da más escalofríos.",
						"vietnamese": "...Càng lúc càng rợn người.",
						"thai": "…ขนลุกขึ้นเรื่อยๆ",
						"hindi": "...धीरे-धीरे रोंगटे खड़े हो रहे हैं।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "이 따뜻함… 빼앗은 거야.",
						"english": "This warmth... it was stolen.",
						"japanese": "この温かさ…奪われたんだ。",
						"chinese": "这份温暖…是被抢走的。",
						"french": "Cette chaleur... a été volée.",
						"spanish": "Esta calidez... fue robada.",
						"vietnamese": "Sự ấm áp này... đã bị cướp đi.",
						"thai": "ความอบอุ่นนี้…ถูกขโมยมา",
						"hindi": "यह गरमाहट... छीन ली गई है।"
					},
					"type": "speech",
					"speaker": "frost"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "저 심장은 우리한테서 훔친 온기로 뛰고 있어.",
						"english": "That heart is beating with the warmth stolen from us.",
						"japanese": "あの心臓は私たちから盗んだ温もりで動いている。",
						"chinese": "那颗心脏正用从我们这里偷走的温暖跳动着。",
						"french": "Ce cœur bat avec la chaleur qui nous a été volée.",
						"spanish": "Ese corazón late con el calor que nos fue robado.",
						"vietnamese": "Trái tim đó đang đập bằng hơi ấm bị đánh cắp từ chúng ta.",
						"thai": "หัวใจดวงนั้นเต้นด้วยไออุ่นที่ขโมยไปจากเรา",
						"hindi": "वह दिल हमारी चुराई हुई गरमाहट से धड़क रहा है।"
					},
					"type": "speech",
					"speaker": "frost"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "sad",
					"content": {
						"korean": "…부질없는 짓. 진정한 심장은… 아직 뛰고 있다.",
						"english": "...Futile. The true heart… still beats.",
						"japanese": "…無駄なことだ。真の心臓は…まだ脈打っている。",
						"chinese": "…徒劳无功。真正的心脏…仍在跳动。",
						"french": "…Inutile. Le vrai cœur… bat toujours.",
						"spanish": "…Inútil. El verdadero corazón… aún late.",
						"vietnamese": "…Vô ích thôi. Trái tim thật sự… vẫn còn đập.",
						"thai": "…ไร้ประโยชน์ หัวใจที่แท้จริง…ยังคงเต้นอยู่",
						"hindi": "…व्यर्थ। असली हृदय… अभी भी धड़क रहा है।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "진정한 심장…?",
						"english": "The true heart…?",
						"japanese": "真の心臓…？",
						"chinese": "真正的心脏…？",
						"french": "Le vrai cœur… ?",
						"spanish": "¿El verdadero corazón…?",
						"vietnamese": "Trái tim thật sự…?",
						"thai": "หัวใจที่แท้จริง…?",
						"hindi": "असली हृदय…?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "빼앗긴 온기가 희미하게 돌아왔다. 그러나 불안정한 심장은 더 깊은 곳을 가리켰다.",
						"english": "The stolen warmth faintly returned. But the unstable heart pointed to a deeper place.",
						"japanese": "奪われた温もりが、かすかに戻ってきた。しかし、不安定な心臓は、さらに深い場所を指し示した。",
						"chinese": "被夺走的温暖隐约回归。然而，那不安的心脏指向了更深之处。",
						"french": "La chaleur volée revint faiblement. Mais le cœur instable indiquait un endroit plus profond.",
						"spanish": "El calor robado regresó débilmente. Pero el corazón inestable señalaba un lugar más profundo.",
						"vietnamese": "Hơi ấm bị tước đoạt mờ nhạt trở lại. Nhưng trái tim bất ổn lại chỉ về một nơi sâu hơn.",
						"thai": "ความอบอุ่นที่ถูกช่วงชิงกลับมาจาง ๆ แต่หัวใจที่ไม่มั่นคงกลับชี้ไปยังสถานที่ที่ลึกกว่าเดิม",
						"hindi": "छीनी हुई गर्माहट हल्की सी लौट आई। परन्तु अस्थिर हृदय ने एक गहरी जगह की ओर इशारा किया।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "탑의 심장이 거칠게 울리며 모든 것을 집어삼켰다.",
						"english": "The tower's heart roared violently, devouring everything.",
						"japanese": "塔の心臓が荒々しく鳴り響き、全てを飲み込んだ。",
						"chinese": "塔的心脏剧烈轰鸣，吞噬了一切。",
						"french": "Le cœur de la tour rugit violemment, dévorant tout.",
						"spanish": "El corazón de la torre rugió violentamente, devorándolo todo.",
						"vietnamese": "Trái tim của tòa tháp vang lên dữ dội, nuốt chửng mọi thứ.",
						"thai": "หัวใจของหอคอยคำรามกึกก้อง กลืนกินทุกสิ่ง",
						"hindi": "मीनार का हृदय ज़ोर से गड़गड़ाया और सब कुछ निगल गया।"
					},
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "네 온기마저… 나의 것이 될 것이다.",
						"english": "Even your warmth... shall be mine.",
						"japanese": "お前の温もりすら…俺のものになるだろう。",
						"chinese": "连你的温暖…都将属于我。",
						"french": "Même ta chaleur… sera mienne.",
						"spanish": "Hasta tu calor… será mío.",
						"vietnamese": "Ngay cả hơi ấm của ngươi... cũng sẽ là của ta.",
						"thai": "แม้แต่ความอบอุ่นของเจ้า...ก็จะเป็นของข้า",
						"hindi": "तुम्हारी गर्माहट भी... मेरी होगी।"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "…절대 빼앗기지 않아.",
						"english": "...I will never let it be taken.",
						"japanese": "…絶対に奪わせない。",
						"chinese": "…绝不会被夺走。",
						"french": "...Je ne le perdrai jamais.",
						"spanish": "...Nunca lo perderé.",
						"vietnamese": "...Tuyệt đối không để bị cướp đi.",
						"thai": "...ไม่มีวันที่จะถูกแย่งไปได้เด็ดขาด",
						"hindi": "...मैं इसे कभी छीनने नहीं दूँगा।"
					}
				}
			],
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "frost",
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이 온기를… 돌려줘야 해.",
						"english": "I must return this warmth...",
						"japanese": "この温もりを…返さなければ。",
						"chinese": "我必须…归还这份温暖。",
						"french": "Je dois rendre cette chaleur…",
						"spanish": "Debo devolver este calor…",
						"vietnamese": "Ta phải trả lại hơi ấm này…",
						"thai": "ข้าต้องคืนความอบอุ่นนี้…",
						"hindi": "मुझे यह गर्माहट लौटानी होगी..."
					},
					"type": "speech",
					"speaker": "frost"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "그 순간, 거대한 그림자가 앞을 가로막았다.",
						"english": "At that moment, a massive shadow blocked the way.",
						"japanese": "その瞬間、巨大な影が道を阻んだ。",
						"chinese": "就在那时，一道巨大的黑影挡住了去路。",
						"french": "À cet instant, une ombre gigantesque barra le chemin.",
						"spanish": "En ese instante, una sombra gigantesca bloqueó el camino.",
						"vietnamese": "Ngay lúc đó, một bóng đen khổng lồ chặn lối.",
						"thai": "ในพริบตานั้น เงาขนาดมหึมาก็ขวางทางไว้",
						"hindi": "उसी पल, एक विशाल परछाई ने रास्ता रोक लिया।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "빼앗긴 온기? 그저 내가 거둬들인 것일 뿐.",
						"english": "Stolen warmth? I merely gathered it.",
						"japanese": "奪われた温もりだと？ただ私が集めただけだ。",
						"chinese": "被夺走的温暖？那不过是我收集来的罢了。",
						"french": "Une chaleur volée ? Je n'ai fait que la récolter.",
						"spanish": "¿Calor robado? Yo solo lo recogí.",
						"vietnamese": "Hơi ấm bị tước đoạt? Ta chỉ đơn thuần thu về mà thôi.",
						"thai": "ความอบอุ่นที่ถูกช่วงชิง? ข้าแค่รวบรวมมันมาเท่านั้น",
						"hindi": "छीनी हुई गर्माहट? मैंने बस उसे इकट्ठा किया है।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…네가 온기를 빼앗았어?",
						"english": "...You stole the warmth?",
						"japanese": "…お前が温もりを奪ったのか？",
						"chinese": "…你夺走了温暖？",
						"french": "…C'est toi qui as volé la chaleur ?",
						"spanish": "¿…Tú robaste el calor?",
						"vietnamese": "…Ngươi đã cướp hơi ấm sao?",
						"thai": "…เจ้าช่วงชิงความอบอุ่นไปรึ?",
						"hindi": "…तुमने गर्माहट छीनी?"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"action": "exit",
					"direction": "down",
					"speaker": "frost",
					"type": "direction",
					"duration_ms": 400
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "이 심장은… 더욱 강해질 것이다. 너희의 온기마저 삼키고.",
						"english": "This heart… will grow even stronger. Devouring even your warmth.",
						"japanese": "この心臓は…さらに強くなるだろう。お前たちの温もりさえも喰らい尽くして。",
						"chinese": "这颗心脏…会变得更加强大。甚至吞噬你们的温暖。",
						"french": "Ce cœur… deviendra encore plus fort. Dévorent même votre chaleur.",
						"spanish": "Este corazón… se hará aún más fuerte. Devorando incluso vuestro calor.",
						"vietnamese": "Trái tim này… sẽ càng mạnh mẽ hơn. Nuốt chửng cả hơi ấm của các ngươi.",
						"thai": "หัวใจนี้…จะแข็งแกร่งขึ้นไปอีก กลืนกินแม้กระทั่งความอบอุ่นของพวกเจ้า",
						"hindi": "यह हृदय… और भी शक्तिशाली होगा। तुम्हारी गर्माहट को भी निगल जाएगा।"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "막을 거야!",
						"english": "I'll stop you!",
						"japanese": "止めさせる！",
						"chinese": "我会阻止你！",
						"french": "Je vous arrêterai !",
						"spanish": "¡Te detendré!",
						"vietnamese": "Ta sẽ ngăn ngươi lại!",
						"thai": "ข้าจะหยุดเจ้าให้ได้!",
						"hindi": "मैं तुम्हें रोकूँगा!"
					},
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"id": 15
		}
	]
} as const;
