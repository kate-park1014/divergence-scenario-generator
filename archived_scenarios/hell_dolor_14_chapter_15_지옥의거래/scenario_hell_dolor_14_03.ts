export const scenario_hell_dolor_14_03 = {
	"scenario_id": "hell_dolor_14_03",
	"order": 3,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"cinder": {
			"id": "mon_7bdc5bba-75ec-4589-827e-193b3c59b022",
			"name": {
				"korean": "신더",
				"english": "Cinder",
				"japanese": "シンダー",
				"chinese": "辛德",
				"french": "Cinder",
				"spanish": "Cinder",
				"vietnamese": "Xinder",
				"thai": "ซินเดอร์",
				"hindi": "सिंडर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/bc21258b-93ac-4669-7330-fdf4e8a57c00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/939a1911-1849-425c-67a4-4958bbdc3300/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "버려진 영혼들의 비명이 메아리치는 곳. 한 여인이 조용히 서 있었다.",
						"english": "A place where the screams of abandoned souls echoed. A woman stood silently.",
						"japanese": "捨てられた魂の悲鳴がこだまする場所。一人の女が静かに立っていた。",
						"chinese": "废弃灵魂的尖叫回荡之处。一位女子静静地站着。",
						"french": "Un lieu où résonnaient les cris des âmes abandonnées. Une femme se tenait silencieusement.",
						"spanish": "Un lugar donde resonaban los gritos de almas abandonadas. Una mujer estaba de pie en silencio.",
						"vietnamese": "Nơi tiếng thét của những linh hồn bị bỏ rơi vang vọng. Một người phụ nữ đứng lặng lẽ.",
						"thai": "สถานที่ที่เสียงกรีดร้องของวิญญาณที่ถูกทอดทิ้งก้องกังวาน สตรีผู้หนึ่งยืนอยู่เงียบ ๆ",
						"hindi": "एक ऐसी जगह जहां परित्यक्त आत्माओं की चीखें गूँज रही थीं। एक महिला खामोशी से खड़ी थी।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "cinder",
					"spot": [
						4,
						2
					]
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "오… 상처 입은 영혼들이여. 제가 그대들의 고통을 덜어드리죠.",
						"english": "Oh... wounded souls. I shall ease your suffering.",
						"japanese": "おお…傷ついた魂たちよ。私が汝らの苦痛を和らげよう。",
						"chinese": "哦……受伤的灵魂们。我将减轻你们的痛苦。",
						"french": "Oh… âmes blessées. Je soulagerai vos souffrances.",
						"spanish": "Oh... almas heridas. Aliviaré vuestro sufrimiento.",
						"vietnamese": "Ôi… những linh hồn tổn thương. Ta sẽ xoa dịu nỗi đau của các ngươi.",
						"thai": "โอ้… วิญญาณที่บาดเจ็บทั้งหลาย ข้าจะบรรเทาความทุกข์ทรมานของเจ้า",
						"hindi": "ओह... घायल आत्माओं। मैं तुम्हारी पीड़ा कम करूँगी।"
					},
					"speaker": "cinder"
				},
				{
					"type": "speech",
					"content": {
						"korean": "누구야? 뭘 원하는 거지?",
						"english": "Who are you? What do you want?",
						"japanese": "誰だ？ 何が望みだ？",
						"chinese": "你是谁？你想要什么？",
						"french": "Qui êtes-vous ? Que voulez-vous ?",
						"spanish": "¿Quién eres? ¿Qué quieres?",
						"vietnamese": "Ngươi là ai? Ngươi muốn gì?",
						"thai": "เจ้าเป็นใคร? ต้องการอะไร?",
						"hindi": "तुम कौन हो? तुम्हें क्या चाहिए?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "신더. 그저 그대들의 '부담'을 대신 짊어질 뿐입니다. 아무런 대가 없이요.",
						"english": "Cinder. I merely bear your 'burdens' for you. Without any cost.",
						"japanese": "シンダー。ただ、汝らの「重荷」を代わりに背負うだけです。何の対価もなく。",
						"chinese": "辛德。我只是替你们背负“负担”。不求任何回报。",
						"french": "Cinder. Je ne fais que porter vos «fardeaux» pour vous. Sans aucun coût.",
						"spanish": "Cinder. Simplemente cargo con vuestras \"cargas\" por vosotros. Sin coste alguno.",
						"vietnamese": "Cinder. Ta chỉ gánh thay 'gánh nặng' của các ngươi thôi. Không đòi hỏi bất cứ giá nào.",
						"thai": "ซินเดอร์ ข้าเพียงแค่แบกรับ 'ภาระ' ของเจ้าให้เท่านั้น โดยไม่มีค่าตอบแทนใดๆ",
						"hindi": "सिंडर। मैं सिर्फ तुम्हारे 'बोझ' उठाती हूँ। बिना किसी कीमत के।"
					},
					"speaker": "cinder",
					"emotion": "happy"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "대가 없는 친절은 없어. 이곳에선.",
						"english": "There's no kindness without a price. Not here.",
						"japanese": "対価のない親切はない。ここではな。",
						"chinese": "没有不带代价的善意。在这里。",
						"french": "Il n'y a pas de gentillesse sans prix. Pas ici.",
						"spanish": "No hay bondad sin precio. No aquí.",
						"vietnamese": "Không có lòng tốt nào mà không có cái giá. Ở nơi này.",
						"thai": "ไม่มีน้ำใจใดที่ไร้ค่าตอบแทน ที่นี่",
						"hindi": "यहां बिना कीमत के कोई दया नहीं मिलती।"
					},
					"speaker": "character_1"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "cinder",
					"action": "enter",
					"spot": [
						5,
						2
					],
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"speaker": "cinder",
					"content": {
						"korean": "보세요. 저 영혼의 짐이 얼마나 무거웠을까요. 제가 덜어주겠습니다.",
						"english": "Look. How heavy must that soul's burden have been? I will ease it.",
						"japanese": "ご覧ください。あの魂の重荷がどれほど重かったことか。私が軽減して差し上げましょう。",
						"chinese": "瞧。那个灵魂的重担该有多么沉重？我来减轻它。",
						"french": "Regardez. À quel point le fardeau de cette âme devait être lourd ? Je vais le soulager.",
						"spanish": "Mirad. ¿Cuán pesado habrá sido el fardo de esa alma? Yo lo aliviaré.",
						"vietnamese": "Nhìn xem. Gánh nặng của linh hồn kia hẳn đã nặng nề biết bao. Ta sẽ gánh đỡ cho.",
						"thai": "ดูสิ ภาระของวิญญาณนั้นหนักแค่ไหนกันนะ ข้าจะช่วยแบ่งเบา",
						"hindi": "देखो। उस आत्मा का बोझ कितना भारी होगा? मैं इसे कम करूँगी।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "신더의 손에서 검은 기운이 뿜어져 나왔다. 영혼의 고통이 사라졌다.",
						"english": "Dark energy surged from Cinder's hand. The soul's pain vanished.",
						"japanese": "シンダーの手から黒い気が噴き出した。魂の苦痛が消え去った。",
						"chinese": "黑色的气息从辛德手中涌出。灵魂的痛苦消失了。",
						"french": "Une énergie sombre jaillit de la main de Cinder. La souffrance de l'âme disparut.",
						"spanish": "La energía oscura brotó de la mano de Cinder. El dolor del alma se desvaneció.",
						"vietnamese": "Năng lượng đen trào ra từ tay Cinder. Nỗi đau của linh hồn biến mất.",
						"thai": "พลังงานมืดพุ่งออกมาจากมือของซินเดอร์ ความเจ็บปวดของวิญญาณได้หายไป",
						"hindi": "सिंडर के हाथ से काली ऊर्जा निकली। आत्मा का दर्द गायब हो गया।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"content": {
						"korean": "…이상해. 저 사라진 고통에서 달콤한 향이 나.",
						"english": "…Strange. That vanished pain now carries a sweet scent.",
						"japanese": "…おかしい。消えたはずの苦痛から甘い香りがする。",
						"chinese": "…奇怪。那消失的痛苦，竟带着一丝甜香。",
						"french": "…Étrange. Cette douleur disparue dégage une douce odeur.",
						"spanish": "…Extraño. Ese dolor desaparecido ahora desprende un dulce aroma.",
						"vietnamese": "…Lạ thật. Nỗi đau đã biến mất lại tỏa ra hương thơm ngọt ngào.",
						"thai": "…แปลกจัง ความเจ็บปวดที่หายไปกลับมีกลิ่นหอมหวาน",
						"hindi": "…अजीब है। वह गायब हुआ दर्द अब एक मीठी सुगंध लिए हुए है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "그리고… 그녀가 내민 계약서… 아까 본 것과 글씨가 똑같아.",
						"english": "And… the contract she offered… the handwriting is identical to what I saw earlier.",
						"japanese": "そして…彼女が差し出した契約書…さっき見たものと筆跡が同じだ。",
						"chinese": "而且…她递出的契约…笔迹和我之前看到的完全一样。",
						"french": "Et… le contrat qu'elle a présenté… l'écriture est identique à celle que j'ai vue plus tôt.",
						"spanish": "Y… el contrato que me ofreció… la letra es idéntica a la que vi antes.",
						"vietnamese": "Và… bản hợp đồng cô ta đưa ra… chữ viết giống hệt cái tôi đã thấy trước đó.",
						"thai": "แล้ว… สัญญาที่เธอยื่นมา… ลายมือเหมือนกับที่ฉันเห็นเมื่อครู่เลย",
						"hindi": "और… उसने जो अनुबंध दिया… लिखावट ठीक वैसी ही है जैसी मैंने पहले देखी थी।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "세상 모든 계약은 돌고 도는 법이죠. 고통도, 구원도.",
						"english": "All contracts in this world circulate. Pain, and salvation too.",
						"japanese": "この世のすべての契約は巡り巡るもの。苦痛も、救済も。",
						"chinese": "世间所有契约皆是循环往复。痛苦如此，救赎亦然。",
						"french": "Tous les contrats en ce monde sont un cycle. La douleur aussi bien que le salut.",
						"spanish": "Todos los contratos en este mundo circulan. El dolor, y la salvación también.",
						"vietnamese": "Mọi hợp đồng trên thế gian này đều luân chuyển. Nỗi đau cũng vậy, và sự cứu rỗi cũng thế.",
						"thai": "สัญญาในโลกล้วนหมุนเวียน ไม่ว่าความเจ็บปวดหรือการไถ่บาป",
						"hindi": "इस दुनिया के सभी अनुबंध घूमते रहते हैं। दर्द भी, और मोक्ष भी।"
					},
					"type": "speech",
					"speaker": "cinder"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "cinder",
					"type": "direction"
				},
				{
					"emotion": "base",
					"speaker": "cinder",
					"type": "speech",
					"content": {
						"korean": "이곳의 모든 영혼은 고통스러워합니다. 저는 그저 그들을 돕고 있을 뿐.",
						"english": "All souls here suffer. I am merely helping them.",
						"japanese": "ここのすべての魂は苦しんでいます。私はただ彼らを助けているだけ。",
						"chinese": "这里的灵魂都在受苦。我只是在帮助他们。",
						"french": "Toutes les âmes ici souffrent. Je ne fais que les aider.",
						"spanish": "Todas las almas aquí sufren. Yo solo estoy ayudándolas.",
						"vietnamese": "Tất cả linh hồn ở đây đều đau khổ. Tôi chỉ đang giúp đỡ họ mà thôi.",
						"thai": "วิญญาณทุกดวงที่นี่กำลังทรมาน ฉันแค่ช่วยพวกเขาเท่านั้น",
						"hindi": "यहां की सभी आत्माएं पीड़ित हैं। मैं बस उनकी मदद कर रहा हूँ।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "네가 덜어낸 '부담'은 어디로 가는 거지? 사라지는 게 아니잖아.",
						"english": "Where does the 'burden' you relieve go? It doesn't just vanish.",
						"japanese": "お前が取り除いた「負担」はどこへ行く？消えるわけじゃないだろう。",
						"chinese": "你减轻的“负担”去哪儿了？它可不会凭空消失。",
						"french": "Où va le 'fardeau' que tu soulages ? Il ne disparaît pas.",
						"spanish": "—¿Adónde va la 'carga' que alivias? No desaparece sin más.",
						"vietnamese": "Cái 'gánh nặng' mà ngươi gỡ bỏ đi đâu? Nó đâu có biến mất.",
						"thai": " 'ภาระ' ที่เจ้าช่วยปลดเปลื้องไปไหน? มันไม่ได้หายไปเฉยๆ หรอกนะ",
						"hindi": "तुम जो 'बोझ' हटाते हो, वह कहाँ जाता है? वह गायब तो नहीं हो जाता।"
					},
					"speaker": "character_3",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그건 중요하지 않아요. 영혼들이 평안을 얻는다면.",
						"english": "That's not important. As long as souls find peace.",
						"japanese": "それは重要ではありません。魂が安らぎを得るのなら。",
						"chinese": "那不重要。只要灵魂能获得平静。",
						"french": "Ce n'est pas important. Tant que les âmes trouvent la paix.",
						"spanish": "Eso no es importante. Si las almas encuentran la paz.",
						"vietnamese": "Điều đó không quan trọng. Miễn là các linh hồn tìm thấy bình yên.",
						"thai": "นั่นไม่สำคัญหรอก ตราบใดที่วิญญาณได้รับความสงบสุข",
						"hindi": "वह महत्वपूर्ण नहीं है। अगर आत्माओं को शांति मिलती है तो।"
					},
					"speaker": "cinder"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이건 진짜 구원이 아니야. 뭔가 다른 목적이 있어.",
						"english": "This isn't true salvation. There's another purpose.",
						"japanese": "これは本当の救済じゃない。何か別の目的がある。",
						"chinese": "这不是真正的救赎。你另有目的。",
						"french": "Ce n'est pas une vraie rédemption. Il y a un autre but.",
						"spanish": "Esto no es una verdadera salvación. Hay otro propósito.",
						"vietnamese": "Đây không phải là sự cứu rỗi thật sự. Ngươi có mục đích khác.",
						"thai": "นี่ไม่ใช่การไถ่บาปที่แท้จริง ต้องมีจุดประสงค์อื่น",
						"hindi": "यह असली मोक्ष नहीं है। कोई और मकसद है।"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…그렇게 생각하신다면, 어쩔 수 없죠.",
						"english": "…If that's what you think, there's nothing I can do.",
						"japanese": "…そうお考えでしたら、仕方ありませんね。",
						"chinese": "…如果您这么认为，那我也没有办法。",
						"french": "…Si vous le pensez, je ne peux rien y faire.",
						"spanish": "…Si así lo cree, no puedo hacer nada.",
						"vietnamese": "…Nếu ngài nghĩ vậy, tôi cũng đành chịu.",
						"thai": "…ถ้าท่านคิดเช่นนั้น ก็ช่วยไม่ได้",
						"hindi": "…अगर आप ऐसा सोचते हैं, तो मैं कुछ नहीं कर सकता।"
					},
					"speaker": "cinder",
					"emotion": "sad"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"speaker": "cinder",
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "너의 '친절'은 더 큰 절망을 부르고 있어. 모두를 기만하는 거야!",
						"english": "Your 'kindness' is inviting greater despair. You're deceiving everyone!",
						"japanese": "お前の「親切」は、より大きな絶望を招いている。みんなを欺いているんだ！",
						"chinese": "你的“仁慈”正在招致更大的绝望。你这是在欺骗所有人！",
						"french": "Ta 'gentillesse' attire un désespoir plus grand. Tu trompes tout le monde !",
						"spanish": "¡Tu 'amabilidad' está provocando una desesperación mayor. Estás engañando a todos!",
						"vietnamese": "'Lòng tốt' của ngươi đang dẫn đến sự tuyệt vọng lớn hơn. Ngươi đang lừa dối tất cả mọi người!",
						"thai": " 'ความเมตตา' ของเจ้ากำลังนำมาซึ่งความสิ้นหวังที่ยิ่งใหญ่กว่า เจ้ากำลังหลอกลวงทุกคน!",
						"hindi": "तुम्हारी 'दया' और बड़े निराशा को बुला रही है। तुम सबको धोखा दे रहे हो!"
					}
				},
				{
					"speaker": "cinder",
					"type": "speech",
					"content": {
						"korean": "글쎄요. 그저 계약을 이행할 뿐인걸요. 이곳의 '정의'대로.",
						"english": "Well, I'm just fulfilling the contract. According to the 'justice' here.",
						"japanese": "さあ。ただ契約を履行するだけですよ。ここの「正義」に従って。",
						"chinese": "呵呵。我只是在履行契约而已。按照这里的“正义”。",
						"french": "Eh bien, je ne fais qu'exécuter le contrat. Selon la 'justice' d'ici.",
						"spanish": "Bueno, solo estoy cumpliendo el contrato. Según la 'justicia' de este lugar.",
						"vietnamese": "Chà. Tôi chỉ đang thực hiện hợp đồng thôi. Theo 'công lý' ở đây.",
						"thai": "ก็แค่ทำตามสัญญาเท่านั้นแหละ ตาม 'ความยุติธรรม' ของที่นี่",
						"hindi": "खैर, मैं बस अनुबंध पूरा कर रहा हूँ। यहाँ के 'न्याय' के अनुसार।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이 시스템의 노예가 될 수는 없어. 우린 달라!",
						"english": "We can't be slaves to this system. We're different!",
						"japanese": "このシステムの奴隷にはなれない。私たちは違う！",
						"chinese": "我们不能成为这个系统的奴隶。我们不一样！",
						"french": "On ne peut pas être les esclaves de ce système. Nous sommes différents !",
						"spanish": "No podemos ser esclavos de este sistema. ¡Somos diferentes!",
						"vietnamese": "Chúng ta không thể là nô lệ của hệ thống này. Chúng ta khác biệt!",
						"thai": "เราเป็นทาสของระบบนี้ไม่ได้ เราไม่เหมือนกัน!",
						"hindi": "हम इस प्रणाली के गुलाम नहीं बन सकते। हम अलग हैं!"
					},
					"type": "speech",
					"speaker": "character_4",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "흥. 그 '다름'이… 얼마나 오래갈지 궁금하군요.",
						"english": "Hmph. I wonder how long that 'difference' will last.",
						"japanese": "ふん。その「違い」が…どれだけ続くか楽しみですね。",
						"chinese": "哼。我倒是好奇，那份“不同”能持续多久。",
						"french": "Hum. Je me demande combien de temps cette 'différence' durera.",
						"spanish": "Hmph. Me pregunto cuánto durará esa 'diferencia'.",
						"vietnamese": "Hừm. Tôi tự hỏi sự 'khác biệt' đó sẽ kéo dài bao lâu.",
						"thai": "ฮึ่ม 'ความแตกต่าง' นั้น… จะอยู่ได้นานแค่ไหนกันนะ",
						"hindi": "हम्म। मुझे आश्चर्य है कि वह 'अंतर' कब तक चलेगा।"
					},
					"type": "speech",
					"speaker": "cinder"
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "어리석은 것들. 너희의 절망도… 언젠가 내 양식이 될 것이다.",
						"english": "Foolish mortals. Your despair, too… shall one day be my sustenance.",
						"japanese": "愚かな者たちめ。お前たちの絶望も…いつか私の糧となるだろう。",
						"chinese": "愚蠢的东西。你们的绝望…终有一天会成为我的养料。",
						"french": "Stupides. Votre désespoir… un jour, il sera ma subsistance.",
						"spanish": "Necios. Vuestra desesperación… un día, será mi sustento.",
						"vietnamese": "Đồ ngốc. Sự tuyệt vọng của các ngươi… một ngày nào đó sẽ trở thành thức ăn của ta.",
						"thai": "พวกโง่เขลา ความสิ้นหวังของพวกเจ้า... สักวันหนึ่งจะกลายเป็นอาหารของข้า",
						"hindi": "मूर्खों। तुम्हारी निराशा भी… एक दिन मेरा पोषण बनेगी।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…아직 끝나지 않았어. 우린 포기하지 않아.",
						"english": "…It’s not over yet. We won’t give up.",
						"japanese": "…まだ終わってない。私たちは諦めない。",
						"chinese": "…还没结束。我们不会放弃。",
						"french": "…Ce n'est pas encore fini. Nous n'abandonnerons pas.",
						"spanish": "…Aún no ha terminado. No nos rendiremos.",
						"vietnamese": "…Vẫn chưa kết thúc. Chúng ta sẽ không bỏ cuộc.",
						"thai": "…ยังไม่จบ เราจะไม่ยอมแพ้",
						"hindi": "…अभी खत्म नहीं हुआ है। हम हार नहीं मानेंगे।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "달콤한 향이 더욱 진해졌다. 그곳에 거대한 그림자가 기다리고 있었다.",
						"english": "The sweet scent grew stronger. A colossal shadow awaited there.",
						"japanese": "甘い香りがさらに濃くなった。そこに巨大な影が待ち構えていた。",
						"chinese": "甜美的香味更加浓郁了。那里，一道巨大的阴影正等待着。",
						"french": "L'odeur sucrée s'intensifia. Une ombre colossale y attendait.",
						"spanish": "El dulce aroma se hizo más intenso. Una sombra colosal esperaba allí.",
						"vietnamese": "Mùi hương ngọt ngào càng thêm nồng nàn. Một cái bóng khổng lồ đang chờ đợi ở đó.",
						"thai": "กลิ่นหอมหวานเข้มข้นขึ้น เงาร่างมหึมารอคอยอยู่ที่นั่น",
						"hindi": "मीठी सुगंध और तेज़ हो गई। वहाँ एक विशाल छाया प्रतीक्षा कर रही थी।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…왔군. 너희의 '부담'도 나를 배부르게 하겠지.",
						"english": "...You've come. Your 'burden' will sate me as well.",
						"japanese": "…来たな。お前たちの「負担」も私を満足させるだろう。",
						"chinese": "……来了。你们的“负担”也会让我饱足。",
						"french": "...Vous êtes venus. Votre 'fardeau' me rassasiera aussi.",
						"spanish": "...Han llegado. Su 'carga' también me saciará.",
						"vietnamese": "...Đã đến rồi. 'Gánh nặng' của các ngươi cũng sẽ làm ta no bụng.",
						"thai": "...มาแล้วสินะ 'ภาระ' ของพวกเจ้าก็คงทำให้ข้าอิ่มหนำ",
						"hindi": "...आ गए। तुम्हारा 'बोझ' भी मुझे तृप्त करेगा।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "이게… 신더 네가 모으던 '부담'의 최종 목적지인가!",
						"english": "Is this... the final destination of the 'burden' you, Cinder, were collecting?!",
						"japanese": "これが…シンダー、お前が集めていた「負担」の最終目的地なのか！",
						"chinese": "这就是……辛德，你所收集的“负担”的最终目的地吗？！",
						"french": "C'est ça… la destination finale du 'fardeau' que tu collectais, Cinder ?!",
						"spanish": "¿Es este... el destino final de la 'carga' que tú, Cinder, estabas reuniendo?",
						"vietnamese": "Đây là... điểm đến cuối cùng của 'gánh nặng' mà ngươi, Cinder, đã thu thập sao?!",
						"thai": "นี่คือ... ปลายทางสุดท้ายของ 'ภาระ' ที่ซินเดอร์เจ้ารวบรวมมางั้นหรือ!",
						"hindi": "क्या यह... सिंडर, तुम्हारे द्वारा एकत्र किए गए 'बोझ' का अंतिम गंतव्य है?!"
					},
					"type": "speech"
				},
				{
					"type": "direction",
					"speaker": "cinder",
					"action": "exit",
					"direction": "down",
					"duration_ms": 400
				},
				{
					"emotion": "base",
					"content": {
						"korean": "영원히 반복되는 순환. 너희도 곧 이해하게 될 거다.",
						"english": "An eternally repeating cycle. You too will soon understand.",
						"japanese": "永遠に繰り返される循環。お前たちもすぐに理解するだろう。",
						"chinese": "永恒循环。你们很快也会明白的。",
						"french": "Un cycle qui se répète éternellement. Vous aussi, vous comprendrez bientôt.",
						"spanish": "Un ciclo que se repite eternamente. Ustedes también lo entenderán pronto.",
						"vietnamese": "Một vòng lặp vĩnh cửu. Các ngươi cũng sẽ sớm hiểu thôi.",
						"thai": "วัฏจักรที่ไม่มีวันสิ้นสุด พวกเจ้าก็จะเข้าใจในไม่ช้า",
						"hindi": "एक शाश्वत दोहराव चक्र। तुम भी जल्द ही समझ जाओगे।"
					},
					"type": "speech",
					"speaker": "random_boss"
				}
			],
			"win_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이게 끝이라고 생각하나? 모든 끝은… 새로운 시작일 뿐.",
						"english": "Do you think this is the end? Every end is... just a new beginning.",
						"japanese": "これが終わりだと思うか？ すべての終わりは…新たな始まりに過ぎない。",
						"chinese": "你们以为这是结束吗？所有的结束……都只是新的开始。",
						"french": "Penses-tu que c'est la fin ? Chaque fin n'est… qu'un nouveau commencement.",
						"spanish": "¿Crees que esto es el final? Todo final es... solo un nuevo comienzo.",
						"vietnamese": "Ngươi nghĩ đây là kết thúc ư? Mọi kết thúc... chỉ là một khởi đầu mới.",
						"thai": "คิดว่านี่คือจุดจบงั้นหรือ? ทุกจุดจบก็เป็น... เพียงแค่การเริ่มต้นใหม่เท่านั้น",
						"hindi": "क्या तुम्हें लगता है कि यह अंत है? हर अंत... बस एक नई शुरुआत है।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "아니. 여기서 이 지옥의 사슬을 끊을 거야.",
						"english": "No. I'll break these chains of hell right here.",
						"japanese": "いいえ。ここでこの地獄の鎖を断ち切る。",
						"chinese": "不。我要在这里斩断这地狱的锁链。",
						"french": "Non. Je vais briser ces chaînes de l'enfer ici et maintenant.",
						"spanish": "No. Aquí romperé estas cadenas del infierno.",
						"vietnamese": "Không. Ta sẽ cắt đứt xiềng xích địa ngục này ngay tại đây.",
						"thai": "ไม่ ฉันจะทำลายโซ่ตรวนนรกนี่ตรงนี้แหละ",
						"hindi": "नहीं। मैं यहीं इस नरक की जंजीरों को तोड़ दूँगा।"
					},
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "달콤하고 역겨운 향이 희미하게 남아있었다. 신더는 사라졌다.",
						"english": "A sweet and repulsive scent faintly lingered. Cinder had vanished.",
						"japanese": "甘く嫌悪感を催す香りがかすかに残っていた。シンダーは消えた。",
						"chinese": "甜美又令人作呕的气味仍 faintly 残留着。辛德消失了。",
						"french": "Une odeur douceâtre et répugnante persistait faiblement. Cinder avait disparu.",
						"spanish": "Un aroma dulce y repulsivo permanecía débilmente. Cinder había desaparecido.",
						"vietnamese": "Một mùi hương ngọt ngào và kinh tởm vẫn còn vương vấn. Cinder đã biến mất.",
						"thai": "กลิ่นหอมหวานน่ารังเกียจยังคงจางๆ ซินเดอร์หายไปแล้ว",
						"hindi": "एक मीठी और घृणित सुगंध हल्की सी बाकी थी। सिंडर गायब हो गया था।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "그러나 영혼들의 고통은 여전히… 다른 곳에서 되풀이될 것이다.",
						"english": "Yet, the suffering of souls… will still echo elsewhere.",
						"japanese": "だが、魂たちの苦痛は…まだ別の場所で繰り返されるだろう。",
						"chinese": "然而，灵魂的苦痛…仍会在别处重演。",
						"french": "Pourtant, la souffrance des âmes… se répétera ailleurs.",
						"spanish": "Sin embargo, el sufrimiento de las almas… se repetirá en otro lugar.",
						"vietnamese": "Tuy nhiên, nỗi đau của các linh hồn… vẫn sẽ lặp lại ở nơi khác.",
						"thai": "แต่ความทุกข์ทรมานของวิญญาณ... จะยังคงดำเนินต่อไปในที่อื่น",
						"hindi": "फिर भी, आत्माओं का कष्ट… कहीं और गूंजता रहेगा।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"끝없는 절망 속, 한 줄기 단비처럼 나타난 이가 있었다.",
			"그녀는 고통을 덜어주는 '상인'. 영혼의 짐을 대신 짊어져 주겠다고 했다.",
			"달콤한 속삭임 뒤에 숨겨진 진실은 무엇일까?",
			"이곳에서조차, 구원은 가장 잔혹한 계약이 된다."
		],
		"english": [
			"In endless despair, one appeared like a single drop of welcome rain.",
			"She was a 'merchant' who eased pain. She offered to bear the burden of souls.",
			"What truth hides behind the sweet whispers?",
			"Even here, salvation becomes the most cruel contract."
		],
		"japanese": [
			"終わらない絶望の中、恵みの雨のように現れた者がいた。",
			"彼女は苦痛を和らげる「商人」。魂の重荷を代わりに背負うと言った。",
			"甘い囁きの裏に隠された真実とは？",
			"ここでさえ、救済は最も残酷な契約となる。"
		],
		"chinese": [
			"在无尽的绝望中，一人如甘霖般出现。",
			"她是减轻痛苦的“商人”。她承诺替人背负灵魂的重担。",
			"甜言蜜语背后隐藏着怎样的真相？",
			"即使在这里，救赎也成为最残酷的契约。"
		],
		"french": [
			"Dans un désespoir sans fin, quelqu'un apparut comme une pluie bienfaisante.",
			"C'était une «marchande» qui apaisait la douleur. Elle proposa de porter le fardeau des âmes.",
			"Quelle vérité se cache derrière les doux murmures ?",
			"Même ici, le salut devient le contrat le plus cruel."
		],
		"spanish": [
			"En la desesperación infinita, alguien apareció como una gota de lluvia bienvenida.",
			"Era una \"mercader\" que aliviaba el dolor. Ofreció cargar con el peso de las almas.",
			"¿Qué verdad se esconde tras los dulces susurros?",
			"Incluso aquí, la salvación se convierte en el contrato más cruel."
		],
		"vietnamese": [
			"Trong tuyệt vọng vô tận, một người xuất hiện như giọt mưa lành.",
			"Nàng là 'thương nhân' xoa dịu nỗi đau. Nàng nói sẽ gánh thay gánh nặng linh hồn.",
			"Sự thật nào ẩn giấu sau lời thì thầm ngọt ngào?",
			"Ngay cả nơi đây, sự cứu rỗi cũng trở thành khế ước tàn nhẫn nhất."
		],
		"thai": [
			"ในความสิ้นหวังไม่รู้จบ มีผู้หนึ่งปรากฏดุจหยาดฝนชโลมใจ",
			"นางคือ 'พ่อค้า' ผู้บรรเทาความเจ็บปวด นางเสนอจะแบกรับภาระของวิญญาณแทน",
			"ความจริงอะไรซ่อนอยู่เบื้องหลังเสียงกระซิบอันหอมหวาน?",
			"แม้แต่ที่นี่ ความรอดก็กลายเป็นสัญญาที่โหดร้ายที่สุด"
		],
		"hindi": [
			"अंतहीन निराशा में, कोई एक बूंद वर्षा की तरह प्रकट हुआ।",
			"वह दर्द कम करने वाली 'व्यापारी' थी। उसने आत्माओं का बोझ उठाने की पेशकश की।",
			"मधुर फुसफुसाहट के पीछे क्या सच छिपा है?",
			"यहां भी, मोक्ष सबसे क्रूर अनुबंध बन जाता है।"
		]
	}
} as const;
