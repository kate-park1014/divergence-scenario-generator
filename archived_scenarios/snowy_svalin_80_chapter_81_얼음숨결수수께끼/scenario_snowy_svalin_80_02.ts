export const scenario_snowy_svalin_80_02 = {
	"scenario_id": "snowy_svalin_80_02",
	"order": 2,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"finn": {
			"id": "mon_3e3930d2-c2d3-4ad0-9818-26d259edac77",
			"name": {
				"korean": "핀",
				"english": "Finn",
				"japanese": "フィン",
				"chinese": "芬恩",
				"french": "Finn",
				"spanish": "Finn",
				"vietnamese": "Finn",
				"thai": "ฟินน์",
				"hindi": "फिन"
			},
			"description": "",
			"face_image_url": "",
			"battle_sprite_url": ""
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
						"korean": "얼음 유적의 문이 열렸다. 차가운 공기가 폐부를 찔렀다.",
						"english": "The ice ruins' gate opened. Cold air pierced our lungs.",
						"japanese": "氷の遺跡の門が開いた。冷たい空気が肺を突き刺した。",
						"chinese": "冰之遗迹的门打开了。冰冷空气刺骨袭来。",
						"french": "La porte des ruines de glace s'ouvrit. L'air froid transperça nos poumons.",
						"spanish": "La puerta de las ruinas de hielo se abrió. El aire frío nos heló los pulmones.",
						"vietnamese": "Cánh cổng của tàn tích băng giá mở ra. Không khí lạnh thấu xương.",
						"thai": "ประตูของซากปรักหักพังน้ำแข็งเปิดออก อากาศเย็นเยียบแทงทะลุปอด",
						"hindi": "बर्फीले खंडहर का द्वार खुला। ठंडी हवा फेफड़ों में चुभ गई।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "여기가 전설의 유적지?",
						"english": "Is this the legendary ruins?",
						"japanese": "ここが伝説の遺跡か？",
						"chinese": "这就是传说中的遗迹？",
						"french": "C'est ça, les ruines légendaires ?",
						"spanish": "¿Este es el lugar de las ruinas legendarias?",
						"vietnamese": "Đây là di tích trong truyền thuyết ư?",
						"thai": "นี่คือซากปรักหักพังในตำนานเหรอ?",
						"hindi": "क्या यह पौराणिक खंडहर है?"
					}
				},
				{
					"spot": [
						2,
						3
					],
					"speaker": "finn",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "그래. 하지만 너희가 아는 전설은 조작됐어.",
						"english": "Yes. But the legend you know has been fabricated.",
						"japanese": "ああ。だが、お前たちが知る伝説は捏造されたものだ。",
						"chinese": "没错。但你们所知的传说，是被人篡改的。",
						"french": "Oui. Mais la légende que vous connaissez a été falsifiée.",
						"spanish": "Sí. Pero la leyenda que conocéis ha sido manipulada.",
						"vietnamese": "Đúng vậy. Nhưng truyền thuyết mà các ngươi biết đã bị thao túng rồi.",
						"thai": "ใช่ แต่ตำนานที่พวกเจ้าเคยรู้ถูกบิดเบือนไปแล้ว",
						"hindi": "हाँ। लेकिन जो किंवदंती तुम जानते हो, उसे गढ़ा गया है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "finn"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "조작?",
						"english": "Fabricated?",
						"japanese": "捏造だと？",
						"chinese": "篡改？",
						"french": "Falsifiée ?",
						"spanish": "¿Manipulada?",
						"vietnamese": "Thao túng ư?",
						"thai": "บิดเบือน?",
						"hindi": "गढ़ा गया?"
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
					"speaker": "finn",
					"spot": [
						2,
						3
					]
				},
				{
					"content": {
						"korean": "여기 고대 문헌 조각이 있어!",
						"english": "Here's a piece of ancient script!",
						"japanese": "ここに古代文献の破片があるぞ！",
						"chinese": "这里有块古代文献碎片！",
						"french": "Tiens, un fragment d'un ancien manuscrit !",
						"spanish": "¡Aquí hay un fragmento de un manuscrito antiguo!",
						"vietnamese": "Có một mảnh tài liệu cổ ở đây!",
						"thai": "ที่นี่มีชิ้นส่วนเอกสารโบราณ!",
						"hindi": "यहाँ प्राचीन दस्तावेज़ का एक टुकड़ा है!"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_1"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_1",
					"content": {
						"korean": "'종말을 부르는 뿔피리… 잠들어 있던 파멸이 깨어난다'라고 쓰여있어.",
						"english": "It reads: 'The Horn of Doomsaying... dormant destruction awakens.'",
						"japanese": "「終焉を呼ぶ角笛…眠っていた破滅が目覚める」と書いてある。",
						"chinese": "上面写着：‘末日号角…沉睡的毁灭即将苏醒’。",
						"french": "Il est écrit : 'La Corne annonciatrice de la fin… la destruction endormie s'éveille'.",
						"spanish": "Dice: 'El Cuerno que llama al fin... la destrucción dormida despierta'.",
						"vietnamese": "Nó viết: 'Chiếc tù và gọi Ngày Tận Thế… sự hủy diệt đang say ngủ thức tỉnh'.",
						"thai": "มันเขียนไว้ว่า: 'แตรเรียกความพินาศ...ความหายนะที่หลับใหลกำลังตื่นขึ้น'",
						"hindi": "इसमें लिखा है: 'प्रलय की तुरही... सोई हुई तबाही जागृत होती है'।"
					}
				},
				{
					"content": {
						"korean": "아니야. 우리 민담엔 뿔피리는 슬픈 노래를 부른대.",
						"english": "No. Our folk tales say the horn plays a sorrowful song.",
						"japanese": "いいえ。私たちの民話では、角笛は悲しい歌を歌うと言われています。",
						"chinese": "不。我们的民间传说中，号角奏响的是悲伤的歌。",
						"french": "Non. Nos contes populaires disent que la corne chante une triste mélodie.",
						"spanish": "No. Nuestros cuentos populares dicen que la bocina canta una canción triste.",
						"vietnamese": "Không. Truyện dân gian của chúng ta kể rằng kèn sừng cất lên một bài ca buồn.",
						"thai": "ไม่ใช่ เรื่องเล่าพื้นบ้านของเราบอกว่าแตรจะบรรเลงบทเพลงที่เศร้าโศก",
						"hindi": "नहीं। हमारी लोककथाओं में, सींग एक दुख भरा गीत गाता है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "finn"
				},
				{
					"content": {
						"korean": "슬픈 노래?",
						"english": "A sorrowful song?",
						"japanese": "悲しい歌？",
						"chinese": "悲伤的歌？",
						"french": "Une triste mélodie ?",
						"spanish": "¿Una canción triste?",
						"vietnamese": "Một bài ca buồn?",
						"thai": "บทเพลงที่เศร้าโศก?",
						"hindi": "एक दुख भरा गीत?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						2,
						3
					],
					"speaker": "finn",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "그럼 어떤 게 진짜 전설이야?",
						"english": "Then which is the true legend?",
						"japanese": "じゃあ、どれが本当の伝説なの？",
						"chinese": "那么，哪个才是真正的传说？",
						"french": "Alors, quelle est la vraie légende ?",
						"spanish": "Entonces, ¿cuál es la verdadera leyenda?",
						"vietnamese": "Vậy đâu là truyền thuyết thật?",
						"thai": "แล้วตำนานที่แท้จริงคืออะไร?",
						"hindi": "तो असली किंवदंती क्या है?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_2"
				},
				{
					"content": {
						"korean": "진실은 얼어붙은 얼음 속에 숨겨져 있어. 표면만 봐선 안 돼.",
						"english": "The truth is hidden in frozen ice. Don't just look at the surface.",
						"japanese": "真実は凍てついた氷の中に隠されている。表面だけを見てはいけない。",
						"chinese": "真相隐藏在冰冷的寒冰之中。不能只看表面。",
						"french": "La vérité est cachée dans la glace gelée. Ne regarde pas seulement la surface.",
						"spanish": "La verdad está oculta en el hielo congelado. No mires solo la superficie.",
						"vietnamese": "Sự thật ẩn giấu trong băng giá. Đừng chỉ nhìn bề mặt.",
						"thai": "ความจริงซ่อนอยู่ในน้ำแข็งที่จับตัวเป็นก้อน อย่ามองแค่พื้นผิว",
						"hindi": "सच जमी हुई बर्फ में छिपा है। सिर्फ सतह मत देखो।"
					},
					"speaker": "finn",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "뭔가… 들려오는데?",
						"english": "Something... I hear something?",
						"japanese": "何か…聞こえてくる？",
						"chinese": "好像…有什么声音？",
						"french": "Quelque chose... j'entends quelque chose ?",
						"spanish": "¿Algo... escucho algo?",
						"vietnamese": "Có gì đó… đang vang lên?",
						"thai": "มีอะไรบางอย่าง... ได้ยินอะไรไหม?",
						"hindi": "कुछ… सुनाई दे रहा है?"
					}
				},
				{
					"content": {
						"korean": "유적 깊은 곳에서 거대한 균열이 생겼다. 섬뜩한 울음소리가 메아리쳤다.",
						"english": "A massive rift opened deep within the ruins. An eerie wail echoed.",
						"japanese": "遺跡の奥深くで巨大な亀裂が生まれた。不気味な叫び声がこだました。",
						"chinese": "遗迹深处出现了一道巨大的裂缝。诡异的嚎叫声回荡着。",
						"french": "Une immense faille s'est ouverte au plus profond des ruines. Un hurlement sinistre a résonné.",
						"spanish": "Una enorme grieta se abrió en lo profundo de las ruinas. Un lamento espeluznante resonó.",
						"vietnamese": "Một vết nứt khổng lồ mở ra sâu trong di tích. Tiếng kêu rợn người vang vọng.",
						"thai": "รอยแยกขนาดใหญ่เกิดขึ้นลึกเข้าไปในซากปรักหักพัง เสียงคร่ำครวญที่น่าขนลุกสะท้อนกลับมา",
						"hindi": "खंडहरों की गहराई में एक विशाल दरार खुल गई। एक भयानक चीख गूंज उठी।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						2,
						3
					],
					"speaker": "finn",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "character_3",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이 이상한 소리… 뿔피리랑 관련 있어?",
						"english": "This strange sound... is it related to the horn?",
						"japanese": "この奇妙な音…角笛と関係があるの？",
						"chinese": "这奇怪的声音…和号角有关吗？",
						"french": "Ce son étrange... est-ce lié à la corne ?",
						"spanish": "Este sonido extraño... ¿está relacionado con la bocina?",
						"vietnamese": "Âm thanh lạ này… có liên quan đến kèn sừng không?",
						"thai": "เสียงแปลกๆ นี้... เกี่ยวข้องกับแตรไหม?",
						"hindi": "यह अजीब आवाज... क्या सींग से संबंधित है?"
					}
				},
				{
					"content": {
						"korean": "이대로 더 가면 위험해. 돌아가야 해.",
						"english": "It's dangerous to go further. We should go back.",
						"japanese": "このまま進むと危険だ。戻らなければならない。",
						"chinese": "再往前走就危险了。我们必须回去。",
						"french": "C'est dangereux d'aller plus loin. Nous devrions faire demi-tour.",
						"spanish": "Es peligroso ir más allá. Debemos regresar.",
						"vietnamese": "Đi tiếp sẽ nguy hiểm. Chúng ta phải quay lại.",
						"thai": "อันตรายถ้าไปต่อ เราควรกลับไป",
						"hindi": "आगे जाना खतरनाक है। हमें वापस जाना चाहिए।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "finn"
				},
				{
					"content": {
						"korean": "멈출 수 없어. 진실을 알아야 해.",
						"english": "I can't stop. I need to know the truth.",
						"japanese": "止まれない。真実を知らなければならない。",
						"chinese": "我不能停。我必须知道真相。",
						"french": "Je ne peux pas m'arrêter. Je dois connaître la vérité.",
						"spanish": "No puedo parar. Necesito saber la verdad.",
						"vietnamese": "Tôi không thể dừng lại. Tôi cần biết sự thật.",
						"thai": "ฉันหยุดไม่ได้ ฉันต้องรู้ความจริง",
						"hindi": "मैं रुक नहीं सकता। मुझे सच जानना है।"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "탐험대는 핀의 경고를 무시하고 더 깊은 유적으로 향했다. 되돌릴 수 없는 발걸음이었다.",
						"english": "The expedition ignored Finn's warning and ventured deeper into the ruins. It was an irreversible step.",
						"japanese": "探検隊はフィンの警告を無視し、さらに深い遺跡へと向かった。それは取り返しのつかない一歩だった。",
						"chinese": "探险队无视了芬的警告，深入遗迹。那是一个无法挽回的决定。",
						"french": "L'expédition ignora l'avertissement de Finn et s'aventura plus profondément dans les ruines. C'était un pas irréversible.",
						"spanish": "La expedición ignoró la advertencia de Finn y se adentró más en las ruinas. Fue un paso irreversible.",
						"vietnamese": "Đoàn thám hiểm đã phớt lờ lời cảnh báo của Finn và tiến sâu hơn vào di tích. Đó là một bước đi không thể quay lại.",
						"thai": "คณะสำรวจเพิกเฉยต่อคำเตือนของฟินน์และมุ่งหน้าลึกเข้าไปในซากปรักหักพัง มันเป็นก้าวที่ไม่อาจย้อนคืน",
						"hindi": "अभियान ने फिन की चेतावनी को नजरअंदाज किया और खंडहरों में और गहराई तक चला गया। यह एक अपरिवर्तनीय कदम था।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "하찮은 것들… 감히 거스를 수 없는 운명에 대적하려 했나.",
						"english": "Insignificant beings… did you dare defy an unalterable fate?",
						"japanese": "取るに足らない者たちよ…抗えぬ運命に逆らおうとしたか。",
						"chinese": "卑微的家伙们…竟敢挑战不可逆转的命运。",
						"french": "Êtres insignifiants… avez-vous osé défier un destin inaltérable ?",
						"spanish": "Seres insignificantes… ¿osasteis desafiar un destino inalterable?",
						"vietnamese": "Những kẻ nhỏ bé… các ngươi dám chống lại một số phận không thể thay đổi sao?",
						"thai": "เจ้าพวกไร้ค่า... กล้าดีอย่างไรมาท้าทายโชคชะตาที่ไม่อาจเปลี่ยนแปลงได้",
						"hindi": "तुच्छ प्राणी… क्या तुमने एक अपरिवर्तनीय भाग्य को चुनौती देने की हिम्मत की?"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "크윽… 아직… 끝나지 않았어…!",
						"english": "Ugh… it's not… over yet…!",
						"japanese": "くっ…まだ…終わってない…！",
						"chinese": "呃…还没…结束…！",
						"french": "Urgh… ce n'est pas… encore fini…!",
						"spanish": "Ugh… ¡aún no… ha terminado…!",
						"vietnamese": "Khụ… vẫn… chưa kết thúc…!",
						"thai": "อึก... ยัง... ไม่จบ...!",
						"hindi": "उफ़… यह अभी… ख़त्म नहीं हुआ है…!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "흐흐… 이겼다고 생각하나? 이건… 시작일 뿐이다….",
						"english": "Heh heh… do you think you've won? This is… only the beginning….",
						"japanese": "ふふ…勝ったとでも思っているのか？これは…始まりに過ぎない…。",
						"chinese": "呵呵…你以为你赢了吗？这…只是开始…。",
						"french": "Heh heh… penses-tu avoir gagné ? Ce n'est… que le début….",
						"spanish": "Je je… ¿crees que has ganado? Esto es… solo el principio….",
						"vietnamese": "Hừ hừ… ngươi nghĩ mình đã thắng sao? Đây… chỉ là khởi đầu….",
						"thai": "ฮึๆ... เจ้าคิดว่าชนะแล้วงั้นรึ? นี่มัน... แค่จุดเริ่มต้นเท่านั้น...",
						"hindi": "हँ हँ... क्या तुम्हें लगता है कि तुम जीत गए हो? यह तो… बस शुरुआत है…।"
					}
				},
				{
					"content": {
						"korean": "{random_boss}를 물리쳤지만… 이 불안감은 뭐지?",
						"english": "We defeated {random_boss} but… what is this unease?",
						"japanese": "{random_boss}を倒したが…この不安感は何だ？",
						"chinese": "击败了{random_boss}，但…这种不安感是什么？",
						"french": "Nous avons vaincu {random_boss} but… qu'est-ce que ce malaise ?",
						"spanish": "Derrotamos a {random_boss} pero… ¿qué es esta inquietud?",
						"vietnamese": "Đã đánh bại {random_boss} nhưng… cảm giác bất an này là gì?",
						"thai": "เราเอาชนะ {random_boss} ได้แล้ว แต่... ความรู้สึกไม่สบายใจนี้คืออะไร?",
						"hindi": "हमने {random_boss} को हरा दिया लेकिन… यह बेचैनी क्या है?"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "차가운 진동이 유적 전체를 울렸다. 뿔피리 주변에서 미약한 진동과 함께 서글픈 음률이 들려왔다.",
						"english": "A cold tremor echoed throughout the ruins. A faint vibration and a mournful melody came from around the horn.",
						"japanese": "冷たい振動が遺跡全体に響き渡った。角笛の周りから微かな振動と物悲しい音律が聞こえてきた。",
						"chinese": "一股冰冷的震颤响彻了整个遗迹。号角周围传来微弱的震动和悲伤的旋律。",
						"french": "Une froide vibration résonna dans toutes les ruines. Une légère vibration et une mélodie mélancolique provenaient des alentours de la corne.",
						"spanish": "Un frío temblor resonó por todas las ruinas. Una débil vibración y una melodía lúgubre provenían de alrededor del cuerno.",
						"vietnamese": "Một luồng chấn động lạnh lẽo vang vọng khắp di tích. Một rung động yếu ớt cùng một giai điệu buồn bã phát ra từ quanh chiếc tù và.",
						"thai": "แรงสั่นสะเทือนเย็นยะเยือกก้องไปทั่วซากปรักหักพัง การสั่นสะเทือนจางๆ และทำนองที่โศกเศร้าดังมาจากรอบๆ แตร",
						"hindi": "एक ठंडी कंपन पूरे खंडहर में गूँज उठी। सींग के चारों ओर से एक हल्की कंपन और एक उदास धुन सुनाई दी।"
					}
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "유적의 가장 깊은 곳. 거대한 얼음 조각상들이 기괴한 모습으로 서 있었다.",
						"english": "The deepest part of the ruins. Gigantic ice sculptures stood in grotesque forms.",
						"japanese": "遺跡の最深部。巨大な氷の彫像が奇妙な姿で立っていた。",
						"chinese": "遗迹的最深处。巨大的冰雕以怪异的姿态矗立着。",
						"french": "La partie la plus profonde des ruines. Des sculptures de glace gigantesques se tenaient là, aux formes grotesques.",
						"spanish": "La parte más profunda de las ruinas. Gigantescas esculturas de hielo se erguían con formas grotescas.",
						"vietnamese": "Nơi sâu nhất của di tích. Những bức tượng băng khổng lồ đứng sừng sững với hình thù kỳ dị.",
						"thai": "ส่วนที่ลึกที่สุดของซากปรักหักพัง รูปปั้นน้ำแข็งขนาดยักษ์ตั้งตระหง่านในรูปลักษณ์ที่แปลกประหลาด",
						"hindi": "खंडहरों का सबसे गहरा हिस्सा। विशाल बर्फीली मूर्तियाँ grotesque रूप में खड़ी थीं。"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "어리석은 필멸자들. 감히 이곳까지 오다니.",
						"english": "Foolish mortals. How dare you come this far.",
						"japanese": "愚かなる定命の者たちよ。よくもここまで来たな。",
						"chinese": "愚蠢的凡人。竟敢来到这里。",
						"french": "Mortels insensés. Comment osez-vous venir jusqu'ici.",
						"spanish": "Mortales insensatos. ¿Cómo osáis llegar tan lejos?",
						"vietnamese": "Những kẻ phàm trần ngu ngốc. Dám đến tận đây.",
						"thai": "พวกมนุษย์โง่เขลา เจ้ากล้าดียังไงถึงมาถึงที่นี่",
						"hindi": "मूर्ख नश्वर। इतनी दूर आने की तुम्हारी हिम्मत कैसे हुई।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "네가 이 모든 걸 꾸민 건가?",
						"english": "Did you orchestrate all of this?",
						"japanese": "お前がこの全てを企んだのか？",
						"chinese": "这一切都是你策划的吗？",
						"french": "Est-ce toi qui as orchestré tout cela ?",
						"spanish": "¿Fuiste tú quien orquestó todo esto?",
						"vietnamese": "Ngươi đã dàn xếp tất cả chuyện này sao?",
						"thai": "ทั้งหมดนี่เป็นฝีมือของเจ้าหรือ?",
						"hindi": "क्या यह सब तुमने ही रचा था?"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "침묵은 깨어났고, 이제 멸망이 시작될 것이다. 뿔피리는 그저 도구일 뿐.",
						"english": "The silence has awakened, and now destruction shall begin. The horn is merely a tool.",
						"japanese": "沈黙は目覚め、今や滅びが始まるだろう。角笛はただの道具に過ぎない。",
						"chinese": "沉寂已被唤醒，毁灭即将开始。号角不过是工具而已。",
						"french": "Le silence s'est éveillé, et la destruction va maintenant commencer. La corne n'est qu'un outil.",
						"spanish": "El silencio ha despertado, y ahora la destrucción comenzará. El cuerno es meramente una herramienta.",
						"vietnamese": "Sự im lặng đã thức tỉnh, và giờ đây sự hủy diệt sẽ bắt đầu. Chiếc tù và chỉ là một công cụ.",
						"thai": "ความเงียบได้ตื่นขึ้น และตอนนี้การทำลายล้างจะเริ่มขึ้น แตรเป็นเพียงเครื่องมือเท่านั้น",
						"hindi": "ख़ामोशी जाग चुकी है, और अब विनाश शुरू होगा। सींग तो बस एक औज़ार है।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리야!",
						"english": "What are you talking about!",
						"japanese": "何を言っているんだ！",
						"chinese": "你在说什么！",
						"french": "De quoi parles-tu !",
						"spanish": "¡De qué estás hablando!",
						"vietnamese": "Ngươi đang nói gì vậy!",
						"thai": "เจ้าพูดอะไร!",
						"hindi": "यह क्या बकवास है!"
					}
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"영원히 얼어붙은 땅. 고대 유적들이 잠들어 있었다.",
			"그곳에 '종말을 부르는 뿔피리' 전설이 있었다.",
			"하지만 모든 전설이 진실은 아니다.",
			"진실은 더 깊은 곳에 얼어붙어 있었다."
		],
		"english": [
			"A land eternally frozen. Ancient ruins lay dormant.",
			"There, the legend of the 'Horn of Doomsaying' existed.",
			"But not all legends are true.",
			"The truth was frozen deeper still."
		],
		"japanese": [
			"永遠に凍りついた大地。古代遺跡が眠っていた。",
			"そこに「終焉を呼ぶ角笛」の伝説があった。",
			"しかし、すべての伝説が真実ではない。",
			"真実はもっと深い場所に凍りついていた。"
		],
		"chinese": [
			"永恒冻土。古老遗迹沉睡其中。",
			"那里，流传着‘末日号角’的传说。",
			"然而，并非所有传说都属实。",
			"真相，则被冰封在更深之处。"
		],
		"french": [
			"Une terre figée à jamais. D'anciennes ruines y sommeillaient.",
			"Là, la légende de la 'Corne annonciatrice de la fin' existait.",
			"Mais toutes les légendes ne sont pas vraies.",
			"La vérité était gelée plus profondément encore."
		],
		"spanish": [
			"Una tierra eternamente helada. Antiguas ruinas dormían allí.",
			"Allí, existía la leyenda del 'Cuerno que llama al fin'.",
			"Pero no todas las leyendas son verdad.",
			"La verdad estaba congelada aún más profundo."
		],
		"vietnamese": [
			"Một vùng đất đóng băng vĩnh cửu. Những tàn tích cổ xưa say ngủ.",
			"Ở đó, có truyền thuyết về 'Chiếc tù và gọi Ngày Tận Thế'.",
			"Tuy nhiên, không phải mọi truyền thuyết đều là sự thật.",
			"Sự thật bị đóng băng ở một nơi sâu hơn nữa."
		],
		"thai": [
			"ดินแดนที่เยือกแข็งชั่วนิรันดร์ ซากปรักหักพังโบราณหลับใหลอยู่",
			"ณ ที่นั้น มีตำนานของ 'แตรเรียกความพินาศ' อยู่",
			"แต่ไม่ใช่ทุกตำนานที่เป็นจริง",
			"ความจริงถูกแช่แข็งอยู่ในส่วนที่ลึกกว่านั้น"
		],
		"hindi": [
			"हमेशा जमी हुई भूमि। प्राचीन खंडहर सो रहे थे।",
			"वहाँ 'प्रलय की तुरही' की एक किंवदंती थी।",
			"लेकिन सभी किंवदंतियाँ सच नहीं होतीं।",
			"सत्य और भी गहराई में जमा हुआ था।"
		]
	}
} as const;
