export const scenario_modern_solace_33_01 = {
	"scenario_id": "modern_solace_33_01",
	"order": 1,
	"act": "intro",
	"theme": "modern",
	"actors": {
		"zoe": {
			"id": "mon_ad3762e0-13f3-44a1-9b84-4ff67136858e",
			"name": {
				"korean": "조이",
				"english": "Zoe",
				"japanese": "ゾーイ",
				"chinese": "佐伊",
				"french": "Zoé",
				"spanish": "Zoe",
				"vietnamese": "Zoe",
				"thai": "โซอี้",
				"hindi": "ज़ोई"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/75dcfb0c-33e3-4208-4205-fb09d4abb100/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a7d0ebe1-73dc-4683-1338-32be2f7fac00/public"
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
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "도시의 밤은 네온으로 번뜩였다. 거대한 스크린들이 거리를 감쌌다.",
						"english": "The city night glittered with neon. Giant screens enveloped the streets.",
						"japanese": "都市の夜はネオンで輝いていた。巨大なスクリーンが通りを包み込んでいた。",
						"chinese": "城市的夜晚霓虹闪烁。巨大的屏幕笼罩着街道。",
						"french": "La nuit de la ville scintillait de néons. Des écrans géants enveloppaient les rues.",
						"spanish": "La noche de la ciudad brillaba con neones. Pantallas gigantes envolvían las calles.",
						"vietnamese": "Đêm thành phố rực rỡ ánh neon. Những màn hình khổng lồ bao trùm các con phố.",
						"thai": "ค่ำคืนในเมืองสว่างไสวด้วยแสงนีออน จอภาพขนาดยักษ์ปกคลุมท้องถนน",
						"hindi": "शहर की रात नीयन से चमक रही थी। विशाल स्क्रीन सड़कों को घेरे हुए थे।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "뭐야, 저거? 새 미디어 아트인가?",
						"english": "What is that? New media art?",
						"japanese": "あれは何だ？新しいメディアアートか？",
						"chinese": "那是什么？是新媒体艺术吗？",
						"french": "Qu'est-ce que c'est ? Un nouvel art médiatique ?",
						"spanish": "¿Qué es eso? ¿Arte multimedia nuevo?",
						"vietnamese": "Cái gì thế kia? Nghệ thuật truyền thông mới à?",
						"thai": "นั่นอะไรน่ะ? ศิลปะสื่อใหม่เหรอ?",
						"hindi": "वह क्या है? नई मीडिया कला?"
					}
				},
				{
					"speaker": "zoe",
					"duration_ms": 500,
					"spot": [
						3,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "…아니. 저건 아니야.",
						"english": "...No. That's not it.",
						"japanese": "…いや。あれは違う。",
						"chinese": "……不。那不是。",
						"french": "...Non. Ce n'est pas ça.",
						"spanish": "...No. Eso no es.",
						"vietnamese": "...Không. Cái đó không phải.",
						"thai": "...ไม่ นั่นไม่ใช่",
						"hindi": "...नहीं। वह नहीं है।"
					},
					"speaker": "zoe",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "누구세요?",
						"english": "Who are you?",
						"japanese": "誰ですか？",
						"chinese": "你是谁？",
						"french": "Qui êtes-vous ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Anh là ai?",
						"thai": "คุณเป็นใคร?",
						"hindi": "आप कौन हैं?"
					}
				},
				{
					"emotion": "base",
					"speaker": "zoe",
					"type": "speech",
					"content": {
						"korean": "조이. 저널리스트. 저건… 불길해.",
						"english": "Joy. Journalist. That's... ominous.",
						"japanese": "ジョイ。ジャーナリスト。あれは…不吉だ。",
						"chinese": "乔伊。记者。那……不祥。",
						"french": "Joy. Journaliste. C'est... sinistre.",
						"spanish": "Joy. Periodista. Eso es... ominoso.",
						"vietnamese": "Joy. Nhà báo. Cái đó... thật đáng ngại.",
						"thai": "จอย นักข่าว นั่นมัน... ลางร้าย",
						"hindi": "जॉय। पत्रकार। वह... अशुभ है।"
					}
				},
				{
					"content": {
						"korean": "처음엔 단순한 오류인 줄 알았지. 근데… 너무 많아.",
						"english": "At first, I thought it was a simple error. But... there are too many.",
						"japanese": "最初のうちは、単なるエラーだと思った。でも…多すぎる。",
						"chinese": "一开始以为只是简单的错误。但是…太多了。",
						"french": "Au début, je pensais que c'était une simple erreur. Mais... il y en a trop.",
						"spanish": "Al principio, pensé que era un simple error. Pero... hay demasiados.",
						"vietnamese": "Lúc đầu, tôi nghĩ đó chỉ là một lỗi đơn giản. Nhưng... quá nhiều rồi.",
						"thai": "ตอนแรกคิดว่าเป็นแค่ข้อผิดพลาดธรรมดา แต่...มันเยอะเกินไป",
						"hindi": "पहले, मुझे लगा कि यह एक साधारण त्रुटि है। लेकिन... यह बहुत ज़्यादा है।"
					},
					"speaker": "zoe",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "그냥 노이즈 아니에요?",
						"english": "Isn't it just noise?",
						"japanese": "ただのノイズじゃないですか？",
						"chinese": "不就是噪音吗？",
						"french": "N'est-ce pas juste du bruit ?",
						"spanish": "¿No es solo ruido?",
						"vietnamese": "Không phải chỉ là nhiễu sao?",
						"thai": "มันไม่ใช่แค่สัญญาณรบกวนเหรอ?",
						"hindi": "क्या यह सिर्फ़ शोर नहीं है?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "저 조각들 안에… 무언가가 있어.",
						"english": "Inside those fragments... there's something.",
						"japanese": "あの破片の中に…何かがある。",
						"chinese": "那些碎片里…有某种东西。",
						"french": "Dans ces fragments... il y a quelque chose.",
						"spanish": "Dentro de esos fragmentos... hay algo.",
						"vietnamese": "Bên trong những mảnh vỡ đó... có một cái gì đó.",
						"thai": "ข้างในเศษชิ้นส่วนพวกนั้น... มีบางอย่างอยู่",
						"hindi": "उन टुकड़ों के अंदर... कुछ है।"
					},
					"speaker": "zoe",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "sad",
					"speaker": "zoe",
					"type": "speech",
					"content": {
						"korean": "오래된… 비극 같은 게 느껴져.",
						"english": "I feel something like... an ancient tragedy.",
						"japanese": "古い…悲劇のようなものが感じられる。",
						"chinese": "感觉像某种古老的…悲剧。",
						"french": "Je ressens... comme une vieille tragédie.",
						"spanish": "Siento... algo como una vieja tragedia.",
						"vietnamese": "Tôi cảm thấy... một bi kịch cổ xưa.",
						"thai": "รู้สึกเหมือน...โศกนาฏกรรมเก่าแก่",
						"hindi": "मुझे एक पुरानी... त्रासदी जैसा कुछ महसूस हो रहा है।"
					}
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "도시 곳곳의 디지털 전광판에 알 수 없는 낡은 흑백 사진 조각들이 섬광처럼 스쳐 지나갔다.",
						"english": "Unidentifiable old black-and-white photo fragments flashed across digital billboards throughout the city.",
						"japanese": "街中のデジタル電光掲示板に、正体不明の古い白黒写真の断片が閃光のように通り過ぎた。",
						"chinese": "城市各处的数字广告牌上，未知的老旧黑白照片碎片如闪光般一闪而过。",
						"french": "Des fragments de vieilles photos en noir et blanc inconnues ont traversé les panneaux d'affichage numériques de la ville comme des éclairs.",
						"spanish": "Fragmentos desconocidos de viejas fotos en blanco y negro parpadearon como destellos en las pantallas digitales de toda la ciudad.",
						"vietnamese": "Những mảnh ghép ảnh đen trắng cũ kỹ, không thể nhận diện lướt qua các biển quảng cáo kỹ thuật số khắp thành phố như tia chớp.",
						"thai": "เศษภาพถ่ายขาวดำเก่าแก่ที่ไม่รู้จัก ปรากฏขึ้นบนป้ายดิจิทัลทั่วเมืองราวกับแสงวาบ",
						"hindi": "शहर भर के डिजिटल बिलबोर्ड पर अज्ञात पुरानी श्वेत-श्याम तस्वीर के टुकड़े चमक की तरह कौंधे।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "(지나가는 전광판을 보며) 또 저거네. 대체 뭐야?",
						"english": "(Gazing at the billboard) It's that again. What in the world is it?",
						"japanese": "（通り過ぎる電光掲示板を見ながら）またあれだ。一体何なんだ？",
						"chinese": "（看着经过的广告牌）又是那个。到底是什么？",
						"french": "(En regardant le panneau d'affichage) Encore ça. C'est quoi, bon sang ?",
						"spanish": "(Mirando la pantalla que pasa) Otra vez eso. ¿Qué es, en serio?",
						"vietnamese": "(Nhìn bảng quảng cáo đang trôi qua) Lại cái đó nữa. Rốt cuộc nó là gì vậy?",
						"thai": "(มองป้ายที่กำลังเคลื่อนผ่าน) นั่นมันอีกแล้ว อะไรกันแน่เนี่ย?",
						"hindi": "(गुज़रते हुए बिलबोर्ड को देखते हुए) फिर वही। आख़िर ये क्या है?"
					}
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"speaker": "zoe"
				},
				{
					"content": {
						"korean": "계속해서 나타나. 패턴도 없이, 의미도 없이…",
						"english": "It keeps appearing. Without pattern, without meaning...",
						"japanese": "繰り返し現れる。パターンもなく、意味もなく…",
						"chinese": "它不断出现。没有模式，没有意义…",
						"french": "Ça continue d'apparaître. Sans motif, sans signification...",
						"spanish": "Sigue apareciendo. Sin patrón, sin significado...",
						"vietnamese": "Nó cứ xuất hiện. Không có quy luật, không có ý nghĩa...",
						"thai": "มันปรากฏขึ้นเรื่อยๆ ไม่มีรูปแบบ ไม่มีความหมาย...",
						"hindi": "यह लगातार दिख रहा है। बिना किसी पैटर्न के, बिना किसी अर्थ के..."
					},
					"emotion": "sad",
					"speaker": "zoe",
					"type": "speech"
				},
				{
					"speaker": "zoe",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "하지만 분명한 건, 이건 통신 오류가 아니라는 거야.",
						"english": "But one thing's clear: this isn't a communication error.",
						"japanese": "だけど、はっきりしているのは、これは通信エラーじゃないってことだ。",
						"chinese": "但很明显，这不是通信错误。",
						"french": "Mais une chose est sûre, ce n'est pas une erreur de communication.",
						"spanish": "Pero algo es claro: esto no es un error de comunicación.",
						"vietnamese": "Nhưng một điều rõ ràng là, đây không phải là lỗi liên lạc.",
						"thai": "แต่ที่แน่ๆ นี่ไม่ใช่ข้อผิดพลาดทางการสื่อสาร",
						"hindi": "लेकिन एक बात तो साफ़ है, यह संचार की त्रुटि नहीं है।"
					}
				},
				{
					"content": {
						"korean": "그럼 뭔데요? 해킹?",
						"english": "Then what is it? Hacking?",
						"japanese": "じゃあ何なんだ？ハッキングか？",
						"chinese": "那是什么？黑客攻击？",
						"french": "Alors c'est quoi ? Un piratage ?",
						"spanish": "¿Entonces qué es? ¿Un hackeo?",
						"vietnamese": "Vậy thì là gì? Hack sao?",
						"thai": "แล้วมันคืออะไร? การแฮกเหรอ?",
						"hindi": "तो फिर क्या है? हैकिंग?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이건… 도시 자체가 꿈을 꾸는 것 같아. 악몽을.",
						"english": "It's like... the city itself is dreaming. A nightmare.",
						"japanese": "これは…都市自体が悪夢を見ているようだ。",
						"chinese": "这就像…城市本身在做梦。一个噩梦。",
						"french": "C'est comme si... la ville elle-même rêvait. Un cauchemar.",
						"spanish": "Esto es como... si la ciudad misma estuviera soñando. Una pesadilla.",
						"vietnamese": "Nó như thể... chính thành phố đang mơ. Một cơn ác mộng.",
						"thai": "นี่มันเหมือน...เมืองกำลังฝันเองเลย ฝันร้ายน่ะ",
						"hindi": "यह ऐसा है... जैसे शहर खुद एक सपना देख रहा है। एक बुरा सपना।"
					},
					"speaker": "zoe",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "꿈?",
						"english": "A dream?",
						"japanese": "夢？",
						"chinese": "梦？",
						"french": "Un rêve ?",
						"spanish": "¿Un sueño?",
						"vietnamese": "Mơ à?",
						"thai": "ฝันเหรอ?",
						"hindi": "एक सपना?"
					}
				},
				{
					"content": {
						"korean": "오래된 비극이… 디지털 망을 통해 다시 나타나려는 것 같아.",
						"english": "An old tragedy... seems to be re-emerging through the digital network.",
						"japanese": "古の悲劇が… デジタル網を通じて再び現れようとしているようだ。",
						"chinese": "一场古老的悲剧… 似乎正通过数字网络再次浮现。",
						"french": "Une ancienne tragédie... semble ressurgir à travers le réseau numérique.",
						"spanish": "Una vieja tragedia... parece estar resurgiendo a través de la red digital.",
						"vietnamese": "Một bi kịch cũ... dường như đang tái xuất qua mạng lưới kỹ thuật số.",
						"thai": "โศกนาฏกรรมเก่าแก่... ดูเหมือนจะปรากฏขึ้นอีกครั้งผ่านเครือข่ายดิจิทัล",
						"hindi": "एक पुरानी त्रासदी... डिजिटल नेटवर्क के माध्यम से फिर से उभरने वाली है।"
					},
					"emotion": "sad",
					"speaker": "zoe",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"content": {
						"korean": "밤의 거리를 걷는 사람들이 문득 알 수 없는 멜랑콜리에 휩싸였다. 잃어버린 것에 대한 그리움.",
						"english": "People walking the night streets were suddenly engulfed in an unknown melancholy. A longing for what was lost.",
						"japanese": "夜の街を歩く人々は、ふと説明できない憂鬱に包まれた。失われたものへの郷愁。",
						"chinese": "行走在夜街上的人们突然被一种莫名的忧郁所笼罩。对逝去之物的眷恋。",
						"french": "Les gens marchant dans les rues nocturnes furent soudainement enveloppés d'une mélancolie inconnue. Une nostalgie de ce qui a été perdu.",
						"spanish": "La gente que caminaba por las calles nocturnas se vio repentinamente envuelta en una melancolía desconocida. Una añoranza por lo perdido.",
						"vietnamese": "Những người đi trên phố đêm bỗng chốc bị nhấn chìm trong nỗi u sầu khó tả. Một nỗi nhớ nhung về những gì đã mất.",
						"thai": "ผู้คนเดินบนถนนยามค่ำคืนพลันถูกความเศร้าโศกปริศนาเข้าครอบงำ ความคิดถึงสิ่งที่สูญหายไป",
						"hindi": "रात की सड़कों पर चलते लोग अचानक एक अज्ञात उदासी में घिर गए। खोई हुई चीज़ों के लिए एक लालसा।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "(갑자기 우울해진다) 뭔가… 이상해. 갑자기 기분이…",
						"english": "(Suddenly feels melancholic) Something's... strange. My mood suddenly...",
						"japanese": "（突然憂鬱になる）何だか…おかしい。急に気分が…",
						"chinese": "（突然感到忧郁）有些…奇怪。我突然感觉…",
						"french": "(Soudain mélancolique) Quelque chose est... étrange. Mon humeur soudainement...",
						"spanish": "(De repente se siente melancólico) Algo es... extraño. Mi humor de repente...",
						"vietnamese": "(Bỗng nhiên thấy u sầu) Có gì đó... lạ. Tâm trạng tôi bỗng dưng...",
						"thai": "(จู่ๆ ก็รู้สึกเศร้า) บางอย่าง...แปลกไป ความรู้สึกของฉันจู่ๆ ก็...",
						"hindi": "(अचानक उदास महसूस करता है) कुछ... अजीब है। मेरा मूड अचानक..."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "zoe",
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "느껴지지? 이 도시가 슬퍼하고 있어.",
						"english": "Don't you feel it? This city is grieving.",
						"japanese": "感じない？この街が悲しんでいるんだ。",
						"chinese": "你没感觉到吗？这座城市正在悲伤。",
						"french": "Tu ne le sens pas ? Cette ville est en deuil.",
						"spanish": "¿No lo sientes? Esta ciudad está de luto.",
						"vietnamese": "Cậu không cảm thấy sao? Thành phố này đang đau buồn.",
						"thai": "ไม่รู้สึกเหรอ? เมืองนี้กำลังโศกเศร้า",
						"hindi": "क्या तुम्हें महसूस नहीं हो रहा? यह शहर दुख मना रहा है।"
					},
					"emotion": "sad",
					"speaker": "zoe",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "슬퍼한다고요?",
						"english": "Grieving?",
						"japanese": "悲しんでいるって？",
						"chinese": "悲伤？",
						"french": "En deuil ?",
						"spanish": "¿De luto?",
						"vietnamese": "Đau buồn ư?",
						"thai": "โศกเศร้าเหรอ?",
						"hindi": "दुख मना रहा है?"
					}
				},
				{
					"emotion": "sad",
					"speaker": "zoe",
					"type": "speech",
					"content": {
						"korean": "잃어버린 기억들… 망각된 것들이… 슬픔의 파동으로 이 도시에 영향을 주고 있어.",
						"english": "Lost memories... things forgotten... are affecting this city with waves of sorrow.",
						"japanese": "失われた記憶…忘れ去られたものたちが…悲しみの波動でこの街に影響を与えている。",
						"chinese": "失去的记忆…被遗忘的事物…正以悲伤的波动影响着这座城市。",
						"french": "Les souvenirs perdus... les choses oubliées... affectent cette ville par des vagues de tristesse.",
						"spanish": "Los recuerdos perdidos... las cosas olvidadas... están afectando esta ciudad con olas de tristeza.",
						"vietnamese": "Những ký ức đã mất... những điều bị lãng quên... đang ảnh hưởng đến thành phố này bằng những làn sóng đau buồn.",
						"thai": "ความทรงจำที่หายไป... สิ่งที่ถูกลืม... กำลังส่งผลกระทบต่อเมืองนี้ด้วยคลื่นแห่งความเศร้า",
						"hindi": "खोई हुई यादें... भूली हुई चीजें... दुख की लहरों से इस शहर को प्रभावित कर रही हैं।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "우리가 그걸 느껴요?",
						"english": "We feel it?",
						"japanese": "私たちがそれを感じるんですか？",
						"chinese": "我们能感觉到吗？",
						"french": "On le ressent ?",
						"spanish": "¿Nosotros lo sentimos?",
						"vietnamese": "Chúng ta cảm nhận được nó sao?",
						"thai": "เราสัมผัสได้เหรอ?",
						"hindi": "हम इसे महसूस करते हैं?"
					}
				},
				{
					"emotion": "base",
					"speaker": "zoe",
					"type": "speech",
					"content": {
						"korean": "인간은 원래 모든 걸 연결하는 존재니까. 이 도시의 감정도 공유하는 거지.",
						"english": "Humans are inherently connected to everything. We share the city's emotions too.",
						"japanese": "人間は元々全てを繋ぐ存在だから。この街の感情も共有するのさ。",
						"chinese": "人类原本就是连接万物的存在。所以也会分享这座城市的情感。",
						"french": "Les humains sont naturellement connectés à tout. Nous partageons aussi les émotions de la ville.",
						"spanish": "Los humanos están inherentemente conectados a todo. También compartimos las emociones de la ciudad.",
						"vietnamese": "Con người vốn dĩ là sinh vật kết nối mọi thứ. Nên chúng ta cũng chia sẻ cảm xúc của thành phố này.",
						"thai": "มนุษย์เป็นผู้เชื่อมโยงทุกสิ่งอยู่แล้ว เราก็เลยแบ่งปันความรู้สึกของเมืองนี้ด้วย",
						"hindi": "मनुष्य स्वाभाविक रूप से हर चीज़ से जुड़ा हुआ है। हम शहर की भावनाओं को भी साझा करते हैं।"
					}
				},
				{
					"content": {
						"korean": "이건 단순한 현상이 아니야.",
						"english": "This isn't just a simple phenomenon.",
						"japanese": "これは単純な現象じゃない。",
						"chinese": "这不只是一个简单的现象。",
						"french": "Ce n'est pas un simple phénomène.",
						"spanish": "Esto no es solo un fenómeno simple.",
						"vietnamese": "Đây không phải là một hiện tượng đơn giản.",
						"thai": "นี่ไม่ใช่แค่ปรากฏการณ์ธรรมดา",
						"hindi": "यह सिर्फ एक साधारण घटना नहीं है।"
					},
					"emotion": "angry",
					"speaker": "zoe",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"content": {
						"korean": "주인공의 주변 사물이나 사람들의 모습이 순간적으로 흐릿해지거나 이질적으로 느껴지는 기시감에 사로잡혔다.",
						"english": "The protagonist was seized by a sense of déjà vu, as objects and people around them momentarily blurred or felt alien.",
						"japanese": "主人公は、周囲の物や人々が瞬間的にぼやけたり、異質に感じられるデジャヴに囚われた。",
						"chinese": "主人公被一种似曾相识的感觉所困扰，周围的物体和人们在瞬间变得模糊或感觉陌生。",
						"french": "Le protagoniste fut saisi par une sensation de déjà-vu, les objets et les personnes autour de lui devenant flous ou étranges un instant.",
						"spanish": "El protagonista fue invadido por una sensación de déjà vu, ya que los objetos y las personas a su alrededor se volvieron borrosos o extraños por un instante.",
						"vietnamese": "Nhân vật chính bị cuốn vào cảm giác déjà vu, khi các vật thể và con người xung quanh đột ngột mờ đi hoặc trở nên xa lạ.",
						"thai": "ตัวเอกถูกครอบงำด้วยความรู้สึกเดจาวู เมื่อวัตถุและผู้คนรอบตัวพร่ามัวหรือรู้สึกแปลกแยกไปชั่วขณะ",
						"hindi": "नायक को déjà vu का एहसास हुआ, क्योंकि उसके आस-पास की वस्तुएँ और लोग क्षण भर के लिए धुँधले या अजीब लगने लगे。"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "(눈을 비비며) 방금… 저 사람이 흐릿해졌어. 착각인가?",
						"english": "(Rubbing eyes) Just now... that person blurred. Was it my imagination?",
						"japanese": "(目をこすりながら) 今… あの人がぼやけた。気のせいか？",
						"chinese": "(揉着眼睛) 刚才… 那个人模糊了。是我的错觉吗？",
						"french": "(Se frottant les yeux) Juste à l'instant... cette personne s'est brouillée. Était-ce une illusion ?",
						"spanish": "(Frotándose los ojos) Justo ahora... esa persona se volvió borrosa. ¿Fue mi imaginación?",
						"vietnamese": "(Dụi mắt) Vừa nãy... người đó mờ đi. Là ảo giác sao?",
						"thai": "(ขยี้ตา) เมื่อกี้... คนนั้นพร่ามัวไป. คิดไปเองรึเปล่า?",
						"hindi": "(आँखें मलते हुए) अभी… वो आदमी धुँधला हो गया। क्या यह मेरा वहम था?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"speaker": "zoe"
				},
				{
					"content": {
						"korean": "착각이 아니야.",
						"english": "It's not your imagination.",
						"japanese": "錯覚じゃない。",
						"chinese": "不是错觉。",
						"french": "Ce n'est pas une illusion.",
						"spanish": "No es tu imaginación.",
						"vietnamese": "Không phải ảo giác đâu.",
						"thai": "ไม่ใช่เรื่องที่คิดไปเอง.",
						"hindi": "यह तुम्हारा वहम नहीं है।"
					},
					"speaker": "zoe",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "조이 씨도 봤어요? 모든 게… 뒤틀리는 것 같아요.",
						"english": "Joy, did you see it too? Everything... it feels like it's twisting.",
						"japanese": "ジョイさんも見ました？全てが…歪んでいるようです。",
						"chinese": "乔伊，你也看到了吗？一切都…好像扭曲了。",
						"french": "Joy, vous l'avez vu aussi ? Tout... j'ai l'impression que ça se tord.",
						"spanish": "Joy, ¿tú también lo viste? Todo... parece que se está retorciendo.",
						"vietnamese": "Joy, chị cũng thấy sao? Mọi thứ... dường như đang bị bóp méo.",
						"thai": "จอย คุณก็เห็นด้วยเหรอ? ทุกอย่าง... ดูเหมือนมันกำลังบิดเบี้ยว.",
						"hindi": "जॉय, क्या तुमने भी देखा? सब कुछ… ऐसा लगता है जैसे मुड़ रहा हो।"
					}
				},
				{
					"content": {
						"korean": "현실이… 점점 희미해지고 있어. 디지털 망이 과거와 현재를 섞어버리는 것 같아.",
						"english": "Reality... it's fading. It's like the digital network is mixing past and present.",
						"japanese": "現実が…どんどん薄れていく。デジタルネットワークが過去と現在を混ぜ合わせているようだ。",
						"chinese": "现实…正在逐渐模糊。好像是数字网络把过去和现在混淆了。",
						"french": "La réalité... s'estompe. C'est comme si le réseau numérique mélangeait le passé et le présent.",
						"spanish": "La realidad... se está desvaneciendo. Es como si la red digital estuviera mezclando el pasado y el presente.",
						"vietnamese": "Thực tại... đang dần mờ đi. Cứ như mạng lưới kỹ thuật số đang trộn lẫn quá khứ và hiện tại.",
						"thai": "ความจริง... มันกำลังเลือนหายไป. เหมือนกับว่าเครือข่ายดิจิทัลกำลังผสมอดีตกับปัจจุบันเข้าด้วยกัน.",
						"hindi": "वास्तविकता… धुँधली होती जा रही है। ऐसा लगता है जैसे डिजिटल नेटवर्क अतीत और वर्तमान को मिला रहा हो।"
					},
					"emotion": "sad",
					"speaker": "zoe",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "우리가 대체 어디로 가고 있는 거죠?",
						"english": "Where exactly are we going?",
						"japanese": "私たちは一体どこへ向かっているんだ？",
						"chinese": "我们到底要去哪里？",
						"french": "Où allons-nous exactement ?",
						"spanish": "¿A dónde demonios vamos?",
						"vietnamese": "Rốt cuộc chúng ta đang đi đâu vậy?",
						"thai": "พวกเรากำลังจะไปไหนกันแน่?",
						"hindi": "आखिर हम कहाँ जा रहे हैं?"
					}
				},
				{
					"emotion": "angry",
					"speaker": "zoe",
					"type": "speech",
					"content": {
						"korean": "이대로 가다간… 모든 게 사라질지도 몰라.",
						"english": "If we keep going like this... everything might disappear.",
						"japanese": "このままだと…全てが消えてしまうかもしれない。",
						"chinese": "如果这样下去…一切都可能会消失。",
						"french": "Si on continue comme ça... tout pourrait disparaître.",
						"spanish": "Si seguimos así... todo podría desaparecer.",
						"vietnamese": "Cứ thế này... mọi thứ có thể biến mất.",
						"thai": "ถ้าเป็นแบบนี้ต่อไป... ทุกอย่างอาจจะหายไป.",
						"hindi": "अगर हम ऐसे ही चलते रहे… तो सब कुछ गायब हो सकता है।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "도시의 가장 깊은 곳, 빛조차 닿지 않는 어둠 속.",
						"english": "In the deepest part of the city, in darkness where even light cannot reach.",
						"japanese": "街の最も深い場所、光すら届かない闇の中。",
						"chinese": "城市的深处，连光都无法触及的黑暗之中。",
						"french": "Dans les profondeurs de la ville, dans l'obscurité où même la lumière ne peut atteindre.",
						"spanish": "En lo más profundo de la ciudad, en la oscuridad donde ni siquiera la luz puede llegar.",
						"vietnamese": "Nơi sâu thẳm nhất của thành phố, trong bóng tối mà ánh sáng cũng không thể chạm tới.",
						"thai": "ในส่วนที่ลึกที่สุดของเมือง, ในความมืดมิดที่แม้แต่แสงก็ไม่อาจส่องถึง.",
						"hindi": "शहर के सबसे गहरे हिस्से में, उस अँधेरे में जहाँ रोशनी भी नहीं पहुँच सकती।"
					}
				},
				{
					"content": {
						"korean": "…왔군. 예상대로.",
						"english": "...You've come. As expected.",
						"japanese": "…来たな。予想通りだ。",
						"chinese": "…你来了。正如所料。",
						"french": "...Vous êtes venu. Comme prévu.",
						"spanish": "...Has venido. Como se esperaba.",
						"vietnamese": "...Đã đến. Đúng như dự đoán.",
						"thai": "...มาแล้วสินะ. ตามคาด.",
						"hindi": "…तुम आ गए। जैसा कि अपेक्षित था।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "네가 이 모든 걸 꾸민 거냐?",
						"english": "Did you orchestrate all of this?",
						"japanese": "お前がこの全てを仕組んだのか？",
						"chinese": "是你策划了这一切吗？",
						"french": "C'est toi qui as orchestré tout ça ?",
						"spanish": "¿Fuiste tú quien orquestó todo esto?",
						"vietnamese": "Có phải anh đã dàn dựng tất cả chuyện này không?",
						"thai": "แกเป็นคนบงการเรื่องทั้งหมดนี้เหรอ?",
						"hindi": "क्या यह सब तुमने रचा है?"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "꾸몄다고? 난 그저… 망각된 것들을 돌려주는 것뿐.",
						"english": "Decorated? I merely… return what has been forgotten.",
						"japanese": "飾ったと？私はただ…忘れ去られたものを取り戻すだけだ。",
						"chinese": "装饰？我只是…归还那些被遗忘之物罢了。",
						"french": "Décoré ? Je ne fais que… rendre ce qui a été oublié.",
						"spanish": "¿Decorado? Yo solo… devuelvo lo olvidado.",
						"vietnamese": "Trang trí? Ta chỉ… trả lại những gì đã bị lãng quên thôi.",
						"thai": "ตกแต่ง? ข้าแค่...คืนสิ่งที่ถูกลืมเลือนไปเท่านั้น",
						"hindi": "सजाया? मैं तो बस… भूली हुई चीज़ों को वापस ला रहा हूँ।"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "너희가 잊은 진실을… 다시 보여주는 것뿐이다.",
						"english": "Just showing you again… the truth you've forgotten.",
						"japanese": "お前たちが忘れた真実を…再び見せているだけだ。",
						"chinese": "只是…再次向你们揭示那些被遗忘的真相罢了。",
						"french": "Je ne fais que vous montrer à nouveau… la vérité que vous avez oubliée.",
						"spanish": "Solo os muestro de nuevo… la verdad que habéis olvidado.",
						"vietnamese": "Chỉ là… cho các ngươi thấy lại sự thật mà các ngươi đã lãng quên thôi.",
						"thai": "แค่แสดงให้พวกเจ้าเห็นอีกครั้ง...ความจริงที่พวกเจ้าลืมเลือนไป",
						"hindi": "बस तुम्हें फिर से दिखा रहा हूँ… वो सच जो तुम भूल गए हो।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "헛소리 마!",
						"english": "Stop spouting nonsense!",
						"japanese": "でたらめ言うな！",
						"chinese": "别胡说八道！",
						"french": "Arrêtez vos bêtises !",
						"spanish": "¡Deja de decir tonterías!",
						"vietnamese": "Đừng có nói nhảm!",
						"thai": "อย่าพูดพล่าม!",
						"hindi": "बकवास बंद करो!"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "곧 알게 될 거다. 무의미한 저항의 끝을.",
						"english": "You'll soon learn. The end of your meaningless resistance.",
						"japanese": "すぐわかるだろう。無意味な抵抗の終わりを。",
						"chinese": "你们很快就会明白。无谓抵抗的终结。",
						"french": "Vous comprendrez bientôt. La fin de votre résistance inutile.",
						"spanish": "Pronto lo sabrás. El fin de tu resistencia inútil.",
						"vietnamese": "Ngươi sẽ sớm biết thôi. Cái kết của sự kháng cự vô nghĩa.",
						"thai": "เจ้าจะรู้ในไม่ช้า...จุดจบของการต่อต้านที่ไร้ความหมาย",
						"hindi": "तुम्हें जल्द ही पता चल जाएगा। तुम्हारे व्यर्थ प्रतिरोध का अंत।"
					}
				}
			],
			"win_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 일그러지며 사라졌다. 잠시 동안, 도시가 숨을 쉬는 듯했다.",
						"english": "The giant shadow warped and vanished. For a moment, the city seemed to breathe.",
						"japanese": "巨大な影が歪みながら消えた。束の間、都市は息を吹き返したようだった。",
						"chinese": "巨大的黑影扭曲着消失了。一瞬间，城市仿佛重新呼吸。",
						"french": "L'ombre gigantesque se déforma et disparut. Pendant un instant, la ville sembla respirer.",
						"spanish": "La sombra gigante se distorsionó y desapareció. Por un momento, la ciudad pareció respirar.",
						"vietnamese": "Bóng đen khổng lồ biến dạng rồi tan biến. Trong chốc lát, thành phố dường như thở phào nhẹ nhõm.",
						"thai": "เงาขนาดมหึมาบิดเบี้ยวแล้วหายไป ชั่วขณะหนึ่ง เมืองดูเหมือนจะกลับมาหายใจได้อีกครั้ง",
						"hindi": "विशाल छाया विकृत होकर गायब हो गई। एक पल के लिए, शहर ने साँस ली।"
					}
				},
				{
					"content": {
						"korean": "…끝이 아니야. 이건… 시작일 뿐.",
						"english": "…It's not over. This is… just the beginning.",
						"japanese": "…終わりじゃない。これは…始まりに過ぎない。",
						"chinese": "…还没结束。这只是…开始罢了。",
						"french": "…Ce n'est pas la fin. Ce n'est… que le début.",
						"spanish": "…No es el final. Esto es… solo el principio.",
						"vietnamese": "…Chưa kết thúc đâu. Đây chỉ là… khởi đầu thôi.",
						"thai": "...ยังไม่จบ นี่เป็นเพียง...จุดเริ่มต้นเท่านั้น",
						"hindi": "…ये खत्म नहीं हुआ। ये तो… बस शुरुआत है।"
					},
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "너희는… 아무것도 막을 수 없어.",
						"english": "You… can't stop anything.",
						"japanese": "お前たちには…何も止められない。",
						"chinese": "你们…什么也阻止不了。",
						"french": "Vous… ne pouvez rien arrêter.",
						"spanish": "Vosotros… no podéis detener nada.",
						"vietnamese": "Các ngươi… không thể ngăn cản bất cứ điều gì.",
						"thai": "พวกเจ้า...หยุดอะไรไม่ได้หรอก",
						"hindi": "तुम… कुछ भी नहीं रोक सकते।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "무슨 소리야!",
						"english": "What are you talking about!",
						"japanese": "どういうことだ！",
						"chinese": "你在说什么！",
						"french": "Qu'est-ce que tu racontes !",
						"spanish": "¡Qué dices!",
						"vietnamese": "Ngươi đang nói gì vậy!",
						"thai": "พูดอะไรน่ะ!",
						"hindi": "क्या बक रहे हो!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "zoe",
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						3
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "…그의 말이 맞아.",
						"english": "…He's right.",
						"japanese": "…彼の言う通りだ。",
						"chinese": "…他说得对。",
						"french": "…Il a raison.",
						"spanish": "…Tiene razón.",
						"vietnamese": "…Hắn nói đúng.",
						"thai": "...เขาพูดถูก",
						"hindi": "…वह सही कह रहा है।"
					},
					"emotion": "sad",
					"speaker": "zoe",
					"type": "speech"
				},
				{
					"content": {
						"korean": "승리가… 너무 허무해. 아무것도 해결되지 않은 것 같아.",
						"english": "This victory… feels so empty. Nothing seems to have been resolved.",
						"japanese": "勝利が…あまりにも虚しい。何も解決していないようだ。",
						"chinese": "这场胜利…太虚无了。感觉什么都没有解决。",
						"french": "Cette victoire… est si vaine. Rien ne semble avoir été résolu.",
						"spanish": "Esta victoria… es tan vacía. Parece que nada se ha resuelto.",
						"vietnamese": "Chiến thắng này… thật vô nghĩa. Dường như chẳng có gì được giải quyết cả.",
						"thai": "ชัยชนะนี้...ช่างว่างเปล่า ดูเหมือนจะยังไม่มีอะไรคลี่คลายเลย",
						"hindi": "यह जीत… बहुत खालीपन महसूस करा रही है। ऐसा लगता है कि कुछ भी हल नहीं हुआ।"
					},
					"emotion": "sad",
					"speaker": "zoe",
					"type": "speech"
				},
				{
					"content": {
						"korean": "조이의 얼굴에 드리운 그림자. 도시는 잠시 평화를 찾았지만, 불길한 예감은 더욱 짙어졌다.",
						"english": "A shadow falls upon Joy's face. The city finds temporary peace, but an ominous premonition deepens.",
						"japanese": "ジョイの顔に影が差す。都市は一時的な平和を見つけたが、不吉な予感はさらに深まった。",
						"chinese": "阴影笼罩着乔伊的脸庞。城市暂时恢复了平静，但不安的预感却愈发浓烈。",
						"french": "Une ombre tombe sur le visage de Joy. La ville trouve une paix temporaire, mais un sinistre pressentiment s'épaissit.",
						"spanish": "Una sombra se cierne sobre el rostro de Joy. La ciudad encuentra una paz temporal, pero una ominosa premonición se agrava.",
						"vietnamese": "Bóng tối bao trùm khuôn mặt Joy. Thành phố tìm thấy bình yên tạm thời, nhưng điềm báo gở ngày càng nặng nề hơn.",
						"thai": "เงาคลืบคลานบนใบหน้าของจอย เมืองพบความสงบชั่วคราว แต่ลางร้ายยิ่งเข้มข้นขึ้น",
						"hindi": "जॉय के चेहरे पर एक छाया पड़ती है। शहर को अस्थायी शांति मिलती है, लेकिन एक अशुभ पूर्वसूचना गहरी होती जाती है。"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "도시의 그림자가 탐험대를 집어삼켰다.",
						"english": "The city's shadow devoured the expedition team.",
						"japanese": "都市の影が探検隊を飲み込んだ。",
						"chinese": "城市的阴影吞噬了探险队。",
						"french": "L'ombre de la ville a englouti l'équipe d'expédition.",
						"spanish": "La sombra de la ciudad devoró al equipo de expedición.",
						"vietnamese": "Bóng tối của thành phố nuốt chửng đội thám hiểm.",
						"thai": "เงาของเมืองกลืนกินทีมสำรวจ",
						"hindi": "शहर की छाया ने अभियान दल को निगल लिया।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "어리석은 인간들. 너희는 그저… 과거의 재료일 뿐.",
						"english": "Foolish mortals. You are merely... ingredients of the past.",
						"japanese": "愚かな人間たち。お前たちはただ…過去の材料にすぎない。",
						"chinese": "愚蠢的人类。你们不过是…过去的材料罢了。",
						"french": "Mortels insensés. Vous n'êtes que… des ingrédients du passé.",
						"spanish": "Mortales necios. Sois meramente… ingredientes del pasado.",
						"vietnamese": "Những kẻ phàm tục ngu ngốc. Các ngươi chỉ là… nguyên liệu của quá khứ.",
						"thai": "มนุษย์ที่โง่เขลา เจ้าเป็นแค่... วัตถุดิบของอดีต",
						"hindi": "मूर्ख नश्वर। तुम केवल… अतीत के घटक हो।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…아직 끝나지 않았어!",
						"english": "...It's not over yet!",
						"japanese": "…まだ終わっていない！",
						"chinese": "…还没有结束！",
						"french": "...Ce n'est pas encore fini !",
						"spanish": "¡...Aún no ha terminado!",
						"vietnamese": "…Chưa kết thúc đâu!",
						"thai": "...ยังไม่จบ!",
						"hindi": "...अभी खत्म नहीं हुआ है!"
					}
				},
				{
					"content": {
						"korean": "다시 와라. 절망을 맛볼 준비가 되면.",
						"english": "Return. When you are ready to taste despair.",
						"japanese": "戻ってこい。絶望を味わう準備ができたらな。",
						"chinese": "再回来吧。当你准备好品尝绝望之时。",
						"french": "Revenez. Quand vous serez prêt à goûter au désespoir.",
						"spanish": "Regresa. Cuando estés listo para saborear la desesperación.",
						"vietnamese": "Hãy quay lại. Khi ngươi sẵn sàng nếm trải sự tuyệt vọng.",
						"thai": "กลับมาใหม่ เมื่อเจ้าพร้อมจะลิ้มรสความสิ้นหวัง",
						"hindi": "वापस आओ। जब तुम निराशा का स्वाद चखने के लिए तैयार हो जाओ।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"도시의 밤, 네온은 흐릿했다.",
			"빌딩 스크린에 깨진 필름 조각들이 섬뜩하게 번졌다.",
			"사람들은 새로운 예술이라 했지만, 저널리스트 조이는 알았다.",
			"이건 불길한 징조. 시작될 공포의 전조였다.",
			"잊혀진 비극이 도시를 다시 잠식하려 한다."
		],
		"english": [
			"City night, neon blurred.",
			"Broken film fragments eerily flickered on building screens.",
			"People called it new art, but journalist Joy knew.",
			"This was an ominous sign. A prelude to the terror to come.",
			"A forgotten tragedy threatens to engulf the city again."
		],
		"japanese": [
			"都市の夜、ネオンはぼやけていた。",
			"ビルのスクリーンに、壊れたフィルムの断片が不気味に瞬いた。",
			"人々は新しい芸術だと言ったが、ジャーナリストのジョイは知っていた。",
			"これは不吉な兆候。始まる恐怖の前触れだった。",
			"忘れ去られた悲劇が、再び都市を蝕もうとしている。"
		],
		"chinese": [
			"城市的夜晚，霓虹灯模糊了。",
			"破碎的胶片碎片在建筑屏幕上诡异地闪烁着。",
			"人们称之为新艺术，但记者乔伊知道。",
			"这是一个不祥的征兆。即将开始的恐怖预兆。",
			"一场被遗忘的悲剧将再次吞噬这座城市。"
		],
		"french": [
			"Nuit urbaine, le néon était flou.",
			"Des fragments de film brisés scintillaient étrangement sur les écrans des bâtiments.",
			"Les gens appelaient ça du nouvel art, mais la journaliste Joy savait.",
			"C'était un signe sinistre. Un prélude à la terreur à venir.",
			"Une tragédie oubliée menace d'engloutir à nouveau la ville."
		],
		"spanish": [
			"Noche de ciudad, el neón se difuminaba.",
			"Fragmentos de película rotos parpadeaban inquietantemente en las pantallas de los edificios.",
			"La gente lo llamaba arte nuevo, pero la periodista Joy lo sabía.",
			"Esta era una señal ominosa. Un preludio del terror que se avecinaba.",
			"Una tragedia olvidada amenaza con devorar la ciudad de nuevo."
		],
		"vietnamese": [
			"Đêm thành phố, đèn neon mờ ảo.",
			"Những mảnh phim vỡ nhấp nháy một cách kỳ lạ trên màn hình các tòa nhà.",
			"Mọi người gọi đó là nghệ thuật mới, nhưng nhà báo Joy biết.",
			"Đây là một điềm báo gở. Một điềm báo trước sự kinh hoàng sắp xảy ra.",
			"Một bi kịch bị lãng quên đang đe dọa nuốt chửng thành phố một lần nữa."
		],
		"thai": [
			"ค่ำคืนในเมือง แสงนีออนพร่าเลือน",
			"เศษฟิล์มที่แตกส่องแสงน่าขนลุกบนหน้าจออาคาร",
			"ผู้คนเรียกมันว่าศิลปะใหม่ แต่จอย นักข่าวรู้ดี",
			"นี่คือลางร้าย สัญญาณเตือนของความหวาดกลัวที่กำลังจะมาถึง",
			"โศกนาฏกรรมที่ถูกลืมกำลังจะกลืนกินเมืองอีกครั้ง"
		],
		"hindi": [
			"शहर की रात, नीयन धुंधला था।",
			"इमारतों की स्क्रीन पर टूटे हुए फिल्म के टुकड़े अजीब तरह से चमक रहे थे।",
			"लोगों ने इसे नई कला कहा, लेकिन पत्रकार जॉय जानती थी।",
			"यह एक अशुभ संकेत था। आने वाले आतंक का पूर्वाभास।",
			"एक भूली हुई त्रासदी शहर को फिर से निगलने वाली है।"
		]
	}
} as const;
