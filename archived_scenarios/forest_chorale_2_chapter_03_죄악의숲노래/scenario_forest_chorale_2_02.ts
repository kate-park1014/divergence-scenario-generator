export const scenario_forest_chorale_2_02 = {
	"scenario_id": "forest_chorale_2_02",
	"order": 2,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"ela": {
			"id": "mon_24765cb2-6fc0-452e-8969-871a82349c70",
			"name": {
				"korean": "엘라",
				"english": "Ela",
				"japanese": "エラ",
				"chinese": "艾拉",
				"french": "Ela",
				"spanish": "Ela",
				"vietnamese": "Ela",
				"thai": "เอล่า",
				"hindi": "एला"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/55d3e9ee-c589-40ab-dfa4-a658bbddd400/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/cfacc842-115e-4175-a7fa-3111a468ed00/public"
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
					"speaker": "narrator",
					"content": {
						"korean": "울창한 숲 속, 거대한 돌기둥들이 흙에 파묻혀 있었다.",
						"english": "Deep in the dense forest, giant stone pillars were buried in the earth.",
						"japanese": "鬱蒼とした森の奥深く、巨大な石柱が土に埋もれていた。",
						"chinese": "茂密的森林深处，巨大的石柱被埋在土中。",
						"french": "Au cœur de la forêt dense, de gigantesques piliers de pierre étaient enfouis dans la terre.",
						"spanish": "En lo profundo del denso bosque, enormes pilares de piedra estaban enterrados en la tierra.",
						"vietnamese": "Sâu trong khu rừng rậm, những cột đá khổng lồ bị chôn vùi trong lòng đất.",
						"thai": "ลึกเข้าไปในป่าทึบ เสาหินยักษ์ถูกฝังอยู่ในดิน",
						"hindi": "घने जंगल में गहराई में, विशाल पत्थर के खंभे मिट्टी में दबे हुए थे।"
					}
				},
				{
					"duration_ms": 500,
					"speaker": "ela",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "대단해! 이게 바로 망각된 문명의 유적이야!",
						"english": "Amazing! These are the ruins of a forgotten civilization!",
						"japanese": "すごい！これがまさに忘れ去られた文明の遺跡だよ！",
						"chinese": "太棒了！这就是被遗忘文明的遗迹！",
						"french": "Incroyable ! Ce sont les ruines d'une civilisation oubliée !",
						"spanish": "¡Increíble! ¡Estas son las ruinas de una civilización olvidada!",
						"vietnamese": "Tuyệt vời! Đây chính là di tích của một nền văn minh bị lãng quên!",
						"thai": "สุดยอด! นี่คือซากปรักหักพังของอารยธรรมที่ถูกลืม!",
						"hindi": "अद्भुत! ये एक भूली हुई सभ्यता के खंडहर हैं!"
					},
					"speaker": "ela",
					"emotion": "happy"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "유적이라고?",
						"english": "Ruins?",
						"japanese": "遺跡だって？",
						"chinese": "遗迹？",
						"french": "Des ruines ?",
						"spanish": "¿Ruinas?",
						"vietnamese": "Di tích sao?",
						"thai": "ซากปรักหักพัง?",
						"hindi": "खंडहर?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "그래! 고대 주술의 흔적이 느껴져.",
						"english": "Yes! I can feel traces of ancient sorcery.",
						"japanese": "そう！古代呪術の痕跡が感じられる。",
						"chinese": "没错！我能感受到古老巫术的痕迹。",
						"french": "Oui ! Je ressens des traces de sorcellerie ancienne.",
						"spanish": "¡Sí! Puedo sentir rastros de hechicería antigua.",
						"vietnamese": "Đúng vậy! Tôi có thể cảm nhận được dấu vết của ma thuật cổ xưa.",
						"thai": "ใช่! ฉันสัมผัสได้ถึงร่องรอยของเวทมนตร์โบราณ",
						"hindi": "हाँ! मुझे प्राचीन जादू-टोना के निशान महसूस हो रहे हैं।"
					},
					"emotion": "happy",
					"speaker": "ela"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"speaker": "ela",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "이 문양을 봐! 고대인들은 자연의 힘을 다뤘어.",
						"english": "Look at this pattern! The ancients wielded the power of nature.",
						"japanese": "この文様を見て！古代人たちは自然の力を操っていたんだ。",
						"chinese": "看这个图案！古人掌握着自然的力量。",
						"french": "Regarde ce motif ! Les anciens maniaient le pouvoir de la nature.",
						"spanish": "¡Mira este patrón! Los antiguos manejaban el poder de la naturaleza.",
						"vietnamese": "Hãy nhìn hoa văn này! Người xưa đã điều khiển sức mạnh của tự nhiên.",
						"thai": "ดูสิ ลวดลายนี้! คนโบราณใช้พลังแห่งธรรมชาติได้",
						"hindi": "इस पैटर्न को देखो! प्राचीन लोग प्रकृति की शक्ति का प्रयोग करते थे।"
					},
					"speaker": "ela",
					"emotion": "happy",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_1",
					"content": {
						"korean": "근데… 여기 숲이 너무 빨리 시들고 있어.",
						"english": "But... this forest is withering too fast.",
						"japanese": "でも…ここの森は枯れるのが早すぎる。",
						"chinese": "可是……这里的森林枯萎得太快了。",
						"french": "Mais... cette forêt se fane trop vite.",
						"spanish": "Pero... este bosque se está marchitando demasiado rápido.",
						"vietnamese": "Nhưng… khu rừng này đang héo tàn quá nhanh.",
						"thai": "แต่... ป่าที่นี่กำลังเหี่ยวเฉาเร็วเกินไป",
						"hindi": "लेकिन… यह जंगल बहुत तेज़ी से मुरझा रहा है।"
					}
				},
				{
					"content": {
						"korean": "어지럽게 버려진 물건들도 많고… 뭔가 이상해."
					},
					"emotion": "base",
					"speaker": "character_2",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "ela",
					"content": {
						"korean": "아, 그건 탐험가들의 흔적이겠지! 별거 아니야."
					},
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"speaker": "ela",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 유적엔 거대한 힘이 잠들어 있었을 거야!"
					},
					"speaker": "ela",
					"emotion": "happy"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "유적 주변의 식물들은 소리 없이, 빠르게 죽어갔다."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이상해… 숲이 우릴 거부하는 것 같아."
					},
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "탐험은 언제나 위험을 동반하는 법이지. 이 정도쯤이야!"
					},
					"emotion": "base",
					"speaker": "ela"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "ela"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "왠지 우리가 숲을 더 망가뜨리는 것 같아."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "속삭임이… 사람 말처럼 들려. 도와달라는 건가?"
					},
					"speaker": "character_1",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "너무 감정적으로 생각하지 마. 과학적인 분석이 필요해."
					},
					"speaker": "ela",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "숲의 침묵은 더욱 깊어졌고, 발걸음은 무거웠다.",
						"english": "The forest's silence deepened, and my steps grew heavy.",
						"japanese": "森の静寂はさらに深まり、足取りは重かった。",
						"chinese": "森林的寂静愈发深沉，脚步也变得沉重。",
						"french": "Le silence de la forêt s'approfondissait, mes pas devenaient lourds.",
						"spanish": "El silencio del bosque se hizo más profundo y mis pasos, más pesados.",
						"vietnamese": "Sự tĩnh lặng của rừng càng thêm sâu sắc, bước chân càng nặng nề.",
						"thai": "ความเงียบในป่ายิ่งลึกซึ้งขึ้นเรื่อยๆ และฝีเท้าก็หนักอึ้ง",
						"hindi": "जंगल की खामोशी और गहरी होती गई, कदम भारी थे।"
					},
					"speaker": "narrator",
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
						"korean": "어리석군. 너희가 파괴한 건… 이 숲의 마지막 방어였다.",
						"english": "Foolish. What you destroyed... was this forest's last defense.",
						"japanese": "愚か者め。お前たちが破壊したのは… この森の最後の防衛だった。",
						"chinese": "愚蠢。你们所摧毁的… 是这森林最后的防线。",
						"french": "Imbéciles. Ce que vous avez détruit… était la dernière défense de cette forêt.",
						"spanish": "Necios. Lo que habéis destruido… era la última defensa de este bosque.",
						"vietnamese": "Thật ngu ngốc. Cái mà các ngươi phá hủy… là phòng tuyến cuối cùng của khu rừng này.",
						"thai": "โง่เขลา สิ่งที่เจ้าทำลาย… คือแนวป้องกันสุดท้ายของป่าแห่งนี้",
						"hindi": "मूर्ख। तुमने जो नष्ट किया... वह इस जंगल की आखिरी सुरक्षा थी।"
					},
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "진정한 파멸은 이제부터 시작될 것이다.",
						"english": "True destruction will begin now.",
						"japanese": "真の破滅はこれから始まるだろう。",
						"chinese": "真正的毁灭，将从此刻开始。",
						"french": "La véritable destruction commencera maintenant.",
						"spanish": "La verdadera destrucción comenzará ahora.",
						"vietnamese": "Sự hủy diệt thật sự sẽ bắt đầu từ bây giờ.",
						"thai": "การทำลายล้างที่แท้จริงจะเริ่มต้นขึ้นเดี๋ยวนี้",
						"hindi": "वास्तविक विनाश अब शुरू होगा।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "대체… 무슨 소리야?",
						"english": "What... what are you talking about?",
						"japanese": "いったい… どういうことだ？",
						"chinese": "究竟… 是什么意思？",
						"french": "Qu'est-ce que… tu racontes ?",
						"spanish": "¿Qué... qué significa eso?",
						"vietnamese": "Rốt cuộc… là có ý gì?",
						"thai": "นี่มัน… หมายความว่ายังไง?",
						"hindi": "आखिर... क्या बात है?"
					}
				},
				{
					"speaker": "ela",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "유적이… 재앙의 도구였다니…",
						"english": "So the ruins... were a tool of disaster...",
						"japanese": "遺跡が… 災厄の道具だったとは…",
						"chinese": "遗迹竟然… 是灾祸的工具…",
						"french": "Que les ruines… aient été un outil de catastrophe…",
						"spanish": "Así que las ruinas... eran un instrumento de la calamidad...",
						"vietnamese": "Phế tích… lại là công cụ của tai ương…",
						"thai": "ซากปรักหักพัง… เป็นเครื่องมือแห่งหายนะงั้นหรือ…",
						"hindi": "खंडहर... आपदा का साधन था..."
					},
					"emotion": "sad",
					"speaker": "ela",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "승리했지만, 탐험대의 죄책감은 더욱 깊어졌다.",
						"english": "Victory achieved, yet the expedition's guilt only deepened.",
						"japanese": "勝利したが、探検隊の罪悪感はさらに深まった。",
						"chinese": "虽得胜利，探险队的罪恶感却愈发沉重。",
						"french": "La victoire fut leur, mais la culpabilité de l'expédition s'intensifia.",
						"spanish": "La victoria fue suya, pero la culpa de la expedición se hizo más profunda.",
						"vietnamese": "Chiến thắng đã đến, nhưng tội lỗi của đoàn thám hiểm càng thêm nặng.",
						"thai": "แม้ชนะ แต่ความรู้สึกผิดของคณะสำรวจกลับยิ่งลึกซึ้งขึ้น",
						"hindi": "जीत मिली, पर अन्वेषण दल का अपराधबोध और गहरा हो गया。"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "숲의 속삭임은 멈추지 않고, 이제는 더 분명하게 들려왔다.",
						"english": "The forest's whispers never ceased, now clearer than before.",
						"japanese": "森の囁きは止まず、今やよりはっきりと聞こえた。",
						"chinese": "森林的低语从未停止，如今听来更加清晰。",
						"french": "Les murmures de la forêt ne cessèrent pas, désormais plus distincts.",
						"spanish": "Los susurros del bosque no cesaron, ahora se oían con mayor claridad.",
						"vietnamese": "Tiếng thì thầm của rừng không ngừng lại, giờ đây nghe rõ hơn.",
						"thai": "เสียงกระซิบของป่าไม่เคยหยุดลง และตอนนี้ได้ยินชัดเจนยิ่งขึ้น",
						"hindi": "जंगल की फुसफुसाहटें थमी नहीं, अब और स्पष्ट सुनाई दे रही थीं।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "유적의 가장 깊은 곳, 거대한 그림자가 길을 막았다.",
						"english": "In the deepest part of the ruins, a giant shadow blocked the way.",
						"japanese": "遺跡の最奥で、巨大な影が道を塞いだ。",
						"chinese": "遗迹最深处，一道巨大的黑影挡住了去路。",
						"french": "Au plus profond des ruines, une ombre gigantesque bloquait le chemin.",
						"spanish": "En lo más profundo de las ruinas, una sombra gigantesca bloqueaba el camino.",
						"vietnamese": "Ở nơi sâu nhất của phế tích, một bóng đen khổng lồ đã chắn lối.",
						"thai": "ณ ส่วนลึกที่สุดของซากปรักหักพัง เงาขนาดมหึมาขวางทางอยู่",
						"hindi": "खंडहर के सबसे गहरे हिस्से में, एक विशालकाय परछाई ने रास्ता रोक रखा था।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "감히 이곳까지… 이 숲의 균형을 깨뜨리는 자들이여.",
						"english": "You dare come this far... you who disturb the balance of this forest.",
						"japanese": "敢えてここまで… この森の均衡を破る者たちよ。",
						"chinese": "竟敢来到此处… 破坏这森林平衡之人。",
						"french": "Vous osez venir jusqu'ici… Vous qui brisez l'équilibre de cette forêt.",
						"spanish": "¿Cómo osáis llegar hasta aquí...? ¡Vosotros, que rompéis el equilibrio de este bosque!",
						"vietnamese": "Dám đến tận đây… những kẻ phá vỡ sự cân bằng của khu rừng này.",
						"thai": "กล้าดียังไงมาถึงที่นี่… เจ้าผู้ทำลายสมดุลของป่าแห่งนี้",
						"hindi": "इतनी दूर तक आने की हिम्मत की... तुम, जो इस जंगल का संतुलन बिगाड़ रहे हो।"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "너희의 호기심이, 결국 숲을 파멸로 이끌 것이다.",
						"english": "Your curiosity will ultimately lead the forest to ruin.",
						"japanese": "お前たちの好奇心が、結局、森を破滅に導くだろう。",
						"chinese": "你们的好奇心，终将把森林引向毁灭。",
						"french": "Votre curiosity mènera, au final, la forêt à sa perte.",
						"spanish": "Vuestra curiosidad, al final, conducirá al bosque a su perdición.",
						"vietnamese": "Sự tò mò của các ngươi, cuối cùng sẽ dẫn khu rừng đến sự diệt vong.",
						"thai": "ความอยากรู้อยากเห็นของเจ้า จะนำป่าไปสู่ความพินาศในที่สุด",
						"hindi": "तुम्हारी जिज्ञासा, अंततः जंगल को विनाश की ओर ले जाएगी।"
					},
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "네가… 이 유적을 지키는 존재인가?",
						"english": "Are you... the guardian of these ruins?",
						"japanese": "お前が… この遺跡を守る存在なのか？",
						"chinese": "你是… 守护这遗迹的存在吗？",
						"french": "Es-tu… l'être qui protège ces ruines ?",
						"spanish": "¿Eres tú... la entidad que protege estas ruinas?",
						"vietnamese": "Ngươi… là kẻ bảo vệ phế tích này sao?",
						"thai": "เจ้า… คือผู้พิทักษ์ซากปรักหักพังนี้หรือ?",
						"hindi": "क्या तुम... इस खंडहर के रक्षक हो?"
					}
				},
				{
					"action": "enter",
					"type": "direction",
					"speaker": "ela",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "설마… 유적의 힘이 이 괴물을 만들었어?",
						"english": "Could it be... the power of the ruins created this monster?",
						"japanese": "まさか… 遺跡の力がこの怪物を生み出したのか？",
						"chinese": "难道… 是遗迹的力量创造了这怪物？",
						"french": "Impossible… le pouvoir des ruines a créé ce monstre ?",
						"spanish": "¿Acaso... el poder de las ruinas creó a este monstruo?",
						"vietnamese": "Chẳng lẽ… sức mạnh của phế tích đã tạo ra con quái vật này?",
						"thai": "ไม่น่าเชื่อ… พลังของซากปรักหักพังสร้างสัตว์ประหลาดตัวนี้ขึ้นมาหรือ?",
						"hindi": "कहीं ऐसा तो नहीं... खंडहर की शक्ति ने इस राक्षस को बनाया है?"
					},
					"speaker": "ela",
					"emotion": "sad"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "하찮은 자들. 이 숲의 고통은 너희가 이해할 수 없다.",
						"english": "Insignificant fools. You cannot fathom this forest's suffering.",
						"japanese": "愚かな者たち。この森の苦痛はお前たちには理解できない。",
						"chinese": "区区凡人。此森之痛，汝等岂能理解。",
						"french": "Misérables. La souffrance de cette forêt vous dépasse.",
						"spanish": "Insignificantes. El sufrimiento de este bosque está más allá de vuestra comprensión.",
						"vietnamese": "Bọn yếu hèn. Các ngươi không thể hiểu nỗi đau của khu rừng này.",
						"thai": "เจ้าพวกไร้ค่า ความเจ็บปวดของป่านี้พวกเจ้าไม่อาจเข้าใจได้",
						"hindi": "तुच्छ प्राणी। इस जंगल का दर्द तुम समझ नहीं सकते।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "이대로 포기할 순 없어…!",
						"english": "I can't give up... not like this!",
						"japanese": "このまま、諦めるわけにはいかない…！",
						"chinese": "不能就此放弃…！",
						"french": "Je ne peux pas abandonner... pas ainsi !",
						"spanish": "¡No puedo rendirme así...!",
						"vietnamese": "Không thể từ bỏ thế này…!",
						"thai": "ยอมแพ้แบบนี้ไม่ได้…!",
						"hindi": "मैं ऐसे हार नहीं मान सकता…!"
					},
					"type": "speech"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "ela",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "ela",
					"emotion": "sad",
					"content": {
						"korean": "내가… 내가 잘못 생각했어…",
						"english": "I... I misjudged...",
						"japanese": "私… 私が間違っていた…",
						"chinese": "我… 我想错了…",
						"french": "J'ai... j'ai mal jugé...",
						"spanish": "Yo... me equivoqué...",
						"vietnamese": "Mình… mình đã sai rồi…",
						"thai": "ฉัน… ฉันคิดผิดไปแล้ว…",
						"hindi": "मैंने… मैंने गलत सोचा था…"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"숲 깊은 곳, 잊힌 문명의 잔해가 깨어난다.",
			"엘라는 고대 주술의 흔적에 매료되었지만,",
			"유적 주변의 숲은 너무 빠르게 죽어가고 있었다.",
			"이 숲의 속삭임은 단순한 전설이 아니었다.",
			"우리는 그 속에서, 또 다른 죄책감을 느꼈다."
		],
		"english": [
			"Deep in the forest, the remnants of a forgotten civilization awaken.",
			"Ella was captivated by the traces of ancient sorcery,",
			"yet the forest around the ruins was dying too quickly.",
			"The whispers of this forest were no mere legend.",
			"Within them, we felt another guilt."
		],
		"japanese": [
			"森の奥深く、忘れ去られた文明の残骸が目覚める。",
			"エラは古代呪術の痕跡に魅せられたが、",
			"遺跡周辺の森はあまりにも早く枯れていった。",
			"この森の囁きは、単なる伝説ではなかった。",
			"その中で、私たちはまた別の罪悪感を感じた。"
		],
		"chinese": [
			"森林深处，被遗忘文明的残骸正在苏醒。",
			"艾拉被古老巫术的痕迹所吸引，但",
			"然而，遗迹周围的森林却在迅速枯萎。",
			"这片森林的低语并非简单的传说。",
			"我们从中感受到了另一种罪恶感。"
		],
		"french": [
			"Au plus profond de la forêt, les vestiges d'une civilisation oubliée s'éveillent.",
			"Ella était captivée par les traces de sorcellerie ancienne,",
			"pourtant la forêt autour des ruines mourait trop vite.",
			"Les murmures de cette forêt n'étaient pas une simple légende.",
			"En leur sein, nous ressentions une autre culpabilité."
		],
		"spanish": [
			"En lo profundo del bosque, los restos de una civilización olvidada despiertan.",
			"Ella estaba cautivada por los vestigios de la hechicería antigua,",
			"sin embargo, el bosque alrededor de las ruinas moría demasiado rápido.",
			"Los susurros de este bosque no eran una simple leyenda.",
			"Dentro de ellos, sentimos otra culpa."
		],
		"vietnamese": [
			"Sâu trong rừng, tàn tích của một nền văn minh bị lãng quên đang thức tỉnh.",
			"Ella bị cuốn hút bởi dấu vết của ma thuật cổ xưa, nhưng",
			"rừng xung quanh di tích đang chết quá nhanh.",
			"Lời thì thầm của khu rừng này không chỉ là một truyền thuyết đơn thuần.",
			"Trong đó, chúng tôi cảm thấy một nỗi tội lỗi khác."
		],
		"thai": [
			"ลึกเข้าไปในป่า ซากอารยธรรมที่ถูกลืมกำลังตื่นขึ้น",
			"เอลล่าหลงใหลในร่องรอยของเวทมนตร์โบราณ แต่",
			"แต่ป่ารอบๆ ซากปรักหักพังกำลังตายเร็วเกินไป",
			"เสียงกระซิบของป่านี้ไม่ใช่แค่ตำนาน",
			"ในนั้น เราสัมผัสได้ถึงความรู้สึกผิดอีกอย่างหนึ่ง"
		],
		"hindi": [
			"जंगल की गहराई में, एक भूली हुई सभ्यता के अवशेष जागृत होते हैं।",
			"एला प्राचीन जादू-टोना के निशानों से मोहित थी,",
			"फिर भी, खंडहरों के आसपास का जंगल बहुत तेज़ी से मर रहा था।",
			"इस जंगल की फुसफुसाहट महज एक किंवदंती नहीं थी।",
			"उनके भीतर, हमने एक और अपराधबोध महसूस किया।"
		]
	}
} as const;
