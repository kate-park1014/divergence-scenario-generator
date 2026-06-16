export const scenario_snowy_skalhorn_55_04 = {
	"scenario_id": "snowy_skalhorn_55_04",
	"order": 4,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"boris": {
			"id": "mon_8f41e00a-9c1b-4e66-9d7a-584cc2a9af84",
			"name": {
				"korean": "보리스",
				"english": "Boris",
				"japanese": "ボリス",
				"chinese": "鲍里斯",
				"french": "Boris",
				"spanish": "Boris",
				"vietnamese": "Boris",
				"thai": "บอริส",
				"hindi": "बोरिस"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8db2ee50-a24d-43cf-a3ec-fad83142f500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/961dfd96-9db1-42aa-a15b-82ba7d1ae700/public"
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
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "뿔잔의 노래가 잠시 잦아든 골. 기묘한 고요가 숲을 감쌌다.",
						"english": "The valley where the horn's song briefly faded. A strange quiet enveloped the forest.",
						"japanese": "角笛の歌が一時的に鎮まった谷。奇妙な静寂が森を包んだ。",
						"chinese": "号角之歌暂时平息的山谷。诡异的寂静笼罩着森林。",
						"french": "La vallée où le chant de la corne s'est estompé un instant. Un étrange calme enveloppa la forêt.",
						"spanish": "El valle donde el canto del cuerno se desvaneció brevemente. Un extraño silencio envolvió el bosque.",
						"vietnamese": "Thung lũng nơi tiếng ca của tù và tạm lắng. Một sự tĩnh lặng kỳ lạ bao trùm khu rừng.",
						"thai": "หุบเขาที่เสียงเพลงของเขาสัตว์จางหายไปชั่วขณะ ความเงียบงันแปลกประหลาดปกคลุมป่า",
						"hindi": "वह घाटी जहाँ सींग का गीत क्षण भर के लिए शांत हो गया। एक अजीब खामोशी ने जंगल को घेर लिया।"
					}
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						3
					],
					"speaker": "boris",
					"type": "direction"
				},
				{
					"speaker": "boris",
					"type": "speech",
					"content": {
						"korean": "조심해. 거룩해 보일수록, 더 의심해야 한다.",
						"english": "Be careful. The holier it appears, the more you should doubt it.",
						"japanese": "気をつけろ。聖なるものに見えるほど、疑うべきだ。",
						"chinese": "小心。它看起来越神圣，你就越应该怀疑。",
						"french": "Sois prudent. Plus cela paraît sacré, plus tu devrais t'en méfier.",
						"spanish": "Ten cuidado. Cuanto más sagrado parezca, más debes dudar.",
						"vietnamese": "Cẩn thận. Càng trông linh thiêng, càng phải nghi ngờ.",
						"thai": "ระวังให้ดี ยิ่งดูศักดิ์สิทธิ์เท่าไหร่ ยิ่งต้องสงสัยเท่านั้น",
						"hindi": "सावधान रहो। जितना यह पवित्र दिखे, उतना ही तुम्हें इस पर संदेह करना चाहिए।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "또 시작이군, 보리스. 여기는 안전해 보여.",
						"english": "Here we go again, Boris. This place looks safe.",
						"japanese": "また始まったな、ボリス。ここは安全に見える。",
						"chinese": "又来了，鲍里斯。这里看起来很安全。",
						"french": "Encore, Boris. Cet endroit semble sûr.",
						"spanish": "Otra vez, Boris. Este lugar parece seguro.",
						"vietnamese": "Lại nữa rồi, Boris. Nơi này trông có vẻ an toàn.",
						"thai": "อีกแล้วนะบอริส ที่นี่ดูปลอดภัยดี",
						"hindi": "फिर शुरू हो गया, बोरिस। यह जगह सुरक्षित दिखती है।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "boris",
					"content": {
						"korean": "그게 함정이다. 황홀할 때, 네 정신을 가장 쉽게 홀려.",
						"english": "That's the trap. When you're in ecstasy, it's easiest to ensnare your mind.",
						"japanese": "それが罠だ。恍惚としている時こそ、お前の精神は最も容易に誘惑される。",
						"chinese": "那就是陷阱。当你狂喜时，你的心神最容易被迷惑。",
						"french": "C'est le piège. Quand tu es en extase, il est plus facile d'envoûter ton esprit.",
						"spanish": "Esa es la trampa. Cuando estás extasiado, es más fácil engañar tu mente.",
						"vietnamese": "Đó chính là cạm bẫy. Khi bạn đang mê đắm, tâm trí bạn dễ bị mê hoặc nhất.",
						"thai": "นั่นแหละคือกับดัก ตอนที่คุณเคลิบเคลิ้ม จิตใจของคุณจะถูกหลอกล่อได้ง่ายที่สุด",
						"hindi": "वही जाल है। जब तुम परमानंद में होते हो, तब तुम्हारे मन को फँसाना सबसे आसान होता है।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "boris",
					"type": "direction",
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"emotion": "base",
					"speaker": "boris",
					"type": "speech",
					"content": {
						"korean": "기억해라. 황홀할 땐 멈춰.",
						"english": "Remember this: When in ecstasy, stop.",
						"japanese": "覚えておけ。恍惚としている時は、立ち止まれ。",
						"chinese": "记住。当你狂喜时，停下。",
						"french": "Souviens-toi : Quand tu es en extase, arrête-toi.",
						"spanish": "Recuerda: Cuando estés extasiado, detente.",
						"vietnamese": "Hãy nhớ: Khi đang mê đắm, hãy dừng lại.",
						"thai": "จำไว้ว่า: เมื่อคุณเคลิบเคลิ้ม จงหยุด",
						"hindi": "याद रखना। जब परमानंद में हो, तो रुक जाना।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그게 무슨 뜻이야?",
						"english": "What does that mean?",
						"japanese": "それはどういう意味だ？",
						"chinese": "那是什么意思？",
						"french": "Qu'est-ce que cela signifie ?",
						"spanish": "¿Qué significa eso?",
						"vietnamese": "Điều đó có nghĩa là gì?",
						"thai": "นั่นหมายความว่าอย่างไร?",
						"hindi": "उसका क्या मतलब है?"
					}
				},
				{
					"emotion": "base",
					"speaker": "boris",
					"type": "speech",
					"content": {
						"korean": "갑자기 모든 게 완벽해 보이고, 의심이 사라지는 순간이 온다.",
						"english": "Suddenly, there comes a moment when everything seems perfect, and doubt vanishes.",
						"japanese": "突然、すべてが完璧に見え、疑念が消え去る瞬間が訪れる。",
						"chinese": "突然间，一切看起来都很完美，疑虑也随之消失。",
						"french": "Soudain, il y a un moment où tout semble parfait et où le doute disparaît.",
						"spanish": "De repente, llega un momento en que todo parece perfecto y la duda se desvanece.",
						"vietnamese": "Đột nhiên, có một khoảnh khắc mọi thứ dường như hoàn hảo, và sự nghi ngờ tan biến.",
						"thai": "ทันใดนั้น ช่วงเวลาที่ทุกสิ่งดูสมบูรณ์แบบและความสงสัยหายไปก็มาถึง",
						"hindi": "अचानक, एक ऐसा पल आता है जब सब कुछ सही लगता है, और संदेह गायब हो जाता है।"
					}
				},
				{
					"type": "speech",
					"speaker": "boris",
					"content": {
						"korean": "그때가 가장 위험해. 그게 미혹의 시작이야.",
						"english": "That's when it's most dangerous. That's the beginning of temptation.",
						"japanese": "その時が最も危険だ。それが誘惑の始まりだ。",
						"chinese": "那时最危险。那是诱惑的开始。",
						"french": "C'est à ce moment-là que c'est le plus dangereux. C'est le début de la tentation.",
						"spanish": "Ese es el momento más peligroso. Es el comienzo de la tentación.",
						"vietnamese": "Đó là lúc nguy hiểm nhất. Đó là khởi đầu của sự mê hoặc.",
						"thai": "นั่นคือช่วงเวลาที่อันตรายที่สุด นั่นคือจุดเริ่มต้นของการล่อลวง",
						"hindi": "वही सबसे खतरनाक समय है। वही मोह की शुरुआत है।"
					},
					"emotion": "sad"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "boris",
					"spot": [
						2,
						3
					]
				},
				{
					"emotion": "base",
					"content": {
						"korean": "하지만… 진정한 신념도 그렇게 시작하는 거 아니야?",
						"english": "But... doesn't true conviction start that way too?",
						"japanese": "だが… 真の信念もそうして始まるのではないか？",
						"chinese": "但是……真正的信念不也是那样开始的吗？",
						"french": "Mais… la vraie conviction ne commence-t-elle pas aussi de cette façon ?",
						"spanish": "Pero… ¿acaso la verdadera convicción no empieza así también?",
						"vietnamese": "Nhưng… niềm tin thật sự không phải cũng bắt đầu như vậy sao?",
						"thai": "แต่... ศรัทธาที่แท้จริงก็ไม่ได้เริ่มต้นแบบนั้นด้วยหรือ?",
						"hindi": "पर… सच्ची आस्था भी तो ऐसे ही शुरू होती है, है ना?"
					},
					"speaker": "character_1",
					"type": "speech"
				},
				{
					"content": {
						"korean": "아니. 진정한 신념은 의심을 이겨내지, 의심을 지우지 않아.",
						"english": "No. True conviction overcomes doubt, it doesn't erase it.",
						"japanese": "違う。真の信念は疑念を乗り越えるのであって、消し去るのではない。",
						"chinese": "不。真正的信念是战胜疑虑，而不是消除疑虑。",
						"french": "Non. La vraie conviction surmonte le doute, elle ne l'efface pas.",
						"spanish": "No. La verdadera convicción supera la duda, no la borra.",
						"vietnamese": "Không. Niềm tin thật sự vượt qua nghi ngờ, chứ không xóa bỏ nó.",
						"thai": "ไม่ ศรัทธาที่แท้จริงเอาชนะความสงสัย ไม่ใช่ลบเลือนมัน",
						"hindi": "नहीं। सच्ची आस्था संदेह पर विजय पाती है, उसे मिटाती नहीं।"
					},
					"speaker": "boris",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "신념이 광기가 되는 순간… 너무 모호해.",
						"english": "The moment conviction becomes madness... it's too ambiguous.",
						"japanese": "信念が狂気となる瞬間… あまりにも曖昧だ。",
						"chinese": "信念变成疯狂的瞬间……太模糊了。",
						"french": "Le moment où la conviction devient folie… c'est trop ambigu.",
						"spanish": "El momento en que la convicción se convierte en locura… es demasiado ambiguo.",
						"vietnamese": "Khoảnh khắc niềm tin trở thành sự điên rồ… quá mơ hồ.",
						"thai": "ช่วงเวลาที่ศรัทธากลายเป็นความบ้าคลั่ง... มันคลุมเครือเกินไป",
						"hindi": "जिस पल आस्था पागलपन बन जाती है… वह बहुत अस्पष्ट है।"
					},
					"type": "speech",
					"speaker": "character_2"
				},
				{
					"speaker": "boris",
					"type": "speech",
					"content": {
						"korean": "아니. 광기는 언제나 달콤한 속삭임으로 시작한다.",
						"english": "No. Madness always begins with a sweet whisper.",
						"japanese": "違う。狂気は常に甘いささやきから始まる。",
						"chinese": "不。疯狂总是从甜言蜜语开始。",
						"french": "Non. La folie commence toujours par un doux murmure.",
						"spanish": "No. La locura siempre comienza con un dulce susurro.",
						"vietnamese": "Không. Sự điên rồ luôn bắt đầu bằng những lời thì thầm ngọt ngào.",
						"thai": "ไม่ ความบ้าคลั่งเริ่มต้นด้วยเสียงกระซิบที่หอมหวานเสมอ",
						"hindi": "नहीं। पागलपन हमेशा एक मीठी फुसफुसाहट से शुरू होता है।"
					},
					"emotion": "base"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						3
					],
					"speaker": "boris",
					"type": "direction"
				},
				{
					"content": {
						"korean": "우리가 가는 곳은 더 깊은 미혹의 골이다.",
						"english": "The path we take leads to a deeper chasm of temptation.",
						"japanese": "我々が向かうのは、より深き誘惑の谷だ。",
						"chinese": "我们所去之处是更深的迷惑之谷。",
						"french": "L'endroit où nous allons est un abîme de tentation plus profond.",
						"spanish": "El lugar al que vamos es un abismo más profundo de tentación.",
						"vietnamese": "Nơi chúng ta đến là vực sâu hơn của sự mê hoặc.",
						"thai": "ที่เราไปคือหุบเหวแห่งการล่อลวงที่ลึกยิ่งขึ้น",
						"hindi": "हम जिस जगह जा रहे हैं, वह मोह की और गहरी खाई है।"
					},
					"type": "speech",
					"speaker": "boris",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "boris",
					"content": {
						"korean": "눈과 귀를 믿지 마. 심장을 믿어라. 오직 진실만을 추구하는 네 심장을.",
						"english": "Don't trust your eyes and ears. Trust your heart. Your heart that seeks only the truth.",
						"japanese": "目と耳を信じるな。心臓を信じろ。真実のみを求めるお前の心臓を。",
						"chinese": "不要相信你的眼睛和耳朵。相信你的心。只追求真相的心。",
						"french": "Ne crois pas tes yeux et tes oreilles. Fais confiance à ton cœur. Ton cœur qui ne cherche que la vérité.",
						"spanish": "No confíes en tus ojos y oídos. Confía en tu corazón. Tu corazón que busca solo la verdad.",
						"vietnamese": "Đừng tin vào mắt và tai. Hãy tin vào trái tim. Trái tim chỉ theo đuổi sự thật của bạn.",
						"thai": "อย่าเชื่อตาและหูของคุณ จงเชื่อหัวใจของคุณ หัวใจที่แสวงหาแต่ความจริงเท่านั้น",
						"hindi": "अपनी आँखों और कानों पर विश्वास मत करो। अपने दिल पर विश्वास करो। अपने उस दिल पर जो सिर्फ सच की तलाश करता है।"
					}
				},
				{
					"content": {
						"korean": "알겠어, 보리스.",
						"english": "Understood, Boris.",
						"japanese": "分かった、ボリス。",
						"chinese": "明白了，鲍里斯。",
						"french": "Compris, Boris.",
						"spanish": "Entendido, Boris.",
						"vietnamese": "Đã rõ, Boris.",
						"thai": "เข้าใจแล้ว บอริส",
						"hindi": "समझ गया, बोरिस।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "세 사람의 분별은 더욱 단단해졌다. 망설임 없이 발걸음을 옮겼다.",
						"english": "The discernment of the three grew firmer. They moved forward without hesitation.",
						"japanese": "三人の分別はさらに固くなった。ためらうことなく足を進めた。",
						"chinese": "三人之间的辨别力更加坚定。他们毫不犹豫地迈开了脚步。",
						"french": "Le discernement des trois devint plus ferme. Ils avancèrent sans hésitation.",
						"spanish": "El discernimiento de los tres se hizo más firme. Avanzaron sin dudar.",
						"vietnamese": "Sự phân biệt của ba người trở nên kiên định hơn. Họ bước đi không chút do dự.",
						"thai": "การไตร่ตรองของทั้งสามแข็งแกร่งขึ้น พวกเขาก้าวเดินไปข้างหน้าโดยไม่ลังเล",
						"hindi": "तीनों की समझ और भी दृढ़ हो गई। उन्होंने बिना किसी हिचकिचाहट के कदम आगे बढ़ाए।"
					}
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "결국 홀리는구나. 광기는 늘 너희 곁에 있었다.",
						"english": "You've fallen for it after all. Madness was always by your side.",
						"japanese": "結局、惑わされるのだな。狂気はいつもお前たちの傍にあった。",
						"chinese": "终究还是被迷惑了啊。疯狂一直都在你们身边。",
						"french": "Vous êtes tombés dans le piège après tout. La folie a toujours été à vos côtés.",
						"spanish": "Al final caísteis. La locura siempre estuvo a vuestro lado.",
						"vietnamese": "Cuối cùng các ngươi cũng bị mê hoặc rồi. Sự điên rồ luôn ở bên cạnh các ngươi.",
						"thai": "ในที่สุดก็หลงกลสินะ. ความบ้าคลั่งอยู่ข้างๆ พวกเจ้าเสมอมา.",
						"hindi": "अंततः तुम बहक गए। पागलपन हमेशा तुम्हारे साथ था।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "…아니, 아직 끝나지 않았어.",
						"english": "...No, it's not over yet.",
						"japanese": "…いや、まだ終わってない。",
						"chinese": "……不，还没结束。",
						"french": "...Non, ce n'est pas encore fini.",
						"spanish": "...No, aún no ha terminado.",
						"vietnamese": "...Không, vẫn chưa kết thúc.",
						"thai": "...ไม่, ยังไม่จบ.",
						"hindi": "...नहीं, अभी खत्म नहीं हुआ।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"spot": [
						4,
						3
					],
					"speaker": "boris",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"emotion": "base",
					"speaker": "boris",
					"type": "speech",
					"content": {
						"korean": "잊지 마. 다시 일어설 용기가 곧 진실이다.",
						"english": "Never forget. The courage to rise again is the truth.",
						"japanese": "忘れるな。再び立ち上がる勇気こそ、真実だ。",
						"chinese": "别忘了。再次站起的勇气，即是真理。",
						"french": "N'oublie jamais. Le courage de te relever, c'est la vérité.",
						"spanish": "Nunca olvides. La valentía de levantarse de nuevo es la verdad.",
						"vietnamese": "Đừng quên. Dũng khí đứng dậy lần nữa, đó chính là sự thật.",
						"thai": "อย่าลืมนะ ความกล้าที่จะลุกขึ้นยืนอีกครั้งนั่นแหละคือสัจธรรม",
						"hindi": "कभी मत भूलो। दोबारा उठने का साहस ही सत्य है।"
					}
				}
			],
			"win_dialogue": [
				{
					"emotion": "sad",
					"content": {
						"korean": "…겨우 이 정도 분별력으로… 어디까지 갈 수 있을까….",
						"english": "...With merely this much discernment... how far can you go...?",
						"japanese": "…たったこれっぽっちの分別力で…どこまで行けるというのか…。",
						"chinese": "……仅仅凭这点判断力……能走多远呢……。",
						"french": "...Avec si peu de discernement... jusqu'où pourrez-vous aller...?",
						"spanish": "...Con tan poca perspicacia... ¿hasta dónde podréis llegar...?",
						"vietnamese": "...Chỉ với chút nhận định này... các ngươi có thể đi được bao xa...?",
						"thai": "...ด้วยสติปัญญาเพียงเท่านี้...จะไปได้ไกลแค่ไหนกันนะ...",
						"hindi": "...केवल इतनी ही विवेकशक्ति के साथ... तुम कितनी दूर जा सकते हो...?"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"type": "direction",
					"speaker": "boris"
				},
				{
					"content": {
						"korean": "끝까지 갈 거야, 보리스. 네 말대로.",
						"english": "We'll go all the way, Boris. Just as you said.",
						"japanese": "最後まで行くさ、ボリス。君の言う通りに。",
						"chinese": "我们会走到最后，鲍里斯。正如你所说。",
						"french": "Nous irons jusqu'au bout, Boris. Comme tu l'as dit.",
						"spanish": "Llegaremos hasta el final, Boris. Tal como dijiste.",
						"vietnamese": "Chúng ta sẽ đi đến cùng, Boris. Đúng như cậu nói.",
						"thai": "เราจะไปให้สุดทาง, บอริส. อย่างที่นายว่า.",
						"hindi": "हम अंत तक जाएंगे, बोरिस। जैसा तुमने कहा था।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "좋아. 아직 긴장을 늦출 때가 아니다.",
						"english": "Good. It's not time to lower our guard yet.",
						"japanese": "よし。まだ気を緩める時ではない。",
						"chinese": "很好。现在还不是放松警惕的时候。",
						"french": "Bien. Ce n'est pas encore le moment de baisser notre garde.",
						"spanish": "Bien. Todavía no es momento de bajar la guardia.",
						"vietnamese": "Tốt. Vẫn chưa phải lúc lơ là cảnh giác.",
						"thai": "ดี. ยังไม่ถึงเวลาที่จะลดการ์ดลง.",
						"hindi": "अच्छा। अभी सतर्कता कम करने का समय नहीं है।"
					},
					"speaker": "boris",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "미혹은 걷혔지만, 더 깊은 어둠이 저 너머에 있었다.",
						"english": "The deception was lifted, but a deeper darkness lay beyond.",
						"japanese": "迷いは晴れたが、その先にはより深い闇があった。",
						"chinese": "迷惑虽已解除，但更深的黑暗却在前方。",
						"french": "L'illusion s'est dissipée, mais une obscurité plus profonde se trouvait au-delà.",
						"spanish": "El engaño se disipó, pero una oscuridad más profunda yacía más allá.",
						"vietnamese": "Sự mê hoặc đã tan biến, nhưng một bóng tối sâu thẳm hơn nằm ở phía bên kia.",
						"thai": "การหลอกลวงได้คลี่คลายลง แต่ความมืดที่ลึกกว่ายังรออยู่เบื้องหน้า.",
						"hindi": "भ्रम मिट गया, लेकिन उससे परे एक गहरा अंधकार था।"
					},
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "정체 모를 그림자가 숲의 심장부에서 나타났다.",
						"english": "An unknown shadow emerged from the heart of the forest.",
						"japanese": "正体不明の影が森の心臓部から現れた。",
						"chinese": "一个不明的影子从森林深处出现。",
						"french": "Une ombre inconnue est apparue du cœur de la forêt.",
						"spanish": "Una sombra desconocida emergió del corazón del bosque.",
						"vietnamese": "Một bóng tối không rõ danh tính xuất hiện từ trái tim khu rừng.",
						"thai": "เงาลึกลับปรากฏขึ้นจากใจกลางป่า",
						"hindi": "जंगल के हृदय से एक अज्ञात छाया उभरी।"
					}
				},
				{
					"content": {
						"korean": "환영한다, 어리석은 자들. 여기가 너희의 영원한 안식처가 될 것이다.",
						"english": "Welcome, foolish ones. This will be your eternal resting place.",
						"japanese": "歓迎する、愚か者たちよ。ここがお前たちの永遠の安息の地となるだろう。",
						"chinese": "欢迎你们，愚蠢的家伙。这里将是你们永远的安息之地。",
						"french": "Bienvenue, imbéciles. Ce sera votre dernier lieu de repos.",
						"spanish": "Bienvenidos, necios. Este será vuestro eterno lugar de descanso.",
						"vietnamese": "Hoan nghênh, những kẻ ngu xuẩn. Đây sẽ là nơi an nghỉ vĩnh hằng của các ngươi.",
						"thai": "ยินดีต้อนรับ, พวกโง่เขลา. ที่นี่จะเป็นที่พำนักนิรันดร์ของพวกเจ้า.",
						"hindi": "स्वागत है, मूर्खों। यह तुम्हारा शाश्वत विश्राम स्थल होगा।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "헛소리 하지 마. 우린 홀리지 않아.",
						"english": "Don't talk nonsense. We won't be swayed.",
						"japanese": "馬鹿なことを言うな。俺たちは惑わされない。",
						"chinese": "别胡说八道。我们不会被迷惑的。",
						"french": "Ne dis pas de bêtises. Nous ne nous laisserons pas influencer.",
						"spanish": "No digas tonterías. No nos dejaremos engañar.",
						"vietnamese": "Đừng nói xằng. Chúng tôi sẽ không bị lung lay đâu.",
						"thai": "อย่าพูดเหลวไหล. เราไม่หลงกลหรอก.",
						"hindi": "बकवास मत करो। हम बहकावे में नहीं आएंगे।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…그 분별력이 얼마나 갈지, 시험해 보자.",
						"english": "...Let's test how long that discernment lasts.",
						"japanese": "…その分別力がどこまで続くか、試してみよう。",
						"chinese": "……让我们来测试一下，那份判断力能持续多久。",
						"french": "...Voyons combien de temps durera ce discernement.",
						"spanish": "...Probemos cuánto durará esa sensatez.",
						"vietnamese": "...Để xem sự sáng suốt đó kéo dài được bao lâu.",
						"thai": "...มาดูกันว่าความเข้าใจนั้นจะอยู่ได้นานแค่ไหน.",
						"hindi": "...चलो देखते हैं कि वह विवेक कितना टिकता है।"
					},
					"type": "speech",
					"speaker": "random_boss"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"뿔잔의 웅얼거림이 잦아들자, 숲은 기묘한 침묵에 잠겼다.",
			"이 평화로운 고요 속에, 또 다른 미혹이 숨어 있었다.",
			"보리스가 말한다. 가장 거룩한 순간에, 가장 깊은 함정이 있다고.",
			"세 사람은 묻는다. 무엇이 신앙이고, 무엇이 광기인가?"
		],
		"english": [
			"As the horn's murmurs faded, a strange silence fell over the forest.",
			"In this peaceful quiet, another deception lay hidden.",
			"Boris says: In the holiest moment, lies the deepest trap.",
			"Three people ask: What is faith, and what is madness?"
		],
		"japanese": [
			"角笛のささやきが鎮まると、森は奇妙な沈黙に包まれた。",
			"この穏やかな静寂の中に、また別の誘惑が潜んでいた。",
			"ボリスは言う。「最も聖なる瞬間に、最も深い罠がある」と。",
			"三人は問う。何が信仰で、何が狂気なのか？"
		],
		"chinese": [
			"随着号角声渐息，森林陷入一片诡异的寂静。",
			"在这宁静的寂寥中，另一份诱惑潜藏其中。",
			"鲍里斯说：在最神圣的时刻，隐藏着最深的陷阱。",
			"三人问道：何为信仰，何为疯狂？"
		],
		"french": [
			"Lorsque les murmures de la corne s'éteignirent, un étrange silence tomba sur la forêt.",
			"Dans ce calme paisible, une autre tromperie se cachait.",
			"Boris dit : Au moment le plus sacré, se trouve le piège le plus profond.",
			"Les trois demandent : Qu'est-ce que la foi, et qu'est-ce que la folie ?"
		],
		"spanish": [
			"Cuando los murmullos del cuerno cesaron, un extraño silencio se apoderó del bosque.",
			"En esta pacífica quietud, otro engaño acechaba.",
			"Boris dice: En el momento más sagrado, reside la trampa más profunda.",
			"¿Qué es la fe y qué es la locura?"
		],
		"vietnamese": [
			"Khi tiếng thì thầm của tù và lắng xuống, một sự im lặng kỳ lạ bao trùm khu rừng.",
			"Trong sự tĩnh lặng yên bình này, một sự mê hoặc khác đang ẩn giấu.",
			"Boris nói: Trong khoảnh khắc linh thiêng nhất, có một cạm bẫy sâu sắc nhất.",
			"Ba người hỏi: Điều gì là đức tin, và điều gì là điên rồ?"
		],
		"thai": [
			"เมื่อเสียงพึมพำของเขาสัตว์จางหายไป ความเงียบงันแปลกประหลาดก็ปกคลุมป่า",
			"ในความสงบอันเงียบงันนี้ มีสิ่งล่อลวงอื่นซ่อนอยู่",
			"บอริสกล่าวว่า: ในช่วงเวลาที่ศักดิ์สิทธิ์ที่สุด ย่อมมีกับดักที่ลึกที่สุด",
			"สามคนถามว่า: สิ่งใดคือศรัทธา และสิ่งใดคือความบ้าคลั่ง?"
		],
		"hindi": [
			"जैसे ही सींग की गूँज धीमी हुई, जंगल में एक अजीब खामोशी छा गई।",
			"इस शांतिपूर्ण खामोशी में, एक और भ्रम छिपा हुआ था।",
			"बोरिस कहता है: सबसे पवित्र क्षण में, सबसे गहरा जाल होता है।",
			"तीन लोग पूछते हैं: क्या है आस्था, और क्या है पागलपन?"
		]
	}
} as const;
