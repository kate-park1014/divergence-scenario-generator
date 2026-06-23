export const scenario_forest_xylia_10_01 = {
	"scenario_id": "forest_xylia_10_01",
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
	"prologue": {
		"korean": [
			"비취 숲. 신비롭지만, 어딘가 슬픈 기운이 감돈다.",
			"발을 들이는 순간, 숲은 속삭인다.",
			"멈춰. 더 깊이 들어오지 마.",
			"하지만 나는 알아야만 한다. 이 숲의 진실을."
		],
		"english": [
			"Jade Forest. Mysterious, yet a hint of sadness lingers.",
			"The moment you step in, the forest whispers.",
			"Stop. Don't come any deeper.",
			"But I must know. The truth of this forest."
		],
		"japanese": [
			"翡翠の森。神秘的だが、どこか悲しい気配が漂う。",
			"足を踏み入れた瞬間、森はささやく。",
			"止まれ。これ以上深く入るな。",
			"しかし、私は知らなければならない。この森の真実を。"
		],
		"chinese": [
			"翡翠森林。神秘，却又弥漫着一丝悲伤。",
			"踏入的瞬间，森林低语。",
			"停下。别再深入了。",
			"但我必须知道。这片森林的真相。"
		],
		"french": [
			"La Forêt de Jade. Mystérieuse, mais empreinte d'une certaine mélancolie.",
			"Au moment où vous y pénétrez, la forêt murmure.",
			"Arrête. Ne t'aventure pas plus loin.",
			"Mais je dois savoir. La vérité de cette forêt."
		],
		"spanish": [
			"Bosque de Jade. Misterioso, pero con un aura de tristeza.",
			"En cuanto pones un pie, el bosque susurra.",
			"Detente. No entres más profundo.",
			"Pero debo saberlo. La verdad de este bosque."
		],
		"vietnamese": [
			"Rừng Phỉ Thúy. Bí ẩn, nhưng đâu đó phảng phất nỗi buồn.",
			"Khoảnh khắc bước chân vào, rừng thì thầm.",
			"Dừng lại. Đừng vào sâu hơn nữa.",
			"Nhưng tôi phải biết. Sự thật về khu rừng này."
		],
		"thai": [
			"ป่าหยก ลึกลับ แต่แฝงไว้ด้วยความเศร้าสร้อยบางอย่าง",
			"ทันทีที่ย่างก้าวเข้ามา ป่าก็กระซิบ",
			"หยุด อย่าเข้ามาลึกกว่านี้",
			"แต่ฉันต้องรู้ ความจริงของป่าแห่งนี้"
		],
		"hindi": [
			"जेड वन। रहस्यमय, फिर भी कहीं-न-कहीं उदासी छाई हुई है।",
			"कदम रखते ही, जंगल फुसफुसाता है।",
			"रुको। और गहरे मत आओ।",
			"लेकिन मुझे जानना ही होगा। इस जंगल का सच।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "울창한 나무들이 하늘을 가렸다. 비취색 이끼가 모든 것을 뒤덮었다.",
						"english": "Dense trees obscured the sky. Jade-colored moss covered everything.",
						"japanese": "鬱蒼とした木々が空を覆い隠した。翡翠色の苔が全てを覆っていた。",
						"chinese": "茂密的树木遮蔽了天空。翡翠色的苔藓覆盖了一切。",
						"french": "Des arbres touffus masquaient le ciel. La mousse couleur jade recouvrait tout.",
						"spanish": "Árboles frondosos ocultaban el cielo. Musgo color jade cubría todo.",
						"vietnamese": "Cây cối rậm rạp che khuất bầu trời. Rêu màu phỉ thúy phủ kín mọi thứ.",
						"thai": "ต้นไม้หนาทึบบดบังท้องฟ้า มอสสีหยกปกคลุมทุกสิ่ง",
						"hindi": "घने पेड़ों ने आकाश को ढक लिया। जेड रंग की काई ने सब कुछ ढक दिया।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "숲이… 살아있는 것 같아.",
						"english": "The forest... it feels alive.",
						"japanese": "森が…生きているみたい。",
						"chinese": "这片森林…仿佛有生命。",
						"french": "La forêt... elle semble vivante.",
						"spanish": "El bosque... parece vivo.",
						"vietnamese": "Rừng này… hình như sống động.",
						"thai": "ป่า…เหมือนมีชีวิต",
						"hindi": "जंगल... जीवित लग रहा है।"
					}
				},
				{
					"spot": [
						2,
						3
					],
					"type": "direction",
					"speaker": "fern",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "fern",
					"content": {
						"korean": "새로운 침입자여… 돌아가.",
						"english": "New intruder... Go back.",
						"japanese": "新たな侵入者よ… 戻れ。",
						"chinese": "新的入侵者…回去吧。",
						"french": "Nouvelle intruse... Retourne d'où tu viens.",
						"spanish": "Nueva intrusa... Vuelve.",
						"vietnamese": "Kẻ xâm nhập mới… Quay về đi.",
						"thai": "ผู้บุกรุกหน้าใหม่… กลับไปซะ",
						"hindi": "नए घुसपैठिए... वापस जाओ।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "누구야?",
						"english": "Who are you?",
						"japanese": "誰だ？",
						"chinese": "谁？",
						"french": "Qui es-tu ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Ai đó?",
						"thai": "ใครน่ะ?",
						"hindi": "कौन हो?"
					}
				},
				{
					"speaker": "fern",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이 숲의 감시자, 페른. 이곳은 너희가 있을 곳이 아니야.",
						"english": "Fern, guardian of this forest. This is not where you belong.",
						"japanese": "この森の監視者、フェルン。ここは君たちのいるべき場所ではない。",
						"chinese": "这片森林的守护者，费恩。这里不是你们该来的地方。",
						"french": "Fern, gardienne de cette forêt. Ce n'est pas votre place ici.",
						"spanish": "Fern, guardiana de este bosque. Este no es vuestro lugar.",
						"vietnamese": "Fern, người giám hộ của khu rừng này. Đây không phải nơi các ngươi thuộc về.",
						"thai": "เฟิร์น ผู้พิทักษ์ป่าแห่งนี้ ที่นี่ไม่ใช่ที่ของพวกเจ้า",
						"hindi": "इस जंगल की रखवाली करने वाली, फ़र्न। यह तुम्हारी जगह नहीं है।"
					}
				},
				{
					"type": "speech",
					"speaker": "fern",
					"emotion": "sad",
					"content": {
						"korean": "머지않아 슬픔만이 너를 잠식할 것이다.",
						"english": "Soon, only sorrow will consume you.",
						"japanese": "間もなく、悲しみだけがお前を蝕むだろう。",
						"chinese": "不久，只有悲伤会吞噬你。",
						"french": "Bientôt, seule la tristesse te dévorera.",
						"spanish": "Pronto, solo la tristeza te consumirá.",
						"vietnamese": "Chẳng bao lâu nữa, chỉ nỗi buồn sẽ nuốt chửng ngươi.",
						"thai": "อีกไม่นาน ความเศร้าจะกัดกินเจ้าเท่านั้น",
						"hindi": "जल्द ही, केवल दुख तुम्हें निगल जाएगा।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "숲의 숨결은 점점 더 차갑게 느껴졌다.",
						"english": "The forest's breath felt increasingly cold.",
						"japanese": "森の息吹は、だんだんと冷たくなっていった。",
						"chinese": "森林的气息越来越冷了。",
						"french": "Le souffle de la forêt se faisait de plus en plus froid.",
						"spanish": "El aliento del bosque se sentía cada vez más frío.",
						"vietnamese": "Hơi thở của rừng ngày càng trở nên lạnh lẽo.",
						"thai": "ลมหายใจของป่าเริ่มเย็นยะเยือกขึ้นเรื่อยๆ",
						"hindi": "जंगल की साँसें तेज़ी से ठंडी होती जा रही थीं।"
					},
					"emotion": "base"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "fern",
					"spot": [
						3,
						4
					]
				},
				{
					"speaker": "fern",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "들려오지 않나? 이 숲의 흐느낌이…",
						"english": "Don't you hear it? This forest's weeping...",
						"japanese": "聞こえないのか？ この森のすすり泣きが…",
						"chinese": "难道你没听到吗？这片森林的呜咽声…",
						"french": "N'entends-tu pas ? Les gémissements de cette forêt…",
						"spanish": "No lo oyes? El lamento de este bosque...",
						"vietnamese": "Không nghe thấy sao? Tiếng nức nở của khu rừng này...",
						"thai": "เจ้าไม่ได้ยินหรือไง? เสียงร่ำไห้ของป่าแห่งนี้...",
						"hindi": "क्या तुम्हें सुनाई नहीं दे रहा? इस जंगल का रोना..."
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "흐느낌…?",
						"english": "Weeping...?",
						"japanese": "すすり泣き…？",
						"chinese": "呜咽声…？",
						"french": "Gémissements… ?",
						"spanish": "¿Lamento...?",
						"vietnamese": "Nức nở...?",
						"thai": "ร่ำไห้...?",
						"hindi": "रोना...?"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "숲이 고통받고 있어. 너희 같은 존재들 때문에.",
						"english": "The forest is suffering. Because of beings like you.",
						"japanese": "森が苦しんでいる。お前たちのような存在のせいでな。",
						"chinese": "森林正在受苦。就因为你们这种存在。",
						"french": "La forêt souffre. À cause d'êtres comme vous.",
						"spanish": "El bosque está sufriendo. Por culpa de seres como vosotros.",
						"vietnamese": "Rừng đang đau khổ. Vì những kẻ như các ngươi.",
						"thai": "ป่ากำลังทรมาน เพราะสิ่งมีชีวิตอย่างพวกเจ้า",
						"hindi": "जंगल को कष्ट हो रहा है। तुम जैसे जीवों के कारण।"
					},
					"speaker": "fern",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "(주변을 둘러본다) 이건… 황금빛 수액?",
						"english": "(Looks around) This is... golden sap?",
						"japanese": "(周囲を見渡す) これは…黄金の樹液？",
						"chinese": "(环顾四周) 这是…金色的树液？",
						"french": "(Regarde autour de lui) C'est… de la sève dorée ?",
						"spanish": "(Mira a su alrededor) ¿Esto es… savia dorada?",
						"vietnamese": "(Nhìn xung quanh) Đây là... nhựa cây vàng óng?",
						"thai": "(มองไปรอบๆ) นี่มัน...ยางไม้สีทองรึ?",
						"hindi": "(आस-पास देखता है) यह… सुनहरा रस है?"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "불길한 징조. 모든 것이 오염되고 있다.",
						"english": "An ominous sign. Everything is being corrupted.",
						"japanese": "不吉な兆候だ。全てが汚染されている。",
						"chinese": "不祥的征兆。一切都被污染了。",
						"french": "Un signe sinistre. Tout est en train d'être corrompu.",
						"spanish": "Un presagio ominoso. Todo está siendo corrompido.",
						"vietnamese": "Điềm báo chẳng lành. Mọi thứ đang bị ô nhiễm.",
						"thai": "ลางร้าย ทุกสิ่งกำลังแปดเปื้อน",
						"hindi": "अशुभ संकेत। सब कुछ दूषित हो रहा है।"
					},
					"type": "speech",
					"speaker": "fern"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"content": {
						"korean": "숲은 점점 더 깊은 미궁 속으로 안내하는 듯했다.",
						"english": "The forest seemed to lead deeper into a labyrinth.",
						"japanese": "森は、ますます深い迷宮へと誘い込むようだった。",
						"chinese": "森林似乎正将我们引向更深的迷宫。",
						"french": "La forêt semblait mener toujours plus loin dans un labyrinthe.",
						"spanish": "El bosque parecía adentrarse en un laberinto cada vez más profundo.",
						"vietnamese": "Khu rừng dường như dẫn lối sâu hơn vào một mê cung.",
						"thai": "ป่าดูเหมือนจะนำทางลึกเข้าไปในเขาวงกต",
						"hindi": "जंगल एक गहरे भूलभुलैया में ले जा रहा था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"action": "enter",
					"type": "direction",
					"speaker": "fern",
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"content": {
						"korean": "여왕의 슬픔이 숲 전체를 뒤틀고 있어.",
						"english": "The queen's sorrow is twisting the entire forest.",
						"japanese": "女王の悲しみが、森全体を歪めている。",
						"chinese": "女王的悲伤正在扭曲整个森林。",
						"french": "La tristesse de la reine tord toute la forêt.",
						"spanish": "La tristeza de la reina está retorciendo todo el bosque.",
						"vietnamese": "Nỗi buồn của nữ hoàng đang vặn vẹo cả khu rừng.",
						"thai": "ความโศกเศร้าของราชินีกำลังบิดเบือนป่าทั้งผืน",
						"hindi": "रानी का दुख पूरे जंगल को बिगाड़ रहा है।"
					},
					"emotion": "sad",
					"speaker": "fern",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "여왕? 그게 무슨 소리야?",
						"english": "Queen? What do you mean?",
						"japanese": "女王？どういうことだ？",
						"chinese": "女王？那是什么意思？",
						"french": "La reine ? Qu'est-ce que tu racontes ?",
						"spanish": "¿La reina? ¿Qué quieres decir?",
						"vietnamese": "Nữ hoàng? Ý ngươi là gì?",
						"thai": "ราชินี? หมายความว่ายังไง?",
						"hindi": "रानी? इसका क्या मतलब है?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "묻지 마. 알려고 하지 마. 너희는 감당할 수 없을 것이다.",
						"english": "Don't ask. Don't try to know. You won't be able to handle it.",
						"japanese": "聞くな。知ろうとするな。お前たちには耐えられないだろう。",
						"chinese": "别问。别想知道。你们承受不了的。",
						"french": "Ne demande pas. N'essaie pas de savoir. Vous ne pourrez pas le supporter.",
						"spanish": "No preguntes. No intentes saber. No podréis soportarlo.",
						"vietnamese": "Đừng hỏi. Đừng cố biết. Các ngươi sẽ không chịu đựng nổi đâu.",
						"thai": "อย่าถาม อย่าพยายามรู้ พวกเจ้าจะรับมือไม่ไหวหรอก",
						"hindi": "मत पूछो। जानने की कोशिश मत करो। तुम इसे संभाल नहीं पाओगे।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "fern"
				},
				{
					"type": "speech",
					"speaker": "fern",
					"content": {
						"korean": "진실은… 너희의 희망을 부술 것이다.",
						"english": "The truth... will shatter your hopes.",
						"japanese": "真実は… お前たちの希望を打ち砕くだろう。",
						"chinese": "真相… 将会摧毁你们的希望。",
						"french": "La vérité… anéantira vos espoirs.",
						"spanish": "La verdad… destruirá vuestras esperanzas.",
						"vietnamese": "Sự thật… sẽ phá tan hy vọng của các ngươi.",
						"thai": "ความจริง… จะทำลายความหวังของพวกเจ้า",
						"hindi": "सत्य… तुम्हारी आशाओं को तोड़ देगा।"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이제는 돌아갈 수 없다. 숲은 모든 길을 삼켰다.",
						"english": "No turning back now. The forest has swallowed all paths.",
						"japanese": "もう戻れない。森が全ての道を飲み込んだ。",
						"chinese": "无法回头了。森林吞噬了所有道路。",
						"french": "Impossible de revenir en arrière. La forêt a englouti tous les chemins.",
						"spanish": "Ya no hay vuelta atrás. El bosque ha devorado todos los caminos.",
						"vietnamese": "Giờ không thể quay lại. Rừng đã nuốt chửng mọi lối đi.",
						"thai": "ไม่มีทางย้อนกลับแล้ว ป่ากลืนกินทุกเส้นทาง",
						"hindi": "अब पीछे नहीं हट सकते। जंगल ने सारे रास्ते निगल लिए हैं।"
					}
				},
				{
					"duration_ms": 500,
					"speaker": "fern",
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					]
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "페른, 네가 아는 것을 말해줘!",
						"english": "Fern, tell us what you know!",
						"japanese": "フェルン、知っていることを教えてくれ！",
						"chinese": "费恩，告诉我们你知道什么！",
						"french": "Fern, dis-nous ce que tu sais !",
						"spanish": "¡Fern, dinos lo que sabes!",
						"vietnamese": "Fern, hãy nói những gì ngươi biết!",
						"thai": "เฟิร์น บอกมาว่าเจ้ารู้อะไร!",
						"hindi": "फ़र्न, जो जानते हो बताओ!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "fern",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이미 너무 늦었어. 숲은 너희를 놓아주지 않을 거야.",
						"english": "It's too late. The forest won't let you go.",
						"japanese": "もう手遅れだ。森はお前たちを解放しない。",
						"chinese": "已经太迟了。森林不会放过你们的。",
						"french": "Il est trop tard. La forêt ne vous laissera pas partir.",
						"spanish": "Es demasiado tarde. El bosque no os dejará ir.",
						"vietnamese": "Đã quá muộn rồi. Rừng sẽ không buông tha các ngươi đâu.",
						"thai": "สายไปแล้ว ป่าจะไม่ปล่อยพวกเจ้าไป",
						"hindi": "बहुत देर हो चुकी है। जंगल तुम्हें जाने नहीं देगा।"
					}
				},
				{
					"content": {
						"korean": "마지막 경고다. 더는 나아가지 마.",
						"english": "This is your last warning. Go no further.",
						"japanese": "最後の警告だ。これ以上進むな。",
						"chinese": "这是最后警告。不要再往前了。",
						"french": "C'est votre dernier avertissement. N'allez pas plus loin.",
						"spanish": "Esta es la última advertencia. No avancéis más.",
						"vietnamese": "Đây là lời cảnh báo cuối cùng. Đừng đi xa hơn nữa.",
						"thai": "นี่คือคำเตือนสุดท้าย อย่าก้าวไปมากกว่านี้",
						"hindi": "यह तुम्हारी आख़िरी चेतावनी है। आगे मत बढ़ना।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "fern"
				},
				{
					"direction": "up",
					"action": "exit",
					"speaker": "fern",
					"type": "direction",
					"duration_ms": 400
				},
				{
					"content": {
						"korean": "…어쩔 수 없어.",
						"english": "...No other choice.",
						"japanese": "…仕方がない。",
						"chinese": "…没办法了。",
						"french": "…Pas le choix.",
						"spanish": "…No hay más remedio.",
						"vietnamese": "…Không còn lựa chọn nào khác.",
						"thai": "…ช่วยไม่ได้",
						"hindi": "…कोई और चारा नहीं।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "거대한 형체가 길을 막아섰다. 숲의 분노가 형상화된 듯했다.",
						"english": "A colossal figure blocked the path. It seemed the forest's rage had taken form.",
						"japanese": "巨大な影が道を塞いだ。森の怒りが具現化したかのようだった。",
						"chinese": "一个巨大的身影挡住了去路。仿佛是森林的愤怒具象化了。",
						"french": "Une silhouette colossale bloquait le chemin. On eût dit la fureur de la forêt incarnée.",
						"spanish": "Una figura colosal bloqueaba el camino. Parecía la furia del bosque materializada.",
						"vietnamese": "Một hình thể khổng lồ chắn ngang đường. Dường như đó là sự hóa thân của cơn thịnh nộ của rừng.",
						"thai": "ร่างมหึมาขวางเส้นทางอยู่ ราวกับความโกรธของป่าได้ปรากฏเป็นรูปร่าง",
						"hindi": "एक विशाल आकृति ने रास्ता रोक लिया। जैसे जंगल का क्रोध साकार हो उठा हो।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "침입자여… 더는 용납하지 않는다.",
						"english": "Intruders… You will not be tolerated further.",
						"japanese": "侵入者よ… これ以上は許さない。",
						"chinese": "入侵者… 不再容忍你们。",
						"french": "Intrus… Vous ne serez plus tolérés.",
						"spanish": "Invasores… No seréis tolerados más.",
						"vietnamese": "Kẻ xâm nhập… không thể dung thứ thêm nữa.",
						"thai": "ผู้บุกรุก… จะไม่ทนอีกต่อไป",
						"hindi": "घुसपैठियों… तुम्हें और बर्दाश्त नहीं किया जाएगा।"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "네가 숲을 아프게 하는 존재구나!",
						"english": "You are the one hurting the forest!",
						"japanese": "お前が森を傷つける存在だな！",
						"chinese": "你就是伤害森林的存在！",
						"french": "C'est toi qui fais souffrir la forêt !",
						"spanish": "¡Tú eres el que daña el bosque!",
						"vietnamese": "Ngươi chính là kẻ đang làm tổn thương khu rừng!",
						"thai": "เจ้าคือผู้ที่ทำให้ป่าเจ็บปวด!",
						"hindi": "तुम ही जंगल को चोट पहुँचाने वाले हो!"
					}
				},
				{
					"content": {
						"korean": "어리석은 것들. 감히 숲의 수호자를 거스르려 하는가?",
						"english": "Fools. Dare you defy the forest's guardian?",
						"japanese": "愚か者め。よくも森の守護者に逆らおうとするか？",
						"chinese": "愚蠢的东西。竟敢违抗森林的守护者？",
						"french": "Imbéciles. Osez-vous défier le gardien de la forêt ?",
						"spanish": "Necios. ¿Os atrevéis a desafiar al guardián del bosque?",
						"vietnamese": "Lũ ngu xuẩn. Dám chống lại người bảo vệ rừng sao?",
						"thai": "พวกโง่เง่า กล้าดีอย่างไรมาท้าทายผู้พิทักษ์ป่า?",
						"hindi": "मूर्खों। क्या तुम जंगल के संरक्षक का विरोध करने की हिम्मत करते हो?"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "물러서지 않아!",
						"english": "I won't back down!",
						"japanese": "退かない！",
						"chinese": "我不会退缩！",
						"french": "Je ne reculerai pas !",
						"spanish": "¡No retrocederé!",
						"vietnamese": "Tôi sẽ không lùi bước!",
						"thai": "ข้าไม่ถอย!",
						"hindi": "मैं पीछे नहीं हटूंगा!"
					}
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "감히… 숲을 넘보려 하다니.",
						"english": "How dare you... covet the forest.",
						"japanese": "よくも…森を狙おうなどと。",
						"chinese": "竟敢……觊觎森林。",
						"french": "Comment oses-tu... convoiter la forêt.",
						"spanish": "Cómo te atreves... a codiciar el bosque.",
						"vietnamese": "Dám... nhòm ngó khu rừng.",
						"thai": "บังอาจ... คิดจะรุกล้ำป่า",
						"hindi": "तुम्हारी हिम्मत कैसे हुई... जंगल पर नज़र डालने की।"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "너희는… 이곳에 묻힐 것이다.",
						"english": "You will... be buried here.",
						"japanese": "お前たちは…ここに埋もれるだろう。",
						"chinese": "你们将……埋葬于此。",
						"french": "Vous serez... enterrés ici.",
						"spanish": "Serán... enterrados aquí.",
						"vietnamese": "Các ngươi... sẽ bị chôn vùi tại đây.",
						"thai": "พวกเจ้า... จะถูกฝังที่นี่",
						"hindi": "तुम लोग... यहीं दफन हो जाओगे।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "…아직 끝나지 않았어.",
						"english": "...It's not over yet.",
						"japanese": "…まだ終わっていない。",
						"chinese": "……还没结束。",
						"french": "...Ce n'est pas encore fini.",
						"spanish": "...Aún no ha terminado.",
						"vietnamese": "...Chưa kết thúc đâu.",
						"thai": "...ยังไม่จบ",
						"hindi": "...अभी खत्म नहीं हुआ है।"
					}
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "sad",
					"content": {
						"korean": "크윽… 겨우 이 정도라니…",
						"english": "Ugh... Is this all you've got...?",
						"japanese": "くっ…これだけだと…",
						"chinese": "呃……就这点程度吗……",
						"french": "Ugh... C'est tout ce que tu as...?",
						"spanish": "Ugh... ¿Es esto todo lo que tienes...?",
						"vietnamese": "Ư... Chỉ đến mức này thôi sao...",
						"thai": "อึก... แค่นี้เองหรือ...",
						"hindi": "उफ़... बस इतना ही...?"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "하지만 기억해라… 숲의 고통은… 끝나지 않아…",
						"english": "But remember... the forest's suffering... will not end...",
						"japanese": "だが覚えておけ…森の苦しみは…終わらない…",
						"chinese": "但请记住……森林的痛苦……永无止境……",
						"french": "Mais souviens-toi... la souffrance de la forêt... ne prendra pas fin...",
						"spanish": "Pero recuerda... el sufrimiento del bosque... no terminará...",
						"vietnamese": "Nhưng hãy nhớ rằng... nỗi đau của khu rừng... sẽ không kết thúc...",
						"thai": "แต่จำไว้... ความเจ็บปวดของป่า... จะไม่จบสิ้น...",
						"hindi": "परंतु याद रखना... जंगल का कष्ट... समाप्त नहीं होगा..."
					}
				},
				{
					"content": {
						"korean": "…끝났나?",
						"english": "...Is it over?",
						"japanese": "…終わったのか？",
						"chinese": "……结束了吗？",
						"french": "...C'est fini ?",
						"spanish": "¿...Se acabó?",
						"vietnamese": "...Kết thúc rồi sao?",
						"thai": "...จบแล้วเหรอ?",
						"hindi": "...क्या यह खत्म हो गया?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "쓰러진 {random_boss} 뒤로, 숲은 잠시 침묵했다.",
						"english": "Behind the fallen {random_boss}, the forest fell silent for a moment.",
						"japanese": "倒れた{random_boss}の後ろで、森は一時的に沈黙した。",
						"chinese": "倒下的{random_boss}身后，森林暂时陷入了沉默。",
						"french": "Derrière le {random_boss} tombé, la forêt se tut un instant.",
						"spanish": "Detrás del {random_boss} caído, el bosque guardó silencio por un momento.",
						"vietnamese": "Đằng sau {random_boss} đã gục ngã, khu rừng chìm vào im lặng một lúc.",
						"thai": "เบื้องหลัง {random_boss} ที่ล้มลง ป่าเงียบสงบชั่วขณะ",
						"hindi": "गिरे हुए {random_boss} के पीछे, जंगल एक पल के लिए शांत हो गया।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그러나 그 침묵은 평화가 아닌… 또 다른 시작을 예고하고 있었다.",
						"english": "However, that silence was not peace... but heralded yet another beginning.",
						"japanese": "しかし、その沈黙は平和ではなく…また別の始まりを告げていた。",
						"chinese": "然而，那份沉默并非平静……而是预示着另一个开始。",
						"french": "Cependant, ce silence n'était pas la paix... mais annonçait un autre commencement.",
						"spanish": "Sin embargo, ese silencio no era paz... sino que presagiaba otro comienzo.",
						"vietnamese": "Tuy nhiên, sự im lặng đó không phải là bình yên... mà là dấu hiệu của một khởi đầu khác.",
						"thai": "แต่ความเงียบนั้นไม่ใช่ความสงบ... แต่มันกำลังประกาศการเริ่มต้นใหม่อีกครั้ง",
						"hindi": "हालांकि, वह चुप्पी शांति नहीं थी... बल्कि एक और शुरुआत का संकेत दे रही थी।"
					},
					"speaker": "narrator",
					"type": "speech"
				}
			]
		}
	]
} as const;
