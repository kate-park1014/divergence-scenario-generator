export const scenario_snowy_finn_19_03 = {
	"scenario_id": "snowy_finn_19_03",
	"order": 3,
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
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "eira",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"content": {
						"korean": "…낯선 분들이시군요. 여기까지 오다니.",
						"english": "...Strangers. To come all the way here...",
						"japanese": "…見慣れない方々ですね。ここまで来るとは。",
						"chinese": "……陌生人。竟然能来到这里。",
						"french": "...Des inconnus. Être venus jusqu'ici...",
						"spanish": "...Extraños. Haber llegado hasta aquí...",
						"vietnamese": "...Những người lạ. Đến được tận đây...",
						"thai": "...คนแปลกหน้า มาถึงที่นี่ได้ยังไงกัน",
						"hindi": "...अजनबी। यहाँ तक आ पहुँचे।"
					},
					"speaker": "eira",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "당신은…?",
						"english": "You are...?",
						"japanese": "あなたは…？",
						"chinese": "你是……？",
						"french": "Vous êtes...?",
						"spanish": "¿Usted es...?",
						"vietnamese": "Bạn là...?",
						"thai": "ท่านคือ...?",
						"hindi": "आप कौन हैं...?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "에이라라고 합니다. 이 설산을 기록하는 자죠.",
						"english": "I am Eira. The one who records these snowy mountains.",
						"japanese": "エイラと申します。この雪山を記録する者です。",
						"chinese": "我叫艾拉。是这雪山的记录者。",
						"french": "Je m'appelle Eira. Je suis celle qui consigne ces montagnes enneigées.",
						"spanish": "Soy Eira. La que registra estas montañas nevadas.",
						"vietnamese": "Tôi là Eira. Người ghi chép của ngọn núi tuyết này.",
						"thai": "ฉันชื่อไอรา ผู้บันทึกแห่งภูเขาหิมะนี้",
						"hindi": "मैं एरा हूँ। इन बर्फीले पहाड़ों का इतिहासकार।"
					}
				},
				{
					"speaker": "eira",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "혹시… 핀 대공을 찾으시나요?",
						"english": "By any chance... are you looking for Grand Duke Finn?",
						"japanese": "もしかして…フィン大公をお探しですか？",
						"chinese": "莫非……您在找芬大公？",
						"french": "Par hasard... cherchez-vous le Grand-Duc Finn ?",
						"spanish": "¿Por casualidad... buscan al Gran Duque Finn?",
						"vietnamese": "Không lẽ... bạn đang tìm Đại công tước Finn?",
						"thai": "หรือว่า... ท่านกำลังตามหาแกรนด์ดยุกฟินน์อยู่?",
						"hindi": "कहीं... आप ग्रैंड ड्यूक फिन को तो नहीं ढूंढ रहे?"
					}
				},
				{
					"content": {
						"korean": "그렇다.",
						"english": "Yes.",
						"japanese": "そうだ。",
						"chinese": "是的。",
						"french": "Oui.",
						"spanish": "Sí.",
						"vietnamese": "Đúng vậy.",
						"thai": "ใช่",
						"hindi": "हाँ।"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "조심하세요. 대공은… 그리 강한 분이 아닙니다.",
						"english": "Be careful. The Grand Duke is... not that strong.",
						"japanese": "気をつけてください。大公は…それほど強い方ではありません。",
						"chinese": "小心。大公他……并非那么强大。",
						"french": "Faites attention. Le Grand-Duc n'est... pas si fort.",
						"spanish": "Tengan cuidado. El Gran Duque... no es tan fuerte.",
						"vietnamese": "Hãy cẩn thận. Đại công tước... không mạnh như vậy đâu.",
						"thai": "ระวังตัวด้วย แกรนด์ดยุก... ไม่ได้แข็งแกร่งขนาดนั้นหรอก",
						"hindi": "सावधान रहें। ग्रैंड ड्यूक... इतने बलवान नहीं हैं।"
					},
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						2,
						4
					],
					"speaker": "eira",
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "핀 대공은… 이 설산 출신이 아니에요.",
						"english": "Grand Duke Finn is... not from these snowy mountains.",
						"japanese": "フィン大公は…この雪山出身ではありません。",
						"chinese": "芬大公……并非出身于这雪山。",
						"french": "Le Grand-Duc Finn n'est... pas originaire de ces montagnes enneigées.",
						"spanish": "El Gran Duque Finn... no es de estas montañas nevadas.",
						"vietnamese": "Đại công tước Finn... không phải người của ngọn núi tuyết này.",
						"thai": "แกรนด์ดยุกฟินน์... ไม่ได้มาจากภูเขาหิมะแห่งนี้",
						"hindi": "ग्रैंड ड्यूक फिन... इन बर्फीले पहाड़ों से नहीं हैं।"
					},
					"emotion": "base",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"emotion": "angry",
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
						"thai": "ว่าไงนะ?",
						"hindi": "क्या?"
					}
				},
				{
					"content": {
						"korean": "나는 봤어요. 아주 오래 전, 그가 길을 잃고 헤매던 모습을.",
						"english": "I saw it. A long time ago, when he was lost and wandering.",
						"japanese": "私は見ました。ずっと昔、彼が道に迷い、さまよっていた姿を。",
						"chinese": "我看到了。很久很久以前，他迷失方向，四处游荡的样子。",
						"french": "Je l'ai vu. Il y a très longtemps, il était perdu et errait.",
						"spanish": "Lo vi. Hace mucho tiempo, estaba perdido y deambulando.",
						"vietnamese": "Tôi đã thấy. Rất lâu về trước, khi anh ta lạc lối và lang thang.",
						"thai": "ฉันเห็นแล้ว เมื่อนานมาแล้ว ตอนที่เขากำลังหลงทางและร่อนเร่",
						"hindi": "मैंने उसे देखा था। बहुत समय पहले, जब वह भटक रहा था।"
					},
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"content": {
						"korean": "길을 잃었다고?",
						"english": "Lost?",
						"japanese": "道に迷ったと？",
						"chinese": "迷路了？",
						"french": "Perdu ?",
						"spanish": "¿Perdido?",
						"vietnamese": "Lạc đường sao?",
						"thai": "หลงทางเหรอ?",
						"hindi": "खो गया था?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "늘 추위에 떨었죠. 지금의 위엄과는 거리가 멀었습니다.",
						"english": "He always shivered from the cold. Far from his current dignity.",
						"japanese": "いつも寒さに震えていました。今の威厳とはかけ離れていました。",
						"chinese": "他总是因寒冷而颤抖。与他现在的威严相去甚远。",
						"french": "Il tremblait toujours de froid. Loin de sa dignité actuelle.",
						"spanish": "Siempre temblaba de frío. Muy lejos de su dignidad actual.",
						"vietnamese": "Anh ta luôn run rẩy vì lạnh. Rất khác với vẻ uy nghi hiện tại của anh ta.",
						"thai": "เขาหนาวสั่นอยู่เสมอ ห่างไกลจากความสง่างามในตอนนี้มาก",
						"hindi": "वह हमेशा ठंड से काँपता था। उसकी वर्तमान गरिमा से बहुत दूर।"
					},
					"type": "speech",
					"speaker": "eira",
					"emotion": "sad"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"speaker": "eira",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "그는 눈보라 속에서 몸을 웅크리고 있었어요.",
						"english": "He was huddled in the blizzard.",
						"japanese": "彼は吹雪の中で身を丸めていました。",
						"chinese": "他在暴风雪中蜷缩着身子。",
						"french": "Il était recroquevillé dans le blizzard.",
						"spanish": "Estaba acurrucado en la ventisca.",
						"vietnamese": "Anh ta co ro trong bão tuyết.",
						"thai": "เขากำลังนั่งขดตัวอยู่ในพายุหิมะ",
						"hindi": "वह बर्फीले तूफान में दुबका हुआ था।"
					},
					"speaker": "eira",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "마치… 따뜻한 남쪽 바다에서 온 펭귄처럼.",
						"english": "Like... a penguin from the warm southern seas.",
						"japanese": "まるで… 暖かい南の海から来たペンギンのように。",
						"chinese": "就像……来自温暖的南边大海的企鹅一样。",
						"french": "Comme... un pingouin venu de la mer chaude du sud.",
						"spanish": "Como... un pingüino de los cálidos mares del sur.",
						"vietnamese": "Như thể... một chú chim cánh cụt từ biển phía Nam ấm áp.",
						"thai": "ราวกับ... นกเพนกวินจากทะเลทางใต้ที่อบอุ่น",
						"hindi": "जैसे... गर्म दक्षिणी समुद्र से आया एक पेंग्विन।"
					},
					"speaker": "eira",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "남쪽 바다…?",
						"english": "Southern seas...?",
						"japanese": "南の海…？",
						"chinese": "南边的大海……？",
						"french": "La mer du sud... ?",
						"spanish": "¿Los mares del sur...?",
						"vietnamese": "Biển phía Nam...?",
						"thai": "ทะเลทางใต้...?",
						"hindi": "दक्षिणी समुद्र...?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "이 설산의 왕과는 어울리지 않는… 따뜻함을 갈망하는 눈빛이었죠.",
						"english": "A gaze longing for warmth... unbecoming of this snow mountain king.",
						"japanese": "この雪山の王には似合わない… 暖かさを渇望する目つきでした。",
						"chinese": "那眼神渴望着温暖……与这座雪山之王的身份格格不入。",
						"french": "Un regard aspirant à la chaleur... indigne du roi de cette montagne enneigée.",
						"spanish": "Una mirada anhelante de calidez... impropia del rey de esta montaña nevada.",
						"vietnamese": "Một ánh mắt khao khát sự ấm áp... không phù hợp với vị vua của ngọn núi tuyết này.",
						"thai": "แววตาที่โหยหาความอบอุ่น... ไม่คู่ควรกับราชาแห่งภูเขาหิมะนี้",
						"hindi": "एक ऐसी नज़र जो गर्मी की लालसा कर रही थी... इस बर्फीले पहाड़ के राजा के लिए अशोभनीय।"
					}
				},
				{
					"content": {
						"korean": "그럼 지금의 모습은… 위장인가?",
						"english": "So, his current appearance is... a disguise?",
						"japanese": "では、今の姿は… 偽装なのか？",
						"chinese": "那么，他现在的样子是……伪装吗？",
						"french": "Alors, son apparence actuelle est... un déguisement ?",
						"spanish": "¿Entonces, su apariencia actual es... un disfraz?",
						"vietnamese": "Vậy vẻ ngoài hiện tại của anh ta... là ngụy trang sao?",
						"thai": "ถ้าอย่างนั้น ร่างกายตอนนี้... เป็นการปลอมตัวหรือเปล่า?",
						"hindi": "तो, उसका वर्तमान रूप... एक भेष है?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "스스로를 지키기 위한 가면이겠죠.",
						"english": "It must be a mask to protect himself.",
						"japanese": "自分自身を守るための仮面でしょう。",
						"chinese": "那应该是为了保护自己而戴的面具吧。",
						"french": "Ce doit être un masque pour se protéger.",
						"spanish": "Debe ser una máscara para protegerse a sí mismo.",
						"vietnamese": "Đó chắc hẳn là một chiếc mặt nạ để tự bảo vệ mình.",
						"thai": "คงเป็นหน้ากากเพื่อปกป้องตัวเอง",
						"hindi": "यह खुद को बचाने के लिए एक नकाब होगा।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "eira"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"speaker": "eira",
					"spot": [
						1,
						3
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "그의 비밀을 알게 된 이상… 대공은 당신들을 곱게 보내지 않을 겁니다.",
						"english": "Now that you know his secret... the Grand Duke won't let you leave easily.",
						"japanese": "彼の秘密を知ってしまった以上…大公はあなたたちを無事には帰さないでしょう。",
						"chinese": "既然你们知道了他的秘密……大公是不会轻易放过你们的。",
						"french": "Maintenant que vous connaissez son secret... le Grand-Duc ne vous laissera pas partir facilement.",
						"spanish": "Ahora que conocéis su secreto... el Gran Duque no os dejará marchar fácilmente.",
						"vietnamese": "Một khi đã biết bí mật của hắn... Đại Công tước sẽ không để các ngươi rời đi yên ổn đâu.",
						"thai": "ในเมื่อเจ้ารู้ความลับของเขาแล้ว... ท่านดยุกใหญ่คงไม่ปล่อยพวกเจ้าไปง่ายๆ หรอก",
						"hindi": "अब जब तुम उसका रहस्य जान गए हो... ग्रैंड ड्यूक तुम्हें आसानी से जाने नहीं देगा।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "각오했어.",
						"english": "I'm ready for it.",
						"japanese": "覚悟してる。",
						"chinese": "我已经做好准备了。",
						"french": "Nous sommes prêts.",
						"spanish": "Estamos listos.",
						"vietnamese": "Đã chuẩn bị sẵn sàng rồi.",
						"thai": "ข้าพร้อมแล้ว",
						"hindi": "मैं तैयार हूँ।"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 산의 룬이 심상치 않아요. 대공이 룬의 힘을 이용하려 하는 것 같아요.",
						"english": "The runes on this mountain are unusual. It seems the Grand Duke is trying to harness their power.",
						"japanese": "この山のルーンは尋常じゃない。大公がルーンの力を利用しようとしているみたい。",
						"chinese": "这座山的符文非同寻常。大公似乎想利用符文的力量。",
						"french": "Les runes de cette montagne sont étranges. Il semble que le Grand-Duc veuille utiliser leur pouvoir.",
						"spanish": "Las runas de esta montaña son inusuales. Parece que el Gran Duque intenta utilizar su poder.",
						"vietnamese": "Các rune trên ngọn núi này thật bất thường. Có vẻ như Đại Công tước đang cố gắng lợi dụng sức mạnh của chúng.",
						"thai": "รูนบนภูเขานี้ไม่ธรรมดาเลย ดูเหมือนท่านดยุกใหญ่กำลังพยายามใช้พลังของมัน",
						"hindi": "इस पहाड़ पर मौजूद रुण असामान्य हैं। लगता है ग्रैंड ड्यूक उनकी शक्ति का उपयोग करना चाहता है।"
					},
					"type": "speech",
					"speaker": "eira",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "룬의 힘…?",
						"english": "The power of the runes...?",
						"japanese": "ルーンの力…？",
						"chinese": "符文的力量……？",
						"french": "Le pouvoir des runes...?",
						"spanish": "¿El poder de las runas...?",
						"vietnamese": "Sức mạnh của rune...?",
						"thai": "พลังของรูน...?",
						"hindi": "रुणों की शक्ति...?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "아마… 따뜻함을 위한 것이겠죠. 그의 외로움을 채우기 위한…",
						"english": "Perhaps... for warmth. To fill his loneliness...",
						"japanese": "おそらく…暖かさのためでしょう。彼の孤独を満たすために…",
						"chinese": "也许……是为了温暖吧。为了填补他的孤独……",
						"french": "Peut-être... pour la chaleur. Pour combler sa solitude...",
						"spanish": "Quizás... para conseguir calor. Para llenar su soledad...",
						"vietnamese": "Có lẽ... là vì sự ấm áp. Để lấp đầy sự cô đơn của hắn...",
						"thai": "บางที... ก็เพื่อความอบอุ่น เพื่อเติมเต็มความเหงาของเขา...",
						"hindi": "शायद... गर्मी के लिए। उसकी एकाकीपन को भरने के लिए..."
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "감히 왕의 비밀을 들추려 하다니… 용서 못 해!",
						"english": "How dare you uncover the king's secret... I won't forgive you!",
						"japanese": "愚かにも王の秘密を暴こうとするとは…許さん！",
						"chinese": "竟敢揭露王的秘密……不可饶恕！",
						"french": "Comment osez-vous révéler le secret du roi... Je ne vous pardonnerai jamais !",
						"spanish": "¿Cómo osáis desvelar el secreto del rey...? ¡No os lo perdonaré!",
						"vietnamese": "Dám vạch trần bí mật của đức vua... Không thể tha thứ!",
						"thai": "บังอาจมาเปิดเผยความลับของราชา... ข้าไม่ให้อภัย!",
						"hindi": "राजा के रहस्य को उजागर करने की तुम्हारी हिम्मत कैसे हुई... मैं तुम्हें माफ़ नहीं करूँगा!"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "진실은 밝혀져야 해!",
						"english": "The truth must be revealed!",
						"japanese": "真実は明らかにされなければならない！",
						"chinese": "真相必须被揭露！",
						"french": "La vérité doit être révélée !",
						"spanish": "¡La verdad debe ser revelada!",
						"vietnamese": "Sự thật phải được phơi bày!",
						"thai": "ความจริงต้องถูกเปิดเผย!",
						"hindi": "सच्चाई सामने आनी चाहिए!"
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "네놈들의 오만함이 이 눈 속에 묻힐 것이다!",
						"english": "Your arrogance will be buried in this snow!",
						"japanese": "貴様らの傲慢さがこの雪の中に埋もれるだろう！",
						"chinese": "你们的傲慢将埋葬在这雪中！",
						"french": "Votre arrogance sera ensevelie sous cette neige !",
						"spanish": "¡Vuestra arrogancia será sepultada en esta nieve!",
						"vietnamese": "Sự ngạo mạn của các ngươi sẽ bị chôn vùi trong tuyết này!",
						"thai": "ความโอหังของพวกเจ้าจะถูกฝังอยู่ในหิมะนี้!",
						"hindi": "तुम्हारा अहंकार इस बर्फ़ में दब जाएगा!"
					}
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "설산의 깊은 곳. 거대한 그림자가 모든 것을 집어삼켰다.",
						"english": "Deep in the snowy mountains. A colossal shadow devoured everything.",
						"japanese": "雪山の奥深く。巨大な影がすべてを飲み込んだ。",
						"chinese": "雪山深处。一个巨大的影子吞噬了一切。",
						"french": "Au plus profond des montagnes enneigées. Une ombre colossale a tout dévoré.",
						"spanish": "En lo profundo de las montañas nevadas. Una sombra colosal lo devoró todo.",
						"vietnamese": "Sâu trong núi tuyết. Một cái bóng khổng lồ nuốt chửng mọi thứ.",
						"thai": "ลึกเข้าไปในภูเขาหิมะ เงาขนาดมหึมากลืนกินทุกสิ่ง",
						"hindi": "बर्फीले पहाड़ों की गहराई में। एक विशाल छाया ने सब कुछ निगल लिया।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 것들! 왕의 분노를 감당할 수 있겠느냐!",
						"english": "Fools! Can you withstand the king's wrath?!",
						"japanese": "愚か者ども！王の怒りに耐えられるか！",
						"chinese": "蠢货！你们能承受王的愤怒吗！",
						"french": "Imbéciles ! Pouvez-vous supporter la colère du roi ?",
						"spanish": "¡Tontos! ¿Podéis soportar la ira del rey?",
						"vietnamese": "Lũ ngu ngốc! Ngươi có chịu nổi cơn thịnh nộ của nhà vua không?!",
						"thai": "พวกโง่! พวกแกจะต้านทานความพิโรธของราชาได้หรือ?!",
						"hindi": "मूर्खों! क्या तुम राजा के क्रोध का सामना कर सकते हो?!"
					}
				},
				{
					"content": {
						"korean": "젠장… 아직은 아니야!",
						"english": "Damn it... not yet!",
						"japanese": "ちくしょう…まだだ！",
						"chinese": "该死……还没完！",
						"french": "Mince... pas encore !",
						"spanish": "Maldita sea... ¡todavía no!",
						"vietnamese": "Chết tiệt… chưa phải lúc!",
						"thai": "ให้ตายสิ... ยังไม่จบ!",
						"hindi": "धिक्कार है... अभी नहीं!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 쓰러졌다. 그 뒤에 가려진 진실의 조각이 드러났다.",
						"english": "The colossal shadow fell. A fragment of the truth, hidden behind it, was revealed.",
						"japanese": "巨大な影が倒れた。その陰に隠されていた真実の断片が明らかになった。",
						"chinese": "巨大的阴影倒下了。隐藏在其后的真相碎片显露出来。",
						"french": "L'ombre colossale est tombée. Un fragment de vérité, caché derrière elle, a été révélé.",
						"spanish": "La colosal sombra cayó. Un fragmento de la verdad, oculto tras ella, fue revelado.",
						"vietnamese": "Bóng tối khổng lồ sụp đổ. Một mảnh sự thật, ẩn giấu phía sau, đã được tiết lộ.",
						"thai": "เงาขนาดมหึมาล้มลง ชิ้นส่วนแห่งความจริงที่ซ่อนอยู่เบื้องหลังได้ปรากฏขึ้น",
						"hindi": "विशाल छाया गिर गई। उसके पीछे छिपा सच्चाई का एक टुकड़ा सामने आया।"
					}
				},
				{
					"duration_ms": 500,
					"spot": [
						4,
						1
					],
					"speaker": "eira",
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "eira",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…이것이 대공을 지키던 힘인가요.",
						"english": "...Is this the power that protected the Grand Duke?",
						"japanese": "…これが大公を守っていた力なのか。",
						"chinese": "……这就是守护大公的力量吗？",
						"french": "...Est-ce le pouvoir qui protégeait le Grand-Duc ?",
						"spanish": "...¿Es este el poder que protegía al Gran Duque?",
						"vietnamese": "...Đây là sức mạnh bảo vệ Đại Công tước sao?",
						"thai": "...นี่คือพลังที่ปกป้องท่านดยุกใหญ่หรือ?",
						"hindi": "...क्या यही वह शक्ति थी जो ग्रैंड ड्यूक की रक्षा कर रही थी?"
					}
				},
				{
					"content": {
						"korean": "핀 대공은 어디에 있지?",
						"english": "Where is Grand Prince Finn?",
						"japanese": "フィン大公はどこに？",
						"chinese": "芬恩大公在哪？",
						"french": "Où est le Grand Prince Finn ?",
						"spanish": "¿Dónde está el Gran Príncipe Finn?",
						"vietnamese": "Đại Hoàng tử Finn đâu rồi?",
						"thai": "แกรนด์พรินซ์ฟินน์อยู่ที่ไหน?",
						"hindi": "ग्रैंड प्रिंस फिन कहाँ है?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"emotion": "sad",
					"content": {
						"korean": "그는… 자신의 온기를 찾아 떠났을 겁니다. 언젠가 다시 나타나겠죠.",
						"english": "He... must have left to find his warmth. He will reappear someday.",
						"japanese": "彼は…自分の温もりを探しに去ったのでしょう。いつかまた現れるはずです。",
						"chinese": "他……一定是去寻找他的温暖了。总有一天他会再出现的。",
						"french": "Il... est parti retrouver sa chaleur. Il réapparaîtra un jour.",
						"spanish": "Él... debe haberse ido a buscar su calidez. Reaparecerá algún día.",
						"vietnamese": "Anh ấy… chắc đã đi tìm hơi ấm của mình rồi. Sẽ có ngày anh ấy xuất hiện trở lại thôi.",
						"thai": "เขา... คงจากไปเพื่อตามหาความอบอุ่นของตัวเอง สักวันหนึ่งเขาจะปรากฏตัวอีกครั้ง",
						"hindi": "वह... अपनी गर्माहट खोजने चला गया होगा। किसी दिन वह फिर से प्रकट होगा।"
					}
				},
				{
					"content": {
						"korean": "에이라의 목격담은 핀 대공의 허세 뒤에 숨겨진 진실의 실마리가 되었다.",
						"english": "Eira's testimony became a clue to the truth hidden behind Grand Prince Finn's bluster.",
						"japanese": "エイラの目撃談は、フィン大公の虚勢の裏に隠された真実の手がかりとなった。",
						"chinese": "艾拉的证词成为了揭露芬恩大公虚张声势背后真相的线索。",
						"french": "Le témoignage d'Eira est devenu un indice de la vérité cachée derrière les fanfaronnades du Grand Prince Finn.",
						"spanish": "El testimonio de Eira se convirtió en una pista de la verdad oculta tras la bravuconería del Gran Príncipe Finn.",
						"vietnamese": "Lời khai của Eira đã trở thành manh mối cho sự thật ẩn giấu đằng sau sự khoe khoang của Đại Hoàng tử Finn.",
						"thai": "คำให้การของไอรากลายเป็นเบาะแสของความจริงที่ซ่อนอยู่เบื้องหลังความโอ้อวดของแกรนด์พรินซ์ฟินน์",
						"hindi": "ऐरा की गवाही ग्रैंड प्रिंस फिन के दिखावे के पीछे छिपी सच्चाई का सुराग बन गई।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이제, 그를 멈출 방법만이 남았다.",
						"english": "Now, only a way to stop him remains.",
						"japanese": "今、彼を止める方法だけが残された。",
						"chinese": "现在，只剩下阻止他的办法了。",
						"french": "Maintenant, il ne reste qu'un moyen de l'arrêter.",
						"spanish": "Ahora, solo queda una forma de detenerlo.",
						"vietnamese": "Giờ đây, chỉ còn một cách để ngăn chặn hắn.",
						"thai": "ตอนนี้ เหลือเพียงวิธีที่จะหยุดเขาเท่านั้น",
						"hindi": "अब, उसे रोकने का एक ही तरीका बचा है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"새로운 길을 찾던 탐험대.",
			"설산의 기록자가 그들을 맞이했다.",
			"핀 대공의 감춰진 진실이 드러날 순간이 다가온다."
		],
		"english": [
			"The expedition sought a new path.",
			"The chronicler of the snowy mountains greeted them.",
			"The moment the hidden truth of Grand Duke Finn will be revealed approaches."
		],
		"japanese": [
			"新たな道を探していた探検隊。",
			"雪山の記録者が彼らを迎えた。",
			"フィン大公の隠された真実が明かされる瞬間が近づく。"
		],
		"chinese": [
			"探险队正在寻找新的道路。",
			"雪山记录者迎接了他们。",
			"芬大公隐藏的真相即将揭露。"
		],
		"french": [
			"L'expédition cherchait une nouvelle voie.",
			"Le chroniqueur des montagnes enneigées les accueillit.",
			"Le moment où la vérité cachée du Grand-Duc Finn sera révélée approche."
		],
		"spanish": [
			"La expedición buscaba un nuevo camino.",
			"El cronista de las montañas nevadas los recibió.",
			"Se acerca el momento en que la verdad oculta del Gran Duque Finn será revelada."
		],
		"vietnamese": [
			"Đoàn thám hiểm đang tìm một con đường mới.",
			"Người ghi chép của núi tuyết đã chào đón họ.",
			"Khoảnh khắc sự thật ẩn giấu của Đại công tước Finn sắp được tiết lộ."
		],
		"thai": [
			"คณะสำรวจกำลังค้นหาเส้นทางใหม่",
			"ผู้บันทึกแห่งภูเขาหิมะได้ต้อนรับพวกเขา",
			"ช่วงเวลาที่ความจริงที่ซ่อนอยู่ของแกรนด์ดยุกฟินน์จะถูกเปิดเผยใกล้เข้ามาแล้ว"
		],
		"hindi": [
			"अभियान दल एक नया रास्ता खोज रहा था।",
			"बर्फ़ीले पहाड़ों के इतिहासकार ने उनका स्वागत किया।",
			"ग्रैंड ड्यूक फिन के छिपे हुए सच के उजागर होने का क्षण निकट आ रहा है।"
		]
	}
} as const;
