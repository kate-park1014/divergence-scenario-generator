export const scenario_forest_sloth_echo_02 = {
	"scenario_id": "forest_sloth_echo_02",
	"order": 2,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"bracken": {
			"id": "mon_48cf29be-dbc0-44b1-bbb3-ecda1d14742d",
			"name": {
				"korean": "브라켄",
				"english": "Bracken",
				"japanese": "ブラッケン",
				"chinese": "布莱肯",
				"french": "Bracken",
				"spanish": "Bracken",
				"vietnamese": "Bracken",
				"thai": "แบรกเคน",
				"hindi": "ब्रैकेन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5b494da6-ffd7-43d3-7171-7ac84bdfe400/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/4a7a1b62-d7a7-4a21-ffd5-fa9b5de82100/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"숲의 문이 열렸다. 세상은 고요함이라는 이름의 그림자에 잠식됐다.",
			"활력을 잃어가는 사람들. 그들은 숲의 안식을 그리워했다.",
			"하지만 그 안식은 달콤한 독. 과거의 탐험자는 다시 숲으로 돌아가려 한다.",
			"중독된 평화 속에서, 진정한 활력을 찾기 위한 싸움이 시작된다."
		],
		"english": [
			"The forest gate opened. The world was engulfed by a shadow named serenity.",
			"People losing vitality. They longed for the forest's tranquility.",
			"But that tranquility was sweet poison. An explorer from the past tries to return to the forest.",
			"In an addicted peace, the fight to find true vitality begins."
		],
		"japanese": [
			"森の扉が開いた。世界は静寂という名の影に侵食された。",
			"活力を失っていく人々。彼らは森の安息を恋しがった。",
			"しかし、その安息は甘い毒。過去の探検者は再び森へ戻ろうとする。",
			"耽溺した平和の中で、真の活力を見つけるための戦いが始まる。"
		],
		"chinese": [
			"森林之门敞开。世界被名为寂静的阴影吞噬。",
			"失去活力的人们。他们渴望森林的安宁。",
			"但那份安宁是甜蜜的毒药。过去的探险者试图重返森林。",
			"在沉溺的和平中，寻找真正活力的战斗开始了。"
		],
		"french": [
			"La porte de la forêt s'est ouverte. Le monde a été englouti par une ombre nommée sérénité.",
			"Des gens perdant leur vitalité. Ils aspiraient à la tranquillité de la forêt.",
			"Mais cette tranquillité était un doux poison. Un ancien explorateur tente de retourner dans la forêt.",
			"Dans une paix addictive, la lutte pour retrouver une vraie vitalité commence."
		],
		"spanish": [
			"La puerta del bosque se abrió. El mundo fue engullido por una sombra llamada serenidad.",
			"Gente perdiendo vitalidad. Anhelaban la tranquilidad del bosque.",
			"Pero esa tranquilidad era un dulce veneno. Un explorador del pasado intenta regresar al bosque.",
			"En una paz adictiva, la lucha por encontrar la verdadera vitalidad comienza."
		],
		"vietnamese": [
			"Cánh cổng rừng đã mở. Thế giới chìm vào bóng tối mang tên tĩnh lặng.",
			"Những người dần mất đi sức sống. Họ khao khát sự yên bình của rừng.",
			"Nhưng sự yên bình ấy là chất độc ngọt ngào. Nhà thám hiểm quá khứ cố gắng trở về rừng.",
			"Trong hòa bình nghiện ngập, cuộc chiến tìm lại sức sống thật sự bắt đầu."
		],
		"thai": [
			"ประตูป่าเปิดออก โลกถูกกลืนกินด้วยเงาที่ชื่อว่าความสงบ",
			"ผู้คนที่สูญเสียชีวิตชีวา พวกเขาโหยหาความสงบสุขของป่า",
			"แต่ความสงบนั้นคือน้ำหวานพิษ นักสำรวจในอดีตพยายามกลับเข้าป่าอีกครั้ง",
			"ท่ามกลางสันติภาพที่เป็นพิษ การต่อสู้เพื่อค้นหาชีวิตชีวาที่แท้จริงจึงเริ่มต้นขึ้น"
		],
		"hindi": [
			"वन का द्वार खुला। दुनिया खामोशी नाम की छाया में समा गई।",
			"लोग अपनी शक्ति खो रहे थे। उन्हें जंगल की शांति की याद सता रही थी।",
			"पर वह शांति एक मीठा ज़हर थी। अतीत का एक खोजकर्ता फिर से जंगल में लौटना चाहता है।",
			"नशे वाली शांति में, सच्ची शक्ति खोजने की लड़ाई शुरू होती है।"
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
						"korean": "세상은 느려졌다. 사람들은 잃어버린 활기를 찾지 못했다.",
						"english": "The world slowed. People couldn't find their lost vitality.",
						"japanese": "世界は緩やかになった。人々は失われた活気を見つけられなかった。",
						"chinese": "世界慢了下来。人们无法找回失去的活力。",
						"french": "Le monde a ralenti. Les gens n'ont pas retrouvé leur vitalité perdue.",
						"spanish": "El mundo se ralentizó. La gente no pudo encontrar su vitalidad perdida.",
						"vietnamese": "Thế giới chậm lại. Mọi người không tìm thấy sức sống đã mất.",
						"thai": "โลกช้าลง ผู้คนไม่สามารถหาชีวิตชีวาที่หายไปได้",
						"hindi": "दुनिया धीमी हो गई। लोग अपनी खोई हुई शक्ति नहीं ढूंढ पाए।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "모두가 힘이 없어 보여.",
						"english": "Everyone seems weak.",
						"japanese": "みんな力なく見える。",
						"chinese": "每个人看起来都无精打采。",
						"french": "Tout le monde semble faible.",
						"spanish": "Todos parecen débiles.",
						"vietnamese": "Ai cũng trông yếu ớt.",
						"thai": "ทุกคนดูอ่อนแรง",
						"hindi": "सब कमजोर दिख रहे हैं।"
					},
					"emotion": "sad"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "bracken",
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "bracken",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "왜 이리 시끄럽지? 숲의 고요함이 그립군.",
						"english": "Why is it so noisy? I miss the forest's quiet.",
						"japanese": "なぜこんなに騒がしいんだ？森の静けさが恋しいな。",
						"chinese": "为什么这么吵？我怀念森林的宁静。",
						"french": "Pourquoi tant de bruit ? La tranquillité de la forêt me manque.",
						"spanish": "¿Por qué tanto ruido? Extraño la tranquilidad del bosque.",
						"vietnamese": "Sao mà ồn ào thế này? Tôi nhớ sự tĩnh lặng của rừng.",
						"thai": "ทำไมถึงได้เสียงดังขนาดนี้? ฉันคิดถึงความสงบของป่า",
						"hindi": "इतनी शोर क्यों है? मुझे जंगल की शांति याद आ रही है।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "숲? 당신도 숲에서 왔어?",
						"english": "Forest? You're from the forest too?",
						"japanese": "森？あなたも森から来たの？",
						"chinese": "森林？你也是从森林来的吗？",
						"french": "La forêt ? Toi aussi, tu viens de la forêt ?",
						"spanish": "¿Bosque? ¿Tú también vienes del bosque?",
						"vietnamese": "Rừng ư? Bạn cũng đến từ rừng sao?",
						"thai": "ป่าเหรอ? คุณก็มาจากป่าด้วยเหรอ?",
						"hindi": "जंगल? क्या तुम भी जंगल से आए हो?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그래. 난 브라켄. 숲을 탐험했던 자다.",
						"english": "Yes. I'm Braken. An explorer of the forest.",
						"japanese": "ああ。私はブラッケン。森を探検した者だ。",
						"chinese": "是的。我是布莱肯。一名森林探险者。",
						"french": "Oui. Je suis Braken. Un explorateur de la forêt.",
						"spanish": "Sí. Soy Braken. Un explorador del bosque.",
						"vietnamese": "Phải. Tôi là Braken. Kẻ đã thám hiểm rừng.",
						"thai": "ใช่ ฉันชื่อบราเคน นักสำรวจป่า",
						"hindi": "हाँ। मैं ब्रेकन हूँ। जंगल का एक खोजकर्ता।"
					},
					"emotion": "base",
					"speaker": "bracken",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이런 혼돈보다, 숲의 평화가 진짜 안식이었지.",
						"english": "Compared to this chaos, the peace of the forest was true tranquility.",
						"japanese": "この混沌よりも、森の平和こそが本当の安息だった。",
						"chinese": "比起这种混乱，森林的平静才是真正的安宁。",
						"french": "Comparé à ce chaos, la paix de la forêt était une véritable tranquillité.",
						"spanish": "Comparado con este caos, la paz del bosque era la verdadera tranquilidad.",
						"vietnamese": "So với sự hỗn loạn này, sự bình yên của rừng mới là sự an nghỉ thực sự.",
						"thai": "เทียบกับความวุ่นวายนี้แล้ว ความสงบของป่าคือสันติสุขที่แท้จริง",
						"hindi": "इस अराजकता से ज्यादा, जंगल की शांति ही असली सुकून थी।"
					},
					"emotion": "sad",
					"speaker": "bracken",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "bracken"
				},
				{
					"content": {
						"korean": "지금 세상은 너무나 빠르고, 혼란스러워.",
						"english": "The world now is too fast, too chaotic.",
						"japanese": "今の世はあまりにも速く、混沌としている。",
						"chinese": "现在的世界太快、太混乱了。",
						"french": "Le monde actuel est trop rapide, trop chaotique.",
						"spanish": "El mundo actual es demasiado rápido, demasiado caótico.",
						"vietnamese": "Thế giới giờ đây quá nhanh, quá hỗn loạn.",
						"thai": "โลกตอนนี้มันรวดเร็วและวุ่นวายเกินไป",
						"hindi": "आजकल दुनिया बहुत तेज़ और अराजक है।"
					},
					"emotion": "sad",
					"speaker": "bracken",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "하지만 숲의 고요함 때문에 모두가 무기력해지고 있잖아.",
						"english": "But the forest's silence is making everyone listless.",
						"japanese": "しかし、森の静寂が皆を無気力にさせているじゃないか。",
						"chinese": "但森林的宁静让所有人都变得无力。",
						"french": "Mais le silence de la forêt rend tout le monde léthargique.",
						"spanish": "Pero la quietud del bosque está volviendo a todos apáticos.",
						"vietnamese": "Nhưng sự tĩnh lặng của rừng đang khiến mọi người trở nên vô lực.",
						"thai": "แต่ความเงียบสงบของป่ากำลังทำให้ทุกคนเฉื่อยชา",
						"hindi": "लेकिन जंगल की शांति सबको सुस्त कर रही है।"
					},
					"emotion": "angry"
				},
				{
					"speaker": "bracken",
					"type": "speech",
					"content": {
						"korean": "그건 잠시 익숙하지 않아서일 뿐이야. 고요함 속에서 진정한 자신을 찾을 수 있지.",
						"english": "It's just unfamiliar for a moment. In silence, you can find your true self.",
						"japanese": "それは一瞬慣れていないだけだ。静寂の中で本当の自分を見つけられるだろう。",
						"chinese": "那只是暂时的不适应。在宁静中，你可以找到真正的自己。",
						"french": "C'est juste un manque d'habitude. Dans le silence, tu peux trouver ton vrai moi.",
						"spanish": "Es solo que no estás acostumbrado. En la quietud, puedes encontrar tu verdadero yo.",
						"vietnamese": "Đó chỉ là do chưa quen thôi. Trong tĩnh lặng, bạn có thể tìm thấy bản thân thật sự.",
						"thai": "มันแค่ชั่วคราวที่ไม่คุ้นเคย ในความเงียบสงบคุณจะพบตัวตนที่แท้จริงของคุณได้",
						"hindi": "यह बस थोड़े समय के लिए अपरिचित है। शांति में, तुम अपने असली रूप को पा सकते हो।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "그건 중독이야. 당신도 모르게 숲에 사로잡힌 거야.",
						"english": "That's an addiction. You've been unknowingly captivated by the forest.",
						"japanese": "それは中毒だ。君も知らず知らずのうちに森に囚われているんだ。",
						"chinese": "那是上瘾。你也在不知不觉中被森林束缚了。",
						"french": "C'est une addiction. Tu as été captivé par la forêt sans même le savoir.",
						"spanish": "Eso es una adicción. Has sido cautivado por el bosque sin darte cuenta.",
						"vietnamese": "Đó là một sự nghiện ngập. Bạn đã bị rừng giam cầm mà không hay biết.",
						"thai": "นั่นคือการเสพติด คุณถูกป่าครอบงำโดยไม่รู้ตัว",
						"hindi": "वह लत है। तुम अनजाने में जंगल में फँस गए हो।"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "bracken",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "중독이라고? 이 평화가?",
						"english": "Addiction? This peace?",
						"japanese": "中毒だと？この平和が？",
						"chinese": "上瘾？这份平静？",
						"french": "Une addiction ? Cette paix ?",
						"spanish": "¿Adicción? ¿Esta paz?",
						"vietnamese": "Nghiện ngập? Sự bình yên này sao?",
						"thai": "เสพติดเหรอ? สันติสุขนี่น่ะ?",
						"hindi": "लत? यह शांति?"
					}
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "bracken",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "브라켄의 눈은 이미 숲의 환상에 갇혀 있었다.",
						"english": "Bracken's eyes were already trapped in the forest's illusion.",
						"japanese": "ブラッケンの目はすでに森の幻想に囚われていた。",
						"chinese": "布拉肯的眼睛早已被困在森林的幻象中。",
						"french": "Les yeux de Bracken étaient déjà piégés dans l'illusion de la forêt.",
						"spanish": "Los ojos de Bracken ya estaban atrapados en la ilusión del bosque.",
						"vietnamese": "Mắt của Bracken đã bị mắc kẹt trong ảo ảnh của khu rừng.",
						"thai": "ดวงตาของแบร็คเคนถูกขังอยู่ในภาพลวงตาของป่าแล้ว",
						"hindi": "ब्रैकेन की आँखें पहले ही जंगल के भ्रम में फँस चुकी थीं।"
					},
					"emotion": "base"
				},
				{
					"speaker": "bracken",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "난 숲으로 돌아갈 거야. 그곳만이 내가 있을 곳이야.",
						"english": "I'll return to the forest. Only there do I belong.",
						"japanese": "私は森へ帰る。そこだけが私のいるべき場所だ。",
						"chinese": "我将回到森林。那里才是我该在的地方。",
						"french": "Je retournerai dans la forêt. Il n'y a que là que j'appartiens.",
						"spanish": "Volveré al bosque. Solo allí pertenezco.",
						"vietnamese": "Tôi sẽ trở về rừng. Chỉ ở đó tôi mới thuộc về.",
						"thai": "ฉันจะกลับไปที่ป่า ที่นั่นเท่านั้นคือที่ของฉัน",
						"hindi": "मैं जंगल में लौटूँगा। वही मेरी जगह है।"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "숲은 당신을 살게 두지 않을 거야. 우릴 좀 봐.",
						"english": "The forest won't let you live. Look at us.",
						"japanese": "森は君を生きさせないだろう。私たちを見てみろ。",
						"chinese": "森林不会让你活下去的。看看我们吧。",
						"french": "La forêt ne te laissera pas vivre. Regarde-nous.",
						"spanish": "El bosque no te dejará vivir. Míranos.",
						"vietnamese": "Rừng sẽ không để bạn sống đâu. Hãy nhìn chúng tôi này.",
						"thai": "ป่าจะไม่ปล่อยให้คุณมีชีวิตอยู่ ลองดูพวกเราสิ",
						"hindi": "जंगल तुम्हें जीने नहीं देगा। हमें देखो।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "아니. 이대로 세상에 남아봤자, 쇠퇴할 뿐이다.",
						"english": "No. Staying in this world will only lead to decay.",
						"japanese": "いや。このまま世界に残っても、衰退するだけだ。",
						"chinese": "不。就这样留在世界上，只会衰败。",
						"french": "Non. Rester dans ce monde ne mènera qu'à la décadence.",
						"spanish": "No. Quedarse en este mundo solo llevará a la decadencia.",
						"vietnamese": "Không. Cứ ở lại thế giới này, chỉ dẫn đến suy tàn mà thôi.",
						"thai": "ไม่ อยู่ในโลกนี้ต่อไปก็มีแต่จะเสื่อมถอย",
						"hindi": "नहीं। इस दुनिया में रहने से बस पतन ही होगा।"
					},
					"speaker": "bracken",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "그래서 포기할 거야? 당신은 더 강했잖아!",
						"english": "So you're giving up? You were stronger than this!",
						"japanese": "それで諦めるのか？君はもっと強かったはずだ！",
						"chinese": "所以你要放弃吗？你以前更强大啊！",
						"french": "Alors tu vas abandonner ? Tu étais plus fort que ça !",
						"spanish": "¿Así que vas a rendirte? ¡Eras más fuerte!",
						"vietnamese": "Vậy là bạn sẽ bỏ cuộc sao? Bạn đã từng mạnh mẽ hơn thế!",
						"thai": "แล้วคุณจะยอมแพ้เหรอ? คุณเคยแข็งแกร่งกว่านี้!",
						"hindi": "तो क्या तुम हार मान लोगे? तुम पहले से ज़्यादा मज़बूत थे!"
					}
				},
				{
					"speaker": "bracken",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "닥쳐! 너희는 아무것도 몰라!",
						"english": "Shut up! You know nothing!",
						"japanese": "黙れ！お前たちは何も知らない！",
						"chinese": "住口！你们什么都不知道！",
						"french": "Taisez-vous ! Vous ne savez rien !",
						"spanish": "¡Cállense! ¡No saben nada!",
						"vietnamese": "Im đi! Các ngươi chẳng biết gì cả!",
						"thai": "หุบปาก! พวกแกไม่รู้อะไรเลย!",
						"hindi": "चुप रहो! तुम कुछ नहीं जानते!"
					}
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"speaker": "bracken",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "브라켄의 발걸음이 무거워졌다. 숲의 그림자가 그를 덮쳤다.",
						"english": "Bracken's steps grew heavy. The forest's shadow enveloped him.",
						"japanese": "ブラッケンの足取りが重くなった。森の影が彼を覆った。",
						"chinese": "布莱肯的脚步沉重起来。森林的阴影笼罩了他。",
						"french": "Les pas de Bracken devinrent lourds. L'ombre de la forêt l'enveloppa.",
						"spanish": "Los pasos de Bracken se hicieron pesados. La sombra del bosque lo envolvió.",
						"vietnamese": "Bước chân của Bracken nặng nề. Bóng tối của rừng bao trùm lấy anh.",
						"thai": "ฝีเท้าของแบรคเค่นหนักอึ้งขึ้น เงาของป่าปกคลุมเขา",
						"hindi": "ब्रैकेन के कदम भारी हो गए। जंगल की छाया ने उसे घेर लिया।"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "흐읍… 이 고요함… 난 다시 숲으로 돌아갈 수 있을까…",
						"english": "Hmm... This silence... Can I ever return to the forest...?",
						"japanese": "ふぅ… この静けさ… 私は再び森へ帰れるだろうか…",
						"chinese": "呼… 这寂静… 我还能回到森林吗…",
						"french": "Hmm… Ce silence… Pourrai-je jamais retourner dans la forêt… ?",
						"spanish": "Hmm… Este silencio… ¿Podré volver al bosque alguna vez…?",
						"vietnamese": "Hừm… Sự tĩnh lặng này… Liệu ta có thể trở về rừng lần nữa không…?",
						"thai": "หึม... ความเงียบงันนี้... ฉันจะกลับไปที่ป่าได้อีกไหม...",
						"hindi": "उफ़… यह खामोशी… क्या मैं फिर से जंगल लौट पाऊँगा…?"
					},
					"speaker": "bracken",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "봐, 브라켄. 숲은 당신에게 안식을 주지 않아. 그저 천천히 죽일 뿐이지.",
						"english": "Look, Bracken. The forest offers no peace. It only slowly kills you.",
						"japanese": "見ろ、ブラッケン。森はお前を安息させない。ただゆっくりと殺すだけだ。",
						"chinese": "看啊，布莱肯。森林不会给你安宁。它只会慢慢地杀死你。",
						"french": "Regarde, Bracken. La forêt ne t'offre aucun repos. Elle ne fait que te tuer lentement.",
						"spanish": "Mira, Bracken. El bosque no te da paz. Solo te mata lentamente.",
						"vietnamese": "Nhìn kìa, Bracken. Rừng không cho ngươi sự bình yên. Nó chỉ từ từ giết chết ngươi thôi.",
						"thai": "ดูสิ แบรคเค่น ป่าไม่ได้ให้ความสงบแก่เจ้า มันแค่จะฆ่าเจ้าอย่างช้าๆ",
						"hindi": "देखो, ब्रैकेन। जंगल तुम्हें शांति नहीं देगा। वह तुम्हें धीरे-धीरे मार डालेगा।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "…그럼 난 뭘 해야 하지? 어디로 가야 해?",
						"english": "...Then what should I do? Where should I go?",
						"japanese": "…じゃあ、私は何をすればいい？どこへ行けばいいんだ？",
						"chinese": "…那我该怎么办？该去哪里？",
						"french": "...Alors, que dois-je faire ? Où dois-je aller ?",
						"spanish": "...Entonces, ¿qué debo hacer? ¿Adónde debo ir?",
						"vietnamese": "…Vậy ta phải làm gì? Phải đi đâu?",
						"thai": "...แล้วฉันควรทำอะไร? ฉันควรไปที่ไหน?",
						"hindi": "…तो मुझे क्या करना चाहिए? कहाँ जाना चाहिए?"
					},
					"emotion": "sad",
					"speaker": "bracken",
					"type": "speech"
				},
				{
					"content": {
						"korean": "우리와 함께 싸우는 거야. 이 가짜 평화와 싸워야 해.",
						"english": "You fight with us. You must fight this false peace.",
						"japanese": "私たちと共に戦うんだ。この偽りの平和と戦うべきだ。",
						"chinese": "和我们一起战斗。你必须对抗这虚假的和平。",
						"french": "Tu te bats avec nous. Tu dois combattre cette fausse paix.",
						"spanish": "Lucha con nosotros. Debes luchar contra esta falsa paz.",
						"vietnamese": "Ngươi phải chiến đấu cùng chúng ta. Ngươi phải chiến đấu chống lại sự bình yên giả dối này.",
						"thai": "เจ้าต้องสู้ไปพร้อมกับเรา เจ้าต้องสู้กับความสงบสุขจอมปลอมนี้",
						"hindi": "तुम हमारे साथ लड़ो। तुम्हें इस झूठी शांति से लड़ना होगा।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…싸운다고? 내가 뭘 위해…",
						"english": "...Fight? What for...?",
						"japanese": "…戦うだと？何のために…",
						"chinese": "…战斗？为了什么…",
						"french": "...Combattre ? Pour quoi faire... ?",
						"spanish": "...¿Luchar? ¿Para qué...?",
						"vietnamese": "…Chiến đấu ư? Để làm gì…?",
						"thai": "...สู้? เพื่ออะไร...?",
						"hindi": "…लड़ूँ? किस लिए…?"
					},
					"speaker": "bracken",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "어리석군… 고요함은 사라지지 않아. 그저 깊숙이 잠들어 있을 뿐…",
						"english": "Foolish... Serenity doesn't vanish. It merely sleeps deeply...",
						"japanese": "愚か者め… 静寂は消えない。ただ深く眠っているだけだ…",
						"chinese": "愚蠢… 宁静不会消失。它只是沉睡着…",
						"french": "Stupide... La sérénité ne disparaît pas. Elle ne fait que sommeiller profondément...",
						"spanish": "Qué ingenuos... La serenidad no desaparece. Solo duerme profundamente...",
						"vietnamese": "Ngốc nghếch... Sự tĩnh lặng không biến mất. Nó chỉ đang ngủ say thôi...",
						"thai": "โง่เขลา... ความสงบไม่เคยหายไป มันแค่หลับใหลอยู่ลึกๆ เท่านั้น...",
						"hindi": "मूर्ख… शांति कभी मिटती नहीं। वह बस गहरी नींद में सोई हुई है…"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그 잠든 것을 깨우지 못하게 할 거야.",
						"english": "I won't let you awaken what sleeps.",
						"japanese": "その眠れるものを、目覚めさせはしない。",
						"chinese": "我不会让你唤醒沉睡之物。",
						"french": "Je ne vous laisserai pas réveiller ce qui sommeille.",
						"spanish": "No permitiré que despiertes lo que duerme.",
						"vietnamese": "Ta sẽ không để ngươi đánh thức thứ đang ngủ đâu.",
						"thai": "ข้าจะไม่ยอมให้เจ้าปลุกสิ่งที่หลับใหลอยู่ขึ้นมา",
						"hindi": "मैं तुम्हें उसे जगाने नहीं दूंगा जो सो रहा है।"
					}
				},
				{
					"action": "enter",
					"spot": [
						2,
						3
					],
					"speaker": "bracken",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "숲의 진짜 평화는 고요함이 아니었어… 진실을 찾아야 해.",
						"english": "The forest's true peace wasn't serenity... I must find the truth.",
						"japanese": "森の本当の平和は静寂ではなかった… 真実を見つけなければ。",
						"chinese": "森林真正的和平并非宁静… 我必须找到真相。",
						"french": "La vraie paix de la forêt n'était pas la sérénité... Je dois trouver la vérité.",
						"spanish": "La verdadera paz del bosque no era la serenidad... Debo encontrar la verdad.",
						"vietnamese": "Sự bình yên thật sự của khu rừng không phải là sự tĩnh lặng... Ta phải tìm ra sự thật.",
						"thai": "ความสงบที่แท้จริงของป่าไม่ใช่ความเงียบสงบ... ข้าต้องค้นหาความจริง",
						"hindi": "जंगल की असली शांति खामोशी नहीं थी… मुझे सच खोजना होगा।"
					},
					"emotion": "sad",
					"speaker": "bracken",
					"type": "speech"
				},
				{
					"content": {
						"korean": "고요함의 메아리는 사라지지 않았다. 다만, 그 진실은 더 깊은 곳에 숨어 있었다.",
						"english": "The echo of serenity hasn't vanished. However, its truth was hidden deeper.",
						"japanese": "静寂のこだまは消えなかった。ただ、その真実はもっと深い場所に隠されていた。",
						"chinese": "宁静的回响并未消失。然而，其真相隐藏在更深之处。",
						"french": "L'écho de la sérénité n'a pas disparu. Cependant, sa vérité était cachée plus profondément.",
						"spanish": "El eco de la serenidad no ha desaparecido. Sin embargo, su verdad estaba oculta en lo más profundo.",
						"vietnamese": "Tiếng vọng của sự tĩnh lặng không biến mất. Tuy nhiên, sự thật đó lại ẩn sâu hơn nữa.",
						"thai": "เสียงสะท้อนของความสงบไม่ได้หายไป เพียงแต่ความจริงนั้นซ่อนอยู่ลึกกว่าเดิม",
						"hindi": "शांति की गूंज मिटी नहीं है। हालांकि, उसका सच और गहरे में छिपा था।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "세상의 균형을 깨뜨린 흔적을 쫓아, 탐험대는 다시 발걸음을 옮긴다.",
						"english": "Following the traces that broke the world's balance, the expedition moves forward once more.",
						"japanese": "世界の均衡を破った痕跡を追い、探検隊は再び歩みを進める。",
						"chinese": "追寻打破世界平衡的痕迹，探险队再次启程。",
						"french": "Suivant les traces qui ont brisé l'équilibre du monde, l'expédition reprend sa marche.",
						"spanish": "Siguiendo las huellas que rompieron el equilibrio del mundo, la expedición reanuda su marcha.",
						"vietnamese": "Theo dấu vết đã phá vỡ cân bằng của thế giới, đoàn thám hiểm lại tiếp tục lên đường.",
						"thai": "ตามรอยอดีตที่ทำลายสมดุลของโลก คณะสำรวจออกเดินทางอีกครั้ง",
						"hindi": "दुनिया के संतुलन को तोड़ने वाले निशानों का पीछा करते हुए, अभियान दल फिर से आगे बढ़ता है।"
					},
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 길을 막았다. 숲의 고요함이 형상화된 듯했다.",
						"english": "A colossal shadow blocked the path. It seemed as if the forest's stillness had taken form.",
						"japanese": "巨大な影が道を塞いだ。森の静寂が形になったかのようだった。",
						"chinese": "一个巨大的阴影挡住了去路。仿佛是森林的寂静具象化了。",
						"french": "Une ombre colossale bloquait le chemin. On aurait dit que le calme de la forêt avait pris forme.",
						"spanish": "Una sombra colosal bloqueó el camino. Parecía como si la quietud del bosque hubiera tomado forma.",
						"vietnamese": "Một bóng đen khổng lồ chặn đường. Như thể sự tĩnh lặng của rừng đã hiện hình.",
						"thai": "เงามืดมหึมาขวางทางอยู่ ราวกับความเงียบสงบของป่าได้ก่อตัวเป็นรูปร่าง",
						"hindi": "एक विशालकाय छाया ने रास्ता रोक दिया। ऐसा लगा मानो जंगल की शांति ने रूप ले लिया हो।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이곳이 너희의 안식처다. 영원한 고요함을 누려라.",
						"english": "This is your resting place. Enjoy eternal stillness.",
						"japanese": "ここがお前たちの安息の地だ。永遠の静寂を享受せよ。",
						"chinese": "这里是你们的安息之所。享受永恒的宁静吧。",
						"french": "Ceci est votre lieu de repos. Jouissez d'une quiétude éternelle.",
						"spanish": "Este es vuestro lugar de descanso. Disfruten de la quietud eterna.",
						"vietnamese": "Đây là nơi an nghỉ của các ngươi. Hãy tận hưởng sự tĩnh lặng vĩnh cửu.",
						"thai": "ที่นี่คือที่พักผ่อนของพวกเจ้า จงเพลิดเพลินกับความเงียบสงบชั่วนิรันดร์",
						"hindi": "यह तुम्हारी आरामगाह है। शाश्वत शांति का आनंद लो।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이건 안식이 아니야. 함정이지.",
						"english": "This isn't peace. It's a trap.",
						"japanese": "これは安息じゃない。罠だ。",
						"chinese": "这不是安息。这是陷阱。",
						"french": "Ce n'est pas la paix. C'est un piège.",
						"spanish": "Esto no es paz. Es una trampa.",
						"vietnamese": "Đây không phải là sự bình yên. Đây là một cái bẫy.",
						"thai": "นี่ไม่ใช่ความสงบ มันคือกับดัก",
						"hindi": "यह शांति नहीं है। यह एक जाल है।"
					},
					"emotion": "angry"
				},
				{
					"speaker": "bracken",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "맞아. 난 더 이상 속지 않아. 물러서라, {random_boss}!",
						"english": "That's right. I won't be fooled again. Stand back, {random_boss}!",
						"japanese": "そうだ。もう騙されない。下がれ、{random_boss}！",
						"chinese": "没错。我不会再被骗了。退下，{random_boss}！",
						"french": "C'est ça. Je ne me laisserai plus tromper. Recule, {random_boss} !",
						"spanish": "Así es. No me engañarás de nuevo. ¡Retírate, {random_boss}!",
						"vietnamese": "Đúng vậy. Ta sẽ không bị lừa nữa đâu. Lùi lại, {random_boss}!",
						"thai": "ใช่แล้ว ข้าไม่หลงกลอีกแล้ว ถอยไป, {random_boss}!",
						"hindi": "सही कहा। मैं अब और धोखा नहीं खाऊंगा। पीछे हटो, {random_boss}!"
					}
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "결국, 너희도 나의 고요함 속으로…",
						"english": "In the end, you too will fall into my serenity...",
						"japanese": "結局、お前たちも私の静寂の中へ…",
						"chinese": "最终，你们也将堕入我的宁静之中…",
						"french": "Finalement, vous aussi tomberez dans ma sérénité...",
						"spanish": "Al final, vosotros también caeréis en mi serenidad...",
						"vietnamese": "Cuối cùng, các ngươi cũng sẽ chìm vào sự tĩnh lặng của ta thôi...",
						"thai": "ในที่สุด พวกเจ้าก็จะเข้าสู่ความสงบของข้า...",
						"hindi": "अंततः, तुम भी मेरी खामोशी में समा जाओगे…"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "아니, 우린 포기하지 않아. 다시 일어설 거야.",
						"english": "No, we won't give up. We'll rise again.",
						"japanese": "いや、私たちは諦めない。再び立ち上がる。",
						"chinese": "不，我们不会放弃。我们会再次崛起。",
						"french": "Non, nous n'abandonnerons pas. Nous nous relèverons.",
						"spanish": "No, no nos rendiremos. Nos levantaremos de nuevo.",
						"vietnamese": "Không, chúng ta sẽ không bỏ cuộc. Chúng ta sẽ đứng dậy lần nữa.",
						"thai": "ไม่ เราจะไม่ยอมแพ้ เราจะลุกขึ้นสู้อีกครั้ง",
						"hindi": "नहीं, हम हार नहीं मानेंगे। हम फिर से खड़े होंगे।"
					},
					"emotion": "angry"
				},
				{
					"speaker": "bracken",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "이게 숲의 본모습이라면… 우리가 바꿔야 해.",
						"english": "If this is the forest's true nature... we must change it.",
						"japanese": "これが森の本当の姿なら… 私たちが変えなければならない。",
						"chinese": "如果这就是森林的真面目… 我们必须改变它。",
						"french": "Si telle est la vraie nature de la forêt... nous devons la changer.",
						"spanish": "Si esta es la verdadera naturaleza del bosque... debemos cambiarla.",
						"vietnamese": "Nếu đây là bản chất thật của khu rừng... chúng ta phải thay đổi nó.",
						"thai": "หากนี่คือธรรมชาติที่แท้จริงของป่า... เราต้องเปลี่ยนมัน",
						"hindi": "अगर यह जंगल का असली रूप है… तो हमें इसे बदलना होगा।"
					},
					"emotion": "angry",
					"speaker": "bracken",
					"type": "speech"
				}
			]
		}
	]
} as const;
