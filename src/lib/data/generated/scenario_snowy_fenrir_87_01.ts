export const scenario_snowy_fenrir_87_01 = {
	"scenario_id": "snowy_fenrir_87_01",
	"order": 1,
	"act": "intro",
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
			"늑대의 텅 빈 동공, 얼어붙은 눈보라 속.",
			"희미한 소리가 처음으로 들려왔다.",
			"포효라기엔 너무나 가냘픈 신음이었다.",
			"그것은 멈출 수 없는 굶주림의 고통이었다."
		],
		"english": [
			"In the wolf's empty gaze, amidst the freezing blizzard.",
			"A faint sound was heard for the first time.",
			"Too weak to be a roar, it was a whimper.",
			"It was the pain of insatiable hunger."
		],
		"japanese": [
			"狼の虚ろな瞳、凍てつく吹雪の中。",
			"初めて微かな音が聞こえた。",
			"咆哮というにはあまりにもか細い呻きだった。",
			"それは止めどない飢餓の苦痛だった。"
		],
		"chinese": [
			"在狼空洞的瞳孔中，冰冷暴风雪里。",
			"第一次听到了微弱的声音。",
			"与其说是咆哮，不如说是虚弱的呻吟。",
			"那是无法抑制的饥饿之痛。"
		],
		"french": [
			"Dans les pupilles vides du loup, au cœur du blizzard glacial.",
			"Un son ténu se fit entendre pour la première fois.",
			"Trop faible pour un rugissement, c'était un gémissement.",
			"C'était la douleur d'une faim insatiable."
		],
		"spanish": [
			"En las cuencas vacías del lobo, en medio de la ventisca helada.",
			"Un sonido tenue se escuchó por primera vez.",
			"Demasiado débil para un rugido, era un gemido.",
			"Era el dolor de un hambre insaciable."
		],
		"vietnamese": [
			"Trong đôi mắt trống rỗng của sói, giữa bão tuyết đóng băng.",
			"Lần đầu tiên một âm thanh yếu ớt vang lên.",
			"Quá yếu để là tiếng gầm, đó là một tiếng rên rỉ.",
			"Đó là nỗi đau của cơn đói không ngừng."
		],
		"thai": [
			"ในดวงตาที่ว่างเปล่าของหมาป่า ท่ามกลางพายุหิมะอันเยือกแข็ง",
			"เสียงแผ่วเบาได้ยินเป็นครั้งแรก",
			"อ่อนแอเกินกว่าจะเป็นเสียงคำราม มันคือเสียงคราง",
			"มันคือความเจ็บปวดจากความหิวโหยที่ไม่รู้จักพอ"
		],
		"hindi": [
			"भेड़िये की सूनी आँखों में, बर्फीले तूफान के बीच।",
			"पहली बार एक धीमी सी आवाज़ सुनाई दी।",
			"गरजने के लिए बहुत कमजोर, यह एक सिसकी थी।",
			"यह अथाह भूख का दर्द था।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "텅 빈 동공 안. 싸늘한 눈보라가 휘몰아쳤다.",
						"english": "Inside the empty eye sockets. A chilling blizzard raged.",
						"japanese": "虚ろな瞳の奥。冷たい吹雪が荒れ狂った。",
						"chinese": "空洞的眼窝里。寒冷的暴风雪肆虐。",
						"french": "Au fond des pupilles vides. Un blizzard glacial faisait rage.",
						"spanish": "En las cuencas vacías. Una ventisca helada se desataba.",
						"vietnamese": "Trong hốc mắt trống rỗng. Một trận bão tuyết lạnh giá hoành hành.",
						"thai": "ภายในเบ้าตาที่ว่างเปล่า พายุหิมะอันหนาวเหน็บพัดกระหน่ำ",
						"hindi": "खाली आँखों के भीतर। एक ठंडी बर्फीली आँधी चल रही थी।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…뭐지? 이 소리.",
						"english": "...What is this sound?",
						"japanese": "…何だ？この音。",
						"chinese": "…这是什么声音？",
						"french": "...Qu'est-ce que ce son ?",
						"spanish": "...¿Qué es este sonido?",
						"vietnamese": "...Gì thế? Âm thanh này.",
						"thai": "...อะไรนะ? เสียงนี้",
						"hindi": "...यह क्या आवाज़ है?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "포효가 아니야. 신음에 가까워.",
						"english": "It's not a roar. It's closer to a whimper.",
						"japanese": "咆哮じゃない。呻きに近い。",
						"chinese": "不是咆哮。更像是呻吟。",
						"french": "Ce n'est pas un rugissement. C'est plus proche d'un gémissement.",
						"spanish": "No es un rugido. Es más bien un gemido.",
						"vietnamese": "Không phải tiếng gầm. Gần với tiếng rên rỉ hơn.",
						"thai": "ไม่ใช่เสียงคำราม มันใกล้เคียงกับเสียงคราง",
						"hindi": "यह दहाड़ नहीं है। यह एक सिसकी के करीब है।"
					},
					"emotion": "base"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"speaker": "eira",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "점점 더 또렷해져. 한 목소리가 아니야.",
						"english": "It's getting clearer. It's not just one voice.",
						"japanese": "だんだん明瞭になってきた。一つの声じゃない。",
						"chinese": "越来越清晰了。不是一个声音。",
						"french": "Ça devient de plus en plus clair. Ce n'est pas une seule voix.",
						"spanish": "Se está volviendo más claro. No es una sola voz.",
						"vietnamese": "Ngày càng rõ ràng hơn. Không phải một giọng nói.",
						"thai": "มันชัดเจนขึ้นเรื่อยๆ ไม่ใช่แค่เสียงเดียว",
						"hindi": "यह और साफ होता जा रहा है। यह एक आवाज़ नहीं है।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "여러 소리가 겹친다고?",
						"english": "Multiple sounds overlapping?",
						"japanese": "複数の音が重なっているのか？",
						"chinese": "是多种声音重叠吗？",
						"french": "Plusieurs sons se superposent ?",
						"spanish": "¿Múltiples sonidos superpuestos?",
						"vietnamese": "Nhiều âm thanh chồng chéo lên nhau?",
						"thai": "เสียงหลายเสียงทับซ้อนกันเหรอ?",
						"hindi": "कई आवाज़ें आपस में मिल रही हैं?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "고통에 찬… 수많은 신음이야.",
						"english": "It's countless whimpers... filled with pain.",
						"japanese": "苦痛に満ちた…無数の呻きだ。",
						"chinese": "那是充满痛苦的……无数的呻吟。",
						"french": "Ce sont d'innombrables gémissements... remplis de douleur.",
						"spanish": "Son incontables gemidos... llenos de dolor.",
						"vietnamese": "Đó là vô số tiếng rên rỉ... đầy đau đớn.",
						"thai": "มันคือเสียงครางนับไม่ถ้วน...ที่เต็มไปด้วยความเจ็บปวด",
						"hindi": "यह अनगिनत सिसकियाँ हैं... दर्द से भरी हुई।"
					}
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "eira",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "이 굶주림은… 끝이 없어.",
						"english": "This hunger... it never ends.",
						"japanese": "この飢えは… 終わりがない。",
						"chinese": "这份饥饿……永无止境。",
						"french": "Cette faim... elle est sans fin.",
						"spanish": "Esta hambre... no tiene fin.",
						"vietnamese": "Cơn đói này... không có hồi kết.",
						"thai": "ความหิวนี้... ไม่มีที่สิ้นสุด",
						"hindi": "यह भूख... कभी खत्म नहीं होती।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리야.",
						"english": "What's that sound?",
						"japanese": "何の音だ。",
						"chinese": "那是什么声音。",
						"french": "Quel est ce bruit ?",
						"spanish": "¿Qué es ese sonido?",
						"vietnamese": "Tiếng gì vậy?",
						"thai": "เสียงอะไรน่ะ",
						"hindi": "यह कैसी आवाज़ है।"
					}
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "늑대 자신도 멈추지 못하는 고통….",
						"english": "A pain even the wolf itself cannot stop...",
						"japanese": "狼自身も止められない苦痛…",
						"chinese": "连狼自己也无法停止的痛苦……",
						"french": "Une douleur que même le loup ne peut arrêter...",
						"spanish": "Un dolor que ni el lobo puede detener...",
						"vietnamese": "Nỗi đau mà ngay cả sói cũng không thể ngừng lại...",
						"thai": "ความเจ็บปวดที่แม้แต่หมาป่าเองก็หยุดไม่ได้...",
						"hindi": "एक ऐसा दर्द जिसे भेड़िया भी नहीं रोक सकता..."
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						3
					],
					"speaker": "eira",
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "고통에 잠식된 채… 멈출 수 없는 소리야.",
						"english": "Engulfed in pain... it's a sound that cannot be stopped.",
						"japanese": "苦痛に飲み込まれて… 止められない音だ。",
						"chinese": "被痛苦吞噬……是无法停止的声音。",
						"french": "Englouti par la douleur... c'est un son imparable.",
						"spanish": "Sumergido en el dolor... es un sonido imparable.",
						"vietnamese": "Bị nỗi đau nuốt chửng... là một âm thanh không thể dừng lại.",
						"thai": "จมดิ่งในความเจ็บปวด... เป็นเสียงที่หยุดไม่ได้",
						"hindi": "दर्द में डूबा हुआ... यह एक ऐसी आवाज़ है जिसे रोका नहीं जा सकता।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "막아야 해.",
						"english": "We have to stop it.",
						"japanese": "止めなければ。",
						"chinese": "必须阻止它。",
						"french": "Il faut l'arrêter.",
						"spanish": "Hay que detenerlo.",
						"vietnamese": "Phải ngăn chặn nó.",
						"thai": "ต้องหยุดมัน",
						"hindi": "हमें इसे रोकना होगा।"
					}
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "아니. 이해해야 해.",
						"english": "No. We must understand it.",
						"japanese": "いや。理解しなければならない。",
						"chinese": "不。我们必须理解它。",
						"french": "Non. Nous devons le comprendre.",
						"spanish": "No. Debemos entenderlo.",
						"vietnamese": "Không. Chúng ta phải hiểu nó.",
						"thai": "ไม่สิ ต้องเข้าใจมัน",
						"hindi": "नहीं। हमें इसे समझना होगा।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "…겨우… 멈췄어….",
						"english": "...It... finally stopped...",
						"japanese": "…やっと…止まった…。",
						"chinese": "...总算...停下了...",
						"french": "...Enfin... c'est arrêté...",
						"spanish": "...Por fin... se detuvo...",
						"vietnamese": "...Cuối cùng... cũng dừng lại...",
						"thai": "...ในที่สุด...ก็หยุดลง...",
						"hindi": "...आखिरकार... रुक गया..."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "고통이… 끝난 거야?",
						"english": "Is the pain... over?",
						"japanese": "苦痛は…終わったのか？",
						"chinese": "痛苦…结束了吗？",
						"french": "La douleur… est-elle finie ?",
						"spanish": "¿El dolor… terminó?",
						"vietnamese": "Nỗi đau… đã kết thúc rồi sao?",
						"thai": "ความเจ็บปวด… สิ้นสุดลงแล้วหรือ?",
						"hindi": "दर्द… खत्म हो गया क्या?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "신음은 잦아들었다. 하지만 늑대의 텅 빈 동공은 여전히 모든 것을 갈구하는 듯했다. 아직 끝나지 않았다.",
						"english": "The groans subsided. But the wolf's empty pupils still seemed to crave everything. It's not over yet.",
						"japanese": "うめき声は静まった。しかし、狼の虚ろな瞳孔は、まだすべてを渇望しているようだった。まだ終わっていない。",
						"chinese": "呻吟声平息了。但狼空洞的瞳孔，仿佛仍在渴望一切。尚未结束。",
						"french": "Les gémissements se sont apaisés. Mais les pupilles vides du loup semblaient toujours tout désirer. Ce n'est pas encore fini.",
						"spanish": "Los gemidos cesaron. Pero las pupilas vacías del lobo aún parecían anhelarlo todo. Aún no ha terminado.",
						"vietnamese": "Tiếng rên rỉ đã lắng xuống. Nhưng đồng tử trống rỗng của con sói vẫn như khao khát tất cả mọi thứ. Nó vẫn chưa kết thúc.",
						"thai": "เสียงครวญครางเงียบลง แต่ดวงตาที่ว่างเปล่าของหมาป่ายังคงดูเหมือนกระหายทุกสิ่ง มันยังไม่จบลง",
						"hindi": "कराहे शांत हो गईं। लेकिन भेड़िये की खाली पुतलियाँ अभी भी सब कुछ चाह रही थीं। यह अभी खत्म नहीं हुआ है।"
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "멈출 수 없어… 누구도….",
						"english": "Cannot be stopped... by anyone...",
						"japanese": "止められない…誰も…。",
						"chinese": "无法停止…任何人也….",
						"french": "Impossible d'arrêter… personne…",
						"spanish": "Imparable... nadie...",
						"vietnamese": "Không thể dừng lại… bất cứ ai…",
						"thai": "หยุดไม่ได้... ไม่มีใคร...",
						"hindi": "रोक नहीं सकता... कोई नहीं..."
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "젠장… 다시 간다!",
						"english": "Damn it... Here I go again!",
						"japanese": "くそっ…また行くぞ！",
						"chinese": "该死… 又来了！",
						"french": "Merde… C'est reparti !",
						"spanish": "Maldita sea… ¡Allá voy de nuevo!",
						"vietnamese": "Chết tiệt… Lại đến nữa rồi!",
						"thai": "ให้ตายสิ… ไปอีกแล้ว!",
						"hindi": "धिक्कार है… मैं फिर से जा रहा हूँ!"
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "내게서… 벗어날 수 없어.",
						"english": "You cannot... escape me.",
						"japanese": "私からは… 逃れられない。",
						"chinese": "你无法……摆脱我。",
						"french": "Vous ne pouvez pas... m'échapper.",
						"spanish": "No puedes... escapar de mí.",
						"vietnamese": "Ngươi không thể... thoát khỏi ta.",
						"thai": "เจ้าหนีจากข้า... ไม่ได้หรอก",
						"hindi": "तुम मुझसे... बच नहीं सकते।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "너희의 고통을 멈춰주겠어!",
						"english": "I will stop your suffering!",
						"japanese": "お前たちの苦痛を止めてやる！",
						"chinese": "我会终结你们的痛苦！",
						"french": "Je mettrai fin à vos souffrances !",
						"spanish": "¡Pondré fin a vuestro sufrimiento!",
						"vietnamese": "Ta sẽ chấm dứt nỗi đau của các ngươi!",
						"thai": "ข้าจะหยุดความทุกข์ทรมานของพวกเจ้าเอง!",
						"hindi": "मैं तुम्हारी पीड़ा को रोक दूँगा!"
					},
					"emotion": "angry"
				},
				{
					"action": "enter",
					"speaker": "eira",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "저건… 포효가 아니야. 도와달라는 절규야.",
						"english": "That's not... a roar. It's a cry for help.",
						"japanese": "あれは… 咆哮じゃない。助けを求める叫びだ。",
						"chinese": "那不是……咆哮。那是求救的尖叫。",
						"french": "Ce n'est pas... un rugissement. C'est un cri à l'aide.",
						"spanish": "Eso no es... un rugido. Es un grito de auxilio.",
						"vietnamese": "Đó không phải là... tiếng gầm. Đó là tiếng kêu cứu.",
						"thai": "นั่นไม่ใช่... เสียงคำราม แต่มันคือเสียงกรีดร้องขอความช่วยเหลือ",
						"hindi": "वह... दहाड़ नहीं है। वह मदद के लिए चीख है।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…하지만 싸울 수밖에 없어.",
						"english": "...But we have no choice but to fight.",
						"japanese": "…だが、戦うしかない。",
						"chinese": "……但我们别无选择，只能战斗。",
						"french": "...Mais nous n'avons pas d'autre choix que de nous battre.",
						"spanish": "...Pero no nos queda otra que luchar.",
						"vietnamese": "...Nhưng chúng ta không còn lựa chọn nào khác ngoài chiến đấu.",
						"thai": "...แต่เราไม่มีทางเลือกอื่นนอกจากต้องสู้",
						"hindi": "...परन्तु हमारे पास लड़ने के अलावा कोई चारा नहीं है।"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		}
	]
} as const;
