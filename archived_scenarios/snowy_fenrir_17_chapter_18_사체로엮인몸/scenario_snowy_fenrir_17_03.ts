export const scenario_snowy_fenrir_17_03 = {
	"scenario_id": "snowy_fenrir_17_03",
	"order": 3,
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
	"prologue": {
		"korean": [
			"눈보라 속, 거대한 늑대의 흔적.",
			"그림자 속을 걷는 탐험대.",
			"가까이 다가갈수록 드러나는 진실.",
			"생명이라 불릴 수 없는 것의 심장."
		],
		"english": [
			"A colossal wolf's tracks in the blizzard.",
			"An expedition walks through the shadows.",
			"The truth revealed with every step closer.",
			"The heart of something that cannot be called life."
		],
		"japanese": [
			"吹雪の中、巨大な狼の足跡。",
			"影の中を進む探検隊。",
			"近づくほどに明らかになる真実。",
			"生命と呼べぬものの心臓。"
		],
		"chinese": [
			"暴风雪中，巨狼的踪迹。",
			"穿行于阴影中的探险队。",
			"越是靠近，真相越是浮现。",
			"无法称之为生命的物体的核心。"
		],
		"french": [
			"Les traces d'un loup colossal dans le blizzard.",
			"Une expédition marche dans l'ombre.",
			"La vérité se révèle à chaque pas.",
			"Le cœur de ce qui ne peut être appelé vie."
		],
		"spanish": [
			"Las huellas de un lobo colosal en la ventisca.",
			"Una expedición camina entre las sombras.",
			"La verdad se revela con cada paso más cerca.",
			"El corazón de aquello que no puede llamarse vida."
		],
		"vietnamese": [
			"Dấu vết của một con sói khổng lồ trong bão tuyết.",
			"Đoàn thám hiểm bước đi trong bóng tối.",
			"Sự thật hé lộ càng gần.",
			"Trái tim của thứ không thể gọi là sự sống."
		],
		"thai": [
			"ร่องรอยของหมาป่ามหึมาท่ามกลางพายุหิมะ",
			"คณะสำรวจเดินฝ่าเงามืด",
			"ความจริงที่เปิดเผยเมื่อเข้าใกล้",
			"หัวใจของสิ่งที่ไม่อาจเรียกว่าสิ่งมีชีวิต"
		],
		"hindi": [
			"बर्फीले तूफ़ान में एक विशाल भेड़िये के निशान।",
			"एक अभियान दल अंधेरे में चल रहा है।",
			"जैसे-जैसे करीब आते हैं, सच्चाई उजागर होती जाती है।",
			"उस चीज़ का दिल जिसे जीवन नहीं कहा जा सकता।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "눈보라가 몰아치는 설원. 늑대가 지나간 자리마다 사체가 흩뿌려져 있다.",
						"english": "A blizzard-swept snowfield. Corpses are scattered wherever the wolf passed.",
						"japanese": "吹雪が荒れ狂う雪原。狼が通った場所には、死体が散らばっている。",
						"chinese": "暴风雪肆虐的雪原。狼所经之处，尸体散落一地。",
						"french": "Une étendue enneigée balayée par le blizzard. Des cadavres jonchent le sol partout où le loup est passé.",
						"spanish": "Un campo de nieve azotado por la ventisca. Cadáveres esparcidos por dondequiera que pasó el lobo.",
						"vietnamese": "Một cánh đồng tuyết bị bão tuyết quét qua. Xác chết rải rác khắp nơi con sói đã đi qua.",
						"thai": "ทุ่งหิมะที่พายุหิมะพัดโหมกระหน่ำ ศพกระจัดกระจายไปทั่วทุกที่ที่หมาป่าผ่านไป",
						"hindi": "बर्फीले तूफान से घिरा बर्फीला मैदान। जहाँ-जहाँ से भेड़िया गुज़रा है, वहाँ लाशें बिखरी पड़ी हैं।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…이건 사냥이 아니야.",
						"english": "...This isn't hunting.",
						"japanese": "…これは、狩りじゃない。",
						"chinese": "……这不是狩猎。",
						"french": "...Ce n'est pas de la chasse.",
						"spanish": "...Esto no es una cacería.",
						"vietnamese": "...Đây không phải là săn bắn.",
						"thai": "...นี่ไม่ใช่การล่า",
						"hindi": "...यह शिकार नहीं है।"
					},
					"speaker": "character_any",
					"emotion": "sad"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "glace",
					"action": "enter",
					"spot": [
						5,
						2
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "가까이 가봐야겠어.",
						"english": "I need to get closer.",
						"japanese": "近くへ行ってみないと。",
						"chinese": "我得靠近看看。",
						"french": "Je dois m'approcher.",
						"spanish": "Tengo que acercarme.",
						"vietnamese": "Tôi cần đến gần hơn.",
						"thai": "ฉันต้องเข้าไปใกล้ๆ",
						"hindi": "मुझे करीब जाकर देखना होगा।"
					},
					"speaker": "glace",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "glace",
					"action": "move",
					"duration_ms": 700,
					"type": "direction",
					"spot": [
						5,
						4
					]
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "글라세가 거대한 늑대의 몸에 귀를 기울였다.",
						"english": "Glace leaned in to the colossal wolf's body.",
						"japanese": "グラッセは巨大な狼の体に耳を傾けた。",
						"chinese": "格拉丝凑近巨狼的身体，侧耳倾听。",
						"french": "Glace tendit l'oreille vers le corps du loup colossal.",
						"spanish": "Glace se acercó al cuerpo del lobo colosal.",
						"vietnamese": "Glace áp tai vào thân con sói khổng lồ.",
						"thai": "กลัซเงี่ยหูฟังร่างของหมาป่ามหึมา",
						"hindi": "ग्लेस ने विशाल भेड़िये के शरीर पर कान लगाया।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…심장이 뛰지 않아.",
						"english": "...Its heart isn't beating.",
						"japanese": "…心臓が動いていない。",
						"chinese": "……没有心跳。",
						"french": "...Son cœur ne bat pas.",
						"spanish": "...Su corazón no late.",
						"vietnamese": "...Tim nó không đập.",
						"thai": "...หัวใจมันไม่เต้น",
						"hindi": "...उसका दिल नहीं धड़क रहा है।"
					},
					"speaker": "glace",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "glace",
					"content": {
						"korean": "살아 있는 게 아니야. 그저 바람 소리뿐.",
						"english": "It's not alive. Just the sound of the wind.",
						"japanese": "生きているんじゃない。ただの風の音だけ。",
						"chinese": "它没有生命。只有风声。",
						"french": "Ce n'est pas vivant. Juste le son du vent.",
						"spanish": "No está vivo. Solo el sonido del viento.",
						"vietnamese": "Nó không sống. Chỉ là tiếng gió thôi.",
						"thai": "มันไม่มีชีวิต มีแต่เสียงลมเท่านั้น",
						"hindi": "यह जीवित नहीं है। बस हवा की आवाज़ है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "그럼… 이건 뭐지?",
						"english": "Then... what is this?",
						"japanese": "では…これは何だ？",
						"chinese": "那么……这是什么？",
						"french": "Alors... qu'est-ce que c'est ?",
						"spanish": "¿Entonces... qué es esto?",
						"vietnamese": "Vậy... cái này là gì?",
						"thai": "ถ้าอย่างนั้น... นี่คืออะไร?",
						"hindi": "तो... यह क्या है?"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						5,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "glace"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "늑대의 몸이… 살이 아니야.",
						"english": "The wolf's body... is not flesh.",
						"japanese": "狼の体は…肉ではない。",
						"chinese": "狼的身体……不是血肉之躯。",
						"french": "Le corps du loup... n'est pas chair.",
						"spanish": "El cuerpo del lobo... no es carne.",
						"vietnamese": "Cơ thể con sói... không phải là thịt.",
						"thai": "ร่างของหมาป่า... ไม่ใช่เนื้อหนังมังสา",
						"hindi": "भेड़िये का शरीर... मांस नहीं है।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "사체와 뼈들이 엉켜 있어.",
						"english": "It's a tangle of corpses and bones.",
						"japanese": "死体と骨が絡み合っている。",
						"chinese": "尸体和骨头缠绕在一起。",
						"french": "C'est un enchevêtrement de cadavres et d'os.",
						"spanish": "Es un enredo de cadáveres y huesos.",
						"vietnamese": "Xác chết và xương cốt lẫn lộn.",
						"thai": "มีแต่ซากศพและกระดูกที่พันกันยุ่งเหยิง",
						"hindi": "यह शवों और हड्डियों का एक उलझा हुआ जाल है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "그 안에 생명은 없어. 그저 껍데기일 뿐.",
						"english": "There's no life within. Just a shell.",
						"japanese": "その中に生命はない。ただの殻だ。",
						"chinese": "里面没有生命。只是一个空壳。",
						"french": "Il n'y a pas de vie à l'intérieur. Juste une coquille.",
						"spanish": "No hay vida dentro. Solo una cáscara.",
						"vietnamese": "Không có sự sống bên trong. Chỉ là một cái vỏ rỗng.",
						"thai": "ไม่มีชีวิตอยู่ข้างใน เป็นเพียงแค่เปลือกนอกเท่านั้น",
						"hindi": "इसके भीतर कोई जीवन नहीं है। बस एक खोल है।"
					},
					"speaker": "glace",
					"emotion": "base"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"spot": [
						5,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "glace"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "저건… 우리가 아는 짐승이 아니야.",
						"english": "That's... not a beast we know.",
						"japanese": "あれは…我々が知る獣ではない。",
						"chinese": "那……不是我们所知的野兽。",
						"french": "Ce n'est... pas une bête que nous connaissons.",
						"spanish": "Eso... no es una bestia que conozcamos.",
						"vietnamese": "Đó... không phải là một con quái vật mà chúng ta biết.",
						"thai": "นั่น... ไม่ใช่สัตว์ร้ายที่เรารู้จัก",
						"hindi": "वह... कोई ऐसा जानवर नहीं है जिसे हम जानते हैं।"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "공격해도… 아무 소용 없어.",
						"english": "Attacking it... is useless.",
						"japanese": "攻撃しても…無意味だ。",
						"chinese": "攻击它……毫无用处。",
						"french": "L'attaquer... est inutile.",
						"spanish": "Atacarlo... es inútil.",
						"vietnamese": "Tấn công nó... vô ích.",
						"thai": "การโจมตีมัน... ไร้ประโยชน์",
						"hindi": "उस पर हमला करना... बेकार है।"
					},
					"speaker": "character_1",
					"type": "speech"
				},
				{
					"content": {
						"korean": "계속 채워지고 있어. 스스로.",
						"english": "It keeps regenerating. By itself.",
						"japanese": "自ら…補充され続けている。",
						"chinese": "它在不断地自我补充。",
						"french": "Il ne cesse de se reconstituer. Tout seul.",
						"spanish": "Sigue regenerándose. Por sí mismo.",
						"vietnamese": "Nó cứ tự phục hồi. Tự thân nó.",
						"thai": "มันฟื้นตัวอย่างต่อเนื่อง ด้วยตัวมันเอง",
						"hindi": "यह स्वयं ही भरता जा रहा है।"
					},
					"speaker": "glace",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "어리석은 것들. 너희에겐 심장이 없어.",
						"english": "Fools. You have no heart.",
						"japanese": "愚か者ども。貴様らには心がない。",
						"chinese": "愚蠢的东西。你们没有心。",
						"french": "Fous. Vous n'avez pas de cœur.",
						"spanish": "Necios. No tenéis corazón.",
						"vietnamese": "Những kẻ ngốc. Các ngươi không có trái tim.",
						"thai": "เจ้าพวกโง่เง่า พวกเจ้าไม่มีหัวใจ",
						"hindi": "मूर्खों। तुम्हारे पास दिल नहीं है।"
					},
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "젠장… 다시…!",
						"english": "Damn it... Again...!",
						"japanese": "くそ…もう一度…！",
						"chinese": "该死…再来…！",
						"french": "Mince... Encore... !",
						"spanish": "Maldita sea... ¡Otra vez...!",
						"vietnamese": "Chết tiệt... Lại nữa...!",
						"thai": "ให้ตายสิ... อีกครั้ง...!",
						"hindi": "धिक्कार है... फिर से...!"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 길을 막아섰다.",
						"english": "A colossal shadow blocked the path.",
						"japanese": "巨大な影が道を塞いだ。",
						"chinese": "一个巨大的影子挡住了去路。",
						"french": "Une ombre colossale bloquait le chemin.",
						"spanish": "Una sombra colosal bloqueó el camino.",
						"vietnamese": "Một cái bóng khổng lồ chắn đường.",
						"thai": "เงาขนาดมหึมาขวางทางอยู่",
						"hindi": "एक विशाल छाया ने रास्ता रोक दिया।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "누가 여기까지 오도록 허락했지?",
						"english": "Who allowed you to come this far?",
						"japanese": "誰がここまで来ることを許した？",
						"chinese": "谁允许你们来到这里？",
						"french": "Qui vous a permis d'aller si loin ?",
						"spanish": "¿Quién te permitió llegar hasta aquí?",
						"vietnamese": "Ai đã cho phép ngươi đến đây?",
						"thai": "ใครอนุญาตให้เจ้ามาได้ถึงขนาดนี้?",
						"hindi": "किसने तुम्हें इतनी दूर आने की अनुमति दी?"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "이게… {random_boss}인가.",
						"english": "Is this... {random_boss}?",
						"japanese": "これが… {random_boss}か。",
						"chinese": "这就是……{random_boss}吗？",
						"french": "Est-ce... {random_boss} ?",
						"spanish": "¿Es esto... {random_boss}?",
						"vietnamese": "Đây có phải là... {random_boss}?",
						"thai": "นี่คือ... {random_boss} ใช่ไหม?",
						"hindi": "क्या यह... {random_boss} है?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "…겨우 이 정도로… 날 이겼다고 생각하나?",
						"english": "...You think... this is enough to defeat me?",
						"japanese": "…たかがこれしきで…私に勝ったとでも？",
						"chinese": "…就凭这点程度…就以为能打败我了吗？",
						"french": "...Vous pensez... m'avoir vaincu avec si peu ?",
						"spanish": "...¿Crees... que con esto ya me has ganado?",
						"vietnamese": "...Chỉ với chừng này... mà ngươi nghĩ đã thắng được ta sao?",
						"thai": "...แค่นี้...คิดว่าจะชนะข้าได้แล้วรึ?",
						"hindi": "...बस इतनी सी बात पर... क्या तुम्हें लगता है कि तुमने मुझे हरा दिया है?"
					},
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "진정한 공허는… 이제부터 시작이다.",
						"english": "The true void... begins now.",
						"japanese": "真の虚無は…これからだ。",
						"chinese": "真正的虚无…现在才开始。",
						"french": "Le véritable vide... ne fait que commencer.",
						"spanish": "El verdadero vacío... comienza ahora.",
						"vietnamese": "Hư vô đích thực... bây giờ mới bắt đầu.",
						"thai": "ความว่างเปล่าที่แท้จริง...เพิ่งจะเริ่มต้นขึ้นต่างหาก",
						"hindi": "वास्तविक शून्य... अब शुरू होता है।"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "끝이 아니라고…?",
						"english": "It's not over...?",
						"japanese": "終わりじゃないと…？",
						"chinese": "还没结束…？",
						"french": "Ce n'est pas la fin... ?",
						"spanish": "¿No es el final...?",
						"vietnamese": "Chưa kết thúc sao...?",
						"thai": "ยังไม่จบ...?",
						"hindi": "यह खत्म नहीं हुआ...?"
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "눈보라가 잠시 멈췄지만, 더 깊은 어둠이 탐험대를 기다리고 있었다.",
						"english": "The blizzard briefly ceased, but a deeper darkness awaited the expedition.",
						"japanese": "吹雪は一時的に止んだが、探検隊にはさらなる深淵の闇が待ち受けていた。",
						"chinese": "暴风雪暂时停歇，但更深的黑暗正等待着探险队。",
						"french": "Le blizzard s'était brièvement arrêté, mais des ténèbres plus profondes attendaient l'expédition.",
						"spanish": "La ventisca cesó momentáneamente, pero una oscuridad más profunda esperaba a la expedición.",
						"vietnamese": "Bão tuyết tạm lắng, nhưng một màn đêm sâu thẳm hơn đang chờ đợi đoàn thám hiểm.",
						"thai": "พายุหิมะสงบลงชั่วคราว แต่ความมืดที่ลึกยิ่งกว่ารอคอยคณะสำรวจอยู่",
						"hindi": "बर्फ़ीला तूफ़ान क्षण भर के लिए थम गया, लेकिन एक गहरा अंधेरा अभियान दल का इंतज़ार कर रहा था।"
					},
					"emotion": "base"
				}
			],
			"id": 15
		}
	]
} as const;
