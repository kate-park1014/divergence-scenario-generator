export const scenario_hell_playlord_6_02 = {
	"scenario_id": "hell_playlord_6_02",
	"order": 2,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"brim": {
			"id": "mon_d7f57824-190d-40b9-93d1-66c658f0441f",
			"name": {
				"korean": "브림",
				"english": "Brim",
				"japanese": "ブリム",
				"chinese": "布里姆",
				"french": "Brim",
				"spanish": "Brim",
				"vietnamese": "Brim",
				"thai": "บริม",
				"hindi": "ब्रिम"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/08ad0e4d-214d-43b3-dc3e-ddfba9049300/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/16f1def2-7c33-4558-4b21-9c3e87fa3e00/public"
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
					"content": {
						"korean": "지옥은 더욱 깊은 광란에 빠져들었다. 악마들은 끝없는 파티를 벌였다.",
						"english": "Hell plunged into deeper madness. The demons threw an endless party.",
						"japanese": "地獄はさらに深い狂乱に陥った。悪魔たちは終わりのない宴を開いた。",
						"chinese": "地狱陷入了更深的狂乱。恶魔们举行了一场无止境的派对。",
						"french": "L'Enfer a plongé dans une folie plus profonde. Les démons faisaient la fête sans fin.",
						"spanish": "El Infierno se sumergió en una locura más profunda. Los demonios organizaron una fiesta interminable.",
						"vietnamese": "Địa Ngục chìm sâu hơn vào sự điên loạn. Quỷ dữ mở một bữa tiệc bất tận.",
						"thai": "นรกตกอยู่ในความบ้าคลั่งที่ลึกซึ้งยิ่งขึ้น ปีศาจจัดปาร์ตี้ไม่รู้จบ",
						"hindi": "नर्क गहरे उन्माद में डूब गया। राक्षसों ने एक अंतहीन पार्टी की।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이게 대체… 무슨 난리야?",
						"english": "What in… what in the world is going on?",
						"japanese": "一体…何の騒ぎだ？",
						"chinese": "这到底…是怎么回事？",
						"french": "Mais qu'est-ce que… qu'est-ce que c'est que ce chaos ?",
						"spanish": "¿Pero qué… qué demonios está pasando?",
						"vietnamese": "Cái quái gì… chuyện gì đang xảy ra vậy?",
						"thai": "นี่มัน…เกิดอะไรขึ้นเนี่ย?",
						"hindi": "यह सब… क्या बखेड़ा है?"
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						2
					],
					"speaker": "brim"
				},
				{
					"speaker": "brim",
					"emotion": "base",
					"content": {
						"korean": "느껴져. 이 장난감에서 나오는 기운이 점점 강해지고 있어.",
						"english": "I feel it. The aura from this toy is growing stronger.",
						"japanese": "感じる。このおもちゃから出る気がどんどん強くなっている。",
						"chinese": "我感觉到了。这玩具散发出的气息越来越强了。",
						"french": "Je le sens. L'aura de ce jouet devient de plus en plus forte.",
						"spanish": "Lo siento. El aura de este juguete se está volviendo cada vez más fuerte.",
						"vietnamese": "Tôi cảm thấy. Năng lượng từ món đồ chơi này đang mạnh lên.",
						"thai": "ฉันรู้สึกได้ พลังงานจากของเล่นชิ้นนี้กำลังแข็งแกร่งขึ้นเรื่อยๆ",
						"hindi": "मैं इसे महसूस करता हूँ। इस खिलौने से निकलने वाली आभा और मजबूत हो रही है।"
					},
					"type": "speech"
				},
				{
					"speaker": "brim",
					"type": "speech",
					"content": {
						"korean": "이건 단순한 마력이 아니야. 더 원초적인, 중독성 있는…",
						"english": "This isn't just magic. It's something more primal, addictive…",
						"japanese": "これはただの魔力じゃない。もっと根源的で、中毒性のある…",
						"chinese": "这不仅仅是魔力。它更原始，更具成瘾性…",
						"french": "Ce n'est pas une simple magie. C'est quelque chose de plus primaire, d'addictif…",
						"spanish": "Esto no es solo magia. Es algo más primario, adictivo…",
						"vietnamese": "Đây không chỉ là ma lực. Nó còn nguyên thủy hơn, gây nghiện…",
						"thai": "นี่ไม่ใช่แค่เวทมนตร์ มันเป็นสิ่งที่ดั้งเดิมกว่า น่าติดยา…",
						"hindi": "यह सिर्फ जादू नहीं है। यह अधिक आदिम, व्यसनकारी है…"
					},
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "brim",
					"action": "enter"
				},
				{
					"speaker": "brim",
					"content": {
						"korean": "악마들이 이 장난감에 홀린 듯해.",
						"english": "The demons seem enchanted by this toy.",
						"japanese": "悪魔たちがこのおもちゃに魅入られているようだ。",
						"chinese": "恶魔们似乎被这玩具迷住了。",
						"french": "Les démons semblent enchantés par ce jouet.",
						"spanish": "Los demonios parecen hechizados por este juguete.",
						"vietnamese": "Bọn quỷ dường như bị mê hoặc bởi món đồ chơi này.",
						"thai": "ปีศาจดูเหมือนจะหลงใหลในของเล่นชิ้นนี้",
						"hindi": "राक्षस इस खिलौने से मोहित लगते हैं।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "홀렸다고? 그냥 미친 거 아니야?",
						"english": "Enchanted? Aren't they just crazy?",
						"japanese": "魅入られたって？ただ狂ってるだけじゃないのか？",
						"chinese": "迷住了？他们不是疯了吗？",
						"french": "Enchantés ? Ne sont-ils pas juste fous ?",
						"spanish": "¿Hechizados? ¿No están simplemente locos?",
						"vietnamese": "Bị mê hoặc? Chẳng phải chúng chỉ điên thôi sao?",
						"thai": "หลงใหลเหรอ? พวกมันแค่บ้าไปแล้วไม่ใช่เหรอ?",
						"hindi": "मोहित? क्या वे सिर्फ पागल नहीं हैं?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "brim",
					"type": "speech",
					"content": {
						"korean": "아니, 이건 쾌락이야. 뇌를 마비시키는, 우주적인 중독성.",
						"english": "No, this is pleasure. Brain-numbing, cosmically addictive.",
						"japanese": "いや、これは快楽だ。脳を麻痺させる、宇宙的な中毒性。",
						"chinese": "不，这是快乐。麻痹大脑，宇宙般的成瘾性。",
						"french": "Non, c'est du plaisir. Une dépendance cosmique qui engourdit le cerveau.",
						"spanish": "No, esto es placer. Adicción cósmica que adormece el cerebro.",
						"vietnamese": "Không, đây là khoái cảm. Gây tê não, một sự nghiện ngập mang tính vũ trụ.",
						"thai": "ไม่สิ นี่คือความสุข. ความสุขที่ทำให้สมองชา และเสพติดระดับจักรวาล",
						"hindi": "नहीं, यह आनंद है। मस्तिष्क को सुन्न करने वाली, ब्रह्मांडीय लत।"
					},
					"emotion": "base"
				},
				{
					"speaker": "brim",
					"content": {
						"korean": "마치… 우주 캣닢 같아.",
						"english": "It's like… cosmic catnip.",
						"japanese": "まるで… 宇宙のまたたびのようだ。",
						"chinese": "就像……宇宙猫薄荷。",
						"french": "C'est comme… de l'herbe à chat cosmique.",
						"spanish": "Es como… hierba gatera cósmica.",
						"vietnamese": "Giống như… cỏ mèo vũ trụ vậy.",
						"thai": "เหมือน… แคทนิปจากอวกาศ",
						"hindi": "जैसे… ब्रह्मांडीय कैटनिप।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						2,
						2
					],
					"speaker": "brim",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "봐. 이 장난감 표면의 문양을.",
						"english": "Look. At the patterns on this toy's surface.",
						"japanese": "見ろ。このおもちゃの表面の模様を。",
						"chinese": "看。这个玩具表面的图案。",
						"french": "Regarde. Les motifs à la surface de ce jouet.",
						"spanish": "Mira. Los patrones en la superficie de este juguete.",
						"vietnamese": "Nhìn đi. Những họa tiết trên bề mặt món đồ chơi này.",
						"thai": "ดูสิ ลวดลายบนพื้นผิวของเล่นชิ้นนี้",
						"hindi": "देखो। इस खिलौने की सतह पर बने पैटर्न को।"
					},
					"speaker": "brim"
				},
				{
					"type": "speech",
					"content": {
						"korean": "흐릿해서 잘 안 보이는데…",
						"english": "It's blurry, hard to see…",
						"japanese": "ぼやけててよく見えないけど…",
						"chinese": "模糊不清，看不太清楚……",
						"french": "C'est flou, on ne voit pas bien…",
						"spanish": "Está borroso, cuesta ver…",
						"vietnamese": "Mờ quá, không nhìn rõ…",
						"thai": "มันเบลอจนมองไม่เห็นชัดเจน…",
						"hindi": "धुंधला है, ठीक से दिख नहीं रहा…"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "brim",
					"content": {
						"korean": "이건 지옥의 것이 아니야. 저 멀리 우주에서 온 흔적이야.",
						"english": "This isn't from hell. It's a trace from far-off space.",
						"japanese": "これは地獄のものではない。遠い宇宙から来た痕跡だ。",
						"chinese": "这不是来自地狱的东西。这是来自遥远宇宙的痕迹。",
						"french": "Ce n'est pas de l'enfer. C'est une trace venue de l'espace lointain.",
						"spanish": "Esto no es del infierno. Es un rastro del espacio lejano.",
						"vietnamese": "Đây không phải của địa ngục. Đây là dấu vết từ vũ trụ xa xôi.",
						"thai": "นี่ไม่ใช่ของนรก. นี่คือร่องรอยจากอวกาศอันไกลโพ้น",
						"hindi": "यह नरक का नहीं है। यह सुदूर अंतरिक्ष से आया निशान है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "일부 악마들은 장난감 앞에서 기이한 숭배 의식을 반복하고 있었다.",
						"english": "Some demons were repeating strange worship rituals in front of the toy.",
						"japanese": "一部の悪魔たちは、おもちゃの前で奇妙な崇拝の儀式を繰り返していた。",
						"chinese": "一些恶魔在玩具前重复着奇怪的崇拜仪式。",
						"french": "Certains démons répétaient d'étranges rituels d'adoration devant le jouet.",
						"spanish": "Algunos demonios repetían extraños rituales de adoración frente al juguete.",
						"vietnamese": "Một số ác quỷ đang lặp lại những nghi lễ sùng bái kỳ lạ trước món đồ chơi.",
						"thai": "ปีศาจบางตัวกำลังทำพิธีกรรมบูชาแปลกประหลาดซ้ำๆ อยู่หน้าของเล่น",
						"hindi": "कुछ राक्षस खिलौने के सामने अजीब पूजा अनुष्ठान दोहरा रहे थे।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이 장난감… 점점 더 불쾌해져.",
						"english": "This toy… it's getting more and more unsettling.",
						"japanese": "このおもちゃ… どんどん不快になっていく。",
						"chinese": "这个玩具……越来越令人不适。",
						"french": "Ce jouet… devient de plus en plus désagréable.",
						"spanish": "Este juguete… se vuelve cada vez más desagradable.",
						"vietnamese": "Món đồ chơi này… ngày càng khó chịu hơn.",
						"thai": "ของเล่นชิ้นนี้… ยิ่งนานยิ่งรู้สึกไม่สบายใจ",
						"hindi": "यह खिलौना… और भी अप्रिय होता जा रहा है।"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "brim",
					"spot": [
						1,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "brim",
					"type": "speech",
					"content": {
						"korean": "이 앞은 더욱 위험해. 기운이 폭주하고 있어.",
						"english": "It's more dangerous ahead. The energy is raging out of control.",
						"japanese": "この先はさらに危険だ。気が暴走している。",
						"chinese": "前面更危险。气息正在暴走。",
						"french": "C'est encore plus dangereux devant. L'énergie est en train de déborder.",
						"spanish": "Más adelante es aún más peligroso. La energía está descontrolada.",
						"vietnamese": "Phía trước còn nguy hiểm hơn. Năng lượng đang cuồng loạn.",
						"thai": "ข้างหน้าอันตรายยิ่งขึ้นไปอีก พลังงานกำลังบ้าคลั่ง",
						"hindi": "आगे और भी खतरा है। ऊर्जा बेकाबू हो रही है।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "우린 멈출 수 없어. 이 모든 것의 근원을 알아야 해.",
						"english": "We can't stop. We need to know the source of all this.",
						"japanese": "我々は止まることはできない。この全ての根源を知らねばならない。",
						"chinese": "我们不能停。必须查明这一切的根源。",
						"french": "On ne peut pas s'arrêter. Nous devons connaître l'origine de tout ça.",
						"spanish": "No podemos detenernos. Necesitamos saber la fuente de todo esto.",
						"vietnamese": "Chúng ta không thể dừng lại. Phải tìm ra nguồn gốc của tất cả những điều này.",
						"thai": "เราหยุดไม่ได้ เราต้องรู้ต้นตอของเรื่องทั้งหมดนี้",
						"hindi": "हम रुक नहीं सकते। हमें इन सबका स्रोत जानना होगा।"
					},
					"emotion": "base"
				},
				{
					"speaker": "brim",
					"content": {
						"korean": "가끔… 알 수 없는 울음소리가 들려. 악마의 것은 아니야.",
						"english": "Sometimes… I hear an unknown cry. It's not demonic.",
						"japanese": "時々… 知らない泣き声が聞こえる。悪魔のものではない。",
						"chinese": "有时……能听到未知的哭声。那不是恶魔的声音。",
						"french": "Parfois… j'entends un cri inconnu. Ce n'est pas celui d'un démon.",
						"spanish": "A veces… oigo un llanto desconocido. No es demoníaco.",
						"vietnamese": "Đôi khi… tôi nghe thấy tiếng khóc không rõ. Không phải của ác quỷ.",
						"thai": "บางครั้ง… ได้ยินเสียงร้องที่ไม่รู้จัก ไม่ใช่เสียงของปีศาจ",
						"hindi": "कभी-कभी… एक अज्ञात रोने की आवाज सुनाई देती है। वह शैतानी नहीं है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…계속 가자.",
						"english": "...Let's keep going.",
						"japanese": "「…続けて行こう。」",
						"chinese": "“……继续前进。”",
						"french": "« ...Continuons. »",
						"spanish": "« ...Sigamos. »",
						"vietnamese": "...Hãy tiếp tục.",
						"thai": "...ไปต่อเถอะ.",
						"hindi": "...चलो, आगे बढ़ें।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "하찮은 것들. 너희는 그저 재미있는 도구일 뿐.",
						"english": "Insignificant wretches. You are merely amusing tools.",
						"japanese": "「くだらない奴らめ。お前たちはただの面白い道具にすぎない。」",
						"chinese": "“卑微的家伙们。你们不过是有趣的工具而已。”",
						"french": "« Créatures insignifiantes. Vous n'êtes que d'amusants outils. »",
						"spanish": "« Criaturas insignificantes. Sois meras herramientas divertidas. »",
						"vietnamese": "Những thứ tầm thường. Ngươi chỉ là công cụ giải trí mà thôi.",
						"thai": "พวกไร้ค่า พวกเจ้าเป็นแค่เครื่องมือสนุกๆ เท่านั้น.",
						"hindi": "तुच्छ प्राणी। तुम बस मनोरंजक उपकरण हो।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "…아직 끝나지 않았다. 우린 포기하지 않아!",
						"english": "...It's not over yet. We won't give up!",
						"japanese": "…まだ終わっていない。諦めない！",
						"chinese": "…还没结束。我们不会放弃！",
						"french": "...Ce n'est pas encore fini. Nous n'abandonnerons pas !",
						"spanish": "...Aún no ha terminado. ¡No nos rendiremos!",
						"vietnamese": "...Vẫn chưa kết thúc. Chúng tôi sẽ không bỏ cuộc!",
						"thai": "...ยังไม่จบ เราไม่ยอมแพ้!",
						"hindi": "...अभी खत्म नहीं हुआ है। हम हार नहीं मानेंगे!"
					},
					"speaker": "character_any"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "크크… 겨우 이 정도에 만족하는가?",
						"english": "Heh heh... Are you satisfied with just this?",
						"japanese": "「クク…たったこれっぽっちで満足するのか？」",
						"chinese": "“呵呵……仅仅这样你就满足了吗？”",
						"french": "« Hé hé... Es-tu satisfait de si peu ? »",
						"spanish": "« Je je... ¿Te satisfaces con tan poco? »",
						"vietnamese": "Hahaha... Ngươi chỉ thỏa mãn với chừng này thôi sao?",
						"thai": "ฮึ่มๆ... แค่นี้ก็พอใจแล้วงั้นหรือ?",
						"hindi": "हाहा... क्या तुम बस इतने से संतुष्ट हो?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이건 시작에 불과해. 진짜 '놀이'는 지금부터다.",
						"english": "This is just the beginning. The real 'game' starts now.",
						"japanese": "「これは始まりに過ぎない。本当の『遊び』はこれからだ。」",
						"chinese": "“这只是个开始。真正的‘游戏’现在才开始。”",
						"french": "« Ce n'est que le début. Le vrai 'jeu' commence maintenant. »",
						"spanish": "« Esto es solo el principio. El verdadero 'juego' empieza ahora. »",
						"vietnamese": "Đây chỉ là khởi đầu. 'Trò chơi' thật sự bắt đầu từ bây giờ.",
						"thai": "นี่เป็นแค่จุดเริ่มต้น 'การเล่น' ที่แท้จริงกำลังจะเริ่มขึ้นตอนนี้.",
						"hindi": "यह तो बस शुरुआत है। असली 'खेल' अब शुरू होता है।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "무슨 소리야? 너는 누구지?",
						"english": "What are you talking about? Who are you?",
						"japanese": "「何を言っているんだ？お前は誰だ？」",
						"chinese": "“你在说什么？你是谁？”",
						"french": "« De quoi parles-tu ? Qui es-tu ? »",
						"spanish": "« ¿De qué hablas? ¿Quién eres? »",
						"vietnamese": "Ngươi đang nói gì vậy? Ngươi là ai?",
						"thai": "แกพูดอะไร? แกเป็นใคร?",
						"hindi": "तुम क्या कह रहे हो? तुम कौन हो?"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "장난감은 더욱 깊은 우주적 미스터리를 품고 있었다. 탐험대는 진실을 향해 나아갔다.",
						"english": "The toy held deeper cosmic mysteries. The expedition advanced towards the truth.",
						"japanese": "「おもちゃはさらに深遠な宇宙的謎を秘めていた。探検隊は真実へと向かった。」",
						"chinese": "“这个玩具蕴含着更深层次的宇宙奥秘。探险队向真相迈进。”",
						"french": "« Le jouet contenait des mystères cosmiques encore plus profonds. L'expédition avança vers la vérité. »",
						"spanish": "« El juguete albergaba misterios cósmicos aún más profundos. La expedición avanzó hacia la verdad. »",
						"vietnamese": "Món đồ chơi ẩn chứa những bí ẩn vũ trụ sâu sắc hơn. Đoàn thám hiểm tiến về phía sự thật.",
						"thai": "ของเล่นนั้นซ่อนเร้นความลึกลับระดับจักรวาลที่ลึกซึ้งยิ่งขึ้น คณะสำรวจมุ่งหน้าสู่ความจริง.",
						"hindi": "खिलौने में और भी गहरे ब्रह्मांडीय रहस्य छिपे थे। अभियान दल सत्य की ओर बढ़ा।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "정체 모를 거대한 그림자가 장난감 뒤에서 나타났다.",
						"english": "A colossal, unknown shadow emerged from behind the toys.",
						"japanese": "「正体不明の巨大な影が、おもちゃの背後から現れた。」",
						"chinese": "“一个巨大的、不明身份的影子从玩具后面出现了。”",
						"french": "« Une ombre colossale et inconnue apparut derrière les jouets. »",
						"spanish": "« Una sombra colosal y desconocida emergió de detrás de los juguetes. »",
						"vietnamese": "Một bóng tối khổng lồ, không rõ danh tính xuất hiện từ phía sau những món đồ chơi.",
						"thai": "เงาขนาดมหึมาที่ไม่รู้จักปรากฏขึ้นจากด้านหลังของเล่น.",
						"hindi": "खिलौनों के पीछे से एक विशाल, अज्ञात छाया प्रकट हुई।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "오, 새로운 장난감들이 왔군.",
						"english": "Oh, new toys have arrived.",
						"japanese": "「おお、新しいおもちゃたちが来たな。」",
						"chinese": "“哦，新的玩具来了。”",
						"french": "« Oh, de nouveaux jouets sont arrivés. »",
						"spanish": "« Oh, han llegado nuevos juguetes. »",
						"vietnamese": "Ồ, đồ chơi mới đã đến.",
						"thai": "โอ้ ของเล่นใหม่มาแล้ว.",
						"hindi": "ओह, नए खिलौने आ गए हैं।"
					},
					"speaker": "random_boss"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이 쾌락의 파티에 동참할 것인가, 아니면 부서질 것인가?",
						"english": "Will you join this party of pleasure, or be broken?",
						"japanese": "「この快楽の宴に参加するか、それとも壊されるか？」",
						"chinese": "“你将加入这场享乐派对，还是被粉碎？”",
						"french": "« Allez-vous rejoindre cette fête du plaisir, ou serez-vous brisé ? »",
						"spanish": "« ¿Te unirás a esta fiesta de placer, o serás destrozado? »",
						"vietnamese": "Ngươi sẽ tham gia bữa tiệc khoái lạc này, hay bị nghiền nát?",
						"thai": "เจ้าจะเข้าร่วมงานเลี้ยงแห่งความสุขนี้ หรือจะถูกทำลาย?",
						"hindi": "क्या तुम इस आनंद की पार्टी में शामिल होगे, या तोड़ दिए जाओगे?"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "네놈의 장난질은 여기서 끝이다!",
						"english": "Your games end here!",
						"japanese": "「貴様の悪戯はここまでだ！」",
						"chinese": "“你的把戏到此为止了！”",
						"french": "« Tes jeux se terminent ici ! »",
						"spanish": "« ¡Tus juegos terminan aquí! »",
						"vietnamese": "Trò đùa của ngươi kết thúc ở đây!",
						"thai": "การเล่นพิเรนทร์ของแกจะจบลงที่นี่แหละ!",
						"hindi": "तुम्हारे खेल यहीं खत्म होते हैं!"
					},
					"emotion": "angry"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"악마들의 광란은 멈추지 않았다.",
			"장난감에서 뿜어져 나오는 기운이 지옥을 뒤흔들었다.",
			"브림은 그 기원의 단서를 쫓았다.",
			"점점 더 기묘하고 불쾌한 진실이 드러났다."
		],
		"english": [
			"The demons' frenzy did not cease.",
			"The aura emanating from the toy shook Hell.",
			"Brim pursued clues to its origin.",
			"An increasingly bizarre and unpleasant truth was revealed."
		],
		"japanese": [
			"悪魔たちの狂乱は止まらなかった。",
			"おもちゃから放たれる気が地獄を揺るがした。",
			"ブリムはその起源の手がかりを追った。",
			"ますます奇妙で不快な真実が明らかになった。"
		],
		"chinese": [
			"恶魔们的狂乱没有停止。",
			"玩具中散发出的气息震撼了地狱。",
			"布里姆追寻着其起源的线索。",
			"一个越来越离奇且令人不快的真相被揭露。"
		],
		"french": [
			"La frénésie des démons ne s'est pas arrêtée.",
			"L'aura émanant du jouet a secoué l'Enfer.",
			"Brim a traqué les indices de son origine.",
			"Une vérité de plus en plus étrange et désagréable a été révélée."
		],
		"spanish": [
			"El frenesí de los demonios no cesó.",
			"El aura que emanaba del juguete sacudió el Infierno.",
			"Brim persiguió las pistas de su origen.",
			"Una verdad cada vez más extraña y desagradable fue revelada."
		],
		"vietnamese": [
			"Cơn cuồng loạn của quỷ dữ không ngừng lại.",
			"Năng lượng tỏa ra từ món đồ chơi làm rung chuyển Địa Ngục.",
			"Brim truy tìm manh mối về nguồn gốc của nó.",
			"Một sự thật ngày càng kỳ lạ và khó chịu đã được tiết lộ."
		],
		"thai": [
			"ความคลุ้มคลั่งของปีศาจไม่หยุดยั้ง",
			"พลังงานที่พุ่งออกมาจากของเล่นเขย่าขวัญนรก",
			"บรีมตามหาเบาะแสของต้นกำเนิด",
			"ความจริงที่แปลกประหลาดและไม่พึงประสงค์มากขึ้นได้ถูกเปิดเผย"
		],
		"hindi": [
			"राक्षसों का उन्माद नहीं रुका।",
			"खिलौने से निकलने वाली आभा ने नर्क को हिला दिया।",
			"ब्रीम ने इसके मूल के सुरागों का पीछा किया।",
			"एक अजीब और अप्रिय सत्य सामने आया।"
		]
	}
} as const;
