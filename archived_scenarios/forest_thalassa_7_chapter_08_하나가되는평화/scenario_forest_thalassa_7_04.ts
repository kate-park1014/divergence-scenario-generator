export const scenario_forest_thalassa_7_04 = {
	"scenario_id": "forest_thalassa_7_04",
	"order": 4,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"briar": {
			"id": "mon_21f92820-190e-4d08-a75c-5d2c0b6d0a6b",
			"name": {
				"korean": "브라이어",
				"english": "Briar",
				"japanese": "ブライア",
				"chinese": "布莱尔",
				"french": "Briar",
				"spanish": "Briar",
				"vietnamese": "Briar",
				"thai": "ไบรอา",
				"hindi": "ब्रायर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/41fb431e-57e0-45e0-dde6-1a1f02c01200/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/dd89dff7-88ed-4444-28d8-5aaa85bd4e00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"숲의 고대 정령. 상처를 치유하는 자비로운 존재.",
			"그러나 그 평온 아래, 숲은 서서히 모든 것을 녹여내고 있었다.",
			"그녀는 아무도 돌려보내지 않았다. 돌아온 자는, 아무도 없었다.",
			"치유는 소멸로 향하는 고요한 길이었다."
		],
		"english": [
			"Ancient forest spirit. A benevolent being that heals wounds.",
			"Yet beneath its tranquility, the forest slowly dissolved all things.",
			"She sent no one back. No one ever returned.",
			"Healing was a silent path towards oblivion."
		],
		"japanese": [
			"森の古代精霊。傷を癒す慈悲深い存在。",
			"しかし、その静寂の下で、森はゆっくりとすべてを溶かしていた。",
			"彼女は誰も帰さなかった。戻ってきた者は、誰もいなかった。",
			"癒しは、消滅へと向かう静かな道だった。"
		],
		"chinese": [
			"森林的古老精灵。治愈伤口的仁慈存在。",
			"然而，在那份宁静之下，森林正缓慢地将一切消融。",
			"她没有让任何人回去。没有人回来过。",
			"治愈是一条通往消亡的寂静之路。"
		],
		"french": [
			"Ancien esprit de la forêt. Un être bienveillant qui guérit les blessures.",
			"Pourtant, sous sa tranquillité, la forêt dissolvait lentement toute chose.",
			"Elle ne renvoya personne. Personne n'est jamais revenu.",
			"La guérison était un chemin silencieux vers l'oubli."
		],
		"spanish": [
			"Antiguo espíritu del bosque. Un ser benevolente que cura heridas.",
			"Sin embargo, bajo su tranquilidad, el bosque disolvía lentamente todas las cosas.",
			"Ella no devolvió a nadie. Nadie regresó.",
			"La curación era un camino silencioso hacia el olvido."
		],
		"vietnamese": [
			"Linh hồn cổ xưa của rừng. Một thực thể nhân từ chữa lành vết thương.",
			"Thế nhưng bên dưới sự yên bình ấy, khu rừng đang dần dần hòa tan vạn vật.",
			"Cô ấy không trả lại bất kỳ ai. Không ai từng trở về.",
			"Chữa lành là một con đường thầm lặng dẫn đến sự diệt vong."
		],
		"thai": [
			"วิญญาณป่าโบราณ ผู้มีเมตตาเยียวยาบาดแผล",
			"ทว่าภายใต้ความสงบนั้น ป่ากำลังค่อยๆ สลายทุกสิ่ง",
			"เธอมิได้ส่งผู้ใดกลับ ไม่มีผู้ใดเคยกลับมา",
			"การเยียวยาเป็นเส้นทางอันเงียบงันสู่ความว่างเปล่า"
		],
		"hindi": [
			"वन की प्राचीन आत्मा। घावों को भरने वाली एक परोपकारी शक्ति।",
			"फिर भी, उस शांति के नीचे, जंगल धीरे-धीरे सब कुछ पिघला रहा था।",
			"उसने किसी को वापस नहीं भेजा। कोई भी वापस नहीं आया।",
			"उपचार विस्मृति की ओर एक शांत मार्ग था।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "숲 깊숙한 곳. 고요함이 모든 소리를 삼켰다.",
						"english": "Deep within the forest. Silence swallowed every sound.",
						"japanese": "森の奥深く。静寂がすべての音を飲み込んだ。",
						"chinese": "森林深处。寂静吞噬了所有声音。",
						"french": "Au plus profond de la forêt. Le silence a englouti tous les sons.",
						"spanish": "En lo profundo del bosque. El silencio lo devoró todo.",
						"vietnamese": "Sâu thẳm trong rừng. Sự tĩnh lặng nuốt chửng mọi âm thanh.",
						"thai": "ลึกเข้าไปในป่า ความเงียบกลืนกินทุกเสียง",
						"hindi": "जंगल के भीतर गहराई में। सन्नाटे ने हर आवाज़ को निगल लिया।"
					}
				},
				{
					"content": {
						"korean": "여기가 정령이 있는 곳이야?",
						"english": "Is this where the spirit is?",
						"japanese": "ここが精霊のいる場所か？",
						"chinese": "这里是精灵所在的地方吗？",
						"french": "C'est ici que se trouve l'esprit ?",
						"spanish": "¿Aquí es donde está el espíritu?",
						"vietnamese": "Đây có phải là nơi linh hồn ở không?",
						"thai": "นี่คือที่ที่วิญญาณอยู่หรือ?",
						"hindi": "क्या यहीं आत्मा है?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "briar",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "그래. 근데… 기분 나쁜 고요함이야.",
						"english": "Yes. But... it's an unsettling quiet.",
						"japanese": "ああ。でも… 気味の悪い静けさだ。",
						"chinese": "是的。但是… 这是一种令人不安的寂静。",
						"french": "Oui. Mais… c'est un silence troublant.",
						"spanish": "Sí. Pero… es una quietud inquietante.",
						"vietnamese": "Phải. Nhưng… đó là một sự tĩnh lặng đáng sợ.",
						"thai": "ใช่ แต่... มันเป็นความเงียบที่น่าขนลุก",
						"hindi": "हाँ। लेकिन… यह एक परेशान करने वाली शांति है।"
					},
					"speaker": "briar"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "무슨 일 있어?",
						"english": "What's wrong?",
						"japanese": "何かあった？",
						"chinese": "出什么事了？",
						"french": "Qu'est-ce qui ne va pas ?",
						"spanish": "¿Qué pasa?",
						"vietnamese": "Có chuyện gì vậy?",
						"thai": "มีอะไรเหรอ?",
						"hindi": "क्या हुआ?"
					}
				},
				{
					"content": {
						"korean": "정령의 기운이라기엔 너무… 무겁다.",
						"english": "For a spirit's aura, it's too... heavy.",
						"japanese": "精霊の気配にしては… 重すぎる。",
						"chinese": "对于精灵的气息来说，它太… 沉重了。",
						"french": "Pour l'aura d'un esprit, c'est trop… lourd.",
						"spanish": "Para el aura de un espíritu, es demasiado… pesada.",
						"vietnamese": "Đối với hào quang của một linh hồn, nó quá… nặng nề.",
						"thai": "สำหรับพลังวิญญาณแล้ว มัน... หนักหน่วงเกินไป",
						"hindi": "एक आत्मा के आभा के लिए, यह बहुत… भारी है।"
					},
					"speaker": "briar",
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"speaker": "briar",
					"type": "direction"
				},
				{
					"speaker": "briar",
					"content": {
						"korean": "땅이 이상해. 마치… 무언가를 묻어둔 것 같아.",
						"english": "The ground feels strange. As if... something is buried here.",
						"japanese": "地面がおかしい。まるで… 何かが埋められているようだ。",
						"chinese": "地面很奇怪。好像… 埋藏了什么东西。",
						"french": "Le sol est étrange. Comme si… quelque chose était enterré ici.",
						"spanish": "La tierra se siente extraña. Como si… algo estuviera enterrado aquí.",
						"vietnamese": "Mặt đất thật kỳ lạ. Cứ như… có thứ gì đó bị chôn vùi ở đây.",
						"thai": "พื้นดินแปลกๆ ราวกับว่า... มีบางอย่างถูกฝังอยู่",
						"hindi": "ज़मीन अजीब लग रही है। जैसे… कुछ दफ़न है यहाँ।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "뭘 말하는 거야?",
						"english": "What are you talking about?",
						"japanese": "何を言ってるんだ？",
						"chinese": "你在说什么？",
						"french": "De quoi parles-tu ?",
						"spanish": "¿De qué hablas?",
						"vietnamese": "Ngươi đang nói gì vậy?",
						"thai": "คุณกำลังพูดถึงอะไร?",
						"hindi": "तुम क्या कह रहे हो?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "아니야. 그냥 내 기분 탓이겠지.",
						"english": "No. It must be my imagination.",
						"japanese": "違う。気のせいだろう。",
						"chinese": "不。这可能只是我的错觉。",
						"french": "Non. Ce doit être mon imagination.",
						"spanish": "No. Debe ser mi imaginación.",
						"vietnamese": "Không. Chắc chỉ là cảm giác của tôi thôi.",
						"thai": "ไม่สิ คงเป็นแค่ความรู้สึกของฉันเอง",
						"hindi": "नहीं। यह मेरा वहम होगा।"
					},
					"speaker": "briar"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "…이대로 떠나는 게 좋을 텐데.",
						"english": "...It would be best to leave now.",
						"japanese": "…このまま去るのがいいだろう。",
						"chinese": "…最好现在就离开。",
						"french": "...Il serait préférable de partir maintenant.",
						"spanish": "...Sería mejor irse ahora.",
						"vietnamese": "...Tốt nhất là nên rời đi ngay bây giờ.",
						"thai": "...ตอนนี้ควรจะไปแล้ว",
						"hindi": "...अभी चले जाना ही बेहतर होगा।"
					}
				},
				{
					"content": {
						"korean": "누구야?",
						"english": "Who's there?",
						"japanese": "誰だ？",
						"chinese": "是谁？",
						"french": "Qui est là ?",
						"spanish": "¿Quién es?",
						"vietnamese": "Ai đó?",
						"thai": "ใครน่ะ?",
						"hindi": "कौन है वहाँ?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "여기는… 평화의 숲이다. 소란은 어울리지 않아.",
						"english": "This is... the Forest of Peace. Commotion doesn't suit it.",
						"japanese": "ここは…平和の森だ。騒ぎは似合わない。",
						"chinese": "这里是…和平森林。喧哗不适合这里。",
						"french": "C'est... la Forêt de la Paix. Le tumulte ne lui convient pas.",
						"spanish": "Esto es... el Bosque de la Paz. El alboroto no le sienta bien.",
						"vietnamese": "Đây là... Rừng Hòa Bình. Ồn ào không hợp với nơi này.",
						"thai": "ที่นี่คือ... ป่าแห่งสันติ ความวุ่นวายไม่เหมาะกับที่นี่",
						"hindi": "यह... शांति का जंगल है। हंगामा यहाँ शोभा नहीं देता।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"speaker": "briar",
					"type": "direction"
				},
				{
					"speaker": "briar",
					"content": {
						"korean": "아까 그 기분 탓이 아니었어.",
						"english": "That feeling wasn't my imagination after all.",
						"japanese": "さっきの、気のせいじゃなかった。",
						"chinese": "刚才的，果然不是我的错觉。",
						"french": "Ce n'était pas mon imagination après tout.",
						"spanish": "Ese presentimiento no fue mi imaginación después de todo.",
						"vietnamese": "Cái cảm giác lúc nãy không phải là do tôi tưởng tượng.",
						"thai": "ความรู้สึกเมื่อกี้ไม่ใช่แค่จินตนาการของฉันจริงๆ",
						"hindi": "वह भावना मेरा वहम नहीं थी।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "브라이어가 숲 바닥을 파헤쳤다. 축축한 흙 아래, 기이한 것이 모습을 드러냈다.",
						"english": "Briar dug into the forest floor. Beneath the damp earth, a strange sight was revealed.",
						"japanese": "ブライアが森の地面を掘り起こした。湿った土の下から、奇妙なものが姿を現した。",
						"chinese": "布莱尔挖开了森林的地面。在潮湿的泥土下，一个奇异的东西显露出来。",
						"french": "Briar creusa le sol de la forêt. Sous la terre humide, une étrange chose se révéla.",
						"spanish": "Briar excavó el suelo del bosque. Debajo de la tierra húmeda, algo extraño se reveló.",
						"vietnamese": "Briar đào bới nền rừng. Dưới lớp đất ẩm ướt, một thứ kỳ lạ lộ diện.",
						"thai": "ไบรอาขุดพื้นป่า ใต้ดินที่ชื้นแฉะ สิ่งแปลกประหลาดได้ปรากฏตัวขึ้น",
						"hindi": "ब्रायर ने जंगल की ज़मीन खोदी। नम मिट्टी के नीचे, एक अजीब चीज़ सामने आई।"
					},
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "이건…!",
						"english": "This is...!",
						"japanese": "これは…！",
						"chinese": "这是…！",
						"french": "C'est... !",
						"spanish": "¡Esto es...!",
						"vietnamese": "Đây là...!",
						"thai": "นี่มัน...!",
						"hindi": "यह...!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "briar",
					"content": {
						"korean": "사람 손을 닮은 촉수들… 셀 수 없이 얽혀 있어.",
						"english": "Tentacles resembling human hands... countless of them intertwined.",
						"japanese": "人の手に似た触手…数えきれないほど絡み合っている。",
						"chinese": "像人手的触手…无数条纠缠在一起。",
						"french": "Des tentacules ressemblant à des mains humaines... innombrables, entrelacées.",
						"spanish": "Tentáculos que parecen manos humanas... innumerables, entrelazados.",
						"vietnamese": "Những xúc tu giống bàn tay người... vô số cái đan xen vào nhau.",
						"thai": "หนวดที่คล้ายมือมนุษย์...พันกันยุ่งเหยิงนับไม่ถ้วน",
						"hindi": "मानव हाथों से मिलती-जुलती सूंडें... अनगिनत आपस में उलझी हुई हैं।"
					}
				},
				{
					"content": {
						"korean": "설마… 치유받은 사람들이?",
						"english": "Could it be... the healed people?",
						"japanese": "まさか…癒された人々が？",
						"chinese": "难道说…那些被治愈的人？",
						"french": "Se pourrait-il que ce soient... les personnes guéries ?",
						"spanish": "¿Podrían ser... las personas sanadas?",
						"vietnamese": "Chẳng lẽ... những người đã được chữa lành?",
						"thai": "หรือว่า... พวกคนที่ได้รับการรักษา?",
						"hindi": "कहीं यह... ठीक हुए लोग तो नहीं?"
					},
					"speaker": "character_1",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…결국, 여기까지 온 것이냐.",
						"english": "...So, you've come this far.",
						"japanese": "…結局、ここまで来たのか。",
						"chinese": "……终究，还是走到这里了吗？",
						"french": "...Alors, vous êtes venus jusqu'ici.",
						"spanish": "...Así que, has llegado hasta aquí.",
						"vietnamese": "...Cuối cùng, ngươi cũng đến đây rồi sao.",
						"thai": "...สุดท้ายก็มาถึงที่นี่จนได้สินะ",
						"hindi": "...तो, तुम यहाँ तक आ ही गए।"
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "평온을 방해하려는 어리석은 자들.",
						"english": "Foolish ones who disturb the peace.",
						"japanese": "平穏を乱そうとする愚か者どもめ。",
						"chinese": "意图扰乱平静的愚蠢之徒。",
						"french": "Fous qui tentent de troubler la paix.",
						"spanish": "Estúpidos que intentan perturbar la paz.",
						"vietnamese": "Những kẻ ngu ngốc dám phá hoại sự bình yên.",
						"thai": "พวกโง่เขลาที่คิดจะรบกวนความสงบ",
						"hindi": "शांति भंग करने वाले मूर्ख।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "briar",
					"type": "direction",
					"spot": [
						1,
						3
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이 촉수들은… 아직도 미약하게나마 움직여.",
						"english": "These tentacles... they're still moving faintly.",
						"japanese": "この触手は…まだ微かに動いている。",
						"chinese": "这些触手……还在微弱地蠕动着。",
						"french": "Ces tentacules... bougent encore faiblement.",
						"spanish": "Estos tentáculos... aún se mueven débilmente.",
						"vietnamese": "Những xúc tu này... vẫn còn khẽ động đậy.",
						"thai": "หนวดพวกนี้... ยังคงขยับเบา ๆ",
						"hindi": "ये टेंटेकल्स... अभी भी हल्के से हिल रहे हैं।"
					},
					"speaker": "briar"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "살아있는 거라고?",
						"english": "Are they alive?",
						"japanese": "生きているのか？",
						"chinese": "还活着吗？",
						"french": "Sont-ils vivants ?",
						"spanish": "¿Están vivos?",
						"vietnamese": "Còn sống sao?",
						"thai": "ยังมีชีวิตอยู่เหรอ?",
						"hindi": "क्या वे जीवित हैं?"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "briar",
					"content": {
						"korean": "아니. 마지막 몸부림이야. 모두 숲에 녹아들었어.",
						"english": "No. It's their last struggle. They've all melted into the forest.",
						"japanese": "いや、最後の足掻きだ。全て森に溶け込んだ。",
						"chinese": "不。那是最后的挣扎。都已融入森林之中。",
						"french": "Non. C'est leur dernière lutte. Ils se sont tous fondus dans la forêt.",
						"spanish": "No. Es su último esfuerzo. Todos se han disuelto en el bosque.",
						"vietnamese": "Không. Đó là sự giãy giụa cuối cùng. Tất cả đã hòa vào rừng rồi.",
						"thai": "ไม่หรอก นี่คือการดิ้นรนครั้งสุดท้าย ทุกสิ่งได้หลอมรวมเป็นส่วนหนึ่งของป่าแล้ว",
						"hindi": "नहीं। यह उनकी आखिरी छटपटाहट है। सब जंगल में घुल गए हैं।"
					}
				},
				{
					"content": {
						"korean": "돌려보내주지 않은 거구나.",
						"english": "So you didn't send them back.",
						"japanese": "返してやらなかったんだな。",
						"chinese": "原来你没有让他们回去。",
						"french": "Donc, vous ne les avez pas renvoyés.",
						"spanish": "Así que no los dejaste regresar.",
						"vietnamese": "Thì ra là ngươi không cho họ trở về.",
						"thai": "สรุปว่านายไม่ได้ส่งพวกเขากลับไปสินะ",
						"hindi": "तो, तुमने उन्हें वापस नहीं भेजा।"
					},
					"speaker": "character_2",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "돌아오고 싶었던 것이겠지. 진정한 평화 속으로.",
						"english": "They must have wanted to return. Into true peace.",
						"japanese": "帰りたかったのだろう。真の平和の中へ。",
						"chinese": "他们是想回来的吧。回到真正的平静之中。",
						"french": "Ils devaient vouloir revenir. Dans la vraie paix.",
						"spanish": "Debieron querer regresar. A la verdadera paz.",
						"vietnamese": "Họ hẳn đã muốn trở về. Trở về trong sự bình yên thực sự.",
						"thai": "พวกเขาคงอยากกลับมาสินะ กลับสู่ความสงบสุขที่แท้จริง",
						"hindi": "वे वापस आना चाहते होंगे। सच्ची शांति में।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "너희도… 곧 그렇게 될 것이다.",
						"english": "You too... will soon become like that.",
						"japanese": "お前たちも…すぐにそうなるだろう。",
						"chinese": "你们也……很快就会如此。",
						"french": "Vous aussi... deviendrez bientôt ainsi.",
						"spanish": "Vosotros también... pronto seréis así.",
						"vietnamese": "Các ngươi cũng... sẽ sớm như vậy thôi.",
						"thai": "พวกเจ้าเอง... ก็จะกลายเป็นแบบนั้นในไม่ช้า",
						"hindi": "तुम भी... जल्द ही वैसे ही हो जाओगे।"
					},
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "헛소리 마!",
						"english": "Don't talk nonsense!",
						"japanese": "ふざけるな！",
						"chinese": "别胡说八道！",
						"french": "Ne dis pas de bêtises !",
						"spanish": "¡No digas tonterías!",
						"vietnamese": "Đừng nói nhảm!",
						"thai": "อย่าพูดเรื่องไร้สาระ!",
						"hindi": "बकवास बंद करो!"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "거대한 뿌리가 엉겨 붙은 공간. 그 중심에서 정체 모를 그림자가 솟아났다.",
						"english": "A space entangled with giant roots. From its center, an unknown shadow emerged.",
						"japanese": "巨大な根が絡みつく空間。その中心から、正体不明の影が湧き上がった。",
						"chinese": "一个巨大的根系盘结的空间。在它的中心，一道不明身份的影子升腾而起。",
						"french": "Un espace enchevêtré de racines géantes. De son centre, une ombre inconnue a surgi.",
						"spanish": "Un espacio enredado con raíces gigantes. De su centro, una sombra desconocida emergió.",
						"vietnamese": "Một không gian bị rễ cây khổng lồ quấn chặt. Từ trung tâm của nó, một bóng đen không rõ danh tính nổi lên.",
						"thai": "พื้นที่ที่เต็มไปด้วยรากขนาดมหึมาพันกันยุ่งเหยิง จากใจกลางของมันมีเงาดำปริศนาผุดขึ้นมา",
						"hindi": "विशाल जड़ों से उलझा हुआ एक स्थान। उसके केंद्र से, एक अज्ञात छाया उभरी।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "드디어… 나를 찾아왔구나.",
						"english": "Finally... you've found me.",
						"japanese": "ついに…私を見つけましたね。",
						"chinese": "终于…你找到我了。",
						"french": "Enfin… tu m'as trouvée.",
						"spanish": "Finalmente... me encontraste.",
						"vietnamese": "Cuối cùng... ngươi cũng đã tìm thấy ta.",
						"thai": "ในที่สุด... เจ้าก็หาข้าจนพบ",
						"hindi": "आखिरकार... तुम मुझे ढूंढ ही लिया।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "고통을 끝내고 싶었을 텐데. 왜 이 평온을 거부하지?",
						"english": "You wished to end your suffering. Why do you reject this serenity?",
						"japanese": "苦しみを終わらせたかったはず。なぜこの平穏を拒む？",
						"chinese": "你本想结束痛苦。为何拒绝这份平静？",
						"french": "Tu voulais mettre fin à tes souffrances. Pourquoi rejettes-tu cette sérénité ?",
						"spanish": "Querías acabar con tu sufrimiento. ¿Por qué rechazas esta serenidad?",
						"vietnamese": "Ngươi đã muốn chấm dứt nỗi đau. Sao lại từ chối sự bình yên này?",
						"thai": "เจ้าปรารถนาจะยุติความทุกข์ แล้วเหตุใดจึงปฏิเสธความสงบนี้?",
						"hindi": "तुम अपना कष्ट समाप्त करना चाहते थे। इस शांति को क्यों अस्वीकार करते हो?"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "이건 평화가 아니야! 소멸이라고!",
						"english": "This isn't peace! It's annihilation!",
						"japanese": "これは平和じゃない！消滅だ！",
						"chinese": "这不是和平！是毁灭！",
						"french": "Ce n'est pas la paix ! C'est l'anéantissement !",
						"spanish": "¡Esto no es paz! ¡Es aniquilación!",
						"vietnamese": "Đây không phải là hòa bình! Mà là hủy diệt!",
						"thai": "นี่ไม่ใช่สันติสุข! แต่มันคือการทำลายล้าง!",
						"hindi": "यह शांति नहीं है! यह विनाश है!"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "모두 하나가 되는 것. 그것이 숲의 섭리.",
						"english": "For all to become one. That is the forest's providence.",
						"japanese": "すべてが一つになること。それが森の摂理。",
						"chinese": "万物归一。此乃森林的天命。",
						"french": "Que tout devienne un. Telle est la providence de la forêt.",
						"spanish": "Que todo se vuelva uno. Esa es la providencia del bosque.",
						"vietnamese": "Tất cả hợp làm một. Đó là thiên ý của rừng.",
						"thai": "เพื่อให้ทุกสิ่งเป็นหนึ่ง นั่นคือพรหมลิขิตของป่า",
						"hindi": "सबका एक हो जाना। यही वन का विधान है।"
					},
					"speaker": "random_boss"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "결국… 평온을 택하는구나.",
						"english": "In the end... you choose serenity.",
						"japanese": "結局…平穏を選ぶのか。",
						"chinese": "最终…你还是选择了平静。",
						"french": "Finalement… tu choisis la sérénité.",
						"spanish": "Al final... eliges la serenidad.",
						"vietnamese": "Cuối cùng... ngươi cũng đã chọn sự bình yên.",
						"thai": "ในที่สุด... เจ้าก็เลือกความสงบ",
						"hindi": "आखिरकार... तुम शांति चुनते हो।"
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "고통에서 벗어나… 숲의 일부가 되어라.",
						"english": "Be free from pain... become part of the forest.",
						"japanese": "苦しみから解放され…森の一部となれ。",
						"chinese": "脱离痛苦……成为森林的一部分吧。",
						"french": "Libère-toi de la douleur... deviens partie de la forêt.",
						"spanish": "Libérate del dolor... conviértete en parte del bosque.",
						"vietnamese": "Thoát khỏi đau khổ... trở thành một phần của khu rừng.",
						"thai": "จงหลุดพ้นจากความเจ็บปวด... และเป็นส่วนหนึ่งของป่า",
						"hindi": "दर्द से आज़ाद हो जाओ... जंगल का हिस्सा बनो।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…아직… 안 끝났어.",
						"english": "...It's not... over yet.",
						"japanese": "…まだ…終わってない。",
						"chinese": "……还没……结束。",
						"french": "...Ce n'est pas... encore fini.",
						"spanish": "...Aún no... ha terminado.",
						"vietnamese": "...Vẫn... chưa kết thúc.",
						"thai": "...ยัง...ไม่จบ",
						"hindi": "...अभी... ख़त्म नहीं हुआ।"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "포기 안 해…!",
						"english": "I won't give up...!",
						"japanese": "諦めない…！",
						"chinese": "我不会放弃的……！",
						"french": "Je n'abandonnerai pas...!",
						"spanish": "¡No me rendiré...!",
						"vietnamese": "Tôi sẽ không bỏ cuộc...!",
						"thai": "ฉันจะไม่ยอมแพ้...!",
						"hindi": "मैं हार नहीं मानूंगा...!"
					}
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "…아직… 끝나지 않았다.",
						"english": "...It's not... over yet.",
						"japanese": "…まだ…終わっていない。",
						"chinese": "…还…没结束。",
						"french": "...Ce n'est pas... encore fini.",
						"spanish": "...Todavía... no ha terminado.",
						"vietnamese": "...Chưa... kết thúc đâu.",
						"thai": "...ยัง...ไม่จบลง",
						"hindi": "...अभी... खत्म नहीं हुआ।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "뿌리는… 더 깊이… 너희를 기다린다.",
						"english": "The roots... run deeper... awaiting you.",
						"japanese": "根は…もっと深く…お前たちを待っている。",
						"chinese": "根系…更深处…在等着你们。",
						"french": "Les racines... s'enfoncent plus profondément... vous attendent.",
						"spanish": "Las raíces... están más profundas... esperándote.",
						"vietnamese": "Rễ cây... còn sâu hơn... đang chờ đợi các ngươi.",
						"thai": "รากเหง้า...ลึกลงไป...รอพวกเจ้าอยู่",
						"hindi": "जड़ें... और गहरी... तुम्हारा इंतजार कर रही हैं।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이게 끝이 아니라고…?",
						"english": "This isn't the end...?",
						"japanese": "これが終わりじゃないと…？",
						"chinese": "这还没结束…？",
						"french": "Ce n'est pas la fin... ?",
						"spanish": "¿Esto no es el final...?",
						"vietnamese": "Đây không phải là kết thúc sao...?",
						"thai": "นี่ไม่ใช่จุดจบ...?",
						"hindi": "यह अंत नहीं है...?"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "정체 모를 자의 그림자는 숲의 땅속 깊이 스며들었다.",
						"english": "The shadow of an unknown entity seeped deep into the forest's earth.",
						"japanese": "正体不明の者の影は、森の地中深くへと染み渡った。",
						"chinese": "未知者的阴影，已深入森林土壤。",
						"french": "L'ombre d'une entité inconnue s'est infiltrée profondément dans la terre de la forêt.",
						"spanish": "La sombra de una entidad desconocida se filtró profundamente en la tierra del bosque.",
						"vietnamese": "Bóng hình kẻ không rõ danh tính đã thấm sâu vào lòng đất rừng.",
						"thai": "เงาของสิ่งลึกลับแผ่ซ่านลึกเข้าไปในผืนป่า",
						"hindi": "एक अज्ञात सत्ता की छाया जंगल की धरती में गहराई तक समा गई।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "그녀의 이야기는 이제 시작이었다. 숲의 심장을 향한 길.",
						"english": "Her story was just beginning. The path to the forest's heart.",
						"japanese": "彼女の物語は今始まったばかりだった。森の心臓への道。",
						"chinese": "她的故事才刚刚开始。通往森林心脏之路。",
						"french": "Son histoire ne faisait que commencer. Le chemin vers le cœur de la forêt.",
						"spanish": "Su historia apenas comenzaba. El camino hacia el corazón del bosque.",
						"vietnamese": "Câu chuyện của cô ấy chỉ mới bắt đầu. Con đường dẫn đến trái tim của khu rừng.",
						"thai": "เรื่องราวของเธอกำลังจะเริ่มต้นขึ้น เส้นทางสู่ใจกลางป่า",
						"hindi": "उसकी कहानी अभी शुरू ही हुई थी। वन के हृदय तक का मार्ग।"
					}
				}
			],
			"id": 15
		}
	]
} as const;
