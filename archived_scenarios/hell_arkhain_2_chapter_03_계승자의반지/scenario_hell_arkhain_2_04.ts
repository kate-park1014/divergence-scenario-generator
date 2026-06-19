export const scenario_hell_arkhain_2_04 = {
	"scenario_id": "hell_arkhain_2_04",
	"order": 4,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"mire": {
			"id": "mon_833c1501-f6d9-49ef-a3bf-8483358444ec",
			"name": {
				"korean": "수렁",
				"english": "Mire",
				"japanese": "泥沼",
				"chinese": "泥沼",
				"french": "Bourbier",
				"spanish": "Ciénaga",
				"vietnamese": "Vũng lầy",
				"thai": "หล่ม",
				"hindi": "दलदल"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/835207dd-0a0a-46b5-ebc9-0349d902c100/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/39092adf-c27a-4eca-dfc9-57503122c400/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"지옥의 심연. 반지가 속삭이는 곳.",
			"안내자 마이어는 늘 우리 안에 답이 있다고 했다.",
			"가장 깊은 곳의 욕망을 꺼내어 줄 칼날처럼.",
			"이제, 그 유혹은 거부할 수 없는 달콤함으로 다가왔다."
		],
		"english": [
			"Abyss of hell. Where the ring whispers.",
			"Guide Meyer always said the answer lies within us.",
			"Like a blade that unearths our deepest desires.",
			"Now, that temptation has come with irresistible sweetness."
		],
		"japanese": [
			"地獄の深淵。指輪が囁く場所。",
			"案内人マイヤーはいつも、答えは我々の内にあると言った。",
			"最も深い欲望を引き出す刃のように。",
			"今、その誘惑は抗いがたい甘美さで迫ってきた。"
		],
		"chinese": [
			"地狱的深渊。戒指低语之处。",
			"向导迈耶常说答案在我们心中。",
			"如同能唤醒最深层欲望的刀刃。",
			"如今，那诱惑以无法抗拒的甜蜜降临。"
		],
		"french": [
			"L'abîme des enfers. Là où l'anneau murmure.",
			"Notre guide, Meyer, disait toujours que la réponse était en nous.",
			"Comme une lame qui révèle nos désirs les plus profonds.",
			"Désormais, cette tentation se présente avec une douceur irrésistible."
		],
		"spanish": [
			"El abismo del infierno. Donde el anillo susurra.",
			"El guía Meyer siempre dijo que la respuesta estaba dentro de nosotros.",
			"Como una hoja que desentierra nuestros deseos más profundos.",
			"Ahora, esa tentación ha llegado con una dulzura irresistible."
		],
		"vietnamese": [
			"Vực sâu địa ngục. Nơi chiếc nhẫn thì thầm.",
			"Người dẫn đường Meyer luôn nói rằng câu trả lời nằm trong ta.",
			"Như lưỡi dao khơi gợi những dục vọng sâu thẳm nhất.",
			"Giờ đây, cám dỗ ấy đến với sự ngọt ngào không thể cưỡng lại."
		],
		"thai": [
			"ห้วงลึกนรก ที่ซึ่งแหวนกระซิบ",
			"ผู้นำทางไมเออร์บอกเสมอว่าคำตอบอยู่ในตัวเรา",
			"ดุจคมมีดที่ดึงความปรารถนาอันลึกซึ้งที่สุดของเราออกมา",
			"บัดนี้ การล่อลวงนั้นมาพร้อมกับความหอมหวานที่ไม่อาจต้านทาน"
		],
		"hindi": [
			"नरक की खाई। जहाँ अंगूठी फुसफुसाती है।",
			"मार्गदर्शक मेयर ने हमेशा कहा कि उत्तर हमारे भीतर है।",
			"एक तलवार की तरह, जो हमारी सबसे गहरी इच्छाओं को बाहर लाएगी।",
			"अब, वह प्रलोभन एक अनमोल मधुरता के साथ आया है।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "악마의 형상으로 뒤틀린 그림자가 길을 막았다.",
						"english": "A shadow twisted into a demonic form blocked the path.",
						"japanese": "悪魔の姿に歪んだ影が道を塞いだ。",
						"chinese": "扭曲成恶魔形态的影子挡住了去路。",
						"french": "Une ombre tordue en une forme démoniaque bloquait le chemin.",
						"spanish": "Una sombra retorcida en forma demoníaca bloqueó el camino.",
						"vietnamese": "Một cái bóng biến dạng thành hình dáng ác quỷ đã chắn lối.",
						"thai": "เงาที่บิดเบี้ยวเป็นรูปร่างปีศาจขวางทาง",
						"hindi": "एक शैतानी रूप में मुड़ी हुई परछाई ने रास्ता रोक दिया।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "또 방해꾼인가.",
						"english": "Another nuisance?",
						"japanese": "また邪魔者か。",
						"chinese": "又是一个碍事者吗？",
						"french": "Encore un gêneur ?",
						"spanish": "¿Otro estorbo?",
						"vietnamese": "Lại là kẻ quấy rầy à?",
						"thai": "ตัวขัดขวางอีกแล้วหรือ?",
						"hindi": "फिर कोई बाधा?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "mire",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "mire",
					"emotion": "base",
					"content": {
						"korean": "서두르지 마. 돌아가는 편이… 더 큰 것을 얻는 길이 될 거야.",
						"english": "Don't rush. Turning back... will lead you to something greater.",
						"japanese": "急ぐな。引き返す方が…もっと大きなものを手に入れる道となるだろう。",
						"chinese": "别急。回头路…会让你获得更大的东西。",
						"french": "Ne te précipite pas. Faire demi-tour... te mènera à quelque chose de plus grand.",
						"spanish": "No te apresures. Regresar... será el camino para obtener algo más grande.",
						"vietnamese": "Đừng vội. Quay lại… sẽ là con đường để có được thứ lớn hơn.",
						"thai": "อย่ารีบร้อน การหันหลังกลับ…จะเป็นหนทางสู่สิ่งยิ่งใหญ่กว่า",
						"hindi": "जल्दी मत करो। वापस लौटना... तुम्हें कुछ बड़ा दिलाएगा।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "뭐라고?",
						"english": "What?",
						"japanese": "何だと？",
						"chinese": "你说什么？",
						"french": "Quoi ?",
						"spanish": "¿Qué?",
						"vietnamese": "Ngươi nói gì?",
						"thai": "ว่าไงนะ?",
						"hindi": "क्या कहा?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "mire",
					"emotion": "base",
					"content": {
						"korean": "반지를 껴 봐. 모든 해결책이 그 안에 있어. 너의 과거, 현재… 그리고 이루고 싶은 모든 것.",
						"english": "Try on the ring. All solutions lie within it. Your past, present... and everything you wish to achieve.",
						"japanese": "指輪をはめてみろ。すべての解決策がその中にある。お前の過去、現在…そして成し遂げたいことすべてが。",
						"chinese": "戴上戒指。所有解决之道都在其中。你的过去、现在…以及所有你想实现的一切。",
						"french": "Essaie l'anneau. Toutes les solutions y résident. Ton passé, ton présent... et tout ce que tu désires accomplir.",
						"spanish": "Ponte el anillo. Todas las soluciones están en él. Tu pasado, presente... y todo lo que deseas lograr.",
						"vietnamese": "Hãy đeo chiếc nhẫn vào. Mọi giải pháp đều nằm trong đó. Quá khứ, hiện tại… và mọi điều ngươi muốn đạt được.",
						"thai": "ลองสวมแหวนดูสิ ทางออกทั้งหมดอยู่ในนั้น อดีต ปัจจุบัน…และทุกสิ่งที่คุณปรารถนาจะทำให้สำเร็จ",
						"hindi": "अंगूठी पहनो। सभी समाधान उसमें हैं। तुम्हारा अतीत, वर्तमान… और जो कुछ भी तुम हासिल करना चाहते हो।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…(반지를 보며, 짧게 스치는 미래의 환영을 느꼈다.)",
						"english": "...(Looking at the ring, felt a brief glimpse of a future vision.)",
						"japanese": "…(指輪を見つめ、短い未来の幻影を感じた。)",
						"chinese": "…（看着戒指，感受到了未来短暂的幻象。）",
						"french": "...(En regardant l'anneau, il/elle ressentit une brève vision du futur.)",
						"spanish": "...(Mirando el anillo, sintió un breve atisbo de una visión futura.)",
						"vietnamese": "…(Nhìn chiếc nhẫn, cảm thấy thoáng qua một ảo ảnh của tương lai.)",
						"thai": "…(มองแหวนแล้วรู้สึกถึงภาพหลอนแห่งอนาคตที่แวบเข้ามาสั้น ๆ)",
						"hindi": "…(अंगूठी को देखते हुए, भविष्य की एक क्षणिक झलक महसूस हुई।)"
					},
					"speaker": "character_any",
					"emotion": "base"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "mire",
					"spot": [
						2,
						2
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "너는 복수를 원해.",
						"english": "You desire revenge.",
						"japanese": "復讐を望んでいるな。",
						"chinese": "你渴望复仇。",
						"french": "Tu désires la vengeance.",
						"spanish": "Deseas venganza.",
						"vietnamese": "Ngươi muốn trả thù.",
						"thai": "เจ้าปรารถนาการแก้แค้น",
						"hindi": "तुम बदला चाहते हो।"
					},
					"speaker": "mire",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "…닥쳐.",
						"english": "...Shut up.",
						"japanese": "…黙れ。",
						"chinese": "…闭嘴。",
						"french": "...Tais-toi.",
						"spanish": "...Cállate.",
						"vietnamese": "...Câm miệng.",
						"thai": "...หุบปาก",
						"hindi": "...चुप रहो।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "mire",
					"emotion": "base",
					"content": {
						"korean": "그리고 힘을 원하지. 다시는 무력하지 않도록.",
						"english": "And you desire power. Never to be helpless again.",
						"japanese": "そして力を望んでいる。二度と無力にならないようにな。",
						"chinese": "你也渴望力量。绝不再无力。",
						"french": "Et tu désires le pouvoir. Pour ne plus jamais être impuissant.",
						"spanish": "Y deseas poder. Para no volver a ser indefenso.",
						"vietnamese": "Và ngươi muốn sức mạnh. Để không bao giờ bất lực nữa.",
						"thai": "และเจ้าปรารถนาพลัง ไม่ให้ไร้เรี่ยวแรงอีกต่อไป",
						"hindi": "और तुम शक्ति चाहते हो। ताकि फिर कभी बेबस न रहो।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "네가 그걸 어떻게 알아.",
						"english": "How do you know that?",
						"japanese": "なぜそれを知っている？",
						"chinese": "你怎么知道的？",
						"french": "Comment sais-tu cela ?",
						"spanish": "¿Cómo sabes eso?",
						"vietnamese": "Sao ngươi biết điều đó?",
						"thai": "เจ้ารู้เรื่องนั้นได้อย่างไร",
						"hindi": "तुम्हें यह कैसे पता?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "나는 너희를 너무 잘 알아. 너희의 가장 깊은 곳까지.",
						"english": "I know you too well. To your deepest core.",
						"japanese": "お前たちのことなら、知り尽くしている。最も深いところまでな。",
						"chinese": "我太了解你们了。深入你们最深处。",
						"french": "Je vous connais trop bien. Jusqu'au plus profond de votre être.",
						"spanish": "Los conozco demasiado bien. Hasta lo más profundo de su ser.",
						"vietnamese": "Ta hiểu ngươi quá rõ. Đến tận sâu thẳm nhất.",
						"thai": "ข้ารู้จักพวกเจ้าดีเกินไป จนถึงส่วนลึกที่สุดของพวกเจ้า",
						"hindi": "मैं तुम्हें बहुत अच्छी तरह जानता हूँ। तुम्हारी गहराइयों तक।"
					},
					"speaker": "mire",
					"emotion": "base"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						4,
						2
					],
					"speaker": "mire",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "mire",
					"emotion": "base",
					"content": {
						"korean": "네 안의 불꽃이 보이는군. 억누르지 마.",
						"english": "I see the flame within you. Do not suppress it.",
						"japanese": "お前の中の炎が見える。抑えるな。",
						"chinese": "我看到你体内的火焰。别压抑它。",
						"french": "Je vois la flamme en toi. Ne la réprime pas.",
						"spanish": "Veo la llama dentro de ti. No la reprimas.",
						"vietnamese": "Ta thấy ngọn lửa trong ngươi. Đừng kìm nén nó.",
						"thai": "ข้าเห็นเปลวไฟในตัวเจ้า อย่าได้กดข่มมัน",
						"hindi": "मुझे तुम्हारे अंदर की लौ दिख रही है। इसे दबाओ मत।"
					}
				},
				{
					"content": {
						"korean": "쓸데없는 소리 마.",
						"english": "Don't talk nonsense.",
						"japanese": "無駄口を叩くな。",
						"chinese": "别说废话。",
						"french": "Ne dis pas de bêtises.",
						"spanish": "No digas tonterías.",
						"vietnamese": "Đừng nói chuyện vô nghĩa.",
						"thai": "อย่าพูดจาไร้สาระ",
						"hindi": "बकवास मत करो।"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "하지만 그 불꽃은 너의 욕망을 태워버릴 거야. 그저 바라만 볼 텐가?",
						"english": "But that flame will consume your desires. Will you merely watch?",
						"japanese": "だが、その炎はお前の欲望を焼き尽くすだろう。ただ見ているだけか？",
						"chinese": "但那火焰会燃尽你的欲望。你只会袖手旁观吗？",
						"french": "Mais cette flamme consumera tes désirs. Vas-tu seulement regarder ?",
						"spanish": "Pero esa llama consumirá tus deseos. ¿Sólo mirarás?",
						"vietnamese": "Nhưng ngọn lửa đó sẽ thiêu cháy dục vọng của ngươi. Ngươi sẽ chỉ đứng nhìn thôi sao?",
						"thai": "แต่เปลวไฟนั้นจะเผาผลาญความปรารถนาของเจ้า เจ้าจะเพียงแค่มองดูเท่านั้นหรือ",
						"hindi": "पर वो लौ तुम्हारी इच्छाओं को जला देगी। क्या तुम बस देखते रहोगे?"
					},
					"speaker": "mire",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "….",
						"english": "....",
						"japanese": "…。",
						"chinese": "……",
						"french": "....",
						"spanish": "....",
						"vietnamese": "....",
						"thai": "....",
						"hindi": "...."
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "mire",
					"emotion": "base",
					"content": {
						"korean": "반지는 네 불꽃을 더 강렬하게 태울 수 있어. 원하는 것을 손에 넣을 수 있도록.",
						"english": "The ring can make your flame burn more intensely. So you can seize what you desire.",
						"japanese": "指輪はお前の炎をより強く燃え上がらせる。望むものを手に入れられるようにな。",
						"chinese": "戒指能让你的火焰燃烧得更炽烈。助你得到想要的一切。",
						"french": "L'anneau peut rendre ta flamme plus intense. Afin que tu puisses obtenir ce que tu désires.",
						"spanish": "El anillo puede hacer que tu llama arda con más intensidad. Para que puedas obtener lo que deseas.",
						"vietnamese": "Chiếc nhẫn có thể khiến ngọn lửa của ngươi bùng cháy mãnh liệt hơn. Để ngươi có thể đạt được điều mình muốn.",
						"thai": "แหวนสามารถทำให้เปลวไฟของเจ้าลุกโชนรุนแรงยิ่งขึ้น เพื่อให้เจ้าได้สิ่งที่ปรารถนา",
						"hindi": "अंगूठी तुम्हारी लौ को और तीव्र कर सकती है। ताकि तुम जो चाहो, वो पा सको।"
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
						"korean": "지옥의 냄새가 더 짙어졌다. 돌아갈 수 없는 길 위에 섰다.",
						"english": "The stench of hell grows stronger. I stand on a path of no return.",
						"japanese": "地獄の匂いが一層濃くなった。もう引き返せない道に立っている。",
						"chinese": "地狱的气息愈发浓烈。我已踏上不归之路。",
						"french": "L'odeur de l'enfer s'intensifie. Je me tiens sur un chemin sans retour.",
						"spanish": "El hedor del infierno se hace más fuerte. Me encuentro en un camino sin retorno.",
						"vietnamese": "Mùi địa ngục càng lúc càng nồng nặc. Ta đang đứng trên con đường không thể quay lại.",
						"thai": "กลิ่นอายของนรกเข้มข้นขึ้น ข้ามายืนอยู่บนเส้นทางที่ไม่อาจหวนกลับได้แล้ว",
						"hindi": "नर्क की गंध और गहरी हो गई है। मैं अब ऐसे रास्ते पर खड़ा हूँ जहाँ से वापसी नहीं।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "mire",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "이제야 알겠군. 네가 원하는 것은 단순히 복수가 아니야.",
						"english": "Now I understand. What you desire isn't mere revenge.",
						"japanese": "今になって分かった。お前が望むのは、単なる復讐ではない。",
						"chinese": "我现在明白了。你想要的不仅仅是复仇。",
						"french": "Je comprends maintenant. Ce que tu désires n'est pas une simple vengeance.",
						"spanish": "Ahora lo entiendo. Lo que deseas no es mera venganza.",
						"vietnamese": "Bây giờ ta mới hiểu. Thứ ngươi muốn không chỉ là báo thù.",
						"thai": "ข้าเข้าใจแล้ว สิ่งที่เจ้าต้องการไม่ใช่แค่การแก้แค้น",
						"hindi": "अब मैं समझा। तुम्हारी चाहत सिर्फ़ बदला नहीं है।"
					},
					"speaker": "mire",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "….",
						"english": "....",
						"japanese": "……",
						"chinese": "……",
						"french": "....",
						"spanish": "....",
						"vietnamese": "....",
						"thai": "....",
						"hindi": "...."
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "mire",
					"emotion": "base",
					"content": {
						"korean": "세상을 바꾸는 것. 네가 옳다고 믿는 방식으로.",
						"english": "To change the world. In the way you believe is right.",
						"japanese": "世界を変えることだ。お前が正しいと信じるやり方で。",
						"chinese": "改变世界。以你认为正确的方式。",
						"french": "Changer le monde. De la manière que tu crois juste.",
						"spanish": "Cambiar el mundo. De la manera que crees correcta.",
						"vietnamese": "Thay đổi thế giới. Theo cách mà ngươi tin là đúng.",
						"thai": "การเปลี่ยนแปลงโลก ในแบบที่เจ้าเชื่อว่าถูกต้อง",
						"hindi": "दुनिया को बदलना। उस तरीक़े से जिसे तुम सही मानते हो।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "…세상을?",
						"english": "...The world?",
						"japanese": "……世界を？",
						"chinese": "……世界？",
						"french": "...Le monde ?",
						"spanish": "...¿El mundo?",
						"vietnamese": "...Thế giới ư?",
						"thai": "...โลก?",
						"hindi": "...दुनिया को?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그래. 이 지옥을 바꾸고, 너만의 낙원을 만드는 것.",
						"english": "Yes. To change this hell and create your own paradise.",
						"japanese": "そうだ。この地獄を変え、お前だけの楽園を創ることだ。",
						"chinese": "是的。改变这个地狱，创造你自己的乐园。",
						"french": "Oui. Changer cet enfer et créer ton propre paradis.",
						"spanish": "Sí. Cambiar este infierno y crear tu propio paraíso.",
						"vietnamese": "Đúng vậy. Thay đổi địa ngục này, và tạo ra thiên đường của riêng ngươi.",
						"thai": "ใช่ เปลี่ยนนรกนี้ และสร้างสรวงสวรรค์ของเจ้าเอง",
						"hindi": "हाँ। इस नर्क को बदलकर, अपना स्वर्ग बनाना।"
					},
					"speaker": "mire",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "그걸 반지가 해줄 수 있다는 거야?",
						"english": "The ring can do that?",
						"japanese": "それを指輪が叶えてくれると？",
						"chinese": "戒指能做到这些？",
						"french": "L'anneau peut faire ça ?",
						"spanish": "¿El anillo puede hacer eso?",
						"vietnamese": "Chiếc nhẫn có thể làm điều đó sao?",
						"thai": "แหวนทำแบบนั้นได้เหรอ?",
						"hindi": "क्या वह अंगूठी यह कर सकती है?"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "그렇고말고. 너의 모든 잠재된 욕망을 끌어내 줄 거야.",
						"english": "Of course. It will draw out all your hidden desires.",
						"japanese": "もちろんだ。お前の内に秘めた全ての欲望を引き出してくれるだろう。",
						"chinese": "当然。它会唤醒你所有潜在的欲望。",
						"french": "Bien sûr. Il révélera tous tes désirs cachés.",
						"spanish": "Por supuesto. Sacará a relucir todos tus deseos latentes.",
						"vietnamese": "Dĩ nhiên rồi. Nó sẽ khơi dậy mọi ham muốn tiềm ẩn trong ngươi.",
						"thai": "แน่นอน มันจะดึงความปรารถนาที่ซ่อนเร้นทั้งหมดของเจ้าออกมา",
						"hindi": "बिलकुल। यह तुम्हारी सभी दबी हुई इच्छाओं को बाहर ले आएगा।"
					},
					"speaker": "mire",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "하찮은 욕망… 결국 너는 아무것도 손에 넣지 못한다.",
						"english": "Trifling desires... You'll gain nothing in the end.",
						"japanese": "浅はかな欲望…結局お前は何も手に入れられない。",
						"chinese": "微不足道的欲望…最终你将一无所获。",
						"french": "Des désirs insignifiants… Au final, tu n'obtiendras rien.",
						"spanish": "Deseos insignificantes… Al final, no conseguirás nada.",
						"vietnamese": "Ham muốn nhỏ mọn… Cuối cùng ngươi sẽ chẳng đạt được gì.",
						"thai": "ความปรารถนาอันไร้ค่า... สุดท้ายเจ้าจะไม่ได้อะไรเลย",
						"hindi": "तुच्छ इच्छाएँ... अंततः तुम कुछ भी प्राप्त नहीं करोगे।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "크윽… 아직… 아직 끝나지 않았어!",
						"english": "Ugh... Not yet... It's not over yet!",
						"japanese": "くっ… まだ… まだ終わってない！",
						"chinese": "呃… 还没… 还没结束！",
						"french": "Ugh... Pas encore... Ce n'est pas encore fini !",
						"spanish": "Ugh... Aún no... ¡Todavía no ha terminado!",
						"vietnamese": "Khụ... Vẫn chưa... Vẫn chưa kết thúc!",
						"thai": "อึก... ยัง... ยังไม่จบ!",
						"hindi": "उफ़... अभी नहीं... अभी खत्म नहीं हुआ है!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "mire",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "봐. 나의 말이 옳지? 아직도 그걸 쥐지 않을 텐가?",
						"english": "See? Wasn't I right? Won't you grasp it now?",
						"japanese": "見ろ。私の言う通りだろう？まだそれを掴まないのか？",
						"chinese": "看。我说得没错吧？你还不打算抓住它吗？",
						"french": "Vois. N'avais-je pas raison ? Ne vas-tu pas le saisir maintenant ?",
						"spanish": "Mira. ¿No tenía razón? ¿Todavía no lo vas a tomar?",
						"vietnamese": "Thấy chưa? Lời ta nói đúng không? Ngươi vẫn không chịu nắm lấy nó sao?",
						"thai": "เห็นไหม? ที่ฉันพูดถูกใช่ไหม? ยังไม่คว้ามันอีกเหรอ?",
						"hindi": "देखो। मैं सही था, है ना? क्या तुम अभी भी उसे नहीं पकड़ोगे?"
					},
					"speaker": "mire",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "포기하지 않는다면, 다시 기회는 올 거야. 그때는 더 강해져서 돌아와.",
						"english": "If you don't give up, another chance will come. Return stronger then.",
						"japanese": "諦めなければ、また機会は来るだろう。その時は、もっと強くなって戻ってこい。",
						"chinese": "如果你不放弃，机会还会再来。到时候，变得更强再回来吧。",
						"french": "Si tu n'abandonnes pas, une autre chance viendra. Reviens plus fort à ce moment-là.",
						"spanish": "Si no te rindes, otra oportunidad llegará. Vuelve más fuerte entonces.",
						"vietnamese": "Nếu không bỏ cuộc, cơ hội sẽ đến lần nữa. Khi đó, hãy trở lại mạnh mẽ hơn.",
						"thai": "ถ้าไม่ยอมแพ้ โอกาสจะกลับมาอีกครั้ง ตอนนั้นจงกลับมาให้แข็งแกร่งกว่าเดิม",
						"hindi": "अगर तुम हार नहीं मानते, तो एक और मौका आएगा। तब और मजबूत होकर लौटना।"
					},
					"speaker": "mire",
					"emotion": "base"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"content": {
						"korean": "유혹에 넘어가는 어리석은 자여. 이 지옥에서 너의 욕망은 아무것도 아냐.",
						"english": "Fool, who succumbs to temptation. In this hell, your desires mean nothing.",
						"japanese": "誘惑に屈する愚か者よ。この地獄において、お前の欲望など何の意味もない。",
						"chinese": "屈服于诱惑的愚蠢之人。在这地狱里，你的欲望一文不值。",
						"french": "Insensé, qui succombe à la tentation. Dans cet enfer, tes désirs ne signifient rien.",
						"spanish": "Necio, que sucumbes a la tentación. En este infierno, tus deseos no son nada.",
						"vietnamese": "Kẻ ngốc sa ngã vào cám dỗ. Ở địa ngục này, ham muốn của ngươi chẳng là gì cả.",
						"thai": "คนโง่ที่ตกเป็นเหยื่อของสิ่งยั่วยวน ในนรกนี้ ความปรารถนาของเจ้าไม่มีความหมายอะไรเลย",
						"hindi": "मूर्ख, जो प्रलोभन के आगे झुक जाता है। इस नर्क में, तुम्हारी इच्छाएँ कुछ भी नहीं हैं।"
					},
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "시끄러워! 네놈이 뭘 알아!",
						"english": "Shut up! What do you know!",
						"japanese": "黙れ！お前が何を知っているというのだ！",
						"chinese": "闭嘴！你懂什么！",
						"french": "Tais-toi ! Qu'est-ce que tu en sais !",
						"spanish": "¡Cállate! ¡Qué sabes tú!",
						"vietnamese": "Im đi! Ngươi biết gì mà nói!",
						"thai": "หุบปาก! แกรู้อะไร!",
						"hindi": "चुप हो जा! तू क्या जानता है!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"speaker": "mire",
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "mire",
					"emotion": "base",
					"content": {
						"korean": "서두르지 마. 저런 방해물쯤은 간단히 처리할 수 있어.",
						"english": "Don't rush. Such obstacles are easily handled.",
						"japanese": "焦るな。あの程度の邪魔者なら簡単に片付けられる。",
						"chinese": "别急。那种障碍物，轻易就能解决。",
						"french": "Ne te presse pas. Ce genre d'obstacle peut être facilement géré.",
						"spanish": "No te apresures. Esos obstáculos son fáciles de manejar.",
						"vietnamese": "Đừng vội. Chướng ngại vật như thế có thể xử lý dễ dàng.",
						"thai": "ไม่ต้องรีบร้อน อุปสรรคแค่นั้นจัดการได้ไม่ยาก",
						"hindi": "जल्दी मत करो। ऐसी बाधाओं को आसानी से निपटाया जा सकता है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "반지를 쥐고, 네 안에 잠든 힘을 깨워. 그러면 저것은 한낱 먼지가 될 뿐.",
						"english": "Clutch the ring, awaken the dormant power within you. Then, it will turn to mere dust.",
						"japanese": "指輪を握り、お前の中に眠る力を呼び覚ませ。そうすれば、あれはただの塵と化すだろう。",
						"chinese": "握紧戒指，唤醒你体内沉睡的力量。那样一来，它不过是尘埃罢了。",
						"french": "Serre l'anneau, éveille le pouvoir qui sommeille en toi. Alors, cela ne sera plus que poussière.",
						"spanish": "Sujeta el anillo, despierta el poder que duerme en ti. Entonces, eso se convertirá en mero polvo.",
						"vietnamese": "Nắm chặt chiếc nhẫn, đánh thức sức mạnh đang ngủ say trong ngươi. Khi đó, thứ kia sẽ chỉ là cát bụi.",
						"thai": "กำแหวนไว้ ปลุกพลังที่หลับใหลในตัวเจ้าขึ้นมา แล้วมันจะกลายเป็นเพียงธุลี",
						"hindi": "अंगूठी कसकर पकड़ो, अपने भीतर सोई हुई शक्ति को जगाओ। तब वह सिर्फ धूल बन जाएगा।"
					},
					"speaker": "mire",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "….",
						"english": "...",
						"japanese": "…",
						"chinese": "…",
						"french": "...",
						"spanish": "...",
						"vietnamese": "...",
						"thai": "...",
						"hindi": "..."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "선택은 너의 몫이야. 더 큰 힘을 원한다면.",
						"english": "The choice is yours. If you desire greater power.",
						"japanese": "選択はお前のものだ。もし、より大きな力を望むのなら。",
						"chinese": "选择权在你。如果你渴望更强大的力量。",
						"french": "Le choix t'appartient. Si tu désires une plus grande puissance.",
						"spanish": "La elección es tuya. Si deseas un poder mayor.",
						"vietnamese": "Lựa chọn là của ngươi. Nếu ngươi muốn sức mạnh lớn hơn.",
						"thai": "ทางเลือกเป็นของเจ้า ถ้าเจ้าปรารถนาพลังที่ยิ่งใหญ่กว่า",
						"hindi": "चुनाव तुम्हारा है। यदि तुम अधिक शक्ति चाहते हो।"
					},
					"speaker": "mire",
					"emotion": "base",
					"type": "speech"
				},
				{
					"direction": "down",
					"speaker": "mire",
					"action": "exit",
					"type": "direction",
					"duration_ms": 400
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "내가 선택한다…!",
						"english": "I choose...!",
						"japanese": "私が選ぶ…！",
						"chinese": "我选择…！",
						"french": "Je choisis… !",
						"spanish": "¡Yo elijo...!",
						"vietnamese": "Ta chọn...!",
						"thai": "ข้าเลือกแล้ว...!",
						"hindi": "मैं चुनता हूँ...!"
					},
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "크윽… 어리석은 선택… 후회할 것이다…",
						"english": "Ugh... A foolish choice... You will regret this...",
						"japanese": "くっ…愚かな選択…後悔することになるぞ…",
						"chinese": "呃…愚蠢的选择…你会后悔的…",
						"french": "Urgh… Un choix insensé… Tu le regretteras…",
						"spanish": "Argh… Una elección estúpida… Te arrepentirás…",
						"vietnamese": "Khụ… Lựa chọn ngu ngốc… Ngươi sẽ phải hối hận…",
						"thai": "อึก... การตัดสินใจที่โง่เขลา... เจ้าจะต้องเสียใจ...",
						"hindi": "उफ़... एक मूर्खतापूर्ण चुनाव... तुम्हें इसका पछतावा होगा..."
					},
					"speaker": "random_boss",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "시끄러워. 방해하지 마.",
						"english": "Be quiet. Don't interrupt.",
						"japanese": "うるさい。邪魔をするな。",
						"chinese": "闭嘴。别碍事。",
						"french": "Tais-toi. Ne m'interromps pas.",
						"spanish": "Cállate. No interfieras.",
						"vietnamese": "Im đi. Đừng cản trở.",
						"thai": "หุบปาก อย่าขัดขวาง",
						"hindi": "चुप रहो। दखल मत दो।"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그림자가 사라지자, 잠시 지옥의 유혹이 옅어졌다.",
						"english": "As the shadow faded, the lure of hell diminished for a moment.",
						"japanese": "影が消え去ると、地獄の誘惑は一時的に薄れた。",
						"chinese": "随着影子消散，地狱的诱惑暂时减弱了。",
						"french": "L'ombre disparue, la tentation de l'enfer s'estompa un instant.",
						"spanish": "Cuando la sombra desapareció, la tentación del infierno se desvaneció por un momento.",
						"vietnamese": "Khi bóng tối tan biến, cám dỗ địa ngục tạm thời nhạt đi.",
						"thai": "เมื่อเงาหายไป แรงยั่วยวนจากนรกก็จางลงชั่วขณะ",
						"hindi": "जैसे ही परछाई गायब हुई, नरक का लालच क्षण भर के लिए कम हो गया।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "그러나 탐험대의 마음속엔, 알 수 없는 욕망의 불꽃이 더욱 커져만 갔다.",
						"english": "However, in the hearts of the expedition, an unknown flame of desire only grew stronger.",
						"japanese": "しかし、探検隊の心の中では、未知の欲望の炎がさらに大きくなっていった。",
						"chinese": "然而，在探险队的心中，未知的欲望之火却愈发炽烈。",
						"french": "Cependant, au cœur de l'équipe d'exploration, la flamme inconnue du désir ne cessait de grandir.",
						"spanish": "Sin embargo, en el corazón del equipo de expedición, la llama de un deseo desconocido crecía cada vez más.",
						"vietnamese": "Tuy nhiên, trong lòng đội thám hiểm, ngọn lửa ham muốn không rõ đã càng lúc càng bùng cháy dữ dội.",
						"thai": "ทว่าในใจของทีมสำรวจ เปลวไฟแห่งความปรารถนาอันมิอาจรู้ได้กลับโหมกระหน่ำยิ่งขึ้น",
						"hindi": "हालांकि, अभियान दल के मन में, अज्ञात इच्छा की लौ और भी बड़ी होती गई।"
					},
					"type": "speech"
				}
			]
		}
	]
} as const;
