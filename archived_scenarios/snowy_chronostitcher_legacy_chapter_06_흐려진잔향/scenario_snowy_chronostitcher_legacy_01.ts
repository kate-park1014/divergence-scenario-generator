export const scenario_snowy_chronostitcher_legacy_01 = {
	"scenario_id": "snowy_chronostitcher_legacy_01",
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
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "시계탑 잔해. 부서진 시간들이 흩어져 있었다.",
						"english": "Clock tower debris. Shattered time lay scattered.",
						"japanese": "時計塔の残骸。砕かれた時間が散らばっていた。",
						"chinese": "钟楼残骸。破碎的时间散落一地。",
						"french": "Débris de la tour de l'horloge. Le temps brisé était éparpillé.",
						"spanish": "Escombros de la torre del reloj. El tiempo hecho añicos yacía esparcido.",
						"vietnamese": "Đống đổ nát của tháp đồng hồ. Thời gian vỡ vụn nằm rải rác.",
						"thai": "ซากหอนาฬิกา เศษซากของเวลากระจัดกระจายอยู่",
						"hindi": "घंटाघर का मलबा। टूटा हुआ समय बिखरा पड़ा था।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "여기가… 벨루스의 시계탑?",
						"english": "Is this... Bellus's Clock Tower?",
						"japanese": "ここが…ベルスの時計塔？",
						"chinese": "这里是……贝鲁斯的钟楼？",
						"french": "C'est... la Tour de l'Horloge de Bellus ?",
						"spanish": "¿Es esto... la Torre del Reloj de Bellus?",
						"vietnamese": "Đây là... Tháp đồng hồ Bellus?",
						"thai": "นี่คือ... หอนาฬิกาของเบลลัสหรือเปล่า?",
						"hindi": "क्या यह... बेलुस का घंटाघर है?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "한 남자가 1초 간격으로 노인과 젊은이를 오갔다.",
						"english": "A man alternated between an old man and a youth every second.",
						"japanese": "ある男が1秒ごとに老人と若者を行き来していた。",
						"chinese": "一个男人每秒钟在老人和年轻人之间交替。",
						"french": "Un homme alternait entre un vieil homme et un jeune homme chaque seconde.",
						"spanish": "Un hombre alternaba entre un anciano y un joven cada segundo.",
						"vietnamese": "Một người đàn ông luân phiên giữa ông già và người trẻ mỗi giây.",
						"thai": "ชายคนหนึ่งสลับไปมาระหว่างชายชรากับชายหนุ่มทุก ๆ วินาที",
						"hindi": "एक आदमी हर सेकंड बूढ़े और जवान के बीच बदल रहा था।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "저 사람은… 대체 왜 저러지?",
						"english": "Why is that person... doing that?",
						"japanese": "あの人は…一体どうしてあんな風に？",
						"chinese": "那个人……到底为什么那样？",
						"french": "Pourquoi cette personne... fait-elle ça ?",
						"spanish": "¿Por qué esa persona... está haciendo eso?",
						"vietnamese": "Người đó... tại sao lại như vậy?",
						"thai": "ทำไมคนนั้นถึง... ทำแบบนั้น?",
						"hindi": "वह व्यक्ति... ऐसा क्यों कर रहा है?"
					},
					"type": "speech"
				},
				{
					"action": "enter",
					"speaker": "anuk",
					"spot": [
						4,
						1
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "시간의 파편에 갇혔어. 되돌릴 수 없어.",
						"english": "Trapped in time's fragments. Can't be undone.",
						"japanese": "時の破片に囚われた。元には戻せない。",
						"chinese": "被困在时间的碎片中。无法挽回。",
						"french": "Piégé dans les fragments du temps. On ne peut pas revenir en arrière.",
						"spanish": "Atrapado en los fragmentos del tiempo. No se puede deshacer.",
						"vietnamese": "Mắc kẹt trong những mảnh thời gian. Không thể quay lại được.",
						"thai": "ติดอยู่ในเศษเสี้ยวแห่งเวลา ไม่สามารถแก้ไขได้",
						"hindi": "समय के टुकड़ों में फंसा हुआ। इसे पूर्ववत नहीं किया जा सकता।"
					},
					"type": "speech",
					"speaker": "anuk"
				},
				{
					"content": {
						"korean": "되돌릴 수 없다고?",
						"english": "Can't be undone?",
						"japanese": "元には戻せないって？",
						"chinese": "无法挽回？",
						"french": "On ne peut pas revenir en arrière ?",
						"spanish": "¿No se puede deshacer?",
						"vietnamese": "Không thể quay lại được sao?",
						"thai": "ไม่สามารถแก้ไขได้หรือ?",
						"hindi": "पूर्ववत नहीं किया जा सकता?"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…크로노스 리버서가 있다면 모를까.",
						"english": "...Unless it's the Chronos Reverser.",
						"japanese": "…クロノスリバーサーがあれば話は別だが。",
						"chinese": "……除非有克罗诺斯逆转器。",
						"french": "...À moins que ce ne soit le Chronos Reverser.",
						"spanish": "...A menos que sea el Inversor de Cronos.",
						"vietnamese": "...Trừ khi có Chronos Reverser.",
						"thai": "...เว้นแต่จะเป็น Chronos Reverser ล่ะนะ",
						"hindi": "...जब तक कि यह क्रोनोस रिवर्सर न हो।"
					},
					"speaker": "anuk"
				},
				{
					"content": {
						"korean": "크로노스 리버서?",
						"english": "Chronos Reverser?",
						"japanese": "クロノスリバーサー？",
						"chinese": "克罗诺斯逆转器？",
						"french": "Le Chronos Reverser ?",
						"spanish": "¿Inversor de Cronos?",
						"vietnamese": "Chronos Reverser?",
						"thai": "Chronos Reverser?",
						"hindi": "क्रोनोस रिवर्सर?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "깊은 곳에서 정체불명의 빛나는 오브를 발견했다. 따뜻하고 편안했지만 알 수 없는 불안감도 함께 느껴졌다.",
						"english": "In the depths, I found an unknown glowing orb. It felt warm and comforting, yet an inexplicable unease lingered.",
						"japanese": "深淵で、正体不明の輝くオーブを見つけた。温かく心地よかったが、同時に言葉にできない不安も感じた。",
						"chinese": "在深处，我发现了一个不明发光球体。它温暖舒适，却也伴随着一种莫名的不安感。",
						"french": "Dans les profondeurs, j'ai découvert un orbe lumineux inconnu. Il était chaud et réconfortant, mais une inquiétude inexplicable planait.",
						"spanish": "En las profundidades, encontré un orbe brillante desconocido. Se sentía cálido y reconfortante, pero una inquietud inexplicable también me invadía.",
						"vietnamese": "Trong sâu thẳm, tôi tìm thấy một quả cầu phát sáng không rõ nguồn gốc. Nó ấm áp và dễ chịu, nhưng cũng kèm theo một sự bất an không thể giải thích.",
						"thai": "ในห้วงลึก ฉันพบลูกแก้วเรืองแสงที่ไม่รู้จัก มันรู้สึกอบอุ่นและสบาย แต่ก็มีความกังวลที่ไม่สามารถอธิบายได้",
						"hindi": "गहराई में, मुझे एक अज्ञात चमकता हुआ ओर्ब मिला। यह गर्म और आरामदायक लगा, फिर भी एक अकथनीय बेचैनी भी महसूस हुई।"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "anuk",
					"spot": [
						4,
						1
					],
					"duration_ms": 500
				},
				{
					"speaker": "anuk",
					"type": "speech",
					"content": {
						"korean": "이 시간의 파편들은… 세상 모든 것을 뒤틀고 있어.",
						"english": "These fragments of time... they're distorting everything in the world.",
						"japanese": "この時間の破片は…世界のすべてを歪めている。",
						"chinese": "这些时间碎片……正在扭曲世间万物。",
						"french": "Ces fragments de temps... ils déforment tout dans le monde.",
						"spanish": "Estos fragmentos de tiempo... están distorsionando todo en el mundo.",
						"vietnamese": "Những mảnh vỡ thời gian này... đang bóp méo mọi thứ trên thế giới.",
						"thai": "ชิ้นส่วนแห่งเวลานี้... กำลังบิดเบือนทุกสิ่งในโลก",
						"hindi": "समय के ये टुकड़े... वे दुनिया की हर चीज़ को विकृत कर रहे हैं।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "누가 이런 짓을… ",
						"english": "Who would do such a thing...?",
						"japanese": "誰がこんなことを…",
						"chinese": "谁会做这种事……",
						"french": "Qui ferait une chose pareille...?",
						"spanish": "¿Quién haría algo así...?",
						"vietnamese": "Ai đã làm điều này...?",
						"thai": "ใครกันที่ทำเรื่องแบบนี้...?",
						"hindi": "कौन करेगा ऐसा...?"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "anuk",
					"content": {
						"korean": "일부는 급격히 늙고, 일부는 영원히 같은 순간을 반복하지.",
						"english": "Some age rapidly, while others repeat the same moment forever.",
						"japanese": "ある者は急激に老い、ある者は永遠に同じ瞬間を繰り返す。",
						"chinese": "有些迅速衰老，有些则永远重复着同一瞬间。",
						"french": "Certains vieillissent rapidement, tandis que d'autres répètent le même instant pour l'éternité.",
						"spanish": "Algunos envejecen rápidamente, mientras que otros repiten el mismo momento para siempre.",
						"vietnamese": "Một số thì nhanh chóng già đi, trong khi số khác thì lặp đi lặp lại cùng một khoảnh khắc vĩnh viễn.",
						"thai": "บางคนแก่ลงอย่างรวดเร็ว ในขณะที่บางคนก็วนซ้ำช่วงเวลาเดิมตลอดไป",
						"hindi": "कुछ तेज़ी से बूढ़े हो जाते हैं, जबकि कुछ हमेशा एक ही क्षण को दोहराते रहते हैं।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "뒤틀린 유물에 닿자 손목에 옅은 서리 결정이 맺혔다.",
						"english": "Upon touching the warped artifact, faint frost crystals formed on my wrist.",
						"japanese": "歪んだ遺物に触れると、手首に薄い霜の結晶が結ばれた。",
						"chinese": "触碰到扭曲的遗物时，手腕上凝结出了淡淡的霜晶。",
						"french": "En touchant l'artefact déformé, de légers cristaux de givre se sont formés sur mon poignet.",
						"spanish": "Al tocar el artefacto distorsionado, leves cristales de escarcha se formaron en mi muñeca.",
						"vietnamese": "Khi chạm vào cổ vật bị biến dạng, những tinh thể sương mờ nhạt hình thành trên cổ tay tôi.",
						"thai": "เมื่อสัมผัสวัตถุโบราณที่บิดเบี้ยว คริสตัลน้ำแข็งจางๆ ก็ก่อตัวขึ้นบนข้อมือ",
						"hindi": "विकृत कलाकृति को छूने पर, मेरी कलाई पर हल्के पाले के क्रिस्टल बन गए।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이건… 뭐야?",
						"english": "What... is this?",
						"japanese": "これは…何だ？",
						"chinese": "这……是什么？",
						"french": "Qu'est-ce que... c'est ça ?",
						"spanish": "¿Esto... qué es?",
						"vietnamese": "Đây... là gì?",
						"thai": "นี่มัน... อะไร?",
						"hindi": "यह... क्या है?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "조심해. 그 시간의 흔적은 너의 시간마저 잠식할 수 있어.",
						"english": "Be careful. Those traces of time can even erode your own time.",
						"japanese": "気をつけろ。その時間の痕跡は、お前の時間さえも侵食しかねない。",
						"chinese": "小心。那时间的痕迹甚至会侵蚀你的时间。",
						"french": "Fais attention. Ces traces du temps peuvent même éroder ton propre temps.",
						"spanish": "Ten cuidado. Esas huellas del tiempo pueden incluso consumir tu propio tiempo.",
						"vietnamese": "Hãy cẩn thận. Dấu vết thời gian đó thậm chí có thể ăn mòn thời gian của bạn.",
						"thai": "ระวังให้ดี ร่องรอยของเวลานั้นอาจกัดกินเวลาของเจ้าได้",
						"hindi": "सावधान। समय के वे निशान तुम्हारे समय को भी नष्ट कर सकते हैं।"
					},
					"emotion": "sad",
					"speaker": "anuk"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "anuk",
					"duration_ms": 500,
					"spot": [
						4,
						1
					],
					"type": "direction"
				},
				{
					"speaker": "anuk",
					"type": "speech",
					"content": {
						"korean": "크로노스 리버서는… 잃어버린 시간을 되찾을 힘이 있지만.",
						"english": "The Chronos Reverser... it has the power to reclaim lost time, but.",
						"japanese": "クロノスリバーサーは…失われた時間を取り戻す力があるが。",
						"chinese": "克罗诺斯逆转器……它拥有找回失去时间的力量，但是。",
						"french": "Le Chronos Reverser... il a le pouvoir de récupérer le temps perdu, mais.",
						"spanish": "El Inversor de Cronos... tiene el poder de recuperar el tiempo perdido, pero.",
						"vietnamese": "Chronos Reverser... nó có sức mạnh để lấy lại thời gian đã mất, nhưng.",
						"thai": "Chronos Reverser... มีพลังที่จะกอบกู้เวลาที่หายไป แต่ว่า",
						"hindi": "क्रोनोस रिवर्सर... इसमें खोए हुए समय को वापस पाने की शक्ति है, लेकिन।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "하지만?",
						"english": "But?",
						"japanese": "ですが？",
						"chinese": "但是？",
						"french": "Mais ?",
						"spanish": "¿Pero?",
						"vietnamese": "Nhưng?",
						"thai": "แต่?",
						"hindi": "लेकिन?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그 힘은 사용자의 시간을 흡수해. 대가가 너무 커.",
						"english": "That power drains the user's time. The cost is too great.",
						"japanese": "その力は使用者の時間を吸い取る。代償が大きすぎる。",
						"chinese": "那力量会吸取使用者的时间。代价太大了。",
						"french": "Ce pouvoir absorbe le temps de l'utilisateur. Le prix est trop élevé.",
						"spanish": "Ese poder absorbe el tiempo del usuario. El precio es demasiado alto.",
						"vietnamese": "Sức mạnh đó hút cạn thời gian của người dùng. Cái giá quá đắt.",
						"thai": "พลังนั้นดูดกลืนเวลาของผู้ใช้ ค่าตอบแทนสูงเกินไป",
						"hindi": "वह शक्ति उपयोगकर्ता का समय सोख लेती है। कीमत बहुत अधिक है।"
					},
					"emotion": "sad",
					"speaker": "anuk"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "그래도… 이 혼란을 끝내려면 필요해.",
						"english": "Still... it's needed to end this chaos.",
						"japanese": "それでも…この混乱を終わらせるには必要だ。",
						"chinese": "即使如此…也需要它来结束这场混乱。",
						"french": "Pourtant... c'est nécessaire pour mettre fin à ce chaos.",
						"spanish": "Aun así... es necesario para terminar con este caos.",
						"vietnamese": "Dù vậy... vẫn cần nó để chấm dứt sự hỗn loạn này.",
						"thai": "ถึงอย่างนั้น... มันก็จำเป็นเพื่อยุติความโกลาหลนี้",
						"hindi": "फिर भी... इस अराजकता को खत्म करने के लिए इसकी आवश्यकता है।"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "너무 깊이 파고들지 마. 위험해.",
						"english": "Don't delve too deep. It's dangerous.",
						"japanese": "深入りしすぎるな。危険だ。",
						"chinese": "别陷得太深。这很危险。",
						"french": "Ne t'enfonce pas trop loin. C'est dangereux.",
						"spanish": "No profundices demasiado. Es peligroso.",
						"vietnamese": "Đừng đào sâu quá. Nguy hiểm đấy.",
						"thai": "อย่าเจาะลึกเกินไป. มันอันตราย.",
						"hindi": "बहुत गहराई तक मत जाओ। यह खतरनाक है।"
					},
					"emotion": "sad",
					"speaker": "anuk"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "anuk",
					"duration_ms": 500,
					"spot": [
						4,
						1
					],
					"type": "direction"
				},
				{
					"speaker": "anuk",
					"type": "speech",
					"content": {
						"korean": "시간의 뒤틀림이 점점 강해지고 있어.",
						"english": "The time distortions are growing stronger.",
						"japanese": "時間の歪みが強まっている。",
						"chinese": "时间的扭曲越来越强烈了。",
						"french": "Les distorsions temporelles s'intensifient.",
						"spanish": "Las distorsiones temporales se están haciendo más fuertes.",
						"vietnamese": "Sự bóp méo thời gian đang mạnh dần lên.",
						"thai": "การบิดเบือนของเวลากำลังรุนแรงขึ้นเรื่อยๆ",
						"hindi": "समय का विकृति बढ़ता जा रहा है।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "세상이 무너지는 것 같아.",
						"english": "It feels like the world is falling apart.",
						"japanese": "世界が崩壊していくようだ。",
						"chinese": "感觉世界正在崩塌。",
						"french": "On dirait que le monde s'effondre.",
						"spanish": "Parece que el mundo se está desmoronando.",
						"vietnamese": "Cảm giác như thế giới đang sụp đổ.",
						"thai": "รู้สึกเหมือนโลกกำลังพังทลาย",
						"hindi": "लगता है दुनिया बिखर रही है।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "anuk",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이 길을 계속 가면… 되돌릴 수 없을지도 몰라.",
						"english": "If we continue down this path... there might be no turning back.",
						"japanese": "この道を突き進めば…もう引き返せないかもしれない。",
						"chinese": "如果继续走这条路…可能就无法回头了。",
						"french": "Si nous continuons sur cette voie... il n'y aura peut-être pas de retour en arrière.",
						"spanish": "Si seguimos por este camino... podría no haber vuelta atrás.",
						"vietnamese": "Nếu cứ tiếp tục con đường này... có thể sẽ không thể quay lại được nữa.",
						"thai": "ถ้ายังไปต่อทางนี้... อาจจะกลับตัวไม่ได้อีกแล้ว",
						"hindi": "अगर हम इसी रास्ते पर चलते रहे... तो शायद कोई वापसी नहीं होगी।"
					}
				},
				{
					"content": {
						"korean": "상관없어. 멈출 수 없어.",
						"english": "It doesn't matter. I can't stop.",
						"japanese": "構わない。止められない。",
						"chinese": "无所谓。我不能停下。",
						"french": "Peu importe. Je ne peux pas m'arrêter.",
						"spanish": "No importa. No puedo parar.",
						"vietnamese": "Không sao cả. Không thể dừng lại.",
						"thai": "ไม่เป็นไร. หยุดไม่ได้แล้ว.",
						"hindi": "कोई फर्क नहीं पड़ता। मैं रुक नहीं सकता।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 앞을 가로막았다.",
						"english": "A colossal shadow blocked the path.",
						"japanese": "巨大な影が道を阻んだ。",
						"chinese": "一个巨大的身影挡住了去路。",
						"french": "Une ombre colossale bloqua le chemin.",
						"spanish": "Una sombra colosal bloqueó el camino.",
						"vietnamese": "Một bóng đen khổng lồ chặn đường.",
						"thai": "เงาขนาดยักษ์ขวางทางอยู่",
						"hindi": "एक विशाल छाया ने रास्ता रोक दिया।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "어리석은 필멸자여. 너의 시간은 여기까지다.",
						"english": "Foolish mortal. Your time ends here.",
						"japanese": "愚かなる定命の者よ。お前の時間はここまでだ。",
						"chinese": "愚蠢的凡人。你的时间到此为止了。",
						"french": "Mortel insensé. Ton temps s'arrête ici.",
						"spanish": "Mortal estúpido. Tu tiempo termina aquí.",
						"vietnamese": "Phàm nhân ngu xuẩn. Thời gian của ngươi kết thúc tại đây.",
						"thai": "เจ้ามนุษย์ผู้โง่เขลา. เวลาของเจ้าหมดลงแค่นี้.",
						"hindi": "मूर्ख नश्वर प्राणी। तुम्हारा समय यहीं समाप्त होता है।"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "네가 이 모든 혼란을 만든 건가?",
						"english": "Did you cause all this chaos?",
						"japanese": "この混乱は、お前が引き起こしたのか？",
						"chinese": "这场混乱是你造成的吗？",
						"french": "C'est toi qui as causé tout ce chaos ?",
						"spanish": "¿Fuiste tú quien causó todo este caos?",
						"vietnamese": "Ngươi đã gây ra tất cả sự hỗn loạn này sao?",
						"thai": "เจ้าเป็นคนก่อความวุ่นวายทั้งหมดนี้หรือ?",
						"hindi": "क्या तुमने यह सब अराजकता पैदा की है?"
					},
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "감히 {random_boss}의 뜻을 거스르려는가.",
						"english": "Do you dare defy the will of {random_boss}?",
						"japanese": "敢えて{random_boss}の意思に逆らうつもりか？",
						"chinese": "竟敢违抗{random_boss}的旨意？",
						"french": "Oserez-vous défier la volonté de {random_boss} ?",
						"spanish": "¿Te atreves a desafiar la voluntad de {random_boss}?",
						"vietnamese": "Ngươi dám chống lại ý muốn của {random_boss} sao?",
						"thai": "กล้าดียังไงถึงขัดขืนเจตจำนงของ{random_boss}?",
						"hindi": "तुम {random_boss} की इच्छा का विरोध करने की हिम्मत कैसे करते हो?"
					}
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "angry",
					"content": {
						"korean": "너의 시간은… 여기서 끝난다.",
						"english": "Your time... ends here.",
						"japanese": "お前の時間も…ここで終わりだ。",
						"chinese": "你的时间……到此为止。",
						"french": "Ton temps... se termine ici.",
						"spanish": "Tu tiempo... termina aquí.",
						"vietnamese": "Thời gian của ngươi... kết thúc tại đây.",
						"thai": "เวลาของเจ้า... จบลงแค่นี้",
						"hindi": "तुम्हारा समय... यहीं समाप्त होता है।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "아직… 포기하지 않아.",
						"english": "I won't give up... yet.",
						"japanese": "まだ…諦めない。",
						"chinese": "我还…不会放弃。",
						"french": "Je n'abandonne pas... encore.",
						"spanish": "Aún no... no me rendiré.",
						"vietnamese": "Ta vẫn... chưa bỏ cuộc.",
						"thai": "ยัง... ไม่ยอมแพ้",
						"hindi": "अभी तक... मैंने हार नहीं मानी है।"
					},
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "크로노스 리버서는… 이제 깨어날 것이다. 너의 손으로.",
						"english": "The Chronos Reverser... will now awaken. By your hand.",
						"japanese": "クロノスリバーサーは…今、目覚めるだろう。お前の手によって。",
						"chinese": "计时回溯者……即将觉醒。由你之手。",
						"french": "Le Chronos Reverser... va maintenant s'éveiller. Par ta main.",
						"spanish": "El Reversor de Cronos... ahora despertará. Por tu mano.",
						"vietnamese": "Chronos Reverser... giờ sẽ thức tỉnh. Bởi bàn tay ngươi.",
						"thai": "Chronos Reverser... บัดนี้จะตื่นขึ้นมา ด้วยมือของเจ้า",
						"hindi": "क्रोनोस रिवर्सर... अब जागृत होगा। तुम्हारे हाथों से।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "random_boss"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "무슨 소리야?",
						"english": "What do you mean?",
						"japanese": "どういうことだ？",
						"chinese": "什么意思？",
						"french": "Que voulez-vous dire ?",
						"spanish": "¿Qué quieres decir?",
						"vietnamese": "Ý ngươi là sao?",
						"thai": "หมายความว่าอะไร?",
						"hindi": "तुम्हारा क्या मतलब है?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "쓰러진 적의 잔해 속에서 새로운 길이 열렸다.",
						"english": "A new path opened amidst the fallen enemy's wreckage.",
						"japanese": "倒れた敵の残骸の中から、新しい道が開かれた。",
						"chinese": "在倒下的敌人残骸中，新的道路已开启。",
						"french": "Un nouveau chemin s'est ouvert au milieu des débris de l'ennemi vaincu.",
						"spanish": "Un nuevo camino se abrió entre los escombros del enemigo caído.",
						"vietnamese": "Một con đường mới đã mở ra giữa đống đổ nát của kẻ thù đã gục ngã.",
						"thai": "เส้นทางใหม่ได้เปิดออกท่ามกลางซากปรักหักพังของศัตรูที่ล้มลง",
						"hindi": "गिरे हुए दुश्मन के मलबे के बीच एक नया रास्ता खुल गया।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "시간을 잃은 아이들의 숲으로 향하는 길이었다.",
						"english": "It was the path to the Forest of Lost Children.",
						"japanese": "それは、時間を失った子供たちの森へと続く道だった。",
						"chinese": "那是通往失落孩童之森的道路。",
						"french": "C'était le chemin vers la Forêt des Enfants Perdus.",
						"spanish": "Era el camino hacia el Bosque de los Niños Perdidos.",
						"vietnamese": "Đó là con đường dẫn đến Rừng trẻ thơ lạc lối.",
						"thai": "มันคือเส้นทางสู่ป่าแห่งเด็กหลงเวลา",
						"hindi": "यह खोए हुए बच्चों के जंगल का रास्ता था।"
					},
					"type": "speech",
					"speaker": "narrator"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"벨루스의 시계탑이 무너졌다.",
			"시간의 파편들이 눈처럼 흩날렸다.",
			"세상은 예측할 수 없는 혼란에 빠졌다.",
			"여기, 잔해 속에서 모든 것이 시작된다."
		],
		"english": [
			"Bellus's Clock Tower has fallen.",
			"Shards of time scattered like snow.",
			"The world plunged into unpredictable chaos.",
			"Here, amidst the debris, everything begins."
		],
		"japanese": [
			"ベルスの時計塔が崩れ落ちた。",
			"時の破片が雪のように舞い散った。",
			"世界は予測不能な混乱に陥った。",
			"ここ、瓦礫の中で全てが始まる。"
		],
		"chinese": [
			"贝鲁斯的钟楼倒塌了。",
			"时间碎片如雪般散落。",
			"世界陷入了不可预测的混乱。",
			"在这里，在废墟中，一切都开始了。"
		],
		"french": [
			"La Tour de l'Horloge de Bellus est tombée.",
			"Des éclats de temps se sont dispersés comme de la neige.",
			"Le monde a plongé dans un chaos imprévisible.",
			"Ici, au milieu des décombres, tout commence."
		],
		"spanish": [
			"La Torre del Reloj de Bellus ha caído.",
			"Fragmentos de tiempo se dispersaron como nieve.",
			"El mundo se sumió en un caos impredecible.",
			"Aquí, entre los escombros, todo comienza."
		],
		"vietnamese": [
			"Tháp đồng hồ Bellus đã sụp đổ.",
			"Những mảnh thời gian tan tác như tuyết.",
			"Thế giới chìm vào hỗn loạn không thể đoán trước.",
			"Tại đây, giữa đống đổ nát, mọi thứ bắt đầu."
		],
		"thai": [
			"หอนาฬิกาของเบลลัสได้พังทลายลงแล้ว",
			"เศษเสี้ยวแห่งเวลากระจัดกระจายราวกับหิมะ",
			"โลกจมดิ่งสู่ความโกลาหลที่คาดเดาไม่ได้",
			"ที่นี่ ท่ามกลางซากปรักหักพัง ทุกสิ่งเริ่มต้นขึ้น"
		],
		"hindi": [
			"बेलुस का घंटाघर गिर गया है।",
			"समय के टुकड़े बर्फ़ की तरह बिखर गए।",
			"दुनिया अप्रत्याशित अराजकता में डूब गई।",
			"यहाँ, मलबे के बीच, सब कुछ शुरू होता है।"
		]
	}
} as const;
