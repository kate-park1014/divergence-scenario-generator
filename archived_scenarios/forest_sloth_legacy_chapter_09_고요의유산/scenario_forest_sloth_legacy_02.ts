export const scenario_forest_sloth_legacy_02 = {
	"scenario_id": "forest_sloth_legacy_02",
	"order": 2,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"cedar": {
			"id": "mon_bd67c222-311e-4f31-b81f-931b14f6b5c6",
			"name": {
				"korean": "시더",
				"english": "Cedar",
				"japanese": "シダー",
				"chinese": "雪松",
				"french": "Cèdre",
				"spanish": "Cedro",
				"vietnamese": "Tuyết tùng",
				"thai": "ซีดาร์",
				"hindi": "देवदार"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f1057921-5fa2-4be2-767d-1a64c33e6e00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/9579f10e-eb78-40e5-d495-72f489322200/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"고요함이 세상을 뒤덮었다. 단순한 느림이 아니었다.",
			"숲은 왜곡된 진실을 속삭였다.",
			"오래된 기록 속, 봉인된 무언가가 깨어나려 하고 있었다.",
			"이 왜곡된 안식은… 재앙의 시작이었다."
		],
		"english": [
			"A profound stillness enveloped the world. It wasn't mere slowness.",
			"The forest whispered distorted truths.",
			"In ancient records, something sealed was stirring to awaken.",
			"This distorted peace was... the beginning of a catastrophe."
		],
		"japanese": [
			"静寂が世界を覆った。それはただの緩慢さではなかった。",
			"森は歪んだ真実を囁いた。",
			"古の記録には、封印された何かが目覚めようとしていた。",
			"この歪んだ安息は… 災厄の始まりだった。"
		],
		"chinese": [
			"寂静笼罩了世界。这不是单纯的缓慢。",
			"森林低语着扭曲的真相。",
			"在古老的记录中，被封印的某种东西即将苏醒。",
			"这扭曲的安宁是……灾难的开端。"
		],
		"french": [
			"Un silence profond enveloppait le monde. Ce n'était pas une simple lenteur.",
			"La forêt murmurait des vérités distordues.",
			"Dans d'anciens récits, quelque chose de scellé était sur le point de s'éveiller.",
			"Cette paix distordue était... l'aube d'un désastre."
		],
		"spanish": [
			"Un silencio profundo cubrió el mundo. No era una simple lentitud.",
			"El bosque susurraba verdades distorsionadas.",
			"En los registros antiguos, algo sellado estaba a punto de despertar.",
			"Esta paz distorsionada fue... el comienzo de una calamidad."
		],
		"vietnamese": [
			"Sự tĩnh lặng bao trùm thế giới. Đó không phải là sự chậm chạp đơn thuần.",
			"Khu rừng thì thầm những sự thật méo mó.",
			"Trong những ghi chép cổ xưa, một thứ gì đó bị phong ấn đang dần thức tỉnh.",
			"Sự an nghỉ méo mó này… là khởi đầu của một thảm họa."
		],
		"thai": [
			"ความเงียบงันปกคลุมโลก ไม่ใช่แค่ความเชื่องช้าธรรมดา",
			"ป่ากระซิบความจริงที่บิดเบือน",
			"ในบันทึกโบราณ บางสิ่งที่ถูกผนึกกำลังจะตื่นขึ้น",
			"ความสงบอันบิดเบือนนี้คือ… จุดเริ่มต้นของหายนะ"
		],
		"hindi": [
			"खामोशी ने दुनिया को घेर लिया। यह सिर्फ धीमी गति नहीं थी।",
			"जंगल ने विकृत सच्चाइयों को फुसफुसाया।",
			"प्राचीन अभिलेखों में, कुछ सील किया हुआ जागृत होने वाला था।",
			"यह विकृत शांति… एक आपदा की शुरुआत थी।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "숲의 고요함은 더욱 깊어졌다. 오래된 유적의 문이 열렸다.",
						"english": "The forest's stillness deepened. The gate of the ancient ruins opened.",
						"japanese": "森の静寂はさらに深まった。古き遺跡の扉が開かれた。",
						"chinese": "森林的寂静愈发深沉。古老遗迹的大门打开了。",
						"french": "Le silence de la forêt s'approfondit. La porte des ruines antiques s'ouvrit.",
						"spanish": "La quietud del bosque se hizo más profunda. La puerta de las ruinas antiguas se abrió.",
						"vietnamese": "Sự tĩnh lặng của rừng càng thêm sâu sắc. Cánh cổng của tàn tích cổ xưa đã mở ra.",
						"thai": "ความเงียบงันของป่าลึกซึ้งยิ่งขึ้น ประตูของซากปรักหักพังโบราณได้เปิดออก",
						"hindi": "जंगल की खामोशी और गहरी हो गई। प्राचीन खंडहरों का द्वार खुल गया।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이게… 안식이라고? 숨 막히는데.",
						"english": "This is... peace? It's suffocating.",
						"japanese": "これが… 安息だと？息が詰まる。",
						"chinese": "这就是…安宁？简直令人窒息。",
						"french": "C'est ça… la paix ? C'est étouffant.",
						"spanish": "¿Esto es... paz? Me está asfixiando.",
						"vietnamese": "Đây là… sự an nghỉ ư? Ngột ngạt quá.",
						"thai": "นี่คือ… ความสงบงั้นเหรอ? มันน่าอึดอัดจะตาย",
						"hindi": "यह है… शांति? दम घुट रहा है।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"spot": [
						4,
						2
					],
					"type": "direction",
					"action": "enter",
					"speaker": "cedar",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 고요함은 기만입니다. 숲은 진실을 감추고 있어요.",
						"english": "This stillness is a deception. The forest is hiding the truth.",
						"japanese": "この静寂は欺瞞です。森は真実を隠しています。",
						"chinese": "这寂静是一种欺骗。森林隐藏着真相。",
						"french": "Ce silence est une tromperie. La forêt cache la vérité.",
						"spanish": "Esta quietud es un engaño. El bosque esconde la verdad.",
						"vietnamese": "Sự tĩnh lặng này là một sự lừa dối. Rừng đang che giấu sự thật.",
						"thai": "ความเงียบสงบนี้คือการหลอกลวง ป่ากำลังซ่อนความจริงไว้",
						"hindi": "यह खामोशी एक धोखा है। जंगल सच छिपा रहा है।"
					},
					"emotion": "sad",
					"speaker": "cedar"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "무슨 진실?",
						"english": "What truth?",
						"japanese": "何の真実？",
						"chinese": "什么真相？",
						"french": "Quelle vérité ?",
						"spanish": "¿Qué verdad?",
						"vietnamese": "Sự thật gì?",
						"thai": "ความจริงอะไร?",
						"hindi": "क्या सच?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "과거의 기록을 통해… '고요함의 근원'이라 불리는 존재를 찾아냈습니다.",
						"english": "Through ancient records... I've found an entity called 'The Source of Stillness'.",
						"japanese": "過去の記録を通じて… '静寂の根源'と呼ばれる存在を見つけました。",
						"chinese": "通过过去的记录……我们找到了一个被称为‘寂静之源’的存在。",
						"french": "À travers les archives du passé… j'ai trouvé une entité appelée 'La Source du Silence'.",
						"spanish": "A través de los registros del pasado… encontré una entidad llamada 'La Fuente de la Quiétude'.",
						"vietnamese": "Qua những ghi chép cổ xưa… tôi đã tìm thấy một thực thể được gọi là 'Nguồn gốc của sự tĩnh lặng'.",
						"thai": "จากบันทึกในอดีต… เราพบสิ่งมีชีวิตที่เรียกว่า 'ต้นกำเนิดแห่งความเงียบสงบ'",
						"hindi": "अतीत के अभिलेखों के माध्यम से… हमने 'खामोशी का स्रोत' नामक एक सत्ता को खोज निकाला है।"
					},
					"emotion": "base",
					"speaker": "cedar"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "cedar",
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						3
					]
				},
				{
					"speaker": "cedar",
					"emotion": "sad",
					"content": {
						"korean": "이 유적은 '근원'을 봉인하기 위해 세워진 것이었습니다.",
						"english": "These ruins were built to seal away 'The Source'.",
						"japanese": "この遺跡は『根源』を封印するために建てられたものでした。",
						"chinese": "这座遗迹是为了封印‘根源’而建造的。",
						"french": "Ces ruines ont été érigées pour sceller 'la Source'.",
						"spanish": "Estas ruinas fueron construidas para sellar 'la Fuente'.",
						"vietnamese": "Tàn tích này được xây dựng để phong ấn 'Nguồn gốc'.",
						"thai": "ซากปรักหักพังเหล่านี้ถูกสร้างขึ้นเพื่อผนึก 'ต้นกำเนิด'",
						"hindi": "ये खंडहर 'स्रोत' को सील करने के लिए बनाए गए थे।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "봉인? 그럼 지금 이 고요함은…",
						"english": "A seal? Then this silence now...",
						"japanese": "封印？じゃあこの静けさは…",
						"chinese": "封印？那这份寂静是……",
						"french": "Un sceau ? Alors ce silence actuel...",
						"spanish": "¿Un sello? Entonces este silencio ahora...",
						"vietnamese": "Phong ấn? Vậy sự yên tĩnh này...",
						"thai": "ผนึกเหรอ? งั้นความเงียบสงบตอนนี้...",
						"hindi": "सील? तो यह चुप्पी अब..."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "cedar",
					"emotion": "angry",
					"content": {
						"korean": "봉인이 약해지고 있다는 증거죠. '근원'이 깨어나려 합니다.",
						"english": "Proof the seal is weakening. The 'Source' is about to awaken.",
						"japanese": "封印が弱まっている証拠です。『根源』が目覚めようとしています。",
						"chinese": "这是封印正在减弱的证据。‘本源’即将苏醒。",
						"french": "C'est la preuve que le sceau s'affaiblit. La 'Source' est sur le point de s'éveiller.",
						"spanish": "Es la prueba de que el sello se debilita. La 'Fuente' está a punto de despertar.",
						"vietnamese": "Bằng chứng phong ấn đang yếu đi. 'Nguồn' sắp thức tỉnh.",
						"thai": "เป็นหลักฐานว่าผนึกกำลังอ่อนแอลง 'ต้นกำเนิด' กำลังจะตื่นขึ้นมา",
						"hindi": "सबूत है कि सील कमजोर हो रही है। 'स्रोत' जागने वाला है।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "슬로우가 의도했던 건 이게 아니었잖아!",
						"english": "This isn't what Slow intended!",
						"japanese": "スロウが意図したのはこれじゃなかったはず！",
						"chinese": "这可不是斯洛的本意！",
						"french": "Ce n'est pas ce que Slow avait l'intention de faire !",
						"spanish": "¡Esto no es lo que Slow pretendía!",
						"vietnamese": "Đây không phải điều Slow muốn!",
						"thai": "นี่ไม่ใช่สิ่งที่สโลว์ตั้งใจไว้!",
						"hindi": "स्लो का इरादा यह नहीं था!"
					}
				},
				{
					"type": "speech",
					"speaker": "cedar",
					"content": {
						"korean": "슬로우는… 그저 매개체일지도 모릅니다. 더 큰 존재의.",
						"english": "Slow... might just be a medium. For a greater entity.",
						"japanese": "スロウは…ただの媒体かもしれません。より大きな存在の。",
						"chinese": "斯洛……或许只是一个媒介。一个更强大的存在之媒介。",
						"french": "Slow... pourrait n'être qu'un médium. Pour une entité plus grande.",
						"spanish": "Slow... quizás sea solo un médium. De una entidad mayor.",
						"vietnamese": "Slow... có thể chỉ là vật trung gian. Của một thực thể lớn hơn.",
						"thai": "สโลว์... อาจเป็นแค่สื่อกลาง. ของสิ่งมีชีวิตที่ยิ่งใหญ่กว่า.",
						"hindi": "स्लो... शायद सिर्फ एक माध्यम है। एक बड़ी सत्ता का।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "cedar",
					"action": "enter",
					"spot": [
						3,
						4
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "cedar",
					"content": {
						"korean": "기록에 따르면, '근원'은 모든 의지를 소멸시키려 합니다. 진정한 '무위'를 구현하기 위해서…",
						"english": "According to records, the 'Source' seeks to extinguish all will. To achieve true 'Non-action'...",
						"japanese": "記録によると、『根源』はすべての意思を消滅させようとしています。真の『無為』を実現するために…",
						"chinese": "据记载，‘本源’试图消灭所有意志。为了实现真正的‘无为’……",
						"french": "Selon les registres, la 'Source' cherche à éteindre toute volonté. Pour réaliser le véritable 'Non-agir'...",
						"spanish": "Según los registros, la 'Fuente' busca extinguir toda voluntad. Para lograr la verdadera 'No-acción'...",
						"vietnamese": "Theo ghi chép, 'Nguồn' muốn tiêu diệt mọi ý chí. Để thực hiện 'Vô vi' chân chính...",
						"thai": "ตามบันทึก 'ต้นกำเนิด' พยายามที่จะทำลายเจตจำนงทั้งหมด เพื่อให้เกิด 'ภาวะว่างเปล่า' ที่แท้จริง...",
						"hindi": "रिकॉर्ड के अनुसार, 'स्रोत' सभी इच्छाओं को खत्म करना चाहता है। सच्चे 'निष्क्रियता' को प्राप्त करने के लिए..."
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "그게 안식이라고? 모든 걸 없애는 게?",
						"english": "That's rest? Destroying everything?",
						"japanese": "それが安息だと？すべてを消し去るのが？",
						"chinese": "这就是安息？毁灭一切？",
						"french": "C'est ça le repos ? Tout détruire ?",
						"spanish": "¿Eso es descanso? ¿Destruirlo todo?",
						"vietnamese": "Đó là sự an nghỉ? Hủy diệt mọi thứ?",
						"thai": "นั่นคือการพักผ่อนเหรอ? การทำลายทุกสิ่ง?",
						"hindi": "वही आराम है? सब कुछ मिटा देना?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "cedar",
					"content": {
						"korean": "왜곡된 안식이죠. 모든 것을 고요함에 잠식시켜, 존재 자체를 지우려는…",
						"english": "A twisted rest. Submerging everything in silence, erasing existence itself...",
						"japanese": "歪んだ安息です。すべてを静寂に飲み込み、存在そのものを消し去ろうとする…",
						"chinese": "那是扭曲的安息。将一切吞没于寂静中，抹去存在本身……",
						"french": "Un repos tordu. Submerger tout dans le silence, effacer l'existence même...",
						"spanish": "Un descanso retorcido. Sumergirlo todo en el silencio, borrando la existencia misma...",
						"vietnamese": "Một sự an nghỉ méo mó. Nhấn chìm mọi thứ vào sự tĩnh lặng, xóa bỏ sự tồn tại...",
						"thai": "เป็นการพักผ่อนที่บิดเบือน จมดิ่งทุกสิ่งในความเงียบสงบ ลบเลือนการมีอยู่ของสิ่งนั้น...",
						"hindi": "एक विकृत आराम। सब कुछ खामोशी में डुबो देना, अस्तित्व को ही मिटा देना..."
					},
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "막아야 해. 반드시.",
						"english": "We must stop it. At all costs.",
						"japanese": "止めなければ。必ず。",
						"chinese": "必须阻止。务必。",
						"french": "Il faut l'arrêter. Absolument.",
						"spanish": "Debemos detenerlo. Cueste lo que cueste.",
						"vietnamese": "Phải ngăn chặn. Bằng mọi giá.",
						"thai": "ต้องหยุดมันให้ได้ แน่นอน",
						"hindi": "इसे रोकना होगा। हर कीमत पर।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "봉인을 강화할 방법이 어딘가에 있을 겁니다. 이 유적 어딘가에…",
						"english": "There must be a way to strengthen the seal. Somewhere in these ruins...",
						"japanese": "封印を強化する方法がどこかにあるはずだ。この遺跡のどこかに…",
						"chinese": "一定有办法强化封印。就在这遗迹的某个地方……",
						"french": "Il doit y avoir un moyen de renforcer le sceau. Quelque part dans ces ruines...",
						"spanish": "Debe haber una forma de reforzar el sello. En algún lugar de estas ruinas...",
						"vietnamese": "Phải có cách để gia cố phong ấn. Ở đâu đó trong di tích này...",
						"thai": "ต้องมีวิธีเสริมความแข็งแกร่งของผนึกอยู่แน่ๆ ในซากปรักหักพังแห่งนี้...",
						"hindi": "सील को मजबूत करने का कोई तरीका होगा। इन खंडहरों में कहीं..."
					},
					"speaker": "cedar",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "cedar",
					"spot": [
						4,
						3
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "이 방은… '근원'의 힘이 가장 강하게 느껴지는 곳입니다. 봉인의 핵심부와 가깝죠.",
						"english": "This room... is where the 'Source's' power feels strongest. It's close to the heart of the seal.",
						"japanese": "この部屋は…『根源』の力が最も強く感じられる場所です。封印の核心部に近い。",
						"chinese": "这个房间……是‘本源’力量最强的地方。它靠近封印的核心。",
						"french": "Cette pièce... est l'endroit où le pouvoir de la 'Source' se fait le plus sentir. Elle est proche du cœur du sceau.",
						"spanish": "Esta habitación... es donde el poder de la 'Fuente' se siente más fuerte. Está cerca del núcleo del sello.",
						"vietnamese": "Căn phòng này... là nơi cảm nhận rõ nhất sức mạnh của 'Nguồn'. Nó gần với lõi của phong ấn.",
						"thai": "ห้องนี้... เป็นที่ที่สัมผัสได้ถึงพลังของ 'ต้นกำเนิด' ได้แรงที่สุด ใกล้กับใจกลางของผนึก",
						"hindi": "यह कमरा... वह जगह है जहाँ 'स्रोत' की शक्ति सबसे मजबूत महसूस होती है। यह सील के दिल के करीब है।"
					},
					"emotion": "sad",
					"speaker": "cedar",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "압도당할 것 같아… 온몸이 느려져.",
						"english": "I feel overwhelmed... my body's slowing down.",
						"japanese": "圧倒されそうだ…体が鈍る。",
						"chinese": "我快要被压垮了……身体变得迟钝。",
						"french": "Je me sens dépassé... mon corps ralentit.",
						"spanish": "Me siento abrumado... mi cuerpo se ralentiza.",
						"vietnamese": "Tôi cảm thấy choáng váng... cơ thể tôi đang chậm lại.",
						"thai": "รู้สึกเหมือนกำลังถูกครอบงำ... ร่างกายฉันช้าลงแล้ว",
						"hindi": "मैं अभिभूत महसूस कर रहा हूँ... मेरा शरीर धीमा पड़ रहा है।"
					},
					"type": "speech"
				},
				{
					"speaker": "cedar",
					"emotion": "angry",
					"content": {
						"korean": "서두르세요. '근원'이 완전히 깨어나면, 모든 것이 되돌릴 수 없게 됩니다.",
						"english": "Hurry! If 'The Source' fully awakens, everything will be irreversible.",
						"japanese": "急いでください。『根源』が完全に目覚めれば、全てが元に戻せなくなります。",
						"chinese": "快点！如果‘本源’完全苏醒，一切都将无法挽回。",
						"french": "Dépêchez-vous ! Si la 'Source' s'éveille complètement, tout deviendra irréversible.",
						"spanish": "¡Dense prisa! Si la 'Fuente' despierta por completo, todo será irreversible.",
						"vietnamese": "Hãy nhanh lên! Nếu 'Nguồn Cội' thức tỉnh hoàn toàn, mọi thứ sẽ không thể đảo ngược được nữa.",
						"thai": "รีบหน่อย! ถ้า 'ต้นกำเนิด' ตื่นขึ้นมาทั้งหมด ทุกอย่างจะย้อนกลับไม่ได้แล้ว",
						"hindi": "जल्दी करो! यदि 'स्रोत' पूरी तरह से जागृत हो गया, तो सब कुछ अपरिवर्तनीय हो जाएगा।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "진정한 무위… 그게 뭔데.",
						"english": "True inaction... what is that?",
						"japanese": "真の無為…それが何だ。",
						"chinese": "真正的无为……那是什么？",
						"french": "La véritable inaction... qu'est-ce que c'est ?",
						"spanish": "Verdadera inacción... ¿qué es eso?",
						"vietnamese": "Vô vi đích thực... đó là gì?",
						"thai": "ความว่างเปล่าที่แท้จริง... มันคืออะไรกันแน่",
						"hindi": "सच्ची निष्क्रियता... वह क्या है?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "꿈속에서… 잊혀진 목소리가 속삭이는 소리가 들리지 않으십니까? 그것이 '근원'의 유혹입니다.",
						"english": "In your dreams... don't you hear forgotten voices whispering? That is the temptation of 'The Source'.",
						"japanese": "夢の中で…忘れられた声が囁くのが聞こえませんか？それが『根源』の誘惑です。",
						"chinese": "在梦中……你没听到被遗忘的声音在低语吗？那是‘本源’的诱惑。",
						"french": "Dans vos rêves... n'entendez-vous pas des voix oubliées murmurer ? C'est la tentation de la 'Source'.",
						"spanish": "En tus sueños... ¿no escuchas voces olvidadas susurrando? Esa es la tentación de la 'Fuente'.",
						"vietnamese": "Trong giấc mơ... bạn không nghe thấy những giọng nói bị lãng quên đang thì thầm sao? Đó chính là sự cám dỗ của 'Nguồn Cội'.",
						"thai": "ในความฝัน... ท่านไม่ได้ยินเสียงกระซิบของเสียงที่ถูกลืมเลือนหรือ? นั่นคือสิ่งล่อลวงของ 'ต้นกำเนิด'",
						"hindi": "अपने सपनों में... क्या आपको भूली हुई आवाज़ें फुसफुसाती हुई नहीं सुनाई देतीं? वही 'स्रोत' का प्रलोभन है।"
					},
					"speaker": "cedar"
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "봉인의 핵심부에 다다르자, 거대한 그림자가 앞을 가로막았다.",
						"english": "Upon reaching the core of the seal, a colossal shadow blocked our path.",
						"japanese": "封印の核心部に達した時、巨大な影が道を阻んだ。",
						"chinese": "抵达封印核心时，一道巨大的身影挡住了去路。",
						"french": "En atteignant le cœur du sceau, une ombre colossale barra notre chemin.",
						"spanish": "Al llegar al núcleo del sello, una sombra colosal nos bloqueó el paso.",
						"vietnamese": "Khi đến trung tâm của phong ấn, một bóng đen khổng lồ đã chắn ngang đường.",
						"thai": "เมื่อไปถึงแกนกลางของผนึก เงายักษ์ก็ปรากฏขึ้นขวางทาง",
						"hindi": "मुहर के केंद्र में पहुँचने पर, एक विशाल छाया ने रास्ता रोक दिया।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "어리석은 자들… 왜 나의 안식을 방해하는가?",
						"english": "Foolish mortals... why do you disturb my slumber?",
						"japanese": "愚かな者たち…なぜ私の安息を妨げる？",
						"chinese": "愚蠢的凡人……为何打扰我的安宁？",
						"french": "Fous... pourquoi troublez-vous mon repos ?",
						"spanish": "Insensatos... ¿por qué perturbáis mi descanso?",
						"vietnamese": "Những kẻ ngu ngốc... tại sao các ngươi lại quấy rầy giấc ngủ của ta?",
						"thai": "พวกโง่เขลา... เหตุใดจึงมารบกวนการพักผ่อนของข้า?",
						"hindi": "मूर्खों... तुम मेरी शांति क्यों भंग करते हो?"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "네가… '고요함의 근원'의 사념체인가?",
						"english": "Are you... the manifestation of 'The Source of Stillness'?",
						"japanese": "お前が…『静寂の根源』の思念体か？",
						"chinese": "你就是……‘寂静本源’的思念体吗？",
						"french": "Es-tu... la manifestation de la 'Source de la Quiétude' ?",
						"spanish": "¿Eres tú... la manifestación de la 'Fuente de la Calma'?",
						"vietnamese": "Ngươi... là thể tư niệm của 'Nguồn Cội Tĩnh Lặng' sao?",
						"thai": "เจ้าคือ... ร่างกายแห่งความคิดของ 'ต้นกำเนิดแห่งความเงียบสงบ' หรือ?",
						"hindi": "क्या तुम... 'शांति के स्रोत' के विचाररूप हो?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "나는 그저, 완벽한 무위를 실현하려는 존재. 너희의 의지는… 불협화음일 뿐.",
						"english": "I am merely an entity seeking to achieve perfect inaction. Your will... is nothing but discord.",
						"japanese": "私はただ、完璧な無為を実現せんとする存在。お前たちの意思は…不協和音に過ぎない。",
						"chinese": "我不过是追求完美无为的存在。你们的意志……不过是噪音罢了。",
						"french": "Je ne suis qu'une entité cherchant à atteindre l'inaction parfaite. Votre volonté... n'est que discorde.",
						"spanish": "No soy más que una entidad que busca alcanzar la inacción perfecta. Vuestra voluntad... no es más que discordia.",
						"vietnamese": "Ta chỉ là một thực thể tìm cách hiện thực hóa sự vô vi hoàn hảo. Ý chí của các ngươi... chỉ là sự bất hòa mà thôi.",
						"thai": "ข้าเป็นเพียงผู้ที่พยายามทำให้ความว่างเปล่าที่สมบูรณ์แบบเป็นจริง ความตั้งใจของพวกเจ้า... เป็นแค่ความไม่ลงรอยกันเท่านั้น",
						"hindi": "मैं केवल एक ऐसी सत्ता हूँ जो पूर्ण निष्क्रियता प्राप्त करना चाहती है। तुम्हारी इच्छा... केवल एक असंगति है।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "cedar",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "조심하세요! 저것이 '근원'의 힘을 빌린 존재입니다!",
						"english": "Be careful! That is an entity wielding 'The Source's' power!",
						"japanese": "気を付けてください！あれは『根源』の力を借りた存在です！",
						"chinese": "小心！那是借助‘本源’力量的存在！",
						"french": "Faites attention ! C'est une entité qui utilise le pouvoir de la 'Source' !",
						"spanish": "¡Cuidado! ¡Esa es una entidad que ha tomado prestado el poder de la 'Fuente'!",
						"vietnamese": "Hãy cẩn thận! Đó là một thực thể mượn sức mạnh của 'Nguồn Cội'!",
						"thai": "ระวัง! นั่นคือสิ่งมีชีวิตที่ยืมพลังของ 'ต้นกำเนิด' มา!",
						"hindi": "सावधान! वह 'स्रोत' की शक्ति का उपयोग करने वाली एक सत्ता है!"
					},
					"emotion": "angry",
					"speaker": "cedar"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "그 왜곡된 안식을 막을 거야!",
						"english": "I'll stop that distorted rest!",
						"japanese": "その歪んだ安息を止める！",
						"chinese": "我要阻止那扭曲的安宁！",
						"french": "J'arrêterai ce repos déformé !",
						"spanish": "¡Detendré ese descanso distorsionado!",
						"vietnamese": "Tôi sẽ ngăn chặn giấc ngủ bị bóp méo đó!",
						"thai": "ข้าจะหยุดยั้งการพักผ่อนที่บิดเบือนนั่น!",
						"hindi": "मैं उस विकृत शांति को रोकूँगा!"
					},
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "좋다. 그럼… 너희의 의지가, 나의 고요함을 거스를 수 있는지 시험해보아라.",
						"english": "Good. Then... let's see if your will can defy my serenity.",
						"japanese": "よかろう。ならば…貴様らの意思が、我が静寂に逆らえるか試してみるがいい。",
						"chinese": "好。那么……就来试试看，你们的意志能否违抗我的寂静。",
						"french": "Bien. Alors... voyez si votre volonté peut défier ma sérénité.",
						"spanish": "Bien. Entonces... probad si vuestra voluntad puede desafiar mi quietud.",
						"vietnamese": "Được thôi. Vậy thì... hãy xem ý chí của các ngươi có thể chống lại sự tĩnh lặng của ta không.",
						"thai": "ดี. เช่นนั้น... จงมาลองดูซิว่าเจตจำนงของพวกเจ้าจะต้านทานความสงบของข้าได้หรือไม่",
						"hindi": "अच्छा। तो फिर... देखें कि क्या तुम्हारी इच्छा मेरी शांति को भंग कर सकती है।"
					},
					"type": "speech"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "크윽… 나의 고요함은… 영원히…",
						"english": "Ugh... My serenity is... eternal...",
						"japanese": "くっ… 我が静寂は… 永遠に…",
						"chinese": "呃啊……我的寂静……将永远……",
						"french": "Ugh... Ma sérénité est... éternelle...",
						"spanish": "Ugh... Mi quietud es... eterna...",
						"vietnamese": "Khụ... Sự tĩnh lặng của ta... vĩnh viễn...",
						"thai": "อึก... ความสงบของข้า... ชั่วนิรันดร์...",
						"hindi": "उफ़... मेरी शांति... हमेशा के लिए..."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "막았어… 잠시 동안은.",
						"english": "We stopped it... for a moment.",
						"japanese": "止めた… しばらくの間は。",
						"chinese": "阻止了……暂时而已。",
						"french": "Nous l'avons arrêtée... pour un instant.",
						"spanish": "Lo detuvimos... por un momento.",
						"vietnamese": "Đã ngăn lại... được một lúc.",
						"thai": "หยุดไว้แล้ว... ชั่วขณะหนึ่ง",
						"hindi": "रोक दिया... फिलहाल के लिए।"
					},
					"speaker": "character_any"
				},
				{
					"spot": [
						2,
						2
					],
					"type": "direction",
					"action": "enter",
					"speaker": "cedar",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "아직… 완전한 봉인은 아닙니다. '근원'은 아직 완전히 소멸하지 않았어요.",
						"english": "It's not... a complete seal yet. The 'Source' hasn't fully vanished.",
						"japanese": "まだ…完全な封印ではありません。『根源』はまだ完全に消滅していません。",
						"chinese": "这还……不是完全的封印。『根源』还没有完全消灭。",
						"french": "Ce n'est pas... un sceau complet encore. La 'Source' n'a pas encore totalement disparu.",
						"spanish": "Todavía no... es un sello completo. El 'Origen' aún no ha desaparecido por completo.",
						"vietnamese": "Vẫn chưa... là phong ấn hoàn chỉnh. 'Nguồn gốc' vẫn chưa hoàn toàn biến mất.",
						"thai": "ยังไม่... ใช่การผนึกที่สมบูรณ์ 'ต้นกำเนิด' ยังไม่หายไปโดยสิ้นเชิง",
						"hindi": "अभी... पूरी तरह से सील नहीं हुआ है। 'स्रोत' अभी पूरी तरह से नष्ट नहीं हुआ है।"
					},
					"emotion": "sad",
					"speaker": "cedar",
					"type": "speech"
				},
				{
					"content": {
						"korean": "사념체는 사라졌지만, 숲의 깊은 곳에서는 여전히 알 수 없는 고요함이 흘러나왔다. 진정한 '근원'을 찾아야 한다.",
						"english": "The specter vanished, but an unknown serenity still flowed from the depths of the forest. We must find the true 'Source'.",
						"japanese": "思念体は消えたが、森の奥深くからは依然として未知の静寂が流れ出ていた。真の『根源』を見つけなければならない。",
						"chinese": "思念体虽然消失了，但森林深处依然弥漫着未知的寂静。必须找到真正的『根源』。",
						"french": "Le spectre a disparu, mais une sérénité inconnue émanait toujours des profondeurs de la forêt. Nous devons trouver la véritable 'Source'.",
						"spanish": "El ente de pensamiento desapareció, pero una quietud desconocida aún emanaba de las profundidades del bosque. Debemos encontrar el verdadero 'Origen'.",
						"vietnamese": "Tư niệm thể đã biến mất, nhưng từ sâu thẳm khu rừng vẫn toát ra sự tĩnh lặng bí ẩn. Phải tìm ra 'Nguồn gốc' thực sự.",
						"thai": "ร่างวิญญาณหายไปแล้ว แต่ความสงบที่ไม่อาจหยั่งรู้ได้ยังคงไหลออกมาจากส่วนลึกของป่า เราต้องค้นหา 'ต้นกำเนิด' ที่แท้จริง",
						"hindi": "विचार-सत्ता गायब हो गई, लेकिन जंगल की गहराई से अभी भी एक अज्ञात शांति बह रही थी। हमें सच्चे 'स्रोत' को खोजना होगा।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "슬로우의… 진정한 의도는… 뭐였을까? 아직 풀리지 않았어.",
						"english": "Slow's... true intention... what was it? It's still unsolved.",
						"japanese": "スロウの… 真の意図は… 何だったのだろう？ まだ解明されていない。",
						"chinese": "斯洛的……真正意图……究竟是什么？至今仍未解开。",
						"french": "La véritable intention de Slow... qu'était-elle ? Ce n'est pas encore résolu.",
						"spanish": "¿Cuál era la verdadera intención de Slow...? Aún no se ha revelado.",
						"vietnamese": "Ý đồ thật sự của Slow... là gì? Vẫn chưa được giải đáp.",
						"thai": "เจตนาที่แท้จริงของสโลว์... คืออะไรกันแน่? ยังไขปริศนาไม่ได้",
						"hindi": "स्लो का... असली इरादा... क्या था? अभी तक सुलझा नहीं है।"
					},
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "그 의문은 다음 장소로 향하는 발걸음을 재촉했다.",
						"english": "That question hastened our steps towards the next location.",
						"japanese": "その疑問は、次の場所へと向かう足取りを速めた。",
						"chinese": "那个疑问催促着我们走向下一个地点。",
						"french": "Cette question accéléra nos pas vers le prochain lieu.",
						"spanish": "Esa pregunta apresuró nuestros pasos hacia el siguiente lugar.",
						"vietnamese": "Câu hỏi đó đã thúc giục bước chân chúng tôi đến địa điểm tiếp theo.",
						"thai": "ข้อสงสัยนั้นเร่งเร้าให้ก้าวเดินไปยังสถานที่ต่อไป",
						"hindi": "उस सवाल ने अगले स्थान की ओर हमारे कदमों को तेज़ कर दिया।"
					},
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "고요함의 그림자가 모든 것을 집어삼켰다.",
						"english": "The shadow of serenity devoured everything.",
						"japanese": "静寂の影がすべてを飲み込んだ。",
						"chinese": "寂静的阴影吞噬了一切。",
						"french": "L'ombre de la sérénité a tout dévoré.",
						"spanish": "La sombra de la quietud lo devoró todo.",
						"vietnamese": "Bóng tối tĩnh lặng nuốt chửng mọi thứ.",
						"thai": "เงามืดแห่งความสงบกลืนกินทุกสิ่ง",
						"hindi": "शांति की छाया ने सब कुछ निगल लिया।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "너희의 의지는… 결국 나의 고요함 속에서 사라질 것이다.",
						"english": "Your will... will ultimately vanish within my serenity.",
						"japanese": "貴様らの意思は… 結局、我が静寂の中で消え去るだろう。",
						"chinese": "你们的意志……终将消失在我的寂静之中。",
						"french": "Votre volonté... finira par disparaître dans ma sérénité.",
						"spanish": "Vuestra voluntad... finalmente desaparecerá en mi quietud.",
						"vietnamese": "Ý chí của các ngươi... rốt cuộc sẽ biến mất trong sự tĩnh lặng của ta.",
						"thai": "เจตจำนงของพวกเจ้า... ในที่สุดก็จะสลายไปในความสงบของข้า",
						"hindi": "तुम्हारी इच्छा... अंततः मेरी शांति में विलीन हो जाएगी।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "…아직… 포기할 수 없어.",
						"english": "...I still... can't give up.",
						"japanese": "…まだ…諦められない。",
						"chinese": "……还……不能放弃。",
						"french": "...Je ne peux pas... encore abandonner.",
						"spanish": "...Aún... no puedo rendirme.",
						"vietnamese": "...Vẫn chưa... thể bỏ cuộc.",
						"thai": "...ยัง... ยอมแพ้ไม่ได้",
						"hindi": "...अभी... हार नहीं मान सकता।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"speaker": "cedar",
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "cedar",
					"emotion": "sad",
					"content": {
						"korean": "안 돼요! 아직은…",
						"english": "No! Not yet...",
						"japanese": "だめだ！まだだ…",
						"chinese": "不！还没…",
						"french": "Non ! Pas encore...",
						"spanish": "¡No! Todavía no...",
						"vietnamese": "Không! Chưa đâu...",
						"thai": "ไม่นะ! ยังก่อน...",
						"hindi": "नहीं! अभी नहीं..."
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "다시… 다시 일어설 거야!",
						"english": "Again... I'll rise again!",
						"japanese": "もう一度… また立ち上がる！",
						"chinese": "再次… 我会再次站起来！",
						"french": "Encore... Je me relèverai !",
						"spanish": "Otra vez... ¡Me levantaré de nuevo!",
						"vietnamese": "Lại nữa... Tôi sẽ đứng dậy lần nữa!",
						"thai": "อีกครั้ง... ฉันจะลุกขึ้นอีกครั้ง!",
						"hindi": "फिर से... मैं फिर उठूंगा!"
					},
					"emotion": "angry",
					"type": "speech"
				}
			]
		}
	]
} as const;
