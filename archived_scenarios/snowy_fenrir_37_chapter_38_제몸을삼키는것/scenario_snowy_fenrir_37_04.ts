export const scenario_snowy_fenrir_37_04 = {
	"scenario_id": "snowy_fenrir_37_04",
	"order": 4,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"inka": {
			"id": "mon_583e945a-1e2f-428b-a251-b428f25b4052",
			"name": {
				"korean": "인카",
				"english": "Inka",
				"japanese": "インカ",
				"chinese": "因卡",
				"french": "Inka",
				"spanish": "Inka",
				"vietnamese": "Inka",
				"thai": "อินคา",
				"hindi": "इंंका"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/97f4545b-2e8a-4688-3e4e-b34bb246dd00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f27763ba-2358-4fd3-c813-0f0b59dcac00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"피와 살이 뒤섞인 숲.",
			"늑대는 제 몸마저 뜯어 먹었다.",
			"그 움직임에는 분노도, 사냥의 쾌감도 없었다.",
			"그저 텅 빈 동공에 밀어 넣는, 끝없는 허기만이."
		],
		"english": [
			"A forest of blood and flesh.",
			"The wolf even devoured its own body.",
			"There was no anger, no thrill of the hunt in its movements.",
			"Only an endless hunger, shoved into its empty pupils."
		],
		"japanese": [
			"血と肉が混じり合う森。",
			"狼は自らの体さえ貪り食った。",
			"その動きに怒りも、狩りの快感もなかった。",
			"ただ、虚ろな瞳孔に押し込まれる、終わりのない飢えだけが。"
		],
		"chinese": [
			"血肉交织的森林。",
			"狼甚至吞噬了自己的身体。",
			"它的动作中没有愤怒，也没有狩猎的快感。",
			"只有无尽的饥饿，被塞进空洞的瞳孔中。"
		],
		"french": [
			"Une forêt de sang et de chair.",
			"Le loup a même dévoré son propre corps.",
			"Il n'y avait ni colère, ni plaisir de la chasse dans ses mouvements.",
			"Seulement une faim sans fin, poussée dans ses pupilles vides."
		],
		"spanish": [
			"Un bosque de sangre y carne.",
			"El lobo devoró incluso su propio cuerpo.",
			"En sus movimientos no había ira ni el placer de la caza.",
			"Solo un hambre infinita, empujada hacia sus pupilas vacías."
		],
		"vietnamese": [
			"Một khu rừng trộn lẫn máu và thịt.",
			"Con sói thậm chí còn ăn cả cơ thể mình.",
			"Trong chuyển động của nó không có giận dữ, không có cả niềm vui săn mồi.",
			"Chỉ có sự đói khát vô tận, lấp đầy con ngươi trống rỗng."
		],
		"thai": [
			"ป่าที่ผสมผสานด้วยเลือดและเนื้อ",
			"หมาป่ากัดกินแม้กระทั่งร่างของมันเอง",
			"การเคลื่อนไหวของมันไม่มีทั้งความโกรธและความสุขจากการล่า",
			"เพียงแต่ความหิวโหยไม่สิ้นสุดที่ถูกยัดเข้าไปในดวงตาที่ว่างเปล่า"
		],
		"hindi": [
			"रक्त और मांस का जंगल।",
			"भेड़िये ने अपना शरीर भी खा लिया।",
			"उसकी हरकतों में न गुस्सा था, न शिकार का रोमांच।",
			"केवल एक अंतहीन भूख, उसकी खाली आँखों में भरी हुई थी।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "늑대의 몸을 이루던 사체들이 무너졌다 다시 솟았다.",
						"english": "The corpses that formed the wolf's body collapsed and rose again.",
						"japanese": "狼の体を構成していた死体が崩れ落ち、再び隆起した。",
						"chinese": "构成狼身体的尸体们崩塌后又重新站了起来。",
						"french": "Les cadavres qui formaient le corps du loup s'effondraient puis se relevaient.",
						"spanish": "Los cadáveres que formaban el cuerpo del lobo se derrumbaban y volvían a levantarse.",
						"vietnamese": "Những cái xác tạo nên thân sói đổ sụp rồi lại trỗi dậy.",
						"thai": "ซากศพที่ประกอบเป็นร่างของหมาป่าพังทลายลงแล้วก็ผุดขึ้นมาใหม่",
						"hindi": "भेड़िये के शरीर बनाने वाले शव गिरे और फिर से उठ गए।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "저게… 자기 몸을 먹고 있어?",
						"english": "Is it... eating its own body?",
						"japanese": "あれが…自分の体を食べているのか？",
						"chinese": "那是…在吃自己的身体吗？",
						"french": "Est-ce que... ça mange son propre corps ?",
						"spanish": "¿Está... comiéndose su propio cuerpo?",
						"vietnamese": "Nó... đang ăn thịt chính mình ư?",
						"thai": "นั่นมัน... กินร่างตัวเองเหรอ?",
						"hindi": "क्या वह... अपना शरीर खा रहा है?"
					}
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "inka",
					"spot": [
						2,
						3
					]
				},
				{
					"content": {
						"korean": "…저건… 배고파서 그래.",
						"english": "...That's... because it's hungry.",
						"japanese": "…あれは…お腹が空いているからだ。",
						"chinese": "……那是……因为它饿了。",
						"french": "...C'est... parce qu'il a faim.",
						"spanish": "...Eso es... porque tiene hambre.",
						"vietnamese": "...Nó... đói thôi.",
						"thai": "...นั่นมัน... เพราะมันหิว",
						"hindi": "...वह... भूख के कारण ऐसा कर रहा है।"
					},
					"type": "speech",
					"speaker": "inka",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "inka",
					"spot": [
						2,
						3
					]
				},
				{
					"content": {
						"korean": "저건 미움이 아니야. 그냥… 고통스러운 굶주림이야.",
						"english": "That's not hatred. It's just... agonizing hunger.",
						"japanese": "あれは憎しみじゃない。ただ…苦痛な飢餓だ。",
						"chinese": "那不是憎恨。那只是…痛苦的饥饿。",
						"french": "Ce n'est pas de la haine. C'est juste... une faim douloureuse.",
						"spanish": "Eso no es odio. Es solo... un hambre agonizante.",
						"vietnamese": "Đó không phải là hận thù. Chỉ là... một cơn đói khát đau đớn.",
						"thai": "นั่นไม่ใช่ความเกลียดชัง มันเป็นแค่... ความหิวโหยที่เจ็บปวด",
						"hindi": "वह नफरत नहीं है। वह बस… दर्दनाक भूख है।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "inka"
				},
				{
					"content": {
						"korean": "저런 괴물에게 동정심을 느끼는 거야?",
						"english": "Are you feeling sympathy for a monster like that?",
						"japanese": "あんな怪物に同情するのか？",
						"chinese": "你在同情那样的怪物吗？",
						"french": "Ressens-tu de la sympathie pour un tel monstre ?",
						"spanish": "¿Estás sintiendo compasión por un monstruo así?",
						"vietnamese": "Anh đang cảm thấy đồng cảm với con quái vật như thế ư?",
						"thai": "นายกำลังสงสารสัตว์ประหลาดแบบนั้นเหรอ?",
						"hindi": "क्या तुम ऐसे राक्षस के प्रति दया महसूस कर रहे हो?"
					},
					"speaker": "character_1",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "inka",
					"type": "speech",
					"content": {
						"korean": "괴물도… 배가 고프면 모든 걸 먹어.",
						"english": "Even monsters... eat everything when they're hungry.",
						"japanese": "化け物も…お腹が空けば何でも食べる。",
						"chinese": "怪物也…饿了就会吃掉一切。",
						"french": "Même les monstres... mangent tout quand ils ont faim.",
						"spanish": "Incluso los monstruos... comen de todo cuando tienen hambre.",
						"vietnamese": "Ngay cả quái vật... cũng ăn mọi thứ khi đói.",
						"thai": "แม้แต่สัตว์ประหลาด... ก็กินทุกอย่างเมื่อหิว",
						"hindi": "राक्षस भी… भूखे होने पर सब कुछ खा जाते हैं।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "inka",
					"spot": [
						3,
						3
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "이 숲의 모든 생명은 먹고 먹히며 살지.",
						"english": "All life in this forest preys and is preyed upon.",
						"japanese": "この森の命は食い、食われる。",
						"chinese": "这森林中，生灵皆是捕食与被捕食。",
						"french": "Toute vie en cette forêt mange et est mangée.",
						"spanish": "Toda vida en este bosque come y es comida.",
						"vietnamese": "Mọi sinh vật trong rừng này đều ăn và bị ăn.",
						"thai": "สิ่งมีชีวิตในป่านี้ดำรงอยู่ด้วยการกินและถูกกิน.",
						"hindi": "इस वन में हर जीवन खाता है और खाया जाता है।"
					},
					"type": "speech",
					"speaker": "inka",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "하지만 저건… 목적 없는 허기야.",
						"english": "But that… that's a hunger without purpose.",
						"japanese": "しかし、あれは…目的のない飢えだ。",
						"chinese": "但这…是无目的的饥饿。",
						"french": "Mais ça… c'est une faim sans but.",
						"spanish": "Pero eso… es un hambre sin propósito.",
						"vietnamese": "Nhưng đó… là cơn đói vô mục đích.",
						"thai": "แต่นั่น…คือความหิวที่ไร้จุดหมาย.",
						"hindi": "किंतु वह… एक उद्देश्यरहित भूख है।"
					},
					"speaker": "inka",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_2",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "목적이 없다고?",
						"english": "No purpose?",
						"japanese": "目的がない、と？",
						"chinese": "无目的？",
						"french": "Sans but ?",
						"spanish": "¿Sin propósito?",
						"vietnamese": "Vô mục đích sao?",
						"thai": "ไร้จุดหมายหรือ?",
						"hindi": "उद्देश्यहीन?"
					}
				},
				{
					"content": {
						"korean": "그냥 채워지지 않아서, 계속 먹어치울 뿐이야.",
						"english": "It's simply insatiable, so it devours endlessly.",
						"japanese": "ただ満たされぬまま、食らい続けるだけだ。",
						"chinese": "只是无法满足，所以不断吞噬。",
						"french": "Ça ne se rassasie juste pas, alors ça dévore sans cesse.",
						"spanish": "Simplemente no se sacia, solo sigue devorando.",
						"vietnamese": "Chỉ là không thể thỏa mãn, nên cứ nuốt chửng mãi.",
						"thai": "มันแค่อิ่มไม่พอ จึงกินไม่หยุด.",
						"hindi": "बस भरता नहीं, इसलिए बस खाता जाता है।"
					},
					"type": "speech",
					"speaker": "inka",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "inka",
					"spot": [
						2,
						3
					]
				},
				{
					"content": {
						"korean": "봐. 늑대의 눈에… 증오가 없어.",
						"english": "Look. In the wolf's eyes… there's no hatred.",
						"japanese": "見ろ。狼の目に…憎悪はない。",
						"chinese": "看。狼的眼中…没有憎恨。",
						"french": "Regarde. Dans les yeux du loup… aucune haine.",
						"spanish": "Mira. En los ojos del lobo… no hay odio.",
						"vietnamese": "Nhìn xem. Trong mắt sói… không có hận thù.",
						"thai": "ดูสิ. ในตาหมาป่า…ไร้ซึ่งความเกลียดชัง.",
						"hindi": "देखो। भेड़िये की आँखों में… घृणा नहीं है।"
					},
					"speaker": "inka",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…정말이네. 텅 비어있어.",
						"english": "...Indeed. They're empty.",
						"japanese": "…本当にだ。虚ろだ。",
						"chinese": "…确实如此。空洞无物。",
						"french": "…Vraiment. Elles sont vides.",
						"spanish": "…Es verdad. Están vacíos.",
						"vietnamese": "...Đúng vậy. Trống rỗng.",
						"thai": "…จริงด้วย. มันว่างเปล่า.",
						"hindi": "…सच में। वो खाली हैं।"
					}
				},
				{
					"speaker": "inka",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "저건 미움이 아니라, 그냥 굶주림이야.",
						"english": "That's not hate, it's merely hunger.",
						"japanese": "あれは憎しみではなく、ただの飢えだ。",
						"chinese": "那不是憎恨，只是饥饿。",
						"french": "Ce n'est pas de la haine, juste la faim.",
						"spanish": "Eso no es odio, es solo hambre.",
						"vietnamese": "Đó không phải căm ghét, chỉ là đói khát.",
						"thai": "นั่นไม่ใช่ความเกลียดชัง, แต่เป็นเพียงความหิวโหย.",
						"hindi": "वह घृणा नहीं, बस भूख है।"
					}
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "늑대는 기계적으로 움직이며 제 몸의 살점을 뜯어 동공으로 밀어 넣었다.",
						"english": "The wolf moved mechanically, tearing flesh from its own body and stuffing it into its eye sockets.",
						"japanese": "狼は機械的に動き、自らの肉をむしり取って眼窩に押し込んだ。",
						"chinese": "狼机械地移动着，撕扯自身血肉，塞进眼窝。",
						"french": "Le loup bougea mécaniquement, s'arrachant la chair pour la pousser dans ses orbites.",
						"spanish": "El lobo se movió mecánicamente, arrancando su propia carne y metiéndola en sus cuencas oculares.",
						"vietnamese": "Con sói chuyển động một cách máy móc, xé thịt từ chính cơ thể mình và đẩy vào hốc mắt.",
						"thai": "หมาป่าขยับอย่างเครื่องจักร, ฉีกเนื้อจากร่างกายของมันเองและยัดมันเข้าไปในเบ้าตา.",
						"hindi": "भेड़िया यांत्रिक रूप से हिलता रहा, अपने शरीर से मांस नोचकर अपनी आँखों के सॉकेट में डालता रहा।"
					}
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "늑대의 몸이 다시 솟아오르며 모든 것을 집어삼켰다.",
						"english": "The wolf's body surged forth again, devouring everything.",
						"japanese": "狼の体が再び立ち上がり、全てを飲み込んだ。",
						"chinese": "狼的身体再次涌现，吞噬了一切。",
						"french": "Le corps du loup ressurgit, dévorant tout sur son passage.",
						"spanish": "El cuerpo del lobo resurgió, devorándolo todo.",
						"vietnamese": "Thân thể con sói lại trỗi dậy, nuốt chửng mọi thứ.",
						"thai": "ร่างของหมาป่ากลับมาผงาดขึ้นอีกครั้ง, กลืนกินทุกสิ่ง.",
						"hindi": "भेड़िये का शरीर फिर से ऊपर उठा और सब कुछ निगल गया।"
					}
				},
				{
					"content": {
						"korean": "영원히… 굶주려라….",
						"english": "Forever... hunger...",
						"japanese": "永遠に…飢えろ…。",
						"chinese": "永远地… 饥饿吧…",
						"french": "A jamais... affamé...",
						"spanish": "Para siempre... con hambre...",
						"vietnamese": "Mãi mãi… chịu đói đi…",
						"thai": "จงหิวโหย…ไปชั่วนิรันดร์…",
						"hindi": "हमेशा के लिए… भूखा रहो…"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "젠장… 아직… 끝나지 않았어.",
						"english": "Damn it... it's not... over yet.",
						"japanese": "くそ…まだ…終わってない。",
						"chinese": "该死… 还没… 结束。",
						"french": "Bon sang... ce n'est pas... encore fini.",
						"spanish": "Maldición... aún no... ha terminado.",
						"vietnamese": "Chết tiệt… vẫn chưa… kết thúc.",
						"thai": "ให้ตายสิ… ยัง… ไม่จบ.",
						"hindi": "धिक्कार है… अभी तक… खत्म नहीं हुआ।"
					}
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "inka",
					"spot": [
						3,
						3
					]
				},
				{
					"content": {
						"korean": "이 고통을… 멈춰야 해.",
						"english": "This pain… I have to stop it.",
						"japanese": "この苦痛を…止めなければ。",
						"chinese": "这份痛苦…我必须停止。",
						"french": "Cette douleur… je dois l'arrêter.",
						"spanish": "Este dolor… debo detenerlo.",
						"vietnamese": "Nỗi đau này… phải dừng lại.",
						"thai": "ความเจ็บปวดนี้… ต้องหยุดมันให้ได้",
						"hindi": "इस दर्द को… मुझे रोकना होगा।"
					},
					"emotion": "sad",
					"speaker": "inka",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "{random_boss}의 허기는 영원하다.",
						"english": "{random_boss}'s hunger is eternal.",
						"japanese": "{random_boss}の飢えは永遠だ。",
						"chinese": "{random_boss}的饥饿是永恒的。",
						"french": "La faim de {random_boss} est éternelle.",
						"spanish": "El hambre de {random_boss} es eterna.",
						"vietnamese": "Cơn đói của {random_boss} là vĩnh cửu.",
						"thai": "ความหิวของ {random_boss} เป็นนิรันดร์.",
						"hindi": "{random_boss} की भूख शाश्वत है।"
					}
				},
				{
					"content": {
						"korean": "너희도 곧 이 숲의 일부가 될 뿐.",
						"english": "You will soon be but a part of this forest.",
						"japanese": "お前たちもすぐこの森の一部となるだけだ。",
						"chinese": "你们也很快就会成为这森林的一部分。",
						"french": "Vous aussi ne serez bientôt qu'une partie de cette forêt.",
						"spanish": "Vosotros también pronto seréis sólo parte de este bosque.",
						"vietnamese": "Các ngươi cũng sẽ sớm trở thành một phần của khu rừng này thôi.",
						"thai": "พวกเจ้าก็จะกลายเป็นส่วนหนึ่งของป่านี้ในไม่ช้า.",
						"hindi": "तुम भी जल्द ही इस वन का ही हिस्सा बनोगे।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "네놈의 먹이가 될 순 없어!",
						"english": "I won't be your prey!",
						"japanese": "貴様の餌食にはならない！",
						"chinese": "我不会成为你的猎物！",
						"french": "Je ne serai pas ta proie !",
						"spanish": "¡No seré tu presa!",
						"vietnamese": "Ta sẽ không làm mồi cho ngươi đâu!",
						"thai": "ข้าจะไม่เป็นเหยื่อของเจ้า!",
						"hindi": "मैं तुम्हारा शिकार नहीं बनूँगा!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그 굶주림은… 얼마나 고통스러울까.",
						"english": "How painful... that hunger must be.",
						"japanese": "その飢えは… どれほど苦しいのだろうか。",
						"chinese": "那份饥饿… 该有多痛苦啊。",
						"french": "Comme cette faim... doit être douloureuse.",
						"spanish": "Qué dolorosa... debe ser esa hambre.",
						"vietnamese": "Cơn đói đó… hẳn đau đớn biết bao.",
						"thai": "ความหิวโหยนั้น… ช่างทรมานเพียงใด.",
						"hindi": "वो भूख… कितनी दर्दनाक होगी।"
					},
					"type": "speech",
					"speaker": "inka",
					"emotion": "sad"
				}
			],
			"win_dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "거대한 늑대의 몸이 무너지며 숲의 일부로 스며들었다.",
						"english": "The massive wolf's body collapsed, seeping into the forest, becoming one with it.",
						"japanese": "巨大な狼の体が崩れ落ち、森の一部へと溶け込んでいった。",
						"chinese": "巨狼的身体崩塌，融入了森林之中。",
						"french": "Le corps du loup géant s'effondra, s'infiltrant dans la forêt pour en devenir une partie.",
						"spanish": "El cuerpo del lobo gigante se desplomó, infiltrándose en el bosque como parte de él.",
						"vietnamese": "Thân thể của con sói khổng lồ sụp đổ, hòa vào rừng xanh.",
						"thai": "ร่างของหมาป่ายักษ์ล้มลง, กลืนหายไปเป็นส่วนหนึ่งของป่า.",
						"hindi": "विशाल भेड़िये का शरीर ढह गया और जंगल का हिस्सा बन गया।"
					}
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "sad",
					"content": {
						"korean": "…채워지지 않는… 허기… 끝없이….",
						"english": "...Unquenchable... hunger... endless...",
						"japanese": "…満たされぬ…飢え…果てなく…。",
						"chinese": "…无法满足的…饥饿…无尽地…",
						"french": "...Une faim... insatiable... sans fin...",
						"spanish": "...Hambre... insaciable... sin fin...",
						"vietnamese": "...Cơn đói... không bao giờ thỏa mãn... vĩnh cửu...",
						"thai": "…ความหิวโหย…ที่ไม่สิ้นสุด…ตลอดไป…",
						"hindi": "...न बुझने वाली... भूख... अनंत..."
					}
				},
				{
					"emotion": "happy",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "끝났어… 더 이상 굶주릴 일은 없을 거야.",
						"english": "It's over... you won't hunger anymore.",
						"japanese": "終わった…もう、飢えることはないだろう。",
						"chinese": "结束了… 你不会再饥饿了。",
						"french": "C'est fini... tu n'auras plus faim.",
						"spanish": "Se acabó... ya no tendrás hambre.",
						"vietnamese": "Kết thúc rồi… ngươi sẽ không còn đói nữa đâu.",
						"thai": "จบแล้ว… เจ้าจะไม่หิวโหยอีกต่อไป.",
						"hindi": "खत्म हो गया... अब तुम्हें भूख नहीं लगेगी।"
					}
				},
				{
					"speaker": "inka",
					"spot": [
						3,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "편히 쉬렴.",
						"english": "Rest in peace.",
						"japanese": "安らかに眠れ。",
						"chinese": "安息吧。",
						"french": "Repose en paix.",
						"spanish": "Descansa en paz.",
						"vietnamese": "Hãy yên nghỉ.",
						"thai": "จงพักผ่อนอย่างสงบ.",
						"hindi": "शांति से आराम करो।"
					},
					"emotion": "sad",
					"speaker": "inka",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "늑대의 허기는 숲을 먹어치우려 했다. 하지만 그 굶주림의 근원은… 아직 베일에 싸여 있었다.",
						"english": "The wolf's hunger sought to devour the forest. Yet, the source of that hunger... remained shrouded in mystery.",
						"japanese": "狼の飢えは森を食い尽くそうとした。しかし、その飢えの根源は…未だベールに包まれていた。",
						"chinese": "狼的饥饿试图吞噬森林。然而，那饥饿的根源… 仍笼罩在迷雾之中。",
						"french": "La faim du loup tentait de dévorer la forêt. Pourtant, l'origine de cette faim... restait voilée de mystère.",
						"spanish": "El hambre del lobo intentó devorar el bosque. Sin embargo, la raíz de esa hambre... aún estaba envuelta en misterio.",
						"vietnamese": "Cơn đói của con sói định nuốt chửng khu rừng. Nhưng nguồn gốc của cơn đói đó… vẫn còn bị che giấu.",
						"thai": "ความหิวโหยของหมาป่าพยายามกลืนกินป่า. แต่ต้นตอของความหิวโหยนั้น… ยังคงถูกปิดบังไว้ในเงามืด.",
						"hindi": "भेड़िये की भूख जंगल को निगलना चाहती थी। लेकिन उस भूख का स्रोत... अभी भी रहस्य में छिपा था।"
					}
				}
			]
		}
	]
} as const;
