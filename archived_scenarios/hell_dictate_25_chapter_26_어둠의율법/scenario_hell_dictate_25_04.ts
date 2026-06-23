export const scenario_hell_dictate_25_04 = {
	"scenario_id": "hell_dictate_25_04",
	"order": 4,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"char": {
			"id": "mon_b67c6c4a-6263-4db5-8f14-59d0a906a3fc",
			"name": {
				"korean": "캐릭터",
				"english": "Char",
				"japanese": "キャラクター",
				"chinese": "角色",
				"french": "Personnage",
				"spanish": "Personaje",
				"vietnamese": "Nhân vật",
				"thai": "ตัวละคร",
				"hindi": "चरित्र"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/81f44415-b42f-499c-e22b-183f8663dd00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a1c5b19a-a5b5-40d2-e5b1-7a4f81abb700/public"
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
						"korean": "벽에는 금지된 그림들이, 바닥에는 율법에 저항하는 조형물들이 가득했다.",
						"english": "The walls were covered with forbidden paintings, the floor with sculptures defying the law.",
						"japanese": "壁には禁断の絵画が、床には律法に抗う造形物があふれていた。",
						"chinese": "墙上挂满了禁忌画作，地板上摆满了反抗律法的雕塑。",
						"french": "Les murs étaient couverts de peintures interdites, le sol de sculptures défiant la loi.",
						"spanish": "Las paredes estaban cubiertas de pinturas prohibidas, el suelo de esculturas que desafiaban la ley.",
						"vietnamese": "Những bức tường phủ đầy tranh cấm, sàn nhà la liệt tượng điêu khắc chống lại luật pháp.",
						"thai": "ผนังเต็มไปด้วยภาพวาดต้องห้าม พื้นเต็มไปด้วยประติมากรรมที่ท้าทายกฎหมาย",
						"hindi": "दीवारों पर वर्जित पेंटिंग थीं, फर्श पर कानून का विरोध करने वाली मूर्तियाँ।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "여기가… '불순한 예술가'의 아지트인가.",
						"english": "Is this... the 'Impure Artist's' hideout?",
						"japanese": "ここが…「不純な芸術家」のアジトなのか。",
						"chinese": "这里是……“不洁艺术家”的藏身处吗？",
						"french": "Est-ce ici... le repaire de l'« Artiste impur » ?",
						"spanish": "¿Es este... el escondite del 'Artista Impuro'?",
						"vietnamese": "Đây là... hang ổ của 'Nghệ sĩ Ô uế' ư?",
						"thai": "นี่คือ... ที่ซ่อนของ 'ศิลปินผู้ไม่บริสุทธิ์' หรือเปล่า",
						"hindi": "क्या यह... 'अशुद्ध कलाकार' का ठिकाना है?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "char",
					"spot": [
						5,
						2
					]
				},
				{
					"content": {
						"korean": "왔군. 진실을 찾는 자는 언제나 환영이다.",
						"english": "You've come. Seekers of truth are always welcome.",
						"japanese": "来たか。真実を求める者はいつだって歓迎だ。",
						"chinese": "你来了。寻求真相之人永远受欢迎。",
						"french": "Tu es venu. Ceux qui cherchent la vérité sont toujours les bienvenus.",
						"spanish": "Has venido. Los buscadores de la verdad siempre son bienvenidos.",
						"vietnamese": "Ngươi đã đến. Kẻ tìm kiếm sự thật luôn được hoan nghênh.",
						"thai": "มาแล้วสินะ ผู้แสวงหาความจริงยินดีต้อนรับเสมอ",
						"hindi": "तुम आ गए। सत्य के खोजकर्ताओं का हमेशा स्वागत है।"
					},
					"type": "speech",
					"speaker": "char",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "char",
					"emotion": "base",
					"content": {
						"korean": "내 작품을 봐라. Dictate가 숨기고 싶은 모든 것을 담았다.",
						"english": "Behold my work. It contains everything Dictate wishes to hide.",
						"japanese": "私の作品を見ろ。Dictateが隠したいもの全てを収めた。",
						"chinese": "看我的作品。它包含了Dictate所有想隐藏的东西。",
						"french": "Vois mon œuvre. Elle contient tout ce que Dictate veut cacher.",
						"spanish": "Contempla mi obra. Contiene todo lo que Dictate quiere ocultar.",
						"vietnamese": "Hãy xem tác phẩm của ta. Nó chứa đựng mọi thứ mà Dictate muốn che giấu.",
						"thai": "ดูผลงานของข้าสิ มันรวบรวมทุกสิ่งที่ Dictate อยากจะซ่อนไว้",
						"hindi": "मेरा काम देखो। इसमें वह सब कुछ है जो Dictate छिपाना चाहता है।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "char",
					"spot": [
						4,
						2
					]
				},
				{
					"content": {
						"korean": "Dictate는 처음부터 혼돈을 사랑한 자가 아니었다.",
						"english": "Dictate was not one who loved chaos from the start.",
						"japanese": "Dictateは最初から混沌を愛する者ではなかった。",
						"chinese": "Dictate并非从一开始就热爱混沌之人。",
						"french": "Dictate n'était pas celui qui aimait le chaos depuis le début.",
						"spanish": "Dictate no fue alguien que amara el caos desde el principio.",
						"vietnamese": "Dictate không phải là kẻ yêu hỗn loạn ngay từ đầu.",
						"thai": "Dictate ไม่ใช่คนที่รักความวุ่นวายมาตั้งแต่แรก",
						"hindi": "Dictate वह नहीं था जो शुरू से ही अराजकता से प्यार करता था।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "char"
				},
				{
					"content": {
						"korean": "…그럼 뭐였지?",
						"english": "...Then what was it?",
						"japanese": "…なら、何だったんだ？",
						"chinese": "……那它是什么？",
						"french": "...Alors, qu'était-ce ?",
						"spanish": "...¿Entonces qué era?",
						"vietnamese": "...Vậy nó là gì?",
						"thai": "...แล้วมันคืออะไร?",
						"hindi": "...तो वह क्या था?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "char",
					"emotion": "base",
					"content": {
						"korean": "내 그림을 잘 봐. 한때 그는… 가장 평화로운 영혼이었다.",
						"english": "Look closely at my painting. Once, he was... the most peaceful soul.",
						"japanese": "私の絵をよく見て。かつて彼は…最も平和な魂だった。",
						"chinese": "仔细看我的画。曾经他…是最平静的灵魂。",
						"french": "Regarde bien ma peinture. Autrefois, il était… l'âme la plus paisible.",
						"spanish": "Mira bien mi pintura. Una vez, él fue… el alma más pacífica.",
						"vietnamese": "Hãy nhìn kỹ bức tranh của tôi. Đã từng, anh ta là… linh hồn bình yên nhất.",
						"thai": "มองดูภาพวาดของฉันให้ดี ครั้งหนึ่งเขาเคยเป็น... วิญญาณที่สงบสุขที่สุด",
						"hindi": "मेरी पेंटिंग को ध्यान से देखो। एक समय वह… सबसे शांतिपूर्ण आत्मा था。"
					}
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "벽화 속에는 고통받는 이들을 감싸 안는 온화한 존재가 그려져 있었다. 지금의 Dictate와는 너무나 달랐다.",
						"english": "The mural depicted a gentle being embracing the suffering. So unlike the Dictate of today.",
						"japanese": "壁画には、苦しむ人々を抱きしめる温和な存在が描かれていた。今のDictateとはあまりにも違っていた。",
						"chinese": "壁画中描绘了一个温柔的存在，拥抱着受苦之人。与如今的Dictate判若两人。",
						"french": "La fresque dépeignait un être doux étreignant les souffrants. Si différent du Dictate d'aujourd'hui.",
						"spanish": "El mural representaba un ser gentil que abrazaba a los que sufrían. Tan diferente al Dictate actual.",
						"vietnamese": "Bức bích họa vẽ một sinh vật dịu dàng ôm lấy những người đau khổ. Hoàn toàn khác với Dictate hiện tại.",
						"thai": "ภาพจิตรกรรมฝาผนังแสดงถึงสิ่งมีชีวิตที่อ่อนโยนโอบกอดผู้คนที่ทุกข์ทรมาน แตกต่างจาก Dictate ในปัจจุบันมาก",
						"hindi": "भित्तिचित्र में पीड़ितों को गले लगाने वाली एक सौम्य सत्ता को दर्शाया गया था। आज के डिक्टेट से बिल्कुल अलग।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이게… 진짜 Dictate의 모습이라고?",
						"english": "This is... the true face of Dictate?",
						"japanese": "これが…Dictateの本当の姿だと？",
						"chinese": "这就是…Dictate真正的样子？",
						"french": "C'est ça… le vrai visage de Dictate ?",
						"spanish": "¿Esta es… la verdadera cara de Dictate?",
						"vietnamese": "Đây là… bộ mặt thật của Dictate sao?",
						"thai": "นี่คือ... โฉมหน้าที่แท้จริงของ Dictate งั้นหรือ?",
						"hindi": "क्या यह… डिक्टेट का असली चेहरा है?"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "char",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "char",
					"content": {
						"korean": "그는 모든 혼란 속에서 가장 깊은 상처를 입었다.",
						"english": "Amidst all the chaos, he suffered the deepest wound.",
						"japanese": "あらゆる混乱の中で、彼は最も深い傷を負った。",
						"chinese": "在所有的混乱中，他受了最深的伤。",
						"french": "Au milieu de tout ce chaos, il a subi la plus profonde blessure.",
						"spanish": "En medio de todo el caos, él sufrió la herida más profunda.",
						"vietnamese": "Giữa tất cả hỗn loạn, anh ta đã phải chịu vết thương sâu sắc nhất.",
						"thai": "ท่ามกลางความวุ่นวายทั้งหมด เขาได้รับบาดแผลที่ลึกที่สุด",
						"hindi": "सारी अराजकता के बीच, उसे सबसे गहरा घाव लगा।"
					}
				},
				{
					"content": {
						"korean": "그래서… 질서라는 이름으로 모든 걸 파괴하는 건가?",
						"english": "So... he destroys everything in the name of order?",
						"japanese": "だから…秩序という名のもとに、すべてを破壊するのか？",
						"chinese": "所以…他以秩序之名摧毁一切？",
						"french": "Alors… il détruit tout au nom de l'ordre ?",
						"spanish": "Entonces… ¿destruye todo en nombre del orden?",
						"vietnamese": "Vậy là… anh ta hủy diệt mọi thứ nhân danh trật tự sao?",
						"thai": "ดังนั้น... เขาทําลายทุกสิ่งในนามของระเบียบงั้นหรือ?",
						"hindi": "तो… क्या वह व्यवस्था के नाम पर सब कुछ नष्ट कर देता है?"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "그의 고통이 율법이 되었지. 비극적이지 않나?",
						"english": "His suffering became the law. Isn't that tragic?",
						"japanese": "彼の苦痛が律法となった。悲劇的ではないか？",
						"chinese": "他的痛苦成了律法。这难道不悲剧吗？",
						"french": "Sa souffrance est devenue la loi. N'est-ce pas tragique ?",
						"spanish": "Su sufrimiento se convirtió en ley. ¿No es trágico?",
						"vietnamese": "Nỗi đau của anh ta đã trở thành luật pháp. Thật bi kịch phải không?",
						"thai": "ความทุกข์ทรมานของเขากลายเป็นกฎหมาย มันน่าเศร้าไม่ใช่หรือ?",
						"hindi": "उसका दर्द कानून बन गया। क्या यह दुखद नहीं है?"
					},
					"speaker": "char",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "…분노가 치밀어 오른다.",
						"english": "...Rage boils within me.",
						"japanese": "…怒りがこみ上げてくる。",
						"chinese": "…怒火中烧。",
						"french": "…La rage monte en moi.",
						"spanish": "…La rabia me invade.",
						"vietnamese": "…Sự tức giận dâng trào.",
						"thai": "...ความโกรธเดือดพล่าน",
						"hindi": "…क्रोध उमड़ रहा है।"
					},
					"type": "speech",
					"speaker": "character_1",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_2",
					"emotion": "angry",
					"content": {
						"korean": "이런 잔혹한 진실을 율법이라는 이름으로 숨겨왔다니.",
						"english": "To think such a cruel truth was hidden under the name of law.",
						"japanese": "こんな残酷な真実が律法という名で隠されてきたとは。",
						"chinese": "竟然以律法之名，掩盖如此残酷的真相。",
						"french": "Penser qu'une vérité si cruelle a été cachée sous le nom de loi.",
						"spanish": "Pensar que una verdad tan cruel fue escondida bajo el nombre de la ley.",
						"vietnamese": "Nghĩ rằng một sự thật tàn khốc như vậy lại bị che giấu dưới danh nghĩa luật pháp.",
						"thai": "การที่ความจริงอันโหดร้ายเช่นนี้ถูกซ่อนไว้ภายใต้ชื่อของกฎหมาย",
						"hindi": "यह सोचना कि ऐसी क्रूर सच्चाई कानून के नाम पर छिपी हुई थी।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						2,
						2
					],
					"speaker": "char",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "더 깊은 진실을 파헤치는 건 위험하다. 율법의 감시가 강화되고 있어.",
						"english": "Digging deeper into the truth is dangerous. The law's surveillance is intensifying.",
						"japanese": "より深い真実を暴くのは危険だ。律法の監視が強まっている。",
						"chinese": "挖掘更深层的真相很危险。律法的监视正在加强。",
						"french": "Creuser plus profondément dans la vérité est dangereux. La surveillance de la loi s'intensifie.",
						"spanish": "Profundizar en la verdad es peligroso. La vigilancia de la ley se está intensificando.",
						"vietnamese": "Khám phá sự thật sâu hơn là nguy hiểm. Sự giám sát của luật pháp đang gia tăng.",
						"thai": "การขุดคุ้ยความจริงที่ลึกซึ้งกว่านั้นเป็นอันตราย การเฝ้าระวังของกฎหมายกำลังเข้มข้นขึ้น",
						"hindi": "गहरी सच्चाई खोदना खतरनाक है। कानून की निगरानी तेज हो रही है।"
					},
					"emotion": "sad",
					"speaker": "char",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "멈출 수 없어. 이 비극을 끝내야 해.",
						"english": "I can't stop. This tragedy must end.",
						"japanese": "止められない。この悲劇を終わらせなければ。",
						"chinese": "我不能停。这场悲剧必须结束。",
						"french": "Je ne peux pas m'arrêter. Cette tragédie doit prendre fin.",
						"spanish": "No puedo parar. Esta tragedia debe terminar.",
						"vietnamese": "Tôi không thể dừng lại. Bi kịch này phải kết thúc.",
						"thai": "หยุดไม่ได้ ฉันต้องยุติโศกนาฏกรรมนี้",
						"hindi": "मैं रुक नहीं सकता। इस त्रासदी को खत्म करना होगा।"
					}
				},
				{
					"content": {
						"korean": "…조심해! 놈들이 움직인다!",
						"english": "...Watch out! They're moving!",
						"japanese": "「…気をつけろ！奴らが動くぞ！」",
						"chinese": "“……小心！他们行动了！”",
						"french": "...Attention ! Ils bougent !",
						"spanish": "...¡Cuidado! ¡Se mueven!",
						"vietnamese": "...Coi chừng! Bọn chúng đang di chuyển!",
						"thai": "...ระวัง! พวกมันกำลังเคลื่อนไหว!",
						"hindi": "...सावधान! वे हिल रहे हैं!"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "char"
				},
				{
					"direction": "down",
					"action": "exit",
					"speaker": "char",
					"duration_ms": 400,
					"type": "direction"
				},
				{
					"speaker": "random_boss",
					"spot": [
						7,
						7
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "금지된 이야기를 멈춰라. 율법은 너희를 심판할 것이다.",
						"english": "Cease your forbidden tales. The Law will judge you.",
						"japanese": "「禁じられた話を止めろ。律法がお前たちを裁くだろう。」",
						"chinese": "“停止这些禁忌之语。律法将审判你们。”",
						"french": "Cessez ces récits interdits. La Loi vous jugera.",
						"spanish": "Detened estas historias prohibidas. La Ley os juzgará.",
						"vietnamese": "Dừng những câu chuyện cấm. Luật pháp sẽ phán xét các ngươi.",
						"thai": "หยุดเรื่องราวต้องห้ามเสีย. กฎจะพิพากษาพวกเจ้า.",
						"hindi": "इन वर्जित कहानियों को रोको। कानून तुम्हें न्याय देगा।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…감히 진실을 가로막는 자인가!",
						"english": "...How dare you obstruct the truth!",
						"japanese": "「…よくも真実を阻むか！」",
						"chinese": "“……竟敢阻挠真相！”",
						"french": "...Comment osez-vous entraver la vérité !",
						"spanish": "...¡Cómo osas interponerte en el camino de la verdad!",
						"vietnamese": "...Ngươi dám cản trở sự thật sao!",
						"thai": "...บังอาจขัดขวางความจริงรึ!",
						"hindi": "...तुमने सत्य को रोकने की हिम्मत कैसे की!"
					}
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "율법은 깨지지 않는다. 너희의 저항은 무의미하다.",
						"english": "The law is unbreakable. Your resistance is meaningless.",
						"japanese": "律法は破られぬ。お前たちの抵抗は無意味だ。",
						"chinese": "律法不可破。你们的抵抗毫无意义。",
						"french": "La loi est inviolable. Votre résistance est futile.",
						"spanish": "La ley es inquebrantable. Vuestra resistencia es inútil.",
						"vietnamese": "Luật pháp là bất khả xâm phạm. Sự kháng cự của các ngươi là vô nghĩa.",
						"thai": "กฎหมายไม่อาจถูกทำลาย การต่อต้านของพวกเจ้าไร้ความหมาย",
						"hindi": "कानून अटूट है। तुम्हारा प्रतिरोध व्यर्थ है。"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "아직 끝나지 않았어. Dictate의 진실을 반드시 밝혀낼 것이다.",
						"english": "It's not over yet. I will surely uncover the truth of Dictate.",
						"japanese": "まだ終わってない。Dictateの真実を必ず暴いてみせる。",
						"chinese": "还没结束。我一定会揭露Dictate的真相。",
						"french": "Ce n'est pas encore fini. Je révélerai la vérité sur Dictate, c'est certain.",
						"spanish": "Aún no ha terminado. Sin duda, revelaré la verdad de Dictate.",
						"vietnamese": "Chưa kết thúc đâu. Tôi nhất định sẽ phơi bày sự thật về Dictate.",
						"thai": "ยังไม่จบแค่นี้หรอก ข้าจะเปิดเผยความจริงของ Dictate ให้ได้",
						"hindi": "अभी खत्म नहीं हुआ है। मैं Dictate की सच्चाई का ज़रूर पता लगाऊँगा।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				}
			],
			"dialogue": [
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "불순한 예술은 혼돈을 낳는다. 율법의 이름으로 정화하리라.",
						"english": "Impure art breeds chaos. In the name of the Law, I shall purify it.",
						"japanese": "「不浄な芸術は混沌を生む。律法の名のもとに浄化せん。」",
						"chinese": "“不洁的艺术滋生混乱。以律法之名，我将净化一切。”",
						"french": "L'art impur engendre le chaos. Au nom de la Loi, je le purifierai.",
						"spanish": "El arte impuro engendra el caos. En nombre de la Ley, lo purificaré.",
						"vietnamese": "Nghệ thuật không trong sạch tạo ra hỗn loạn. Nhân danh Luật pháp, ta sẽ thanh tẩy.",
						"thai": "ศิลปะอันแปดเปื้อนก่อให้เกิดความวุ่นวาย. ในนามแห่งกฎ, ข้าจะชำระล้างมัน.",
						"hindi": "अपवित्र कला अराजकता को जन्म देती है। कानून के नाम पर, मैं इसे शुद्ध करूँगा।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "당신이야말로 Dictate의 비극을 숨기려는 어리석은 자!",
						"english": "You are the fool trying to hide Dictate's tragedy!",
						"japanese": "「貴様こそDictateの悲劇を隠そうとする愚か者だ！」",
						"chinese": "“你才是那个企图隐藏Dictate悲剧的愚蠢之人！”",
						"french": "C'est vous, l'insensé qui tente de cacher la tragédie de Dictate !",
						"spanish": "¡Tú eres el necio que intenta ocultar la tragedia de Dictate!",
						"vietnamese": "Ngươi mới chính là kẻ ngốc đang cố che giấu bi kịch của Dictate!",
						"thai": "เจ้าต่างหากคือคนโง่ที่พยายามจะซ่อนโศกนาฏกรรมของ Dictate!",
						"hindi": "तुम ही हो मूर्ख जो Dictate की त्रासदी को छिपाने की कोशिश कर रहा है!"
					}
				},
				{
					"content": {
						"korean": "말도 안 되는 소리. 율법만이 모든 고통을 끝낸다.",
						"english": "Nonsense. Only the Law can end all suffering.",
						"japanese": "「馬鹿なことだ。律法だけが全ての苦痛を終わらせる。」",
						"chinese": "“胡说八道。唯有律法才能终结所有痛苦。”",
						"french": "Absurdité. Seule la Loi peut mettre fin à toute souffrance.",
						"spanish": "Tonterías. Solo la Ley puede poner fin a todo sufrimiento.",
						"vietnamese": "Vô lý. Chỉ có Luật pháp mới có thể chấm dứt mọi đau khổ.",
						"thai": "เหลวไหล. มีแต่กฎเท่านั้นที่จะยุติความทุกข์ทั้งหมดได้.",
						"hindi": "बकवास। केवल कानून ही सभी पीड़ाओं को समाप्त कर सकता है।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "크윽… 너희가 알게 될 진실은… 더 큰 고통이다….",
						"english": "Ugh... The truth you will learn... is an even greater agony...",
						"japanese": "「くっ…お前たちが知る真実は…さらなる苦痛だ…。」",
						"chinese": "“呃……你们将要知晓的真相……是更大的痛苦……。”",
						"french": "Ugh... La vérité que vous allez découvrir... est une souffrance encore plus grande...",
						"spanish": "Ugh... La verdad que descubriréis... es un tormento aún mayor...",
						"vietnamese": "Khụ... Sự thật mà các ngươi sẽ biết... là nỗi đau lớn hơn nữa...",
						"thai": "อึก... ความจริงที่พวกเจ้าจะได้รู้... คือความทรมานที่ยิ่งใหญ่กว่า...",
						"hindi": "उह... जो सच तुम जानोगे... वह और भी बड़ी पीड़ा है..."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "Dictate가 평화로웠다고? 그게 대체 무슨….",
						"english": "Dictate was peaceful? What in the world...",
						"japanese": "「Dictateが平和だっただと？一体どういう…。」",
						"chinese": "“Dictate曾经和平？那究竟是什么……。”",
						"french": "Dictate était en paix ? Mais qu'est-ce que...",
						"spanish": "¿Dictate estaba en paz? ¿Qué demonios...?",
						"vietnamese": "Dictate đã từng yên bình sao? Chuyện quái gì thế...",
						"thai": "Dictate เคยสงบสุข? นั่นมันเรื่องอะไรกัน...",
						"hindi": "Dictate शांतिपूर्ण था? यह सब क्या है..."
					}
				},
				{
					"action": "enter",
					"speaker": "char",
					"spot": [
						4,
						2
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "char",
					"content": {
						"korean": "더 깊은 곳으로 가야 해. Dictate의 심장으로….",
						"english": "We must go deeper. To the heart of Dictate...",
						"japanese": "「もっと深い場所へ行かねば。Dictateの心臓部へ…。」",
						"chinese": "“我们必须去更深的地方。前往Dictate的核心……。”",
						"french": "Nous devons aller plus profond. Au cœur de Dictate...",
						"spanish": "Debemos ir más profundo. Al corazón de Dictate...",
						"vietnamese": "Chúng ta phải đi sâu hơn. Đến trái tim của Dictate...",
						"thai": "เราต้องไปให้ลึกกว่านี้. สู่ใจกลางของ Dictate...",
						"hindi": "हमें और गहराई में जाना होगा। Dictate के दिल में..."
					}
				},
				{
					"content": {
						"korean": "금지된 예술이 폭로한 비극적인 진실. 이제 Dictate의 근원을 향해 나아갈 시간이다.",
						"english": "The tragic truth exposed by forbidden art. Now is the time to advance towards Dictate's origin.",
						"japanese": "「禁じられた芸術が暴いた悲劇的な真実。今こそDictateの根源へ向かう時だ。」",
						"chinese": "“被禁忌艺术揭露的悲惨真相。现在是时候前往Dictate的根源了。”",
						"french": "La vérité tragique révélée par l'art interdit. Il est maintenant temps d'avancer vers l'origine de Dictate.",
						"spanish": "La trágica verdad revelada por el arte prohibido. Ahora es el momento de avanzar hacia el origen de Dictate.",
						"vietnamese": "Sự thật bi thảm được nghệ thuật cấm đoán phơi bày. Giờ là lúc tiến về nguồn gốc của Dictate.",
						"thai": "ความจริงอันน่าเศร้าที่ศิลปะต้องห้ามได้เปิดเผย. บัดนี้ถึงเวลาที่จะมุ่งหน้าสู่ต้นกำเนิดของ Dictate แล้ว.",
						"hindi": "वर्जित कला द्वारा उजागर किया गया दुखद सत्य। अब Dictate के मूल की ओर बढ़ने का समय है।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"황량한 지옥 뒷골목, 율법이 미치지 않는 유일한 곳.",
			"이곳에서 '금지된 예술'만이 Dictate의 추악한 진실을 폭로한다.",
			"한때 평화로웠던 존재. 그 비극적인 과거의 흔적을 찾아서.",
			"진실은 예술가의 손끝에서 다시 살아난다. 하지만 그 대가는…."
		],
		"english": [
			"A desolate alley in hell, the only place beyond the law's reach.",
			"Here, only 'forbidden art' reveals Dictate's ugly truth.",
			"Once a peaceful entity. Searching for traces of its tragic past.",
			"Truth is reborn through the artist's fingertips. But the cost is..."
		],
		"japanese": [
			"荒涼たる地獄の裏路地、法の及ばぬ唯一の場所。",
			"ここでは、「禁断の芸術」だけがDictateの醜い真実を暴く。",
			"かつて平和だった存在。その悲劇的な過去の痕跡を求めて。",
			"真実は芸術家の指先で再び蘇る。しかし、その代償は…。"
		],
		"chinese": [
			"荒凉的地狱后巷，唯一一个法律无法触及之地。",
			"在这里，唯有“禁忌艺术”能揭露Dictate的丑陋真相。",
			"曾几何时，它是一个和平的存在。寻找其悲惨过去的痕迹。",
			"真相在艺术家的指尖重生。但代价是……"
		],
		"french": [
			"Une ruelle désolée en enfer, le seul endroit hors de portée de la loi.",
			"Ici, seul l'« art interdit » révèle la laide vérité de Dictate.",
			"Autrefois une entité paisible. À la recherche des traces de son passé tragique.",
			"La vérité renaît du bout des doigts de l'artiste. Mais le prix est..."
		],
		"spanish": [
			"Un callejón desolado en el infierno, el único lugar donde la ley no llega.",
			"Aquí, solo el 'arte prohibido' revela la fea verdad de Dictate.",
			"Una entidad otrora pacífica. En busca de las huellas de su trágico pasado.",
			"La verdad renace de las yemas de los dedos del artista. Pero el precio es..."
		],
		"vietnamese": [
			"Một con hẻm hoang vắng ở địa ngục, nơi duy nhất luật pháp không thể chạm tới.",
			"Ở đây, chỉ có 'nghệ thuật cấm' mới phơi bày sự thật xấu xí của Dictate.",
			"Từng là một thực thể yên bình. Đi tìm dấu vết quá khứ bi thảm của nó.",
			"Sự thật tái sinh qua ngón tay của nghệ sĩ. Nhưng cái giá phải trả là..."
		],
		"thai": [
			"ตรอกร้างในนรก สถานที่เดียวที่กฎหมายเอื้อมไม่ถึง",
			"ที่นี่ มีเพียง 'ศิลปะต้องห้าม' เท่านั้นที่จะเปิดเผยความจริงอันน่าเกลียดของ Dictate",
			"ครั้งหนึ่งเคยเป็นสิ่งมีชีวิตที่สงบสุข ตามหาร่องรอยของอดีตอันน่าเศร้า",
			"ความจริงกลับมามีชีวิตอีกครั้งด้วยปลายนิ้วของศิลปิน แต่ราคาที่ต้องจ่ายคือ..."
		],
		"hindi": [
			"नरक की एक उजाड़ गली, इकलौती जगह जहाँ कानून नहीं पहुँचता।",
			"यहाँ, केवल 'वर्जित कला' ही Dictate की बदसूरत सच्चाई उजागर करती है।",
			"कभी एक शांतिपूर्ण इकाई थी। उसके दुखद अतीत के निशान खोज रहे हैं।",
			"सच्चाई कलाकार की उंगलियों से फिर से जीवित होती है। लेकिन कीमत है..."
		]
	}
} as const;
