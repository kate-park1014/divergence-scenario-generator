export const scenario_forest_sloth_echo_01 = {
	"scenario_id": "forest_sloth_echo_01",
	"order": 1,
	"act": "intro",
	"theme": "forest",
	"actors": {
		"ela": {
			"id": "mon_24765cb2-6fc0-452e-8969-871a82349c70",
			"name": {
				"korean": "엘라",
				"english": "Ela",
				"japanese": "エラ",
				"chinese": "艾拉",
				"french": "Ela",
				"spanish": "Ela",
				"vietnamese": "Ela",
				"thai": "เอล่า",
				"hindi": "एला"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/55d3e9ee-c589-40ab-dfa4-a658bbddd400/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/cfacc842-115e-4175-a7fa-3111a468ed00/public"
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
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "도시의 활력은 사라졌다. 모든 것이 느리고, 침묵했다.",
						"english": "The city's vitality was gone. Everything was slow and silent.",
						"japanese": "都市の活気は消え去った。すべてが遅く、沈黙していた。",
						"chinese": "城市的活力消失了。一切都缓慢而寂静。",
						"french": "La vitalité de la ville avait disparu. Tout était lent et silencieux.",
						"spanish": "La vitalidad de la ciudad se había ido. Todo era lento y silencioso.",
						"vietnamese": "Sức sống của thành phố đã biến mất. Mọi thứ đều chậm chạp và im lặng.",
						"thai": "ความมีชีวิตชีวาของเมืองได้หายไป ทุกสิ่งช้าและเงียบงัน",
						"hindi": "शहर की रौनक गायब हो गई थी। सब कुछ धीमा और खामोश था।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…다들 왜 이렇지.",
						"english": "...Why is everyone like this?",
						"japanese": "…みんな、どうしちゃったんだ。",
						"chinese": "……大家怎么都这样。",
						"french": "...Pourquoi tout le monde est-il comme ça ?",
						"spanish": "¿...Por qué está todo el mundo así?",
						"vietnamese": "...Sao mọi người lại như vậy.",
						"thai": "...ทำไมทุกคนถึงเป็นแบบนี้?",
						"hindi": "...सब ऐसे क्यों हैं।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "ela"
				},
				{
					"speaker": "ela",
					"content": {
						"korean": "하암… 너무 피곤해. 아무것도 하기 싫어.",
						"english": "Yawn... I'm so tired. I don't want to do anything.",
						"japanese": "ふぅ… とても疲れた。何もしたくない。",
						"chinese": "哎……太累了。什么都不想做。",
						"french": "Bâillement... Je suis si fatigué. Je n'ai envie de rien faire.",
						"spanish": "Bostezo... Estoy tan cansado. No quiero hacer nada.",
						"vietnamese": "Ngáp... Mệt quá. Chẳng muốn làm gì cả.",
						"thai": "หาว... เหนื่อยจังเลย ไม่อยากทำอะไรเลย",
						"hindi": "उबासी... मैं बहुत थक गया हूँ। कुछ भी करने का मन नहीं कर रहा।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "엘라? 너도 무기력에 시달리는 거야?",
						"english": "Ella? Are you suffering from lethargy too?",
						"japanese": "エラ？君も無気力に苦しんでいるのか？",
						"chinese": "艾拉？你也感到无力吗？",
						"french": "Ella ? Toi aussi tu souffres de léthargie ?",
						"spanish": "¿Ella? ¿Tú también sufres de letargo?",
						"vietnamese": "Ella? Cậu cũng đang bị uể oải à?",
						"thai": "เอลล่า? เธอเองก็กำลังทนทุกข์จากความเฉื่อยชาด้วยเหรอ?",
						"hindi": "एला? क्या तुम भी सुस्ती से पीड़ित हो?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "ela",
					"content": {
						"korean": "응… 숲에서 돌아온 후로 계속 이래.",
						"english": "Yeah... It's been like this ever since I came back from the forest.",
						"japanese": "うん… 森から帰ってきてからずっとこんな感じだ。",
						"chinese": "嗯……从森林回来后就一直这样。",
						"french": "Oui... C'est comme ça depuis que je suis revenue de la forêt.",
						"spanish": "Sí... Ha sido así desde que volví del bosque.",
						"vietnamese": "Ừm... Từ khi trở về từ rừng, nó cứ như vậy.",
						"thai": "อืม... เป็นแบบนี้มาตลอดตั้งแต่กลับมาจากป่า",
						"hindi": "हाँ... जंगल से लौटने के बाद से ऐसा ही है।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "숲….",
						"english": "The forest...",
						"japanese": "森…。",
						"chinese": "森林……。",
						"french": "La forêt...",
						"spanish": "El bosque...",
						"vietnamese": "Rừng...",
						"thai": "ป่า...",
						"hindi": "जंगल..."
					}
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "ela",
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "ela",
					"content": {
						"korean": "몸이 너무 무거운데… 묘하게 편안해.",
						"english": "My body feels so heavy... yet strangely comfortable.",
						"japanese": "体が重すぎる…でも、なぜか心地いい。",
						"chinese": "身体好沉重……却又莫名地舒适。",
						"french": "Mon corps est si lourd... mais étrangement confortable.",
						"spanish": "Mi cuerpo se siente tan pesado... pero extrañamente cómodo.",
						"vietnamese": "Cơ thể nặng trịch... nhưng lại thoải mái một cách kỳ lạ.",
						"thai": "ตัวฉันหนักอึ้งเหลือเกิน... แต่กลับสบายอย่างประหลาด",
						"hindi": "मेरा शरीर बहुत भारी है... फिर भी अजीब तरह से आरामदायक है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "편안하다고?",
						"english": "Comfortable?",
						"japanese": "心地いいって？",
						"chinese": "舒适？",
						"french": "Confortable ?",
						"spanish": "¿Cómodo?",
						"vietnamese": "Thoải mái ư?",
						"thai": "สบายเหรอ?",
						"hindi": "आरामदायक?"
					}
				},
				{
					"speaker": "ela",
					"content": {
						"korean": "응… 마치 숲에 있을 때 같아. 아무것도 안 해도 되는 고요함…",
						"english": "Yes... it's like being in a forest. A stillness where I don't have to do anything...",
						"japanese": "うん…まるで森の中にいるみたい。何もせずにいられる静けさ…",
						"chinese": "嗯……就像在森林里一样。那种什么都不用做的宁静……",
						"french": "Oui... c'est comme être dans une forêt. Une quiétude où je n'ai rien à faire...",
						"spanish": "Sí... es como estar en un bosque. Una quietud donde no tengo que hacer nada...",
						"vietnamese": "Ừm... cứ như đang ở trong rừng vậy. Một sự tĩnh lặng không cần làm gì cả...",
						"thai": "อืม... เหมือนอยู่ในป่าเลย ความสงบที่ไม่ต้องทำอะไรเลย...",
						"hindi": "हाँ... ऐसा लगता है जैसे जंगल में हूँ। एक ऐसी शांति जहाँ मुझे कुछ भी नहीं करना पड़ता..."
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이상해. 분명 고통스러워 보이는데.",
						"english": "Strange. You clearly look like you're in pain.",
						"japanese": "変だね。明らかに苦しそうに見えるのに。",
						"chinese": "真奇怪。你明明看起来很痛苦。",
						"french": "Étrange. Tu as l'air clairement en souffrance.",
						"spanish": "Qué raro. Claramente pareces sufrir.",
						"vietnamese": "Lạ thật. Rõ ràng là cậu đang đau đớn mà.",
						"thai": "แปลกนะ เห็น ๆ อยู่ว่าดูทรมานแท้ ๆ",
						"hindi": "अजीब है। तुम साफ तौर पर दर्द में दिख रहे हो।"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "ela"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이 무기력이… 숲에서 온 거였어.",
						"english": "This lethargy... it came from the forest.",
						"japanese": "この無気力…森から来たのか。",
						"chinese": "这种无力感……原来是来自森林。",
						"french": "Cette léthargie... elle venait de la forêt.",
						"spanish": "Este letargo... venía del bosque.",
						"vietnamese": "Cảm giác uể oải này... là từ khu rừng mà ra.",
						"thai": "ความซึมเซาไร้เรี่ยวแรงนี้... มาจากป่านี่เอง",
						"hindi": "यह सुस्ती... जंगल से आई थी।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "ela",
					"content": {
						"korean": "어쩐지… 내 뒤에 그림자가 따라다니는 기분이었어.",
						"english": "No wonder... I felt like a shadow was following me.",
						"japanese": "どうりで…私の後ろに影がつきまとっている感じだった。",
						"chinese": "难怪……总觉得身后有影子跟着。",
						"french": "C'est pourquoi... j'avais l'impression qu'une ombre me suivait.",
						"spanish": "Con razón... sentía como si una sombra me siguiera.",
						"vietnamese": "Thảo nào... cứ có cảm giác như có một cái bóng đang theo sau mình.",
						"thai": "มิน่าล่ะ... ฉันรู้สึกเหมือนมีเงาตามหลัง",
						"hindi": "तभी तो... ऐसा लग रहा था जैसे कोई परछाई मेरा पीछा कर रही थी।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "그림자?",
						"english": "A shadow?",
						"japanese": "影？",
						"chinese": "影子？",
						"french": "Une ombre ?",
						"spanish": "¿Una sombra?",
						"vietnamese": "Bóng ư?",
						"thai": "เงาเหรอ?",
						"hindi": "परछाई?"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "ela",
					"content": {
						"korean": "응. 움직일수록 더 느려지는 것 같아.",
						"english": "Yes. The more I move, the slower I seem to get.",
						"japanese": "うん。動けば動くほど、動きが鈍くなる気がする。",
						"chinese": "嗯。越动越觉得迟钝。",
						"french": "Oui. Plus je bouge, plus j'ai l'impression de ralentir.",
						"spanish": "Sí. Cuanto más me muevo, más lento me siento.",
						"vietnamese": "Ừ. Càng di chuyển thì lại càng chậm chạp hơn.",
						"thai": "อื้ม ยิ่งเคลื่อนไหว ยิ่งเหมือนจะช้าลง",
						"hindi": "हाँ। जितना ज़्यादा मैं हिलता हूँ, उतना ही धीमा होता जाता हूँ।"
					}
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "ela",
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "도시는 더욱 깊은 고요함에 잠식되어갔다.",
						"english": "The city was swallowed by an even deeper stillness.",
						"japanese": "都市はさらに深い静寂に飲み込まれていった。",
						"chinese": "城市被更深的寂静所吞噬。",
						"french": "La ville fut engloutie par un silence encore plus profond.",
						"spanish": "La ciudad fue engullida por un silencio aún más profundo.",
						"vietnamese": "Thành phố chìm sâu hơn vào sự tĩnh lặng.",
						"thai": "เมืองถูกกลืนกินด้วยความเงียบงันที่ลึกซึ้งยิ่งขึ้น",
						"hindi": "शहर और भी गहरी खामोशी में डूब गया।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이대로는 안 돼. 모두가 잠들 거야.",
						"english": "This can't go on. Everyone will fall asleep.",
						"japanese": "このままじゃダメだ。みんな眠ってしまう。",
						"chinese": "这样下去不行。所有人都将沉睡。",
						"french": "Ça ne peut pas continuer. Tout le monde va s'endormir.",
						"spanish": "Esto no puede seguir así. Todos se quedarán dormidos.",
						"vietnamese": "Không thể thế này được. Mọi người sẽ ngủ thiếp đi mất.",
						"thai": "อย่างนี้ต่อไปไม่ได้ ทุกคนจะต้องหลับใหลไป",
						"hindi": "यह ऐसे नहीं चल सकता। सब सो जाएँगे।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "ela",
					"content": {
						"korean": "…나도… 이제 더는 무기력하게 있고 싶지 않아.",
						"english": "...I... don't want to be powerless anymore.",
						"japanese": "...私も… もう無力でいたくない。",
						"chinese": "...我… 再也不想这样无力了。",
						"french": "...Moi non plus... je ne veux plus être impuissant(e).",
						"spanish": "...Yo... tampoco quiero seguir siendo impotente.",
						"vietnamese": "...Tôi... không muốn vô lực nữa.",
						"thai": "...ฉัน... ไม่อยากไร้พลังอีกต่อไปแล้ว",
						"hindi": "...मैं भी... अब और बेबस नहीं रहना चाहता।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "우리가 숲의 잔재를 막아야 해.",
						"english": "We must stop the remnants of the forest.",
						"japanese": "我々が森の残滓を食い止めなければならない。",
						"chinese": "我们必须阻止森林的残党。",
						"french": "Nous devons arrêter les vestiges de la forêt.",
						"spanish": "Debemos detener los restos del bosque.",
						"vietnamese": "Chúng ta phải ngăn chặn tàn dư của rừng.",
						"thai": "เราต้องหยุดยั้งซากป่า",
						"hindi": "हमें जंगल के अवशेषों को रोकना होगा।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "…후후… 이것은… 단지… 시작일 뿐이다….",
						"english": "...Huhu... This is... merely... the beginning....",
						"japanese": "...フフ…これは…単なる…始まりに過ぎない…。",
						"chinese": "...呵呵...这只是...一个开始....",
						"french": "...Huhu... Ce n'est... que... le début....",
						"spanish": "...Juju... Esto es... solo... el principio....",
						"vietnamese": "...Khà khà... Đây chỉ là... khởi đầu mà thôi....",
						"thai": "...ฮุฮุ... นี่มัน... แค่... จุดเริ่มต้นเท่านั้น....",
						"hindi": "...हुहू... यह तो... बस... शुरुआत है...।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "끝이 아니라고?",
						"english": "It's not over?",
						"japanese": "終わりじゃないと？",
						"chinese": "还没结束吗？",
						"french": "Ce n'est pas la fin ?",
						"spanish": "¿No es el final?",
						"vietnamese": "Chưa kết thúc sao?",
						"thai": "ยังไม่จบหรือ?",
						"hindi": "यह अंत नहीं है?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"speaker": "ela",
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "ela",
					"content": {
						"korean": "…몸이… 가벼워졌어. 드디어…!",
						"english": "...My body... feels lighter. Finally...!",
						"japanese": "...体が…軽くなった。ついに…！",
						"chinese": "...身体...变轻了。终于...！",
						"french": "...Mon corps... est plus léger. Enfin... !",
						"spanish": "...Mi cuerpo... se siente más ligero. ¡Finalmente...!",
						"vietnamese": "...Cơ thể... nhẹ nhõm rồi. Cuối cùng thì...!",
						"thai": "...ร่างกาย... เบาลงแล้ว ในที่สุด...!",
						"hindi": "...मेरा शरीर... हल्का हो गया। आखिरकार...!"
					},
					"emotion": "happy",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "엘라! 괜찮아?",
						"english": "Ella! Are you okay?",
						"japanese": "エラ！大丈夫？",
						"chinese": "艾拉！你还好吗？",
						"french": "Ella ! Ça va ?",
						"spanish": "¡Ella! ¿Estás bien?",
						"vietnamese": "Ella! Cậu không sao chứ?",
						"thai": "เอลล่า! เธอไม่เป็นไรนะ?",
						"hindi": "एला! तुम ठीक हो?"
					}
				},
				{
					"emotion": "happy",
					"type": "speech",
					"speaker": "ela",
					"content": {
						"korean": "응. 이제… 더 싸울 수 있을 것 같아.",
						"english": "Yes. Now… I think I can fight more.",
						"japanese": "うん。もう…もっと戦えそう。",
						"chinese": "嗯。现在…我感觉还能继续战斗。",
						"french": "Oui. Maintenant… je crois que je peux encore me battre.",
						"spanish": "Sí. Ahora… creo que puedo luchar más.",
						"vietnamese": "Ừ. Giờ thì… mình nghĩ mình có thể chiến đấu tiếp.",
						"thai": "อืม. ตอนนี้…ฉันว่าฉันสู้ต่อได้อีก.",
						"hindi": "हाँ। अब… मुझे लगता है कि मैं और लड़ सकती हूँ।"
					}
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "눈에 보이지 않는 고요함의 메아리. 세상은 아직 깨어날 준비가 되어 있지 않았다.",
						"english": "The unseen echo of silence. The world was not yet ready to awaken.",
						"japanese": "目に見えぬ静寂の残響。世界はまだ、目覚める準備ができていなかった。",
						"chinese": "无形寂静的回响。世界尚未准备好苏醒。",
						"french": "L'écho invisible du silence. Le monde n'était pas encore prêt à s'éveiller.",
						"spanish": "El eco invisible del silencio. El mundo aún no estaba listo para despertar.",
						"vietnamese": "Tiếng vọng vô hình của sự tĩnh lặng. Thế giới vẫn chưa sẵn sàng để thức tỉnh.",
						"thai": "เสียงสะท้อนของความเงียบงันที่มองไม่เห็น โลกยังไม่พร้อมที่จะตื่นขึ้น.",
						"hindi": "अदृश्य शांति की गूँज। दुनिया अभी जागने के लिए तैयार नहीं थी।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "그러나 누군가는, 그들을 깨워야 했다.",
						"english": "But someone had to awaken them.",
						"japanese": "しかし、誰かが彼らを目覚めさせねばならなかった。",
						"chinese": "然而，必须有人将他们唤醒。",
						"french": "Cependant, quelqu'un devait les éveiller.",
						"spanish": "Sin embargo, alguien debía despertarlos.",
						"vietnamese": "Nhưng ai đó phải đánh thức họ.",
						"thai": "แต่ใครบางคนต้องปลุกพวกเขาให้ตื่น.",
						"hindi": "लेकिन किसी को तो उन्हें जगाना ही था।"
					}
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "…그 활력도… 결국 고요함에 잠식될 것이다.",
						"english": "…Even that vitality… will eventually be consumed by silence.",
						"japanese": "…その活力も…結局は静寂に呑み込まれるだろう。",
						"chinese": "…那份活力…终将也会被寂静吞噬。",
						"french": "…Même cette vitalité… finira par être engloutie par le silence.",
						"spanish": "…Incluso esa vitalidad… finalmente será consumida por el silencio.",
						"vietnamese": "…Ngay cả sức sống đó… cuối cùng cũng sẽ bị sự tĩnh lặng nuốt chửng.",
						"thai": "…แม้พลังชีวิตนั้น…ในที่สุดก็จะถูกความเงียบกลืนกิน.",
						"hindi": "…वह जीवनशक्ति भी… अंततः खामोशी में समा जाएगी।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "절대… 포기하지 않아…!",
						"english": "Never… giving up…!",
						"japanese": "決して…諦めない…！",
						"chinese": "绝不…放弃…！",
						"french": "Jamais… je n'abandonnerai… !",
						"spanish": "¡Nunca… me rendiré…!",
						"vietnamese": "Tuyệt đối… không bỏ cuộc…!",
						"thai": "ไม่มีทาง…ฉันไม่ยอมแพ้…!",
						"hindi": "कभी नहीं… हार नहीं मानूँगा…!"
					}
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "회색빛 그림자 속에서 거대한 존재가 모습을 드러냈다.",
						"english": "A colossal entity emerged from the grey shadows.",
						"japanese": "灰色の影の中から、巨大な存在が現れた。",
						"chinese": "一个巨大的存在从灰色的阴影中显现。",
						"french": "Une entité colossale est apparue des ombres grises.",
						"spanish": "Una entidad colosal emergió de las sombras grises.",
						"vietnamese": "Một thực thể khổng lồ xuất hiện từ bóng tối xám xịt.",
						"thai": "สิ่งมีชีวิตมหึมาปรากฏขึ้นจากเงาสีเทา",
						"hindi": "एक विशालकाय सत्ता भूरी छाया से प्रकट हुई।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "…왜 그리 서두르나. 고요함에 몸을 맡겨라.",
						"english": "...Why such haste? Surrender to the stillness.",
						"japanese": "...なぜそんなに急ぐ。静寂に身を委ねよ。",
						"chinese": "...为何如此匆忙。将自己交付于寂静吧。",
						"french": "...Pourquoi tant de hâte ? Abandonne-toi au calme.",
						"spanish": "...¿Por qué tanta prisa? Entrégate a la quietud.",
						"vietnamese": "...Sao lại vội vàng thế? Hãy phó thác bản thân cho sự tĩnh lặng.",
						"thai": "...เหตุใดจึงรีบร้อนนัก จงยอมจำนนต่อความสงบเงียบ",
						"hindi": "...इतनी जल्दी क्यों? शांति को स्वयं को समर्पित करो।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "당신이 이 모든 것의 원흉인가!",
						"english": "Are you the mastermind behind all of this?!",
						"japanese": "貴様がこの全ての元凶か！",
						"chinese": "你就是这一切的幕后黑手吗！",
						"french": "Êtes-vous l'instigateur de tout cela !",
						"spanish": "¡¿Eres tú el cerebro detrás de todo esto?!",
						"vietnamese": "Ngươi là kẻ chủ mưu của tất cả những điều này sao!",
						"thai": "เจ้าคือต้นเหตุของเรื่องทั้งหมดนี้หรือ!",
						"hindi": "क्या तुम ही इन सबका मास्टरमाइंड हो!"
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "나는 그저… 세상을 편안하게 해줄 뿐.",
						"english": "I merely... bring comfort to the world.",
						"japanese": "私はただ… 世界を安らかにするだけだ。",
						"chinese": "我只是… 让世界得到安宁。",
						"french": "Je ne fais que... apporter le réconfort au monde.",
						"spanish": "Yo solo... traigo consuelo al mundo.",
						"vietnamese": "Ta chỉ là... mang lại sự an yên cho thế giới thôi.",
						"thai": "ข้าเพียงแค่... มอบความสงบสุขให้แก่โลก",
						"hindi": "मैं तो बस... दुनिया को सुकून दे रहा हूँ।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "이건 편안함이 아니라 잠식이야!",
						"english": "This isn't comfort, it's encroachment!",
						"japanese": "これは安らぎではなく、侵食だ！",
						"chinese": "这不是安宁，这是侵蚀！",
						"french": "Ce n'est pas du réconfort, c'est de l'envahissement !",
						"spanish": "¡Esto no es consuelo, es una invasión!",
						"vietnamese": "Đây không phải là sự an yên, mà là sự xâm lấn!",
						"thai": "นี่ไม่ใช่ความสงบสุข แต่มันคือการกัดกิน!",
						"hindi": "यह सुकून नहीं, अतिक्रमण है!"
					}
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"숲의 문이 열렸다. 그리고 세상은 고요함에 잠식됐다.",
			"활기 넘치던 도시는 회색빛 그림자에 갇혔다.",
			"사람들은 이유 없는 무기력에 시달리며, 시간마저 느려지는 듯했다.",
			"이 기이한 현상 속에서, 누군가는 진실을 찾아야 했다."
		],
		"english": [
			"The forest gate opened. And the world was swallowed by silence.",
			"The vibrant city was trapped in a gray shadow.",
			"People suffered from inexplicable lethargy, and even time seemed to slow down.",
			"Amidst this strange phenomenon, someone had to find the truth."
		],
		"japanese": [
			"森の門が開かれた。そして世界は静寂に包まれた。",
			"活気に満ちた都市は灰色の影に囚われた。",
			"人々は理由のない無気力に苦しみ、時間さえも遅くなったかのようだった。",
			"この奇妙な現象の中で、誰かが真実を見つけなければならなかった。"
		],
		"chinese": [
			"森林之门打开了。世界被寂静吞噬。",
			"曾经充满活力的城市被困在灰色阴影中。",
			"人们遭受着莫名的无力感，连时间似乎都变慢了。",
			"在这奇怪的现象中，有人必须找到真相。"
		],
		"french": [
			"La porte de la forêt s'est ouverte. Et le monde fut englouti par le silence.",
			"La ville animée fut piégée dans une ombre grise.",
			"Les gens souffraient d'une léthargie inexpliquée, et même le temps semblait ralentir.",
			"Au milieu de ce phénomène étrange, quelqu'un devait trouver la vérité."
		],
		"spanish": [
			"La puerta del bosque se abrió. Y el mundo fue envuelto en silencio.",
			"La vibrante ciudad quedó atrapada en una sombra gris.",
			"La gente sufría de un letargo inexplicable, e incluso el tiempo parecía ralentizarse.",
			"En medio de este extraño fenómeno, alguien tenía que encontrar la verdad."
		],
		"vietnamese": [
			"Cánh cổng rừng mở ra. Và thế giới chìm trong im lặng.",
			"Thành phố nhộn nhịp bị mắc kẹt trong bóng tối xám xịt.",
			"Mọi người mắc phải sự uể oải không rõ nguyên nhân, và thời gian dường như cũng chậm lại.",
			"Giữa hiện tượng kỳ lạ này, ai đó phải tìm ra sự thật."
		],
		"thai": [
			"ประตูแห่งป่าเปิดออก และโลกก็ถูกกลืนกินด้วยความเงียบงัน",
			"เมืองที่เคยมีชีวิตชีวาถูกกักขังอยู่ในเงามืดสีเทา",
			"ผู้คนทนทุกข์ทรมานจากความเฉื่อยชาที่ไม่มีเหตุผล และแม้แต่เวลาก็ดูเหมือนจะช้าลง",
			"ท่ามกลางปรากฏการณ์แปลกประหลาดนี้ มีใครบางคนต้องค้นหาความจริง"
		],
		"hindi": [
			"वन का द्वार खुला। और संसार खामोशी में डूब गया।",
			"जीवंत शहर एक धूसर छाया में फंस गया।",
			"लोग बेवजह की सुस्ती से पीड़ित थे, और समय भी धीमा होता जा रहा था।",
			"इस अजीब घटना के बीच, किसी को तो सच का पता लगाना था।"
		]
	}
} as const;
