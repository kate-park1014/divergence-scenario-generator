export const scenario_snowy_fenrir_6_04 = {
	"scenario_id": "snowy_fenrir_6_04",
	"order": 4,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"bran": {
			"id": "mon_985fcdcc-1bf2-4822-aa2f-292ae9353456",
			"name": {
				"korean": "브란",
				"english": "Bran",
				"japanese": "ブラン",
				"chinese": "布兰",
				"french": "Bran",
				"spanish": "Bran",
				"vietnamese": "Bran",
				"thai": "แบรน",
				"hindi": "ब्रैन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/42cde50b-7453-47b1-04df-73500ad21d00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/4ecba7ed-ec7e-4a8e-74dc-bf3e711b4d00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "눈보라가 시야를 집어삼켰다. 한 치 앞도 보이지 않는 어둠 속.",
						"english": "The blizzard swallowed the view. In the darkness, not an inch ahead visible.",
						"japanese": "吹雪が視界を飲み込んだ。一寸先も見えない闇の中。",
						"chinese": "暴风雪吞噬了视野。黑暗中，寸步难行。",
						"french": "Le blizzard a englouti la vue. Dans l'obscurité, pas un pouce devant visible.",
						"spanish": "La ventisca devoró la vista. En la oscuridad, ni un palmo delante visible.",
						"vietnamese": "Bão tuyết nuốt chửng tầm nhìn. Trong bóng tối, không thể nhìn thấy một phân nào phía trước.",
						"thai": "พายุหิมะกลืนกินทัศนวิสัย ในความมืดมิด มองไม่เห็นแม้แต่คืบเดียว",
						"hindi": "बर्फीले तूफान ने दृश्य को निगल लिया। अँधेरे में, एक इंच भी आगे दिखाई नहीं दे रहा।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "bran",
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "…움직이고 있어.",
						"english": "...It's moving.",
						"japanese": "…動いている。",
						"chinese": "……它在动。",
						"french": "...Ça bouge.",
						"spanish": "...Se está moviendo.",
						"vietnamese": "...Nó đang di chuyển.",
						"thai": "…มันกำลังเคลื่อนไหว",
						"hindi": "...यह हिल रहा है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "bran"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "무슨 소리예요, 브란?",
						"english": "What are you saying, Bran?",
						"japanese": "何を言ってるんですか、ブラン？",
						"chinese": "你在说什么，布兰？",
						"french": "Que dites-vous, Bran ?",
						"spanish": "¿Qué dices, Bran?",
						"vietnamese": "Anh đang nói gì vậy, Bran?",
						"thai": "คุณกำลังพูดอะไร แบรน?",
						"hindi": "तुम क्या कह रहे हो, ब्रान?"
					}
				},
				{
					"speaker": "bran",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "저 그림자. 단순한 눈보라가 아니야.",
						"english": "That shadow. It's not just a blizzard.",
						"japanese": "あの影。ただの吹雪じゃない。",
						"chinese": "那个影子。它不只是暴风雪。",
						"french": "Cette ombre. Ce n'est pas juste un blizzard.",
						"spanish": "Esa sombra. No es solo una ventisca.",
						"vietnamese": "Bóng hình đó. Nó không chỉ là bão tuyết.",
						"thai": "เงานั่น ไม่ใช่แค่พายุหิมะ",
						"hindi": "वह छाया। यह सिर्फ एक बर्फीला तूफान नहीं है।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "점점 더 추워지는 것 같아요. 이상하게.",
						"english": "It feels like it's getting colder. Strangely.",
						"japanese": "だんだん寒くなってる気がする。変に。",
						"chinese": "我感觉越来越冷了。很奇怪。",
						"french": "J'ai l'impression qu'il fait de plus en plus froid. Étrangement.",
						"spanish": "Siento que hace cada vez más frío. Extrañamente.",
						"vietnamese": "Tôi cảm thấy càng ngày càng lạnh. Thật kỳ lạ.",
						"thai": "รู้สึกเหมือนอากาศกำลังเย็นลงเรื่อยๆ แปลกๆ นะ",
						"hindi": "मुझे लगता है कि ठंड बढ़ती जा रही है। अजीब तरह से।"
					}
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "bran",
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "bran",
					"content": {
						"korean": "가까워지고 있어. 사냥꾼의 본능이 외치고 있다.",
						"english": "It's getting closer. The hunter's instincts are screaming.",
						"japanese": "近づいてる。ハンターの本能が叫んでいる。",
						"chinese": "它越来越近了。猎人的直觉在呐喊。",
						"french": "Ça se rapproche. L'instinct du chasseur hurle.",
						"spanish": "Se está acercando. Los instintos del cazador están gritando.",
						"vietnamese": "Nó đang đến gần. Bản năng của thợ săn đang gào thét.",
						"thai": "มันกำลังเข้ามาใกล้ สัญชาตญาณของนักล่ากำลังกรีดร้อง",
						"hindi": "यह करीब आ रहा है। शिकारी की प्रवृत्ति चीख रही है।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_1",
					"content": {
						"korean": "이 추위… 보통이 아니에요. 몸 안쪽까지 얼어붙는 것 같아요.",
						"english": "This cold... it's not normal. It feels like it's freezing me from the inside.",
						"japanese": "この寒さ…尋常じゃない。体の内側まで凍りつくようだ。",
						"chinese": "这股寒意……非同寻常。感觉连身体内部都要冻结了。",
						"french": "Ce froid... n'est pas normal. J'ai l'impression que ça me gèle de l'intérieur.",
						"spanish": "Este frío... no es normal. Siento que me congela por dentro.",
						"vietnamese": "Cái lạnh này… không bình thường. Cứ như đóng băng từ bên trong cơ thể vậy.",
						"thai": "ความหนาวนี้... ไม่ธรรมดาเลยค่ะ รู้สึกเหมือนตัวจะแข็งจากข้างใน",
						"hindi": "यह ठंड... सामान्य नहीं है। ऐसा लगता है जैसे शरीर अंदर से जम रहा हो。"
					}
				},
				{
					"content": {
						"korean": "…나도 그래. 단순히 날씨 때문만은 아닐 거야.",
						"english": "...Me too. It can't just be the weather.",
						"japanese": "…私もだ。ただの天気だけじゃないだろう。",
						"chinese": "……我也是。这不仅仅是天气的原因吧。",
						"french": "...Moi aussi. Ce n'est pas juste à cause du temps.",
						"spanish": "...Yo también. No puede ser solo por el clima.",
						"vietnamese": "...Tôi cũng vậy. Chắc chắn không chỉ vì thời tiết đâu.",
						"thai": "...ฉันก็เหมือนกัน นี่คงไม่ใช่แค่เรื่องสภาพอากาศหรอก",
						"hindi": "मुझे भी ऐसा ही लग रहा है। यह केवल मौसम की वजह से नहीं हो सकता।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "bran"
				},
				{
					"content": {
						"korean": "그럼… 뭐가.",
						"english": "Then... what is it?",
						"japanese": "じゃあ…何が？",
						"chinese": "那……是什么？",
						"french": "Alors... quoi ?",
						"spanish": "Entonces... ¿qué es?",
						"vietnamese": "Vậy thì… là gì chứ?",
						"thai": "งั้น... อะไรกัน",
						"hindi": "तो... क्या है?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "bran",
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "눈보라 너머, 거대한 그림자가 선명해졌다.",
						"english": "Beyond the blizzard, a colossal shadow became clear.",
						"japanese": "吹雪の向こう、巨大な影がはっきりと見えた。",
						"chinese": "暴风雪的尽头，一道巨大的身影逐渐清晰。",
						"french": "Au-delà du blizzard, une ombre colossale s'est précisée.",
						"spanish": "Más allá de la ventisca, una sombra colosal se hizo nítida.",
						"vietnamese": "Ngoài trận bão tuyết, một cái bóng khổng lồ hiện rõ.",
						"thai": "เหนือพายุหิมะไปนั้น เงาร่างมหึมาปรากฏชัดขึ้น",
						"hindi": "बर्फीले तूफान के पार, एक विशाल छाया स्पष्ट हो गई।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "저건… 내가 알던 짐승이 아니야.",
						"english": "That's... not a beast I know.",
						"japanese": "あれは…私の知っている獣じゃない。",
						"chinese": "那不是……我所认识的野兽。",
						"french": "Ce n'est pas... la bête que je connais.",
						"spanish": "Eso... no es una bestia que yo conozca.",
						"vietnamese": "Đó… không phải là con thú mà tôi biết.",
						"thai": "นั่นมัน... ไม่ใช่สัตว์ร้ายที่ฉันรู้จัก",
						"hindi": "वह... वह जानवर नहीं है जिसे मैं जानता हूँ।"
					},
					"speaker": "bran",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "너무 커요. 말도 안 돼요.",
						"english": "It's too big. It's impossible.",
						"japanese": "あまりに大きい。信じられない。",
						"chinese": "太大了。简直不可思议。",
						"french": "C'est trop grand. C'est impossible.",
						"spanish": "Es demasiado grande. Es imposible.",
						"vietnamese": "Lớn quá. Không thể tin được.",
						"thai": "มันใหญ่เกินไป เป็นไปไม่ได้เลย",
						"hindi": "यह बहुत बड़ा है। यह असंभव है।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_2"
				},
				{
					"content": {
						"korean": "이 냉기… 대체 정체가 뭐지?",
						"english": "This chill... what in the world is it?",
						"japanese": "この冷気…一体何なんだ？",
						"chinese": "这股寒意……到底是什么？",
						"french": "Ce froid... quelle est son origine ?",
						"spanish": "Este frío... ¿qué demonios es?",
						"vietnamese": "Cái lạnh này… rốt cuộc là gì?",
						"thai": "ความเย็นยะเยือกนี้... ตกลงมันคืออะไรกันแน่",
						"hindi": "यह ठंडक... आखिर यह क्या है?"
					},
					"speaker": "bran",
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "bran",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "bran",
					"content": {
						"korean": "돌아가야 해. 저건… 우리가 감당할 수 없어.",
						"english": "We have to go back. We... can't handle that.",
						"japanese": "戻らなければ。あれは…私たちには手に負えない。",
						"chinese": "我们必须回去。那不是……我们能对付得了的。",
						"french": "Nous devons faire demi-tour. Ça... nous ne pouvons pas gérer ça.",
						"spanish": "Tenemos que volver. Eso... no podemos con ello.",
						"vietnamese": "Chúng ta phải quay lại. Cái đó… chúng ta không thể đối phó được.",
						"thai": "เราต้องกลับไป นั่นมัน... เราไม่สามารถรับมือได้",
						"hindi": "हमें वापस जाना होगा। वह... हम संभाल नहीं सकते।"
					}
				},
				{
					"content": {
						"korean": "이미 너무 멀리 왔어요, 브란.",
						"english": "We've already come too far, Bran.",
						"japanese": "もう遠くまで来すぎたわ、ブラン。",
						"chinese": "我们已经走得太远了，布兰。",
						"french": "Nous sommes déjà allés trop loin, Bran.",
						"spanish": "Ya hemos llegado demasiado lejos, Bran.",
						"vietnamese": "Chúng ta đã đi quá xa rồi, Bran.",
						"thai": "เรามาไกลเกินไปแล้วค่ะ, แบรน",
						"hindi": "हम पहले ही बहुत दूर आ चुके हैं, ब्रैन।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_3",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "여기서 멈출 수 없어요.",
						"english": "We can't stop here.",
						"japanese": "ここで止まるわけにはいかない。",
						"chinese": "我们不能停在这里。",
						"french": "Nous ne pouvons pas nous arrêter ici.",
						"spanish": "No podemos parar aquí.",
						"vietnamese": "Không thể dừng lại ở đây được.",
						"thai": "เราหยุดอยู่ตรงนี้ไม่ได้ค่ะ",
						"hindi": "हम यहां रुक नहीं सकते।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "bran",
					"content": {
						"korean": "…하지만.",
						"english": "...But.",
						"japanese": "「…だが。」",
						"chinese": "“……但是。”",
						"french": "...Mais.",
						"spanish": "...Pero.",
						"vietnamese": "...Nhưng.",
						"thai": "...แต่ว่า.",
						"hindi": "...लेकिन।"
					}
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "Fenrir의 맹위 앞에 탐험대는 무릎 꿇었다.",
						"english": "Before Fenrir's might, the expedition team knelt.",
						"japanese": "フェンリルの猛威の前に、探検隊はひざまずいた。",
						"chinese": "在芬里尔的强大威力面前，探险队跪下了。",
						"french": "Face à la fureur de Fenrir, l'équipe d'expédition s'agenouilla.",
						"spanish": "Ante la ferocidad de Fenrir, el equipo de expedición se arrodilló.",
						"vietnamese": "Trước uy lực của Fenrir, đội thám hiểm đã quỳ gối.",
						"thai": "ต่อหน้าความเกรี้ยวกราดของ Fenrir ทีมสำรวจได้คุกเข่าลง。",
						"hindi": "फेनरिर के प्रकोप के आगे, अन्वेषण दल घुटने टेक गया।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "…겨우 이 정도인가. 너희의 열기는 식어버렸군.",
						"english": "...Is this all you've got? Your passion has cooled.",
						"japanese": "…これだけか。お前たちの熱気は冷めてしまったな。",
						"chinese": "……就这点程度吗？你们的热情已经消退了。",
						"french": "...Ce n'est que ça ? Votre ardeur s'est éteinte.",
						"spanish": "...¿Esto es todo? Vuestro fervor se ha enfriado.",
						"vietnamese": "...Chỉ có thế này thôi sao? Nhiệt huyết của các ngươi đã nguội lạnh rồi.",
						"thai": "...แค่นี้เองรึ? ความกระตือรือร้นของพวกเจ้าหมดลงแล้ว。",
						"hindi": "...बस इतना ही? तुम्हारा जोश ठंडा पड़ गया है।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "아직… 끝나지 않았어.",
						"english": "It's not... over yet.",
						"japanese": "まだ…終わってない。",
						"chinese": "还没……结束呢。",
						"french": "Ce n'est pas... encore fini.",
						"spanish": "Aún no... ha terminado.",
						"vietnamese": "Vẫn chưa... kết thúc đâu.",
						"thai": "ยัง…ไม่จบหรอก。",
						"hindi": "अभी... खत्म नहीं हुआ है।"
					}
				},
				{
					"action": "enter",
					"type": "direction",
					"speaker": "bran",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "bran",
					"content": {
						"korean": "이런… 괴물 같은 녀석.",
						"english": "Such a... monster.",
						"japanese": "まったく…化け物め。",
						"chinese": "真是个……怪物。",
						"french": "Quel... monstre.",
						"spanish": "Qué... monstruo.",
						"vietnamese": "Đúng là... quái vật mà.",
						"thai": "ช่างเป็น…ปีศาจแท้ๆ。",
						"hindi": "ऐसा... राक्षस।"
					}
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 쓰러지자, 잠시 설원에 고요가 찾아왔다.",
						"english": "As the colossal shadow fell, a momentary silence descended upon the snowy plains.",
						"japanese": "「巨大な影が倒れると、一時雪原に静寂が訪れた。」",
						"chinese": "“当巨大的阴影倒下后，雪原暂时恢复了寂静。”",
						"french": "Alors que l'ombre colossale s'effondrait, un silence momentané s'abattit sur les plaines enneigées.",
						"spanish": "Al caer la sombra colosal, un silencio momentáneo se apoderó de las llanuras nevadas.",
						"vietnamese": "Khi cái bóng khổng lồ đổ xuống, một sự tĩnh lặng tạm thời bao trùm lên đồng tuyết.",
						"thai": "เมื่อเงาขนาดมหึมาล้มลง ความเงียบสงบก็ปกคลุมทุ่งหิมะชั่วขณะ",
						"hindi": "जैसे ही विशाल छाया गिरी, बर्फीले मैदानों पर क्षण भर के लिए खामोशी छा गई।"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…이것은 시작일 뿐… 진정한 냉기는… 아직 오지 않았다…",
						"english": "...This is only the beginning... The true chill... has yet to come...",
						"japanese": "「…これは始まりに過ぎない…真の冷気は…まだ来ていない…」",
						"chinese": "“……这只是开始……真正的寒意……尚未到来……”",
						"french": "...Ce n'est que le début... Le véritable froid... n'est pas encore venu...",
						"spanish": "...Esto es solo el principio... El verdadero frío... aún no ha llegado...",
						"vietnamese": "...Đây chỉ là khởi đầu... Cái lạnh thực sự... vẫn chưa đến...",
						"thai": "...นี่เป็นเพียงจุดเริ่มต้น... ความหนาวเย็นที่แท้จริง... ยังมาไม่ถึง...",
						"hindi": "...यह तो बस शुरुआत है... असली ठंड... अभी आनी बाकी है..."
					}
				},
				{
					"content": {
						"korean": "…무슨 소리야.",
						"english": "...What was that?",
						"japanese": "「…何だって？」",
						"chinese": "“……你说什么？”",
						"french": "...Qu'est-ce que c'était ?",
						"spanish": "¿...Qué fue eso?",
						"vietnamese": "...Cái gì vậy?",
						"thai": "...เสียงอะไรนะ",
						"hindi": "...क्या था वह?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "bran",
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "bran",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "단순한 짐승이 아니었어. 역시….",
						"english": "It wasn't just a mere beast. As expected...",
						"japanese": "「ただの獣ではなかった。やはり…。」",
						"chinese": "“它不仅仅是一只野兽。果然……”",
						"french": "Ce n'était pas qu'une simple bête. Comme prévu...",
						"spanish": "No era una simple bestia. Como era de esperar...",
						"vietnamese": "Nó không phải một con thú đơn thuần. Quả nhiên...",
						"thai": "ไม่ใช่แค่สัตว์ธรรมดาอย่างที่คิด...",
						"hindi": "यह सिर्फ एक जानवर नहीं था। जैसा कि उम्मीद थी..."
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "승리했지만, 브란의 얼굴엔 의구심이 가득했다. 진정한 Fenrir의 그림자는 아직 멀었다.",
						"english": "Though victorious, Bran's face was filled with doubt. The shadow of the true Fenrir was still far off.",
						"japanese": "勝利したが、ブランの顔には疑念が満ちていた。真のフェンリルの影はまだ遠い。",
						"chinese": "尽管取得了胜利，布兰的脸上却充满了疑惑。真正的芬里尔的阴影还很遥远。",
						"french": "Bien que victorieux, le visage de Bran était empreint de doute. L'ombre du véritable Fenrir était encore lointaine.",
						"spanish": "Aunque victorioso, el rostro de Bran estaba lleno de dudas. La sombra del verdadero Fenrir aún estaba lejos.",
						"vietnamese": "Dù thắng lợi, nhưng trên mặt Bran tràn đầy nghi hoặc. Cái bóng của Fenrir thực sự vẫn còn xa lắm.",
						"thai": "แม้จะได้รับชัยชนะ แต่ใบหน้าของบรานเต็มไปด้วยความสงสัย เงาของ Fenrir ตัวจริงยังอีกไกลนัก。",
						"hindi": "हालांकि जीत गए थे, ब्रैन के चेहरे पर संदेह भरा था। असली फेनरिर की परछाई अभी भी बहुत दूर थी。"
					}
				}
			],
			"id": 15,
			"dialogue": [
				{
					"content": {
						"korean": "눈보라가 걷히자, 압도적인 존재가 모습을 드러냈다.",
						"english": "As the blizzard cleared, an overwhelming presence revealed itself.",
						"japanese": "「吹雪が晴れると、圧倒的な存在が姿を現した。」",
						"chinese": "“暴风雪消散后，一个压倒性的存在显露了身形。”",
						"french": "Alors que le blizzard se dissipait, une présence écrasante se révéla.",
						"spanish": "Al disiparse la ventisca, una presencia abrumadora se reveló.",
						"vietnamese": "Khi bão tuyết tan, một sự hiện diện áp đảo đã lộ diện.",
						"thai": "เมื่อพายุหิมะจางลง สิ่งทรงพลังปรากฏกายขึ้น",
						"hindi": "जैसे ही बर्फीला तूफान छटा, एक जबरदस्त उपस्थिति सामने आई।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "…어리석은 인간들. 감히 나의 영역을 침범하다니.",
						"english": "...Foolish humans. How dare you trespass upon my domain.",
						"japanese": "「…愚かな人間どもめ。よくも我が領域を侵したな。」",
						"chinese": "“……愚蠢的人类。竟敢侵犯我的领域。”",
						"french": "...Stupides humains. Comment osez-vous empiéter sur mon domaine.",
						"spanish": "...Humanos necios. ¿Cómo os atrevéis a invadir mi dominio?",
						"vietnamese": "...Lũ người ngu ngốc. Dám xâm phạm lãnh địa của ta.",
						"thai": "...มนุษย์โง่เขลา บังอาจรุกล้ำอาณาเขตของข้า",
						"hindi": "...मूर्ख इंसान। तुमने मेरे क्षेत्र में घुसने की हिम्मत कैसे की।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "저게… Fenrir…?",
						"english": "Is that... Fenrir...?",
						"japanese": "「あれが…フェンリル…？」",
						"chinese": "“那个是……芬里尔……？”",
						"french": "C'est... Fenrir...?",
						"spanish": "¿Eso es... Fenrir...?",
						"vietnamese": "Đó là... Fenrir...?",
						"thai": "นั่นคือ... เฟนเรียร์...?",
						"hindi": "क्या वह... फेनरिर...?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "bran",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "bran",
					"content": {
						"korean": "…눈이… 없어. 텅 빈 동공에서… 이 싸늘한 냉기.",
						"english": "...Its eyes... are gone. From those empty sockets... this chilling cold.",
						"japanese": "「…目が…ない。虚ろな瞳孔から…この冷たい冷気。」",
						"chinese": "“……没有……眼睛。从那空洞的瞳孔中……散发出这股冰冷的寒气。”",
						"french": "...Ses yeux... ont disparu. De ces orbites vides... ce froid glacial.",
						"spanish": "...No tiene... ojos. De esas cuencas vacías... este frío glacial.",
						"vietnamese": "...Mắt... không còn. Từ đôi hốc mắt trống rỗng... hơi lạnh buốt này.",
						"thai": "...ไม่มี...ดวงตา จากเบ้าตาที่ว่างเปล่า...ความเยือกเย็นนี้",
						"hindi": "...आँखें... नहीं हैं। उन खाली आँखों से... यह बर्फीली ठंडक।"
					}
				},
				{
					"content": {
						"korean": "너희의 온기도… 곧 사라질 것이다.",
						"english": "Your warmth... too, shall soon vanish.",
						"japanese": "「お前たちの温もりも…すぐに消え失せるだろう。」",
						"chinese": "“你们的温暖……也将很快消失。”",
						"french": "Votre chaleur... disparaîtra bientôt elle aussi.",
						"spanish": "Vuestro calor... también desaparecerá pronto.",
						"vietnamese": "Sự ấm áp của các ngươi... cũng sẽ sớm tan biến.",
						"thai": "ความอบอุ่นของพวกเจ้า... ก็จะมลายหายไปในไม่ช้า",
						"hindi": "तुम्हारी गरमाहट भी... जल्द ही मिट जाएगी।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"깊은 눈보라 속, 거대한 그림자가 춤춘다.",
			"노련한 사냥꾼 브란의 본능이 섬뜩한 경고를 보낸다.",
			"그것은 단순한 맹수가 아니었다. 생명 없는 눈동자에서 냉기가 뿜어져 나왔다.",
			"다가오는 첫 조우. 긴장감이 얼어붙은 설원을 가득 채운다."
		],
		"english": [
			"In the deep blizzard, a giant shadow dances.",
			"Veteran hunter Bran's instincts send a chilling warning.",
			"It wasn't just a beast. Cold emanated from its lifeless eyes.",
			"The approaching first encounter. Tension fills the frozen snowfield."
		],
		"japanese": [
			"深い吹雪の中、巨大な影が舞う。",
			"ベテランハンター、ブランの本能が不気味な警告を発する。",
			"それはただの猛獣ではなかった。生命のない瞳から冷気が放たれていた。",
			"迫り来る最初の遭遇。緊張が凍てつく雪原を満たす。"
		],
		"chinese": [
			"在深深的暴风雪中，一个巨大的影子在舞动。",
			"资深猎人布兰的直觉发出了令人毛骨悚然的警告。",
			"那不只是一只野兽。冰冷的气息从它没有生命的眼睛中散发出来。",
			"第一次接触即将到来。紧张感弥漫在冰冻的雪原上。"
		],
		"french": [
			"Dans la profonde tempête de neige, une ombre gigantesque danse.",
			"L'instinct du chasseur chevronné Bran envoie un avertissement glaçant.",
			"Ce n'était pas un simple fauve. Un froid glacial émanait de ses yeux sans vie.",
			"La première rencontre approche. La tension envahit l'étendue enneigée gelée."
		],
		"spanish": [
			"En la profunda ventisca, una sombra gigantesca baila.",
			"El instinto del experimentado cazador Bran envía una escalofriante advertencia.",
			"No era solo una bestia. El frío emanaba de sus ojos sin vida.",
			"El primer encuentro se acerca. La tensión llena el campo de nieve congelado."
		],
		"vietnamese": [
			"Trong bão tuyết sâu thẳm, một bóng hình khổng lồ đang nhảy múa.",
			"Bản năng của thợ săn lão luyện Bran phát ra một lời cảnh báo rợn người.",
			"Đó không chỉ là một con thú. Hơi lạnh toát ra từ đôi mắt vô hồn của nó.",
			"Cuộc chạm trán đầu tiên đang đến gần. Căng thẳng bao trùm cánh đồng tuyết đóng băng."
		],
		"thai": [
			"ท่ามกลางพายุหิมะที่รุนแรง เงาร่างมหึมากำลังเต้นรำ",
			"สัญชาตญาณของนักล่าผู้ช่ำชองแบรนส่งสัญญาณเตือนอันน่าขนลุก",
			"มันไม่ใช่แค่สัตว์ร้าย ความหนาวเย็นแผ่ออกมาจากดวงตาที่ไร้ชีวิตของมัน",
			"การเผชิญหน้าครั้งแรกที่กำลังจะมาถึง ความตึงเครียดปกคลุมทุ่งหิมะที่เยือกแข็ง"
		],
		"hindi": [
			"गहरे बर्फीले तूफान में, एक विशाल छाया नृत्य करती है।",
			"अनुभवी शिकारी ब्रान की प्रवृत्ति एक भयावह चेतावनी भेजती है।",
			"वह सिर्फ एक जानवर नहीं था। उसकी बेजान आँखों से ठंडक निकल रही थी।",
			"पहला मुकाबला नजदीक आ रहा है। जमा हुआ तनाव बर्फीले मैदान को भर देता है।"
		]
	}
} as const;
