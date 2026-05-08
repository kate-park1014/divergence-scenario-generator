export const scenario_ExArchive_V0_05 = {
	"scenario_id": "ExArchive_V0_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "modern",
	"actors": {
		"luna": {
			"id": "mon_e27445fb-b351-4243-a187-17acd1227716",
			"name": {
				"korean": "루나",
				"english": "Luna",
				"japanese": "ルナ",
				"chinese": "露娜",
				"french": "Luna",
				"spanish": "Luna",
				"vietnamese": "Luna",
				"thai": "ลูน่า",
				"hindi": "लूना"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/b662c54a-196d-4bed-ad22-788b05396700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/edff405f-6aca-4fb1-f2c8-1e7ebd51fd00/public"
		}
	},
	"boss": {
		"pool_id": "pool_099"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "골목 끝, 작은 빌라 한 채. 문이 열려 있었다.",
						"english": "At the end of the alley, a small villa. The door was open.",
						"japanese": "路地の奥に小さな家。ドアは開いていた。",
						"chinese": "巷子尽头，一栋小别墅。门开着。",
						"french": "Au bout de l'allée, une petite villa. La porte était ouverte.",
						"spanish": "Al final del callejón, una pequeña villa. La puerta estaba abierta.",
						"vietnamese": "Cuối con hẻm, một căn biệt thự nhỏ. Cửa đang mở.",
						"thai": "สุดตรอกมีบ้านหลังเล็กๆ ประตูเปิดอยู่",
						"hindi": "गली के अंत में, एक छोटा विला। दरवाजा खुला हुआ था।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "direction",
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "luna"
				},
				{
					"speaker": "luna",
					"emotion": "happy",
					"content": {
						"korean": "오랜만이야. 그때 진짜 재밌었지?",
						"english": "Long time no see. We had a really good time back then, didn't we?",
						"japanese": "久しぶり。あの時、本当に楽しかったね？",
						"chinese": "好久不见。那时真的很有趣，对吧？",
						"french": "Ça fait longtemps. C'était vraiment amusant à l'époque, non ?",
						"spanish": "Cuánto tiempo. Nos lo pasamos muy bien entonces, ¿verdad?",
						"vietnamese": "Lâu rồi không gặp. Lúc đó vui thật nhỉ?",
						"thai": "ไม่ได้เจอกันนานเลยนะ ตอนนั้นสนุกมากเลยใช่ไหม?",
						"hindi": "बहुत समय हो गया। उस समय सच में बहुत मज़ा आया था, है ना?"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…루나?",
						"english": "...Luna?",
						"japanese": "…ルナ？",
						"chinese": "…露娜？",
						"french": "...Luna ?",
						"spanish": "...¿Luna?",
						"vietnamese": "...Luna?",
						"thai": "...ลูน่า?",
						"hindi": "...लूना?"
					}
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "시간은 과거의 한 순간에 멈춰 있었다.",
						"english": "Time had stopped at a moment in the past.",
						"japanese": "時間は過去の一瞬に止まっていた。",
						"chinese": "时间停在了过去的一个瞬间。",
						"french": "Le temps s'était arrêté à un instant du passé.",
						"spanish": "El tiempo se había detenido en un instante del pasado.",
						"vietnamese": "Thời gian đã ngừng lại ở một khoảnh khắc trong quá khứ.",
						"thai": "เวลายังคงหยุดนิ่งอยู่ในช่วงเวลาหนึ่งของอดีต",
						"hindi": "समय अतीत के एक पल में थम गया था।"
					},
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "luna"
				},
				{
					"content": {
						"korean": "이번엔 우리가 이겼어! 정말 재밌었지?",
						"english": "We won this time! That was really fun, wasn't it?",
						"japanese": "今度は私たちが勝ったよ！本当に楽しかったね？",
						"chinese": "这次我们赢了！真的很有趣，对吧？",
						"french": "Cette fois, nous avons gagné ! C'était vraiment amusant, non ?",
						"spanish": "¡Esta vez ganamos! Fue muy divertido, ¿verdad?",
						"vietnamese": "Lần này chúng ta thắng rồi! Vui thật nhỉ?",
						"thai": "ครั้งนี้เราชนะแล้ว! สนุกมากเลยใช่ไหม?",
						"hindi": "इस बार हम जीत गए! सच में बहुत मज़ा आया था, है ना?"
					},
					"type": "speech",
					"speaker": "luna",
					"emotion": "happy"
				},
				{
					"content": {
						"korean": "이 장면… 아까도…",
						"english": "This scene... just like before...",
						"japanese": "この場面…さっきも…",
						"chinese": "这个场景…刚才也…",
						"french": "Cette scène... tout comme avant...",
						"spanish": "Esta escena... como antes...",
						"vietnamese": "Cảnh này... vừa nãy cũng...",
						"thai": "ฉากนี้...เมื่อกี้ก็...",
						"hindi": "यह दृश्य... अभी भी..."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"speaker": "luna",
					"emotion": "happy",
					"content": {
						"korean": "왜? 계속 이렇게 행복하게 놀자.",
						"english": "Why? Let's keep playing happily like this.",
						"japanese": "どうして？ずっとこうして楽しく遊ぼうよ。",
						"chinese": "为什么？我们继续这样开心地玩吧。",
						"french": "Pourquoi ? Continuons à jouer joyeusement comme ça.",
						"spanish": "¿Por qué? Sigamos jugando felices así.",
						"vietnamese": "Sao vậy? Cứ tiếp tục chơi vui vẻ như thế này đi.",
						"thai": "ทำไมล่ะ? มาสนุกกันแบบนี้ต่อไปเรื่อยๆ เถอะ",
						"hindi": "क्यों? चलो ऐसे ही खुशी-खुशी खेलते रहें।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "…이건 아니야.",
						"english": "...This isn't right.",
						"japanese": "…これは違う。",
						"chinese": "…这不是真的。",
						"french": "...Ce n'est pas ça.",
						"spanish": "...Esto no está bien.",
						"vietnamese": "...Không phải thế này.",
						"thai": "...นี่มันไม่ใช่",
						"hindi": "...यह सही नहीं है।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "luna",
					"type": "direction",
					"spot": [
						4,
						2
					]
				},
				{
					"speaker": "luna",
					"emotion": "base",
					"content": {
						"korean": "아, 그때 진짜 아쉬웠어. 다음엔 꼭 이길 거야!",
						"english": "Ah, that was a real shame back then. I'll definitely win next time!",
						"japanese": "ああ、あの時は本当に残念だったな。次は絶対勝つぞ！",
						"chinese": "啊，那时真可惜。下次我一定要赢！",
						"french": "Ah, c'était vraiment dommage à l'époque. Je gagnerai la prochaine fois à coup sûr !",
						"spanish": "Ah, qué lástima entonces. ¡La próxima vez seguro que gano!",
						"vietnamese": "À, lúc đó tiếc thật. Lần tới nhất định sẽ thắng!",
						"thai": "อา, ตอนนั้นน่าเสียดายจริงๆ ครั้งหน้าจะชนะให้ได้เลย!",
						"hindi": "ओह, तब बहुत अफसोस हुआ था। अगली बार मैं ज़रूर जीतूँगा!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "다음에? 언제 말이야?",
						"english": "Next time? When is that?",
						"japanese": "次？いつのこと？",
						"chinese": "下次？什么时候？",
						"french": "La prochaine fois ? Quand ça ?",
						"spanish": "¿La próxima vez? ¿Cuándo?",
						"vietnamese": "Lần tới ư? Khi nào chứ?",
						"thai": "ครั้งหน้าเหรอ? เมื่อไหร่ล่ะ?",
						"hindi": "अगली बार? कब?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "모든 대화는 끝없이 반복되는 과거의 환상이었다.",
						"english": "All conversations were endless, repeating illusions of the past.",
						"japanese": "全ての会話は、終わりなく繰り返される過去の幻だった。",
						"chinese": "所有的对话都是无尽重复的过去幻象。",
						"french": "Toutes les conversations étaient des illusions sans fin, se répétant du passé.",
						"spanish": "Todas las conversaciones eran ilusiones interminables, repeticiones del pasado.",
						"vietnamese": "Mọi cuộc đối thoại đều là ảo ảnh quá khứ lặp lại không ngừng.",
						"thai": "บทสนทนาทั้งหมดคือภาพหลอนในอดีตที่ซ้ำซากไม่รู้จบ",
						"hindi": "सभी वार्तालाप अतीत के अंतहीन, दोहराते हुए भ्रम थे।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "이대로는… 안 돼.",
						"english": "Not like this… I can't.",
						"japanese": "このままでは… ダメだ。",
						"chinese": "这样下去… 不行。",
						"french": "Pas comme ça… Ça ne peut pas continuer.",
						"spanish": "Así no… No puede ser.",
						"vietnamese": "Cứ thế này… không được đâu.",
						"thai": "แบบนี้… ไม่ได้",
						"hindi": "ऐसे नहीं… यह नहीं हो सकता।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "luna",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						2
					]
				},
				{
					"speaker": "luna",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…이번엔 다를 거야. 그렇지?",
						"english": "…This time it'll be different. Right?",
						"japanese": "…今度は違うはずだ。そうだろ？",
						"chinese": "…这次会不同的。对吧？",
						"french": "…Cette fois, ce sera différent. N'est-ce pas ?",
						"spanish": "…Esta vez será diferente. ¿Verdad?",
						"vietnamese": "…Lần này sẽ khác thôi. Đúng không?",
						"thai": "…ครั้งนี้มันจะแตกต่าง ใช่ไหม?",
						"hindi": "…इस बार यह अलग होगा। है ना?"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "아니. 항상 똑같았어. 끝은.",
						"english": "No. It was always the same. The end.",
						"japanese": "いや。いつも同じだった。終わりは。",
						"chinese": "不。结局总是相同的。",
						"french": "Non. C'était toujours pareil. La fin.",
						"spanish": "No. Siempre fue lo mismo. El final.",
						"vietnamese": "Không. Luôn luôn giống nhau. Kết thúc.",
						"thai": "ไม่. มันเหมือนเดิมเสมอ. จุดจบ.",
						"hindi": "नहीं। यह हमेशा एक जैसा था। अंत।"
					}
				},
				{
					"speaker": "luna",
					"emotion": "angry",
					"content": {
						"korean": "아니야! 이번엔 달라야만 해!",
						"english": "No! This time it has to be different!",
						"japanese": "違う！今度は違うはずだ！",
						"chinese": "不是！这次必须不同！",
						"french": "Non ! Cette fois, ça doit être différent !",
						"spanish": "¡No! ¡Esta vez tiene que ser diferente!",
						"vietnamese": "Không! Lần này phải khác!",
						"thai": "ไม่! ครั้งนี้ต้องต่างไปจากเดิม!",
						"hindi": "नहीं! इस बार इसे अलग होना ही होगा!"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이 빌라에 갇힌 건… 루나가 아니야. 기억이야.",
						"english": "What's trapped in this villa isn't… Luna. It's memories.",
						"japanese": "このヴィラに囚われているのは… ルナじゃない。記憶だ。",
						"chinese": "被困在这栋别墅里的… 不是露娜。是记忆。",
						"french": "Ce qui est piégé dans cette villa n'est pas… Luna. Ce sont des souvenirs.",
						"spanish": "Lo que está atrapado en esta villa no es… Luna. Son recuerdos.",
						"vietnamese": "Thứ bị mắc kẹt trong căn biệt thự này không phải là… Luna. Mà là ký ức.",
						"thai": "สิ่งที่ติดอยู่ในวิลล่านี้ไม่ใช่… ลูน่า. มันคือความทรงจำ.",
						"hindi": "इस विला में जो फंसा है वह… लूना नहीं है। यह यादें हैं।"
					}
				}
			]
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "아니… 이건… 끝이 아니야. 다시 시작될 거야… 이번엔… 다를 거야…",
						"english": "No... this... isn't the end. It'll start again... This time... it'll be different...",
						"japanese": "いや…これは…終わりじゃない。また始まるんだ…今度は…違うだろう…",
						"chinese": "不…这…这不是结束。它会再次开始…这次…会不同的…",
						"french": "Non… ce… n'est pas la fin. Ça recommencera… Cette fois… ce sera différent…",
						"spanish": "No… esto… no es el final. Volverá a empezar… Esta vez… será diferente…",
						"vietnamese": "Không… đây… không phải là kết thúc. Nó sẽ lại bắt đầu… Lần này… sẽ khác…",
						"thai": "ไม่…นี่…ไม่ใช่จุดจบ มันจะเริ่มต้นใหม่อีกครั้ง…คราวนี้…มันจะต่างออกไป…",
						"hindi": "नहीं… यह… अंत नहीं है। यह फिर से शुरू होगा… इस बार… अलग होगा…"
					},
					"speaker": "boss",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "끝났어. 이제 그만.",
						"english": "It's over. Stop.",
						"japanese": "終わった。もうやめろ。",
						"chinese": "结束了。到此为止。",
						"french": "C'est fini. Arrête maintenant.",
						"spanish": "Se acabó. Basta ya.",
						"vietnamese": "Hết rồi. Dừng lại đi.",
						"thai": "จบแล้ว พอได้แล้ว",
						"hindi": "ख़त्म हो गया। बस अब।"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "거대한 형체는 빛바랜 사진들로 흩어졌다. 끊임없이 반복되던 음성 메시지는 멈췄다.",
						"english": "The massive form scattered into faded photographs. The endlessly looping voice message stopped.",
						"japanese": "巨大な姿は色褪せた写真へと散った。絶えず繰り返されていた音声メッセージは止まった。",
						"chinese": "巨大的形体散成了褪色的照片。不断重复的语音留言停止了。",
						"french": "La forme gigantesque se dispersa en photos passées. Le message vocal en boucle infinie s'arrêta.",
						"spanish": "La forma gigantesca se dispersó en fotografías descoloridas. El mensaje de voz que se repetía sin cesar se detuvo.",
						"vietnamese": "Hình thể khổng lồ tan thành những bức ảnh phai màu. Tin nhắn thoại lặp đi lặp lại không ngừng đã dừng lại.",
						"thai": "ร่างขนาดมหึมาสลายกลายเป็นภาพถ่ายซีดจาง ข้อความเสียงที่เล่นซ้ำไม่หยุดได้หยุดลงแล้ว",
						"hindi": "विशाल आकृति फीकी पड़ चुकी तस्वीरों में बिखर गई। लगातार दोहराया जा रहा वॉइस मैसेज रुक गया।"
					}
				},
				{
					"speaker": "narrator",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "루나는… 사라졌다. 아니, 원래 없었던 걸까.",
						"english": "Luna... vanished. Or perhaps, was she never there to begin with?",
						"japanese": "ルナは…消えた。いや、元々いなかったのか。",
						"chinese": "露娜…消失了。不，或许她从未存在过？",
						"french": "Luna… a disparu. Non, n'aurait-elle jamais existé ?",
						"spanish": "Luna… desapareció. ¿O tal vez nunca estuvo allí?",
						"vietnamese": "Luna… biến mất. Hay là, vốn dĩ cô ấy chưa từng tồn tại?",
						"thai": "ลูน่า…หายไปแล้ว หรือว่าจริงๆ แล้ว เธอไม่เคยมีอยู่ตั้งแต่แรกกันนะ?",
						"hindi": "लूना… गायब हो गई। नहीं, क्या वह कभी थी ही नहीं?"
					}
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "동네는 침묵했다. 더 이상 누구도 과거에 머무르지 않는다.",
						"english": "The town fell silent. No one dwells in the past anymore.",
						"japanese": "町は静まり返った。もう誰も過去に留まらない。",
						"chinese": "小镇陷入了沉寂。再也没有人停留在过去。",
						"french": "Le quartier se tut. Plus personne ne demeure dans le passé.",
						"spanish": "El pueblo quedó en silencio. Ya nadie se aferra al pasado.",
						"vietnamese": "Thị trấn chìm vào im lặng. Không còn ai sống mãi trong quá khứ nữa.",
						"thai": "เมืองตกอยู่ในความเงียบงัน ไม่มีใครจมปลักอยู่กับอดีตอีกต่อไป",
						"hindi": "कस्बा शांत हो गया। अब कोई भी अतीत में नहीं रहता।"
					},
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "사방의 사진과 음성 메시지가 떠올라 거대한 형체가 되었다. 따뜻하지만, 어딘가 어긋난.",
						"english": "Photos and voice messages from all sides emerged, forming a giant figure. Warm, yet somehow distorted.",
						"japanese": "四方の写真と音声メッセージが浮かび上がり、巨大な姿となった。温かいが、どこか歪んだ。",
						"chinese": "四周的照片和语音信息浮现，形成了一个巨大的身影。温暖，却又有些扭曲。",
						"french": "Des photos et des messages vocaux de toutes parts ont émergé, formant une silhouette géante. Chaleureuse, mais quelque peu distordue.",
						"spanish": "Fotos y mensajes de voz de todas partes emergieron, formando una figura gigante. Cálida, pero de alguna manera distorsionada.",
						"vietnamese": "Ảnh và tin nhắn thoại từ khắp nơi hiện ra, tạo thành một hình thù khổng lồ. Ấm áp, nhưng lại méo mó ở đâu đó.",
						"thai": "รูปภาพและข้อความเสียงจากทุกทิศทุกทางปรากฏขึ้น ก่อตัวเป็นรูปร่างขนาดใหญ่. อบอุ่น แต่บิดเบี้ยวไปบ้าง",
						"hindi": "चारों ओर से तस्वीरें और वॉयस मैसेज उभर कर एक विशाल आकृति बन गए। गर्म, फिर भी कहीं-कहीं विकृत।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "그때로 돌아가면… 괜찮을 것 같지 않아?",
						"english": "If we go back to that time… wouldn't it be okay?",
						"japanese": "あの頃に戻れば… 大丈夫な気がしない？",
						"chinese": "如果回到那时候… 不会就好了吗？",
						"french": "Si on retournait à cette époque… ça irait, non ?",
						"spanish": "Si volviéramos a ese momento… ¿no estaría bien?",
						"vietnamese": "Nếu quay về thời điểm đó… không phải sẽ ổn sao?",
						"thai": "ถ้าเราย้อนกลับไปตอนนั้น… มันจะไม่เป็นไรหรอ?",
						"hindi": "अगर हम उस समय वापस जाते हैं… क्या यह ठीक नहीं होगा?"
					},
					"type": "speech",
					"speaker": "boss",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "…당신이 이 모든 것을 붙잡고 있었군.",
						"english": "…So you've been holding onto all of this.",
						"japanese": "…あなたがこの全てを掴んでいたのか。",
						"chinese": "…原来你一直抓住这一切。",
						"french": "…C'est donc vous qui reteniez tout cela.",
						"spanish": "…Así que tú estabas aferrándote a todo esto.",
						"vietnamese": "…Thì ra bạn đã giữ chặt tất cả những điều này.",
						"thai": "…คุณเป็นคนยึดติดกับทั้งหมดนี้สินะ",
						"hindi": "…तो तुम ही यह सब पकड़े हुए थे।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "가둔 게 아니야. 행복한 기억 속에 머무르게 한 거지.",
						"english": "I didn't trap them. I let them stay in happy memories.",
						"japanese": "閉じ込めたんじゃない。幸せな記憶の中に留まらせたんだ。",
						"chinese": "我没有困住他们。我只是让他们停留在幸福的记忆里。",
						"french": "Je ne les ai pas piégés. Je les ai laissés dans des souvenirs heureux.",
						"spanish": "No los encerré. Los dejé quedarse en recuerdos felices.",
						"vietnamese": "Tôi không giam giữ họ. Tôi chỉ cho phép họ ở lại trong những ký ức hạnh phúc.",
						"thai": "ฉันไม่ได้ขังพวกเขาไว้. ฉันแค่ให้พวกเขาอยู่ในความทรงจำที่มีความสุข.",
						"hindi": "मैंने उन्हें फंसाया नहीं। मैंने उन्हें खुशहाल यादों में रहने दिया।"
					},
					"type": "speech",
					"speaker": "boss",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "그건 가짜 행복이야. 박제된 과거일 뿐.",
						"english": "That's false happiness. Just a preserved past.",
						"japanese": "それは偽りの幸福だ。剥製にされた過去でしかない。",
						"chinese": "那是虚假的幸福。不过是定格的过去。",
						"french": "C'est un faux bonheur. Juste un passé embaumé.",
						"spanish": "Es una falsa felicidad. Solo un pasado embalsamado.",
						"vietnamese": "Đó là hạnh phúc giả dối. Chỉ là một quá khứ bị đóng băng.",
						"thai": "นั่นคือความสุขปลอมๆ เป็นแค่อดีตที่ถูกสตัฟฟ์ไว้",
						"hindi": "वह झूठी खुशी है। बस एक रुका हुआ अतीत।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"speaker": "boss",
					"emotion": "base",
					"content": {
						"korean": "아니. 이곳이 진실이야. 너희도 곧 알게 될 거야.",
						"english": "No. This place is the truth. You'll all know soon.",
						"japanese": "違う。ここが真実だ。お前たちもすぐわかるだろう。",
						"chinese": "不。这里才是真相。你们很快就会明白的。",
						"french": "Non. Cet endroit est la vérité. Vous le saurez bientôt.",
						"spanish": "No. Este lugar es la verdad. Pronto lo sabrán.",
						"vietnamese": "Không. Nơi đây mới là sự thật. Các ngươi cũng sẽ sớm biết thôi.",
						"thai": "ไม่สิ ที่นี่คือความจริง พวกนายจะรู้ในไม่ช้า",
						"hindi": "नहीं। यही सच है। तुम भी जल्द ही जान जाओगे।"
					},
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "boss",
					"emotion": "base",
					"content": {
						"korean": "항상 같았잖아. 너희는 날 이길 수 없어. 다시 시작될 거야.",
						"english": "It's always been the same. You can't defeat me. It'll start again.",
						"japanese": "いつも同じだったじゃないか。お前たちは俺に勝てない。また始まるんだ。",
						"chinese": "一直都是这样。你们赢不了我。它会再次开始。",
						"french": "Ça a toujours été pareil. Vous ne pouvez pas me vaincre. Ça recommencera.",
						"spanish": "Siempre ha sido igual. No pueden vencerme. Volverá a empezar.",
						"vietnamese": "Luôn luôn là như vậy mà. Các ngươi không thể thắng ta. Nó sẽ lại bắt đầu thôi.",
						"thai": "มันก็เหมือนเดิมตลอดนั่นแหละ พวกนายเอาชนะฉันไม่ได้หรอก มันจะเริ่มต้นใหม่อีกครั้ง",
						"hindi": "हमेशा से ऐसा ही रहा है। तुम मुझे हरा नहीं सकते। यह फिर से शुरू होगा।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "…아니. 이번엔 다를 거야.",
						"english": "...No. This time it'll be different.",
						"japanese": "…いや。今度は違うだろう。",
						"chinese": "…不。这次会不同的。",
						"french": "…Non. Cette fois, ce sera différent.",
						"spanish": "…No. Esta vez será diferente.",
						"vietnamese": "…Không. Lần này sẽ khác.",
						"thai": "…ไม่ คราวนี้มันจะต่างออกไป",
						"hindi": "…नहीं। इस बार यह अलग होगा।"
					}
				}
			],
			"id": 15
		}
	],
	"epilogue": {
		"korean": [
			"빌라의 문이 닫혔다. 정지했던 시간은 다시 흐르기 시작했다.",
			"빛바랜 사진들은 바닥에 떨어져 흩어졌다. 끊어진 인연의 조각들처럼.",
			"루나는 돌아오지 않았다. 애초에 존재하지 않았던 것처럼.",
			"모든 것은 끝났을까? 아니, 어쩌면 진정한 시작이었을지도 모른다.",
			"낡은 동네는 더 이상 아무것도 붙잡지 않았다."
		],
		"english": [
			"The villa door closed. Time, once paused, began to flow again.",
			"Faded photos fell to the floor and scattered. Like fragments of broken ties.",
			"Luna never returned. As if she had never existed.",
			"Was everything over? No, perhaps it was the true beginning.",
			"The old neighborhood no longer held onto anything."
		],
		"japanese": [
			"ヴィラの扉が閉まった。止まっていた時間は再び流れ始めた。",
			"色褪せた写真が床に落ちて散らばった。まるで途切れた縁の破片のように。",
			"ルナは戻らなかった。まるで最初から存在しなかったかのように。",
			"全ては終わったのだろうか？いや、もしかしたら本当の始まりだったのかもしれない。",
			"古びた町は、もう何も捉えていなかった。"
		],
		"chinese": [
			"别墅的门关上了。静止的时间再次流动。",
			"褪色的照片散落在地板上。如同断裂缘分的碎片。",
			"露娜没有回来。仿佛她从未存在过。",
			"一切都结束了吗？不，或许那才是真正的开始。",
			"老旧的街区不再留存任何东西。"
		],
		"french": [
			"La porte de la villa se referma. Le temps, autrefois suspendu, recommença à s'écouler.",
			"Des photos jaunies tombèrent au sol et se dispersèrent. Comme des fragments de liens brisés.",
			"Luna ne revint pas. Comme si elle n'avait jamais existé.",
			"Tout était-il fini ? Non, peut-être était-ce le véritable début.",
			"Le vieux quartier ne retenait plus rien."
		],
		"spanish": [
			"La puerta de la villa se cerró. El tiempo, antes detenido, volvió a fluir.",
			"Fotos descoloridas cayeron al suelo y se dispersaron. Como fragmentos de lazos rotos.",
			"Luna nunca regresó. Como si nunca hubiera existido.",
			"¿Había terminado todo? No, quizás fue el verdadero comienzo.",
			"El viejo barrio ya no se aferraba a nada."
		],
		"vietnamese": [
			"Cánh cửa biệt thự khép lại. Thời gian đã ngừng lại bắt đầu chảy trôi trở lại.",
			"Những bức ảnh phai màu rơi xuống sàn và tản mát. Như những mảnh vỡ của duyên phận đã đứt.",
			"Luna không trở lại. Cứ như thể cô ấy chưa từng tồn tại.",
			"Mọi thứ đã kết thúc chưa? Không, có lẽ đó mới là sự khởi đầu thực sự.",
			"Khu phố cũ không còn giữ lại bất cứ điều gì."
		],
		"thai": [
			"ประตูวิลล่าปิดลง เวลาที่หยุดนิ่งเริ่มไหลอีกครั้ง",
			"รูปถ่ายสีซีดหล่นกระจัดกระจายบนพื้น ดุจเศษเสี้ยวความผูกพันที่ขาดสะบั้น",
			"ลูน่าไม่กลับมา ราวกับเธอไม่เคยมีตัวตน",
			"ทุกสิ่งจบลงแล้วหรือ? ไม่สิ บางทีนี่อาจเป็นการเริ่มต้นที่แท้จริง",
			"ย่านเก่าแก่ไม่ได้ยึดเหนี่ยวอะไรไว้อีกต่อไปแล้ว"
		],
		"hindi": [
			"विला का दरवाज़ा बंद हो गया। रुका हुआ समय फिर से बहने लगा।",
			"फीकी तस्वीरें फर्श पर गिरकर बिखर गईं। जैसे टूटे रिश्तों के टुकड़े।",
			"लूना कभी नहीं लौटी। मानो वह कभी अस्तित्व में ही न थी।",
			"क्या सब खत्म हो गया था? नहीं, शायद यह एक सच्ची शुरुआत थी।",
			"पुराना मोहल्ला अब कुछ भी नहीं पकड़े हुए था।"
		]
	},
	"prologue": {
		"korean": [
			"골목 끝, 낡은 빌라. 문은 늘 열려 있었다.",
			"그 안에는 한 사람의 모든 기억이 박제되어 있었다.",
			"다정한 미소, 반복되는 순간들.",
			"그는 속삭였다. \"이번엔 다를 거야.\"",
			"하지만 우리는 알았다. 항상 같았다는 걸."
		],
		"english": [
			"At the end of the alley, an old villa. The door was always open.",
			"Inside, a person's every memory was preserved.",
			"Gentle smiles, recurring moments.",
			"He whispered, \"This time, it'll be different.\"",
			"But we knew. It was always the same."
		],
		"japanese": [
			"路地の奥、古びたヴィラ。扉はいつも開いていた。",
			"その中には、ある人物のあらゆる記憶が剥製のように保存されていた。",
			"優しい微笑み、繰り返される瞬間。",
			"彼は囁いた。「今度は違うだろう。」",
			"しかし、我々は知っていた。いつも同じだったことを。"
		],
		"chinese": [
			"巷子尽头，一栋老旧的别墅。门总是开着。",
			"里面，一个人的所有记忆都被定格。",
			"温柔的微笑，重复的瞬间。",
			"他低语道：“这次会不同。”",
			"但我们知道。总是千篇一律。"
		],
		"french": [
			"Au bout de l'allée, une vieille villa. La porte était toujours ouverte.",
			"À l'intérieur, chaque souvenir d'une personne était embaumé.",
			"Des sourires doux, des moments récurrents.",
			"Il murmura : « Cette fois, ce sera différent. »",
			"Mais nous savions. C'était toujours pareil."
		],
		"spanish": [
			"Al final del callejón, una vieja villa. La puerta siempre estaba abierta.",
			"Dentro, cada recuerdo de una persona estaba disecado.",
			"Sonrisas amables, momentos repetidos.",
			"Él susurró: \"Esta vez, será diferente.\"",
			"Pero sabíamos. Siempre fue lo mismo."
		],
		"vietnamese": [
			"Cuối con hẻm, một căn biệt thự cũ. Cánh cửa luôn rộng mở.",
			"Bên trong, mọi ký ức của một người đều được lưu giữ.",
			"Nụ cười dịu dàng, những khoảnh khắc lặp lại.",
			"Anh thì thầm: \"Lần này, sẽ khác thôi.\"",
			"Nhưng chúng tôi biết. Luôn luôn như vậy."
		],
		"thai": [
			"สุดซอยมีวิลล่าเก่า ประตูเปิดอยู่เสมอ",
			"ข้างในนั้น ความทรงจำทั้งหมดของคนคนหนึ่งถูกเก็บรักษาไว้",
			"รอยยิ้มอ่อนโยน ช่วงเวลาที่ย้ำวน",
			"เขากระซิบว่า \"ครั้งนี้จะต่างไป\"",
			"แต่เรารู้ว่ามันเหมือนเดิมเสมอ"
		],
		"hindi": [
			"गली के अंत में, एक पुराना विला। दरवाज़ा हमेशा खुला रहता था।",
			"उसके अंदर, एक व्यक्ति की हर याद सुरक्षित थी।",
			"मधुर मुस्कानें, दोहराए जाने वाले पल।",
			"उसने फुसफुसाया, \"इस बार, यह अलग होगा।\"",
			"लेकिन हम जानते थे। यह हमेशा एक जैसा था।"
		]
	}
} as const;
