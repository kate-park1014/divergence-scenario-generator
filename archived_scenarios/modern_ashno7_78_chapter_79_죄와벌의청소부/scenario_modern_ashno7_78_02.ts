export const scenario_modern_ashno7_78_02 = {
	"scenario_id": "modern_ashno7_78_02",
	"order": 2,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"max": {
			"id": "mon_6e8c1577-89e2-49f6-a9f3-a6521b9e7f59",
			"name": {
				"korean": "맥스",
				"english": "Max",
				"japanese": "マックス",
				"chinese": "麦克斯",
				"french": "Max",
				"spanish": "Max",
				"vietnamese": "Max",
				"thai": "แม็กซ์",
				"hindi": "मैक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8bd7f351-400b-46f9-828f-aa2542734900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/62971060-c904-4d96-afcd-d11f831b3e00/public"
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
					"content": {
						"korean": "도시의 버려진 골목. 역겨운 쓰레기 냄새 대신 묘한 공허함이 감돌았다.",
						"english": "An abandoned city alley. Instead of the usual stench of garbage, a strange emptiness lingered.",
						"japanese": "都市の廃れた路地。不快なゴミの匂いの代わりに、奇妙な虚しさが漂っていた。",
						"chinese": "城市废弃的巷子里。没有令人作呕的垃圾味，取而代之的是一种莫名的空虚感。",
						"french": "Une ruelle abandonnée de la ville. Au lieu de l'odeur nauséabonde des ordures, un étrange vide planait.",
						"spanish": "Un callejón abandonado de la ciudad. En lugar del asqueroso olor a basura, una extraña vacuidad se cernía.",
						"vietnamese": "Một con hẻm bị bỏ hoang trong thành phố. Thay vì mùi rác hôi thối, một sự trống rỗng kỳ lạ bao trùm.",
						"thai": "ตรอกร้างในเมือง แทนที่จะเป็นกลิ่นขยะเหม็นเน่า กลับมีแต่ความว่างเปล่าแปลกๆ ลอยอยู่",
						"hindi": "शहर की एक परित्यक्त गली। घृणित कचरे की गंध के बजाय, एक अजीब शून्यता छाई हुई थी।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "여기가 실종자 유류품이 발견된 곳이라고?",
						"english": "This is where the missing person's belongings were found?",
						"japanese": "ここが失踪者の遺留品が見つかった場所だと？",
						"chinese": "这里就是失踪者遗物被发现的地方？",
						"french": "C'est ici qu'ont été retrouvés les effets du disparu ?",
						"spanish": "¿Aquí es donde se encontraron las pertenencias del desaparecido?",
						"vietnamese": "Đây là nơi tìm thấy di vật của người mất tích sao?",
						"thai": "ที่นี่คือที่ที่พบของใช้ของผู้สูญหายเหรอ?",
						"hindi": "यहीं लापता व्यक्ति का सामान मिला था?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "유류품은 있는데… 다른 흔적은 없어. 이상할 정도로 깨끗해.",
						"english": "Belongings are here... but no other traces. It's strangely clean.",
						"japanese": "遺留品はあるが… 他の痕跡はない。不自然なほどきれいだ。",
						"chinese": "遗物是找到了……可没有其他痕迹。干净得异常。",
						"french": "Les effets sont là… mais aucune autre trace. C'est étrangement propre.",
						"spanish": "Las pertenencias están aquí… pero no hay otras huellas. Está extrañamente limpio.",
						"vietnamese": "Di vật thì có... nhưng không có dấu vết nào khác. Sạch sẽ một cách kỳ lạ.",
						"thai": "มีของใช้... แต่ไม่มีร่องรอยอื่น สะอาดผิดปกติ",
						"hindi": "सामान तो है… पर और कोई निशान नहीं। अजीब तरह से साफ है।"
					},
					"emotion": "base",
					"speaker": "character_1"
				},
				{
					"type": "speech",
					"content": {
						"korean": "누군가 일부러 치운 것 같아.",
						"english": "Someone seems to have cleaned it up intentionally.",
						"japanese": "誰かがわざと片付けたようだ。",
						"chinese": "看来是有人故意清理过。",
						"french": "Quelqu'un semble l'avoir nettoyé exprès.",
						"spanish": "Parece que alguien lo limpió a propósito.",
						"vietnamese": "Có vẻ như ai đó đã cố tình dọn dẹp.",
						"thai": "เหมือนมีคนจงใจเก็บกวาดไป",
						"hindi": "लगता है किसी ने जानबूझकर साफ किया है।"
					},
					"emotion": "base",
					"speaker": "character_2"
				},
				{
					"speaker": "max",
					"action": "enter",
					"spot": [
						3,
						3
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "칫, 또 깨끗해졌잖아! 저것들이 다 치운 거라고!",
						"english": "Tch, it's clean again! They must have cleared it all out!",
						"japanese": "ちっ、またきれいになってる！あいつらが全部片付けたんだ！",
						"chinese": "嘁，又被清理干净了！肯定是那些家伙给弄的！",
						"french": "Tch, c'est propre à nouveau ! Ils ont dû tout nettoyer !",
						"spanish": "¡Tch, está limpio otra vez! ¡Deben haberlo limpiado todo!",
						"vietnamese": "Chậc, lại sạch nữa rồi! Bọn chúng đã dọn dẹp hết rồi!",
						"thai": "ชิ่ว์ สะอาดอีกแล้ว! พวกนั้นแหละที่กวาดไปหมด!",
						"hindi": "छी, यह फिर से साफ हो गया! उन सबने इसे हटा दिया होगा!"
					},
					"emotion": "angry",
					"speaker": "max"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아저씨는… 누구세요?",
						"english": "Mister… who are you?",
						"japanese": "おじさん… 誰ですか？",
						"chinese": "大叔……您是谁？",
						"french": "Monsieur… qui êtes-vous ?",
						"spanish": "Señor… ¿quién es usted?",
						"vietnamese": "Chú à… chú là ai vậy?",
						"thai": "คุณลุง… เป็นใครครับ?",
						"hindi": "अंकल… आप कौन हैं?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "내가 맥스다! 과거에는 이 구역 최고의 청소부였지! 그전까진 말이야!",
						"english": "I'm Max! I used to be the best cleaner in this area! Until then, that is!",
						"japanese": "俺がマックスだ！昔はこの地区で最高の掃除人だったんだ！その時まではな！",
						"chinese": "我是麦克斯！过去我曾是这个区域最棒的清洁工！直到那时为止！",
						"french": "Je suis Max ! J'étais le meilleur nettoyeur du coin ! Jusqu'à ce moment-là, du moins !",
						"spanish": "¡Soy Max! ¡Antes era el mejor limpiador de esta zona! ¡Hasta ese momento, claro!",
						"vietnamese": "Tôi là Max! Trước đây tôi từng là người dọn dẹp giỏi nhất khu này! Cho đến lúc đó!",
						"thai": "ฉันชื่อแม็กซ์! เมื่อก่อนฉันเคยเป็นคนทำความสะอาดที่เก่งที่สุดในย่านนี้! จนกระทั่งถึงตอนนั้นแหละ!",
						"hindi": "मैं मैक्स हूँ! पहले मैं इस इलाके का सबसे अच्छा सफाईकर्मी था! तब तक, मतलब!"
					},
					"emotion": "sad",
					"speaker": "max",
					"type": "speech"
				},
				{
					"content": {
						"korean": "다들 바보같이 모르지! 이 깨끗함이 진짜 깨끗함이 아니란 걸!",
						"english": "Everyone's too foolish to know! That this cleanliness isn't real cleanliness!",
						"japanese": "みんな馬鹿みたいに知らないんだ！この清潔さが本当の清潔さじゃないってことを！",
						"chinese": "大家都傻乎乎地不知道！这种干净不是真正的干净！",
						"french": "Tout le monde est trop stupide pour savoir ! Que cette propreté n'est pas une vraie propreté !",
						"spanish": "¡Todos son demasiado tontos para saber! ¡Que esta limpieza no es una limpieza real!",
						"vietnamese": "Mọi người ngu ngốc không biết! Rằng sự sạch sẽ này không phải là sự sạch sẽ thật sự!",
						"thai": "ทุกคนโง่เง่าไม่รู้! ว่าความสะอาดนี้ไม่ใช่ความสะอาดที่แท้จริง!",
						"hindi": "सब बेवकूफों की तरह नहीं जानते! कि यह सफाई असली सफाई नहीं है!"
					},
					"emotion": "angry",
					"speaker": "max",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						3,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "max"
				},
				{
					"content": {
						"korean": "지난달에도 그랬어! 내 푸드트럭 옆에 찌그러진 캔들이랑 박스들! 내가 직접 버린 건데!",
						"english": "It happened last month too! Dented cans and boxes next to my food truck! I threw them away myself!",
						"japanese": "先月もそうだった！俺のフードトラックの横にあったへこんだ缶とか箱とか！俺が自分で捨てたやつなのに！",
						"chinese": "上个月也是！我餐车旁的那些瘪罐头和箱子！那可是我亲手扔的！",
						"french": "C'est arrivé le mois dernier aussi ! Des canettes cabossées et des cartons près de mon food truck ! C'est moi qui les avais jetés !",
						"spanish": "¡También pasó el mes pasado! ¡Latas abolladas y cajas junto a mi camión de comida! ¡Yo mismo las tiré!",
						"vietnamese": "Tháng trước cũng vậy! Mấy cái lon móp với hộp cạnh xe bán đồ ăn của tôi! Tự tay tôi vứt đấy!",
						"thai": "เดือนที่แล้วก็เป็นแบบนี้แหละ! กระป๋องบุบๆ กับกล่องข้างรถฟู้ดทรัคของฉัน! ทั้งที่ฉันเป็นคนทิ้งเองนะ!",
						"hindi": "पिछले महीने भी ऐसा ही हुआ था! मेरे फ़ूड ट्रक के पास दबे हुए डिब्बे और बक्से! मैंने उन्हें खुद फेंका था!"
					},
					"emotion": "angry",
					"speaker": "max",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그래서요?",
						"english": "So what?",
						"japanese": "で？",
						"chinese": "然后呢？",
						"french": "Et alors ?",
						"spanish": "¿Y qué?",
						"vietnamese": "Rồi sao?",
						"thai": "แล้วไงต่อ?",
						"hindi": "तो क्या?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "max",
					"content": {
						"korean": "다음 날 아침! 흔적도 없이 사라졌다고! 냄새도 없이! 누가 그렇게 깨끗하게 치우냐고?!",
						"english": "The next morning! They vanished without a trace! Without a smell! Who cleans up that perfectly?!",
						"japanese": "翌朝には！跡形もなく消えてたんだ！匂いもなしに！誰がそんなにきれいに片付けるんだよ？！",
						"chinese": "第二天早上！它们消失得无影无踪！连味道都没有！谁会打扫得那么干净？！",
						"french": "Le lendemain matin ! Ils avaient disparu sans laisser de trace ! Sans odeur ! Qui nettoie aussi parfaitement ?!",
						"spanish": "¡A la mañana siguiente! ¡Desaparecieron sin dejar rastro! ¡Sin olor! ¡¿Quién limpia así de impecable?!",
						"vietnamese": "Sáng hôm sau! Chúng biến mất không dấu vết! Không mùi gì cả! Ai mà dọn dẹp sạch đến thế chứ?!",
						"thai": "เช้าวันต่อมา! มันหายไปไร้ร่องรอย! ไม่มีกลิ่นด้วย! ใครมันจะเก็บกวาดได้สะอาดขนาดนั้น?!",
						"hindi": "अगली सुबह! वे बिना किसी निशान के गायब हो गए! बिना गंध के! इतनी सफाई से कौन साफ करता है?!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "character_3",
					"content": {
						"korean": "쓰레기를 치우는 건 좋은 거 아니에요?",
						"english": "Isn't cleaning up trash a good thing?",
						"japanese": "ゴミを片付けるのは良いことじゃないんですか？",
						"chinese": "清理垃圾难道不是好事吗？",
						"french": "Nettoyer les ordures, ce n'est pas une bonne chose ?",
						"spanish": "¿No es bueno limpiar la basura?",
						"vietnamese": "Dọn dẹp rác không phải là điều tốt sao?",
						"thai": "การเก็บขยะไม่ใช่เรื่องดีเหรอ?",
						"hindi": "कूड़ा साफ करना अच्छी बात नहीं है क्या?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "좋은 게 아니야! 그 깨끗함은… 뭔가 잘못된 증거라고! 이 도시의 '더러운 것'들은 그냥 사라져!",
						"english": "It's not good! That cleanliness... is proof that something's wrong! This city's 'dirty things' just vanish!",
						"japanese": "良いことじゃない！あの清潔さは…何かがおかしい証拠なんだ！この街の「汚いもの」はただ消えるんだ！",
						"chinese": "不是好事！那种干净是…某种错误的证据！这个城市的“脏东西”就是会凭空消失！",
						"french": "Ce n'est pas une bonne chose ! Cette propreté... est la preuve que quelque chose ne va pas ! Les 'choses sales' de cette ville disparaissent, c'est tout !",
						"spanish": "¡No es bueno! Esa limpieza... ¡es prueba de que algo anda mal! ¡Las 'cosas sucias' de esta ciudad simplemente desaparecen!",
						"vietnamese": "Không phải điều tốt! Sự sạch sẽ đó... là bằng chứng có gì đó không ổn! Mấy cái 'đồ bẩn thỉu' của thành phố này cứ thế biến mất!",
						"thai": "ไม่ใช่เรื่องดี! ความสะอาดนั่นน่ะ… เป็นหลักฐานว่ามีบางอย่างผิดปกติ! 'ของสกปรก' ในเมืองนี้มันหายไปเฉยๆ เลย!",
						"hindi": "यह अच्छी बात नहीं है! वह सफाई... इस बात का सबूत है कि कुछ गलत है! इस शहर की 'गंदी चीजें' बस गायब हो जाती हैं!"
					},
					"emotion": "sad",
					"speaker": "max",
					"type": "speech"
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
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "max"
				},
				{
					"type": "speech",
					"content": {
						"korean": "내가 말했잖아! 그 깨끗함이… 진짜가 아니라고!",
						"english": "I told you! That cleanliness... isn't real!",
						"japanese": "俺が言っただろ！あの清潔さは…本物じゃないって！",
						"chinese": "我说过的吧！那种干净…不是真的！",
						"french": "Je te l'ai dit ! Cette propreté... n'est pas réelle !",
						"spanish": "¡Te lo dije! Esa limpieza... ¡no es real!",
						"vietnamese": "Tôi đã nói rồi mà! Sự sạch sẽ đó... không phải thật!",
						"thai": "ฉันบอกแล้วไง! ความสะอาดนั่นน่ะ… มันไม่ใช่ของจริง!",
						"hindi": "मैंने कहा था ना! वह सफाई... असली नहीं है!"
					},
					"emotion": "angry",
					"speaker": "max"
				},
				{
					"content": {
						"korean": "아직도 그 이야기세요?",
						"english": "Still on about that?",
						"japanese": "まだその話ですか？",
						"chinese": "你还在说那个吗？",
						"french": "Tu en es encore à cette histoire ?",
						"spanish": "¿Sigues con esa historia?",
						"vietnamese": "Vẫn còn chuyện đó sao?",
						"thai": "ยังพูดเรื่องนั้นอยู่อีกเหรอ?",
						"hindi": "अभी भी उसी बारे में बात कर रहे हो?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "max",
					"content": {
						"korean": "너희는 모를 거야! 내가 겪은 이상한 일들을! 폐기물 처리장에서 났던 냄새!",
						"english": "You wouldn't know! The strange things I've experienced! The smell from the waste disposal plant!",
						"japanese": "お前らは知らないだろうな！俺が経験した奇妙な出来事を！廃棄物処理場から漂ってきた匂いを！",
						"chinese": "你们是不会懂的！我经历过的那些怪事！废弃物处理厂里传出的味道！",
						"french": "Vous ne pouvez pas savoir ! Les choses étranges que j'ai vécues ! L'odeur de l'usine de traitement des déchets !",
						"spanish": "¡Ustedes no lo entenderían! ¡Las cosas extrañas que he vivido! ¡El olor de la planta de tratamiento de residuos!",
						"vietnamese": "Mấy người sẽ không biết đâu! Những chuyện kỳ lạ tôi đã trải qua! Cái mùi từ nhà máy xử lý chất thải!",
						"thai": "พวกแกไม่มีทางรู้หรอก! เรื่องแปลกๆ ที่ฉันเจอมาน่ะ! กลิ่นที่ออกมาจากโรงกำจัดขยะนั่น!",
						"hindi": "तुम नहीं जानोगे! मैंने जो अजीबोगरीब चीजें अनुभव की हैं! कचरा निस्तारण संयंत्र से आने वाली गंध!"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "달콤한데… 피 냄새 같기도 하고… 그리고 바로 독한 소독약 냄새가 덮어버렸지!",
						"english": "Sweet... yet like blood... then a harsh disinfectant smell immediately covered it!",
						"japanese": "甘い…血の匂いみたいでもあり…すぐにきつい消毒液の匂いが覆いかぶさった！",
						"chinese": "甜甜的…又像是血的味道…然后一股刺鼻的消毒水味立刻盖了过去！",
						"french": "Doux... pourtant comme du sang... puis une forte odeur de désinfectant l'a immédiatement couverte !",
						"spanish": "Dulce... pero como a sangre... ¡y luego un fuerte olor a desinfectante lo cubrió todo inmediatamente!",
						"vietnamese": "Ngọt ngào... nhưng lại như mùi máu... rồi mùi thuốc sát trùng nồng nặc lập tức át đi!",
						"thai": "หวาน... แต่ก็เหมือนกลิ่นเลือด... แล้วกลิ่นยาฆ่าเชื้อฉุนๆ ก็เข้ามากลบซะมิดเลย!",
						"hindi": "मीठा… मगर खून जैसी गंध भी… और फिर तुरंत एक तीखी कीटाणुनाशक गंध ने सब ढक लिया!"
					},
					"emotion": "angry",
					"speaker": "max"
				},
				{
					"speaker": "character_4",
					"content": {
						"korean": "피 냄새요? 설마…",
						"english": "Blood smell? No way...",
						"japanese": "血の匂いですか？まさか…",
						"chinese": "血的味道？不会吧…",
						"french": "Odeur de sang ? Impossible...",
						"spanish": "¿Olor a sangre? No puede ser...",
						"vietnamese": "Mùi máu? Không thể nào...",
						"thai": "กลิ่นเลือดเหรอคะ? ไม่จริงน่า...",
						"hindi": "खून की गंध? कहीं ऐसा तो नहीं…"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그래! 분명 뭔가 숨기고 있는 거야! 이 깨끗함 뒤에!",
						"english": "Yes! They're definitely hiding something! Behind all this cleanliness!",
						"japanese": "そうだ！間違いなく何か隠してるんだ！この清潔さの裏に！",
						"chinese": "没错！他们肯定藏着什么！就在这干净的背后！",
						"french": "Oui ! Ils cachent clairement quelque chose ! Derrière toute cette propreté !",
						"spanish": "¡Sí! ¡Definitivamente están ocultando algo! ¡Detrás de toda esta limpieza!",
						"vietnamese": "Đúng vậy! Chắc chắn họ đang che giấu điều gì đó! Đằng sau sự sạch sẽ này!",
						"thai": "ใช่เลย! พวกเขากำลังซ่อนอะไรบางอย่างอยู่แน่ๆ! เบื้องหลังความสะอาดนี้!",
						"hindi": "हाँ! वे ज़रूर कुछ छुपा रहे हैं! इस सफ़ाई के पीछे!"
					},
					"emotion": "angry",
					"speaker": "max"
				},
				{
					"type": "speech",
					"content": {
						"korean": "너무 비약하는 것 아니에요?",
						"english": "Aren't you jumping to conclusions?",
						"japanese": "考えすぎじゃないですか？",
						"chinese": "你是不是太武断了？",
						"french": "Ne faites-vous pas des suppositions trop hâtives ?",
						"spanish": "¿No estás sacando conclusiones precipitadas?",
						"vietnamese": "Anh không quá suy diễn sao?",
						"thai": "คุณสรุปเร็วไปหน่อยไหมคะ?",
						"hindi": "क्या आप बहुत ज़्यादा अनुमान नहीं लगा रहे हैं?"
					},
					"emotion": "base",
					"speaker": "character_1"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						3
					],
					"speaker": "max"
				},
				{
					"content": {
						"korean": "너희도 조심해야 해! 계속 이렇게 캐고 다니면…",
						"english": "You two need to be careful too! If you keep poking around like this...",
						"japanese": "お前たちも気をつけろ！こんな風に嗅ぎ回ってたら…",
						"chinese": "你们也要小心！如果一直这样调查下去…",
						"french": "Vous aussi, faites attention ! Si vous continuez à fouiner comme ça...",
						"spanish": "¡Vosotros también tenéis que tener cuidado! Si seguís investigando así...",
						"vietnamese": "Hai người cũng phải cẩn thận! Nếu cứ tiếp tục điều tra như thế này...",
						"thai": "พวกเธอก็ต้องระวังด้วยนะ! ถ้ายังขุดคุ้ยไม่เลิกแบบนี้...",
						"hindi": "तुम लोगों को भी सावधान रहना चाहिए! अगर ऐसे ही छानबीन करते रहे तो…"
					},
					"emotion": "sad",
					"speaker": "max",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "뭘 조심해요?",
						"english": "Careful of what?",
						"japanese": "何を気をつけろって？",
						"chinese": "小心什么？",
						"french": "Attention à quoi ?",
						"spanish": "¿Cuidado con qué?",
						"vietnamese": "Cẩn thận cái gì ạ?",
						"thai": "ระวังเรื่องอะไรคะ?",
						"hindi": "किस बात का सावधान?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "max",
					"content": {
						"korean": "너희도 '더러운 것'으로 찍힐 거라고! 그리고… 흔적도 없이 사라지겠지!",
						"english": "You'll be marked as 'filth' too! And... disappear without a trace!",
						"japanese": "お前たちも『汚いもの』と見なされるぞ！そして…跡形もなく消されるだろう！",
						"chinese": "你们也会被标记为‘肮脏之物’！然后…消失得无影无踪！",
						"french": "Vous aussi, vous serez marqués comme des 'sales types' ! Et... vous disparaîtrez sans laisser de trace !",
						"spanish": "¡Vosotros también seréis marcados como 'suciedad'! Y... ¡desapareceréis sin dejar rastro!",
						"vietnamese": "Hai người cũng sẽ bị gán mác là 'thứ bẩn thỉu'! Và... biến mất không dấu vết!",
						"thai": "พวกเธอจะถูกตราหน้าว่าเป็น 'ของสกปรก' ด้วย! แล้วก็... หายไปอย่างไร้ร่องรอย!",
						"hindi": "तुम लोगों को भी 'गंदा' समझा जाएगा! और… बिना किसी निशान के ग़ायब हो जाओगे!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_2",
					"content": {
						"korean": "저희는 진실을 알아야 해요.",
						"english": "We need to know the truth.",
						"japanese": "私たちは真実を知る必要があります。",
						"chinese": "我们必须知道真相。",
						"french": "Nous devons connaître la vérité.",
						"spanish": "Necesitamos saber la verdad.",
						"vietnamese": "Chúng tôi cần biết sự thật.",
						"thai": "เราต้องรู้ความจริงค่ะ",
						"hindi": "हमें सच्चाई जाननी है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "진실? 그 진실이 너희를 삼킬 거라고! 이 도시의 청소부는… 무서운 놈들이야!",
						"english": "Truth? That truth will swallow you whole! This city's cleaners... they're terrifying!",
						"japanese": "真実？その真実がお前たちを飲み込むだろう！この街の掃除屋は…恐ろしい奴らだ！",
						"chinese": "真相？那个真相会把你们吞噬！这个城市的清洁工…他们很可怕！",
						"french": "La vérité ? Cette vérité vous engloutira tout entiers ! Les nettoyeurs de cette ville... ils sont terrifiants !",
						"spanish": "¿La verdad? ¡Esa verdad os tragará por completo! Los limpiadores de esta ciudad... ¡son aterradores!",
						"vietnamese": "Sự thật? Sự thật đó sẽ nuốt chửng hai người! Những người dọn dẹp của thành phố này... họ thật đáng sợ!",
						"thai": "ความจริงเหรอ? ความจริงนั่นจะกลืนกินพวกเธอ! พวกคนทำความสะอาดเมืองนี้... พวกมันน่ากลัวนะ!",
						"hindi": "सच्चाई? वह सच्चाई तुम्हें निगल जाएगी! इस शहर के सफ़ाईकर्मी… वे डरावने लोग हैं!"
					},
					"emotion": "sad",
					"speaker": "max",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…맥스 씨, 그만 좀 하세요.",
						"english": "...Mr. Max, please stop.",
						"japanese": "…マックスさん、もうやめてください。",
						"chinese": "…麦克斯先生，请您适可而止吧。",
						"french": "...Monsieur Max, arrêtez s'il vous plaît.",
						"spanish": "...Señor Max, por favor, deténgase.",
						"vietnamese": "...Ông Max, xin dừng lại đi.",
						"thai": "...คุณแม็กซ์ พอได้แล้วค่ะ",
						"hindi": "…मिस्टर मैक्स, कृपया रुक जाइए।"
					},
					"emotion": "base",
					"speaker": "character_3"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "다음 날 아침. 맥스의 푸드트럭 근처는… 밤새 말끔하게 치워져 있었다.",
						"english": "The next morning. The area around Max's food truck... had been completely cleaned overnight.",
						"japanese": "翌朝。マックスのフードトラックの周りは…一晩で綺麗に片付けられていた。",
						"chinese": "第二天早上。麦克斯餐车周围…一夜之间被清理得一干二净。",
						"french": "Le lendemain matin. Les environs du food truck de Max... avaient été entièrement nettoyés pendant la nuit.",
						"spanish": "A la mañana siguiente. Los alrededores del food truck de Max... habían sido limpiados a fondo durante la noche.",
						"vietnamese": "Sáng hôm sau. Khu vực quanh xe bán đồ ăn của Max… đã được dọn dẹp sạch sẽ qua đêm.",
						"thai": "เช้าวันต่อมา บริเวณรอบฟู้ดทรัคของแม็กซ์... ถูกทำความสะอาดอย่างหมดจดตลอดทั้งคืน",
						"hindi": "अगली सुबह। मैक्स के फूडट्रक के आसपास का इलाका... रात भर में पूरी तरह साफ कर दिया गया था。"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						3
					],
					"speaker": "max"
				},
				{
					"speaker": "max",
					"content": {
						"korean": "안 돼! 내… 내 푸드트럭! 여기 있던 모든 게…!",
						"english": "No! My... my food truck! Everything that was here...!",
						"japanese": "やめて！私の…私のフードトラック！ここにあったもの全部が…！",
						"chinese": "不！我的…我的餐车！这里的一切都…！",
						"french": "Non ! Mon... mon food truck ! Tout ce qui était ici... !",
						"spanish": "¡No! ¡Mi... mi food truck! ¡Todo lo que estaba aquí...!",
						"vietnamese": "Không! Xe… xe bán đồ ăn của tôi! Mọi thứ ở đây đều…!",
						"thai": "ไม่นะ! รถ... รถฟู้ดทรัคของฉัน! ทุกอย่างที่อยู่ตรงนี้...!",
						"hindi": "नहीं! मेरा... मेरा फूडट्रक! यहाँ जो कुछ भी था...!"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "맥스 씨! 대체 누가…",
						"english": "Mr. Max! Who on earth...?",
						"japanese": "マックスさん！一体誰が…",
						"chinese": "麦克斯先生！到底是谁…",
						"french": "Monsieur Max ! Qui diable...?",
						"spanish": "¡Señor Max! ¿Quién demonios...?",
						"vietnamese": "Ông Max! Ai đã…",
						"thai": "คุณแม็กซ์! ใครกันที่...?",
						"hindi": "मिस्टर मैक्स! आखिर कौन...?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "…더러운 것을 치웠을 뿐이다.",
						"english": "...We merely cleaned up the filth.",
						"japanese": "…汚いものを片付けただけだ。",
						"chinese": "……我们只是清理了脏东西而已。",
						"french": "...Nous n'avons fait que nettoyer la saleté.",
						"spanish": "...Solo hemos limpiado la suciedad.",
						"vietnamese": "…Chỉ là dọn dẹp những thứ bẩn thỉu mà thôi.",
						"thai": "...แค่ทำความสะอาดสิ่งสกปรกเท่านั้น",
						"hindi": "...हमने बस गंदगी साफ की है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "또… 또 너희들 짓이냐!",
						"english": "Again... Is this your doing again!",
						"japanese": "また…またお前たちの仕業か！",
						"chinese": "又…又是你们干的！",
						"french": "Encore... Encore vous !",
						"spanish": "¡Otra vez... otra vez vosotros!",
						"vietnamese": "Lại… lại là các ngươi sao!",
						"thai": "อีกแล้ว... เป็นฝีมือพวกแกอีกแล้วเหรอ!",
						"hindi": "फिर... फिर ये तुम्हारा काम है!"
					},
					"emotion": "angry",
					"speaker": "max",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "당신이… 이 모든 실종자를 처리한 거로군!",
						"english": "You... You're the one who dealt with all these missing people!",
						"japanese": "あなたが…この行方不明者たちをすべて処理したのか！",
						"chinese": "你…你就是处理了所有这些失踪人口的人！",
						"french": "C'est vous... C'est vous qui avez \"traité\" tous ces disparus !",
						"spanish": "¡Tú... Tú fuiste quien se encargó de todos estos desaparecidos!",
						"vietnamese": "Ngươi… ngươi đã xử lý tất cả những người mất tích này!",
						"thai": "แก... แกจัดการกับคนที่หายตัวไปทั้งหมดนี่เอง!",
						"hindi": "तुम... तुम ही हो जिसने इन सभी लापता लोगों से निपटा!"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "감히… 우리의 질서를 더럽히는가. 다음은… 너희 차례다.",
						"english": "How dare you... defile our order. Next... it's your turn.",
						"japanese": "よくも…我々の秩序を汚したな。次は…お前たちの番だ。",
						"chinese": "竟敢…玷污我们的秩序。下一个…就轮到你们了。",
						"french": "Comment osez-vous... souiller notre ordre. Ensuite... c'est votre tour.",
						"spanish": "¿Cómo osas... profanar nuestro orden? Después... es vuestro turno.",
						"vietnamese": "Dám… làm ô uế trật tự của chúng ta sao. Tiếp theo… đến lượt các ngươi đấy.",
						"thai": "กล้าดีอย่างไร... มาแปดเปื้อนความสงบเรียบร้อยของเรา ต่อไป... คือตาพวกแกแล้ว",
						"hindi": "हिम्मत कैसे हुई तुम्हारी... हमारी व्यवस्था को भ्रष्ट करने की। अगला... तुम्हारी बारी है।"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "…나를 이겨봤자다. 너희는 이미 ‘오점’이 되었다.",
						"english": "...Defeating me won't matter. You have already become a 'stain'.",
						"japanese": "…私を倒したところで意味はない。お前たちはすでに「汚点」となった。",
						"chinese": "……就算打败我也没用。你们已经成为了“污点”。",
						"french": "...Me vaincre ne servira à rien. Vous êtes déjà devenus une \"tache\".",
						"spanish": "...Derrotarme no servirá de nada. Ya os habéis convertido en una \"mancha\".",
						"vietnamese": "…Đánh bại ta cũng vô ích thôi. Các ngươi đã trở thành \"vết nhơ\" rồi.",
						"thai": "...ชนะฉันไปก็ไร้ประโยชน์ พวกแกกลายเป็น \"คราบสกปรก\" ไปแล้ว",
						"hindi": "...मुझे हराने से कोई फर्क नहीं पड़ेगा। तुम पहले ही एक 'धब्बा' बन चुके हो।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리야!",
						"english": "What are you talking about!",
						"japanese": "何を言ってるんだ！",
						"chinese": "你在说什么！",
						"french": "Qu'est-ce que tu racontes !",
						"spanish": "¡Qué dices!",
						"vietnamese": "Ngươi đang nói gì vậy!",
						"thai": "หมายความว่าไง!",
						"hindi": "क्या बक रहे हो!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "깨끗함의 질서를 어지럽힌 더러운 존재들… 반드시 ‘정리’될 것이다.",
						"english": "Filthy beings who disturbed the order of cleanliness... will surely be 'dealt with'.",
						"japanese": "清潔さの秩序を乱した汚れた存在ども…必ず「整理」されるだろう。",
						"chinese": "扰乱洁净秩序的肮脏存在们…必将被“清除”。",
						"french": "Les êtres impurs qui ont perturbé l'ordre de la propreté... seront sûrement 'traités'.",
						"spanish": "Seres inmundos que perturbaron el orden de la limpieza... serán 'eliminados' sin falta.",
						"vietnamese": "Những kẻ dơ bẩn đã phá vỡ trật tự của sự sạch sẽ… chắc chắn sẽ bị \"xử lý\".",
						"thai": "สิ่งสกปรกที่รบกวนความสะอาดเรียบร้อย... จะถูก \"จัดการ\" อย่างแน่นอน",
						"hindi": "साफ-सफाई की व्यवस्था को बिगाड़ने वाले गंदे प्राणी... निश्चित रूप से 'निपटा दिए' जाएंगे।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "우리는 멈추지 않아! 당신의 더러운 질서를 끝낼 때까지!",
						"english": "We won't stop! Not until your filthy order ends!",
						"japanese": "我々は止まらない！お前たちの汚れた秩序を終わらせるまで！",
						"chinese": "我们不会停止！直到你们肮脏的秩序终结！",
						"french": "Nous ne nous arrêterons pas ! Pas avant que votre ordre immonde ne prenne fin !",
						"spanish": "¡No nos detendremos! ¡Hasta que tu inmundo orden termine!",
						"vietnamese": "Chúng ta sẽ không dừng lại! Cho đến khi trật tự bẩn thỉu của các ngươi chấm dứt!",
						"thai": "เราจะไม่หยุด! จนกว่าระเบียบสกปรกของพวกแกจะสิ้นสุดลง!",
						"hindi": "हम रुकेंगे नहीं! जब तक तुम्हारा यह गंदा आदेश ख़त्म नहीं होता!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "임시적인 승리였다. 도시는 여전히 기묘한 질서 속에 움직였다.",
						"english": "It was a temporary victory. The city still moved under a strange order.",
						"japanese": "それは一時的な勝利だった。都市は依然として奇妙な秩序の中で動いていた。",
						"chinese": "这只是一场暂时的胜利。这座城市依然在诡异的秩序中运转着。",
						"french": "Ce fut une victoire temporaire. La ville continuait de se mouvoir sous un ordre étrange.",
						"spanish": "Fue una victoria temporal. La ciudad seguía moviéndose bajo un orden extraño.",
						"vietnamese": "Đó chỉ là một chiến thắng tạm thời. Thành phố vẫn vận hành trong một trật tự kỳ lạ.",
						"thai": "มันเป็นเพียงชัยชนะชั่วคราว เมืองยังคงเคลื่อนไหวภายใต้ระเบียบที่แปลกประหลาด",
						"hindi": "यह एक अस्थायी जीत थी। शहर अभी भी एक अजीब व्यवस्था के तहत चल रहा था।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "탐험대는 깨달았다. 그들은 이제… 이 도시의 가장 '더러운' 존재가 되었음을.",
						"english": "The expedition realized. They had now become... the 'filthiest' beings in this city.",
						"japanese": "探索隊は悟った。彼らは今や…この都市で最も「汚れた」存在になったことを。",
						"chinese": "探险队意识到。他们现在…已经成为了这座城市最“肮脏”的存在。",
						"french": "L'expédition réalisa. Ils étaient désormais… les êtres les plus « sales » de cette ville.",
						"spanish": "La expedición se dio cuenta. Ahora se habían convertido… en los seres más 'sucios' de esta ciudad.",
						"vietnamese": "Đoàn thám hiểm nhận ra. Họ giờ đây… đã trở thành những thực thể 'bẩn thỉu' nhất trong thành phố này.",
						"thai": "ทีมสำรวจตระหนักได้ว่า ตอนนี้พวกเขาได้กลายเป็น... สิ่งมีชีวิตที่ 'สกปรก' ที่สุดในเมืองแห่งนี้",
						"hindi": "अभियान दल को एहसास हुआ। वे अब… इस शहर के सबसे 'गंदे' प्राणी बन गए थे।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그리고 그 '청소부'들은, 더 깊은 곳에서 그들을 기다리고 있었다.",
						"english": "And those 'cleaners' were waiting for them, deeper below.",
						"japanese": "そして、その「掃除人」たちは、さらに深い場所で彼らを待ち構えていた。",
						"chinese": "而那些“清洁工”们，正在更深处等待着他们。",
						"french": "Et ces « nettoyeurs » les attendaient, plus profondément.",
						"spanish": "Y esos 'limpiadores' los esperaban, en lo más profundo.",
						"vietnamese": "Và những 'người dọn dẹp' đó, đang chờ đợi họ ở sâu hơn bên dưới.",
						"thai": "และ 'คนทำความสะอาด' เหล่านั้น กำลังรอพวกเขาอยู่ในที่ที่ลึกกว่านั้น",
						"hindi": "और वे 'सफाईकर्मी', उन्हें और गहराई में इंतजार कर रहे थे।"
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "하찮은 오점들. 너희도 곧… 깨끗하게 사라질 것이다.",
						"english": "Trivial blemishes. You too will soon... vanish cleanly.",
						"japanese": "些細な汚れども。お前たちもすぐに…綺麗に消え去るだろう。",
						"chinese": "微不足道的污点。你们也很快会…被彻底清除。",
						"french": "Taches insignifiantes. Vous aussi… disparaîtrez proprement.",
						"spanish": "Manchas insignificantes. Vosotros también pronto… desapareceréis limpiamente.",
						"vietnamese": "Những vết bẩn tầm thường. Các ngươi cũng sẽ sớm… biến mất sạch sẽ thôi.",
						"thai": "รอยเปื้อนเล็กน้อย พวกเจ้าเองก็เช่นกัน… จะหายไปอย่างหมดจดในไม่ช้า",
						"hindi": "मामूली दाग़। तुम भी जल्द ही… साफ़ हो जाओगे।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "크윽… 아직 안 끝났어!",
						"english": "Urgh... It's not over yet!",
						"japanese": "くっ…まだ終わってない！",
						"chinese": "呃…还没完！",
						"french": "Argh… Ce n'est pas encore fini !",
						"spanish": "¡Ugh… Aún no ha terminado!",
						"vietnamese": "Khụ… Vẫn chưa kết thúc!",
						"thai": "อึก... ยังไม่จบ!",
						"hindi": "उफ़… अभी ख़त्म नहीं हुआ है!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "다음에는… 더 철저히 치워주마. 다시는 나타나지 못하게.",
						"english": "Next time... I'll clean you up more thoroughly. So you can never appear again.",
						"japanese": "次は…もっと徹底的に片付けてやる。二度と現れられぬようにな。",
						"chinese": "下次…我会清理得更彻底。让你们再也无法出现。",
						"french": "La prochaine fois… je vous nettoierai plus minutieusement. Pour que vous ne puissiez plus jamais réapparaître.",
						"spanish": "La próxima vez… os limpiaré más a fondo. Para que no volváis a aparecer.",
						"vietnamese": "Lần tới… ta sẽ dọn dẹp các ngươi kỹ càng hơn. Để các ngươi không bao giờ xuất hiện được nữa.",
						"thai": "ครั้งหน้า... ข้าจะกำจัดพวกเจ้าให้สิ้นซากกว่านี้ จะได้ไม่ปรากฏตัวอีก",
						"hindi": "अगली बार… मैं तुम्हें और अच्छी तरह से साफ़ कर दूँगा। ताकि तुम दोबारा कभी प्रकट न हो सको।"
					},
					"emotion": "angry",
					"type": "speech"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"도시의 버려진 골목. 역겨운 쓰레기 냄새 대신 묘한 공허함이 감돌았다.",
			"텅 빈 쓰레기통, 사라진 잡동사니들. 사람들은 수군댔지만, 아무도 묻지 않았다.",
			"그러나 어떤 자는 알았다. 이 깨끗함 뒤에 숨은 악취를.",
			"그리고 그 악취는… 탐험대를 향하고 있었다."
		],
		"english": [
			"An abandoned city alley. Instead of the usual stench of garbage, a strange emptiness lingered.",
			"Empty bins, vanished junk. People whispered, but no one questioned.",
			"But some knew. The stench hidden behind this cleanliness.",
			"And that stench... was heading for the expedition team."
		],
		"japanese": [
			"都市の廃れた路地。不快なゴミの匂いの代わりに、奇妙な虚しさが漂っていた。",
			"空っぽのゴミ箱、消えたガラクタ。人々はひそひそ話したが、誰も尋ねなかった。",
			"しかし、ある者は知っていた。この清潔さの裏に隠された悪臭を。",
			"そしてその悪臭は… 探検隊に向かっていた。"
		],
		"chinese": [
			"城市废弃的巷子里。没有令人作呕的垃圾味，取而代之的是一种莫名的空虚感。",
			"空荡荡的垃圾桶，消失的杂物。人们窃窃私语，却无人发问。",
			"然而，有些人知道。这洁净背后隐藏的恶臭。",
			"而那恶臭……正冲着探险队而来。"
		],
		"french": [
			"Une ruelle abandonnée de la ville. Au lieu de l'odeur nauséabonde des ordures, un étrange vide planait.",
			"Poubelles vides, débris disparus. Les gens chuchotaient, mais personne n'osait demander.",
			"Mais certains savaient. L'odeur fétide cachée derrière cette propreté.",
			"Et cette odeur… se dirigeait vers l'équipe d'expédition."
		],
		"spanish": [
			"Un callejón abandonado de la ciudad. En lugar del asqueroso olor a basura, una extraña vacuidad se cernía.",
			"Contenedores vacíos, trastos desaparecidos. La gente susurraba, pero nadie preguntaba.",
			"Pero algunos sabían. El hedor oculto tras esta limpieza.",
			"Y ese hedor… se dirigía hacia el equipo de expedición."
		],
		"vietnamese": [
			"Một con hẻm bị bỏ hoang trong thành phố. Thay vì mùi rác hôi thối, một sự trống rỗng kỳ lạ bao trùm.",
			"Thùng rác trống rỗng, đồ đạc biến mất. Người ta xì xào, nhưng không ai hỏi.",
			"Nhưng có kẻ đã biết. Cái mùi hôi thối ẩn sau sự sạch sẽ này.",
			"Và cái mùi hôi thối đó... đang hướng về phía đội thám hiểm."
		],
		"thai": [
			"ตรอกร้างในเมือง แทนที่จะเป็นกลิ่นขยะเหม็นเน่า กลับมีแต่ความว่างเปล่าแปลกๆ ลอยอยู่",
			"ถังขยะว่างเปล่า ของรกหายไป ผู้คนซุบซิบ แต่ไม่มีใครตั้งคำถาม",
			"แต่บางคนรู้ดี กลิ่นเหม็นเน่าที่ซ่อนอยู่เบื้องหลังความสะอาดนี้",
			"และกลิ่นเหม็นนั้น... มุ่งหน้าไปยังทีมสำรวจ"
		],
		"hindi": [
			"शहर की एक परित्यक्त गली। घृणित कचरे की गंध के बजाय, एक अजीब शून्यता छाई हुई थी।",
			"खाली डिब्बे, गायब कबाड़। लोग फुसफुसाते रहे, पर किसी ने कुछ पूछा नहीं।",
			"पर कुछ जानते थे। इस सफाई के पीछे छिपी दुर्गंध को।",
			"और वह दुर्गंध… अन्वेषण दल की ओर बढ़ रही है।"
		]
	}
} as const;
