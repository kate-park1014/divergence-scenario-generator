export const scenario_hell_pactum_20_04 = {
	"scenario_id": "hell_pactum_20_04",
	"order": 4,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"mara": {
			"id": "mon_94e5bffe-d3cd-4e5e-a174-633174784043",
			"name": {
				"korean": "마라",
				"english": "Mara",
				"japanese": "マーラ",
				"chinese": "玛拉",
				"french": "Mara",
				"spanish": "Mara",
				"vietnamese": "Mara",
				"thai": "มารา",
				"hindi": "मारा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/801457b4-3ecc-41f5-e450-73d6ce8eb200/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/9bfac7d4-6bfd-49b0-5ba4-a25419c71400/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"심연의 도서관.",
			"마라는 팩툼의 진실을 쫓아 고통 속에서 헤매고 있었다.",
			"드러나는 진실은 희망을 갉아먹고, 모든 것을 절망으로 물들였다.",
			"지옥의 순환은 끝없이 반복되고… 그 메아리가 울려 퍼진다."
		],
		"english": [
			"The Abyssal Library.",
			"Mara wandered in agony, seeking the truth of the Pactum.",
			"The revealed truth gnawed at hope, painting everything with despair.",
			"The infernal cycle repeats endlessly… and its echo resounds."
		],
		"japanese": [
			"深淵の図書館。",
			"マーラはパクトゥムの真実を追い求め、苦痛の中を彷徨っていた。",
			"露わになった真実は希望を蝕み、全てを絶望で染め上げた。",
			"地獄の循環は限りなく繰り返され…その残響が響き渡る。"
		],
		"chinese": [
			"深渊图书馆。",
			"玛拉在痛苦中徘徊，追寻着契约的真相。",
			"揭示的真相侵蚀着希望，将一切染上绝望的色彩。",
			"地狱的循环无休止地重复着……其回声响彻不绝。"
		],
		"french": [
			"La Bibliothèque Abyssale.",
			"Mara errait dans l'agonie, cherchant la vérité du Pactum.",
			"La vérité révélée rongeait l'espoir, teignant tout de désespoir.",
			"Le cycle infernal se répète sans fin… et son écho résonne."
		],
		"spanish": [
			"La Biblioteca Abisal.",
			"Mara deambulaba con agonía, buscando la verdad del Pactum.",
			"La verdad revelada carcomía la esperanza, tiñendo todo de desesperación.",
			"El ciclo infernal se repite sin cesar… y su eco resuena."
		],
		"vietnamese": [
			"Thư viện Hư Không.",
			"Mara lang thang trong đau khổ, tìm kiếm sự thật về Giao Ước.",
			"Sự thật được phơi bày gặm nhấm hy vọng, nhuộm mọi thứ bằng sự tuyệt vọng.",
			"Vòng luân hồi địa ngục lặp lại không ngừng… và tiếng vang của nó lan khắp."
		],
		"thai": [
			"ห้องสมุดแห่งห้วงลึก",
			"มาราวนเวียนอยู่ในความทุกข์ทรมาน แสวงหาความจริงของพันธสัญญา",
			"ความจริงที่เปิดเผยกัดกินความหวัง ย้อมทุกสิ่งด้วยความสิ้นหวัง",
			"วัฏจักรแห่งนรกหมุนวนไม่สิ้นสุด… และเสียงสะท้อนของมันก็ดังก้องไปทั่ว"
		],
		"hindi": [
			"अगाध पुस्तकालय।",
			"मारा, पैक्टम की सच्चाई की तलाश में, पीड़ा में भटक रही थी।",
			"प्रकट हुई सच्चाई ने आशा को कुतर दिया, सब कुछ निराशा में रंग दिया।",
			"नरक का चक्र अंतहीन दोहराता है… और उसकी गूँज गूँजती है।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "어둠에 잠긴 도서관. 잊혀진 지식의 냄새가 코를 찔렀다.",
						"english": "The library steeped in darkness. The scent of forgotten knowledge stung my nose.",
						"japanese": "闇に包まれた図書館。忘れ去られた知識の匂いが鼻を突いた。",
						"chinese": "沉浸在黑暗中的图书馆。被遗忘知识的气味刺鼻而来。",
						"french": "La bibliothèque plongée dans l'obscurité. L'odeur du savoir oublié me piquait le nez.",
						"spanish": "La biblioteca sumida en la oscuridad. El olor a conocimiento olvidado me picó la nariz.",
						"vietnamese": "Thư viện chìm trong bóng tối. Mùi kiến thức bị lãng quên xộc vào mũi tôi.",
						"thai": "ห้องสมุดที่จมดิ่งในความมืด กลิ่นอายของความรู้ที่ถูกลืมเลือนเตะจมูก",
						"hindi": "अंधेरे में डूबा पुस्तकालय। भूले हुए ज्ञान की गंध नाक में चुभ गई।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "여기가 마라가 말한 곳인가?",
						"english": "Is this the place Mara spoke of?",
						"japanese": "ここがマーラが話していた場所か？",
						"chinese": "这里是玛拉提到的地方吗？",
						"french": "Est-ce l'endroit dont Mara a parlé ?",
						"spanish": "¿Es este el lugar del que habló Mara?",
						"vietnamese": "Đây có phải là nơi Mara đã nói đến không?",
						"thai": "ที่นี่คือที่ที่มาราพูดถึงใช่ไหม?",
						"hindi": "क्या यही वह जगह है जिसके बारे में मारा ने बताया था?"
					}
				},
				{
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "mara"
				},
				{
					"content": {
						"korean": "그래… 팩툼의 진실이 여기에 있어.",
						"english": "Yes… the truth of the Pactum is here.",
						"japanese": "ああ… パクトゥムの真実がここにある。",
						"chinese": "是的……契约的真相就在这里。",
						"french": "Oui… la vérité du Pactum est ici.",
						"spanish": "Sí… la verdad del Pactum está aquí.",
						"vietnamese": "Đúng vậy… sự thật về Giao Ước ở đây.",
						"thai": "ใช่… ความจริงของพันธสัญญาอยู่ที่นี่",
						"hindi": "हाँ… पैक्टम की सच्चाई यहीं है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "mara"
				},
				{
					"content": {
						"korean": "그는 단순한 중개인이 아니야. 계약은 영혼을 갉아먹지.",
						"english": "He's no mere intermediary. The pact devours souls.",
						"japanese": "彼は単なる仲介者ではない。契約は魂を蝕む。",
						"chinese": "他不仅仅是个中间人。这份契约会吞噬灵魂。",
						"french": "Ce n'est pas un simple intermédiaire. Le pacte dévore les âmes.",
						"spanish": "No es un mero intermediario. El pacto devora almas.",
						"vietnamese": "Hắn ta không chỉ là một người trung gian. Giao ước này ăn mòn linh hồn.",
						"thai": "เขาไม่ใช่แค่คนกลาง พันธสัญญานี้กัดกินวิญญาณ",
						"hindi": "वह कोई साधारण मध्यस्थ नहीं है। यह समझौता आत्माओं को खा जाता है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "mara"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "영혼을 갉아먹는다고?",
						"english": "Devours souls?",
						"japanese": "魂を蝕むだと？",
						"chinese": "吞噬灵魂？",
						"french": "Dévorer les âmes ?",
						"spanish": "¿Devora almas?",
						"vietnamese": "Ăn mòn linh hồn sao?",
						"thai": "กัดกินวิญญาณหรือ?",
						"hindi": "आत्माओं को खा जाता है?"
					},
					"speaker": "character_1"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "mara",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "팩툼은 거래의 대가로 영혼의 가장 중요한 조각을 가져가.",
						"english": "The Pactum takes the most crucial piece of a soul as payment for the trade.",
						"japanese": "パクトゥムは取引の代償として、魂の最も重要な断片を奪い去る。",
						"chinese": "契约会夺走灵魂中最重要的一部分作为交易的代价。",
						"french": "Le Pactum prend la pièce la plus cruciale d'une âme en paiement de l'échange.",
						"spanish": "El Pactum toma la pieza más crucial de un alma como pago por el trato.",
						"vietnamese": "Giao Ước lấy đi phần quan trọng nhất của linh hồn như một cái giá cho cuộc giao dịch.",
						"thai": "พันธสัญญาจะเอาส่วนที่สำคัญที่สุดของวิญญาณไปเป็นค่าตอบแทนของการแลกเปลี่ยน",
						"hindi": "पैक्टम व्यापार के बदले आत्मा का सबसे महत्वपूर्ण टुकड़ा ले लेता है।"
					},
					"speaker": "mara"
				},
				{
					"content": {
						"korean": "그럼 아무도 온전할 수 없다는 거야?",
						"english": "Then no one can remain whole?",
						"japanese": "誰も無事ではいられないってことか？",
						"chinese": "那是不是意味着，谁都无法全身而退？",
						"french": "Alors personne ne peut rester intact ?",
						"spanish": "¿Entonces nadie puede quedar ileso?",
						"vietnamese": "Vậy là không ai có thể toàn vẹn ư?",
						"thai": "งั้นก็ไม่มีใครรอดพ้นได้เลยงั้นเหรอ?",
						"hindi": "तो क्या कोई भी अक्षुण्ण नहीं रह सकता?"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_2"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "모든 지옥의 고통은… 반복되는 대가일 뿐이야.",
						"english": "All the suffering of hell… is just a repeating price.",
						"japanese": "地獄の苦しみは…ただ繰り返される代償に過ぎない。",
						"chinese": "地狱所有的痛苦……都只是重复的代价罢了。",
						"french": "Toutes les souffrances de l'enfer… ne sont qu'un prix qui se répète.",
						"spanish": "Todo el sufrimiento del infierno... es solo un precio que se repite.",
						"vietnamese": "Mọi nỗi đau của địa ngục… chỉ là cái giá lặp đi lặp lại.",
						"thai": "ความทุกข์ทรมานทั้งหมดในนรก… เป็นเพียงราคาที่ต้องชดใช้ซ้ำแล้วซ้ำเล่าเท่านั้น",
						"hindi": "नरक का सारा कष्ट… बस एक दोहराई जाने वाली कीमत है।"
					},
					"speaker": "mara"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "어디선가 낯선 광경이 섬광처럼 스쳐 지나갔다. 본 적 없는 풍경, 하지만 묘하게 익숙한.",
						"english": "A strange scene flashed by like lightning. A landscape never seen before, yet strangely familiar.",
						"japanese": "見知らぬ光景が閃光のように過ぎ去った。見たことのない風景、だが妙に懐かしい。",
						"chinese": "一幕陌生的景象如闪电般划过。从未见过的风景，却又莫名的熟悉。",
						"french": "Une scène étrange a traversé comme un éclair. Un paysage jamais vu, mais étrangement familier.",
						"spanish": "Una escena extraña pasó como un destello. Un paisaje nunca visto, pero extrañamente familiar.",
						"vietnamese": "Một cảnh tượng lạ lẫm lướt qua như tia chớp. Một khung cảnh chưa từng thấy, nhưng lại quen thuộc một cách kỳ lạ.",
						"thai": "ภาพที่ไม่คุ้นเคยฉายผ่านไปราวกับสายฟ้าแลบ ทิวทัศน์ที่ไม่เคยเห็นมาก่อน แต่กลับคุ้นเคยอย่างประหลาด",
						"hindi": "एक अजीबोगरीब दृश्य बिजली की तरह कौंध गया। एक ऐसा परिदृश्य जो पहले कभी नहीं देखा, फिर भी अजीब तरह से परिचित।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"speaker": "mara",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						2
					]
				},
				{
					"speaker": "mara",
					"content": {
						"korean": "이 기록들을 봐… 비슷한 사건들이 계속해서… 반복돼.",
						"english": "Look at these records… similar incidents keep… repeating.",
						"japanese": "この記録を見て…似たような事件が何度も…繰り返されている。",
						"chinese": "看这些记录……相似的事件不断……重复着。",
						"french": "Regarde ces archives… des incidents similaires se répètent… encore et encore.",
						"spanish": "Mira estos registros… incidentes similares siguen… repitiéndose.",
						"vietnamese": "Nhìn những ghi chép này đi… những sự việc tương tự cứ… lặp đi lặp lại.",
						"thai": "ดูบันทึกพวกนี้สิ… เหตุการณ์คล้ายกันยังคง… เกิดขึ้นซ้ำแล้วซ้ำอีก",
						"hindi": "इन रिकॉर्ड्स को देखो… ऐसी ही घटनाएँ बार-बार… दोहराई जा रही हैं।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "정말이야? 패턴이 보여.",
						"english": "Really? I see a pattern.",
						"japanese": "本当に？パターンが見える。",
						"chinese": "真的吗？我看到了一个模式。",
						"french": "Vraiment ? Je vois un schéma.",
						"spanish": "¿En serio? Veo un patrón.",
						"vietnamese": "Thật sao? Tôi thấy một quy luật.",
						"thai": "จริงเหรอ? ฉันเห็นรูปแบบนะ",
						"hindi": "सचमुच? मुझे एक पैटर्न दिख रहा है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "지옥은 거대한 순환이야. 모든 절망은 다시 시작돼.",
						"english": "Hell is a grand cycle. All despair begins anew.",
						"japanese": "地獄は巨大な循環だ。すべての絶望は再び始まる。",
						"chinese": "地狱是一个巨大的循环。所有的绝望都会重新开始。",
						"french": "L'enfer est un grand cycle. Tout désespoir recommence.",
						"spanish": "El infierno es un gran ciclo. Toda desesperación comienza de nuevo.",
						"vietnamese": "Địa ngục là một vòng tuần hoàn lớn. Mọi sự tuyệt vọng đều bắt đầu lại.",
						"thai": "นรกคือวัฏจักรอันยิ่งใหญ่ ความสิ้นหวังทั้งหมดเริ่มต้นใหม่อีกครั้ง",
						"hindi": "नरक एक भव्य चक्र है। सारी निराशा फिर से शुरू होती है।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "mara"
				},
				{
					"speaker": "character_3",
					"content": {
						"korean": "우린 여기서 탈출할 수 없다는 건가?",
						"english": "Does this mean we can't escape from here?",
						"japanese": "私たちはここから脱出できないってことか？",
						"chinese": "难道我们无法逃离这里吗？",
						"french": "Cela signifie-t-il que nous ne pouvons pas nous échapper d'ici ?",
						"spanish": "¿Significa esto que no podemos escapar de aquí?",
						"vietnamese": "Điều này có nghĩa là chúng ta không thể thoát khỏi đây ư?",
						"thai": "นี่หมายความว่าเราหนีจากที่นี่ไม่ได้งั้นเหรอ?",
						"hindi": "क्या इसका मतलब है कि हम यहाँ से बच नहीं सकते?"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "그 진실이… 나를 더 깊은 절망으로 밀어 넣어.",
						"english": "That truth… pushes me into deeper despair.",
						"japanese": "その真実が…私をより深い絶望へと突き落とす。",
						"chinese": "那个真相……将我推向更深的绝望。",
						"french": "Cette vérité… me pousse dans un désespoir plus profond.",
						"spanish": "Esa verdad… me empuja a una desesperación más profunda.",
						"vietnamese": "Sự thật đó… đẩy tôi vào tuyệt vọng sâu hơn.",
						"thai": "ความจริงนั้น… ผลักฉันให้จมดิ่งลงสู่ความสิ้นหวังที่ลึกซึ้งยิ่งขึ้น",
						"hindi": "वह सच्चाई… मुझे और भी गहरे निराशा में धकेल देती है।"
					},
					"speaker": "mara"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						1,
						2
					],
					"action": "enter",
					"type": "direction",
					"speaker": "mara"
				},
				{
					"speaker": "mara",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이제 알겠어. 팩툼은 단순한 기록자가 아니야.",
						"english": "Now I understand. Factum isn't just a record keeper.",
						"japanese": "やっと分かった。ファクトゥムは単なる記録者じゃない。",
						"chinese": "现在我明白了。法克图姆不仅仅是一个记录者。",
						"french": "Maintenant je comprends. Factum n'est pas qu'un simple archiviste.",
						"spanish": "Ahora entiendo. Factum no es solo un registrador.",
						"vietnamese": "Bây giờ tôi hiểu rồi. Factum không chỉ là người ghi chép.",
						"thai": "ตอนนี้ฉันเข้าใจแล้ว Factum ไม่ใช่แค่ผู้บันทึกเท่านั้น",
						"hindi": "अब मैं समझ गया। फैक्टम सिर्फ एक रिकॉर्ड रखने वाला नहीं है।"
					}
				},
				{
					"speaker": "mara",
					"content": {
						"korean": "그는 이 순환의 설계자… 모든 비극을 만들어냈어.",
						"english": "He is the architect of this cycle… he created all the tragedies.",
						"japanese": "彼はこの循環の設計者…すべての悲劇を作り出した。",
						"chinese": "他是这个循环的设计者……他创造了所有的悲剧。",
						"french": "Il est l'architecte de ce cycle… il a créé toutes les tragédies.",
						"spanish": "Él es el arquitecto de este ciclo… él creó todas las tragedias.",
						"vietnamese": "Hắn là kiến trúc sư của vòng tuần hoàn này… hắn đã tạo ra mọi bi kịch.",
						"thai": "เขาคือสถาปนิกของวัฏจักรนี้… เขาสร้างโศกนาฏกรรมทั้งหมดขึ้นมา",
						"hindi": "वह इस चक्र का वास्तुकार है… उसने सभी त्रासदियों का निर्माण किया।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "그럼 우리가 싸우는 것도… 전부 계획된 건가?",
						"english": "So, even our fight... was it all planned?",
						"japanese": "では、我々が戦うことも…全て計画されていたと？",
						"chinese": "那么，我们之间的战斗…也是被计划好的吗？",
						"french": "Alors, même notre combat... tout était planifié ?",
						"spanish": "¿Así que, incluso nuestra lucha... estaba todo planeado?",
						"vietnamese": "Vậy thì, ngay cả trận chiến của chúng ta... cũng đã được lên kế hoạch hết sao?",
						"thai": "งั้นการต่อสู้ของเรา...ก็ถูกวางแผนไว้ทั้งหมดเลยเหรอ?",
						"hindi": "तो, हमारी लड़ाई भी... सब कुछ नियोजित था क्या?"
					}
				},
				{
					"content": {
						"korean": "아니. 이 굴레를 깰 유일한 균열은… 너의 분노야.",
						"english": "No. The only crack to break this cycle... is your rage.",
						"japanese": "いや。この輪廻を破る唯一の亀裂は…お前の怒りだ。",
						"chinese": "不。打破这个循环的唯一裂痕…是你的愤怒。",
						"french": "Non. La seule faille pour briser ce cycle... est ta rage.",
						"spanish": "No. La única grieta para romper este ciclo... es tu ira.",
						"vietnamese": "Không. Vết nứt duy nhất để phá vỡ vòng luân hồi này... chính là cơn thịnh nộ của ngươi.",
						"thai": "ไม่หรอก รอยร้าวเดียวที่จะทำลายวงจรนี้ได้...คือความโกรธของเจ้า",
						"hindi": "नहीं। इस चक्र को तोड़ने वाली एकमात्र दरार... तुम्हारा क्रोध है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "mara"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "하지만 그 대가가… 너무 끔찍할 거야.",
						"english": "But the price... will be too terrible.",
						"japanese": "だが、その代償は…あまりにも恐ろしいものになるだろう。",
						"chinese": "但那个代价…会非常可怕。",
						"french": "Mais le prix... sera trop terrible.",
						"spanish": "Pero el precio... será demasiado terrible.",
						"vietnamese": "Nhưng cái giá phải trả... sẽ quá kinh hoàng.",
						"thai": "แต่ค่าตอบแทน...จะเลวร้ายเกินไป",
						"hindi": "लेकिन उसकी कीमत... बहुत भयानक होगी।"
					},
					"speaker": "mara"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "크크… 한 번의 승리가 모든 것을 바꾸진 않아.",
						"english": "Heh heh... A single victory won't change everything.",
						"japanese": "クク…一度の勝利ですべてが変わるわけではない。",
						"chinese": "呵呵…一次胜利并不能改变一切。",
						"french": "Hé hé... Une seule victoire ne changera pas tout.",
						"spanish": "Je je... Una sola victoria no cambiará todo.",
						"vietnamese": "Khà khà... Một chiến thắng duy nhất không thay đổi được mọi thứ đâu.",
						"thai": "ฮึๆ...ชัยชนะครั้งเดียวไม่สามารถเปลี่ยนทุกสิ่งได้หรอก",
						"hindi": "हँसता है... एक जीत सब कुछ नहीं बदलती।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "넌 아직… 진정한 어둠을 보지 못했어.",
						"english": "You still haven't... seen true darkness.",
						"japanese": "お前はまだ…真の闇を見ていない。",
						"chinese": "你还没有…看到真正的黑暗。",
						"french": "Tu n'as pas encore... vu la véritable obscurité.",
						"spanish": "Todavía no has... visto la verdadera oscuridad.",
						"vietnamese": "Ngươi vẫn chưa... nhìn thấy bóng tối thực sự.",
						"thai": "เจ้ายังไม่เคย...เห็นความมืดมิดที่แท้จริง",
						"hindi": "तुमने अभी तक... सच्ची अँधेरे को नहीं देखा है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "그래도 멈추지 않아.",
						"english": "Even so, I won't stop.",
						"japanese": "それでも、私は止まらない。",
						"chinese": "即便如此，我也不会停止。",
						"french": "Malgré tout, je ne m'arrêterai pas.",
						"spanish": "Aun así, no me detendré.",
						"vietnamese": "Dù vậy, ta sẽ không dừng lại.",
						"thai": "ถึงอย่างนั้น ฉันก็ไม่หยุด",
						"hindi": "फिर भी, मैं नहीं रुकूँगा।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"speaker": "mara",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						2
					]
				},
				{
					"content": {
						"korean": "그는 진실을 말했어. 하지만… 굴복할 순 없어.",
						"english": "He spoke the truth. But... I cannot yield.",
						"japanese": "彼は真実を語った。だが…屈服するわけにはいかない。",
						"chinese": "他说的是实话。但是…我不能屈服。",
						"french": "Il a dit la vérité. Mais… je ne peux pas céder.",
						"spanish": "Dijo la verdad. Pero… no puedo ceder.",
						"vietnamese": "Hắn đã nói sự thật. Nhưng… ta không thể khuất phục.",
						"thai": "เขาพูดความจริง แต่...ฉันยอมแพ้ไม่ได้",
						"hindi": "उसने सच कहा था। पर… मैं हार नहीं मान सकता।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "mara"
				},
				{
					"content": {
						"korean": "어둡고 거대한 그림자가 심연 아래에서 꿈틀거렸다. 다음 비극이 시작될 조짐이었다.",
						"english": "A dark, colossal shadow writhed beneath the abyss. It was a sign that the next tragedy was about to begin.",
						"japanese": "暗く巨大な影が深淵の下で蠢いていた。次の悲劇が始まる兆しだった。",
						"chinese": "黑暗巨大的阴影在深渊之下蠕动。那是下一场悲剧即将开始的征兆。",
						"french": "Une ombre sombre et colossale se tordait sous l'abîme. C'était le signe que la prochaine tragédie était sur le point de commencer.",
						"spanish": "Una sombra oscura y colosal se retorcía bajo el abismo. Era el presagio de que la siguiente tragedia estaba por comenzar.",
						"vietnamese": "Một bóng tối khổng lồ, u ám cuộn mình dưới vực sâu. Đó là dấu hiệu bi kịch tiếp theo sắp bắt đầu.",
						"thai": "เงาขนาดมหึมามืดมิดบิดตัวอยู่ใต้ขุมนรก มันเป็นสัญญาณว่าโศกนาฏกรรมครั้งต่อไปกำลังจะเริ่มต้นขึ้น",
						"hindi": "एक काली, विशालकाय परछाई रसातल के नीचे रेंग रही थी। यह अगली त्रासदी के शुरू होने का संकेत था।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "봐라. 네 모든 노력은 무의미해.",
						"english": "Look. All your efforts are meaningless.",
						"japanese": "見ろ。お前の全ての努力は無意味だ。",
						"chinese": "瞧。你所有的努力都毫无意义。",
						"french": "Regarde. Tous tes efforts sont vains.",
						"spanish": "Mira. Todos tus esfuerzos son inútiles.",
						"vietnamese": "Nhìn xem. Mọi nỗ lực của ngươi đều vô nghĩa.",
						"thai": "ดูสิ ความพยายามทั้งหมดของเจ้าไร้ความหมาย",
						"hindi": "देखो। तुम्हारे सारे प्रयास व्यर्थ हैं।"
					}
				},
				{
					"content": {
						"korean": "결국 너도 이 순환의 일부일 뿐.",
						"english": "In the end, you're just a part of this cycle too.",
						"japanese": "結局、お前もこの循環の一部に過ぎない。",
						"chinese": "最终，你也不过是这个循环的一部分。",
						"french": "Après tout, tu n'es qu'une partie de ce cycle.",
						"spanish": "Al final, tú también eres solo una parte de este ciclo.",
						"vietnamese": "Cuối cùng, ngươi cũng chỉ là một phần của vòng lặp này thôi.",
						"thai": "ท้ายที่สุด เจ้าก็เป็นแค่ส่วนหนึ่งของวัฏจักรนี้เท่านั้น",
						"hindi": "आखिर में, तुम भी इस चक्र का एक हिस्सा मात्र हो।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "아니… 난 여기서 끝나지 않아!",
						"english": "No… I won't end here!",
						"japanese": "違う…俺はここで終わらない！",
						"chinese": "不…我不会就此结束！",
						"french": "Non… je ne finirai pas ici !",
						"spanish": "¡No… no terminaré aquí!",
						"vietnamese": "Không… ta sẽ không kết thúc ở đây!",
						"thai": "ไม่…ฉันจะไม่จบลงที่นี่!",
						"hindi": "नहीं… मैं यहीं खत्म नहीं हो सकता!"
					},
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"speaker": "mara",
					"type": "direction"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "절망에 굴하지 마! 아직 기회는 있어!",
						"english": "Don't succumb to despair! There's still a chance!",
						"japanese": "絶望に屈するな！まだチャンスはある！",
						"chinese": "不要屈服于绝望！还有机会！",
						"french": "Ne succombe pas au désespoir ! Il y a encore une chance !",
						"spanish": "¡No sucumbas a la desesperación! ¡Aún hay una oportunidad!",
						"vietnamese": "Đừng khuất phục trước tuyệt vọng! Vẫn còn cơ hội!",
						"thai": "อย่าพ่ายแพ้ต่อความสิ้นหวัง! ยังมีโอกาส!",
						"hindi": "निराशा के आगे मत झुको! अभी भी मौका है!"
					},
					"speaker": "mara"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "감히 이곳까지 왔는가. 어리석은 자.",
						"english": "How dare you come this far, foolish one.",
						"japanese": "よくもここまで来たな。愚か者め。",
						"chinese": "竟敢来到这里。愚蠢之人。",
						"french": "Comment oses-tu venir si loin, insensé.",
						"spanish": "¿Cómo te atreves a llegar tan lejos, insensato?",
						"vietnamese": "Ngươi dám đến tận đây sao, kẻ ngu muội.",
						"thai": "เจ้ากล้ามาถึงที่นี่ได้อย่างไร เจ้าคนโง่",
						"hindi": "तुम इतनी दूर आने की हिम्मत कैसे हुई, मूर्ख।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "모든 진실은 절망만을 가져올 뿐. 이 순환은 영원해.",
						"english": "All truth brings only despair. This cycle is eternal.",
						"japanese": "全ての真実は絶望をもたらすだけだ。この循環は永遠だ。",
						"chinese": "所有真相只会带来绝望。这个循环是永恒的。",
						"french": "Toute vérité n'apporte que désespoir. Ce cycle est éternel.",
						"spanish": "Toda verdad solo trae desesperación. Este ciclo es eterno.",
						"vietnamese": "Mọi sự thật chỉ mang lại tuyệt vọng. Vòng tuần hoàn này là vĩnh cửu.",
						"thai": "ความจริงทั้งหมดนำมาซึ่งความสิ้นหวังเท่านั้น วงจรนี้เป็นนิรันดร์",
						"hindi": "सारी सच्चाई केवल निराशा लाती है। यह चक्र शाश्वत है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "너 따위가 결정할 수 없어!",
						"english": "You can't decide!",
						"japanese": "お前ごときが決めることではない！",
						"chinese": "你这种人不能决定！",
						"french": "Toi, tu ne peux pas décider !",
						"spanish": "¡Tú no puedes decidir!",
						"vietnamese": "Loại người như ngươi không thể quyết định được!",
						"thai": "คนอย่างเจ้าตัดสินไม่ได้หรอก!",
						"hindi": "तुम जैसे लोग तय नहीं कर सकते!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "본질을 거부하는 자. 그 대가를 치러라.",
						"english": "One who denies the essence. Pay the price.",
						"japanese": "本質を拒む者。その代償を払え。",
						"chinese": "拒绝本质之人。付出代价吧。",
						"french": "Celui qui refuse l'essence. Paie le prix.",
						"spanish": "Aquel que niega la esencia. Paga el precio.",
						"vietnamese": "Kẻ chối bỏ bản chất. Hãy trả giá đi.",
						"thai": "ผู้ที่ปฏิเสธแก่นแท้ จงชดใช้ราคา",
						"hindi": "जो सार को अस्वीकार करता है। कीमत चुकाओ।"
					}
				}
			]
		}
	]
} as const;
