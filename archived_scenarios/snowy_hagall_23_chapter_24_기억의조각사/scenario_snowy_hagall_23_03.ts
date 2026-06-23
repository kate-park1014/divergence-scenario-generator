export const scenario_snowy_hagall_23_03 = {
	"scenario_id": "snowy_hagall_23_03",
	"order": 3,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"finn": {
			"id": "mon_3e3930d2-c2d3-4ad0-9818-26d259edac77",
			"name": {
				"korean": "핀",
				"english": "Finn",
				"japanese": "フィン",
				"chinese": "芬恩",
				"french": "Finn",
				"spanish": "Finn",
				"vietnamese": "Finn",
				"thai": "ฟินน์",
				"hindi": "फिन"
			},
			"description": "",
			"face_image_url": "",
			"battle_sprite_url": ""
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"고대 도서관 유적. 얼음 아래 잠든 지식의 무덤.",
			"이곳에서 핀은 금지된 기록들을 추적한다.",
			"그러나 진실은 언제나 불편한 법.",
			"누군가 의도적으로 역사를 지우고 있었다."
		],
		"english": [
			"Ancient library ruins. A tomb of knowledge, dormant beneath the ice.",
			"Here, Finn tracks forbidden records.",
			"But the truth is always inconvenient.",
			"Someone was intentionally erasing history."
		],
		"japanese": [
			"古代図書館の遺跡。氷の下に眠る知識の墓。",
			"ここでフィンは禁断の記録を追う。",
			"しかし、真実は常に不都合なものだ。",
			"誰かが意図的に歴史を消し去っていた。"
		],
		"chinese": [
			"古代图书馆遗迹。冰封之下，知识的墓地。",
			"在这里，芬恩追寻着被禁的记录。",
			"然而，真相总是令人不适。",
			"有人蓄意抹去历史。"
		],
		"french": [
			"Ruines de l'ancienne bibliothèque. Un tombeau de savoir, endormi sous la glace.",
			"Ici, Finn traque des registres interdits.",
			"Mais la vérité est toujours dérangeante.",
			"Quelqu'un effaçait délibérément l'histoire."
		],
		"spanish": [
			"Ruinas de una antigua biblioteca. Un sepulcro de conocimiento, dormido bajo el hielo.",
			"Aquí, Finn sigue el rastro de registros prohibidos.",
			"Pero la verdad siempre es incómoda.",
			"Alguien estaba borrando la historia intencionalmente."
		],
		"vietnamese": [
			"Tàn tích thư viện cổ. Một lăng mộ tri thức ngủ yên dưới lớp băng.",
			"Tại đây, Finn truy tìm những ghi chép bị cấm.",
			"Nhưng sự thật thì luôn bất tiện.",
			"Ai đó đang cố ý xóa bỏ lịch sử."
		],
		"thai": [
			"ซากปรักหักพังของห้องสมุดโบราณ สุสานแห่งความรู้ที่หลับใหลใต้ผืนน้ำแข็ง",
			"ที่นี่ ฟินน์ตามรอยบันทึกต้องห้าม",
			"แต่ความจริงก็มักจะไม่สะดวกสบายเสมอ",
			"มีใครบางคนกำลังลบประวัติศาสตร์โดยเจตนา"
		],
		"hindi": [
			"प्राचीन पुस्तकालय के खंडहर। बर्फ के नीचे दबी ज्ञान की कब्र।",
			"यहाँ, फिन निषिद्ध अभिलेखों का पता लगाता है।",
			"परन्तु सत्य सदैव असुविधाजनक होता है।",
			"कोई जानबूझकर इतिहास मिटा रहा था।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "얼음으로 뒤덮인 거대한 도서관 유적. 적막만이 가득하다.",
						"english": "Vast library ruins, covered in ice. Only silence fills the air.",
						"japanese": "氷に覆われた巨大な図書館の遺跡。静寂だけが満ちている。",
						"chinese": "冰雪覆盖的巨大图书馆遗迹。只有寂静弥漫。",
						"french": "Vastes ruines de bibliothèque, couvertes de glace. Seul le silence règne.",
						"spanish": "Vastas ruinas de una biblioteca, cubiertas de hielo. Solo el silencio llena el aire.",
						"vietnamese": "Tàn tích thư viện khổng lồ phủ đầy băng. Chỉ có sự tĩnh lặng bao trùm.",
						"thai": "ซากปรักหักพังของห้องสมุดขนาดใหญ่ที่ปกคลุมด้วยน้ำแข็ง มีเพียงความเงียบงันเท่านั้น",
						"hindi": "बर्फ से ढके विशाल पुस्तकालय के खंडहर। केवल सन्नाटा भरा है।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이런 곳에… 도서관이 있었다고?",
						"english": "A library... in a place like this?",
						"japanese": "こんな場所に… 図書館があったと？",
						"chinese": "这样的地方……竟然有过图书馆？",
						"french": "Une bibliothèque... dans un endroit pareil ?",
						"spanish": "¿Una biblioteca... en un lugar como este?",
						"vietnamese": "Ở nơi như thế này… mà có thư viện ư?",
						"thai": "ที่แบบนี้... เคยมีห้องสมุดเหรอ?",
						"hindi": "ऐसी जगह पर… पुस्तकालय था?"
					},
					"emotion": "base"
				},
				{
					"spot": [
						4,
						3
					],
					"type": "direction",
					"speaker": "finn",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "finn",
					"type": "speech",
					"content": {
						"korean": "왔군. 기다렸다.",
						"english": "You've come. I've been waiting.",
						"japanese": "来たか。待っていたぞ。",
						"chinese": "你来了。我等了很久。",
						"french": "Vous êtes venu. Je vous attendais.",
						"spanish": "Has venido. Te estaba esperando.",
						"vietnamese": "Ngươi đến rồi. Ta đã đợi.",
						"thai": "มาแล้วสินะ ฉันรออยู่",
						"hindi": "तुम आ गए। मैं इंतजार कर रहा था।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "당신이 핀? 여기서 뭘 하는 거지?",
						"english": "You're Finn? What are you doing here?",
						"japanese": "あなたがフィン？ここで何をしている？",
						"chinese": "你是芬恩？你在这里做什么？",
						"french": "Vous êtes Finn ? Que faites-vous ici ?",
						"spanish": "¿Eres Finn? ¿Qué haces aquí?",
						"vietnamese": "Ngươi là Finn ư? Ngươi đang làm gì ở đây?",
						"thai": "คุณคือฟินน์เหรอ? มาทำอะไรที่นี่?",
						"hindi": "तुम फिन हो? यहाँ क्या कर रहे हो?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "사라진 기록들을 연구하고 있어. 감춰진 진실을 찾고 있지.",
						"english": "I'm researching lost records. Searching for hidden truths.",
						"japanese": "消えた記録を研究している。隠された真実を探しているんだ。",
						"chinese": "我在研究那些消失的记录。寻找被隐藏的真相。",
						"french": "Je recherche des registres perdus. À la recherche de vérités cachées.",
						"spanish": "Estoy investigando registros perdidos. Buscando verdades ocultas.",
						"vietnamese": "Ta đang nghiên cứu những ghi chép đã biến mất. Tìm kiếm những sự thật bị che giấu.",
						"thai": "ฉันกำลังค้นคว้าบันทึกที่หายไป กำลังตามหาความจริงที่ซ่อนอยู่",
						"hindi": "मैं खोए हुए अभिलेखों पर शोध कर रहा हूँ। छिपे हुए सत्यों की तलाश कर रहा हूँ।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "finn"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"speaker": "finn",
					"duration_ms": 500
				},
				{
					"speaker": "finn",
					"type": "speech",
					"content": {
						"korean": "이걸 봐. 해독 불가능한 스칼드 기록이야.",
						"english": "Look at this. It's an indecipherable Skaldic record.",
						"japanese": "これを見てくれ。解読不能なスカルド記録だ。",
						"chinese": "看看这个。这是一份无法解读的斯卡尔德记录。",
						"french": "Regarde ça. C'est un registre scalde indéchiffrable.",
						"spanish": "Mira esto. Es un registro escáldico indescifrable.",
						"vietnamese": "Nhìn này. Đây là một ghi chép Skald không thể giải mã.",
						"thai": "ดูนี่สิ มันคือบันทึก Skald ที่ถอดรหัสไม่ได้",
						"hindi": "इसे देखो। यह एक अस्पष्ट स्कालडिक अभिलेख है।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "뭐가 적혀 있는데?",
						"english": "What's written here?",
						"japanese": "何が書いてあるんだ？",
						"chinese": "上面写了什么？",
						"french": "Qu'est-ce qui est écrit ?",
						"spanish": "¿Qué pone aquí?",
						"vietnamese": "Cái gì được viết vậy?",
						"thai": "มีอะไรเขียนอยู่?",
						"hindi": "क्या लिखा है?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "단편적이지만… '얼음 아래 갇힌 진실'에 대한 언급이 있어.",
						"english": "Fragmented, but... it mentions 'truth trapped beneath the ice'.",
						"japanese": "断片的だが…『氷の下に閉じ込められた真実』という記述がある。",
						"chinese": "虽然是片段，但……提到了‘冰封下的真相’。",
						"french": "Fragmenté, mais... il mentionne 'la vérité emprisonnée sous la glace'.",
						"spanish": "Fragmentado, pero... menciona 'la verdad atrapada bajo el hielo'.",
						"vietnamese": "Rời rạc, nhưng... nó đề cập đến 'sự thật bị mắc kẹt dưới băng'.",
						"thai": "เป็นชิ้นส่วน แต่... มันพูดถึง 'ความจริงที่ถูกขังใต้น้ำแข็ง'",
						"hindi": "खंडित है, लेकिन... इसमें 'बर्फ के नीचे फंसी सच्चाई' का जिक्र है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "finn"
				},
				{
					"type": "speech",
					"speaker": "finn",
					"content": {
						"korean": "누군가 이 부분을 훼손했어. 의도적으로.",
						"english": "Someone defaced this part. Deliberately.",
						"japanese": "誰かがこの部分を汚した。意図的に。",
						"chinese": "有人故意破坏了这一部分。",
						"french": "Quelqu'un a dégradé cette partie. Délibérément.",
						"spanish": "Alguien desfiguró esta parte. Deliberadamente.",
						"vietnamese": "Ai đó đã làm hỏng phần này. Cố ý.",
						"thai": "มีคนทำลายส่วนนี้ จงใจ",
						"hindi": "किसी ने इस हिस्से को जानबूझकर खराब किया है।"
					},
					"emotion": "angry"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"speaker": "finn",
					"duration_ms": 500,
					"spot": [
						3,
						4
					]
				},
				{
					"type": "speech",
					"speaker": "finn",
					"content": {
						"korean": "더 찾았어. 모든 기록이 조작된 흔적이 역력해.",
						"english": "Found more. All records clearly show signs of manipulation.",
						"japanese": "もっと見つけた。全ての記録に操作された痕跡が歴然だ。",
						"chinese": "找到了更多。所有记录都明显有被篡改的痕迹。",
						"french": "J'ai trouvé plus. Tous les dossiers montrent clairement des signes de manipulation.",
						"spanish": "Encontré más. Todos los registros muestran claramente signos de manipulación.",
						"vietnamese": "Tìm thấy thêm. Tất cả các ghi chép đều có dấu hiệu bị thao túng rõ ràng.",
						"thai": "เจออีกแล้ว บันทึกทั้งหมดแสดงร่องรอยการบิดเบือนอย่างชัดเจน",
						"hindi": "और मिला। सभी रिकॉर्ड स्पष्ट रूप से हेरफेर के संकेत दिखाते हैं।"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "설마… 시스템적인 은폐라고?",
						"english": "Could it be... a systemic cover-up?",
						"japanese": "まさか…組織的な隠蔽なのか？",
						"chinese": "难道……是系统性的掩盖？",
						"french": "Serait-ce... une dissimulation systémique ?",
						"spanish": "¿Será... un encubrimiento sistémico?",
						"vietnamese": "Không lẽ... là sự che đậy có hệ thống?",
						"thai": "ไม่นะ... การปกปิดทั้งระบบเหรอ?",
						"hindi": "क्या यह... एक व्यवस्थित छिपाव है?"
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그래. 특정 세력이 역사를 지우고 있는 거야.",
						"english": "Yes. A certain faction is erasing history.",
						"japanese": "そうだ。特定の勢力が歴史を消しているんだ。",
						"chinese": "没错。某个势力正在抹去历史。",
						"french": "Oui. Une certaine faction est en train d'effacer l'histoire.",
						"spanish": "Sí. Una facción específica está borrando la historia.",
						"vietnamese": "Đúng vậy. Một thế lực nào đó đang xóa bỏ lịch sử.",
						"thai": "ใช่แล้ว กลุ่มอำนาจบางกลุ่มกำลังลบประวัติศาสตร์",
						"hindi": "हाँ। एक निश्चित गुट इतिहास मिटा रहा है।"
					},
					"emotion": "angry",
					"speaker": "finn",
					"type": "speech"
				},
				{
					"content": {
						"korean": "머릿속이… 자꾸 차가워지는 것 같아.",
						"english": "My mind... feels like it's growing colder.",
						"japanese": "頭の中が…どんどん冷たくなっていくようだ。",
						"chinese": "脑海中……仿佛越来越冰冷。",
						"french": "Mon esprit... j'ai l'impression qu'il se glace de plus en plus.",
						"spanish": "Mi mente... siento que se está volviendo más fría.",
						"vietnamese": "Đầu óa... dường như ngày càng lạnh lẽo.",
						"thai": "ในหัวของฉัน... รู้สึกเหมือนกำลังเย็นชาลงเรื่อยๆ",
						"hindi": "मेरा दिमाग... ऐसा लग रहा है जैसे ठंडा होता जा रहा है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "눈보라 속 고통받는 사람들의 잔상이 눈앞을 스쳤다. 익숙한 기시감이었다.",
						"english": "Lingering images of people suffering in a blizzard flashed before my eyes. It was a familiar sense of déjà vu.",
						"japanese": "吹雪の中で苦しむ人々の残像が目の前をよぎった。それは、見慣れたデジャヴだった。",
						"chinese": "暴风雪中受苦的人们的残影掠过眼前。那是一种熟悉的既视感。",
						"french": "Des images persistantes de personnes souffrant dans un blizzard ont défilé devant mes yeux. C'était un sentiment de déjà-vu familier.",
						"spanish": "Imágenes persistentes de personas sufriendo en una tormenta de nieve pasaron ante mis ojos. Era una sensación familiar de déjà vu.",
						"vietnamese": "Những hình ảnh còn sót lại của những người đang chịu đựng trong bão tuyết lướt qua mắt tôi. Đó là một cảm giác déjà vu quen thuộc.",
						"thai": "ภาพหลอนของผู้คนที่ทนทุกข์ทรมานในพายุหิมะฉายแวบขึ้นมาในตา มันเป็นความรู้สึกเดจาวูที่คุ้นเคย",
						"hindi": "बर्फ़ीले तूफ़ान में पीड़ित लोगों की बची हुई छवियाँ मेरी आँखों के सामने कौंध गईं। यह एक परिचित déjà vu की भावना थी।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "finn",
					"type": "direction",
					"spot": [
						2,
						4
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "진실은 덮어질수록 더 큰 비극을 낳아.",
						"english": "The more truth is buried, the greater the tragedy it brings.",
						"japanese": "真実が隠されるほど、より大きな悲劇を生む。",
						"chinese": "真相被掩盖得越深，就会酿成更大的悲剧。",
						"french": "Plus la vérité est enfouie, plus elle engendre de grandes tragédies.",
						"spanish": "Cuanto más se entierra la verdad, mayor es la tragedia que engendra.",
						"vietnamese": "Sự thật càng bị che giấu, bi kịch càng lớn.",
						"thai": "ยิ่งความจริงถูกฝังมากเท่าไหร่ ก็ยิ่งนำมาซึ่งโศกนาฏกรรมที่ใหญ่ขึ้นเท่านั้น",
						"hindi": "जितना अधिक सच दफ़नाया जाता है, उतनी ही बड़ी त्रासदी वह लाता है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "finn"
				},
				{
					"content": {
						"korean": "하지만 멈출 수 없어. 더는 속고 싶지 않아.",
						"english": "But I can't stop. I won't be deceived anymore.",
						"japanese": "しかし、止まることはできない。もうこれ以上騙されたくない。",
						"chinese": "但我不能停下。我不想再被欺骗了。",
						"french": "Mais je ne peux pas m'arrêter. Je ne veux plus être trompé.",
						"spanish": "Pero no puedo parar. No quiero que me engañen más.",
						"vietnamese": "Nhưng tôi không thể dừng lại. Tôi không muốn bị lừa dối nữa.",
						"thai": "แต่ฉันหยุดไม่ได้ ฉันไม่อยากถูกหลอกอีกต่อไป",
						"hindi": "लेकिन मैं रुक नहीं सकता। मैं अब और धोखा नहीं खाना चाहता।"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "네가 알게 될 진실은… 감당하기 힘들 거야.",
						"english": "The truth you'll uncover... it'll be hard to bear.",
						"japanese": "あなたが知る真実は…耐え難いだろう。",
						"chinese": "你将发现的真相…将难以承受。",
						"french": "La vérité que tu découvriras… sera difficile à supporter.",
						"spanish": "La verdad que descubrirás... será difícil de soportar.",
						"vietnamese": "Sự thật mà ngươi sẽ biết… sẽ rất khó chấp nhận.",
						"thai": "ความจริงที่คุณจะได้รู้...มันจะยากที่จะรับมือไหว",
						"hindi": "जो सच तुम्हें पता चलेगा... वह संभालना मुश्किल होगा।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "finn"
				},
				{
					"content": {
						"korean": "그래도 가야 해.",
						"english": "Still, I must go on.",
						"japanese": "それでも、行かねばならない。",
						"chinese": "即便如此，我还是要继续。",
						"french": "Pourtant, je dois avancer.",
						"spanish": "Aun así, debo seguir.",
						"vietnamese": "Dù vậy, ta vẫn phải đi.",
						"thai": "ถึงอย่างนั้นก็ต้องไป",
						"hindi": "फिर भी, मुझे जाना होगा।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "진실은… 너희를 집어삼킬 것이다. 반복될 뿐…",
						"english": "The truth... will devour you. It will only repeat...",
						"japanese": "真実は…お前たちを飲み込むだろう。繰り返すだけだ…",
						"chinese": "真相…将吞噬你们。只会重演…",
						"french": "La vérité… vous dévorera. Elle ne fera que se répéter…",
						"spanish": "La verdad... os devorará. Solo se repetirá...",
						"vietnamese": "Sự thật… sẽ nuốt chửng các ngươi. Nó chỉ lặp lại…",
						"thai": "ความจริง...จะกลืนกินพวกเจ้า มันจะซ้ำรอยเดิมเท่านั้น...",
						"hindi": "सच... तुम्हें निगल जाएगा। यह बस दोहराया जाएगा..."
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "…뭐라고? 반복된다고?",
						"english": "...What? Repeat?",
						"japanese": "…何だと？繰り返すだと？",
						"chinese": "…什么？重复？",
						"french": "…Quoi ? Se répéter ?",
						"spanish": "...¿Qué? ¿Repetir?",
						"vietnamese": "…Cái gì? Lặp lại sao?",
						"thai": "...อะไรนะ? ซ้ำรอย?",
						"hindi": "...क्या? दोहराया जाएगा?"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"type": "direction",
					"speaker": "finn",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"content": {
						"korean": "그들의 시스템은 견고해. 하지만 우리는 멈추지 않아.",
						"english": "Their system is robust. But we won't stop.",
						"japanese": "彼らのシステムは堅牢だ。しかし、我々は止まらない。",
						"chinese": "他们的系统很坚固。但我们不会停下。",
						"french": "Leur système est robuste. Mais nous n'arrêterons pas.",
						"spanish": "Su sistema es robusto. Pero no nos detendremos.",
						"vietnamese": "Hệ thống của họ vững chắc. Nhưng chúng ta sẽ không dừng lại.",
						"thai": "ระบบของพวกเขามั่นคง แต่เราจะไม่หยุด",
						"hindi": "उनकी प्रणाली सुदृढ़ है। लेकिन हम रुकेंगे नहीं।"
					},
					"emotion": "angry",
					"speaker": "finn",
					"type": "speech"
				},
				{
					"content": {
						"korean": "새로운 단서가 희미한 희망을 품게 했다. 그러나 그림자는 더욱 깊어졌다.",
						"english": "A new clue sparked a faint hope. But the shadows deepened.",
						"japanese": "新たな手がかりがかすかな希望を抱かせた。しかし、影はさらに深く。",
						"chinese": "新的线索带来了一丝希望。然而，阴影却更加深沉了。",
						"french": "Un nouvel indice a allumé une faible lueur d'espoir. Mais les ombres se sont approfondies.",
						"spanish": "Una nueva pista encendió una tenue esperanza. Pero las sombras se hicieron más profundas.",
						"vietnamese": "Một manh mối mới nhen nhóm một hy vọng mong manh. Nhưng bóng tối càng thêm sâu sắc.",
						"thai": "เบาะแสใหม่จุดประกายความหวังอันริบหรี่ แต่เงากลับทอดยาวลึกขึ้น",
						"hindi": "एक नए सुराग ने एक धुंधली उम्मीद जगाई। लेकिन परछाइयाँ और गहरी हो गईं।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "거대한 그림자가 길을 막았다. 진실을 가로막는 자였다.",
						"english": "A colossal shadow blocked the path. It was the one obstructing the truth.",
						"japanese": "巨大な影が道を塞いだ。真実を阻む者だった。",
						"chinese": "一个巨大的阴影挡住了去路。它是阻碍真相的人。",
						"french": "Une ombre colossale bloquait le chemin. C'était celui qui obstruait la vérité.",
						"spanish": "Una sombra colosal bloqueó el camino. Era quien obstruía la verdad.",
						"vietnamese": "Một bóng tối khổng lồ chặn đường. Kẻ đó là người cản trở sự thật.",
						"thai": "เงาขนาดใหญ่ขวางทาง มันคือผู้ที่ขัดขวางความจริง",
						"hindi": "एक विशाल छाया ने रास्ता रोक दिया। वह सत्य को अवरुद्ध करने वाला था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "더 이상 나아갈 수 없다. 망각된 것은… 영원히 잠들어야 한다.",
						"english": "No further. What is forgotten... must slumber forever.",
						"japanese": "これ以上は進めない。忘れ去られたものは…永遠に眠るべきだ。",
						"chinese": "无法再前进了。被遗忘的…应该永远沉睡。",
						"french": "Plus loin, non. Ce qui est oublié… doit dormir pour toujours.",
						"spanish": "No más. Lo olvidado... debe dormir para siempre.",
						"vietnamese": "Không thể tiến xa hơn. Những gì bị lãng quên… phải ngủ yên mãi mãi.",
						"thai": "ไปต่อไม่ได้แล้ว สิ่งที่ถูกลืมเลือน...ต้องหลับใหลไปตลอดกาล",
						"hindi": "और आगे नहीं। जो भुला दिया गया... उसे हमेशा के लिए सो जाना चाहिए।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"spot": [
						3,
						3
					],
					"type": "direction",
					"speaker": "finn",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "{random_boss}! 네가 감추려 한 게 바로 이거였나?",
						"english": "{random_boss}! Was this what you tried to hide?",
						"japanese": "【random_boss】！これが貴様が隠そうとしたものか？",
						"chinese": "{random_boss}！这就是你试图隐藏的吗？",
						"french": "{random_boss} ! C'est ce que tu as essayé de cacher ?",
						"spanish": "¡{random_boss}! ¿Esto era lo que intentabas ocultar?",
						"vietnamese": "{random_boss}! Đây là thứ ngươi cố che giấu sao?",
						"thai": "{random_boss}! นี่คือสิ่งที่แกพยายามจะซ่อนงั้นหรือ?",
						"hindi": "{random_boss}! क्या यही था जिसे तुम छिपाने की कोशिश कर रहे थे?"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "finn"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "당신도 진실을 은폐하려는 자였어!",
						"english": "You, too, were trying to conceal the truth!",
						"japanese": "あなたも真実を隠蔽しようとする者だったのか！",
						"chinese": "你也是试图掩盖真相的人！",
						"french": "Toi aussi, tu as tenté de dissimuler la vérité !",
						"spanish": "¡Tú también intentabas ocultar la verdad!",
						"vietnamese": "Ngươi cũng là kẻ muốn che giấu sự thật!",
						"thai": "แกก็เป็นหนึ่งในคนที่พยายามจะปิดบังความจริง!",
						"hindi": "तुम भी सच छिपाने वाले थे!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "너희는 어리석다. 감당 못 할 진실이다.",
						"english": "You are foolish. It's a truth you can't handle.",
						"japanese": "愚か者め。お前たちには耐えられない真実だ。",
						"chinese": "你们太愚蠢了。这是你们无法承受的真相。",
						"french": "Vous êtes insensés. C'est une vérité que vous ne pourrez pas gérer.",
						"spanish": "Sois necios. Es una verdad que no podréis soportar.",
						"vietnamese": "Các ngươi thật ngu ngốc. Đây là sự thật mà các ngươi không thể chấp nhận.",
						"thai": "พวกเจ้าช่างโง่เขลา มันคือความจริงที่พวกเจ้าจะรับมือไม่ไหว",
						"hindi": "तुम मूर्ख हो। यह एक ऐसा सच है जिसे तुम संभाल नहीं पाओगे।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "알고 싶어. 모든 것을.",
						"english": "I want to know. Everything.",
						"japanese": "知りたい。全てを。",
						"chinese": "我想知道。一切。",
						"french": "Je veux savoir. Tout.",
						"spanish": "Quiero saber. Todo.",
						"vietnamese": "Ta muốn biết. Mọi thứ.",
						"thai": "ฉันอยากรู้ ทุกสิ่ง",
						"hindi": "मैं जानना चाहता हूँ। सब कुछ।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "무의미한 저항이다. 진실은 영원히 얼어붙을 것이다.",
						"english": "Futile resistance. The truth will be frozen forever.",
						"japanese": "無意味な抵抗だ。真実は永遠に凍てつくだろう。",
						"chinese": "毫无意义的抵抗。真相将永远被冰封。",
						"french": "Résistance futile. La vérité sera figée pour toujours.",
						"spanish": "Resistencia inútil. La verdad quedará congelada para siempre.",
						"vietnamese": "Kháng cự vô nghĩa. Sự thật sẽ bị đóng băng vĩnh viễn.",
						"thai": "การต่อต้านที่ไร้ความหมาย ความจริงจะถูกแช่แข็งตลอดไป",
						"hindi": "व्यर्थ का प्रतिरोध। सत्य हमेशा के लिए जम जाएगा।"
					},
					"emotion": "base"
				},
				{
					"action": "enter",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"speaker": "finn",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "finn",
					"content": {
						"korean": "젠장… 하지만 포기할 수 없어.",
						"english": "Damn it... But I can't give up.",
						"japanese": "くそっ…だが、諦めるわけにはいかない。",
						"chinese": "该死……但我不能放弃。",
						"french": "Mince... Mais je ne peux pas abandonner.",
						"spanish": "Maldita sea... Pero no puedo rendirme.",
						"vietnamese": "Chết tiệt... Nhưng tôi không thể từ bỏ.",
						"thai": "ให้ตายสิ... แต่ฉันยอมแพ้ไม่ได้",
						"hindi": "धिक्कार है… लेकिन मैं हार नहीं मान सकता।"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "다시 한번. 반드시 밝혀낼 거야.",
						"english": "One more time. I will definitely uncover it.",
						"japanese": "もう一度。必ず突き止める。",
						"chinese": "再来一次。我一定会查明真相。",
						"french": "Encore une fois. Je le découvrirai absolument.",
						"spanish": "Una vez más. Lo descubriré a toda costa.",
						"vietnamese": "Một lần nữa. Tôi nhất định sẽ tìm ra.",
						"thai": "อีกครั้ง ฉันจะเปิดเผยมันให้ได้",
						"hindi": "एक और बार। मैं इसे निश्चित रूप से उजागर करूँगा।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"id": 15
		}
	]
} as const;
