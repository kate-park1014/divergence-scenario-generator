export const scenario_WorldRootTitan_Reverberation_02 = {
	"scenario_id": "WorldRootTitan_Reverberation_02",
	"order": 2,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"briar": {
			"id": "mon_21f92820-190e-4d08-a75c-5d2c0b6d0a6b",
			"name": {
				"korean": "브라이어",
				"english": "Briar",
				"japanese": "ブライア",
				"chinese": "布莱尔",
				"french": "Briar",
				"spanish": "Briar",
				"vietnamese": "Briar",
				"thai": "ไบรอา",
				"hindi": "ब्रायर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/41fb431e-57e0-45e0-dde6-1a1f02c01200/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/dd89dff7-88ed-4444-28d8-5aaa85bd4e00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"숲은 '정화'라는 이름으로 뒤틀리고 있었다.",
			"새로운 포자, 예측 불가능한 진화.",
			"광기 어린 학자, 브라이어의 금지된 실험실.",
			"진실은 더러운 플라스크 안에 숨어있었다."
		],
		"english": [
			"The forest was twisting under the name of 'purification'.",
			"New spores, unpredictable evolution.",
			"The mad scholar, Briar's forbidden laboratory.",
			"The truth was hidden inside a dirty flask."
		],
		"japanese": [
			"森は「浄化」という名の下に歪んでいた。",
			"新しい胞子、予測不能な進化。",
			"狂気の学者、ブライアの禁断の実験室。",
			"真実は汚れたフラスコの中に隠されていた。"
		],
		"chinese": [
			"森林在“净化”的名义下扭曲着。",
			"新的孢子，不可预测的进化。",
			"疯狂的学者，布莱尔的禁忌实验室。",
			"真相隐藏在肮脏的烧瓶里。"
		],
		"french": [
			"La forêt se tordait sous le nom de 'purification'.",
			"De nouvelles spores, une évolution imprévisible.",
			"Le savant fou, le laboratoire interdit de Briar.",
			"La vérité était cachée dans un flacon sale."
		],
		"spanish": [
			"El bosque se retorcía bajo el nombre de 'purificación'.",
			"Nuevas esporas, evolución impredecible.",
			"El erudito loco, el laboratorio prohibido de Briar.",
			"La verdad estaba oculta dentro de un frasco sucio."
		],
		"vietnamese": [
			"Rừng đang bị vặn vẹo dưới danh nghĩa 'thanh lọc'.",
			"Bào tử mới, sự tiến hóa không thể đoán trước.",
			"Học giả điên rồ, phòng thí nghiệm cấm của Briar.",
			"Sự thật ẩn giấu bên trong một cái bình bẩn thỉu."
		],
		"thai": [
			"ป่ากำลังบิดเบี้ยวภายใต้ชื่อ 'การชำระล้าง'",
			"สปอร์ใหม่, วิวัฒนาการที่คาดเดาไม่ได้",
			"นักวิชาการผู้บ้าคลั่ง, ห้องทดลองต้องห้ามของไบรอาร์",
			"ความจริงซ่อนอยู่ในขวดทดลองที่สกปรก"
		],
		"hindi": [
			"वन 'शुद्धिकरण' के नाम पर विकृत हो रहा था।",
			"नए बीजाणु, अप्रत्याशित विकास।",
			"उन्मादी विद्वान, ब्रायर की निषिद्ध प्रयोगशाला।",
			"सत्य गंदी फ्लास्क के अंदर छिपा था।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "숲 외곽, 버려진 연구 시설. 퀴퀴한 포자 냄새가 코를 찔렀다.",
						"english": "Forest outskirts, an abandoned research facility. The musty smell of spores stung the nose.",
						"japanese": "森の外れ、廃れた研究施設。カビ臭い胞子の匂いが鼻を刺した。",
						"chinese": "森林外围，废弃的研究设施。霉味孢子气味刺鼻。",
						"french": "En périphérie de la forêt, une installation de recherche abandonnée. L'odeur de moisi des spores piquait le nez.",
						"spanish": "Las afueras del bosque, una instalación de investigación abandonada. El olor a humedad de las esporas picaba la nariz.",
						"vietnamese": "Ngoại ô rừng, một cơ sở nghiên cứu bị bỏ hoang. Mùi bào tử mốc xông thẳng vào mũi.",
						"thai": "ชานป่า, ศูนย์วิจัยร้าง. กลิ่นอับของสปอร์ฉุนกึก",
						"hindi": "जंगल के बाहरी इलाके में, एक परित्यक्त अनुसंधान सुविधा। फफूंद वाली बीजाणुओं की गंध नाक में चुभ रही थी।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "여기가 브라이어의 연구실인가?",
						"english": "Is this Briar's laboratory?",
						"japanese": "ここがブライアの研究室か？",
						"chinese": "这里是布莱尔的实验室吗？",
						"french": "C'est le laboratoire de Briar ?",
						"spanish": "¿Es este el laboratorio de Briar?",
						"vietnamese": "Đây là phòng thí nghiệm của Briar à?",
						"thai": "นี่คือห้องทดลองของไบรอาร์หรือ?",
						"hindi": "क्या यह ब्रायर की प्रयोगशाला है?"
					}
				},
				{
					"spot": [
						4,
						3
					],
					"type": "direction",
					"speaker": "briar",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "briar",
					"content": {
						"korean": "그래. 진화의 현장이지.",
						"english": "Yes. The site of evolution.",
						"japanese": "そうだ。進化の現場だ。",
						"chinese": "是的。进化的现场。",
						"french": "Oui. C'est le site de l'évolution.",
						"spanish": "Sí. Es el lugar de la evolución.",
						"vietnamese": "Đúng vậy. Đây là hiện trường của sự tiến hóa.",
						"thai": "ใช่. นี่คือสถานที่แห่งวิวัฒนาการ",
						"hindi": "हाँ। यह विकास का स्थल है।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "briar",
					"content": {
						"korean": "새로운 질서가 시작되는 곳. 이걸 재앙이라 부르는 건 오만이야.",
						"english": "Where a new order begins. Calling this a disaster is arrogance.",
						"japanese": "新しい秩序が始まる場所だ。これを災厄と呼ぶのは傲慢だ。",
						"chinese": "新秩序开始的地方。称之为灾难是傲慢。",
						"french": "Là où un nouvel ordre commence. Appeler cela une catastrophe est de l'arrogance.",
						"spanish": "Donde comienza un nuevo orden. Llamar a esto un desastre es arrogancia.",
						"vietnamese": "Nơi một trật tự mới bắt đầu. Gọi đây là tai họa là sự kiêu ngạo.",
						"thai": "ที่ซึ่งระเบียบใหม่เริ่มต้นขึ้น. การเรียกสิ่งนี้ว่าหายนะคือความโอหัง",
						"hindi": "जहाँ एक नई व्यवस्था शुरू होती है। इसे आपदा कहना अहंकार है।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…포자 생명체를 조작하고 있었군.",
						"english": "...So you were manipulating spore creatures.",
						"japanese": "…胞子生命体を操作していたのか。",
						"chinese": "……你一直在操纵孢子生命体。",
						"french": "...Alors vous manipuliez des créatures sporulées.",
						"spanish": "...Así que estabas manipulando criaturas de esporas.",
						"vietnamese": "...Vậy là ngươi đã thao túng các sinh vật bào tử.",
						"thai": "...คุณกำลังจัดการกับสิ่งมีชีวิตสปอร์อยู่สินะ",
						"hindi": "...तो तुम बीजाणु जीवों में हेरफेर कर रहे थे।"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "briar",
					"content": {
						"korean": "조작? 아니. 나는 자연의 불완전함을 완성하고 있다.",
						"english": "Manipulating? No. I am perfecting nature's imperfections.",
						"japanese": "操作？違う。私は自然の不完全さを完成させているのだ。",
						"chinese": "操纵？不。我正在完善自然的不完美之处。",
						"french": "Manipuler ? Non. Je perfectionne les imperfections de la nature.",
						"spanish": "¿Manipular? No. Estoy perfeccionando las imperfecciones de la naturaleza.",
						"vietnamese": "Thao túng ư? Không. Ta đang hoàn thiện sự không hoàn hảo của tự nhiên.",
						"thai": "จัดการ? ไม่ใช่. ฉันกำลังทำให้ความไม่สมบูรณ์ของธรรมชาติสมบูรณ์แบบ",
						"hindi": "हेरफेर? नहीं। मैं प्रकृति की अपूर्णताओं को पूर्ण कर रहा हूँ।"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						2,
						3
					],
					"speaker": "briar",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "세계수의 '정화'는 단순한 현상이 아니야.",
						"english": "The 'purification' of the World Tree isn't just a simple phenomenon.",
						"japanese": "世界樹の「浄化」は、単なる現象ではない。",
						"chinese": "世界树的“净化”并非简单的现象。",
						"french": "La 'purification' de l'Arbre-Monde n'est pas un simple phénomène.",
						"spanish": "La 'purificación' del Árbol del Mundo no es un simple fenómeno.",
						"vietnamese": "Sự 'thanh lọc' của Cây Thế Giới không chỉ là một hiện tượng đơn thuần.",
						"thai": "การ 'ชำระล้าง' ของต้นไม้โลก ไม่ใช่แค่ปรากฏการณ์ธรรมดา",
						"hindi": "विश्व वृक्ष का 'शुद्धिकरण' महज़ एक साधारण घटना नहीं है।"
					},
					"speaker": "briar",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그럼 뭔데?",
						"english": "Then what is it?",
						"japanese": "じゃあ、何なの？",
						"chinese": "那是什么？",
						"french": "Alors, qu'est-ce que c'est ?",
						"spanish": "¿Entonces qué es?",
						"vietnamese": "Vậy thì là gì?",
						"thai": "แล้วมันคืออะไรล่ะ?",
						"hindi": "तो फिर क्या है?"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "생명의 도약. 새로운 시대를 위한 진화.",
						"english": "A leap of life. An evolution for a new era.",
						"japanese": "生命の飛躍。新時代のための進化だ。",
						"chinese": "生命的飞跃。是新时代的进化。",
						"french": "Un bond de vie. Une évolution pour une nouvelle ère.",
						"spanish": "Un salto de vida. Una evolución para una nueva era.",
						"vietnamese": "Một bước nhảy vọt của sự sống. Một sự tiến hóa cho kỷ nguyên mới.",
						"thai": "การก้าวกระโดดของชีวิต วิวัฒนาการสำหรับยุคใหม่",
						"hindi": "जीवन की एक छलांग। एक नए युग के लिए एक विकास।"
					},
					"speaker": "briar",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "최근 숲 깊은 곳에서 기이한 비명 소리가 들려. 정화된 지역에 붉은 꽃이 피어나고… 이건 단순한 변이가 아니야.",
						"english": "Lately, strange screams have been heard deep in the forest. Red flowers bloom in the purified areas... This isn't just a simple mutation.",
						"japanese": "最近、森の奥深くで奇妙な悲鳴が聞こえる。浄化された地域に赤い花が咲き乱れ…これは単なる変異ではない。",
						"chinese": "最近，森林深处传来奇怪的尖叫声。净化区域开出了红色的花朵……这不只是简单的变异。",
						"french": "Dernièrement, d'étranges cris ont été entendus au fond de la forêt. Des fleurs rouges fleurissent dans les zones purifiées... Ce n'est pas une simple mutation.",
						"spanish": "Últimamente, se han oído extraños gritos en lo profundo del bosque. Flores rojas brotan en las zonas purificadas... Esto no es una simple mutación.",
						"vietnamese": "Gần đây, những tiếng hét kỳ lạ đã vang lên sâu trong rừng. Hoa đỏ nở rộ ở những khu vực đã được thanh lọc... Đây không chỉ là một đột biến đơn thuần.",
						"thai": "ช่วงนี้มีเสียงกรีดร้องแปลกๆ ดังขึ้นในป่าลึก ดอกไม้สีแดงบานสะพรั่งในพื้นที่ที่ถูกชำระล้าง... นี่ไม่ใช่แค่การกลายพันธุ์ธรรมดา",
						"hindi": "हाल ही में, जंगल की गहराई से अजीब चीखें सुनी गई हैं। शुद्धिकृत क्षेत्रों में लाल फूल खिल रहे हैं... यह सिर्फ एक साधारण उत्परिवर्तन नहीं है।"
					},
					"speaker": "briar"
				},
				{
					"content": {
						"korean": "네 말은… 점점 더 섬뜩해지는군.",
						"english": "Your words... are getting more and more ominous.",
						"japanese": "君の言葉は…ますます不吉になっていくな。",
						"chinese": "你的话…越来越令人毛骨悚然了。",
						"french": "Tes paroles... deviennent de plus en plus inquiétantes.",
						"spanish": "Tus palabras... son cada vez más siniestras.",
						"vietnamese": "Lời của ngươi... càng ngày càng đáng sợ.",
						"thai": "คำพูดของเจ้า... ชักจะน่าขนลุกขึ้นทุกที",
						"hindi": "तुम्हारे शब्द... और भी अशुभ होते जा रहे हैं।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"type": "direction",
					"speaker": "briar",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "briar",
					"content": {
						"korean": "카인은 그저 작은 불씨였어. 세계수의 의지를 깨운.",
						"english": "Cain was just a tiny spark. The one who awakened the will of the World Tree.",
						"japanese": "カインはただの小さな火種だった。世界樹の意志を目覚めさせた。",
						"chinese": "凯恩只是一个微小的火花。唤醒了世界树的意志。",
						"french": "Caïn n'était qu'une petite étincelle. Celui qui a éveillé la volonté de l'Arbre-Monde.",
						"spanish": "Caín fue solo una pequeña chispa. El que despertó la voluntad del Árbol del Mundo.",
						"vietnamese": "Cain chỉ là một đốm lửa nhỏ. Người đã đánh thức ý chí của Cây Thế Giới.",
						"thai": "เคนเป็นแค่ประกายไฟเล็กๆ คนที่ปลุกเจตจำนงของต้นไม้โลก",
						"hindi": "केन सिर्फ एक छोटी सी चिंगारी था। जिसने विश्व वृक्ष की इच्छा को जगाया।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "카인의 흔적을 쫓는 건가?",
						"english": "Are you chasing Cain's traces?",
						"japanese": "カインの痕跡を追っているのか？",
						"chinese": "你在追寻凯恩的踪迹吗？",
						"french": "Tu suis les traces de Caïn ?",
						"spanish": "¿Estás siguiendo las huellas de Caín?",
						"vietnamese": "Ngươi đang theo dấu vết của Cain sao?",
						"thai": "เจ้ากำลังตามรอยของเคนอยู่รึ?",
						"hindi": "क्या तुम केन के निशानों का पीछा कर रहे हो?"
					}
				},
				{
					"content": {
						"korean": "흔적? 아니. 나는 그 너머의 진정한 힘을 추구해.",
						"english": "Traces? No. I seek the true power beyond that.",
						"japanese": "痕跡？違う。私はその先にある真の力を求めている。",
						"chinese": "踪迹？不。我追求的是超越其上的真正力量。",
						"french": "Des traces ? Non. Je cherche le véritable pouvoir au-delà de cela.",
						"spanish": "¿Huellas? No. Yo busco el verdadero poder más allá de eso.",
						"vietnamese": "Dấu vết? Không. Ta tìm kiếm sức mạnh thực sự vượt xa điều đó.",
						"thai": "รอย? ไม่ใช่ ข้าแสวงหาพลังที่แท้จริงที่อยู่เหนือกว่านั้น",
						"hindi": "निशान? नहीं। मैं उसके परे की सच्ची शक्ति चाहता हूँ।"
					},
					"speaker": "briar",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "briar",
					"content": {
						"korean": "고대 요정들은 '시작의 씨앗'을 말하지만, 낡은 미신일 뿐. 진정한 씨앗은 진화 그 자체에 있지.",
						"english": "Ancient fairies speak of the 'Seed of Genesis,' but it's just an old superstition. The true seed lies in evolution itself.",
						"japanese": "古代の妖精たちは「始まりの種」を語るが、それは古い迷信に過ぎない。真の種は進化そのものにある。",
						"chinese": "古代精灵谈论“创世之种”，但这只是个古老的迷信。真正的种子在于进化本身。",
						"french": "Les anciennes fées parlent de la 'Graine de la Genèse', mais ce n'est qu'une vieille superstition. La véritable graine réside dans l'évolution elle-même.",
						"spanish": "Las antiguas hadas hablan de la 'Semilla del Génesis', pero es solo una vieja superstición. La verdadera semilla reside en la evolución misma.",
						"vietnamese": "Các tiên nữ cổ đại nói về 'Hạt giống Khởi nguyên', nhưng đó chỉ là một mê tín cũ. Hạt giống thực sự nằm ở chính sự tiến hóa.",
						"thai": "เหล่าภูตโบราณพูดถึง 'เมล็ดพันธุ์แห่งการกำเนิด' แต่มันเป็นแค่ความเชื่อโบราณ เมล็ดพันธุ์ที่แท้จริงอยู่ในวิวัฒนาการนั่นเอง",
						"hindi": "प्राचीन परियाँ 'उत्पत्ति के बीज' की बात करती हैं, लेकिन यह सिर्फ एक पुराना अंधविश्वास है। सच्चा बीज स्वयं विकास में निहित है।"
					}
				},
				{
					"content": {
						"korean": "네 몸도 꽤 흥미로운 실험체가 될 것 같군. 과연 이 '진화'를 견딜 수 있을까?",
						"english": "Your body also seems like a rather interesting test subject. I wonder if it can withstand this 'evolution'?",
						"japanese": "お前の体もなかなか興味深い実験体になりそうだ。果たしてこの「進化」に耐えられるかな？",
						"chinese": "你的身体似乎也会成为一个相当有趣的实验体。不知能否承受得住这“进化”？",
						"french": "Ton corps semble aussi être un sujet d'expérimentation plutôt intéressant. Je me demande s'il pourra supporter cette 'évolution' ?",
						"spanish": "Tu cuerpo también parece un sujeto de prueba bastante interesante. Me pregunto si podrá soportar esta 'evolución'.",
						"vietnamese": "Cơ thể của ngươi cũng có vẻ là một vật thí nghiệm khá thú vị. Không biết nó có chịu đựng được 'tiến hóa' này không?",
						"thai": "ร่างกายของเจ้าก็ดูเหมือนจะเป็นตัวทดลองที่น่าสนใจทีเดียว ฉันสงสัยว่ามันจะทนทานต่อ 'วิวัฒนาการ' นี้ได้หรือไม่?",
						"hindi": "तुम्हारा शरीर भी एक दिलचस्प परीक्षण विषय लगता है। मुझे आश्चर्य है कि क्या यह इस 'विकास' को सहन कर पाएगा?"
					},
					"speaker": "briar",
					"type": "speech",
					"emotion": "angry"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "briar",
					"type": "direction",
					"spot": [
						2,
						3
					]
				},
				{
					"speaker": "briar",
					"content": {
						"korean": "네 저항력… 예상 밖이군.",
						"english": "Your resilience... unexpected.",
						"japanese": "お前の抵抗力… 予想外だな。",
						"chinese": "你的抵抗力……出乎意料。",
						"french": "Ta résistance… inattendue.",
						"spanish": "Tu resistencia… inesperada.",
						"vietnamese": "Sức chống chịu của ngươi… ngoài dự đoán.",
						"thai": "ความยืดหยุ่นของเจ้า... เหนือความคาดหมาย",
						"hindi": "तुम्हारा प्रतिरोध… अप्रत्याशित है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "대체 무슨 짓을 하려는 거야.",
						"english": "What exactly are you trying to do?",
						"japanese": "一体何を企んでいるんだ。",
						"chinese": "你到底想做什么？",
						"french": "Qu'est-ce que tu tentes de faire ?",
						"spanish": "¿Qué demonios intentas hacer?",
						"vietnamese": "Ngươi rốt cuộc muốn làm gì?",
						"thai": "เจ้ากำลังคิดจะทำอะไรกันแน่?",
						"hindi": "तुम आख़िर करना क्या चाहते हो?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "briar",
					"content": {
						"korean": "완벽한 숙주를 만드는 것. 진화의 정점에 도달한 존재를.",
						"english": "To create the perfect host. A being that has reached the pinnacle of evolution.",
						"japanese": "完璧な宿主を創り出すこと。進化の頂点に達した存在を。",
						"chinese": "创造完美的宿主。一个达到进化顶点的存在。",
						"french": "Créer l'hôte parfait. Un être qui a atteint le sommet de l'évolution.",
						"spanish": "Crear el huésped perfecto. Un ser que ha alcanzado la cúspide de la evolución.",
						"vietnamese": "Tạo ra vật chủ hoàn hảo. Một sinh vật đạt đến đỉnh cao của sự tiến hóa.",
						"thai": "สร้างร่างทรงที่สมบูรณ์แบบ สิ่งมีชีวิตที่บรรลุถึงจุดสูงสุดของวิวัฒนาการ",
						"hindi": "एक पूर्ण मेज़बान बनाना। एक ऐसा प्राणी जो विकास के शिखर पर पहुँच चुका हो।"
					}
				},
				{
					"speaker": "briar",
					"content": {
						"korean": "곧 알게 될 거야. 이 숲의 새로운 주인이 누구인지.",
						"english": "You'll soon learn. Who the new master of this forest is.",
						"japanese": "すぐにわかるだろう。この森の新たな主が誰であるか。",
						"chinese": "你很快就会知道。谁是这片森林的新主人。",
						"french": "Tu sauras bientôt. Qui est le nouveau maître de cette forêt.",
						"spanish": "Pronto lo sabrás. Quién es el nuevo señor de este bosque.",
						"vietnamese": "Ngươi sẽ sớm biết thôi. Ai là chủ nhân mới của khu rừng này.",
						"thai": "เจ้าจะรู้เองในไม่ช้า ว่าใครคือเจ้าของป่าแห่งนี้คนใหม่",
						"hindi": "तुम्हें जल्द ही पता चल जाएगा। इस जंगल का नया मालिक कौन है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "너는 그저… 나의 위대한 실험에 기여할 뿐이다.",
						"english": "You are merely... a contribution to my grand experiment.",
						"japanese": "お前はただ… 私の偉大な実験に貢献するだけだ。",
						"chinese": "你不过是……为我伟大的实验做出贡献罢了。",
						"french": "Tu ne seras qu'une… contribution à ma grande expérience.",
						"spanish": "Tú no eres más que… una contribución a mi gran experimento.",
						"vietnamese": "Ngươi chỉ là… một sự đóng góp cho thí nghiệm vĩ đại của ta.",
						"thai": "เจ้าเป็นเพียง... ส่วนหนึ่งของการทดลองอันยิ่งใหญ่ของข้า",
						"hindi": "तुम तो बस… मेरे महान प्रयोग में योगदान दे रहे हो।"
					},
					"speaker": "briar",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이 미친 학자!",
						"english": "You mad scholar!",
						"japanese": "この狂った学者め！",
						"chinese": "你这个疯子学者！",
						"french": "Cet érudit fou !",
						"spanish": "¡Este erudito loco!",
						"vietnamese": "Tên học giả điên này!",
						"thai": "ไอ้ปัญญาชนบ้า!",
						"hindi": "यह पागल विद्वान!"
					}
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "크하하하! 진화는… 너 같은 걸림돌에 멈추지 않는다!",
						"english": "Hahahaha! Evolution... will not be stopped by obstacles like you!",
						"japanese": "「クハハハ！進化は…君のような障害には止まらない！」",
						"chinese": "“哈哈哈！进化…不会因你这样的障碍而停止！”",
						"french": "« Hahahaha ! L'évolution... ne sera pas arrêtée par des obstacles comme toi ! »",
						"spanish": "¡Jajajaja! ¡La evolución... no se detendrá por obstáculos como tú!",
						"vietnamese": "“Khahaha! Tiến hóa... sẽ không bị những chướng ngại vật như ngươi cản lại!”",
						"thai": "“คิก คิก คิก! วิวัฒนาการ... จะไม่หยุดลงเพราะอุปสรรคอย่างแก!”",
						"hindi": "“हाहाहा! विकास... तुम्हारे जैसे बाधाओं से नहीं रुकेगा!”"
					},
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "아직… 끝나지 않았어!",
						"english": "It's not... over yet!",
						"japanese": "「まだ…終わってない！」",
						"chinese": "“还没…结束！”",
						"french": "« Ce n'est pas... encore fini ! »",
						"spanish": "¡Aún... no ha terminado!",
						"vietnamese": "“Vẫn... chưa kết thúc!”",
						"thai": "“ยัง... ไม่จบ!”",
						"hindi": "“अभी... खत्म नहीं हुआ है!”"
					}
				},
				{
					"content": {
						"korean": "네가 감히… 거대한 흐름을 거스를 수 있다고 생각하나?",
						"english": "Do you really think you can... defy the mighty current?",
						"japanese": "「君がまさか…この巨大な流れに逆らえるとでも思っているのか？」",
						"chinese": "“你竟敢…认为自己能逆转这股巨大的洪流吗？”",
						"french": "« Penses-tu vraiment pouvoir... défier le courant ?! »",
						"spanish": "¿De verdad crees que puedes... desafiar la gran corriente?",
						"vietnamese": "“Ngươi dám... nghĩ rằng mình có thể chống lại dòng chảy vĩ đại này sao?”",
						"thai": "“แกคิดว่าตัวเอง... สามารถต้านทานกระแสอันยิ่งใหญ่ได้งั้นหรือ?”",
						"hindi": "“क्या तुम सच में सोचते हो कि तुम... इस विशाल धारा का सामना कर सकते हो?”"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "으으윽… 진화는… 끝나지 않아…!",
						"english": "Ugh... Evolution... never ends...!",
						"japanese": "「ううっ…進化は…終わらない…！」",
						"chinese": "“呃啊…进化…永无止境…！”",
						"french": "« Urgh... L'évolution... ne s'arrête jamais... ! »",
						"spanish": "¡Ugh... La evolución... nunca termina...!",
						"vietnamese": "“Ư… Ư… Tiến hóa… không ngừng lại…!”",
						"thai": "“อึก... วิวัฒนาการ... ไม่มีวันสิ้นสุด...!”",
						"hindi": "“उह... विकास... कभी समाप्त नहीं होता...!”"
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "이걸로… 끝인가?",
						"english": "Is this... the end?",
						"japanese": "「これで…終わりか？」",
						"chinese": "“就这样…结束了吗？”",
						"french": "« Est-ce... la fin ? »",
						"spanish": "¿Es este... el final?",
						"vietnamese": "“Thế này... là hết sao?”",
						"thai": "“นี่คือ... จุดจบงั้นหรือ?”",
						"hindi": "“क्या यह... अंत है?”"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "briar",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "briar",
					"content": {
						"korean": "놀랍군. 예상보다 빠르군.",
						"english": "Remarkable. Faster than expected.",
						"japanese": "「驚いたな。予想より早い。」",
						"chinese": "“真令人惊讶。比预想的要快。”",
						"french": "« Remarquable. Plus vite que prévu. »",
						"spanish": "Sorprendente. Más rápido de lo esperado.",
						"vietnamese": "“Thật đáng ngạc nhiên. Nhanh hơn ta dự tính.”",
						"thai": "“น่าทึ่ง. เร็วกว่าที่คาดไว้.”",
						"hindi": "“अद्भुत। उम्मीद से भी तेज़।”"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "briar",
					"content": {
						"korean": "하지만 이건 작은 실험에 불과해. 숲은… 네 상상 이상의 비밀을 감추고 있어.",
						"english": "But this is just a small experiment. The forest... hides secrets beyond your imagination.",
						"japanese": "「だが、これは小さな実験に過ぎない。森は…君の想像を超える秘密を隠している。」",
						"chinese": "“但这只是个小小的实验。森林…隐藏着超乎你想象的秘密。”",
						"french": "« Mais ce n'est qu'une petite expérience. La forêt... cache des secrets au-delà de ton imagination. »",
						"spanish": "Pero esto es solo un pequeño experimento. El bosque... esconde secretos más allá de tu imaginación.",
						"vietnamese": "“Nhưng đây chỉ là một thử nghiệm nhỏ. Rừng sâu... ẩn chứa những bí mật vượt xa sức tưởng tượng của ngươi.”",
						"thai": "“แต่นี่เป็นเพียงการทดลองเล็ก ๆ เท่านั้น ป่า... ซ่อนความลับที่เกินกว่าจินตนาการของแกไว้”",
						"hindi": "“लेकिन यह केवल एक छोटा सा प्रयोग है। जंगल... तुम्हारी कल्पना से परे रहस्य छिपाए हुए है।”"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "브라이어는 의미심장한 웃음을 남기고 사라졌다. 숲의 심장부에서, 알 수 없는 기운이 점점 더 강해지고 있었다.",
						"english": "Bryer left with a knowing smile and vanished. In the heart of the forest, an unknown energy grew stronger.",
						"japanese": "「ブライアーは意味深な笑みを残して消えた。森の心臓部では、未知の力がますます強くなっていた。」",
						"chinese": "“布莱尔留下一个意味深长的笑容后消失了。在森林的深处，一股未知的气息正变得越来越强。”",
						"french": "« Bryer disparut avec un sourire énigmatique. Au cœur de la forêt, une énergie inconnue devenait de plus en plus forte. »",
						"spanish": "Bryer se marchó con una sonrisa significativa y desapareció. En el corazón del bosque, una energía desconocida se hacía cada vez más fuerte.",
						"vietnamese": "“Bryer để lại một nụ cười đầy ẩn ý rồi biến mất. Ở trung tâm khu rừng, một luồng năng lượng bí ẩn ngày càng mạnh mẽ hơn.”",
						"thai": "“ไบรเออร์ทิ้งรอยยิ้มที่เปี่ยมความหมายไว้แล้วหายไป ในใจกลางป่า พลังงานที่ไม่รู้จักกำลังแข็งแกร่งขึ้นเรื่อยๆ”",
						"hindi": "“ब्रायर्स एक रहस्यमय मुस्कान छोड़कर गायब हो गया। जंगल के केंद्र में, एक अज्ञात ऊर्जा तेज़ी से बढ़ रही थी।”"
					},
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "briar",
					"type": "direction",
					"spot": [
						4,
						3
					]
				},
				{
					"speaker": "briar",
					"content": {
						"korean": "여기까지 오다니… 나의 예측을 넘어섰군.",
						"english": "To come this far... you've surpassed my expectations.",
						"japanese": "ここまで来るとは… 私の予測を超えたな。",
						"chinese": "能走到这里……超出了我的预料。",
						"french": "Arriver jusqu'ici… tu as dépassé mes prédictions.",
						"spanish": "Llegar tan lejos… has superado mis expectativas.",
						"vietnamese": "Đến được đây… ngươi đã vượt quá dự đoán của ta.",
						"thai": "มาได้ไกลขนาดนี้... เจ้าเหนือความคาดหมายของข้า",
						"hindi": "इतनी दूर तक आना… तुमने मेरी उम्मीदों को पार कर लिया है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "briar",
					"content": {
						"korean": "하지만, 여기서 네 운명이 결정될 거야. 진화의 다음 단계가 될지, 아니면 실패한 재료가 될지.",
						"english": "However, your fate will be decided here. Whether you become the next stage of evolution, or failed material.",
						"japanese": "だが、ここでお前の運命は決まる。進化の次の段階となるか、それとも失敗した素材となるか。",
						"chinese": "但是，你的命运将在这里决定。是成为进化的下一个阶段，还是失败的材料。",
						"french": "Cependant, ton destin sera scellé ici. Que tu deviennes la prochaine étape de l'évolution, ou un matériau raté.",
						"spanish": "Sin embargo, tu destino se decidirá aquí. Si te conviertes en la siguiente etapa de la evolución, o en un material fallido.",
						"vietnamese": "Tuy nhiên, số phận của ngươi sẽ được định đoạt tại đây. Liệu ngươi sẽ trở thành giai đoạn tiến hóa tiếp theo, hay một nguyên liệu thất bại.",
						"thai": "แต่โชคชะตาของเจ้าจะถูกกำหนดที่นี่ ว่าเจ้าจะเป็นก้าวต่อไปของวิวัฒนาการ หรือเป็นเพียงวัตถุดิบล้มเหลว",
						"hindi": "हालांकि, तुम्हारा भाग्य यहीं तय होगा। कि तुम विकास के अगले चरण बनोगे, या असफल सामग्री।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "브라이어의 비릿한 미소 뒤로, 거대한 그림자가 모습을 드러냈다.",
						"english": "Behind Briar's sinister smile, a colossal shadow emerged.",
						"japanese": "ブライアの不気味な笑顔の背後から、巨大な影が姿を現した。",
						"chinese": "在布莱尔阴险的笑容背后，一个巨大的身影显现出来。",
						"french": "Derrière le sourire sinistre de Briar, une ombre colossale apparut.",
						"spanish": "Tras la sonrisa siniestra de Briar, una sombra colosal emergió.",
						"vietnamese": "Đằng sau nụ cười nham hiểm của Briar, một cái bóng khổng lồ hiện ra.",
						"thai": "เบื้องหลังรอยยิ้มชั่วร้ายของไบรเออร์ เงาขนาดมหึมาได้ปรากฏขึ้น",
						"hindi": "ब्रायर की भयावह मुस्कान के पीछे, एक विशालकाय छाया उभर आई।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "…크르르르…",
						"english": "...Grrrrr...",
						"japanese": "…グルルルル…",
						"chinese": "……嘶吼……",
						"french": "...Grrrraouh...",
						"spanish": "...Grrrrr...",
						"vietnamese": "...Gầm gừ...",
						"thai": "...ครืน...",
						"hindi": "...ग्र्र्र्र्र..."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "저건… 네 실험체인가?",
						"english": "Is that... your experiment?",
						"japanese": "「あれは…君の実験体か？」",
						"chinese": "“那是…你的实验体吗？”",
						"french": "« C'est... ton spécimen ? »",
						"spanish": "¿Es eso... tu experimento?",
						"vietnamese": "“Đó là... vật thí nghiệm của ngươi sao?”",
						"thai": "“นั่น... คือสิ่งทดลองของแกหรือ?”",
						"hindi": "“वह... तुम्हारा प्रयोग है?”"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "briar",
					"content": {
						"korean": "내 걸작의 일부라고 해두지. 네겐 너무나 버거운.",
						"english": "Let's just say it's part of my masterpiece. Far too much for you to handle.",
						"japanese": "「私の傑作の一部だとでも言っておこう。君には荷が重すぎる。」",
						"chinese": "“姑且说是我的杰作的一部分吧。对你来说太沉重了。”",
						"french": "« Disons que c'est une partie de mon chef-d'œuvre. Bien trop pour toi. »",
						"spanish": "Digamos que es parte de mi obra maestra. Demasiado para ti.",
						"vietnamese": "“Cứ coi như đó là một phần kiệt tác của ta đi. Nặng nề quá sức chịu đựng của ngươi.”",
						"thai": "“บอกว่าเป็นส่วนหนึ่งของผลงานชิ้นเอกของฉันก็แล้วกัน หนักหนาสาหัสเกินกว่าแกจะรับมือไหว”",
						"hindi": "“मान लो यह मेरी उत्कृष्ट कृति का हिस्सा है। तुम्हारे लिए बहुत भारी।”"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"action": "exit",
					"direction": "up",
					"duration_ms": 400,
					"type": "direction",
					"speaker": "briar"
				}
			],
			"id": 15
		}
	]
} as const;
