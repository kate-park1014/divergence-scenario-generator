export const scenario_RingBearer_Echoes_04 = {
	"scenario_id": "RingBearer_Echoes_04",
	"order": 4,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"vex": {
			"id": "mon_aa76550e-0b43-4273-a2f8-2463bdc9b848",
			"name": {
				"korean": "벡스",
				"english": "Vex",
				"japanese": "ベックス",
				"chinese": "维克斯",
				"french": "Vex",
				"spanish": "Vex",
				"vietnamese": "Vex",
				"thai": "เว็กซ์",
				"hindi": "वेक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/6c55d5a5-0393-451b-d41f-fce1a4ee1700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2ea1ea45-9ca6-43b6-2c73-ed5ae7cdaf00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"무의 고리가 모든 것을 집어삼켰다.",
			"달콤한 유혹은 이성을 마비시킨다.",
			"공허의 속삭임은 평화를 약속하지만,",
			"그것은 파괴의 다른 이름일 뿐.",
			"너의 의지마저, 고리의 일부가 될 운명인가."
		],
		"english": [
			"The Ring of Nothingness devoured everything.",
			"Sweet temptation paralyzes reason.",
			"The whispers of the void promise peace, but...",
			"It's merely another name for destruction.",
			"Is even your will destined to become part of the Ring?"
		],
		"japanese": [
			"無の輪がすべてを飲み込んだ。",
			"甘い誘惑は理性を麻痺させる。",
			"虚無の囁きは平和を約束するが、",
			"それは破壊の別の名に過ぎない。",
			"お前の意志すら、輪の一部となる運命なのか。"
		],
		"chinese": [
			"虚无之环吞噬了一切。",
			"甜美的诱惑麻痹了理性。",
			"虚空的低语承诺着和平，但…",
			"那只是毁灭的另一个名字。",
			"你的意志，也注定成为环的一部分吗？"
		],
		"french": [
			"L'Anneau du Néant a tout dévoré.",
			"La douce tentation paralyse la raison.",
			"Les murmures du vide promettent la paix, mais...",
			"Ce n'est qu'un autre nom pour la destruction.",
			"Même ta volonté est-elle destinée à faire partie de l'Anneau ?"
		],
		"spanish": [
			"El Anillo de la Nada lo devoró todo.",
			"La dulce tentación paraliza la razón.",
			"Los susurros del vacío prometen paz, pero...",
			"No es más que otro nombre para la destrucción.",
			"¿Incluso tu voluntad está destinada a ser parte del Anillo?"
		],
		"vietnamese": [
			"Vòng Xoáy Hư Vô nuốt chửng tất cả.",
			"Cám dỗ ngọt ngào làm tê liệt lý trí.",
			"Lời thì thầm của hư không hứa hẹn hòa bình, nhưng...",
			"Nó chỉ là một tên gọi khác của sự hủy diệt.",
			"Ngay cả ý chí của ngươi cũng định trở thành một phần của Vòng Xoáy ư?"
		],
		"thai": [
			"วงแหวนแห่งความว่างเปล่ากลืนกินทุกสิ่ง",
			"การล่อลวงอันหอมหวานทำให้เหตุผลเป็นอัมพาต",
			"เสียงกระซิบของความว่างเปล่าสัญญาถึงสันติภาพ แต่",
			"มันเป็นเพียงอีกชื่อหนึ่งของการทำลายล้าง",
			"แม้แต่เจตจำนงของเจ้า ก็ถูกกำหนดให้เป็นส่วนหนึ่งของวงแหวนหรือ"
		],
		"hindi": [
			"शून्यता के वलय ने सब कुछ निगल लिया।",
			"मधुर प्रलोभन तर्क को पंगु बना देता है।",
			"शून्य की फुसफुसाहट शांति का वादा करती है, लेकिन...",
			"यह केवल विनाश का दूसरा नाम है।",
			"क्या तुम्हारी इच्छा भी वलय का हिस्सा बनने वाली है?"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "공허의 심장부. 모든 것이 뒤틀려 있었다.",
						"english": "The heart of the void. Everything was twisted.",
						"japanese": "虚無の心臓部。全てが歪んでいた。",
						"chinese": "虚空的中心。一切都扭曲了。",
						"french": "Le cœur du vide. Tout était tordu.",
						"spanish": "El corazón del vacío. Todo estaba distorsionado.",
						"vietnamese": "Trung tâm của hư không. Mọi thứ đều méo mó.",
						"thai": "ใจกลางของความว่างเปล่า ทุกสิ่งบิดเบี้ยวไปหมด",
						"hindi": "शून्य का हृदय। सब कुछ विकृत था।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"spot": [
						4,
						3
					],
					"speaker": "vex",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "왔구나. 기다리고 있었어.",
						"english": "You're here. I've been waiting.",
						"japanese": "来たな。待っていたぞ。",
						"chinese": "你来了。我一直在等你。",
						"french": "Tu es là. Je t'attendais.",
						"spanish": "Has llegado. Te estaba esperando.",
						"vietnamese": "Ngươi đến rồi. Ta vẫn chờ.",
						"thai": "มาแล้วสินะ ฉันรออยู่",
						"hindi": "तुम आ गए। मैं इंतजार कर रहा था।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "vex"
				},
				{
					"content": {
						"korean": "당신은 누구지?",
						"english": "Who are you?",
						"japanese": "あなたは誰だ？",
						"chinese": "你是谁？",
						"french": "Qui es-tu ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Ngươi là ai?",
						"thai": "เจ้าคือใคร",
						"hindi": "तुम कौन हो?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "vex",
					"emotion": "base",
					"content": {
						"korean": "벡스. 이 고리의 진정한 의미를 깨달은 자.",
						"english": "Vex. One who has realized the true meaning of this Ring.",
						"japanese": "ベックス。この輪の真の意味を悟りし者。",
						"chinese": "维克斯。领悟了此环真正意义之人。",
						"french": "Vex. Celui qui a compris le vrai sens de cet Anneau.",
						"spanish": "Vex. Aquel que ha comprendido el verdadero significado de este Anillo.",
						"vietnamese": "Vex. Kẻ đã nhận ra ý nghĩa thật sự của Vòng Xoáy này.",
						"thai": "เว็กซ์ ผู้ที่ตระหนักถึงความหมายที่แท้จริงของวงแหวนนี้",
						"hindi": "वेक्स। वह, जिसने इस वलय का वास्तविक अर्थ समझा।"
					},
					"type": "speech"
				},
				{
					"speaker": "vex",
					"content": {
						"korean": "너의 고민, 내가 끝내줄 수 있어.",
						"english": "I can end your worries.",
						"japanese": "お前の苦悩、私が終わらせてやろう。",
						"chinese": "你的烦恼，我能帮你终结。",
						"french": "Je peux mettre fin à tes tourments.",
						"spanish": "Puedo poner fin a tus preocupaciones.",
						"vietnamese": "Ta có thể kết thúc phiền muộn của ngươi.",
						"thai": "ความกังวลของเจ้า ข้าจะช่วยยุติมันเอง",
						"hindi": "तुम्हारी चिंताएं, मैं खत्म कर सकता हूं।"
					},
					"type": "speech",
					"emotion": "happy"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"speaker": "vex",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "고리의 침식은 파괴가 아니야. 완전한 평화로 향하는 과정일 뿐.",
						"english": "The ring's erosion isn't destruction. It's just a process towards complete peace.",
						"japanese": "環の侵食は破壊ではない。完全な平和へと向かう過程に過ぎない。",
						"chinese": "环的侵蚀并非破坏，它只是通向彻底和平的过程。",
						"french": "L'érosion de l'anneau n'est pas destruction. C'est juste un processus vers une paix totale.",
						"spanish": "La erosión del anillo no es destrucción. Es solo un proceso hacia la paz completa.",
						"vietnamese": "Sự xói mòn của Vòng không phải là hủy diệt. Nó chỉ là một quá trình hướng tới hòa bình tuyệt đối.",
						"thai": "การกัดกร่อนของวงแหวนไม่ใช่การทำลายล้าง มันเป็นเพียงกระบวนการสู่สันติภาพที่สมบูรณ์",
						"hindi": "वलय का क्षरण विनाश नहीं है। यह पूर्ण शांति की ओर एक प्रक्रिया मात्र है।"
					},
					"emotion": "base",
					"speaker": "vex"
				},
				{
					"content": {
						"korean": "평화라고? 이 혼돈이?",
						"english": "Peace? This chaos?",
						"japanese": "平和だと？この混沌が？",
						"chinese": "和平？这片混沌？",
						"french": "La paix ? Ce chaos ?",
						"spanish": "¿Paz? ¿Este caos?",
						"vietnamese": "Hòa bình ư? Sự hỗn loạn này sao?",
						"thai": "สันติภาพหรือ? ความวุ่นวายนี้หรือ?",
						"hindi": "शांति? यह अराजकता?"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "모든 욕망이 사라진 곳에 진정한 평화가 있지.",
						"english": "True peace lies where all desires vanish.",
						"japanese": "あらゆる欲望が消え去った場所にこそ、真の平和がある。",
						"chinese": "在所有欲望消失之处，才有真正的和平。",
						"french": "La vraie paix réside là où tous les désirs disparaissent.",
						"spanish": "La verdadera paz reside donde todos los deseos desaparecen.",
						"vietnamese": "Hòa bình thực sự nằm ở nơi mọi ham muốn tan biến.",
						"thai": "สันติภาพที่แท้จริงอยู่ที่ใดที่ความปรารถนาทั้งหมดหายไป",
						"hindi": "सच्ची शांति वहीं है जहाँ सारी इच्छाएँ लुप्त हो जाती हैं।"
					},
					"speaker": "vex"
				},
				{
					"content": {
						"korean": "네가 싸우는 것은… 너 자신의 일부일지도 몰라.",
						"english": "What you're fighting... might be a part of yourself.",
						"japanese": "お前が戦っているのは…お前自身の一部かもしれない。",
						"chinese": "你所对抗的…也许是你自己的一部分。",
						"french": "Ce que tu combats… pourrait être une partie de toi-même.",
						"spanish": "Lo que estás combatiendo... podría ser una parte de ti mismo.",
						"vietnamese": "Những gì ngươi đang chiến đấu… có thể là một phần của chính ngươi.",
						"thai": "สิ่งที่คุณกำลังต่อสู้... อาจเป็นส่วนหนึ่งของตัวคุณเอง",
						"hindi": "जिससे तुम लड़ रहे हो... वह तुम्हारा ही एक हिस्सा हो सकता है।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "vex"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "vex",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "vex",
					"emotion": "base",
					"content": {
						"korean": "이 고리는 모든 존재의 욕망을 반영해 '완성'되는 거야.",
						"english": "This ring is 'completed' by reflecting the desires of all beings.",
						"japanese": "この環は、全ての存在の欲望を映し出して「完成」するんだ。",
						"chinese": "这个环，通过反映所有存在的欲望而‘完成’。",
						"french": "Cet anneau est 'achevé' en reflétant les désirs de tous les êtres.",
						"spanish": "Este anillo se 'completa' al reflejar los deseos de todos los seres.",
						"vietnamese": "Vòng này được 'hoàn thiện' bằng cách phản chiếu dục vọng của mọi sinh linh.",
						"thai": "วงแหวนนี้ 'สมบูรณ์' ได้ด้วยการสะท้อนความปรารถนาของสรรพสิ่ง",
						"hindi": "यह वलय सभी प्राणियों की इच्छाओं को प्रतिबिंबित करके 'पूर्ण' होता है।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "말도 안 돼.",
						"english": "That's absurd.",
						"japanese": "馬鹿な。",
						"chinese": "胡说八道。",
						"french": "C'est absurde.",
						"spanish": "Es absurdo.",
						"vietnamese": "Thật vô lý.",
						"thai": "ไร้สาระ",
						"hindi": "यह बकवास है।"
					},
					"emotion": "angry"
				},
				{
					"speaker": "vex",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "아니, 진짜야. 네 가장 강렬한 의지조차 고리가 자신을 완성하기 위한 재료가 될 뿐.",
						"english": "No, it's true. Even your most intense will merely becomes material for the ring to complete itself.",
						"japanese": "いや、本当だ。お前の最も強烈な意志すら、環が自身を完成させるための材料に過ぎない。",
						"chinese": "不，是真的。即使是你最强烈的意志，也只会成为环完成自身的材料。",
						"french": "Non, c'est vrai. Même ta volonté la plus intense ne fera que devenir un matériau pour que l'anneau se complète.",
						"spanish": "No, es verdad. Incluso tu voluntad más intensa solo se convertirá en material para que el anillo se complete.",
						"vietnamese": "Không, là thật. Ngay cả ý chí mãnh liệt nhất của ngươi cũng chỉ là nguyên liệu để Vòng tự hoàn thiện.",
						"thai": "ไม่ จริงสิ แม้แต่เจตจำนงที่แรงกล้าที่สุดของคุณก็เป็นเพียงวัตถุดิบที่วงแหวนจะนำไปใช้เพื่อทำให้ตัวเองสมบูรณ์",
						"hindi": "नहीं, यह सच है। तुम्हारी सबसे तीव्र इच्छा भी वलय को स्वयं को पूर्ण करने के लिए केवल एक सामग्री बनेगी।"
					}
				},
				{
					"speaker": "vex",
					"type": "speech",
					"content": {
						"korean": "네가 원하던 모든 것, 여기서 이뤄질 수 있어.",
						"english": "Everything you ever wanted, it can be realized here.",
						"japanese": "お前が望んだ全てが、ここで叶えられる。",
						"chinese": "你所渴望的一切，都可以在这里实现。",
						"french": "Tout ce que tu as toujours voulu, cela peut être réalisé ici.",
						"spanish": "Todo lo que siempre quisiste, puede hacerse realidad aquí.",
						"vietnamese": "Tất cả những gì ngươi từng mong muốn, đều có thể thành hiện thực ở đây.",
						"thai": "ทุกสิ่งที่คุณต้องการ สามารถเกิดขึ้นได้ที่นี่",
						"hindi": "जो कुछ भी तुम चाहते थे, वह सब यहाँ पूरा हो सकता है।"
					},
					"emotion": "happy"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "….",
						"english": "...",
						"japanese": "...",
						"chinese": "...",
						"french": "...",
						"spanish": "...",
						"vietnamese": "...",
						"thai": "...",
						"hindi": "..."
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "고리의 심연은 발버둥칠수록 더욱 깊어진다.",
						"english": "The abyss of the ring deepens the more you struggle.",
						"japanese": "環の深淵は、もがけばもがくほど深まる。",
						"chinese": "环之深渊，越是挣扎，越是深邃。",
						"french": "L'abîme de l'anneau s'approfondit plus tu luttes.",
						"spanish": "El abismo del anillo se profundiza cuanto más luchas.",
						"vietnamese": "Vực thẳm của Vòng càng sâu hơn khi ngươi càng vùng vẫy.",
						"thai": "ห้วงลึกของวงแหวนยิ่งลึกขึ้นเท่าไร คุณยิ่งดิ้นรนมากเท่านั้น",
						"hindi": "वलय का पाताल जितना अधिक तुम संघर्ष करते हो, उतना ही गहरा होता जाता है।"
					}
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "vex",
					"spot": [
						4,
						3
					]
				},
				{
					"speaker": "vex",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "네 신념? 네 의지? 결국 모두 고리의 일부가 될 운명이야.",
						"english": "Your beliefs? Your will? All are destined to become part of the Ring.",
						"japanese": "お前の信念？お前の意志？結局、全ては環の一部となる運命だ。",
						"chinese": "你的信念？你的意志？最终都注定成为环的一部分。",
						"french": "Tes convictions ? Ta volonté ? Tout est destiné à devenir une partie de l'Anneau.",
						"spanish": "¿Tus creencias? ¿Tu voluntad? Al final, todo está destinado a ser parte del Anillo.",
						"vietnamese": "Niềm tin của ngươi? Ý chí của ngươi? Cuối cùng, tất cả đều định trở thành một phần của Vòng.",
						"thai": "ความเชื่อของเจ้า? เจตจำนงของเจ้า? ท้ายที่สุด ทุกสิ่งล้วนถูกลิขิตให้เป็นส่วนหนึ่งของวงแหวน",
						"hindi": "तुम्हारी आस्था? तुम्हारी इच्छा? अंततः, सब कुछ चक्र का हिस्सा बनने के लिए नियत है。"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "나는 포기하지 않아.",
						"english": "I won't give up.",
						"japanese": "私は諦めない。",
						"chinese": "我不会放弃。",
						"french": "Je n'abandonnerai pas.",
						"spanish": "No me rendiré.",
						"vietnamese": "Ta sẽ không bỏ cuộc.",
						"thai": "ข้าจะไม่ยอมแพ้",
						"hindi": "मैं हार नहीं मानूँगा।"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "vex",
					"type": "speech",
					"content": {
						"korean": "그래, 그 의지조차 고리에 흡수될 아름다운 조각이 될 거야.",
						"english": "Yes, even that will shall become a beautiful piece absorbed by the Ring.",
						"japanese": "そう、その意志さえも環に吸収される美しい欠片となるだろう。",
						"chinese": "是的，即使那份意志也会成为被环吸收的美丽碎片。",
						"french": "Oui, même cette volonté deviendra une belle pièce absorbée par l'Anneau.",
						"spanish": "Sí, incluso esa voluntad se convertirá en una hermosa pieza absorbida por el Anillo.",
						"vietnamese": "Phải, ngay cả ý chí đó cũng sẽ trở thành một mảnh đẹp đẽ bị Vòng hấp thụ.",
						"thai": "ใช่ แม้แต่เจตจำนงนั้นก็จะกลายเป็นชิ้นส่วนอันงดงามที่ถูกดูดซับโดยวงแหวน",
						"hindi": "हाँ, वह इच्छा भी चक्र द्वारा समाहित एक सुंदर अंश बन जाएगी।"
					},
					"emotion": "happy"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이 길의 끝은 없어. 오직 고리만이 영원하지.",
						"english": "This path has no end. Only the Ring is eternal.",
						"japanese": "この道に終わりはない。永遠なのは環だけだ。",
						"chinese": "这条路没有尽头。只有环是永恒的。",
						"french": "Ce chemin n'a pas de fin. Seul l'Anneau est éternel.",
						"spanish": "Este camino no tiene fin. Solo el Anillo es eterno.",
						"vietnamese": "Con đường này không có hồi kết. Chỉ có Vòng là vĩnh cửu.",
						"thai": "เส้นทางนี้ไม่มีที่สิ้นสุด มีเพียงวงแหวนเท่านั้นที่เป็นนิรันดร์",
						"hindi": "इस राह का कोई अंत नहीं है। केवल चक्र ही शाश्वत है।"
					},
					"speaker": "vex"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "그림자가 짙게 깔렸다. 거대한 형체가 나타났다.",
						"english": "The shadows deepened. A colossal figure appeared.",
						"japanese": "影が深く広がり、巨大な姿が現れた。",
						"chinese": "阴影笼罩，一个巨大的身影出现了。",
						"french": "Les ombres s'épaissirent. Une silhouette colossale apparut.",
						"spanish": "Las sombras se hicieron más profundas. Una figura colosal apareció.",
						"vietnamese": "Bóng tối phủ dày đặc. Một hình thể khổng lồ xuất hiện.",
						"thai": "เงาปกคลุมหนาแน่น ร่างมหึมาปรากฏขึ้น",
						"hindi": "परछाईं गहरी हो गई। एक विशाल आकृति प्रकट हुई।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "어리석은 자. 고리의 의지를 거스르려는가?",
						"english": "Fool. Do you defy the will of the Ring?",
						"japanese": "愚かな者め。環の意志に逆らおうというのか？",
						"chinese": "愚蠢的家伙。你敢违抗环的意志吗？",
						"french": "Imbécile. Oserez-vous défier la volonté de l'Anneau ?",
						"spanish": "Necio. ¿Intentas desafiar la voluntad del Anillo?",
						"vietnamese": "Kẻ ngu muội. Ngươi dám chống lại ý chí của Vòng sao?",
						"thai": "เจ้าโง่เขลา เจ้ากล้าขัดขืนเจตจำนงของวงแหวนหรือ?",
						"hindi": "मूर्ख। क्या तुम चक्र की इच्छा का उल्लंघन करना चाहते हो?"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "너의 의지는 허상일 뿐. 곧 고리의 일부가 될 것이다.",
						"english": "Your will is but an illusion. Soon you will become part of the Ring.",
						"japanese": "お前の意志は幻影に過ぎない。すぐに環の一部となるだろう。",
						"chinese": "你的意志不过是虚妄。很快你就会成为环的一部分。",
						"french": "Ta volonté n'est qu'une illusion. Bientôt, tu feras partie de l'Anneau.",
						"spanish": "Tu voluntad no es más que una ilusión. Pronto serás parte del Anillo.",
						"vietnamese": "Ý chí của ngươi chỉ là ảo ảnh. Ngươi sẽ sớm trở thành một phần của Vòng.",
						"thai": "เจตจำนงของเจ้าเป็นเพียงภาพลวงตา ไม่นานเจ้าจะกลายเป็นส่วนหนึ่งของวงแหวน",
						"hindi": "तुम्हारी इच्छा केवल एक भ्रम है। शीघ्र ही तुम चक्र का हिस्सा बन जाओगे।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "나는 내 길을 간다!",
						"english": "I walk my own path!",
						"japanese": "私は私の道を行く！",
						"chinese": "我走我自己的路！",
						"french": "Je suis mon propre chemin !",
						"spanish": "¡Sigo mi propio camino!",
						"vietnamese": "Ta đi theo con đường của riêng ta!",
						"thai": "ข้าจะไปตามทางของข้า!",
						"hindi": "मैं अपनी राह चलूँगा!"
					},
					"type": "speech"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 흔들리더니, 이내 사라졌다.",
						"english": "The colossal shadow wavered, then vanished.",
						"japanese": "巨大な影が揺らめき、やがて消え去った。",
						"chinese": "巨大的黑影摇晃了一下，随后便消失了。",
						"french": "L'ombre colossale vacilla, puis disparut.",
						"spanish": "La sombra colosal vaciló y luego desapareció.",
						"vietnamese": "Bóng đen khổng lồ rung chuyển, rồi biến mất.",
						"thai": "เงาร่างมหึมาสั่นคลอน แล้วก็เลือนหายไป",
						"hindi": "विशाल परछाईं डगमगाई, फिर गायब हो गई।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "…아직, 끝나지 않았다. 고리의 의지는… 영원해…",
						"english": "...It's not over yet. The will of the Ring is... eternal...",
						"japanese": "…まだ、終わっていない。環の意志は…永遠だ…",
						"chinese": "……还没，结束。环的意志……永恒……",
						"french": "...Ce n'est pas encore fini. La volonté de l'Anneau est... éternelle...",
						"spanish": "...Aún no ha terminado. La voluntad del Anillo es... eterna...",
						"vietnamese": "...Chưa, kết thúc đâu. Ý chí của Vòng... vĩnh cửu...",
						"thai": "...ยังไม่จบ เจตจำนงของวงแหวนคือ... นิรันดร์...",
						"hindi": "...अभी, खत्म नहीं हुआ है। चक्र की इच्छा... शाश्वत है..."
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "헛소리 마.",
						"english": "Nonsense.",
						"japanese": "戯言はよせ。",
						"chinese": "少废话。",
						"french": "N'importe quoi.",
						"spanish": "Tonterías.",
						"vietnamese": "Vớ vẩn.",
						"thai": "ไร้สาระน่า",
						"hindi": "बकवास।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "벡스의 달콤한 유혹은 끝나지 않았다. 더 깊은 심연이 기다린다.",
						"english": "Bex's sweet temptation never ends. A deeper abyss awaits.",
						"japanese": "ベックスの甘い誘惑は終わらない。さらに深き奈落が待つ。",
						"chinese": "贝克斯的甜美诱惑尚未结束。更深的深渊在等待。",
						"french": "La douce tentation de Bex n'est pas finie. Un abîme plus profond vous attend.",
						"spanish": "La dulce tentación de Bex no ha terminado. Un abismo más profundo aguarda.",
						"vietnamese": "Sự cám dỗ ngọt ngào của Bex vẫn chưa kết thúc. Một vực thẳm sâu hơn đang chờ đợi.",
						"thai": "การล่อลวงอันหอมหวานของเบ็กซ์ยังไม่จบสิ้น ห้วงลึกที่มืดมิดกว่ารออยู่",
						"hindi": "बेक्स का मधुर प्रलोभन समाप्त नहीं हुआ है। एक गहरा पाताल इंतज़ार कर रहा है।"
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "고리의 파편이 몸을 휘감았다. 저항할 수 없었다.",
						"english": "Gori's fragments entwined me. I couldn't resist.",
						"japanese": "ゴーリの破片が体を絡めとった。抵抗できなかった。",
						"chinese": "戈里的碎片缠绕着身体。无法抵抗。",
						"french": "Les fragments de Gori m'ont enlacé. Je n'ai pas pu résister.",
						"spanish": "Los fragmentos de Gori me envolvieron. No pude resistir.",
						"vietnamese": "Mảnh vỡ của Gori quấn lấy cơ thể. Không thể kháng cự.",
						"thai": "เศษเสี้ยวของโกรีพันธนาการร่างไว้ ต้านทานไม่ได้เลย",
						"hindi": "गोरी के टुकड़े शरीर में लिपट गए। मैं विरोध नहीं कर सका।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "포기해라. 네 의지로는 고리를 막을 수 없어.",
						"english": "Give up. Your will alone cannot stop Gori.",
						"japanese": "諦めろ。お前の意志ではゴーリを止められない。",
						"chinese": "放弃吧。你的意志无法阻止戈里。",
						"french": "Abandonne. Ta volonté ne peut pas arrêter Gori.",
						"spanish": "Ríndete. Tu voluntad no puede detener a Gori.",
						"vietnamese": "Bỏ cuộc đi. Ý chí của ngươi không thể ngăn cản Gori.",
						"thai": "ยอมแพ้เสียเถอะ เจตจำนงของเจ้าไม่อาจหยุดยั้งโกรีได้หรอก",
						"hindi": "हार मान लो। तुम्हारी इच्छा गोरी को नहीं रोक सकती।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…아직… 아니야….",
						"english": "...Not... yet...",
						"japanese": "…まだ…。",
						"chinese": "…还没…",
						"french": "...Pas... encore...",
						"spanish": "...Todavía... no...",
						"vietnamese": "...Chưa... đâu...",
						"thai": "...ยัง...ไม่...",
						"hindi": "...अभी... नहीं..."
					},
					"emotion": "angry"
				}
			]
		}
	]
} as const;
