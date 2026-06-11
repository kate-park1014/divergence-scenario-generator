export const scenario_forest_pool_102_04 = {
	"scenario_id": "forest_pool_102_04",
	"order": 4,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"hazel": {
			"id": "mon_e2c11115-b300-4f32-b289-9ad088dc0273",
			"name": {
				"korean": "헤이즐",
				"english": "Hazel",
				"japanese": "ヘイゼル",
				"chinese": "榛",
				"french": "Hazel",
				"spanish": "Hazel",
				"vietnamese": "Hazel",
				"thai": "เฮเซล",
				"hindi": "हेज़ल"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/39f75a47-c622-45fe-04fd-a8bac1f93a00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/fc97b5d5-7a1d-4646-bedc-47a40ea70a00/public"
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
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "숲의 생명 에너지는 고갈되고, 곳곳이 말라죽고 있었다.",
						"english": "The forest's life energy was depleted, and trees were withering everywhere.",
						"japanese": "森の生命エネルギーは枯渇し、至る所で木々が枯れ始めていた。",
						"chinese": "森林的生命能量枯竭，处处都在枯死。",
						"french": "L'énergie vitale de la forêt s'épuisait, et les arbres se desséchaient partout.",
						"spanish": "La energía vital del bosque se agotaba, y los árboles se marchitaban por todas partes.",
						"vietnamese": "Năng lượng sự sống của rừng cạn kiệt, cây cối khô héo khắp nơi.",
						"thai": "พลังงานชีวิตของป่าร่อยหรอลง ต้นไม้เหี่ยวเฉาตายไปทั่ว",
						"hindi": "जंगल की जीवन ऊर्जा समाप्त हो रही थी, और हर जगह पेड़ सूख रहे थे।"
					}
				},
				{
					"content": {
						"korean": "이런… 숲이… 죽어가고 있어.",
						"english": "Oh no... The forest... it's dying.",
						"japanese": "まさか… 森が… 死んでいく…。",
						"chinese": "天哪… 森林… 它正在死去。",
						"french": "Oh non... La forêt... elle est en train de mourir.",
						"spanish": "Oh no... El bosque... está muriendo.",
						"vietnamese": "Ôi không… Rừng… nó đang chết dần.",
						"thai": "ไม่นะ... ป่า... กำลังจะตายแล้ว",
						"hindi": "ओह नहीं... जंगल... यह मर रहा है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "hazel",
					"type": "direction"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "제 가족도, 숲처럼 죽었어요! 루드라 때문이에요!",
						"english": "My family also died, just like the forest! It's because of Rudra!",
						"japanese": "私の家族も、森のように死んだんです！ルドラのせいだ！",
						"chinese": "我的家人也像森林一样死了！都是因为鲁德拉！",
						"french": "Ma famille est morte aussi, comme la forêt ! C'est à cause de Rudra !",
						"spanish": "¡Mi familia también murió, como el bosque! ¡Es por Rudra!",
						"vietnamese": "Gia đình tôi cũng chết, giống như rừng! Tất cả là do Rudra!",
						"thai": "ครอบครัวของฉันก็ตายเหมือนป่า! เป็นเพราะรุดรา!",
						"hindi": "मेरा परिवार भी जंगल की तरह मर गया! यह रुद्रा की वजह से है!"
					},
					"speaker": "hazel",
					"type": "speech"
				},
				{
					"content": {
						"korean": "루드라? 무슨 소리야?",
						"english": "Rudra? What are you talking about?",
						"japanese": "ルドラ？何を言っているんだ？",
						"chinese": "鲁德拉？你在说什么？",
						"french": "Rudra ? De quoi parles-tu ?",
						"spanish": "¿Rudra? ¿De qué estás hablando?",
						"vietnamese": "Rudra? Bạn đang nói gì vậy?",
						"thai": "รุดรา? คุณกำลังพูดถึงอะไร?",
						"hindi": "रुद्रा? तुम क्या कह रहे हो?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "숲을 지킨다는 명분으로… 제 남편을… 잃었어요!",
						"english": "Under the pretext of protecting the forest... I lost my husband!",
						"japanese": "森を守るという名目で… 夫を… 亡くしたんです！",
						"chinese": "以保护森林为名义… 我失去了我的丈夫！",
						"french": "Sous prétexte de protéger la forêt... j'ai perdu mon mari !",
						"spanish": "¡Con el pretexto de proteger el bosque... perdí a mi esposo!",
						"vietnamese": "Dưới danh nghĩa bảo vệ rừng… tôi đã mất chồng!",
						"thai": "ภายใต้ข้ออ้างของการปกป้องป่า... ฉันเสียสามีไป!",
						"hindi": "जंगल की रक्षा के बहाने... मैंने अपने पति को खो दिया!"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "hazel"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "hazel",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "hazel",
					"content": {
						"korean": "루드라 비라가 숲을 '수호'한다는 명분 아래 모든 걸 빼앗았어요.",
						"english": "Rudra Vira took everything under the pretext of 'protecting' the forest.",
						"japanese": "ルドラ・ヴィラは、森を「守護」するという名目のもと、すべてを奪い去った。",
						"chinese": "鲁德拉·维拉以“守护”森林为名义，夺走了一切。",
						"french": "Rudra Vira a tout pris sous prétexte de 'protéger' la forêt.",
						"spanish": "Rudra Vira lo tomó todo bajo el pretexto de 'proteger' el bosque.",
						"vietnamese": "Rudra Vira đã lấy đi mọi thứ dưới danh nghĩa 'bảo vệ' rừng.",
						"thai": "รุดรา วีราได้เอาทุกสิ่งไปภายใต้ข้ออ้างของการ 'ปกป้อง' ป่า",
						"hindi": "रुद्रा वीरा ने जंगल की 'रक्षा' के बहाने सब कुछ छीन लिया।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "잔혹한 행위라니… 구체적으로 무슨 짓을 했지?",
						"english": "Cruel acts... What exactly did he do?",
						"japanese": "残酷な行為だなんて…具体的に何をしたんだ？",
						"chinese": "残忍的行为…他具体做了什么？",
						"french": "Des actes cruels... Qu'a-t-il fait exactement ?",
						"spanish": "Actos crueles... ¿Qué hizo exactamente?",
						"vietnamese": "Hành vi tàn bạo... Hắn ta đã làm gì cụ thể?",
						"thai": "การกระทำที่โหดร้าย... เขาทำอะไรกันแน่?",
						"hindi": "क्रूर कृत्य... उसने ठीक-ठीक क्या किया?"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "숲이 변하기 시작하자, 그는 마을 사람들을 숲의 제물이라 불렀어요.",
						"english": "As the forest began to change, he called the villagers sacrifices for the forest.",
						"japanese": "森が変わり始めると、彼は村人たちを森への生贄と呼びました。",
						"chinese": "当森林开始变化时，他称村民为森林的祭品。",
						"french": "Quand la forêt a commencé à changer, il a appelé les villageois des sacrifices pour la forêt.",
						"spanish": "Cuando el bosque empezó a cambiar, llamó a los aldeanos sacrificios para el bosque.",
						"vietnamese": "Khi rừng bắt đầu thay đổi, hắn ta gọi dân làng là vật tế cho rừng.",
						"thai": "เมื่อป่าเริ่มเปลี่ยนไป เขาเรียกชาวบ้านว่าเครื่องสังเวยของป่า",
						"hindi": "जैसे ही जंगल बदलने लगा, उसने ग्रामीणों को जंगल के लिए बलिदान कहा।"
					},
					"speaker": "hazel",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "hazel",
					"content": {
						"korean": "제 남편은 숲을 떠나려다… 루드라의 부하들에게 끌려갔어요.",
						"english": "My husband tried to leave the forest... but was dragged away by Rudra's subordinates.",
						"japanese": "私の夫は森を去ろうとして…ルドラの手下たちに連れて行かれました。",
						"chinese": "我丈夫试图离开森林……却被鲁德拉的手下抓走了。",
						"french": "Mon mari a essayé de quitter la forêt... mais il a été traîné par les subordonnés de Rudra.",
						"spanish": "Mi marido intentó abandonar el bosque... pero fue arrastrado por los subordinados de Rudra.",
						"vietnamese": "Chồng tôi cố gắng rời khỏi rừng... nhưng đã bị thuộc hạ của Rudra lôi đi.",
						"thai": "สามีของฉันพยายามจะออกจากป่า... แต่ถูกลูกน้องของรุดราลากไป",
						"hindi": "मेरे पति ने जंगल छोड़ने की कोशिश की... लेकिन उन्हें रुद्र के अधीनस्थों द्वारा खींच लिया गया।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "믿을 수 없어…",
						"english": "I can't believe it...",
						"japanese": "信じられない…",
						"chinese": "难以置信……",
						"french": "Je n'y crois pas...",
						"spanish": "No puedo creerlo...",
						"vietnamese": "Không thể tin được...",
						"thai": "ไม่อยากจะเชื่อเลย...",
						"hindi": "मैं विश्वास नहीं कर सकता..."
					},
					"emotion": "sad"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "hazel",
					"type": "direction"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "숲의 생명 에너지가 고갈될수록… 루드라는 더 잔인해졌어요.",
						"english": "As the forest's life energy depleted... Rudra became even more cruel.",
						"japanese": "森の生命エネルギーが枯渇するにつれて…ルドラはさらに残忍になりました。",
						"chinese": "随着森林的生命能量枯竭……鲁德拉变得更加残忍。",
						"french": "À mesure que l'énergie vitale de la forêt s'épuisait... Rudra devenait encore plus cruel.",
						"spanish": "A medida que la energía vital del bosque se agotaba... Rudra se volvía aún más cruel.",
						"vietnamese": "Khi năng lượng sống của rừng cạn kiệt... Rudra càng trở nên tàn nhẫn hơn.",
						"thai": "ยิ่งพลังชีวิตของป่าหมดลงเท่าไหร่... รุดราก็ยิ่งโหดร้ายขึ้นเท่านั้น",
						"hindi": "जैसे-जैसे जंगल की जीवन ऊर्जा कम होती गई... रुद्र और अधिक क्रूर होता गया।"
					},
					"speaker": "hazel",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "숲이 병들면 루드라한테 무슨 이득이 있다는 거지?",
						"english": "What does Rudra gain if the forest sickens?",
						"japanese": "森が病気になると、ルドラに何の利益があるんだ？",
						"chinese": "如果森林生病了，鲁德拉能得到什么好处？",
						"french": "Quel est l'intérêt pour Rudra si la forêt tombe malade ?",
						"spanish": "¿Qué gana Rudra si el bosque enferma?",
						"vietnamese": "Rudra được lợi gì nếu rừng bị bệnh?",
						"thai": "ถ้าป่าป่วย รุดราจะได้อะไร?",
						"hindi": "अगर जंगल बीमार पड़ता है तो रुद्र को क्या फायदा होता है?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "hazel",
					"content": {
						"korean": "그의 눈빛에서 광기가 느껴졌어요. 숲을 지키는 게 아니에요.",
						"english": "I felt madness in his eyes. He's not protecting the forest.",
						"japanese": "彼の目から狂気が感じられました。森を守っているわけじゃない。",
						"chinese": "我从他的眼神中感受到了疯狂。他并不是在保护森林。",
						"french": "J'ai ressenti de la folie dans ses yeux. Il ne protège pas la forêt.",
						"spanish": "Sentí locura en sus ojos. Él no está protegiendo el bosque.",
						"vietnamese": "Tôi cảm thấy sự điên loạn trong mắt hắn. Hắn không phải đang bảo vệ rừng.",
						"thai": "ฉันรู้สึกถึงความบ้าคลั่งในแววตาของเขา เขาไม่ได้ปกป้องป่าเลย",
						"hindi": "मैंने उसकी आँखों में पागलपन महसूस किया। वह जंगल की रक्षा नहीं कर रहा है।"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "루드라의 진짜 목적은 분명 따로 있어.",
						"english": "Rudra's true objective is clearly something else.",
						"japanese": "ルドラの本当の目的は、きっと別にある。",
						"chinese": "鲁德拉的真正目的肯定另有他图。",
						"french": "Le véritable objectif de Rudra est clairement autre chose.",
						"spanish": "El verdadero objetivo de Rudra es claramente otra cosa.",
						"vietnamese": "Mục đích thực sự của Rudra rõ ràng là khác.",
						"thai": "เป้าหมายที่แท้จริงของรุดราต้องเป็นอย่างอื่นแน่ๆ",
						"hindi": "रुद्र का असली उद्देश्य स्पष्ट रूप से कुछ और है।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "hazel",
					"type": "direction",
					"spot": [
						4,
						2
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "hazel",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "숲이 곧 무너질 거예요. 제발… 루드라를 막아주세요.",
						"english": "The forest will soon collapse. Please... stop Rudra.",
						"japanese": "森はもうすぐ崩壊するでしょう。どうか…ルドラを止めてください。",
						"chinese": "森林很快就要倒塌了。拜托了……阻止鲁德拉吧。",
						"french": "La forêt va bientôt s'effondrer. S'il vous plaît... arrêtez Rudra.",
						"spanish": "El bosque pronto colapsará. Por favor... detengan a Rudra.",
						"vietnamese": "Rừng sẽ sớm sụp đổ. Xin hãy... ngăn Rudra lại.",
						"thai": "ป่ากำลังจะพังทลายลงแล้ว ได้โปรด... หยุดรุดราเถอะ",
						"hindi": "जंगल जल्द ही ढह जाएगा। कृपया... रुद्र को रोकें।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "우리도 루드라의 진짜 목적을 알아야 해. 이대로는 안 돼.",
						"english": "We also need to know Rudra's true objective. We can't let this continue.",
						"japanese": "私たちもルドラの本当の目的を知る必要がある。このままではいけない。",
						"chinese": "我们也需要知道鲁德拉的真正目的。不能再这样下去了。",
						"french": "Nous devons aussi connaître le véritable objectif de Rudra. On ne peut pas laisser ça continuer.",
						"spanish": "Nosotros también necesitamos saber el verdadero objetivo de Rudra. No podemos dejar que esto continúe.",
						"vietnamese": "Chúng ta cũng cần biết mục đích thực sự của Rudra. Không thể để chuyện này tiếp diễn.",
						"thai": "เราก็ต้องรู้เป้าหมายที่แท้จริงของรุดราด้วย ปล่อยไว้อย่างนี้ไม่ได้",
						"hindi": "हमें भी रुद्र का असली उद्देश्य जानना होगा। हम इसे ऐसे ही नहीं छोड़ सकते।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "어두운 기운이 숲을 뒤덮었다. 더 이상 돌아갈 수 없는 길이었다.",
						"english": "A dark aura enveloped the forest. It was a path of no return.",
						"japanese": "暗い気が森を覆った。もう引き返せない道だった。",
						"chinese": "黑暗的气息笼罩了森林。这是一条无法回头的路。",
						"french": "Une aura sombre enveloppait la forêt. C'était un chemin sans retour.",
						"spanish": "Un aura oscura cubrió el bosque. Era un camino sin retorno.",
						"vietnamese": "Một luồng khí tối bao trùm khu rừng. Đó là con đường không thể quay lại.",
						"thai": "พลังงานมืดมิดปกคลุมป่า มันเป็นเส้นทางที่ไม่อาจย้อนกลับได้",
						"hindi": "एक अंधेरी शक्ति ने जंगल को ढक लिया। यह एक ऐसा रास्ता था जहाँ से वापसी संभव नहीं है।"
					}
				},
				{
					"spot": [
						5,
						4
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "random_boss",
					"type": "direction"
				},
				{
					"content": {
						"korean": "어리석은 인간들. 루드라님의 뜻을 거역하다니.",
						"english": "Foolish humans. To defy Rudra's will.",
						"japanese": "愚かな人間ども。ルドゥラ様の意思に逆らうとは。",
						"chinese": "愚蠢的人类。竟敢违抗卢德拉大人的旨意。",
						"french": "Humains stupides. Oser défier la volonté de Rudra.",
						"spanish": "Humanos tontos. Desafiar la voluntad de Rudra.",
						"vietnamese": "Loài người ngu xuẩn. Dám chống lại ý chí của Rudra.",
						"thai": "มนุษย์โง่เขลา บังอาจขัดขืนเจตนารมณ์ของท่านรุดรา",
						"hindi": "मूर्ख इंसानो। रुद्रा की इच्छा का उल्लंघन करते हो।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"duration_ms": 400,
					"action": "exit",
					"type": "direction",
					"direction": "right",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "저 녀석이… 루드라의 부하인가.",
						"english": "Is that... Rudra's subordinate?",
						"japanese": "あれが…ルドゥラの部下か。",
						"chinese": "那家伙是…卢德拉的部下吗？",
						"french": "C'est... le subordonné de Rudra ?",
						"spanish": "¿Ese es... un subordinado de Rudra?",
						"vietnamese": "Tên đó… là thuộc hạ của Rudra sao?",
						"thai": "นั่นมัน… ลูกน้องของรุดราหรือเปล่า",
						"hindi": "क्या वह… रुद्रा का अधीनस्थ है?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "direction",
					"direction": "down",
					"speaker": "hazel",
					"duration_ms": 300,
					"action": "exit"
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "정체 모를 보스가 쓰러졌다. 하지만 숲의 비명은 멈추지 않았다.",
						"english": "The unknown boss fell. But the forest's screams did not cease.",
						"japanese": "正体不明のボスが倒れた。しかし、森の悲鳴は止まらなかった。",
						"chinese": "未知首领倒下了。但森林的哀嚎并未停止。",
						"french": "Le boss inconnu est tombé. Mais les cris de la forêt ne se sont pas tus.",
						"spanish": "El jefe desconocido cayó. Pero los gritos del bosque no cesaron.",
						"vietnamese": "Kẻ địch vô danh đã gục ngã. Nhưng tiếng kêu thét của rừng không dừng lại.",
						"thai": "หัวหน้าปริศนาล้มลง แต่เสียงกรีดร้องของป่าก็ไม่หยุดลง",
						"hindi": "अज्ञात बॉस गिर गया। लेकिन जंगल की चीखें नहीं रुकीं।"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "크… 루드라님은… 멈추지 않아…",
						"english": "Ugh... Rudra... won't stop...",
						"japanese": "くっ…ルドゥラ様は…止まらない…",
						"chinese": "呃…卢德拉大人…不会停止…",
						"french": "Ugh... Rudra... ne s'arrêtera pas...",
						"spanish": "Ugh... Rudra... no se detendrá...",
						"vietnamese": "Ư… Rudra… sẽ không dừng lại…",
						"thai": "อึก… ท่านรุดรา… จะไม่หยุด…",
						"hindi": "उह… रुद्रा… नहीं रुकेगा…"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "루드라! 네가 뭘 하려는 건지… 반드시 밝혀낼 거야!",
						"english": "Rudra! What are you trying to do... I'll definitely find out!",
						"japanese": "ルドゥラ！お前が何をしようとしているのか…必ず突き止めてやる！",
						"chinese": "卢德拉！你到底想做什么…我一定会查清楚的！",
						"french": "Rudra ! Ce que tu tentes de faire... Je le découvrirai, c'est sûr !",
						"spanish": "¡Rudra! Lo que sea que intentes hacer... ¡definitivamente lo descubriré!",
						"vietnamese": "Rudra! Ngươi đang định làm gì… Ta nhất định sẽ tìm ra!",
						"thai": "รุดรา! แกกำลังจะทำอะไรกันแน่… ฉันจะเปิดเผยมันให้ได้!",
						"hindi": "रुद्रा! तुम क्या करने की कोशिश कर रहे हो… मैं निश्चित रूप से पता लगाऊंगा!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "숲의 황폐화는 가속되었다. 루드라의 광기 어린 목적은 미궁 속으로.",
						"english": "The forest's decay accelerated. Rudra's mad purpose faded into the labyrinth.",
						"japanese": "森の荒廃は加速した。ルドラの狂気じみた目的は迷宮の中へ。",
						"chinese": "森林的荒芜加速了。鲁德拉疯狂的目的消散于迷宫之中。",
						"french": "La désolation de la forêt s'est accélérée. Le but insensé de Rudra s'est perdu dans le labyrinthe.",
						"spanish": "La devastación del bosque se aceleró. El propósito insensato de Rudra se perdió en el laberinto.",
						"vietnamese": "Sự tàn phá của rừng tăng tốc. Mục đích điên rồ của Rudra chìm vào mê cung.",
						"thai": "ความเสื่อมโทรมของป่าเร่งตัวขึ้น จุดประสงค์อันบ้าคลั่งของรุดราหายไปในเขาวงกต",
						"hindi": "जंगल का विनाश तेज़ हो गया। रुद्रा का पागल उद्देश्य भूलभुलैया में खो गया।"
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "happy",
					"content": {
						"korean": "하찮은 것들. 루드라님의 계획은… 완벽하다.",
						"english": "Insignificant beings. Lord Rudra's plan... is flawless.",
						"japanese": "取るに足らぬ者ども。ルドラ様の計画は…完璧だ。",
						"chinese": "渺小的存在。鲁德拉大人的计划…完美无瑕。",
						"french": "Créatures insignifiantes. Le plan de Maître Rudra... est parfait.",
						"spanish": "Seres insignificantes. El plan del Señor Rudra... es impecable.",
						"vietnamese": "Những kẻ tầm thường. Kế hoạch của Rudra... hoàn hảo.",
						"thai": "สิ่งมีชีวิตไร้ค่า แผนการของท่านรุดรา...สมบูรณ์แบบ",
						"hindi": "तुच्छ प्राणी। रुद्रा का प्लान... त्रुटिरहित है।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "아직 끝나지 않았어! 반드시 다시 돌아올 거야!",
						"english": "It's not over yet! I'll definitely be back!",
						"japanese": "まだ終わってない！必ず戻ってくる！",
						"chinese": "还没结束！我一定会回来的！",
						"french": "Ce n'est pas encore fini ! Je reviendrai, c'est sûr !",
						"spanish": "¡Aún no ha terminado! ¡Volveré, sin falta!",
						"vietnamese": "Chưa kết thúc đâu! Ta nhất định sẽ trở lại!",
						"thai": "ยังไม่จบ! ข้าจะต้องกลับมาอีกครั้ง!",
						"hindi": "अभी खत्म नहीं हुआ है! मैं ज़रूर वापस आऊँगा!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "파멸의 그림자가 짙어졌다. 숲의 비명이 울려 퍼졌다.",
						"english": "The shadow of ruin deepened. The forest's screams echoed.",
						"japanese": "破滅の影が濃くなった。森の悲鳴が響き渡った。",
						"chinese": "毁灭的阴影更加浓重。森林的悲鸣响彻云霄。",
						"french": "L'ombre de la ruine s'épaissit. Les cris de la forêt résonnèrent.",
						"spanish": "La sombra de la ruina se hizo más densa. Los gritos del bosque resonaron.",
						"vietnamese": "Bóng tối hủy diệt bao trùm. Tiếng thét của rừng vang vọng.",
						"thai": "เงามืดแห่งความพินาศทวีความรุนแรงขึ้น เสียงกรีดร้องของป่าดังก้อง",
						"hindi": "विनाश की छाया गहरी हो गई। जंगल की चीखें गूँज उठीं।"
					}
				}
			],
			"dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "여기까지 오다니. 대단한 집착이군.",
						"english": "To come all this way. What remarkable persistence.",
						"japanese": "ここまで来たか。大したものだ、その執着。",
						"chinese": "竟然走到这里。真是惊人的执念。",
						"french": "Être venu jusqu'ici. Quelle persistance remarquable.",
						"spanish": "Llegar hasta aquí. Qué gran obsesión.",
						"vietnamese": "Đến được đây sao. Thật là một sự cố chấp đáng nể.",
						"thai": "มาได้ถึงขนาดนี้ ความยึดติดที่น่าทึ่งจริงๆ",
						"hindi": "यहाँ तक आ गए। क्या गजब का जुनून है।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "루드라의 광기를 반드시 멈출 거야.",
						"english": "I will definitely stop Rudra's madness.",
						"japanese": "ルドゥラの狂気を必ず止める。",
						"chinese": "我一定会阻止卢德拉的疯狂。",
						"french": "J'arrêterai la folie de Rudra, coûte que coûte.",
						"spanish": "Detendré la locura de Rudra, cueste lo que cueste.",
						"vietnamese": "Tôi nhất định sẽ ngăn chặn sự điên loạn của Rudra.",
						"thai": "ฉันจะหยุดความบ้าคลั่งของรุดราให้ได้",
						"hindi": "मैं रुद्रा के पागलपन को अवश्य रोकूंगा।"
					}
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "루드라님은 숲을 '구원'하실 것이다. 너희 같은 방해꾼들은 사라져야 해.",
						"english": "Rudra will 'save' the forest. Interlopers like you must disappear.",
						"japanese": "ルドゥラ様は森を「救済」されるのだ。お前たちのような邪魔者は消えるべきだ。",
						"chinese": "卢德拉大人会“拯救”森林。你们这些碍事者必须消失。",
						"french": "Rudra 'sauvera' la forêt. Les gêneurs comme vous doivent disparaître.",
						"spanish": "Rudra 'salvará' el bosque. Los intrusos como ustedes deben desaparecer.",
						"vietnamese": "Rudra sẽ 'cứu rỗi' khu rừng. Những kẻ cản đường như các ngươi phải biến mất.",
						"thai": "ท่านรุดราจะ 'กอบกู้' ป่า ผู้ขัดขวางเช่นพวกเจ้าต้องหายไป",
						"hindi": "रुद्रा जंगल को 'बचाएगा'। तुम जैसे बाधा डालने वालों को गायब हो जाना चाहिए।"
					},
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "그게 숲을 죽이는 방법이라면, 기꺼이 막아설게.",
						"english": "If that's how you kill the forest, I'll gladly stand in your way.",
						"japanese": "それが森を殺す方法だというのなら、喜んで立ち向かう。",
						"chinese": "如果那是毁灭森林的方法，我心甘情愿地阻止你。",
						"french": "Si c'est ainsi que vous tuez la forêt, je vous arrêterai de bon cœur.",
						"spanish": "Si esa es la forma de matar el bosque, con gusto me interpondré.",
						"vietnamese": "Nếu đó là cách để hủy diệt khu rừng, tôi sẽ vui lòng ngăn cản.",
						"thai": "ถ้ามันคือวิธีที่จะฆ่าป่า ฉันก็จะขวางทางอย่างเต็มใจ",
						"hindi": "अगर वह जंगल को मारने का तरीका है, तो मैं खुशी-खुशी तुम्हें रोकूंगा।"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"숲은 병들어갔다. 생명 에너지는 급속도로 고갈되고.",
			"루드라의 '수호'는 명분이 아닌, 광기 어린 집착이었다.",
			"파멸의 전조가 드리운 숲, 더 이상 물러설 곳은 없다.",
			"잃어버린 것들을 위해, 감춰진 진실을 마주할 시간이다."
		],
		"english": [
			"The forest sickened. Life energy rapidly depleted.",
			"Rudra's 'protection' was not a cause, but a frantic obsession.",
			"The forest, overshadowed by omens of ruin, has nowhere left to retreat.",
			"For what was lost, it's time to face the hidden truth."
		],
		"japanese": [
			"森は病んだ。生命エネルギーは急速に枯渇し。",
			"ルドラの「守護」は、大義ではなく、狂気に満ちた執着だった。",
			"破滅の兆候が差し迫る森、もう後には引けない。",
			"失われたもののために、隠された真実と向き合う時だ。"
		],
		"chinese": [
			"森林病了。生命能量迅速枯竭。",
			"鲁德拉的“守护”并非正当理由，而是疯狂的执念。",
			"毁灭的预兆笼罩着森林，已无处可退。",
			"为了逝去的一切，是时候面对隐藏的真相了。"
		],
		"french": [
			"La forêt dépérissait. L'énergie vitale s'épuisait rapidement.",
			"La 'protection' de Rudra n'était pas une cause, mais une obsession folle.",
			"La forêt, assombrie par les présages de ruine, n'a plus nulle part où reculer.",
			"Pour ce qui a été perdu, il est temps d'affronter la vérité cachée."
		],
		"spanish": [
			"El bosque enfermó. La energía vital se agotaba rápidamente.",
			"La 'protección' de Rudra no era una causa, sino una obsesión maniática.",
			"El bosque, ensombrecido por los presagios de la ruina, no tiene dónde más retroceder.",
			"Por lo perdido, es hora de enfrentar la verdad oculta."
		],
		"vietnamese": [
			"Rừng lâm bệnh. Năng lượng sự sống cạn kiệt nhanh chóng.",
			"'Bảo vệ' của Rudra không phải là lý do chính đáng, mà là một nỗi ám ảnh điên cuồng.",
			"Rừng bị bao trùm bởi điềm báo hủy diệt, không còn đường lùi nữa.",
			"Vì những gì đã mất, đã đến lúc đối mặt với sự thật bị che giấu."
		],
		"thai": [
			"ป่าป่วยไข้ พลังงานชีวิตร่อยหรอลงอย่างรวดเร็ว",
			"'การปกป้อง' ของรุดราไม่ใช่เหตุผลอันชอบธรรม แต่เป็นความหลงใหลที่คลุ้มคลั่ง",
			"ป่าที่ถูกปกคลุมด้วยลางร้ายแห่งความพินาศ ไม่มีที่ให้ถอยอีกแล้ว",
			"เพื่อสิ่งที่สูญเสียไป ถึงเวลาเผชิญหน้ากับความจริงที่ซ่อนอยู่"
		],
		"hindi": [
			"वन बीमार हो गया। जीवन ऊर्जा तेजी से समाप्त हो रही थी।",
			"रुद्रा का 'संरक्षण' एक उद्देश्य नहीं, बल्कि एक उन्मत्त जुनून था।",
			"विनाश के अपशकुनों से घिरा जंगल, अब पीछे हटने का कोई रास्ता नहीं है।",
			"जो खो गया उसके लिए, छिपी हुई सच्चाई का सामना करने का समय आ गया है।"
		]
	}
} as const;
