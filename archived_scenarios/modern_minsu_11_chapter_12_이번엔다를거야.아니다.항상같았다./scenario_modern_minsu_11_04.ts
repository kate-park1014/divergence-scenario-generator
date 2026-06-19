export const scenario_modern_minsu_11_04 = {
	"scenario_id": "modern_minsu_11_04",
	"order": 4,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"lin": {
			"id": "mon_d036a884-3dde-472c-9fe7-c4807643860f",
			"name": {
				"korean": "린",
				"english": "Lin",
				"japanese": "リン",
				"chinese": "琳",
				"french": "Lin",
				"spanish": "Lin",
				"vietnamese": "Lin",
				"thai": "ลิน",
				"hindi": "लिन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a095dd66-1857-4f44-68b0-2ece83006d00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/05b02694-f1ed-4e4c-b7ca-fb5b74a48900/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"아름다운 기억들이 서서히 그 실체를 드러냈다.",
			"행복했던 순간들 속에 숨겨진 뒤틀린 의도.",
			"기억 관리자는 단순한 수집가가 아니었다.",
			"그는, 모든 것을 조작하는 그림자였다."
		],
		"english": [
			"Beautiful memories slowly revealed their true nature.",
			"A twisted intention hidden within happy moments.",
			"The Memory Keeper was not just a collector.",
			"He was the shadow manipulating everything."
		],
		"japanese": [
			"美しい記憶がゆっくりと真の姿を現した。",
			"幸せな瞬間の中に隠された歪んだ意図。",
			"記憶の管理者は単なる収集家ではなかった。",
			"彼はすべてを操る影だった。"
		],
		"chinese": [
			"美丽的记忆逐渐显露出它们的真面目。",
			"隐藏在幸福瞬间中的扭曲意图。",
			"记忆管理员不只是一个收藏家。",
			"他是操纵一切的影子。"
		],
		"french": [
			"De beaux souvenirs ont lentement révélé leur véritable nature.",
			"Une intention tordue cachée dans des moments heureux.",
			"Le Gardien de la Mémoire n'était pas qu'un simple collectionneur.",
			"Il était l'ombre qui manipulait tout."
		],
		"spanish": [
			"Hermosos recuerdos revelaron lentamente su verdadera naturaleza.",
			"Una intención retorcida oculta en momentos felices.",
			"El Guardián de la Memoria no era solo un coleccionista.",
			"Él era la sombra que manipulaba todo."
		],
		"vietnamese": [
			"Những ký ức đẹp đẽ dần hé lộ bản chất thật của chúng.",
			"Một ý định vặn vẹo ẩn giấu trong những khoảnh khắc hạnh phúc.",
			"Người Giữ Ký Ức không chỉ là một nhà sưu tập.",
			"Hắn là bóng tối thao túng mọi thứ."
		],
		"thai": [
			"ความทรงจำที่สวยงามค่อยๆ เผยให้เห็นตัวตนที่แท้จริงของพวกมัน",
			"ความตั้งใจที่บิดเบี้ยวซ่อนอยู่ในช่วงเวลาแห่งความสุข",
			"ผู้ดูแลความทรงจำไม่ใช่แค่ผู้รวบรวม",
			"เขาคือเงาที่บงการทุกสิ่ง"
		],
		"hindi": [
			"सुंदर यादें धीरे-धीरे अपनी असली प्रकृति को प्रकट कर रही थीं।",
			"सुखद पलों में छिपा एक विकृत इरादा।",
			"स्मृति रक्षक सिर्फ एक संग्राहक नहीं था।",
			"वह सब कुछ हेरफेर करने वाली छाया था।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"type": "direction",
					"speaker": "lin"
				},
				{
					"content": {
						"korean": "찾았어요. 이 모든 게 단순한 기억이 아니에요.",
						"english": "I found it. This isn't just a memory.",
						"japanese": "見つけました。これは単なる記憶ではありません。",
						"chinese": "我找到了。这不只是一个简单的记忆。",
						"french": "Je l'ai trouvé. Ce n'est pas qu'un simple souvenir.",
						"spanish": "Lo encontré. Esto no es solo un recuerdo.",
						"vietnamese": "Tôi tìm thấy rồi. Đây không chỉ là một ký ức.",
						"thai": "ฉันเจอแล้ว นี่ไม่ใช่แค่ความทรงจำ",
						"hindi": "मैंने इसे ढूँढ़ लिया। यह सिर्फ एक स्मृति नहीं है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "lin"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "무슨 소리야, 린?",
						"english": "What are you talking about, Rin?",
						"japanese": "どういうこと、リン？",
						"chinese": "你在说什么，琳？",
						"french": "De quoi parles-tu, Rin ?",
						"spanish": "¿De qué estás hablando, Rin?",
						"vietnamese": "Cậu nói gì vậy, Rin?",
						"thai": "นายกำลังพูดถึงอะไร ริน?",
						"hindi": "तुम क्या कह रही हो, रिन?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "기억 관리자는… 우리 안의 그림자를 보고 있어요.",
						"english": "The Memory Keeper... he's seeing the shadows within us.",
						"japanese": "記憶の管理者は…私たちの中の影を見ているんです。",
						"chinese": "记忆管理员…他正在看着我们内心的阴影。",
						"french": "Le Gardien de la Mémoire... il voit les ombres en nous.",
						"spanish": "El Guardián de la Memoria... está viendo las sombras dentro de nosotros.",
						"vietnamese": "Người Giữ Ký Ức... hắn đang nhìn thấy bóng tối bên trong chúng ta.",
						"thai": "ผู้ดูแลความทรงจำ... เขากำลังเห็นเงาในตัวเรา",
						"hindi": "स्मृति रक्षक... वह हमारे अंदर की परछाइयों को देख रहा है।"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "lin",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "행복했던 기억들… 그게 함정이었어요.",
						"english": "Happy memories... they were a trap.",
						"japanese": "幸せな記憶…それが罠だったんです。",
						"chinese": "那些幸福的记忆…那是个陷阱。",
						"french": "Les souvenirs heureux... c'était un piège.",
						"spanish": "Los recuerdos felices... eran una trampa.",
						"vietnamese": "Những ký ức hạnh phúc... chúng là một cái bẫy.",
						"thai": "ความทรงจำที่มีความสุข... มันเป็นกับดัก",
						"hindi": "सुखद यादें... वे एक जाल थीं।"
					},
					"emotion": "sad",
					"speaker": "lin",
					"type": "speech"
				},
				{
					"content": {
						"korean": "말도 안 돼… 그게 어떻게?",
						"english": "No way... How could that be?",
						"japanese": "まさか…どうして？",
						"chinese": "不可能…那怎么会？",
						"french": "Impossible... Comment est-ce possible ?",
						"spanish": "No puede ser... ¿Cómo es posible?",
						"vietnamese": "Không thể nào... Sao có thể?",
						"thai": "เป็นไปไม่ได้... นั่นมันได้อย่างไร?",
						"hindi": "नहीं... ऐसा कैसे हो सकता है?"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "가장 깊은 불안과 갈등을 모방하고 있어요. 그래서 환상이 더 강해지는 거예요.",
						"english": "It's mimicking our deepest anxieties and conflicts. That's why the illusions are growing stronger.",
						"japanese": "最も深い不安と葛藤を模倣しています。だから幻影が強くなるんです。",
						"chinese": "它正在模仿我们最深的焦虑和冲突。这就是为什么幻象变得更强的原因。",
						"french": "Il imite nos angoisses et nos conflits les plus profonds. C'est pourquoi les illusions deviennent plus fortes.",
						"spanish": "Está imitando nuestras ansiedades y conflictos más profundos. Por eso las ilusiones se están volviendo más fuertes.",
						"vietnamese": "Nó đang bắt chước những lo âu và xung đột sâu sắc nhất của chúng ta. Đó là lý do tại sao ảo ảnh trở nên mạnh mẽ hơn.",
						"thai": "มันกำลังเลียนแบบความวิตกกังวลและความขัดแย้งที่ลึกที่สุดของเรา นั่นคือเหตุผลที่ภาพลวงตาแข็งแกร่งขึ้น",
						"hindi": "यह हमारी सबसे गहरी चिंताओं और संघर्षों की नकल कर रहा है। इसलिए भ्रम मजबूत होते जा रहे हैं।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "lin",
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						1
					],
					"duration_ms": 500
				},
				{
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "카이 씨의 죄책감, 맥스 씨의 상실감… 전부 이용당했어요.",
						"english": "Mr. Kai's guilt, Mr. Max's loss... it was all exploited.",
						"japanese": "カイさんの罪悪感、マックスさんの喪失感…全て利用されていました。",
						"chinese": "凯先生的负罪感，麦克斯先生的失落感……全都被利用了。",
						"french": "La culpabilité de M. Kai, la perte de M. Max... tout a été exploité.",
						"spanish": "La culpa del Sr. Kai, la pérdida del Sr. Max... todo fue manipulado.",
						"vietnamese": "Cảm giác tội lỗi của Kai, sự mất mát của Max... tất cả đã bị lợi dụng.",
						"thai": "ความรู้สึกผิดของคุณไค ความรู้สึกสูญเสียของคุณแม็กซ์... ทั้งหมดถูกใช้ประโยชน์",
						"hindi": "काई की अपराध-बोध, मैक्स का नुकसान... सबका इस्तेमाल किया गया।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "그럼 우리가 겪은 고통도…",
						"english": "So the pain we've endured...",
						"japanese": "じゃあ、私たちが経験した苦痛も…",
						"chinese": "那么我们所承受的痛苦也……",
						"french": "Alors la douleur que nous avons endurée...",
						"spanish": "Entonces el sufrimiento que hemos soportado...",
						"vietnamese": "Vậy nỗi đau chúng ta đã trải qua cũng...",
						"thai": "งั้นความเจ็บปวดที่เราทนมาก็...",
						"hindi": "तो हमारा दर्द भी..."
					}
				},
				{
					"speaker": "lin",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "네. 관리자는 보관자가 아니에요. 조작자죠.",
						"english": "Yes. The Administrator isn't a keeper. They're a manipulator.",
						"japanese": "ええ。管理者は保管者じゃない。操作者よ。",
						"chinese": "是的。管理者不是保管者，而是操纵者。",
						"french": "Oui. L'Administrateur n'est pas un gardien. C'est un manipulateur.",
						"spanish": "Sí. El Administrador no es un guardián. Es un manipulador.",
						"vietnamese": "Đúng vậy. Người quản lý không phải là người giữ, mà là kẻ thao túng.",
						"thai": "ใช่ ผู้ดูแลไม่ใช่ผู้พิทักษ์ เขาคือผู้บงการ",
						"hindi": "हाँ। प्रबंधक संरक्षक नहीं है। वह एक manipulator है।"
					}
				},
				{
					"content": {
						"korean": "충격적이야.",
						"english": "Shocking.",
						"japanese": "衝撃的だわ。",
						"chinese": "太令人震惊了。",
						"french": "C'est choquant.",
						"spanish": "Es impactante.",
						"vietnamese": "Thật sốc.",
						"thai": "น่าตกใจมาก",
						"hindi": "चौंकाने वाला।"
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						1,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "lin"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"emotion": "base",
					"content": {
						"korean": "이 환상에서 벗어나려면… 우리 안의 조작된 그림자를 깨야 해요.",
						"english": "To escape this illusion... we must break the manipulated shadow within us.",
						"japanese": "この幻想から抜け出すには…私たちの中にある操作された影を打ち破らなければならない。",
						"chinese": "要摆脱这个幻象……我们必须打破内心被操纵的阴影。",
						"french": "Pour échapper à cette illusion... nous devons briser l'ombre manipulée en nous.",
						"spanish": "Para escapar de esta ilusión... debemos romper la sombra manipulada dentro de nosotros.",
						"vietnamese": "Để thoát khỏi ảo ảnh này... chúng ta phải phá vỡ bóng tối bị thao túng bên trong mình.",
						"thai": "เพื่อหลุดพ้นจากภาพลวงตานี้... เราต้องทำลายเงาที่ถูกบงการภายในตัวเรา",
						"hindi": "इस भ्रम से निकलने के लिए... हमें अपने अंदर की manipulada छाया को तोड़ना होगा।"
					}
				},
				{
					"content": {
						"korean": "어떻게? 이 미로 같은 곳에서.",
						"english": "How? In this labyrinthine place.",
						"japanese": "どうやって？この迷路のような場所で。",
						"chinese": "怎么做？在这个迷宫般的地方。",
						"french": "Comment ? Dans ce lieu labyrinthique.",
						"spanish": "¿Cómo? En este lugar laberíntico.",
						"vietnamese": "Bằng cách nào? Ở nơi như mê cung này.",
						"thai": "ทำยังไง? ในสถานที่เหมือนเขาวงกตนี้",
						"hindi": "कैसे? इस भूलभुलैया जैसी जगह में।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"emotion": "happy",
					"content": {
						"korean": "관리자는 우리와 똑같이 생각하고 반응해요. 그게 약점이에요.",
						"english": "The Administrator thinks and reacts just like us. That's their weakness.",
						"japanese": "管理者は私たちと同じように考え、反応する。それが弱点よ。",
						"chinese": "管理者和我们一样思考和反应。那就是他们的弱点。",
						"french": "L'Administrateur pense et réagit comme nous. C'est sa faiblesse.",
						"spanish": "El Administrador piensa y reacciona igual que nosotros. Esa es su debilidad.",
						"vietnamese": "Người quản lý suy nghĩ và phản ứng giống hệt chúng ta. Đó là điểm yếu của họ.",
						"thai": "ผู้ดูแลคิดและตอบสนองเหมือนเรา นั่นคือจุดอ่อนของพวกเขา",
						"hindi": "प्रबंधक हमारे जैसे ही सोचता और प्रतिक्रिया करता है। यही उसकी कमजोरी है।"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "믿을 수 없어…",
						"english": "I can't believe it...",
						"japanese": "信じられない…",
						"chinese": "难以置信……",
						"french": "C'est incroyable...",
						"spanish": "No puedo creerlo...",
						"vietnamese": "Không thể tin được...",
						"thai": "ไม่อยากจะเชื่อเลย...",
						"hindi": "विश्वास नहीं कर सकता..."
					},
					"type": "speech",
					"speaker": "character_any"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"emotion": "sad",
					"content": {
						"korean": "하… 하지만… 반복될 뿐이야… 너희는… 다시 돌아올 거야…",
						"english": "Hmph... But... it will just repeat... You'll... come back again...",
						"japanese": "は… しかし… 繰り返されるだけだ… お前たちは… また戻ってくるだろう…",
						"chinese": "哼……但是……这只会重演……你们……还会再回来……",
						"french": "Hmph... Mais... ça ne fera que se répéter... Vous... reviendrez encore...",
						"spanish": "Hmph... Pero... solo se repetirá... Volveréis... otra vez...",
						"vietnamese": "Hừm... Nhưng... nó sẽ chỉ lặp lại... Các ngươi... sẽ quay lại lần nữa...",
						"thai": "หึ... แต่... มันจะซ้ำรอยเดิม... พวกเจ้าจะ... กลับมาอีกครั้ง...",
						"hindi": "हम्म... लेकिन... यह बस दोहराया जाएगा... तुम... फिर से वापस आओगे..."
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "이제 아니야. 우린 진실을 알았으니까.",
						"english": "Not anymore. We know the truth now.",
						"japanese": "もう違う。私たちは真実を知ったから。",
						"chinese": "不再是了。我们现在知道了真相。",
						"french": "Plus maintenant. Nous connaissons la vérité maintenant.",
						"spanish": "Ya no. Ahora sabemos la verdad.",
						"vietnamese": "Không còn nữa. Chúng tôi đã biết sự thật rồi.",
						"thai": "ไม่ใช่แล้ว ตอนนี้เรารู้ความจริงแล้ว",
						"hindi": "अब और नहीं। हम अब सच्चाई जानते हैं।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"spot": [
						2,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "lin"
				},
				{
					"emotion": "happy",
					"content": {
						"korean": "우린 더 이상 속지 않아요. 이제 진짜를 찾을 때예요.",
						"english": "We won't be deceived anymore. It's time to find the real thing.",
						"japanese": "私たちはもう騙されない。今こそ本物を見つける時よ。",
						"chinese": "我们不再被欺骗了。是时候寻找真正的了。",
						"french": "Nous ne serons plus trompés. Il est temps de trouver la vérité.",
						"spanish": "Ya no nos engañarán. Es hora de encontrar lo real.",
						"vietnamese": "Chúng tôi sẽ không bị lừa dối nữa. Đã đến lúc tìm kiếm điều thật sự.",
						"thai": "เราจะไม่ถูกหลอกอีกต่อไป ถึงเวลาตามหาสิ่งที่เป็นจริงแล้ว",
						"hindi": "हमें अब और धोखा नहीं दिया जाएगा। अब असली चीज़ खोजने का समय है।"
					},
					"type": "speech",
					"speaker": "lin"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "환상의 조작은 끝났다. 그러나 진정한 관리자는 아직 모습을 드러내지 않았다.",
						"english": "The manipulation of illusion is over. But the true Administrator has yet to reveal themselves.",
						"japanese": "幻想の操作は終わった。しかし、真の管理者はまだ姿を現していない。",
						"chinese": "幻象的操纵结束了。但真正的管理员尚未现身。",
						"french": "La manipulation de l'illusion est terminée. Mais le véritable Administrateur ne s'est pas encore révélé.",
						"spanish": "La manipulación de la ilusión ha terminado. Pero el verdadero Administrador aún no se ha revelado.",
						"vietnamese": "Sự thao túng của ảo ảnh đã kết thúc. Nhưng Người quản lý thật sự vẫn chưa lộ diện.",
						"thai": "การบงการภาพลวงตาได้สิ้นสุดลงแล้ว แต่ผู้ดูแลที่แท้จริงยังไม่ปรากฏตัว",
						"hindi": "भ्रम का हेरफेर खत्म हो गया है। लेकिन असली व्यवस्थापक ने अभी तक खुद को प्रकट नहीं किया है।"
					}
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "봐… 결국 똑같지? 너희는 절대 벗어날 수 없어.",
						"english": "See...? It's the same in the end, isn't it? You can never escape.",
						"japanese": "ほら… 結局同じだろう？ お前たちは決して逃れられない。",
						"chinese": "看……最终还不是一样？你们永远也无法逃脱。",
						"french": "Tu vois... C'est la même chose au final, n'est-ce pas ? Vous ne pourrez jamais vous échapper.",
						"spanish": "Mira... Al final es lo mismo, ¿verdad? Nunca podréis escapar.",
						"vietnamese": "Thấy không...? Cuối cùng vẫn vậy thôi, phải không? Các ngươi không bao giờ thoát được.",
						"thai": "เห็นไหม... สุดท้ายก็เหมือนเดิมไม่ใช่เหรอ? พวกเจ้าไม่มีวันหนีพ้นหรอก",
						"hindi": "देखो... आखिरकार यह वही है, है ना? तुम कभी बच नहीं सकते।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "아니… 달라. 다음엔 반드시 널 부숴버릴 거야.",
						"english": "No... it's different. Next time, I'll definitely shatter you.",
						"japanese": "違う… 違うわ。次こそは必ずお前を打ち砕く。",
						"chinese": "不……不一样。下次，我一定会把你击碎。",
						"french": "Non... c'est différent. La prochaine fois, je te briserai à coup sûr.",
						"spanish": "No... es diferente. La próxima vez, te destrozaré sin falta.",
						"vietnamese": "Không... khác rồi. Lần tới, tôi nhất định sẽ đập tan ngươi.",
						"thai": "ไม่... มันต่างกัน ครั้งหน้าฉันจะทำลายนายให้สิ้นซากเลย",
						"hindi": "नहीं... यह अलग है। अगली बार, मैं तुम्हें निश्चित रूप से तोड़ दूंगा।"
					},
					"emotion": "angry"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "이제야 알았나? 모든 건 너희 안에서 시작돼.",
						"english": "Do you understand now? Everything starts within you.",
						"japanese": "今頃分かったか？全てはお前たちの中で始まる。",
						"chinese": "现在才明白吗？一切都源于你们内心。",
						"french": "Vous comprenez enfin ? Tout commence en vous.",
						"spanish": "¿Lo entiendes ahora? Todo comienza dentro de vosotros.",
						"vietnamese": "Bây giờ mới hiểu sao? Mọi thứ đều bắt đầu từ bên trong các ngươi.",
						"thai": "เพิ่งจะรู้หรือ? ทุกอย่างเริ่มต้นจากข้างในตัวพวกเจ้า",
						"hindi": "अब समझे? सब कुछ तुम्हारे भीतर से शुरू होता है।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이… 이 괴물이 관리자의 환상이라는 거야?",
						"english": "This... this monster is the Administrator's illusion?",
						"japanese": "こ…この怪物が管理者の幻想だって？",
						"chinese": "这……这怪物是管理者的幻象吗？",
						"french": "Ce... ce monstre est l'illusion de l'Administrateur ?",
						"spanish": "¿Este... este monstruo es la ilusión del Administrador?",
						"vietnamese": "Con quái vật này... là ảo ảnh của Người quản lý sao?",
						"thai": "สัตว์ประหลาดตัวนี้... คือภาพลวงตาของผู้ดูแลเหรอ?",
						"hindi": "यह... यह राक्षस प्रबंधक का भ्रम है?"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"action": "enter",
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"speaker": "lin",
					"type": "direction"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "아니요. 이건 관리자가 만들어낸 환상이에요. 우리 안의 갈등이 만든…",
						"english": "No. This is an illusion created by the Administrator. Born from the conflict within us...",
						"japanese": "いいえ。これは管理者が作り出した幻想です。私たちの中の葛藤が生み出した…",
						"chinese": "不。这是管理员制造的幻象。源于我们内心的冲突…",
						"french": "Non. C'est une illusion créée par l'Administrateur. Née du conflit en nous...",
						"spanish": "No. Esto es una ilusión creada por el Administrador. Nacida del conflicto en nosotros...",
						"vietnamese": "Không. Đây là ảo ảnh do Người quản lý tạo ra. Sinh ra từ mâu thuẫn bên trong chúng ta...",
						"thai": "ไม่ นี่คือภาพลวงตาที่ผู้ดูแลสร้างขึ้น เกิดจากความขัดแย้งภายในของเรา...",
						"hindi": "नहीं। यह व्यवस्थापक द्वारा बनाया गया एक भ्रम है। हमारे भीतर के संघर्ष से उत्पन्न हुआ..."
					},
					"type": "speech",
					"speaker": "lin"
				}
			]
		}
	]
} as const;
