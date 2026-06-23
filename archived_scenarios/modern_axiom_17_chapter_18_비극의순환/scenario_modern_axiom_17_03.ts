export const scenario_modern_axiom_17_03 = {
	"scenario_id": "modern_axiom_17_03",
	"order": 3,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"max": {
			"id": "mon_6e8c1577-89e2-49f6-a9f3-a6521b9e7f59",
			"name": {
				"korean": "맥스",
				"english": "Max",
				"japanese": "マックス",
				"chinese": "麦克斯",
				"french": "Max",
				"spanish": "Max",
				"vietnamese": "Max",
				"thai": "แม็กซ์",
				"hindi": "मैक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8bd7f351-400b-46f9-828f-aa2542734900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/62971060-c904-4d96-afcd-d11f831b3e00/public"
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
					"content": {
						"korean": "도시의 가장 깊은 곳. 시스템의 코드가 끊임없이 깜빡였다.",
						"english": "The deepest part of the city. The system's code blinked endlessly.",
						"japanese": "都市の最深部。システムのコードが絶えず点滅していた。",
						"chinese": "城市的深处。系统的代码不断闪烁。",
						"french": "Le plus profond de la ville. Le code du système clignotait sans cesse.",
						"spanish": "La parte más profunda de la ciudad. El código del sistema parpadeaba sin cesar.",
						"vietnamese": "Nơi sâu nhất của thành phố. Mã hệ thống nhấp nháy không ngừng.",
						"thai": "ส่วนที่ลึกที่สุดของเมือง โค้ดของระบบกะพริบไม่หยุดหย่อน",
						"hindi": "शहर का सबसे गहरा हिस्सा। सिस्टम का कोड लगातार चमक रहा था।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"spot": [
						4,
						2
					],
					"action": "enter",
					"speaker": "max",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "...또 시작이야.",
						"english": "Here we go again.",
						"japanese": "...また始まった。",
						"chinese": "……又开始了。",
						"french": "...Ça recommence.",
						"spanish": "...Aquí vamos de nuevo.",
						"vietnamese": "...Lại bắt đầu rồi.",
						"thai": "...เริ่มอีกแล้ว",
						"hindi": "...फिर से शुरू हो गया।"
					},
					"speaker": "max",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "당신은... 맥스?",
						"english": "Are you... Max?",
						"japanese": "あなたは...マックス？",
						"chinese": "你是……麦克斯？",
						"french": "Vous êtes... Max ?",
						"spanish": "¿Eres... Max?",
						"vietnamese": "Anh là... Max?",
						"thai": "คุณคือ... แม็กซ์?",
						"hindi": "तुम... मैक्स हो?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이름? 기억도 흐릿해. 나는 그저... 반복되는 고통.",
						"english": "Name? My memory is hazy. I am just... recurring pain.",
						"japanese": "名前？記憶も曖昧だ。俺はただ...繰り返される苦痛だ。",
						"chinese": "名字？记忆都模糊了。我只是……重复的痛苦。",
						"french": "Nom ? Ma mémoire est floue. Je suis juste... une douleur récurrente.",
						"spanish": "¿Nombre? Mi memoria es vaga. Solo soy... un dolor recurrente.",
						"vietnamese": "Tên ư? Ký ức cũng mờ nhạt. Tôi chỉ là... nỗi đau lặp lại.",
						"thai": "ชื่อ? ความทรงจำก็เลือนลาง ฉันก็แค่...ความเจ็บปวดที่ซ้ำซาก",
						"hindi": "नाम? यादें भी धुंधली हैं। मैं बस... दोहराया जाने वाला दर्द हूँ।"
					},
					"speaker": "max",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"action": "enter",
					"speaker": "max"
				},
				{
					"type": "speech",
					"content": {
						"korean": "봤어? 저 화면? 내 가족이 죽고, 내가 무너지는 모습...",
						"english": "Did you see? That screen? My family dying, me breaking down...",
						"japanese": "見たか？あの画面？俺の家族が死に、俺が崩れ落ちる姿を...",
						"chinese": "你看到了吗？那个屏幕？我的家人死去，我崩溃的样子……",
						"french": "Tu as vu ? Cet écran ? Ma famille mourant, moi m'effondrant...",
						"spanish": "¿Viste? ¿Esa pantalla? Mi familia muriendo, yo desmoronándome...",
						"vietnamese": "Thấy chưa? Màn hình đó? Gia đình tôi chết, tôi sụp đổ...",
						"thai": "เห็นไหม? จอภาพนั้น? ครอบครัวฉันตาย ฉันพังทลาย...",
						"hindi": "देखा? वह स्क्रीन? मेरे परिवार का मरना, मेरा टूट जाना..."
					},
					"speaker": "max",
					"emotion": "angry"
				},
				{
					"speaker": "max",
					"emotion": "sad",
					"content": {
						"korean": "매번 똑같이 반복돼. 낡은 디지털 기록처럼, 섬광처럼...",
						"english": "It's the same loop every time. Like old data, a fleeting flash...",
						"japanese": "毎回同じ繰り返しだ。古いデジタル記録のように、閃光のように…",
						"chinese": "每次都重复。像旧的数字记录，像闪光一样…",
						"french": "C'est la même boucle à chaque fois. Comme une vieille donnée, un éclair fugace...",
						"spanish": "Siempre lo mismo. Como un registro antiguo, un destello fugaz...",
						"vietnamese": "Cứ lặp đi lặp lại. Như dữ liệu cũ, một tia chớp vụt qua...",
						"thai": "มันวนซ้ำๆ ทุกครั้ง. เหมือนข้อมูลเก่า, แสงวาบ...",
						"hindi": "हर बार वही दोहराव। पुराने डेटा की तरह, एक क्षणिक चमक..."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "...이게 시스템이 하는 짓이라고?",
						"english": "...Is this the System's doing?",
						"japanese": "...これがシステムの仕業なのか？",
						"chinese": "...这就是系统所为吗？",
						"french": "...C'est ça, l'œuvre du Système ?",
						"spanish": "...¿Esto es obra del Sistema?",
						"vietnamese": "...Đây là do Hệ thống gây ra à?",
						"thai": "...นี่คือสิ่งที่ระบบทำเหรอ?",
						"hindi": "...क्या यही सिस्टम का काम है?"
					},
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"speaker": "max",
					"emotion": "sad",
					"content": {
						"korean": "그래. 여기 갇힌 모두가, 나처럼 반복되는 비극의 제물이지.",
						"english": "Yes. Everyone trapped here, like me, is a victim of this endless tragedy.",
						"japanese": "そうだ。ここに囚われた者たちは皆、私のように繰り返される悲劇の生贄だ。",
						"chinese": "是啊。所有被困在这里的人，都和我一样，是重复悲剧的牺牲品。",
						"french": "Oui. Tous ceux qui sont piégés ici, comme moi, sont des victimes de cette tragédie sans fin.",
						"spanish": "Sí. Todos los atrapados aquí, como yo, somos víctimas de esta tragedia sin fin.",
						"vietnamese": "Đúng. Mọi người bị mắc kẹt ở đây, như tôi, đều là nạn nhân của bi kịch lặp đi lặp lại này.",
						"thai": "ใช่. ทุกคนที่ติดอยู่ที่นี่, เหมือนฉัน, คือเหยื่อของโศกนาฏกรรมที่ไม่สิ้นสุดนี้.",
						"hindi": "हाँ। यहाँ फँसे सभी, मेरी तरह, इस अंतहीन त्रासदी के शिकार हैं।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "max",
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "시스템은 우리의 모든 것을 조작해.",
						"english": "The System manipulates our every move.",
						"japanese": "システムは私たちの全てを操る。",
						"chinese": "系统操纵我们的一切。",
						"french": "Le Système manipule tout de nous.",
						"spanish": "El Sistema manipula cada aspecto nuestro.",
						"vietnamese": "Hệ thống thao túng mọi thứ của chúng ta.",
						"thai": "ระบบควบคุมทุกสิ่งทุกอย่างของเรา.",
						"hindi": "सिस्टम हमारी हर चीज़ में हेरफेर करता है।"
					},
					"speaker": "max",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "희망을 주고, 뺏고, 다시 절망으로 몰아넣지.",
						"english": "It grants hope, then snatches it away, only to plunge us back into despair.",
						"japanese": "希望を与え、奪い、そして再び絶望へと突き落とす。",
						"chinese": "它给予希望，然后夺走，再次将我们推入绝望。",
						"french": "Il donne l'espoir, puis le reprend, nous plongeant à nouveau dans le désespoir.",
						"spanish": "Da esperanza, la arrebata, y nos sumerge de nuevo en la desesperación.",
						"vietnamese": "Nó ban hy vọng, rồi cướp đi, và lại đẩy ta vào tuyệt vọng.",
						"thai": "มันให้ความหวัง แย่งชิงไป แล้วผลักเรากลับสู่ความสิ้นหวัง.",
						"hindi": "यह उम्मीद देता है, छीन लेता है, और फिर हमें फिर से निराशा में धकेल देता है।"
					},
					"speaker": "max",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "우리의 의지를 짓밟는다는 말이야?",
						"english": "So, it crushes our will?",
						"japanese": "私たちの意志を踏みにじるということか？",
						"chinese": "你是说它践踏我们的意志？",
						"french": "Ça veut dire qu'il écrase notre volonté ?",
						"spanish": "¿Aplastan nuestra voluntad?",
						"vietnamese": "Vậy là nó chà đạp ý chí của chúng ta ư?",
						"thai": "หมายความว่ามันเหยียบย่ำเจตจำนงของเราเหรอ?",
						"hindi": "क्या इसका मतलब है कि यह हमारी इच्छा को कुचल देता है?"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "그게 이 도시의 방식이니까.",
						"english": "Because that's just how this city works.",
						"japanese": "それがこの街のやり方だからな。",
						"chinese": "因为这就是这个城市的方式。",
						"french": "Parce que c'est le fonctionnement de cette ville.",
						"spanish": "Porque así funciona esta ciudad.",
						"vietnamese": "Vì đó là cách mà thành phố này vận hành.",
						"thai": "เพราะนั่นคือวิถีของเมืองนี้.",
						"hindi": "क्योंकि यही इस शहर का तरीका है।"
					},
					"speaker": "max",
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "max",
					"action": "enter",
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "max",
					"emotion": "sad",
					"content": {
						"korean": "벗어날 수 없어. 절대.",
						"english": "There's no escape. None at all.",
						"japanese": "逃れられない。絶対に。",
						"chinese": "无法逃脱。绝无可能。",
						"french": "Impossible d'y échapper. Jamais.",
						"spanish": "No hay escapatoria. Jamás.",
						"vietnamese": "Không thể thoát được. Tuyệt đối không.",
						"thai": "หนีไม่พ้นหรอก. ไม่มีทาง.",
						"hindi": "बच नहीं सकते। कभी नहीं।"
					}
				},
				{
					"content": {
						"korean": "이 루프는 영원히 계속될 거야. 영원히...",
						"english": "This loop will go on forever. Forever...",
						"japanese": "このループは永遠に続くだろう。永遠に...",
						"chinese": "这个循环将永远持续下去。永远……",
						"french": "Cette boucle continuera à l'infini. À jamais...",
						"spanish": "Este bucle continuará por siempre. Por siempre...",
						"vietnamese": "Vòng lặp này sẽ tiếp tục mãi mãi. Mãi mãi...",
						"thai": "วงจรนี้จะดำเนินต่อไปตลอดไป. ตลอดไป...",
						"hindi": "यह लूप हमेशा के लिए जारी रहेगा। हमेशा के लिए..."
					},
					"speaker": "max",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "아니. 당신은 여기에 혼자가 아니야.",
						"english": "No. You're not alone in this.",
						"japanese": "いや。あなたはここに一人じゃない。",
						"chinese": "不。你在这里并不孤单。",
						"french": "Non. Tu n'es pas seul ici.",
						"spanish": "No. No estás solo.",
						"vietnamese": "Không. Bạn không cô đơn ở đây.",
						"thai": "ไม่. คุณไม่ได้อยู่คนเดียวที่นี่.",
						"hindi": "नहीं। आप यहाँ अकेले नहीं हैं।"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 고통을 끝내겠어. 반드시.",
						"english": "I will end this pain. Absolutely.",
						"japanese": "この苦痛を終わらせる。必ず。",
						"chinese": "我一定会结束这份痛苦。",
						"french": "Je mettrai fin à cette douleur. Absolument.",
						"spanish": "Terminaré con este dolor. Absolutamente.",
						"vietnamese": "Ta sẽ chấm dứt nỗi đau này. Nhất định.",
						"thai": "ฉันจะยุติความเจ็บปวดนี้ให้ได้ อย่างแน่นอน",
						"hindi": "मैं इस दर्द को ख़त्म करूँगा। निश्चित रूप से।"
					},
					"speaker": "character_any",
					"emotion": "angry"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "거대한 시스템의 수호자가 길을 막았다.",
						"english": "The guardian of the colossal system blocked the way.",
						"japanese": "巨大なシステムの守護者が道を塞いだ。",
						"chinese": "巨大系统的守护者挡住了去路。",
						"french": "Le gardien du système colossal a bloqué le chemin.",
						"spanish": "El guardián del sistema colosal bloqueó el camino.",
						"vietnamese": "Kẻ bảo hộ của hệ thống khổng lồ đã chặn đường.",
						"thai": "ผู้พิทักษ์ของระบบอันยิ่งใหญ่ได้ขวางทางไว้",
						"hindi": "विशाल प्रणाली के संरक्षक ने रास्ता रोक दिया।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "거슬리는 오류는, 삭제해야지.",
						"english": "Annoying errors must be deleted.",
						"japanese": "厄介なエラーは、削除すべきだ。",
						"chinese": "碍眼的错误，必须删除。",
						"french": "Les erreurs gênantes, il faut les supprimer.",
						"spanish": "Los errores molestos, deben ser eliminados.",
						"vietnamese": "Lỗi gây chướng mắt, phải xóa bỏ.",
						"thai": "ข้อผิดพลาดที่น่ารำคาญ ต้องถูกลบออกไป",
						"hindi": "परेशान करने वाली त्रुटियाँ, हटाई जानी चाहिए।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "또 다른 희생자를 만들게 두지 않아!",
						"english": "I won't let another victim be made!",
						"japanese": "これ以上、犠牲者を出させない！",
						"chinese": "我不会再让其他人成为牺牲品！",
						"french": "Je ne laisserai pas faire d'autres victimes !",
						"spanish": "¡No permitiré que haya otra víctima!",
						"vietnamese": "Không để ai trở thành nạn nhân nữa!",
						"thai": "ฉันจะไม่ยอมให้มีเหยื่ออีก!",
						"hindi": "मैं किसी और को बलि का बकरा नहीं बनने दूँगा!"
					}
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "네 승리? 착각하지 마. 이 데이터는... 영원히 순환한다.",
						"english": "Your victory? Don't be mistaken. This data... circulates forever.",
						"japanese": "お前の勝利？勘違いするな。このデータは…永遠に循環する。",
						"chinese": "你的胜利？别误会。这些数据…将永远循环。",
						"french": "Ta victoire ? Ne te trompe pas. Ces données... circulent éternellement.",
						"spanish": "¿Tu victoria? No te equivoques. Estos datos... circulan para siempre.",
						"vietnamese": "Chiến thắng của ngươi? Đừng nhầm lẫn. Dữ liệu này... tuần hoàn vĩnh viễn.",
						"thai": "ชัยชนะของแกงั้นเหรอ? อย่าเข้าใจผิด ข้อมูลนี้... จะหมุนเวียนไปตลอดกาล",
						"hindi": "तुम्हारी जीत? ग़लती मत करो। यह डेटा... हमेशा के लिए घूमता रहेगा।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "max",
					"action": "enter",
					"spot": [
						4,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "max",
					"emotion": "sad",
					"content": {
						"korean": "루프는... 끝나지 않아.",
						"english": "The loop... never ends.",
						"japanese": "ループは…終わらない。",
						"chinese": "循环…永无止境。",
						"french": "La boucle... ne se termine jamais.",
						"spanish": "El bucle... no termina.",
						"vietnamese": "Vòng lặp... không kết thúc.",
						"thai": "วงวน... ไม่สิ้นสุด",
						"hindi": "लूप... ख़त्म नहीं होता।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "아니. 여기서부터 시작이야. 이 비극을 끊어낼 진정한 시작.",
						"english": "No. This is where it begins. The true start to breaking this tragedy.",
						"japanese": "違う。ここからが始まりだ。この悲劇を断ち切る真の始まりが。",
						"chinese": "不。这才是开始。斩断这场悲剧的真正开端。",
						"french": "Non. C'est ici que ça commence. Le véritable début pour briser cette tragédie.",
						"spanish": "No. Aquí es donde comienza. El verdadero inicio para romper esta tragedia.",
						"vietnamese": "Không. Từ đây mới là khởi đầu. Sự khởi đầu thực sự để cắt đứt bi kịch này.",
						"thai": "ไม่ใช่ นี่คือจุดเริ่มต้น จุดเริ่มต้นที่แท้จริงที่จะยุติโศกนาฏกรรมนี้",
						"hindi": "नहीं। यहीं से शुरुआत होती है। इस त्रासदी को ख़त्म करने की सच्ची शुरुआत।"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "맥스는 구원받았지만, 시스템의 그림자는 여전히 도시를 덮고 있었다.",
						"english": "Max was saved, but the system's shadow still covered the city.",
						"japanese": "マックスは救われたが、システムの影は依然として街を覆っていた。",
						"chinese": "麦克斯被救赎了，但系统的阴影依然笼罩着这座城市。",
						"french": "Max a été sauvé, mais l'ombre du système recouvrait toujours la ville.",
						"spanish": "Max fue salvado, pero la sombra del sistema aún cubría la ciudad.",
						"vietnamese": "Max đã được cứu, nhưng bóng tối của hệ thống vẫn bao trùm thành phố.",
						"thai": "แม็กซ์ได้รับการช่วยเหลือแล้ว แต่เงาของระบบก็ยังคงปกคลุมเมืองอยู่",
						"hindi": "मैक्स बच गया, लेकिन सिस्टम की छाया अभी भी शहर को घेरे हुए थी।"
					},
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "시스템의 일부가 되는 걸 환영한다, 오류.",
						"english": "Welcome to being part of the system, error.",
						"japanese": "システムの仲間入りへようこそ、エラーよ。",
						"chinese": "欢迎成为系统的一部分，错误。",
						"french": "Bienvenue à faire partie du système, erreur.",
						"spanish": "Bienvenido a formar parte del sistema, error.",
						"vietnamese": "Chào mừng ngươi trở thành một phần của hệ thống, lỗi.",
						"thai": "ยินดีต้อนรับสู่การเป็นส่วนหนึ่งของระบบ ข้อผิดพลาดเอ๋ย",
						"hindi": "सिस्टम का हिस्सा बनने के लिए तुम्हारा स्वागत है, त्रुटि।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "...아직 끝나지 않았어. 맥스의 고통을 헛되이 하지 않아.",
						"english": "...It's not over yet. I won't let Max's suffering be in vain.",
						"japanese": "…まだ終わってない。マックスの苦しみを無駄にはしない。",
						"chinese": "…还没有结束。我不会让麦克斯的痛苦白费。",
						"french": "...Ce n'est pas encore fini. Je ne laisserai pas la souffrance de Max être vaine.",
						"spanish": "...Aún no ha terminado. No dejaré que el sufrimiento de Max sea en vano.",
						"vietnamese": "...Chưa kết thúc đâu. Tôi sẽ không để nỗi đau của Max trở nên vô ích.",
						"thai": "...ยังไม่จบหรอก ฉันจะไม่ยอมให้ความทุกข์ทรมานของแม็กซ์ไร้ค่า",
						"hindi": "...अभी ख़त्म नहीं हुआ। मैं मैक्स के दर्द को व्यर्थ नहीं जाने दूँगा।"
					},
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"정보의 바다, 아키움.",
			"이 도시는 시스템에 의해 움직인다.",
			"그러나 어떤 이들에게, 시스템은 무한한 고통을 반복한다.",
			"한때 모든 것을 가졌던 남자, 맥스. 그가 절규한다.",
			"끝나지 않는 비극의 희생자 앞에서, 진실의 퍼즐은 더욱 잔혹해진다."
		],
		"english": [
			"Akium, a sea of information.",
			"This city runs on the system.",
			"However, for some, the system perpetuates endless suffering.",
			"Max, a man who once had everything, screams.",
			"Before the victim of endless tragedy, the puzzle of truth becomes crueler."
		],
		"japanese": [
			"情報の海、アキウム。",
			"この都市はシステムによって動いている。",
			"しかし、ある者たちにとって、システムは無限の苦痛を繰り返す。",
			"かつて全てを持っていた男、マックス。彼が絶叫する。",
			"終わりのない悲劇の犠牲者の前で、真実のパズルはさらに残酷になる。"
		],
		"chinese": [
			"信息的海洋，阿基姆。",
			"这座城市由系统驱动。",
			"然而对某些人来说，系统重复着无尽的痛苦。",
			"曾经拥有一切的男人，麦克斯。他绝望地嘶吼着。",
			"在无尽悲剧的受害者面前，真相的拼图变得更加残酷。"
		],
		"french": [
			"Akium, la mer d'informations.",
			"Cette ville est mue par le système.",
			"Cependant, pour certains, le système répète une souffrance infinie.",
			"Max, un homme qui avait tout autrefois. Il hurle.",
			"Devant la victime d'une tragédie sans fin, le puzzle de la vérité devient encore plus cruel."
		],
		"spanish": [
			"Akium, el mar de información.",
			"Esta ciudad es movida por el sistema.",
			"Sin embargo, para algunos, el sistema repite un sufrimiento infinito.",
			"Max, un hombre que una vez lo tuvo todo. Él grita.",
			"Ante la víctima de una tragedia sin fin, el rompecabezas de la verdad se vuelve aún más cruel."
		],
		"vietnamese": [
			"Akium, biển thông tin.",
			"Thành phố này vận hành bởi hệ thống.",
			"Tuy nhiên, đối với một số người, hệ thống lặp lại sự đau khổ vô tận.",
			"Max, người đàn ông từng có mọi thứ. Anh ta gào thét.",
			"Trước nạn nhân của bi kịch không hồi kết, câu đố sự thật càng trở nên tàn khốc."
		],
		"thai": [
			"อาเคียม ทะเลแห่งข้อมูล",
			"เมืองนี้ขับเคลื่อนด้วยระบบ",
			"แต่สำหรับบางคน ระบบกลับย้ำวนความเจ็บปวดอันไร้ที่สิ้นสุด",
			"แม็กซ์ ชายผู้เคยมีทุกสิ่ง เขากรีดร้อง",
			"เบื้องหน้าเหยื่อโศกนาฏกรรมอันไม่รู้จบ ปริศนาแห่งความจริงกลับโหดร้ายยิ่งขึ้น"
		],
		"hindi": [
			"अकिअम, सूचनाओं का सागर।",
			"यह शहर प्रणाली द्वारा संचालित है।",
			"हालाँकि, कुछ लोगों के लिए, प्रणाली अंतहीन पीड़ा को दोहराती है।",
			"मैक्स, एक आदमी जिसके पास कभी सब कुछ था। वह चीखता है।",
			"अंतहीन त्रासदी के शिकार के सामने, सच्चाई की पहेली और भी क्रूर हो जाती है।"
		]
	}
} as const;
