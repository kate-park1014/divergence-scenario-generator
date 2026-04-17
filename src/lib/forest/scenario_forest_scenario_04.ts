export const scenario_forest_scenario_04 = {
	"scenario_id": "forest_scenario_04_rising3",
	"order": 4,
	"act": "rising",
	"theme": "forest",
	"boss": {
		"pool_id": "random_boss"
	},
	"actors": {
		"kain": {
			"id": "mon_7e2a67da-86f4-413e-8dc3-1523572274b8",
			"name": {
				"korean": "카인",
				"english": "Kain",
				"japanese": "カイン",
				"chinese": "凯恩",
				"french": "Kaïn",
				"spanish": "Kain",
				"vietnamese": "Kain",
				"thai": "เคน",
				"hindi": "केन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2fb1b07a-14de-4ca0-c18b-a422d72e0000/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f251a138-bf06-4848-f050-bd6f5cfbde00/public",
			"attack_sprite_url": "",
			"role": {
				"type": ""
			}
		}
	},
	"prologue": {
		"korean": [
			"이번엔 카인과 단둘이었다.",
			"수호대원도 없고, 요정도 없었다.",
			"그저 카인과 주인공, 그리고 깊어지는 숲.",
			"리라의 말이 계속 머릿속을 맴돌았다."
		],
		"english": [
			"This time, it was just Cain and me.",
			"There were no guardians, no fairies.",
			"Just Cain, the protagonist, and the deepening forest.",
			"Lyra's words kept echoing in my mind."
		],
		"japanese": [
			"今度はカインと二人だけだった。",
			"守護隊員もおらず、妖精もいなかった。",
			"ただカインと主人公、そして深まる森。",
			"リラの言葉がずっと頭の中を巡っていた。"
		],
		"chinese": [
			"这次只有凯恩和我。",
			"没有守护者，也没有妖精。",
			"只有凯恩、主人公，以及越来越深的森林。",
			"莉拉的话语一直在我的脑海中回响。"
		],
		"french": [
			"Cette fois, il n'y avait que Caïn et moi.",
			"Il n'y avait ni gardiens, ni fées.",
			"Juste Caïn, le protagoniste, et la forêt qui s'épaississait.",
			"Les mots de Lyra résonnaient sans cesse dans mon esprit."
		],
		"spanish": [
			"Esta vez, éramos solo Caín y yo.",
			"No había guardianes, ni hadas.",
			"Solo Caín, el protagonista, y el bosque que se volvía más denso.",
			"Las palabras de Lyra seguían rondando en mi mente."
		],
		"vietnamese": [
			"Lần này, chỉ có Cain và tôi.",
			"Không có lính canh, không có tiên.",
			"Chỉ có Cain, nhân vật chính và khu rừng ngày càng sâu.",
			"Lời của Lyra cứ luẩn quẩn trong đầu tôi."
		],
		"thai": [
			"ครั้งนี้มีแค่เคนกับข้า",
			"ไม่มีทั้งหน่วยพิทักษ์และภูต",
			"มีเพียงเคน ตัวเอก และป่าที่ลึกขึ้นเรื่อยๆ",
			"คำพูดของไลร่ายังคงก้องอยู่ในหัวของข้า"
		],
		"hindi": [
			"इस बार, मैं और केन अकेले थे।",
			"न कोई रक्षक था, न कोई परी।",
			"बस केन, नायक, और गहराता जंगल।",
			"लीरा के शब्द मेरे दिमाग में गूंजते रहे।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "kain",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "kain",
					"content": {
						"korean": "이번엔 나랑 둘이야. 깊이 들어갈수록 위험하거든.",
						"english": "This time, it's just the two of us. It gets more dangerous the deeper you go.",
						"japanese": "今度は私と二人だけよ。深く入るほど危険だからね。",
						"chinese": "这次只有我们俩。越往深处走就越危险。",
						"french": "Cette fois, il n'y a que nous deux. C'est plus dangereux à mesure que tu t'enfonces.",
						"spanish": "Esta vez, solo somos tú y yo. Se vuelve más peligroso cuanto más te adentras.",
						"vietnamese": "Lần này chỉ có hai ta thôi. Càng vào sâu càng nguy hiểm đấy.",
						"thai": "ครั้งนี้มีแค่เราสองคนนะ ยิ่งเข้าไปลึกยิ่งอันตราย",
						"hindi": "इस बार, हम दोनों ही हैं। जितना अंदर जाओगे, उतना ही खतरनाक होता जाएगा।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "알겠어.",
						"english": "Understood.",
						"japanese": "分かった。",
						"chinese": "明白了。",
						"french": "Compris.",
						"spanish": "Entendido.",
						"vietnamese": "Được thôi.",
						"thai": "เข้าใจแล้ว",
						"hindi": "समझ गया।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kain",
					"content": {
						"korean": "많이 강해졌어. 처음 봤을 때랑 다르네.",
						"english": "You've grown much stronger. You're different from when I first saw you.",
						"japanese": "随分強くなったな。初めて会った時とは違う。",
						"chinese": "你变强了很多。和初次见面时不同了。",
						"french": "Tu es devenu beaucoup plus fort. Tu es différent de la première fois que je t'ai vu.",
						"spanish": "Te has vuelto mucho más fuerte. Eres diferente de cuando te vi por primera vez.",
						"vietnamese": "Ngươi đã mạnh hơn nhiều rồi. Khác hẳn với lần đầu ta gặp.",
						"thai": "เจ้าแข็งแกร่งขึ้นมากเลยนะ ไม่เหมือนตอนที่เจอครั้งแรก",
						"hindi": "तुम बहुत मजबूत हो गए हो। जब मैंने तुम्हें पहली बार देखा था, तब से तुम बदल गए हो।"
					},
					"emotion": "happy"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이거 늑대 발자국이야? 크기가 비정상이네.",
						"english": "Are these wolf footprints? The size is abnormal.",
						"japanese": "これ、オオカミの足跡か？大きさが異常だな。",
						"chinese": "这是狼的脚印吗？这尺寸很不寻常啊。",
						"french": "Ce sont des empreintes de loup ? La taille est anormale.",
						"spanish": "¿Son huellas de lobo? El tamaño es anormal.",
						"vietnamese": "Đây là dấu chân sói à? Kích thước bất thường quá.",
						"thai": "นี่รอยเท้าหมาป่าเหรอ? ขนาดมันไม่ปกติเลยนะ",
						"hindi": "क्या ये भेड़िये के पैरों के निशान हैं? आकार असामान्य है।"
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "kain",
					"duration_ms": 400,
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "kain",
					"content": {
						"korean": "숲이 깊을수록 존재들도 커져. 조심해.",
						"english": "The deeper the forest, the larger the creatures. Be careful.",
						"japanese": "森が深くなるほど存在たちも大きくなる。気をつけろ。",
						"chinese": "森林越深，里面的生物就越大。小心点。",
						"french": "Plus la forêt est profonde, plus les créatures sont grandes. Fais attention.",
						"spanish": "Cuanto más profundo es el bosque, más grandes son las criaturas. Ten cuidado.",
						"vietnamese": "Rừng càng sâu, các sinh vật càng lớn. Cẩn thận đấy.",
						"thai": "ยิ่งป่าลึกเท่าไหร่ สิ่งมีชีวิตก็ยิ่งตัวใหญ่ขึ้นเท่านั้น ระวังตัวไว้",
						"hindi": "जंगल जितना गहरा होगा, जीव भी उतने ही बड़े होंगे। सावधान रहना।"
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "exit",
					"speaker": "kain",
					"duration_ms": 400
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "kain",
					"duration_ms": 400,
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "kain",
					"content": {
						"korean": "리라 그 요정 — 아직도 신경 쓰여?",
						"english": "Lyra, that fairy — still bothering you?",
						"japanese": "リラ、あの妖精――まだ気にしてるのか？",
						"chinese": "莉拉，那个妖精——你还在意吗？",
						"french": "Lyra, cette fée — elle te préoccupe encore ?",
						"spanish": "Lyra, esa hada — ¿todavía te preocupa?",
						"vietnamese": "Lyra, cô tiên đó — ngươi vẫn còn bận tâm sao?",
						"thai": "ไลร่า ภูตตนนั้น — ยังกังวลอยู่เหรอ?",
						"hindi": "लीरा, वो परी — क्या अब भी तुम्हें परेशान कर रही है?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…아니야.",
						"english": "...No.",
						"japanese": "…いや。",
						"chinese": "……不是。",
						"french": "...Non.",
						"spanish": "...No.",
						"vietnamese": "...Không.",
						"thai": "...ไม่ใช่",
						"hindi": "...नहीं।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kain",
					"content": {
						"korean": "숲 요정들은 수호대를 없애려고 해. 인간이 숲을 개간하는 게 싫거든.",
						"english": "The forest fairies are trying to eliminate the guardians. They dislike humans clearing the forest.",
						"japanese": "森の妖精たちは守護隊を排除しようとしている。人間が森を開墾するのが嫌いだからな。",
						"chinese": "森林妖精们想除掉守护者。它们讨厌人类开垦森林。",
						"french": "Les fées de la forêt essaient d'éliminer les gardiens. Elles détestent que les humains défrichissent la forêt.",
						"spanish": "Las hadas del bosque están tratando de eliminar a los guardianes. No les gusta que los humanos deforesten el bosque.",
						"vietnamese": "Những nàng tiên rừng đang cố gắng tiêu diệt đội lính canh. Chúng không thích con người khai phá rừng.",
						"thai": "ภูตป่ากำลังพยายามกำจัดหน่วยพิทักษ์ พวกมันไม่ชอบที่มนุษย์ถางป่า",
						"hindi": "जंगल की परियाँ रक्षकों को खत्म करने की कोशिश कर रही हैं। उन्हें इंसानों का जंगल साफ करना पसंद नहीं है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kain",
					"content": {
						"korean": "거짓말로 우릴 갈라놓으려는 거야.",
						"english": "They're trying to drive a wedge between us with lies.",
						"japanese": "嘘で私たちを仲違いさせようとしているんだ。",
						"chinese": "它们想用谎言离间我们。",
						"french": "Elles essaient de nous diviser avec des mensonges.",
						"spanish": "Están tratando de separarnos con mentiras.",
						"vietnamese": "Chúng đang cố gắng chia rẽ chúng ta bằng lời nói dối.",
						"thai": "พวกมันพยายามจะแยกเราออกจากกันด้วยคำโกหก",
						"hindi": "वे झूठ बोलकर हमें अलग करने की कोशिश कर रहे हैं।"
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "exit",
					"speaker": "kain",
					"duration_ms": 400
				}
			]
		},
		{
			"id": 7,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "카인의 말이 맞는 것 같기도 했다. 그러나.",
						"english": "Cain's words seemed to hold truth. However.",
						"japanese": "カインの言うことが正しいようにも思えた。しかし。",
						"chinese": "凯恩的话似乎也有道理。然而。",
						"french": "Les mots de Caïn semblaient justes. Cependant.",
						"spanish": "Las palabras de Caín parecían ciertas. Sin embargo.",
						"vietnamese": "Lời của Cain dường như cũng đúng. Tuy nhiên.",
						"thai": "คำพูดของเคนก็ดูเหมือนจะถูกนะ แต่ว่า",
						"hindi": "केन की बातें सही लग रही थीं। हालाँकि।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "왜 포자들은 나한테 안 덤볐을까. 그게 계속 걸려.",
						"english": "Why didn't the spores attack me? That keeps bothering me.",
						"japanese": "なぜ胞子たちは私に襲いかからなかったんだろう。それがずっと引っかかっている。",
						"chinese": "为什么那些孢子没有攻击我？我一直在想这个问题。",
						"french": "Pourquoi les spores ne m'ont-elles pas attaqué ? Ça ne cesse de me tracasser.",
						"spanish": "¿Por qué las esporas no me atacaron? Eso me sigue inquietando.",
						"vietnamese": "Tại sao các bào tử lại không tấn công tôi? Điều đó cứ khiến tôi bận tâm mãi.",
						"thai": "ทำไมสปอร์ถึงไม่จู่โจมข้าเลยนะ? มันยังคาใจข้าอยู่",
						"hindi": "क्यों उन बीजाणुओं ने मुझ पर हमला नहीं किया? यह मुझे लगातार परेशान कर रहा है।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "kain",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "kain",
					"content": {
						"korean": "너 리엔 마을 출신이지. 가족이 있었어?",
						"english": "You're from Riene Village, aren't you? Did you have family?",
						"japanese": "お前、リエン村出身だったな。家族はいたのか？",
						"chinese": "你是里恩村出身的吧。有家人吗？",
						"french": "Tu viens du village de Rienne, n'est-ce pas ? Avais-tu de la famille ?",
						"spanish": "Eres del pueblo de Riene, ¿verdad? ¿Tuviste familia?",
						"vietnamese": "Ngươi đến từ làng Riene, phải không? Ngươi có gia đình không?",
						"thai": "เจ้ามาจากหมู่บ้านรีเอนสินะ มีครอบครัวเหรอ?",
						"hindi": "तुम रीन गांव के हो, है ना? क्या तुम्हारा परिवार था?"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…있었어.",
						"english": "...I did.",
						"japanese": "…いた。",
						"chinese": "……有过。",
						"french": "...J'en avais.",
						"spanish": "...Sí.",
						"vietnamese": "...Từng có.",
						"thai": "...มี",
						"hindi": "...था।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "kain",
					"content": {
						"korean": "미안해. 내가 더 빨리 갔어야 했는데.",
						"english": "I'm sorry. I should have gone faster.",
						"japanese": "済まない。もっと早く行くべきだった。",
						"chinese": "抱歉。我应该去得更快些。",
						"french": "Je suis désolé. J'aurais dû y aller plus vite.",
						"spanish": "Lo siento. Debería haber ido más rápido.",
						"vietnamese": "Ta xin lỗi. Lẽ ra ta nên đi nhanh hơn.",
						"thai": "ขอโทษนะ ข้าควรจะไปให้เร็วกว่านี้",
						"hindi": "मुझे अफ़सोस है। मुझे और तेज़ी से जाना चाहिए था।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…괜찮아.",
						"english": "...It's alright.",
						"japanese": "…大丈夫。",
						"chinese": "……没关系。",
						"french": "...Ça va.",
						"spanish": "...Está bien.",
						"vietnamese": "...Không sao đâu.",
						"thai": "...ไม่เป็นไร",
						"hindi": "...ठीक है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "괜찮지 않았다. 근데 카인 앞에서 그 말밖에 나오지 않았다.",
						"english": "It wasn't alright. But in front of Cain, those were the only words I could utter.",
						"japanese": "大丈夫ではなかった。しかし、カインの前ではその言葉しか出てこなかった。",
						"chinese": "我一点都不好。但在凯恩面前，我却只能说出那句话。",
						"french": "Ce n'était pas bien. Mais devant Caïn, je n'ai pu prononcer que ces mots.",
						"spanish": "No estaba bien. Pero frente a Caín, esas fueron las únicas palabras que pude pronunciar.",
						"vietnamese": "Không ổn chút nào. Nhưng trước mặt Cain, tôi chỉ có thể nói ra những lời đó.",
						"thai": "มันไม่เป็นไรหรอก แต่ต่อหน้าเคน ข้าพูดได้แค่คำนั้น",
						"hindi": "यह ठीक नहीं था। लेकिन केन के सामने, मैं और कुछ नहीं कह पाया।"
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "exit",
					"speaker": "kain",
					"duration_ms": 400
				}
			]
		},
		{
			"id": 14,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "kain",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "kain",
					"content": {
						"korean": "저기야. 저걸 쓰러뜨리면 이 구역은 끝나.",
						"english": "There it is. If we defeat that, this area will be cleared.",
						"japanese": "あれだ。あれを倒せばこの区域は終わりだ。",
						"chinese": "就在那里。打倒它，这个区域就结束了。",
						"french": "Le voilà. Si nous le battons, cette zone sera terminée.",
						"spanish": "Ahí está. Si lo derrotamos, esta zona habrá terminado.",
						"vietnamese": "Nó ở đó. Nếu chúng ta đánh bại nó, khu vực này sẽ kết thúc.",
						"thai": "นั่นไงล่ะ ถ้าโค่นมันได้ บริเวณนี้ก็จะสิ้นสุดลง",
						"hindi": "वह रहा। अगर हम उसे हरा दें, तो यह क्षेत्र खत्म हो जाएगा।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "알겠어.",
						"english": "Understood.",
						"japanese": "分かった。",
						"chinese": "明白了。",
						"french": "Compris.",
						"spanish": "Entendido.",
						"vietnamese": "Được thôi.",
						"thai": "เข้าใจแล้ว",
						"hindi": "समझ गया।"
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "exit",
					"speaker": "kain",
					"duration_ms": 400
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "…인간. 이 깊은 곳까지 왔군.",
						"english": "...Human. You've come this deep.",
						"japanese": "…人間よ。こんな深くまで来たか。",
						"chinese": "……人类。竟然来到了这么深的地方。",
						"french": "...Humain. Tu es venu jusque dans ces profondeurs.",
						"spanish": "...Humano. Has llegado tan profundo.",
						"vietnamese": "...Con người. Ngươi đã đến sâu đến tận đây rồi sao.",
						"thai": "...มนุษย์ เจ้ามาถึงส่วนลึกขนาดนี้เลยรึ",
						"hindi": "...मानव। तुम इतनी गहराई तक आ गए हो।"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "비켜.",
						"english": "Get out of the way.",
						"japanese": "退け。",
						"chinese": "让开。",
						"french": "Écarte-toi.",
						"spanish": "Quítate.",
						"vietnamese": "Tránh ra.",
						"thai": "หลีกไป",
						"hindi": "हट जाओ।"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "카인이 보낸 개가. …불쌍한 것.",
						"english": "Cain's dog. ...Poor thing.",
						"japanese": "カインが寄越した犬が。…哀れな奴。",
						"chinese": "凯恩派来的狗。……可怜的东西。",
						"french": "Le chien envoyé par Caïn. ...Pauvre bête.",
						"spanish": "El perro que Caín envió. ...Pobre criatura.",
						"vietnamese": "Con chó mà Cain cử đến. ...Đáng thương làm sao.",
						"thai": "หมาที่เคนส่งมา... น่าสงสารจริงๆ",
						"hindi": "केन का कुत्ता। ...बेचारा।"
					},
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "…이 숲에서 진짜 포식자가 누군지 알아? 카인이야.",
						"english": "...Do you know who the real predator in this forest is? It's Cain.",
						"japanese": "…この森で本当の捕食者が誰だか分かるか？カインだ。",
						"chinese": "……你知道这片森林里真正的捕食者是谁吗？是凯恩。",
						"french": "...Sais-tu qui est le véritable prédateur dans cette forêt ? C'est Caïn.",
						"spanish": "...¿Sabes quién es el verdadero depredador en este bosque? Es Caín.",
						"vietnamese": "...Ngươi có biết kẻ săn mồi thật sự trong khu rừng này là ai không? Là Cain.",
						"thai": "...เจ้ารู้ไหมว่าใครคือนักล่าตัวจริงในป่าแห่งนี้? เคนต่างหากล่ะ",
						"hindi": "...क्या तुम्हें पता है कि इस जंगल में असली शिकारी कौन है? वह केन है।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "….",
						"english": "...",
						"japanese": "…",
						"chinese": "……",
						"french": "...",
						"spanish": "...",
						"vietnamese": "...",
						"thai": "...",
						"hindi": "..."
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "kain",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "kain",
					"content": {
						"korean": "수고했어. 리라 걔 말 믿지 마. 숲 존재들은 전부 거짓말쟁이야.",
						"english": "Well done. Don't believe what Lyra says. All forest creatures are liars.",
						"japanese": "よくやった。リラの言うことなど信じるな。森の存在たちは皆嘘つきだ。",
						"chinese": "辛苦了。别相信莉拉的话。森林里的生物都是骗子。",
						"french": "Bon travail. Ne crois pas ce que Lyra dit. Toutes les créatures de la forêt sont des menteurs.",
						"spanish": "Buen trabajo. No creas lo que dice Lyra. Todas las criaturas del bosque son mentirosas.",
						"vietnamese": "Ngươi làm tốt lắm. Đừng tin lời Lyra. Tất cả sinh vật trong rừng đều là kẻ dối trá.",
						"thai": "ทำได้ดีมาก อย่าไปเชื่อคำพูดของไลร่า พวกสิ่งมีชีวิตในป่าล้วนเป็นคนโกหกทั้งนั้น",
						"hindi": "शाबाश। लीरा की बातों पर विश्वास मत करो। जंगल के सभी जीव झूठे हैं।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…알겠어.",
						"english": "...Understood.",
						"japanese": "…分かった。",
						"chinese": "……明白了。",
						"french": "...Compris.",
						"spanish": "...Entendido.",
						"vietnamese": "...Được thôi.",
						"thai": "...เข้าใจแล้ว",
						"hindi": "...समझ गया।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "이젠 아무것도 모르겠다.",
						"english": "Now I don't know anything anymore.",
						"japanese": "もう何も分からない。",
						"chinese": "现在我什么都不知道了。",
						"french": "Maintenant, je ne sais plus rien.",
						"spanish": "Ahora ya no sé nada.",
						"vietnamese": "Giờ thì tôi không biết gì nữa rồi.",
						"thai": "ตอนนี้ข้าไม่รู้อะไรแล้ว",
						"hindi": "अब मुझे कुछ नहीं पता।"
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "아직 진실을 마주할 준비가 안 됐군.",
						"english": "You're not ready to face the truth yet.",
						"japanese": "まだ真実と向き合う準備ができていないようだな。",
						"chinese": "你还没有准备好面对真相。",
						"french": "Tu n'es pas encore prêt à affronter la vérité.",
						"spanish": "Todavía no estás listo para enfrentar la verdad.",
						"vietnamese": "Ngươi vẫn chưa sẵn sàng đối mặt với sự thật.",
						"thai": "เจ้านยังไม่พร้อมที่จะเผชิญหน้ากับความจริงสินะ",
						"hindi": "तुम अभी तक सच का सामना करने के लिए तैयार नहीं हो।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…다시 온다.",
						"english": "...They're coming again.",
						"japanese": "…また来る。",
						"chinese": "……它们又来了。",
						"french": "...Ils reviennent.",
						"spanish": "...Vuelven.",
						"vietnamese": "...Chúng lại đến rồi.",
						"thai": "...พวกมันมาอีกแล้ว",
						"hindi": "...वे फिर आ रहे हैं।"
					},
					"emotion": "angry"
				}
			]
		}
	]
};
