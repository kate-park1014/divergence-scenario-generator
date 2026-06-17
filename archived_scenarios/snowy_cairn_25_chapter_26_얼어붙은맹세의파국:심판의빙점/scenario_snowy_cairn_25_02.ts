export const scenario_snowy_cairn_25_02 = {
	"scenario_id": "snowy_cairn_25_02",
	"order": 2,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"ivar": {
			"id": "mon_d8a80adc-9315-47b5-8c30-97ce33672bce",
			"name": {
				"korean": "이바르",
				"english": "Ivar",
				"japanese": "イヴァー",
				"chinese": "伊瓦尔",
				"french": "Ivar",
				"spanish": "Ivar",
				"vietnamese": "Ivar",
				"thai": "ไอวาร์",
				"hindi": "इवर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8dd7872b-d4df-44fd-b1a1-083a9156e700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2622fb62-daf4-42d1-a83b-2b78869d3e00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"북부 설원, 얼어붙은 맹세가 비수로 돌아왔다.",
			"브란의 배신. 팀은 산산이 조각나기 시작했다.",
			"리더 이바르는 필사적이었지만, 균열은 이미 깊어지고 있었다.",
			"고대의 돌무덤, 케른은 냉혹한 심판을 준비하고 있었다."
		],
		"english": [
			"Northern Snowfield. A frozen oath, a dagger's sting.",
			"Bran's betrayal. The team began to shatter.",
			"Leader Ivar was desperate, but the rift was already deepening.",
			"The ancient cairn, preparing a ruthless judgment."
		],
		"japanese": [
			"北部雪原、凍てついた誓いが凶刃となる。",
			"ブランの裏切り。チームは砕け散り始めた。",
			"リーダー、イヴァルは必死だったが、亀裂はすでに深まっていた。",
			"古の石塚、ケルンは冷酷な審判を準備していた。"
		],
		"chinese": [
			"北境雪原，冰封誓言化作利刃。",
			"布兰背叛。团队濒临崩溃。",
			"首领伊瓦尔虽拼死挣扎，裂痕却已愈发深刻。",
			"古老石冢，凯恩正酝酿着无情审判。"
		],
		"french": [
			"Plaines du Nord. Le serment gelé est devenu une lame.",
			"La trahison de Bran. L'équipe se délitait.",
			"Ivar, le chef, était désespéré, mais la fracture s'était déjà creusée.",
			"L'ancien cairn préparait un jugement impitoyable."
		],
		"spanish": [
			"Yermos del Norte. Un juramento helado, ahora un puñal.",
			"La traición de Bran. El equipo se desmoronaba.",
			"El líder Ivar estaba desesperado, pero la grieta ya se profundizaba.",
			"El antiguo túmulo, Cairn, preparaba un juicio implacable."
		],
		"vietnamese": [
			"Bắc Tuyết Nguyên. Lời thề băng giá hóa thành dao găm.",
			"Sự phản bội của Bran. Nhóm bắt đầu tan rã.",
			"Thủ lĩnh Ivar đã tuyệt vọng, nhưng vết nứt đã sâu hơn.",
			"Mộ đá cổ đại, Cairn, đang chuẩn bị một phán xét tàn nhẫn."
		],
		"thai": [
			"ทุ่งหิมะแดนเหนือ คำสาบานเยือกแข็ง กลายเป็นคมมีด.",
			"การทรยศของบราน ทีมเริ่มแตกเป็นเสี่ยงๆ.",
			"หัวหน้าไอวาร์สิ้นหวัง แต่รอยร้าวได้ลึกขึ้นแล้ว.",
			"หลุมศพหินโบราณ ไคร์น กำลังเตรียมการพิพากษาอันไร้ความปรานี."
		],
		"hindi": [
			"उत्तरी बर्फीले मैदान। जमी हुई शपथ खंजर बन गई।",
			"ब्रैन का विश्वासघात। टीम बिखरने लगी।",
			"नेता इवर हताश था, लेकिन दरार पहले ही गहरी हो रही थी।",
			"प्राचीन पत्थरों का ढेर, केर्न, एक बेरहम न्याय की तैयारी कर रहा था।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "브란의 행동은 모두를 혼란에 빠뜨렸다. 맹세가 조각나는 소리였다.",
						"english": "Bran's actions plunged all into chaos. An oath, shattered.",
						"japanese": "ブランの行動が皆を混乱に陥れた。誓いが砕け散る音だった。",
						"chinese": "布兰之举，众皆惶恐。誓言碎裂之声，不绝于耳。",
						"french": "Les actes de Bran semèrent le chaos. Le serment se brisait.",
						"spanish": "Las acciones de Bran sumieron a todos en el caos. Un juramento hecho añicos.",
						"vietnamese": "Hành động của Bran khiến mọi người hoảng loạn. Đó là tiếng lời thề vỡ vụn.",
						"thai": "การกระทำของบรานทำให้ทุกคนสับสนวุ่นวาย มันคือเสียงของคำสาบานที่แตกสลาย.",
						"hindi": "ब्रैन के कार्यों ने सभी को अराजकता में धकेल दिया। यह एक शपथ के टूटने की आवाज थी।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "브란… 정말 우리를 배신한 거야?",
						"english": "Bran... did you really betray us?",
						"japanese": "ブラン…本当に私たちを裏切ったのか？",
						"chinese": "布兰……你真的背叛了我们吗？",
						"french": "Bran... nous as-tu vraiment trahis ?",
						"spanish": "Bran... ¿realmente nos traicionaste?",
						"vietnamese": "Bran… cậu thật sự phản bội chúng tôi sao?",
						"thai": "บราน... เจ้าทรยศพวกเราจริงๆ หรือ?",
						"hindi": "ब्रैन... क्या तुमने सच में हमें धोखा दिया?"
					},
					"emotion": "sad"
				},
				{
					"action": "enter",
					"type": "direction",
					"speaker": "ivar",
					"spot": [
						5,
						2
					],
					"duration_ms": 500
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "정신 차려! 아직 끝나지 않았어.",
						"english": "Snap out of it! It's not over yet.",
						"japanese": "しっかりしろ！まだ終わってないぞ。",
						"chinese": "振作起来！还没结束呢。",
						"french": "Reprends-toi ! Ce n'est pas encore fini.",
						"spanish": "¡Reacciona! Esto no ha terminado.",
						"vietnamese": "Tỉnh táo lại đi! Vẫn chưa kết thúc đâu.",
						"thai": "ตั้งสติ! ยังไม่จบ!",
						"hindi": "होश में आओ! अभी खत्म नहीं हुआ है।"
					},
					"speaker": "ivar",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "리더? 이제 아무도 당신을 믿지 않아.",
						"english": "Leader? No one trusts you anymore.",
						"japanese": "リーダー？もう誰もあなたを信じない。",
						"chinese": "首领？没人再相信你了。",
						"french": "Chef ? Plus personne ne vous fait confiance.",
						"spanish": "¿Líder? Ya nadie confía en ti.",
						"vietnamese": "Thủ lĩnh? Giờ không ai tin ông nữa đâu.",
						"thai": "หัวหน้า? ไม่มีใครเชื่อใจท่านอีกแล้ว.",
						"hindi": "नेता? अब कोई तुम पर विश्वास नहीं करता।"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "ivar",
					"spot": [
						4,
						2
					]
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"content": {
						"korean": "내 책임이다. 하지만 이대로 무너질 순 없어.",
						"english": "My responsibility. But I can't crumble like this.",
						"japanese": "私の責任だ。だが、このままでは終われない。",
						"chinese": "这是我的责任。但我不能就这样倒下。",
						"french": "C'est ma faute. Mais je ne peux pas flancher ainsi.",
						"spanish": "Es mi culpa. Pero no puedo desmoronarme así.",
						"vietnamese": "Là lỗi của tôi. Nhưng tôi không thể sụp đổ như thế này.",
						"thai": "เป็นความรับผิดชอบของข้า แต่ข้าจะล้มไม่ได้แบบนี้.",
						"hindi": "यह मेरी जिम्मेदारी है। लेकिन मैं इस तरह टूट नहीं सकता।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "무너진 건 맹세야. 누가 다시 세울 수 있겠어?",
						"english": "The oath crumbled. Who can mend it now?",
						"japanese": "砕かれたのは誓いだ。誰がそれを立て直せる？",
						"chinese": "崩塌的是誓言。谁能再将其重建？",
						"french": "Le serment est brisé. Qui le reconstruira ?",
						"spanish": "El juramento se rompió. ¿Quién podrá rehacerlo?",
						"vietnamese": "Điều sụp đổ là lời thề. Ai có thể dựng lại nó được?",
						"thai": "สิ่งที่พังทลายคือคำสาบาน ใครจะสามารถสร้างมันขึ้นมาใหม่ได้?",
						"hindi": "जो टूटा है वो शपथ है। इसे कौन फिर से बना सकता है?"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "돌무덤 케른에서 이상한 냉기가 뿜어져 나왔다. 불안감이 엄습했다.",
						"english": "A strange chill emanated from the stone cairn. An unsettling feeling crept in.",
						"japanese": "石のケルンから奇妙な冷気が放たれた。不安感が襲いかかった。",
						"chinese": "石冢凯恩散发出诡异的寒气。不安感袭来。",
						"french": "Un froid étrange émanait du cairn de pierres. Une sensation d'inquiétude les envahit.",
						"spanish": "Un frío extraño emanaba del túmulo de piedras. Una sensación inquietante se apoderó de ellos.",
						"vietnamese": "Một luồng khí lạnh kỳ lạ tỏa ra từ ụ đá. Cảm giác bất an ập đến.",
						"thai": "ความเย็นยะเยือกประหลาดแผ่ออกมาจากกองหินไครน์ ความรู้สึกไม่สบายใจเข้าปกคลุม",
						"hindi": "पत्थर के ढेर से एक अजीब सी ठंडक निकली। बेचैनी छा गई।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "ivar",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "약속했잖아. 우린 서로를 믿는다고.",
						"english": "We promised. We trust each other.",
						"japanese": "約束したじゃないか。私たちは互いを信じると。",
						"chinese": "我们说好的。我们互相信任。",
						"french": "Tu as promis. On se fait confiance.",
						"spanish": "Lo prometimos. Confiamos el uno en el otro.",
						"vietnamese": "Chúng ta đã hứa rồi mà. Rằng chúng ta tin tưởng lẫn nhau.",
						"thai": "เราสัญญากันแล้วนี่ เราเชื่อใจกัน",
						"hindi": "हमने वादा किया था। हम एक-दूसरे पर भरोसा करते हैं।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…내가 틀렸던 건가. 리더로서.",
						"english": "...Was I wrong? As a leader.",
						"japanese": "…私が間違っていたのか。リーダーとして。",
						"chinese": "……我错了吗？作为一名领导者。",
						"french": "...Avais-je tort ? En tant que leader.",
						"spanish": "...¿Me equivoqué? Como líder.",
						"vietnamese": "...Mình đã sai rồi sao? Với tư cách là một người lãnh đạo.",
						"thai": "...ฉันผิดไปแล้วหรือเปล่า? ในฐานะผู้นำ",
						"hindi": "...क्या मैं गलत था? एक नेता के रूप में।"
					},
					"speaker": "ivar",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "Cairn이… 우리에게 뭘 하려는 거지?",
						"english": "What is Cairn trying to do to us?",
						"japanese": "ケルンが…私たちに何をしようとしているんだ？",
						"chinese": "凯恩……想对我们做什么？",
						"french": "Qu'est-ce que Cairn essaie de nous faire ?",
						"spanish": "¿Qué nos está intentando hacer Cairn?",
						"vietnamese": "Cairn... định làm gì chúng ta?",
						"thai": "ไครน์... กำลังจะทำอะไรกับเรากันแน่?",
						"hindi": "कैर्न... हमारे साथ क्या करना चाहता है?"
					},
					"speaker": "character_1",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "돌무덤 케른의 비정상적인 기운이 더욱 강해졌다. 땅이 얼어붙기 시작했다.",
						"english": "The abnormal aura of the stone cairn grew stronger. The ground began to freeze.",
						"japanese": "石のケルンの異常な気配がさらに強くなった。地面が凍り始めた。",
						"chinese": "石冢凯恩的异常气息变得更强了。地面开始结冰。",
						"french": "L'aura anormale du cairn de pierres s'est intensifiée. Le sol commença à geler.",
						"spanish": "El aura anómala del túmulo de piedras se hizo más fuerte. El suelo comenzó a congelarse.",
						"vietnamese": "Khí tức bất thường từ ụ đá trở nên mạnh hơn. Mặt đất bắt đầu đóng băng.",
						"thai": "พลังงานผิดปกติจากกองหินไครน์รุนแรงขึ้น พื้นดินเริ่มแข็งตัวเป็นน้ำแข็ง",
						"hindi": "पत्थर के ढेर की असामान्य आभा और भी मजबूत हो गई। जमीन जमने लगी।"
					}
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "ivar",
					"spot": [
						2,
						2
					]
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이제 끝이야. 우린 틀렸어.",
						"english": "It's over now. We were wrong.",
						"japanese": "もう終わりだ。私たちは間違っていた。",
						"chinese": "结束了。我们错了。",
						"french": "C'est fini maintenant. Nous nous sommes trompés.",
						"spanish": "Se acabó. Nos equivocamos.",
						"vietnamese": "Hết rồi. Chúng ta đã sai.",
						"thai": "จบแล้ว เราผิดไปแล้ว",
						"hindi": "अब सब खत्म हो गया है। हम गलत थे।"
					}
				},
				{
					"content": {
						"korean": "아직 아니야… 희망은 있어!",
						"english": "Not yet... There's still hope!",
						"japanese": "まだだ…希望はまだある！",
						"chinese": "还没……还有希望！",
						"french": "Pas encore... Il y a encore de l'espoir !",
						"spanish": "Todavía no... ¡Aún hay esperanza!",
						"vietnamese": "Chưa đâu... Vẫn còn hy vọng!",
						"thai": "ยังไม่... ยังมีความหวัง!",
						"hindi": "अभी नहीं... अभी भी उम्मीद है!"
					},
					"speaker": "ivar",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "뭘 위해서? 또 배신당하려고?",
						"english": "For what? To be betrayed again?",
						"japanese": "何のために？また裏切られるためにか？",
						"chinese": "为了什么？再被背叛一次吗？",
						"french": "Pour quoi faire ? Pour être à nouveau trahi ?",
						"spanish": "¿Para qué? ¿Para ser traicionado de nuevo?",
						"vietnamese": "Để làm gì? Để bị phản bội một lần nữa ư?",
						"thai": "เพื่ออะไร? เพื่อจะถูกหักหลังอีกครั้งงั้นเหรอ?",
						"hindi": "किसलिए? फिर से धोखा खाने के लिए?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "팀은 각자의 절망 속에 고립되었다. 리더의 외침은 허공에 흩어졌다.",
						"english": "The team was isolated in their own despair. The leader's cries scattered into the air.",
						"japanese": "チームはそれぞれの絶望の中に孤立した。リーダーの叫びは虚空に散った。",
						"chinese": "团队陷入了各自的绝望之中。领导者的呐喊消散在虚空中。",
						"french": "L'équipe était isolée dans son propre désespoir. Les cris du leader se sont dissipés dans l'air.",
						"spanish": "El equipo quedó aislado en su propia desesperación. Los gritos del líder se dispersaron en el aire.",
						"vietnamese": "Đội bị cô lập trong tuyệt vọng của mỗi người. Tiếng kêu của người lãnh đạo tan vào hư không.",
						"thai": "ทีมถูกโดดเดี่ยวในความสิ้นหวังของแต่ละคน เสียงตะโกนของผู้นำสลายหายไปในอากาศ",
						"hindi": "टीम अपनी-अपनी निराशा में अलग-थलग पड़ गई। नेता की चीखें हवा में बिखर गईं।"
					},
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "이건 시작일 뿐… 깨어진 맹세는 너희를 끝까지 쫓을 것이다.",
						"english": "This is just the beginning… broken vows will hunt you to the end.",
						"japanese": "これは始まりに過ぎぬ… 破られた誓いは、お前たちを最後まで追い詰めるだろう。",
						"chinese": "这只是开始… 破碎的誓言将追逐你们直到终结。",
						"french": "Ce n'est que le début… les serments brisés vous traqueront jusqu'à la fin.",
						"spanish": "Esto es solo el principio… las promesas rotas os perseguirán hasta el final.",
						"vietnamese": "Đây chỉ là khởi đầu… những lời thề bị phá vỡ sẽ truy đuổi các ngươi đến cùng.",
						"thai": "นี่เป็นเพียงจุดเริ่มต้น… คำสาบานที่แตกสลายจะไล่ล่าพวกเจ้าไปจนถึงที่สุด",
						"hindi": "यह तो बस शुरुआत है… टूटे हुए वादे तुम्हें अंत तक पीछा करेंगे।"
					}
				},
				{
					"type": "direction",
					"speaker": "ivar",
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "아직 끝나지 않았어. 우린 더 나아갈 거야.",
						"english": "It's not over yet. We will press on.",
						"japanese": "まだ終わっていない。我々はさらに進むだろう。",
						"chinese": "还没结束。我们会继续前进。",
						"french": "Ce n'est pas encore fini. Nous continuerons.",
						"spanish": "Aún no ha terminado. Seguiremos adelante.",
						"vietnamese": "Chưa kết thúc đâu. Chúng ta sẽ tiến xa hơn nữa.",
						"thai": "ยังไม่จบ เราจะไปต่อ",
						"hindi": "अभी खत्म नहीं हुआ है। हम आगे बढ़ते रहेंगे।"
					},
					"speaker": "ivar",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "새로운 균열이 돌무덤 케른 깊숙한 곳에서 나타났다. 심판은 계속될 터였다.",
						"english": "A new rift appeared deep within the cairn. The judgment would continue.",
						"japanese": "新たな亀裂が石塚の奥深くで現れた。審判は続くだろう。",
						"chinese": "一道新的裂隙出现在石冢深处。审判将继续进行。",
						"french": "Une nouvelle faille est apparue au plus profond du cairn. Le jugement devait continuer.",
						"spanish": "Una nueva grieta apareció en lo profundo del túmulo. El juicio continuaría.",
						"vietnamese": "Một vết nứt mới xuất hiện sâu bên trong đống đá. Sự phán xét sẽ tiếp tục.",
						"thai": "รอยแยกใหม่ปรากฏขึ้นลึกเข้าไปในกองหิน การพิพากษาจะดำเนินต่อไป",
						"hindi": "पत्थरों के ढेर के भीतर एक नई दरार दिखाई दी। न्याय जारी रहेगा।"
					},
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 길을 막았다. 정체 모를 존재가 그들을 노려보고 있었다.",
						"english": "A colossal shadow blocked the path. An unknown entity glared at them.",
						"japanese": "巨大な影が道を塞いだ。正体不明の存在が彼らを睨みつけていた。",
						"chinese": "巨大的黑影挡住了去路。一个不明身份的存在正盯着他们。",
						"french": "Une ombre colossale bloquait le chemin. Une entité inconnue les fixait du regard.",
						"spanish": "Una sombra colosal bloqueó el camino. Una entidad desconocida los observaba con furia.",
						"vietnamese": "Một cái bóng khổng lồ chắn ngang đường. Một thực thể không rõ danh tính đang nhìn chằm chằm vào họ.",
						"thai": "เงาขนาดมหึมาขวางทางอยู่ สิ่งมีชีวิตที่ไม่รู้จักกำลังจ้องมองพวกเขาอยู่",
						"hindi": "एक विशालकाय परछाई ने रास्ता रोक दिया। एक अज्ञात अस्तित्व उन्हें घूर रहा था।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "깨어진 맹세가 이곳에 너희를 불렀구나.",
						"english": "Broken vows have called you here.",
						"japanese": "破られた誓いが、お前たちをここに呼んだのだ。",
						"chinese": "破碎的誓言将你们召唤至此。",
						"french": "Les serments brisés vous ont menés ici.",
						"spanish": "Promesas rotas os han traído aquí.",
						"vietnamese": "Những lời thề bị phá vỡ đã triệu hồi các ngươi đến đây.",
						"thai": "คำสาบานที่แตกสลายได้เรียกพวกเจ้ามาที่นี่",
						"hindi": "टूटे हुए वादों ने तुम्हें यहां बुलाया है।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "ivar",
					"spot": [
						4,
						2
					],
					"action": "enter"
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"content": {
						"korean": "네가… 우리를 조롱하는 건가?",
						"english": "Are you… mocking us?",
						"japanese": "お前… 我々を嘲笑っているのか？",
						"chinese": "你…是在嘲弄我们吗？",
						"french": "Es-tu… en train de nous railler ?",
						"spanish": "¿Te estás… burlando de nosotros?",
						"vietnamese": "Ngươi… đang chế nhạo chúng ta sao?",
						"thai": "เจ้า… กำลังเยาะเย้ยพวกเราหรือ?",
						"hindi": "क्या तुम… हमारा मज़ाक उड़ा रहे हो?"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "약속을 저버린 자들에게, 대가는 치러져야지.",
						"english": "For those who broke their promises, a price must be paid.",
						"japanese": "約束を破りし者たちよ、代償は支払われねばならない。",
						"chinese": "对于背弃诺言者，必将付出代价。",
						"french": "Ceux qui ont trahi leurs promesses doivent en payer le prix.",
						"spanish": "Quienes rompen sus promesas, deben pagar el precio.",
						"vietnamese": "Kẻ nào bội ước, phải trả giá.",
						"thai": "สำหรับผู้ที่บิดพลิ้วคำสัญญา จะต้องชดใช้",
						"hindi": "जिन्होंने वादे तोड़े, उन्हें कीमत चुकानी होगी।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "나약한 의지는 결국 얼어붙을 뿐.",
						"english": "A weak will merely freezes in the end.",
						"japanese": "弱き意志は、結局凍りつくだけだ。",
						"chinese": "孱弱的意志终将冻结。",
						"french": "Une volonté faible finit par geler.",
						"spanish": "Una voluntad débil solo se congela al final.",
						"vietnamese": "Ý chí yếu đuối cuối cùng cũng sẽ đóng băng.",
						"thai": "เจตจำนงที่อ่อนแอจะแข็งตายในที่สุด",
						"hindi": "कमज़ोर इच्छाशक्ति अंततः जम जाती है।"
					}
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"type": "direction",
					"speaker": "ivar"
				},
				{
					"emotion": "angry",
					"speaker": "ivar",
					"type": "speech",
					"content": {
						"korean": "…아직 포기 안 해. 다시 일어설 거야.",
						"english": "…I won't give up yet. I'll rise again.",
						"japanese": "…まだ諦めない。また立ち上がる。",
						"chinese": "…我还没放弃。我会再次站起来。",
						"french": "…Je n'abandonne pas encore. Je me relèverai.",
						"spanish": "…Todavía no me rindo. Me levantaré de nuevo.",
						"vietnamese": "…Tôi chưa bỏ cuộc đâu. Tôi sẽ đứng dậy lần nữa.",
						"thai": "…ฉันยังไม่ยอมแพ้ ฉันจะลุกขึ้นอีกครั้ง",
						"hindi": "…मैंने अभी हार नहीं मानी है। मैं फिर से उठूंगा।"
					}
				}
			]
		}
	]
} as const;
