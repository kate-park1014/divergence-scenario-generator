export const scenario_modern_concordia_20_04 = {
	"scenario_id": "modern_concordia_20_04",
	"order": 4,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"max": {
			"id": "mon_6e8c1577-89e2-49f6-a9f3-a6521b9e7f59",
			"name": {
				"korean": "맥스",
				"english": "Max",
				"japanese": "マックス",
				"chinese": "麦克斯",
				"french": "Max",
				"spanish": "Max",
				"vietnamese": "Max",
				"thai": "แม็กซ์",
				"hindi": "मैक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8bd7f351-400b-46f9-828f-aa2542734900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/62971060-c904-4d96-afcd-d11f831b3e00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "버려진 공장 지대. 낡은 철골 구조물이 을씨년스럽게 서 있었다.",
						"english": "An abandoned factory district. Old steel structures stood eerily.",
						"japanese": "廃工場地帯。古い鉄骨構造物が不気味にそびえ立っていた。",
						"chinese": "废弃的工厂区。老旧的钢结构阴森地矗立着。",
						"french": "Un quartier d'usines abandonnées. De vieilles structures en acier se dressaient lugubrement.",
						"spanish": "Un distrito de fábricas abandonadas. Viejas estructuras de acero se alzaban siniestramente.",
						"vietnamese": "Khu nhà máy bỏ hoang. Những cấu trúc thép cũ kỹ đứng sừng sững một cách rùng rợn.",
						"thai": "ย่านโรงงานร้าง โครงสร้างเหล็กเก่าคร่ำคร่าตั้งตระหง่านอย่างน่าขนลุก.",
						"hindi": "एक परित्यक्त कारखाना क्षेत्र। पुरानी इस्पात संरचनाएँ डरावनी लग रही थीं।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "여긴 왜 이렇게 으스스해.",
						"english": "Why is it so eerie here?",
						"japanese": "ここ、なんでこんなに不気味なんだ。",
						"chinese": "这里怎么这么阴森。",
						"french": "Pourquoi est-ce si lugubre ici ?",
						"spanish": "¿Por qué es tan espeluznante aquí?",
						"vietnamese": "Sao ở đây lại rùng rợn thế này.",
						"thai": "ทำไมที่นี่มันน่าขนลุกจัง.",
						"hindi": "यह जगह इतनी डरावनी क्यों है?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "max",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "max",
					"content": {
						"korean": "...너도 콩코르디아를 쫓는 건가.",
						"english": "...Are you also chasing Concordia?",
						"japanese": "...お前もコンコルディアを追っているのか。",
						"chinese": "...你也在追捕康科迪亚吗？",
						"french": "...Toi aussi, tu poursuis Concordia ?",
						"spanish": "...¿Tú también persigues a Concordia?",
						"vietnamese": "...Ngươi cũng đang truy đuổi Concordia sao?",
						"thai": "...นายก็กำลังตามล่าคอนคอร์เดียอยู่เหมือนกันสินะ.",
						"hindi": "...क्या तुम भी कॉनकॉर्डिया का पीछा कर रहे हो?"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "당신은 누구죠?",
						"english": "Who are you?",
						"japanese": "あなたは誰だ？",
						"chinese": "你是谁？",
						"french": "Qui êtes-vous ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Ngươi là ai?",
						"thai": "คุณคือใคร?",
						"hindi": "आप कौन हैं?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "맥스. 콩코르디아에게 가족을 빼앗긴 자.",
						"english": "Max. One whose family was taken by Concordia.",
						"japanese": "マックス。コンコルディアに家族を奪われた者だ。",
						"chinese": "麦克斯。一个被康科迪亚夺走家人的人。",
						"french": "Max. Celui dont la famille a été enlevée par Concordia.",
						"spanish": "Max. Aquel cuya familia fue arrebatada por Concordia.",
						"vietnamese": "Max. Kẻ bị Concordia cướp đi gia đình.",
						"thai": "แม็กซ์ ผู้ที่ครอบครัวถูกคอนคอร์เดียพรากไป.",
						"hindi": "मैक्स। वह जिसका परिवार कॉनकॉर्डिया ने छीन लिया।"
					},
					"emotion": "angry",
					"speaker": "max"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"speaker": "max",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "콩코르디아는 단순한 사기꾼이 아니야.",
						"english": "Concordia isn't just a mere swindler.",
						"japanese": "コンコルディアは単なる詐欺師じゃない。",
						"chinese": "康科迪亚不只是个骗子。",
						"french": "Concordia n'est pas qu'un simple escroc.",
						"spanish": "Concordia no es solo un simple estafador.",
						"vietnamese": "Concordia không phải là một kẻ lừa đảo đơn thuần.",
						"thai": "คอนคอร์เดียไม่ใช่แค่คนหลอกลวงธรรมดา.",
						"hindi": "कॉनordia सिर्फ एक धोखेबाज नहीं है।"
					},
					"emotion": "angry",
					"speaker": "max"
				},
				{
					"content": {
						"korean": "그는 모든 것을 '가족'이라 부르며 동화시킨다.",
						"english": "He calls everything 'family' and assimilates it.",
						"japanese": "彼はすべてを「家族」と呼び、同化させる。",
						"chinese": "他把一切都称为“家人”并同化。",
						"french": "Il appelle tout 'famille' et l'assimile.",
						"spanish": "Él llama a todo 'familia' y lo asimila.",
						"vietnamese": "Hắn gọi mọi thứ là 'gia đình' và đồng hóa chúng.",
						"thai": "เขาเรียกทุกสิ่งว่า 'ครอบครัว' และหลอมรวมมัน.",
						"hindi": "वह सब कुछ को 'परिवार' कहता है और उसे आत्मसात करता है।"
					},
					"speaker": "max",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "동화… 그게 무슨 뜻이야?",
						"english": "Assimilation... what does that mean?",
						"japanese": "同化…それ、どういう意味？",
						"chinese": "同化…那是什么意思？",
						"french": "Assimilation... qu'est-ce que ça veut dire ?",
						"spanish": "Asimilación... ¿qué significa eso?",
						"vietnamese": "Đồng hóa... nghĩa là sao?",
						"thai": "การหลอมรวม... มันหมายความว่าอะไร?",
						"hindi": "आत्मसात… उसका क्या मतलब है?"
					},
					"type": "speech"
				},
				{
					"speaker": "max",
					"emotion": "sad",
					"content": {
						"korean": "자아를 지우고, 하나의 거대한 유기체처럼 섞어버리는 거지.",
						"english": "Erasing individuality and mixing them like a single giant organism.",
						"japanese": "自己を消し去り、一つの巨大な有機体のように混ぜ合わせることだ。",
						"chinese": "抹去自我，像一个巨大的有机体一样混合。",
						"french": "Effacer l'individualité et les mélanger comme un seul organisme géant.",
						"spanish": "Borrar el yo y mezclarlos como un solo organismo gigante.",
						"vietnamese": "Xóa bỏ bản ngã, trộn lẫn họ như một sinh vật khổng lồ duy nhất.",
						"thai": "ลบล้างตัวตน และผสมผสานพวกเขาให้เป็นเหมือนสิ่งมีชีวิตขนาดยักษ์เดียว.",
						"hindi": "स्वयं को मिटाना, और उन्हें एक विशाल जीव की तरह मिला देना।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_1",
					"emotion": "sad",
					"content": {
						"korean": "...그 그림에서 봤던 것 같아.",
						"english": "...I think I saw that in that painting.",
						"japanese": "…あの絵で見た気がする。",
						"chinese": "……我好像在那幅画里见过。",
						"french": "...Je crois que j'ai vu ça dans ce tableau.",
						"spanish": "...Creo que lo vi en esa pintura.",
						"vietnamese": "...Tôi nghĩ tôi đã thấy điều đó trong bức tranh đó.",
						"thai": "...ฉันคิดว่าฉันเห็นมันในภาพวาดนั้น.",
						"hindi": "...मुझे लगता है मैंने वह उस चित्र में देखा था।"
					},
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"speaker": "max",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "너희가 콩코르디아를 막지 못한다면…",
						"english": "If you can't stop Concordia...",
						"japanese": "お前たちがコンコルディアを止められなければ…",
						"chinese": "如果你们无法阻止康科迪亚…",
						"french": "Si vous ne pouvez pas arrêter Concordia...",
						"spanish": "Si no pueden detener a Concordia...",
						"vietnamese": "Nếu các ngươi không thể ngăn chặn Concordia...",
						"thai": "ถ้าพวกเจ้าหยุดคอนคอร์เดียไม่ได้…",
						"hindi": "यदि तुम कॉनकॉर्डिया को नहीं रोक पाए तो…"
					},
					"emotion": "angry",
					"speaker": "max"
				},
				{
					"speaker": "max",
					"emotion": "angry",
					"content": {
						"korean": "결국 모두가 같은 운명을 맞이할 거야.",
						"english": "Eventually, everyone will face the same fate.",
						"japanese": "結局、誰もが同じ運命を迎えるだろう。",
						"chinese": "最终，每个人都将面临相同的命运。",
						"french": "Finalement, tout le monde subira le même sort.",
						"spanish": "Al final, todos enfrentarán el mismo destino.",
						"vietnamese": "Cuối cùng, tất cả sẽ đối mặt với cùng một số phận.",
						"thai": "สุดท้ายแล้ว ทุกคนจะต้องเผชิญชะตากรรมเดียวกัน.",
						"hindi": "अंत में, सभी का भाग्य एक ही होगा।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "막을 수 있어.",
						"english": "We can stop it.",
						"japanese": "止められる。",
						"chinese": "我们可以阻止。",
						"french": "On peut l'arrêter.",
						"spanish": "Podemos detenerlo.",
						"vietnamese": "Chúng ta có thể ngăn chặn.",
						"thai": "เราหยุดมันได้.",
						"hindi": "हम रोक सकते हैं।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "max",
					"emotion": "angry",
					"content": {
						"korean": "전에 그랬던 것처럼, 또 무능하게 지켜만 볼 건가?",
						"english": "Will you just watch helplessly again, like before?",
						"japanese": "前にもそうだったように、また無力に見ているだけなのか？",
						"chinese": "难道又要像以前一样，无能为力地旁观吗？",
						"french": "Allez-vous encore regarder impuissants, comme avant ?",
						"spanish": "¿Volverás a observar impotente, como antes?",
						"vietnamese": "Ngươi lại sẽ chỉ đứng nhìn bất lực như trước đây sao?",
						"thai": "เจ้าจะเฝ้ามองอย่างไร้ความสามารถอีกครั้งเหมือนเมื่อก่อนรึไง?",
						"hindi": "क्या तुम पहले की तरह फिर से असहाय होकर देखते रहोगे?"
					}
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"emotion": "sad",
					"content": {
						"korean": "...!",
						"english": "...!",
						"japanese": "…！",
						"chinese": "……！",
						"french": "...!",
						"spanish": "...!",
						"vietnamese": "...!",
						"thai": "...!",
						"hindi": "...!"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "내가 뭘… 잘못했는데.",
						"english": "What did I... do wrong?",
						"japanese": "私が何を…間違ったっていうんだ。",
						"chinese": "我到底…做错了什么。",
						"french": "Qu'est-ce que j'ai... fait de mal ?",
						"spanish": "¿Qué hice... mal?",
						"vietnamese": "Tôi đã… làm gì sai chứ.",
						"thai": "ฉันทำอะไร… ผิดไป.",
						"hindi": "मैंने क्या… गलत किया।"
					},
					"speaker": "character_any",
					"emotion": "sad"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "max"
				},
				{
					"type": "speech",
					"content": {
						"korean": "나는 그저 복수를 원해. 너와는 달라.",
						"english": "I only want revenge. I'm not like you.",
						"japanese": "私はただ復讐を望むだけ。あなたとは違う。",
						"chinese": "我只想要复仇。我和你不一样。",
						"french": "Je ne désire que la vengeance. Je ne suis pas comme toi.",
						"spanish": "Solo quiero venganza. No soy como tú.",
						"vietnamese": "Ta chỉ muốn báo thù. Không giống ngươi.",
						"thai": "ฉันต้องการแค่การแก้แค้น ไม่เหมือนเธอ",
						"hindi": "मुझे बस बदला चाहिए। तुम मेरे जैसे नहीं हो।"
					},
					"speaker": "max",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "나는… 가해자인가, 피해자인가.",
						"english": "Am I... the aggressor, or the victim?",
						"japanese": "私は…加害者なのか、被害者なのか。",
						"chinese": "我…是施害者，还是受害者。",
						"french": "Suis-je... l'agresseur, ou la victime ?",
						"spanish": "¿Soy... el agresor, o la víctima?",
						"vietnamese": "Ta… là kẻ gây án, hay nạn nhân đây.",
						"thai": "ฉัน... เป็นผู้กระทำ หรือเหยื่อกันแน่",
						"hindi": "मैं… अपराधी हूं, या पीड़ित।"
					},
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그 경계는 이미 오래전에 사라졌어.",
						"english": "That boundary vanished long ago.",
						"japanese": "その境界は、もうずっと昔に消え去った。",
						"chinese": "那条界线早已消失不见。",
						"french": "Cette frontière a disparu il y a longtemps.",
						"spanish": "Esa frontera desapareció hace mucho tiempo.",
						"vietnamese": "Ranh giới đó đã biến mất từ lâu rồi.",
						"thai": "เส้นแบ่งนั้นหายไปนานแล้ว",
						"hindi": "वह सीमा तो बहुत पहले ही मिट चुकी है।"
					},
					"emotion": "base",
					"speaker": "max"
				},
				{
					"content": {
						"korean": "죄책감과 분노가 뒤섞인 공간. 빠져나갈 수 없는 미궁이었다.",
						"english": "A space where guilt and rage intertwined. An inescapable labyrinth.",
						"japanese": "罪悪感と怒りが混じり合った空間。抜け出せない迷宮だった。",
						"chinese": "一个混合着罪恶感和愤怒的空间。一个无法逃离的迷宫。",
						"french": "Un espace où la culpabilité et la rage s'entremêlaient. Un labyrinthe inextricable.",
						"spanish": "Un espacio donde la culpa y la ira se entrelazaban. Un laberinto ineludible.",
						"vietnamese": "Không gian hòa lẫn cảm giác tội lỗi và phẫn nộ. Một mê cung không lối thoát.",
						"thai": "สถานที่ที่ความรู้สึกผิดและความโกรธผสมปนเปกัน เขาวงกตที่หนีไม่พ้น",
						"hindi": "अपराधबोध और क्रोध का मिलाजुला स्थान। एक ऐसा भूलभुलैया जिससे बाहर निकलना असंभव था।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "미약한 존재들이여. 결국 '우리'가 될 거야.",
						"english": "Weaklings. You will ultimately become 'us'.",
						"japanese": "取るに足らぬ存在よ。いずれ『我々』となるだろう。",
						"chinese": "弱小的存在啊。终究会成为‘我们’的一部分。",
						"french": "Êtres insignifiants. Vous deviendrez 'nous' au final.",
						"spanish": "Seres insignificantes. Al final, os convertiréis en 'nosotros'.",
						"vietnamese": "Những kẻ yếu ớt. Rồi các ngươi cũng sẽ trở thành 'chúng ta'.",
						"thai": "เจ้าพวกสิ่งมีชีวิตที่อ่อนแอ ในที่สุดเจ้าก็จะต้องเป็น 'พวกเรา'.",
						"hindi": "तुच्छ प्राणियों। अंततः, तुम 'हम' बन जाओगे।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "...다시 일어설 거야. 반드시.",
						"english": "...I will rise again. I must.",
						"japanese": "…再び立ち上がろう。必ず。",
						"chinese": "……我会再次站起来。必。",
						"french": "...Je me relèverai. Absolument.",
						"spanish": "...Me levantaré de nuevo. Sin falta.",
						"vietnamese": "...Ta sẽ đứng dậy lần nữa. Nhất định.",
						"thai": "...ข้าจะลุกขึ้นยืนอีกครั้งให้ได้. อย่างแน่นอน.",
						"hindi": "...मैं फिर उठूँगा। अवश्य।"
					},
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "...우리는 하나. 결코 사라지지 않아.",
						"english": "...We are one. We will never disappear.",
						"japanese": "…我々は一つ。決して消え去ることはない。",
						"chinese": "…我们是一体的。绝不会消失。",
						"french": "...Nous sommes un. Nous ne disparaîtrons jamais.",
						"spanish": "...Somos uno. Nunca desapareceremos.",
						"vietnamese": "…Chúng ta là một. Vĩnh viễn không biến mất.",
						"thai": "...เราคือหนึ่งเดียว จะไม่มีวันหายไป",
						"hindi": "…हम एक हैं। कभी गायब नहीं होंगे।"
					},
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "모두가 '그'의 일부가 될 뿐이지.",
						"english": "Everyone will merely become a part of 'him'.",
						"japanese": "皆、『彼』の一部となるだけだ。",
						"chinese": "所有人都会成为“他”的一部分。",
						"french": "Tout le monde ne fera que devenir une partie de 'lui'.",
						"spanish": "Todos simplemente se convertirán en parte de 'él'.",
						"vietnamese": "Tất cả mọi người đều sẽ trở thành một phần của 'hắn' mà thôi.",
						"thai": "ทุกคนจะกลายเป็นส่วนหนึ่งของ 'เขา' เท่านั้น",
						"hindi": "हर कोई बस 'उसका' एक हिस्सा बन जाएगा।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "콩코르디아… 너를 용서 못 해.",
						"english": "Concordia... I won't forgive you.",
						"japanese": "コンコルディア…貴様を許さない。",
						"chinese": "康科迪亚……我不会原谅你。",
						"french": "Concordia... Je ne te pardonnerai jamais.",
						"spanish": "Concordia... No te perdonaré.",
						"vietnamese": "Concordia... Ta sẽ không tha thứ cho ngươi.",
						"thai": "คอนคอร์เดีย... ข้าจะไม่มีวันให้อภัยเจ้า.",
						"hindi": "कॉनकॉर्डिया... मैं तुम्हें माफ़ नहीं करूँगा。"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "쓰러진 괴물의 잔해가 아스라이 빛났다. 그러나 진실은 더 깊은 곳에 있었다.",
						"english": "The fallen monster's remnants shimmered faintly. Yet, the truth lay deeper.",
						"japanese": "倒れた怪物の残骸が淡く光った。だが、真実はもっと深きにあった。",
						"chinese": "倒下的怪物残骸发出微弱的光芒。然而，真相隐藏得更深。",
						"french": "Les restes du monstre abattu brillaient faiblement. Mais la vérité se trouvait plus profondément.",
						"spanish": "Los restos del monstruo caído brillaban tenuemente. Pero la verdad yacía en lo más profundo.",
						"vietnamese": "Tàn dư của quái vật ngã xuống lóe sáng mờ nhạt. Nhưng sự thật nằm sâu hơn nữa.",
						"thai": "ซากของสัตว์ประหลาดที่ล้มลงเปล่งประกายจางๆ ทว่าความจริงซ่อนอยู่ลึกกว่านั้น.",
						"hindi": "गिरे हुए राक्षस के अवशेष हल्के से चमके। परंतु, सत्य और भी गहरा था。"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "다음 목표는 콩코르디아의 심장부. 마침내 모든 것이 밝혀질 때였다.",
						"english": "Next target: Concordia's core. At last, all would be revealed.",
						"japanese": "次の目標はコンコルディアの心臓部。ついに、全てが明らかになる時だった。",
						"chinese": "下一个目标是康科迪亚的心脏地带。所有的一切终将揭示。",
						"french": "Prochain objectif : le cœur de Concordia. Enfin, tout serait révélé.",
						"spanish": "Siguiente objetivo: el corazón de Concordia. Por fin, todo sería revelado.",
						"vietnamese": "Mục tiêu kế tiếp: trái tim của Concordia. Cuối cùng, mọi thứ sẽ được phơi bày.",
						"thai": "เป้าหมายต่อไปคือใจกลางของคอนคอร์เดีย ในที่สุด ทุกสิ่งจะถูกเปิดเผย.",
						"hindi": "अगला लक्ष्य: कॉनकॉर्डिया का हृदय। अंततः, सब कुछ सामने आएगा。"
					},
					"type": "speech"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "방 중앙에 거대한 그림자가 일렁였다. 형체를 알 수 없는 존재.",
						"english": "A colossal shadow flickered in the center of the room. An entity of unknown form.",
						"japanese": "部屋の中央に巨大な影が揺らめいた。形のない存在。",
						"chinese": "房间中央，一道巨大的影子在摇曳。一个形态不明的存在。",
						"french": "Une ombre colossale vacillait au centre de la pièce. Une entité de forme inconnue.",
						"spanish": "Una sombra colosal parpadeaba en el centro de la habitación. Una entidad de forma desconocida.",
						"vietnamese": "Một bóng đen khổng lồ chập chờn giữa phòng. Một thực thể vô định hình.",
						"thai": "เงาขนาดใหญ่ปรากฏขึ้นกลางห้อง ร่างที่ไม่อาจระบุรูปทรงได้",
						"hindi": "कमरे के बीच में एक विशाल छाया लहरा रही थी। एक अज्ञात आकार का अस्तित्व।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "…왔구나. 새로운 '가족'이여.",
						"english": "...You've come. New 'family' member.",
						"japanese": "…来たか。新たな『家族』よ。",
						"chinese": "…你来了。新的“家人”啊。",
						"french": "...Tu es venu. Nouveau membre de la 'famille'.",
						"spanish": "...Has venido. Nuevo 'familiar'.",
						"vietnamese": "…Ngươi đến rồi. Hỡi 'gia đình' mới.",
						"thai": "...มาแล้วสินะ 'ครอบครัว' ใหม่เอ๋ย",
						"hindi": "…तुम आ गए। मेरे नए 'परिवार' के सदस्य।"
					}
				},
				{
					"content": {
						"korean": "헛소리 마! 콩코르디아의 괴물!",
						"english": "Nonsense! Monster of Concordia!",
						"japanese": "くだらない！コンコルディアの怪物め！",
						"chinese": "胡说八道！康科迪亚的怪物！",
						"french": "Foutaises ! Monstre de Concordia !",
						"spanish": "¡Tonterías! ¡Monstruo de Concordia!",
						"vietnamese": "Đừng nói nhảm! Quái vật của Concordia!",
						"thai": "เพ้อเจ้อ! สัตว์ประหลาดแห่งคอนคอร์เดีย!",
						"hindi": "बकवास बंद करो! कॉनकॉर्डिया के राक्षस!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이해할 거야. 우리의 '조화'는 완벽하니까.",
						"english": "You'll understand. Our 'harmony' is perfect.",
						"japanese": "理解するだろう。我々の『調和』は完璧だからな。",
						"chinese": "你会明白的。我们的“和谐”是完美的。",
						"french": "Tu comprendras. Notre 'harmonie' est parfaite.",
						"spanish": "Entenderás. Nuestra 'armonía' es perfecta.",
						"vietnamese": "Ngươi sẽ hiểu thôi. Bởi 'hòa hợp' của chúng ta là hoàn hảo.",
						"thai": "เธอจะเข้าใจ 'ความกลมกลืน' ของเราสมบูรณ์แบบ",
						"hindi": "तुम समझ जाओगे। हमारी 'सद्भावना' परिपूर्ण है।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"배신의 메아리가 울려 퍼지는 곳.",
			"콩코르디아의 가면 뒤에 숨겨진 진실이 드러난다.",
			"잃어버린 가족의 그림자가 주인공을 덮치고.",
			"모든 것이 뒤섞인 혼돈 속에서, 죄책감은 다시 날카로운 칼날이 된다."
		],
		"english": [
			"Where the echoes of betrayal resonate.",
			"The truth hidden behind Concordia's mask is revealed.",
			"The shadow of a lost family looms over the protagonist.",
			"In the chaos where everything is intertwined, guilt once again becomes a sharp blade."
		],
		"japanese": [
			"裏切りの残響が響き渡る場所。",
			"コンコルディアの仮面の下に隠された真実が暴かれる。",
			"失われた家族の影が主人公を覆い尽くす。",
			"全てが入り乱れた混沌の中で、罪悪感は再び鋭い刃となる。"
		],
		"chinese": [
			"背叛的回声在此回荡。",
			"康科迪亚面具下的真相浮出水面。",
			"失去的家人之影笼罩着主人公。",
			"在一切混杂的混沌中，罪恶感再次化为锐利的刀刃。"
		],
		"french": [
			"Là où résonnent les échos de la trahison.",
			"La vérité cachée derrière le masque de Concordia se révèle.",
			"L'ombre d'une famille perdue enveloppe le protagoniste.",
			"Dans le chaos où tout est entremêlé, la culpabilité redevient une lame affûtée."
		],
		"spanish": [
			"Donde resuenan los ecos de la traición.",
			"La verdad oculta tras la máscara de Concordia sale a la luz.",
			"La sombra de una familia perdida acecha al protagonista.",
			"En el caos donde todo se mezcla, la culpa se convierte de nuevo en una hoja afilada."
		],
		"vietnamese": [
			"Nơi tiếng vọng phản bội vang lên.",
			"Sự thật ẩn giấu sau mặt nạ của Concordia được hé lộ.",
			"Bóng ma gia đình đã mất bao trùm lấy nhân vật chính.",
			"Giữa hỗn loạn nơi mọi thứ xen kẽ, cảm giác tội lỗi lại trở thành một lưỡi dao sắc bén."
		],
		"thai": [
			"ที่ซึ่งเสียงสะท้อนของการทรยศก้องกังวาน.",
			"ความจริงที่ซ่อนอยู่เบื้องหลังหน้ากากของคอนคอร์เดียถูกเปิดเผย.",
			"เงาของครอบครัวที่หายไปปกคลุมตัวละครหลัก.",
			"ในความสับสนวุ่นวายที่ทุกสิ่งปะปนกัน ความรู้สึกผิดก็กลายเป็นคมดาบอีกครั้ง."
		],
		"hindi": [
			"जहाँ विश्वासघात की प्रतिध्वनि गूँजती है।",
			"कॉनordia के नकाब के पीछे छिपा सच सामने आता है।",
			"खोए हुए परिवार की परछाई नायक को घेर लेती है।",
			"सब कुछ आपस में उलझा हुआ है, इस अराजकता में, अपराधबोध फिर से एक तीखी तलवार बन जाता है।"
		]
	}
} as const;
