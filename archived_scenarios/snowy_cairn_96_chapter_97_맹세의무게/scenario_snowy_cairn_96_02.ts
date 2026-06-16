export const scenario_snowy_cairn_96_02 = {
	"scenario_id": "snowy_cairn_96_02",
	"order": 2,
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
	"prologue": {
		"korean": [
			"맹세의 땅, 돌무덤 앞에 섰다.",
			"미세하게 들뜨는 돌 조각들.",
			"심판자가 깨어나고 있었다.",
			"약속의 무게가, 곧 증명될 시간."
		],
		"english": [
			"Stood before the Stone Tomb, land of vows.",
			"Stone fragments subtly stirring.",
			"The Arbiter was awakening.",
			"The weight of the promise, soon to be proven."
		],
		"japanese": [
			"誓いの地、石の墓の前に立った。",
			"かすかに浮き上がる石の破片。",
			"審判者が目覚めつつあった。",
			"約束の重みが、間もなく証明される時。"
		],
		"chinese": [
			"站在誓约之地，石墓之前。",
			"石块微微浮动。",
			"审判者正在苏醒。",
			"承诺的份量，即将被证明的时刻。"
		],
		"french": [
			"Devant le Tombeau de Pierre, terre des serments.",
			"Des fragments de pierre s'agitent subtilement.",
			"Le Juge s'éveillait.",
			"Le poids de la promesse, bientôt prouvé."
		],
		"spanish": [
			"Ante la Tumba de Piedra, tierra de promesas.",
			"Fragmentos de piedra se agitan sutilmente.",
			"El Juez estaba despertando.",
			"El peso de la promesa, pronto a ser probado."
		],
		"vietnamese": [
			"Đứng trước Mộ Đá, vùng đất của lời thề.",
			"Những mảnh đá nhỏ đang rung chuyển nhẹ.",
			"Kẻ Phán Xét đang thức tỉnh.",
			"Sức nặng của lời hứa, thời khắc chứng minh đã gần kề."
		],
		"thai": [
			"ยืนอยู่หน้าสุสานหิน ดินแดนแห่งคำสาบาน",
			"เศษหินลอยขึ้นเล็กน้อย",
			"ผู้พิพากษากำลังตื่นขึ้น",
			"น้ำหนักของคำสัญญา กำลังจะถูกพิสูจน์"
		],
		"hindi": [
			"प्रतिज्ञा की भूमि, पत्थर की समाधि के सामने खड़ा था।",
			"पत्थर के टुकड़े सूक्ष्म रूप से हिल रहे थे।",
			"न्यायकर्ता जागृत हो रहा था।",
			"वादे का वजन, जल्द ही साबित होने का समय।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "거대한 돌무덤이 둔탁하게 울렸다. 미약한 진동이 발끝에서 느껴진다.",
						"english": "The colossal stone tomb rumbled dully. A faint tremor resonated from my feet.",
						"japanese": "巨大な石の墓が鈍く鳴り響いた。足元にかすかな振動を感じる。",
						"chinese": "巨大的石墓发出沉闷的轰鸣。微弱的震动从脚尖传来。",
						"french": "L'immense tombeau de pierre résonna sourdement. Une faible vibration monta de mes pieds.",
						"spanish": "La colosal tumba de piedra retumbó sordamente. Una leve vibración se sintió en la punta de mis pies.",
						"vietnamese": "Ngôi mộ đá khổng lồ rung lên ầm ĩ. Một chấn động nhẹ lan từ ngón chân.",
						"thai": "สุสานหินขนาดยักษ์ส่งเสียงดังก้อง ความสั่นสะเทือนเล็กน้อยรู้สึกได้ที่ปลายเท้า",
						"hindi": "विशाल पत्थर की समाधि धीमी गति से गड़गड़ाई। पैरों में हल्की सी कंपन महसूस हुई।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…뭐야, 이 소리.",
						"english": "...What's that sound?",
						"japanese": "…なんだ、この音は。",
						"chinese": "……这是什么声音？",
						"french": "...Qu'est-ce que ce bruit ?",
						"spanish": "¿Qué es ese sonido?",
						"vietnamese": "...Gì vậy, tiếng gì thế?",
						"thai": "...เสียงอะไรน่ะ",
						"hindi": "...यह क्या आवाज़ है।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "anuk",
					"type": "direction",
					"spot": [
						4,
						3
					]
				},
				{
					"content": {
						"korean": "약속의 수호자 아누크다. 너희의 맹세가, 이 돌을 깨우는군.",
						"english": "I am Anouk, Guardian of the Promise. Your vows awaken this stone.",
						"japanese": "約束の守護者、アヌークだ。お前たちの誓いが、この石を目覚めさせる。",
						"chinese": "我是誓约的守护者阿努克。是你们的誓言唤醒了这块石头。",
						"french": "Je suis Anouk, Gardien de la Promesse. Vos serments réveillent cette pierre.",
						"spanish": "Soy Anouk, Guardiana de la Promesa. Vuestros juramentos despiertan esta piedra.",
						"vietnamese": "Ta là Anouk, Người bảo vệ Lời hứa. Lời thề của các ngươi đang đánh thức tảng đá này.",
						"thai": "ข้าคืออนุก ผู้พิทักษ์คำสัญญา คำสาบานของพวกเจ้าปลุกก้อนหินนี้ให้ตื่นขึ้น",
						"hindi": "मैं अनूक हूँ, प्रतिज्ञा का रक्षक। तुम्हारी शपथ इस पत्थर को जगाती है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "anuk"
				},
				{
					"content": {
						"korean": "맹세라니?",
						"english": "Vows?",
						"japanese": "誓いだと？",
						"chinese": "誓言？",
						"french": "Des serments ?",
						"spanish": "¿Juramentos?",
						"vietnamese": "Lời thề?",
						"thai": "คำสาบานอะไร?",
						"hindi": "शपथें?"
					},
					"emotion": "base",
					"speaker": "character_1",
					"type": "speech"
				},
				{
					"content": {
						"korean": "진심이 아니면 깨진다. 너희의 모든 것이.",
						"english": "If not true, it will shatter. All of you.",
						"japanese": "真心でなければ砕ける。お前たちの全てが。",
						"chinese": "若非真心，便会破碎。你们的一切。",
						"french": "Si ce n'est pas sincère, cela se brisera. Tout de vous.",
						"spanish": "Si no es sincero, se romperá. Todo lo vuestro.",
						"vietnamese": "Nếu không thật lòng, nó sẽ vỡ vụn. Tất cả của các ngươi.",
						"thai": "ถ้าไม่จริงใจ มันจะแตกสลาย ทุกสิ่งของพวกเจ้า",
						"hindi": "यदि सच्चा नहीं, तो टूट जाएगा। तुम्हारा सब कुछ।"
					},
					"type": "speech",
					"speaker": "anuk",
					"emotion": "sad"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "anuk",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "이 돌무덤은 거짓을 용납치 않는다.",
						"english": "This stone tomb tolerates no lies.",
						"japanese": "この石の墓は嘘を許さない。",
						"chinese": "这座石墓不容许谎言。",
						"french": "Ce tombeau de pierre ne tolère aucun mensonge.",
						"spanish": "Esta tumba de piedra no tolera mentiras.",
						"vietnamese": "Ngôi mộ đá này không dung thứ cho lời nói dối.",
						"thai": "สุสานหินนี้ไม่ยอมรับการโกหก",
						"hindi": "यह पत्थर की समाधि झूठ को बर्दाश्त नहीं करती।"
					},
					"emotion": "base",
					"speaker": "anuk",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거짓…",
						"english": "A lie...",
						"japanese": "偽り…",
						"chinese": "谎言…",
						"french": "Mensonge...",
						"spanish": "Mentira...",
						"vietnamese": "Dối trá...",
						"thai": "โกหก...",
						"hindi": "झूठ..."
					}
				},
				{
					"content": {
						"korean": "너희가 나눈 약속. 그 진실을 가늠할 심판자가 곧 나타날 거다.",
						"english": "The promise you made. A judge will soon appear to weigh its truth.",
						"japanese": "お前たちが交わした約束。その真偽を量る審判者が間もなく現れるだろう。",
						"chinese": "你们所做的承诺。一位审判者将很快出现，衡量其真实性。",
						"french": "La promesse que vous avez faite. Un juge apparaîtra bientôt pour en évaluer la vérité.",
						"spanish": "La promesa que hicisteis. Un juez aparecerá pronto para sopesar su verdad.",
						"vietnamese": "Lời hứa các ngươi đã trao. Một phán quan sẽ sớm xuất hiện để cân đo sự thật đó.",
						"thai": "สัญญาที่พวกเจ้าให้ไว้ ผู้พิพากษาจะมาในไม่ช้าเพื่อตัดสินความจริง",
						"hindi": "तुमने जो वादा किया था। एक निर्णायक जल्द ही उसकी सच्चाई को तौलने के लिए प्रकट होगा।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "anuk"
				},
				{
					"emotion": "base",
					"speaker": "character_2",
					"type": "speech",
					"content": {
						"korean": "누가 심판한다는 거야?",
						"english": "Who will judge?",
						"japanese": "誰が審判するんだ？",
						"chinese": "谁来审判？",
						"french": "Qui jugera ?",
						"spanish": "¿Quién juzgará?",
						"vietnamese": "Ai sẽ phán xét?",
						"thai": "ใครจะตัดสิน?",
						"hindi": "कौन न्याय करेगा?"
					}
				},
				{
					"content": {
						"korean": "너희 마음속에 숨겨진 가장 어두운 그림자까지.",
						"english": "Even the darkest shadows hidden in your hearts.",
						"japanese": "お前たちの心に隠された、最も暗い影までもが。",
						"chinese": "甚至你们心中隐藏的最黑暗的阴影。",
						"french": "Même les ombres les plus sombres cachées dans vos cœurs.",
						"spanish": "Incluso las sombras más oscuras escondidas en vuestros corazones.",
						"vietnamese": "Ngay cả những bóng tối sâu kín nhất trong trái tim các ngươi.",
						"thai": "แม้แต่เงามืดมิดที่สุดที่ซ่อนอยู่ในใจของพวกเจ้า",
						"hindi": "तुम्हारे दिलों में छिपी सबसे काली छाया भी।"
					},
					"speaker": "anuk",
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"content": {
						"korean": "돌 조각들이 얼음 결정처럼 미세하게 들뜨기 시작했다.",
						"english": "Stone fragments began to subtly float, like ice crystals.",
						"japanese": "石の破片が氷の結晶のように、微かに浮かび上がり始めた。",
						"chinese": "石头碎片开始像冰晶一样微微浮起。",
						"french": "Des fragments de pierre commencèrent à flotter subtilement, comme des cristaux de glace.",
						"spanish": "Fragmentos de piedra comenzaron a elevarse sutilmente, como cristales de hielo.",
						"vietnamese": "Các mảnh đá bắt đầu nổi lên một cách tinh vi, như những tinh thể băng.",
						"thai": "ชิ้นส่วนหินเริ่มลอยขึ้นเล็กน้อยเหมือนเกล็ดน้ำแข็ง",
						"hindi": "पत्थर के टुकड़े बर्फ के क्रिस्टल की तरह सूक्ष्म रूप से उठने लगे।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"spot": [
						4,
						3
					],
					"speaker": "anuk",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "봐라. 너희의 심장이 뛰는 만큼, 심판자도 가까워지고 있어.",
						"english": "Behold. As your hearts race, so too does the judge draw near.",
						"japanese": "見ろ。お前たちの心臓が脈打つほどに、審判者も近づいている。",
						"chinese": "看吧。随着你们的心跳加速，审判者也越来越近了。",
						"french": "Regardez. Plus vos cœurs battent, plus le juge se rapproche.",
						"spanish": "Mirad. Cuanto más laten vuestros corazones, más se acerca el juez.",
						"vietnamese": "Hãy nhìn xem. Tim các ngươi đập bao nhiêu, phán quan càng đến gần bấy nhiêu.",
						"thai": "ดูสิ ยิ่งหัวใจของพวกเจ้าเต้นแรงเท่าไหร่ ผู้พิพากษาก็ยิ่งเข้าใกล้เท่านั้น",
						"hindi": "देखो। जितनी तेज़ी से तुम्हारे दिल धड़कते हैं, उतना ही न्यायकर्ता भी करीब आ रहा है।"
					},
					"type": "speech",
					"speaker": "anuk",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "심장이… 왜?",
						"english": "Heart... why?",
						"japanese": "心臓が…なぜ？",
						"chinese": "心脏…为什么？",
						"french": "Mon cœur... pourquoi ?",
						"spanish": "¿Mi corazón... por qué?",
						"vietnamese": "Tim... tại sao?",
						"thai": "หัวใจ…ทำไม?",
						"hindi": "दिल... क्यों?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "두려움, 욕망, 배신. 그 모든 불순물이 돌을 움직인다.",
						"english": "Fear, desire, betrayal. All these impurities move the stone.",
						"japanese": "恐れ、欲望、裏切り。その全ての不純物が石を動かす。",
						"chinese": "恐惧、欲望、背叛。所有这些杂质都在推动石头。",
						"french": "Peur, désir, trahison. Toutes ces impuretés meuvent la pierre.",
						"spanish": "Miedo, deseo, traición. Todas esas impurezas mueven la piedra.",
						"vietnamese": "Sợ hãi, dục vọng, phản bội. Tất cả những tạp chất đó khiến tảng đá dịch chuyển.",
						"thai": "ความกลัว, ความปรารถนา, การทรยศ. สิ่งเจือปนทั้งหมดนี้ทำให้หินเคลื่อนไหว",
						"hindi": "डर, इच्छा, विश्वासघात। ये सभी अशुद्धियाँ पत्थर को हिलाती हैं।"
					},
					"type": "speech",
					"speaker": "anuk",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "그런 게 아니야!",
						"english": "It's not like that!",
						"japanese": "そんなんじゃない！",
						"chinese": "不是那样的！",
						"french": "Ce n'est pas ça !",
						"spanish": "¡No es así!",
						"vietnamese": "Không phải vậy!",
						"thai": "ไม่ใช่แบบนั้น!",
						"hindi": "ऐसा नहीं है!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_3"
				},
				{
					"emotion": "base",
					"speaker": "anuk",
					"type": "speech",
					"content": {
						"korean": "스스로 증명해야 한다. 너희의 진심을.",
						"english": "You must prove it yourselves. Your sincerity.",
						"japanese": "自ら証明しなければならない。お前たちの真心を。",
						"chinese": "你们必须自己证明。你们的真心。",
						"french": "Vous devez le prouver vous-mêmes. Votre sincérité.",
						"spanish": "Debéis demostrarlo vosotros mismos. Vuestra sinceridad.",
						"vietnamese": "Các ngươi phải tự mình chứng minh. Sự chân thành của mình.",
						"thai": "พวกเจ้าต้องพิสูจน์ด้วยตัวเอง ความจริงใจของพวกเจ้า",
						"hindi": "तुम्हें खुद को साबित करना होगा। अपनी सच्ची नियत।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "돌무덤의 진동이 격렬해졌다. 후회해도 늦으리라.",
						"english": "The stone tomb's tremor intensified. It's too late for regrets.",
						"japanese": "石墓の振動が激しくなった。後悔してももう遅い。",
						"chinese": "石冢的震动愈发剧烈。后悔已晚。",
						"french": "Les vibrations de la tombe de pierre s'intensifient. Il est trop tard pour regretter.",
						"spanish": "La vibración de la tumba de piedra se intensificó. Es tarde para arrepentirse.",
						"vietnamese": "Chấn động của lăng mộ đá ngày càng dữ dội. Hối hận cũng đã muộn.",
						"thai": "แรงสั่นสะเทือนของสุสานหินรุนแรงขึ้นแล้ว สายเกินไปที่จะเสียใจ",
						"hindi": "पत्थर की कब्र का कंपन तेज हो गया है। अब पछताने से कुछ नहीं होगा।"
					}
				},
				{
					"type": "direction",
					"speaker": "anuk",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "anuk",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "돌아갈 길은 없다. 이젠 맹세의 무게를 감당할 시간이다.",
						"english": "There's no turning back. Now it's time to bear the weight of our vows.",
						"japanese": "もう後戻りはできない。今こそ誓いの重さを背負う時だ。",
						"chinese": "已无回头路。现在是承受誓言之重的时候了。",
						"french": "Il n'y a plus de retour en arrière. Il est temps de supporter le poids de nos serments.",
						"spanish": "No hay vuelta atrás. Ahora es el momento de soportar el peso de nuestros juramentos.",
						"vietnamese": "Không còn đường quay lại. Giờ là lúc gánh vác trọng trách của lời thề.",
						"thai": "ไม่มีทางย้อนกลับไปแล้ว ตอนนี้ได้เวลาแบกรับน้ำหนักของคำสาบาน",
						"hindi": "लौटने का कोई रास्ता नहीं है। अब अपनी प्रतिज्ञा का भार सहने का समय है।"
					}
				},
				{
					"content": {
						"korean": "우린 물러서지 않아.",
						"english": "We won't back down.",
						"japanese": "私たちは退かない。",
						"chinese": "我们绝不退缩。",
						"french": "Nous ne reculerons pas.",
						"spanish": "No retrocederemos.",
						"vietnamese": "Chúng ta sẽ không lùi bước.",
						"thai": "เราจะไม่ถอย",
						"hindi": "हम पीछे नहीं हटेंगे।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "anuk",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그래. 그 결의가 진실인지, 이 돌이 판단할 것이다.",
						"english": "Yes. This stone will judge if that resolve is true.",
						"japanese": "ああ。その決意が真実か、この石が判断するだろう。",
						"chinese": "是的。这块石头会判断那份决意是否真实。",
						"french": "Oui. Cette pierre jugera si cette détermination est vraie.",
						"spanish": "Sí. Esta piedra juzgará si esa resolución es verdadera.",
						"vietnamese": "Phải. Viên đá này sẽ phán xét xem quyết tâm đó có thật lòng không.",
						"thai": "ใช่ หินก้อนนี้จะตัดสินว่าความมุ่งมั่นนั้นจริงแท้หรือไม่",
						"hindi": "हाँ। यह पत्थर तय करेगा कि वह संकल्प सच्चा है या नहीं।"
					}
				},
				{
					"content": {
						"korean": "반드시 살아남을 거야.",
						"english": "We will definitely survive.",
						"japanese": "必ず生き残る。",
						"chinese": "我们一定会活下来。",
						"french": "Nous survivrons, coûte que coûte.",
						"spanish": "Sobreviviremos a toda costa.",
						"vietnamese": "Chúng ta nhất định sẽ sống sót.",
						"thai": "เราจะรอดให้ได้",
						"hindi": "हम निश्चित रूप से बचेंगे।"
					},
					"emotion": "happy",
					"speaker": "character_4",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "…하찮은 진실이군. 하지만… 거짓은 아니었다.",
						"english": "...A trivial truth. But... it wasn't a lie.",
						"japanese": "…取るに足らない真実だな。だが…嘘ではなかった。",
						"chinese": "……微不足道的真相。但是……并非谎言。",
						"french": "...Une vérité insignifiante. Mais... ce n'était pas un mensonge.",
						"spanish": "...Una verdad trivial. Pero... no era una mentira.",
						"vietnamese": "...Một sự thật tầm thường. Nhưng... nó không phải là dối trá.",
						"thai": "...ความจริงอันไร้สาระ แต่... มันไม่ใช่เรื่องโกหก",
						"hindi": "...एक तुच्छ सत्य। परन्तु... यह असत्य नहीं था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "happy",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "끝났어.",
						"english": "It's over.",
						"japanese": "終わった。",
						"chinese": "结束了。",
						"french": "C'est fini.",
						"spanish": "Se acabó.",
						"vietnamese": "Kết thúc rồi.",
						"thai": "จบแล้ว",
						"hindi": "यह खत्म हो गया।"
					}
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "들뜨던 돌 조각들이 서서히 가라앉았다. 그러나, 약속의 그림자는 여전히 남아있었다.",
						"english": "The floating stone fragments slowly settled. Yet, the shadow of the promise remained.",
						"japanese": "浮遊していた石の破片がゆっくりと沈んでいった。しかし、約束の影はまだ残っていた。",
						"chinese": "漂浮的石块渐渐沉寂。然而，誓约的阴影依然盘旋。",
						"french": "Les fragments de pierre flottants s'immobilisèrent lentement. Pourtant, l'ombre de la promesse demeurait.",
						"spanish": "Los fragmentos de piedra flotantes se asentaron lentamente. Sin embargo, la sombra de la promesa aún permanecía.",
						"vietnamese": "Những mảnh đá bay lơ lửng dần chìm xuống. Tuy nhiên, bóng dáng của lời hứa vẫn còn đó.",
						"thai": "ชิ้นส่วนหินที่ลอยอยู่ค่อยๆ จมลง ทว่า เงาของคำมั่นสัญญายังคงอยู่",
						"hindi": "उड़ते हुए पत्थरों के टुकड़े धीरे-धीरे शांत हो गए। फिर भी, वादे की छाया अभी भी बनी हुई थी।"
					}
				}
			],
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						3
					],
					"speaker": "anuk",
					"type": "direction"
				},
				{
					"emotion": "base",
					"speaker": "anuk",
					"type": "speech",
					"content": {
						"korean": "심판자가 그 모습을 드러낼 것이다. 너희의 맹세를 시험할 자가.",
						"english": "The arbiter will reveal itself. The one who will test your vows.",
						"japanese": "審判者が姿を現すだろう。お前たちの誓いを試す者が。",
						"chinese": "审判者将现身。那个将考验你们誓言的人。",
						"french": "Le juge se révélera. Celui qui mettra à l'épreuve vos serments.",
						"spanish": "El juez se revelará. Aquel que pondrá a prueba vuestros juramentos.",
						"vietnamese": "Kẻ phán xét sẽ lộ diện. Kẻ sẽ thử thách lời thề của các ngươi.",
						"thai": "ผู้พิพากษาจะปรากฏตัว ผู้ที่จะทดสอบคำสาบานของพวกเจ้า",
						"hindi": "निर्णायक प्रकट होगा। वही जो तुम्हारी प्रतिज्ञाओं का परीक्षण करेगा।"
					}
				},
				{
					"content": {
						"korean": "허울뿐인 약속은 얼어붙을 것이다.",
						"english": "Empty promises will freeze.",
						"japanese": "見せかけだけの約束は凍りつくだろう。",
						"chinese": "空洞的承诺将会冻结。",
						"french": "Les promesses creuses gèleront.",
						"spanish": "Las promesas vacías se congelarán.",
						"vietnamese": "Những lời hứa suông sẽ đóng băng.",
						"thai": "สัญญาที่ว่างเปล่าจะแข็งตัว",
						"hindi": "खोखले वादे जम जाएंगे।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "비켜!",
						"english": "Get out of the way!",
						"japanese": "退け！",
						"chinese": "让开！",
						"french": "Dégage !",
						"spanish": "¡Quítate!",
						"vietnamese": "Tránh ra!",
						"thai": "หลีกไป!",
						"hindi": "हट जाओ!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "그 진실을, 나에게 증명해 보여라.",
						"english": "Prove that truth to me.",
						"japanese": "その真実を、私に証明してみせろ。",
						"chinese": "把那份真实证明给我看。",
						"french": "Prouve-moi cette vérité.",
						"spanish": "Demuéstrame esa verdad.",
						"vietnamese": "Hãy chứng minh sự thật đó cho ta thấy.",
						"thai": "จงพิสูจน์ความจริงนั้นให้ข้าเห็น",
						"hindi": "मुझे वह सच साबित करके दिखाओ।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"action": "exit",
					"duration_ms": 400,
					"speaker": "anuk",
					"type": "direction",
					"direction": "up"
				},
				{
					"content": {
						"korean": "보여주겠어!",
						"english": "I'll show you!",
						"japanese": "見せてやる！",
						"chinese": "我会让你看到的！",
						"french": "Je vais te montrer !",
						"spanish": "¡Te lo mostraré!",
						"vietnamese": "Tôi sẽ cho thấy!",
						"thai": "จะแสดงให้ดู!",
						"hindi": "मैं तुम्हें दिखाऊंगा!"
					},
					"emotion": "angry",
					"speaker": "character_1",
					"type": "speech"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "맹세가 깨졌다. 너희의 약속은, 얼음처럼 부서질 운명이다.",
						"english": "The oath is broken. Your promise is destined to shatter like ice.",
						"japanese": "誓いは破られた。お前たちの約束は、氷のように砕け散る運命だ。",
						"chinese": "誓言已破。你们的诺言，注定如冰般破碎。",
						"french": "Le serment est brisé. Votre promesse est destinée à se briser comme de la glace.",
						"spanish": "El juramento se ha roto. Vuestra promesa está destinada a hacerse añicos como el hielo.",
						"vietnamese": "Lời thề đã bị phá vỡ. Lời hứa của các ngươi, định mệnh là vỡ tan như băng.",
						"thai": "คำสาบานแตกหัก คำสัญญาของพวกเจ้าจะต้องแตกสลายเหมือนน้ำแข็ง",
						"hindi": "शपथ टूट गई। तुम्हारा वादा, बर्फ की तरह टूटने के लिए destined है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…아직 끝나지 않았어.",
						"english": "...It's not over yet.",
						"japanese": "…まだ終わっていない。",
						"chinese": "……还没有结束。",
						"french": "...Ce n'est pas encore fini.",
						"spanish": "...Aún no ha terminado.",
						"vietnamese": "...Chưa kết thúc đâu.",
						"thai": "...ยังไม่จบ",
						"hindi": "...यह अभी खत्म नहीं हुआ है।"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "다시 도전해봐라. 진심이 있다면.",
						"english": "Try again. If you truly mean it.",
						"japanese": "もう一度挑んでみろ。本気ならば。",
						"chinese": "再挑战一次吧。如果你们是认真的。",
						"french": "Retentez votre chance. Si vous êtes sincères.",
						"spanish": "Intenta de nuevo. Si lo dices en serio.",
						"vietnamese": "Hãy thử thách lại. Nếu các ngươi thật lòng.",
						"thai": "ลองอีกครั้ง ถ้าเจ้าจริงจัง",
						"hindi": "फिर से कोशिश करो। अगर तुम वाकई गंभीर हो।"
					}
				}
			]
		}
	]
} as const;
