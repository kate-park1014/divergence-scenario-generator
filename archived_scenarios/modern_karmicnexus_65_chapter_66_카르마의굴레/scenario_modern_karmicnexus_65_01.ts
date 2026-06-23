export const scenario_modern_karmicnexus_65_01 = {
	"scenario_id": "modern_karmicnexus_65_01",
	"order": 1,
	"act": "intro",
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
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "도시를 감싸던 스모그가 더욱 짙어졌다. 혼란은 이미 시작되었다.",
						"english": "The smog enveloping the city grew thicker. Chaos had already begun.",
						"japanese": "都市を包んでいたスモッグはさらに濃くなった。混乱はすでに始まっていた。",
						"chinese": "笼罩城市的烟雾更加浓重了。混乱已经开始。",
						"french": "Le smog enveloppant la ville s'épaississait. Le chaos avait déjà commencé.",
						"spanish": "El smog que envolvía la ciudad se hizo más denso. El caos ya había comenzado.",
						"vietnamese": "Làn khói mù bao trùm thành phố càng dày đặc hơn. Hỗn loạn đã bắt đầu.",
						"thai": "หมอกควันที่ปกคลุมเมืองหนาแน่นขึ้น ความโกลาหลได้เริ่มต้นขึ้นแล้ว",
						"hindi": "शहर को घेरे हुए धुंध और घनी हो गई। अराजकता पहले ही शुरू हो चुकी थी।"
					},
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "다들 미쳐가고 있어. 저번 달엔 멀쩡했던 계약이 파기됐다고?",
						"english": "Everyone's losing their minds. A perfectly valid contract was canceled last month?",
						"japanese": "みんなおかしくなってる。先月までは問題なかった契約が破棄されたって？",
						"chinese": "大家都疯了。上个月还正常的合同被解除了？",
						"french": "Tout le monde devient fou. Un contrat parfaitement valide a été annulé le mois dernier ?",
						"spanish": "Todos se están volviendo locos. ¿Un contrato perfectamente válido fue cancelado el mes pasado?",
						"vietnamese": "Mọi người đều đang mất trí. Hợp đồng vẫn ổn tháng trước đã bị hủy bỏ sao?",
						"thai": "ทุกคนกำลังเสียสติ สัญญาที่ยังดีอยู่เมื่อเดือนที่แล้วถูกยกเลิกเหรอ?",
						"hindi": "सब पागल हो रहे हैं। पिछले महीने एक पूरी तरह से वैध अनुबंध रद्द कर दिया गया था?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이젠 주식도 믿을 수 없게 됐어. 시스템이 고장 난 건가?",
						"english": "Now stocks can't be trusted either. Is the system broken?",
						"japanese": "もう株も信じられなくなった。システムが故障したのか？",
						"chinese": "现在连股票都不可信了。系统是出故障了吗？",
						"french": "Maintenant, on ne peut plus faire confiance aux actions. Le système est-il en panne ?",
						"spanish": "Ahora ni siquiera se puede confiar en las acciones. ¿Se ha averiado el sistema?",
						"vietnamese": "Giờ thì cổ phiếu cũng không còn đáng tin nữa. Hệ thống bị hỏng rồi sao?",
						"thai": "ตอนนี้หุ้นก็เชื่อถือไม่ได้แล้ว ระบบพังหรือเปล่า?",
						"hindi": "अब शेयरों पर भी भरोसा नहीं किया जा सकता। क्या सिस्टम खराब हो गया है?"
					}
				},
				{
					"type": "direction",
					"spot": [
						4,
						3
					],
					"speaker": "dax",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "dax",
					"content": {
						"korean": "고장? 아니. 정산이야.",
						"english": "Broken? No. It's a settlement.",
						"japanese": "故障？違う。清算だ。",
						"chinese": "故障？不。是清算。",
						"french": "En panne ? Non. C'est un règlement.",
						"spanish": "¿Averiado? No. Es un ajuste de cuentas.",
						"vietnamese": "Hỏng? Không. Là thanh toán.",
						"thai": "พังเหรอ? ไม่ใช่. มันคือการชำระสะสาง",
						"hindi": "खराब? नहीं। यह एक निपटान है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "정산?",
						"english": "Settlement?",
						"japanese": "清算？",
						"chinese": "清算？",
						"french": "Règlement ?",
						"spanish": "¿Ajuste de cuentas?",
						"vietnamese": "Thanh toán?",
						"thai": "ชำระสะสางเหรอ?",
						"hindi": "निपटान?"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "카르마의 장부가 모든 빚을 갚으라 하고 있어. 이제 끝난다고.",
						"english": "The Ledger of Karma demands all debts be paid. It's over now.",
						"japanese": "カルマの帳簿が全ての借金を返済しろと言っている。もう終わりだ。",
						"chinese": "因果报应之账本要求偿还所有债务。现在一切都结束了。",
						"french": "Le Grand Livre du Karma exige que toutes les dettes soient payées. C'est la fin.",
						"spanish": "El Libro del Karma exige que todas las deudas sean pagadas. Ya se acabó.",
						"vietnamese": "Sổ cái Nghiệp chướng yêu cầu mọi khoản nợ phải được thanh toán. Mọi thứ sắp kết thúc rồi.",
						"thai": "บัญชีแห่งกรรมกำลังเรียกร้องให้ชำระหนี้ทั้งหมด ตอนนี้มันจบแล้ว",
						"hindi": "कर्म का बहीखाता सभी कर्जों को चुकाने की मांग कर रहा है। अब यह खत्म हो गया है।"
					},
					"speaker": "dax"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "말도 안 돼. 그런 게 어딨어!",
						"english": "No way. That's impossible!",
						"japanese": "ありえない。そんなことあるわけない！",
						"chinese": "不可能。哪有这种事！",
						"french": "Impossible. Comment ça peut exister !",
						"spanish": "¡Imposible. Eso no existe!",
						"vietnamese": "Không thể nào. Làm gì có chuyện đó!",
						"thai": "เป็นไปไม่ได้. จะมีเรื่องแบบนั้นได้ยังไง!",
						"hindi": "यह नामुमकिन है। ऐसा कैसे हो सकता है!"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "도시의 모든 게 장부 아래 있어. 이제 그 장부가 깨어난 거야.",
						"english": "Everything in the city is under the ledger. And now, the ledger has awakened.",
						"japanese": "この街の全ては帳簿の下にある。そして、その帳簿が目覚めたんだ。",
						"chinese": "这座城市的一切都在账本之下。现在，那账本已经苏醒了。",
						"french": "Tout dans la ville est sous le registre. Et maintenant, ce registre s'est éveillé.",
						"spanish": "Todo en la ciudad está bajo el control del libro de cuentas. Y ahora, ese libro ha despertado.",
						"vietnamese": "Mọi thứ trong thành phố đều nằm dưới cuốn sổ cái. Giờ đây, cuốn sổ đó đã thức tỉnh rồi.",
						"thai": "ทุกสิ่งในเมืองอยู่ภายใต้บัญชีเล่มนั้น และตอนนี้ บัญชีเล่มนั้นก็ตื่นขึ้นมาแล้ว",
						"hindi": "शहर की हर चीज़ उस बही-खाते के अधीन है। और अब, वह बही-खाता जाग उठा है।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "….",
						"english": "...",
						"japanese": "…。",
						"chinese": "…。",
						"french": "...",
						"spanish": "...",
						"vietnamese": "...",
						"thai": "...",
						"hindi": "..."
					},
					"speaker": "character_any"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거리를 메우던 활기는 사라지고, 불안과 공포만이 맴돌았다.",
						"english": "The vibrant energy that filled the streets vanished, replaced only by anxiety and fear.",
						"japanese": "通りを埋め尽くしていた活気は消え去り、不安と恐怖だけが漂っていた。",
						"chinese": "街头巷尾的活力已然消散，只剩下不安与恐惧弥漫。",
						"french": "L'animation qui remplissait les rues avait disparu, seule l'anxiété et la peur planaient.",
						"spanish": "La vitalidad que llenaba las calles se desvaneció, quedando solo la ansiedad y el miedo.",
						"vietnamese": "Sự náo nhiệt tràn ngập đường phố đã biến mất, chỉ còn lại sự lo lắng và nỗi sợ hãi.",
						"thai": "ความคึกคักที่เคยเต็มท้องถนนหายไป เหลือเพียงความวิตกกังวลและความหวาดกลัว",
						"hindi": "सड़कों पर छाई रौनक गायब हो गई, केवल चिंता और भय ही मंडरा रहा था।"
					},
					"speaker": "narrator"
				},
				{
					"type": "direction",
					"speaker": "dax",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "벌써 수십 군데가 사라졌어. 하루아침에 모든 걸 잃은 사람들도 셀 수 없고.",
						"english": "Dozens of places have already disappeared. And countless people have lost everything overnight.",
						"japanese": "すでに数十ヶ所が消えた。一夜にして全てを失った人々も数え切れない。",
						"chinese": "已有数十处地方消失。一夜之间失去一切的人更是不计其数。",
						"french": "Des dizaines d'endroits ont déjà disparu. Et d'innombrables personnes ont tout perdu du jour au lendemain.",
						"spanish": "Ya han desaparecido docenas de lugares. Y es incontable la gente que ha perdido todo de la noche a la mañana.",
						"vietnamese": "Hàng chục nơi đã biến mất rồi. Vô số người cũng mất tất cả chỉ sau một đêm.",
						"thai": "หลายสิบแห่งหายไปแล้ว และนับไม่ถ้วนคนที่สูญเสียทุกอย่างในชั่วข้ามคืน",
						"hindi": "पहले ही दर्जनों जगहें गायब हो चुकी हैं। और अनगिनत लोग रातों-रात सब कुछ खो चुके हैं।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "우린 뭘 해야 해? 이대로 보고만 있어야 해?",
						"english": "What should we do? Should we just stand by and watch?",
						"japanese": "私たちはどうすべきなの？このまま見ているだけなの？",
						"chinese": "我们该怎么办？就这样看着吗？",
						"french": "Que devons-nous faire ? Devons-nous juste rester là à regarder ?",
						"spanish": "¿Qué debemos hacer? ¿Debemos quedarnos de brazos cruzados?",
						"vietnamese": "Chúng ta phải làm gì? Cứ đứng nhìn như vậy thôi sao?",
						"thai": "เราควรทำอย่างไร? ควรจะยืนมองอยู่อย่างนี้หรือ?",
						"hindi": "हमें क्या करना चाहिए? क्या हमें बस देखते रहना चाहिए?"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "어쩌면 이미 정해진 일일지도 몰라. 이 도시는 빚이 너무 많았으니까.",
						"english": "Perhaps it was already destined to happen. This city had too many debts.",
						"japanese": "もしかしたら、もう決まっていたことなのかもしれない。この街は借金が多すぎたから。",
						"chinese": "也许这一切早已注定。这座城市背负了太多债务。",
						"french": "Peut-être que c'était déjà inévitable. Cette ville avait trop de dettes.",
						"spanish": "Quizás ya estaba predestinado. Esta ciudad tenía demasiadas deudas.",
						"vietnamese": "Có lẽ mọi chuyện đã được định sẵn rồi. Thành phố này đã mắc quá nhiều nợ.",
						"thai": "บางทีมันอาจจะเป็นเรื่องที่ถูกกำหนดไว้แล้ว เมืองนี้มีหนี้สินมากเกินไป",
						"hindi": "हो सकता है यह पहले से तय था। इस शहर पर बहुत कर्ज़ा था।"
					},
					"speaker": "dax"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "아니. 이대로 당할 순 없어.",
						"english": "No. We can't just let this happen.",
						"japanese": "いや。このままやられるわけにはいかない。",
						"chinese": "不。我们不能就这样坐以待毙。",
						"french": "Non. Nous ne pouvons pas simplement subir cela.",
						"spanish": "No. No podemos permitir que esto siga así.",
						"vietnamese": "Không. Chúng ta không thể cứ chịu đựng như thế này được.",
						"thai": "ไม่. เราจะยอมให้เป็นแบบนี้ไม่ได้",
						"hindi": "नहीं। हम ऐसे हार नहीं मान सकते।"
					}
				},
				{
					"content": {
						"korean": "…전당포 거리에서 이상한 소문이 돌고 있어. 낡은 장부 조각에 대한 얘기인데…",
						"english": "...There's a strange rumor going around the pawnshop district. It's about a fragment of an old ledger...",
						"japanese": "…質屋街で奇妙な噂が流れている。古い帳簿の切れ端についての話なんだけど…",
						"chinese": "…当铺街上流传着奇怪的谣言。是关于一本旧账本的残页…",
						"french": "...Une étrange rumeur circule dans le quartier des prêteurs sur gages. C'est à propos d'un fragment d'un ancien registre...",
						"spanish": "...Hay un rumor extraño en el distrito de las casas de empeño. Se trata de un fragmento de un libro de cuentas antiguo...",
						"vietnamese": "...Có một tin đồn lạ đang lan truyền ở khu phố tiệm cầm đồ. Nó nói về một mảnh của cuốn sổ cái cũ...",
						"thai": "...มีข่าวลือแปลกๆ กำลังแพร่สะพัดในย่านโรงรับจำนำ มันเกี่ยวกับชิ้นส่วนของสมุดบัญชีเก่าแก่เล่มหนึ่ง...",
						"hindi": "...गिरवी रखने वाली गली में एक अजीब अफवाह फैल रही है। यह एक पुराने बही-खाते के टुकड़े के बारे में है..."
					},
					"speaker": "dax",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "dax",
					"content": {
						"korean": "피 묻은 인장이 찍혀 있었다나. 아무도 믿지 않지만.",
						"english": "They say it had a blood-stained seal. Though nobody believes it.",
						"japanese": "血まみれの印が押されていたとか。誰も信じてないけどね。",
						"chinese": "据说上面盖着血迹斑斑的印章。虽然没人相信。",
						"french": "On dit qu'il y avait un sceau taché de sang. Mais personne n'y croit.",
						"spanish": "Dicen que tenía un sello manchado de sangre. Aunque nadie lo cree.",
						"vietnamese": "Họ nói nó có một con dấu dính máu. Mặc dù không ai tin.",
						"thai": "ว่ากันว่ามันมีตราประทับเปื้อนเลือด ถึงแม้จะไม่มีใครเชื่อเลยก็ตาม",
						"hindi": "कहते हैं उस पर खून से सना हुआ मुहर लगा था। हालाँकि कोई भी इस पर विश्वास नहीं करता।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "어둠이 도시를 집어삼키고 있었다. 빚은 그림자처럼 커졌다.",
						"english": "Darkness enveloped the city. Debt grew like a shadow.",
						"japanese": "闇が街を飲み込んでいた。借金は影のように膨らんだ。",
						"chinese": "黑暗吞噬了城市。债务如影随形般增长。",
						"french": "L'obscurité enveloppait la ville. La dette grandissait comme une ombre.",
						"spanish": "La oscuridad envolvía la ciudad. La deuda crecía como una sombra.",
						"vietnamese": "Bóng tối bao trùm thành phố. Nợ nần chồng chất như bóng đêm.",
						"thai": "ความมืดกลืนกินเมือง หนี้สินพอกพูนเหมือนเงา",
						"hindi": "अँधेरे ने शहर को निगल लिया था। कर्ज एक परछाई की तरह बढ़ता गया।"
					},
					"speaker": "narrator"
				},
				{
					"type": "direction",
					"speaker": "dax",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "점점 더 빠르게 사라지고 있어. 오랜 역사를 가진 가게들도 하루아침에 흔적도 없이 사라져.",
						"english": "They're disappearing faster and faster. Even long-established shops vanish overnight without a trace.",
						"japanese": "ますます速く消えている。長い歴史を持つ店も一夜にして跡形もなく消え去る。",
						"chinese": "它们消失得越来越快。就连历史悠久的商店也一夜之间消失得无影无踪。",
						"french": "Ils disparaissent de plus en plus vite. Même les magasins de longue date s'évanouissent du jour au lendemain sans laisser de trace.",
						"spanish": "Desaparecen cada vez más rápido. Incluso las tiendas con mucha historia desaparecen de la noche a la mañana sin dejar rastro.",
						"vietnamese": "Chúng biến mất ngày càng nhanh. Ngay cả những cửa hàng lâu đời cũng biến mất không dấu vết chỉ sau một đêm.",
						"thai": "พวกมันหายไปเร็วขึ้นเรื่อยๆ แม้แต่ร้านค้าเก่าแก่ก็หายไปในชั่วข้ามคืนโดยไม่มีร่องรอย",
						"hindi": "वे तेज़ी से गायब हो रहे हैं। यहां तक कि पुराने दुकानें भी रातोंरात बिना किसी निशान के गायब हो जाती हैं।"
					}
				},
				{
					"content": {
						"korean": "그게 정말 카르마의 장부 때문이야?",
						"english": "Is it really because of the Karma Ledger?",
						"japanese": "それは本当にカルマの帳簿のせいなのか？",
						"chinese": "这真的是因为业力账本吗？",
						"french": "Est-ce vraiment à cause du Grand Livre du Karma ?",
						"spanish": "¿Es realmente por el Libro Mayor del Karma?",
						"vietnamese": "Có thật là do Sổ Cái Nghiệp lực không?",
						"thai": "นี่มันเป็นเพราะบัญชีบาปบุญจริงๆ เหรอ?",
						"hindi": "क्या यह वाकई कर्म के बहीखाते की वजह से है?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그래. 모든 것을 기록하고, 모든 것을 정산하는… 이 도시의 진짜 지배자.",
						"english": "Yes. It records everything, settles everything... the true ruler of this city.",
						"japanese": "そうだ。全てを記録し、全てを清算する…この街の真の支配者。",
						"chinese": "是的。它记录一切，清算一切……这座城市的真正统治者。",
						"french": "Oui. Il enregistre tout, règle tout... le vrai maître de cette ville.",
						"spanish": "Sí. Registra todo, salda todo... el verdadero gobernante de esta ciudad.",
						"vietnamese": "Đúng vậy. Nó ghi lại mọi thứ, thanh toán mọi thứ... kẻ thống trị thực sự của thành phố này.",
						"thai": "ใช่ บันทึกทุกสิ่ง ชำระทุกสิ่ง... ผู้ปกครองที่แท้จริงของเมืองนี้",
						"hindi": "हाँ। यह सब कुछ दर्ज करता है, सब कुछ निपटाता है... इस शहर का असली शासक।"
					},
					"speaker": "dax"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "말도 안 돼…! 이런 일이 일어날 수 있다니!",
						"english": "Unbelievable...! How can this be happening!",
						"japanese": "信じられない…！こんなことが起こるなんて！",
						"chinese": "不可能…！这种事情怎么会发生！",
						"french": "Incroyable… ! Comment est-ce possible !",
						"spanish": "¡Inaudito...! ¡Cómo puede estar pasando esto!",
						"vietnamese": "Không thể tin được...! Sao chuyện này lại có thể xảy ra!",
						"thai": "ไม่น่าเชื่อ…! เรื่องแบบนี้เกิดขึ้นได้ยังไง!",
						"hindi": "असंभव...! ऐसा कैसे हो सकता है!"
					}
				},
				{
					"content": {
						"korean": "사람들은 이미 체념했어. 다음은 누구일까, 두려워하면서.",
						"english": "People have already resigned themselves. Fearing, \"who will be next?\"",
						"japanese": "人々はすでに諦めている。次は誰だろうと、恐れながら。",
						"chinese": "人们已经听天由命了。恐惧着，“下一个会是谁？”",
						"french": "Les gens se sont déjà résignés. Craignant : « Qui sera le prochain ? »",
						"spanish": "La gente ya se ha resignado. Temiendo, \"¿quién será el próximo?\"",
						"vietnamese": "Mọi người đã chấp nhận số phận rồi. Sợ hãi tự hỏi, \"ai sẽ là người tiếp theo?\"",
						"thai": "ผู้คนต่างยอมแพ้แล้ว กลัวว่า \"ใครจะเป็นรายต่อไป?\"",
						"hindi": "लोग पहले ही हार मान चुके हैं। डरते हुए, \"अगला कौन होगा?\""
					},
					"speaker": "dax",
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "도시의 심장부까지 검은 그림자가 드리웠다. 더 이상 물러설 곳은 없었다.",
						"english": "Dark shadows fell even upon the city's heart. There was no longer any turning back.",
						"japanese": "街の心臓部まで黒い影が差した。もはや退く場所はなかった。",
						"chinese": "漆黑的阴影笼罩了城市的中心。已无退路。",
						"french": "Des ombres sombres tombaient même sur le cœur de la ville. Il n'y avait plus de retour en arrière possible.",
						"spanish": "Sombras oscuras cayeron incluso sobre el corazón de la ciudad. Ya no había vuelta atrás.",
						"vietnamese": "Bóng tối bao trùm cả trái tim thành phố. Không còn đường lùi nữa.",
						"thai": "เงาดำทอดลงมาถึงใจกลางเมือง ไม่มีที่ให้ถอยอีกแล้ว",
						"hindi": "काले साये शहर के दिल तक पहुँच गए थे। पीछे हटने की अब कोई जगह नहीं थी।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "dax",
					"spot": [
						1,
						3
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "닥스! 이 모든 걸 멈출 방법이 없을까?",
						"english": "Dax! Is there no way to stop all this?",
						"japanese": "ダックス！これを止める方法はないのか？",
						"chinese": "达克斯！难道就没有办法阻止这一切吗？",
						"french": "Dax ! N'y a-t-il aucun moyen d'arrêter tout ça ?",
						"spanish": "¡Dax! ¿No hay forma de detener todo esto?",
						"vietnamese": "Dax! Không có cách nào để ngăn chặn tất cả những chuyện này sao?",
						"thai": "แด็กซ์! ไม่มีทางที่จะหยุดเรื่องทั้งหมดนี้ได้เลยเหรอ?",
						"hindi": "डैक्स! क्या यह सब रोकने का कोई तरीका नहीं है?"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "멈출 수 없어. 이미 모든 빚이 돌아왔고, 그 무게가 도시를 짓누를 거야.",
						"english": "It can't be stopped. All debts have already returned, and their weight will crush the city.",
						"japanese": "止められない。すでに全ての借金が戻ってきており、その重みが街を押し潰すだろう。",
						"chinese": "无法阻止。所有的债务都已经回来了，其重压会压垮这座城市。",
						"french": "On ne peut pas l'arrêter. Toutes les dettes sont déjà revenues, et leur poids écrasera la ville.",
						"spanish": "No se puede detener. Todas las deudas ya han regresado, y su peso aplastará la ciudad.",
						"vietnamese": "Không thể ngăn cản được. Tất cả nợ nần đã trở lại, và sức nặng của chúng sẽ đè bẹp thành phố.",
						"thai": "หยุดไม่ได้แล้ว หนี้สินทั้งหมดได้กลับคืนมาแล้ว และน้ำหนักของมันจะบดขยี้เมืองนี้",
						"hindi": "इसे रोका नहीं जा सकता। सभी कर्ज पहले ही वापस आ चुके हैं, और उनका बोझ शहर को कुचल देगा।"
					},
					"speaker": "dax",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "포기하지 않아. 어떻게든 막을 거야.",
						"english": "I won't give up. I'll stop it somehow.",
						"japanese": "諦めない。何とかして止めてみせる。",
						"chinese": "我不会放弃。无论如何，我都会阻止它。",
						"french": "Je n'abandonnerai pas. Je l'arrêterai d'une manière ou d'une autre.",
						"spanish": "No me rendiré. Lo detendré de alguna manera.",
						"vietnamese": "Tôi sẽ không bỏ cuộc. Bằng cách nào đó, tôi sẽ ngăn chặn nó.",
						"thai": "ฉันจะไม่ยอมแพ้ ฉันจะหยุดมันให้ได้ไม่ว่าจะด้วยวิธีใดก็ตาม",
						"hindi": "मैं हार नहीं मानूँगा। मैं इसे किसी भी तरह रोकूँगा।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…무모한 짓이야. 너희도 사라질 거야. 카르마의 장부는 모든 것을 알고 있으니까.",
						"english": "...Reckless. You too will disappear. The Ledger of Karma knows all.",
						"japanese": "...無謀な行為だ。お前たちも消え去るだろう。カルマの帳簿はすべてを知っているからな。",
						"chinese": "...鲁莽之举。你们也会消失的。因果账簿洞悉一切。",
						"french": "...Téméraire. Vous aussi, vous disparaîtrez. Le Grand Livre du Karma sait tout.",
						"spanish": "...Temerario. Vosotros también desapareceréis. El Libro Mayor del Karma lo sabe todo.",
						"vietnamese": "...Thật liều lĩnh. Các ngươi cũng sẽ biến mất thôi. Sổ cái Karma biết tất cả mà.",
						"thai": "...บ้าบิ่น พวกเจ้าก็จะหายไปเหมือนกัน เพราะบัญชีแห่งกรรมรู้ทุกสิ่ง",
						"hindi": "...लापरवाह। तुम भी गायब हो जाओगे। कर्म का बहीखाता सब जानता है。"
					},
					"speaker": "dax"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "알고 있다고? 그럼 우린 그놈을 직접 만나야겠네.",
						"english": "It knows? Then we'll have to meet it ourselves.",
						"japanese": "知っているだと？なら、私たちが直接そいつに会うしかないな。",
						"chinese": "它知道？那我们只好亲自去见它了。",
						"french": "Il sait ? Alors nous devrons le rencontrer nous-mêmes.",
						"spanish": "¿Lo sabe? Entonces tendremos que encontrarlo nosotros mismos.",
						"vietnamese": "Nó biết à? Vậy chúng ta phải tự mình gặp mặt nó thôi.",
						"thai": "รู้เหรอ? งั้นเราคงต้องไปเผชิญหน้ากับมันเองแล้วล่ะ",
						"hindi": "यह जानता है? तो हमें खुद उससे मिलना होगा।"
					}
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
					"speaker": "narrator",
					"content": {
						"korean": "마침내 장부의 심장부에 다다른 순간. 거대한 존재가 모습을 드러냈다.",
						"english": "Finally reaching the heart of the Ledger, a colossal being revealed itself.",
						"japanese": "ついに帳簿の核心にたどり着いたその瞬間。巨大な存在が姿を現した。",
						"chinese": "终于抵达账簿核心之时，一个巨大的存在现身了。",
						"french": "Atteignant enfin le cœur du Grand Livre, une entité colossale se révéla.",
						"spanish": "Finalmente, al llegar al corazón del Libro Mayor, una entidad colosal se reveló.",
						"vietnamese": "Cuối cùng, khi chạm đến trái tim của Sổ cái, một thực thể khổng lồ đã xuất hiện.",
						"thai": "ในที่สุด เมื่อมาถึงใจกลางของบัญชี สิ่งมีชีวิตขนาดมหึมาก็ปรากฏกายขึ้น",
						"hindi": "अंततः बहीखाते के केंद्र तक पहुंचने पर, एक विशाल सत्ता प्रकट हुई।"
					}
				},
				{
					"content": {
						"korean": "어리석은 필멸자들. 감히 정산을 거부하려 하는가?",
						"english": "Foolish mortals. Dare you defy the reckoning?",
						"japanese": "愚かなる定命の者たちよ。あえて精算を拒むというのか？",
						"chinese": "愚蠢的凡人。竟敢拒绝清算？",
						"french": "Mortels insensés. Osez-vous défier le règlement ?",
						"spanish": "Mortales insensatos. ¿Os atrevéis a desafiar la rendición de cuentas?",
						"vietnamese": "Phàm nhân ngu xuẩn. Dám từ chối sự thanh toán ư?",
						"thai": "พวกมนุษย์ผู้โง่เขลา เจ้ากล้าที่จะขัดขวางการชำระบัญชีหรือ?",
						"hindi": "मूर्ख नश्वर। क्या तुम हिसाब का विरोध करने की हिम्मत करते हो?"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "네가 이 모든 걸 꾸민 거야? 카르마의 장부라는 이름으로!",
						"english": "You orchestrated all this? In the name of the Ledger of Karma!",
						"japanese": "お前が全てを企んだのか？カルマの帳簿の名の下に！",
						"chinese": "这一切都是你策划的？以因果账簿之名！",
						"french": "C'est toi qui as orchestré tout cela ? Au nom du Grand Livre du Karma !",
						"spanish": "¿Tú orquestaste todo esto? ¡En nombre del Libro Mayor del Karma!",
						"vietnamese": "Ngươi đã dàn dựng tất cả chuyện này? Nhân danh Sổ cái Karma!",
						"thai": "แกเป็นคนบงการทั้งหมดนี้หรือ? ในนามของบัญชีแห่งกรรม!",
						"hindi": "तुमने यह सब रचा है? कर्म के बहीखाते के नाम पर!"
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "나는 그저 정의를 집행할 뿐. 너희 도시의 빚을 받아내는 자다.",
						"english": "I merely dispense justice. I am the one who collects your city's debts.",
						"japanese": "私はただ正義を執行するだけ。お前たちの都市の借りを回収する者だ。",
						"chinese": "我只是执行正义。我是收取你们城市债务之人。",
						"french": "Je ne fais qu'appliquer la justice. Je suis celui qui récupère les dettes de votre ville.",
						"spanish": "Simplemente hago cumplir la justicia. Soy quien cobra las deudas de vuestra ciudad.",
						"vietnamese": "Ta chỉ là người thực thi công lý. Người đòi nợ của thành phố các ngươi.",
						"thai": "ข้าเพียงแค่บังคับใช้ความยุติธรรม ข้าคือผู้ทวงหนี้ของเมืองพวกเจ้า",
						"hindi": "मैं केवल न्याय लागू करता हूँ। मैं वह हूँ जो तुम्हारे शहर के कर्ज वसूलता है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "정의? 헛소리! 너 때문에 모든 게 파괴됐어!",
						"english": "Justice? Nonsense! Everything was destroyed because of you!",
						"japanese": "正義だと？戯言を！お前のせいで全てが破壊された！",
						"chinese": "正义？胡说！一切都因你而毁！",
						"french": "Justice ? Absurdités ! Tout a été détruit à cause de toi !",
						"spanish": "¿Justicia? ¡Tonterías! ¡Todo fue destruido por tu culpa!",
						"vietnamese": "Công lý? Vô nghĩa! Mọi thứ đã bị phá hủy vì ngươi!",
						"thai": "ความยุติธรรมเหรอ? เหลวไหล! ทุกสิ่งถูกทำลายเพราะแก!",
						"hindi": "न्याय? बकवास! तुम्हारी वजह से सब कुछ नष्ट हो गया!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "곧 너희도 이 도시와 함께 정산될 것이다.",
						"english": "Soon you too will be reckoned with, along with this city.",
						"japanese": "お前たちもこの都市と共に、まもなく精算されるだろう。",
						"chinese": "很快你们也将与这座城市一同被清算。",
						"french": "Bientôt, vous aussi serez réglés, avec cette ville.",
						"spanish": "Pronto vosotros también seréis saldados, junto con esta ciudad.",
						"vietnamese": "Sớm thôi, các ngươi cũng sẽ bị thanh toán cùng với thành phố này.",
						"thai": "ในไม่ช้า พวกเจ้าก็จะถูกชำระพร้อมกับเมืองนี้",
						"hindi": "जल्द ही तुम्हारा भी हिसाब होगा, इस शहर के साथ।"
					},
					"speaker": "random_boss"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "쓰러진 'random_boss'. 그러나 도시를 짓누르던 어둠은 완전히 걷히지 않았다.",
						"english": "The fallen 'random_boss'. But the darkness that pressed down on the city had not completely lifted.",
						"japanese": "倒れた「random_boss」。しかし、都市を圧迫していた闇は完全には晴れていなかった。",
						"chinese": "倒下的“random_boss”。然而，笼罩城市的黑暗并未完全消散。",
						"french": "Le 'random_boss' est tombé. Mais l'obscurité qui écrasait la ville ne s'était pas complètement dissipée.",
						"spanish": "El 'random_boss' caído. Pero la oscuridad que oprimía la ciudad no se había disipado por completo.",
						"vietnamese": "'random_boss' đã ngã xuống. Nhưng bóng tối đè nặng lên thành phố vẫn chưa tan biến hoàn toàn.",
						"thai": "'random_boss' ล้มลงแล้ว แต่ความมืดมิดที่ครอบงำเมืองยังไม่จางหายไปโดยสิ้นเชิง",
						"hindi": "गिरा हुआ 'random_boss'। लेकिन शहर पर छाया अंधेरा पूरी तरह से छंटा नहीं था।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…이것이 끝이라 생각하는가? 나는… 그저… 일부일 뿐…",
						"english": "...Do you think this is the end? I am... merely... a part of it...",
						"japanese": "...これが終わりだと思うのか？私は…ただ…一部に過ぎない…",
						"chinese": "...你以为这是结束吗？我…只是…其中一部分…",
						"french": "...Pensez-vous que c'est la fin ? Je ne suis... qu'une... partie...",
						"spanish": "...¿Creéis que este es el final? Yo soy... meramente... una parte...",
						"vietnamese": "...Ngươi nghĩ đây là kết thúc ư? Ta... chỉ là... một phần...",
						"thai": "...เจ้าคิดว่านี่คือจุดจบหรือ? ข้าเป็น... เพียง... ส่วนหนึ่งเท่านั้น...",
						"hindi": "...क्या तुम्हें लगता है कि यह अंत है? मैं... बस... एक हिस्सा हूँ..."
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "일부라고? 그럼 진짜는 누구야?",
						"english": "Just a part? Then who's the real one?",
						"japanese": "一部だと？では、本物は誰だ？",
						"chinese": "只是一部分？那真正的幕后黑手是谁？",
						"french": "Juste une partie ? Alors qui est le vrai ?",
						"spanish": "¿Solo una parte? ¿Quién es el verdadero entonces?",
						"vietnamese": "Chỉ là một phần thôi ư? Vậy kẻ thật sự là ai?",
						"thai": "แค่ส่วนหนึ่งงั้นเหรอ? แล้วตัวจริงคือใครล่ะ?",
						"hindi": "सिर्फ एक हिस्सा? तो असली कौन है?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "dax",
					"spot": [
						3,
						3
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "이게 끝이 아니었어… 역시 허무해. 이 모든 게 누구를 위한 정산이었을까…",
						"english": "This wasn't the end... Still so empty. For whom was all this reckoning?",
						"japanese": "これが終わりではなかった…やはり虚しい。この全ての精算は、誰のためだったのだろうか…",
						"chinese": "这不是结局……果然很空虚。这一切的清算，究竟是为了谁……",
						"french": "Ce n'était pas la fin... Toujours aussi vide. Pour qui était tout ce jugement ?",
						"spanish": "Esto no era el final... Sigue siendo tan vacío. ¿Para quién fue todo este ajuste de cuentas?",
						"vietnamese": "Đây không phải là kết thúc… Vẫn thật hư vô. Tất cả sự thanh toán này là vì ai cơ chứ…",
						"thai": "นี่ไม่ใช่จุดจบ... ช่างว่างเปล่าเหลือเกิน การชำระบัญชีทั้งหมดนี้มันเพื่อใครกันแน่...",
						"hindi": "यह अंत नहीं था... फिर भी इतना खालीपन। यह सब हिसाब-किताब किसके लिए था?"
					},
					"speaker": "dax",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "진정한 원흉은 따로 있다는 건가…",
						"english": "So, the true mastermind is someone else...",
						"japanese": "真の元凶は別にいるということか…",
						"chinese": "真正的幕后黑手另有其人吗……",
						"french": "Donc, le véritable cerveau est quelqu'un d'autre...",
						"spanish": "Así que, ¿el verdadero cerebro es otra persona...?",
						"vietnamese": "Vậy ra, kẻ chủ mưu thật sự là người khác sao…",
						"thai": "แสดงว่า ตัวการที่แท้จริงคือคนอื่นสินะ...",
						"hindi": "तो, असली मास्टरमाइंड कोई और है..."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "승리했지만, 도시에 남은 것은 끝나지 않은 의문과 비극적인 허무함이었다. 이야기는 이제 시작될 뿐이었다.",
						"english": "Victory was ours, but what remained in the city were unresolved questions and tragic emptiness. The story was only just beginning.",
						"japanese": "勝利したが、街に残ったのは終わらない疑問と悲劇的な虚無感だった。物語は、まだ始まったばかりに過ぎなかった。",
						"chinese": "虽然胜利了，但城市里留下的却是未解的疑问和悲剧性的虚无。故事才刚刚开始。",
						"french": "La victoire était à nous, mais ce qui restait dans la ville, c'étaient des questions non résolues et une vide tragique. L'histoire ne faisait que commencer.",
						"spanish": "La victoria fue nuestra, pero lo que quedó en la ciudad fueron preguntas sin resolver y un vacío trágico. La historia apenas estaba comenzando.",
						"vietnamese": "Đã chiến thắng, nhưng những gì còn lại trong thành phố là những nghi vấn chưa có lời giải và sự hư vô bi thảm. Câu chuyện chỉ mới bắt đầu mà thôi.",
						"thai": "แม้จะได้รับชัยชนะ แต่สิ่งที่หลงเหลืออยู่ในเมืองคือคำถามที่ยังค้างคาและความว่างเปล่าอันน่าเศร้า เรื่องราวเพิ่งจะเริ่มต้นขึ้นเท่านั้น",
						"hindi": "जीत हमारी थी, लेकिन शहर में अनसुलझे सवाल और दुखद खालीपन बचा रहा। कहानी तो अभी शुरू ही हुई थी।"
					},
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "장부의 힘은 압도적이었다. 모든 것이 정산의 흐름에 휩쓸렸다.",
						"english": "The power of the Ledger was overwhelming. Everything was swept away by the flow of reckoning.",
						"japanese": "帳簿の力は圧倒的だった。全てが精算の流れに押し流された。",
						"chinese": "账簿的力量是压倒性的。一切都被清算的洪流所吞噬。",
						"french": "Le pouvoir du Grand Livre était accablant. Tout a été emporté par le flux du jugement.",
						"spanish": "El poder del Libro Mayor era abrumador. Todo fue arrastrado por el flujo del ajuste de cuentas.",
						"vietnamese": "Sức mạnh của Sổ Cái thật áp đảo. Mọi thứ đều bị cuốn trôi trong dòng chảy thanh toán.",
						"thai": "พลังของสมุดบัญชีนั้นยิ่งใหญ่เกินต้าน ทุกสิ่งถูกพัดพาไปตามกระแสแห่งการชำระบัญชี",
						"hindi": "खाते की शक्ति overwhelming थी। सब कुछ हिसाब-किताब के प्रवाह में बह गया।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "무모한 자들. 너희의 빚은 아직 남아있다. 영원히 갚지 못할 빚이.",
						"english": "Reckless fools. Your debt still remains. A debt that can never be repaid.",
						"japanese": "無謀な者たち。お前たちの借りはまだ残っている。永遠に返せない借りがな。",
						"chinese": "鲁莽的家伙们。你们的债务仍在。一笔永远无法偿还的债务。",
						"french": "Fous imprudents. Votre dette demeure. Une dette qui ne pourra jamais être remboursée.",
						"spanish": "Insensatos imprudentes. Vuestra deuda aún persiste. Una deuda que jamás podréis saldar.",
						"vietnamese": "Những kẻ liều lĩnh. Nợ của các ngươi vẫn còn đó. Một khoản nợ không bao giờ có thể trả được.",
						"thai": "พวกคนบ้าบิ่น หนี้ของพวกเจ้ายังคงอยู่ หนี้ที่ไม่มีวันชดใช้ได้ตลอดไป",
						"hindi": "लापरवाह मूर्खों। तुम्हारा कर्ज अभी भी बाकी है। एक ऐसा कर्ज जो कभी चुकाया नहीं जा सकता।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…이대로 끝낼 순 없어! 반드시 다시 돌아온다!",
						"english": "...It can't end like this! I will definitely return!",
						"japanese": "…このままでは終われない！必ず戻ってくる！",
						"chinese": "……不能就这样结束！我一定会再回来的！",
						"french": "...Ça ne peut pas finir comme ça ! Je reviendrai, c'est sûr !",
						"spanish": "...¡No puede terminar así! ¡Volveré, sin falta!",
						"vietnamese": "…Không thể kết thúc như thế này được! Nhất định ta sẽ trở lại!",
						"thai": "...จะจบแบบนี้ไม่ได้! ข้าจะกลับมาแน่นอน!",
						"hindi": "...ऐसे खत्म नहीं हो सकता! मैं निश्चित रूप से वापस आऊंगा!"
					},
					"speaker": "character_any"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"마천루를 가로지르는 도시. 번영의 환상 아래 검은 그림자가 드리웠다.",
			"알 수 없는 시스템 오류, 끝없는 계약 파기. 도시는 서서히 붕괴하고 있었다.",
			"소문은 닥스라는 이름으로 퍼졌다. '카르마의 장부'가 모든 것을 정산한다고.",
			"그것은 시작에 불과했다. 다가올 비극의 전조는, 이미 도시를 뒤덮고 있었다."
		],
		"english": [
			"A city of skyscrapers. Beneath the illusion of prosperity, a dark shadow loomed.",
			"Unknown system errors, endless contract breaches. The city was slowly collapsing.",
			"Rumors spread under the name 'Dax'. 'The Ledger of Karma' would settle everything.",
			"It was merely the beginning. The omen of the coming tragedy had already engulfed the city."
		],
		"japanese": [
			"摩天楼が交差する都市。繁栄という幻想の下、黒い影が差した。",
			"未知のシステムエラー、終わりのない契約破棄。都市は徐々に崩壊していた。",
			"噂は「ダックス」という名で広まった。「カルマの帳簿」が全てを清算すると。",
			"それは始まりに過ぎなかった。訪れる悲劇の兆候は、すでに都市を覆っていた。"
		],
		"chinese": [
			"摩天大楼交错的都市。繁荣的幻想之下，黑影笼罩。",
			"未知的系统错误，无尽的合同解除。城市正在缓慢崩溃。",
			"谣言以“达克斯”之名传播。“因果报应之账本”将清算一切。",
			"这仅仅是开始。即将到来的悲剧预兆，早已笼罩了这座城市。"
		],
		"french": [
			"Une ville de gratte-ciel. Sous l'illusion de la prospérité, une ombre sombre planait.",
			"Erreurs système inconnues, ruptures de contrat incessantes. La ville s'effondrait lentement.",
			"Les rumeurs se sont répandues sous le nom de 'Dax'. « Le Grand Livre du Karma » réglerait tout.",
			"Ce n'était que le début. Le présage de la tragédie à venir avait déjà englouti la ville."
		],
		"spanish": [
			"Una ciudad de rascacielos. Bajo la ilusión de la prosperidad, una sombra oscura se cernía.",
			"Errores de sistema desconocidos, rescisiones de contratos interminables. La ciudad se estaba desmoronando lentamente.",
			"Los rumores se extendieron bajo el nombre de 'Dax'. \"El Libro del Karma\" lo saldaría todo.",
			"Era solo el principio. El presagio de la tragedia venidera ya había envuelto la ciudad."
		],
		"vietnamese": [
			"Thành phố với những tòa nhà chọc trời. Dưới ảo ảnh thịnh vượng, một bóng đen bao trùm.",
			"Lỗi hệ thống không xác định, vô số hợp đồng bị hủy bỏ. Thành phố dần sụp đổ.",
			"Tin đồn lan truyền dưới cái tên 'Dax'. 'Sổ cái Nghiệp chướng' sẽ thanh toán mọi thứ.",
			"Đó chỉ là sự khởi đầu. Điềm báo của thảm kịch sắp tới đã bao trùm thành phố."
		],
		"thai": [
			"เมืองแห่งตึกระฟ้า ใต้มายาแห่งความรุ่งเรือง เงาดำได้คืบคลานเข้ามา",
			"ข้อผิดพลาดของระบบที่ไม่รู้จัก การยกเลิกสัญญาไม่รู้จบ เมืองกำลังล่มสลายอย่างช้าๆ",
			"ข่าวลือแพร่สะพัดภายใต้ชื่อ 'Dax' 'บัญชีแห่งกรรม' จะชำระสะสางทุกสิ่ง",
			"มันเป็นเพียงจุดเริ่มต้น ลางบอกเหตุของโศกนาฏกรรมที่กำลังจะมาถึงได้ปกคลุมเมืองไปแล้ว"
		],
		"hindi": [
			"गगनचुंबी इमारतों का शहर। समृद्धि के भ्रम के नीचे, एक काली छाया मंडरा रही थी。",
			"अज्ञात सिस्टम त्रुटियाँ, अंतहीन अनुबंध उल्लंघन। शहर धीरे-धीरे ढह रहा था।",
			"डेक्स' नाम से अफवाहें फैलीं। 'कर्म का बहीखाता' सब कुछ निपटा देगा।",
			"यह तो बस शुरुआत थी। आने वाली त्रासदी का अपशकुन, पहले ही शहर को घेर चुका था।"
		]
	}
} as const;
