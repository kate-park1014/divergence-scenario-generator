export const scenario_snowy_fenrir_87_02 = {
	"scenario_id": "snowy_fenrir_87_02",
	"order": 2,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"eira": {
			"id": "mon_0c37c014-b5ca-4f2f-ad03-5d393e5b2eb1",
			"name": {
				"korean": "에이라",
				"english": "Eira",
				"japanese": "エイラ",
				"chinese": "艾拉",
				"french": "Eira",
				"spanish": "Eira",
				"vietnamese": "Eira",
				"thai": "ไอรา",
				"hindi": "ऐरा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8e2970b7-bcb1-4b1c-6bf0-93106b373500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/0ca1ec09-a624-450f-054a-b98de58bdb00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"늑대의 동공, 끝없는 눈보라 속.",
			"처음으로 소리가 들리기 시작했다.",
			"그것은 포효가 아니었다. 겹쳐 우는, 가똬로운 신음이었다.",
			"마치 멈출 수 없는 고통처럼."
		],
		"english": [
			"Wolf's pupil, amidst an endless blizzard.",
			"For the first time, a sound began to be heard.",
			"It was not a roar. It was a guttural moan, layered and wailing.",
			"Like an unstoppable pain."
		],
		"japanese": [
			"狼の瞳、終わりのない吹雪の中。",
			"初めて、音が聞こえ始めた。",
			"それは咆哮ではなかった。重なり合う、苦しげな呻きだった。",
			"まるで止められない苦痛のように。"
		],
		"chinese": [
			"狼的瞳孔，无尽暴风雪中。",
			"第一次，声音开始响起。",
			"那不是咆哮。那是层叠的、痛苦的呻吟。",
			"仿佛无法停止的痛苦。"
		],
		"french": [
			"La pupille du loup, au cœur d'un blizzard éternel.",
			"Pour la première fois, un son commença à se faire entendre.",
			"Ce n'était pas un rugissement. C'était un gémissement guttural, superposé et plaintif.",
			"Comme une douleur inarrêtable."
		],
		"spanish": [
			"La pupila del lobo, en medio de una tormenta de nieve sin fin.",
			"Por primera vez, un sonido comenzó a escucharse.",
			"No era un rugido. Era un gemido gutural, superpuesto y lastimero.",
			"Como un dolor imparable."
		],
		"vietnamese": [
			"Đồng tử sói, giữa bão tuyết vô tận.",
			"Lần đầu tiên, một âm thanh bắt đầu vang lên.",
			"Đó không phải là tiếng gầm. Đó là tiếng rên rỉ khò khè, chồng chất và than khóc.",
			"Như một nỗi đau không thể ngăn cản."
		],
		"thai": [
			"ม่านตาหมาป่า ท่ามกลางพายุหิมะไม่สิ้นสุด",
			"เป็นครั้งแรกที่เสียงเริ่มได้ยิน",
			"ไม่ใช่เสียงคำราม แต่เป็นเสียงครางอันเจ็บปวดที่ซ้อนกันอยู่",
			"ราวกับความเจ็บปวดที่หยุดไม่ได้"
		],
		"hindi": [
			"भेड़िये की पुतली, अंतहीन बर्फीले तूफान में।",
			"पहली बार, एक आवाज़ सुनाई देने लगी।",
			"वह दहाड़ नहीं थी। वह एक गहरी, रोती हुई कराह थी।",
			"जैसे एक अथाह पीड़ा।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "늑대의 동공은 고요했다. 그러나 어둠 속에서 희미한 소리가 들려왔다.",
						"english": "The wolf's pupil was still. But a faint sound drifted from the darkness.",
						"japanese": "狼の瞳は静かだった。しかし、闇の中から微かな音が聞こえてきた。",
						"chinese": "狼的瞳孔寂静无声。然而，黑暗中传来微弱的声音。",
						"french": "La pupille du loup était immobile. Mais un son faible s'échappa de l'obscurité.",
						"spanish": "La pupila del lobo estaba inmóvil. Pero un sonido tenue surgió de la oscuridad.",
						"vietnamese": "Đồng tử sói tĩnh lặng. Nhưng một âm thanh yếu ớt vọng ra từ bóng tối.",
						"thai": "ม่านตาของหมาป่าสงบนิ่ง แต่เสียงแผ่วเบาเล็ดลอดออกมาจากความมืด",
						"hindi": "भेड़िये की पुतली शांत थी। लेकिन अँधेरे से एक धीमी आवाज़ आई।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이 소리는… 뭐야?",
						"english": "This sound... what is it?",
						"japanese": "この音は…何だ？",
						"chinese": "这声音…是什么？",
						"french": "Ce son... qu'est-ce que c'est ?",
						"spanish": "Este sonido... ¿qué es?",
						"vietnamese": "Âm thanh này… là gì?",
						"thai": "เสียงนี่... คืออะไร?",
						"hindi": "यह आवाज़... क्या है?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"spot": [
						4,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "이 룬… 전에 본 적 없어. 하지만… 읽혀.",
						"english": "These runes... I haven't seen them before. But... I can read them.",
						"japanese": "このルーン…見たことない。だけど…読める。",
						"chinese": "这些符文…我以前没见过。但是…我能读懂。",
						"french": "Ces runes... Je ne les ai jamais vues. Mais... je peux les lire.",
						"spanish": "Estas runas... no las había visto antes. Pero... puedo leerlas.",
						"vietnamese": "Những ký tự này… mình chưa từng thấy. Nhưng… mình đọc được.",
						"thai": "รูนพวกนี้... ไม่เคยเห็นมาก่อนเลย แต่... อ่านออก",
						"hindi": "ये रुन्स... मैंने पहले कभी नहीं देखे। लेकिन... मैं इन्हें पढ़ सकता हूँ।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "포효가 아니야. 이건… 신음.",
						"english": "It's not a roar. This is... a moan.",
						"japanese": "咆哮じゃない。これは…呻き。",
						"chinese": "这不是咆哮。这是…呻吟。",
						"french": "Ce n'est pas un rugissement. C'est... un gémissement.",
						"spanish": "No es un rugido. Esto es... un gemido.",
						"vietnamese": "Không phải tiếng gầm. Đây là… tiếng rên.",
						"thai": "ไม่ใช่เสียงคำราม นี่คือ... เสียงคราง",
						"hindi": "यह दहाड़ नहीं है। यह... एक कराह है।"
					},
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "신음이라고?",
						"english": "A moan?",
						"japanese": "呻きだと？",
						"chinese": "呻吟？",
						"french": "Un gémissement ?",
						"spanish": "¿Un gemido?",
						"vietnamese": "Tiếng rên à?",
						"thai": "เสียงครางเหรอ?",
						"hindi": "कराह?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
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
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "조용히 해봐. 잘 들어봐.",
						"english": "Quiet. Listen closely.",
						"japanese": "静かに。よく聞いて。",
						"chinese": "安静。仔细听。",
						"french": "Silence. Écoute bien.",
						"spanish": "Silencio. Escucha atentamente.",
						"vietnamese": "Im lặng. Nghe kỹ xem.",
						"thai": "เงียบหน่อย ตั้งใจฟัง",
						"hindi": "शांत रहो। ध्यान से सुनो。"
					},
					"speaker": "eira",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "한 마리의 소리가 아니야. 수백, 수천… 겹쳐 있어.",
						"english": "It's not one sound. Hundreds, thousands... layered.",
						"japanese": "一匹の声じゃない。数百、数千…重なってる。",
						"chinese": "这不是一个声音。是数百、数千个…交织在一起。",
						"french": "Ce n'est pas un seul son. Des centaines, des milliers... se superposent.",
						"spanish": "No es un solo sonido. Cientos, miles... se superponen.",
						"vietnamese": "Không phải tiếng của một con. Hàng trăm, hàng nghìn... chồng chất lên nhau.",
						"thai": "ไม่ใช่เสียงเดียว หลายร้อย, หลายพัน... ซ้อนทับกันอยู่",
						"hindi": "यह एक आवाज़ नहीं है। सैकड़ों, हज़ारों... एक साथ गूँज रहे हैं।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "여러 목소리가 동시에 우는 것 같다고?",
						"english": "You mean multiple voices crying out at once?",
						"japanese": "複数の声が同時に泣いているようだと？",
						"chinese": "你是说，很多声音在同时哭泣？",
						"french": "Tu veux dire que plusieurs voix pleurent en même temps ?",
						"spanish": "¿Quieres decir que múltiples voces lloran a la vez?",
						"vietnamese": "Ý bạn là nhiều giọng nói cùng lúc kêu than?",
						"thai": "นายหมายถึงหลายเสียงร้องพร้อมกันเหรอ?",
						"hindi": "तुम्हारा मतलब है, कई आवाज़ें एक साथ रो रही हैं?"
					},
					"speaker": "character_1"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "…그래. 전부, 함께 울고 있어.",
						"english": "...Yes. All of them, crying out together.",
						"japanese": "…ああ。全部、一緒に泣いている。",
						"chinese": "…对。它们全部，都在一起哭泣。",
						"french": "...Oui. Toutes, elles pleurent ensemble.",
						"spanish": "...Sí. Todas, llorando juntas.",
						"vietnamese": "...Đúng vậy. Tất cả, cùng nhau than khóc.",
						"thai": "...ใช่. ทั้งหมด, ร้องไห้พร้อมกัน.",
						"hindi": "...हाँ। सब के सब, एक साथ रो रहे हैं।"
					},
					"emotion": "sad",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"speaker": "eira",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "eira",
					"content": {
						"korean": "이 신음은 굶주림의 고통이야.",
						"english": "This moan is the pain of hunger.",
						"japanese": "このうめきは飢えの苦痛だ。",
						"chinese": "这种呻吟是饥饿的痛苦。",
						"french": "Ce gémissement est la douleur de la faim.",
						"spanish": "Este gemido es el dolor del hambre.",
						"vietnamese": "Tiếng rên này là nỗi đau của sự đói khát.",
						"thai": "เสียงครางนี้คือความเจ็บปวดจากความหิวโหย",
						"hindi": "यह कराह भूख का दर्द है।"
					}
				},
				{
					"speaker": "character_2",
					"content": {
						"korean": "굶주림?",
						"english": "Hunger?",
						"japanese": "飢え？",
						"chinese": "饥饿？",
						"french": "La faim ?",
						"spanish": "¿Hambre?",
						"vietnamese": "Đói khát?",
						"thai": "หิว?",
						"hindi": "भूख?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "멈추지 못하는 거야. 스스로조차 통제할 수 없는.",
						"english": "It can't stop. Unable to control itself.",
						"japanese": "止められないんだ。自分ですら制御できない。",
						"chinese": "无法停止。甚至连自己都无法控制。",
						"french": "Ça ne peut pas s'arrêter. Incapable de se contrôler.",
						"spanish": "No puede detenerse. Incapaz de controlarse.",
						"vietnamese": "Nó không thể dừng lại. Ngay cả bản thân cũng không thể kiểm soát.",
						"thai": "มันหยุดไม่ได้. แม้แต่ตัวเองก็ควบคุมไม่ได้",
						"hindi": "यह रुक नहीं सकता। खुद को भी नियंत्रित नहीं कर पा रहा है।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "이 모든 목소리가… 함께 굶주려 고통받고 있어.",
						"english": "All these voices... are starving and suffering together.",
						"japanese": "この全ての声が…一緒に飢えて苦しんでいる。",
						"chinese": "所有这些声音…都在一起饥饿受苦。",
						"french": "Toutes ces voix... meurent de faim et souffrent ensemble.",
						"spanish": "Todas estas voces... están hambrientas y sufriendo juntas.",
						"vietnamese": "Tất cả những giọng nói này… đều cùng nhau đói khát và đau khổ.",
						"thai": "เสียงทั้งหมดนี้... กำลังหิวโหยและทนทุกข์ทรมานพร้อมกัน",
						"hindi": "ये सभी आवाज़ें... एक साथ भूखी और पीड़ित हैं।"
					},
					"speaker": "eira",
					"emotion": "sad",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"speaker": "eira",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						4
					]
				},
				{
					"content": {
						"korean": "점점 더 심해지고 있어.",
						"english": "It's getting worse and worse.",
						"japanese": "ますますひどくなっている。",
						"chinese": "情况越来越糟了。",
						"french": "Ça empire de plus en plus.",
						"spanish": "Está empeorando cada vez más.",
						"vietnamese": "Nó ngày càng tệ hơn.",
						"thai": "มันแย่ลงเรื่อยๆ",
						"hindi": "यह और बदतर होता जा रहा है।"
					},
					"speaker": "eira",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "멈출 수 없다는 게… 무슨 의미인데?",
						"english": "What does 'can't stop' mean?",
						"japanese": "止められないって…どういう意味だ？",
						"chinese": "无法停止…是什么意思？",
						"french": "Que veut dire 'ne pas pouvoir s'arrêter' ?",
						"spanish": "¿Qué significa 'no poder parar'?",
						"vietnamese": "Không thể dừng lại… có nghĩa là gì?",
						"thai": "หยุดไม่ได้... หมายความว่ายังไง?",
						"hindi": "'रुक नहीं सकता' का क्या मतलब है?"
					},
					"speaker": "character_3",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "이 모든 고통이 하나로 뭉쳐졌어. 거대한 굶주림으로.",
						"english": "All this suffering has merged into one. Into a colossal hunger.",
						"japanese": "この全ての苦痛が一つにまとまった。巨大な飢えとして。",
						"chinese": "所有这些痛苦都汇聚成了一个。化作了巨大的饥饿。",
						"french": "Toute cette souffrance s'est fondue en une seule. En une faim colossale.",
						"spanish": "Todo este sufrimiento se ha fusionado en uno solo. En una hambruna colosal.",
						"vietnamese": "Tất cả nỗi đau này đã hợp nhất thành một. Thành một cơn đói khổng lồ.",
						"thai": "ความเจ็บปวดทั้งหมดนี้รวมเป็นหนึ่งเดียวแล้ว. เป็นความหิวโหยอันมหึมา",
						"hindi": "यह सारा दर्द एक साथ मिल गया है। एक विशाल भूख में।"
					},
					"speaker": "eira"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "벗어날 수 없어. 이 동공은… 굶주린 자들의 무덤이야.",
						"english": "There's no escape. This cavern... it's a tomb for the starved.",
						"japanese": "逃れられない。この洞窟は…飢えた者たちの墓場だ。",
						"chinese": "无法逃脱。这个洞穴……是饥饿者的坟墓。",
						"french": "Impossible de s'échapper. Cette caverne... c'est la tombe des affamés.",
						"spanish": "No hay escape. Esta caverna... es una tumba para los hambrientos.",
						"vietnamese": "Không thể thoát. Hang động này… là nấm mồ của những kẻ đói khát.",
						"thai": "หนีไม่พ้น ถ้ำแห่งนี้...คือสุสานของผู้หิวโหย",
						"hindi": "कोई बच नहीं सकता। यह गुफा... भूखों का मकबरा है।"
					},
					"emotion": "sad",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "…겨우… 멈추는구나… 고통이…",
						"english": "...Finally... the pain... stops...",
						"japanese": "…ようやく…止まるのか…苦痛が…",
						"chinese": "……终于……停止了……痛苦……",
						"french": "...Enfin... la douleur... s'arrête...",
						"spanish": "...Por fin... el dolor... se detiene...",
						"vietnamese": "...Cuối cùng... nỗi đau... cũng dừng lại...",
						"thai": "...ในที่สุด...ความเจ็บปวด...ก็หยุดลง...",
						"hindi": "...आखिरकार... दर्द... रुक गया..."
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "고통…?",
						"english": "Pain...?",
						"japanese": "苦痛…？",
						"chinese": "痛苦……？",
						"french": "Douleur...?",
						"spanish": "¿Dolor...?",
						"vietnamese": "Đau đớn…?",
						"thai": "ความเจ็บปวด...?",
						"hindi": "दर्द...?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "겹쳐 우는 신음이 잦아들었다. 그러나 굶주림의 그림자는 여전히 남아있었다.",
						"english": "The overlapping moans subsided. But the shadow of hunger still remained.",
						"japanese": "重なり合う呻きは鎮まった。しかし、飢えの影は依然として残っていた。",
						"chinese": "重叠的呻吟声平息了。然而，饥饿的阴影依然存在。",
						"french": "Les gémissements entrelacés se sont estompés. Mais l'ombre de la faim demeurait toujours.",
						"spanish": "Los gemidos superpuestos disminuyeron. Pero la sombra del hambre aún permanecía.",
						"vietnamese": "Những tiếng rên rỉ chồng chất dần lắng xuống. Nhưng bóng tối của sự đói khát vẫn còn đó.",
						"thai": "เสียงครางที่ทับซ้อนกันค่อยๆ เงียบลง แต่เงาของความหิวโหยก็ยังคงอยู่",
						"hindi": "एक-दूसरे पर गूँजती कराहें धीमी पड़ गईं। लेकिन भूख की छाया अभी भी बनी हुई थी।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "다음 진실은, 멈추려다 다시 삼키는 늑대의 눈물 속에서 기다리고 있었다.",
						"english": "The next truth awaited in the wolf's tears, swallowed again as it tried to stop.",
						"japanese": "次の真実は、止めようとして再び飲み込む狼の涙の中に待っていた。",
						"chinese": "下一个真相，在狼试图止住却又再次吞下的泪水中等待着。",
						"french": "La prochaine vérité attendait dans les larmes du loup, ravalées alors qu'il tentait de s'arrêter.",
						"spanish": "La próxima verdad esperaba en las lágrimas del lobo, tragadas de nuevo mientras intentaba detenerse.",
						"vietnamese": "Chân lý tiếp theo ẩn mình trong giọt nước mắt của sói, nuốt ngược vào trong khi cố kìm lại.",
						"thai": "ความจริงต่อไปรออยู่ในน้ำตาของหมาป่าที่กลืนกลับลงไปอีกครั้งเมื่อพยายามจะหยุด",
						"hindi": "अगला सच, भेड़िये के आँसुओं में इंतज़ार कर रहा था, जो रुकने की कोशिश करते हुए फिर से निगल लिए गए।"
					},
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "늑대의 심장부, 겹쳐 우는 신음이 폭풍처럼 몰아쳤다.",
						"english": "In the heart of the wolf, overlapping moans raged like a storm.",
						"japanese": "狼の心臓部、重なり合う呻きが嵐のように荒れ狂った。",
						"chinese": "在狼的心脏深处，重叠的呻吟声如风暴般狂啸。",
						"french": "Au cœur du loup, des gémissements entrelacés faisaient rage comme une tempête.",
						"spanish": "En el corazón del lobo, los gemidos superpuestos rugieron como una tormenta.",
						"vietnamese": "Trong trái tim của sói, những tiếng rên rỉ chồng chất gào thét như bão tố.",
						"thai": "ในใจกลางของหมาป่า เสียงครางที่ทับซ้อนกันโหมกระหน่ำราวพายุ",
						"hindi": "भेड़िये के हृदय में, एक-दूसरे पर गूँजती कराहें तूफान की तरह उठीं।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "…왔군. 너희도 그 소리를 들었나?",
						"english": "...You've come. Did you hear that sound too?",
						"japanese": "…来たか。お前たちもあの声を聞いたのか？",
						"chinese": "……你来了。你们也听到那个声音了吗？",
						"french": "...Vous êtes venus. Avez-vous aussi entendu ce son ?",
						"spanish": "...Has llegado. ¿También escuchaste ese sonido?",
						"vietnamese": "...Ngươi đã đến. Ngươi cũng nghe thấy âm thanh đó sao?",
						"thai": "...มาแล้วรึ เจ้าก็ได้ยินเสียงนั้นด้วยหรือเปล่า?",
						"hindi": "...तुम आ गए। क्या तुमने भी वह आवाज़ सुनी?"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "너는… 이 모든 고통의 주인인가?",
						"english": "Are you... the master of all this suffering?",
						"japanese": "お前が…この全ての苦痛の主なのか？",
						"chinese": "你就是……这所有痛苦的主人吗？",
						"french": "Es-tu... le maître de toute cette souffrance ?",
						"spanish": "¿Eres tú... el dueño de todo este sufrimiento?",
						"vietnamese": "Ngươi… là chủ nhân của mọi nỗi đau này sao?",
						"thai": "เจ้าคือ...เจ้าของความทรมานทั้งหมดนี้หรือ?",
						"hindi": "क्या तुम... इस सारी पीड़ा के स्वामी हो?"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "나는 그저, 굶주림의 끝일 뿐.",
						"english": "I am merely the end of hunger.",
						"japanese": "私はただ、飢えの終わりなだけだ。",
						"chinese": "我只是，饥饿的终结。",
						"french": "Je ne suis que la fin de la faim.",
						"spanish": "Soy meramente el fin del hambre.",
						"vietnamese": "Ta chỉ là, tận cùng của sự đói khát.",
						"thai": "ข้าเป็นเพียงแค่จุดจบของความหิวโหยเท่านั้น",
						"hindi": "मैं तो बस भूख का अंत हूँ।"
					}
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "eira",
					"spot": [
						3,
						3
					]
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "아니, 아니야! 이 소리는… 통제된 게 아니야. 함께 울고 있는 거야.",
						"english": "No, no! This sound... it's not controlled. They're crying out together.",
						"japanese": "違う、違う！この声は…制御されたものではない。共に泣いているのだ。",
						"chinese": "不，不是！这个声音……它不是被控制的。它们是共同在哭泣。",
						"french": "Non, non ! Ce son... il n'est pas contrôlé. Ils pleurent ensemble.",
						"spanish": "¡No, no! Este sonido... no está controlado. Están llorando juntos.",
						"vietnamese": "Không, không phải! Âm thanh này… không phải bị kiểm soát. Chúng đang cùng nhau khóc.",
						"thai": "ไม่ ไม่ใช่! เสียงนี้...มันไม่ได้ถูกควบคุม พวกเขากำลังร้องไห้ไปด้วยกัน",
						"hindi": "नहीं, नहीं! यह आवाज़... नियंत्रित नहीं है। वे सब मिलकर रो रहे हैं।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "감히…!",
						"english": "How dare you...!",
						"japanese": "よくも…！",
						"chinese": "你竟敢……！",
						"french": "Comment oses-tu...!",
						"spanish": "¡Cómo te atreves...!",
						"vietnamese": "Ngươi dám…!",
						"thai": "บังอาจ...!",
						"hindi": "तुम्हारी हिम्मत कैसे हुई...!"
					},
					"speaker": "random_boss"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "아직도 모르겠나? 이 굶주림은… 멈추지 않아.",
						"english": "Still don't understand? This hunger... it won't stop.",
						"japanese": "まだ分からないのか？この飢えは…止まらない。",
						"chinese": "还不明白吗？这份饥饿…不会停止。",
						"french": "Tu ne comprends toujours pas ? Cette faim… elle ne s'arrêtera pas.",
						"spanish": "¿Todavía no lo entiendes? Este hambre... no se detendrá.",
						"vietnamese": "Vẫn chưa hiểu sao? Cơn đói này... sẽ không dừng lại.",
						"thai": "ยังไม่เข้าใจอีกเหรอ? ความหิวนี้... มันไม่หยุดหรอกนะ",
						"hindi": "अभी भी नहीं समझे? यह भूख… रुकेगी नहीं।"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "…젠장!",
						"english": "...Damn it!",
						"japanese": "…ちくしょう！",
						"chinese": "…该死！",
						"french": "...Bon sang !",
						"spanish": "...¡Maldita sea!",
						"vietnamese": "...Chết tiệt!",
						"thai": "...ให้ตายสิ!",
						"hindi": "…धिक्कार है!"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "아직 끝나지 않았어. 우린… 멈출 거야.",
						"english": "It's not over yet. We'll... stop it.",
						"japanese": "まだ終わってない。私たちは…止めるんだ。",
						"chinese": "还没结束。我们…会阻止它。",
						"french": "Ce n'est pas encore fini. Nous allons… l'arrêter.",
						"spanish": "Todavía no ha terminado. Nosotros… lo detendremos.",
						"vietnamese": "Chưa kết thúc đâu. Chúng ta... sẽ ngăn chặn nó.",
						"thai": "ยังไม่จบหรอกนะ พวกเรา... จะหยุดมันให้ได้",
						"hindi": "अभी खत्म नहीं हुआ। हम… इसे रोकेंगे।"
					},
					"speaker": "character_any"
				}
			]
		}
	]
} as const;
