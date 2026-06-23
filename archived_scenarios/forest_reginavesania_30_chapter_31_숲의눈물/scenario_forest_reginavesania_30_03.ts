export const scenario_forest_reginavesania_30_03 = {
	"scenario_id": "forest_reginavesania_30_03",
	"order": 3,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"glen": {
			"id": "mon_42dfd4f2-9564-4b4b-beed-993d578ebd5a",
			"name": {
				"korean": "글렌",
				"english": "Glen",
				"japanese": "グレン",
				"chinese": "格伦",
				"french": "Glen",
				"spanish": "Glen",
				"vietnamese": "Glen",
				"thai": "เกล็น",
				"hindi": "ग्लेन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/6aa9eb0c-364f-4bfb-fa3f-52711da6a600/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2dbb8c2d-a999-4154-3a88-7c5cc5ca2200/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"숲의 균사 침식은 더욱 거세졌다.",
			"여왕의 '치유'는 기만이었을까.",
			"생명력 흡수 주기의 카운트다운이 시작되고 있었다.",
			"숲은 더 많은 희생을 요구할 터였다."
		],
		"english": [
			"The forest's fungal erosion intensified.",
			"Was the Queen's 'healing' a deception?",
			"The countdown to the life-force absorption cycle had begun.",
			"The forest would demand more sacrifices."
		],
		"japanese": [
			"森の菌糸侵食はさらに激しくなった。",
			"女王の「治癒」は欺瞞だったのだろうか。",
			"生命力吸収サイクルのカウントダウンが始まっていた。",
			"森はさらなる犠牲を求めるだろう。"
		],
		"chinese": [
			"森林的菌丝侵蚀愈发猛烈。",
			"女王的“治愈”是欺骗吗？",
			"生命力吸收周期的倒计时已经开始。",
			"森林会要求更多的牺牲。"
		],
		"french": [
			"L'érosion fongique de la forêt s'est intensifiée.",
			"Le 'soin' de la Reine était-il une tromperie ?",
			"Le compte à rebours du cycle d'absorption de la force vitale avait commencé.",
			"La forêt exigerait plus de sacrifices."
		],
		"spanish": [
			"La erosión fúngica del bosque se intensificó.",
			"¿Fue la 'curación' de la Reina un engaño?",
			"La cuenta regresiva para el ciclo de absorción de la fuerza vital había comenzado.",
			"El bosque exigiría más sacrificios."
		],
		"vietnamese": [
			"Sự xâm thực của nấm trong rừng ngày càng dữ dội hơn.",
			"Phải chăng 'sự chữa lành' của Nữ hoàng chỉ là một sự lừa dối?",
			"Chu kỳ hấp thụ sinh lực đã bắt đầu đếm ngược.",
			"Rừng sẽ đòi hỏi nhiều sự hy sinh hơn."
		],
		"thai": [
			"การกัดเซาะของเชื้อราในป่ายิ่งทวีความรุนแรงขึ้น",
			"'การรักษา' ของราชินีเป็นเพียงการหลอกลวงหรือเปล่า?",
			"การนับถอยหลังสู่รอบการดูดซับพลังชีวิตได้เริ่มต้นขึ้นแล้ว",
			"ป่าจะเรียกร้องการเสียสละมากขึ้น"
		],
		"hindi": [
			"जंगल में फंगल का कटाव और तेज़ हो गया।",
			"क्या रानी का 'उपचार' एक धोखा था?",
			"जीवन-शक्ति अवशोषण चक्र की उलटी गिनती शुरू हो गई थी।",
			"जंगल और अधिक बलिदान मांगेगा।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "숲의 활기는 사라지고, 죽음의 기운이 더욱 짙어졌다.",
						"english": "The forest's vitality faded, and the aura of death grew denser.",
						"japanese": "森の活気は消え失せ、死の気配がさらに濃くなった。",
						"chinese": "森林的活力消失了，死亡的气息愈发浓厚。",
						"french": "La vitalité de la forêt s'est estompée, et l'aura de mort s'est densifiée.",
						"spanish": "La vitalidad del bosque se desvaneció, y el aura de muerte se hizo más densa.",
						"vietnamese": "Sức sống của rừng dần biến mất, và hơi thở của cái chết ngày càng đậm đặc.",
						"thai": "ความมีชีวิตชีวาของป่าเลือนหายไป และกลิ่นอายแห่งความตายก็เข้มข้นขึ้น",
						"hindi": "जंगल की जान गायब हो गई और मौत का साया गहरा गया।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "숲이... 점점 더 시들어가고 있어.",
						"english": "The forest... is wilting more and more.",
						"japanese": "森が…どんどん枯れていっている。",
						"chinese": "森林…正在逐渐枯萎。",
						"french": "La forêt... se fane de plus en plus.",
						"spanish": "El bosque... se está marchitando cada vez más.",
						"vietnamese": "Rừng... đang dần héo úa.",
						"thai": "ป่า... กำลังเหี่ยวเฉาลงเรื่อยๆ",
						"hindi": "जंगल... धीरे-धीरे मुरझा रहा है।"
					}
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "glen",
					"spot": [
						4,
						3
					],
					"duration_ms": 500
				},
				{
					"speaker": "glen",
					"emotion": "angry",
					"content": {
						"korean": "이건 치유가 아니야! 내 가족이... 숲의 병으로 쓰러졌다고!",
						"english": "This isn't healing! My family... fell to the forest's sickness!",
						"japanese": "これは治癒じゃない！私の家族が…森の病で倒れたんだ！",
						"chinese": "这不是治愈！我的家人…因森林的疾病而倒下了！",
						"french": "Ce n'est pas une guérison ! Ma famille... est tombée malade à cause de la forêt !",
						"spanish": "¡Esto no es curación! ¡Mi familia... cayó enferma por el mal del bosque!",
						"vietnamese": "Đây không phải là chữa lành! Gia đình tôi... đã ngã xuống vì bệnh của rừng!",
						"thai": "นี่ไม่ใช่การรักษา! ครอบครัวของฉัน... ล้มป่วยจากโรคของป่า!",
						"hindi": "यह इलाज नहीं है! मेरा परिवार... जंगल की बीमारी से मर गया!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "글렌, 무슨 소리야!",
						"english": "Glen, what are you talking about!",
						"japanese": "グレン、何を言ってるんだ！",
						"chinese": "格伦，你在说什么！",
						"french": "Glen, de quoi parles-tu !",
						"spanish": "¡Glen, de qué estás hablando!",
						"vietnamese": "Glen, anh đang nói gì vậy!",
						"thai": "เกล็น คุณกำลังพูดอะไร!",
						"hindi": "ग्लेन, तुम क्या कह रहे हो!"
					}
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "glen",
					"spot": [
						3,
						3
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "glen",
					"content": {
						"korean": "여왕의 의식은 실패했어! 아니, 애초에 거짓이야!",
						"english": "The Queen's ritual failed! No, it was a lie from the start!",
						"japanese": "女王の儀式は失敗した！いや、最初から嘘だったんだ！",
						"chinese": "女王的仪式失败了！不，那从一开始就是个谎言！",
						"french": "Le rituel de la Reine a échoué ! Non, c'était un mensonge dès le début !",
						"spanish": "¡El ritual de la Reina falló! ¡No, fue una mentira desde el principio!",
						"vietnamese": "Nghi lễ của Nữ hoàng đã thất bại! Không, đó là một lời nói dối ngay từ đầu!",
						"thai": "พิธีกรรมของราชินีล้มเหลว! ไม่สิ มันเป็นเรื่องโกหกตั้งแต่แรก!",
						"hindi": "रानी का अनुष्ठान विफल हो गया! नहीं, यह शुरू से ही एक झूठ था!"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "글렌, 진정해… 여왕님은 숲을…",
						"english": "Glen, calm down... The Queen... the forest...",
						"japanese": "グレン、落ち着いて…女王様は森を…",
						"chinese": "格伦，冷静点…女王陛下是为了森林…",
						"french": "Glen, calme-toi... La Reine... la forêt...",
						"spanish": "Glen, cálmate... La Reina... el bosque...",
						"vietnamese": "Glen, bình tĩnh đi... Nữ hoàng... cho khu rừng...",
						"thai": "เกล็น ใจเย็นๆ... ราชินี... ป่า...",
						"hindi": "ग्लेन, शांत हो जाओ... रानी... जंगल..."
					}
				},
				{
					"speaker": "glen",
					"emotion": "sad",
					"content": {
						"korean": "저들은 고통받고 있어! 내 아이는… 차갑게 식어가는 중이라고!",
						"english": "They are suffering! My child... is growing cold!",
						"japanese": "「彼らは苦しんでいる！私の子が…冷たくなっていく！」",
						"chinese": "他们正在受苦！我的孩子……正在变得冰冷！",
						"french": "Ils souffrent ! Mon enfant… est en train de se refroidir !",
						"spanish": "¡Están sufriendo! ¡Mi hijo... se está enfriando!",
						"vietnamese": "Họ đang đau khổ! Con tôi… đang lạnh dần đi!",
						"thai": "พวกเขากำลังทนทุกข์! ลูกของฉัน...กำลังเย็นชาลงไป!",
						"hindi": "वे पीड़ा में हैं! मेरा बच्चा… ठंडा होता जा रहा है!"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "(충격에 말을 잇지 못한다.)",
						"english": "(Too shocked to speak.)",
						"japanese": "「（衝撃で言葉を失う）」",
						"chinese": "(震惊得说不出话来。)",
						"french": "(Trop choqué pour parler.)",
						"spanish": "(Demasiado conmocionado para hablar.)",
						"vietnamese": "(Quá sốc không nói nên lời.)",
						"thai": "(ตกใจจนพูดไม่ออก)",
						"hindi": "(सदमे से बोल नहीं पाता।)"
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"speaker": "glen"
				},
				{
					"speaker": "glen",
					"emotion": "base",
					"content": {
						"korean": "곧 숲의 생명력 흡수 주기가 다가와.",
						"english": "The forest's life-draining cycle is approaching soon.",
						"japanese": "「もうすぐ森の生命力吸収の周期が来る。」",
						"chinese": "森林的生命力吸收周期很快就要到了。",
						"french": "Le cycle d'absorption de la vie de la forêt approche à grands pas.",
						"spanish": "El ciclo de absorción de vida del bosque se acerca.",
						"vietnamese": "Chu kỳ hấp thụ sinh lực của rừng sắp đến rồi.",
						"thai": "วงจรดูดซับพลังชีวิตของป่ากำลังจะมาถึงแล้ว",
						"hindi": "वन का जीवन-शोषण चक्र जल्द ही आ रहा है।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "생명력 흡수 주기…? 그게 뭐야?",
						"english": "Life-draining cycle...? What's that?",
						"japanese": "「生命力吸収の周期…？それって何？」",
						"chinese": "生命力吸收周期……？那是什么？",
						"french": "Cycle d'absorption de la vie… ? Qu'est-ce que c'est ?",
						"spanish": "¿Ciclo de absorción de vida...? ¿Qué es eso?",
						"vietnamese": "Chu kỳ hấp thụ sinh lực…? Đó là gì vậy?",
						"thai": "วงจรดูดซับพลังชีวิต...? นั่นคืออะไร?",
						"hindi": "जीवन-शोषण चक्र…? वह क्या है?"
					},
					"type": "speech"
				},
				{
					"speaker": "glen",
					"emotion": "angry",
					"content": {
						"korean": "그날이 되면 숲은… 더 많은 것을 빼앗아갈 거야. 여왕의 치유는… 죽음으로 이끄는 저주일 뿐이야!",
						"english": "On that day, the forest will... take even more. The Queen's healing... is just a curse leading to death!",
						"japanese": "「その日、森は…さらに多くを奪うだろう。女王の癒しは…死へと導く呪いに過ぎない！」",
						"chinese": "到了那天，森林会……夺走更多。女王的治愈……不过是引向死亡的诅咒！",
						"french": "Ce jour-là, la forêt… prendra encore plus. La guérison de la Reine… n'est qu'une malédiction menant à la mort !",
						"spanish": "Ese día, el bosque... se llevará aún más. La curación de la Reina... ¡no es más que una maldición que lleva a la muerte!",
						"vietnamese": "Vào ngày đó, khu rừng sẽ… lấy đi nhiều hơn nữa. Sự chữa lành của Nữ hoàng… chỉ là một lời nguyền dẫn đến cái chết!",
						"thai": "ในวันนั้น ป่าจะ...พรากสิ่งต่างๆ ไปมากกว่าเดิม การรักษาของราชินี...เป็นเพียงคำสาปที่นำไปสู่ความตายเท่านั้น!",
						"hindi": "उस दिन, जंगल… और भी बहुत कुछ छीन लेगा। रानी का उपचार… मृत्यु की ओर ले जाने वाला शाप मात्र है!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "glen",
					"emotion": "sad",
					"content": {
						"korean": "이걸… 받아줘. 내 가족의 유품이야. 숲의 오래된 문양이 새겨져 있어.",
						"english": "Please... take this. It's a family heirloom. It has an ancient forest emblem carved on it.",
						"japanese": "「これを…受け取ってくれ。家族の形見だ。森の古い紋様が刻まれている。」",
						"chinese": "请……收下这个。这是我家族的遗物。上面刻有森林的古老图腾。",
						"french": "Prends ça… S'il te plaît. C'est un héritage de ma famille. Un ancien emblème de la forêt y est gravé.",
						"spanish": "Por favor... toma esto. Es una reliquia de mi familia. Tiene un antiguo emblema del bosque tallado.",
						"vietnamese": "Làm ơn… nhận lấy cái này. Đây là vật gia truyền của gia đình tôi. Nó có khắc hoa văn cổ của rừng.",
						"thai": "โปรด...รับสิ่งนี้ไว้ นี่คือมรดกของครอบครัวฉัน มีสัญลักษณ์ป่าโบราณสลักอยู่",
						"hindi": "कृपा करके… इसे ले लो। यह मेरे परिवार की विरासत है। इस पर वन का प्राचीन प्रतीक खुदा हुआ है।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "(나뭇조각을 받아든다.) 이건…",
						"english": "(Takes the wooden piece.) This is...",
						"japanese": "「（木の破片を受け取る）これは…」",
						"chinese": "(接过木片。) 这是……",
						"french": "(Prend le morceau de bois.) C'est…",
						"spanish": "(Toma el trozo de madera.) Esto es...",
						"vietnamese": "(Nhận lấy mảnh gỗ.) Đây là…",
						"thai": "(รับชิ้นไม้) นี่มัน...",
						"hindi": "(लकड़ी का टुकड़ा लेता है।) यह…"
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"speaker": "glen",
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "glen",
					"content": {
						"korean": "서둘러야 해! 카운트다운이 시작됐어!",
						"english": "We must hurry! The countdown has begun!",
						"japanese": "「急がなければ！カウントダウンが始まった！」",
						"chinese": "我们必须快点！倒计时已经开始了！",
						"french": "Il faut se dépêcher ! Le compte à rebours a commencé !",
						"spanish": "¡Debemos darnos prisa! ¡La cuenta atrás ha comenzado!",
						"vietnamese": "Chúng ta phải nhanh lên! Đếm ngược đã bắt đầu rồi!",
						"thai": "เราต้องรีบแล้ว! การนับถอยหลังได้เริ่มขึ้นแล้ว!",
						"hindi": "हमें जल्दी करनी होगी! उलटी गिनती शुरू हो गई है!"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "하지만 어떻게…",
						"english": "But how...",
						"japanese": "「でも、どうやって…」",
						"chinese": "但是怎么……",
						"french": "Mais comment…",
						"spanish": "Pero cómo...",
						"vietnamese": "Nhưng làm sao…",
						"thai": "แต่จะทำยังไง...",
						"hindi": "लेकिन कैसे…"
					},
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "glen",
					"content": {
						"korean": "막지 않으면… 모두가 희생될 거야!",
						"english": "If we don't stop it... everyone will be sacrificed!",
						"japanese": "「止めなければ…皆が犠牲になるだろう！」",
						"chinese": "如果不能阻止……所有人都会牺牲！",
						"french": "Si nous ne l'arrêtons pas… tout le monde sera sacrifié !",
						"spanish": "Si no lo detenemos... ¡todos serán sacrificados!",
						"vietnamese": "Nếu không ngăn chặn… tất cả sẽ bị hy sinh!",
						"thai": "ถ้าไม่หยุดมัน...ทุกคนจะต้องสังเวย!",
						"hindi": "अगर हम इसे नहीं रोकते… तो सभी बलिदान हो जाएंगे!"
					}
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "숲의 심장이 격렬하게 울부짖었다. 거대한 그림자가 길을 막아섰다.",
						"english": "The forest's heart roared violently. A giant shadow blocked the path.",
						"japanese": "森の心臓が激しく咆哮した。巨大な影が道を塞いだ。",
						"chinese": "森林之心剧烈咆哮。巨大的阴影挡住了去路。",
						"french": "Le cœur de la forêt rugit violemment. Une ombre gigantesque bloqua le chemin.",
						"spanish": "El corazón del bosque rugió violentamente. Una sombra gigantesca bloqueó el camino.",
						"vietnamese": "Trái tim rừng rống lên dữ dội. Một bóng đen khổng lồ chặn đường.",
						"thai": "หัวใจของป่าคำรามอย่างรุนแรง เงาขนาดใหญ่ขวางทางไว้",
						"hindi": "जंगल का हृदय प्रचंड रूप से दहाड़ा। एक विशाल छाया ने मार्ग अवरुद्ध कर दिया।"
					}
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "정체 모를 괴물이 길을 가로막았다. 위압적인 기운이 숲을 채웠다.",
						"english": "An unknown monster blocked the path. An overwhelming aura filled the forest.",
						"japanese": "正体不明の怪物が道を遮った。威圧的な気が森を満たした。",
						"chinese": "一只不明怪物挡住了去路。压倒性的气息弥漫在森林中。",
						"french": "Un monstre inconnu bloqua le chemin. Une aura écrasante envahit la forêt.",
						"spanish": "Un monstruo desconocido bloqueó el camino. Un aura abrumadora llenó el bosque.",
						"vietnamese": "Một quái vật không rõ danh tính chặn đường. Một khí tức áp đảo bao trùm khu rừng.",
						"thai": "สัตว์ประหลาดนิรนามขวางทางไว้ ออร่าที่น่าเกรงขามปกคลุมทั่วป่า",
						"hindi": "एक अज्ञात राक्षस ने मार्ग अवरुद्ध कर दिया। एक प्रचंड आभा ने जंगल को भर दिया।"
					}
				},
				{
					"content": {
						"korean": "침입자 주제에… 감히 여기까지 온 것인가.",
						"english": "An intruder... How dare you come this far?",
						"japanese": "侵入者の分際で… よくもここまで来たな。",
						"chinese": "一个入侵者… 竟敢来到这里。",
						"french": "Un intrus... Comment oses-tu venir jusqu'ici ?",
						"spanish": "Un intruso... ¿Cómo te atreves a llegar tan lejos?",
						"vietnamese": "Kẻ xâm nhập... Dám đến tận đây sao.",
						"thai": "เจ้าผู้บุกรุก... กล้ามาถึงที่นี่ได้อย่างไร",
						"hindi": "एक घुसपैठिया... इतनी दूर आने की तुम्हारी हिम्मत कैसे हुई?"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "네가… 이 숲을 병들게 하는 건가!",
						"english": "You... Are you making this forest sick?!",
						"japanese": "お前が… この森を病ませているのか！",
						"chinese": "是你… 在让这片森林生病吗？！",
						"french": "C'est toi... qui rends cette forêt malade ?!",
						"spanish": "¡¿Tú... estás enfermando este bosque?!",
						"vietnamese": "Ngươi... là kẻ làm cho khu rừng này bệnh ư!",
						"thai": "เจ้า... ทำให้ป่าแห่งนี้ป่วยงั้นรึ!",
						"hindi": "तुम… क्या तुम इस जंगल को बीमार कर रहे हो?!"
					}
				},
				{
					"content": {
						"korean": "병이라고? 이것은 숲의 순리. 희생은… 새로운 생명을 위한 과정.",
						"english": "Sick? This is the forest's natural order. Sacrifice... is a process for new life.",
						"japanese": "病だと？これは森の摂理だ。犠牲は… 新たな生命のための過程。",
						"chinese": "生病？这是森林的法则。牺牲… 是为了新生命的过程。",
						"french": "Malade ? C'est l'ordre naturel de la forêt. Le sacrifice... est un processus pour une nouvelle vie.",
						"spanish": "Desde luego. Este es el orden natural del bosque. El sacrificio... es un proceso para la nueva vida.",
						"vietnamese": "Bệnh ư? Đây là lẽ tự nhiên của rừng. Hy sinh... là quá trình cho sự sống mới.",
						"thai": "ป่วยงั้นรึ? นี่คือวัฏจักรของป่า การเสียสละ... คือกระบวนการเพื่อชีวิตใหม่",
						"hindi": "बीमार? यह जंगल का प्राकृतिक क्रम है। बलिदान... नए जीवन के लिए एक प्रक्रिया है।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "말도 안 돼! 넌 숲을 파괴하고 있어!",
						"english": "Nonsense! You're destroying the forest!",
						"japanese": "馬鹿な！お前は森を破壊しているんだ！",
						"chinese": "胡说！你正在摧毁森林！",
						"french": "Absurde ! Tu es en train de détruire la forêt !",
						"spanish": "¡Tonterías! ¡Estás destruyendo el bosque!",
						"vietnamese": "Vô lý! Ngươi đang phá hủy khu rừng!",
						"thai": "ไร้สาระ! เจ้ากำลังทำลายป่า!",
						"hindi": "बकवास! तुम जंगल को नष्ट कर रहे हो!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 자. 곧 너희도… 숲의 일부가 될 것이다.",
						"english": "Foolish ones. Soon, you too... will become part of the forest.",
						"japanese": "愚かな者たちめ。すぐにお前たちも… 森の一部となるだろう。",
						"chinese": "愚蠢的家伙。很快，你们也会… 成为森林的一部分。",
						"french": "Insensés. Bientôt, vous aussi... ferez partie de la forêt.",
						"spanish": "Necios. Pronto, vosotros también... seréis parte del bosque.",
						"vietnamese": "Những kẻ ngu ngốc. Chẳng mấy chốc, các ngươi cũng... sẽ trở thành một phần của rừng.",
						"thai": "พวกโง่เขลา อีกไม่นาน พวกเจ้าก็จะ... กลายเป็นส่วนหนึ่งของป่า",
						"hindi": "मूर्खों। जल्द ही, तुम भी... जंगल का हिस्सा बन जाओगे।"
					}
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "숲의 힘에 압도당했다. 거대한 존재의 그림자가 다시 솟아올랐다.",
						"english": "Overwhelmed by the forest's power. The shadow of a colossal being rose again.",
						"japanese": "森の力に圧倒された。巨大な存在の影が再び立ち上がった。",
						"chinese": "被森林的力量所压倒。巨大存在的阴影再次升起。",
						"french": "Submergé par la puissance de la forêt. L'ombre d'un être colossal se dressa de nouveau.",
						"spanish": "Abrumado por el poder del bosque. La sombra de un ser colosal se alzó de nuevo.",
						"vietnamese": "Bị sức mạnh của rừng áp đảo. Bóng hình của một thực thể khổng lồ lại trỗi dậy.",
						"thai": "ถูกพลังของป่าครอบงำ เงาของสิ่งมีชีวิตขนาดยักษ์ปรากฏขึ้นอีกครั้ง",
						"hindi": "जंगल की शक्ति से अभिभूत। एक विशाल प्राणी की छाया फिर से उठ खड़ी हुई।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "네가 숲의 섭리를 거스를 순 없다. 희생은… 피할 수 없는 운명.",
						"english": "You cannot defy the forest's will. Sacrifice is... an inescapable fate.",
						"japanese": "お前が森の摂理に逆らうことはできない。犠牲は…避けられない運命だ。",
						"chinese": "你无法违抗森林的旨意。牺牲是…无法避免的命运。",
						"french": "Tu ne peux pas défier la volonté de la forêt. Le sacrifice est… un destin inéluctable.",
						"spanish": "No puedes desafiar la voluntad del bosque. El sacrificio es... un destino ineludible.",
						"vietnamese": "Ngươi không thể chống lại ý chí của rừng. Sự hy sinh là... một số phận không thể tránh khỏi.",
						"thai": "เจ้าไม่อาจขัดขืนเจตจำนงของป่าได้ การเสียสละคือ... ชะตากรรมที่หลีกเลี่ยงไม่ได้",
						"hindi": "तुम जंगल की इच्छा का उल्लंघन नहीं कर सकते। बलिदान... एक अपरिहार्य भाग्य है।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "포기하지 않아! 반드시… 숲을 구할 거야!",
						"english": "I won't give up! I will save the forest!",
						"japanese": "諦めない！必ず…森を救ってみせる！",
						"chinese": "我不会放弃！我一定会…拯救森林！",
						"french": "Je n'abandonnerai pas ! Je sauverai la forêt !",
						"spanish": "¡No me rendiré! ¡Salvaré el bosque!",
						"vietnamese": "Tôi sẽ không từ bỏ! Nhất định… tôi sẽ cứu lấy khu rừng!",
						"thai": "ฉันจะไม่ยอมแพ้! ฉันจะ… กอบกู้ป่าให้ได้!",
						"hindi": "मैं हार नहीं मानूँगा! मैं जंगल को… बचाऊँगा!"
					},
					"type": "speech"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "거대한 괴물이 쓰러졌다. 하지만 숲의 고통은 여전했다.",
						"english": "The giant monster fell. But the forest's pain remained.",
						"japanese": "巨大な怪物が倒れた。しかし森の苦痛は残ったままだった。",
						"chinese": "巨大的怪物倒下了。但森林的痛苦依然存在。",
						"french": "Le monstre géant tomba. Mais la douleur de la forêt persistait.",
						"spanish": "El monstruo gigante cayó. Pero el dolor del bosque permaneció.",
						"vietnamese": "Quái vật khổng lồ đã gục ngã. Nhưng nỗi đau của rừng vẫn còn đó.",
						"thai": "สัตว์ประหลาดขนาดใหญ่ล้มลง แต่ความเจ็บปวดของป่ายังคงอยู่",
						"hindi": "विशाल राक्षस गिर गया। लेकिन जंगल का दर्द बना रहा।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "크윽… 아직… 끝나지… 않았어…! 카운트다운은… 계속될… 것이다…!",
						"english": "Urgh... It's not... over... yet...! The countdown... will continue...!",
						"japanese": "ぐっ… まだ… 終わって… ない…！カウントダウンは… 続く… だろう…！",
						"chinese": "呃… 还没… 结束…！倒计时… 会继续…！",
						"french": "Urgh... Ce n'est pas... fini... encore...! Le compte à rebours... continuera...!",
						"spanish": "Ugh... ¡Todavía... no ha... terminado...! ¡La cuenta atrás... continuará...!",
						"vietnamese": "Ưgh... Vẫn chưa... kết thúc... đâu...! Đồng hồ đếm ngược... sẽ tiếp tục...!",
						"thai": "อึก... ยังไม่... จบ... หรอก...! การนับถอยหลัง... จะดำเนิน... ต่อไป...!",
						"hindi": "उफ़... यह अभी... खत्म नहीं... हुआ...! उलटी गिनती... जारी रहेगी...!"
					},
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "카운트다운…? 대체 뭘 말하는 거지?",
						"english": "Countdown...? What exactly are you talking about?",
						"japanese": "カウントダウン…？一体何を言っているんだ？",
						"chinese": "倒计时…？你到底在说什么？",
						"french": "Compte à rebours...? De quoi parles-tu exactement ?",
						"spanish": "¿Cuenta atrás...? ¿De qué estás hablando exactamente?",
						"vietnamese": "Đồng hồ đếm ngược...? Rốt cuộc ngươi đang nói về cái gì vậy?",
						"thai": "การนับถอยหลัง...? เจ้ากำลังพูดถึงอะไรกันแน่?",
						"hindi": "उलटी गिनती...? तुम आखिर किस बारे में बात कर रहे हो?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "쓰러진 존재가 남긴 마지막 경고. 숲의 깊은 곳에서 더 큰 절규가 들려오는 듯했다.",
						"english": "The fallen being's final warning. A louder cry seemed to echo from deep within the forest.",
						"japanese": "倒れた存在が残した最後の警告。森の奥深くから、さらに大きな叫びが聞こえてくるようだった。",
						"chinese": "倒下者留下了最后的警告。更深的哀嚎似乎从森林深处传来。",
						"french": "Le dernier avertissement de l'être déchu. Un cri plus puissant semblait résonner du plus profond de la forêt.",
						"spanish": "La última advertencia del ser caído. Un grito más fuerte pareció resonar desde lo profundo del bosque.",
						"vietnamese": "Lời cảnh báo cuối cùng từ thực thể ngã xuống. Một tiếng thét lớn hơn dường như vang vọng từ sâu thẳm rừng.",
						"thai": "คำเตือนสุดท้ายจากสิ่งมีชีวิตที่ล้มลง ราวกับมีเสียงกรีดร้องที่ดังกว่านั้นมาจากส่วนลึกของป่า",
						"hindi": "गिरे हुए प्राणी की आखिरी चेतावनी। जंगल के गहरे भीतर से एक और बड़ा चीख सुनाई दे रहा था।"
					},
					"type": "speech"
				}
			]
		}
	]
} as const;
