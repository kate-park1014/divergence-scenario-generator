export const scenario_snowy_finn_29_03 = {
	"scenario_id": "snowy_finn_29_03",
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
		},
		"boris": {
			"name": {
				"korean": "보리스",
				"english": "Boris",
				"japanese": "ボリス",
				"chinese": "鲍里斯",
				"french": "Boris",
				"spanish": "Boris",
				"vietnamese": "Boris",
				"thai": "บอริส",
				"hindi": "बोरिस"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8db2ee50-a24d-43cf-a3ec-fad83142f500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/961dfd96-9db1-42aa-a15b-82ba7d1ae700/public"
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
						"korean": "얼음 왕좌는 더욱 위태로워졌다. 균열 사이로 차가운 바람이 불어왔다.",
						"english": "The Ice Throne grew even more precarious. A cold wind blew through its cracks.",
						"japanese": "氷の玉座はさらに危うくなった。亀裂から冷たい風が吹き込んでくる。",
						"chinese": "冰封王座愈发岌岌可危。寒风透过裂缝呼啸而过。",
						"french": "Le Trône de Glace devint encore plus précaire. Un vent froid soufflait à travers ses fissures.",
						"spanish": "El Trono de Hielo se volvió aún más precario. Un viento frío soplaba entre sus grietas.",
						"vietnamese": "Ngai băng càng thêm lung lay. Gió lạnh thổi qua những vết nứt.",
						"thai": "บัลลังก์น้ำแข็งยิ่งสั่นคลอน ลมหนาวพัดผ่านรอยร้าว",
						"hindi": "बर्फीला सिंहासन और भी अनिश्चित हो गया। दरारों से ठंडी हवा चल रही थी।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이젠 정말 무너질 것 같아.",
						"english": "It feels like it's really going to collapse now.",
						"japanese": "もう本当に崩れ落ちそうだ。",
						"chinese": "感觉它现在真的要塌了。",
						"french": "On dirait que ça va vraiment s'effondrer maintenant.",
						"spanish": "Parece que se va a derrumbar en cualquier momento.",
						"vietnamese": "Có vẻ như nó sắp sụp đổ thật rồi.",
						"thai": "ดูเหมือนว่ามันจะพังทลายลงจริงๆ แล้ว",
						"hindi": "अब तो सच में ढहने वाला है।"
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "eira",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"emotion": "base",
					"content": {
						"korean": "…이곳은 오래된 기록과 다르군요.",
						"english": "...This place is different from the old records.",
						"japanese": "…ここは古い記録とは違う。",
						"chinese": "……这里与旧记载不同。",
						"french": "...Cet endroit est différent des anciens registres.",
						"spanish": "...Este lugar es diferente de los antiguos registros.",
						"vietnamese": "...Nơi này khác với những ghi chép cũ.",
						"thai": "...ที่นี่แตกต่างจากบันทึกเก่า",
						"hindi": "...यह जगह पुराने अभिलेखों से अलग है।"
					}
				},
				{
					"content": {
						"korean": "당신은?",
						"english": "And you?",
						"japanese": "あなたは？",
						"chinese": "你是？",
						"french": "Et vous ?",
						"spanish": "¿Y tú?",
						"vietnamese": "Bạn là ai?",
						"thai": "คุณคือใคร?",
						"hindi": "तुम कौन हो?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "에이라. 잊힌 역사를 기록하는 자.",
						"english": "Ayla. The one who chronicles forgotten history.",
						"japanese": "アイラ。忘れられた歴史を記録する者。",
						"chinese": "艾拉。记录遗忘历史之人。",
						"french": "Ayla. Celle qui consigne l'histoire oubliée.",
						"spanish": "Ayla. La que registra la historia olvidada.",
						"vietnamese": "Ayla. Kẻ ghi chép lịch sử bị lãng quên.",
						"thai": "ไอล่า ผู้บันทึกประวัติศาสตร์ที่ถูกลืม",
						"hindi": "आयला। भूली हुई इतिहास की लेखिका।"
					},
					"speaker": "eira",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "대공 핀에 대해 할 얘기가 있어요.",
						"english": "I have something to tell you about Archduke Finn.",
						"japanese": "フィン大公についてお話しがあります。",
						"chinese": "我有关于芬大公的事情要说。",
						"french": "J'ai quelque chose à vous dire à propos de l'Archiduc Finn.",
						"spanish": "Tengo algo que decirte sobre el Gran Duque Finn.",
						"vietnamese": "Tôi có chuyện muốn nói về Đại Công tước Finn.",
						"thai": "ฉันมีเรื่องจะเล่าเกี่ยวกับอาร์คดยุกฟินน์",
						"hindi": "मुझे आर्कड्यूक फिन के बारे में कुछ बताना है।"
					},
					"type": "speech",
					"speaker": "eira"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "eira",
					"type": "direction"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "핀 대공은, 원래 남쪽 나라를 찾아 헤매던 펭귄이었어요.",
						"english": "Grand Duke Finn was originally a penguin wandering in search of a southern land.",
						"japanese": "フィン大公は、元々南の国を探し求めていたペンギンでした。",
						"chinese": "芬恩大公原本是一只在寻找南方国度的企鹅。",
						"french": "Le Grand-Duc Finn était à l'origine un pingouin errant à la recherche d'un pays du sud.",
						"spanish": "El Gran Duque Finn era originalmente un pingüino que deambulaba en busca de una tierra del sur.",
						"vietnamese": "Đại Công tước Finn vốn là một chú chim cánh cụt lang thang tìm kiếm xứ sở phương nam.",
						"thai": "แกรนด์ดยุกฟินน์เดิมทีเป็นนกเพนกวินที่ร่อนเร่พเนจรตามหาดินแดนทางใต้",
						"hindi": "ग्रैंड ड्यूक फिन मूल रूप से एक पेंग्विन था जो दक्षिणी भूमि की तलाश में भटक रहा था।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "남쪽 나라?",
						"english": "A southern land?",
						"japanese": "南の国？",
						"chinese": "南方国度？",
						"french": "Un pays du sud ?",
						"spanish": "¿Una tierra del sur?",
						"vietnamese": "Xứ sở phương nam ư?",
						"thai": "ดินแดนทางใต้?",
						"hindi": "दक्षिणी भूमि?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "네. 따뜻한 곳을 찾아 여기까지 온 거죠.",
						"english": "Yes. He came all the way here looking for a warm place.",
						"japanese": "はい。暖かい場所を探してここまで来たんです。",
						"chinese": "是的。他一路来到这里，就是为了寻找一个温暖的地方。",
						"french": "Oui. Il est venu jusqu'ici à la recherche d'un endroit chaud.",
						"spanish": "Sí. Llegó hasta aquí buscando un lugar cálido.",
						"vietnamese": "Vâng. Cậu ấy đã đến tận đây để tìm một nơi ấm áp.",
						"thai": "ใช่ เขามาถึงที่นี่เพื่อหาสถานที่ที่อบอุ่น",
						"hindi": "हाँ। वह एक गर्म जगह की तलाश में यहाँ तक आया।"
					}
				},
				{
					"spot": [
						2,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "boris",
					"type": "direction"
				},
				{
					"emotion": "happy",
					"content": {
						"korean": "대공 전하! 이거 보십시오! 전하 침실에서 발견했습니다!",
						"english": "Your Highness! Look at this! I found it in Your Highness's bedroom!",
						"japanese": "大公殿下！これをご覧ください！殿下の寝室で発見しました！",
						"chinese": "大公殿下！请看这个！我们在殿下的卧室里发现了它！",
						"french": "Votre Altesse ! Regardez ça ! Je l'ai trouvé dans la chambre de Votre Altesse !",
						"spanish": "¡Su Alteza! ¡Mire esto! ¡Lo encontré en el dormitorio de Su Alteza!",
						"vietnamese": "Thưa Đại Công tước! Xin hãy xem cái này! Tôi đã tìm thấy nó trong phòng ngủ của Người!",
						"thai": "ฝ่าบาท! ดูนี่สิ! ข้าพบมันในห้องบรรทมของฝ่าบาท!",
						"hindi": "महामहिम! इसे देखिए! मैंने इसे महामहिम के शयनकक्ष में पाया!"
					},
					"speaker": "boris",
					"type": "speech"
				},
				{
					"speaker": "boris",
					"type": "speech",
					"content": {
						"korean": "이거, 따뜻해 보입니다!",
						"english": "This looks warm!",
						"japanese": "これ、暖かそうです！",
						"chinese": "这个看起来很暖和！",
						"french": "Ça a l'air chaud !",
						"spanish": "¡Esto parece cálido!",
						"vietnamese": "Cái này, trông có vẻ ấm áp!",
						"thai": "ดูอบอุ่นจังเลย!",
						"hindi": "यह गर्म लग रहा है!"
					},
					"emotion": "happy"
				},
				{
					"content": {
						"korean": "…전기장판?",
						"english": "...An electric blanket?",
						"japanese": "…電気毛布？",
						"chinese": "……电热毯？",
						"french": "...Une couverture chauffante ?",
						"spanish": "...¿Una manta eléctrica?",
						"vietnamese": "...Chăn điện ư?",
						"thai": "...ผ้าห่มไฟฟ้า?",
						"hindi": "...एक इलेक्ट्रिक ब्लैंकेट?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "남쪽 나라, 전기장판… 설마.",
						"english": "Southern land, electric blanket... No way.",
						"japanese": "南の国、電気毛布…まさか。",
						"chinese": "南方国度，电热毯……难道说。",
						"french": "Pays du sud, couverture chauffante... Impossible.",
						"spanish": "Tierra del sur, manta eléctrica... No puede ser.",
						"vietnamese": "Xứ sở phương nam, chăn điện... Chẳng lẽ nào.",
						"thai": "ดินแดนทางใต้, ผ้าห่มไฟฟ้า... ไม่จริงน่า",
						"hindi": "दक्षिणी भूमि, इलेक्ट्रिक ब्लैंकेट... कहीं ऐसा तो नहीं।"
					}
				},
				{
					"content": {
						"korean": "그 설마가 맞아요. 핀은 그저 따뜻하고 싶었던 거예요.",
						"english": "That \"no way\" is true. Finn just wanted to be warm.",
						"japanese": "その「まさか」が本当なんです。フィンはただ暖かかっただけなんですよ。",
						"chinese": "没错，就是你想的那样。芬恩只是想取暖而已。",
						"french": "C'est bien ça. Finn voulait juste avoir chaud.",
						"spanish": "Ese \"no puede ser\" es cierto. Finn solo quería estar cálido.",
						"vietnamese": "Đúng là điều đó. Finn chỉ muốn được ấm áp thôi.",
						"thai": "สิ่งที่ 'ไม่จริงน่า' นั่นแหละคือเรื่องจริง ฟินน์แค่ต้องการความอบอุ่น",
						"hindi": "वह 'कहीं ऐसा तो नहीं' सच है। फिन बस गर्म रहना चाहता था।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "eira"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "eira",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "그는 설산의 왕이 되고 싶었던 게 아니에요.",
						"english": "He didn't want to be the King of the Snow Mountain.",
						"japanese": "彼は雪山の王になりたかったわけじゃないんです。",
						"chinese": "他并不是想成为雪山之王。",
						"french": "Il ne voulait pas être le Roi de la Montagne de Neige.",
						"spanish": "Él no quería ser el Rey de la Montaña Nevada.",
						"vietnamese": "Cậu ấy không muốn trở thành Vua của núi tuyết đâu.",
						"thai": "เขาไม่ได้อยากเป็นราชาแห่งภูเขาหิมะ",
						"hindi": "वह बर्फीले पहाड़ का राजा नहीं बनना चाहता था।"
					},
					"emotion": "base",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "그저, 추위를 피할 곳이 필요했던 거죠.",
						"english": "He just needed a place to escape the cold.",
						"japanese": "ただ、寒さを避ける場所が必要だっただけなんです。",
						"chinese": "他只是需要一个避寒的地方。",
						"french": "Il avait juste besoin d'un endroit pour échapper au froid.",
						"spanish": "Solo necesitaba un lugar para escapar del frío.",
						"vietnamese": "Cậu ấy chỉ cần một nơi để tránh rét thôi.",
						"thai": "เขาแค่อยากได้ที่หลบหนาว",
						"hindi": "उसे बस ठंड से बचने के लिए एक जगह चाहिए थी।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "그래서 이렇게까지 허세를 부린 거야?",
						"english": "So you bluffed this much?",
						"japanese": "だから、そこまで虚勢を張ったのか？",
						"chinese": "所以你才这么虚张声势吗？",
						"french": "C'est donc pour ça que tu as bluffé à ce point ?",
						"spanish": "¿Así que todo esto fue un farol?",
						"vietnamese": "Vậy nên ngươi mới khoe khoang đến vậy sao?",
						"thai": "นี่เลยเป็นสาเหตุที่คุณอวดดีขนาดนี้เหรอ?",
						"hindi": "तो क्या यह सब केवल दिखावा था?"
					},
					"emotion": "angry"
				},
				{
					"spot": [
						2,
						2
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "boris"
				},
				{
					"speaker": "boris",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "대공 전하 침대 아래에 이게 깔려있었습니다!",
						"english": "This was found under His Highness's bed!",
						"japanese": "大公殿下のベッドの下にこれが敷いてありました！",
						"chinese": "这就铺在大公殿下的床下！",
						"french": "Ceci était étendu sous le lit de Son Altesse !",
						"spanish": "¡Esto estaba debajo de la cama de Su Alteza el Gran Duque!",
						"vietnamese": "Cái này được trải dưới giường của Điện hạ Đại Công tước!",
						"thai": "นี่ถูกซ่อนอยู่ใต้เตียงขององค์อุปราช!",
						"hindi": "यह महामहिम के बिस्तर के नीचे बिछा हुआ था!"
					}
				},
				{
					"emotion": "happy",
					"content": {
						"korean": "아주 폭신해 보입니다!",
						"english": "It looks very soft!",
						"japanese": "とてもふかふかしていそうです！",
						"chinese": "看起来非常柔软！",
						"french": "Ça a l'air très moelleux !",
						"spanish": "¡Parece muy mullido!",
						"vietnamese": "Trông có vẻ rất êm ái!",
						"thai": "ดูนุ่มมากเลย!",
						"hindi": "यह बहुत नरम लग रहा है!"
					},
					"type": "speech",
					"speaker": "boris"
				},
				{
					"content": {
						"korean": "보리스, 그만 좀 해!",
						"english": "Boris, stop it!",
						"japanese": "ボリス、もうやめろ！",
						"chinese": "鲍里斯，适可而止吧！",
						"french": "Boris, arrête ça !",
						"spanish": "¡Boris, basta ya!",
						"vietnamese": "Boris, dừng lại đi!",
						"thai": "บอริส หยุดเถอะ!",
						"hindi": "बोरिस, बस करो!"
					},
					"emotion": "angry",
					"speaker": "character_1",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "핀은 외로웠어요. 그리고… 두려웠죠.",
						"english": "Finn was lonely. And... afraid.",
						"japanese": "フィンは寂しかったんです。そして…恐れていたんです。",
						"chinese": "芬恩很孤独。而且……他很害怕。",
						"french": "Finn était seul. Et... il avait peur.",
						"spanish": "Finn estaba solo. Y... tenía miedo.",
						"vietnamese": "Finn cô đơn. Và... sợ hãi.",
						"thai": "ฟินน์เหงา และ...หวาดกลัว",
						"hindi": "फिन अकेला था। और... डरा हुआ था।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이 모든 게, 그의 절박함에서 시작된 겁니다.",
						"english": "All of this began from his desperation.",
						"japanese": "この全ては、彼の絶望から始まったのです。",
						"chinese": "这一切都源于他的绝望。",
						"french": "Tout cela a commencé par son désespoir.",
						"spanish": "Todo esto comenzó por su desesperación.",
						"vietnamese": "Tất cả điều này đều bắt nguồn từ sự tuyệt vọng của anh ta.",
						"thai": "ทั้งหมดนี้เริ่มต้นจากความสิ้นหวังของเขา",
						"hindi": "यह सब उसकी हताशा से शुरू हुआ।"
					},
					"type": "speech",
					"speaker": "eira"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "얼음 왕좌는 이제 금방이라도 부서질 듯 위태로웠다.",
						"english": "The Ice Throne was now so precarious, it seemed it could shatter at any moment.",
						"japanese": "氷の玉座は今にも崩れ落ちそうなほど危うかった。",
						"chinese": "冰之王座现在摇摇欲坠，仿佛随时都会崩塌。",
						"french": "Le Trône de Glace était désormais si précaire qu'il semblait pouvoir se briser à tout moment.",
						"spanish": "El Trono de Hielo estaba ahora tan precario que parecía a punto de romperse.",
						"vietnamese": "Ngai vàng Băng giờ đây lung lay, như sắp vỡ vụn bất cứ lúc nào.",
						"thai": "บัลลังก์น้ำแข็งตอนนี้ดูเปราะบางมาก ราวกับจะแตกสลายได้ทุกเมื่อ",
						"hindi": "बर्फ का सिंहासन अब इतना डगमगा रहा था कि मानो किसी भी पल टूट जाएगा।"
					},
					"emotion": "base"
				},
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "eira",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "이제 진실을 마주할 시간입니다.",
						"english": "It is now time to face the truth.",
						"japanese": "さあ、真実と向き合う時です。",
						"chinese": "现在是时候面对真相了。",
						"french": "Il est temps d'affronter la vérité.",
						"spanish": "Es hora de enfrentar la verdad.",
						"vietnamese": "Đã đến lúc đối mặt với sự thật.",
						"thai": "ถึงเวลาเผชิญหน้ากับความจริงแล้ว",
						"hindi": "अब सच का सामना करने का समय है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "핀 대공은 지금 어디에 있어?",
						"english": "Where is Grand Duke Finn now?",
						"japanese": "フィン大公は今どこにいる？",
						"chinese": "芬恩大公现在在哪？",
						"french": "Où est le Grand Duc Finn maintenant ?",
						"spanish": "¿Dónde está el Gran Duque Finn ahora?",
						"vietnamese": "Đại Công tước Finn đang ở đâu?",
						"thai": "แกรนด์ดุ๊กฟินน์อยู่ที่ไหนตอนนี้?",
						"hindi": "ग्रैंड ड्यूक फिन अब कहाँ है?"
					},
					"emotion": "base"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "저 위, 가장 높은 곳에.",
						"english": "Up there, at the very top.",
						"japanese": "あの上、最も高い場所に。",
						"chinese": "在那上面，最高的地方。",
						"french": "Là-haut, au plus haut.",
						"spanish": "Allá arriba, en el lugar más alto.",
						"vietnamese": "Ở trên đó, nơi cao nhất.",
						"thai": "บนนั้น ที่สูงสุด",
						"hindi": "ऊपर, सबसे ऊँची जगह पर।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "그는 혼자 싸우고 있습니다. 추위와… 자신과.",
						"english": "He fights alone. With the cold... and himself.",
						"japanese": "彼は一人で戦っています。寒さと…自分自身と。",
						"chinese": "他独自战斗着。与寒冷…以及他自己。",
						"french": "Il se bat seul. Contre le froid... et contre lui-même.",
						"spanish": "Él lucha solo. Contra el frío... y contra sí mismo.",
						"vietnamese": "Anh ta chiến đấu một mình. Với cái lạnh... và với chính mình.",
						"thai": "เขากำลังต่อสู้เพียงลำพัง กับความหนาวเหน็บ... และตัวเขาเอง",
						"hindi": "वह अकेला लड़ रहा है। ठंड से... और खुद से।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "우리가 끝내야 해.",
						"english": "We have to end this.",
						"japanese": "私たちが終わらせなければなりません。",
						"chinese": "我们必须结束这一切。",
						"french": "Nous devons en finir.",
						"spanish": "Tenemos que acabar con esto.",
						"vietnamese": "Chúng ta phải kết thúc chuyện này.",
						"thai": "เราต้องยุติเรื่องนี้",
						"hindi": "हमें यह खत्म करना होगा।"
					}
				},
				{
					"content": {
						"korean": "그에게 필요한 건, 진정한 평화일 거야.",
						"english": "What he needs is true peace.",
						"japanese": "彼に必要なのは、真の平和でしょう。",
						"chinese": "他所需要的是真正的平静。",
						"french": "Ce dont il a besoin, c'est la vraie paix.",
						"spanish": "Lo que él necesita es verdadera paz.",
						"vietnamese": "Điều anh ấy cần là sự bình yên thực sự.",
						"thai": "สิ่งที่เขาต้องการคือความสงบสุขที่แท้จริง",
						"hindi": "उसे जिस चीज़ की ज़रूरत है, वह सच्ची शांति है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_2"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "얼음 그림자가 모든 것을 집어삼켰다.",
						"english": "The ice shadow consumed everything.",
						"japanese": "氷の影がすべてを飲み込んだ。",
						"chinese": "冰之影吞噬了一切。",
						"french": "L'ombre de glace a tout englouti.",
						"spanish": "La sombra de hielo lo devoró todo.",
						"vietnamese": "Bóng băng đã nuốt chửng mọi thứ.",
						"thai": "เงาแห่งน้ำแข็งกลืนกินทุกสิ่ง",
						"hindi": "बर्फ़ीली परछाई ने सब कुछ निगल लिया।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "크하하! 너희는… 이 추위를 이길 수 없어!",
						"english": "Hahaha! You... can't beat this chill!",
						"japanese": "クハハ！お前たちは…この寒さには勝てない！",
						"chinese": "哈哈哈！你们…赢不了这寒冷！",
						"french": "Hahaha ! Vous... ne pouvez pas vaincre ce froid !",
						"spanish": "¡Jajaja! ¡Ustedes... no pueden con este frío!",
						"vietnamese": "Khà khà! Các ngươi... không thể thắng được cái lạnh này đâu!",
						"thai": "คิกคิก! พวกเจ้า...ไม่อาจเอาชนะความหนาวนี้ได้หรอก!",
						"hindi": "हाहाहा! तुम लोग… इस ठंड को हरा नहीं सकते!"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…아직 끝나지 않았어. 핀의 따뜻함을 찾아줄 거야!",
						"english": "...It's not over yet. I'll find Finn's warmth!",
						"japanese": "…まだ終わってない。フィンの温もりを見つけるんだ！",
						"chinese": "…还没结束。我会找到芬恩的温暖！",
						"french": "...Ce n'est pas encore fini. Je retrouverai la chaleur de Finn !",
						"spanish": "...Aún no ha terminado. ¡Encontraré la calidez de Finn!",
						"vietnamese": "...Chưa kết thúc đâu. Ta sẽ tìm lại hơi ấm của Finn!",
						"thai": "...ยังไม่จบหรอก. ข้าจะหาความอบอุ่นของฟินน์ให้เจอ!",
						"hindi": "...अभी खत्म नहीं हुआ है। मैं फिन की गरमाहट ढूंढ लूंगा!"
					},
					"emotion": "angry"
				},
				{
					"action": "enter",
					"spot": [
						2,
						2
					],
					"type": "direction",
					"speaker": "boris",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "boris",
					"content": {
						"korean": "으으… 너무 추워요…!",
						"english": "Ugh... It's so cold...!",
						"japanese": "うう…寒すぎます…！",
						"chinese": "呃啊…好冷啊…！",
						"french": "Ouh... Il fait si froid... !",
						"spanish": "Ugh... ¡Qué frío hace...!",
						"vietnamese": "Ư... Lạnh quá...!",
						"thai": "อึก... หนาวเหลือเกิน...!",
						"hindi": "उफ़… बहुत ठंड है…!"
					},
					"emotion": "sad"
				},
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "eira",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "진실은… 얼어붙지 않습니다.",
						"english": "Truth... does not freeze.",
						"japanese": "真実は…凍りつきません。",
						"chinese": "真相…不会冻结。",
						"french": "La vérité... ne gèle pas.",
						"spanish": "La verdad... no se congela.",
						"vietnamese": "Sự thật... sẽ không đóng băng.",
						"thai": "ความจริง... ไม่แข็งตัวหรอก.",
						"hindi": "सच्चाई… जमती नहीं है।"
					}
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "얼음 그림자는 산산조각 나며 차가운 안개로 변했다.",
						"english": "The ice shadow shattered, turning into a cold mist.",
						"japanese": "氷の影は粉々に砕け散り、冷たい霧へと変わった。",
						"chinese": "冰之影支离破碎，化作冰冷的迷雾。",
						"french": "L'ombre de glace se brisa en mille morceaux, se transformant en une brume froide.",
						"spanish": "La sombra de hielo se hizo añicos, convirtiéndose en una niebla fría.",
						"vietnamese": "Bóng băng tan vỡ thành từng mảnh, biến thành màn sương lạnh giá.",
						"thai": "เงาแห่งน้ำแข็งแตกสลาย กลายเป็นหมอกเย็นยะเยือก",
						"hindi": "बर्फ़ीली परछाई बिखर गई, ठंडी धुंध में बदल गई।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…따뜻함…",
						"english": "...Warmth...",
						"japanese": "…暖かさ…",
						"chinese": "……温暖……",
						"french": "...Chaleur...",
						"spanish": "...Calidez...",
						"vietnamese": "...Ấm áp...",
						"thai": "...ความอบอุ่น...",
						"hindi": "...गरमाहट..."
					},
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "핀… 이제 정말 따뜻해질 수 있을 거야.",
						"english": "Finn... now you can truly be warm.",
						"japanese": "フィン…これで本当に暖かくなれるだろう。",
						"chinese": "芬……现在你真的能感受到温暖了。",
						"french": "Finn... maintenant tu pourras vraiment avoir chaud.",
						"spanish": "Finn... ahora podrás sentirte realmente cálido.",
						"vietnamese": "Finn... bây giờ ngươi thật sự có thể ấm áp rồi.",
						"thai": "ฟินน์... ตอนนี้เจ้าจะอบอุ่นได้จริง ๆ แล้ว",
						"hindi": "फिन... अब तुम सचमुच गर्म हो सकते हो।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "eira",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "그의 영혼이 자유로워졌습니다.",
						"english": "His soul has been set free.",
						"japanese": "彼の魂は解放されました。",
						"chinese": "他的灵魂已被释放。",
						"french": "Son âme a été libérée.",
						"spanish": "Su alma ha sido liberada.",
						"vietnamese": "Linh hồn của anh ấy đã được giải thoát.",
						"thai": "วิญญาณของเขาเป็นอิสระแล้ว",
						"hindi": "उसकी आत्मा आज़ाद हो गई है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "이제 그는 자신이 진정으로 원하는 곳으로 갈 수 있을 겁니다.",
						"english": "Now he can go to where he truly wishes to be.",
						"japanese": "これで彼は、心から望む場所へ行けるだろう。",
						"chinese": "现在他可以去他真正想去的地方了。",
						"french": "Maintenant, il peut aller là où il désire vraiment être.",
						"spanish": "Ahora podrá ir a donde verdaderamente desea estar.",
						"vietnamese": "Bây giờ anh ấy có thể đi đến nơi mình thực sự muốn.",
						"thai": "ตอนนี้เขาจะไปที่ที่เขาปรารถนาอย่างแท้จริงได้แล้ว",
						"hindi": "अब वह वहाँ जा सकता है जहाँ वह सचमुच जाना चाहता है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "eira"
				},
				{
					"spot": [
						2,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "boris",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "boris",
					"content": {
						"korean": "대공 전하… 꼭 따뜻해지십시오.",
						"english": "Your Grace, Grand Duke... may you truly find warmth.",
						"japanese": "大公殿下…どうか、暖かくお過ごしください。",
						"chinese": "大公殿下……愿您定能感受温暖。",
						"french": "Votre Grâce, Grand-Duc... puissiez-vous trouver la chaleur.",
						"spanish": "Vuestra Gracia, Gran Duque... que encuentre calidez.",
						"vietnamese": "Thưa Đại Công tước... xin người hãy thật ấm áp.",
						"thai": "ท่านแกรนด์ดยุก... ขอให้ท่านอบอุ่นเถิด",
						"hindi": "महामहिम, ग्रैंड ड्यूक... आपको ज़रूर गरमाहट मिले।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "핀 대공의 얼음 왕좌는 완전히 녹아내렸다. 그리고 그 자리엔… 작은 온기가 피어났다.",
						"english": "Grand Duke Finn's ice throne completely melted. And in its place... a small warmth bloomed.",
						"japanese": "フィン大公の氷の玉座は完全に溶け落ちた。そしてその場所には…小さな温かさが芽生えた。",
						"chinese": "芬大公的冰之王座彻底融化了。而原地……一抹小小的温暖悄然绽放。",
						"french": "Le trône de glace du Grand-Duc Finn a complètement fondu. Et à sa place... une petite chaleur est apparue.",
						"spanish": "El trono de hielo del Gran Duque Finn se derritió por completo. Y en su lugar... una pequeña calidez floreció.",
						"vietnamese": "Ngai vàng băng giá của Đại Công tước Finn hoàn toàn tan chảy. Và tại vị trí đó... một chút hơi ấm đã nở rộ.",
						"thai": "บัลลังก์น้ำแข็งของแกรนด์ดยุกฟินน์ละลายไปจนหมดสิ้น และในที่นั้น... ความอบอุ่นเล็ก ๆ ได้ผลิบานขึ้น",
						"hindi": "ग्रांड ड्यूक फिन का बर्फीला सिंहासन पूरी तरह पिघल गया। और उसकी जगह... एक छोटी सी गरमाहट पनपी।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "하지만 그의 진짜 소원은, 아직 해결되지 않은 듯했다.",
						"english": "However, his true wish seemed yet to be fulfilled.",
						"japanese": "しかし、彼の本当の願いは、まだ叶えられていないようだった。",
						"chinese": "然而，他真正的愿望，似乎仍未实现。",
						"french": "Cependant, son véritable souhait semblait encore non résolu.",
						"spanish": "Sin embargo, su verdadero deseo parecía aún sin resolver.",
						"vietnamese": "Tuy nhiên, điều ước thật sự của anh ấy dường như vẫn chưa được giải quyết.",
						"thai": "ทว่า ความปรารถนาที่แท้จริงของเขา ดูเหมือนจะยังไม่ได้รับการเติมเต็ม",
						"hindi": "हालांकि, उसकी असली इच्छा अभी भी अधूरी लग रही थी।"
					}
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "거대한 얼음 그림자가 모습을 드러냈다.",
						"english": "A massive ice shadow appeared.",
						"japanese": "巨大な氷の影が現れた。",
						"chinese": "一个巨大的冰影出现了。",
						"french": "Une immense ombre de glace est apparue.",
						"spanish": "Una enorme sombra de hielo apareció.",
						"vietnamese": "Một cái bóng băng khổng lồ đã xuất hiện.",
						"thai": "เงาของน้ำแข็งขนาดมหึมาปรากฏขึ้น",
						"hindi": "एक विशाल बर्फीली छाया प्रकट हुई।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "크아아아…! 누구도… 나를 막을 수 없다…!",
						"english": "Graaaah...! No one... can stop me...!",
						"japanese": "グギャアアア…！誰も…私を止められない…！",
						"chinese": "吼啊啊啊…！没有人…能阻止我…！",
						"french": "Graaaah...! Personne... ne peut m'arrêter...!",
						"spanish": "¡Graaaah...! ¡Nadie... puede detenerme...!",
						"vietnamese": "Graaaah...! Không ai... có thể ngăn cản ta...!",
						"thai": "กรรรรร... ไม่มีใคร... หยุดข้าได้...!",
						"hindi": "गराआआआ...! कोई नहीं... मुझे रोक सकता...!"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "네가 핀 대공의… 외로움인가?",
						"english": "Are you Duke Finn's... loneliness?",
						"japanese": "あなたがフィン大公の…孤独なのか？",
						"chinese": "你是芬恩公爵的…孤独吗？",
						"french": "Es-tu la... solitude du Duc Finn ?",
						"spanish": "¿Eres la... soledad del Duque Finn?",
						"vietnamese": "Ngươi là... sự cô đơn của Đại công tước Finn sao?",
						"thai": "เจ้าคือ... ความโดดเดี่ยวของดยุกฟินน์หรือ?",
						"hindi": "क्या तुम ड्यूक फिन की... अकेलापन हो?"
					},
					"emotion": "base"
				},
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "eira",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "그는 이곳에 갇혀… 이 형태로 변해버렸군요.",
						"english": "He was trapped here... and transformed into this form.",
						"japanese": "彼はここに閉じ込められ…この姿に変わってしまったのですね。",
						"chinese": "他被困在这里…变成了这个样子。",
						"french": "Il a été piégé ici... et transformé sous cette forme.",
						"spanish": "Él fue atrapado aquí... y se transformó en esta forma.",
						"vietnamese": "Anh ấy đã bị mắc kẹt ở đây... và biến thành hình dạng này.",
						"thai": "เขาถูกขังอยู่ที่นี่... และกลายร่างเป็นแบบนี้ไปแล้ว",
						"hindi": "वह यहाँ फँस गया... और इस रूप में बदल गया।"
					},
					"speaker": "eira",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "이 그림자를 물리쳐야 핀의 마음도 편해질 겁니다.",
						"english": "We must defeat this shadow for Finn's heart to find peace.",
						"japanese": "この影を打ち破れば、フィンの心も安らぐでしょう。",
						"chinese": "我们必须打败这个影子，芬恩的心才能平静下来。",
						"french": "Nous devons vaincre cette ombre pour que le cœur de Finn retrouve la paix.",
						"spanish": "Debemos derrotar esta sombra para que el corazón de Finn encuentre la paz.",
						"vietnamese": "Chúng ta phải đánh bại cái bóng này để trái tim Finn tìm thấy sự bình yên.",
						"thai": "เราต้องเอาชนะเงานี้ หัวใจของฟินน์จึงจะสงบสุขได้",
						"hindi": "हमें इस छाया को हराना होगा ताकि फिन का दिल शांत हो सके।"
					},
					"emotion": "base"
				},
				{
					"speaker": "boris",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						2
					]
				},
				{
					"content": {
						"korean": "으으… 춥다…! 대공 전하도 이거 필요하실텐데!",
						"english": "Ugh... it's cold...! The Grand Duke would need this too!",
						"japanese": "うぅ…寒い…！大公殿下もこれが必要でしょうに！",
						"chinese": "呜…好冷…！大公殿下也需要这个吧！",
						"french": "Ugh... il fait froid...! Le Grand-Duc en aurait besoin aussi !",
						"spanish": "Uf... ¡hace frío...! ¡El Gran Duque también necesitaría esto!",
						"vietnamese": "Ư... lạnh quá...! Đại công tước cũng cần cái này!",
						"thai": "อื้อ... หนาว...! ท่านดยุกคงต้องการสิ่งนี้ด้วย!",
						"hindi": "उफ़... ठंड है...! ग्रैंड ड्यूक को भी इसकी ज़रूरत होगी!"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "boris"
				},
				{
					"speaker": "boris",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "대공 전하도 이거 필요하실텐데!",
						"english": "The Grand Duke would need this too!",
						"japanese": "大公殿下もこれが必要でしょうに！",
						"chinese": "大公殿下也需要这个吧！",
						"french": "Le Grand-Duc en aurait besoin aussi !",
						"spanish": "¡El Gran Duque también necesitaría esto!",
						"vietnamese": "Đại công tước cũng cần cái này!",
						"thai": "ท่านดยุกคงต้องการสิ่งนี้ด้วย!",
						"hindi": "ग्रैंड ड्यूक को भी इसकी ज़रूरत होगी!"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…핀, 이제 그만.",
						"english": "...Finn, stop now.",
						"japanese": "…フィン、もうやめて。",
						"chinese": "……芬，够了。",
						"french": "...Finn, arrête ça maintenant.",
						"spanish": "...Finn, basta ya.",
						"vietnamese": "...Finn, dừng lại đi.",
						"thai": "...ฟินน์ พอได้แล้ว",
						"hindi": "...फिन, बस करो अब।"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"얼음 왕좌는 흔들렸다.",
			"핀 대공의 허세 뒤에 숨겨진 진실이 드러나기 시작했다.",
			"잊힌 기록자 에이라와, 뜻밖의 증거를 든 보리스가 나타났다.",
			"이제 핀은 더 이상 숨을 곳이 없다."
		],
		"english": [
			"The Ice Throne trembled.",
			"The truth hidden behind Archduke Finn's bravado began to surface.",
			"Ayla, the Forgotten Chronicler, appeared, along with Boris, bearing unexpected evidence.",
			"Finn now has nowhere left to hide."
		],
		"japanese": [
			"氷の玉座は揺れた。",
			"フィン大公の虚勢の裏に隠された真実が明らかになり始めた。",
			"忘れられた記録者アイラと、予期せぬ証拠を携えたボリスが現れた。",
			"もうフィンに隠れる場所はない。"
		],
		"chinese": [
			"冰封王座摇摇欲坠。",
			"芬大公虚张声势背后隐藏的真相开始浮现。",
			"遗忘的记录者艾拉和手持意外证据的鲍里斯出现了。",
			"芬现在已无处可藏。"
		],
		"french": [
			"Le Trône de Glace trembla.",
			"La vérité dissimulée derrière la bravade de l'Archiduc Finn commençait à se révéler.",
			"Ayla, la Chroniqueuse Oubliée, apparut, accompagnée de Boris, porteur de preuves inattendues.",
			"Finn n'a désormais plus nulle part où se cacher."
		],
		"spanish": [
			"El Trono de Hielo tembló.",
			"La verdad oculta tras la bravuconería del Gran Duque Finn comenzó a salir a la luz.",
			"Ayla, la Cronista Olvidada, apareció, junto con Boris, quien traía pruebas inesperadas.",
			"Finn ya no tiene dónde esconderse."
		],
		"vietnamese": [
			"Ngai băng đã rung chuyển.",
			"Sự thật ẩn sau vẻ ngoài khoa trương của Đại Công tước Finn bắt đầu lộ diện.",
			"Ayla, Người Chép Sử Bị Lãng Quên, xuất hiện cùng Boris, người mang theo bằng chứng bất ngờ.",
			"Giờ đây, Finn không còn nơi nào để ẩn nấp."
		],
		"thai": [
			"บัลลังก์น้ำแข็งสั่นคลอน",
			"ความจริงที่ซ่อนอยู่เบื้องหลังความโอ้อวดของอาร์คดยุกฟินน์เริ่มปรากฏขึ้น",
			"ไอล่า ผู้บันทึกที่ถูกลืม และบอริส ผู้ถือหลักฐานที่ไม่คาดคิด ปรากฏตัวขึ้น",
			"ฟินน์ไม่มีที่ซ่อนอีกต่อไปแล้ว"
		],
		"hindi": [
			"बर्फीला सिंहासन हिल उठा।",
			"आर्कड्यूक फिन के दिखावे के पीछे छिपा सच सामने आने लगा।",
			"भूली हुई इतिहासी आयला और अप्रत्याशित सबूतों के साथ बोरिस प्रकट हुए।",
			"अब फिन के पास छिपने की कोई जगह नहीं बची।"
		]
	}
} as const;
