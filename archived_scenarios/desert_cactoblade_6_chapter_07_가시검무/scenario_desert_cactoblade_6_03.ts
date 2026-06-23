export const scenario_desert_cactoblade_6_03 = {
	"scenario_id": "desert_cactoblade_6_03",
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
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "모래 폭풍이 멎은 곳, 기괴한 숲이 펼쳐졌다. 모든 식물이 고통스럽게 뒤틀려 있었다.",
						"english": "Where the sandstorm ceased, a bizarre forest unfolded. All plants were painfully twisted.",
						"japanese": "砂嵐が止んだ場所、奇妙な森が広がっていた。全ての植物が苦痛に歪んでいた。",
						"chinese": "沙尘暴停歇之处，一片诡异的森林展开。所有植物都痛苦地扭曲着。",
						"french": "Là où la tempête de sable s'était arrêtée, une forêt bizarre se déployait. Toutes les plantes étaient tordues de douleur.",
						"spanish": "Donde la tormenta de arena cesó, un bosque extraño se desplegó. Todas las plantas estaban dolorosamente retorcidas.",
						"vietnamese": "Nơi bão cát ngừng lại, một khu rừng kỳ dị hiện ra. Tất cả thực vật đều bị vặn vẹo trong đau đớn.",
						"thai": "ที่ที่พายุทรายสงบลง ป่าแปลกประหลาดได้ปรากฏขึ้น พืชทุกชนิดบิดเบี้ยวอย่างเจ็บปวด",
						"hindi": "जहाँ रेत का तूफान रुका, एक विचित्र जंगल फैल गया। सभी पौधे दर्दनाक रूप से मुड़े हुए थे।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "여긴... 이상해. 식물들이 왜 이렇게 변했지?",
						"english": "This place... it's strange. Why have the plants changed like this?",
						"japanese": "ここは…おかしい。植物がどうしてこんな風に変わってしまったんだ？",
						"chinese": "这里……好奇怪。植物为什么会变成这样？",
						"french": "Cet endroit... est étrange. Pourquoi les plantes ont-elles changé comme ça ?",
						"spanish": "Este lugar... es extraño. ¿Por qué las plantas han cambiado así?",
						"vietnamese": "Nơi này... thật kỳ lạ. Tại sao cây cối lại biến đổi thế này?",
						"thai": "ที่นี่... แปลกจัง ทำไมพืชถึงเปลี่ยนไปแบบนี้?",
						"hindi": "यह जगह... अजीब है। पौधे ऐसे क्यों बदल गए?"
					},
					"speaker": "character_any"
				},
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"action": "enter",
					"speaker": "dune",
					"duration_ms": 500
				},
				{
					"speaker": "dune",
					"content": {
						"korean": "나와 같은 저주에 걸린 자들이… 이곳에 갇혔어.",
						"english": "Those cursed like me... are trapped here.",
						"japanese": "私と同じ呪いにかかった者たちが…ここに閉じ込められている。",
						"chinese": "像我一样被诅咒的人……被困在这里了。",
						"french": "Ceux qui sont maudits comme moi... sont piégés ici.",
						"spanish": "Aquellos malditos como yo... están atrapados aquí.",
						"vietnamese": "Những kẻ bị nguyền rủa như ta... bị mắc kẹt ở đây.",
						"thai": "ผู้ที่ถูกสาปเช่นเดียวกับข้า... ถูกขังอยู่ที่นี่",
						"hindi": "मेरे जैसे शापित लोग... यहाँ फंसे हुए हैं।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "당신은 누구야? 저주라니…",
						"english": "Who are you? A curse...?",
						"japanese": "あなたは誰？呪いだって…？",
						"chinese": "你是谁？诅咒……？",
						"french": "Qui êtes-vous ? Une malédiction... ?",
						"spanish": "¿Quién eres? ¿Una maldición...?",
						"vietnamese": "Ngươi là ai? Lời nguyền...?",
						"thai": "คุณเป็นใคร? คำสาปอะไรนะ...",
						"hindi": "तुम कौन हो? शाप...?"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "내 이름은 듄. …나는 이미 죽은 자.",
						"english": "My name is Dune. ...I am already dead.",
						"japanese": "私の名前はデューン。…私はすでに死んだ者。",
						"chinese": "我叫沙丘。……我已是逝者。",
						"french": "Mon nom est Dune. ...Je suis déjà mort.",
						"spanish": "Mi nombre es Dune. ...Ya estoy muerto.",
						"vietnamese": "Tên ta là Dune. ...Ta đã chết rồi.",
						"thai": "ชื่อของฉันคือดูน ...ฉันเป็นผู้ตายไปแล้ว",
						"hindi": "मेरा नाम ड्यून है। ...मैं पहले ही मर चुका हूँ।"
					},
					"speaker": "dune",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "dune",
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "dune",
					"emotion": "base",
					"content": {
						"korean": "아미르… 그가 영혼들을 '구원'한다는 명목으로 의식을 치렀어.",
						"english": "Amir… he performed rituals under the pretense of 'saving' souls.",
						"japanese": "アミール…彼は魂を「救う」という名目で儀式を行った。",
						"chinese": "阿米尔……他以‘拯救’灵魂的名义举行了仪式。",
						"french": "Amir… il a effectué des rituels sous prétexte de 'sauver' des âmes.",
						"spanish": "Amir… realizó rituales bajo el pretexto de 'salvar' almas.",
						"vietnamese": "Amir… hắn ta đã thực hiện nghi lễ với danh nghĩa 'cứu rỗi' các linh hồn.",
						"thai": "อามีร์… เขาประกอบพิธีภายใต้ข้ออ้างว่า 'ช่วย' วิญญาณ",
						"hindi": "अमीर… उसने आत्माओं को 'बचाने' के बहाने अनुष्ठान किए。"
					}
				},
				{
					"content": {
						"korean": "구원… 아미르가? 거짓말이야.",
						"english": "Salvation… Amir? Lies.",
						"japanese": "救済…アミールが？嘘よ。",
						"chinese": "救赎……阿米尔？谎言。",
						"french": "Le salut… Amir ? Mensonges.",
						"spanish": "¿Salvación… Amir? Mentiras.",
						"vietnamese": "Cứu rỗi… Amir ư? Xạo trá.",
						"thai": "ช่วย… อามีร์น่ะเหรอ? โกหก",
						"hindi": "मोक्ष… अमीर? झूठ।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "dune",
					"content": {
						"korean": "아니. 그건 고통을 더하는 저주였어. 정령의 힘으로 영혼들을… 비틀어버렸지.",
						"english": "No. It was a curse that amplified suffering. He twisted souls with the spirits' power.",
						"japanese": "違う。それは苦痛を増幅させる呪いだった。精霊の力で魂を…歪ませたのよ。",
						"chinese": "不。那是一个加剧痛苦的诅咒。他用精灵的力量……扭曲了灵魂。",
						"french": "Non. C'était une malédiction qui amplifiait la souffrance. Il a tordu les âmes avec le pouvoir des esprits.",
						"spanish": "No. Fue una maldición que amplificó el sufrimiento. Torció las almas con el poder de los espíritus.",
						"vietnamese": "Không. Đó là một lời nguyền gia tăng nỗi đau. Hắn đã vặn vẹo linh hồn bằng sức mạnh của tinh linh.",
						"thai": "ไม่ มันเป็นคำสาปที่เพิ่มความทุกข์ทรมาน เขาบิดเบือนวิญญาณด้วยพลังของภูตผี",
						"hindi": "नहीं। वह एक अभिशाप था जिसने पीड़ा बढ़ाई। उसने आत्माओं को आत्माओं की शक्ति से मोड़ दिया।"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "식물들은 영혼의 사념을 흡수한 듯 더욱 기괴하게 일그러졌다. 본래의 생명력을 잃은 채.",
						"english": "The plants absorbed the spirits' malice, becoming grotesquely distorted. Stripped of their original vitality.",
						"japanese": "植物は魂の邪念を吸い込んだかのように、より異様に歪んだ。本来の生命力を失ったまま。",
						"chinese": "植物仿佛吸收了灵魂的邪念，变得更加怪异扭曲。失去了原有的生命力。",
						"french": "Les plantes ont absorbé la malice des esprits, devenant grotesquement déformées. Dépouillées de leur vitalité originelle.",
						"spanish": "Las plantas absorbieron la malicia de los espíritus, distorsionándose grotescamente. Despojadas de su vitalidad original.",
						"vietnamese": "Cây cối như hấp thụ tà niệm của linh hồn, trở nên biến dạng kỳ dị hơn. Mất đi sinh lực vốn có.",
						"thai": "พืชดูดซับความอาฆาตแค้นของวิญญาณ บิดเบี้ยวผิดรูปร่างไปอย่างน่าขนลุก ปราศจากชีวิตชีวาเดิม",
						"hindi": "पौधे आत्माओं की दुर्भावना को सोखकर, भयावह रूप से विकृत हो गए। अपनी मूल जीवन शक्ति खो चुके थे।"
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "dune"
				},
				{
					"speaker": "dune",
					"content": {
						"korean": "이 숲 전체가… 저주받은 영혼들의 비명으로 만들어진 곳이야.",
						"english": "This entire forest… is forged from the screams of cursed souls.",
						"japanese": "この森全体が…呪われた魂たちの悲鳴でできている場所なのよ。",
						"chinese": "这整片森林……都是由被诅咒灵魂的尖叫声构成的。",
						"french": "Cette forêt entière… est forgée par les cris d'âmes maudites.",
						"spanish": "Todo este bosque… está forjado con los gritos de almas malditas.",
						"vietnamese": "Cả khu rừng này… được tạo nên từ tiếng thét của những linh hồn bị nguyền rủa.",
						"thai": "ป่าแห่งนี้… ถูกสร้างขึ้นจากเสียงกรีดร้องของวิญญาณที่ถูกสาป",
						"hindi": "यह पूरा जंगल… शापित आत्माओं की चीखों से बना है।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그럼 아미르는… 처음부터 우리를 속인 건가?",
						"english": "So Amir… he was deceiving us from the start?",
						"japanese": "じゃあアミールは…最初から私たちを騙していたの？",
						"chinese": "那么阿米尔……他从一开始就在欺骗我们吗？",
						"french": "Alors Amir… il nous trompait depuis le début ?",
						"spanish": "¿Así que Amir… nos engañó desde el principio?",
						"vietnamese": "Vậy Amir… hắn đã lừa dối chúng ta ngay từ đầu sao?",
						"thai": "งั้นอามีร์… หลอกลวงเรามาตั้งแต่แรกเหรอ?",
						"hindi": "तो अमीर… क्या वह हमें शुरू से धोखा दे रहा था?"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "dune",
					"content": {
						"korean": "…그의 구원은, 결국 욕망이었지. 모두를 비틀어버린.",
						"english": "…His salvation, in the end, was merely desire. A desire that twisted everyone.",
						"japanese": "…彼の救済は、結局は欲望だったのよ。全てを歪ませた。",
						"chinese": "……他的救赎，最终只是欲望。一个扭曲了所有人的欲望。",
						"french": "…Son salut, au final, n'était que désir. Un désir qui a tordu tout le monde.",
						"spanish": "…Su salvación, al final, fue solo deseo. Un deseo que retorció a todos.",
						"vietnamese": "…Cứu rỗi của hắn, cuối cùng cũng chỉ là dục vọng. Một dục vọng đã vặn vẹo tất cả.",
						"thai": "…การช่วยของเขา ท้ายที่สุดแล้วก็คือความปรารถนา ความปรารถนาที่บิดเบือนทุกคน",
						"hindi": "…उसका मोक्ष, अंततः, केवल इच्छा थी। एक इच्छा जिसने सभी को मोड़ दिया।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "그 순간, 듄의 몸이 흔들리기 시작했다. 정령의 환영이 그를 휘감았다.",
						"english": "At that moment, Dune's body began to tremble. A spirit's illusion enveloped him.",
						"japanese": "その瞬間、デューンの体が揺らぎ始めた。精霊の幻影が彼を包み込んだ。",
						"chinese": "那一刻，沙丘的身体开始颤抖。精灵的幻影缠绕着他。",
						"french": "À cet instant, le corps de Dune commença à trembler. L'illusion d'un esprit l'enveloppa.",
						"spanish": "En ese momento, el cuerpo de Dune comenzó a temblar. La ilusión de un espíritu lo envolvió.",
						"vietnamese": "Khoảnh khắc đó, cơ thể của Dune bắt đầu run rẩy. Huyễn ảnh của tinh linh bao trùm lấy anh ta.",
						"thai": "ในขณะนั้น ร่างของดูนก็เริ่มสั่นไหว ภาพลวงตาของวิญญาณโอบล้อมเขา",
						"hindi": "उसी पल, ड्यून का शरीर कांपने लगा। एक आत्मा का भ्रम उसे घेर लिया।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"direction": "up",
					"speaker": "dune",
					"duration_ms": 400,
					"type": "direction",
					"action": "exit"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "듄! 어디 가!",
						"english": "Dune! Where are you going!",
						"japanese": "デューン！どこへ行くの！",
						"chinese": "沙丘！你去哪儿！",
						"french": "Dune ! Où vas-tu !",
						"spanish": "¡Dune! ¡Adónde vas!",
						"vietnamese": "Dune! Anh đi đâu vậy!",
						"thai": "ดูน! เธอจะไปไหน!",
						"hindi": "ड्यून! कहाँ जा रहे हो!"
					},
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "듄은 흔적도 없이 사라졌다. 남은 건 뒤틀린 식물들과… 차가운 진실뿐이었다.",
						"english": "Dune vanished without a trace. All that remained were twisted plants… and the cold truth.",
						"japanese": "デューンは跡形もなく消え去った。残されたのは歪んだ植物と…冷たい真実だけだった。",
						"chinese": "沙丘消失得无影无踪。只剩下扭曲的植物和……冰冷的真相。",
						"french": "Dune disparut sans laisser de trace. Il ne restait que des plantes tordues… et la froide vérité.",
						"spanish": "Dune desapareció sin dejar rastro. Solo quedaron plantas retorcidas… y la fría verdad.",
						"vietnamese": "Dune biến mất không dấu vết. Tất cả còn lại chỉ là những loài cây biến dạng… và sự thật lạnh lùng.",
						"thai": "ดูนหายตัวไปอย่างไร้ร่องรอย เหลือเพียงพืชที่บิดเบี้ยว… และความจริงอันเย็นชา",
						"hindi": "ड्यून बिना किसी निशान के गायब हो गया। बचे थे केवल मुड़े हुए पौधे… और कड़वी सच्चाई।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "아미르가… 우리를 속였다니. 믿을 수 없어.",
						"english": "Amir... he deceived us. I can't believe it.",
						"japanese": "アミールが… 私たちを欺いたなんて。信じられない。",
						"chinese": "阿米尔… 竟然欺骗了我们。难以置信。",
						"french": "Amir... il nous a trompés. Je n'arrive pas à y croire.",
						"spanish": "Amir... nos engañó. No puedo creerlo.",
						"vietnamese": "Amir... hắn ta đã lừa dối chúng ta. Thật không thể tin được.",
						"thai": "อามีร์... เขาหลอกลวงพวกเรา ฉันไม่อยากจะเชื่อเลย",
						"hindi": "अमीर ने... हमें धोखा दिया। मुझे विश्वास नहीं हो रहा।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_2",
					"emotion": "sad",
					"content": {
						"korean": "어쩌면 처음부터… 그의 계획이었어. 이 사막의 모든 고통이.",
						"english": "Perhaps it was his plan... from the very beginning. All this suffering in the desert.",
						"japanese": "もしかしたら最初から… 彼の計画だったのか。この砂漠の全ての苦痛が。",
						"chinese": "也许从一开始… 这就是他的计划。这片沙漠里所有的痛苦。",
						"french": "Peut-être que c'était son plan... depuis le début. Toute cette souffrance dans le désert.",
						"spanish": "Quizás fue su plan... desde el principio. Todo este sufrimiento en el desierto.",
						"vietnamese": "Có lẽ đó là kế hoạch của hắn... ngay từ đầu. Tất cả nỗi đau khổ ở sa mạc này.",
						"thai": "บางทีมันอาจเป็นแผนของเขา...ตั้งแต่แรกเริ่ม ความทุกข์ทรมานทั้งหมดในทะเลทรายนี้",
						"hindi": "शायद यह उसकी योजना थी... बिलकुल शुरुआत से ही। इस रेगिस्तान का सारा दर्द।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "그를 막아야 해. 더 이상의 희생은 안 돼. 이 저주를 끝내야만 해.",
						"english": "We have to stop him. No more sacrifices. This curse must end.",
						"japanese": "彼を止めなければ。これ以上の犠牲はダメだ。この呪いを終わらせなければならない。",
						"chinese": "我们必须阻止他。不能再有牺牲了。这个诅咒必须结束。",
						"french": "Nous devons l'arrêter. Plus de sacrifices. Cette malédiction doit prendre fin.",
						"spanish": "Tenemos que detenerlo. No más sacrificios. Esta maldición debe terminar.",
						"vietnamese": "Chúng ta phải ngăn hắn lại. Không thể có thêm hy sinh nào nữa. Lời nguyền này phải chấm dứt.",
						"thai": "เราต้องหยุดเขา ไม่มีการเสียสละอีกแล้ว คำสาปนี้ต้องจบลง",
						"hindi": "हमें उसे रोकना होगा। और बलिदान नहीं। इस अभिशाप को खत्म करना होगा।"
					},
					"emotion": "angry",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "어리석은 필멸자들… 너희의 고통은 영원히 내 것이다. 영원히 이 사막에 갇힐 것이다.",
						"english": "Foolish mortals... Your suffering is eternally mine. You shall be trapped in this desert forever.",
						"japanese": "愚かなる定命の者たちよ… お前たちの苦痛は永遠に私のものだ。永遠にこの砂漠に閉じ込められるだろう。",
						"chinese": "愚蠢的凡人… 你们的痛苦将永远属于我。你们将永远被困在这片沙漠中。",
						"french": "Mortels insensés… Votre souffrance est éternellement mienne. Vous serez piégés dans ce désert pour toujours.",
						"spanish": "Mortales insensatos… Vuestro sufrimiento será eternamente mío. Estaréis atrapados en este desierto para siempre.",
						"vietnamese": "Những kẻ phàm trần ngu ngốc… Nỗi đau khổ của các ngươi vĩnh viễn là của ta. Các ngươi sẽ bị mắc kẹt trong sa mạc này mãi mãi.",
						"thai": "พวกมนุษย์โง่เขลา… ความเจ็บปวดของเจ้าจะเป็นของข้าตลอดไป เจ้าจะต้องติดอยู่ในทะเลทรายนี้ชั่วนิรันดร์",
						"hindi": "मूर्ख नश्वर प्राणी… तुम्हारा दुख हमेशा मेरा रहेगा। तुम हमेशा के लिए इस रेगिस्तान में फँसे रहोगे।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "…아직 끝나지 않았어. 반드시 널 막을 거야. 다시 돌아올 것이다!",
						"english": "...It's not over yet. I will definitely stop you. I will return!",
						"japanese": "…まだ終わっていない。必ずお前を止める。必ず戻ってくる！",
						"chinese": "…还没结束。我一定会阻止你。我还会回来的！",
						"french": "...Ce n'est pas encore fini. Je t'arrêterai coûte que coûte. Je reviendrai !",
						"spanish": "...Aún no ha terminado. Definitivamente te detendré. ¡Volveré!",
						"vietnamese": "...Chưa kết thúc đâu. Ta nhất định sẽ ngăn ngươi. Ta sẽ trở lại!",
						"thai": "...ยังไม่จบแค่นี้ ข้าจะหยุดเจ้าให้ได้ ข้าจะกลับมา!",
						"hindi": "...अभी खत्म नहीं हुआ है। मैं तुम्हें ज़रूर रोकूँगा। मैं वापस आऊँगा!"
					},
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "크큭… 이것은 시작에 불과하다. {random_boss}는… 영원히 고통받으리라…",
						"english": "Heh heh... This is just the beginning. {random_boss} will... suffer forever...",
						"japanese": "ククク… これは始まりに過ぎない。{random_boss}は… 永遠に苦しむだろう…",
						"chinese": "呵呵… 这仅仅是个开始。{random_boss}将… 永远受苦…",
						"french": "Hé hé... Ce n'est que le début. {random_boss}... souffrira éternellement...",
						"spanish": "Je je... Esto es solo el principio. {random_boss}... sufrirá para siempre...",
						"vietnamese": "Khà khà... Đây chỉ là khởi đầu thôi. {random_boss} sẽ... đau khổ mãi mãi...",
						"thai": "ฮิฮิ... นี่เป็นเพียงจุดเริ่มต้นเท่านั้น {random_boss} จะ... ทนทุกข์ทรมานตลอดไป...",
						"hindi": "ही ही... यह तो बस शुरुआत है। {random_boss}... हमेशा के लिए कष्ट भोगेगा..."
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "무슨 말을 하는 거야? 저주가 끝난 게 아니라고?",
						"english": "What are you talking about? The curse isn't over?",
						"japanese": "何を言ってるんだ？呪いが終わってないだと？",
						"chinese": "你在说什么？诅咒还没有结束？",
						"french": "De quoi parles-tu ? La malédiction n'est pas terminée ?",
						"spanish": "¿De qué estás hablando? ¿La maldición no ha terminado?",
						"vietnamese": "Ngươi đang nói gì vậy? Lời nguyền vẫn chưa kết thúc sao?",
						"thai": "แกพูดเรื่องอะไร? คำสาปยังไม่จบเหรอ?",
						"hindi": "तुम क्या कह रहे हो? अभिशाप खत्म नहीं हुआ?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "쓰러진 보스 뒤편에서 기묘한 문양이 새겨진 돌멩이가 발견되었다. 아미르가 모으던 그것과 닮아 있었다. 진실은, 더욱 복잡해지는 듯했다.",
						"english": "Behind the fallen boss, a stone engraved with a strange pattern was found. It resembled the ones Amir had been collecting. The truth, it seemed, was becoming even more complicated.",
						"japanese": "倒れたボスの背後から、奇妙な模様が刻まれた石が発見された。それはアミールが集めていたものと似ていた。真実は、さらに複雑になっているようだった。",
						"chinese": "在倒下的首领身后，发现了一块刻有奇异图案的石头。它与阿米尔一直在收集的石头相似。真相，似乎变得更加复杂了。",
						"french": "Derrière le boss tombé, une pierre gravée d'un étrange motif fut découverte. Elle ressemblait à celles qu'Amir collectionnait. La vérité, semblait-il, devenait encore plus complexe.",
						"spanish": "Detrás del jefe caído, se encontró una piedra grabada con un patrón extraño. Se parecía a las que Amir había estado recolectando. La verdad, al parecer, se estaba volviendo aún más complicada.",
						"vietnamese": "Phía sau con boss đã ngã xuống, một tảng đá khắc hoa văn kỳ lạ được tìm thấy. Nó giống với những gì Amir đã thu thập. Sự thật, dường như, ngày càng trở nên phức tạp hơn.",
						"thai": "ด้านหลังบอสที่ล้มลง พบหินที่สลักลวดลายแปลกๆ มันคล้ายกับสิ่งที่อามีร์กำลังรวบรวมอยู่ ความจริงดูเหมือนจะซับซ้อนยิ่งขึ้น",
						"hindi": "गिरे हुए बॉस के पीछे, एक अजीब पैटर्न वाला पत्थर मिला। यह अमीर द्वारा इकट्ठा किए गए पत्थरों जैसा था। सच्चाई, ऐसा लग रहा था, और भी जटिल होती जा रही थी।"
					}
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "숲의 가장 깊은 곳, 거대한 그림자가 앞을 막아섰다. 뒤틀린 사념의 근원이었다.",
						"english": "In the deepest part of the forest, a colossal shadow blocked the way. It was the source of twisted malevolence.",
						"japanese": "森の最も深い場所、巨大な影が道を阻んだ。それはねじれた思念の根源だった。",
						"chinese": "在森林最深处，一道巨大的阴影挡住了去路。那是扭曲意念的根源。",
						"french": "Dans la partie la plus profonde de la forêt, une ombre colossale bloquait le chemin. C'était la source d'une malveillance tordue.",
						"spanish": "En lo más profundo del bosque, una sombra colosal bloqueó el camino. Era la fuente de una malevolencia retorcida.",
						"vietnamese": "Ở nơi sâu thẳm nhất của khu rừng, một bóng đen khổng lồ chặn đường. Đó là nguồn gốc của những ý niệm méo mó.",
						"thai": "ในส่วนที่ลึกที่สุดของป่า เงาขนาดมหึมาขวางทางอยู่ มันคือต้นกำเนิดของความคิดที่บิดเบี้ยว",
						"hindi": "जंगल के सबसे गहरे हिस्से में, एक विशाल छाया ने रास्ता रोक दिया। यह मुड़ी हुई दुर्भावना का स्रोत था।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "감히 여기까지 온 어리석은 자들… 이곳은 {random_boss}의 영역이다.",
						"english": "Foolish ones who dared to come this far... This is the domain of {random_boss}.",
						"japanese": "よくもここまで来た愚か者どもめ… ここは{random_boss}の領域だ。",
						"chinese": "竟敢来到这里的愚蠢之人… 这里是{random_boss}的领地。",
						"french": "Stupides créatures qui avez osé venir jusqu'ici... C'est le domaine de {random_boss}.",
						"spanish": "Necios que osasteis llegar tan lejos... Este es el dominio de {random_boss}.",
						"vietnamese": "Những kẻ ngu ngốc dám đến tận đây... Đây là lãnh địa của {random_boss}.",
						"thai": "พวกโง่เขลาที่กล้ามาถึงที่นี่... นี่คืออาณาเขตของ {random_boss}.",
						"hindi": "मूर्ख, जो इतनी दूर आने की हिम्मत कर रहे हो... यह {random_boss} का क्षेत्र है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "네가… 영혼들을 가둔 배후인가? 아미르와 공모했어?",
						"english": "Are you... the one behind imprisoning the souls? Did you conspire with Amir?",
						"japanese": "貴様が… 魂を閉じ込めた黒幕か？アミールと共謀したのか？",
						"chinese": "你就是… 囚禁灵魂的幕后黑手吗？你和阿米尔串通了？",
						"french": "Es-tu... celui qui a emprisonné les âmes ? As-tu conspiré avec Amir ?",
						"spanish": "¿Eres tú... quien está detrás de la prisión de almas? ¿Conspiraste con Amir?",
						"vietnamese": "Ngươi... là kẻ đứng sau việc giam giữ linh hồn? Ngươi đã thông đồng với Amir sao?",
						"thai": "แก... คือเบื้องหลังที่กักขังดวงวิญญาณ? แกสมคบคิดกับอามีร์ใช่ไหม?",
						"hindi": "क्या तुम... आत्माओं को कैद करने वाले के पीछे हो? क्या तुमने अमीर के साथ साजिश रची?"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "영혼을 구원하는 자는 오직 나뿐이다. 감히 내 의식을 방해하려 드는가!",
						"english": "Only I can save the souls. How dare you try to interrupt my ritual!",
						"japanese": "魂を救済できるのは、この私だけだ。よくも私の儀式を邪魔しようとするな！",
						"chinese": "只有我才能拯救灵魂。竟敢打扰我的仪式！",
						"french": "Seul moi peux sauver les âmes. Comment oses-tu tenter d'interrompre mon rituel !",
						"spanish": "Solo yo puedo salvar las almas. ¡Cómo osas intentar interrumpir mi ritual!",
						"vietnamese": "Chỉ có ta mới có thể cứu rỗi các linh hồn. Ngươi dám phá hoại nghi lễ của ta sao!",
						"thai": "มีเพียงฉันเท่านั้นที่สามารถช่วยวิญญาณได้ แกกล้าดียังไงถึงพยายามขัดขวางพิธีกรรมของฉัน!",
						"hindi": "केवल मैं ही आत्माओं को बचा सकता हूँ। तुम्हारी हिम्मत कैसे हुई मेरे अनुष्ठान में बाधा डालने की!"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"사막 깊숙한 곳, 뒤틀린 숲이 나타났다.",
			"식물들은 고통에 일그러져, 마치 영혼의 비명 같았다.",
			"그곳에서 만난 영혼은, 숨겨진 진실을 속삭였다.",
			"아미르의 '구원'은, 어쩌면 저주일지도 모른다고.",
			"점점 더 깊어지는 불신과, 비극적인 연민 속으로."
		],
		"english": [
			"Deep in the desert, a twisted forest appeared.",
			"Plants contorted in agony, like the screams of souls.",
			"The spirit met there whispered a hidden truth.",
			"Amir's 'salvation' might, perhaps, be a curse.",
			"Into ever-deepening distrust and tragic pity."
		],
		"japanese": [
			"砂漠の奥深く、ねじれた森が現れた。",
			"植物は苦痛に歪み、魂の叫びのようだった。",
			"そこで出会った魂は、隠された真実を囁いた。",
			"アミールの「救済」は、もしかしたら呪いなのかもしれないと。",
			"深まる不信と、悲劇的な憐憫の中へ。"
		],
		"chinese": [
			"在沙漠深处，一片扭曲的森林出现了。",
			"植物因痛苦而扭曲，仿佛灵魂的尖叫。",
			"在那里遇到的灵魂，低语着一个隐藏的真相。",
			"阿米尔的“救赎”，或许是一种诅咒。",
			"陷入日益加深的猜疑和悲剧性的怜悯之中。"
		],
		"french": [
			"Au cœur du désert, une forêt tordue est apparue.",
			"Les plantes se tordaient d'agonie, tels des cris d'âmes.",
			"L'esprit rencontré là-bas murmura une vérité cachée.",
			"Le « salut » d'Amir pourrait, peut-être, être une malédiction.",
			"Dans une méfiance toujours plus profonde et une pitié tragique."
		],
		"spanish": [
			"En lo profundo del desierto, apareció un bosque retorcido.",
			"Las plantas se contorsionaban en agonía, como gritos de almas.",
			"El espíritu encontrado allí susurró una verdad oculta.",
			"La \"salvación\" de Amir podría, quizás, ser una maldición.",
			"Hacia una desconfianza cada vez más profunda y una piedad trágica."
		],
		"vietnamese": [
			"Sâu trong sa mạc, một khu rừng méo mó xuất hiện.",
			"Thực vật vặn vẹo trong đau đớn, như tiếng thét của những linh hồn.",
			"Linh hồn gặp ở đó đã thì thầm một sự thật bị giấu kín.",
			"Sự cứu rỗi của Amir, có lẽ là một lời nguyền.",
			"Dần chìm sâu vào sự ngờ vực và lòng trắc ẩn bi thảm."
		],
		"thai": [
			"ลึกเข้าไปในทะเลทราย ป่าบิดเบี้ยวได้ปรากฏขึ้น",
			"พืชบิดเบี้ยวด้วยความทรมาน ราวกับเสียงกรีดร้องของวิญญาณ",
			"วิญญาณที่พบนั่นกระซิบความจริงที่ซ่อนอยู่",
			"การไถ่บาปของอาเมียร์ อาจเป็นคำสาป",
			"เข้าสู่ความไม่ไว้วางใจที่ลึกซึ้งยิ่งขึ้นและความสงสารที่น่าเศร้า"
		],
		"hindi": [
			"रेगिस्तान की गहराई में, एक मुड़ा हुआ जंगल प्रकट हुआ।",
			"पौधे पीड़ा में मरोड़ रहे थे, मानो आत्माओं की चीखें हों।",
			"वहाँ मिली आत्मा ने एक छिपी हुई सच्चाई फुसफुसाई।",
			"अमीर का 'मोक्ष' शायद एक अभिशाप हो।",
			"बढ़ते अविश्वास और दुखद दया में।"
		]
	}
} as const;
