export const scenario_desert_solemnverdict_19_02 = {
	"scenario_id": "desert_solemnverdict_19_02",
	"order": 2,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"ferro": {
			"id": "mon_5c70c6fb-4f52-4d23-99f0-5feaf177dd7d",
			"name": {
				"korean": "페로",
				"english": "Ferro",
				"japanese": "フェロ",
				"chinese": "费罗",
				"french": "Ferro",
				"spanish": "Ferro",
				"vietnamese": "Ferro",
				"thai": "เฟอร์โร",
				"hindi": "फेरो"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a3074391-6f80-4537-3ad2-d4347b9d5500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a3c6cecf-f0c6-42f7-cda1-ddf11348ad00/public"
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
						"korean": "모래시계의 그림자가 길게 드리워진 도시 외곽. 찢어질 듯한 비명이 메아리쳤다.",
						"english": "On the outskirts of the city, where the hourglass's shadow stretched long, a piercing scream echoed.",
						"japanese": "砂時計の影が長く伸びる都市の外れ。耳をつんざくような悲鳴が木霊した。",
						"chinese": "在沙漏的影子拉长的城市郊区，一声撕心裂肺的尖叫回荡着。",
						"french": "À la périphérie de la ville, où l'ombre du sablier s'étirait, un cri perçant résonnait.",
						"spanish": "En las afueras de la ciudad, donde la sombra del reloj de arena se proyectaba larga, un grito desgarrador resonó.",
						"vietnamese": "Ở ngoại ô thành phố, nơi bóng của đồng hồ cát đổ dài, một tiếng thét xé lòng vang vọng.",
						"thai": "บริเวณชานเมืองที่เงาของนาฬิกาทรายทอดยาว เสียงกรีดร้องที่แผดเผาก้องกังวาน",
						"hindi": "शहर के बाहरी इलाके में, जहाँ रेतघड़ी की छाया लंबी पड़ रही थी, एक चीख गूंज उठी।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "ferro",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "내 가족은… 모래시계가 삼켰어!",
						"english": "My family… the hourglass devoured them!",
						"japanese": "私の家族は… 砂時計が飲み込んだ！",
						"chinese": "我的家人… 被沙漏吞噬了！",
						"french": "Ma famille… le sablier l'a dévorée !",
						"spanish": "¡Mi familia… el reloj de arena la devoró!",
						"vietnamese": "Gia đình tôi… bị đồng hồ cát nuốt chửng rồi!",
						"thai": "ครอบครัวของฉัน… ถูกนาฬิกาทรายกลืนกิน!",
						"hindi": "मेरा परिवार… रेतघड़ी ने निगल लिया!"
					},
					"type": "speech",
					"speaker": "ferro",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "누구냐, 너는?",
						"english": "Who are you?",
						"japanese": "お前は誰だ？",
						"chinese": "你是谁？",
						"french": "Qui es-tu ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Ngươi là ai?",
						"thai": "เจ้าเป็นใคร?",
						"hindi": "तुम कौन हो?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "ferro",
					"content": {
						"korean": "나는 페로. 진실을 아는 자다!",
						"english": "I am Pelo. One who knows the truth!",
						"japanese": "私はペロ。真実を知る者だ！",
						"chinese": "我是佩洛。知晓真相之人！",
						"french": "Je suis Pelo. Celui qui connaît la vérité !",
						"spanish": "Soy Pelo. ¡Quien conoce la verdad!",
						"vietnamese": "Ta là Pelo. Người biết sự thật!",
						"thai": "ข้าคือเพโล ผู้รู้ความจริง!",
						"hindi": "मैं पेल्लो हूँ। सच जानने वाला!"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "ferro",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "ferro",
					"content": {
						"korean": "수호자들은 거짓말쟁이야. 그들의 눈물은 가짜라고!",
						"english": "The guardians are liars. Their tears are fake!",
						"japanese": "守護者たちは嘘つきだ。彼らの涙は偽物だ！",
						"chinese": "守护者们都是骗子。他们的眼泪是假的！",
						"french": "Les gardiens sont des menteurs. Leurs larmes sont fausses !",
						"spanish": "Los guardianes son mentirosos. ¡Sus lágrimas son falsas!",
						"vietnamese": "Những người bảo vệ là kẻ nói dối. Nước mắt của họ là giả!",
						"thai": "ผู้พิทักษ์เป็นคนโกหก น้ำตาของพวกเขาเป็นของปลอม!",
						"hindi": "संरक्षक झूठे हैं। उनके आँसू नकली हैं!"
					}
				},
				{
					"content": {
						"korean": "…증거가 있어?",
						"english": "…Do you have proof?",
						"japanese": "…証拠はあるのか？",
						"chinese": "…你有证据吗？",
						"french": "…As-tu des preuves ?",
						"spanish": "¿…Tienes pruebas?",
						"vietnamese": "…Ngươi có bằng chứng không?",
						"thai": "…มีหลักฐานหรือเปล่า?",
						"hindi": "…क्या तुम्हारे पास सबूत है?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "ferro",
					"content": {
						"korean": "오래된 유적 벽화에… 블레이드마스터들이 서로를 겨누고 있었어. 공식 역사와는 달랐다고.",
						"english": "On ancient ruins' murals… Blademasters were poised against each other. It was different from official history.",
						"japanese": "古代遺跡の壁画に…ブレードマスターたちが互いに剣を向けていた。公式の歴史とは違ったんだ。",
						"chinese": "古老遗迹的壁画上…刀剑大师们刀剑相向。这与官方历史不同。",
						"french": "Sur les fresques des ruines antiques… les Maîtres-Lames se faisaient face. C'était différent de l'histoire officielle.",
						"spanish": "En los murales de las ruinas antiguas… los Maestros de la Hoja se apuntaban mutuamente. Era diferente de la historia oficial.",
						"vietnamese": "Trên bức bích họa trong di tích cổ… các Kiếm Sư đang đối đầu nhau. Khác với lịch sử chính thức.",
						"thai": "บนจิตรกรรมฝาผนังซากปรักหักพังโบราณ… เบลดมาสเตอร์เล็งดาบเข้าหากัน มันต่างจากประวัติศาสตร์ทางการ",
						"hindi": "प्राचीन खंडहरों की भित्तिचित्रों में… ब्लेडमास्टर एक-दूसरे पर निशाना साध रहे थे। यह आधिकारिक इतिहास से अलग था।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "블레이드마스터들이… 서로를?",
						"english": "Blademasters... each other?",
						"japanese": "ブレードマスターたちが…互いを？",
						"chinese": "刀剑大师们……互相？",
						"french": "Les Maîtres-Lames… entre eux ?",
						"spanish": "¿Los Maestros de la Hoja… entre sí?",
						"vietnamese": "Các Kiếm Sư… đối đầu nhau ư?",
						"thai": "เบลดมาสเตอร์… ใส่กันเองเหรอ?",
						"hindi": "ब्लेडमास्टर… एक-दूसरे पर?"
					}
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"type": "direction",
					"speaker": "ferro",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "ferro",
					"content": {
						"korean": "모래시계의 비밀을 파헤쳐야 해. 나 혼자서는 안 돼.",
						"english": "We must uncover the hourglass's secret. I can't do it alone.",
						"japanese": "砂時計の秘密を暴かなければならない。私一人では無理だ。",
						"chinese": "必须揭开沙漏的秘密。我一个人办不到。",
						"french": "Nous devons percer le secret du sablier. Je ne peux pas le faire seul.",
						"spanish": "Debemos descubrir el secreto del reloj de arena. No puedo hacerlo solo.",
						"vietnamese": "Phải lật tẩy bí mật của Đồng Hồ Cát. Một mình tôi không thể.",
						"thai": "เราต้องเปิดเผยความลับของนาฬิกาทราย ฉันทำคนเดียวไม่ได้",
						"hindi": "हमें रेतघड़ी का रहस्य उजागर करना होगा। मैं अकेला नहीं कर सकता।"
					}
				},
				{
					"content": {
						"korean": "혼자서는 위험할 거야. 우리가 돕겠어.",
						"english": "It will be dangerous alone. We'll help.",
						"japanese": "一人では危険だろう。私たちが手伝おう。",
						"chinese": "一个人会很危险。我们来帮你。",
						"french": "Ce sera dangereux seul. Nous t'aiderons.",
						"spanish": "Solo será peligroso. Te ayudaremos.",
						"vietnamese": "Một mình sẽ nguy hiểm đấy. Chúng tôi sẽ giúp.",
						"thai": "ไปคนเดียวอันตราย เราจะช่วยเอง",
						"hindi": "अकेले खतरनाक होगा। हम मदद करेंगे।"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "진실을 위해… 함께 가자.",
						"english": "For the truth... let's go together.",
						"japanese": "真実のために…共に行こう。",
						"chinese": "为了真相……我们一起去。",
						"french": "Pour la vérité… allons-y ensemble.",
						"spanish": "Por la verdad… vayamos juntos.",
						"vietnamese": "Vì sự thật… hãy cùng đi.",
						"thai": "เพื่อความจริง… ไปด้วยกันเถอะ",
						"hindi": "सच के लिए… चलो साथ चलते हैं।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "ferro"
				},
				{
					"content": {
						"korean": "거짓된 성역의 심장부로 향하는 길. 모래폭풍이 몰아쳤다.",
						"english": "The path to the heart of the false sanctuary. A sandstorm raged.",
						"japanese": "偽りの聖域の心臓部へ向かう道。砂嵐が吹き荒れていた。",
						"chinese": "通往虚假圣地心脏的道路。沙尘暴肆虐。",
						"french": "Le chemin vers le cœur du faux sanctuaire. Une tempête de sable faisait rage.",
						"spanish": "El camino al corazón del falso santuario. Una tormenta de arena se desató.",
						"vietnamese": "Con đường dẫn đến trái tim của Thánh Địa giả dối. Một trận bão cát ập đến.",
						"thai": "เส้นทางสู่ใจกลางของวิหารลวงตา พายุทรายโหมกระหน่ำ",
						"hindi": "झूठे अभयारण्य के हृदय की ओर का रास्ता। एक रेत का तूफान उमड़ पड़ा।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "점점 더 깊은 곳. 모래시계의 파수꾼이 나타났다.",
						"english": "Deeper and deeper. The Hourglass Guardian appeared.",
						"japanese": "ますます深き場所。砂時計の番人が現れた。",
						"chinese": "越来越深的地方。沙漏的守护者出现了。",
						"french": "Toujours plus profond. Le Gardien du Sablier apparut.",
						"spanish": "Cada vez más profundo. El Guardián del Reloj de Arena apareció.",
						"vietnamese": "Càng lúc càng sâu. Người canh gác Đồng Hồ Cát xuất hiện.",
						"thai": "ลึกลงไปเรื่อยๆ ผู้พิทักษ์นาฬิกาทรายปรากฏตัวขึ้น",
						"hindi": "और गहरा, और गहरा। रेतघड़ी का संरक्षक प्रकट हुआ।"
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "죄악을 품은 자들… 더 이상 다가오지 마라.",
						"english": "Sinful ones... come no closer.",
						"japanese": "罪を抱きし者たち…これ以上近づくな。",
						"chinese": "身负罪孽之人……别再靠近了。",
						"french": "Âmes pécheresses… n'approchez pas davantage.",
						"spanish": "Pecadores… no os acerquéis más.",
						"vietnamese": "Những kẻ mang tội lỗi… đừng đến gần nữa.",
						"thai": "เหล่าคนบาป… อย่าเข้ามาใกล้กว่านี้",
						"hindi": "पापियों… और पास मत आना।"
					}
				},
				{
					"content": {
						"korean": "너희의 죄는 우리가 밝힐 거야!",
						"english": "We will expose your sins!",
						"japanese": "お前たちの罪は、我々が暴いてやる！",
						"chinese": "你们的罪行将由我们来揭露！",
						"french": "Nous révélerons vos péchés !",
						"spanish": "¡Nosotros revelaremos vuestros pecados!",
						"vietnamese": "Tội lỗi của các ngươi, chúng ta sẽ vạch trần!",
						"thai": "ความผิดของพวกเจ้า เราจะเปิดเผยมันเอง!",
						"hindi": "हम तुम्हारे पापों को उजागर करेंगे!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"spot": [
						3,
						1
					],
					"type": "direction",
					"speaker": "ferro",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "우리의 고통을… 잊지 마라!",
						"english": "Don't forget... our suffering!",
						"japanese": "我々の苦痛を…忘れるな！",
						"chinese": "不要忘记……我们的痛苦！",
						"french": "N'oubliez pas… notre souffrance !",
						"spanish": "¡No olvidéis… nuestro sufrimiento!",
						"vietnamese": "Đừng quên… nỗi đau của chúng ta!",
						"thai": "อย่าลืม… ความเจ็บปวดของเรา!",
						"hindi": "हमारे दर्द को… मत भूलना!"
					},
					"emotion": "angry",
					"speaker": "ferro",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "죄인들은 대가를 치러야 한다. 고통 속에서 반성해라.",
						"english": "Sinners must pay the price. Reflect in agony.",
						"japanese": "罪人どもは代償を払うべし。苦痛の中で反省せよ。",
						"chinese": "罪人必将付出代价。在痛苦中反省吧。",
						"french": "Les pécheurs doivent payer le prix. Réfléchissez dans l'agonie.",
						"spanish": "Los pecadores deben pagar el precio. Reflexionad en la agonía.",
						"vietnamese": "Tội nhân phải trả giá. Hãy hối lỗi trong đau đớn.",
						"thai": "คนบาปต้องชดใช้ จงสำนึกผิดในความเจ็บปวด",
						"hindi": "पापियों को कीमत चुकानी होगी। पीड़ा में पश्चाताप करो।"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "여기서 멈출 순 없어…!",
						"english": "I can't stop here...!",
						"japanese": "ここで立ち止まるわけにはいかない…！",
						"chinese": "不能止步于此…！",
						"french": "Je ne peux pas m'arrêter ici... !",
						"spanish": "¡No puedo parar aquí...!",
						"vietnamese": "Không thể dừng lại ở đây…!",
						"thai": "จะหยุดอยู่แค่นี้ไม่ได้...!",
						"hindi": "मैं यहाँ नहीं रुक सकता...!"
					}
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "ferro",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "포기하지 않아… 결코!",
						"english": "I won't give up... Never!",
						"japanese": "諦めない… 断じて！",
						"chinese": "绝不放弃… 永不！",
						"french": "Je n'abandonnerai pas... Jamais !",
						"spanish": "¡No me rindo... Jamás!",
						"vietnamese": "Không bỏ cuộc… Tuyệt đối không!",
						"thai": "ไม่ยอมแพ้... ไม่มีทาง!",
						"hindi": "मैं हार नहीं मानूँगा... कभी नहीं!"
					},
					"speaker": "ferro",
					"emotion": "angry",
					"type": "speech"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "크크… 겨우 이런 것이라니. 진짜 심판은… 아직 시작도 안 했다.",
						"english": "Heh heh... Is this all? The real judgment... hasn't even begun.",
						"japanese": "クク… たかがこんなものか。本当の審判は… まだ始まってもいない。",
						"chinese": "呵呵… 仅此而已吗。真正的审判… 尚未开始。",
						"french": "Hé hé… C'est tout ce qu'il y a ? Le vrai jugement… n'a même pas commencé.",
						"spanish": "Je je… ¿Esto es todo? El verdadero juicio… ni siquiera ha empezado.",
						"vietnamese": "Hề hề… Chỉ có thế này thôi sao. Phán xét thật sự… còn chưa bắt đầu.",
						"thai": "ฮึ่มๆ... แค่นี้เองรึ การพิพากษาที่แท้จริง... ยังไม่เริ่มเลยด้วยซ้ำ",
						"hindi": "हँ हँ... बस यही है? असली न्याय... अभी शुरू भी नहीं हुआ।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "쓰러뜨렸지만… 뭔가 찜찜해.",
						"english": "We defeated them... but something feels off.",
						"japanese": "倒したが… 何か腑に落ちない。",
						"chinese": "虽然打倒了… 但总觉得有些不对劲。",
						"french": "Nous les avons vaincus... mais quelque chose cloche.",
						"spanish": "Los derrotamos... pero algo no cuadra.",
						"vietnamese": "Đã đánh bại rồi… nhưng cảm thấy có gì đó không ổn.",
						"thai": "ล้มมันได้แล้ว... แต่รู้สึกไม่ชอบมาพากล",
						"hindi": "हमने उन्हें हरा दिया... लेकिन कुछ तो अजीब है।"
					}
				},
				{
					"spot": [
						4,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "ferro"
				},
				{
					"emotion": "base",
					"speaker": "ferro",
					"type": "speech",
					"content": {
						"korean": "이것은 시작일 뿐이야. 아직 더 많은 진실이 남았어.",
						"english": "This is just the beginning. More truths still remain.",
						"japanese": "これは始まりに過ぎない。まだ多くの真実が残っている。",
						"chinese": "这只是个开始。还有更多的真相有待揭示。",
						"french": "Ce n'est que le début. Il reste encore beaucoup de vérités.",
						"spanish": "Esto es solo el principio. Aún quedan más verdades.",
						"vietnamese": "Đây chỉ là khởi đầu thôi. Vẫn còn nhiều sự thật đang chờ.",
						"thai": "นี่เป็นเพียงจุดเริ่มต้นเท่านั้น ยังมีเรื่องจริงอีกมากมายที่รออยู่",
						"hindi": "यह तो बस शुरुआत है। अभी और भी सच्चाईयाँ बाकी हैं।"
					}
				},
				{
					"content": {
						"korean": "눈물 뒤에 감춰진 거대한 위선. 그 실체는 다음 그림자 속에서 기다리고 있었다.",
						"english": "The immense hypocrisy hidden behind tears. Its true form awaited in the next shadow.",
						"japanese": "涙の裏に隠された巨大な偽善。その実体は次の影の中で待っていた。",
						"chinese": "眼泪背后隐藏的巨大伪善。其真面目在下一个阴影中等待着。",
						"french": "L'immense hypocrisie cachée derrière les larmes. Sa véritable nature attendait dans l'ombre suivante.",
						"spanish": "La inmensa hipocresía oculta tras las lágrimas. Su verdadera forma esperaba en la siguiente sombra.",
						"vietnamese": "Sự đạo đức giả to lớn ẩn sau những giọt nước mắt. Bản chất thực sự của nó đang chờ đợi trong bóng tối tiếp theo.",
						"thai": "ความหน้าซื่อใจคดอันใหญ่หลวงที่ซ่อนอยู่เบื้องหลังน้ำตา ร่างที่แท้จริงของมันกำลังรออยู่ในเงามืดถัดไป",
						"hindi": "आँसुओं के पीछे छिपी विशाल पाखंड। उसका असली रूप अगली छाया में इंतज़ार कर रहा था।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "가짜 성자의 눈물을 말하는 어리석은 자들… 심판은 너희에게 내려질 것이다.",
						"english": "Fools who speak of the fake saint's tears... Judgment shall befall you.",
						"japanese": "偽りの聖者の涙を語る愚か者ども… お前たちに審判が下されるだろう。",
						"chinese": "妄谈伪圣之泪的愚者们… 审判将降临于你们。",
						"french": "Fous qui parlez des larmes du faux saint... Le jugement vous tombera dessus.",
						"spanish": "Necios que habláis de las lágrimas del falso santo... El juicio caerá sobre vosotros.",
						"vietnamese": "Những kẻ ngu ngốc nói về nước mắt của thánh giả dối… Phán xét sẽ giáng xuống các ngươi.",
						"thai": "พวกคนโง่ที่พูดถึงน้ำตาของนักบุญจอมปลอม... การพิพากษาจะมาถึงพวกเจ้า",
						"hindi": "झूठे संत के आँसुओं की बात करने वाले मूर्खों... तुम पर न्याय होगा।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "우리가 심판할 차례다!",
						"english": "Now, it's our turn to judge!",
						"japanese": "今度は我々が審判する番だ！",
						"chinese": "该我们审判了！",
						"french": "C'est notre tour de juger !",
						"spanish": "¡Es nuestro turno de juzgar!",
						"vietnamese": "Đến lượt chúng ta phán xét!",
						"thai": "ถึงตาพวกเราที่จะตัดสินแล้ว!",
						"hindi": "अब हमारी बारी है न्याय करने की!"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "이곳에서… 영원히 잠들어라.",
						"english": "Here... sleep forever.",
						"japanese": "ここで… 永遠に眠れ。",
						"chinese": "在此处… 永眠吧。",
						"french": "Ici... dormez pour l'éternité.",
						"spanish": "Aquí... duerme para siempre.",
						"vietnamese": "Tại đây… hãy ngủ yên vĩnh viễn.",
						"thai": "ที่นี่... จงหลับใหลชั่วนิรันดร์",
						"hindi": "यहाँ... हमेशा के लिए सो जाओ।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"모래시계는 사막의 운명. 성자는 눈물을 흘리며 심판을 내린다.",
			"그러나 그 눈물이 가짜라면? 심판이 위선이라면?",
			"가족을 잃은 자의 절규가 붉은 모래를 뒤덮었다.",
			"진실은 감춰진 유적 아래, 칼날처럼 날카롭게 숨 쉬고 있었다."
		],
		"english": [
			"The hourglass is the desert's fate. The saint sheds tears, delivering judgment.",
			"But what if those tears are false? What if the judgment is hypocrisy?",
			"The scream of the bereaved engulfed the red sands.",
			"The truth breathed sharply, like a blade, beneath hidden ruins."
		],
		"japanese": [
			"砂時計は砂漠の運命。聖者は涙を流し、審判を下す。",
			"しかし、その涙が偽りなら？審判が偽善なら？",
			"家族を失った者の絶叫が、赤い砂を覆った。",
			"真実は隠された遺跡の下、刃のように鋭く息づいていた。"
		],
		"chinese": [
			"沙漏是沙漠的命运。圣者流泪，降下审判。",
			"但如果那些眼泪是假的呢？如果审判是虚伪的呢？",
			"丧失家园者的绝叫，覆盖了红色的沙土。",
			"真相在隐藏的遗迹下，如刀锋般锋利地呼吸着。"
		],
		"french": [
			"Le sablier est le destin du désert. La sainte pleure, prononçant le jugement.",
			"Mais si ces larmes sont fausses ? Si le jugement n'est que pure hypocrisie ?",
			"Le cri désespéré de celui qui a perdu sa famille a recouvert les sables rouges.",
			"La vérité respirait, aussi tranchante qu'une lame, sous les ruines cachées."
		],
		"spanish": [
			"El reloj de arena es el destino del desierto. El santo derrama lágrimas, dictando sentencia.",
			"Pero ¿y si esas lágrimas son falsas? ¿Y si el juicio es hipocresía?",
			"El lamento de quien perdió a su familia cubrió las arenas rojas.",
			"La verdad respiraba afilada como una hoja, bajo las ruinas ocultas."
		],
		"vietnamese": [
			"Đồng hồ cát là định mệnh của sa mạc. Thánh nhân đổ lệ, ban phán quyết.",
			"Nhưng nếu nước mắt ấy là giả? Nếu phán quyết ấy là đạo đức giả?",
			"Tiếng gào thét của người mất gia đình phủ kín cát đỏ.",
			"Sự thật ẩn dưới di tích bị che giấu, thở sắc bén như lưỡi dao."
		],
		"thai": [
			"นาฬิกาทรายคือกำหนดของทะเลทราย นักบุญหลั่งน้ำตา พิพากษาลงทัณฑ์",
			"แต่ถ้าหากน้ำตาเหล่านั้นเป็นของปลอม? ถ้าการพิพากษาเป็นความหน้าซื่อใจคด?",
			"เสียงกรีดร้องของผู้สูญเสียครอบครัว ปกคลุมผืนทรายสีแดง",
			"ความจริงหายใจอย่างคมกริบดุจคมดาบ ใต้ซากปรักหักพังที่ซ่อนอยู่"
		],
		"hindi": [
			"रेतघड़ी रेगिस्तान का भाग्य है। संत आँसू बहाते हुए न्याय करता है।",
			"लेकिन अगर वे आँसू झूठे हों तो? अगर न्याय पाखंड हो तो?",
			"परिवार खोने वाले की चीख ने लाल रेत को ढक लिया।",
			"सच छिपे हुए खंडहरों के नीचे, तलवार की धार की तरह पैनी साँस ले रहा था।"
		]
	}
} as const;
