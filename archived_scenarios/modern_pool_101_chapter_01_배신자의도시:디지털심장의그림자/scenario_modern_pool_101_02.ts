export const scenario_modern_pool_101_02 = {
	"scenario_id": "modern_pool_101_02",
	"order": 2,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"bex": {
			"id": "mon_74e24324-3f9a-4d44-9611-1da33b654ca1",
			"name": {
				"korean": "벡스",
				"english": "Bex",
				"japanese": "ベックス",
				"chinese": "贝克斯",
				"french": "Bex",
				"spanish": "Bex",
				"vietnamese": "Bex",
				"thai": "เบ็กซ์",
				"hindi": "बेक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/09dae190-ff6b-4a9d-b656-e1a2b896aa00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5cc3c77f-72e1-416e-b346-31889b3b9300/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "익숙한 시스템에 이상 징후가 감지됐다.",
						"english": "Abnormal signs detected in the familiar system.",
						"japanese": "見慣れたシステムに異常な兆候が検出された。",
						"chinese": "熟悉的系统中检测到异常信号。",
						"french": "Des signes anormaux ont été détectés dans le système familier.",
						"spanish": "Se detectaron signos anómalos en el sistema familiar.",
						"vietnamese": "Phát hiện dấu hiệu bất thường trong hệ thống quen thuộc.",
						"thai": "ตรวจพบสัญญาณผิดปกติในระบบที่คุ้นเคย",
						"hindi": "परिचित सिस्टम में असामान्य संकेत पाए गए।"
					}
				},
				{
					"content": {
						"korean": "해킹인가?",
						"english": "A hack?",
						"japanese": "ハッキングか？",
						"chinese": "是黑客吗？",
						"french": "Un piratage ?",
						"spanish": "¿Un hackeo?",
						"vietnamese": "Là hack ư?",
						"thai": "แฮกเหรอ?",
						"hindi": "एक हैक है?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"spot": [
						4,
						2
					],
					"speaker": "bex",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "bex",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "여기까지다, 침입자.",
						"english": "This is the end, intruder.",
						"japanese": "ここまでだ、侵入者。",
						"chinese": "到此为止了，入侵者。",
						"french": "C'est la fin, intrus.",
						"spanish": "Hasta aquí llegaste, intruso.",
						"vietnamese": "Đến đây thôi, kẻ xâm nhập.",
						"thai": "พอแค่นี้แหละ ผู้บุกรุก",
						"hindi": "बस यहीं तक, घुसपैठिए।"
					}
				},
				{
					"content": {
						"korean": "누구지?",
						"english": "Who is it?",
						"japanese": "誰だ？",
						"chinese": "是谁？",
						"french": "Qui est-ce ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Ai vậy?",
						"thai": "ใครน่ะ?",
						"hindi": "कौन है?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "bex",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "로한 칸나님의 '가족'이다.",
						"english": "Rohan Khanna's 'family'.",
						"japanese": "ローハン・カンナ様の「家族」だ。",
						"chinese": "罗汉·坎纳先生的“家人”。",
						"french": "La \"famille\" de Rohan Khanna.",
						"spanish": "La 'familia' de Rohan Khanna.",
						"vietnamese": "Là 'gia đình' của Rohan Khanna.",
						"thai": "'ครอบครัว' ของโรฮัน คันนา",
						"hindi": "रोहन खन्ना का 'परिवार'।"
					}
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"speaker": "bex",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "더 이상은 안 돼. 칸나님은 너희를 막으라 하셨다.",
						"english": "No further. Lord Khanna ordered me to stop you.",
						"japanese": "これ以上はだめだ。カンナ様はお前たちを止めろと命じられた。",
						"chinese": "不能再往前了。坎纳大人吩咐我阻止你们。",
						"french": "Pas plus loin. Lord Khanna m'a ordonné de vous arrêter.",
						"spanish": "No más. Lord Khanna me ordenó detenerlos.",
						"vietnamese": "Không thể đi tiếp được nữa. Khanna đã ra lệnh cho tôi ngăn chặn các ngươi.",
						"thai": "ไปต่อไม่ได้แล้ว ท่านคันนาสั่งให้ข้าหยุดพวกเจ้า",
						"hindi": "और नहीं। खन्ना साहब ने मुझे तुम्हें रोकने का आदेश दिया।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "bex"
				},
				{
					"type": "speech",
					"content": {
						"korean": "로한 칸나의 지시라고? 왜 우리를 방해하는 거지?",
						"english": "Rohan Khanna's orders? Why interfere with us?",
						"japanese": "ロハン・カンナの指示だと？なぜ我々を邪魔する？",
						"chinese": "罗汉·坎纳的指示？为什么要妨碍我们？",
						"french": "Les ordres de Rohan Khanna ? Pourquoi nous gêner ?",
						"spanish": "¿Órdenes de Rohan Khanna? ¿Por qué nos estorbas?",
						"vietnamese": "Mệnh lệnh của Rohan Khanna sao? Sao lại cản trở chúng tôi?",
						"thai": "คำสั่งของโรฮัน คันนาเหรอ? ทำไมถึงขัดขวางพวกเรา?",
						"hindi": "रोहन खन्ना का आदेश? हमें क्यों रोक रहे हो?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "가족을 지키는 건 당연한 일. 너희는 방해만 될 뿐.",
						"english": "Protecting family is natural. You're only in the way.",
						"japanese": "家族を守るのは当然だ。お前たちは邪魔なだけ。",
						"chinese": "保护家人是理所当然的。你们只会碍事。",
						"french": "Protéger sa famille est naturel. Vous n'êtes qu'un obstacle.",
						"spanish": "Proteger a la familia es natural. Solo estorban.",
						"vietnamese": "Bảo vệ gia đình là lẽ đương nhiên. Các ngươi chỉ cản đường thôi.",
						"thai": "การปกป้องครอบครัวเป็นเรื่องปกติ พวกแกเป็นแค่สิ่งกีดขวาง",
						"hindi": "परिवार की रक्षा करना स्वाभाविक है। तुम बस बाधा हो।"
					},
					"speaker": "bex",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "가족? 단순한 회사가 아니군.",
						"english": "Family? Not just a simple company, then.",
						"japanese": "家族？単なる会社ではないな。",
						"chinese": "家人？看来不是一家简单的公司。",
						"french": "Famille ? Pas une simple entreprise, alors.",
						"spanish": "¿Familia? Entonces no es una simple empresa.",
						"vietnamese": "Gia đình? Không phải một công ty đơn thuần.",
						"thai": "ครอบครัว? ไม่ใช่แค่บริษัทธรรมดาๆ สินะ",
						"hindi": "परिवार? तो यह सिर्फ एक सामान्य कंपनी नहीं है।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						2,
						2
					],
					"speaker": "bex",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "왜 이 이상을 파고들려 하나? 칸나님은 우리 '가족'의 전부다.",
						"english": "Why dig deeper? Master Khanna is everything to our 'family'.",
						"japanese": "なぜこれ以上深入りする？カンナ様は我々「家族」の全てだ。",
						"chinese": "为什么要深入调查？坎纳大人是我们“家人”的一切。",
						"french": "Pourquoi creuser plus loin ? Maître Khanna est tout pour notre \"famille\".",
						"spanish": "¿Por qué indagar más? El Maestro Khanna lo es todo para nuestra \"familia\".",
						"vietnamese": "Sao lại muốn đào sâu hơn? Ngài Khanna là tất cả của 'gia đình' chúng ta.",
						"thai": "ทำไมถึงพยายามเจาะลึกไปกว่านี้? ท่านคันนาคือทุกสิ่งทุกอย่างของ 'ครอบครัว' เรา",
						"hindi": "इससे ज़्यादा क्यों जानना चाहते हो? खन्ना साहब हमारे 'परिवार' के लिए सब कुछ हैं।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "bex"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "가족… 그게 그렇게 중요한가?",
						"english": "Family... is it that important?",
						"japanese": "家族…それがそんなに重要か？",
						"chinese": "家人……就那么重要吗？",
						"french": "La famille... est-ce si important ?",
						"spanish": "¿Familia...? ¿Es tan importante?",
						"vietnamese": "Gia đình… nó quan trọng đến vậy sao?",
						"thai": "ครอบครัว…มันสำคัญขนาดนั้นเลยเหรอ?",
						"hindi": "परिवार... क्या यह इतना महत्वपूर्ण है?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "모든 것을 의미한다. 감히 이해하려 들지 마라.",
						"english": "It means everything. Don't you dare try to understand.",
						"japanese": "全てを意味する。理解しようなどと考えるな。",
						"chinese": "它意味着一切。别想理解。",
						"french": "Ça signifie tout. N'ose pas essayer de comprendre.",
						"spanish": "Lo significa todo. Ni se te ocurra intentar entenderlo.",
						"vietnamese": "Nó có ý nghĩa là tất cả. Đừng hòng cố gắng hiểu.",
						"thai": "มันหมายถึงทุกสิ่ง อย่าบังอาจพยายามทำความเข้าใจ",
						"hindi": "इसका मतलब सब कुछ है। समझने की हिम्मत भी मत करना।"
					},
					"speaker": "bex",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "로한 칸나의 진짜 모습은 뭐지?",
						"english": "What is Rohan Khanna's true nature?",
						"japanese": "ロハン・カンナの本当の姿は何だ？",
						"chinese": "罗汉·坎纳的真实面貌是什么？",
						"french": "Quelle est la véritable nature de Rohan Khanna ?",
						"spanish": "¿Cuál es la verdadera naturaleza de Rohan Khanna?",
						"vietnamese": "Bộ mặt thật của Rohan Khanna là gì?",
						"thai": "ตัวตนที่แท้จริงของโรฮัน คันนาคืออะไรกันแน่?",
						"hindi": "रोहन खन्ना का असली रूप क्या है?"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "bex",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "돌아가라. 여긴 너희가 있을 곳이 아니다.",
						"english": "Go back. This is not where you belong.",
						"japanese": "帰れ。ここはお前たちがいる場所ではない。",
						"chinese": "回去。这里不是你们该待的地方。",
						"french": "Retournez-vous-en. Ce n'est pas votre place ici.",
						"spanish": "Vuelve. Este no es tu lugar.",
						"vietnamese": "Trở về đi. Đây không phải nơi các ngươi thuộc về.",
						"thai": "กลับไปซะ ที่นี่ไม่ใช่ที่ของพวกแก",
						"hindi": "वापस जाओ। यह तुम्हारी जगह नहीं है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "bex"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "우린 진실을 찾아야 해.",
						"english": "We must find the truth.",
						"japanese": "我々は真実を見つけなければならない。",
						"chinese": "我们必须找到真相。",
						"french": "Nous devons trouver la vérité.",
						"spanish": "Debemos encontrar la verdad.",
						"vietnamese": "Chúng ta phải tìm ra sự thật.",
						"thai": "เราต้องค้นหาความจริง",
						"hindi": "हमें सच्चाई का पता लगाना होगा।"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "bex",
					"content": {
						"korean": "진실? 진실은 때로… 잔인한 법이지.",
						"english": "Truth? Truth can sometimes be... cruel.",
						"japanese": "真実？真実は時に…残酷なものだ。",
						"chinese": "真相？真相有时……是残酷的。",
						"french": "La vérité ? La vérité peut parfois être... cruelle.",
						"spanish": "¿La verdad? La verdad a veces... es cruel.",
						"vietnamese": "Sự thật? Sự thật đôi khi… thật tàn nhẫn.",
						"thai": "ความจริง? ความจริงบางครั้งก็…โหดร้ายนะ",
						"hindi": "सच्चाई? सच्चाई कभी-कभी... क्रूर होती है।"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "비켜! 로한 칸나를 만나야겠어.",
						"english": "Out of my way! I need to see Rohan Kanna.",
						"japanese": "どけ！ローハン・カンナに会わなければ。",
						"chinese": "让开！我必须见到罗汉·坎纳。",
						"french": "Poussez-vous ! Je dois voir Rohan Kanna.",
						"spanish": "¡Quítate! Necesito ver a Rohan Kanna.",
						"vietnamese": "Tránh ra! Ta phải gặp Rohan Kanna.",
						"thai": "หลีกไป! ฉันต้องพบโรฮาน คันนา",
						"hindi": "हट जाओ! मुझे रोहन खन्ना से मिलना है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그 전에 나를 넘어서야 할 거다.",
						"english": "You'll have to get past me first.",
						"japanese": "その前に、私を乗り越えなければならない。",
						"chinese": "在此之前，你得先过我这关。",
						"french": "Il faudra d'abord me vaincre.",
						"spanish": "Primero tendrás que superarme.",
						"vietnamese": "Trước đó, ngươi phải vượt qua ta đã.",
						"thai": "ก่อนหน้านั้น เจ้าต้องผ่านข้าไปให้ได้ก่อน",
						"hindi": "उससे पहले तुम्हें मुझे हराना होगा।"
					},
					"speaker": "bex",
					"emotion": "base"
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "크윽… 나는… {random_boss}의 충성스러운 그림자일 뿐…",
						"english": "Ugh... I am... merely {random_boss}'s loyal shadow...",
						"japanese": "ぐっ…私は…{random_boss}の忠実な影に過ぎない…",
						"chinese": "呃…我只是…{random_boss}忠实的影子…",
						"french": "Ugh... Je ne suis... qu'une ombre fidèle de {random_boss}...",
						"spanish": "Ugh... Yo soy... solo la sombra leal de {random_boss}...",
						"vietnamese": "Ư... Ta chỉ là... cái bóng trung thành của {random_boss} mà thôi...",
						"thai": "อึก... ข้าเป็นเพียง... เงาผู้ภักดีของ {random_boss}...",
						"hindi": "उफ़... मैं... बस {random_boss} की वफादार परछाई हूँ..."
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "random_boss"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "칸나님은… 더 깊은 곳에… 있다…",
						"english": "Kanna-nim is... deeper within...",
						"japanese": "カンナ様は…もっと深い場所に…いる…",
						"chinese": "坎纳大人…在更深处…",
						"french": "Kanna-nim est... plus profondément...",
						"spanish": "Kanna-nim está... más adentro...",
						"vietnamese": "Kanna-nim... ở sâu hơn bên trong...",
						"thai": "คันนา-นิม... อยู่ลึกเข้าไปอีก...",
						"hindi": "कन्ना-निम... और गहराई में है..."
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이제야 실마리가 풀리는군.",
						"english": "The pieces are falling into place.",
						"japanese": "ようやく糸口が見えてきた。",
						"chinese": "线索终于清晰了。",
						"french": "Les pièces du puzzle s'assemblent enfin.",
						"spanish": "Las piezas empiezan a encajar.",
						"vietnamese": "Mọi manh mối cuối cùng cũng sáng tỏ.",
						"thai": "ในที่สุดก็เห็นเค้าลางแล้ว",
						"hindi": "अब जाकर पहेली सुलझ रही है।"
					}
				},
				{
					"spot": [
						2,
						2
					],
					"speaker": "bex",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "…감히 {random_boss}를 쓰러뜨리다니. 하지만 칸나님은 훨씬 강력하다.",
						"english": "...You dared defeat {random_boss}. But Lady Kanna is far more powerful.",
						"japanese": "…よくも{random_boss}を倒したな。だが、カンナ様ははるかに強力だ。",
						"chinese": "…你竟敢击败{random_boss}。但坎娜大人远比他强大。",
						"french": "...Vous avez osé vaincre {random_boss}. Mais Dame Kanna est bien plus puissante.",
						"spanish": "...Te atreviste a derrotar a {random_boss}. Pero Lady Kanna es mucho más poderosa.",
						"vietnamese": "...Ngươi dám đánh bại {random_boss}. Nhưng Nữ chúa Kanna còn mạnh hơn nhiều.",
						"thai": "...เจ้ากล้าโค่น {random_boss} ลงได้รึ แต่ท่านคันนะทรงพลังกว่ามาก",
						"hindi": "...तुमने {random_boss} को हराने की हिम्मत की। लेकिन लेडी कन्ना कहीं ज़्यादा शक्तिशाली हैं।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "bex"
				},
				{
					"type": "speech",
					"content": {
						"korean": "다음은 없을 거다.",
						"english": "There won't be a next time.",
						"japanese": "次はないぞ。",
						"chinese": "不会有下次了。",
						"french": "Il n'y aura pas de prochaine fois.",
						"spanish": "No habrá una próxima vez.",
						"vietnamese": "Sẽ không có lần sau đâu.",
						"thai": "จะไม่มีครั้งต่อไป",
						"hindi": "अगली बार नहीं होगी।"
					},
					"speaker": "bex",
					"emotion": "angry"
				},
				{
					"speaker": "bex",
					"direction": "up",
					"type": "direction",
					"action": "exit",
					"duration_ms": 400
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "로한 칸나의 그림자는 예상보다 넓게 드리워져 있었다.",
						"english": "Rohan Kanna's shadow loomed wider than expected.",
						"japanese": "ローハン・カンナの影は、予想以上に広く広がっていた。",
						"chinese": "罗汉·坎娜的阴影比预想的更加广阔。",
						"french": "L'ombre de Rohan Kanna s'étendait plus loin que prévu.",
						"spanish": "La sombra de Rohan Kanna se cernía más amplia de lo esperado.",
						"vietnamese": "Bóng tối của Rohan Kanna bao trùm rộng hơn dự kiến.",
						"thai": "เงาของโรฮาน คันนะแผ่ขยายกว้างกว่าที่คาดไว้",
						"hindi": "रोहन कन्ना की परछाई उम्मीद से कहीं ज़्यादा फैली हुई थी।"
					}
				}
			],
			"dialogue": [
				{
					"spot": [
						4,
						2
					],
					"speaker": "bex",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "bex",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "감히 여기까지 오다니… 어쩔 수 없군.",
						"english": "To dare come this far... it can't be helped.",
						"japanese": "ここまで来るとは…仕方ない。",
						"chinese": "竟敢来到这里…真是没办法。",
						"french": "Oser venir jusqu'ici... tant pis.",
						"spanish": "Atreverse a llegar tan lejos... no hay remedio.",
						"vietnamese": "Dám đến tận đây... thật hết cách.",
						"thai": "กล้ามาถึงที่นี่... ช่วยไม่ได้เลย",
						"hindi": "इतनी दूर आने की हिम्मत... अब कुछ नहीं कर सकते।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "우리의 그림자가 너희를 심판할 것이다. 준비해라, {random_boss}.",
						"english": "Our shadows will judge you. Prepare yourselves, {random_boss}.",
						"japanese": "我らの影がお前たちを裁くだろう。覚悟しろ、{random_boss}。",
						"chinese": "我们的影子将审判你们。准备好吧，{random_boss}。",
						"french": "Nos ombres vous jugeront. Préparez-vous, {random_boss}.",
						"spanish": "Nuestras sombras os juzgarán. Preparaos, {random_boss}.",
						"vietnamese": "Bóng tối của chúng ta sẽ phán xét các ngươi. Chuẩn bị đi, {random_boss}.",
						"thai": "เงาของเราจะตัดสินพวกเจ้า เตรียมตัวไว้, {random_boss}.",
						"hindi": "हमारी परछाइयाँ तुम्हें न्याय देंगी। तैयार हो जाओ, {random_boss}।"
					},
					"speaker": "bex",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "내 영역을 침범하다니. 어리석은 인간들.",
						"english": "Intruding upon my domain. Foolish mortals.",
						"japanese": "私の領域を侵すとは。愚かな人間ども。",
						"chinese": "竟敢侵犯我的领域。愚蠢的人类。",
						"french": "Envahir mon domaine. Mortels stupides.",
						"spanish": "Invadiendo mi dominio. Mortales necios.",
						"vietnamese": "Xâm phạm lãnh địa của ta. Loài người ngu ngốc.",
						"thai": "รุกล้ำอาณาเขตของข้า มนุษย์โง่เขลา",
						"hindi": "मेरे क्षेत्र में घुसपैठ कर रहे हो। मूर्ख इंसान।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "여기서 너희의 추적은 끝난다.",
						"english": "Your pursuit ends here.",
						"japanese": "お前たちの追跡はここで終わる。",
						"chinese": "你们的追捕到此为止。",
						"french": "Votre poursuite s'achève ici.",
						"spanish": "Vuestra persecución termina aquí.",
						"vietnamese": "Cuộc truy đuổi của các ngươi kết thúc tại đây.",
						"thai": "การไล่ล่าของพวกเจ้าจะสิ้นสุดลงที่นี่",
						"hindi": "तुम्हारा पीछा यहीं खत्म होता है।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "우리는 멈추지 않아!",
						"english": "We won't stop!",
						"japanese": "我々は止まらない！",
						"chinese": "我们不会停下！",
						"french": "Nous ne nous arrêterons pas !",
						"spanish": "¡No nos detendremos!",
						"vietnamese": "Chúng ta sẽ không dừng lại!",
						"thai": "เราจะไม่หยุด!",
						"hindi": "हम रुकेंगे नहीं!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"direction": "right",
					"type": "direction",
					"action": "exit",
					"duration_ms": 400,
					"speaker": "bex"
				},
				{
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 그들의 앞을 가로막았다.",
						"english": "A colossal shadow blocked their path.",
						"japanese": "巨大な影が彼らの行く手を阻んだ。",
						"chinese": "一个巨大的影子挡住了他们的去路。",
						"french": "Une ombre colossale bloqua leur chemin.",
						"spanish": "Una sombra colosal bloqueó su camino.",
						"vietnamese": "Một bóng tối khổng lồ chặn đường họ.",
						"thai": "เงาขนาดมหึมาขวางทางพวกเขา",
						"hindi": "एक विशाल छाया ने उनका रास्ता रोक दिया।"
					},
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "디지털 미로에 갇힌 그들은 길을 잃었다.",
						"english": "Trapped in the digital labyrinth, they lost their way.",
						"japanese": "デジタル迷宮に囚われた彼らは、道を見失った。",
						"chinese": "困在数字迷宫中，他们迷失了方向。",
						"french": "Piégés dans le labyrinthe numérique, ils perdirent leur chemin.",
						"spanish": "Atrapados en el laberinto digital, perdieron el rumbo.",
						"vietnamese": "Mắc kẹt trong mê cung số, họ đã lạc lối.",
						"thai": "ติดอยู่ในเขาวงกตดิจิทัล พวกเขาหลงทางแล้ว",
						"hindi": "डिजिटल भूलभुलैया में फँसकर, वे रास्ता भटक गए।"
					},
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "어리석은 것들. 칸나님의 계획은 막을 수 없다.",
						"english": "Fools. Lady Kanna's plan cannot be stopped.",
						"japanese": "愚かな者たちめ。カンナ様の計画は止められない。",
						"chinese": "愚蠢之徒。坎娜大人的计划无法阻止。",
						"french": "Fous. Le plan de Dame Kanna ne peut être arrêté.",
						"spanish": "Necios. El plan de Lady Kanna no puede ser detenido.",
						"vietnamese": "Lũ ngu ngốc. Kế hoạch của Nữ chúa Kanna không thể bị ngăn cản.",
						"thai": "คนโง่เง่า แผนของท่านคันนะไม่อาจหยุดยั้งได้",
						"hindi": "मूर्खों। लेडी कन्ना की योजना रोकी नहीं जा सकती।"
					}
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"speaker": "bex"
				},
				{
					"type": "speech",
					"content": {
						"korean": "네놈들의 추적은 여기서 끝이다.",
						"english": "Your pursuit ends here.",
						"japanese": "お前たちの追跡はここで終わりだ。",
						"chinese": "你们的追捕到此为止。",
						"french": "Votre traque s'arrête ici.",
						"spanish": "Vuestra persecución termina aquí.",
						"vietnamese": "Cuộc truy đuổi của các ngươi kết thúc tại đây.",
						"thai": "การตามล่าของพวกเจ้าสิ้นสุดลงตรงนี้",
						"hindi": "तुम्हारा पीछा यहीं खत्म होता है।"
					},
					"speaker": "bex",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아니… 아직 끝나지 않았어!",
						"english": "No... it's not over yet!",
						"japanese": "いや…まだ終わってない！",
						"chinese": "不…还没有结束！",
						"french": "Non... ce n'est pas encore fini !",
						"spanish": "¡No... aún no ha terminado!",
						"vietnamese": "Không... vẫn chưa kết thúc!",
						"thai": "ไม่... ยังไม่จบ!",
						"hindi": "नहीं... यह अभी खत्म नहीं हुआ है!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "로한 칸나… 반드시 네놈의 진실을 밝혀낼 거야.",
						"english": "Rohan Kanna... I will surely uncover your truth.",
						"japanese": "ローハン・カンナ…必ずお前の真実を暴いてやる。",
						"chinese": "罗汉·坎娜…我一定会揭露你的真相。",
						"french": "Rohan Kanna... Je révélerai ta vérité coûte que coûte.",
						"spanish": "Rohan Kanna... ¡Descubriré tu verdad, cueste lo que cueste!",
						"vietnamese": "Rohan Kanna... Ta nhất định sẽ phơi bày sự thật về ngươi.",
						"thai": "โรฮาน คันนะ... ฉันจะเปิดเผยความจริงของเจ้าให้ได้แน่นอน",
						"hindi": "रोहन कन्ना... मैं तुम्हारी सच्चाई ज़रूर उजागर करूँगा।"
					},
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"로한 칸나의 의뢰는 완벽했다.",
			"그러나 시스템 깊숙한 곳, 해킹 공격이 시작됐다.",
			"그 배후에는 벡스가 있었다. 그는 로한을 '가족'이라 불렀다.",
			"단순한 회사가 아니었다. 디지털 미로는 더 큰 진실을 숨기고 있었다."
		],
		"english": [
			"Rohan Khanna's commission was perfect.",
			"However, deep within the system, a hacking attack began.",
			"Behind it was Vex. He called Rohan 'family'.",
			"It wasn't just a company. The digital maze was hiding a greater truth."
		],
		"japanese": [
			"ローハン・カンナからの依頼は完璧だった。",
			"しかし、システムの奥深くで、ハッキング攻撃が始まった。",
			"その背後にはベックスがいた。彼はローハンを「家族」と呼んだ。",
			"単なる会社ではなかった。デジタル迷路は、より大きな真実を隠していた。"
		],
		"chinese": [
			"罗汉·坎纳的委托完美无缺。",
			"然而，系统深处，黑客攻击开始了。",
			"幕后是维克斯。他称罗汉为“家人”。",
			"这不仅仅是一家公司。数字迷宫隐藏着更大的真相。"
		],
		"french": [
			"La commande de Rohan Khanna était parfaite.",
			"Cependant, au plus profond du système, une cyberattaque a commencé.",
			"Derrière tout ça, il y avait Vex. Il appelait Rohan \"famille\".",
			"Ce n'était pas qu'une simple entreprise. Le labyrinthe numérique cachait une vérité plus grande."
		],
		"spanish": [
			"El encargo de Rohan Khanna fue perfecto.",
			"Sin embargo, en lo más profundo del sistema, un ataque de hacking comenzó.",
			"Detrás de esto estaba Vex. Él llamó a Rohan 'familia'.",
			"No era solo una empresa. El laberinto digital ocultaba una verdad más grande."
		],
		"vietnamese": [
			"Nhiệm vụ của Rohan Khanna đã hoàn hảo.",
			"Tuy nhiên, sâu bên trong hệ thống, một cuộc tấn công mạng đã bắt đầu.",
			"Đằng sau đó là Vex. Hắn gọi Rohan là 'gia đình'.",
			"Đó không chỉ là một công ty. Mê cung kỹ thuật số đang che giấu một sự thật lớn hơn."
		],
		"thai": [
			"ภารกิจของโรฮัน คันนาสมบูรณ์แบบ",
			"อย่างไนก็ตาม ลึกเข้าไปในระบบ การโจมตีด้วยการแฮ็กได้เริ่มต้นขึ้น",
			"เบื้องหลังคือเวกซ์ เขาเรียกโรฮันว่า 'ครอบครัว'",
			"มันไม่ใช่แค่บริษัท เขาวงกตดิจิทัลกำลังซ่อนความจริงที่ยิ่งใหญ่กว่า"
		],
		"hindi": [
			"रोहन खन्ना का कमीशन एकदम सही था।",
			"हालांकि, सिस्टम की गहराई में, एक हैकिंग हमला शुरू हो गया।",
			"इसके पीछे वेक्स था। उसने रोहन को 'परिवार' कहा।",
			"यह सिर्फ एक कंपनी नहीं थी। डिजिटल भूलभुलैया एक बड़ी सच्चाई छिपा रही थी।"
		]
	}
} as const;
