export const scenario_snowy_finn_10_03 = {
	"scenario_id": "snowy_finn_10_03",
	"order": 3,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"inka": {
			"id": "mon_583e945a-1e2f-428b-a251-b428f25b4052",
			"name": {
				"korean": "인카",
				"english": "Inka",
				"japanese": "インカ",
				"chinese": "因卡",
				"french": "Inka",
				"spanish": "Inka",
				"vietnamese": "Inka",
				"thai": "อินคา",
				"hindi": "इंंका"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/97f4545b-2e8a-4688-3e4e-b34bb246dd00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f27763ba-2358-4fd3-c813-0f0b59dcac00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"왕의 알현실로 향하는 차가운 얼음 회랑.",
			"곳곳의 팻말은 무릎 꿇으라 했지만, 글씨는 흔들렸다.",
			"위엄은, 균형을 잃은 위태로운 허세였다."
		],
		"english": [
			"The cold, icy corridor leading to the King's audience chamber.",
			"Signs everywhere commanded to kneel, but the letters wavered.",
			"The majesty was a perilous bluff, having lost its balance."
		],
		"japanese": [
			"王の謁見室へと続く、冷たい氷の回廊。",
			"随所の立て札は跪けと命じていたが、文字は揺らいでいた。",
			"その威厳は、均衡を失った危うい虚勢だった。"
		],
		"chinese": [
			"通往国王谒见室的冰冷走廊。",
			"四处可见的告示牌命令人下跪，但字迹却摇摇晃晃。",
			"那威严，是失去平衡的危险虚张声势。"
		],
		"french": [
			"Le froid couloir de glace menant à la chambre d'audience du Roi.",
			"Des panneaux partout ordonnaient de s'agenouiller, mais les lettres vacillaient.",
			"La majesté n'était qu'une dangereuse fanfaronnade, ayant perdu son équilibre."
		],
		"spanish": [
			"El frío y gélido pasillo que conduce a la sala de audiencias del Rey.",
			"Las señales por doquier ordenaban arrodillarse, pero las letras titubeaban.",
			"La majestuosidad era una peligrosa farsa, habiendo perdido su equilibrio."
		],
		"vietnamese": [
			"Hành lang băng giá dẫn đến phòng yết kiến của Vua.",
			"Các biển báo khắp nơi ra lệnh quỳ gối, nhưng chữ viết lại run rẩy.",
			"Sự uy nghi chỉ là một sự khoa trương nguy hiểm, đã mất đi sự cân bằng."
		],
		"thai": [
			"โถงทางเดินน้ำแข็งอันหนาวเหน็บที่นำไปสู่ห้องเฝ้าของพระราชา",
			"ป้ายทั่วทุกแห่งสั่งให้คุกเข่า แต่ตัวอักษรกลับสั่นไหว",
			"ความสง่างามนั้นเป็นเพียงการโอ้อวดที่อันตรายและไร้สมดุล"
		],
		"hindi": [
			"राजा के दरबार कक्ष की ओर जाने वाला ठंडा बर्फीला गलियारा।",
			"हर जगह लगे संकेत घुटने टेकने का आदेश दे रहे थे, पर अक्षर डगमगा रहे थे।",
			"वह महिमा एक खतरनाक दिखावा थी, जिसने अपना संतुलन खो दिया था।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "차가운 얼음 회랑. 팻말들은 무릎 꿇으라 경고한다.",
						"english": "Cold, icy corridor. Signs warn to kneel.",
						"japanese": "冷たい氷の回廊。立て札は跪くよう警告する。",
						"chinese": "冰冷的走廊。告示牌警告要下跪。",
						"french": "Froid couloir de glace. Des panneaux avertissent de s'agenouiller.",
						"spanish": "Frío pasillo de hielo. Las señales advierten que hay que arrodillarse.",
						"vietnamese": "Hành lang băng giá. Biển báo cảnh báo phải quỳ gối.",
						"thai": "โถงทางเดินน้ำแข็งอันหนาวเหน็บ ป้ายเตือนให้คุกเข่า",
						"hindi": "ठंडा बर्फीला गलियारा। संकेत घुटने टेकने की चेतावनी दे रहे हैं।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "inka",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…정말 무서운 곳일까요?",
						"english": "...Is it really a scary place?",
						"japanese": "……本当に恐ろしい場所なのでしょうか？",
						"chinese": "……真的是个可怕的地方吗？",
						"french": "...Est-ce vraiment un endroit effrayant ?",
						"spanish": "...¿Es realmente un lugar aterrador?",
						"vietnamese": "...Đây có thực sự là một nơi đáng sợ không?",
						"thai": "...ที่นี่น่ากลัวจริงๆ หรือเปล่า?",
						"hindi": "...क्या यह वाकई एक डरावनी जगह है?"
					},
					"speaker": "inka"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "감히… 고개를 들어라! (몸을 휘청인다)",
						"english": "How dare you... Raise your head! (Stumbles)",
						"japanese": "よくも……頭を上げろ！ (体がよろめく)",
						"chinese": "竟敢……抬起头来！ (身体摇晃)",
						"french": "Comment oses-tu... Lève la tête ! (Chancelle)",
						"spanish": "¡Cómo te atreves... Levanta la cabeza! (Se tambalea)",
						"vietnamese": "Dám... Ngẩng đầu lên! (Loạng choạng)",
						"thai": "แกกล้าดี... เงยหน้าขึ้น! (เซถลา)",
						"hindi": "तुम्हारी हिम्मत कैसे हुई... सिर उठाओ! (लड़खड़ाता है)"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…방심하지 마.",
						"english": "...Don't let your guard down.",
						"japanese": "……油断するな。",
						"chinese": "……别大意。",
						"french": "...Ne baisse pas ta garde.",
						"spanish": "...No te confíes.",
						"vietnamese": "...Đừng lơ là.",
						"thai": "...อย่าประมาท",
						"hindi": "...गाफिल मत रहो।"
					},
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"speaker": "inka",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "내 앞에 무릎 꿇어라! …흐읍!",
						"english": "Kneel before me! ...Gasp!",
						"japanese": "私の前に跪け！ ……くっ！",
						"chinese": "在我面前跪下！ ……呃！",
						"french": "Agenouille-toi devant moi ! ...Souffle coupé !",
						"spanish": "¡Arrodíllate ante mí! ...¡Jadeo!",
						"vietnamese": "Quỳ xuống trước mặt ta! ...Hự!",
						"thai": "คุกเข่าต่อหน้าข้า! ...เฮือก!",
						"hindi": "मेरे सामने घुटने टेको! ...हूँह!"
					},
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "뭐야, 저거.",
						"english": "What's that?",
						"japanese": "なんだ、あれは。",
						"chinese": "那是什么。",
						"french": "Qu'est-ce que c'est ?",
						"spanish": "¿Qué es eso?",
						"vietnamese": "Cái gì thế kia?",
						"thai": "นั่นอะไรน่ะ",
						"hindi": "वह क्या है?"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "inka",
					"content": {
						"korean": "…힘들어 보여요. 균형 잡는 게.",
						"english": "...He seems to be struggling. To keep his balance.",
						"japanese": "……大変そうですね。バランスを取るのが。",
						"chinese": "……看起来很吃力。保持平衡。",
						"french": "...Il semble avoir du mal. À garder l'équilibre.",
						"spanish": "...Parece que le cuesta. Mantener el equilibrio.",
						"vietnamese": "...Trông có vẻ khó khăn. Để giữ thăng bằng.",
						"thai": "...ดูเหมือนจะลำบากนะ ในการทรงตัว",
						"hindi": "...वह संघर्ष कर रहा है लग रहा है। संतुलन बनाने में।"
					},
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"action": "enter",
					"speaker": "inka"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "짐의 위엄은… 절대 흔들리지 않는다! (몸이 크게 기운다)",
						"english": "My majesty... shall never waver! (His body sways greatly)",
						"japanese": "我が威厳は…決して揺るがぬ！ (体が大きく傾く)",
						"chinese": "朕的威严…绝不动摇！ (身体大幅倾斜)",
						"french": "Ma majesté... ne vacillera jamais ! (Son corps penche fortement)",
						"spanish": "¡Mi majestad... jamás vacilará! (Su cuerpo se inclina mucho)",
						"vietnamese": "Uy nghiêm của ta… tuyệt đối không lay chuyển! (Cơ thể nghiêng mạnh)",
						"thai": "ความสง่างามของข้า… ไม่มีทางสั่นคลอน! (ร่างกายเอนไปมาก)",
						"hindi": "मेरा प्रताप… कभी नहीं डगमगाएगा! (शरीर बुरी तरह लड़खड़ाता है)"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "character_1",
					"content": {
						"korean": "아니, 지금 흔들리는데.",
						"english": "No, you're swaying right now.",
						"japanese": "いや、今揺れてるぞ。",
						"chinese": "不，你现在就在晃。",
						"french": "Non, tu penches là, maintenant.",
						"spanish": "No, ahora mismo te estás tambaleando.",
						"vietnamese": "Không, bây giờ đang lung lay đó.",
						"thai": "ไม่นะ ตอนนี้กำลังสั่นเลยนี่",
						"hindi": "नहीं, अभी तो तुम हिल रहे हो।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "…무섭게 보이고 싶은 거겠죠. 무섭진 않아요.",
						"english": "...They probably want to look scary. They're not scary.",
						"japanese": "…怖く見せたいのでしょうね。怖くはないです。",
						"chinese": "…他们大概是想看起来可怕吧。但并不可怕。",
						"french": "...Ils veulent probablement avoir l'air effrayants. Mais ils ne le sont pas.",
						"spanish": "...Probablemente quieren parecer aterradores. Pero no lo son.",
						"vietnamese": "...Chắc là muốn tỏ ra đáng sợ thôi. Nhưng không đáng sợ chút nào.",
						"thai": "…คงอยากให้ดูน่ากลัวล่ะมั้ง ไม่น่ากลัวเลย",
						"hindi": "…शायद वे डरावने दिखना चाहते हैं। पर वे डरावने नहीं हैं।"
					},
					"type": "speech",
					"speaker": "inka",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "inka",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "닥쳐라! 감히 누가 짐을… 어, 어어?! (옥좌가 크게 흔들린다)",
						"english": "Silence! How dare anyone... Wh-whoa?! (The throne shakes violently)",
						"japanese": "黙れ！よくも儂を…お、おお？！ (玉座が大きく揺れる)",
						"chinese": "住口！谁敢对朕…呃，呃呃？！ (宝座剧烈摇晃)",
						"french": "Silence ! Qui ose défier ma personne... H-hé ?! (Le trône tremble violemment)",
						"spanish": "¡Cállate! ¿Cómo se atreve alguien a mí... U-uh?! (El trono se sacude violentamente)",
						"vietnamese": "Im đi! Ai dám đối với ta… ơ, ơ ơ?! (Ngai vàng rung chuyển dữ dội)",
						"thai": "หุบปาก! ใครบังอาจมา… อะ, อะอ้าว?! (บัลลังก์สั่นสะเทือนอย่างรุนแรง)",
						"hindi": "खामोश! हिम्मत कैसे हुई किसी की मुझे… अ, अरेरे?! (सिंहासन बुरी तरह हिलता है)"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"content": {
						"korean": "꼴좋다.",
						"english": "Serves them right.",
						"japanese": "ざまあみろ。",
						"chinese": "活该。",
						"french": "Bien fait.",
						"spanish": "Se lo merecen.",
						"vietnamese": "Đáng đời.",
						"thai": "สมน้ำหน้า",
						"hindi": "अच्छा हुआ।"
					},
					"emotion": "happy"
				},
				{
					"emotion": "sad",
					"speaker": "inka",
					"type": "speech",
					"content": {
						"korean": "…안쓰러워요. 저런 모습까지 보여야 할까요.",
						"english": "...It's pathetic. Do they really have to show themselves like that?",
						"japanese": "…可哀想ですね。あんな姿まで見せる必要があるのでしょうか。",
						"chinese": "…真可怜。有必要表现成那样吗？",
						"french": "...C'est pitoyable. Faut-il vraiment se montrer sous cet angle ?",
						"spanish": "...Es lamentable. ¿Realmente tienen que mostrarse así?",
						"vietnamese": "...Thật đáng thương. Có cần phải tỏ ra như vậy không?",
						"thai": "…น่าสงสารจังเลย ต้องแสดงท่าทางแบบนั้นด้วยเหรอ",
						"hindi": "…दया आती है। क्या उन्हें ऐसे दिखना ज़रूरी है?"
					}
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"action": "enter",
					"speaker": "inka"
				},
				{
					"content": {
						"korean": "…드디어, 끝났군. 이… 위엄… 지긋지긋했다…",
						"english": "...Finally, it's over. This... majesty... I'm sick of it...",
						"japanese": "…やっと、終わったか。この…威厳…うんざりだった…",
						"chinese": "…终于，结束了。这份…威严…真是受够了…",
						"french": "...Enfin, c'est fini. Cette... majesté... j'en avais marre...",
						"spanish": "...Por fin, se acabó. Esta... majestad... estaba harto de ella...",
						"vietnamese": "...Cuối cùng, cũng kết thúc rồi. Cái… uy nghiêm này… thật đáng ghét…",
						"thai": "…ในที่สุดก็จบลงเสียที ความ… สง่างาม… น่าเบื่อหน่ายจริง…",
						"hindi": "...आखिरकार, यह ख़त्म हुआ। यह… प्रताप… मैं तंग आ चुका था…"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "뭐라고?",
						"english": "What?",
						"japanese": "何？",
						"chinese": "什么？",
						"french": "Quoi ?",
						"spanish": "¿Qué?",
						"vietnamese": "Cái gì?",
						"thai": "ว่าอะไรนะ?",
						"hindi": "क्या?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아무도… 왕이 될 필요는 없어요. 그냥, 쉬어요.",
						"english": "No one… needs to be king. Just, rest.",
						"japanese": "誰も…王になる必要はない。ただ、休んでください。",
						"chinese": "没有人…需要成为国王。只是，休息吧。",
						"french": "Personne… n'a besoin d'être roi. Repose-toi, c'est tout.",
						"spanish": "Nadie… necesita ser rey. Solo, descansa.",
						"vietnamese": "Không ai… cần phải làm vua cả. Cứ nghỉ ngơi đi.",
						"thai": "ไม่มีใคร…จำเป็นต้องเป็นราชาหรอก แค่พักผ่อนเถอะ",
						"hindi": "किसी को… राजा बनने की ज़रूरत नहीं है। बस, आराम करो。"
					},
					"speaker": "inka",
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "왕의 가면이 벗겨졌다. 그 안에는 지쳐버린 작은 존재가 있었다.",
						"english": "The king's mask was removed. Inside was a small, exhausted being.",
						"japanese": "王の仮面が剥がれた。その中には、疲れ果てた小さな存在がいた。",
						"chinese": "国王的面具被揭开。里面是一个疲惫不堪的小小存在。",
						"french": "Le masque du roi est tombé. À l'intérieur se trouvait une petite créature épuisée.",
						"spanish": "La máscara del rey fue quitada. Dentro había un pequeño ser exhausto.",
						"vietnamese": "Mặt nạ của nhà vua đã được tháo ra. Bên trong là một sinh vật nhỏ bé, kiệt sức.",
						"thai": "หน้ากากของราชาถูกถอดออก ภายในคือสิ่งมีชีวิตตัวเล็กที่อ่อนล้า",
						"hindi": "राजा का मुखौटा उतर गया। अंदर एक छोटा, थका हुआ प्राणी था।"
					},
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "진정한 왕은 누구인가. 다음 알현실은… 더 깊은 진실을 감추고 있다.",
						"english": "Who is the true king? The next audience chamber… hides a deeper truth.",
						"japanese": "真の王は誰か。次の謁見の間は…さらに深い真実を隠している。",
						"chinese": "谁才是真正的国王？下一个觐见厅…隐藏着更深的真相。",
						"french": "Qui est le véritable roi ? La prochaine salle d'audience… cache une vérité plus profonde.",
						"spanish": "¿Quién es el verdadero rey? La siguiente sala de audiencia… oculta una verdad más profunda.",
						"vietnamese": "Ai là vị vua đích thực? Sảnh tiếp theo… che giấu một sự thật sâu sắc hơn.",
						"thai": "ใครคือราชาที่แท้จริง? ห้องโถงรับรองถัดไป… ซ่อนความจริงที่ลึกซึ้งยิ่งกว่า",
						"hindi": "असली राजा कौन है? अगला दरबार कक्ष… एक गहरी सच्चाई छिपाता है।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "하찮은 것들… 감히 짐을… 크윽, 이 정도도 못 버티나.",
						"english": "Insignificant wretches… How dare you… Ugh, can't even endure this much.",
						"japanese": "取るに足らない者ども…よくも我を…くっ、この程度も耐えられぬか。",
						"chinese": "卑微的家伙们…竟敢冒犯我…呃，连这点都撑不住吗。",
						"french": "Insignifiantes créatures… Comment osez-vous… Ugh, vous ne pouvez même pas supporter ça.",
						"spanish": "Seres insignificantes… ¿Cómo os atrevéis a… Ugh, ¿ni siquiera podéis soportar esto?",
						"vietnamese": "Những kẻ hèn mọn… Dám đối đầu với ta… Khụ, không chịu nổi đến mức này sao.",
						"thai": "พวกไร้ค่า… กล้าดียังไง… อึก, แค่นี้ก็ทนไม่ไหวแล้วรึไง",
						"hindi": "तुच्छ प्राणी… हिम्मत कैसे हुई… उफ़, इतना भी सहन नहीं कर सकते क्या।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "젠장… 다시 올라갈 거야.",
						"english": "Damn it… I'll climb back up.",
						"japanese": "くそ…また上るぞ。",
						"chinese": "该死…我会再爬上去的。",
						"french": "Maudits… Je remonterai.",
						"spanish": "Maldita sea… Volveré a subir.",
						"vietnamese": "Chết tiệt… Ta sẽ leo lên lại.",
						"thai": "บ้าเอ๊ย… ข้าจะปีนกลับขึ้นไปใหม่",
						"hindi": "धिक्कार है… मैं फिर से ऊपर चढ़ूंगा।"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…불쌍한 왕이네요. 이겼는데도 저렇게 힘들어하다니.",
						"english": "…Poor king. Even after winning, he struggles so much.",
						"japanese": "…可哀そうな王ですね。勝ったのに、あんなに苦しんでいるなんて。",
						"chinese": "…可怜的国王。即使赢了，也如此艰难。",
						"french": "…Pauvre roi. Même après avoir gagné, il souffre tellement.",
						"spanish": "…Pobre rey. Incluso después de ganar, sufre tanto.",
						"vietnamese": "…Thật là một vị vua đáng thương. Ngay cả khi đã thắng, ngài ấy vẫn khổ sở đến vậy.",
						"thai": "…ราชาที่น่าสงสาร แม้จะชนะแล้วแต่ก็ยังลำบากถึงขนาดนั้น",
						"hindi": "…बेचारा राजा। जीतने के बाद भी, वह इतना संघर्ष कर रहा है।"
					},
					"speaker": "inka",
					"emotion": "sad"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "여기까지 오다니… 건방진 것들! 짐의 분노를… 으윽! (겨우 균형을 잡는다)",
						"english": "To come this far... Insolent fools! My wrath shall... Ugh! (Barely regains balance)",
						"japanese": "ここまで来るとは…生意気な奴らめ！我が怒りを…うぐっ！ (かろうじてバランスを取る)",
						"chinese": "竟敢走到这里…放肆的东西！朕的怒火…呃！ (勉强站稳)",
						"french": "Arriver jusqu'ici... Insolents ! Ma colère... Ugh ! (Retrouve difficilement l'équilibre)",
						"spanish": "Llegar hasta aquí... ¡Insolentes! Mi ira... ¡Ugh! (Apenas recupera el equilibrio)",
						"vietnamese": "Dám đến tận đây… Đồ xấc xược! Cơn thịnh nộ của ta… Ư! (Chật vật giữ thăng bằng)",
						"thai": "กล้ามาถึงที่นี่… พวกบังอาจ! ความโกรธของข้า… อึก! (แทบจะทรงตัวไม่อยู่)",
						"hindi": "यहाँ तक आने की… ढीठों की हिम्मत कैसे हुई! मेरा क्रोध… उफ़! (मुश्किल से संतुलन बनाता है)"
					},
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이제 그만해.",
						"english": "Stop it now.",
						"japanese": "もうやめて。",
						"chinese": "别再这样了。",
						"french": "Arrête ça maintenant.",
						"spanish": "Para ya.",
						"vietnamese": "Dừng lại đi.",
						"thai": "พอได้แล้ว",
						"hindi": "अब बस करो।"
					},
					"emotion": "angry"
				},
				{
					"speaker": "inka",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"speaker": "inka",
					"type": "speech",
					"content": {
						"korean": "억지로 무서운 척 안 해도 돼요. 이미 충분히… 가여운데.",
						"english": "You don't have to force yourself to act scary. You're already quite... pitiful.",
						"japanese": "無理に怖いフリしなくてもいいですよ。もう十分に…可哀想だから。",
						"chinese": "没必要硬装出一副可怕的样子。你已经够…可怜的了。",
						"french": "Vous n'avez pas à vous forcer à faire peur. Vous êtes déjà bien assez... pitoyable.",
						"spanish": "No tienes que forzarte a parecer aterrador. Ya eres bastante... lamentable.",
						"vietnamese": "Không cần phải cố gắng tỏ ra đáng sợ đâu. Đã đủ… đáng thương rồi.",
						"thai": "ไม่ต้องฝืนทำเป็นน่ากลัวหรอก แค่นี้ก็… น่าสมเพชแล้ว",
						"hindi": "तुम्हें जबरदस्ती डरावना दिखने की ज़रूरत नहीं है। तुम पहले से ही काफी… दयनीय हो।"
					},
					"emotion": "sad"
				}
			]
		}
	]
} as const;
