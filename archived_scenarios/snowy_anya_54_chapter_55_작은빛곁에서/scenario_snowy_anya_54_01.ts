export const scenario_snowy_anya_54_01 = {
	"scenario_id": "snowy_anya_54_01",
	"order": 1,
	"act": "intro",
	"theme": "snowy",
	"actors": {
		"bran": {
			"id": "mon_985fcdcc-1bf2-4822-aa2f-292ae9353456",
			"name": {
				"korean": "브란",
				"english": "Bran",
				"japanese": "ブラン",
				"chinese": "布兰",
				"french": "Bran",
				"spanish": "Bran",
				"vietnamese": "Bran",
				"thai": "แบรน",
				"hindi": "ब्रैन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/42cde50b-7453-47b1-04df-73500ad21d00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/4ecba7ed-ec7e-4a8e-74dc-bf3e711b4d00/public"
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
					"content": {
						"korean": "오래된 유적의 한 모퉁이. 작은 빛이 희미하게 깜빡이고 있었다.",
						"english": "A corner of an ancient ruin. A small light flickered faintly.",
						"japanese": "古き遺跡の一角。小さな光が微かに瞬いていた。",
						"chinese": "古老遗迹的一角。一束微光若隐若现地闪烁着。",
						"french": "Un coin d'une ancienne ruine. Une petite lumière vacillait faiblement.",
						"spanish": "Una esquina de una antigua ruina. Una pequeña luz parpadeaba débilmente.",
						"vietnamese": "Một góc của tàn tích cổ. Một đốm sáng nhỏ nhấp nháy yếu ớt.",
						"thai": "มุมหนึ่งของซากปรักหักพังโบราณ แสงเล็กๆ สลัวๆ กระพริบอยู่",
						"hindi": "एक प्राचीन खंडहर का कोना। एक नन्ही रोशनी हल्की-सी टिमटिमा रही थी।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…이게 그 빛인가.",
						"english": "...Is this the light?",
						"japanese": "…これが、あの光か。",
						"chinese": "……这就是那束光吗？",
						"french": "...Est-ce cette lumière ?",
						"spanish": "...¿Es esta la luz?",
						"vietnamese": "...Đây có phải là ánh sáng đó không?",
						"thai": "...นี่คือแสงนั้นหรือเปล่า",
						"hindi": "...क्या यह वही रोशनी है?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"spot": [
						3,
						3
					],
					"speaker": "bran",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "bran",
					"type": "speech",
					"content": {
						"korean": "길을 잃은 이는… 집을 알려주면 돌아갈 수 있죠.",
						"english": "Those who are lost... can return if shown the way home.",
						"japanese": "道に迷った者は…家を教えてやれば、帰れるでしょう。",
						"chinese": "迷失的人啊……只要指引回家之路，就能归去吧。",
						"french": "Ceux qui sont perdus... peuvent rentrer si on leur montre le chemin de la maison.",
						"spanish": "Quienes están perdidos... pueden regresar si se les muestra el camino a casa.",
						"vietnamese": "Những người lạc lối... có thể trở về nếu được chỉ đường về nhà.",
						"thai": "ผู้ที่หลงทาง...สามารถกลับได้หากเราบอกทางกลับบ้าน",
						"hindi": "जो भटक गए हैं... अगर उन्हें घर का रास्ता बता दिया जाए, तो वे लौट सकते हैं।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…집으로요?",
						"english": "...Home?",
						"japanese": "…家へ、ですか？",
						"chinese": "……回家？",
						"french": "...À la maison ?",
						"spanish": "...¿A casa?",
						"vietnamese": "...Về nhà ư?",
						"thai": "...กลับบ้าน?",
						"hindi": "...घर?"
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
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "저 빛은… 뭘 기다리는 걸까.",
						"english": "That light... what is it waiting for?",
						"japanese": "あの光は…何を待っているのだろう。",
						"chinese": "那束光……在等待什么呢？",
						"french": "Cette lumière... qu'attend-elle ?",
						"spanish": "Esa luz... ¿qué estará esperando?",
						"vietnamese": "Đốm sáng đó... đang chờ đợi điều gì?",
						"thai": "แสงนั้น...กำลังรออะไรอยู่",
						"hindi": "वह रोशनी... क्या इंतजार कर रही है?"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "어쩌면… 아무것도 아닐지도 몰라.",
						"english": "Perhaps... nothing at all.",
						"japanese": "もしかしたら…何も、ないのかもしれない。",
						"chinese": "也许……什么也不是。",
						"french": "Peut-être... rien du tout.",
						"spanish": "Quizás... nada en absoluto.",
						"vietnamese": "Có lẽ... không có gì cả.",
						"thai": "บางที...อาจจะไม่มีอะไรเลย",
						"hindi": "शायद... कुछ भी नहीं।"
					},
					"emotion": "base",
					"speaker": "character_2"
				},
				{
					"content": {
						"korean": "하지만 누군가 기다린 흔적은… 분명해.",
						"english": "Yet, the trace of someone waiting… is clear.",
						"japanese": "しかし、誰かが待っていた痕跡は…明らかだ。",
						"chinese": "但有人等待的痕迹…很明显。",
						"french": "Pourtant, la trace de quelqu'un qui attendait… est évidente.",
						"spanish": "Sin embargo, el rastro de alguien esperando… es claro.",
						"vietnamese": "Tuy nhiên, dấu vết của ai đó đang đợi… rất rõ ràng.",
						"thai": "แต่ร่องรอยของการรอคอยของใครบางคน... ชัดเจน",
						"hindi": "लेकिन किसी के इंतज़ार के निशान... स्पष्ट हैं।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_3"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "어둠 속에서 빛은 여전히 흔들렸다. 그 안에서 어렴풋한 상실감이 느껴졌다.",
						"english": "In the darkness, the light still flickered. A vague sense of loss was felt within it.",
						"japanese": "闇の中で、光はまだ揺れていた。その中に漠然とした喪失感が感じられた。",
						"chinese": "黑暗中，光芒仍在摇曳。其中隐约感到一丝失落。",
						"french": "Dans l'obscurité, la lumière vacillait toujours. Une vague sensation de perte s'en dégageait.",
						"spanish": "En la oscuridad, la luz aún parpadeaba. Una vaga sensación de pérdida se sentía en ella.",
						"vietnamese": "Trong bóng tối, ánh sáng vẫn lung lay. Một cảm giác mất mát mơ hồ trỗi dậy từ đó.",
						"thai": "ในความมืด แสงยังคงริบหรี่ สัมผัสได้ถึงความรู้สึกสูญเสียที่ไม่ชัดเจน",
						"hindi": "अंधेरे में, रोशनी अभी भी टिमटिमा रही थी। उसके भीतर एक अस्पष्ट नुकसान महसूस हुआ।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "혼자 남겨진다는 건… 어떤 기분일까.",
						"english": "What does it feel like… to be left alone?",
						"japanese": "一人残されるというのは…どんな気持ちだろうか。",
						"chinese": "被独自留下…是怎样的感觉呢？",
						"french": "Que ressent-on… quand on est laissé seul ?",
						"spanish": "¿Qué se sentirá… ser dejado solo?",
						"vietnamese": "Bị bỏ lại một mình… cảm giác sẽ thế nào?",
						"thai": "การถูกทิ้งไว้คนเดียว... รู้สึกอย่างไรนะ?",
						"hindi": "अकेले छोड़ दिए जाने का एहसास… कैसा होगा?"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "우리는 여기에… 뭘 찾아온 걸까.",
						"english": "What have we come here… to find?",
						"japanese": "私たちはここに…何を探しに来たのだろうか。",
						"chinese": "我们来到这里…是为了寻找什么？",
						"french": "Qu'est-ce que nous sommes venus chercher… ici ?",
						"spanish": "¿Qué hemos venido a buscar… aquí?",
						"vietnamese": "Chúng ta đến đây… để tìm kiếm điều gì?",
						"thai": "เรามาที่นี่... เพื่อค้นหาอะไร?",
						"hindi": "हम यहां क्या खोजने आए हैं…?"
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
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "깊은 침묵이 감돌았다. 이제 돌아갈 수 없는 길 위에 서 있었다.",
						"english": "A deep silence fell. We stood on a path of no return.",
						"japanese": "深い沈黙が漂った。もう引き返せない道の上に立っていた。",
						"chinese": "一片死寂。我们已站在一条无法回头的路上。",
						"french": "Un profond silence régnait. Nous nous tenions sur un chemin sans retour.",
						"spanish": "Un profundo silencio reinó. Estábamos en un camino sin retorno.",
						"vietnamese": "Một sự im lặng sâu sắc bao trùm. Chúng tôi đứng trên con đường không thể quay lại.",
						"thai": "ความเงียบงันปกคลุม เรายืนอยู่บนเส้นทางที่ไม่อาจย้อนกลับได้",
						"hindi": "गहरी खामोशी छा गई। हम एक ऐसे रास्ते पर खड़े थे जहां से लौटना असंभव था।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "점점 더 깊숙이 들어오는군.",
						"english": "We're going deeper and deeper.",
						"japanese": "ますます奥へ入っていくな。",
						"chinese": "我们正越陷越深。",
						"french": "Nous allons de plus en plus loin.",
						"spanish": "Estamos entrando cada vez más profundo.",
						"vietnamese": "Chúng ta đang đi sâu hơn.",
						"thai": "เรากำลังเข้าสู่ส่วนที่ลึกขึ้นเรื่อยๆ",
						"hindi": "हम और गहरे जा रहे हैं।"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…하지만 멈출 수 없어.",
						"english": "…But we can't stop.",
						"japanese": "…でも、止まれない。",
						"chinese": "…但无法停止。",
						"french": "…Mais nous ne pouvons pas nous arrêter.",
						"spanish": "…Pero no podemos detenernos.",
						"vietnamese": "…Nhưng không thể dừng lại.",
						"thai": "...แต่เราหยุดไม่ได้",
						"hindi": "...लेकिन हम रुक नहीं सकते।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "빛이… 우릴 부르고 있어.",
						"english": "The light… is calling us.",
						"japanese": "光が…私たちを呼んでいる。",
						"chinese": "光…在呼唤着我们。",
						"french": "La lumière… nous appelle.",
						"spanish": "La luz… nos está llamando.",
						"vietnamese": "Ánh sáng… đang gọi chúng ta.",
						"thai": "แสงสว่าง... กำลังเรียกเรา",
						"hindi": "रोशनी… हमें बुला रही है।"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "흐읍… 고작 이 정도인가. 이 빛은… 계속될 거다.",
						"english": "Hmph... Is this all? This light... will go on.",
						"japanese": "くっ… たかがこれしきか。この光は… 続くぞ。",
						"chinese": "哼… 就这点程度吗。这光… 会继续下去的。",
						"french": "Hmpf… C'est tout ce que vous avez ? Cette lumière… continuera.",
						"spanish": "Hmph... ¿Esto es todo? Esta luz... continuará.",
						"vietnamese": "Hừm... Chỉ đến mức này thôi sao. Ánh sáng này... sẽ tiếp tục.",
						"thai": "เฮอะ... แค่นี้เองหรือ แสงนี้... จะดำเนินต่อไป",
						"hindi": "हूँ… बस इतना ही? यह प्रकाश… जारी रहेगा।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "끝까지…",
						"english": "To the very end...",
						"japanese": "最後まで…",
						"chinese": "直到最后…",
						"french": "Jusqu'au bout…",
						"spanish": "Hasta el final…",
						"vietnamese": "Cho đến cùng...",
						"thai": "จนกว่าจะถึงที่สุด...",
						"hindi": "अंत तक…"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "어둠 속에서 새로운 길잡이가 나타났다. 작은 빛은 아직 꺼지지 않았다.",
						"english": "A new guide emerged from the darkness. The small light has not yet extinguished.",
						"japanese": "闇の中から新たな導き手が現れた。小さな光はまだ消えていない。",
						"chinese": "黑暗中出现了新的指引。微弱的光芒尚未熄灭。",
						"french": "Un nouveau guide est apparu des ténèbres. La petite lumière ne s'est pas encore éteinte.",
						"spanish": "Un nuevo guía ha aparecido de la oscuridad. La pequeña luz aún no se ha apagado.",
						"vietnamese": "Một người dẫn đường mới đã xuất hiện từ bóng tối. Ánh sáng nhỏ bé vẫn chưa tắt.",
						"thai": "ผู้นำทางคนใหม่ปรากฏขึ้นจากความมืดมิด แสงสว่างเล็กๆ ยังไม่ดับลง",
						"hindi": "अंधेरे से एक नया मार्गदर्शक उभरा है। छोटी रोशनी अभी बुझी नहीं है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "크하핫! 어리석은 것들. 길 잃은 자는… 영원히 헤매는 법.",
						"english": "Kwahaha! Fools. The lost... shall wander forever.",
						"japanese": "クハハッ！愚かな者たちめ。道に迷いし者は… 永遠に彷徨うのだ。",
						"chinese": "哈哈哈！愚蠢的东西。迷失者… 注定永远徘徊。",
						"french": "Hahaha ! Imbéciles. Ceux qui sont perdus… erreront éternellement.",
						"spanish": "¡Jajaja! Necios. Los que se pierden... deambularán para siempre.",
						"vietnamese": "Khà khà khà! Lũ ngu ngốc. Kẻ lạc lối... sẽ mãi mãi lang thang.",
						"thai": "คิกคิกคิก! พวกโง่เขลา ผู้หลงทาง... จะเร่ร่อนไปตลอดกาล",
						"hindi": "कहाहा! मूर्खों। जो भटक गए… वे सदा भटकते रहेंगे।"
					},
					"emotion": "happy"
				},
				{
					"content": {
						"korean": "…아직 끝나지 않았어.",
						"english": "...It's not over yet.",
						"japanese": "…まだ終わっていない。",
						"chinese": "…还没结束。",
						"french": "…Ce n'est pas encore fini.",
						"spanish": "...Aún no ha terminado.",
						"vietnamese": "...Vẫn chưa kết thúc.",
						"thai": "...ยังไม่จบ",
						"hindi": "…अभी खत्म नहीं हुआ है।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "기다림은… 고통일 뿐이다.",
						"english": "Waiting is... merely pain.",
						"japanese": "待つことは… 苦痛に過ぎない。",
						"chinese": "等待… 只是痛苦罢了。",
						"french": "L'attente n'est… que souffrance.",
						"spanish": "La espera es... solo sufrimiento.",
						"vietnamese": "Sự chờ đợi... chỉ là nỗi đau mà thôi.",
						"thai": "การรอคอย... เป็นเพียงความทุกข์ทรมาน",
						"hindi": "इंतज़ार… केवल पीड़ा है।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "작은 빛이 격렬하게 떨렸다. 그 앞에 거대한 그림자가 드리웠다.",
						"english": "A small light trembled violently. A colossal shadow loomed before it.",
						"japanese": "小さな光が激しく震えた。その前に巨大な影が差していた。",
						"chinese": "微弱的光芒剧烈颤抖。一道巨大的阴影笼罩其前。",
						"french": "Une petite lumière tremblait violemment. Une ombre colossale se dressait devant elle.",
						"spanish": "Una pequeña luz temblaba violentamente. Una sombra gigantesca se cernía ante ella.",
						"vietnamese": "Một ánh sáng nhỏ rung động dữ dội. Một cái bóng khổng lồ bao trùm phía trước nó.",
						"thai": "แสงเล็กๆ สั่นไหวอย่างรุนแรง เงาขนาดใหญ่ทอดทับอยู่เบื้องหน้า",
						"hindi": "एक छोटी सी रोशनी ज़ोर से काँप रही थी। उसके सामने एक विशाल छाया मंडरा रही थी।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "감히… 여기까지 왔군.",
						"english": "Dare to… come this far.",
						"japanese": "よくも…ここまで来たな。",
						"chinese": "竟敢…来到这里。",
						"french": "Oser… venir jusqu'ici.",
						"spanish": "Te atreviste… a llegar hasta aquí.",
						"vietnamese": "Dám… đến tận đây.",
						"thai": "กล้าดี... ที่มาถึงที่นี่",
						"hindi": "हिम्मत की… यहां तक आने की।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "{random_boss}!",
						"english": "{random_boss}!",
						"japanese": "{random_boss}!",
						"chinese": "{random_boss}!",
						"french": "{random_boss}!",
						"spanish": "{random_boss}!",
						"vietnamese": "{random_boss}!",
						"thai": "{random_boss}!",
						"hindi": "{random_boss}!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "쓸데없는 동정심이, 너희를 여기까지 끌고 왔군.",
						"english": "Your pointless pity brought you this far.",
						"japanese": "無駄な同情心が、お前たちをここまで引きずり込んだようだな。",
						"chinese": "无谓的同情心，将你们引到了这里。",
						"french": "Votre pitié inutile vous a menés jusqu'ici.",
						"spanish": "La compasión inútil os trajo hasta aquí.",
						"vietnamese": "Sự thương hại vô ích đã dẫn các ngươi đến đây.",
						"thai": "ความสงสารที่ไร้ค่า นำพาพวกเจ้ามาถึงที่นี่",
						"hindi": "तुम्हारी व्यर्थ की दया तुम्हें यहाँ तक ले आई।"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "하지만 그건… 나약함일 뿐.",
						"english": "But that's... just weakness.",
						"japanese": "だがそれは… 弱さに過ぎない。",
						"chinese": "但那… 只是软弱罢了。",
						"french": "Mais ce n'est... que de la faiblesse.",
						"spanish": "Pero eso es... solo debilidad.",
						"vietnamese": "Nhưng đó... chỉ là sự yếu đuối thôi.",
						"thai": "แต่สิ่งนั้น... เป็นเพียงความอ่อนแอ",
						"hindi": "परंतु वह… केवल कमज़ोरी है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"길 잃은 작은 빛 하나.",
			"오래된 기다림의 흔적을 좇아, 세 사람은 멈춰 섰다.",
			"어렴풋이 감도는 쓸쓸함 속에서,",
			"조용히, 집으로 향하는 길을 찾는다."
		],
		"english": [
			"A small light, lost.",
			"Following the traces of an ancient wait, the three stopped.",
			"Amidst a faintly lingering loneliness,",
			"Silently, they seek the path home."
		],
		"japanese": [
			"迷いし小さな光、一つ。",
			"古き待ち侘びの痕跡を辿り、三人は立ち止まった。",
			"仄かに漂う寂しさの中で、",
			"静かに、家路を探す。"
		],
		"chinese": [
			"一束迷失的微光。",
			"循着古老等待的痕迹，三人停下了脚步。",
			"在若隐若现的寂寥之中，",
			"悄然寻找归家的路。"
		],
		"french": [
			"Une petite lumière perdue.",
			"Suivant les traces d'une ancienne attente, les trois s'arrêtèrent.",
			"Dans une mélancolie voilée,",
			"En silence, ils cherchent le chemin du retour."
		],
		"spanish": [
			"Una pequeña luz perdida.",
			"Siguiendo las huellas de una antigua espera, los tres se detuvieron.",
			"Entre una melancolía que apenas se percibía,",
			"En silencio, buscan el camino a casa."
		],
		"vietnamese": [
			"Một đốm sáng nhỏ lạc lối.",
			"Theo dấu vết của sự chờ đợi xưa cũ, ba người dừng lại.",
			"Giữa nỗi cô đơn thoang thoảng,",
			"Lặng lẽ tìm đường về nhà."
		],
		"thai": [
			"แสงน้อยนิดที่หลงทาง",
			"ตามรอยการรอคอยอันเก่าแก่ ทั้งสามหยุดลง",
			"ท่ามกลางความเดียวดายที่แผ่วเบา",
			"เงียบงัน ค้นหาเส้นทางกลับบ้าน"
		],
		"hindi": [
			"एक नन्ही खोई हुई रोशनी।",
			"एक प्राचीन प्रतीक्षा के निशान का पीछा करते हुए, तीनों रुक गए।",
			"एक हल्की-सी उदासी के बीच,",
			"खामोशी से, घर का रास्ता ढूंढते हैं।"
		]
	}
} as const;
