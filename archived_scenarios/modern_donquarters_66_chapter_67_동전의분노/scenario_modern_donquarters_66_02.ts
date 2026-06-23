export const scenario_modern_donquarters_66_02 = {
	"scenario_id": "modern_donquarters_66_02",
	"order": 2,
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
			"dialogue": [
				{
					"content": {
						"korean": "어둠이 짙게 깔린 뒷골목. 자판기 주변에는 늘 욕망이 들끓었다.",
						"english": "A dark alleyway. Desire always simmered around the vending machine.",
						"japanese": "闇が深く覆う裏路地。自動販売機の周りには、常に欲望が渦巻いていた。",
						"chinese": "漆黑的后巷。自动售货机周围总是欲望涌动。",
						"french": "Une ruelle sombre. Le désir bouillonnait toujours autour du distributeur.",
						"spanish": "Un callejón oscuro. El deseo siempre bullía alrededor de la máquina expendedora.",
						"vietnamese": "Một con hẻm tối tăm. Ham muốn luôn sôi sục quanh máy bán hàng tự động.",
						"thai": "ตรอกมืดมิด ความปรารถนาพลุ่งพล่านรอบๆ ตู้ขายของเสมอ",
						"hindi": "एक अंधेरी गली। वेंडिंग मशीन के आसपास हमेशा इच्छा उबलती रहती थी।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "max",
					"action": "enter",
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "max",
					"emotion": "happy",
					"content": {
						"korean": "야, 들었어? 저 자판기… 가끔 엄청난 돈을 뱉어낸대!",
						"english": "Hey, did you hear? That vending machine… sometimes it spits out a fortune!",
						"japanese": "おい、聞いたか？あの自動販売機…たまに莫大な金を吐き出すらしいぞ！",
						"chinese": "嘿，你听说了吗？那台自动售货机……有时会吐出巨款！",
						"french": "Hé, t'as entendu ? Ce distributeur… parfois il crache une fortune !",
						"spanish": "Oye, ¿escuchaste? Esa máquina expendedora… ¡a veces escupe una fortuna!",
						"vietnamese": "Này, nghe nói gì chưa? Cái máy bán hàng tự động đó… đôi khi nó nhả ra một đống tiền khủng đấy!",
						"thai": "เฮ้ย ได้ยินไหม? ตู้ขายของนั่น… บางทีก็คายเงินก้อนโตออกมานะ!",
						"hindi": "अरे, तुमने सुना? वह वेंडिंग मशीन… कभी-कभी बहुत सारा पैसा उगलती है!"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "말도 안 돼. 렌도 다 잃었잖아.",
						"english": "Nonsense. Ren lost everything, too.",
						"japanese": "馬鹿な。レンだって全部失ったじゃないか。",
						"chinese": "胡说。连伦都输光了。",
						"french": "N'importe quoi. Ren a tout perdu aussi.",
						"spanish": "Tonterías. Ren también lo perdió todo.",
						"vietnamese": "Vớ vẩn. Ren cũng đã mất hết rồi.",
						"thai": "ไร้สาระ เรนก็เสียทุกอย่างไปหมดแล้วนี่",
						"hindi": "बकवास। रेन ने भी सब कुछ खो दिया था।"
					},
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "그건 렌이 운이 없었던 거고. 난 달라! 난 촉이 좋다고!",
						"english": "That's because Ren was unlucky. I'm different! I have a good feeling!",
						"japanese": "それはレンが運が悪かっただけだろ。俺は違う！俺は勘がいいんだ！",
						"chinese": "那是伦运气不好。我不同！我有预感！",
						"french": "C'est parce que Ren n'a pas eu de chance. Je suis différent ! J'ai un bon pressentiment !",
						"spanish": "Eso es porque Ren tuvo mala suerte. ¡Yo soy diferente! ¡Tengo un buen presentimiento!",
						"vietnamese": "Đó là vì Ren xui xẻo thôi. Tôi khác! Tôi có linh cảm tốt!",
						"thai": "นั่นเพราะเรนโชคร้ายต่างหาก ฉันไม่เหมือนกัน! ฉันมีลางสังหรณ์ดี!",
						"hindi": "वह इसलिए क्योंकि रेन बदकिस्मत था। मैं अलग हूं! मुझे अच्छा लग रहा है!"
					},
					"emotion": "happy",
					"speaker": "max",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "낡은 기계가 꺽꺽거리는 소리를 냈다. 흡사 비웃음처럼.",
						"english": "The old machine groaned, almost like a scoff.",
						"japanese": "古びた機械が、嘲笑うかのようにガタガタと音を立てた。",
						"chinese": "老旧的机器发出嘎吱声，仿佛在嘲笑。",
						"french": "La vieille machine gémit, presque comme un ricanement.",
						"spanish": "La vieja máquina chirrió, casi como una burla.",
						"vietnamese": "Cỗ máy cũ kỹ phát ra tiếng cọt kẹt, giống như một tiếng cười khẩy.",
						"thai": "เครื่องจักรเก่าส่งเสียงครืดคราด ราวกับเยาะเย้ย",
						"hindi": "पुरानी मशीन ने घुरघुराहट की आवाज निकाली, मानो उपहास कर रही हो।"
					}
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "max",
					"action": "enter",
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "좋아! 이번엔 될 것 같아! 한 방에 터뜨려 버릴 거라고!",
						"english": "Alright! I think this is it! I'm going to hit the jackpot in one go!",
						"japanese": "よし！今度こそいけそうだ！一発で大当たりを出すぞ！",
						"chinese": "好！这次肯定行！我要一击爆发！",
						"french": "Bien ! Cette fois, ça va marcher ! Je vais tout faire sauter d'un coup !",
						"spanish": "¡Bien! ¡Creo que esta vez sí! ¡Voy a reventar la banca de una vez!",
						"vietnamese": "Được rồi! Lần này chắc chắn được! Tôi sẽ nổ tung nó trong một lần!",
						"thai": "ดีเลย! ครั้งนี้น่าจะสำเร็จ! ฉันจะระเบิดมันในครั้งเดียว!",
						"hindi": "ठीक है! मुझे लगता है कि इस बार हो जाएगा! मैं एक बार में ही सब कुछ उड़ा दूंगा!"
					},
					"emotion": "happy",
					"speaker": "max"
				},
				{
					"type": "speech",
					"content": {
						"korean": "맥스, 그만해. 얼굴이 안 좋아 보여.",
						"english": "Max, stop it. You look terrible.",
						"japanese": "マックス、やめて。顔色が悪いよ。",
						"chinese": "麦克斯，住手。你脸色看起来不太好。",
						"french": "Max, arrête. Tu as mauvaise mine.",
						"spanish": "Max, para. Tienes mala cara.",
						"vietnamese": "Max, dừng lại đi. Trông cậu không ổn chút nào.",
						"thai": "แม็กซ์ หยุดนะ นายดูไม่ดีเลย",
						"hindi": "मैक्स, रुक जाओ। तुम्हारी तबियत ठीक नहीं लग रही।"
					},
					"emotion": "sad",
					"speaker": "character_1"
				},
				{
					"emotion": "base",
					"speaker": "character_2",
					"content": {
						"korean": "저기 봐. 자판기 옆에… 녹슨 동전 문양이 있네. 꼭 옛날 갱단 문양 같아.",
						"english": "Look over there. Next to the vending machine... there's a rusted coin emblem. It looks just like an old gang symbol.",
						"japanese": "あれ見て。自販機の隣に…錆びたコインの紋章がある。まるで昔のギャングのマークみたいだ。",
						"chinese": "看那边。自动售货机旁边…有一个生锈的硬币图案。看起来就像是老帮派的标志。",
						"french": "Regarde là-bas. À côté du distributeur... il y a un emblème de pièce rouillée. On dirait un vieux symbole de gang.",
						"spanish": "Mira ahí. Junto a la máquina expendedora... hay un emblema de moneda oxidada. Parece un antiguo símbolo de pandilla.",
						"vietnamese": "Nhìn kia kìa. Cạnh máy bán hàng tự động... có một biểu tượng đồng xu bị rỉ sét. Cứ như biểu tượng của một băng đảng cũ vậy.",
						"thai": "ดูนั่นสิ ข้างตู้หยอดเหรียญ...มีตราเหรียญขึ้นสนิมอยู่ ดูเหมือนสัญลักษณ์แก๊งเก่าๆ เลย",
						"hindi": "वहाँ देखो। वेंडिंग मशीन के पास... एक जंग लगा सिक्का प्रतीक है। यह किसी पुराने गिरोह के प्रतीक जैसा दिखता है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "젠장! 방해하지 마! 곧 터질 거야!",
						"english": "Damn it! Don't interfere! It's gonna burst!",
						"japanese": "くそっ！邪魔するな！もうすぐ爆発するぞ！",
						"chinese": "该死！别妨碍我！它马上就要炸了！",
						"french": "Bordel ! Ne m'interromps pas ! Ça va exploser !",
						"spanish": "¡Maldita sea! ¡No interfieras! ¡Va a explotar!",
						"vietnamese": "Chết tiệt! Đừng làm phiền! Nó sắp nổ tung rồi!",
						"thai": "บ้าเอ๊ย! อย่าขัดขวาง! มันกำลังจะระเบิดแล้ว!",
						"hindi": "धिक्कार है! दखल मत दो! यह बस फटने वाला है!"
					},
					"speaker": "max",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "맥스, 멈춰! 그건 네 돈이 아니야!",
						"english": "Max, stop! That's not your money!",
						"japanese": "マックス、やめろ！あれはお前の金じゃない！",
						"chinese": "麦克斯，住手！那不是你的钱！",
						"french": "Max, arrête ! Ce n'est pas ton argent !",
						"spanish": "¡Max, para! ¡Ese no es tu dinero!",
						"vietnamese": "Max, dừng lại! Đó không phải tiền của cậu!",
						"thai": "แม็กซ์ หยุดนะ! นั่นไม่ใช่เงินของนาย!",
						"hindi": "मैक्स, रुको! वह तुम्हारा पैसा नहीं है!"
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
						"korean": "맥스는 모든 것을 잃었다. 그의 팔에는 차가운 숫자들이 새겨졌다.",
						"english": "Max lost everything. Cold numbers were carved into his arm.",
						"japanese": "マックスは全てを失った。彼の腕には冷たい数字が刻まれていた。",
						"chinese": "麦克斯失去了一切。冰冷的数字刻在他的手臂上。",
						"french": "Max a tout perdu. Des chiffres froids étaient gravés sur son bras.",
						"spanish": "Max lo perdió todo. Números fríos estaban grabados en su brazo.",
						"vietnamese": "Max đã mất tất cả. Những con số lạnh lẽo được khắc trên cánh tay anh.",
						"thai": "แม็กซ์สูญเสียทุกสิ่ง ตัวเลขเย็นชาถูกสลักลงบนแขนของเขา",
						"hindi": "मैक्स ने सब कुछ खो दिया। उसके हाथ पर ठंडे अंक उकेरे गए थे।"
					},
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "max",
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "…젠장… 전부… 전부 다…",
						"english": "...Damn it... Everything... Everything gone...",
						"japanese": "…くそっ…全部…全部が…",
						"chinese": "…该死…全部…全部都…",
						"french": "...Bordel... Tout... Tout est perdu...",
						"spanish": "...Maldita sea... Todo... Todo perdido...",
						"vietnamese": "...Chết tiệt... Tất cả... tất cả rồi...",
						"thai": "...บ้าจริง...ทั้งหมด...ทั้งหมดเลย...",
						"hindi": "...धिक्कार है... सब कुछ... सब कुछ खत्म..."
					},
					"speaker": "max",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "character_3",
					"content": {
						"korean": "맥스… 괜찮아? 정신 차려…",
						"english": "Max... Are you okay? Snap out of it...",
						"japanese": "マックス…大丈夫？しっかりして…",
						"chinese": "麦克斯…你还好吗？清醒一点…",
						"french": "Max... Ça va ? Reprends tes esprits...",
						"spanish": "¿Max... Estás bien? Reacciona...",
						"vietnamese": "Max, cậu ổn chứ? Tỉnh lại đi...",
						"thai": "แม็กซ์...ไม่เป็นไรนะ? ได้สติหน่อย...",
						"hindi": "मैक्स... तुम ठीक हो? होश में आओ..."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "max",
					"emotion": "sad",
					"content": {
						"korean": "(팔을 가리키며) 봐… 납부 기한…",
						"english": "(Pointing to arm) Look... the due date...",
						"japanese": "（腕を指差しながら）見て…支払い期限が…",
						"chinese": "(指着手臂) 看…付款截止日期…",
						"french": "(Désignant le bras) Regarde... la date limite de paiement...",
						"spanish": "(Señalando el brazo) Mira... la fecha de vencimiento...",
						"vietnamese": "(Chỉ vào cánh tay) Nhìn kìa... hạn chót thanh toán...",
						"thai": "(ชี้ไปที่แขน) ดูสิ...กำหนดชำระ...",
						"hindi": "(हाथ की ओर इशारा करते हुए) देखो... भुगतान की अंतिम तिथि..."
					}
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "안 돼… 또 생겼어. 렌처럼…",
						"english": "No... It's happened again. Like Ren...",
						"japanese": "いやだ…またできた。レンみたいに…",
						"chinese": "不…又出现了。像伦一样…",
						"french": "Non... C'est arrivé encore. Comme Ren...",
						"spanish": "No... Ha vuelto a pasar. Como Ren...",
						"vietnamese": "Không... Lại xuất hiện rồi. Giống như Ren...",
						"thai": "ไม่นะ...มันเกิดขึ้นอีกแล้ว เหมือนเรน...",
						"hindi": "नहीं... यह फिर से हो गया। रेन की तरह..."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "자판기는 돈만 빼앗는 게 아니었어. 우리의 욕심을 먹고 자라는 거였어.",
						"english": "The vending machine didn't just take money. It fed on our greed.",
						"japanese": "自販機は金だけを奪ったんじゃない。俺たちの欲望を食い物にしてたんだ。",
						"chinese": "自动售货机不只是夺走了金钱。它还在吞噬着我们的贪婪。",
						"french": "Le distributeur ne nous a pas seulement volé notre argent. Il se nourrissait de notre cupidité.",
						"spanish": "La máquina expendedora no solo nos quitó el dinero. Se alimentaba de nuestra codicia.",
						"vietnamese": "Máy bán hàng tự động không chỉ lấy tiền. Nó còn nuôi dưỡng lòng tham của chúng ta.",
						"thai": "ตู้หยอดเหรียญไม่ได้แค่เอาเงินไป แต่มันกำลังกัดกินความโลภของเรา",
						"hindi": "वेंडिंग मशीन ने सिर्फ पैसे ही नहीं लिए। इसने हमारे लालच को खाया।"
					},
					"speaker": "character_4",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "사람들의 얼굴에는 공포가 서렸다. 다음은 누구 차례일까.",
						"english": "Fear gripped their faces. Whose turn would be next?",
						"japanese": "人々の顔には恐怖が浮かんでいた。次は誰の番だろうか。",
						"chinese": "人们脸上写满了恐惧。下一个会是谁呢？",
						"french": "La peur déformait leurs visages. À qui le tour après ?",
						"spanish": "El miedo se cernía sobre sus rostros. ¿Quién sería el siguiente?",
						"vietnamese": "Nỗi sợ hãi hiện rõ trên khuôn mặt họ. Ai sẽ là người tiếp theo đây?",
						"thai": "ความกลัวเกาะกุมใบหน้าพวกเขา ใครจะเป็นรายต่อไปนะ?",
						"hindi": "लोगों के चेहरों पर डर था। अगला किसका नंबर होगा?"
					}
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "맥스의 꼴을 봐. 자판기는 사람을 이렇게 망가뜨려.",
						"english": "Look at Max. The vending machine ruins people like this.",
						"japanese": "マックスの姿を見てみろ。あの自販機は人をこんな風にダメにするんだ。",
						"chinese": "看看麦克斯的样子。自动贩卖机把人害成这样。",
						"french": "Regarde Max. Cette machine à sous détruit les gens.",
						"spanish": "Mira a Max. Esa máquina expendedora destroza a la gente así.",
						"vietnamese": "Nhìn Max đi. Cái máy bán hàng tự động này hủy hoại con người như thế đó.",
						"thai": "ดูสภาพแม็กซ์สิ ตู้กดนี่ทำคนพังได้ขนาดนี้เลยนะ",
						"hindi": "मैक्स की हालत देखो। वेंडing मशीन लोगों को ऐसे तबाह करती है।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"emotion": "angry",
					"content": {
						"korean": "저 기계는… 정말 사악해.",
						"english": "That machine... it's truly evil.",
						"japanese": "あの機械は…本当に邪悪だ。",
						"chinese": "那台机器……真是邪恶。",
						"french": "Cette machine... est vraiment maléfique.",
						"spanish": "Esa máquina... es verdaderamente malvada.",
						"vietnamese": "Cái máy đó… thật sự độc ác.",
						"thai": "เครื่องนั่น... มันชั่วร้ายจริงๆ",
						"hindi": "वह मशीन… सचमुच शैतानी है।"
					}
				},
				{
					"content": {
						"korean": "단순히 돈을 빼앗는 게 아니야. 우리 마음속의 탐욕을 이용하는 거지.",
						"english": "It doesn't just take money. It exploits the greed in our hearts.",
						"japanese": "単にお金を奪うだけじゃない。俺たちの心の中の貪欲を利用しているんだ。",
						"chinese": "它不只是夺走金钱。它利用我们心中的贪婪。",
						"french": "Elle ne prend pas seulement de l'argent. Elle exploite la cupidité dans nos cœurs.",
						"spanish": "No solo quita dinero. Explota la codicia en nuestros corazones.",
						"vietnamese": "Nó không chỉ cướp tiền. Nó còn lợi dụng lòng tham trong trái tim chúng ta.",
						"thai": "มันไม่ได้แค่เอาเงินไป มันใช้ประโยชน์จากความโลภในใจเราต่างหาก",
						"hindi": "यह सिर्फ पैसे नहीं लेता। यह हमारे दिलों में बैठे लालच का फायदा उठाता है।"
					},
					"emotion": "base",
					"speaker": "character_2",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "이 불길한 기운을 가진 자판기를 멈춰야만 한다. 더 큰 희생이 생기기 전에.",
						"english": "We must stop this ominous vending machine. Before more sacrifices are made.",
						"japanese": "この不吉な気配を放つ自販機を止めなければならない。これ以上犠牲者が出る前に。",
						"chinese": "我们必须阻止这台不祥的自动贩卖机。在更大的牺牲发生之前。",
						"french": "Nous devons arrêter cette machine à sous sinistre. Avant qu'il n'y ait plus de victimes.",
						"spanish": "Debemos detener esta ominosa máquina expendedora. Antes de que haya más sacrificios.",
						"vietnamese": "Chúng ta phải ngăn chặn cái máy bán hàng tự động đầy điềm gở này. Trước khi có thêm nhiều hy sinh nữa.",
						"thai": "เราต้องหยุดตู้กดที่มีพลังงานลางร้ายนี่ให้ได้ ก่อนที่จะมีผู้สังเวยมากกว่านี้",
						"hindi": "हमें इस अशुभ वेंडिंग मशीन को रोकना होगा। इससे पहले कि और बलि चढ़ें।"
					}
				},
				{
					"content": {
						"korean": "이 이상은 안 돼. 우리가 멈춰야 해.",
						"english": "No more. We have to stop it.",
						"japanese": "これ以上はダメだ。俺たちが止めなきゃ。",
						"chinese": "不能再这样下去了。我们必须阻止它。",
						"french": "Pas un pas de plus. Nous devons l'arrêter.",
						"spanish": "Hasta aquí. Debemos detenerlo.",
						"vietnamese": "Không thể chịu đựng thêm nữa. Chúng ta phải ngăn chặn nó.",
						"thai": "เกินกว่านี้ไม่ได้แล้ว เราต้องหยุดมัน",
						"hindi": "और नहीं। हमें इसे रोकना होगा।"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_1",
					"content": {
						"korean": "그래. 여기 끝에서 기다리고 있는 놈이 누구든…",
						"english": "Right. Whoever's waiting at the end of this...",
						"japanese": "ああ。この道の先で待ち構えているのが誰であろうと…",
						"chinese": "没错。不管是谁在尽头等着……",
						"french": "Oui. Qui que ce soit qui nous attende au bout du chemin...",
						"spanish": "Sí. Quienquiera que nos espere al final...",
						"vietnamese": "Đúng vậy. Dù kẻ nào đang chờ ở cuối con con đường này...",
						"thai": "ใช่แล้ว ไม่ว่าใครจะรออยู่ที่ปลายทางนี้...",
						"hindi": "हाँ। जो भी इस अंत में इंतजार कर रहा हो..."
					},
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "정체 모를 그림자가 비명과 함께 사라졌다.",
						"english": "The unknown shadow vanished with a scream.",
						"japanese": "正体不明の影は悲鳴とともに消え去った。",
						"chinese": "不明的影子伴随着尖叫声消失了。",
						"french": "L'ombre inconnue disparut dans un cri.",
						"spanish": "La sombra desconocida se desvaneció con un grito.",
						"vietnamese": "Bóng đen bí ẩn biến mất cùng tiếng hét.",
						"thai": "เงาลึกลับหายไปพร้อมกับเสียงกรีดร้อง",
						"hindi": "अज्ञात परछाई चीख के साथ गायब हो गई।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "크크… 이게 끝이라고 생각하나? …{random_boss}는… 겨우 시작일 뿐이다…",
						"english": "Hehe... Do you think this is the end? ...{random_boss} is... just the beginning...",
						"japanese": "クク… これが終わりだとでも思うのか？…{random_boss}は…ほんの始まりに過ぎない…",
						"chinese": "呵呵…你以为这就是结束了吗？…{random_boss}只是…一个开始而已…",
						"french": "Héhé... Croyez-vous que c'est la fin ? ...{random_boss} n'est... qu'un début...",
						"spanish": "Jeje... ¿Creéis que esto es el fin? ...{random_boss} es... solo el principio...",
						"vietnamese": "Khà khà… Ngươi nghĩ đây là kết thúc sao? …{random_boss} chỉ là… khởi đầu mà thôi…",
						"thai": "ฮิฮิ... คิดว่านี่คือจุดจบงั้นรึ? ...{random_boss} น่ะ... เป็นแค่จุดเริ่มต้นเท่านั้น...",
						"hindi": "हाहा… क्या तुम्हें लगता है कि यह अंत है? …{random_boss} तो… बस शुरुआत है…"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "아직… 끝이 아니야. 더 큰 게 숨어있어.",
						"english": "It's not... over yet. Something bigger lurks.",
						"japanese": "まだ…終わりじゃない。もっと大きなものが隠れている。",
						"chinese": "还没…结束。更大的东西藏在后面。",
						"french": "Ce n'est pas... encore fini. Quelque chose de plus grand se cache.",
						"spanish": "Todavía no... ha terminado. Algo más grande se esconde.",
						"vietnamese": "Vẫn… chưa kết thúc. Có thứ gì đó lớn hơn đang ẩn giấu.",
						"thai": "ยัง... ไม่จบหรอก ยังมีบางสิ่งที่ใหญ่กว่าซ่อนอยู่",
						"hindi": "अभी… खत्म नहीं हुआ है। कुछ बड़ा छिपा हुआ है।"
					}
				},
				{
					"content": {
						"korean": "자판기의 깊은 곳에서 희미한 빛이 터져 나왔다. 어딘가 익숙한, 녹슨 동전 문양이었다.",
						"english": "A faint light burst forth from deep within the vending machine. It was a somehow familiar, rusted coin pattern.",
						"japanese": "自動販売機の奥深くから、かすかな光が放たれた。どこか見覚えのある、錆びたコインの模様だった。",
						"chinese": "自动贩卖机深处迸发出一道微弱的光芒。那是一个有些熟悉的，生锈的硬币图案。",
						"french": "Une faible lumière jaillit des profondeurs du distributeur. C'était un motif de pièce rouillée, étrangement familier.",
						"spanish": "Una luz tenue brotó de lo más profundo de la máquina expendedora. Era un patrón de moneda oxidada, extrañamente familiar.",
						"vietnamese": "Một tia sáng yếu ớt bùng lên từ sâu bên trong máy bán hàng tự động. Đó là một hoa văn đồng xu rỉ sét, quen thuộc một cách lạ lùng.",
						"thai": "แสงสลัวพุ่งออกมาจากส่วนลึกของตู้หยอดเหรียญ มันเป็นลวดลายเหรียญที่ขึ้นสนิมและคุ้นเคย",
						"hindi": "वेंडिंग मशीन के गहरे से एक मंद प्रकाश फूट पड़ा। यह किसी तरह का परिचित, जंग लगा सिक्का पैटर्न था।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 자판기 위로 드리워졌다. 어둠 속에서 빛나는 붉은 눈.",
						"english": "A colossal shadow loomed over the vending machine. Red eyes gleamed in the darkness.",
						"japanese": "巨大な影が自販機の上に覆いかぶさった。闇の中で輝く赤い目。",
						"chinese": "巨大的阴影笼罩在自动贩卖机上。黑暗中闪烁着红色的眼睛。",
						"french": "Une ombre colossale planait au-dessus de la machine à sous. Des yeux rouges brillaient dans l'obscurité.",
						"spanish": "Una sombra colosal se cernió sobre la máquina expendedora. Ojos rojos brillaban en la oscuridad.",
						"vietnamese": "Một bóng đen khổng lồ bao trùm lên chiếc máy bán hàng tự động. Đôi mắt đỏ rực sáng trong bóng tối.",
						"thai": "เงาขนาดมหึมาทอดทับตู้กด ดวงตาสีแดงเปล่งประกายในความมืด",
						"hindi": "एक विशाल छाया वेंडिंग मशीन पर मंडरा रही थी। अंधेरे में लाल आँखें चमक उठीं।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "하찮은 인간들이 또 기어왔군. 이번엔 뭘 빼앗길 셈인가?",
						"english": "Insignificant humans crawling back again. What do you intend to lose this time?",
						"japanese": "つまらぬ人間どもがまた這い寄ってきたか。今度は何を奪われるつもりだ？",
						"chinese": "卑微的人类又爬回来了。这次打算失去什么？",
						"french": "D'insignifiants humains rampent encore ici. Qu'avez-vous l'intention de perdre cette fois ?",
						"spanish": "Insignificantes humanos arrastrándose de nuevo. ¿Qué piensan perder esta vez?",
						"vietnamese": "Lũ người hèn mọn lại bò đến nữa rồi. Lần này định để mất cái gì đây?",
						"thai": "มนุษย์กระจอกคลานมาอีกแล้วรึ? คราวนี้คิดจะเสียอะไรไปอีกล่ะ?",
						"hindi": "तुच्छ इंसान फिर से रेंगते हुए आ गए। इस बार क्या गंवाने का इरादा है?"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "네놈이… 맥스를 그렇게 만든 거야?",
						"english": "You... you did that to Max?",
						"japanese": "お前が…マックスをあんな風にしたのか？",
						"chinese": "你就是……把麦克斯变成那样的元凶？",
						"french": "Toi... c'est toi qui as fait ça à Max ?",
						"spanish": "¿Tú... tú le hiciste eso a Max?",
						"vietnamese": "Ngươi… ngươi đã biến Max thành ra như vậy?",
						"thai": "แก... แกทำกับแม็กซ์แบบนั้นเหรอ?",
						"hindi": "तुमने… तुमने मैक्स को ऐसा बनाया?"
					}
				},
				{
					"content": {
						"korean": "욕심에 눈이 먼 건 너희들 스스로다. 나는 단지… 길을 안내했을 뿐.",
						"english": "You were blinded by your own greed. I merely... showed the way.",
						"japanese": "欲に目がくらんだのはお前たち自身だ。私はただ…道を案内しただけだ。",
						"chinese": "是你们自己被贪婪蒙蔽了双眼。我只是…指引了方向而已。",
						"french": "C'est votre propre cupidité qui vous a aveuglés. Je n'ai fait que... vous montrer le chemin.",
						"spanish": "Fuisteis vosotros quienes os cegasteis por la codicia. Yo solo... os mostré el camino.",
						"vietnamese": "Chính các ngươi đã bị lòng tham làm mờ mắt. Ta chỉ… dẫn lối mà thôi.",
						"thai": "พวกเจ้าต่างหากที่ตาบอดด้วยความโลภ ข้าแค่... ชี้ทางให้เท่านั้นเอง",
						"hindi": "यह तुम स्वयं थे जो लालच में अंधे हो गए। मैंने बस… रास्ता दिखाया।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"emotion": "angry",
					"content": {
						"korean": "말도 안 되는 소리! 우릴 이용했잖아!",
						"english": "Nonsense! You used us!",
						"japanese": "何を言っているんだ！我々を利用しただろう！",
						"chinese": "胡说八道！你利用了我们！",
						"french": "N'importe quoi ! Tu nous as utilisés !",
						"spanish": "¡Qué tontería! ¡Nos utilizaste!",
						"vietnamese": "Vô lý! Ngươi đã lợi dụng chúng ta!",
						"thai": "ไร้สาระ! แกหลอกใช้พวกเรานี่นา!",
						"hindi": "बकवास! तुमने हमें इस्तेमाल किया!"
					}
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "자판기는 모든 것을 삼키고, 어둠이 다시 짙어졌다.",
						"english": "The vending machine swallowed everything, and darkness deepened again.",
						"japanese": "自動販売機は全てを飲み込み、再び闇が深まった。",
						"chinese": "自动贩卖机吞噬了一切，黑暗再次笼罩。",
						"french": "Le distributeur avala tout, et l'obscurité s'épaissit à nouveau.",
						"spanish": "La máquina expendedora se tragó todo, y la oscuridad se hizo más densa de nuevo.",
						"vietnamese": "Máy bán hàng tự động nuốt chửng mọi thứ, và bóng tối lại bao trùm.",
						"thai": "ตู้หยอดเหรียญกลืนกินทุกสิ่ง และความมืดก็กลับมาเข้มข้นอีกครั้ง",
						"hindi": "वेंडिंग मशीन ने सब कुछ निगल लिया, और अंधेरा फिर से गहरा हो गया।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "크크… 아직 멀었다. 너희의 욕심은… 더 깊은 곳으로 이끌 것이다.",
						"english": "Hehe... Not yet. Your greed will... lead you to deeper places.",
						"japanese": "クク… まだまだだ。お前たちの欲は…もっと深い場所へと導くだろう。",
						"chinese": "呵呵…还早着呢。你们的贪婪…会将你们引向更深的地方。",
						"french": "Héhé... Pas encore. Votre cupidité vous... mènera vers des profondeurs encore plus grandes.",
						"spanish": "Jeje... Todavía no. Vuestra codicia... os llevará a lugares más profundos.",
						"vietnamese": "Khà khà… Vẫn còn xa lắm. Lòng tham của các ngươi sẽ… dẫn lối đến những nơi sâu thẳm hơn.",
						"thai": "ฮิฮิ... ยังอีกนาน ความโลภของพวกเจ้า... จะนำพาไปสู่ที่ที่ลึกกว่านี้",
						"hindi": "हाहा… अभी बहुत बाकी है। तुम्हारा लालच… तुम्हें और गहरे स्थानों पर ले जाएगा।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "아니… 포기 안 해. 우린 여기서 멈추지 않아!",
						"english": "No... I won't give up. We won't stop here!",
						"japanese": "いや…諦めない。私たちはここで止まらない！",
						"chinese": "不…我不会放弃。我们不会止步于此！",
						"french": "Non... je n'abandonnerai pas. Nous ne nous arrêterons pas ici !",
						"spanish": "No... no me rendiré. ¡No nos detendremos aquí!",
						"vietnamese": "Không… ta sẽ không bỏ cuộc. Chúng ta sẽ không dừng lại ở đây!",
						"thai": "ไม่... ฉันไม่ยอมแพ้หรอก พวกเราจะไม่หยุดอยู่แค่นี้!",
						"hindi": "नहीं… मैं हार नहीं मानूंगा। हम यहां नहीं रुकेंगे!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"한때 번영했던 도시, 이제 탐욕의 잿더미가 되었다.",
			"낡은 자판기. 사람들은 그 앞에서 희망을 속삭였다.",
			"큰돈을 토해낸다는 소문. 그 달콤한 유혹에 모두가 덫으로 걸어 들어갔다.",
			"하지만 그곳에 있는 건 행운이 아니었다. 단지, 파멸뿐."
		],
		"english": [
			"Once a prosperous city, now ashes of greed.",
			"An old vending machine. People whispered hopes before it.",
			"Rumors of it spitting out fortunes. Everyone walked into the trap of its sweet temptation.",
			"But what awaited wasn't luck. Only ruin."
		],
		"japanese": [
			"かつて栄えた都市は、今や貪欲の灰燼と化した。",
			"古びた自動販売機。人々はその前で希望を囁いた。",
			"大金が吐き出されるという噂。その甘い誘惑に、誰もが罠へと足を踏み入れた。",
			"だが、そこにあったのは幸運ではなかった。ただ、破滅のみ。"
		],
		"chinese": [
			"曾经繁荣的城市，如今已是贪婪的灰烬。",
			"一台旧自动售货机。人们在它面前低语着希望。",
			"吐出巨款的传闻。所有人都在那甜蜜的诱惑中，走入了陷阱。",
			"但那里等着的不是好运。只有毁灭。"
		],
		"french": [
			"Jadis une ville prospère, désormais cendres de la cupidité.",
			"Un vieux distributeur automatique. Les gens y chuchotaient leurs espoirs.",
			"Des rumeurs de fortunes crachées. Tous sont tombés dans le piège de sa douce tentation.",
			"Mais ce qui les attendait n'était pas la chance. Seulement la ruine."
		],
		"spanish": [
			"Una ciudad próspera, ahora cenizas de la codicia.",
			"Una vieja máquina expendedora. La gente susurraba esperanzas ante ella.",
			"Rumores de que escupía fortunas. Todos cayeron en la trampa de su dulce tentación.",
			"Pero lo que allí había no era suerte. Solo ruina."
		],
		"vietnamese": [
			"Từng là thành phố thịnh vượng, giờ chỉ còn tro tàn của lòng tham.",
			"Một máy bán hàng tự động cũ kỹ. Người ta thì thầm hy vọng trước nó.",
			"Tin đồn rằng nó sẽ nhả ra số tiền lớn. Mọi người đều bước vào cái bẫy của sự cám dỗ ngọt ngào ấy.",
			"Nhưng cái ở đó không phải là may mắn. Chỉ là, sự hủy diệt mà thôi."
		],
		"thai": [
			"เมืองที่เคยรุ่งเรือง บัดนี้เหลือเพียงเถ้าถ่านแห่งความโลภ",
			"ตู้ขายของเก่า ผู้คนต่างกระซิบความหวังตรงหน้ามัน",
			"ข่าวลือที่ว่ามันจะคายเงินก้อนโตออกมา ทุกคนต่างเดินเข้ากับดักของคำลวงอันหอมหวานนั้น",
			"แต่สิ่งที่อยู่ที่นั่นไม่ใช่โชค แต่เป็นเพียงความพินาศ"
		],
		"hindi": [
			"एक समय समृद्ध शहर, अब लालच की राख बन गया।",
			"एक पुरानी वेंडिंग मशीन। लोग उसके सामने उम्मीदें फुसफुसाते थे।",
			"इसके द्वारा बड़ी रकम उगलने की अफवाहें। हर कोई उसके मीठे प्रलोभन के जाल में फंस गया।",
			"लेकिन वहां सौभाग्य नहीं था। केवल विनाश।"
		]
	}
} as const;
