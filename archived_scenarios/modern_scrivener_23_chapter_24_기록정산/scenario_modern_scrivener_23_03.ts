export const scenario_modern_scrivener_23_03 = {
	"scenario_id": "modern_scrivener_23_03",
	"order": 3,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"ren": {
			"id": "mon_ff398cb9-43e1-44ff-acbe-3d45a3bc6997",
			"name": {
				"korean": "렌",
				"english": "Ren",
				"japanese": "レン",
				"chinese": "仁",
				"french": "Ren",
				"spanish": "Ren",
				"vietnamese": "Ren",
				"thai": "เร็น",
				"hindi": "रेन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/147a5f29-8f8d-4531-cc9b-f86c9f45f000/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/d1d88aa7-877f-43e6-919b-ee77e6c58e00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "도시의 공기는 낡은 금속과 불안한 데이터 냄새로 가득했다. 전광판은 무의미한 메시지를 토해냈다.",
						"english": "The city air was filled with old metal and unsettling data. The billboard spewed meaningless messages.",
						"japanese": "都市の空気は古い金属と不穏なデータの匂いで満ちていた。電光掲示板は無意味なメッセージを吐き出した。",
						"chinese": "城市的空气中弥漫着旧金属和不安数据的气息。广告牌吐出了毫无意义的信息。",
						"french": "L'air de la ville était rempli de l'odeur de vieux métal et de données inquiétantes. Le panneau d'affichage crachait des messages sans signification.",
						"spanish": "El aire de la ciudad estaba lleno del olor a metal viejo y datos inquietantes. La pantalla escupía mensajes sin sentido.",
						"vietnamese": "Không khí thành phố tràn ngập mùi kim loại cũ và dữ liệu bất ổn. Bảng điện tử nhả ra những thông điệp vô nghĩa.",
						"thai": "อากาศในเมืองเต็มไปด้วยกลิ่นโลหะเก่าและข้อมูลที่น่ากังวล ป้ายไฟพ่นข้อความที่ไม่มีความหมาย",
						"hindi": "शहर की हवा पुराने धातु और अशांत डेटा की गंध से भरी थी। बिलबोर्ड ने अर्थहीन संदेश उगल दिए।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "저건 또 뭐야? 암호문인가?",
						"english": "What's that now? Is it a cipher?",
						"japanese": "またあれか？暗号文か？",
						"chinese": "那又是什么？是密码吗？",
						"french": "C'est quoi ça encore ? Un code ?",
						"spanish": "¿Qué es eso ahora? ¿Es un cifrado?",
						"vietnamese": "Cái gì nữa đây? Có phải mật mã không?",
						"thai": "นั่นอะไรอีกล่ะ? รหัสลับเหรอ?",
						"hindi": "वह क्या है अब? क्या यह एक सिफर है?"
					}
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "매일 저런 게 떠. 지겹지도 않나.",
						"english": "That kind of thing pops up daily. Don't they get sick of it?",
						"japanese": "毎日ああいうのが出る。うんざりしないのか。",
						"chinese": "每天都出现那种东西。他们不觉得烦吗？",
						"french": "Ce genre de choses apparaît tous les jours. Ils n'en ont pas marre ?",
						"spanish": "Eso aparece todos los días. ¿No se cansan?",
						"vietnamese": "Ngày nào cũng thấy cái đó. Không chán sao?",
						"thai": "มีแบบนั้นขึ้นมาทุกวัน ไม่เบื่อกันบ้างเหรอ?",
						"hindi": "वह रोज आता है। क्या वे इससे ऊबते नहीं?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						5,
						2
					],
					"speaker": "ren"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "지겹지. 근데… 의미가 없진 않아.",
						"english": "We do get sick of it. But... it's not meaningless.",
						"japanese": "うんざりするさ。でも…意味がないわけじゃない。",
						"chinese": "烦是烦。但是……它并非毫无意义。",
						"french": "Si, on en a marre. Mais... ce n'est pas sans signification.",
						"spanish": "Sí, nos cansamos. Pero... no es sin significado.",
						"vietnamese": "Chán chứ. Nhưng… nó không phải là vô nghĩa.",
						"thai": "เบื่อสิ แต่... มันไม่ใช่ไม่มีความหมาย",
						"hindi": "हाँ, ऊबते हैं। लेकिन... यह अर्थहीन नहीं है।"
					},
					"speaker": "ren"
				},
				{
					"content": {
						"korean": "무슨 소리야?",
						"english": "What do you mean?",
						"japanese": "どういうことだ？",
						"chinese": "什么意思？",
						"french": "Qu'est-ce que tu racontes ?",
						"spanish": "¿Qué quieres decir?",
						"vietnamese": "Ý cậu là gì?",
						"thai": "หมายความว่าไง?",
						"hindi": "क्या मतलब है?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "ren",
					"content": {
						"korean": "누군가한테는… 사형 선고거든.",
						"english": "For some... it's a death sentence.",
						"japanese": "誰かにとっては…死刑宣告だからな。",
						"chinese": "对某些人来说……那可是死刑判决。",
						"french": "Pour certains... c'est une condamnation à mort.",
						"spanish": "Para algunos... es una sentencia de muerte.",
						"vietnamese": "Đối với ai đó… đó là án tử hình.",
						"thai": "สำหรับบางคน... มันคือคำพิพากษาประหารชีวิต",
						"hindi": "कुछ लोगों के लिए... यह मौत की सजा है।"
					},
					"emotion": "sad",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						5,
						2
					],
					"speaker": "ren"
				},
				{
					"speaker": "ren",
					"content": {
						"korean": "저 메시지들. 무작위 같지?",
						"english": "Those messages. Seem random, don't they?",
						"japanese": "あのメッセージ、ランダムみたいじゃない？",
						"chinese": "那些信息。看起来是随机的，不是吗？",
						"french": "Ces messages. Ils semblent aléatoires, n'est-ce pas ?",
						"spanish": "Esos mensajes. Parecen aleatorios, ¿verdad?",
						"vietnamese": "Những tin nhắn đó. Có vẻ ngẫu nhiên phải không?",
						"thai": "ข้อความพวกนั้น. ดูเหมือนสุ่มๆ ใช่ไหม?",
						"hindi": "वो संदेश। बेतरतीब लगते हैं, है ना?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "응. 그냥 시스템 오류 아닌가?",
						"english": "Yeah. Just a system error, isn't it?",
						"japanese": "うん。ただのシステムエラーじゃないの？",
						"chinese": "嗯。不就是系统错误吗？",
						"french": "Oui. C'est juste une erreur système, non ?",
						"spanish": "Sí. ¿No es solo un error del sistema?",
						"vietnamese": "Ừ. Chẳng phải chỉ là lỗi hệ thống sao?",
						"thai": "อืม. ไม่ใช่แค่ข้อผิดพลาดของระบบเหรอ?",
						"hindi": "हाँ। बस एक सिस्टम एरर है, है ना?"
					}
				},
				{
					"speaker": "ren",
					"content": {
						"korean": "오류? 아니. '상환 기한'이야.",
						"english": "Error? No. It's a 'repayment deadline'.",
						"japanese": "エラー？違う。『返済期限』だよ。",
						"chinese": "错误？不。『偿还期限』。",
						"french": "Erreur ? Non. C'est un 'délai de remboursement'.",
						"spanish": "¿Error? No. Es una 'fecha límite de pago'.",
						"vietnamese": "Lỗi? Không. Đó là 'hạn chót hoàn trả'.",
						"thai": "ผิดพลาด? ไม่ใช่. มันคือ 'กำหนดชำระคืน'.",
						"hindi": "त्रुटि? नहीं। यह 'भुगतान की समय सीमा' है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "상환 기한? 뭘 상환해?",
						"english": "Repayment deadline? Repay what?",
						"japanese": "返済期限？何を返済するの？",
						"chinese": "偿还期限？偿还什么？",
						"french": "Délai de remboursement ? Rembourser quoi ?",
						"spanish": "¿Fecha límite de pago? ¿Pagar qué?",
						"vietnamese": "Hạn chót hoàn trả? Hoàn trả cái gì?",
						"thai": "กำหนดชำระคืน? ชำระคืนอะไร?",
						"hindi": "भुगतान की समय सीमा? क्या चुकाना है?"
					},
					"speaker": "character_2"
				},
				{
					"speaker": "ren",
					"content": {
						"korean": "과거의 빚. 약속. 맹세. 시스템은 그걸 절대 잊지 않아.",
						"english": "Debts from the past. Promises. Vows. The system never forgets them.",
						"japanese": "過去の借金。約束。誓い。システムはそれを決して忘れない。",
						"chinese": "过去的债务。承诺。誓言。系统从不忘记这些。",
						"french": "Les dettes du passé. Les promesses. Les vœux. Le système ne les oublie jamais.",
						"spanish": "Deudas del pasado. Promesas. Votos. El sistema nunca los olvida.",
						"vietnamese": "Những món nợ quá khứ. Lời hứa. Lời thề. Hệ thống không bao giờ quên chúng.",
						"thai": "หนี้สินในอดีต. คำสัญญา. คำสาบาน. ระบบไม่มีวันลืมสิ่งเหล่านั้น.",
						"hindi": "अतीत के कर्ज। वादे। शपथ। सिस्टम उन्हें कभी नहीं भूलता।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "말도 안 돼…",
						"english": "That's ridiculous...",
						"japanese": "ありえない…",
						"chinese": "胡说八道…",
						"french": "C'est absurde...",
						"spanish": "Es ridículo...",
						"vietnamese": "Thật vô lý...",
						"thai": "ไร้สาระน่า...",
						"hindi": "यह तो बकवास है..."
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "말이 되지. 여기가 어디인데.",
						"english": "It makes sense. Given where we are.",
						"japanese": "ありえるさ。ここがどこだと思ってるんだ。",
						"chinese": "有道理。这里是什么地方。",
						"french": "Ça a du sens. Vu l'endroit où nous sommes.",
						"spanish": "Tiene sentido. Dado dónde estamos.",
						"vietnamese": "Cũng hợp lý thôi. Chúng ta đang ở đâu cơ chứ.",
						"thai": "มันก็สมเหตุสมผลนะ. ลองคิดดูสิว่าเราอยู่ที่ไหน.",
						"hindi": "यह समझ में आता है। यह जगह ही ऐसी है।"
					},
					"speaker": "ren"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "ren",
					"spot": [
						5,
						2
					]
				},
				{
					"content": {
						"korean": "시스템의 '정의'는 좀 웃겨. 인간의 기준으로 보면.",
						"english": "The system's 'justice' is a bit funny. From a human perspective.",
						"japanese": "システムの『正義』って、人間から見るとちょっとおかしいんだ。",
						"chinese": "系统的『正义』有点好笑。以人类的标准来看。",
						"french": "La 'justice' du système est un peu drôle. Du point de vue humain.",
						"spanish": "La 'justicia' del sistema es un poco graciosa. Desde una perspectiva humana.",
						"vietnamese": "'Công lý' của hệ thống hơi buồn cười. Theo tiêu chuẩn của con người.",
						"thai": "'ความยุติธรรม' ของระบบมันตลกดีนะ. ถ้ามองในมุมของมนุษย์.",
						"hindi": "सिस्टम का 'न्याय' थोड़ा अजीब है। इंसानी नज़रिए से देखें तो।"
					},
					"speaker": "ren",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "뭐가 정의인데? 저런 메시지가?",
						"english": "What's justice? Those messages?",
						"japanese": "何が正義だって？あのメッセージが？",
						"chinese": "什么正义？那些信息吗？",
						"french": "Qu'est-ce que la justice ? Ces messages ?",
						"spanish": "¿Qué es justicia? ¿Esos mensajes?",
						"vietnamese": "Cái gì là công lý? Những tin nhắn đó ư?",
						"thai": "อะไรคือความยุติธรรม? ข้อความพวกนั้นเหรอ?",
						"hindi": "क्या न्याय है? वो संदेश?"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "ren",
					"content": {
						"korean": "응. '갚아야 할 것'은 무조건 갚아야 한다는 정의.",
						"english": "Yeah. The justice that says 'what must be repaid, must be repaid no matter what'.",
						"japanese": "うん。『返すべきもの』は無条件に返すべきだという正義。",
						"chinese": "嗯。就是『必须偿还的，无论如何都要偿还』的这种正义。",
						"french": "Oui. La justice qui dit que 'ce qui doit être remboursé, doit l'être quoi qu'il arrive'.",
						"spanish": "Sí. La justicia que dice 'lo que debe ser pagado, debe ser pagado sin importar qué'.",
						"vietnamese": "Ừ. Công lý kiểu 'cái gì phải trả thì nhất định phải trả'.",
						"thai": "ใช่. ความยุติธรรมที่บอกว่า 'สิ่งที่จะต้องชดใช้ ต้องชดใช้ไม่ว่าจะเกิดอะไรขึ้น'.",
						"hindi": "हाँ। वही न्याय जो कहता है कि 'जो चुकाना है, उसे हर हाल में चुकाना ही होगा'।"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "ren",
					"content": {
						"korean": "가장 비참한 방식, 가장 황당한 이유로 청구되는 거지.",
						"english": "Charged in the most tragic way, for the most absurd reason.",
						"japanese": "最も悲惨な方法で、最も途方もない理由で請求される。",
						"chinese": "以最悲惨的方式，最荒谬的理由被追究。",
						"french": "Facturé de la manière la plus misérable, pour la raison la plus absurde.",
						"spanish": "Cobrado de la manera más miserable, por la razón más absurda.",
						"vietnamese": "Bị tính phí theo cách thảm hại nhất, vì lý do vô lý nhất.",
						"thai": "ถูกเรียกเก็บด้วยวิธีที่อนาถที่สุด ด้วยเหตุผลที่เหลวไหลที่สุด",
						"hindi": "सबसे दुखद तरीके से, सबसे बेतुके कारण से शुल्क लिया जाता है।"
					}
				},
				{
					"speaker": "character_3",
					"content": {
						"korean": "설마… 우리 마을도 그 빚 때문이었어?",
						"english": "No way... was our village also because of that debt?",
						"japanese": "まさか… 私たちの村もその借金のせいだったの？",
						"chinese": "难道… 我们的村庄也是因为那笔债务吗？",
						"french": "Non... notre village était aussi à cause de cette dette ?",
						"spanish": "¿No... nuestro pueblo también fue por esa deuda?",
						"vietnamese": "Không thể nào... làng của chúng ta cũng vì món nợ đó sao?",
						"thai": "ไม่จริงน่า... หมู่บ้านของเราก็เป็นเพราะหนี้นั่นเหรอ?",
						"hindi": "कहीं... हमारा गाँव भी उस कर्ज की वजह से तो नहीं था?"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "ren",
					"content": {
						"korean": "…누군가의 맹세. 시스템은 그걸 지켜본 것뿐.",
						"english": "...Someone's vow. The system merely observed it.",
						"japanese": "…誰かの誓い。システムはただそれを見守っただけだ。",
						"chinese": "…某个人的誓言。系统只是旁观了而已。",
						"french": "...Le serment de quelqu'un. Le système n'a fait que l'observer.",
						"spanish": "...El juramento de alguien. El sistema solo lo observó.",
						"vietnamese": "...Lời thề của ai đó. Hệ thống chỉ theo dõi mà thôi.",
						"thai": "...คำสาบานของใครบางคน ระบบเพียงแค่เฝ้าดูเท่านั้น",
						"hindi": "…किसी की कसम। सिस्टम ने बस उसे देखा।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "아니면… 갑자기 몸이 아프거나, 잊었던 서류가 떠오르거나.",
						"english": "Or... suddenly falling ill, or remembering forgotten documents.",
						"japanese": "あるいは… 急に体が悪くなったり、忘れていた書類を思い出したり。",
						"chinese": "或者… 突然身体不适，或是想起被遗忘的文件。",
						"french": "Ou... tomber soudainement malade, ou se souvenir de documents oubliés.",
						"spanish": "O... de repente enfermar, o recordar documentos olvidados.",
						"vietnamese": "Hoặc... đột nhiên đổ bệnh, hoặc nhớ ra những tài liệu đã quên.",
						"thai": "หรือไม่ก็... จู่ๆ ก็ป่วย หรือนึกถึงเอกสารที่ลืมไปแล้ว",
						"hindi": "या... अचानक बीमार पड़ना, या भूले हुए दस्तावेज़ याद आना।"
					},
					"speaker": "ren",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"spot": [
						5,
						2
					],
					"speaker": "ren",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이 시스템은 완벽해. 빠져나갈 구멍 없어.",
						"english": "This system is perfect. There's no escaping it.",
						"japanese": "このシステムは完璧だ。逃げ道はない。",
						"chinese": "这个系统是完美的。无处可逃。",
						"french": "Ce système est parfait. Pas d'échappatoire.",
						"spanish": "Este sistema es perfecto. No hay escapatoria.",
						"vietnamese": "Hệ thống này hoàn hảo. Không có kẽ hở nào để thoát.",
						"thai": "ระบบนี้สมบูรณ์แบบ ไม่มีทางหนีรอดได้",
						"hindi": "यह सिस्टम एकदम सही है। कोई बच निकलने का रास्ता नहीं।"
					},
					"speaker": "ren"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 어떻게 해야 하는데?",
						"english": "Then what should we do?",
						"japanese": "じゃあどうすればいいんだ？",
						"chinese": "那我们该怎么办？",
						"french": "Alors, que doit-on faire ?",
						"spanish": "¿Entonces qué debemos hacer?",
						"vietnamese": "Vậy chúng ta phải làm gì?",
						"thai": "แล้วเราควรทำยังไงล่ะ?",
						"hindi": "तो फिर हमें क्या करना चाहिए?"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "방법? 없어. 그냥… 기다리는 거지. 자신의 차례를.",
						"english": "A way? There's none. Just... wait. For your turn.",
						"japanese": "方法？ない。ただ…待つだけだ。自分の番を。",
						"chinese": "办法？没有。只是…等待。等待自己的回合。",
						"french": "Un moyen ? Il n'y en a pas. Juste... attendre. Son tour.",
						"spanish": "¿Una forma? No hay ninguna. Solo... esperar. Tu turno.",
						"vietnamese": "Cách ư? Không có. Chỉ là... chờ đợi. Đến lượt của mình.",
						"thai": "ทางออกเหรอ? ไม่มีหรอก แค่...รอคอย. รอคอยตาของตัวเอง",
						"hindi": "कोई तरीका? नहीं। बस... इंतज़ार करना। अपनी बारी का।"
					},
					"speaker": "ren"
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "포기하라는 거야?",
						"english": "Are you telling me to give up?",
						"japanese": "諦めろってこと？",
						"chinese": "你是要我放弃吗？",
						"french": "Tu me dis d'abandonner ?",
						"spanish": "¿Me dices que me rinda?",
						"vietnamese": "Anh bảo tôi bỏ cuộc sao?",
						"thai": "จะให้ฉันยอมแพ้เหรอ?",
						"hindi": "क्या तुम मुझे हार मानने को कह रहे हो?"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "포기가 아니라 현실이야. 곧 그 '정의'의 집행자가 나타날 거야.",
						"english": "It's not giving up, it's reality. Soon, the enforcer of 'justice' will appear.",
						"japanese": "諦めじゃない、現実だ。まもなく、その『正義』の執行者が現れるだろう。",
						"chinese": "这不是放弃，这是现实。很快，那个‘正义’的执行者就会出现。",
						"french": "Ce n'est pas abandonner, c'est la réalité. Bientôt, l'exécuteur de la 'justice' apparaîtra.",
						"spanish": "No es rendirse, es la realidad. Pronto, el ejecutor de la 'justicia' aparecerá.",
						"vietnamese": "Không phải bỏ cuộc, mà là thực tế. Chẳng mấy chốc, kẻ thi hành 'công lý' sẽ xuất hiện.",
						"thai": "ไม่ใช่การยอมแพ้ แต่มันคือความเป็นจริง ไม่ช้าไม่นาน ผู้พิทักษ์ 'ความยุติธรรม' จะปรากฏตัว",
						"hindi": "यह हार मानना नहीं, यह हकीकत है। जल्द ही, 'न्याय' का वो निष्पादक प्रकट होगा।"
					},
					"speaker": "ren",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "정의는… 지켜져야 하니까.",
						"english": "Because justice... must be upheld.",
						"japanese": "正義は…守られるべきだから。",
						"chinese": "因为正义…必须得到维护。",
						"french": "Parce que la justice... doit être maintenue.",
						"spanish": "Porque la justicia... debe ser mantenida.",
						"vietnamese": "Vì công lý... phải được duy trì.",
						"thai": "เพราะความยุติธรรม... ต้องได้รับการพิทักษ์",
						"hindi": "क्योंकि न्याय... कायम रहना चाहिए।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "네가… 그 집행자냐?",
						"english": "You… are you the Enforcer?",
						"japanese": "「お前が…あの執行者か？」",
						"chinese": "你…就是那个执行者？",
						"french": "Toi… tu es l'Exécuteur ?",
						"spanish": "¿Tú… eres el Ejecutor?",
						"vietnamese": "Ngươi… là Kẻ Thi Hành đó à?",
						"thai": "เจ้า… คือผู้พิพากษาคนนั้นหรือ?",
						"hindi": "तुम… वही निष्पादक हो?"
					}
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…해치웠나?",
						"english": "…Did we get them?",
						"japanese": "「…やったか？」",
						"chinese": "…解决了吗？",
						"french": "…On les a eu ?",
						"spanish": "¿Los eliminamos?",
						"vietnamese": "…Xử lý xong rồi à?",
						"thai": "…จัดการแล้วหรือ?",
						"hindi": "…क्या हमने उन्हें खत्म कर दिया?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "크하핫… 빚은… 사라지지 않아… 시스템은… 영원하다…",
						"english": "Kwahaha… Debts… never disappear… The system… is eternal…",
						"japanese": "「クハハハ…借りは…消えない…システムは…永遠だ…」",
						"chinese": "哈哈哈…债务…永不消失…系统…是永恒的…",
						"french": "Hahaha… Les dettes… ne disparaissent jamais… Le système… est éternel…",
						"spanish": "Jajaja… Las deudas… nunca desaparecen… El sistema… es eterno…",
						"vietnamese": "Khahahah… Nợ nần… không bao giờ biến mất… Hệ thống… là vĩnh cửu…",
						"thai": "คิกคิกคิก… หนี้… ไม่เคยหายไป… ระบบ… เป็นนิรันดร์…",
						"hindi": "क्वाहाहा… ऋण… कभी गायब नहीं होते… प्रणाली… शाश्वत है…"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_1",
					"content": {
						"korean": "저게 무슨 소리야… 시스템이… 끝이 아니라고?",
						"english": "What was that… The system… isn't over?",
						"japanese": "「あれは何だ…システムは…終わりじゃないと？」",
						"chinese": "那是什么意思…系统…还没结束？",
						"french": "Qu'est-ce que c'était… Le système… n'est pas fini ?",
						"spanish": "¿Qué fue eso… El sistema… no ha terminado?",
						"vietnamese": "Đó là tiếng gì vậy… Hệ thống… vẫn chưa kết thúc sao?",
						"thai": "นั่นมันอะไร… ระบบ… ยังไม่จบเหรอ?",
						"hindi": "वह क्या था… प्रणाली… खत्म नहीं हुई?"
					}
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						5,
						2
					],
					"speaker": "ren"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "끝? 아니. 이제 시작이야. 빚을 진 자는… 또 다른 빚을 만들 뿐.",
						"english": "The end? No. This is just the beginning. Those in debt… only create more debt.",
						"japanese": "終わり？いや、始まりに過ぎない。借りを負った者は…新たな借りを生むだけだ。",
						"chinese": "结束？不，这只是开始。负债之人……只会制造更多债务。",
						"french": "La fin ? Non, ce n'est que le début. Ceux qui ont une dette… ne font qu'en créer d'autres.",
						"spanish": "¿El final? No. Esto es solo el principio. Aquellos en deuda… solo crean más deuda.",
						"vietnamese": "Kết thúc? Không. Đây chỉ mới là khởi đầu. Kẻ mang nợ… chỉ tạo ra thêm nợ mà thôi.",
						"thai": "จบเหรอ? ไม่หรอก นี่แค่เริ่มต้น ผู้มีหนี้… ย่อมสร้างหนี้ใหม่เท่านั้น",
						"hindi": "अंत? नहीं। यह तो बस शुरुआत है। कर्जदार… केवल और कर्ज ही बनाते हैं।"
					},
					"speaker": "ren"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "쓰러진 {random_boss}. 그러나 도시의 전광판은 여전히 섬뜩한 메시지를 띄웠다. 끝나지 않은 정산의 시대.",
						"english": "{random_boss} fell. Yet, the city's billboards still displayed an ominous message. The era of unsettled accounts was far from over.",
						"japanese": "倒れた{random_boss}。しかし、都市の電光掲示板は依然として不気味なメッセージを表示していた。終わらない清算の時代。",
						"chinese": "倒下的{random_boss}。然而，城市的广告牌仍显示着令人毛骨悚然的信息。清算时代远未结束。",
						"french": "{random_boss} est tombé. Pourtant, les panneaux d'affichage de la ville affichaient toujours un message inquiétant. L'ère des comptes impayés était loin d'être terminée.",
						"spanish": "{random_boss} cayó. Sin embargo, los letreros luminosos de la ciudad seguían mostrando un mensaje inquietante. La era de las cuentas pendientes estaba lejos de terminar.",
						"vietnamese": "{random_boss} gục ngã. Thế nhưng, bảng điện tử của thành phố vẫn hiển thị thông điệp rùng rợn. Thời đại thanh toán chưa kết thúc.",
						"thai": "{random_boss} ล้มลง ทว่า ป้ายไฟของเมืองยังคงแสดงข้อความน่าขนลุก ยุคแห่งการชำระสะสางที่ยังไม่สิ้นสุด",
						"hindi": "{random_boss} गिर गया। फिर भी, शहर के बिलबोर्ड अभी भी एक अशुभ संदेश प्रदर्शित कर रहे थे। हिसाब-किताब के अनसुलझे युग का अंत नहीं हुआ था।"
					},
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "…우리는 아직 아무것도 모른다.",
						"english": "…We still know nothing.",
						"japanese": "…我々はまだ何も知らない。",
						"chinese": "……我们仍然一无所知。",
						"french": "…Nous ne savons encore rien.",
						"spanish": "…Todavía no sabemos nada.",
						"vietnamese": "…Chúng ta vẫn chưa biết gì cả.",
						"thai": "…เรายังไม่รู้อะไรเลย",
						"hindi": "…हमें अभी भी कुछ नहीं पता।"
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"speaker": "ren",
					"spot": [
						5,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "모든 빚은 청산된다. 이것이 이 도시의 유일한 규칙.",
						"english": "All debts are cleared. This is the city's only rule.",
						"japanese": "「すべての借りは清算される。それがこの街の唯一のルールだ。」",
						"chinese": "所有债务都将清算。这是这座城市唯一的规则。",
						"french": "Toutes les dettes sont réglées. C'est la seule règle de cette ville.",
						"spanish": "Todas las deudas se saldan. Esta es la única regla de esta ciudad.",
						"vietnamese": "Mọi món nợ đều được thanh toán. Đây là quy tắc duy nhất của thành phố này.",
						"thai": "หนี้ทั้งหมดจะถูกชำระ นี่คือกฎเดียวของเมืองนี้",
						"hindi": "सभी ऋण चुका दिए जाते हैं। यह इस शहर का एकमात्र नियम है।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "누가 그 규칙을 정했는데? 대체 왜?",
						"english": "Who made that rule? And why?",
						"japanese": "「誰がそのルールを決めたんだ？一体なぜ？」",
						"chinese": "谁定的规矩？到底为什么？",
						"french": "Qui a fait cette règle ? Et pourquoi ?",
						"spanish": "¿Quién puso esa regla? ¿Y por qué?",
						"vietnamese": "Ai đã đặt ra quy tắc đó? Tại sao?",
						"thai": "ใครเป็นคนกำหนดกฎนั้น? และทำไม?",
						"hindi": "किसने बनाया वह नियम? और क्यों?"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "질문은… 어리석은 거야. 그저 갚으면 돼.",
						"english": "Questions… are foolish. Just pay up.",
						"japanese": "「質問は…愚かだ。ただ返せばいい。」",
						"chinese": "提问…是愚蠢的。只需偿还即可。",
						"french": "Les questions… sont stupides. Il suffit de payer.",
						"spanish": "Las preguntas… son necias. Solo paga.",
						"vietnamese": "Đặt câu hỏi… thật ngu ngốc. Chỉ cần trả nợ thôi.",
						"thai": "คำถาม… มันโง่เง่า แค่จ่ายคืนซะ",
						"hindi": "सवाल… मूर्खतापूर्ण हैं। बस चुका दो।"
					},
					"speaker": "ren",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "말 잘했군. 너희의 빚도… 지금부터 정산한다.",
						"english": "Well said. Your debts, too… will be settled now.",
						"japanese": "「よく言った。お前たちの借りも…今から精算する。」",
						"chinese": "说得好。你们的债…现在也该清算了。",
						"french": "Bien dit. Vos dettes aussi… seront réglées maintenant.",
						"spanish": "Bien dicho. Vuestras deudas también… se saldarán ahora.",
						"vietnamese": "Nói hay lắm. Nợ của các ngươi… cũng sẽ được thanh toán ngay bây giờ.",
						"thai": "พูดได้ดี หนี้ของพวกแก… จะถูกชำระเดี๋ยวนี้",
						"hindi": "ठीक कहा। तुम्हारे ऋण भी… अब चुकाए जाएंगे।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "우리는 아무 빚도 없어!",
						"english": "We owe nothing!",
						"japanese": "「我々に何の借りもない！」",
						"chinese": "我们没有任何债务！",
						"french": "Nous n'avons aucune dette !",
						"spanish": "¡No debemos nada!",
						"vietnamese": "Chúng tôi không nợ gì cả!",
						"thai": "เราไม่มีหนี้อะไรทั้งนั้น!",
						"hindi": "हमारा कोई ऋण नहीं है!"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이곳에 발을 디딘 것 자체가… 빚이다.",
						"english": "Just setting foot in this place… is a debt.",
						"japanese": "「この地に足を踏み入れたこと自体が…借りだ。」",
						"chinese": "踏入此地本身…就是一种债务。",
						"french": "Mettre un pied ici… est déjà une dette.",
						"spanish": "Poner un pie en este lugar… ya es una deuda.",
						"vietnamese": "Việc đặt chân đến nơi này… đã là một món nợ rồi.",
						"thai": "แค่ก้าวเข้ามาในที่แห่งนี้… ก็เป็นหนี้แล้ว",
						"hindi": "इस जगह कदम रखना ही… एक ऋण है।"
					},
					"speaker": "random_boss"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "하찮은 저항… 너희의 빚은… 여기서 끝난다.",
						"english": "Futile resistance… Your debt… ends here.",
						"japanese": "取るに足らない抵抗… お前たちの借りは… ここで終わる。",
						"chinese": "微不足道的抵抗……你们的债务……到此为止。",
						"french": "Résistance futile… Votre dette… s'arrête ici.",
						"spanish": "Resistencia inútil… Vuestra deuda… termina aquí.",
						"vietnamese": "Kháng cự vô ích… Nợ của các ngươi… kết thúc tại đây.",
						"thai": "การต่อต้านที่ไร้ค่า… หนี้ของพวกเจ้า… สิ้นสุดลงที่นี่",
						"hindi": "तुच्छ प्रतिरोध… तुम्हारा कर्ज… यहीं खत्म होता है।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "아직… 아니야! 다시…!",
						"english": "Not… yet! Again…!",
						"japanese": "まだ… だめだ！もう一度…！",
						"chinese": "还没……不！再来……！",
						"french": "Pas… encore ! Encore… !",
						"spanish": "¡Todavía… no! ¡De nuevo…!",
						"vietnamese": "Chưa… chưa đâu! Lại…!",
						"thai": "ยัง… ไม่ใช่! อีกครั้ง…!",
						"hindi": "अभी… नहीं! फिर से…!"
					},
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "ren",
					"spot": [
						5,
						2
					]
				},
				{
					"content": {
						"korean": "…발버둥 쳐봐야. 시스템은 변하지 않아.",
						"english": "…Struggle as you might. The system won't change.",
						"japanese": "…もがいたところで。システムは変わらない。",
						"chinese": "……再怎么挣扎也没用。系统不会改变。",
						"french": "…Peu importe tes efforts. Le système ne changera pas.",
						"spanish": "…Por mucho que te esfuerces. El sistema no cambiará.",
						"vietnamese": "…Dù có giãy giụa thế nào. Hệ thống cũng sẽ không thay đổi.",
						"thai": "…ดิ้นรนไปก็เท่านั้น ระบบไม่เปลี่ยนแปลงหรอก",
						"hindi": "…कितना भी संघर्ष कर लो। सिस्टम नहीं बदलेगा।"
					},
					"speaker": "ren",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "전광판의 글자가 붉게 빛났다. '상환 실패'. 도시의 심장은 냉혹하게 울렸다.",
						"english": "The letters on the billboard glowed red. 'Repayment Failed'. The city's heart resonated mercilessly.",
						"japanese": "電光掲示板の文字が赤く光った。「返済失敗」。都市の心臓は冷酷に鳴り響いた。",
						"chinese": "广告牌上的字迹发出红光。“偿还失败”。城市的心脏冷酷地跳动着。",
						"french": "Les lettres sur le panneau lumineux brillèrent en rouge. « Remboursement Échoué ». Le cœur de la ville résonna sans pitié.",
						"spanish": "Las letras del cartel luminoso brillaron en rojo. 'Pago Fallido'. El corazón de la ciudad latió sin piedad.",
						"vietnamese": "Chữ trên bảng điện tử phát sáng đỏ rực. 'Thanh toán thất bại'. Trái tim thành phố đập vang một cách lạnh lùng.",
						"thai": "ตัวอักษรบนป้ายไฟเปล่งประกายสีแดง 'การชำระคืนล้มเหลว' หัวใจของเมืองส่งเสียงสะท้อนอย่างอำมหิต",
						"hindi": "बिलबोर्ड पर अक्षर लाल चमक उठे। 'चुकाने में विफल'। शहर का दिल बेरहमी से धड़क उठा।"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"도시의 심장은 언제나 뛰고 있었다.",
			"아니, 도시가 아니었다. 낡은 맹세에 갇힌 거대한 장기였다.",
			"전광판의 글자들이 춤을 춘다. 그것은 오류인가, 아니면… 경고인가.",
			"누군가의 '상환 기한'. 그리고 곧, 모두의 빚이 청구될 시간이었다."
		],
		"english": [
			"The city's heart always beat.",
			"No, it wasn't a city. It was a colossal organ, trapped by an ancient vow.",
			"The billboard's letters dance. Is it an error, or... a warning?",
			"Someone's 'repayment deadline'. Soon, everyone's debts would be collected."
		],
		"japanese": [
			"街の心臓は常に脈打っていた。",
			"いや、都市ではなかった。それは古き誓いに囚われた巨大な臓器だった。",
			"電光掲示板の文字が踊る。それはエラーか、それとも…警告か。",
			"誰かの「償還期限」。そして間もなく、皆の負債が請求される時間だった。"
		],
		"chinese": [
			"城市的脉搏从未停止。",
			"不，那不是城市。它是一个被旧誓言束缚的巨大器官。",
			"广告牌上的文字在跳舞。那是一个错误，还是……一个警告？",
			"某个人的“偿还期限”。很快，就是所有人债务被追讨的时候了。"
		],
		"french": [
			"Le cœur de la ville battait toujours.",
			"Non, ce n'était pas une ville. C'était un organe colossal, piégé par un ancien serment.",
			"Les lettres sur le panneau d'affichage dansent. Est-ce une erreur, ou... un avertissement ?",
			"La 'date limite de remboursement' de quelqu'un. Et bientôt, il serait temps de recouvrer les dettes de tous."
		],
		"spanish": [
			"El corazón de la ciudad siempre latía.",
			"No, no era una ciudad. Era un órgano colosal, atrapado por una antigua promesa.",
			"Las letras en la pantalla bailan. ¿Es un error, o... una advertencia?",
			"La 'fecha límite de pago' de alguien. Y pronto, sería el momento de cobrar las deudas de todos."
		],
		"vietnamese": [
			"Trái tim thành phố luôn đập.",
			"Không, đó không phải là thành phố. Đó là một cơ quan khổng lồ, bị mắc kẹt bởi một lời thề cổ xưa.",
			"Các chữ cái trên bảng điện tử nhảy múa. Đó là một lỗi, hay… một lời cảnh báo?",
			"'Hạn chót thanh toán' của ai đó. Và chẳng mấy chốc, đã đến lúc mọi món nợ của mọi người được đòi."
		],
		"thai": [
			"หัวใจของเมืองเต้นอยู่เสมอ",
			"ไม่สิ มันไม่ใช่เมือง มันคืออวัยวะขนาดใหญ่ที่ถูกกักขังด้วยคำสาบานเก่าแก่",
			"ตัวอักษรบนป้ายไฟเต้นระบำ มันคือข้อผิดพลาด หรือ... คำเตือน?",
			"'กำหนดชำระคืน' ของใครบางคน และในไม่ช้า ก็ถึงเวลาที่หนี้ของทุกคนจะถูกเรียกเก็บ"
		],
		"hindi": [
			"शहर का दिल हमेशा धड़कता रहा।",
			"नहीं, यह एक शहर नहीं था। यह एक विशाल अंग था, एक पुरानी प्रतिज्ञा में फंसा हुआ।",
			"बिलबोर्ड पर अक्षर नाचते हैं। क्या यह एक त्रुटि है, या... एक चेतावनी है?",
			"किसी की 'चुकौती की समय सीमा'। और जल्द ही, सभी के कर्ज वसूलने का समय था।"
		]
	}
} as const;
