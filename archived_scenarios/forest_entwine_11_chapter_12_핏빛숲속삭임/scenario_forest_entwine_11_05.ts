export const scenario_forest_entwine_11_05 = {
	"scenario_id": "forest_entwine_11_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "forest",
	"actors": {
		"bracken": {
			"id": "mon_48cf29be-dbc0-44b1-bbb3-ecda1d14742d",
			"name": {
				"korean": "브라켄",
				"english": "Bracken",
				"japanese": "ブラッケン",
				"chinese": "布莱肯",
				"french": "Bracken",
				"spanish": "Bracken",
				"vietnamese": "Bracken",
				"thai": "แบรกเคน",
				"hindi": "ब्रैकेन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5b494da6-ffd7-43d3-7171-7ac84bdfe400/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/4a7a1b62-d7a7-4a21-ffd5-fa9b5de82100/public"
		}
	},
	"boss": {
		"pool_id": "pool_VerdantParasite_Entwine_V1"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "숲의 가장 깊은 곳, 공기는 습하고 무거웠다.",
						"english": "In the deepest part of the forest, the air was humid and heavy.",
						"japanese": "森の最も深い場所、空気は湿っぽく重かった。",
						"chinese": "在森林最深处，空气潮湿而沉重。",
						"french": "Dans la partie la plus profonde de la forêt, l'air était humide et lourd.",
						"spanish": "En lo más profundo del bosque, el aire era húmedo y pesado.",
						"vietnamese": "Ở nơi sâu thẳm nhất của rừng, không khí ẩm ướt và nặng nề.",
						"thai": "ในส่วนที่ลึกที่สุดของป่า อากาศชื้นและหนักอึ้ง",
						"hindi": "वन के सबसे गहरे हिस्से में, हवा नम और भारी थी।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이 끝에 뭐가 있다는 거야?",
						"english": "What's at the end of this?",
						"japanese": "この先に何があるんだ？",
						"chinese": "这尽头有什么？",
						"french": "Qu'y a-t-il au bout de ça ?",
						"spanish": "¿Qué hay al final de esto?",
						"vietnamese": "Có gì ở cuối đường này?",
						"thai": "มีอะไรอยู่ตรงปลายทางนี้?",
						"hindi": "इसके अंत में क्या है?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						3
					],
					"speaker": "bracken"
				},
				{
					"speaker": "bracken",
					"type": "speech",
					"content": {
						"korean": "여기야. 모든 것의… 시작.",
						"english": "This is it. The beginning… of everything.",
						"japanese": "ここだ。全ての…始まりが。",
						"chinese": "就是这里。一切的…开始。",
						"french": "C'est ici. Le début… de tout.",
						"spanish": "Aquí es. El principio… de todo.",
						"vietnamese": "Đây rồi. Khởi đầu… của mọi thứ.",
						"thai": "ที่นี่แหละ จุดเริ่มต้น…ของทุกสิ่ง",
						"hindi": "यहीं है। हर चीज़ की… शुरुआत।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "시작?",
						"english": "Beginning?",
						"japanese": "始まりだと？",
						"chinese": "开始？",
						"french": "Début ?",
						"spanish": "¿Principio?",
						"vietnamese": "Khởi đầu?",
						"thai": "เริ่มต้น?",
						"hindi": "शुरुआत?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "bracken",
					"type": "speech",
					"content": {
						"korean": "그리고 끝. 너희도 곧 알게 될 거야.",
						"english": "And the end. You'll all know soon enough.",
						"japanese": "そして終わり。お前たちもじきに分かるだろう。",
						"chinese": "也是结局。你们很快就会明白的。",
						"french": "Et la fin. Vous le saurez bien assez tôt.",
						"spanish": "Y el final. Pronto lo sabréis.",
						"vietnamese": "Và kết thúc. Các ngươi sẽ sớm biết thôi.",
						"thai": "และจุดจบ พวกเจ้าจะรู้ในไม่ช้า",
						"hindi": "और अंत भी। तुम सब जल्द ही जान जाओगे।"
					},
					"emotion": "base"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "bracken",
					"spot": [
						2,
						2
					],
					"action": "enter",
					"duration_ms": 450
				},
				{
					"content": {
						"korean": "숲은… 살아있어. 너희가 생각하는 방식과는 다르게.",
						"english": "The forest… it's alive. Not in the way you think.",
						"japanese": "森は…生きている。お前たちが思うような形では違うが。",
						"chinese": "森林…是活的。但不是你们想象的那种方式。",
						"french": "La forêt… elle est vivante. Pas de la manière que vous imaginez.",
						"spanish": "El bosque… está vivo. No como pensáis.",
						"vietnamese": "Rừng… nó sống. Không theo cách các ngươi nghĩ.",
						"thai": "ป่า…มันมีชีวิต ไม่ใช่อย่างที่พวกเจ้าคิดหรอก",
						"hindi": "जंगल… ज़िंदा है। उस तरह से नहीं जैसे तुम सोचते हो।"
					},
					"type": "speech",
					"speaker": "bracken",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "무슨 뜻이야?",
						"english": "What do you mean?",
						"japanese": "どういう意味だ？",
						"chinese": "什么意思？",
						"french": "Que veux-tu dire ?",
						"spanish": "¿Qué quieres decir?",
						"vietnamese": "Ý ngươi là gì?",
						"thai": "หมายความว่ายังไง?",
						"hindi": "क्या मतलब है?"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "bracken",
					"content": {
						"korean": "모든 뿌리가 하나로 연결되어 있지. 마치 거대한 의식처럼.",
						"english": "All roots are connected as one. Like a massive consciousness.",
						"japanese": "全ての根が一つに繋がっている。まるで巨大な意識のように。",
						"chinese": "所有的根都连接在一起。就像一个巨大的意识。",
						"french": "Toutes les racines sont connectées, comme une seule. Telle une conscience gigantesque.",
						"spanish": "Todas las raíces están conectadas como una. Como una conciencia masiva.",
						"vietnamese": "Mọi rễ cây đều kết nối thành một. Giống như một ý thức khổng lồ.",
						"thai": "รากทั้งหมดเชื่อมโยงกันเป็นหนึ่งเดียว เหมือนจิตสำนึกขนาดใหญ่",
						"hindi": "सारी जड़ें एक साथ जुड़ी हुई हैं। एक विशाल चेतना की तरह।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "설마… 숲 전체가?",
						"english": "You mean… the entire forest?",
						"japanese": "まさか…森全体が？",
						"chinese": "难道…整个森林都是？",
						"french": "Tu veux dire… toute la forêt ?",
						"spanish": "¿Quieres decir… el bosque entero?",
						"vietnamese": "Chẳng lẽ… cả khu rừng?",
						"thai": "ไม่จริงน่า… ป่าทั้งหมดเลยเหรอ?",
						"hindi": "कहीं… पूरा जंगल ही?"
					},
					"speaker": "character_any"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"speaker": "bracken",
					"spot": [
						4,
						2
					],
					"type": "direction",
					"duration_ms": 480,
					"action": "enter"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이 소리… 들리니? 슬픈 노랫소리 같지?",
						"english": "This sound… do you hear it? Like a sad song?",
						"japanese": "この音…聞こえるか？悲しい歌のようじゃないか？",
						"chinese": "这声音…你听到了吗？像一首悲伤的歌？",
						"french": "Ce son… tu l'entends ? On dirait une chanson triste, n'est-ce pas ?",
						"spanish": "Este sonido… ¿lo oyes? ¿Como una canción triste?",
						"vietnamese": "Âm thanh này… ngươi nghe thấy không? Giống như một bài hát buồn?",
						"thai": "เสียงนี้… เจ้าได้ยินไหม? เหมือนเสียงเพลงที่โศกเศร้าเลยว่าไหม?",
						"hindi": "यह आवाज़… क्या तुम्हें सुनाई दे रही है? एक उदास गीत जैसी, है ना?"
					},
					"speaker": "bracken"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "누군가 울고 있는 것 같기도 하고…",
						"english": "Or perhaps someone is crying…",
						"japanese": "誰かが泣いているようにも聞こえる…",
						"chinese": "也像是有人在哭泣…",
						"french": "Ou quelqu'un est en train de pleurer…",
						"spanish": "O tal vez alguien está llorando…",
						"vietnamese": "Hoặc có lẽ ai đó đang khóc…",
						"thai": "หรือบางทีอาจมีใครกำลังร้องไห้…",
						"hindi": "या शायद कोई रो रहा है…"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "그건 유혹이야. 과거의 희생자들이 남긴… 절규.",
						"english": "It's a temptation. The screams... left by past victims.",
						"japanese": "それは誘惑だ。過去の犠牲者たちが残した…絶叫が。",
						"chinese": "那是诱惑。过去牺牲者们留下的……绝叫。",
						"french": "C'est une tentation. Les cris... laissés par les victimes passées.",
						"spanish": "Es una tentación. Los gritos... dejados por las víctimas del pasado.",
						"vietnamese": "Đó là sự cám dỗ. Tiếng thét... của những nạn nhân trong quá khứ.",
						"thai": "นั่นคือการยั่วยวน เสียงกรีดร้อง... ที่ทิ้งไว้โดยเหยื่อในอดีต",
						"hindi": "यह एक प्रलोभन है। अतीत के पीड़ितों द्वारा छोड़ी गई... चीखें।"
					},
					"type": "speech",
					"speaker": "bracken",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "희생자?",
						"english": "Victims?",
						"japanese": "犠牲者だと？",
						"chinese": "牺牲者？",
						"french": "Victimes ?",
						"spanish": "¿Víctimas?",
						"vietnamese": "Nạn nhân?",
						"thai": "เหยื่อ?",
						"hindi": "पीड़ित?"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 420,
					"type": "direction",
					"speaker": "bracken",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "돌아갈 수 없어. 숲은 너희를 놓아주지 않을 거야.",
						"english": "You can't go back. The forest won't let you go.",
						"japanese": "戻れない。森はお前たちを離さないだろう。",
						"chinese": "无法回头了。森林不会放过你们的。",
						"french": "Vous ne pouvez pas revenir. La forêt ne vous lâchera pas.",
						"spanish": "No puedes volver. El bosque no te soltará.",
						"vietnamese": "Không thể quay lại. Rừng sẽ không buông tha các ngươi đâu.",
						"thai": "กลับไปไม่ได้แล้ว ป่าจะไม่ปล่อยพวกเจ้าไป",
						"hindi": "तुम वापस नहीं जा सकते। जंगल तुम्हें जाने नहीं देगा।"
					},
					"type": "speech",
					"speaker": "bracken",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "브라켄, 대체 무슨 소리를 하는 거야?",
						"english": "Bracken, what are you talking about?",
						"japanese": "ブラッケン、一体何を言ってるんだ？",
						"chinese": "布拉肯，你到底在说什么？",
						"french": "Bracken, de quoi parles-tu ?",
						"spanish": "Bracken, ¿de qué estás hablando?",
						"vietnamese": "Bracken, ngươi đang nói cái gì vậy?",
						"thai": "แบร็คเคน เจ้ากำลังพูดถึงอะไร?",
						"hindi": "ब्रेकन, तुम क्या बात कर रहे हो?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "너희는 이미… 숲의 일부가 되고 있어.",
						"english": "You're already... becoming part of the forest.",
						"japanese": "お前たちはもう…森の一部になりつつある。",
						"chinese": "你们已经……正在成为森林的一部分。",
						"french": "Vous faites déjà... partie de la forêt.",
						"spanish": "Ya sois... parte del bosque.",
						"vietnamese": "Các ngươi đã... trở thành một phần của khu rừng.",
						"thai": "พวกเจ้ากำลัง... กลายเป็นส่วนหนึ่งของป่าแล้ว",
						"hindi": "तुम पहले से ही... जंगल का हिस्सा बन रहे हो।"
					},
					"speaker": "bracken"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "온몸의 신경이 곤두섰다. 거대한 존재의 숨결이 느껴졌다.",
						"english": "Every nerve in my body tingled. I felt the breath of a colossal presence.",
						"japanese": "全身の神経が研ぎ澄まされた。巨大な存在の息吹を感じた。",
						"chinese": "全身神经紧绷。感受到了巨大存在的呼吸。",
						"french": "Chaque nerf de mon corps picotait. Je sentais le souffle d'une présence colossale.",
						"spanish": "Todos mis nervios se tensaron. Sentí el aliento de una presencia colosal.",
						"vietnamese": "Mọi dây thần kinh trên cơ thể đều căng thẳng. Tôi cảm nhận được hơi thở của một sự hiện diện khổng lồ.",
						"thai": "ทุกเส้นประสาทในร่างกายตึงเครียด ข้าสัมผัสได้ถึงลมหายใจของสิ่งมีชีวิตมหึมา",
						"hindi": "मेरे शरीर की हर नस झनझना उठी। मुझे एक विशालकाय उपस्थिति का श्वास महसूस हुआ।"
					},
					"speaker": "narrator"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "크흐… 결국… 너희도… 숲의… 일부가 될 것이다…",
						"english": "Kuh… in the end… you too… will become… a part of the forest…",
						"japanese": "くっ…結局…お前たちも…森の…一部となるのだ…",
						"chinese": "咳…最终…你们也…将成为…森林的…一部分…",
						"french": "Kuh… au final… vous aussi… ferez… partie de la forêt…",
						"spanish": "Kuh… al final… vosotros también… os convertiréis… en parte del bosque…",
						"vietnamese": "Khụ… cuối cùng… các ngươi cũng… sẽ trở thành… một phần của rừng…",
						"thai": "คึ... สุดท้ายแล้ว... พวกเจ้าก็... จะกลายเป็น... ส่วนหนึ่งของป่า...",
						"hindi": "कुह… अंत में… तुम भी… जंगल का… हिस्सा बन जाओगे…"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "끝났어…",
						"english": "It's over…",
						"japanese": "終わった…",
						"chinese": "结束了…",
						"french": "C'est fini…",
						"spanish": "Se acabó…",
						"vietnamese": "Kết thúc rồi…",
						"thai": "จบแล้ว...",
						"hindi": "यह खत्म हो गया…"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "엔트와인의 몸을 감싸던 덩굴들이 서서히 시들어갔다. 그러나 숲은 여전히 침묵했다.",
						"english": "The vines that wrapped around Entwine's body slowly withered. But the forest remained silent.",
						"japanese": "エントワインの体を包んでいた蔓が、ゆっくりと枯れていった。しかし、森は依然として沈黙していた。",
						"chinese": "缠绕在恩特怀恩身上的藤蔓慢慢枯萎了。但森林依然寂静。",
						"french": "Les vignes qui entouraient le corps d'Entwine se sont lentement fanées. Mais la forêt est restée silencieuse.",
						"spanish": "Las enredaderas que envolvían el cuerpo de Entwine se marchitaron lentamente. Pero el bosque permaneció en silencio.",
						"vietnamese": "Những cây dây leo quấn quanh cơ thể Entwine dần héo rũ. Nhưng khu rừng vẫn chìm trong im lặng.",
						"thai": "เถาวัลย์ที่พันรอบร่างของเอนต์ไวน์ค่อยๆ เหี่ยวเฉาลง แต่ป่ายังคงเงียบงัน",
						"hindi": "एंटवाइन के शरीर को लपेटे हुए लताएं धीरे-धीरे मुरझा गईं। लेकिन जंगल अभी भी शांत था।"
					},
					"type": "speech"
				},
				{
					"type": "direction",
					"speaker": "bracken",
					"spot": [
						3,
						3
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"speaker": "bracken",
					"content": {
						"korean": "끝난 게 아니야. 숲은… 아직도 고통받고 있어.",
						"english": "It's not over. The forest… is still suffering.",
						"japanese": "終わっていない。森は…まだ苦しんでいる。",
						"chinese": "还没结束。森林…仍在受苦。",
						"french": "Ce n'est pas fini. La forêt… souffre toujours.",
						"spanish": "No ha terminado. El bosque… sigue sufriendo.",
						"vietnamese": "Chưa kết thúc đâu. Khu rừng… vẫn đang chịu đựng.",
						"thai": "ยังไม่จบ ป่า... ยังคงเจ็บปวดอยู่",
						"hindi": "यह खत्म नहीं हुआ है। जंगल… अभी भी पीड़ित है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "무슨 소리야?",
						"english": "What was that?",
						"japanese": "何の音だ？",
						"chinese": "什么声音？",
						"french": "Qu'est-ce que c'était ?",
						"spanish": "¿Qué fue eso?",
						"vietnamese": "Cái gì vậy?",
						"thai": "เสียงอะไรน่ะ?",
						"hindi": "क्या था वो?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "bracken",
					"type": "speech",
					"content": {
						"korean": "진정한 적은… 아직 남아있어.",
						"english": "The true enemy… still remains.",
						"japanese": "真の敵は… まだ残っている。",
						"chinese": "真正的敌人… 仍在。",
						"french": "Le véritable ennemi… est toujours là.",
						"spanish": "El verdadero enemigo… aún permanece.",
						"vietnamese": "Kẻ thù thật sự… vẫn còn đó.",
						"thai": "ศัตรูที่แท้จริง… ยังคงอยู่.",
						"hindi": "असली दुश्मन… अभी भी बाकी है।"
					}
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "숲의 깊은 곳에서, 또 다른 어둠이 꿈틀거리는 듯했다.",
						"english": "In the depths of the forest, another darkness seemed to stir.",
						"japanese": "森の奥深くで、別の闇が蠢いているようだった。",
						"chinese": "在森林深处，另一种黑暗似乎在蠢蠢欲动。",
						"french": "Dans les profondeurs de la forêt, une autre obscurité semblait s'agiter.",
						"spanish": "En las profundidades del bosque, otra oscuridad parecía agitarse.",
						"vietnamese": "Sâu thẳm trong rừng, một bóng tối khác dường như đang cựa quậy.",
						"thai": "ลึกเข้าไปในป่า, ความมืดอีกอย่างหนึ่งดูเหมือนจะกำลังเคลื่อนไหว.",
						"hindi": "जंगल की गहराइयों में, एक और अंधेरा मंडराता हुआ प्रतीत हुआ।"
					}
				}
			],
			"lose_dialogue": [
				{
					"speaker": "boss",
					"content": {
						"korean": "후후… 어리석은 인간들. 영원히 숲의 거름이 되어라.",
						"english": "Hmph… Foolish humans. Forever feed the forest.",
						"japanese": "フフ… 愚かな人間どもめ。永遠に森の肥やしとなれ。",
						"chinese": "哼哼… 愚蠢的人类。永远成为森林的养料吧。",
						"french": "Hmph… Stupides humains. Devenez à jamais l'engrais de la forêt.",
						"spanish": "Jeje… estúpidos humanos. Convertíos en abono para el bosque por toda la eternidad.",
						"vietnamese": "Hừm… Loài người ngu xuẩn. Hãy vĩnh viễn trở thành phân bón cho rừng.",
						"thai": "ฮึ่ม… มนุษย์โง่เขลา. จงเป็นปุ๋ยแก่ป่าตลอดไป.",
						"hindi": "हँ… मूर्ख इंसानो। हमेशा के लिए जंगल की खाद बन जाओ।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "크윽… 아직… 끝나지 않았어!",
						"english": "Ugh… it's not… over yet!",
						"japanese": "くっ… まだ… 終わっていない！",
						"chinese": "呃… 还没… 结束！",
						"french": "Urgh… Ce n'est pas… encore fini !",
						"spanish": "Ugh… ¡Todavía no… ha terminado!",
						"vietnamese": "Khụ… Vẫn… chưa xong đâu!",
						"thai": "อึก… ยัง… ไม่จบหรอก!",
						"hindi": "उफ़… अभी… ख़त्म नहीं हुआ!"
					},
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "너희의 절규도… 곧 숲의 일부가 될 것이다.",
						"english": "Your screams… will soon become part of the forest.",
						"japanese": "お前たちの絶叫も… すぐに森の一部となるだろう。",
						"chinese": "你们的哀嚎… 很快也会成为森林的一部分。",
						"french": "Vos hurlements… feront bientôt partie de la forêt.",
						"spanish": "Vuestros lamentos… pronto formarán parte del bosque.",
						"vietnamese": "Tiếng gào thét của các ngươi… cũng sẽ sớm trở thành một phần của rừng.",
						"thai": "เสียงกรีดร้องของพวกเจ้า… ก็จะกลายเป็นส่วนหนึ่งของป่าในไม่ช้า.",
						"hindi": "तुम्हारी चीखें भी… जल्द ही जंगल का हिस्सा बन जाएंगी।"
					},
					"speaker": "boss"
				},
				{
					"content": {
						"korean": "세계수의 뿌리가 탐험대를 집어삼켰다. 절망만이 남았다.",
						"english": "The World Tree's roots devoured the expedition team. Only despair remained.",
						"japanese": "世界樹の根が探検隊を飲み込んだ。残されたのは絶望だけだった。",
						"chinese": "世界树的根吞噬了探险队。只剩下绝望。",
						"french": "Les racines de l'Arbre-Monde ont dévoré l'équipe d'expédition. Seul le désespoir demeurait.",
						"spanish": "Las raíces del Árbol del Mundo devoraron al equipo de expedición. Solo quedó la desesperación.",
						"vietnamese": "Rễ của Cây Thế Giới đã nuốt chửng đoàn thám hiểm. Chỉ còn lại sự tuyệt vọng.",
						"thai": "รากของต้นไม้โลกกลืนกินคณะสำรวจ. เหลือเพียงความสิ้นหวัง.",
						"hindi": "विश्व वृक्ष की जड़ों ने अभियान दल को निगल लिया। केवल निराशा बची।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"speaker": "bracken",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "저것이… 엔트와인이야. 숲의 모든 생명력을 흡수하는 핵.",
						"english": "That is... Entwine. The core that absorbs all life force from the forest.",
						"japanese": "あれが…エントワインだ。森のすべての生命力を吸収する核。",
						"chinese": "那就是……缠藤。吸收森林所有生命力的核心。",
						"french": "C'est... l'Entwine. Le noyau qui absorbe toute la force vitale de la forêt.",
						"spanish": "Eso es... Entwine. El núcleo que absorbe toda la fuerza vital del bosque.",
						"vietnamese": "Đó là... Entwine. Cái lõi hấp thụ mọi sinh lực của khu rừng.",
						"thai": "นั่นคือ... เอนทไวน์ แกนกลางที่ดูดซับพลังชีวิตทั้งหมดจากป่า",
						"hindi": "वह... एंटवाइन है। वह मूल जो जंगल की सभी जीवन शक्ति को अवशोषित करता है।"
					},
					"speaker": "bracken",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "거대한 식물?",
						"english": "A colossal plant?",
						"japanese": "巨大な植物だと？",
						"chinese": "巨大的植物？",
						"french": "Une plante colossale ?",
						"spanish": "¿Una planta colosal?",
						"vietnamese": "Một cái cây khổng lồ?",
						"thai": "พืชขนาดยักษ์?",
						"hindi": "एक विशाल पौधा?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…오랜만에 새로운 손님들이군.",
						"english": "...New guests, after a long time.",
						"japanese": "…久しぶりに、新しい客人のようだな。",
						"chinese": "……好久不见的新客人啊。",
						"french": "...De nouveaux invités, après si longtemps.",
						"spanish": "...Nuevos invitados, después de tanto tiempo.",
						"vietnamese": "...Những vị khách mới, sau một thời gian dài.",
						"thai": "...แขกใหม่ หลังจากที่ไม่ได้เจอมานาน",
						"hindi": "...काफी समय बाद, नए मेहमान।"
					},
					"speaker": "boss",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "네가… 엔트와인?",
						"english": "You're... Entwine?",
						"japanese": "お前が…エントワインなのか？",
						"chinese": "你就是……缠藤？",
						"french": "Tu es... Entwine ?",
						"spanish": "¿Tú eres... Entwine?",
						"vietnamese": "Ngươi là... Entwine?",
						"thai": "เจ้าคือ... เอนทไวน์?",
						"hindi": "तुम... एंटवाइन हो?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "그래. 그리고 이 숲은… 나 자신이다. 모든 뿌리가 나의 신경이자 피.",
						"english": "Yes. And this forest… is myself. Every root, my nerve and blood.",
						"japanese": "そうだ。そしてこの森は…私自身だ。すべての根が、私の神経であり血だ。",
						"chinese": "没错。这片森林…就是我。每一根树根都是我的神经和血液。",
						"french": "Oui. Et cette forêt… c'est moi. Chaque racine, mon nerf et mon sang.",
						"spanish": "Sí. Y este bosque… soy yo. Cada raíz, mi nervio y mi sangre.",
						"vietnamese": "Đúng vậy. Và khu rừng này… chính là bản thân ta. Mỗi rễ cây là dây thần kinh và máu của ta.",
						"thai": "ใช่แล้ว และป่านี้... คือตัวฉันเอง ทุกรากคือเส้นประสาทและเลือดของฉัน",
						"hindi": "हाँ। और यह जंगल… मैं स्वयं हूँ। हर जड़, मेरी नस और रक्त।"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이 노랫소리가 들리지? 과거에 이곳에 갇힌 자들의 절규다. 저것은 숙주 아마존 전사의 뒤틀린 목소리다.",
						"english": "Do you hear this song? It's the scream of those trapped here in the past. That's the twisted voice of the host Amazon warrior.",
						"japanese": "この歌声が聞こえるか？それは過去にここに閉じ込められた者たちの絶叫だ。あれは宿主であるアマゾン戦士の歪んだ声だ。",
						"chinese": "你听到这歌声了吗？那是过去被困在这里的人们的尖叫。那是被寄宿的亚马逊战士扭曲的声音。",
						"french": "Entendez-vous ce chant ? C'est le cri de ceux qui ont été piégés ici par le passé. C'est la voix tordue de la guerrière amazone hôte.",
						"spanish": "¿Oyes esta canción? Es el grito de quienes quedaron atrapados aquí en el pasado. Esa es la voz distorsionada de la guerrera amazona huésped.",
						"vietnamese": "Ngươi có nghe thấy bài hát này không? Đó là tiếng kêu thét của những kẻ đã bị mắc kẹt ở đây trong quá khứ. Đó là giọng nói méo mó của chiến binh Amazon chủ nhà.",
						"thai": "ได้ยินเสียงเพลงนี้ไหม? มันคือเสียงกรีดร้องของเหล่าผู้ที่ถูกขังที่นี่ในอดีต นั่นคือเสียงที่บิดเบี้ยวของนักรบอเมซอนที่เป็นร่างพาหะ",
						"hindi": "क्या तुम्हें यह गाना सुनाई दे रहा है? यह उन लोगों की चीख है जो अतीत में यहां फंसे थे। वह मेजबान अमेज़ॅन योद्धा की मुड़ी हुई आवाज है।"
					},
					"type": "speech",
					"speaker": "bracken"
				},
				{
					"speaker": "boss",
					"content": {
						"korean": "아아… 이제 너희도… 영원히 함께할 시간이야. 고통은 잠시…",
						"english": "Ah… now it’s your time too… to be together forever. The pain is brief…",
						"japanese": "ああ…もうお前たちも…永遠に共にする時だ。苦痛は一瞬…",
						"chinese": "啊…现在轮到你们了…永远在一起。痛苦是短暂的…",
						"french": "Ah… maintenant c'est aussi votre tour… de rester ensemble pour toujours. La douleur est brève…",
						"spanish": "Ah… ahora es vuestro turno también… de estar juntos para siempre. El dolor es breve…",
						"vietnamese": "À… giờ cũng đến lượt các ngươi… ở bên nhau mãi mãi. Nỗi đau chỉ là thoáng qua…",
						"thai": "อา... บัดนี้ถึงเวลาของพวกเจ้าแล้ว... ที่จะอยู่ร่วมกันตลอดไป ความเจ็บปวดนั้นแสนสั้น...",
						"hindi": "आह… अब तुम्हारा भी समय है… हमेशा के लिए साथ रहने का। दर्द क्षणिक है…"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "우리 마을을 망친 게… 너였어!",
						"english": "You… you were the one who ruined our village!",
						"japanese": "お前が…私たちの村を台無しにしたのか！",
						"chinese": "你…就是你毁了我们的村庄！",
						"french": "Toi… c'est toi qui as ruiné notre village !",
						"spanish": "¡Tú… fuiste tú quien arruinó nuestra aldea!",
						"vietnamese": "Ngươi… chính ngươi đã phá hoại làng của chúng ta!",
						"thai": "แก... แกนั่นแหละที่ทำลายหมู่บ้านของเรา!",
						"hindi": "तुम… तुमने ही हमारे गाँव को बर्बाद किया!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "후후… 환영한다. 나의 새로운 일부가 될 존재들이여.",
						"english": "Heh heh… welcome. Those who will become a new part of me.",
						"japanese": "ふふ…ようこそ。私の新たな一部となる者たちよ。",
						"chinese": "呵呵…欢迎。将成为我新一部分的你们。",
						"french": "Hé hé… bienvenue. Ceux qui deviendront une nouvelle partie de moi.",
						"spanish": "Je je… bienvenidos. Aquellos que se convertirán en una nueva parte de mí.",
						"vietnamese": "Hô hô… chào mừng. Những kẻ sẽ trở thành một phần mới của ta.",
						"thai": "ฮิฮิ... ยินดีต้อนรับ ผู้ที่จะมาเป็นส่วนหนึ่งใหม่ของฉัน",
						"hindi": "हे हे… स्वागत है। वे जो मेरा एक नया हिस्सा बनेंगे।"
					}
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "숲의 심장이 절규했다. 탈출구는 없었다.",
						"english": "The heart of the forest screamed. There was no escape.",
						"japanese": "森の心臓が絶叫した。脱出路はなかった。",
						"chinese": "森林之心尖叫起来。无处可逃。",
						"french": "Le cœur de la forêt a crié. Il n'y avait pas d'échappatoire.",
						"spanish": "El corazón del bosque gritó. No había escape.",
						"vietnamese": "Trái tim của rừng thét lên. Không có lối thoát.",
						"thai": "หัวใจของป่ากรีดร้อง ไม่มีทางหนี",
						"hindi": "जंगल का दिल चीख उठा। कोई भागने का रास्ता नहीं था।"
					},
					"type": "speech"
				}
			]
		}
	],
	"epilogue": {
		"korean": [
			"숲의 심장이 멎었다. 그러나 고통은 사라지지 않았다.",
			"브라켄은 사라졌다. 그의 눈빛은 여전히 미스터리였다.",
			"숲은 침묵했다. 이전과는 다른, 섬뜩한 침묵.",
			"우리는 승리한 것일까? 아니면… 숲의 일부가 된 것일까?",
			"숲은 여전히… 절규하고 있었다."
		],
		"english": [
			"The forest's heart stopped. Yet, the pain lingered.",
			"Bracken vanished. His gaze remained a mystery.",
			"The forest fell silent. A chilling silence, unlike before.",
			"Did we win? Or... did we become part of the forest?",
			"The forest was still... screaming."
		],
		"japanese": [
			"森の心臓は止まった。しかし、苦痛は消えなかった。",
			"ブラッケンは姿を消した。彼の眼差しは依然として謎だった。",
			"森は沈黙した。以前とは異なる、不気味な沈黙。",
			"我々は勝利したのか？それとも…森の一部となったのか？",
			"森は依然として…絶叫していた。"
		],
		"chinese": [
			"森林之心停止了跳动。然而，痛苦并未消散。",
			"布拉肯消失了。他的眼神依然是个谜。",
			"森林陷入沉寂。与以往不同，是一种令人毛骨悚然的寂静。",
			"我们胜利了吗？抑或是……成为了森林的一部分？",
			"森林仍在……尖叫着。"
		],
		"french": [
			"Le cœur de la forêt s'arrêta. Pourtant, la douleur persistait.",
			"Bracken disparut. Son regard resta un mystère.",
			"La forêt se tut. Un silence effrayant, différent d'avant.",
			"Avons-nous gagné ? Ou... sommes-nous devenus une partie de la forêt ?",
			"La forêt était toujours... en train de crier."
		],
		"spanish": [
			"El corazón del bosque se detuvo. Sin embargo, el dolor persistió.",
			"Bracken desapareció. Su mirada seguía siendo un misterio.",
			"El bosque se silenció. Un silencio espeluznante, diferente al anterior.",
			"¿Ganamos? O... ¿nos convertimos en parte del bosque?",
			"El bosque seguía... gritando."
		],
		"vietnamese": [
			"Trái tim của rừng ngừng đập. Tuy nhiên, nỗi đau vẫn còn đó.",
			"Bracken biến mất. Ánh mắt của anh ta vẫn còn là một bí ẩn.",
			"Rừng im lặng. Một sự im lặng rợn người, khác hẳn trước đây.",
			"Chúng ta đã thắng ư? Hay... chúng ta đã trở thành một phần của khu rừng?",
			"Rừng vẫn còn... gào thét."
		],
		"thai": [
			"หัวใจของป่าหยุดลง แต่ความเจ็บปวดไม่ได้หายไป",
			"แบร็กเคนหายไปแล้ว แววตาของเขายังคงเป็นปริศนา",
			"ป่าเงียบสงบลง ความเงียบที่น่าขนลุก ไม่เหมือนเมื่อก่อน",
			"เราชนะแล้วหรือ หรือว่า... เรากลายเป็นส่วนหนึ่งของป่าไปแล้ว?",
			"ป่ายังคง... กรีดร้องอยู่"
		],
		"hindi": [
			"वन का हृदय रुक गया। फिर भी, दर्द बना रहा।",
			"ब्रैकन गायब हो गया। उसकी नज़र अभी भी एक रहस्य थी।",
			"वन खामोश हो गया। पहले से अलग, एक भयानक खामोशी।",
			"क्या हम जीते? या... क्या हम वन का हिस्सा बन गए?",
			"वन अभी भी... चीख रहा था।"
		]
	},
	"prologue": {
		"korean": [
			"숲의 심장부. 모든 것이 시작되고 끝나는 곳.",
			"브라켄은 침묵했다. 그 침묵이 더 큰 공포를 예고했다.",
			"숨 쉬는 모든 것이 얽혀 있는 거대한 생명체.",
			"진실은 숲의 절규와 함께 드러났다. 우리는 이미 갇혔다."
		],
		"english": [
			"The heart of the forest. Where everything begins and ends.",
			"Bracken fell silent. A silence that foretold greater horror.",
			"A colossal entity, intertwining every breathing thing.",
			"The truth emerged with the forest's scream. We are already trapped."
		],
		"japanese": [
			"森の心臓部。全てが始まり、終わる場所。",
			"ブラッケンは沈黙した。その沈黙は、さらなる恐怖を予兆していた。",
			"呼吸する全てが絡み合う、巨大な生命体。",
			"真実は森の絶叫と共に現れた。我々は既に囚われている。"
		],
		"chinese": [
			"森林之心。万物肇始与终结之地。",
			"布拉肯沉默了。那寂静预示着更大的恐惧。",
			"一个庞大的生命体，缠绕着每一个呼吸着的生命。",
			"真相伴随着森林的尖叫声浮现。我们已被困住。"
		],
		"french": [
			"Le cœur de la forêt. Là où tout commence et finit.",
			"Bracken se tut. Un silence qui annonçait une horreur plus grande.",
			"Une entité colossale, mêlant chaque chose vivante.",
			"La vérité éclata avec le cri de la forêt. Nous sommes déjà piégés."
		],
		"spanish": [
			"El corazón del bosque. Donde todo empieza y termina.",
			"Bracken guardó silencio. Un silencio que presagiaba un horror mayor.",
			"Una entidad colosal, entrelazando cada cosa que respira.",
			"La verdad emergió con el grito del bosque. Ya estamos atrapados."
		],
		"vietnamese": [
			"Trái tim của rừng. Nơi vạn vật bắt đầu và kết thúc.",
			"Bracken im lặng. Sự im lặng đó báo trước một nỗi kinh hoàng lớn hơn.",
			"Một thực thể khổng lồ, đan xen mọi sinh linh đang thở.",
			"Sự thật lộ rõ cùng tiếng thét của rừng. Chúng ta đã bị mắc kẹt."
		],
		"thai": [
			"ใจกลางป่า ที่ที่ทุกสิ่งเริ่มต้นและจบลง",
			"แบร็กเคนเงียบลง ความเงียบนั้นบ่งบอกถึงความสยองขวัญที่ยิ่งใหญ่กว่า",
			"สิ่งมีชีวิตขนาดยักษ์ ที่ถักทอทุกสิ่งที่มีชีวิต",
			"ความจริงปรากฏพร้อมกับเสียงกรีดร้องของป่า เราติดกับแล้ว"
		],
		"hindi": [
			"वन का हृदय। जहाँ सब कुछ शुरू होता है और समाप्त होता है।",
			"ब्रैकन चुप हो गया। एक ऐसी चुप्पी जो बड़े आतंक की भविष्यवाणी कर रही थी।",
			"एक विशाल इकाई, हर साँस लेने वाली चीज़ को आपस में जोड़ रही है।",
			"सत्य वन की चीख के साथ सामने आया। हम पहले से ही फँस चुके हैं।"
		]
	}
} as const;
