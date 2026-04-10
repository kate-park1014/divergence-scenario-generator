export const scenario_forest_scenario_02 = {
	"scenario_id": "forest_scenario_02_rising1",
	"order": 2,
	"act": "rising",
	"theme": "forest",
	"boss": {
		"pool_id": "random_boss"
	},
	"actors": {
		"lyra_meadowsong": {
			"id": "mon_c57af7f0-7c43-4883-8bbb-b99a24a34620",
			"name": {
				"korean": "리라",
				"english": "Lyra",
				"japanese": "リラ",
				"chinese": "莉拉",
				"french": "Lyra",
				"spanish": "Lyra",
				"vietnamese": "Lyra",
				"thai": "ไลรา",
				"hindi": "लायरा"
			},
			"description": "A Forest Fairy with green hair",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/c4d279a3-d82c-4045-36cc-62cc22e47f00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/204d63b0-dcf0-437a-0622-ab32c3fe8900/public",
			"attack_sprite_url": "",
			"role": {
				"type": ""
			}
		},
		"kain": {
			"id": "mon_7e2a67da-86f4-413e-8dc3-1523572274b8",
			"name": {
				"korean": "카인",
				"english": "Kain",
				"japanese": "カイン",
				"chinese": "凯恩",
				"french": "Kaïn",
				"spanish": "Kain",
				"vietnamese": "Kain",
				"thai": "เคน",
				"hindi": "केन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2fb1b07a-14de-4ca0-c18b-a422d72e0000/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f251a138-bf06-4848-f050-bd6f5cfbde00/public",
			"attack_sprite_url": "",
			"role": {
				"type": ""
			}
		}
	},
	"prologue": {
		"korean": [
			"수호대에 입대한 지 사흘째.",
			"카인은 첫 임무를 내렸다 — 숲 외곽 포자 군체 처치.",
			"단순한 임무처럼 보였다.",
			"그러나 숲은, 처음부터 무언가를 숨기고 있었다."
		],
		"english": [
			"It's the third day since I joined the Guardians.",
			"Kain assigned the first mission — eliminate the spore colony on the forest outskirts.",
			"It seemed like a simple mission.",
			"But the forest, from the very beginning, was hiding something."
		],
		"japanese": [
			"守護隊に入隊して三日目だ。",
			"カインは最初の任務を下した — 森の外縁の胞子群落を排除せよ。",
			"簡単な任務のように見えた。",
			"しかし森は、最初から何かを隠していた。"
		],
		"chinese": [
			"加入守护队已有三天。",
			"凯恩下达了第一个任务——清除森林外围的孢子群落。",
			"这看起来像一个简单的任务。",
			"然而，森林从一开始就隐藏着什么。"
		],
		"french": [
			"C'est le troisième jour depuis mon enrôlement dans les Gardiens.",
			"Kain a confié la première mission — éliminer la colonie de spores à la lisière de la forêt.",
			"Cela semblait une mission simple.",
			"Mais la forêt, dès le début, cachait quelque chose."
		],
		"spanish": [
			"Es mi tercer día desde que me uní a los Guardianes.",
			"Kain asignó la primera misión — eliminar la colonia de esporas en las afueras del bosque.",
			"Parecía una misión simple.",
			"Pero el bosque, desde el principio, estaba ocultando algo."
		],
		"vietnamese": [
			"Đây là ngày thứ ba kể từ khi tôi gia nhập Đội Vệ binh.",
			"Kain đã giao nhiệm vụ đầu tiên — tiêu diệt cụm bào tử ở rìa rừng.",
			"Nó có vẻ là một nhiệm vụ đơn giản.",
			"Nhưng khu rừng, ngay từ đầu, đã che giấu điều gì đó."
		],
		"thai": [
			"นี่เป็นวันที่สามแล้วตั้งแต่ฉันเข้าร่วมหน่วยพิทักษ์.",
			"ไคน์มอบภารกิจแรก — กำจัดอาณานิคมสปอร์ที่ชายป่า.",
			"มันดูเหมือนภารกิจง่ายๆ.",
			"แต่ป่า, ตั้งแต่แรกเริ่ม, ก็ซ่อนบางสิ่งบางอย่างไว้."
		],
		"hindi": [
			"यह अभिभावकों में शामिल होने का मेरा तीसरा दिन है।",
			"केन ने पहला मिशन सौंपा — जंगल के बाहरी इलाके में बीजाणु कॉलोनी को खत्म करो।",
			"यह एक साधारण मिशन जैसा लग रहा था।",
			"लेकिन जंगल, शुरू से ही कुछ छिपा रहा था।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "kain",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "kain",
					"content": {
						"korean": "첫 임무야. 숲 외곽 포자 군체 처치.",
						"english": "It's your first mission. Eliminate the spore colony on the forest outskirts.",
						"japanese": "初めての任務だ。森の外縁の胞子群落を排除しろ。",
						"chinese": "这是你的第一个任务。清除森林外围的孢子群落。",
						"french": "C'est votre première mission. Éliminez la colonie de spores à la lisière de la forêt.",
						"spanish": "Es tu primera misión. Elimina la colonia de esporas en las afueras del bosque.",
						"vietnamese": "Đây là nhiệm vụ đầu tiên của con. Tiêu diệt cụm bào tử ở rìa rừng.",
						"thai": "นี่คือภารกิจแรกของคุณ. กำจัดอาณานิคมสปอร์ที่ชายป่า.",
						"hindi": "यह तुम्हारा पहला मिशन है। जंगल के बाहरी इलाके में बीजाणु कॉलोनी को खत्म करो।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "같이 안 가?",
						"english": "You're not coming with us?",
						"japanese": "一緒に行かないのか？",
						"chinese": "你不一起来吗？",
						"french": "Tu ne viens pas avec nous ?",
						"spanish": "¿No vienes con nosotros?",
						"vietnamese": "Anh không đi cùng sao?",
						"thai": "คุณไม่มาด้วยกันเหรอ?",
						"hindi": "क्या तुम हमारे साथ नहीं आ रहे?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kain",
					"content": {
						"korean": "너희가 해야 강해져. 뒤에서 본다.",
						"english": "You must do it yourselves to grow stronger. I'll observe from behind.",
						"japanese": "お前たちがやらねば強くならん。後ろから見ている。",
						"chinese": "你们必须自己去做才能变强。我会在后面看着。",
						"french": "Vous devez le faire vous-mêmes pour devenir plus forts. Je regarderai de derrière.",
						"spanish": "Debéis hacerlo vosotros mismos para fortaleceros. Observaré desde atrás.",
						"vietnamese": "Các con phải tự mình làm thì mới mạnh lên được. Ta sẽ quan sát từ phía sau.",
						"thai": "พวกเจ้าต้องทำเองถึงจะแข็งแกร่งขึ้น. ข้าจะดูอยู่ข้างหลัง.",
						"hindi": "मजबूत होने के लिए तुम्हें इसे खुद करना होगा। मैं पीछे से देखूंगा।"
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "exit",
					"speaker": "kain",
					"duration_ms": 400
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "lyra_meadowsong",
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "lyra_meadowsong",
					"content": {
						"korean": "수호대지? 여기서 뭐 하는 거야.",
						"english": "You're from the Guardians, aren't you? What are you doing here?",
						"japanese": "守護隊か？ここで何をしている？",
						"chinese": "守护队的人？你们在这里做什么？",
						"french": "Vous êtes des Gardiens, n'est-ce pas ? Que faites-vous ici ?",
						"spanish": "¿Sois de los Guardianes, verdad? ¿Qué hacéis aquí?",
						"vietnamese": "Là Đội Vệ binh phải không? Các người đang làm gì ở đây?",
						"thai": "หน่วยพิทักษ์เหรอ? มาทำอะไรที่นี่?",
						"hindi": "तुम अभिभावक हो, है ना? यहाँ क्या कर रहे हो?"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "포자 처치하러 왔어.",
						"english": "We're here to eliminate the spores.",
						"japanese": "胞子を排除しに来た。",
						"chinese": "我们是来清除孢子的。",
						"french": "Nous sommes venus éliminer les spores.",
						"spanish": "Hemos venido a eliminar las esporas.",
						"vietnamese": "Chúng tôi đến đây để tiêu diệt bào tử.",
						"thai": "เรามาที่นี่เพื่อกำจัดสปอร์.",
						"hindi": "हम बीजाणुओं को खत्म करने आए हैं।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lyra_meadowsong",
					"content": {
						"korean": "수호대를 믿지 마. 저들이 숲을 깨우고 있어.",
						"english": "Don't trust the Guardians. They are awakening the forest.",
						"japanese": "守護隊を信じるな。奴らが森を目覚めさせている。",
						"chinese": "不要相信守护队。他们正在唤醒森林。",
						"french": "Ne faites pas confiance aux Gardiens. Ils réveillent la forêt.",
						"spanish": "No confiéis en los Guardianes. Están despertando el bosque.",
						"vietnamese": "Đừng tin Đội Vệ binh. Họ đang đánh thức khu rừng.",
						"thai": "อย่าเชื่อหน่วยพิทักษ์. พวกมันกำลังปลุกป่า.",
						"hindi": "अभिभावकों पर भरोसा मत करो। वे जंगल को जगा रहे हैं।"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리야.",
						"english": "What are you talking about?",
						"japanese": "何を言っているんだ。",
						"chinese": "你在说什么？",
						"french": "De quoi parlez-vous ?",
						"spanish": "¿De qué estás hablando?",
						"vietnamese": "Anh đang nói gì vậy?",
						"thai": "คุณกำลังพูดถึงอะไร?",
						"hindi": "तुम क्या कह रहे हो?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lyra_meadowsong",
					"content": {
						"korean": "…언젠가 알게 돼.",
						"english": "...You'll find out someday.",
						"japanese": "…いつか分かるだろう。",
						"chinese": "……总有一天你会知道的。",
						"french": "…Tu le sauras un jour.",
						"spanish": "…Algún día lo sabrás.",
						"vietnamese": "…Rồi một ngày nào đó con sẽ biết.",
						"thai": "…สักวันคุณก็จะรู้.",
						"hindi": "…तुम्हें कभी-न-कभी पता चल ही जाएगा।"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이 포자 흔적 — 숲 안쪽에서 바깥으로 퍼진 거야.",
						"english": "These spore traces — they spread from inside the forest outwards.",
						"japanese": "この胞子の痕跡 — 森の内側から外へ広がっている。",
						"chinese": "这些孢子痕迹——是从森林内部向外扩散的。",
						"french": "Ces traces de spores — elles se sont répandues de l'intérieur de la forêt vers l'extérieur.",
						"spanish": "Estas huellas de esporas — se extendieron desde el interior del bosque hacia afuera.",
						"vietnamese": "Những dấu vết bào tử này — chúng lan từ bên trong rừng ra ngoài.",
						"thai": "ร่องรอยสปอร์เหล่านี้ — พวกมันแพร่กระจายจากด้านในป่าออกไปด้านนอก.",
						"hindi": "ये बीजाणु के निशान — जंगल के अंदर से बाहर की ओर फैले हैं।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "누가 유도한 거 아냐?",
						"english": "Wasn't someone guiding them?",
						"japanese": "誰かが誘導したんじゃないのか？",
						"chinese": "难道不是有人引导的吗？",
						"french": "Quelqu'un les aurait-il guidées ?",
						"spanish": "¿No los guio alguien?",
						"vietnamese": "Không phải ai đó đã dẫn dụ chúng sao?",
						"thai": "มีใครบางคนชี้นำพวกมันรึเปล่า?",
						"hindi": "क्या किसी ने उन्हें निर्देशित नहीं किया?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…설마.",
						"english": "...Surely not.",
						"japanese": "…まさか。",
						"chinese": "……不会吧。",
						"french": "…Impossible.",
						"spanish": "…No puede ser.",
						"vietnamese": "…Không thể nào.",
						"thai": "…ไม่จริงน่า.",
						"hindi": "…यह असंभव है।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 7,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "아까 그 요정 말 — 계속 걸리네.",
						"english": "What that fairy said earlier — it keeps bothering me.",
						"japanese": "さっきの妖精の言葉 — ずっと気になっている。",
						"chinese": "刚才那个精灵的话——一直在我心里打转。",
						"french": "Ce que cette fée a dit plus tôt — ça me travaille toujours.",
						"spanish": "Lo que dijo esa hada antes — sigue dándome vueltas.",
						"vietnamese": "Lời của cô tiên lúc nãy — cứ làm tôi bận tâm mãi.",
						"thai": "คำพูดของภูตตนนั้นเมื่อกี้ — มันยังคงกวนใจฉันอยู่เลย.",
						"hindi": "उस परी ने जो पहले कहा था — वह मुझे लगातार परेशान कर रहा है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_2",
					"content": {
						"korean": "수호대가 숲을 깨운다고?",
						"english": "The Guardians are awakening the forest?",
						"japanese": "守護隊が森を目覚めさせているだと？",
						"chinese": "守护队在唤醒森林？",
						"french": "Les Gardiens réveillent la forêt ?",
						"spanish": "¿Los Guardianes están despertando el bosque?",
						"vietnamese": "Đội Vệ binh đang đánh thức khu rừng ư?",
						"thai": "หน่วยพิทักษ์กำลังปลุกป่าอย่างนั้นเหรอ?",
						"hindi": "क्या अभिभावक जंगल को जगा रहे हैं?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_3",
					"content": {
						"korean": "카인이 왜 그러겠어. 말이 안 되잖아.",
						"english": "Why would Kain do that? It makes no sense.",
						"japanese": "カインがなぜそんなことをする。ありえないだろ。",
						"chinese": "凯恩为什么要那样做？这说不通啊。",
						"french": "Pourquoi Kain ferait-il ça ? Ça n'a aucun sens.",
						"spanish": "¿Por qué Kain haría eso? No tiene sentido.",
						"vietnamese": "Tại sao Kain lại làm thế? Thật vô lý.",
						"thai": "ทำไมไคน์ถึงจะทำอย่างนั้น? มันไม่สมเหตุสมผลเลย.",
						"hindi": "केन ऐसा क्यों करेगा? इसका कोई मतलब नहीं बनता।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_4",
					"content": {
						"korean": "요정이 거짓말한 거겠지.",
						"english": "The fairy must have lied.",
						"japanese": "妖精が嘘をついたんだろう。",
						"chinese": "肯定是精灵撒了谎。",
						"french": "La fée a dû mentir.",
						"spanish": "El hada debió haber mentido.",
						"vietnamese": "Chắc chắn cô tiên đã nói dối.",
						"thai": "ภูตคงจะโกหก.",
						"hindi": "परी ने झूठ बोला होगा।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "kain",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "kain",
					"content": {
						"korean": "잘 하고 있어.",
						"english": "You're doing well.",
						"japanese": "よくやっている。",
						"chinese": "你们做得很好。",
						"french": "Vous faites du bon travail.",
						"spanish": "Lo estáis haciendo bien.",
						"vietnamese": "Con đang làm tốt lắm.",
						"thai": "ทำได้ดีมาก.",
						"hindi": "तुम अच्छा कर रहे हो।"
					},
					"emotion": "happy"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "아까 요정 봤어? 우릴 경고하던.",
						"english": "Did you see that fairy earlier? The one warning us.",
						"japanese": "さっきの妖精を見たか？私たちに警告していた奴だ。",
						"chinese": "你刚才看到那个精灵了吗？那个警告我们的。",
						"french": "Tu as vu cette fée plus tôt ? Celle qui nous avertissait.",
						"spanish": "¿Viste a esa hada antes? La que nos advertía.",
						"vietnamese": "Con có thấy cô tiên lúc nãy không? Người đã cảnh báo chúng ta.",
						"thai": "คุณเห็นภูตตนนั้นเมื่อกี้ไหม? ที่เตือนเราน่ะ.",
						"hindi": "क्या तुमने उस परी को पहले देखा? जो हमें चेतावनी दे रही थी।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kain",
					"content": {
						"korean": "…봤어.",
						"english": "...I saw her.",
						"japanese": "…見た。",
						"chinese": "……看到了。",
						"french": "…Oui, je l'ai vue.",
						"spanish": "…Sí, la vi.",
						"vietnamese": "…Tôi đã thấy.",
						"thai": "…เห็นแล้ว.",
						"hindi": "…मैंने देखा।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kain",
					"content": {
						"korean": "숲 요정들은 인간을 싫어해. 신경 꺼.",
						"english": "Forest fairies despise humans. Don't worry about it.",
						"japanese": "森の妖精は人間が嫌いだ。気にするな。",
						"chinese": "森林精灵讨厌人类。别理她们。",
						"french": "Les fées de la forêt détestent les humains. Ne t'en fais pas.",
						"spanish": "Las hadas del bosque odian a los humanos. No te preocupes.",
						"vietnamese": "Tiên rừng ghét con người. Đừng bận tâm.",
						"thai": "ภูตป่าเกลียดมนุษย์. ช่างมันเถอะ.",
						"hindi": "जंगल की परियां इंसानों से नफरत करती हैं। ध्यान मत दो।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 11,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "카인. 이 포자들 — 왜 전부 숲 안쪽에서 퍼진 거야.",
						"english": "Kain. These spores — why did they all spread from inside the forest?",
						"japanese": "カイン。この胞子たち — なぜ全て森の内側から広がったんだ。",
						"chinese": "凯恩。这些孢子——为什么全都从森林内部扩散出来的？",
						"french": "Kain. Ces spores — pourquoi se sont-elles toutes répandues depuis l'intérieur de la forêt ?",
						"spanish": "Kain. Estas esporas — ¿por qué se extendieron todas desde el interior del bosque?",
						"vietnamese": "Kain. Những bào tử này — tại sao chúng lại lan ra từ bên trong rừng?",
						"thai": "ไคน์. สปอร์พวกนี้ — ทำไมพวกมันถึงแพร่กระจายออกมาจากด้านในป่าทั้งหมดเลยล่ะ?",
						"hindi": "केन। ये बीजाणु — ये सब जंगल के अंदर से क्यों फैले?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kain",
					"content": {
						"korean": "원래 그래. 숲 깊은 곳에 핵이 있으면 바깥으로 퍼지거든.",
						"english": "That's how it is. If there's a core deep within the forest, it spreads outwards.",
						"japanese": "元々そうだ。森の奥深くに核があれば外に広がるものだ。",
						"chinese": "本来就是那样。如果森林深处有核心，它就会向外扩散。",
						"french": "C'est normal. S'il y a un noyau au plus profond de la forêt, il se répand vers l'extérieur.",
						"spanish": "Así es. Si hay un núcleo en lo profundo del bosque, se extiende hacia afuera.",
						"vietnamese": "Vốn dĩ là như vậy. Nếu có một lõi ở sâu trong rừng, nó sẽ lan ra bên ngoài.",
						"thai": "มันเป็นอย่างนั้นอยู่แล้ว. ถ้ามีแกนหลักอยู่ในส่วนลึกของป่า, มันก็จะแพร่กระจายออกมาด้านนอก.",
						"hindi": "यह ऐसा ही है। यदि जंगल के गहरे में एक नाभिक होता है, तो यह बाहर की ओर फैलता है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…그렇구나.",
						"english": "...I see.",
						"japanese": "…そうか。",
						"chinese": "……原来如此。",
						"french": "…Je vois.",
						"spanish": "…Ya veo.",
						"vietnamese": "…Thì ra là vậy.",
						"thai": "…อย่างนี้นี่เอง.",
						"hindi": "…समझ गया।"
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "exit",
					"speaker": "kain",
					"duration_ms": 400
				}
			]
		},
		{
			"id": 14,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "kain",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "kain",
					"content": {
						"korean": "저기야. 저 핵을 부수면 이 구역은 끝나.",
						"english": "There it is. If we destroy that core, this area will be clear.",
						"japanese": "あそこだ。あの核を破壊すれば、この区域は終わる。",
						"chinese": "在那儿。如果摧毁那个核心，这个区域就结束了。",
						"french": "Le voilà. Si nous détruisons ce noyau, cette zone sera dégagée.",
						"spanish": "Ahí está. Si destruimos ese núcleo, esta zona estará despejada.",
						"vietnamese": "Nó ở đó. Nếu phá hủy lõi đó, khu vực này sẽ kết thúc.",
						"thai": "อยู่นั่นแล้ว. ถ้าทำลายแกนหลักนั่น, บริเวณนี้ก็จะเสร็จสิ้น.",
						"hindi": "वह रहा। यदि हम उस नाभिक को नष्ट कर दें, तो यह क्षेत्र समाप्त हो जाएगा।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "알겠어.",
						"english": "Understood.",
						"japanese": "分かった。",
						"chinese": "知道了。",
						"french": "Compris.",
						"spanish": "Entendido.",
						"vietnamese": "Đã rõ.",
						"thai": "เข้าใจแล้ว.",
						"hindi": "समझ गया।"
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "exit",
					"speaker": "kain",
					"duration_ms": 400
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "인간이 여기까지 왔군. 숲은 너희를 원하지 않는다.",
						"english": "Humans have come this far. The forest does not want you here.",
						"japanese": "人間がここまで来たか。森はお前たちを望んでいない。",
						"chinese": "人类竟然来到了这里。森林不欢迎你们。",
						"french": "Les humains sont arrivés jusqu'ici. La forêt ne veut pas de vous.",
						"spanish": "Los humanos han llegado hasta aquí. El bosque no os quiere.",
						"vietnamese": "Con người đã đến tận đây. Rừng không muốn các người ở đây.",
						"thai": "มนุษย์มาได้ถึงที่นี่แล้วสินะ. ป่าไม่ต้องการพวกเจ้า.",
						"hindi": "इंसान इतनी दूर आ गए हैं। जंगल तुम्हें नहीं चाहता।"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "비켜. 우린 포자를 막으러 온 거야.",
						"english": "Move. We're here to stop the spores.",
						"japanese": "どけ。我々は胞子を食い止めに来たのだ。",
						"chinese": "让开。我们是来阻止孢子的。",
						"french": "Écartez-vous. Nous sommes ici pour arrêter les spores.",
						"spanish": "Apartaos. Estamos aquí para detener las esporas.",
						"vietnamese": "Tránh ra. Chúng tôi đến đây để ngăn chặn bào tử.",
						"thai": "หลีกไป. เรามาที่นี่เพื่อยับยั้งสปอร์.",
						"hindi": "हटो। हम बीजाणुओं को रोकने आए हैं।"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "막는다고. …웃기는 소리.",
						"english": "Stopping them, you say. ...What a joke.",
						"japanese": "止めるだと。…笑わせるな。",
						"chinese": "阻止它们？……真可笑。",
						"french": "Arrêter les spores, dites-vous. …Quelle blague.",
						"spanish": "¿Detenerlos, decís? ...Qué tontería.",
						"vietnamese": "Ngăn chặn sao. …Thật nực cười.",
						"thai": "จะหยุดมันงั้นเหรอ. …ตลกสิ้นดี.",
						"hindi": "उन्हें रोकना। …क्या मजाक है।"
					},
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "…숲은 거짓말하지 않아. 인간이 거짓말하지.",
						"english": "...The forest does not lie. Humans do.",
						"japanese": "…森は嘘をつかない。人間が嘘をつくのだ。",
						"chinese": "……森林不会说谎。人类才会。",
						"french": "…La forêt ne ment pas. Les humains mentent.",
						"spanish": "…El bosque no miente. Los humanos mienten.",
						"vietnamese": "…Rừng không nói dối. Con người mới nói dối.",
						"thai": "…ป่าไม่เคยโกหก. มนุษย์ต่างหากที่โกหก.",
						"hindi": "…जंगल झूठ नहीं बोलता। इंसान बोलते हैं।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리를 하는 거야.",
						"english": "What are you talking about?",
						"japanese": "何を言っているんだ。",
						"chinese": "你在说什么？",
						"french": "Qu'est-ce que vous racontez ?",
						"spanish": "¿Qué estás diciendo?",
						"vietnamese": "Ngươi đang nói gì vậy?",
						"thai": "คุณกำลังพูดอะไร?",
						"hindi": "तुम क्या कह रहे हो?"
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "kain",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "kain",
					"content": {
						"korean": "수고했어. 더 깊이 들어간다.",
						"english": "Well done. We're going deeper.",
						"japanese": "お疲れ様。もっと深く進むぞ。",
						"chinese": "辛苦了。我们继续深入。",
						"french": "Bon travail. Nous allons plus loin.",
						"spanish": "Buen trabajo. Nos adentraremos más.",
						"vietnamese": "Làm tốt lắm. Chúng ta sẽ đi sâu hơn.",
						"thai": "ดีมาก. เราจะเข้าไปลึกกว่านี้.",
						"hindi": "अच्छा काम किया। हम और गहरे जा रहे हैं।"
					},
					"emotion": "happy"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "아직 멀었어.",
						"english": "Not yet.",
						"japanese": "まだまだだ。",
						"chinese": "还早着呢。",
						"french": "Pas encore.",
						"spanish": "Todavía falta.",
						"vietnamese": "Vẫn còn xa lắm.",
						"thai": "ยังอีกไกล.",
						"hindi": "अभी बहुत दूर है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…다시 온다.",
						"english": "...I'll be back.",
						"japanese": "…また来る。",
						"chinese": "……我还会再来的。",
						"french": "…Je reviendrai.",
						"spanish": "…Volveré.",
						"vietnamese": "…Ta sẽ trở lại.",
						"thai": "…จะกลับมาใหม่.",
						"hindi": "…मैं वापस आऊंगा।"
					},
					"emotion": "angry"
				}
			]
		}
	]
};
