export const scenario_snowy_glimmerfrost_51_03 = {
	"scenario_id": "snowy_glimmerfrost_51_03",
	"order": 3,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"bran": {
			"id": "mon_985fcdcc-1bf2-4822-aa2f-292ae9353456",
			"name": {
				"korean": "브란",
				"english": "Bran",
				"japanese": "ブラン",
				"chinese": "布兰",
				"french": "Bran",
				"spanish": "Bran",
				"vietnamese": "Bran",
				"thai": "แบรน",
				"hindi": "ब्रैन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/42cde50b-7453-47b1-04df-73500ad21d00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/4ecba7ed-ec7e-4a8e-74dc-bf3e711b4d00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"피난처의 온기, 달콤한 덫이었다.",
			"브란은 속삭였다. '이 모든 것이… 너무 완벽해.'",
			"하지만 그의 경고는 허공에 흩어지고",
			"사람들은 점차 얼음의 잠식에 무력해져 갔다."
		],
		"english": [
			"The warmth of the shelter was a sweet trap.",
			"Bran whispered, \"All this... it's too perfect.\"",
			"But his warning scattered into the void.",
			"People gradually became helpless against the encroaching ice."
		],
		"japanese": [
			"避難所の温もりは、甘い罠だった。",
			"ブランは囁いた。「この全てが…完璧すぎる。」",
			"しかし彼の警告は虚空に散っていった。",
			"人々は次第に氷の侵食に無力になっていった。"
		],
		"chinese": [
			"避难所的温暖，是甜蜜的陷阱。",
			"布兰低语道：“这一切……太完美了。”",
			"然而他的警告，却散入虚空。",
			"人们逐渐在冰霜的侵蚀下变得无力。"
		],
		"french": [
			"La chaleur de l'abri était un doux piège.",
			"Bran murmura : \"Tout cela... c'est trop parfait.\"",
			"Mais son avertissement se dispersa dans le vide.",
			"Les gens devinrent peu à peu impuissants face à l'empiétement de la glace."
		],
		"spanish": [
			"El calor del refugio era una dulce trampa.",
			"Bran susurró: \"Todo esto... es demasiado perfecto.\"",
			"Pero su advertencia se dispersó en el vacío.",
			"La gente se volvió gradualmente indefensa ante el avance del hielo."
		],
		"vietnamese": [
			"Hơi ấm của nơi trú ẩn là một cái bẫy ngọt ngào.",
			"Bran thì thầm, \"Tất cả điều này... quá hoàn hảo.\"",
			"Nhưng lời cảnh báo của anh ta tan biến vào hư không.",
			"Con người dần trở nên bất lực trước sự xâm lấn của băng giá."
		],
		"thai": [
			"ความอบอุ่นของที่หลบภัยเป็นกับดักที่หอมหวาน",
			"แบรนกระซิบว่า \"ทั้งหมดนี้...มันสมบูรณ์แบบเกินไป\"",
			"แต่คำเตือนของเขาก็สลายไปในอากาศ",
			"ผู้คนค่อย ๆ หมดหนทางต่อการคืบคลานของน้ำแข็ง"
		],
		"hindi": [
			"आश्रय की गर्माहट, एक मीठा जाल था।",
			"ब्रान ने फुसफुसाया, \"यह सब कुछ... बहुत सही है।\"",
			"लेकिन उसकी चेतावनी हवा में बिखर गई।",
			"लोग धीरे-धीरे बर्फ के बढ़ते हुए प्रभाव के आगे असहाय होते गए।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "피난처 깊숙이, 따뜻함이 전해져 왔다. 안식의 공간.",
						"english": "Deep within the shelter, warmth spread. A place of rest.",
						"japanese": "避難所の奥深く、温かさが伝わってきた。安息の空間。",
						"chinese": "避难所深处，温暖蔓延。安息之所。",
						"french": "Au plus profond de l'abri, la chaleur se répandait. Un lieu de repos.",
						"spanish": "En lo profundo del refugio, el calor se extendía. Un lugar de descanso.",
						"vietnamese": "Sâu trong nơi trú ẩn, hơi ấm lan tỏa. Một không gian nghỉ ngơi.",
						"thai": "ลึกเข้าไปในที่หลบภัย ความอบอุ่นแผ่ซ่าน พื้นที่แห่งการพักผ่อน",
						"hindi": "आश्रय के भीतर गहराई में, गर्माहट फैल गई। आराम का स्थान।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "드디어… 살았다.",
						"english": "Finally... we're alive.",
						"japanese": "ようやく…助かった。",
						"chinese": "终于……活下来了。",
						"french": "Enfin... nous sommes vivants.",
						"spanish": "Finalmente... estamos vivos.",
						"vietnamese": "Cuối cùng... chúng ta còn sống.",
						"thai": "ในที่สุด...ก็รอดแล้ว",
						"hindi": "आखिरकार... हम ज़िंदा हैं।"
					},
					"emotion": "happy"
				},
				{
					"type": "direction",
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"speaker": "bran",
					"action": "enter"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…너무 완벽하지 않아?",
						"english": "...Isn't it too perfect?",
						"japanese": "…完璧すぎないか？",
						"chinese": "……是不是太完美了？",
						"french": "...N'est-ce pas trop parfait ?",
						"spanish": "...¿No es demasiado perfecto?",
						"vietnamese": "...Không phải là quá hoàn hảo sao?",
						"thai": "...มันไม่สมบูรณ์แบบเกินไปเหรอ?",
						"hindi": "...यह बहुत सही नहीं है क्या?"
					},
					"speaker": "bran",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "뭐가?",
						"english": "What is?",
						"japanese": "何が？",
						"chinese": "什么？",
						"french": "Quoi ?",
						"spanish": "¿Qué?",
						"vietnamese": "Cái gì?",
						"thai": "อะไร?",
						"hindi": "क्या?"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이 평화. 이 온기… 이상해.",
						"english": "This peace. This warmth... it's strange.",
						"japanese": "この平和。この温もり…おかしい。",
						"chinese": "这份平静。这份温暖……很奇怪。",
						"french": "Cette paix. Cette chaleur... c'est étrange.",
						"spanish": "Esta paz. Este calor... es extraño.",
						"vietnamese": "Sự bình yên này. Sự ấm áp này... thật kỳ lạ.",
						"thai": "ความสงบนี้ ความอบอุ่นนี้...มันแปลกๆ",
						"hindi": "यह शांति। यह गर्माहट... अजीब है।"
					},
					"speaker": "bran",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "bran",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이 온기, 몸이 둔해지는 것 같지 않아?",
						"english": "This warmth, doesn't it feel like it's dulling our bodies?",
						"japanese": "この温かさ、体が鈍る気がしないか？",
						"chinese": "这份温暖，是不是让身体变得迟钝了？",
						"french": "Cette chaleur, ne dirait-on pas qu'elle engourdit nos corps ?",
						"spanish": "Este calor, ¿no sientes que adormece nuestros cuerpos?",
						"vietnamese": "Hơi ấm này, không phải nó đang làm cơ thể chúng ta chậm chạp sao?",
						"thai": "ความอบอุ่นนี้ รู้สึกเหมือนทำให้ร่างกายเราเฉื่อยชาลงรึเปล่า?",
						"hindi": "यह गर्माहट, क्या तुम्हें नहीं लगता कि यह शरीर को सुस्त कर रही है?"
					},
					"speaker": "bran",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "그냥 피곤한 거야. 따뜻해서 좋기만 한데.",
						"english": "I'm just tired. The warmth feels good.",
						"japanese": "ただ疲れてるだけだよ。暖かくて気持ちいい。",
						"chinese": "我只是累了。这里暖和得很舒服。",
						"french": "Je suis juste fatigué. La chaleur est agréable.",
						"spanish": "Solo estoy cansado. El calor se siente bien.",
						"vietnamese": "Tôi chỉ mệt thôi. Ấm áp thế này thật dễ chịu.",
						"thai": "ฉันแค่เหนื่อยเอง ความอบอุ่นนี่มันดีจัง",
						"hindi": "मैं बस थका हुआ हूँ। गर्मी बहुत अच्छी लग रही है।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "아니야… 예전에 비슷한 이야기를 들은 적이 있어.",
						"english": "No... I've heard similar stories before.",
						"japanese": "いや…昔、似たような話を聞いたことがある。",
						"chinese": "不……我以前听过类似的故事。",
						"french": "Non... J'ai déjà entendu des histoires similaires.",
						"spanish": "No... Ya he oído historias parecidas antes.",
						"vietnamese": "Không... Tôi đã từng nghe những câu chuyện tương tự trước đây.",
						"thai": "ไม่นะ... ฉันเคยได้ยินเรื่องราวคล้ายๆ กันมาก่อน",
						"hindi": "नहीं... मैंने पहले भी ऐसी कहानियाँ सुनी हैं।"
					},
					"speaker": "bran",
					"type": "speech"
				},
				{
					"content": {
						"korean": "브란, 그만 좀 해.",
						"english": "Bran, stop it.",
						"japanese": "ブラン、もうやめて。",
						"chinese": "布兰，别说了。",
						"french": "Bran, arrête.",
						"spanish": "Bran, para ya.",
						"vietnamese": "Bran, dừng lại đi.",
						"thai": "แบรน พอได้แล้ว",
						"hindi": "ब्रैन, बस करो।"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						2,
						2
					],
					"duration_ms": 500,
					"speaker": "bran",
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "bran",
					"emotion": "sad",
					"content": {
						"korean": "저기 벽 봐… 얼음 속에… 얼굴들이 보여.",
						"english": "Look at the wall... In the ice... I see faces.",
						"japanese": "あの壁を見て…氷の中に…顔が見える。",
						"chinese": "看那面墙……冰里……我看到脸了。",
						"french": "Regarde le mur... Dans la glace... Je vois des visages.",
						"spanish": "Mira la pared... En el hielo... Veo caras.",
						"vietnamese": "Nhìn bức tường kia kìa... Trong băng... Tôi thấy những khuôn mặt.",
						"thai": "ดูที่กำแพงนั่นสิ... ในน้ำแข็ง... ฉันเห็นใบหน้า",
						"hindi": "उस दीवार को देखो... बर्फ में... मुझे चेहरे दिख रहे हैं।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "환각이야. 얼른 쉬는 게 좋겠어.",
						"english": "It's a hallucination. You should rest.",
						"japanese": "幻覚だ。早く休んだ方がいい。",
						"chinese": "是幻觉。你最好赶紧休息。",
						"french": "C'est une hallucination. Tu devrais te reposer.",
						"spanish": "Es una alucinación. Deberías descansar.",
						"vietnamese": "Đó là ảo giác. Anh nên nghỉ ngơi đi.",
						"thai": "มันเป็นภาพหลอน นายควรจะพักผ่อนซะ",
						"hindi": "यह एक मतिभ्रम है। तुम्हें आराम करना चाहिए।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "bran",
					"content": {
						"korean": "아니, 이건 함정이야! 이곳은 평화롭지 않아. 잠식되고 있다고!",
						"english": "No, this is a trap! This place isn't peaceful. It's being consumed!",
						"japanese": "違う、これは罠だ！ここは平和じゃない。侵食されているんだ！",
						"chinese": "不，这是陷阱！这里不平静。它正在被侵蚀！",
						"french": "Non, c'est un piège ! Cet endroit n'est pas paisible. Il est en train d'être consumé !",
						"spanish": "¡No, esto es una trampa! Este lugar no es pacífico. ¡Está siendo consumido!",
						"vietnamese": "Không, đây là một cái bẫy! Nơi này không hề yên bình. Nó đang bị xâm chiếm!",
						"thai": "ไม่ นี่มันกับดัก! ที่นี่ไม่สงบสุข มันกำลังถูกกลืนกิน!",
						"hindi": "नहीं, यह एक जाल है! यह जगह शांत नहीं है। इसे निगला जा रहा है!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "그러나 그의 경고는 이미 늦은 듯했다. 사람들은 안락함에 깊이 잠식되어 가고 있었다.",
						"english": "But his warning seemed too late. The people were already deeply consumed by comfort.",
						"japanese": "しかし、彼の警告はすでに遅すぎたようだ。人々は安楽さに深く侵食されていった。",
						"chinese": "然而，他的警告似乎已经太迟了。人们已深深地沉溺于安逸之中。",
						"french": "Cependant, son avertissement semblait déjà trop tard. Les gens étaient déjà profondément submergés par le confort.",
						"spanish": "Sin embargo, su advertencia ya parecía demasiado tarde. La gente estaba profundamente consumida por la comodidad.",
						"vietnamese": "Tuy nhiên, lời cảnh báo của anh ấy dường như đã quá muộn. Mọi người đã chìm sâu vào sự thoải mái.",
						"thai": "แต่คำเตือนของเขาดูเหมือนจะสายไปแล้ว ผู้คนกำลังถูกกลืนกินด้วยความสบายอย่างลึกซึ้ง",
						"hindi": "हालांकि, उसकी चेतावनी पहले ही देर हो चुकी थी। लोग आराम में गहराई से डूबते जा रहे थे।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "bran",
					"type": "direction",
					"spot": [
						1,
						2
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "이건 전설이 아니야! 반복되는 저주라고!",
						"english": "This isn't a legend! It's a recurring curse!",
						"japanese": "これは伝説じゃない！繰り返される呪いだ！",
						"chinese": "这不是传说！这是反复出现的诅咒！",
						"french": "Ce n'est pas une légende ! C'est une malédiction récurrente !",
						"spanish": "¡Esto no es una leyenda! ¡Es una maldición recurrente!",
						"vietnamese": "Đây không phải là truyền thuyết! Đây là một lời nguyền lặp đi lặp lại!",
						"thai": "นี่ไม่ใช่ตำนาน! มันคือคำสาปที่เกิดขึ้นซ้ำๆ!",
						"hindi": "यह कोई किंवदंती नहीं है! यह एक दोहराया जाने वाला अभिशाप है!"
					},
					"emotion": "angry",
					"speaker": "bran"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "브란, 제발 그만 해! 더 이상 듣기 싫어!",
						"english": "Bran, please stop! I don't want to hear it anymore!",
						"japanese": "ブラン、お願いだからやめて！もう聞きたくない！",
						"chinese": "布兰，求你住手！我不想再听了！",
						"french": "Bran, arrête s'il te plaît ! Je ne veux plus en entendre parler !",
						"spanish": "¡Bran, por favor para! ¡No quiero oírlo más!",
						"vietnamese": "Bran, làm ơn dừng lại đi! Tôi không muốn nghe nữa!",
						"thai": "แบรน ได้โปรดหยุด! ฉันไม่อยากฟังอีกแล้ว!",
						"hindi": "ब्रैन, कृपया रुक जाओ! मैं और नहीं सुनना चाहता!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "돌아가야 해! 여기선 살아남을 수 없어!",
						"english": "We have to go back! We can't survive here!",
						"japanese": "戻らなきゃ！ここでは生き残れない！",
						"chinese": "我们必须回去！我们在这里活不下去！",
						"french": "Nous devons y retourner ! Nous ne pouvons pas survivre ici !",
						"spanish": "¡Tenemos que volver! ¡No podemos sobrevivir aquí!",
						"vietnamese": "Chúng ta phải quay lại! Chúng ta không thể sống sót ở đây!",
						"thai": "เราต้องกลับไป! เราจะอยู่ที่นี่ไม่ได้!",
						"hindi": "हमें वापस जाना होगा! हम यहाँ जीवित नहीं रह सकते!"
					},
					"emotion": "sad",
					"speaker": "bran"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "그의 절규는 얼음벽에 부딪혀 산산이 흩어졌다. 아무도 그의 말을 듣지 않았다.",
						"english": "His scream shattered against the ice wall, scattering into fragments. No one heard him.",
						"japanese": "彼の絶叫は氷の壁に砕け散った。誰も彼の声を聞かなかった。",
						"chinese": "他的绝叫撞上冰墙，碎裂开来。没有人听到他的话。",
						"french": "Son hurlement se brisa contre le mur de glace, se dispersant en éclats. Personne ne l'entendit.",
						"spanish": "Su grito se estrelló contra el muro de hielo, dispersándose en pedazos. Nadie lo escuchó.",
						"vietnamese": "Tiếng gào thét của hắn tan vỡ vào bức tường băng. Chẳng ai nghe thấy lời hắn nói.",
						"thai": "เสียงกรีดร้องของเขาแตกกระจายเมื่อปะทะกับกำแพงน้ำแข็ง ไม่มีใครได้ยินเขา.",
						"hindi": "उसकी चीखें बर्फीली दीवार से टकराकर बिखर गईं। किसी ने उसकी बात नहीं सुनी।"
					},
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "얼음 결정체가 산산이 부서졌다. 그러나 그 여파는 끝나지 않았다.",
						"english": "The ice crystal shattered. But its aftermath was not over.",
						"japanese": "氷の結晶は砕け散った。しかし、その余波は終わらなかった。",
						"chinese": "冰晶破碎了。然而，其余波并未结束。",
						"french": "Le cristal de glace se brisa. Mais ses répercussions n'étaient pas terminées.",
						"spanish": "El cristal de hielo se hizo añicos. Pero sus secuelas no habían terminado.",
						"vietnamese": "Khối tinh thể băng vỡ tan tành. Nhưng dư chấn của nó vẫn chưa kết thúc.",
						"thai": "คริสตัลน้ำแข็งแตกสลาย แต่ผลกระทบยังไม่สิ้นสุด.",
						"hindi": "बर्फ का क्रिस्टल टूट गया। लेकिन उसका असर खत्म नहीं हुआ था।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "흥… 잠시 멈췄을 뿐. 너희는 이미… 얼어붙은 세계의 일부가 되었다.",
						"english": "Hmph… It's only paused for a moment. You are already… a part of the frozen world.",
						"japanese": "ふん…ほんの少し止まっただけだ。お前たちはもう…凍てついた世界の一部となったのだ。",
						"chinese": "哼…不过是暂时停滞而已。你们早已…成为了冰封世界的一部分。",
						"french": "Hmm… Ce n'est qu'une pause. Vous faites déjà… partie du monde gelé.",
						"spanish": "Hmph… Solo se ha detenido un momento. Ya sois… parte del mundo helado.",
						"vietnamese": "Hừ… Chỉ là tạm dừng một chút thôi. Các ngươi đã… trở thành một phần của thế giới băng giá rồi.",
						"thai": "ฮึ่ม… แค่หยุดชั่วคราวเท่านั้นแหละ พวกเจ้าได้กลายเป็น… ส่วนหนึ่งของโลกที่ถูกแช่แข็งไปแล้ว.",
						"hindi": "हूँ… यह बस थोड़ी देर के लिए रुका है। तुम पहले से ही… जमे हुए संसार का हिस्सा बन गए हो।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…끝난 게 아니었어.",
						"english": "…It wasn't over.",
						"japanese": "…終わっていなかった。",
						"chinese": "…还没结束。",
						"french": "…Ce n'était pas fini.",
						"spanish": "…No había terminado.",
						"vietnamese": "…Chưa kết thúc.",
						"thai": "…ยังไม่จบ.",
						"hindi": "…यह खत्म नहीं हुआ था।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "잠식은 계속된다. 벗어날 수 없는 저주처럼, 깊은 얼음 심연이 그들을 기다리고 있었다.",
						"english": "The encroachment continues. Like an inescapable curse, a deep ice abyss awaited them.",
						"japanese": "侵食は続く。逃れられぬ呪いのように、深い氷の深淵が彼らを待っていた。",
						"chinese": "侵蚀仍在继续。如同无法摆脱的诅咒，深邃的冰渊正在等待着他们。",
						"french": "L'invasion continue. Comme une malédiction inéluctable, un profond abîme de glace les attendait.",
						"spanish": "La invasión continúa. Como una maldición ineludible, un profundo abismo de hielo los esperaba.",
						"vietnamese": "Sự xâm lấn vẫn tiếp diễn. Như một lời nguyền không thể thoát khỏi, vực thẳm băng giá sâu thẳm đang chờ đợi họ.",
						"thai": "การรุกรานยังคงดำเนินต่อไป เหมือนคำสาปที่หนีไม่พ้น หุบเหวน้ำแข็งลึกกำลังรอพวกเขาอยู่.",
						"hindi": "अतिक्रमण जारी है। एक न टाली जा सकने वाली अभिशाप की तरह, एक गहरा बर्फीला पाताल उनका इंतजार कर रहा था।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "온기가 그들을 집어삼켰다. 영원한 얼음의 노예가 되는 순간이었다.",
						"english": "Warmth engulfed them. It was the moment they became slaves to eternal ice.",
						"japanese": "温もりが彼らを飲み込んだ。それは永遠の氷の奴隷となる瞬間だった。",
						"chinese": "温暖吞噬了他们。那是他们成为永恒寒冰奴隶的瞬间。",
						"french": "La chaleur les a engloutis. Ce fut le moment où ils devinrent esclaves de la glace éternelle.",
						"spanish": "El calor los engulló. Fue el momento en que se convirtieron en esclavos del hielo eterno.",
						"vietnamese": "Hơi ấm nhấn chìm họ. Đó là khoảnh khắc họ trở thành nô lệ của băng vĩnh cửu.",
						"thai": "ความอบอุ่นกลืนกินพวกเขา มันเป็นช่วงเวลาที่พวกเขากลายเป็นทาสของน้ำแข็งนิรันดร์",
						"hindi": "गर्मी ने उन्हें निगल लिया। यह वह क्षण था जब वे शाश्वत बर्फ के गुलाम बन गए।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "어리석은 것들… 이 달콤한 죽음을 거부할 순 없다.",
						"english": "Fools... You cannot refuse this sweet death.",
						"japanese": "愚かな者たちめ… この甘美な死を拒むことはできない。",
						"chinese": "愚蠢的东西……你们无法拒绝这甜蜜的死亡。",
						"french": "Fous... Vous ne pouvez pas refuser cette douce mort.",
						"spanish": "Necios... No podéis rechazar esta dulce muerte.",
						"vietnamese": "Lũ ngu ngốc... Các ngươi không thể chối từ cái chết ngọt ngào này.",
						"thai": "พวกโง่เง่า... เจ้าไม่อาจปฏิเสธความตายอันหอมหวานนี้ได้",
						"hindi": "मूर्खों... तुम इस मीठी मौत को अस्वीकार नहीं कर सकते।"
					}
				},
				{
					"content": {
						"korean": "아직… 끝나지 않았어. 포기하지 않아…!",
						"english": "It's not over yet... I won't give up...!",
						"japanese": "まだ… 終わってない。諦めない…！",
						"chinese": "还没……结束。我不会放弃……！",
						"french": "Ce n'est pas encore… fini. Je n'abandonnerai pas… !",
						"spanish": "Aún no... ha terminado. ¡No me rendiré...!",
						"vietnamese": "Chưa… kết thúc. Tôi sẽ không bỏ cuộc…!",
						"thai": "ยัง…ไม่จบ. ฉันจะไม่ยอมแพ้…!",
						"hindi": "अभी… खत्म नहीं हुआ है। मैं हार नहीं मानूँगा…!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "피난처의 가장 깊은 곳. 거대한 얼음 결정체가 맥동하고 있었다.",
						"english": "The deepest part of the sanctuary. A colossal ice crystal pulsed.",
						"japanese": "聖域の最深部。巨大な氷の結晶が脈動していた。",
						"chinese": "避难所最深处。一颗巨大的冰晶正在跳动。",
						"french": "La partie la plus profonde du sanctuaire. Un gigantesque cristal de glace pulsait.",
						"spanish": "La parte más profunda del santuario. Un colosal cristal de hielo latía.",
						"vietnamese": "Nơi sâu nhất của thánh địa. Một khối tinh thể băng khổng lồ đang đập.",
						"thai": "ส่วนที่ลึกที่สุดของเขตรักษาการณ์ คริสตัลน้ำแข็งมหึมากำลังเต้นเป็นจังหวะ.",
						"hindi": "आश्रय का सबसे गहरा हिस्सा। एक विशाल बर्फीला क्रिस्टल धड़क रहा था।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "어리석은 자들. 결국 여기까지 왔군.",
						"english": "Fools. You've come all this way, after all.",
						"japanese": "愚かな者たちめ。よくぞここまで来た。",
						"chinese": "愚蠢的家伙们。最终还是来到这里了。",
						"french": "Insensés. Vous êtes finalement arrivés jusqu'ici.",
						"spanish": "Necios. Al final, habéis llegado hasta aquí.",
						"vietnamese": "Lũ ngu ngốc. Cuối cùng cũng đến được đây.",
						"thai": "เจ้าพวกโง่. ในที่สุดก็มาถึงที่นี่.",
						"hindi": "मूर्खों। तुम आखिरकार यहीं तक आ गए।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "네가… 이 모든 것을 꾸민 거냐!",
						"english": "You… You orchestrated all of this!",
						"japanese": "お前が…この全てを仕組んだのか！",
						"chinese": "你…这一切都是你策划的吗！",
						"french": "C'est toi… qui as tout orchestré !",
						"spanish": "¡Tú… tú orquestaste todo esto!",
						"vietnamese": "Ngươi… Ngươi đã dàn dựng tất cả chuyện này ư!",
						"thai": "แก… แกเป็นคนบงการทั้งหมดนี่เอง!",
						"hindi": "तुम… तुमने यह सब किया है!"
					},
					"type": "speech"
				},
				{
					"speaker": "bran",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						2
					],
					"type": "direction"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "이 자가… 모든 것을 조종하고 있었어!",
						"english": "This one… was controlling everything!",
						"japanese": "こいつが…全てを操っていたのか！",
						"chinese": "就是这个家伙…在操控一切！",
						"french": "C'est lui… qui contrôlait tout !",
						"spanish": "¡Este… estaba controlando todo!",
						"vietnamese": "Kẻ này… đã điều khiển mọi thứ!",
						"thai": "เจ้านี่เอง… เป็นคนควบคุมทุกสิ่ง!",
						"hindi": "यह… सब कुछ नियंत्रित कर रहा था!"
					},
					"speaker": "bran",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "{random_boss}라 부르거라. 곧 너희도 이 온기의 일부가 될 테니.",
						"english": "Call me {random_boss}. Soon, you too shall be a part of this warmth.",
						"japanese": "私を「{random_boss}」と呼ぶがいい。お前たちもじき、この温もりの一部となるだろうからな。",
						"chinese": "称我为{random_boss}吧。很快，你们也将成为这温暖的一部分。",
						"french": "Appelez-moi {random_boss}. Bientôt, vous ferez aussi partie de cette chaleur.",
						"spanish": "Llamadme {random_boss}. Pronto, vosotros también seréis parte de este calor.",
						"vietnamese": "Hãy gọi ta là {random_boss}. Chẳng bao lâu nữa, các ngươi cũng sẽ là một phần của sự ấm áp này.",
						"thai": "จงเรียกข้าว่า {random_boss}. ในไม่ช้า พวกเจ้าก็จะกลายเป็นส่วนหนึ่งของความอบอุ่นนี้.",
						"hindi": "मुझे {random_boss} बुलाओ। जल्द ही, तुम भी इस गर्माहट का हिस्सा बनोगे।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"duration_ms": 400,
					"speaker": "bran",
					"direction": "down",
					"action": "exit",
					"type": "direction"
				}
			]
		}
	]
} as const;
