export const scenario_snowy_skaalbane_22_03 = {
	"scenario_id": "snowy_skaalbane_22_03",
	"order": 3,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"ivar": {
			"id": "mon_d8a80adc-9315-47b5-8c30-97ce33672bce",
			"name": {
				"korean": "이바르",
				"english": "Ivar",
				"japanese": "イヴァー",
				"chinese": "伊瓦尔",
				"french": "Ivar",
				"spanish": "Ivar",
				"vietnamese": "Ivar",
				"thai": "ไอวาร์",
				"hindi": "इवर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8dd7872b-d4df-44fd-b1a1-083a9156e700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2622fb62-daf4-42d1-a83b-2b78869d3e00/public"
		},
		"anuk": {
			"name": {
				"korean": "아눅",
				"english": "Anuk",
				"japanese": "アヌーク",
				"chinese": "阿努克",
				"french": "Anuk",
				"spanish": "Anuk",
				"vietnamese": "Anuk",
				"thai": "อนุก",
				"hindi": "अनुक"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/19485274-e873-45c8-5043-f4ff65aa2a00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/9a79ecfd-8cc6-4461-3790-763822522500/public"
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
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "얼음 기둥의 심장부는 살아 숨 쉬는 지옥이었다. 광기가 일렁였다.",
						"english": "The heart of the ice pillar was a living hell. Madness surged.",
						"japanese": "氷柱の心臓部は生きた地獄だった。狂気が蠢いていた。",
						"chinese": "冰柱的中心是活生生的地狱。疯狂涌动。",
						"french": "Le cœur du pilier de glace était un enfer vivant. La folie montait.",
						"spanish": "El corazón del pilar de hielo era un infierno viviente. La locura brotaba.",
						"vietnamese": "Trái tim của cột băng là một địa ngục sống. Sự điên loạn trỗi dậy.",
						"thai": "ใจกลางของเสาน้ำแข็งคือนรกที่มีชีวิต ความบ้าคลั่งพลุ่งพล่าน",
						"hindi": "बर्फ़ के खंभे का हृदय एक जीवित नरक था। पागलपन उमड़ रहा था।"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "하하… 저항해봐라. 그 따뜻한 온기마저 나의 것이 될지니.",
						"english": "Hah hah… Resist all you want. Even that warmth will be mine.",
						"japanese": "ハハ… 抗ってみろ。その温もりさえも、いずれは我がものとなるだろう。",
						"chinese": "哈哈… 尽管抵抗吧。那份温暖，终将也属于我。",
						"french": "Ha ha… Résiste tant que tu veux. Même cette chaleur sera mienne.",
						"spanish": "Ja ja… Resiste todo lo que quieras. Hasta ese calor será mío.",
						"vietnamese": "Ha ha… Cứ chống cự đi. Ngay cả sự ấm áp đó cũng sẽ là của ta.",
						"thai": "ฮ่าๆ… จงต่อต้านไปเถอะ แม้แต่ความอบอุ่นนั้นก็จะกลายเป็นของข้า",
						"hindi": "हाहा… जितना चाहो प्रतिरोध करो। वह गरमाहट भी मेरी होगी।"
					}
				},
				{
					"content": {
						"korean": "정신을 못 차리겠어…!",
						"english": "I can't focus…!",
						"japanese": "頭が回らない…！",
						"chinese": "我无法集中精神…！",
						"french": "Je n'arrive pas à me ressaisir… !",
						"spanish": "¡No puedo concentrarme…!",
						"vietnamese": "Tôi không thể tập trung…!",
						"thai": "ฉันตั้งสติไม่ได้…!",
						"hindi": "मैं ध्यान केंद्रित नहीं कर पा रहा हूँ…!"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"type": "direction",
					"speaker": "ivar",
					"action": "enter"
				},
				{
					"content": {
						"korean": "정신 차려라! 이까짓 환영 따위에 무릎 꿇을 우리가 아니다!",
						"english": "Snap out of it! We won't kneel to mere illusions!",
						"japanese": "正気を取り戻せ！こんな幻影ごときにひざまずく我々ではない！",
						"chinese": "清醒过来！我们不会向这种幻象屈服！",
						"french": "Reprends-toi ! Nous ne nous agenouillerons pas devant de simples illusions !",
						"spanish": "¡Despierta! ¡No nos arrodillaremos ante meras ilusiones!",
						"vietnamese": "Tỉnh táo lại đi! Chúng ta sẽ không quỳ gối trước những ảo ảnh tầm thường này!",
						"thai": "ตั้งสติเดี๋ยวนี้! เราจะไม่คุกเข่าให้กับแค่ภาพลวงตาพวกนี้!",
						"hindi": "होश में आओ! हम ऐसी तुच्छ माया के सामने घुटने नहीं टेकेंगे!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "ivar"
				},
				{
					"type": "direction",
					"spot": [
						1,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "anuk"
				},
				{
					"content": {
						"korean": "이바르 말이 맞아… 집중해야 해. 다음 공격은….",
						"english": "Ivarr's right… I need to focus. The next attack…",
						"japanese": "イヴァルの言う通りだ… 集中しないと。次の攻撃は…",
						"chinese": "伊瓦尔说得对… 我必须集中精神。下一次攻击是…。",
						"french": "Ivarr a raison… Je dois me concentrer. La prochaine attaque…",
						"spanish": "Ivarr tiene razón… Necesito concentrarme. El próximo ataque…",
						"vietnamese": "Ivarr nói đúng… Tôi phải tập trung. Đòn tấn công tiếp theo…",
						"thai": "อิวาร์พูดถูก… ฉันต้องตั้งสติ การโจมตีครั้งต่อไป…",
						"hindi": "इवार सही कह रहा है… मुझे ध्यान केंद्रित करना होगा। अगला हमला…"
					},
					"speaker": "anuk",
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "정신을 조각내는 환영과 함께, 얼음 촉수들이 덮쳐왔다.",
						"english": "Along with mind-shattering illusions, ice tendrils assailed us.",
						"japanese": "精神を打ち砕く幻影と共に、氷の触手が襲いかかってきた。",
						"chinese": "伴随着击碎精神的幻象，冰触袭来。",
						"french": "Avec des illusions brise-esprit, les tentacules de glace nous assaillirent.",
						"spanish": "Junto con ilusiones que destrozan la mente, los tentáculos de hielo nos asaltaron.",
						"vietnamese": "Cùng với những ảo ảnh xé nát tâm trí, những xúc tu băng đã tấn công chúng tôi.",
						"thai": "พร้อมกับภาพลวงตาที่ทำลายจิตใจ หนวดน้ำแข็งก็พุ่งเข้าโจมตี",
						"hindi": "मन को विखंडित करने वाली माया के साथ, बर्फीले टेंटेकल्स ने हमला किया।"
					}
				},
				{
					"content": {
						"korean": "고통 속에서 영광을 찾아라, 어리석은 자여….",
						"english": "Seek glory in pain, you fool...",
						"japanese": "苦痛の中で栄光を見つけろ、愚か者よ…",
						"chinese": "在痛苦中寻求荣耀吧，愚蠢的家伙……",
						"french": "Cherche la gloire dans la douleur, insensé…",
						"spanish": "Busca la gloria en el dolor, necio…",
						"vietnamese": "Hãy tìm vinh quang trong đau đớn, đồ ngốc…",
						"thai": "จงแสวงหาความรุ่งโรจน์ในความเจ็บปวด, เจ้าคนโง่เง่า...",
						"hindi": "दर्द में गौरव खोजो, मूर्ख..."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"action": "enter",
					"speaker": "ivar"
				},
				{
					"duration_ms": 400,
					"action": "focus",
					"speaker": "ivar",
					"type": "direction"
				},
				{
					"content": {
						"korean": "물러서라! 내가 막는다!",
						"english": "Stand back! I'll hold them off!",
						"japanese": "下がれ！俺が食い止める！",
						"chinese": "退下！我来挡住！",
						"french": "Reculez ! Je les retiens !",
						"spanish": "¡Retírense! ¡Yo los detendré!",
						"vietnamese": "Lùi lại! Ta sẽ chặn chúng!",
						"thai": "ถอยไป! ข้าจะต้านไว้เอง!",
						"hindi": "पीछे हटो! मैं रोकूँगा!"
					},
					"speaker": "ivar",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "이바르! 무리하지 마!",
						"english": "Ivar! Don't overdo it!",
						"japanese": "イヴァール！無理しないで！",
						"chinese": "伊瓦尔！别逞强！",
						"french": "Ivar ! Ne force pas trop !",
						"spanish": "¡Ivar! ¡No te excedas!",
						"vietnamese": "Ivar! Đừng cố quá sức!",
						"thai": "อีวาร์! อย่าหักโหม!",
						"hindi": "ईवार! ज़्यादा ज़ोर मत लगाओ!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "…강함의 끝은 여기서 시험된다! 나는 절대 물러서지 않아!",
						"english": "...The limits of strength are tested here! I will never back down!",
						"japanese": "…強さの限界はここで試される！俺は決して退かない！",
						"chinese": "……力量的极限将在此处受考验！我绝不退缩！",
						"french": "…La limite de la force est mise à l'épreuve ici ! Je ne reculerai jamais !",
						"spanish": "…¡El límite de la fuerza se prueba aquí! ¡Nunca retrocederé!",
						"vietnamese": "...Giới hạn của sức mạnh được thử thách tại đây! Ta sẽ không bao giờ lùi bước!",
						"thai": "...ขีดจำกัดของพละกำลังจะถูกทดสอบที่นี่! ข้าจะไม่มีวันถอย!",
						"hindi": "...ताकत की हद यहीं पर परखी जाएगी! मैं कभी पीछे नहीं हटूंगा!"
					},
					"speaker": "ivar",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"duration_ms": 500,
					"spot": [
						1,
						2
					],
					"type": "direction",
					"speaker": "anuk",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "anuk",
					"content": {
						"korean": "촉수의 패턴이… 예측이 안 돼. 무작위인가…?",
						"english": "The tentacles' pattern... it's unpredictable. Is it random...?",
						"japanese": "触手のパターンが…予測できない。ランダムなのか…？",
						"chinese": "触手的模式……无法预测。是随机的吗……？",
						"french": "Le motif des tentacules… est imprévisible. Est-ce aléatoire… ?",
						"spanish": "El patrón de los tentáculos… es impredecible. ¿Es aleatorio…?",
						"vietnamese": "Mô hình xúc tu... không thể đoán trước. Có phải ngẫu nhiên không...?",
						"thai": "รูปแบบหนวดปลาหมึก... คาดเดาไม่ได้. มันสุ่มหรือ...?",
						"hindi": "टेंटेकल्स का पैटर्न... अप्रत्याशित है। क्या यह बेतरतीब है...?"
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
						"korean": "이바르의 몸에 깊은 상흔이 새겨졌다. 하지만 그의 눈은 흔들리지 않았다.",
						"english": "Deep scars were etched into Ivar's body. Yet, his eyes remained unwavering.",
						"japanese": "イヴァールの体に深い傷跡が刻まれた。だが、彼の瞳は揺るがなかった。",
						"chinese": "伊瓦尔身上刻下了深深的伤痕。然而，他的目光却坚定不移。",
						"french": "De profondes cicatrices marquaient le corps d'Ivar. Pourtant, ses yeux restaient inébranlables.",
						"spanish": "Profundas cicatrices se grabaron en el cuerpo de Ivar. Sin embargo, sus ojos permanecieron inquebrantables.",
						"vietnamese": "Những vết sẹo sâu hằn trên cơ thể Ivar. Nhưng đôi mắt anh ấy vẫn kiên định.",
						"thai": "รอยแผลลึกประทับบนร่างของอีวาร์ ทว่าดวงตาของเขากลับไม่สั่นคลอน",
						"hindi": "ईवार के शरीर पर गहरे घाव के निशान पड़ गए। फिर भी, उसकी आँखें अडिग रहीं।"
					}
				},
				{
					"content": {
						"korean": "그 강인함… 마음에 드는군. 더 깊은 절망을 보여주지.",
						"english": "That resilience... I like it. I'll show you deeper despair.",
						"japanese": "その強靭さ…気に入った。もっと深い絶望を見せてやろう。",
						"chinese": "那份坚韧……我喜欢。我就让你见识更深的绝望吧。",
						"french": "Cette résilience… J'aime ça. Je vais te montrer un désespoir plus profond.",
						"spanish": "Esa resiliencia... me gusta. Te mostraré una desesperación más profunda.",
						"vietnamese": "Sự kiên cường đó... ta thích. Ta sẽ cho ngươi thấy sự tuyệt vọng sâu sắc hơn.",
						"thai": "ความแข็งแกร่งนั้น... ข้าชอบ มัน. ข้าจะแสดงความสิ้นหวังที่ลึกซึ้งยิ่งกว่าให้เจ้าดู",
						"hindi": "वह लचीलापन... मुझे पसंद है। मैं तुम्हें और गहरी निराशा दिखाऊँगा।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "ivar",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "이바르님… 괜찮으세요?",
						"english": "Lord Ivar... Are you alright?",
						"japanese": "イヴァール様…大丈夫ですか？",
						"chinese": "伊瓦尔大人……您还好吗？",
						"french": "Seigneur Ivar… Vous allez bien ?",
						"spanish": "Señor Ivar… ¿Está bien?",
						"vietnamese": "Thưa Ivar... Ngài có ổn không?",
						"thai": "ท่านอีวาร์... ไม่เป็นอะไรใช่ไหม?",
						"hindi": "लॉर्ड ईवार... क्या आप ठीक हैं?"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "괜찮다! 이런 고통쯤이야… 아무것도 아니다! 너희는 그저 나를 믿고 나아가라!",
						"english": "I'm fine! This pain is... nothing! Just trust in me and move forward!",
						"japanese": "大丈夫だ！この程度の苦痛…何でもない！お前たちはただ俺を信じて進め！",
						"chinese": "没事！这点痛苦……算不了什么！你们只要相信我就继续前进！",
						"french": "Je vais bien ! Cette douleur n'est… rien ! Croyez en moi et avancez !",
						"spanish": "¡Estoy bien! Este dolor no es… nada. ¡Solo confíen en mí y avancen!",
						"vietnamese": "Ta ổn! Nỗi đau này... không là gì cả! Các ngươi cứ tin tưởng ta mà tiến lên!",
						"thai": "ไม่เป็นไร! ความเจ็บปวดแค่นี้... ไม่มีอะไรเลย! พวกเจ้าแค่เชื่อใจข้าแล้วเดินหน้าต่อไป!",
						"hindi": "मैं ठीक हूँ! यह दर्द... कुछ भी नहीं है! बस मुझ पर भरोसा करो और आगे बढ़ो!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "ivar"
				},
				{
					"speaker": "anuk",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						1,
						2
					]
				},
				{
					"content": {
						"korean": "스칼베인은… 우리 내면의 공포를 자극하고 있어.",
						"english": "Skalbein is... provoking our inner fears.",
						"japanese": "スカルベインは…我々の内なる恐怖を刺激している。",
						"chinese": "斯卡尔贝因……正在刺激我们内心的恐惧。",
						"french": "Skalbein… provoque nos peurs intérieures.",
						"spanish": "Skalbein está… provocando nuestros miedos internos.",
						"vietnamese": "Skalbein đang... kích thích nỗi sợ hãi bên trong chúng ta.",
						"thai": "สเกลไบน์กำลัง... กระตุ้นความกลัวภายในของเรา",
						"hindi": "स्कालबीन... हमारे अंदरूनी डर को भड़का रहा है।"
					},
					"speaker": "anuk",
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
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "얼음 기둥은 더욱 깊은 곳으로 이어졌다. 돌아갈 길은 이미 얼어붙었다.",
						"english": "The ice pillars led to deeper depths. The path back is already frozen.",
						"japanese": "氷の柱はさらに深い場所へと続いていた。戻る道はすでに凍りついていた。",
						"chinese": "冰柱通向更深处。归途已被冰封。",
						"french": "Les piliers de glace menaient à des profondeurs encore plus grandes. Le chemin du retour est déjà gelé.",
						"spanish": "Los pilares de hielo conducían a profundidades aún mayores. El camino de regreso ya está congelado.",
						"vietnamese": "Cột băng dẫn đến nơi sâu thẳm hơn. Lối về đã đóng băng.",
						"thai": "เสาน้ำแข็งนำไปสู่ที่ลึกยิ่งกว่าเดิม ทางกลับถูกแช่แข็งแล้ว",
						"hindi": "बर्फीले खंभे और भी गहराई तक ले गए। वापसी का रास्ता पहले ही जम चुका है।"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "더 이상 도망칠 곳은 없다. 모두 내 일부가 될 지어다.",
						"english": "No more escaping. All shall become a part of me.",
						"japanese": "もう逃げ場はない。すべてが私の糧となるだろう。",
						"chinese": "无路可逃。尔等皆将成为我的一部分。",
						"french": "Plus d'échappatoire. Tous deviendront une partie de moi.",
						"spanish": "No hay escapatoria. Todos se convertirán en parte de mí.",
						"vietnamese": "Không còn nơi nào để trốn thoát. Tất cả hãy trở thành một phần của ta.",
						"thai": "ไม่มีที่ให้หนีอีกแล้ว ทุกคนจงกลายเป็นส่วนหนึ่งของข้า",
						"hindi": "अब कोई बच निकलने की जगह नहीं है। तुम सब मेरे अंश बन जाओगे।"
					}
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이젠… 끝인가…?",
						"english": "Is this... the end...?",
						"japanese": "もう…終わりなのか…？",
						"chinese": "难道……结束了吗……？",
						"french": "Est-ce... la fin...?",
						"spanish": "¿Es este... el final...?",
						"vietnamese": "Giờ thì... kết thúc rồi sao...?",
						"thai": "นี่มัน... จุดจบแล้วหรือ...?",
						"hindi": "क्या यह... अंत है...?"
					}
				},
				{
					"speaker": "ivar",
					"action": "enter",
					"spot": [
						5,
						2
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "끝은 없다! 우리는 반드시 살아남는다! 너희의 의지를 불태워라!",
						"english": "There is no end! We will survive! Burn your will!",
						"japanese": "終わりはない！我々は必ず生き残る！お前たちの意志を燃やせ！",
						"chinese": "没有尽头！我们必将幸存！燃烧你们的意志！",
						"french": "Il n'y a pas de fin ! Nous allons survivre ! Brûlez votre volonté !",
						"spanish": "¡No hay fin! ¡Sobreviviremos! ¡Quemen su voluntad!",
						"vietnamese": "Không có kết thúc! Chúng ta nhất định phải sống sót! Hãy đốt cháy ý chí của các ngươi!",
						"thai": "ไม่มีจุดจบ! เราต้องรอดชีวิต! จงเผาผลาญเจตจำนงของเจ้าซะ!",
						"hindi": "कोई अंत नहीं है! हम अवश्य जीवित रहेंगे! अपनी इच्छाशक्ति को प्रज्वलित करो!"
					},
					"speaker": "ivar",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "이바르님…!",
						"english": "Lord Ivar...!",
						"japanese": "イヴァル様…！",
						"chinese": "伊瓦尔大人……！",
						"french": "Seigneur Ivar...!",
						"spanish": "¡Señor Ivar...!",
						"vietnamese": "Ngài Ivar...!",
						"thai": "ท่านไอบาร์...!",
						"hindi": "भगवान इवर...!"
					},
					"type": "speech",
					"emotion": "happy",
					"speaker": "character_2"
				},
				{
					"speaker": "anuk",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						1,
						2
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "anuk",
					"content": {
						"korean": "마지막 단계에 접어들고 있어. {random_boss}의 핵심이… 보인다!",
						"english": "We're entering the final stage. The core of {random_boss}... is visible!",
						"japanese": "最終段階に入っている。{random_boss}の核心が…見える！",
						"chinese": "已进入最后阶段。{random_boss}的核心……就在眼前！",
						"french": "Nous entrons dans la phase finale. Le cœur de {random_boss}... est visible !",
						"spanish": "Estamos entrando en la etapa final. ¡El núcleo de {random_boss}... es visible!",
						"vietnamese": "Chúng ta đang bước vào giai đoạn cuối. Hạt nhân của {random_boss}... đã hiện rõ!",
						"thai": "เรากำลังเข้าสู่ขั้นตอนสุดท้าย แกนกลางของ {random_boss}... ปรากฏแล้ว!",
						"hindi": "हम अंतिम चरण में प्रवेश कर रहे हैं। {random_boss} का मूल... दिखाई दे रहा है!"
					}
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "{random_boss}의 얼음 촉수들이 탐험대를 집어삼켰다.",
						"english": "{random_boss}'s icy tentacles devoured the expedition.",
						"japanese": "{random_boss}の氷の触手が探検隊を飲み込んだ。",
						"chinese": "{random_boss}的冰触手吞噬了探险队。",
						"french": "Les tentacules glacées de {random_boss} ont englouti l'expédition.",
						"spanish": "Los tentáculos helados de {random_boss} devoraron a la expedición.",
						"vietnamese": "Những xúc tu băng giá của {random_boss} đã nuốt chửng đoàn thám hiểm.",
						"thai": "หนวดน้ำแข็งของ {random_boss} กลืนกินคณะสำรวจ.",
						"hindi": "{random_boss} के बर्फीले टेंटेकल्स ने अभियान दल को निगल लिया।"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "하찮은 저항… 결국 너희도 나의 일부가 될 뿐.",
						"english": "Futile resistance… In the end, you too will only become a part of me.",
						"japanese": "取るに足らない抵抗…結局お前たちも私の一部になるだけだ。",
						"chinese": "无谓的抵抗…最终你们也只会成为我的一部分。",
						"french": "Résistance futile… Au final, vous ne ferez vous aussi qu'une partie de moi.",
						"spanish": "Resistencia inútil… Al final, vosotros también seréis solo una parte de mí.",
						"vietnamese": "Kháng cự vô ích… Cuối cùng các ngươi cũng chỉ trở thành một phần của ta mà thôi.",
						"thai": "การต่อต้านที่ไร้ค่า… ในที่สุดพวกเจ้าก็จะเป็นเพียงส่วนหนึ่งของข้า.",
						"hindi": "तुच्छ प्रतिरोध… अंत में, तुम भी मेरे ही एक हिस्से बन जाओगे।"
					}
				},
				{
					"speaker": "ivar",
					"action": "enter",
					"spot": [
						5,
						2
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "ivar",
					"content": {
						"korean": "크윽… 아직… 끝나지 않았다…!",
						"english": "Argh... It's not over yet...!",
						"japanese": "ぐっ… まだ… 終わってない…！",
						"chinese": "呃啊… 还没… 结束…！",
						"french": "Argh... Ce n'est pas encore fini... !",
						"spanish": "¡Argh... Esto no ha terminado aún...!",
						"vietnamese": "Khụ... Vẫn... chưa kết thúc...!",
						"thai": "อึก... ยัง... ไม่จบ...!",
						"hindi": "उह्ह्ह… अभी… खत्म नहीं हुआ…!"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "다시… 도전한다!",
						"english": "I'll challenge again!",
						"japanese": "もう一度… 挑む！",
						"chinese": "再… 挑战一次！",
						"french": "Je défie à nouveau !",
						"spanish": "¡Volveré a intentarlo!",
						"vietnamese": "Sẽ... thử lại!",
						"thai": "จะ… ท้าทายอีกครั้ง!",
						"hindi": "फिर से… चुनौती दूंगा!"
					}
				}
			],
			"id": 15,
			"dialogue": [
				{
					"content": {
						"korean": "마침내, {random_boss}의 심장이 눈앞에 드러났다. 거대한 얼음 속에서 차가운 의지가 꿈틀거렸다.",
						"english": "At last, the heart of {random_boss} revealed itself before our eyes. Within the colossal ice, a cold will stirred.",
						"japanese": "ついに、{random_boss}の心臓が目の前に現れた。巨大な氷の中で、冷たい意志が蠢いていた。",
						"chinese": "终于，{random_boss}的心脏赫然眼前。巨大的冰块中，冰冷的意志蠕动着。",
						"french": "Enfin, le cœur de {random_boss} se révéla sous nos yeux. Au sein de la glace colossale, une froide volonté s'agita.",
						"spanish": "Por fin, el corazón de {random_boss} se reveló ante nuestros ojos. Dentro del hielo colosal, una voluntad fría se agitó.",
						"vietnamese": "Cuối cùng, trái tim của {random_boss} đã hiện ra trước mắt. Trong khối băng khổng lồ, một ý chí lạnh lẽo đang cựa quậy.",
						"thai": "ในที่สุด หัวใจของ {random_boss} ก็ปรากฏต่อหน้าเรา ภายในน้ำแข็งมหึมา เจตจำนงอันเยือกเย็นกำลังเคลื่อนไหว",
						"hindi": "अंततः, {random_boss} का हृदय हमारी आँखों के सामने प्रकट हुआ। विशाल बर्फ के भीतर, एक ठंडी इच्छा शक्ति जागृत हुई।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "왔느냐, 용감한 자들. 너희의 생명력으로 나의 굶주림을 채워주마.",
						"english": "You've come, brave ones. Your life force shall sate my hunger.",
						"japanese": "来たか、勇敢なる者たちよ。お前たちの生命力で我が飢えを満たしてやろう。",
						"chinese": "来了吗，勇敢的家伙们。你们的生命力将满足我的饥渴。",
						"french": "Vous êtes venus, braves gens. Votre force vitale apaisera ma faim.",
						"spanish": "Habéis llegado, valientes. Vuestra fuerza vital saciará mi hambre.",
						"vietnamese": "Các ngươi đã đến, những kẻ dũng cảm. Sinh lực của các ngươi sẽ làm no cơn đói của ta.",
						"thai": "มาแล้วหรือ ผู้กล้าเอ๋ย พลังชีวิตของเจ้าจะเติมเต็มความหิวโหยของข้า",
						"hindi": "तुम आ गए, बहादुरों। तुम्हारी जीवन शक्ति मेरी भूख मिटाएगी।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"speaker": "ivar",
					"action": "enter",
					"spot": [
						5,
						2
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "네놈의 굶주림에, 내 동료들을 내어줄 순 없다! 나의 강함으로, 너를 멈춘다!",
						"english": "I won't surrender my comrades to your hunger! With my strength, I'll stop you!",
						"japanese": "貴様の飢えに、私の仲間を差し出すものか！私の強さで、貴様を止める！",
						"chinese": "我不会让我的同伴成为你的口粮！以我的力量，阻止你！",
						"french": "Je ne livrerai pas mes camarades à ta faim ! Avec ma force, je t'arrêterai !",
						"spanish": "¡No entregaré a mis camaradas a tu hambre! ¡Con mi fuerza, te detendré!",
						"vietnamese": "Ta sẽ không giao đồng đội của ta cho cơn đói của ngươi! Với sức mạnh của ta, ta sẽ ngăn chặn ngươi!",
						"thai": "ข้าจะไม่ยอมให้สหายของข้าตกเป็นเหยื่อความหิวโหยของแก! ด้วยพลังของข้า ข้าจะหยุดแกเอง!",
						"hindi": "मैं अपने साथियों को तुम्हारी भूख के आगे नहीं झुकने दूँगा! अपनी शक्ति से, मैं तुम्हें रोकूँगा!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "ivar"
				},
				{
					"content": {
						"korean": "막아서겠다!",
						"english": "I will stop you!",
						"japanese": "阻止する！",
						"chinese": "我要阻止你！",
						"french": "Je t'arrêterai !",
						"spanish": "¡Te detendré!",
						"vietnamese": "Ta sẽ ngăn chặn!",
						"thai": "ข้าจะขวางไว้!",
						"hindi": "मैं तुम्हें रोकूँगा!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"duration_ms": 500,
					"spot": [
						1,
						2
					],
					"type": "direction",
					"speaker": "anuk",
					"action": "enter"
				},
				{
					"content": {
						"korean": "이바르! 정면 승부는 위험해! 패턴을 읽어야…!",
						"english": "Ivar! A head-on fight is too risky! We need to read its patterns…!",
						"japanese": "イーヴァル！正面からの勝負は危険だ！パターンを読まないと…！",
						"chinese": "伊瓦尔！正面硬拼太危险了！必须看穿它的模式…！",
						"french": "Ivar ! Un affrontement direct est trop risqué ! Il faut lire ses schémas… !",
						"spanish": "¡Ivar! ¡Un enfrentamiento directo es peligroso! ¡Tenemos que leer sus patrones…!",
						"vietnamese": "Ivar! Trực diện giao chiến nguy hiểm lắm! Phải đọc được quy luật của nó…!",
						"thai": "ไอบาร์! สู้ตรง ๆ อันตรายนะ! ต้องอ่านรูปแบบการโจมตี…!",
						"hindi": "इवार! सीधा मुकाबला खतरनाक है! हमें उसके पैटर्न समझने होंगे…!"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "anuk"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "ivar",
					"content": {
						"korean": "어리석은! 강함은… 스스로 만들어내는 것이다!",
						"english": "Foolish! Strength… is forged by oneself!",
						"japanese": "愚かな！強さとは…自らが生み出すものだ！",
						"chinese": "愚蠢！强大是…自己创造的！",
						"french": "Stupide ! La force… on la crée soi-même !",
						"spanish": "¡Estúpido! ¡La fuerza… se crea uno mismo!",
						"vietnamese": "Ngu xuẩn! Sức mạnh… là do chính mình tạo ra!",
						"thai": "โง่เขลา! ความแข็งแกร่ง… คือสิ่งที่สร้างขึ้นด้วยตัวเอง!",
						"hindi": "मूर्ख! ताकत… खुद ही बनाई जाती है!"
					}
				},
				{
					"speaker": "ivar",
					"action": "focus",
					"type": "direction",
					"duration_ms": 400
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "차가운 심장이 파열하며, {random_boss}의 광기가 흩어졌다.",
						"english": "The cold heart burst, scattering {random_boss}'s madness.",
						"japanese": "冷たい心臓が破裂し、{random_boss}の狂気が散らばった。",
						"chinese": "冰冷的心脏爆裂，{random_boss}的狂气四散。",
						"french": "Le cœur froid a éclaté, dispersant la folie de {random_boss}.",
						"spanish": "El frío corazón estalló, dispersando la locura de {random_boss}.",
						"vietnamese": "Trái tim lạnh giá vỡ tan, sự điên loạn của {random_boss} tan biến.",
						"thai": "หัวใจอันเย็นชาปริแตก ความบ้าคลั่งของ {random_boss} แตกกระจาย",
						"hindi": "ठंडा दिल फट गया, {random_boss} का पागलपन बिखर गया।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "하찮은… 인간들…. 굶주림은… 끝나지 않는다….",
						"english": "Insignificant… humans…. The hunger… never ends….",
						"japanese": "取るに足らない…人間どもよ…。飢えは…終わらない…。",
						"chinese": "卑微的…人类…。饥饿…永无止境…。",
						"french": "Insignifiants… humains…. La faim… ne s'arrête jamais….",
						"spanish": "Insignificantes… humanos…. El hambre… nunca termina….",
						"vietnamese": "Lũ… nhân loại… nhỏ bé…. Cơn đói… sẽ không kết thúc….",
						"thai": "มนุษย์…ผู้ต่ำต้อย…. ความหิวโหย…ไม่มีวันสิ้นสุด….",
						"hindi": "तुच्छ… इंसानों…. भूख… कभी खत्म नहीं होती…।"
					}
				},
				{
					"action": "enter",
					"speaker": "ivar",
					"spot": [
						5,
						2
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "ivar",
					"content": {
						"korean": "끝났다. 하지만… 이 굶주림은 사라지지 않을 것이다.",
						"english": "It's over. But… this hunger will not disappear.",
						"japanese": "終わった。だが…この飢えは消えることはないだろう。",
						"chinese": "结束了。但是…这份饥饿不会消失。",
						"french": "C'est fini. Mais… cette faim ne disparaîtra pas.",
						"spanish": "Se acabó. Pero… esta hambre no desaparecerá.",
						"vietnamese": "Kết thúc rồi. Nhưng… cơn đói này sẽ không biến mất.",
						"thai": "จบแล้ว. แต่…ความหิวโหยนี้จะไม่มีวันหายไป.",
						"hindi": "खत्म हो गया। लेकिन… यह भूख खत्म नहीं होगी।"
					}
				},
				{
					"type": "speech",
					"emotion": "happy",
					"speaker": "character_any",
					"content": {
						"korean": "우리가… 해냈어!",
						"english": "We… did it!",
						"japanese": "我々が…やったぞ！",
						"chinese": "我们…成功了！",
						"french": "On… l'a fait !",
						"spanish": "¡Lo… logramos!",
						"vietnamese": "Chúng ta… đã làm được!",
						"thai": "พวกเรา…ทำได้แล้ว!",
						"hindi": "हमने… कर दिखाया!"
					}
				},
				{
					"content": {
						"korean": "이바르의 희생은 모두를 구원했다. 그러나 설원은 아직 차가운 진실을 품고 있었다.",
						"english": "Ivar's sacrifice saved everyone. But the snowfield still held a cold truth.",
						"japanese": "イーヴァルの犠牲は皆を救った。しかし、雪原は未だ冷たい真実を秘めていた。",
						"chinese": "伊瓦尔的牺牲拯救了所有人。然而，雪原依然蕴含着冰冷的真相。",
						"french": "Le sacrifice d'Ivar a sauvé tout le monde. Mais l'étendue enneigée cachait encore une froide vérité.",
						"spanish": "El sacrificio de Ivar salvó a todos. Pero el campo de nieve aún guardaba una fría verdad.",
						"vietnamese": "Sự hy sinh của Ivar đã cứu rỗi tất cả. Nhưng đồng tuyết vẫn ẩn chứa một sự thật lạnh lẽo.",
						"thai": "การเสียสละของไอบาร์ช่วยทุกคนไว้. แต่ทุ่งหิมะยังคงซ่อนความจริงอันเย็นชาไว้.",
						"hindi": "इवार के बलिदान ने सबको बचाया। लेकिन बर्फ़ीली ज़मीन में अभी भी एक कड़वी सच्चाई छिपी थी।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "다음 전장은… 더욱 깊은 곳에서 기다린다.",
						"english": "The next battlefield… awaits in a deeper place.",
						"japanese": "次の戦場は…より深い場所で待っている。",
						"chinese": "下一战场…在更深之处等待着。",
						"french": "Le prochain champ de bataille… attend dans un endroit plus profond.",
						"spanish": "El próximo campo de batalla… espera en un lugar más profundo.",
						"vietnamese": "Chiến trường tiếp theo… đang chờ đợi ở nơi sâu hơn.",
						"thai": "สนามรบถัดไป… รออยู่ในที่ที่ลึกกว่า.",
						"hindi": "अगला युद्धक्षेत्र… और भी गहरे स्थान पर प्रतीक्षा कर रहा है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"스칼베인, 그 얼어붙은 광기는 더욱 깊어졌다.",
			"정신을 찢는 비명, 살을 에는 얼음 촉수.",
			"끝없는 굶주림 속에서, 이바르는 자신을 보았다.",
			"희생만이 유일한 길이었다. 이 혹독한 설원에서."
		],
		"english": [
			"Scalbain's frozen madness deepened.",
			"Mind-rending screams, flesh-piercing ice tendrils.",
			"In endless hunger, Ivarr saw himself.",
			"Sacrifice was the only path. In this harsh snowfield."
		],
		"japanese": [
			"スカルベイン、その凍てつく狂気はさらに深まった。",
			"精神を切り裂く悲鳴、肉をえぐる氷の触手。",
			"終わりのない飢えの中で、イヴァルは自分を見た。",
			"犠牲こそが唯一の道だった。この過酷な雪原で。"
		],
		"chinese": [
			"斯卡尔班，其冰封的疯狂愈发深邃。",
			"撕裂精神的尖叫，刺骨的冰触。",
			"在无尽的饥饿中，伊瓦尔看到了自己。",
			"牺牲是唯一的出路。在这严酷的雪原上。"
		],
		"french": [
			"La folie gelée de Scalbain s'épaississait.",
			"Des cris déchirants, des tentacules de glace transperçant la chair.",
			"Dans une faim sans fin, Ivarr se vit.",
			"Le sacrifice était la seule voie. Dans ce champ de neige impitoyable."
		],
		"spanish": [
			"La locura helada de Scalbain se hizo más profunda.",
			"Gritos desgarradores, tentáculos de hielo que perforan la carne.",
			"En la hambruna infinita, Ivarr se vio a sí mismo.",
			"El sacrificio era el único camino. En este campo de nieve implacable."
		],
		"vietnamese": [
			"Sự điên loạn băng giá của Scalbain ngày càng sâu sắc.",
			"Những tiếng thét xé nát tâm trí, những xúc tu băng xuyên thấu da thịt.",
			"Trong cơn đói vô tận, Ivarr thấy chính mình.",
			"Hy sinh là con đường duy nhất. Trong cánh đồng tuyết khắc nghiệt này."
		],
		"thai": [
			"ความบ้าคลั่งเยือกแข็งของสคาลเบนยิ่งลึกลงไปอีก",
			"เสียงกรีดร้องที่ฉีกกระชากจิตใจ หนวดน้ำแข็งที่แทงทะลุเนื้อหนัง",
			"ในความหิวโหยที่ไม่สิ้นสุด อิวาร์เห็นตัวเอง",
			"การเสียสละคือทางเดียว ในทุ่งหิมะอันโหดร้ายนี้"
		],
		"hindi": [
			"स्कैलबेन का जमा हुआ पागलपन और गहरा होता गया।",
			"मन को चीरने वाली चीखें, मांस को भेदने वाले बर्फीले टेंटेकल्स।",
			"अंतहीन भूख में, इवार ने खुद को देखा।",
			"बलिदान ही एकमात्र मार्ग था। इस कठोर बर्फ़ीले मैदान में।"
		]
	}
} as const;
