export const scenario_snowy_fenrir_17_01 = {
	"scenario_id": "snowy_fenrir_17_01",
	"order": 1,
	"act": "intro",
	"theme": "snowy",
	"actors": {
		"eira": {
			"id": "mon_0c37c014-b5ca-4f2f-ad03-5d393e5b2eb1",
			"name": {
				"korean": "에이라",
				"english": "Eira",
				"japanese": "エイラ",
				"chinese": "艾拉",
				"french": "Eira",
				"spanish": "Eira",
				"vietnamese": "Eira",
				"thai": "ไอรา",
				"hindi": "ऐरा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8e2970b7-bcb1-4b1c-6bf0-93106b373500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/0ca1ec09-a624-450f-054a-b98de58bdb00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"눈보라가 거세진 설원.",
			"늑대가 지나간 자리마다 죽음이 흩뿌려졌다.",
			"온기가 가신 사체들. 짐승의 흔적이라기엔 너무 잔혹했다.",
			"사냥은 변하고 있었다. 알 수 없는 위화감 속에서."
		],
		"english": [
			"A blizzard raged across the snowy plains.",
			"Wherever the wolf passed, death was strewn.",
			"Lifeless bodies. Too cruel for mere animal traces.",
			"The hunt was changing. An unsettling feeling lingered."
		],
		"japanese": [
			"吹雪が荒れ狂う雪原。",
			"狼が通った跡には、死が散りばめられていた。",
			"温もりを失った死体。獣の痕跡にしては、あまりにも残酷だった。",
			"狩りは変わりつつあった。知られざる違和感の中で。"
		],
		"chinese": [
			"暴风雪肆虐的雪原。",
			"狼所经之处，死亡遍布。",
			"失去温度的尸体。说是野兽的痕迹，未免太过残忍。",
			"狩猎正在改变。在一种莫名的违和感中。"
		],
		"french": [
			"La plaine enneigée, balayée par un blizzard grandissant.",
			"Partout où le loup était passé, la mort s'était répandue.",
			"Des corps sans vie. Trop cruel pour de simples traces d'animaux.",
			"La chasse changeait. Une étrange discorde planait."
		],
		"spanish": [
			"La ventisca azotaba la llanura nevada.",
			"La muerte se sembraba por donde el lobo pasaba.",
			"Cadáveres sin calor. Demasiado cruel para ser rastros de animales.",
			"La caza estaba cambiando. Una extraña inquietud se cernía."
		],
		"vietnamese": [
			"Tuyết nguyên, nơi bão tuyết hoành hành dữ dội.",
			"Cái chết vương vãi khắp nơi dấu chân sói đi qua.",
			"Những thi thể đã mất đi hơi ấm. Quá tàn nhẫn để chỉ là dấu vết của một con thú.",
			"Cuộc săn lùng đang thay đổi. Trong một sự bất an không thể giải thích."
		],
		"thai": [
			"ทุ่งหิมะที่พายุหิมะโหมกระหน่ำ",
			"ความตายกระจัดกระจายไปทุกที่ที่หมาป่าผ่านไป",
			"ซากศพที่ไร้ซึ่งความอบอุ่น โหดร้ายเกินกว่าจะเป็นร่องรอยของสัตว์ป่า",
			"การล่ากำลังเปลี่ยนแปลงไป ท่ามกลางความรู้สึกแปลกแยกที่ไม่รู้จัก"
		],
		"hindi": [
			"बर्फीले मैदान पर बर्फीले तूफान का कहर।",
			"जहाँ-जहाँ भेड़िया गुज़रा, वहाँ-वहाँ मौत बिखरी थी।",
			"ठंडे पड़े शव। जानवरों के निशानों के लिए बहुत क्रूर।",
			"शिकार बदल रहा था। एक अज्ञात बेचैनी के बीच।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "눈보라가 휘몰아치는 설원. 작은 짐승들의 사체가 길게 흩뿌려져 있었다.",
						"english": "A blizzard raged across the snowy plains. Small animal corpses lay scattered far and wide.",
						"japanese": "吹雪が吹き荒れる雪原。小さな獣たちの死骸が長く散らばっていた。",
						"chinese": "暴风雪肆虐的雪原。小动物的尸体绵延散布。",
						"french": "La plaine enneigée, balayée par le blizzard. Des cadavres de petits animaux jonchaient le sol à perte de vue.",
						"spanish": "Una llanura nevada azotada por la ventisca. Cadáveres de pequeños animales se extendían esparcidos.",
						"vietnamese": "Tuyết nguyên bão tuyết cuồng phong. Thi thể những con thú nhỏ nằm rải rác.",
						"thai": "ทุ่งหิมะที่พายุหิมะพัดกระหน่ำ ซากศพสัตว์เล็กๆ กระจัดกระจายไปทั่ว",
						"hindi": "बर्फीले तूफान से घिरा बर्फीला मैदान। छोटे जानवरों के शव दूर-दूर तक बिखरे पड़े थे।"
					},
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "이게 다… {random_boss}가 한 짓이라고?",
						"english": "All this... {random_boss} did this?",
						"japanese": "これが全部… {random_boss}の仕業だって？",
						"chinese": "这一切… 都是{random_boss}做的？",
						"french": "Tout ça... c'est l'œuvre de {random_boss} ?",
						"spanish": "¿Todo esto... lo hizo {random_boss}?",
						"vietnamese": "Tất cả những thứ này... là do {random_boss} làm sao?",
						"thai": "ทั้งหมดนี่… {random_boss} เป็นคนทำงั้นเหรอ?",
						"hindi": "यह सब... {random_boss} ने किया?"
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그렇군. 온기가 완전히 가셨어. 죽은 지 꽤 된 것 같아.",
						"english": "I see. All warmth is gone. They seem to have been dead for a while.",
						"japanese": "なるほど。完全に温もりが失われている。死んでから、かなり時間が経っているようだ。",
						"chinese": "原来如此。温度完全消失了。看来已经死了很久了。",
						"french": "Je vois. Toute chaleur a disparu. Ils semblent être morts depuis un moment.",
						"spanish": "Ya veo. Han perdido todo el calor. Parece que llevan muertos un tiempo.",
						"vietnamese": "Ra vậy. Hơi ấm đã hoàn toàn biến mất. Có vẻ như đã chết khá lâu rồi.",
						"thai": "เข้าใจแล้ว ความอบอุ่นหายไปหมดเลย ดูเหมือนจะตายมานานแล้ว",
						"hindi": "समझ गया। गर्माहट पूरी तरह से जा चुकी है। लगता है उन्हें मरे हुए काफी समय हो गया है।"
					},
					"speaker": "eira"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "흔적을 따라가면 더 자세히 알 수 있을 거야.",
						"english": "If we follow the traces, we'll learn more.",
						"japanese": "痕跡を辿れば、もっと詳しくわかるだろう。",
						"chinese": "沿着痕迹追寻，就能了解更多。",
						"french": "Si nous suivons les traces, nous en apprendrons davantage.",
						"spanish": "Si seguimos los rastros, sabremos más detalles.",
						"vietnamese": "Nếu đi theo dấu vết, chúng ta sẽ biết rõ hơn.",
						"thai": "ถ้าตามร่องรอยไป ก็น่าจะรู้รายละเอียดได้มากกว่านี้",
						"hindi": "अगर हम निशानों का पीछा करें, तो और जानकारी मिल सकती है।"
					}
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "eira",
					"spot": [
						2,
						3
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "이 사체들을 봐. 마치… 길을 내기 위해 놓인 것처럼.",
						"english": "Look at these bodies. It's as if... they were placed here to make a path.",
						"japanese": "この死体を見て。まるで…道を作るために置かれたかのように。",
						"chinese": "看看这些尸体。就像是… 为了开辟道路而放置的。",
						"french": "Regardez ces corps. C'est comme si... ils avaient été placés pour créer un chemin.",
						"spanish": "Mira estos cuerpos. Es como si... hubieran sido puestos para hacer un camino.",
						"vietnamese": "Nhìn những thi thể này đi. Cứ như thể... chúng được đặt ra để tạo thành một con đường vậy.",
						"thai": "ดูซากศพพวกนี้สิ เหมือนกับว่า… ถูกวางเอาไว้เพื่อสร้างทาง",
						"hindi": "इन शवों को देखो। जैसे... उन्हें रास्ता बनाने के लिए रखा गया हो।"
					},
					"speaker": "eira",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "길이라니? 그저 잔인한 사냥 흔적이잖아.",
						"english": "A path? It's just traces of a cruel hunt.",
						"japanese": "道だって？ただの残忍な狩りの痕跡じゃないか。",
						"chinese": "道路？那只是残酷狩猎的痕迹罢了。",
						"french": "Un chemin ? Ce ne sont que les traces d'une chasse cruelle.",
						"spanish": "¿Un camino? Solo son rastros de una caza cruel.",
						"vietnamese": "Đường sao? Đây chỉ là dấu vết của một cuộc săn tàn nhẫn thôi mà.",
						"thai": "ทางเหรอ? นี่มันก็แค่ร่องรอยการล่าที่โหดร้ายเท่านั้นเอง",
						"hindi": "रास्ता? यह तो बस एक क्रूर शिकार के निशान हैं।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "단순한 사냥이 아냐. 무언가 의도적이야.",
						"english": "More than just hunting. It's intentional.",
						"japanese": "ただの狩りじゃない。何か意図的だ。",
						"chinese": "不只是狩猎。有某种意图。",
						"french": "Pas une simple chasse. C'est intentionnel.",
						"spanish": "No es solo caza. Es intencional.",
						"vietnamese": "Không chỉ săn bắn. Có chủ ý.",
						"thai": "ไม่ใช่แค่ล่า มีเจตนา",
						"hindi": "यह सिर्फ शिकार नहीं। कुछ इरादा है।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "eira",
					"spot": [
						4,
						3
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "흔적에서 피 냄새보다… 메마른 기운이 느껴져.",
						"english": "The traces... I sense a dry aura, more than the smell of blood.",
						"japanese": "痕跡から血の匂いよりも…乾いた気配を感じる。",
						"chinese": "痕迹中，比起血腥味……更像是枯槁之气。",
						"french": "Des traces, je sens une aura sèche... plus que le sang.",
						"spanish": "Los rastros... huelen a sequedad, no solo a sangre.",
						"vietnamese": "Dấu vết, cảm thấy khô héo… hơn mùi máu.",
						"thai": "ร่องรอย… รู้สึกถึงความแห้งแล้ง มากกว่ากลิ่นเลือด",
						"hindi": "निशानों से, खून से ज़्यादा... सूखी ऊर्जा महसूस होती है।"
					},
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "메마르다니? 분명히 피투성이잖아.",
						"english": "Dry? But it's clearly bloody.",
						"japanese": "乾いてるって？明らかに血だらけじゃないか。",
						"chinese": "枯槁？明明血迹斑斑啊。",
						"french": "Desséché ? Mais c'est clairement sanglant.",
						"spanish": "¿Seco? Pero está claramente ensangrentado.",
						"vietnamese": "Khô héo? Rõ ràng là đẫm máu mà.",
						"thai": "แห้งเหือด? แต่มันเต็มไปด้วยเลือดชัดๆ",
						"hindi": "सूखा? पर यह तो साफ़-साफ़ खूनी है।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "이 사체들. {random_boss}의 몸과… 너무 닮아있어.",
						"english": "These bodies. Too similar to {random_boss}'s.",
						"japanese": "これらの死体。{random_boss}の体に…あまりにも似ている。",
						"chinese": "这些尸体。和{random_boss}的身体……太像了。",
						"french": "Ces corps. Ils ressemblent... trop au corps de {random_boss}.",
						"spanish": "Estos cadáveres. Se parecen... demasiado al cuerpo de {random_boss}.",
						"vietnamese": "Những xác chết này. Quá giống với cơ thể của {random_boss}.",
						"thai": "ศพพวกนี้... คล้ายกับร่างของ {random_boss} เหลือเกิน",
						"hindi": "ये शव। {random_boss} के शरीर से... बहुत ज़्यादा मिलते-जुलते हैं।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "뭐라고?",
						"english": "What?",
						"japanese": "なんだって？",
						"chinese": "什么？",
						"french": "Quoi ?",
						"spanish": "¿Qué?",
						"vietnamese": "Cái gì cơ?",
						"thai": "อะไรนะ?",
						"hindi": "क्या कहा?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "흩뿌려진 사체들의 수가 기하급수적으로 늘어났다.",
						"english": "Scattered corpses increased exponentially.",
						"japanese": "散らばった死体の数が、幾何級数的に増えた。",
						"chinese": "散落尸体数量呈指数级增长。",
						"french": "Le nombre de corps éparpillés a augmenté exponentiellement.",
						"spanish": "Los cadáveres esparcidos aumentaron exponencialmente.",
						"vietnamese": "Xác chết rải rác tăng theo cấp số nhân.",
						"thai": "ศพกระจัดกระจายเพิ่มขึ้นทวีคูณ",
						"hindi": "बिखरे शवों की संख्या घातीय रूप से बढ़ गई।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "점점 심해지는군. 이 {random_boss}는… 그저 사냥하는 게 아니야.",
						"english": "It's getting worse. This {random_boss}... isn't just hunting.",
						"japanese": "ますますひどくなってきた。この{random_boss}は…ただ狩っているだけじゃない。",
						"chinese": "越来越糟了。这个{random_boss}……不只是在狩猎。",
						"french": "Ça empire. Ce {random_boss}... ne fait pas que chasser.",
						"spanish": "Está empeorando. Este {random_boss}... no solo está cazando.",
						"vietnamese": "Nó ngày càng tệ hơn. {random_boss} này… không chỉ là săn bắn.",
						"thai": "มันแย่ลงเรื่อยๆ {random_boss} ตัวนี้... ไม่ได้แค่ล่าเหยื่อ",
						"hindi": "यह बदतर होता जा रहा है। यह {random_boss}... सिर्फ शिकार नहीं कर रहा है।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "그럼 뭘 하는 건데?",
						"english": "Then what is it doing?",
						"japanese": "じゃあ、何をしているんだ？",
						"chinese": "那它在做什么？",
						"french": "Alors, qu'est-ce qu'il fait ?",
						"spanish": "¿Entonces qué está haciendo?",
						"vietnamese": "Vậy nó đang làm gì?",
						"thai": "แล้วมันกำลังทำอะไรล่ะ?",
						"hindi": "तो वह क्या कर रहा है?"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "무언가… 자신을 채우고 있어. 이 죽음으로.",
						"english": "It's... filling itself. With these deaths.",
						"japanese": "何か…自分を満たしている。この死で。",
						"chinese": "它在……填充自己。用这些死亡。",
						"french": "Il est... en train de se remplir. Avec ces morts.",
						"spanish": "Está... llenándose a sí mismo. Con estas muertes.",
						"vietnamese": "Nó… đang lấp đầy bản thân. Bằng những cái chết này.",
						"thai": "มันกำลัง... เติมเต็มตัวเอง ด้วยความตายเหล่านี้",
						"hindi": "वह... खुद को भर रहा है। इन मौतों से।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "거대한 그림자가 탐험대를 집어삼켰다.",
						"english": "A giant shadow engulfed the expedition.",
						"japanese": "巨大な影が探検隊を飲み込んだ。",
						"chinese": "巨大的阴影吞噬了探险队。",
						"french": "Une ombre géante a englouti l'expédition.",
						"spanish": "Una sombra gigante envolvió a la expedición.",
						"vietnamese": "Một bóng tối khổng lồ đã nuốt chửng đoàn thám hiểm.",
						"thai": "เงามืดมหึมากลืนกินคณะสำรวจ",
						"hindi": "एक विशाल परछाई ने अभियान दल को निगल लिया।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "하찮은 것들. 감히 나를 막으려 하다니.",
						"english": "Insignificant beings. How dare you try to stop me.",
						"japanese": "取るに足らない者ども。よくも私を止めようとしたな。",
						"chinese": "渺小的东西。竟敢阻拦我。",
						"french": "Êtres insignifiants. Comment osez-vous tenter de m'arrêter.",
						"spanish": "Seres insignificantes. Cómo osáis intentar detenerme.",
						"vietnamese": "Những kẻ tầm thường. Dám cả gan ngăn cản ta.",
						"thai": "พวกไร้ค่า. กล้าดียังไงมาขวางข้า",
						"hindi": "तुच्छ प्राणी। हिम्मत कैसे हुई मुझे रोकने की।"
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "젠장… 아직… 끝나지 않았어!",
						"english": "Damn it... It's not... over yet!",
						"japanese": "くそ… まだ… 終わってない！",
						"chinese": "该死… 还没… 结束！",
						"french": "Maudit... Ce n'est pas... fini !",
						"spanish": "Maldita sea... ¡Todavía no... ha terminado!",
						"vietnamese": "Chết tiệt… Vẫn… chưa kết thúc!",
						"thai": "บ้าจริง... ยัง... ไม่จบ!",
						"hindi": "धिक्कार है... अभी... खत्म नहीं हुआ है!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "정체 모를 거대한 그림자가 앞을 가로막았다.",
						"english": "A gigantic, unknown shadow blocked the way.",
						"japanese": "正体不明の巨大な影が道を塞いだ。",
						"chinese": "一个不知名的巨大黑影挡住了去路。",
						"french": "Une ombre gigantesque et inconnue barra le chemin.",
						"spanish": "Una sombra gigantesca y desconocida bloqueó el camino.",
						"vietnamese": "Một bóng đen khổng lồ, không rõ danh tính, đã chặn lối đi.",
						"thai": "เงาขนาดใหญ่ที่ไม่รู้จักขวางทางอยู่ข้างหน้า",
						"hindi": "एक विशाल, अज्ञात परछाई ने रास्ता रोक दिया।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "감히… 이 영역을 침범하다니.",
						"english": "How dare you... trespass upon this domain.",
						"japanese": "敢えて… この領域を侵犯するとは。",
						"chinese": "竟敢… 侵犯这片领域。",
						"french": "Comment oses-tu... empiéter sur ce domaine.",
						"spanish": "¿Cómo osas... invadir este dominio?",
						"vietnamese": "Dám... xâm phạm lãnh địa này sao.",
						"thai": "กล้าดียังไง... มาบุกรุกอาณาเขตนี้",
						"hindi": "तुम्हारी हिम्मत कैसे हुई... इस क्षेत्र में घुसपैठ करने की।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "네가… 그 {random_boss}인가!",
						"english": "You are... that {random_boss}!",
						"japanese": "お前が… あの {random_boss}か！",
						"chinese": "你就是… 那个 {random_boss}吗！",
						"french": "Tu es… ce {random_boss} !",
						"spanish": "¡Así que tú eres... ese {random_boss}!",
						"vietnamese": "Ngươi... là {random_boss} đó à!",
						"thai": "แกคือ... {random_boss} นั่นเอง!",
						"hindi": "तुम ही हो... वह {random_boss}!"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "그래. 그리고 너희는… 내 다음 먹잇감이지.",
						"english": "Indeed. And you all... are my next prey.",
						"japanese": "そうだ。そしてお前たちは… 私の次の獲物だ。",
						"chinese": "没错。而你们… 就是我的下一个猎物。",
						"french": "En effet. Et vous… êtes ma prochaine proie.",
						"spanish": "Así es. Y vosotros... sois mi próxima presa.",
						"vietnamese": "Đúng vậy. Còn các ngươi... là con mồi tiếp theo của ta.",
						"thai": "ใช่แล้ว. และพวกเจ้า... คือเหยื่อรายต่อไปของข้า.",
						"hindi": "हाँ। और तुम सब… मेरा अगला शिकार हो।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "direction",
					"spot": [
						2,
						3
					],
					"speaker": "eira",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "틀렸어… 저건 짐승이 아니야. 사체들의 집합체야.",
						"english": "Wrong… That's no beast. It's an amalgamation of corpses.",
						"japanese": "違う… あれは獣ではない。死体の集合体だ。",
						"chinese": "错了… 那不是野兽。那是尸体的集合体。",
						"french": "Faux… Ce n'est pas une bête. C'est un assemblage de cadavres.",
						"spanish": "Estás equivocado… Eso no es una bestia. Es un conglomerado de cadáveres.",
						"vietnamese": "Sai rồi... Đó không phải là một con quái vật. Đó là một tập hợp các xác chết.",
						"thai": "ผิดแล้ว... นั่นไม่ใช่สัตว์ร้าย. มันคือกลุ่มก้อนของซากศพ.",
						"hindi": "गलत… वह कोई जानवर नहीं है। वह शवों का एक समूह है।"
					},
					"speaker": "eira",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "흥… 기록자 따위가 뭘 안다고.",
						"english": "Hmph… What would a mere Chronicler know?",
						"japanese": "ふん… 記録者ごときが何をわかる。",
						"chinese": "哼… 区区记录者懂什么。",
						"french": "Hmm… Qu'est-ce qu'un simple Chroniqueur pourrait savoir ?",
						"spanish": "Hmph… ¿Qué sabría un simple Cronista?",
						"vietnamese": "Hừm... Một kẻ ghi chép như ngươi biết gì chứ.",
						"thai": "หึ... แค่ผู้บันทึกจะรู้อะไร.",
						"hindi": "ह्म… एक अदना सा इतिहासकार क्या जानेगा।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "온몸이… 죽음으로 엮여있어. 단순한 짐승이 아니야.",
						"english": "Its entire body… is woven with death. It's no mere beast.",
						"japanese": "全身が… 死で編み込まれている。単なる獣ではない。",
						"chinese": "它的全身… 都与死亡交织。这不是普通的野兽。",
						"french": "Son corps entier… est tissé de mort. Ce n'est pas une simple bête.",
						"spanish": "Todo su cuerpo… está entrelazado con la muerte. No es una simple bestia.",
						"vietnamese": "Toàn thân... được dệt bằng cái chết. Đó không phải là một con quái vật đơn thuần.",
						"thai": "ร่างกายของมัน... ถักทอด้วยความตาย. มันไม่ใช่แค่สัตว์ร้ายธรรมดา.",
						"hindi": "इसका पूरा शरीर… मृत्यु से बुना हुआ है। यह कोई सामान्य जानवर नहीं है।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "정체 모를 자가 쓰러졌다. 사체들이 와르르 무너져 내렸다.",
						"english": "The unknown entity fell. Its corporeal form collapsed into a pile of corpses.",
						"japanese": "正体不明の者が倒れた。死体がバラバラと崩れ落ちた。",
						"chinese": "身份不明者倒下了。尸体轰然倒塌。",
						"french": "L'entité inconnue est tombée. Les cadavres se sont effondrés en vrac.",
						"spanish": "El ser desconocido cayó. Los cadáveres se derrumbaron.",
						"vietnamese": "Kẻ không rõ danh tính đã ngã xuống. Các xác chết đổ sập.",
						"thai": "ผู้ไม่ประสงค์ออกนามล้มลง. ซากศพพังทลายลงมา.",
						"hindi": "अज्ञात प्राणी गिर गया। शव ढह गए।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "크윽… 이건… 끝이 아니야…! 이 굶주림은… 사라지지 않아!",
						"english": "Ugh… This… isn't the end…! This hunger… will not vanish!",
						"japanese": "くっ… これは… 終わりではない…！この飢えは… 消えない！",
						"chinese": "呃… 这… 还没结束…！这份饥饿… 不会消失！",
						"french": "Argh… Ce n'est… pas la fin… ! Cette faim… ne disparaîtra pas !",
						"spanish": "¡Ugh… Esto… no es el fin…! ¡Esta hambruna… no desaparecerá!",
						"vietnamese": "Khụ... Đây... không phải là kết thúc...! Cơn đói này... sẽ không biến mất!",
						"thai": "อึก... นี่... ยังไม่จบ...! ความหิวนี้... ไม่มีวันหายไป!",
						"hindi": "उह… यह… अंत नहीं है…! यह भूख… खत्म नहीं होगी!"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…사라지지 않는다고?",
						"english": "…Won't vanish?",
						"japanese": "…消えないだと？",
						"chinese": "…不会消失？",
						"french": "…Ne disparaîtra pas ?",
						"spanish": "¿…No desaparecerá?",
						"vietnamese": "...Sẽ không biến mất sao?",
						"thai": "...จะไม่หายไป?",
						"hindi": "…खत्म नहीं होगी?"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "흩뿌려진 사체들 사이로, 또 다른 굶주림의 흔적이 아련하게 느껴졌다.",
						"english": "Among the scattered corpses, the faint trace of another hunger could be felt.",
						"japanese": "散らばった死体の間から、別の飢えの痕跡がかすかに感じられた。",
						"chinese": "在散落的尸体之间，隐约感受到了另一种饥饿的痕迹。",
						"french": "Parmi les cadavres éparpillés, la faible trace d'une autre faim se faisait sentir.",
						"spanish": "Entre los cadáveres esparcidos, se sentía débilmente el rastro de otra hambruna.",
						"vietnamese": "Giữa những xác chết rải rác, một dấu vết mờ nhạt của cơn đói khác lại được cảm nhận.",
						"thai": "ท่ามกลางซากศพที่กระจัดกระจาย, ร่องรอยของความหิวโหยอีกอย่างหนึ่งก็สัมผัสได้เลือนราง.",
						"hindi": "बिखरे हुए शवों के बीच, एक और भूख का धुंधला निशान महसूस हुआ।"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		}
	]
} as const;
