export const scenario_modern_discordia_54_01 = {
	"scenario_id": "modern_discordia_54_01",
	"order": 1,
	"act": "intro",
	"theme": "modern",
	"actors": {
		"Echo": {
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
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "도시 전체에 원인 모를 데이터 오류가 발생했다.",
						"english": "An unknown data error has occurred throughout the city.",
						"japanese": "街全体で、原因不明のデータエラーが発生した。",
						"chinese": "整个城市都发生了不明数据错误。",
						"french": "Une erreur de données inconnue est survenue dans toute la ville.",
						"spanish": "Un error de datos desconocido ha ocurrido en toda la ciudad.",
						"vietnamese": "Một lỗi dữ liệu không rõ nguyên nhân đã xảy ra trên khắp thành phố.",
						"thai": "เกิดข้อผิดพลาดของข้อมูลที่ไม่ทราบสาเหตุทั่วทั้งเมือง",
						"hindi": "पूरे शहर में अज्ञात डेटा त्रुटि हुई है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이게 대체 무슨 일이야? 다들 뭔가에 홀린 것 같아.",
						"english": "What on earth is happening? Everyone seems possessed.",
						"japanese": "一体何が起こっているんだ？みんな何かに取り憑かれているみたいだ。",
						"chinese": "这到底是怎么回事？大家好像都被迷惑了。",
						"french": "Qu'est-ce qui se passe ? Tout le monde semble possédé.",
						"spanish": "¿Qué demonios está pasando? Todos parecen poseídos.",
						"vietnamese": "Chuyện quái gì đang xảy ra vậy? Mọi người dường như bị mê hoặc.",
						"thai": "เกิดอะไรขึ้นกันแน่? ทุกคนดูเหมือนถูกครอบงำ",
						"hindi": "ये सब क्या हो रहा है? सब लोग किसी चीज़ से ग्रसित लग रहे हैं।"
					},
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"speaker": "Echo",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…기다리고 있었다. 이 현상을 쫓는 건 너뿐이야.",
						"english": "...I've been waiting. You're the only one pursuing this phenomenon.",
						"japanese": "…待っていた。この現象を追っているのは君だけだ。",
						"chinese": "…我一直在等你。只有你在追查这个现象。",
						"french": "...Je t'attendais. Tu es le seul à poursuivre ce phénomène.",
						"spanish": "...He estado esperando. Eres el único que persigue este fenómeno.",
						"vietnamese": "…Ta đã chờ. Ngươi là người duy nhất theo đuổi hiện tượng này.",
						"thai": "…ฉันรออยู่ เธอเป็นคนเดียวที่กำลังตามล่าปรากฏการณ์นี้",
						"hindi": "...मैं इंतज़ार कर रहा था। इस घटना का पीछा करने वाले तुम अकेले हो।"
					},
					"speaker": "Echo"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "당신은…?",
						"english": "You are...?",
						"japanese": "あなたは…？",
						"chinese": "您是…？",
						"french": "Vous êtes… ?",
						"spanish": "¿Usted es…?",
						"vietnamese": "Ngươi là…?",
						"thai": "คุณคือ…?",
						"hindi": "आप कौन हैं…?"
					},
					"emotion": "base"
				},
				{
					"speaker": "Echo",
					"type": "speech",
					"content": {
						"korean": "정보상 Echo. 네가 찾는 걸 내가 알고 있지.",
						"english": "I'm Echo, an informant. I know what you're looking for.",
						"japanese": "情報屋のEchoだ。君が探しているものを、私は知っている。",
						"chinese": "我是情报贩子Echo。我知道你在找什么。",
						"french": "Je suis Echo, une informatrice. Je sais ce que tu cherches.",
						"spanish": "Soy Echo, una informante. Sé lo que buscas.",
						"vietnamese": "Tôi là Echo, một người cung cấp thông tin. Ta biết thứ ngươi đang tìm.",
						"thai": "ฉันคือเอคโค่ สายข่าว ฉันรู้ว่าเธอกำลังมองหาอะไร",
						"hindi": "मैं सूचना देने वाला एको हूँ। तुम जो ढूंढ रहे हो, वो मैं जानता हूँ।"
					},
					"emotion": "base"
				},
				{
					"speaker": "Echo",
					"type": "speech",
					"content": {
						"korean": "도시 뒷골목, 폐기된 전광판 조각으로 작품을 만드는 예술가. Discordia.",
						"english": "An artist in the city's back alleys, crafting art from discarded billboard fragments. Discordia.",
						"japanese": "街の裏路地で、廃棄された電光掲示板の破片で作品を作る芸術家。Discordiaだ。",
						"chinese": "城市后巷，一位用废弃广告牌碎片创作的艺术家。Discordia。",
						"french": "Un artiste dans les ruelles sombres de la ville, créant des œuvres à partir de fragments de panneaux d'affichage abandonnés. Discordia.",
						"spanish": "Un artista en los callejones traseros de la ciudad, creando arte con fragmentos de vallas publicitarias desechadas. Discordia.",
						"vietnamese": "Một nghệ sĩ ở những con hẻm sau thành phố, tạo ra tác phẩm từ những mảnh bảng quảng cáo bị vứt bỏ. Discordia.",
						"thai": "ศิลปินในตรอกซอกซอยของเมือง สร้างสรรค์ผลงานศิลปะจากเศษป้ายโฆษณาที่ถูกทิ้ง ดิสคอร์เดีย",
						"hindi": "शहर की पिछली गलियों में एक कलाकार, जो फेंके गए बिलबोर्ड के टुकड़ों से कला बनाता है। डिस्कॉर्डीया।"
					},
					"emotion": "base"
				},
				{
					"speaker": "Echo",
					"type": "speech",
					"content": {
						"korean": "그의 작품에서 모든 것이 시작돼.",
						"english": "It all begins with his work.",
						"japanese": "彼の作品からすべてが始まる。",
						"chinese": "一切都从他的作品开始。",
						"french": "Tout commence avec son œuvre.",
						"spanish": "Todo comienza con su obra.",
						"vietnamese": "Mọi thứ bắt đầu từ tác phẩm của anh ấy.",
						"thai": "ทุกสิ่งเริ่มต้นจากผลงานของเขา",
						"hindi": "सब कुछ उसके काम से शुरू होता है।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						2
					],
					"speaker": "Echo",
					"action": "enter"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "Discordia의 작품이 특정 지역에서 더 강력하게 나타나고 있어.",
						"english": "Discordia's work manifests more strongly in certain areas.",
						"japanese": "Discordiaの作品が特定の地域でより強く現れている。",
						"chinese": "Discordia 的作品在特定区域表现得更为强烈。",
						"french": "L'œuvre de Discordia se manifeste plus fortement dans certaines zones.",
						"spanish": "La obra de Discordia se manifiesta con más fuerza en ciertas áreas.",
						"vietnamese": "Tác phẩm của Discordia xuất hiện mạnh mẽ hơn ở một số khu vực nhất định.",
						"thai": "ผลงานของ Discordia ปรากฏขึ้นอย่างรุนแรงยิ่งขึ้นในบางพื้นที่",
						"hindi": "Discordia का कार्य कुछ क्षेत्रों में अधिक सशक्त रूप से प्रकट हो रहा है।"
					},
					"speaker": "Echo"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "무슨 의미야?",
						"english": "What does that mean?",
						"japanese": "どういう意味だ？",
						"chinese": "这是什么意思？",
						"french": "Qu'est-ce que ça veut dire ?",
						"spanish": "¿Qué significa eso?",
						"vietnamese": "Điều đó có nghĩa là gì?",
						"thai": "หมายความว่าอะไร?",
						"hindi": "इसका क्या मतलब है?"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "단순한 오류가 아니야. 과거의 데이터 주파수가 간섭하고 있어.",
						"english": "It's not just a glitch. Past data frequencies are interfering.",
						"japanese": "単なるエラーじゃない。過去のデータ周波数が干渉しているんだ。",
						"chinese": "这不只是个故障。过去的数据库频率正在干扰。",
						"french": "Ce n'est pas une simple erreur. Des fréquences de données passées interfèrent.",
						"spanish": "No es solo un fallo. Frecuencias de datos pasadas están interfiriendo.",
						"vietnamese": "Không chỉ là một lỗi. Tần số dữ liệu quá khứ đang gây nhiễu.",
						"thai": "ไม่ใช่แค่ความผิดพลาดธรรมดา ความถี่ข้อมูลในอดีตกำลังรบกวน",
						"hindi": "यह सिर्फ एक गड़बड़ी नहीं है। अतीत की डेटा आवृत्तियां हस्तक्षेप कर रही हैं।"
					},
					"emotion": "base",
					"speaker": "Echo"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "잊힌 진실이… 지하 깊은 곳에 숨어 있을지도.",
						"english": "A forgotten truth... might be hidden deep underground.",
						"japanese": "忘れ去られた真実が…地下深くで隠されているのかもしれない。",
						"chinese": "被遗忘的真相……可能藏在地下深处。",
						"french": "Une vérité oubliée... pourrait être cachée au plus profond du sous-sol.",
						"spanish": "Una verdad olvidada... podría estar oculta en lo más profundo del subsuelo.",
						"vietnamese": "Một sự thật bị lãng quên... có thể ẩn sâu dưới lòng đất.",
						"thai": "ความจริงที่ถูกลืมเลือน… อาจซ่อนอยู่ลึกใต้ดิน",
						"hindi": "एक भूला हुआ सत्य... शायद जमीन के गहरे नीचे छिपा हो।"
					},
					"speaker": "Echo"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					],
					"speaker": "Echo",
					"action": "enter"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "작품 속에서… 일그러진 얼굴들이 보여. 그리고 희미한 울음소리도.",
						"english": "Within the work... I see distorted faces. And faint cries.",
						"japanese": "作品の中で…歪んだ顔が見える。そして、かすかな泣き声も。",
						"chinese": "作品中……我看到了扭曲的面孔。还有微弱的哭声。",
						"french": "Dans l'œuvre... je vois des visages déformés. Et de faibles pleurs.",
						"spanish": "Dentro de la obra... veo caras distorsionadas. Y débiles llantos.",
						"vietnamese": "Trong tác phẩm... tôi thấy những khuôn mặt méo mó. Và cả những tiếng khóc yếu ớt.",
						"thai": "ในผลงาน… ฉันเห็นใบหน้าที่บิดเบี้ยว และเสียงร้องไห้แผ่วเบา",
						"hindi": "कार्य के भीतर... मुझे विकृत चेहरे दिखते हैं। और हल्की रोने की आवाज भी।"
					}
				},
				{
					"speaker": "Echo",
					"type": "speech",
					"content": {
						"korean": "어린아이의 울음소리라… 맞아. 그런 소문이 돌고 있지.",
						"english": "A child's cry... Yes, those rumors are circulating.",
						"japanese": "子供の泣き声か…そうだね。そんな噂が流れている。",
						"chinese": "是小孩子的哭声啊……没错。确实有这样的传闻。",
						"french": "Le cri d'un enfant... Oui, ces rumeurs circulent.",
						"spanish": "El llanto de un niño... Sí, esos rumores están circulando.",
						"vietnamese": "Tiếng khóc của trẻ con à... Đúng vậy. Có những tin đồn như thế.",
						"thai": "เสียงร้องไห้ของเด็ก… ใช่ มีข่าวลือเช่นนั้นแพร่สะพัดอยู่",
						"hindi": "एक बच्चे का रोना... हाँ, ऐसी अफवाहें चल रही हैं।"
					},
					"emotion": "base"
				},
				{
					"speaker": "Echo",
					"type": "speech",
					"content": {
						"korean": "오래된 연구 보고서 조각을 발견했어. 거기서… 뭔가 단서를 찾을 수 있을지도 몰라.",
						"english": "I found fragments of an old research report. We might find a clue there...",
						"japanese": "古い研究報告書の断片を見つけた。そこから…何か手がかりが見つかるかもしれない。",
						"chinese": "我发现了一份旧研究报告的碎片。也许能从那里找到一些线索。",
						"french": "J'ai trouvé des fragments d'un ancien rapport de recherche. On pourrait y trouver un indice...",
						"spanish": "Encontré fragmentos de un antiguo informe de investigación. Podríamos encontrar una pista allí...",
						"vietnamese": "Tôi tìm thấy những mảnh báo cáo nghiên cứu cũ. Có lẽ... chúng ta có thể tìm thấy manh mối ở đó.",
						"thai": "ฉันพบเศษรายงานการวิจัยเก่า เราอาจจะพบเบาะแสจากที่นั่น...",
						"hindi": "मुझे एक पुरानी शोध रिपोर्ट के टुकड़े मिले हैं। शायद वहाँ कुछ सुराग मिल जाए..."
					},
					"emotion": "base"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "Echo",
					"spot": [
						4,
						2
					]
				},
				{
					"speaker": "Echo",
					"type": "speech",
					"content": {
						"korean": "Discordia의 흔적은 이제 도시의 가장 깊은 곳으로 이어져.",
						"english": "Discordia's traces now lead to the deepest parts of the city.",
						"japanese": "Discordiaの痕跡は、今や都市の最も深い場所へと続いている。",
						"chinese": "Discordia 的踪迹现在通往城市最深处。",
						"french": "Les traces de Discordia mènent maintenant aux parties les plus profondes de la ville.",
						"spanish": "Las huellas de Discordia ahora conducen a las partes más profundas de la ciudad.",
						"vietnamese": "Dấu vết của Discordia giờ đây dẫn đến những nơi sâu nhất của thành phố.",
						"thai": "ร่องรอยของ Discordia บัดนี้นำไปสู่ส่วนที่ลึกที่สุดของเมือง",
						"hindi": "Discordia के निशान अब शहर के सबसे गहरे हिस्सों तक जाते हैं।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "돌아갈 수 없어. 진실을 봐야 해.",
						"english": "There's no turning back. We have to face the truth.",
						"japanese": "もう後戻りはできない。真実と向き合う必要がある。",
						"chinese": "无法回头了。必须面对真相。",
						"french": "Impossible de faire demi-tour. Il faut affronter la vérité.",
						"spanish": "No hay vuelta atrás. Debemos enfrentar la verdad.",
						"vietnamese": "Không thể quay lại. Phải đối mặt với sự thật.",
						"thai": "ย้อนกลับไม่ได้แล้ว เราต้องเผชิญหน้ากับความจริง",
						"hindi": "पीछे नहीं हट सकते। हमें सच्चाई का सामना करना होगा।"
					}
				},
				{
					"speaker": "Echo",
					"type": "speech",
					"content": {
						"korean": "그래. 하지만 명심해. 잊힌 진실은… 때로는 되살아나는 악몽과 같아.",
						"english": "Yes. But remember: forgotten truths… are sometimes like nightmares that resurface.",
						"japanese": "ああ、だが覚えておけ。忘れられた真実は…時として蘇る悪夢のようだ。",
						"chinese": "是的。但请记住：被遗忘的真相……有时就像复苏的噩梦。",
						"french": "Oui. Mais souviens-toi : les vérités oubliées… sont parfois comme des cauchemars qui ressurgissent.",
						"spanish": "Sí. Pero recuerda: las verdades olvidadas… a veces son como pesadillas que resurgen.",
						"vietnamese": "Đúng vậy. Nhưng hãy nhớ: những sự thật bị lãng quên… đôi khi giống như những cơn ác mộng tái sinh.",
						"thai": "ใช่ แต่จำไว้ว่า ความจริงที่ถูกลืมเลือน... บางครั้งก็เหมือนฝันร้ายที่กลับมาหลอกหลอน",
						"hindi": "हाँ। लेकिन याद रखना: भूले हुए सच… कभी-कभी फिर से जागने वाले दुःस्वप्न जैसे होते हैं।"
					},
					"emotion": "sad"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "도시 깊은 곳, 데이터의 격류가 휘몰아치는 공간에 당도했다.",
						"english": "Deep within the city, I've arrived at a place where data rages like a torrent.",
						"japanese": "都市の奥深く、データの激流が渦巻く空間にたどり着いた。",
						"chinese": "我已抵达城市深处，一个数据洪流汹涌的空间。",
						"french": "Au plus profond de la ville, j'ai atteint un lieu où le flot de données fait rage.",
						"spanish": "En lo profundo de la ciudad, he llegado a un lugar donde el torrente de datos se arremolina.",
						"vietnamese": "Sâu thẳm trong thành phố, tôi đã đến một nơi mà dòng dữ liệu cuộn trào.",
						"thai": "ลึกเข้าไปในเมือง ข้าได้มาถึงที่ซึ่งกระแสข้อมูลปั่นป่วน",
						"hindi": "शहर के गहरे में, मैं डेटा के प्रचंड प्रवाह वाले स्थान पर पहुँच गया हूँ।"
					},
					"emotion": "base"
				},
				{
					"action": "enter",
					"spot": [
						5,
						5
					],
					"speaker": "random_boss",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "감히… 이 영역을 침범하다니.",
						"english": "How dare you… trespass into this domain.",
						"japanese": "よくも…この領域を侵犯したな。",
						"chinese": "竟敢……入侵此领域。",
						"french": "Comment oses-tu… envahir ce domaine.",
						"spanish": "Cómo te atreves… a invadir este dominio.",
						"vietnamese": "Ngươi dám… xâm phạm lãnh địa này.",
						"thai": "บังอาจ… บุกรุกเข้ามาในอาณาเขตนี้ได้อย่างไร",
						"hindi": "तुम्हारी हिम्मत कैसे हुई… इस क्षेत्र में अतिक्रमण करने की।"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "네가… Discordia의 수하인가?",
						"english": "Are you… Discordia's minion?",
						"japanese": "貴様が…Discordiaの手先か？",
						"chinese": "你就是……Discordia的爪牙吗？",
						"french": "Es-tu… le subordonné de Discordia ?",
						"spanish": "¿Eres… un esbirro de Discordia?",
						"vietnamese": "Ngươi… là tay sai của Discordia sao?",
						"thai": "เจ้าคือ… ลูกสมุนของ Discordia หรือไม่?",
						"hindi": "क्या तुम… Discordia के अनुयायी हो?"
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "내 이름은 {random_boss}. 거슬리는 존재들은… 모두 제거해야 한다.",
						"english": "My name is {random_boss}. All who displease me… must be eliminated.",
						"japanese": "私の名は{random_boss}。不快な存在は…全て排除せねばならない。",
						"chinese": "我的名字是{random_boss}。所有碍眼的存在……都必须被清除。",
						"french": "Mon nom est {random_boss}. Tous ceux qui me dérangent… doivent être éliminés.",
						"spanish": "Mi nombre es {random_boss}. Todos los que me molestan… deben ser eliminados.",
						"vietnamese": "Tên ta là {random_boss}. Tất cả những kẻ đáng ghét… phải bị loại bỏ.",
						"thai": "ข้ามีนามว่า {random_boss} ผู้ที่ขัดขวาง… จะต้องถูกกำจัดทั้งหมด",
						"hindi": "मेरा नाम {random_boss} है। सभी अप्रिय अस्तित्वों को… समाप्त करना होगा।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "진실을 밝히겠어!",
						"english": "I will reveal the truth!",
						"japanese": "真実を暴く！",
						"chinese": "我将揭示真相！",
						"french": "Je vais révéler la vérité !",
						"spanish": "¡Revelaré la verdad!",
						"vietnamese": "Tôi sẽ tiết lộ sự thật!",
						"thai": "ข้าจะเปิดเผยความจริง!",
						"hindi": "मैं सच्चाई उजागर करूँगा!"
					},
					"speaker": "character_any"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "{random_boss}가 쓰러지자, 데이터의 폭풍이 잠시 잦아들었다.",
						"english": "As {random_boss} fell, the storm of data briefly subsided.",
						"japanese": "{random_boss}が倒れると、データの嵐は一時的に静まった。",
						"chinese": "{random_boss}倒下后，数据的风暴暂时平息了。",
						"french": "Alors que {random_boss} tombait, la tempête de données s'est calmée un instant.",
						"spanish": "Cuando {random_boss} cayó, la tormenta de datos amainó brevemente.",
						"vietnamese": "Khi {random_boss} ngã xuống, cơn bão dữ liệu tạm thời lắng xuống.",
						"thai": "เมื่อ {random_boss} ล้มลง พายุข้อมูลก็สงบลงชั่วขณะ",
						"hindi": "{random_boss} के गिरने पर, डेटा का तूफ़ान कुछ समय के लिए थम गया।"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "크큭… 겨우… 이 정도인가. 진짜는… 이제부터 시작될 거야.",
						"english": "Heh… Is that… all you've got? The real challenge… begins now.",
						"japanese": "クク…たかだか…この程度か。本番は…これから始まるのだ。",
						"chinese": "呵呵……就……这样吗？真正的……现在才开始。",
						"french": "Hé hé… C'est tout… ce que tu as ? Le vrai défi… ne fait que commencer.",
						"spanish": "Jeje… ¿Es… todo lo que tienes? Lo real… está a punto de comenzar.",
						"vietnamese": "Hừm… Chỉ… đến mức này thôi sao? Cái thật sự… sẽ bắt đầu từ bây giờ.",
						"thai": "หึๆ… แค่… แค่นี้เองหรือ ของจริง… จะเริ่มจากนี้ไปต่างหาก",
						"hindi": "हेंहें… बस… इतना ही? असली… अब शुरू होगा।"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "진짜? 그럼 Discordia는… 더 깊이 숨어있다는 거야?",
						"english": "Really? So Discordia… is hidden even deeper?",
						"japanese": "本当か？じゃあDiscordiaは…もっと奥深くに潜んでいるのか？",
						"chinese": "真的吗？那么Discordia……藏得更深？",
						"french": "Vraiment ? Alors Discordia… est cachée encore plus profondément ?",
						"spanish": "¿De verdad? Entonces Discordia… ¿está escondida aún más profundamente?",
						"vietnamese": "Thật sao? Vậy Discordia… ẩn sâu hơn nữa à?",
						"thai": "จริงหรือ? ถ้าอย่างนั้น Discordia… ซ่อนตัวอยู่ลึกกว่านี้หรือ?",
						"hindi": "सच में? तो Discordia… और भी गहराई में छिपा है?"
					},
					"speaker": "character_any"
				},
				{
					"spot": [
						4,
						3
					],
					"speaker": "Echo",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "저건 시작에 불과했어. Discordia의 그림자는… 더 깊은 곳에 잠들어 있어.",
						"english": "That was just the beginning. Discordia's shadow… slumbers in deeper realms.",
						"japanese": "あれは始まりに過ぎなかった。Discordiaの影は…もっと深い場所に眠っている。",
						"chinese": "那只是个开始。Discordia的阴影……沉睡在更深的地方。",
						"french": "Ce n'était que le début. L'ombre de Discordia… sommeille dans des profondeurs encore plus grandes.",
						"spanish": "Eso fue solo el principio. La sombra de Discordia… duerme en lugares más profundos.",
						"vietnamese": "Đó chỉ là khởi đầu thôi. Bóng tối của Discordia… vẫn còn ngủ sâu hơn nữa.",
						"thai": "นั่นเป็นเพียงจุดเริ่มต้นเท่านั้น เงาของ Discordia… หลับใหลอยู่ในที่ลึกกว่านั้น",
						"hindi": "वह तो बस शुरुआत थी। Discordia की परछाई… और गहरे में सो रही है।"
					},
					"speaker": "Echo"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "도시는 잠시 평온을 찾았지만, 더 큰 미스터리가 주인공을 기다리고 있었다.",
						"english": "The city found peace for a moment, but a greater mystery awaited the protagonist.",
						"japanese": "街は一時的な平穏を取り戻したが、より大きな謎が主人公を待ち受けていた。",
						"chinese": "城市暂时恢复了平静，但更大的谜团正等待着主角。",
						"french": "La ville a retrouvé un instant de paix, mais un mystère plus grand attendait le protagoniste.",
						"spanish": "La ciudad encontró paz por un momento, pero un misterio mayor esperaba al protagonista.",
						"vietnamese": "Thành phố tìm thấy bình yên trong chốc lát, nhưng một bí ẩn lớn hơn đang chờ đợi nhân vật chính.",
						"thai": "เมืองสงบสุขชั่วขณะ แต่ความลึกลับที่ยิ่งใหญ่กว่ากำลังรอคอยตัวเอกอยู่",
						"hindi": "शहर को एक पल के लिए शांति मिली, लेकिन एक बड़ा रहस्य नायक का इंतजार कर रहा था।"
					},
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "{random_boss}의 공격에, 모든 것이 흐려졌다.",
						"english": "Under {random_boss}'s attack, everything blurred.",
						"japanese": "{random_boss}の攻撃で、すべてが霞んだ。",
						"chinese": "在{random_boss}的攻击下，一切都变得模糊了。",
						"french": "Sous l'attaque de {random_boss}, tout s'est brouillé.",
						"spanish": "Bajo el ataque de {random_boss}, todo se volvió borroso.",
						"vietnamese": "Dưới đòn tấn công của {random_boss}, mọi thứ đều mờ đi.",
						"thai": "ภายใต้การโจมตีของ {random_boss}, ทุกสิ่งก็พร่ามัวไปหมด",
						"hindi": "{random_boss} के हमले से, सब कुछ धुंधला हो गया।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "네 의지는… 아무것도 바꿀 수 없어. 여기서 끝이다.",
						"english": "Your will... can change nothing. This is the end.",
						"japanese": "君の意志は…何も変えられない。ここで終わりだ。",
						"chinese": "你的意志…什么也改变不了。到此为止了。",
						"french": "Ta volonté... ne peut rien changer. C'est la fin.",
						"spanish": "Tu voluntad... no puede cambiar nada. Este es el fin.",
						"vietnamese": "Ý chí của ngươi... không thể thay đổi bất cứ điều gì. Kết thúc rồi.",
						"thai": "เจตจำนงของเจ้า... เปลี่ยนอะไรไม่ได้ นี่คือจุดจบ",
						"hindi": "तुम्हारी इच्छाशक्ति… कुछ भी नहीं बदल सकती। यह अंत है।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "…아직, 끝나지 않았어.",
						"english": "...It's not over yet.",
						"japanese": "…まだ、終わっていない。",
						"chinese": "……还没，结束。",
						"french": "...Ce n'est pas encore fini.",
						"spanish": "...Aún no ha terminado.",
						"vietnamese": "...Vẫn chưa kết thúc.",
						"thai": "...ยังไม่จบ",
						"hindi": "...अभी, खत्म नहीं हुआ है।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"도시 곳곳, 데이터가 비명을 지른다.",
			"사람들의 기억이 조각나 흩어지고, 거리는 혼란에 잠겼다.",
			"기묘한 예술가, Discordia. 그의 작품은 망가진 전광판으로 만들어졌다.",
			"그리고 그 아래, 잊힌 진실이… 어쩌면."
		],
		"english": [
			"Data screams throughout the city.",
			"Memories shatter and scatter, the city descends into chaos.",
			"The eccentric artist, Discordia. His art, crafted from broken billboards.",
			"And beneath it all, a forgotten truth… perhaps."
		],
		"japanese": [
			"街のあちこちで、データが悲鳴を上げている。",
			"人々の記憶は砕け散り、街は混乱に包まれた。",
			"奇妙な芸術家、Discordia。彼の作品は、壊れた電光掲示板から作られた。",
			"そしてその下には、忘れ去られた真実が… もしかしたら。"
		],
		"chinese": [
			"城市各处，数据在尖叫。",
			"人们的记忆支离破碎，城市陷入混乱。",
			"奇怪的艺术家，Discordia。他的作品由损坏的广告牌制成。",
			"而在那之下，被遗忘的真相… 也许。"
		],
		"french": [
			"Partout dans la ville, les données hurlent.",
			"Les souvenirs des gens volent en éclats, et la ville sombre dans le chaos.",
			"L'artiste excentrique, Discordia. Ses œuvres sont faites de panneaux d'affichage cassés.",
			"Et en dessous, une vérité oubliée… peut-être."
		],
		"spanish": [
			"Por toda la ciudad, los datos gritan.",
			"Los recuerdos de la gente se hacen pedazos y la ciudad se sumerge en el caos.",
			"El excéntrico artista, Discordia. Sus obras, hechas de vallas publicitarias rotas.",
			"Y debajo de todo, una verdad olvidada… quizás."
		],
		"vietnamese": [
			"Khắp thành phố, dữ liệu đang gào thét.",
			"Ký ức tan vỡ, đường phố chìm trong hỗn loạn.",
			"Nghệ sĩ kỳ lạ, Discordia. Tác phẩm của hắn được tạo ra từ những bảng quảng cáo hỏng.",
			"Và bên dưới đó, một sự thật bị lãng quên… có lẽ."
		],
		"thai": [
			"ทั่วเมือง ข้อมูลกำลังกรีดร้อง",
			"ความทรงจำของผู้คนแตกสลาย กระจัดกระจาย และเมืองก็จมดิ่งสู่ความโกลาหล",
			"ศิลปินแปลกประหลาด ดิสคอร์เดีย ผลงานของเขาถูกสร้างขึ้นจากป้ายโฆษณาที่พังเสียหาย",
			"และภายใต้สิ่งนั้น ความจริงที่ถูกลืมเลือน… อาจจะ"
		],
		"hindi": [
			"शहर भर में, डेटा चीख रहा है।",
			"लोगों की यादें बिखर गई हैं, शहर अराजकता में डूब गया है।",
			"अजीब कलाकार, डिस्कॉर्डीया। उसकी कला, टूटे हुए बिलबोर्ड से बनी है।",
			"और उसके नीचे, एक भूला हुआ सच… शायद।"
		]
	}
} as const;
