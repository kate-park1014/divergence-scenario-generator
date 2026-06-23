export const scenario_hell_deliriumrift_10_04 = {
	"scenario_id": "hell_deliriumrift_10_04",
	"order": 4,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"ash": {
			"id": "mon_b225f5fa-59a1-47bb-b4c5-e73bf9e7192a",
			"name": {
				"korean": "애쉬",
				"english": "Ash",
				"japanese": "アッシュ",
				"chinese": "艾什",
				"french": "Ash",
				"spanish": "Ash",
				"vietnamese": "Ash",
				"thai": "แอช",
				"hindi": "ऐश"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/d84413a8-9d6f-4a40-5d36-75e431fb9900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/78281fca-e4b8-45cc-68ef-7df3fef74200/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"세계는 더욱 깊은 미궁으로 빠져들었다.",
			"익숙한 길잡이, 애쉬는 여전히 탐험대를 이끌었다.",
			"그러나 그의 그림자 속엔 알 수 없는 의도가 숨겨져 있었다.",
			"조각난 진실, 반복되는 허무. 이미 모든 것이 늦은 것처럼 느껴졌다."
		],
		"english": [
			"The world sank deeper into the labyrinth.",
			"Ash, the familiar guide, still led the expedition.",
			"But an unknown intent lurked in his shadow.",
			"Fragmented truth, recurring futility. Everything felt too late."
		],
		"japanese": [
			"世界はさらに深い迷宮へと落ちていった。",
			"慣れた案内人、アッシュは相変わらず探検隊を率いた。",
			"しかし、彼の影には未知の意図が隠されていた。",
			"断片的な真実、繰り返される虚無。すべてが手遅れに感じられた。"
		],
		"chinese": [
			"世界陷入了更深的迷宫。",
			"熟悉的向导艾什依然带领着探险队。",
			"然而，他的影子中隐藏着不为人知的意图。",
			"支离破碎的真相，重复的虚无。一切都似乎为时已晚。"
		],
		"french": [
			"Le monde s'enfonçait dans un labyrinthe encore plus profond.",
			"Ash, le guide familier, menait toujours l'expédition.",
			"Cependant, une intention inconnue se cachait dans son ombre.",
			"Vérité fragmentée, futilité récurrente. Tout semblait déjà trop tard."
		],
		"spanish": [
			"El mundo se sumergió en un laberinto aún más profundo.",
			"Ash, el guía conocido, seguía liderando la expedición.",
			"Sin embargo, una intención desconocida acechaba en su sombra.",
			"Verdades fragmentadas, futilidad recurrente. Ya todo parecía demasiado tarde."
		],
		"vietnamese": [
			"Thế giới chìm sâu hơn vào mê cung.",
			"Người dẫn đường quen thuộc, Ash, vẫn dẫn đầu đoàn thám hiểm.",
			"Tuy nhiên, một ý đồ không rõ ẩn giấu trong bóng tối của anh.",
			"Sự thật rời rạc, vô vọng lặp lại. Mọi thứ dường như đã quá muộn."
		],
		"thai": [
			"โลกดำดิ่งลงสู่เขาวงกตที่ลึกยิ่งกว่าเดิม",
			"แอช ผู้นำทางที่คุ้นเคย ยังคงนำทีมนักสำรวจ",
			"ทว่า ความตั้งใจที่ไม่รู้อะไรซ่อนอยู่ในเงามืดของเขา",
			"ความจริงที่แตกสลาย ความว่างเปล่าที่ซ้ำซาก ทุกสิ่งดูเหมือนจะสายเกินไปแล้ว"
		],
		"hindi": [
			"दुनिया एक गहरे भुलभुलैया में धँस गई।",
			"परिचित मार्गदर्शक, ऐश, अभी भी अभियान का नेतृत्व कर रहा था।",
			"लेकिन उसकी परछाई में एक अनजान इरादा छिपा था।",
			"खंडित सत्य, दोहराया जाने वाला व्यर्थता। सब कुछ पहले ही बहुत देर हो चुका था।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "뒤틀린 공간 속, 낯익은 그림자가 다시 나타났다.",
						"english": "In the warped space, a familiar shadow reappeared.",
						"japanese": "歪んだ空間の中、見慣れた影が再び現れた。",
						"chinese": "在扭曲的空间中，一个熟悉的身影再次出现。",
						"french": "Dans l'espace déformé, une ombre familière réapparut.",
						"spanish": "En el espacio retorcido, una sombra familiar reapareció.",
						"vietnamese": "Trong không gian méo mó, một bóng hình quen thuộc lại xuất hiện.",
						"thai": "ในพื้นที่ที่บิดเบี้ยว เงาที่คุ้นเคยก็ปรากฏขึ้นอีกครั้ง",
						"hindi": "विकृत स्थान में, एक परिचित परछाई फिर से प्रकट हुई।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "ash",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "ash",
					"content": {
						"korean": "왔군. 이제 더 깊은 곳으로 가야 해.",
						"english": "You're here. We must go deeper now.",
						"japanese": "来たな。もう深い場所へ行くぞ。",
						"chinese": "你来了。现在我们得去更深的地方。",
						"french": "Tu es là. Nous devons aller plus loin maintenant.",
						"spanish": "Estás aquí. Ahora debemos ir más profundo.",
						"vietnamese": "Ngươi đến rồi. Giờ chúng ta phải đi sâu hơn nữa.",
						"thai": "มาแล้วสินะ ตอนนี้เราต้องไปให้ลึกกว่าเดิม",
						"hindi": "तुम आ गए। अब हमें और गहरे जाना होगा।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…정말 이 길이 맞아?",
						"english": "...Is this really the right way?",
						"japanese": "…本当にこの道で合ってるのか？",
						"chinese": "…这真的是正确的路吗？",
						"french": "...Est-ce vraiment le bon chemin ?",
						"spanish": "¿Es este realmente el camino correcto?",
						"vietnamese": "…Đây thật sự là con đường đúng chứ?",
						"thai": "…นี่คือทางที่ถูกต้องจริงหรือ?",
						"hindi": "…क्या यह सचमुच सही रास्ता है?"
					},
					"emotion": "base"
				},
				{
					"speaker": "ash",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "의심하지 마. 내가 아는 길은 하나뿐이야.",
						"english": "Don't doubt. I only know one path.",
						"japanese": "疑うな。俺が知っている道は一つだけだ。",
						"chinese": "别怀疑。我只知道一条路。",
						"french": "Ne doute pas. Je ne connais qu'un seul chemin.",
						"spanish": "No dudes. Solo conozco un camino.",
						"vietnamese": "Đừng nghi ngờ. Ta chỉ biết một con đường thôi.",
						"thai": "อย่าสงสัยเลย ฉันรู้ทางเดียวเท่านั้น",
						"hindi": "संदेह मत करो। मुझे केवल एक ही रास्ता पता है।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "공간은 더욱 기이하게 왜곡되고 있었다.",
						"english": "The space was warping even more strangely.",
						"japanese": "空間はさらに奇妙に歪んでいた。",
						"chinese": "空间正在变得更加奇异地扭曲。",
						"french": "L'espace se déformait de façon encore plus étrange.",
						"spanish": "El espacio se distorsionaba de forma aún más extraña.",
						"vietnamese": "Không gian càng lúc càng bị bóp méo kỳ lạ.",
						"thai": "พื้นที่บิดเบี้ยวอย่างประหลาดมากยิ่งขึ้น",
						"hindi": "स्थान और भी अजीब तरह से विकृत हो रहा था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction",
					"speaker": "ash"
				},
				{
					"speaker": "ash",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이쪽이야. 망설일 시간 없어.",
						"english": "This way. No time to hesitate.",
						"japanese": "こっちだ。ためらっている暇はない。",
						"chinese": "这边。没有时间犹豫了。",
						"french": "Par ici. Pas de temps à hésiter.",
						"spanish": "Por aquí. No hay tiempo para dudar.",
						"vietnamese": "Lối này. Không có thời gian để chần chừ.",
						"thai": "ทางนี้ ไม่มีเวลาลังเลแล้ว",
						"hindi": "इधर। झिझकने का समय नहीं है।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "전에 브림이… 네 눈이 이상하다고 했어.",
						"english": "Brim once said... your eyes are strange.",
						"japanese": "以前、ブリムが…君の目が変だと言っていた。",
						"chinese": "之前布莱姆说…你的眼睛很奇怪。",
						"french": "Brim a dit un jour… tes yeux sont étranges.",
						"spanish": "Brim dijo una vez... que tus ojos son extraños.",
						"vietnamese": "Brim từng nói... mắt cậu thật lạ.",
						"thai": "บริมเคยบอกว่า... ดวงตาของเจ้าน่ะแปลก",
						"hindi": "ब्रिम ने एक बार कहा था... तुम्हारी आँखें अजीब हैं।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "헛소리야. 그자는 늘 혼란만 줄 뿐이지.",
						"english": "Nonsense. He only ever brings confusion.",
						"japanese": "くだらない。あいつはいつも混乱を招くだけだ。",
						"chinese": "胡说八道。他只会制造混乱。",
						"french": "N'importe quoi. Il ne sème que la confusion.",
						"spanish": "Tonterías. Él solo causa confusión.",
						"vietnamese": "Vô lý. Hắn ta chỉ gây ra sự hỗn loạn thôi.",
						"thai": "ไร้สาระ หมอนั่นเอาแต่สร้างความสับสน",
						"hindi": "बकवास। वह हमेशा भ्रम ही पैदा करता है।"
					},
					"speaker": "ash",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "…저 문양, 전에 봤던 것 같아. 의미를 모르겠어.",
						"english": "...That symbol, I think I've seen it before. I don't know what it means.",
						"japanese": "…あの模様、前にも見たことがある気がする。意味はわからない。",
						"chinese": "…那个图案，我好像以前见过。不知道它是什么意思。",
						"french": "...Ce symbole, je crois l'avoir déjà vu. Je n'en connais pas la signification.",
						"spanish": "...Ese símbolo, creo haberlo visto antes. No sé qué significa.",
						"vietnamese": "...Cái biểu tượng đó, tôi nghĩ mình đã thấy nó trước đây. Tôi không biết ý nghĩa của nó.",
						"thai": "...สัญลักษณ์นั้น ฉันว่าเคยเห็นมาก่อน แต่ไม่รู้ความหมาย",
						"hindi": "...वह प्रतीक, मुझे लगता है मैंने इसे पहले देखा है। मुझे इसका मतलब नहीं पता।"
					},
					"emotion": "base"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"content": {
						"korean": "길은 점점 미궁 속으로 빠져드는 듯했다.",
						"english": "The path seemed to lead deeper into the labyrinth.",
						"japanese": "道は次第に迷宮の奥深くへと誘うようだった。",
						"chinese": "道路似乎越来越深入迷宫。",
						"french": "Le chemin semblait s'enfoncer de plus en plus dans le labyrinthe.",
						"spanish": "El camino parecía adentrarse cada vez más en el laberinto.",
						"vietnamese": "Con đường dường như dẫn sâu hơn vào mê cung.",
						"thai": "เส้นทางดูเหมือนจะนำไปสู่เขาวงกตที่ลึกขึ้นเรื่อยๆ",
						"hindi": "रास्ता भूलभुलैया में और गहरा होता जा रहा था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "ash",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"speaker": "ash",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이 조각을 가져. 곧 쓸모가 있을 거야.",
						"english": "Take this shard. It will be useful soon.",
						"japanese": "この破片を持っていけ。すぐに役立つだろう。",
						"chinese": "拿着这块碎片。它很快就会派上用场。",
						"french": "Prends ce fragment. Il te sera bientôt utile.",
						"spanish": "Toma este fragmento. Pronto será útil.",
						"vietnamese": "Hãy cầm lấy mảnh này. Nó sẽ sớm hữu ích thôi.",
						"thai": "เอาชิ้นส่วนนี้ไป มันจะมีประโยชน์ในไม่ช้า",
						"hindi": "यह टुकड़ा ले लो। यह जल्द ही काम आएगा।"
					}
				},
				{
					"content": {
						"korean": "이게 뭔데?",
						"english": "What is this?",
						"japanese": "これは何だ？",
						"chinese": "这是什么？",
						"french": "Qu'est-ce que c'est ?",
						"spanish": "¿Qué es esto?",
						"vietnamese": "Cái này là gì?",
						"thai": "นี่อะไรน่ะ?",
						"hindi": "यह क्या है?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "ash",
					"content": {
						"korean": "…알게 될 거야. 언젠가.",
						"english": "...You'll know. Someday.",
						"japanese": "…いずれわかるさ。いつか。",
						"chinese": "…你会知道的。总有一天。",
						"french": "...Tu le sauras. Un jour.",
						"spanish": "...Lo sabrás. Algún día.",
						"vietnamese": "...Cậu sẽ biết thôi. Một ngày nào đó.",
						"thai": "...เจ้าจะรู้เองสักวัน",
						"hindi": "...तुम्हें पता चल जाएगा। कभी न कभी।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이상해. 분명 빛났는데… 이젠 그냥 돌멩이 같아.",
						"english": "Strange. It clearly glowed... but now it's just like a common stone.",
						"japanese": "おかしい。確かに光っていたのに…今はただの石みたいだ。",
						"chinese": "奇怪。它明明发光了…但现在只像一块普通的石头。",
						"french": "Étrange. Il a clairement brillé... mais maintenant, c'est juste une pierre ordinaire.",
						"spanish": "Extraño. Claramente brillaba... pero ahora es solo una piedra común.",
						"vietnamese": "Kỳ lạ. Nó rõ ràng đã phát sáng... nhưng giờ thì chỉ như một hòn đá bình thường.",
						"thai": "แปลกจัง เมื่อกี้มันเรืองแสงได้แท้ๆ... แต่ตอนนี้มันก็แค่ก้อนหินธรรมดาๆ",
						"hindi": "अजीब। यह साफ चमक रहा था... लेकिन अब यह सिर्फ एक साधारण पत्थर जैसा है।"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "애쉬, 아까는 반대쪽으로 가라고 했잖아.",
						"english": "Ash, you told me to go the other way just now.",
						"japanese": "アッシュ、さっきは反対側に行けって言ったじゃないか。",
						"chinese": "艾什，你刚才不是说往另一边走吗？",
						"french": "Ash, tu m'as dit d'aller dans l'autre sens tout à l'heure.",
						"spanish": "Ash, acabas de decirme que fuera por el otro lado.",
						"vietnamese": "Ash, vừa nãy cậu bảo tôi đi đường ngược lại mà.",
						"thai": "แอช เมื่อกี้เธอบอกให้ฉันไปอีกทางไม่ใช่เหรอ",
						"hindi": "ऐश, तुमने अभी मुझे दूसरी तरफ जाने के लिए कहा था।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "ash",
					"content": {
						"korean": "기억의 왜곡일 뿐. 여긴 믿을 수 없는 공간이야.",
						"english": "It's just a distortion of memory. This place is not to be trusted.",
						"japanese": "記憶の歪みにすぎない。ここは信用できない空間だ。",
						"chinese": "这只是记忆的扭曲。这里是个不可信赖的空间。",
						"french": "Ce n'est qu'une distorsion de la mémoire. Cet endroit est indigne de confiance.",
						"spanish": "Es solo una distorsión de la memoria. No se puede confiar en este lugar.",
						"vietnamese": "Chỉ là sự bóp méo ký ức thôi. Nơi này không thể tin cậy được.",
						"thai": "มันเป็นแค่ความบิดเบือนของความทรงจำ ที่นี่เป็นสถานที่ที่เชื่อถือไม่ได้",
						"hindi": "यह सिर्फ याददाश्त का विकृति है। इस जगह पर भरोसा नहीं किया जा सकता।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "현실의 경계가 희미해졌다. 존재 자체가 흔들리는 듯했다.",
						"english": "The boundaries of reality blurred. Existence itself seemed to waver.",
						"japanese": "現実の境界が曖昧になった。存在そのものが揺らいでいるようだった。",
						"chinese": "现实的边界变得模糊。存在本身似乎也动摇了。",
						"french": "Les frontières de la réalité se sont estompées. L'existence même semblait vaciller.",
						"spanish": "Los límites de la realidad se difuminaron. La existencia misma parecía tambalearse.",
						"vietnamese": "Ranh giới thực tại mờ dần. Bản thể dường như rung chuyển.",
						"thai": "ขอบเขตของความเป็นจริงพร่าเลือน การดำรงอยู่ดูเหมือนจะสั่นคลอน",
						"hindi": "वास्तविकता की सीमाएँ धुंधली हो गईं। अस्तित्व ही डगमगा रहा था。"
					}
				},
				{
					"speaker": "ash",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "이제 선택의 여지는 없어. 앞으로만 갈 수 있어.",
						"english": "There's no choice left. We can only go forward.",
						"japanese": "もう選択の余地はない。前へ進むしかない。",
						"chinese": "已别无选择。我们只能前进。",
						"french": "Il n'y a plus le choix. On ne peut qu'avancer.",
						"spanish": "Ya no hay elección. Solo podemos avanzar.",
						"vietnamese": "Không còn lựa chọn nào khác. Chúng ta chỉ có thể tiến về phía trước.",
						"thai": "ไม่มีทางเลือกแล้ว เราทำได้แค่เดินหน้าต่อไป",
						"hindi": "अब कोई विकल्प नहीं। हम केवल आगे बढ़ सकते हैं।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "ash"
				},
				{
					"content": {
						"korean": "귓가에 이상한 소리가 들려… 이 모든 게 거짓 같아.",
						"english": "Strange sounds in my ears... All of this feels like a lie.",
						"japanese": "耳元で奇妙な音がする… このすべてが嘘のようだ。",
						"chinese": "耳边传来奇怪的声音……这一切都像是谎言。",
						"french": "Des bruits étranges à mes oreilles... Tout cela semble être un mensonge.",
						"spanish": "Extraños sonidos en mis oídos... Todo esto parece una mentira.",
						"vietnamese": "Những âm thanh kỳ lạ bên tai... Mọi thứ dường như là một lời dối trá.",
						"thai": "เสียงแปลกๆ ในหู... ทั้งหมดนี้เหมือนเป็นเรื่องโกหก",
						"hindi": "मेरे कानों में अजीब आवाजें... यह सब झूठ लगता है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "ash",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그건 너희의 나약함. 진실을 마주할 때가 온 거야.",
						"english": "That's your weakness. It's time to face the truth.",
						"japanese": "それはお前たちの弱さだ。真実と向き合う時が来たのだ。",
						"chinese": "那是你们的软弱。是时候面对真相了。",
						"french": "C'est votre faiblesse. Il est temps d'affronter la vérité.",
						"spanish": "Esa es vuestra debilidad. Es hora de enfrentar la verdad.",
						"vietnamese": "Đó là sự yếu đuối của các ngươi. Đã đến lúc đối mặt với sự thật.",
						"thai": "นั่นคือความอ่อนแอของพวกเจ้า ได้เวลาเผชิญหน้ากับความจริงแล้ว",
						"hindi": "वह तुम्हारी कमजोरी है। सच का सामना करने का समय आ गया है।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_3",
					"content": {
						"korean": "이미 늦은 것 같아. 우리가 뭘 할 수 있지?",
						"english": "It seems too late. What can we do?",
						"japanese": "もう手遅れな気がする。私たちに何ができる？",
						"chinese": "似乎已经太迟了。我们能做什么？",
						"french": "Il semble trop tard. Que pouvons-nous faire ?",
						"spanish": "Parece demasiado tarde. ¿Qué podemos hacer?",
						"vietnamese": "Dường như đã quá muộn. Chúng ta có thể làm gì?",
						"thai": "ดูเหมือนจะสายเกินไปแล้ว เราจะทำอะไรได้?",
						"hindi": "बहुत देर हो चुकी है। हम क्या कर सकते हैं?"
					},
					"emotion": "sad"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 산산이 부서졌다.",
						"english": "The massive shadow shattered.",
						"japanese": "巨大な影が砕け散った。",
						"chinese": "巨大的阴影支离破碎。",
						"french": "L'immense ombre s'est brisée en mille morceaux.",
						"spanish": "La sombra gigante se hizo pedazos.",
						"vietnamese": "Bóng tối khổng lồ đã tan vỡ.",
						"thai": "เงายักษ์แตกสลายแล้ว.",
						"hindi": "विशालकाय परछाई चकनाचूर हो गई।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…겨우 이걸 부쉈다고? 진짜는… 다른 곳에….",
						"english": "...You merely broke *this*? The true one is... elsewhere...",
						"japanese": "…たったこれだけを破壊したのか？本物は…別の場所に…。",
						"chinese": "……就这点东西也值得你打破？真正的……在别处……",
						"french": "...Tu n'as brisé que *ça* ? Le vrai est... ailleurs...",
						"spanish": "...¿Solo destruiste *esto*? El verdadero está... en otro lugar...",
						"vietnamese": "...Chỉ phá vỡ cái này thôi sao? Cái thật sự... ở nơi khác...",
						"thai": "...แค่นี้เองรึที่ทำลาย? ของจริงน่ะ... อยู่ที่อื่น...",
						"hindi": "...बस इसे ही तोड़ा? असली वाला... कहीं और है..."
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "무슨 소리야? 너 말고 또 있다는 거야?",
						"english": "What are you talking about? You mean there's another one besides you?",
						"japanese": "何を言っている？お前以外にもいるとでも言うのか？",
						"chinese": "你在说什么？意思是除了你还有别的？",
						"french": "Qu'est-ce que tu racontes ? Tu veux dire qu'il y en a un autre en dehors de toi ?",
						"spanish": "¿Qué estás diciendo? ¿Quieres decir que hay otro aparte de ti?",
						"vietnamese": "Ngươi nói gì vậy? Ý ngươi là ngoài ngươi ra còn có kẻ khác ư?",
						"thai": "พูดอะไรของนาย? หมายความว่ามีคนอื่นนอกจากนายงั้นเหรอ?",
						"hindi": "क्या मतलब है? क्या तुम्हारे अलावा भी कोई और है?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "환상은 걷혔지만, 미로는 여전히 끝없이 이어지는 듯했다.",
						"english": "The illusion lifted, but the maze still seemed to stretch endlessly.",
						"japanese": "幻想は晴れたが、迷宮は依然として無限に続くようだった。",
						"chinese": "幻象消散了，但迷宫似乎依然没有尽头。",
						"french": "L'illusion s'est dissipée, mais le labyrinthe semblait toujours s'étirer à l'infini.",
						"spanish": "La ilusión se desvaneció, pero el laberinto aún parecía extenderse sin fin.",
						"vietnamese": "Ảo ảnh đã tan biến, nhưng mê cung dường như vẫn kéo dài vô tận.",
						"thai": "ภาพลวงตาจางหายไปแล้ว แต่เขาวงกตก็ยังคงดูเหมือนไม่มีที่สิ้นสุด.",
						"hindi": "भ्रम टूट गया, पर भूलभुलैया अब भी अंतहीन लगती थी।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "ash",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "ash",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "잘했어. 이제 다음 단계로 갈 시간이야.",
						"english": "Well done. It's time to move to the next phase.",
						"japanese": "よくやった。次の段階へ進む時だ。",
						"chinese": "干得好。是时候进入下一个阶段了。",
						"french": "Bien joué. Il est temps de passer à l'étape suivante.",
						"spanish": "Bien hecho. Es hora de pasar a la siguiente fase.",
						"vietnamese": "Tốt lắm. Giờ là lúc sang giai đoạn tiếp theo.",
						"thai": "ดีมาก. ได้เวลาไปสู่ขั้นต่อไปแล้ว.",
						"hindi": "शाबाश। अब अगले चरण पर जाने का समय है。"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "애쉬… 너 대체 누구야?",
						"english": "Ash... who exactly are you?",
						"japanese": "アッシュ…お前、一体誰なんだ？",
						"chinese": "艾什……你到底是谁？",
						"french": "Ash... qui es-tu exactement ?",
						"spanish": "Ash... ¿quién eres exactamente?",
						"vietnamese": "Ash... rốt cuộc ngươi là ai?",
						"thai": "แอช... นายเป็นใครกันแน่?",
						"hindi": "ऐश... तुम आखिर हो कौन?"
					},
					"emotion": "sad"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 길을 막아섰다. 이 공간의 지배자다.",
						"english": "A colossal shadow blocked the path. It's the ruler of this space.",
						"japanese": "巨大な影が道を塞いだ。この空間の支配者だ。",
						"chinese": "一个巨大的影子挡住了去路。它是这片空间的主宰。",
						"french": "Une ombre colossale bloquait le chemin. C'est le maître de cet espace.",
						"spanish": "Una sombra colosal bloqueó el camino. Es el gobernante de este espacio.",
						"vietnamese": "Một bóng tối khổng lồ chặn đường. Nó là kẻ thống trị không gian này.",
						"thai": "เงาขนาดยักษ์ขวางทางอยู่ มันคือผู้ปกครองของพื้นที่นี้",
						"hindi": "एक विशाल छाया ने रास्ता रोक दिया। यह इस जगह का शासक है।"
					}
				},
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"speaker": "ash"
				},
				{
					"content": {
						"korean": "봐. 저게 이 미로의 심장. 놈을 처치해야 해.",
						"english": "Look. That's the heart of this maze. We must defeat it.",
						"japanese": "見ろ。あれがこの迷宮の心臓だ。やつを倒さなければならない。",
						"chinese": "看。那是这个迷宫的心脏。我们必须打败它。",
						"french": "Regarde. C'est le cœur de ce labyrinthe. Nous devons le vaincre.",
						"spanish": "Mira. Ese es el corazón de este laberinto. Debemos derrotarlo.",
						"vietnamese": "Nhìn kìa. Đó là trái tim của mê cung này. Chúng ta phải tiêu diệt nó.",
						"thai": "ดูสิ นั่นคือหัวใจของเขาวงกตนี้ เราต้องกำจัดมัน",
						"hindi": "देखो। वह इस भूलभुलैया का दिल है। हमें उसे हराना होगा।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "ash"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…진짜 저게 전부일까?",
						"english": "...Is that really all there is?",
						"japanese": "…本当にあれがすべてなのか？",
						"chinese": "……那真的就是全部吗？",
						"french": "...Est-ce vraiment tout ce qu'il y a ?",
						"spanish": "...¿Es eso realmente todo?",
						"vietnamese": "...Thật sự chỉ có thế thôi sao?",
						"thai": "...นั่นคือทั้งหมดจริงๆ เหรอ?",
						"hindi": "...क्या यह वास्तव में सब कुछ है?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"duration_ms": 400,
					"type": "direction",
					"action": "exit",
					"speaker": "ash"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 것들. 내 미로에서 길을 찾을 수는 없어.",
						"english": "Foolish creatures. You cannot find your way in my maze.",
						"japanese": "愚かな者たちめ。私の迷宮で道を見つけることはできない。",
						"chinese": "愚蠢的东西。你们无法在我的迷宫中找到出路。",
						"french": "Créatures insensées. Vous ne pouvez pas trouver votre chemin dans mon labyrinthe.",
						"spanish": "Criaturas tontas. No podéis encontrar vuestro camino en mi laberinto.",
						"vietnamese": "Những sinh vật ngu ngốc. Các ngươi không thể tìm thấy lối thoát trong mê cung của ta.",
						"thai": "พวกโง่เง่า เจ้าไม่มีทางหาทางออกในเขาวงกตของข้าได้หรอก",
						"hindi": "मूर्ख प्राणियों। तुम मेरे भूलभुलैया में अपना रास्ता नहीं ढूंढ सकते।"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "길을 찾을 필요 없어. 부숴버리면 되니까.",
						"english": "No need to find a path. We'll just break it.",
						"japanese": "道を探す必要はない。壊してしまえばいいのだから。",
						"chinese": "不需要找路。我们直接把它摧毁就行。",
						"french": "Pas besoin de trouver un chemin. On va juste le briser.",
						"spanish": "No hace falta encontrar un camino. Simplemente lo romperemos.",
						"vietnamese": "Không cần tìm đường. Chúng ta sẽ phá hủy nó.",
						"thai": "ไม่จำเป็นต้องหาทาง เราจะทำลายมันทิ้งซะ",
						"hindi": "रास्ता ढूंढने की जरूरत नहीं। हम बस इसे तोड़ देंगे।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "허망한 발버둥. 모든 것은 반복될 뿐이다.",
						"english": "A futile struggle. All things merely repeat.",
						"japanese": "虚しい足掻き。全ては繰り返されるだけだ。",
						"chinese": "徒劳的挣扎。一切都只会重复。",
						"french": "Une lutte vaine. Tout ne fait que se répéter.",
						"spanish": "Un esfuerzo inútil. Todo no hace más que repetirse.",
						"vietnamese": "Cuộc giãy giụa vô vọng. Mọi thứ chỉ lặp lại mà thôi.",
						"thai": "การดิ้นรนที่ไร้ค่า ทุกสิ่งล้วนซ้ำรอยเดิม.",
						"hindi": "व्यर्थ का संघर्ष। सब कुछ बस दोहराया जाएगा।"
					}
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "공간은 다시 탐험대를 집어삼켰다.",
						"english": "The space swallowed the expedition team once more.",
						"japanese": "空間は再び探検隊を飲み込んだ。",
						"chinese": "空间再次吞噬了探险队。",
						"french": "L'espace engloutit de nouveau l'équipe d'expédition.",
						"spanish": "El espacio volvió a engullir al equipo de expedición.",
						"vietnamese": "Không gian lại nuốt chửng đoàn thám hiểm.",
						"thai": "มิติได้กลืนกินทีมสำรวจไปอีกครั้ง.",
						"hindi": "अंतरिक्ष ने एक बार फिर अभियान दल को निगल लिया।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "다시 처음부터… 영원히 반복될 뿐이다.",
						"english": "From the beginning again... It will only repeat forever.",
						"japanese": "また最初から…永遠に繰り返されるだけだ。",
						"chinese": "再次从头开始……只会永远重复。",
						"french": "Encore depuis le début... Cela ne fera que se répéter éternellement.",
						"spanish": "De nuevo desde el principio... Solo se repetirá eternamente.",
						"vietnamese": "Lại từ đầu... Chỉ lặp đi lặp lại mãi mãi.",
						"thai": "กลับไปเริ่มใหม่... จะวนซ้ำไปชั่วนิรันดร์.",
						"hindi": "फिर से शुरुआत से... यह बस हमेशा दोहराया जाएगा।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…아니, 다시 시작할 거야. 끝낼 때까지.",
						"english": "...No, I'll start again. Until I finish it.",
						"japanese": "…いや、また始める。終わらせるまで。",
						"chinese": "……不，我会重新开始。直到完成为止。",
						"french": "...Non, je recommencerai. Jusqu'à ce que je finisse.",
						"spanish": "...No, volveré a empezar. Hasta que lo termine.",
						"vietnamese": "...Không, ta sẽ bắt đầu lại. Cho đến khi kết thúc.",
						"thai": "...ไม่สิ, ฉันจะเริ่มใหม่. จนกว่าจะสำเร็จ.",
						"hindi": "...नहीं, मैं फिर से शुरू करूँगा। जब तक खत्म न करूँ।"
					}
				},
				{
					"speaker": "ash",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"emotion": "base",
					"content": {
						"korean": "아직 기회는 있어. 일어나.",
						"english": "There's still a chance. Get up.",
						"japanese": "まだチャンスはある。立ち上がれ。",
						"chinese": "还有机会。起来。",
						"french": "Il y a encore une chance. Lève-toi.",
						"spanish": "Todavía hay una oportunidad. Levántate.",
						"vietnamese": "Vẫn còn cơ hội. Đứng dậy đi.",
						"thai": "ยังมีโอกาส ลุกขึ้นสิ",
						"hindi": "अभी भी मौका है। उठो।"
					},
					"speaker": "ash",
					"type": "speech"
				}
			]
		}
	]
} as const;
