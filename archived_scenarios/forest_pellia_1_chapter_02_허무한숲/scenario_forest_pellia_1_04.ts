export const scenario_forest_pellia_1_04 = {
	"scenario_id": "forest_pellia_1_04",
	"order": 4,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"fern": {
			"id": "mon_279a32a0-8ec1-4b5b-8179-32df46fdc664",
			"name": {
				"korean": "페른",
				"english": "Fern",
				"japanese": "フェルン",
				"chinese": "费恩",
				"french": "Fern",
				"spanish": "Fern",
				"vietnamese": "Fern",
				"thai": "เฟิร์น",
				"hindi": "फर्न"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/19f9763e-413a-485e-787a-9bbfd8208700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/563627d4-0b7c-4865-39d4-1d0a97363c00/public"
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
						"korean": "숲의 가장 깊숙한 곳, 공간은 형체 없이 일렁였다.",
						"english": "In the deepest part of the forest, space rippled shapelessly.",
						"japanese": "森の最も深い場所で、空間は形なく揺らめいていた。",
						"chinese": "在森林最深处，空间无形地波动着。",
						"french": "Au plus profond de la forêt, l'espace ondulait sans forme.",
						"spanish": "En lo más profundo del bosque, el espacio ondeaba sin forma.",
						"vietnamese": "Tại nơi sâu nhất của rừng, không gian rung động vô hình.",
						"thai": "ในส่วนที่ลึกที่สุดของป่า อวกาศพลิ้วไหวไร้รูปร่าง",
						"hindi": "जंगल के सबसे गहरे हिस्से में, स्थान बिना आकार के लहरा रहा था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "여기… 대체 무슨 일이야? 길이 자꾸만 변해.",
						"english": "What's… what's going on here? The path keeps changing.",
						"japanese": "ここ…一体どうなってるんだ？道がどんどん変わる。",
						"chinese": "这里…到底发生了什么？路一直在变。",
						"french": "Qu'est-ce… qu'est-ce qui se passe ici ? Le chemin ne cesse de changer.",
						"spanish": "¿Qué… qué está pasando aquí? El camino no deja de cambiar.",
						"vietnamese": "Ở đây… chuyện gì đang xảy ra vậy? Lối đi cứ thay đổi.",
						"thai": "ที่นี่...เกิดอะไรขึ้นกันแน่? เส้นทางเปลี่ยนไปเรื่อยๆ",
						"hindi": "यहाँ… ये सब क्या हो रहा है? रास्ता लगातार बदल रहा है।"
					},
					"emotion": "sad"
				},
				{
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction",
					"speaker": "fern"
				},
				{
					"type": "speech",
					"speaker": "fern",
					"content": {
						"korean": "저… 저도 그랬어요. 며칠 전부터… 이상한 현상에 시달리고 있어요.",
						"english": "Me… me too. For a few days now… I've been experiencing strange phenomena.",
						"japanese": "私も…私もそうでした。数日前から…奇妙な現象に悩まされています。",
						"chinese": "我…我也是。从几天前开始…就一直被奇怪的现象困扰。",
						"french": "Moi… moi aussi. Depuis quelques jours… je subis d'étranges phénomènes.",
						"spanish": "Yo… yo también. Desde hace unos días… he estado sufriendo fenómenos extraños.",
						"vietnamese": "Tôi… tôi cũng vậy. Từ vài ngày trước… tôi đã trải qua những hiện tượng kỳ lạ.",
						"thai": "ฉัน...ฉันก็เป็นเหมือนกัน ตั้งแต่เมื่อสองสามวันก่อน...ฉันประสบกับปรากฏการณ์แปลกๆ",
						"hindi": "मैं… मैं भी। कुछ दिनों से… मुझे अजीबोगरीब घटनाएँ महसूस हो रही हैं।"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "fern",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"content": {
						"korean": "분명 이 길이었는데… 순간 다른 장소에 서 있었어요.",
						"english": "It was definitely this path… then suddenly I was in a different place.",
						"japanese": "確かにこの道だったのに…一瞬で別の場所に立っていたんです。",
						"chinese": "明明是这条路…却瞬间置身于另一个地方。",
						"french": "C'était bien ce chemin… puis soudain je me suis retrouvé ailleurs.",
						"spanish": "Era este camino, sin duda… de repente, me encontraba en otro lugar.",
						"vietnamese": "Chắc chắn là con đường này… rồi đột nhiên tôi đứng ở một nơi khác.",
						"thai": "แน่ใจว่าเป็นเส้นทางนี้...แล้วจู่ๆ ฉันก็ไปยืนอยู่ที่อื่น",
						"hindi": "यह निश्चित रूप से यही रास्ता था… फिर अचानक मैं दूसरी जगह खड़ा था।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "fern"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "공간이 뒤틀린다는 말인가?",
						"english": "Does that mean space is distorting?",
						"japanese": "空間が歪んでいるということか？",
						"chinese": "你是说空间扭曲了？",
						"french": "Cela signifie que l'espace se déforme ?",
						"spanish": "¿Significa que el espacio se está distorsionando?",
						"vietnamese": "Có nghĩa là không gian đang bị bóp méo?",
						"thai": "นั่นหมายความว่าอวกาศกำลังบิดเบี้ยวเหรอ?",
						"hindi": "क्या इसका मतलब है कि स्थान विकृत हो रहा है?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "환영 같기도 하고… 분명 과거의 파편 같았어요. 제가 알지도 못하는.",
						"english": "It felt like an illusion… definitely a fragment of the past. One I didn't even know.",
						"japanese": "幻影のようでもあり…確かに過去の破片のようでした。私が知らないはずの。",
						"chinese": "像是一种幻象…分明是过去的碎片。我甚至一无所知。",
						"french": "C'était comme une illusion… clairement un fragment du passé. Un que je ne connaissais même pas.",
						"spanish": "Parecía una ilusión… definitivamente un fragmento del pasado. Uno que ni siquiera conocía.",
						"vietnamese": "Nó giống như một ảo ảnh… chắc chắn là một mảnh của quá khứ. Một thứ mà tôi thậm chí không biết.",
						"thai": "มันรู้สึกเหมือนภาพลวงตา...แน่นอนว่าเป็นส่วนหนึ่งของอดีต ที่ฉันไม่รู้จักด้วยซ้ำ",
						"hindi": "यह एक भ्रम जैसा लगा… निश्चित रूप से अतीत का एक टुकड़ा था। एक जिसे मैं जानता भी नहीं था।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "fern"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"emotion": "sad",
					"content": {
						"korean": "머리가… 깨질 것 같아. 낯선 풍경이 보여.",
						"english": "My head... it feels like it's splitting. I see unfamiliar sights.",
						"japanese": "頭が… 割れそうだ。見知らぬ景色が見える。",
						"chinese": "我的头… 好像要裂开了。看到了陌生的景象。",
						"french": "Ma tête… j'ai l'impression qu'elle va éclater. Je vois des paysages étranges.",
						"spanish": "Mi cabeza… parece que va a estallar. Veo paisajes desconocidos.",
						"vietnamese": "Đầu tôi… như muốn vỡ tung. Tôi thấy những cảnh tượng lạ lẫm.",
						"thai": "หัวฉัน… เหมือนจะแตก เห็นภาพที่ไม่คุ้นเคย",
						"hindi": "मेरा सिर… फटने वाला है। मुझे अजीब नज़ारे दिख रहे हैं।"
					},
					"speaker": "character_1",
					"type": "speech"
				},
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"speaker": "fern"
				},
				{
					"speaker": "fern",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "여긴 위험해요. 숲이… 균열을 일으키고 있어요.",
						"english": "It's dangerous here. The forest... is cracking.",
						"japanese": "ここは危険です。森が… 裂け目を生じています。",
						"chinese": "这里很危险。森林… 正在产生裂缝。",
						"french": "C'est dangereux ici. La forêt… se fissure.",
						"spanish": "Es peligroso aquí. El bosque… se está agrietando.",
						"vietnamese": "Nơi này nguy hiểm lắm. Rừng… đang nứt ra.",
						"thai": "ที่นี่อันตราย ป่า… กำลังปริแตก",
						"hindi": "यहाँ खतरा है। जंगल… दरारें पैदा कर रहा है।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "균열이라고?",
						"english": "Cracks?",
						"japanese": "裂け目だと？",
						"chinese": "裂缝？",
						"french": "Des fissures ?",
						"spanish": "¿Grietas?",
						"vietnamese": "Nứt ra ư?",
						"thai": "รอยแตกเหรอ?",
						"hindi": "दरारें?"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "아마… 모든 것을 가둬버리는 차원의 틈새가 열리고 있는 건지도 몰라요.",
						"english": "Perhaps... a rift in dimensions, trapping everything, is opening.",
						"japanese": "おそらく… 全てを閉じ込める次元の隙間が、開いているのかもしれません。",
						"chinese": "也许… 困住一切的次元裂缝正在打开。",
						"french": "Peut-être… qu'une faille dimensionnelle s'ouvre, piégeant tout.",
						"spanish": "Quizás… se esté abriendo una grieta dimensional que lo atrapa todo.",
						"vietnamese": "Có lẽ… một khe nứt chiều không gian đang mở ra, giam hãm mọi thứ.",
						"thai": "บางที… รอยแยกมิติที่กักขังทุกสิ่งกำลังจะเปิดออก",
						"hindi": "शायद… एक आयामी दरार खुल रही है जो सब कुछ फँसा लेगी।"
					},
					"speaker": "fern",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "공간은 비명을 지르듯 갈라졌다. 과거의 잔영이 무작위로 스쳤다.",
						"english": "Space ripped apart as if screaming. Echoes of the past flickered randomly.",
						"japanese": "空間は悲鳴を上げるように引き裂かれた。過去の残影が無作為に過ぎった。",
						"chinese": "空间像尖叫般撕裂。过去的残影随机闪过。",
						"french": "L'espace s'est déchiré comme un cri. Des échos du passé ont scintillé au hasard.",
						"spanish": "El espacio se desgarró como un grito. Ecos del pasado pasaron aleatoriamente.",
						"vietnamese": "Không gian xé toạc như thể đang gào thét. Những tàn dư của quá khứ thoảng qua ngẫu nhiên.",
						"thai": "อวกาศฉีกขาดราวกับกรีดร้อง เงาอดีตพาดผ่านไปมาไม่เป็นระเบียบ",
						"hindi": "अंतरिक्ष चीखते हुए फट गया। अतीत की प्रतिध्वनियाँ बेतरतीब ढंग से चमकीं।"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이젠 내가 누구였는지도 헷갈려… 모든 게 뒤섞여.",
						"english": "Now I'm confused about who I was... Everything's jumbled.",
						"japanese": "もう自分が誰だったのかも分からない… 全てが混ざり合っている。",
						"chinese": "我都快不记得自己是谁了… 一切都混乱了。",
						"french": "Maintenant, je ne sais plus qui j'étais... Tout est confus.",
						"spanish": "Ahora estoy confundido sobre quién era... Todo está revuelto.",
						"vietnamese": "Giờ tôi còn chẳng nhớ mình là ai… Mọi thứ cứ lẫn lộn hết cả.",
						"thai": "ตอนนี้ฉันสับสนว่าเคยเป็นใคร… ทุกอย่างปะปนกันไปหมด",
						"hindi": "अब मुझे नहीं पता कि मैं कौन था… सब कुछ गड़बड़ हो गया है।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"speaker": "fern"
				},
				{
					"type": "speech",
					"speaker": "fern",
					"content": {
						"korean": "들려요? 이 숲에 갇힌 자들의 절규가…",
						"english": "Do you hear it? The screams of those trapped in this forest...",
						"japanese": "聞こえますか？ この森に閉じ込められた者たちの絶叫が…",
						"chinese": "听见了吗？被困在这片森林里的人们的尖叫…",
						"french": "Vous l'entendez ? Les cris de ceux piégés dans cette forêt...",
						"spanish": "¡Lo escuchas! Los gritos de los atrapados en este bosque...",
						"vietnamese": "Nghe thấy không? Tiếng kêu gào của những kẻ bị mắc kẹt trong khu rừng này…",
						"thai": "ได้ยินไหม? เสียงกรีดร้องของผู้ที่ถูกขังอยู่ในป่าแห่งนี้…",
						"hindi": "क्या तुम्हें सुनाई दे रहा है? इस जंगल में फँसे लोगों की चीखें…"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_2",
					"content": {
						"korean": "…뭐라고?",
						"english": "...What did you say?",
						"japanese": "…何だと？",
						"chinese": "…你说什么？",
						"french": "...Quoi ?",
						"spanish": "...¿Qué dijiste?",
						"vietnamese": "…Anh nói gì cơ?",
						"thai": "…ว่าอะไรนะ?",
						"hindi": "…क्या कहा?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "더 깊이 가면… 우리도 영원히 갇힐 거예요.",
						"english": "If we go deeper... we'll be trapped forever too.",
						"japanese": "もっと深く進めば… 私たちも永遠に閉じ込められてしまいます。",
						"chinese": "如果我们再深入… 我们也会永远被困住。",
						"french": "Si nous allons plus loin… nous serons aussi piégés pour toujours.",
						"spanish": "Si vamos más profundo… nosotros también quedaremos atrapados para siempre.",
						"vietnamese": "Nếu chúng ta đi sâu hơn… chúng ta cũng sẽ bị mắc kẹt mãi mãi.",
						"thai": "ถ้าเราไปลึกกว่านี้… เราก็จะถูกขังอยู่ตลอดไปเหมือนกัน",
						"hindi": "अगर हम और गहराई में गए… तो हम भी हमेशा के लिए फँस जाएँगे।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "fern"
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "어리석은 자들… 이곳은 영원한 미궁이다.",
						"english": "Fools... This place is an eternal labyrinth.",
						"japanese": "愚か者ども… ここは永遠の迷宮だ。",
						"chinese": "愚蠢的人们… 这里是永恒的迷宫。",
						"french": "Imbéciles… Cet endroit est un labyrinthe éternel.",
						"spanish": "Necios… Este lugar es un laberinto eterno.",
						"vietnamese": "Bọn ngốc… Nơi này là một mê cung vĩnh cửu.",
						"thai": "พวกคนโง่… ที่นี่คือเขาวงกตนิรันดร์",
						"hindi": "मूर्खों… यह जगह एक शाश्वत भूलभुलैया है।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "비켜! 우린 진실을 알아야 해!",
						"english": "Move! We need to know the truth!",
						"japanese": "どけ！我々は真実を知らねばならない！",
						"chinese": "让开！我们必须知道真相！",
						"french": "Poussez-vous ! Nous devons savoir la vérité !",
						"spanish": "¡Apartaos! ¡Necesitamos saber la verdad!",
						"vietnamese": "Tránh ra! Chúng ta cần biết sự thật!",
						"thai": "หลีกไป! เราต้องรู้ความจริง!",
						"hindi": "हट जाओ! हमें सच जानना है!"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "진실? 이곳에 갇힌 자들의 울부짖음이 바로 너희의 진실이다.",
						"english": "Truth? The cries of those trapped here are your truth.",
						"japanese": "真実？ここに囚われた者たちの叫びこそがお前たちの真実だ。",
						"chinese": "真相？被困于此之人的哀嚎就是你们的真相。",
						"french": "La vérité ? Les cris de ceux qui sont piégés ici sont votre vérité.",
						"spanish": "¿Verdad? Los lamentos de los aquí atrapados son vuestra verdad.",
						"vietnamese": "Sự thật? Tiếng gào thét của những kẻ bị giam cầm ở đây chính là sự thật của các ngươi.",
						"thai": "ความจริง? เสียงคร่ำครวญของผู้ที่ติดอยู่ที่นี่คือความจริงของพวกเจ้า",
						"hindi": "सच? यहाँ फँसे लोगों की चीखें ही तुम्हारी सच्चाई हैं।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "크큭… 네가 이겼다고? 착각하지 마라. 너희도 곧… 이곳의 일부가 될 뿐.",
						"english": "Heh heh... You won? Don't be mistaken. Soon, you too... will merely become a part of this place.",
						"japanese": "クク… お前が勝っただと？勘違いするな。お前たちもじき… ここ一部となるだけだ。",
						"chinese": "呵呵… 你赢了？别搞错了。你们也很快… 会成为这里的一部分。",
						"french": "Hé hé... Tu as gagné ? Ne te méprends pas. Bientôt, vous aussi... ne serez qu'une partie de cet endroit.",
						"spanish": "Je je... ¿Has ganado? No te equivoques. Pronto, vosotros también... seréis solo una parte de este lugar.",
						"vietnamese": "Khà khà... Ngươi thắng rồi sao? Đừng lầm tưởng. Rồi các ngươi cũng sẽ... chỉ là một phần của nơi này thôi.",
						"thai": "ฮิฮิ... เจ้าชนะแล้วรึ? อย่าเข้าใจผิด พวกเจ้าเองก็... จะกลายเป็นส่วนหนึ่งของที่นี่ในไม่ช้า",
						"hindi": "हँ हँ... तुम जीत गए? गलतफहमी में मत रहना। जल्द ही, तुम भी... इस जगह का हिस्सा बन जाओगे।"
					}
				},
				{
					"content": {
						"korean": "무슨 소리야! 숲의 비명은 멈출 거야!",
						"english": "What are you talking about! The forest's screams will stop!",
						"japanese": "何を言ってるんだ！森の悲鳴は止まるはずだ！",
						"chinese": "你在说什么！森林的尖叫会停止的！",
						"french": "De quoi parlez-vous ! Les cris de la forêt vont cesser !",
						"spanish": "¡Qué dices! ¡Los gritos del bosque se detendrán!",
						"vietnamese": "Ngươi nói gì vậy! Tiếng thét của rừng sẽ dừng lại!",
						"thai": "เจ้าพูดอะไร! เสียงกรีดร้องของป่าจะหยุดลง!",
						"hindi": "तुम क्या कह रहे हो! जंगल की चीखें रुकेंगी!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "쓰러진 {random_boss}의 잔해가 사라졌다. 그러나 숲의 절규는 멈추지 않았다. 오히려 더 깊은 곳에서 울려 퍼지는 듯했다.",
						"english": "The remains of the fallen {random_boss} vanished. Yet the forest's agony did not cease. Instead, it seemed to echo from deeper within.",
						"japanese": "倒れた{random_boss}の残骸は消え去った。しかし森の絶叫は止まなかった。むしろ、より深い場所から響き渡るようだった。",
						"chinese": "倒下的{random_boss}残骸消失了。然而，森林的哀嚎并未停止。反而，似乎从更深处回荡开来。",
						"french": "Les vestiges du {random_boss} vaincu disparurent. Pourtant, l'agonie de la forêt ne cessa pas. Au contraire, elle semblait résonner d'encore plus profond.",
						"spanish": "Los restos del {random_boss} caído desaparecieron. Sin embargo, los lamentos del bosque no cesaron. Al contrario, parecían resonar desde lo más profundo.",
						"vietnamese": "Tàn tích của {random_boss} đã ngã xuống biến mất. Thế nhưng, tiếng gào thét của rừng vẫn không dừng lại. Thay vào đó, nó dường như vang vọng từ sâu thẳm hơn.",
						"thai": "ซากศพของ {random_boss} ที่ล้มลงได้หายไป แต่เสียงโหยหวนของป่าก็ยังไม่หยุดลง กลับกัน มันเหมือนจะดังก้องมาจากส่วนลึกยิ่งกว่าเดิม",
						"hindi": "गिरे हुए {random_boss} के अवशेष गायब हो गए। फिर भी जंगल की पीड़ा नहीं रुकी। बल्कि, यह और गहराई से गूँजती हुई लग रही थी।"
					},
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "일그러진 공간이 탐험대를 집어삼켰다.",
						"english": "The distorted space swallowed the expedition team.",
						"japanese": "歪んだ空間が探検隊を飲み込んだ。",
						"chinese": "扭曲的空间吞噬了探险队。",
						"french": "L'espace déformé engloutit l'équipe d'expédition.",
						"spanish": "El espacio distorsionado engulló al equipo de expedición.",
						"vietnamese": "Không gian méo mó nuốt chửng đội thám hiểm.",
						"thai": "มิติที่บิดเบี้ยวกลืนกินทีมสำรวจไปแล้ว",
						"hindi": "विकृत स्थान ने अभियान दल को निगल लिया।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "하찮은 존재들이여. 영원히 이 미궁에 갇혀라!",
						"english": "Insignificant beings. Be forever trapped in this labyrinth!",
						"japanese": "取るに足らぬ者たちよ。永遠にこの迷宮に囚われろ！",
						"chinese": "卑微的存在们。永远被困在这迷宫里吧！",
						"french": "Êtres insignifiants. Soyez à jamais piégés dans ce labyrinthe !",
						"spanish": "Seres insignificantes. ¡Quedad atrapados para siempre en este laberinto!",
						"vietnamese": "Hỡi những kẻ hèn mọn. Hãy bị giam cầm vĩnh viễn trong mê cung này!",
						"thai": "พวกสิ่งมีชีวิตต่ำต้อยเอ๋ย จงติดอยู่ในเขาวงกตนี้ชั่วนิรันดร์!",
						"hindi": "तुच्छ प्राणी। इस भूलभुलैया में हमेशा के लिए फँस जाओ!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "아직… 끝나지 않았어!",
						"english": "It's not... over yet!",
						"japanese": "まだ… 終わってない！",
						"chinese": "还没… 结束！",
						"french": "Ce n'est pas... encore fini !",
						"spanish": "¡Aún no... ha terminado!",
						"vietnamese": "Chưa... kết thúc đâu!",
						"thai": "ยัง... ไม่จบ!",
						"hindi": "अभी... खत्म नहीं हुआ!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"숲의 중심부에 다다르자 공간이 비명을 지르듯 일그러진다.",
			"뒤틀린 환영 속에서 잊혔던 기억의 파편들이 떠오르고…",
			"과거에 갇힌 자들의 절규가 희미하게 들려온다.",
			"진실은 틈새에 숨겨져 있었다. 혼돈 속으로 뛰어들 시간."
		],
		"english": [
			"Reaching the forest's heart, space itself screams and distorts.",
			"Within distorted visions, fragments of forgotten memories surface…",
			"The faint cries of those trapped in the past can be heard.",
			"Truth lay hidden in the cracks. Time to plunge into chaos."
		],
		"japanese": [
			"森の中心部に辿り着くと、空間が悲鳴を上げるように歪む。",
			"歪んだ幻影の中で、忘れ去られた記憶の断片が浮かび上がり…",
			"過去に囚われた者たちの叫びが、かすかに聞こえてくる。",
			"真実は隙間に隠されていた。混沌へと飛び込む時。"
		],
		"chinese": [
			"抵达森林深处时，空间仿佛在尖叫中扭曲。",
			"在扭曲的幻象中，被遗忘的记忆碎片浮现……",
			"被困于过去之人的哀嚎，隐约可闻。",
			"真理隐藏在裂缝中。是时候投身混沌了。"
		],
		"french": [
			"Au cœur de la forêt, l'espace se tord et hurle.",
			"Dans des visions déformées, des fragments de souvenirs oubliés refont surface…",
			"Les faibles cris de ceux piégés dans le passé se font entendre.",
			"La vérité se cachait dans les failles. Il est temps de plonger dans le chaos."
		],
		"spanish": [
			"Al llegar al corazón del bosque, el espacio se retuerce como si gritara.",
			"En visiones retorcidas, fragmentos de recuerdos olvidados emergen…",
			"Los débiles lamentos de quienes están atrapados en el pasado se escuchan a lo lejos.",
			"La verdad yacía oculta en las grietas. Es hora de sumergirse en el caos."
		],
		"vietnamese": [
			"Khi đến trung tâm khu rừng, không gian như thét lên và méo mó.",
			"Trong những ảo ảnh méo mó, những mảnh ký ức bị lãng quên trỗi dậy…",
			"Những tiếng kêu yếu ớt của những người bị mắc kẹt trong quá khứ vang vọng.",
			"Sự thật ẩn mình trong kẽ hở. Đã đến lúc lao vào hỗn loạn."
		],
		"thai": [
			"เมื่อถึงใจกลางป่า พื้นที่บิดเบี้ยวราวกับกรีดร้อง",
			"ในภาพหลอนที่บิดเบี้ยว ชิ้นส่วนของความทรงจำที่ถูกลืมกลับคืนมา...",
			"เสียงคร่ำครวญแผ่วเบาของผู้ที่ถูกขังอยู่ในอดีตแว่วมา",
			"ความจริงซ่อนอยู่ในรอยแยก ได้เวลาพุ่งเข้าสู่ความสับสนวุ่นวาย"
		],
		"hindi": [
			"जैसे ही जंगल के केंद्र में पहुँचे, स्थान चीखने लगा और विकृत हो गया।",
			"विकृत दर्शनों के भीतर, भूली हुई यादों के टुकड़े उभरते हैं…",
			"अतीत में फँसे लोगों की हल्की चीखें सुनाई देती हैं।",
			"सच्चाई दरारों में छिपी थी। अराजकता में कूदने का समय।"
		]
	}
} as const;
