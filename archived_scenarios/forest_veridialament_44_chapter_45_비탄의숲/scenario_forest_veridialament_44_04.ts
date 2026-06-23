export const scenario_forest_veridialament_44_04 = {
	"scenario_id": "forest_veridialament_44_04",
	"order": 4,
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
			"숲은 침묵했다. 아니, 침묵당했다.",
			"비극은 반복된다는 숲의 경고.",
			"그리고 그 중심에, 분노만이 남은 수호자가 있었다.",
			"과거의 상처가 현재를 집어삼키려 한다."
		],
		"english": [
			"The forest was silent. No, it was silenced.",
			"The forest's warning: tragedy repeats.",
			"And at its heart, a guardian consumed by rage.",
			"Wounds of the past threaten to devour the present."
		],
		"japanese": [
			"森は沈黙していた。いや、沈黙させられていた。",
			"悲劇は繰り返される、森の警告。",
			"そしてその中心には、怒りだけが残った守護者がいた。",
			"過去の傷が現在を飲み込もうとしている。"
		],
		"chinese": [
			"森林寂静无声。不，是被迫寂静。",
			"森林的警告：悲剧重演。",
			"而在其中心，只剩下愤怒的守护者。",
			"过去的伤痛试图吞噬现在。"
		],
		"french": [
			"La forêt était silencieuse. Non, elle avait été réduite au silence.",
			"L'avertissement de la forêt : la tragédie se répète.",
			"Et en son cœur, un gardien dévoré par la rage.",
			"Les blessures du passé menacent de dévorer le présent."
		],
		"spanish": [
			"El bosque estaba en silencio. No, había sido silenciado.",
			"La advertencia del bosque: la tragedia se repite.",
			"Y en su centro, un guardián consumido por la ira.",
			"Las heridas del pasado amenazan con devorar el presente."
		],
		"vietnamese": [
			"Rừng im lặng. Không, rừng bị buộc phải im lặng.",
			"Lời cảnh báo của rừng: bi kịch lặp lại.",
			"Và ở trung tâm của nó, một người bảo vệ chỉ còn lại sự phẫn nộ.",
			"Những vết thương quá khứ đe dọa nuốt chửng hiện tại."
		],
		"thai": [
			"ป่าเงียบงัน ไม่สิ มันถูกทำให้เงียบงัน",
			"คำเตือนของป่า: โศกนาฏกรรมจะซ้ำรอย",
			"และใจกลางนั้น มีเพียงผู้พิทักษ์ที่เหลือไว้ซึ่งความโกรธแค้น",
			"บาดแผลจากอดีตกำลังจะกลืนกินปัจจุบัน"
		],
		"hindi": [
			"वन शांत था। नहीं, उसे शांत कर दिया गया था।",
			"वन की चेतावनी: त्रासदी दोहराई जाती है।",
			"और उसके केंद्र में, एक संरक्षक था जिसमें केवल क्रोध बचा था।",
			"अतीत के घाव वर्तमान को निगलने की धमकी दे रहे हैं।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "숲은 더욱 짙어졌다. 어딘가 익숙한 슬픔이 공기를 채웠다.",
						"english": "The forest grew darker. A familiar sadness filled the air.",
						"japanese": "森はさらに深まった。どこか懐かしい悲しみが空気を満たした。",
						"chinese": "森林变得更深了。某种熟悉的悲伤弥漫在空气中。",
						"french": "La forêt s'épaississait. Une tristesse familière emplissait l'air.",
						"spanish": "El bosque se hizo más denso. Una tristeza familiar llenó el aire.",
						"vietnamese": "Rừng trở nên u tối hơn. Một nỗi buồn quen thuộc tràn ngập không khí.",
						"thai": "ป่ามืดมิดลงเรื่อยๆ ความเศร้าที่คุ้นเคยปกคลุมทั่วอากาศ",
						"hindi": "वन और गहरा हो गया। एक जानी-पहचानी उदासी हवा में भर गई।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…여기, 뭔가 이상해.",
						"english": "...Something's wrong here.",
						"japanese": "…ここ、何かおかしい。",
						"chinese": "……这里，有点不对劲。",
						"french": "...Quelque chose ne va pas ici.",
						"spanish": "...Aquí, algo anda mal.",
						"vietnamese": "...Có gì đó không ổn ở đây.",
						"thai": "...ที่นี่ มีอะไรบางอย่างผิดปกติ",
						"hindi": "...यहां कुछ अजीब है।"
					}
				},
				{
					"speaker": "briar",
					"action": "enter",
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "briar",
					"content": {
						"korean": "더 이상 들어올 수 없다.",
						"english": "You cannot enter further.",
						"japanese": "これ以上は入れない。",
						"chinese": "无法再深入了。",
						"french": "Vous ne pouvez pas aller plus loin.",
						"spanish": "No puedes entrar más.",
						"vietnamese": "Không thể vào sâu hơn được nữa.",
						"thai": "เข้ามามากกว่านี้ไม่ได้แล้ว",
						"hindi": "आप और आगे नहीं आ सकते।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "우리는 길을 찾으려는 거야.",
						"english": "We're trying to find a way.",
						"japanese": "私たちは道を探しているんだ。",
						"chinese": "我们只是想找到一条路。",
						"french": "Nous essayons de trouver un chemin.",
						"spanish": "Estamos intentando encontrar un camino.",
						"vietnamese": "Chúng tôi đang cố tìm đường.",
						"thai": "เรากำลังพยายามหาทางออก",
						"hindi": "हम रास्ता ढूंढने की कोशिश कर रहे हैं।"
					}
				},
				{
					"content": {
						"korean": "네놈들 같은 것들이 숲을 망쳤다.",
						"english": "It's creatures like you who ruined the forest.",
						"japanese": "お前たちのような奴らが森を荒らしたんだ。",
						"chinese": "就是你们这种东西毁了森林。",
						"french": "Ce sont des créatures comme vous qui ont ruiné la forêt.",
						"spanish": "Seres como vosotros arruinaron el bosque.",
						"vietnamese": "Chính lũ các ngươi đã phá hủy khu rừng này.",
						"thai": "พวกแกนั่นแหละที่ทำลายป่า",
						"hindi": "तुम जैसे लोगों ने ही वन को बर्बाद किया है।"
					},
					"speaker": "briar",
					"type": "speech",
					"emotion": "angry"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "briar",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "briar",
					"content": {
						"korean": "여기서 멈춰라. 아니면….",
						"english": "Stop here. Or else...",
						"japanese": "ここで止まれ。さもなければ…。",
						"chinese": "到此为止。否则……",
						"french": "Arrêtez-vous ici. Ou sinon...",
						"spanish": "Detente aquí. O si no...",
						"vietnamese": "Dừng lại ở đây. Nếu không...",
						"thai": "หยุดอยู่ตรงนี้ ไม่อย่างนั้น...",
						"hindi": "यहीं रुक जाओ। वरना..."
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리야.",
						"english": "What are you talking about?",
						"japanese": "何を言っているんだ。",
						"chinese": "你在说什么。",
						"french": "De quoi tu parles ?",
						"spanish": "¿De qué estás hablando?",
						"vietnamese": "Anh đang nói cái gì vậy?",
						"thai": "คุณกำลังพูดถึงอะไร?",
						"hindi": "तुम क्या कह रहे हो?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "briar",
					"content": {
						"korean": "다시는 반복되지 않아. 내 부족이 당한 비극은.",
						"english": "It won't happen again. The tragedy my tribe endured.",
						"japanese": "二度と繰り返させない。私の部族が経験した悲劇は。",
						"chinese": "不会再重演了。我部落所遭受的悲剧。",
						"french": "Cela ne se reproduira plus. La tragédie que ma tribu a subie.",
						"spanish": "No se repetirá. La tragedia que sufrió mi tribu.",
						"vietnamese": "Điều đó sẽ không lặp lại nữa. Bi kịch mà bộ tộc của tôi đã phải chịu đựng.",
						"thai": "มันจะไม่เกิดขึ้นอีก โศกนาฏกรรมที่เผ่าของข้าต้องเผชิญ",
						"hindi": "यह फिर कभी नहीं होगा। मेरे कबीले ने जो त्रासदी झेली है।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "비극? 무슨….",
						"english": "Tragedy? What...?",
						"japanese": "悲劇？何を…。",
						"chinese": "悲剧？什么…。",
						"french": "Tragédie ? Quelle...",
						"spanish": "¿Tragedia? ¿Qué...?",
						"vietnamese": "Bi kịch? Cái gì...?",
						"thai": "โศกนาฏกรรม? อะไร...?",
						"hindi": "त्रासदी? क्या...?"
					},
					"speaker": "character_1"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "알 수 없는 죄책감이 주인공을 덮쳤다.",
						"english": "An unknown guilt washed over the protagonist.",
						"japanese": "説明のつかない罪悪感が主人公を襲った。",
						"chinese": "一种莫名的罪恶感笼罩了主人公。",
						"french": "Une culpabilité inconnue submergea le protagoniste.",
						"spanish": "Una culpa desconocida invadió al protagonista.",
						"vietnamese": "Một cảm giác tội lỗi không tên ập đến nhân vật chính.",
						"thai": "ความรู้สึกผิดที่ไม่ทราบสาเหตุปกคลุมตัวละครหลัก",
						"hindi": "एक अज्ञात अपराधबोध ने नायक को घेर लिया।"
					},
					"speaker": "narrator"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "briar",
					"action": "enter",
					"spot": [
						2,
						2
					]
				},
				{
					"speaker": "briar",
					"content": {
						"korean": "너희는 그 아이를 또 건드리려 하는가?",
						"english": "Are you trying to touch that child again?",
						"japanese": "お前たちは、またあの子供に手を出そうとするのか？",
						"chinese": "你们又要去招惹那个孩子吗？",
						"french": "Allez-vous encore toucher à cet enfant ?",
						"spanish": "¿Volvéis a intentar tocar a ese niño?",
						"vietnamese": "Các ngươi lại định đụng vào đứa bé đó sao?",
						"thai": "พวกเจ้ากำลังคิดจะแตะต้องเด็กคนนั้นอีกแล้วหรือ?",
						"hindi": "क्या तुम फिर से उस बच्चे को छूने की कोशिश कर रहे हो?"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "아이? 무슨 아이를 말하는 거야?",
						"english": "Child? What child are you talking about?",
						"japanese": "子供？何の子供のことを言っているんだ？",
						"chinese": "孩子？你在说什么孩子？",
						"french": "Enfant ? De quel enfant parles-tu ?",
						"spanish": "¿Niño? ¿De qué niño estás hablando?",
						"vietnamese": "Đứa bé? Anh đang nói đứa bé nào vậy?",
						"thai": "เด็ก? คุณกำลังพูดถึงเด็กคนไหน?",
						"hindi": "बच्चा? तुम किस बच्चे की बात कर रहे हो?"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "봉오리 속에서 잠든 나의 아이를… 또다시 유린할 셈이냐!",
						"english": "My child, sleeping in the bud... do you intend to violate them again?!",
						"japanese": "蕾の中で眠る私の子供を…またもや辱めるつもりか！",
						"chinese": "我那沉睡在花苞中的孩子…你们又想侵犯她吗！",
						"french": "Mon enfant, endormi dans le bourgeon... comptez-vous encore les profaner ?!",
						"spanish": "¡A mi hijo, durmiendo en el capullo... ¿pretendéis profanarlo de nuevo?!",
						"vietnamese": "Con của ta, đang ngủ trong nụ hoa... Các ngươi lại định xâm phạm nó sao!",
						"thai": "ลูกของข้าที่หลับใหลอยู่ในดอกตูม... เจ้าคิดจะลบหลู่พวกเขาอีกครั้งหรือ?!",
						"hindi": "मेरा बच्चा, कली में सो रहा है... क्या तुम उसे फिर से अपवित्र करने वाले हो?!"
					},
					"speaker": "briar",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "character_2",
					"content": {
						"korean": "우리는 그럴 의도가 없어!",
						"english": "We have no such intention!",
						"japanese": "我々にはそんな意図はない！",
						"chinese": "我们没有那种意图！",
						"french": "Nous n'avons pas cette intention !",
						"spanish": "¡No tenemos esa intención!",
						"vietnamese": "Chúng tôi không có ý đó!",
						"thai": "เราไม่มีเจตนาเช่นนั้น!",
						"hindi": "हमारा ऐसा कोई इरादा नहीं है!"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…우리가, 과거에 무슨 짓을 했나.",
						"english": "...What did we do in the past?",
						"japanese": "…我々が、過去に何をしたというのだ。",
						"chinese": "……我们，过去到底做了什么。",
						"french": "...Qu'avons-nous fait, dans le passé ?",
						"spanish": "...¿Qué hicimos en el pasado?",
						"vietnamese": "...Chúng ta, đã làm gì trong quá khứ vậy.",
						"thai": "...เราทำอะไรลงไปในอดีต?",
						"hindi": "...हमने अतीत में क्या किया था?"
					},
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						4,
						2
					],
					"action": "enter",
					"speaker": "briar",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "briar",
					"content": {
						"korean": "내 목숨을 걸고 막겠다. 아무도 그 아이에게 다가가지 못해!",
						"english": "I'll stop them with my life. No one will get near that child!",
						"japanese": "私の命にかけても止めよう。誰もあの子に近づけない！",
						"chinese": "我会赌上性命阻止。谁也别想靠近那个孩子！",
						"french": "Je les arrêterai de ma vie. Personne n'approchera cet enfant !",
						"spanish": "Lo impediré con mi vida. ¡Nadie se acercará a ese niño!",
						"vietnamese": "Ta sẽ ngăn chặn bằng cả mạng sống này. Không ai được phép đến gần đứa bé đó!",
						"thai": "ข้าจะหยุดพวกเขาด้วยชีวิตของข้า ไม่มีใครจะเข้าใกล้เด็กคนนั้นได้!",
						"hindi": "मैं अपनी जान पर खेलकर रोकूंगा। कोई भी उस बच्चे के पास नहीं जा पाएगा!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "브라이어! 오해야!",
						"english": "Briar! It's a misunderstanding!",
						"japanese": "「ブライア！誤解だ！」",
						"chinese": "布莱尔！这是个误会！",
						"french": "Briar ! C'est un malentendu !",
						"spanish": "¡Briar! ¡Es un malentendido!",
						"vietnamese": "Briar! Đây là hiểu lầm!",
						"thai": "ไบรเออร์! นี่มันเข้าใจผิด!",
						"hindi": "ब्रायर! यह एक गलतफहमी है!"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "briar",
					"content": {
						"korean": "오해? 네놈들의 손에 내 부족의 피가 묻어 있다!",
						"english": "Misunderstanding? Your hands are stained with my tribe's blood!",
						"japanese": "「誤解だと？貴様らの手には我が部族の血が！」",
						"chinese": "误会？你们的手上沾满了我的族人的血！",
						"french": "Un malentendu ? Vos mains sont souillées du sang de ma tribu !",
						"spanish": "¿Malentendido? ¡Vuestras manos están manchadas con la sangre de mi tribu!",
						"vietnamese": "Hiểu lầm ư? Tay các ngươi đã nhuốm máu bộ tộc ta!",
						"thai": "เข้าใจผิดเหรอ? มือของพวกแกเปื้อนเลือดเผ่าของข้า!",
						"hindi": "गलतफहमी? तुम्हारे हाथ मेरे कबीले के खून से सने हैं!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "우린 너와 싸우고 싶지 않아.",
						"english": "We don't want to fight you.",
						"japanese": "「私たちはあなたと戦いたくない。」",
						"chinese": "我们不想与你为敌。",
						"french": "Nous ne voulons pas te combattre.",
						"spanish": "No queremos luchar contigo.",
						"vietnamese": "Chúng tôi không muốn chiến đấu với ngươi.",
						"thai": "เราไม่อยากสู้กับเจ้า",
						"hindi": "हम तुमसे लड़ना नहीं चाहते।"
					},
					"speaker": "character_3",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…하지만, 멈출 수도 없어.",
						"english": "...But we can't stop either.",
						"japanese": "「…だが、止まることもできない。」",
						"chinese": "...但是，也无法停止。",
						"french": "...Mais nous ne pouvons pas nous arrêter non plus.",
						"spanish": "...Pero tampoco podemos detenernos.",
						"vietnamese": "...Nhưng cũng không thể dừng lại.",
						"thai": "...แต่ก็หยุดไม่ได้",
						"hindi": "...लेकिन हम रुक भी नहीं सकते।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "숙명처럼 다가오는 전투. 피할 수 없었다.",
						"english": "A battle approaching like destiny. It was unavoidable.",
						"japanese": "「宿命のように迫る戦い。避けることはできなかった。」",
						"chinese": "一场宿命般的战斗。无法避免。",
						"french": "Un combat inévitable, comme le destin. On ne pouvait pas l'éviter.",
						"spanish": "Una batalla que se acercaba como el destino. Era inevitable.",
						"vietnamese": "Cuộc chiến đến như định mệnh. Không thể tránh khỏi.",
						"thai": "การต่อสู้ที่กำลังจะมาถึงเหมือนโชคชะตา หลีกเลี่ยงไม่ได้",
						"hindi": "नियति की तरह आता युद्ध। यह अपरिहार्य था।"
					},
					"speaker": "narrator"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"speaker": "briar",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "…마지막 경고다. 물러서라.",
						"english": "...This is your last warning. Retreat.",
						"japanese": "「…最後の警告だ。下がれ。」",
						"chinese": "...这是你最后一次警告。退下。",
						"french": "...C'est ton dernier avertissement. Recule.",
						"spanish": "...Es tu última advertencia. Retírate.",
						"vietnamese": "...Đây là lời cảnh báo cuối cùng. Rút lui.",
						"thai": "...นี่คือคำเตือนสุดท้าย ถอยไปซะ",
						"hindi": "...यह तुम्हारी आखिरी चेतावनी है। पीछे हट जाओ।"
					},
					"speaker": "briar",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "브라이어…! 부탁이야, 길을 비켜줘.",
						"english": "Briar...! Please, clear the way.",
						"japanese": "「ブライア…！お願いだ、道をあけてくれ。」",
						"chinese": "布莱尔...! 拜托，让开路。",
						"french": "Briar... ! S'il te plaît, écarte-toi du chemin.",
						"spanish": "¡Briar...! Por favor, déjanos pasar.",
						"vietnamese": "Briar...! Xin hãy tránh đường.",
						"thai": "ไบรเออร์...! ได้โปรด หลีกทางให้หน่อย",
						"hindi": "ब्रायर...! कृपया, रास्ता छोड़ दो।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "숲의 심판이 너희를 덮칠 것이다.",
						"english": "The forest's judgment will fall upon you.",
						"japanese": "「森の審判がお前たちを襲うだろう。」",
						"chinese": "森林的审判将降临到你们身上。",
						"french": "Le jugement de la forêt s'abattra sur vous.",
						"spanish": "El juicio del bosque caerá sobre vosotros.",
						"vietnamese": "Sự phán xét của khu rừng sẽ giáng xuống các ngươi.",
						"thai": "การพิพากษาของป่าจะลงทัณฑ์พวกเจ้า",
						"hindi": "वन का न्याय तुम पर बरसेगा।"
					},
					"speaker": "briar",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 숲의 심장을 지키고 있었다.",
						"english": "A colossal shadow was guarding the heart of the forest.",
						"japanese": "「巨大な影が森の心臓を守っていた。」",
						"chinese": "一个巨大的影子守护着森林的心脏。",
						"french": "Une ombre colossale gardait le cœur de la forêt.",
						"spanish": "Una sombra colosal protegía el corazón del bosque.",
						"vietnamese": "Một bóng tối khổng lồ đang canh giữ trái tim của khu rừng.",
						"thai": "เงาขนาดใหญ่กำลังเฝ้าหัวใจของป่า",
						"hindi": "एक विशाल छाया जंगल के हृदय की रक्षा कर रही थी।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "감히… 여기까지 발을 들이는가.",
						"english": "How dare you... set foot here.",
						"japanese": "「よくも…ここまで足を踏み入れたな。」",
						"chinese": "竟敢…踏足此处。",
						"french": "Comment osez-vous... mettre les pieds ici.",
						"spanish": "¿Cómo osas... poner un pie aquí?",
						"vietnamese": "Dám... đặt chân đến đây sao.",
						"thai": "กล้าดียังไง... มาเหยียบที่นี่",
						"hindi": "हिम्मत कैसे हुई तुम्हारी... यहां पैर रखने की।"
					}
				},
				{
					"content": {
						"korean": "이게… 브라이어가 지키던 것이었나?",
						"english": "This... was what Briar was guarding?",
						"japanese": "「これが…ブライアが守っていたものだったのか？」",
						"chinese": "“这…就是布莱尔守护的东西吗？”",
						"french": "« C'était donc... ce que Briar protégeait ? »",
						"spanish": "¿Esto... era lo que Briar protegía?",
						"vietnamese": "Đây... là thứ Briar bảo vệ sao?",
						"thai": "นี่... คือสิ่งที่ไบรอาร์เฝ้าเหรอ?",
						"hindi": "यह... वही था जिसकी ब्रायर रक्षा कर रहा था?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "briar",
					"spot": [
						4,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "크으… 결국….",
						"english": "Ugh... in the end...",
						"japanese": "「くぅ…結局…。」",
						"chinese": "“唔…最终…”",
						"french": "« Ugh... au final... »",
						"spanish": "Ugh... al final...",
						"vietnamese": "Khụ... cuối cùng...",
						"thai": "เฮือก... สุดท้ายแล้ว...",
						"hindi": "उफ़... अंततः..."
					},
					"speaker": "briar"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "그래… 너희도… 그들과 같지… 않았구나….",
						"english": "Right... you too... weren't like them...",
						"japanese": "「そうか…お前たちも…彼らとは違ったのだな…。」",
						"chinese": "“是啊…你们也…和他们不一样啊…”",
						"french": "« Alors... vous non plus... n'étiez pas comme eux... »",
						"spanish": "Ya veo... vosotros tampoco... erais como ellos...",
						"vietnamese": "Phải... các ngươi cũng... không giống bọn họ...",
						"thai": "งั้นเหรอ... พวกเจ้าเองก็... ไม่เหมือนพวกนั้นสินะ...",
						"hindi": "हाँ... तुम भी... उनके जैसे नहीं थे..."
					},
					"speaker": "briar"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "브라이어….",
						"english": "Briar...",
						"japanese": "「ブライア…。」",
						"chinese": "“布莱尔…”",
						"french": "« Briar... »",
						"spanish": "Briar...",
						"vietnamese": "Briar...",
						"thai": "ไบรอาร์...",
						"hindi": "ब्रायर..."
					}
				},
				{
					"content": {
						"korean": "오해 속에 시작된 비극적인 전투. 끝나지 않는 죄책감이 숲을 감쌌다.",
						"english": "A tragic battle born of misunderstanding. Unending guilt enveloped the forest.",
						"japanese": "「誤解の中で始まった悲劇的な戦い。終わりのない罪悪感が森を包んだ。」",
						"chinese": "“一场始于误会的悲剧性战斗。无尽的罪恶感笼罩着森林。”",
						"french": "« Une bataille tragique née d'un malentendu. Une culpabilité sans fin enveloppait la forêt. »",
						"spanish": "Una batalla trágica nacida de un malentendido. Una culpa interminable envolvió el bosque.",
						"vietnamese": "Một trận chiến bi thảm bắt nguồn từ hiểu lầm. Cảm giác tội lỗi không dứt bao trùm khu rừng.",
						"thai": "การต่อสู้สุดโศกนาฏกรรมที่เริ่มต้นจากความเข้าใจผิด ความรู้สึกผิดที่ไม่มีที่สิ้นสุดปกคลุมป่าเอาไว้",
						"hindi": "गलतफहमी से शुरू हुई एक दुखद लड़ाई। अंतहीन अपराधबोध ने जंगल को घेर लिया।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "그러나 숲의 심장은 여전히 무언가를 갈구하는 듯, 희미하게 고동치고 있었다.",
						"english": "Yet the forest's heart still faintly pulsed, as if yearning for something.",
						"japanese": "「しかし、森の心臓は、何かを渇望するかのように、か細く鼓動を続けていた。」",
						"chinese": "“然而，森林的心脏依然微弱地跳动着，仿佛在渴望着什么。”",
						"french": "« Pourtant, le cœur de la forêt battait encore faiblement, comme s'il aspirait à quelque chose. »",
						"spanish": "Sin embargo, el corazón del bosque aún latía débilmente, como si anhelara algo.",
						"vietnamese": "Tuy nhiên, trái tim khu rừng vẫn đập yếu ớt, như thể vẫn đang khao khát điều gì đó.",
						"thai": "ทว่าหัวใจของป่ายังคงเต้นแผ่วเบา ราวกับยังคงโหยหาบางสิ่งอยู่",
						"hindi": "फिर भी, जंगल का दिल अभी भी मंद-मंद धड़क रहा था, मानो किसी चीज़ के लिए तरस रहा हो।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"spot": [
						3,
						2
					],
					"speaker": "briar",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "숲의 수호자는 쓰러지지 않았다.",
						"english": "The forest's guardian has not fallen.",
						"japanese": "「森の守護者は、倒れていない。」",
						"chinese": "“森林的守护者并未倒下。”",
						"french": "« Le gardien de la forêt n'est pas tombé. »",
						"spanish": "El guardián del bosque no ha caído.",
						"vietnamese": "Kẻ bảo vệ khu rừng không gục ngã.",
						"thai": "ผู้พิทักษ์ป่าไม่ล้มลง",
						"hindi": "जंगल का संरक्षक नहीं गिरा।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…감히… 여기까지 올 생각인가.",
						"english": "...Dare you... come this far?",
						"japanese": "「…よくも…ここまで来る気になったな。」",
						"chinese": "“……竟敢……来到这里。”",
						"french": "« ...Comment osez-vous... venir jusqu'ici ? »",
						"spanish": "¿Osas... llegar hasta aquí?",
						"vietnamese": "...Dám... đến tận đây sao?",
						"thai": "...กล้าดียังไง... มาถึงที่นี่ได้?",
						"hindi": "...क्या तुम्हारी हिम्मत हुई... यहाँ तक आने की?"
					},
					"speaker": "briar"
				},
				{
					"content": {
						"korean": "어리석은 것들. 너희에겐… 희망 따윈 없다.",
						"english": "Foolish ones. For you... there is no hope.",
						"japanese": "「愚かな者たちめ。お前たちに…希望などない。」",
						"chinese": "“愚蠢的东西。你们…没有希望。”",
						"french": "« Idiots. Pour vous... il n'y a aucun espoir. »",
						"spanish": "Necios. Para vosotros... no hay esperanza alguna.",
						"vietnamese": "Lũ ngốc. Các ngươi... không có hy vọng đâu.",
						"thai": "พวกโง่เง่า สำหรับพวกเจ้า... ไม่มีหวังหรอก",
						"hindi": "मूर्खों। तुम्हारे लिए... कोई आशा नहीं है।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…아직, 끝나지 않았어.",
						"english": "...It's not over yet.",
						"japanese": "「…まだ、終わっていない。」",
						"chinese": "“……还没，结束。”",
						"french": "« ...Ce n'est pas encore fini. »",
						"spanish": "Todavía no ha terminado.",
						"vietnamese": "...Vẫn chưa kết thúc đâu.",
						"thai": "...ยังไม่จบหรอก",
						"hindi": "...अभी, खत्म नहीं हुआ है।"
					},
					"emotion": "angry",
					"type": "speech"
				}
			],
			"id": 15
		}
	]
} as const;
