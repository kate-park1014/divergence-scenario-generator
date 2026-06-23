export const scenario_forest_florazonia_9_02 = {
	"scenario_id": "forest_florazonia_9_02",
	"order": 2,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"briar": {
			"id": "mon_21f92820-190e-4d08-a75c-5d2c0b6d0a6b",
			"name": {
				"korean": "브라이어",
				"english": "Briar",
				"japanese": "ブライア",
				"chinese": "布莱尔",
				"french": "Briar",
				"spanish": "Briar",
				"vietnamese": "Briar",
				"thai": "ไบรอา",
				"hindi": "ब्रायर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/41fb431e-57e0-45e0-dde6-1a1f02c01200/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/dd89dff7-88ed-4444-28d8-5aaa85bd4e00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"숲은 깊고 오래된 비밀을 품고 있었다.",
			"미지의 속삭임이 탐험대를 더 깊은 곳으로 이끌었다.",
			"고대 의식, 불완전한 차원. 모든 것이 시작될 징조였다."
		],
		"english": [
			"The forest held deep, ancient secrets.",
			"Unknown whispers drew the expedition deeper.",
			"Ancient rituals, an incomplete dimension. All signs of an impending beginning."
		],
		"japanese": [
			"森は深く、古の秘密を抱いていた。",
			"未知の囁きが探検隊をより深い場所へと誘った。",
			"古代の儀式、不完全な次元。全てが始まる兆候だった。"
		],
		"chinese": [
			"森林深藏着古老的秘密。",
			"未知的低语引导探险队深入。",
			"古老仪式，不完整的次元。一切都预示着开始。"
		],
		"french": [
			"La forêt gardait de profonds secrets ancestraux.",
			"Des murmures inconnus attirèrent l'expédition plus profondément.",
			"Rituels antiques, une dimension incomplète. Tous les signes d'un début imminent."
		],
		"spanish": [
			"El bosque guardaba profundos y antiguos secretos.",
			"Susurros desconocidos guiaron a la expedición más profundo.",
			"Antiguos rituales, una dimensión incompleta. Todos eran signos de un comienzo inminente."
		],
		"vietnamese": [
			"Khu rừng ôm ấp những bí mật cổ xưa, sâu thẳm.",
			"Những lời thì thầm bí ẩn dẫn đoàn thám hiểm vào sâu hơn.",
			"Nghi thức cổ xưa, chiều không gian không hoàn chỉnh. Mọi thứ đều là điềm báo cho sự khởi đầu."
		],
		"thai": [
			"ป่าแห่งนี้เก็บซ่อนความลับเก่าแก่ล้ำลึก",
			"เสียงกระซิบที่ไม่รู้จักนำทางคณะสำรวจให้ลึกเข้าไปอีก",
			"พิธีกรรมโบราณ มิติที่ไม่สมบูรณ์ นี่คือลางบอกเหตุของการเริ่มต้น"
		],
		"hindi": [
			"जंगल में गहरे, पुराने रहस्य छिपे थे।",
			"अनजानी फुसफुसाहटों ने अभियान दल को और गहराई तक खींचा।",
			"प्राचीन अनुष्ठान, एक अधूरा आयाम। सब कुछ एक आसन्न शुरुआत के संकेत थे।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "숲 깊숙이 들어갈수록, 고대 마나의 흐름이 강해졌다.",
						"english": "The deeper into the forest, the stronger the ancient mana flow became.",
						"japanese": "森の奥へ進むほど、古の魔力の流れが強くなった。",
						"chinese": "越深入森林，古老魔力的流动越强。",
						"french": "Plus on s'enfonçait dans la forêt, plus le flux de mana ancien devenait puissant.",
						"spanish": "Cuanto más se adentraban en el bosque, más fuerte se volvía el flujo de maná antiguo.",
						"vietnamese": "Càng đi sâu vào rừng, dòng chảy mana cổ đại càng mạnh.",
						"thai": "ยิ่งลึกเข้าไปในป่า กระแสมานาโบราณยิ่งเข้มข้นขึ้น",
						"hindi": "जंगल में जितना गहरा जाते, प्राचीन माना का प्रवाह उतना ही प्रबल होता गया।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이 이질적인 기운… 뭘까.",
						"english": "This peculiar energy… what could it be?",
						"japanese": "この異質な気配…一体何だろう。",
						"chinese": "这股异样的气息…是什么？",
						"french": "Cette énergie étrange… qu'est-ce que c'est ?",
						"spanish": "Esta energía extraña… ¿qué será?",
						"vietnamese": "Năng lượng kỳ lạ này... là gì vậy?",
						"thai": "พลังงานแปลกประหลาดนี้… มันคืออะไรกันนะ",
						"hindi": "यह अजीब ऊर्जा… क्या हो सकती है?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "briar",
					"type": "direction",
					"spot": [
						3,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "briar",
					"content": {
						"korean": "너희가 찾는 답은… 고대의 기록 속에 있어.",
						"english": "The answers you seek… lie within ancient records.",
						"japanese": "お前たちが探す答えは…古の記録の中にある。",
						"chinese": "你们寻找的答案…在古老的记录中。",
						"french": "Les réponses que vous cherchez… se trouvent dans les anciens registres.",
						"spanish": "Las respuestas que buscáis… están en los registros antiguos.",
						"vietnamese": "Câu trả lời mà các ngươi tìm kiếm... nằm trong những ghi chép cổ xưa.",
						"thai": "คำตอบที่พวกเจ้าตามหา… อยู่ในบันทึกโบราณ",
						"hindi": "जिन जवाबों को तुम खोज रहे हो… वे प्राचीन अभिलेखों में हैं।"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "숲은 오래전부터 아파하고 있었지.",
						"english": "The forest has been suffering for a long time.",
						"japanese": "森はずっと昔から苦しんでいたのだ。",
						"chinese": "森林早已遭受痛苦。",
						"french": "La forêt souffre depuis longtemps.",
						"spanish": "El bosque ha estado sufriendo desde hace mucho tiempo.",
						"vietnamese": "Rừng đã đau khổ từ rất lâu rồi.",
						"thai": "ป่าแห่งนี้เจ็บปวดมานานแล้ว",
						"hindi": "जंगल बहुत पहले से पीड़ित था।"
					},
					"speaker": "briar",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "briar",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						4
					]
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이 기이한 현상은… 불완전한 차원 의식의 흔적이야.",
						"english": "This strange phenomenon… is a trace of an incomplete dimensional ritual.",
						"japanese": "この奇妙な現象は…不完全な次元の儀式の痕跡だ。",
						"chinese": "这种奇怪的现象…是不完整的次元仪式的痕迹。",
						"french": "Ce phénomène étrange… est la trace d'un rituel dimensionnel incomplet.",
						"spanish": "Este extraño fenómeno… es un rastro de un ritual dimensional incompleto.",
						"vietnamese": "Hiện tượng kỳ lạ này… là dấu vết của một nghi thức chiều không gian không hoàn chỉnh.",
						"thai": "ปรากฏการณ์ประหลาดนี้… คือร่องรอยของพิธีกรรมมิติที่ไม่สมบูรณ์",
						"hindi": "यह अजीब घटना… एक अधूरे आयामी अनुष्ठान का निशान है।"
					},
					"speaker": "briar",
					"type": "speech"
				},
				{
					"content": {
						"korean": "차원 의식? 그런 게 가능하다고?",
						"english": "Dimensional ritual? Is such a thing even possible?",
						"japanese": "次元の儀式？そんなことが可能なのか？",
						"chinese": "次元仪式？那可能吗？",
						"french": "Un rituel dimensionnel ? C'est possible, ça ?",
						"spanish": "¿Un ritual dimensional? ¿Es eso posible?",
						"vietnamese": "Nghi thức chiều không gian? Điều đó có thể sao?",
						"thai": "พิธีกรรมมิติ? เรื่องแบบนั้นเป็นไปได้ด้วยเหรอ?",
						"hindi": "आयामी अनुष्ठान? क्या ऐसा संभव है?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_1"
				},
				{
					"speaker": "briar",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "고대 부족은 시공간을 다루려 했어. 그러나… 실패했지.",
						"english": "The ancient tribe tried to manipulate space and time. But… they failed.",
						"japanese": "古代の部族は時空を操ろうとした。しかし…失敗した。",
						"chinese": "古老的部落试图掌控时空。但是…他们失败了。",
						"french": "L'ancienne tribu a tenté de manipuler l'espace-temps. Mais… ils ont échoué.",
						"spanish": "La antigua tribu intentó manipular el espacio-tiempo. Pero… fallaron.",
						"vietnamese": "Bộ tộc cổ đại đã cố gắng thao túng không-thời gian. Nhưng… họ đã thất bại.",
						"thai": "ชนเผ่าโบราณพยายามควบคุมกาลอวกาศ แต่… พวกเขาล้มเหลว",
						"hindi": "प्राचीन जनजाति ने समय और स्थान को बदलने की कोशिश की। लेकिन… वे विफल रहे।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그게 지금 이 숲을 망가뜨리고 있다고?",
						"english": "So that's what's ruining this forest now?",
						"japanese": "それが今、この森を壊しているの？",
						"chinese": "那就是现在正在破坏这片森林的东西吗？",
						"french": "C'est ça qui détruit cette forêt maintenant ?",
						"spanish": "¿Eso es lo que está destruyendo este bosque ahora?",
						"vietnamese": "Đó là thứ đang hủy hoại khu rừng này ư?",
						"thai": "นั่นคือสิ่งที่กำลังทำลายป่านี้อยู่หรือ?",
						"hindi": "क्या वही अब इस जंगल को तबाह कर रहा है?"
					},
					"emotion": "angry"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "숲길을 걷던 중, 알 수 없는 나직한 속삭임이 귓가를 스쳤다.",
						"english": "As I walked the forest path, an unknown, faint whisper brushed my ear.",
						"japanese": "森の道を歩いていると、得体の知れない低い囁きが耳元をかすめた。",
						"chinese": "在林间小径漫步时，一阵未知的低语擦过耳边。",
						"french": "En marchant sur le sentier forestier, un murmure doux et inconnu frôla mon oreille.",
						"spanish": "Mientras caminaba por el sendero del bosque, un susurro suave y desconocido rozó mi oído.",
						"vietnamese": "Khi đang đi trên con đường rừng, một tiếng thì thầm khẽ khàng không rõ từ đâu lướt qua tai.",
						"thai": "ขณะเดินอยู่บนทางป่า เสียงกระซิบแผ่วเบาที่ไม่อาจระบุได้ก็พัดผ่านหูไป",
						"hindi": "वन पथ पर चलते हुए, एक अज्ञात, धीमी फुसफुसाहट मेरे कान से गुजरी।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_2",
					"content": {
						"korean": "방금… 뭔가 들렸어?",
						"english": "Did you just... hear something?",
						"japanese": "今…何か聞こえた？",
						"chinese": "刚才…你听到什么了吗？",
						"french": "Tu as... entendu quelque chose ?",
						"spanish": "¿Acabas de... oír algo?",
						"vietnamese": "Vừa rồi... cậu nghe thấy gì không?",
						"thai": "เมื่อกี้... ได้ยินอะไรไหม?",
						"hindi": "क्या तुमने अभी... कुछ सुना?"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "바람 소리인가? 뭔가… 이질적이야.",
						"english": "Is that the wind? It feels... unnatural.",
						"japanese": "風の音かな？何か…異質だ。",
						"chinese": "是风声吗？感觉有点…异样。",
						"french": "C'est le vent ? Quelque chose... est étranger.",
						"spanish": "¿Es el viento? Algo... es extraño.",
						"vietnamese": "Là tiếng gió sao? Có gì đó... thật lạ lẫm.",
						"thai": "เสียงลมหรือเปล่า? บางอย่าง... มันแปลกไป",
						"hindi": "क्या यह हवा की आवाज़ है? कुछ... अजीब लग रहा है।"
					},
					"speaker": "character_3",
					"type": "speech"
				},
				{
					"action": "enter",
					"type": "direction",
					"speaker": "briar",
					"duration_ms": 500,
					"spot": [
						4,
						2
					]
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "숲의 존재들이 내는 소리 같지만… 조심해. 이건 재앙의 목소리야.",
						"english": "It sounds like the forest's inhabitants, but... be careful. This is the voice of calamity.",
						"japanese": "森の存在たちの声のようだが…気をつけろ。これは災厄の声だ。",
						"chinese": "听起来像是森林生物的声音…但要小心。这是灾厄的声音。",
						"french": "On dirait les voix des êtres de la forêt, mais... sois prudent. C'est la voix de la calamité.",
						"spanish": "Parece la voz de los seres del bosque, pero... ten cuidado. Esta es la voz de la calamidad.",
						"vietnamese": "Nghe như tiếng của những sinh vật trong rừng, nhưng... hãy cẩn thận. Đây là tiếng nói của tai ương.",
						"thai": "เหมือนเสียงของสิ่งมีชีวิตในป่า แต่... ระวัง นี่คือเสียงแห่งหายนะ",
						"hindi": "यह जंगल के प्राणियों की आवाज़ लगती है, लेकिन... सावधान रहो। यह विपत्ति की आवाज़ है।"
					},
					"speaker": "briar",
					"type": "speech"
				},
				{
					"content": {
						"korean": "재앙?",
						"english": "Calamity?",
						"japanese": "災厄？",
						"chinese": "灾厄？",
						"french": "Calamité ?",
						"spanish": "¿Calamidad?",
						"vietnamese": "Tai ương ư?",
						"thai": "หายนะหรือ?",
						"hindi": "विपत्ति?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						3
					],
					"speaker": "briar",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "briar",
					"content": {
						"korean": "의식의 핵심은 이 근처에 있어. 불안정한 에너지가 뿜어져 나오고 있어.",
						"english": "The core of the ritual is nearby. Unstable energy is emanating from it.",
						"japanese": "儀式の核心はこの近くにある。不安定なエネルギーが噴き出している。",
						"chinese": "仪式的核心就在附近。不稳定的能量正在喷涌而出。",
						"french": "Le cœur du rituel est proche. Une énergie instable s'en dégage.",
						"spanish": "El núcleo del ritual está cerca. Una energía inestable está emanando de él.",
						"vietnamese": "Lõi của nghi thức nằm gần đây. Năng lượng bất ổn đang tỏa ra.",
						"thai": "แก่นของพิธีกรรมอยู่ใกล้ๆ นี้ พลังงานที่ไม่เสถียรกำลังพุ่งออกมา",
						"hindi": "अनुष्ठान का केंद्र यहीं पास में है। अस्थिर ऊर्जा उससे निकल रही है।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "우리가 막을 수 있을까?",
						"english": "Can we stop it?",
						"japanese": "私たちが止められるだろうか？",
						"chinese": "我们能阻止它吗？",
						"french": "Pouvons-nous l'arrêter ?",
						"spanish": "¿Podemos detenerlo?",
						"vietnamese": "Chúng ta có thể ngăn chặn nó không?",
						"thai": "เราจะหยุดมันได้ไหม?",
						"hindi": "क्या हम इसे रोक सकते हैं?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "briar",
					"content": {
						"korean": "준비가 안 됐다면… 더 깊이 들어가지 마.",
						"english": "If you're not ready... don't go any deeper.",
						"japanese": "準備ができていないなら…もっと深く入るな。",
						"chinese": "如果还没准备好…就不要再深入了。",
						"french": "Si tu n'es pas prêt... ne va pas plus loin.",
						"spanish": "Si no estás listo... no vayas más profundo.",
						"vietnamese": "Nếu chưa sẵn sàng... đừng đi sâu hơn nữa.",
						"thai": "ถ้ายังไม่พร้อม... อย่าเข้าไปลึกกว่านี้",
						"hindi": "अगर तुम तैयार नहीं हो... तो और अंदर मत जाओ।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "지금이라도 늦지 않았어. 돌아가.",
						"english": "It's not too late. Go back.",
						"japanese": "今ならまだ間に合う。引き返せ。",
						"chinese": "现在还不晚。回去吧。",
						"french": "Il n'est pas trop tard. Retourne-t'en.",
						"spanish": "No es demasiado tarde. Regresa.",
						"vietnamese": "Bây giờ vẫn chưa muộn đâu. Quay lại đi.",
						"thai": "ตอนนี้ยังไม่สายเกินไป กลับไปซะ",
						"hindi": "अभी भी देर नहीं हुई है। वापस जाओ।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "briar"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "그럴 순 없어.",
						"english": "I can't do that.",
						"japanese": "それはできない。",
						"chinese": "我不能那样做。",
						"french": "Je ne peux pas faire ça.",
						"spanish": "No puedo hacer eso.",
						"vietnamese": "Không thể nào.",
						"thai": "ทำแบบนั้นไม่ได้",
						"hindi": "मैं ऐसा नहीं कर सकता।"
					}
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "뒤틀린 마나의 힘이 탐험대를 집어삼켰다.",
						"english": "The power of twisted mana engulfed the expedition.",
						"japanese": "ねじれたマナの力が探検隊を飲み込んだ。",
						"chinese": "扭曲魔力的力量吞噬了探险队。",
						"french": "Le pouvoir du mana tordu engloutit l'expédition.",
						"spanish": "El poder del maná retorcido engulló a la expedición.",
						"vietnamese": "Sức mạnh của mana bị bóp méo đã nuốt chửng đoàn thám hiểm.",
						"thai": "พลังแห่งมานาที่บิดเบี้ยวได้กลืนกินคณะสำรวจ",
						"hindi": "विकृत मन की शक्ति ने अभियान दल को निगल लिया।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "하찮은 것들… 고대 의식의 힘을 알지 못하는군.",
						"english": "Insignificant beings... You do not know the power of the ancient ritual.",
						"japanese": "取るに足らない者たちよ… 古代の儀式の力を知らないようだな。",
						"chinese": "渺小的存在… 你们不了解古代仪式的力量。",
						"french": "Êtres insignifiants… Vous ne connaissez pas le pouvoir de l'ancien rituel.",
						"spanish": "Seres insignificantes… No conocéis el poder del ritual antiguo.",
						"vietnamese": "Những kẻ tầm thường… Các ngươi không biết sức mạnh của nghi lễ cổ xưa.",
						"thai": "พวกไร้ค่า… ไม่รู้จักพลังของพิธีกรรมโบราณ",
						"hindi": "तुच्छ प्राणी… तुम प्राचीन अनुष्ठान की शक्ति नहीं जानते।"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "젠장… 다시… 도전한다!",
						"english": "Damn it... I'll try again!",
						"japanese": "くそ… もう一度… 挑戦する！",
						"chinese": "该死… 再来… 挑战一次！",
						"french": "Zut… Je vais retenter !",
						"spanish": "Maldita sea… ¡Lo intentaré de nuevo!",
						"vietnamese": "Chết tiệt… Ta sẽ… thử lại!",
						"thai": "บ้าเอ๊ย… จะลอง… อีกครั้ง!",
						"hindi": "धिक्कार है… मैं फिर से… कोशिश करूँगा!"
					},
					"emotion": "angry"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "숲의 가장 깊은 곳, 불안정한 에너지가 응축된 공간이었다.",
						"english": "The deepest part of the forest, a space where unstable energy condensed.",
						"japanese": "森の最も深い場所、不安定なエネルギーが凝縮された空間だった。",
						"chinese": "森林最深处，一个不稳定能量凝聚的空间。",
						"french": "La partie la plus profonde de la forêt, un lieu où une énergie instable était condensée.",
						"spanish": "La parte más profunda del bosque, un espacio donde la energía inestable se condensaba.",
						"vietnamese": "Nơi sâu nhất của khu rừng, một không gian nơi năng lượng bất ổn tích tụ.",
						"thai": "ส่วนที่ลึกที่สุดของป่า เป็นพื้นที่ที่พลังงานไม่เสถียรรวมตัวกัน",
						"hindi": "जंगल का सबसे गहरा हिस्सा, एक ऐसी जगह जहाँ अस्थिर ऊर्जा घनीभूत थी।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "거대한 그림자가 뒤틀린 공간에서 나타났다.",
						"english": "A colossal shadow emerged from the distorted space.",
						"japanese": "歪んだ空間から巨大な影が現れた。",
						"chinese": "一个巨大的影子从扭曲的空间中出现。",
						"french": "Une ombre colossale apparut de l'espace déformé.",
						"spanish": "Una sombra colosal emergió del espacio distorsionado.",
						"vietnamese": "Một bóng đen khổng lồ xuất hiện từ không gian méo mó.",
						"thai": "เงาขนาดมหึมาปรากฏขึ้นจากช่องว่างที่บิดเบี้ยว",
						"hindi": "विकृत स्थान से एक विशाल छाया प्रकट हुई।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "침입자들이 감히… 이 신성한 의식을 방해하는가.",
						"english": "Intruders dare... to disrupt this sacred ritual?",
						"japanese": "侵入者どもめ… この神聖な儀式を妨げるか。",
						"chinese": "入侵者竟敢… 打扰这神圣的仪式？",
						"french": "Des intrus osent… perturber ce rituel sacré ?",
						"spanish": "¿Invasores, osáis… interrumpir este ritual sagrado?",
						"vietnamese": "Những kẻ xâm nhập dám… phá hoại nghi lễ thiêng liêng này sao?",
						"thai": "พวกผู้บุกรุกกล้าดี… มาขัดขวางพิธีกรรมศักดิ์สิทธิ์นี้หรือ",
						"hindi": "घुसपैठियों ने हिम्मत की… इस पवित्र अनुष्ठान को बाधित करने की?"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "네가 이 숲을 망가뜨리고 있었어!",
						"english": "You were destroying this forest!",
						"japanese": "お前がこの森を破壊していたんだ！",
						"chinese": "你一直在破坏这片森林！",
						"french": "Tu étais en train de détruire cette forêt !",
						"spanish": "¡Estabas destruyendo este bosque!",
						"vietnamese": "Ngươi đã phá hoại khu rừng này!",
						"thai": "แกกำลังทำลายป่านี้!",
						"hindi": "तुम इस जंगल को बर्बाद कर रहे थे!"
					}
				},
				{
					"content": {
						"korean": "무지한 것들. 나는 그저… 균형을 되찾으려는 것뿐.",
						"english": "Ignorant fools. I merely… seek to restore balance.",
						"japanese": "無知な者どもめ。私はただ…均衡を取り戻そうとしているだけだ。",
						"chinese": "无知之徒。我只是…想恢复平衡而已。",
						"french": "Ignorants. Je ne fais que… tenter de restaurer l'équilibre.",
						"spanish": "Ignorantes. Yo solo… busco restaurar el equilibrio.",
						"vietnamese": "Những kẻ ngu muội. Ta chỉ là… muốn khôi phục lại sự cân bằng.",
						"thai": "พวกไร้เดียงสา ข้าเพียงแค่… ต้องการฟื้นฟูสมดุล",
						"hindi": "अज्ञानी। मैं बस… संतुलन बहाल करना चाहता हूँ।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "briar",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						3
					]
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "저 자는… 숲의 불안정한 에너지가 깃든 중간 보스야! 조심해!",
						"english": "That one… is a mid-boss imbued with the forest's unstable energy! Be careful!",
						"japanese": "あれは… 森の不安定なエネルギーを宿した中ボスだ！気をつけろ！",
						"chinese": "那个家伙… 是被森林不稳定能量附身的中期首领！小心！",
						"french": "C'est… un boss intermédiaire imprégné de l'énergie instable de la forêt ! Fais attention !",
						"spanish": "¡Ese… es un subjefe imbuido de la energía inestable del bosque! ¡Cuidado!",
						"vietnamese": "Kẻ đó… là một tên trùm phụ mang năng lượng bất ổn của khu rừng! Cẩn thận!",
						"thai": "นั่นมัน… มิดบอสที่มีพลังงานไม่เสถียรของป่าสิงอยู่! ระวังให้ดี!",
						"hindi": "वह… जंगल की अस्थिर ऊर्जा से भरा एक मिड-बॉस है! सावधान रहो!"
					},
					"speaker": "briar",
					"type": "speech"
				},
				{
					"action": "exit",
					"type": "direction",
					"duration_ms": 400,
					"speaker": "briar"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "물러설 순 없어!",
						"english": "We can't back down!",
						"japanese": "後には引けない！",
						"chinese": "不能退缩！",
						"french": "On ne peut pas reculer !",
						"spanish": "¡No podemos retroceder!",
						"vietnamese": "Không thể lùi bước!",
						"thai": "ถอยไม่ได้แล้ว!",
						"hindi": "हम पीछे नहीं हट सकते!"
					}
				}
			],
			"win_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "왜곡된 에너지가 사라지자, 잠시 숲에 평화가 찾아왔다.",
						"english": "As the distorted energy vanished, peace briefly returned to the forest.",
						"japanese": "歪んだエネルギーが消え去り、一時的に森に平和が訪れた。",
						"chinese": "扭曲的能量消失后，和平暂时回到了森林。",
						"french": "Alors que l'énergie distordue disparaissait, la paix revint brièvement dans la forêt.",
						"spanish": "Al desaparecer la energía distorsionada, la paz regresó brevemente al bosque.",
						"vietnamese": "Khi năng lượng méo mó biến mất, hòa bình tạm thời trở lại khu rừng.",
						"thai": "เมื่อพลังงานบิดเบี้ยวหายไป ความสงบสุขก็กลับคืนสู่ป่าชั่วขณะ",
						"hindi": "विकृत ऊर्जा के गायब होने पर, जंगल में थोड़ी देर के लिए शांति लौट आई।"
					}
				},
				{
					"content": {
						"korean": "크윽… 나는… 그저…",
						"english": "Ugh… I… merely…",
						"japanese": "くっ… 私は…ただ…",
						"chinese": "呃…我…只是…",
						"french": "Ugh… Je… ne faisais que…",
						"spanish": "Ugh… Yo… solo…",
						"vietnamese": "Ư… Ta… chỉ là…",
						"thai": "อึก… ข้า… แค่…",
						"hindi": "उफ़… मैं… बस…"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "하지만 너희는… 더 큰 어둠을 마주하게 될 것이다…",
						"english": "But you... will face a greater darkness...",
						"japanese": "だがお前たちは… より大きな闇に直面することになるだろう…",
						"chinese": "但是你们… 将会面对更大的黑暗…",
						"french": "Mais vous… ferez face à une plus grande obscurité…",
						"spanish": "Pero vosotros… os enfrentaréis a una oscuridad mayor…",
						"vietnamese": "Nhưng các ngươi… sẽ đối mặt với một bóng tối lớn hơn…",
						"thai": "แต่พวกเจ้า… จะต้องเผชิญหน้ากับความมืดมิดที่ยิ่งใหญ่กว่า…",
						"hindi": "परंतु तुम… एक गहरे अंधकार का सामना करोगे…"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "더 큰 어둠?",
						"english": "A greater darkness?",
						"japanese": "より大きな闇だと？",
						"chinese": "更大的黑暗？",
						"french": "Une plus grande obscurité ?",
						"spanish": "¿Una oscuridad mayor?",
						"vietnamese": "Một bóng tối lớn hơn sao?",
						"thai": "ความมืดมิดที่ยิ่งใหญ่กว่างั้นรึ?",
						"hindi": "गहरा अंधकार?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "briar",
					"spot": [
						2,
						4
					]
				},
				{
					"content": {
						"korean": "이건 시작에 불과해. 진짜 재앙은 아직 오지 않았어.",
						"english": "This is just the beginning. The real catastrophe is yet to come.",
						"japanese": "これは始まりに過ぎない。本当の災厄はまだ来ていない。",
						"chinese": "这只是开始。真正的灾难尚未降临。",
						"french": "Ce n'est que le début. La vraie catastrophe n'est pas encore arrivée.",
						"spanish": "Esto es solo el principio. La verdadera catástrofe aún no ha llegado.",
						"vietnamese": "Đây chỉ là khởi đầu. Thảm họa thực sự vẫn chưa đến.",
						"thai": "นี่เป็นเพียงจุดเริ่มต้น ภัยพิบัติที่แท้จริงยังมาไม่ถึง",
						"hindi": "यह तो बस शुरुआत है। असली विपत्ति अभी आनी बाकी है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "briar"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "탐험대는 다음 단서를 찾아 더 깊은 숲으로 발걸음을 옮겼다.",
						"english": "The expedition moved deeper into the forest, seeking the next clue.",
						"japanese": "探検隊は次の手がかりを求め、森の奥深くへと足を進めた。",
						"chinese": "探险队为寻找下一个线索，深入森林。",
						"french": "L'expédition s'enfonça plus profondément dans la forêt, à la recherche du prochain indice.",
						"spanish": "La expedición se adentró más en el bosque, buscando la siguiente pista.",
						"vietnamese": "Đoàn thám hiểm tiến sâu hơn vào rừng, tìm kiếm manh mối tiếp theo.",
						"thai": "คณะสำรวจก้าวเข้าสู่ป่าลึกยิ่งขึ้น เพื่อค้นหาเบาะแสต่อไป",
						"hindi": "अगले सुराग की तलाश में अभियान दल जंगल में और गहराई तक चला गया।"
					}
				}
			],
			"id": 15
		}
	]
} as const;
