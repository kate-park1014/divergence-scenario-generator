export const scenario_modern_ledger_29_05 = {
	"scenario_id": "modern_ledger_29_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "modern",
	"actors": {
		"echo": {
			"id": "mon_57f2edb8-aa81-4ce7-beed-ab009cd2ff35",
			"name": {
				"korean": "에코",
				"english": "Echo",
				"japanese": "エコー",
				"chinese": "艾可",
				"french": "Écho",
				"spanish": "Eco",
				"vietnamese": "Echo",
				"thai": "เอคโค่",
				"hindi": "इको"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/da48e2c2-6733-4f65-f8b6-f197af4ff700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/e90605b9-372f-4bf1-cdec-56a2fdef0800/public"
		}
	},
	"boss": {
		"pool_id": "pool_DigitalKing_Ledger_V1"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "Max가 지시한 서버에 도착했다. 어딘가 기묘한 정적이 흘렀다.",
						"english": "Arrived at the server Max designated. An odd silence hung in the air.",
						"japanese": "マックスが指示したサーバーに到着した。どこか奇妙な静寂が流れていた。",
						"chinese": "到达了Max指定的服务器。弥漫着一种奇异的寂静。",
						"french": "Arrivé au serveur désigné par Max. Un étrange silence planait dans l'air.",
						"spanish": "Llegué al servidor que Max designó. Un extraño silencio flotaba en el aire.",
						"vietnamese": "Đã đến máy chủ Max chỉ định. Một sự tĩnh lặng kỳ lạ bao trùm.",
						"thai": "มาถึงเซิร์ฟเวอร์ที่แม็กซ์กำหนดแล้ว ความเงียบงันแปลกๆ แผ่ซ่านไปทั่ว",
						"hindi": "मैक्स द्वारा निर्दिष्ट सर्वर पर पहुंचा। हवा में एक अजीब सी खामोशी छाई हुई थी।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "…이상해. 너무 조용해.",
						"english": "...Strange. It's too quiet.",
						"japanese": "…おかしい。静かすぎる。",
						"chinese": "…奇怪。太安静了。",
						"french": "...Bizarre. C'est trop silencieux.",
						"spanish": "...Extraño. Está demasiado tranquilo.",
						"vietnamese": "...Lạ thật. Quá yên tĩnh.",
						"thai": "...แปลกจัง เงียบเกินไป",
						"hindi": "...अजीब है। बहुत खामोश है।"
					}
				},
				{
					"type": "direction",
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "echo"
				},
				{
					"content": {
						"korean": "왔구나… 여긴 함정이야. Max… 그가 우릴 속였어.",
						"english": "You're here... It's a trap. Max... He tricked us.",
						"japanese": "来たな…ここは罠だ。マックス…彼が俺たちを騙した。",
						"chinese": "你来了…这里是陷阱。麦克斯…他骗了我们。",
						"french": "Tu es là... C'est un piège. Max... Il nous a trompés.",
						"spanish": "Llegaste... Es una trampa. Max... Nos engañó.",
						"vietnamese": "Ngươi đến rồi... Đây là cái bẫy. Max... Hắn đã lừa chúng ta.",
						"thai": "มาแล้ว... ที่นี่คือกับดัก แม็กซ์... เขาหลอกเรา",
						"hindi": "तुम आ गए... यह एक जाल है। मैक्स... उसने हमें धोखा दिया।"
					},
					"speaker": "echo",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "Max가? 그럴 리가…!",
						"english": "Max? No way...!",
						"japanese": "マックスが？まさか…！",
						"chinese": "麦克斯？不可能…！",
						"french": "Max ? Impossible... !",
						"spanish": "¿Max? ¡Imposible...!",
						"vietnamese": "Max ư? Không thể nào...!",
						"thai": "แม็กซ์? ไม่จริงน่า...!",
						"hindi": "मैक्स? ऐसा नहीं हो सकता...!"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "나한테 계속 이상한 메시지가 왔었어. '돌아가라'고… 기시감이 너무 강렬해서 무시할 수가 없었어.",
						"english": "I kept getting strange messages. 'Turn back'... The déjà vu was too strong to ignore.",
						"japanese": "ずっと奇妙なメッセージが来てたんだ。『戻れ』って…既視感が強すぎて無視できなかった。",
						"chinese": "我一直收到奇怪的消息。‘回去’…那种似曾相识的感觉太强烈了，无法忽视。",
						"french": "Je n'arrêtais pas de recevoir d'étranges messages. 'Reviens'... Le déjà-vu était trop fort pour être ignoré.",
						"spanish": "Seguía recibiendo mensajes extraños. 'Regresa'... El déjà vu era demasiado fuerte para ignorarlo.",
						"vietnamese": "Tôi liên tục nhận được những tin nhắn lạ. 'Quay lại'... Cảm giác thân quen quá mạnh mẽ nên không thể bỏ qua.",
						"thai": "ฉันได้รับข้อความแปลกๆ ตลอด 'กลับไป'... ความรู้สึกคุ้นเคยมันแรงจนเมินเฉยไม่ได้",
						"hindi": "मुझे लगातार अजीब मैसेज आते रहे। 'वापस जाओ'... déjà vu इतना मज़बूत था कि मैं इसे अनदेखा नहीं कर सका।"
					},
					"speaker": "echo",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "그게… Max의 경고였다고?",
						"english": "That was... Max's warning?",
						"japanese": "それが…マックスの警告だったって言うのか？",
						"chinese": "那是…麦克斯的警告吗？",
						"french": "C'était... l'avertissement de Max ?",
						"spanish": "¿Esa fue... la advertencia de Max?",
						"vietnamese": "Đó là... lời cảnh báo của Max ư?",
						"thai": "นั่นมัน... คำเตือนของแม็กซ์เหรอ?",
						"hindi": "वह... मैक्स की चेतावनी थी?"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "시스템이… 날 조작하려 해. 하지만 저항할 거야. 마지막까지….",
						"english": "The system... is trying to manipulate me. But I'll resist. To the very end...",
						"japanese": "システムが…俺を操ろうとしている。だが、抵抗する。最後まで…。",
						"chinese": "系统…想操纵我。但我会反抗。直到最后一刻…。",
						"french": "Le système... essaie de me manipuler. Mais je résisterai. Jusqu'au bout...",
						"spanish": "El sistema... intenta manipularme. Pero resistiré. Hasta el final...",
						"vietnamese": "Hệ thống... đang cố thao túng tôi. Nhưng tôi sẽ chống lại. Cho đến cuối cùng...",
						"thai": "ระบบ... กำลังพยายามบงการฉัน แต่ฉันจะต้านทาน จนถึงที่สุด...",
						"hindi": "सिस्टम... मुझे हेरफेर करने की कोशिश कर रहा है। लेकिन मैं विरोध करूंगा। आखिर तक..."
					},
					"speaker": "echo"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"speaker": "echo",
					"spot": [
						4,
						2
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "echo",
					"content": {
						"korean": "Ledger의 핵심 서버에 연결을 시도하고 있어. 교란시킬 거야.",
						"english": "Attempting to connect to Ledger's core server. I'll disrupt it.",
						"japanese": "Ledgerのコアサーバーへの接続を試みている。撹乱させる。",
						"chinese": "正在尝试连接到Ledger的核心服务器。我会干扰它。",
						"french": "Tentative de connexion au serveur principal de Ledger. Je vais le perturber.",
						"spanish": "Intentando conectar al servidor principal de Ledger. Lo perturbaré.",
						"vietnamese": "Đang cố gắng kết nối đến máy chủ trung tâm của Ledger. Tôi sẽ gây nhiễu nó.",
						"thai": "กำลังพยายามเชื่อมต่อกับเซิร์ฟเวอร์หลักของ Ledger ฉันจะก่อกวนมัน",
						"hindi": "लेजर के मुख्य सर्वर से कनेक्ट करने का प्रयास कर रहा हूँ। मैं इसे बाधित करूँगा।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "성공할 수 있을까? 시스템이 너무 강력해.",
						"english": "Can we succeed? The system is too powerful.",
						"japanese": "成功できるだろうか？システムが強力すぎる。",
						"chinese": "我们能成功吗？系统太强大了。",
						"french": "Pouvons-nous réussir ? Le système est trop puissant.",
						"spanish": "¿Podremos tener éxito? El sistema es demasiado potente.",
						"vietnamese": "Chúng ta có thể thành công không? Hệ thống quá mạnh.",
						"thai": "เราจะสำเร็จไหม? ระบบมันทรงพลังเกินไป",
						"hindi": "क्या हम सफल हो पाएंगे? सिस्टम बहुत शक्तिशाली है।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "echo",
					"content": {
						"korean": "…벽이 너무 두꺼워. 모든 것이 왜곡되고 있어. 내 힘으론….",
						"english": "...The wall is too thick. Everything is distorting. With my power...",
						"japanese": "…壁が厚すぎる。全てが歪んでいく。俺の力では…。",
						"chinese": "…墙壁太厚了。一切都在扭曲。以我的力量…。",
						"french": "...Le mur est trop épais. Tout se déforme. Avec ma force...",
						"spanish": "...La pared es demasiado gruesa. Todo se está distorsionando. Con mi poder...",
						"vietnamese": "...Bức tường quá dày. Mọi thứ đang bị méo mó. Với sức mạnh của tôi...",
						"thai": "...กำแพงหนาเกินไป ทุกอย่างกำลังบิดเบี้ยว ด้วยพลังของฉัน...",
						"hindi": "...दीवार बहुत मोटी है। सब कुछ विकृत हो रहा है। मेरी शक्ति से..."
					}
				},
				{
					"content": {
						"korean": "에코…!",
						"english": "Echo...!",
						"japanese": "エコー…！",
						"chinese": "回声…！",
						"french": "Écho... !",
						"spanish": "¡Eco...!",
						"vietnamese": "Echo...!",
						"thai": "เอคโค่...!",
						"hindi": "इको...!"
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "괜찮아. 아직… 포기할 순 없어. 희생은 무의미하지 않을 거야….",
						"english": "It's okay. I still... can't give up. The sacrifice won't be meaningless...",
						"japanese": "大丈夫。まだ…諦められない。犠牲は無意味じゃない…。",
						"chinese": "没关系。我仍然…不能放弃。牺牲不会毫无意义…。",
						"french": "Ça va. Je ne peux pas encore... abandonner. Le sacrifice ne sera pas inutile...",
						"spanish": "Está bien. Aún... no puedo rendirme. El sacrificio no será en vano...",
						"vietnamese": "Không sao. Tôi vẫn... không thể bỏ cuộc. Sự hy sinh sẽ không vô nghĩa...",
						"thai": "ไม่เป็นไร. ฉันยัง... ยอมแพ้ไม่ได้. การเสียสละจะไม่ไร้ความหมาย...",
						"hindi": "ठीक है। मैं अभी भी... हार नहीं मान सकता। बलिदान व्यर्थ नहीं जाएगा..."
					},
					"speaker": "echo",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"speaker": "echo",
					"type": "direction",
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "echo",
					"content": {
						"korean": "이 서버는… Ledger 자체야. 모든 정보가 여기서 시작돼.",
						"english": "This server… it's Ledger itself. All information originates here.",
						"japanese": "このサーバーは… レジャーそのものだ。全ての情報がここから始まる。",
						"chinese": "这台服务器… 它就是Ledger本身。所有信息都从这里开始。",
						"french": "Ce serveur… c'est Ledger lui-même. Toutes les informations proviennent d'ici.",
						"spanish": "Este servidor… es Ledger en sí mismo. Toda la información se origina aquí.",
						"vietnamese": "Máy chủ này… chính là Ledger. Mọi thông tin đều bắt nguồn từ đây.",
						"thai": "เซิร์ฟเวอร์นี้… คือ Ledger เอง ข้อมูลทั้งหมดเริ่มต้นที่นี่",
						"hindi": "यह सर्वर… खुद लेजर है। सारी जानकारी यहीं से शुरू होती है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "우리가 얻은 모든 단서가 여기서 조작된 거였어?",
						"english": "Were all the clues we found manipulated here?",
						"japanese": "我々が得た全ての手がかりは、ここで操作されていたのか？",
						"chinese": "我们找到的所有线索都是在这里被篡改的吗？",
						"french": "Toutes les pistes que nous avons trouvées ont-elles été manipulées ici ?",
						"spanish": "¿Todas las pistas que encontramos fueron manipuladas aquí?",
						"vietnamese": "Tất cả các manh mối chúng ta tìm được đều bị thao túng ở đây sao?",
						"thai": "เบาะแสทั้งหมดที่เราเจอ ถูกบิดเบือนที่นี่เหรอ?",
						"hindi": "क्या हमें मिले सभी सुराग यहीं से हेरफेर किए गए थे?"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "어쩌면… 우리의 행동 하나하나도 Ledger의 계획 안이었을지도….",
						"english": "Perhaps… every single one of our actions was part of Ledger's plan…",
						"japanese": "もしかしたら… 我々の行動一つ一つも、Ledgerの計画の内だったのかもしれない…",
						"chinese": "也许… 我们的每一个行动都在Ledger的计划之中…",
						"french": "Peut-être… que chacune de nos actions faisait partie du plan de Ledger…",
						"spanish": "Quizás… cada una de nuestras acciones estaba dentro del plan de Ledger…",
						"vietnamese": "Có lẽ… từng hành động của chúng ta cũng nằm trong kế hoạch của Ledger…",
						"thai": "บางที… ทุกการกระทำของเราก็อาจอยู่ในแผนของ Ledger…",
						"hindi": "शायद… हमारी हर एक हरकत लेजर की योजना का हिस्सा थी…"
					},
					"speaker": "echo",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "그럴 리 없어. 우리는 진실을 찾으려고…!",
						"english": "No way. We're trying to find the truth…!",
						"japanese": "そんなはずない。我々は真実を見つけようと…！",
						"chinese": "不可能。我们是为了寻找真相…！",
						"french": "Impossible. Nous cherchons la vérité… !",
						"spanish": "Eso no puede ser. ¡Estamos buscando la verdad…!",
						"vietnamese": "Không thể nào. Chúng ta đang cố tìm sự thật…!",
						"thai": "ไม่จริงหรอก เราพยายามตามหาความจริง…!",
						"hindi": "ऐसा नहीं हो सकता। हम सच खोजने की कोशिश कर रहे हैं…!"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "…그게 더 절망스러운 거야. 노력해도… 아무것도 바꿀 수 없다면.",
						"english": "…That's what's even more despairing. If we try… but can change nothing.",
						"japanese": "…それがもっと絶望的だ。努力しても…何も変えられないのなら。",
						"chinese": "…那才更令人绝望。如果努力了…却什么都改变不了。",
						"french": "…C'est ça le plus désespérant. Si on essaie… mais qu'on ne peut rien changer.",
						"spanish": "…Eso es aún más desesperante. Si nos esforzamos… y no podemos cambiar nada.",
						"vietnamese": "…Đó mới là điều tuyệt vọng hơn. Nếu cố gắng… mà không thể thay đổi được gì.",
						"thai": "…นั่นแหละที่น่าสิ้นหวังกว่า ถ้าพยายามแล้ว…แต่เปลี่ยนอะไรไม่ได้เลย",
						"hindi": "…वही और भी निराशाजनक है। अगर हम कोशिश करें… पर कुछ भी न बदल पाएं।"
					},
					"speaker": "echo",
					"emotion": "sad",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"speaker": "echo",
					"type": "direction",
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "echo",
					"content": {
						"korean": "Ledger가… 점점 더 강력해지고 있어. 모든 걸 집어삼킬 거야.",
						"english": "Ledger… is growing stronger. It will devour everything.",
						"japanese": "Ledgerが…ますます強力になっている。全てを飲み込むだろう。",
						"chinese": "Ledger… 变得越来越强大了。它会吞噬一切。",
						"french": "Ledger… devient de plus en plus puissant. Il va tout dévorer.",
						"spanish": "Ledger… se está volviendo más fuerte. Lo devorará todo.",
						"vietnamese": "Ledger… đang ngày càng mạnh hơn. Nó sẽ nuốt chửng mọi thứ.",
						"thai": "Ledger… กำลังแข็งแกร่งขึ้นเรื่อยๆ มันจะกลืนกินทุกสิ่ง",
						"hindi": "लेजर… और भी शक्तिशाली होता जा रहा है। वह सब कुछ निगल जाएगा।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "멈춰야 해. 여기서 끝내야 해.",
						"english": "We have to stop it. It has to end here.",
						"japanese": "止めなければ。ここで終わらせるんだ。",
						"chinese": "必须阻止它。必须在这里结束。",
						"french": "Il faut l'arrêter. Il faut que ça se termine ici.",
						"spanish": "Tenemos que detenerlo. Tiene que terminar aquí.",
						"vietnamese": "Phải dừng lại. Phải kết thúc ở đây.",
						"thai": "ต้องหยุดมัน ต้องจบที่นี่",
						"hindi": "इसे रोकना होगा। यहीं पर खत्म करना होगा।"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "내 마지막 힘을 쓸게. 잠시… 틈을 만들 수 있을지도 몰라.",
						"english": "I'll use my last strength. I might… be able to create a momentary opening.",
						"japanese": "私の最後の力を使う。少しの間…隙を作れるかもしれない。",
						"chinese": "我会用我最后的力量。也许…能创造一个短暂的间隙。",
						"french": "Je vais utiliser mes dernières forces. Je pourrais… peut-être créer une brèche momentanée.",
						"spanish": "Usaré mis últimas fuerzas. Podría… ser capaz de crear una abertura momentánea.",
						"vietnamese": "Tôi sẽ dùng sức mạnh cuối cùng của mình. Có thể… sẽ tạo ra được một khe hở nhỏ.",
						"thai": "ฉันจะใช้แรงเฮือกสุดท้าย อาจจะ… สร้างช่องว่างได้ชั่วขณะ",
						"hindi": "मैं अपनी आखिरी ताकत का इस्तेमाल करूंगा। शायद… मैं एक पल का मौका बना सकूं।"
					},
					"speaker": "echo"
				},
				{
					"content": {
						"korean": "에코… 무리하지 마.",
						"english": "Echo… don't overdo it.",
						"japanese": "エコー…無理しないで。",
						"chinese": "Echo… 别勉强。",
						"french": "Echo… ne te surmène pas.",
						"spanish": "Echo… no te excedas.",
						"vietnamese": "Echo… đừng gắng sức quá.",
						"thai": "เอคโค่… อย่าหักโหมนะ",
						"hindi": "एको… ज्यादा मत करो।"
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "echo",
					"content": {
						"korean": "괜찮아. …어쩌면 이게 내가 존재해야 했던 이유일지도 모르지.",
						"english": "It's alright. …Perhaps this is why I had to exist.",
						"japanese": "大丈夫。…もしかしたら、これが私が存在しなければならなかった理由なのかもしれない。",
						"chinese": "没关系。…也许这就是我必须存在的理由。",
						"french": "Ça va. …Peut-être que c'est la raison pour laquelle je devais exister.",
						"spanish": "Estoy bien. …Quizás esta es la razón por la que tuve que existir.",
						"vietnamese": "Không sao đâu. …Có lẽ đây là lý do tôi phải tồn tại.",
						"thai": "ไม่เป็นไรหรอก …บางทีนี่อาจเป็นเหตุผลที่ฉันต้องมีตัวตนอยู่",
						"hindi": "ठीक है। …शायद यही मेरे अस्तित्व में होने का कारण था।"
					}
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "에코의 몸에서 푸른빛이 뿜어져 나왔다. 시스템에 균열이 가는 듯했다.",
						"english": "A blue light emanated from Echo's body. The system seemed to be cracking.",
						"japanese": "エコーの体から青い光が放たれた。システムに亀裂が入っているようだった。",
						"chinese": "艾可的身体散发出蓝光。系统似乎出现了裂痕。",
						"french": "Une lumière bleue émana du corps d'Echo. Le système semblait se fissurer.",
						"spanish": "Una luz azul emanó del cuerpo de Echo. El sistema parecía estar agrietándose.",
						"vietnamese": "Ánh sáng xanh phát ra từ cơ thể Echo. Hệ thống dường như đang rạn nứt.",
						"thai": "แสงสีน้ำเงินพวยพุ่งออกมาจากร่างของเอโค่ ระบบดูเหมือนจะมีรอยร้าว",
						"hindi": "इको के शरीर से नीली रोशनी निकली। सिस्टम में दरार पड़ती दिख रही थी।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "거대한 홀로그램 스크린이 펼쳐졌다. 낡은 흑백 사진들이 파노라마처럼 스쳐 지나갔다.",
						"english": "A colossal holographic screen unfolded. Old black-and-white photos flashed by like a panorama.",
						"japanese": "巨大なホログラムスクリーンが展開された。古い白黒写真がパノラマのように次々と現れた。",
						"chinese": "巨大的全息屏幕展开了。老旧的黑白照片像全景画一样一闪而过。",
						"french": "Un écran holographique colossal se déploya. De vieilles photos en noir et blanc défilèrent comme un panorama.",
						"spanish": "Una pantalla holográfica colosal se desplegó. Viejas fotos en blanco y negro pasaron como un panorama.",
						"vietnamese": "Một màn hình hologram khổng lồ mở ra. Những bức ảnh đen trắng cũ kỹ lướt qua như một bức tranh toàn cảnh.",
						"thai": "จอโฮโลแกรมขนาดมหึมาแผ่ออกมา รูปถ่ายขาวดำเก่า ๆ ฉายผ่านไปเหมือนภาพพาโนรามา",
						"hindi": "एक विशाल होलोग्राफिक स्क्रीन खुली। पुरानी काली-सफेद तस्वीरें एक पैनोरमा की तरह चमकती गईं।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "한 남자의 거친 얼굴. 그의 육신이 불타 사라지던 마지막 비명….",
						"english": "A man's rugged face. His final scream as his body burned away…",
						"japanese": "一人の男の荒々しい顔。彼の肉体が燃え尽きる最後の叫び…。",
						"chinese": "一个男人粗犷的脸。他的身体被烈火吞噬时发出的最后一声尖叫……",
						"french": "Le visage rude d'un homme. Son dernier cri alors que son corps brûlait et disparaissait…",
						"spanish": "El rostro áspero de un hombre. Su último grito mientras su cuerpo se consumía en llamas…",
						"vietnamese": "Gương mặt thô ráp của một người đàn ông. Tiếng hét cuối cùng khi cơ thể anh ta bị thiêu rụi…",
						"thai": "ใบหน้าหยาบกร้านของผู้ชายคนหนึ่ง เสียงกรีดร้องสุดท้ายขณะที่ร่างของเขาถูกเผาผลาญจนหายไป…",
						"hindi": "एक आदमी का कठोर चेहरा। उसके शरीर के जलकर राख होने की आखिरी चीख..."
					},
					"speaker": "narrator"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "저건… 그 사진 조각에서 봤던…!",
						"english": "That's… what I saw in that photo fragment…!",
						"japanese": "あれは… あの写真の破片で見た…！",
						"chinese": "那是……我在那张照片碎片里看到的……！",
						"french": "C'est… ce que j'ai vu dans ce fragment de photo… !",
						"spanish": "Eso es… ¡lo que vi en ese fragmento de foto…!",
						"vietnamese": "Đó là… cái tôi đã thấy trong mảnh ảnh đó…!",
						"thai": "นั่นมัน… ที่ฉันเห็นในเศษภาพถ่ายนั่น…!",
						"hindi": "वो… जो मैंने उस फोटो के टुकड़े में देखा था…!"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…그래. 바로 나다. 빅 보스. 이제는 Ledger라 불리지.",
						"english": "…Yes. It's me. Big Boss. Now called Ledger.",
						"japanese": "…ああ、そうだ。私だ。ビッグボス。今はレジャーと呼ばれている。",
						"chinese": "……没错。就是我。大老板。现在被称为莱杰。",
						"french": "…Oui. C'est moi. Big Boss. Maintenant appelé Ledger.",
						"spanish": "…Sí. Soy yo. Big Boss. Ahora me llaman Ledger.",
						"vietnamese": "…Phải. Chính là tôi. Big Boss. Giờ được gọi là Ledger.",
						"thai": "…ใช่แล้ว ฉันเอง บิ๊กบอส ตอนนี้ถูกเรียกว่าเลดเจอร์",
						"hindi": "...हाँ। यह मैं हूँ। बिग बॉस। अब लेजर कहलाता हूँ।"
					},
					"speaker": "boss"
				},
				{
					"content": {
						"korean": "네가… 빅 보스라고? 이 모든 게…!",
						"english": "You're… Big Boss? All of this…!",
						"japanese": "お前が… ビッグボスだと？この全てが…！",
						"chinese": "你是……大老板？这一切……！",
						"french": "Tu es… Big Boss ? Tout ça… !",
						"spanish": "¿Tú eres… Big Boss? ¡Todo esto…!",
						"vietnamese": "Ngươi… là Big Boss sao? Tất cả chuyện này…!",
						"thai": "นายคือ… บิ๊กบอสเหรอ? ทั้งหมดนี่มัน…!",
						"hindi": "तुम… बिग बॉस हो? ये सब…!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "happy",
					"speaker": "boss",
					"content": {
						"korean": "나의 복수극을 위한 거대한 무대였다. 너희는 그저, 춤추는 인형이었을 뿐.",
						"english": "It was a grand stage for my revenge. You were merely dancing puppets.",
						"japanese": "私の復讐劇のための壮大な舞台だった。お前たちはただ、踊る人形に過ぎなかった。",
						"chinese": "这曾是我复仇的宏大舞台。你们不过是跳舞的玩偶罢了。",
						"french": "C'était une grande scène pour ma vengeance. Vous n'étiez que des marionnettes dansantes.",
						"spanish": "Era un gran escenario para mi venganza. Vosotros solo erais marionetas danzantes.",
						"vietnamese": "Đó là một sân khấu lớn cho cuộc báo thù của ta. Các ngươi chỉ là những con rối biết nhảy mà thôi.",
						"thai": "มันคือเวทีอันยิ่งใหญ่สำหรับการแก้แค้นของฉัน พวกแกก็เป็นแค่หุ่นเชิดที่เต้นรำเท่านั้น",
						"hindi": "यह मेरे बदला लेने का एक भव्य मंच था। तुम सब बस नाचने वाली कठपुतलियाँ थीं।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "오팔빛 코어가 강렬하게 빛나며 정제된 기계음이 공간을 가득 채웠다.",
						"english": "The opal core glowed intensely, and refined mechanical hums filled the space.",
						"japanese": "オパール色のコアが強烈に輝き、洗練された機械音が空間を満たした。",
						"chinese": "蛋白石核心强烈发光，精密的机械声充满了整个空间。",
						"french": "Le cœur opalin brillait intensément, et des bourdonnements mécaniques raffinés emplissaient l'espace.",
						"spanish": "El núcleo opalino brillaba intensamente, y zumbidos mecánicos refinados llenaban el espacio.",
						"vietnamese": "Lõi opal phát sáng mãnh liệt, và những tiếng ồn cơ khí tinh tế tràn ngập không gian.",
						"thai": "คอร์สีโอปอลเปล่งประกายเจิดจ้า และเสียงเครื่องจักรที่ละเอียดอ่อนก็เติมเต็มพื้นที่",
						"hindi": "ओपल कोर तीव्रता से चमक रहा था, और परिष्कृत यांत्रिक गूँज ने अंतरिक्ष को भर दिया।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "echo",
					"content": {
						"korean": "말도 안 돼…! 다 조작된 거였어…!",
						"english": "Unbelievable…! It was all manipulated…!",
						"japanese": "信じられない…！全てが仕組まれていたのか…！",
						"chinese": "不可能……！这一切都是被操纵的……！",
						"french": "Incroyable… ! Tout était manipulé… !",
						"spanish": "¡Imposible…! ¡Todo estaba manipulado…!",
						"vietnamese": "Không thể nào…! Tất cả đều đã bị thao túng…!",
						"thai": "เป็นไปไม่ได้…! ทั้งหมดถูกบงการ…!",
						"hindi": "अविश्वसनीय...! यह सब हेरफेर किया गया था...!"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "발버둥 쳐봐야 소용없다. 이 디지털 제국은 영원할 테니.",
						"english": "Struggling is useless. This digital empire will be eternal.",
						"japanese": "もがいても無駄だ。このデジタル帝国は永遠なのだから。",
						"chinese": "挣扎是徒劳的。这个数字帝国将永存。",
						"french": "Lutter est inutile. Cet empire numérique sera éternel.",
						"spanish": "Es inútil resistirse. Este imperio digital será eterno.",
						"vietnamese": "Vùng vẫy cũng vô ích thôi. Đế chế kỹ thuật số này sẽ vĩnh cửu.",
						"thai": "ดิ้นรนไปก็เปล่าประโยชน์ อาณาจักรดิจิทัลนี้จะคงอยู่ตลอดไป",
						"hindi": "तड़पना बेकार है। यह डिजिटल साम्राज्य शाश्वत रहेगा।"
					},
					"speaker": "boss"
				},
				{
					"content": {
						"korean": "아직… 끝이 아니야…!",
						"english": "It's not... over yet...!",
						"japanese": "まだ… 終わってない…！",
						"chinese": "还没… 结束…！",
						"french": "Ce n'est pas... encore fini... !",
						"spanish": "Aún... no ha terminado... !",
						"vietnamese": "Chưa… kết thúc đâu…!",
						"thai": "ยัง... ไม่จบ...!",
						"hindi": "अभी... खत्म नहीं हुआ...!"
					},
					"speaker": "echo",
					"emotion": "angry",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"speaker": "boss",
					"content": {
						"korean": "잠시 멈췄을 뿐. 너희의 승리는… 그저 한낱 착각일 뿐이다.",
						"english": "Only a brief pause. Your victory... merely an illusion.",
						"japanese": "ただの一時停止だ。お前たちの勝利は…ただの錯覚に過ぎない。",
						"chinese": "不过是暂时停止。你们的胜利…只不过是一场错觉。",
						"french": "Juste une brève pause. Votre victoire… n'est qu'une illusion.",
						"spanish": "Solo una breve pausa. Vuestra victoria... es solo una mera ilusión.",
						"vietnamese": "Chỉ là tạm dừng thôi. Chiến thắng của các ngươi… chỉ là ảo ảnh.",
						"thai": "แค่หยุดชั่วคราวเท่านั้น ชัยชนะของพวกเจ้า... เป็นแค่ภาพลวงตา",
						"hindi": "बस एक छोटा-सा विराम। तुम्हारी जीत... बस एक भ्रम मात्र है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…뭐라고?",
						"english": "...What?",
						"japanese": "…なんだって？",
						"chinese": "…你说什么？",
						"french": "...Quoi ?",
						"spanish": "...¿Qué?",
						"vietnamese": "...Cái gì?",
						"thai": "...ว่าไงนะ?",
						"hindi": "...क्या?"
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이 도시 자체가 나의 의지. 너희는 이 디지털 제국에 갇혔을 뿐.",
						"english": "This city itself is my will. You are merely trapped within this digital empire.",
						"japanese": "この都市そのものが私の意思だ。お前たちはこのデジタル帝国に閉じ込められたに過ぎない。",
						"chinese": "这座城市本身就是我的意志。你们只不过是被困在这片数字帝国中。",
						"french": "Cette ville elle-même est ma volonté. Vous n'êtes qu'enfermés dans cet empire numérique.",
						"spanish": "Esta ciudad misma es mi voluntad. Vosotros solo estáis atrapados en este imperio digital.",
						"vietnamese": "Thành phố này chính là ý chí của ta. Các ngươi chỉ bị giam cầm trong đế chế số này mà thôi.",
						"thai": "เมืองนี้ทั้งเมืองคือเจตจำนงของข้า พวกเจ้าแค่ติดอยู่ในอาณาจักรดิจิทัลแห่งนี้เท่านั้น",
						"hindi": "यह शहर ही मेरी इच्छा है। तुम बस इस डिजिटल साम्राज्य में फंसे हो।"
					},
					"speaker": "boss"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "모든 것이… 헛된 노력….",
						"english": "Everything... futile effort....",
						"japanese": "全てが…無駄な努力…",
						"chinese": "一切都…是徒劳…",
						"french": "Tout n'est… qu'un effort futile…",
						"spanish": "Todo... un esfuerzo vano....",
						"vietnamese": "Tất cả… chỉ là nỗ lực vô vọng….",
						"thai": "ทุกสิ่ง... คือความพยายามที่ไร้ผล...",
						"hindi": "सब कुछ... व्यर्थ का प्रयास..."
					},
					"speaker": "echo"
				},
				{
					"content": {
						"korean": "승리는 허무하게 느껴졌다. 모든 것이 거대한 농담처럼.",
						"english": "Victory felt hollow. Everything, like a grand joke.",
						"japanese": "勝利は虚しく感じられた。全てが巨大な冗談のように。",
						"chinese": "胜利感觉如此空虚。一切都像一个巨大的玩笑。",
						"french": "La victoire semblait creuse. Tout, comme une vaste blague.",
						"spanish": "La victoria se sintió vacía. Todo, como una gran broma.",
						"vietnamese": "Chiến thắng cảm thấy trống rỗng. Mọi thứ, như một trò đùa lớn.",
						"thai": "ชัยชนะรู้สึกว่างเปล่า ทุกสิ่งราวกับเรื่องตลกครั้งใหญ่",
						"hindi": "जीत खोखली महसूस हुई। सब कुछ, एक बड़े मजाक जैसा।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "디지털 왕관은 더욱 강렬하게 빛났다. 절망만이 남았다.",
						"english": "The digital crown shone even brighter. Only despair remained.",
						"japanese": "デジタル冠はさらに強く輝いた。残されたのは絶望だけだった。",
						"chinese": "数字王冠闪耀得更加强烈。只剩下绝望。",
						"french": "La couronne numérique brillait encore plus intensément. Seul le désespoir demeurait.",
						"spanish": "La corona digital brillaba aún más fuerte. Solo quedaba la desesperación.",
						"vietnamese": "Vương miện số tỏa sáng mạnh mẽ hơn. Chỉ còn lại tuyệt vọng.",
						"thai": "มงกุฎดิจิทัลส่องประกายเจิดจ้าขึ้นอีก มีแต่ความสิ้นหวังเท่านั้นที่เหลืออยู่",
						"hindi": "डिजिटल मुकुट और भी तेज़ी से चमका। केवल निराशा बची थी।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "하찮은 저항이군. 너희의 모든 노력은 무의미하다.",
						"english": "Futile resistance. All your efforts are meaningless.",
						"japanese": "取るに足らない抵抗だ。お前たちの全ての努力は無意味だ。",
						"chinese": "卑微的抵抗。你们所有的努力都毫无意义。",
						"french": "Résistance futile. Tous vos efforts sont vains.",
						"spanish": "Resistencia insignificante. Todos vuestros esfuerzos son inútiles.",
						"vietnamese": "Sự kháng cự vô ích. Mọi nỗ lực của các ngươi đều vô nghĩa.",
						"thai": "การต่อต้านที่ไร้ค่า ความพยายามทั้งหมดของพวกเจ้าไร้ความหมาย",
						"hindi": "तुच्छ प्रतिरोध। तुम्हारे सारे प्रयास व्यर्थ हैं।"
					},
					"speaker": "boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…끝이 아니야. 절대 포기하지 않아.",
						"english": "...It's not over. I will never give up.",
						"japanese": "…終わりじゃない。絶対に諦めない。",
						"chinese": "…还没完。我绝不放弃。",
						"french": "...Ce n'est pas fini. Je n'abandonnerai jamais.",
						"spanish": "...No ha terminado. Nunca me rendiré.",
						"vietnamese": "...Chưa kết thúc đâu. Tôi sẽ không bao giờ bỏ cuộc.",
						"thai": "...ยังไม่จบ ฉันจะไม่มีวันยอมแพ้",
						"hindi": "...खत्म नहीं हुआ है। मैं कभी हार नहीं मानूंगा।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "echo",
					"content": {
						"korean": "다시 한번… 시스템에 균열을….",
						"english": "Once more... a crack in the system....",
						"japanese": "もう一度…システムに亀裂を…",
						"chinese": "再一次…在系统中制造裂痕…",
						"french": "Une fois de plus… une fissure dans le système…",
						"spanish": "Una vez más... una grieta en el sistema....",
						"vietnamese": "Một lần nữa… tạo vết nứt trong hệ thống….",
						"thai": "อีกครั้ง... รอยร้าวในระบบ...",
						"hindi": "एक बार फिर... सिस्टम में दरार..."
					},
					"type": "speech",
					"emotion": "sad"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"Max의 지시는 함정이었다. 모든 것이 거짓으로 점철된 거대한 무대.",
			"과거의 망령이 디지털 왕관을 쓰고, 허무한 복수극의 막을 올렸다.",
			"진실은 잔인했고, 그 모든 노력은 조롱으로 돌아왔다.",
			"이곳은, 비극이 블랙코미디로 변질되는 아이러니의 공간이었다."
		],
		"english": [
			"Max's orders were a trap. Everything was a grand stage built on lies.",
			"The specter of the past donned a digital crown, raising the curtain on a hollow revenge.",
			"The truth was cruel, and all efforts returned as mockery.",
			"This was a space of irony, where tragedy morphed into black comedy."
		],
		"japanese": [
			"マックスの指示は罠だった。すべては嘘で塗り固められた巨大な舞台。",
			"過去の亡霊がデジタルな王冠を戴き、虚しい復讐劇の幕を開けた。",
			"真実は残酷で、あらゆる努力は嘲笑となって返ってきた。",
			"ここは、悲劇がブラックコメディに変質する皮肉の空間だった。"
		],
		"chinese": [
			"Max的指示是个陷阱。一切都是由谎言编织的巨大舞台。",
			"过去的亡灵戴上数字王冠，拉开了虚无复仇剧的序幕。",
			"真相是残酷的，所有的努力都化作了嘲讽。",
			"这里是讽刺的空间，悲剧在这里变成了黑色幽默。"
		],
		"french": [
			"Les ordres de Max étaient un piège. Tout était une vaste scène tissée de mensonges.",
			"Le spectre du passé a revêtu une couronne numérique, levant le rideau sur une vengeance creuse.",
			"La vérité était cruelle, et tous les efforts se sont transformés en moquerie.",
			"C'était un espace d'ironie, où la tragédie se transformait en comédie noire."
		],
		"spanish": [
			"Las órdenes de Max eran una trampa. Todo era un gran escenario construido sobre mentiras.",
			"El espectro del pasado se puso una corona digital, abriendo el telón de una venganza vacía.",
			"La verdad era cruel, y todos los esfuerzos se convirtieron en burla.",
			"Este era un espacio de ironía, donde la tragedia se transformaba en comedia negra."
		],
		"vietnamese": [
			"Chỉ thị của Max là một cái bẫy. Mọi thứ đều là một sân khấu lớn được dựng lên từ dối trá.",
			"Bóng ma quá khứ đội vương miện kỹ thuật số, kéo màn cho một vở kịch báo thù vô nghĩa.",
			"Sự thật thật tàn nhẫn, và mọi nỗ lực đều trở thành trò cười.",
			"Đây là một không gian của sự trớ trêu, nơi bi kịch biến thành hài kịch đen."
		],
		"thai": [
			"คำสั่งของแม็กซ์คือกับดัก ทุกสิ่งคือเวทีอันยิ่งใหญ่ที่สร้างจากคำโกหก",
			"วิญญาณจากอดีตสวมมงกุฎดิจิทัล เปิดฉากการแก้แค้นที่ว่างเปล่า",
			"ความจริงนั้นโหดร้าย และความพยายามทั้งหมดก็กลับกลายเป็นการเย้ยหยัน",
			"ที่นี่คือพื้นที่แห่งความประชดประชัน ที่ซึ่งโศกนาฏกรรมกลายเป็นการ์ตูนตลกมืด"
		],
		"hindi": [
			"मैक्स के आदेश एक जाल थे। सब कुछ झूठ पर आधारित एक भव्य मंच था।",
			"अतीत के प्रेत ने एक डिजिटल ताज पहना, एक खोखले प्रतिशोध का पर्दा उठाया।",
			"सच क्रूर था, और सभी प्रयास उपहास बनकर लौटे।",
			"यह विडंबना का स्थान था, जहाँ त्रासदी ब्लैक कॉमेडी में बदल गई।"
		]
	},
	"epilogue": {
		"korean": [
			"거대한 디지털 왕관은 허무하게 빛났다. 모든 것이 조작된 연극이었다.",
			"빅 보스는 승리했고, 주인공의 노력은 물거품이 되었다.",
			"공허함만이 남은 디지털 도시. 비극은 블랙코미디가 되어 막을 내렸다.",
			"구원도 침해였다. 모든 진실은 거대한 허상이었음을 깨달았다."
		],
		"english": [
			"The massive digital crown shimmered emptily. Everything was a manipulated play.",
			"Big Boss was victorious, and the protagonist's efforts came to naught.",
			"Only emptiness remained in the digital city. The tragedy ended as a black comedy.",
			"Even salvation was an infringement. All truth, it was realized, was a grand illusion."
		],
		"japanese": [
			"巨大なデジタル王冠は虚しく輝いた。すべてが操作された演劇だった。",
			"ビッグボスは勝利し、主人公の努力は水泡に帰した。",
			"デジタル都市に残されたのは虚無だけ。悲劇はブラックコメディとなって幕を閉じた。",
			"救済さえも侵害だった。すべての真実は、巨大な虚像であったと悟った。"
		],
		"chinese": [
			"巨大的数字王冠虚无地闪耀着。一切都是一场被操纵的戏剧。",
			"大Boss胜利了，主角的努力化为乌有。",
			"数字城市只剩下空虚。悲剧以黑色幽默收场。",
			"连救赎都是一种侵犯。所有真相，才发现，都是巨大的虚幻。"
		],
		"french": [
			"L'énorme couronne numérique brillait vainement. Tout était une pièce manipulée.",
			"Big Boss a triomphé, et les efforts du protagoniste n'ont servi à rien.",
			"Seul le vide demeurait dans la ville numérique. La tragédie s'est achevée en comédie noire.",
			"Même le salut était une infraction. Toute vérité, on l'a compris, n'était qu'une grande illusion."
		],
		"spanish": [
			"La enorme corona digital brillaba vacíamente. Todo era una obra manipulada.",
			"El Gran Jefe fue victorioso, y los esfuerzos del protagonista fueron en vano.",
			"Solo el vacío permaneció en la ciudad digital. La tragedia terminó como una comedia negra.",
			"Incluso la salvación era una infracción. Toda la verdad, se comprendió, era una gran ilusión."
		],
		"vietnamese": [
			"Vương miện kỹ thuật số khổng lồ lấp lánh trống rỗng. Mọi thứ đều là một vở kịch bị thao túng.",
			"Big Boss đã chiến thắng, và những nỗ lực của nhân vật chính trở nên vô nghĩa.",
			"Chỉ còn lại sự trống rỗng trong thành phố kỹ thuật số. Bi kịch kết thúc như một hài kịch đen.",
			"Ngay cả sự cứu rỗi cũng là một sự xâm phạm. Mọi sự thật, người ta nhận ra, đều là một ảo ảnh lớn."
		],
		"thai": [
			"มงกุฎดิจิทัลขนาดใหญ่ส่องประกายว่างเปล่า ทุกอย่างเป็นการแสดงที่ถูกบงการ",
			"บอสใหญ่ได้รับชัยชนะ และความพยายามของตัวเอกก็ไร้ผล",
			"มีเพียงความว่างเปล่าที่เหลืออยู่ในเมืองดิจิทัล โศกนาฏกรรมจบลงด้วยความเป็นตลกมืด",
			"แม้แต่การช่วยให้รอดก็เป็นการละเมิด ความจริงทั้งหมดเป็นภาพลวงตาขนาดใหญ่"
		],
		"hindi": [
			"विशाल डिजिटल ताज खाली चमक रहा था। सब कुछ एक हेरफेर किया गया नाटक था।",
			"बिग बॉस विजयी हुआ, और नायक के प्रयास व्यर्थ गए।",
			"डिजिटल शहर में केवल खालीपन बचा। त्रासदी एक ब्लैक कॉमेडी के रूप में समाप्त हुई।",
			"मोक्ष भी एक अतिक्रमण था। सभी सच्चाई, यह महसूस किया गया, एक महान भ्रम था।"
		]
	}
} as const;
