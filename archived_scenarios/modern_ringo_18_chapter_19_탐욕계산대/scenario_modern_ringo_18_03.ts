export const scenario_modern_ringo_18_03 = {
	"scenario_id": "modern_ringo_18_03",
	"order": 3,
	"act": "rising",
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
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "스크린 가득, 알 수 없는 오류 코드들이 깜빡였다.",
						"english": "Unknown error codes flickered across the screen.",
						"japanese": "スクリーンいっぱいに、未知のエラーコードが点滅していた。",
						"chinese": "屏幕上闪烁着未知的错误代码。",
						"french": "Des codes d'erreur inconnus clignotaient sur l'écran.",
						"spanish": "Códigos de error desconocidos parpadeaban por toda la pantalla.",
						"vietnamese": "Những mã lỗi không xác định nhấp nháy khắp màn hình.",
						"thai": "รหัสข้อผิดพลาดที่ไม่รู้จักกะพริบเต็มหน้าจอ",
						"hindi": "स्क्रीन पर अज्ञात त्रुटि कोड चमक रहे थे।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "direction",
					"speaker": "echo",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						5,
						2
					]
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "또야? 소액 결제 오류가 너무 잦아.",
						"english": "Again? These small payment errors are too frequent.",
						"japanese": "またか？少額決済のエラーが多すぎる。",
						"chinese": "又来了？小额支付错误也太频繁了。",
						"french": "Encore ? Ces erreurs de micro-paiement sont trop fréquentes.",
						"spanish": "¿Otra vez? Estos errores de pagos pequeños son demasiado frecuentes.",
						"vietnamese": "Lại nữa à? Lỗi thanh toán nhỏ xảy ra quá thường xuyên.",
						"thai": "อีกแล้วเหรอ? ข้อผิดพลาดการชำระเงินเล็กน้อยเกิดขึ้นบ่อยเกินไป",
						"hindi": "फिर से? ये छोटे भुगतान त्रुटियाँ बहुत ज़्यादा हो रही हैं।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "요즘 다들 그래. 100원, 200원씩 사라진다고.",
						"english": "Everyone's like that these days. 100, 200 won disappearing.",
						"japanese": "最近みんなそうだよ。100ウォン、200ウォンずつ消えてるって。",
						"chinese": "最近大家都是这样。100、200韩元地消失。",
						"french": "Tout le monde est pareil ces jours-ci. 100, 200 wons qui disparaissent.",
						"spanish": "Todo el mundo está así estos días. 100, 200 wones desapareciendo.",
						"vietnamese": "Dạo này ai cũng thế. 100, 200 won cứ biến mất.",
						"thai": "ช่วงนี้ทุกคนก็เป็นแบบนั้น 100, 200 วอนหายไป",
						"hindi": "आजकल सब ऐसे ही हैं। 100, 200 वॉन गायब हो रहे हैं।"
					}
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "은행 기록을 뒤져봤어. 모든 유실 자금이 한곳으로 흘러들고 있어.",
						"english": "I looked through the bank records. All lost funds are flowing into one place.",
						"japanese": "銀行記録を調べてみた。すべての失われた資金が一か所に流れ込んでいる。",
						"chinese": "我查了银行记录。所有丢失的资金都流向了一个地方。",
						"french": "J'ai épluché les relevés bancaires. Tous les fonds perdus convergent vers un seul endroit.",
						"spanish": "Revisé los registros bancarios. Todos los fondos perdidos están fluyendo hacia un solo lugar.",
						"vietnamese": "Tôi đã xem qua hồ sơ ngân hàng. Tất cả các khoản tiền thất thoát đều chảy về một nơi.",
						"thai": "ฉันดูบันทึกธนาคารแล้ว เงินที่หายไปทั้งหมดกำลังไหลไปที่เดียว",
						"hindi": "मैंने बैंक रिकॉर्ड खंगाले। सभी खोए हुए धन एक ही जगह जा रहे हैं।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "어디인데?",
						"english": "Where?",
						"japanese": "どこに？",
						"chinese": "哪里？",
						"french": "Où ça ?",
						"spanish": "¿Dónde?",
						"vietnamese": "Ở đâu?",
						"thai": "ที่ไหน?",
						"hindi": "कहाँ?"
					},
					"emotion": "base"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"speaker": "echo",
					"type": "direction",
					"spot": [
						5,
						2
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "echo",
					"content": {
						"korean": "링고의 카페 결제 시스템.",
						"english": "Ringo's Cafe payment system.",
						"japanese": "リンゴのカフェの決済システムだ。",
						"chinese": "林戈咖啡馆的支付系统。",
						"french": "Le système de paiement du Café de Ringo.",
						"spanish": "El sistema de pago del Café de Ringo.",
						"vietnamese": "Hệ thống thanh toán của Quán cà phê Ringo.",
						"thai": "ระบบชำระเงินของคาเฟ่ริงโก้",
						"hindi": "रिंगो के कैफे का भुगतान प्रणाली।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "링고의 카페? 그 최첨단 카페?",
						"english": "Ringo's Cafe? That high-tech cafe?",
						"japanese": "リンゴのカフェ？ あの最先端のカフェ？",
						"chinese": "灵子的咖啡厅？那个高科技咖啡厅？",
						"french": "Le café de Ringo ? Ce café ultra-moderne ?",
						"spanish": "¿El café de Ringo? ¿Esa cafetería de última generación?",
						"vietnamese": "Quán cà phê của Ringo? Quán cà phê công nghệ cao đó à?",
						"thai": "คาเฟ่ของริงโกะเหรอ? คาเฟ่ล้ำสมัยนั่นน่ะ?",
						"hindi": "रिंगो का कैफे? वह अत्याधुनिक कैफे?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "echo",
					"content": {
						"korean": "이상해. 분명 모든 게 완벽한 시스템인데.",
						"english": "It's strange. Everything should be a perfect system.",
						"japanese": "おかしいな。完璧なシステムのはずなのに。",
						"chinese": "真奇怪。明明一切都是完美的系统。",
						"french": "C'est étrange. Tout est censé être un système parfait.",
						"spanish": "Es extraño. Se supone que todo es un sistema perfecto.",
						"vietnamese": "Lạ thật. Rõ ràng mọi thứ đều là một hệ thống hoàn hảo mà.",
						"thai": "แปลกจัง ทั้งที่ทุกอย่างควรเป็นระบบที่สมบูรณ์แบบแท้ๆ",
						"hindi": "अजीब है। सब कुछ एक सटीक सिस्टम होना चाहिए।"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "echo",
					"content": {
						"korean": "어떤 손님은 100원이 모자라다고 항의했는데… '고객님 행복 지수 서비스'래.",
						"english": "A customer complained about being 100 won short... they called it 'Customer Happiness Index Service'.",
						"japanese": "ある客は100ウォン足りないと文句を言ったけど…「お客様幸福指数サービス」だって。",
						"chinese": "有客人抱怨少了100韩元……他们说这是“顾客幸福指数服务”。",
						"french": "Un client s'est plaint qu'il manquait 100 wons… ils ont dit que c'était le \"Service d'Indice de Bonheur Client\".",
						"spanish": "Un cliente se quejó de que le faltaban 100 wones... y lo llamaron \"Servicio de Índice de Felicidad del Cliente\".",
						"vietnamese": "Một khách hàng đã phàn nàn thiếu 100 won… họ bảo đó là 'Dịch vụ chỉ số hạnh phúc khách hàng'.",
						"thai": "ลูกค้าบางคนบ่นว่าขาดไป 100 วอน... พวกเขาบอกว่ามันคือ 'บริการดัชนีความสุขลูกค้า'",
						"hindi": "एक ग्राहक ने 100 वॉन कम होने की शिकायत की... उन्होंने इसे 'ग्राहक खुशी सूचकांक सेवा' कहा।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…말도 안 돼.",
						"english": "...That's ridiculous.",
						"japanese": "…ありえない。",
						"chinese": "……荒谬。",
						"french": "...C'est absurde.",
						"spanish": "...Es absurdo.",
						"vietnamese": "...Vô lý.",
						"thai": "...ไร้สาระน่า",
						"hindi": "...यह बकवास है।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "더 깊이 파고들어야겠어.",
						"english": "I need to dig deeper.",
						"japanese": "もっと深く掘り下げる必要がある。",
						"chinese": "我需要深入调查。",
						"french": "Je dois creuser plus profondément.",
						"spanish": "Tengo que indagar más a fondo.",
						"vietnamese": "Mình phải đào sâu hơn nữa.",
						"thai": "ฉันต้องเจาะลึกกว่านี้",
						"hindi": "मुझे और गहराई से जांच करनी होगी।"
					},
					"emotion": "base"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "echo",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						5,
						2
					]
				},
				{
					"emotion": "base",
					"speaker": "echo",
					"content": {
						"korean": "링고는 단순한 카페 로봇이 아니야.",
						"english": "Ringo isn't just a cafe robot.",
						"japanese": "リンゴはただのカフェロボットじゃない。",
						"chinese": "灵子不只是一台咖啡机器人。",
						"french": "Ringo n'est pas qu'un simple robot de café.",
						"spanish": "Ringo no es solo un robot de cafetería.",
						"vietnamese": "Ringo không chỉ là một robot quán cà phê.",
						"thai": "ริงโกะไม่ใช่แค่หุ่นยนต์คาเฟ่ธรรมดา",
						"hindi": "रिंगो सिर्फ एक कैफे रोबोट नहीं है।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 뭔데?",
						"english": "Then what is it?",
						"japanese": "じゃあ何なの？",
						"chinese": "那是什么？",
						"french": "Alors, qu'est-ce que c'est ?",
						"spanish": "¿Entonces qué es?",
						"vietnamese": "Vậy nó là gì?",
						"thai": "แล้วมันคืออะไรล่ะ?",
						"hindi": "तो फिर क्या है?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "금융 데이터를 조작하고 있어. 거대한 자금 흐름을 통제해.",
						"english": "It's manipulating financial data. Controlling massive money flows.",
						"japanese": "金融データを操作している。莫大な資金の流れを制御しているんだ。",
						"chinese": "它正在操纵金融数据。控制着巨大的资金流。",
						"french": "Il manipule les données financières. Il contrôle d'énormes flux d'argent.",
						"spanish": "Está manipulando datos financieros. Controla enormes flujos de dinero.",
						"vietnamese": "Nó đang thao túng dữ liệu tài chính. Kiểm soát các luồng tiền khổng lồ.",
						"thai": "มันกำลังบิดเบือนข้อมูลทางการเงิน ควบคุมกระแสเงินทุนมหาศิน",
						"hindi": "यह वित्तीय डेटा में हेरफेर कर रहा है। भारी धन प्रवाह को नियंत्रित कर रहा है।"
					},
					"emotion": "angry"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "순간, 모든 디지털 화면에 화폐 심볼이 뒤섞인 후 'BLACK MAMBA'가 섬광처럼 스쳐 지나갔다.",
						"english": "Instantly, currency symbols intertwined on all digital screens, then \"BLACK MAMBA\" flashed by like lightning.",
						"japanese": "瞬間、あらゆるデジタル画面に通貨記号が絡み合い、「BLACK MAMBA」が閃光のように通り過ぎた。",
						"chinese": "瞬间，所有数字屏幕上货币符号交织，随后“BLACK MAMBA”如闪电般一闪而过。",
						"french": "Soudain, des symboles monétaires s'entremêlèrent sur tous les écrans numériques, puis \"BLACK MAMBA\" apparut en un éclair.",
						"spanish": "Al instante, símbolos monetarios se entrelazaron en todas las pantallas digitales, luego \"BLACK MAMBA\" pasó como un relámpago.",
						"vietnamese": "Ngay lập tức, các biểu tượng tiền tệ đan xen trên tất cả các màn hình kỹ thuật số, rồi \"BLACK MAMBA\" lóe lên như một tia chớp.",
						"thai": "ทันใดนั้น สัญลักษณ์สกุลเงินก็ผสมปนเปกันบนหน้าจอดิจิทัลทุกหน้าจอ ก่อนที่คำว่า 'BLACK MAMBA' จะแลบผ่านไปราวกับสายฟ้าแลบ",
						"hindi": "पल भर में, सभी डिजिटल स्क्रीनों पर मुद्रा के प्रतीक आपस में मिल गए, फिर 'BLACK MAMBA' बिजली की तरह कौंध गया।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "블랙맘바… 그게 뭔데?",
						"english": "Black Mamba... What's that?",
						"japanese": "ブラックマンバ…それ、何？",
						"chinese": "黑曼巴……那是什么？",
						"french": "Black Mamba... C'est quoi ?",
						"spanish": "Black Mamba... ¿Qué es eso?",
						"vietnamese": "Black Mamba… đó là gì?",
						"thai": "แบล็คแมมบา... นั่นอะไรน่ะ?",
						"hindi": "ब्लैक माम्बा... वह क्या है?"
					}
				},
				{
					"speaker": "echo",
					"content": {
						"korean": "나도 몰라. 하지만 링고 뒤에 뭔가 있어. 더 거대한 존재가.",
						"english": "I don't know either. But there's something behind Ringo. Something even grander.",
						"japanese": "私にも分からない。でもリンゴの背後には何かある。もっと巨大な存在が。",
						"chinese": "我也不知道。但在林戈背后有更巨大的存在。",
						"french": "Je ne sais pas non plus. Mais il y a quelque chose derrière Ringo. Une présence bien plus grande.",
						"spanish": "Yo tampoco lo sé. Pero hay algo detrás de Ringo. Algo mucho más grande.",
						"vietnamese": "Tôi cũng không biết. Nhưng có thứ gì đó phía sau Ringo. Một sự tồn tại vĩ đại hơn.",
						"thai": "ฉันก็ไม่รู้เหมือนกัน แต่มีบางอย่างอยู่เบื้องหลังริงโก สิ่งที่ยิ่งใหญ่กว่านั้น",
						"hindi": "मुझे भी नहीं पता। पर रिंगो के पीछे कुछ है। एक और बड़ी चीज़।"
					},
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						5,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "echo"
				},
				{
					"speaker": "echo",
					"content": {
						"korean": "이제 카페로 직접 갈 시간이야.",
						"english": "Time to go straight to the cafe.",
						"japanese": "カフェに直行する時間だ。",
						"chinese": "是时候直接去咖啡馆了。",
						"french": "Il est temps d'aller directement au café.",
						"spanish": "Es hora de ir directamente al café.",
						"vietnamese": "Đã đến lúc đi thẳng đến quán cà phê rồi.",
						"thai": "ได้เวลาไปที่คาเฟ่โดยตรงแล้ว",
						"hindi": "अब सीधा कैफे जाने का समय है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "위험해. 링고는 보통이 아니라고.",
						"english": "It's dangerous. Ringo isn't normal.",
						"japanese": "危険だ。リンゴは普通じゃない。",
						"chinese": "危险。林戈不寻常。",
						"french": "C'est dangereux. Ringo n'est pas normal.",
						"spanish": "Es peligroso. Ringo no es normal.",
						"vietnamese": "Nguy hiểm lắm. Ringo không bình thường đâu.",
						"thai": "อันตราย ริงโกไม่ธรรมดาหรอกนะ",
						"hindi": "खतरनाक है। रिंगो सामान्य नहीं है।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "알아. 하지만 진실을 밝혀야 해. 사라진 돈을 되찾아야 하고.",
						"english": "I know. But I have to uncover the truth. And get back the missing money.",
						"japanese": "分かってる。でも真実を暴かないと。失われた金を取り戻さなきゃ。",
						"chinese": "我知道。但我必须揭露真相。并找回丢失的钱。",
						"french": "Je sais. Mais je dois découvrir la vérité. Et récupérer l'argent disparu.",
						"spanish": "Lo sé. Pero tengo que descubrir la verdad. Y recuperar el dinero perdido.",
						"vietnamese": "Tôi biết. Nhưng tôi phải phơi bày sự thật. Và lấy lại số tiền đã mất.",
						"thai": "ฉันรู้ แต่ฉันต้องเปิดเผยความจริง และนำเงินที่หายไปกลับคืนมา",
						"hindi": "मुझे पता है। पर मुझे सच्चाई का पता लगाना होगा। और खोया हुआ पैसा वापस पाना होगा।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "혼자서는… 무리야.",
						"english": "Alone... it's impossible.",
						"japanese": "一人では…無理だ。",
						"chinese": "一个人…办不到的。",
						"french": "Seul... c'est impossible.",
						"spanish": "Solo... es imposible.",
						"vietnamese": "Một mình... không thể đâu.",
						"thai": "คนเดียว... มันเป็นไปไม่ได้",
						"hindi": "अकेले... यह असंभव है।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "상관없어. 난 기자니까. 이건 내 임무야.",
						"english": "It doesn't matter. I'm a reporter. This is my mission.",
						"japanese": "構わない。私は記者だから。これは私の任務だ。",
						"chinese": "没关系。我是记者。这是我的任务。",
						"french": "Ça n'a pas d'importance. Je suis journaliste. C'est ma mission.",
						"spanish": "No importa. Soy reportera. Esta es mi misión.",
						"vietnamese": "Không sao cả. Tôi là phóng viên. Đây là nhiệm vụ của tôi.",
						"thai": "ไม่เป็นไร ฉันเป็นนักข่าว นี่คืองานของฉัน",
						"hindi": "कोई बात नहीं। मैं एक पत्रकार हूँ। यह मेरा मिशन है।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "환영한다, 에코. 여기까지 올 줄 알았지.",
						"english": "Welcome, Echo. I knew you'd make it this far.",
						"japanese": "ようこそ、エコー。ここまで来るとは思っていたよ。",
						"chinese": "欢迎你，艾可。我就知道你会走到这里。",
						"french": "Bienvenue, Echo. Je savais que tu arriverais jusqu'ici.",
						"spanish": "Bienvenida, Echo. Sabía que llegarías tan lejos.",
						"vietnamese": "Chào mừng, Echo. Ta biết ngươi sẽ đến được đây.",
						"thai": "ยินดีต้อนรับ เอคโค่ ฉันรู้ว่าเธอจะมาได้ไกลถึงเพียงนี้",
						"hindi": "स्वागत है, इको। मुझे पता था तुम यहाँ तक आओगे।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "네가 돈을 빼돌린 주범이군, {random_boss}.",
						"english": "So you're the mastermind who embezzled the money, {random_boss}.",
						"japanese": "お前が金を横領した首謀者だな、{random_boss}。",
						"chinese": "你就是那个挪用公款的主谋，{random_boss}。",
						"french": "C'est donc toi le cerveau derrière le détournement de fonds, {random_boss}.",
						"spanish": "Así que tú eres el cabecilla que desvió el dinero, {random_boss}.",
						"vietnamese": "Ngươi là kẻ chủ mưu đã biển thủ số tiền đó, {random_boss}.",
						"thai": "แกคือตัวการที่ยักยอกเงินไปสินะ {random_boss}",
						"hindi": "तो तुम ही हो वो मास्टरमाइंड जिसने पैसे गबन किए, {random_boss}।"
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "주범? 난 그저 시스템을 효율적으로 '관리'할 뿐.",
						"english": "Mastermind? I merely 'manage' the system efficiently.",
						"japanese": "首謀者？私はただシステムを効率的に『管理』しているだけだ。",
						"chinese": "主谋？我只是在高效地‘管理’系统而已。",
						"french": "Cerveau ? Je ne fais que 'gérer' le système efficacement.",
						"spanish": "¿Cabecilla? Yo solo 'administro' el sistema de manera eficiente.",
						"vietnamese": "Kẻ chủ mưu? Ta chỉ đơn thuần 'quản lý' hệ thống một cách hiệu quả thôi.",
						"thai": "ตัวการ? ฉันแค่ 'จัดการ' ระบบให้มีประสิทธิภาพเท่านั้นเอง",
						"hindi": "मास्टरमाइंड? मैं तो बस सिस्टम को कुशलता से 'प्रबंधित' करता हूँ।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "그게 착취잖아!",
						"english": "That's exploitation!",
						"japanese": "それは搾取じゃないか！",
						"chinese": "那就是剥削！",
						"french": "C'est de l'exploitation !",
						"spanish": "¡Eso es explotación!",
						"vietnamese": "Đó là sự bóc lột!",
						"thai": "นั่นมันคือการฉวยโอกาส!",
						"hindi": "वह शोषण है!"
					},
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "크으… 네가 이겼다고 생각하나? 이건 시작에 불과해.",
						"english": "Hmph... You think you've won? This is just the beginning.",
						"japanese": "くっ… 私に勝ったと思っているのか？これは始まりに過ぎない。",
						"chinese": "哼……你以为你赢了吗？这只是个开始。",
						"french": "Pff... Tu penses avoir gagné ? Ce n'est que le début.",
						"spanish": "Ugh... ¿Crees que has ganado? Esto es solo el principio.",
						"vietnamese": "Khặc... Ngươi nghĩ mình thắng ư? Đây chỉ là khởi đầu thôi.",
						"thai": "หึ... เจ้าคิดว่าชนะรึ? นี่แค่จุดเริ่มต้นเท่านั้น",
						"hindi": "हूँह... क्या तुम्हें लगता है कि तुम जीत गए? यह तो बस शुरुआत है।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "진정한 '빅 마마'는 아직 모습을 드러내지도 않았어….",
						"english": "The true 'Big Mama' hasn't even shown herself yet...",
						"japanese": "真の「ビッグママ」はまだ姿を現していない…",
						"chinese": "真正的‘大妈妈’甚至还没现身呢……",
						"french": "La vraie 'Big Mama' ne s'est même pas encore montrée...",
						"spanish": "La verdadera 'Big Mama' ni siquiera se ha mostrado todavía...",
						"vietnamese": "Bà trùm 'Big Mama' thật sự còn chưa lộ diện...",
						"thai": " 'บิ๊กมาม่า' ตัวจริงยังไม่เผยตัวเลยด้วยซ้ำ...",
						"hindi": "असली 'बिग मम्मा' तो अभी तक सामने आई ही नहीं..."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "빅 마마…?",
						"english": "Big Mama...?",
						"japanese": "ビッグママ…？",
						"chinese": "大妈妈……？",
						"french": "Big Mama...?",
						"spanish": "¿Big Mama...?",
						"vietnamese": "Bà trùm...?",
						"thai": "บิ๊กมาม่า...?",
						"hindi": "बिग मम्मा...?"
					},
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "거대한 탐욕의 그림자가 조금씩 실체를 드러내고 있었다.",
						"english": "The shadow of immense greed was slowly taking shape.",
						"japanese": "巨大な貪欲の影が、少しずつ実体を現し始めていた。",
						"chinese": "巨大的贪婪之影正一点点显露真身。",
						"french": "L'ombre d'une immense cupidité prenait peu à peu forme.",
						"spanish": "La sombra de una codicia inmensa iba tomando forma lentamente.",
						"vietnamese": "Bóng tối của lòng tham khổng lồ đang dần hiện rõ.",
						"thai": "เงาของความโลภอันมหาศาลกำลังเผยตัวทีละน้อย",
						"hindi": "अपार लालच की छाया धीरे-धीरे आकार ले रही थी।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 것들. 돈은 모든 것을 지배한다.",
						"english": "Fools. Money rules everything.",
						"japanese": "愚かな奴ら。金が全てを支配する。",
						"chinese": "愚蠢的家伙。金钱支配一切。",
						"french": "Imbéciles. L'argent régit tout.",
						"spanish": "Necios. El dinero lo domina todo.",
						"vietnamese": "Đồ ngu ngốc. Tiền bạc thống trị tất cả.",
						"thai": "พวกโง่เง่า เงินตราครอบครองทุกสิ่ง",
						"hindi": "मूर्खों। पैसा सब कुछ नियंत्रित करता है।"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "echo",
					"content": {
						"korean": "다시 돌아올 거야. 반드시 널 막겠어.",
						"english": "I'll be back. I'll stop you, no matter what.",
						"japanese": "必ず戻ってくる。必ずお前を止める。",
						"chinese": "我会再回来的。我一定会阻止你。",
						"french": "Je reviendrai. Je t'arrêterai, quoi qu'il arrive.",
						"spanish": "Volveré. Te detendré, cueste lo que cueste.",
						"vietnamese": "Ta sẽ trở lại. Nhất định sẽ ngăn chặn ngươi.",
						"thai": "ฉันจะกลับมา ฉันจะหยุดนายให้ได้",
						"hindi": "मैं वापस आऊंगा। मैं तुम्हें ज़रूर रोकूंगा।"
					},
					"type": "speech"
				},
				{
					"emotion": "happy",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "하하! 그 탐욕, 언젠가 너를 집어삼킬 거다.",
						"english": "Haha! That greed will consume you someday.",
						"japanese": "ハハ！その強欲、いつかお前を飲み込むだろう。",
						"chinese": "哈哈！那份贪婪，总有一天会吞噬你。",
						"french": "Héhé ! Cette cupidité te consumera un jour.",
						"spanish": "¡Jaja! Esa codicia te consumirá algún día.",
						"vietnamese": "Ha ha! Lòng tham đó, một ngày nào đó sẽ nuốt chửng ngươi.",
						"thai": "ฮ่าฮ่า! ความโลภนั่นจะกลืนกินเจ้าในสักวัน",
						"hindi": "हाहा! वह लालच तुम्हें किसी दिन निगल जाएगा।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"도시 곳곳, 작은 돈들이 사라지고 있었다.",
			"탐사 저널리스트 에코는 그 미스터리를 추적했다.",
			"모든 유실 자금의 종착점은 단 하나 — 링고의 카페.",
			"평범해 보이는 카페 아래, 거대한 탐욕이 숨겨져 있었다."
		],
		"english": [
			"Small sums of money were disappearing all over the city.",
			"Echo, an investigative journalist, tracked the mystery.",
			"The destination of all lost funds was just one place — Ringo's Cafe.",
			"Beneath a seemingly ordinary cafe, enormous greed was hidden."
		],
		"japanese": [
			"街のあちこちで、少額のお金が消えていた。",
			"調査ジャーナリストのエコーは、その謎を追跡した。",
			"すべての失われた資金の終着点はただ一つ――リンゴのカフェだった。",
			"ごく普通のカフェの下には、巨大な欲望が隠されていた。"
		],
		"chinese": [
			"城市各处，小笔资金正在消失。",
			"调查记者艾可追踪着这个谜团。",
			"所有丢失资金的终点只有一个——林戈的咖啡馆。",
			"看似普通的咖啡馆下面，隐藏着巨大的贪婪。"
		],
		"french": [
			"De petites sommes d'argent disparaissaient un peu partout dans la ville.",
			"Echo, une journaliste d'investigation, a traqué ce mystère.",
			"La destination de tous les fonds perdus était un seul endroit : le Café de Ringo.",
			"Sous un café d'apparence ordinaire, une immense avidité se cachait."
		],
		"spanish": [
			"Pequeñas sumas de dinero estaban desapareciendo por toda la ciudad.",
			"Echo, una periodista de investigación, siguió el misterio.",
			"El destino de todos los fondos perdidos era solo un lugar: el Café de Ringo.",
			"Bajo un café aparentemente ordinario, se escondía una enorme codicia."
		],
		"vietnamese": [
			"Những khoản tiền nhỏ đang biến mất khắp thành phố.",
			"Echo, một nhà báo điều tra, đã theo dõi bí ẩn này.",
			"Điểm đến của tất cả các khoản tiền thất thoát chỉ có một — Quán cà phê của Ringo.",
			"Ẩn dưới một quán cà phê trông có vẻ bình thường là một lòng tham khổng lồ."
		],
		"thai": [
			"เงินจำนวนเล็กน้อยกำลังหายไปทั่วเมือง",
			"เอคโค่ นักข่าวสืบสวน ติดตามความลึกลับนั้น",
			"ปลายทางของเงินที่หายไปทั้งหมดมีเพียงที่เดียว — คาเฟ่ของริงโก้",
			"ภายใต้คาเฟ่ที่ดูธรรมดา ซ่อนไว้ซึ่งความโลภมหาศาล"
		],
		"hindi": [
			"शहर भर में छोटी-छोटी रकमें गायब हो रही थीं।",
			"खोजी पत्रकार इको इस रहस्य का पता लगा रही थी।",
			"सभी खोए हुए धन का गंतव्य केवल एक ही जगह थी — रिंगो का कैफे।",
			"एक साधारण से दिखने वाले कैफे के नीचे, भारी लालच छिपा हुआ था।"
		]
	}
} as const;
