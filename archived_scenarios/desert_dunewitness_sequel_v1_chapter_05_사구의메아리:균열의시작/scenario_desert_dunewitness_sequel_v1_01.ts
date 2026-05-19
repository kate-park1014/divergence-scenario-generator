export const scenario_desert_dunewitness_sequel_v1_01 = {
	"scenario_id": "desert_dunewitness_sequel_v1_01",
	"order": 1,
	"act": "intro",
	"theme": "desert",
	"actors": {
		"amir": {
			"id": "mon_0096d602-52ab-4a9c-9cc8-4ff18ed3b655",
			"name": {
				"korean": "아미르",
				"english": "Amir",
				"japanese": "アミール",
				"chinese": "阿米尔",
				"french": "Amir",
				"spanish": "Amir",
				"vietnamese": "Amir",
				"thai": "อาเมียร์",
				"hindi": "अमीर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8cd60fb0-3699-44c4-6425-a3e97eec1800/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/b644dc95-9c27-442e-6dc6-73e5550a0200/public"
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
					"content": {
						"korean": "황량한 사막에도 푸른 기운이 번졌다. 작은 생명들이 고개를 내밀었다.",
						"english": "Even in the desolate desert, a green vitality spread. Small lives peeked out.",
						"japanese": "荒涼とした砂漠にも、緑の気が広がった。小さな命が顔を出した。",
						"chinese": "即使在荒凉的沙漠中，也蔓延着一片生机。小小的生命探出了头。",
						"french": "Même dans le désert désolé, une vitalité verte s'est répandue. De petites vies ont fait surface.",
						"spanish": "Incluso en el desierto desolado, una vitalidad verde se extendió. Pequeñas vidas asomaron.",
						"vietnamese": "Ngay cả trong sa mạc hoang vắng, một sức sống xanh đã lan tỏa. Những sinh linh bé nhỏ đã hé mình.",
						"thai": "แม้แต่ในทะเลทรายที่รกร้าง พลังสีเขียวก็ยังแผ่ขยาย สิ่งมีชีวิตเล็กๆ โผล่หน้าออกมา",
						"hindi": "यहां तक कि सुनसान रेगिस्तान में भी, एक हरी-भरी जान फैल गई। छोटे जीवन झाँक रहे थे।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "happy",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "봐, 아미르. 우리가 해냈어.",
						"english": "Look, Amir. We did it.",
						"japanese": "見て、アミール。やったわ。",
						"chinese": "看，阿米尔。我们做到了。",
						"french": "Regarde, Amir. Nous l'avons fait.",
						"spanish": "Mira, Amir. Lo logramos.",
						"vietnamese": "Nhìn kìa, Amir. Chúng ta đã làm được.",
						"thai": "ดูสิ อามีร์ เราทำได้แล้ว",
						"hindi": "देखो, अमीर। हमने कर दिखाया।"
					}
				},
				{
					"spot": [
						4,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "amir",
					"type": "direction"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "amir",
					"content": {
						"korean": "…응. 기적 같지. 하지만.",
						"english": "...Yes. It's like a miracle. But.",
						"japanese": "…ええ。奇跡みたいね。でも。",
						"chinese": "……嗯。像个奇迹。但是。",
						"french": "...Oui. C'est comme un miracle. Mais.",
						"spanish": "...Sí. Es como un milagro. Pero.",
						"vietnamese": "...Ừm. Giống như một phép màu. Nhưng mà.",
						"thai": "...อืม เหมือนปาฏิหาริย์เลยนะ แต่ว่า...",
						"hindi": "...हाँ। यह एक चमत्कार जैसा है। लेकिन।"
					}
				},
				{
					"speaker": "amir",
					"content": {
						"korean": "모래가 심상치 않아. 전에 없던 진동이 느껴져.",
						"english": "The sand is unusual. I feel a vibration I haven't felt before.",
						"japanese": "砂が尋常じゃない。今までになかった振動を感じる。",
						"chinese": "沙子不寻常。我感受到了前所未有的震动。",
						"french": "Le sable est étrange. Je ressens une vibration inédite.",
						"spanish": "La arena es inusual. Siento una vibración que nunca antes había sentido.",
						"vietnamese": "Cát không bình thường. Tôi cảm thấy một rung động chưa từng có.",
						"thai": "ทรายไม่ปกติเลย ฉันรู้สึกถึงแรงสั่นสะเทือนที่ไม่เคยมีมาก่อน",
						"hindi": "रेत असामान्य है। मुझे एक ऐसी कंपन महसूस हो रही है जो मैंने पहले कभी महसूस नहीं की।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "걱정이 많네, 아미르. 이제 괜찮을 거야.",
						"english": "You worry too much, Amir. It'll be fine now.",
						"japanese": "心配しすぎよ、アミール。もう大丈夫だから。",
						"chinese": "你担心太多了，阿米尔。现在会没事的。",
						"french": "Tu t'inquiètes trop, Amir. Tout ira bien maintenant.",
						"spanish": "Te preocupas demasiado, Amir. Todo estará bien ahora.",
						"vietnamese": "Cậu lo lắng quá, Amir. Bây giờ sẽ ổn thôi.",
						"thai": "เธอขี้กังวลจังนะ อามีร์ ไม่เป็นไรหรอกน่า",
						"hindi": "तुम बहुत चिंता करते हो, अमीर। अब सब ठीक हो जाएगा।"
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
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"type": "direction",
					"speaker": "amir"
				},
				{
					"content": {
						"korean": "점점 강해져. 모래 폭풍도 예측할 수 없어.",
						"english": "It's getting stronger. The sandstorms are unpredictable.",
						"japanese": "どんどん強くなってる。砂嵐も予測できない。",
						"chinese": "越来越强了。沙尘暴也无法预测。",
						"french": "Ça devient de plus en plus fort. Les tempêtes de sable sont imprévisibles.",
						"spanish": "Se está volviendo más fuerte. Las tormentas de arena son impredecibles.",
						"vietnamese": "Nó ngày càng mạnh hơn. Bão cát cũng không thể dự đoán được.",
						"thai": "มันแรงขึ้นเรื่อยๆ พายุทรายก็คาดเดาไม่ได้",
						"hindi": "यह और मजबूत होता जा रहा है। रेत के तूफान अप्रत्याशित हैं।"
					},
					"speaker": "amir",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "사막 곳곳의 고대 문양들이 희미하게 빛나기 시작했다.",
						"english": "Ancient patterns across the desert began to glow faintly.",
						"japanese": "砂漠のあちこちにある古代の模様が、かすかに光り始めた。",
						"chinese": "沙漠各处的古老图纹开始发出微弱的光芒。",
						"french": "D'anciens motifs à travers le désert commencèrent à luire faiblement.",
						"spanish": "Antiguos patrones por todo el desierto comenzaron a brillar débilmente.",
						"vietnamese": "Những hoa văn cổ xưa khắp sa mạc bắt đầu phát sáng mờ ảo.",
						"thai": "ลวดลายโบราณทั่วทะเลทรายเริ่มเรืองแสงจางๆ",
						"hindi": "रेगिस्तान भर में प्राचीन पैटर्न हल्के ढंग से चमकने लगे।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "그냥… 사막이 원래 변덕스러워서 그래.",
						"english": "It's just... the desert is naturally fickle.",
						"japanese": "ただ…砂漠は元々気まぐれだからさ。",
						"chinese": "只是…沙漠原本就变幻莫测。",
						"french": "C'est juste... le désert est naturellement capricieux.",
						"spanish": "Es solo que... el desierto es caprichoso por naturaleza.",
						"vietnamese": "Chỉ là... sa mạc vốn dĩ thất thường mà thôi.",
						"thai": "ก็แค่... ทะเลทรายมันก็แปรปรวนแบบนี้แหละ",
						"hindi": "बस... रेगिस्तान स्वाभाविक रूप से परिवर्तनशील है।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "아니야. 이건 달라. 뭔가 깨어나고 있어.",
						"english": "No. This is different. Something is awakening.",
						"japanese": "違う。これは違う。何かが目覚めつつある。",
						"chinese": "不。这不一样。有什么东西正在苏醒。",
						"french": "Non. C'est différent. Quelque chose s'éveille.",
						"spanish": "No. Esto es diferente. Algo está despertando.",
						"vietnamese": "Không. Cái này khác. Có gì đó đang thức tỉnh.",
						"thai": "ไม่ นี่มันต่างไป มีบางอย่างกำลังตื่นขึ้นมา",
						"hindi": "नहीं। यह अलग है। कुछ जागृत हो रहा है।"
					},
					"speaker": "amir",
					"type": "speech",
					"emotion": "angry"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"speaker": "amir"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "amir",
					"content": {
						"korean": "오르벨이 없어진 후부터야. 그가 막고 있던 뭔가가 풀려났어.",
						"english": "It's since Orvel disappeared. Something he was holding back has been unleashed.",
						"japanese": "オルベルがいなくなってからだ。彼が食い止めていた何かが解き放たれたんだ。",
						"chinese": "是奥尔维尔消失后才开始的。他所阻止的某种东西被释放了。",
						"french": "C'est depuis la disparition d'Orvel. Quelque chose qu'il retenait a été libéré.",
						"spanish": "Es desde que Orvel desapareció. Algo que él estaba conteniendo ha sido liberado.",
						"vietnamese": "Là từ khi Orvel biến mất. Có thứ gì đó mà anh ấy đang ngăn chặn đã được giải phóng.",
						"thai": "มันตั้งแต่ที่ออร์เวลหายไป บางอย่างที่เขาขวางไว้ถูกปลดปล่อยแล้ว",
						"hindi": "यह ऑर्बेल के गायब होने के बाद से है। कुछ ऐसा जिसे वह रोक रहा था, वह अब मुक्त हो गया है।"
					}
				},
				{
					"content": {
						"korean": "오르벨? 그가 뭘 막고 있었다고?",
						"english": "Orvel? What was he holding back?",
						"japanese": "オルベル？彼が何を食い止めていたって？",
						"chinese": "奥尔维尔？他阻止了什么？",
						"french": "Orvel ? Que retenait-il ?",
						"spanish": "¿Orvel? ¿Qué estaba conteniendo?",
						"vietnamese": "Orvel? Anh ấy đã ngăn chặn cái gì?",
						"thai": "ออร์เวล? เขาขวางอะไรไว้?",
						"hindi": "ऑर्बेल? वह क्या रोक रहा था?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "amir",
					"content": {
						"korean": "오래된 기억들이 속삭여. 사막 깊은 곳에… 잠들어있던 그림자가.",
						"english": "Ancient memories whisper. Deep within the desert... a slumbering shadow.",
						"japanese": "古い記憶がささやく。砂漠の奥深くで…眠っていた影が。",
						"chinese": "古老的记忆在低语。在沙漠深处…沉睡的影子。",
						"french": "De vieux souvenirs murmurent. Au plus profond du désert... une ombre endormie.",
						"spanish": "Antiguos recuerdos susurran. En lo profundo del desierto... una sombra dormida.",
						"vietnamese": "Những ký ức cổ xưa thì thầm. Sâu thẳm trong sa mạc... một bóng tối đang ngủ yên.",
						"thai": "ความทรงจำเก่าแก่กระซิบแผ่วเบา ลึกเข้าไปในทะเลทราย... เงาที่หลับใหล",
						"hindi": "पुरानी यादें फुसफुसाती हैं। रेगिस्तान की गहराई में... एक सोई हुई छाया।"
					}
				},
				{
					"content": {
						"korean": "두려워. 과거의 상처가 반복될까 봐.",
						"english": "I'm afraid. Afraid that past wounds will repeat.",
						"japanese": "恐ろしい。過去の傷が繰り返されるのではないかと。",
						"chinese": "我害怕。害怕过去的创伤会重演。",
						"french": "J'ai peur. Peur que les blessures du passé ne se répètent.",
						"spanish": "Temo. Temo que las heridas del pasado se repitan.",
						"vietnamese": "Tôi sợ. Sợ những vết thương trong quá khứ sẽ lặp lại.",
						"thai": "ฉันกลัว กลัวว่าบาดแผลในอดีตจะซ้ำรอย",
						"hindi": "मुझे डर है। डर है कि अतीत के घाव दोहराए जाएंगे।"
					},
					"speaker": "amir",
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"speaker": "amir"
				},
				{
					"content": {
						"korean": "더 이상 되돌릴 수 없어. 길은 하나뿐이야.",
						"english": "There's no turning back. There's only one path.",
						"japanese": "もう後戻りはできない。道は一つだけだ。",
						"chinese": "无法回头了。只有一条路。",
						"french": "On ne peut plus revenir en arrière. Il n'y a qu'un seul chemin.",
						"spanish": "No hay vuelta atrás. Solo hay un camino.",
						"vietnamese": "Không thể quay lại nữa rồi. Chỉ có một con đường thôi.",
						"thai": "กลับไปไม่ได้แล้ว มีแค่ทางเดียวเท่านั้น",
						"hindi": "अब पीछे नहीं हटा जा सकता। केवल एक ही रास्ता है।"
					},
					"speaker": "amir",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "무슨 소리야.",
						"english": "What are you talking about?",
						"japanese": "どういうことだ。",
						"chinese": "你说什么？",
						"french": "Qu'est-ce que tu racontes ?",
						"spanish": "¿Qué dices?",
						"vietnamese": "Anh đang nói cái gì vậy.",
						"thai": "พูดเรื่องอะไร?",
						"hindi": "क्या कह रहे हो।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "네가 마주해야 할 거야. 사막의 가장 깊은 곳에서.",
						"english": "You'll have to face it. In the deepest part of the desert.",
						"japanese": "君が立ち向かわなければならないものだ。砂漠の最も深い場所で。",
						"chinese": "你必须去面对它。在沙漠的最深处。",
						"french": "Tu devras y faire face. Au plus profond du désert.",
						"spanish": "Tendrás que enfrentarlo. En lo más profundo del desierto.",
						"vietnamese": "Ngươi sẽ phải đối mặt với nó. Tại nơi sâu thẳm nhất của sa mạc.",
						"thai": "นายจะต้องเผชิญหน้ากับมัน ในส่วนที่ลึกที่สุดของทะเลทราย",
						"hindi": "तुम्हें इसका सामना करना होगा। रेगिस्तान के सबसे गहरे हिस्से में।"
					},
					"speaker": "amir",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "…알고 있어.",
						"english": "...I know.",
						"japanese": "「…知ってるわ。」",
						"chinese": "“……我知道。”",
						"french": "...Je sais.",
						"spanish": "...Lo sé.",
						"vietnamese": "...Tôi biết.",
						"thai": "...ฉันรู้แล้ว",
						"hindi": "...मुझे पता है।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "…겨우 이 정도에 만족하나?",
						"english": "...Are you satisfied with just this much?",
						"japanese": "「…たったこれっぽっちで満足か？」",
						"chinese": "“……就这点程度就满足了吗？”",
						"french": "...Es-tu satisfait de si peu ?",
						"spanish": "...¿Te conformas con tan poco?",
						"vietnamese": "...Chỉ nhiêu đây thôi mà ngươi đã hài lòng sao?",
						"thai": "...แค่นี้ก็พอใจแล้วหรือ?",
						"hindi": "...क्या तुम बस इतने से संतुष्ट हो?"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "진정한 그림자는 이제 막 깨어났을 뿐.",
						"english": "The true shadow has only just awakened.",
						"japanese": "「真の影は、今目覚めたばかりだ。」",
						"chinese": "“真正的影子才刚刚觉醒。”",
						"french": "La véritable ombre ne fait que s'éveiller.",
						"spanish": "La verdadera sombra acaba de despertar.",
						"vietnamese": "Bóng tối thực sự chỉ vừa mới thức tỉnh.",
						"thai": "เงาที่แท้จริงเพิ่งจะตื่นขึ้นมาเท่านั้น",
						"hindi": "वास्तविक छाया तो अभी-अभी जागी है।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…뭐라고?",
						"english": "...What did you say?",
						"japanese": "「…何だと？」",
						"chinese": "“……你说什么？”",
						"french": "...Quoi ?",
						"spanish": "...¿Qué dijiste?",
						"vietnamese": "...Ngươi nói gì cơ?",
						"thai": "...ว่าไงนะ?",
						"hindi": "...क्या कहा?"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "그림자는 모래가 되어 흩어졌다. 하지만 불안한 침묵이 사막을 감쌌다.",
						"english": "The shadow scattered into sand. But an uneasy silence enveloped the desert.",
						"japanese": "「影は砂となって散った。だが、不穏な沈黙が砂漠を包み込んだ。」",
						"chinese": "“影子化作沙尘散去。然而，不安的寂静笼罩了沙漠。”",
						"french": "L'ombre s'est dispersée en sable. Mais un silence inquiet a enveloppé le désert.",
						"spanish": "La sombra se dispersó en arena. Pero un silencio inquietante envolvió el desierto.",
						"vietnamese": "Bóng tối tan biến thành cát. Nhưng một sự im lặng bất an bao trùm sa mạc.",
						"thai": "เงากระจายหายไปในทราย แต่ความเงียบงันที่น่ากังวลก็ปกคลุมทะเลทราย",
						"hindi": "छाया रेत बनकर बिखर गई। लेकिन एक बेचैन खामोशी ने रेगिस्तान को घेर लिया।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "새로운 균열의 시작. 이야기는 아직 끝나지 않았다.",
						"english": "The beginning of a new rift. The story is not over yet.",
						"japanese": "「新たな亀裂の始まり。物語はまだ終わらない。」",
						"chinese": "“新裂痕的开始。故事尚未结束。”",
						"french": "Le début d'une nouvelle faille. L'histoire n'est pas encore terminée.",
						"spanish": "El inicio de una nueva grieta. La historia aún no ha terminado.",
						"vietnamese": "Khởi đầu của một vết nứt mới. Câu chuyện vẫn chưa kết thúc.",
						"thai": "จุดเริ่มต้นของรอยแยกใหม่ เรื่องราวยังไม่จบลง",
						"hindi": "एक नए दरार की शुरुआत। कहानी अभी खत्म नहीं हुई है।"
					},
					"speaker": "narrator"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						3
					],
					"type": "direction",
					"speaker": "amir"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…진짜 시작이군. 이제 더 깊이 들어가야 해.",
						"english": "…This is the real start. We need to go deeper now.",
						"japanese": "…いよいよ本番だ。もっと奥へ進まなければ。",
						"chinese": "…这才是真正的开始。我们必须深入下去。",
						"french": "…C'est le vrai début. Nous devons aller plus loin maintenant.",
						"spanish": "…Este es el verdadero comienzo. Ahora debemos ir más profundo.",
						"vietnamese": "…Đây mới là khởi đầu thực sự. Chúng ta phải đi sâu hơn nữa.",
						"thai": "…นี่แหละคือจุดเริ่มต้นที่แท้จริง เราต้องเข้าไปให้ลึกกว่านี้",
						"hindi": "…यह तो बस असली शुरुआत है। अब हमें और गहराई तक जाना होगा।"
					},
					"speaker": "amir"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "모래 폭풍의 심장부. 그곳에 정체 모를 그림자가 섰다.",
						"english": "At the heart of the sandstorm, an unknown shadow stood.",
						"japanese": "「砂嵐の心臓部。そこに正体不明の影が立っていた。」",
						"chinese": "“沙尘暴的中心。一个身份不明的影子站在那里。”",
						"french": "Au cœur de la tempête de sable, une ombre inconnue se tenait.",
						"spanish": "En el corazón de la tormenta de arena, una sombra desconocida se alzaba.",
						"vietnamese": "Tại trung tâm cơn bão cát, một bóng hình không rõ danh tính đã đứng đó.",
						"thai": "ใจกลางพายุทราย เงาลึกลับยืนตระหง่านอยู่",
						"hindi": "रेत के तूफान के केंद्र में, एक अज्ञात छाया खड़ी थी।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "오르벨의 어리석은 꿈을 이어받은 자여.",
						"english": "You who inherited Orvel's foolish dream.",
						"japanese": "「オルベルの愚かな夢を受け継いだ者よ。」",
						"chinese": "“你，继承了奥尔维尔愚蠢梦想的人。”",
						"french": "Toi qui as hérité du rêve insensé d'Orvel.",
						"spanish": "Tú, que has heredado el sueño insensato de Orvel.",
						"vietnamese": "Kẻ kế thừa giấc mơ ngu xuẩn của Orvel.",
						"thai": "เจ้าผู้สืบทอดความฝันอันโง่เขลาของออร์เวล",
						"hindi": "तुम, जिसने ओर्वेल के मूर्खतापूर्ण सपने को विरासत में पाया है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "사막은 너 같은 이단자를 용납하지 않는다.",
						"english": "The desert does not tolerate heretics like you.",
						"japanese": "「砂漠はお前のような異端者を許さない。」",
						"chinese": "“沙漠不会容忍你这样的异端。”",
						"french": "Le désert ne tolère pas les hérétiques comme toi.",
						"spanish": "El desierto no tolera a los herejes como tú.",
						"vietnamese": "Sa mạc không dung thứ những kẻ dị giáo như ngươi.",
						"thai": "ทะเลทรายไม่ยอมรับพวกนอกรีตอย่างเจ้า",
						"hindi": "रेगिस्तान तुम्हारे जैसे विधर्मियों को बर्दाश्त नहीं करेगा।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "네가 사막을 파괴하려는 거잖아!",
						"english": "You're the one trying to destroy the desert!",
						"japanese": "「お前が砂漠を破壊しようとしているんだろう！」",
						"chinese": "“是你想要摧毁沙漠！”",
						"french": "C'est toi qui essaies de détruire le désert !",
						"spanish": "¡Eres tú quien intenta destruir el desierto!",
						"vietnamese": "Chính ngươi mới là kẻ đang cố gắng hủy diệt sa mạc!",
						"thai": "เจ้าต่างหากที่กำลังพยายามทำลายทะเลทราย!",
						"hindi": "तुम ही रेगिस्तान को तबाह करने की कोशिश कर रहे हो!"
					},
					"emotion": "angry",
					"type": "speech"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "어리석은 생명아. 네 희망은 모래처럼 흩어지리라.",
						"english": "Foolish life. Your hope will scatter like sand.",
						"japanese": "愚かな生命よ。お前の希望は砂のように散りゆくだろう。",
						"chinese": "愚蠢的生命啊。你的希望将如沙般散去。",
						"french": "Vie insensée. Ton espoir se dispersera comme le sable.",
						"spanish": "Vida insensata. Tu esperanza se dispersará como la arena.",
						"vietnamese": "Sinh linh ngu ngốc. Hy vọng của ngươi sẽ tan biến như cát bụi.",
						"thai": "ชีวิตที่โง่เขลา ความหวังของเจ้าจะสลายไปเหมือนทราย",
						"hindi": "मूर्ख प्राणी। तेरी आशा रेत की तरह बिखर जाएगी।"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "크윽… 아직… 끝나지 않았어.",
						"english": "Ugh… It's not… over yet.",
						"japanese": "くっ… まだ… 終わっていない。",
						"chinese": "咳… 还没… 结束。",
						"french": "Argh… Ce n'est pas… fini encore.",
						"spanish": "Ugh… Todavía no… ha terminado.",
						"vietnamese": "Khụ… Vẫn chưa… kết thúc đâu.",
						"thai": "อึก… ยัง… ไม่จบ!",
						"hindi": "उफ़… अभी… ख़त्म नहीं हुआ।"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "사막의 섭리는… 절대 변하지 않는다.",
						"english": "The providence of the desert… never changes.",
						"japanese": "砂漠の摂理は… 決して変わらない。",
						"chinese": "沙漠的法则… 绝不会改变。",
						"french": "La providence du désert… ne change jamais.",
						"spanish": "La providencia del desierto… nunca cambia.",
						"vietnamese": "Thiên ý của sa mạc… sẽ không bao giờ thay đổi.",
						"thai": "โองการแห่งทะเลทราย… ไม่เคยเปลี่ยนไป",
						"hindi": "रेगिस्तान का विधान… कभी नहीं बदलता।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"사막에 기적이 피었다. 죽음의 땅에 싹튼 작은 희망.",
			"하지만 균열은 예상치 못한 곳에서 시작됐다.",
			"오래된 친구는 불길한 징조를 감지하고 경고했다.",
			"사막의 그림자, 깨어나기 시작한다."
		],
		"english": [
			"A miracle bloomed in the desert. A small hope sprouted in the land of death.",
			"But the rift began in an unexpected place.",
			"An old friend sensed an ominous sign and warned us.",
			"The shadow of the desert begins to awaken."
		],
		"japanese": [
			"砂漠に奇跡が咲いた。死の地に芽生えた小さな希望。",
			"しかし、亀裂は予想外の場所で始まった。",
			"旧友は不吉な兆候を察知し、警告した。",
			"砂漠の影、目覚め始める。"
		],
		"chinese": [
			"奇迹在沙漠中绽放。死亡之地萌生的小小希望。",
			"然而，裂痕却在意想不到的地方开始。",
			"老友察觉到不祥之兆，并发出警告。",
			"沙漠的阴影，开始苏醒。"
		],
		"french": [
			"Un miracle fleurit dans le désert. Un petit espoir a germé dans la terre de la mort.",
			"Mais la faille a commencé dans un endroit inattendu.",
			"Un vieil ami a détecté un signe inquiétant et a averti.",
			"L'ombre du désert commence à s'éveiller."
		],
		"spanish": [
			"Un milagro floreció en el desierto. Una pequeña esperanza brotó en la tierra de la muerte.",
			"Pero la grieta comenzó en un lugar inesperado.",
			"Un viejo amigo detectó un signo ominoso y advirtió.",
			"La sombra del desierto comienza a despertar."
		],
		"vietnamese": [
			"Phép màu nở rộ trong sa mạc. Một tia hy vọng nhỏ nảy mầm trên mảnh đất chết chóc.",
			"Nhưng vết nứt lại bắt đầu ở một nơi không ngờ.",
			"Một người bạn cũ đã cảm nhận được điềm báo chẳng lành và cảnh báo.",
			"Bóng tối của sa mạc, bắt đầu thức tỉnh."
		],
		"thai": [
			"ปาฏิหาริย์เบ่งบานในทะเลทราย ความหวังเล็กๆ ผลิบานในดินแดนแห่งความตาย",
			"แต่รอยแยกกลับเริ่มขึ้นในที่ที่คาดไม่ถึง",
			"สหายเก่าสัมผัสได้ถึงลางร้ายและเตือนแล้ว",
			"เงาแห่งทะเลทราย กำลังเริ่มตื่นขึ้น"
		],
		"hindi": [
			"रेगिस्तान में एक चमत्कार हुआ। मृत्यु की भूमि में एक छोटी सी आशा अंकुरित हुई।",
			"लेकिन दरार एक अप्रत्याशित जगह से शुरू हुई।",
			"एक पुराने दोस्त ने एक अशुभ संकेत महसूस किया और चेतावनी दी।",
			"रेगिस्तान की छाया, जागना शुरू होती है।"
		]
	}
} as const;
