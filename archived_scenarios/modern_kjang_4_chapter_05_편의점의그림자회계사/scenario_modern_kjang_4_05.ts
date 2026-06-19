export const scenario_modern_kjang_4_05 = {
	"scenario_id": "modern_kjang_4_05",
	"order": 5,
	"act": "climax_finale",
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
		"pool_id": "pool_Spreadsheet_Accountant_V1"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "오래된 편의점 안은, 묘한 침묵이 감돌았다.",
						"english": "Inside the old convenience store, an eerie silence lingered.",
						"japanese": "古いコンビニの中は、妙な静けさが漂っていた。",
						"chinese": "老旧的便利店里，弥漫着一种诡异的寂静。",
						"french": "À l'intérieur du vieux dépanneur, un silence étrange planait.",
						"spanish": "Dentro de la vieja tienda de conveniencia, un silencio espeluznante persistía.",
						"vietnamese": "Bên trong cửa hàng tiện lợi cũ kỹ, một sự im lặng kỳ lạ vẫn còn đó.",
						"thai": "ภายในร้านสะดวกซื้อเก่าแก่ ความเงียบงันน่าขนลุกยังคงอบอวลอยู่",
						"hindi": "पुरानी सुविधा स्टोर के अंदर, एक अजीब खामोशी छाई हुई थी।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "계산할게요.",
						"english": "I'll pay.",
						"japanese": "お会計お願いします。",
						"chinese": "我来结账。",
						"french": "Je vais payer.",
						"spanish": "Voy a pagar.",
						"vietnamese": "Tôi sẽ thanh toán.",
						"thai": "ฉันจะจ่ายเงิน",
						"hindi": "मैं भुगतान करूंगा।"
					},
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"speaker": "kai"
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "K-jang 씨, 힘내세요.",
						"english": "Cheer up, K-jang.",
						"japanese": "K-jangさん、頑張ってください。",
						"chinese": "K-jang先生，加油。",
						"french": "Courage, K-jang.",
						"spanish": "Ánimo, K-jang.",
						"vietnamese": "K-jang, cố lên.",
						"thai": "คุณ K-jang สู้ๆ นะครับ/คะ",
						"hindi": "के-जंग जी, हिम्मत मत हारिए।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "아… 네. 감사합니다.",
						"english": "Oh... right. Thank you.",
						"japanese": "あ… はい。ありがとうございます。",
						"chinese": "啊… 好的。谢谢。",
						"french": "Ah... oui. Merci.",
						"spanish": "Oh... sí. Gracias.",
						"vietnamese": "À... vâng. Cảm ơn.",
						"thai": "อ่า... ครับ/ค่ะ ขอบคุณครับ/ค่ะ",
						"hindi": "अरे... हाँ। धन्यवाद।"
					},
					"speaker": "boss"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이건 뭐지?",
						"english": "What's this?",
						"japanese": "これは何だ？",
						"chinese": "这是什么？",
						"french": "Qu'est-ce que c'est ?",
						"spanish": "¿Qué es esto?",
						"vietnamese": "Cái này là gì?",
						"thai": "นี่มันอะไร?",
						"hindi": "यह क्या है?"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "아, 손님! 그거… 단순한 장식입니다.",
						"english": "Oh, customer! That's... just a decoration.",
						"japanese": "あ、お客様！それは… ただの飾りです。",
						"chinese": "啊，客人！那个… 只是个装饰品。",
						"french": "Ah, client ! C'est... juste une décoration.",
						"spanish": "¡Ah, cliente! Eso... es solo un adorno.",
						"vietnamese": "À, quý khách! Cái đó... chỉ là đồ trang trí thôi.",
						"thai": "โอ้, ลูกค้าครับ/คะ! นั่น... เป็นแค่ของตกแต่งครับ/ค่ะ",
						"hindi": "अरे, ग्राहक! वह... बस एक सजावट है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…",
						"english": "...",
						"japanese": "…",
						"chinese": "…",
						"french": "…",
						"spanish": "…",
						"vietnamese": "...",
						"thai": "...",
						"hindi": "..."
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						3
					],
					"speaker": "kai",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "저기, 이 과자… 가격표랑 다른데요?",
						"english": "Excuse me, this snack... the price tag is different?",
						"japanese": "あの、このお菓子… 値段が値札と違いますけど？",
						"chinese": "那个，这个点心… 价格和价签不一样啊？",
						"french": "Excusez-moi, ce snack... le prix est différent de l'étiquette ?",
						"spanish": "Disculpe, este dulce... ¿el precio es diferente al de la etiqueta?",
						"vietnamese": "Này, cái bánh này... giá khác với trên bảng giá?",
						"thai": "นี่ ขนมนี้... ราคาไม่ตรงกับป้ายเลยนะครับ/คะ?",
						"hindi": "सुनिए, यह स्नैक... कीमत टैग से अलग है?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "네?! 그럴 리가… 잠시만요! 제 장부가…",
						"english": "What?! No way... Just a moment! My ledger...",
						"japanese": "え？！そんなはずは… 少々お待ちください！私の帳簿が…",
						"chinese": "什么？！不可能吧… 请稍等！我的账本…",
						"french": "Quoi ?! C'est impossible... Un instant ! Mon registre...",
						"spanish": "¡¿Qué?! Imposible... ¡Un momento! Mi libro de contabilidad...",
						"vietnamese": "Gì cơ?! Không thể nào... Xin chờ một lát! Sổ sách của tôi...",
						"thai": "อะไรนะครับ/คะ?! เป็นไปไม่ได้... รอสักครู่ครับ/ค่ะ! บัญชีของผม/ดิฉัน...",
						"hindi": "क्या?! ऐसा हो नहीं सकता... एक मिनट रुकिए! मेरा बही-खाता..."
					}
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "괜찮아요, K-jang 씨. 제가 그냥 살게요.",
						"english": "It's fine, K-jang. I'll just buy it.",
						"japanese": "大丈夫ですよ、K-jangさん。私が買いますから。",
						"chinese": "没关系，K-jang先生。我直接买就行了。",
						"french": "C'est bon, K-jang. Je vais juste l'acheter.",
						"spanish": "Está bien, K-jang. Simplemente lo compraré.",
						"vietnamese": "Không sao đâu, K-jang. Tôi cứ mua thôi.",
						"thai": "ไม่เป็นไรหรอกครับ/ค่ะ คุณ K-jang ผม/ดิฉันจะซื้อมันเอง",
						"hindi": "कोई बात नहीं, के-जंग जी। मैं इसे ऐसे ही खरीद लेता हूँ।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "아, 아니요! 제 장부와 숫자는… 완벽해야 합니다!",
						"english": "Oh, no! My ledger and numbers... they must be perfect!",
						"japanese": "あ、いえ！私の帳簿と数字は… 完璧でなければなりません！",
						"chinese": "啊，不！我的账本和数字… 必须是完美的！",
						"french": "Ah, non ! Mon registre et mes chiffres... doivent être parfaits !",
						"spanish": "¡Ah, no! Mi libro de contabilidad y mis números... ¡deben ser perfectos!",
						"vietnamese": "À, không! Sổ sách và số liệu của tôi... phải hoàn hảo!",
						"thai": "อ๊ะ, ไม่ครับ/ค่ะ! บัญชีและตัวเลขของผม/ดิฉัน... ต้องสมบูรณ์แบบครับ/ค่ะ!",
						"hindi": "अरे, नहीं! मेरा बही-खाता और अंक... बिल्कुल सही होने चाहिए!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…",
						"english": "...",
						"japanese": "…",
						"chinese": "…",
						"french": "…",
						"spanish": "…",
						"vietnamese": "...",
						"thai": "...",
						"hindi": "..."
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"speaker": "kai",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이건 판매하는 건가요?",
						"english": "Is this for sale?",
						"japanese": "これ、売り物ですか？",
						"chinese": "这个是卖的吗？",
						"french": "Ceci est à vendre ?",
						"spanish": "¿Esto está a la venta?",
						"vietnamese": "Cái này có bán không?",
						"thai": "อันนี้ขายไหมครับ/คะ?",
						"hindi": "क्या यह बिकाऊ है?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "그, 그건… 아, 아닙니다! 재고가 없는 상품입니다!",
						"english": "Th-that's... Oh, no! It's out of stock!",
						"japanese": "そ、それは…あ、いえ！在庫のない商品です！",
						"chinese": "那、那个…啊，不是！这是没有库存的商品！",
						"french": "C-ceci... Ah, non ! C'est en rupture de stock !",
						"spanish": "E-eso... ¡Oh, no! ¡Es un artículo sin existencias!",
						"vietnamese": "Đ-đó... Ồ, không! Đó là mặt hàng hết hàng rồi!",
						"thai": "น-นั่น... อ๊ะ ไม่ใช่ครับ/ค่ะ! เป็นสินค้าที่ไม่มีในสต็อก!",
						"hindi": "व-वह... ओह, नहीं! यह स्टॉक में नहीं है!"
					}
				},
				{
					"speaker": "kai",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "K-jang 씨, 왜 그래요? 안색이 안 좋은데…",
						"english": "K-jang, what's wrong? You look unwell...",
						"japanese": "K-jangさん、どうしたんですか？顔色が悪いですよ…",
						"chinese": "K-jang先生/女士，你怎么了？脸色不太好…",
						"french": "K-jang, qu'est-ce qui ne va pas ? Tu as mauvaise mine...",
						"spanish": "K-jang, ¿qué te pasa? Tienes mala cara...",
						"vietnamese": "K-jang, có chuyện gì vậy? Sắc mặt anh/chị không tốt...",
						"thai": "คุณ K-jang เป็นอะไรไปคะ/ครับ? ดูหน้าซีดๆ นะ...",
						"hindi": "के-जंग जी, क्या हुआ? आपकी तबीयत ठीक नहीं लग रही..."
					}
				},
				{
					"speaker": "boss",
					"content": {
						"korean": "아닙니다! 아무것도…!",
						"english": "Nothing! It's nothing...!",
						"japanese": "いえ！何でも…！",
						"chinese": "不是！没什么…！",
						"french": "Non ! Rien du tout... !",
						"spanish": "¡Nada! ¡No es nada...!",
						"vietnamese": "Không có gì! Không có gì đâu...!",
						"thai": "ไม่ครับ/ค่ะ! ไม่มีอะไร…!",
						"hindi": "नहीं! कुछ भी नहीं…!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "재고가 없는데 왜 진열돼 있죠?",
						"english": "If it's out of stock, why is it on display?",
						"japanese": "在庫がないのに、なぜ陳列されているんですか？",
						"chinese": "既然没有库存，为什么还摆在那儿？",
						"french": "S'il est en rupture de stock, pourquoi est-il exposé ?",
						"spanish": "Si no hay existencias, ¿por qué está en exhibición?",
						"vietnamese": "Hết hàng rồi sao vẫn trưng bày?",
						"thai": "ถ้าไม่มีในสต็อก แล้วทำไมถึงเอามาโชว์ล่ะ?",
						"hindi": "अगर स्टॉक में नहीं है, तो डिस्प्ले पर क्यों है?"
					},
					"emotion": "angry",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "kai",
					"spot": [
						1,
						3
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "여기 장부… 뭔가 이상한데요?",
						"english": "This ledger... Something's off.",
						"japanese": "ここの帳簿…何かおかしいですね？",
						"chinese": "这本账簿…有点奇怪？",
						"french": "Ce registre... Il y a quelque chose d'étrange.",
						"spanish": "Este libro de contabilidad... algo no cuadra.",
						"vietnamese": "Quyển sổ này... có gì đó lạ.",
						"thai": "สมุดบัญชีนี่... มีอะไรแปลกๆ นะ?",
						"hindi": "यह खाता... कुछ अजीब है?"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "손님… 너무 깊이 알려고 하지 마십시오.",
						"english": "Customer... Don't try to know too much.",
						"japanese": "お客様…あまり深入りなさらないでください。",
						"chinese": "顾客…请不要探究太深。",
						"french": "Client... N'essayez pas d'en savoir trop.",
						"spanish": "Cliente... No intente saber demasiado.",
						"vietnamese": "Khách hàng... đừng cố tìm hiểu quá sâu.",
						"thai": "คุณลูกค้า... อย่าพยายามรู้ให้ลึกนักเลยครับ/ค่ะ",
						"hindi": "ग्राहक... ज़्यादा जानने की कोशिश मत कीजिए।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "boss"
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "K-jang 씨…?",
						"english": "K-jang...?",
						"japanese": "K-jangさん…？",
						"chinese": "K-jang先生/女士…？",
						"french": "K-jang... ?",
						"spanish": "¿K-jang...?",
						"vietnamese": "K-jang...?",
						"thai": "คุณ K-jang...?",
						"hindi": "के-जंग जी...?"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "이 편의점의 질서는… 제가 지킵니다. 모두, 제 장부 안에서 움직여야 해요.",
						"english": "The order of this convenience store... I maintain it. Everyone must move within my ledger.",
						"japanese": "このコンビニの秩序は…私が守ります。全て、私の帳簿の中で動かねばなりません。",
						"chinese": "这家便利店的秩序…由我来维护。所有人，都必须在我的账簿中行事。",
						"french": "L'ordre de ce dépanneur... c'est moi qui le maintiens. Tout le monde doit agir selon mon registre.",
						"spanish": "El orden de esta tienda de conveniencia... yo lo mantengo. Todos deben moverse dentro de mi libro de contabilidad.",
						"vietnamese": "Trật tự của cửa hàng tiện lợi này... do tôi duy trì. Mọi người, đều phải hành động trong sổ sách của tôi.",
						"thai": "ระเบียบของร้านสะดวกซื้อแห่งนี้... ผม/ฉันเป็นคนรักษา ทุกคนจะต้องเคลื่อนไหวภายใต้สมุดบัญชีของผม/ฉัน",
						"hindi": "इस सुविधा स्टोर का आदेश... मैं बनाए रखता हूँ। सभी को मेरे बहीखाते के भीतर चलना होगा।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "당신… 누구야?",
						"english": "You... who are you?",
						"japanese": "あなた…誰だ？",
						"chinese": "你…是谁？",
						"french": "Toi... qui es-tu ?",
						"spanish": "Tú... ¿quién eres?",
						"vietnamese": "Anh/chị... là ai?",
						"thai": "คุณ... เป็นใคร?",
						"hindi": "तुम... कौन हो?"
					},
					"speaker": "character_any"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "크윽… 내 장부의 균형이… 무너지는 건가…",
						"english": "Ugh... Is the balance of my ledger... crumbling?",
						"japanese": "くっ… 私の帳簿の均衡が… 崩れるというのか…。",
						"chinese": "呃……我账簿的平衡……要被打破了吗……",
						"french": "Ugh... L'équilibre de mon grand livre... est-il en train de s'effondrer ?",
						"spanish": "Ugh... ¿El equilibrio de mi libro mayor... se está desmoronando?",
						"vietnamese": "Ưgh... Sự cân bằng trong sổ sách của ta... đang sụp đổ sao...?",
						"thai": "อึก… ความสมดุลในสมุดบัญชีของฉัน… กำลังพังทลายงั้นรึ…",
						"hindi": "उफ़… क्या मेरे बहीखाते का संतुलन… बिगड़ रहा है…?"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "boss"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "하지만… 진짜 '회계'는 아직 끝나지 않았다…!",
						"english": "But... the real 'accounting' isn't over yet...!",
						"japanese": "しかし… 本当の「会計」はまだ終わっていない…！",
						"chinese": "但是……真正的“会计”还没有结束……！",
						"french": "Mais... la vraie 'comptabilité' n'est pas encore terminée... !",
						"spanish": "Pero... ¡la verdadera 'contabilidad' aún no ha terminado...!",
						"vietnamese": "Nhưng... 'kế toán' thực sự vẫn chưa kết thúc...!",
						"thai": "แต่… 'การบัญชี' ที่แท้จริงยังไม่จบลง…!",
						"hindi": "लेकिन… असली 'लेखा-जोखा' अभी खत्म नहीं हुआ है…!"
					},
					"speaker": "boss"
				},
				{
					"content": {
						"korean": "진짜 회계…?",
						"english": "Real accounting...?",
						"japanese": "本当の会計…？",
						"chinese": "真正的会计……？",
						"french": "La vraie comptabilité... ?",
						"spanish": "¿Contabilidad real...?",
						"vietnamese": "Kế toán thực sự...?",
						"thai": "การบัญชีที่แท้จริง… ?",
						"hindi": "असली लेखा-जोखा…?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "낡은 편의점의 질서는 무너졌다. 하지만, 숫자의 그림자는 여전히 남아 있었다.",
						"english": "The old convenience store's order crumbled. Yet, the shadow of the numbers lingered.",
						"japanese": "古いコンビニの秩序は崩れた。しかし、数字の影はまだ残っていた。",
						"chinese": "旧便利店秩序崩塌了。然而，数字的阴影依然存在。",
						"french": "L'ordre de l'ancienne supérette s'est effondré. Pourtant, l'ombre des chiffres demeurait.",
						"spanish": "El orden del antiguo minimarket se derrumbó. Sin embargo, la sombra de los números aún persistía.",
						"vietnamese": "Trật tự của cửa hàng tiện lợi cũ đã sụp đổ. Tuy nhiên, bóng ma của những con số vẫn còn đó.",
						"thai": "ระเบียบของร้านสะดวกซื้อเก่าพังทลายลงแล้ว ทว่าเงามืดของตัวเลขยังคงอยู่",
						"hindi": "पुराने सुविधा स्टोर का क्रम टूट गया। हालांकि, संख्याओं की छाया अभी भी बनी हुई थी।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						3
					],
					"speaker": "kai"
				},
				{
					"speaker": "kai",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "K-jang 씨가… 저런 사람이었다니…",
						"english": "K-jang... was that kind of person after all...",
						"japanese": "K-jangさんが…あんな人だったなんて…",
						"chinese": "K-jang 先生竟然是…那样的人…",
						"french": "K-jang était donc… ce genre de personne…",
						"spanish": "Así que K-jang era… esa clase de persona…",
						"vietnamese": "K-jang… là loại người như vậy sao…",
						"thai": "คุณ K-jang… เป็นคนแบบนั้นจริงๆ หรือนี่…",
						"hindi": "K-jang जी… ऐसे व्यक्ति थे…"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "새로운 장부의 첫 페이지가, 이제 막 펼쳐지고 있었다.",
						"english": "The first page of the new ledger was just being turned.",
						"japanese": "新しい帳簿の最初のページが、まさに今開かれようとしていた。",
						"chinese": "新账本的第一页，刚刚被翻开。",
						"french": "La première page du nouveau registre venait juste de s'ouvrir.",
						"spanish": "La primera página del nuevo libro de cuentas acababa de abrirse.",
						"vietnamese": "Trang đầu tiên của sổ cái mới, vừa mới được mở ra.",
						"thai": "หน้าแรกของสมุดบัญชีเล่มใหม่ เพิ่งถูกเปิดออก",
						"hindi": "नए बहीखाते का पहला पृष्ठ, अभी-अभी खुल रहा था।"
					},
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "편의점 가장 깊숙한 곳. 마침내, 재고가 맞지 않는 수상한 상품을 발견했다.",
						"english": "Deep within the convenience store, I finally found a suspicious item with an incorrect inventory count.",
						"japanese": "コンビニの最も奥深く。ついに、在庫が合わない怪しい商品を発見した。",
						"chinese": "便利店最深处。终于，发现了一件库存不符的可疑商品。",
						"french": "Au plus profond du dépanneur. Finalement, j'ai découvert un article suspect dont l'inventaire ne correspondait pas.",
						"spanish": "En lo más profundo de la tienda de conveniencia. Finalmente, encontré un artículo sospechoso con un inventario incorrecto.",
						"vietnamese": "Sâu thẳm trong cửa hàng tiện lợi. Cuối cùng, tôi đã tìm thấy một món hàng đáng ngờ có số lượng tồn kho không khớp.",
						"thai": "ลึกเข้าไปในร้านสะดวกซื้อ ในที่สุดฉันก็เจอสินค้าต้องสงสัยที่จำนวนสต็อกไม่ตรงกัน",
						"hindi": "सुविधा स्टोर के सबसे गहरे कोने में। आखिरकार, मुझे एक संदिग्ध वस्तु मिली जिसका स्टॉक मेल नहीं खा रहा था।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이거였군… 이 상품이 모든 걸 말해주고 있었어.",
						"english": "So this was it... This item was telling me everything.",
						"japanese": "これだったのか… この商品がすべてを物語っていたんだ。",
						"chinese": "原来是它……这件商品说明了一切。",
						"french": "C'était donc ça... Cet article me disait tout.",
						"spanish": "Así que era esto... Este artículo me lo estaba diciendo todo.",
						"vietnamese": "Ra là vậy... Món hàng này đã nói lên tất cả.",
						"thai": "นี่เอง… สินค้าชิ้นนี้บอกทุกอย่าง",
						"hindi": "तो यह था… यह वस्तु सब कुछ बता रही थी।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "젠장! 재고가 안 맞아! 내 장부의 조화를… 깨뜨렸어!",
						"english": "Damn it! The inventory doesn't match! You've broken the harmony of my ledger!",
						"japanese": "ちくしょう！在庫が合わない！私の帳簿の調和を…破ったな！",
						"chinese": "该死！库存不符！你打破了我账簿的和谐！",
						"french": "Zut ! L'inventaire ne correspond pas ! Vous avez brisé l'harmonie de mon grand livre !",
						"spanish": "¡Maldita sea! ¡El inventario no coincide! ¡Has roto la armonía de mi libro mayor!",
						"vietnamese": "Chết tiệt! Tồn kho không khớp! Ngươi đã phá vỡ sự hài hòa trong sổ sách của ta!",
						"thai": "บ้าจริง! สต็อกไม่ตรง! ทำลายความกลมกลืนในสมุดบัญชีของฉัน!",
						"hindi": "धिक्कार है! स्टॉक मेल नहीं खाता! तुमने मेरे बहीखाते की सामंजस्य… तोड़ दी!"
					},
					"speaker": "boss"
				},
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"speaker": "kai",
					"duration_ms": 500
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "K-jang 씨…!?",
						"english": "Mr. K-jang...?",
						"japanese": "K-jangさん…！？",
						"chinese": "K-jang 先生……！？",
						"french": "Monsieur K-jang… !?",
						"spanish": "¿¡Señor K-jang...!?",
						"vietnamese": "K-jang tiên sinh…!?",
						"thai": "คุณ K-jang…!?",
						"hindi": "के-जंग जी…!?"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "감히… 내 질서를 흐트러뜨려? 그 대가는… '미수금'으로 처리될 걸세!",
						"english": "How dare you... disrupt my order? The price for that... will be handled as 'Accounts Receivable'!",
						"japanese": "貴様… 私の秩序を乱すとは？その代償は…「未収金」として処理されるぞ！",
						"chinese": "竟敢……扰乱我的秩序？那个代价……将作为“应收账款”处理！",
						"french": "Comment oses-tu... perturber mon ordre ? Le prix à payer... sera traité comme des 'créances' !",
						"spanish": "¿Cómo te atreves... a perturbar mi orden? ¡El precio por eso... se tratará como 'cuentas por cobrar'!",
						"vietnamese": "Ngươi dám... làm xáo trộn trật tự của ta sao? Cái giá phải trả... sẽ được xử lý như 'khoản phải thu'!",
						"thai": "แกกล้า… มาป่วนระเบียบของฉันงั้นรึ? ค่าตอบแทนนั้น… จะถูกจัดการในฐานะ 'ลูกหนี้'!",
						"hindi": "तुम्हारी हिम्मत कैसे हुई… मेरी व्यवस्था बिगाड़ने की? इसकी कीमत… 'प्राप्य खातों' के रूप में चुकाई जाएगी!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "boss"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "장부의… 미수금?",
						"english": "Ledger's... Accounts Receivable?",
						"japanese": "帳簿の…未収金だと？",
						"chinese": "账簿的……应收账款？",
						"french": "Les créances... du grand livre ?",
						"spanish": "¿Las... cuentas por cobrar del libro mayor?",
						"vietnamese": "Khoản phải thu... của sổ sách?",
						"thai": "ลูกหนี้… ในสมุดบัญชี?",
						"hindi": "बहीखाते के… प्राप्य खाते?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "하하하! 이 숫자들이… 너희의 운명을 결정할 거다!",
						"english": "Hahahaha! These numbers... will determine your fate!",
						"japanese": "ハハハ！この数字たちが… お前たちの運命を決定するだろう！",
						"chinese": "哈哈哈！这些数字……将决定你们的命运！",
						"french": "Hahahaha ! Ces chiffres... décideront de votre destin !",
						"spanish": "¡Jajajaja! ¡Estos números... decidirán vuestro destino!",
						"vietnamese": "Hahahahaha! Những con số này... sẽ quyết định số phận của các ngươi!",
						"thai": "ฮ่าฮ่าฮ่า! ตัวเลขพวกนี้… จะเป็นตัวกำหนดชะตากรรมของพวกแก!",
						"hindi": "हाहाहा! ये संख्याएँ… तुम्हारा भाग्य तय करेंगी!"
					}
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "어리석은 것들! 내 장부는… 완벽하다! 너희는 그저 '미수금'일 뿐!",
						"english": "Fools! My ledger... is flawless! You're nothing but 'outstanding debts'!",
						"japanese": "愚か者どもめ！私の帳簿は…完璧だ！お前たちはただの「未収金」に過ぎない！",
						"chinese": "愚蠢的东西！我的账本…是完美的！你们不过是“未收款”而已！",
						"french": "Imbéciles ! Mon registre… est parfait ! Vous n'êtes que des « créances irrécouvrables » !",
						"spanish": "¡Estúpidos! ¡Mi libro de cuentas… es perfecto! ¡Vosotros sois meras 'cuentas por cobrar'!",
						"vietnamese": "Đồ ngốc! Sổ cái của ta… hoàn hảo! Các ngươi chỉ là 'khoản phải thu' mà thôi!",
						"thai": "เจ้าพวกโง่! บัญชีของข้า… มันสมบูรณ์แบบ! พวกเจ้าเป็นแค่ \"หนี้ค้างจ่าย\" เท่านั้น!",
						"hindi": "मूर्खों! मेरा बहीखाता… एकदम सही है! तुम बस 'प्राप्य खाते' हो!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "boss"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "…다시 돌아올 거야. 이 장부의 진실을 밝혀낼 때까지.",
						"english": "...We'll return. Until the truth of this ledger is unveiled.",
						"japanese": "…また戻ってくる。この帳簿の真実を明らかにするまで。",
						"chinese": "…我们会再回来的。直到揭开这本账本的真相。",
						"french": "…Nous reviendrons. Jusqu'à ce que la vérité sur ce registre soit révélée.",
						"spanish": "…Volveremos. Hasta que revelemos la verdad de este libro de cuentas.",
						"vietnamese": "…Chúng ta sẽ quay lại. Cho đến khi sự thật về sổ cái này được phơi bày.",
						"thai": "…เราจะกลับมา จนกว่าจะเปิดเผยความจริงของบัญชีเล่มนี้ได้",
						"hindi": "…हम वापस आएंगे। जब तक इस बहीखाते का सच सामने नहीं आता।"
					}
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "kai",
					"spot": [
						2,
						3
					],
					"duration_ms": 500
				},
				{
					"speaker": "kai",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "우리가… 이대로 물러날 순 없어…",
						"english": "We... can't just back down like this...",
						"japanese": "私たちが…このまま引き下がるわけにはいかない…",
						"chinese": "我们…不能就这样退缩…",
						"french": "Nous… ne pouvons pas reculer comme ça…",
						"spanish": "Nosotros… no podemos rendirnos así…",
						"vietnamese": "Chúng ta… không thể lùi bước như thế này được…",
						"thai": "พวกเรา… จะถอยไปแบบนี้ไม่ได้…",
						"hindi": "हम… ऐसे हार नहीं मान सकते…"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"낡은 편의점, 겉보기엔 평범했다.",
			"하지만 장부의 숫자들은 거짓을 말하고 있었다.",
			"진실을 파헤치는 순간, 모든 것이 뒤틀리기 시작했다.",
			"그것은 단순한 재고 문제가 아니었다."
		],
		"english": [
			"An old convenience store, seemingly ordinary.",
			"But the numbers in the ledger told a lie.",
			"The moment I unearthed the truth, everything began to twist.",
			"It wasn't just a simple inventory problem."
		],
		"japanese": [
			"古びたコンビニ、一見すると普通だった。",
			"しかし、帳簿の数字は嘘をついていた。",
			"真実を暴いた瞬間、すべてが歪み始めた。",
			"それは単なる在庫問題ではなかった。"
		],
		"chinese": [
			"一家老旧的便利店，看起来平平无奇。",
			"但账本上的数字却在撒谎。",
			"揭开真相的那一刻，一切都开始扭曲。",
			"这不仅仅是一个简单的库存问题。"
		],
		"french": [
			"Un vieux dépanneur, en apparence ordinaire.",
			"Mais les chiffres du grand livre mentaient.",
			"Au moment où j'ai déterré la vérité, tout a commencé à se tordre.",
			"Ce n'était pas un simple problème d'inventaire."
		],
		"spanish": [
			"Una vieja tienda de conveniencia, aparentemente normal.",
			"Pero los números del libro mayor mentían.",
			"En el momento en que desenterré la verdad, todo empezó a torcerse.",
			"No era solo un simple problema de inventario."
		],
		"vietnamese": [
			"Một cửa hàng tiện lợi cũ kỹ, nhìn bề ngoài thì bình thường.",
			"Nhưng những con số trong sổ sách lại nói dối.",
			"Khoảnh khắc tôi vạch trần sự thật, mọi thứ bắt đầu xoắn vặn.",
			"Đó không chỉ là một vấn đề tồn kho đơn giản."
		],
		"thai": [
			"ร้านสะดวกซื้อเก่าแก่ ดูเหมือนจะธรรมดา",
			"แต่ตัวเลขในบัญชีบอกคำโกหก",
			"ในนาทีที่ฉันค้นพบความจริง ทุกสิ่งก็เริ่มบิดเบี้ยว",
			"มันไม่ใช่แค่ปัญหาเรื่องสต็อกสินค้าธรรมดา"
		],
		"hindi": [
			"एक पुरानी सुविधा स्टोर, देखने में सामान्य।",
			"लेकिन खाते में लिखे अंक झूठ बोल रहे थे।",
			"जिस पल मैंने सच्चाई उजागर की, सब कुछ बिगड़ने लगा।",
			"यह सिर्फ एक साधारण इन्वेंट्री समस्या नहीं थी।"
		]
	},
	"epilogue": {
		"korean": [
			"장부의 비밀이 드러났지만, 편의점은 여전히 기묘한 침묵 속에 잠겨 있었다.",
			"K-jang의 광기는 멈췄지만, 그의 눈빛 속에 숨겨진 숫자의 그림자는 지워지지 않았다.",
			"이곳에서 밝혀낸 진실은 시작에 불과했다. 과연 우리는 모든 것을 계산할 수 있을까?",
			"정산되지 않은 미수금처럼, 이야기는 끝나지 않았다."
		],
		"english": [
			"The ledger's secret was revealed, yet the convenience store remained in an eerie silence.",
			"K-jang's madness ceased, but the shadow of numbers hidden in his eyes remained indelible.",
			"The truth revealed here was just the beginning. Can we truly calculate everything?",
			"Like an unsettled receivable, the story was far from over."
		],
		"japanese": [
			"帳簿の秘密は明かされたが、コンビニは依然として奇妙な沈黙に包まれていた。",
			"K-jangの狂気は止まったが、彼の瞳に隠された数字の影は消えなかった。",
			"ここで明らかになった真実は始まりに過ぎなかった。果たして私たちはすべてを計算できるのだろうか？",
			"未精算の未収金のように、物語は終わっていなかった。"
		],
		"chinese": [
			"账本的秘密被揭露了，但便利店依然笼罩在一种诡异的沉默中。",
			"K-jang的疯狂停止了，但他眼中隐藏的数字阴影却难以磨灭。",
			"这里揭示的真相只是一个开始。我们真的能计算出一切吗？",
			"就像一笔未结清的应收账款，故事远未结束。"
		],
		"french": [
			"Le secret du grand livre fut révélé, pourtant le dépanneur demeura dans un silence étrange.",
			"La folie de K-jang cessa, mais l'ombre des chiffres cachée dans ses yeux demeura indélébile.",
			"La vérité révélée ici n'était que le début. Pouvons-nous vraiment tout calculer ?",
			"Comme une créance non réglée, l'histoire était loin d'être terminée."
		],
		"spanish": [
			"El secreto del libro mayor fue revelado, sin embargo, la tienda de conveniencia permaneció en un silencio espeluznante.",
			"La locura de K-jang cesó, pero la sombra de los números oculta en sus ojos permaneció imborrable.",
			"La verdad revelada aquí era solo el principio. ¿Podemos realmente calcularlo todo?",
			"Como una cuenta por cobrar no liquidada, la historia estaba lejos de terminar."
		],
		"vietnamese": [
			"Bí mật của sổ sách đã được tiết lộ, nhưng cửa hàng tiện lợi vẫn chìm trong một sự im lặng kỳ lạ.",
			"Sự điên loạn của K-jang đã dừng lại, nhưng bóng tối của những con số ẩn trong mắt anh ta vẫn không thể xóa nhòa.",
			"Sự thật được tiết lộ ở đây chỉ là khởi đầu. Liệu chúng ta có thể thực sự tính toán được mọi thứ không?",
			"Như một khoản phải thu chưa được thanh toán, câu chuyện vẫn chưa kết thúc."
		],
		"thai": [
			"ความลับของบัญชีถูกเปิดเผย แต่ร้านสะดวกซื้อยังคงเงียบงันอย่างน่าขนลุก",
			"ความบ้าคลั่งของ K-jang หยุดลง แต่เงาของตัวเลขที่ซ่อนอยู่ในดวงตาของเขาก็ยังคงไม่ลบเลือน",
			"ความจริงที่เปิดเผยที่นี่เป็นเพียงจุดเริ่มต้น เราจะสามารถคำนวณทุกสิ่งได้จริงหรือ?",
			"เหมือนกับลูกหนี้ที่ยังไม่ได้ชำระ เรื่องราวก็ยังไม่จบลง"
		],
		"hindi": [
			"खाते का रहस्य उजागर हो गया, फिर भी सुविधा स्टोर एक अजीब खामोशी में डूबा रहा।",
			"के-जंग का पागलपन तो रुक गया, लेकिन उसकी आँखों में छिपी संख्याओं की परछाई अमिट रही।",
			"यहां उजागर हुई सच्चाई तो बस शुरुआत थी। क्या हम वाकई सब कुछ गिन सकते हैं?",
			"एक अनसुलझे प्राप्य की तरह, कहानी खत्म नहीं हुई थी।"
		]
	}
} as const;
