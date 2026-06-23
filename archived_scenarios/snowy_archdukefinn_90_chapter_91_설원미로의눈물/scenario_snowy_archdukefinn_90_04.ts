export const scenario_snowy_archdukefinn_90_04 = {
	"scenario_id": "snowy_archdukefinn_90_04",
	"order": 4,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"eira": {
			"id": "mon_0c37c014-b5ca-4f2f-ad03-5d393e5b2eb1",
			"name": {
				"korean": "에이라",
				"english": "Eira",
				"japanese": "エイラ",
				"chinese": "艾拉",
				"french": "Eira",
				"spanish": "Eira",
				"vietnamese": "Eira",
				"thai": "ไอรา",
				"hindi": "ऐरा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8e2970b7-bcb1-4b1c-6bf0-93106b373500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/0ca1ec09-a624-450f-054a-b98de58bdb00/public"
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
					"emotion": "base",
					"content": {
						"korean": "거짓된 왕좌로 향하는 마지막 길이 눈앞에 펼쳐졌다. 끝없는 미로의 끝이었다.",
						"english": "The final path to the false throne lay before me. It was the end of the endless labyrinth.",
						"japanese": "偽りの玉座へ続く最後の道が目の前に広がる。それは終わりなき迷宮の果てだった。",
						"chinese": "通往虚假王座的最后之路展现在眼前。这是无尽迷宫的尽头。",
						"french": "Le dernier chemin vers le faux trône s'étendait devant moi. C'était la fin du labyrinthe sans fin.",
						"spanish": "El último camino al trono falso se extendía ante mí. Era el final del laberinto sin fin.",
						"vietnamese": "Con đường cuối cùng đến ngai vàng giả dối đã mở ra trước mắt. Đó là tận cùng của mê cung vô tận.",
						"thai": "เส้นทางสุดท้ายสู่บัลลังก์จอมปลอมทอดอยู่เบื้องหน้า เป็นจุดสิ้นสุดของเขาวงกตที่ไม่มีที่สิ้นสุด",
						"hindi": "झूठे सिंहासन का अंतिम मार्ग सामने आ गया। यह अंतहीन भूलभुलैया का अंत था।"
					},
					"type": "speech"
				},
				{
					"spot": [
						5,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "eira",
					"action": "enter"
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "…왔군. 마지막 시험에.",
						"english": "...You've come. To the final trial.",
						"japanese": "…来たな。最後の試練に。",
						"chinese": "……你来了。为了最后的试炼。",
						"french": "...Tu es venu. À la dernière épreuve.",
						"spanish": "...Has llegado. Al juicio final.",
						"vietnamese": "...Ngươi đã đến. Để thử thách cuối cùng.",
						"thai": "...มาถึงแล้วสินะ การทดสอบสุดท้าย",
						"hindi": "...आ गए तुम। अंतिम परीक्षा के लिए।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "누구야. 또 다른 감시자인가?",
						"english": "Who are you? Another guardian?",
						"japanese": "誰だ。また別の監視者か？",
						"chinese": "你是谁？又一个守护者吗？",
						"french": "Qui es-tu ? Un autre gardien ?",
						"spanish": "¿Quién eres? ¿Otro guardián?",
						"vietnamese": "Ngươi là ai? Lại là một người giám hộ khác à?",
						"thai": "ใครน่ะ? ผู้พิทักษ์อีกคนงั้นเหรอ?",
						"hindi": "कौन हो तुम? एक और संरक्षक?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"emotion": "base",
					"content": {
						"korean": "나는 에이라. 얼음 미로의 감시자이자, 기억을 지키는 자.",
						"english": "I am Aira. Guardian of the ice labyrinth, and keeper of memories.",
						"japanese": "私はアイラ。氷の迷宮の監視者にして、記憶を守る者。",
						"chinese": "我是艾拉。冰之迷宫的守护者，也是记忆的守护者。",
						"french": "Je suis Aira. Gardienne du labyrinthe de glace, et gardienne des souvenirs.",
						"spanish": "Soy Aira. Guardiana del laberinto de hielo, y protectora de los recuerdos.",
						"vietnamese": "Ta là Aira. Người giám hộ mê cung băng, và kẻ bảo vệ ký ức.",
						"thai": "ข้าคือไอรา ผู้พิทักษ์เขาวงกตน้ำแข็ง และผู้รักษาความทรงจำ",
						"hindi": "मैं ऐरा हूँ। हिम भूलभुलैया की संरक्षक, और यादों की रक्षक।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"emotion": "base",
					"content": {
						"korean": "이곳은 대공의 거짓된 왕좌로 향하는 길. 강력한 환영이 널 기다릴 거다.",
						"english": "This is the path to the Grand Duke's false throne. Powerful illusions await you.",
						"japanese": "ここは大公の偽りの玉座へ続く道。強大な幻影が貴様を待っているだろう。",
						"chinese": "这里是通往大公虚假王座的道路。强大的幻象将在此等候你。",
						"french": "C'est le chemin vers le faux trône du Grand-Duc. De puissantes illusions t'attendent.",
						"spanish": "Este es el camino al trono falso del Gran Duque. Poderosas ilusiones te esperan.",
						"vietnamese": "Đây là con đường đến ngai vàng giả dối của Đại Công tước. Những ảo ảnh mạnh mẽ đang chờ đợi ngươi.",
						"thai": "ที่นี่คือเส้นทางสู่บัลลังก์จอมปลอมของแกรนด์ดยุก ภาพลวงตาอันทรงพลังจะรอเจ้าอยู่",
						"hindi": "यह महा ड्यूक के झूठे सिंहासन का मार्ग है। शक्तिशाली भ्रम तुम्हारा इंतजार कर रहे हैं।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "환영이라면, 이미 충분히 겪었어.",
						"english": "Illusions? I've already had my fill.",
						"japanese": "幻影だと？もう十分味わった。",
						"chinese": "幻象？我已经经历得够多了。",
						"french": "Des illusions ? J'en ai déjà eu ma dose.",
						"spanish": "¿Ilusiones? Ya he tenido suficientes.",
						"vietnamese": "Ảo ảnh ư? Ta đã trải qua đủ rồi.",
						"thai": "ภาพลวงตาเหรอ? ข้าเจอมามากพอแล้ว",
						"hindi": "भ्रम? मैं पहले ही काफी अनुभव कर चुका हूँ।"
					},
					"speaker": "character_any",
					"emotion": "base"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "eira",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						5,
						3
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "환영은 더 짙어질 거다. 대공의 외로움이 만든 환영이지.",
						"english": "The illusions will deepen. Illusions born from the Grand Duke's loneliness.",
						"japanese": "幻影はさらに深まるだろう。大公の孤独が生んだ幻影だ。",
						"chinese": "幻象会变得更加浓烈。那是大公的寂寞所创造的幻象。",
						"french": "Les illusions s'intensifieront. Des illusions nées de la solitude du Grand-Duc.",
						"spanish": "Las ilusiones se harán más profundas. Ilusiones nacidas de la soledad del Gran Duque.",
						"vietnamese": "Ảo ảnh sẽ càng sâu sắc hơn. Những ảo ảnh sinh ra từ sự cô đơn của Đại Công tước.",
						"thai": "ภาพลวงตาจะเข้มข้นขึ้น เป็นภาพลวงตาที่เกิดจากความเหงาของแกรนด์ดยุก",
						"hindi": "भ्रम गहराते जाएंगे। ग्रैंड ड्यूक के अकेलेपन से पैदा हुए भ्रम।"
					},
					"emotion": "base",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "외로움? 대공은 대체 뭘 원하는 거지?",
						"english": "Loneliness? What exactly does the Grand Duke want?",
						"japanese": "孤独？一体、大公は何を求めているんだ？",
						"chinese": "寂寞？大公到底想要什么？",
						"french": "La solitude ? Que veut exactement le Grand-Duc ?",
						"spanish": "¿Soledad? ¿Qué es lo que quiere el Gran Duque?",
						"vietnamese": "Cô đơn ư? Rốt cuộc Đại Công tước muốn gì?",
						"thai": "ความเหงา? แกรนด์ดยุกต้องการอะไรกันแน่?",
						"hindi": "अकेलापन? ग्रैंड ड्यूक आखिर क्या चाहता है?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "…잃어버린 것을 찾고 싶어 했어. 하지만 그 방법이 잘못되었지.",
						"english": "...He wished to find what was lost. But his methods were wrong.",
						"japanese": "…失われたものを探したかったんだ。だが、その方法は間違っていた。",
						"chinese": "……他曾想找回失去之物。但他的方法错了。",
						"french": "...Il voulait retrouver ce qui était perdu. Mais ses méthodes étaient erronées.",
						"spanish": "...Quería encontrar lo perdido. Pero su método era erróneo.",
						"vietnamese": "...Người ấy muốn tìm lại những gì đã mất. Nhưng phương pháp đó đã sai lầm.",
						"thai": "...เขาอยากจะหาสิ่งที่หายไป แต่ว่าวิธีการของเขามันผิดพลาด",
						"hindi": "...वह खोई हुई चीज़ें खोजना चाहता था। लेकिन उसका तरीका गलत था।"
					},
					"emotion": "sad",
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "이 거짓된 왕국은, 그 반복되는 착각 속에서 만들어졌다.",
						"english": "This false kingdom was born from those repeated delusions.",
						"japanese": "この偽りの王国は、その繰り返される錯覚の中で作られた。",
						"chinese": "这个虚假的王国，就是在那反复的错觉中创造出来的。",
						"french": "Ce faux royaume est né de ces illusions répétées.",
						"spanish": "Este reino falso fue creado a partir de esas ilusiones repetidas.",
						"vietnamese": "Vương quốc giả dối này, được tạo ra từ những ảo ảnh lặp đi lặp lại đó.",
						"thai": "อาณาจักรจอมปลอมนี้ถูกสร้างขึ้นจากภาพลวงตาที่ซ้ำไปซ้ำมา",
						"hindi": "यह झूठा साम्राज्य, उन बार-बार दोहराए जाने वाले भ्रमों में बना था।"
					},
					"emotion": "base",
					"speaker": "eira",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						5,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "eira",
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "왕좌를 지키는 보스는 누구지? 대공인가?",
						"english": "Who guards the throne? Is it the Grand Duke?",
						"japanese": "玉座を守るボスは誰だ？大公なのか？",
						"chinese": "守护王座的Boss是谁？是大公吗？",
						"french": "Qui est le boss qui garde le trône ? Le Grand-Duc ?",
						"spanish": "¿Quién es el jefe que custodia el trono? ¿El Gran Duque?",
						"vietnamese": "Kẻ canh giữ ngai vàng là ai? Có phải Đại Công tước không?",
						"thai": "บอสที่เฝ้าบัลลังก์คือใคร? ใช่แกรนด์ดยุกหรือเปล่า?",
						"hindi": "सिंहासन की रक्षा करने वाला बॉस कौन है? क्या वह ग्रैंड ड्यूक है?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"emotion": "base",
					"content": {
						"korean": "겉으로 보이는 것이 전부가 아니다. 그의 정체는 미스터리에 싸여있어.",
						"english": "What appears on the surface isn't everything. His true identity is shrouded in mystery.",
						"japanese": "見た目が全てではない。彼の正体は謎に包まれている。",
						"chinese": "表面所见并非全部。他的身份笼罩在谜团之中。",
						"french": "Les apparences sont trompeuses. Son identité est entourée de mystère.",
						"spanish": "Lo que se ve no es todo. Su identidad está envuelta en misterio.",
						"vietnamese": "Những gì nhìn thấy bên ngoài không phải là tất cả. Danh tính của người ấy được bao phủ bởi sự bí ẩn.",
						"thai": "สิ่งที่เห็นภายนอกไม่ใช่ทั้งหมด ตัวตนที่แท้จริงของเขาถูกปกคลุมไปด้วยความลึกลับ",
						"hindi": "जो ऊपर से दिखता है, वह सब कुछ नहीं है। उसकी पहचान रहस्य में लिपटी हुई है।"
					}
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "허무함 속에서 반복되는 착각. 그 안에 진실이 숨어있다.",
						"english": "Delusions repeating in emptiness. The truth lies hidden within.",
						"japanese": "虚無の中で繰り返される錯覚。その中に真実が隠されている。",
						"chinese": "在虚无中重复的错觉。真相隐藏在其中。",
						"french": "Des illusions se répétant dans le vide. La vérité y est cachée.",
						"spanish": "Ilusiones que se repiten en el vacío. La verdad se esconde ahí.",
						"vietnamese": "Những ảo ảnh lặp đi lặp lại trong hư vô. Sự thật ẩn chứa bên trong đó.",
						"thai": "ภาพลวงตาที่ซ้ำไปซ้ำมาในความว่างเปล่า ความจริงซ่อนอยู่ในนั้น",
						"hindi": "शून्यता में दोहराए जाने वाले भ्रम। सच्चाई उसी में छिपी है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "결국 모두 환영이라는 건가?",
						"english": "So, in the end, it's all just an illusion?",
						"japanese": "結局、全て幻影だというのか？",
						"chinese": "最终，一切都只是幻象吗？",
						"french": "Finalement, tout n'est qu'illusion ?",
						"spanish": "¿Al final, todo es una ilusión?",
						"vietnamese": "Cuối cùng, tất cả đều là ảo ảnh sao?",
						"thai": "สรุปแล้วทั้งหมดเป็นแค่ภาพลวงตาอย่างนั้นเหรอ?",
						"hindi": "तो, अंत में, यह सब सिर्फ एक भ्रम है?"
					}
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"speaker": "eira",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						5,
						3
					]
				},
				{
					"emotion": "sad",
					"speaker": "eira",
					"content": {
						"korean": "길을 찾지 못하는 건, 대공과 같은 마음일 거다.",
						"english": "Being unable to find the way... it must be the same feeling as the Grand Duke.",
						"japanese": "道を見つけられないのは、大公と同じ気持ちだろう。",
						"chinese": "找不到路，大概和大公的心情一样吧。",
						"french": "Ne pas trouver son chemin... c'est sans doute le même sentiment que le Grand-Duc.",
						"spanish": "No poder encontrar el camino... debe ser el mismo sentimiento que el del Gran Duque.",
						"vietnamese": "Không tìm thấy lối đi, chắc hẳn là cảm giác giống như Đại Công tước vậy.",
						"thai": "การหาทางไม่เจอ คงเป็นความรู้สึกเดียวกับแกรนด์ดยุก",
						"hindi": "रास्ता न खोज पाना... यह ग्रैंड ड्यूक जैसी ही भावना होगी।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "대공도 길을 잃었다는 말인가?",
						"english": "You mean the Grand Duke is also lost?",
						"japanese": "大公も道に迷ったということか？",
						"chinese": "你的意思是，大公也迷路了？",
						"french": "Le Grand-Duc est aussi perdu, c'est ça ?",
						"spanish": "¿Significa que el Gran Duque también está perdido?",
						"vietnamese": "Ý là Đại Công tước cũng bị lạc đường sao?",
						"thai": "หมายความว่าแกรนด์ดยุกก็หลงทางด้วยเหรอ?",
						"hindi": "क्या तुम्हारा मतलब है कि ग्रैंड ड्यूक भी भटक गया है?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"emotion": "sad",
					"content": {
						"korean": "그는 진정한 안식처를 찾아 헤매고 있어. 이 미로처럼.",
						"english": "He wanders, searching for true sanctuary, much like this labyrinth.",
						"japanese": "彼は真の安息の地を求め、この迷宮のように彷徨っている。",
						"chinese": "他在寻找真正的安息之地，就像这迷宫一样。",
						"french": "Il erre, cherchant un véritable sanctuaire, tout comme ce labyrinthe.",
						"spanish": "Él vaga, buscando un verdadero santuario, como este laberinto.",
						"vietnamese": "Hắn lang thang tìm kiếm nơi trú ẩn thực sự, giống như mê cung này.",
						"thai": "เขากำลังร่อนเร่ค้นหาสถานที่พักพิงที่แท้จริง เหมือนกับเขาวงกตนี้",
						"hindi": "वह सच्चे ठिकाने की तलाश में भटक रहा है, इस भूलभुलैया की तरह।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"emotion": "base",
					"content": {
						"korean": "이제 돌아갈 길은 없어. 오직 앞으로 나아가 진실을 마주해야만 한다.",
						"english": "There's no turning back now. We must push forward and confront the truth.",
						"japanese": "もう引き返せない。ただ前へ進み、真実と向き合うのみだ。",
						"chinese": "已经没有回头路了。只能前进，直面真相。",
						"french": "Plus de retour en arrière possible. Nous devons avancer et affronter la vérité.",
						"spanish": "Ya no hay vuelta atrás. Debemos avanzar y enfrentar la verdad.",
						"vietnamese": "Không còn đường quay lại. Chỉ có thể tiến về phía trước và đối mặt với sự thật.",
						"thai": "ไม่มีทางย้อนกลับแล้ว มีแต่ต้องก้าวไปข้างหน้าและเผชิญหน้ากับความจริงเท่านั้น",
						"hindi": "अब पीछे हटने का कोई रास्ता नहीं है। हमें आगे बढ़ना होगा और सच्चाई का सामना करना होगा।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "…그래, 더 이상 멈출 수 없어.",
						"english": "...Yes, I can't stop now.",
						"japanese": "…ああ、もう止まれない。",
						"chinese": "……是的，我不能再停下了。",
						"french": "...Oui, je ne peux plus m'arrêter.",
						"spanish": "...Sí, ya no puedo detenerme.",
						"vietnamese": "...Đúng vậy, không thể dừng lại nữa.",
						"thai": "…ใช่, หยุดไม่ได้อีกแล้ว",
						"hindi": "...हाँ, मैं अब रुक नहीं सकता।"
					},
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "하찮은 것들. 영원히 이 미로를 헤매게 될 것이다.",
						"english": "Insignificant beings. You shall wander this labyrinth forever.",
						"japanese": "「取るに足らない者たちめ。永遠にこの迷宮をさまようがいい。」",
						"chinese": "卑微之物。你们将永远在这迷宫中徘徊。",
						"french": "Êtres insignifiants. Vous errerez dans ce labyrinthe pour l'éternité.",
						"spanish": "Seres insignificantes. Vagaréis por este laberinto para siempre.",
						"vietnamese": "Những kẻ hèn mọn. Ngươi sẽ mãi mãi lang thang trong mê cung này.",
						"thai": "พวกไร้ค่า เจ้าจะหลงทางอยู่ในเขาวงกตนี้ตลอดไป",
						"hindi": "तुच्छ प्राणी। तुम इस भूलभुलैया में हमेशा भटकते रहोगे।"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…아직 끝나지 않았어. 진실을 밝힐 거야.",
						"english": "...It's not over yet. I will reveal the truth.",
						"japanese": "「…まだ終わっていない。真実を明らかにする。」",
						"chinese": "…还没结束。我会揭示真相。",
						"french": "...Ce n'est pas encore fini. Je révélerai la vérité.",
						"spanish": "...Aún no ha terminado. Revelaré la verdad.",
						"vietnamese": "...Chưa kết thúc đâu. Ta sẽ phơi bày sự thật.",
						"thai": "...ยังไม่จบแค่นี้ ฉันจะเปิดเผยความจริง",
						"hindi": "...अभी खत्म नहीं हुआ है। मैं सच्चाई उजागर करूंगा।"
					},
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "크윽… 헛된… 노력이다…",
						"english": "Ugh... Vain... efforts...",
						"japanese": "くっ…無駄な…努力だ…",
						"chinese": "呃……徒劳的……努力……",
						"french": "Ugh... Efforts... vains...",
						"spanish": "Ugh... Esfuerzos... vanos...",
						"vietnamese": "Khụ... nỗ lực... vô ích...",
						"thai": "อึก… ความพยายาม… ที่ไร้ค่า…",
						"hindi": "उफ़... व्यर्थ... प्रयास..."
					},
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"speaker": "random_boss",
					"emotion": "sad",
					"content": {
						"korean": "나는… 영원히… 이곳에… 갇혀있을… 테니…",
						"english": "I... will... be... trapped... here... forever...",
						"japanese": "私…は…永遠に…ここに…囚われ…続けるだろう…",
						"chinese": "我……将……永远……被困……在这里……",
						"french": "Je... serai... piégé... ici... pour toujours...",
						"spanish": "Yo... estaré... atrapado... aquí... para siempre...",
						"vietnamese": "Ta... sẽ... mãi... mãi... bị giam... cầm... tại đây...",
						"thai": "ข้า… จะ… ถูก… ขัง… อยู่ที่นี่… ชั่วนิรันดร์…",
						"hindi": "मैं... हमेशा... के लिए... यहीं... फँसा... रहूँगा..."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "갇혀있다고? 대체 무슨 말이지?",
						"english": "Trapped? What do you mean?",
						"japanese": "「閉じ込められている？どういうことだ？」",
						"chinese": "被困住了？这是什么意思？",
						"french": "Piégés ? Que voulez-vous dire ?",
						"spanish": "¿Atrapados? ¿Qué quieres decir?",
						"vietnamese": "Bị mắc kẹt ư? Ý của ngươi là sao?",
						"thai": "ถูกขังไว้เหรอ? หมายความว่าอะไร?",
						"hindi": "फँसा हुआ? तुम्हारा मतलब क्या है?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "거짓된 왕좌의 그림자는 사라졌지만, 진정한 대공의 외로움은 더욱 깊은 심연에 있었다.",
						"english": "Though the shadow of the false throne vanished, the true Archduke's loneliness plunged into a deeper abyss.",
						"japanese": "「偽りの王座の影は消えたが、真の大公の孤独はより深い深淵にあった。」",
						"chinese": "虚假王座的阴影消失了，但真正大公的孤独却陷入了更深的深渊。",
						"french": "Bien que l'ombre du faux trône ait disparu, la solitude du véritable Archiduc plongeait dans un abysse plus profond.",
						"spanish": "Aunque la sombra del falso trono se desvaneció, la soledad del verdadero Archiduque se hundió en un abismo más profundo.",
						"vietnamese": "Mặc dù bóng dáng ngai vàng giả dối đã tan biến, nhưng sự cô đơn của Đại Công tước chân chính lại chìm sâu hơn vào vực thẳm.",
						"thai": "แม้เงาแห่งบัลลังก์จอมปลอมจะหายไป แต่ความโดดเดี่ยวของอาร์คดยุกผู้แท้จริงกลับดำดิ่งลงสู่ห้วงลึกที่มืดมิดยิ่งกว่า",
						"hindi": "यद्यपि झूठे सिंहासन की छाया गायब हो गई, सच्चे आर्कड्यूक का अकेलापन और भी गहरे रसातल में समा गया।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "그들은 이제, 얼어붙은 시간의 반복을 멈출 방법을 찾아야만 했다.",
						"english": "Now, they had to find a way to stop the repetition of frozen time.",
						"japanese": "「彼らは今、凍てついた時間の繰り返しを止める方法を見つけなければならなかった。」",
						"chinese": "现在，他们必须找到一个方法来阻止冻结时间的重复。",
						"french": "Ils devaient maintenant trouver un moyen d'arrêter la répétition du temps figé.",
						"spanish": "Ahora, tenían que encontrar la manera de detener la repetición del tiempo congelado.",
						"vietnamese": "Giờ đây, họ phải tìm cách ngăn chặn sự lặp lại của thời gian đóng băng.",
						"thai": "บัดนี้ พวกเขาต้องหาวิธีหยุดยั้งการซ้ำรอยของห้วงเวลาที่หยุดนิ่ง",
						"hindi": "अब, उन्हें जमे हुए समय के दोहराव को रोकने का एक तरीका खोजना होगा।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "마침내, 거대한 얼음 왕좌가 보였다. 그곳에는 정체 모를 그림자가 앉아 있었다.",
						"english": "At last, a colossal ice throne appeared. An unknown shadow sat upon it.",
						"japanese": "ついに、巨大な氷の玉座が見えた。そこには正体不明の影が座っていた。",
						"chinese": "最终，一座巨大的冰之王座映入眼帘。一个不明的影子坐在上面。",
						"french": "Enfin, un trône de glace colossal apparut. Une ombre inconnue y siégeait.",
						"spanish": "Finalmente, un trono de hielo colosal apareció. Una sombra desconocida se sentaba en él.",
						"vietnamese": "Cuối cùng, một ngai vàng băng khổng lồ hiện ra. Một bóng đen vô danh đang ngồi trên đó.",
						"thai": "ในที่สุด, บัลลังก์น้ำแข็งมหึมาก็ปรากฏขึ้น เงาลึกลับตนหนึ่งกำลังนั่งอยู่บนนั้น",
						"hindi": "आखिरकार, एक विशाल बर्फीला सिंहासन दिखाई दिया। उस पर एक अज्ञात छाया बैठी थी।"
					}
				},
				{
					"content": {
						"korean": "…누가 감히, 나의 왕국을 침범하는가?",
						"english": "...Who dares invade my kingdom?",
						"japanese": "…誰が、この我が王国を侵すというのか？",
						"chinese": "……谁敢，入侵我的王国？",
						"french": "...Qui ose envahir mon royaume ?",
						"spanish": "¿Quién osa invadir mi reino?",
						"vietnamese": "Kẻ nào dám, xâm phạm vương quốc của ta?",
						"thai": "ใครบังอาจ, รุกล้ำอาณาจักรของข้า?",
						"hindi": "कौन हिम्मत करता है, मेरे राज्य पर आक्रमण करने की?"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "네가 왕좌의 주인인가? 이 모든 환영을 만든 자가?",
						"english": "Are you the master of the throne? The one who conjured all these illusions?",
						"japanese": "お前が玉座の主か？この全ての幻影を作り出した者が？",
						"chinese": "你是王座的主人吗？是制造出所有这些幻象的人吗？",
						"french": "Es-tu le maître du trône ? Celui qui a créé toutes ces illusions ?",
						"spanish": "¿Eres el dueño del trono? ¿El que creó todas estas ilusiones?",
						"vietnamese": "Ngươi là chủ nhân của ngai vàng ư? Kẻ đã tạo ra tất cả ảo ảnh này?",
						"thai": "เจ้าคือเจ้าของบัลลังก์หรือ? ผู้สร้างมายาทั้งหมดนี้?",
						"hindi": "क्या तुम सिंहासन के स्वामी हो? वह जिसने ये सभी भ्रम पैदा किए?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "진실 따위는 중요하지 않다. 이곳은 영원히 나의 것이다.",
						"english": "Truth matters not. This place is eternally mine.",
						"japanese": "真実など重要ではない。ここは永遠に、我がものだ。",
						"chinese": "真相无关紧要。这里永远是我的。",
						"french": "La vérité n'a aucune importance. Cet endroit est éternellement mien.",
						"spanish": "La verdad no importa. Este lugar es eternamente mío.",
						"vietnamese": "Sự thật không quan trọng. Nơi đây mãi mãi thuộc về ta.",
						"thai": "ความจริงไม่สำคัญ ที่นี่เป็นของข้าชั่วนิรันดร์",
						"hindi": "सच्चाई मायने नहीं रखती। यह स्थान सदा के लिए मेरा है।"
					},
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "너희는 이 환영 속에서 영원히 헤매게 될 것이다. 사라져라.",
						"english": "You shall wander eternally within this illusion. Vanish.",
						"japanese": "お前たちはこの幻影の中で永遠に彷徨うが良い。消え失せろ。",
						"chinese": "你们将永远在这幻象中徘徊。消失吧。",
						"french": "Vous errerez éternellement dans cette illusion. Disparaissez.",
						"spanish": "Vagaréis eternamente en esta ilusión. Desapareced.",
						"vietnamese": "Các ngươi sẽ mãi mãi lang thang trong ảo ảnh này. Biến mất đi.",
						"thai": "พวกเจ้าจะต้องหลงทางอยู่ในภาพลวงตานี้ชั่วนิรันดร์ จงหายไปซะ",
						"hindi": "तुम इस भ्रम में सदा के लिए भटकते रहोगे। गायब हो जाओ।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"거짓된 왕좌로 향하는 마지막 길.",
			"얼음 미로의 감시자, 에이라가 그들을 막아섰다.",
			"환영은 더욱 강렬해지고, 진실은 희미해졌다.",
			"이곳에서, 대공의 외로움이 빚어낸 왕국이 그 실체를 드러낸다."
		],
		"english": [
			"The final path to the false throne.",
			"Aira, guardian of the ice labyrinth, stood in their way.",
			"The illusions grew stronger, and the truth faded.",
			"Here, the kingdom born of the Grand Duke's loneliness reveals its true form."
		],
		"japanese": [
			"偽りの玉座へ続く最後の道。",
			"氷の迷宮の監視者、アイラが彼らの行く手を阻んだ。",
			"幻影はさらに強くなり、真実はかすんでいった。",
			"ここで、大公の孤独が生み出した王国がその正体を現す。"
		],
		"chinese": [
			"通往虚假王座的最后之路。",
			"冰之迷宫的守护者艾拉挡住了他们的去路。",
			"幻象愈发强烈，真相却愈发模糊。",
			"在这里，大公的孤独所铸就的王国展现出它的真面目。"
		],
		"french": [
			"Le dernier chemin vers le faux trône.",
			"Aira, la gardienne du labyrinthe de glace, leur barra la route.",
			"Les illusions s'intensifiaient, et la vérité s'estompait.",
			"Ici, le royaume né de la solitude du Grand-Duc révèle sa véritable nature."
		],
		"spanish": [
			"El último camino al trono falso.",
			"Aira, la guardiana del laberinto de hielo, se interpuso en su camino.",
			"Las ilusiones se hicieron más fuertes, y la verdad se desvaneció.",
			"Aquí, el reino forjado por la soledad del Gran Duque revela su verdadera forma."
		],
		"vietnamese": [
			"Con đường cuối cùng đến ngai vàng giả dối.",
			"Aira, người giám hộ mê cung băng, đã chặn đường họ.",
			"Ảo ảnh càng mãnh liệt, sự thật càng phai nhạt.",
			"Nơi đây, vương quốc do sự cô đơn của Đại Công tước tạo nên lộ diện."
		],
		"thai": [
			"เส้นทางสุดท้ายสู่บัลลังก์จอมปลอม",
			"ไอรา ผู้พิทักษ์เขาวงกตน้ำแข็ง ยืนขวางทางพวกเขา",
			"ภาพลวงตาแข็งแกร่งขึ้น และความจริงจางหายไป",
			"ที่นี่ อาณาจักรที่เกิดจากความเหงาของแกรนด์ดยุกเผยโฉมที่แท้จริง"
		],
		"hindi": [
			"झूठे सिंहासन का अंतिम मार्ग।",
			"हिम भूलभुलैया की संरक्षक, ऐरा ने उन्हें रोका।",
			"भ्रम और प्रबल हुए, और सत्य धूमिल हो गया।",
			"यहीं पर, महा ड्यूक की एकांतता से जन्मा राज्य अपना असली रूप प्रकट करता है।"
		]
	}
} as const;
