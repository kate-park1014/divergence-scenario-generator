export const scenario_snowy_fenrir_47_03 = {
	"scenario_id": "snowy_fenrir_47_03",
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
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "거대한 늑대의 형상을 이룬 수백의 뼈가 눈앞에 펼쳐졌다.",
						"english": "Hundreds of bones, forming the shape of a giant wolf, lay before them.",
						"japanese": "巨大な狼の形を成す数百の骨が目の前に広がった。",
						"chinese": "数百根骨骼，组成巨狼之形，展现在眼前。",
						"french": "Des centaines d'ossements, formant la silhouette d'un loup géant, s'étendaient devant eux.",
						"spanish": "Cientos de huesos, formando la figura de un lobo gigante, se extendían ante ellos.",
						"vietnamese": "Hàng trăm bộ xương, tạo thành hình một con sói khổng lồ, hiện ra trước mắt.",
						"thai": "กระดูกนับร้อยที่ก่อร่างเป็นหมาป่ายักษ์ปรากฏอยู่ตรงหน้า",
						"hindi": "सैकड़ों हड्डियाँ, एक विशाल भेड़िये का आकार लिए, उनके सामने बिछी थीं।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이게… 늑대라고?",
						"english": "This... is a wolf?",
						"japanese": "これ… 狼だと？",
						"chinese": "这… 是狼？",
						"french": "C'est... un loup ?",
						"spanish": "¿Esto... es un lobo?",
						"vietnamese": "Đây… là một con sói ư?",
						"thai": "นี่...คือหมาป่าเหรอ?",
						"hindi": "यह... एक भेड़िया है?"
					}
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						5,
						2
					],
					"speaker": "glace",
					"type": "direction"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "모두, 같은 곳을 향해 스러졌군.",
						"english": "All fell, facing the same spot.",
						"japanese": "皆、同じ場所へ倒れたか。",
						"chinese": "它们都朝着同一个方向倒下了。",
						"french": "Tous sont tombés, face au même endroit.",
						"spanish": "Todos cayeron, mirando al mismo lugar.",
						"vietnamese": "Tất cả đều ngã xuống, hướng về cùng một nơi.",
						"thai": "พวกมันล้มลงตรงจุดเดียวกันหมดเลย",
						"hindi": "सभी एक ही जगह की ओर गिर गए।"
					},
					"speaker": "glace"
				},
				{
					"content": {
						"korean": "무슨 뜻이야?",
						"english": "What do you mean?",
						"japanese": "どういう意味だ？",
						"chinese": "什么意思？",
						"french": "Que veux-tu dire ?",
						"spanish": "¿Qué quieres decir?",
						"vietnamese": "Ý anh là sao?",
						"thai": "หมายความว่าอะไร?",
						"hindi": "आपका क्या मतलब है?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_1"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "glace",
					"spot": [
						4,
						2
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "glace",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이 뼈들을 보아라.",
						"english": "Look at these bones.",
						"japanese": "この骨を見ろ。",
						"chinese": "看看这些骨头。",
						"french": "Regarde ces os.",
						"spanish": "Mira estos huesos.",
						"vietnamese": "Hãy nhìn những bộ xương này.",
						"thai": "ดูโครงกระดูกพวกนี้สิ",
						"hindi": "इन हड्डियों को देखो।"
					}
				},
				{
					"speaker": "glace",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "아무것도 먹지 못했어. 먹이의 흔적이 없어.",
						"english": "They ate nothing. No trace of prey.",
						"japanese": "何も食べていない。獲物の痕跡がない。",
						"chinese": "它们什么都没吃。没有猎物的痕迹。",
						"french": "Ils n'ont rien mangé. Aucune trace de proie.",
						"spanish": "No comieron nada. Ni rastro de presa.",
						"vietnamese": "Chúng không ăn gì cả. Không có dấu vết con mồi.",
						"thai": "พวกมันไม่ได้กินอะไรเลย ไม่มีร่องรอยของเหยื่อ",
						"hindi": "उन्होंने कुछ नहीं खाया। शिकार का कोई निशान नहीं।"
					}
				},
				{
					"content": {
						"korean": "굶어 죽었다는 거야?",
						"english": "Starved to death?",
						"japanese": "餓死したってこと？",
						"chinese": "饿死了吗？",
						"french": "Mort de faim ?",
						"spanish": "¿Murió de hambre?",
						"vietnamese": "Chết đói sao?",
						"thai": "อดตายแล้วเหรอ?",
						"hindi": "भूख से मर गया?"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_2"
				},
				{
					"speaker": "glace",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그래. 끝내 아무것도 삼키지 못하고, 함께 굶었지.",
						"english": "Yes. In the end, it couldn't swallow anything, and we starved together.",
						"japanese": "ええ。結局何も飲み込めず、共に飢えたんだ。",
						"chinese": "是的。最终什么都没能吞下，我们一起饿着。",
						"french": "Oui. Finalement, elle n'a rien pu avaler, et nous avons jeûné ensemble.",
						"spanish": "Sí. Al final, no pudo tragar nada, y nos morimos de hambre juntos.",
						"vietnamese": "Phải. Cuối cùng, nó chẳng nuốt được gì, và chúng tôi cùng đói.",
						"thai": "ใช่. สุดท้ายก็กลืนอะไรไม่ลง และเราก็อดอยากด้วยกัน.",
						"hindi": "हाँ। अंत में, वह कुछ भी निगल नहीं पाया, और हम सब साथ भूखे रहे।"
					}
				},
				{
					"content": {
						"korean": "…함께?",
						"english": "...Together?",
						"japanese": "…共に？",
						"chinese": "……一起？",
						"french": "...Ensemble ?",
						"spanish": "¿...Juntos?",
						"vietnamese": "...Cùng nhau?",
						"thai": "...ด้วยกัน?",
						"hindi": "...साथ में?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "glace",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "이건 한 마리의 마수가 아니야.",
						"english": "This isn't just one beast.",
						"japanese": "これは一匹の魔獣じゃない。",
						"chinese": "这不是一只魔兽。",
						"french": "Ce n'est pas une seule bête démoniaque.",
						"spanish": "Esto no es una sola bestia.",
						"vietnamese": "Đây không phải là một con ma thú.",
						"thai": "นี่ไม่ใช่สัตว์อสูรตัวเดียว.",
						"hindi": "यह एक जानवर नहीं है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "glace"
				},
				{
					"speaker": "glace",
					"content": {
						"korean": "수백의 허기, 그 응결이지.",
						"english": "It's the crystallization of hundreds of hungers.",
						"japanese": "数百の飢え、その凝結だ。",
						"chinese": "是数百饥饿的凝结。",
						"french": "C'est la condensation de centaines de faims.",
						"spanish": "Es la condensación de cientos de hambres.",
						"vietnamese": "Đó là sự ngưng đọng của hàng trăm cơn đói.",
						"thai": "มันคือการรวมตัวของความหิวโหยนับร้อย.",
						"hindi": "यह सैकड़ों भूख का संघनन है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_3",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그럼 늑대가 아니라고?",
						"english": "So it's not a wolf?",
						"japanese": "じゃあ狼じゃないと？",
						"chinese": "那不是狼？",
						"french": "Alors ce n'est pas un loup ?",
						"spanish": "¿Entonces no es un lobo?",
						"vietnamese": "Vậy không phải là sói sao?",
						"thai": "งั้นไม่ใช่หมาป่าเหรอ?",
						"hindi": "तो यह भेड़िया नहीं है?"
					}
				},
				{
					"speaker": "glace",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "오랫동안 굶주린, 한 무리의 무덤.",
						"english": "A tomb of a pack, starved for a long time.",
						"japanese": "長い間飢えた、一群れの墓標。",
						"chinese": "一群长期饥饿的坟墓。",
						"french": "Une tombe d'une meute, affamée depuis longtemps.",
						"spanish": "Una tumba de una manada, hambrienta desde hace mucho tiempo.",
						"vietnamese": "Một ngôi mộ của cả bầy, đói khát từ lâu.",
						"thai": "สุสานของฝูงที่อดอยากมานาน.",
						"hindi": "एक झुंड का कब्रिस्तान, जो लंबे समय से भूखा है।"
					}
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						2
					],
					"speaker": "glace",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "곧 알게 될 거다.",
						"english": "You'll know soon enough.",
						"japanese": "すぐにわかるだろう。",
						"chinese": "你们很快就会知道的。",
						"french": "Vous le saurez bientôt.",
						"spanish": "Lo sabrán pronto.",
						"vietnamese": "Ngươi sẽ sớm biết thôi.",
						"thai": "อีกไม่นานเจ้าก็จะรู้.",
						"hindi": "तुम्हें जल्द ही पता चल जाएगा।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "glace"
				},
				{
					"speaker": "glace",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이 존재의 심장을 꿰뚫으면, 너희도 그 굶주림을 느끼게 될 거야.",
						"english": "If you pierce the heart of this being, you too will feel its hunger.",
						"japanese": "この存在の心臓を貫けば、お前たちもその飢えを感じるだろう。",
						"chinese": "如果刺穿这个存在的心脏，你们也会感受到那份饥饿。",
						"french": "Si vous transpercez le cœur de cet être, vous ressentirez aussi sa faim.",
						"spanish": "Si atraviesan el corazón de este ser, ustedes también sentirán esa hambre.",
						"vietnamese": "Nếu ngươi xuyên thủng trái tim của sinh vật này, ngươi cũng sẽ cảm nhận được cơn đói đó.",
						"thai": "หากแทงทะลุหัวใจของสิ่งนี้ พวกเจ้าก็จะรู้สึกถึงความหิวโหยนั้นด้วย.",
						"hindi": "यदि तुम इस प्राणी के हृदय को भेद दोगे, तो तुम्हें भी उसकी भूख महसूस होगी।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…끝없는 허기인가.",
						"english": "...Endless hunger, then.",
						"japanese": "…終わりのない飢えか。",
						"chinese": "……无尽的饥饿吗。",
						"french": "...Une faim sans fin, donc.",
						"spanish": "¿...Un hambre sin fin?",
						"vietnamese": "...Cơn đói vô tận sao.",
						"thai": "...ความหิวโหยอันไม่สิ้นสุดงั้นเหรอ.",
						"hindi": "...क्या यह अंतहीन भूख है?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "그래. 수백 마리의, 영원히 채울 수 없는 허기.",
						"english": "Yes. Hundreds of them, an insatiable hunger.",
						"japanese": "ええ。数多の、永遠に満たされぬ飢えが。",
						"chinese": "没错。数百只，永无止境的饥饿。",
						"french": "Oui. Des centaines, une faim insatiable.",
						"spanish": "Sí. Cientos de ellas, un hambre insaciable.",
						"vietnamese": "Đúng vậy. Hàng trăm con, một cơn đói không bao giờ có thể lấp đầy.",
						"thai": "ใช่แล้ว ความหิวโหยนับร้อยที่ไม่มีวันอิ่มเอม",
						"hindi": "हाँ। सैकड़ों, एक कभी न भरने वाली भूख।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "glace"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 플레이어의 앞을 막아섰다. 수백의 뼈가 삐걱거리는 소리를 냈다.",
						"english": "A colossal shadow blocked the player's path. Hundreds of bones creaked.",
						"japanese": "巨大な影がプレイヤーの行く手を阻んだ。数百の骨が軋む音を立てた。",
						"chinese": "一道巨大的黑影挡住了玩家的去路。数百根骨头发出咯吱作响的声音。",
						"french": "Une ombre colossale barra le chemin du joueur. Des centaines d'os grincèrent.",
						"spanish": "Una sombra colosal bloqueó el camino del jugador. Cientos de huesos crujieron.",
						"vietnamese": "Một bóng đen khổng lồ chặn đường người chơi. Hàng trăm bộ xương kêu ken két.",
						"thai": "เงาขนาดมหึมาขวางเส้นทางของผู้เล่น กระดูกนับร้อยส่งเสียงเอี๊ยดอ๊าด",
						"hindi": "एक विशाल छाया ने खिलाड़ी का रास्ता रोक लिया। सैकड़ों हड्डियाँ चरमरा उठीं।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "새로운 먹이인가? 이젠 제법 힘이 붙었군.",
						"english": "New prey? You've grown quite strong now.",
						"japanese": "新たな獲物か？随分と力をつけたな。",
						"chinese": "新的猎物吗？现在你变得相当强了。",
						"french": "Une nouvelle proie ? Tu es devenu plutôt fort maintenant.",
						"spanish": "¿Nueva presa? Ahora te has vuelto bastante fuerte.",
						"vietnamese": "Con mồi mới à? Ngươi giờ cũng đã khá mạnh rồi đấy.",
						"thai": "เหยื่อใหม่รึ? เจ้าแข็งแกร่งขึ้นมากทีเดียวนี่",
						"hindi": "नया शिकार? तुम अब काफी मजबूत हो गए हो।"
					}
				},
				{
					"content": {
						"korean": "네 굶주림은… 여기서 끝이야.",
						"english": "Your hunger... ends here.",
						"japanese": "お前の飢えは…ここで終わりだ。",
						"chinese": "你的饥饿…到此为止了。",
						"french": "Ta faim… s'arrête ici.",
						"spanish": "Tu hambre… termina aquí.",
						"vietnamese": "Cơn đói của ngươi… sẽ kết thúc tại đây.",
						"thai": "ความหิวโหยของเจ้า... สิ้นสุดลงที่นี่",
						"hindi": "तुम्हारी भूख… यहीं खत्म होती है।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "glace",
					"spot": [
						4,
						2
					]
				},
				{
					"speaker": "glace",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "끝나지 않을 허기. 그것을 마주해라.",
						"english": "An unending hunger. Face it.",
						"japanese": "終わりのない飢え。それと向き合え。",
						"chinese": "永无止境的饥饿。去面对它吧。",
						"french": "Une faim sans fin. Fais-y face.",
						"spanish": "Un hambre interminable. Enfréntate a ella.",
						"vietnamese": "Cơn đói không hồi kết. Hãy đối mặt với nó.",
						"thai": "ความหิวโหยอันไม่สิ้นสุด จงเผชิญหน้ากับมัน",
						"hindi": "एक अंतहीन भूख। इसका सामना करो।"
					}
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "아직 배고프다… 너희도 언젠가 알게 될 거다. 이 끝없는 허기를.",
						"english": "Still hungry... You too will one day understand. This endless hunger.",
						"japanese": "まだ腹が減る…お前たちもいつか知るだろう。この終わりのない飢えを。",
						"chinese": "我依然饥饿…你们总有一天会明白的。这份无尽的饥饿。",
						"french": "Toujours faim… Vous aussi, un jour, vous comprendrez. Cette faim sans fin.",
						"spanish": "Todavía tengo hambre… Vosotros también, algún día, entenderéis. Esta hambre interminable.",
						"vietnamese": "Vẫn còn đói… Rồi một ngày nào đó các ngươi cũng sẽ hiểu thôi. Cơn đói không hồi kết này.",
						"thai": "ยังหิวอยู่... พวกเจ้าเองก็จะได้รู้ในสักวัน ความหิวโหยอันไม่สิ้นสุดนี้",
						"hindi": "अभी भी भूखा हूँ… तुम भी कभी न कभी समझोगे। इस अंतहीन भूख को।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "우리는 널 굶주리게 하지 않을 거야. 반드시.",
						"english": "We won't let you starve. We promise.",
						"japanese": "お前を飢えさせない。絶対に。",
						"chinese": "我们绝不会让你挨饿。",
						"french": "Nous ne te laisserons pas mourir de faim. Jamais.",
						"spanish": "No te dejaremos morir de hambre. Nunca.",
						"vietnamese": "Chúng tôi sẽ không để cậu phải đói đâu. Chắc chắn.",
						"thai": "เราจะไม่ปล่อยให้นายอดตายเด็ดขาด",
						"hindi": "हम तुम्हें भूखा नहीं मरने देंगे। कभी नहीं।"
					}
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…결국, 채우지 못했군. 이 허기를…",
						"english": "...In the end, it couldn't be satisfied. This hunger...",
						"japanese": "…結局、満たせなかったな。この飢えを…",
						"chinese": "…最终，还是没能满足。这饥饿…",
						"french": "...Au final, elle n'a pas pu être satisfaite. Cette faim...",
						"spanish": "...Al final, no pudo ser saciada. Esta hambre...",
						"vietnamese": "...Cuối cùng, vẫn không thể lấp đầy. Cơn đói này...",
						"thai": "...ในที่สุดก็ยังไม่สามารถเติมเต็มได้ ความหิวโหยนี้...",
						"hindi": "...आखिरकार, यह संतुष्ट नहीं हुई। यह भूख..."
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "네 굶주림이… 우리에게 닿을 일은 없을 거야.",
						"english": "Your hunger... will never reach us.",
						"japanese": "お前の飢えが…我らに届くことはないだろう。",
						"chinese": "你的饥饿…永远不会触及我们。",
						"french": "Ta faim… ne nous atteindra jamais.",
						"spanish": "Tu hambre… nunca nos alcanzará.",
						"vietnamese": "Cơn đói của ngươi… sẽ không bao giờ chạm tới chúng ta được.",
						"thai": "ความหิวโหยของเจ้า... ไม่มีทางมาถึงเราได้หรอก",
						"hindi": "तुम्हारी भूख… हम तक कभी नहीं पहुँचेगी।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"spot": [
						3,
						2
					],
					"speaker": "glace",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…허기는, 다른 허기를 부른다.",
						"english": "...Hunger calls to other hunger.",
						"japanese": "…飢えは、別の飢えを呼ぶ。",
						"chinese": "…饥饿，会招致另一种饥饿。",
						"french": "...La faim, appelle une autre faim.",
						"spanish": "...El hambre, llama a otra hambre.",
						"vietnamese": "...Cơn đói, lại gọi mời một cơn đói khác.",
						"thai": "...ความหิวโหย ย่อมเรียกหาความหิวโหยอื่น",
						"hindi": "...भूख, दूसरी भूख को बुलाती है।"
					},
					"speaker": "glace"
				},
				{
					"content": {
						"korean": "수백의 굶주림이 하나로 뭉쳐, 또 다른 허기를 낳았다. 끝없는 고리였다.",
						"english": "Hundreds of hungers merged into one, giving birth to yet another. It was an endless cycle.",
						"japanese": "数百の飢えが一つにcoalescedし、また新たな飢えを生んだ。それは終わりのない輪だった。",
						"chinese": "数百种饥饿融为一体，又催生了另一种饥饿。这是一个无尽的循环。",
						"french": "Des centaines de faims fusionnèrent en une, donnant naissance à une autre. C'était un cycle sans fin.",
						"spanish": "Cientos de hambres se fusionaron en una, dando a luz a otra. Era un ciclo sin fin.",
						"vietnamese": "Hàng trăm cơn đói hợp lại thành một, sinh ra một cơn đói khác. Đó là một vòng lặp không hồi kết.",
						"thai": "ความหิวโหยนับร้อยรวมเป็นหนึ่ง ก่อกำเนิดความหิวโหยอื่น นี่คือวงจรที่ไม่มีวันสิ้นสุด",
						"hindi": "सैकड़ों भूखें एक में विलीन हो गईं, और एक और भूख को जन्म दिया। यह एक अंतहीन चक्र था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"얼어붙은 뼈의 심장부.",
			"수백의 허기가 한 방향을 향했다.",
			"먹지 못해 스러진 무리, 함께 굶주렸다.",
			"그 진실을 직시하는 자, 글라세가 나타났다."
		],
		"english": [
			"Heart of frozen bone.",
			"Hundreds of hungers turned in one direction.",
			"A host withered, unfed, starving together.",
			"Glase appeared, facing that truth."
		],
		"japanese": [
			"凍てつく骨の心臓部。",
			"何百もの飢えが一方向へ向かった。",
			"食せず朽ちた群れ、共に飢え続けた。",
			"その真実を直視する者、グラッセが現れた。"
		],
		"chinese": [
			"冰封骨骼的深处。",
			"数百饥饿，指向一处。",
			"未食而亡的群落，一同饥饿。",
			"直面真相之人，格拉丝现身。"
		],
		"french": [
			"Cœur d'os gelé.",
			"Des centaines de faims se sont tournées dans une seule direction.",
			"Une horde flétrie, sans nourriture, affamée ensemble.",
			"Glase apparut, faisant face à cette vérité."
		],
		"spanish": [
			"Corazón de hueso congelado.",
			"Cientos de hambres se dirigieron en una sola dirección.",
			"Una horda marchita, sin alimento, muriendo de hambre juntos.",
			"Glase apareció, confrontando esa verdad."
		],
		"vietnamese": [
			"Trái tim của xương đóng băng.",
			"Hàng trăm cơn đói hướng về một phía.",
			"Đàn không được ăn, cùng nhau chết đói.",
			"Glase xuất hiện, đối mặt với sự thật đó."
		],
		"thai": [
			"ใจกลางกระดูกเยือกแข็ง",
			"ความหิวโหยนับร้อยมุ่งหน้าสู่ทิศทางเดียว",
			"ฝูงชนที่อ่อนแรงเพราะไม่ได้กินอาหาร อดอยากไปด้วยกัน",
			"ผู้ที่เผชิญหน้ากับความจริงนั้น Glase ได้ปรากฏตัวขึ้น"
		],
		"hindi": [
			"जमे हुए हड्डियों का हृदय।",
			"सैकड़ों भूखें एक ही दिशा में मुड़ गईं।",
			"एक समूह जो बिना खाए मुरझा गया, सब एक साथ भूखे मर रहे थे।",
			"उस सच्चाई का सामना करने वाला, ग्लासे प्रकट हुआ।"
		]
	}
} as const;
