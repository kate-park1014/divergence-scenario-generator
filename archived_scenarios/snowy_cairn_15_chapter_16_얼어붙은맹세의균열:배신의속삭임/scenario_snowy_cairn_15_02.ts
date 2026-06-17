export const scenario_snowy_cairn_15_02 = {
	"scenario_id": "snowy_cairn_15_02",
	"order": 2,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"ivar": {
			"id": "mon_d8a80adc-9315-47b5-8c30-97ce33672bce",
			"name": {
				"korean": "이바르",
				"english": "Ivar",
				"japanese": "イヴァー",
				"chinese": "伊瓦尔",
				"french": "Ivar",
				"spanish": "Ivar",
				"vietnamese": "Ivar",
				"thai": "ไอวาร์",
				"hindi": "इवर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8dd7872b-d4df-44fd-b1a1-083a9156e700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2622fb62-daf4-42d1-a83b-2b78869d3e00/public"
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
						"korean": "혹한의 눈보라가 탐험대를 집어삼킬 듯 몰아쳤다.",
						"english": "A biting blizzard raged, threatening to swallow the expedition.",
						"japanese": "厳しい吹雪が探検隊を飲み込むかのように吹き荒れた。",
						"chinese": "严酷的暴风雪仿佛要吞噬探险队一般袭来。",
						"french": "Un blizzard mordant faisait rage, menaçant d'engloutir l'expédition.",
						"spanish": "Una ventisca cortante rugía, amenazando con engullir a la expedición.",
						"vietnamese": "Bão tuyết khắc nghiệt hoành hành, như muốn nuốt chửng đoàn thám hiểm.",
						"thai": "พายุหิมะที่หนาวเหน็บโหมกระหน่ำ ราวกับจะกลืนกินคณะสำรวจ",
						"hindi": "एक भीषण बर्फीला तूफान आया, जो अभियान को निगलने की धमकी दे रहा था।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "대장님… 더는 못 가겠습니다.",
						"english": "Captain... I can't go on.",
						"japanese": "隊長…もう進めません。",
						"chinese": "队长……我走不动了。",
						"french": "Capitaine... Je n'en peux plus.",
						"spanish": "Capitán... no puedo más.",
						"vietnamese": "Đội trưởng... tôi không thể đi tiếp được nữa.",
						"thai": "หัวหน้า... ผมไปต่อไม่ไหวแล้วครับ",
						"hindi": "कैप्टन... मैं और नहीं चल सकता।"
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"spot": [
						4,
						3
					],
					"speaker": "ivar",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "정신 차려. 여기서 멈추면 전부 끝이야.",
						"english": "Pull yourself together. If we stop here, it's all over.",
						"japanese": "気をしっかり持て。ここで止まれば全て終わりだ。",
						"chinese": "振作起来。如果在这里停下，一切都完了。",
						"french": "Reprends-toi. Si nous nous arrêtons ici, tout est fini.",
						"spanish": "Anímate. Si nos detenemos aquí, todo habrá terminado.",
						"vietnamese": "Tỉnh táo lại. Dừng lại ở đây là hết rồi.",
						"thai": "ตั้งสติหน่อย ถ้าเราหยุดตรงนี้ ทุกอย่างก็จบ",
						"hindi": "होश में आओ। अगर हम यहां रुकते हैं, तो सब खत्म हो जाएगा।"
					},
					"speaker": "ivar"
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "케른이 보인다. 저기가 우리의 이정표다!",
						"english": "I see the cairn. That's our landmark!",
						"japanese": "ケルンが見える。あれが我々の道標だ！",
						"chinese": "看到凯恩了。那是我们的里程碑！",
						"french": "Je vois le cairn. C'est notre repère !",
						"spanish": "Veo el cairn. ¡Ese es nuestro punto de referencia!",
						"vietnamese": "Tôi thấy gò đá. Đó là cột mốc của chúng ta!",
						"thai": "ฉันเห็นกองหิน นั่นคือจุดสังเกตของเรา!",
						"hindi": "मुझे केर्न दिख रहा है। वह हमारा मील का पत्थर है!"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "ivar",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "케른… 단순히 표식만은 아닌 것 같군.",
						"english": "The cairn... it seems to be more than just a marker.",
						"japanese": "ケルン…単なる目印だけではないようだ。",
						"chinese": "凯恩……看来不仅仅是标记。",
						"french": "Le cairn... il semble être plus qu'un simple marqueur.",
						"spanish": "El cairn... parece ser más que una simple señal.",
						"vietnamese": "Gò đá... dường như không chỉ là một dấu hiệu đơn thuần.",
						"thai": "กองหิน... ดูเหมือนจะเป็นมากกว่าแค่เครื่องหมาย",
						"hindi": "केर्न... यह सिर्फ एक निशान से कहीं ज्यादा लगता है।"
					},
					"speaker": "ivar"
				},
				{
					"content": {
						"korean": "대장님, 뭘 그렇게 유심히 보세요?",
						"english": "Captain, what are you looking at so intently?",
						"japanese": "隊長、何をそんなにじっと見ているんですか？",
						"chinese": "队长，您在仔细看什么呢？",
						"french": "Capitaine, qu'est-ce que vous regardez avec autant d'attention ?",
						"spanish": "Capitán, ¿qué está mirando con tanta atención?",
						"vietnamese": "Đội trưởng, anh đang nhìn gì kỹ vậy?",
						"thai": "หัวหน้าครับ คุณกำลังมองอะไรอยู่เหรอครับ?",
						"hindi": "कैप्टन, आप इतनी गौर से क्या देख रहे हैं?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "이 거대한 돌무덤… 뭔가 비밀이 숨겨져 있어.",
						"english": "This massive cairn... it hides a secret.",
						"japanese": "この巨大なケルン… 何か秘密が隠されている。",
						"chinese": "这座巨大的石冢… 隐藏着什么秘密。",
						"french": "Ce cairn massif... il cache un secret.",
						"spanish": "Este enorme túmulo de piedras... esconde un secreto.",
						"vietnamese": "Ngôi mộ đá khổng lồ này... ẩn chứa một bí mật.",
						"thai": "หลุมศพหินขนาดใหญ่นี้... มีความลับซ่อนอยู่",
						"hindi": "यह विशाल पत्थरों का ढेर... कुछ रहस्य छिपाए हुए है।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"speaker": "ivar",
					"spot": [
						2,
						4
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "더 가까이… 조사해봐야겠어.",
						"english": "Closer... I need to investigate.",
						"japanese": "もっと近くで… 調べてみないと。",
						"chinese": "再靠近点… 我得调查一下。",
						"french": "Plus près... Je dois enquêter.",
						"spanish": "Más cerca... Debo investigar.",
						"vietnamese": "Gần hơn nữa... Ta phải điều tra.",
						"thai": "เข้าไปใกล้กว่านี้... ฉันต้องตรวจสอบ",
						"hindi": "और करीब से… मुझे जांच करनी होगी।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "이바르가 케른의 표면에 손을 대자, 얼어붙은 표면에 고대 언어 같은 문양이 섬광처럼 나타났다 사라졌다.",
						"english": "As Ivar touched the cairn's surface, ancient-looking patterns flashed on the frozen stone, appearing and vanishing.",
						"japanese": "イヴァルがケルンの表面に手を触れると、凍てついた表面に古代言語のような文様が閃光のように現れては消えた。",
						"chinese": "当伊瓦尔触碰石冢表面时，冻结的石头上闪现出古老文字般的图案，忽现忽灭。",
						"french": "Quand Ivar toucha la surface du cairn, des motifs semblables à des langues anciennes apparurent et disparurent en un éclair sur la pierre gelée.",
						"spanish": "Mientras Ivar tocaba la superficie del túmulo, patrones similares a una lengua antigua destellaron y se desvanecieron sobre la piedra congelada.",
						"vietnamese": "Khi Ivar chạm tay vào bề mặt mộ đá, những hoa văn giống ngôn ngữ cổ đại chớp sáng rồi biến mất trên bề mặt đóng băng.",
						"thai": "เมื่ออิวาร์สัมผัสพื้นผิวของแท่นหิน รูปแบบคล้ายภาษาโบราณก็ปรากฏขึ้นและหายไปบนพื้นผิวที่แข็งตัวราวกับแสงวาบ",
						"hindi": "जैसे ही इवार ने पत्थरों के ढेर की सतह को छुआ, जमी हुई सतह पर प्राचीन भाषा जैसे पैटर्न बिजली की तरह चमकते और गायब होते रहे।"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…이건… 대체 무슨.",
						"english": "...What in the world is this?",
						"japanese": "…これは…一体何を。",
						"chinese": "……这…到底是什么。",
						"french": "...Qu'est-ce que c'est que ça ?",
						"spanish": "...Pero... ¿qué es esto?",
						"vietnamese": "...Đây... rốt cuộc là gì.",
						"thai": "...นี่มัน... คืออะไรกันแน่",
						"hindi": "...यह... आखिर क्या है?"
					},
					"speaker": "ivar"
				},
				{
					"content": {
						"korean": "대장님, 괜찮으세요?",
						"english": "Captain, are you alright?",
						"japanese": "隊長、大丈夫ですか？",
						"chinese": "队长，您没事吧？",
						"french": "Capitaine, ça va ?",
						"spanish": "Capitán, ¿está bien?",
						"vietnamese": "Đại úy, ngài không sao chứ?",
						"thai": "หัวหน้าครับ, ท่านสบายดีไหม?",
						"hindi": "कैप्टन, क्या आप ठीक हैं?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "아니, 아무것도 아니야. 착각일 뿐이다.",
						"english": "No, it's nothing. Just my imagination.",
						"japanese": "いや、何でもない。ただの錯覚だ。",
						"chinese": "不，没什么。只是我的错觉罢了。",
						"french": "Non, ce n'est rien. Juste une illusion.",
						"spanish": "No, no es nada. Solo fue una ilusión.",
						"vietnamese": "Không, không có gì cả. Chỉ là ảo giác thôi.",
						"thai": "ไม่, ไม่มีอะไร. แค่ภาพลวงตาเท่านั้นเอง.",
						"hindi": "नहीं, कुछ नहीं। बस एक भ्रम था।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"speaker": "ivar",
					"spot": [
						4,
						2
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "그 얼음 문양… 불길한 경고였어.",
						"english": "Those ice patterns... they were an ominous warning.",
						"japanese": "あの氷の文様… 不吉な警告だった。",
						"chinese": "那些冰上的图案… 是个不祥的警告。",
						"french": "Ces motifs de glace... c'était un avertissement sinistre.",
						"spanish": "Esos patrones de hielo... eran una advertencia siniestra.",
						"vietnamese": "Những hoa văn băng giá đó... là một lời cảnh báo đáng sợ.",
						"thai": "ลวดลายน้ำแข็งนั่น... มันเป็นคำเตือนที่ไม่เป็นมงคล",
						"hindi": "वे बर्फीले पैटर्न... एक अशुभ चेतावनी थी।"
					},
					"speaker": "ivar",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "대장님, 표정이 좋지 않으십니다.",
						"english": "Captain, you don't look well.",
						"japanese": "隊長、顔色が良くありません。",
						"chinese": "队长，您的脸色不太好。",
						"french": "Capitaine, vous n'avez pas l'air bien.",
						"spanish": "Capitán, no tiene buena cara.",
						"vietnamese": "Đại úy, sắc mặt ngài không tốt.",
						"thai": "หัวหน้าครับ, ท่านดูไม่ค่อยสบายเลย.",
						"hindi": "कैप्टन, आपका चेहरा ठीक नहीं लग रहा।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "ivar",
					"content": {
						"korean": "나는… 리더로서 너희를 지켜야 한다.",
						"english": "As a leader... I must protect you all.",
						"japanese": "私は… リーダーとしてお前たちを守らなければならない。",
						"chinese": "作为一名领袖… 我必须保护你们所有人。",
						"french": "En tant que leader... je dois vous protéger tous.",
						"spanish": "Como líder... debo protegerlos a todos.",
						"vietnamese": "Ta... với tư cách là người lãnh đạo, phải bảo vệ các ngươi.",
						"thai": "ในฐานะผู้นำ... ฉันต้องปกป้องพวกเธอทุกคน.",
						"hindi": "एक नेता के तौर पर… मुझे तुम सभी की रक्षा करनी चाहिए।"
					}
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "하지만 이 길의 끝에 무엇이 기다릴까.",
						"english": "But what awaits us at the end of this path?",
						"japanese": "しかし、この道の先に何が待ち受けているのだろうか。",
						"chinese": "但这路的尽头，又有什么在等着我们呢？",
						"french": "Mais qu'est-ce qui nous attend au bout de ce chemin ?",
						"spanish": "Pero, ¿qué nos espera al final de este camino?",
						"vietnamese": "Nhưng điều gì đang chờ đợi ở cuối con đường này?",
						"thai": "แต่มีอะไรรอเราอยู่ตรงปลายทางนี้?",
						"hindi": "पर इस राह के अंत में क्या इंतजार कर रहा है?"
					},
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "케른의 가장 깊은 곳, 거대한 얼음 틈새에서 정체 모를 그림자가 모습을 드러냈다.",
						"english": "In the deepest part of Kern, from a colossal ice crevice, an unknown shadow emerged.",
						"japanese": "ケルンの最深部、巨大な氷の亀裂から正体不明の影が現れた。",
						"chinese": "在凯恩最深处，一道不明身影从巨大的冰裂中显现。",
						"french": "Dans les profondeurs de Kern, une ombre inconnue émergea d'une gigantesque crevasse de glace.",
						"spanish": "En lo más profundo de Kern, una sombra desconocida emergió de una gigantesca grieta de hielo.",
						"vietnamese": "Từ sâu thẳm nhất của Kern, một bóng hình không rõ danh tính xuất hiện từ khe nứt băng khổng lồ.",
						"thai": "ในส่วนลึกที่สุดของเคิร์น เงาประหลาดได้ปรากฏกายขึ้นจากรอยแยกน้ำแข็งขนาดมหึมา",
						"hindi": "केर्न के सबसे गहरे हिस्से में, एक विशालकाय बर्फ की दरार से एक अज्ञात छाया प्रकट हुई।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "길을 잃은 자들이여… 너희의 희망은 얼어붙었다.",
						"english": "Lost souls… your hope has frozen.",
						"japanese": "道に迷いし者たちよ… お前たちの希望は凍りついた。",
						"chinese": "迷失者啊… 你们的希望已然冻结。",
						"french": "Âmes perdues… votre espoir est gelé.",
						"spanish": "Almas perdidas… vuestra esperanza se ha congelado.",
						"vietnamese": "Hỡi những kẻ lạc lối… hy vọng của các ngươi đã đóng băng.",
						"thai": "เหล่าผู้หลงทางเอ๋ย… ความหวังของเจ้าได้กลายเป็นน้ำแข็งแล้ว",
						"hindi": "हे भटके हुए प्राणी… तुम्हारी आशा जम गई है।"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이것이… 케른의 진짜 모습인가.",
						"english": "Is this… Kern's true form?",
						"japanese": "これが… ケルンの本当の姿なのか。",
						"chinese": "这就是… 凯恩的真实面貌吗？",
						"french": "Est-ce là… la véritable forme de Kern ?",
						"spanish": "¿Es esta… la verdadera forma de Kern?",
						"vietnamese": "Đây có phải… là hình dạng thật của Kern?",
						"thai": "นี่คือ… ร่างที่แท้จริงของเคิร์นงั้นหรือ",
						"hindi": "क्या यह… केर्न का असली रूप है?"
					},
					"speaker": "ivar"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "{random_boss}는 너희의 약속이 깨지는 소리를 들었다.",
						"english": "{random_boss} heard the sound of your promise breaking.",
						"japanese": "{random_boss}は、お前たちの約束が砕け散る音を聞いた。",
						"chinese": "{random_boss}听到了你们诺言破碎的声音。",
						"french": "{random_boss} a entendu le son de votre promesse brisée.",
						"spanish": "{random_boss} escuchó el sonido de vuestra promesa rompiéndose.",
						"vietnamese": "{random_boss} đã nghe thấy tiếng lời hứa của các ngươi vỡ tan.",
						"thai": "{random_boss} ได้ยินเสียงคำมั่นสัญญาของเจ้าแตกสลาย",
						"hindi": "{random_boss} ने तुम्हारे वादे के टूटने की आवाज सुनी।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "우린 포기하지 않아! 여기서 끝낼 거야!",
						"english": "We won't give up! We'll end it here!",
						"japanese": "俺たちは諦めない！ここで終わらせる！",
						"chinese": "我们不会放弃！就在这里结束！",
						"french": "Nous n'abandonnerons pas ! Nous en finirons ici !",
						"spanish": "¡No nos rendiremos! ¡Acabaremos con esto aquí!",
						"vietnamese": "Chúng ta sẽ không từ bỏ! Sẽ kết thúc ở đây!",
						"thai": "เราจะไม่ยอมแพ้! จะจบมันที่นี่!",
						"hindi": "हम हार नहीं मानेंगे! यहीं खत्म करेंगे!"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "더 이상의 거짓은 없다. 우리는 진실을 마주할 것이다!",
						"english": "No more lies. We will face the truth!",
						"japanese": "これ以上の嘘はない。我々は真実と向き合う！",
						"chinese": "不再有谎言。我们将面对真相！",
						"french": "Plus de mensonges. Nous ferons face à la vérité !",
						"spanish": "No más mentiras. ¡Afrontaremos la verdad!",
						"vietnamese": "Không còn lời dối trá nào nữa. Chúng ta sẽ đối mặt với sự thật!",
						"thai": "ไม่มีคำโกหกอีกต่อไป เราจะเผชิญหน้ากับความจริง!",
						"hindi": "अब और झूठ नहीं। हम सच्चाई का सामना करेंगे!"
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "나약한 자들이여… {random_boss}는 기다린다. 너희의 모든 것이 무너질 때를.",
						"english": "Weaklings… {random_boss} waits. For all of you to crumble.",
						"japanese": "弱き者たちよ… {random_boss}は待っている。お前たちの全てが崩れ去る時を。",
						"chinese": "弱者啊… {random_boss}在等待。等待你们一切崩塌之时。",
						"french": "Faibles… {random_boss} attend. Que tout s'effondre pour vous.",
						"spanish": "Débiles… {random_boss} espera. A que todo vuestro se desmorone.",
						"vietnamese": "Hỡi những kẻ yếu ớt… {random_boss} đang chờ đợi. Đến khi tất cả của các ngươi sụp đổ.",
						"thai": "พวกอ่อนแอเอ๋ย… {random_boss} กำลังรอคอย เวลาที่ทุกสิ่งของเจ้าจะพังทลาย",
						"hindi": "कमजोरों… {random_boss} इंतजार कर रहा है। जब तुम्हारा सब कुछ बिखर जाएगा।"
					}
				},
				{
					"content": {
						"korean": "젠장… 아직 끝나지 않았어. 포기할 순 없어!",
						"english": "Damn... It's not over. I can't give up!",
						"japanese": "くそ… まだ終わってない。諦めるもんか！",
						"chinese": "该死……还没结束。我不能放弃！",
						"french": "Maudit... Ce n'est pas encore fini. Je ne peux pas abandonner !",
						"spanish": "Maldita sea... Esto no ha terminado aún. ¡No puedo rendirme!",
						"vietnamese": "Chết tiệt... Vẫn chưa kết thúc. Tôi không thể bỏ cuộc!",
						"thai": "บ้าเอ๊ย... ยังไม่จบแค่นี้ ฉันจะยอมแพ้ไม่ได้!",
						"hindi": "धिक्कार है... अभी खत्म नहीं हुआ। मैं हार नहीं मान सकता!"
					},
					"speaker": "ivar",
					"emotion": "angry",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "어리석은 자들… 이것은 시작일 뿐. 너희의 약속은… 이미 얼어붙었다.",
						"english": "Fools… this is just the beginning. Your promise is… already frozen.",
						"japanese": "愚かな者たちよ… これは始まりに過ぎない。お前たちの約束は… すでに凍りついた。",
						"chinese": "愚蠢的家伙… 这只是开始。你们的诺言… 早已冻结。",
						"french": "Insensés… ce n'est que le début. Votre promesse est… déjà gelée.",
						"spanish": "Necios… esto es solo el principio. Vuestra promesa está… ya congelada.",
						"vietnamese": "Bọn ngu xuẩn… đây chỉ là khởi đầu. Lời hứa của các ngươi… đã đóng băng rồi.",
						"thai": "พวกโง่เขลาเอ๋ย… นี่เป็นเพียงจุดเริ่มต้นเท่านั้น คำมั่นสัญญาของเจ้า… ได้กลายเป็นน้ำแข็งไปแล้ว",
						"hindi": "मूर्खों… यह तो बस शुरुआत है। तुम्हारा वादा… पहले ही जम चुका है।"
					},
					"speaker": "random_boss",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "끝이 아니다. 하지만… 경고는 피할 수 없다.",
						"english": "It's not the end. But… the warning is unavoidable.",
						"japanese": "終わりではない。しかし… 警告は避けられない。",
						"chinese": "尚未结束。但… 警告无法避免。",
						"french": "Ce n'est pas la fin. Mais… l'avertissement est inévitable.",
						"spanish": "No es el final. Pero… la advertencia es ineludible.",
						"vietnamese": "Đây không phải là kết thúc. Nhưng… lời cảnh báo là không thể tránh khỏi.",
						"thai": "มันยังไม่จบ แต่… คำเตือนไม่อาจหลีกเลี่ยงได้",
						"hindi": "यह अंत नहीं है। लेकिन… चेतावनी टाली नहीं जा सकती।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "정체 모를 보스는 사라졌지만, 그들의 마음에 불신과 의심의 씨앗이 깊이 박혔다.",
						"english": "The unknown boss vanished, but the seeds of distrust and doubt were deeply planted in their hearts.",
						"japanese": "正体不明のボスは消え去ったが、彼らの心には不信と疑いの種が深く植え付けられた。",
						"chinese": "不明身份的首领消失了，但在他们心中，不信任与怀疑的种子已深埋。",
						"french": "Le boss inconnu disparut, mais les graines de la méfiance et du doute furent profondément plantées dans leurs cœurs.",
						"spanish": "El jefe desconocido desapareció, pero las semillas de la desconfianza y la duda se sembraron profundamente en sus corazones.",
						"vietnamese": "Trùm không rõ danh tính đã biến mất, nhưng hạt giống bất tín và nghi ngờ đã gieo sâu vào lòng họ.",
						"thai": "หัวหน้าปริศนาหายไปแล้ว แต่เมล็ดพันธุ์แห่งความไม่ไว้วางใจและความสงสัยได้ถูกหว่านลงลึกในใจของพวกเขาแล้ว",
						"hindi": "अज्ञात बॉस गायब हो गया, लेकिन उनके दिलों में अविश्वास और संदेह के बीज गहराई तक बो दिए गए थे।"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"북부 설원, 혹독한 추위가 모든 것을 얼렸다.",
			"팀의 사기는 바닥으로 떨어졌고, 이바르는 고뇌했다.",
			"거대한 돌무덤, 케른. 그 표면에 섬뜩한 경고가 나타났다.",
			"이바르는 직감했다. 이 얼어붙은 문양은… 파멸의 전조다."
		],
		"english": [
			"Northern snowfields, a bitter cold froze everything.",
			"Team morale plummeted, Ivar was in agony.",
			"A giant cairn. An eerie warning appeared on its surface.",
			"Ivar had a premonition. This frozen pattern... a harbinger of doom."
		],
		"japanese": [
			"北の雪原、厳しい寒さが全てを凍らせた。",
			"チームの士気は地に落ち、イヴァールは苦悩した。",
			"巨大なケルン。その表面には不気味な警告が現れた。",
			"イヴァールは直感した。この凍てつく紋様は…破滅の前兆だ。"
		],
		"chinese": [
			"北部雪原，严寒冻结了一切。",
			"团队士气低落，伊瓦尔备受煎熬。",
			"巨大的石冢，凯恩。其表面浮现出诡异的警告。",
			"伊瓦尔直觉。这冰冻的图案……是毁灭的预兆。"
		],
		"french": [
			"Les plaines enneigées du Nord, un froid mordant gelait tout.",
			"Le moral de l'équipe chuta, Ivar était en agonie.",
			"Un gigantesque cairn. Un avertissement sinistre apparut sur sa surface.",
			"Ivar eut une intuition. Ce motif gelé... un présage de malheur."
		],
		"spanish": [
			"Las llanuras nevadas del norte, un frío cruel lo congeló todo.",
			"La moral del equipo se desplomó, Ivar agonizaba.",
			"Un gigantesco cairn. Una advertencia espeluznante apareció en su superficie.",
			"Ivar tuvo una premonición. Este patrón congelado... un presagio de perdición."
		],
		"vietnamese": [
			"Bắc tuyết nguyên, giá lạnh khắc nghiệt đóng băng mọi thứ.",
			"Tinh thần đội xuống dốc, Ivar đau khổ.",
			"Một gò đá khổng lồ, Cairn. Một lời cảnh báo rùng rợn xuất hiện trên bề mặt.",
			"Ivar trực giác. Hoa văn đóng băng này... điềm báo diệt vong."
		],
		"thai": [
			"ทุ่งหิมะทางเหนือ ความหนาวเหน็บจับทุกสิ่งให้เป็นน้ำแข็ง",
			"ขวัญกำลังใจของทีมตกต่ำ อิวาร์ทรมาน",
			"กองหินขนาดใหญ่, เคิร์น คำเตือนอันน่าขนลุกปรากฏขึ้นบนพื้นผิว",
			"อิวาร์มีลางสังหรณ์ ลวดลายที่แข็งตัวนี้...ลางบอกเหตุแห่งหายนะ"
		],
		"hindi": [
			"उत्तरी बर्फीले मैदान, एक कड़ाके की ठंड ने सब कुछ जमा दिया。",
			"टीम का मनोबल गिर गया, इवर पीड़ा में था।",
			"एक विशाल पत्थर का ढेर, केर्न। उसकी सतह पर एक भयानक चेतावनी दिखाई दी।",
			"इवर को पूर्वाभास हुआ। यह जमी हुई आकृति... विनाश का अग्रदूत है।"
		]
	}
} as const;
