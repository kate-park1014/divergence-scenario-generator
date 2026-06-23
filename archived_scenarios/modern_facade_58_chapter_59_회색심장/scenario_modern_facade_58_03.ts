export const scenario_modern_facade_58_03 = {
	"scenario_id": "modern_facade_58_03",
	"order": 3,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"echo": {
			"id": "mon_57f2edb8-aa81-4ce7-beed-ab009cd2ff35",
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
					"emotion": "base",
					"content": {
						"korean": "닥스와 함께, '파사드' 내부로 진입했다. 거울들이 빛나는 복도.",
						"english": "With Daxs, we entered 'Facade'. A corridor of gleaming mirrors.",
						"japanese": "ダックスと共に、「ファサード」内部へ進入した。鏡が輝く廊下。",
						"chinese": "与达克斯一起，我们进入了“门面”。一条闪耀着镜子的走廊。",
						"french": "Avec Daxs, nous avons pénétré dans la 'Façade'. Un couloir de miroirs scintillants.",
						"spanish": "Con Daxs, entramos en la 'Fachada'. Un pasillo de espejos relucientes.",
						"vietnamese": "Cùng Daxs, chúng tôi đã tiến vào bên trong 'Façade'. Một hành lang với những tấm gương lấp lánh.",
						"thai": "กับแดกซ์ เราเข้ามาใน 'Facade' ทางเดินที่เต็มไปด้วยกระจกเงา",
						"hindi": "डैक्स के साथ, हम 'फसाड' में दाखिल हुए। चमकते दर्पणों का एक गलियारा।"
					}
				},
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "echo",
					"type": "direction"
				},
				{
					"content": {
						"korean": "…방문객이군요. 저는 관리인 에코입니다.",
						"english": "...Visitors. I am Echo, the caretaker.",
						"japanese": "…訪問者ですね。私は管理人エコーです。",
						"chinese": "……访客。我是管理员艾可。",
						"french": "...Des visiteurs. Je suis Echo, le gardien.",
						"spanish": "...Visitantes. Soy Eco, el cuidador.",
						"vietnamese": "...Du khách. Tôi là Echo, người quản lý.",
						"thai": "...ผู้มาเยือนสินะ ผมคือเอคโค่ ผู้ดูแลที่นี่",
						"hindi": "...आगंतुक। मैं इको, देखभालकर्ता हूँ।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "echo"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이곳에 대해 알고 싶은 게 있어.",
						"english": "I want to know about this place.",
						"japanese": "この場所について知りたいんだ。",
						"chinese": "我想了解这里。",
						"french": "Je veux en savoir plus sur cet endroit.",
						"spanish": "Quiero saber sobre este lugar.",
						"vietnamese": "Tôi muốn biết về nơi này.",
						"thai": "ฉันอยากรู้เรื่องที่นี่",
						"hindi": "मैं इस जगह के बारे में जानना चाहता हूँ।"
					}
				},
				{
					"speaker": "echo",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "특정 구역은… 가지 마세요. 위험합니다.",
						"english": "Certain areas... do not go. They are dangerous.",
						"japanese": "特定の区域には…行かないでください。危険です。",
						"chinese": "某些区域……请不要去。那里很危险。",
						"french": "Certaines zones... n'y allez pas. Elles sont dangereuses.",
						"spanish": "Ciertas áreas... no vayan. Son peligrosas.",
						"vietnamese": "Một số khu vực... đừng đi. Chúng nguy hiểm.",
						"thai": "บางพื้นที่...อย่าไปนะ มันอันตราย",
						"hindi": "कुछ खास इलाकों में... मत जाना। वे खतरनाक हैं।"
					}
				},
				{
					"content": {
						"korean": "왜?",
						"english": "Why?",
						"japanese": "なぜ？",
						"chinese": "为什么？",
						"french": "Pourquoi ?",
						"spanish": "¿Por qué?",
						"vietnamese": "Tại sao?",
						"thai": "ทำไม?",
						"hindi": "क्यों?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "echo",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "그냥… 제 경고를 들으세요.",
						"english": "Just… heed my warning.",
						"japanese": "ただ…私の警告を聞いてください。",
						"chinese": "只是…听我的警告。",
						"french": "Écoutez… mon avertissement.",
						"spanish": "Solo… escuche mi advertencia.",
						"vietnamese": "Chỉ là… hãy nghe lời cảnh báo của tôi.",
						"thai": "แค่...ฟังคำเตือนของฉันเถอะ",
						"hindi": "बस... मेरी चेतावनी सुनो।"
					}
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "에코는 똑같은 길을 맴도는 듯했다. 늘 같은 경고를 하며.",
						"english": "Echo seemed to circle the same path, always repeating the same warning.",
						"japanese": "エコーは同じ道をぐるぐる回っているようだった。いつも同じ警告をしながら。",
						"chinese": "艾可似乎在原地打转，总是重复着同样的警告。",
						"french": "Écho semblait tourner en rond sur le même chemin, répétant toujours le même avertissement.",
						"spanish": "Eco parecía dar vueltas por el mismo camino, siempre repitiendo la misma advertencia.",
						"vietnamese": "Echo dường như cứ quanh quẩn một lối đi, luôn lặp lại cùng một lời cảnh báo.",
						"thai": "เอคโค่ดูเหมือนจะวนเวียนอยู่แต่เส้นทางเดิม คอยเตือนซ้ำๆ ตลอดเวลา",
						"hindi": "इको एक ही रास्ते पर घूमती रही, हमेशा वही चेतावनी दोहराती रही।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "echo",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						2
					]
				},
				{
					"content": {
						"korean": "여기는… 위험해요! 돌아가세요!",
						"english": "This place… is dangerous! Go back!",
						"japanese": "ここは…危険です！戻ってください！",
						"chinese": "这里…很危险！回去！",
						"french": "Cet endroit… est dangereux ! Retournez en arrière !",
						"spanish": "¡Este lugar… es peligroso! ¡Vuelve!",
						"vietnamese": "Nơi này… nguy hiểm lắm! Quay về đi!",
						"thai": "ที่นี่...อันตราย! กลับไปซะ!",
						"hindi": "यह जगह... खतरनाक है! वापस जाओ!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "echo"
				},
				{
					"content": {
						"korean": "진실을 찾아야만 해. 뭘 숨기는 거야?",
						"english": "I must find the truth. What are you hiding?",
						"japanese": "真実を見つけなければならない。何を隠しているんだ？",
						"chinese": "我必须找到真相。你在隐藏什么？",
						"french": "Je dois trouver la vérité. Que caches-tu ?",
						"spanish": "Debo encontrar la verdad. ¿Qué estás escondiendo?",
						"vietnamese": "Tôi phải tìm ra sự thật. Ngươi đang che giấu điều gì?",
						"thai": "ฉันต้องตามหาความจริง เธอซ่อนอะไรไว้?",
						"hindi": "मुझे सच ढूंढना होगा। तुम क्या छिपा रहे हो?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "진실은… 당신을 해칠 뿐이에요…",
						"english": "The truth… will only harm you…",
						"japanese": "真実は…あなたを傷つけるだけです…",
						"chinese": "真相…只会伤害你…",
						"french": "La vérité… ne fera que vous blesser…",
						"spanish": "La verdad… solo te hará daño…",
						"vietnamese": "Sự thật… chỉ làm hại ngươi thôi…",
						"thai": "ความจริง...จะทำร้ายเธอเท่านั้น...",
						"hindi": "सच... तुम्हें सिर्फ नुकसान पहुंचाएगा..."
					},
					"speaker": "echo",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "순간, 거울 속 에코의 형상이 일그러졌다. 섬뜩한 빛깔이 스쳤다.",
						"english": "For a moment, Echo's reflection in the mirror distorted. An eerie light flashed across it.",
						"japanese": "一瞬、鏡の中のエコーの姿が歪んだ。不気味な光がよぎった。",
						"chinese": "瞬间，镜中艾可的形象扭曲了。一道诡异的光芒闪过。",
						"french": "Un instant, la forme d'Écho dans le miroir se déforma. Une lumière étrange la traversa.",
						"spanish": "Por un instante, la figura de Eco en el espejo se distorsionó. Un brillo espeluznante la cruzó.",
						"vietnamese": "Khoảnh khắc, hình ảnh của Echo trong gương méo mó. Một ánh sáng rùng rợn vụt qua.",
						"thai": "ชั่วขณะหนึ่ง เงาของเอคโค่ในกระจกบิดเบี้ยว แสงสยองขวัญวาบผ่าน",
						"hindi": "एक पल के लिए, दर्पण में इको का प्रतिबिंब विकृत हो गया। एक भयानक चमक उस पर से गुज़री।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "뭐야… 저건…",
						"english": "What… was that…",
						"japanese": "あれは…何だ…",
						"chinese": "那是…什么…",
						"french": "Qu'est-ce que… c'était…",
						"spanish": "Qué… fue eso…",
						"vietnamese": "Cái gì… đó là…",
						"thai": "อะไรนะ... นั่นมันอะไร...",
						"hindi": "वो... क्या था..."
					},
					"emotion": "base"
				},
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "random_boss",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "이곳의 비밀은… 너희가 알 필요 없다.",
						"english": "The secret of this place… is none of your concern.",
						"japanese": "ここの秘密は…お前たちが知る必要はない。",
						"chinese": "这个地方的秘密…你们没必要知道。",
						"french": "Le secret de cet endroit… ne vous regarde pas.",
						"spanish": "El secreto de este lugar… no es de vuestra incumbencia.",
						"vietnamese": "Bí mật của nơi này… các ngươi không cần biết.",
						"thai": "ความลับของที่นี่...พวกแกไม่จำเป็นต้องรู้",
						"hindi": "इस जगह का रहस्य... तुम्हें जानने की जरूरत नहीं है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그렇게 둘까 보냐!",
						"english": "I won't let it be!",
						"japanese": "そうさせるか！",
						"chinese": "才不会让你得逞！",
						"french": "Pas question !",
						"spanish": "¡No lo permitiré!",
						"vietnamese": "Ta sẽ không để yên đâu!",
						"thai": "ไม่มีทาง!",
						"hindi": "मैं ऐसा नहीं होने दूंगा!"
					},
					"emotion": "angry"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "echo",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "…여전히 여기 있군요. 왜… 멈추지 않죠?",
						"english": "…Still here, I see. Why… don't you stop?",
						"japanese": "…まだここにいるんですね。なぜ…やめないのですか？",
						"chinese": "…你还在啊。为什么…不停止呢？",
						"french": "…Toujours là, je vois. Pourquoi… ne vous arrêtez-vous pas ?",
						"spanish": "…Todavía aquí, veo. ¿Por qué… no te detienes?",
						"vietnamese": "…Ngươi vẫn ở đây à. Tại sao… không dừng lại?",
						"thai": "...ยังอยู่ที่นี่อีกรึ ทำไม...ไม่หยุดล่ะ?",
						"hindi": "...अभी भी यहीं हो, मुझे दिख रहा है। तुम क्यों... रुकते नहीं?"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "너도 여기 갇힌 거야, 에코?",
						"english": "Are you trapped here too, Echo?",
						"japanese": "君もここに閉じ込められたのかい、エコー？",
						"chinese": "艾可，你也被困在这里了吗？",
						"french": "Es-tu piégé ici aussi, Echo ?",
						"spanish": "¿Tú también estás atrapada aquí, Echo?",
						"vietnamese": "Echo, em cũng bị mắc kẹt ở đây sao?",
						"thai": "เอคโค่ เธอเองก็ติดอยู่ที่นี่ด้วยเหรอ?",
						"hindi": "एखो, तुम भी यहां फंसी हो क्या?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "저는… 관리인이에요. 이 시스템의… 일부.",
						"english": "I am... the caretaker. Part of... this system.",
						"japanese": "私は…管理官です。このシステムの…一部です。",
						"chinese": "我…是管理员。是这个系统…的一部分。",
						"french": "Je suis... le gardien. Une partie de... ce système.",
						"spanish": "Yo soy... el cuidador. Parte de... este sistema.",
						"vietnamese": "Tôi là... người quản lý. Một phần của... hệ thống này.",
						"thai": "ฉันคือ... ผู้ดูแล ส่วนหนึ่งของ... ระบบนี้",
						"hindi": "मैं... देखभाल करने वाला हूँ। इस प्रणाली का... एक हिस्सा।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그의 눈빛에서 벗어날 수 없는 절망이 느껴졌다.",
						"english": "In his eyes, I saw inescapable despair.",
						"japanese": "彼の瞳に、逃れようのない絶望を感じた。",
						"chinese": "从他的眼神中，我感受到了无法摆脱的绝望。",
						"french": "Dans ses yeux, je sentais un désespoir inéluctable.",
						"spanish": "En sus ojos, sentí una desesperación ineludible.",
						"vietnamese": "Trong mắt anh ta, tôi thấy sự tuyệt vọng không thể thoát khỏi.",
						"thai": "ในดวงตาของเขา ฉันเห็นความสิ้นหวังที่ไม่อาจหลีกหนีได้",
						"hindi": "उसकी आँखों में, मुझे एक अटूट निराशा महसूस हुई।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "누가 널 이렇게 만든 거지?",
						"english": "Who made you like this?",
						"japanese": "誰が君をこんな風にしたんだ？",
						"chinese": "是谁把你变成这样的？",
						"french": "Qui t'a fait ça ?",
						"spanish": "¿Quién te hizo así?",
						"vietnamese": "Ai đã biến anh thành ra thế này?",
						"thai": "ใครทำให้เธอเป็นแบบนี้?",
						"hindi": "किसने तुम्हें ऐसा बनाया?"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "echo",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "제발… 멈춰요! 당신마저… 영원히 갇히게 될 거예요!",
						"english": "Please... stop! You too... will be trapped forever!",
						"japanese": "お願い…止まって！あなたまで…永遠に閉じ込められてしまう！",
						"chinese": "拜托…停下！你也会…永远被困住的！",
						"french": "S'il vous plaît... arrêtez ! Vous aussi... serez piégé pour toujours !",
						"spanish": "¡Por favor... detente! ¡Tú también... quedarás atrapado para siempre!",
						"vietnamese": "Làm ơn... dừng lại! Anh cũng sẽ... bị mắc kẹt mãi mãi!",
						"thai": "ได้โปรด... หยุดเถอะ! คุณเองก็จะ... ถูกขังอยู่ตลอดไป!",
						"hindi": "कृपया... रुक जाओ! तुम भी... हमेशा के लिए फंस जाओगे!"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "우린 진실을 밝힐 거야. 갇히지 않아.",
						"english": "We will uncover the truth. We won't be trapped.",
						"japanese": "私たちは真実を明らかにする。閉じ込められたりはしない。",
						"chinese": "我们会揭露真相的。我们不会被困住。",
						"french": "Nous allons découvrir la vérité. Nous ne serons pas piégés.",
						"spanish": "Desvelaremos la verdad. No seremos atrapados.",
						"vietnamese": "Chúng tôi sẽ phơi bày sự thật. Chúng tôi sẽ không bị mắc kẹt.",
						"thai": "เราจะเปิดเผยความจริง เราจะไม่ถูกขัง",
						"hindi": "हम सच्चाई उजागर करेंगे। हम नहीं फंसेंगे।"
					}
				},
				{
					"content": {
						"korean": "에코는 마치 정해진 궤도를 도는 인형 같았다. 똑같은 말, 똑같은 움직임.",
						"english": "Echo was like a doll on a fixed trajectory. The same words, the same movements.",
						"japanese": "エコーはまるで決まった軌道を辿る人形のようだった。同じ言葉、同じ動き。",
						"chinese": "艾可就像一个沿着固定轨迹运行的玩偶。同样的话语，同样的动作。",
						"french": "Echo était comme une poupée sur une trajectoire fixe. Les mêmes mots, les mêmes mouvements.",
						"spanish": "Echo era como una muñeca en una trayectoria fija. Las mismas palabras, los mismos movimientos.",
						"vietnamese": "Echo giống như một con búp bê trên quỹ đạo cố định. Cùng một lời nói, cùng một cử động.",
						"thai": "เอคโค่เหมือนตุ๊กตาที่เคลื่อนที่ไปตามวงโคจรที่กำหนดไว้ คำพูดเดิม การเคลื่อนไหวเดิมๆ",
						"hindi": "एखो एक निश्चित प्रक्षेपवक्र पर एक गुड़िया की तरह थी। वही शब्द, वही हरकतें।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "주변 거울들이 섬뜩하게 흔들렸다. 왜곡된 그림자들이 번뜩였다.",
						"english": "The surrounding mirrors shook eerily. Distorted shadows flickered.",
						"japanese": "周囲の鏡が不気味に揺れた。歪んだ影がちらついた。",
						"chinese": "周围的镜子诡异地晃动着。扭曲的影子闪烁不定。",
						"french": "Les miroirs environnants tremblaient étrangement. Des ombres déformées scintillaient.",
						"spanish": "Los espejos circundantes temblaron de forma espeluznante. Sombras distorsionadas parpadearon.",
						"vietnamese": "Những tấm gương xung quanh rung lên một cách kỳ lạ. Những bóng hình méo mó lóe lên.",
						"thai": "กระจกรอบข้างสั่นสะเทือนอย่างน่าขนลุก เงาที่บิดเบี้ยวส่องประกายวับๆ",
						"hindi": "आसपास के शीशे भयावह रूप से हिल गए। विकृत परछाइयां चमक उठीं।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "direction",
					"speaker": "random_boss",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						3
					]
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이곳의 환상은 깨뜨릴 수 없다.",
						"english": "The illusions here cannot be broken.",
						"japanese": "ここの幻想は打ち破れない。",
						"chinese": "这里的幻象无法被打破。",
						"french": "Les illusions d'ici ne peuvent être brisées.",
						"spanish": "Las ilusiones de aquí no se pueden romper.",
						"vietnamese": "Ảo ảnh ở đây không thể bị phá vỡ.",
						"thai": "ภาพลวงตาที่นี่ไม่สามารถถูกทำลายได้",
						"hindi": "यहां के भ्रम तोड़े नहीं जा सकते।"
					}
				},
				{
					"content": {
						"korean": "해보지 않고는 모르지!",
						"english": "We won't know until we try!",
						"japanese": "やってみなければ分からない！",
						"chinese": "不试试怎么知道！",
						"french": "On ne le saura pas tant qu'on n'aura pas essayé !",
						"spanish": "¡No lo sabremos hasta que lo intentemos!",
						"vietnamese": "Chưa thử thì làm sao biết!",
						"thai": "ไม่ลองก็ไม่รู้หรอก!",
						"hindi": "जब तक कोशिश नहीं करते, पता नहीं चलेगा!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "이곳에 영원히 갇혀… 나처럼 순찰하게 될 거다…",
						"english": "Forever trapped here... patrolling like me...",
						"japanese": "ここに永遠に閉じ込められ…私のように巡回することになるだろう…",
						"chinese": "永远被困在这里…像我一样巡逻…",
						"french": "Pour toujours piégé ici... à patrouiller comme moi...",
						"spanish": "Atrapado aquí para siempre... patrullando como yo...",
						"vietnamese": "Mãi mãi bị mắc kẹt ở đây... tuần tra như ta...",
						"thai": "ติดอยู่ที่นี่ตลอดไป... ลาดตระเวนเหมือนฉัน...",
						"hindi": "हमेशा के लिए यहाँ फँस जाओगे... मेरी तरह गश्त लगाते रहोगे..."
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "크윽… 아직 포기 안 해!",
						"english": "Ugh... I won't give up yet!",
						"japanese": "くっ…まだ諦めない！",
						"chinese": "呃...我还没放弃！",
						"french": "Ugh... je n'abandonne pas encore !",
						"spanish": "Ugh... ¡todavía no me rindo!",
						"vietnamese": "Khốn kiếp... Ta vẫn chưa từ bỏ!",
						"thai": "อึก... ฉันยังไม่ยอมแพ้!",
						"hindi": "उफ़... मैं अभी हार नहीं मानूँगा!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "거울은 모든 것을 집어삼켰다. 절망 속에서 그들은 다시 일어섰다.",
						"english": "The mirror swallowed everything. In despair, they rose again.",
						"japanese": "鏡は全てを飲み込んだ。絶望の中、彼らは再び立ち上がった。",
						"chinese": "镜子吞噬了一切。在绝望中，他们再次崛起。",
						"french": "Le miroir a tout englouti. Dans le désespoir, ils se sont relevés.",
						"spanish": "El espejo lo devoró todo. En la desesperación, se levantaron de nuevo.",
						"vietnamese": "Tấm gương nuốt chửng mọi thứ. Trong tuyệt vọng, họ lại đứng lên.",
						"thai": "กระจกกลืนกินทุกสิ่ง ในความสิ้นหวัง พวกเขาได้ลุกขึ้นอีกครั้ง",
						"hindi": "दर्पण ने सब कुछ निगल लिया। निराशा में, वे फिर से उठ खड़े हुए।"
					},
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"speaker": "echo",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "더 이상은 안 돼요… 여기가… 끝이에요…",
						"english": "I can't go on... This is... the end...",
						"japanese": "もう…無理…ここが…終わりだ…",
						"chinese": "不行了…这里…就是尽头了…",
						"french": "Je ne peux plus... C'est... la fin...",
						"spanish": "No puedo más... Este es... el final...",
						"vietnamese": "Không thể nữa rồi... Đây là... kết thúc...",
						"thai": "ไม่ไหวแล้ว... ที่นี่... คือจุดจบ...",
						"hindi": "और नहीं... यहीं... अंत है..."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "echo"
				},
				{
					"content": {
						"korean": "이제 진실을 밝힐 시간이야.",
						"english": "It's time to reveal the truth.",
						"japanese": "今こそ真実を明かす時だ。",
						"chinese": "现在是揭露真相的时候了。",
						"french": "Il est temps de révéler la vérité.",
						"spanish": "Es hora de revelar la verdad.",
						"vietnamese": "Đã đến lúc tiết lộ sự thật.",
						"thai": "ได้เวลาเปิดเผยความจริงแล้ว",
						"hindi": "अब सच उजागर करने का समय है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"type": "direction",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "결국 여기까지 왔군. 하지만… 보게 될 것은 절망뿐이다.",
						"english": "So you've made it this far. But... all you'll see is despair.",
						"japanese": "ついにここまで来たか。だが…見るのは絶望だけだ。",
						"chinese": "终究还是走到这里了。但是…你将看到的只有绝望。",
						"french": "Tu es enfin arrivé jusqu'ici. Mais... tout ce que tu verras est le désespoir.",
						"spanish": "Así que has llegado hasta aquí. Pero... todo lo que verás es desesperación.",
						"vietnamese": "Cuối cùng ngươi cũng đến được đây. Nhưng... tất cả những gì ngươi sẽ thấy chỉ là tuyệt vọng.",
						"thai": "ในที่สุดเจ้าก็มาถึงที่นี่ แต่... สิ่งที่เจ้าจะได้เห็นมีแต่ความสิ้นหวังเท่านั้น",
						"hindi": "तो तुम यहाँ तक पहुँच गए। लेकिन... तुम केवल निराशा ही देखोगे।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "절망은 네놈에게나 어울려!",
						"english": "Despair suits you, not me!",
						"japanese": "絶望はお前にお似合いだ！",
						"chinese": "绝望才配得上你！",
						"french": "Le désespoir te va bien à toi !",
						"spanish": "¡La desesperación te queda bien a ti!",
						"vietnamese": "Tuyệt vọng chỉ hợp với ngươi thôi!",
						"thai": "ความสิ้นหวังเหมาะกับแกต่างหาก!",
						"hindi": "निराशा तुझ पर ही जंचती है!"
					}
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "어리석은… 겨우 나를 쓰러뜨린다고… 시스템이… 멈출까…",
						"english": "Foolish... Do you think merely defeating me... will stop... the system...",
						"japanese": "愚かな…私を倒したくらいで…システムが…止まるとでも…？",
						"chinese": "愚蠢…区区打败我…系统…就会停止吗…",
						"french": "Stupide... Penses-tu qu'en me battant... le système... s'arrêtera...?",
						"spanish": "Estúpido... ¿Crees que con solo derribarme... el sistema... se detendrá...?",
						"vietnamese": "Ngốc nghếch... Ngươi nghĩ chỉ cần đánh bại ta... hệ thống... sẽ dừng lại sao...?",
						"thai": "โง่เขลา... แค่โค่นฉันได้... ระบบ... จะหยุดงั้นหรือ...?",
						"hindi": "मूर्ख... क्या तुम्हें लगता है कि मुझे हराने से ही... सिस्टम... रुक जाएगा...?"
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "정체 모를 적은 사라졌다. 하지만 '파사드'의 불안한 기운은 여전했다.",
						"english": "The unknown enemy vanished. But the unsettling aura of 'Facade' still lingered.",
						"japanese": "正体不明の敵は消えた。しかし、『ファサード』の不穏な気配は依然として残っていた。",
						"chinese": "不明身份的敌人消失了。但“Facade”不安的气息依然存在。",
						"french": "L'ennemi inconnu a disparu. Mais l'aura inquiétante de 'Facade' persistait.",
						"spanish": "El enemigo desconocido desapareció. Pero el aura inquietante de 'Fachada' aún persistía.",
						"vietnamese": "Kẻ thù không rõ danh tính đã biến mất. Nhưng khí tức bất an của 'Facade' vẫn còn đó.",
						"thai": "ศัตรูนิรนามหายไปแล้ว แต่บรรยากาศที่น่ากังวลของ 'Facade' ยังคงอยู่",
						"hindi": "अज्ञात शत्रु गायब हो गया। लेकिन 'मुखौटा' का अशांत आभास अभी भी बना हुआ था।"
					}
				},
				{
					"speaker": "echo",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "그림자는… 여전히… 남아있어요…",
						"english": "The shadow... still... remains...",
						"japanese": "影は…まだ…残っているわ…",
						"chinese": "阴影…依然…存在着…",
						"french": "L'ombre... est toujours... là...",
						"spanish": "La sombra... todavía... permanece...",
						"vietnamese": "Bóng tối... vẫn còn... ở đó...",
						"thai": "เงา... ยังคง... อยู่...",
						"hindi": "छाया... अभी भी... बाकी है..."
					},
					"speaker": "echo",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "우린 끝까지 파헤칠 거야. 숨겨진 진실을.",
						"english": "We'll uncover it all. The hidden truth, to the very end.",
						"japanese": "私たちは最後まで暴き出す。隠された真実を。",
						"chinese": "我们会彻底揭露一切。直到最后，揭露隐藏的真相。",
						"french": "Nous allons tout déterrer. La vérité cachée, jusqu'au bout.",
						"spanish": "Lo desenterraremos todo. La verdad oculta, hasta el final.",
						"vietnamese": "Chúng ta sẽ khám phá tất cả. Sự thật ẩn giấu, đến cùng.",
						"thai": "เราจะเปิดโปงทุกอย่าง ความจริงที่ซ่อนอยู่จนถึงที่สุด",
						"hindi": "हम सब कुछ उजागर करेंगे। छुपी हुई सच्चाई, अंत तक।"
					}
				},
				{
					"content": {
						"korean": "'파사드'의 깊은 곳. 더 큰 혼란이 기다리고 있었다.",
						"english": "Deep within 'Facade'. Greater chaos awaited.",
						"japanese": "『ファサード』の深淵。さらなる混乱が待ち受けていた。",
						"chinese": "在“Facade”的深处。更大的混乱正在等待着。",
						"french": "Au plus profond de 'Facade'. Un chaos plus grand attendait.",
						"spanish": "En lo profundo de 'Fachada'. Un caos mayor aguardaba.",
						"vietnamese": "Sâu thẳm bên trong 'Facade'. Một sự hỗn loạn lớn hơn đang chờ đợi.",
						"thai": "ลึกเข้าไปใน 'Facade' ความวุ่นวายที่ใหญ่กว่ารออยู่",
						"hindi": "'मुखौटा' के गहरे में। एक बड़ा अराजकता इंतजार कर रहा था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"닥스와 함께, 마침내 '파사드' 내부로 들어섰다.",
			"화려한 거울들이 진실을 숨기고 있는 곳.",
			"그곳에서, 우리는 섬뜩한 관리인 에코를 만났다.",
			"그는 무언가를 감추고 있었다. 마치 갇힌 것처럼.",
			"정해진 길을 맴도는 그림자, 속삭이는 거울 속 진실."
		],
		"english": [
			"With Daxs, we finally stepped inside 'Facade'.",
			"A place where dazzling mirrors hide the truth.",
			"There, we met the eerie caretaker, Echo.",
			"He was hiding something. As if trapped.",
			"Shadows circling a set path, truth whispering in the mirrors."
		],
		"japanese": [
			"ダックスと共に、ついに「ファサード」の内部へと足を踏み入れた。",
			"華やかな鏡が真実を隠している場所。",
			"そこで、我々は不気味な管理人、エコーと出会った。",
			"彼は何かを隠していた。まるで囚われているかのように。",
			"決められた道を巡る影、囁く鏡の中の真実。"
		],
		"chinese": [
			"与达克斯一起，我们终于踏入了“门面”内部。",
			"一个华丽的镜子隐藏着真相的地方。",
			"在那里，我们遇到了诡异的管理员艾可。",
			"他隐藏着什么。仿佛被困住了一样。",
			"影子在既定的道路上徘徊，镜子中低语着真相。"
		],
		"french": [
			"Avec Daxs, nous sommes enfin entrés dans la 'Façade'.",
			"Un lieu où de somptueux miroirs dissimulent la vérité.",
			"Là, nous avons rencontré l'inquiétant gardien, Echo.",
			"Il cachait quelque chose. Comme s'il était piégé.",
			"Des ombres tourbillonnant sur un chemin tracé, la vérité chuchotant dans les miroirs."
		],
		"spanish": [
			"Con Daxs, finalmente entramos en la 'Fachada'.",
			"Un lugar donde espejos deslumbrantes ocultan la verdad.",
			"Allí, conocimos al espeluznante cuidador, Eco.",
			"Él ocultaba algo. Como si estuviera atrapado.",
			"Sombras que circundan un camino fijo, la verdad susurrando en los espejos."
		],
		"vietnamese": [
			"Cùng Daxs, cuối cùng chúng tôi cũng bước vào bên trong 'Façade'.",
			"Nơi những tấm gương lộng lẫy che giấu sự thật.",
			"Ở đó, chúng tôi gặp người quản lý đáng sợ, Echo.",
			"Anh ta đang che giấu điều gì đó. Như thể bị mắc kẹt.",
			"Bóng tối lảng vảng trên con đường đã định, sự thật thì thầm trong gương."
		],
		"thai": [
			"กับแดกซ์ ในที่สุดเราก็ก้าวเข้าไปใน 'Facade' ได้สำเร็จ",
			"ที่ซึ่งกระจกอันแพรวพราวซ่อนเร้นความจริงเอาไว้",
			"ที่นั่น เราได้พบกับผู้ดูแลที่น่าขนลุก เอคโค่",
			"เขากำลังซ่อนบางสิ่งไว้ ราวกับถูกกักขัง",
			"เงาที่วนเวียนอยู่บนเส้นทางที่กำหนด ความจริงที่กระซิบอยู่ในกระจก"
		],
		"hindi": [
			"डैक्स के साथ, हम आखिरकार 'फसाड' के अंदर दाखिल हुए।",
			"एक ऐसी जगह जहाँ चमकदार दर्पण सच को छुपाते हैं।",
			"वहाँ, हम रहस्यमयी देखभालकर्ता, इको से मिले।",
			"वह कुछ छिपा रहा था। मानो फँसा हुआ हो।",
			"निर्धारित मार्ग पर मंडराती परछाइयाँ, दर्पणों में फुसफुसाती सच्चाई।"
		]
	}
} as const;
