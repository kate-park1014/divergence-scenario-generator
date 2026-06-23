export const scenario_forest_phaedra_33_03 = {
	"scenario_id": "forest_phaedra_33_03",
	"order": 3,
	"act": "rising",
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
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "숲은 더욱 뒤틀렸다. 길은 미로처럼 변하고 있었다.",
						"english": "The forest twisted further. The path became a labyrinth.",
						"japanese": "森はさらに歪んだ。道は迷路のようになりつつあった。",
						"chinese": "森林更加扭曲了。道路变成了迷宫。",
						"french": "La forêt se tordait davantage. Le chemin devenait un labyrinthe.",
						"spanish": "El bosque se retorcía más. El camino se estaba convirtiendo en un laberinto.",
						"vietnamese": "Rừng càng lúc càng vặn vẹo. Lối đi biến thành mê cung.",
						"thai": "ป่าบิดเบี้ยวมากขึ้น ทางกลายเป็นเขาวงกต",
						"hindi": "जंगल और भी मुड़ गया। रास्ता एक भूलभुलैया में बदल रहा था।"
					},
					"emotion": "base"
				},
				{
					"action": "enter",
					"speaker": "bracken",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						5,
						2
					]
				},
				{
					"content": {
						"korean": "이방인들! 더 이상 들어오지 마라!",
						"english": "Strangers! Enter no further!",
						"japanese": "異邦人め！これ以上入ってくるな！",
						"chinese": "陌生人！不许再往前！",
						"french": "Étrangers ! N'entrez pas plus loin !",
						"spanish": "¡Forasteros! ¡No avancéis más!",
						"vietnamese": "Quân lạ mặt! Đừng vào nữa!",
						"thai": "คนแปลกหน้า! อย่าเข้ามาอีก!",
						"hindi": "अजनबियों! और आगे मत आओ!"
					},
					"speaker": "bracken",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "숲의 수호자? 왜 길을 막는 거지?",
						"english": "Forest guardian? Why block the path?",
						"japanese": "森の守護者？なぜ道を阻む？",
						"chinese": "森林守护者？为什么要挡路？",
						"french": "Gardien de la forêt ? Pourquoi bloquer le chemin ?",
						"spanish": "¿Guardián del bosque? ¿Por qué bloqueas el camino?",
						"vietnamese": "Người bảo vệ rừng? Sao lại chắn đường?",
						"thai": "ผู้พิทักษ์ป่า? ทำไมถึงขวางทาง?",
						"hindi": "जंगल का रखवाला? रास्ता क्यों रोक रहे हो?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "bracken",
					"type": "speech",
					"content": {
						"korean": "숲이 죽어가고 있다! 너희 같은 것들이… 감히 신성한 곳을 더럽히는군!",
						"english": "The forest is dying! The likes of you... dare defile this sacred place!",
						"japanese": "森が死にかけている！お前たちのような者が…よくも聖なる場所を汚すな！",
						"chinese": "森林正在死去！你们这些家伙…竟敢玷污这神圣之地！",
						"french": "La forêt est en train de mourir ! Des gens comme vous... osent souiller ce lieu sacré !",
						"spanish": "¡El bosque está muriendo! ¡Vosotros... os atrevéis a profanar este lugar sagrado!",
						"vietnamese": "Rừng đang chết dần! Loại người như các ngươi... dám làm ô uế nơi linh thiêng này!",
						"thai": "ป่ากำลังจะตาย! พวกแก... กล้าดียังไงมาทำให้สถานที่ศักดิ์สิทธิ์นี้แปดเปื้อน!",
						"hindi": "जंगल मर रहा है! तुम जैसे लोग... इस पवित्र स्थान को अपवित्र करने की हिम्मत कैसे करते हो!"
					},
					"emotion": "angry"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						5,
						2
					],
					"type": "direction",
					"speaker": "bracken",
					"duration_ms": 500
				},
				{
					"emotion": "angry",
					"speaker": "bracken",
					"type": "speech",
					"content": {
						"korean": "들리지 않는가? 숲의 비명이! 카운트다운이 시작됐다!",
						"english": "Can't you hear? The forest's screams! The countdown has begun!",
						"japanese": "聞こえないのか？森の悲鳴が！カウントダウンが始まった！",
						"chinese": "你们听不见吗？森林的尖叫声！倒计时已经开始！",
						"french": "N'entendez-vous pas ? Les cris de la forêt ! Le compte à rebours a commencé !",
						"spanish": "¿No oyes? ¡Los gritos del bosque! ¡La cuenta atrás ha comenzado!",
						"vietnamese": "Các người không nghe thấy sao? Tiếng thét của rừng! Đồng hồ đếm ngược đã bắt đầu!",
						"thai": "ไม่ได้ยินเหรอ? เสียงกรีดร้องของป่า! การนับถอยหลังเริ่มขึ้นแล้ว!",
						"hindi": "क्या तुम सुनते नहीं? जंगल की चीखें! उलटी गिनती शुरू हो गई है!"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "카운트다운? 숲이 파괴된다는 건가?",
						"english": "Countdown? Does that mean the forest will be destroyed?",
						"japanese": "カウントダウン？森が破壊されるということか？",
						"chinese": "倒计时？这意味着森林将被摧毁吗？",
						"french": "Compte à rebours ? Cela signifie-t-il que la forêt sera détruite ?",
						"spanish": "¿Cuenta atrás? ¿Significa eso que el bosque será destruido?",
						"vietnamese": "Đồng hồ đếm ngược? Có nghĩa là rừng sẽ bị hủy diệt sao?",
						"thai": "การนับถอยหลัง? หมายความว่าป่าจะถูกทำลายเหรอ?",
						"hindi": "उलटी गिनती? क्या इसका मतलब है कि जंगल नष्ट हो जाएगा?"
					}
				},
				{
					"speaker": "bracken",
					"type": "speech",
					"content": {
						"korean": "이 오팔빛 수액이 마르는 날, 모든 것이 끝난다! 너희도, 숲도!",
						"english": "When this opalescent sap dries, all will end! You, and the forest too!",
						"japanese": "この乳白色の樹液が枯れる日、全てが終わる！お前たちも、森も！",
						"chinese": "当这欧泊般的树液枯竭之日，一切都将终结！你们，还有森林！",
						"french": "Quand cette sève opalescente s'asséchera, tout prendra fin ! Vous aussi, et la forêt !",
						"spanish": "¡Cuando esta savia opalescente se seque, todo terminará! ¡Vosotros también, y el bosque!",
						"vietnamese": "Khi nhựa cây óng ánh này khô cạn, mọi thứ sẽ kết thúc! Cả các ngươi, và cả khu rừng!",
						"thai": "เมื่อยางไม้สีโอปอลนี้แห้งเหือดไป ทุกสิ่งจะจบสิ้น! ทั้งพวกเจ้า และป่าไม้!",
						"hindi": "जिस दिन यह ओपल जैसा रस सूख जाएगा, सब कुछ खत्म हो जाएगा! तुम भी, और जंगल भी!"
					},
					"emotion": "sad"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…누군가 흐느끼는 소리가 들려.",
						"english": "…I hear someone sobbing.",
						"japanese": "…誰かがすすり泣く声が聞こえる。",
						"chinese": "…我听到有人在抽泣。",
						"french": "…J'entends quelqu'un sangloter.",
						"spanish": "…Oigo a alguien sollozar.",
						"vietnamese": "…Tôi nghe thấy tiếng ai đó nức nở.",
						"thai": "…ได้ยินเสียงใครบางคนสะอื้นไห้",
						"hindi": "…मुझे किसी के सिसकने की आवाज़ आ रही है।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "숲의 슬픔이다… 너희는 그저 이용당할 뿐!",
						"english": "It's the forest's sorrow… You are merely being used!",
						"japanese": "森の悲しみだ… お前たちはただ利用されているだけだ！",
						"chinese": "这是森林的悲伤… 你们不过是被利用了而已！",
						"french": "C'est la tristesse de la forêt… Vous n'êtes que des pions !",
						"spanish": "Es la tristeza del bosque… ¡Solo sois utilizados!",
						"vietnamese": "Đó là nỗi buồn của rừng… Các ngươi chỉ đang bị lợi dụng mà thôi!",
						"thai": "เป็นความโศกเศร้าของป่า… พวกเจ้าเป็นแค่เครื่องมือเท่านั้น!",
						"hindi": "यह जंगल का दुख है… तुम्हें बस इस्तेमाल किया जा रहा है!"
					},
					"type": "speech",
					"speaker": "bracken"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						5,
						2
					],
					"speaker": "bracken",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "예언자의 인도? 하! 그건 함정이다!",
						"english": "The Prophet's guidance? Ha! It's a trap!",
						"japanese": "預言者の導き？ハッ！それは罠だ！",
						"chinese": "先知的指引？哈！那是个陷阱！",
						"french": "Les conseils du Prophète ? Ha ! C'est un piège !",
						"spanish": "¿La guía del Profeta? ¡Ja! ¡Es una trampa!",
						"vietnamese": "Sự dẫn lối của Tiên Tri? Ha! Đó là một cái bẫy!",
						"thai": "คำชี้แนะของท่านศาสดา? ฮ่า! นั่นมันกับดัก!",
						"hindi": "पैगंबर का मार्गदर्शन? हा! वह एक जाल है!"
					},
					"type": "speech",
					"speaker": "bracken",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "신탁자가… 우리를 속이고 있다는 건가?",
						"english": "Is the Oracle… deceiving us?",
						"japanese": "神託者が… 私たちを欺いているというのか？",
						"chinese": "神谕者… 是在欺骗我们吗？",
						"french": "L'Oracle… nous trompe-t-il ?",
						"spanish": "¿El Oráculo… nos está engañando?",
						"vietnamese": "Người truyền lời thần… đang lừa dối chúng ta sao?",
						"thai": "ผู้พยากรณ์… กำลังหลอกลวงเราอยู่หรือ?",
						"hindi": "क्या ओरेकल… हमें धोखा दे रहा है?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "bracken",
					"content": {
						"korean": "너희는 그저 희생양일 뿐! 숲의 저주는 더 깊어질 것이다!",
						"english": "You are merely sacrifices! The forest's curse will deepen!",
						"japanese": "お前たちはただの生贄だ！森の呪いはさらに深まるだろう！",
						"chinese": "你们不过是牺牲品！森林的诅咒将更加深重！",
						"french": "Vous n'êtes que des sacrifices ! La malédiction de la forêt s'aggravera !",
						"spanish": "¡Solo sois sacrificios! ¡La maldición del bosque se hará más profunda!",
						"vietnamese": "Các ngươi chỉ là vật tế thôi! Lời nguyền của rừng sẽ càng sâu sắc hơn!",
						"thai": "พวกเจ้าเป็นเพียงแค่เครื่องสังเวย! คำสาปของป่าจะยิ่งลึกซึ้งขึ้น!",
						"hindi": "तुम बस बलि के बकरे हो! जंगल का अभिशाप और गहरा होगा!"
					},
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이상해… 이 길이 정말 맞을까?",
						"english": "Strange… Is this really the right path?",
						"japanese": "おかしい… この道は本当に正しいのか？",
						"chinese": "奇怪… 这条路真的对吗？",
						"french": "Étrange… Est-ce vraiment le bon chemin ?",
						"spanish": "Extraño… ¿Es este realmente el camino correcto?",
						"vietnamese": "Lạ thật… Lối đi này có đúng không?",
						"thai": "แปลกจัง… นี่ใช่ทางที่ถูกต้องจริงๆ เหรอ?",
						"hindi": "अजीब है… क्या यह रास्ता वाकई सही है?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "bracken",
					"type": "speech",
					"content": {
						"korean": "이제 돌아갈 수 없어. 파멸의 카운트다운은 멈추지 않는다!",
						"english": "There's no turning back now. The countdown to ruin won't stop!",
						"japanese": "もう戻れない。破滅へのカウントダウンは止まらない！",
						"chinese": "现在无法回头了。毁灭的倒计时不会停止！",
						"french": "Impossible de revenir en arrière maintenant. Le compte à rebours de la ruine est inarrêtable !",
						"spanish": "Ya no se puede volver. ¡La cuenta atrás hacia la ruina no se detendrá!",
						"vietnamese": "Giờ không thể quay lại được nữa. Đồng hồ đếm ngược đến ngày tàn sẽ không dừng lại!",
						"thai": "ตอนนี้กลับไม่ได้แล้ว การนับถอยหลังสู่หายนะไม่หยุดยั้ง!",
						"hindi": "अब पीछे नहीं हट सकते। विनाश की उलटी गिनती रुकेगी नहीं!"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						5,
						2
					],
					"speaker": "bracken",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "숲의 영혼이 죽어가고 있다! 너희 때문에 모든 것이 끝난다!",
						"english": "The forest's soul is dying! Everything ends because of you!",
						"japanese": "森の魂が死につつある！お前たちのせいで全てが終わる！",
						"chinese": "森林的灵魂正在消逝！一切都因你们而终结！",
						"french": "L'âme de la forêt est en train de mourir ! Tout se termine à cause de vous !",
						"spanish": "¡El alma del bosque está muriendo! ¡Todo termina por vuestra culpa!",
						"vietnamese": "Linh hồn rừng đang chết dần! Mọi thứ kết thúc vì các ngươi!",
						"thai": "วิญญาณของป่ากำลังจะตาย! ทุกสิ่งจะจบสิ้นเพราะพวกเจ้า!",
						"hindi": "जंगल की आत्मा मर रही है! तुम्हारी वजह से सब कुछ खत्म हो रहा है!"
					},
					"speaker": "bracken",
					"type": "speech"
				},
				{
					"content": {
						"korean": "우리가 숲을 파괴하는 게 아니야. 진실을 찾고 있어.",
						"english": "We're not destroying the forest. We're seeking the truth.",
						"japanese": "私たちは森を破壊しているのではない。真実を探しているんだ。",
						"chinese": "我们没有破坏森林。我们正在寻找真相。",
						"french": "Nous ne détruisons pas la forêt. Nous cherchons la vérité.",
						"spanish": "No estamos destruyendo el bosque. Estamos buscando la verdad.",
						"vietnamese": "Chúng tôi không phá hủy rừng. Chúng tôi đang tìm kiếm sự thật.",
						"thai": "เราไม่ได้ทำลายป่า เรากำลังตามหาความจริง",
						"hindi": "हम जंगल को नष्ट नहीं कर रहे हैं। हम सच की तलाश में हैं।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "bracken",
					"content": {
						"korean": "진실은… 파멸이다! 저주받은 운명에서 벗어날 수 없어!",
						"english": "The truth... is destruction! You cannot escape your cursed fate!",
						"japanese": "真実は…破滅だ！呪われた運命からは逃れられない！",
						"chinese": "真相…即是毁灭！你无法摆脱这被诅咒的命运！",
						"french": "La vérité... c'est la destruction ! Tu ne peux échapper à ton destin maudit !",
						"spanish": "¡La verdad... es la destrucción! ¡No puedes escapar de tu destino maldito!",
						"vietnamese": "Sự thật... là hủy diệt! Ngươi không thể thoát khỏi số phận bị nguyền rủa!",
						"thai": "ความจริง...คือหายนะ! เจ้าหนีไม่พ้นจากชะตากรรมที่ถูกสาป!",
						"hindi": "सच... विनाश है! तुम अपने शापित भाग्य से बच नहीं सकते!"
					},
					"emotion": "sad"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…누가 우리를 여기까지 이끌었나.",
						"english": "...Who led us here?",
						"japanese": "…誰が我々をここまで導いたのか。",
						"chinese": "……是谁将我们引到此处？",
						"french": "...Qui nous a menés jusqu'ici ?",
						"spanish": "...¿Quién nos guio hasta aquí?",
						"vietnamese": "...Ai đã dẫn lối chúng ta đến đây?",
						"thai": "...ใครกันที่นำเรามาที่นี่?",
						"hindi": "...हमें यहाँ तक किसने पहुँचाया?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "되돌아갈 길은 없었다. 오직 앞으로 나아갈 뿐.",
						"english": "There was no turning back. Only forward.",
						"japanese": "後戻りはできなかった。ただ前へ進むのみ。",
						"chinese": "已无退路。唯有向前。",
						"french": "Pas de retour en arrière. Seulement avancer.",
						"spanish": "No había vuelta atrás. Solo hacia adelante.",
						"vietnamese": "Không còn đường quay lại. Chỉ có tiến về phía trước.",
						"thai": "ไม่มีทางย้อนกลับ มีแต่ต้องเดินหน้าต่อไป",
						"hindi": "पीछे हटने का कोई रास्ता नहीं था। बस आगे बढ़ना था।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 길을 막아섰다. 알 수 없는 존재가 숲의 심장을 지키고 있었다.",
						"english": "A colossal shadow blocked the path. An unknown entity guarded the forest's heart.",
						"japanese": "巨大な影が道を阻んだ。未知の存在が森の心臓を守っていた。",
						"chinese": "巨大的阴影挡住了去路。一个未知存在守护着森林之心。",
						"french": "Une ombre colossale bloquait le chemin. Une entité inconnue gardait le cœur de la forêt.",
						"spanish": "Una sombra colosal bloqueaba el camino. Una entidad desconocida custodiaba el corazón del bosque.",
						"vietnamese": "Một cái bóng khổng lồ chặn lối. Một thực thể bí ẩn đang bảo vệ trái tim khu rừng.",
						"thai": "เงามหึมาขวางทางอยู่ สิ่งมีชีวิตลึกลับเฝ้าหัวใจของป่า",
						"hindi": "एक विशालकाय परछाई ने रास्ता रोक दिया। एक अज्ञात सत्ता जंगल के हृदय की रक्षा कर रही थी।"
					},
					"emotion": "base"
				},
				{
					"action": "enter",
					"spot": [
						5,
						2
					],
					"type": "direction",
					"speaker": "bracken",
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"speaker": "bracken",
					"type": "speech",
					"content": {
						"korean": "그는 숲의 분노… 신탁자의 희생양이다!",
						"english": "He is the forest's wrath... the oracle's sacrifice!",
						"japanese": "彼は森の怒り…神託者の生贄だ！",
						"chinese": "他是森林的怒火……神谕者的牺牲品！",
						"french": "Il est la fureur de la forêt... le sacrifice de l'oracle !",
						"spanish": "Él es la ira del bosque... ¡el sacrificio del oráculo!",
						"vietnamese": "Hắn là cơn thịnh nộ của rừng... vật hiến tế của nhà tiên tri!",
						"thai": "เขาคือความพิโรธของป่า...เหยื่อสังเวยของเทพพยากรณ์!",
						"hindi": "वह जंगल का क्रोध है... भविष्यवक्ता का बलिदान!"
					}
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…숲의 파멸을 막아라. 너희는 자격이 없다.",
						"english": "...Stop the forest's destruction. You are unworthy.",
						"japanese": "…森の破滅を止めよ。お前たちに資格はない。",
						"chinese": "……阻止森林的毁灭。你们不配。",
						"french": "...Arrêtez la destruction de la forêt. Vous n'êtes pas dignes.",
						"spanish": "...Detengan la destrucción del bosque. No son dignos.",
						"vietnamese": "...Ngăn chặn sự hủy diệt của rừng. Ngươi không có tư cách.",
						"thai": "...หยุดยั้งการทำลายป่า พวกเจ้าไม่มีสิทธิ์",
						"hindi": "...जंगल के विनाश को रोको। तुम अयोग्य हो।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "비켜. 진실을 봐야겠어.",
						"english": "Move. I need to see the truth.",
						"japanese": "退け。真実を見なければならない。",
						"chinese": "让开。我必须看到真相。",
						"french": "Écarte-toi. Je dois voir la vérité.",
						"spanish": "Muévete. Necesito ver la verdad.",
						"vietnamese": "Tránh ra. Ta phải thấy sự thật.",
						"thai": "ถอยไป ข้าต้องเห็นความจริง",
						"hindi": "हटो। मुझे सच देखना है।"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "어리석은 것들… 파멸만이 기다릴 뿐.",
						"english": "Fools... only ruin awaits.",
						"japanese": "愚かな者たちめ…破滅だけが待っている。",
						"chinese": "愚蠢的东西……只有毁灭在等待。",
						"french": "Imbéciles... seule la ruine vous attend.",
						"spanish": "Tontos... solo la ruina os espera.",
						"vietnamese": "Những kẻ ngu ngốc... chỉ có sự hủy diệt đang chờ đợi.",
						"thai": "พวกโง่เง่า...มีแต่ความพินาศรออยู่",
						"hindi": "मूर्खों... केवल विनाश प्रतीक्षा कर रहा है।"
					},
					"speaker": "random_boss",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "너희의 어리석음이 숲을 더럽힌다. 사라져라.",
						"english": "Your folly defiles the forest. Vanish.",
						"japanese": "お前たちの愚かさが森を汚す。消え失せろ。",
						"chinese": "你们的愚蠢玷污了森林。消失吧。",
						"french": "Votre folie souille la forêt. Disparaissez.",
						"spanish": "Vuestra estupidez profana el bosque. Desapareced.",
						"vietnamese": "Sự ngu ngốc của các ngươi làm ô uế khu rừng. Biến đi.",
						"thai": "ความโง่เขลาของพวกเจ้าทำให้ป่าแปดเปื้อน. จงหายไปซะ.",
						"hindi": "तुम्हारी मूर्खता जंगल को दूषित करती है। गायब हो जाओ।"
					},
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "…아직 끝나지 않았어. 진실은 밝혀낼 거야.",
						"english": "...It's not over yet. I will uncover the truth.",
						"japanese": "…まだ終わってない。真実を明らかにする。",
						"chinese": "……还没结束。我会揭示真相。",
						"french": "...Ce n'est pas encore fini. Je découvrirai la vérité.",
						"spanish": "Aún no ha terminado. Revelaré la verdad.",
						"vietnamese": "...Vẫn chưa kết thúc. Ta sẽ khám phá ra sự thật.",
						"thai": "...ยังไม่จบ. ฉันจะเปิดเผยความจริง.",
						"hindi": "...अभी खत्म नहीं हुआ है। मैं सच्चाई का पर्दाफाश करूंगा।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"spot": [
						5,
						2
					],
					"type": "direction",
					"speaker": "bracken",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "카운트다운은 멈추지 않는다… 절망만이 남을 뿐.",
						"english": "The countdown does not stop... Only despair remains.",
						"japanese": "カウントダウンは止まらない… 残るのは絶望だけ。",
						"chinese": "倒计时不会停止……只剩下绝望。",
						"french": "Le compte à rebours ne s'arrête pas... Seul le désespoir demeure.",
						"spanish": "La cuenta atrás no se detiene... Solo queda la desesperación.",
						"vietnamese": "Đếm ngược không dừng lại... Chỉ còn lại sự tuyệt vọng.",
						"thai": "การนับถอยหลังไม่หยุด... เหลือเพียงความสิ้นหวังเท่านั้น.",
						"hindi": "उलटी गिनती रुकती नहीं... केवल निराशा ही बची है।"
					},
					"type": "speech",
					"speaker": "bracken"
				}
			],
			"win_dialogue": [
				{
					"emotion": "sad",
					"content": {
						"korean": "…이것은 끝이 아니다. 숲의 저주는… 더욱 깊어진다.",
						"english": "...This is not the end. The forest's curse... deepens further.",
						"japanese": "…これは終わりではない。森の呪いは…さらに深まる。",
						"chinese": "……这并非结束。森林的诅咒……愈发深重。",
						"french": "...Ce n'est pas la fin. La malédiction de la forêt... s'approfondit.",
						"spanish": "...Esto no es el fin. La maldición del bosque... se hace más profunda.",
						"vietnamese": "...Đây không phải là kết thúc. Lời nguyền của rừng... càng thêm sâu sắc.",
						"thai": "...นี่ไม่ใช่จุดจบ คำสาปของป่า...ยิ่งลึกซึ้งลงไปอีก",
						"hindi": "...यह अंत नहीं है। जंगल का अभिशाप... और गहरा होता जाता है।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "{random_boss}를 쓰러뜨렸어… 하지만.",
						"english": "We defeated {random_boss}... but.",
						"japanese": "{random_boss}を倒した…だが。",
						"chinese": "我们击败了{random_boss}……但是。",
						"french": "Nous avons vaincu {random_boss}... mais.",
						"spanish": "Derrotamos a {random_boss}... pero.",
						"vietnamese": "Chúng ta đã đánh bại {random_boss}... nhưng.",
						"thai": "เราโค่นล้ม {random_boss} แล้ว...แต่ว่า",
						"hindi": "हमने {random_boss} को हरा दिया... लेकिन।"
					},
					"emotion": "base"
				},
				{
					"speaker": "bracken",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"action": "enter"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "늦었어… 이미 숲은 잠식되기 시작했다. 신탁자는… ",
						"english": "Too late... The forest has already begun to be consumed. The Oracle...",
						"japanese": "遅かった… 森は既に侵食され始めた。神託者は…",
						"chinese": "太迟了……森林已开始被侵蚀。神谕者……",
						"french": "Trop tard... La forêt a déjà commencé à être consumée. L'Oracle...",
						"spanish": "Demasiado tarde... El bosque ya ha empezado a ser consumido. El Oráculo...",
						"vietnamese": "Muộn rồi... Rừng đã bắt đầu bị xâm chiếm. Nhà tiên tri...",
						"thai": "สายไปแล้ว... ป่าเริ่มถูกกลืนกินแล้ว. ผู้พยากรณ์...",
						"hindi": "बहुत देर हो चुकी है... जंगल पहले ही भस्म होना शुरू हो गया है। दैवज्ञ..."
					},
					"type": "speech",
					"speaker": "bracken"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "숨 막히는 긴장감. 진실은 아직 저 너머에 있었다.",
						"english": "Suffocating tension. The truth was still beyond reach.",
						"japanese": "息詰まる緊張感。真実はまだその先にあった。",
						"chinese": "令人窒息的紧张感。真相仍在那边。",
						"french": "Tension suffocante. La vérité était encore au-delà.",
						"spanish": "Tensión asfixiante. La verdad aún estaba más allá.",
						"vietnamese": "Căng thẳng nghẹt thở. Sự thật vẫn còn ở phía bên kia.",
						"thai": "ความตึงเครียดที่หายใจไม่ออก. ความจริงยังคงอยู่นอกเหนือเอื้อม.",
						"hindi": "दम घुटने वाला तनाव। सच अभी भी पहुँच से परे था।"
					},
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"숨 막히는 숲의 심장으로 더 깊이.",
			"보이지 않는 손이, 우리를 조종하는가.",
			"신탁자의 목소리, 이제는 의심이 된다.",
			"카운트다운은 멈추지 않는다. 남은 시간은 없다."
		],
		"english": [
			"Deeper into the heart of the suffocating forest.",
			"Is an unseen hand manipulating us?",
			"The Oracle's voice, now doubted.",
			"The countdown never stops. No time left."
		],
		"japanese": [
			"息苦しい森の奥深くへ。",
			"見えざる手が、我々を操るのか。",
			"神託者の声、今や疑わしい。",
			"カウントダウンは止まらない。残された時間はない。"
		],
		"chinese": [
			"更深地进入令人窒息的森林之心。",
			"是一只无形的手在操纵我们吗？",
			"神谕者的声音，如今令人怀疑。",
			"倒计时从未停止。没有时间了。"
		],
		"french": [
			"Plus profondément dans le cœur de la forêt étouffante.",
			"Une main invisible nous manipule-t-elle ?",
			"La voix de l'Oracle, maintenant douteuse.",
			"Le compte à rebours ne s'arrête jamais. Plus de temps."
		],
		"spanish": [
			"Más profundo en el corazón del bosque asfixiante.",
			"¿Nos está manipulando una mano invisible?",
			"La voz del Oráculo, ahora en duda.",
			"La cuenta atrás nunca se detiene. No queda tiempo."
		],
		"vietnamese": [
			"Sâu hơn vào trái tim của khu rừng ngột ngạt.",
			"Có phải một bàn tay vô hình đang thao túng chúng ta?",
			"Giọng nói của Thần Khải, giờ đây đầy nghi ngờ.",
			"Đồng hồ đếm ngược không ngừng lại. Không còn thời gian."
		],
		"thai": [
			"ลึกลงไปในใจกลางป่าที่อึดอัด",
			"มีมือที่มองไม่เห็นกำลังบงการเราอยู่หรือเปล่า?",
			"เสียงของผู้พยากรณ์ ตอนนี้เป็นที่น่าสงสัย",
			"การนับถอยหลังไม่เคยหยุด ไม่มีเวลาเหลือแล้ว"
		],
		"hindi": [
			"दम घोंटने वाले जंगल के दिल में और गहराई तक।",
			"क्या कोई अदृश्य हाथ हमें नियंत्रित कर रहा है?",
			"भविष्यवक्ता की आवाज़, अब संदिग्ध है।",
			"उलटी गिनती कभी नहीं रुकती। समय नहीं बचा।"
		]
	}
} as const;
