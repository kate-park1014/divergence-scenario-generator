export const scenario_snowy_skalhorn_35_02 = {
	"scenario_id": "snowy_skalhorn_35_02",
	"order": 2,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"boris": {
			"id": "mon_8f41e00a-9c1b-4e66-9d7a-584cc2a9af84",
			"name": {
				"korean": "보리스",
				"english": "Boris",
				"japanese": "ボリス",
				"chinese": "鲍里斯",
				"french": "Boris",
				"spanish": "Boris",
				"vietnamese": "Boris",
				"thai": "บอริส",
				"hindi": "बोरिस"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8db2ee50-a24d-43cf-a3ec-fad83142f500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/961dfd96-9db1-42aa-a15b-82ba7d1ae700/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "뿔잔의 수정 표면이 완전히 투명해졌다. 그 안에서 수십 개의 얼굴이 어른거렸다.",
						"english": "The crystal surface of the horn cup became completely transparent. Dozens of faces flickered within.",
						"japanese": "角杯の水晶表面が完全に透明になった。その中で、数十の顔が揺らめいた。",
						"chinese": "角杯的水晶表面变得完全透明。数十张脸在其中晃动。",
						"french": "La surface cristalline de la corne est devenue complètement transparente. Des dizaines de visages scintillaient à l'intérieur.",
						"spanish": "La superficie de cristal del cuerno se volvió completamente transparente. Decenas de caras parpadearon en su interior.",
						"vietnamese": "Bề mặt pha lê của chiếc cốc sừng trở nên hoàn toàn trong suốt. Hàng chục khuôn mặt lấp lánh bên trong.",
						"thai": "พื้นผิวคริสตัลของถ้วยเขาโปร่งใสโดยสมบูรณ์ ใบหน้าหลายสิบหน้ากระพริบอยู่ภายใน",
						"hindi": "सींग के प्याले की क्रिस्टल सतह पूरी तरह पारदर्शी हो गई। उसके भीतर दर्जनों चेहरे झिलमिला रहे थे।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "으윽… 저게 뭐야.",
						"english": "Ugh… What is that?",
						"japanese": "うぅ… あれは何だ。",
						"chinese": "呃… 那是什么？",
						"french": "Urgh… Qu'est-ce que c'est ?",
						"spanish": "Ugh… ¿Qué es eso?",
						"vietnamese": "Ư… Cái gì thế kia.",
						"thai": "โอ๊ย… นั่นอะไรน่ะ",
						"hindi": "उह… यह क्या है?"
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"action": "enter",
					"speaker": "boris",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "환영인가? 아니면…",
						"english": "An illusion? Or…",
						"japanese": "幻影か？それとも…",
						"chinese": "幻影吗？还是说…",
						"french": "Une illusion ? Ou…",
						"spanish": "¿Una ilusión? O…",
						"vietnamese": "Ảo ảnh ư? Hay là…",
						"thai": "ภาพลวงตาเหรอ? หรือว่า…",
						"hindi": "एक माया? या…"
					},
					"speaker": "boris",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "boris",
					"content": {
						"korean": "흐릿하지만… 사람 얼굴처럼 보이는데.",
						"english": "It's blurry… but it looks like a human face.",
						"japanese": "ぼやけているが… 人間の顔のように見える。",
						"chinese": "虽然模糊… 但看起来像人脸。",
						"french": "C'est flou… mais ça ressemble à un visage humain.",
						"spanish": "Está borroso… pero parece un rostro humano.",
						"vietnamese": "Mờ ảo… nhưng trông giống mặt người.",
						"thai": "มันเบลอ… แต่ดูเหมือนหน้าคนนะ",
						"hindi": "यह धुंधला है… पर एक इंसान के चेहरे जैसा दिखता है।"
					}
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "boris",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "착각하지 마. 그저 수정에 비친 빛의 잔상일 뿐이야.",
						"english": "Don't be mistaken. It's just an afterimage of light reflected in the crystal.",
						"japanese": "勘違いするな。それはただ、水晶に映った光の残像に過ぎない。",
						"chinese": "别搞错了。那只是水晶反射的光影残像而已。",
						"french": "Ne vous méprenez pas. Ce n'est qu'une rémanence de lumière reflétée dans le cristal.",
						"spanish": "No te equivoques. Es solo una imagen residual de luz reflejada en el cristal.",
						"vietnamese": "Đừng nhầm lẫn. Đó chỉ là dư ảnh của ánh sáng phản chiếu trong pha lê thôi.",
						"thai": "อย่าเข้าใจผิด นั่นเป็นเพียงภาพติดตาของแสงที่สะท้อนในคริสตัลเท่านั้น",
						"hindi": "गलतफहमी मत पालो। यह बस क्रिस्टल में परावर्तित प्रकाश का एक अवशिष्ट चित्र है।"
					},
					"speaker": "boris"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "하지만… 너무 선명해.",
						"english": "But... it's too vivid.",
						"japanese": "しかし…あまりにも鮮明だ。",
						"chinese": "但是……太鲜明了。",
						"french": "Mais... c'est trop clair.",
						"spanish": "Pero... es demasiado vívido.",
						"vietnamese": "Nhưng… nó quá rõ ràng.",
						"thai": "แต่มัน... ชัดเจนเกินไป",
						"hindi": "लेकिन... यह बहुत स्पष्ट है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "boris",
					"content": {
						"korean": "마음이 약해진 틈을 타 파고드는 환영일 뿐이다. 진실은 없어.",
						"english": "It's just an illusion preying on your weakened mind. There's no truth to it.",
						"japanese": "弱った心につけ込む幻影に過ぎない。真実などない。",
						"chinese": "这不过是趁你心智脆弱时趁虚而入的幻影。其中并无真实。",
						"french": "Ce n'est qu'une illusion qui s'insinue dans ton esprit affaibli. Il n'y a aucune vérité.",
						"spanish": "Es solo una ilusión que se aprovecha de tu mente debilitada. No hay verdad en ello.",
						"vietnamese": "Đó chỉ là một ảo ảnh lợi dụng lúc tâm trí ngươi yếu đuối. Không có sự thật nào cả.",
						"thai": "มันเป็นแค่ภาพลวงตาที่ฉวยโอกาสตอนที่จิตใจของเจ้าอ่อนแอเท่านั้น ไม่มีเรื่องจริงเลย",
						"hindi": "यह तुम्हारी कमज़ोर पड़ी मानसिकता का फायदा उठाने वाला एक भ्रम मात्र है। इसमें कोई सच्चाई नहीं है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "정말 그럴까?",
						"english": "Is that truly so?",
						"japanese": "本当にそうか？",
						"chinese": "真的如此吗？",
						"french": "Vraiment ?",
						"spanish": "¿De verdad?",
						"vietnamese": "Thật sự là vậy sao?",
						"thai": "จริงหรือ?",
						"hindi": "क्या यह सच है?"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "boris",
					"action": "enter"
				},
				{
					"emotion": "base",
					"speaker": "boris",
					"content": {
						"korean": "계속 들여다봐도… 보이는 건 똑같아.",
						"english": "No matter how long I stare... what I see remains the same.",
						"japanese": "ずっと見つめても…見えるものは同じだ。",
						"chinese": "即使一直看着……看到的还是一样。",
						"french": "Peu importe combien de temps je regarde... ce que je vois reste le même.",
						"spanish": "Por mucho que lo mire... lo que veo es lo mismo.",
						"vietnamese": "Dù có nhìn mãi… thứ ta thấy vẫn vậy.",
						"thai": "มองเท่าไหร่... ก็ยังเห็นเหมือนเดิม",
						"hindi": "चाहे कितना भी देखता रहूं... जो दिख रहा है, वह वही है।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "(뿔잔을 자세히 본다)",
						"english": "(Looks closely at the horn cup)",
						"japanese": "(角杯を詳しく見る)",
						"chinese": "(仔细观察号角杯)",
						"french": "(Regarde attentivement la corne à boire)",
						"spanish": "(Mira de cerca el cuerno)",
						"vietnamese": "(Nhìn kỹ chiếc sừng)",
						"thai": "(มองจอกเขาอย่างละเอียด)",
						"hindi": "(सींग वाले प्याले को ध्यान से देखता है)"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "boris",
					"content": {
						"korean": "…!",
						"english": "...",
						"japanese": "…！",
						"chinese": "…！",
						"french": "...",
						"spanish": "...",
						"vietnamese": "…!",
						"thai": "...",
						"hindi": "..."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "수정 속 얼굴과 보리스의 눈이 마주쳤다. 낯선 기억 한 조각이 그의 머릿속을 스쳤다.",
						"english": "The face in the crystal met Boris's eyes. A strange fragment of memory flashed through his mind.",
						"japanese": "水晶の中の顔とボリスの目が合った。見知らぬ記憶の断片が彼の頭をよぎった。",
						"chinese": "水晶中的脸庞与鲍里斯的目光相遇。一段陌生的记忆碎片掠过他的脑海。",
						"french": "Le visage dans le cristal croisa le regard de Boris. Un étrange fragment de mémoire traversa son esprit.",
						"spanish": "El rostro en el cristal se encontró con los ojos de Boris. Un extraño fragmento de memoria cruzó su mente.",
						"vietnamese": "Khuôn mặt trong pha lê chạm mắt Boris. Một mảnh ký ức xa lạ lướt qua tâm trí anh.",
						"thai": "ใบหน้าในคริสตัลสบตากับบอริส เสี้ยวหนึ่งของความทรงจำแปลกหน้าแล่นผ่านความคิดของเขา",
						"hindi": "क्रिस्टल में मौजूद चेहरे ने बोरिस की आँखों से मुलाकात की। एक अजीब याद का टुकड़ा उसके मन में कौंध गया।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…이건…",
						"english": "...This is...",
						"japanese": "…これは…",
						"chinese": "……这是……",
						"french": "...C'est...",
						"spanish": "...Esto es...",
						"vietnamese": "…Đây là…",
						"thai": "...นี่มัน...",
						"hindi": "...यह..."
					},
					"speaker": "boris",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "왜 그래, 보리스?",
						"english": "What's wrong, Boris?",
						"japanese": "どうしたの、ボリス？",
						"chinese": "怎么了，鲍里斯？",
						"french": "Qu'y a-t-il, Boris ?",
						"spanish": "¿Qué te pasa, Boris?",
						"vietnamese": "Có chuyện gì vậy, Boris?",
						"thai": "เกิดอะไรขึ้น บอริส?",
						"hindi": "क्या हुआ, बोरिस?"
					},
					"emotion": "base"
				},
				{
					"speaker": "boris",
					"content": {
						"korean": "환영이 아니야. 이건… 실제로 있었던 사람이야.",
						"english": "It's not an illusion. This is... a real person who existed.",
						"japanese": "幻影じゃない。これは…実際にいた人間だ。",
						"chinese": "这不是幻影。这是……真实存在过的人。",
						"french": "Ce n'est pas une illusion. C'est... une personne réelle qui a existé.",
						"spanish": "No es una ilusión. Esto es... una persona real que existió.",
						"vietnamese": "Đây không phải ảo ảnh. Đây là… một người thật sự đã từng tồn tại.",
						"thai": "นี่ไม่ใช่ภาพลวงตา นี่คือ... คนที่มีอยู่จริง",
						"hindi": "यह भ्रम नहीं है। यह... एक वास्तविक व्यक्ति है जो मौजूद था।"
					},
					"emotion": "sad",
					"type": "speech"
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
						3
					],
					"type": "direction",
					"speaker": "boris",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"emotion": "sad",
					"speaker": "boris",
					"content": {
						"korean": "그들은… 갇혀 있어. 살려달라고 하는 것 같아.",
						"english": "They... are trapped. They seem to be calling for help.",
						"japanese": "彼らは… 閉じ込められている。助けを求めているようだ。",
						"chinese": "他们… 被困住了。好像在求救。",
						"french": "Ils sont… piégés. Ils semblent appeler à l'aide.",
						"spanish": "Están… atrapados. Parece que piden ayuda.",
						"vietnamese": "Họ… bị mắc kẹt. Hình như đang kêu cứu.",
						"thai": "พวกเขา… ติดอยู่ ดูเหมือนกำลังร้องขอความช่วยเหลือ",
						"hindi": "वे… फंसे हुए हैं। मदद मांग रहे हैं, ऐसा लगता है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "비명처럼 들리는 노래 소리가 더 커진 것 같아.",
						"english": "The song, which sounds like screams, seems to have grown louder.",
						"japanese": "悲鳴のような歌声が、さらに大きくなったようだ。",
						"chinese": "听起来像尖叫的歌声，似乎更响了。",
						"french": "Le chant, qui sonne comme des cris, semble s'être amplifié.",
						"spanish": "El canto, que suena a gritos, parece haberse vuelto más fuerte.",
						"vietnamese": "Tiếng hát nghe như tiếng thét dường như đã lớn hơn.",
						"thai": "เสียงเพลงที่ฟังดูเหมือนเสียงกรีดร้องดูเหมือนจะดังขึ้น",
						"hindi": "चीखों जैसी लगने वाली आवाज़, गाने की आवाज़, और तेज़ हो गई है।"
					}
				},
				{
					"type": "speech",
					"speaker": "boris",
					"content": {
						"korean": "뿔잔이… 저들의 비명으로 채워져 가는군.",
						"english": "The horn... is being filled with their screams.",
						"japanese": "角杯が… 彼らの悲鳴で満たされていく。",
						"chinese": "号角… 被他们的尖叫声填满了。",
						"french": "Le cor... est en train de se remplir de leurs cris.",
						"spanish": "El cuerno... se está llenando con sus gritos.",
						"vietnamese": "Chiếc sừng… đang dần đầy những tiếng thét của chúng.",
						"thai": "แตร… กำลังถูกเติมเต็มด้วยเสียงกรีดร้องของพวกเขา",
						"hindi": "सींग… उनकी चीखों से भरता जा रहा है।"
					},
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "도대체 누가 이런 짓을…",
						"english": "Who on earth would do such a thing...?",
						"japanese": "一体誰がこんなことを…",
						"chinese": "到底是谁做了这种事…",
						"french": "Qui diable ferait une chose pareille...?",
						"spanish": "¿Quién demonios haría algo así...?",
						"vietnamese": "Rốt cuộc ai đã làm chuyện này…?",
						"thai": "ใครกันแน่ที่ทำแบบนี้…",
						"hindi": "आखिर कौन करेगा ऐसा...?"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "뿔잔의 가장 깊은 곳. 섬뜩한 시선이 느껴졌다.",
						"english": "The deepest part of the horn. A chilling gaze was felt.",
						"japanese": "角杯の最も深い場所。不気味な視線を感じた。",
						"chinese": "号角的深处。感觉到一股令人毛骨悚然的视线。",
						"french": "Le plus profond du cor. Un regard glaçant se fit sentir.",
						"spanish": "La parte más profunda del cuerno. Se sintió una mirada escalofriante.",
						"vietnamese": "Nơi sâu nhất của chiếc sừng. Cảm thấy một ánh nhìn rợn người.",
						"thai": "ส่วนที่ลึกที่สุดของแตร สัมผัสได้ถึงสายตาอันน่าขนลุก",
						"hindi": "सींग का सबसे गहरा हिस्सा। एक भयावह नज़र महसूस हुई।"
					}
				},
				{
					"content": {
						"korean": "감히… 여기까지 왔구나.",
						"english": "You dare... come this far.",
						"japanese": "敢えて… ここまで来たか。",
						"chinese": "竟然… 敢到这里来。",
						"french": "Tu oses… venir jusqu'ici.",
						"spanish": "¿Te atreves… a llegar tan lejos?",
						"vietnamese": "Ngươi dám… đến tận đây.",
						"thai": "แกกล้า… มาถึงที่นี่เชียวหรือ",
						"hindi": "तुम्हारी हिम्मत… यहाँ तक आने की।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "뿔잔의 진실을 알고 싶나? 감당할 수 없을 텐데.",
						"english": "Do you want to know the truth of the horn? You won't be able to handle it.",
						"japanese": "角杯の真実を知りたいか？ お前には耐えられないだろう。",
						"chinese": "想知道号角的真相吗？你承受不起的。",
						"french": "Tu veux connaître la vérité du cor ? Tu ne pourras pas le supporter.",
						"spanish": "¿Quieres saber la verdad del cuerno? No podrás soportarla.",
						"vietnamese": "Ngươi muốn biết sự thật về chiếc sừng sao? Ngươi sẽ không thể chịu đựng được đâu.",
						"thai": "เจ้าอยากรู้ความจริงของแตรหรือ? เจ้าจะรับมันไม่ไหวหรอก",
						"hindi": "सींग का सच जानना चाहते हो? तुम इसे संभाल नहीं पाओगे।"
					},
					"speaker": "random_boss"
				},
				{
					"action": "enter",
					"speaker": "boris",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "boris",
					"content": {
						"korean": "닥쳐라. 네가 이들을 가둔 거냐?",
						"english": "Shut up. Did you trap them?",
						"japanese": "黙れ。お前が彼らを閉じ込めたのか？",
						"chinese": "住口。是你把他们困住的吗？",
						"french": "Tais-toi. C'est toi qui les as piégés ?",
						"spanish": "Cállate. ¿Fuiste tú quien los atrapó?",
						"vietnamese": "Im đi. Ngươi đã giam cầm họ sao?",
						"thai": "หุบปาก! แกเป็นคนขังพวกเขาไว้ใช่ไหม",
						"hindi": "चुप रहो। क्या तुमने इन्हें कैद किया है?"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "어리석은 인간. 너희에게 진실은 그저 고통일 뿐.",
						"english": "Foolish humans. For you, the truth is merely pain.",
						"japanese": "愚かな人間め。お前たちにとって真実とはただの苦痛にすぎない。",
						"chinese": "愚蠢的人类。对你们而言，真相不过是痛苦罢了。",
						"french": "Humains stupides. Pour vous, la vérité n'est que douleur.",
						"spanish": "Humanos necios. Para vosotros, la verdad es simplemente dolor.",
						"vietnamese": "Loài người ngu xuẩn. Đối với các ngươi, sự thật chỉ là nỗi đau mà thôi.",
						"thai": "มนุษย์ผู้โง่เขลา สำหรับพวกเจ้าแล้ว ความจริงก็เป็นแค่ความเจ็บปวดเท่านั้น",
						"hindi": "मूर्ख इंसान। तुम्हारे लिए सच बस दर्द है।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "비켜. 우리가 멈출 거야.",
						"english": "Move. We'll stop this.",
						"japanese": "どけ。私たちが止める。",
						"chinese": "让开。我们会阻止这一切的。",
						"french": "Écarte-toi. Nous allons arrêter ça.",
						"spanish": "Apártate. Nosotros lo detendremos.",
						"vietnamese": "Tránh ra. Chúng ta sẽ ngăn chặn.",
						"thai": "ถอยไป! เราจะหยุดมันเอง",
						"hindi": "हटो। हम इसे रोकेंगे।"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "뿔잔의 노래가 탐험대를 집어삼켰다.",
						"english": "The song of the Horn Cup devoured the expedition team.",
						"japanese": "角杯の歌が探検隊を飲み込んだ。",
						"chinese": "角杯的歌声吞噬了探险队。",
						"french": "Le chant de la Corne du Calice engloutit l'équipe d'expédition.",
						"spanish": "El canto del Cuerno de la Copa devoró al equipo de expedición.",
						"vietnamese": "Tiếng hát của Chiếc Sừng Tách nuốt chửng đội thám hiểm.",
						"thai": "เพลงของถ้วยเขาแก้วกลืนกินคณะสำรวจ",
						"hindi": "हॉर्न कप के गीत ने अभियान दल को निगल लिया।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 자들. 진실을 감당할 수 없는 것들이.",
						"english": "Fools. Those who cannot bear the truth.",
						"japanese": "愚か者ども。真実を耐えられない者たちよ。",
						"chinese": "愚蠢的家伙。那些无法承受真相的人。",
						"french": "Imbéciles. Ceux qui ne peuvent supporter la vérité.",
						"spanish": "Necios. Aquellos que no pueden soportar la verdad.",
						"vietnamese": "Những kẻ ngốc. Những kẻ không thể chịu đựng được sự thật.",
						"thai": "พวกโง่เขลา ผู้ที่ไม่สามารถทนรับความจริงได้",
						"hindi": "मूर्खों। वे जो सच को सहन नहीं कर सकते।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "아직… 끝나지 않았어.",
						"english": "It's not... over yet.",
						"japanese": "まだ…終わってない。",
						"chinese": "还没……结束。",
						"french": "Ce n'est pas... encore fini.",
						"spanish": "Todavía... no ha terminado.",
						"vietnamese": "Vẫn... chưa kết thúc.",
						"thai": "ยัง... ไม่จบ",
						"hindi": "अभी तक... खत्म नहीं हुआ है।"
					}
				},
				{
					"spot": [
						2,
						3
					],
					"type": "direction",
					"speaker": "boris",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "boris",
					"content": {
						"korean": "우리는… 반드시 밝혀낼 것이다.",
						"english": "We will... surely uncover it.",
						"japanese": "我々は…必ず突き止めるだろう。",
						"chinese": "我们……一定会揭露它。",
						"french": "Nous le... découvrirons sûrement.",
						"spanish": "Nosotros... sin duda lo revelaremos.",
						"vietnamese": "Chúng ta... nhất định sẽ khám phá ra.",
						"thai": "เราจะ... เปิดเผยมันให้ได้",
						"hindi": "हम... इसे अवश्य उजागर करेंगे।"
					}
				}
			],
			"win_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "정체 모를 자의 그림자가 흐트러졌다. 뿔잔의 일그러진 얼굴들이 잠시 평온해졌다.",
						"english": "The shadow of an unknown entity wavered. The twisted faces on the Horn Cup momentarily found peace.",
						"japanese": "正体不明の影が揺らいだ。角杯の歪んだ顔は一時的に安堵した。",
						"chinese": "身份不明的影子散开了。角杯上扭曲的面孔暂时平静下来。",
						"french": "L'ombre de l'inconnu vacilla. Les visages tordus de la Corne du Calice retrouvèrent un bref instant de paix.",
						"spanish": "La sombra del desconocido se difuminó. Los rostros distorsionados del Cuerno de la Copa encontraron paz momentánea.",
						"vietnamese": "Bóng tối của kẻ vô danh tan biến. Những khuôn mặt méo mó trên Chiếc Sừng Tách tạm thời bình yên trở lại.",
						"thai": "เงาของผู้ไม่ประสงค์ดีเลือนหายไป ใบหน้าบิดเบี้ยวบนถ้วยเขาแก้วสงบลงชั่วขณะ",
						"hindi": "अज्ञात सत्ता की छाया बिखर गई। हॉर्न कप पर विकृत चेहरे क्षण भर के लिए शांत हो गए।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "…기껏해야 여기까지다. 진정한 고통은… 이제부터 시작될 테니.",
						"english": "...This is as far as you go. True suffering... begins now.",
						"japanese": "…せいぜいここまでだ。真の苦痛は…これから始まるのだから。",
						"chinese": "……顶多到此为止。真正的痛苦……才刚刚开始。",
						"french": "...Ce n'est que le début. La vraie souffrance... ne fait que commencer.",
						"spanish": "...Hasta aquí llegan. El verdadero tormento... comienza ahora.",
						"vietnamese": "...Đến đây là hết. Nỗi đau thực sự... sẽ bắt đầu từ bây giờ.",
						"thai": "...ได้แค่นี้แหละ ความเจ็บปวดที่แท้จริง... กำลังจะเริ่มต้นขึ้นจากนี้ไป",
						"hindi": "...बस यहीं तक। असली दर्द... अब शुरू होगा।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "너희가 마주할 진실은… 파멸뿐이다.",
						"english": "The truth you face... is only destruction.",
						"japanese": "お前たちが直面する真実…それは破滅だけだ。",
						"chinese": "你们将面对的真相……只有毁灭。",
						"french": "La vérité à laquelle vous ferez face... n'est que destruction.",
						"spanish": "La verdad que enfrentaréis... es solo la ruina.",
						"vietnamese": "Sự thật các ngươi sẽ đối mặt... chỉ là sự hủy diệt.",
						"thai": "ความจริงที่พวกเจ้าต้องเผชิญ... มีเพียงความพินาศเท่านั้น",
						"hindi": "जिस सच्चाई का सामना तुम करोगे... वह केवल विनाश है।"
					},
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"speaker": "boris",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"type": "direction"
				},
				{
					"speaker": "boris",
					"content": {
						"korean": "도대체 무슨 소리지?",
						"english": "What in the world is that supposed to mean?",
						"japanese": "いったいどういうことだ？",
						"chinese": "这到底是什么意思？",
						"french": "Qu'est-ce que cela signifie ?",
						"spanish": "¿Qué demonios significa eso?",
						"vietnamese": "Rốt cuộc là ý gì?",
						"thai": "นี่มันเรื่องอะไรกันแน่?",
						"hindi": "आखिर यह सब क्या है?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "뿔잔의… 진실.",
						"english": "The Horn Cup's... truth.",
						"japanese": "角杯の…真実。",
						"chinese": "角杯的……真相。",
						"french": "La vérité... de la Corne du Calice.",
						"spanish": "La verdad... del Cuerno de la Copa.",
						"vietnamese": "Sự thật... của Chiếc Sừng Tách.",
						"thai": "ความจริงของ... ถ้วยเขาแก้ว",
						"hindi": "हॉर्न कप का... सच।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "뿔잔은 침묵했다. 그러나 갇힌 자들의 이야기는 이제 시작이었다.",
						"english": "The Horn Cup fell silent. But the stories of those imprisoned had just begun.",
						"japanese": "角杯は沈黙した。しかし、囚われた者たちの物語は今、始まったばかりだった。",
						"chinese": "角杯沉默了。然而，被囚禁者的故事才刚刚开始。",
						"french": "La Corne du Calice se tut. Mais les histoires de ceux qui étaient emprisonnés ne faisaient que commencer.",
						"spanish": "El Cuerno de la Copa enmudeció. Pero las historias de los cautivos apenas comenzaban.",
						"vietnamese": "Chiếc Sừng Tách im lặng. Nhưng câu chuyện của những kẻ bị giam cầm thì vừa mới bắt đầu.",
						"thai": "ถ้วยเขาแก้วเงียบงัน ทว่าเรื่องราวของผู้ถูกจองจำเพิ่งจะเริ่มต้นขึ้น",
						"hindi": "हॉर्न कप खामोश हो गया। लेकिन कैद हुए लोगों की कहानियाँ अब शुरू हुई थीं।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"뿔잔의 투명한 표면.",
			"그 안에 갇힌, 일그러진 얼굴들.",
			"희미한 환영인 줄 알았다.",
			"하지만 누군가는… 진실을 보았다.",
			"그 시선이, 낯선 기억을 불러왔다."
		],
		"english": [
			"The transparent surface of the horn cup.",
			"Distorted faces trapped within.",
			"I thought it was a faint illusion.",
			"But someone… saw the truth.",
			"That gaze evoked a strange memory."
		],
		"japanese": [
			"角杯の透明な表面。",
			"その中に閉じ込められた、歪んだ顔々。",
			"それは淡い幻影だと思った。",
			"だが、誰かは… 真実を見た。",
			"その視線が、見知らぬ記憶を呼び起こした。"
		],
		"chinese": [
			"角杯透明的表面。",
			"被困其中的扭曲面孔。",
			"我以为那只是一个模糊的幻影。",
			"但有人… 看到了真相。",
			"那视线，唤起了陌生的记忆。"
		],
		"french": [
			"La surface transparente de la corne.",
			"Des visages déformés piégés à l'intérieur.",
			"Je croyais que c'était une faible illusion.",
			"Mais quelqu'un… a vu la vérité.",
			"Ce regard a éveillé un souvenir étrange."
		],
		"spanish": [
			"La superficie transparente del cuerno.",
			"Caras distorsionadas atrapadas dentro.",
			"Pensé que era una tenue ilusión.",
			"Pero alguien… vio la verdad.",
			"Esa mirada evocó un recuerdo extraño."
		],
		"vietnamese": [
			"Bề mặt trong suốt của chiếc cốc sừng.",
			"Những khuôn mặt méo mó bị mắc kẹt bên trong.",
			"Tôi đã nghĩ đó là một ảo ảnh mờ nhạt.",
			"Nhưng có ai đó… đã nhìn thấy sự thật.",
			"Ánh mắt đó đã gợi lên một ký ức xa lạ."
		],
		"thai": [
			"พื้นผิวที่โปร่งใสของถ้วยเขา",
			"ใบหน้าที่บิดเบี้ยวติดอยู่ข้างใน",
			"ฉันคิดว่ามันเป็นภาพลวงตาที่จางหาย",
			"แต่มีใครบางคน… เห็นความจริง",
			"สายตานั้นปลุกความทรงจำแปลกๆ"
		],
		"hindi": [
			"सींग के प्याले की पारदर्शी सतह।",
			"उसके भीतर फँसे हुए विकृत चेहरे।",
			"मैंने सोचा यह एक हल्की माया है।",
			"पर किसी ने… सच देखा।",
			"उस दृष्टि ने एक अजीब स्मृति जगाई।"
		]
	}
} as const;
