export const scenario_modern_minsu_1_03 = {
	"scenario_id": "modern_minsu_1_03",
	"order": 3,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"kai": {
			"id": "mon_d7f29313-b8fb-49da-9a1a-01df5d13866e",
			"name": {
				"korean": "카이",
				"english": "Kai",
				"japanese": "カイ",
				"chinese": "凯",
				"french": "Kai",
				"spanish": "Kai",
				"vietnamese": "Kai",
				"thai": "ไค",
				"hindi": "काई"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f10d9184-4155-4bb9-de2d-db61463f7c00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/e41f8e03-08c9-4a4f-6f72-fa9342876f00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"환상의 기억들이 조각나, 부유하는 공간.",
			"아련한 향수 속에서, 카이는 잊었던 위안을 찾았다.",
			"그러나 그 달콤함은, 현실의 임무를 흐리게 했다.",
			"경고의 목소리는, 이미 너무 늦었을지도 모른다."
		],
		"english": [
			"Fragmented memories of illusion, a space adrift.",
			"Amidst a faint nostalgia, Kai found forgotten comfort.",
			"But that sweetness blurred the mission of reality.",
			"The warning voice might already be too late."
		],
		"japanese": [
			"幻想の記憶が砕け、漂う空間。",
			"かすかな郷愁の中で、カイは忘れられた安らぎを見つけた。",
			"しかし、その甘さは現実の任務を曇らせた。",
			"警告の声は、もう手遅れかもしれない。"
		],
		"chinese": [
			"幻象的记忆碎片，漂浮的空间。",
			"在淡淡的怀旧中，凯找到了遗忘的慰藉。",
			"然而那份甜蜜，却模糊了现实的任务。",
			"警告的声音，或许已经太迟了。"
		],
		"french": [
			"Des souvenirs fragmentés d'illusion, un espace flottant.",
			"Au milieu d'une faible nostalgie, Kai retrouva un réconfort oublié.",
			"Mais cette douceur brouillait la mission de la réalité.",
			"La voix d'avertissement est peut-être déjà trop tardive."
		],
		"spanish": [
			"Recuerdos fragmentados de ilusión, un espacio a la deriva.",
			"En una tenue nostalgia, Kai encontró un consuelo olvidado.",
			"Pero esa dulzura empañó la misión de la realidad.",
			"La voz de advertencia podría ser ya demasiado tarde."
		],
		"vietnamese": [
			"Những mảnh ký ức ảo ảnh, không gian trôi nổi.",
			"Giữa nỗi hoài niệm mờ nhạt, Kai tìm thấy sự an ủi đã lãng quên.",
			"Nhưng sự ngọt ngào đó làm mờ nhiệm vụ thực tại.",
			"Tiếng nói cảnh báo có lẽ đã quá muộn."
		],
		"thai": [
			"ความทรงจำแห่งภาพลวงตาที่แตกสลาย, พื้นที่ล่องลอย.",
			"ท่ามกลางความหลังที่เลือนลาง, ไคพบความสุขที่ลืมเลือนไปแล้ว.",
			"แต่ความหวานนั้นทำให้ภารกิจในความเป็นจริงพร่ามัว.",
			"เสียงเตือนอาจจะสายเกินไปแล้ว."
		],
		"hindi": [
			"भ्रम की खंडित यादें, एक तैरता हुआ स्थान।",
			"मंद स्मृति के बीच, काई ने भूली हुई सांत्वना पाई।",
			"परंतु उस मिठास ने वास्तविकता के कार्य को धुंधला कर दिया।",
			"चेतावनी की आवाज़ शायद पहले ही बहुत देर हो चुकी हो।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "과거의 온기가 살아 숨 쉬는 공간. 모든 것이 완벽했다.",
						"english": "A space where the warmth of the past breathes. Everything was perfect.",
						"japanese": "過去の温もりが息づく空間。すべてが完璧だった。",
						"chinese": "一个弥漫着过去温暖的空间。一切都完美无缺。",
						"french": "Un espace où la chaleur du passé respire. Tout était parfait.",
						"spanish": "Un espacio donde el calor del pasado respira. Todo era perfecto.",
						"vietnamese": "Không gian nơi hơi ấm quá khứ vẫn còn sống động. Mọi thứ đều hoàn hảo.",
						"thai": "พื้นที่ที่ความอบอุ่นของอดีตยังมีชีวิตอยู่. ทุกอย่างสมบูรณ์แบบ.",
						"hindi": "एक ऐसी जगह जहाँ अतीत की गर्माहट साँस लेती है। सब कुछ उत्तम था।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"speaker": "kai",
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…아, 여기가 어디지?",
						"english": "...Ah, where am I?",
						"japanese": "…ああ、ここはどこだ？",
						"chinese": "…啊，这是哪里？",
						"french": "...Ah, où suis-je ?",
						"spanish": "...Ah, ¿dónde estoy?",
						"vietnamese": "...À, đây là đâu?",
						"thai": "...อา, นี่ที่ไหนกัน?",
						"hindi": "...अरे, मैं कहाँ हूँ?"
					},
					"emotion": "base",
					"speaker": "kai"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "카이, 정신 차려. 우린 탐험 중이야.",
						"english": "Kai, snap out of it. We're on an exploration.",
						"japanese": "カイ、しっかりしろ。私たちは探査中だ。",
						"chinese": "凯，清醒点。我们正在探索。",
						"french": "Kai, ressaisis-toi. Nous sommes en exploration.",
						"spanish": "Kai, espabila. Estamos en una exploración.",
						"vietnamese": "Kai, tỉnh táo lại đi. Chúng ta đang thám hiểm.",
						"thai": "ไค, ตั้งสติหน่อย. เรากำลังสำรวจอยู่.",
						"hindi": "काई, होश में आओ। हम खोज पर हैं।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "탐험? 여기가… 집인가?",
						"english": "Exploration? Is this... home?",
						"japanese": "探査？ここが…家なのか？",
						"chinese": "探索？这里是…家吗？",
						"french": "Exploration ? Est-ce... la maison ?",
						"spanish": "¿Exploración? ¿Es esto... mi casa?",
						"vietnamese": "Thám hiểm? Đây có phải... nhà không?",
						"thai": "สำรวจ? นี่คือ...บ้านเหรอ?",
						"hindi": "खोज? क्या यह... घर है?"
					},
					"emotion": "happy"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "향수는 짙어지고, 현실은 희미해졌다.",
						"english": "Nostalgia deepened, reality faded.",
						"japanese": "郷愁が募り、現実が薄れた。",
						"chinese": "怀旧之情愈浓，现实愈发模糊。",
						"french": "La nostalgie s'épaississait, la réalité s'estompait.",
						"spanish": "La nostalgia se intensificó, la realidad se desvaneció.",
						"vietnamese": "Nỗi hoài niệm dâng trào, hiện thực mờ nhạt dần.",
						"thai": "ความคิดถึงทวีความรุนแรงขึ้น, ความเป็นจริงเลือนหายไป.",
						"hindi": "पुरानी यादें गहरी होती गईं, वास्तविकता धुंधली पड़ गई।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "kai",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "…이 냄새. 엄마가 구워주던 빵 냄새 같아.",
						"english": "...This smell. It's like the bread Mom used to bake.",
						"japanese": "…この匂い。母さんが焼いてくれたパンの匂いみたいだ。",
						"chinese": "…这个味道。好像妈妈烤的面包香味。",
						"french": "...Cette odeur. C'est comme le pain que maman faisait cuire.",
						"spanish": "...Este olor. Es como el pan que horneaba mamá.",
						"vietnamese": "...Mùi này. Giống như mùi bánh mì mẹ từng nướng.",
						"thai": "...กลิ่นนี้. เหมือนกลิ่นขนมปังที่แม่เคยอบให้เลย.",
						"hindi": "यह गंध। माँ जो रोटी बनाती थी, वैसी है।"
					},
					"emotion": "happy",
					"type": "speech"
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "카이, 우리 임무는 기억 관리자를 찾는 거야. 기억 관리자!",
						"english": "Kai, our mission is to find the Memory Keeper. The Memory Keeper!",
						"japanese": "カイ、私たちの任務は記憶管理者を見つけることだ。記憶管理者！",
						"chinese": "凯，我们的任务是找到记忆管理者。记忆管理者！",
						"french": "Kai, notre mission est de trouver le Gardien de la Mémoire. Le Gardien de la Mémoire !",
						"spanish": "Kai, nuestra misión es encontrar al Guardián de la Memoria. ¡Al Guardián de la Memoria!",
						"vietnamese": "Kai, nhiệm vụ của chúng ta là tìm Người Giữ Ký Ức. Người Giữ Ký Ức!",
						"thai": "ไค ภารกิจของเราคือการตามหาผู้ดูแลความทรงจำ ผู้ดูแลความทรงจำ!",
						"hindi": "काई, हमारा मिशन मेमोरी कीपर को ढूंढना है। मेमोरी कीपर!"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "기억… 관리자? 여기서 영원히 머물고 싶어.",
						"english": "Memory... Keeper? I want to stay here forever.",
						"japanese": "記憶… 管理者？ここで永遠に過ごしたい。",
						"chinese": "记忆… 管理者？我想永远留在这里。",
						"french": "Gardien de la Mémoire... ? Je veux rester ici pour toujours.",
						"spanish": "¿Guardián de la Memoria...? Quiero quedarme aquí para siempre.",
						"vietnamese": "Người Giữ Ký Ức…? Tôi muốn ở lại đây mãi mãi.",
						"thai": "ผู้ดูแล... ความทรงจำ? ฉันอยากอยู่ที่นี่ตลอดไป",
						"hindi": "मेमोरी... कीपर? मैं यहीं हमेशा के लिए रहना चाहता हूँ।"
					},
					"emotion": "sad",
					"speaker": "kai"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "지금 무슨 말을 하는 거야, 카이!",
						"english": "What are you talking about, Kai!",
						"japanese": "何を言っているんだ、カイ！",
						"chinese": "你在说什么，凯！",
						"french": "Mais qu'est-ce que tu racontes, Kai !",
						"spanish": "¡¿De qué estás hablando, Kai?!",
						"vietnamese": "Anh đang nói gì vậy, Kai!",
						"thai": "ไค นี่นายกำลังพูดเรื่องอะไร!",
						"hindi": "तुम क्या कह रहे हो, काई!"
					},
					"emotion": "angry",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"content": {
						"korean": "기억의 파편들이, 그를 붙잡는 족쇄가 되었다.",
						"english": "Shards of memory became shackles, holding him captive.",
						"japanese": "記憶の破片が、彼を捕らえる足枷となった。",
						"chinese": "记忆的碎片，成了束缚他的枷锁。",
						"french": "Les fragments de mémoire devinrent des chaînes, le retenant captif.",
						"spanish": "Los fragmentos de memoria se convirtieron en grilletes, reteniéndolo.",
						"vietnamese": "Những mảnh ký ức đã trở thành xiềng xích, giam cầm anh ta.",
						"thai": "เศษเสี้ยวความทรงจำ กลายเป็นโซ่ตรวนที่พันธนาการเขาไว้",
						"hindi": "याददाश्त के टुकड़े, उसे जकड़ने वाली बेड़ियाँ बन गए।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"speaker": "kai",
					"action": "enter"
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "…난 여기서 행복해. 더 이상 아무것도 떠올리고 싶지 않아.",
						"english": "...I'm happy here. I don't want to remember anything anymore.",
						"japanese": "…私はここで幸せだ。もう何も思い出したくない。",
						"chinese": "…我在这里很幸福。我不想再想起任何事了。",
						"french": "...Je suis heureux ici. Je ne veux plus me souvenir de rien.",
						"spanish": "...Soy feliz aquí. Ya no quiero recordar nada.",
						"vietnamese": "…Tôi hạnh phúc ở đây. Tôi không muốn nhớ lại bất cứ điều gì nữa.",
						"thai": "…ฉันมีความสุขที่นี่ ไม่อยากจดจำอะไรอีกแล้ว",
						"hindi": "...मैं यहाँ खुश हूँ। मैं अब कुछ भी याद नहीं करना चाहता।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_2",
					"content": {
						"korean": "안 돼, 카이. 이건 환상이야!",
						"english": "No, Kai. This is an illusion!",
						"japanese": "だめだ、カイ。これは幻覚だ！",
						"chinese": "不，凯。这是幻象！",
						"french": "Non, Kai. C'est une illusion !",
						"spanish": "¡No, Kai, esto es una ilusión!",
						"vietnamese": "Không, Kai. Đây là ảo ảnh!",
						"thai": "ไม่นะไค นี่มันแค่ภาพลวงตา!",
						"hindi": "नहीं, काई। यह एक भ्रम है!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "…아름다운 기억 속에서, 영원히 잠들어라.",
						"english": "...Slumber forever in beautiful memories.",
						"japanese": "…美しい記憶の中で、永遠に眠れ。",
						"chinese": "…在美好的记忆中，永远沉睡吧。",
						"french": "...Endors-toi pour toujours dans de beaux souvenirs.",
						"spanish": "...Duerme para siempre en hermosos recuerdos.",
						"vietnamese": "…Hãy ngủ vùi mãi mãi trong những ký ức đẹp đẽ.",
						"thai": "…จงหลับใหลไปชั่วนิรันดร์ ในความทรงจำอันงดงาม",
						"hindi": "...सुंदर यादों में हमेशा के लिए सो जाओ।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "정체 모를 자의 목소리! 경고야!",
						"english": "An unknown voice! A warning!",
						"japanese": "正体不明の声！警告だ！",
						"chinese": "未知之人的声音！是警告！",
						"french": "La voix d'un inconnu ! C'est un avertissement !",
						"spanish": "¡La voz de un desconocido! ¡Es una advertencia!",
						"vietnamese": "Giọng nói của kẻ lạ mặt! Một lời cảnh báo!",
						"thai": "เสียงปริศนา! คำเตือน!",
						"hindi": "एक अज्ञात आवाज़! एक चेतावनी!"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "환상은 그를 삼키고, 임무는 사라졌다.",
						"english": "The illusion swallowed him, and the mission vanished.",
						"japanese": "幻覚は彼を飲み込み、任務は消え去った。",
						"chinese": "幻象吞噬了他，任务也随之消失。",
						"french": "L'illusion l'a englouti, et la mission a disparu.",
						"spanish": "La ilusión lo tragó, y la misión desapareció.",
						"vietnamese": "Ảo ảnh đã nuốt chửng anh ta, và nhiệm vụ biến mất.",
						"thai": "ภาพลวงตากลืนกินเขา และภารกิจก็เลือนหายไป",
						"hindi": "भ्रम ने उसे निगल लिया, और मिशन गायब हो गया।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"speaker": "kai"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…난 아무것도 기억나지 않아. 그저 여기서…",
						"english": "...I don't remember anything. I just want to be here...",
						"japanese": "…何も覚えていない。ただここで…",
						"chinese": "…我什么都不记得了。只是在这里…",
						"french": "...Je ne me souviens de rien. Juste être ici...",
						"spanish": "...No recuerdo nada. Solo quiero estar aquí...",
						"vietnamese": "…Tôi không nhớ gì cả. Chỉ là ở đây…",
						"thai": "…ฉันจำอะไรไม่ได้เลย แค่อยากอยู่ที่นี่…",
						"hindi": "...मुझे कुछ याद नहीं। बस यहीं पर..."
					},
					"emotion": "base",
					"speaker": "kai"
				},
				{
					"content": {
						"korean": "카이! 우린 돌아가야 해!",
						"english": "Kai! We have to go back!",
						"japanese": "カイ！戻らないと！",
						"chinese": "凯！我们得回去了！",
						"french": "Kai ! Nous devons rentrer !",
						"spanish": "¡Kai! ¡Tenemos que volver!",
						"vietnamese": "Kai! Chúng ta phải quay lại!",
						"thai": "ไค! เราต้องกลับไป!",
						"hindi": "काई! हमें वापस जाना होगा!"
					},
					"emotion": "angry",
					"speaker": "character_3",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "아직도 벗어나지 못했나. 어리석은 인간들.",
						"english": "Still haven't escaped, have you? Foolish humans.",
						"japanese": "まだ逃げ出せないのか。愚かな人間どもめ。",
						"chinese": "还没逃出来吗？愚蠢的人类。",
						"french": "Toujours pas échappé, n'est-ce pas ? Humains stupides.",
						"spanish": "¿Todavía no han escapado? Estúpidos humanos.",
						"vietnamese": "Vẫn chưa thoát được sao? Loài người ngu ngốc.",
						"thai": "ยังหนีไม่พ้นรึ? มนุษย์โง่เอ๊ย.",
						"hindi": "अभी तक नहीं बच पाए? मूर्ख इंसान।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가, 탐험대를 조롱했다.",
						"english": "The giant shadow mocked the expedition team.",
						"japanese": "巨大な影が、探検隊を嘲笑った。",
						"chinese": "巨大的影子嘲笑了探险队。",
						"french": "L'ombre gigantesque se moquait de l'équipe d'exploration.",
						"spanish": "La gigantesca sombra se burló del equipo de expedición.",
						"vietnamese": "Cái bóng khổng lồ chế nhạo đội thám hiểm.",
						"thai": "เงาขนาดยักษ์เยาะเย้ยทีมสำรวจ.",
						"hindi": "विशाल छाया ने अभियान दल का उपहास किया।"
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "크윽… 이 달콤한 기억들은… 영원히… 사라지지… 않아…",
						"english": "Ugh... these sweet memories... will never... fade away...",
						"japanese": "くぅ…この甘美な記憶は…永遠に…消え…ない…",
						"chinese": "呃……这些甜蜜的记忆……永远……不会……消失……",
						"french": "Ugh... ces doux souvenirs... ne disparaîtront jamais...",
						"spanish": "Ugh... estos dulces recuerdos... nunca... desaparecerán...",
						"vietnamese": "Ư… những ký ức ngọt ngào này… sẽ không bao giờ… biến mất…",
						"thai": "อึก... ความทรงจำอันหอมหวานเหล่านี้... จะไม่มีวัน... เลือนหาย...",
						"hindi": "उफ़... ये मीठी यादें... कभी नहीं... मिटेंगी..."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "끝났어… 카이, 괜찮아?",
						"english": "It's over... Kai, are you okay?",
						"japanese": "終わった…カイ、大丈夫？",
						"chinese": "结束了……凯，你还好吗？",
						"french": "C'est fini... Kai, tu vas bien ?",
						"spanish": "Se acabó... Kai, ¿estás bien?",
						"vietnamese": "Xong rồi… Kai, cậu ổn chứ?",
						"thai": "จบแล้ว... ไค, นายสบายดีไหม?",
						"hindi": "खत्म हो गया... काई, तुम ठीक हो?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"type": "direction",
					"speaker": "kai",
					"spot": [
						4,
						3
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "…머리가 아파… 여긴… 어디지?",
						"english": "...My head hurts... Where... am I?",
						"japanese": "「…頭が痛い… ここは… どこだ？」",
						"chinese": "“……头好痛……这里……是哪里？”",
						"french": "...Ma tête me fait mal... Où... suis-je ?",
						"spanish": "...Me duele la cabeza... ¿Dónde... estoy?",
						"vietnamese": "...Đầu tôi đau quá... Đây... là đâu?",
						"thai": "...ปวดหัวจัง... ที่นี่... ที่ไหนนะ?",
						"hindi": "...मेरा सिर दुख रहा है... यह... कहाँ है?"
					},
					"emotion": "sad",
					"speaker": "kai",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "환상은 걷히고, 현실의 냉기가 그들을 맞았다. 그러나 카이의 눈빛은 아직 아련했다.",
						"english": "The illusion faded, and the chill of reality greeted them. Yet, Kai's eyes still held a distant haze.",
						"japanese": "「幻想は晴れ、現実の冷気が彼らを迎えた。しかし、カイの瞳はまだぼんやりとしていた。」",
						"chinese": "“幻想消散，现实的冰冷迎面袭来。然而，凯的眼神依旧朦胧。”",
						"french": "L'illusion s'est dissipée, et le froid de la réalité les a accueillis. Pourtant, le regard de Kai était encore empreint d'une lointaine brume.",
						"spanish": "La ilusión se desvaneció, y el frío de la realidad los recibió. Sin embargo, la mirada de Kai seguía velada.",
						"vietnamese": "Ảo ảnh tan biến, cái lạnh của thực tại đón chào họ. Tuy nhiên, ánh mắt của Kai vẫn còn mơ hồ.",
						"thai": "ภาพลวงตาจางหายไป ความเย็นชาของความเป็นจริงเข้าปกคลุม แต่แววตาของไคยังคงเลือนลาง",
						"hindi": "भ्रम दूर हो गया, और वास्तविकता की ठंडक ने उनका स्वागत किया। फिर भी, काई की आँखों में अभी भी एक धुंधलका था।"
					},
					"emotion": "base"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "정체 모를 자가 마침내 모습을 드러냈다.",
						"english": "The unknown entity finally revealed itself.",
						"japanese": "正体不明の者がついに姿を現した。",
						"chinese": "不明身份者终于现身了。",
						"french": "L'entité inconnue s'est finalement révélée.",
						"spanish": "La entidad desconocida finalmente se reveló.",
						"vietnamese": "Thực thể vô danh cuối cùng đã lộ diện.",
						"thai": "ผู้ไม่ประสงค์ออกนามปรากฏตัวในที่สุด.",
						"hindi": "अज्ञात सत्ता ने अंततः खुद को प्रकट किया।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "환상과 현실을 구분하지 못하는 자들아. 너희는 여기서 끝이다.",
						"english": "Those who cannot distinguish between illusion and reality. This is where you end.",
						"japanese": "幻想と現実を区別できない者たちよ。お前たちはここで終わりだ。",
						"chinese": "无法区分幻想与现实之人。你们到此为止了。",
						"french": "Ceux qui ne peuvent distinguer l'illusion de la réalité. C'est ici que vous finissez.",
						"spanish": "Los que no pueden distinguir entre ilusión y realidad. Aquí es donde terminan.",
						"vietnamese": "Những kẻ không thể phân biệt giữa ảo ảnh và hiện thực. Các ngươi sẽ kết thúc tại đây.",
						"thai": "ผู้ที่ไม่สามารถแยกแยะระหว่างภาพลวงตาและความจริงได้ นี่คือจุดจบของพวกเจ้า.",
						"hindi": "जो भ्रम और वास्तविकता में भेद नहीं कर सकते। तुम्हारा यहीं अंत है।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "카이, 정신 차려! 저게 네 환상을 이용하고 있어!",
						"english": "Kai, snap out of it! It's using your illusions!",
						"japanese": "カイ、目を覚まして！あれが君の幻想を利用している！",
						"chinese": "凯，清醒一点！它正在利用你的幻象！",
						"french": "Kai, ressaisis-toi ! Ça utilise tes illusions !",
						"spanish": "¡Kai, reacciona! ¡Está usando tus ilusiones!",
						"vietnamese": "Kai, tỉnh táo lại! Nó đang lợi dụng ảo ảnh của cậu!",
						"thai": "ไค, ตั้งสติหน่อย! มันกำลังใช้ภาพลวงตาของนาย!",
						"hindi": "काई, होश में आओ! वह तुम्हारे भ्रमों का उपयोग कर रहा है!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "환상…?",
						"english": "Illusions...?",
						"japanese": "幻想…？",
						"chinese": "幻象……？",
						"french": "Illusions...?",
						"spanish": "¿Ilusiones...?",
						"vietnamese": "Ảo ảnh…?",
						"thai": "ภาพลวงตา...?",
						"hindi": "भ्रम...?"
					},
					"emotion": "base",
					"speaker": "kai"
				},
				{
					"content": {
						"korean": "이미 늦었다. 너희의 모든 기억은, 나의 것이 될 것이다.",
						"english": "It's already too late. All your memories will be mine.",
						"japanese": "もう遅い。お前たちの全ての記憶は、私のものとなるだろう。",
						"chinese": "已经太晚了。你们所有的记忆都将属于我。",
						"french": "Il est déjà trop tard. Tous vos souvenirs seront miens.",
						"spanish": "Ya es demasiado tarde. Todas vuestras memorias serán mías.",
						"vietnamese": "Đã quá muộn rồi. Tất cả ký ức của các ngươi sẽ là của ta.",
						"thai": "สายเกินไปแล้ว. ความทรงจำทั้งหมดของพวกเจ้าจะเป็นของข้า.",
						"hindi": "बहुत देर हो चुकी है। तुम्हारी सारी यादें मेरी होंगी।"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 것들. 너희는 영원히 이 기억 속에 갇힐 것이다!",
						"english": "Fools. You shall be trapped forever in this memory!",
						"japanese": "「愚か者どもめ。お前たちは永遠にこの記憶の中に囚われるだろう！」",
						"chinese": "“愚蠢的东西。你们将永远被困在这记忆之中！”",
						"french": "Imbéciles. Vous serez piégés à jamais dans ce souvenir !",
						"spanish": "¡Necios! ¡Quedaréis atrapados para siempre en este recuerdo!",
						"vietnamese": "Đồ ngốc. Ngươi sẽ bị mắc kẹt mãi mãi trong ký ức này!",
						"thai": "เจ้าพวกโง่เขลา! พวกเจ้าจะต้องติดอยู่ในความทรงจำนี้ชั่วนิรันดร์!",
						"hindi": "मूर्ख। तुम इस स्मृति में हमेशा के लिए कैद रहोगे!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "카이… 아직… 아직 포기할 수 없어!",
						"english": "Kai... I still... I still can't give up!",
						"japanese": "「カイ… まだ… まだ諦められない！」",
						"chinese": "“凯……我还没……还没放弃！”",
						"french": "Kai... Je ne peux... je ne peux pas encore abandonner !",
						"spanish": "Kai... Todavía... ¡Todavía no puedo rendirme!",
						"vietnamese": "Kai... Vẫn... vẫn chưa thể bỏ cuộc!",
						"thai": "ไค... ฉันยัง... ฉันยังยอมแพ้ไม่ได้!",
						"hindi": "काई... मैं अभी भी... मैं अभी भी हार नहीं मान सकता!"
					},
					"emotion": "angry"
				},
				{
					"action": "enter",
					"speaker": "kai",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…따뜻해… 이대로… 있고 싶어…",
						"english": "...It's warm... I want to... stay like this...",
						"japanese": "「…温かい… このまま… いたいの…」",
						"chinese": "“……好温暖……我想……就这样待着……”",
						"french": "...C'est chaud... Je veux... rester comme ça...",
						"spanish": "...Qué cálido... Quiero... quedarme así...",
						"vietnamese": "...Thật ấm áp... Tôi muốn... ở lại như thế này...",
						"thai": "...อบอุ่นจัง... อยากจะ... อยู่แบบนี้...",
						"hindi": "...यह गर्म है... मैं... ऐसे ही रहना चाहता हूँ..."
					},
					"emotion": "happy",
					"speaker": "kai"
				},
				{
					"content": {
						"korean": "아련한 환상 속에서, 그들은 길을 잃었다.",
						"english": "Lost in a hazy illusion, they strayed.",
						"japanese": "「ぼんやりとした幻想の中で、彼らは道に迷った。」",
						"chinese": "“在朦胧的幻象中，他们迷失了方向。”",
						"french": "Perdus dans une illusion floue, ils s'égarèrent.",
						"spanish": "Perdidos en una ilusión borrosa, se extraviaron.",
						"vietnamese": "Lạc lối trong một ảo ảnh mờ ảo, họ đã đi lạc.",
						"thai": "พวกเขาหลงทางในภาพลวงตาอันเลือนลาง",
						"hindi": "एक धुंधले भ्रम में खोकर, वे भटक गए।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			]
		}
	]
} as const;
