export const scenario_forest_vespera_23_02 = {
	"scenario_id": "forest_vespera_23_02",
	"order": 2,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"fern": {
			"id": "mon_279a32a0-8ec1-4b5b-8179-32df46fdc664",
			"name": {
				"korean": "페른",
				"english": "Fern",
				"japanese": "フェルン",
				"chinese": "费恩",
				"french": "Fern",
				"spanish": "Fern",
				"vietnamese": "Fern",
				"thai": "เฟิร์น",
				"hindi": "फर्न"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/19f9763e-413a-485e-787a-9bbfd8208700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/563627d4-0b7c-4865-39d4-1d0a97363c00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"숲은 살아있는 망각이었다.",
			"모든 발걸음마다 과거의 환영이 스쳐갔다.",
			"진실은 잔혹하고, 기억은 믿을 수 없었다.",
			"이 숲은 누구의 기억으로 만들어졌을까?"
		],
		"english": [
			"The forest was a living oblivion.",
			"With every step, a phantom of the past brushed by.",
			"The truth was cruel, and memories were unreliable.",
			"Whose memories formed this forest?"
		],
		"japanese": [
			"森は生きる忘却だった。",
			"足を進めるたびに、過去の幻影がよぎった。",
			"真実は残酷で、記憶は当てにならなかった。",
			"この森は誰の記憶で創られたのだろうか？"
		],
		"chinese": [
			"森林是活生生的遗忘。",
			"每一步都掠过过去的幻影。",
			"真相残酷，记忆不可信。",
			"这片森林是由谁的记忆构成的？"
		],
		"french": [
			"La forêt était un oubli vivant.",
			"À chaque pas, un fantôme du passé effleurait.",
			"La vérité était cruelle, et les souvenirs indignes de confiance.",
			"De quels souvenirs cette forêt était-elle faite ?"
		],
		"spanish": [
			"El bosque era un olvido viviente.",
			"Con cada paso, un fantasma del pasado se rozaba.",
			"La verdad era cruel y los recuerdos poco fiables.",
			"¿De quién eran los recuerdos que formaron este bosque?"
		],
		"vietnamese": [
			"Rừng là sự lãng quên sống động.",
			"Mỗi bước chân, một ảo ảnh quá khứ lướt qua.",
			"Sự thật tàn nhẫn, và ký ức không đáng tin.",
			"Rừng này được tạo ra từ ký ức của ai?"
		],
		"thai": [
			"ป่าคือความหลงลืมที่มีชีวิต",
			"ทุกย่างก้าว ภาพหลอนในอดีตก็พัดผ่าน",
			"ความจริงนั้นโหดร้าย และความทรงจำก็ไม่อาจเชื่อถือได้",
			"ป่าแห่งนี้สร้างจากความทรงจำของใครกันนะ?"
		],
		"hindi": [
			"जंगल एक जीवित विस्मृति था।",
			"हर कदम पर, अतीत का एक प्रेत सरक जाता था।",
			"सच्चाई क्रूर थी, और यादें अविश्वसनीय थीं।",
			"यह जंगल किसकी यादों से बना था?"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "숲은 과거의 그림자로 뒤덮여 있었다.",
						"english": "The forest was shrouded in shadows of the past.",
						"japanese": "森は過去の影に覆われていた。",
						"chinese": "森林被过去的阴影笼罩。",
						"french": "La forêt était enveloppée des ombres du passé.",
						"spanish": "El bosque estaba cubierto por las sombras del pasado.",
						"vietnamese": "Rừng bị bao phủ bởi bóng tối của quá khứ.",
						"thai": "ป่าถูกปกคลุมไปด้วยเงาของอดีต",
						"hindi": "जंगल अतीत की छायाओं से ढका हुआ था।"
					}
				},
				{
					"content": {
						"korean": "으윽… 머리가 아파.",
						"english": "Ugh… My head hurts.",
						"japanese": "うぅ…頭が痛い。",
						"chinese": "呃…我头疼。",
						"french": "Ugh… J'ai mal à la tête.",
						"spanish": "Ugh… Me duele la cabeza.",
						"vietnamese": "Ư… Tôi đau đầu quá.",
						"thai": "อื้อ… ปวดหัวจัง",
						"hindi": "उफ़… मेरा सिर दर्द कर रहा है।"
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "방금… 뭔가 보인 것 같은데.",
						"english": "Just now… I think I saw something.",
						"japanese": "今…何か見えた気がする。",
						"chinese": "刚才…我好像看到了什么。",
						"french": "Tout à l'heure… j'ai cru voir quelque chose.",
						"spanish": "Justo ahora… creo que vi algo.",
						"vietnamese": "Vừa nãy… hình như tôi đã thấy gì đó.",
						"thai": "เมื่อกี้… เหมือนฉันเห็นอะไรบางอย่าง",
						"hindi": "अभी… मुझे कुछ दिखा है।"
					},
					"speaker": "character_1"
				},
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "fern",
					"action": "enter"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "환영에 갇혔군.",
						"english": "Trapped in a vision.",
						"japanese": "幻影に囚われたか。",
						"chinese": "被幻象困住了。",
						"french": "Piégé dans une illusion.",
						"spanish": "Atrapado en una visión.",
						"vietnamese": "Bị mắc kẹt trong ảo ảnh.",
						"thai": "ติดกับอยู่ในภาพหลอน",
						"hindi": "एक भ्रम में फंसा हुआ।"
					},
					"speaker": "fern"
				},
				{
					"content": {
						"korean": "당신은 누구시죠?",
						"english": "Who are you?",
						"japanese": "あなたは誰ですか？",
						"chinese": "你是谁？",
						"french": "Qui êtes-vous ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Ngài là ai?",
						"thai": "คุณคือใคร?",
						"hindi": "आप कौन हैं?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "페른. 이 숲의 현자. 너희를 기다리고 있었다.",
						"english": "Fern. The sage of this forest. I've been waiting for you.",
						"japanese": "フェルン。この森の賢者だ。お前たちを待っていた。",
						"chinese": "费恩。这片森林的贤者。我一直在等着你们。",
						"french": "Fern. Le sage de cette forêt. Je vous attendais.",
						"spanish": "Fern. El sabio de este bosque. Os estaba esperando.",
						"vietnamese": "Fern. Hiền giả của rừng này. Ta đã đợi các ngươi.",
						"thai": "เฟิร์น. ปราชญ์แห่งป่านี้ ฉันรอพวกคุณอยู่",
						"hindi": "फ़र्न। इस जंगल का ऋषि। मैं तुम्हें इंतज़ार कर रहा था।"
					},
					"speaker": "fern",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 숲은 스스로 기억을 삼키는 곳이야.",
						"english": "This forest devours memories.",
						"japanese": "この森は記憶を飲み込む。",
						"chinese": "这片森林吞噬着记忆。",
						"french": "Cette forêt dévore les souvenirs.",
						"spanish": "Este bosque devora los recuerdos.",
						"vietnamese": "Rừng này tự nuốt chửng ký ức.",
						"thai": "ป่าแห่งนี้กลืนกินความทรงจำของมันเอง",
						"hindi": "यह जंगल यादों को निगल जाता है।"
					},
					"speaker": "fern",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "fern",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "fern",
					"content": {
						"korean": "이 이끼를 봐. 숲의 기억을 비추는 거울이지.",
						"english": "Look at this moss. It's a mirror reflecting the forest's memories.",
						"japanese": "この苔を見て。森の記憶を映す鏡よ。",
						"chinese": "看看这苔藓。它是映照森林记忆的镜子。",
						"french": "Regarde cette mousse. C'est un miroir qui reflète les souvenirs de la forêt.",
						"spanish": "Mira este musgo. Es un espejo que refleja los recuerdos del bosque.",
						"vietnamese": "Nhìn lớp rêu này. Nó là tấm gương phản chiếu ký ức của rừng.",
						"thai": "ดูมอสนี้สิ มันเป็นกระจกที่สะท้อนความทรงจำของป่า",
						"hindi": "इस काई को देखो। यह जंगल की यादों को दर्शाने वाला दर्पण है।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "그럼 과거를 볼 수 있나요?",
						"english": "So, can we see the past?",
						"japanese": "じゃあ、過去を見れるんですか？",
						"chinese": "那么，我们能看到过去吗？",
						"french": "Alors, on peut voir le passé ?",
						"spanish": "¿Entonces, podemos ver el pasado?",
						"vietnamese": "Vậy, chúng ta có thể nhìn thấy quá khứ sao?",
						"thai": "งั้นเราจะเห็นอดีตได้ไหม?",
						"hindi": "तो, क्या हम अतीत देख सकते हैं?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "볼 수는 있어. 하지만… 모든 길이 진실로 이어지지는 않아.",
						"english": "You can see it. But... not all paths lead to the truth.",
						"japanese": "見ることはできる。でも…すべての道が真実につながるわけじゃない。",
						"chinese": "你可以看到。但是…并非所有道路都通向真相。",
						"french": "Tu peux le voir. Mais… tous les chemins ne mènent pas à la vérité.",
						"spanish": "Puedes verlo. Pero… no todos los caminos conducen a la verdad.",
						"vietnamese": "Có thể thấy. Nhưng… không phải mọi con đường đều dẫn đến sự thật.",
						"thai": "เธอเห็นได้ แต่...ไม่ใช่ทุกเส้นทางที่จะนำไปสู่ความจริง",
						"hindi": "तुम देख सकते हो। लेकिन... सभी रास्ते सच की ओर नहीं ले जाते।"
					},
					"speaker": "fern"
				},
				{
					"speaker": "fern",
					"content": {
						"korean": "숲의 이끼는 때로 사라진 길을 보여주지. 하지만 모든 길이 진실로 이어지지는 않아.",
						"english": "The forest moss sometimes shows lost paths. But not all paths lead to the truth.",
						"japanese": "森の苔は時に消えた道を示す。でも、すべての道が真実につながるわけじゃない。",
						"chinese": "森林的苔藓有时会显示消失的路径。但并非所有道路都通向真相。",
						"french": "La mousse de la forêt montre parfois des chemins perdus. Mais tous les chemins ne mènent pas à la vérité.",
						"spanish": "El musgo del bosque a veces muestra caminos perdidos. Pero no todos los caminos conducen a la verdad.",
						"vietnamese": "Rêu rừng đôi khi chỉ lối đi đã mất. Nhưng không phải mọi con đường đều dẫn đến sự thật.",
						"thai": "มอสในป่าบางครั้งแสดงเส้นทางที่หายไป แต่ไม่ใช่ทุกเส้นทางที่จะนำไปสู่ความจริง",
						"hindi": "जंगल की काई कभी-कभी खोए हुए रास्ते दिखाती है। लेकिन सभी रास्ते सच की ओर नहीं ले जाते।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "바닥에 부서진 유물 조각이 반짝였다.",
						"english": "A shattered relic shard glittered on the floor.",
						"japanese": "床には砕けた遺物の破片が光っていた。",
						"chinese": "地板上，一块破碎的文物碎片闪闪发光。",
						"french": "Un fragment d'artefact brisé scintillait sur le sol.",
						"spanish": "Un fragmento de reliquia destrozada brillaba en el suelo.",
						"vietnamese": "Một mảnh vỡ cổ vật lấp lánh trên sàn.",
						"thai": "ชิ้นส่วนวัตถุโบราณที่แตกสลายระยิบระยับอยู่บนพื้น",
						"hindi": "फर्श पर एक टूटे हुए अवशेष का टुकड़ा चमक रहा था।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이건… 유물의 조각인데?",
						"english": "This is... a relic shard?",
						"japanese": "これって…遺物の破片？",
						"chinese": "这是…文物碎片？",
						"french": "C'est... un fragment d'artefact ?",
						"spanish": "¿Esto es… un fragmento de reliquia?",
						"vietnamese": "Cái này là… một mảnh cổ vật sao?",
						"thai": "นี่มัน...ชิ้นส่วนวัตถุโบราณ?",
						"hindi": "यह... एक अवशेष का टुकड़ा है?"
					},
					"speaker": "character_2",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "fern",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "기억은 쉽게 조작될 수 있어. 너희가 본 환영도 마찬가지고.",
						"english": "Memories can be easily manipulated. And so can the illusions you've seen.",
						"japanese": "記憶は簡単に操作される。君たちが見た幻影も同じだ。",
						"chinese": "记忆很容易被操纵。你们所见的幻象也是如此。",
						"french": "Les souvenirs peuvent être facilement manipulés. Et les illusions que vous avez vues aussi.",
						"spanish": "Los recuerdos pueden ser fácilmente manipulados. Y las ilusiones que habéis visto también.",
						"vietnamese": "Ký ức có thể dễ dàng bị thao túng. Những ảo ảnh các ngươi đã thấy cũng vậy.",
						"thai": "ความทรงจำสามารถถูกบงการได้ง่าย รวมถึงภาพลวงตาที่พวกเธอเห็นด้วย",
						"hindi": "यादों को आसानी से हेरफेर किया जा सकता है। और वही हाल उन भ्रमों का भी है जो तुमने देखे हैं।"
					},
					"speaker": "fern"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "그럼 뭘 믿어야 하죠?",
						"english": "Then what should we believe?",
						"japanese": "じゃあ、何を信じればいいんですか？",
						"chinese": "那么，我们该相信什么呢？",
						"french": "Alors, que devons-nous croire ?",
						"spanish": "¿Entonces, qué debemos creer?",
						"vietnamese": "Vậy chúng ta nên tin vào điều gì?",
						"thai": "แล้วเราควรเชื่ออะไร?",
						"hindi": "तो, हमें क्या मानना चाहिए?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "fern",
					"content": {
						"korean": "그게 문제지. 이 숲은 숨 쉬는 기록보관소와 같아. 다만, 너무 많은 이야기가 잊혀졌지.",
						"english": "That's the problem. This forest is like a living archive. Except, too many stories have been forgotten.",
						"japanese": "それが問題だ。この森は息をする記録保管庫のようだ。ただ、あまりにも多くの物語が忘れ去られた。",
						"chinese": "这就是问题所在。这片森林就像一个会呼吸的档案馆。只是，太多的故事已被遗忘。",
						"french": "C'est ça le problème. Cette forêt est comme une archive vivante. Sauf que trop d'histoires ont été oubliées.",
						"spanish": "Ese es el problema. Este bosque es como un archivo viviente. Solo que demasiadas historias han sido olvidadas.",
						"vietnamese": "Đó mới là vấn đề. Rừng này như một kho lưu trữ sống. Chỉ là, quá nhiều câu chuyện đã bị lãng quên.",
						"thai": "นั่นแหละคือปัญหา ป่าแห่งนี้ก็เหมือนหอจดหมายเหตุที่มีชีวิต เพียงแต่มีเรื่องราวมากมายถูกลืมเลือนไปแล้ว",
						"hindi": "वही तो समस्या है। यह जंगल एक जीवित अभिलेखागार की तरह है। बस, बहुत सारी कहानियाँ भुला दी गई हैं।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_3",
					"content": {
						"korean": "잊혀진 이야기라면… 누군가 지운 건가요?",
						"english": "If it's a forgotten story... did someone erase it?",
						"japanese": "忘れられた話なら…誰かが消したのですか？",
						"chinese": "如果是遗忘的故事…是有人抹去了吗？",
						"french": "Si c'est une histoire oubliée... quelqu'un l'a-t-il effacée ?",
						"spanish": "Si es una historia olvidada... ¿alguien la borró?",
						"vietnamese": "Nếu là câu chuyện bị lãng quên... có phải ai đó đã xóa nó đi không?",
						"thai": "ถ้าเป็นเรื่องราวที่ถูกลืมเลือน... มีใครบางคนลบมันไปหรือเปล่า?",
						"hindi": "अगर यह एक भूली हुई कहानी है... क्या किसी ने इसे मिटा दिया?"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "아마도.",
						"english": "Perhaps.",
						"japanese": "おそらく。",
						"chinese": "也许吧。",
						"french": "Peut-être.",
						"spanish": "Quizás.",
						"vietnamese": "Có lẽ.",
						"thai": "อาจจะ.",
						"hindi": "शायद।"
					},
					"speaker": "fern"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "fern",
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						3
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "fern",
					"content": {
						"korean": "점점 더 깊이 들어가는군. 길을 잃었을지도 모르겠어.",
						"english": "We're going deeper. We might be lost.",
						"japanese": "ますます奥深くへ。道に迷ったのかもしれない。",
						"chinese": "越来越深入了。我们可能迷路了。",
						"french": "Nous nous enfonçons de plus en plus. Nous pourrions être perdus.",
						"spanish": "Nos adentramos cada vez más. Quizás nos hemos perdido.",
						"vietnamese": "Càng ngày càng đi sâu. Có lẽ chúng ta đã lạc rồi.",
						"thai": "ยิ่งลึกเข้าไปเรื่อยๆ เราอาจจะหลงทางแล้ว.",
						"hindi": "हम और गहराई में जा रहे हैं। शायद हम रास्ता भटक गए हैं।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "돌아갈 수 없다는 말인가요?",
						"english": "You mean we can't go back?",
						"japanese": "戻れないということですか？",
						"chinese": "意思是回不去了吗？",
						"french": "Vous voulez dire que nous ne pouvons pas revenir ?",
						"spanish": "¿Quieres decir que no podemos volver?",
						"vietnamese": "Ý anh là không thể quay lại sao?",
						"thai": "หมายความว่ากลับไปไม่ได้แล้วเหรอคะ/ครับ?",
						"hindi": "क्या इसका मतलब है कि हम वापस नहीं जा सकते?"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "이 숲에선, 길을 잃는다는 건 기억을 잃는다는 것과 같아.",
						"english": "In this forest, losing your way is like losing your memories.",
						"japanese": "この森では、道に迷うことは記憶を失うことと同じだ。",
						"chinese": "在这片森林里，迷失方向就如同失去记忆。",
						"french": "Dans cette forêt, se perdre, c'est comme perdre ses souvenirs.",
						"spanish": "En este bosque, perder el camino es como perder tus recuerdos.",
						"vietnamese": "Trong khu rừng này, lạc đường cũng giống như mất đi ký ức.",
						"thai": "ในป่าแห่งนี้ การหลงทางก็เหมือนกับการสูญเสียความทรงจำ.",
						"hindi": "इस जंगल में, रास्ता भटकना याददाश्त खोने जैसा है।"
					},
					"speaker": "fern",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "여기서 멈출 수 없어.",
						"english": "We can't stop here.",
						"japanese": "ここで止まるわけにはいかない。",
						"chinese": "不能停在这里。",
						"french": "Nous ne pouvons pas nous arrêter ici.",
						"spanish": "No podemos detenernos aquí.",
						"vietnamese": "Không thể dừng lại ở đây.",
						"thai": "เราหยุดอยู่ตรงนี้ไม่ได้.",
						"hindi": "हम यहाँ रुक नहीं सकते।"
					},
					"speaker": "character_4",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "fern",
					"content": {
						"korean": "...알고 있다. 조심해. 숲의 기억이 너희를 덮치려 해.",
						"english": "...I know. Be careful. The forest's memories are trying to overwhelm you.",
						"japanese": "…分かっている。気をつけろ。森の記憶がお前たちを襲おうとしている。",
						"chinese": "...我知道。小心。森林的记忆正试图吞噬你们。",
						"french": "...Je sais. Fais attention. Les souvenirs de la forêt tentent de vous submerger.",
						"spanish": "...Lo sé. Ten cuidado. Los recuerdos del bosque intentan abrumarte.",
						"vietnamese": "...Ta biết rồi. Cẩn thận đấy. Ký ức của khu rừng đang muốn nuốt chửng các ngươi.",
						"thai": "...ข้ารู้. ระวังตัวให้ดี. ความทรงจำของป่ากำลังพยายามกลืนกินพวกเจ้า.",
						"hindi": "...मुझे पता है। सावधान रहो। जंगल की यादें तुम पर हावी होने की कोशिश कर रही हैं।"
					}
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "숲의 가장 깊은 곳. 찢어진 기억들이 아우성쳤다.",
						"english": "The deepest part of the forest. Fragmented memories cried out.",
						"japanese": "森の最も深い場所。引き裂かれた記憶が叫び声をあげた。",
						"chinese": "森林最深处。撕裂的记忆在哀嚎。",
						"french": "La partie la plus profonde de la forêt. Des souvenirs déchirés hurlaient.",
						"spanish": "La parte más profunda del bosque. Recuerdos desgarrados aullaban.",
						"vietnamese": "Nơi sâu thẳm nhất của khu rừng. Những ký ức tan vỡ gào thét.",
						"thai": "ส่วนที่ลึกที่สุดของป่า. ความทรงจำที่แตกสลายกรีดร้องออกมา.",
						"hindi": "जंगल का सबसे गहरा हिस्सा। टूटी हुई यादें चीख उठीं।"
					}
				},
				{
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"action": "enter",
					"speaker": "fern",
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "fern",
					"content": {
						"korean": "조심해. 저 자는… 왜곡된 기억의 주박에 걸린 자야.",
						"english": "Be careful. That one... is bound by distorted memories.",
						"japanese": "気をつけろ。あやつは…歪んだ記憶の呪縛にかかっている。",
						"chinese": "小心。那家伙…被扭曲的记忆所束缚。",
						"french": "Fais attention. Celui-là... est lié par des souvenirs déformés.",
						"spanish": "Ten cuidado. Ese... está atado por recuerdos distorsionados.",
						"vietnamese": "Cẩn thận. Kẻ đó... bị ràng buộc bởi ký ức méo mó.",
						"thai": "ระวัง. เขาคนนั้น... ถูกผูกมัดด้วยความทรงจำที่บิดเบี้ยว.",
						"hindi": "सावधान रहो। वह... विकृत यादों के बंधन में है।"
					}
				},
				{
					"duration_ms": 400,
					"direction": "down",
					"type": "direction",
					"speaker": "fern",
					"action": "exit"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…누구냐. 감히 이 숲의 잠든 기억을 깨우는 자가.",
						"english": "...Who are you? Who dares awaken the sleeping memories of this forest?",
						"japanese": "…何者だ。この森の眠れる記憶を敢えて呼び覚ます者は。",
						"chinese": "...你是谁。竟敢唤醒这片森林沉睡的记忆。",
						"french": "...Qui es-tu ? Qui ose réveiller les souvenirs endormis de cette forêt ?",
						"spanish": "...¿Quién eres? ¿Quién osa despertar los recuerdos dormidos de este bosque?",
						"vietnamese": "...Ngươi là ai. Kẻ nào dám đánh thức ký ức đang ngủ yên của khu rừng này.",
						"thai": "...เจ้าเป็นใคร. ผู้ใดบังอาจปลุกความทรงจำที่หลับใหลของป่าแห่งนี้?",
						"hindi": "...तुम कौन हो। कौन इस जंगल की सोई हुई यादों को जगाने की हिम्मत करता है?"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "네가… 기억을 왜곡한 장본인인가!",
						"english": "You... are the one distorting memories!",
						"japanese": "貴様が…記憶を歪めた張本人か！",
						"chinese": "你就是…扭曲记忆的元凶吗！",
						"french": "Tu... C'est toi qui as déformé les souvenirs !",
						"spanish": "¿Tú... eres quien distorsionó los recuerdos?",
						"vietnamese": "Ngươi... Chính ngươi đã bóp méo ký ức!",
						"thai": "แก... คือผู้บิดเบือนความทรงจำงั้นหรือ!",
						"hindi": "तुम... तुम ही हो जिसने यादों को विकृत किया है!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "왜곡? 난 그저… 잊혀진 것을 정리하는 것뿐.",
						"english": "Distortion? I merely... arrange what's forgotten.",
						"japanese": "歪曲？私はただ…忘れ去られたものを整理しているだけだ。",
						"chinese": "扭曲？我只是…整理那些被遗忘的。",
						"french": "Déformer ? Je ne fais que... remettre de l'ordre dans ce qui est oublié.",
						"spanish": "¿Distorsionar? Yo solo... organizo lo olvidado.",
						"vietnamese": "Bóp méo? Ta chỉ... sắp xếp những gì đã bị lãng quên thôi.",
						"thai": "บิดเบือน? ข้าแค่... จัดการสิ่งที่ถูกลืมเลือนไปเท่านั้นเอง",
						"hindi": "विकृति? मैं तो बस... भूली हुई चीजों को व्यवस्थित कर रहा हूँ।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "너희가 알게 될 진실은… 감당하기 힘들 것이다.",
						"english": "The truth you'll learn... will be too much to bear.",
						"japanese": "お前たちが知る真実は…耐え難いだろう。",
						"chinese": "你们将得知的真相…将难以承受。",
						"french": "La vérité que vous allez découvrir... sera insoutenable.",
						"spanish": "La verdad que descubrirán... será difícil de soportar.",
						"vietnamese": "Sự thật mà các ngươi sẽ biết... sẽ khó lòng chấp nhận.",
						"thai": "ความจริงที่พวกเจ้าจะได้รู้... มันยากเกินกว่าจะรับไหว",
						"hindi": "जो सच तुम जानोगे... वह संभालना मुश्किल होगा।"
					}
				},
				{
					"content": {
						"korean": "우리는 진실을 마주할 거야!",
						"english": "We will face the truth!",
						"japanese": "私たちは真実を突き止める！",
						"chinese": "我们将直面真相！",
						"french": "Nous affronterons la vérité !",
						"spanish": "¡Enfrentaremos la verdad!",
						"vietnamese": "Chúng ta sẽ đối mặt với sự thật!",
						"thai": "เราจะเผชิญหน้ากับความจริง!",
						"hindi": "हम सच का सामना करेंगे!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석군. 후회하게 될 거다.",
						"english": "Foolish. You'll regret it.",
						"japanese": "愚かだな。後悔することになるぞ。",
						"chinese": "愚蠢。你会后悔的。",
						"french": "Stupide. Vous le regretterez.",
						"spanish": "Insensato. Lo lamentarás.",
						"vietnamese": "Ngốc nghếch. Ngươi sẽ phải hối hận.",
						"thai": "ช่างโง่เขลา. เจ้าจะต้องเสียใจ",
						"hindi": "मूर्ख। तुम्हें पछताना पड़ेगा।"
					}
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "숲의 기억이 탐험대를 집어삼켰다.",
						"english": "The forest's memory swallowed the expedition.",
						"japanese": "森の記憶が探検隊を飲み込んだ。",
						"chinese": "森林的记忆吞噬了探险队。",
						"french": "La mémoire de la forêt a englouti l'expédition.",
						"spanish": "La memoria del bosque devoró a la expedición.",
						"vietnamese": "Ký ức của khu rừng đã nuốt chửng đoàn thám hiểm.",
						"thai": "ความทรงจำของป่ากลืนกินคณะสำรวจ",
						"hindi": "जंगल की याद ने अभियान को निगल लिया।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "하찮은 것들. 진실은… 감당할 수 없을 것이다.",
						"english": "Insignificant beings. The truth... you cannot bear it.",
						"japanese": "くだらない者たち。真実は…耐えられないだろう。",
						"chinese": "微不足道的存在。真相…你们无法承受。",
						"french": "Créatures insignifiantes. La vérité… vous ne pourrez pas la supporter.",
						"spanish": "Seres insignificantes. La verdad… no podréis soportarla.",
						"vietnamese": "Những kẻ hèn mọn. Sự thật... các ngươi sẽ không thể chịu đựng được.",
						"thai": "สิ่งมีชีวิตไร้ค่า ความจริง…พวกเจ้าจะรับมันไม่ไหวหรอก",
						"hindi": "तुच्छ प्राणी। सच… तुम सह नहीं पाओगे।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…젠장. 아직 끝나지 않았어!",
						"english": "...Damn it. It's not over yet!",
						"japanese": "…ちくしょう。まだ終わってないぞ！",
						"chinese": "……该死。还没结束！",
						"french": "…Mince. Ce n'est pas encore fini !",
						"spanish": "…Maldita sea. ¡Aún no ha terminado!",
						"vietnamese": "...Khốn kiếp. Vẫn chưa kết thúc đâu!",
						"thai": "…บ้าจริง. ยังไม่จบหรอก!",
						"hindi": "…धिक्कार है। अभी खत्म नहीं हुआ है!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "다시… 다시 시작할 거야.",
						"english": "Again... I'll start over.",
						"japanese": "もう一度…やり直すんだ。",
						"chinese": "再来…我要重新开始。",
						"french": "Encore… Je vais recommencer.",
						"spanish": "De nuevo… Volveré a empezar.",
						"vietnamese": "Lại lần nữa... Ta sẽ bắt đầu lại.",
						"thai": "อีกครั้ง…ฉันจะเริ่มใหม่",
						"hindi": "फिर से… मैं दोबारा शुरू करूंगा।"
					},
					"speaker": "character_2"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "기억의 덫이 부서졌다.",
						"english": "The memory trap shattered.",
						"japanese": "記憶の罠が壊れた。",
						"chinese": "记忆的陷阱被打破了。",
						"french": "Le piège des souvenirs est brisé.",
						"spanish": "La trampa de los recuerdos se rompió.",
						"vietnamese": "Cái bẫy ký ức đã vỡ tan.",
						"thai": "กับดักความทรงจำถูกทำลายแล้ว",
						"hindi": "यादों का जाल टूट गया।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…결국… 너희도… 잊혀지겠지…",
						"english": "...Eventually... you too... will be forgotten...",
						"japanese": "…結局…お前たちも…忘れ去られるだろうな…",
						"chinese": "…最终…你们也…会被遗忘的…",
						"french": "...Finalement... vous aussi... serez oubliés...",
						"spanish": "...Al final... ustedes también... serán olvidados...",
						"vietnamese": "...Cuối cùng... các ngươi cũng... sẽ bị lãng quên thôi...",
						"thai": "...ท้ายที่สุด... พวกเจ้าก็... จะถูกลืมเลือนไป...",
						"hindi": "...आखिरकार... तुम भी... भूल जाओगे..."
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "이건 시작일 뿐이야.",
						"english": "This is just the beginning.",
						"japanese": "これは始まりに過ぎない。",
						"chinese": "这只是个开始。",
						"french": "Ce n'est que le début.",
						"spanish": "Esto es solo el principio.",
						"vietnamese": "Đây chỉ là khởi đầu thôi.",
						"thai": "นี่เป็นเพียงแค่จุดเริ่มต้น",
						"hindi": "यह तो बस शुरुआत है।"
					}
				},
				{
					"content": {
						"korean": "아직 진실은 밝혀지지 않았어.",
						"english": "The truth is yet to be revealed.",
						"japanese": "まだ真実は明らかになっていない。",
						"chinese": "真相尚未揭晓。",
						"french": "La vérité n'a pas encore été révélée.",
						"spanish": "La verdad aún no ha sido revelada.",
						"vietnamese": "Sự thật vẫn chưa được hé lộ.",
						"thai": "ความจริงยังไม่ถูกเปิดเผย",
						"hindi": "अभी सच सामने नहीं आया है।"
					},
					"speaker": "character_1",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "숲의 왜곡된 기억은 잠시 잠잠해졌지만, 더 깊은 곳에서 또 다른 비극이 고개를 들고 있었다.",
						"english": "The forest's distorted memories have settled for a moment, but a new tragedy stirred in its depths.",
						"japanese": "森の歪んだ記憶は一時的に静まったが、より深い場所で新たな悲劇が頭をもたげていた。",
						"chinese": "森林扭曲的记忆暂时平静了下来，但在更深处，另一场悲剧正在浮现。",
						"french": "Les souvenirs déformés de la forêt se sont calmés un instant, mais dans ses profondeurs, une autre tragédie se préparait.",
						"spanish": "Los recuerdos distorsionados del bosque se calmaron por un momento, pero en lo más profundo, otra tragedia estaba asomando.",
						"vietnamese": "Ký ức méo mó của khu rừng tạm thời lắng xuống, nhưng từ sâu thẳm, một bi kịch khác đang trỗi dậy.",
						"thai": "ความทรงจำที่บิดเบือนของป่าสงบลงชั่วขณะ แต่ในห้วงลึกกลับมีโศกนาฏกรรมอื่นกำลังคืบคลานเข้ามา",
						"hindi": "जंगल की विकृत यादें कुछ देर के लिए शांत हो गईं, लेकिन गहराई में एक और त्रासदी सिर उठा रही थी।"
					}
				},
				{
					"content": {
						"korean": "숲은 숨겨진 진실을 향해 더욱 깊이 이들을 끌어당겼다.",
						"english": "The forest drew them deeper towards the hidden truth.",
						"japanese": "森は彼らを隠された真実へと、より深く引き込んだ。",
						"chinese": "森林将他们更深地吸引向隐藏的真相。",
						"french": "La forêt les attirait plus profondément vers la vérité cachée.",
						"spanish": "El bosque los atrajo más profundamente hacia la verdad oculta.",
						"vietnamese": "Rừng sâu đã kéo họ sâu hơn về phía sự thật bị che giấu.",
						"thai": "ป่าดึงดูดพวกเขาให้ลึกเข้าไปอีกสู่ความจริงที่ซ่อนอยู่",
						"hindi": "जंगल ने उन्हें छिपी हुई सच्चाई की ओर और गहरा खींचा।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			]
		}
	]
} as const;
