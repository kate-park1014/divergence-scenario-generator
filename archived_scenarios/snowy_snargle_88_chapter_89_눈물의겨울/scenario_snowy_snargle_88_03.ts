export const scenario_snowy_snargle_88_03 = {
	"scenario_id": "snowy_snargle_88_03",
	"order": 3,
	"act": "rising",
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
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "눈보라가 휘몰아치는 얼어붙은 동굴 입구. 거대한 그림자가 드리웠다.",
						"english": "The blizzard-swept entrance of a frozen cave. A colossal shadow loomed.",
						"japanese": "吹雪が吹き荒れる凍てついた洞窟の入り口。巨大な影が差した。",
						"chinese": "暴风雪肆虐的冰冻洞穴入口。巨大的影子笼罩着。",
						"french": "L'entrée balayée par le blizzard d'une grotte gelée. Une ombre colossale planait.",
						"spanish": "La entrada barrida por la ventisca de una cueva congelada. Una sombra colosal se cernía.",
						"vietnamese": "Lối vào hang động đóng băng, nơi bão tuyết đang hoành hành. Một bóng đen khổng lồ bao trùm.",
						"thai": "ทางเข้าถ้ำน้ำแข็งที่พายุหิมะพัดกระหน่ำ. เงาขนาดมหึมาทอดยาว.",
						"hindi": "बर्फीली गुफा का बर्फीला प्रवेश द्वार जहाँ बर्फीले तूफान चल रहे थे। एक विशाल छाया मंडरा रही थी।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "여기가 괴물의 흔적을 찾은 곳인가요?",
						"english": "Is this where you found traces of the monster?",
						"japanese": "ここが怪物の痕跡を見つけた場所ですか？",
						"chinese": "这里是找到怪物踪迹的地方吗？",
						"french": "C'est ici que vous avez trouvé des traces du monstre ?",
						"spanish": "¿Es aquí donde encontraste rastros del monstruo?",
						"vietnamese": "Đây là nơi tìm thấy dấu vết của quái vật sao?",
						"thai": "นี่คือที่ที่เราพบร่องรอยของสัตว์ประหลาดใช่ไหม?",
						"hindi": "क्या यह वही जगह है जहाँ आपको राक्षस के निशान मिले?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "direction",
					"speaker": "bran",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "그래. 놈이 물건을 훔쳐 도망친 곳이 여기야. 왠지 모르게 끌리는 듯이.",
						"english": "Yes. This is where it stole things and fled. As if drawn by something.",
						"japanese": "そうだ。やつが物を盗んで逃げたのはここだ。何かに引き寄せられるように。",
						"chinese": "是的。它就是在这里偷了东西然后逃跑的。仿佛被某种东西吸引着。",
						"french": "Oui. C'est ici qu'il a volé des objets et s'est enfui. Comme attiré par quelque chose.",
						"spanish": "Sí. Aquí es donde robó cosas y huyó. Como si algo lo atrajera.",
						"vietnamese": "Đúng vậy. Đây là nơi nó đã trộm đồ rồi bỏ trốn. Cứ như thể bị thứ gì đó thu hút.",
						"thai": "ใช่แล้ว. ที่นี่คือที่ที่มันขโมยของและหนีไป. ราวกับถูกดึงดูดโดยบางสิ่ง.",
						"hindi": "हाँ। यहीं से उसने चीजें चुराईं और भाग गया। जैसे किसी चीज़ से खींचा जा रहा हो।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "bran"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "대체 뭘 훔쳐간 거죠? 먹을 것도 아닌데.",
						"english": "What on earth did it steal? It's not even food.",
						"japanese": "一体何を盗んでいったんです？食べ物でもないのに。",
						"chinese": "它到底偷走了什么？甚至不是食物。",
						"french": "Qu'est-ce qu'il a bien pu voler ? Ce n'est même pas de la nourriture.",
						"spanish": "¿Qué demonios robó? Ni siquiera es comida.",
						"vietnamese": "Rốt cuộc nó đã trộm cái gì? Còn không phải là đồ ăn.",
						"thai": "มันขโมยอะไรไปกันแน่? ไม่ใช่แม้แต่อาหาร.",
						"hindi": "आख़िर उसने क्या चुराया? वह खाने की चीज़ भी नहीं है।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "단순한 약탈이 아닐지도 몰라. 놈은… 잃어버린 것을 찾는 것 같았어.",
						"english": "It might not be simple plunder. It seemed to be... searching for something lost.",
						"japanese": "単純な略奪ではないのかもしれない。やつは…失われたものを探しているようだった。",
						"chinese": "这可能不仅仅是简单的掠夺。它似乎在寻找…失落的东西。",
						"french": "Ce n'est peut-être pas un simple pillage. Il semblait… chercher quelque chose de perdu.",
						"spanish": "Podría no ser un simple saqueo. Parecía… buscar algo perdido.",
						"vietnamese": "Có lẽ không phải là cướp bóc đơn thuần. Nó dường như đang… tìm kiếm thứ gì đó đã mất.",
						"thai": "มันอาจไม่ใช่แค่การปล้นสะดมธรรมดา. มันดูเหมือนกำลัง...ค้นหาสิ่งที่หายไป.",
						"hindi": "यह सिर्फ़ लूटपाट नहीं हो सकती। वह… खोई हुई चीज़ें खोज रहा था।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "bran"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "bran",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "동굴이 더 깊어져. 저 괴물은 뭘 찾는 걸까.",
						"english": "The cave gets deeper. What is that monster looking for?",
						"japanese": "洞窟がさらに深くなる。あの怪物は一体何を探しているんだろう。",
						"chinese": "洞穴变得更深了。那个怪物在找什么？",
						"french": "La grotte s'enfonce. Qu'est-ce que ce monstre cherche ?",
						"spanish": "La cueva se hace más profunda. ¿Qué busca ese monstruo?",
						"vietnamese": "Hang động ngày càng sâu hơn. Con quái vật đó đang tìm kiếm điều gì vậy?",
						"thai": "ถ้ำยิ่งลึกเข้าไปอีก. สัตว์ประหลาดตัวนั้นกำลังมองหาอะไรอยู่.",
						"hindi": "गुफा और गहरी होती जा रही है। वह राक्षस क्या ढूंढ रहा है?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "bran"
				},
				{
					"content": {
						"korean": "…누군가의 목소리가 들리는 것 같지 않아요?",
						"english": "...Don't you hear someone's voice?",
						"japanese": "…誰かの声が聞こえませんか？",
						"chinese": "……你没听到有人说话吗？",
						"french": "...N'entendez-vous pas une voix ?",
						"spanish": "...¿No oyes la voz de alguien?",
						"vietnamese": "...Hình như có tiếng người nói, phải không?",
						"thai": "...ไม่รู้สึกเหมือนได้ยินเสียงใครบางคนเหรอ?",
						"hindi": "...क्या आपको किसी की आवाज़ नहीं सुनाई दे रही है?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "환청인가? 너무 추워서.",
						"english": "A hallucination? It's so cold.",
						"japanese": "幻聴か？寒すぎるから。",
						"chinese": "幻听吗？太冷了。",
						"french": "Une hallucination ? Il fait si froid.",
						"spanish": "¿Una alucinación? Hace demasiado frío.",
						"vietnamese": "Ảo giác sao? Vì quá lạnh.",
						"thai": "เสียงหลอนงั้นเหรอ? หนาวเกินไปแล้ว.",
						"hindi": "क्या यह मतिभ्रम है? बहुत ठंड है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_3"
				},
				{
					"content": {
						"korean": "벽에 미약한 온기를 띠는 얼어붙은 이끼가 보였다. 기이한 현상이었다.",
						"english": "Frozen moss with a faint warmth was visible on the wall. It was a bizarre phenomenon.",
						"japanese": "壁に微かな温もりを帯びた凍った苔が見えた。奇妙な現象だった。",
						"chinese": "墙上长着一层结冰的苔藓，散发着微弱的暖意。真是个奇怪的现象。",
						"french": "De la mousse gelée, dégageant une faible chaleur, était visible sur le mur. C'était un phénomène étrange.",
						"spanish": "Musgo congelado con un calor tenue era visible en la pared. Era un fenómeno extraño.",
						"vietnamese": "Trên tường có lớp rêu đóng băng mang hơi ấm mờ nhạt. Thật là một hiện tượng kỳ lạ.",
						"thai": "เห็นมอสที่จับตัวเป็นน้ำแข็งบนกำแพง มีความอบอุ่นบางๆ แผ่ออกมา เป็นปรากฏการณ์ที่แปลกประหลาด.",
						"hindi": "दीवार पर हल्की गर्माहट वाली जमी हुई काई दिखाई दी। यह एक अजीब घटना थी।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "아니, 나도 들었어. 희미하지만, 애타게 부르는 소리.",
						"english": "No, I heard it too. Faint, but someone calling out desperately.",
						"japanese": "いや、私も聞いた。微かだけど、切羽詰まって呼ぶ声。",
						"chinese": "不，我也听到了。虽然很微弱，却是焦急的呼唤声。",
						"french": "Non, je l'ai entendu aussi. Faible, mais un appel désespéré.",
						"spanish": "No, yo también lo oí. Débil, pero un lamento desesperado.",
						"vietnamese": "Không, tôi cũng nghe thấy. Mờ nhạt, nhưng là tiếng gọi khẩn thiết.",
						"thai": "ไม่ ฉันก็ได้ยินเหมือนกัน แผ่วเบา แต่เป็นเสียงเรียกที่ร้อนรน.",
						"hindi": "नहीं, मैंने भी सुना। हल्की, लेकिन एक बेचैन पुकार।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "bran"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "마치… 누군가를 찾는 듯한 소리인데.",
						"english": "It sounds like... someone searching for another.",
						"japanese": "まるで…誰かを探しているような声ね。",
						"chinese": "就像是……在寻找什么人似的。",
						"french": "C'est comme... une voix qui cherche quelqu'un.",
						"spanish": "Es como... una voz que busca a alguien.",
						"vietnamese": "Cứ như... tiếng ai đó đang tìm kiếm.",
						"thai": "เหมือน...เสียงที่กำลังตามหาใครบางคน.",
						"hindi": "यह ऐसा है... जैसे कोई किसी को ढूंढ रहा हो।"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"type": "direction",
					"speaker": "bran",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "bran",
					"content": {
						"korean": "여기야. 저 괴물의 비극이 시작된 곳.",
						"english": "This is it. Where that monster's tragedy began.",
						"japanese": "ここだ。あの怪物の悲劇が始まった場所。",
						"chinese": "就是这里。那怪物的悲剧就是从这里开始的。",
						"french": "C'est ici. Là où la tragédie de ce monstre a commencé.",
						"spanish": "Aquí es. Donde la tragedia de ese monstruo comenzó.",
						"vietnamese": "Ở đây. Nơi bi kịch của con quái vật đó bắt đầu.",
						"thai": "ที่นี่แหละ ที่ที่โศกนาฏกรรมของสัตว์ประหลาดตัวนั้นเริ่มต้นขึ้น.",
						"hindi": "यह यहीं है। जहाँ उस राक्षस की त्रासदी शुरू हुई थी।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "비극이요?",
						"english": "Tragedy?",
						"japanese": "悲劇ですか？",
						"chinese": "悲剧？",
						"french": "Une tragédie ?",
						"spanish": "¿Tragedia?",
						"vietnamese": "Bi kịch sao?",
						"thai": "โศกนาฏกรรมเหรอ?",
						"hindi": "त्रासदी?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이 동굴 바닥에 오래된 지도 조각이 떨어져 있어. 놈이 흘린 것 같아.",
						"english": "An old map fragment is on the cave floor. It seems he dropped it.",
						"japanese": "この洞窟の床に古い地図の破片が落ちている。あいつが落としたんだろう。",
						"chinese": "这个洞穴地板上掉了一张旧地图碎片。看来是它掉的。",
						"french": "Un vieux fragment de carte est tombé sur le sol de cette grotte. Il semble que ce soit lui qui l'ait laissé tomber.",
						"spanish": "Un trozo de mapa viejo está en el suelo de esta cueva. Parece que él lo dejó caer.",
						"vietnamese": "Dưới sàn hang động có một mảnh bản đồ cũ. Có vẻ là do hắn đánh rơi.",
						"thai": "มีชิ้นส่วนแผนที่เก่าตกอยู่บนพื้นถ้ำ ดูเหมือนว่ามันจะทำหล่นไว้.",
						"hindi": "इस गुफा के फर्श पर एक पुराने नक्शे का टुकड़ा पड़ा है। लगता है उसने ही गिराया है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "bran"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "이게 뭐죠? 낡아서 알아볼 수가 없는데.",
						"english": "What is this? It's too worn out to tell.",
						"japanese": "これ何ですか？古すぎて判別できません。",
						"chinese": "这是什么？太旧了，认不出来。",
						"french": "Qu'est-ce que c'est ? C'est trop vieux pour être reconnaissable.",
						"spanish": "¿Qué es esto? Está demasiado viejo para reconocerlo.",
						"vietnamese": "Đây là gì vậy? Cũ quá nên không thể nhận ra.",
						"thai": "นี่คืออะไร? เก่าเกินไปจนดูไม่ออก.",
						"hindi": "यह क्या है? यह इतना पुराना है कि पहचाना नहीं जा सकता।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "놈은 물건을 훔치는 게 아니야. 잃어버린 기억의 파편을 모으는 것일지도 몰라.",
						"english": "He's not stealing things. Perhaps he's collecting fragments of lost memories.",
						"japanese": "あいつは物を盗んでいるんじゃない。失われた記憶の破片を集めているのかもしれない。",
						"chinese": "它不是在偷东西。也许它是在收集失去的记忆碎片。",
						"french": "Il ne vole pas. Peut-être qu'il rassemble des fragments de souvenirs perdus.",
						"spanish": "Él no está robando cosas. Quizás esté recolectando fragmentos de recuerdos perdidos.",
						"vietnamese": "Hắn không phải là kẻ trộm đồ. Có lẽ hắn đang thu thập những mảnh ký ức đã mất.",
						"thai": "มันไม่ได้ขโมยของหรอก บางทีมันอาจจะกำลังรวบรวมชิ้นส่วนความทรงจำที่หายไป.",
						"hindi": "वह चीजें नहीं चुरा रहा है। शायद वह खोई हुई यादों के टुकड़े इकट्ठा कर रहा है।"
					},
					"emotion": "sad",
					"speaker": "bran",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_2",
					"content": {
						"korean": "기억의 파편이라니… 그럼 그 환영 소리도?",
						"english": "Fragments of memory... So, those phantom sounds too?",
						"japanese": "記憶の破片だと…では、あの幻影の音も？",
						"chinese": "记忆的碎片…那么那些幻象的声音也是吗？",
						"french": "Des fragments de mémoire... Alors, ces bruits fantômes aussi ?",
						"spanish": "¿Fragmentos de memoria...? ¿Entonces esos sonidos fantasma también?",
						"vietnamese": "Mảnh vỡ ký ức... Vậy thì những âm thanh ảo ảnh đó cũng vậy sao?",
						"thai": "เศษเสี้ยวความทรงจำ... แล้วเสียงหลอนนั่นด้วยหรือ?",
						"hindi": "याददाश्त के टुकड़े... तो वो प्रेतवाधित आवाजें भी?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "그래. 길을 잃은 영혼의 외침일지도 몰라.",
						"english": "Yes. It might be the cry of a lost soul.",
						"japanese": "ああ。それは道に迷った魂の叫びかもしれない。",
						"chinese": "是的。那也许是迷失灵魂的呐喊。",
						"french": "Oui. Ce pourrait être le cri d'une âme perdue.",
						"spanish": "Sí. Podría ser el grito de un alma perdida.",
						"vietnamese": "Đúng vậy. Có thể là tiếng kêu của một linh hồn lạc lối.",
						"thai": "ใช่ อาจเป็นเสียงร่ำไห้ของวิญญาณที่หลงทาง",
						"hindi": "हाँ। यह किसी भटकी हुई आत्मा की पुकार हो सकती है।"
					},
					"emotion": "sad",
					"speaker": "bran",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "bran",
					"type": "direction",
					"spot": [
						4,
						2
					],
					"action": "enter"
				},
				{
					"speaker": "bran",
					"type": "speech",
					"content": {
						"korean": "환영 소리가 점점 선명해지고 있어. 더 이상 외면할 수 없어.",
						"english": "The phantom sounds are getting clearer. I can't ignore them anymore.",
						"japanese": "幻影の音がだんだん鮮明になってきている。もう見て見ぬふりはできない。",
						"chinese": "幻象的声音越来越清晰了。我不能再忽视它们了。",
						"french": "Les bruits fantômes deviennent de plus en plus clairs. Je ne peux plus les ignorer.",
						"spanish": "Los sonidos fantasma se están volviendo más claros. Ya no puedo ignorarlos.",
						"vietnamese": "Những âm thanh ảo ảnh ngày càng rõ ràng. Tôi không thể phớt lờ chúng được nữa.",
						"thai": "เสียงหลอนชัดขึ้นเรื่อยๆ ฉันไม่อาจเมินเฉยได้อีกแล้ว",
						"hindi": "प्रेतवाधित आवाजें और भी स्पष्ट होती जा रही हैं। मैं अब उन्हें नज़रअंदाज़ नहीं कर सकता।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "가까워지고 있어요. 저 괴물이 나타날 것 같아요.",
						"english": "It's getting closer. That monster might appear.",
						"japanese": "近づいてきている。あの怪物が現れるかもしれない。",
						"chinese": "它越来越近了。那个怪物可能要出现了。",
						"french": "Ça se rapproche. Ce monstre pourrait apparaître.",
						"spanish": "Se está acercando. Ese monstruo podría aparecer.",
						"vietnamese": "Nó đang đến gần rồi. Con quái vật đó có thể sẽ xuất hiện.",
						"thai": "มันใกล้เข้ามาแล้ว สัตว์ประหลาดตัวนั้นอาจปรากฏตัว",
						"hindi": "यह करीब आ रहा है। वह राक्षस प्रकट हो सकता है।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이 이상은 위험해. 돌아가야 하는 거 아니야?",
						"english": "Any further is dangerous. Shouldn't we go back?",
						"japanese": "これ以上は危険だ。引き返すべきじゃないか？",
						"chinese": "再往前就危险了。我们是不是该回去？",
						"french": "Aller plus loin est dangereux. Ne devrions-nous pas faire demi-tour ?",
						"spanish": "Más allá es peligroso. ¿No deberíamos volver?",
						"vietnamese": "Xa hơn nữa sẽ nguy hiểm. Chúng ta không nên quay lại sao?",
						"thai": "ไกลกว่านี้อันตราย เราไม่ควรกลับไปเหรอ?",
						"hindi": "इससे आगे खतरा है। क्या हमें वापस नहीं जाना चाहिए?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_4"
				},
				{
					"content": {
						"korean": "돌아갈 수 없어. 놈의 고통이… 느껴져. 끝까지 가야 해.",
						"english": "I can't go back. Its pain... I can feel it. I have to go to the very end.",
						"japanese": "引き返せない。奴の苦痛が…感じられる。最後まで行かなくては。",
						"chinese": "我不能回去。它的痛苦…我能感觉到。我必须走到最后。",
						"french": "Je ne peux pas faire demi-tour. Sa douleur... je la ressens. Je dois aller jusqu'au bout.",
						"spanish": "No puedo volver. Su dolor... lo siento. Tengo que ir hasta el final.",
						"vietnamese": "Tôi không thể quay lại. Nỗi đau của nó... tôi có thể cảm nhận được. Tôi phải đi đến cùng.",
						"thai": "ฉันกลับไปไม่ได้ ความเจ็บปวดของมัน... ฉันรู้สึกได้ ฉันต้องไปให้สุดทาง",
						"hindi": "मैं वापस नहीं जा सकता। उसका दर्द... मुझे महसूस हो रहा है। मुझे अंत तक जाना होगा।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "bran"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "동굴 깊숙한 곳에서, 모든 것을 얼려버릴 듯한 냉기가 몰려왔다.",
						"english": "From deep within the cave, a chilling cold that seemed to freeze everything surged forth.",
						"japanese": "洞窟の奥深くから、全てを凍てつかせるような冷気が押し寄せた。",
						"chinese": "从洞穴深处，一股似乎能冻结一切的寒气袭来。",
						"french": "Du plus profond de la grotte, un froid glacial qui semblait tout geler s'est engouffré.",
						"spanish": "Desde lo más profundo de la cueva, un frío gélido que parecía congelar todo se precipitó.",
						"vietnamese": "Từ sâu trong hang động, một luồng khí lạnh buốt tưởng chừng có thể đóng băng mọi thứ ập đến.",
						"thai": "จากส่วนลึกของถ้ำ ความเย็นยะเยือกที่เหมือนจะแช่แข็งทุกสิ่งได้พุ่งเข้ามา",
						"hindi": "गुफा की गहराई से, एक सर्द ठंडी हवा आई, जो सब कुछ जमा देने वाली थी।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"speaker": "bran",
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "…끝나지… 않아… 나의… 한은…",
						"english": "...It's not... over... My... resentment...",
						"japanese": "...終わらない… 私の… 恨みは…",
						"chinese": "...还没...结束... 我的...怨恨...",
						"french": "...Ça ne... finit pas... Ma... rancune...",
						"spanish": "...No... terminará... Mi... rencor...",
						"vietnamese": "...Chưa... kết thúc... Nỗi... oán hận của ta...",
						"thai": "...ยังไม่... จบสิ้น... ความแค้น... ของข้า...",
						"hindi": "...खत्म... नहीं हुआ... मेरा... प्रतिशोध..."
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "끝났어. 이제 네가 편히 쉴 수 있을 거야.",
						"english": "It's over. Now you can rest in peace.",
						"japanese": "終わったよ。もう安らかに眠れるだろう。",
						"chinese": "结束了。现在你可以安息了。",
						"french": "C'est fini. Tu peux enfin reposer en paix.",
						"spanish": "Se acabó. Ahora podrás descansar en paz.",
						"vietnamese": "Xong rồi. Giờ ngươi có thể an nghỉ.",
						"thai": "จบแล้ว. ตอนนี้เจ้าพักผ่อนได้อย่างสงบสุข.",
						"hindi": "खत्म हो गया। अब तुम शांति से आराम कर सकते हो।"
					},
					"emotion": "happy"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "괴물의 몸이 녹아내리며, 잃어버린 기억의 파편들이 눈꽃처럼 흩어졌다.",
						"english": "The monster's body melted away, and fragments of lost memories scattered like snowflakes.",
						"japanese": "怪物の体が溶け落ち、失われた記憶の破片が雪のように舞い散った。",
						"chinese": "怪物的身体融化，失去的记忆碎片如雪花般散落。",
						"french": "Le corps du monstre fondit, et les fragments de souvenirs perdus s'éparpillèrent comme des flocons de neige.",
						"spanish": "El cuerpo del monstruo se derritió, y los fragmentos de recuerdos perdidos se dispersaron como copos de nieve.",
						"vietnamese": "Cơ thể quái vật tan chảy, những mảnh ký ức đã mất tản mát như tuyết.",
						"thai": "ร่างของสัตว์ประหลาดละลายลง, และเศษเสี้ยวความทรงจำที่หายไปก็โปรยปรายราวกับเกล็ดหิมะ.",
						"hindi": "राक्षस का शरीर पिघल गया, और खोई हुई यादों के टुकड़े बर्फ के टुकड़ों की तरह बिखर गए।"
					},
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "하지만 황무지의 깊은 저주는 아직 끝나지 않았다. 또 다른 비극의 그림자가 다가오고 있었다.",
						"english": "However, the deep curse of the wasteland was not yet over. Another shadow of tragedy was approaching.",
						"japanese": "しかし、荒野の深い呪いはまだ終わっていなかった。新たな悲劇の影が迫っていた。",
						"chinese": "然而，荒原深处的诅咒尚未结束。另一个悲剧的阴影正在逼近。",
						"french": "Cependant, la profonde malédiction du désert n'était pas encore terminée. L'ombre d'une autre tragédie approchait.",
						"spanish": "Sin embargo, la profunda maldición del páramo aún no había terminado. Otra sombra de tragedia se acercaba.",
						"vietnamese": "Tuy nhiên, lời nguyền sâu thẳm của vùng hoang địa vẫn chưa kết thúc. Một bóng tối bi kịch khác đang đến gần.",
						"thai": "อย่างไรก็ตาม, คำสาปอันลึกซึ้งของดินแดนรกร้างยังไม่สิ้นสุด. เงาของโศกนาฏกรรมอื่นกำลังคืบคลานเข้ามา.",
						"hindi": "हालांकि, बंजर भूमि का गहरा श्राप अभी खत्म नहीं हुआ था। त्रासदी की एक और छाया करीब आ रही थी।"
					},
					"emotion": "base"
				},
				{
					"action": "exit",
					"direction": "up",
					"type": "direction",
					"speaker": "bran",
					"duration_ms": 400
				}
			],
			"dialogue": [
				{
					"speaker": "bran",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						3
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "bran",
					"content": {
						"korean": "이곳이… 놈의 안식처였구나.",
						"english": "So this was... its resting place.",
						"japanese": "ここが…奴の安息の地だったのか。",
						"chinese": "原来这里就是…它的安息之地。",
						"french": "Alors, c'était... son lieu de repos.",
						"spanish": "Así que este era... su lugar de descanso.",
						"vietnamese": "Vậy ra đây là... nơi an nghỉ của nó.",
						"thai": "ที่นี่คือ... ที่พำนักของมันสินะ",
						"hindi": "तो यह था... उसका विश्राम स्थल।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "…내 것을 빼앗으려는 자들…!",
						"english": "...Those who try to steal what's mine!",
						"japanese": "…私のものを奪おうとする者たちめ！",
						"chinese": "…那些想夺走我东西的人！",
						"french": "...Ceux qui tentent de voler ce qui m'appartient !",
						"spanish": "¡...Aquellos que intentan robar lo mío!",
						"vietnamese": "...Những kẻ muốn cướp đi của ta!",
						"thai": "...พวกที่พยายามจะช่วงชิงของของข้าไป!",
						"hindi": "...जो मेरे चीज़ें चुराने की कोशिश करते हैं!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "네가… 그 괴물이구나!",
						"english": "You... You're that monster!",
						"japanese": "貴様が…あの怪物か！",
						"chinese": "你…你就是那个怪物！",
						"french": "Toi... Tu es ce monstre !",
						"spanish": "¡Tú... eres ese monstruo!",
						"vietnamese": "Ngươi... Ngươi chính là con quái vật đó!",
						"thai": "แก... แกคือสัตว์ประหลาดตัวนั้น!",
						"hindi": "तुम... तुम ही वो राक्षस हो!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "…돌려줘… 나의… 기억을…",
						"english": "...Give me back... My... memories...",
						"japanese": "...返して… 私の… 記憶を…",
						"chinese": "...还给我… 我的… 记忆…",
						"french": "...Rends-moi... mes... souvenirs...",
						"spanish": "...Devuélveme... mis... recuerdos...",
						"vietnamese": "...Trả lại... ký ức... của ta...",
						"thai": "...คืนมา... ความทรงจำ... ของข้า...",
						"hindi": "...वापस दो... मेरी... यादें..."
					},
					"emotion": "sad"
				},
				{
					"action": "exit",
					"direction": "down",
					"type": "direction",
					"speaker": "bran",
					"duration_ms": 400
				},
				{
					"type": "speech",
					"speaker": "bran",
					"content": {
						"korean": "이제는… 놈을 멈춰야 해.",
						"english": "Now... we must stop him.",
						"japanese": "もう… やつを止めなければ。",
						"chinese": "现在… 必须阻止他。",
						"french": "Maintenant... il faut l'arrêter.",
						"spanish": "Ahora... debemos detenerlo.",
						"vietnamese": "Bây giờ... phải ngăn chặn hắn.",
						"thai": "ตอนนี้... ต้องหยุดมันแล้ว.",
						"hindi": "अब… हमें उसे रोकना होगा।"
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"duration_ms": 500,
					"speaker": "bran",
					"type": "direction",
					"spot": [
						3,
						3
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "크크… 아직… 끝나지… 않았어… 나의 고통은…",
						"english": "Heh heh... It's not... over... My suffering...",
						"japanese": "クク… まだ… 終わらない… 私の苦痛は…",
						"chinese": "呵呵… 还没… 结束… 我的痛苦…",
						"french": "Haha... Ce n'est... pas fini... Ma souffrance...",
						"spanish": "Je je... No... ha terminado... Mi sufrimiento...",
						"vietnamese": "Khà khà... Chưa... kết thúc... Nỗi đau của ta...",
						"thai": "ฮ่าฮ่า... ยังไม่... จบสิ้น... ความทรมานของข้า...",
						"hindi": "हँ हँ... अभी... खत्म... नहीं हुआ... मेरा दर्द..."
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "젠장… 아직은… 포기할 수 없어…!",
						"english": "Damn it... I can't... give up... yet...!",
						"japanese": "くそ… まだ… 諦められない…！",
						"chinese": "该死… 还没… 放弃… 不了…！",
						"french": "Mince... Je ne peux pas... encore... abandonner...!",
						"spanish": "¡Maldita sea... Todavía... no puedo... rendirme...!",
						"vietnamese": "Chết tiệt... Vẫn chưa... thể bỏ cuộc...!",
						"thai": "บ้าจริง... ยัง... ยอมแพ้... ไม่ได้...!",
						"hindi": "धिक्कार है... मैं अभी... हार नहीं... मान सकता...!"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "놈의 비극이… 우리를 집어삼키는군.",
						"english": "His tragedy... is consuming us.",
						"japanese": "やつの悲劇が… 我々を飲み込んでいる。",
						"chinese": "他的悲剧… 正在吞噬我们。",
						"french": "Sa tragédie... nous dévore.",
						"spanish": "Su tragedia... nos está consumiendo.",
						"vietnamese": "Bi kịch của hắn... đang nuốt chửng chúng ta.",
						"thai": "โศกนาฏกรรมของมัน... กำลังกลืนกินพวกเรา.",
						"hindi": "उसकी त्रासदी... हमें निगल रही है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "bran"
				},
				{
					"content": {
						"korean": "끝없는 한기가 탐험대를 집어삼켰다. 절망의 그림자가 짙어졌다.",
						"english": "Endless cold enveloped the expedition team. The shadow of despair deepened.",
						"japanese": "終わりのない寒気が探検隊を飲み込んだ。絶望の影が濃くなった。",
						"chinese": "无尽的寒气吞噬了探险队。绝望的阴影越来越浓。",
						"french": "Un froid sans fin enveloppa l'équipe d'expédition. L'ombre du désespoir s'épaissit.",
						"spanish": "Un frío interminable envolvió al equipo de expedición. La sombra de la desesperación se profundizó.",
						"vietnamese": "Hơi lạnh vô tận bao trùm đội thám hiểm. Bóng tối của sự tuyệt vọng càng thêm đậm đặc.",
						"thai": "ความหนาวเย็นที่ไม่มีที่สิ้นสุดกลืนกินคณะสำรวจ. เงาแห่งความสิ้นหวังทวีความมืดมิด.",
						"hindi": "अंतहीन ठंड ने अभियान दल को घेर लिया। निराशा की छाया गहरी हो गई।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"action": "exit",
					"type": "direction",
					"duration_ms": 400,
					"speaker": "bran",
					"direction": "up"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"혹독한 추위, 멈출 수 없는 발걸음.",
			"약탈하는 괴물. 하지만 그저 빼앗는 것이 아니었다.",
			"얼어붙은 동굴 속, 잃어버린 기억의 그림자가 일행을 흔들었다.",
			"희미한 환영의 속삭임. 애타는 부름이 메아리쳤다."
		],
		"english": [
			"Harsh cold, unstoppable footsteps.",
			"The plundering monster. But it wasn't just taking.",
			"In the frozen cave, the shadow of lost memories shook the party.",
			"A faint phantom's whisper. A desperate call echoed."
		],
		"japanese": [
			"厳しい寒さ、止まらない足取り。",
			"略奪する怪物。だが、ただ奪うだけではなかった。",
			"凍てついた洞窟の中、失われた記憶の影が一行を揺さぶった。",
			"ぼんやりとした幻影のささやき。切ない呼び声が響き渡った。"
		],
		"chinese": [
			"严酷的寒冷，无法停止的脚步。",
			"掠夺的怪物。但它不仅仅是夺取。",
			"在冰冻的洞穴中，失落记忆的阴影动摇着队伍。",
			"微弱幻影的低语。焦急的呼唤回荡着。"
		],
		"french": [
			"Froid mordant, pas inarrêtables.",
			"Le monstre pillard. Mais il ne faisait pas que prendre.",
			"Dans la grotte gelée, l'ombre des souvenirs perdus ébranla le groupe.",
			"Le murmure d'un fantôme indistinct. Un appel désespéré résonna."
		],
		"spanish": [
			"Frío implacable, pasos imparables.",
			"El monstruo saqueador. Pero no solo tomaba.",
			"En la cueva congelada, la sombra de los recuerdos perdidos sacudió al grupo.",
			"El susurro de una visión tenue. Un grito desesperado resonó."
		],
		"vietnamese": [
			"Giá rét khắc nghiệt, bước chân không ngừng.",
			"Quái vật cướp bóc. Nhưng không chỉ là cướp đoạt.",
			"Trong hang động đóng băng, bóng tối ký ức đã mất làm lung lay đoàn người.",
			"Tiếng thì thầm của ảo ảnh mờ nhạt. Tiếng gọi khẩn thiết vang vọng."
		],
		"thai": [
			"ความหนาวเหน็บอันโหดร้าย, ฝีเท้าที่หยุดไม่ได้.",
			"สัตว์ประหลาดผู้ปล้นสะดม. แต่มันไม่ใช่แค่การแย่งชิง.",
			"ในถ้ำเยือกแข็ง, เงาของความทรงจำที่หายไปสั่นคลอนคณะเดินทาง.",
			"เสียงกระซิบของภาพลวงตาจางๆ. เสียงเรียกที่สิ้นหวังสะท้อนก้อง."
		],
		"hindi": [
			"कड़ाके की ठंड, न रुकने वाले कदम।",
			"लूटने वाला राक्षस। लेकिन वह सिर्फ़ छीन नहीं रहा था।",
			"जमी हुई गुफा में, खोई हुई यादों की छाया ने दल को हिला दिया।",
			"एक धुंधले भ्रम की फुसफुसाहट। एक बेताब पुकार गूँज उठी।"
		]
	}
} as const;
