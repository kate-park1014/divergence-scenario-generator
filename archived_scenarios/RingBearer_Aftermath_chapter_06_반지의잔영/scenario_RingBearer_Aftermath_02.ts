export const scenario_RingBearer_Aftermath_02 = {
	"scenario_id": "RingBearer_Aftermath_02",
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
						"korean": "금이 간 거울들이 걸려있었다. 그 안에서 어른거리는 형상.",
						"english": "Cracked mirrors hung. A shimmering figure within them.",
						"japanese": "ひび割れた鏡が掛かっていた。その中で揺らめく形体。",
						"chinese": "挂着裂纹的镜子。其中晃动的身影。",
						"french": "Des miroirs fissurés pendaient. Une silhouette vacillante à l'intérieur.",
						"spanish": "Espejos agrietados colgaban. Una figura temblorosa en su interior.",
						"vietnamese": "Những tấm gương nứt nẻ treo lủng lẳng. Một hình bóng lấp lánh bên trong.",
						"thai": "กระจกเงาแตกร้าวแขวนอยู่ รูปร่างที่สั่นไหวอยู่ข้างใน",
						"hindi": "दरकते हुए दर्पण लटके थे। उनके भीतर एक कांपती हुई आकृति।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "으음… 불길한데.",
						"english": "Hmm... ominous.",
						"japanese": "うーん…不吉だね。",
						"chinese": "嗯…不吉利。",
						"french": "Hmm... C'est de mauvais augure.",
						"spanish": "Hmm... ominoso.",
						"vietnamese": "Ưm… điềm gở.",
						"thai": "อืม...ลางไม่ดีเลย",
						"hindi": "हम्म... अशुभ है।"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "brim",
					"spot": [
						5,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "호기심이 많은 분이시군요. 이 거울은 '아르카인의 축복'을 담고 있습니다.",
						"english": "You are very curious. This mirror holds 'Arcane's Blessing'.",
						"japanese": "好奇心旺盛な方ですね。この鏡は「アルカインの祝福」を宿しています。",
						"chinese": "您真是好奇心强。这面镜子蕴含着‘奥术的祝福’。",
						"french": "Vous êtes très curieux. Ce miroir contient la 'Bénédiction d'Arcane'.",
						"spanish": "Eres muy curioso. Este espejo contiene la 'Bendición de Arcane'.",
						"vietnamese": "Bạn thật tò mò. Chiếc gương này chứa đựng 'Phước lành của Arcane'.",
						"thai": "คุณช่างอยากรู้อยากเห็น กระจกบานนี้บรรจุ 'พรของอาร์เคน' ไว้",
						"hindi": "आप बहुत जिज्ञासु हैं। इस दर्पण में 'आर्केन का आशीर्वाद' है।"
					},
					"speaker": "brim",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "축복? 글쎄.",
						"english": "Blessing? I wonder.",
						"japanese": "祝福？さあね。",
						"chinese": "祝福？我怀疑。",
						"french": "Bénédiction ? Je ne sais pas.",
						"spanish": "¿Bendición? No lo sé.",
						"vietnamese": "Phước lành? Tôi không chắc.",
						"thai": "พรเหรอ? ฉันสงสัยนะ",
						"hindi": "आशीर्वाद? मुझे संदेह है।"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "brim",
					"spot": [
						5,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "brim",
					"content": {
						"korean": "당신 안에 잠재된 힘을 보세요. 거울이 진실을 비춰줄 겁니다.",
						"english": "See the power hidden within you. The mirror will show the truth.",
						"japanese": "あなたの中に秘められた力を見てください。鏡が真実を映し出すでしょう。",
						"chinese": "看看你内心潜在的力量。镜子会映照出真相。",
						"french": "Voyez la puissance latente en vous. Le miroir révélera la vérité.",
						"spanish": "Mira el poder latente dentro de ti. El espejo te mostrará la verdad.",
						"vietnamese": "Hãy nhìn sức mạnh tiềm ẩn bên trong bạn. Tấm gương sẽ phản chiếu sự thật.",
						"thai": "จงดูพลังที่ซ่อนอยู่ในตัวคุณ กระจกจะสะท้อนความจริง",
						"hindi": "अपने भीतर की छिपी हुई शक्ति देखें। दर्पण सत्य दिखाएगा।"
					}
				},
				{
					"content": {
						"korean": "진실은… 널 믿지 않는다는 거야.",
						"english": "The truth is... I don't trust you.",
						"japanese": "真実は… お前を信じないということだ。",
						"chinese": "真相是… 我不相信你。",
						"french": "La vérité est... je ne te fais pas confiance.",
						"spanish": "La verdad es... no confío en ti.",
						"vietnamese": "Sự thật là… tôi không tin bạn.",
						"thai": "ความจริงคือ...ฉันไม่เชื่อใจเธอ",
						"hindi": "सच यह है... कि मैं तुम पर विश्वास नहीं करता।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "어둠 속에서 알 수 없는 속삭임이 들렸다. 이따금 비명으로 변했다.",
						"english": "Unknown whispers echoed in the dark. Occasionally, they turned into screams.",
						"japanese": "闇の中で未知の囁きが聞こえた。時折、それは悲鳴に変わった。",
						"chinese": "黑暗中传来未知的低语。偶尔，它们变成了尖叫。",
						"french": "Des murmures inconnus résonnaient dans l'obscurité. Parfois, ils se transformaient en cris.",
						"spanish": "Susurros desconocidos resonaron en la oscuridad. De vez en cuando, se convertían en gritos.",
						"vietnamese": "Những tiếng thì thầm không rõ vang vọng trong bóng tối. Thỉnh thoảng, chúng biến thành tiếng hét.",
						"thai": "เสียงกระซิบที่ไม่รู้จักสะท้อนในความมืด บางครั้งมันก็กลายเป็นเสียงกรีดร้อง",
						"hindi": "अंधेरे में अज्ञात फुसफुसाहटें गूँज रही थीं। कभी-कभी, वे चीखों में बदल जाती थीं।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이 소리는… 뭐야?",
						"english": "What is that sound...?",
						"japanese": "この音は…何だ？",
						"chinese": "这声音……是什么？",
						"french": "C'est quoi ce son… ?",
						"spanish": "¿Qué es este sonido…?",
						"vietnamese": "Tiếng này... là gì vậy?",
						"thai": "เสียงนี่... คืออะไร?",
						"hindi": "यह आवाज़... क्या है?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "brim",
					"content": {
						"korean": "아르카인 님이 당신을 부르는 소리입니다. 영원한 힘을 주시려고.",
						"english": "It's the voice of Lord Arcane calling you. To grant you eternal power.",
						"japanese": "アルカイン様があなたを呼ぶ声です。永遠の力を授けるために。",
						"chinese": "这是阿凯恩大人在呼唤您。为了赐予您永恒的力量。",
						"french": "C'est la voix de Seigneur Arcane qui vous appelle. Pour vous accorder un pouvoir éternel.",
						"spanish": "Es la voz de Lord Arcane llamándote. Para otorgarte poder eterno.",
						"vietnamese": "Đó là tiếng của Chúa Arcane gọi bạn. Để ban cho bạn sức mạnh vĩnh cửu.",
						"thai": "เป็นเสียงของท่านอาร์เคนกำลังเรียกท่าน เพื่อมอบพลังอันเป็นนิรันดร์ให้แก่ท่าน",
						"hindi": "यह लॉर्ड अर्केन की आवाज़ है जो आपको बुला रहे हैं। आपको शाश्वत शक्ति प्रदान करने के लिए।"
					},
					"type": "speech",
					"emotion": "happy"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "brim",
					"spot": [
						5,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "아르카인 님의 일부가 되는 건 특권입니다. 영원히 함께하는 거죠.",
						"english": "Becoming a part of Lord Arcane is a privilege. To be together forever.",
						"japanese": "アルカイン様の一部となるのは特権です。永遠に共にいるのですよ。",
						"chinese": "成为阿凯恩大人的一部分是种特权。与您永恒相伴。",
						"french": "Faire partie de Seigneur Arcane est un privilège. Pour être ensemble pour toujours.",
						"spanish": "Formar parte de Lord Arcane es un privilegio. Para estar juntos para siempre.",
						"vietnamese": "Trở thành một phần của Chúa Arcane là một đặc ân. Để mãi mãi ở bên nhau.",
						"thai": "การได้เป็นส่วนหนึ่งของท่านอาร์เคนคืออภิสิทธิ์ เพื่อที่จะได้อยู่ร่วมกันชั่วนิรันดร์",
						"hindi": "लॉर्ड अर्केन का हिस्सा बनना एक सौभाग्य है। हमेशा के लिए साथ रहना।"
					},
					"speaker": "brim"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "난 나의 의지로 움직여.",
						"english": "I move by my own will.",
						"japanese": "私は自分の意志で動く。",
						"chinese": "我凭自己的意志行事。",
						"french": "Je me meus par ma propre volonté.",
						"spanish": "Me muevo por mi propia voluntad.",
						"vietnamese": "Tôi hành động theo ý chí của mình.",
						"thai": "ฉันเคลื่อนไหวด้วยเจตจำนงของตัวเอง",
						"hindi": "मैं अपनी इच्छा से चलता हूँ।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "회랑의 특정 지점들이 끊임없이 반복되는 듯한 기시감이 들었다.",
						"english": "I had a sense of déjà vu, as if certain points in the corridor were endlessly repeating.",
						"japanese": "回廊の特定の地点が絶え間なく繰り返されているようなデジャヴを感じた。",
						"chinese": "我有一种似曾相识的感觉，仿佛走廊的某些点在无休止地重复。",
						"french": "J'ai eu un sentiment de déjà-vu, comme si certains points du couloir se répétaient sans fin.",
						"spanish": "Tuve una sensación de déjà vu, como si ciertos puntos del corredor se repitieran sin cesar.",
						"vietnamese": "Tôi có cảm giác déjà vu, như thể những điểm nhất định trong hành lang đang lặp đi lặp lại không ngừng.",
						"thai": "ฉันมีความรู้สึกว่าเคยเห็นมาก่อน เหมือนกับว่าบางจุดในทางเดินกำลังวนซ้ำไม่รู้จบ",
						"hindi": "मुझे डेजा वु की भावना हुई, जैसे गलियारे के कुछ बिंदु अंतहीन रूप से दोहरा रहे थे।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "당신의 그림자… 거울이 당신을 시험할 겁니다.",
						"english": "Your shadow... the mirror will test you.",
						"japanese": "あなたの影… 鏡があなたを試すでしょう。",
						"chinese": "你的影子……镜子将考验你。",
						"french": "Votre ombre… le miroir vous mettra à l'épreuve.",
						"spanish": "Tu sombra… el espejo te pondrá a prueba.",
						"vietnamese": "Bóng của bạn... gương sẽ thử thách bạn.",
						"thai": "เงาของท่าน... กระจกจะทดสอบท่าน",
						"hindi": "आपकी परछाई... दर्पण आपको परखेगा।"
					},
					"speaker": "brim",
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						5,
						2
					],
					"speaker": "brim",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "brim",
					"content": {
						"korean": "아르카인 님은 모든 것을 알고 계십니다. 당신의 모든 면을.",
						"english": "Lord Arcane knows everything. Every facet of you.",
						"japanese": "アルカイン様は全てを知っておられます。あなたのあらゆる側面を。",
						"chinese": "阿凯恩大人无所不知。您的一切，他都了如指掌。",
						"french": "Seigneur Arcane sait tout. Chaque facette de vous.",
						"spanish": "Lord Arcane lo sabe todo. Cada faceta de ti.",
						"vietnamese": "Chúa Arcane biết mọi thứ. Mọi khía cạnh của bạn.",
						"thai": "ท่านอาร์เคนทรงรู้ทุกสิ่ง ทุกแง่มุมของท่าน",
						"hindi": "लॉर्ड अर्केन सब कुछ जानते हैं। आपके हर पहलू को।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "헛소리 마!",
						"english": "Stop spouting nonsense!",
						"japanese": "くだらないことを言うな！",
						"chinese": "别胡说八道！",
						"french": "Arrêtez vos bêtises !",
						"spanish": "¡Deja de decir tonterías!",
						"vietnamese": "Đừng nói nhảm!",
						"thai": "หยุดพูดไร้สาระ!",
						"hindi": "बकवास बंद करो!"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "brim",
					"content": {
						"korean": "거울은 거짓말을 하지 않아요. 당신의 또 다른 자신이 기다립니다.",
						"english": "The mirror does not lie. Your other self awaits.",
						"japanese": "鏡は嘘をつかない。あなたのもう一人の自分が待っています。",
						"chinese": "镜子不会说谎。另一个你正在等待。",
						"french": "Le miroir ne ment pas. Votre autre vous attend.",
						"spanish": "El espejo no miente. Tu otro yo te espera.",
						"vietnamese": "Gương không nói dối. Bản thể khác của bạn đang chờ đợi.",
						"thai": "กระจกไม่โกหก ตัวตนอีกด้านของท่านกำลังรออยู่",
						"hindi": "दर्पण झूठ नहीं बोलता। आपका दूसरा स्व इंतजार कर रहा है।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "그게… 너의 진정한 모습이구나.",
						"english": "So that's... your true form.",
						"japanese": "それが…君の本当の姿なのか。",
						"chinese": "那就是…你的真实面貌啊。",
						"french": "C'est donc ça... ta vraie forme.",
						"spanish": "Así que... esa es tu verdadera forma.",
						"vietnamese": "Đó… là hình dạng thật của ngươi.",
						"thai": "นั่น... คือร่างที่แท้จริงของเจ้าสินะ",
						"hindi": "तो... यह तुम्हारा असली रूप है।"
					},
					"speaker": "character_1"
				},
				{
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "곧 당신도 깨닫게 될 겁니다. 이 모든 것이 아르카인 님의 뜻이라는 것을.",
						"english": "Soon you will realize. All of this is Arcane's will.",
						"japanese": "いずれあなたも気づくでしょう。この全てがアルカイン様の御心であることに。",
						"chinese": "很快你也会明白的。这一切都是阿卡因大人的旨意。",
						"french": "Bientôt, vous réaliserez. Tout cela est la volonté d'Arcane.",
						"spanish": "Pronto te darás cuenta. Todo esto es la voluntad de Arcaín.",
						"vietnamese": "Ngươi sẽ sớm nhận ra thôi. Tất cả đây đều là ý muốn của Arcane.",
						"thai": "ไม่ช้าเจ้าก็จะตระหนักได้ ว่าทั้งหมดนี้คือพระประสงค์ของท่านอาร์เคน",
						"hindi": "जल्द ही तुम भी समझ जाओगे। यह सब अरकेन की इच्छा है।"
					},
					"speaker": "brim"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "…나는 사라지지 않아. 네 안에… 영원히…",
						"english": "...I won't disappear. Inside you... forever...",
						"japanese": "…私は消えない。お前の中に…永遠に…",
						"chinese": "…我不会消失。在你体内…永远…",
						"french": "...Je ne disparaîtrai pas. En toi... pour toujours...",
						"spanish": "...No desapareceré. Dentro de ti... para siempre...",
						"vietnamese": "…Ta sẽ không biến mất. Trong ngươi… mãi mãi…",
						"thai": "...ข้าจะไม่หายไป. ในตัวเจ้า... ตลอดกาล...",
						"hindi": "...मैं गायब नहीं होऊँगा। तुम्हारे अंदर... हमेशा..."
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "비켜! 난 너에게 잠식되지 않아!",
						"english": "Get away! I won't be consumed by you!",
						"japanese": "退け！お前になど侵食されない！",
						"chinese": "让开！我不会被你吞噬！",
						"french": "Écarte-toi ! Je ne me laisserai pas consumer par toi !",
						"spanish": "¡Apártate! ¡No seré consumido por ti!",
						"vietnamese": "Tránh ra! Ta sẽ không bị ngươi nuốt chửng!",
						"thai": "ออกไป! ข้าจะไม่ถูกกลืนกินโดยเจ้า!",
						"hindi": "हट जाओ! मैं तुम्हारे द्वारा खाया नहीं जाऊँगा!"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "거울 속 그림자는 산산이 부서졌다. 그러나 그 파편들은 여전히 빛나고 있었다.",
						"english": "The shadow in the mirror shattered, yet its fragments still glowed.",
						"japanese": "鏡の中の影は粉々に砕け散った。しかし、その破片はまだ輝いていた。",
						"chinese": "镜中的影子碎裂了。然而，那些碎片仍在闪耀。",
						"french": "L'ombre dans le miroir s'est brisée en mille morceaux. Pourtant, ses fragments brillaient encore.",
						"spanish": "La sombra en el espejo se hizo añicos. Sin embargo, sus fragmentos aún brillaban.",
						"vietnamese": "Bóng tối trong gương vỡ tan tành. Nhưng những mảnh vỡ đó vẫn lấp lánh.",
						"thai": "เงาในกระจกแตกละเอียด แต่เศษเสี้ยวของมันยังคงส่องประกาย",
						"hindi": "दर्पण में छाया टूट गई। फिर भी, उसके टुकड़े चमक रहे थे।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "아르카인의 저주는 끝나지 않았다. 그저… 더 깊숙이 스며들 뿐.",
						"english": "Arcane's curse wasn't over. It merely... seeped deeper.",
						"japanese": "アルカインの呪いは終わっていなかった。ただ…もっと深く染み込むだけだ。",
						"chinese": "奥术的诅咒并未结束。它只是…渗透得更深了。",
						"french": "La malédiction d'Arcane n'était pas terminée. Elle s'est juste... infiltrée plus profondément.",
						"spanish": "La maldición de Arcane no había terminado. Simplemente... se filtró más profundo.",
						"vietnamese": "Lời nguyền của Arcane chưa kết thúc. Nó chỉ… thấm sâu hơn mà thôi.",
						"thai": "คำสาปของอาร์เคนยังไม่จบลง มันแค่… แทรกซึมลึกขึ้นเท่านั้น",
						"hindi": "आर्केन का अभिशाप खत्म नहीं हुआ था। यह बस... और गहरा होता चला गया।"
					}
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "결국… 너도 나의 일부가 될 뿐이다.",
						"english": "In the end... you too shall merely become a part of me.",
						"japanese": "結局…お前も私の Mibun の一部になるだけだ。",
						"chinese": "最终…你也会成为我的一部分。",
						"french": "Au final... toi aussi, tu ne seras qu'une partie de moi.",
						"spanish": "Al final... tú también serás solo una parte de mí.",
						"vietnamese": "Cuối cùng… ngươi cũng sẽ chỉ trở thành một phần của ta mà thôi.",
						"thai": "ในที่สุด… เจ้าก็จะกลายเป็นส่วนหนึ่งของข้า",
						"hindi": "अंत में... तुम भी मेरे एक हिस्से मात्र बन जाओगे।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "으윽… 아직… 끝나지 않았어!",
						"english": "Ugh... it's not... over yet!",
						"japanese": "うぐっ…まだ…終わってない！",
						"chinese": "呃啊…还没…结束！",
						"french": "Urgh... ce n'est pas... encore fini !",
						"spanish": "Ugh... ¡todavía no... ha terminado!",
						"vietnamese": "Ư… vẫn… chưa kết thúc!",
						"thai": "อึก… ยัง… ไม่จบ!",
						"hindi": "उफ़... अभी... खत्म नहीं हुआ!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "저항은 무의미하다. 다시 올 때까지… 거울을 보며 고뇌하라.",
						"english": "Resistance is futile. Until I return... gaze into the mirror and despair.",
						"japanese": "抵抗は無意味だ。私が戻るまで…鏡を見て苦悩しろ。",
						"chinese": "反抗是徒劳的。在我回来之前…看着镜子，受尽折磨吧。",
						"french": "La résistance est futile. Jusqu'à mon retour... contemple le miroir et tourmente-toi.",
						"spanish": "La resistencia es inútil. Hasta que regrese... contempla el espejo y agoniza.",
						"vietnamese": "Kháng cự là vô ích. Cho đến khi ta trở lại… hãy nhìn vào gương mà thống khổ đi.",
						"thai": "การต่อต้านไร้ประโยชน์ จนกว่าข้าจะกลับมา… จงจ้องมองกระจกแล้วจมดิ่งสู่ความทุกข์ทรมาน",
						"hindi": "प्रतिरोध व्यर्थ है। जब तक मैं वापस न आऊँ... दर्पण को देखो और पीड़ा सहो।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "거울 속에서 거대한 그림자가 일그러지며 나타났다.",
						"english": "A colossal shadow distorted and emerged from the mirror.",
						"japanese": "鏡の中から、巨大な影が歪みながら現れた。",
						"chinese": "巨大的影子在镜中扭曲浮现。",
						"french": "Une ombre colossale se déforma et émergea du miroir.",
						"spanish": "Una sombra colosal se distorsionó y emergió del espejo.",
						"vietnamese": "Một cái bóng khổng lồ méo mó xuất hiện từ trong gương.",
						"thai": "เงาขนาดมหึมาบิดเบี้ยวและปรากฏขึ้นจากกระจก",
						"hindi": "दर्पण में से एक विशाल छाया विकृत होकर उभरी।"
					}
				},
				{
					"content": {
						"korean": "저건… 나?",
						"english": "Is that... me?",
						"japanese": "あれは…私？",
						"chinese": "那是…我？",
						"french": "C'est... moi ?",
						"spanish": "¿Esa... soy yo?",
						"vietnamese": "Đó… là ta sao?",
						"thai": "นั่น... คือข้าเองหรือ?",
						"hindi": "क्या वह... मैं हूँ?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…왜 그리 도망치려 하는가?",
						"english": "...Why do you try to flee?",
						"japanese": "…なぜ逃げようとする？",
						"chinese": "…为何要逃避？",
						"french": "Pourquoi tentes-tu de fuir ?",
						"spanish": "¿Por qué intentas huir?",
						"vietnamese": "…Sao ngươi lại cố trốn chạy?",
						"thai": "ไยเจ้าจึงคิดหนี?",
						"hindi": "तुम भागने की कोशिश क्यों कर रहे हो?"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "당신의 그림자, 당신의 잠재력. 아르카인 님의 축복입니다.",
						"english": "Your shadow, your potential. It is Arcane's blessing.",
						"japanese": "あなたの影、あなたの潜在能力。アルカイン様の祝福です。",
						"chinese": "你的影子，你的潜力。这是阿卡因大人的赐福。",
						"french": "Ton ombre, ton potentiel. C'est la bénédiction d'Arcane.",
						"spanish": "Tu sombra, tu potencial. Es la bendición de Arcaín.",
						"vietnamese": "Cái bóng của ngươi, tiềm năng của ngươi. Đó là phước lành của Arcane.",
						"thai": "เงาของเจ้า, ศักยภาพของเจ้า. นี่คือพรจากท่านอาร์เคน",
						"hindi": "तुम्हारी परछाई, तुम्हारी क्षमता। यह अरकेन का आशीर्वाद है।"
					},
					"speaker": "brim"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "난… 나를 지킬 거야!",
						"english": "I'll... protect myself!",
						"japanese": "私は…私を守る！",
						"chinese": "我…我会保护自己！",
						"french": "Je... me protégerai !",
						"spanish": "¡Me... me protegeré!",
						"vietnamese": "Ta… sẽ tự bảo vệ mình!",
						"thai": "ข้าจะ... ปกป้องตัวเอง!",
						"hindi": "मैं... मैं खुद की रक्षा करूँगा!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "direction",
					"duration_ms": 400,
					"speaker": "brim",
					"direction": "down",
					"action": "exit"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석군. 네 안의 나를 거부하다니.",
						"english": "Foolish. To reject the me within you.",
						"japanese": "愚かだな。お前の中の私を拒絶するとは。",
						"chinese": "愚蠢。竟敢拒绝你体内的我。",
						"french": "Stupide. Rejeter le moi en toi.",
						"spanish": "Necio. Rechazar al yo dentro de ti.",
						"vietnamese": "Ngu ngốc. Từ chối cái ta trong ngươi.",
						"thai": "ช่างโง่เขลา ที่ปฏิเสธตัวข้าในตัวเจ้า",
						"hindi": "मूर्ख। अपने भीतर के मुझे अस्वीकार करना।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"거울들이 속삭이는 회랑.",
			"축복이라 부르는 광신도의 유혹.",
			"그 속에서 드러나는 나의 그림자.",
			"피할 수 없는, 또 다른 나와의 싸움."
		],
		"english": [
			"Corridor where mirrors whisper.",
			"The temptation of fanatics, called a blessing.",
			"My shadow revealed within it.",
			"An unavoidable fight with another self."
		],
		"japanese": [
			"鏡が囁く回廊。",
			"祝福と呼ぶ狂信者の誘惑。",
			"その中で現れる私の影。",
			"避けられない、もう一人の自分との戦い。"
		],
		"chinese": [
			"镜子窃窃私语的回廊。",
			"狂热者称之为祝福的诱惑。",
			"其中显现的我的影子。",
			"与另一个我之间不可避免的战斗。"
		],
		"french": [
			"Le couloir où les miroirs chuchotent.",
			"La tentation des fanatiques, appelée une bénédiction.",
			"Mon ombre révélée en son sein.",
			"Un combat inévitable avec un autre moi."
		],
		"spanish": [
			"El pasillo donde los espejos susurran.",
			"La tentación de los fanáticos, llamada una bendición.",
			"Mi sombra revelada en ello.",
			"Una lucha inevitable con otro yo."
		],
		"vietnamese": [
			"Hành lang nơi những tấm gương thì thầm.",
			"Sự cám dỗ của những kẻ cuồng tín, được gọi là phước lành.",
			"Bóng tối của tôi hiện ra bên trong nó.",
			"Cuộc chiến không thể tránh khỏi với một bản thân khác."
		],
		"thai": [
			"ระเบียงที่กระจกกระซิบกระซาบ",
			"การล่อลวงของพวกคลั่งศาสนาที่เรียกว่าพร",
			"เงาของฉันที่ปรากฏออกมาจากสิ่งนั้น",
			"การต่อสู้ที่หลีกเลี่ยงไม่ได้กับตัวตนอีกคน"
		],
		"hindi": [
			"गलियारा जहाँ दर्पण फुसफुसाते हैं।",
			"कट्टरपंथियों का प्रलोभन, जिसे आशीर्वाद कहा जाता है।",
			"उसमें प्रकट होती मेरी परछाई।",
			"एक अपरिहार्य लड़ाई, दूसरे मैं के साथ।"
		]
	}
} as const;
