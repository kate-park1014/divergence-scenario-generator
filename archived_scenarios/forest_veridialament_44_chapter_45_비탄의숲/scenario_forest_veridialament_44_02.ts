export const scenario_forest_veridialament_44_02 = {
	"scenario_id": "forest_veridialament_44_02",
	"order": 2,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"bracken": {
			"id": "mon_48cf29be-dbc0-44b1-bbb3-ecda1d14742d",
			"name": {
				"korean": "브라켄",
				"english": "Bracken",
				"japanese": "ブラッケン",
				"chinese": "布莱肯",
				"french": "Bracken",
				"spanish": "Bracken",
				"vietnamese": "Bracken",
				"thai": "แบรกเคน",
				"hindi": "ब्रैकेन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5b494da6-ffd7-43d3-7171-7ac84bdfe400/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/4a7a1b62-d7a7-4a21-ffd5-fa9b5de82100/public"
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
						"korean": "숲은 점점 깊어졌다. 기이하게 수정화된 식물들이 섬뜩하게 빛났다.",
						"english": "The forest grew deeper. Strangely crystallized plants glowed eerily.",
						"japanese": "森はますます深くなった。奇妙に結晶化した植物が不気味に輝いていた。",
						"chinese": "森林越来越深。奇异结晶化的植物发出诡异的光芒。",
						"french": "La forêt s'épaississait. Des plantes étrangement cristallisées brillaient sinistrement.",
						"spanish": "El bosque se adentraba cada vez más. Plantas extrañamente cristalizadas brillaban de forma espeluznante.",
						"vietnamese": "Rừng ngày càng sâu hơn. Thực vật kết tinh kỳ lạ phát sáng một cách ghê rợn.",
						"thai": "ป่ายิ่งลึกเข้าไปเรื่อยๆ พืชที่กลายเป็นคริสตัลอย่างแปลกประหลาดส่องแสงน่าขนลุก",
						"hindi": "जंगल गहरा होता गया। अजीब तरह से क्रिस्टलीकृत पौधे डरावनी रोशनी दे रहे थे।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이게 다 뭐야? 보석이야?",
						"english": "What is all this? Are these gems?",
						"japanese": "これは何だ？宝石なのか？",
						"chinese": "这都是什么？是宝石吗？",
						"french": "Qu'est-ce que c'est que tout ça ? Ce sont des gemmes ?",
						"spanish": "¿Qué es todo esto? ¿Son joyas?",
						"vietnamese": "Mấy thứ này là gì vậy? Đá quý à?",
						"thai": "นี่มันอะไรกันเนี่ย? อัญมณีเหรอ?",
						"hindi": "ये सब क्या है? क्या ये रत्न हैं?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "bracken",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "…흐음. 탐나는 조각들이로군.",
						"english": "...Hmm. Tempting fragments, indeed.",
						"japanese": "…ふむ。欲しくなる欠片だな。",
						"chinese": "……嗯。这些碎片，真令人垂涎。",
						"french": "...Hmm. Des fragments tentants, en effet.",
						"spanish": "...Mmm. Fragmentos tentadores, en verdad.",
						"vietnamese": "...Hừm. Những mảnh ghép đáng thèm muốn thật.",
						"thai": "...หืม ชิ้นส่วนที่น่าปรารถนาจริงๆ",
						"hindi": "...हम्म। वाकई, आकर्षक टुकड़े हैं।"
					},
					"emotion": "base",
					"speaker": "bracken"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"emotion": "base",
					"content": {
						"korean": "누구세요?",
						"english": "Who are you?",
						"japanese": "誰だ？",
						"chinese": "你是谁？",
						"french": "Qui êtes-vous ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Anh là ai?",
						"thai": "คุณคือใคร?",
						"hindi": "आप कौन हैं?"
					}
				},
				{
					"content": {
						"korean": "나는 브라켄. 숲의 모든 비밀을 알고 있지.",
						"english": "I am Braken. I know all the secrets of the forest.",
						"japanese": "私はブラケン。森のあらゆる秘密を知っている。",
						"chinese": "我是布莱肯。我知晓森林所有的秘密。",
						"french": "Je suis Braken. Je connais tous les secrets de la forêt.",
						"spanish": "Soy Braken. Conozco todos los secretos del bosque.",
						"vietnamese": "Ta là Braken. Ta biết mọi bí mật của rừng.",
						"thai": "ฉันคือบราเคน ฉันรู้ความลับทั้งหมดของป่า",
						"hindi": "मैं ब्रैकेन हूँ। मैं जंगल के सभी रहस्य जानता हूँ।"
					},
					"emotion": "base",
					"speaker": "bracken",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "특히… 이런 희귀한 수정 조각들에 대해선.",
						"english": "Especially... about these rare crystal fragments.",
						"japanese": "特に… このような珍しい水晶の欠片についてはな。",
						"chinese": "尤其……是关于这些稀有的水晶碎片。",
						"french": "Surtout... concernant ces rares fragments de cristal.",
						"spanish": "Especialmente... sobre estos raros fragmentos de cristal.",
						"vietnamese": "Đặc biệt là… về những mảnh tinh thể quý hiếm này.",
						"thai": "โดยเฉพาะ...เรื่องชิ้นส่วนคริสตัลหายากพวกนี้",
						"hindi": "खासकर... इन दुर्लभ क्रिस्टल के टुकड़ों के बारे में।"
					},
					"emotion": "happy",
					"speaker": "bracken"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "…숲을 착취하려는 자인가.",
						"english": "...One who exploits the forest?",
						"japanese": "「…森を搾取しようとする者か。」",
						"chinese": "“……是想剥削森林的人吗？”",
						"french": "...Celui qui cherche à exploiter la forêt ?",
						"spanish": "¿...El que busca explotar el bosque?",
						"vietnamese": "...Kẻ muốn bóc lột khu rừng?",
						"thai": "...ผู้ที่คิดจะแสวงหาประโยชน์จากป่าหรือไง?",
						"hindi": "...वह जो जंगल का शोषण करना चाहता है?"
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "bracken",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "이 수정 조각들 말이야… 엄청난 에너지를 품고 있어.",
						"english": "These crystal shards... they hold immense energy.",
						"japanese": "「この水晶の破片…とてつもないエネルギーを秘めている。」",
						"chinese": "“这些水晶碎片……蕴含着巨大的能量。”",
						"french": "Ces éclats de cristal... ils recèlent une énergie immense.",
						"spanish": "Estos fragmentos de cristal... contienen una energía inmensa.",
						"vietnamese": "Những mảnh pha lê này... chứa đựng năng lượng khổng lồ.",
						"thai": "เศษคริสตัลพวกนี้... กักเก็บพลังมหาศาลไว้เลยนะ",
						"hindi": "ये क्रिस्टल के टुकड़े... इनमें असीमित ऊर्जा है।"
					},
					"speaker": "bracken",
					"emotion": "happy",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아주 비싸게 팔릴 걸.",
						"english": "They'll fetch a hefty price.",
						"japanese": "「高く売れるぞ。」",
						"chinese": "“能卖个好价钱。”",
						"french": "Ils se vendront très cher.",
						"spanish": "Se venderán muy caros.",
						"vietnamese": "Sẽ bán được giá lắm đấy.",
						"thai": "คงขายได้ราคาดีเลยล่ะ",
						"hindi": "ये बहुत महंगे बिकेंगे।"
					},
					"emotion": "happy",
					"speaker": "bracken"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "…숲이 아프다고 비명 지르는 것 같아.",
						"english": "...It feels like the forest is screaming in pain.",
						"japanese": "「…森が苦痛に叫んでいるようだ。」",
						"chinese": "“……感觉森林在痛苦地尖叫。”",
						"french": "...On dirait que la forêt hurle de douleur.",
						"spanish": "...Parece que el bosque grita de dolor.",
						"vietnamese": "...Cảm giác như khu rừng đang gào thét trong đau đớn.",
						"thai": "...รู้สึกเหมือนป่ากำลังกรีดร้องด้วยความเจ็บปวด",
						"hindi": "...लगता है जंगल दर्द में चिल्ला रहा है।"
					}
				},
				{
					"type": "speech",
					"speaker": "bracken",
					"emotion": "base",
					"content": {
						"korean": "비명? 훗, 그건 나에게 음악이나 다름없지.",
						"english": "Screams? Hmph, to me, that's just music.",
						"japanese": "「悲鳴？ ふん、私にとっては音楽も同然だ。」",
						"chinese": "“尖叫？哼，那对我来说简直是音乐。”",
						"french": "Des hurlements ? Hmm, pour moi, c'est de la musique.",
						"spanish": "¿Gritos? Hmph, para mí, eso es música.",
						"vietnamese": "Gào thét ư? Hừm, đối với ta đó chỉ là âm nhạc thôi.",
						"thai": "กรีดร้องเหรอ? หึ สำหรับฉันแล้วนั่นมันก็เหมือนเสียงดนตรีแหละ",
						"hindi": "चीखें? हूँह, मेरे लिए तो वह संगीत के समान है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "이런 걸 캐내는 게 죄책감 들지 않아?",
						"english": "Don't you feel guilty digging these up?",
						"japanese": "「こんなものを掘り出すことに罪悪感はないのか？」",
						"chinese": "“挖这种东西，你没有罪恶感吗？”",
						"french": "Tu ne te sens pas coupable de déterrer ça ?",
						"spanish": "¿No te sientes culpable de desenterrar esto?",
						"vietnamese": "Anh không cảm thấy tội lỗi khi khai thác những thứ này sao?",
						"thai": "ไม่รู้สึกผิดเลยเหรอที่ขุดพวกนี้ขึ้นมา?",
						"hindi": "इन्हें खोदते हुए तुम्हें अपराधबोध नहीं होता?"
					},
					"emotion": "sad",
					"speaker": "character_2"
				},
				{
					"type": "speech",
					"content": {
						"korean": "죄책감? 그게 뭔데?",
						"english": "Guilty? What's that?",
						"japanese": "「罪悪感？ それは何だ？」",
						"chinese": "“罪恶感？那是什么？”",
						"french": "Coupable ? Qu'est-ce que c'est ?",
						"spanish": "¿Culpable? ¿Qué es eso?",
						"vietnamese": "Tội lỗi ư? Đó là cái gì?",
						"thai": "รู้สึกผิดเหรอ? มันคืออะไรกัน?",
						"hindi": "अपराधबोध? वह क्या होता है?"
					},
					"speaker": "bracken",
					"emotion": "base"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"speaker": "bracken",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "봐, 내가 찾은 수정 조각이야. 영롱하지?",
						"english": "Look, this is a crystal shard I found. Isn't it radiant?",
						"japanese": "「見て、これ私が見つけた水晶の破片だよ。きらびやかでしょ？」",
						"chinese": "“看，这是我找到的水晶碎片。是不是很晶莹？”",
						"french": "Regarde, c'est un éclat de cristal que j'ai trouvé. N'est-ce pas radieux ?",
						"spanish": "Mira, este es un fragmento de cristal que encontré. ¿No es radiante?",
						"vietnamese": "Nhìn này, đây là mảnh pha lê tớ tìm thấy. Lấp lánh chưa?",
						"thai": "ดูสิ นี่คือเศษคริสตัลที่ฉันเจอ วิบวับเลยใช่ไหมล่ะ?",
						"hindi": "देखो, यह एक क्रिस्टल का टुकड़ा है जो मुझे मिला। यह कितना चमकदार है, है ना?"
					},
					"emotion": "happy",
					"speaker": "bracken"
				},
				{
					"type": "speech",
					"content": {
						"korean": "수정은 아름다웠지만, 숲의 슬픔을 담고 있는 듯했다.",
						"english": "The crystal was beautiful, but it seemed to hold the forest's sorrow.",
						"japanese": "「水晶は美しかったが、森の悲しみを宿しているかのようだった。」",
						"chinese": "“水晶很美，但它似乎承载着森林的悲伤。”",
						"french": "Le cristal était magnifique, mais il semblait contenir la tristesse de la forêt.",
						"spanish": "El cristal era hermoso, pero parecía contener la tristeza del bosque.",
						"vietnamese": "Mảnh pha lê thật đẹp, nhưng dường như nó chứa đựng nỗi buồn của khu rừng.",
						"thai": "คริสตัลนั้นงดงาม แต่ดูเหมือนจะกักเก็บความเศร้าโศกของป่าไว้",
						"hindi": "क्रिस्टल सुंदर था, लेकिन ऐसा लग रहा था मानो उसमें जंगल का दुख समाया हो।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "숲을 파괴하는 짓이야.",
						"english": "This is an act of destroying the forest.",
						"japanese": "「森を破壊する行為だ。」",
						"chinese": "“这是在破坏森林的行为。”",
						"french": "C'est un acte de destruction de la forêt.",
						"spanish": "Esto es un acto de destrucción del bosque.",
						"vietnamese": "Đây là hành động hủy hoại khu rừng.",
						"thai": "นี่มันคือการทำลายป่าชัดๆ",
						"hindi": "यह जंगल को नष्ट करने का कार्य है।"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "파괴? 아니, 활용하는 거지.",
						"english": "Destruction? No, utilization.",
						"japanese": "破壊？違う、活用するんだ。",
						"chinese": "破坏？不，是利用。",
						"french": "Destruction ? Non, on l'utilise.",
						"spanish": "¿Destrucción? No, aprovechamiento.",
						"vietnamese": "Phá hủy? Không, là tận dụng.",
						"thai": "ทำลาย? ไม่สิ, ใช้ประโยชน์ต่างหาก.",
						"hindi": "विनाश? नहीं, सदुपयोग।"
					},
					"speaker": "bracken",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "bracken",
					"content": {
						"korean": "누군가는 이 보물을 가져야 해.",
						"english": "Someone has to take this treasure.",
						"japanese": "誰かがこの宝を手に入れなければ。",
						"chinese": "总要有人拿到这件宝物。",
						"french": "Quelqu'un doit prendre ce trésor.",
						"spanish": "Alguien debe tener este tesoro.",
						"vietnamese": "Ai đó phải sở hữu kho báu này.",
						"thai": "ใครบางคนต้องได้สมบัติชิ้นนี้.",
						"hindi": "किसी को तो यह ख़ज़ाना मिलना चाहिए।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_3",
					"emotion": "sad",
					"content": {
						"korean": "…당신은 숲의 비극을 모르는군.",
						"english": "...You don't know the forest's tragedy.",
						"japanese": "…あなたは森の悲劇を知らない。",
						"chinese": "……你不知道森林的悲剧。",
						"french": "...Vous ne connaissez pas la tragédie de la forêt.",
						"spanish": "...No conoces la tragedia del bosque.",
						"vietnamese": "...Ngươi không biết bi kịch của rừng.",
						"thai": "...เจ้าไม่รู้ถึงโศกนาฏกรรมของป่าเลยสินะ.",
						"hindi": "...तुम जंगल की त्रासदी नहीं जानते।"
					}
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"speaker": "bracken",
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "happy",
					"speaker": "bracken",
					"content": {
						"korean": "이 주변에 아주 큰 수정 덩어리가 있다는군.",
						"english": "They say there's a huge crystal chunk around here.",
						"japanese": "この辺りに巨大な水晶の塊があるそうだ。",
						"chinese": "听说这附近有一块巨大的水晶。",
						"french": "On dit qu'il y a un énorme morceau de cristal par ici.",
						"spanish": "Dicen que hay un trozo de cristal enorme por aquí.",
						"vietnamese": "Nghe nói có một khối tinh thể khổng lồ quanh đây.",
						"thai": "ว่ากันว่ามีผลึกคริสตัลขนาดใหญ่แถวนี้.",
						"hindi": "कहते हैं, यहाँ आस-पास एक बहुत बड़ा क्रिस्टल है।"
					}
				},
				{
					"type": "speech",
					"speaker": "bracken",
					"emotion": "base",
					"content": {
						"korean": "아마… 숲의 수호자가 지키고 있을 거야.",
						"english": "Probably... the forest guardian is protecting it.",
						"japanese": "おそらく…森の守護者が守っているだろう。",
						"chinese": "也许……是森林的守护者在守护。",
						"french": "Probablement... le gardien de la forêt le protège.",
						"spanish": "Probablemente... el guardián del bosque lo está protegiendo.",
						"vietnamese": "Có lẽ... người bảo vệ rừng đang canh giữ.",
						"thai": "คงจะ... ผู้พิทักษ์ป่ากำลังปกป้องมันอยู่.",
						"hindi": "शायद... जंगल का संरक्षक इसकी रक्षा कर रहा होगा।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "수호자도 착취하려는 건가.",
						"english": "Are you trying to exploit the guardian too?",
						"japanese": "守護者も搾取しようというのか。",
						"chinese": "连守护者也要剥削吗？",
						"french": "Vous comptez exploiter le gardien aussi ?",
						"spanish": "¿También intentas explotar al guardián?",
						"vietnamese": "Ngươi định khai thác cả người bảo vệ sao?",
						"thai": "เจ้าคิดจะเอาเปรียบผู้พิทักษ์ด้วยหรือไง.",
						"hindi": "क्या संरक्षक का भी शोषण करना चाहते हो?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "방해되면 치워야지. 그게 내 일이야.",
						"english": "If it's in the way, I'll remove it. That's my job.",
						"japanese": "邪魔なら排除する。それが私の仕事だ。",
						"chinese": "如果碍事就清除掉。那是我的职责。",
						"french": "Si ça dérange, je l'enlèverai. C'est mon travail.",
						"spanish": "Si estorba, lo quitaré. Ese es mi trabajo.",
						"vietnamese": "Nếu cản đường thì phải dọn đi. Đó là việc của ta.",
						"thai": "ถ้าขวางทางก็ต้องกำจัดทิ้ง. นั่นคืองานของฉัน.",
						"hindi": "अगर रास्ते में आया, तो हटा दूँगा। यही मेरा काम है।"
					},
					"speaker": "bracken",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "…우리가 숲에 저지른 죄가 너무 많다.",
						"english": "...We have committed too many sins against the forest.",
						"japanese": "…我々が森に犯した罪はあまりにも多い。",
						"chinese": "……我们对森林犯下的罪孽太多了。",
						"french": "...Nous avons commis trop de péchés contre la forêt.",
						"spanish": "...Hemos cometido demasiados pecados contra el bosque.",
						"vietnamese": "...Chúng ta đã gây ra quá nhiều tội lỗi với rừng.",
						"thai": "...เราก่อกรรมทำเข็ญกับป่ามามากเกินไปแล้ว.",
						"hindi": "...हमने जंगल के खिलाफ बहुत पाप किए हैं।"
					},
					"type": "speech"
				},
				{
					"duration_ms": 400,
					"speaker": "bracken",
					"action": "exit",
					"direction": "down",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "브라켄은 사라졌다. 탐욕스러운 그림자를 남기고.",
						"english": "Bracken is gone, leaving behind a greedy shadow.",
						"japanese": "ブラッケンは消えた。貪欲な影を残して。",
						"chinese": "布拉肯消失了。只留下贪婪的影子。",
						"french": "Bracken a disparu, laissant derrière lui une ombre avide.",
						"spanish": "Bracken se ha ido, dejando una sombra codiciosa.",
						"vietnamese": "Bracken đã biến mất, để lại một cái bóng tham lam.",
						"thai": "แบรกเคนหายไปแล้ว, เหลือทิ้งไว้เพียงเงามืดแห่งความโลภ.",
						"hindi": "ब्रैकन चला गया, एक लालची छाया छोड़कर।"
					}
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "감히… 이 신성한 곳을 탐하는 자들인가.",
						"english": "How dare they... covet this sacred place?",
						"japanese": "よくも…この神聖な場所を狙うとは。",
						"chinese": "竟敢……觊觎这神圣之地。",
						"french": "Comment osent-ils... convoiter ce lieu sacré ?",
						"spanish": "¿Cómo se atreven... a codiciar este lugar sagrado?",
						"vietnamese": "Dám... ham muốn nơi thiêng liêng này sao.",
						"thai": "กล้าดีอย่างไร... มาโลภในสถานที่ศักดิ์สิทธิ์แห่งนี้.",
						"hindi": "हिम्मत कैसे हुई... इस पवित्र स्थान पर लालच करने की।"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "우리가 멈출 거야. 더 이상 숲을 파괴하게 두지 않아.",
						"english": "We'll stop you. No more destroying the forest.",
						"japanese": "我々が止める。これ以上森を破壊させない。",
						"chinese": "我们会阻止你。不会再让你破坏森林了。",
						"french": "Nous t'arrêterons. Plus de destruction de la forêt.",
						"spanish": "Te detendremos. No más destrucción del bosque.",
						"vietnamese": "Chúng ta sẽ ngăn chặn. Không để rừng bị phá hủy nữa.",
						"thai": "เราจะหยุดมันเอง จะไม่ยอมให้ทำลายป่าอีกต่อไป",
						"hindi": "हम तुम्हें रोकेंगे। अब और जंगल को नष्ट नहीं करने देंगे।"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "어리석군… 이 고통은 영원히 반복될 것이다.",
						"english": "Foolish… This suffering will repeat forever.",
						"japanese": "愚かだな… この苦痛は永遠に繰り返されるだろう。",
						"chinese": "愚蠢… 这痛苦将永远重复。",
						"french": "Insensé… Cette souffrance se répétera éternellement.",
						"spanish": "Necios… Este sufrimiento se repetirá por siempre.",
						"vietnamese": "Ngốc nghếch… Nỗi đau này sẽ lặp lại vĩnh viễn.",
						"thai": "โง่เขลา… ความเจ็บปวดนี้จะคงอยู่ตลอดไป",
						"hindi": "मूर्ख… यह पीड़ा अनंत काल तक दोहराई जाएगी।"
					},
					"emotion": "sad",
					"speaker": "random_boss"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "하하하… 너희의 탐욕은 끝이 없군.",
						"english": "Hahaha… Your greed knows no end.",
						"japanese": "ハハハ… お前たちの貪欲は終わりがないな。",
						"chinese": "哈哈哈… 你们的贪婪永无止境。",
						"french": "Hahaha… Votre cupidité n'a pas de fin.",
						"spanish": "Jajajaja… Vuestra codicia no tiene fin.",
						"vietnamese": "Hahaha… Lòng tham của các ngươi là vô đáy.",
						"thai": "ฮ่าๆๆ… ความโลภของพวกเจ้าไม่มีที่สิ้นสุด",
						"hindi": "हाहाहा… तुम्हारी लालच का कोई अंत नहीं।"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "…아직 끝나지 않았어. 숲의 비극을 막아야 해.",
						"english": "…It's not over yet. We must stop the forest's tragedy.",
						"japanese": "…まだ終わってない。森の悲劇を止めなければ。",
						"chinese": "…还没结束。我们必须阻止森林的悲剧。",
						"french": "…Ce n'est pas encore fini. Nous devons arrêter la tragédie de la forêt.",
						"spanish": "…Aún no ha terminado. Debemos detener la tragedia del bosque.",
						"vietnamese": "…Chưa kết thúc đâu. Phải ngăn chặn bi kịch của khu rừng.",
						"thai": "…ยังไม่จบ เราต้องหยุดโศกนาฏกรรมของป่า",
						"hindi": "…अभी खत्म नहीं हुआ है। हमें जंगल की त्रासदी को रोकना होगा।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "이 고통은… 너희의 운명이다.",
						"english": "This suffering… is your destiny.",
						"japanese": "この苦痛は… お前たちの運命だ。",
						"chinese": "这痛苦… 是你们的命运。",
						"french": "Cette souffrance… est votre destin.",
						"spanish": "Este sufrimiento… es vuestro destino.",
						"vietnamese": "Nỗi đau này… là vận mệnh của các ngươi.",
						"thai": "ความเจ็บปวดนี้… คือชะตากรรมของพวกเจ้า",
						"hindi": "यह पीड़ा… तुम्हारा भाग्य है।"
					}
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "크윽… 수정의 힘이… 흐릿해지는군….",
						"english": "Ugh… The crystal's power… is fading…",
						"japanese": "くっ… 水晶の力が… 霞んでいく…",
						"chinese": "呃… 水晶的力量… 正在模糊…",
						"french": "Ugh… Le pouvoir du cristal… s'estompe…",
						"spanish": "Ugh… El poder del cristal… se desvanece…",
						"vietnamese": "Ư… Sức mạnh của pha lê… đang mờ dần…",
						"thai": "อึก… พลังของคริสตัล… กำลังเลือนลาง…",
						"hindi": "उफ़… क्रिस्टल की शक्ति… धुंधली पड़ रही है…"
					},
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "숲의 고통이… 조금은 줄어들었을까.",
						"english": "Has the forest's suffering… lessened a little?",
						"japanese": "森の苦痛が… 少しは和らいだのだろうか。",
						"chinese": "森林的痛苦… 是否减轻了一些？",
						"french": "La souffrance de la forêt… aurait-elle un peu diminué ?",
						"spanish": "El sufrimiento del bosque… ¿habrá disminuido un poco?",
						"vietnamese": "Nỗi đau của rừng… đã vơi đi chút nào chưa?",
						"thai": "ความเจ็บปวดของป่า… ลดลงบ้างไหมนะ",
						"hindi": "जंगल का दर्द… क्या थोड़ा कम हुआ होगा?"
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "수정의 심장이 잠시 침묵했다. 그러나 숲은 아직 더 깊은 비밀을 감추고 있었다.",
						"english": "The crystal heart fell silent for a moment. But the forest still hid deeper secrets.",
						"japanese": "水晶の心臓は一時的に沈黙した。しかし、森はまだ深い秘密を隠していた。",
						"chinese": "水晶之心暂时沉默了。然而，森林仍藏着更深的秘密。",
						"french": "Le cœur du cristal se tut un instant. Mais la forêt cachait encore de plus profonds secrets.",
						"spanish": "El corazón de cristal se silenció un momento. Pero el bosque aún ocultaba secretos más profundos.",
						"vietnamese": "Trái tim pha lê im lặng trong chốc lát. Nhưng khu rừng vẫn ẩn chứa những bí mật sâu kín hơn.",
						"thai": "หัวใจของคริสตัลเงียบลงชั่วขณะ แต่ป่ายังคงซ่อนความลับที่ลึกซึ้งกว่านั้น",
						"hindi": "क्रिस्टल का हृदय कुछ देर के लिए शांत हो गया। पर जंगल में अभी भी गहरे राज़ छिपे थे।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "잊혀진 요람의 노래가 들려오는 듯했다.",
						"english": "It felt as if a forgotten lullaby was echoing.",
						"japanese": "忘れられた揺り籠の歌が聞こえてくるようだった。",
						"chinese": "仿佛听到了被遗忘的摇篮曲。",
						"french": "On aurait dit qu'une berceuse oubliée résonnait.",
						"spanish": "Parecía escucharse la canción de una cuna olvidada.",
						"vietnamese": "Dường như nghe thấy tiếng hát ru đã bị lãng quên.",
						"thai": "ราวกับได้ยินเพลงกล่อมเด็กที่ถูกลืม",
						"hindi": "ऐसा लगा जैसे एक भूली हुई लोरी गूँज रही थी।"
					},
					"speaker": "narrator",
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"숲은 점점 더 깊고 낯설어졌다.",
			"곳곳에 기이한 수정들이 박혀 섬뜩하게 빛났다.",
			"아름답지만, 어딘가 비극적인 울림이 느껴졌다.",
			"그리고 그 빛을 탐하는 자들이 있었다."
		],
		"english": [
			"The forest grew deeper and more unfamiliar.",
			"Strange crystals were embedded everywhere, glowing eerily.",
			"Beautiful, yet it carried a tragic undertone.",
			"And there were those who coveted that light."
		],
		"japanese": [
			"森はますます深く、見慣れないものになっていった。",
			"至る所に奇妙な水晶が埋め込まれ、不気味に輝いていた。",
			"美しいが、どこか悲劇的な響きが感じられた。",
			"そして、その光を貪る者たちがいた。"
		],
		"chinese": [
			"森林越来越深，也越来越陌生。",
			"奇异的水晶散布各处，发出令人毛骨悚然的光芒。",
			"虽美，却隐约带着一丝悲剧的共鸣。",
			"贪婪那光芒之人，亦随之而来。"
		],
		"french": [
			"La forêt devenait de plus en plus profonde et étrange.",
			"Des cristaux étranges étaient incrustés partout, brillant d'une lumière sinistre.",
			"Magnifique, mais une résonance tragique s'en dégageait.",
			"Et il y avait ceux qui convoitaient cette lumière."
		],
		"spanish": [
			"El bosque se hacía cada vez más profundo y desconocido.",
			"Extraños cristales incrustados por todas partes brillaban de forma espeluznante.",
			"Hermoso, pero se percibía un eco trágico.",
			"Y había quienes codiciaban esa luz."
		],
		"vietnamese": [
			"Rừng ngày càng sâu thẳm và xa lạ.",
			"Khắp nơi có những tinh thể kỳ lạ nhấp nháy một cách ghê rợn.",
			"Đẹp đẽ, nhưng đâu đó phảng phất một nỗi bi tráng.",
			"Và có những kẻ thèm khát thứ ánh sáng đó."
		],
		"thai": [
			"ป่ายิ่งลึกและแปลกตาขึ้นเรื่อยๆ",
			"คริสตัลประหลาดฝังอยู่ทั่วทุกที่ ส่องแสงน่าขนลุก",
			"สวยงาม แต่ก็รู้สึกถึงเสียงสะท้อนอันน่าเศร้า",
			"และมีผู้ที่โลภแสงนั้น"
		],
		"hindi": [
			"जंगल गहरा और अपरिचित होता गया।",
			"हर जगह अजीब क्रिस्टल जड़े हुए थे, जो डरावनी रोशनी दे रहे थे।",
			"सुंदर, फिर भी कहीं न कहीं एक दुखद प्रतिध्वनि महसूस हुई।",
			"और ऐसे लोग थे जो उस प्रकाश के लालची थे।"
		]
	}
} as const;
