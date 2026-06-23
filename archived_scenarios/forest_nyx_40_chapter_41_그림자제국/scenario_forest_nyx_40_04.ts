export const scenario_forest_nyx_40_04 = {
	"scenario_id": "forest_nyx_40_04",
	"order": 4,
	"act": "rising",
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
	"prologue": {
		"korean": [
			"숲은 병들었다. 기이한 질병이 모든 것을 갉아먹는 그림자.",
			"약초상 엘라는 해답이 고대 문서에 있다고 했다.",
			"진실은 불편했고, 숲의 잔혹한 순환은 계속됐다.",
			"모든 것은 결국, 처음으로 돌아올 뿐."
		],
		"english": [
			"The forest sickens. A strange blight, a shadow gnawing at all.",
			"Ela, the herbalist, said the answer lies in ancient texts.",
			"The truth was unsettling, and the forest's cruel cycle continued.",
			"Everything, in the end, merely returns to the beginning."
		],
		"japanese": [
			"森は病に侵された。奇妙な病が、すべてを蝕む影。",
			"薬草師エラは、答えは古文書にあると言った。",
			"真実は不穏で、森の残酷な循環は続いた。",
			"すべては結局、始まりに戻るだけ。"
		],
		"chinese": [
			"森林病了。一种怪异的疾病，吞噬一切的阴影。",
			"草药师艾拉说，答案藏在古老卷轴中。",
			"真相令人不安，森林的残酷循环仍在继续。",
			"一切终将，回归原点。"
		],
		"french": [
			"La forêt dépérit. Une étrange maladie, une ombre qui ronge tout.",
			"Ela, l'herboriste, disait que la réponse se trouvait dans les textes anciens.",
			"La vérité était dérangeante, et le cycle cruel de la forêt perdurait.",
			"Tout, à la fin, ne fait que retourner au commencement."
		],
		"spanish": [
			"El bosque enferma. Una extraña plaga, una sombra que lo devora todo.",
			"Ela, la herbolaria, dijo que la respuesta estaba en los textos antiguos.",
			"La verdad era inquietante, y el ciclo cruel del bosque continuó.",
			"Todo, al final, simplemente vuelve al principio."
		],
		"vietnamese": [
			"Khu rừng ốm yếu. Một bệnh lạ, một bóng tối gặm nhấm mọi thứ.",
			"Dược sư Ela nói đáp án nằm trong các văn bản cổ.",
			"Sự thật thật đáng lo ngại, và chu kỳ tàn nhẫn của khu rừng vẫn tiếp diễn.",
			"Mọi thứ, cuối cùng, chỉ trở về điểm ban đầu."
		],
		"thai": [
			"ป่าป่วยไข้ โรคร้ายประหลาด เงาที่กัดกินทุกสิ่ง",
			"เอลา หมอยาบอกว่าคำตอบอยู่ในคัมภีร์โบราณ",
			"ความจริงนั้นไม่สบายใจ และวงจรที่โหดร้ายของป่ายังคงดำเนินต่อไป",
			"ทุกสิ่ง ในที่สุดก็กลับคืนสู่จุดเริ่มต้นเท่านั้น"
		],
		"hindi": [
			"वन रुग्ण है। एक विचित्र रोग, एक छाया जो सब कुछ कुतर रही है।",
			"वैद्य एला ने कहा, उत्तर प्राचीन ग्रंथों में निहित है।",
			"सत्य असहज था, और वन का क्रूर चक्र जारी रहा।",
			"सब कुछ, अंततः, बस शुरुआत में लौट आता है।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "숲 깊은 곳, 짙은 약초 향이 감도는 오두막.",
						"english": "Deep in the forest, a hut filled with the strong scent of herbs.",
						"japanese": "森の奥深く、薬草の濃い香りが漂う小屋。",
						"chinese": "森林深处，一间弥漫着浓郁药草香气的小屋。",
						"french": "Au fond de la forêt, une cabane emplie de la forte odeur des herbes.",
						"spanish": "En lo profundo del bosque, una cabaña llena del fuerte aroma a hierbas.",
						"vietnamese": "Sâu trong rừng, một túp lều ngập tràn mùi thảo mộc nồng nặc.",
						"thai": "ลึกเข้าไปในป่า กระท่อมที่เต็มไปด้วยกลิ่นสมุนไพรแรง",
						"hindi": "वन के गहरे में, जड़ी-बूटियों की तीव्र गंध से भरी एक कुटिया।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"speaker": "ela",
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "자네가 소문 듣던 그 탐험가인가?",
						"english": "Are you the explorer I've heard rumors about?",
						"japanese": "お前が噂の探検家か？",
						"chinese": "你就是传闻中的那位探险家吗？",
						"french": "Êtes-vous l'explorateur dont j'ai entendu parler ?",
						"spanish": "¿Eres el explorador del que he oído rumores?",
						"vietnamese": "Ngươi là nhà thám hiểm mà ta đã nghe tin đồn?",
						"thai": "เจ้าคือผู้สำรวจที่ข้าได้ยินข่าวลือหรือ?",
						"hindi": "क्या तुम वही अन्वेषक हो जिसके बारे में मैंने अफवाहें सुनी हैं?"
					},
					"speaker": "ela",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "약초상 엘라를 찾았습니다.",
						"english": "I'm looking for Ela, the herbalist.",
						"japanese": "薬草師エラを探しています。",
						"chinese": "我正在找草药师艾拉。",
						"french": "Je cherche Ela, l'herboriste.",
						"spanish": "Busco a Ela, la herbolaria.",
						"vietnamese": "Tôi đang tìm dược sư Ela.",
						"thai": "ข้ากำลังตามหาเอลา หมอยา",
						"hindi": "मैं वैद्य एला को ढूंढ रहा हूँ।"
					}
				},
				{
					"content": {
						"korean": "숲이 병들고 있어. 치료법을 찾고 있지.",
						"english": "The forest is ailing. I'm searching for a cure.",
						"japanese": "森が病んでいる。治療法を探している。",
						"chinese": "森林正在病变。我正在寻找治疗方法。",
						"french": "La forêt est malade. Je cherche un remède.",
						"spanish": "El bosque está enfermo. Estoy buscando una cura.",
						"vietnamese": "Khu rừng đang bị bệnh. Tôi đang tìm cách chữa trị.",
						"thai": "ป่ากำลังป่วยไข้ ข้ากำลังหาทางรักษา",
						"hindi": "वन रुग्ण है। मैं एक इलाज ढूंढ रहा हूँ।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "ela"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 고대 문서를… 해독해 줄 수 있겠나? 숲의 진실이 담겨 있을지도 몰라.",
						"english": "Can you… decipher these ancient texts? They might hold the forest's truth.",
						"japanese": "この古文書を…解読してくれるか？森の真実が隠されているかもしれない。",
						"chinese": "你能…破译这些古老卷轴吗？它们可能藏着森林的真相。",
						"french": "Pourriez-vous… déchiffrer ces textes anciens ? Ils pourraient contenir la vérité de la forêt.",
						"spanish": "¿Podrías… descifrar estos textos antiguos? Podrían contener la verdad del bosque.",
						"vietnamese": "Ngươi có thể… giải mã những văn bản cổ này không? Chúng có thể chứa đựng sự thật của khu rừng.",
						"thai": "เจ้าช่วย…ถอดรหัสคัมภีร์โบราณเหล่านี้ได้หรือไม่? อาจมีสัจธรรมของป่าซ่อนอยู่",
						"hindi": "क्या तुम… इन प्राचीन ग्रंथों को पढ़ सकते हो? इनमें वन का सत्य छिपा हो सकता है।"
					},
					"speaker": "ela",
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"speaker": "ela",
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "문서를 해독했습니다. 숲의 질병은… 독극물 때문이었습니다.",
						"english": "I've deciphered the texts. The forest's sickness was… due to poison.",
						"japanese": "文書を解読しました。森の病は…毒によるものでした。",
						"chinese": "我已破译卷轴。森林的疾病是…因为毒物。",
						"french": "J'ai déchiffré les textes. La maladie de la forêt était… due à un poison.",
						"spanish": "He descifrado los textos. La enfermedad del bosque era… debido a un veneno.",
						"vietnamese": "Tôi đã giải mã các văn bản. Bệnh của khu rừng là… do chất độc.",
						"thai": "ข้าได้ถอดรหัสคัมภีร์แล้ว อาการป่วยของป่า…เกิดจากพิษ",
						"hindi": "मैंने ग्रंथों को पढ़ लिया है। वन की बीमारी… जहर के कारण थी।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "독극물이라니! 말도 안 돼. 이 숲은 늘 평화로웠어.",
						"english": "Poison? Unbelievable. This forest has always been peaceful.",
						"japanese": "毒物だと！ありえない。この森はいつも平和だったのに。",
						"chinese": "毒药！不可能。这片森林一直都很平静。",
						"french": "Du poison ? C'est absurde. Cette forêt a toujours été paisible.",
						"spanish": "¿Veneno? ¡Imposible! Este bosque siempre ha sido pacífico.",
						"vietnamese": "Thuốc độc ư! Vô lý. Rừng này luôn bình yên mà.",
						"thai": "ยาพิษ! เป็นไปไม่ได้ ป่านี้สงบสุขมาตลอด",
						"hindi": "ज़हर? अविश्वसनीय। यह जंगल हमेशा शांत रहा है।"
					},
					"speaker": "ela",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "문서에는 '닉스의 그림자'라는 구절이 나옵니다.",
						"english": "The document mentions 'Nyx's Shadow'.",
						"japanese": "文書には「ニュクスの影」という記述があります。",
						"chinese": "文件中提到了“尼克斯的影子”。",
						"french": "Le document mentionne \"L'Ombre de Nyx\".",
						"spanish": "El documento menciona \"La Sombra de Nyx\".",
						"vietnamese": "Tài liệu nhắc đến cụm từ 'Bóng tối của Nyx'.",
						"thai": "เอกสารกล่าวถึงวลี 'เงาของ Nyx'",
						"hindi": "दस्तावेज़ में 'निक्स की छाया' वाक्यांश का उल्लेख है।"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "닉스? 그 분이 그럴 리 없어. 잘못 본 게 아닌가?",
						"english": "Nyx? No, not her. Did I misread it?",
						"japanese": "ニュクス？彼女がそんなことをするはずがない。見間違いでは？",
						"chinese": "尼克斯？她不可能那样做。是不是看错了？",
						"french": "Nyx ? Ce n'est pas possible. Me serais-je trompé ?",
						"spanish": "¿Nyx? Ella no haría eso. ¿Lo habré leído mal?",
						"vietnamese": "Nyx ư? Cô ấy không thể làm thế. Tôi có đọc nhầm không?",
						"thai": "Nyx? เธอไม่น่าทำอย่างนั้นนะ ฉันอ่านผิดหรือเปล่า?",
						"hindi": "निक्स? वह ऐसा नहीं कर सकती। क्या मैंने गलत देखा?"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "ela"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"speaker": "ela"
				},
				{
					"type": "speech",
					"content": {
						"korean": "계속 읽어보니, 독극물은 자원 추출 과정에서 유출됐고… 배후에 닉스가 있다고 합니다.",
						"english": "Reading on, the poison leaked during resource extraction... and Nyx is behind it.",
						"japanese": "読み進めると、毒物は資源抽出過程で流出し…背後にニュクスがいると。",
						"chinese": "继续读下去，毒药是在资源开采过程中泄漏的……而且尼克斯是幕后黑手。",
						"french": "En lisant la suite, le poison a fui durant l'extraction des ressources... et Nyx en serait responsable.",
						"spanish": "Siguiendo la lectura, el veneno se filtró durante la extracción de recursos... y Nyx está detrás de esto.",
						"vietnamese": "Đọc tiếp thì thấy, thuốc độc rò rỉ trong quá trình khai thác tài nguyên... và Nyx đứng sau vụ này.",
						"thai": "อ่านต่อไป, สารพิษรั่วไหลระหว่างการสกัดทรัพยากร... และ Nyx อยู่เบื้องหลัง",
						"hindi": "आगे पढ़ने पर, ज़हर संसाधन निष्कर्षण के दौरान लीक हुआ... और निक्स इसके पीछे है।"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "헛소리! 숲의 자원은 늘 공정하게 거래돼왔어.",
						"english": "Nonsense! The forest's resources have always been traded fairly.",
						"japanese": "ばかげてる！森の資源はいつも公正に取引されてきた。",
						"chinese": "胡说！森林的资源一直都公平交易。",
						"french": "Absurde ! Les ressources de la forêt ont toujours été échangées équitablement.",
						"spanish": "¡Tonterías! Los recursos del bosque siempre se han comerciado justamente.",
						"vietnamese": "Vô lý! Tài nguyên rừng luôn được giao dịch công bằng.",
						"thai": "เหลวไหล! ทรัพยากรป่าไม้มีการซื้อขายอย่างเป็นธรรมเสมอมา",
						"hindi": "बकवास! जंगल के संसाधन हमेशा ईमानदारी से व्यापार किए गए हैं।"
					},
					"speaker": "ela",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"speaker": "ela",
					"type": "speech",
					"content": {
						"korean": "닉스 님은 질서를 지키는 분이야! 감히 모욕하지 마!",
						"english": "Lady Nyx maintains order! Don't you dare insult her!",
						"japanese": "ニュクス様は秩序を守る方だ！侮辱するな！",
						"chinese": "尼克斯大人是维护秩序的人！你敢侮辱她！",
						"french": "Dame Nyx maintient l'ordre ! N'osez pas l'insulter !",
						"spanish": "¡Lady Nyx mantiene el orden! ¡No te atrevas a insultarla!",
						"vietnamese": "Nữ thần Nyx là người giữ gìn trật tự! Đừng có lăng mạ cô ấy!",
						"thai": "ท่าน Nyx เป็นผู้รักษาระเบียบ! อย่าได้ดูถูกเธอ!",
						"hindi": "लेडी निक्स व्यवस्था बनाए रखती है! उसकी बेइज्जती करने की हिम्मत मत करो!"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "이건… 숲의 순환일 뿐이야. 모든 병은 자연으로 돌아가는 법.",
						"english": "This is just... the forest's cycle. All sickness returns to nature.",
						"japanese": "これは…森の循環に過ぎない。全ての病は自然に還るものだ。",
						"chinese": "这只是……森林的循环。所有的疾病都会回归自然。",
						"french": "Ce n'est que... le cycle de la forêt. Toute maladie retourne à la nature.",
						"spanish": "Esto es solo... el ciclo del bosque. Toda enfermedad vuelve a la naturaleza.",
						"vietnamese": "Đây chỉ là... vòng tuần hoàn của rừng. Mọi bệnh tật đều trở về với tự nhiên.",
						"thai": "นี่มันก็แค่... วงจรของป่า โรคภัยไข้เจ็บทั้งหมดก็กลับคืนสู่ธรรมชาติ",
						"hindi": "यह बस... जंगल का चक्र है। सभी बीमारियाँ प्रकृति में लौट आती हैं।"
					},
					"speaker": "ela",
					"emotion": "base"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "ela",
					"spot": [
						4,
						3
					]
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "이 문서는 숲의 질병이 순환이 아니라, 닉스가 계획한 파괴라고 말합니다! 증거가 너무 많아요!",
						"english": "This document says the forest's sickness isn't a cycle, but destruction planned by Nyx! There's too much evidence!",
						"japanese": "この文書は、森の病は循環ではなく、ニュクスが計画した破壊だと！証拠が多すぎる！",
						"chinese": "这份文件说，森林的疾病不是循环，而是尼克斯计划的破坏！证据太多了！",
						"french": "Ce document dit que la maladie de la forêt n'est pas un cycle, mais une destruction planifiée par Nyx ! Il y a trop de preuves !",
						"spanish": "¡Este documento dice que la enfermedad del bosque no es un ciclo, sino una destrucción planeada por Nyx! ¡Hay demasiadas pruebas!",
						"vietnamese": "Tài liệu này nói rằng bệnh tật của rừng không phải là một vòng tuần hoàn, mà là sự phá hủy do Nyx lên kế hoạch! Có quá nhiều bằng chứng!",
						"thai": "เอกสารนี้บอกว่าโรคระบาดของป่าไม่ใช่แค่วงจร, แต่เป็นการทำลายล้างที่ Nyx วางแผนไว้! มีหลักฐานมากเกินไป!",
						"hindi": "यह दस्तावेज़ कहता है कि जंगल की बीमारी एक चक्र नहीं, बल्कि निक्स द्वारा नियोजित विनाश है! सबूत बहुत ज़्यादा हैं!"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "ela",
					"content": {
						"korean": "아니! 닉스 님은 숲의 균형을 유지하는 분이야!",
						"english": "No! Lady Nyx is the one who maintains the forest's balance!",
						"japanese": "違う！ニュクス様は森の均衡を保つ方だ！",
						"chinese": "不！尼克斯大人是维护森林平衡的人！",
						"french": "Non ! Dame Nyx est celle qui maintient l'équilibre de la forêt !",
						"spanish": "¡No! ¡Lady Nyx es quien mantiene el equilibrio del bosque!",
						"vietnamese": "Không! Nữ thần Nyx là người duy trì sự cân bằng của rừng!",
						"thai": "ไม่! ท่าน Nyx เป็นผู้รักษาสมดุลของป่า!",
						"hindi": "नहीं! लेडी निक्स वह है जो जंगल का संतुलन बनाए रखती है!"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "진실을 파헤치려 하지 마. 모든 순환은 결국 처음으로 돌아올 뿐이야.",
						"english": "Don't try to uncover the truth. Every cycle simply returns to its beginning.",
						"japanese": "真実を暴こうとするな。全ての循環は結局、最初に戻るだけだ。",
						"chinese": "不要试图揭露真相。所有的循环最终都只是回到起点。",
						"french": "N'essaie pas de découvrir la vérité. Chaque cycle retourne simplement à son début.",
						"spanish": "No intentes descubrir la verdad. Todo ciclo simplemente vuelve a su inicio.",
						"vietnamese": "Đừng cố gắng phanh phui sự thật. Mọi vòng tuần hoàn rồi cũng trở về điểm ban đầu thôi.",
						"thai": "อย่าพยายามเปิดเผยความจริง วงจรทุกอย่างก็แค่กลับไปเริ่มต้นใหม่เท่านั้น",
						"hindi": "सच को उजागर करने की कोशिश मत करो। हर चक्र बस अपनी शुरुआत में लौट आता है।"
					},
					"type": "speech",
					"speaker": "ela",
					"emotion": "sad"
				},
				{
					"speaker": "ela",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "자네도 이 숲의 일부일 뿐. 벗어날 수 없어.",
						"english": "You're just part of this forest. You can't escape.",
						"japanese": "お前もこの森の一部に過ぎない。逃れることはできない。",
						"chinese": "你也不过是这森林的一部分。无法逃脱。",
						"french": "Toi aussi, tu n'es qu'une partie de cette forêt. Tu ne peux pas t'en échapper.",
						"spanish": "Tú también eres solo una parte de este bosque. No puedes escapar.",
						"vietnamese": "Ngươi cũng chỉ là một phần của khu rừng này. Không thể thoát khỏi.",
						"thai": "เจ้าก็เป็นแค่ส่วนหนึ่งของป่านี้เท่านั้น ไม่มีทางหนีรอดไปได้",
						"hindi": "तुम भी इस जंगल का एक हिस्सा हो। बच नहीं सकते।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "벗어날 수 없다고? 그건 네 착각이야!",
						"english": "Can't escape? That's your delusion!",
						"japanese": "逃れられないだと？それはお前の錯覚だ！",
						"chinese": "无法逃脱？那是你的错觉！",
						"french": "Impossible de s'échapper ? C'est ton illusion !",
						"spanish": "Imposible escapar? ¡Esa es tu ilusión!",
						"vietnamese": "Không thể thoát khỏi? Đó là ảo tưởng của ngươi!",
						"thai": "หนีไม่ได้งั้นรึ? นั่นมันความหลงผิดของเจ้า!",
						"hindi": "बच नहीं सकते? वह तुम्हारा भ्रम है!"
					}
				},
				{
					"speaker": "ela",
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "곧 알게 될 거야.",
						"english": "You'll find out soon enough.",
						"japanese": "すぐにわかるさ。",
						"chinese": "你很快就会知道的。",
						"french": "Tu le sauras bien assez tôt.",
						"spanish": "Pronto lo descubrirás.",
						"vietnamese": "Ngươi sẽ sớm biết thôi.",
						"thai": "เจ้าจะได้รู้ในไม่ช้า",
						"hindi": "तुम्हें जल्द ही पता चल जाएगा।"
					}
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이 숲의 잔혹한 순환은, 누구도 깰 수 없어.",
						"english": "This forest's cruel cycle, no one can break it.",
						"japanese": "この森の残酷な循環は、誰も破れない。",
						"chinese": "这片森林残酷的循环，无人能打破。",
						"french": "Le cycle cruel de cette forêt, personne ne peut le briser.",
						"spanish": "Este cruel ciclo del bosque, nadie puede romperlo.",
						"vietnamese": "Vòng tuần hoàn tàn khốc của khu rừng này, không ai có thể phá vỡ.",
						"thai": "วงจรโหดร้ายของป่านี้ ไม่มีใครทำลายได้",
						"hindi": "इस जंगल का क्रूर चक्र, कोई नहीं तोड़ सकता।"
					}
				},
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"speaker": "ela",
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "봤지? 결국 모두 제자리야.",
						"english": "See? In the end, everything returns to its place.",
						"japanese": "見ただろ？結局、みんな元通りさ。",
						"chinese": "看到了吗？最终一切都回到了原点。",
						"french": "Tu vois ? Au final, tout revient à la case départ.",
						"spanish": "¿Lo ves? Al final, todo vuelve a su sitio.",
						"vietnamese": "Thấy chưa? Cuối cùng mọi thứ đều về lại chỗ cũ.",
						"thai": "เห็นไหม? สุดท้ายแล้วทุกคนก็กลับมาที่เดิม",
						"hindi": "देखा? अंत में सब कुछ अपनी जगह पर आ गया।"
					},
					"type": "speech",
					"speaker": "ela",
					"emotion": "happy"
				},
				{
					"content": {
						"korean": "…아직 끝나지 않았어.",
						"english": "...It's not over yet.",
						"japanese": "…まだ終わっていない。",
						"chinese": "…尚未结束。",
						"french": "...Ce n'est pas encore fini.",
						"spanish": "...Todavía no ha terminado.",
						"vietnamese": "...Vẫn chưa kết thúc.",
						"thai": "...ยังไม่จบ",
						"hindi": "…अभी ख़त्म नहीं हुआ है।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "…크게 달라질 건 없어. 순환은 계속될 테니…",
						"english": "...Nothing much will change. The cycle will continue...",
						"japanese": "…大きく変わることはない。循環は続くだろうからな…",
						"chinese": "……不会有什么太大改变。循环仍将继续……",
						"french": "...Rien ne changera vraiment. Le cycle continuera...",
						"spanish": "...No cambiará mucho. El ciclo continuará...",
						"vietnamese": "...Sẽ không có gì thay đổi lớn. Vòng tuần hoàn sẽ tiếp tục...",
						"thai": "...จะไม่มีอะไรเปลี่ยนแปลงมากนัก วัฏจักรจะยังคงดำเนินต่อไป...",
						"hindi": "...कुछ खास नहीं बदलेगा। चक्र चलता रहेगा..."
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아니, 이번엔 다를 거야.",
						"english": "No, this time it will be different.",
						"japanese": "いや、今回は違う。",
						"chinese": "不，这次会不同。",
						"french": "Non, cette fois, ce sera différent.",
						"spanish": "No, esta vez será diferente.",
						"vietnamese": "Không, lần này sẽ khác.",
						"thai": "ไม่สิ ครั้งนี้จะไม่เหมือนเดิม",
						"hindi": "नहीं, इस बार अलग होगा।"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그림자 중개자의 질서는 견고했다. 그러나 작은 균열이 시작되었다.",
						"english": "The Shadow Broker's order was solid. But a small crack began to form.",
						"japanese": "影の仲介者の秩序は強固だった。しかし、小さな亀裂が始まりつつあった。",
						"chinese": "影之掮客的秩序曾坚不可摧。然而，一丝裂痕已然浮现。",
						"french": "L'ordre du Courtier de l'Ombre était solide. Mais une petite fissure commençait à apparaître.",
						"spanish": "El orden del Corredor de las Sombras era firme. Pero una pequeña grieta empezó a abrirse.",
						"vietnamese": "Trật tự của Kẻ Môi Giới Bóng Đêm đã vững chắc. Nhưng một vết nứt nhỏ đã bắt đầu.",
						"thai": "ระเบียบของคนกลางแห่งเงายืนหยัดอย่างมั่นคง แต่รอยร้าวเล็กๆ ได้เริ่มขึ้นแล้ว",
						"hindi": "शैडो ब्रोकर का आदेश दृढ़ था। लेकिन एक छोटी-सी दरार पड़ने लगी थी।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "숲의 잔혹한 순환은 잠시 멈춘 듯했지만… 아직 끝이 아니었다.",
						"english": "The forest's cruel cycle seemed to pause... but it wasn't over yet.",
						"japanese": "森の残酷な循環は一時停止したかに見えたが…まだ終わりではなかった。",
						"chinese": "森林残酷的循环似乎暂时停滞…但一切尚未结束。",
						"french": "Le cycle cruel de la forêt semblait s'être arrêté un instant… mais ce n'était pas encore la fin.",
						"spanish": "El cruel ciclo del bosque pareció detenerse por un momento… pero aún no había terminado.",
						"vietnamese": "Vòng tuần hoàn tàn khốc của khu rừng dường như đã tạm dừng… nhưng vẫn chưa kết thúc.",
						"thai": "วงจรโหดร้ายของป่าดูเหมือนจะหยุดชั่วคราว...แต่ยังไม่จบ",
						"hindi": "जंगल का क्रूर चक्र थम सा गया था… लेकिन यह अभी ख़त्म नहीं हुआ था।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"speaker": "ela",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "어리석은 자여. 여기까지 왔다고 착각하지 마.",
						"english": "Fool. Don't delude yourself into thinking you've made it this far.",
						"japanese": "愚か者め。ここまで来たなどと錯覚するな。",
						"chinese": "愚蠢的家伙。别以为你已经走到这里了。",
						"french": "Imbécile. Ne te fais pas d'illusions en pensant que tu es arrivé si loin.",
						"spanish": "Necio. No te engañes pensando que has llegado tan lejos.",
						"vietnamese": "Kẻ ngu ngốc. Đừng lầm tưởng ngươi đã đi được đến đây.",
						"thai": "คนโง่เง่า อย่าหลงคิดว่าเจ้ามาได้ไกลขนาดนี้",
						"hindi": "मूर्ख। यह मत सोचना कि तुम यहाँ तक पहुँच गए हो।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "ela"
				},
				{
					"emotion": "base",
					"speaker": "ela",
					"type": "speech",
					"content": {
						"korean": "너도 결국 이 순환의 먹잇감이 될 뿐이다.",
						"english": "You, too, will ultimately become prey to this cycle.",
						"japanese": "お前も結局、この循環の餌食になるだけだ。",
						"chinese": "你最终也只会成为这个循环的猎物。",
						"french": "Toi aussi, tu finiras par devenir la proie de ce cycle.",
						"spanish": "Tú también, al final, te convertirás en presa de este ciclo.",
						"vietnamese": "Ngươi rồi cũng sẽ chỉ là con mồi của vòng tuần hoàn này thôi.",
						"thai": "ในที่สุด เจ้าก็จะกลายเป็นเหยื่อของวัฏจักรนี้เช่นกัน",
						"hindi": "तुम भी अंततः इस चक्र का शिकार बनोगे।"
					}
				},
				{
					"content": {
						"korean": "…새로운 희생양이군.",
						"english": "...A new sacrifice.",
						"japanese": "…新たな犠牲者か。",
						"chinese": "……新的牺牲品。",
						"french": "...Un nouveau sacrifice.",
						"spanish": "...Un nuevo sacrificio.",
						"vietnamese": "...Một vật hiến tế mới.",
						"thai": "...เหยื่อรายใหม่สินะ",
						"hindi": "...एक नया बलिदान।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "무의미한 저항은, 무의미한 고통을 낳을 뿐.",
						"english": "Meaningless resistance only brings meaningless suffering.",
						"japanese": "無意味な抵抗は、無意味な苦痛を生むだけだ。",
						"chinese": "毫无意义的抵抗，只会带来毫无意义的痛苦。",
						"french": "Une résistance inutile n'engendre que des souffrances inutiles.",
						"spanish": "La resistencia inútil solo engendra sufrimiento inútil.",
						"vietnamese": "Sự kháng cự vô nghĩa, chỉ sinh ra đau khổ vô nghĩa mà thôi.",
						"thai": "การต่อต้านที่ไร้ความหมาย มีแต่จะนำมาซึ่งความเจ็บปวดที่ไร้ความหมายเท่านั้น",
						"hindi": "व्यर्थ का प्रतिरोध, व्यर्थ का कष्ट ही देगा।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "난 이 순환을 끝낼 거야!",
						"english": "I'll end this cycle!",
						"japanese": "俺はこの循環を終わらせる！",
						"chinese": "我将终结这个循环！",
						"french": "Je vais mettre fin à ce cycle !",
						"spanish": "¡Voy a poner fin a este ciclo!",
						"vietnamese": "Ta sẽ kết thúc vòng tuần hoàn này!",
						"thai": "ข้าจะหยุดวัฏจักรนี้!",
						"hindi": "मैं इस चक्र को समाप्त करूँगा!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "어디 한번 해 봐. 결국 너도, 그들과 똑같은 곳으로 돌아올 테니.",
						"english": "Go on, try. In the end, you too will return to the same place as them.",
						"japanese": "やってみるがいい。結局お前も、彼らと同じ場所に戻ってくるのだからな。",
						"chinese": "尽管去试试看吧。最终你也会和他们一样，回到同一个地方。",
						"french": "Vas-y, essaie. Au final, toi aussi tu reviendras au même endroit qu'eux.",
						"spanish": "Adelante, inténtalo. Al final, tú también volverás al mismo lugar que ellos.",
						"vietnamese": "Cứ thử đi. Cuối cùng, ngươi cũng sẽ trở về cùng một nơi với bọn chúng thôi.",
						"thai": "ลองดูสิ ในที่สุด เจ้าก็จะกลับมายังที่เดียวกับพวกเขา",
						"hindi": "कोशिश करो। अंततः, तुम भी उन्हीं की तरह उसी जगह लौट आओगे।"
					},
					"type": "speech",
					"emotion": "happy",
					"speaker": "ela"
				},
				{
					"type": "direction",
					"speaker": "ela",
					"action": "exit",
					"duration_ms": 400
				}
			]
		}
	]
} as const;
