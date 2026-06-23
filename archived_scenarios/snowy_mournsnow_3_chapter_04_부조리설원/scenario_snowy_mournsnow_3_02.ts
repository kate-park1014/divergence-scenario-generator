export const scenario_snowy_mournsnow_3_02 = {
	"scenario_id": "snowy_mournsnow_3_02",
	"order": 2,
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
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "고대 건축물의 입구. 시간조차 얼어붙은 듯 거대하게 서 있었다.",
						"english": "Entrance to the ancient edifice. It stood colossal, as if time itself had frozen.",
						"japanese": "古代建築物の入口。時間さえ凍りついたかのように巨大にそびえ立っていた。",
						"chinese": "古老建筑的入口。它巍然耸立，仿佛时间都已凝固。",
						"french": "L'entrée de l'ancienne bâtisse. Elle se dressait colossale, comme si le temps lui-même s'était figé.",
						"spanish": "Entrada a la antigua edificación. Se alzaba colosal, como si el tiempo mismo se hubiera congelado.",
						"vietnamese": "Lối vào kiến trúc cổ đại. Nó sừng sững khổng lồ, như thể thời gian cũng đã đóng băng.",
						"thai": "ทางเข้าอาคารโบราณ มันตั้งตระหง่านราวกับว่ากาลเวลาได้หยุดนิ่ง",
						"hindi": "प्राचीन संरचना का प्रवेश द्वार। यह विशालकाय खड़ा था, मानो समय भी जम गया हो।"
					}
				},
				{
					"content": {
						"korean": "이런 곳이 설원 한가운데에 숨어 있었다니…",
						"english": "To think such a place was hidden in the middle of a snowfield...",
						"japanese": "こんな場所が雪原の真ん中に隠されていたとは…",
						"chinese": "这样的地方竟然隐藏在雪原中央...",
						"french": "Dire qu'un tel endroit était caché au milieu d'un champ de neige...",
						"spanish": "Pensar que un lugar así estaba escondido en medio de un campo de nieve...",
						"vietnamese": "Không ngờ một nơi như thế này lại ẩn mình giữa cánh đồng tuyết...",
						"thai": "ไม่น่าเชื่อว่าจะมีสถานที่แบบนี้ซ่อนอยู่ในทุ่งหิมะ...",
						"hindi": "यह सोचना कि ऐसी जगह बर्फ के मैदान के बीच में छिपी हुई थी..."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"spot": [
						3,
						2
					],
					"speaker": "bran",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "잠깐. 이 유물… 뭔가 이상해.",
						"english": "Wait. This artifact... something's off.",
						"japanese": "待て。この遺物…何かがおかしい。",
						"chinese": "等等。这个文物...有些不对劲。",
						"french": "Attendez. Cet artefact... quelque chose ne va pas.",
						"spanish": "Espera. Este artefacto... algo anda mal.",
						"vietnamese": "Khoan đã. Di vật này... có gì đó lạ.",
						"thai": "เดี๋ยวสิ สิ่งประดิษฐ์นี้... มีบางอย่างผิดปกติ",
						"hindi": "रुको। यह पुरावशेष... कुछ गड़बड़ है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "bran"
				},
				{
					"content": {
						"korean": "뭐가?",
						"english": "What is it?",
						"japanese": "何が？",
						"chinese": "什么？",
						"french": "Quoi ?",
						"spanish": "¿Qué?",
						"vietnamese": "Cái gì?",
						"thai": "อะไรนะ?",
						"hindi": "क्या?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "여기 새겨진 상징들… 원래 의미를 잃은 채 반복되고 있어.",
						"english": "The symbols carved here... they've lost their original meaning and are just repeating.",
						"japanese": "ここに刻まれた象徴…本来の意味を失ったまま繰り返されている。",
						"chinese": "这里刻的符号...它们失去了原有的意义，只是在重复。",
						"french": "Les symboles gravés ici... ils ont perdu leur sens originel et se répètent.",
						"spanish": "Los símbolos grabados aquí... han perdido su significado original y se repiten.",
						"vietnamese": "Những biểu tượng được khắc ở đây... chúng đã mất đi ý nghĩa ban đầu và chỉ lặp lại.",
						"thai": "สัญลักษณ์ที่แกะสลักที่นี่... พวกมันสูญเสียความหมายเดิมและกำลังซ้ำซาก",
						"hindi": "यहां खुदे हुए प्रतीक... उन्होंने अपना मूल अर्थ खो दिया है और बस दोहराए जा रहे हैं।"
					},
					"speaker": "bran",
					"emotion": "sad",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"speaker": "bran",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "여기 기록들도 그래. 뭔가… 삭제되고 조작된 느낌이야.",
						"english": "The records here too. It feels like something... has been deleted and manipulated.",
						"japanese": "ここの記録もそうだ。何かが…削除され、操作された感じだ。",
						"chinese": "这里的记录也是。感觉有什么...被删除和篡改了。",
						"french": "Les registres ici aussi. On dirait que quelque chose... a été supprimé et manipulé.",
						"spanish": "Los registros aquí también. Parece que algo... ha sido eliminado y manipulado.",
						"vietnamese": "Các ghi chép ở đây cũng vậy. Cảm giác như có gì đó... đã bị xóa và thao túng.",
						"thai": "บันทึกที่นี่ก็เหมือนกัน รู้สึกเหมือนมีบางอย่าง... ถูกลบและบิดเบือน",
						"hindi": "यहां के रिकॉर्ड भी। ऐसा लगता है कि कुछ... हटा दिया गया है और हेरफेर किया गया है।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "bran"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "시스템의 흔적일까?",
						"english": "A trace of the system?",
						"japanese": "システムの痕跡か？",
						"chinese": "是系统的痕迹吗？",
						"french": "Une trace du système ?",
						"spanish": "¿Un rastro del sistema?",
						"vietnamese": "Dấu vết của hệ thống ư?",
						"thai": "ร่องรอยของระบบงั้นหรือ?",
						"hindi": "क्या यह सिस्टम का निशान है?"
					}
				},
				{
					"speaker": "bran",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "그럴 거야. 심지어 눈보라조차… 너무 규칙적으로 몰아쳐.",
						"english": "Probably. Even the blizzard… it’s too regular.",
						"japanese": "そうだろうな。吹雪ですら…あまりにも規則的すぎる。",
						"chinese": "应该是吧。连暴风雪…都太过规律了。",
						"french": "Sûrement. Même le blizzard… frappe trop régulièrement.",
						"spanish": "Probablemente. Incluso la tormenta de nieve… es demasiado regular.",
						"vietnamese": "Chắc vậy. Ngay cả bão tuyết… cũng quá đỗi có quy luật.",
						"thai": "คงจะใช่ แม้แต่พายุหิมะ…ก็ยังโหมกระหน่ำสม่ำเสมอเกินไป",
						"hindi": "शायद। यहां तक कि बर्फीला तूफान भी… बहुत नियमित है।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "비정상적으로 강해지는 눈보라 속, 알 수 없는 기계음이 들렸다.",
						"english": "Amidst the abnormally intensifying blizzard, an unknown mechanical sound was heard.",
						"japanese": "異常に強まる吹雪の中、正体不明の機械音が聞こえた。",
						"chinese": "在异常增强的暴风雪中，听到了不明的机械声。",
						"french": "Au milieu du blizzard anormalement intense, un bruit mécanique inconnu se fit entendre.",
						"spanish": "En medio de la ventisca que se intensificaba anormalmente, se escuchó un sonido mecánico desconocido.",
						"vietnamese": "Giữa cơn bão tuyết ngày càng mạnh một cách bất thường, có tiếng máy móc không rõ phát ra.",
						"thai": "ท่ามกลางพายุหิมะที่ทวีความรุนแรงขึ้นอย่างผิดปกติ ได้ยินเสียงเครื่องจักรที่ไม่รู้จัก",
						"hindi": "असामान्य रूप से तेज़ होते बर्फीले तूफान के बीच, एक अज्ञात यांत्रिक ध्वनि सुनाई दी।"
					}
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "bran",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "bran",
					"content": {
						"korean": "이건 단순한 왜곡이 아니야. 추억 자체가 조작된 거야.",
						"english": "This isn’t just distortion. The memories themselves were manipulated.",
						"japanese": "これは単なる歪みじゃない。記憶そのものが操作されているんだ。",
						"chinese": "这不只是扭曲。记忆本身就被篡改了。",
						"french": "Ce n'est pas une simple distorsion. Les souvenirs eux-mêmes ont été manipulés.",
						"spanish": "Esto no es solo una distorsión. Los recuerdos mismos fueron manipulados.",
						"vietnamese": "Đây không phải chỉ là sự bóp méo đơn thuần. Chính bản thân ký ức đã bị thao túng.",
						"thai": "นี่ไม่ใช่แค่การบิดเบือน ความทรงจำถูกบงการ",
						"hindi": "यह सिर्फ विकृति नहीं है। यादें खुद ही हेरफेर की गई हैं।"
					}
				},
				{
					"content": {
						"korean": "우리가 쫓는 유물도… 그럼 환상인가?",
						"english": "The artifact we’re chasing… is it also an illusion then?",
						"japanese": "俺たちが追う遺物も…幻なのか？",
						"chinese": "我们追寻的遗物…那也是幻象吗？",
						"french": "L'artefact que nous poursuivons… n'est-il qu'une illusion, alors ?",
						"spanish": "¿El artefacto que perseguimos… es también una ilusión?",
						"vietnamese": "Thế thì cổ vật chúng ta đang tìm kiếm… cũng là ảo ảnh sao?",
						"thai": "วัตถุโบราณที่เราตามหา…ก็เป็นภาพลวงตาด้วยงั้นหรือ?",
						"hindi": "जिस कलाकृति का हम पीछा कर रहे हैं… क्या वह भी एक भ्रम है?"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "bran",
					"content": {
						"korean": "…확신할 수 없어. 하지만 이대로는 안 돼.",
						"english": "…I can’t be sure. But we can’t stay like this.",
						"japanese": "…確信は持てない。だが、このままではいけない。",
						"chinese": "…无法确定。但不能再这样下去了。",
						"french": "…Je ne peux pas en être sûr. Mais on ne peut pas rester comme ça.",
						"spanish": "…No puedo estar seguro. Pero no podemos seguir así.",
						"vietnamese": "…Tôi không thể chắc chắn. Nhưng không thể cứ thế này được.",
						"thai": "…ฉันไม่แน่ใจ แต่ปล่อยให้เป็นแบบนี้ไม่ได้",
						"hindi": "…मैं निश्चित नहीं हो सकता। पर ऐसे नहीं रह सकते।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "젠장. 도대체 뭘 믿어야 하는 거야?",
						"english": "Damn it. What the hell should I believe?",
						"japanese": "くそ。一体何を信じればいいんだ？",
						"chinese": "该死。到底该相信什么？",
						"french": "Bon sang. Qu'est-ce que je suis censé croire, bordel ?",
						"spanish": "¡Maldita sea! ¿Qué demonios debo creer?",
						"vietnamese": "Chết tiệt. Rốt cuộc thì phải tin vào cái gì đây?",
						"thai": "ให้ตายสิ ฉันควรเชื่ออะไรกันแน่?",
						"hindi": "धिक्कार है। आख़िर मुझे किस पर विश्वास करना चाहिए?"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "bran"
				},
				{
					"content": {
						"korean": "돌아가. 이대로 가면… 모든 것이 더 혼란스러워질 뿐이야.",
						"english": "Go back. If we continue like this… everything will only become more chaotic.",
						"japanese": "戻れ。このまま進めば…全てがより混乱するだけだ。",
						"chinese": "回去。再这样下去…一切只会更混乱。",
						"french": "Retournez. Si on continue comme ça… tout ne fera que devenir plus chaotique.",
						"spanish": "Vuelve. Si seguimos así… todo solo se volverá más caótico.",
						"vietnamese": "Quay về đi. Nếu cứ tiếp tục thế này… mọi thứ sẽ chỉ càng thêm hỗn loạn mà thôi.",
						"thai": "กลับไปซะ ถ้ายังไปต่อ…ทุกอย่างจะยิ่งสับสนวุ่นวาย",
						"hindi": "वापस जाओ। यदि हम ऐसे ही चलते रहे… सब कुछ और भी भ्रमित हो जाएगा।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "bran"
				},
				{
					"content": {
						"korean": "멈출 수 없어. 우리가 여기까지 온 이유가 있어.",
						"english": "I can’t stop. There’s a reason we came all this way.",
						"japanese": "止まれない。ここまで来た理由があるんだ。",
						"chinese": "不能停下。我们来到这里是有原因的。",
						"french": "Je ne peux pas m'arrêter. Il y a une raison pour laquelle nous sommes venus jusqu'ici.",
						"spanish": "No puedo parar. Hay una razón por la que llegamos hasta aquí.",
						"vietnamese": "Không thể dừng lại. Chúng ta đến đây là có lý do.",
						"thai": "หยุดไม่ได้ เรามาถึงที่นี่ด้วยเหตุผลบางอย่าง",
						"hindi": "मैं रुक नहीं सकता। यहां तक आने का एक कारण है।"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "bran",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…그 이유조차 조작된 거라면?",
						"english": "…What if even that reason was manipulated?",
						"japanese": "…その理由すら、操作されたものだとしたら？",
						"chinese": "…如果那个理由也被篡改了呢？",
						"french": "…Et si même cette raison avait été manipulée ?",
						"spanish": "…¿Y si incluso esa razón fue manipulada?",
						"vietnamese": "…Nếu ngay cả lý do đó cũng bị thao túng thì sao?",
						"thai": "…แล้วถ้าเหตุผลนั้นก็ถูกบงการล่ะ?",
						"hindi": "…अगर वह कारण भी हेरफेर किया गया हो तो?"
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "고대 건축물의 심장부. 왜곡된 기억의 파편들이 떠다녔다.",
						"english": "The heart of an ancient structure. Fragments of distorted memories floated.",
						"japanese": "古代建築物の心臓部。歪んだ記憶の破片が漂っていた。",
						"chinese": "古老建筑的心脏。扭曲的记忆碎片漂浮着。",
						"french": "Le cœur d'une ancienne structure. Des fragments de souvenirs déformés flottaient.",
						"spanish": "El corazón de una antigua estructura. Fragmentos de recuerdos distorsionados flotaban.",
						"vietnamese": "Trái tim của kiến trúc cổ đại. Những mảnh ký ức méo mó trôi nổi.",
						"thai": "ใจกลางของสถาปัตยกรรมโบราณ. ชิ้นส่วนความทรงจำที่บิดเบี้ยวล่องลอยอยู่.",
						"hindi": "प्राचीन संरचना का हृदय। विकृत यादों के टुकड़े तैर रहे थे।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "거대한 그림자가 앞을 가로막았다. 정체 모를 자가 우리를 응시했다.",
						"english": "A colossal shadow blocked the way. An unknown entity stared at us.",
						"japanese": "巨大な影が道を塞いだ。正体不明の者が私たちを見つめた。",
						"chinese": "巨大的黑影挡住了去路。一个不明身份的家伙盯着我们。",
						"french": "Une ombre colossale bloqua le chemin. Une entité inconnue nous fixait.",
						"spanish": "Una sombra colosal bloqueó el camino. Una entidad desconocida nos miró fijamente.",
						"vietnamese": "Một cái bóng khổng lồ chặn đường. Một thực thể không rõ danh tính nhìn chằm chằm vào chúng tôi.",
						"thai": "เงาขนาดมหึมาขวางทาง. สิ่งลึกลับจ้องมองเรา.",
						"hindi": "एक विशाल छाया ने रास्ता रोक दिया। एक अज्ञात सत्ता हमें घूर रही थी।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "어리석은 것들… 무엇을 찾고 있는가?",
						"english": "Foolish ones... What do you seek?",
						"japanese": "愚かな者たちよ… 何を探している？",
						"chinese": "愚蠢的东西… 你们在找什么？",
						"french": "Insensés… Que cherchez-vous ?",
						"spanish": "Necios… ¿Qué buscáis?",
						"vietnamese": "Bọn ngu ngốc… Các ngươi đang tìm gì?",
						"thai": "พวกโง่… เจ้ากำลังหาอะไร?",
						"hindi": "मूर्खों… तुम क्या ढूंढ रहे हो?"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "진실을 찾고 있어.",
						"english": "We're looking for the truth.",
						"japanese": "真実を探している。",
						"chinese": "我们在寻找真相。",
						"french": "Nous cherchons la vérité.",
						"spanish": "Buscamos la verdad.",
						"vietnamese": "Chúng tôi đang tìm kiếm sự thật.",
						"thai": "เรากำลังตามหาความจริง.",
						"hindi": "हम सच ढूंढ रहे हैं।"
					}
				},
				{
					"action": "enter",
					"speaker": "bran",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "bran",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "그는 이 모든 조작의 일부야. 진짜 유물이 아닐 거야!",
						"english": "He's part of this whole manipulation. It can't be the real artifact!",
						"japanese": "彼もこの操作の一部だ。本物の遺物じゃないはずだ！",
						"chinese": "他是一切操纵的一部分。那不可能是真正的文物！",
						"french": "Il fait partie de toute cette manipulation. Ce ne peut pas être le véritable artefact !",
						"spanish": "Él es parte de toda esta manipulación. ¡No puede ser el artefacto real!",
						"vietnamese": "Hắn ta là một phần của sự thao túng này. Đó không thể là cổ vật thật!",
						"thai": "เขาเป็นส่วนหนึ่งของการบงการทั้งหมดนี้. มันไม่ใช่โบราณวัตถุของจริงหรอก!",
						"hindi": "वह इस पूरे हेरफेर का हिस्सा है। यह असली कलाकृति नहीं हो सकती!"
					}
				},
				{
					"content": {
						"korean": "진실? 너희가 보는 모든 것이 진실이다. 그것이 이 시스템의 위대함.",
						"english": "Truth? Everything you see is the truth. That is the greatness of this system.",
						"japanese": "真実？お前たちが見るもの全てが真実だ。それがこのシステムの偉大さだ。",
						"chinese": "真相？你们所看到的一切都是真相。这就是这个系统的伟大之处。",
						"french": "La vérité ? Tout ce que vous voyez est la vérité. C'est la grandeur de ce système.",
						"spanish": "¿Verdad? Todo lo que veis es la verdad. Esa es la grandeza de este sistema.",
						"vietnamese": "Sự thật ư? Tất cả những gì các ngươi thấy đều là sự thật. Đó là sự vĩ đại của hệ thống này.",
						"thai": "ความจริง? ทุกสิ่งที่เจ้าเห็นคือความจริง. นั่นคือความยิ่งใหญ่ของระบบนี้.",
						"hindi": "सच? तुम जो कुछ भी देखते हो वह सच है। यही इस प्रणाली की महानता है।"
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
						"korean": "우리가 직접 부숴주겠어.",
						"english": "We'll smash it ourselves.",
						"japanese": "私たちが直接壊してやる。",
						"chinese": "我们会亲自摧毁它。",
						"french": "Nous le briserons nous-mêmes.",
						"spanish": "Lo destrozaremos nosotros mismos.",
						"vietnamese": "Chúng tôi sẽ tự tay phá hủy nó.",
						"thai": "เราจะทำลายมันด้วยตัวเอง.",
						"hindi": "हम इसे खुद तोड़ देंगे।"
					}
				}
			],
			"win_dialogue": [
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "하찮은 저항… 너희가 부순 건… 그저 하나의 환상일 뿐…",
						"english": "Petty resistance... What you've broken... is merely an illusion...",
						"japanese": "愚かな抵抗… お前たちが壊したのは… ただの幻想に過ぎない…",
						"chinese": "微不足道的抵抗… 你们所摧毁的… 只是一个幻象…",
						"french": "Résistance futile… Ce que vous avez brisé… n'est qu'une illusion…",
						"spanish": "Resistencia insignificante… Lo que habéis roto… es solo una ilusión…",
						"vietnamese": "Sự kháng cự nhỏ bé… Cái các ngươi đã phá hủy… chỉ là một ảo ảnh mà thôi…",
						"thai": "การต่อต้านอันไร้ค่า… สิ่งที่เจ้าทำลายไป… ก็แค่ภาพลวงตาเท่านั้น…",
						"hindi": "तुच्छ प्रतिरोध… जो तुमने तोड़ा है… वह सिर्फ एक भ्रम है…"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "아직 끝나지 않았어.",
						"english": "It's not over yet.",
						"japanese": "まだ終わってない。",
						"chinese": "还没结束。",
						"french": "Ce n'est pas encore fini.",
						"spanish": "Todavía no ha terminado.",
						"vietnamese": "Vẫn chưa kết thúc đâu.",
						"thai": "ยังไม่จบ.",
						"hindi": "अभी खत्म नहीं हुआ है।"
					}
				},
				{
					"action": "enter",
					"speaker": "bran",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "bran",
					"content": {
						"korean": "조작된 추억… 이 모든 것이 더 깊은 곳에서 시작된 거야.",
						"english": "Manipulated memories... All of this started from a deeper place.",
						"japanese": "操作された記憶… この全てはもっと深い場所から始まったんだ。",
						"chinese": "被操纵的记忆… 这一切都源于更深的地方。",
						"french": "Des souvenirs manipulés… Tout cela a commencé d'un endroit plus profond.",
						"spanish": "Recuerdos manipulados… Todo esto comenzó desde un lugar más profundo.",
						"vietnamese": "Những ký ức bị thao túng… Tất cả những điều này bắt nguồn từ một nơi sâu xa hơn.",
						"thai": "ความทรงจำที่ถูกบิดเบือน… ทั้งหมดนี้เริ่มต้นจากที่ที่ลึกกว่านั้น.",
						"hindi": "हेरफेर की गई यादें… यह सब एक गहरी जगह से शुरू हुआ है।"
					}
				},
				{
					"content": {
						"korean": "시스템의 진실은 한 겹 더 깊숙이 숨겨져 있었다. 다음 목적지를 향해 나아가야 한다.",
						"english": "The system's truth was hidden one layer deeper. We must move on to the next destination.",
						"japanese": "システムの真実はもう一層深く隠されていた。次の目的地へ進まなければならない。",
						"chinese": "系统的真相又隐藏得更深了一层。我们必须前往下一个目的地。",
						"french": "La vérité du système était cachée une couche plus profondément. Nous devons avancer vers la prochaine destination.",
						"spanish": "La verdad del sistema estaba oculta una capa más profunda. Debemos avanzar hacia el próximo destino.",
						"vietnamese": "Sự thật của hệ thống được ẩn giấu sâu thêm một lớp nữa. Chúng ta phải tiếp tục tiến đến điểm đến tiếp theo.",
						"thai": "ความจริงของระบบซ่อนอยู่ลึกเข้าไปอีกชั้น เราต้องก้าวไปสู่จุดหมายต่อไป",
						"hindi": "सिस्टम का सच एक और परत गहरा छिपा हुआ था। हमें अगले गंतव्य की ओर बढ़ना होगा।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "너희는 이 환상의 미로에서 영원히 헤맬 것이다.",
						"english": "You will forever wander lost in this illusory maze.",
						"japanese": "お前たちはこの幻想の迷宮で永遠にさまようことになるだろう。",
						"chinese": "你们将永远迷失在这幻象的迷宫中。",
						"french": "Vous errerez éternellement perdus dans ce labyrinthe illusoire.",
						"spanish": "Vagaréis eternamente perdidos en este laberinto ilusorio.",
						"vietnamese": "Các ngươi sẽ mãi mãi lạc lối trong mê cung ảo ảnh này.",
						"thai": "พวกเจ้าจะต้องหลงทางอยู่ในเขาวงกตลวงตานี้ไปตลอดกาล",
						"hindi": "तुम इस मायावी भूलभुलैया में हमेशा के लिए भटकते रहोगे।"
					}
				},
				{
					"content": {
						"korean": "헛소리 하지 마. 우린 진실을 찾을 거야.",
						"english": "Don't talk nonsense. We will find the truth.",
						"japanese": "ばか言わないで。私たちは真実を見つけるわ。",
						"chinese": "别胡说八道。我们会找到真相的。",
						"french": "Ne dis pas de bêtises. Nous trouverons la vérité.",
						"spanish": "No digas tonterías. Encontraremos la verdad.",
						"vietnamese": "Đừng nói vớ vẩn. Chúng ta sẽ tìm ra sự thật.",
						"thai": "อย่าพูดไร้สาระ เราจะค้นหาความจริง",
						"hindi": "बकवास मत करो। हम सच खोज निकालेंगे।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"고대 건축물. 시스템의 조작된 추억이 얼어붙은 곳.",
			"유물들은 진실을 잃고, 상징은 반복된다.",
			"우리가 쫓는 것은 환상일 뿐인가?",
			"이 얼어붙은 미궁 속에서, 진실은 또 다른 거짓을 낳는다."
		],
		"english": [
			"Ancient edifice. Where manipulated memories of the system lie frozen.",
			"Artifacts lose their truth, symbols repeat.",
			"Is what we pursue merely an illusion?",
			"In this frozen labyrinth, truth begets another lie."
		],
		"japanese": [
			"古代の建造物。システムの操作された記憶が凍りついた場所。",
			"遺物は真実を失い、象徴は繰り返される。",
			"我々が追うものは幻想に過ぎないのか？",
			"この凍りついた迷宮の中で、真実はさらなる嘘を生む。"
		],
		"chinese": [
			"古老的建筑。系统被篡改的记忆在此凝固。",
			"文物失去真相，符号重复出现。",
			"我们所追逐的仅仅是幻象吗？",
			"在这冰冷的迷宫中，真相滋生出另一个谎言。"
		],
		"french": [
			"Ancienne bâtisse. Là où les souvenirs manipulés du système sont figés.",
			"Les artefacts perdent leur vérité, les symboles se répètent.",
			"Ce que nous poursuivons n'est-il qu'une illusion ?",
			"Dans ce labyrinthe gelé, la vérité engendre un autre mensonge."
		],
		"spanish": [
			"Antigua edificación. Donde los recuerdos manipulados del sistema yacen congelados.",
			"Los artefactos pierden su verdad, los símbolos se repiten.",
			"¿Lo que perseguimos es solo una ilusión?",
			"En este laberinto congelado, la verdad engendra otra mentira."
		],
		"vietnamese": [
			"Kiến trúc cổ đại. Nơi những ký ức bị thao túng của hệ thống bị đóng băng.",
			"Di vật mất đi sự thật, biểu tượng lặp lại.",
			"Điều chúng ta theo đuổi chỉ là ảo ảnh?",
			"Trong mê cung đóng băng này, sự thật sinh ra một lời nói dối khác."
		],
		"thai": [
			"สถาปัตยกรรมโบราณ สถานที่ที่ความทรงจำที่ถูกบิดเบือนของระบบถูกแช่แข็ง",
			"สิ่งประดิษฐ์สูญเสียความจริง สัญลักษณ์ซ้ำซาก",
			"สิ่งที่เราไล่ตามเป็นเพียงภาพลวงตาหรือ?",
			"ในเขาวงกตที่เยือกแข็งนี้ ความจริงก่อให้เกิดคำโกหกอีกครั้ง"
		],
		"hindi": [
			"प्राचीन संरचना। जहाँ सिस्टम की हेरफेर की गई यादें जमी हुई हैं।",
			"पुरावशेष अपनी सच्चाई खो देते हैं, प्रतीक दोहराए जाते हैं।",
			"क्या हम जो पीछा कर रहे हैं, वह सिर्फ एक भ्रम है?",
			"इस जमी हुई भूलभुलैया में, सच एक और झूठ को जन्म देता है।"
		]
	}
} as const;
