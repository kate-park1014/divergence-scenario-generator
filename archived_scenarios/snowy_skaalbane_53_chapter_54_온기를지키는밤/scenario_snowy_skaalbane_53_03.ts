export const scenario_snowy_skaalbane_53_03 = {
	"scenario_id": "snowy_skaalbane_53_03",
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
	"prologue": {
		"korean": [
			"밤의 기록자, 에이라. 그녀는 탑의 숨결을 쫓았다.",
			"어둠 속, 얼어붙은 룬 문자 위로 손가락이 미끄러졌다.",
			"이름을 되뇌는 순간, 탑은 작은 떨림으로 응답했다.",
			"진실의 조각이, 차가운 밤에 모습을 드러냈다."
		],
		"english": [
			"Aira, the Chronicler of Night. She pursued the Tower's breath.",
			"In the dark, a finger glided over frozen runes.",
			"The moment the name was whispered, the Tower responded with a faint tremor.",
			"A fragment of truth emerged in the cold night."
		],
		"japanese": [
			"夜の記録者、アイラ。彼女は塔の息吹を追った。",
			"闇の中、凍てついたルーン文字の上を指が滑った。",
			"その名を唱えた瞬間、塔は小さな震えで応えた。",
			"真実の欠片が、冷たい夜に姿を現した。"
		],
		"chinese": [
			"夜之记录者，艾拉。她追寻着塔的呼吸。",
			"黑暗中，指尖划过冰冷的符文。",
			"默念其名之时，塔以微颤回应。",
			"真相的碎片，在寒夜中显现。"
		],
		"french": [
			"Aira, la Chroniqueuse de la Nuit. Elle suivait le souffle de la Tour.",
			"Dans l'obscurité, un doigt glissa sur des runes gelées.",
			"Au moment où le nom fut répété, la Tour répondit par un léger tremblement.",
			"Un fragment de vérité apparut dans la nuit froide."
		],
		"spanish": [
			"Aira, la Cronista de la Noche. Persiguió el aliento de la Torre.",
			"En la oscuridad, un dedo se deslizó sobre runas congeladas.",
			"En el instante de repetir el nombre, la Torre respondió con un leve temblor.",
			"Un fragmento de verdad se reveló en la fría noche."
		],
		"vietnamese": [
			"Aira, Người ghi chép đêm. Cô truy đuổi hơi thở của Tháp.",
			"Trong bóng tối, ngón tay lướt trên những ký tự rune đóng băng.",
			"Khoảnh khắc tên được nhắc lại, Tháp đáp lại bằng một rung động nhỏ.",
			"Một mảnh sự thật đã hiện ra trong đêm lạnh giá."
		],
		"thai": [
			"ไอรา ผู้บันทึกยามราตรี เธอไล่ตามลมหายใจของหอคอย",
			"ในความมืด นิ้วมือเลื่อนไปบนอักษรรูนที่เยือกแข็ง",
			"ทันทีที่เอ่ยชื่อ หอคอยก็ตอบสนองด้วยการสั่นสะเทือนเล็กน้อย",
			"เศษเสี้ยวแห่งความจริงปรากฏขึ้นในคืนอันหนาวเหน็บ"
		],
		"hindi": [
			"आइरा, रात की इतिवृत्तकार। उसने मीनार की साँसों का पीछा किया।",
			"अँधेरे में, एक उँगली जमी हुई रूणों पर सरक गई।",
			"जिस क्षण नाम बुदबुदाया गया, मीनार ने एक हल्के कंपन से प्रतिक्रिया दी।",
			"सत्य का एक अंश ठंडी रात में सामने आया।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "잔해탑의 가장 깊은 골. 한기가 뼛속까지 스몄다.",
						"english": "The deepest chasm of the Ruined Tower. A chill seeped into the very bones.",
						"japanese": "廃墟の塔の最も深い谷。寒気が骨の髄まで染み渡った。",
						"chinese": "残骸之塔最深处。寒意刺骨。",
						"french": "Le gouffre le plus profond de la Tour en Ruines. Un froid mordant transperçait les os.",
						"spanish": "El abismo más profundo de la Torre Ruin. Un frío gélido caló hasta los huesos.",
						"vietnamese": "Hố sâu nhất của Tháp Hoang tàn. Cái lạnh thấu xương.",
						"thai": "ซอกลึกที่สุดของหอคอยปรักหักพัง ความเย็นยะเยือกแทรกซึมไปถึงกระดูก",
						"hindi": "खंडहर मीनार का सबसे गहरा दर्रा। एक ठंड हड्डियों तक घुस गई।"
					}
				},
				{
					"speaker": "eira",
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
						"korean": "…차가운 밤이네요. 이 탑은 모든 것을 얼어붙게 하려는 듯 해요.",
						"english": "...It's a cold night. This tower seems to want to freeze everything.",
						"japanese": "「…冷たい夜ですね。この塔は全てを凍らせようとしているようです。」",
						"chinese": "“……真是个寒冷的夜晚。这座塔似乎想把一切都冻结。”",
						"french": "« ...C'est une nuit froide. Cette tour semble vouloir tout geler. »",
						"spanish": "« ...Es una noche fría. Esta torre parece querer congelarlo todo. »",
						"vietnamese": "...Đêm lạnh thật. Ngọn tháp này dường như muốn đóng băng mọi thứ.",
						"thai": "...เป็นคืนที่หนาวเย็นจังเลยค่ะ หอคอยนี้ดูเหมือนจะต้องการแช่แข็งทุกสิ่ง",
						"hindi": "...ठंडी रात है। यह मीनार सब कुछ जमा देना चाहती है।"
					},
					"type": "speech",
					"speaker": "eira",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "밤새도록 기록만 하고 있었어?",
						"english": "Have you been chronicling all night?",
						"japanese": "「一晩中記録ばかりしていたのか？」",
						"chinese": "“你一整晚都在记录吗？”",
						"french": "« Tu as passé toute la nuit à écrire ? »",
						"spanish": "« ¿Estuviste registrando toda la noche? »",
						"vietnamese": "Cậu ghi chép suốt đêm à?",
						"thai": "คุณบันทึกตลอดทั้งคืนเลยเหรอ?",
						"hindi": "क्या तुम सारी रात लिखती रही हो?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "네. 여기… 희미하게 남은 룬 문자들이 있어요. 탑이 응답하던 이름들이죠.",
						"english": "Yes. Here... faint runes remain. The names the Tower responded to.",
						"japanese": "「はい。ここに…かすかに残るルーン文字があります。塔が応えた名前たちです。」",
						"chinese": "“是的。这里……还留有模糊的符文。是塔曾回应过的名字。”",
						"french": "« Oui. Ici... il reste de faibles runes. Les noms auxquels la Tour a répondu. »",
						"spanish": "« Sí. Aquí... quedan runas débiles. Los nombres a los que la Torre respondió. »",
						"vietnamese": "Vâng. Ở đây... còn sót lại những ký tự rune mờ nhạt. Là những cái tên mà Tháp đã đáp lại.",
						"thai": "ค่ะ ที่นี่...มีอักษรรูนจางๆ เหลืออยู่ ชื่อที่หอคอยตอบสนอง",
						"hindi": "हाँ। यहाँ... धुँधली रूणें बची हैं। वे नाम जिनसे मीनार ने प्रतिक्रिया दी।"
					},
					"type": "speech",
					"speaker": "eira",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이름?",
						"english": "Names?",
						"japanese": "「名前だと？」",
						"chinese": "“名字？”",
						"french": "« Des noms ? »",
						"spanish": "« ¿Nombres? »",
						"vietnamese": "Tên ư?",
						"thai": "ชื่อ?",
						"hindi": "नाम?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "네. 이 이름을 알면… 무언가 끝을 낼 수 있을지도 모릅니다.",
						"english": "Yes. If we know these names... perhaps we can end something.",
						"japanese": "「はい。この名前を知れば…何かを終わらせることができるかもしれません。」",
						"chinese": "“是的。如果知道这些名字……或许就能结束一切。”",
						"french": "« Oui. Si nous connaissons ces noms... nous pourrions peut-être mettre fin à quelque chose. »",
						"spanish": "« Sí. Si conocemos estos nombres... quizás podamos poner fin a algo. »",
						"vietnamese": "Vâng. Nếu biết những cái tên này... có lẽ chúng ta có thể kết thúc điều gì đó.",
						"thai": "ค่ะ ถ้าเรารู้ชื่อเหล่านี้...อาจจะสามารถยุติบางสิ่งได้",
						"hindi": "हाँ। यदि हम ये नाम जानते हैं... तो शायद हम कुछ खत्म कर सकते हैं।"
					},
					"speaker": "eira",
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "eira",
					"spot": [
						2,
						3
					]
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "탑이 기억하는 이름은… 하나의 존재가 아니에요. 흩어진 존재들의 속삭임이죠.",
						"english": "The names the Tower remembers… are not of a single being. They are whispers of scattered presences.",
						"japanese": "塔が記憶する名前は…一つの存在ではありません。散らばった存在たちの囁きです。",
						"chinese": "塔所铭记的名字…并非一个存在。它们是散落存在的低语。",
						"french": "Les noms dont la Tour se souvient… ne sont pas ceux d'un être unique. Ce sont les murmures d'existences dispersées.",
						"spanish": "Los nombres que la Torre recuerda… no son de un solo ser. Son los susurros de presencias dispersas.",
						"vietnamese": "Tên mà Tháp ghi nhớ… không phải của một thực thể duy nhất. Chúng là những lời thì thầm của các thực thể phân tán.",
						"thai": "ชื่อที่หอคอยจดจำ… ไม่ใช่ของสิ่งมีชีวิตเดียว แต่เป็นการกระซิบของสิ่งมีชีวิตที่กระจัดกระจาย",
						"hindi": "टावर को जो नाम याद हैं… वे किसी एक अस्तित्व के नहीं हैं। वे बिखरे हुए अस्तित्वों की फुसफुसाहट हैं।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "점점 더 어려워지는군.",
						"english": "It's getting harder and harder.",
						"japanese": "ますます難しくなるな。",
						"chinese": "越来越难了。",
						"french": "Ça devient de plus en plus difficile.",
						"spanish": "Cada vez es más difícil.",
						"vietnamese": "Càng ngày càng khó.",
						"thai": "ยิ่งยากขึ้นเรื่อยๆ",
						"hindi": "यह और भी मुश्किल होता जा रहा है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 탑에 흡수된 모든 것들이… 이 룬에 새겨져 있어요.",
						"english": "Everything absorbed by this Tower… is etched into these runes.",
						"japanese": "この塔に吸収された全てが…このルーンに刻まれています。",
						"chinese": "所有被这座塔吸收的东西…都铭刻在这符文中。",
						"french": "Tout ce qui a été absorbé par cette Tour… est gravé dans ces runes.",
						"spanish": "Todo lo que ha sido absorbido por esta Torre… está grabado en estas runas.",
						"vietnamese": "Mọi thứ bị Tháp này hấp thụ… đều được khắc vào những rune này.",
						"thai": "ทุกสิ่งที่หอคอยนี้ดูดซับ… ถูกสลักไว้ในรูนเหล่านี้",
						"hindi": "इस टॉवर द्वारा अवशोषित हर चीज़… इन रुन्स में अंकित है।"
					},
					"emotion": "sad",
					"speaker": "eira"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "그럼 그 이름들을 다 알면…",
						"english": "So if I know all those names…",
						"japanese": "では、その名前を全て知れば…",
						"chinese": "那如果我知道所有那些名字…",
						"french": "Alors, si je connais tous ces noms…",
						"spanish": "Entonces, si conozco todos esos nombres…",
						"vietnamese": "Vậy nếu tôi biết tất cả những cái tên đó…",
						"thai": "ถ้าอย่างนั้น ถ้าฉันรู้ชื่อทั้งหมดนั้น…",
						"hindi": "तो अगर मुझे वे सभी नाम पता हों…"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "네. 탑의 진실을 마주할 수 있겠죠.",
						"english": "Yes. You'll be able to face the Tower's truth.",
						"japanese": "はい。塔の真実と向き合えるでしょう。",
						"chinese": "是的。你就能面对塔的真相了。",
						"french": "Oui. Vous pourrez faire face à la vérité de la Tour.",
						"spanish": "Sí. Podrás enfrentarte a la verdad de la Torre.",
						"vietnamese": "Vâng. Bạn sẽ có thể đối mặt với sự thật của Tháp.",
						"thai": "ใช่ คุณจะสามารถเผชิญหน้ากับความจริงของหอคอยได้",
						"hindi": "हाँ। आप टॉवर की सच्चाई का सामना कर पाएंगे।"
					},
					"speaker": "eira",
					"emotion": "base"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "eira",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "차가워질수록… 글자들이 선명해지는 기분이에요.",
						"english": "The colder it gets… the clearer the letters feel.",
						"japanese": "冷たくなればなるほど…文字が鮮明になる気がします。",
						"chinese": "越冷…文字就感觉越清晰。",
						"french": "Plus il fait froid… plus les lettres semblent claires.",
						"spanish": "Cuanto más frío hace… más claras se sienten las letras.",
						"vietnamese": "Càng lạnh… chữ viết càng rõ ràng hơn.",
						"thai": "ยิ่งเย็นลงเท่าไหร่… ตัวอักษรก็ยิ่งชัดเจนขึ้นเท่านั้น",
						"hindi": "जितना ठंडा होता जाता है… अक्षर उतने ही स्पष्ट होते जाते हैं।"
					},
					"speaker": "eira",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "그 이름들을 다 기록할 수 있을까? 끝이 없을 것 같은데.",
						"english": "Can I really record all those names? It feels like it'll never end.",
						"japanese": "その名前を全て記録できるだろうか？終わりがないように思える。",
						"chinese": "我真的能记录下所有那些名字吗？感觉永无止境。",
						"french": "Pourrai-je vraiment enregistrer tous ces noms ? On dirait que ça n'aura jamais de fin.",
						"spanish": "¿Podré realmente registrar todos esos nombres? Parece que nunca terminarán.",
						"vietnamese": "Liệu tôi có thể ghi lại tất cả những cái tên đó không? Dường như sẽ không bao giờ kết thúc.",
						"thai": "ฉันจะจดบันทึกชื่อเหล่านั้นทั้งหมดได้จริงๆ เหรอ? ดูเหมือนจะไม่มีที่สิ้นสุด",
						"hindi": "क्या मैं उन सभी नामों को रिकॉर्ड कर पाऊँगा? ऐसा लगता है कि इसका कोई अंत नहीं है।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "끝을 내야 합니다. 잊힌 것을 기억하는 것이… 제 신념이에요.",
						"english": "I must finish. Remembering what's forgotten… is my conviction.",
						"japanese": "終わらせなければなりません。忘れられたものを記憶すること…それが私の信念です。",
						"chinese": "我必须完成。记住被遗忘的东西…是我的信念。",
						"french": "Je dois finir. Se souvenir de ce qui est oublié… est ma conviction.",
						"spanish": "Debo terminar. Recordar lo olvidado… es mi convicción.",
						"vietnamese": "Tôi phải hoàn thành. Ghi nhớ những gì đã bị lãng quên… là niềm tin của tôi.",
						"thai": "ฉันต้องทำให้สำเร็จ การจดจำสิ่งที่ถูกลืม… คือความเชื่อของฉัน",
						"hindi": "मुझे इसे पूरा करना होगा। भूली हुई चीज़ों को याद रखना… मेरा विश्वास है।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "두렵지 않아?",
						"english": "Aren't you afraid?",
						"japanese": "恐ろしくないのか？",
						"chinese": "你不害怕吗？",
						"french": "Tu n'as pas peur ?",
						"spanish": "¿No tienes miedo?",
						"vietnamese": "Bạn không sợ sao?",
						"thai": "ไม่กลัวเหรอ?",
						"hindi": "क्या तुम्हें डर नहीं लगता?"
					}
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "진실을 남기는 것이… 두려움을 이기는 길이라 생각해요.",
						"english": "I believe leaving behind the truth… is the way to overcome fear.",
						"japanese": "真実を残すことが…恐れを克服する道だと考えています。",
						"chinese": "我我认为留下真相…是战胜恐惧的方法。",
						"french": "Je crois que laisser la vérité derrière soi… est le moyen de vaincre la peur.",
						"spanish": "Creo que dejar la verdad… es el camino para superar el miedo.",
						"vietnamese": "Tôi tin rằng để lại sự thật… là cách để vượt qua nỗi sợ hãi.",
						"thai": "ฉันเชื่อว่าการทิ้งความจริงไว้… คือหนทางที่จะเอาชนะความกลัว",
						"hindi": "मेरा मानना ​​है कि सच्चाई को पीछे छोड़ना… डर पर काबू पाने का तरीका है।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "eira",
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "이 이름들이… 탑의 근원과 연결되어 있어요.",
						"english": "These names... they are connected to the Tower's origin.",
						"japanese": "これらの名前は…塔の根源と繋がっています。",
						"chinese": "这些名字……与塔的起源相连。",
						"french": "Ces noms... sont liés à l'origine de la Tour.",
						"spanish": "Estos nombres... están conectados al origen de la Torre.",
						"vietnamese": "Những cái tên này... liên kết với nguồn gốc của Tháp.",
						"thai": "ชื่อเหล่านี้...เชื่อมโยงกับต้นกำเนิดของหอคอย",
						"hindi": "ये नाम... मीनार के मूल से जुड़े हैं।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "점점 더 안쪽으로 들어가는 느낌이야.",
						"english": "It feels like we're going deeper inside.",
						"japanese": "ますます奥深くへと入っていく感じだ。",
						"chinese": "感觉越来越深入了。",
						"french": "On dirait qu'on s'enfonce de plus et plus.",
						"spanish": "Siento que estamos yendo cada vez más adentro.",
						"vietnamese": "Cảm giác như đang đi sâu hơn vào bên trong.",
						"thai": "รู้สึกเหมือนกำลังเข้าไปลึกขึ้นเรื่อยๆ",
						"hindi": "ऐसा लग रहा है जैसे हम और अंदर जा रहे हैं।"
					}
				},
				{
					"content": {
						"korean": "되뇌고 기록하면… 언젠가는 이 모든 것을 멈출 힘이 될 겁니다.",
						"english": "Repeat and record them... someday, that will become the power to stop all this.",
						"japanese": "それらを唱え、記録すれば…いつか、この全てを止める力となるでしょう。",
						"chinese": "重复并记录它们……总有一天，那将成为阻止这一切的力量。",
						"french": "Répétez-les et enregistrez-les… un jour, cela deviendra le pouvoir d'arrêter tout ça.",
						"spanish": "Repítelos y regístralos... algún día, eso se convertirá en el poder para detener todo esto.",
						"vietnamese": "Lặp lại và ghi lại chúng... một ngày nào đó, đó sẽ trở thành sức mạnh để ngăn chặn tất cả điều này.",
						"thai": "ถ้าท่องจำและบันทึกไว้...สักวันหนึ่ง มันจะเป็นพลังที่จะหยุดทุกสิ่งนี้ได้",
						"hindi": "इन्हें दोहराओ और लिखो... किसी दिन, यह सब रोकने की शक्ति बन जाएगा।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "eira"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그 이름을 알게 되면… 뭐가 달라질까?",
						"english": "If we learn that name... what will change?",
						"japanese": "その名前を知れば…何が変わるだろう？",
						"chinese": "如果知道了那个名字……会改变什么？",
						"french": "Si nous connaissons ce nom... qu'est-ce qui changera ?",
						"spanish": "Si sabemos ese nombre... ¿qué cambiará?",
						"vietnamese": "Nếu chúng ta biết cái tên đó... điều gì sẽ thay đổi?",
						"thai": "ถ้าได้รู้ชื่อนั้น...อะไรจะเปลี่ยนไป?",
						"hindi": "अगर हमें वह नाम पता चला... तो क्या बदलेगा?"
					}
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "탑이… 침묵할 거예요.",
						"english": "The Tower... will fall silent.",
						"japanese": "塔は…沈黙するでしょう。",
						"chinese": "塔……会沉默的。",
						"french": "La Tour... se taira.",
						"spanish": "La Torre... guardará silencio.",
						"vietnamese": "Tháp... sẽ im lặng.",
						"thai": "หอคอย...จะเงียบงัน",
						"hindi": "मीनार... खामोश हो जाएगी।"
					}
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "기억하려 해도… 결국 잊힐 뿐.",
						"english": "Even if you try to remember… it will ultimately be forgotten.",
						"japanese": "記憶しようとしても…結局は忘れ去られるだけだ。",
						"chinese": "即便尝试记住…最终也只会遗忘。",
						"french": "Même si tu essaies de te souvenir… tu finiras par oublier.",
						"spanish": "Incluso si intentas recordar… al final, solo será olvidado.",
						"vietnamese": "Dù có cố gắng nhớ… cuối cùng cũng sẽ bị lãng quên.",
						"thai": "แม้จะพยายามจดจำ… สุดท้ายก็ถูกลืมเลือนไปเท่านั้น",
						"hindi": "याद करने की कोशिश भी करो तो भी… अंततः भूल जाओगे।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "아직… 끝나지 않았어.",
						"english": "It's not… over yet.",
						"japanese": "まだ…終わってない。",
						"chinese": "还没…结束。",
						"french": "Ce n'est pas… encore fini.",
						"spanish": "Aún… no ha terminado.",
						"vietnamese": "Chưa… kết thúc đâu.",
						"thai": "ยัง… ไม่จบหรอก",
						"hindi": "अभी… खत्म नहीं हुआ है।"
					},
					"type": "speech"
				},
				{
					"speaker": "eira",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "다시… 다시 기록할 겁니다.",
						"english": "I will… record it again.",
						"japanese": "再び…再び記録するだろう。",
						"chinese": "我会…再次记录。",
						"french": "Je… l'enregistrerai à nouveau.",
						"spanish": "Volveré… a registrarlo.",
						"vietnamese": "Tôi sẽ… ghi chép lại.",
						"thai": "จะ… บันทึกอีกครั้ง",
						"hindi": "मैं… इसे फिर से दर्ज करूँगा।"
					},
					"speaker": "eira",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "깊은 심연 속, 정체 모를 그림자가 움직였다.",
						"english": "In the deep abyss, an unknown shadow stirred.",
						"japanese": "深淵の奥底で、正体不明の影が蠢いた。",
						"chinese": "在深渊之中，一个不明身份的影子动了。",
						"french": "Dans l'abîme profond, une ombre inconnue s'agita.",
						"spanish": "En el abismo profundo, una sombra desconocida se agitó.",
						"vietnamese": "Trong vực sâu thẳm, một bóng tối không rõ danh tính đã lay động.",
						"thai": "ในห้วงลึกของห้วงเหว เงาที่ไม่รู้จักได้เคลื่อนไหว",
						"hindi": "गहरे पाताल में, एक अज्ञात छाया हिल उठी।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "누가 감히… 나의 이름을 부르려 하는가.",
						"english": "Who dares... try to call my name?",
						"japanese": "誰が…私の名を呼ぼうとしているのか。",
						"chinese": "谁敢……尝试呼唤我的名字？",
						"french": "Qui ose... tenter d'appeler mon nom ?",
						"spanish": "¿Quién se atreve... a intentar pronunciar mi nombre?",
						"vietnamese": "Ai dám... cố gắng gọi tên ta?",
						"thai": "ใครกล้า...ที่จะพยายามเรียกชื่อของข้า?",
						"hindi": "कौन हिम्मत करता है... मेरा नाम पुकारने की कोशिश करने की?"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이름… 너였어?",
						"english": "The name... it was you?",
						"japanese": "名前…お前だったのか？",
						"chinese": "名字……是你？",
						"french": "Le nom... c'était toi ?",
						"spanish": "El nombre... ¿eras tú?",
						"vietnamese": "Cái tên... là ngươi sao?",
						"thai": "ชื่อนั้น...เป็นเจ้าหรือ?",
						"hindi": "नाम... वह तुम थे?"
					}
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "eira",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "탑이 응답하던 이름은… 당신의 것이었군요.",
						"english": "The name the Tower responded to... it was yours.",
						"japanese": "塔が応えていた名前は…あなたのものでしたね。",
						"chinese": "塔所回应的名字……原来是你的啊。",
						"french": "Le nom auquel la Tour répondait... était le vôtre.",
						"spanish": "El nombre al que la Torre respondía... era el tuyo.",
						"vietnamese": "Cái tên mà Tháp đã phản ứng... là của ngài.",
						"thai": "ชื่อที่หอคอยตอบสนอง...เป็นของคุณเองสินะ",
						"hindi": "जिस नाम पर मीनार ने प्रतिक्रिया दी... वह तुम्हारा था।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "기록자는 필요 없어. 잊히는 것이 곧 나의 힘이다.",
						"english": "No need for a recorder. To be forgotten is my power.",
						"japanese": "記録者など必要ない。忘れられることこそが私の力だ。",
						"chinese": "不需要记录者。被遗忘就是我的力量。",
						"french": "Pas besoin de scribe. Être oublié est mon pouvoir.",
						"spanish": "No necesito un registrador. Ser olvidado es mi poder.",
						"vietnamese": "Không cần người ghi chép. Bị lãng quên chính là sức mạnh của ta.",
						"thai": "ไม่จำเป็นต้องมีผู้บันทึก การถูกลืมคือพลังของข้า",
						"hindi": "किसी रिकॉर्डर की जरूरत नहीं। भूला जाना ही मेरी शक्ति है।"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "진실을 숨기려는 거냐!",
						"english": "Are you trying to hide the truth!",
						"japanese": "真実を隠そうとするのか！",
						"chinese": "你想隐瞒真相吗！",
						"french": "Tentez-vous de cacher la vérité !",
						"spanish": "¿Estás intentando ocultar la verdad?",
						"vietnamese": "Ngươi đang cố che giấu sự thật sao!",
						"thai": "เจ้าพยายามจะซ่อนความจริงงั้นรึ!",
						"hindi": "क्या तुम सच छिपाने की कोशिश कर रहे हो!"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "너희의 존재 자체가… 나의 기록을 더럽히는 것이다.",
						"english": "Your very existence… defiles my records.",
						"japanese": "お前たちの存在そのものが… 私の記録を汚すのだ。",
						"chinese": "你们的存在本身…就是对我记录的玷污。",
						"french": "Votre existence même… souille mes archives.",
						"spanish": "Vuestra mera existencia… profana mis registros.",
						"vietnamese": "Sự tồn tại của các ngươi… làm ô uế ghi chép của ta.",
						"thai": "การมีอยู่ของพวกเจ้า… มลทินแก่บันทึกของข้า!",
						"hindi": "तुम्हारा अस्तित्व ही… मेरे अभिलेखों को अपवित्र करता है।"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "…사라지지 않아. 이름은… 다시 떠오를 것이다.",
						"english": "…It won't disappear. The name will… resurface.",
						"japanese": "…消えない。名は…再び浮かび上がるだろう。",
						"chinese": "…不会消失。名字会…再次浮现。",
						"french": "…Ça ne disparaîtra pas. Le nom… resurgira.",
						"spanish": "…No desaparecerá. El nombre… volverá a surgir.",
						"vietnamese": "…Nó sẽ không biến mất. Tên đó sẽ… xuất hiện trở lại.",
						"thai": "…ไม่หายไปหรอก ชื่อนั้น… จะกลับมาปรากฏอีกครั้ง",
						"hindi": "…यह गायब नहीं होगा। नाम… फिर से सामने आएगा।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "쓰러뜨렸어….",
						"english": "We've defeated it….",
						"japanese": "倒したぞ。",
						"chinese": "打败了。",
						"french": "Nous l'avons vaincu.",
						"spanish": "Lo hemos derrotado.",
						"vietnamese": "Đã đánh bại rồi.",
						"thai": "เอาชนะได้แล้ว",
						"hindi": "हमने उसे हरा दिया।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "direction",
					"speaker": "eira",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "하지만… 기록은 멈추지 않을 겁니다. 잊힌 진실은… 다시 기억될 거예요.",
						"english": "But… the records won't stop. Forgotten truths will… be remembered again.",
						"japanese": "しかし…記録は止まらないだろう。忘れられた真実は…再び記憶されるだろう。",
						"chinese": "但是…记录不会停止。被遗忘的真相…会再次被铭记。",
						"french": "Mais… les archives ne s'arrêteront pas. Les vérités oubliées… seront à nouveau rappelées.",
						"spanish": "Pero… los registros no se detendrán. Las verdades olvidadas… volverán a ser recordadas.",
						"vietnamese": "Nhưng… ghi chép sẽ không dừng lại. Những sự thật bị lãng quên… sẽ được nhớ lại.",
						"thai": "แต่… บันทึกจะไม่หยุด ความจริงที่ถูกลืมเลือน… จะถูกจดจำอีกครั้ง",
						"hindi": "लेकिन… अभिलेख रुकेंगे नहीं। भूली हुई सच्चाइयां… फिर से याद की जाएंगी।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"content": {
						"korean": "차가운 공기 속, 에이라의 펜은 멈추지 않았다. 다음 기록을 위해.",
						"english": "In the cold air, Aira's pen did not stop. For the next record.",
						"japanese": "冷たい空気の中、アイラのペンは止まらなかった。次の記録のために。",
						"chinese": "在冰冷的空气中，艾拉的笔没有停下。为了下一个记录。",
						"french": "Dans l'air froid, la plume d'Aira ne s'arrêta pas. Pour le prochain enregistrement.",
						"spanish": "En el aire frío, la pluma de Aira no se detuvo. Para el siguiente registro.",
						"vietnamese": "Trong không khí lạnh giá, cây bút của Aira không ngừng lại. Vì ghi chép tiếp theo.",
						"thai": "ในอากาศที่เย็นเยียบ ปากกาของไอระไม่หยุดนิ่ง เพื่อบันทึกต่อไป",
						"hindi": "ठंडी हवा में, ऐरा की कलम नहीं रुकी। अगले अभिलेख के लिए।"
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			]
		}
	]
} as const;
