export const scenario_desert_aetherium_8_01 = {
	"scenario_id": "desert_aetherium_8_01",
	"order": 1,
	"act": "intro",
	"theme": "desert",
	"actors": {
		"amir": {
			"id": "mon_0096d602-52ab-4a9c-9cc8-4ff18ed3b655",
			"name": {
				"korean": "아미르",
				"english": "Amir",
				"japanese": "アミール",
				"chinese": "阿米尔",
				"french": "Amir",
				"spanish": "Amir",
				"vietnamese": "Amir",
				"thai": "อาเมียร์",
				"hindi": "अमीर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8cd60fb0-3699-44c4-6425-a3e97eec1800/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/b644dc95-9c27-442e-6dc6-73e5550a0200/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"길 잃은 칼날의 비명…",
			"사막은 과거를 삼키고, 영웅들은 흔적 없이 사라졌다.",
			"그러나 희미한 부름은 멈추지 않고, 새로운 칼날을 유혹한다.",
			"그 길의 끝엔, 무엇이 기다리고 있을까?"
		],
		"english": [
			"Scream of the Lost Blade...",
			"The desert swallowed the past, and heroes vanished without a trace.",
			"Yet a faint call never ceases, luring a new blade.",
			"At the end of that path, what awaits?"
		],
		"japanese": [
			"彷徨う刃の叫び…",
			"砂漠は過去を飲み込み、英雄たちは跡形もなく消え去った。",
			"しかし、微かな呼び声は止まず、新たな刃を誘惑する。",
			"その道の果てに、何が待っているのか？"
		],
		"chinese": [
			"迷失之刃的悲鸣…",
			"沙漠吞噬了过去，英雄们消失得无影无踪。",
			"然而，微弱的呼唤从未停止，诱惑着新的刀刃。",
			"那条路的尽头，等待着什么？"
		],
		"french": [
			"Le cri de la lame égarée...",
			"Le désert a englouti le passé, et les héros ont disparu sans laisser de trace.",
			"Pourtant, un appel lointain ne s'éteint jamais, attirant une nouvelle lame.",
			"Au bout de ce chemin, qu'est-ce qui attend ?"
		],
		"spanish": [
			"El grito de la hoja perdida...",
			"El desierto engulló el pasado, y los héroes desaparecieron sin dejar rastro.",
			"Sin embargo, un tenue llamado nunca cesa, atrayendo una nueva hoja.",
			"Al final de ese camino, ¿qué aguarda?"
		],
		"vietnamese": [
			"Tiếng thét của lưỡi kiếm lạc lối...",
			"Sa mạc nuốt chửng quá khứ, anh hùng biến mất không dấu vết.",
			"Tuy nhiên, tiếng gọi yếu ớt không ngừng, quyến rũ một lưỡi kiếm mới.",
			"Ở cuối con đường đó, điều gì đang chờ đợi?"
		],
		"thai": [
			"เสียงกรีดร้องของคมดาบที่สาบสูญ...",
			"ทะเลทรายกลืนกินอดีต และเหล่าวีรบุรุษก็หายสาบสูญไปไร้ร่องรอย",
			"ทว่า เสียงเพรียกอันแผ่วเบาก็ไม่เคยหยุดลง มันยังคงล่อลวงคมดาบใหม่",
			"ณ ปลายทางนั้น มีอะไรรออยู่?"
		],
		"hindi": [
			"गुमशुदा तलवार की चीख...",
			"रेगिस्तान ने अतीत को निगल लिया, और नायक बिना किसी निशान के गायब हो गए।",
			"फिर भी, एक हल्की पुकार कभी नहीं रुकती, एक नई तलवार को लुभाती है।",
			"उस रास्ते के अंत में, क्या इंतजार कर रहा है?"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "황량한 사막. 모래 바람이 모든 것을 지웠다.",
						"english": "Desolate desert. Sandstorms erased everything.",
						"japanese": "荒涼たる砂漠。砂嵐が全てを消し去った。",
						"chinese": "荒凉的沙漠。沙尘暴抹去了一切。",
						"french": "Désert désolé. Les tempêtes de sable ont tout effacé.",
						"spanish": "Desierto desolado. Las tormentas de arena borraron todo.",
						"vietnamese": "Sa mạc hoang vắng. Bão cát đã xóa sạch mọi thứ.",
						"thai": "ทะเลทรายอันเวิ้งว้าง พายุทรายพัดกลืนกินทุกสิ่ง",
						"hindi": "वीरान रेगिस्तान। रेत के तूफानों ने सब कुछ मिटा दिया।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "…희미한 칼날 소리가 들려.",
						"english": "...I hear a faint sound of blades.",
						"japanese": "…微かな刃の音が聞こえる。",
						"chinese": "……我听到微弱的刀刃声。",
						"french": "...J'entends un faible son de lames.",
						"spanish": "...Escucho un tenue sonido de hojas.",
						"vietnamese": "...Tôi nghe thấy tiếng lưỡi kiếm yếu ớt.",
						"thai": "...ได้ยินเสียงคมดาบแผ่วเบา...",
						"hindi": "...मुझे तलवारों की हल्की सी आवाज़ सुनाई दे रही है।"
					}
				},
				{
					"spot": [
						5,
						3
					],
					"speaker": "amir",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "왔구나. 기다리고 있었다.",
						"english": "You've come. I've been waiting.",
						"japanese": "来たか。待っていたぞ。",
						"chinese": "你来了。我一直在等你。",
						"french": "Tu es venu. Je t'attendais.",
						"spanish": "Has llegado. Te estaba esperando.",
						"vietnamese": "Ngươi đã đến rồi. Ta đã chờ đợi.",
						"thai": "เจ้ามาแล้ว ข้าเฝ้ารออยู่",
						"hindi": "तुम आ गए। मैं इंतज़ार कर रहा था।"
					},
					"emotion": "base",
					"speaker": "amir",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "당신은…?",
						"english": "And you are...?",
						"japanese": "あなたは…？",
						"chinese": "你是……？",
						"french": "Et vous êtes... ?",
						"spanish": "¿Y usted es...?",
						"vietnamese": "Ngươi là...?",
						"thai": "ท่านคือ...?",
						"hindi": "और आप कौन हैं...?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아미르. 이 사막의 선지자. 네가 찾고 있는 진실을 아는 자.",
						"english": "Amir. The prophet of this desert. One who knows the truth you seek.",
						"japanese": "アミール。この砂漠の預言者。お前が探す真実を知る者だ。",
						"chinese": "阿米尔。这片沙漠的先知。知晓你所寻求的真相之人。",
						"french": "Amir. Le prophète de ce désert. Celui qui connaît la vérité que tu cherches.",
						"spanish": "Amir. El profeta de este desierto. Quien conoce la verdad que buscas.",
						"vietnamese": "Amir. Tiên tri của sa mạc này. Người biết sự thật mà ngươi đang tìm kiếm.",
						"thai": "อามีร์ ผู้เผยพระวจนะแห่งทะเลทรายนี้ ผู้ที่รู้ความจริงที่เจ้ากำลังตามหา",
						"hindi": "अमीर। इस रेगिस्तान का पैगंबर। वह जो तुम जिस सच्चाई की तलाश में हो, उसे जानता है।"
					},
					"emotion": "base",
					"speaker": "amir"
				},
				{
					"type": "speech",
					"content": {
						"korean": "사막에 잠든 영혼들이 너를 부르고 있어.",
						"english": "The souls slumbering in the desert are calling to you.",
						"japanese": "砂漠に眠る魂がお前を呼んでいる。",
						"chinese": "沉睡在沙漠中的灵魂正在呼唤你。",
						"french": "Les âmes endormies dans le désert t'appellent.",
						"spanish": "Las almas que duermen en el desierto te están llamando.",
						"vietnamese": "Những linh hồn đang ngủ yên trong sa mạc đang gọi ngươi.",
						"thai": "วิญญาณที่หลับใหลในทะเลทรายกำลังเรียกหาเจ้า",
						"hindi": "रेगिस्तान में सोई हुई आत्माएं तुम्हें बुला रही हैं।"
					},
					"emotion": "base",
					"speaker": "amir"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						4,
						3
					],
					"speaker": "amir",
					"duration_ms": 550,
					"action": "enter"
				},
				{
					"speaker": "amir",
					"emotion": "base",
					"content": {
						"korean": "오래 전, 강한 블레이드마스터들이 이곳에 왔다.",
						"english": "Long ago, powerful Blademasters came here.",
						"japanese": "遠い昔、強きブレードマスターたちがここへ来た。",
						"chinese": "很久以前，强大的剑术大师们曾到访此地。",
						"french": "Il y a longtemps, de puissants Maîtres-Lames sont venus ici.",
						"spanish": "Hace mucho tiempo, poderosos Maestros de la Espada vinieron aquí.",
						"vietnamese": "Từ rất lâu, những Kiếm Sư mạnh mẽ đã đến đây.",
						"thai": "นานมาแล้ว เหล่าปรมาจารย์ดาบผู้แข็งแกร่งได้มาเยือนที่นี่",
						"hindi": "बहुत समय पहले, शक्तिशाली ब्लेडमास्टर्स यहाँ आए थे。"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그들은 사막의 환영에 홀려 사라졌다.",
						"english": "They were lured by desert mirages and vanished.",
						"japanese": "彼らは砂漠の幻影に惑わされ、姿を消した。",
						"chinese": "他们被沙漠的幻象所迷惑，最终消失了。",
						"french": "Ils furent attirés par les mirages du désert et disparurent.",
						"spanish": "Fueron seducidos por los espejismos del desierto y desaparecieron.",
						"vietnamese": "Họ bị ảo ảnh sa mạc mê hoặc và biến mất.",
						"thai": "พวกเขาถูกล่อลวงด้วยภาพลวงตาแห่งทะเลทรายแล้วหายสาบสูญไป",
						"hindi": "वे रेगिस्तान के भ्रम में फंसकर गायब हो गए।"
					},
					"emotion": "sad",
					"speaker": "amir"
				},
				{
					"content": {
						"korean": "환영?",
						"english": "Mirages?",
						"japanese": "幻影？",
						"chinese": "幻象？",
						"french": "Mirages ?",
						"spanish": "¿Espejismos?",
						"vietnamese": "Ảo ảnh ư?",
						"thai": "ภาพลวงตา?",
						"hindi": "भ्रम?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "amir",
					"emotion": "base",
					"content": {
						"korean": "모래는 단순한 모래가 아니다. 그들의 의지는… 살아있다.",
						"english": "The sand is not mere sand. Their will… lives on.",
						"japanese": "砂はただの砂ではない。彼らの意思が…生きている。",
						"chinese": "沙并非普通的沙。他们的意志…依然存在。",
						"french": "Le sable n'est pas que du sable. Leur volonté… perdure.",
						"spanish": "La arena no es solo arena. Su voluntad… perdura.",
						"vietnamese": "Cát không chỉ là cát. Ý chí của họ… vẫn còn sống.",
						"thai": "ทรายไม่ใช่แค่ทราย เจตจำนงของพวกเขา… ยังคงมีชีวิตอยู่",
						"hindi": "रेत सिर्फ रेत नहीं है। उनकी इच्छा… जीवित है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "밤이 되면 모래바람이 흐느끼듯 울었다. 마치 무언가를 기억하는 것처럼.",
						"english": "At night, the sandstorms wept like sobs. As if remembering something.",
						"japanese": "夜になると、砂嵐はすすり泣くように鳴いた。まるで何かを記憶しているかのように。",
						"chinese": "夜幕降临，沙尘暴哭泣般呜咽。仿佛在回忆着什么。",
						"french": "La nuit tombée, les tempêtes de sable sanglotaient. Comme si elles se souvenaient de quelque chose.",
						"spanish": "Por la noche, las tormentas de arena gemían como sollozos. Como si recordaran algo.",
						"vietnamese": "Khi đêm xuống, bão cát gào thét như tiếng nức nở. Như thể đang nhớ về điều gì đó.",
						"thai": "เมื่อยามค่ำคืน พายุทรายร้องไห้คร่ำครวญราวกับกำลังจดจำบางสิ่ง",
						"hindi": "रात में, रेतीले तूफान सिसकते हुए रोते थे। मानो कुछ याद कर रहे हों।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "그들의 슬픔이 느껴져.",
						"english": "I feel their sorrow.",
						"japanese": "彼らの悲しみが感じられる。",
						"chinese": "我感受到了他们的悲伤。",
						"french": "Je ressens leur tristesse.",
						"spanish": "Siento su pena.",
						"vietnamese": "Tôi cảm nhận được nỗi buồn của họ.",
						"thai": "ฉันรู้สึกถึงความเศร้าของพวกเขา",
						"hindi": "मैं उनका दुख महसूस कर सकता हूँ।"
					},
					"speaker": "character_1",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 450,
					"action": "enter",
					"spot": [
						3,
						3
					],
					"speaker": "amir",
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "사막은 모든 생명의 흔적을 흡수한다. 특히 강한 영혼은… 영원히 고통받지.",
						"english": "The desert absorbs all traces of life. Especially strong souls… suffer eternally.",
						"japanese": "砂漠はあらゆる生命の痕跡を吸い込む。特に強き魂は…永遠に苦しむ。",
						"chinese": "沙漠吞噬着所有生命的痕迹。尤其是强大的灵魂…将永远受苦。",
						"french": "Le désert absorbe toutes les traces de vie. Surtout les âmes puissantes… souffrent éternellement.",
						"spanish": "El desierto absorbe todo rastro de vida. Especialmente las almas fuertes… sufren eternamente.",
						"vietnamese": "Sa mạc hút cạn mọi dấu vết của sự sống. Đặc biệt là những linh hồn mạnh mẽ… sẽ mãi mãi chịu đựng khổ đau.",
						"thai": "ทะเลทรายดูดกลืนทุกร่องรอยแห่งชีวิต โดยเฉพาะวิญญาณที่แข็งแกร่ง… จะทนทุกข์ทรมานชั่วนิรันดร์",
						"hindi": "रेगिस्तान जीवन के सभी निशानों को सोख लेता है। खासकर मजबूत आत्माएं… हमेशा के लिए पीड़ित रहती हैं।"
					},
					"emotion": "sad",
					"speaker": "amir"
				},
				{
					"content": {
						"korean": "영원히? 해방할 방법은 없어?",
						"english": "Eternally? Is there no way to free them?",
						"japanese": "永遠に？解放する方法はないのか？",
						"chinese": "永远？没有解脱的方法吗？",
						"french": "Éternellement ? N'y a-t-il aucun moyen de les libérer ?",
						"spanish": "¿Eternamente? ¿No hay forma de liberarlos?",
						"vietnamese": "Mãi mãi ư? Không có cách nào để giải thoát họ sao?",
						"thai": "ชั่วนิรันดร์งั้นหรือ? ไม่มีทางปลดปล่อยพวกเขาหรือ?",
						"hindi": "हमेशा के लिए? क्या उन्हें आज़ाด करने का कोई तरीका नहीं है?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "amir",
					"content": {
						"korean": "그 방법을 찾으려던 자들도 결국 환영에 붙잡혔지.",
						"english": "Those who sought that way were also caught by the mirages.",
						"japanese": "その方法を探そうとした者たちも、結局幻影に囚われた。",
						"chinese": "那些试图寻找方法的人，最终也被幻象所困。",
						"french": "Ceux qui cherchaient ce moyen furent aussi capturés par les mirages.",
						"spanish": "Aquellos que buscaron esa manera también fueron atrapados por los espejismos.",
						"vietnamese": "Những người tìm cách đó cuối cùng cũng bị ảo ảnh bắt giữ.",
						"thai": "แม้แต่ผู้ที่พยายามหาวิธีนั้นก็ถูกภาพลวงตาจับกุมไว้ในที่สุด",
						"hindi": "जो उस रास्ते की तलाश में थे, वे भी भ्रम में फंस गए।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "하지만 너의 칼날은… 무언가 다르군.",
						"english": "But your blade… is somehow different.",
						"japanese": "だが、お前の刃は…何か違うな。",
						"chinese": "但你的刀刃…有些不同寻常。",
						"french": "Mais ta lame… est quelque peu différente.",
						"spanish": "Pero tu hoja… es de alguna manera diferente.",
						"vietnamese": "Nhưng lưỡi kiếm của ngươi… có gì đó khác biệt.",
						"thai": "แต่คมดาบของเจ้า… ช่างแตกต่างออกไป",
						"hindi": "लेकिन तुम्हारी तलवार… कुछ अलग है।"
					},
					"speaker": "amir",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_2",
					"emotion": "angry",
					"content": {
						"korean": "이 고통을 끝내겠어.",
						"english": "I'll end this suffering.",
						"japanese": "この苦痛を終わらせる。",
						"chinese": "我要结束这痛苦。",
						"french": "Je vais mettre fin à cette souffrance.",
						"spanish": "Terminaré con este sufrimiento.",
						"vietnamese": "Ta sẽ chấm dứt nỗi đau này.",
						"thai": "ข้าจะยุติความทรมานนี้",
						"hindi": "मैं इस पीड़ा को समाप्त करूँगा।"
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "amir",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "amir",
					"content": {
						"korean": "더 깊이 들어가면, 돌아올 수 없을지도 모른다.",
						"english": "Venture deeper, and there may be no return.",
						"japanese": "さらに深く進めば、戻れないかもしれない。",
						"chinese": "若深入其中，你可能无法回头。",
						"french": "Si tu vas plus loin, tu pourrais ne jamais revenir.",
						"spanish": "Si te adentras más, quizás no puedas regresar.",
						"vietnamese": "Đi sâu hơn nữa, có lẽ ngươi sẽ không thể quay lại.",
						"thai": "หากเข้าไปลึกกว่านี้ อาจจะกลับไม่ได้",
						"hindi": "और गहरा जाओगे तो शायद वापस न आ पाओ।"
					}
				},
				{
					"speaker": "amir",
					"emotion": "base",
					"content": {
						"korean": "사막의 환영은 너의 가장 깊은 욕망을 비출 것이다.",
						"english": "Desert illusions will mirror your deepest desires.",
						"japanese": "砂漠の幻影は、お前の最も深い欲望を映し出すだろう。",
						"chinese": "沙漠的幻象将映照出你最深层的欲望。",
						"french": "Les mirages du désert refléteront tes désirs les plus profonds.",
						"spanish": "Los espejismos del desierto reflejarán tus deseos más profundos.",
						"vietnamese": "Ảo ảnh sa mạc sẽ phản chiếu những ham muốn sâu thẳm nhất của ngươi.",
						"thai": "ภาพลวงตาแห่งทะเลทรายจะสะท้อนความปรารถนาที่ลึกที่สุดของเจ้า",
						"hindi": "रेगिस्तान का मृगतृष्णा तुम्हारी सबसे गहरी इच्छाओं को दर्शाएगी।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "난 흔들리지 않아.",
						"english": "I will not waver.",
						"japanese": "私は揺るがない。",
						"chinese": "我不会动摇。",
						"french": "Je ne vacillerai pas.",
						"spanish": "No me inmutaré.",
						"vietnamese": "Ta sẽ không nao núng.",
						"thai": "ข้าไม่หวั่นไหว",
						"hindi": "मैं अडिग रहूँगा।"
					}
				},
				{
					"content": {
						"korean": "…블레이드마스터들의 칼날 소리가 더 크게 울리는군.",
						"english": "...The clang of Blademasters' blades echoes louder.",
						"japanese": "…ブレードマスターたちの刀の音が、さらに大きく響く。",
						"chinese": "……剑刃大师们的刀刃声愈发响亮了。",
						"french": "...Le cliquetis des lames des Maîtres-Lames résonne plus fort.",
						"spanish": "...El sonido de las hojas de los Maestros de la Espada resuena con más fuerza.",
						"vietnamese": "...Tiếng kiếm của các Kiếm Sư lại vang vọng lớn hơn.",
						"thai": "...เสียงคมดาบของเหล่าปรมาจารย์ดาบดังกังวานยิ่งขึ้น",
						"hindi": "...ब्लेडमास्टर्स की तलवारों की आवाज और तेज गूँज रही है।"
					},
					"emotion": "base",
					"speaker": "amir",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "주인공은 발걸음을 멈추지 않았다. 비극의 그림자가 드리웠다.",
						"english": "The hero pressed on. A tragic shadow fell.",
						"japanese": "主人公は歩みを止めなかった。悲劇の影が迫っていた。",
						"chinese": "主角没有停下脚步。悲剧的阴影笼罩而来。",
						"french": "Le protagoniste ne s'arrêta pas. L'ombre de la tragédie s'étendait.",
						"spanish": "El protagonista no detuvo su paso. La sombra de la tragedia se cernía.",
						"vietnamese": "Nhân vật chính không dừng bước. Bóng tối bi kịch bao trùm.",
						"thai": "ตัวเอกไม่หยุดยั้ง เงาแห่งโศกนาฏกรรมทอดยาว",
						"hindi": "नायक ने अपने कदम नहीं रोके। त्रासदी की छाया मंडरा रही थी।"
					}
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 모래폭풍이 형체를 이루었다. 정체 모를 자가 나타났다.",
						"english": "A massive sandstorm formed. An unknown figure emerged.",
						"japanese": "巨大な砂嵐が形を成した。正体不明の者が現れた。",
						"chinese": "巨大的沙尘暴形成了形体。一个不明身份者出现了。",
						"french": "Une gigantesque tempête de sable prit forme. Un être inconnu apparut.",
						"spanish": "Una gigantesca tormenta de arena tomó forma. Alguien de identidad desconocida apareció.",
						"vietnamese": "Một cơn bão cát khổng lồ hình thành. Một kẻ vô danh xuất hiện.",
						"thai": "พายุทรายขนาดมหึมาก่อตัวขึ้น ผู้ไม่ทราบชื่อปรากฏกาย",
						"hindi": "एक विशाल रेत का तूफान बन गया। एक अज्ञात व्यक्ति प्रकट हुआ।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "…새로운 칼날이군. 탐욕스러운 인간이여.",
						"english": "...A new challenger. Greedy human.",
						"japanese": "…新たな刃か。貪欲な人間よ。",
						"chinese": "……一把新刀。贪婪的人类啊。",
						"french": "...Une nouvelle lame. Humain avide.",
						"spanish": "...Una nueva hoja. Humano codicioso.",
						"vietnamese": "...Một lưỡi kiếm mới. Hỡi con người tham lam.",
						"thai": "...ดาบเล่มใหม่สินะ มนุษย์ผู้โลภมากเอ๋ย",
						"hindi": "...एक नई तलवार। हे लालची इंसान।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "너의 영혼도 이 사막의 일부가 될 것이다.",
						"english": "Your soul shall become part of this desert.",
						"japanese": "お前の魂もこの砂漠の一部となるだろう。",
						"chinese": "你的灵魂也将成为这沙漠的一部分。",
						"french": "Ton âme fera aussi partie de ce désert.",
						"spanish": "Tu alma también será parte de este desierto.",
						"vietnamese": "Linh hồn ngươi cũng sẽ trở thành một phần của sa mạc này.",
						"thai": "วิญญาณของเจ้าก็จะกลายเป็นส่วนหนึ่งของทะเลทรายนี้ด้วย",
						"hindi": "तुम्हारी आत्मा भी इस रेगिस्तान का हिस्सा बन जाएगी।"
					}
				},
				{
					"content": {
						"korean": "허튼 소리! 너희들의 고통을 끝내러 왔다.",
						"english": "Foolish talk! I'm here to end your pain.",
						"japanese": "戯言を！ お前たちの苦痛を終わらせに来たのだ。",
						"chinese": "胡说八道！我来是为了终结你们的痛苦。",
						"french": "Absurdités ! Je suis venu mettre fin à vos souffrances.",
						"spanish": "¡Tonterías! He venido a acabar con vuestro sufrimiento.",
						"vietnamese": "Vô nghĩa! Ta đến để chấm dứt nỗi đau khổ của các ngươi.",
						"thai": "เหลวไหล! ข้ามาเพื่อยุติความทรมานของพวกเจ้า",
						"hindi": "बकवास! मैं तुम्हारे दर्द को खत्म करने आया हूँ।"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "건방지군.",
						"english": "Insolent.",
						"japanese": "生意気な。",
						"chinese": "狂妄。",
						"french": "Impertinent.",
						"spanish": "Insolente.",
						"vietnamese": "Ngông cuồng.",
						"thai": "อวดดีนัก",
						"hindi": "गुस्ताख।"
					}
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "크윽… 겨우 이 정도라니…",
						"english": "Ugh... Is that all you've got...?",
						"japanese": "くっ…これだけか…",
						"chinese": "呃… 仅此而已吗…",
						"french": "Ugh... C'est tout ce que tu as...?",
						"spanish": "Ugh... ¿Eso es todo lo que tienes...?",
						"vietnamese": "Khặc... Chỉ có vậy thôi sao...",
						"thai": "อึก... แค่นี้เองรึ...",
						"hindi": "उफ़... बस इतना ही...?"
					},
					"speaker": "random_boss",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "하지만 기억해라. {random_boss}는 끝이 아니다. 이 사막의 의지는… 영원하다.",
						"english": "But remember. {random_boss} is not the end. The will of this desert... is eternal.",
						"japanese": "だが、覚えておけ。{random_boss}は終わりではない。この砂漠の意志は…永遠だ。",
						"chinese": "但请记住。{random_boss}并非终点。这片沙漠的意志…永恒不灭。",
						"french": "Mais souviens-toi. {random_boss} n'est pas la fin. La volonté de ce désert... est éternelle.",
						"spanish": "Pero recuerda. {random_boss} no es el final. La voluntad de este desierto... es eterna.",
						"vietnamese": "Nhưng hãy nhớ. {random_boss} không phải là kết thúc. Ý chí của sa mạc này... là vĩnh cửu.",
						"thai": "แต่จำไว้ให้ดี {random_boss} ไม่ใช่จุดจบ เจตจำนงของทะเลทรายนี้... ชั่วนิรันดร์",
						"hindi": "लेकिन याद रखना। {random_boss} अंत नहीं है। इस रेगिस्तान की इच्छा... शाश्वत है।"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "영원히 고통받는 건 너희다.",
						"english": "You are the ones doomed to eternal suffering.",
						"japanese": "永遠に苦しむのは貴様らだ。",
						"chinese": "永受折磨的将是你们。",
						"french": "C'est vous qui souffrirez éternellement.",
						"spanish": "Sois vosotros quienes sufriréis eternamente.",
						"vietnamese": "Các ngươi mới là kẻ phải chịu khổ đau vĩnh viễn.",
						"thai": "พวกเจ้าต่างหากที่จะต้องทนทุกข์ทรมานชั่วนิรันดร์",
						"hindi": "शाश्वत पीड़ा भोगने वाले तुम ही हो।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "쓰러진 정체 모를 자의 그림자가 사라졌다. 사막의 부름은 더욱 선명해졌다.",
						"english": "The shadow of the fallen, unknown figure vanished. The desert's call grew clearer.",
						"japanese": "倒れた正体不明の影が消え去った。砂漠の呼び声はさらに鮮明になった。",
						"chinese": "倒下的无名之影消失了。沙漠的召唤变得更加清晰。",
						"french": "L'ombre de la figure inconnue et tombée disparut. L'appel du désert devint plus clair.",
						"spanish": "La sombra de la figura desconocida y caída desapareció. La llamada del desierto se hizo más clara.",
						"vietnamese": "Bóng hình kẻ vô danh ngã xuống đã biến mất. Lời kêu gọi của sa mạc càng trở nên rõ ràng hơn.",
						"thai": "เงาของร่างนิรนามที่ล้มลงได้หายไป เสียงเรียกของทะเลทรายชัดเจนยิ่งขึ้น",
						"hindi": "गिरे हुए, अज्ञात आकृति की छाया गायब हो गई। रेगिस्तान का बुलावा और स्पष्ट हो गया।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "amir",
					"spot": [
						4,
						3
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "amir",
					"content": {
						"korean": "이겼구나. 하지만 이건 시작일 뿐.",
						"english": "You've won. But this is just the beginning.",
						"japanese": "勝ったようだな。だが、これは始まりに過ぎない。",
						"chinese": "你赢了。但这仅仅是个开始。",
						"french": "Tu as gagné. Mais ce n'est que le début.",
						"spanish": "Has ganado. Pero esto es solo el principio.",
						"vietnamese": "Ngươi đã thắng. Nhưng đây chỉ là khởi đầu.",
						"thai": "เจ้าชนะแล้ว แต่นี่เป็นเพียงจุดเริ่มต้นเท่านั้น",
						"hindi": "तुम जीत गए। लेकिन यह तो बस शुरुआत है।"
					}
				},
				{
					"content": {
						"korean": "더 큰 그림자가 사막 깊은 곳에 숨어 있다.",
						"english": "A greater shadow lurks deep within the desert.",
						"japanese": "より大きな影が砂漠の奥深くに潜んでいる。",
						"chinese": "一个更强大的影子潜伏在沙漠深处。",
						"french": "Une ombre plus grande se cache au plus profond du désert.",
						"spanish": "Una sombra mayor acecha en lo profundo del desierto.",
						"vietnamese": "Một bóng tối lớn hơn đang ẩn mình sâu trong lòng sa mạc.",
						"thai": "เงามืดที่ใหญ่กว่าซ่อนตัวอยู่ในส่วนลึกของทะเลทราย",
						"hindi": "एक बड़ी छाया रेगिस्तान की गहराई में छिपी है।"
					},
					"emotion": "base",
					"speaker": "amir",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "훗… 어리석은 칼날이여.",
						"english": "Hmph... Foolish blade.",
						"japanese": "ふっ…愚かな刃よ。",
						"chinese": "哼… 愚蠢的刀刃。",
						"french": "Hmph... Lame insensée.",
						"spanish": "Hmph... Cuchilla necia.",
						"vietnamese": "Hừm... Lưỡi dao ngu xuẩn.",
						"thai": "ฮึ่ม... คมดาบโง่เขลาเอ๋ย",
						"hindi": "हुंह... मूर्ख तलवार।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "너도 결국 이 사막의 일부가 될 운명.",
						"english": "You too are destined to become a part of this desert.",
						"japanese": "貴様も結局、この砂漠の一部となる運命だ。",
						"chinese": "你最终也将成为这片沙漠的一部分。",
						"french": "Toi aussi, tu es destiné à devenir une partie de ce désert.",
						"spanish": "Tú también estás destinado a ser parte de este desierto.",
						"vietnamese": "Ngươi cuối cùng cũng sẽ trở thành một phần của sa mạc này.",
						"thai": "เจ้าเองก็จะกลายเป็นส่วนหนึ่งของทะเลทรายนี้ในที่สุด",
						"hindi": "तुम भी अंततः इस रेगिस्तान का हिस्सा बनने के लिए नियत हो।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "…아직 끝나지 않았어!",
						"english": "...It's not over yet!",
						"japanese": "…まだ終わっていない！",
						"chinese": "…还没结束！",
						"french": "...Ce n'est pas encore fini !",
						"spanish": "...¡Todavía no ha terminado!",
						"vietnamese": "...Chưa kết thúc đâu!",
						"thai": "...ยังไม่จบ!",
						"hindi": "...अभी खत्म नहीं हुआ है!"
					}
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "주인공의 정신이 흩어졌다. 하지만 의지는 꺾이지 않았다.",
						"english": "The protagonist's mind faltered, but their will remained unbroken.",
						"japanese": "主人公の精神は乱れた。しかし、その意思は砕かれなかった。",
						"chinese": "主角的精神涣散了。但意志并未被击垮。",
						"french": "L'esprit du protagoniste vacillait, mais sa volonté demeurait intacte.",
						"spanish": "La mente del protagonista flaqueó, pero su voluntad permaneció inquebrantable.",
						"vietnamese": "Tinh thần của nhân vật chính lung lay, nhưng ý chí của họ vẫn kiên cường.",
						"thai": "จิตใจของตัวเอกสั่นคลอน แต่เจตจำนงของพวกเขาไม่เคยหักหาย",
						"hindi": "नायक का मन विचलित हो गया, लेकिन उसकी इच्छाशक्ति अक्षुण्ณ रही।"
					},
					"type": "speech"
				}
			]
		}
	]
} as const;
