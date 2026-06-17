export const scenario_snowy_skaalbane_22_02 = {
	"scenario_id": "snowy_skaalbane_22_02",
	"order": 2,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"eira": {
			"id": "mon_0c37c014-b5ca-4f2f-ad03-5d393e5b2eb1",
			"name": {
				"korean": "에이라",
				"english": "Eira",
				"japanese": "エイラ",
				"chinese": "艾拉",
				"french": "Eira",
				"spanish": "Eira",
				"vietnamese": "Eira",
				"thai": "ไอรา",
				"hindi": "ऐरा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8e2970b7-bcb1-4b1c-6bf0-93106b373500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/0ca1ec09-a624-450f-054a-b98de58bdb00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"스칼베인, 죽은 자들의 절규가 깃든 얼음 기둥.",
			"푸른빛 섬광은 따뜻한 기억을 조작하며 다가왔다.",
			"이제, 지식은 환영 속에서 무용지물이 되고.",
			"진실은 생명력을 갈취하는 공포로 변했다."
		],
		"english": [
			"Scalvane, a pillar of ice imbued with the screams of the dead.",
			"A blue flash approached, manipulating warm memories.",
			"Now, knowledge became useless within the illusion.",
			"Truth transformed into a life-draining terror."
		],
		"japanese": [
			"スカルベイン、死者の絶叫が宿る氷の柱。",
			"青い閃光は温かい記憶を操りながら迫ってきた。",
			"今や、知識は幻影の中では無用となった。",
			"真実は生命力を奪う恐怖へと変わった。"
		],
		"chinese": [
			"斯卡尔维恩，死者哀嚎萦绕的冰柱。",
			"蓝色闪光袭来，操控着温暖的记忆。",
			"如今，知识在幻象中变得毫无用处。",
			"真相化作了吞噬生命的恐惧。"
		],
		"french": [
			"Scalvane, un pilier de glace imprégné des cris des morts.",
			"Un éclair bleu approcha, manipulant de chaleureux souvenirs.",
			"Désormais, le savoir devint inutile au sein de l'illusion.",
			"La vérité se transforma en une terreur vampirisant la vie."
		],
		"spanish": [
			"Scalvane, un pilar de hielo infundido con los gritos de los muertos.",
			"Un destello azul se acercó, manipulando cálidos recuerdos.",
			"Ahora, el conocimiento se volvió inútil en la ilusión.",
			"La verdad se transformó en un terror que arrebataba la vida."
		],
		"vietnamese": [
			"Scalvane, cột băng ngập tràn tiếng thét của người chết.",
			"Tia chớp xanh ập đến, thao túng những ký ức ấm áp.",
			"Giờ đây, tri thức trở nên vô dụng giữa ảo ảnh.",
			"Sự thật biến thành nỗi kinh hoàng tước đoạt sinh lực."
		],
		"thai": [
			"สกาลเวน เสาหินน้ำแข็งที่สถิตด้วยเสียงกรีดร้องของผู้ตาย",
			"แสงวาบสีน้ำเงินเคลื่อนเข้ามา บิดเบือนความทรงจำอันอบอุ่น",
			"บัดนี้ ความรู้กลายเป็นสิ่งไร้ประโยชน์ในภาพลวงตา",
			"ความจริงแปรเปลี่ยนเป็นความหวาดกลัวที่ดูดกลืนชีวิต"
		],
		"hindi": [
			"स्कलवेन, मृतकों की चीखों से भरा बर्फ का एक खंभा।",
			"नीली चमक पास आई, गर्म यादों को तोड़-मरोड़कर।",
			"अब, ज्ञान भ्रम में बेकार हो गया।",
			"सत्य जीवन-शोषणकारी भय में बदल गया।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "얼음 기둥의 심장부, 푸른 섬광이 공간을 뒤덮었다.",
						"english": "At the heart of the ice pillar, a blue flash engulfed the space.",
						"japanese": "氷柱の心臓部、青い閃光が空間を覆った。",
						"chinese": "冰柱的核心处，蓝色闪光笼罩了整个空间。",
						"french": "Au cœur du pilier de glace, un éclair bleu engloutit l'espace.",
						"spanish": "En el corazón del pilar de hielo, un destello azul envolvió el espacio.",
						"vietnamese": "Tại trung tâm cột băng, một tia chớp xanh bao trùm không gian.",
						"thai": "ณ ใจกลางเสาหินน้ำแข็ง แสงวาบสีน้ำเงินปกคลุมทั่วบริเวณ",
						"hindi": "बर्फ के खंभे के हृदय में, एक नीली चमक ने अंतरिक्ष को घेर लिया।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"action": "enter",
					"spot": [
						3,
						3
					],
					"speaker": "eira",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "이… 룬들… 읽을 수가 없어. 내 지식이… 흔들려.",
						"english": "These… runes… I can't read them. My knowledge… falters.",
						"japanese": "こ…このルーン…読めない。私の知識が…揺らぐ。",
						"chinese": "这…这些符文…我读不懂。我的知识…动摇了。",
						"french": "Ces… runes… Je ne peux pas les lire. Mon savoir… vacille.",
						"spanish": "Estas… runas… No puedo leerlas. Mi conocimiento… flaquea.",
						"vietnamese": "Những… rune này… tôi không thể đọc được. Kiến thức của tôi… đang lung lay.",
						"thai": "รูนพวกนี้… ฉันอ่านไม่ออก ความรู้ของฉัน… สั่นคลอน",
						"hindi": "ये… रुन्स… मैं इन्हें पढ़ नहीं पा रहा। मेरा ज्ञान… डगमगा रहा है।"
					},
					"speaker": "eira",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "왜 그래, 에이라? 갑자기 표정이 안 좋은데.",
						"english": "What's wrong, Eira? You suddenly look unwell.",
						"japanese": "どうしたの、エイラ？急に顔色が悪いけど。",
						"chinese": "怎么了，艾拉？你的脸色突然变得很难看。",
						"french": "Qu'est-ce qui ne va pas, Eira ? Tu as soudain mauvaise mine.",
						"spanish": "¿Qué te pasa, Eira? De repente te ves mal.",
						"vietnamese": "Eira, em sao vậy? Tự nhiên mặt em trông không ổn.",
						"thai": "เกิดอะไรขึ้น ไอรา? ทำไมสีหน้าเธอดูไม่ดีเลย",
						"hindi": "क्या हुआ, ऐरा? तुम अचानक ठीक नहीं दिख रही हो।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "환영이… 보여. 가장 따뜻했던 기억이….",
						"english": "An illusion… I see it. My warmest memories…",
						"japanese": "幻影が…見える。一番温かかった記憶が…。",
						"chinese": "幻象…我看到了。我最温暖的记忆…。",
						"french": "Une illusion… Je la vois. Mes souvenirs les plus chaleureux…",
						"spanish": "Una ilusión… La veo. Mis recuerdos más cálidos…",
						"vietnamese": "Một ảo ảnh… tôi thấy nó rồi. Những ký ức ấm áp nhất của tôi…",
						"thai": "ภาพลวงตา… ฉันเห็นมันแล้ว ความทรงจำที่อบอุ่นที่สุด…",
						"hindi": "एक भ्रम… मैं इसे देख रही हूँ। मेरी सबसे गर्म यादें…।"
					},
					"emotion": "sad",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"content": {
						"korean": "정신 차려! 저건 환영일 뿐이야!",
						"english": "Snap out of it! That's just an illusion!",
						"japanese": "しっかりして！あれはただの幻影よ！",
						"chinese": "清醒一点！那只是幻象！",
						"french": "Reprends-toi ! Ce n'est qu'une illusion !",
						"spanish": "¡Recupérate! ¡Eso es solo una ilusión!",
						"vietnamese": "Tỉnh táo lại đi! Đó chỉ là ảo ảnh thôi!",
						"thai": "ตั้งสติหน่อย! นั่นเป็นแค่ภาพลวงตา!",
						"hindi": "होश में आओ! वह बस एक भ्रम है!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"content": {
						"korean": "환영은 더욱 선명해졌다. 잊었던 행복의 순간들이 눈앞에 펼쳐졌다.",
						"english": "The illusion grew clearer. Forgotten moments of happiness unfolded before my eyes.",
						"japanese": "幻影はさらに鮮明になった。忘れていた幸福の瞬間が目の前に広がった。",
						"chinese": "幻象变得更加清晰。被遗忘的幸福瞬间在眼前展开。",
						"french": "L'illusion devint plus claire. Des moments de bonheur oubliés se déroulèrent sous mes yeux.",
						"spanish": "La ilusión se hizo más clara. Momentos olvidados de felicidad se desplegaron ante mis ojos.",
						"vietnamese": "Ảo ảnh trở nên rõ ràng hơn. Những khoảnh khắc hạnh phúc đã quên hiện ra trước mắt.",
						"thai": "ภาพลวงตาชัดเจนยิ่งขึ้น ช่วงเวลาแห่งความสุขที่ถูกลืมเลือนปรากฏขึ้นตรงหน้า",
						"hindi": "भ्रम और स्पष्ट हो गया। भूली हुई खुशी के पल मेरी आँखों के सामने खुल गए।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"spot": [
						3,
						3
					],
					"action": "enter",
					"speaker": "eira",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "…엄마? 내가 어릴 때 살던 집이 왜 여기에….",
						"english": "...Mom? Why is the house I lived in as a child here...?",
						"japanese": "「…ママ？私が子供の頃住んでいた家がどうしてここに…。」",
						"chinese": "“……妈妈？我小时候住的房子为什么会在这里……”",
						"french": "...Maman ? Pourquoi la maison où j'ai vécu enfant est-elle ici... ?",
						"spanish": "...¿Mamá? ¿Por qué la casa donde viví de niño está aquí...?",
						"vietnamese": "...Mẹ? Sao ngôi nhà con từng ở hồi nhỏ lại ở đây...?",
						"thai": "...แม่? ทำไมบ้านที่ฉันเคยอยู่ตอนเด็กๆ ถึงมาอยู่ที่นี่...",
						"hindi": "...माँ? मैं बचपन में जिस घर में रहता था, वह यहाँ क्यों है...?"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_1"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아니야! 함정이야! 스칼베인이… 우리의 기억을 먹고 있어!",
						"english": "No! It's a trap! Skalbane... is devouring our memories!",
						"japanese": "「違う！罠だ！スカルベインが…我々の記憶を喰らっている！」",
						"chinese": "“不！这是陷阱！斯卡尔班……正在吞噬我们的记忆！”",
						"french": "Non ! C'est un piège ! Skalbane... dévore nos souvenirs !",
						"spanish": "¡No! ¡Es una trampa! Skalbane... ¡está devorando nuestros recuerdos!",
						"vietnamese": "Không! Là bẫy! Skalbane... đang ăn mòn ký ức của chúng ta!",
						"thai": "ไม่! มันคือกับดัก! สกัลเบน... กำลังกลืนกินความทรงจำของเรา!",
						"hindi": "नहीं! यह एक जाल है! स्कल्बेन... हमारी यादें खा रहा है!"
					},
					"speaker": "eira",
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "기억이… 너무 달콤해. 빠져들 것 같아.",
						"english": "The memories... are too sweet. I feel like I'm falling into them.",
						"japanese": "「記憶が…甘すぎる。引き込まれそうだ。」",
						"chinese": "“记忆……太甜美了。我感觉要沉沦了。”",
						"french": "Les souvenirs... sont trop doux. J'ai l'impression de m'y perdre.",
						"spanish": "Los recuerdos... son demasiado dulces. Siento que voy a caer en ellos.",
						"vietnamese": "Ký ức... ngọt ngào quá. Tôi sắp chìm đắm vào đó rồi.",
						"thai": "ความทรงจำ... หวานเหลือเกิน. รู้สึกเหมือนกำลังจมดิ่งลงไป.",
						"hindi": "यादें... बहुत मीठी हैं। मुझे लग रहा है मैं उनमें डूब रहा हूँ।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "푸른빛 섬광이… 생명력을 흡수하는 매개체야!",
						"english": "The blue flash... is the medium absorbing life force!",
						"japanese": "「青い閃光が…生命力を吸収する媒体だ！」",
						"chinese": "“那道蓝光……是吸收生命力的媒介！”",
						"french": "L'éclair bleu... est le médium qui absorbe la force vitale !",
						"spanish": "¡El destello azul... es el medio que absorbe la fuerza vital!",
						"vietnamese": "Ánh sáng xanh... chính là vật trung gian hấp thụ sinh lực!",
						"thai": "แสงแฟลชสีน้ำเงิน... คือตัวกลางที่ดูดซับพลังชีวิต!",
						"hindi": "नीली चमक... जीवन शक्ति को सोखने वाला माध्यम है!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "eira"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"content": {
						"korean": "가장 소중했던 기억이, 동시에 가장 잔인한 환영으로 변모했다.",
						"english": "The most cherished memory transformed into the cruelest illusion.",
						"japanese": "「最も大切な記憶が、同時に最も残忍な幻影へと変貌した。」",
						"chinese": "“最珍贵的记忆，同时变成了最残酷的幻象。”",
						"french": "Le souvenir le plus cher s'est transformé en l'illusion la plus cruelle.",
						"spanish": "El recuerdo más preciado se transformó en la ilusión más cruel.",
						"vietnamese": "Ký ức quý giá nhất đã biến thành ảo ảnh tàn nhẫn nhất.",
						"thai": "ความทรงจำที่ล้ำค่าที่สุด ได้แปรเปลี่ยนเป็นภาพลวงตาที่โหดร้ายที่สุด",
						"hindi": "सबसे अनमोल याद, एक साथ सबसे क्रूर भ्रम में बदल गई।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "eira",
					"action": "enter",
					"spot": [
						3,
						3
					]
				},
				{
					"content": {
						"korean": "내 동생… 살려줘! (환영에 붙잡혀 몸부림치며)",
						"english": "My sibling... save me! (Struggling, caught by the illusion)",
						"japanese": "「弟/妹よ…助けてくれ！（幻影に捕らえられもがきながら）」",
						"chinese": "“我的弟弟/妹妹……救救我！（被幻象抓住，挣扎着）”",
						"french": "Mon frère/ma sœur... aidez-moi ! (Se débattant, pris par l'illusion)",
						"spanish": "¡Mi hermano/hermana... sálvame! (Luchando, atrapado por la ilusión)",
						"vietnamese": "Em của tôi... cứu tôi! (Vùng vẫy, bị ảo ảnh bắt giữ)",
						"thai": "น้องชาย/น้องสาวของฉัน... ช่วยด้วย! (ดิ้นรน, ถูกจับโดยภาพลวงตา)",
						"hindi": "मेरा भाई/बहन... बचाओ मुझे! (भ्रम से पकड़े हुए, छटपटाते हुए)"
					},
					"type": "speech",
					"speaker": "character_2",
					"emotion": "sad"
				},
				{
					"speaker": "eira",
					"emotion": "angry",
					"content": {
						"korean": "정신 차려! 저건 네 동생이 아니야! 스칼베인이 너를 유혹하는 거야!",
						"english": "Snap out of it! That's not your sibling! Skalbane is luring you!",
						"japanese": "「目を覚ませ！あれはお前の弟/妹じゃない！スカルベインがお前を誘惑しているんだ！」",
						"chinese": "“清醒点！那不是你弟弟/妹妹！是斯卡尔班在诱惑你！”",
						"french": "Reprends-toi ! Ce n'est pas ton frère/ta sœur ! C'est Skalbane qui te tente !",
						"spanish": "¡Espabila! ¡Ese no es tu hermano/hermana! ¡Skalbane te está seduciendo!",
						"vietnamese": "Tỉnh táo lại! Đó không phải em của ngươi! Skalbane đang dụ dỗ ngươi đấy!",
						"thai": "ตั้งสติหน่อย! นั่นไม่ใช่น้องชาย/น้องสาวของนาย! สกัลเบนกำลังล่อลวงนายอยู่!",
						"hindi": "होश में आओ! वह तुम्हारा भाई/बहन नहीं है! स्कल्बेन तुम्हें लुभा रहा है!"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "동료들을 봐! 우리는 함께다! 이런 정신 공격에 흔들리지 마!",
						"english": "Look at your comrades! We are together! Don't waver in the face of such mental attacks!",
						"japanese": "「仲間を見ろ！我々は共にある！このような精神攻撃に揺らぐな！」",
						"chinese": "“看看你的同伴！我们在一起！不要被这种精神攻击动摇！”",
						"french": "Regarde tes compagnons ! Nous sommes ensemble ! Ne te laisse pas ébranler par ces attaques mentales !",
						"spanish": "¡Mira a tus compañeros! ¡Estamos juntos! ¡No te tambalees ante estos ataques mentales!",
						"vietnamese": "Hãy nhìn đồng đội của ngươi! Chúng ta luôn bên nhau! Đừng dao động trước những đòn tấn công tinh thần này!",
						"thai": "มองดูเพื่อนร่วมทีมของนายสิ! เราอยู่ด้วยกัน! อย่าหวั่นไหวกับการโจมตีทางจิตแบบนี้!",
						"hindi": "अपने साथियों को देखो! हम साथ हैं! ऐसे मानसिक हमलों से विचलित मत हो!"
					},
					"type": "speech"
				},
				{
					"speaker": "eira",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "이 힘은… 기억을 빼앗아 생명력을 갉아먹는 방식이야. 고대의 전설과는 달라!",
						"english": "This power... devours life force by stealing memories. It's different from ancient legends!",
						"japanese": "「この力は…記憶を奪い、生命力を蝕むやり方だ。古代の伝説とは違う！」",
						"chinese": "“这种力量……是通过夺取记忆来侵蚀生命力的。和古代传说不同！”",
						"french": "Ce pouvoir... dévore la force vitale en volant les souvenirs. C'est différent des légendes anciennes !",
						"spanish": "Este poder... devora la fuerza vital robando recuerdos. ¡Es diferente de las leyendas antiguas!",
						"vietnamese": "Sức mạnh này... là cách thức cướp ký ức và ăn mòn sinh lực. Khác với truyền thuyết cổ xưa!",
						"thai": "พลังนี้... เป็นการดูดกลืนพลังชีวิตโดยการขโมยความทรงจำ มันแตกต่างจากตำนานโบราณ!",
						"hindi": "यह शक्ति... यादें चुराकर जीवन शक्ति को नष्ट करने का तरीका है। यह प्राचीन किंवदंतियों से अलग है!"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "환영의 중심, 형체를 알 수 없는 거대한 그림자가 나타났다.",
						"english": "At the heart of the illusion, a colossal, shapeless shadow appeared.",
						"japanese": "「幻影の中心に、形なき巨大な影が現れた。」",
						"chinese": "“幻象的中心，一个无法辨认形态的巨大影子出现了。”",
						"french": "Au cœur de l'illusion, une ombre gigantesque et informe est apparue.",
						"spanish": "En el centro de la ilusión, apareció una sombra gigantesca y sin forma.",
						"vietnamese": "Tại trung tâm ảo ảnh, một bóng hình khổng lồ không thể nhận dạng đã xuất hiện.",
						"thai": "ที่ใจกลางของภาพลวงตา, เงาขนาดมหึมาที่ไร้รูปร่างได้ปรากฏขึ้น.",
						"hindi": "भ्रम के केंद्र में, एक विशाल, निराकार छाया प्रकट हुई।"
					}
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "eira",
					"action": "enter",
					"spot": [
						3,
						3
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "온기를 가진 자여… 모두 내게 바쳐라. 합류하라…",
						"english": "Warm-blooded ones... offer all to me. Join me...",
						"japanese": "温かい者たちよ…全てを我に捧げよ。合流せよ…",
						"chinese": "有温度之人…皆献予我。加入我吧…",
						"french": "Êtres de chaleur... offrez-moi tout. Rejoignez-moi...",
						"spanish": "Criaturas cálidas... ofrecedmelo todo. Uníos a mí...",
						"vietnamese": "Hỡi những kẻ mang hơi ấm… Hãy dâng tất cả cho ta. Hãy nhập vào ta…",
						"thai": "ผู้มีไออุ่นเอ๋ย... จงมอบทุกสิ่งแก่ข้า. จงรวมเข้ากับข้า...",
						"hindi": "उष्ण रक्त वाले... सब मुझे अर्पित करो। मुझसे जुड़ जाओ..."
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "또 다른 적이다! 방심하지 마!",
						"english": "Another enemy! Don't let your guard down!",
						"japanese": "また別の敵だ！気を抜くな！",
						"chinese": "又是一个敌人！别放松警惕！",
						"french": "Un autre ennemi ! Ne baissez pas votre garde !",
						"spanish": "¡Otro enemigo! ¡No bajéis la guardia!",
						"vietnamese": "Lại một kẻ địch nữa! Đừng lơ là!",
						"thai": "ศัตรูอีกแล้ว! อย่าประมาท!",
						"hindi": "एक और दुश्मन! लापरवाह मत होना!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"speaker": "eira",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "저것은 스칼베인의 분신! 환영을 통해 직접 생명력을 흡수할 거야!",
						"english": "That's a clone of Skarvein! It will absorb life force directly through illusions!",
						"japanese": "あれはスカルベインの分身だ！幻影を通じて直接生命力を吸収するぞ！",
						"chinese": "那是斯卡尔维恩的分身！它会通过幻影直接吸收生命力！",
						"french": "C'est un clone de Skarvein ! Il va absorber la force vitale directement par les illusions !",
						"spanish": "¡Ese es un clon de Skarvein! ¡Absorberá la fuerza vital directamente a través de las ilusiones!",
						"vietnamese": "Đó là phân thân của Skarvein! Nó sẽ hút sinh lực trực tiếp qua ảo ảnh!",
						"thai": "นั่นคือร่างแยกของสการ์เวน! มันจะดูดพลังชีวิตโดยตรงผ่านภาพลวงตา!",
						"hindi": "वह स्कारवेन का क्लोन है! यह भ्रम के माध्यम से सीधे जीवन शक्ति को अवशोषित करेगा!"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "정신을 뺏기면 끝이야! 동료들과 함께 싸운다!",
						"english": "If you lose your mind, it's over! Fight with your comrades!",
						"japanese": "精神を奪われたら終わりだ！仲間と共に戦うぞ！",
						"chinese": "如果精神被夺走就完了！与同伴一起战斗！",
						"french": "Si vous perdez la tête, c'est fini ! Combattez avec vos camarades !",
						"spanish": "¡Si pierdes la razón, se acabó! ¡Luchad con vuestros compañeros!",
						"vietnamese": "Nếu mất tinh thần là hết! Chiến đấu cùng đồng đội!",
						"thai": "ถ้าเสียสติก็จบสิ้น! สู้ไปพร้อมกับสหาย!",
						"hindi": "यदि तुम अपना दिमाग खो दोगे, तो सब खत्म हो जाएगा! अपने साथियों के साथ लड़ो!"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "얼음 기둥의 핵심부, 고통스러운 절규와 환영이 뒤섞인 공간.",
						"english": "The core of the ice pillar, a space where agonizing screams and illusions intertwine.",
						"japanese": "氷柱の核、苦痛の叫びと幻影が入り混じる空間。",
						"chinese": "冰柱的核心，一个充满痛苦尖叫和幻象交织的空间。",
						"french": "Le cœur du pilier de glace, un espace où se mêlent cris agonisants et illusions.",
						"spanish": "El núcleo del pilar de hielo, un espacio donde se entrelazan gritos agonizantes e ilusiones.",
						"vietnamese": "Lõi của cột băng, một không gian nơi những tiếng kêu đau đớn và ảo ảnh hòa quyện.",
						"thai": "แกนกลางของเสาน้ำแข็ง, สถานที่ที่เสียงกรีดร้องทรมานและภาพลวงตาผสมปนเปกัน",
						"hindi": "बर्फ के खंभे का मूल, एक ऐसा स्थान जहाँ दर्दनाक चीखें और भ्रम आपस में गुंथे हुए हैं।"
					}
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "eira",
					"action": "enter",
					"spot": [
						3,
						3
					]
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "너희의 모든 온기… 스칼베인을 위한 먹이가 될 것이다.",
						"english": "All your warmth... will become fodder for Skarvein.",
						"japanese": "お前たちの全ての温かさ…スカルベインの餌食となるだろう。",
						"chinese": "你们所有的温暖…都将成为斯卡尔维恩的食粮。",
						"french": "Toute votre chaleur... deviendra la pâture de Skarvein.",
						"spanish": "Todo vuestro calor... se convertirá en alimento para Skarvein.",
						"vietnamese": "Tất cả hơi ấm của các ngươi… sẽ trở thành thức ăn cho Skarvein.",
						"thai": "ไออุ่นทั้งหมดของเจ้า... จะกลายเป็นอาหารของสการ์เวน",
						"hindi": "तुम्हारा सारा ताप... स्कारवेन का भोजन बन जाएगा।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "…헛소리하지 마! 우린 당하지 않아!",
						"english": "...Don't talk nonsense! We won't fall for it!",
						"japanese": "…戯言を言うな！我々は騙されない！",
						"chinese": "…别胡说八道！我们不会上当的！",
						"french": "...Ne dis pas de bêtises ! Nous ne nous laisserons pas faire !",
						"spanish": "...¡No digas tonterías! ¡No caeremos en la trampa!",
						"vietnamese": "…Đừng nói nhảm! Chúng ta sẽ không bị lừa đâu!",
						"thai": "...อย่าพูดเหลวไหล! เราไม่หลงกลหรอก!",
						"hindi": "...बकवास मत करो! हम नहीं फसेंगे!"
					}
				},
				{
					"emotion": "angry",
					"speaker": "eira",
					"content": {
						"korean": "푸른 섬광은 단순한 마법이 아니야! 생명력을 조작하는 매개체다!",
						"english": "The blue flash isn't just magic! It's a medium that manipulates life force!",
						"japanese": "青い閃光は単なる魔法じゃない！生命力を操作する媒体だ！",
						"chinese": "蓝色闪光可不是简单的魔法！它是操纵生命力的媒介！",
						"french": "L'éclair bleu n'est pas qu'une simple magie ! C'est un médium qui manipule la force vitale !",
						"spanish": "¡El destello azul no es solo magia! ¡Es un medio que manipula la fuerza vital!",
						"vietnamese": "Ánh sáng xanh không phải là phép thuật đơn thuần! Nó là vật trung gian thao túng sinh lực!",
						"thai": "แสงสีน้ำเงินไม่ใช่แค่เวทมนตร์ธรรมดา! มันคือสื่อกลางที่บงการพลังชีวิต!",
						"hindi": "नीली चमक सिर्फ जादू नहीं है! यह जीवन शक्ति को नियंत्रित करने वाला माध्यम है!"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "기억은 빼앗겨도, 우리의 의지는 꺾을 수 없다!",
						"english": "Even if memories are stolen, our will cannot be broken!",
						"japanese": "記憶は奪われても、我々の意志は挫けない！",
						"chinese": "即使记忆被夺走，我们的意志也无法被击垮！",
						"french": "Même si les souvenirs sont volés, notre volonté ne peut être brisée !",
						"spanish": "¡Aunque los recuerdos sean robados, nuestra voluntad no puede ser quebrada!",
						"vietnamese": "Dù ký ức có bị đánh cắp, ý chí của chúng ta không thể bị bẻ gãy!",
						"thai": "แม้ความทรงจำจะถูกพรากไป แต่เจตจำนงของเราไม่อาจถูกทำลาย!",
						"hindi": "भले ही यादें छीन ली जाएं, हमारी इच्छाशक्ति को तोड़ा नहीं जा सकता!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "환영의 근원이 사라지자, 공간은 잠시 고요해졌다.",
						"english": "As the source of the illusions vanished, the space fell silent for a moment.",
						"japanese": "幻影の根源が消え去ると、空間は一時静寂に包まれた。",
						"chinese": "当幻象的源头消失后，空间暂时归于寂静。",
						"french": "Alors que la source des illusions disparaissait, l'espace se tut un instant.",
						"spanish": "Cuando la fuente de las ilusiones desapareció, el espacio enmudeció por un momento.",
						"vietnamese": "Khi nguồn gốc của ảo ảnh biến mất, không gian trở nên tĩnh lặng trong giây lát.",
						"thai": "เมื่อแหล่งกำเนิดของภาพลวงตาหายไป, พื้นที่ก็เงียบสงบลงชั่วขณะ",
						"hindi": "जैसे ही भ्रम का स्रोत गायब हो गया, कुछ देर के लिए स्थान शांत हो गया।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아직… 멀었어. 스칼베인은… 모든 기억을 삼킬 것이다…",
						"english": "Not yet… Skalbane will… devour all memories…",
						"japanese": "まだ… 遠い。スカルベインは… 全ての記憶を飲み込むだろう…",
						"chinese": "还没… 结束。斯卡尔班… 将吞噬所有记忆…",
						"french": "Pas encore… Skalbane… dévorera tous les souvenirs…",
						"spanish": "Aún… no. Skalbane… devorará todos los recuerdos…",
						"vietnamese": "Vẫn chưa… Xa lắm. Skalbane sẽ… nuốt chửng mọi ký ức…",
						"thai": "ยัง… อีกไกล. สคาลเบนจะ… กลืนกินความทรงจำทั้งหมด…",
						"hindi": "अभी… बहुत दूर है। स्कैलबेन… सभी यादों को निगल जाएगा…"
					},
					"emotion": "sad",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "끝났나…?",
						"english": "Is it over…?",
						"japanese": "終わったのか…？",
						"chinese": "结束了吗…？",
						"french": "C'est fini… ?",
						"spanish": "¿Ha terminado…?",
						"vietnamese": "Kết thúc rồi sao…?",
						"thai": "จบแล้วหรือ…?",
						"hindi": "क्या यह खत्म हो गया…?"
					}
				},
				{
					"action": "enter",
					"spot": [
						3,
						3
					],
					"speaker": "eira",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "eira",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "아니, 시작일 뿐이야. 스칼베인은… 단순한 괴물이 아니야.",
						"english": "No, it's just the beginning. Skalbane is… no mere monster.",
						"japanese": "いや、始まりに過ぎない。スカルベインは… 単なる怪物ではない。",
						"chinese": "不，这只是开始。斯卡尔班… 不是简单的怪物。",
						"french": "Non, ce n'est que le début. Skalbane n'est… pas un simple monstre.",
						"spanish": "No, es solo el principio. Skalbane… no es un simple monstruo.",
						"vietnamese": "Không, đây chỉ là khởi đầu. Skalbane… không phải là một quái vật đơn thuần.",
						"thai": "ไม่สิ, นี่เป็นแค่จุดเริ่มต้น. สคาลเบน… ไม่ใช่แค่สัตว์ประหลาดธรรมดา.",
						"hindi": "नहीं, यह तो बस शुरुआत है। स्कैलबेन… कोई साधारण राक्षस नहीं है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 얼음 기둥 전체가… 고통받는 영혼들의 집합체야.",
						"english": "This entire pillar of ice is… a collection of tormented souls.",
						"japanese": "この氷の柱全体が… 苦しむ魂たちの集合体だ。",
						"chinese": "这整个冰柱… 是受苦灵魂的集合体。",
						"french": "Cette colonne de glace entière est… un assemblage d'âmes tourmentées.",
						"spanish": "Toda esta columna de hielo es… una colección de almas atormentadas.",
						"vietnamese": "Cả cây cột băng này… là tập hợp của những linh hồn đau khổ.",
						"thai": "เสาน้ำแข็งทั้งหมดนี้… คือการรวมตัวของดวงวิญญาณที่ทรมาน.",
						"hindi": "यह पूरा बर्फ का खंभा… पीड़ित आत्माओं का एक संग्रह है।"
					},
					"emotion": "sad",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"content": {
						"korean": "차가운 심장의 맥동은 멈추지 않았다. 더 깊은 곳에서, 더 많은 절규가 기다렸다.",
						"english": "The pulse of the cold heart did not stop. Deeper within, more screams awaited.",
						"japanese": "冷たい心の脈動は止まらなかった。より深い場所で、さらなる絶叫が待っていた。",
						"chinese": "冰冷心脏的脉动没有停止。在更深处，更多的尖叫在等待。",
						"french": "Le battement du cœur froid n'a pas cessé. Plus profondément, d'autres cris attendaient.",
						"spanish": "El pulso del corazón frío no se detuvo. Más profundo, más gritos esperaban.",
						"vietnamese": "Nhịp đập của trái tim lạnh giá không ngừng. Sâu hơn nữa, nhiều tiếng gào thét hơn đang chờ đợi.",
						"thai": "ชีพจรของหัวใจอันเยือกเย็นไม่หยุดนิ่ง. ลึกเข้าไปอีก, เสียงกรีดร้องอีกมากมายรออยู่.",
						"hindi": "ठंडे दिल की धड़कन नहीं रुकी। गहराई में, और भी चीखें इंतजार कर रही थीं।"
					},
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "따뜻한 기억들이, 차가운 얼음 속에 영원히 갇혔다.",
						"english": "Warm memories, forever trapped in cold ice.",
						"japanese": "温かい記憶が、冷たい氷の中に永遠に囚われた。",
						"chinese": "温暖的记忆，永远被困在冰冷的寒冰中。",
						"french": "Des souvenirs chaleureux, à jamais emprisonnés dans la glace froide.",
						"spanish": "Recuerdos cálidos, atrapados para siempre en el hielo frío.",
						"vietnamese": "Những ký ức ấm áp, mãi mãi bị giam cầm trong băng giá lạnh lẽo.",
						"thai": "ความทรงจำอันอบอุ่น, ถูกกักขังชั่วนิรันดร์ในน้ำแข็งอันเยือกเย็น.",
						"hindi": "गर्म यादें, ठंडी बर्फ में हमेशा के लिए कैद हो गईं।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "합류하라… 영원한 고통 속으로. 너희의 의지도… 곧 사라질 것이다.",
						"english": "Join us… in eternal torment. Your will, too… shall soon vanish.",
						"japanese": "合流せよ… 永遠の苦痛の中へ。お前たちの意志も… やがて消え去るだろう。",
						"chinese": "加入我们吧… 进入永恒的痛苦。你们的意志… 也将很快消失。",
						"french": "Rejoignez-nous… dans le tourment éternel. Votre volonté aussi… disparaîtra bientôt.",
						"spanish": "Únanse… al tormento eterno. Vuestra voluntad también… pronto se desvanecerá.",
						"vietnamese": "Hãy gia nhập… vào nỗi thống khổ vĩnh hằng. Ý chí của các ngươi cũng… sẽ sớm tan biến.",
						"thai": "มาร่วมกัน… ในความทรมานชั่วนิรันดร์. เจตจำนงของเจ้าก็… จะหายไปในไม่ช้า.",
						"hindi": "हमसे जुड़ो… शाश्वत पीड़ा में। तुम्हारी इच्छा भी… जल्द ही गायब हो जाएगी।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "크윽… 아직… 포기 안 해!",
						"english": "Ugh… Not yet… I won't give up!",
						"japanese": "くっ… まだ… 諦めない！",
						"chinese": "咳… 还没… 我不会放弃！",
						"french": "Ugh… Pas encore… Je n'abandonnerai pas !",
						"spanish": "Ugh… Aún… ¡no me rindo!",
						"vietnamese": "Khụ… Vẫn chưa… Tôi sẽ không bỏ cuộc!",
						"thai": "อึก… ยัง… ไม่ยอมแพ้!",
						"hindi": "उफ़… अभी… हार नहीं मानूंगा!"
					},
					"type": "speech"
				},
				{
					"action": "enter",
					"spot": [
						3,
						3
					],
					"speaker": "eira",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "…진실은 아직 밝혀지지 않았어. 다시… 도전해야 해.",
						"english": "…The truth hasn't been revealed yet. I must… challenge again.",
						"japanese": "…真実はまだ明かされていない。再び… 挑戦しなければ。",
						"chinese": "…真相尚未揭示。必须… 再次挑战。",
						"french": "…La vérité n'a pas encore été révélée. Je dois… relever le défi à nouveau.",
						"spanish": "…La verdad aún no ha sido revelada. Debo… intentarlo de nuevo.",
						"vietnamese": "…Sự thật vẫn chưa được tiết lộ. Phải… thử thách lại.",
						"thai": "…ความจริงยังไม่ถูกเปิดเผย. ต้อง… ท้าทายอีกครั้ง.",
						"hindi": "…सच्चाई अभी सामने नहीं आई है। मुझे… फिर से चुनौती देनी होगी।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "eira"
				}
			]
		}
	]
} as const;
