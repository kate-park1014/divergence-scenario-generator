export const scenario_hell_pool_105_02 = {
	"scenario_id": "hell_pool_105_02",
	"order": 2,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"ash": {
			"id": "mon_b225f5fa-59a1-47bb-b4c5-e73bf9e7192a",
			"name": {
				"korean": "애쉬",
				"english": "Ash",
				"japanese": "アッシュ",
				"chinese": "艾什",
				"french": "Ash",
				"spanish": "Ash",
				"vietnamese": "Ash",
				"thai": "แอช",
				"hindi": "ऐश"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/d84413a8-9d6f-4a40-5d36-75e431fb9900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/78281fca-e4b8-45cc-68ef-7df3fef74200/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"지옥의 아카이브. 이곳은 탈출구 없는 미로.",
			"모두 키란 테즈의 달콤한 약속을 믿었다.",
			"하지만 그 약속은 썩어가는 영혼을 위한 함정이었다.",
			"또 한 명의 희망이 절망으로 추락하려 한다."
		],
		"english": [
			"Archives of Hell. A maze with no escape.",
			"Everyone believed Kiran Tez's sweet promises.",
			"But those promises were a trap for decaying souls.",
			"Another hope is about to fall into despair."
		],
		"japanese": [
			"地獄の書庫。ここは出口のない迷宮。",
			"誰もがキラン・テズの甘い約束を信じた。",
			"しかし、その約束は朽ちゆく魂のための罠だった。",
			"また一人の希望が絶望へと墜ちようとしている。"
		],
		"chinese": [
			"地狱档案。这是没有出口的迷宫。",
			"所有人都相信了基兰·特兹的甜蜜承诺。",
			"但那些承诺是为腐朽灵魂设下的陷阱。",
			"又一个希望即将坠入绝望。"
		],
		"french": [
			"Archives de l'Enfer. Un labyrinthe sans issue.",
			"Tous croyaient aux douces promesses de Kiran Tez.",
			"Mais ces promesses étaient un piège pour les âmes en décomposition.",
			"Un autre espoir est sur le point de tomber dans le désespoir."
		],
		"spanish": [
			"Archivos del Infierno. Un laberinto sin salida.",
			"Todos creyeron las dulces promesas de Kiran Tez.",
			"Pero esas promesas eran una trampa para almas en descomposición.",
			"Otra esperanza está a punto de caer en la desesperación."
		],
		"vietnamese": [
			"Kho lưu trữ địa ngục. Một mê cung không lối thoát.",
			"Mọi người đều tin vào lời hứa ngọt ngào của Kiran Tez.",
			"Nhưng những lời hứa đó là một cái bẫy cho những linh hồn đang mục rữa.",
			"Một hy vọng nữa sắp rơi vào tuyệt vọng."
		],
		"thai": [
			"คลังนรก. เขาวงกตที่ไม่มีทางออก.",
			"ทุกคนเชื่อในคำสัญญาอันหอมหวานของคิรัน เทซ.",
			"แต่คำสัญญาเหล่านั้นคือกับดักสำหรับวิญญาณที่กำลังเน่าเปื่อย.",
			"ความหวังอีกหนึ่งกำลังจะร่วงหล่นสู่ความสิ้นหวัง."
		],
		"hindi": [
			"नरक का अभिलेखागार। एक ऐसा भूलभुलैया जहाँ से कोई बच नहीं सकता।",
			"सब ने किरण तेज़ के मीठे वादों पर विश्वास किया।",
			"लेकिन वो वादे सड़ती हुई आत्माओं के लिए एक जाल थे।",
			"एक और आशा निराशा में गिरने वाली है।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "어둠 속에서 희미한 빛이 일렁였다. 무언가 움직이고 있었다.",
						"english": "A faint light flickered in the dark. Something was moving.",
						"japanese": "闇の中で微かな光が揺らめいた。何かが動いていた。",
						"chinese": "黑暗中，微弱的光芒闪烁。有什么东西在移动。",
						"french": "Une faible lumière vacillait dans l'obscurité. Quelque chose bougeait.",
						"spanish": "Una luz tenue parpadeó en la oscuridad. Algo se movía.",
						"vietnamese": "Một ánh sáng mờ nhấp nháy trong bóng tối. Có thứ gì đó đang di chuyển.",
						"thai": "แสงริบหรี่สั่นไหวในความมืด มีบางสิ่งกำลังเคลื่อนไหว.",
						"hindi": "अंधेरे में एक धीमी रोशनी टिमटिमा रही थी। कुछ हिल रहा था।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "direction",
					"speaker": "ash",
					"spot": [
						5,
						2
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "ash",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "제발… 도와줘. 여기서 나가야 해.",
						"english": "Please... help me. I have to get out of here.",
						"japanese": "お願い…助けて。ここから出ないと。",
						"chinese": "拜托…救救我。我必须离开这里。",
						"french": "S'il te plaît... aide-moi. Je dois sortir d'ici.",
						"spanish": "Por favor... ayúdame. Tengo que salir de aquí.",
						"vietnamese": "Làm ơn... giúp tôi. Tôi phải ra khỏi đây.",
						"thai": "ได้โปรด...ช่วยฉันด้วย ฉันต้องออกไปจากที่นี่.",
						"hindi": "कृपया... मेरी मदद करो। मुझे यहाँ से बाहर निकलना है।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "누구야? 왜 여기에 갇혀있지?",
						"english": "Who are you? Why are you trapped here?",
						"japanese": "誰だ？なぜここに閉じ込められている？",
						"chinese": "你是谁？为什么被困在这里？",
						"french": "Qui es-tu ? Pourquoi es-tu piégé ici ?",
						"spanish": "¿Quién eres? ¿Por qué estás atrapado aquí?",
						"vietnamese": "Ngươi là ai? Sao lại bị mắc kẹt ở đây?",
						"thai": "คุณเป็นใคร? ทำไมถึงถูกขังอยู่ที่นี่?",
						"hindi": "तुम कौन हो? तुम्हें यहाँ क्यों कैद किया गया है?"
					}
				},
				{
					"content": {
						"korean": "애쉬라고 해… 키란 테즈의 감언이설에 속아 여기까지 왔어.",
						"english": "I'm Ash... I was tricked by Kiran Tez's sweet talk and ended up here.",
						"japanese": "アッシュだ… キラン・テズの甘い誘惑に騙されて、ここまで来てしまった。",
						"chinese": "我是艾什… 被基兰·特兹的花言巧语骗到这里来的。",
						"french": "Je m'appelle Ash... J'ai été trompé par les belles paroles de Kiran Tez et me suis retrouvé ici.",
						"spanish": "Soy Ash... Me engañaron las palabras dulces de Kiran Tez y terminé aquí.",
						"vietnamese": "Tôi là Ash... Tôi đã bị lừa bởi lời ngon tiếng ngọt của Kiran Tez và đến đây.",
						"thai": "ฉันชื่อแอช... ถูกหลอกด้วยคำพูดหวานหูของคิรัน เทซ จนมาอยู่ที่นี่.",
						"hindi": "मैं ऐश हूँ... किरण तेज़ की मीठी बातों से धोखे में आकर यहाँ आ गया।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "ash"
				},
				{
					"type": "speech",
					"content": {
						"korean": "여기, 영혼이… 흡수되고 있어. 천천히… 사라지고 있다고!",
						"english": "Here, my soul... it's being absorbed. Slowly... it's vanishing!",
						"japanese": "ここで、魂が… 吸収されている。ゆっくりと… 消え去っていく！",
						"chinese": "这里，灵魂… 正在被吸收。慢慢地… 正在消失！",
						"french": "Ici, mon âme... elle est absorbée. Lentement... elle disparaît !",
						"spanish": "Aquí, mi alma... está siendo absorbida. Lentamente... ¡está desapareciendo!",
						"vietnamese": "Ở đây, linh hồn... đang bị hút cạn. Dần dần... nó đang biến mất!",
						"thai": "ที่นี่ วิญญาณ... กำลังถูกดูดซับไป ช้าๆ... มันกำลังหายไป!",
						"hindi": "यहाँ, आत्मा... अवशोषित हो रही है। धीरे-धीरे... यह गायब हो रही है!"
					},
					"speaker": "ash",
					"emotion": "angry"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "ash",
					"spot": [
						5,
						2
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "키란 테즈는 거짓말쟁이야. 우리에게 자유를 줄 것처럼 속였어.",
						"english": "Kiran Tez is a liar. He tricked us into thinking he'd give us freedom.",
						"japanese": "キラン・テズは嘘つきだ。私たちに自由を与えるかのように騙したんだ。",
						"chinese": "基兰·特兹是个骗子。他欺骗我们，假装会给我们自由。",
						"french": "Kiran Tez est un menteur. Il nous a trompés en nous faisant croire qu'il nous donnerait la liberté.",
						"spanish": "Kiran Tez es un mentiroso. Nos engañó haciéndonos creer que nos daría libertad.",
						"vietnamese": "Kiran Tez là một kẻ dối trá. Hắn lừa chúng ta rằng sẽ cho chúng ta tự do.",
						"thai": "คิรัน เทซ เป็นคนโกหก เขาหลอกเราว่าจะมอบอิสรภาพให้.",
						"hindi": "किरण तेज़ झूठा है। उसने हमें आज़ादी देने का झांसा दिया।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "ash"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "흡수된다니… 무슨 의미지?",
						"english": "Absorbed...? What does that mean?",
						"japanese": "吸収されるって…どういう意味だ？",
						"chinese": "被吸收了……什么意思？",
						"french": "Absorbés... Qu'est-ce que ça veut dire ?",
						"spanish": "¿Absorbidos...? ¿Qué significa eso?",
						"vietnamese": "Bị hấp thụ...? Ý nghĩa là gì?",
						"thai": "ถูกดูดกลืน...หมายความว่าไง?",
						"hindi": "शोषित हो रहे हैं... इसका क्या मतलब है?"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "ash",
					"content": {
						"korean": "봐… 저 희미한 빛들. 전부 영혼이야. 서서히 힘을 잃고 있어.",
						"english": "Look... those faint lights. They're all souls. Slowly losing their power.",
						"japanese": "見て…あの微かな光。あれは全部魂だ。徐々に力を失っている。",
						"chinese": "看……那些微弱的光。那都是灵魂。它们正在慢慢失去力量。",
						"french": "Regarde... ces faibles lueurs. Ce sont toutes des âmes. Elles perdent lentement leur pouvoir.",
						"spanish": "Mira... esas luces tenues. Son todas almas. Están perdiendo su poder lentamente.",
						"vietnamese": "Nhìn kìa... những ánh sáng mờ nhạt đó. Tất cả đều là linh hồn. Chúng đang dần mất đi sức mạnh.",
						"thai": "ดูสิ...แสงริบหรี่พวกนั้น ทั้งหมดคือวิญญาณ กำลังค่อยๆ สูญเสียพลังไป",
						"hindi": "देखो... वो धुंधली रोशनी। वे सब आत्माएँ हैं। धीरे-धीरे अपनी शक्ति खो रही हैं।"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "ash",
					"content": {
						"korean": "여기 갇힌 모든 영혼이 결국엔… 그에게 바쳐질 거야.",
						"english": "Every soul trapped here will eventually... be offered to him.",
						"japanese": "ここに囚われた全ての魂が、結局は…彼に捧げられるだろう。",
						"chinese": "所有被困在这里的灵魂，最终都将……献祭给他。",
						"french": "Toutes les âmes piégées ici finiront par... lui être offertes.",
						"spanish": "Todas las almas atrapadas aquí eventualmente... serán ofrecidas a él.",
						"vietnamese": "Mọi linh hồn bị giam cầm ở đây cuối cùng sẽ... bị hiến tế cho hắn.",
						"thai": "วิญญาณทุกดวงที่ติดอยู่ที่นี่ ในที่สุดก็จะ...ถูกมอบให้เขา",
						"hindi": "यहां फंसी हर आत्मा अंततः... उसे अर्पित कर दी जाएगी।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						5,
						2
					],
					"speaker": "ash",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"speaker": "ash",
					"content": {
						"korean": "더 늦기 전에 도망쳐야 해. 내가 길을 열어줄게.",
						"english": "We have to escape before it's too late. I'll clear a path for you.",
						"japanese": "手遅れになる前に逃げないと。私が道を開く。",
						"chinese": "趁为时未晚，我们必须逃走。我来为你们开路。",
						"french": "Nous devons nous échapper avant qu'il ne soit trop tard. Je vais t'ouvrir la voie.",
						"spanish": "Tenemos que escapar antes de que sea demasiado tarde. Yo te abriré el camino.",
						"vietnamese": "Chúng ta phải trốn thoát trước khi quá muộn. Ta sẽ mở đường cho ngươi.",
						"thai": "ต้องหนีไปก่อนจะสายเกินไป ฉันจะเปิดทางให้",
						"hindi": "हमें बहुत देर होने से पहले भागना होगा। मैं तुम्हारे लिए रास्ता बना दूँगा।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "무슨 함정이라도 있는 건가?",
						"english": "Is there some kind of trap?",
						"japanese": "何か罠でもあるのか？",
						"chinese": "难道有什么陷阱吗？",
						"french": "Y a-t-il un piège ?",
						"spanish": "¿Hay alguna trampa?",
						"vietnamese": "Có phải có bẫy không?",
						"thai": "มีกับดักอะไรอยู่หรือเปล่า?",
						"hindi": "क्या कोई जाल है?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "희미하게 빛나던 영혼의 잔재들이 어둠 속으로 빨려 들어갔다. 지옥의 차원문이 숨겨진 듯했다.",
						"english": "The faintly glowing remnants of souls were sucked into the darkness. A hellish portal seemed to be hidden.",
						"japanese": "微かに光っていた魂の残滓が闇に吸い込まれていった。地獄の次元門が隠されているようだった。",
						"chinese": "微弱发光的灵魂残余被吸入了黑暗。似乎隐藏着一个地狱之门。",
						"french": "Les vestiges d'âmes faiblement lumineuses furent aspirés dans les ténèbres. Un portail infernal semblait être caché.",
						"spanish": "Los restos de almas que brillaban débilmente fueron absorbidos por la oscuridad. Un portal infernal parecía estar oculto.",
						"vietnamese": "Tàn dư linh hồn phát sáng mờ nhạt bị hút vào bóng tối. Có vẻ như một cánh cổng địa ngục đang ẩn mình.",
						"thai": "เศษเสี้ยววิญญาณที่เรืองรองจางๆ ถูกดูดกลืนเข้าสู่ความมืด ประตูมิติแห่งขุมนรกดูเหมือนจะซ่อนอยู่",
						"hindi": "धुंधली चमकती आत्माओं के अवशेष अंधेरे में खींच लिए गए। ऐसा लग रहा था जैसे नर्क का एक पोर्टल छिपा हुआ हो।"
					}
				},
				{
					"speaker": "ash",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "시간이 없어! 저들이… 우릴 쫓고 있어!",
						"english": "No time! They're... chasing us!",
						"japanese": "時間がない！奴らが…俺たちを追っている！",
						"chinese": "没时间了！他们……正在追我们！",
						"french": "Plus le temps ! Ils... nous poursuivent !",
						"spanish": "¡No hay tiempo! ¡Nos... están persiguiendo!",
						"vietnamese": "Không còn thời gian! Bọn chúng... đang đuổi theo chúng ta!",
						"thai": "ไม่มีเวลาแล้ว! พวกนั้น...กำลังตามเรามา!",
						"hindi": "समय नहीं है! वे... हमारा पीछा कर रहे हैं!"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						5,
						2
					],
					"speaker": "ash"
				},
				{
					"emotion": "happy",
					"speaker": "ash",
					"content": {
						"korean": "저기… 저 문으로 가면 돼! 우리가 찾던 길이야!",
						"english": "There... we go through that door! It's the path we were looking for!",
						"japanese": "あそこだ…あの扉に行けばいい！私たちが探していた道だ！",
						"chinese": "那里……穿过那扇门就行了！那正是我们一直在找的路！",
						"french": "Là... on passe par cette porte ! C'est le chemin que nous cherchions !",
						"spanish": "¡Allí... vamos por esa puerta! ¡Es el camino que estábamos buscando!",
						"vietnamese": "Ở đó... đi qua cánh cửa đó! Đó là con đường chúng ta đang tìm!",
						"thai": "ตรงนั้น...เราไปประตูนั้นเลย! คือทางที่เราตามหา!",
						"hindi": "वहाँ... उस दरवाजे से जाओ! यही वह रास्ता है जिसकी हम तलाश कर रहे थे!"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "잠깐… 뭔가 이상해.",
						"english": "Wait... something's wrong.",
						"japanese": "待て…何かおかしい。",
						"chinese": "等等……有点不对劲。",
						"french": "Attends... quelque chose ne va pas.",
						"spanish": "Espera... algo anda mal.",
						"vietnamese": "Chờ đã... có gì đó không ổn.",
						"thai": "เดี๋ยว...มีอะไรแปลกๆ",
						"hindi": "रुको... कुछ गड़बड़ है।"
					}
				},
				{
					"content": {
						"korean": "애쉬의 발 밑에서 검은 그림자가 솟아올랐다. 거대한 함정이었다.",
						"english": "A black shadow rose from under Ash's feet. It was a massive trap.",
						"japanese": "アッシュの足元から黒い影が湧き上がった。それは巨大な罠だった。",
						"chinese": "一道黑影从艾什的脚下升起。那是一个巨大的陷阱。",
						"french": "Une ombre noire surgit sous les pieds d'Ash. C'était un piège gigantesque.",
						"spanish": "Una sombra negra surgió bajo los pies de Ash. Era una trampa enorme.",
						"vietnamese": "Một bóng đen trỗi dậy từ dưới chân Ash. Đó là một cái bẫy khổng lồ.",
						"thai": "เงาดำพุ่งขึ้นมาจากใต้เท้าของแอช มันคือกกับดักขนาดใหญ่",
						"hindi": "ऐश के पैरों के नीचे से एक काली छाया उठी। यह एक विशाल जाल था।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "아… 아니야! 이건… 키란 테즈가…!",
						"english": "N-no! This… Kiran Tezz…!",
						"japanese": "「あ…違う！これは…キラン・テズが…！」",
						"chinese": "“不…不是！这…这是奇兰·特兹…！”",
						"french": "« N-non ! C'est… Kiran Tezz… ! »",
						"spanish": "« ¡N-no! Esto es… Kiran Tezz…! »",
						"vietnamese": "« K-không! Đây là… Kiran Tezz…! »",
						"thai": "« ม-ไม่นะ! นี่มัน… คีรัน เทซ…! »",
						"hindi": "« न-नहीं! यह… किरण टेज़…! »"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "ash"
				},
				{
					"content": {
						"korean": "애쉬의 몸이 어둠에 잠식되기 시작했다. 이미 늦었다.",
						"english": "Ash's body began to be consumed by darkness. It was already too late.",
						"japanese": "アッシュの体が闇に侵食され始めた。もう手遅れだった。",
						"chinese": "艾什的身体开始被黑暗侵蚀。已经太迟了。",
						"french": "Le corps d'Ash commença à être consumé par les ténèbres. Il était déjà trop tard.",
						"spanish": "El cuerpo de Ash comenzó a ser consumido por la oscuridad. Ya era demasiado tarde.",
						"vietnamese": "Cơ thể của Ash bắt đầu bị bóng tối nuốt chửng. Đã quá muộn rồi.",
						"thai": "ร่างกายของแอชเริ่มถูกความมืดกลืนกิน สายเกินไปแล้ว.",
						"hindi": "ऐश का शरीर अंधेरे में समाने लगा। बहुत देर हो चुकी थी।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "어둠이 모든 것을 집어삼켰다. 희망은 사라졌다.",
						"english": "Darkness swallowed everything. Hope vanished.",
						"japanese": "闇がすべてを飲み込んだ。希望は消え去った。",
						"chinese": "黑暗吞噬了一切。希望消失了。",
						"french": "L'obscurité a tout englouti. L'espoir a disparu.",
						"spanish": "La oscuridad lo envolvió todo. La esperanza se desvaneció.",
						"vietnamese": "Bóng tối nuốt chửng mọi thứ. Hy vọng tan biến.",
						"thai": "ความมืดกลืนกินทุกสิ่ง ความหวังหายไปแล้ว",
						"hindi": "अंधेरे ने सब कुछ निगल लिया। आशा लुप्त हो गई।"
					}
				},
				{
					"content": {
						"korean": "작은 영혼이여… 너 역시 결국 {random_boss}의 일부가 될 뿐.",
						"english": "Little soul... you too will eventually become part of {random_boss}.",
						"japanese": "小さな魂よ… お前も結局 {random_boss} の一部となるだけだ。",
						"chinese": "小小的灵魂啊……你最终也会成为{random_boss}的一部分。",
						"french": "Petite âme... toi aussi, tu finiras par faire partie de {random_boss}.",
						"spanish": "Pequeña alma... tú también, al final, te convertirás en parte de {random_boss}.",
						"vietnamese": "Linh hồn bé nhỏ... ngươi rồi cũng sẽ trở thành một phần của {random_boss} mà thôi.",
						"thai": "วิญญาณดวงน้อย... เจ้าเองก็จะเป็นส่วนหนึ่งของ {random_boss} ในที่สุด",
						"hindi": "छोटी आत्मा... तुम भी अंततः {random_boss} का हिस्सा बन जाओगे।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "…아직 포기할 순 없어. 진실을 밝혀낼 때까지…!",
						"english": "...I can't give up yet. Not until I uncover the truth...!",
						"japanese": "…まだ諦めるわけにはいかない。真実を明らかにするまで…！",
						"chinese": "……我不能放弃。直到揭露真相为止……！",
						"french": "...Je ne peux pas encore abandonner. Pas avant d'avoir découvert la vérité...!",
						"spanish": "...No puedo rendirme todavía. ¡No hasta que descubra la verdad...!",
						"vietnamese": "...Tôi chưa thể từ bỏ. Cho đến khi tôi khám phá ra sự thật...!",
						"thai": "...ฉันยังยอมแพ้ไม่ได้ จนกว่าจะเปิดเผยความจริง...!",
						"hindi": "...मैं अभी हार नहीं मान सकता। जब तक मैं सच का पता नहीं लगा लेता...!"
					},
					"type": "speech"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 서서히 흩어졌다. 애쉬의 형체가 희미하게 보였다.",
						"english": "The colossal shadow slowly dispersed. Ash's faint form became visible.",
						"japanese": "巨大な影がゆっくりと散っていった。アッシュの姿がうっすらと見えた。",
						"chinese": "巨大的阴影渐渐消散。艾什的身影依稀可见。",
						"french": "L'ombre colossale se dispersa lentement. La forme indistincte d'Ash apparut.",
						"spanish": "La sombra colosal se dispersó lentamente. La forma tenue de Ash se hizo visible.",
						"vietnamese": "Cái bóng khổng lồ dần tan biến. Dáng vẻ mờ nhạt của Ash hiện ra.",
						"thai": "เงาขนาดมหึมาค่อยๆ สลายไป. ร่างที่เลือนรางของแอชปรากฏให้เห็น.",
						"hindi": "विशाल छाया धीरे-धीरे बिखर गई। ऐश की धुंधली आकृति दिखाई दी।"
					},
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "ash",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "…키란 테즈… 그는… 모두를 속이고 있어…",
						"english": "…Kiran Tezz… he's… deceiving everyone…",
						"japanese": "「…キラン・テズ…彼は…皆を欺いている…」",
						"chinese": "“……奇兰·特兹……他……在欺骗所有人……”",
						"french": "« …Kiran Tezz… il… trompe tout le monde… »",
						"spanish": "« …Kiran Tezz… él… está engañando a todos… »",
						"vietnamese": "« …Kiran Tezz… hắn… đang lừa dối tất cả mọi người… »",
						"thai": "« …คีรัน เทซ… เขา… กำลังหลอกลวงทุกคน… »",
						"hindi": "« …किरण टेज़… वह… सबको धोखा दे रहा है… »"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "ash"
				},
				{
					"emotion": "sad",
					"speaker": "ash",
					"content": {
						"korean": "…절대… 그를 믿지 마… 그는… 악마야…",
						"english": "…Never… trust him… he's… a demon…",
						"japanese": "「…絶対…彼を信じるな…彼は…悪魔だ…」",
						"chinese": "“……绝不……要相信他……他……是恶魔……”",
						"french": "« …Ne le… croyez jamais… c'est… un démon… »",
						"spanish": "« …Nunca… confíes en él… es… un demonio… »",
						"vietnamese": "« …Tuyệt đối… đừng tin hắn… hắn… là quỷ dữ… »",
						"thai": "« …อย่า… เชื่อเขาเด็ดขาด… เขา… คือปีศาจ… »",
						"hindi": "« …कभी… उस पर भरोसा मत करना… वह… एक शैतान है… »"
					},
					"type": "speech"
				},
				{
					"speaker": "ash",
					"type": "direction",
					"duration_ms": 400,
					"action": "exit",
					"direction": "up"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "애쉬… 거짓말이라고 해줘.",
						"english": "Ash... tell me it's a lie.",
						"japanese": "アッシュ… 嘘だと言ってくれ。",
						"chinese": "艾什……告诉我这不是真的。",
						"french": "Ash... dis-moi que c'est un mensonge.",
						"spanish": "Ash... dime que es mentira.",
						"vietnamese": "Ash... hãy nói với tôi đó là một lời nói dối.",
						"thai": "แอช... บอกฉันทีว่ามันเป็นเรื่องโกหก",
						"hindi": "ऐश... मुझसे कहो कि यह झूठ है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "키란 테즈… 그는 도대체….",
						"english": "Kiran Tez... who exactly is he...?",
						"japanese": "キラン・テズ…一体彼は…。",
						"chinese": "基兰·泰兹……他究竟是谁……。",
						"french": "Kiran Tez... qui est-il au juste...?",
						"spanish": "Kiran Tez... ¿quién es él exactamente...?",
						"vietnamese": "Kiran Tez... rốt cuộc anh ta là ai...?",
						"thai": "กิรัน เทซ... เขาเป็นใครกันแน่...?",
						"hindi": "किरण तेज़... वह आखिर कौन है...?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "애쉬의 죽음은 주인공에게 깊은 의심을 남겼다. 이 지옥의 목적은 무엇인가?",
						"english": "Ash's death left the protagonist with deep doubts. What is the purpose of this hell?",
						"japanese": "アッシュの死は主人公に深い疑念を残した。この地獄の目的は何なのか？",
						"chinese": "艾什的死给主角留下了深深的疑虑。这个地狱的目的究竟是什么？",
						"french": "La mort d'Ash laissa le protagoniste avec de profonds doutes. Quel est le but de cet enfer ?",
						"spanish": "La muerte de Ash dejó al protagonista con profundas dudas. ¿Cuál es el propósito de este infierno?",
						"vietnamese": "Cái chết của Ash để lại cho nhân vật chính những nghi ngờ sâu sắc. Mục đích của địa ngục này là gì?",
						"thai": "การตายของแอชทำให้ตัวเอกเกิดความสงสัยอย่างมาก จุดประสงค์ของนรกนี้คืออะไร?",
						"hindi": "ऐश की मौत ने नायक के मन में गहरी शंकाएँ छोड़ दीं। इस नरक का उद्देश्य क्या है?"
					}
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "어둠이 응축되고, 거대한 그림자가 형체를 갖춰갔다.",
						"english": "Darkness condensed, and a colossal shadow took shape.",
						"japanese": "闇が凝縮し、巨大な影が形を成していった。",
						"chinese": "黑暗凝聚，巨大的阴影逐渐成形。",
						"french": "L'obscurité se condensa, et une ombre colossale prit forme.",
						"spanish": "La oscuridad se condensó y una sombra colosal tomó forma.",
						"vietnamese": "Bóng tối ngưng tụ, và một cái bóng khổng lồ bắt đầu thành hình.",
						"thai": "ความมืดรวมตัวกัน และเงาขนาดมหึมาก็เริ่มก่อตัวขึ้น.",
						"hindi": "अंधेरा घना हुआ और एक विशाल छाया ने आकार ले लिया।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "환영한다, 영혼이여. 너희의 절망은 내 힘이 된다.",
						"english": "Welcome, souls. Your despair becomes my strength.",
						"japanese": "「ようこそ、魂よ。お前たちの絶望は我が力となる。」",
						"chinese": "“欢迎，灵魂。你们的绝望将成为我的力量。”",
						"french": "« Bienvenue, âmes. Votre désespoir devient ma force. »",
						"spanish": "« Bienvenidos, almas. Vuestra desesperación se convierte en mi fuerza. »",
						"vietnamese": "« Chào mừng, các linh hồn. Sự tuyệt vọng của các ngươi sẽ trở thành sức mạnh của ta. »",
						"thai": "« ยินดีต้อนรับ เหล่าวิญญาณ. ความสิ้นหวังของพวกเจ้าคือพลังของข้า. »",
						"hindi": "« स्वागत है, आत्माओं। तुम्हारी निराशा मेरी शक्ति बनती है। »"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "애쉬는… 네가 이용한 건가!",
						"english": "Ash… did you use them?!",
						"japanese": "「アッシュは…お前が利用したのか！」",
						"chinese": "“艾什…是你利用的吗！”",
						"french": "« Ash… C'est toi qui l'as utilisé ! »",
						"spanish": "« ¡¿Ash… lo usaste tú?! »",
						"vietnamese": "« Ash… là ngươi đã lợi dụng! »",
						"thai": "« แอช… เจ้าใช้ประโยชน์จากเขาหรือ! »",
						"hindi": "« ऐश… क्या तुमने उसका इस्तेमाल किया था?! »"
					}
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "{random_boss}는 원래 그렇게 쓰이는 법. 희망은 가장 좋은 미끼지.",
						"english": "{random_boss} is meant to be used that way. Hope is the best bait.",
						"japanese": "「{random_boss}は元々そう使われるもの。希望は最高の餌だ。」",
						"chinese": "“{random_boss}原本就是那样被利用的。希望是最好的诱饵。”",
						"french": "« {random_boss} est fait pour être utilisé ainsi. L'espoir est le meilleur des appâts. »",
						"spanish": "« {random_boss} está destinado a ser usado así. La esperanza es el mejor cebo. »",
						"vietnamese": "« {random_boss} vốn dĩ là để được sử dụng như vậy. Hy vọng là mồi nhử tốt nhất. »",
						"thai": "« {random_boss} มีไว้ใช้แบบนั้นแหละ. ความหวังคือเหยื่อที่ดีที่สุด. »",
						"hindi": "« {random_boss} का इस्तेमाल ऐसे ही होता है। आशा सबसे अच्छा चारा है। »"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "키란 테즈의… 함정이었군.",
						"english": "Kiran Tezz's… trap, then.",
						"japanese": "「キラン・テズの…罠だったのか。」",
						"chinese": "“是奇兰·特兹的…陷阱啊。”",
						"french": "« Le piège de Kiran Tezz… alors. »",
						"spanish": "« La trampa de Kiran Tezz… entonces. »",
						"vietnamese": "« Là… bẫy của Kiran Tezz. »",
						"thai": "« เป็น… กับดักของคีรัน เทซ. »",
						"hindi": "« किरण टेज़ का… जाल था। »"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			]
		}
	]
} as const;
