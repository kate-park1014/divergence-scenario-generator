export const scenario_modern_scrivener_23_02 = {
	"scenario_id": "modern_scrivener_23_02",
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
			"도시의 '정산'은 모든 것을 집어삼켰다.",
			"작은 실수도, 하찮은 약속도 — 거대한 재앙이 되어 돌아왔다.",
			"희극인 닥스는 황당한 악몽 속에서 과거의 '빚'을 청구당했다.",
			"웃음과 공포가 뒤섞인, 가장 끔찍한 블랙코미디가 시작된다."
		],
		"english": [
			"The city's 'Reckoning' devoured everything.",
			"Even small mistakes, trivial promises — returned as a massive disaster.",
			"Comedian Daxs was billed for a past 'debt' in an absurd nightmare.",
			"The most horrific black comedy, a mix of laughter and fear, begins."
		],
		"japanese": [
			"都市の「清算」は全てを飲み込んだ。",
			"些細な間違いも、取るに足らない約束も — 巨大な災厄となって戻ってきた。",
			"喜劇役者ダックスは、途方もない悪夢の中で過去の「負債」を請求された。",
			"笑いと恐怖が入り混じった、最も恐ろしいブラックコメディが始まる。"
		],
		"chinese": [
			"城市的“清算”吞噬了一切。",
			"即使是小错误、微不足道的承诺——也以巨大灾难的形式回归。",
			"喜剧演员达克斯在一个荒谬的噩梦中被追讨过去的“债务”。",
			"伴随着欢笑与恐惧，最可怕的黑色喜剧即将上演。"
		],
		"french": [
			"La \"Redevance\" de la ville a tout dévoré.",
			"Même les petites erreurs, les promesses insignifiantes — sont revenues sous forme de catastrophe majeure.",
			"Le comédien Daxs fut sommé de payer une 'dette' passée dans un cauchemar absurde.",
			"La plus horrible des comédies noires, un mélange de rires et de terreur, commence."
		],
		"spanish": [
			"La 'Reconciliación' de la ciudad lo devoró todo.",
			"Incluso los pequeños errores, las promesas triviales — regresaron como un desastre masivo.",
			"El comediante Daxs fue cobrado por una 'deuda' pasada en una pesadilla absurda.",
			"La comedia negra más horrible, una mezcla de risas y miedo, comienza."
		],
		"vietnamese": [
			"'Thanh toán' của thành phố đã nuốt chửng mọi thứ.",
			"Ngay cả những lỗi nhỏ, những lời hứa tầm thường — cũng trở lại thành một thảm họa lớn.",
			"Danh hài Daxs bị đòi 'nợ' cũ trong một cơn ác mộng phi lý.",
			"Một vở hài kịch đen tối kinh hoàng nhất, pha trộn giữa tiếng cười và nỗi sợ hãi, bắt đầu."
		],
		"thai": [
			"“การชำระหนี้” ของเมืองกลืนกินทุกสิ่ง",
			"แม้แต่ความผิดพลาดเล็กๆ น้อยๆ คำสัญญาที่ไม่สำคัญ — ก็กลับกลายเป็นหายนะครั้งใหญ่",
			"นักแสดงตลกแด็กซ์ถูกเรียกเก็บ 'หนี้' ในอดีตในฝันร้ายที่ไร้สาระ",
			"แบล็กคอมเมดี้ที่น่าสะพรึงกลัวที่สุด ซึ่งผสมผสานระหว่างเสียงหัวเราะและความหวาดกลัว กำลังจะเริ่มต้นขึ้น"
		],
		"hindi": [
			"शहर का 'हिसाब' सब कुछ निगल गया।",
			"छोटी-छोटी गलतियाँ भी, मामूली वादे भी — एक बड़ी आपदा बनकर वापस आ गए।",
			"हास्य अभिनेता डैक्स को एक बेतुके बुरे सपने में अतीत के 'कर्ज' का बिल भेजा गया।",
			"हंसी और डर से भरी, सबसे भयानक ब्लैक कॉमेडी शुरू होती है।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"action": "enter",
					"speaker": "dax"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "으악! 또! 또 시작이야!",
						"english": "Agh! Not again! It's starting again!",
						"japanese": "うわあ！また！また始まった！",
						"chinese": "啊！又来了！又开始了！",
						"french": "Aïe ! Encore ! Ça recommence !",
						"spanish": "¡Ah! ¡Otra vez! ¡Está empezando de nuevo!",
						"vietnamese": "Á! Lại nữa! Lại bắt đầu rồi!",
						"thai": "อ๊าก! อีกแล้ว! เริ่มอีกแล้ว!",
						"hindi": "आह! फिर से! यह फिर से शुरू हो गया!"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "닥스 씨? 왜 그러세요?",
						"english": "Mr. Daxs? What's wrong?",
						"japanese": "ダックスさん？どうしましたか？",
						"chinese": "达克斯先生？您怎么了？",
						"french": "Monsieur Daxs ? Qu'est-ce qui ne va pas ?",
						"spanish": "¿Señor Daxs? ¿Qué le pasa?",
						"vietnamese": "Anh Daxs? Có chuyện gì vậy?",
						"thai": "คุณแด็กซ์ครับ? เกิดอะไรขึ้นครับ?",
						"hindi": "मिस्टर डैक्स? क्या हुआ आपको?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "dax",
					"type": "speech",
					"content": {
						"korean": "아니, 어제 길 가다 어깨빵했는데, 걔가 내 지갑을 털었대! 빚이래!",
						"english": "No, I bumped into someone on the street yesterday, and they said I robbed their wallet! It's a debt!",
						"japanese": "いや、昨日道で肩がぶつかっただけなのに、そいつが俺の財布を盗んだって言うんだ！借金だなんて！",
						"chinese": "不，我昨天在街上撞了一下人，那家伙竟然说我抢了他的钱包！还说是债务！",
						"french": "Non, hier, j'ai bousculé quelqu'un dans la rue, et il a dit que j'avais volé son portefeuille ! Que c'est une dette !",
						"spanish": "No, ayer choqué con alguien en la calle, ¡y dijo que le robé la billetera! ¡Que es una deuda!",
						"vietnamese": "Không, hôm qua tôi đi đường va phải người ta, thế mà họ bảo tôi cướp ví của họ! Bảo đó là nợ!",
						"thai": "ไม่สิ เมื่อวานผมเดินชนไหล่คนบนถนน แล้วเขาก็บอกว่าผมปล้นกระเป๋าสตางค์ของเขา! บอกว่าเป็นหนี้!",
						"hindi": "नहीं, कल मैं सड़क पर किसी से टकरा गया, और उसने कहा कि मैंने उसका बटुआ चुरा लिया! यह एक कर्ज है!"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "…어깨빵이요?",
						"english": "...A shoulder bump?",
						"japanese": "…肩がぶつかっただけ、ですか？",
						"chinese": "……撞了一下肩膀？",
						"french": "...Un coup d'épaule ?",
						"spanish": "¿...Un empujón de hombro?",
						"vietnamese": "...Va chạm vai ạ?",
						"thai": "...แค่ชนไหล่เหรอครับ?",
						"hindi": "...कंधे से टकराना?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "아니 세상에 이런 법이 어디 있어! 지나가다 부딪힌 게 빚이라니!",
						"english": "No, where in the world is there such a law! That bumping into someone while passing by is a debt!",
						"japanese": "いや、世の中にこんな法律がどこにあるんだ！通りすがりにぶつかったのが借金だなんて！",
						"chinese": "不，这世上哪有这种道理！路过碰了一下竟然是债务！",
						"french": "Non, où au monde y a-t-il une telle loi ! Qu'un simple choc en passant soit une dette !",
						"spanish": "No, ¡dónde en el mundo existe tal ley! ¡Que chocar con alguien al pasar sea una deuda!",
						"vietnamese": "Không, trên đời này làm gì có cái luật nào như thế! Đi đường va phải người ta mà lại thành nợ!",
						"thai": "ไม่มีทาง! กฎหมายแบบนี้มันมีที่ไหนกัน! แค่เดินชนกันก็เป็นหนี้ได้ไง!",
						"hindi": "नहीं, दुनिया में ऐसा कानून कहाँ है! राह चलते टकराना भी कर्ज हो गया!"
					},
					"type": "speech",
					"speaker": "dax"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"action": "enter",
					"speaker": "dax"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"emotion": "sad",
					"content": {
						"korean": "크아악! 안 돼, 안 돼!",
						"english": "Argh! No, no!",
						"japanese": "うわああ！だめだ、だめだ！",
						"chinese": "啊啊啊！不要，不要！",
						"french": "Argh ! Non, non !",
						"spanish": "¡Aargh! ¡No, no!",
						"vietnamese": "Á! Không được, không được!",
						"thai": "กรี๊ด! ไม่นะ, ไม่!",
						"hindi": "उफ़! नहीं, नहीं!"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이번엔 또 무슨 일이에요?",
						"english": "What's going on this time?",
						"japanese": "今度は何？",
						"chinese": "这次又怎么了？",
						"french": "Qu'est-ce qui se passe encore ?",
						"spanish": "¿Qué pasa ahora?",
						"vietnamese": "Lần này lại chuyện gì nữa đây?",
						"thai": "คราวนี้มีอะไรอีก?",
						"hindi": "इस बार क्या हुआ?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "예전에 옆집 고양이한테 장난감 물어다 줬는데, 글쎄 그게 ‘고급 참치캔 300개’ 빚이래!",
						"english": "I once gave a toy to the neighbor's cat, and apparently, that turned into a debt of '300 premium tuna cans'!",
						"japanese": "昔、隣の猫におもちゃをあげたんだけど、それがなんと「高級ツナ缶300個」の借金になったんだって！",
						"chinese": "以前我给邻居家的猫叼了个玩具，结果你知道吗，那竟然变成了“300罐高级金枪鱼罐头”的债！",
						"french": "J'ai donné un jouet au chat du voisin une fois, et figure-toi que c'est devenu une dette de '300 boîtes de thon de luxe' !",
						"spanish": "Una vez le di un juguete al gato del vecino, ¡y resulta que se convirtió en una deuda de '300 latas de atún premium'!",
						"vietnamese": "Hồi trước tớ có mang đồ chơi cho con mèo nhà hàng xóm, ai dè nó lại thành món nợ '300 lon cá ngừ cao cấp' đấy!",
						"thai": "เคยเอาของเล่นไปให้แมวข้างบ้าน แล้วมันกลายเป็นหนี้ 'ปลาทูน่ากระป๋องพรีเมียม 300 กระป๋อง' ซะงั้น!",
						"hindi": "मैंने एक बार पड़ोसी की बिल्ली को एक खिलौना दिया था, और पता है, वह '300 प्रीमियम टूना कैन' के कर्ज में बदल गया!"
					},
					"speaker": "dax",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…고양이한테요?",
						"english": "...To a cat?",
						"japanese": "…猫にですか？",
						"chinese": "…给猫？",
						"french": "…À un chat ?",
						"spanish": "¿…A un gato?",
						"vietnamese": "…Cho mèo á?",
						"thai": "...ให้แมวเหรอ?",
						"hindi": "...बिल्ली को?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그게 지금 내 집으로 배달 오고 있어! 집에 둘 곳도 없는데!",
						"english": "And now it's being delivered to my house! I don't even have space for it!",
						"japanese": "それが今、私の家に配達されてるんだ！置く場所もないのに！",
						"chinese": "那些东西现在正送往我家！我家都没地方放了！",
						"french": "Et maintenant, c'est en train d'être livré chez moi ! Je n'ai même pas de place !",
						"spanish": "¡Y ahora me lo están entregando en casa! ¡Ni siquiera tengo espacio para ello!",
						"vietnamese": "Giờ nó đang được chuyển đến nhà tớ đây này! Nhà tớ còn chẳng có chỗ mà để!",
						"thai": "ตอนนี้มันกำลังมาส่งที่บ้านฉันแล้ว! ไม่มีที่เก็บด้วยซ้ำไป!",
						"hindi": "और अब वह मेरे घर डिलीवर हो रहा है! मेरे पास रखने की जगह भी नहीं है!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "dax"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "dax"
				},
				{
					"speaker": "dax",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "젠장… 저기 봐요…",
						"english": "Damn it... Look there...",
						"japanese": "くそ… あそこ見て…",
						"chinese": "该死… 看那里…",
						"french": "Mince… Regarde là-bas…",
						"spanish": "Maldita sea… Mira allí…",
						"vietnamese": "Chết tiệt… Nhìn kìa…",
						"thai": "แย่แล้ว... ดูนั่นสิ...",
						"hindi": "धिक्कार है… वहाँ देखो…"
					}
				},
				{
					"content": {
						"korean": "공중 스크린에 닥스의 얼굴이 뜨며 '미지불금' 경고 메시지가 깜빡인다.",
						"english": "Dax's face appears on the public screen, and a 'Unpaid Balance' warning message blinks.",
						"japanese": "空中スクリーンにダックスの顔が映し出され、「未払い金」の警告メッセージが点滅している。",
						"chinese": "空中屏幕上出现了达克斯的脸，并闪烁着“未支付款”的警告信息。",
						"french": "Le visage de Dax apparaît sur l'écran public, et un message d'avertissement 'Solde impayé' clignote.",
						"spanish": "La cara de Dax aparece en la pantalla pública, y un mensaje de advertencia 'Saldo Impagado' parpadea.",
						"vietnamese": "Khuôn mặt của Dax hiện lên trên màn hình công cộng, và một thông báo cảnh báo 'Khoản chưa thanh toán' nhấp nháy.",
						"thai": "ใบหน้าของแด็กซ์ปรากฏขึ้นบนหน้าจอสาธารณะ พร้อมข้อความเตือน 'ยอดค้างชำระ' ที่กะพริบ",
						"hindi": "सार्वजनिक स्क्रीन पर डैक्स का चेहरा दिखाई देता है, और 'अदत्त शेष' का चेतावनी संदेश चमकता है।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "저건…",
						"english": "That's...",
						"japanese": "あれは…",
						"chinese": "那是…",
						"french": "Ça, c'est…",
						"spanish": "Eso es…",
						"vietnamese": "Đó là…",
						"thai": "นั่นมัน...",
						"hindi": "वह तो…"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "내 과거의 사소한 모든 게 빚으로 돌아오고 있어.",
						"english": "All my trivial past actions are coming back as debts.",
						"japanese": "私の過去の些細なこと全てが、借金となって戻ってきてる。",
						"chinese": "我过去所有微不足道的事情都变成了债务回来了。",
						"french": "Toutes mes petites actions passées reviennent sous forme de dettes.",
						"spanish": "Todas mis acciones triviales del pasado están volviendo como deudas.",
						"vietnamese": "Mọi thứ nhỏ nhặt trong quá khứ của tôi đang quay trở lại thành những món nợ.",
						"thai": "เรื่องเล็กน้อยในอดีตทั้งหมดของฉันกำลังกลับมาเป็นหนี้สิน",
						"hindi": "मेरे अतीत की हर छोटी-बड़ी बात कर्ज के रूप में वापस आ रही है।"
					},
					"speaker": "dax",
					"type": "speech"
				},
				{
					"content": {
						"korean": "어떤 사람들은 갑자기 모든 걸 정리하고 사라져. 빚을 갚으러 떠나는 거래.",
						"english": "Some people suddenly clear everything out and disappear. They say they're leaving to pay off debts.",
						"japanese": "ある人たちは、突然全てを整理して姿を消すんだ。借金を返すために旅立つんだって。",
						"chinese": "有些人突然把所有东西都处理掉然后消失了。他们说是去还债了。",
						"french": "Certaines personnes règlent tout soudainement et disparaissent. Ils disent qu'ils partent pour rembourser leurs dettes.",
						"spanish": "Algunas personas de repente arreglan todo y desaparecen. Dicen que se van para pagar deudas.",
						"vietnamese": "Một số người đột nhiên dọn dẹp mọi thứ và biến mất. Họ nói là đi trả nợ.",
						"thai": "บางคนก็จัดการทุกอย่างแล้วหายตัวไปเลย เขาว่าไปใช้หนี้",
						"hindi": "कुछ लोग अचानक सब कुछ निपटा कर गायब हो जाते हैं। वे कहते हैं कि वे कर्ज चुकाने जा रहे हैं।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "dax"
				},
				{
					"content": {
						"korean": "사라진다고요?",
						"english": "Disappear?",
						"japanese": "消えるんですか？",
						"chinese": "消失了？",
						"french": "Disparaissent ?",
						"spanish": "¿Desaparecen?",
						"vietnamese": "Biến mất á?",
						"thai": "หายตัวไปเหรอ?",
						"hindi": "गायब हो जाते हैं?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
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
					"content": {
						"korean": "이제 나한테 남은 빚은… 딱 하나야.",
						"english": "Now, I only have one debt left...",
						"japanese": "残りの借りは…あと一つだけだ。",
						"chinese": "现在，我只剩下…一笔债了。",
						"french": "Maintenant, il ne me reste plus qu'une seule dette...",
						"spanish": "Ahora, solo me queda una deuda...",
						"vietnamese": "Bây giờ, tôi chỉ còn duy nhất một món nợ...",
						"thai": "ตอนนี้หนี้ที่เหลือของฉัน... มีแค่อย่างเดียว",
						"hindi": "अब मेरे पास बस एक ही कर्ज़ बचा है..."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "dax"
				},
				{
					"content": {
						"korean": "무슨 빚인데요?",
						"english": "What kind of debt?",
						"japanese": "何の借りですか？",
						"chinese": "什么债？",
						"french": "Quelle dette ?",
						"spanish": "¿Qué tipo de deuda?",
						"vietnamese": "Món nợ gì cơ?",
						"thai": "หนี้อะไรคะ/ครับ?",
						"hindi": "कैसा कर्ज़?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "dax",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "오래 전에 친구한테 빌린 '우스꽝스러운 분장' 빚. 아직 안 갚았지…",
						"english": "A 'ridiculous costume' debt I owe a friend from a long time ago. Haven't paid it back yet...",
						"japanese": "昔、友人に借りた「おかしな扮装」の借りだ。まだ返してないが…",
						"chinese": "很久以前欠朋友的'滑稽装扮'之债。还没还呢…",
						"french": "Une dette de 'déguisement ridicule' que je dois à un ami depuis longtemps. Je ne l'ai pas encore remboursée...",
						"spanish": "Una deuda de 'disfraz ridículo' que le debo a un amigo desde hace mucho tiempo. Todavía no la he pagado...",
						"vietnamese": "Món nợ 'hóa trang lố bịch' tôi nợ một người bạn từ rất lâu rồi. Vẫn chưa trả...",
						"thai": "หนี้ 'แต่งตัวตลก' ที่ยืมเพื่อนมานานแล้ว ยังไม่ได้คืนเลย...",
						"hindi": "बहुत पहले एक दोस्त से लिया था 'अजीब पोशाक' का कर्ज़। अभी तक चुकाया नहीं है..."
					}
				},
				{
					"content": {
						"korean": "그게 지금 문제가 돼요?",
						"english": "Is that a problem now?",
						"japanese": "それが今、問題になるんですか？",
						"chinese": "那现在是个问题吗？",
						"french": "C'est un problème maintenant ?",
						"spanish": "¿Eso es un problema ahora?",
						"vietnamese": "Chuyện đó bây giờ lại thành vấn đề sao?",
						"thai": "นั่นเป็นปัญหาตอนนี้เหรอคะ/ครับ?",
						"hindi": "क्या यह अब कोई समस्या है?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…정산 시스템은 모든 빚을 갚게 해. 그게 뭔지도 중요하지 않아.",
						"english": "...The settlement system makes you pay all debts. It doesn't matter what it is.",
						"japanese": "…精算システムはすべての借りを返済させる。それが何であろうと関係ない。",
						"chinese": "…结算系统会让你偿还所有债务。它是什么并不重要。",
						"french": "...Le système de règlement vous fait payer toutes les dettes. Peu importe de quoi il s'agit.",
						"spanish": "...El sistema de liquidación te hace pagar todas las deudas. No importa de qué se trate.",
						"vietnamese": "...Hệ thống thanh toán bắt bạn phải trả mọi món nợ. Nó là gì cũng không quan trọng.",
						"thai": "...ระบบชำระหนี้จะทำให้คุณต้องชำระหนี้ทั้งหมด ไม่สำคัญว่าจะเป็นหนี้อะไร",
						"hindi": "...निपटान प्रणाली तुम्हें सारे कर्ज़ चुकाने पर मजबूर करेगी। इससे फ़र्क नहीं पड़ता कि वो क्या है।"
					},
					"emotion": "sad",
					"speaker": "dax",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
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
					"speaker": "dax",
					"type": "speech",
					"content": {
						"korean": "흐어어엉! 저거 봐! 내 빚이 날 잡으러 왔어!",
						"english": "Waaah! Look! My debt came to get me!",
						"japanese": "うわあああん！あれ見て！私の借りが私を捕まえに来た！",
						"chinese": "呜哇啊啊！看啊！我的债来抓我了！",
						"french": "Ouaaah ! Regardez ! Ma dette est venue me chercher !",
						"spanish": "¡Waaah! ¡Mira! ¡Mi deuda vino a por mí!",
						"vietnamese": "Oa oa oa! Nhìn kìa! Món nợ của tôi đến bắt tôi rồi!",
						"thai": "โฮฮฮฮ! ดูนั่นสิ! หนี้ของฉันมาจับฉันแล้ว!",
						"hindi": "ऊऊऊह! देखो! मेरा कर्ज़ मुझे लेने आ गया!"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "정산의 시간이다. 닥스.",
						"english": "It's time for settlement, Daxs.",
						"japanese": "精算の時間だ、ダックス。",
						"chinese": "是时候清算了，达克斯。",
						"french": "C'est l'heure du règlement, Daxs.",
						"spanish": "Es hora de saldar cuentas, Daxs.",
						"vietnamese": "Đến lúc thanh toán rồi, Daxs.",
						"thai": "ถึงเวลาชำระหนี้แล้ว แด็กซ์",
						"hindi": "निपटान का समय है, डैक्स।"
					}
				},
				{
					"content": {
						"korean": "저 괴물이 빚을 청구한다고?",
						"english": "That monster is collecting debts?",
						"japanese": "あの怪物が借りを請求するって？",
						"chinese": "那个怪物在催债？",
						"french": "Ce monstre réclame des dettes ?",
						"spanish": "¿Ese monstruo está cobrando deudas?",
						"vietnamese": "Con quái vật đó đang đòi nợ sao?",
						"thai": "สัตว์ประหลาดนั่นจะมาทวงหนี้เหรอ?",
						"hindi": "वो राक्षस कर्ज़ माँग रहा है?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "과거의 계약은 절대 사라지지 않는다. 너의 '빚'은 지불될 것이다.",
						"english": "Past contracts never disappear. Your 'debt' will be paid.",
						"japanese": "過去の契約は決して消えない。お前の「借り」は支払われるだろう。",
						"chinese": "过去的契约绝不会消失。你的'债'将会被偿还。",
						"french": "Les contrats passés ne disparaissent jamais. Ta 'dette' sera payée.",
						"spanish": "Los contratos pasados nunca desaparecen. Tu 'deuda' será pagada.",
						"vietnamese": "Những giao kèo trong quá khứ sẽ không bao giờ biến mất. 'Món nợ' của ngươi sẽ được thanh toán.",
						"thai": "สัญญาในอดีตไม่มีวันหายไป 'หนี้' ของเจ้าจะต้องถูกชำระ",
						"hindi": "बीते हुए अनुबंध कभी गायब नहीं होते। तुम्हारा 'कर्ज़' चुकाया जाएगा।"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "안 돼! 저 우스꽝스러운 분장을 하기 싫어!",
						"english": "No! I don't want to wear that ridiculous costume!",
						"japanese": "いやだ！あの滑稽な扮装はしたくない！",
						"chinese": "不要！我不想穿那个滑稽的装扮！",
						"french": "Non ! Je ne veux pas porter ce déguisement ridicule !",
						"spanish": "¡No! ¡No quiero usar ese disfraz ridículo!",
						"vietnamese": "Không! Tôi không muốn mặc cái hóa trang lố bịch đó!",
						"thai": "ไม่นะ! ฉันไม่อยากแต่งตัวตลกแบบนั้น!",
						"hindi": "नहीं! मैं वो अजीब पोशाक नहीं पहनना चाहता!"
					},
					"emotion": "sad"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "잠시 지연될 뿐. 모든 '빚'은 반드시 회수된다.",
						"english": "Only a temporary delay. All 'debts' will surely be recovered.",
						"japanese": "一時的な遅延に過ぎない。全ての「借金」は必ず回収される。",
						"chinese": "只是暂时延迟。所有的“债务”都必须回收。",
						"french": "Juste un court délai. Toutes les 'dettes' seront recouvrées.",
						"spanish": "Solo un retraso temporal. Todas las 'deudas' serán recuperadas.",
						"vietnamese": "Chỉ là trì hoãn nhất thời. Mọi 'nợ' đều sẽ được thu hồi.",
						"thai": "แค่ล่าช้าชั่วคราวเท่านั้น 'หนี้' ทั้งหมดจะถูกเรียกเก็บคืนอย่างแน่นอน",
						"hindi": "बस एक अस्थायी देरी। सभी 'कर्ज' अवश्य वसूले जाएंगे।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…괴물은 사라졌는데, 닥스 씨 표정이 왜 그래요?",
						"english": "...The monster is gone, so why does Mr. Dax look like that?",
						"japanese": "…怪物は消えたのに、ダックスさんの表情はどうしてあんななんですか？",
						"chinese": "……怪物消失了，但达克斯先生的表情为什么是那样？",
						"french": "...Le monstre a disparu, alors pourquoi Monsieur Dax a cette expression ?",
						"spanish": "...El monstruo se ha ido, ¿entonces por qué el Sr. Dax tiene esa expresión?",
						"vietnamese": "...Quái vật biến mất rồi, nhưng sao vẻ mặt của ông Dax lại như vậy?",
						"thai": "...สัตว์ประหลาดหายไปแล้ว แต่ทำไมคุณแด็กซ์ถึงทำหน้าแบบนั้นล่ะ?",
						"hindi": "...राक्षस चला गया, तो मिस्टर डैक्स का चेहरा ऐसा क्यों है?"
					}
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "dax"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "정산 시스템은 지독해… 내가 분장을 하지 않아도, 내 '빚'이 어딘가에 쌓여있을 거야.",
						"english": "The settlement system is cruel... Even if I don't wear a disguise, my 'debt' will be accumulating somewhere.",
						"japanese": "精算システムはひどい… 僕が変装しなくても、僕の「借金」はどこかに積み重なっているはずだ。",
						"chinese": "结算系统太残酷了……即使我不化妆，我的“债务”也会在某个地方累积。",
						"french": "Le système de règlement est impitoyable... Même si je ne me déguise pas, ma 'dette' s'accumulera quelque part.",
						"spanish": "El sistema de liquidación es cruel... Incluso si no me disfrazo, mi 'deuda' se acumulará en algún lugar.",
						"vietnamese": "Hệ thống thanh toán thật tàn nhẫn... Dù tôi không cải trang, 'nợ' của tôi vẫn sẽ tích lũy ở đâu đó.",
						"thai": "ระบบการชำระบัญชีมันโหดร้าย... แม้ว่าฉันจะไม่ปลอมตัว 'หนี้' ของฉันก็จะสะสมอยู่ที่ไหนสักแห่ง",
						"hindi": "निपटान प्रणाली क्रूर है... भले ही मैं भेष न बदलूं, मेरा 'कर्ज' कहीं न कहीं जमा होता रहेगा।"
					},
					"speaker": "dax",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "시스템의 '정산'은 계속된다. 도시는 점점 더 기묘한 빚에 잠식된다.",
						"english": "The system's 'settlement' continues. The city is increasingly swallowed by strange debts.",
						"japanese": "システムの「精算」は続く。都市はますます奇妙な借金に侵食されていく。",
						"chinese": "系统的“结算”仍在继续。城市正逐渐被奇特的债务吞噬。",
						"french": "Le 'règlement' du système continue. La ville est de plus en plus submergée par d'étranges dettes.",
						"spanish": "La 'liquidación' del sistema continúa. La ciudad está cada vez más absorbida por deudas extrañas.",
						"vietnamese": "'Thanh toán' của hệ thống vẫn tiếp diễn. Thành phố ngày càng bị những khoản nợ kỳ lạ nuốt chửng.",
						"thai": "'การชำระบัญชี' ของระบบยังคงดำเนินต่อไป เมืองถูกกลืนกินด้วยหนี้สินแปลกประหลาดมากขึ้นเรื่อยๆ",
						"hindi": "सिस्टम का 'निपटान' जारी है। शहर अजीब कर्जों से और भी अधिक घिरता जा रहा है।"
					}
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "네 '빚'은 영원히 남을 것이다.",
						"english": "Your 'debt' will remain forever.",
						"japanese": "お前の「借金」は永遠に残るだろう。",
						"chinese": "你的“债务”将永远存在。",
						"french": "Ta 'dette' restera pour toujours.",
						"spanish": "Tu 'deuda' permanecerá para siempre.",
						"vietnamese": "'Nợ' của ngươi sẽ tồn tại mãi mãi.",
						"thai": "'หนี้' ของคุณจะคงอยู่ตลอดไป",
						"hindi": "तुम्हारा 'कर्ज' हमेशा रहेगा।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "dax",
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "결국… 우스꽝스러운 분장을 해야만 해…?",
						"english": "In the end... do I really have to wear a ridiculous disguise...?",
						"japanese": "結局… 馬鹿げた変装をしなければならないのか…？",
						"chinese": "最终……我必须化上滑稽的妆容吗……？",
						"french": "Au final... dois-je vraiment porter un déguisement ridicule... ?",
						"spanish": "Al final... ¿realmente tengo que usar un disfraz ridículo...?",
						"vietnamese": "Cuối cùng... tôi thực sự phải cải trang lố bịch sao...?",
						"thai": "สุดท้ายแล้ว... ฉันต้องปลอมตัวตลกๆ แบบนั้นจริงๆ เหรอ...?",
						"hindi": "आखिरकार... क्या मुझे वाकई एक हास्यास्पद भेष बनाना होगा...?"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "dax"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "아직 끝나지 않았어. 우리는 포기하지 않아.",
						"english": "It's not over yet. We won't give up.",
						"japanese": "まだ終わっていない。私たちは諦めない。",
						"chinese": "还没有结束。我们不会放弃。",
						"french": "Ce n'est pas encore fini. Nous n'abandonnerons pas.",
						"spanish": "Todavía no ha terminado. No nos rendiremos.",
						"vietnamese": "Vẫn chưa kết thúc. Chúng ta sẽ không bỏ cuộc.",
						"thai": "ยังไม่จบ เราจะไม่ยอมแพ้",
						"hindi": "यह अभी खत्म नहीं हुआ है। हम हार नहीं मानेंगे।"
					},
					"emotion": "angry"
				}
			],
			"id": 15
		}
	]
} as const;
