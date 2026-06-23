export const scenario_desert_solemnverdict_19_04 = {
	"scenario_id": "desert_solemnverdict_19_04",
	"order": 4,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"kasai": {
			"id": "mon_8050c8ca-5715-4e7d-895e-5bc029d55fcf",
			"name": {
				"korean": "카사이",
				"english": "Kasai",
				"japanese": "カサイ",
				"chinese": "卡赛",
				"french": "Kasai",
				"spanish": "Kasai",
				"vietnamese": "Kasai",
				"thai": "คาไซ",
				"hindi": "कसाई"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/c9ddd314-36fb-4636-cbe6-35d8f6f98900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a00fae8a-8a27-4895-d62c-a0c88456ff00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"붉은 사막, 거대한 모래시계가 시간을 잰다.",
			"이곳의 진실은 모래바람 속에 숨겨져 있었다.",
			"어둠 속에서 그림자가 나타나 속삭였다.",
			"금지된 지식은 항상 대가를 치르게 한다."
		],
		"english": [
			"Red desert, a giant hourglass measures time.",
			"The truth of this place was hidden in the sandstorm.",
			"A shadow appeared in the darkness and whispered.",
			"Forbidden knowledge always exacts a price."
		],
		"japanese": [
			"赤い砂漠、巨大な砂時計が時を刻む。",
			"この地の真実は砂嵐の中に隠されていた。",
			"闇の中で影が現れ、囁いた。",
			"禁断の知識は常に代償を伴う。"
		],
		"chinese": [
			"红色沙漠，巨大的沙漏丈量着时间。",
			"此地的真相隐藏在沙尘暴中。",
			"黑暗中，一个影子出现并低语。",
			"禁忌的知识总是要付出代价的。"
		],
		"french": [
			"Désert rouge, un sablier géant mesure le temps.",
			"La vérité de ce lieu était cachée dans la tempête de sable.",
			"Une ombre apparut dans l'obscurité et murmura.",
			"Le savoir interdit a toujours un prix."
		],
		"spanish": [
			"Desierto rojo, un gigantesco reloj de arena mide el tiempo.",
			"La verdad de este lugar estaba oculta en la tormenta de arena.",
			"Una sombra apareció en la oscuridad y susurró.",
			"El conocimiento prohibido siempre tiene un precio."
		],
		"vietnamese": [
			"Sa mạc đỏ, một chiếc đồng hồ cát khổng lồ đong đếm thời gian.",
			"Sự thật về nơi này đã bị che giấu trong bão cát.",
			"Một cái bóng xuất hiện trong bóng tối và thì thầm.",
			"Kiến thức cấm đoán luôn đòi hỏi một cái giá."
		],
		"thai": [
			"ทะเลทรายสีแดง นาฬิกาทรายขนาดยักษ์กำลังนับเวลา",
			"ความจริงของที่นี่ถูกซ่อนอยู่ในพายุทราย",
			"เงาปรากฏขึ้นในความมืดและกระซิบ",
			"ความรู้ต้องห้ามมักจะมาพร้อมกับราคาที่ต้องจ่ายเสมอ"
		],
		"hindi": [
			"लाल रेगिस्तान, एक विशाल रेतघड़ी समय नाप रही है।",
			"इस जगह का सच रेत के तूफान में छिपा था।",
			"अँधेरे में एक परछाई उभरी और फुसफुसाई।",
			"वर्जित ज्ञान हमेशा कीमत चुकाता है।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "모래 폭풍이 몰아치는 사막. 한 남자가 홀로 나타났다.",
						"english": "A desert ravaged by sandstorms. A man appeared alone.",
						"japanese": "砂嵐が吹き荒れる砂漠。一人の男が姿を現した。",
						"chinese": "沙尘暴肆虐的沙漠。一个男人独自出现。",
						"french": "Un désert ravagé par les tempêtes de sable. Un homme apparut seul.",
						"spanish": "Un desierto azotado por tormentas de arena. Un hombre apareció solo.",
						"vietnamese": "Một sa mạc bị bão cát tàn phá. Một người đàn ông xuất hiện một mình.",
						"thai": "ทะเลทรายที่ถูกพายุทรายโหมกระหน่ำ ชายคนหนึ่งปรากฏตัวขึ้นมาเพียงลำพัง",
						"hindi": "रेत के तूफानों से घिरा रेगिस्तान। एक आदमी अकेला प्रकट हुआ।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						5,
						2
					],
					"type": "direction",
					"speaker": "kasai"
				},
				{
					"content": {
						"korean": "오랜만이군, 방랑자.",
						"english": "Long time no see, wanderer.",
						"japanese": "久しぶりだな、放浪者よ。",
						"chinese": "好久不见，流浪者。",
						"french": "Ça fait longtemps, voyageur.",
						"spanish": "Cuánto tiempo, vagabundo.",
						"vietnamese": "Lâu rồi không gặp, kẻ lang thang.",
						"thai": "ไม่เจอกันนานเลยนะ เจ้าผู้พเนจร",
						"hindi": "बहुत समय बाद, घुमक्कड़।"
					},
					"type": "speech",
					"speaker": "kasai",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "당신은….",
						"english": "You are...",
						"japanese": "あなたは…。",
						"chinese": "你是…。",
						"french": "Vous êtes...",
						"spanish": "Tú eres...",
						"vietnamese": "Ngươi là...",
						"thai": "ท่านคือ...",
						"hindi": "तुम हो..."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "나는 카사이. 필요한 것이 있다면, 내가 없는 건 없어.",
						"english": "I am Kasai. If there's something you need, I have everything.",
						"japanese": "私はカサイ。必要なものがあるなら、私にないものはない。",
						"chinese": "我是卡赛。如果你需要什么，我应有尽有。",
						"french": "Je suis Kasaï. Si tu as besoin de quelque chose, je ne manque de rien.",
						"spanish": "Soy Kasai. Si necesitas algo, no hay nada que no tenga.",
						"vietnamese": "Ta là Kasai. Nếu ngươi cần gì, không có gì ta không có.",
						"thai": "ข้าคือคาไซ หากเจ้าต้องการอะไร ข้ามีทุกอย่าง",
						"hindi": "मैं कसाइ हूँ। यदि तुम्हें कुछ चाहिए, तो मेरे पास सब कुछ है।"
					},
					"type": "speech",
					"speaker": "kasai",
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						2
					],
					"speaker": "kasai",
					"type": "direction"
				},
				{
					"content": {
						"korean": "모래시계의 진실? 모두가 아는 진실은 거짓일 때가 많지.",
						"english": "The truth of the hourglass? The truth everyone knows is often a lie.",
						"japanese": "砂時計の真実？皆が知る真実は、しばしば偽りだ。",
						"chinese": "沙漏的真相？众人皆知的真相往往是谎言。",
						"french": "La vérité du sablier ? La vérité que tout le monde connaît est souvent un mensonge.",
						"spanish": "¿La verdad del reloj de arena? La verdad que todos conocen a menudo es una mentira.",
						"vietnamese": "Sự thật về đồng hồ cát? Sự thật mà mọi người đều biết thường là một lời nói dối.",
						"thai": "ความจริงของนาฬิกาทรายรึ? ความจริงที่ทุกคนรู้มักจะเป็นเรื่องโกหก",
						"hindi": "रेतघड़ी का सच? जो सच सब जानते हैं, वह अक्सर झूठ होता है।"
					},
					"speaker": "kasai",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "무슨 소리야.",
						"english": "What do you mean?",
						"japanese": "どういうことだ。",
						"chinese": "什么意思？",
						"french": "Qu'est-ce que tu racontes ?",
						"spanish": "¿Qué quieres decir?",
						"vietnamese": "Ngươi nói gì vậy?",
						"thai": "หมายความว่าอะไร",
						"hindi": "क्या मतलब है?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "나는 금지된 기록을 가지고 있어. 아주 오래된 것들.",
						"english": "I possess forbidden records. Ancient ones.",
						"japanese": "私は禁断の記録を持っている。非常に古いものだ。",
						"chinese": "我拥有禁忌的记录。非常古老的。",
						"french": "Je possède des registres interdits. De très anciens.",
						"spanish": "Tengo registros prohibidos. Muy antiguos.",
						"vietnamese": "Ta giữ những ghi chép cấm. Rất cổ xưa.",
						"thai": "ข้ามีบันทึกต้องห้าม บันทึกที่เก่าแก่มาก",
						"hindi": "मेरे पास वर्जित अभिलेख हैं। बहुत पुराने।"
					},
					"speaker": "kasai",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "kasai",
					"emotion": "base",
					"content": {
						"korean": "모래시계는 완벽하지 않아. '허점'이 존재해.",
						"english": "The hourglass isn't perfect. There are 'flaws'.",
						"japanese": "砂時計は完璧ではない。『欠陥』が存在する。",
						"chinese": "沙漏并不完美。存在着‘漏洞’。",
						"french": "Le sablier n'est pas parfait. Des 'failles' existent.",
						"spanish": "El reloj de arena no es perfecto. Existen 'grietas'.",
						"vietnamese": "Đồng hồ cát không hoàn hảo. Tồn tại 'lỗ hổng'.",
						"thai": "นาฬิกาทรายไม่สมบูรณ์แบบ มี 'ช่องโหว่' อยู่",
						"hindi": "रेतघड़ी परिपूर्ण नहीं है। 'खामियां' मौजूद हैं।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "kasai",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "모래시계는 죄를 심판한다지만, 누군가는 그 '죄'를 만들기도 해.",
						"english": "Though the hourglass judges sins, someone also 'creates' them.",
						"japanese": "砂時計は罪を裁くが、誰かがその『罪』を作り出すこともある。",
						"chinese": "沙漏审判罪恶，但有人也会‘制造’罪恶。",
						"french": "Bien que le sablier juge les péchés, quelqu'un les 'crée' aussi.",
						"spanish": "Aunque el reloj de arena juzga los pecados, alguien también los 'crea'.",
						"vietnamese": "Dù đồng hồ cát phán xét tội lỗi, nhưng cũng có kẻ 'tạo ra' tội lỗi đó.",
						"thai": "แม้ว่านาฬิกาทรายจะตัดสินบาป แต่ก็มีบางคน 'สร้าง' บาปนั้นขึ้นมา",
						"hindi": "हालाँकि रेतघड़ी पापों का न्याय करती है, पर कोई उन 'पापों' को रचता भी है।"
					},
					"type": "speech",
					"speaker": "kasai",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "아슈르가…?",
						"english": "Ashur...?",
						"japanese": "アシュルが…？",
						"chinese": "阿舒尔…？",
						"french": "Ashur...?",
						"spanish": "¿Ashur...?",
						"vietnamese": "Ashur sao…?",
						"thai": "อาชูร์งั้นรึ…?",
						"hindi": "अशूर…?"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "kasai",
					"emotion": "base",
					"content": {
						"korean": "그는 단순한 수호자가 아니었어. 아주 오래전부터 말이지.",
						"english": "He wasn't just a guardian. Not since long, long ago.",
						"japanese": "彼は単なる守護者ではなかった。ずっと昔からだ。",
						"chinese": "他不仅仅是个守护者。从很久以前就是如此。",
						"french": "Il n'était pas un simple gardien. Pas depuis très, très longtemps.",
						"spanish": "No era un simple guardián. No desde hace mucho, mucho tiempo.",
						"vietnamese": "Hắn không chỉ là một người bảo hộ. Từ rất, rất lâu rồi.",
						"thai": "เขาไม่ใช่แค่ผู้พิทักษ์ ไม่ใช่มาตั้งแต่เมื่อนานมาแล้ว",
						"hindi": "वह सिर्फ एक संरक्षक नहीं था। बहुत, बहुत पहले से।"
					}
				},
				{
					"content": {
						"korean": "사막 한가운데 박힌 검 주변의 모래가 미묘하게 진동했다. 마치 살아있는 생명체처럼.",
						"english": "The sand around the sword embedded in the desert subtly vibrated. As if alive.",
						"japanese": "砂漠の真ん中に突き刺さった剣の周りの砂が、微かに振動した。まるで生き物のように。",
						"chinese": "沙漠中央的剑周边的沙子微微颤动。仿佛有生命一般。",
						"french": "Le sable autour de l'épée plantée au milieu du désert vibrait subtilement. Comme une créature vivante.",
						"spanish": "La arena alrededor de la espada clavada en el centro del desierto vibraba sutilmente. Como si fuera un ser vivo.",
						"vietnamese": "Cát xung quanh thanh kiếm cắm giữa sa mạc rung động nhẹ. Như thể một sinh vật sống.",
						"thai": "ทรายรอบดาบที่ปักอยู่กลางทะเลทรายสั่นสะเทือนเบา ๆ ราวกับสิ่งมีชีวิต",
						"hindi": "रेगिस्तान के बीचों-बीच गड़ी तलवार के चारों ओर की रेत सूक्ष्म रूप से कांपी। मानो कोई जीवित प्राणी हो।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그 검… 평범해 보이나? 저 진동은 '허점'의 증거.",
						"english": "That sword... looks ordinary, doesn't it? That vibration is proof of a 'flaw'.",
						"japanese": "あの剣…普通に見えるか？あの振動こそ、『欠陥』の証拠だ。",
						"chinese": "那把剑…看起来很普通？那震动就是‘漏洞’的证据。",
						"french": "Cette épée... a l'air ordinaire, n'est-ce pas ? Cette vibration est la preuve d'une 'faille'.",
						"spanish": "Esa espada... ¿parece ordinaria? Esa vibración es la prueba de una 'grieta'.",
						"vietnamese": "Thanh kiếm đó… trông bình thường ư? Rung động kia là bằng chứng của 'lỗ hổng'.",
						"thai": "ดาบนั่น… ดูธรรมดาใช่ไหม? การสั่นสะเทือนนั่นคือหลักฐานของ 'ช่องโหว่'",
						"hindi": "वह तलवार… क्या साधारण लगती है? वह कंपन 'खामी' का प्रमाण है।"
					},
					"speaker": "kasai",
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						2,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "kasai"
				},
				{
					"content": {
						"korean": "모래시계는 아슈르의 손아귀에 있어. 모든 흐름을 조작하지.",
						"english": "The hourglass is in Ashur's grasp. He manipulates all flows.",
						"japanese": "砂時計はアシュルの手にある。彼はすべての流れを操る。",
						"chinese": "沙漏在阿舒尔的掌控之中。他操纵着一切的流动。",
						"french": "Le sablier est sous l'emprise d'Ashur. Il manipule tous les flux.",
						"spanish": "El reloj de arena está en manos de Ashur. Él manipula todos los flujos.",
						"vietnamese": "Đồng hồ cát nằm trong tay Ashur. Hắn thao túng mọi dòng chảy.",
						"thai": "นาฬิกาทรายอยู่ในกำมือของอาชูร์ เขาบงการทุกกระแส",
						"hindi": "रेतघड़ी अशूर की गिरफ्त में है। वह सभी प्रवाहों में हेरफेर करता है।"
					},
					"speaker": "kasai",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "우리가 뭘 할 수 있지?",
						"english": "What can we do?",
						"japanese": "我々は何ができる？",
						"chinese": "我们能做什么？",
						"french": "Que pouvons-nous faire ?",
						"spanish": "¿Qué podemos hacer?",
						"vietnamese": "Chúng ta có thể làm gì?",
						"thai": "เราทำอะไรได้บ้าง?",
						"hindi": "हम क्या कर सकते हैं?"
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "진실을 밝히는 것만이 그의 계획을 멈출 수 있어.",
						"english": "Only revealing the truth can stop his plan.",
						"japanese": "真実を明らかにすることだけが、彼の計画を止められる。",
						"chinese": "只有揭露真相才能阻止他的计划。",
						"french": "Seule la révélation de la vérité peut arrêter son plan.",
						"spanish": "Solo revelar la verdad puede detener su plan.",
						"vietnamese": "Chỉ có việc phơi bày sự thật mới có thể ngăn chặn kế hoạch của hắn.",
						"thai": "การเปิดเผยความจริงเท่านั้นที่จะหยุดแผนของเขาได้",
						"hindi": "केवल सच उजागर करना ही उसकी योजना रोक सकता है।"
					},
					"type": "speech",
					"speaker": "kasai",
					"emotion": "base"
				},
				{
					"speaker": "kasai",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "하지만 그 길은 고통스러울 거야.",
						"english": "But that path will be painful.",
						"japanese": "しかし、その道は苦痛だろう。",
						"chinese": "但那条路会很痛苦。",
						"french": "Mais ce chemin sera douloureux.",
						"spanish": "Pero ese camino será doloroso.",
						"vietnamese": "Nhưng con đường đó sẽ đầy đau khổ.",
						"thai": "แต่เส้นทางนั้นจะเจ็บปวด",
						"hindi": "लेकिन वह रास्ता दर्दनाक होगा।"
					}
				}
			]
		},
		{
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "크윽… 어리석은… {random_boss}의 심판은… 끝나지 않아.",
						"english": "Ugh... foolish... The judgment of {random_boss}... is not over.",
						"japanese": "くっ…愚かな…{random_boss}の審判は…終わらない。",
						"chinese": "呃……愚蠢的……{random_boss}的审判……不会结束。",
						"french": "Ugh... Insensés... Le jugement de {random_boss}... n'est pas terminé.",
						"spanish": "Uf... estúpidos... El juicio de {random_boss}... no ha terminado.",
						"vietnamese": "Khụ… ngu ngốc… Phán xét của {random_boss}… sẽ không kết thúc.",
						"thai": "อึก… โง่เขลา… การพิพากษาของ {random_boss}… ยังไม่จบสิ้น",
						"hindi": "उफ़... मूर्ख... {random_boss} का न्याय... खत्म नहीं हुआ है।"
					}
				},
				{
					"content": {
						"korean": "끝은 우리가 만들어.",
						"english": "We create the end.",
						"japanese": "終わりは私たちが作る。",
						"chinese": "结局由我们来创造。",
						"french": "C'est nous qui créons la fin.",
						"spanish": "Nosotros creamos el final.",
						"vietnamese": "Chúng ta sẽ tạo ra kết thúc.",
						"thai": "เราจะสร้างจุดจบ",
						"hindi": "अंत हम बनाएंगे।"
					},
					"speaker": "character_any",
					"emotion": "happy",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그림자는 사라졌지만, 진실은 여전히 모래 속에 잠들어 있었다. 더 깊은 곳에서 아슈르의 그림자가 느껴졌다.",
						"english": "The shadow vanished, but the truth still slumbered within the sands. Deeper within, Ashur's shadow was felt.",
						"japanese": "影は消えたが、真実はまだ砂の中に眠っていた。さらに深淵で、アシュールの影が感じられた。",
						"chinese": "影子消失了，但真相仍沉睡在沙中。在更深处，感受到了阿舒尔的阴影。",
						"french": "L'ombre disparut, mais la vérité sommeillait toujours dans les sables. Plus profondément, l'ombre d'Ashur se fit sentir.",
						"spanish": "La sombra se desvaneció, pero la verdad aún dormía en la arena. Más profundo, se sintió la sombra de Ashur.",
						"vietnamese": "Cái bóng biến mất, nhưng sự thật vẫn còn ngủ yên trong cát. Sâu hơn bên trong, bóng của Ashur được cảm nhận.",
						"thai": "เงาหายไป แต่ความจริงยังคงหลับใหลอยู่ในผืนทราย ลึกลงไปอีก เงาของอาชูรก็สัมผัสได้",
						"hindi": "छाया गायब हो गई, लेकिन सच अभी भी रेत में सोया हुआ था। और गहराई में, अशूर की छाया महसूस हुई।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "모래 폭풍이 걷히자 거대한 그림자가 모습을 드러냈다.",
						"english": "As the sandstorm cleared, a colossal shadow emerged.",
						"japanese": "砂嵐が晴れると、巨大な影が現れた。",
						"chinese": "沙尘暴消散后，一个巨大的身影显现出来。",
						"french": "La tempête de sable s'étant dissipée, une ombre colossale apparut.",
						"spanish": "Al disiparse la tormenta de arena, una sombra colosal emergió.",
						"vietnamese": "Khi bão cát tan đi, một cái bóng khổng lồ hiện ra.",
						"thai": "เมื่อพายุทรายสงบลง เงาขนาดมหึมาก็ปรากฏขึ้น",
						"hindi": "जैसे ही रेत का तूफान हटा, एक विशाल छाया प्रकट हुई।"
					}
				},
				{
					"content": {
						"korean": "이곳에 발을 들인 어리석은 자들.",
						"english": "Fools who set foot in this place.",
						"japanese": "ここに足を踏み入れた愚か者たち。",
						"chinese": "踏足此地的愚蠢之人。",
						"french": "Imbéciles qui osent poser le pied ici.",
						"spanish": "Necios que pisaron este lugar.",
						"vietnamese": "Lũ ngu ngốc dám đặt chân đến nơi này.",
						"thai": "พวกโง่เขลาที่เหยียบย่างเข้ามาในที่แห่งนี้",
						"hindi": "मूर्ख जिन्होंने इस जगह पर कदम रखा।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "우리가 두려울 줄 알아?",
						"english": "Do you think we fear you?",
						"japanese": "我々を恐れるとでも？",
						"chinese": "你们以为我们会害怕吗？",
						"french": "Pensez-vous que nous vous craignons ?",
						"spanish": "¿Crees que te tememos?",
						"vietnamese": "Ngươi nghĩ chúng ta sẽ sợ ngươi sao?",
						"thai": "คิดว่าเราจะกลัวเจ้าหรือไง?",
						"hindi": "क्या तुम्हें लगता है कि हम तुमसे डरते हैं?"
					}
				},
				{
					"content": {
						"korean": "모래시계의 심판은 누구도 거스를 수 없어.",
						"english": "No one can defy the judgment of the hourglass.",
						"japanese": "砂時計の審判は、誰にも逆らえない。",
						"chinese": "沙漏的审判无人能违抗。",
						"french": "Nul ne peut défier le jugement du sablier.",
						"spanish": "Nadie puede desafiar el juicio del reloj de arena.",
						"vietnamese": "Không ai có thể chống lại phán xét của đồng hồ cát.",
						"thai": "ไม่มีใครต้านทานการพิพากษาของนาฬิกาทรายได้",
						"hindi": "रेत घड़ी के फैसले को कोई नहीं टाल सकता।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "하찮은 저항… 모래시계는 멈추지 않아.",
						"english": "Futile resistance... The hourglass never stops.",
						"japanese": "くだらない抵抗… 砂時計は止まらない。",
						"chinese": "微不足道的抵抗……沙漏永不停歇。",
						"french": "Résistance futile... Le sablier ne s'arrête jamais.",
						"spanish": "Resistencia inútil... El reloj de arena no se detiene.",
						"vietnamese": "Sự kháng cự vô ích… Đồng hồ cát sẽ không dừng lại.",
						"thai": "การต่อต้านที่ไร้ค่า… นาฬิกาทรายไม่เคยหยุด",
						"hindi": "तुच्छ प्रतिरोध... रेत घड़ी कभी नहीं रुकती।"
					},
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "아직 끝나지 않았어. 포기 안 해.",
						"english": "It's not over yet. I won't give up.",
						"japanese": "まだ終わってない。諦めない。",
						"chinese": "还没结束。我不会放弃。",
						"french": "Ce n'est pas encore fini. Je n'abandonnerai pas.",
						"spanish": "Aún no ha terminado. No me rendiré.",
						"vietnamese": "Vẫn chưa kết thúc. Tôi sẽ không bỏ cuộc.",
						"thai": "ยังไม่จบ ฉันจะไม่ยอมแพ้",
						"hindi": "अभी खत्म नहीं हुआ है। मैं हार नहीं मानूंगा।"
					}
				}
			]
		}
	]
} as const;
