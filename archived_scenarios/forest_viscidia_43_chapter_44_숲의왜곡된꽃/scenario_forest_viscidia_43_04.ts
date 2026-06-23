export const scenario_forest_viscidia_43_04 = {
	"scenario_id": "forest_viscidia_43_04",
	"order": 4,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"cedar": {
			"id": "mon_bd67c222-311e-4f31-b81f-931b14f6b5c6",
			"name": {
				"korean": "시더",
				"english": "Cedar",
				"japanese": "シダー",
				"chinese": "雪松",
				"french": "Cèdre",
				"spanish": "Cedro",
				"vietnamese": "Tuyết tùng",
				"thai": "ซีดาร์",
				"hindi": "देवदार"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f1057921-5fa2-4be2-767d-1a64c33e6e00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/9579f10e-eb78-40e5-d495-72f489322200/public"
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
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "숲의 깊은 곳. 짐승들의 울음소리가 기이하게 변해 있었다.",
						"english": "Deep in the forest. The beasts' cries had strangely changed.",
						"japanese": "森の奥深く。獣たちの鳴き声は奇妙に変化していた。",
						"chinese": "森林深处。野兽的叫声变得异常诡异。",
						"french": "Au plus profond de la forêt. Les cris des bêtes avaient étrangement changé.",
						"spanish": "En lo profundo del bosque. Los aullidos de las bestias habían cambiado extrañamente.",
						"vietnamese": "Sâu trong rừng. Tiếng gầm của quái thú đã thay đổi một cách kỳ lạ.",
						"thai": "ลึกเข้าไปในป่า เสียงร้องของสัตว์ร้ายเปลี่ยนไปอย่างประหลาด",
						"hindi": "जंगल की गहराई में। जानवरों की चीखें अजीब तरह से बदल गई थीं।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "숲이 이상해… 동물들이 우릴 피하는 게 아니야.",
						"english": "The forest is strange... The animals aren't avoiding us.",
						"japanese": "森がおかしい… 動物たちが私たちを避けているわけじゃない。",
						"chinese": "森林很奇怪……动物们不是在躲避我们。",
						"french": "La forêt est étrange… Les animaux ne nous évitent pas.",
						"spanish": "El bosque es extraño... Los animales no nos están evitando.",
						"vietnamese": "Rừng thật lạ… Động vật không phải đang tránh chúng ta.",
						"thai": "ป่าแปลกไป... สัตว์ไม่ได้หลีกเลี่ยงเรา",
						"hindi": "जंगल अजीब है... जानवर हमसे बच नहीं रहे हैं।"
					}
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "맹목적으로 달려들어. 뭔가에 홀린 것처럼.",
						"english": "They charge blindly. As if possessed by something.",
						"japanese": "盲目的に襲いかかってくる。何かに憑かれたように。",
						"chinese": "它们盲目地冲过来。仿佛被什么附身了。",
						"french": "Elles chargent aveuglément. Comme si elles étaient possédées.",
						"spanish": "Atacan ciegamente. Como si estuvieran poseídos por algo.",
						"vietnamese": "Chúng lao tới một cách mù quáng. Như thể bị thứ gì đó ám ảnh.",
						"thai": "พวกมันพุ่งเข้าชนอย่างไม่ลืมหูลืมตา ราวกับถูกสิง",
						"hindi": "वे आँख बंद करके हमला करते हैं। जैसे किसी चीज़ से ग्रस्त हों।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "숲의 생명력이 뒤틀리고 있었다.",
						"english": "The forest's life force was twisting.",
						"japanese": "森の生命力が歪んでいた。",
						"chinese": "森林的生命力正在扭曲。",
						"french": "La force vitale de la forêt se tordait.",
						"spanish": "La fuerza vital del bosque se estaba retorciendo.",
						"vietnamese": "Sức sống của rừng đang bị bóp méo.",
						"thai": "พลังชีวิตของป่ากำลังบิดเบี้ยว",
						"hindi": "जंगल की जीवन शक्ति विकृत हो रही थी।"
					},
					"speaker": "narrator"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "변이된 짐승들의 그림자가 탐험대를 덮쳤다.",
						"english": "Shadows of mutated beasts engulfed the expedition.",
						"japanese": "変異した獣たちの影が探検隊を襲った。",
						"chinese": "变异野兽的阴影笼罩了探险队。",
						"french": "Les ombres des bêtes mutées envahirent l'expédition.",
						"spanish": "Las sombras de las bestias mutadas envolvieron a la expedición.",
						"vietnamese": "Bóng của những con thú đột biến bao trùm đoàn thám hiểm.",
						"thai": "เงาของสัตว์ร้ายกลายพันธุ์ปกคลุมคณะสำรวจ",
						"hindi": "उत्परिवर्तित जानवरों की परछाइयों ने अभियान दल को घेर लिया।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "멈춰! 이대로는 위험해.",
						"english": "Stop! It's dangerous like this.",
						"japanese": "止めろ！このままでは危険だ。",
						"chinese": "住手！这样很危险。",
						"french": "Arrêtez ! C'est dangereux comme ça.",
						"spanish": "¡Detente! Así es peligroso.",
						"vietnamese": "Dừng lại! Cứ thế này thì nguy hiểm.",
						"thai": "หยุด! แบบนี้อันตราย",
						"hindi": "रुको! ऐसे ख़तरनाक है।"
					},
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"speaker": "cedar",
					"action": "enter",
					"spot": [
						4,
						2
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "늦었어. 이미 놈들에게 홀린 몸이야.",
						"english": "It's too late. They've already possessed him.",
						"japanese": "遅い。既に奴らに魅入られている。",
						"chinese": "晚了。他已被它们附身。",
						"french": "Trop tard. Il est déjà possédé par eux.",
						"spanish": "Demasiado tarde. Ya ha sido poseído por ellos.",
						"vietnamese": "Muộn rồi. Anh ta đã bị chúng chiếm hữu.",
						"thai": "สายไปแล้ว เขาถูกพวกมันสิงสู่แล้ว",
						"hindi": "बहुत देर हो चुकी है। वह पहले ही उनके वश में हो चुका है।"
					},
					"speaker": "cedar",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "당신은…?",
						"english": "You...?",
						"japanese": "あなたは…？",
						"chinese": "你是…？",
						"french": "Vous êtes...?",
						"spanish": "¿Usted es...?",
						"vietnamese": "Bạn là...?",
						"thai": "ท่านคือ...?",
						"hindi": "आप...?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "사냥꾼 시더. 이 숲의 지리를 누구보다 잘 알지.",
						"english": "Hunter Cyd. I know this forest better than anyone.",
						"japanese": "狩人シダー。この森の地理は誰よりも詳しい。",
						"chinese": "猎人西德。我对这片森林的地理了如指掌。",
						"french": "Chasseur Cyd. Je connais la géographie de cette forêt mieux que quiconque.",
						"spanish": "Cyd, el cazador. Conozco la geografía de este bosque mejor que nadie.",
						"vietnamese": "Thợ săn Cyd. Tôi biết địa lý khu rừng này hơn bất cứ ai.",
						"thai": "ไคด์ นักล่า ข้ารู้ภูมิประเทศป่านี้ดีกว่าใคร",
						"hindi": "शिकारी सिड। मैं इस जंगल की भौगोलिक स्थिति किसी से भी बेहतर जानता हूँ।"
					},
					"speaker": "cedar",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "cedar",
					"content": {
						"korean": "…알고 있었어. 이렇게 될 줄.",
						"english": "...I knew. This would happen.",
						"japanese": "…知っていた。こうなることを。",
						"chinese": "…我早就知道。会变成这样。",
						"french": "...Je le savais. Que cela arriverait.",
						"spanish": "...Lo sabía. Que esto pasaría.",
						"vietnamese": "...Tôi đã biết. Điều này sẽ xảy ra.",
						"thai": "...ข้ารู้ดี. ว่ามันจะเป็นเช่นนี้.",
						"hindi": "...मैं जानता था। कि ऐसा होगा।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "cedar",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "변이된 짐승들에게 친구를 잃었어. 놈들은 더 이상 숲의 일부가 아니야.",
						"english": "I lost friends to mutated beasts. They are no longer part of the forest.",
						"japanese": "変異した獣たちに友を奪われた。奴らはもう森の一部ではない。",
						"chinese": "我把朋友葬送给了变异的野兽。它们已不再是森林的一部分。",
						"french": "J'ai perdu des amis à cause des bêtes mutantes. Elles ne font plus partie de la forêt.",
						"spanish": "Perdí amigos a causa de las bestias mutadas. Ya no son parte del bosque.",
						"vietnamese": "Tôi đã mất bạn bè vì lũ quái vật đột biến. Chúng không còn là một phần của rừng nữa.",
						"thai": "ข้าเสียเพื่อนไปเพราะสัตว์กลายพันธุ์ พวกมันไม่ใช่ส่วนหนึ่งของป่าอีกต่อไป",
						"hindi": "मैंने अपने दोस्त उत्परिवर्तित जानवरों के कारण खो दिए। वे अब जंगल का हिस्सा नहीं हैं।"
					},
					"speaker": "cedar",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "홀린 것처럼 행동한다더니…",
						"english": "So they act possessed...?",
						"japanese": "魅入られたように振る舞うと…",
						"chinese": "你说它们像被附身一样行动…",
						"french": "Donc, ils agissent comme s'ils étaient possédés...",
						"spanish": "¿Así que actúan como si estuvieran poseídos...?",
						"vietnamese": "Hóa ra chúng hành động như bị chiếm hữu...?",
						"thai": "ที่ว่าพวกมันทำตัวเหมือนถูกสิงสู่...",
						"hindi": "तो वे वश में किए गए जैसे व्यवहार करते हैं...?"
					}
				},
				{
					"content": {
						"korean": "놈들은 숲 자체에 잠식된 거야. 이 숲은 병들었어.",
						"english": "They've been encroached upon by the forest itself. This forest is sick.",
						"japanese": "奴らは森そのものに侵食されたのだ。この森は病んでいる。",
						"chinese": "它们被森林本身侵蚀了。这片森林病了。",
						"french": "Ils ont été envahis par la forêt elle-même. Cette forêt est malade.",
						"spanish": "Han sido invadidos por el propio bosque. Este bosque está enfermo.",
						"vietnamese": "Chúng đã bị chính khu rừng này xâm chiếm. Rừng này đã bị bệnh.",
						"thai": "พวกมันถูกป่ากลืนกิน ป่านี้กำลังป่วย",
						"hindi": "वे जंगल द्वारा ही निगल लिए गए हैं। यह जंगल बीमार है।"
					},
					"speaker": "cedar",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "너희도 곧 알게 될 거다. 이 숲의 진짜 공포를.",
						"english": "You'll soon know. The true horror of this forest.",
						"japanese": "お前たちもすぐに知るだろう。この森の本当の恐怖を。",
						"chinese": "你们很快就会知道。这片森林真正的恐怖。",
						"french": "Vous aussi, vous découvrirez bientôt. La véritable horreur de cette forêt.",
						"spanish": "Pronto lo sabréis. El verdadero horror de este bosque.",
						"vietnamese": "Các ngươi cũng sẽ sớm biết. Nỗi kinh hoàng thực sự của khu rừng này.",
						"thai": "พวกเจ้าก็จะรู้ในไม่ช้า. ความน่าสะพรึงกลัวที่แท้จริงของป่านี้.",
						"hindi": "तुम भी जल्द ही जान जाओगे। इस जंगल का असली खौफ।"
					},
					"speaker": "cedar",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "(충격)",
						"english": "(Shock)",
						"japanese": "(衝撃)",
						"chinese": "(震惊)",
						"french": "(Choc)",
						"spanish": "(Impacto)",
						"vietnamese": "(Sốc)",
						"thai": "(ตกใจ)",
						"hindi": "(आघात)"
					}
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						2
					],
					"speaker": "cedar",
					"type": "direction"
				},
				{
					"speaker": "cedar",
					"content": {
						"korean": "이제 되돌릴 수 없어. 숲은 우리를 집어삼킬 거야.",
						"english": "It's irreversible now. The forest will devour us.",
						"japanese": "もう元には戻せない。森は我々を飲み込むだろう。",
						"chinese": "现在已经无法挽回了。森林会吞噬我们。",
						"french": "On ne peut plus revenir en arrière. La forêt nous dévorera.",
						"spanish": "Ya no se puede revertir. El bosque nos devorará.",
						"vietnamese": "Không thể quay lại được nữa. Rừng sẽ nuốt chửng chúng ta.",
						"thai": "ตอนนี้มันย้อนกลับไม่ได้แล้ว ป่าจะกลืนกินเรา",
						"hindi": "अब इसे बदला नहीं जा सकता। जंगल हमें निगल जाएगा।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "그런 말 하지 마!",
						"english": "Don't say that!",
						"japanese": "そんなこと言わないで！",
						"chinese": "别这么说！",
						"french": "Ne dis pas ça !",
						"spanish": "¡No digas eso!",
						"vietnamese": "Đừng nói vậy!",
						"thai": "อย่าพูดแบบนั้น!",
						"hindi": "ऐसा मत कहो!"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "나도 그랬어. 희망을 찾으려 했지. 하지만 놈들은… 계속 변했어.",
						"english": "I tried too. Tried to find hope. But they... kept changing.",
						"japanese": "私もそうだった。希望を探そうとした。でも奴らは…変わり続けた。",
						"chinese": "我也一样。曾试图寻找希望。但它们…一直在变。",
						"french": "Moi aussi. J'ai cherché l'espoir. Mais ils... n'ont cessé de changer.",
						"spanish": "Yo también lo hice. Intenté encontrar esperanza. Pero ellos... siguieron cambiando.",
						"vietnamese": "Tôi cũng vậy. Đã cố tìm hy vọng. Nhưng chúng... cứ thay đổi mãi.",
						"thai": "ฉันก็เคยเป็นอย่างนั้น พยายามหาความหวัง แต่พวกมัน…เปลี่ยนไปเรื่อยๆ",
						"hindi": "मैंने भी ऐसा किया। आशा खोजने की कोशिश की। लेकिन वे... बदलते रहे।"
					},
					"speaker": "cedar",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "하지만 우린…",
						"english": "But we...",
						"japanese": "でも僕らは…",
						"chinese": "但我们…",
						"french": "Mais nous...",
						"spanish": "Pero nosotros...",
						"vietnamese": "Nhưng chúng ta...",
						"thai": "แต่พวกเรา…",
						"hindi": "लेकिन हम..."
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "(비웃음) 이 숲의 끝에 뭐가 있는지 알아? 더 큰 괴물이 기다리고 있을 뿐.",
						"english": "(Scoffs) You know what's at the end of this forest? Only a bigger monster awaits.",
						"japanese": "(嘲笑) この森の終わりに何があるか知ってるか？もっと大きな怪物が待っているだけだ。",
						"chinese": "(嗤笑) 你知道这片森林的尽头有什么吗？不过是更巨大的怪物在等着。",
						"french": "(Ricane) Tu sais ce qu'il y a au bout de cette forêt ? Seul un monstre encore plus grand t'attend.",
						"spanish": "(Se burla) ¿Sabes lo que hay al final de este bosque? Solo un monstruo más grande te espera.",
						"vietnamese": "(Cười khẩy) Ngươi biết cuối khu rừng này có gì không? Chỉ có một con quái vật lớn hơn đang chờ mà thôi.",
						"thai": "(หัวเราะเยาะ) เจ้ารู้ไหมว่าอะไรอยู่สุดปลายป่านี้? มีแต่ปีศาจที่ใหญ่กว่ารออยู่เท่านั้นแหละ",
						"hindi": "(हंसते हुए) तुम्हें पता है इस जंगल के अंत में क्या है? बस एक और बड़ा राक्षस इंतजार कर रहा है।"
					},
					"speaker": "cedar"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "숲의 심장부. 거대한 그림자가 땅을 흔들었다.",
						"english": "Heart of the forest. A colossal shadow shook the ground.",
						"japanese": "森の心臓部。巨大な影が大地を揺らした。",
						"chinese": "森林深处。巨大的黑影震撼了大地。",
						"french": "Au cœur de la forêt. Une ombre colossale fit trembler la terre.",
						"spanish": "El corazón del bosque. Una sombra colosal sacudió la tierra.",
						"vietnamese": "Trung tâm khu rừng. Một bóng tối khổng lồ làm rung chuyển mặt đất.",
						"thai": "ใจกลางป่า เงาขนาดมหึมาสั่นสะเทือนพื้นดิน",
						"hindi": "जंगल का हृदय। एक विशाल परछाई ने धरती को हिला दिया।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "흐흐흐… 어리석은 인간들. 이 숲은 이제 내 것이다.",
						"english": "Hehehe... Foolish humans. This forest is mine now.",
						"japanese": "フフフ…愚かな人間ども。この森は今や私のものだ。",
						"chinese": "呵呵呵…愚蠢的人类。这片森林现在是我的了。",
						"french": "Hahaha... Humains stupides. Cette forêt est mienne désormais.",
						"spanish": "Jejeje... Humanos estúpidos. Este bosque es mío ahora.",
						"vietnamese": "Hê hê hê… Loài người ngu xuẩn. Rừng này giờ là của ta.",
						"thai": "ฮึฮึฮึ… มนุษย์โง่เขลา ป่านี้เป็นของข้าแล้ว!",
						"hindi": "हीहीही… मूर्ख इंसानो। यह जंगल अब मेरा है।"
					}
				},
				{
					"content": {
						"korean": "모든 생명이 나를 위해 존재하게 될지니!",
						"english": "All life shall exist for me!",
						"japanese": "全ての生命は私のために存在することになるだろう！",
						"chinese": "所有生命都将为我而存在！",
						"french": "Toute vie existera pour moi !",
						"spanish": "¡Toda vida existirá para mí!",
						"vietnamese": "Mọi sinh linh sẽ tồn tại vì ta!",
						"thai": "สิ่งมีชีวิตทั้งหมดจะดำรงอยู่เพื่อข้า!",
						"hindi": "सभी जीवन मेरे लिए ही अस्तित्व में रहेंगे!"
					},
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…결국 네 짓이었어!",
						"english": "...So it was your doing after all!",
						"japanese": "…結局、お前の仕業だったのか！",
						"chinese": "…原来是你干的！",
						"french": "...C'était donc ton œuvre après tout !",
						"spanish": "¡...Así que fuiste tú, después de todo!",
						"vietnamese": "…Vậy ra là ngươi làm!",
						"thai": "…ในที่สุดก็เป็นฝีมือแก!",
						"hindi": "…आखिरकार यह तुम्हारा ही काम था!"
					},
					"speaker": "character_any"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "거대한 짐승의 발톱이 모든 것을 찢어발겼다.",
						"english": "The colossal beast's claws tore everything asunder.",
						"japanese": "巨獣の爪がすべてを引き裂いた。",
						"chinese": "巨兽的利爪撕裂了所有一切。",
						"french": "Les griffes de la bête gigantesque ont tout déchiré.",
						"spanish": "Las garras de la bestia gigante lo destrozaron todo.",
						"vietnamese": "Móng vuốt của quái thú khổng lồ đã xé nát mọi thứ.",
						"thai": "กรงเล็บของอสูรกายยักษ์ฉีกกระชากทุกสิ่ง",
						"hindi": "विशालकाय जानवर के पंजों ने सब कुछ तहस-नहस कर दिया।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "훗… 겨우 이 정도인가.",
						"english": "Hmph... Is this all?",
						"japanese": "フッ…たかがこの程度か。",
						"chinese": "哼…就这点程度吗？",
						"french": "Hmph... C'est tout ?",
						"spanish": "Hmph... ¿Eso es todo?",
						"vietnamese": "Hừm... Chỉ có vậy thôi sao?",
						"thai": "หึ… แค่นี้เองหรือ?",
						"hindi": "हूँ... बस इतना ही?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "…젠장! 아직 포기할 수 없어!",
						"english": "...Damn it! I can't give up yet!",
						"japanese": "…くそっ！まだ諦められない！",
						"chinese": "…该死！我不能放弃！",
						"french": "...Zut ! Je ne peux pas encore abandonner !",
						"spanish": "...¡Maldita sea! ¡No puedo rendirme todavía!",
						"vietnamese": "...Chết tiệt! Tôi vẫn chưa thể bỏ cuộc!",
						"thai": "...ให้ตายสิ! ฉันยังยอมแพ้ไม่ได้!",
						"hindi": "…धिक्कार है! मैं अभी हार नहीं मान सकता!"
					}
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "크하하… 날 쓰러뜨려도 소용없다…!",
						"english": "Hahaha... Defeating me is useless...!",
						"japanese": "クハハ…私を倒しても無駄だ…！",
						"chinese": "哈哈哈…打倒我也没用…！",
						"french": "Hahaha... Me vaincre est inutile...!",
						"spanish": "Jajaja... ¡Derrotarme es inútil...!",
						"vietnamese": "Khà khà… Đánh bại ta cũng vô ích thôi…!",
						"thai": "คึคึคึ… โค่นล้มข้าไปก็ไร้ประโยชน์…!",
						"hindi": "हाहाहा… मुझे हराना बेकार है…!"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "나는 그저, 더 거대한 존재의 일부일 뿐…",
						"english": "I am merely a part of a greater being...",
						"japanese": "私はただ、より巨大な存在の一部に過ぎない…",
						"chinese": "我不过是，更巨大存在的一部分罢了…",
						"french": "Je ne suis qu'une partie d'une entité plus grande...",
						"spanish": "Solo soy una parte de un ser mucho más grande...",
						"vietnamese": "Ta chỉ là một phần của một thực thể vĩ đại hơn mà thôi…",
						"thai": "ข้าเป็นเพียงส่วนหนึ่งของสิ่งมีชีวิตที่ยิ่งใหญ่กว่าเท่านั้น…",
						"hindi": "मैं तो बस, एक और भी विशाल सत्ता का एक हिस्सा मात्र हूँ…"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "뭐라고…?",
						"english": "What...?",
						"japanese": "なんだって…？",
						"chinese": "什么…？",
						"french": "Quoi...?",
						"spanish": "¿Qué...?",
						"vietnamese": "Cái gì...?",
						"thai": "อะไรนะ...?",
						"hindi": "क्या...?"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "쓰러진 거대한 괴물. 하지만 숲의 불안은 끝나지 않았다.",
						"english": "The giant monster fell. Yet, the forest's unease lingered.",
						"japanese": "巨獣は倒れた。しかし、森の不安は尽きなかった。",
						"chinese": "巨大的怪物倒下了。然而，森林的不安并未终结。",
						"french": "Le monstre géant est tombé. Cependant, l'inquiétude de la forêt persistait.",
						"spanish": "El monstruo gigante cayó. Sin embargo, la inquietud del bosque no cesó.",
						"vietnamese": "Quái vật khổng lồ đã gục ngã. Nhưng sự bất an của khu rừng vẫn chưa kết thúc.",
						"thai": "สัตว์ประหลาดยักษ์ล้มลงแล้ว แต่ความไม่สงบในป่ายังไม่จบสิ้น",
						"hindi": "विशालकाय राक्षस गिर गया। फिर भी, जंगल की अशांति समाप्त नहीं हुई।"
					}
				},
				{
					"content": {
						"korean": "더욱 깊은 곳에서, 진짜 그림자가 그들을 기다리고 있었다.",
						"english": "Deeper still, the true shadow awaited them.",
						"japanese": "さらに深い場所で、本当の影が彼らを待っていた。",
						"chinese": "更深之处，真正的阴影正在等待着他们。",
						"french": "Plus profondément, la véritable ombre les attendait.",
						"spanish": "En lo más profundo, la verdadera sombra los esperaba.",
						"vietnamese": "Sâu hơn nữa, bóng tối thật sự đang chờ đợi họ.",
						"thai": "ลึกเข้าไปอีก เงาที่แท้จริงกำลังรอพวกเขาอยู่",
						"hindi": "गहराई में, वास्तविक छाया उनका इंतजार कर रही थी।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"숲의 생명들이 비명을 지르기 시작했다.",
			"아름다운 위장 속에 감춰진 뒤틀린 진실.",
			"사냥꾼 시더는 잃어버린 동료들의 복수를 꿈꾼다.",
			"숲은 이미, 죽음의 노래를 부르고 있었다."
		],
		"english": [
			"The forest's life began to scream.",
			"A twisted truth hidden within a beautiful disguise.",
			"Hunter Cedar dreams of avenging lost comrades.",
			"The forest was already singing a song of death."
		],
		"japanese": [
			"森の命が叫び始めた。",
			"美しい偽装の中に隠された歪んだ真実。",
			"狩人シダーは、失った仲間たちの復讐を夢見る。",
			"森はすでに、死の歌を歌っていた。"
		],
		"chinese": [
			"森林里的生灵开始尖叫。",
			"隐藏在美丽伪装下的扭曲真相。",
			"猎人西达梦想着为失去的同伴复仇。",
			"森林早已唱起了死亡之歌。"
		],
		"french": [
			"Les créatures de la forêt commencèrent à hurler.",
			"Une vérité tordue cachée sous un beau déguisement.",
			"Le chasseur Cedar rêve de venger ses compagnons perdus.",
			"La forêt chantait déjà le chant de la mort."
		],
		"spanish": [
			"Las vidas del bosque comenzaron a gritar.",
			"Una verdad retorcida oculta bajo un hermoso disfraz.",
			"El cazador Cedar sueña con vengar a sus camaradas perdidos.",
			"El bosque ya cantaba la canción de la muerte."
		],
		"vietnamese": [
			"Sự sống trong rừng bắt đầu gào thét.",
			"Một sự thật méo mó ẩn giấu trong vỏ bọc tuyệt đẹp.",
			"Thợ săn Cedar mơ ước trả thù cho những đồng đội đã mất.",
			"Rừng đã hát một bài ca tử thần."
		],
		"thai": [
			"สิ่งมีชีวิตในป่าเริ่มกรีดร้อง",
			"ความจริงบิดเบี้ยวที่ซ่อนอยู่ในคราบปลอมอันงดงาม",
			"ฮันเตอร์ซีดาร์ฝันถึงการแก้แค้นให้เพื่อนร่วมทีมที่หายไป",
			"ป่ากำลังขับขานบทเพลงแห่งความตายอยู่แล้ว"
		],
		"hindi": [
			"जंगल के जीव चीखने लगे थे।",
			"एक सुंदर भेष में छिपा एक विकृत सच।",
			"शिकारी सीडर अपने खोए हुए साथियों का बदला लेने का सपना देखता है।",
			"जंगल पहले ही मौत का गीत गा रहा था।"
		]
	}
} as const;
