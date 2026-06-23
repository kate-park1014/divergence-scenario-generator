export const scenario_desert_rustblood_11_03 = {
	"scenario_id": "desert_rustblood_11_03",
	"order": 3,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"dune": {
			"id": "mon_fc976b75-f009-4bf2-b660-a3053c95d668",
			"name": {
				"korean": "듄",
				"english": "Dune",
				"japanese": "デューン",
				"chinese": "沙丘",
				"french": "Dune",
				"spanish": "Dune",
				"vietnamese": "Dune",
				"thai": "ดูน",
				"hindi": "ड्यून"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/7568ec11-0329-44b4-740a-71b25ef62400/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/ba7095b5-0d99-40bd-1155-b57701c00f00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"사막은 끝없이 펼쳐진 절망이었다.",
			"한때 '정의'라 불린 것들은, 이제 뼈아픈 상흔으로 남았다.",
			"이상은 부서지고, 신념은 흔들린다.",
			"이 황량한 땅에서, 과연 무엇을 믿을 수 있을까?"
		],
		"english": [
			"The desert was an endless expanse of despair.",
			"What was once called 'justice' now remains a bitter scar.",
			"Ideals shatter, and beliefs waver.",
			"In this desolate land, what can truly be trusted?"
		],
		"japanese": [
			"砂漠は、果てしなく広がる絶望だった。",
			"かつて「正義」と呼ばれたものは、今や痛ましい傷跡として残る。",
			"理想は打ち砕かれ、信念は揺らぐ。",
			"この荒廃した地で、一体何を信じればいいというのか？"
		],
		"chinese": [
			"沙漠是无尽的绝望。",
			"曾被称为“正义”之物，如今只剩下痛苦的伤痕。",
			"理想破碎，信念动摇。",
			"在这片荒凉的土地上，究竟能相信什么？"
		],
		"french": [
			"Le désert était une étendue infinie de désespoir.",
			"Ce qui fut jadis appelé « justice » n'est plus qu'une cicatrice amère.",
			"Les idéaux se brisent, et les croyances vacillent.",
			"Dans cette terre désolée, que peut-on vraiment croire ?"
		],
		"spanish": [
			"El desierto era una extensión infinita de desesperación.",
			"Lo que una vez se llamó 'justicia' ahora es una cicatriz dolorosa.",
			"Los ideales se rompen y las creencias flaquean.",
			"En esta tierra desolada, ¿qué se puede confiar realmente?"
		],
		"vietnamese": [
			"Sa mạc là sự tuyệt vọng trải dài vô tận.",
			"Điều từng được gọi là 'công lý', giờ chỉ còn là vết sẹo đau đớn.",
			"Lý tưởng tan vỡ, niềm tin lung lay.",
			"Trên mảnh đất hoang tàn này, rốt cuộc có thể tin vào điều gì?"
		],
		"thai": [
			"ทะเลทรายคือความสิ้นหวังที่แผ่กว้างไม่มีที่สิ้นสุด",
			"สิ่งที่เคยถูกเรียกว่า 'ความยุติธรรม' ตอนนี้กลับเป็นเพียงรอยแผลเป็นอันเจ็บปวด",
			"อุดมคติพังทลาย ความเชื่อสั่นคลอน",
			"ในดินแดนที่รกร้างว่างเปล่านี้ เราจะเชื่ออะไรได้บ้าง?"
		],
		"hindi": [
			"रेगिस्तान अंतहीन निराशा था।",
			"जिसे कभी 'न्याय' कहा जाता था, वह अब एक कड़वा घाव बन गया है।",
			"आदर्श टूटते हैं, और विश्वास डगमगाते हैं।",
			"इस उजाड़ भूमि में, वास्तव में किस पर भरोसा किया जा सकता है?"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "고대 길드의 기록은 희미했다. 진실은 모래처럼 흩어진 채.",
						"english": "The ancient guild's records were faint. The truth scattered like sand.",
						"japanese": "古代ギルドの記録は曖昧だった。真実は砂のように散り散りに。",
						"chinese": "古老公会的记录已模糊不清。真相如沙般散落。",
						"french": "Les archives de l'ancienne guilde étaient indistinctes. La vérité, éparpillée comme le sable.",
						"spanish": "Los registros del gremio antiguo eran débiles. La verdad, dispersa como la arena.",
						"vietnamese": "Ghi chép của hội cổ xưa đã mờ nhạt. Sự thật tan biến như cát.",
						"thai": "บันทึกของกิลด์โบราณเลือนลาง ความจริงกระจัดกระจายราวกับทราย",
						"hindi": "प्राचीन गिल्ड के रिकॉर्ड धुंधले थे। सच्चाई रेत की तरह बिखरी हुई।"
					}
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "빛나는 과거라더니… 결국.",
						"english": "A glorious past, they said... In the end.",
						"japanese": "輝かしい過去だと言ったが…結局のところ。",
						"chinese": "说是辉煌的过去…到头来。",
						"french": "Un passé glorieux, disaient-ils... Au final.",
						"spanish": "Un pasado glorioso, decían... Al final.",
						"vietnamese": "Một quá khứ huy hoàng, họ nói vậy... Rốt cuộc thì.",
						"thai": "อดีตที่รุ่งโรจน์อย่างนั้นหรือ... สุดท้ายแล้ว",
						"hindi": "एक शानदार अतीत, उन्होंने कहा... अंत में।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "모든 게 거짓일 수도 있겠군.",
						"english": "Perhaps it was all a lie.",
						"japanese": "全てが偽りだったのかもしれないな。",
						"chinese": "也许一切都是谎言。",
						"french": "Tout pourrait être un mensonge.",
						"spanish": "Quizás todo fue una mentira.",
						"vietnamese": "Có lẽ tất cả đều là dối trá.",
						"thai": "บางทีทุกอย่างอาจเป็นเรื่องโกหก",
						"hindi": "शायद यह सब एक झूठ था।"
					},
					"speaker": "character_1",
					"emotion": "sad"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "dune"
				},
				{
					"type": "speech",
					"content": {
						"korean": "또 다른 순진한 이상주의자인가.",
						"english": "Another naive idealist, I see.",
						"japanese": "また別の、おめでたい理想主義者か。",
						"chinese": "又是一个天真的理想主义者。",
						"french": "Encore un idéaliste naïf.",
						"spanish": "¿Otro idealista ingenuo?",
						"vietnamese": "Lại một kẻ lý tưởng hóa ngây thơ nữa à.",
						"thai": "นักอุดมคติที่ไร้เดียงสาอีกคนงั้นหรือ",
						"hindi": "एक और भोला आदर्शवादी, मैं देखता हूँ।"
					},
					"speaker": "dune",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "당신은… 누구죠?",
						"english": "You are... who?",
						"japanese": "あなたは…誰だ？",
						"chinese": "你是…谁？",
						"french": "Vous êtes… qui ?",
						"spanish": "¿Tú eres… quién?",
						"vietnamese": "Bạn là… ai?",
						"thai": "คุณคือ… ใคร?",
						"hindi": "तुम… कौन हो?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "나는 듄. 이 사막의 현실을 뼈저리게 아는 자.",
						"english": "I am Dune. One who intimately knows the reality of this desert.",
						"japanese": "俺はデューン。この砂漠の現実を骨身に染みて知る者だ。",
						"chinese": "我是沙丘。深知这片沙漠的现实之人。",
						"french": "Je suis Dune. Celui qui connaît intimement la réalité de ce désert.",
						"spanish": "Soy Dune. Quien conoce íntimamente la realidad de este desierto.",
						"vietnamese": "Tôi là Dune. Kẻ thấu hiểu sâu sắc thực tại của sa mạc này.",
						"thai": "ฉันคือดูน ผู้ที่รู้ซึ้งถึงความเป็นจริงของทะเลทรายแห่งนี้",
						"hindi": "मैं ड्यून हूँ। वह जो इस रेगिस्तान की सच्चाई को गहराई से जानता है।"
					},
					"speaker": "dune",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "여기 '정의'는 없어. 그저 강한 자들의 변명일 뿐.",
						"english": "There's no 'justice' here. Just the strong's excuse.",
						"japanese": "ここに「正義」はない。強者の言い訳に過ぎない。",
						"chinese": "这里没有“正义”。只有强者的借口。",
						"french": "Il n'y a pas de « justice » ici. Juste l'excuse des puissants.",
						"spanish": "Aquí no hay «justicia». Solo la excusa de los fuertes.",
						"vietnamese": "Ở đây không có 'công lý'. Chỉ là lời bào chữa của kẻ mạnh.",
						"thai": "ที่นี่ไม่มี 'ความยุติธรรม' เป็นเพียงข้ออ้างของผู้แข็งแกร่งเท่านั้น",
						"hindi": "यहाँ कोई 'न्याय' नहीं है। बस बलवानों का बहाना है。"
					},
					"speaker": "dune",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "하지만… 블레이드마스터 길드는—",
						"english": "But... the Blademaster Guild—",
						"japanese": "しかし… ブレードマスターギルドは—",
						"chinese": "但是… 刀剑大师公会—",
						"french": "Mais... la Guilde des Maîtres-Lames—",
						"spanish": "Pero... el Gremio de Maestros de la Espada—",
						"vietnamese": "Nhưng… Bang hội Kiếm Sư—",
						"thai": "แต่ว่า… กิลด์ปรมาจารย์ดาบ—",
						"hindi": "लेकिन… ब्लेडमास्टर गिल्ड—"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "그들이 뭘 했는데? 날 배신하고, 모든 걸 빼앗았지.",
						"english": "What did they do? Betrayed me, took everything.",
						"japanese": "彼らが何をした？私を裏切り、すべてを奪った。",
						"chinese": "他们做了什么？背叛我，夺走了一切。",
						"french": "Qu'ont-ils fait ? M'ont trahi, m'ont tout pris.",
						"spanish": "¿Qué hicieron? Me traicionaron, me quitaron todo.",
						"vietnamese": "Họ đã làm gì? Phản bội tôi, cướp đi mọi thứ.",
						"thai": "พวกเขาทำอะไร? หักหลังฉัน แย่งชิงทุกอย่างไป",
						"hindi": "उन्होंने क्या किया? मुझे धोखा दिया, सब कुछ छीन लिया।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "dune"
				},
				{
					"type": "speech",
					"content": {
						"korean": "한때 굳건했던 신념도, 이 모래바람에 삭아 없어졌다.",
						"english": "Even once firm beliefs eroded, lost to this sandstorm.",
						"japanese": "かつて揺るぎなかった信念も、この砂嵐に蝕まれ消え去った。",
						"chinese": "曾经坚定的信念，也在这沙尘暴中消磨殆尽。",
						"french": "Même les croyances autrefois solides se sont érodées, perdues dans cette tempête de sable.",
						"spanish": "Incluso las creencias una vez firmes se erosionaron, perdidas en esta tormenta de arena.",
						"vietnamese": "Ngay cả niềm tin từng vững chắc cũng bị bào mòn, tan biến trong bão cát này.",
						"thai": "แม้แต่ความเชื่อที่มั่นคงก็ยังถูกกัดกร่อน สลายไปในพายุทรายนี้",
						"hindi": "एक समय का दृढ़ विश्वास भी, इस रेतीले तूफान में घुल कर मिट गया।"
					},
					"speaker": "dune",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 모래 폭풍을 뚫고 나타났다.",
						"english": "A colossal shadow emerged, piercing the sandstorm.",
						"japanese": "巨大な影が砂嵐を突き破って現れた。",
						"chinese": "巨大的身影穿透沙暴出现。",
						"french": "Une ombre colossale surgit, perçant la tempête de sable.",
						"spanish": "Una sombra colosal emergió, atravesando la tormenta de arena.",
						"vietnamese": "Một cái bóng khổng lồ xuyên qua bão cát mà xuất hiện.",
						"thai": "เงาขนาดมหึมาปรากฏขึ้น ทะลุพายุทรายออกมา",
						"hindi": "एक विशालकाय परछाई रेत के तूफान को चीरती हुई प्रकट हुई।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "내 영역에 발을 들인 어리석은 자여.",
						"english": "Fool, treading into my domain.",
						"japanese": "我が領域に足を踏み入れた愚か者め。",
						"chinese": "愚蠢之人，竟敢踏入我的领地。",
						"french": "Imbécile, osant fouler mon domaine.",
						"spanish": "Necio, al pisar mi dominio.",
						"vietnamese": "Kẻ ngu xuẩn, dám đặt chân vào lãnh địa của ta.",
						"thai": "เจ้าคนโง่เง่า ที่เหยียบย่างเข้ามาในอาณาเขตของข้า",
						"hindi": "मूर्ख, मेरे क्षेत्र में कदम रखने वाला।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "이놈이…!",
						"english": "You...!",
						"japanese": "この野郎…！",
						"chinese": "这个家伙…！",
						"french": "Cet individu… !",
						"spanish": "¡Este…!",
						"vietnamese": "Tên khốn này...!",
						"thai": "ไอ้สารเลว...!",
						"hindi": "यह दुष्ट...!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"id": 3,
			"lose_dialogue": [
				{
					"content": {
						"korean": "모래 폭풍이 모든 것을 집어삼켰다.",
						"english": "The sandstorm swallowed everything.",
						"japanese": "砂嵐がすべてを飲み込んだ。",
						"chinese": "沙尘暴吞噬了一切。",
						"french": "La tempête de sable a tout englouti.",
						"spanish": "La tormenta de arena lo engulló todo.",
						"vietnamese": "Cơn bão cát nuốt chửng mọi thứ.",
						"thai": "พายุทรายกลืนกินทุกสิ่ง",
						"hindi": "रेत के तूफान ने सब कुछ निगल लिया।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이렇게… 끝날 순 없어.",
						"english": "It can't end like this...",
						"japanese": "こんな…終わり方ではだめだ。",
						"chinese": "不能…就这样结束。",
						"french": "Ça ne peut pas... finir comme ça.",
						"spanish": "No puede... terminar así.",
						"vietnamese": "Không thể... kết thúc thế này.",
						"thai": "มันจะจบแบบนี้ไม่ได้...",
						"hindi": "ऐसे... खत्म नहीं हो सकता।"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "너희의 이상은, 여기서 끝이다.",
						"english": "Your ideals end here.",
						"japanese": "お前たちの理想は、ここで終わりだ。",
						"chinese": "你们的理想，到此为止。",
						"french": "Vos idéaux s'arrêtent ici.",
						"spanish": "Vuestros ideales terminan aquí.",
						"vietnamese": "Lý tưởng của các ngươi, kết thúc tại đây.",
						"thai": "อุดมคติของพวกเจ้า สิ้นสุดลงที่นี่",
						"hindi": "तुम्हारे आदर्श, यहीं खत्म होते हैं।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"spot": [
						2,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "dune"
				},
				{
					"emotion": "base",
					"speaker": "dune",
					"content": {
						"korean": "내가 말했지. 이 사막에 정의는 없다고.",
						"english": "I told you. There's no justice in this desert.",
						"japanese": "言ったはずだ。この砂漠に正義はないと。",
						"chinese": "我说过。这片沙漠里没有正义。",
						"french": "Je te l'avais dit. Il n'y a pas de justice dans ce désert.",
						"spanish": "Te lo dije. No hay justicia en este desierto.",
						"vietnamese": "Ta đã nói rồi. Sa mạc này không có công lý.",
						"thai": "ฉันบอกแล้วไง ทะเลทรายนี้ไม่มีความยุติธรรม",
						"hindi": "मैंने कहा था। इस रेगिस्तान में कोई न्याय नहीं है।"
					},
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "크윽… 결국… 정의는… 부질없다.",
						"english": "Ugh... In the end... justice is... futile.",
						"japanese": "くっ…結局…正義は…無意味だ。",
						"chinese": "咳… 终究… 正义… 毫无意义。",
						"french": "Ugh… Au final… la justice est… vaine.",
						"spanish": "Ugh… Al final… la justicia es… inútil.",
						"vietnamese": "Ư… Rốt cuộc… công lý… vô nghĩa.",
						"thai": "อึก… สุดท้ายแล้ว… ความยุติธรรม… ก็ไร้ประโยชน์",
						"hindi": "उफ़… आख़िरकार… न्याय… व्यर्थ है।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "정의는 부질없지 않아!",
						"english": "Justice is not futile!",
						"japanese": "正義は無意味じゃない！",
						"chinese": "正义并非毫无意义！",
						"french": "La justice n'est pas vaine !",
						"spanish": "¡La justicia no es inútil!",
						"vietnamese": "Công lý không vô nghĩa!",
						"thai": "ความยุติธรรมไม่ไร้ประโยชน์!",
						"hindi": "न्याय व्यर्थ नहीं है!"
					}
				},
				{
					"spot": [
						2,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "dune"
				},
				{
					"speaker": "dune",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…결국, 힘인가. 정의는 언제나 패배자들의 변명이었어.",
						"english": "...In the end, it's power. Justice was always the losers' excuse.",
						"japanese": "…結局、力か。正義はいつも敗者の言い訳だった。",
						"chinese": "…终究是力量吗。正义向来是失败者的借口。",
						"french": "…Au final, c'est la force. La justice n'a toujours été que l'excuse des perdants.",
						"spanish": "…Al final, es el poder. La justicia siempre fue la excusa de los perdedores.",
						"vietnamese": "…Rốt cuộc, là sức mạnh ư. Công lý luôn là lời bào chữa của kẻ thua cuộc.",
						"thai": "…สุดท้ายแล้วก็คือพลังงั้นรึ ความยุติธรรมเป็นแค่ข้ออ้างของผู้แพ้เสมอ",
						"hindi": "…आखिरकार, क्या यह शक्ति है। न्याय हमेशा हारने वालों का बहाना रहा है।"
					}
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "듄의 냉소적인 시선은, 부서진 신념의 잔해를 응시했다.",
						"english": "Dune's cynical gaze stared at the shattered remains of belief.",
						"japanese": "デューンの冷笑的な視線は、砕け散った信念の残骸を見つめていた。",
						"chinese": "厄运的嘲讽目光，凝视着破碎信仰的残骸。",
						"french": "Le regard cynique de Dune fixa les vestiges brisés de la foi.",
						"spanish": "La mirada cínica de Dune contempló los restos destrozados de la fe.",
						"vietnamese": "Ánh mắt hoài nghi của Dune nhìn chằm chằm vào tàn dư của niềm tin tan vỡ.",
						"thai": "สายตาเย้ยหยันของดูนจับจ้องซากปรักหักพังของความเชื่อที่แตกสลาย",
						"hindi": "ड्यून की सनकी नज़र टूटे हुए विश्वास के अवशेषों को घूरती रही।"
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "낡은 기록의 파편들이, 길드의 완벽한 명성을 조롱하듯 흩어져 있었다.",
						"english": "Fragments of old records lay scattered, mocking the guild's perfect reputation.",
						"japanese": "古い記録の断片が、ギルドの完璧な評判を嘲笑うかのように散らばっていた。",
						"chinese": "破碎的旧记录散落一地，仿佛在嘲笑着公会完美的声誉。",
						"french": "Des fragments de vieux registres gisaient éparpillés, se moquant de la réputation impeccable de la guilde.",
						"spanish": "Fragmentos de viejos registros yacían esparcidos, burlándose de la perfecta reputación del gremio.",
						"vietnamese": "Những mảnh ghi chép cũ nằm rải rác, như thể chế giễu danh tiếng hoàn hảo của bang hội.",
						"thai": "เศษเสี้ยวของบันทึกเก่ากระจัดกระจายราวกับกำลังเย้ยหยันชื่อเสียงอันสมบูรณ์แบบของกิลด์",
						"hindi": "पुराने अभिलेखों के टुकड़े बिखरे पड़े थे, जो गिल्ड की निर्दोष प्रतिष्ठा का उपहास कर रहे थे।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "완벽하다고? 다 찢겨나간 진실뿐인데…",
						"english": "Perfect? Only torn fragments of truth remain...",
						"japanese": "完璧だと？ただ引き裂かれた真実だけが残っているのに…",
						"chinese": "完美？只剩下支离破碎的真相了…",
						"french": "Parfait ? Il ne reste que des lambeaux de vérité...",
						"spanish": "¿Perfecto? Solo quedan fragmentos desgarrados de la verdad...",
						"vietnamese": "Hoàn hảo? Chỉ còn lại những mảnh sự thật bị xé nát...",
						"thai": "สมบูรณ์แบบงั้นเหรอ? มีแต่เศษเสี้ยวความจริงที่ฉีกขาดเท่านั้น...",
						"hindi": "बिल्कुल सही? केवल सत्य के फटे हुए अंश बचे हैं..."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "과연, 무엇이 진짜 기록이었을까.",
						"english": "Indeed, what was the true record?",
						"japanese": "果たして、何が本当の記録だったのだろうか。",
						"chinese": "究竟，什么是真正的记录呢？",
						"french": "En effet, quel était le véritable registre ?",
						"spanish": "En verdad, ¿cuál fue el verdadero registro?",
						"vietnamese": "Thực sự, đâu là ghi chép thật sự?",
						"thai": "แท้จริงแล้ว อะไรคือบันทึกที่แท้จริงกันแน่",
						"hindi": "वास्तव में, असली अभिलेख क्या था?"
					},
					"speaker": "character_1",
					"emotion": "base"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"content": {
						"korean": "사막의 심장부는 더욱 깊어졌다. 돌아갈 길은 보이지 않았다.",
						"english": "The heart of the desert deepened. No way back was in sight.",
						"japanese": "砂漠の核心はさらに深くなった。戻る道は見えなかった。",
						"chinese": "沙漠的深处愈发幽深。归途已不可见。",
						"french": "Le cœur du désert s'approfondissait. Aucun chemin de retour n'était en vue.",
						"spanish": "El corazón del desierto se hizo más profundo. No se veía el camino de regreso.",
						"vietnamese": "Trái tim sa mạc càng lúc càng sâu. Không thấy đường quay về.",
						"thai": "ใจกลางทะเลทรายยิ่งลึกเข้าไปอีก ไม่เห็นหนทางกลับ",
						"hindi": "रेगिस्तान का दिल गहरा होता गया। वापसी का कोई रास्ता नहीं दिख रहा था।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "어디까지 가야 진실을 볼 수 있을까.",
						"english": "How much further must we go to see the truth?",
						"japanese": "どこまで行けば真実が見えるのだろうか。",
						"chinese": "究竟要走到哪里，才能看到真相呢？",
						"french": "Jusqu'où faut-il aller pour voir la vérité ?",
						"spanish": "¿Hasta dónde debemos ir para ver la verdad?",
						"vietnamese": "Phải đi bao xa nữa mới có thể thấy được sự thật?",
						"thai": "ต้องไปไกลแค่ไหนถึงจะเห็นความจริง",
						"hindi": "सत्य देखने के लिए हमें और कितना आगे जाना होगा?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "이대로 끝낼 순 없어. 멈출 수 없어.",
						"english": "I can't end it like this. I can't stop.",
						"japanese": "このままでは終われない。止まれない。",
						"chinese": "不能就这样结束。不能停止。",
						"french": "Je ne peux pas finir comme ça. Je ne peux pas m'arrêter.",
						"spanish": "No puedo terminar así. No puedo detenerme.",
						"vietnamese": "Không thể kết thúc thế này được. Không thể dừng lại.",
						"thai": "จะจบแค่นี้ไม่ได้ ฉันหยุดไม่ได้",
						"hindi": "मैं इसे ऐसे खत्म नहीं कर सकता। मैं रुक नहीं सकता।"
					},
					"speaker": "character_2",
					"emotion": "angry"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "드디어 여기까지 왔군, 어리석은 자들.",
						"english": "So, you've finally made it this far, you fools.",
						"japanese": "ついにここまで来たか、愚か者たちめ。",
						"chinese": "愚蠢的家伙们，终于走到这里了。",
						"french": "Vous êtes enfin arrivés jusqu'ici, idiots.",
						"spanish": "Así que finalmente han llegado hasta aquí, necios.",
						"vietnamese": "Cuối cùng thì các ngươi cũng đã đến đây, lũ ngốc.",
						"thai": "ในที่สุดพวกแกก็มาถึงที่นี่แล้ว เจ้าพวกโง่เง่า",
						"hindi": "तो, आखिरकार तुम यहाँ तक आ ही गए, मूर्खों।"
					},
					"speaker": "boss",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "네놈의 악행을 끝내러 왔다!",
						"english": "We've come to put an end to your evil deeds!",
						"japanese": "貴様の悪行を終わらせに来た！",
						"chinese": "我们是来终结你的恶行的！",
						"french": "Nous sommes venus mettre fin à tes méfaits !",
						"spanish": "¡Hemos venido a poner fin a tus fechorías!",
						"vietnamese": "Chúng ta đến để chấm dứt tội ác của ngươi!",
						"thai": "พวกเรามาเพื่อหยุดยั้งความชั่วร้ายของแก!",
						"hindi": "हम तुम्हारे कुकर्मों का अंत करने आए हैं!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "절망의 그림자가 모든 것을 집어삼켰다.",
						"english": "The shadow of despair swallowed everything.",
						"japanese": "絶望の影が全てを飲み込んだ。",
						"chinese": "绝望的阴影吞噬了一切。",
						"french": "L'ombre du désespoir a tout englouti.",
						"spanish": "La sombra de la desesperación lo devoró todo.",
						"vietnamese": "Bóng tối của sự tuyệt vọng đã nuốt chửng mọi thứ.",
						"thai": "เงาแห่งความสิ้นหวังกลืนกินทุกสิ่ง",
						"hindi": "निराशा की छाया ने सब कुछ निगल लिया।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "너희의 모든 것은… 내 손아귀에 있다.",
						"english": "Everything you have... is in my grasp.",
						"japanese": "お前たちの全ては…この私の手の中にある。",
						"chinese": "你们的一切…都在我的掌握之中。",
						"french": "Tout ce que vous avez… est entre mes mains.",
						"spanish": "Todo lo que tienen... está en mis manos.",
						"vietnamese": "Tất cả mọi thứ của các ngươi... đều nằm trong lòng bàn tay ta.",
						"thai": "ทุกสิ่งของพวกแก... อยู่ในกำมือของฉัน",
						"hindi": "तुम्हारा सब कुछ... मेरी मुट्ठी में है।"
					},
					"speaker": "boss",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "아직… 포기하지 않아…",
						"english": "I still... won't give up...",
						"japanese": "まだ…諦めない…",
						"chinese": "我还没…放弃…",
						"french": "Je n'abandonne… pas encore…",
						"spanish": "Aún no… me rindo…",
						"vietnamese": "Ta vẫn... chưa từ bỏ...",
						"thai": "ฉันยัง... ไม่ยอมแพ้...",
						"hindi": "अभी तक... हार नहीं मानी..."
					}
				}
			],
			"win_dialogue": [
				{
					"speaker": "boss",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "크… 이게… 끝이 아니라는 것을… 알게 될 거다…",
						"english": "Hmph... You'll learn... this isn't... the end...",
						"japanese": "クッ…これが…終わりではないことを…思い知るだろう…",
						"chinese": "呵…你很快就会明白…这并不是…结束…",
						"french": "Hrrm… Tu apprendras… que ce n'est pas… la fin…",
						"spanish": "Grrr... Pronto sabrás... que esto no es... el final...",
						"vietnamese": "Khụ... Ngươi sẽ biết... đây không phải... là kết thúc...",
						"thai": "ฮึ่ม... แกจะรู้ว่า... นี่ไม่ใช่... จุดจบ...",
						"hindi": "ह्ह्ह्म्म... तुम्हें पता चलेगा... कि यह... अंत नहीं है..."
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "이제 정말 끝인가…",
						"english": "Is it truly over now...?",
						"japanese": "これで本当に終わりなのか…",
						"chinese": "现在真的结束了吗…",
						"french": "Est-ce vraiment la fin maintenant...?",
						"spanish": "¿Es este el verdadero final...?",
						"vietnamese": "Bây giờ thực sự đã kết thúc rồi sao...?",
						"thai": "นี่มันจบลงแล้วจริงๆ เหรอ...?",
						"hindi": "क्या अब सच में खत्म हो गया...?"
					},
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "모든 것이 끝난 줄 알았다. 그러나 진정한 고통은 이제부터 시작이었다.",
						"english": "I thought it was all over. But the true suffering was just beginning.",
						"japanese": "全てが終わったと思った。しかし、本当の苦痛はこれからだった。",
						"chinese": "我以为一切都结束了。然而，真正的痛苦才刚刚开始。",
						"french": "Je croyais que tout était fini. Mais la véritable souffrance ne faisait que commencer.",
						"spanish": "Pensé que todo había terminado. Pero el verdadero sufrimiento apenas comenzaba.",
						"vietnamese": "Tôi đã nghĩ mọi thứ đã kết thúc. Nhưng nỗi đau thực sự chỉ mới bắt đầu.",
						"thai": "ฉันคิดว่าทุกอย่างจบลงแล้ว แต่ความทุกข์ทรมานที่แท้จริงเพิ่งจะเริ่มต้นขึ้น",
						"hindi": "मैंने सोचा था कि सब खत्म हो गया है। लेकिन असली पीड़ा तो अब शुरू हुई थी।"
					}
				}
			]
		}
	]
} as const;
