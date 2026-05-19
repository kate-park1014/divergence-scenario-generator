export const scenario_forest_reverberation_02 = {
	"scenario_id": "forest_reverberation_02",
	"order": 2,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"cedar": {
			"id": "mon_bd67c222-311e-4f31-b81f-931b14f6b5c6",
			"name": {
				"korean": "시더",
				"english": "Cedar",
				"japanese": "シダー",
				"chinese": "雪松",
				"french": "Cèdre",
				"spanish": "Cedro",
				"vietnamese": "Tuyết tùng",
				"thai": "ซีดาร์",
				"hindi": "देवदार"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f1057921-5fa2-4be2-767d-1a64c33e6e00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/9579f10e-eb78-40e5-d495-72f489322200/public"
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
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "숲의 깊은 곳으로 발을 들였다. 눈앞에 익숙한 풍경이 펼쳐졌다.",
						"english": "I stepped deeper into the forest. A familiar scene unfolded before my eyes.",
						"japanese": "森の奥深くへと足を踏み入れた。目の前には見慣れた光景が広がっていた。",
						"chinese": "我深入森林。熟悉的景象在我眼前展开。",
						"french": "Je m'enfonçai dans la forêt. Une scène familière se déroula devant mes yeux.",
						"spanish": "Me adentré más en el bosque. Un paisaje familiar se desplegó ante mis ojos.",
						"vietnamese": "Tôi bước sâu vào rừng. Một khung cảnh quen thuộc hiện ra trước mắt.",
						"thai": "ฉันก้าวลึกเข้าไปในป่า ภาพที่คุ้นเคยปรากฏขึ้นตรงหน้า",
						"hindi": "मैं जंगल में और गहराई तक चला गया। मेरी आँखों के सामने एक परिचित दृश्य सामने आया।"
					}
				},
				{
					"content": {
						"korean": "…여긴… 우리 마을이잖아?",
						"english": "...This is... our village, isn't it?",
						"japanese": "…ここ…私たちの村じゃないか？",
						"chinese": "……这里……是我们的村庄，不是吗？",
						"french": "...C'est... notre village, n'est-ce pas ?",
						"spanish": "...Este es... nuestro pueblo, ¿verdad?",
						"vietnamese": "...Đây là... làng của chúng ta mà?",
						"thai": "...นี่มัน... หมู่บ้านของเราไม่ใช่เหรอ?",
						"hindi": "...यह... हमारा गाँव है ना?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "왜 이렇게 선명하지? 꿈 같아.",
						"english": "Why is it so vivid? It feels like a dream.",
						"japanese": "なぜこんなに鮮明なんだ？夢みたいだ。",
						"chinese": "为什么这么清晰？像一场梦。",
						"french": "Pourquoi est-ce si vif ? On dirait un rêve.",
						"spanish": "¿Por qué es tan vívido? Parece un sueño.",
						"vietnamese": "Sao lại sống động thế này? Cứ như một giấc mơ.",
						"thai": "ทำไมมันถึงชัดเจนขนาดนี้? เหมือนฝันเลย",
						"hindi": "यह इतना स्पष्ट क्यों है? यह एक सपने जैसा लगता है।"
					},
					"emotion": "base",
					"speaker": "character_1",
					"type": "speech"
				},
				{
					"speaker": "cedar",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "cedar",
					"type": "speech",
					"content": {
						"korean": "이것이 숲의 유혹입니다. 플로라의 흔적이죠.",
						"english": "This is the forest's temptation. A trace of Flora.",
						"japanese": "これが森の誘惑です。フローラの痕跡でしょう。",
						"chinese": "这是森林的诱惑。是芙罗拉的痕迹。",
						"french": "C'est la tentation de la forêt. Une trace de Flora.",
						"spanish": "Esta es la tentación del bosque. Un rastro de Flora.",
						"vietnamese": "Đây là sự cám dỗ của khu rừng. Dấu vết của Flora.",
						"thai": "นี่คือคำล่อลวงของป่า ร่องรอยของฟลอร่า",
						"hindi": "यह जंगल का प्रलोभन है। फ्लोरा का निशान।"
					},
					"emotion": "base"
				},
				{
					"speaker": "cedar",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "정신을 붙들어야 합니다. 기억에 갇히면 돌아올 수 없어요.",
						"english": "You must hold on to your mind. If you get trapped in memories, you can't come back.",
						"japanese": "気をしっかり持たなければなりません。記憶に囚われたら、戻って来られません。",
						"chinese": "你必须保持清醒。如果被困在记忆中，就无法回来了。",
						"french": "Vous devez garder votre esprit. Si vous êtes piégé dans les souvenirs, vous ne pourrez pas revenir.",
						"spanish": "Debes mantener tu mente. Si te quedas atrapado en los recuerdos, no podrás volver.",
						"vietnamese": "Bạn phải giữ vững tinh thần. Nếu bị mắc kẹt trong ký ức, bạn sẽ không thể quay lại.",
						"thai": "คุณต้องยึดมั่นในสติ ถ้าติดอยู่ในความทรงจำ คุณจะกลับมาไม่ได้",
						"hindi": "आपको अपने दिमाग पर नियंत्रण रखना होगा। यदि आप यादों में फंस जाते हैं, तो आप वापस नहीं आ पाएंगे।"
					}
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"speaker": "cedar"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…이상해. 숲에서 맡던 꽃 향기가 여기서도 나.",
						"english": "...Strange. The floral scent I smelled in the forest is here too.",
						"japanese": "…おかしいな。森で嗅いだ花の香りがここでもする。",
						"chinese": "……奇怪。我在森林里闻到的花香这里也有。",
						"french": "...Étrange. L'odeur de fleur que je sentais dans la forêt est aussi ici.",
						"spanish": "...Extraño. El aroma floral que olí en el bosque también está aquí.",
						"vietnamese": "...Lạ thật. Mùi hương hoa tôi ngửi thấy trong rừng cũng có ở đây.",
						"thai": " ...แปลกจัง กลิ่นดอกไม้ที่ฉันได้กลิ่นในป่าก็มีอยู่ที่นี่ด้วย",
						"hindi": "...अजीब है। जंगल में मैंने जिस फूलों की खुशबू को सूंघा था, वह यहाँ भी है।"
					}
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"content": {
						"korean": "마치… 모든 고통이 없었던 것처럼 행복해.",
						"english": "I'm happy, as if all the pain never existed.",
						"japanese": "まるで…すべての苦痛がなかったかのように幸せだ。",
						"chinese": "仿佛…所有的痛苦都不曾存在，我很幸福。",
						"french": "Je suis heureux(se), comme si toute la douleur n'avait jamais existé.",
						"spanish": "Soy feliz, como si todo el dolor nunca hubiera existido.",
						"vietnamese": "Cứ như thể... mọi đau khổ chưa từng tồn tại, tôi hạnh phúc.",
						"thai": "ราวกับว่า...ความเจ็บปวดทั้งหมดไม่เคยมีอยู่ ฉันมีความสุข",
						"hindi": "जैसे... सारा दर्द कभी था ही नहीं, मैं खुश हूँ।"
					},
					"emotion": "happy"
				},
				{
					"content": {
						"korean": "그것이 환상입니다. 숲을 떠난 이들이 겪는 것과 같아요.",
						"english": "That is an illusion. It's like what those who leave the forest experience.",
						"japanese": "それは幻想です。森を去った者たちが経験するのと同じですよ。",
						"chinese": "那是一个幻象。就像那些离开森林的人所经历的一样。",
						"french": "C'est une illusion. C'est ce que vivent ceux qui quittent la forêt.",
						"spanish": "Eso es una ilusión. Es lo que experimentan aquellos que abandonan el bosque.",
						"vietnamese": "Đó là một ảo ảnh. Giống như những gì người rời rừng đã trải qua.",
						"thai": "นั่นคือภาพลวงตา มันเหมือนกับสิ่งที่ผู้ที่ออกจากป่าประสบ",
						"hindi": "वह एक भ्रम है। यह वैसा ही है जैसा जंगल छोड़ने वाले अनुभव करते हैं।"
					},
					"emotion": "sad",
					"speaker": "cedar",
					"type": "speech"
				},
				{
					"speaker": "cedar",
					"type": "speech",
					"content": {
						"korean": "숲은 행복했던 기억을 미화하며 당신을 붙잡으려 합니다.",
						"english": "The forest idealizes happy memories to try and keep you.",
						"japanese": "森は幸せだった記憶を美化し、あなたを捕らえようとします。",
						"chinese": "森林美化了幸福的记忆，试图将你留下。",
						"french": "La forêt embellit les souvenirs heureux pour essayer de vous retenir.",
						"spanish": "El bosque embellece los recuerdos felices para intentar retenerte.",
						"vietnamese": "Rừng tô đẹp những ký ức hạnh phúc để cố giữ bạn lại.",
						"thai": "ป่าจะทำให้ความทรงจำที่มีความสุขสวยงามขึ้นเพื่อพยายามรั้งคุณไว้",
						"hindi": "जंगल सुखद यादों को सुंदर बनाकर तुम्हें रोकना चाहता है।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "덫이라는 거야?",
						"english": "Is it a trap?",
						"japanese": "罠だというのか？",
						"chinese": "那是一个陷阱吗？",
						"french": "C'est un piège ?",
						"spanish": "¿Es una trampa?",
						"vietnamese": "Đó là một cái bẫy sao?",
						"thai": "นั่นคือกับดักใช่ไหม?",
						"hindi": "क्या यह एक जाल है?"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "cedar",
					"duration_ms": 500,
					"spot": [
						3,
						3
					]
				},
				{
					"content": {
						"korean": "…점점 더 깊어져. 여기가 진짜인 것 같아.",
						"english": "...It's getting deeper. This feels real.",
						"japanese": "…どんどん深くなる。ここが本物みたいだ。",
						"chinese": "……越来越深了。这里好像是真的。",
						"french": "...Ça devient de plus en plus profond. Ça semble réel.",
						"spanish": "...Se vuelve cada vez más profundo. Esto parece real.",
						"vietnamese": "...Càng lúc càng sâu. Chỗ này có vẻ là thật.",
						"thai": "...มันลึกขึ้นเรื่อยๆ ที่นี่ดูเหมือนจริง",
						"hindi": "...यह गहरा होता जा रहा है। यह असली लग रहा है।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "고대 기록에 이와 유사한 존재가 언급됩니다.",
						"english": "Ancient records mention a similar entity.",
						"japanese": "古の記録に、これと似た存在が言及されています。",
						"chinese": "古代记录中提到了类似的存在。",
						"french": "Les anciens registres mentionnent une entité similaire.",
						"spanish": "Los registros antiguos mencionan una entidad similar.",
						"vietnamese": "Trong ghi chép cổ có nhắc đến một thực thể tương tự.",
						"thai": "บันทึกโบราณกล่าวถึงสิ่งมีชีวิตที่คล้ายคลึงกัน",
						"hindi": "प्राचीन अभिलेखों में ऐसी ही एक सत्ता का उल्लेख है।"
					},
					"speaker": "cedar",
					"type": "speech"
				},
				{
					"speaker": "cedar",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "\"영혼을 갉아먹는 그림자\"라고…",
						"english": "They call it 'the shadow that devours souls'...",
						"japanese": "“魂を蝕む影”と…",
						"chinese": "称之为“吞噬灵魂的阴影”...",
						"french": "Ils l'appellent « l'ombre qui dévore les âmes »...",
						"spanish": "Lo llaman 'la sombra que devora almas'...",
						"vietnamese": "Được gọi là 'bóng tối gặm nhấm linh hồn'...",
						"thai": "เรียกว่า 'เงาที่กัดกินวิญญาณ'...",
						"hindi": "इसे 'आत्माओं को कुतरने वाली छाया' कहते हैं..."
					}
				},
				{
					"speaker": "character_3",
					"type": "speech",
					"content": {
						"korean": "그게 플로라라는 거야?",
						"english": "That's Flora?",
						"japanese": "それがフローラだというのか？",
						"chinese": "那就是芙罗拉吗？",
						"french": "C'est Flora ?",
						"spanish": "¿Eso es Flora?",
						"vietnamese": "Đó là Flora sao?",
						"thai": "นั่นคือฟลอร่าใช่ไหม?",
						"hindi": "क्या वह फ्लोरा है?"
					},
					"emotion": "base"
				},
				{
					"speaker": "cedar",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "숲 외곽의 식물들도 기형적으로 자라고 있습니다. 경고 신호예요.",
						"english": "Even plants on the outskirts of the forest are growing abnormally. It's a warning sign.",
						"japanese": "森の外郭の植物も奇形に育っています。警告信号です。",
						"chinese": "即使是森林外围的植物也畸形生长着。这是一个警告信号。",
						"french": "Même les plantes en périphérie de la forêt poussent de manière anormale. C'est un signe d'ajvertissement.",
						"spanish": "Incluso las plantas en las afueras del bosque están creciendo de forma anormal. Es una señal de advertencia.",
						"vietnamese": "Ngay cả thực vật ở rìa rừng cũng mọc dị dạng. Đó là một dấu hiệu cảnh báo.",
						"thai": "แม้แต่พืชที่ขอบป่าก็เติบโตอย่างผิดปกติ นั่นเป็นสัญญาณเตือน",
						"hindi": "जंगल के बाहरी किनारे के पौधे भी असामान्य रूप से बढ़ रहे हैं। यह एक चेतावनी का संकेत है।"
					}
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"speaker": "cedar"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…여기서 나가고 싶지 않아. 계속 이대로 행복하고 싶어.",
						"english": "...I don't want to leave here. I want to stay happy like this.",
						"japanese": "…ここから出たくない。ずっとこのまま幸せでいたい。",
						"chinese": "……我不想离开这里。我想一直这样幸福下去。",
						"french": "...Je ne veux pas partir d'ici. Je veux rester heureux(se) comme ça.",
						"spanish": "...No quiero irme de aquí. Quiero seguir siendo feliz así.",
						"vietnamese": "...Tôi không muốn rời khỏi đây. Tôi muốn cứ hạnh phúc như thế này mãi.",
						"thai": "...ฉันไม่อยากออกไปจากที่นี่ ฉันอยากมีความสุขแบบนี้ต่อไป",
						"hindi": "...मैं यहाँ से जाना नहीं चाहता। मैं ऐसे ही खुश रहना चाहता हूँ।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이게 진짜 내가 원하는 건가?",
						"english": "Is this truly what I want?",
						"japanese": "これが本当に私が望むものなのか？",
						"chinese": "这真的是我想要的吗？",
						"french": "Est-ce vraiment ce que je veux ?",
						"spanish": "¿Es esto realmente lo que quiero?",
						"vietnamese": "Đây có thực sự là điều tôi muốn?",
						"thai": "นี่คือสิ่งที่ฉันต้องการจริงๆ หรือ?",
						"hindi": "क्या यह सचमुच वही है जो मैं चाहता हूँ?"
					},
					"emotion": "base",
					"speaker": "character_4",
					"type": "speech"
				},
				{
					"speaker": "cedar",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "이대로 갇히면 현실로 돌아갈 수 없습니다.",
						"english": "If trapped like this, you can't return to reality.",
						"japanese": "このまま閉じ込められれば、現実には戻れない。",
						"chinese": "如果就这样被困住，你就无法回到现实。",
						"french": "Si vous restez piégé ainsi, vous ne pourrez plus retourner à la réalité.",
						"spanish": "Si quedas atrapado así, no podrás volver a la realidad.",
						"vietnamese": "Nếu bị mắc kẹt thế này, bạn sẽ không thể trở về thực tại.",
						"thai": "หากถูกขังเช่นนี้ คุณจะกลับสู่ความเป็นจริงไม่ได้",
						"hindi": "यदि ऐसे फँस गए, तो तुम वास्तविकता में वापस नहीं लौट सकते।"
					}
				},
				{
					"speaker": "cedar",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "영원한 환상 속에 잠들게 될 겁니다.",
						"english": "You'll fall into an eternal slumber within this illusion.",
						"japanese": "永遠の幻想の中で眠りにつくことになるだろう。",
						"chinese": "你将永远沉睡在幻象之中。",
						"french": "Vous sombrerez dans un sommeil éternel au sein de cette illusion.",
						"spanish": "Caerás en un sueño eterno dentro de esta ilusión.",
						"vietnamese": "Bạn sẽ chìm vào giấc ngủ vĩnh cửu trong ảo ảnh này.",
						"thai": "คุณจะหลับใหลในภาพลวงตาชั่วนิรันดร์",
						"hindi": "तुम इस शाश्वत भ्रम में सो जाओगे।"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "안 돼…!",
						"english": "No...!",
						"japanese": "ダメだ…！",
						"chinese": "不…！",
						"french": "Non… !",
						"spanish": "¡No…!",
						"vietnamese": "Không…!",
						"thai": "ไม่นะ…!",
						"hindi": "नहीं…!"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "어리석은… 환상은 사라지지 않아. 그저… 더 깊숙이 스며들 뿐.",
						"english": "Foolish... Illusions don't vanish. They merely... seep deeper.",
						"japanese": "愚かな…幻想は消えない。ただ…もっと深く染み込むだけだ。",
						"chinese": "愚蠢…幻象不会消失。它只会…渗透得更深。",
						"french": "Imbécile... Les illusions ne disparaissent pas. Elles ne font que... s'infiltrer plus profondément.",
						"spanish": "Necio... Las ilusiones no desaparecen. Simplemente... se infiltran más profundamente.",
						"vietnamese": "Ngu ngốc… Ảo ảnh không biến mất. Nó chỉ… len lỏi sâu hơn mà thôi.",
						"thai": "โง่เขลา… ภาพลวงตาไม่หายไป. มันเพียงแค่… ซึมลึกเข้าไปเท่านั้น",
						"hindi": "मूर्ख… भ्रम गायब नहीं होते। वे बस… और गहरे समा जाते हैं।"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "네가 숲에서 뭘 얻었든, 결국은 덧에 걸릴 것이다.",
						"english": "Whatever you gained from the forest, you'll eventually fall into the trap.",
						"japanese": "森で何を得ようと、結局は罠にかかるだろう。",
						"chinese": "无论你从森林中得到了什么，最终都会落入陷阱。",
						"french": "Quoi que tu aies obtenu de la forêt, tu finiras par tomber dans le piège.",
						"spanish": "Lo que sea que hayas obtenido del bosque, eventualmente caerás en la trampa.",
						"vietnamese": "Dù ngươi có được gì từ khu rừng, cuối cùng ngươi cũng sẽ sa vào bẫy.",
						"thai": "ไม่ว่าเจ้าจะได้อะไรจากป่า สุดท้ายเจ้าก็จะติดกับดัก",
						"hindi": "जंगल से तुम्हें जो भी मिला हो, अंततः तुम जाल में फँसोगे।"
					}
				},
				{
					"content": {
						"korean": "무슨 소리야…?",
						"english": "What was that...?",
						"japanese": "何だと…？",
						"chinese": "什么声音……？",
						"french": "Qu'est-ce que c'était...?",
						"spanish": "¿Qué fue eso...?",
						"vietnamese": "Cái gì vậy...?",
						"thai": "อะไรนะ...?",
						"hindi": "यह क्या था...?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"speaker": "cedar",
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "그것은 진정한 형태가 아닙니다. 더 큰 것이 남아있어요.",
						"english": "That wasn't its true form. Something greater remains.",
						"japanese": "あれは真の姿ではない。もっと大きなものが残っている。",
						"chinese": "那并非其真身。更强大的事物尚存。",
						"french": "Ce n'était pas sa vraie forme. Quelque chose de plus grand subsiste.",
						"spanish": "Esa no era su verdadera forma. Algo más grande aún queda.",
						"vietnamese": "Đó không phải là hình dạng thật của nó. Một thứ gì đó lớn hơn vẫn còn.",
						"thai": "นั่นไม่ใช่ร่างที่แท้จริงของมัน ยังมีสิ่งที่ใหญ่กว่าหลงเหลืออยู่",
						"hindi": "वह उसका असली रूप नहीं था। कुछ और बड़ा बाकी है।"
					},
					"emotion": "base",
					"speaker": "cedar",
					"type": "speech"
				},
				{
					"content": {
						"korean": "환상의 그림자는 사라졌지만, 숲의 영향은 더욱 깊숙이 파고들었다.",
						"english": "The shadow of illusion has vanished, but the forest's influence has dug deeper.",
						"japanese": "幻影の影は消え去ったが、森の影響はさらに深く根付いた。",
						"chinese": "幻象之影已逝，但森林的影响却更深地渗透了。",
						"french": "L'ombre de l'illusion a disparu, mais l'influence de la forêt s'est infiltrée plus profondément.",
						"spanish": "La sombra de la ilusión se desvaneció, pero la influencia del bosque se ha arraigado más profundamente.",
						"vietnamese": "Bóng ma của ảo ảnh đã biến mất, nhưng ảnh hưởng của rừng đã ăn sâu hơn.",
						"thai": "เงาแห่งมายาได้หายไปแล้ว แต่ผลกระทบของป่าได้ฝังลึกลงไปอีก",
						"hindi": "भ्रम की छाया तो मिट गई, पर जंगल का प्रभाव और गहरा पैठ गया है।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "돌아온 이들의 병은 아직 끝나지 않았다.",
						"english": "The ailment of those who returned is not yet over.",
						"japanese": "戻りし者の病は、まだ終わっていなかった。",
						"chinese": "归来者的病症尚未结束。",
						"french": "La maladie de ceux qui sont revenus n'est pas encore terminée.",
						"spanish": "La enfermedad de los que regresaron aún no ha terminado.",
						"vietnamese": "Căn bệnh của những người trở về vẫn chưa kết thúc.",
						"thai": "อาการป่วยของผู้ที่กลับมายังไม่สิ้นสุด",
						"hindi": "लौटे हुए लोगों की बीमारी अभी खत्म नहीं हुई है।"
					},
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "결국… 너도 환상에 갇히는군. 달콤한 꿈에 영원히 잠들어라.",
						"english": "In the end... you too are trapped in illusion. Sleep forever in a sweet dream.",
						"japanese": "結局… お前も幻想に囚われるのか。甘い夢に永遠に眠れ。",
						"chinese": "终究……你也困于幻象。在甜美的梦中永远沉睡吧。",
						"french": "Au final... toi aussi es piégé dans l'illusion. Dors éternellement dans un doux rêve.",
						"spanish": "Al final... tú también quedas atrapado en la ilusión. Duerme para siempre en un dulce sueño.",
						"vietnamese": "Cuối cùng... ngươi cũng bị mắc kẹt trong ảo ảnh. Hãy ngủ vĩnh viễn trong giấc mơ ngọt ngào đi.",
						"thai": "สุดท้าย... เจ้าก็ติดอยู่ในภาพลวงตา จงหลับใหลไปชั่วนิรันดร์ในฝันอันแสนหวาน",
						"hindi": "आखिरकार... तुम भी भ्रम में फंस गए। मीठे सपने में हमेशा के लिए सो जाओ।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "아니…! 아직 끝나지 않았어!",
						"english": "No...! It's not over yet!",
						"japanese": "いや…！まだ終わってない！",
						"chinese": "不……！还没结束！",
						"french": "Non...! Ce n'est pas encore fini !",
						"spanish": "¡No...! ¡Aún no ha terminado!",
						"vietnamese": "Không...! Vẫn chưa kết thúc đâu!",
						"thai": "ไม่...! ยังไม่จบ!",
						"hindi": "नहीं...! अभी खत्म नहीं हुआ है!"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "환상의 심장부. 그곳에서 정체 모를 그림자가 나타났다.",
						"english": "The heart of the illusion. A mysterious shadow appeared there.",
						"japanese": "幻想の心臓部。そこで正体不明の影が現れた。",
						"chinese": "幻象的核心。一个不明身份的影子在那里出现。",
						"french": "Au cœur de l'illusion. Une ombre inconnue y apparut.",
						"spanish": "El corazón de la ilusión. Una sombra desconocida apareció allí.",
						"vietnamese": "Trung tâm của ảo ảnh. Một cái bóng bí ẩn xuất hiện ở đó.",
						"thai": "แกนกลางแห่งภาพลวงตา. เงาลึกลับปรากฏขึ้นที่นั่น",
						"hindi": "भ्रम का हृदय। वहाँ एक अज्ञात परछाई प्रकट हुई।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…드디어 여기까지 왔군. 이 달콤한 꿈을 깨려는 건가?",
						"english": "...So you've finally made it this far. Do you intend to break this sweet dream?",
						"japanese": "…ついにここまで来たか。この甘い夢を壊すつもりか？",
						"chinese": "……你终于走到这一步了。想打破这个美梦吗？",
						"french": "...Enfin, tu es arrivé jusqu'ici. As-tu l'intention de briser ce doux rêve ?",
						"spanish": "...Así que finalmente llegaste hasta aquí. ¿Intentas romper este dulce sueño?",
						"vietnamese": "…Cuối cùng thì ngươi cũng đến được đây. Ngươi định phá vỡ giấc mơ ngọt ngào này sao?",
						"thai": "...ในที่สุดเจ้าก็มาถึงที่นี่. เจ้าตั้งใจจะทำลายความฝันอันหอมหวานนี้หรือ?",
						"hindi": "…तो तुम अंततः यहाँ तक आ पहुँचे। क्या तुम इस मीठे सपने को तोड़ना चाहते हो?"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "어차피 모두가 갈망하는 행복이다. 왜 거부하려 하지?",
						"english": "It's the happiness everyone yearns for anyway. Why try to reject it?",
						"japanese": "どうせ皆が渇望する幸福だ。なぜ拒もうとする？",
						"chinese": "反正这是人人渴望的幸福。为何要拒绝呢？",
						"french": "C'est le bonheur que tout le monde désire de toute façon. Pourquoi essayer de le rejeter ?",
						"spanish": "Es la felicidad que todos anhelan de todos modos. ¿Por qué intentas rechazarla?",
						"vietnamese": "Dù sao thì đây cũng là hạnh phúc mà mọi người khao khát. Tại sao lại cố gắng từ chối nó?",
						"thai": "นี่คือความสุขที่ทุกคนโหยหาอยู่แล้ว. ทำไมถึงพยายามปฏิเสธมัน?",
						"hindi": "यह तो वही खुशी है जिसकी हर कोई लालसा करता है। तुम इसे अस्वीकार क्यों करना चाहते हो?"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이건 진짜 행복이 아니야!",
						"english": "This isn't real happiness!",
						"japanese": "これは本当の幸福じゃない！",
						"chinese": "这不是真正的幸福！",
						"french": "Ce n'est pas le vrai bonheur !",
						"spanish": "¡Esto no es verdadera felicidad!",
						"vietnamese": "Đây không phải là hạnh phúc thật sự!",
						"thai": "นี่ไม่ใช่ความสุขที่แท้จริง!",
						"hindi": "यह असली खुशी नहीं है!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"숲은 여전히 아름다웠다. 하지만 그 아름다움은 달콤한 독이었다.",
			"병든 자들은 숲의 환영에 사로잡혀 과거의 행복을 갈망했다.",
			"학자 시더는 고서 속에서 경고를 읽었다.",
			"환상은 덧이었다. 영혼을 잠식하는."
		],
		"english": [
			"The forest was still beautiful. But its beauty was a sweet poison.",
			"The afflicted were trapped by the forest's illusion, yearning for past happiness.",
			"Scholar Ceder read a warning in ancient texts.",
			"The illusion was a snare. Devouring souls."
		],
		"japanese": [
			"森は相変わらず美しかった。しかし、その美しさは甘い毒だった。",
			"病める者たちは森の幻影に囚われ、過去の幸福を渇望した。",
			"学者シーダーは古書の中で警告を読んだ。",
			"幻想は罠だった。魂を蝕む。"
		],
		"chinese": [
			"森林依然美丽。但这美丽是甜蜜的毒药。",
			"病者们被森林的幻象所困，渴望着过去的幸福。",
			"学者西德在古书中读到了警告。",
			"幻象是一个陷阱。吞噬灵魂。"
		],
		"french": [
			"La forêt était toujours magnifique. Mais sa beauté était un doux poison.",
			"Les affligés étaient piégés par l'illusion de la forêt, aspirant au bonheur passé.",
			"Le savant Ceder lut un avertissement dans les textes anciens.",
			"L'illusion était un piège. Dévoreuse d'âmes."
		],
		"spanish": [
			"El bosque seguía siendo hermoso. Pero su belleza era un dulce veneno.",
			"Los afligidos estaban atrapados por la ilusión del bosque, anhelando la felicidad pasada.",
			"El erudito Ceder leyó una advertencia en los textos antiguos.",
			"La ilusión era una trampa. Que devoraba almas."
		],
		"vietnamese": [
			"Rừng vẫn đẹp. Nhưng vẻ đẹp đó là một chất độc ngọt ngào.",
			"Những kẻ bệnh tật bị mắc kẹt trong ảo ảnh của rừng, khao khát hạnh phúc đã qua.",
			"Học giả Ceder đọc một lời cảnh báo trong các văn bản cổ.",
			"Ảo ảnh là một cái bẫy. Nuốt chửng linh hồn."
		],
		"thai": [
			"ป่ายังคงสวยงาม แต่ความงามนั้นเป็นยาพิษหวาน",
			"ผู้ป่วยถูกกักขังด้วยภาพลวงตาของป่า โหยหาความสุขในอดีต",
			"นักวิชาการซีดาร์อ่านคำเตือนในตำราโบราณ",
			"ภาพลวงตาเป็นกับดัก กลืนกินวิญญาณ"
		],
		"hindi": [
			"जंगल अब भी खूबसूरत था। लेकिन उसकी खूबसूरती एक मीठा ज़हर थी।",
			"पीड़ित लोग जंगल के भ्रम में फंस गए थे, अतीत की खुशियों को तरस रहे थे।",
			"विद्वान सीदर ने प्राचीन ग्रंथों में एक चेतावनी पढ़ी।",
			"भ्रम एक जाल था। आत्माओं को निगलने वाला।"
		]
	}
} as const;
