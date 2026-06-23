export const scenario_forest_anacostia_13_03 = {
	"scenario_id": "forest_anacostia_13_03",
	"order": 3,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"glen": {
			"id": "mon_42dfd4f2-9564-4b4b-beed-993d578ebd5a",
			"name": {
				"korean": "글렌",
				"english": "Glen",
				"japanese": "グレン",
				"chinese": "格伦",
				"french": "Glen",
				"spanish": "Glen",
				"vietnamese": "Glen",
				"thai": "เกล็น",
				"hindi": "ग्लेन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/6aa9eb0c-364f-4bfb-fa3f-52711da6a600/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2dbb8c2d-a999-4154-3a88-7c5cc5ca2200/public"
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
						"korean": "숲은 고요했다. 새소리마저 완벽한 화음처럼 들렸다.",
						"english": "The forest was silent. Even the birdsong sounded like a perfect harmony.",
						"japanese": "森は静寂に包まれていた。鳥のさえずりさえ完璧な和音のように聞こえた。",
						"chinese": "森林一片寂静。连鸟鸣都听起来像完美的和弦。",
						"french": "La forêt était silencieuse. Même le chant des oiseaux résonnait comme une parfaite harmonie.",
						"spanish": "El bosque estaba en silencio. Hasta el canto de los pájaros sonaba como una armonía perfecta.",
						"vietnamese": "Rừng tĩnh lặng. Tiếng chim hót nghe như một bản hòa âm hoàn hảo.",
						"thai": "ป่าเงียบสงบ แม้เสียงนกร้องยังฟังดูราวกับท่วงทำนองที่สมบูรณ์แบบ",
						"hindi": "वन शांत था। पक्षियों का कलरव भी एक उत्तम सामंजस्य जैसा लग रहा था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "여긴… 이상하게 평화롭네.",
						"english": "This place... it's strangely peaceful.",
						"japanese": "ここは…妙に平和だね。",
						"chinese": "这里…出奇的平静。",
						"french": "Cet endroit... est étrangement paisible.",
						"spanish": "Aquí... es extrañamente pacífico.",
						"vietnamese": "Nơi này... bình yên lạ lùng.",
						"thai": "ที่นี่... สงบสุขอย่างประหลาด",
						"hindi": "यह जगह... अजीब तरह से शांत है।"
					}
				},
				{
					"content": {
						"korean": "오히려 불길한데.",
						"english": "Rather, it's ominous.",
						"japanese": "むしろ不吉だ。",
						"chinese": "反而有点不祥。",
						"french": "C'est plutôt de mauvais augure.",
						"spanish": "Más bien, es ominoso.",
						"vietnamese": "Ngược lại, nó thật đáng ngại.",
						"thai": "กลับรู้สึกไม่เป็นมงคล",
						"hindi": "बल्कि, यह अशुभ है।"
					},
					"emotion": "sad",
					"speaker": "character_1",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "낡고 뒤틀린 인형 조각들이 바닥에 흩어져 있었다.",
						"english": "Old, twisted doll fragments were scattered on the floor.",
						"japanese": "古くねじれた人形の破片が床に散らばっていた。",
						"chinese": "破旧扭曲的玩偶碎片散落在地板上。",
						"french": "Des fragments de poupées vieilles et tordues étaient éparpillés sur le sol.",
						"spanish": "Fragmentos de muñecas viejas y retorcidas estaban esparcidos por el suelo.",
						"vietnamese": "Những mảnh búp bê cũ kỹ, méo mó nằm rải rác trên sàn.",
						"thai": "เศษชิ้นส่วนตุ๊กตาเก่าและบิดเบี้ยวกระจัดกระจายอยู่บนพื้น",
						"hindi": "पुरानी, मुड़ी-तुड़ी गुड़िया के टुकड़े फर्श पर बिखरे हुए थे।"
					},
					"speaker": "narrator",
					"type": "speech"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 것들. 너희는 이 숲을 이해하지 못해.",
						"english": "Fools. You don't understand this forest.",
						"japanese": "愚かな者たち。お前たちはこの森を理解していない。",
						"chinese": "愚蠢的东西。你们不了解这片森林。",
						"french": "Imbéciles. Vous ne comprenez pas cette forêt.",
						"spanish": "Necios. No entendéis este bosque.",
						"vietnamese": "Đồ ngốc. Các ngươi không hiểu khu rừng này.",
						"thai": "พวกโง่เง่า! พวกแกไม่เข้าใจป่านี้หรอก",
						"hindi": "मूर्खों। तुम इस जंगल को नहीं समझते।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "아직 끝나지 않았어. 우린 멈추지 않아.",
						"english": "It's not over yet. We won't stop.",
						"japanese": "まだ終わってない。私たちは止まらない。",
						"chinese": "还没结束。我们不会停止。",
						"french": "Ce n'est pas encore fini. Nous ne nous arrêterons pas.",
						"spanish": "Aún no ha terminado. No nos detendremos.",
						"vietnamese": "Chưa kết thúc đâu. Chúng ta sẽ không dừng lại.",
						"thai": "ยังไม่จบแค่นี้หรอก พวกเราไม่หยุดหรอกนะ",
						"hindi": "अभी खत्म नहीं हुआ है। हम रुकेंगे नहीं।"
					}
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "너희의 발버둥은… 결국 숲을 더 강하게 만들 뿐이다.",
						"english": "Your struggles... will only make the forest stronger.",
						"japanese": "お前たちの足掻きは…結局、森をより強くするだけだ。",
						"chinese": "你们的挣扎…最终只会让森林变得更强大。",
						"french": "Vos luttes... ne feront que rendre la forêt plus forte.",
						"spanish": "Vuestras luchas... solo harán que el bosque sea más fuerte.",
						"vietnamese": "Sự giãy giụa của các ngươi... rốt cuộc chỉ khiến rừng mạnh hơn mà thôi.",
						"thai": "การต่อสู้ของเจ้า... สุดท้ายแล้วจะทำให้ป่าแข็งแกร่งขึ้นเท่านั้น",
						"hindi": "तुम्हारे संघर्ष... अंततः जंगल को और मजबूत ही करेंगे।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "무슨 소리야? 숲을 구원하려는 건데!",
						"english": "What are you talking about? We're trying to save the forest!",
						"japanese": "何を言ってるんだ？森を救おうとしているのに！",
						"chinese": "你在说什么？我们是在拯救森林！",
						"french": "De quoi parles-tu ? Nous essayons de sauver la forêt !",
						"spanish": "¿De qué hablas? ¡Estamos tratando de salvar el bosque!",
						"vietnamese": "Bạn đang nói gì vậy? Chúng tôi đang cố gắng cứu khu rừng mà!",
						"thai": "คุณกำลังพูดอะไรน่ะ? พวกเรากำลังพยายามกอบกู้ป่านี้ต่างหาก!",
						"hindi": "तुम क्या कह रहे हो? हम तो जंगल को बचाने की कोशिश कर रहे हैं!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "쓰러진 보스에게서 오팔빛 수액이 흘러나왔다.",
						"english": "Opal-colored sap oozed from the fallen boss.",
						"japanese": "倒れたボスからオパール色の樹液が流れ出た。",
						"chinese": "欧泊色的树液从倒下的首领身上流淌而出。",
						"french": "Une sève opaline s'écoula du boss vaincu.",
						"spanish": "Una savia de color ópalo brotaba del jefe caído.",
						"vietnamese": "Nhựa cây màu ngọc mắt mèo chảy ra từ con boss đã gục ngã.",
						"thai": "ยางไม้สีโอปอลไหลออกมาจากบอสที่ล้มลง",
						"hindi": "गिरे हुए बॉस से ओपल रंग का रस बह निकला।"
					},
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"id": 3,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "숲의 생명체들은 경계심 없이 탐험대를 맞이했다.",
						"english": "The forest creatures greeted the expedition team without caution.",
						"japanese": "森の生命体たちは、警戒心なく探検隊を迎えた。",
						"chinese": "森林里的生物们毫无戒备地迎接了探险队。",
						"french": "Les créatures de la forêt accueillirent l'équipe d'expédition sans méfiance.",
						"spanish": "Las criaturas del bosque recibieron al equipo de expedición sin cautela.",
						"vietnamese": "Các sinh vật trong rừng chào đón đoàn thám hiểm mà không chút cảnh giác.",
						"thai": "สิ่งมีชีวิตในป่าต้อนรับคณะสำรวจโดยไม่ระแวง",
						"hindi": "वन के प्राणियों ने बिना किसी सावधानी के अभियान दल का स्वागत किया।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"spot": [
						5,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "glen"
				},
				{
					"speaker": "glen",
					"type": "speech",
					"content": {
						"korean": "왔구나. 이 조화로운 숲에.",
						"english": "You've come. To this harmonious forest.",
						"japanese": "来たか。この調和の森へ。",
						"chinese": "你来了。来到这和谐的森林。",
						"french": "Vous êtes venus. Dans cette forêt harmonieuse.",
						"spanish": "Has venido. A este bosque armonioso.",
						"vietnamese": "Ngươi đã đến. Rừng hài hòa này.",
						"thai": "ในที่สุดก็มาถึงป่าที่กลมกลืนแห่งนี้",
						"hindi": "तुम आ गए। इस सामंजस्यपूर्ण वन में।"
					},
					"emotion": "happy"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "당신은… 누구죠?",
						"english": "Who... are you?",
						"japanese": "あなたは…誰？",
						"chinese": "你…是谁？",
						"french": "Qui... êtes-vous ?",
						"spanish": "¿Quién... eres tú?",
						"vietnamese": "Ngươi... là ai?",
						"thai": "เจ้า... คือใคร?",
						"hindi": "तुम... कौन हो?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "glen",
					"type": "speech",
					"content": {
						"korean": "난 글렌. 이곳의 일부지. 숲은 모두에게 평화를 선사해.",
						"english": "I am Glen. Part of this place. The forest brings peace to all.",
						"japanese": "私はグレン。ここ一部だ。森は皆に平和をもたらす。",
						"chinese": "我是格伦。这里的一部分。森林带给所有人和平。",
						"french": "Je suis Glen. Une partie de cet endroit. La forêt offre la paix à tous.",
						"spanish": "Soy Glen. Parte de este lugar. El bosque trae paz a todos.",
						"vietnamese": "Ta là Glen. Một phần của nơi này. Rừng mang lại bình yên cho tất cả.",
						"thai": "ข้าคือเกล็น ส่วนหนึ่งของที่นี่ ป่ามอบสันติสุขแก่ทุกคน",
						"hindi": "मैं ग्लेन हूँ। इस जगह का एक हिस्सा। जंगल सभी को शांति देता है।"
					},
					"emotion": "happy"
				},
				{
					"content": {
						"korean": "눈이… 텅 비어있어.",
						"english": "Your eyes... are empty.",
						"japanese": "目が…虚ろだ。",
						"chinese": "你的眼睛…空洞无物。",
						"french": "Tes yeux... sont vides.",
						"spanish": "Tus ojos... están vacíos.",
						"vietnamese": "Đôi mắt ngươi... trống rỗng.",
						"thai": "ดวงตาเจ้า... ว่างเปล่า",
						"hindi": "तुम्हारी आँखें... खाली हैं।"
					},
					"emotion": "sad",
					"speaker": "character_2",
					"type": "speech"
				},
				{
					"content": {
						"korean": "자, 너희도 이 평화를 느껴봐. 숲이 속삭이는 소리에 귀 기울여.",
						"english": "Come, feel this peace too. Listen to the whispers of the forest.",
						"japanese": "さあ、君たちもこの平和を感じてみろ。森の囁きに耳を傾けよ。",
						"chinese": "来吧，你们也感受这和平。倾听森林的低语。",
						"french": "Venez, ressentez aussi cette paix. Écoutez les murmures de la forêt.",
						"spanish": "Ven, siente esta paz también. Escucha los susurros del bosque.",
						"vietnamese": "Nào, các ngươi cũng hãy cảm nhận sự bình yên này. Lắng nghe tiếng thì thầm của rừng.",
						"thai": "มาสิ เจ้าก็สัมผัสสันติสุขนี้ด้วย ฟังเสียงกระซิบของป่า",
						"hindi": "आओ, तुम भी इस शांति को महसूस करो। जंगल की फुसफुसाहट सुनो।"
					},
					"emotion": "happy",
					"speaker": "glen",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이건 평화가 아니야. 조작된 거야.",
						"english": "This isn't peace. It's manipulated.",
						"japanese": "これは平和じゃない。偽物だ。",
						"chinese": "这不叫和平。这是被操纵的。",
						"french": "Ce n'est pas la paix. C'est manipulé.",
						"spanish": "Esto no es paz. Está manipulado.",
						"vietnamese": "Đây không phải bình yên. Đây là sự thao túng.",
						"thai": "นี่ไม่ใช่สันติสุข มันถูกบิดเบือน",
						"hindi": "यह शांति नहीं है। यह हेरफेर किया गया है।"
					},
					"emotion": "angry"
				},
				{
					"speaker": "glen",
					"type": "speech",
					"content": {
						"korean": "무지한 자여… 숲은 너희를 원해.",
						"english": "Ignorant ones... The forest desires you.",
						"japanese": "無知なる者よ…森はお前たちを求めている。",
						"chinese": "无知者…森林渴望着你们。",
						"french": "Ignorants... La forêt vous désire.",
						"spanish": "¡Ignorantes...! El bosque os desea.",
						"vietnamese": "Những kẻ ngu muội... Rừng muốn các ngươi.",
						"thai": "พวกโง่เขลา... ป่าต้องการเจ้า",
						"hindi": "अज्ञानी... जंगल तुम्हें चाहता है।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "주변의 덩굴이 더욱 빠르게 뻗어나오며 길을 막았다.",
						"english": "Vines around them rapidly extended, blocking their path.",
						"japanese": "周囲の蔓がさらに速く伸びて、道を塞いだ。",
						"chinese": "周围的藤蔓迅速蔓延，挡住了去路。",
						"french": "Les lianes autour d'eux s'étendaient rapidement, bloquant leur chemin.",
						"spanish": "Las enredaderas a su alrededor se extendieron rápidamente, bloqueando su camino.",
						"vietnamese": "Dây leo xung quanh nhanh chóng vươn ra, chặn đường.",
						"thai": "เถาวัลย์รอบๆ ยื่นออกไปอย่างรวดเร็ว ขวางทางเดิน",
						"hindi": "उनके चारों ओर की लताएँ तेज़ी से फैल गईं, रास्ता रोक दिया।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "누가 감히 이 완벽한 조화를 깨려 하는가.",
						"english": "Who dares disturb this perfect harmony?",
						"japanese": "誰がこの完璧な調和を乱そうというのか。",
						"chinese": "谁敢打破这完美的和谐？",
						"french": "Qui ose troubler cette parfaite harmonie ?",
						"spanish": "¿Quién se atreve a perturbar esta perfecta armonía?",
						"vietnamese": "Ai dám phá vỡ sự hài hòa hoàn hảo này?",
						"thai": "ใครบังอาจทำลายความกลมกลืนอันสมบูรณ์แบบนี้",
						"hindi": "कौन इस उत्तम सामंजस्य को बिगाड़ने की हिम्मत करता है?"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "또 다른 방해꾼인가!",
						"english": "Another disturbance!",
						"japanese": "また邪魔者が現れたか！",
						"chinese": "又一个捣乱者吗！",
						"french": "Encore un perturbateur !",
						"spanish": "¡Otro estorbo!",
						"vietnamese": "Lại một kẻ phá rối khác!",
						"thai": "ผู้ก่อกวนอีกคนหรือ!",
						"hindi": "एक और बाधा!"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"content": {
						"korean": "숲은 더욱 깊고 기이한 형태로 변해갔다.",
						"english": "The forest transformed into an even deeper, stranger form.",
						"japanese": "森はさらに深く、奇妙な形へと変貌していった。",
						"chinese": "森林变得更加深邃和诡异。",
						"french": "La forêt se transforma en une forme encore plus profonde et étrange.",
						"spanish": "El bosque se transformó en una forma aún más profunda y extraña.",
						"vietnamese": "Khu rừng biến đổi thành một hình thái sâu thẳm và kỳ lạ hơn.",
						"thai": "ป่าได้แปรเปลี่ยนเป็นรูปร่างที่ลึกและแปลกประหลาดยิ่งขึ้น",
						"hindi": "जंगल और भी गहरा और अजीब रूप लेता गया।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "글렌은 대체 왜 저렇게 변한 거지?",
						"english": "Why did Glenn change like that?",
						"japanese": "グレンは一体なぜあんな風に変わってしまったんだ？",
						"chinese": "格伦到底为什么会变成那样？",
						"french": "Pourquoi Glenn a-t-il changé comme ça ?",
						"spanish": "¿Por qué Glenn cambió así?",
						"vietnamese": "Tại sao Glenn lại biến đổi thành như vậy?",
						"thai": "ทำไมเกล็นถึงเปลี่ยนไปแบบนั้นกันนะ?",
						"hindi": "ग्लेन ऐसे क्यों बदल गया?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "character_3",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "숲의 생명력에 완전히 동화된 거야. 어딘가에서 고대 전사의 외침이 들리는 것 같아.",
						"english": "He's completely assimilated into the forest's life force. I feel like I can hear an ancient warrior's cry from somewhere.",
						"japanese": "森の生命力に完全に同化されたんだ。どこかから古代の戦士の叫びが聞こえるようだ。",
						"chinese": "他已经完全被森林的生命力同化了。我感觉好像听到了某个地方传来的古代战士的呐喊声。",
						"french": "Il a été complètement assimilé par la force vitale de la forêt. J'ai l'impression d'entendre le cri d'un ancien guerrier quelque part.",
						"spanish": "Se ha asimilado por completo a la fuerza vital del bosque. Siento como si pudiera escuchar el grito de un antiguo guerrero desde algún lugar.",
						"vietnamese": "Anh ấy đã hoàn toàn đồng hóa với sức sống của khu rừng. Tôi cảm thấy như mình có thể nghe thấy tiếng hét của một chiến binh cổ đại từ đâu đó.",
						"thai": "เขาถูกกลืนกินโดยพลังชีวิตของป่าโดยสมบูรณ์ ฉันรู้สึกเหมือนได้ยินเสียงร้องของนักรบโบราณจากที่ไหนสักแห่ง",
						"hindi": "वह जंगल की जीवन शक्ति में पूरी तरह समा गया है। मुझे कहीं से एक प्राचीन योद्धा की चीख सुनाई दे रही है।"
					}
				},
				{
					"content": {
						"korean": "바닥에 닳고 해진 유물 조각들이 보였다.",
						"english": "Worn and tattered artifact fragments were visible on the ground.",
						"japanese": "床には擦り切れてボロボロになった遺物の破片が見えた。",
						"chinese": "地上散落着磨损破旧的遗物碎片。",
						"french": "Des fragments d'artefacts usés et déchirés étaient visibles sur le sol.",
						"spanish": "Fragmentos de artefactos desgastados y destrozados eran visibles en el suelo.",
						"vietnamese": "Những mảnh di vật cũ nát, sờn rách nằm rải rác trên sàn.",
						"thai": "เศษซากวัตถุโบราณที่สึกกร่อนและขาดวิ่นปรากฏให้เห็นบนพื้น",
						"hindi": "जमीन पर घिसे-पिटे अवशेषों के टुकड़े दिखाई दे रहे थे।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "주변의 작은 생명체들이 텅 빈 눈으로 탐험대를 응시했다.",
						"english": "Small creatures nearby stared at the expedition team with empty eyes.",
						"japanese": "周囲の小さな生命体たちが虚ろな目で探検隊を見つめていた。",
						"chinese": "周围的小生物们用空洞的眼神凝视着探险队。",
						"french": "De petites créatures à proximité fixaient l'équipe d'expédition avec des yeux vides.",
						"spanish": "Pequeñas criaturas cercanas miraban al equipo de expedición con ojos vacíos.",
						"vietnamese": "Những sinh vật nhỏ xung quanh nhìn chằm chằm vào đoàn thám hiểm bằng đôi mắt trống rỗng.",
						"thai": "สิ่งมีชีวิตเล็ก ๆ รอบข้างจ้องมองทีมสำรวจด้วยดวงตาที่ว่างเปล่า",
						"hindi": "आसपास के छोटे जीव खाली आँखों से अभियान दल को घूर रहे थे।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "이 숲은 살아있는 게 아니야. 그냥… 움직이는 거야.",
						"english": "This forest isn't alive. It's just... moving.",
						"japanese": "この森は生きているんじゃない。ただ…動いているだけだ。",
						"chinese": "这片森林不是活着的。它只是…在移动。",
						"french": "Cette forêt n'est pas vivante. Elle est juste... en mouvement.",
						"spanish": "Este bosque no está vivo. Simplemente... se mueve.",
						"vietnamese": "Khu rừng này không sống. Nó chỉ… đang di chuyển thôi.",
						"thai": "ป่านี้ไม่ได้มีชีวิตอยู่ มันแค่... เคลื่อนไหวต่างหาก",
						"hindi": "यह जंगल जीवित नहीं है। यह बस... हिल रहा है।"
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "우리가 숲을 구원하려 할수록, 오히려 더 깊은 혼란에 빠지는 것 같아.",
						"english": "The more we try to save the forest, the deeper we seem to sink into chaos.",
						"japanese": "숲を救おうとするほど、かえって深い混沌に陥るようだ。",
						"chinese": "我们越想拯救森林，就越是陷入更深的混乱。",
						"french": "Plus nous essayons de sauver la forêt, plus nous semblons sombrer dans un chaos profond.",
						"spanish": "Cuanto más intentamos salvar el bosque, más profundo parecemos caer en el caos.",
						"vietnamese": "Càng cố gắng cứu khu rừng, chúng ta càng lún sâu vào hỗn loạn.",
						"thai": "ยิ่งเราพยายามกอบกู้ป่ามากเท่าไหร่ ก็ยิ่งจมดิ่งลงสู่ความสับสนวุ่นวายมากขึ้นเท่านั้น",
						"hindi": "जितना हम जंगल को बचाने की कोशिश करते हैं, उतना ही गहरे भ्रम में फंसते जाते हैं।"
					},
					"emotion": "sad",
					"speaker": "character_4",
					"type": "speech"
				},
				{
					"content": {
						"korean": "주변의 덩굴은 이제 움직이는 벽처럼 탐험대를 옥죄어왔다.",
						"english": "The surrounding vines now tightened around the expedition team like moving walls.",
						"japanese": "周囲の蔓は、まるで動く壁のように探検隊を締め付けてきた。",
						"chinese": "周围的藤蔓像移动的墙壁一样，勒紧了探险队。",
						"french": "Les lianes environnantes se sont resserrées autour de l'équipe d'exploration, telles des murs mouvants.",
						"spanish": "Las enredaderas circundantes ahora se apretaban alrededor del equipo de expedición como muros en movimiento.",
						"vietnamese": "Những dây leo xung quanh giờ đây siết chặt đội thám hiểm như những bức tường di động.",
						"thai": "เถาวัลย์ที่อยู่รอบๆ บัดนี้ได้รัดทีมสำรวจไว้แน่นราวกับกำแพงที่เคลื่อนไหวได้",
						"hindi": "आसपास की लताएँ अब चलती हुई दीवारों की तरह अभियान दल को कस रही थीं।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "숲의 심장부에 다다르자, 모든 것이 일그러진 그림자처럼 보였다.",
						"english": "Upon reaching the forest's heart, everything appeared as distorted shadows.",
						"japanese": "森の心臓部にたどり着くと、すべてが歪んだ影のように見えた。",
						"chinese": "抵达森林深处时，一切都像扭曲的影子。",
						"french": "En atteignant le cœur de la forêt, tout apparut comme des ombres déformées.",
						"spanish": "Al llegar al corazón del bosque, todo parecía sombras distorsionadas.",
						"vietnamese": "Khi đến trung tâm của khu rừng, mọi thứ đều hiện ra như những cái bóng méo mó.",
						"thai": "เมื่อไปถึงใจกลางป่า ทุกสิ่งทุกอย่างปรากฏเป็นเงาที่บิดเบี้ยว",
						"hindi": "जंगल के हृदय तक पहुँचने पर, सब कुछ विकृत परछाइयों जैसा दिख रहा था।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "아직도 깨닫지 못했는가? 너희의 구원은… 이 숲의 파멸이다.",
						"english": "Still haven't realized? Your salvation... is this forest's demise.",
						"japanese": "まだ気づかないのか？お前たちの救いは…この森の破滅だ。",
						"chinese": "还没明白吗？你们的救赎……就是这森林的毁灭。",
						"french": "Toujours pas compris ? Votre salut... est la perdition de cette forêt.",
						"spanish": "¿Todavía no te has dado cuenta? Vuestra salvación... es la perdición de este bosque.",
						"vietnamese": "Vẫn chưa nhận ra sao? Sự cứu rỗi của các ngươi… chính là sự hủy diệt của khu rừng này.",
						"thai": "ยังไม่รู้ตัวอีกรึ? การช่วยกอบกู้ของพวกเจ้า... คือการทำลายป่านี้ต่างหาก",
						"hindi": "अभी तक समझ नहीं पाए? तुम्हारी मुक्ति... इस जंगल का विनाश है।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "헛소리 마! 숲을 멈출 거야!",
						"english": "Nonsense! We'll stop the forest!",
						"japanese": "馬鹿な！森を止めてやる！",
						"chinese": "胡说八道！我们会阻止森林的！",
						"french": "Absurdités ! Nous arrêterons la forêt !",
						"spanish": "¡Tonterías! ¡Detendremos el bosque!",
						"vietnamese": "Vô lý! Chúng ta sẽ ngăn chặn khu rừng!",
						"thai": "ไร้สาระ! เราจะหยุดป่านี้เอง!",
						"hindi": "बकवास बंद करो! हम जंगल को रोकेंगे!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "이 숲은 너희를 거부한다. 영원히 이 조화 속에서 잠들거라.",
						"english": "This forest rejects you. Sleep forever in this harmony.",
						"japanese": "この森はお前たちを拒む。永遠にこの調和の中で眠れ。",
						"chinese": "这片森林拒绝了你们。永远在这和谐中安眠吧。",
						"french": "Cette forêt vous rejette. Dormez à jamais dans cette harmonie.",
						"spanish": "Este bosque os rechaza. Dormid para siempre en esta armonía.",
						"vietnamese": "Khu rừng này từ chối các ngươi. Hãy ngủ yên mãi mãi trong sự hòa hợp này.",
						"thai": "ป่านี้ปฏิเสธเจ้า จงหลับใหลอยู่ในความกลมกลืนนี้ชั่วนิรันดร์",
						"hindi": "यह जंगल तुम्हें अस्वीकार करता है। इस सद्भाव में हमेशा के लिए सो जाओ।"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "아니… 아직이야. 우린 포기 안 해.",
						"english": "No... not yet. We won't give up.",
						"japanese": "いいえ…まだだ。私たちは諦めない。",
						"chinese": "不…还没。我们不会放弃。",
						"french": "Non... pas encore. Nous n'abandonnerons pas.",
						"spanish": "No... todavía no. No nos rendiremos.",
						"vietnamese": "Không… chưa đâu. Chúng ta sẽ không từ bỏ.",
						"thai": "ไม่... ยังไม่ใช่ เราจะไม่ยอมแพ้",
						"hindi": "नहीं... अभी नहीं। हम हार नहीं मानेंगे।"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "sad",
					"content": {
						"korean": "어리석어… 너희가 죽인 것은… 희망이었다.",
						"english": "Foolish... what you've killed... was hope.",
						"japanese": "愚か者め…お前たちが殺したのは…希望だったのだ。",
						"chinese": "愚蠢…你们所杀死的…是希望。",
						"french": "Stupides… ce que vous avez tué… c'était l'espoir.",
						"spanish": "Estúpidos... lo que habéis matado... era la esperanza.",
						"vietnamese": "Ngốc nghếch… thứ mà các ngươi đã giết… là hy vọng.",
						"thai": "ช่างโง่เขลา... สิ่งที่พวกเจ้าฆ่า... คือความหวัง",
						"hindi": "मूर्खों... तुमने जो मारा... वह आशा थी।"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…뭐야. 이 싸늘한 기분은.",
						"english": "...What. This chilling sensation.",
						"japanese": "…なんだ。この冷たい感覚は。",
						"chinese": "……什么。这种冰冷的感觉。",
						"french": "...Quoi. Cette sensation glaciale.",
						"spanish": "...Qué. Esta sensación escalofriante.",
						"vietnamese": "…Gì vậy. Cảm giác lạnh lẽo này.",
						"thai": "...อะไรนะ ความรู้สึกหนาวสะท้านนี้",
						"hindi": "...क्या। यह सर्द एहसास।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "덩굴의 움직임이 잠시 멈췄다. 그러나 숲의 변이는 계속될 뿐이었다.",
						"english": "The movement of the vines paused momentarily. But the forest's mutation only continued.",
						"japanese": "蔓の動きは一時的に止まった。しかし、森の変異は続くだけだった。",
						"chinese": "藤蔓的动静暂时停止了。然而，森林的变异却仍在继续。",
						"french": "Le mouvement des lianes s'arrêta un instant. Mais la mutation de la forêt ne fit que continuer.",
						"spanish": "El movimiento de las enredaderas se detuvo momentáneamente. Pero la mutación del bosque solo continuó.",
						"vietnamese": "Chuyển động của dây leo tạm dừng. Nhưng sự biến đổi của khu rừng vẫn tiếp diễn.",
						"thai": "การเคลื่อนไหวของเถาวัลย์หยุดชั่วคราว ทว่าการกลายพันธุ์ของป่าก็ยังคงดำเนินต่อไป",
						"hindi": "लताओं की हलचल क्षण भर के लिए रुक गई। लेकिन जंगल का उत्परिवर्तन जारी रहा।"
					},
					"type": "speech",
					"speaker": "narrator"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"숲의 평화는, 완벽했다.",
			"모든 생명체가 조화롭게 숨 쉬고, 어떤 위협도 없는 곳.",
			"그러나 완벽한 것은 언제나 가장 위험한 법.",
			"탐험대는 텅 빈 눈빛의 '조화'를 마주한다."
		],
		"english": [
			"The forest's peace was perfect.",
			"Where all life breathed in harmony, free from any threat.",
			"But perfection is always the most dangerous.",
			"The expedition team faces 'Harmony' with empty eyes."
		],
		"japanese": [
			"森の平和は、完璧だった。",
			"全ての生命が調和して息づき、何の脅威もない場所。",
			"しかし、完璧なものこそ常に最も危険なのだ。",
			"探検隊は、虚ろな目の「調和」に直面する。"
		],
		"chinese": [
			"森林的和平，是完美的。",
			"所有生命和谐共存，没有任何威胁的地方。",
			"然而，完美之物往往最危险。",
			"探险队面对着眼神空洞的“和谐”。"
		],
		"french": [
			"La paix de la forêt était parfaite.",
			"Un lieu où toute vie respirait en harmonie, sans aucune menace.",
			"Pourtant, la perfection est toujours le plus grand danger.",
			"L'équipe d'expédition fait face à l'« Harmonie » aux yeux vides."
		],
		"spanish": [
			"La paz del bosque era perfecta.",
			"Un lugar donde toda vida respiraba en armonía, sin amenaza alguna.",
			"Sin embargo, lo perfecto es siempre lo más peligroso.",
			"El equipo de expedición se enfrenta a la 'Armonía' de ojos vacíos."
		],
		"vietnamese": [
			"Sự bình yên của rừng, thật hoàn hảo.",
			"Nơi mọi sinh linh đều thở trong hòa bình, không chút hiểm nguy.",
			"Tuy nhiên, sự hoàn hảo luôn là điều nguy hiểm nhất.",
			"Đoàn thám hiểm đối mặt với 'Hòa Hợp' với ánh mắt trống rỗng."
		],
		"thai": [
			"ความสงบของป่า ช่างสมบูรณ์แบบ",
			"ที่ที่สิ่งมีชีวิตทั้งหมดหายใจอย่างกลมกลืน ไร้ซึ่งภัยคุกคามใดๆ",
			"แต่สิ่งที่สมบูรณ์แบบ มักอันตรายที่สุดเสมอ",
			"คณะสำรวจเผชิญหน้ากับ 'ความกลมกลืน' ที่มีดวงตาว่างเปล่า"
		],
		"hindi": [
			"वन की शांति, परिपूर्ण थी।",
			"जहाँ सभी जीव सद्भाव में साँस लेते थे, किसी खतरे से मुक्त।",
			"किंतु, पूर्णता सदैव सबसे खतरनाक होती है।",
			"अभियान दल रिक्त आँखों वाले 'सद्भाव' का सामना करता है।"
		]
	}
} as const;
