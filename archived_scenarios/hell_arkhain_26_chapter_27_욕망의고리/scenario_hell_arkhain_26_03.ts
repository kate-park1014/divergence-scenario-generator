export const scenario_hell_arkhain_26_03 = {
	"scenario_id": "hell_arkhain_26_03",
	"order": 3,
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
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "길고 어두운 복도 끝, 수많은 길이 펼쳐졌다.",
						"english": "At the end of a long, dark corridor, countless paths unfolded.",
						"japanese": "長く暗い廊下の終わりに、無数の道が広がっていた。",
						"chinese": "在漫长黑暗的走廊尽头，无数条道路展现在眼前。",
						"french": "Au bout d'un long couloir sombre, d'innombrables chemins se sont déployés.",
						"spanish": "Al final de un largo y oscuro pasillo, innumerables caminos se desplegaron.",
						"vietnamese": "Cuối một hành lang dài và tối, vô số con đường mở ra.",
						"thai": "สุดทางเดินที่ยาวและมืดมิด มีเส้นทางมากมายทอดยาวออกไป",
						"hindi": "एक लंबे, अंधेरे गलियारे के अंत में, अनगिनत रास्ते खुले।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "이게… 다 다른 길인가?",
						"english": "Are these… all different paths?",
						"japanese": "これが…全部違う道なのか？",
						"chinese": "这些……都是不同的路吗？",
						"french": "Sont-ce… tous des chemins différents ?",
						"spanish": "¿Son estos… todos caminos diferentes?",
						"vietnamese": "Đây… tất cả đều là những con đường khác nhau sao?",
						"thai": "นี่… คือทุกเส้นทางที่แตกต่างกันหรือเปล่า?",
						"hindi": "क्या ये… सभी अलग-अलग रास्ते हैं?"
					},
					"type": "speech"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "vex",
					"spot": [
						4,
						3
					]
				},
				{
					"emotion": "base",
					"speaker": "vex",
					"content": {
						"korean": "어떤 길을 택하든, 결국은 같은 곳으로.",
						"english": "Whichever path you choose, it ultimately leads to the same place.",
						"japanese": "どの道を選ぼうと、結局は同じ場所へ。",
						"chinese": "无论选择哪条路，最终都会通向同一个地方。",
						"french": "Quel que soit le chemin choisi, il mène finalement au même endroit.",
						"spanish": "Elijas el camino que elijas, al final llegarás al mismo lugar.",
						"vietnamese": "Dù chọn con đường nào, cuối cùng cũng về cùng một nơi.",
						"thai": "ไม่ว่าจะเลือกเส้นทางใด สุดท้ายก็จะนำไปสู่ที่เดียวกัน",
						"hindi": "कोई भी रास्ता चुनो, अंततः वह एक ही जगह ले जाता है।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…무슨 소리야?",
						"english": "…What are you talking about?",
						"japanese": "…どういうことだ？",
						"chinese": "……你说什么？",
						"french": "…De quoi parles-tu ?",
						"spanish": "…¿Qué estás diciendo?",
						"vietnamese": "…Anh đang nói cái gì vậy?",
						"thai": "…คุณกำลังพูดถึงอะไร?",
						"hindi": "…तुम क्या कह रहे हो?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "vex",
					"content": {
						"korean": "자유로운 선택? 그저 허상일 뿐.",
						"english": "Free choice? Just an illusion.",
						"japanese": "自由な選択？それはただの幻想に過ぎない。",
						"chinese": "自由选择？不过是虚象罢了。",
						"french": "Le libre choix ? Juste une illusion.",
						"spanish": "¿Libre elección? Solo una ilusión.",
						"vietnamese": "Lựa chọn tự do ư? Chỉ là ảo ảnh thôi.",
						"thai": "ทางเลือกอิสระ? แค่ภาพลวงตาเท่านั้น",
						"hindi": "स्वतंत्र चुनाव? बस एक भ्रम।"
					},
					"emotion": "sad"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"speaker": "vex",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "vex",
					"content": {
						"korean": "보아라. 저 거울 속에 비친 너의 얼굴을.",
						"english": "Behold. Your face reflected in that mirror.",
						"japanese": "見よ。あの鏡に映るお前の顔を。",
						"chinese": "看啊。你倒映在那面镜子里的脸。",
						"french": "Contemple. Ton visage reflété dans ce miroir.",
						"spanish": "Contempla. Tu rostro reflejado en ese espejo.",
						"vietnamese": "Hãy nhìn xem. Khuôn mặt của ngươi phản chiếu trong tấm gương đó.",
						"thai": "จงดูใบหน้าของเจ้าที่สะท้อนอยู่ในกระจกบานนั้น",
						"hindi": "देखो। उस दर्पण में प्रतिबिंबित तुम्हारा चेहरा।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "내 얼굴이… 왜?",
						"english": "My face... why?",
						"japanese": "私の顔が… なぜ？",
						"chinese": "我的脸… 为什么？",
						"french": "Mon visage... pourquoi ?",
						"spanish": "Mi cara... ¿por qué?",
						"vietnamese": "Mặt tôi… sao vậy?",
						"thai": "หน้าฉัน... ทำไมล่ะ?",
						"hindi": "मेरा चेहरा... क्यों?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "vex",
					"content": {
						"korean": "익숙하면서도 낯설지 않나? 마치 타인의 것인 양.",
						"english": "Familiar yet strange, isn't it? As if it belongs to another.",
						"japanese": "見慣れているのに、どこか見知らぬ。まるで他人のもののように。",
						"chinese": "熟悉又陌生，不是吗？仿佛是他人的东西。",
						"french": "Familier et étrange à la fois, n'est-ce pas ? Comme si c'était celui d'un autre.",
						"spanish": "Familiar y extraño a la vez, ¿verdad? Como si fuera de otra persona.",
						"vietnamese": "Quen thuộc mà xa lạ, đúng không? Cứ như thể của người khác vậy.",
						"thai": "ทั้งคุ้นเคยและแปลกแยก ไม่ใช่หรือ? ราวกับเป็นของคนอื่น.",
						"hindi": "परिचित फिर भी अजीब, है ना? मानो किसी और का हो।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "vex",
					"content": {
						"korean": "어떤 길을 가든, 같은 표지판을 다시 마주칠 거다.",
						"english": "No matter which path you take, you'll encounter the same sign again.",
						"japanese": "どの道を選ぼうと、また同じ標識にぶつかるだろう。",
						"chinese": "无论你走哪条路，都会再次遇到同样的标志。",
						"french": "Quel que soit le chemin que tu prendras, tu recroiseras toujours le même panneau.",
						"spanish": "No importa qué camino tomes, volverás a encontrarte con la misma señal.",
						"vietnamese": "Dù đi con đường nào, ngươi cũng sẽ gặp lại tấm biển chỉ dẫn đó.",
						"thai": "ไม่ว่าเจ้าจะเลือกเส้นทางใด เจ้าก็จะพบกับป้ายเดิมอีกครั้ง.",
						"hindi": "तुम कोई भी रास्ता चुनो, तुम्हें वही निशान फिर से मिलेगा।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "운명론자처럼 말하지 마!",
						"english": "Don't talk like a fatalist!",
						"japanese": "運命論者みたいに言わないで！",
						"chinese": "别说得像个宿命论者！",
						"french": "Ne parle pas comme un fataliste !",
						"spanish": "¡No hables como un fatalista!",
						"vietnamese": "Đừng nói chuyện như một kẻ định mệnh luận!",
						"thai": "อย่าพูดเหมือนพวกเชื่อเรื่องโชคชะตา!",
						"hindi": "नियतिवादी की तरह बात मत करो!"
					}
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						3,
						3
					],
					"action": "enter",
					"speaker": "vex",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "base",
					"speaker": "vex",
					"content": {
						"korean": "네가 욕망하는 것이 무엇이든, 이 반지가 모든 것을 이룬다.",
						"english": "Whatever you desire, this ring will achieve all of it.",
						"japanese": "お前が何を望もうと、この指輪が全てを叶えるだろう。",
						"chinese": "无论你渴望什么，这枚戒指都能实现一切。",
						"french": "Quoi que tu désires, cet anneau réalisera tout.",
						"spanish": "Todo lo que desees, este anillo lo logrará.",
						"vietnamese": "Dù ngươi khao khát điều gì, chiếc nhẫn này sẽ giúp ngươi đạt được tất cả.",
						"thai": "ไม่ว่าเจ้าจะปรารถนาสิ่งใด แหวนวงนี้จะบันดาลให้ทุกสิ่ง.",
						"hindi": "तुम जो कुछ भी चाहोगे, यह अंगूठी वह सब पूरा करेगी।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "반지?",
						"english": "The ring?",
						"japanese": "指輪？",
						"chinese": "戒指？",
						"french": "L'anneau ?",
						"spanish": "¿El anillo?",
						"vietnamese": "Nhẫn?",
						"thai": "แหวนรึ?",
						"hindi": "अंगूठी?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "vex",
					"content": {
						"korean": "놓여있던 자리에서 빛이 깜빡이는 걸 보았나? 갈구하는 빛이지.",
						"english": "Did you see a light flickering from where it lay? A yearning light.",
						"japanese": "置いてあった場所で光が瞬いていたのを見たか？ 渇望する光だ。",
						"chinese": "你看到它所在的地方有光在闪烁吗？那是渴望的光芒。",
						"french": "As-tu vu une lumière clignoter là où il se trouvait ? Une lumière désireuse.",
						"spanish": "¿Viste una luz parpadeando donde yacía? Una luz anhelante.",
						"vietnamese": "Ngươi có thấy ánh sáng lấp lánh từ chỗ nó nằm không? Đó là ánh sáng của sự khao khát.",
						"thai": "เจ้าเห็นแสงที่กระพริบจากที่ที่มันวางอยู่หรือไม่? แสงแห่งความปรารถนา.",
						"hindi": "क्या तुमने देखा, जहाँ यह पड़ा था, वहाँ से एक रोशनी टिमटिमा रही थी? एक लालसा भरी रोशनी।"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그게 나랑 무슨 상관이야?",
						"english": "What does that have to do with me?",
						"japanese": "それが私と何の関係があるんだ？",
						"chinese": "那跟我有什么关系？",
						"french": "Qu'est-ce que ça a à voir avec moi ?",
						"spanish": "¿Qué tiene eso que ver conmigo?",
						"vietnamese": "Điều đó liên quan gì đến tôi?",
						"thai": "มันเกี่ยวอะไรกับฉัน?",
						"hindi": "उसका मुझसे क्या लेना-देना है?"
					}
				},
				{
					"type": "speech",
					"speaker": "vex",
					"content": {
						"korean": "곧 알게 될 거다. 네가 믿는 이들의 눈빛 속에서… 공허함을 보게 될 때.",
						"english": "You'll soon find out. When you see emptiness in the eyes of those you trust.",
						"japanese": "すぐに分かるだろう。お前が信じる者たちの瞳の中に… 虚無を見た時にな。",
						"chinese": "你很快就会明白。当你从你所信任的人的眼中… 看到空虚时。",
						"french": "Tu le sauras bientôt. Quand tu verras le vide dans les yeux de ceux en qui tu as confiance.",
						"spanish": "Pronto lo sabrás. Cuando veas el vacío en los ojos de aquellos en quienes confías.",
						"vietnamese": "Ngươi sẽ sớm biết thôi. Khi ngươi nhìn thấy sự trống rỗng trong ánh mắt của những người ngươi tin tưởng.",
						"thai": "เจ้าจะรู้ในไม่ช้า เมื่อเจ้าเห็นความว่างเปล่าในดวงตาของผู้ที่เจ้าเชื่อใจ.",
						"hindi": "तुम्हें जल्द ही पता चल जाएगा। जब तुम उन लोगों की आँखों में... खालीपन देखोगे जिन पर तुम भरोसा करते हो।"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "vex",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "vex",
					"content": {
						"korean": "이제 돌아갈 수 없는 길에 접어들었다.",
						"english": "You have now embarked on a path of no return.",
						"japanese": "もう後戻りできない道に足を踏み入れた。",
						"chinese": "你现在已经踏上了一条无法回头的路。",
						"french": "Tu as maintenant emprunté un chemin sans retour.",
						"spanish": "Ahora has tomado un camino sin retorno.",
						"vietnamese": "Giờ đây ngươi đã dấn thân vào con đường không thể quay lại.",
						"thai": "เจ้าได้ก้าวเข้าสู่เส้นทางที่ไม่อาจหวนคืนได้แล้ว.",
						"hindi": "अब तुम ऐसे रास्ते पर आ गए हो जहाँ से वापस नहीं जा सकते।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…결정은 내가 해.",
						"english": "...The decision is mine.",
						"japanese": "...私が決める。",
						"chinese": "...我来决定。",
						"french": "...La décision m'appartient.",
						"spanish": "...La decisión es mía.",
						"vietnamese": "...Quyết định là của ta.",
						"thai": "...การตัดสินใจเป็นของข้า",
						"hindi": "...निर्णय मेरा है。"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"speaker": "vex",
					"content": {
						"korean": "어리석은 선택. 모든 길은 이미 정해져 있었거늘.",
						"english": "A foolish choice. All paths were already set.",
						"japanese": "愚かな選択だ。全ての道は既に定められていたというのに。",
						"chinese": "愚蠢的选择。所有的道路早已注定。",
						"french": "Un choix insensé. Tous les chemins étaient déjà tracés.",
						"spanish": "Una elección tonta. Todos los caminos ya estaban trazados.",
						"vietnamese": "Một lựa chọn ngu ngốc. Mọi con đường đều đã được định sẵn.",
						"thai": "เป็นการตัดสินใจที่โง่เขลา ทุกเส้นทางถูกกำหนดไว้แล้ว",
						"hindi": "एक मूर्खतापूर्ण चुनाव। सभी रास्ते पहले से तय थे।"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그래도, 난 내 길을 갈 거야.",
						"english": "Still, I'll go my own way.",
						"japanese": "それでも、私は私の道を行く。",
						"chinese": "即便如此，我也会走我自己的路。",
						"french": "Pourtant, je suivrai mon propre chemin.",
						"spanish": "Aun así, seguiré mi propio camino.",
						"vietnamese": "Dù vậy, ta sẽ đi theo con đường của riêng ta.",
						"thai": "ถึงอย่างนั้น ข้าก็จะไปในทางของข้า",
						"hindi": "फिर भी, मैं अपने रास्ते जाऊँगा।"
					}
				},
				{
					"speaker": "vex",
					"content": {
						"korean": "어디로 가든, 결국 같은 파국이다.",
						"english": "No matter where you go, it's the same ruin in the end.",
						"japanese": "どこへ行こうと、結局は同じ破滅だ。",
						"chinese": "无论走向何方，最终都是同样的结局。",
						"french": "Où que tu ailles, la fin sera la même ruine.",
						"spanish": "Vayas donde vayas, al final es la misma ruina.",
						"vietnamese": "Dù đi đâu, cuối cùng cũng là một sự sụp đổ giống nhau.",
						"thai": "ไม่ว่าจะไปที่ใด สุดท้ายก็คือหายนะเดียวกัน",
						"hindi": "तुम कहीं भी जाओ, अंत में वही विनाश है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"duration_ms": 400,
					"direction": "down",
					"type": "direction",
					"speaker": "vex",
					"action": "exit"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "무너진 왕좌의 잔해 속, 거대한 그림자가 움직였다.",
						"english": "Amidst the ruins of the shattered throne, a colossal shadow stirred.",
						"japanese": "崩れ落ちた玉座の残骸の中、巨大な影が蠢いた。",
						"chinese": "在破碎王座的废墟中，一个巨大的身影动了。",
						"french": "Parmi les ruines du trône brisé, une ombre colossale s'est agitée.",
						"spanish": "Entre las ruinas del trono destrozado, una sombra colosal se movió.",
						"vietnamese": "Giữa đống đổ nát của ngai vàng sụp đổ, một bóng đen khổng lồ đã chuyển động.",
						"thai": "ท่ามกลางซากปรักหักพังของบัลลังก์ที่พังทลาย เงาขนาดมหึมาได้เคลื่อนไหว",
						"hindi": "टूटे हुए सिंहासन के खंडहरों के बीच, एक विशाल छाया हिली।"
					},
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 자. 기어코 여기까지 왔는가.",
						"english": "Fool. Have you really come all this way?",
						"japanese": "愚か者め。ついにここまで来たか。",
						"chinese": "愚蠢的人。你竟然一路走到这里？",
						"french": "Imbécile. Es-tu vraiment venu jusqu'ici ?",
						"spanish": "Tonto. ¿De verdad has llegado hasta aquí?",
						"vietnamese": "Kẻ ngu ngốc. Ngươi đã thực sự đến tận đây sao?",
						"thai": "คนโง่ เจ้ามาถึงที่นี่แล้วหรือ",
						"hindi": "मूर्ख। क्या तुम वाकई यहाँ तक आ गए हो?"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "넌 누구야?",
						"english": "Who are you?",
						"japanese": "お前は誰だ？",
						"chinese": "你是谁？",
						"french": "Qui es-tu ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Ngươi là ai?",
						"thai": "เจ้าเป็นใคร?",
						"hindi": "तुम कौन हो?"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "네 선택의 끝. 네가 걸어온 모든 길의 결론이다.",
						"english": "The end of your choice. The conclusion of every path you've walked.",
						"japanese": "お前の選択の末路。お前が歩んできた全ての道の結論だ。",
						"chinese": "你选择的终点。你所走过所有道路的结论。",
						"french": "La fin de ton choix. La conclusion de tous les chemins que tu as parcourus.",
						"spanish": "El fin de tu elección. La conclusión de cada camino que has recorrido.",
						"vietnamese": "Điểm cuối của lựa chọn của ngươi. Kết luận của mọi con đường ngươi đã đi.",
						"thai": "จุดจบของการเลือกของเจ้า ข้อสรุปของทุกเส้นทางที่เจ้าได้เดินมา",
						"hindi": "तुम्हारे चुनाव का अंत। तुम्हारे चले गए हर रास्ते का निष्कर्ष।"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "말도 안 돼!",
						"english": "That's impossible!",
						"japanese": "そんな馬鹿な！",
						"chinese": "不可能！",
						"french": "C'est impossible !",
						"spanish": "¡Imposible!",
						"vietnamese": "Không thể nào!",
						"thai": "เป็นไปไม่ได้!",
						"hindi": "यह नामुमकिन है!"
					},
					"type": "speech"
				},
				{
					"spot": [
						1,
						2
					],
					"speaker": "vex",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "vex",
					"content": {
						"korean": "보았나? 결국 이 길이다. 네가 선택한.",
						"english": "Did you see? This is the path after all. The one you chose.",
						"japanese": "見たか？結局この道だ。お前が選んだ。",
						"chinese": "看到了吗？最终就是这条路。你选择的。",
						"french": "As-tu vu ? C'est ce chemin après tout. Celui que tu as choisi.",
						"spanish": "¿Lo viste? Al final es este camino. El que elegiste.",
						"vietnamese": "Ngươi đã thấy chưa? Cuối cùng thì đây là con đường. Con đường ngươi đã chọn.",
						"thai": "เจ้าเห็นแล้วใช่ไหม? สุดท้ายก็คือเส้นทางนี้ เส้นทางที่เจ้าเลือก",
						"hindi": "देखा? आखिर यही रास्ता है। जो तुमने चुना।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "vex",
					"action": "exit",
					"direction": "left",
					"type": "direction",
					"duration_ms": 400
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "닥쳐! 난 내 의지로 싸운다!",
						"english": "Shut up! I fight by my own will!",
						"japanese": "黙れ！私は私の意志で戦う！",
						"chinese": "闭嘴！我凭我的意志而战！",
						"french": "Tais-toi ! Je me bats par ma propre volonté !",
						"spanish": "¡Cállate! ¡Lucho por mi propia voluntad!",
						"vietnamese": "Im đi! Ta chiến đấu theo ý chí của mình!",
						"thai": "หุบปาก! ข้าจะสู้ด้วยเจตจำนงของข้าเอง!",
						"hindi": "चुप रहो! मैं अपनी मर्जी से लड़ता हूँ!"
					},
					"emotion": "angry"
				}
			],
			"id": 15
		},
		{
			"dialogue": [],
			"lose_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "수많은 선택의 파편들이, 플레이어를 집어삼켰다."
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "보았는가, 어리석은 자. 모든 길은… 하나였음을."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "…아니. 아직 끝나지 않았어."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "끝없는 반복. 그것이 너의 운명이다."
					},
					"emotion": "base"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "크하하… 승리라 착각하는가? 아직… 아무것도 끝나지 않았다."
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리야?"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "네가… 곧 나다. 네 욕망이… 나를 만든다."
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 흩어지자, 공간이 뒤틀렸다. 끝없는 회랑이 다시 시작되는 듯했다."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "설마… 다시 처음으로?"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "진정한 자유는 아직 멀었다. 혹은… 존재하지 않는 것일지도."
					},
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"선택의 갈림길. 무한히 펼쳐진 줄 알았다.",
			"그러나 벡스는 비웃었다.",
			"어떤 길을 가든, 종착점은 정해져 있다고.",
			"이것이 자유인가, 혹은 거대한 조롱인가."
		],
		"english": [
			"Crossroads of choice. I thought they stretched endlessly.",
			"But Vex merely scoffed.",
			"No matter which path you take, the destination is fixed.",
			"Is this freedom, or a grand mockery?"
		],
		"japanese": [
			"選択の岐路。無限に広がっていると思った。",
			"しかし、ベックスは嘲笑った。",
			"どの道を選ぼうと、終着点は決まっていると。",
			"これが自由なのか、それとも壮大な嘲笑なのか。"
		],
		"chinese": [
			"选择的十字路口。我以为它会无限延伸。",
			"然而，维克斯只是嗤之以鼻。",
			"无论选择哪条路，终点都已注定。",
			"这是自由，还是巨大的嘲弄？"
		],
		"french": [
			"Au carrefour des choix. Je pensais qu'ils s'étendaient à l'infini.",
			"Mais Vex se moquait.",
			"Peu importe le chemin emprunté, la destination est fixée.",
			"Est-ce la liberté, ou une vaste mascarade ?"
		],
		"spanish": [
			"La encrucijada de las decisiones. Creí que se extendían sin fin.",
			"Pero Vex solo se burló.",
			"Que, elijas el camino que elijas, el destino está fijado.",
			"Es esto libertad, o una gran burla?"
		],
		"vietnamese": [
			"Ngã ba lựa chọn. Tôi cứ ngỡ chúng trải dài vô tận.",
			"Nhưng Vex chỉ cười khẩy.",
			"Rằng dù đi con đường nào, điểm đến đã được định sẵn.",
			"Đây là tự do, hay một trò chế nhạo to lớn?"
		],
		"thai": [
			"ทางแยกแห่งการเลือก ฉันคิดว่ามันทอดยาวไม่มีที่สิ้นสุด",
			"แต่ Vex แค่เยาะเย้ย",
			"ไม่ว่าจะเลือกเส้นทางใด จุดหมายปลายทางก็ถูกกำหนดไว้แล้ว",
			"นี่คืออิสรภาพ หรือการเยาะเย้ยอันยิ่งใหญ่กันแน่?"
		],
		"hindi": [
			"चुनाव का चौराहा। मैंने सोचा था कि वे अनंत तक फैले हुए हैं।",
			"लेकिन वेक्स ने केवल उपहास किया।",
			"कि तुम कोई भी रास्ता चुनो, गंतव्य निश्चित है।",
			"क्या यह स्वतंत्रता है, या एक बड़ा उपहास?"
		]
	}
} as const;
