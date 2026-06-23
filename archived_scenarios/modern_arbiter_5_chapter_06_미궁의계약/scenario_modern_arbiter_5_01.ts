export const scenario_modern_arbiter_5_01 = {
	"scenario_id": "modern_arbiter_5_01",
	"order": 1,
	"act": "intro",
	"theme": "modern",
	"actors": {
		"kai": {
			"id": "mon_d7f29313-b8fb-49da-9a1a-01df5d13866e",
			"name": {
				"korean": "카이",
				"english": "Kai",
				"japanese": "カイ",
				"chinese": "凯",
				"french": "Kai",
				"spanish": "Kai",
				"vietnamese": "Kai",
				"thai": "ไค",
				"hindi": "काई"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f10d9184-4155-4bb9-de2d-db61463f7c00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/e41f8e03-08c9-4a4f-6f72-fa9342876f00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"네온 도시, 모든 것이 데이터로 기록되는 곳.",
			"그러나 계약들이 사라진다. 흔적조차 남기지 않고.",
			"뒷골목에선 소문이 돈다. '데이터 브로커'의 그림자.",
			"그것이 모든 미스터리의 시작이었다."
		],
		"english": [
			"Neon City, where everything is recorded as data.",
			"But contracts vanish. Without a trace.",
			"Rumors spread in the back alleys. The shadow of a 'Data Broker'.",
			"That was the beginning of all mysteries."
		],
		"japanese": [
			"ネオンシティ、全てがデータとして記録される場所。",
			"しかし、契約が消える。痕跡すら残さずに。",
			"路地裏では噂が広まる。「データブローカー」の影。",
			"それが全ての謎の始まりだった。"
		],
		"chinese": [
			"霓虹都市，一切皆以数据记录之地。",
			"然而，合同却消失了。不留一丝痕迹。",
			"后巷里流言四起。“数据掮客”的影子。",
			"那是所有谜团的开端。"
		],
		"french": [
			"Cité néon, où tout est enregistré sous forme de données.",
			"Mais des contrats disparaissent. Sans laisser de trace.",
			"Des rumeurs courent dans les ruelles. L'ombre d'un « courtier en données ».",
			"Ce fut le début de tous les mystères."
		],
		"spanish": [
			"Ciudad Neón, donde todo se registra como datos.",
			"Pero los contratos desaparecen. Sin dejar rastro.",
			"En los callejones, los rumores corren. La sombra de un 'Corredor de Datos'.",
			"Ese fue el comienzo de todos los misterios."
		],
		"vietnamese": [
			"Thành phố Neon, nơi mọi thứ đều được ghi lại dưới dạng dữ liệu.",
			"Nhưng các hợp đồng biến mất. Không để lại dấu vết.",
			"Tin đồn lan truyền khắp các con hẻm. Bóng dáng của 'Kẻ môi giới dữ liệu'.",
			"Đó là khởi đầu của mọi bí ẩn."
		],
		"thai": [
			"นครนีออน ที่ทุกสิ่งถูกบันทึกเป็นข้อมูล",
			"แต่สัญญากลับหายไป ไร้ร่องรอย",
			"ข่าวลือแพร่สะพัดในตรอกซอกซอย เงาของ 'นายหน้าข้อมูล'",
			"นั่นคือจุดเริ่มต้นของความลึกลับทั้งหมด"
		],
		"hindi": [
			"नियॉन सिटी, जहाँ सब कुछ डेटा के रूप में दर्ज है।",
			"लेकिन अनुबंध गायब हो जाते हैं। बिना किसी निशान के।",
			"पिछली गलियों में अफवाहें फैलती हैं। एक 'डेटा ब्रोकर' की छाया।",
			"वह सभी रहस्यों की शुरुआत थी।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "어둠이 깔린 뒷골목. 네온 간판만이 희미하게 빛났다.",
						"english": "Dark alley. Only neon signs dimly glowed.",
						"japanese": "闇に包まれた路地裏。ネオンの看板だけが薄暗く光っていた。",
						"chinese": "黑暗的后巷。只有霓虹招牌微弱地闪烁着。",
						"french": "Ruelle sombre. Seuls les néons brillaient faiblement.",
						"spanish": "Callejón oscuro. Solo letreros de neón brillaban tenuemente.",
						"vietnamese": "Con hẻm tối tăm. Chỉ có bảng hiệu neon phát sáng mờ ảo.",
						"thai": "ตรอกมืดมิด มีเพียงป้ายนีออนสว่างไสวริบหรี่",
						"hindi": "अंधेरी गली। केवल नियॉन साइन हल्के से चमक रहे थे।"
					}
				},
				{
					"duration_ms": 500,
					"speaker": "kai",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "kai",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "찾던 게 이거지?",
						"english": "This is what you were looking for, right?",
						"japanese": "探してたのはこれだろ？",
						"chinese": "你要找的就是这个吧？",
						"french": "C'est ce que tu cherchais, n'est-ce pas ?",
						"spanish": "Esto es lo que buscabas, ¿verdad?",
						"vietnamese": "Đây là thứ cậu đang tìm, phải không?",
						"thai": "นี่คือสิ่งที่แกตามหาใช่ไหม?",
						"hindi": "यही तुम ढूंढ रहे थे, है ना?"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…사라진 계약들?",
						"english": "...Vanished contracts?",
						"japanese": "…消えた契約？",
						"chinese": "……消失的合同？",
						"french": "…Les contrats disparus ?",
						"spanish": "¿…Los contratos desaparecidos?",
						"vietnamese": "…Các hợp đồng biến mất?",
						"thai": "…สัญญาที่หายไป?",
						"hindi": "...गायब हुए अनुबंध?"
					}
				},
				{
					"content": {
						"korean": "흔적도 없어. 데이터조차.",
						"english": "No trace. Not even data.",
						"japanese": "痕跡もない。データすら。",
						"chinese": "没有痕迹。连数据都没有。",
						"french": "Aucune trace. Pas même de données.",
						"spanish": "Sin rastro. Ni siquiera datos.",
						"vietnamese": "Không dấu vết. Ngay cả dữ liệu cũng không.",
						"thai": "ไม่มีร่องรอย แม้แต่ข้อมูลก็ไม่มี",
						"hindi": "कोई निशान नहीं। डेटा भी नहीं।"
					},
					"emotion": "base",
					"speaker": "kai",
					"type": "speech"
				},
				{
					"content": {
						"korean": "말이 안 돼.",
						"english": "It makes no sense.",
						"japanese": "ありえない。",
						"chinese": "这不合理。",
						"french": "C'est insensé.",
						"spanish": "No tiene sentido.",
						"vietnamese": "Vô lý.",
						"thai": "เป็นไปไม่ได้",
						"hindi": "यह समझ में नहीं आता।"
					},
					"type": "speech",
					"speaker": "character_1",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "이 도시에서 데이터가 없다는 건, 존재하지 않는다는 뜻이야.",
						"english": "In this city, no data means it doesn't exist.",
						"japanese": "この街でデータがないってことは、存在しないってことだ。",
						"chinese": "在这座城市，没有数据就意味着不存在。",
						"french": "Dans cette ville, pas de données signifie que ça n'existe pas.",
						"spanish": "En esta ciudad, sin datos significa que no existe.",
						"vietnamese": "Ở thành phố này, không có dữ liệu nghĩa là không tồn tại.",
						"thai": "ในเมืองนี้ การไม่มีข้อมูลหมายความว่าไม่มีอยู่จริง",
						"hindi": "इस शहर में, डेटा का न होना मतलब उसका अस्तित्व नहीं है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "kai"
				},
				{
					"content": {
						"korean": "누가 이런 짓을?",
						"english": "Who did this?",
						"japanese": "「誰がこんなことを？」",
						"chinese": "谁干的？",
						"french": "Qui a fait ça ?",
						"spanish": "¿Quién hizo esto?",
						"vietnamese": "Ai đã làm điều này?",
						"thai": "ใครทำอย่างนี้?",
						"hindi": "यह किसने किया?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "사람들은 '데이터 브로커'라 부르지.",
						"english": "People call them 'Data Brokers'.",
						"japanese": "「奴らは『データブローカー』と呼ばれている。」",
						"chinese": "人们称他们为‘数据掮客’。",
						"french": "On les appelle les 'Courtiers en données'.",
						"spanish": "La gente los llama 'Corredores de datos'.",
						"vietnamese": "Người ta gọi họ là 'Kẻ môi giới dữ liệu'.",
						"thai": "คนเรียกพวกเขาว่า 'นายหน้าข้อมูล'",
						"hindi": "लोग उन्हें 'डेटा ब्रोкер' कहते हैं।"
					},
					"speaker": "kai",
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "kai",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						4
					]
				},
				{
					"content": {
						"korean": "데이터 브로커… 그게 누군데.",
						"english": "Data Brokers... Who are they?",
						"japanese": "「データブローカー…そいつらは誰だ。」",
						"chinese": "数据掮客…那是什么人？",
						"french": "Courtiers en données… Qui sont-ils ?",
						"spanish": "Corredores de datos… ¿Quiénes son?",
						"vietnamese": "Kẻ môi giới dữ liệu… Họ là ai?",
						"thai": "นายหน้าข้อมูล... พวกนั้นคือใคร?",
						"hindi": "डेटा ब्रोकर... वे कौन हैं?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "아무도 몰라. 그림자처럼 움직이지.",
						"english": "Nobody knows. They move like shadows.",
						"japanese": "「誰も知らない。影のように動く。」",
						"chinese": "没人知道。他们像影子一样行动。",
						"french": "Personne ne sait. Ils se déplacent comme des ombres.",
						"spanish": "Nadie sabe. Se mueven como sombras.",
						"vietnamese": "Không ai biết. Họ di chuyển như bóng ma.",
						"thai": "ไม่มีใครรู้ พวกเขาเคลื่อนไหวเหมือนเงา",
						"hindi": "कोई नहीं जानता। वे परछाई की तरह चलते हैं।"
					},
					"type": "speech",
					"speaker": "kai",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "오래된 건물 벽. 희미한 갱단의 표식이 눈에 띄었다.",
						"english": "Old building wall. A faint gang mark caught my eye.",
						"japanese": "「古い建物の壁。薄れたギャングの印が目についた。」",
						"chinese": "老旧的墙壁上。一个模糊的帮派标记映入眼帘。",
						"french": "Mur d'un vieil immeuble. Un insigne de gang effacé attira mon regard.",
						"spanish": "Muro de un edificio antiguo. Un débil distintivo de pandilla llamó mi atención.",
						"vietnamese": "Bức tường tòa nhà cũ. Một dấu hiệu băng đảng mờ nhạt lọt vào mắt tôi.",
						"thai": "กำแพงตึกเก่า สัญลักษณ์แก๊งจาง ๆ ปรากฏขึ้น",
						"hindi": "पुरानी इमारत की दीवार। एक धुंधला गिरोह का निशान दिखा।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 표식… 뭘까?",
						"english": "This mark... what is it?",
						"japanese": "「この印…何だろう？」",
						"chinese": "这标记…会是什么？",
						"french": "Ce symbole… Qu'est-ce que c'est ?",
						"spanish": "Esta marca… ¿Qué será?",
						"vietnamese": "Dấu hiệu này… là gì?",
						"thai": "สัญลักษณ์นี้... คืออะไร?",
						"hindi": "यह निशान... क्या है?"
					},
					"speaker": "character_2",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "잊힌 것들이 가끔 튀어나와. 이 도시처럼.",
						"english": "Forgotten things sometimes resurface. Like this city.",
						"japanese": "「忘れられたものが時々現れる。この街のように。」",
						"chinese": "遗忘之物偶尔会浮现。就像这座城市一样。",
						"french": "Les choses oubliées refont parfois surface. Comme cette ville.",
						"spanish": "Las cosas olvidadas a veces resurgen. Como esta ciudad.",
						"vietnamese": "Những điều bị lãng quên đôi khi lại xuất hiện. Giống như thành phố này.",
						"thai": "สิ่งที่ถูกลืมบางครั้งก็กลับมา เหมือนเมืองนี้",
						"hindi": "भूली हुई चीजें कभी-कभी सामने आती हैं। इस शहर की तरह।"
					}
				},
				{
					"content": {
						"korean": "사라진 계약이랑 관련이 있나?",
						"english": "Is it related to the vanished contract?",
						"japanese": "「消えた契約と関係があるのか？」",
						"chinese": "这和消失的合约有关吗？",
						"french": "C'est lié au contrat disparu ?",
						"spanish": "¿Está relacionado con el contrato desaparecido?",
						"vietnamese": "Có liên quan đến hợp đồng đã mất không?",
						"thai": "เกี่ยวข้องกับสัญญาที่หายไปรึเปล่า?",
						"hindi": "क्या इसका संबंध गायब हुए अनुबंध से है?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "관계없는 일은 없어. 이 도시에선.",
						"english": "Nothing is unrelated. Not in this city.",
						"japanese": "「無関係なことなどない。この街では。」",
						"chinese": "没有不相关的事。在这座城市里。",
						"french": "Rien n'est sans rapport. Pas dans cette ville.",
						"spanish": "Nada es ajeno. No en esta ciudad.",
						"vietnamese": "Không có gì là không liên quan. Ở thành phố này.",
						"thai": "ไม่มีอะไรที่ไม่เกี่ยวข้องกัน ในเมืองนี้",
						"hindi": "कोई भी चीज़ असंबंधित नहीं है। इस शहर में।"
					},
					"emotion": "base",
					"speaker": "kai",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "kai"
				},
				{
					"content": {
						"korean": "그들은 모든 걸 데이터로 만들어. 그리고 지워버리지.",
						"english": "They turn everything into data. And then erase it.",
						"japanese": "「奴らはすべてをデータに変え、そして消し去る。」",
						"chinese": "他们把一切都变成数据。然后抹去。",
						"french": "Ils transforment tout en données. Puis ils effacent tout.",
						"spanish": "Lo convierten todo en datos. Y luego lo borran.",
						"vietnamese": "Họ biến mọi thứ thành dữ liệu. Rồi xóa sổ nó.",
						"thai": "พวกเขาเปลี่ยนทุกอย่างให้เป็นข้อมูล แล้วก็ลบทิ้งไป",
						"hindi": "वे सब कुछ डेटा में बदल देते हैं। और फिर मिटा देते हैं।"
					},
					"type": "speech",
					"speaker": "kai",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "왜?",
						"english": "Why?",
						"japanese": "なぜ？",
						"chinese": "为什么？",
						"french": "Pourquoi ?",
						"spanish": "¿Por qué?",
						"vietnamese": "Tại sao?",
						"thai": "ทำไม?",
						"hindi": "क्यों?"
					},
					"type": "speech",
					"speaker": "character_3",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "누구에게는 권력이 되고, 누구에게는… 존재 자체가 사라지는 지옥이 돼.",
						"english": "For some, it's power. For others… a hell where their very existence vanishes.",
						"japanese": "ある者には力となり、ある者には…存在そのものが消え去る地獄となる。",
						"chinese": "对某些人来说，这是力量；对另一些人来说…这是连存在本身都消失的地狱。",
						"french": "Pour certains, c'est le pouvoir. Pour d'autres… un enfer où leur existence même disparaît.",
						"spanish": "Para algunos, es poder. Para otros… un infierno donde su propia existencia se desvanece.",
						"vietnamese": "Đối với một số người, đó là quyền lực. Đối với những người khác… đó là địa ngục nơi sự tồn tại của họ biến mất.",
						"thai": "สำหรับบางคน มันคือพลังอำนาจ สำหรับบางคน… มันคือนรกที่ตัวตนของพวกเขาเลือนหายไป.",
						"hindi": "किसी के लिए यह शक्ति है, किसी और के लिए… एक ऐसा नर्क जहाँ उनका अस्तित्व ही मिट जाता है।"
					}
				},
				{
					"content": {
						"korean": "더 이상 희생자를 만들 수 없어.",
						"english": "We can't let there be any more victims.",
						"japanese": "これ以上、犠牲者を出せない。",
						"chinese": "不能再制造牺牲者了。",
						"french": "On ne peut plus laisser de victimes.",
						"spanish": "No podemos permitir más víctimas.",
						"vietnamese": "Không thể tạo thêm nạn nhân nào nữa.",
						"thai": "เราสร้างเหยื่อเพิ่มอีกไม่ได้แล้ว.",
						"hindi": "अब और पीड़ित नहीं बनाए जा सकते।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"emotion": "base",
					"content": {
						"korean": "쉽지 않을 거야. 상대는 이 도시 그 자체니까.",
						"english": "It won't be easy. Our opponent is this city itself.",
						"japanese": "容易ではないだろう。相手はこの都市そのものだから。",
						"chinese": "不会容易的。对手就是这座城市本身。",
						"french": "Ce ne sera pas facile. Notre adversaire est la ville elle-même.",
						"spanish": "No será fácil. El oponente es esta ciudad misma.",
						"vietnamese": "Sẽ không dễ đâu. Kẻ thù là chính thành phố này.",
						"thai": "มันจะไม่ง่ายหรอก คู่ต่อสู้คือเมืองนี้เอง.",
						"hindi": "यह आसान नहीं होगा। प्रतिद्वंद्वी यह शहर ही है।"
					}
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "막아야 해.",
						"english": "We have to stop it.",
						"japanese": "止めなければ。",
						"chinese": "必须阻止。",
						"french": "Il faut l'arrêter.",
						"spanish": "Debemos detenerlo.",
						"vietnamese": "Phải ngăn chặn nó.",
						"thai": "ต้องหยุดมัน.",
						"hindi": "इसे रोकना होगा।"
					}
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"spot": [
						1,
						3
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "kai"
				},
				{
					"content": {
						"korean": "여기까지 온 건 용감해. 아니면… 어리석거나.",
						"english": "Coming this far is brave. Or… foolish.",
						"japanese": "ここまで来たのは勇敢だ。それとも…愚かか。",
						"chinese": "能走到这里很勇敢。或者说…愚蠢。",
						"french": "Arriver jusqu'ici est courageux. Ou… stupide.",
						"spanish": "Llegar hasta aquí es valiente. O… insensato.",
						"vietnamese": "Đến được đây là dũng cảm. Hoặc là… ngu ngốc.",
						"thai": "มาถึงนี่ได้ก็กล้าหาญแล้ว. หรือไม่ก็… โง่เขลา.",
						"hindi": "यहाँ तक आना साहसी है। या… मूर्खतापूर्ण।"
					},
					"speaker": "kai",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "돌아갈 생각 없어.",
						"english": "I have no intention of turning back.",
						"japanese": "引き返すつもりはない。",
						"chinese": "没打算回头。",
						"french": "Je n'ai aucune intention de faire demi-tour.",
						"spanish": "No tengo intención de volver.",
						"vietnamese": "Không có ý định quay lại.",
						"thai": "ไม่มีทางกลับ.",
						"hindi": "वापस जाने का कोई इरादा नहीं।"
					}
				},
				{
					"content": {
						"korean": "뒤돌아보면 안 돼. 한 번 발을 들이면 끝까지 가는 수밖에.",
						"english": "Don't look back. Once you set foot in, you must go all the way.",
						"japanese": "振り返ってはいけない。一度足を踏み入れたら、最後まで行くしかない。",
						"chinese": "别回头。一旦踏入，就只能走到最后。",
						"french": "Ne regarde pas en arrière. Une fois que tu y mets les pieds, tu n'as pas d'autre choix que d'aller jusqu'au bout.",
						"spanish": "No mires atrás. Una vez que pones un pie, no hay más remedio que ir hasta el final.",
						"vietnamese": "Đừng nhìn lại. Một khi đã đặt chân vào, chỉ có thể đi đến cùng.",
						"thai": "ห้ามมองย้อนกลับไป. เมื่อก้าวเข้ามาแล้ว ก็ต้องไปให้สุดทาง.",
						"hindi": "पीछे मुड़कर मत देखो। एक बार पैर रख दिया, तो अंत तक जाना ही होगा।"
					},
					"emotion": "sad",
					"speaker": "kai",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…알고 있어.",
						"english": "…I know.",
						"japanese": "…分かってる。",
						"chinese": "…我知道。",
						"french": "…Je sais.",
						"spanish": "…Lo sé.",
						"vietnamese": "…Tôi biết.",
						"thai": "…ฉันรู้.",
						"hindi": "…मुझे पता है।"
					},
					"emotion": "base",
					"speaker": "character_2",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "kai",
					"type": "speech",
					"content": {
						"korean": "이 길의 끝엔 진실이 있을까? 아니면 또 다른 함정일까.",
						"english": "At the end of this path, will there be truth? Or another trap?",
						"japanese": "この道の先に真実があるのか？それとも、また別の罠なのか。",
						"chinese": "这条路的尽头会是真相吗？还是另一个陷阱？",
						"french": "Au bout de ce chemin, y aura-t-il la vérité ? Ou un autre piège ?",
						"spanish": "Al final de este camino, ¿habrá verdad? ¿O será otra trampa?",
						"vietnamese": "Cuối con đường này sẽ có sự thật chứ? Hay lại là một cái bẫy khác?",
						"thai": "ที่ปลายทางนี้จะมีแต่ความจริงงั้นหรือ? หรือจะเป็นกับดักอีกอัน?",
						"hindi": "क्या इस राह के अंत में सच होगा? या एक और जाल?"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "가봐야 알아.",
						"english": "Only one way to find out.",
						"japanese": "行ってみないと分からない。",
						"chinese": "去了才知道。",
						"french": "Il faut y aller pour le savoir.",
						"spanish": "Hay que ir para saberlo.",
						"vietnamese": "Phải đi mới biết.",
						"thai": "ต้องไปถึงจะรู้",
						"hindi": "जाकर ही पता चलेगा।"
					}
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "길고 어두운 복도 끝, 기묘한 기계음이 들려왔다.",
						"english": "At the end of a long, dark corridor, a strange mechanical hum echoed.",
						"japanese": "長く暗い廊下の突き当りから、奇妙な機械音が聞こえてきた。",
						"chinese": "漫长黑暗的走廊尽头，传来奇怪的机械声。",
						"french": "Au bout d'un long couloir sombre, un étrange bourdonnement mécanique se fit entendre.",
						"spanish": "Al final de un largo y oscuro pasillo, un extraño zumbido mecánico resonó.",
						"vietnamese": "Cuối hành lang dài và tối, một âm thanh máy móc kỳ lạ vang lên.",
						"thai": "ที่ปลายสุดของทางเดินที่มืดมิดและยาวนาน, เสียงเครื่องจักรประหลาดดังขึ้น",
						"hindi": "एक लंबे, अंधेरे गलियारे के अंत में, एक अजीब यांत्रिक गड़गड़ाहट गूँज रही थी।"
					}
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "오지 말았어야 했다.",
						"english": "I shouldn't have come.",
						"japanese": "来るべきではなかった。",
						"chinese": "我不该来。",
						"french": "Je n'aurais pas dû venir.",
						"spanish": "No debí haber venido.",
						"vietnamese": "Lẽ ra tôi không nên đến.",
						"thai": "ไม่น่ามาเลย",
						"hindi": "मुझे आना ही नहीं चाहिए था।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "네가 데이터 브로커의 하수인인가?",
						"english": "Are you the Data Broker's minion?",
						"japanese": "お前はデータブローカーの手先か？",
						"chinese": "你是数据掮客的走狗吗？",
						"french": "Es-tu le laquais du Courtier en Données ?",
						"spanish": "¿Eres el secuaz del Corredor de Datos?",
						"vietnamese": "Ngươi là tay sai của Kẻ Môi Giới Dữ Liệu sao?",
						"thai": "แกเป็นลูกน้องของนายหน้าข้อมูลเหรอ?",
						"hindi": "क्या तुम डेटा ब्रोकर के गुर्गे हो?"
					}
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "내 역할은 방해자를 제거하는 것. 그뿐이다.",
						"english": "My role is to eliminate obstacles. Nothing more.",
						"japanese": "私の役目は邪魔者を排除すること。それだけだ。",
						"chinese": "我的职责就是清除障碍。仅此而已。",
						"french": "Mon rôle est d'éliminer les obstacles. Rien de plus.",
						"spanish": "Mi papel es eliminar a los obstáculos. Nada más.",
						"vietnamese": "Vai trò của ta là loại bỏ kẻ ngáng đường. Chỉ vậy thôi.",
						"thai": "หน้าที่ของฉันคือกำจัดผู้ขัดขวาง. แค่นั้น",
						"hindi": "मेरी भूमिका बाधाओं को खत्म करना है। बस इतना ही।"
					}
				},
				{
					"spot": [
						4,
						1
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "kai"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "조심해. 저 자는 데이터의 수호자나 마찬가지야.",
						"english": "Be careful. He's practically a guardian of data.",
						"japanese": "気をつけろ。奴はデータの守護者みたいなものだ。",
						"chinese": "小心。他就像数据的守护者一样。",
						"french": "Attention. C'est quasiment un gardien des données.",
						"spanish": "Ten cuidado. Es prácticamente un guardián de los datos.",
						"vietnamese": "Cẩn thận. Hắn ta chẳng khác nào một người bảo vệ dữ liệu.",
						"thai": "ระวัง. เขาเป็นเหมือนผู้พิทักษ์ข้อมูลเลยนะ",
						"hindi": "सावधान रहना। वह डेटा का संरक्षक ही है।"
					}
				},
				{
					"direction": "down",
					"duration_ms": 400,
					"speaker": "kai",
					"type": "direction",
					"action": "exit"
				},
				{
					"content": {
						"korean": "…상관 없어.",
						"english": "It doesn't matter.",
						"japanese": "関係ない。",
						"chinese": "无所谓。",
						"french": "Ça n'a pas d'importance.",
						"spanish": "No importa.",
						"vietnamese": "Không liên quan.",
						"thai": "ไม่สน",
						"hindi": "मुझे परवाह नहीं।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "데이터의 폭풍이 모든 것을 집어삼켰다.",
						"english": "The data storm consumed everything.",
						"japanese": "データの嵐がすべてを飲み込んだ。",
						"chinese": "数据风暴吞噬了一切。",
						"french": "La tempête de données a tout englouti.",
						"spanish": "La tormenta de datos lo consumió todo.",
						"vietnamese": "Cơn bão dữ liệu đã nuốt chửng mọi thứ.",
						"thai": "พายุข้อมูลได้กลืนกินทุกสิ่งแล้ว",
						"hindi": "डेटा के तूफ़ान ने सब कुछ निगल लिया।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "네 발버둥은 의미 없다. 모든 것은 데이터로 회귀할 뿐.",
						"english": "Your struggles are futile. All returns to data.",
						"japanese": "お前の足掻きは無意味だ。すべてはデータに還るだけ。",
						"chinese": "你的挣扎毫无意义。一切都将回归数据。",
						"french": "Vos efforts sont vains. Tout ne fait que retourner aux données.",
						"spanish": "Tus esfuerzos son inútiles. Todo regresa a los datos.",
						"vietnamese": "Sự vùng vẫy của ngươi là vô nghĩa. Mọi thứ rồi sẽ trở về dữ liệu.",
						"thai": "การดิ้นรนของเจ้าไร้ความหมาย ทุกสิ่งล้วนกลับคืนสู่ข้อมูลเท่านั้น",
						"hindi": "तुम्हारी कोशिशें बेकार हैं। सब कुछ डेटा में ही लौट आता है।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "아니… 난 포기 안 해.",
						"english": "No... I won't give up.",
						"japanese": "いや… 私は諦めない。",
						"chinese": "不… 我不会放弃。",
						"french": "Non... je n'abandonnerai pas.",
						"spanish": "No... no me rendiré.",
						"vietnamese": "Không... tôi sẽ không bỏ cuộc.",
						"thai": "ไม่... ฉันไม่ยอมแพ้",
						"hindi": "नहीं... मैं हार नहीं मानूँगा।"
					}
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…이것은 시작에 불과하다. 더 거대한 그림자가….",
						"english": "This is merely the beginning. A greater shadow...",
						"japanese": "これは始まりに過ぎない。もっと巨大な影が…。",
						"chinese": "这只是开始。更巨大的阴影…。",
						"french": "Ce n'est que le début. Une ombre plus grande...",
						"spanish": "Esto es solo el principio. Una sombra mayor...",
						"vietnamese": "Đây chỉ là khởi đầu. Một bóng đen lớn hơn...",
						"thai": "นี่เป็นเพียงจุดเริ่มต้น. เงาที่ใหญ่กว่า...",
						"hindi": "यह तो बस शुरुआत है। एक बड़ी परछाई..."
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "무슨 소리야?",
						"english": "What are you talking about?",
						"japanese": "何を言ってるんだ？",
						"chinese": "你说什么？",
						"french": "De quoi parles-tu ?",
						"spanish": "¿De qué hablas?",
						"vietnamese": "Ngươi nói gì vậy?",
						"thai": "พูดอะไรน่ะ?",
						"hindi": "क्या कह रहे हो?"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "쓰러진 그림자 너머로, 또 다른 미지의 길이 열렸다. 진실은 더 깊은 곳에 있었다.",
						"english": "Beyond the fallen shadow, another unknown path opened. The truth lay deeper.",
						"japanese": "倒れた影の向こうに、未知なる別の道が開かれた。真実はもっと奥深くに存在した。",
						"chinese": "倒下的阴影之外，另一条未知的道路开启了。真相在更深处。",
						"french": "Au-delà de l'ombre tombée, un autre chemin inconnu s'est ouvert. La vérité gisait plus profondément.",
						"spanish": "Más allá de la sombra caída, otro camino desconocido se abrió. La verdad yacía más profundamente.",
						"vietnamese": "Vượt qua bóng đen đã ngã xuống, một con đường chưa biết khác đã mở ra. Sự thật nằm sâu hơn.",
						"thai": "เหนือเงาที่ร่วงหล่น, เส้นทางลึกลับอีกสายเปิดออก. ความจริงซ่อนอยู่ในที่ที่ลึกกว่านั้น",
						"hindi": "गिरी हुई परछाई के पार, एक और अज्ञात रास्ता खुल गया। सच्चाई और गहराई में थी।"
					}
				}
			]
		}
	]
} as const;
