export const scenario_snowy_rimeheart_17_04 = {
	"scenario_id": "snowy_rimeheart_17_04",
	"order": 4,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"glace": {
			"id": "mon_d0b542b9-aea9-405d-8ee2-4936516a041a",
			"name": {
				"korean": "글라세",
				"english": "Glace",
				"japanese": "グラース",
				"chinese": "格拉斯",
				"french": "Glace",
				"spanish": "Glace",
				"vietnamese": "Gla-xê",
				"thai": "กลาซ",
				"hindi": "ग्लेस"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/81de374f-3422-482e-01ee-dc973da70500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/ef269701-044a-42c5-f7b7-760e9c92a500/public"
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
						"korean": "차가운 동굴, 얼음 정령들의 속삭임이 공기를 채웠다.",
						"english": "Cold cave, whispers of ice spirits filled the air.",
						"japanese": "冷たい洞窟、氷の精霊たちの囁きが空気を満たした。",
						"chinese": "冰冷的洞穴，冰精灵的低语弥漫在空气中。",
						"french": "Grotte froide, les murmures des esprits de glace emplissaient l'air.",
						"spanish": "Fría cueva, los susurros de los espíritus de hielo llenaban el aire.",
						"vietnamese": "Hang động lạnh lẽo, những lời thì thầm của tinh linh băng giá tràn ngập không khí.",
						"thai": "ถ้ำน้ำแข็ง เสียงกระซิบของภูตน้ำแข็งเต็มอากาศ",
						"hindi": "ठंडी गुफा, बर्फीली आत्माओं की फुसफुसाहट हवा में भर गई।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"speaker": "glace",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "glace",
					"content": {
						"korean": "...들려? 이 모든 끝을 노래하는 소리가.",
						"english": "...Hear it? The sound singing of this end.",
						"japanese": "...聞こえる？このすべての終わりを歌う声が。",
						"chinese": "...听见了吗？那歌颂万物终结的声音。",
						"french": "...Tu entends ? Le son qui chante cette fin.",
						"spanish": "...¿Lo oyes? El sonido que canta este final.",
						"vietnamese": "...Nghe thấy không? Âm thanh hát về kết cục này.",
						"thai": "...ได้ยินไหม? เสียงที่กำลังขับขานถึงจุดจบนี้",
						"hindi": "...सुन रहे हो? वह आवाज़ जो इस अंत को गा रही है।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "글라세? 괜찮아?",
						"english": "Glace? Are you okay?",
						"japanese": "グラス？大丈夫？",
						"chinese": "格拉斯？你还好吗？",
						"french": "Glace ? Ça va ?",
						"spanish": "¿Glace? ¿Estás bien?",
						"vietnamese": "Glace? Cậu ổn chứ?",
						"thai": "กลาเซ่? เป็นอะไรรึเปล่า?",
						"hindi": "ग्लेस? क्या तुम ठीक हो?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "glace",
					"content": {
						"korean": "괜찮을 리 없잖아. 온기는 사라질 운명. 저항은… 무의미해.",
						"english": "Of course not. Warmth is fated to vanish. Resistance is... futile.",
						"japanese": "大丈夫なわけない。温もりは消えゆく運命。抵抗は…無意味だ。",
						"chinese": "怎么可能没事。温暖注定消逝。抵抗...毫无意义。",
						"french": "Bien sûr que non. La chaleur est vouée à disparaître. La résistance est... futile.",
						"spanish": "Por supuesto que no. La calidez está destinada a desaparecer. La resistencia es... inútil.",
						"vietnamese": "Làm sao mà ổn được. Hơi ấm định mệnh sẽ biến mất. Kháng cự thì... vô nghĩa thôi.",
						"thai": "ไม่มีทางหรอก ความอบอุ่นถูกลิขิตให้หายไป การต่อต้านมัน...ไร้ความหมาย",
						"hindi": "बिल्कुल नहीं। गर्माहट का गायब होना तय है। प्रतिरोध... व्यर्थ है।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_1",
					"content": {
						"korean": "포기하지 마!",
						"english": "Don't give up!",
						"japanese": "諦めないで！",
						"chinese": "别放弃！",
						"french": "N'abandonne pas !",
						"spanish": "¡No te rindas!",
						"vietnamese": "Đừng bỏ cuộc!",
						"thai": "อย่ายอมแพ้!",
						"hindi": "हार मत मानो!"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "glace",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "glace",
					"content": {
						"korean": "얼음 정령들은 알아. 이 세상 시스템의 '심장'을.",
						"english": "The ice spirits know. The 'heart' of this world's system.",
						"japanese": "氷の精霊たちは知っている。この世界のシステムの「心臓」を。",
						"chinese": "冰精灵知道。这个世界系统的“心脏”。",
						"french": "Les esprits de glace savent. Le « cœur » du système de ce monde.",
						"spanish": "Los espíritus de hielo lo saben. El \"corazón\" del sistema de este mundo.",
						"vietnamese": "Tinh linh băng giá biết. \"Trái tim\" của hệ thống thế giới này.",
						"thai": "ภูตน้ำแข็งรู้ 'หัวใจ' ของระบบโลกใบนี้",
						"hindi": "बर्फीली आत्माएँ जानती हैं। इस दुनिया की व्यवस्था का 'हृदय'।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "glace",
					"content": {
						"korean": "그 심장이 고동칠 때마다, 온기는 사라져.",
						"english": "Every beat of that heart, warmth fades.",
						"japanese": "その心臓が鼓動するたびに、温もりは消え去る。",
						"chinese": "每当那颗心跳动，温暖便会消逝。",
						"french": "À chaque battement de ce cœur, la chaleur disparaît.",
						"spanish": "Con cada latido de ese corazón, el calor se desvanece.",
						"vietnamese": "Mỗi nhịp đập của trái tim đó, hơi ấm lại tan biến.",
						"thai": "ทุกครั้งที่หัวใจดวงนั้นเต้น ความอบอุ่นก็จางหายไป",
						"hindi": "जब भी वह दिल धड़कता है, गर्माहट गायब हो जाती है।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "심장… 리메하트의 고동?",
						"english": "Heart… the beat of Remeheart?",
						"japanese": "心臓…リメハートの鼓動？",
						"chinese": "心……利米哈特的心跳？",
						"french": "Le cœur… le battement de Remeheart ?",
						"spanish": "¿El corazón… el latido de Remeheart?",
						"vietnamese": "Trái tim… nhịp đập của Remeheart?",
						"thai": "หัวใจ…การเต้นของเรเมฮาร์ท?",
						"hindi": "दिल… रेमेहार्ट की धड़कन?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "glace",
					"content": {
						"korean": "...그 이름은 어디서 들었지? 그래, 그 고동이 모든 것을 얼려.",
						"english": "...Where did you hear that name? Yes, that beat freezes everything.",
						"japanese": "…その名前はどこで聞いた？そうだ、その鼓動がすべてを凍らせる。",
						"chinese": "……你从哪里听过这个名字？没错，那跳动会冻结一切。",
						"french": "...Où as-tu entendu ce nom ? Oui, ce battement gèle tout.",
						"spanish": "¿...De dónde oíste ese nombre? Sí, ese latido lo congela todo.",
						"vietnamese": "...Ngươi nghe cái tên đó ở đâu? Đúng vậy, nhịp đập đó đóng băng mọi thứ.",
						"thai": "...เธอได้ยินชื่อนั้นมาจากไหน? ใช่แล้ว การเต้นนั้นแช่แข็งทุกสิ่ง",
						"hindi": "तुमने वह नाम कहाँ सुना? हाँ, वह धड़कन सब कुछ जमा देती है।"
					}
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "주머니 속 부적이, 얼음처럼 차갑게 느껴졌다.",
						"english": "The amulet in my pocket felt cold as ice.",
						"japanese": "ポケットの中のお守りが、氷のように冷たく感じられた。",
						"chinese": "口袋里的符咒，摸起来像冰一样冷。",
						"french": "L'amulette dans ma poche était froide comme de la glace.",
						"spanish": "El amuleto en mi bolsillo se sintió frío como el hielo.",
						"vietnamese": "Bùa hộ mệnh trong túi cảm thấy lạnh như băng.",
						"thai": "ยันต์ในกระเป๋าสัมผัสได้ถึงความเย็นเหมือนน้ำแข็ง",
						"hindi": "मेरी जेब में ताबीज बर्फ जैसा ठंडा महसूस हुआ।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"speaker": "glace",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "glace",
					"content": {
						"korean": "우리는 너무 작아. 이 거대한 흐름을 거스를 수 없어.",
						"english": "We are too small. We cannot go against this immense current.",
						"japanese": "私たちはあまりにも小さい。この巨大な流れに逆らうことはできない。",
						"chinese": "我们太渺小了。无法逆转这巨大的洪流。",
						"french": "Nous sommes trop petits. Nous ne pouvons pas aller à contre-courant.",
						"spanish": "Somos demasiado pequeños. No podemos ir contra esta inmensa corriente.",
						"vietnamese": "Chúng ta quá nhỏ bé. Không thể chống lại dòng chảy khổng lồ này.",
						"thai": "เราเล็กเกินไป เราไม่สามารถต้านทานกระแสอันยิ่งใหญ่นี้ได้",
						"hindi": "हम बहुत छोटे हैं। हम इस विशाल धारा के खिलाफ नहीं जा सकते।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "아니야! 아직 끝나지 않았어!",
						"english": "No! It's not over yet!",
						"japanese": "違う！まだ終わっていない！",
						"chinese": "不！还没有结束！",
						"french": "Non ! Ce n'est pas encore fini !",
						"spanish": "¡No! ¡Aún no ha terminado!",
						"vietnamese": "Không! Vẫn chưa kết thúc!",
						"thai": "ไม่! มันยังไม่จบ!",
						"hindi": "नहीं! अभी खत्म नहीं हुआ है!"
					}
				},
				{
					"speaker": "glace",
					"content": {
						"korean": "내가 본 끝은… 오직 공허뿐이었어.",
						"english": "The end I saw… was only emptiness.",
						"japanese": "私が見た終わりは…ただ虚無だけだった。",
						"chinese": "我所看到的结局……只有虚无。",
						"french": "La fin que j'ai vue… n'était que vide.",
						"spanish": "El final que vi… fue solo vacío.",
						"vietnamese": "Cái kết mà tôi thấy… chỉ là hư vô.",
						"thai": "จุดจบที่ฉันเห็น…มีแต่ความว่างเปล่าเท่านั้น",
						"hindi": "मैंने जो अंत देखा… वह केवल खालीपन था।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_2",
					"content": {
						"korean": "그래도 우리는 싸워야 해! 소중한 것을 위해!",
						"english": "Still, we must fight! For what is precious!",
						"japanese": "それでも、私たちは戦わなければならない！大切なもののために！",
						"chinese": "即便如此，我们也必须战斗！为了珍贵的一切！",
						"french": "Pourtant, nous devons nous battre ! Pour ce qui est précieux !",
						"spanish": "¡Aun así, debemos luchar! ¡Por lo que es precioso!",
						"vietnamese": "Dù vậy, chúng ta phải chiến đấu! Vì những điều quý giá!",
						"thai": "ถึงกระนั้น เราก็ต้องสู้! เพื่อสิ่งที่มีค่า!",
						"hindi": "फिर भी, हमें लड़ना होगा! जो कीमती है उसके लिए!"
					}
				},
				{
					"speaker": "glace",
					"content": {
						"korean": "…사랑? 그것 또한 고통의 다른 이름일 뿐인데.",
						"english": "...Love? That too is just another name for pain.",
						"japanese": "…愛？それもまた、苦痛の別の名前に過ぎないのに。",
						"chinese": "……爱？那也只是痛苦的另一个名字罢了。",
						"french": "...L'amour ? Ce n'est qu'un autre nom pour la douleur.",
						"spanish": "¿...Amor? Eso también es solo otro nombre para el dolor.",
						"vietnamese": "...Tình yêu? Đó cũng chỉ là một tên gọi khác của nỗi đau.",
						"thai": "…ความรัก? นั่นก็เป็นแค่ชื่ออื่นของความเจ็บปวดเท่านั้น",
						"hindi": "...प्यार? वह भी दर्द का दूसरा नाम ही तो है।"
					},
					"type": "speech",
					"emotion": "sad"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "glace"
				},
				{
					"speaker": "glace",
					"content": {
						"korean": "이 이상은… 위험해. '심장'의 고동이 더 깊은 곳에서 울려 퍼져.",
						"english": "Beyond this… it's dangerous. The 'Heart's' beat echoes from deeper within.",
						"japanese": "これ以上は…危険だ。「心臓」の鼓動がもっと深い場所から響き渡る。",
						"chinese": "再往前……就很危险了。‘心脏’的跳动从更深处回荡而来。",
						"french": "Au-delà de ça… c'est dangereux. Le battement du « Cœur » résonne des profondeurs.",
						"spanish": "Más allá de esto… es peligroso. El latido del 'Corazón' resuena desde lo más profundo.",
						"vietnamese": "Hơn thế nữa… nguy hiểm đấy. Nhịp đập của 'Trái tim' vang vọng từ sâu thẳm bên trong.",
						"thai": "เกินกว่านี้…อันตราย การเต้นของ 'หัวใจ' สะท้อนออกมาจากที่ลึกกว่าเดิม",
						"hindi": "इससे आगे… खतरनाक है। 'दिल' की धड़कन और गहराई से गूँज रही है।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "두려워?",
						"english": "Afraid?",
						"japanese": "恐ろしいか？",
						"chinese": "害怕吗？",
						"french": "Peur ?",
						"spanish": "¿Miedo?",
						"vietnamese": "Sợ ư?",
						"thai": "กลัวเหรอ?",
						"hindi": "डरे हुए हो?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "glace",
					"content": {
						"korean": "두려움? 아니. 그저… 피할 수 없는 운명을 보는 거지.",
						"english": "Fear? No. Just… seeing the inevitable fate.",
						"japanese": "恐ろしいか？いや。ただ…避けられない運命を見ているだけだ。",
						"chinese": "害怕？不。只是……看到了无法避免的命运。",
						"french": "La peur ? Non. Juste… la vision d'un destin inévitable.",
						"spanish": "¿Miedo? No. Solo… veo el destino ineludible.",
						"vietnamese": "Sợ ư? Không. Chỉ là… nhìn thấy số phận không thể tránh khỏi.",
						"thai": "กลัวเหรอ? ไม่หรอก... แค่เห็นโชคชะตาที่หลีกเลี่ยงไม่ได้เท่านั้นเอง",
						"hindi": "डर? नहीं। बस… अपरिहार्य भाग्य देख रहा हूँ।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_3",
					"content": {
						"korean": "난 피하지 않아. 내 손으로 이 운명을 바꿀 거야.",
						"english": "I won't avoid it. I'll change this fate with my own hands.",
						"japanese": "私は逃げない。この運命をこの手で変えてみせる。",
						"chinese": "我不会逃避。我会亲手改变这个命运。",
						"french": "Je ne fuirai pas. Je changerai ce destin de mes propres mains.",
						"spanish": "No huiré. Cambiaré este destino con mis propias manos.",
						"vietnamese": "Ta sẽ không trốn tránh. Ta sẽ tự tay thay đổi số phận này.",
						"thai": "ฉันจะไม่หนี ฉันจะเปลี่ยนชะตากรรมนี้ด้วยมือของฉันเอง",
						"hindi": "मैं नहीं बचूँगा। मैं इस भाग्य को अपने हाथों से बदलूँगा।"
					}
				},
				{
					"speaker": "glace",
					"content": {
						"korean": "...어리석지만, 아름다운 저항이구나.",
						"english": "...Foolish, yet a beautiful resistance.",
						"japanese": "...愚かだが、美しい抵抗だ。",
						"chinese": "……愚蠢，但却是美丽的抵抗。",
						"french": "...Stupide, mais une belle résistance.",
						"spanish": "...Estúpido, pero una hermosa resistencia.",
						"vietnamese": "...Thật ngu ngốc, nhưng là một sự kháng cự đẹp đẽ.",
						"thai": "...ช่างโง่เขลา แต่เป็นการต่อต้านที่งดงาม",
						"hindi": "...मूर्खतापूर्ण, फिर भी एक सुंदर प्रतिरोध।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "어둠 속 심연, 거대한 그림자가 나타났다.",
						"english": "In the abyss of darkness, a colossal shadow appeared.",
						"japanese": "闇の深淵に、巨大な影が現れた。",
						"chinese": "黑暗深渊中，一个巨大的身影出现了。",
						"french": "Dans l'abîme des ténèbres, une ombre colossale apparut.",
						"spanish": "En el abismo de la oscuridad, una sombra colosal apareció.",
						"vietnamese": "Trong vực thẳm bóng tối, một bóng hình khổng lồ hiện ra.",
						"thai": "ในห้วงลึกแห่งความมืด เงาขนาดมหึมาปรากฏขึ้น",
						"hindi": "अंधेरे की खाई में, एक विशाल छाया प्रकट हुई।"
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 것들. 이미 정해진 운명에 감히 저항하는가?",
						"english": "Foolish creatures. Do you dare resist a predetermined fate?",
						"japanese": "愚かな者たちめ。既に定められた運命に敢えて抗うか？",
						"chinese": "愚蠢的东西。竟敢反抗早已注定的命运？",
						"french": "Créatures insensées. Osez-vous résister à un destin prédéterminé ?",
						"spanish": "Criaturas necias. ¿Os atrevéis a resistir un destino predeterminado?",
						"vietnamese": "Đám ngu ngốc. Dám chống lại số phận đã được định sẵn ư?",
						"thai": "พวกโง่เง่า กล้าต่อต้านโชคชะตาที่ถูกกำหนดไว้แล้วหรือ?",
						"hindi": "मूर्ख प्राणियों। क्या तुम पूर्वनिर्धारित भाग्य का विरोध करने की हिम्मत करते हो?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "물러서! 더 이상 지켜보고만 있지 않아!",
						"english": "Stand back! I won't just watch anymore!",
						"japanese": "下がれ！もうこれ以上見てるだけじゃない！",
						"chinese": "退下！我不会再袖手旁观了！",
						"french": "Reculez ! Je ne me contenterai plus d'observer !",
						"spanish": "¡Retrocede! ¡Ya no me quedaré mirando!",
						"vietnamese": "Lùi lại! Ta sẽ không đứng nhìn nữa!",
						"thai": "ถอยไป! ฉันจะไม่ยืนดูอีกแล้ว!",
						"hindi": "पीछे हटो! मैं अब और नहीं देखूँगा!"
					}
				},
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"speaker": "glace"
				},
				{
					"speaker": "glace",
					"content": {
						"korean": "저 자가… 얼음 시스템의 수호자 중 하나야. 힘을 조심해.",
						"english": "That one... is one of the Ice System's guardians. Be wary of their power.",
						"japanese": "あの者は…氷のシステムの守護者の一人だ。力に気をつけろ。",
						"chinese": "那个人……是冰之系统的守护者之一。小心他的力量。",
						"french": "Celui-là… est l'un des gardiens du Système de Glace. Méfiez-vous de son pouvoir.",
						"spanish": "Ese... es uno de los guardianes del Sistema de Hielo. Ten cuidado con su poder.",
						"vietnamese": "Kẻ đó… là một trong những người bảo vệ của Hệ thống Băng giá. Cẩn thận sức mạnh của hắn.",
						"thai": "คนนั้น... เป็นหนึ่งในผู้พิทักษ์ของระบบน้ำแข็ง ระวังพลังของเขาให้ดี",
						"hindi": "वह... बर्फ प्रणाली के संरक्षकों में से एक है। उसकी शक्ति से सावधान रहें।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "글라세, 너마저. 쓸데없는 희망을 주려 하는가?",
						"english": "Glacia, even you. Are you trying to give them useless hope?",
						"japanese": "グラッセ、お前まで。無駄な希望を与えようとするのか？",
						"chinese": "格拉塞，连你也是。想给他们无用的希望吗？",
						"french": "Glacia, même toi. Essaies-tu de leur donner un espoir futile ?",
						"spanish": "Glacia, incluso tú. ¿Intentas darles una esperanza inútil?",
						"vietnamese": "Glacia, ngay cả ngươi. Ngươi đang cố gắng mang lại hy vọng vô ích cho chúng ư?",
						"thai": "กลาเซ่ แม้แต่เจ้า ก็ยังจะให้ความหวังที่ไร้ประโยชน์งั้นรึ?",
						"hindi": "ग्लासिया, तुम भी। क्या तुम उन्हें व्यर्थ आशा देने की कोशिश कर रहे हो?"
					}
				},
				{
					"speaker": "glace",
					"duration_ms": 400,
					"type": "direction",
					"direction": "down",
					"action": "exit"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "감히 내 앞을 막는다면… 영원한 얼음 속에 가두어주마.",
						"english": "If you dare stand in my way… I'll trap you in eternal ice.",
						"japanese": "敢えて私の邪魔をするなら…永遠の氷の中に閉じ込めてやろう。",
						"chinese": "如果胆敢挡我的路……我会将你永远困在冰中。",
						"french": "Si tu oses te mettre en travers de mon chemin… je te figerai dans la glace éternelle.",
						"spanish": "Si osas interponerte en mi camino… te encerraré en el hielo eterno.",
						"vietnamese": "Nếu ngươi dám cản đường ta… ta sẽ giam ngươi vào băng giá vĩnh cửu.",
						"thai": "ถ้าเจ้ากล้าขวางทางข้า... ข้าจะขังเจ้าไว้ในน้ำแข็งนิรันดร์",
						"hindi": "यदि तुम मेरी राह में आने की हिम्मत करते हो... तो मैं तुम्हें शाश्वत बर्फ में कैद कर दूँगा।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "해볼 테면 해봐! 우리는 절대 포기하지 않아!",
						"english": "Try if you dare! We'll never give up!",
						"japanese": "やってみろ！ 私たちは決して諦めない！",
						"chinese": "尽管放马过来！我们绝不放弃！",
						"french": "Essayez donc ! Nous n'abandonnerons jamais !",
						"spanish": "¡Inténtalo si te atreves! ¡Nunca nos rendiremos!",
						"vietnamese": "Cứ thử đi! Chúng ta sẽ không bao giờ bỏ cuộc!",
						"thai": "ลองดูสิ! เราไม่มีทางยอมแพ้!",
						"hindi": "हिम्मत है तो कोशिश करो! हम कभी हार नहीं मानेंगे!"
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "크윽… 너희의 분노… 하지만 이건 시작일 뿐. '심장'은 멈추지 않아….",
						"english": "Ugh... your rage... But this is just the beginning. The 'Heart' will not stop....",
						"japanese": "くっ…お前たちの怒り…だが、これは始まりに過ぎない。『心臓』は止まらない…。",
						"chinese": "呃…你们的愤怒…但这仅仅是开始。『心脏』不会停止跳动…。",
						"french": "Ugh... votre rage... Mais ce n'est que le début. Le 'Cœur' ne s'arrêtera pas....",
						"spanish": "Uf... vuestra furia... Pero esto es solo el principio. El 'Corazón' no se detendrá....",
						"vietnamese": "Khặc... cơn thịnh nộ của các ngươi... Nhưng đây chỉ là khởi đầu. 'Trái tim' sẽ không ngừng đập...",
						"thai": "อึก... ความโกรธแค้นของพวกเจ้า... แต่นี่เป็นเพียงจุดเริ่มต้นเท่านั้น 'หัวใจ' จะไม่หยุด...",
						"hindi": "उफ़... तुम्हारा गुस्सा... लेकिन यह तो बस शुरुआत है। 'हृदय' नहीं रुकेगा..."
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "아직 끝나지 않았어! 진실을 밝혀낼 거야!",
						"english": "It's not over yet! We'll uncover the truth!",
						"japanese": "まだ終わってない！ 真実を暴いてやる！",
						"chinese": "还没结束！我们会揭露真相的！",
						"french": "Ce n'est pas encore fini ! Nous découvrirons la vérité !",
						"spanish": "¡Aún no ha terminado! ¡Desvelaremos la verdad!",
						"vietnamese": "Chưa kết thúc đâu! Chúng ta sẽ tìm ra sự thật!",
						"thai": "ยังไม่จบ! เราจะเปิดเผยความจริง!",
						"hindi": "अभी खत्म नहीं हुआ! हम सच का पता लगाएंगे!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자는 스러졌으나, 싸늘한 기운은 여전했다.",
						"english": "The massive shadow fell, yet the chilling aura lingered.",
						"japanese": "巨大な影は消え去ったが、冷たい気配は依然として残っていた。",
						"chinese": "巨大的阴影消散了，但冰冷的气息依然存在。",
						"french": "L'ombre gigantesque s'est dissipée, mais l'aura glaciale persistait.",
						"spanish": "La sombra gigantesca cayó, pero el aura gélida persistía.",
						"vietnamese": "Bóng đen khổng lồ đã tan biến, nhưng khí lạnh vẫn còn vương.",
						"thai": "เงาขนาดมหึมาได้สลายไปแล้ว แต่พลังงานที่เยือกเย็นยังคงอยู่.",
						"hindi": "विशाल परछाई छंट गई, फिर भी सर्द अहसास बना रहा।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_4",
					"content": {
						"korean": "부적의 냉기가… 더 심해진 것 같아. 온기가 점점 사라지고 있어.",
						"english": "The talisman's chill... seems to have worsened. All warmth is slowly fading.",
						"japanese": "お守りの冷気が…もっとひどくなったようだ。温もりがどんどん消えていく。",
						"chinese": "符咒的寒气…好像更甚了。暖意正在逐渐消散。",
						"french": "La froideur du talisman... semble s'être accentuée. Toute chaleur disparaît peu à peu.",
						"spanish": "El frío del talismán... parece haber empeorado. Toda calidez se desvanece lentamente.",
						"vietnamese": "Hơi lạnh của bùa... dường như tệ hơn. Hơi ấm đang dần tan biến.",
						"thai": "ความเย็นจากเครื่องราง... ดูเหมือนจะแย่ลง ความอบอุ่นกำลังเลือนหายไปเรื่อยๆ",
						"hindi": "ताबीज़ की ठंडक... और बढ़ गई लगती है। गर्माहट धीरे-धीरे ख़त्म हो रही है।"
					}
				},
				{
					"speaker": "glace",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "glace",
					"content": {
						"korean": "...봤니? '심장'은 여전히 고동치고 있어. 세상의 모든 얼음이 하나의 고동에 맞춰 움직이고 있어.",
						"english": "...Did you see? The 'Heart' is still beating. All the world's ice moves to its single rhythm.",
						"japanese": "…見たか？ 『心臓』は未だ鼓動している。世界の全ての氷が、一つの鼓動に合わせて動いている。",
						"chinese": "...看到了吗？『心脏』仍在跳动。世间万物之冰都随着那一次跳动而律动着。",
						"french": "...Tu as vu ? Le 'Cœur' bat toujours. Toute la glace du monde se meut au rythme de son unique pulsation.",
						"spanish": "...¿Lo viste? El 'Corazón' sigue latiendo. Todo el hielo del mundo se mueve al compás de su único latido.",
						"vietnamese": "...Ngươi đã thấy chưa? 'Trái tim' vẫn đang đập. Tất cả băng giá trên thế giới đều chuyển động theo một nhịp đập duy nhất.",
						"thai": "...เห็นไหม? 'หัวใจ' ยังคงเต้นอยู่ น้ำแข็งทั้งหมดในโลกเคลื่อนไหวตามจังหวะเดียว.",
						"hindi": "...देखा? 'हृदय' अभी भी धड़क रहा है। दुनिया की सारी बर्फ़ एक ही धड़कन पर चल रही है।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "진실은 더욱 깊은 곳에 있었다. 피할 수 없는 운명이 다가왔다.",
						"english": "The truth lay deeper still. An inescapable destiny approached.",
						"japanese": "真実はさらに深い場所に存在した。避けられぬ運命が迫っていた。",
						"chinese": "真相隐藏在更深之处。无法逃避的命运已经降临。",
						"french": "La vérité gisait plus profondément encore. Un destin inéluctable approchait.",
						"spanish": "La verdad yacía aún más profunda. Un destino ineludible se acercaba.",
						"vietnamese": "Sự thật nằm ở nơi sâu thẳm hơn. Một vận mệnh không thể tránh khỏi đã đến.",
						"thai": "ความจริงซ่อนอยู่ในที่ลึกกว่านั้น โชคชะตาที่หลีกเลี่ยงไม่ได้กำลังใกล้เข้ามา.",
						"hindi": "सच और भी गहरा था। एक अपरिहार्य नियति करीब आ गई थी।"
					}
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "흐흐… 저항은 덧없다. 결국 모든 것은 얼음이 되리라.",
						"english": "Heh heh... Resistance is futile. In the end, all shall turn to ice.",
						"japanese": "フフ…抵抗は無意味だ。結局、全ては氷となるだろう。",
						"chinese": "呵呵…抵抗是徒劳的。最终，一切都将化为冰霜。",
						"french": "Hé hé... La résistance est vaine. Au final, tout se transformera en glace.",
						"spanish": "Je je... La resistencia es inútil. Al final, todo se convertirá en hielo.",
						"vietnamese": "Hừ hừ... Sự kháng cự là vô ích. Cuối cùng, mọi thứ sẽ hóa thành băng giá.",
						"thai": "ฮิฮิ... การต่อต้านนั้นไร้ประโยชน์ ในที่สุดทุกสิ่งจะกลายเป็นน้ำแข็ง.",
						"hindi": "हहह... प्रतिरोध व्यर्थ है। अंततः, सब कुछ बर्फ़ बन जाएगा।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "젠장… 아직… 끝나지 않았어…!",
						"english": "Damn it... It's not... over yet...!",
						"japanese": "くそ…まだ…終わってない…！",
						"chinese": "该死…还没…结束…！",
						"french": "Maudit... Ce n'est pas... encore fini... !",
						"spanish": "¡Maldita sea...! ¡Aún no... ha terminado...!",
						"vietnamese": "Chết tiệt... Vẫn chưa... kết thúc...!",
						"thai": "ให้ตายสิ... ยัง... ไม่จบ...!",
						"hindi": "धिक्कार है... अभी... खत्म नहीं हुआ...!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "glace",
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "glace",
					"content": {
						"korean": "...결국 이것이 너의 운명인가. 예정된 끝에 순응해야만 하는가.",
						"english": "...Is this truly your fate? Must you submit to this destined end?",
						"japanese": "…結局これが貴様の運命なのか。定められた終焉に服従しなければならないのか。",
						"chinese": "...这终究是你的命运吗？必须顺从这注定的结局吗？",
						"french": "...Est-ce là ton destin, après tout ? Dois-tu te soumettre à cette fin prédestinée ?",
						"spanish": "...¿Es este finalmente tu destino? ¿Debes someterte a este final predestinado?",
						"vietnamese": "...Cuối cùng đây có phải là vận mệnh của ngươi không? Phải chăng ngươi phải chấp nhận kết cục đã định?",
						"thai": "...ในที่สุดนี่คือชะตากรรมของเจ้าหรือ? เจ้าต้องยอมจำนนต่อจุดจบที่ถูกกำหนดไว้หรือ?",
						"hindi": "...क्या अंततः यही तुम्हारी नियति है? क्या तुम्हें इस निर्धारित अंत को स्वीकार करना होगा?"
					}
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"얼음 정령들의 속삭임이 글라세를 옥죄었다.",
			"그들은 모든 온기가 사라질 운명이라고 끊임없이 되뇌었다.",
			"주인공의 손에 쥔 부적은 이제 얼음처럼 차가웠다.",
			"이 모든 것이 정해진 운명이라면, 저항은 무의미한가?"
		],
		"english": [
			"The whispers of the ice spirits ensnared Glace.",
			"They ceaselessly repeated that all warmth was destined to vanish.",
			"The amulet in the protagonist's hand was now cold as ice.",
			"If all this is predetermined fate, is resistance futile?"
		],
		"japanese": [
			"氷の精霊たちの囁きがグラスを締め付けた。",
			"彼らは、すべての温もりが消えゆく運命だと絶え間なく繰り返した。",
			"主人公の手に握られたお守りは、今や氷のように冷たかった。",
			"これらすべてが定められた運命なら、抵抗は無意味なのか？"
		],
		"chinese": [
			"冰精灵的低语束缚了格拉斯。",
			"他们不停地重复，所有的温暖都注定消逝。",
			"主人公手中的护身符现在冰冷如铁。",
			"如果这一切都是注定的命运，抵抗是否毫无意义？"
		],
		"french": [
			"Les murmures des esprits de glace étreignaient Glace.",
			"Ils répétaient sans cesse que toute chaleur était vouée à disparaître.",
			"L'amulette dans la main du protagoniste était désormais froide comme la glace.",
			"Si tout cela est un destin prédéterminé, la résistance est-elle futile ?"
		],
		"spanish": [
			"Los susurros de los espíritus de hielo aprisionaron a Glace.",
			"Repetían sin cesar que todo el calor estaba destinado a desvanecerse.",
			"El amuleto en la mano del protagonista estaba ahora frío como el hielo.",
			"Si todo esto es el destino predeterminado, ¿es inútil la resistencia?"
		],
		"vietnamese": [
			"Những lời thì thầm của tinh linh băng giá siết chặt Glace.",
			"Chúng không ngừng lặp lại rằng mọi hơi ấm đều định mệnh phải biến mất.",
			"Lá bùa trong tay nhân vật chính giờ đây lạnh như băng.",
			"Nếu tất cả điều này là định mệnh đã được an bài, liệu sự kháng cự có vô nghĩa không?"
		],
		"thai": [
			"เสียงกระซิบของภูตน้ำแข็งกักขังกลาเซ่ไว้",
			"พวกมันย้ำเตือนไม่หยุดว่าความอบอุ่นทั้งหมดถูกลิขิตให้เลือนหายไป",
			"เครื่องรางในมือของตัวเอกเย็นเฉียบราวกับน้ำแข็ง",
			"ถ้าทั้งหมดนี้คือโชคชะตาที่กำหนดไว้ การต่อต้านจะไร้ความหมายงั้นหรือ?"
		],
		"hindi": [
			"बर्फीली आत्माओं की फुसफुसाहट ने ग्लेस को जकड़ लिया।",
			"वे लगातार दोहराते रहे कि सारी गर्माहट गायब होने के लिए अभिशप्त थी।",
			"नायक के हाथ में ताबीज अब बर्फ की तरह ठंडा था।",
			"यदि यह सब पूर्वनिर्धारित भाग्य है, तो क्या प्रतिरोध व्यर्थ है?"
		]
	}
} as const;
