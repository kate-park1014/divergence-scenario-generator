export const scenario_forest_aureliabloom_36_01 = {
	"scenario_id": "forest_aureliabloom_36_01",
	"order": 1,
	"act": "intro",
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
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "오랜 시간 잠들어 있던 숲의 입구. 신비로운 기운이 탐험대를 감쌌다.",
						"english": "The entrance to the long-slumbering forest. A mysterious aura enveloped the expedition.",
						"japanese": "長く眠っていた森の入り口。神秘的な気配が探検隊を包み込んだ。",
						"chinese": "沉睡已久的森林入口。神秘的气息笼罩着探险队。",
						"french": "L'entrée de la forêt endormie depuis longtemps. Une aura mystérieuse enveloppait l'expédition.",
						"spanish": "La entrada al bosque dormido desde hace mucho. Un aura misteriosa envolvió a la expedición.",
						"vietnamese": "Lối vào khu rừng đã ngủ yên từ lâu. Một luồng khí bí ẩn bao trùm đoàn thám hiểm.",
						"thai": "ทางเข้าป่าที่หลับใหลมานาน ออร่าลึกลับห่อหุ้มคณะสำรวจ",
						"hindi": "चिरनिद्रा में लीन वन का प्रवेश द्वार। रहस्यमयी आभा ने अभियान दल को घेरा।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…여기가 '잊힌 기억의 숲'?",
						"english": "...Is this the 'Forest of Forgotten Memories'?",
						"japanese": "…ここが「忘れられた記憶の森」？",
						"chinese": "……这里是“遗忘记忆之森”？",
						"french": "...C'est la 'Forêt des Souvenirs Oubliés'?",
						"spanish": "...¿Es este el 'Bosque de los Recuerdos Olvidados'?",
						"vietnamese": "...Đây là 'Khu rừng ký ức bị lãng quên' ư?",
						"thai": "...ที่นี่คือ 'ป่าแห่งความทรงจำที่ถูกลืม' งั้นเหรอ?",
						"hindi": "...क्या यह 'विस्मृत स्मृतियों का वन' है?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "유물은 대체 어디에 있다는 거야?",
						"english": "Where are these relics supposed to be?",
						"japanese": "遺物は一体どこにあるんだ？",
						"chinese": "遗物到底在哪里？",
						"french": "Où sont censées être ces reliques ?",
						"spanish": "¿Dónde se supone que están las reliquias?",
						"vietnamese": "Rốt cuộc thì di vật ở đâu?",
						"thai": "แล้วสิ่งประดิษฐ์มันอยู่ที่ไหนกันแน่?",
						"hindi": "अवशेष आखिर कहाँ हैं?"
					},
					"speaker": "character_1",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "fern",
					"action": "enter",
					"spot": [
						5,
						2
					]
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "오지 말았어야 했어. 여기는… 슬픈 곳.",
						"english": "We shouldn't have come. This place is... sad.",
						"japanese": "来るべきではなかった。ここは…悲しい場所だ。",
						"chinese": "不该来的。这里是……悲伤之地。",
						"french": "Nous n'aurions pas dû venir. Cet endroit est... triste.",
						"spanish": "No deberíamos haber venido. Este lugar es... triste.",
						"vietnamese": "Lẽ ra chúng ta không nên đến đây. Nơi này... thật buồn.",
						"thai": "ไม่น่ามาเลย ที่นี่มัน...เป็นสถานที่ที่เศร้า",
						"hindi": "हमें नहीं आना चाहिए था। यह जगह... उदास है।"
					},
					"speaker": "fern"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "누구지?",
						"english": "Who's there?",
						"japanese": "誰だ？",
						"chinese": "谁？",
						"french": "Qui est là ?",
						"spanish": "¿Quién es?",
						"vietnamese": "Ai đó?",
						"thai": "ใครน่ะ?",
						"hindi": "कौन है?"
					}
				},
				{
					"type": "speech",
					"speaker": "fern",
					"content": {
						"korean": "페른. 숲의 정령… 너희가 찾는 건 이곳에 없어.",
						"english": "Fern. Spirit of the forest... What you seek isn't here.",
						"japanese": "フェルン。森の精霊…お前たちが探しているものはここにはない。",
						"chinese": "费恩。森林的精灵……你们要找的东西不在这里。",
						"french": "Fern. Esprit de la forêt... Ce que vous cherchez n'est pas ici.",
						"spanish": "Fern. Espíritu del bosque... Lo que buscáis no está aquí.",
						"vietnamese": "Fern. Tinh linh rừng... Thứ các ngươi tìm không có ở đây.",
						"thai": "เฟิร์น วิญญาณแห่งป่า... สิ่งที่พวกเจ้าตามหาไม่ได้อยู่ที่นี่",
						"hindi": "फ़र्न। वन की आत्मा... जो तुम ढूँढ रहे हो वह यहाँ नहीं है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "희미하게, 어딘가에서 슬픈 자장가 소리가 들려오는 듯했다.",
						"english": "Faintly, a sad lullaby seemed to drift from somewhere.",
						"japanese": "かすかに、どこかから悲しい子守唄が聞こえてくるようだった。",
						"chinese": "隐约间，仿佛有悲伤的摇篮曲从某处传来。",
						"french": "Faiblement, une triste berceuse semblait provenir de quelque part.",
						"spanish": "Débilmente, una triste nana parecía sonar desde algún lugar.",
						"vietnamese": "Phảng phất đâu đó vọng lại tiếng ru buồn.",
						"thai": "แผ่วเบา ราวกับมีเสียงเพลงกล่อมเด็กเศร้าๆ ดังมาจากที่ใดที่หนึ่ง",
						"hindi": "कहीं से एक उदास लोरी की आवाज़ धीमी सी सुनाई दे रही थी।"
					},
					"speaker": "narrator",
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "fern",
					"spot": [
						4,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "fern",
					"content": {
						"korean": "점점 깊이 들어가는군. 숲이… 고통스러워하고 있어.",
						"english": "We're going deeper. The forest... it's in pain.",
						"japanese": "どんどん奥へ入っていく。森が…苦しんでいる。",
						"chinese": "越来越深入了。森林…它在痛苦。",
						"french": "On s'enfonce de plus en plus. La forêt... elle souffre.",
						"spanish": "Nos adentramos más y más. El bosque... está sufriendo.",
						"vietnamese": "Càng ngày càng sâu. Rừng... đang đau đớn.",
						"thai": "เรากำลังเข้าไปลึกขึ้นเรื่อยๆ ป่า...กำลังเจ็บปวด",
						"hindi": "हम और गहरे जा रहे हैं। जंगल... दर्द में है।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "고통?",
						"english": "Pain?",
						"japanese": "苦痛？",
						"chinese": "痛苦？",
						"french": "La douleur ?",
						"spanish": "¿Dolor?",
						"vietnamese": "Đau đớn?",
						"thai": "เจ็บปวด?",
						"hindi": "दर्द?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "무슨 소리야? 그냥 오래된 숲이잖아.",
						"english": "What are you talking about? It's just an old forest.",
						"japanese": "何を言ってるんだ？ただの古い森じゃないか。",
						"chinese": "你在说什么？这只是个古老的森林。",
						"french": "De quoi parles-tu ? C'est juste une vieille forêt.",
						"spanish": "¿De qué hablas? Es solo un bosque viejo.",
						"vietnamese": "Anh đang nói gì vậy? Đây chỉ là một khu rừng già thôi mà.",
						"thai": "คุณกำลังพูดถึงอะไร? มันก็แค่ป่าเก่าๆ นี่นา",
						"hindi": "तुम क्या कह रहे हो? यह बस एक पुराना जंगल है।"
					},
					"speaker": "character_2",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "아니. 저 소리 들려? 땅이 울고 있어.",
						"english": "No. Hear that sound? The ground is weeping.",
						"japanese": "違う。あの音聞こえる？大地が泣いている。",
						"chinese": "不。你听到那声音了吗？大地在哭泣。",
						"french": "Non. Tu entends ce son ? La terre pleure.",
						"spanish": "No. ¿Oyes ese sonido? La tierra está llorando.",
						"vietnamese": "Không. Anh có nghe thấy tiếng đó không? Mặt đất đang khóc.",
						"thai": "ไม่สิ ได้ยินเสียงนั้นไหม? พื้นดินกำลังร่ำไห้",
						"hindi": "नहीं। वो आवाज़ सुनी? ज़मीन रो रही है।"
					},
					"speaker": "fern",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "멀리서 희미하지만, 슬픈 울부짖음과 함께 땅이 미세하게 떨리는 것이 느껴졌다.",
						"english": "Faintly from afar, a sad wailing, and with it, a subtle tremor of the ground was felt.",
						"japanese": "遠くからかすかに、悲しい叫び声と共に、大地が微かに震えるのを感じた。",
						"chinese": "远处传来微弱但悲伤的哭嚎声，伴随着大地的轻微颤抖。",
						"french": "Au loin, faiblement, un triste gémissement, et avec lui, un subtil tremblement du sol fut ressenti.",
						"spanish": "A lo lejos, débilmente, un triste lamento, y con él, un sutil temblor del suelo se sintió.",
						"vietnamese": "Từ xa, mơ hồ vọng lại tiếng than khóc buồn bã, kèm theo đó là sự rung chuyển nhẹ của mặt đất.",
						"thai": "จากที่ไกลๆ ได้ยินเสียงโหยหวนอันเศร้าโศกแผ่วเบา และสัมผัสได้ถึงการสั่นสะเทือนเล็กน้อยของพื้นดิน",
						"hindi": "दूर से, एक धीमी लेकिन दुख भरी चीख के साथ, ज़मीन में हल्का कंपन महसूस हुआ।"
					},
					"speaker": "narrator",
					"emotion": "base"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "fern"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "fern",
					"content": {
						"korean": "저 유물… 잠든 힘을 깨울 거야. 엄청난 대가를 치러야 해.",
						"english": "That artifact... it will awaken a dormant power. A heavy price must be paid.",
						"japanese": "あの遺物…眠れる力を呼び覚ますだろう。とてつもない代償を払わなければならない。",
						"chinese": "那个遗物…会唤醒沉睡的力量。必须付出巨大的代价。",
						"french": "Cet artefact... il réveillera un pouvoir dormant. Un lourd tribut devra être payé.",
						"spanish": "Ese artefacto... despertará un poder latente. Un alto precio deberá pagarse.",
						"vietnamese": "Di vật đó... sẽ đánh thức một sức mạnh tiềm ẩn. Phải trả giá rất đắt.",
						"thai": "สิ่งประดิษฐ์นั้น...จะปลุกพลังที่หลับใหลขึ้นมา จะต้องจ่ายในราคาที่แสนแพง",
						"hindi": "वह कलाकृति... सोई हुई शक्ति को जगाएगी। एक बड़ी कीमत चुकानी होगी।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "대가? 무슨 대가?",
						"english": "Price? What price?",
						"japanese": "代償？何の代償？",
						"chinese": "代价？什么代价？",
						"french": "Prix ? Quel prix ?",
						"spanish": "¿Precio? ¿Qué precio?",
						"vietnamese": "Giá? Giá gì?",
						"thai": "ราคา? ราคาอะไร?",
						"hindi": "कीमत? कैसी कीमत?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "탐험대는 오래된 돌기둥에서 흐릿한 고대 문양을 발견했다.",
						"english": "The expedition team discovered faint ancient patterns on an old stone pillar.",
						"japanese": "探検隊は古い石柱に描かれたかすかな古代の模様を発見した。",
						"chinese": "探险队在一根古老的石柱上发现了一些模糊的古代图案。",
						"french": "L'équipe d'expédition a découvert de faibles motifs anciens sur un vieux pilier de pierre.",
						"spanish": "La expedición descubrió tenues patrones antiguos en un viejo pilar de piedra.",
						"vietnamese": "Đoàn thám hiểm đã tìm thấy những hoa văn cổ xưa mờ nhạt trên một cây cột đá cũ.",
						"thai": "ทีมสำรวจพบลวดลายโบราณจางๆ บนเสาหินเก่าแก่",
						"hindi": "अभियान दल ने एक पुराने पत्थर के खंभे पर धुंधले प्राचीन पैटर्न खोजे।"
					}
				},
				{
					"content": {
						"korean": "이게 유물에 대한 단서인가?",
						"english": "Is this a clue about the artifact?",
						"japanese": "これが遺物に関する手がかりなのか？",
						"chinese": "这是关于遗物的线索吗？",
						"french": "Est-ce un indice sur l'artefact ?",
						"spanish": "¿Es esto una pista sobre el artefacto?",
						"vietnamese": "Đây có phải là manh mối về di vật không?",
						"thai": "นี่คือเบาะแสเกี่ยวกับสิ่งประดิษฐ์หรือเปล่า?",
						"hindi": "क्या यह कलाकृति के बारे में कोई सुराग है?"
					},
					"speaker": "character_3",
					"type": "speech",
					"emotion": "happy"
				},
				{
					"type": "speech",
					"speaker": "fern",
					"content": {
						"korean": "그건… 시작에 불과해. 숲은… 너희의 탐욕을 시험할 거야.",
						"english": "That's... just the beginning. The forest... will test your greed.",
						"japanese": "それは…始まりに過ぎない。森は…お前たちの貪欲を試すだろう。",
						"chinese": "那…只是开始。森林…会考验你们的贪婪。",
						"french": "Ce n'est... que le début. La forêt... mettra votre cupidité à l'épreuve.",
						"spanish": "Eso es... solo el principio. El bosque... pondrá a prueba vuestra codicia.",
						"vietnamese": "Đó... chỉ là khởi đầu thôi. Rừng... sẽ thử thách lòng tham của các ngươi.",
						"thai": "นั่น... แค่เริ่มต้นเท่านั้น ป่า... จะทดสอบความโลภของพวกเจ้า",
						"hindi": "वह... बस शुरुआत है। जंगल... तुम्हारे लालच की परीक्षा लेगा।"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						2,
						2
					],
					"action": "enter",
					"speaker": "fern",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이 이상은… 돌아갈 수 없어. 숲의 심장이 저 너머에 있어.",
						"english": "Beyond this... there's no turning back. The forest's heart lies yonder.",
						"japanese": "これ以上は…引き返せない。森の心臓はあの先にある。",
						"chinese": "再往前…就无法回头了。森林之心就在那边。",
						"french": "Au-delà... il n'y a pas de retour. Le cœur de la forêt est au-delà.",
						"spanish": "Más allá de esto... no hay vuelta atrás. El corazón del bosque está más allá.",
						"vietnamese": "Hơn thế nữa... không thể quay lại được. Trái tim của rừng nằm ở phía đó.",
						"thai": "เกินกว่านี้... ไม่มีทางหวนกลับ หัวใจของป่าอยู่ที่นั่น",
						"hindi": "इससे आगे... वापसी नहीं। जंगल का दिल उस पार है।"
					},
					"speaker": "fern",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "후회 없어. 우리는 반드시 유물을 찾을 거야.",
						"english": "No regrets. We'll find the artifact, no matter what.",
						"japanese": "後悔はない。我々は必ず遺物を見つけるだろう。",
						"chinese": "绝不后悔。我们一定会找到神器。",
						"french": "Aucun regret. Nous trouverons l'artefact, coûte que coûte.",
						"spanish": "Sin arrepentimientos. Encontraremos el artefacto, cueste lo que cueste.",
						"vietnamese": "Không hối hận. Chúng ta nhất định sẽ tìm thấy di vật.",
						"thai": "ไม่เสียใจ เราจะหาโบราณวัตถุให้พบแน่นอน",
						"hindi": "कोई पछतावा नहीं। हम कलाकृति को ज़रूर खोजेंगे।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "뭔가… 거대한 기운이 느껴져.",
						"english": "I feel... a colossal presence.",
						"japanese": "何か…巨大な気配を感じる。",
						"chinese": "我感觉到…一股巨大的气息。",
						"french": "Je ressens... une présence colossale.",
						"spanish": "Siento... una energía inmensa.",
						"vietnamese": "Tôi cảm thấy... một luồng khí tức khổng lồ.",
						"thai": "สัมผัสได้ถึง... พลังมหาศาลบางอย่าง",
						"hindi": "कुछ... विशाल ऊर्जा महसूस हो रही है।"
					},
					"speaker": "character_4",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "fern",
					"content": {
						"korean": "그건 숲의 분노. 그리고… 누군가 기다리고 있어.",
						"english": "That's the forest's wrath. And... someone is waiting.",
						"japanese": "それは森の怒り。そして…誰かが待っている。",
						"chinese": "那是森林的愤怒。而且…有人在等着。",
						"french": "C'est la colère de la forêt. Et... quelqu'un attend.",
						"spanish": "Es la ira del bosque. Y... alguien está esperando.",
						"vietnamese": "Đó là sự phẫn nộ của rừng. Và... có ai đó đang chờ đợi.",
						"thai": "นั่นคือความโกรธของป่า และ... มีใครบางคนกำลังรออยู่",
						"hindi": "वह जंगल का क्रोध है। और... कोई इंतज़ार कर रहा है।"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "숲의 가장 깊은 곳. 거대한 공간에 어둠이 가득했다.",
						"english": "The deepest part of the forest. Darkness filled the vast space.",
						"japanese": "森の最も深い場所。巨大な空間は闇に満ちていた。",
						"chinese": "森林最深处。巨大的空间里充满了黑暗。",
						"french": "La partie la plus profonde de la forêt. L'obscurité emplissait l'immense espace.",
						"spanish": "La parte más profunda del bosque. La oscuridad llenaba el vasto espacio.",
						"vietnamese": "Nơi sâu nhất của rừng. Bóng tối bao trùm không gian rộng lớn.",
						"thai": "ส่วนที่ลึกที่สุดของป่า ความมืดมิดปกคลุมพื้นที่อันกว้างใหญ่",
						"hindi": "जंगल का सबसे गहरा हिस्सा। विशाल स्थान में अंधेरा भरा था।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "드디어 왔군. 내 숲을 침범한 어리석은 자들.",
						"english": "You've finally arrived. Foolish trespassers in my forest.",
						"japanese": "ついに来たか。我が森を侵した愚か者どもめ。",
						"chinese": "你们终于来了。闯入我森林的愚蠢之人。",
						"french": "Vous êtes enfin arrivés. Stupides intrus dans ma forêt.",
						"spanish": "Finalmente habéis llegado. Estúpidos intrusos en mi bosque.",
						"vietnamese": "Cuối cùng các ngươi cũng đã đến. Những kẻ ngu ngốc xâm phạm rừng của ta.",
						"thai": "ในที่สุดก็มาถึงจนได้ พวกคนโง่ที่บุกรุกป่าของข้า",
						"hindi": "तुम आखिरकार आ ही गए। मेरे जंगल में घुसपैठ करने वाले मूर्ख।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "네가… 유물을 지키는 자인가?",
						"english": "Are you... the guardian of the artifact?",
						"japanese": "お前が…遺物を守る者か？",
						"chinese": "你就是…守护神器的人吗？",
						"french": "Es-tu... le gardien de l'artefact ?",
						"spanish": "¿Eres tú... el guardián del artefacto?",
						"vietnamese": "Ngươi... là kẻ canh giữ di vật sao?",
						"thai": "เจ้า... คือผู้พิทักษ์โบราณวัตถุหรือ?",
						"hindi": "क्या तुम... कलाकृति के रक्षक हो?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "내 이름은 중요치 않다. 너희는 그저… 숲의 양식일 뿐.",
						"english": "My name doesn't matter. You are merely... nourishment for the forest.",
						"japanese": "私の名は重要ではない。お前たちはただ…森の糧に過ぎない。",
						"chinese": "我的名字不重要。你们不过是…森林的养料罢了。",
						"french": "Mon nom n'a pas d'importance. Vous n'êtes que... de la nourriture pour la forêt.",
						"spanish": "Mi nombre no importa. Vosotros sois simplemente... alimento para el bosque.",
						"vietnamese": "Tên ta không quan trọng. Các ngươi chỉ là... thức ăn cho rừng thôi.",
						"thai": "ชื่อของข้าไม่สำคัญ พวกเจ้าเป็นแค่... อาหารสำหรับป่าเท่านั้น",
						"hindi": "मेरा नाम मायने नहीं रखता। तुम बस... जंगल का भोजन हो।"
					},
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "비켜! 유물은 우리가 가져간다!",
						"english": "Get out of the way! We're taking the artifact!",
						"japanese": "どけ！遺物は我々が手に入れる！",
						"chinese": "让开！神器是我们的了！",
						"french": "Écarte-toi ! Nous prenons l'artefact !",
						"spanish": "¡Apártate! ¡Nosotros nos llevaremos el artefacto!",
						"vietnamese": "Tránh ra! Di vật là của chúng ta!",
						"thai": "หลีกไป! เราจะเอาโบราณวัตถุไป!",
						"hindi": "हट जाओ! हम कलाकृति ले रहे हैं!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "크윽… 겨우 이 정도라니… 하지만 잊지 마라… 너희가 얻은 건… 시작에 불과해.",
						"english": "Ugh... Is that all...? But mark my words... what you've gained... is just the beginning.",
						"japanese": "くっ… この程度か… だが忘れるな… お前たちが手に入れたものなど… 始まりに過ぎない。",
						"chinese": "呃… 就这点本事吗… 但别忘了… 你们得到的… 不过是开始。",
						"french": "Pff... C'est tout ce que vous avez ? Mais n'oubliez pas... ce que vous avez gagné... n'est que le début.",
						"spanish": "Ugh... ¿Esto es todo? Pero no lo olvides... lo que habéis conseguido... es solo el principio.",
						"vietnamese": "Khốn kiếp... Chỉ có thế thôi sao...? Nhưng đừng quên... những gì các ngươi có được... chỉ là khởi đầu.",
						"thai": "อึก... แค่นี้เองรึ... แต่จำไว้... สิ่งที่พวกเจ้าได้ไป... เป็นแค่จุดเริ่มต้นเท่านั้น.",
						"hindi": "उफ़... बस इतना ही...? लेकिन भूलना मत... जो तुमने हासिल किया है... वह सिर्फ़ शुरुआत है।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "끝났어. 유물은 이제 우리 손에…",
						"english": "It's over. The artifact is ours now...",
						"japanese": "終わった。遺物はもう我らの手に…",
						"chinese": "结束了。神器现在在我们手中…",
						"french": "C'est fini. L'artefact est à nous maintenant...",
						"spanish": "Se acabó. El artefacto es nuestro ahora...",
						"vietnamese": "Xong rồi. Di vật giờ đã nằm trong tay chúng ta...",
						"thai": "จบแล้ว. วัตถุโบราณอยู่ในมือเราแล้ว...",
						"hindi": "ख़त्म हुआ। कलाकृति अब हमारे पास है..."
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "탐험대는 쓰러진 거대한 그림자를 뒤로하고, 빛을 향해 나아갔다. 숲의 깊은 곳에서 또 다른 속삭임이 들려오는 듯했다.",
						"english": "Leaving the colossal fallen shadow behind, the expedition advanced towards the light. From the depths of the forest, another whisper seemed to emerge.",
						"japanese": "探索隊は倒れた巨大な影を後にし、光へと進んだ。森の奥深くから、別の囁きが聞こえてくるようだった。",
						"chinese": "探险队将倒下的巨大暗影抛在身后，朝着光亮前进。仿佛又有什么低语从森林深处传来。",
						"french": "Laissant derrière elle l'ombre gigantesque tombée, l'expédition avança vers la lumière. Des profondeurs de la forêt, un autre murmure semblait émerger.",
						"spanish": "La expedición, dejando atrás la gigantesca sombra caída, avanzó hacia la luz. Desde las profundidades del bosque, otro susurro pareció surgir.",
						"vietnamese": "Đoàn thám hiểm bỏ lại bóng tối khổng lồ đã ngã xuống phía sau, tiến về phía ánh sáng. Dường như có một lời thì thầm khác vọng lên từ sâu thẳm khu rừng.",
						"thai": "คณะสำรวจเดินหน้าสู่แสงสว่าง ทิ้งเงาร่างยักษ์ที่ล้มลงไว้เบื้องหลัง ราวกับมีเสียงกระซิบอีกเสียงหนึ่งดังมาจากส่วนลึกของป่า.",
						"hindi": "गिरी हुई विशाल छाया को पीछे छोड़ते हुए, अभियान प्रकाश की ओर बढ़ा। जंगल की गहराइयों से, एक और फुसफुसाहट उभरती हुई प्रतीत हुई।"
					},
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "하찮은 것들… 감히 숲의 수호자를 거스르려 하다니.",
						"english": "Insignificant fools... How dare you defy the guardian of the forest.",
						"japanese": "取るに足らぬ者たちめ… 敢えて森の守護者に逆らうとは。",
						"chinese": "卑微的东西… 竟敢违抗森林的守护者。",
						"french": "Misérables vermines... Comment osez-vous défier le gardien de la forêt.",
						"spanish": "Insignificantes... ¿Cómo os atrevéis a desafiar al guardián del bosque?",
						"vietnamese": "Đồ phàm tục... Dám cả gan chống lại kẻ bảo hộ khu rừng này sao.",
						"thai": "เจ้าพวกไร้ค่า... กล้าดียังไงมาต่อต้านผู้พิทักษ์ป่า.",
						"hindi": "तुच्छ जीवो... जंगल के संरक्षक को चुनौती देने की हिम्मत कैसे हुई।"
					},
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "젠장… 아직… 끝나지 않았어!",
						"english": "Damn it... It's not... over yet!",
						"japanese": "くそ… まだ… 終わってない！",
						"chinese": "该死… 还没… 结束！",
						"french": "Maudit... Ce n'est pas... fini !",
						"spanish": "Maldita sea... ¡Todavía... no ha terminado!",
						"vietnamese": "Chết tiệt... Vẫn chưa... kết thúc đâu!",
						"thai": "บ้าจริง... ยัง... ไม่จบหรอก!",
						"hindi": "धिक्कार है... अभी... खत्म नहीं हुआ!"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "다음에 만날 땐… 좀 더 강해져서 오도록 해라.",
						"english": "Next time we meet... make sure you're stronger.",
						"japanese": "次に会う時は… もっと強くなって来るがいい。",
						"chinese": "下次再见时… 变得更强再来吧。",
						"french": "La prochaine fois que nous nous rencontrerons... soyez plus forts.",
						"spanish": "La próxima vez que nos veamos... ven más fuerte.",
						"vietnamese": "Lần tới gặp lại... hãy mạnh mẽ hơn mà đến.",
						"thai": "คราวหน้าเจอหน้ากัน... จงแข็งแกร่งขึ้นมาให้ได้.",
						"hindi": "अगली बार जब हम मिलें... तो और मजबूत होकर आना।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"고요한 숲에 발을 들였다.",
			"잊힌 유물을 찾아서.",
			"하지만 숲은 이미 모든 것을 알고 있었다.",
			"경고는 속삭임으로 다가왔고, 우리는 그 끝을 알지 못했다."
		],
		"english": [
			"Stepped into the tranquil forest.",
			"In search of forgotten relics.",
			"But the forest already knew everything.",
			"Warnings came as whispers, and we knew not their end."
		],
		"japanese": [
			"静かな森に足を踏み入れた。",
			"忘れられた遺物を求めて。",
			"しかし、森はすべてを知っていた。",
			"警告はささやきとして訪れ、私たちはその結末を知らなかった。"
		],
		"chinese": [
			"踏入了宁静的森林。",
			"寻找被遗忘的遗物。",
			"然而，森林早已知晓一切。",
			"警告以低语传来，我们不知其结局。"
		],
		"french": [
			"Entré dans la forêt tranquille.",
			"À la recherche de reliques oubliées.",
			"Mais la forêt savait déjà tout.",
			"Les avertissements vinrent en murmures, et nous n'en connaissions pas la fin."
		],
		"spanish": [
			"Entré en el bosque tranquilo.",
			"En busca de reliquias olvidadas.",
			"Pero el bosque ya lo sabía todo.",
			"Las advertencias llegaron como susurros, y no conocíamos su final."
		],
		"vietnamese": [
			"Bước vào khu rừng tĩnh lặng.",
			"Tìm kiếm di vật bị lãng quên.",
			"Nhưng khu rừng đã biết tất cả.",
			"Những lời cảnh báo đến như tiếng thì thầm, và chúng tôi không biết kết cục."
		],
		"thai": [
			"ก้าวเข้าสู่ป่าอันเงียบสงบ",
			"ตามหาสิ่งประดิษฐ์ที่ถูกลืม",
			"แต่ป่ารู้ทุกสิ่งแล้ว",
			"คำเตือนมาในรูปเสียงกระซิบ และเราไม่รู้จุดจบของมัน"
		],
		"hindi": [
			"शांत वन में कदम रखा।",
			"विस्मृत अवशेषों की तलाश में।",
			"किंतु वन को सब ज्ञात था।",
			"चेतावनियाँ फुसफुसाहटों के रूप में आईं, और हम उनका अंत नहीं जानते थे।"
		]
	}
} as const;
