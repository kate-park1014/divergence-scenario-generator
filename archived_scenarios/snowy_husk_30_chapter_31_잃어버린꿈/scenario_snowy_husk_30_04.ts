export const scenario_snowy_husk_30_04 = {
	"scenario_id": "snowy_husk_30_04",
	"order": 4,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"borealis": {
			"id": "mon_8dc13eb3-9244-4413-a74b-ee25681ceab5",
			"name": {
				"korean": "보레아리스",
				"english": "Borealis",
				"japanese": "ボレアリス",
				"chinese": "博瑞利斯",
				"french": "Boréalis",
				"spanish": "Borealis",
				"vietnamese": "Borealis",
				"thai": "โบเรียลิส",
				"hindi": "बोरियालिस"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/bd557ed6-ee94-4ed6-7da8-6f9770585b00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2a79793b-650a-478a-00e2-38f8c8730a00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"영원한 눈보라 아래, 숨겨진 진실이 얼어붙었다.",
			"허스크, 그 비극의 이름 뒤에 가려진 것.",
			"고대 현자는 속삭였다. 이 괴물은 희생의 결과라고.",
			"그리고 얼어붙은 일기장 속에서, 아이의 염원이 흐느꼈다.",
			"뒤얽힌 운명의 실타래는 과연 풀릴 수 있을까."
		],
		"english": [
			"Beneath the eternal blizzard, a hidden truth froze.",
			"Husk, what lies hidden behind that tragic name.",
			"The ancient sage whispered: This monster is the result of sacrifice.",
			"And within the frozen diary, a child's wish wept.",
			"Can the tangled threads of fate ever be unraveled?"
		],
		"japanese": [
			"永遠の吹雪の下、隠された真実が凍てついた。",
			"ハスク、その悲劇の名に隠されたもの。",
			"古代の賢者は囁いた。この怪物は犠牲の産物だと。",
			"そして凍てついた日記の中で、子供の願いがすすり泣いた。",
			"絡み合った運命の糸は、果たして解けるのだろうか。"
		],
		"chinese": [
			"在永恒的暴风雪下，隐藏的真相被冰封。",
			"赫斯克，那悲剧之名背后隐藏着什么。",
			"古代贤者低语：这怪物是牺牲的结果。",
			"在冰封的日记中，孩子的愿望在哭泣。",
			"纠缠的命运之线，究竟能否解开？"
		],
		"french": [
			"Sous l'éternel blizzard, une vérité cachée a gelé.",
			"Husk, ce qui se cache derrière ce nom tragique.",
			"L'ancien sage murmura : Ce monstre est le résultat d'un sacrifice.",
			"Et dans le journal gelé, le souhait d'un enfant pleurait.",
			"Les fils emmêlés du destin pourront-ils un jour être démêlés ?"
		],
		"spanish": [
			"Bajo la eterna tormenta de nieve, una verdad oculta se congeló.",
			"Husk, lo que se esconde tras ese nombre trágico.",
			"El antiguo sabio susurró: Este monstruo es el resultado de un sacrificio.",
			"Y dentro del diario congelado, el deseo de un niño lloró.",
			"¿Podrán desenredarse alguna vez los hilos enredados del destino?"
		],
		"vietnamese": [
			"Dưới bão tuyết vĩnh cửu, sự thật ẩn giấu đã đóng băng.",
			"Husk, điều ẩn giấu sau cái tên bi kịch ấy.",
			"Hiền giả cổ đại thì thầm: Quái vật này là kết quả của sự hy sinh.",
			"Và trong cuốn nhật ký đóng băng, ước nguyện của một đứa trẻ đã khóc nấc.",
			"Liệu những sợi chỉ số phận rối ren có thể được gỡ bỏ?"
		],
		"thai": [
			"ใต้พายุหิมะนิรันดร์ ความจริงที่ซ่อนอยู่ได้กลายเป็นน้ำแข็ง",
			"ฮัสก์ สิ่งที่ซ่อนอยู่เบื้องหลังชื่ออันน่าเศร้านั้น",
			"นักปราชญ์โบราณกระซิบ: สัตว์ประหลาดนี้เป็นผลมาจากการเสียสละ",
			"และในสมุดบันทึกที่กลายเป็นน้ำแข็ง ความปรารถนาของเด็กคนหนึ่งได้ร่ำไห้",
			"สายใยแห่งโชคชะตาที่พันกันจะคลี่คลายได้หรือไม่?"
		],
		"hindi": [
			"शाश्वत बर्फीले तूफान के नीचे, एक छिपा हुआ सच जम गया।",
			"हस्क, उस दुखद नाम के पीछे क्या छिपा है।",
			"प्राचीन ऋषि ने फुसफुसाया: यह राक्षस बलिदान का परिणाम है।",
			"और जमी हुई डायरी में, एक बच्चे की इच्छा रो पड़ी।",
			"क्या नियति के उलझे हुए धागे कभी सुलझ पाएंगे?"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거대한 얼음 구조물이 고대 바이킹의 흔적을 삼켰다. 차가운 공기가 모든 것을 덮었다.",
						"english": "A colossal ice structure swallowed ancient Viking traces. Cold air enveloped everything.",
						"japanese": "巨大な氷の建造物が古代ヴァイキングの痕跡を飲み込んだ。冷たい空気が全てを覆った。",
						"chinese": "巨大的冰结构吞噬了古老的维京痕迹。冰冷的空气笼罩了一切。",
						"french": "Une structure de glace colossale a englouti les traces des anciens Vikings. L'air froid enveloppait tout.",
						"spanish": "Una colosal estructura de hielo engulló las huellas de los antiguos vikingos. El aire frío lo envolvió todo.",
						"vietnamese": "Một cấu trúc băng khổng lồ nuốt chửng dấu vết của người Viking cổ đại. Không khí lạnh bao trùm mọi thứ.",
						"thai": "โครงสร้างน้ำแข็งมหึมากำจัดร่องรอยของชาวไวกิ้งโบราณ อากาศเย็นยะเยือกปกคลุมทุกสิ่ง",
						"hindi": "एक विशाल बर्फीली संरचना ने प्राचीन वाइकिंग निशान निगल लिए। ठंडी हवा ने सब कुछ ढक दिया।"
					},
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "이 추위 속에 뭐가 있는 거지?",
						"english": "What lies within this cold?",
						"japanese": "この寒さの中に何があるんだ？",
						"chinese": "这寒冷之中有什么？",
						"french": "Qu'y a-t-il dans ce froid ?",
						"spanish": "¿Qué hay en este frío?",
						"vietnamese": "Có gì trong cái lạnh này?",
						"thai": "มีอะไรอยู่ในความหนาวเย็นนี้?",
						"hindi": "इस ठंड में क्या है?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						3
					],
					"speaker": "borealis",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "기다리고 있었습니다. 허스크의 진실을 알고 싶어 하는 이방인이여.",
						"english": "I have been waiting. Stranger, who seeks the truth of Husk.",
						"japanese": "待っていました。ハスクの真実を知りたがる異邦人よ。",
						"chinese": "我一直在等你。寻求赫斯克真相的异乡人啊。",
						"french": "J'attendais. Étranger, toi qui cherches la vérité sur Husk.",
						"spanish": "He estado esperando. Forastero, tú que buscas la verdad de Husk.",
						"vietnamese": "Tôi đã chờ đợi. Hỡi người lạ, kẻ muốn biết sự thật về Husk.",
						"thai": "ข้าเฝ้ารอคอยอยู่ คนแปลกหน้าผู้แสวงหาความจริงของฮัสก์",
						"hindi": "मैं इंतज़ार कर रहा था। अजनबी, जो हस्क का सच जानना चाहता है।"
					},
					"speaker": "borealis"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이곳의 고대 문헌들은 단순한 괴물이 아니라고 말합니다.",
						"english": "The ancient texts here say it's no mere monster.",
						"japanese": "ここの古文書は、それがただの怪物ではないと語っている。",
						"chinese": "这里记载的古老文献说，它并非简单的怪物。",
						"french": "Les anciens textes ici disent que ce n'est pas un simple monstre.",
						"spanish": "Los textos antiguos aquí dicen que no es un simple monstruo.",
						"vietnamese": "Những văn bản cổ đại ở đây nói rằng nó không phải là một con quái vật đơn thuần.",
						"thai": "เอกสารโบราณที่นี่กล่าวว่ามันไม่ใช่แค่สัตว์ประหลาดธรรมดา",
						"hindi": "यहाँ के प्राचीन ग्रंथ कहते हैं कि यह सिर्फ एक राक्षस नहीं है।"
					},
					"speaker": "borealis",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "borealis",
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 고대 문헌을 보십시오. 허스크는 단순한 저주가 아닙니다.",
						"english": "Look at this ancient text. Husk is no mere curse.",
						"japanese": "この古文書を見てください。ハスクは単なる呪いではない。",
						"chinese": "看看这份古老文献。赫斯克并非简单的诅咒。",
						"french": "Regardez cet ancien texte. Husk n'est pas une simple malédiction.",
						"spanish": "Mire este texto antiguo. Husk no es una mera maldición.",
						"vietnamese": "Hãy xem văn bản cổ đại này. Husk không phải là một lời nguyền đơn thuần.",
						"thai": "ดูเอกสารโบราณนี้สิ ฮัสก์ไม่ใช่แค่คำสาปแช่งธรรมดา",
						"hindi": "इस प्राचीन ग्रंथ को देखिए। हस्क महज़ एक अभिशाप नहीं है।"
					},
					"speaker": "borealis",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 대체 뭔데?",
						"english": "Then what is it?",
						"japanese": "じゃあ、一体何なの？",
						"chinese": "那到底是什么？",
						"french": "Alors, qu'est-ce que c'est ?",
						"spanish": "¿Entonces qué es?",
						"vietnamese": "Vậy thì nó là cái gì?",
						"thai": "แล้วมันคืออะไรกันแน่?",
						"hindi": "तो फिर ये क्या है?"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "borealis",
					"content": {
						"korean": "어떤 비극적인 희생의 결과일 가능성이 높습니다. 영혼의 염원이 뒤틀려 괴물이 된 것이죠.",
						"english": "It's likely the result of a tragic sacrifice. A soul's fervent wish twisted, turning it into a monster.",
						"japanese": "悲劇的な犠牲の結果である可能性が高い。魂の願いが歪み、怪物と化したのでしょう。",
						"chinese": "这很可能是一场悲剧性牺牲的结果。灵魂的愿望被扭曲，变成了怪物。",
						"french": "C'est probablement le résultat d'un sacrifice tragique. Le vœu fervent d'une âme s'est tordu, la transformant en monstre.",
						"spanish": "Es probable que sea el resultado de un sacrificio trágico. El ferviente deseo de un alma se retorció, convirtiéndola en un monstruo.",
						"vietnamese": "Rất có thể đó là kết quả của một sự hy sinh bi thảm. Một ước nguyện mãnh liệt của linh hồn đã bị bóp méo, biến thành quái vật.",
						"thai": "น่าจะเป็นผลลัพธ์ของการเสียสละอันน่าเศร้า ความปรารถนาอันแรงกล้าของวิญญาณบิดเบี้ยว กลายเป็นสัตว์ประหลาด",
						"hindi": "यह किसी दुखद बलिदान का परिणाम होने की संभावना है। एक आत्मा की प्रबल इच्छा विकृत होकर एक राक्षस बन गई।"
					}
				},
				{
					"type": "speech",
					"speaker": "borealis",
					"content": {
						"korean": "특히… 이 구절. '엄마를 찾는 아이의 울음이 얼음을 녹인다'고 쓰여 있습니다.",
						"english": "Especially… this passage. It says, 'A child's cry, searching for its mother, melts the ice.'",
						"japanese": "特に…この一節。『母親を探す子供の泣き声が氷を溶かす』と書かれています。",
						"chinese": "特别是……这一段。上面写着，‘孩子寻找母亲的哭声融化了冰。’",
						"french": "Surtout… ce passage. Il est écrit : « Le cri d'un enfant, cherchant sa mère, fait fondre la glace ».",
						"spanish": "Especialmente… este pasaje. Dice: 'El llanto de un niño, buscando a su madre, derrite el hielo'.",
						"vietnamese": "Đặc biệt là… đoạn này. Nó viết: 'Tiếng khóc của đứa trẻ tìm mẹ làm tan chảy băng'.",
						"thai": "โดยเฉพาะ… ข้อความนี้ มันเขียนว่า 'เสียงร้องของเด็กที่ตามหาแม่ละลายน้ำแข็ง'",
						"hindi": "खासकर… यह अंश। इसमें लिखा है, 'माँ को ढूंढते बच्चे का रोना बर्फ पिघला देता है।'"
					},
					"emotion": "sad"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "아이의 울음…?",
						"english": "A child's cry…?",
						"japanese": "子供の泣き声…？",
						"chinese": "孩子的哭声……？",
						"french": "Le cri d'un enfant… ?",
						"spanish": "¿El llanto de un niño…?",
						"vietnamese": "Tiếng khóc của đứa trẻ…?",
						"thai": "เสียงร้องของเด็ก…?",
						"hindi": "एक बच्चे का रोना…?"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "borealis",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "고대 일기장을 해독했습니다. 여기 쓰인 내용이 정확하다면…",
						"english": "I've deciphered the ancient diary. If what's written here is accurate…",
						"japanese": "古代の日記を解読しました。ここに書かれている内容が正確なら…",
						"chinese": "我已经破译了这本古老的日记。如果上面写的是真的……",
						"french": "J'ai déchiffré l'ancien journal. Si ce qui est écrit ici est exact…",
						"spanish": "He descifrado el antiguo diario. Si lo que está escrito aquí es exacto…",
						"vietnamese": "Tôi đã giải mã được cuốn nhật ký cổ. Nếu những gì viết ở đây là chính xác…",
						"thai": "ฉันถอดรหัสไดอารี่โบราณได้แล้ว ถ้าสิ่งที่เขียนไว้ที่นี่ถูกต้อง…",
						"hindi": "मैंने प्राचीन डायरी को समझा है। अगर यहाँ लिखा हुआ सच है तो…"
					},
					"speaker": "borealis",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "borealis",
					"content": {
						"korean": "허스크와 관련된 인형의 주인은 어린아이였을 겁니다.",
						"english": "The owner of the doll related to the Husk must have been a child.",
						"japanese": "ハスクに関わる人形の持ち主は、子供だったのでしょう。",
						"chinese": "与赫斯克相关的玩偶的主人一定是个孩子。",
						"french": "La propriétaire de la poupée liée au Spectre devait être une enfant.",
						"spanish": "La dueña de la muñeca relacionada con el Cascarón debió ser una niña.",
						"vietnamese": "Chủ nhân của con búp bê liên quan đến Husk chắc hẳn là một đứa trẻ.",
						"thai": "เจ้าของตุ๊กตาที่เกี่ยวข้องกับฮัสก์น่าจะเป็นเด็ก",
						"hindi": "हस्क से संबंधित गुड़िया का मालिक एक बच्चा रहा होगा।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "아이가… 괴물이 된 거야?",
						"english": "The child… became a monster?",
						"japanese": "子供が…怪物になったの？",
						"chinese": "孩子……变成了怪物？",
						"french": "L'enfant… est devenu un monstre ?",
						"spanish": "¿El niño… se convirtió en un monstruo?",
						"vietnamese": "Đứa trẻ… đã trở thành quái vật?",
						"thai": "เด็ก… กลายเป็นสัตว์ประหลาด?",
						"hindi": "बच्चा… एक राक्षस बन गया?"
					}
				},
				{
					"emotion": "sad",
					"speaker": "borealis",
					"content": {
						"korean": "그리움과 절망이 뒤섞여, 순수한 염원이 뒤틀린 형태를 띠게 된 거죠.",
						"english": "Longing and despair intertwined, causing a pure wish to take on a twisted form.",
						"japanese": "懐かしさと絶望が入り混じり、純粋な願いが歪んだ形をとったのでしょう。",
						"chinese": "思念与绝望交织，纯粹的愿望因此扭曲变形。",
						"french": "Le désir et le désespoir se sont entrelacés, transformant un vœu pur en une forme tordue.",
						"spanish": "La añoranza y la desesperación se entrelazaron, haciendo que un deseo puro tomara una forma retorcida.",
						"vietnamese": "Nỗi nhớ và sự tuyệt vọng đan xen, khiến một ước nguyện trong sáng mang một hình dạng méo mó.",
						"thai": "ความโหยหาและความสิ้นหวังผสมผสานกัน ทำให้ความปรารถนาอันบริสุทธิ์กลายเป็นรูปแบบที่บิดเบี้ยว",
						"hindi": "ललक और निराशा आपस में घुलमिल गए, जिससे एक शुद्ध इच्छा ने एक विकृत रूप ले लिया।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "너무 잔인해…",
						"english": "Too cruel…",
						"japanese": "あまりにも残酷だ…",
						"chinese": "太残忍了……",
						"french": "Trop cruel…",
						"spanish": "Demasiado cruel…",
						"vietnamese": "Thật tàn nhẫn…",
						"thai": "โหดร้ายเกินไป…",
						"hindi": "बहुत क्रूर है…"
					},
					"emotion": "sad"
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
					"type": "direction",
					"action": "enter",
					"speaker": "borealis"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이제 더 이상 피할 수 없습니다. 진실은 저 너머에 있습니다.",
						"english": "There's no escaping it now. The truth lies beyond.",
						"japanese": "もう逃れることはできません。真実はあの先にあります。",
						"chinese": "现在无法再逃避了。真相就在前方。",
						"french": "Il n'y a plus moyen de s'échapper maintenant. La vérité est au-delà.",
						"spanish": "Ya no hay escape. La verdad se encuentra más allá.",
						"vietnamese": "Không thể trốn tránh được nữa. Sự thật nằm ở phía bên kia.",
						"thai": "ไม่มีทางหนีอีกแล้ว ความจริงอยู่เบื้องหลัง",
						"hindi": "अब और बच नहीं सकते। सच उस पार है।"
					},
					"speaker": "borealis"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "허스크를 만나야 하는 거잖아.",
						"english": "We must meet Husk.",
						"japanese": "ハスクに会わなければならないのですよね。",
						"chinese": "我们必须去见赫斯克。",
						"french": "Nous devons rencontrer Husk.",
						"spanish": "Tenemos que encontrarnos con Husk.",
						"vietnamese": "Chúng ta phải gặp Husk mà.",
						"thai": "เราต้องไปพบฮัสก์ใช่ไหม?",
						"hindi": "हमें हस्क से मिलना है।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "예. 하지만 무의미한 전투는 피해야 합니다.",
						"english": "Yes. But we must avoid meaningless combat.",
						"japanese": "ええ。ですが、無意味な戦闘は避けるべきです。",
						"chinese": "是的。但我们必须避免毫无意义的战斗。",
						"french": "Oui. Mais nous devons éviter les combats inutiles.",
						"spanish": "Sí. Pero debemos evitar el combate sin sentido.",
						"vietnamese": "Vâng. Nhưng chúng ta phải tránh những trận chiến vô nghĩa.",
						"thai": "ครับ/ค่ะ แต่เราต้องหลีกเลี่ยงการต่อสู้ที่ไร้ความหมาย",
						"hindi": "हाँ। लेकिन हमें व्यर्थ की लड़ाई से बचना चाहिए।"
					},
					"speaker": "borealis",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "그 안에는 아직, 아이의 순수한 마음이 남아있을지도 모릅니다.",
						"english": "Inside, a child's pure heart might still remain.",
						"japanese": "その中にはまだ、子供の純粋な心が残っているかもしれません。",
						"chinese": "或许，他内心深处仍存有孩子的纯真。",
						"french": "À l'intérieur, un cœur pur d'enfant pourrait encore subsister.",
						"spanish": "Quizás, dentro de él, aún quede el corazón puro de un niño.",
						"vietnamese": "Có lẽ bên trong đó, trái tim thuần khiết của một đứa trẻ vẫn còn.",
						"thai": "ข้างในนั้น อาจจะยังหลงเหลือหัวใจอันบริสุทธิ์ของเด็กอยู่ก็ได้",
						"hindi": "शायद उसके अंदर अभी भी एक बच्चे का शुद्ध हृदय बचा हो।"
					},
					"speaker": "borealis",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…가야 해.",
						"english": "...We must go.",
						"japanese": "…行かなければ。",
						"chinese": "…我们得走了。",
						"french": "...Il faut y aller.",
						"spanish": "...Tenemos que irnos.",
						"vietnamese": "...Phải đi thôi.",
						"thai": "...ต้องไปแล้ว.",
						"hindi": "...हमें जाना होगा।"
					},
					"speaker": "character_any",
					"emotion": "base"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "고맙다… 이제야… 편히 잠들 수 있겠어….",
						"english": "Thank you... Now... I can finally rest in peace...",
						"japanese": "ありがとう…これで…安らかに眠れる…。",
						"chinese": "谢谢你…现在…我终于可以安息了…。",
						"french": "Merci... Maintenant... je peux enfin reposer en paix...",
						"spanish": "Gracias... Ahora... por fin podré descansar en paz...",
						"vietnamese": "Cảm ơn... Giờ đây... ta cuối cùng cũng có thể yên nghỉ...",
						"thai": "ขอบคุณ... ตอนนี้... ฉันคงจะหลับใหลอย่างสงบได้แล้ว...",
						"hindi": "धन्यवाद... अब... मैं अंततः शांति से सो सकता हूँ..."
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…끝난 거야?",
						"english": "...Is it over?",
						"japanese": "…終わったの？",
						"chinese": "…结束了吗？",
						"french": "...C'est fini ?",
						"spanish": "...¿Se acabó?",
						"vietnamese": "...Kết thúc rồi sao?",
						"thai": "...จบแล้วเหรอ?",
						"hindi": "...क्या यह खत्म हो गया?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "아니… 이건… 시작일 뿐이다… 진짜 주인은… 아직… 저 위에 있다….",
						"english": "No... this is... just the beginning... The true master... is still... above...",
						"japanese": "いや…これは…始まりにすぎない…本当の主は…まだ…あの…上にいる…。",
						"chinese": "不……这……只是开始……真正的主人……还在……上面……",
						"french": "Non... ce n'est... que le début... Le vrai maître... est encore... là-haut...",
						"spanish": "No... esto es... solo el principio... El verdadero amo... aún... está arriba...",
						"vietnamese": "Không... đây... chỉ là khởi đầu... Chủ nhân thật sự... vẫn còn... ở trên đó...",
						"thai": "ไม่... นี่มัน... แค่เริ่มต้น... นายท่านที่แท้จริง... ยังคง... อยู่ข้างบนนั่น...",
						"hindi": "नहीं... यह... सिर्फ शुरुआत है... असली मालिक... अभी भी... ऊपर है..."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "direction",
					"direction": "up",
					"speaker": "random_boss",
					"action": "exit",
					"duration_ms": 700
				},
				{
					"type": "speech",
					"content": {
						"korean": "누가… 또 있다는 거야?",
						"english": "Who... else is there?",
						"japanese": "誰か…まだいるのか？",
						"chinese": "谁……还有别人吗？",
						"french": "Qui... d'autre est là ?",
						"spanish": "¿Quién... más hay?",
						"vietnamese": "Ai... còn người khác nữa sao?",
						"thai": "ใคร... ยังมีอีกงั้นหรือ?",
						"hindi": "कौन... और कोई है?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "희생된 영혼은 해방되었지만, 뒤얽힌 운명의 실타래는 더욱 복잡하게 꼬여만 갔다. 진정한 비극은 아직 끝나지 않았다.",
						"english": "The sacrificed souls were freed, but the tangled threads of fate became even more complex. The true tragedy has not yet ended.",
						"japanese": "犠牲となった魂は解放されたが、絡み合った運命の糸はさらに複雑に絡みついていった。真の悲劇はまだ終わっていない。",
						"chinese": "牺牲的灵魂得到了解放，但纠缠的命运之线却变得更加复杂。真正的悲剧尚未结束。",
						"french": "Les âmes sacrifiées furent libérées, mais les fils enchevêtrés du destin s'embrouillèrent davantage. La véritable tragédie n'est pas encore terminée.",
						"spanish": "Las almas sacrificadas fueron liberadas, pero los hilos enredados del destino se complicaron aún más. La verdadera tragedia aún no ha terminado.",
						"vietnamese": "Những linh hồn bị hiến tế đã được giải thoát, nhưng sợi chỉ số phận rối ren lại càng thêm phức tạp. Bi kịch thực sự vẫn chưa kết thúc.",
						"thai": "วิญญาณที่ถูกสังเวยได้รับการปลดปล่อย แต่ใยแห่งโชคชะตาที่พันกันยุ่งเหยิงกลับซับซ้อนยิ่งขึ้น โศกนาฏกรรมที่แท้จริงยังไม่สิ้นสุด",
						"hindi": "बलिदान की गई आत्माएं मुक्त हो गईं, लेकिन नियति के उलझे हुए धागे और भी जटिल हो गए। असली त्रासदी अभी खत्म नहीं हुई है।"
					},
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 존재의 절규가 모든 것을 얼어붙게 했다.",
						"english": "The scream of a colossal being froze everything.",
						"japanese": "巨大な存在の絶叫が、すべてを凍りつかせた。",
						"chinese": "巨大存在的尖叫让一切都冻结了。",
						"french": "Le hurlement d'un être colossal glaça tout.",
						"spanish": "El grito de una entidad colosal lo congeló todo.",
						"vietnamese": "Tiếng gào thét của một thực thể khổng lồ đã đóng băng mọi thứ.",
						"thai": "เสียงกรีดร้องของสิ่งมีชีวิตมหึมาทำให้ทุกสิ่งแข็งตัว",
						"hindi": "एक विशालकाय प्राणी की चीख ने सब कुछ जमा दिया।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "어리석은 것들… 내 고통은… 영원히 계속될 것이다…!",
						"english": "Fools... My suffering... will last forever...!",
						"japanese": "愚かな者たちめ…私の苦痛は…永遠に続くのだ…！",
						"chinese": "愚蠢的东西……我的痛苦……将永远持续下去……！",
						"french": "Imbéciles... Ma souffrance... durera éternellement... !",
						"spanish": "¡Estúpidos... Mi tormento... continuará para siempre...!",
						"vietnamese": "Đồ ngu ngốc... Nỗi đau của ta... sẽ kéo dài mãi mãi...!",
						"thai": "พวกโง่เง่า... ความเจ็บปวดของข้า... จะคงอยู่ชั่วนิรันดร์...!",
						"hindi": "मूर्खों... मेरा दर्द... हमेशा के लिए रहेगा...!"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아직 포기 안 해… 널 해방시켜 줄 거야…!",
						"english": "I won't give up yet... I'll set you free...!",
						"japanese": "まだ諦めない…君を解放してやる…！",
						"chinese": "我还没放弃……我会让你自由的……！",
						"french": "Je n'abandonne pas encore... Je te libérerai... !",
						"spanish": "Aún no me rindo... ¡Te liberaré...!",
						"vietnamese": "Tôi vẫn chưa bỏ cuộc... Tôi sẽ giải thoát cho bạn...!",
						"thai": "ฉันยังไม่ยอมแพ้... ฉันจะปลดปล่อยเธอเอง...!",
						"hindi": "मैंने अभी हार नहीं मानी... मैं तुम्हें आज़ाद करूँगा...!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "차가운 심장부, 거대한 그림자가 앞을 가로막았다.",
						"english": "In the cold heart, a colossal shadow blocked the way.",
						"japanese": "冷たい心臓部、巨大な影が道を阻んだ。",
						"chinese": "在冰冷的心脏深处，巨大的阴影挡住了去路。",
						"french": "Dans le cœur froid, une ombre colossale bloquait le chemin.",
						"spanish": "En el frío corazón, una sombra colosal bloqueó el camino.",
						"vietnamese": "Trong tâm điểm lạnh giá, một bóng đen khổng lồ chặn đường.",
						"thai": "ในใจกลางที่เยือกเย็น เงาขนาดมหึมาขวางทางอยู่",
						"hindi": "ठंडे दिल में, एक विशाल छाया ने रास्ता रोक दिया।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "더는… 다가오지 마라…!",
						"english": "No more... Stay away...!",
						"japanese": "もう…近づくな…！",
						"chinese": "别再…靠近了…！",
						"french": "Ne... t'approche plus... !",
						"spanish": "¡No... te acerques más...!",
						"vietnamese": "Đừng... đến gần nữa...!",
						"thai": "อย่า... เข้ามาใกล้...! อีกต่อไป...!",
						"hindi": "और नहीं... पास मत आओ...!"
					},
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "너의 슬픔을 멈추게 해줄게.",
						"english": "I'll put an end to your sorrow.",
						"japanese": "あなたの悲しみを終わらせてあげる。",
						"chinese": "我会终结你的悲伤。",
						"french": "Je mettrai fin à ta tristesse.",
						"spanish": "Detendré tu tristeza.",
						"vietnamese": "Ta sẽ giúp ngươi chấm dứt nỗi buồn này.",
						"thai": "ฉันจะหยุดความโศกเศร้าของเธอเอง",
						"hindi": "मैं तुम्हारे दुख को खत्म करूँगा।"
					},
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "닥쳐라! 내 고통은… 영원할 것이다…!",
						"english": "Silence! My pain... will be eternal...!",
						"japanese": "黙れ！私の苦痛は…永遠なのだ…！",
						"chinese": "闭嘴！我的痛苦…将永无止境…！",
						"french": "Tais-toi ! Ma souffrance... sera éternelle... !",
						"spanish": "¡Cállate! ¡Mi dolor... será eterno...!",
						"vietnamese": "Câm mồm! Nỗi đau của ta... sẽ là vĩnh cửu...!",
						"thai": "หุบปาก! ความเจ็บปวดของข้า... จะคงอยู่ชั่วนิรันดร์...!",
						"hindi": "चुप रहो! मेरा दर्द... शाश्वत रहेगा...!"
					},
					"speaker": "random_boss"
				}
			]
		}
	]
} as const;
