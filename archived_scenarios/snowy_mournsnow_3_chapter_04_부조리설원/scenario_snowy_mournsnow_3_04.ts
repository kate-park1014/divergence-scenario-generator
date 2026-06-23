export const scenario_snowy_mournsnow_3_04 = {
	"scenario_id": "snowy_mournsnow_3_04",
	"order": 4,
	"act": "rising",
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
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "눈보라 속, 규칙적인 기계적 진동이 느껴졌다.",
						"english": "Amidst the blizzard, a regular mechanical vibration was felt.",
						"japanese": "吹雪の中、規則的な機械の振動が感じられた。",
						"chinese": "暴风雪中，感受到了规律的机械震动。",
						"french": "Au milieu du blizzard, une vibration mécanique régulière se fit sentir.",
						"spanish": "En medio de la ventisca, se sintió una vibración mecánica regular.",
						"vietnamese": "Giữa trận bão tuyết, cảm nhận được một rung động cơ học đều đặn.",
						"thai": "ท่ามกลางพายุหิมะ สัมผัสได้ถึงการสั่นสะเทือนทางกลไกที่สม่ำเสมอ",
						"hindi": "बर्फ़ीले तूफ़ान के बीच, एक नियमित यांत्रिक कंपन महसूस हुआ।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이 진동… 마치 심장 소리 같아.",
						"english": "This vibration... it's like a heartbeat.",
						"japanese": "この振動…まるで心臓の音のようだ。",
						"chinese": "这震动……就像心跳声。",
						"french": "Cette vibration... on dirait un battement de cœur.",
						"spanish": "Esta vibración... es como un latido.",
						"vietnamese": "Rung động này... giống như tiếng tim đập.",
						"thai": "การสั่นสะเทือนนี้... เหมือนเสียงหัวใจเต้นเลย",
						"hindi": "यह कंपन... यह दिल की धड़कन जैसा है।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "anuk",
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "심장? 아니, 시스템의 맥동이다.",
						"english": "Heart? No, it's the system's pulse.",
						"japanese": "心臓？違う、システムの脈動だ。",
						"chinese": "心跳？不，是系统的脉动。",
						"french": "Cœur ? Non, c'est le pouls du système.",
						"spanish": "¿Corazón? No, es el pulso del sistema.",
						"vietnamese": "Tim? Không, đó là mạch đập của hệ thống.",
						"thai": "หัวใจเหรอ? ไม่ใช่หรอก นั่นคือชีพจรของระบบ",
						"hindi": "दिल? नहीं, यह सिस्टम की धड़कन है।"
					},
					"emotion": "base",
					"speaker": "anuk",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "시스템?",
						"english": "System?",
						"japanese": "システム？",
						"chinese": "系统？",
						"french": "Système ?",
						"spanish": "¿Sistema?",
						"vietnamese": "Hệ thống?",
						"thai": "ระบบ?",
						"hindi": "सिस्टम?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "anuk",
					"type": "speech",
					"content": {
						"korean": "이 설원은 숨 쉬는 기계. 모든 것이 통제되지.",
						"english": "This snowy plain is a breathing machine. Everything is controlled.",
						"japanese": "この雪原は息をする機械。すべてが制御されている。",
						"chinese": "这雪原是台会呼吸的机器。一切都被控制着。",
						"french": "Cette plaine enneigée est une machine respirante. Tout est contrôlé.",
						"spanish": "Esta llanura nevada es una máquina que respira. Todo está controlado.",
						"vietnamese": "Đồng tuyết này là một cỗ máy đang thở. Mọi thứ đều bị kiểm soát.",
						"thai": "ทุ่งหิมะนี้คือเครื่องจักรที่หายใจได้ ทุกสิ่งล้วนถูกควบคุม",
						"hindi": "यह बर्फीला मैदान एक साँस लेने वाली मशीन है। सब कुछ नियंत्रित है।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "anuk",
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"speaker": "anuk",
					"type": "speech",
					"content": {
						"korean": "진동이 더 강해졌군. '정화 주기'가 가까워졌다.",
						"english": "The vibration's grown stronger. The 'Purge Cycle' is near.",
						"japanese": "振動が強くなったな。「浄化周期」が近い。",
						"chinese": "震动更强了。'净化周期'快到了。",
						"french": "La vibration s'est intensifiée. Le 'Cycle de Purge' approche.",
						"spanish": "La vibración se ha hecho más fuerte. El 'Ciclo de Purga' está cerca.",
						"vietnamese": "Rung động đã mạnh hơn. 'Chu kỳ thanh trừng' đã gần kề.",
						"thai": "แรงสั่นสะเทือนรุนแรงขึ้นแล้ว 'วงจรชำระล้าง' ใกล้เข้ามาแล้ว",
						"hindi": "कंपन और तेज़ हो गया है। 'शुद्धि चक्र' निकट है।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "정화? 뭘 정화한다는 거야?",
						"english": "Purification? What are you purifying?",
						"japanese": "浄化？何を浄化するつもりだ？",
						"chinese": "净化？你要净化什么？",
						"french": "Purification ? Que veux-tu purifier ?",
						"spanish": "¿Purificación? ¿Qué vas a purificar?",
						"vietnamese": "Tịnh hóa? Anh muốn tịnh hóa cái gì?",
						"thai": "การชำระล้าง? คุณจะชำระล้างอะไร?",
						"hindi": "शुद्धि? तुम क्या शुद्ध करने वाले हो?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "진실을. 기억을. 이 세계의 모든 불완전한 것을.",
						"english": "The truth. Memories. All imperfect things in this world.",
						"japanese": "真実を。記憶を。この世界の不完全なものすべてを。",
						"chinese": "真相。记忆。以及这个世界上所有不完美的事物。",
						"french": "La vérité. Les souvenirs. Tout ce qui est imparfait dans ce monde.",
						"spanish": "La verdad. Los recuerdos. Todas las cosas imperfectas de este mundo.",
						"vietnamese": "Sự thật. Ký ức. Tất cả những thứ không hoàn hảo trên thế giới này.",
						"thai": "ความจริง ความทรงจำ ทุกสิ่งที่ไม่สมบูรณ์ในโลกนี้",
						"hindi": "सच को। यादों को। इस दुनिया की सभी अधूरी चीज़ों को।"
					},
					"emotion": "base",
					"speaker": "anuk",
					"type": "speech"
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "말도 안 돼… 그런 게 어딨어.",
						"english": "That's absurd... Such a thing doesn't exist.",
						"japanese": "馬鹿な…そんなもの、あるわけない。",
						"chinese": "胡说…哪有那种东西。",
						"french": "C'est absurde... Ça n'existe pas.",
						"spanish": "¡Qué tontería...! Eso no existe.",
						"vietnamese": "Vô lý… Làm gì có chuyện đó.",
						"thai": "ไร้สาระ... ไม่มีทางเป็นไปได้",
						"hindi": "बकवास… ऐसा कुछ नहीं होता।"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "anuk",
					"emotion": "base",
					"content": {
						"korean": "계약은 지켜져야 한다. 그것이 어떤 대가를 치르든.",
						"english": "The contract must be honored. No matter the cost.",
						"japanese": "契約は守られなければならない。それがどんな代償を伴おうとも。",
						"chinese": "契约必须遵守。无论付出何种代价。",
						"french": "Le contrat doit être respecté. Quel qu'en soit le prix.",
						"spanish": "El contrato debe cumplirse. Cueste lo que cueste.",
						"vietnamese": "Hợp đồng phải được tuân thủ. Bất kể cái giá phải trả là gì.",
						"thai": "สัญญาต้องได้รับการรักษา ไม่ว่าจะต้องแลกมาด้วยอะไรก็ตาม",
						"hindi": "अनुबंध का सम्मान करना होगा। चाहे कोई भी कीमत चुकानी पड़े।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "anuk"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이곳의 유물들은 전부 재배치되었다. 과거는… 지워졌지.",
						"english": "The artifacts here have all been rearranged. The past... has been erased.",
						"japanese": "ここの遺物はすべて再配置された。過去は…消されたのだ。",
						"chinese": "这里的遗物都重新布置了。过去…已经被抹去。",
						"french": "Les artefacts ici ont tous été réorganisés. Le passé... a été effacé.",
						"spanish": "Todos los artefactos de aquí han sido reubicados. El pasado... ha sido borrado.",
						"vietnamese": "Tất cả các di vật ở đây đã được sắp xếp lại. Quá khứ… đã bị xóa bỏ.",
						"thai": "วัตถุโบราณที่นี่ถูกจัดเรียงใหม่ทั้งหมด อดีต…ถูกลบไปแล้ว",
						"hindi": "यहां की सभी कलाकृतियां फिर से व्यवस्थित कर दी गई हैं। अतीत… मिटा दिया गया है।"
					},
					"type": "speech",
					"speaker": "anuk"
				},
				{
					"content": {
						"korean": "그럼 우리가 찾던 것도 조작된 거야?",
						"english": "So, what we were looking for was also manipulated?",
						"japanese": "じゃあ、私たちが探していたものも操作されていたのか？",
						"chinese": "那么，我们寻找的东西也是被篡改过的？",
						"french": "Alors, ce que nous cherchions a aussi été manipulé ?",
						"spanish": "Entonces, ¿lo que buscábamos también fue manipulado?",
						"vietnamese": "Vậy thứ chúng ta đang tìm kiếm cũng bị thao túng ư?",
						"thai": "ถ้าอย่างนั้น สิ่งที่เราตามหาก็ถูกบิดเบือนด้วยเหรอ?",
						"hindi": "तो, जो हम ढूंढ रहे थे, वह भी हेरफेर किया गया था?"
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "시스템은 필요에 따라 진실을 다시 쓴다.",
						"english": "The system rewrites the truth as needed.",
						"japanese": "システムは必要に応じて真実を書き換える。",
						"chinese": "系统会根据需要重写真相。",
						"french": "Le système réécrit la vérité selon ses besoins.",
						"spanish": "El sistema reescribe la verdad según sea necesario.",
						"vietnamese": "Hệ thống viết lại sự thật khi cần.",
						"thai": "ระบบจะเขียนความจริงใหม่ตามความจำเป็น",
						"hindi": "सिस्टम ज़रूरत के हिसाब से सच को फिर से लिखता है।"
					},
					"emotion": "base",
					"speaker": "anuk",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "전부 거짓이었다니….",
						"english": "So it was all a lie...",
						"japanese": "全てが嘘だったとは…。",
						"chinese": "原来一切都是谎言…。",
						"french": "Tout n'était que mensonge...",
						"spanish": "Así que todo era mentira...",
						"vietnamese": "Tất cả đều là giả dối…",
						"thai": "ทั้งหมดเป็นเรื่องโกหกงั้นเหรอ…",
						"hindi": "तो यह सब झूठ था..."
					},
					"type": "speech",
					"speaker": "character_2"
				},
				{
					"type": "speech",
					"speaker": "anuk",
					"emotion": "base",
					"content": {
						"korean": "거짓이 아니지. 다만… 다르게 배열되었을 뿐.",
						"english": "Not a lie. Merely... rearranged differently.",
						"japanese": "嘘ではない。ただ…異なるように配置されただけだ。",
						"chinese": "这不是谎言。只是…以不同的方式重新排列了。",
						"french": "Pas un mensonge. Simplement... réorganisé différemment.",
						"spanish": "No es una mentira. Simplemente... reorganizado de otra manera.",
						"vietnamese": "Không phải là dối trá. Chỉ là… được sắp xếp lại khác đi mà thôi.",
						"thai": "ไม่ใช่เรื่องโกหก แค่…ถูกจัดเรียงแตกต่างออกไปเท่านั้น",
						"hindi": "झूठ नहीं। बस… अलग तरह से व्यवस्थित किया गया है।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "anuk",
					"action": "enter"
				},
				{
					"speaker": "anuk",
					"type": "speech",
					"content": {
						"korean": "시간이 얼마 남지 않았다. 진동이 최고조에 달했어.",
						"english": "Not much time left. The vibration has reached its peak.",
						"japanese": "時間があまり残されていない。振動が最高潮に達した。",
						"chinese": "所剩时间不多了。震动已达到顶峰。",
						"french": "Il ne reste plus beaucoup de temps. La vibration a atteint son paroxysme.",
						"spanish": "No queda mucho tiempo. La vibración ha alcanzado su punto máximo.",
						"vietnamese": "Không còn nhiều thời gian. Sự rung động đã đạt đến đỉnh điểm.",
						"thai": "เหลือเวลาไม่มากแล้ว การสั่นสะเทือนถึงจุดสูงสุดแล้ว",
						"hindi": "ज़्यादा समय नहीं बचा। कंपन अपने चरम पर पहुंच गया है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "그래서 뭘 해야 하는데?",
						"english": "So, what should I do?",
						"japanese": "で、何をすればいいんだ？",
						"chinese": "那我们该做什么？",
						"french": "Alors, que dois-je faire ?",
						"spanish": "¿Entonces qué debo hacer?",
						"vietnamese": "Vậy chúng ta phải làm gì?",
						"thai": "แล้วเราควรทำยังไง?",
						"hindi": "तो, हमें क्या करना चाहिए?"
					},
					"emotion": "base"
				},
				{
					"speaker": "anuk",
					"type": "speech",
					"content": {
						"korean": "시스템의 심장부를 찾아야 한다. 그곳에 모든 것이 시작된 원인이 있다.",
						"english": "We need to find the heart of the system. The origin of everything is there.",
						"japanese": "システムの心臓部を見つけなければならない。すべての始まりの原因がそこにある。",
						"chinese": "我们必须找到系统的核心。一切的根源都在那里。",
						"french": "Nous devons trouver le cœur du système. L'origine de tout se trouve là.",
						"spanish": "Debemos encontrar el corazón del sistema. El origen de todo está allí.",
						"vietnamese": "Chúng ta phải tìm trái tim của hệ thống. Nơi mọi thứ bắt đầu đều ở đó.",
						"thai": "เราต้องค้นหาใจกลางของระบบ ต้นกำเนิดของทุกสิ่งอยู่ที่นั่น",
						"hindi": "हमें सिस्टम का दिल खोजना होगा। सब कुछ की शुरुआत का कारण वहीं है।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "되돌아갈 수 없다는 거야?",
						"english": "You mean we can't go back?",
						"japanese": "戻れないってことか？",
						"chinese": "你是说回不去了吗？",
						"french": "Tu veux dire qu'on ne peut pas revenir en arrière ?",
						"spanish": "¿Quieres decir que no podemos regresar?",
						"vietnamese": "Ý anh là không thể quay lại sao?",
						"thai": "หมายความว่าเรากลับไปไม่ได้แล้วเหรอ?",
						"hindi": "क्या तुम कह रहे हो कि हम वापस नहीं जा सकते?"
					},
					"emotion": "sad",
					"speaker": "character_3",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "애초에 돌아갈 곳은 없었다. 이 세계는… 늘 이랬으니.",
						"english": "There was no place to return to in the first place. This world... has always been like this.",
						"japanese": "そもそも、戻る場所などなかった。この世界は…ずっとこうだったから。",
						"chinese": "从一开始就没有可以回去的地方。这个世界…一直都是这样。",
						"french": "Il n'y avait pas d'endroit où retourner dès le départ. Ce monde... a toujours été ainsi.",
						"spanish": "En primer lugar, no había ningún lugar al que regresar. Este mundo... siempre ha sido así.",
						"vietnamese": "Ngay từ đầu đã không có nơi nào để trở về. Thế giới này... vẫn luôn như vậy.",
						"thai": "ตั้งแต่แรกก็ไม่มีที่ให้กลับอยู่แล้ว โลกนี้...มันเป็นแบบนี้มาตลอด",
						"hindi": "शुरू से ही लौटने की कोई जगह नहीं थी। यह दुनिया... हमेशा ऐसी ही रही है।"
					},
					"type": "speech",
					"speaker": "anuk"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "진동은 모든 것을 집어삼켰다.",
						"english": "The tremors swallowed everything.",
						"japanese": "振動はすべてを飲み込んだ。",
						"chinese": "震动吞噬了一切。",
						"french": "Les vibrations ont tout englouti.",
						"spanish": "Los temblores lo devoraron todo.",
						"vietnamese": "Chấn động đã nuốt chửng mọi thứ.",
						"thai": "การสั่นสะเทือนกลืนกินทุกสิ่ง",
						"hindi": "कंपनों ने सब कुछ निगल लिया।"
					},
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "하찮은 저항이군. 너희의 슬픔마저 시스템의 연료가 될 뿐.",
						"english": "A pathetic resistance. Even your sorrow will only become fuel for the system.",
						"japanese": "つまらない抵抗だな。お前たちの悲しみまでもが、システムの燃料になるだけだ。",
						"chinese": "微不足道的抵抗。就连你们的悲伤，也只会成为系统的燃料。",
						"french": "Une résistance pathétique. Même votre chagrin ne fera que devenir le carburant du système.",
						"spanish": "Una resistencia patética. Incluso vuestra tristeza solo servirá como combustible para el sistema.",
						"vietnamese": "Sự kháng cự yếu ớt. Ngay cả nỗi buồn của các ngươi cũng chỉ trở thành nhiên liệu cho hệ thống.",
						"thai": "การต่อต้านที่ไร้ค่า แม้แต่ความเศร้าของเจ้าก็จะกลายเป็นเชื้อเพลิงของระบบเท่านั้น",
						"hindi": "एक दयनीय प्रतिरोध। तुम्हारा दुख भी केवल प्रणाली का ईंधन बनेगा।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "우리는… 포기하지 않아.",
						"english": "We… won't give up.",
						"japanese": "私たちは…諦めない。",
						"chinese": "我们…不会放弃。",
						"french": "Nous… n'abandonnerons pas.",
						"spanish": "Nosotros… no nos rendiremos.",
						"vietnamese": "Chúng tôi… sẽ không bỏ cuộc.",
						"thai": "เรา… ไม่ยอมแพ้",
						"hindi": "हम… हार नहीं मानेंगे।"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"type": "direction",
					"action": "enter",
					"speaker": "anuk"
				},
				{
					"speaker": "anuk",
					"type": "speech",
					"content": {
						"korean": "이것 또한 계약의 일부인가. 대가는… 언제나 따른다.",
						"english": "Is this also part of the contract? The price… always follows.",
						"japanese": "これもまた契約の一部なのか。代償は…常に伴う。",
						"chinese": "这也是契约的一部分吗？代价…总是随之而来。",
						"french": "Est-ce aussi une partie du contrat ? Le prix… vient toujours après.",
						"spanish": "¿Es esto también parte del contrato? El precio… siempre sigue.",
						"vietnamese": "Đây cũng là một phần của hợp đồng sao? Cái giá… luôn phải trả.",
						"thai": "นี่ก็เป็นส่วนหนึ่งของสัญญาเช่นกันหรือ? ราคา… ย่อมตามมาเสมอ",
						"hindi": "क्या यह भी अनुबंध का हिस्सा है? कीमत… हमेशा आती है।"
					},
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "거대한 시스템의 일부가 무너졌다. 진동이 멎었다.",
						"english": "A part of the grand system crumbled. The tremors ceased.",
						"japanese": "巨大なシステムの一部が崩壊した。振動が止んだ。",
						"chinese": "庞大系统的一部分崩塌了。震动停止了。",
						"french": "Une partie du grand système s'est effondrée. Les vibrations ont cessé.",
						"spanish": "Una parte del vasto sistema se derrumbó. Los temblores cesaron.",
						"vietnamese": "Một phần của hệ thống khổng lồ đã sụp đổ. Chấn động đã dừng lại.",
						"thai": "ส่วนหนึ่งของระบบอันยิ่งใหญ่พังทลายลง การสั่นสะเทือนหยุดลงแล้ว",
						"hindi": "विशाल प्रणाली का एक हिस्सा ढह गया। कंपन रुक गया।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "크아악… 겨우… 이 정도로… 시스템은… 영원하다… {random_boss}는… 하나의 조각일 뿐…!",
						"english": "Gah… This little… The system… is eternal… {random_boss} is… merely a piece…!",
						"japanese": "くあああ…たかが…この程度で…システムは…永遠だ…{random_boss}は…ただの破片に過ぎん…！",
						"chinese": "呃啊…就凭…这点程度…系统是…永恒的…{random_boss}只是…一个碎片而已…！",
						"french": "Arggh… Si peu… Le système… est éternel… {random_boss} n'est… qu'un fragment… !",
						"spanish": "¡Aaahh… Solo… con esto… El sistema… es eterno… {random_boss} es… solo una pieza…!",
						"vietnamese": "Khặc khặc… Chỉ… chừng này… Hệ thống… là vĩnh cửu… {random_boss} chỉ là… một mảnh ghép thôi…!",
						"thai": "อ๊ากกก… แค่… แค่นี้… ระบบ… เป็นนิรันดร์… {random_boss} เป็น… แค่ชิ้นส่วนหนึ่ง…!",
						"hindi": "आह… बस… इतना ही… सिस्टम… शाश्वत है… {random_boss} बस… एक टुकड़ा है…!"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "시스템… 아직 끝나지 않았어.",
						"english": "The system… It's not over yet.",
						"japanese": "システム…まだ終わっていない。",
						"chinese": "系统…还没结束。",
						"french": "Le système… Ce n'est pas encore fini.",
						"spanish": "El sistema… Aún no ha terminado.",
						"vietnamese": "Hệ thống… vẫn chưa kết thúc.",
						"thai": "ระบบ… ยังไม่จบ",
						"hindi": "सिस्टम… अभी खत्म नहीं हुआ है।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "anuk",
					"action": "enter"
				},
				{
					"content": {
						"korean": "하나의 심장이 멈췄을 뿐. 거대한 망각은 여전하다.",
						"english": "Only one heart has stopped. The grand oblivion remains.",
						"japanese": "一つの心臓が止まっただけだ。巨大な忘却は依然として存在する。",
						"chinese": "只是一个心脏停止了跳动。巨大的遗忘依然存在。",
						"french": "Un seul cœur s'est arrêté. Le grand oubli persiste.",
						"spanish": "Solo un corazón se ha detenido. El gran olvido perdura.",
						"vietnamese": "Chỉ một trái tim đã ngừng đập. Sự quên lãng vĩ đại vẫn còn.",
						"thai": "เพียงหนึ่งหัวใจหยุดเต้น ความลืมเลือนอันยิ่งใหญ่ยังคงอยู่",
						"hindi": "केवल एक दिल रुका है। महान विस्मृति अब भी बनी हुई है।"
					},
					"emotion": "base",
					"speaker": "anuk",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그러나 멈춰버린 진동은, 새로운 균열의 시작을 알렸다.",
						"english": "However, the ceased tremors announced the beginning of a new crack.",
						"japanese": "しかし、止まった振動は、新たな亀裂の始まりを告げた。",
						"chinese": "然而，停止的震动，预示着新裂缝的开始。",
						"french": "Cependant, les vibrations arrêtées annonçaient le début d'une nouvelle fissure.",
						"spanish": "Sin embargo, los temblores detenidos anunciaron el comienzo de una nueva grieta.",
						"vietnamese": "Tuy nhiên, chấn động đã ngừng lại, báo hiệu sự khởi đầu của một vết nứt mới.",
						"thai": "อย่างไรก็ตาม การสั่นสะเทือนที่หยุดลงได้ประกาศถึงจุดเริ่มต้นของรอยแยกใหม่",
						"hindi": "हालांकि, रुके हुए कंपनों ने एक नई दरार की शुरुआत की घोषणा की।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "시스템의 심장부. 그곳에는 거대한 그림자가 기다리고 있었다.",
						"english": "The heart of the system. A colossal shadow awaited there.",
						"japanese": "システムの心臓部。そこには巨大な影が待ち構えていた。",
						"chinese": "系统的核心。一个巨大的阴影在那里等待着。",
						"french": "Le cœur du système. Une ombre colossale y attendait.",
						"spanish": "El corazón del sistema. Una sombra colosal esperaba allí.",
						"vietnamese": "Trái tim của hệ thống. Một bóng tối khổng lồ đang chờ đợi ở đó.",
						"thai": "ใจกลางของระบบ เงาขนาดมหึมารออยู่ที่นั่น",
						"hindi": "सिस्टम का दिल। वहां एक विशाल छाया इंतजार कर रही थी।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "침입자들. 여기까지 올 줄은 몰랐군.",
						"english": "Intruders. I didn't expect you to make it this far.",
						"japanese": "侵入者たち。ここまで来るとはな。",
						"chinese": "入侵者。没想到你们能走到这里。",
						"french": "Intrus. Je ne m'attendais pas à ce que vous arriviez jusqu'ici.",
						"spanish": "Intrusos. No esperaba que llegaran tan lejos.",
						"vietnamese": "Những kẻ xâm nhập. Ta không ngờ các ngươi lại đến được đây.",
						"thai": "ผู้บุกรุก ไม่คิดว่าพวกเจ้าจะมาได้ถึงขนาดนี้",
						"hindi": "घुसपैठिए। मुझे उम्मीद नहीं थी कि तुम इतनी दूर आ पाओगे।"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "허나, 여기서 끝이다. 시스템의 질서는 완벽하다.",
						"english": "However, this is where it ends. The system's order is perfect.",
						"japanese": "だが、ここまでだ。システムの秩序は完璧なのだから。",
						"chinese": "然而，到此为止。系统的秩序是完美的。",
						"french": "Cependant, c'est ici que ça se termine. L'ordre du système est parfait.",
						"spanish": "Sin embargo, aquí termina. El orden del sistema es perfecto.",
						"vietnamese": "Tuy nhiên, mọi chuyện kết thúc tại đây. Trật tự của hệ thống là hoàn hảo.",
						"thai": "แต่ก็จบลงแค่นี้แหละ ระเบียบของระบบนั้นสมบูรณ์แบบ",
						"hindi": "हालांकि, यहीं खत्म होता है। सिस्टम की व्यवस्था परिपूर्ण है।"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "네가 이 모든 걸 조작한 거야?",
						"english": "Did you manipulate all of this?",
						"japanese": "お前がこの全てを操作したのか？",
						"chinese": "是你操纵了这一切吗？",
						"french": "Est-ce toi qui as manipulé tout ça ?",
						"spanish": "¿Tú manipulaste todo esto?",
						"vietnamese": "Anh đã thao túng tất cả những thứ này sao?",
						"thai": "แกเป็นคนบงการเรื่องทั้งหมดนี้เหรอ?",
						"hindi": "क्या तुमने यह सब हेरफेर किया है?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "조작? 이건 유지다. 이 세계를 위한 유일한 방법.",
						"english": "Manipulation? This is preservation. The only way for this world.",
						"japanese": "操作だと？これは維持だ。この世界のための唯一の方法。",
						"chinese": "操纵？这是维护。为了这个世界，这是唯一的方法。",
						"french": "Manipulation ? C'est de la préservation. Le seul moyen pour ce monde.",
						"spanish": "¿Manipulación? Esto es preservación. El único camino para este mundo.",
						"vietnamese": "Thao túng? Đây là sự duy trì. Cách duy nhất cho thế giới này.",
						"thai": "บงการเหรอ? นี่คือการรักษาไว้ต่างหาก วิธีเดียวเพื่อโลกใบนี้",
						"hindi": "हेरफेर? यह रखरखाव है। इस दुनिया के लिए एकमात्र तरीका।"
					},
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"type": "direction",
					"action": "enter",
					"speaker": "anuk"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "시스템의 율법은 지켜져야 하지만, 너의 방식은 왜곡되었다.",
						"english": "The laws of the system must be upheld, but your methods are distorted.",
						"japanese": "システムの律法は守られるべきだが、お前のやり方は歪んでいる。",
						"chinese": "系统的法则必须遵守，但你的方式被扭曲了。",
						"french": "Les lois du système doivent être respectées, mais tes méthodes sont déformées.",
						"spanish": "Las leyes del sistema deben ser respetadas, pero tus métodos están distorsionados.",
						"vietnamese": "Luật lệ của hệ thống phải được tuân thủ, nhưng cách làm của ngươi đã bị bóp méo.",
						"thai": "กฎของระบบต้องถูกรักษาไว้ แต่วิธีของเจ้ามันบิดเบือน",
						"hindi": "सिस्टम के नियम का पालन किया जाना चाहिए, लेकिन तुम्हारे तरीके विकृत हैं।"
					},
					"type": "speech",
					"speaker": "anuk"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "흥. 네 계약도 결국 내 손아귀에 있다.",
						"english": "Hmph. Your contract is within my grasp.",
						"japanese": "ふん。お前の契約も結局は私の手の内にある。",
						"chinese": "哼。你的契约终究也在我手中。",
						"french": "Hmph. Ton contrat est finalement entre mes mains.",
						"spanish": "Hmph. Tu contrato también está en mis manos al final.",
						"vietnamese": "Hừm. Cuối cùng thì hợp đồng của ngươi cũng nằm trong tay ta thôi.",
						"thai": "หึม สัญญาของเจ้าก็อยู่ในกำมือของข้าในที่สุด",
						"hindi": "हम्म। तुम्हारा अनुबंध भी अंततः मेरी मुट्ठी में है।"
					},
					"emotion": "base"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"끝없이 펼쳐진 설원, 그 심장부에서 기묘한 박동이 울렸다.",
			"자연인 줄 알았던 모든 현상이, 거대한 시스템의 설계였다.",
			"시간은 멈추지 않는다. 시스템의 '정화'까지.",
			"얼어붙은 진실은, 과연 이 세계를 녹일 수 있을까?"
		],
		"english": [
			"In the endless snowy plains, a strange pulse echoed from its heart.",
			"All phenomena, once thought natural, were designs of a colossal system.",
			"Time does not stop. Not until the system's 'purge'.",
			"Can the frozen truth truly melt this world?"
		],
		"japanese": [
			"果てしなく広がる雪原、その心臓部から奇妙な鼓動が響いた。",
			"自然だと思っていたあらゆる現象は、巨大なシステムの設計だった。",
			"時は止まらない。システムの「浄化」まで。",
			"凍てついた真実は、果たしてこの世界を溶かすことができるだろうか？"
		],
		"chinese": [
			"无尽的雪原深处，传来一阵奇妙的搏动。",
			"所有曾被认为是自然现象的，竟是巨大系统的设计。",
			"时间不会停止。直到系统的“净化”。",
			"冰封的真相，果真能融化这个世界吗？"
		],
		"french": [
			"Dans l'immensité des plaines enneigées, un étrange battement résonna depuis son cœur.",
			"Tous les phénomènes, autrefois perçus comme naturels, étaient la conception d'un système colossal.",
			"Le temps ne s'arrête pas. Pas avant la 'purge' du système.",
			"La vérité gelée pourra-t-elle vraiment faire fondre ce monde ?"
		],
		"spanish": [
			"En las llanuras nevadas interminables, un extraño pulso resonó desde su corazón.",
			"Todos los fenómenos, antes considerados naturales, eran diseños de un sistema colosal.",
			"El tiempo no se detiene. No hasta la 'purga' del sistema.",
			"¿Podrá la verdad congelada derretir este mundo?"
		],
		"vietnamese": [
			"Trong đồng tuyết vô tận, một nhịp đập kỳ lạ vang lên từ tận sâu trong lòng.",
			"Mọi hiện tượng, từng được cho là tự nhiên, đều là thiết kế của một hệ thống khổng lồ.",
			"Thời gian không ngừng lại. Cho đến khi hệ thống 'thanh trừng'.",
			"Liệu sự thật đóng băng có thực sự làm tan chảy thế giới này?"
		],
		"thai": [
			"จากใจกลางทุ่งหิมะอันกว้างใหญ่ไร้ที่สิ้นสุด เสียงเต้นแปลกประหลาดได้ดังก้องขึ้น",
			"ทุกปรากฏการณ์ที่เคยคิดว่าเป็นธรรมชาติ ล้วนเป็นการออกแบบของระบบอันยิ่งใหญ่",
			"กาลเวลาไม่เคยหยุดนิ่ง ไม่ใช่จนกว่าจะถึง 'การชำระล้าง' ของระบบ",
			"ความจริงที่เยือกแข็งจะสามารถละลายโลกใบนี้ได้จริงหรือ?"
		],
		"hindi": [
			"अंतहीन बर्फ के मैदानों में, उसके हृदय से एक अजीब धड़कन गूंजी।",
			"सभी घटनाएँ, जिन्हें कभी प्राकृतिक माना जाता था, एक विशाल प्रणाली का डिज़ाइन थीं।",
			"समय नहीं रुकता। सिस्टम की 'शुद्धि' तक नहीं।",
			"क्या जमी हुई सच्चाई वास्तव में इस दुनिया को पिघला सकती है?"
		]
	}
} as const;
