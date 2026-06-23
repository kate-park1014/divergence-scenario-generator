export const scenario_snowy_mnemora_70_01 = {
	"scenario_id": "snowy_mnemora_70_01",
	"order": 1,
	"act": "intro",
	"theme": "snowy",
	"actors": {
		"anuk": {
			"id": "mon_8736797d-779a-4748-8633-d15c1eaf9be7",
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
			"dialogue": [
				{
					"content": {
						"korean": "끝없이 펼쳐진 설원, 시야조차 가리는 눈보라가 휘몰아친다.",
						"english": "An endless snowfield, a blizzard raging, obscuring even sight.",
						"japanese": "限りなく広がる雪原、視界さえ遮る吹雪が吹き荒れている。",
						"chinese": "一望无际的雪原，暴风雪肆虐，甚至遮蔽了视线。",
						"french": "Une étendue de neige infinie, un blizzard déchaîné, obscurcissant même la vue.",
						"spanish": "Un campo de nieve interminable, una ventisca furiosa, que incluso oculta la vista.",
						"vietnamese": "Cánh đồng tuyết vô tận, bão tuyết hoành hành, che khuất cả tầm nhìn.",
						"thai": "ทุ่งหิมะที่กว้างใหญ่สุดลูกหูลูกตา พายุหิมะพัดกระหน่ำจนบดบังทัศนวิสัย",
						"hindi": "एक अंतहीन बर्फ का मैदान, एक बर्फीला तूफान raging, जिसने दृष्टि को भी धुंधला कर दिया।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "젠장, 또 길을 잃었어. 대체 어디까지 온 거야?",
						"english": "Damn, I'm lost again. How far have I even come?",
						"japanese": "くそ、また道に迷った。一体どこまで来たんだ？",
						"chinese": "该死，我又迷路了。到底走到哪里了？",
						"french": "Bon sang, je suis encore perdu. Jusqu'où suis-je allé ?",
						"spanish": "Maldita sea, me he vuelto a perder. ¿Hasta dónde he llegado?",
						"vietnamese": "Chết tiệt, lại lạc đường rồi. Rốt cuộc mình đã đi đến đâu rồi?",
						"thai": "บ้าจริง, หลงทางอีกแล้ว ฉันมาไกลแค่ไหนกันแน่?",
						"hindi": "धिक्कार है, मैं फिर से भटक गया हूँ। मैं आखिर कितनी दूर आ गया हूँ?"
					}
				},
				{
					"duration_ms": 500,
					"speaker": "anuk",
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					]
				},
				{
					"speaker": "anuk",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "길을 잃으셨나요? 이정표가 될 비석으로 안내해 드리죠.",
						"english": "Lost your way? I'll guide you to the monument that serves as a landmark.",
						"japanese": "道に迷いましたか？道標となる石碑までご案内しましょう。",
						"chinese": "迷路了吗？我来带您去那个作为路标的石碑。",
						"french": "Vous avez perdu votre chemin ? Je vous guiderai vers le monument qui sert de repère.",
						"spanish": "Ha perdido el camino? Le guiaré al monumento que sirve de punto de referencia.",
						"vietnamese": "Bạn lạc đường ư? Tôi sẽ dẫn bạn đến tượng đài làm cột mốc.",
						"thai": "หลงทางหรือเปล่าครับ? ผมจะนำทางคุณไปยังอนุสาวรีย์ที่เป็นหลักชัยให้เอง",
						"hindi": "रास्ता भटक गए हैं? मैं आपको उस स्मारक तक ले जाऊंगा जो एक मील का पत्थर है।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "비석? 그런 게 있다고?",
						"english": "A monument? Something like that exists?",
						"japanese": "石碑？そんなものがあるのか？",
						"chinese": "石碑？有那种东西吗？",
						"french": "Un monument ? Ça existe ?",
						"spanish": "¿Un monumento? ¿Existe algo así?",
						"vietnamese": "Một tượng đài? Có thứ đó sao?",
						"thai": "อนุสาวรีย์เหรอ? มีแบบนั้นด้วยเหรอ?",
						"hindi": "एक स्मारक? ऐसी कोई चीज़ मौजूद है क्या?"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"speaker": "anuk"
				},
				{
					"content": {
						"korean": "이 길은 험난하지만, 저를 믿으시면 안전할 겁니다.",
						"english": "This path is harsh, but if you trust me, you'll be safe.",
						"japanese": "この道は険しいですが、私を信じてくだされば安全です。",
						"chinese": "这条路很艰难，但如果你相信我，你会很安全的。",
						"french": "Ce chemin est difficile, mais si vous me faites confiance, vous serez en sécurité.",
						"spanish": "Este camino es duro, pero si confías en mí, estarás a salvo.",
						"vietnamese": "Con đường này hiểm trở, nhưng nếu bạn tin tôi, bạn sẽ an toàn.",
						"thai": "เส้นทางนี้ลำบาก แต่ถ้าคุณเชื่อใจผม คุณจะปลอดภัย",
						"hindi": "यह रास्ता कठिन है, लेकिन अगर आप मुझ पर भरोसा करते हैं, तो आप सुरक्षित रहेंगे।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "anuk"
				},
				{
					"content": {
						"korean": "이상해… 이 길, 왠지 익숙한데.",
						"english": "Strange... this path feels familiar somehow.",
						"japanese": "変だな…この道、なぜか見覚えがある。",
						"chinese": "奇怪……这条路，总觉得很熟悉。",
						"french": "Étrange... ce chemin me semble familier.",
						"spanish": "Extraño... este camino me resulta familiar de alguna manera.",
						"vietnamese": "Lạ thật... con đường này sao đó quen quen.",
						"thai": "แปลกจัง... เส้นทางนี้ทำไมถึงรู้สึกคุ้นเคย",
						"hindi": "अजीब है... यह रास्ता किसी तरह परिचित लग रहा है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_1"
				},
				{
					"content": {
						"korean": "기분 탓이겠지. 처음 와보는 곳이잖아.",
						"english": "It must be my imagination. This is my first time here, after all.",
						"japanese": "気のせいだろう。初めて来る場所だしな。",
						"chinese": "大概是错觉吧。毕竟是第一次来这里。",
						"french": "C'est probablement mon imagination. C'est la première fois que je viens ici, après tout.",
						"spanish": "Debe ser mi imaginación. Es la primera vez que vengo aquí, ¿no?",
						"vietnamese": "Chắc là do mình tưởng tượng thôi. Dù sao đây cũng là lần đầu mình đến đây mà.",
						"thai": "คงคิดไปเองมั้ง ที่นี่ฉันเพิ่งเคยมาครั้งแรกนี่นา",
						"hindi": "शायद यह मेरा वहम है। आखिर मैं यहाँ पहली बार आया हूँ。"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_2"
				},
				{
					"content": {
						"korean": "오래된 기억은 때로 길을 잃게 합니다.",
						"english": "Old memories sometimes lead us astray.",
						"japanese": "古き記憶は、時に道を見失わせる。",
						"chinese": "古老的记忆有时会让人迷失方向。",
						"french": "Les vieux souvenirs nous égarent parfois.",
						"spanish": "Los viejos recuerdos a veces nos hacen perder el camino.",
						"vietnamese": "Ký ức cũ đôi khi khiến ta lạc lối.",
						"thai": "ความทรงจำเก่าแก่ บางครั้งก็นำพาให้หลงทาง",
						"hindi": "पुरानी यादें कभी-कभी राह भटका देती हैं।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "anuk"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "anuk",
					"duration_ms": 500,
					"spot": [
						3,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "드디어 거대한 얼음 비석이 눈앞에 모습을 드러냈다.",
						"english": "At last, a colossal ice monument appeared before my eyes.",
						"japanese": "ついに、巨大な氷の碑石が目の前に姿を現した。",
						"chinese": "终于，巨大的冰碑出现在眼前。",
						"french": "Enfin, un colossal monument de glace apparut devant mes yeux.",
						"spanish": "Finalmente, un colosal monolito de hielo apareció ante mis ojos.",
						"vietnamese": "Cuối cùng, một bia đá băng khổng lồ hiện ra trước mắt.",
						"thai": "ในที่สุด อนุสาวรีย์น้ำแข็งขนาดมหึมาก็ปรากฏขึ้นเบื้องหน้า",
						"hindi": "अंततः, एक विशाल बर्फीला स्मारक मेरी आँखों के सामने प्रकट हुआ।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이 비석… 분명 처음 보는데… 왜 이렇게 익숙하지?",
						"english": "This monument... I've definitely never seen it before... so why does it feel so familiar?",
						"japanese": "この碑石…確かに初めて見るのに…なぜこんなにも見覚えがあるんだ？",
						"chinese": "这块碑石……明明是第一次见……为何如此熟悉？",
						"french": "Ce monument... je ne l'ai clairement jamais vu... alors pourquoi est-il si familier ?",
						"spanish": "Este monolito... nunca lo había visto... entonces, ¿por qué me resulta tan familiar?",
						"vietnamese": "Bia đá này... rõ ràng là lần đầu thấy... sao lại quen thuộc đến vậy?",
						"thai": "อนุสาวรีย์นี่... ไม่เคยเห็นมาก่อนเลยแท้ๆ... ทำไมถึงคุ้นเคยขนาดนี้?",
						"hindi": "यह स्मारक... मैंने इसे पहले कभी नहीं देखा... तो फिर यह इतना परिचित क्यों लग रहा है?"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "이 비석은 잊혀진 기억을 담고 있습니다. 잃어버린 것을 찾는 자들의 이정표가 되죠.",
						"english": "This monument holds forgotten memories. It serves as a guidepost for those who seek what they have lost.",
						"japanese": "この碑石は忘れられた記憶を宿しています。失われたものを探す者たちの道標となるでしょう。",
						"chinese": "这块碑石承载着被遗忘的记忆。它是寻找失落之物的指路明灯。",
						"french": "Ce monument contient des souvenirs oubliés. Il sert de repère à ceux qui cherchent ce qu'ils ont perdu.",
						"spanish": "Este monolito guarda recuerdos olvidados. Sirve de guía para quienes buscan lo que han perdido.",
						"vietnamese": "Bia đá này chứa đựng những ký ức bị lãng quên. Nó là cột mốc cho những kẻ tìm kiếm thứ đã mất.",
						"thai": "อนุสาวรีย์นี้บรรจุความทรงจำที่ถูกลืมเลือน เป็นหลักชัยสำหรับผู้ที่ค้นหาสิ่งที่สูญหายไป",
						"hindi": "यह स्मारक भूली हुई यादों को संजोए हुए है। यह उन लोगों के लिए मार्गदर्शक है जो अपनी खोई हुई चीज़ों को ढूंढ रहे हैं।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "anuk"
				},
				{
					"content": {
						"korean": "잃어버린 기억이라니… 내 기억도 여기 새겨져 있나?",
						"english": "Forgotten memories... Does that mean my memories are also etched here?",
						"japanese": "失われた記憶だと…私の記憶もここに刻まれているのか？",
						"chinese": "失落的记忆……难道我的记忆也刻在这里了吗？",
						"french": "Des souvenirs perdus... Mes souvenirs sont-ils également gravés ici ?",
						"spanish": "¿Recuerdos perdidos? ¿Significa que mis recuerdos también están grabados aquí?",
						"vietnamese": "Ký ức bị lãng quên sao... Ký ức của mình cũng được khắc ở đây à?",
						"thai": "ความทรงจำที่สูญหายงั้นหรือ... ความทรงจำของฉันก็สลักอยู่ที่นี่ด้วยหรือเปล่า?",
						"hindi": "खोई हुई यादें... क्या इसका मतलब है कि मेरी यादें भी यहाँ खुदी हुई हैं?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_3"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"speaker": "anuk"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이 기분, 계속 반복되는 것 같아. 마치 이 길을 수없이 걸었던 것처럼.",
						"english": "This feeling, it's like it keeps repeating. As if I've walked this path countless times before.",
						"japanese": "この感覚、何度も繰り返されているようだ。まるでこの道を数えきれないほど歩いたかのように。",
						"chinese": "这种感觉，好像一直在重复。就好像我已经走过这条路无数次了一样。",
						"french": "Cette sensation, on dirait qu'elle se répète sans cesse. Comme si j'avais parcouru ce chemin d'innombrables fois.",
						"spanish": "Esta sensación, parece que se repite. Como si hubiera recorrido este camino innumerables veces.",
						"vietnamese": "Cảm giác này, cứ như thể nó lặp đi lặp lại. Cứ như mình đã đi trên con đường này vô số lần rồi vậy.",
						"thai": "ความรู้สึกนี้ มันเหมือนจะเกิดขึ้นซ้ำแล้วซ้ำเล่า ราวกับว่าฉันเคยเดินบนเส้นทางนี้มานับครั้งไม่ถ้วน",
						"hindi": "यह एहसास, यह बार-बार हो रहा है। जैसे मैंने यह रास्ता अनगिनत बार चला हो।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "기억은 때로 길을 잃게 하고, 때로 길을 찾아줍니다. 어떤 기억을 택하시겠습니까?",
						"english": "Memories sometimes lead you astray, and sometimes they guide you. Which memory will you choose?",
						"japanese": "記憶は時に道を見失わせ、時に道を示します。あなたはどの記憶を選びますか？",
						"chinese": "记忆有时会让人迷失，有时会指引方向。您会选择哪段记忆？",
						"french": "Les souvenirs égarent parfois, et parfois ils guident. Quelle mémoire choisirez-vous ?",
						"spanish": "Los recuerdos a veces te hacen perder el camino, y a veces te lo muestran. ¿Qué recuerdo elegirás?",
						"vietnamese": "Ký ức đôi khi khiến ta lạc lối, đôi khi lại dẫn đường. Ngươi sẽ chọn ký ức nào?",
						"thai": "ความทรงจำบางครั้งก็ทำให้หลงทาง บางครั้งก็ช่วยนำทาง คุณจะเลือกความทรงจำแบบไหน?",
						"hindi": "यादें कभी-कभी राह भटकाती हैं, और कभी-कभी राह दिखाती हैं। आप कौन सी याद चुनेंगे?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "anuk"
				},
				{
					"speaker": "character_4",
					"content": {
						"korean": "뭐야, 그게 무슨 소리야?",
						"english": "What? What are you talking about?",
						"japanese": "何だ、どういう意味だ？",
						"chinese": "什么？那是什么意思？",
						"french": "Quoi ? Qu'est-ce que tu racontes ?",
						"spanish": "¿Qué? ¿De qué estás hablando?",
						"vietnamese": "Gì vậy, ý ngươi là sao?",
						"thai": "อะไรนะ นั่นหมายความว่าไง?",
						"hindi": "क्या? उसका क्या मतलब है?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "anuk",
					"content": {
						"korean": "선택은 당신의 몫입니다. 계약의 대가는 항상 따르는 법이죠.",
						"english": "The choice is yours. The cost of a contract always follows, after all.",
						"japanese": "選択はあなた次第です。契約の代償は常に伴うもの。",
						"chinese": "选择权在您。契约的代价总是要承担的。",
						"french": "Le choix vous appartient. Le prix d'un contrat se paie toujours.",
						"spanish": "La elección es tuya. El precio de un contrato siempre se paga.",
						"vietnamese": "Sự lựa chọn là của ngươi. Cái giá của khế ước luôn phải trả.",
						"thai": "การเลือกอยู่ที่คุณ ค่าตอบแทนของสัญญาจะตามมาเสมอ",
						"hindi": "चुनाव आपका है। अनुबंध का मूल्य हमेशा चुकाना पड़ता है।"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "결국 이 사슬을 끊었군… 하지만, 반복은 멈추지 않아.",
						"english": "So, you finally broke this chain… But the cycle won't stop.",
						"japanese": "結局、この鎖を断ち切ったか…だが、繰り返しは止まらない。",
						"chinese": "终究，你斩断了这条锁链……但循环不会停止。",
						"french": "Ainsi, vous avez finalement brisé cette chaîne… Mais la répétition ne s'arrêtera pas.",
						"spanish": "Así que, finalmente rompisteis esta cadena… Pero la repetición no se detendrá.",
						"vietnamese": "Cuối cùng thì ngươi cũng đã phá vỡ xiềng xích này… Nhưng sự lặp lại sẽ không dừng lại.",
						"thai": "ในที่สุดเจ้าก็ทำลายพันธนาการนี้ได้… แต่การวนซ้ำจะไม่หยุดลง",
						"hindi": "तो, तुमने अंततः इस ज़ंजीर को तोड़ दिया… लेकिन पुनरावृत्ति रुकेगी नहीं।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "무슨 소리야? 모든 게 끝난 거 아니었어?",
						"english": "What do you mean? Wasn't everything supposed to be over?",
						"japanese": "どういうことだ？全て終わったんじゃなかったのか？",
						"chinese": "什么意思？不是一切都结束了吗？",
						"french": "Que veux-tu dire ? Tout n'était pas censé être fini ?",
						"spanish": "¿Qué quieres decir? ¿No se suponía que todo había terminado?",
						"vietnamese": "Ngươi nói gì vậy? Chẳng phải mọi chuyện đã kết thúc rồi sao?",
						"thai": "หมายความว่าไง? ทุกอย่างยังไม่จบงั้นเหรอ?",
						"hindi": "तुम्हारा क्या मतलब है? क्या सब खत्म नहीं हो गया था?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "anuk",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "하나의 굴레를 넘었을 뿐. 진짜 기억은 아직 깊은 곳에.",
						"english": "You've only overcome one cycle. The true memories are still buried deep.",
						"japanese": "一つの輪廻を超えたに過ぎない。本当の記憶はまだ深い場所に。",
						"chinese": "你只跨越了一个轮回。真正的记忆还在深处。",
						"french": "Vous n'avez dépassé qu'un seul cycle. Les vrais souvenirs sont encore enfouis profondément.",
						"spanish": "Solo habéis superado un ciclo. Los verdaderos recuerdos aún están en lo profundo.",
						"vietnamese": "Ngươi chỉ mới vượt qua một vòng lặp thôi. Ký ức thật sự vẫn còn ẩn sâu.",
						"thai": "เจ้าเพิ่งผ่านพ้นบ่วงหนึ่งเท่านั้น ความทรงจำที่แท้จริงยังคงซ่อนลึกอยู่",
						"hindi": "तुमने केवल एक चक्र पार किया है। असली यादें अभी भी गहराई में हैं।"
					},
					"speaker": "anuk"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "비석에 새겨진 미지의 표식들이 희미하게 빛나기 시작한다. 여정은 끝나지 않았다.",
						"english": "Unknown symbols carved into the monolith begin to glow faintly. The journey is not over.",
						"japanese": "石碑に刻まれた未知の標識がかすかに光り始める。旅は終わっていない。",
						"chinese": "石碑上刻着的未知符号开始微弱地发光。旅程尚未结束。",
						"french": "Des symboles inconnus gravés sur le monolithe commencent à briller faiblement. Le voyage n'est pas terminé.",
						"spanish": "Símbolos desconocidos grabados en el monolito comienzan a brillar débilmente. El viaje no ha terminado.",
						"vietnamese": "Các ký hiệu bí ẩn khắc trên tấm bia bắt đầu phát sáng mờ ảo. Hành trình chưa kết thúc.",
						"thai": "สัญลักษณ์ปริศนาที่แกะสลักบนเสาหินเริ่มเรืองแสงจางๆ การเดินทางยังไม่สิ้นสุด",
						"hindi": "शिला पर खुदे अज्ञात प्रतीक धीरे-धीरे चमकने लगते हैं। यात्रा समाप्त नहीं हुई है।"
					}
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "망각의 품으로 돌아가라. 그대들의 고통은 끝없이 반복될지니.",
						"english": "Return to the embrace of oblivion. Your suffering shall repeat endlessly.",
						"japanese": "忘却の淵へ還れ。お前たちの苦痛は永遠に繰り返されるだろう。",
						"chinese": "回归遗忘的怀抱吧。你们的痛苦将无尽重复。",
						"french": "Retournez dans l'étreinte de l'oubli. Vos souffrances se répéteront sans fin.",
						"spanish": "Regresad al abrazo del olvido. Vuestro sufrimiento se repetirá sin fin.",
						"vietnamese": "Trở về với vòng tay lãng quên. Nỗi đau của các ngươi sẽ lặp lại vô tận.",
						"thai": "จงกลับสู่อ้อมกอดแห่งความว่างเปล่า ความทุกข์ทรมานของเจ้าจะวนเวียนไม่รู้จบ",
						"hindi": "विस्मृति के आलिंगन में लौट जाओ। तुम्हारा कष्ट अंतहीन रूप से दोहराया जाएगा。"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "젠장… 아직 끝나지 않았어. 포기하지 않아!",
						"english": "Damn it... It's not over yet. I won't give up!",
						"japanese": "くそ…まだ終わってない。諦めない！",
						"chinese": "该死……还没结束。我不会放弃！",
						"french": "Mince… Ce n'est pas encore fini. Je n'abandonnerai pas !",
						"spanish": "Maldita sea... Todavía no ha terminado. ¡No me rendiré!",
						"vietnamese": "Chết tiệt... Vẫn chưa kết thúc. Tôi sẽ không bỏ cuộc!",
						"thai": "บ้าเอ๊ย... ยังไม่จบแค่นี้ ฉันไม่ยอมแพ้!",
						"hindi": "धिक्कार है... यह अभी खत्म नहीं हुआ है। मैं हार नहीं मानूँगा!"
					}
				}
			],
			"dialogue": [
				{
					"speaker": "anuk",
					"duration_ms": 500,
					"spot": [
						3,
						3
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "드디어 마주하게 될 시간입니다. 잊힌 설원의 수호자가 당신을 기다립니다.",
						"english": "The time has come to face it. The Guardian of the Forgotten Snowfield awaits you.",
						"japanese": "ついに相対する時が来ました。忘れられた雪原の守護者があなたを待っています。",
						"chinese": "是时候面对了。遗忘雪原的守护者正在等你。",
						"french": "Le moment est venu de l'affronter. Le Gardien du Champ de Neige Oublié vous attend.",
						"spanish": "Ha llegado el momento de enfrentarlo. El Guardián del Campo Nevado Olvidado te espera.",
						"vietnamese": "Đã đến lúc đối mặt rồi. Người Bảo Hộ của Tuyết Nguyên Lãng Quên đang đợi bạn.",
						"thai": "ในที่สุดก็ถึงเวลาเผชิญหน้า ผู้พิทักษ์ทุ่งหิมะที่ถูกลืมกำลังรอท่านอยู่",
						"hindi": "अंततः सामना करने का समय आ गया है। विस्मृत हिमक्षेत्र का संरक्षक आपकी प्रतीक्षा कर रहा है।"
					},
					"speaker": "anuk"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "수호자라고? 네가 말한 비석의 주인인가?",
						"english": "A guardian? Is that the owner of the monolith you mentioned?",
						"japanese": "守護者だと？お前が言っていた石碑の主なのか？",
						"chinese": "守护者？你说的石碑主人吗？",
						"french": "Un gardien ? Est-ce le propriétaire du monolithe dont tu parlais ?",
						"spanish": "¿Un guardián? ¿Es el dueño del monolito que mencionaste?",
						"vietnamese": "Người bảo hộ ư? Là chủ nhân của tấm bia đá mà ngươi nhắc đến à?",
						"thai": "ผู้พิทักษ์งั้นหรือ? เจ้าของเสาหินที่เจ้าพูดถึงใช่ไหม?",
						"hindi": "एक संरक्षक? क्या वह उस शिला का स्वामी है जिसकी तुमने बात की थी?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "anuk",
					"duration_ms": 400,
					"direction": "down",
					"action": "exit",
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 얼음 비석 너머에서 모습을 드러낸다.",
						"english": "A colossal shadow emerges from beyond the ice monolith.",
						"japanese": "巨大な影が氷の石碑の向こうから姿を現す。",
						"chinese": "一个巨大的影子从冰碑后浮现。",
						"french": "Une ombre colossale émerge de derrière le monolithe de glace.",
						"spanish": "Una sombra colosal emerge de más allá del monolito de hielo.",
						"vietnamese": "Một cái bóng khổng lồ xuất hiện từ phía sau tấm bia đá băng.",
						"thai": "เงาร่างมหึมาปรากฏขึ้นจากหลังเสาหินน้ำแข็ง",
						"hindi": "एक विशाल छाया बर्फ़ीली शिला के पार से प्रकट होती है।"
					},
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "또다시 찾아왔는가… 잊혀진 기억의 사슬에 묶인 자들이여.",
						"english": "Have you come again… O, those bound by the chains of forgotten memories.",
						"japanese": "また来たのか… 忘れられた記憶の鎖に縛られし者たちよ。",
						"chinese": "又来了吗……被遗忘记忆之链束缚的你们。",
						"french": "Êtes-vous revenus… O, ceux liés par les chaînes des souvenirs oubliés.",
						"spanish": "¿Habéis vuelto… Oh, vosotros, atados por las cadenas de los recuerdos olvidados?",
						"vietnamese": "Lại đến nữa rồi sao… Hỡi những kẻ bị xiềng xích của ký ức lãng quên trói buộc.",
						"thai": "พวกเจ้ามาอีกแล้วหรือ… ผู้ที่ถูกพันธนาการด้วยโซ่ตรวนแห่งความทรงจำที่ถูกลืม",
						"hindi": "क्या तुम फिर आ गए… ओ, विस्मृत स्मृतियों की ज़ंजीरों से बंधे हुए लोगों।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "네가 우리 기억을 붙잡고 있는 거야?",
						"english": "Are you holding onto our memories?",
						"japanese": "お前が俺たちの記憶を捕らえているのか？",
						"chinese": "是你抓住我们的记忆吗？",
						"french": "Est-ce toi qui retiens nos souvenirs ?",
						"spanish": "¿Eres tú quien retiene nuestros recuerdos?",
						"vietnamese": "Ngươi đang nắm giữ ký ức của chúng ta à?",
						"thai": "เจ้ากักเก็บความทรงจำของพวกเราไว้หรือ?",
						"hindi": "क्या तुम हमारी यादों को पकड़े हुए हो?"
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "그대들이 잊기를 택한 것을, 내가 지키고 있을 뿐.",
						"english": "I merely guard what you chose to forget.",
						"japanese": "君たちが忘れることを選んだものを、私がただ守っているだけだ。",
						"chinese": "我只是守护着你们选择遗忘的东西。",
						"french": "Je ne fais que garder ce que vous avez choisi d'oublier.",
						"spanish": "Yo solo custodio lo que elegisteis olvidar.",
						"vietnamese": "Ta chỉ đang bảo vệ những gì các ngươi đã chọn lãng quên.",
						"thai": "ข้าเพียงแค่เฝ้ารักษาสิ่งที่พวกเจ้าเลือกที่จะลืมเท่านั้น",
						"hindi": "मैं केवल वही रख रहा हूँ जिसे तुमने भूलना चुना है।"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"눈보라가 몰아치는 설원, 모든 것이 얼어붙은 침묵 속에 잠겼다.",
			"길을 잃은 자들에게 유일한 이정표는, 잊혀진 기억이 새겨진 얼음 비석.",
			"친절한 길잡이 '아눅'이 이끄는 길은 익숙하면서도 낯설었다.",
			"이 길은 끝없이 반복되는 미로인가, 아니면 잊힌 진실로 향하는가?"
		],
		"english": [
			"A blizzard-swept snowfield, everything submerged in frozen silence.",
			"For the lost, the only landmark is an ice monolith carved with forgotten memories.",
			"The path led by the kind guide, 'Anuk', felt both familiar and strange.",
			"Is this path an endless labyrinth, or does it lead to a forgotten truth?"
		],
		"japanese": [
			"吹雪が吹き荒れる雪原、全てが凍りつく沈黙に包まれていた。",
			"道に迷いし者たちにとって、唯一の道標は忘れ去られた記憶が刻まれた氷の石碑。",
			"親切な案内人「アヌク」が導く道は、慣れ親しんだようでいて見慣れぬものだった。",
			"この道は無限に繰り返される迷宮なのか、それとも忘れられた真実へと向かうのか？"
		],
		"chinese": [
			"暴风雪肆虐的雪原，一切都沉浸在冰冷的寂静中。",
			"对于迷失者，唯一的路标是刻有遗忘记忆的冰碑。",
			"善良的向导“阿努克”所指引的道路，既熟悉又陌生。",
			"这条路是无尽的迷宫，还是通往被遗忘的真相？"
		],
		"french": [
			"Une étendue enneigée balayée par le blizzard, tout est plongé dans un silence gelé.",
			"Pour les égarés, le seul repère est un monolithe de glace gravé de souvenirs oubliés.",
			"Le chemin guidé par le gentil guide, 'Anuk', semblait à la fois familier et étrange.",
			"Ce chemin est-il un labyrinthe sans fin, ou mène-t-il à une vérité oubliée ?"
		],
		"spanish": [
			"Un campo de nieve azotado por la ventisca, todo sumergido en un silencio helado.",
			"Para los perdidos, el único punto de referencia es un monolito de hielo grabado con recuerdos olvidados.",
			"El camino guiado por el amable guía, 'Anuk', se sentía a la vez familiar y extraño.",
			"P>¿Es este camino un laberinto interminable, o conduce a una verdad olvidada?"
		],
		"vietnamese": [
			"Cánh đồng tuyết bị bão tuyết càn quét, mọi thứ chìm trong im lặng đóng băng.",
			"Với những kẻ lạc lối, cột mốc duy nhất là một bia đá băng khắc những ký ức bị lãng quên.",
			"Con đường do người hướng dẫn tử tế, 'Anuk', dẫn dắt vừa quen thuộc vừa xa lạ.",
			"Con đường này là một mê cung vô tận, hay nó dẫn đến một sự thật bị lãng quên?"
		],
		"thai": [
			"ทุ่งหิมะที่พายุหิมะพัดโหมกระหน่ำ ทุกสิ่งจมดิ่งลงสู่ความเงียบงันที่เยือกแข็ง",
			"สำหรับผู้หลงทาง หลักชัยเดียวคือเสาน้ำแข็งที่แกะสลักด้วยความทรงจำที่ถูกลืม",
			"เส้นทางที่นำโดยไกด์ใจดี 'อานุค' รู้สึกทั้งคุ้นเคยและแปลกใหม่",
			"เส้นทางนี้คือเขาวงกตที่ไม่มีที่สิ้นสุด หรือมันนำไปสู่ความจริงที่ถูกลืม?"
		],
		"hindi": [
			"बर्फीले तूफान से ढका बर्फ का मैदान, सब कुछ जमी हुई खामोशी में डूबा हुआ था।",
			"भटके हुए लोगों के लिए, एकमात्र मील का पत्थर है भूली हुई यादों से खुदी हुई एक बर्फीली शिला।",
			"दयालु मार्गदर्शक 'अनुक' द्वारा दिखाया गया रास्ता, परिचित और अजीब दोनों लगा।",
			"क्या यह रास्ता एक अंतहीन भूलभुलैया है, या यह एक भूली हुई सच्चाई की ओर ले जाता है?"
		]
	}
} as const;
