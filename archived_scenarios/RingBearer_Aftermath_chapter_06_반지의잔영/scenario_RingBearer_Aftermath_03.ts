export const scenario_RingBearer_Aftermath_03 = {
	"scenario_id": "RingBearer_Aftermath_03",
	"order": 3,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"char": {
			"id": "mon_b67c6c4a-6263-4db5-8f14-59d0a906a3fc",
			"name": {
				"korean": "캐릭터",
				"english": "Char",
				"japanese": "キャラクター",
				"chinese": "角色",
				"french": "Personnage",
				"spanish": "Personaje",
				"vietnamese": "Nhân vật",
				"thai": "ตัวละคร",
				"hindi": "चरित्र"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/81f44415-b42f-499c-e22b-183f8663dd00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a1c5b19a-a5b5-40d2-e5b1-7a4f81abb700/public"
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
					"type": "speech",
					"content": {
						"korean": "회랑의 심연은 끝없이 이어졌다. 망각된 기억들이 바닥에 부서져 있었다.",
						"english": "The abyss of the corridor continued endlessly. Forgotten memories lay shattered on the floor.",
						"japanese": "回廊の深淵は果てしなく続いた。忘れ去られた記憶が床に散らばっていた。",
						"chinese": "走廊的深渊无休止地延伸。被遗忘的记忆破碎地散落在地板上。",
						"french": "L'abîme du couloir continuait sans fin. Des souvenirs oubliés gisaient brisés sur le sol.",
						"spanish": "El abismo del corredor se extendía sin fin. Recuerdos olvidados yacían destrozados en el suelo.",
						"vietnamese": "Vực thẳm hành lang tiếp diễn vô tận. Những ký ức bị lãng quên vỡ vụn trên sàn.",
						"thai": "ห้วงลึกของระเบียงดำเนินไปไม่สิ้นสุด ความทรงจำที่ถูกลืมเลือนแตกสลายอยู่บนพื้น",
						"hindi": "गलियारे का पाताल अनंत तक फैला हुआ था। भूली हुई यादें फर्श पर टूटी पड़ी थीं।"
					},
					"emotion": "base"
				},
				{
					"speaker": "char",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "...오지 말았어야 했어.",
						"english": "...I shouldn't have come.",
						"japanese": "...来るべきではなかった。",
						"chinese": "...我不该来。",
						"french": "...Je n'aurais pas dû venir.",
						"spanish": "...No debí haber venido.",
						"vietnamese": "...Lẽ ra tôi không nên đến đây.",
						"thai": "...ไม่น่ามาเลย",
						"hindi": "...मुझे नहीं आना चाहिए था।"
					},
					"speaker": "char",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "당신은 누구지?",
						"english": "Who are you?",
						"japanese": "あなたは誰だ？",
						"chinese": "你是谁？",
						"french": "Qui es-tu ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Ngươi là ai?",
						"thai": "เจ้าเป็นใคร?",
						"hindi": "तुम कौन हो?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "나? 나도 한때는 아르카인의 부하였다.",
						"english": "Me? I too was once a subordinate of Arcane.",
						"japanese": "私？私もかつてはアーケインの部下だった。",
						"chinese": "我？我也曾是奥术的部下。",
						"french": "Moi ? Moi aussi j'étais autrefois un subordonné d'Arcane.",
						"spanish": "¿Yo? Yo también fui una vez un subordinado de Arcane.",
						"vietnamese": "Tôi? Tôi cũng từng là cấp dưới của Arcane.",
						"thai": "ข้าหรือ? ข้าเองก็เคยเป็นผู้ใต้บังคับบัญชาของอาร์เคน",
						"hindi": "मैं? मैं भी कभी आर्केन का अधीनस्थ था।"
					},
					"speaker": "char",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…지금은, 그 저주에서 벗어나려는 자.",
						"english": "...Now, one who seeks to escape that curse.",
						"japanese": "…今は、その呪いから逃れようとする者。",
						"chinese": "……现在，是试图摆脱那个诅咒的人。",
						"french": "...Maintenant, celui qui cherche à échapper à cette malédiction.",
						"spanish": "...Ahora, uno que busca escapar de esa maldición.",
						"vietnamese": "...Giờ thì, là kẻ muốn thoát khỏi lời nguyền đó.",
						"thai": "...ตอนนี้คือผู้ที่พยายามจะหลุดพ้นจากคำสาปนั้น",
						"hindi": "...अब, वह जो उस श्राप से बचना चाहता है।"
					},
					"speaker": "char",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "char",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "char",
					"type": "speech",
					"content": {
						"korean": "저 거울들을 봐. 네 모습이 어떤가?",
						"english": "Look at those mirrors. What do you look like?",
						"japanese": "あの鏡を見ろ。自分の姿はどうだ？",
						"chinese": "看看那些镜子。你是什么样子？",
						"french": "Regarde ces miroirs. À quoi ressembles-tu ?",
						"spanish": "Mira esos espejos. ¿Cómo te ves?",
						"vietnamese": "Nhìn những tấm gương kia. Ngươi trông thế nào?",
						"thai": "มองกระจกพวกนั้นสิ เจ้าเป็นอย่างไรบ้าง?",
						"hindi": "उन शीशों को देखो। तुम कैसे दिखते हो?"
					},
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "회랑 벽에 금이 간 거울들이 걸려있다. 거울 속 자신의 모습이 때때로 다른 형상으로 일그러진다.",
						"english": "Cracked mirrors hang on the corridor walls. Your reflection in them sometimes distorts into a different form.",
						"japanese": "回廊の壁にはひび割れた鏡が掛かっている。鏡の中の自分の姿は、時々別の形に歪む。",
						"chinese": "走廊的墙壁上挂着裂开的镜子。镜子中自己的样子有时会扭曲成不同的形态。",
						"french": "Des miroirs craqués sont accrochés aux murs du couloir. Votre reflet s'y déforme parfois en une forme différente.",
						"spanish": "Espejos agrietados cuelgan de las paredes del pasillo. Tu reflejo en ellos a veces se distorsiona en una forma diferente.",
						"vietnamese": "Những tấm gương nứt vỡ treo trên tường hành lang. Bóng hình của bạn trong gương đôi khi méo mó thành một hình dạng khác.",
						"thai": "กระจกที่ร้าวแขวนอยู่บนผนังโถงทางเดิน ภาพสะท้อนของคุณในกระจกบางครั้งบิดเบี้ยวเป็นรูปร่างอื่น",
						"hindi": "गलियारे की दीवारों पर टूटे हुए दर्पण लटके हुए हैं। उनमें आपका प्रतिबिंब कभी-कभी एक अलग रूप में विकृत हो जाता है।"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "char",
					"type": "speech",
					"content": {
						"korean": "나도 저랬어. 아르카인에게 조종당할 때.",
						"english": "I was like that too, when Arcane controlled me.",
						"japanese": "私もそうだった。アルカインに操られていた時。",
						"chinese": "我也曾那样。被阿尔凯恩操控的时候。",
						"french": "J'étais comme ça aussi, quand Arcane me contrôlait.",
						"spanish": "Yo también fui así, cuando Arcane me controlaba.",
						"vietnamese": "Tôi cũng từng như vậy, khi bị Arcanine kiểm soát.",
						"thai": "ฉันก็เป็นแบบนั้นเหมือนกัน ตอนที่อาร์คาอินควบคุมฉัน",
						"hindi": "मैं भी वैसा ही था, जब अर्केन मुझे नियंत्रित करता था।"
					}
				},
				{
					"content": {
						"korean": "그는 속삭인다. 네 가장 깊은 욕망을 건드려서.",
						"english": "He whispers, touching your deepest desires.",
						"japanese": "彼は囁く。お前の最も深い欲望を刺激して。",
						"chinese": "他低语着，触动你最深层的欲望。",
						"french": "Il murmure, touchant vos désirs les plus profonds.",
						"spanish": "Él susurra, tocando tus deseos más profundos.",
						"vietnamese": "Hắn thì thầm, chạm vào những ham muốn sâu thẳm nhất của bạn.",
						"thai": "เขากระซิบ สัมผัสความปรารถนาที่ลึกที่สุดของคุณ",
						"hindi": "वह फुसफुसाता है, तुम्हारी सबसे गहरी इच्छाओं को छूता हुआ।"
					},
					"speaker": "char",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…나는 다르다.",
						"english": "...I am different.",
						"japanese": "…私は違う。",
						"chinese": "……我不同。",
						"french": "...Je suis différent.",
						"spanish": "...Yo soy diferente.",
						"vietnamese": "...Tôi khác.",
						"thai": "...ฉันต่างออกไป",
						"hindi": "...मैं अलग हूँ।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "아니. 아무도 벗어날 수 없어.",
						"english": "No. No one can escape.",
						"japanese": "いいえ。誰も逃れられない。",
						"chinese": "不。没有人能逃脱。",
						"french": "Non. Personne ne peut s'échapper.",
						"spanish": "No. Nadie puede escapar.",
						"vietnamese": "Không. Không ai có thể thoát được.",
						"thai": "ไม่ ไม่มีใครหนีพ้น",
						"hindi": "नहीं। कोई बच नहीं सकता।"
					},
					"speaker": "char",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "char",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "아르카인은 네가 원하는 모든 것을 줄 것처럼 유혹한다.",
						"english": "Arcane tempts you, as if he'll give you everything you desire.",
						"japanese": "アルカインはお前が望む全てを与えるかのように誘惑する。",
						"chinese": "阿尔凯恩引诱你，仿佛他会给你所有你想要的东西。",
						"french": "Arcane vous tente, comme s'il allait vous donner tout ce que vous désirez.",
						"spanish": "Arcane te tienta, como si fuera a darte todo lo que deseas.",
						"vietnamese": "Arcanine dụ dỗ bạn, như thể hắn sẽ cho bạn mọi thứ bạn muốn.",
						"thai": "อาร์คาอินล่อลวงคุณ ราวกับว่าจะมอบทุกสิ่งที่คุณปรารถนา",
						"hindi": "अर्केन तुम्हें लुभाता है, मानो वह तुम्हें तुम्हारी हर इच्छा पूरी कर देगा।"
					},
					"speaker": "char",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "거짓말이다.",
						"english": "It's a lie.",
						"japanese": "嘘だ。",
						"chinese": "是谎言。",
						"french": "C'est un mensonge.",
						"spanish": "Es una mentira.",
						"vietnamese": "Đó là một lời nói dối.",
						"thai": "มันคือเรื่องโกหก",
						"hindi": "यह झूठ है।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "char",
					"type": "speech",
					"content": {
						"korean": "처음엔 진짜처럼 느껴질 거야. 그게 함정이지.",
						"english": "At first, it'll feel real. That's the trap.",
						"japanese": "最初は本物のように感じるだろう。それが罠だ。",
						"chinese": "一开始，它会感觉真实。那就是陷阱。",
						"french": "Au début, ça semblera réel. C'est ça le piège.",
						"spanish": "Al principio, se sentirá real. Esa es la trampa.",
						"vietnamese": "Ban đầu, nó sẽ có vẻ thật. Đó chính là cái bẫy.",
						"thai": "ตอนแรกมันจะรู้สึกเหมือนจริง นั่นแหละคือกับดัก",
						"hindi": "पहले, यह असली लगेगा। वही जाल है।"
					}
				},
				{
					"emotion": "base",
					"speaker": "char",
					"type": "speech",
					"content": {
						"korean": "점점 더 깊숙이 파고든다. 네 모든 것을 잠식할 때까지.",
						"english": "It burrows deeper and deeper until it consumes everything you are.",
						"japanese": "どんどん深く食い込んでいく。お前の全てを侵食し尽くすまで。",
						"chinese": "它会越来越深入，直到吞噬你的一切。",
						"french": "Il s'enfonce de plus en plus profondément jusqu'à ce qu'il consume tout ce que vous êtes.",
						"spanish": "Se adentra cada vez más, hasta que consume todo lo que eres.",
						"vietnamese": "Nó sẽ đào sâu hơn và sâu hơn cho đến khi nuốt chửng mọi thứ của bạn.",
						"thai": "มันจะฝังลึกลงไปเรื่อยๆ จนกว่าจะกลืนกินทุกสิ่งของคุณ",
						"hindi": "यह और गहरा होता जाता है, जब तक यह तुम्हें पूरी तरह निगल न ले।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "char"
				},
				{
					"content": {
						"korean": "들려? 저 속삭이는 소리. 네 이름을 부르는 것 같지 않나?",
						"english": "Hear that? That whispering sound. Doesn't it sound like it's calling your name?",
						"japanese": "聞こえるか？あの囁き声。お前の名を呼んでいるように聞こえないか？",
						"chinese": "听到了吗？那低语声。是不是听起来像在呼唤你的名字？",
						"french": "Tu entends ça ? Ce murmure. N'est-ce pas comme s'il appelait ton nom ?",
						"spanish": "¿Escuchas eso? Ese susurro. ¿No parece que está llamando tu nombre?",
						"vietnamese": "Nghe thấy không? Âm thanh thì thầm đó. Có phải nó đang gọi tên bạn không?",
						"thai": "ได้ยินไหม เสียงกระซิบนั้น ไม่เหมือนว่ามันกำลังเรียกชื่อคุณเลยเหรอ?",
						"hindi": "सुन रहे हो? वह फुसफुसाहट। क्या यह तुम्हारा नाम पुकारता हुआ नहीं लगता?"
					},
					"speaker": "char",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "신경 쓰지 마.",
						"english": "Don't mind it.",
						"japanese": "気にするな。",
						"chinese": "别介意。",
						"french": "N'y prête pas attention.",
						"spanish": "No te preocupes.",
						"vietnamese": "Đừng bận tâm.",
						"thai": "ไม่ต้องสนหรอก",
						"hindi": "परवाह मत करो।"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "나도 그랬어. 무시하려 했지.",
						"english": "I did too. I tried to ignore it.",
						"japanese": "私もそうだった。無視しようとした。",
						"chinese": "我也一样。我也想忽略它。",
						"french": "Moi aussi. J'ai essayé de l'ignorer.",
						"spanish": "Yo también lo hice. Intenté ignorarlo.",
						"vietnamese": "Ta cũng vậy. Ta đã cố phớt lờ nó.",
						"thai": "ฉันก็เป็นแบบนั้น พยายามไม่สนใจแล้ว",
						"hindi": "मैंने भी यही किया था। मैंने इसे नज़रअंदाज़ करने की कोशिश की।"
					},
					"speaker": "char",
					"type": "speech"
				},
				{
					"content": {
						"korean": "하지만 결국… 그 소리가 너 자신이 된다.",
						"english": "But eventually... that sound becomes you.",
						"japanese": "しかし結局… その音が、お前自身になる。",
						"chinese": "但最终… 那声音会变成你。",
						"french": "Mais finalement… ce son devient toi.",
						"spanish": "Pero al final… ese sonido te convierte en ti.",
						"vietnamese": "Nhưng cuối cùng… âm thanh đó sẽ trở thành chính ngươi.",
						"thai": "แต่สุดท้าย… เสียงนั้นจะกลายเป็นตัวตนของเจ้าเอง",
						"hindi": "लेकिन अंत में… वो आवाज़ तुम खुद बन जाओगे।"
					},
					"speaker": "char",
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "후회할 것이다… 이 싸움은 끝이 아냐. 아르카인은 어디에나 존재한다.",
						"english": "You will regret this… This fight is not over. Arcane is everywhere.",
						"japanese": "後悔するだろう… この戦いは終わりではない。アルカインはどこにでも存在する。",
						"chinese": "你会后悔的… 这场战斗还没结束。阿尔凯恩无处不在。",
						"french": "Tu le regretteras… Ce combat n'est pas terminé. Arcane est partout.",
						"spanish": "Lo lamentarás… Esta pelea no ha terminado. Arcane está en todas partes.",
						"vietnamese": "Ngươi sẽ phải hối hận… Cuộc chiến này chưa kết thúc đâu. Arcane tồn tại khắp mọi nơi.",
						"thai": "เจ้าจะต้องเสียใจ… การต่อสู้ครั้งนี้ยังไม่จบ อาร์เคนมีอยู่ทุกหนแห่ง",
						"hindi": "तुम्हें पछतावा होगा… यह लड़ाई खत्म नहीं हुई है। अरकेन हर जगह मौजूद है।"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "…헛소리 마.",
						"english": "…Nonsense.",
						"japanese": "…たわ言はやめろ。",
						"chinese": "…别胡说八道。",
						"french": "…N'importe quoi.",
						"spanish": "…No digas tonterías.",
						"vietnamese": "…Đừng nói nhảm.",
						"thai": "…อย่าพูดเพ้อเจ้อ",
						"hindi": "…बकवास बंद करो।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"speaker": "char",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "숨겨진 진실이 더 있을 거야. 반지의 기원을 찾아야 해.",
						"english": "There must be more hidden truths. We need to find the origin of the ring.",
						"japanese": "まだ隠された真実があるはずだ。指輪の起源を探さなければならない。",
						"chinese": "肯定还有更多隐藏的真相。我们必须找到戒指的起源。",
						"french": "Il doit y avoir d'autres vérités cachées. Nous devons trouver l'origine de l'anneau.",
						"spanish": "Debe haber más verdades ocultas. Debemos encontrar el origen del anillo.",
						"vietnamese": "Chắc chắn còn có những sự thật ẩn giấu khác. Phải tìm ra nguồn gốc của chiếc nhẫn.",
						"thai": "จะต้องมีเรื่องจริงที่ซ่อนอยู่อีกแน่ เราต้องตามหาต้นกำเนิดของแหวนให้เจอ",
						"hindi": "ज़रूर और भी छिपे हुए सच होंगे। हमें अंगूठी की उत्पत्ति का पता लगाना होगा।"
					},
					"speaker": "char",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "왕좌의 회랑은 여전히 비밀을 품고 있다. 더 깊은 곳으로 향해야 한다.",
						"english": "The Throne's Corridor still holds secrets. We must venture deeper.",
						"japanese": "玉座の回廊にはまだ秘密がある。もっと奥へと進まねばならない。",
						"chinese": "王座长廊仍藏有秘密。我们必须深入其中。",
						"french": "Le Couloir du Trône recèle encore des secrets. Nous devons nous aventurer plus profondément.",
						"spanish": "El Corredor del Trono aún guarda secretos. Debemos adentrarnos más.",
						"vietnamese": "Hành lang Ngai vàng vẫn còn ẩn chứa bí mật. Chúng ta phải tiến sâu hơn nữa.",
						"thai": "โถงทางเดินแห่งบัลลังก์ยังคงซ่อนความลับอยู่ เราต้องมุ่งหน้าลึกเข้าไปอีก",
						"hindi": "सिंहासन का गलियारा अभी भी रहस्य छुपाए हुए है। हमें और गहराई में जाना होगा।"
					},
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "char",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"emotion": "sad",
					"speaker": "char",
					"type": "speech",
					"content": {
						"korean": "더 이상은… 안 돼. 아르카인의 힘이 너무 강해.",
						"english": "No more... I can't. Arcane's power is too strong.",
						"japanese": "もうこれ以上は… ダメだ。アルカインの力が強すぎる。",
						"chinese": "不能再这样了… 阿尔凯恩的力量太强了。",
						"french": "Plus maintenant… Impossible. Le pouvoir d'Arcane est trop fort.",
						"spanish": "No más… No puedo. El poder de Arcane es demasiado fuerte.",
						"vietnamese": "Không thể nữa rồi… Sức mạnh của Arcane quá lớn.",
						"thai": "ไม่ได้แล้ว… พลังของอาร์เคนแข็งแกร่งเกินไป",
						"hindi": "अब और नहीं… नहीं। अरकेन की शक्ति बहुत प्रबल है।"
					}
				},
				{
					"speaker": "random_boss",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						5,
						4
					]
				},
				{
					"content": {
						"korean": "어리석은 자여. 네 의지는 이미 꺾였다.",
						"english": "Fool. Your will is already broken.",
						"japanese": "愚か者め。お前の意志は既に折れている。",
						"chinese": "愚蠢的家伙。你的意志早已被摧毁。",
						"french": "Imbécile. Ta volonté est déjà brisée.",
						"spanish": "Necio. Tu voluntad ya está rota.",
						"vietnamese": "Kẻ ngốc. Ý chí của ngươi đã bị bẻ gãy rồi.",
						"thai": "เจ้าโง่. เจ้าน่ะเสียสละไปแล้ว",
						"hindi": "मूर्ख। तुम्हारी इच्छाशक्ति पहले ही टूट चुकी है।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"action": "exit",
					"type": "direction",
					"speaker": "char",
					"direction": "down",
					"duration_ms": 400
				},
				{
					"content": {
						"korean": "{random_boss}의 힘을 거스를 순 없어. 너도 결국 나의 일부가 될 뿐.",
						"english": "You cannot defy the power of {random_boss}. You will merely become a part of me.",
						"japanese": "{random_boss}の力には逆らえない。お前も結局、私の一部となるだけだ。",
						"chinese": "你无法违抗{random_boss}的力量。你终将成为我的一部分。",
						"french": "Tu ne peux pas défier le pouvoir de {random_boss}. Tu ne feras que devenir une partie de moi.",
						"spanish": "No puedes desafiar el poder de {random_boss}. Tú también te convertirás en parte de mí.",
						"vietnamese": "Ngươi không thể chống lại sức mạnh của {random_boss}. Cuối cùng ngươi cũng sẽ trở thành một phần của ta thôi.",
						"thai": "เจ้าไม่อาจขัดขวางพลังของ{random_boss}ได้ เจ้าก็เป็นแค่ส่วนหนึ่งของข้าเท่านั้น",
						"hindi": "तुम {random_boss} की शक्ति का विरोध नहीं कर सकते। अंत में तुम भी मेरा ही एक हिस्सा बन जाओगे।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "나는 달라. 반드시 너를 막을 거야.",
						"english": "I am different. I will stop you, no matter what.",
						"japanese": "私は違う。必ずお前を止める。",
						"chinese": "我不同。我一定会阻止你。",
						"french": "Je suis différent. Je t'arrêterai coûte que coûte.",
						"spanish": "Yo soy diferente. Te detendré, cueste lo que cueste.",
						"vietnamese": "Ta khác. Ta nhất định sẽ ngăn ngươi lại.",
						"thai": "ฉันไม่เหมือนใคร ฉันจะหยุดนายให้ได้",
						"hindi": "मैं अलग हूँ। मैं तुम्हें ज़रूर रोकूँगा।"
					},
					"emotion": "angry"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "발버둥 쳐봐야 소용없어. 네 운명은 이미 정해졌다.",
						"english": "Struggling is futile. Your fate is sealed.",
						"japanese": "もがいても無駄だ。お前の運命は既に決まっている。",
						"chinese": "挣扎也无济于事。你的命运早已注定。",
						"french": "C'est inutile de lutter. Ton destin est déjà scellé.",
						"spanish": "Es inútil luchar. Tu destino ya está sellado.",
						"vietnamese": "Chống cự vô ích thôi. Số phận của ngươi đã định rồi.",
						"thai": "ดิ้นรนไปก็เปล่าประโยชน์ ชะตากรรมของเจ้าถูกกำหนดไว้แล้ว",
						"hindi": "तड़पना बेकार है। तुम्हारा भाग्य पहले ही तय हो चुका है।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…아직 끝나지 않았어.",
						"english": "...It's not over yet.",
						"japanese": "…まだ終わってない。",
						"chinese": "……还没结束。",
						"french": "...Ce n'est pas encore fini.",
						"spanish": "...Aún no ha terminado.",
						"vietnamese": "...Vẫn chưa kết thúc đâu.",
						"thai": "...ยังไม่จบ",
						"hindi": "...अभी खत्म नहीं हुआ है।"
					},
					"emotion": "angry"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"왕좌의 회랑은 더 깊은 심연이 되었다.",
			"아르카인의 힘이 폭주하고, 현실과 환상이 뒤섞였다.",
			"그의 자아가 저주처럼 회랑 곳곳에 스며들었다.",
			"반지의 저주는 끝나지 않았다. 이제, 세계가 잠식된다."
		],
		"english": [
			"The Corridor of the Throne became an even deeper abyss.",
			"Arcane's power ran wild, reality and illusion intertwined.",
			"His ego seeped into every corner of the corridor like a curse.",
			"The curse of the ring didn't end. Now, the world is being encroached upon."
		],
		"japanese": [
			"玉座の回廊は、さらに深い深淵となった。",
			"アーケインの力が暴走し、現実と幻想が混じり合った。",
			"彼の自我は呪いのように回廊の隅々に染み込んだ。",
			"指輪の呪いは終わらなかった。今、世界が侵食される。"
		],
		"chinese": [
			"王座的走廊变成了更深的深渊。",
			"奥术的力量暴走，现实与幻象交织。",
			"他的自我像诅咒一样渗透到走廊的每个角落。",
			"戒指的诅咒没有结束。现在，世界正在被侵蚀。"
		],
		"french": [
			"Le Couloir du Trône est devenu un abîme encore plus profond.",
			"Le pouvoir d'Arcane est devenu fou, la réalité et l'illusion se sont entremêlées.",
			"Son ego s'est infiltré dans chaque recoin du couloir comme une malédiction.",
			"La malédiction de l'anneau ne s'est pas arrêtée. Maintenant, le monde est envahi."
		],
		"spanish": [
			"El Corredor del Trono se convirtió en un abismo aún más profundo.",
			"El poder de Arcane se descontroló, la realidad y la fantasía se entrelazaron.",
			"Su ego se infiltró en cada rincón del corredor como una maldición.",
			"La maldición del anillo no terminó. Ahora, el mundo está siendo invadido."
		],
		"vietnamese": [
			"Hành lang Ngai vàng trở thành một vực thẳm sâu hơn.",
			"Sức mạnh của Arcane bùng nổ, thực tại và ảo ảnh hòa quyện.",
			"Cái tôi của hắn thấm vào mọi ngóc ngách hành lang như một lời nguyền.",
			"Lời nguyền của chiếc nhẫn không kết thúc. Giờ đây, thế giới đang bị xâm chiếm."
		],
		"thai": [
			"ระเบียงแห่งบัลลังก์กลายเป็นห้วงลึกที่มืดมิดยิ่งกว่าเดิม",
			"พลังของอาร์เคนคลุ้มคลั่ง ความจริงและภาพลวงตาปะปนกัน",
			"ตัวตนของเขาแทรกซึมไปทั่วทุกมุมของระเบียงราวกับคำสาป",
			"คำสาปของแหวนยังไม่สิ้นสุด บัดนี้ โลกกำลังถูกกลืนกิน"
		],
		"hindi": [
			"सिंहासन का गलियारा और गहरा पाताल बन गया।",
			"आर्केन की शक्ति बेकाबू हो गई, वास्तविकता और भ्रम आपस में मिल गए।",
			"उसका अहंकार एक श्राप की तरह गलियारे के हर कोने में समा गया।",
			"अंगूठी का श्राप खत्म नहीं हुआ। अब, दुनिया निगल ली जा रही है।"
		]
	}
} as const;
