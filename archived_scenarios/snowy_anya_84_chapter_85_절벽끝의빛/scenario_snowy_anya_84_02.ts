export const scenario_snowy_anya_84_02 = {
	"scenario_id": "snowy_anya_84_02",
	"order": 2,
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
					"content": {
						"korean": "눈보라가 몰아치는 절벽 끝. 모든 것이 얼어붙어 있었다.",
						"english": "At the edge of a blizzard-swept cliff. Everything was frozen.",
						"japanese": "吹雪が吹き荒れる崖の果て。すべてが凍りついていた。",
						"chinese": "暴风雪肆虐的悬崖尽头。一切都已冰冻。",
						"french": "Au bord d'une falaise balayée par le blizzard. Tout était gelé.",
						"spanish": "Al borde de un acantilado azotado por la ventisca. Todo estaba congelado.",
						"vietnamese": "Ở rìa vách đá bị bão tuyết càn quét. Mọi thứ đều đóng băng.",
						"thai": "ที่ปลายผาที่มีพายุหิมะโหมกระหน่ำ ทุกสิ่งแข็งตัว",
						"hindi": "बर्फीले तूफान से घिरी चट्टान के किनारे पर। सब कुछ जम गया था।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "여기까지 왔는데… 더 이상은 힘들겠어.",
						"english": "We've come this far... but I can't go on anymore.",
						"japanese": "ここまで来たのに…これ以上は無理だ。",
						"chinese": "走到这里了……再往前就很难了。",
						"french": "Nous sommes venus jusqu'ici... mais je n'en peux plus.",
						"spanish": "Hemos llegado hasta aquí... pero no puedo más.",
						"vietnamese": "Đã đi đến đây rồi... nhưng không thể tiếp tục nữa.",
						"thai": "มาถึงตรงนี้แล้ว... แต่คงไปต่อไม่ไหวแล้ว",
						"hindi": "हम इतनी दूर आ गए हैं... पर अब और नहीं हो पाएगा।"
					},
					"speaker": "character_any"
				},
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "eira",
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "진정하세요. 빛이 여기를 가리키고 있습니다.",
						"english": "Calm down. The light is pointing here.",
						"japanese": "落ち着いてください。光がここを指しています。",
						"chinese": "请冷静。光芒正指向这里。",
						"french": "Calmez-vous. La lumière indique cet endroit.",
						"spanish": "Cálmese. La luz está apuntando aquí.",
						"vietnamese": "Hãy bình tĩnh. Ánh sáng đang chỉ vào đây.",
						"thai": "ใจเย็นๆ ค่ะ แสงกำลังชี้มาทางนี้",
						"hindi": "शांत हो जाओ। प्रकाश यहीं इंगित कर रहा है।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "저기… 얼음 속에 무언가 보이시나요?",
						"english": "Look... do you see something in the ice?",
						"japanese": "あそこに…氷の中に何か見えますか？",
						"chinese": "看……冰里面有什么东西吗？",
						"french": "Là-bas... voyez-vous quelque chose dans la glace ?",
						"spanish": "Mira... ¿ves algo en el hielo?",
						"vietnamese": "Nhìn kìa... bạn có thấy gì trong băng không?",
						"thai": "นั่น... คุณเห็นอะไรในน้ำแข็งไหมคะ",
						"hindi": "उधर... क्या आपको बर्फ में कुछ दिख रहा है?"
					},
					"speaker": "eira"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "eira",
					"duration_ms": 500
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "가까이서 보니… 정말 작은 형체군요.",
						"english": "Up close... it's a really small figure.",
						"japanese": "近くで見ると…本当に小さな姿ですね。",
						"chinese": "近看……真是个小小的形体啊。",
						"french": "De près... c'est une très petite forme.",
						"spanish": "De cerca... es una figura realmente pequeña.",
						"vietnamese": "Nhìn gần thì... đúng là một hình dáng rất nhỏ.",
						"thai": "พอเข้ามาดูใกล้ๆ... เป็นรูปร่างที่เล็กจริงๆ ด้วย",
						"hindi": "करीब से देखने पर... यह वाकई एक छोटी सी आकृति है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "사람 같아… 아이인가?",
						"english": "Looks like a person... a child?",
						"japanese": "人間みたいだ…子供かな？",
						"chinese": "像个人……是个孩子吗？",
						"french": "On dirait une personne... un enfant ?",
						"spanish": "Parece una persona... ¿un niño?",
						"vietnamese": "Trông giống người... một đứa trẻ sao?",
						"thai": "เหมือนคนเลย... เด็กหรือเปล่านะ",
						"hindi": "इंसान जैसा लग रहा है... बच्चा है क्या?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "네. 얼음에 갇혀 잠들어 있는 듯 보입니다.",
						"english": "Yes. It seems to be trapped in ice, sleeping.",
						"japanese": "はい。氷に閉じ込められ、眠っているようです。",
						"chinese": "是的。它似乎被困在冰中，仿佛睡着了。",
						"french": "Oui. Il semble piégé dans la glace, comme endormi.",
						"spanish": "Sí. Parece atrapado en el hielo, como dormido.",
						"vietnamese": "Vâng. Nó dường như đang bị mắc kẹt trong băng, như đang ngủ.",
						"thai": "ใช่ มันดูเหมือนถูกขังอยู่ในน้ำแข็งและหลับใหล",
						"hindi": "हाँ। यह बर्फ में फंसा हुआ, सो रहा लग रहा है।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "eira",
					"content": {
						"korean": "하지만 이 깊은 곳에… 대체 왜.",
						"english": "But in this deep place… why here?",
						"japanese": "しかし、こんな深い場所に…一体なぜ。",
						"chinese": "但是在这个深渊… 究竟为什么？",
						"french": "Mais dans ces profondeurs… pourquoi donc ?",
						"spanish": "Pero en este lugar tan profundo… ¿por qué?",
						"vietnamese": "Nhưng ở nơi sâu thẳm này… tại sao chứ?",
						"thai": "แต่ในที่ลึกขนาดนี้… ทำไมกันนะ?",
						"hindi": "लेकिन इस गहरी जगह में… आख़िर क्यों।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "eira",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "자세히 보니, 옷차림이… 어디서 많이 본 듯합니다.",
						"english": "Looking closer, the attire… it looks familiar.",
						"japanese": "よく見ると、その服装は…どこかで見たような。",
						"chinese": "仔细一看，这身装束… 似曾相识。",
						"french": "En y regardant de plus près, sa tenue… me semble familière.",
						"spanish": "Mirando de cerca, su vestimenta… me resulta familiar.",
						"vietnamese": "Nhìn kỹ hơn, trang phục… có vẻ quen thuộc.",
						"thai": "ดูใกล้ๆ แล้ว เสื้อผ้าของเขา… ดูเหมือนเคยเห็นที่ไหนมาก่อน",
						"hindi": "करीब से देखने पर, पोशाक… कहीं देखी हुई लगती है।"
					},
					"speaker": "eira"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "설마… 내 빛이 두른 그 형상과….",
						"english": "Could it be… the figure my light enveloped…?",
						"japanese": "まさか…私の光がまとっていた、あの姿と…。",
						"chinese": "难道说… 跟我之光环绕的那个身影…",
						"french": "Se pourrait-il que… la forme que ma lumière a enveloppée…",
						"spanish": "¡Será posible que… la figura que mi luz envolvió…?",
						"vietnamese": "Lẽ nào… hình dáng mà ánh sáng của tôi bao phủ…",
						"thai": "ไม่นะ… ร่างที่แสงของฉันปกคลุม…",
						"hindi": "कहीं… मेरी रौशनी ने जिस आकृति को घेरा था, वह तो नहीं…।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "eira",
					"content": {
						"korean": "네. 이 얼음 속의 아이와… 당신의 빛은 같은 존재를 가리키고 있어요.",
						"english": "Yes. The child in this ice… and your light point to the same being.",
						"japanese": "ええ。この氷の中の子供と…あなたの光は、同じ存在を指しています。",
						"chinese": "是的。这个冰中的孩子… 和你的光芒指向的是同一个存在。",
						"french": "Oui. L'enfant dans la glace… et votre lumière désignent le même être.",
						"spanish": "Sí. La niña en este hielo… y tu luz señalan al mismo ser.",
						"vietnamese": "Vâng. Đứa trẻ trong băng này… và ánh sáng của bạn chỉ cùng một thực thể.",
						"thai": "ใช่ เด็กที่อยู่ในน้ำแข็งคนนี้… และแสงของคุณชี้ไปที่สิ่งมีชีวิตเดียวกัน",
						"hindi": "हाँ। इस बर्फ में फंसा बच्चा… और आपकी रौशनी एक ही अस्तित्व की ओर इशारा कर रहे हैं।"
					}
				},
				{
					"content": {
						"korean": "…믿을 수 없어.",
						"english": "…I can't believe it.",
						"japanese": "…信じられない。",
						"chinese": "…无法相信。",
						"french": "…Je n'arrive pas à y croire.",
						"spanish": "…No puedo creerlo.",
						"vietnamese": "…Không thể tin được.",
						"thai": "…ไม่น่าเชื่อ",
						"hindi": "…मैं विश्वास नहीं कर सकता।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"speaker": "eira",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "빛이… 더 다가가지 못하고 있습니다.",
						"english": "The light… cannot approach further.",
						"japanese": "光が…これ以上近づけないでいる。",
						"chinese": "光… 无法再靠近了。",
						"french": "La lumière… ne peut plus s'approcher.",
						"spanish": "La luz… no puede acercarse más.",
						"vietnamese": "Ánh sáng… không thể đến gần hơn.",
						"thai": "แสง… เข้าใกล้กว่านี้ไม่ได้แล้ว",
						"hindi": "रौशनी… और आगे नहीं जा पा रही है।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "왜 멈춘 거지? 두려워하는 거야?",
						"english": "Why did it stop? Is it afraid?",
						"japanese": "なぜ止まった？恐れているのか？",
						"chinese": "为什么停下了？是害怕吗？",
						"french": "Pourquoi s'est-elle arrêtée ? A-t-elle peur ?",
						"spanish": "¿Por qué se detuvo? ¿Tiene miedo?",
						"vietnamese": "Sao lại dừng lại? Có phải là sợ hãi không?",
						"thai": "ทำไมถึงหยุดล่ะ? กลัวเหรอ?",
						"hindi": "क्यों रुक गई? क्या डर रही है?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "이 얼음 속에 잠든 아이는… 안야, 바로 당신 자신입니다.",
						"english": "The child sleeping in this ice… Anja, is yourself.",
						"japanese": "この氷の中で眠る子供は…アンヤ、あなた自身です。",
						"chinese": "这个沉睡在冰中的孩子… 安雅，就是你自己。",
						"french": "L'enfant endormi dans cette glace… Anja, c'est vous-même.",
						"spanish": "La niña dormida en este hielo… Anja, eres tú misma.",
						"vietnamese": "Đứa trẻ đang ngủ trong băng này… Anja, chính là bạn.",
						"thai": "เด็กที่หลับใหลอยู่ในน้ำแข็งนี้… อันยา เธอเอง",
						"hindi": "इस बर्फ में सोया बच्चा… अन्या, तुम खुद हो।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "내가… 여기… 왜.",
						"english": "Me… here… why.",
						"japanese": "私が…ここに…なぜ。",
						"chinese": "我… 在这里… 为什么。",
						"french": "Moi… ici… pourquoi.",
						"spanish": "Yo… aquí… ¿por qué?",
						"vietnamese": "Tôi… ở đây… tại sao.",
						"thai": "ฉัน… ที่นี่… ทำไม",
						"hindi": "मैं… यहाँ… क्यों।"
					},
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "…겨우 이 정도인가. 진짜 기억은… 더욱 차가운 곳에….",
						"english": "…Is that all? The true memories are… in a colder place….",
						"japanese": "…これだけか。真の記憶は…もっと冷たい場所に…。",
						"chinese": "…就这点程度吗。真正的记忆…在更寒冷的地方…。",
						"french": "…C'est tout ? Les vrais souvenirs sont… dans un endroit plus froid….",
						"spanish": "…¿Eso es todo? Los verdaderos recuerdos están… en un lugar más frío….",
						"vietnamese": "…Chỉ vậy thôi sao? Ký ức thực sự… ở một nơi lạnh hơn….",
						"thai": "…แค่นี้เองรึ ความทรงจำที่แท้จริงนั้น… อยู่ในที่ที่เยือกเย็นกว่า…",
						"hindi": "…बस इतना ही? सच्ची यादें… एक ठंडी जगह पर हैं…।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "무슨 소리야! 저 아이는…!",
						"english": "What are you talking about! That child…!",
						"japanese": "何を言ってるんだ！あの子は…！",
						"chinese": "你在说什么！那个孩子…！",
						"french": "De quoi parles-tu ! Cet enfant… !",
						"spanish": "¡De qué hablas! ¡Ese niño…!",
						"vietnamese": "Ngươi đang nói gì vậy! Đứa trẻ đó…!",
						"thai": "เจ้าพูดอะไรน่ะ! เด็กคนนั้น…!",
						"hindi": "तुम क्या कह रहे हो! वह बच्चा…!"
					},
					"speaker": "character_any"
				},
				{
					"spot": [
						2,
						2
					],
					"speaker": "eira",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "이 얼음은… 더 깊은 비밀을 감추고 있습니다.",
						"english": "This ice… hides a deeper secret.",
						"japanese": "この氷は…より深い秘密を隠している。",
						"chinese": "这冰…隐藏着更深的秘密。",
						"french": "Cette glace… cache un secret plus profond.",
						"spanish": "Este hielo… esconde un secreto más profundo.",
						"vietnamese": "Lớp băng này… che giấu một bí mật sâu xa hơn.",
						"thai": "น้ำแข็งนี้… ซ่อนความลับที่ลึกซึ้งกว่าไว้",
						"hindi": "यह बर्फ… एक गहरा रहस्य छुपाती है।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "얼음 속 형체는 여전히 잠들어 있었다. 그러나 빛은, 아직 나아갈 곳이 있었다.",
						"english": "The figure in the ice remained dormant. But the light still had somewhere to go.",
						"japanese": "氷中の姿は依然として眠っていた。しかし、光にはまだ進むべき場所があった。",
						"chinese": "冰中的形体依然沉睡着。然而，光芒仍有去处。",
						"french": "La silhouette dans la glace restait endormie. Mais la lumière avait encore un chemin à parcourir.",
						"spanish": "La figura en el hielo seguía dormida. Pero la luz aún tenía un lugar adonde ir.",
						"vietnamese": "Hình thể trong băng vẫn chìm vào giấc ngủ. Nhưng ánh sáng vẫn còn nơi để đi tới.",
						"thai": "สิ่งมีชีวิตในน้ำแข็งยังคงหลับใหลอยู่ แต่แสงสว่างยังมีที่ที่ต้องไป",
						"hindi": "बर्फ में जमी आकृति निष्क्रिय रही। लेकिन प्रकाश को अभी भी कहीं जाना था।"
					}
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "얼음 속 형체 앞에, 거대한 그림자가 드리웠다.",
						"english": "A colossal shadow loomed before the figure in the ice.",
						"japanese": "氷中の姿の前に、巨大な影が差した。",
						"chinese": "冰中的形体前，巨大的阴影笼罩。",
						"french": "Une ombre colossale planait devant la silhouette figée dans la glace.",
						"spanish": "Una sombra colosal se cernía ante la figura en el hielo.",
						"vietnamese": "Một bóng đen khổng lồ bao trùm trước hình thể trong băng.",
						"thai": "เงาขนาดมหึมาทอดทับอยู่เบื้องหน้าสิ่งมีชีวิตที่อยู่ในน้ำแข็ง",
						"hindi": "बर्फ में जमी आकृति के सामने एक विशाल छाया मंडरा रही थी।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "…어리석은 자여. 왜 과거를 들추려 하는가.",
						"english": "…Foolish one. Why do you unearth the past?",
						"japanese": "…愚かな者よ。なぜ過去を暴こうとする？",
						"chinese": "…愚蠢之人。为何要揭开过去？",
						"french": "…Imbécile. Pourquoi exhumer le passé ?",
						"spanish": "…Tonto. ¿Por qué desentierras el pasado?",
						"vietnamese": "…Kẻ khờ dại. Sao ngươi lại muốn khơi lại quá khứ?",
						"thai": "…คนโง่เอ๋ย เหตุใดจึงรื้อฟื้นอดีต?",
						"hindi": "…मूर्ख। तुम अतीत को क्यों कुरेद रहे हो?"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "네가 이 아이를 얼린 거야?",
						"english": "Did you freeze this child?",
						"japanese": "お前がこの子を凍らせたのか？",
						"chinese": "是你冻结了这个孩子吗？",
						"french": "C'est toi qui as gelé cet enfant ?",
						"spanish": "¡Tú congelaste a este niño?",
						"vietnamese": "Ngươi đã đóng băng đứa trẻ này sao?",
						"thai": "เจ้าเป็นคนแช่แข็งเด็กคนนี้หรือ?",
						"hindi": "क्या तुमने इस बच्चे को जमाया है?"
					}
				},
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						2
					],
					"duration_ms": 500,
					"speaker": "eira"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "이 룬… 잊혀진 역사의 수호자.",
						"english": "This rune… Guardian of forgotten history.",
						"japanese": "このルーン…忘れ去られた歴史の守護者。",
						"chinese": "这符文…遗忘历史的守护者。",
						"french": "Cette rune… Gardien de l'histoire oubliée.",
						"spanish": "Esta runa… Guardián de la historia olvidada.",
						"vietnamese": "Dấu ấn này… Người bảo vệ lịch sử bị lãng quên.",
						"thai": "รูนนี้… ผู้พิทักษ์ประวัติศาสตร์ที่ถูกลืมเลือน",
						"hindi": "यह रहस्य… भूले हुए इतिहास का रखवाला।"
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "감히 {random_boss}의 영역에 발을 들이려 하는가.",
						"english": "Dare you trespass into {random_boss}'s domain?",
						"japanese": "あえて{random_boss}の領域に足を踏み入れるか。",
						"chinese": "你竟敢闯入{random_boss}的领地？",
						"french": "Oses-tu t'aventurer dans le domaine de {random_boss} ?",
						"spanish": "¿Osas adentrarte en el dominio de {random_boss}?",
						"vietnamese": "Ngươi dám xâm nhập vào lãnh địa của {random_boss} sao?",
						"thai": "เจ้ากล้าบุกรุกอาณาเขตของ {random_boss} รึ?",
						"hindi": "क्या तुम {random_boss} के क्षेत्र में घुसने की हिम्मत करते हो?"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "이 아이를 여기서 꺼낼 거야!",
						"english": "I'll get this child out of here!",
						"japanese": "この子をここから出す！",
						"chinese": "我会把这孩子带出去！",
						"french": "Je vais sortir cet enfant d'ici !",
						"spanish": "¡Sacaré a este niño de aquí!",
						"vietnamese": "Tôi sẽ đưa đứa trẻ này ra khỏi đây!",
						"thai": "ข้าจะพาเด็กคนนี้ออกไปจากที่นี่!",
						"hindi": "मैं इस बच्चे को यहाँ से निकालूँगा!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "잊힌 과거는 잊힌 채로 두어야 했다.",
						"english": "Some pasts are better left forgotten.",
						"japanese": "忘れ去られた過去は、忘れ去られたままにしておくべきだった。",
						"chinese": "被遗忘的过去，就该让它继续被遗忘。",
						"french": "Certains passés auraient dû rester oubliés.",
						"spanish": "Algunos pasados es mejor dejarlos en el olvido.",
						"vietnamese": "Quá khứ đã lãng quên nên để nó tiếp tục bị lãng quên.",
						"thai": "อดีตที่ถูกลืมควรปล่อยให้ถูกลืม",
						"hindi": "कुछ अतीत को भुला देना ही बेहतर है。"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "아니야… 난 포기하지 않아!",
						"english": "No... I won't give up!",
						"japanese": "いや… 私は諦めない！",
						"chinese": "不…我不会放弃！",
						"french": "Non... je n'abandonnerai pas !",
						"spanish": "¡No... no me rendiré!",
						"vietnamese": "Không... tôi sẽ không bỏ cuộc!",
						"thai": "ไม่... ฉันไม่ยอมแพ้!",
						"hindi": "नहीं... मैं हार नहीं मानूँगा!"
					},
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"speaker": "eira",
					"spot": [
						2,
						2
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "이대로 물러설 수는 없습니다. 우리는 진실을 찾아야 해요.",
						"english": "We can't back down like this. We must find the truth.",
						"japanese": "このまま引き下がるわけにはいきません。私たちは真実を見つけなければなりません。",
						"chinese": "我们不能就此退缩。我们必须找到真相。",
						"french": "Nous ne pouvons pas reculer ainsi. Nous devons trouver la vérité.",
						"spanish": "No podemos retroceder así. Debemos encontrar la verdad.",
						"vietnamese": "Chúng ta không thể lùi bước như thế này. Chúng ta phải tìm ra sự thật.",
						"thai": "เราจะถอยไม่ได้ เราต้องค้นหาความจริง",
						"hindi": "हम ऐसे पीछे नहीं हट सकते। हमें सच ढूंढना होगा।"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"안야의 빛은 마지막 길을 향했다.",
			"눈보라가 몰아치는 절벽 끝.",
			"빛은 점점 흐려지고, 차가운 기운만이 가득했다.",
			"그 끝에서, 무언가 얼어붙은 형체가 기다리고 있었다."
		],
		"english": [
			"Anya's light headed towards its final path.",
			"At the edge of a blizzard-swept cliff.",
			"The light gradually faded, and only a chilling aura remained.",
			"At its end, a frozen figure waited."
		],
		"japanese": [
			"アーニャの光は最後の道を進んだ。",
			"吹雪が吹き荒れる崖の果て。",
			"光は次第に薄れ、冷たい気配だけが満ちていた。",
			"その果てで、何か凍りついた形が待っていた。"
		],
		"chinese": [
			"安雅之光迈向了最后的道路。",
			"暴风雪肆虐的悬崖尽头。",
			"光芒渐弱，只剩下冰冷的气息。",
			"在尽头，一个被冰冻的形体正在等待。"
		],
		"french": [
			"La lumière d'Anya se dirigeait vers son chemin final.",
			"Au bord d'une falaise balayée par le blizzard.",
			"La lumière s'estompa progressivement, ne laissant qu'une aura glaciale.",
			"À son terme, une forme gelée attendait."
		],
		"spanish": [
			"La luz de Anya se dirigió hacia su camino final.",
			"Al borde de un acantilado azotado por la ventisca.",
			"La luz se desvaneció gradualmente, y solo quedó un aura escalofriante.",
			"En su final, una figura congelada esperaba."
		],
		"vietnamese": [
			"Ánh sáng của Anya hướng về con đường cuối cùng.",
			"Ở rìa vách đá bị bão tuyết càn quét.",
			"Ánh sáng dần mờ đi, chỉ còn lại luồng khí lạnh lẽo.",
			"Ở cuối con đường, một hình hài đóng băng đang đợi."
		],
		"thai": [
			"แสงของอันยาพุ่งตรงสู่เส้นทางสุดท้าย",
			"ที่ปลายผาที่มีพายุหิมะโหมกระหน่ำ",
			"แสงค่อยๆ เลือนหายไป และเหลือเพียงไอเย็นยะเยือก",
			"ที่สุดปลายนั้น มีรูปร่างที่แข็งตัวรออยู่"
		],
		"hindi": [
			"अन्या का प्रकाश अपने अंतिम मार्ग की ओर बढ़ रहा था।",
			"बर्फीले तूफान से घिरी चट्टान के किनारे पर।",
			"प्रकाश धीरे-धीरे मंद होता गया, और केवल एक सर्द आभा बची थी।",
			"उसके अंत में, एक जमी हुई आकृति प्रतीक्षा कर रही थी।"
		]
	}
} as const;
