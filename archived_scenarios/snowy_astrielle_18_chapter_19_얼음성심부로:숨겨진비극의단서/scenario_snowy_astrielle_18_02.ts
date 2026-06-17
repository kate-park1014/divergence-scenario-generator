export const scenario_snowy_astrielle_18_02 = {
	"scenario_id": "snowy_astrielle_18_02",
	"order": 2,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"finn": {
			"id": "mon_3e3930d2-c2d3-4ad0-9818-26d259edac77",
			"name": {
				"korean": "핀",
				"english": "Finn",
				"japanese": "フィン",
				"chinese": "芬恩",
				"french": "Finn",
				"spanish": "Finn",
				"vietnamese": "Finn",
				"thai": "ฟินน์",
				"hindi": "फिन"
			},
			"description": "",
			"face_image_url": "",
			"battle_sprite_url": ""
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
					"content": {
						"korean": "수정 미궁의 입구. 차가운 얼음이 모든 것을 감쌌다.",
						"english": "Entrance to the Crystal Labyrinth. Cold ice encased everything.",
						"japanese": "水晶迷宮の入り口。冷たい氷が全てを覆っていた。",
						"chinese": "水晶迷宫的入口。冰冷的寒气笼罩着一切。",
						"french": "Entrée du Labyrinthe de Cristal. Une glace froide enveloppait tout.",
						"spanish": "Entrada al Laberinto de Cristal. El hielo frío lo cubría todo.",
						"vietnamese": "Lối vào Mê cung Pha lê. Băng lạnh bao trùm mọi thứ.",
						"thai": "ทางเข้าเขาวงกตคริสตัล น้ำแข็งเย็นยะเยือกปกคลุมทุกสิ่ง",
						"hindi": "क्रिस्टल भूलभुलैया का प्रवेश द्वार। ठंडी बर्फ ने सब कुछ ढक लिया।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "너무 추워. 얼어붙을 것 같아.",
						"english": "It's too cold. I feel like I'm going to freeze.",
						"japanese": "寒すぎる。凍えそうだ。",
						"chinese": "太冷了。我感觉快要冻僵了。",
						"french": "Il fait trop froid. Je vais geler.",
						"spanish": "Hace demasiado frío. Siento que me voy a congelar.",
						"vietnamese": "Lạnh quá. Tôi sắp đóng băng rồi.",
						"thai": "หนาวเกินไป ฉันรู้สึกเหมือนจะแข็งตาย",
						"hindi": "बहुत ठंड है। मुझे लगता है कि मैं जम जाऊँगा।"
					}
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						3
					],
					"speaker": "finn"
				},
				{
					"content": {
						"korean": "조심해. 단순히 추운 게 아니야. 마력이 느껴져.",
						"english": "Be careful. It's not just cold. I sense magic.",
						"japanese": "気をつけて。ただ寒いだけじゃない。魔力が感じられる。",
						"chinese": "小心。不只是冷。我感觉到魔力。",
						"french": "Fais attention. Ce n'est pas juste du froid. Je ressens de la magie.",
						"spanish": "Ten cuidado. No es solo frío. Siento magia.",
						"vietnamese": "Cẩn thận. Không chỉ là lạnh đâu. Tôi cảm nhận được ma lực.",
						"thai": "ระวังให้ดี ไม่ใช่แค่ความหนาวเย็น ฉันสัมผัสได้ถึงพลังเวทมนตร์",
						"hindi": "सावधान रहो। यह सिर्फ ठंड नहीं है। मुझे जादू महसूस हो रहा है।"
					},
					"speaker": "finn",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "역시… 아스트리엘의 마법인가.",
						"english": "As expected... Astriel's magic, then.",
						"japanese": "やはり…アストリエルの魔法か。",
						"chinese": "果然……是阿斯特丽尔的魔法吗？",
						"french": "Alors... la magie d'Astriel, comme prévu.",
						"spanish": "Entonces... la magia de Astriel, después de todo.",
						"vietnamese": "Quả nhiên… là ma thuật của Astriel sao.",
						"thai": "อย่างที่คิด… เวทมนตร์ของแอสเทรียลสินะ",
						"hindi": "जैसा कि अपेक्षित था... एस्टेरियल का जादू ही है।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "미궁 깊숙이. 얼음 결정들이 날카롭게 솟아 있었다.",
						"english": "Deep within the labyrinth. Sharp ice crystals jutted out.",
						"japanese": "迷宮の奥深く。鋭い氷の結晶が突き出ていた。",
						"chinese": "迷宫深处。尖锐的冰晶拔地而起。",
						"french": "Au plus profond du labyrinthe. Des cristaux de glace acérés jaillissaient.",
						"spanish": "En lo profundo del laberinto. Afilados cristales de hielo sobresalían.",
						"vietnamese": "Sâu trong mê cung. Những tinh thể băng sắc nhọn nhô lên.",
						"thai": "ลึกเข้าไปในเขาวงกต ผลึกน้ำแข็งแหลมคมพุ่งทะยานขึ้น",
						"hindi": "भूलभुलैया के भीतर गहरा। नुकीले बर्फ के क्रिस्टल बाहर निकले हुए थे।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"spot": [
						3,
						3
					],
					"speaker": "finn",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "finn",
					"content": {
						"korean": "…묘하군. 방금 공격, 우리를 노린 게 아니었어?",
						"english": "...Strange. That last attack, wasn't it aimed at us?",
						"japanese": "…妙だな。今の攻撃、我々を狙ったものじゃなかったのか？",
						"chinese": "……奇怪。刚才的攻击，不是冲着我们来的吗？",
						"french": "...Étrange. La dernière attaque, n'était-elle pas dirigée contre nous ?",
						"spanish": "...Extraño. Ese último ataque, ¿no iba dirigido a nosotros?",
						"vietnamese": "...Kỳ lạ thật. Cuộc tấn công vừa rồi, không phải nhắm vào chúng ta sao?",
						"thai": "…แปลกนะ การโจมตีเมื่อกี้ ไม่ได้มุ่งเป้ามาที่เราหรอกหรือ?",
						"hindi": "...अजीब। वह आखिरी हमला, क्या वह हम पर लक्षित नहीं था?"
					}
				},
				{
					"content": {
						"korean": "순간 피할 수 있었어요. 뭔가… 이상해요.",
						"english": "I barely dodged it. Something… is off.",
						"japanese": "間一髪で避けられました。何か…おかしいです。",
						"chinese": "我勉强躲开了。总觉得…不对劲。",
						"french": "J'ai réussi à l'éviter de justesse. Quelque chose... cloche.",
						"spanish": "Lo esquivé por un pelo. Algo... es raro.",
						"vietnamese": "Tôi vừa kịp tránh được. Có gì đó… lạ lắm.",
						"thai": "ฉันหลบได้หวุดหวิด มีบางอย่าง…แปลกไป",
						"hindi": "मैं मुश्किल से बच पाया। कुछ… अजीब है।"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "finn",
					"content": {
						"korean": "죽일 작정이었다면 진작에 끝났을 거다. 뭔가… 망설이는 느낌이야.",
						"english": "If it meant to kill, it would have been over. It feels like… hesitation.",
						"japanese": "殺すつもりなら、とっくに終わっている。何か…躊躇しているようなんだ。",
						"chinese": "如果它想杀我们，早就结束了。总觉得…它在犹豫。",
						"french": "S'il voulait nous tuer, ce serait déjà fait. J'ai l'impression qu'il... hésite.",
						"spanish": "Si hubiera querido matarnos, ya habría terminado. Parece que... duda.",
						"vietnamese": "Nếu muốn giết, thì đã kết thúc từ lâu rồi. Có cảm giác… nó đang do dự.",
						"thai": "ถ้ามันคิดจะฆ่า คงจบไปนานแล้ว มันรู้สึกเหมือน…กำลังลังเล",
						"hindi": "अगर मारने का इरादा होता, तो अब तक खत्म हो चुका होता। ऐसा लगता है… जैसे वो हिचकिचा रहा है।"
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
					"content": {
						"korean": "얼음 폭풍이 휘몰아쳤다. 시야는 흐려지고, 발밑은 얼어붙었다.",
						"english": "An ice storm raged. Vision blurred, ground froze.",
						"japanese": "吹雪が吹き荒れた。視界は遮られ、足元は凍りついた。",
						"chinese": "冰风暴肆虐。视线模糊，脚下结冰。",
						"french": "Une tempête de glace faisait rage. La visibilité était nulle, le sol gelé.",
						"spanish": "Una tormenta de hielo arreció. La vista se nubló, el suelo se congeló.",
						"vietnamese": "Bão tuyết càn quét. Tầm nhìn mờ mịt, chân đóng băng.",
						"thai": "พายุหิมะโหมกระหน่ำ วิสัยทัศน์พร่ามัว พื้นน้ำแข็งจับตัว",
						"hindi": "बर्फ़ीला तूफ़ान आया। नज़र धुंधली हो गई, पैर जमने लगे।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "finn",
					"spot": [
						4,
						3
					]
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "핀! 위험해! (얼음 조각이 바로 옆에 박힌다)",
						"english": "Finn! Danger! (An ice shard embeds right next to them)",
						"japanese": "フィン！危ない！（氷の破片がすぐ隣に突き刺さる）",
						"chinese": "芬恩！危险！（冰块插在了旁边）",
						"french": "Finn ! Danger ! (Un éclat de glace se plante juste à côté)",
						"spanish": "¡Finn! ¡Peligro! (Un trozo de hielo se clava justo al lado)",
						"vietnamese": "Finn! Nguy hiểm! (Mảnh băng cắm ngay cạnh)",
						"thai": "ฟินน์! อันตราย! (เศษน้ำแข็งปักอยู่ข้างๆ)",
						"hindi": "फिन! खतरा! (बर्फ़ का टुकड़ा ठीक बगल में जा धँसा)"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "(겨우 피하며) 봤나? 일부러 빗나간 공격이었어.",
						"english": "(Barely dodging) Did you see that? It was a deliberate miss.",
						"japanese": "（かろうじて避けながら）見たか？あれはわざと外した攻撃だった。",
						"chinese": "（勉强躲开）看到了吗？那是故意打偏的攻击。",
						"french": "(Esquivant de justesse) Tu as vu ? C'était une attaque délibérément ratée.",
						"spanish": "(Esquivando por poco) ¿Viste eso? Fue un ataque intencionalmente fallido.",
						"vietnamese": "(Vừa kịp tránh) Thấy không? Đó là một đòn tấn công cố tình trượt.",
						"thai": "(หลบได้หวุดหวิด) เห็นไหม? มันจงใจโจมตีพลาด",
						"hindi": "(मुश्किल से बचते हुए) देखा? वो जानबूझकर चूका हुआ हमला था।"
					},
					"speaker": "finn"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_1",
					"content": {
						"korean": "정말요? 착각이 아니고요?",
						"english": "Really? Not just our imagination?",
						"japanese": "本当ですか？勘違いじゃないんですか？",
						"chinese": "真的吗？不是错觉吧？",
						"french": "Vraiment ? Ce n'est pas une illusion ?",
						"spanish": "¿De verdad? ¿No es una ilusión nuestra?",
						"vietnamese": "Thật sao? Không phải là nhầm lẫn chứ?",
						"thai": "จริงเหรอ? ไม่ใช่แค่เราคิดไปเองเหรอ?",
						"hindi": "सच में? कहीं ये हमारा वहम तो नहीं?"
					}
				},
				{
					"speaker": "finn",
					"content": {
						"korean": "이런 대규모 마법으로, 우리를 살려두고 있다니. 이해가 안 돼.",
						"english": "Using such powerful magic, yet letting us live. I don't get it.",
						"japanese": "これだけの大規模な魔法で、私たちを生かしているなんて。理解できない。",
						"chinese": "用这么大规模的魔法，却让我们活下来。我真不明白。",
						"french": "Utiliser une magie d'une telle ampleur, et nous laisser en vie. Je ne comprends pas.",
						"spanish": "Usar una magia tan masiva y dejarnos vivir. No lo entiendo.",
						"vietnamese": "Với ma thuật quy mô lớn như vậy, mà lại để chúng ta sống sót. Tôi không thể hiểu được.",
						"thai": "ใช้เวทมนตร์ขนาดใหญ่ขนาดนี้ แต่กลับปล่อยให้เรามีชีวิตอยู่ ฉันไม่เข้าใจเลย",
						"hindi": "इतने बड़े पैमाने के जादू से भी, हमें ज़िंदा रखा है। मेरी समझ में नहीं आता।"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"content": {
						"korean": "미궁의 심장부. 거대한 얼음 결정들이 하늘을 찔렀다.",
						"english": "The heart of the labyrinth. Giant ice crystals pierced the sky.",
						"japanese": "迷宮の心臓部。巨大な氷の結晶が天を突いた。",
						"chinese": "迷宫的核心。巨大的冰晶直刺天空。",
						"french": "Le cœur du labyrinthe. De gigantesques cristaux de glace transperçaient le ciel.",
						"spanish": "El corazón del laberinto. Enormes cristales de hielo perforaban el cielo.",
						"vietnamese": "Trung tâm mê cung. Những tinh thể băng khổng lồ đâm xuyên bầu trời.",
						"thai": "ใจกลางเขาวงกต ผลึกน้ำแข็งขนาดยักษ์พุ่งเสียดฟ้า",
						"hindi": "भूलभुलैया का दिल। विशाल बर्फ़ के क्रिस्टल आसमान को चीर रहे थे।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"action": "enter",
					"spot": [
						2,
						3
					],
					"speaker": "finn",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "아스트리엘… 대체 무슨 생각인 거지?",
						"english": "Astriel… What are you thinking?",
						"japanese": "アストリエル…一体何を考えているんだ？",
						"chinese": "阿斯特丽尔…你到底在想什么？",
						"french": "Astriel... À quoi penses-tu, au juste ?",
						"spanish": "Astriel... ¿Qué estás pensando?",
						"vietnamese": "Astriel… Rốt cuộc là đang nghĩ gì vậy?",
						"thai": "แอสเทรียล…เธอคิดอะไรอยู่กันแน่?",
						"hindi": "एस्ट्रियल… आखिर तुम क्या सोच रही हो?"
					},
					"speaker": "finn"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "계속 길을 막는 것 같으면서도… 직접적인 살기는 없어요.",
						"english": "It seems to keep blocking our path… yet there's no direct killing intent.",
						"japanese": "ずっと道を塞いでいるようだけど…直接的な殺気はない。",
						"chinese": "它似乎一直在阻挡我们的去路…但没有直接的杀意。",
						"french": "Il semble bloquer notre chemin... pourtant, il n'y a aucune intention meurtrière directe.",
						"spanish": "Parece que sigue bloqueando nuestro camino... pero no hay intención de matar directa.",
						"vietnamese": "Dường như nó cứ chặn đường chúng ta… nhưng lại không có sát khí trực tiếp.",
						"thai": "ดูเหมือนมันจะขวางทางเราอยู่เรื่อยๆ… แต่ก็ไม่มีเจตนาจะฆ่าโดยตรง",
						"hindi": "ऐसा लगता है कि यह रास्ता रोक रहा है… फिर भी कोई सीधा जानलेवा इरादा नहीं है।"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "finn",
					"content": {
						"korean": "마치… '더 이상 오지 마라'고 말하는 것 같아.",
						"english": "It's like... it's telling me 'don't come any further'.",
						"japanese": "まるで…「それ以上来るな」と言っているようだ。",
						"chinese": "就像是……在说“不许再往前了”。",
						"french": "On dirait... qu'il dit : « Ne t'approche pas davantage. »",
						"spanish": "Es como si... dijera \"No vengas más\".",
						"vietnamese": "Cứ như thể... nó đang nói \"Đừng đến gần thêm nữa.\"",
						"thai": "เหมือน...กำลังบอกว่า \"อย่าเข้ามาอีกเลย\"",
						"hindi": "ऐसा लगता है... जैसे कह रहा हो 'और आगे मत आओ'।"
					}
				}
			]
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "미궁의 수호자가 쓰러지자, 얼음 마법의 기세가 한풀 꺾였다.",
						"english": "As the Labyrinth's Guardian fell, the power of the ice magic waned.",
						"japanese": "迷宮の守護者が倒れると、氷の魔法の勢いが衰えた。",
						"chinese": "迷宫守护者倒下后，冰魔法的气势也随之减弱了。",
						"french": "Lorsque le Gardien du Labyrinthe tomba, l'élan de la magie de glace diminua.",
						"spanish": "Cuando el Guardián del Laberinto cayó, el poder de la magia de hielo disminuyó.",
						"vietnamese": "Khi Vệ Thần Mê Cung ngã xuống, sức mạnh của ma thuật băng cũng yếu đi.",
						"thai": "เมื่อผู้พิทักษ์เขาวงกตล้มลง พลังของเวทมนตร์น้ำแข็งก็อ่อนกำลังลง",
						"hindi": "जैसे ही भूलभुलैया का संरक्षक गिरा, बर्फीले जादू की शक्ति कम हो गई।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"action": "enter",
					"speaker": "finn",
					"spot": [
						3,
						3
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "finn",
					"content": {
						"korean": "(쓰러진 random_boss를 보며) 이 공격들… 정말 경고였던 걸까?",
						"english": "(Looking at the fallen random_boss) Were these attacks... truly just a warning?",
						"japanese": "(倒れたrandom_bossを見ながら) この攻撃は…本当に警告だったのか？",
						"chinese": "(看着倒下的random_boss) 这些攻击……真的只是警告吗？",
						"french": "(En regardant le random_boss tombé) Ces attaques... n'étaient-elles vraiment qu'un avertissement ?",
						"spanish": "(Mirando al random_boss caído) Estos ataques... ¿fueron realmente solo una advertencia?",
						"vietnamese": "(Nhìn random_boss đã gục ngã) Những đòn tấn công này... thật sự chỉ là cảnh báo thôi sao?",
						"thai": "(มอง random_boss ที่ล้มลง) การโจมตีพวกนี้...เป็นแค่คำเตือนจริงๆ เหรอ?",
						"hindi": "(गिरे हुए random_boss को देखते हुए) क्या ये हमले... वाकई सिर्फ एक चेतावनी थे?"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…진실을… 찾지 마라…",
						"english": "...Don't... seek the truth...",
						"japanese": "…真実を…探すな…",
						"chinese": "……不要……寻找真相……",
						"french": "...Ne... cherche pas la vérité...",
						"spanish": "...No... busques la verdad...",
						"vietnamese": "...Đừng... tìm kiếm sự thật...",
						"thai": "...อย่า...ค้นหาความจริง...",
						"hindi": "...सच... मत ढूंढना..."
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "진실? 무슨 말이야?",
						"english": "The truth? What do you mean?",
						"japanese": "真実？どういうことだ？",
						"chinese": "真相？什么意思？",
						"french": "La vérité ? Que veux-tu dire ?",
						"spanish": "¿La verdad? ¿Qué quieres decir?",
						"vietnamese": "Sự thật? Ý anh là sao?",
						"thai": "ความจริง? หมายความว่าไง?",
						"hindi": "सच? क्या मतलब है तुम्हारा?"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "finn",
					"content": {
						"korean": "더 깊은 곳에… 무언가가 있어. 우리가 알아내야 할 진실이.",
						"english": "Deeper within... something lies. A truth we must uncover.",
						"japanese": "もっと奥に…何かがある。我々が突き止めるべき真実が。",
						"chinese": "更深处…有什么东西。我们必须揭示的真相。",
						"french": "Plus profondément… quelque chose se cache. Une vérité que nous devons découvrir.",
						"spanish": "Más adentro… algo yace. Una verdad que debemos desenterrar.",
						"vietnamese": "Sâu hơn nữa… có điều gì đó. Một sự thật chúng ta phải khám phá.",
						"thai": "ลึกเข้าไป… มีบางสิ่งอยู่ ความจริงที่เราต้องค้นหา",
						"hindi": "और गहराई में... कुछ है। एक सच जिसका हमें पता लगाना है।"
					}
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "탐험대는 더 깊은 얼음 성으로 향한다. 아스트리엘의 진짜 모습은 아직 베일에 싸여 있었다.",
						"english": "The expedition presses deeper into the ice castle. Astriel's true form remained veiled.",
						"japanese": "探検隊はさらに奥の氷の城へと進む。アストリエルの真の姿はまだ謎に包まれていた。",
						"chinese": "探险队深入冰之城堡。阿斯特里尔的真实面貌仍蒙着面纱。",
						"french": "L'expédition s'enfonce plus profondément dans le château de glace. La véritable forme d'Astriel restait voilée.",
						"spanish": "La expedición se adentra más en el castillo de hielo. La verdadera forma de Astriel seguía velada.",
						"vietnamese": "Đoàn thám hiểm tiến sâu hơn vào lâu đài băng. Diện mạo thật của Astriel vẫn còn bị che giấu.",
						"thai": "คณะสำรวจมุ่งหน้าลึกเข้าไปในปราสาทน้ำแข็ง ร่างที่แท้จริงของแอสเทรียลยังคงเป็นปริศนา",
						"hindi": "अभियान बर्फ के महल में और गहराई तक बढ़ता है। एस्ट्रियल का असली रूप अभी भी रहस्य में लिपटा हुआ था।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "수정 미궁의 얼음이 탐험대를 집어삼켰다.",
						"english": "The ice of the Crystal Labyrinth swallowed the expedition.",
						"japanese": "水晶迷宮の氷が探検隊を飲み込んだ。",
						"chinese": "水晶迷宫的寒冰吞噬了探险队。",
						"french": "La glace du Labyrinthe de Cristal a englouti l'expédition.",
						"spanish": "El hielo del Laberinto de Cristal engulló a la expedición.",
						"vietnamese": "Băng giá của Mê cung Pha lê đã nuốt chửng đoàn thám hiểm.",
						"thai": "น้ำแข็งแห่งเขาวงกตคริสตัลกลืนกินคณะสำรวจ",
						"hindi": "क्रिस्टल भूलभुलैया की बर्फ ने अभियान को निगल लिया।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "얕잡아 본 대가다… 물러나라.",
						"english": "The price of underestimation... Retreat.",
						"japanese": "甘く見た代償だ… 退け。",
						"chinese": "轻敌的代价… 撤退。",
						"french": "Le prix de la sous-estimation… Retirez-vous.",
						"spanish": "El precio de la subestimación… Retirada.",
						"vietnamese": "Cái giá của sự xem thường… Rút lui.",
						"thai": "นี่คือราคาของการประมาท… ถอยไป",
						"hindi": "कम आंकने की कीमत... पीछे हटो।"
					},
					"speaker": "random_boss"
				},
				{
					"action": "enter",
					"spot": [
						2,
						3
					],
					"speaker": "finn",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "여기서… 끝낼 순 없어.",
						"english": "I... can't end it here.",
						"japanese": "ここで…終わらせるわけにはいかない。",
						"chinese": "不能…在这里结束。",
						"french": "Je ne peux pas… finir ici.",
						"spanish": "No puedo… terminar aquí.",
						"vietnamese": "Không thể… kết thúc ở đây được.",
						"thai": "จะ…จบลงตรงนี้ไม่ได้",
						"hindi": "मैं… इसे यहीं खत्म नहीं कर सकता।"
					},
					"speaker": "finn",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "반드시… 진실을 밝혀낼 거야!",
						"english": "I will... definitely uncover the truth!",
						"japanese": "必ず…真実を明らかにする！",
						"chinese": "我一定会…揭露真相！",
						"french": "Je vais… absolument découvrir la vérité !",
						"spanish": "¡Definitivamente… descubriré la verdad!",
						"vietnamese": "Nhất định… sẽ khám phá ra sự thật!",
						"thai": "จะ…ต้องเปิดเผยความจริงให้ได้!",
						"hindi": "मैं… निश्चित रूप से सच्चाई उजागर करूँगा!"
					}
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "거대한 얼음 문이 열리고, 미궁의 수호자가 모습을 드러냈다.",
						"english": "The massive ice door opened, revealing the Labyrinth's Guardian.",
						"japanese": "巨大な氷の扉が開き、迷宮の守護者が姿を現した。",
						"chinese": "巨大的冰门开启，迷宫守护者现身了。",
						"french": "L'immense porte de glace s'ouvrit, révélant le Gardien du Labyrinthe.",
						"spanish": "La gigantesca puerta de hielo se abrió, revelando al Guardián del Laberinto.",
						"vietnamese": "Cánh cổng băng khổng lồ mở ra, Vệ Thần Mê Cung xuất hiện.",
						"thai": "ประตูน้ำแข็งบานมหึมาเปิดออก ผู้พิทักษ์เขาวงกตปรากฏตัว",
						"hindi": "विशाल बर्फीला दरवाज़ा खुला, और भूलभुलैया का संरक्षक प्रकट हुआ।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "침입자 주제에 여기까지 오다니.",
						"english": "Intruders, to have come this far.",
						"japanese": "侵入者のくせに、ここまで来るとは。",
						"chinese": "你们这些入侵者，竟敢走到这里。",
						"french": "Des intrus... Vous êtes venus si loin.",
						"spanish": "Intrusos, han llegado hasta aquí.",
						"vietnamese": "Kẻ xâm nhập mà dám đi xa đến thế.",
						"thai": "พวกผู้บุกรุก บังอาจมาถึงที่นี่ได้ไง",
						"hindi": "घुसपैठिए, यहाँ तक पहुँचने की हिम्मत कैसे हुई।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "더 이상은… 허락하지 않는다.",
						"english": "No further... I won't allow it.",
						"japanese": "これ以上は…許さない。",
						"chinese": "不许再往前了。",
						"french": "Plus loin... je ne le permettrai pas.",
						"spanish": "No más... no lo permitiré.",
						"vietnamese": "Sẽ không cho phép... thêm nữa.",
						"thai": "จะไม่...ยอมให้ไปมากกว่านี้แล้ว",
						"hindi": "और आगे... मैं इजाज़त नहीं दूँगा।"
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "드디어… 보스인가!",
						"english": "Finally... the boss!",
						"japanese": "ついに…ボスか！",
						"chinese": "终于……是首领了吗？！",
						"french": "Enfin... le boss !",
						"spanish": "¡Por fin... el jefe!",
						"vietnamese": "Cuối cùng... là trùm sao!",
						"thai": "ในที่สุด... ก็ถึงบอสแล้วสินะ!",
						"hindi": "आखिरकार... बॉस आ गया!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "조심해. 이 녀석에게서도… 비슷한 기운이 느껴져.",
						"english": "Be careful. I feel a similar aura from this one too...",
						"japanese": "気をつけて。こいつからも…似たような気配がする。",
						"chinese": "小心。从这家伙身上……也感受到了相似的气息。",
						"french": "Fais attention. Je ressens aussi... une énergie similaire de sa part.",
						"spanish": "Ten cuidado. También siento... una energía similar de él.",
						"vietnamese": "Cẩn thận. Từ tên này... cũng cảm thấy một luồng khí tương tự.",
						"thai": "ระวังตัวไว้. จากเจ้านี่...ก็รู้สึกถึงพลังงานที่คล้ายกัน.",
						"hindi": "सावधान रहना। इससे भी... वैसी ही आभा महसूस हो रही है।"
					},
					"speaker": "finn",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"수정 미궁. 모든 것이 얼어붙은 그곳.",
			"아스트리엘의 마법은 잔혹하게 탐험대를 덮쳤다.",
			"하지만 탐험대장 핀은 의문을 품기 시작했다.",
			"이 공격, 단순한 파괴가 아니야. 어쩌면… 경고일지도."
		],
		"english": [
			"Crystal Labyrinth. A place where everything is frozen.",
			"Astriel's magic cruelly engulfed the expedition.",
			"But expedition leader Finn began to have doubts.",
			"This attack, it's not just destruction. Perhaps... a warning."
		],
		"japanese": [
			"水晶迷宮。全てが凍りついたその場所。",
			"アストリエルの魔法は残酷にも探検隊を襲った。",
			"しかし、探検隊長のフィンは疑問を抱き始めた。",
			"この攻撃、単なる破壊じゃない。もしかしたら…警告なのかも。"
		],
		"chinese": [
			"水晶迷宫。一切都被冻结的地方。",
			"阿斯特丽尔的魔法残酷地袭击了探险队。",
			"但探险队长芬恩开始产生疑问。",
			"这次攻击，不仅仅是破坏。也许……是警告。"
		],
		"french": [
			"Le Labyrinthe de Cristal. Un lieu où tout est gelé.",
			"La magie d'Astriel submergea cruellement l'expédition.",
			"Mais le chef de l'expédition, Finn, commença à avoir des doutes.",
			"Cette attaque, ce n'est pas une simple destruction. Peut-être... un avertissement."
		],
		"spanish": [
			"El Laberinto de Cristal. Un lugar donde todo está congelado.",
			"La magia de Astriel envolvió cruelmente a la expedición.",
			"Pero el líder de la expedición, Finn, empezó a dudar.",
			"Este ataque, no es solo destrucción. Quizás... una advertencia."
		],
		"vietnamese": [
			"Mê cung Pha lê. Nơi mọi thứ đều đóng băng.",
			"Phép thuật của Astriel tàn khốc bao trùm đoàn thám hiểm.",
			"Nhưng đội trưởng Finn bắt đầu nghi ngờ.",
			"Cuộc tấn công này, không chỉ là hủy diệt. Có lẽ… là một lời cảnh báo."
		],
		"thai": [
			"เขาวงกตคริสตัล ที่ที่ทุกสิ่งถูกแช่แข็ง",
			"เวทมนตร์ของแอสเทรียลเข้าโจมตีคณะสำรวจอย่างโหดเหี้ยม",
			"แต่หัวหน้าคณะสำรวจฟินน์เริ่มเกิดความสงสัย",
			"การโจมตีนี้ไม่ใช่แค่การทำลายล้าง บางที… อาจจะเป็นคำเตือน"
		],
		"hindi": [
			"क्रिस्टल भूलभुलैया। वह जगह जहाँ सब कुछ जमा हुआ है।",
			"एस्टेरियल का जादू क्रूरता से अभियान दल पर छा गया।",
			"लेकिन अभियान दल के नेता फिन को संदेह होने लगा।",
			"यह हमला, सिर्फ विनाश नहीं है। शायद… एक चेतावनी है।"
		]
	}
} as const;
