export const scenario_RingBearer_Echoes_03 = {
	"scenario_id": "RingBearer_Echoes_03",
	"order": 3,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"mara": {
			"id": "mon_94e5bffe-d3cd-4e5e-a174-633174784043",
			"name": {
				"korean": "마라",
				"english": "Mara",
				"japanese": "マーラ",
				"chinese": "玛拉",
				"french": "Mara",
				"spanish": "Mara",
				"vietnamese": "Mara",
				"thai": "มารา",
				"hindi": "मारा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/801457b4-3ecc-41f5-e450-73d6ce8eb200/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/9bfac7d4-6bfd-49b0-5ba4-a25419c71400/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"세계는 거울처럼 조각나 있었다.",
			"진실이라 믿었던 모든 것이 뒤틀리고 있었다.",
			"혼돈 속, 복수를 맹세한 전사가 나타났다.",
			"무의 고리. 그 심연을 함께 헤쳐나가야 했다."
		],
		"english": [
			"The world was shattered like a mirror.",
			"Everything believed to be true was twisting.",
			"In chaos, a warrior vowing revenge appeared.",
			"The Ring of Nothingness. We had to navigate its abyss together."
		],
		"japanese": [
			"世界は鏡のように砕け散っていた。",
			"真実だと信じていたすべてが歪んでいた。",
			"混沌の中、復讐を誓った戦士が現れた。",
			"無の環。その深淵を共に切り抜けなければならなかった。"
		],
		"chinese": [
			"世界如镜子般支离破碎。",
			"所有被认为是真实的事物都在扭曲。",
			"混沌之中，一名誓言复仇的战士出现了。",
			"虚无之环。我们必须一起穿越它的深渊。"
		],
		"french": [
			"Le monde était brisé comme un miroir.",
			"Tout ce qui était cru vrai se tordait.",
			"Dans le chaos, un guerrier jurant vengeance apparut.",
			"L'Anneau du Néant. Nous devions traverser son abîme ensemble."
		],
		"spanish": [
			"El mundo estaba hecho añicos como un espejo.",
			"Todo lo que se creía verdad se estaba distorsionando.",
			"En el caos, apareció un guerrero que juró venganza.",
			"El Anillo de la Nada. Tuvimos que navegar juntos por su abismo."
		],
		"vietnamese": [
			"Thế giới vỡ vụn như một tấm gương.",
			"Mọi thứ được cho là sự thật đều đang méo mó.",
			"Giữa hỗn loạn, một chiến binh thề trả thù đã xuất hiện.",
			"Vòng Hư Vô. Chúng ta phải cùng nhau vượt qua vực thẳm của nó."
		],
		"thai": [
			"โลกแตกสลายราวกับกระจก",
			"ทุกสิ่งที่เชื่อว่าเป็นจริงกำลังบิดเบี้ยว",
			"ในความสับสนวุ่นวาย นักรบผู้สาบานว่าจะแก้แค้นได้ปรากฏตัวขึ้น",
			"วงแหวนแห่งความว่างเปล่า เราต้องเผชิญหน้ากับห้วงลึกนั้นด้วยกัน"
		],
		"hindi": [
			"दुनिया एक शीशे की तरह बिखर गई थी।",
			"जो कुछ भी सच माना जाता था, वह सब विकृत हो रहा था।",
			"अराजकता में, बदला लेने की कसम खाने वाला एक योद्धा प्रकट हुआ।",
			"शून्यता का वलय। हमें मिलकर उसकी खाई को पार करना था।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "거울처럼 뒤틀린 세계. 환상이 현실을 침범하고 있었다.",
						"english": "A world twisted like a mirror. Illusions were invading reality.",
						"japanese": "鏡のように歪んだ世界。幻想が現実を侵食していた。",
						"chinese": "一个像镜子一样扭曲的世界。幻象正在侵蚀现实。",
						"french": "Un monde tordu comme un miroir. Les illusions envahissaient la réalité.",
						"spanish": "Un mundo retorcido como un espejo. Las ilusiones invadían la realidad.",
						"vietnamese": "Một thế giới méo mó như gương. Ảo ảnh đang xâm lấn thực tại.",
						"thai": "โลกที่บิดเบี้ยวเหมือนกระจก ภาพลวงตากำลังรุกรานความจริง",
						"hindi": "एक दर्पण की तरह मुड़ी हुई दुनिया। भ्रम वास्तविकता पर हावी हो रहे थे।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "mara",
					"spot": [
						5,
						2
					]
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…또 환상인가. 지긋지긋해.",
						"english": "...Another illusion? I'm sick of it.",
						"japanese": "…また幻想か。うんざりだ。",
						"chinese": "……又是幻象吗？真让人厌烦。",
						"french": "...Encore une illusion ? J'en ai marre.",
						"spanish": "...¿Otra ilusión? Estoy harto.",
						"vietnamese": "...Lại là ảo ảnh à? Chán ngán rồi.",
						"thai": "...ภาพลวงตาอีกแล้วเหรอ? เบื่อจริงๆ",
						"hindi": "...फिर एक और भ्रम? मैं तंग आ गया हूँ।"
					},
					"speaker": "mara"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "당신은… 누구지?",
						"english": "You... who are you?",
						"japanese": "あなたは…誰だ？",
						"chinese": "你是……谁？",
						"french": "Toi... qui es-tu ?",
						"spanish": "Tú... ¿quién eres?",
						"vietnamese": "Ngươi… là ai?",
						"thai": "ท่าน… เป็นใคร?",
						"hindi": "तुम… कौन हो?"
					}
				},
				{
					"speaker": "mara",
					"content": {
						"korean": "마라. 고리 때문에 모든 걸 잃은 전사지.",
						"english": "Mara. A warrior who lost everything because of the Ring.",
						"japanese": "マラ。環のせいで全てを失った戦士だ。",
						"chinese": "玛拉。一个因为环失去了一切的战士。",
						"french": "Mara. Une guerrière qui a tout perdu à cause de l'Anneau.",
						"spanish": "Mara. Una guerrera que lo perdió todo por el Anillo.",
						"vietnamese": "Mara. Một chiến binh đã mất tất cả vì Vòng.",
						"thai": "มาร่า นักรบผู้สูญเสียทุกสิ่งไปเพราะวงแหวน",
						"hindi": "मारा। एक योद्धा जिसने वलय के कारण सब कुछ खो दिया।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "너도 그 고통을 아는 얼굴이군. 나와 함께 싸울 텐가?",
						"english": "You, too, have a face that knows that pain. Will you fight with me?",
						"japanese": "お前もその苦痛を知る顔だな。私と共に戦うか？",
						"chinese": "你也有一张懂得那种痛苦的脸。你会和我一起战斗吗？",
						"french": "Toi aussi, tu as un visage qui connaît cette douleur. Voudras-tu te battre avec moi ?",
						"spanish": "Tú también tienes una cara que conoce ese dolor. ¿Lucharás conmigo?",
						"vietnamese": "Ngươi cũng có gương mặt quen thuộc với nỗi đau đó. Ngươi sẽ chiến đấu cùng ta chứ?",
						"thai": "เจ้าก็มีใบหน้าที่รู้ความเจ็บปวดนั้นเช่นกัน เจ้าจะร่วมต่อสู้กับข้าไหม?",
						"hindi": "तुम्हारे चेहरे पर भी वही दर्द है। क्या तुम मेरे साथ लड़ोगे?"
					},
					"type": "speech",
					"speaker": "mara",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"action": "enter",
					"speaker": "mara",
					"type": "direction"
				},
				{
					"speaker": "mara",
					"content": {
						"korean": "고리의 힘은 이성을 잠식해. 가족들도 그렇게 변했어.",
						"english": "The Ring's power erodes reason. My family changed like that too.",
						"japanese": "環の力は理性を蝕む。家族もそうやって変わってしまった。",
						"chinese": "环的力量会侵蚀理智。我的家人也因此而改变了。",
						"french": "Le pouvoir de l'Anneau ronge la raison. Ma famille a changé comme ça aussi.",
						"spanish": "El poder del Anillo corroe la razón. Mi familia también cambió así.",
						"vietnamese": "Sức mạnh của Vòng ăn mòn lý trí. Gia đình tôi cũng đã thay đổi như vậy.",
						"thai": "พลังของวงแหวนกัดกร่อนเหตุผล ครอบครัวของข้าก็เปลี่ยนไปแบบนั้นด้วย",
						"hindi": "वलय की शक्ति तर्क को नष्ट कर देती है। मेरा परिवार भी ऐसे ही बदल गया।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "우리도… 그렇게 될까?",
						"english": "Will we… end up like them?",
						"japanese": "私たちも…そうなるのかな？",
						"chinese": "我们也会…变成那样吗？",
						"french": "Nous aussi… finirons-nous ainsi ?",
						"spanish": "¿Nosotros también… terminaremos así?",
						"vietnamese": "Liệu chúng ta… cũng sẽ như vậy sao?",
						"thai": "เราก็จะ…เป็นแบบนั้นเหรอ?",
						"hindi": "क्या हम भी… ऐसे ही हो जाएँगे?"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "mara",
					"type": "speech",
					"content": {
						"korean": "모든 게 꿈처럼 느껴질 때가 있어. 현실인지 환상인지…",
						"english": "Sometimes everything feels like a dream. Reality or illusion…",
						"japanese": "全てが夢のように感じられる時がある。現実なのか幻想なのか…",
						"chinese": "有时候一切都像梦一样。是现实还是幻象…",
						"french": "Parfois, tout semble un rêve. Réalité ou illusion…",
						"spanish": "A veces, todo parece un sueño. ¿Realidad o ilusión…?",
						"vietnamese": "Đôi khi mọi thứ cứ như một giấc mơ. Thực tại hay ảo ảnh…",
						"thai": "บางครั้งทุกอย่างก็รู้สึกเหมือนฝัน. ความจริงหรือภาพลวงตา…",
						"hindi": "कभी-कभी सब कुछ सपने जैसा लगता है। हकीकत है या भ्रम…"
					}
				},
				{
					"emotion": "angry",
					"speaker": "mara",
					"type": "speech",
					"content": {
						"korean": "하지만 이 감정은 진짜야. 고리에 대한 분노.",
						"english": "But this feeling is real. My rage against the Ring.",
						"japanese": "でもこの感情は本物だ。ゴリへの怒り。",
						"chinese": "但这种感情是真的。对“环”的愤怒。",
						"french": "Mais ce sentiment est réel. Ma rage envers l'Anneau.",
						"spanish": "Pero este sentimiento es real. Mi furia contra el Anillo.",
						"vietnamese": "Nhưng cảm xúc này là thật. Nỗi căm phẫn dành cho Vòng Xoáy.",
						"thai": "แต่ความรู้สึกนี้จริงแท้. ความโกรธต่อวงแหวน.",
						"hindi": "लेकिन यह भावना सच्ची है। वलय के प्रति मेरा क्रोध।"
					}
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "mara"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "고리는 모든 욕망을 증폭시켜. 복수심마저 이용하지.",
						"english": "The Ring amplifies all desires. It even exploits vengeance.",
						"japanese": "ゴリは全ての欲望を増幅させる。復讐心さえも利用する。",
						"chinese": "“环”会放大所有欲望。甚至利用复仇心。",
						"french": "L'Anneau amplifie tous les désirs. Il exploite même la vengeance.",
						"spanish": "El Anillo amplifica todos los deseos. Incluso explota la venganza.",
						"vietnamese": "Vòng Xoáy khuếch đại mọi ham muốn. Thậm chí lợi dụng cả lòng báo thù.",
						"thai": "วงแหวนขยายทุกความปรารถนา. แม้กระทั่งความแค้นก็ถูกใช้ประโยชน์.",
						"hindi": "वलय सभी इच्छाओं को बढ़ाता है। यह प्रतिशोध का भी फायदा उठाता है।"
					},
					"speaker": "mara"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "내 의지가… 고리의 일부가 될 수도 있다는 거야?",
						"english": "My will… could it become part of the Ring?",
						"japanese": "私の意志が…ゴリの一部になるかもしれないってこと？",
						"chinese": "我的意志…也可能成为“环”的一部分吗？",
						"french": "Ma volonté… pourrait-elle faire partie de l'Anneau ?",
						"spanish": "¿Mi voluntad… podría convertirse en parte del Anillo?",
						"vietnamese": "Ý chí của ta… có thể trở thành một phần của Vòng Xoáy sao?",
						"thai": "เจตจำนงของฉัน… อาจกลายเป็นส่วนหนึ่งของวงแหวนได้เหรอ?",
						"hindi": "क्या मेरी इच्छा… वलय का हिस्सा बन सकती है?"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "그럴지도. 하지만 우리는 꺾이지 않아.",
						"english": "Perhaps. But we won't break.",
						"japanese": "そうかもしれない。でも、私たちは屈しない。",
						"chinese": "也许吧。但我们不会屈服。",
						"french": "Peut-être. Mais nous ne plierons pas.",
						"spanish": "Quizás. Pero no nos doblegaremos.",
						"vietnamese": "Có thể. Nhưng chúng ta sẽ không gục ngã.",
						"thai": "อาจจะ. แต่เราจะไม่ยอมแพ้.",
						"hindi": "शायद। लेकिन हम टूटेंगे नहीं।"
					},
					"speaker": "mara"
				},
				{
					"speaker": "mara",
					"content": {
						"korean": "이런 뒤틀린 현실 속에서 진실을 찾아야 해.",
						"english": "We must find the truth amidst this twisted reality.",
						"japanese": "この歪んだ現実の中で真実を見つけなければならない。",
						"chinese": "在这扭曲的现实中，我们必须找到真相。",
						"french": "Nous devons trouver la vérité dans cette réalité tordue.",
						"spanish": "Debemos encontrar la verdad en esta realidad retorcida.",
						"vietnamese": "Chúng ta phải tìm ra sự thật giữa thực tại méo mó này.",
						"thai": "เราต้องค้นหาความจริงในความเป็นจริงที่บิดเบี้ยวนี้.",
						"hindi": "हमें इस विकृत वास्तविकता में सच्चाई ढूंढनी होगी।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						2
					],
					"speaker": "mara",
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "무의 고리는 점점 더 깊숙이 파고들어, 모든 것을 삼키려 했다.",
						"english": "The Ring of Nothingness burrowed deeper and deeper, threatening to swallow everything.",
						"japanese": "無のゴリはどんどん深く食い込み、全てを飲み込もうとした。",
						"chinese": "虚无之环越陷越深，试图吞噬一切。",
						"french": "L'Anneau du Néant s'enfonçait de plus en plus profondément, menaçant d'engloutir tout.",
						"spanish": "El Anillo de la Nada se adentraba cada vez más, amenazando con devorarlo todo.",
						"vietnamese": "Vòng Xoáy Hư Vô ngày càng thâm nhập sâu hơn, cố gắng nuốt chửng mọi thứ.",
						"thai": "วงแหวนแห่งความว่างเปล่าเจาะลึกลงไปเรื่อยๆ, พยายามกลืนกินทุกสิ่ง.",
						"hindi": "शून्य का वलय गहरा और गहरा होता गया, सब कुछ निगलने की धमकी दे रहा था।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "고리는 모든 것을 집어삼켜. 그리고 끝없이 반복시키지.",
						"english": "The Ring devours everything. And makes it repeat endlessly.",
						"japanese": "ゴリは全てを飲み込む。そして、終わることなく繰り返させる。",
						"chinese": "“环”吞噬一切。并使其无休止地重复。",
						"french": "L'Anneau dévore tout. Et le fait se répéter sans fin.",
						"spanish": "El Anillo lo devora todo. Y lo hace repetir sin cesar.",
						"vietnamese": "Vòng Xoáy nuốt chửng mọi thứ. Và khiến chúng lặp đi lặp lại không ngừng.",
						"thai": "วงแหวนกลืนกินทุกสิ่ง. และทำให้มันซ้ำรอยไม่สิ้นสุด.",
						"hindi": "वलय सब कुछ निगल जाता है। और उसे अंतहीन रूप से दोहराता है।"
					},
					"speaker": "mara",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "mara",
					"content": {
						"korean": "이 파괴마저도 어떤 뒤틀린 사랑처럼 느껴질 때가 있어.",
						"english": "Sometimes even this destruction feels like some twisted love.",
						"japanese": "この破壊ですら、何かの歪んだ愛のように感じられる時がある。",
						"chinese": "有时候连这破坏都感觉像某种扭曲的爱。",
						"french": "Parfois, même cette destruction ressemble à une forme d'amour tordu.",
						"spanish": "A veces, incluso esta destrucción se siente como un amor retorcido.",
						"vietnamese": "Đôi khi ngay cả sự hủy diệt này cũng giống như một tình yêu méo mó nào đó.",
						"thai": "บางครั้งแม้แต่การทำลายล้างนี้ก็ยังรู้สึกเหมือนความรักที่บิดเบี้ยวบางอย่าง.",
						"hindi": "कभी-कभी यह विनाश भी किसी विकृत प्रेम जैसा लगता है।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "사랑…?",
						"english": "Love...?",
						"japanese": "「愛…？」",
						"chinese": "“爱…？”",
						"french": "L'amour...?",
						"spanish": "¿Amor...?",
						"vietnamese": "Tình yêu...?",
						"thai": "ความรัก...?",
						"hindi": "प्यार...?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "아니, 그냥 혼잣말이야. 여기서 돌아갈 수는 없어.",
						"english": "No, just talking to myself. No turning back now.",
						"japanese": "「いや、独り言だよ。もう後には引けない。」",
						"chinese": "“不，只是自言自语。现在已无法回头。”",
						"french": "Non, juste une pensée. Pas de retour en arrière possible.",
						"spanish": "No, solo estoy hablando conmigo mismo. No hay vuelta atrás ahora.",
						"vietnamese": "Không, chỉ là tự nói thôi. Không thể quay lại được nữa.",
						"thai": "ไม่หรอก แค่พูดกับตัวเองน่ะ ถอยกลับไม่ได้แล้ว",
						"hindi": "नहीं, बस खुद से बात कर रहा था। अब वापस नहीं जा सकते।"
					},
					"speaker": "mara",
					"emotion": "angry"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 길을 막았다. 고리의 심연이 드러났다.",
						"english": "A colossal shadow blocked the path. The abyss of the Ring was revealed.",
						"japanese": "「巨大な影が道を塞いだ。環の深淵が姿を現した。」",
						"chinese": "“巨大的阴影挡住了去路。环的深渊显现了。”",
						"french": "Une ombre colossale bloquait le chemin. L'abîme de l'Anneau fut révélé.",
						"spanish": "Una sombra colosal bloqueó el camino. El abismo del Anillo se reveló.",
						"vietnamese": "Một bóng tối khổng lồ chặn lối đi. Vực thẳm của Vòng tròn đã hiện ra.",
						"thai": "เงามหึมาขวางเส้นทางไว้ ห้วงลึกแห่งวงแหวนเผยโฉม",
						"hindi": "एक विशाल छाया ने रास्ता रोक दिया। वलय का अथाह कुंड प्रकट हुआ।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "환영한다, 새로운 파편들이여. 너희의 의지마저 고리를 위한 재료가 될 뿐.",
						"english": "Welcome, new fragments. Even your will shall merely be fuel for the Ring.",
						"japanese": "「ようこそ、新たな破片たちよ。お前たちの意志すら、環の糧となる。」",
						"chinese": "“欢迎，新的碎片们。你们的意志也只会成为环的材料。”",
						"french": "Bienvenue, nouveaux fragments. Même votre volonté ne sera que carburant pour l'Anneau.",
						"spanish": "Bienvenidos, nuevos fragmentos. Incluso vuestra voluntad será solo combustible para el Anillo.",
						"vietnamese": "Chào mừng, những mảnh vỡ mới. Ngay cả ý chí của các ngươi cũng chỉ là vật liệu cho Vòng tròn.",
						"thai": "ยินดีต้อนรับ เหล่าเศษเสี้ยวใหม่ แม้แต่เจตจำนงของเจ้าก็เป็นได้แค่เชื้อเพลิงให้วงแหวน",
						"hindi": "स्वागत है, नए टुकड़ों। तुम्हारी इच्छा भी वलय के लिए मात्र ईंधन होगी।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"speaker": "mara",
					"content": {
						"korean": "닥쳐! 네놈이 고리의 힘을 더럽혔어.",
						"english": "Silence! You defiled the Ring's power.",
						"japanese": "「黙れ！貴様が環の力を汚したのだ。」",
						"chinese": "“闭嘴！你玷污了环的力量。”",
						"french": "Tais-toi ! Tu as souillé le pouvoir de l'Anneau.",
						"spanish": "¡Cállate! Has profanado el poder del Anillo.",
						"vietnamese": "Im đi! Ngươi đã làm ô uế sức mạnh của Vòng tròn.",
						"thai": "หุบปาก! แกมันทำให้พลังของวงแหวนแปดเปื้อน",
						"hindi": "खामोश! तुमने वलय की शक्ति को भ्रष्ट किया है।"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "우리는 너의 먹이가 되지 않아.",
						"english": "We won't be your prey.",
						"japanese": "「我々はお前の餌にはならない。」",
						"chinese": "“我们不会成为你的猎物。”",
						"french": "Nous ne serons pas ta proie.",
						"spanish": "No seremos tu presa.",
						"vietnamese": "Chúng ta sẽ không trở thành con mồi của ngươi.",
						"thai": "พวกเราจะไม่เป็นเหยื่อของแก",
						"hindi": "हम तुम्हारा शिकार नहीं बनेंगे।"
					},
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "너희의 저항은 무의미하다. 고리는 모든 것을 삼킬 것이다.",
						"english": "Your resistance is futile. The Ring will devour all.",
						"japanese": "お前たちの抵抗は無意味だ。環(わ)は全てを飲み込むだろう。",
						"chinese": "你们的抵抗毫无意义。圆环将吞噬一切。",
						"french": "Votre résistance est inutile. L'Anneau engloutira tout.",
						"spanish": "Vuestra resistencia es inútil. El Anillo lo devorará todo.",
						"vietnamese": "Sự kháng cự của các ngươi là vô nghĩa. Vòng tròn sẽ nuốt chửng tất cả.",
						"thai": "การต่อต้านของพวกเจ้าไร้ความหมาย วงแหวนจะกลืนกินทุกสิ่ง",
						"hindi": "तुम्हारा प्रतिरोध व्यर्थ है। वलय सब कुछ निगल जाएगा।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "…아직 포기할 수 없어.",
						"english": "...I can't give up yet.",
						"japanese": "…まだ、諦められない。",
						"chinese": "…我还不能放弃。",
						"french": "...Je ne peux pas encore abandonner.",
						"spanish": "...Todavía no puedo rendirme.",
						"vietnamese": "…Chưa thể bỏ cuộc được.",
						"thai": "...ยังยอมแพ้ไม่ได้",
						"hindi": "...अभी हार नहीं मान सकता।"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "이대로는 안 돼. 진실을… 찾아야 해.",
						"english": "Not like this. I... must find the truth.",
						"japanese": "このままではいけない。真実を…見つけなければ。",
						"chinese": "不能这样下去。我必须…找到真相。",
						"french": "Pas comme ça. Je dois… trouver la vérité.",
						"spanish": "Así no. Debo… encontrar la verdad.",
						"vietnamese": "Không thể thế này được. Phải… tìm ra sự thật.",
						"thai": "เป็นแบบนี้ไม่ได้ ฉันต้อง...ค้นหาความจริง",
						"hindi": "ऐसे नहीं। मुझे... सच खोजना होगा।"
					},
					"type": "speech",
					"speaker": "mara",
					"emotion": "sad"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…어리석은 것들. 이 끝없는 고리는… 결코 끝나지 않는다.",
						"english": "...Fools. This endless Ring... never truly ends.",
						"japanese": "「…愚かな。この終わりのない環は…決して終わらない。」",
						"chinese": "“……愚蠢的东西。这个无尽的环……永不终结。”",
						"french": "...Imbéciles. Cet Anneau sans fin... ne prendra jamais fin.",
						"spanish": "...Tontos. Este Anillo interminable... nunca termina.",
						"vietnamese": "...Những kẻ ngu ngốc. Vòng tròn bất tận này... sẽ không bao giờ kết thúc.",
						"thai": "...พวกโง่ วงแหวนอันไม่สิ้นสุดนี้... ไม่มีวันจบลง",
						"hindi": "...मूर्खों। यह अंतहीन वलय... कभी समाप्त नहीं होता।"
					},
					"speaker": "random_boss"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "너희의 승리마저도 고리의 일부일 뿐…",
						"english": "Even your victory is but a part of the Ring...",
						"japanese": "「お前たちの勝利すら、環の一部に過ぎない…」",
						"chinese": "“甚至你们的胜利也只是环的一部分……”",
						"french": "Même votre victoire n'est qu'une partie de l'Anneau...",
						"spanish": "Incluso vuestra victoria es solo una parte del Anillo...",
						"vietnamese": "Ngay cả chiến thắng của các ngươi cũng chỉ là một phần của Vòng tròn...",
						"thai": "แม้แต่ชัยชนะของเจ้าก็เป็นแค่ส่วนหนึ่งของวงแหวน...",
						"hindi": "तुम्हारी जीत भी वलय का ही एक हिस्सा है..."
					},
					"type": "speech"
				},
				{
					"emotion": "happy",
					"speaker": "character_any",
					"content": {
						"korean": "그래도 우리는 해냈어.",
						"english": "Still, we did it.",
						"japanese": "「それでも、俺たちはやった。」",
						"chinese": "“即使如此，我们也成功了。”",
						"french": "Malgré tout, nous l'avons fait.",
						"spanish": "Aun así, lo logramos.",
						"vietnamese": "Dù sao thì, chúng ta đã làm được.",
						"thai": "ถึงอย่างนั้น พวกเราก็ทำได้",
						"hindi": "फिर भी, हमने कर दिखाया।"
					},
					"type": "speech"
				},
				{
					"type": "direction",
					"spot": [
						5,
						2
					],
					"speaker": "mara",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"speaker": "mara",
					"type": "speech",
					"content": {
						"korean": "고리의 본질은… 아직 멀었어. 하지만 단서를 찾았어.",
						"english": "The true nature of the Ring... is still far off. But we found a clue.",
						"japanese": "「環の本質は…まだ遠い。だが、手がかりは見つけた。」",
						"chinese": "“环的本质……还很遥远。但我们找到了线索。”",
						"french": "La vraie nature de l'Anneau... est encore lointaine. Mais nous avons trouvé un indice.",
						"spanish": "La verdadera naturaleza del Anillo... aún está lejos. Pero encontramos una pista.",
						"vietnamese": "Bản chất thực sự của Vòng tròn... vẫn còn xa. Nhưng chúng ta đã tìm thấy một manh mối.",
						"thai": "แก่นแท้ของวงแหวน... ยังอีกไกล แต่เราเจอเบาะแสแล้ว",
						"hindi": "वलय का असली स्वरूप... अभी भी दूर है। पर हमने एक सुराग ढूंढ लिया है।"
					}
				},
				{
					"content": {
						"korean": "거울 속 조각난 진실은 고통스러운 투쟁 속에서 조금씩 맞춰지고 있었다.",
						"english": "The shattered truth in the mirror slowly pieced itself together through a painful struggle.",
						"japanese": "鏡の中の砕けた真実は、苦痛に満ちた闘争の中で少しずつ形を成していった。",
						"chinese": "镜中破碎的真相，在痛苦的挣扎中一点点拼凑起来。",
						"french": "La vérité brisée dans le miroir se reconstituait peu à peu à travers une lutte douloureuse.",
						"spanish": "La verdad fragmentada en el espejo se iba uniendo poco a poco a través de una dolorosa lucha.",
						"vietnamese": "Mảnh vỡ sự thật trong gương dần dần được ghép lại qua cuộc đấu tranh đầy đau đớn.",
						"thai": "ความจริงที่แตกสลายในกระจกกำลังค่อยๆ ประกอบกันขึ้นมาทีละน้อยท่ามกลางการต่อสู้อันเจ็บปวด",
						"hindi": "दर्पण में खंडित सत्य, एक दर्दनाक संघर्ष के बीच धीरे-धीरे जुड़ रहा था।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				}
			]
		}
	]
} as const;
