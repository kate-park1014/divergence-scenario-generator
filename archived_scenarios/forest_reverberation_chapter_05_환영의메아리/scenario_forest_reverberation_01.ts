export const scenario_forest_reverberation_01 = {
	"scenario_id": "forest_reverberation_01",
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
			"숲은 여전히 푸르렀다. 하지만 마을은 병들었다.",
			"돌아온 이들은 시들어갔고, 알 수 없는 향기에 취했다.",
			"이것이 숲의 저주일까, 아니면 더 깊은 유혹일까.",
			"새로운 시작은, 더 큰 불안과 함께 찾아왔다."
		],
		"english": [
			"The forest remained green, but the village withered.",
			"Those who returned withered, intoxicated by an unknown scent.",
			"Is this the forest's curse, or a deeper temptation?",
			"A new beginning arrived with greater unease."
		],
		"japanese": [
			"森は依然として青々としていた。しかし、村は病んでいた。",
			"戻った者たちはしおれ、未知の香りに酔いしれた。",
			"これが森の呪いか、それとももっと深い誘惑なのか。",
			"新たな始まりは、より大きな不安と共に訪れた。"
		],
		"chinese": [
			"森林依旧郁郁葱葱。然而，村庄却病了。",
			"归来者枯萎了，沉醉于未知的香气。",
			"这是森林的诅咒，还是更深的诱惑？",
			"新的开始伴随着更大的不安。"
		],
		"french": [
			"La forêt restait verte, mais le village dépérissait.",
			"Ceux qui revinrent se flétrissaient, enivrés par un parfum inconnu.",
			"Est-ce la malédiction de la forêt, ou une tentation plus profonde ?",
			"Un nouveau départ survint avec une plus grande inquiétude."
		],
		"spanish": [
			"El bosque seguía verde, pero el pueblo enfermó.",
			"Los que regresaron se marchitaron, embriagados por un aroma desconocido.",
			"¿Es esta la maldición del bosque, o una tentación más profunda?",
			"Un nuevo comienzo llegó con una mayor inquietud."
		],
		"vietnamese": [
			"Rừng vẫn xanh tươi, nhưng làng đã héo tàn.",
			"Những người trở về héo hon, say trong mùi hương bí ẩn.",
			"Đây là lời nguyền của rừng, hay một cám dỗ sâu hơn?",
			"Một khởi đầu mới đến cùng sự bất an lớn hơn."
		],
		"thai": [
			"ป่ายังคงเขียวชอุ่ม แต่หมู่บ้านกลับป่วยไข้",
			"ผู้กลับมาเหี่ยวเฉา มึนเมาด้วยกลิ่นหอมที่ไม่รู้จัก",
			"นี่คือคำสาปของป่า หรือเป็นสิ่งยั่วยวนที่ลึกซึ้งกว่ากันแน่",
			"การเริ่มต้นใหม่มาพร้อมกับความไม่สบายใจที่มากขึ้น"
		],
		"hindi": [
			"जंगल अभी भी हरा-भरा था, लेकिन गाँव बीमार पड़ गया था।",
			"लौटने वाले मुरझा गए, एक अज्ञात सुगंध से मदहोश हो गए थे।",
			"क्या यह जंगल का अभिशाप है, या एक गहरा प्रलोभन?",
			"एक नई शुरुआत अधिक बेचैनी के साथ आई।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "마을은 침묵했다. 활기 넘치던 골목은 병든 기침 소리로 가득했다.",
						"english": "The village fell silent. Lively alleys filled with the sound of sickly coughs.",
						"japanese": "村は沈黙した。活気に満ちた路地は病んだ咳の音で満ちていた。",
						"chinese": "村庄寂静无声。曾经热闹的巷子充满了病态的咳嗽声。",
						"french": "Le village se tut. Les ruelles animées se remplirent du son de toux maladives.",
						"spanish": "El pueblo se quedó en silencio. Los callejones animados se llenaron del sonido de toses enfermizas.",
						"vietnamese": "Làng chìm trong im lặng. Những con hẻm náo nhiệt tràn ngập tiếng ho bệnh tật.",
						"thai": "หมู่บ้านเงียบสงบตรอกซอยที่เคยคึกคักเต็มไปด้วยเสียงไอที่เจ็บป่วย",
						"hindi": "गाँव में सन्नाटा छा गया। जीवंत गलियाँ बीमार खाँसी की आवाज़ से भर गई थीं।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "다들 왜 이러는 거야?",
						"english": "Why is everyone like this?",
						"japanese": "みんな、どうしちゃったの？",
						"chinese": "大家怎么都这样了？",
						"french": "Pourquoi tout le monde est-il ainsi ?",
						"spanish": "¿Por qué están todos así?",
						"vietnamese": "Sao mọi người lại như vậy?",
						"thai": "ทำไมทุกคนถึงเป็นแบบนี้?",
						"hindi": "सब ऐसे क्यों हैं?"
					}
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "bracken",
					"spot": [
						5,
						2
					],
					"action": "enter"
				},
				{
					"speaker": "bracken",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…숲을 떠나온 자들의 병이다.",
						"english": "...It's the sickness of those who left the forest.",
						"japanese": "…森を去った者たちの病だ。",
						"chinese": "……这是离开森林的人的病。",
						"french": "...C'est la maladie de ceux qui ont quitté la forêt.",
						"spanish": "...Es la enfermedad de aquellos que dejaron el bosque.",
						"vietnamese": "...Là bệnh của những người rời rừng.",
						"thai": "...เป็นโรคของผู้ที่จากป่ามา",
						"hindi": "यह उन लोगों की बीमारी है जो जंगल छोड़कर आए थे।"
					}
				},
				{
					"content": {
						"korean": "숲? 그럼 병의 원인이 숲에 있어?",
						"english": "The forest? So the cause of the sickness is in the forest?",
						"japanese": "森？じゃあ、病気の原因は森にあるの？",
						"chinese": "森林？那病因在森林里吗？",
						"french": "La forêt ? Alors la cause de la maladie est dans la forêt ?",
						"spanish": "¿El bosque? ¿Entonces la causa de la enfermedad está en el bosque?",
						"vietnamese": "Rừng? Vậy nguyên nhân của bệnh là ở rừng sao?",
						"thai": "ป่า? งั้นสาเหตุของโรคอยู่ในป่าเหรอ?",
						"hindi": "जंगल? तो बीमारी की जड़ जंगल में है?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "아니, 숲은 아름다웠다. 그곳에서 난 항상… 행복했어.",
						"english": "No, the forest was beautiful. I was always... happy there.",
						"japanese": "いいえ、森は美しかった。そこで私はいつも…幸せだった。",
						"chinese": "不，森林很美。我在那里总是……很幸福。",
						"french": "Non, la forêt était magnifique. J'y étais toujours... heureux.",
						"spanish": "No, el bosque era hermoso. Allí siempre... fui feliz.",
						"vietnamese": "Không, rừng rất đẹp. Ở đó tôi luôn... hạnh phúc.",
						"thai": "ไม่นะ ป่าสวยงาม ที่นั่นฉันมีความสุขเสมอ...",
						"hindi": "नहीं, जंगल खूबसूरत था। वहाँ मैं हमेशा... खुश थी।"
					},
					"type": "speech",
					"speaker": "bracken",
					"emotion": "happy"
				},
				{
					"content": {
						"korean": "하지만 지금은… 다들 힘들어하잖아.",
						"english": "But now... everyone is struggling.",
						"japanese": "でも今は…みんな苦しんでいるじゃないか。",
						"chinese": "但现在……大家都在受苦啊。",
						"french": "Mais maintenant... tout le monde souffre.",
						"spanish": "Pero ahora... todos están sufriendo.",
						"vietnamese": "Nhưng bây giờ... mọi người đều đang khó khăn mà.",
						"thai": "แต่ตอนนี้...ทุกคนลำบากนะ",
						"hindi": "लेकिन अब... हर कोई संघर्ष कर रहा है।"
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "bracken",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "가끔 숲의 꽃 향기가 나는 것 같아. 이곳에서도.",
						"english": "Sometimes I smell the forest flowers, even here.",
						"japanese": "時々、森の花の香りがする。ここでも。",
						"chinese": "有时我闻到森林花朵的香气，即使在这里。",
						"french": "Parfois, je sens les fleurs de la forêt, même ici.",
						"spanish": "A veces huelo las flores del bosque, incluso aquí.",
						"vietnamese": "Đôi khi tôi ngửi thấy mùi hoa rừng, ngay cả ở đây.",
						"thai": "บางครั้งฉันได้กลิ่นดอกไม้ป่า แม้แต่ที่นี่",
						"hindi": "कभी-कभी मुझे जंगल के फूलों की खुशबू आती है, यहाँ भी।"
					}
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "bracken",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "이 병… 숲에서 온 사람들이 공통적으로 겪는 건가요?",
						"english": "This illness... is it common among those from the forest?",
						"japanese": "この病… 森から来た人たちが共通して患っているものなのですか？",
						"chinese": "这种病……是来自森林的人们普遍患有的吗？",
						"french": "Cette maladie... est-elle courante parmi ceux qui viennent de la forêt ?",
						"spanish": "¿Esta enfermedad... es común entre los que vienen del bosque?",
						"vietnamese": "Căn bệnh này... có phải là bệnh chung của những người từ rừng đến không?",
						"thai": "อาการป่วยนี้... เป็นเรื่องปกติในหมู่ผู้ที่มาจากป่าหรือเปล่า?",
						"hindi": "यह बीमारी... क्या यह जंगल से आने वाले लोगों में आम है?"
					}
				},
				{
					"content": {
						"korean": "그래. 숲의 품을 떠난 대가겠지. 그곳에선 아픔이 없었는데.",
						"english": "Yes. It must be the price for leaving the forest's embrace. There, I knew no pain.",
						"japanese": "そうだ。森の懐を離れた代償だろう。そこには痛みがなかったのに。",
						"chinese": "是的。这一定是离开森林怀抱的代价。在那里，我感受不到痛苦。",
						"french": "Oui. Ce doit être le prix à payer pour avoir quitté l'étreinte de la forêt. Là-bas, je ne connaissais aucune douleur.",
						"spanish": "Sí. Debe ser el precio por dejar el abrazo del bosque. Allí, no conocía el dolor.",
						"vietnamese": "Phải. Chắc là cái giá phải trả khi rời khỏi vòng tay của rừng. Ở đó, tôi không biết đến đau khổ.",
						"thai": "ใช่ คงเป็นราคาที่ต้องจ่ายที่ทิ้งอ้อมกอดของป่าไป ที่นั่นฉันไม่รู้จักความเจ็บปวดเลย",
						"hindi": "हाँ। यह जंगल की गोद छोड़ने का मोल होगा। वहाँ, मुझे कोई दर्द नहीं था।"
					},
					"speaker": "bracken",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "하지만 지금은 고통스러워하고 있어요. 그게 진짜 행복이었나요?",
						"english": "But now you're suffering. Was that truly happiness?",
						"japanese": "でも今は苦しんでいる。それが本当の幸せだったのですか？",
						"chinese": "但你现在正在受苦。那真的是幸福吗？",
						"french": "Mais maintenant tu souffres. Était-ce vraiment le bonheur ?",
						"spanish": "Pero ahora estás sufriendo. ¿Eso era realmente felicidad?",
						"vietnamese": "Nhưng bây giờ bạn đang đau khổ. Đó có thực sự là hạnh phúc không?",
						"thai": "แต่ตอนนี้คุณกำลังทรมาน นั่นเป็นความสุขที่แท้จริงหรือเปล่า?",
						"hindi": "लेकिन अब तुम पीड़ित हो। क्या वह सचमुच खुशी थी?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "…모두가 행복했던 환상 속에서 살았다. 난 여전히 그 환영을 그리워한다.",
						"english": "...We lived in an illusion where everyone was happy. I still yearn for that illusion.",
						"japanese": "…皆が幸せだった幻想の中で生きていた。私は今もその幻影を懐かしんでいる。",
						"chinese": "……我们生活在一个每个人都幸福的幻象中。我仍然渴望那个幻象。",
						"french": "...Nous avons vécu dans une illusion où tout le monde était heureux. Je désire toujours cette illusion.",
						"spanish": "...Vivimos en una ilusión donde todos eran felices. Todavía anhelo esa ilusión.",
						"vietnamese": "...Chúng ta đã sống trong một ảo ảnh nơi mọi người đều hạnh phúc. Tôi vẫn khao khát ảo ảnh đó.",
						"thai": "...เรามีชีวิตอยู่ในภาพลวงตาที่ทุกคนมีความสุข ฉันยังคงโหยหาภาพลวงตานั้น",
						"hindi": "...हम एक ऐसे भ्रम में रहते थे जहाँ हर कोई खुश था। मुझे अभी भी उस भ्रम की याद आती है।"
					},
					"speaker": "bracken",
					"emotion": "sad",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "bracken",
					"type": "direction"
				},
				{
					"content": {
						"korean": "숲이 아름답다고만 할 수 없어요. 이 병은 숲과 관련이 분명해.",
						"english": "The forest isn't just beautiful. This illness is clearly connected to it.",
						"japanese": "森が美しいだけだとは言えない。この病は森と明らかに関係している。",
						"chinese": "森林不只是美丽的。这种病显然与它有关。",
						"french": "La forêt n'est pas seulement belle. Cette maladie est clairement liée à elle.",
						"spanish": "El bosque no es solo hermoso. Esta enfermedad está claramente relacionada con él.",
						"vietnamese": "Rừng không chỉ đẹp. Căn bệnh này rõ ràng có liên quan đến nó.",
						"thai": "ป่าไม่ได้มีแค่ความสวยงาม โรคนี้เกี่ยวข้องกับป่าอย่างชัดเจน",
						"hindi": "जंगल सिर्फ सुंदर नहीं है। यह बीमारी स्पष्ट रूप से इससे जुड़ी है।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "그럴 리 없다. 숲은 우리에게 평화를 주었다.",
						"english": "That can't be. The forest gave us peace.",
						"japanese": "そんなはずはない。森は私たちに平和を与えてくれた。",
						"chinese": "不可能。森林给了我们和平。",
						"french": "C'est impossible. La forêt nous a donné la paix.",
						"spanish": "Eso no puede ser. El bosque nos dio paz.",
						"vietnamese": "Không thể nào. Rừng đã mang lại hòa bình cho chúng ta.",
						"thai": "เป็นไปไม่ได้ ป่าให้ความสงบแก่เรา",
						"hindi": "ऐसा नहीं हो सकता। जंगल ने हमें शांति दी।"
					},
					"speaker": "bracken",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "평화? 지금 마을 사람들 좀 봐요. 시들어가고 있어요!",
						"english": "Peace? Look at the villagers now. They're withering away!",
						"japanese": "平和？今の村人たちを見てください。衰弱しています！",
						"chinese": "和平？看看现在的村民。他们正在枯萎！",
						"french": "La paix ? Regardez les villageois maintenant. Ils dépérissent !",
						"spanish": "¿Paz? Miren a los aldeanos ahora. ¡Se están marchitando!",
						"vietnamese": "Hòa bình ư? Hãy nhìn dân làng bây giờ xem. Họ đang héo mòn dần!",
						"thai": "ความสงบเหรอ? ดูชาวบ้านตอนนี้สิ พวกเขากำลังเหี่ยวเฉาลง!",
						"hindi": "शांति? अब ग्रामीणों को देखो। वे मुरझा रहे हैं!"
					}
				},
				{
					"content": {
						"korean": "…현실은 원래 고통스러운 법. 숲이 아니었다면 더 심했을 거다.",
						"english": "...Reality is inherently painful. It would have been worse without the forest.",
						"japanese": "…現実は元々苦しいものだ。森がなければもっとひどかっただろう。",
						"chinese": "……现实本来就是痛苦的。如果不是森林，情况会更糟。",
						"french": "...La réalité est intrinsèquement douloureuse. Cela aurait été pire sans la forêt.",
						"spanish": "...La realidad es intrínsecamente dolorosa. Habría sido peor sin el bosque.",
						"vietnamese": "...Thực tế vốn dĩ đau khổ. Sẽ còn tồi tệ hơn nếu không có rừng.",
						"thai": "...ความเป็นจริงนั้นเจ็บปวดโดยธรรมชาติ หากไม่มีป่าก็คงจะแย่กว่านี้",
						"hindi": "...वास्तविकता स्वाभाविक रूप से दर्दनाक होती है। जंगल के बिना यह और भी बुरा होता।"
					},
					"type": "speech",
					"speaker": "bracken",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "아니요. 뭔가 잘못됐어요. 이 병의 근원을 찾아야 해요.",
						"english": "No. Something is wrong. We need to find the root of this illness.",
						"japanese": "いいえ。何かがおかしい。この病の根源を見つけなければならない。",
						"chinese": "不。有些不对劲。我们需要找到这种病的根源。",
						"french": "Non. Quelque chose ne va pas. Nous devons trouver la racine de cette maladie.",
						"spanish": "No. Algo anda mal. Necesitamos encontrar la raíz de esta enfermedad.",
						"vietnamese": "Không. Có điều gì đó không ổn. Chúng ta cần tìm ra nguồn gốc của căn bệnh này.",
						"thai": "ไม่ มีบางอย่างผิดปกติ เราต้องค้นหารากเหง้าของโรคนี้",
						"hindi": "नहीं। कुछ गलत है। हमें इस बीमारी की जड़ का पता लगाना होगा।"
					},
					"type": "speech",
					"speaker": "character_1",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "bracken",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						2
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "숲으로 가겠어요. 이 병의 진짜 원인을 밝혀낼 거예요.",
						"english": "I'm going to the forest. I'll uncover the true cause of this illness.",
						"japanese": "森へ行きます。この病の本当の原因を突き止めます。",
						"chinese": "我要去森林。我要查明这种疾病的真正原因。",
						"french": "J'irai dans la forêt. Je découvrirai la vraie cause de cette maladie.",
						"spanish": "Iré al bosque. Descubriré la verdadera causa de esta enfermedad.",
						"vietnamese": "Tôi sẽ đi vào rừng. Tôi sẽ tìm ra nguyên nhân thực sự của căn bệnh này.",
						"thai": "ฉันจะไปที่ป่า ฉันจะค้นหาสาเหตุที่แท้จริงของโรคนี้",
						"hindi": "मैं जंगल में जाऊंगा। मैं इस बीमारी का असली कारण पता लगाऊंगा。"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "bracken",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "위험하다. 숲은… 너희가 생각하는 것보다 더 많은 것을 숨기고 있다.",
						"english": "It's dangerous. The forest... hides more than you think.",
						"japanese": "危険だ。森は… お前たちが思うよりも多くのものを隠している。",
						"chinese": "危险。森林… 隐藏着比你们想象的更多。",
						"french": "C'est dangereux. La forêt… cache plus que vous ne l'imaginez.",
						"spanish": "Es peligroso. El bosque… esconde más de lo que creen.",
						"vietnamese": "Nguy hiểm đấy. Rừng… ẩn chứa nhiều điều hơn các ngươi nghĩ.",
						"thai": "อันตรายนะ ป่า… ซ่อนสิ่งต่างๆ ไว้มากกว่าที่พวกเจ้าคิด",
						"hindi": "यह खतरनाक है। जंगल… तुम्हारी सोच से कहीं ज़्यादा छिपाए हुए है।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "피할 수 없어요. 더 이상 마을이 시들게 둘 순 없어.",
						"english": "I can't avoid it. I can't let the village wither any longer.",
						"japanese": "避けられません。これ以上村が枯れていくのを放っておけない。",
						"chinese": "无法避免。我不能再让村庄枯萎下去。",
						"french": "Je ne peux pas l'éviter. Je ne peux plus laisser le village dépérir.",
						"spanish": "No puedo evitarlo. No puedo permitir que el pueblo siga languideciendo.",
						"vietnamese": "Không thể tránh được. Tôi không thể để ngôi làng héo tàn thêm nữa.",
						"thai": "หลีกเลี่ยงไม่ได้ ฉันไม่สามารถปล่อยให้หมู่บ้านเหี่ยวเฉาได้อีกต่อไป",
						"hindi": "इसे टाला नहीं जा सकता। मैं अब गांव को सूखने नहीं दे सकता।"
					}
				},
				{
					"content": {
						"korean": "…그곳에서 영원히 갇힐 수도 있다. 숲의 환영은 달콤하니까.",
						"english": "...You might be trapped there forever. The forest's illusions are sweet.",
						"japanese": "…そこへ永遠に閉じ込められるかもしれない。森の幻影は甘美だからな。",
						"chinese": "……你可能会永远被困在那里。森林的幻象是甜美的。",
						"french": "...Vous pourriez y être piégé pour toujours. Les illusions de la forêt sont douces.",
						"spanish": "...Podrías quedar atrapado allí para siempre. Las ilusiones del bosque son dulces.",
						"vietnamese": "…Ngươi có thể bị mắc kẹt ở đó mãi mãi. Ảo ảnh của rừng rất ngọt ngào.",
						"thai": "…เจ้าอาจติดอยู่ที่นั่นตลอดไป เพราะภาพลวงตาของป่านั้นหอมหวาน",
						"hindi": "…तुम वहां हमेशा के लिए फंस सकते हो। जंगल के भ्रम मीठे होते हैं।"
					},
					"speaker": "bracken",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "각오했어요.",
						"english": "I'm prepared.",
						"japanese": "覚悟しています。",
						"chinese": "我已经做好准备了。",
						"french": "Je suis préparé.",
						"spanish": "Estoy preparado.",
						"vietnamese": "Tôi đã chuẩn bị sẵn sàng.",
						"thai": "ฉันพร้อมแล้ว",
						"hindi": "मैं तैयार हूं।"
					}
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "숲의 경계. 거대한 그림자가 앞을 막아섰다.",
						"english": "The forest's edge. A colossal shadow blocked the way.",
						"japanese": "森の境界。巨大な影が道を阻んだ。",
						"chinese": "森林的边界。一个巨大的影子挡住了去路。",
						"french": "La lisière de la forêt. Une ombre colossale barra le chemin.",
						"spanish": "El límite del bosque. Una sombra colosal bloqueó el camino.",
						"vietnamese": "Ranh giới của rừng. Một cái bóng khổng lồ chặn đường.",
						"thai": "ขอบป่า เงาขนาดมหึมาขวางทางอยู่",
						"hindi": "जंगल का किनारा। एक विशाल छाया ने रास्ता रोक दिया।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "돌아가라. 이곳은 너희가 감히 침범할 곳이 아니다.",
						"english": "Go back. This is not a place you dare trespass.",
						"japanese": "戻れ。ここは貴様らが侵す場所ではない。",
						"chinese": "回去。这里不是你们敢侵犯的地方。",
						"french": "Retournez. Ce n'est pas un endroit où vous osez vous aventurer.",
						"spanish": "Vuelvan. Este no es un lugar que se atrevan a profanar.",
						"vietnamese": "Quay lại. Đây không phải là nơi các ngươi dám xâm phạm.",
						"thai": "กลับไปซะ ที่นี่ไม่ใช่ที่ที่พวกเจ้าจะกล้าล่วงล้ำเข้ามา",
						"hindi": "वापस जाओ। यह वह जगह नहीं है जहाँ तुम अतिक्रमण करने की हिम्मत करो।"
					}
				},
				{
					"content": {
						"korean": "네가 이 병의 원인인가? 왜 마을을 고통스럽게 하는 거야!",
						"english": "Are you the cause of this illness? Why are you tormenting the village!",
						"japanese": "お前がこの病の原因か？なぜ村を苦しめる！",
						"chinese": "你是这种疾病的原因吗？你为什么要折磨村庄！",
						"french": "Êtes-vous la cause de cette maladie ? Pourquoi tourmentez-vous le village !",
						"spanish": "¿Eres la causa de esta enfermedad? ¡Por qué atormentas al pueblo!",
						"vietnamese": "Ngươi là nguyên nhân của căn bệnh này sao? Tại sao ngươi lại hành hạ ngôi làng!",
						"thai": "เจ้าเป็นสาเหตุของโรคนี้หรือเปล่า ทำไมถึงทำให้หมู่บ้านต้องเจ็บปวด!",
						"hindi": "क्या तुम इस बीमारी का कारण हो? तुम गांव को क्यों पीड़ा दे रहे हो!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그들은 스스로 선택했다. 숲의 품을 버린 대가일 뿐.",
						"english": "They chose it themselves. It's merely the price for abandoning the forest's embrace.",
						"japanese": "彼らが自ら選んだことだ。森の懐を捨てた代償に過ぎない。",
						"chinese": "他们是自己选择的。这不过是放弃森林怀抱的代价。",
						"french": "Ils l'ont choisi eux-mêmes. Ce n'est que le prix à payer pour avoir abandonné l'étreinte de la forêt.",
						"spanish": "Ellos lo eligieron. Es simplemente el precio por abandonar el abrazo del bosque.",
						"vietnamese": "Họ đã tự chọn. Đó chỉ là cái giá phải trả cho việc từ bỏ vòng tay của rừng.",
						"thai": "พวกเขาเลือกเอง มันเป็นเพียงค่าตอบแทนสำหรับการทิ้งอ้อมกอดของป่า",
						"hindi": "उन्होंने खुद चुना। यह केवल जंगल के आलिंगन को त्यागने की कीमत है।"
					}
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "어리석은 자들. 너희는 숲의 영원한 그림자 속에서 살게 될 것이다.",
						"english": "Fools. You shall live in the eternal shadow of the forest.",
						"japanese": "愚か者たち。お前たちは森の永遠の影の中で生きることになるだろう。",
						"chinese": "愚蠢的人们。你们将活在森林永恒的阴影中。",
						"french": "Imbéciles. Vous vivrez dans l'ombre éternelle de la forêt.",
						"spanish": "Necios. Viviréis en la sombra eterna del bosque.",
						"vietnamese": "Những kẻ ngu ngốc. Các ngươi sẽ sống mãi trong bóng tối vĩnh cửu của rừng.",
						"thai": "พวกโง่เขลา เจ้าจะอยู่ในเงาอันเป็นนิรันดร์ของป่า",
						"hindi": "मूर्खों। तुम जंगल की शाश्वत छाया में रहोगे।"
					},
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "아니… 아직 끝나지 않았어. 반드시 막을 거야!",
						"english": "No... it's not over yet. I will stop this, no matter what!",
						"japanese": "いや…まだ終わってない。必ず止めてみせる！",
						"chinese": "不…还没有结束。我一定会阻止它！",
						"french": "Non... ce n'est pas encore fini. Je l'arrêterai, coûte que coûte !",
						"spanish": "No... todavía no ha terminado. ¡Lo detendré a toda costa!",
						"vietnamese": "Không... chưa kết thúc. Tôi nhất định sẽ ngăn chặn nó!",
						"thai": "ไม่... มันยังไม่จบ ฉันจะหยุดมันให้ได้!",
						"hindi": "नहीं... अभी खत्म नहीं हुआ है। मैं इसे हर हाल में रोकूंगा!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "sad",
					"content": {
						"korean": "…이것은 시작에 불과하다. 숲의 진정한 갈망은 아직 드러나지 않았다.",
						"english": "...This is merely the beginning. The forest's true yearning has yet to be revealed.",
						"japanese": "…これは始まりに過ぎない。森の真の渇望はまだ現れていない。",
						"chinese": "……这仅仅是开始。森林真正的渴望尚未显现。",
						"french": "...Ce n'est que le début. Le véritable désir de la forêt n'a pas encore été révélé.",
						"spanish": "...Esto es solo el principio. El verdadero anhelo del bosque aún no se ha revelado.",
						"vietnamese": "…Đây chỉ là khởi đầu. Khát vọng thực sự của rừng vẫn chưa được tiết lộ.",
						"thai": "…นี่เป็นเพียงจุดเริ่มต้น ความปรารถนาที่แท้จริงของป่ายังไม่ถูกเปิดเผย",
						"hindi": "…यह तो बस शुरुआत है। जंगल की सच्ची लालसा अभी तक प्रकट नहीं हुई है।"
					}
				},
				{
					"content": {
						"korean": "무슨 소리야? 다 끝났잖아!",
						"english": "What are you talking about? It's over!",
						"japanese": "何を言ってるの？もう終わったじゃない！",
						"chinese": "你说什么？都结束了！",
						"french": "De quoi tu parles ? C'est fini !",
						"spanish": "¿De qué hablas? ¡Ya terminó!",
						"vietnamese": "Cái gì vậy? Xong hết rồi mà!",
						"thai": "พูดอะไรน่ะ? มันจบแล้ว!",
						"hindi": "क्या बात कर रहे हो? सब खत्म हो गया!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "bracken",
					"spot": [
						5,
						2
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "…아직, 끝나지 않았다. 숲은 너희를 놓아주지 않을 것이다.",
						"english": "...It's not over yet. The forest will not let you go.",
						"japanese": "…まだ、終わっていない。森はお前たちを解放しないだろう。",
						"chinese": "…还没结束。森林不会放过你们的。",
						"french": "...Ce n'est pas encore fini. La forêt ne vous laissera pas partir.",
						"spanish": "...Todavía no ha terminado. El bosque no los dejará ir.",
						"vietnamese": "...Chưa, chưa kết thúc. Rừng sẽ không buông tha các ngươi đâu.",
						"thai": "...ยังไม่จบ ป่าจะไม่ปล่อยพวกเจ้าไป",
						"hindi": "...अभी खत्म नहीं हुआ है। जंगल तुम्हें जाने नहीं देगा।"
					},
					"speaker": "bracken",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "승리는 허무했다. 숲은 더 깊은 곳으로 주인공을 이끌었다.",
						"english": "Victory felt hollow. The forest led the protagonist deeper within.",
						"japanese": "勝利は虚しかった。森は主人公をより深い場所へと導いた。",
						"chinese": "胜利是空虚的。森林将主角引向了更深处。",
						"french": "La victoire était vaine. La forêt a mené le protagoniste plus profondément.",
						"spanish": "La victoria fue vana. El bosque llevó al protagonista a lo más profundo.",
						"vietnamese": "Chiến thắng thật vô nghĩa. Rừng đã dẫn dắt nhân vật chính vào sâu hơn.",
						"thai": "ชัยชนะว่างเปล่า ป่านำพานักแสดงหลักไปสู่ที่ลึกกว่า",
						"hindi": "जीत खोखली थी। जंगल नायक को और गहरे खींच ले गया।"
					}
				}
			]
		}
	]
} as const;
