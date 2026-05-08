export const scenario_RingBearer_V0_04 = {
	"scenario_id": "RingBearer_V0_04",
	"order": 4,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"lysandra": {
			"id": "mon_fc9333ab-62ae-411c-a12c-0d5d9f554a5a",
			"name": {
				"korean": "리산드라",
				"english": "Lysandra",
				"japanese": "リサンドラ",
				"chinese": "莉桑德拉",
				"french": "Lysandra",
				"spanish": "Lisandra",
				"vietnamese": "Lysandra",
				"thai": "ไลแซนดรา",
				"hindi": "लाइसैंड्रा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/883ef0d7-874d-4718-1a26-645c5b0f2900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/eeab84b3-ddb9-42ed-08f9-b3443b743b00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"그림자가 길어진다. 하나였던 그림자가, 어느새 둘이 된다.",
			"한 박자 늦게 따라붙는 또 다른 나.",
			"무기처럼 솟아오른 그림자들이 나를 공격한다.",
			"회랑 깊은 곳에서 들려오는 달콤한 속삭임… 진실은 어디에."
		],
		"english": [
			"Shadows lengthen. The single shadow, now two.",
			"Another me, following a beat behind.",
			"Shadows, rising like weapons, attack me.",
			"Sweet whispers from the depths of the corridor... Where lies the truth?"
		],
		"japanese": [
			"影が伸びる。一つだった影が、いつの間にか二つに。",
			"一拍遅れてついてくる、もう一人の私。",
			"武器のように立ち上がった影が私を襲う。",
			"回廊の奥深くから聞こえる甘い囁き… 真実はどこに。"
		],
		"chinese": [
			"影子拉长。原本一道影子，不知不觉变成了两道。",
			"另一个我，慢半拍地跟在后面。",
			"如武器般升起的影子向我袭来。",
			"走廊深处传来甜美的低语… 真相何在。"
		],
		"french": [
			"Les ombres s'allongent. L'ombre unique, désormais double.",
			"Un autre moi, suivant un battement derrière.",
			"Des ombres, s'élevant comme des armes, m'attaquent.",
			"De doux murmures venus des profondeurs du couloir… Où est la vérité ?"
		],
		"spanish": [
			"Las sombras se alargan. La única sombra, ahora son dos.",
			"Otro yo, siguiendo un latido más tarde.",
			"Sombras, surgiendo como armas, me atacan.",
			"Dulces susurros desde lo profundo del pasillo... ¿Dónde está la verdad?"
		],
		"vietnamese": [
			"Bóng tối kéo dài. Cái bóng đơn độc, giờ đây thành hai.",
			"Một bản ngã khác, theo sau một nhịp.",
			"Những cái bóng, trỗi dậy như vũ khí, tấn công tôi.",
			"Những lời thì thầm ngọt ngào từ sâu thẳm hành lang… Sự thật ở đâu?"
		],
		"thai": [
			"เงาที่ทอดยาว เงาเดียว บัดนี้กลายเป็นสอง",
			"อีกคนหนึ่งที่ตามมาล่าช้าไปหนึ่งจังหวะ",
			"เงาที่ผุดขึ้นมาราวกับอาวุธ โจมตีฉัน",
			"เสียงกระซิบหวานๆ จากส่วนลึกของโถงทางเดิน... ความจริงอยู่ที่ไหน"
		],
		"hindi": [
			"छायाएं लंबी होती हैं। अकेली छाया, अब दो हो गई है।",
			"एक और मैं, एक पल देर से पीछा कर रहा है।",
			"हथियारों की तरह उठती हुई छायाएं मुझ पर हमला करती हैं।",
			"गलियारे की गहराई से आती मीठी फुसफुसाहट... सच कहाँ है।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "좁은 회랑이 끝없이 이어졌다. 길어진 그림자가, 이상하게도 두 개였다.",
						"english": "The narrow corridor stretched endlessly. The lengthened shadow, strangely, was two.",
						"japanese": "狭い回廊が果てしなく続いていた。伸びた影が、なぜか二つだった。",
						"chinese": "狭窄的走廊无限延伸。拉长的影子，奇怪地变成了两道。",
						"french": "L'étroit couloir s'étendait à l'infini. L'ombre allongée, étrangement, était double.",
						"spanish": "El estrecho pasillo se extendía sin fin. La sombra alargada, extrañamente, eran dos.",
						"vietnamese": "Hành lang hẹp kéo dài vô tận. Cái bóng kéo dài, lạ lùng thay, lại là hai.",
						"thai": "โถงทางเดินแคบๆ ทอดยาวไม่มีที่สิ้นสุด เงาที่ทอดยาวออกไปกลับมีสองเงาอย่างประหลาด",
						"hindi": "संकीर्ण गलियारा अंतहीन रूप से फैला हुआ था। लंबी छाया, अजीब तरह से, दो थीं।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "내 그림자가… 둘이야?",
						"english": "My shadow... it's two?",
						"japanese": "私の影が…二つ？",
						"chinese": "我的影子… 是两个？",
						"french": "Mon ombre... elle est double ?",
						"spanish": "¿Mi sombra... son dos?",
						"vietnamese": "Bóng của tôi… là hai sao?",
						"thai": "เงาของฉัน...มีสองเงาเหรอ?",
						"hindi": "मेरी छाया... दो हैं?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "direction",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "lysandra"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "lysandra",
					"content": {
						"korean": "조심해. 여긴 그림자도 믿을 수 없어.",
						"english": "Be careful. Here, you can't even trust shadows.",
						"japanese": "気を付けて。ここでは影すら信じられない。",
						"chinese": "小心。这里连影子都不可信。",
						"french": "Fais attention. Ici, même les ombres ne sont pas dignes de confiance.",
						"spanish": "Ten cuidado. Aquí, ni siquiera puedes confiar en las sombras.",
						"vietnamese": "Cẩn thận. Ở đây, đến cả bóng cũng không thể tin được.",
						"thai": "ระวัง ที่นี่แม้แต่เงาก็เชื่อไม่ได้",
						"hindi": "सावधान रहें। यहाँ, तुम छायाओं पर भी भरोसा नहीं कर सकते।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "무슨 소리야?",
						"english": "What are you talking about?",
						"japanese": "何のことだ？",
						"chinese": "你在说什么？",
						"french": "De quoi parles-tu ?",
						"spanish": "¿De qué hablas?",
						"vietnamese": "Bạn đang nói gì vậy?",
						"thai": "พูดอะไรน่ะ?",
						"hindi": "तुम क्या कह रहे हो?"
					}
				},
				{
					"content": {
						"korean": "너희의 가능성들이… 깨어났어.",
						"english": "Your potentials... have awakened.",
						"japanese": "君たちの可能性が…目覚めたんだ。",
						"chinese": "你们的可能性… 已经觉醒了。",
						"french": "Vos potentiels... se sont éveillés.",
						"spanish": "Vuestros potenciales... han despertado.",
						"vietnamese": "Những tiềm năng của các ngươi… đã thức tỉnh.",
						"thai": "ศักยภาพของพวกเธอ...ตื่นขึ้นแล้ว",
						"hindi": "तुम्हारी संभावनाएँ... जागृत हो गई हैं।"
					},
					"emotion": "sad",
					"speaker": "lysandra",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "lysandra",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "lysandra",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "왕관 조각들… 여기저기 흩어져 있지?",
						"english": "Crown fragments... scattered everywhere, aren't they?",
						"japanese": "王冠の破片… あちこちに散らばってるだろ？",
						"chinese": "王冠碎片… 到处都散落着，不是吗？",
						"french": "Les fragments de couronne... dispersés partout, n'est-ce pas ?",
						"spanish": "Fragmentos de la corona... esparcidos por todas partes, ¿verdad?",
						"vietnamese": "Những mảnh vương miện… rải rác khắp nơi, phải không?",
						"thai": "ชิ้นส่วนมงกุฎ...กระจัดกระจายไปทั่วเลยใช่ไหม?",
						"hindi": "ताज के टुकड़े... हर जगह बिखरे हुए हैं, है ना?"
					}
				},
				{
					"content": {
						"korean": "응. 많던데.",
						"english": "Yeah. There were many.",
						"japanese": "うん、たくさんあったよ。",
						"chinese": "嗯，很多。",
						"french": "Oui, il y en avait beaucoup.",
						"spanish": "Sí, había muchos.",
						"vietnamese": "Ừ. Nhiều lắm.",
						"thai": "อืม มีเยอะเลย",
						"hindi": "हाँ। बहुत थे।"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "lysandra",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "그게 전부 한 명의 왕관이었어. 너무 많은 것을 짊어졌거든.",
						"english": "All of them were a single crown. It bore too much.",
						"japanese": "それらはすべて一つの王冠だった。あまりにも多くを背負いすぎていたからだ。",
						"chinese": "那些都是同一顶王冠。它承载了太多。",
						"french": "C'était tout une seule couronne. Elle portait trop de choses.",
						"spanish": "Todo era una sola corona. Había cargado demasiado.",
						"vietnamese": "Tất cả chỉ là một vương miện. Nó đã gánh vác quá nhiều.",
						"thai": "ทั้งหมดนั้นคือมงกุฎเดียว มันแบกรับมากเกินไป",
						"hindi": "वे सब एक ही मुकुट थे। उसने बहुत कुछ ढोया था।"
					}
				},
				{
					"content": {
						"korean": "그럼… 그림자도 그래?",
						"english": "Then... the shadows too?",
						"japanese": "じゃあ…影もそうなの？",
						"chinese": "那么…影子也是吗？",
						"french": "Alors… les ombres aussi ?",
						"spanish": "¿Entonces... las sombras también?",
						"vietnamese": "Vậy... bóng tối cũng vậy sao?",
						"thai": "ถ้าอย่างนั้น...เงาด้วยหรือเปล่า?",
						"hindi": "तो... परछाइयाँ भी?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "그래. 힘을 쫓던 자들이, 결국 그림자에 잠식됐지.",
						"english": "Yes. Those who chased power were eventually consumed by shadows.",
						"japanese": "そうだ。力を追った者たちが、結局影に飲み込まれたんだ。",
						"chinese": "是的。那些追逐力量的人，最终被影子侵蚀了。",
						"french": "Oui. Ceux qui poursuivaient le pouvoir ont fini par être engloutis par les ombres.",
						"spanish": "Sí. Aquellos que persiguieron el poder, finalmente fueron consumidos por las sombras.",
						"vietnamese": "Phải. Những kẻ theo đuổi sức mạnh, cuối cùng đã bị bóng tối nuốt chửng.",
						"thai": "ใช่แล้ว ผู้ที่แสวงหาอำนาจ สุดท้ายก็ถูกเงามืดกลืนกิน",
						"hindi": "हाँ। शक्ति का पीछा करने वाले, अंततः परछाइयों में समा गए।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "lysandra"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "lysandra",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "분신들은 강해. 너희의 가장 강한 순간을 모방할 거야.",
						"english": "The clones are strong. They will mimic your strongest moments.",
						"japanese": "分身たちは強い。お前たちの最も強い瞬間を模倣するだろう。",
						"chinese": "分身很强大。它们会模仿你们最强的时刻。",
						"french": "Les clones sont forts. Ils imiteront vos moments les plus puissants.",
						"spanish": "Los dobles son fuertes. Imitarán vuestros momentos más poderosos.",
						"vietnamese": "Bản sao rất mạnh. Chúng sẽ mô phỏng khoảnh khắc mạnh nhất của các ngươi.",
						"thai": "ร่างแยกแข็งแกร่ง พวกมันจะเลียนแบบช่วงเวลาที่แข็งแกร่งที่สุดของพวกเจ้า",
						"hindi": "अवतार शक्तिशाली हैं। वे तुम्हारे सबसे मजबूत क्षणों की नकल करेंगे।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "lysandra"
				},
				{
					"content": {
						"korean": "우리랑 싸운다고?",
						"english": "Fight us?",
						"japanese": "私たちと戦うって？",
						"chinese": "和我们战斗？",
						"french": "Combattre contre nous ?",
						"spanish": "¿Luchar contra nosotros?",
						"vietnamese": "Đấu với chúng ta sao?",
						"thai": "จะสู้กับเรา?",
						"hindi": "हमसे लड़ोगे?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…곧 알게 될 거야. 이 회랑은, 모든 가능성을 집어삼키거든.",
						"english": "...You'll soon find out. This corridor devours all possibilities.",
						"japanese": "…すぐにわかるだろう。この回廊は、あらゆる可能性を飲み込むからな。",
						"chinese": "…你很快就会明白。这条回廊会吞噬所有可能性。",
						"french": "...Tu le sauras bientôt. Ce couloir dévore toutes les possibilités.",
						"spanish": "...Pronto lo sabrás. Este pasillo devora todas las posibilidades.",
						"vietnamese": "...Ngươi sẽ sớm biết thôi. Hành lang này nuốt chửng mọi khả năng.",
						"thai": "...เจ้าจะรู้ในไม่ช้า โถงทางเดินแห่งนี้กลืนกินทุกความเป็นไปได้",
						"hindi": "...तुम्हें जल्द ही पता चलेगा। यह गलियारा सभी संभावनाओं को निगल जाता है।"
					},
					"speaker": "lysandra",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "망설이면 안 된다는 거네.",
						"english": "So, no hesitation.",
						"japanese": "ためらってはいけないってことね。",
						"chinese": "也就是说，不能犹豫。",
						"french": "Donc, il ne faut pas hésiter.",
						"spanish": "Entonces, no hay que dudar.",
						"vietnamese": "Vậy là không được do dự.",
						"thai": "หมายความว่า ห้ามลังเลสินะ",
						"hindi": "तो, संकोच नहीं करना चाहिए।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그래. 후회하지 마.",
						"english": "Yes. Don't regret it.",
						"japanese": "そうだ。後悔するな。",
						"chinese": "是的。别后悔。",
						"french": "Oui. Ne regrette pas.",
						"spanish": "Sí. No te arrepientas.",
						"vietnamese": "Đúng vậy. Đừng hối hận.",
						"thai": "ใช่ อย่าเสียใจ",
						"hindi": "हाँ। पछताना मत।"
					},
					"emotion": "base",
					"speaker": "lysandra",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "회랑 깊은 곳에서, 부드러운 환청이 들려왔다. \"한 번만 손에 올려놓아 봐. 이해할 수 있을 거야.\"",
						"english": "From deep within the corridor, a soft hallucination was heard. \"Just place it in your hand once. You'll understand.\"",
						"japanese": "回廊の奥深くから、柔らかな幻聴が聞こえてきた。「一度だけ手に取ってみて。理解できるはずだ。」",
						"chinese": "在回廊深处，传来柔和的幻听。“只放一次在手上。你就能理解了。”",
						"french": "Du plus profond du couloir, une douce hallucination se fit entendre. « Pose-le juste une fois dans ta main. Tu comprendras. »",
						"spanish": "Desde lo más profundo del pasillo, se escuchó una suave alucinación. «Solo ponlo en tu mano una vez. Lo entenderás.»",
						"vietnamese": "Từ sâu trong hành lang, một ảo thanh nhẹ nhàng vang lên. ",
						"thai": "จากส่วนลึกของโถงทางเดิน มีเสียงหลอนอันอ่อนโยนดังขึ้น ",
						"hindi": "गलियारे के गहरे अंदर से, एक मधुर भ्रांति सुनाई दी। "
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…누가 말하는 것 같아.",
						"english": "...Someone's speaking.",
						"japanese": "…誰かが話しているようだ。",
						"chinese": "……好像有人在说话。",
						"french": "...J'entends quelqu'un parler.",
						"spanish": "...Creo que alguien está hablando.",
						"vietnamese": "...Có vẻ có ai đó đang nói.",
						"thai": "...เหมือนมีใครบางคนกำลังพูด",
						"hindi": "...लगता है कोई बोल रहा है।"
					}
				},
				{
					"speaker": "lysandra",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "lysandra",
					"emotion": "angry",
					"content": {
						"korean": "들었어? 그 목소리, 믿지 마.",
						"english": "Did you hear that? Don't trust that voice.",
						"japanese": "聞いた？その声、信じちゃダメ。",
						"chinese": "听到了吗？别相信那个声音。",
						"french": "Tu as entendu ? Ne fais pas confiance à cette voix.",
						"spanish": "¿Lo oíste? No confíes en esa voz.",
						"vietnamese": "Nghe thấy không? Đừng tin giọng nói đó.",
						"thai": "ได้ยินไหม? อย่าเชื่อเสียงนั้นเด็ดขาด",
						"hindi": "सुना क्या? उस आवाज़ पर भरोसा मत करना।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "왜?",
						"english": "Why?",
						"japanese": "なぜ？",
						"chinese": "为什么？",
						"french": "Pourquoi ?",
						"spanish": "¿Por qué?",
						"vietnamese": "Tại sao?",
						"thai": "ทำไม?",
						"hindi": "क्यों?"
					}
				},
				{
					"content": {
						"korean": "그건 네 가장 깊은 욕망을 건드려. 반지는 그렇게 주인을 꾀는 거야.",
						"english": "It preys on your deepest desires. That's how the ring tempts its master.",
						"japanese": "それはお前の最も深い欲望を刺激する。指輪はそうやって主人を誘惑するんだ。",
						"chinese": "它会触及你内心最深处的欲望。戒指就是这样引诱主人的。",
						"french": "Elle touche tes désirs les plus profonds. C'est ainsi que l'anneau tente son maître.",
						"spanish": "Toca tus deseos más profundos. Así es como el anillo tienta a su dueño.",
						"vietnamese": "Nó chạm vào những khao khát sâu thẳm nhất của ngươi. Đó là cách chiếc nhẫn quyến rũ chủ nhân của nó.",
						"thai": "มันกระตุ้นความปรารถนาที่ลึกที่สุดของเจ้า แหวนจะล่อลวงนายของมันด้วยวิธีนี้",
						"hindi": "वह तुम्हारी सबसे गहरी इच्छाओं को छूता है। अंगूठी ऐसे ही अपने मालिक को बहकाती है।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "lysandra"
				},
				{
					"content": {
						"korean": "거대한 그림자가 길을 막아섰다.",
						"english": "A giant shadow blocked the path.",
						"japanese": "巨大な影が道を塞いだ。",
						"chinese": "一个巨大的黑影挡住了去路。",
						"french": "Une ombre gigantesque bloquait le chemin.",
						"spanish": "Una sombra gigantesca bloqueó el camino.",
						"vietnamese": "Một bóng tối khổng lồ chặn đường.",
						"thai": "เงาขนาดมหึมาขวางทาง",
						"hindi": "एक विशाल परछाई ने रास्ता रोक लिया।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "저건 또 뭐야!",
						"english": "What is that now?!",
						"japanese": "今度は何だ！",
						"chinese": "那又是什么？！",
						"french": "Qu'est-ce que c'est encore que ça !",
						"spanish": "¡¿Y eso qué es ahora?!",
						"vietnamese": "Cái quái gì nữa đây!",
						"thai": "นั่นมันอะไรกันอีก!",
						"hindi": "यह अब क्या है!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "어리석은 그림자들… 감히 내 영역을 침범하다니.",
						"english": "Foolish shadows... daring to invade my domain.",
						"japanese": "愚かな影どもめ…よくも私の領域を侵したな。",
						"chinese": "愚蠢的影子们……竟敢侵犯我的领地。",
						"french": "Ombres stupides... oser envahir mon domaine.",
						"spanish": "Sombras estúpidas... ¿cómo osáis invadir mi dominio?",
						"vietnamese": "Những bóng tối ngu xuẩn... dám xâm phạm lãnh địa của ta.",
						"thai": "พวกเงาโง่เง่า... บังอาจรุกล้ำอาณาเขตของข้า",
						"hindi": "मूर्ख परछाइयाँ... मेरे क्षेत्र में घुसपैठ करने की हिम्मत।"
					}
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "크… 넌… 나와… 다르다…",
						"english": "Ugh... You... are... different...",
						"japanese": "くっ…お前は…俺とは…違う…",
						"chinese": "呃…你…与我…不同…",
						"french": "Grr... Tu... es... différent...",
						"spanish": "Ugh... Tú... eres... diferente...",
						"vietnamese": "Khụ... Ngươi... không... giống ta...",
						"thai": "อึก... เจ้า... แตกต่าง... จากข้า...",
						"hindi": "उह... तुम... मुझसे... अलग हो..."
					},
					"speaker": "random_boss",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "무슨 의미야?",
						"english": "What do you mean?",
						"japanese": "どういう意味だ？",
						"chinese": "什么意思？",
						"french": "Que veux-tu dire ?",
						"spanish": "¿Qué quieres decir?",
						"vietnamese": "Ý ngươi là gì?",
						"thai": "หมายความว่าอะไร?",
						"hindi": "तुम्हारा क्या मतलब है?"
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…나는… 그저… 그림자… 하나…",
						"english": "...I am... just... one shadow...",
						"japanese": "…俺は…ただの…影…一つ…",
						"chinese": "…我…只是…一个…影子…",
						"french": "...Je ne suis... qu'une... ombre...",
						"spanish": "...Yo soy... solo... una sombra...",
						"vietnamese": "...Ta... chỉ là... một cái... bóng...",
						"thai": "...ข้า... เป็นแค่... เงา... หนึ่งเดียว...",
						"hindi": "...मैं... बस... एक... परछाई हूँ..."
					}
				},
				{
					"content": {
						"korean": "...?",
						"english": "...?",
						"japanese": "…？",
						"chinese": "…？",
						"french": "...?",
						"spanish": "...?",
						"vietnamese": "...?",
						"thai": "...?",
						"hindi": "...?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "그림자는 흩어졌다. 하지만 회랑 깊은 곳에서, 여전히 달콤한 속삭임이 들리는 듯했다.",
						"english": "The shadow dispersed. Yet, from deep within the corridor, a sweet whisper still seemed to echo.",
						"japanese": "影は消え去った。しかし、回廊の奥深くから、甘い囁きがまだ聞こえるようだった。",
						"chinese": "影子消散了。然而，在走廊深处，似乎仍能听到甜美的低语。",
						"french": "L'ombre se dissipa. Pourtant, au fond du couloir, un doux murmure semblait encore résonner.",
						"spanish": "La sombra se dispersó. Sin embargo, desde lo más profundo del corredor, un dulce susurro parecía seguir resonando.",
						"vietnamese": "Bóng tối tan biến. Nhưng từ sâu trong hành lang, một lời thì thầm ngọt ngào vẫn dường như văng vẳng.",
						"thai": "เงาได้สลายไปแล้ว ทว่าจากส่วนลึกของโถงทางเดิน เสียงกระซิบหวานๆ ยังคงก้องกังวานอยู่",
						"hindi": "परछाई बिखर गई। फिर भी, गलियारे की गहराई से, एक मीठी फुसफुसाहट अभी भी गूँजती हुई लग रही थी।"
					}
				},
				{
					"speaker": "lysandra",
					"action": "enter",
					"spot": [
						3,
						3
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "잘했어. 하지만, 아직 끝이 아니야.",
						"english": "Well done. But, it's not over yet.",
						"japanese": "よくやった。だが、まだ終わりではない。",
						"chinese": "干得好。但是，还没结束。",
						"french": "Bien joué. Mais, ce n'est pas encore fini.",
						"spanish": "Bien hecho. Pero, aún no ha terminado.",
						"vietnamese": "Làm tốt lắm. Nhưng, vẫn chưa kết thúc đâu.",
						"thai": "ทำได้ดีมาก แต่ยังไม่จบแค่นี้หรอกนะ",
						"hindi": "शाबाश। लेकिन, अभी खत्म नहीं हुआ है।"
					},
					"speaker": "lysandra",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그 목소리의 주인은… 너를 기다리고 있을 거야.",
						"english": "The owner of that voice... will be waiting for you.",
						"japanese": "その声の主は…お前を待っているだろう。",
						"chinese": "那个声音的主人…应该在等你。",
						"french": "Le propriétaire de cette voix... t'attendra.",
						"spanish": "El dueño de esa voz... te estará esperando.",
						"vietnamese": "Chủ nhân của giọng nói đó... sẽ đợi ngươi.",
						"thai": "เจ้าของเสียงนั้น... จะรอเจ้าอยู่",
						"hindi": "उस आवाज़ का मालिक... तुम्हारा इंतज़ार कर रहा होगा।"
					},
					"type": "speech",
					"speaker": "lysandra",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "길은, 더욱 깊은 어둠으로 이어졌다.",
						"english": "The path led to even deeper darkness.",
						"japanese": "道は、さらに深い闇へと続いていた。",
						"chinese": "道路，通向了更深的黑暗。",
						"french": "Le chemin menait à une obscurité encore plus profonde.",
						"spanish": "El camino conducía a una oscuridad aún más profunda.",
						"vietnamese": "Con đường dẫn đến bóng tối sâu thẳm hơn.",
						"thai": "เส้นทางนำไปสู่ความมืดมิดที่ลึกยิ่งกว่าเดิม",
						"hindi": "रास्ता और भी गहरे अंधेरे में चला गया।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "어리석은 그림자들이여… 영원히 잠식될지어다.",
						"english": "Foolish shadows... be devoured forever.",
						"japanese": "愚かな影たちよ…永遠に喰われ尽くせ。",
						"chinese": "愚蠢的影子们…永远被吞噬吧。",
						"french": "Ombres insensées... soyez dévorées pour l'éternité.",
						"spanish": "Sombras necias... sean devoradas para siempre.",
						"vietnamese": "Những cái bóng ngu ngốc... hãy bị nuốt chửng mãi mãi.",
						"thai": "เงาที่โง่เขลา... จงถูกกลืนกินไปชั่วนิรันดร์",
						"hindi": "मूर्ख परछाइयाँ... हमेशा के लिए निगल ली जाएँगी।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "아직… 안 끝났어.",
						"english": "Not yet... It's not over.",
						"japanese": "まだ…終わってない。",
						"chinese": "还没…结束。",
						"french": "Ce n'est pas encore fini...",
						"spanish": "Aún no... ha terminado.",
						"vietnamese": "Vẫn chưa... kết thúc.",
						"thai": "ยัง…ไม่จบ",
						"hindi": "अभी... खत्म नहीं हुआ है।"
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…발버둥 쳐 보아라. 너희의 가능성마저 삼켜주마.",
						"english": "...Struggle all you want. I'll even swallow your potential.",
						"japanese": "…もがいてみろ。お前たちの可能性すら飲み込んでやろう。",
						"chinese": "…挣扎吧。我将吞噬你们的一切可能性。",
						"french": "...Agitez-vous. Je dévorerai même votre potentiel.",
						"spanish": "...Luchad. Devoraré incluso vuestro potencial.",
						"vietnamese": "...Cứ giãy giụa đi. Ta sẽ nuốt chửng cả tiềm năng của các ngươi.",
						"thai": "…พยายามดิ้นรนไปเถอะ ข้าจะกลืนกินแม้แต่ความเป็นไปได้ของพวกเจ้า",
						"hindi": "...संघर्ष कर लो। मैं तुम्हारी संभावनाओं को भी निगल जाऊँगा।"
					}
				},
				{
					"content": {
						"korean": "다음엔… 반드시…",
						"english": "Next time... definitely...",
						"japanese": "次こそは…必ず…",
						"chinese": "下次…一定…",
						"french": "La prochaine fois... absolument...",
						"spanish": "La próxima vez... sin falta...",
						"vietnamese": "Lần tới... nhất định...",
						"thai": "ครั้งหน้า…แน่นอน…",
						"hindi": "अगली बार... निश्चित रूप से..."
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "나약한 그림자들… 모두 내 일부가 될 것이다.",
						"english": "Weak shadows... all of you shall become part of me.",
						"japanese": "弱き影たちよ…全て我が一部となるのだ。",
						"chinese": "弱小的影子们……你们都将成为我的一部分。",
						"french": "Ombres faibles... vous ferez tous partie de moi.",
						"spanish": "Sombras débiles... todos vosotros seréis parte de mí.",
						"vietnamese": "Những bóng tối yếu ớt... tất cả các ngươi sẽ trở thành một phần của ta.",
						"thai": "พวกเงาที่อ่อนแอ... พวกเจ้าทั้งหมดจะต้องกลายเป็นส่วนหนึ่งของข้า",
						"hindi": "कमज़ोर परछाइयाँ... तुम सब मेरे अंश बनोगे।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "헛소리 마!",
						"english": "Nonsense!",
						"japanese": "何を言ってる！",
						"chinese": "胡说八道！",
						"french": "N'importe quoi !",
						"spanish": "¡Tonterías!",
						"vietnamese": "Đừng nói nhảm!",
						"thai": "ไร้สาระ!",
						"hindi": "बकवास बंद करो!"
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "너희의 가능성은, 곧 나의 것이 될 운명.",
						"english": "Your potential is destined to become mine.",
						"japanese": "お前たちの可能性は、いずれ私のものとなる運命なのだ。",
						"chinese": "你们的潜力，注定将成为我的所有。",
						"french": "Votre potentiel est destiné à devenir le mien.",
						"spanish": "Vuestro potencial está destinado a ser mío.",
						"vietnamese": "Tiềm năng của các ngươi, định mệnh sẽ sớm trở thành của ta.",
						"thai": "ศักยภาพของพวกเจ้า มีชะตากรรมที่จะกลายเป็นของข้า",
						"hindi": "तुम्हारी क्षमता, जल्द ही मेरी होने वाली है।"
					}
				},
				{
					"content": {
						"korean": "절대 안 돼!",
						"english": "Never!",
						"japanese": "絶対だめだ！",
						"chinese": "绝不！",
						"french": "Jamais !",
						"spanish": "¡Nunca!",
						"vietnamese": "Tuyệt đối không!",
						"thai": "ไม่มีทาง!",
						"hindi": "बिल्कुल नहीं!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"id": 15
		}
	]
} as const;
