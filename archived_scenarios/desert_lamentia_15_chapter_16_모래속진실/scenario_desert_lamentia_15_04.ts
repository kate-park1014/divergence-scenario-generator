export const scenario_desert_lamentia_15_04 = {
	"scenario_id": "desert_lamentia_15_04",
	"order": 4,
	"act": "rising",
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
	"prologue": {
		"korean": [
			"사막의 속삭임은 언제나 달콤했다.",
			"거짓된 희망에 홀려 모든 것을 바쳤다.",
			"아미르. 그도 예외는 아니었다.",
			"이제 남은 것은 절규뿐. 그리고 알 수 없는 슬픔의 노래."
		],
		"english": [
			"The desert's whispers were always sweet.",
			"Entranced by false hope, I sacrificed everything.",
			"Amir. He was no exception.",
			"Now, only screams remain. And an unknown song of sorrow."
		],
		"japanese": [
			"砂漠のささやきは、いつも甘かった。",
			"偽りの希望に惑わされ、すべてを捧げた。",
			"アミール。彼も例外ではなかった。",
			"今、残るのは絶叫のみ。そして、知られざる悲しみの歌。"
		],
		"chinese": [
			"沙漠的低语总是那么甜美。",
			"沉迷于虚假的希望，我奉献了一切。",
			"阿米尔。他也不例外。",
			"如今，只剩下绝望的尖叫。以及一首未知的悲伤之歌。"
		],
		"french": [
			"Les murmures du désert étaient toujours doux.",
			"Égaré par un faux espoir, j'ai tout sacrifié.",
			"Amir. Il ne faisait pas exception.",
			"Maintenant, seuls les cris demeurent. Et un chant de tristesse inconnu."
		],
		"spanish": [
			"Los susurros del desierto siempre fueron dulces.",
			"Engañado por una falsa esperanza, lo sacrifiqué todo.",
			"Amir. Él no fue una excepción.",
			"Ahora, solo quedan los gritos. Y una canción de tristeza desconocida."
		],
		"vietnamese": [
			"Lời thì thầm của sa mạc luôn ngọt ngào.",
			"Mê mẩn bởi hy vọng hão huyền, tôi đã hiến dâng tất cả.",
			"Amir. Anh ta cũng không ngoại lệ.",
			"Giờ đây, chỉ còn lại tiếng kêu thét. Và một khúc ca buồn không tên."
		],
		"thai": [
			"เสียงกระซิบของทะเลทรายช่างหอมหวานเสมอ",
			"ลุ่มหลงในความหวังจอมปลอม ฉันสละทุกสิ่ง",
			"อามีร์. เขาก็ไม่มีข้อยกเว้น",
			"ตอนนี้ เหลือเพียงเสียงกรีดร้อง และบทเพลงแห่งความโศกเศร้าที่ไม่รู้จัก"
		],
		"hindi": [
			"रेगिस्तान की फुसफुसाहट हमेशा मधुर थी।",
			"झूठी उम्मीद में खोकर, मैंने सब कुछ न्योछावर कर दिया।",
			"आमिर। वह भी कोई अपवाद नहीं था।",
			"अब, केवल चीखें बची हैं। और दुख का एक अज्ञात गीत।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "메마른 사막에, 죽은 자들의 노래가 흐른다.",
						"english": "In the barren desert, a song of the dead flows.",
						"japanese": "乾いた砂漠に、死者たちの歌が流れる。",
						"chinese": "在贫瘠的沙漠中，亡者的歌声流淌。",
						"french": "Dans le désert aride, un chant des morts s'écoule.",
						"spanish": "En el desierto árido, fluye una canción de los muertos.",
						"vietnamese": "Giữa sa mạc khô cằn, khúc ca của người chết trôi.",
						"thai": "ในทะเลทรายอันแห้งแล้ง บทเพลงแห่งความตายไหลริน",
						"hindi": "बंजर रेगिस्तान में, मृतकों का गीत बहता है।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…들려? 저 슬픈 노래가.",
						"english": "...Do you hear it? That sad song.",
						"japanese": "…聞こえる？ あの悲しい歌が。",
						"chinese": "……听到了吗？那悲伤的歌声。",
						"french": "...Tu l'entends ? Ce chant triste.",
						"spanish": "...¿Lo oyes? Esa canción triste.",
						"vietnamese": "...Nghe thấy không? Khúc ca buồn ấy.",
						"thai": "เ...ได้ยินไหม? เพลงเศร้าเพลงนั้น",
						"hindi": "...क्या तुम सुनते हो? वह दुखद गीत।"
					},
					"emotion": "base"
				},
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "amir"
				},
				{
					"speaker": "amir",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "그게 희망의 노래라고? 거짓말이야!",
						"english": "That's a song of hope? Lies!",
						"japanese": "それが希望の歌だと？嘘だ！",
						"chinese": "那是希望之歌？谎言！",
						"french": "C'est un chant d'espoir ? Mensonges !",
						"spanish": "¿Es una canción de esperanza? ¡Mentiras!",
						"vietnamese": "Đó là khúc ca hy vọng ư? Dối trá!",
						"thai": "นั่นคือเพลงแห่งความหวังเหรอ? โกหก!",
						"hindi": "वह आशा का गीत है? झूठ है!"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "당신은… 아미르?",
						"english": "You are... Amir?",
						"japanese": "あなたは…アミール？",
						"chinese": "你是……阿米尔？",
						"french": "Vous êtes... Amir ?",
						"spanish": "¿Tú eres... Amir?",
						"vietnamese": "Anh là... Amir?",
						"thai": "คุณคือ... อามีร์?",
						"hindi": "तुम हो... आमिर?"
					},
					"speaker": "character_1",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "낡은 폐허에, 노래는 더욱 선명했다.",
						"english": "In the ancient ruins, the song grew clearer.",
						"japanese": "古い廃墟で、歌はさらに鮮明になった。",
						"chinese": "在古老的废墟中，歌声愈发清晰。",
						"french": "Dans les vieilles ruines, le chant était plus clair.",
						"spanish": "En las ruinas antiguas, la canción era aún más clara.",
						"vietnamese": "Trong phế tích cổ xưa, khúc ca càng rõ ràng hơn.",
						"thai": "ในซากปรักหักพังเก่าแก่ บทเพลงยิ่งชัดเจนขึ้น",
						"hindi": "प्राचीन खंडहरों में, गीत और स्पष्ट हो गया।"
					},
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"speaker": "amir",
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "amir",
					"content": {
						"korean": "나는… 그 노래에 홀려 모든 것을 잃었어.",
						"english": "I... was entranced by that song and lost everything.",
						"japanese": "私は…あの歌に魅せられて、すべてを失った。",
						"chinese": "我……被那首歌迷惑，失去了一切。",
						"french": "J'ai... été envoûté par ce chant et j'ai tout perdu.",
						"spanish": "Yo... fui seducido por esa canción y lo perdí todo.",
						"vietnamese": "Tôi... bị khúc ca ấy mê hoặc và mất tất cả.",
						"thai": "ฉัน... หลงใหลในบทเพลงนั้นและสูญเสียทุกสิ่ง",
						"hindi": "मैं... उस गीत से मोहित हो गया और सब कुछ खो दिया।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "무엇을 찾으려 했지?",
						"english": "What were you looking for?",
						"japanese": "何を探していた？",
						"chinese": "你在找什么？",
						"french": "Que cherchais-tu ?",
						"spanish": "¿Qué buscabas?",
						"vietnamese": "Ngươi đang tìm gì?",
						"thai": "เจ้ากำลังมองหาอะไร?",
						"hindi": "तुम क्या ढूंढ रहे थे?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "기적! 이 사막의 끝에 있다는, 헛된 희망을.",
						"english": "A miracle! A vain hope, said to be at the end of this desert.",
						"japanese": "奇跡！この砂漠の果てにあるという、無駄な希望を。",
						"chinese": "奇迹！在这沙漠的尽头，那徒劳的希望。",
						"french": "Un miracle ! Un espoir vain, qui se trouverait au bout de ce désert.",
						"spanish": "¡Un milagro! Una vana esperanza, que decían que estaba al final de este desierto.",
						"vietnamese": "Một phép màu! Một hy vọng hão huyền, được cho là ở cuối sa mạc này.",
						"thai": "ปาฏิหาริย์! ความหวังที่ไร้ประโยชน์ ที่ว่ากันว่าอยู่สุดขอบทะเลทรายนี้",
						"hindi": "एक चमत्कार! इस रेगिस्तान के अंत में एक व्यर्थ आशा।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "amir"
				},
				{
					"type": "speech",
					"speaker": "character_2",
					"content": {
						"korean": "…그 노래가 희망의 유물이라고?",
						"english": "...That song is a relic of hope?",
						"japanese": "…その歌が希望の遺物だと？",
						"chinese": "……那首歌是希望的遗物？",
						"french": "...Cette chanson est une relique d'espoir ?",
						"spanish": "...¿Esa canción es una reliquia de esperanza?",
						"vietnamese": "...Bài hát đó là di vật của hy vọng ư?",
						"thai": "...เพลงนั้นคือวัตถุโบราณแห่งความหวังเหรอ?",
						"hindi": "...क्या वह गाना आशा का अवशेष है?"
					},
					"emotion": "base"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "환상은 깊어졌다. 현실은 더욱 잔혹했다.",
						"english": "The illusion deepened. Reality grew crueler.",
						"japanese": "幻想は深まった。現実はさらに残酷だった。",
						"chinese": "幻想加深了。现实更加残酷。",
						"french": "L'illusion s'est approfondie. La réalité était encore plus cruelle.",
						"spanish": "La ilusión se hizo más profunda. La realidad era aún más cruel.",
						"vietnamese": "Ảo ảnh sâu sắc hơn. Thực tế tàn khốc hơn.",
						"thai": "ภาพลวงตาหนักขึ้น ความจริงโหดร้ายยิ่งกว่า",
						"hindi": "भ्रम गहरा हो गया। वास्तविकता और भी क्रूर थी।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"action": "enter",
					"type": "direction",
					"speaker": "amir",
					"duration_ms": 500,
					"spot": [
						3,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "amir",
					"content": {
						"korean": "시스템이 만들어낸 환상에… 나는 파멸했어.",
						"english": "In the illusion created by the system... I was ruined.",
						"japanese": "システムが生み出した幻想に…私は破滅した。",
						"chinese": "在系统创造的幻象中……我毁灭了。",
						"french": "Dans l'illusion créée par le système... j'ai été anéanti.",
						"spanish": "En la ilusión creada por el sistema... fui destruido.",
						"vietnamese": "Trong ảo ảnh do hệ thống tạo ra... Tôi đã bị hủy hoại.",
						"thai": "ในภาพลวงตาที่ระบบสร้างขึ้น... ฉันถูกทำลาย",
						"hindi": "सिस्टम द्वारा बनाए गए भ्रम में... मैं बर्बाद हो गया।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "시스템… 그게 사람들을 속인 거야?",
						"english": "The system... It tricked people?",
						"japanese": "システム…それが人々を欺いたのか？",
						"chinese": "系统……它欺骗了人们？",
						"french": "Le système... C'est lui qui a trompé les gens ?",
						"spanish": "¿El sistema... engañó a la gente?",
						"vietnamese": "Hệ thống... Nó lừa dối mọi người ư?",
						"thai": "ระบบ... มันหลอกลวงผู้คนเหรอ?",
						"hindi": "सिस्टम... क्या इसने लोगों को धोखा दिया?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "그래! 내 가족, 내 삶… 다 가져갔어.",
						"english": "Yes! It took my family, my life... everything.",
						"japanese": "そうだ！私の家族、私の人生…すべてを奪った。",
						"chinese": "是的！我的家人，我的生活……它都夺走了。",
						"french": "Oui ! Il a pris ma famille, ma vie... tout.",
						"spanish": "¡Sí! Se llevó a mi familia, mi vida... todo.",
						"vietnamese": "Đúng vậy! Nó đã lấy đi gia đình, cuộc sống của tôi... tất cả.",
						"thai": "ใช่! มันเอาครอบครัว ชีวิตของฉัน... ไปทั้งหมด",
						"hindi": "हाँ! इसने मेरे परिवार, मेरे जीवन... सब कुछ छीन लिया।"
					},
					"type": "speech",
					"speaker": "amir"
				},
				{
					"content": {
						"korean": "우리가… 멈춰야 해.",
						"english": "We... must stop it.",
						"japanese": "私たちが…止めなければならない。",
						"chinese": "我们……必须阻止它。",
						"french": "Nous... devons l'arrêter.",
						"spanish": "Nosotros... debemos detenerlo.",
						"vietnamese": "Chúng ta... phải ngăn chặn nó.",
						"thai": "เรา... ต้องหยุดมัน",
						"hindi": "हमें... इसे रोकना होगा।"
					},
					"emotion": "base",
					"speaker": "character_3",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "절규는 고통으로, 고통은 분노로 변했다.",
						"english": "Screams turned to pain, pain to anger.",
						"japanese": "絶叫は苦痛に、苦痛は怒りに変わった。",
						"chinese": "尖叫变成了痛苦，痛苦变成了愤怒。",
						"french": "Les cris se sont transformés en douleur, la douleur en colère.",
						"spanish": "Los gritos se convirtieron en dolor, el dolor en ira.",
						"vietnamese": "Tiếng thét biến thành nỗi đau, nỗi đau thành sự tức giận.",
						"thai": "เสียงกรีดร้องกลายเป็นความเจ็บปวด ความเจ็บปวดกลายเป็นความโกรธ",
						"hindi": "चीखें दर्द में बदल गईं, दर्द गुस्से में।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "amir",
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						4
					],
					"duration_ms": 500
				},
				{
					"speaker": "amir",
					"type": "speech",
					"content": {
						"korean": "이 고통은… 끝나지 않아. 내가 그랬듯이.",
						"english": "This pain... won't end. Just like I did.",
						"japanese": "この苦痛は…終わらない。私がそうだったように。",
						"chinese": "这痛苦……不会结束。就像我一样。",
						"french": "Cette douleur... ne finira pas. Comme moi.",
						"spanish": "Este dolor... no terminará. Como yo.",
						"vietnamese": "Nỗi đau này... sẽ không kết thúc. Giống như tôi đã từng.",
						"thai": "ความเจ็บปวดนี้... จะไม่สิ้นสุด เช่นเดียวกับฉัน",
						"hindi": "यह दर्द... खत्म नहीं होगा। जैसे मैं था।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "아미르… 희생은 충분해.",
						"english": "Amir... Enough sacrifice.",
						"japanese": "アミール…犠牲はもう十分だ。",
						"chinese": "阿米尔……牺牲已经够了。",
						"french": "Amir... Assez de sacrifices.",
						"spanish": "Amir... Suficiente sacrificio.",
						"vietnamese": "Amir... Đủ hy sinh rồi.",
						"thai": "อามีร์... การเสียสละเพียงพอแล้ว",
						"hindi": "अमीर... बलिदान काफी हो गया है।"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "내 절규가… 들리나? 이 모든 희생자들의 외침이.",
						"english": "Do you hear my screams? The cries of all these victims.",
						"japanese": "私の絶叫が…聞こえるか？この犠牲者たちの叫びが。",
						"chinese": "你听到我的尖叫了吗？所有这些受害者的呼喊。",
						"french": "Entends-tu mes cris ? Les plaintes de toutes ces victimes.",
						"spanish": "¿Escuchas mis gritos? Los lamentos de todas estas víctimas.",
						"vietnamese": "Ngươi có nghe thấy tiếng thét của ta không? Tiếng kêu của tất cả những nạn nhân này.",
						"thai": "เจ้าได้ยินเสียงกรีดร้องของข้าไหม? เสียงร่ำไห้ของเหยื่อทั้งหมดนี้",
						"hindi": "क्या तुम्हें मेरी चीखें सुनाई देती हैं? इन सभी पीड़ितों की पुकार।"
					},
					"speaker": "amir",
					"type": "speech"
				},
				{
					"content": {
						"korean": "우리가… 끝내줄게.",
						"english": "We'll... end this.",
						"japanese": "私たちが…終わらせてやる。",
						"chinese": "我们……会结束这一切。",
						"french": "Nous... allons y mettre fin.",
						"spanish": "Nosotros... lo terminaremos.",
						"vietnamese": "Chúng ta... sẽ kết thúc nó.",
						"thai": "เราจะ... จบมันเอง",
						"hindi": "हम... इसे खत्म करेंगे।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_4"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "…겨우 이 정도? 시스템은 영원하다. {random_boss}는 다시 온다.",
						"english": "...Is that all? The system is eternal. {random_boss} will return.",
						"japanese": "…たったこれだけか？システムは永遠だ。{random_boss}は再び現れる。",
						"chinese": "……就这点本事吗？系统是永恒的。{random_boss}会再次降临。",
						"french": "...Ce n'est que ça ? Le système est éternel. {random_boss} reviendra.",
						"spanish": "¿...Solo esto? El sistema es eterno. {random_boss} regresará.",
						"vietnamese": "...Chỉ có thế thôi sao? Hệ thống là vĩnh cửu. {random_boss} sẽ trở lại.",
						"thai": "...แค่นี้เองหรือ? ระบบเป็นนิรันดร์ {random_boss} จะกลับมาอีกครั้ง",
						"hindi": "...बस इतना ही? सिस्टम शाश्वत है। {random_boss} फिर से आएगा।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "아니. 이 비극을 끝낼 거야.",
						"english": "No. We will end this tragedy.",
						"japanese": "いや。この悲劇を終わらせる。",
						"chinese": "不。我们会结束这场悲剧。",
						"french": "Non. Nous mettrons fin à cette tragédie.",
						"spanish": "No. Pondremos fin a esta tragedia.",
						"vietnamese": "Không. Chúng ta sẽ kết thúc bi kịch này.",
						"thai": "ไม่ เราจะยุติโศกนาฏกรรมนี้",
						"hindi": "नहीं। हम इस त्रासदी को खत्म करेंगे।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "절규하는 혼은 잠잠해졌다. 그러나 사막의 진실은, 아직 깊은 곳에 있었다.",
						"english": "The screaming souls fell silent. Yet the desert's truth lay still, deep within.",
						"japanese": "絶叫する魂は静まった。しかし砂漠の真実は、まだ深き場所に眠っていた。",
						"chinese": "尖叫的灵魂归于平静。然而沙漠的真相，依然深藏不底。",
						"french": "Les âmes hurlantes se turent. Pourtant, la vérité du désert reposait encore, enfouie profondément.",
						"spanish": "Las almas que gritaban callaron. Sin embargo, la verdad del desierto aún yacía, en lo más profundo.",
						"vietnamese": "Những linh hồn gào thét im lặng. Nhưng sự thật của sa mạc vẫn nằm sâu bên trong.",
						"thai": "วิญญาณที่กรีดร้องสงบลง ทว่าความจริงของทะเลทรายยังคงซ่อนเร้นอยู่ลึกๆ",
						"hindi": "चीखती हुई आत्माएँ शांत हो गईं। फिर भी रेगिस्तान का सच, अभी भी गहराई में छिपा हुआ था।"
					},
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "오래된 노래가 멈춘 곳. 거대한 그림자가 나타났다.",
						"english": "Where the old song ceased, a colossal shadow appeared.",
						"japanese": "古き歌が止んだ場所。巨大な影が現れた。",
						"chinese": "古老的歌声停止之处。一道巨大的阴影出现了。",
						"french": "Là où l'ancienne chanson s'est tue, une ombre colossale apparut.",
						"spanish": "Donde la antigua canción cesó, una sombra colosal apareció.",
						"vietnamese": "Nơi bài ca cũ ngừng vang, một bóng đen khổng lồ xuất hiện.",
						"thai": "ที่ที่เพลงเก่าหยุดลง เงาขนาดมหึมาได้ปรากฏขึ้น",
						"hindi": "जहाँ पुराना गीत थमा, एक विशाल छाया प्रकट हुई।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "어리석은 유랑민들. 희망은 환상일 뿐이다.",
						"english": "Foolish wanderers. Hope is but an illusion.",
						"japanese": "愚かなる流浪の民よ。希望はただの幻想に過ぎない。",
						"chinese": "愚蠢的流浪者。希望不过是幻象。",
						"french": "Stupides vagabonds. L'espoir n'est qu'une illusion.",
						"spanish": "Necios errantes. La esperanza no es más que una ilusión.",
						"vietnamese": "Những kẻ lang thang ngu ngốc. Hy vọng chỉ là một ảo ảnh.",
						"thai": "ผู้พเนจรโง่เขลา ความหวังเป็นเพียงภาพลวงตา",
						"hindi": "मूर्ख खानाबदोशों। आशा केवल एक भ्रम है।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "닥쳐! 네가 만든 고통이야!",
						"english": "Silence! This pain is your making!",
						"japanese": "黙れ！この苦痛はお前が作ったものだ！",
						"chinese": "闭嘴！这痛苦是你造成的！",
						"french": "Tais-toi ! Cette douleur, c'est toi qui l'as créée !",
						"spanish": "¡Cállate! ¡Este dolor es obra tuya!",
						"vietnamese": "Câm mồm! Nỗi đau này là do ngươi tạo ra!",
						"thai": "หุบปาก! ความเจ็บปวดนี้เป็นฝีมือของเจ้า!",
						"hindi": "खामोश! यह दर्द तुम्हारी करतूत है!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "나는 그저 시스템의 대리자. 파멸은 너희 선택.",
						"english": "I am merely the system's agent. Your destruction is your choice.",
						"japanese": "私はただシステムの代理人に過ぎない。破滅はお前たちの選択だ。",
						"chinese": "我不过是系统的代理人。毁灭是你们的选择。",
						"french": "Je ne suis que l'agent du système. Votre destruction est votre choix.",
						"spanish": "Solo soy el agente del sistema. Vuestra destrucción es vuestra elección.",
						"vietnamese": "Ta chỉ là đặc vụ của hệ thống. Sự hủy diệt là lựa chọn của các ngươi.",
						"thai": "ฉันเป็นแค่ตัวแทนของระบบ ความหายนะคือทางเลือกของพวกเจ้า",
						"hindi": "मैं केवल सिस्टम का एजेंट हूँ। तुम्हारा विनाश तुम्हारी पसंद है।"
					},
					"type": "speech",
					"speaker": "random_boss"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "어둠이 모든 것을 삼켰다. 사막의 노래는 계속된다.",
						"english": "Darkness swallowed everything. The desert's song continues.",
						"japanese": "闇がすべてを飲み込んだ。砂漠の歌は続く。",
						"chinese": "黑暗吞噬了一切。沙漠之歌仍在继续。",
						"french": "Les ténèbres ont tout englouti. Le chant du désert continue.",
						"spanish": "La oscuridad lo engulló todo. La canción del desierto continúa.",
						"vietnamese": "Bóng tối nuốt chửng mọi thứ. Khúc ca sa mạc vẫn tiếp diễn.",
						"thai": "ความมืดกลืนกินทุกสิ่ง เพลงแห่งทะเลทรายยังคงดำเนินต่อไป",
						"hindi": "अंधेरे ने सब कुछ निगल लिया। रेगिस्तान का गीत जारी है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "하찮은 저항. 결국 너도 희망에 부서질 운명.",
						"english": "Futile resistance. In the end, you too are destined to be broken by hope.",
						"japanese": "無駄な抵抗。結局、お前も希望に打ち砕かれる運命だ。",
						"chinese": "徒劳的抵抗。最终，你也将被希望击碎。",
						"french": "Résistance futile. Au final, toi aussi es destiné à être brisé par l'espoir.",
						"spanish": "Resistencia inútil. Al final, tú también estás destinado a ser destrozado por la esperanza.",
						"vietnamese": "Kháng cự vô ích. Cuối cùng, ngươi cũng sẽ bị hy vọng nghiền nát.",
						"thai": "การต่อต้านที่ไร้ประโยชน์ ในที่สุดเจ้าก็ต้องแตกสลายด้วยความหวัง",
						"hindi": "व्यर्थ का प्रतिरोध। अंततः, तुम भी आशा से टूट जाओगे।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "아직 끝나지 않았어! 반드시…!",
						"english": "It's not over yet! I must...!",
						"japanese": "まだ終わってない！必ず…！",
						"chinese": "还没结束！我一定要……！",
						"french": "Ce n'est pas encore fini ! Je dois... !",
						"spanish": "¡Aún no ha terminado! ¡Debo...!",
						"vietnamese": "Chưa kết thúc đâu! Nhất định phải...!",
						"thai": "ยังไม่จบ! ฉันต้อง...!",
						"hindi": "अभी खत्म नहीं हुआ है! मुझे अवश्य...!"
					},
					"emotion": "angry"
				}
			]
		}
	]
} as const;
