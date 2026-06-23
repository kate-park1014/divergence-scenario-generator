export const scenario_modern_alonzo_11_02 = {
	"scenario_id": "modern_alonzo_11_02",
	"order": 2,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"dax": {
			"id": "mon_08d5b43e-f9ab-4469-9064-855e170b0cdc",
			"name": {
				"korean": "닥스",
				"english": "Dax",
				"japanese": "ダックス",
				"chinese": "达克斯",
				"french": "Dax",
				"spanish": "Dax",
				"vietnamese": "Dax",
				"thai": "แด็กซ์",
				"hindi": "डैक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/84bb11db-6eb4-4500-d274-222e8b100100/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5d325a75-bd91-4758-7b3f-ad9a97e52700/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"도시는 침묵했다. 아니, 침묵당했다.",
			"알론조의 손이 모든 시스템을 마비시켰다.",
			"데이터는 숨통을 조여왔고, 시간은 빠르게 줄어들었다.",
			"누군가 속삭였다. '그는 죽었지만… 여전히 살아있다.'"
		],
		"english": [
			"The city fell silent. No, it was silenced.",
			"Alonzo's hand paralyzed every system.",
			"Data strangled, time rapidly dwindled.",
			"Someone whispered, \"He's dead, but... still alive.\""
		],
		"japanese": [
			"都市は沈黙した。いや、沈黙させられたのだ。",
			"アロンゾの手が、すべてのシステムを麻痺させた。",
			"データは息の根を締め付け、時間は急速に dwindling した。",
			"誰かが囁いた。「彼は死んだが…まだ生きている。」"
		],
		"chinese": [
			"城市寂静了。不，是被寂静了。",
			"阿隆佐的手使所有系统瘫痪了。",
			"数据扼杀了生机，时间迅速流逝。",
			"有人低语道：“他死了，但……依然活着。”"
		],
		"french": [
			"La ville s'est tue. Non, elle a été réduite au silence.",
			"La main d'Alonzo a paralysé tous les systèmes.",
			"Les données étouffaient, le temps s'amenuisait rapidement.",
			"Quelqu'un a murmuré : « Il est mort, mais… toujours vivant. »"
		],
		"spanish": [
			"La ciudad enmudeció. No, fue silenciada.",
			"La mano de Alonzo paralizó todos los sistemas.",
			"Los datos asfixiaban, el tiempo se agotaba rápidamente.",
			"Alguien susurró: \"Está muerto, pero... sigue vivo.\""
		],
		"vietnamese": [
			"Thành phố chìm trong im lặng. Không, nó đã bị buộc phải im lặng.",
			"Bàn tay của Alonzo đã làm tê liệt mọi hệ thống.",
			"Dữ liệu bóp nghẹt, thời gian nhanh chóng cạn kiệt.",
			"Ai đó thì thầm, \"Anh ta chết rồi, nhưng... vẫn còn sống.\""
		],
		"thai": [
			"เมืองเงียบงัน ไม่สิ มันถูกทำให้เงียบงัน",
			"มือของอลอนโซทำให้ทุกระบบเป็นอัมพาต",
			"ข้อมูลบีบรัด เวลาลดน้อยลงอย่างรวดเร็ว",
			"มีใครบางคนกระซิบว่า \"เขาตายแล้ว... แต่ก็ยังมีชีวิตอยู่\""
		],
		"hindi": [
			"शहर खामोश हो गया। नहीं, उसे खामोश कर दिया गया था।",
			"अलोंजो के हाथों ने हर सिस्टम को पंगु बना दिया।",
			"डेटा ने दम घोंट दिया, समय तेज़ी से कम होता गया।",
			"किसी ने फुसफुसाया, \"वह मर चुका है, लेकिन... फिर भी ज़िंदा है।\""
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "도시의 심장이 멈춰가는 소리. 고요했지만, 끔찍했다.",
						"english": "The sound of the city's heart stopping. Silent, yet dreadful.",
						"japanese": "都市の心臓が止まる音。静かだったが、恐ろしかった。",
						"chinese": "城市心脏停止跳动的声音。寂静，却又恐怖。",
						"french": "Le son du cœur de la ville qui s'arrête. Silencieux, mais terrible.",
						"spanish": "El sonido del corazón de la ciudad deteniéndose. Silencioso, pero terrible.",
						"vietnamese": "Âm thanh tim thành phố ngừng đập. Im lặng, nhưng khủng khiếp.",
						"thai": "เสียงหัวใจของเมืองหยุดเต้น เงียบงัน แต่น่ากลัว",
						"hindi": "शहर के दिल के रुकने की आवाज़। खामोश, फिर भी भयानक।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "시스템이… 다 멈췄어.",
						"english": "The systems... they all stopped.",
						"japanese": "システムが…全部止まった。",
						"chinese": "系统……都停了。",
						"french": "Les systèmes… tout est arrêté.",
						"spanish": "Los sistemas... todo se detuvo.",
						"vietnamese": "Các hệ thống... đều dừng lại rồi.",
						"thai": "ระบบ... หยุดทำงานหมดแล้ว",
						"hindi": "सिस्टम... सब रुक गए हैं।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"action": "enter",
					"spot": [
						4,
						2
					],
					"speaker": "dax",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "알론조가… 시작한 일이야.",
						"english": "Alonzo... this is his doing.",
						"japanese": "アロンゾが…始めたことだ。",
						"chinese": "阿隆佐……是他做的。",
						"french": "Alonzo… c'est lui qui a commencé.",
						"spanish": "Alonzo... esto es obra suya.",
						"vietnamese": "Alonzo... là việc anh ta bắt đầu.",
						"thai": "อลอนโซ... เป็นคนเริ่มเรื่องนี้",
						"hindi": "अलोंजो ने... ये शुरू किया है।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "누구지?",
						"english": "Who is it?",
						"japanese": "誰だ？",
						"chinese": "是谁？",
						"french": "Qui est-ce ?",
						"spanish": "¿Quién es?",
						"vietnamese": "Ai vậy?",
						"thai": "ใคร?",
						"hindi": "कौन है?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "dax",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "옛 동료였어. 그리고… 내 배신자.",
						"english": "An old colleague. And... my betrayer.",
						"japanese": "元同僚だった。そして…私の裏切り者。",
						"chinese": "是个老同事。而且……是我的背叛者。",
						"french": "Un ancien collègue. Et… mon traître.",
						"spanish": "Un viejo colega. Y... mi traidor.",
						"vietnamese": "Một đồng nghiệp cũ. Và... kẻ phản bội của tôi.",
						"thai": "อดีตเพื่อนร่วมงาน และ... ผู้ทรยศของฉัน",
						"hindi": "एक पुराना सहयोगी। और... मेरा विश्वासघाती।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "dax",
					"spot": [
						2,
						3
					],
					"action": "enter"
				},
				{
					"speaker": "dax",
					"type": "speech",
					"content": {
						"korean": "그는 모든 걸 볼 수 있어. 죽었지만… 모든 데이터에 남아있지.",
						"english": "He can see everything. Dead, yet... remains in all data.",
						"japanese": "彼はすべてを見ることができる。死んだが…すべてのデータに残っている。",
						"chinese": "他能看到一切。死了，但……依然存在于所有数据中。",
						"french": "Il peut tout voir. Mort, mais… il reste dans toutes les données.",
						"spanish": "Él puede verlo todo. Muerto, pero... permanece en todos los datos.",
						"vietnamese": "Anh ta có thể nhìn thấy mọi thứ. Đã chết, nhưng... vẫn còn trong mọi dữ liệu.",
						"thai": "เขามองเห็นทุกสิ่ง แม้ตายไปแล้ว... แต่ยังคงอยู่ในข้อมูลทั้งหมด",
						"hindi": "वह सब कुछ देख सकता है। मर चुका है, फिर भी... सभी डेटा में मौजूद है।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "말도 안 돼!",
						"english": "No way!",
						"japanese": "信じられない！",
						"chinese": "不可能！",
						"french": "Incroyable !",
						"spanish": "¡Imposible!",
						"vietnamese": "Không thể nào!",
						"thai": "เป็นไปไม่ได้!",
						"hindi": "यह असंभव है!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"emotion": "sad",
					"content": {
						"korean": "그를 막아야 해. 이건… 내 죄도 같아.",
						"english": "I have to stop him. This is... also my sin.",
						"japanese": "彼を止めなければ。これは… 私の罪でもある。",
						"chinese": "我必须阻止他。这… 也像是我的罪过。",
						"french": "Il faut l'arrêter. C'est aussi... un peu ma faute.",
						"spanish": "Debo detenerlo. Esto es... también mi culpa.",
						"vietnamese": "Tôi phải ngăn anh ta lại. Đây cũng... là tội lỗi của tôi.",
						"thai": "ฉันต้องหยุดเขา นี่ก็… เหมือนเป็นความผิดของฉันด้วย",
						"hindi": "मुझे उसे रोकना होगा। यह… मेरा भी पाप है।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "dax"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "도시의 디지털 전광판이 일순간 섬광처럼 번뜩였다.",
						"english": "The city's digital billboards flashed like lightning for a moment.",
						"japanese": "街のデジタル電光掲示板が一瞬、閃光のようにきらめいた。",
						"chinese": "城市的数字广告牌瞬间像闪光一样亮了一下。",
						"french": "Les panneaux d'affichage numériques de la ville ont clignoté comme un éclair.",
						"spanish": "Las vallas publicitarias digitales de la ciudad parpadearon como un relámpago por un instante.",
						"vietnamese": "Màn hình kỹ thuật số của thành phố lóe sáng như chớp trong thoáng chốc.",
						"thai": "ป้ายดิจิทัลของเมืองสว่างวาบขึ้นชั่วขณะราวกับแสงแฟลช",
						"hindi": "शहर के डिजिटल बिलबोर्ड एक पल के लिए बिजली की तरह चमक उठे।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "알론조의 얼굴. 그 눈빛에 슬픔이 서려 있었다.",
						"english": "Alonzo's face. Sadness was etched in his eyes.",
						"japanese": "アロンゾの顔。その瞳には悲しみが宿っていた。",
						"chinese": "阿隆索的脸。他的眼中充满了悲伤。",
						"french": "Le visage d'Alonzo. Ses yeux portaient une profonde tristesse.",
						"spanish": "El rostro de Alonzo. La tristeza se reflejaba en sus ojos.",
						"vietnamese": "Khuôn mặt của Alonzo. Đôi mắt anh ta chất chứa nỗi buồn.",
						"thai": "ใบหน้าของอลอนโซ่ ความเศร้าฉายชัดในแววตา",
						"hindi": "अलोंजो का चेहरा। उसकी आँखों में उदासी थी।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "봤지? 그는… 고통받고 있어.",
						"english": "See? He's... suffering.",
						"japanese": "見たろ？彼は… 苦しんでいる。",
						"chinese": "看到了吗？他… 正在痛苦。",
						"french": "Tu as vu ? Il... souffre.",
						"spanish": "¿Lo viste? Él... está sufriendo.",
						"vietnamese": "Thấy chưa? Anh ta... đang đau khổ.",
						"thai": "เห็นไหม? เขา… กำลังทรมาน",
						"hindi": "देखा? वह… पीड़ित है।"
					},
					"speaker": "dax",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "하지만… 도시를 파괴하잖아!",
						"english": "But... he's destroying the city!",
						"japanese": "だけど… 彼は街を破壊しているんだ！",
						"chinese": "但是… 他在破坏城市啊！",
						"french": "Mais... il détruit la ville !",
						"spanish": "¡Pero... está destruyendo la ciudad!",
						"vietnamese": "Nhưng... anh ta đang phá hủy thành phố!",
						"thai": "แต่… เขากำลังทำลายเมืองนะ!",
						"hindi": "लेकिन… वह शहर को तबाह कर रहा है!"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "dax",
					"type": "speech",
					"content": {
						"korean": "그도… 피해자였어.",
						"english": "He was... a victim too.",
						"japanese": "彼も… 被害者だったんだ。",
						"chinese": "他也是… 受害者。",
						"french": "Lui aussi... était une victime.",
						"spanish": "Él también... era una víctima.",
						"vietnamese": "Anh ta cũng... là nạn nhân.",
						"thai": "เขาเองก็… เป็นเหยื่อ",
						"hindi": "वह भी… एक पीड़ित था।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "내 배신 때문에… 변해버린 걸지도 몰라.",
						"english": "Maybe my betrayal... changed him.",
						"japanese": "私の裏切りのせいで… 彼は変わってしまったのかもしれない。",
						"chinese": "也许是我的背叛… 让他变成了这样。",
						"french": "À cause de ma trahison... il a peut-être changé.",
						"spanish": "Quizás mi traición... lo cambió.",
						"vietnamese": "Có lẽ vì sự phản bội của tôi... mà anh ta đã thay đổi.",
						"thai": "อาจเป็นเพราะการหักหลังของฉัน… ที่ทำให้เขาเปลี่ยนไป",
						"hindi": "मेरी बेवफाई की वजह से… शायद वह बदल गया।"
					},
					"speaker": "dax",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						4,
						3
					],
					"speaker": "dax",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "dax",
					"type": "speech",
					"content": {
						"korean": "바이러스가 퍼지고 있어. 시한폭탄이야.",
						"english": "The virus is spreading. It's a ticking time bomb.",
						"japanese": "ウイルスが広がっている。時限爆弾だ。",
						"chinese": "病毒正在蔓延。这是个定时炸弹。",
						"french": "Le virus se propage. C'est une bombe à retardement.",
						"spanish": "El virus se está propagando. Es una bomba de tiempo.",
						"vietnamese": "Virus đang lây lan. Nó là một quả bom hẹn giờ.",
						"thai": "ไวรัสกำลังแพร่กระจาย มันคือระเบิดเวลา",
						"hindi": "वायरस फैल रहा है। यह एक टाइम बम है।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "막을 거야. 반드시.",
						"english": "I'll stop it. Absolutely.",
						"japanese": "止める。必ず。",
						"chinese": "我会阻止它。一定。",
						"french": "Je vais l'arrêter. Absolument.",
						"spanish": "Lo detendré. Sin falta.",
						"vietnamese": "Tôi sẽ ngăn chặn nó. Nhất định.",
						"thai": "ฉันจะหยุดมันให้ได้ อย่างแน่นอน",
						"hindi": "मैं इसे रोकूँगा। निश्चित रूप से।"
					}
				},
				{
					"content": {
						"korean": "시간이 없어… 정말 미안해.",
						"english": "No time... I'm so sorry.",
						"japanese": "時間がない…本当にごめん。",
						"chinese": "没时间了……真的很抱歉。",
						"french": "Plus le temps… Je suis vraiment désolé.",
						"spanish": "No hay tiempo... Lo siento mucho.",
						"vietnamese": "Không còn thời gian… Thật lòng xin lỗi.",
						"thai": "ไม่มีเวลาแล้ว... ฉันขอโทษจริงๆ",
						"hindi": "समय नहीं है... मुझे बहुत अफ़सोस है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "dax"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "하찮은 저항… 알론조는 영원하다.",
						"english": "Futile resistance... Alonzo is eternal.",
						"japanese": "愚かな抵抗…アロンゾは永遠だ。",
						"chinese": "渺小的抵抗……阿隆佐是永恒的。",
						"french": "Résistance futile… Alonzo est éternel.",
						"spanish": "Resistencia inútil... Alonzo es eterno.",
						"vietnamese": "Kháng cự vô ích… Alonzo là vĩnh cửu.",
						"thai": "การต่อต้านที่ไร้ค่า... อลอนโซเป็นนิรันดร์",
						"hindi": "निरर्थक प्रतिरोध... अलोंजो शाश्वत है।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "아니. 우리가 널 막았어.",
						"english": "No. We stopped you.",
						"japanese": "いいえ。私たちがあなたを止めた。",
						"chinese": "不。我们阻止了你。",
						"french": "Non. Nous t'avons arrêté.",
						"spanish": "No. Te detuvimos.",
						"vietnamese": "Không. Chúng ta đã ngăn ngươi.",
						"thai": "ไม่ เราหยุดนายแล้ว",
						"hindi": "नहीं। हमने तुम्हें रोका।"
					},
					"emotion": "happy"
				},
				{
					"content": {
						"korean": "잠시의 고요함. 그러나 더 큰 위협이 다가오고 있었다.",
						"english": "A momentary calm. Yet a greater threat approached.",
						"japanese": "束の間の静寂。しかし、より大きな脅威が迫っていた。",
						"chinese": "短暂的平静。然而，更大的威胁正在逼近。",
						"french": "Un calme momentané. Pourtant, une menace plus grande approchait.",
						"spanish": "Una calma momentánea. Sin embargo, una amenaza mayor se acercaba.",
						"vietnamese": "Một khoảnh khắc tĩnh lặng. Nhưng một mối đe dọa lớn hơn đang đến gần.",
						"thai": "ความสงบชั่วขณะ ทว่าภัยคุกคามที่ใหญ่กว่ากำลังคืบคลานเข้ามา",
						"hindi": "क्षण भर की शांति। फिर भी एक बड़ा खतरा मंडरा रहा था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "dax",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "dax",
					"emotion": "sad",
					"content": {
						"korean": "겨우… 막았어. 하지만… 그는 살아있어.",
						"english": "Barely... stopped him. But... he's alive.",
						"japanese": "かろうじて…止めた。だが…彼は生きている。",
						"chinese": "勉强…挡住了。但是…他还活着。",
						"french": "À peine... arrêté. Mais... il est vivant.",
						"spanish": "Apenas... lo detuve. Pero... él está vivo.",
						"vietnamese": "Vừa đủ… ngăn chặn. Nhưng… hắn còn sống.",
						"thai": "แทบจะ… หยุดไว้ได้ แต่… เขายังมีชีวิตอยู่",
						"hindi": "मुश्किल से... रोका। पर... वह जिंदा है।"
					}
				},
				{
					"content": {
						"korean": "알론조를 찾아야 해.",
						"english": "Must find Alonzo.",
						"japanese": "アロンゾを見つけなければ。",
						"chinese": "必须找到阿隆佐。",
						"french": "Je dois trouver Alonzo.",
						"spanish": "Debo encontrar a Alonzo.",
						"vietnamese": "Phải tìm Alonzo.",
						"thai": "ต้องหาอลอนโซ่ให้เจอ",
						"hindi": "अलोंजो को ढूंढना होगा।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 데이터의 심연에서 나타났다.",
						"english": "A colossal shadow emerged from the abyss of data.",
						"japanese": "データの深淵から巨大な影が現れた。",
						"chinese": "一个巨大的影子从数据的深渊中出现。",
						"french": "Une ombre colossale émergea de l'abîme de données.",
						"spanish": "Una sombra colosal emergió del abismo de datos.",
						"vietnamese": "Một bóng đen khổng lồ hiện ra từ vực thẳm dữ liệu.",
						"thai": "เงาขนาดมหึมาปรากฏขึ้นจากห้วงลึกของข้อมูล",
						"hindi": "डेटा के रसातल से एक विशाल छाया उभरी।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "내 시스템에 도전하다니… 어리석군.",
						"english": "To challenge my system... Foolish.",
						"japanese": "私のシステムに挑むとは…愚かだ。",
						"chinese": "竟敢挑战我的系统……真愚蠢。",
						"french": "Oser défier mon système… Insensé.",
						"spanish": "Desafiar mi sistema... Qué insensato.",
						"vietnamese": "Dám thách thức hệ thống của ta… Ngu xuẩn.",
						"thai": "กล้าท้าทายระบบของฉัน... ช่างโง่เขลา",
						"hindi": "मेरे सिस्टम को चुनौती देना... मूर्खतापूर्ण।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "알론조의 꼭두각시!",
						"english": "Alonzo's puppet!",
						"japanese": "アロンゾの操り人形め！",
						"chinese": "阿隆佐的傀儡！",
						"french": "Marionnette d'Alonzo !",
						"spanish": "¡Marioneta de Alonzo!",
						"vietnamese": "Con rối của Alonzo!",
						"thai": "หุ่นเชิดของอลอนโซ!",
						"hindi": "अलोंजो की कठपुतली!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "dax",
					"action": "enter",
					"spot": [
						2,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "제발… 멈춰.",
						"english": "Please... stop.",
						"japanese": "お願い…やめて。",
						"chinese": "拜托……停下。",
						"french": "S'il te plaît… arrête.",
						"spanish": "Por favor... detente.",
						"vietnamese": "Làm ơn… dừng lại.",
						"thai": "ได้โปรด... หยุดเถอะ",
						"hindi": "कृपया... रुक जाओ।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "감히… 배신자 주제에.",
						"english": "How dare you... Traitor.",
						"japanese": "よくも…裏切り者のくせに。",
						"chinese": "竟敢……你这叛徒。",
						"french": "Comment oses-tu… Traître.",
						"spanish": "Cómo te atreves... Traidor.",
						"vietnamese": "Dám… đồ phản bội.",
						"thai": "กล้าดียังไง... ไอ้คนทรยศ",
						"hindi": "तुम्हारी हिम्मत कैसे हुई... गद्दार।"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "나도… 내가 할 일을 할게.",
						"english": "I'll... do what I must.",
						"japanese": "私も…やるべきことをする。",
						"chinese": "我也……会做我该做的。",
						"french": "Moi aussi… je ferai ce que je dois.",
						"spanish": "Yo también... haré lo que debo.",
						"vietnamese": "Ta cũng… sẽ làm việc của ta.",
						"thai": "ฉันเองก็... จะทำในสิ่งที่ฉันต้องทำ",
						"hindi": "मैं भी... अपना काम करूँगा।"
					},
					"type": "speech",
					"speaker": "dax"
				},
				{
					"direction": "down",
					"duration_ms": 400,
					"type": "direction",
					"speaker": "dax",
					"action": "exit"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "네가 뭘 할 수 있는데? 멸망뿐이다.",
						"english": "What can you do? Only destruction.",
						"japanese": "何ができる？滅びるだけだ。",
						"chinese": "你能做什么？只有毁灭。",
						"french": "Que peux-tu faire ? Seulement la destruction.",
						"spanish": "¿Qué puedes hacer? Solo la destrucción.",
						"vietnamese": "Ngươi có thể làm gì? Chỉ có diệt vong.",
						"thai": "แกจะทำอะไรได้? มีแต่ความพินาศเท่านั้น",
						"hindi": "तुम क्या कर सकते हो? केवल विनाश।"
					}
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "네 발버둥은… 무의미하다.",
						"english": "Your struggle... is meaningless.",
						"japanese": "お前の足掻きは…無意味だ。",
						"chinese": "你的挣扎…毫无意义。",
						"french": "Ton combat... est insignifiant.",
						"spanish": "Tu lucha... es inútil.",
						"vietnamese": "Sự vùng vẫy của ngươi… vô nghĩa thôi.",
						"thai": "การดิ้นรนของเจ้า… ไร้ความหมาย",
						"hindi": "तुम्हारा संघर्ष... व्यर्थ है।"
					}
				},
				{
					"content": {
						"korean": "아니… 아직 끝나지 않았어.",
						"english": "No... it's not over yet.",
						"japanese": "いや…まだ終わってない。",
						"chinese": "不…还没结束。",
						"french": "Non... ce n'est pas encore fini.",
						"spanish": "No... aún no ha terminado.",
						"vietnamese": "Không… vẫn chưa kết thúc.",
						"thai": "ไม่… ยังไม่จบ",
						"hindi": "नहीं... अभी खत्म नहीं हुआ।"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "도시의 모든 불빛이 꺼졌다. 절망이 드리웠다.",
						"english": "All city lights went out. Despair fell.",
						"japanese": "街の灯が全て消えた。絶望が覆った。",
						"chinese": "城市所有的灯都熄灭了。绝望笼罩。",
						"french": "Toutes les lumières de la ville s'éteignirent. Le désespoir s'abattit.",
						"spanish": "Todas las luces de la ciudad se apagaron. La desesperación cayó.",
						"vietnamese": "Tất cả đèn thành phố tắt lịm. Tuyệt vọng bao trùm.",
						"thai": "ไฟทุกดวงในเมืองดับลง ความสิ้นหวังปกคลุม",
						"hindi": "शहर की सभी बत्तियाँ बुझ गईं। निराशा छा गई।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "narrator"
				}
			]
		}
	]
} as const;
