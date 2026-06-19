export const scenario_forest_nutcommander_3_01 = {
	"scenario_id": "forest_nutcommander_3_01",
	"order": 1,
	"act": "intro",
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
			"숲은 한때 풍요로웠다. 도토리와 열매가 지천에 널렸고, 작은 생명들이 노래했다.",
			"어느 날, 모든 것이 사라졌다.",
			"도토리는 흔적도 없이 사라졌고, 굶주린 그림자만 남았다.",
			"무엇이 이 숲의 균형을 깨뜨렸는가?"
		],
		"english": [
			"The forest was once abundant. Acorns and berries were everywhere, and small creatures sang.",
			"One day, everything vanished.",
			"The acorns were gone without a trace, leaving only hungry shadows.",
			"What shattered the balance of this forest?"
		],
		"japanese": [
			"森はかつて豊かだった。ドングリや木の実があちこちにあり、小さな生き物たちが歌っていた。",
			"ある日、すべてが消え去った。",
			"ドングリは跡形もなく消え、飢えた影だけが残った。",
			"何がこの森の均衡を打ち破ったのか？"
		],
		"chinese": [
			"森林曾经富饶。橡子和浆果随处可见，小生灵们欢唱着。",
			"有一天，一切都消失了。",
			"橡子消失得无影无踪，只剩下饥饿的影子。",
			"是什么打破了这片森林的平衡？"
		],
		"french": [
			"La forêt était jadis abondante. Glands et baies foisonnaient, et de petites créatures chantaient.",
			"Un jour, tout disparut.",
			"Les glands avaient disparu sans laisser de trace, ne laissant que des ombres affamées.",
			"Qu'est-ce qui a brisé l'équilibre de cette forêt ?"
		],
		"spanish": [
			"El bosque fue antaño abundante. Bellotas y bayas proliferaban, y pequeñas criaturas cantaban.",
			"Un día, todo desapareció.",
			"Las bellotas desaparecieron sin dejar rastro, dejando solo sombras hambrientas.",
			"¿Qué rompió el equilibrio de este bosque?"
		],
		"vietnamese": [
			"Rừng từng rất trù phú. Hạt dẻ và quả mọng khắp nơi, và những sinh vật nhỏ bé ca hát.",
			"Một ngày nọ, mọi thứ biến mất.",
			"Hạt dẻ biến mất không dấu vết, chỉ còn lại những bóng đói.",
			"Điều gì đã phá vỡ sự cân bằng của khu rừng này?"
		],
		"thai": [
			"ป่าเคยอุดมสมบูรณ์ ลูกโอ๊กและผลเบอร์รี่มีอยู่ทุกหนแห่ง และสิ่งมีชีวิตเล็กๆ ร้องเพลง",
			"วันหนึ่ง ทุกสิ่งหายไป",
			"ลูกโอ๊กหายไปอย่างไร้ร่องรอย เหลือเพียงเงาที่หิวโหย",
			"อะไรที่ทำให้สมดุลของป่านี้พังทลายลง?"
		],
		"hindi": [
			"जंगल कभी भरपूर था। बलूत के फल और जामुन हर जगह थे, और छोटे जीव गाते थे。",
			"एक दिन, सब कुछ गायब हो गया।",
			"बलूत के फल बिना किसी निशान के गायब हो गए, केवल भूखी छायाएँ बचीं।",
			"किसने इस जंगल का संतुलन बिगाड़ा?"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "숲은 조용했다. 한때 풍요로웠던 흔적만 남아 있었다.",
						"english": "The forest was silent. Only traces of its former abundance remained.",
						"japanese": "森は静かだった。かつての豊かさの痕跡だけが残っていた。",
						"chinese": "森林一片寂静。只剩下昔日繁荣的痕迹。",
						"french": "La forêt était silencieuse. Seules des traces de son ancienne abondance subsistaient.",
						"spanish": "El bosque estaba en silencio. Solo quedaban rastros de su antigua abundancia.",
						"vietnamese": "Khu rừng im lặng. Chỉ còn lại dấu vết của sự phong phú trước đây.",
						"thai": "ป่าเงียบสงบ เหลือเพียงร่องรอยความอุดมสมบูรณ์ในอดีต",
						"hindi": "जंगल शांत था। उसकी पिछली बहुतायत के केवल निशान बचे थे।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "여기가 그렇게 풍요로웠다고?",
						"english": "This place was once so abundant?",
						"japanese": "ここがそんなに豊かだったのか？",
						"chinese": "这里曾经如此富饶吗？",
						"french": "Cet endroit était-il si abondant ?",
						"spanish": "¿Este lugar fue tan abundante?",
						"vietnamese": "Nơi này từng trù phú đến vậy sao?",
						"thai": "ที่นี่เคยอุดมสมบูรณ์ขนาดนั้นเลยหรือ?",
						"hindi": "यह जगह कभी इतनी भरपूर थी?"
					},
					"emotion": "base"
				},
				{
					"action": "enter",
					"spot": [
						4,
						3
					],
					"speaker": "bracken",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "bracken",
					"type": "speech",
					"content": {
						"korean": "봐, 이 흔적들. 모두 굶주린 동물들이야.",
						"english": "Look, these tracks. All from hungry animals.",
						"japanese": "見て、この痕跡。全部、飢えた動物たちのものだ。",
						"chinese": "看，这些痕迹。都是饥饿的动物留下的。",
						"french": "Regarde, ces traces. Toutes proviennent d'animaux affamés.",
						"spanish": "Mira, estas huellas. Todas de animales hambrientos.",
						"vietnamese": "Nhìn đi, những dấu vết này. Toàn là của động vật đói.",
						"thai": "ดูสิ ร่องรอยเหล่านี้ ทั้งหมดมาจากสัตว์ที่หิวโหย",
						"hindi": "देखो, ये निशान। सब भूखे जानवरों के हैं।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "그리고 이 자국들… 도토리들이 한 방향으로 끌려간 거야.",
						"english": "And these marks... the acorns were dragged in one direction.",
						"japanese": "そしてこの跡… ドングリが一方向に引きずられたんだ。",
						"chinese": "还有这些印记……橡子被拖向一个方向。",
						"french": "Et ces marques... les glands ont été traînés dans une seule direction.",
						"spanish": "Y estas marcas... las bellotas fueron arrastradas en una dirección.",
						"vietnamese": "Và những dấu này... hạt dẻ bị kéo theo một hướng.",
						"thai": "และรอยเหล่านี้... ลูกโอ๊กถูกลากไปในทิศทางเดียวกัน",
						"hindi": "और ये निशान... बलूत के फल एक ही दिशा में खींचे गए थे।"
					},
					"emotion": "base",
					"speaker": "bracken",
					"type": "speech"
				},
				{
					"content": {
						"korean": "누군가 싹쓸이한 거네.",
						"english": "Someone cleared them all out.",
						"japanese": "誰かが全部持ち去ったんだね。",
						"chinese": "有人把它们一扫而光了。",
						"french": "Quelqu'un a tout raflé.",
						"spanish": "Alguien se los llevó todos.",
						"vietnamese": "Ai đó đã quét sạch hết.",
						"thai": "มีคนกวาดไปหมดเลยสินะ",
						"hindi": "किसी ने सब साफ कर दिया।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "bracken",
					"type": "direction",
					"spot": [
						3,
						3
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "도토리나무 아래에 숨겨진 동굴이 있었는데… 텅 비었어.",
						"english": "There was a hidden cave under the acorn tree... it's empty.",
						"japanese": "ドングリの木の下に隠された洞窟があったのに… 空っぽだ。",
						"chinese": "橡子树下有一个隐藏的洞穴……空了。",
						"french": "Il y avait une grotte cachée sous le chêne... elle est vide.",
						"spanish": "Había una cueva escondida bajo el roble... está vacía.",
						"vietnamese": "Có một cái hang ẩn dưới cây sồi... nó trống rỗng.",
						"thai": "มีถ้ำซ่อนอยู่ใต้ต้นโอ๊ก... มันว่างเปล่า",
						"hindi": "बलूत के पेड़ के नीचे एक छिपी हुई गुफा थी... वह खाली है।"
					},
					"emotion": "sad",
					"speaker": "bracken",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "대체 누가 이런 짓을?",
						"english": "Who on earth did this?",
						"japanese": "一体誰がこんなことを？",
						"chinese": "究竟是谁干的？",
						"french": "Qui diable a fait ça ?",
						"spanish": "¿Quién diablos hizo esto?",
						"vietnamese": "Kẻ nào đã làm chuyện này?",
						"thai": "ใครกันแน่ที่ทำแบบนี้?",
						"hindi": "आख़िर किसने किया ये सब?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "여기저기서 들려오는 소문이 있어. 거대한 그림자가 나타났다고.",
						"english": "There are rumors going around. A giant shadow has appeared.",
						"japanese": "あちこちで噂が飛び交っている。巨大な影が現れたと。",
						"chinese": "到处都有传闻。一个巨大的身影出现了。",
						"french": "Des rumeurs circulent. Une ombre gigantesque est apparue.",
						"spanish": "Hay rumores por todas partes. Una sombra gigante ha aparecido.",
						"vietnamese": "Có tin đồn khắp nơi. Một bóng đen khổng lồ đã xuất hiện.",
						"thai": "มีข่าวลือแพร่สะพัด เงาขนาดยักษ์ปรากฏขึ้น",
						"hindi": "चारों ओर अफ़वाहें फैल रही हैं। एक विशाल छाया प्रकट हुई है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "bracken"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "bracken",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						3
					]
				},
				{
					"content": {
						"korean": "이건 새 거야. 누군가 최근까지 이곳을 뒤진 흔적이야.",
						"english": "This is new. Someone has been searching this place until recently.",
						"japanese": "これは新しい。誰かが最近までここを物色した痕跡だ。",
						"chinese": "这是新的。有人最近一直在搜查这里。",
						"french": "C'est nouveau. Quelqu'un a fouillé cet endroit jusqu'à récemment.",
						"spanish": "Esto es nuevo. Alguien ha estado buscando aquí hasta hace poco.",
						"vietnamese": "Cái này mới. Ai đó đã lục soát nơi này cho đến gần đây.",
						"thai": "นี่เป็นของใหม่ มีคนค้นหาที่นี่จนกระทั่งเมื่อเร็วๆ นี้",
						"hindi": "ये नया है। कोई हाल तक इस जगह की तलाश कर रहा था।"
					},
					"emotion": "base",
					"speaker": "bracken",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "아직 근처에 있을지도 몰라.",
						"english": "They might still be nearby.",
						"japanese": "まだ近くにいるかもしれない。",
						"chinese": "他们可能还在附近。",
						"french": "Ils sont peut-être encore dans les parages.",
						"spanish": "Quizás todavía estén cerca.",
						"vietnamese": "Họ có thể vẫn còn ở gần đây.",
						"thai": "พวกเขาอาจจะยังอยู่ใกล้ๆ",
						"hindi": "वे अभी भी आस-पास हो सकते हैं।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "조심해. 숲이 변했어. 예전 같지 않아.",
						"english": "Be careful. The forest has changed. It's not like it used to be.",
						"japanese": "気をつけろ。森が変わった。以前とは違う。",
						"chinese": "小心。森林变了。不再像以前那样了。",
						"french": "Fais attention. La forêt a changé. Ce n'est plus comme avant.",
						"spanish": "Ten cuidado. El bosque ha cambiado. Ya no es como antes.",
						"vietnamese": "Cẩn thận. Rừng đã thay đổi. Nó không còn như trước nữa.",
						"thai": "ระวังให้ดี ป่าเปลี่ยนไปแล้ว ไม่เหมือนเมื่อก่อนอีกแล้ว",
						"hindi": "सावधान रहो। जंगल बदल गया है। ये पहले जैसा नहीं रहा।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "bracken"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						1,
						3
					],
					"speaker": "bracken",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "bracken",
					"type": "speech",
					"content": {
						"korean": "이쯤 되면 돌아가는 게 좋을 것 같아.",
						"english": "I think it's best we turn back now.",
						"japanese": "そろそろ引き返した方がよさそうだ。",
						"chinese": "我觉得现在最好还是回去吧。",
						"french": "Je pense qu'il serait bon de faire demi-tour maintenant.",
						"spanish": "Creo que lo mejor sería regresar ahora.",
						"vietnamese": "Tôi nghĩ bây giờ chúng ta nên quay lại.",
						"thai": "ฉันคิดว่าเราควรกลับไปตอนนี้",
						"hindi": "मुझे लगता है कि अब हमें वापस लौट जाना चाहिए।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "안 돼. 더 깊이 들어가야 해.",
						"english": "No. We have to go deeper.",
						"japanese": "だめだ。もっと奥へ進む必要がある。",
						"chinese": "不行。我们必须深入。",
						"french": "Non. Nous devons aller plus loin.",
						"spanish": "No. Tenemos que ir más profundo.",
						"vietnamese": "Không. Chúng ta phải đi sâu hơn.",
						"thai": "ไม่ เราต้องเข้าไปให้ลึกกว่านี้",
						"hindi": "नहीं। हमें और गहराई तक जाना होगा।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "bracken",
					"content": {
						"korean": "위험해. 이 이상은… 알 수 없어.",
						"english": "It's dangerous. Beyond this... I don't know.",
						"japanese": "危険だ。これ以上は…分からない。",
						"chinese": "危险。再往前…我不知道。",
						"french": "C'est dangereux. Au-delà de ça… je ne sais pas.",
						"spanish": "Es peligroso. Más allá de esto... no lo sé.",
						"vietnamese": "Nguy hiểm. Vượt quá điều này... tôi không biết.",
						"thai": "มันอันตราย เกินกว่านี้... ฉันไม่รู้",
						"hindi": "ये ख़तरनाक है। इससे आगे... मुझे नहीं पता।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그래도, 난 가야 해.",
						"english": "Still, I have to go.",
						"japanese": "それでも、私は行かなければならない。",
						"chinese": "即使如此，我还是得去。",
						"french": "Pourtant, je dois y aller.",
						"spanish": "Aun así, tengo que ir.",
						"vietnamese": "Dù vậy, tôi vẫn phải đi.",
						"thai": "ถึงอย่างนั้น ฉันก็ต้องไป",
						"hindi": "फिर भी, मुझे जाना होगा।"
					},
					"emotion": "angry"
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "거대한 그림자의 힘에 압도되었다. 숲의 어둠이 다시 내려앉았다.",
						"english": "Overwhelmed by the colossal shadow's power. Darkness descended upon the forest once more.",
						"japanese": "巨大な影の力に圧倒された。森の闇が再び降り注いだ。",
						"chinese": "被巨大的暗影之力压倒了。森林的黑暗再次降临。",
						"french": "Submergé par la puissance de l'ombre colossale. L'obscurité retomba sur la forêt.",
						"spanish": "Abrumado por el poder de la sombra colosal. La oscuridad descendió sobre el bosque una vez más.",
						"vietnamese": "Bị áp đảo bởi sức mạnh của bóng tối khổng lồ. Bóng tối của khu rừng lại bao trùm.",
						"thai": "ถูกพลังของเงายักษ์ครอบงำ ความมืดของป่ากลับมาอีกครั้ง.",
						"hindi": "विशालकाय परछाई की शक्ति से अभिभूत हो गया। जंगल में अंधेरा फिर से छा गया।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "겨우 이 정도인가. 숲의 모든 도토리는 나의 것이다.",
						"english": "Is this all? All the forest's acorns are mine.",
						"japanese": "せいぜいこの程度か。森のドングリは全て我がものだ。",
						"chinese": "就这点本事吗？森林里所有的橡子都是我的。",
						"french": "Ce n'est que ça ? Tous les glands de la forêt sont miens.",
						"spanish": "¿Es esto todo? Todas las bellotas del bosque son mías.",
						"vietnamese": "Chỉ có thế này thôi sao. Tất cả hạt dẻ trong rừng đều là của ta.",
						"thai": "แค่นี้เองเหรอ? ลูกโอ๊กทั้งหมดในป่าเป็นของข้า.",
						"hindi": "बस इतना ही? जंगल के सभी बलूत के फल मेरे हैं।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "젠장… 다시 돌아올 거야!",
						"english": "Damn it... I'll be back!",
						"japanese": "ちくしょう…また戻ってくる！",
						"chinese": "该死……我还会回来的！",
						"french": "Maudit... Je reviendrai !",
						"spanish": "¡Maldita sea... volveré!",
						"vietnamese": "Khốn kiếp... Ta sẽ quay lại!",
						"thai": "บ้าจริง... ข้าจะกลับมา!",
						"hindi": "धिक्कार है... मैं वापस आऊँगा!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "거대한 그림자가 길을 막아섰다. 알 수 없는 위압감이 느껴졌다.",
						"english": "A giant shadow blocked the path. An unknown sense of dread filled the air.",
						"japanese": "巨大な影が道を塞いだ。未知の威圧感が感じられた。",
						"chinese": "一个巨大的身影挡住了去路。一种莫名的压迫感袭来。",
						"french": "Une ombre gigantesque bloquait le chemin. Une sensation d'oppression inconnue se fit sentir.",
						"spanish": "Una sombra gigante bloqueó el camino. Una sensación desconocida de pavor se sintió.",
						"vietnamese": "Một bóng đen khổng lồ chặn đường. Một cảm giác áp lực không rõ nguồn gốc ập đến.",
						"thai": "เงาขนาดใหญ่ขวางทาง ความรู้สึกกดดันที่ไม่รู้จักแผ่ซ่าน",
						"hindi": "एक विशाल छाया ने रास्ता रोक दिया। एक अज्ञात भयावहता महसूस हुई।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "감히 여기까지 온 어리석은 자들.",
						"english": "Fools who dared to come this far.",
						"japanese": "ここまで来た愚か者どもめ。",
						"chinese": "胆敢闯入此地的愚蠢之徒。",
						"french": "Fous qui osent venir jusqu'ici.",
						"spanish": "Necios que osaron llegar hasta aquí.",
						"vietnamese": "Lũ ngu ngốc dám mò đến tận đây.",
						"thai": "พวกโง่เขลาที่กล้ามาถึงที่นี่.",
						"hindi": "मूर्ख जो यहाँ तक आने की हिम्मत रखते हैं।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "네 짓이구나. 도토리를 훔치고 숲을 망친 게!",
						"english": "It was your doing! Stealing the acorns and ruining the forest!",
						"japanese": "お前の仕業か。ドングリを盗み、森を荒らしたのも！",
						"chinese": "原来是你！偷走橡子，破坏森林的也是你！",
						"french": "C'était ton œuvre ! Voler les glands et ruiner la forêt !",
						"spanish": "¡Fue obra tuya! ¡Robar las bellotas y arruinar el bosque!",
						"vietnamese": "Là ngươi sao. Kẻ đã trộm hạt dẻ và phá hoại khu rừng!",
						"thai": "เป็นฝีมือแกเอง! ขโมยลูกโอ๊กและทำลายป่า!",
						"hindi": "यह तुम्हारी करतूत थी! बलूत के फल चुराना और जंगल को बर्बाद करना!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "훔쳤다고? 모두 나의 것이 될 운명이었을 뿐.",
						"english": "Stolen? They were merely destined to be mine.",
						"japanese": "盗んだだと？全ては我がものとなる運命だっただけだ。",
						"chinese": "偷？它们注定都会是我的。",
						"french": "Volés ? Ils étaient simplement destinés à être miens.",
						"spanish": "¿Robados? Simplemente estaban destinados a ser míos.",
						"vietnamese": "Trộm ư? Chúng vốn dĩ đã định là của ta.",
						"thai": "ขโมยงั้นหรือ? พวกมันแค่ถูกกำหนดให้เป็นของข้าต่างหาก.",
						"hindi": "चुराए? वे तो बस मेरे होने के लिए नियत थे।"
					},
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 쓰러졌다. 그제야 숲에 희미한 빛이 스며들었다.",
						"english": "The colossal shadow fell. Only then did a faint light seep into the forest.",
						"japanese": "巨大な影が倒れた。その時ようやく、森にかすかな光が差し込んだ。",
						"chinese": "巨大的暗影倒下了。森林才终于透出一丝微光。",
						"french": "L'ombre colossale s'effondra. Ce n'est qu'alors qu'une faible lumière pénétra dans la forêt.",
						"spanish": "La colosal sombra cayó. Solo entonces una tenue luz se filtró en el bosque.",
						"vietnamese": "Bóng tối khổng lồ đã sụp đổ. Mãi đến lúc đó, một tia sáng mờ nhạt mới len lỏi vào khu rừng.",
						"thai": "เงายักษ์ล้มลง ในที่สุดแสงสลัวก็ส่องเข้ามาในป่า.",
						"hindi": "विशालकाय परछाई गिर गई। तभी जंगल में हल्की रोशनी फैल गई।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "크크… 겨우 이 정도에 만족할 줄 아느냐… {random_boss}는… 영원히….",
						"english": "Heh heh... Do you think I'd be satisfied with just this...? {random_boss} is... eternal...",
						"japanese": "クク…これしきで満足すると思うか… {random_boss}は…永遠に…。",
						"chinese": "呵呵……你以为我会满足于此吗…… {random_boss}是……永恒的……",
						"french": "Hé hé... Penses-tu que je me contenterais de ça...? {random_boss} est... éternel...",
						"spanish": "Je je... ¿Crees que me conformaría con esto...? {random_boss} es... eterno...",
						"vietnamese": "Khà khà... Ngươi nghĩ ta sẽ hài lòng chỉ với chừng này sao... {random_boss} là... vĩnh viễn...",
						"thai": "ฮิฮิ... แกคิดว่าแค่นี้จะพอใจรึไง... {random_boss} คือ... นิรันดร์...",
						"hindi": "हँ हँ... क्या तुम्हें लगता है कि मैं बस इतने से संतुष्ट हो जाऊँगा...? {random_boss} है... शाश्वत..."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "무슨 말을 하는 거야?",
						"english": "What are you talking about?",
						"japanese": "何を言っているんだ？",
						"chinese": "你在说什么？",
						"french": "De quoi parles-tu ?",
						"spanish": "¿De qué estás hablando?",
						"vietnamese": "Ngươi đang nói gì vậy?",
						"thai": "แกกำลังพูดถึงอะไร?",
						"hindi": "तुम क्या बात कर रहे हो?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "쓰러진 그림자는 더 이상 움직이지 않았다. 하지만 숲은 아직 완전히 평화를 찾지 못했다. 또 다른 장군이 어둠 속에서 깨어나고 있었다.",
						"english": "The fallen shadow no longer moved. But the forest had not yet found complete peace. Another general was awakening in the darkness.",
						"japanese": "倒れた影はもう動かなかった。だが森はまだ完全に平和を取り戻していなかった。別の将軍が闇の中で目覚めつつあった。",
						"chinese": "倒下的暗影不再动弹。但森林尚未完全恢复平静。另一位将军正在黑暗中苏醒。",
						"french": "L'ombre tombée ne bougeait plus. Mais la forêt n'avait pas encore retrouvé une paix totale. Un autre général s'éveillait dans l'obscurité.",
						"spanish": "La sombra caída ya no se movía. Pero el bosque aún no había encontrado la paz completa. Otro general estaba despertando en la oscuridad.",
						"vietnamese": "Bóng tối đã ngã xuống không còn cử động. Nhưng khu rừng vẫn chưa hoàn toàn bình yên. Một vị tướng khác đang thức tỉnh trong bóng tối.",
						"thai": "เงาที่ล้มลงไม่เคลื่อนไหวอีกต่อไป แต่ป่ายังไม่พบความสงบสุขอย่างสมบูรณ์ แม่ทัพอีกคนกำลังตื่นขึ้นในความมืด.",
						"hindi": "गिरी हुई परछाई अब हिल नहीं रही थी। लेकिन जंगल को अभी पूरी शांति नहीं मिली थी। एक और सेनापति अंधेरे में जाग रहा था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			]
		}
	]
} as const;
