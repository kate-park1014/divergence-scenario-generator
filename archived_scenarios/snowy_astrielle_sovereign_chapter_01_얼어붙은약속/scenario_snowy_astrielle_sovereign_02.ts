export const scenario_snowy_astrielle_sovereign_02 = {
	"scenario_id": "snowy_astrielle_sovereign_02",
	"order": 2,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"Astri": {
			"id": "actor_10",
			"name": {
				"korean": "아스트리",
				"english": "Astri",
				"japanese": "アストリ",
				"chinese": "阿斯特里",
				"french": "Astri",
				"spanish": "Astri",
				"vietnamese": "Astri",
				"thai": "อ스트리",
				"hindi": "अस्त्री"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/0496af1b-19c2-43b2-c579-38a283320a00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/537f5bb2-fba9-4781-36fc-489213dbff00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"차가운 진실이 기다린다.",
			"얼음 그 자체가 잊힌 기억들을 속삭였다.",
			"그녀는 도망쳤다고 생각했다.",
			"그러나 과거는 늘 제자리를 찾아온다."
		],
		"english": [
			"A cold truth awaits.",
			"The ice itself whispered forgotten memories.",
			"She thought she had escaped.",
			"But the past always finds its way back."
		],
		"japanese": [
			"冷たい真実が待っている。",
			"氷そのものが忘れられた記憶を囁いた。",
			"彼女は逃げ出したと思っていた。",
			"しかし、過去は常に元の場所に戻る。"
		],
		"chinese": [
			"冰冷的真相等待着。",
			"冰本身低语着被遗忘的记忆。",
			"她以为自己逃脱了。",
			"然而，过去总是会回到原点。"
		],
		"french": [
			"Une froide vérité attend.",
			"La glace elle-même murmurait des souvenirs oubliés.",
			"Elle pensait s'être échappée.",
			"Mais le passé retrouve toujours son chemin."
		],
		"spanish": [
			"Una fría verdad aguarda.",
			"El hielo mismo susurraba recuerdos olvidados.",
			"Ella pensó que había escapado.",
			"Pero el pasado siempre regresa."
		],
		"vietnamese": [
			"Một sự thật lạnh lẽo đang chờ đợi.",
			"Bản thân băng đá thì thầm những ký ức bị lãng quên.",
			"Cô ấy nghĩ mình đã trốn thoát.",
			"Nhưng quá khứ luôn tìm về."
		],
		"thai": [
			"ความจริงอันเยือกเย็นกำลังรออยู่",
			"น้ำแข็งกระซิบความทรงจำที่ถูกลืมเลือน",
			"เธอคิดว่าเธอหนีรอดแล้ว",
			"แต่ในที่สุดอดีตก็หวนคืนมาเสมอ"
		],
		"hindi": [
			"एक कड़वी सच्चाई इंतज़ार कर रही है।",
			"बर्फीली हवा ने भूली हुई यादें फुसफुसाईं।",
			"उसने सोचा कि वह भाग निकली थी।",
			"लेकिन अतीत हमेशा अपना रास्ता खोज लेता है।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "성은 안으로 들어갈수록 더욱 깊은 한기를 품고 있었다.",
						"english": "The deeper one ventured into the castle, the colder it became.",
						"japanese": "城の奥へ進むほど、さらに深い冷気が漂っていた。",
						"chinese": "城堡越往深处，寒意越浓。",
						"french": "Plus on s'enfonçait dans le château, plus la froideur s'intensifiait.",
						"spanish": "Cuanto más se adentraba uno en el castillo, más profundo era el frío.",
						"vietnamese": "Càng vào sâu trong lâu đài, càng cảm thấy lạnh lẽo hơn.",
						"thai": "ยิ่งลึกเข้าไปในปราสาทเท่าไหร่ ความเยือกเย็นก็ยิ่งเพิ่มขึ้น",
						"hindi": "जैसे-जैसे किले के अंदर जाते गए, ठंडक और गहरी होती गई।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "몸이 얼어붙는 것 같아.",
						"english": "My body feels like it's freezing.",
						"japanese": "体が凍りつきそうだ。",
						"chinese": "身体好像要冻僵了。",
						"french": "Mon corps semble geler.",
						"spanish": "Siento que mi cuerpo se congela.",
						"vietnamese": "Cơ thể tôi như đóng băng vậy.",
						"thai": "ร่างกายฉันเหมือนจะแข็งเป็นน้ำแข็ง",
						"hindi": "मेरा शरीर जम रहा है।"
					}
				},
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "Astri",
					"spot": [
						4,
						2
					]
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…이상해. 낯설지 않아.",
						"english": "...Strange. It's not unfamiliar.",
						"japanese": "…おかしい。見覚えがある。",
						"chinese": "……奇怪。并不陌生。",
						"french": "...Étrange. Ce n'est pas inconnu.",
						"spanish": "...Extraño. No me es desconocido.",
						"vietnamese": "...Lạ thật. Không hề xa lạ.",
						"thai": "...แปลกจัง ไม่คุ้นเคยเลย",
						"hindi": "…अजीब है। यह अनजाना नहीं है।"
					},
					"speaker": "Astri",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "아스트리, 괜찮아?",
						"english": "Astri, are you alright?",
						"japanese": "アストリ、大丈夫？",
						"chinese": "阿斯特里，你还好吗？",
						"french": "Astri, ça va ?",
						"spanish": "Astri, ¿estás bien?",
						"vietnamese": "Astri, cậu có sao không?",
						"thai": "แอสตรี เธอโอเคไหม?",
						"hindi": "एस्ट्रि, तुम ठीक हो?"
					}
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"speaker": "Astri",
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "복도 벽에 찢어진 천 조각이 얼어붙어 있었다.",
						"english": "A torn piece of cloth was frozen to the corridor wall.",
						"japanese": "廊下の壁に破れた布の切れ端が凍りついていた。",
						"chinese": "走廊的墙壁上，一块撕裂的布条冻结着。",
						"french": "Un morceau de tissu déchiré était gelé sur le mur du couloir.",
						"spanish": "Un trozo de tela desgarrada estaba congelado en la pared del pasillo.",
						"vietnamese": "Một mảnh vải rách đã đóng băng trên tường hành lang.",
						"thai": "ผ้าที่ฉีกขาดชิ้นหนึ่งแข็งติดอยู่กับผนังทางเดิน",
						"hindi": "गलियारे की दीवार पर एक फटा हुआ कपड़े का टुकड़ा जमा हुआ था।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이건… 옷 조각인가?",
						"english": "Is this... a piece of clothing?",
						"japanese": "これ…服の切れ端かな？",
						"chinese": "这是……衣服碎片吗？",
						"french": "C'est... un morceau de vêtement ?",
						"spanish": "¿Esto es... un trozo de ropa?",
						"vietnamese": "Đây là... một mảnh quần áo ư?",
						"thai": "นี่มัน… ชิ้นส่วนเสื้อผ้าเหรอ?",
						"hindi": "क्या यह… कपड़े का टुकड़ा है?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "Astri",
					"content": {
						"korean": "…실습복.",
						"english": "...Lab coat.",
						"japanese": "…実習着。",
						"chinese": "…实验服。",
						"french": "...Blouse de laboratoire.",
						"spanish": "...Bata de laboratorio.",
						"vietnamese": "...Áo thực hành.",
						"thai": "...ชุดฝึกงาน.",
						"hindi": "...प्रैक्टिस ड्रेस।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "Astri",
					"content": {
						"korean": "내 거야. 그날, 찢겨 나갔던.",
						"english": "It's mine. Torn that day.",
						"japanese": "私のよ。あの日に、引き裂かれた。",
						"chinese": "我的。那天被撕破的。",
						"french": "C'est la mienne. Celle déchirée ce jour-là.",
						"spanish": "Es mía. La que se rompió ese día.",
						"vietnamese": "Của tôi. Bị xé nát hôm đó.",
						"thai": "ของฉันเอง. ที่ขาดไปวันนั้น.",
						"hindi": "यह मेरा है। उस दिन फटा हुआ।"
					},
					"emotion": "sad",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "Astri",
					"spot": [
						4,
						2
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "아스트리, 네 거라고?",
						"english": "Astry, yours?",
						"japanese": "アストリ、君のって？",
						"chinese": "阿斯特里，你的？",
						"french": "Astry, c'est à toi ?",
						"spanish": "¿Astry, es tuyo?",
						"vietnamese": "Astry, của cậu sao?",
						"thai": "แอสทรี, ของเธองั้นเหรอ?",
						"hindi": "एस्ट्रि, तुम्हारा है?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "Astri",
					"emotion": "sad",
					"content": {
						"korean": "…누군가 이걸 주워왔어.",
						"english": "...Someone picked this up.",
						"japanese": "…誰かがこれを拾ってきた。",
						"chinese": "…有人捡到了这个。",
						"french": "...Quelqu'un a ramassé ça.",
						"spanish": "...Alguien recogió esto.",
						"vietnamese": "...Ai đó đã nhặt cái này.",
						"thai": "...มีใครบางคนเก็บสิ่งนี้มา.",
						"hindi": "...किसी ने इसे उठाया।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "일부러 여기에?",
						"english": "Here on purpose?",
						"japanese": "わざとここに？",
						"chinese": "故意放在这里？",
						"french": "Exprès ici ?",
						"spanish": "¿Aquí a propósito?",
						"vietnamese": "Cố tình để ở đây sao?",
						"thai": "จงใจวางไว้ที่นี่งั้นเหรอ?",
						"hindi": "जानबूझकर यहाँ?"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "잊지 말라고. 계속 보라고.",
						"english": "Don't forget. Keep looking.",
						"japanese": "忘れるなと。見続けろと。",
						"chinese": "别忘了。一直看着。",
						"french": "Pour ne pas oublier. Pour continuer à regarder.",
						"spanish": "Para no olvidar. Para que sigas viendo.",
						"vietnamese": "Để không quên. Để tiếp tục nhìn.",
						"thai": "อย่าลืมนะ. ให้เฝ้าดูต่อไป.",
						"hindi": "मत भूलो। देखते रहो।"
					},
					"speaker": "Astri"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"speaker": "Astri",
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아스트리의 손목에 작은 얼음 결정이 맺혔다.",
						"english": "Small ice crystals formed on Astry's wrist.",
						"japanese": "アストリの手首に小さな氷の結晶ができた。",
						"chinese": "阿斯特里的手腕上结出了一小片冰晶。",
						"french": "De petits cristaux de glace se formèrent sur le poignet d'Astry.",
						"spanish": "Pequeños cristales de hielo se formaron en la muñeca de Astry.",
						"vietnamese": "Những tinh thể băng nhỏ hình thành trên cổ tay Astry.",
						"thai": "ผลึกน้ำแข็งเล็กๆ ก่อตัวขึ้นที่ข้อมือของแอสทรี.",
						"hindi": "एस्ट्रि की कलाई पर छोटे बर्फ के क्रिस्टल बन गए।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "Astri",
					"emotion": "sad",
					"content": {
						"korean": "이 패턴… 사고가 나던 그날의.",
						"english": "This pattern... From the day of the accident.",
						"japanese": "このパターン… 事故が起きたあの日の。",
						"chinese": "这个图案… 是事故发生那天的。",
						"french": "Ce motif... Du jour de l'accident.",
						"spanish": "Este patrón... Del día del accidente.",
						"vietnamese": "Hoa văn này... Của ngày xảy ra tai nạn.",
						"thai": "รูปแบบนี้... จากวันที่เกิดอุบัติเหตุ.",
						"hindi": "यह पैटर्न... दुर्घटना के दिन का।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "아스트리, 괜찮아? 표정이 안 좋아.",
						"english": "Astry, are you okay? You look unwell.",
						"japanese": "アストリ、大丈夫？顔色が悪いよ。",
						"chinese": "阿斯特里，你还好吗？脸色不太好。",
						"french": "Astry, ça va ? Tu n'as pas bonne mine.",
						"spanish": "¿Astry, estás bien? No tienes buena cara.",
						"vietnamese": "Astry, cậu ổn không? Trông cậu không ổn.",
						"thai": "แอสทรี, เธอไม่เป็นไรนะ? ดูหน้าไม่ค่อยดีเลย.",
						"hindi": "एस्ट्रि, तुम ठीक हो? तुम्हारा चेहरा अच्छा नहीं लग रहा।"
					}
				},
				{
					"speaker": "Astri",
					"emotion": "base",
					"content": {
						"korean": "괜찮아. 그냥… 폭풍이 나한테만 오는 것 같아서.",
						"english": "I'm fine. It just feels like... the storm is only coming for me.",
						"japanese": "大丈夫。ただ…嵐が私だけに降りかかっているみたいで。",
						"chinese": "我没事。只是…感觉暴风雨只冲着我来了。",
						"french": "Je vais bien. C'est juste... que j'ai l'impression que la tempête ne vient que pour moi.",
						"spanish": "Estoy bien. Es solo que... siento que la tormenta viene solo por mí.",
						"vietnamese": "Tôi ổn. Chỉ là... cảm giác như bão tố chỉ đang đến với mình tôi.",
						"thai": "ฉันไม่เป็นไร. แค่รู้สึกเหมือน... พายุจะมาหาฉันคนเดียว.",
						"hindi": "मैं ठीक हूँ। बस... ऐसा लगता है जैसे तूफान सिर्फ मुझ पर आ रहा है।"
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "찾으러 왔는가. 잃어버린 과거를.",
						"english": "Have you come to seek it? Your lost past.",
						"japanese": "探しに来たのか。失われた過去を。",
						"chinese": "是来寻找吗？那失落的过去。",
						"french": "Es-tu venu le chercher ? Ton passé perdu.",
						"spanish": "¿Has venido a buscarlo? Tu pasado perdido.",
						"vietnamese": "Ngươi đến tìm à? Quá khứ đã mất.",
						"thai": "เจ้ามาตามหาหรือ? อดีตที่หายไปน่ะ",
						"hindi": "क्या तुम उसे ढूंढने आए हो? अपने खोए हुए अतीत को।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "누구냐, 너는.",
						"english": "Who are you?",
						"japanese": "貴様は誰だ。",
						"chinese": "你是谁？",
						"french": "Qui es-tu ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Ngươi là ai?",
						"thai": "เจ้าเป็นใคร?",
						"hindi": "तुम कौन हो?"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "나는 이 성의 일부. 버려진 것들을 지키는 자.",
						"english": "I am a part of this castle. A guardian of forgotten things.",
						"japanese": "私はこの城の一部。捨てられたものを守る者。",
						"chinese": "我是这座城堡的一部分。遗弃之物的守护者。",
						"french": "Je suis une partie de ce château. Le gardien des choses abandonnées.",
						"spanish": "Soy parte de este castillo. El guardián de lo olvidado.",
						"vietnamese": "Ta là một phần của lâu đài này. Kẻ canh giữ những gì bị bỏ quên.",
						"thai": "ข้าคือส่วนหนึ่งของปราสาทแห่งนี้ ผู้พิทักษ์สิ่งที่ถูกทอดทิ้ง",
						"hindi": "मैं इस महल का एक हिस्सा हूँ। परित्यक्त वस्तुओं का संरक्षक।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "네가 그걸 여기에 가져다 놓은 거야?",
						"english": "Did you bring it here?",
						"japanese": "お前がそれをここに置いたのか？",
						"chinese": "是你把它放在这里的吗？",
						"french": "C'est toi qui l'as apporté ici ?",
						"spanish": "¿Tú lo trajiste aquí?",
						"vietnamese": "Ngươi đã mang nó đến đây sao?",
						"thai": "เจ้าเป็นคนเอามันมาไว้ที่นี่หรือ?",
						"hindi": "क्या तुम इसे यहाँ लाए हो?"
					},
					"speaker": "Astri",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "sad",
					"content": {
						"korean": "그대가 잊지 않기를 바랐다. 그날의 진실을.",
						"english": "I hoped you wouldn't forget. The truth of that day.",
						"japanese": "貴方が忘れないことを願った。あの日の真実を。",
						"chinese": "我希望你不会忘记。那日的真相。",
						"french": "J'espérais que tu n'oublierais pas. La vérité de ce jour-là.",
						"spanish": "Esperaba que no lo olvidaras. La verdad de aquel día.",
						"vietnamese": "Ta hy vọng ngươi sẽ không quên. Sự thật của ngày đó.",
						"thai": "ข้าหวังว่าเจ้าจะไม่ลืม ความจริงของวันนั้น",
						"hindi": "मुझे उम्मीद थी कि तुम नहीं भूलोगे। उस दिन की सच्चाई को।"
					}
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "…그녀는 그대를 기다리고 있다. 그대가 외면했던 진실 속에서.",
						"english": "...She awaits you. Within the truth you turned away from.",
						"japanese": "…彼女は貴方を待っている。貴方が目を背けた真実の中で。",
						"chinese": "……她正在等你。在那你曾逃避的真相之中。",
						"french": "...Elle t'attend. Au sein de la vérité que tu as fuie.",
						"spanish": "...Ella te espera. En la verdad que ignoraste.",
						"vietnamese": "...Nàng đang đợi ngươi. Trong sự thật mà ngươi đã chối bỏ.",
						"thai": "...นางกำลังรอเจ้าอยู่ ภายในความจริงที่เจ้าเมินเฉย",
						"hindi": "...वह तुम्हारा इंतज़ार कर रही है। उस सच्चाई में जिससे तुमने मुंह मोड़ा था।"
					},
					"emotion": "sad",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "….",
						"english": "...",
						"japanese": "...",
						"chinese": "……",
						"french": "...",
						"spanish": "...",
						"vietnamese": "...",
						"thai": "...",
						"hindi": "..."
					},
					"speaker": "Astri"
				},
				{
					"content": {
						"korean": "쓰러진 정체 모를 자의 그림자가 길게 늘어졌다.",
						"english": "The shadow of the fallen, unknown figure stretched long.",
						"japanese": "倒れた正体不明の者の影が長く伸びた。",
						"chinese": "倒下的无名之影被拉得很长。",
						"french": "L'ombre de la silhouette inconnue et tombée s'allongeait.",
						"spanish": "La sombra de la figura desconocida y caída se alargó.",
						"vietnamese": "Bóng của kẻ vô danh đã ngã dài ra.",
						"thai": "เงาของผู้ล้มลงที่ไร้ตัวตนทอดยาวออกไป",
						"hindi": "गिर पड़े अज्ञात व्यक्ति की परछाई लंबी हो गई।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "아스트리는 더 깊은 곳으로 발걸음을 옮겼다. 피할 수 없는 폭풍 속으로.",
						"english": "Astry took another step deeper. Into the unavoidable storm.",
						"japanese": "アストリーはさらに深部へと足を進めた。避けられない嵐の中へ。",
						"chinese": "阿斯特丽娅迈步走向更深处。进入那无法避免的风暴之中。",
						"french": "Astry s'avança plus profondément. Dans la tempête inévitable.",
						"spanish": "Astry dio un paso más profundo. Hacia la tormenta ineludible.",
						"vietnamese": "Astry bước sâu hơn nữa. Vào cơn bão không thể tránh khỏi.",
						"thai": "แอสทรีเดินลึกลงไปอีก ก้าวเข้าสู่พายุที่ไม่อาจหลีกเลี่ยงได้",
						"hindi": "एस्ट्री और गहराई में कदम बढ़ा गया। उस तूफ़ान में जिससे बचा नहीं जा सकता।"
					},
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "아직 멀었군. 그대는 여전히 과거에 갇혀 있다.",
						"english": "Not yet. You are still trapped in the past.",
						"japanese": "まだ遠い。貴方は未だ過去に囚われている。",
						"chinese": "还差得远呢。你仍被困在过去之中。",
						"french": "Pas encore. Tu es toujours prisonnier du passé.",
						"spanish": "Aún no. Todavía estás atrapado en el pasado.",
						"vietnamese": "Chưa được đâu. Ngươi vẫn còn bị mắc kẹt trong quá khứ.",
						"thai": "ยังไม่ถึงเวลา เจ้ายังคงติดอยู่ในอดีต",
						"hindi": "अभी बहुत दूर है। तुम अभी भी अतीत में फंसे हुए हो।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "Astri",
					"emotion": "angry",
					"content": {
						"korean": "…아니야. 다시 일어설 거야.",
						"english": "...No. I'll rise again.",
						"japanese": "…違う。また立ち上がる。",
						"chinese": "…不。我会再次站起来的。",
						"french": "...Non. Je me relèverai.",
						"spanish": "...No. Me levantaré de nuevo.",
						"vietnamese": "...Không. Ta sẽ đứng dậy lần nữa.",
						"thai": "...ไม่! ข้าจะลุกขึ้นอีกครั้ง",
						"hindi": "...नहीं। मैं फिर उठ खड़ा होऊंगा।"
					},
					"type": "speech"
				}
			]
		}
	]
} as const;
