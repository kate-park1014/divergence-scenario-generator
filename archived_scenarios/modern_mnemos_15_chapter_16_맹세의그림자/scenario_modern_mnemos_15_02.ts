export const scenario_modern_mnemos_15_02 = {
	"scenario_id": "modern_mnemos_15_02",
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
			"지하 기록 보관소. 도시의 모든 비밀이 잠든 곳.",
			"하지만 누군가 기록을 조작하고 있다.",
			"정체불명의 해커, 닥스. 그는 동료인가, 또 다른 함정인가?",
			"기록의 미로 속에서, 진실은 더욱 희미해진다."
		],
		"english": [
			"The Underground Archives. Where all the city's secrets lie dormant.",
			"But someone is tampering with the records.",
			"An unknown hacker, Dax. Is he an ally, or another trap?",
			"In the labyrinth of records, the truth fades further."
		],
		"japanese": [
			"地下記録保管所。街のあらゆる秘密が眠る場所。",
			"しかし、誰かが記録を操作している。",
			"正体不明のハッカー、ダックス。彼は仲間なのか、それとも別の罠なのか？",
			"記録の迷宮の中で、真実はさらに薄れていく。"
		],
		"chinese": [
			"地下档案室。城市所有秘密的沉睡之地。",
			"但有人正在篡改记录。",
			"不明身份的黑客，达克斯。他是盟友，还是另一个陷阱？",
			"在记录的迷宫中，真相愈发模糊。"
		],
		"french": [
			"Les Archives Souterraines. Là où tous les secrets de la ville reposent.",
			"Mais quelqu'un manipule les archives.",
			"Un hacker inconnu, Dax. Est-il un allié, ou un autre piège ?",
			"Dans le labyrinthe des archives, la vérité s'estompe davantage."
		],
		"spanish": [
			"Los Archivos Subterráneos. Donde yacen todos los secretos de la ciudad.",
			"Pero alguien está manipulando los registros.",
			"Un hacker desconocido, Dax. ¿Es un aliado, o otra trampa?",
			"En el laberinto de los registros, la verdad se desvanece aún más."
		],
		"vietnamese": [
			"Kho lưu trữ ngầm. Nơi mọi bí mật của thành phố ngủ yên.",
			"Nhưng ai đó đang làm giả các hồ sơ.",
			"Một hacker bí ẩn, Dax. Hắn là đồng minh, hay một cái bẫy khác?",
			"Trong mê cung của hồ sơ, sự thật càng thêm mờ nhạt."
		],
		"thai": [
			"หอจดหมายเหตุใต้ดิน ที่ซึ่งความลับทั้งหมดของเมืองหลับใหลอยู่",
			"แต่มีคนกำลังบิดเบือนบันทึก",
			"แฮกเกอร์นิรนาม, แด็กซ์. เขาคือพันธมิตร หรือกับดักอีกอัน?",
			"ในเขาวงกตแห่งบันทึก ความจริงยิ่งเลือนลางลงไปอีก"
		],
		"hindi": [
			"भूमिगत अभिलेखागार। जहाँ शहर के सभी रहस्य छिपे हैं।",
			"लेकिन कोई अभिलेखों से छेड़छाड़ कर रहा है।",
			"एक अज्ञात हैकर, डैक्स। क्या वह एक सहयोगी है, या एक और जाल?",
			"अभिलेखों के भंवर में, सत्य और भी धुंधला हो जाता है।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "도시의 심장부, 지하 기록 보관소. 잊힌 과거가 숨 쉬는 곳.",
						"english": "The city's heart, the Underground Archives. Where a forgotten past breathes.",
						"japanese": "都市の心臓部、地下記録保管所。忘れ去られた過去が息づく場所。",
						"chinese": "城市的中心，地下档案室。遗忘的过去在此呼吸。",
						"french": "Au cœur de la ville, les Archives Souterraines. Là où un passé oublié respire.",
						"spanish": "El corazón de la ciudad, los Archivos Subterráneos. Donde un pasado olvidado respira.",
						"vietnamese": "Trái tim của thành phố, Kho lưu trữ ngầm. Nơi quá khứ bị lãng quên đang thở.",
						"thai": "ใจกลางเมือง หอจดหมายเหตุใต้ดิน ที่ซึ่งอดีตที่ถูกลืมเลือนหายใจอยู่",
						"hindi": "शहर का हृदय, भूमिगत अभिलेखागार। जहाँ एक भूला हुआ अतीत साँस लेता है।"
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
						"korean": "여기에 므네모스의 흔적이 있을 거야.",
						"english": "Mnemos' traces should be here.",
						"japanese": "ここにムネモスの痕跡があるはずだ。",
						"chinese": "姆涅莫斯的痕迹应该在这里。",
						"french": "Les traces de Mnemos devraient être ici.",
						"spanish": "Los rastros de Mnemos deberían estar aquí.",
						"vietnamese": "Dấu vết của Mnemos chắc hẳn ở đây.",
						"thai": "ร่องรอยของเนโมสควรอยู่ที่นี่",
						"hindi": "म्नेमोस के निशान यहीं होने चाहिए।"
					}
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"speaker": "dax"
				},
				{
					"type": "speech",
					"content": {
						"korean": "안녕. 찾던 정보를 찾을 수 있을 거야. 난 닥스.",
						"english": "Hello. You'll find the information you're looking for. I'm Dax.",
						"japanese": "やあ。探している情報が見つかるだろう。俺はダックスだ。",
						"chinese": "你好。你会找到你要的信息。我是达克斯。",
						"french": "Bonjour. Tu trouveras les informations que tu cherches. Je suis Dax.",
						"spanish": "Hola. Encontrarás la información que buscas. Soy Dax.",
						"vietnamese": "Chào. Cậu sẽ tìm thấy thông tin mình cần. Tôi là Dax.",
						"thai": "สวัสดี. คุณจะพบข้อมูลที่คุณกำลังมองหา ผมชื่อแด็กซ์",
						"hindi": "नमस्ते। तुम्हें वो जानकारी मिल जाएगी जो तुम ढूँढ रहे हो। मैं डैक्स हूँ।"
					},
					"speaker": "dax",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "…갑자기 나타나서 돕겠다고?",
						"english": "...You just show up and offer to help?",
						"japanese": "…突然現れて、手伝うだと？",
						"chinese": "……你突然出现说要帮忙？",
						"french": "...Tu apparais soudainement pour aider ?",
						"spanish": "...¿Apareces de repente y ofreces ayuda?",
						"vietnamese": "...Cậu đột nhiên xuất hiện và bảo sẽ giúp đỡ ư?",
						"thai": "...จู่ๆ ก็ปรากฏตัวขึ้นมาช่วยงั้นเหรอ?",
						"hindi": "...तुम अचानक आ गए और मदद की पेशकश कर रहे हो?"
					}
				},
				{
					"emotion": "happy",
					"speaker": "dax",
					"content": {
						"korean": "정보는 원래 공유해야 제맛이지. 내가 좀 더 잘 아는 분야거든.",
						"english": "Information is best when shared, isn't it? It's a field I know well.",
						"japanese": "情報は共有してこそ価値がある。それに、俺の方が詳しい分野だからな。",
						"chinese": "信息本来就该分享嘛。毕竟这是我更擅长的领域。",
						"french": "L'information est faite pour être partagée, non ? C'est un domaine que je connais bien.",
						"spanish": "La información es mejor cuando se comparte, ¿no? Es un campo que conozco bien.",
						"vietnamese": "Thông tin vốn dĩ phải được chia sẻ mới thú vị chứ. Đây là lĩnh vực tôi khá rành mà.",
						"thai": "ข้อมูลที่ดีที่สุดคือการแบ่งปันไม่ใช่เหรอ? นี่เป็นเรื่องที่ผมรู้ดีกว่า",
						"hindi": "जानकारी साझा करने में ही मज़ा है, है ना? यह ऐसा क्षेत्र है जिसे मैं अच्छी तरह जानता हूँ।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "일단 저쪽에 오래된 기록이 있어. 꽤 흥미로울 거야.",
						"english": "First, there's an old record over there. It should be quite interesting.",
						"japanese": "とりあえず、あそこに古い記録がある。なかなか興味深いだろう。",
						"chinese": "那边有份旧记录。应该会很有趣。",
						"french": "Pour commencer, il y a un vieux registre là-bas. Ce sera sans doute très intéressant.",
						"spanish": "Primero, hay un registro antiguo por allí. Debería ser bastante interesante.",
						"vietnamese": "Trước tiên, đằng kia có một hồ sơ cũ. Chắc sẽ khá thú vị đấy.",
						"thai": "อย่างแรก มีบันทึกเก่าอยู่ตรงนั้น น่าจะค่อนข้างน่าสนใจ",
						"hindi": "सबसे पहले, वहाँ एक पुराना अभिलेख है। यह काफी दिलचस्प होगा।"
					},
					"speaker": "dax",
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "dax",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "dax",
					"content": {
						"korean": "여기는 기록이 좀 불안정하네. 오래돼서 그런가.",
						"english": "The records here seem unstable. Is it because they're old?",
						"japanese": "ここの記録は不安定だな。古いからかな。",
						"chinese": "这里的记录不太稳定。是因为太久了吗？",
						"french": "Les archives ici sont instables. C'est à cause de leur ancienneté ?",
						"spanish": "Los registros aquí son un poco inestables. ¿Será por viejos?",
						"vietnamese": "Dữ liệu ở đây có vẻ không ổn định. Chắc là do cũ quá rồi.",
						"thai": "บันทึกที่นี่ดูไม่เสถียร สงสัยจะเก่าแล้ว",
						"hindi": "यहां के रिकॉर्ड कुछ अस्थिर लग रहे हैं। क्या यह पुराने होने की वजह से है?"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "데이터가… 조각나고 있어.",
						"english": "The data… it's fragmenting.",
						"japanese": "データが… 断片化している。",
						"chinese": "数据… 正在碎片化。",
						"french": "Les données… se fragmentent.",
						"spanish": "Los datos… se están fragmentando.",
						"vietnamese": "Dữ liệu… đang bị phân mảnh.",
						"thai": "ข้อมูล… กำลังแตกเป็นเสี่ยงๆ",
						"hindi": "डेटा… खंडित हो रहा है।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그럴 수도 있지. 가끔 도시 시스템이 삐걱댈 때가 있어. 대수롭지 않아.",
						"english": "Could be. Sometimes the city's system glitches. It's nothing serious.",
						"japanese": "まあな。たまに都市システムがガタつくんだ。大したことないさ。",
						"chinese": "可能吧。城市系统偶尔会出故障。没什么大不了的。",
						"french": "Ça arrive. Le système de la ville a parfois des ratés. Rien de grave.",
						"spanish": "Puede ser. A veces el sistema de la ciudad falla. No es nada serio.",
						"vietnamese": "Cũng có thể. Đôi khi hệ thống thành phố gặp trục trặc. Không có gì đáng lo đâu.",
						"thai": "ก็เป็นไปได้ บางทีระบบเมืองก็ติดขัด ไม่ใช่เรื่องใหญ่หรอก",
						"hindi": "हो सकता है। कभी-कभी शहर का सिस्टम गड़बड़ा जाता है। यह कोई बड़ी बात नहीं है।"
					},
					"speaker": "dax"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "대수롭지 않다고…?",
						"english": "Nothing serious…?",
						"japanese": "大したことないって…？",
						"chinese": "没什么大不了的…？",
						"french": "Rien de grave… ?",
						"spanish": "¿Nada serio…?",
						"vietnamese": "Không có gì đáng lo sao…?",
						"thai": "ไม่เป็นไรหรอกงั้นเหรอ…?",
						"hindi": "कोई बड़ी बात नहीं…?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "음, 중요한 건 아니야. 더 깊이 들어가면 진짜배기 정보가 있을 거야.",
						"english": "Hm, it's not important. Deeper in, you'll find the real information.",
						"japanese": "ん、重要じゃない。もっと奥に行けば、本当の情報があるはずだ。",
						"chinese": "嗯，那不重要。再深入一点，你就能找到真正的情报了。",
						"french": "Hmm, ce n'est pas important. Plus profondément, tu trouveras les vraies informations.",
						"spanish": "Hm, no es importante. Más adentro, encontrarás la información real.",
						"vietnamese": "Ừm, không quan trọng đâu. Càng vào sâu, cậu sẽ tìm thấy thông tin thật sự.",
						"thai": "อืม ไม่สำคัญหรอก ยิ่งลึกเข้าไป ยิ่งเจอข้อมูลจริง",
						"hindi": "हम्म, यह महत्वपूर्ण नहीं है। और गहराई में, तुम्हें असली जानकारी मिलेगी।"
					},
					"speaker": "dax",
					"emotion": "happy",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "dax",
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "여기, 특이한 기록 파편들이 있네.",
						"english": "Here, there are unusual record fragments.",
						"japanese": "ここに、珍しい記録の破片があるな。",
						"chinese": "这里有一些特别的记录碎片。",
						"french": "Ici, il y a des fragments de dossiers inhabituels.",
						"spanish": "Aquí hay fragmentos de registros inusuales.",
						"vietnamese": "Ở đây có những mảnh ghi chép kỳ lạ.",
						"thai": "ที่นี่มีเศษบันทึกแปลกๆ",
						"hindi": "यहां, असामान्य रिकॉर्ड के टुकड़े हैं।"
					},
					"speaker": "dax",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "오래된 갱스터 조직의 흔적이야.",
						"english": "Traces of an old gangster organization.",
						"japanese": "古いギャング組織の痕跡だ。",
						"chinese": "是一个老帮派组织的痕迹。",
						"french": "Des traces d'une ancienne organisation de gangsters.",
						"spanish": "Huellas de una antigua organización de gánsteres.",
						"vietnamese": "Dấu vết của một tổ chức xã hội đen cũ.",
						"thai": "ร่องรอยขององค์กรนักเลงเก่า",
						"hindi": "एक पुरानी गैंगस्टर संगठन के निशान।"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아, 그거? 한때 시끄러웠지만 지금은 아무것도 아냐. 그냥 도시 괴담 같은 거지.",
						"english": "Oh, that? It was noisy once, but now it's nothing. Just an urban legend.",
						"japanese": "ああ、それか？かつては騒がしかったが、今はもう何でもない。ただの都市伝説みたいなもんだ。",
						"chinese": "哦，那个啊？曾经闹得很凶，但现在什么也不是了。就像都市传说一样。",
						"french": "Oh, ça ? Ça a fait du bruit autrefois, mais maintenant ce n'est rien. Juste une légende urbaine.",
						"spanish": "Oh, ¿eso? Una vez fue ruidoso, pero ahora no es nada. Solo una leyenda urbana.",
						"vietnamese": "À, cái đó hả? Từng ồn ào một thời nhưng giờ chẳng là gì cả. Chỉ là một truyền thuyết đô thị thôi.",
						"thai": "อ๋อ อันนั้นน่ะเหรอ? เคยเป็นเรื่องดัง แต่ตอนนี้ไม่มีอะไรแล้ว ก็แค่ตำนานเมืองนั่นแหละ",
						"hindi": "ओह, वो? एक बार शोरगुल था, लेकिन अब कुछ नहीं है। बस एक शहरी किंवदंती की तरह।"
					},
					"speaker": "dax",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "정말 아무것도 아닐까…?",
						"english": "Is it really nothing…?",
						"japanese": "本当に何でもないのか…？",
						"chinese": "真的什么也不是吗…？",
						"french": "Ce n'est vraiment rien… ?",
						"spanish": "¿De verdad no es nada…?",
						"vietnamese": "Thật sự không có gì sao…?",
						"thai": "มันไม่มีอะไรจริงๆ เหรอ…?",
						"hindi": "क्या यह सच में कुछ भी नहीं है…?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "happy",
					"speaker": "dax",
					"content": {
						"korean": "그럼! 중요한 건 므네모스잖아? 이쪽으로 가봐. 더 큰 게 숨어있을 거야.",
						"english": "Exactly! Mnemos is what matters, right? Head this way. Something bigger must be hidden.",
						"japanese": "そうだ！重要なのはムネモスだろ？こっちに行ってみろ。もっと大きなものが隠されているはずだ。",
						"chinese": "当然！重要的是姆涅莫斯，对吧？往这边走。肯定藏着更大的东西。",
						"french": "Exactement ! L'important, c'est Mnemos, pas vrai ? Va par ici. Quelque chose de plus grand doit être caché.",
						"spanish": "¡Claro! Lo importante es Mnemos, ¿verdad? Ve por aquí. Algo más grande debe estar escondido.",
						"vietnamese": "Chắc chắn rồi! Quan trọng là Mnemos mà, phải không? Đi lối này. Chắc chắn có thứ gì đó lớn hơn đang ẩn giấu.",
						"thai": "แน่นอน! สำคัญคือ Mnemos ใช่ไหม? ไปทางนี้สิ ต้องมีอะไรที่ใหญ่กว่าซ่อนอยู่แน่ๆ",
						"hindi": "बिल्कुल! महत्वपूर्ण तो नेमोस है, है ना? इस तरफ जाओ। कुछ बड़ा छिपा होगा।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"speaker": "dax",
					"duration_ms": 500
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "점점 더 복잡해져. 닥스, 네 정보… 믿을 수 있는 거야?",
						"english": "It's getting more complicated. Dax, is your information... reliable?",
						"japanese": "だんだん複雑になってきた。ダックス、君の情報…信用できるのか？",
						"chinese": "越来越复杂了。达克斯，你的情报……可靠吗？",
						"french": "Ça devient de plus en plus compliqué. Dax, tes informations… sont-elles fiables ?",
						"spanish": "Esto se complica cada vez más. Dax, tu información… ¿es de fiar?",
						"vietnamese": "Càng ngày càng phức tạp. Dax, thông tin của cậu… đáng tin không?",
						"thai": "มันซับซ้อนขึ้นเรื่อยๆ แด็กซ์ ข้อมูลของนาย… เชื่อถือได้เหรอ?",
						"hindi": "यह और भी जटिल होता जा रहा है। डैक्स, तुम्हारी जानकारी... क्या यह विश्वसनीय है?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "happy",
					"speaker": "dax",
					"content": {
						"korean": "하하, 물론이지! 모든 정보는 관점에 따라 다른 법이니까.",
						"english": "Haha, of course! All information differs depending on perspective.",
						"japanese": "はは、もちろんだ！情報はすべて、視点によって変わるものだからな。",
						"chinese": "哈哈，当然！所有的信息都取决于不同的视角。",
						"french": "Haha, bien sûr ! Toute information dépend du point de vue.",
						"spanish": "¡Jaja, por supuesto! Toda información varía según la perspectiva.",
						"vietnamese": "Haha, tất nhiên rồi! Mọi thông tin đều khác nhau tùy thuộc vào góc nhìn.",
						"thai": "ฮ่าๆ แน่นอนสิ! ข้อมูลทั้งหมดแตกต่างกันไปตามมุมมอง",
						"hindi": "हाहा, बिल्कुल! हर जानकारी नज़रिये पर निर्भर करती है।"
					}
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "어쨌든 므네모스는 이 기록 보관소와 깊게 연결되어 있어. 뿌리 그 자체야.",
						"english": "Anyway, Mnemos is deeply connected to this archive. It is the very root.",
						"japanese": "とにかく、ムネモスはこの記録保管庫と深く繋がっている。まさに根源だ。",
						"chinese": "总之，姆涅莫斯与这个档案库有着深刻的联系。它就是根源本身。",
						"french": "Quoi qu'il en soit, Mnemos est profondément lié à ces archives. C'est la racine même.",
						"spanish": "De todos modos, Mnemos está profundamente conectado a este archivo. Es la raíz misma.",
						"vietnamese": "Dù sao thì, Mnemos cũng có liên hệ sâu sắc với kho lưu trữ này. Nó là cội rễ.",
						"thai": "ยังไงก็ตาม 므네모สเชื่อมโยงอย่างลึกซึ้งกับคลังเก็บเอกสารนี้ มันคือรากเหง้าเลยทีเดียว",
						"hindi": "ख़ैर, म्नेमोस इस अभिलेखागार से गहराई से जुड़ा हुआ है। यह स्वयं जड़ है।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "뿌리…?",
						"english": "Root...?",
						"japanese": "根源…？",
						"chinese": "根源……？",
						"french": "Racine… ?",
						"spanish": "¿Raíz…?",
						"vietnamese": "Cội rễ…?",
						"thai": "รากเหง้า…?",
						"hindi": "जड़…?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그래. 그리고 저 앞에 그 뿌리를 지키는 자가 나타날 거야.",
						"english": "Yes. And ahead, the guardian of that root will appear.",
						"japanese": "そうだ。そして、その根源を守る者が、あの先に現れるだろう。",
						"chinese": "是的。而且前面，守护那个根源的人将会出现。",
						"french": "Oui. Et devant, le gardien de cette racine apparaîtra.",
						"spanish": "Sí. Y más adelante, aparecerá quien protege esa raíz.",
						"vietnamese": "Đúng vậy. Và phía trước, kẻ bảo vệ cội rễ đó sẽ xuất hiện.",
						"thai": "ใช่แล้ว และข้างหน้าจะมีผู้พิทักษ์รากเหง้านั้นปรากฏตัว",
						"hindi": "हाँ। और आगे, उस जड़ का रक्षक प्रकट होगा।"
					},
					"speaker": "dax",
					"emotion": "base"
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						4,
						3
					],
					"type": "direction",
					"speaker": "dax",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이곳이 기록의 최심부. 드디어 진짜배기가 나오려나.",
						"english": "This is the deepest part of the records. Is the real deal finally emerging?",
						"japanese": "ここが記録の最深部。ついに本物が現れるか。",
						"chinese": "这里是记录的最深处。终于要揭示真相了吗？",
						"french": "Voici le cœur des archives. Le véritable secret va-t-il enfin être révélé ?",
						"spanish": "Esta es la parte más profunda de los registros. ¿Por fin aparecerá lo verdadero?",
						"vietnamese": "Đây là phần sâu nhất của các ghi chép. Cuối cùng thì sự thật cũng sắp lộ diện rồi sao?",
						"thai": "ที่นี่คือส่วนลึกที่สุดของบันทึก ในที่สุดของจริงก็กำลังจะออกมาแล้วสินะ",
						"hindi": "यह अभिलेखों का सबसे गहरा हिस्सा है। क्या अब असली चीज़ सामने आएगी?"
					},
					"speaker": "dax"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 기록의 벽에서 솟아올랐다.",
						"english": "A gigantic shadow rose from the walls of the archive.",
						"japanese": "巨大な影が記録の壁から立ち上がった。",
						"chinese": "一个巨大的影子从记录之墙中升起。",
						"french": "Une ombre gigantesque s'éleva des murs de l'archive.",
						"spanish": "Una sombra gigantesca se alzó de la pared de los registros.",
						"vietnamese": "Một bóng đen khổng lồ trỗi dậy từ bức tường ghi chép.",
						"thai": "เงาขนาดใหญ่ผุดขึ้นจากกำแพงแห่งบันทึก",
						"hindi": "एक विशालकाय परछाई अभिलेखों की दीवार से उठी।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "감히 잊힌 기록을 들추는가? 벌을 받을 것이다.",
						"english": "Dare you disturb forgotten records? You shall be punished.",
						"japanese": "よくも忘れられた記録を暴いたな？罰を受けるが良い。",
						"chinese": "竟敢翻阅被遗忘的记录？你将受到惩罚。",
						"french": "Oserez-vous déterrer des archives oubliées ? Vous serez puni.",
						"spanish": "¿Te atreves a desenterrar registros olvidados? Serás castigado.",
						"vietnamese": "Dám lục lọi những ghi chép đã lãng quên sao? Ngươi sẽ phải chịu phạt.",
						"thai": "บังอาจมาเปิดเผยบันทึกที่ถูกลืมงั้นรึ? เจ้าจะต้องได้รับการลงทัณฑ์",
						"hindi": "भूल गए अभिलेखों को खंगालने की हिम्मत कैसे हुई? तुम्हें दंड मिलेगा।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "네가 므네모스의 기록을 지키는 자인가!",
						"english": "Are you the guardian of Mnemos's records!",
						"japanese": "貴様がムネモスの記録を守る者か！",
						"chinese": "你就是姆涅莫斯记录的守护者吗！",
						"french": "Es-tu le gardien des archives de Mnemos !",
						"spanish": "¡¿Tú eres el guardián de los registros de Mnemos?!",
						"vietnamese": "Ngươi là kẻ bảo vệ ghi chép của Mnemos sao!",
						"thai": "เจ้าคือผู้พิทักษ์บันทึกของ 므네모ส งั้นรึ!",
						"hindi": "क्या तुम म्नेमोस के अभिलेखों के रक्षक हो!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "진실은 고통스러운 법. 이 이상은 넘볼 수 없다.",
						"english": "Truth is painful. You may not delve further.",
						"japanese": "真実は苦痛を伴うもの。これ以上、覗き見ることは許されない。",
						"chinese": "真相是痛苦的。你不能再窥探下去了。",
						"french": "La vérité est douloureuse. Vous ne pouvez pas aller au-delà.",
						"spanish": "La verdad es dolorosa. No puedes aspirar a más.",
						"vietnamese": "Sự thật luôn đau đớn. Ngươi không thể vượt qua giới hạn này.",
						"thai": "ความจริงนั้นเจ็บปวด เจ้าไม่อาจล่วงรู้ไปมากกว่านี้ได้",
						"hindi": "सच्चाई दर्दनाक होती है। इससे आगे तुम झाँक नहीं सकते।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "재밌겠네. 난 잠시 물러나 있을게. 행운을 빌어.",
						"english": "Sounds fun. I'll step back for a bit. Good luck.",
						"japanese": "面白そうだな。私は少し引いておくよ。幸運を祈る。",
						"chinese": "这会很有趣。我先退开一下。祝你好运。",
						"french": "Ça a l'air amusant. Je vais me retirer un instant. Bonne chance.",
						"spanish": "Suena divertido. Me quedaré al margen por un momento. Buena suerte.",
						"vietnamese": "Nghe có vẻ thú vị. Tôi sẽ lùi lại một lát. Chúc may mắn.",
						"thai": "น่าสนุกดีนะ ฉันจะถอยไปสักพัก ขอให้โชคดี",
						"hindi": "मज़ेदार लग रहा है। मैं कुछ देर के लिए पीछे हट जाता हूँ। शुभकामनाएँ。"
					},
					"speaker": "dax",
					"emotion": "happy"
				},
				{
					"direction": "down",
					"duration_ms": 400,
					"action": "exit",
					"type": "direction",
					"speaker": "dax"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "기록의 수호자는 거대한 힘으로 탐험대를 압도했다.",
						"english": "The Guardian of Records overwhelmed the expedition with immense power.",
						"japanese": "記録の守護者は、絶大な力で探検隊を圧倒した。",
						"chinese": "记录的守护者以巨大的力量压倒了探险队。",
						"french": "Le Gardien des Archives a submergé l'expédition avec une puissance immense.",
						"spanish": "El Guardián de los Registros abrumó a la expedición con un poder inmenso.",
						"vietnamese": "Người bảo hộ của Biên Niên Sử đã áp đảo đoàn thám hiểm bằng sức mạnh to lớn.",
						"thai": "ผู้พิทักษ์บันทึกได้ครอบงำคณะสำรวจด้วยพลังอันมหาศาล",
						"hindi": "अभिलेखों के संरक्षक ने विशाल शक्ति से अभियान दल को पराजित कर दिया।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "얕은 진실에 만족해라. 더 이상은 없다.",
						"english": "Be content with shallow truths. There is nothing more.",
						"japanese": "浅い真実で満足せよ。これ以上はない。",
						"chinese": "满足于浅薄的真相吧。没有更多了。",
						"french": "Contente-toi des vérités superficielles. Il n'y a rien de plus.",
						"spanish": "Conformáte con verdades superficiales. No hay nada más.",
						"vietnamese": "Hãy bằng lòng với những sự thật nông cạn. Không còn gì hơn nữa.",
						"thai": "จงพอใจกับความจริงตื้นๆ ไม่มีอะไรมากไปกว่านี้แล้ว",
						"hindi": "उथली सच्चाइयों से संतुष्ट रहो। इससे ज़्यादा कुछ नहीं है।"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "아니… 나는 진실을 찾아야만 해.",
						"english": "No... I must find the truth.",
						"japanese": "いや…私は真実を見つけなければならない。",
						"chinese": "不…我必须找到真相。",
						"french": "Non... je dois trouver la vérité.",
						"spanish": "No... debo encontrar la verdad.",
						"vietnamese": "Không... tôi phải tìm ra sự thật.",
						"thai": "ไม่... ฉันต้องค้นหาความจริงให้เจอ",
						"hindi": "नहीं... मुझे सच्चाई ढूंढनी ही होगी।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"speaker": "dax",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "아쉽네. 좀 더 분발해야겠는걸?",
						"english": "Too bad. Looks like you need to try harder.",
						"japanese": "残念だな。もう少し頑張らないとね？",
						"chinese": "可惜了。看来你得再加把劲？",
						"french": "Dommage. Il va falloir faire plus d'efforts.",
						"spanish": "Qué lástima. Parece que tendrás que esforzarte más.",
						"vietnamese": "Đáng tiếc thật. Có vẻ như bạn cần cố gắng hơn nữa?",
						"thai": "น่าเสียดายนะ ดูเหมือนว่าคุณจะต้องพยายามให้มากขึ้นอีกหน่อยแล้ว",
						"hindi": "अफ़सोस। लगता है तुम्हें और मेहनत करनी होगी?"
					},
					"emotion": "happy"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "…단지 하나의 파편에 불과하다. 진실은… 훨씬 더…",
						"english": "...Just a fragment. The truth is... much more...",
						"japanese": "…ただの断片に過ぎない。真実は…もっと…",
						"chinese": "…这只是一个碎片。真相…远不止于此…",
						"french": "...Juste un fragment. La vérité est... bien plus...",
						"spanish": "...Solo un fragmento. La verdad es... mucho más...",
						"vietnamese": "...Chỉ là một mảnh vỡ. Sự thật thì... còn hơn thế nhiều...",
						"thai": "...เป็นแค่เพียงเสี้ยวหนึ่งเท่านั้น ความจริงนั้น... ยิ่งใหญ่กว่ามาก...",
						"hindi": "...यह तो बस एक टुकड़ा है। सच्चाई... कहीं ज़्यादा है..."
					},
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "닥스… 놈의 말은 어디까지 진실이었지?",
						"english": "Dax... How much of his words were true?",
						"japanese": "ダックス…奴の言葉はどこまで真実だった？",
						"chinese": "达克斯…他的话有多少是真的？",
						"french": "Dax... Jusqu'où ses paroles étaient-elles vraies ?",
						"spanish": "Dax... ¿Cuánto de lo que dijo era verdad?",
						"vietnamese": "Dax... Lời hắn nói, bao nhiêu là thật?",
						"thai": "แด็กซ์... คำพูดของมันจริงแค่ไหนกันนะ?",
						"hindi": "डैक्स... उसकी बातों में कितनी सच्चाई थी?"
					}
				},
				{
					"content": {
						"korean": "파편화된 기록 속에서, 혼란은 더욱 깊어졌다. 누구도 믿을 수 없었다.",
						"english": "Amidst fragmented records, the confusion deepened. No one could be trusted.",
						"japanese": "断片化された記録の中で、混乱はさらに深まった。誰も信じられなかった。",
						"chinese": "在零碎的记录中，混乱愈发加深。没有人值得信任。",
						"french": "Au milieu des archives fragmentées, la confusion s'est accrue. Personne n'était digne de confiance.",
						"spanish": "Entre los registros fragmentados, la confusión se profundizó. No se podía confiar en nadie.",
						"vietnamese": "Giữa những ghi chép rời rạc, sự hỗn loạn càng thêm sâu sắc. Không ai có thể tin tưởng được.",
						"thai": "ท่ามกลางบันทึกที่แตกเป็นเสี่ยงๆ ความสับสนยิ่งทวีความรุนแรงขึ้น ไม่มีใครที่สามารถเชื่อใจได้",
						"hindi": "खंडित अभिलेखों के बीच, भ्रम और गहरा गया। किसी पर भी भरोसा नहीं किया जा सकता था।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			]
		}
	]
} as const;
