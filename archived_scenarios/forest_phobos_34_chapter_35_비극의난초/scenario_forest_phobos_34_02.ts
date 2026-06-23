export const scenario_forest_phobos_34_02 = {
	"scenario_id": "forest_phobos_34_02",
	"order": 2,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"fern": {
			"id": "mon_279a32a0-8ec1-4b5b-8179-32df46fdc664",
			"name": {
				"korean": "페른",
				"english": "Fern",
				"japanese": "フェルン",
				"chinese": "费恩",
				"french": "Fern",
				"spanish": "Fern",
				"vietnamese": "Fern",
				"thai": "เฟิร์น",
				"hindi": "फर्न"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/19f9763e-413a-485e-787a-9bbfd8208700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/563627d4-0b7c-4865-39d4-1d0a97363c00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"숲은 더욱 깊어졌다. 희미한 속삭임이 길을 이끌었다.",
			"환상 뒤에 감춰진 것은 무엇인가. 아름다움인가, 비극인가.",
			"망자들의 아우성이, 덧없는 희망을 속삭였다.",
			"그 진실을 찾아, 더 깊은 심연으로."
		],
		"english": [
			"The forest deepened. Faint whispers guided the way.",
			"What lies hidden behind the illusion? Beauty or tragedy?",
			"The cries of the dead whispered fleeting hopes.",
			"To find that truth, into a deeper abyss."
		],
		"japanese": [
			"森はさらに深まった。微かな囁きが道を導いた。",
			"幻想の裏に隠されたものは何か。美しさか、それとも悲劇か。",
			"亡者たちの叫びが、儚い希望を囁いた。",
			"その真実を求め、より深き深淵へ。"
		],
		"chinese": [
			"森林愈发幽深。微弱的低语指引着道路。",
			"幻象背后隐藏着什么？是美，还是悲剧？",
			"亡者的哀嚎，低语着转瞬即逝的希望。",
			"为寻真相，坠入更深深渊。"
		],
		"french": [
			"La forêt s'épaissit. De faibles murmures guidaient le chemin.",
			"Qu'est-ce qui se cache derrière l'illusion ? La beauté ou la tragédie ?",
			"Les cris des morts chuchotaient des espoirs éphémères.",
			"Pour trouver cette vérité, dans un abîme plus profond."
		],
		"spanish": [
			"El bosque se hizo más profundo. Débiles susurros guiaban el camino.",
			"¿Qué se esconde tras la ilusión? ¿Belleza o tragedia?",
			"Los lamentos de los muertos susurraban esperanzas fugaces.",
			"Para encontrar esa verdad, a un abismo más profundo."
		],
		"vietnamese": [
			"Rừng càng lúc càng sâu. Những lời thì thầm mờ nhạt dẫn lối.",
			"Điều gì ẩn giấu sau ảo ảnh? Vẻ đẹp hay bi kịch?",
			"Tiếng kêu than của người chết thì thầm những hy vọng phù du.",
			"Để tìm kiếm sự thật đó, hãy tiến vào vực sâu hơn."
		],
		"thai": [
			"ป่าลึกเข้าไปอีก เสียงกระซิบแผ่วเบานำทาง",
			"สิ่งที่ซ่อนอยู่เบื้องหลังภาพลวงตาคืออะไร? ความงามหรือโศกนาฏกรรม?",
			"เสียงคร่ำครวญของผู้ตายกระซิบความหวังที่เลือนหาย",
			"เพื่อค้นหาความจริงนั้น สู่ห้วงลึกที่ลึกกว่า"
		],
		"hindi": [
			"वन और गहरा होता गया। क्षीण फुसफुसाहट ने मार्ग दिखाया।",
			"भ्रम के पीछे क्या छिपा है? सौंदर्य या त्रासदी?",
			"मृतकों की चीखें क्षणभंगुर आशाएँ फुसफुसा रही थीं।",
			"उस सत्य को खोजने के लिए, गहरे पाताल में।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "발걸음은 숲의 심장부로 향했다. 희미한 속삭임이 귀를 파고들었다.",
						"english": "My steps led to the forest's heart. Faint whispers pierced my ears.",
						"japanese": "足取りは森の心臓部へ向かった。微かな囁きが耳朶を打った。",
						"chinese": "脚步迈向森林深处。微弱的低语传入耳中。",
						"french": "Mes pas me menèrent au cœur de la forêt. De faibles murmures transperçaient mes oreilles.",
						"spanish": "Mis pasos me llevaron al corazón del bosque. Débiles susurros perforaron mis oídos.",
						"vietnamese": "Bước chân dẫn vào trung tâm rừng. Những lời thì thầm mờ nhạt xuyên qua tai tôi.",
						"thai": "ก้าวเดินสู่ใจกลางป่า เสียงกระซิบแผ่วเบาแทรกซึมเข้าหู",
						"hindi": "मेरे कदम जंगल के हृदय की ओर बढ़े। क्षीण फुसफुसाहट मेरे कानों में चुभ रही थी।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "direction",
					"spot": [
						5,
						2
					],
					"action": "enter",
					"speaker": "fern",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "...왔는가.",
						"english": "...You've come.",
						"japanese": "…来たか。",
						"chinese": "……你来了。",
						"french": "...Tu es venu.",
						"spanish": "...Has venido.",
						"vietnamese": "...Ngươi đã đến.",
						"thai": "...มาแล้วรึ",
						"hindi": "...तुम आ गए।"
					},
					"speaker": "fern",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "누구야?",
						"english": "Who are you?",
						"japanese": "誰だ？",
						"chinese": "你是谁？",
						"french": "Qui es-tu ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Ngươi là ai?",
						"thai": "ใครน่ะ?",
						"hindi": "तुम कौन हो?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "나 또한 이곳에 갇힌 영혼일 뿐. 과거, 난초의 환각에 이끌렸던 자.",
						"english": "I am but another soul trapped here. One who, in the past, was lured by the orchid's illusion.",
						"japanese": "私もまた、ここに囚われた魂に過ぎない。かつて、蘭の幻覚に誘われた者。",
						"chinese": "我也只是一个被困在此地的灵魂。过去，曾被兰花的幻象所诱惑之人。",
						"french": "Je ne suis qu'une autre âme piégée ici. Celle qui, jadis, fut attirée par l'illusion de l'orchidée.",
						"spanish": "No soy más que otra alma atrapada aquí. Quien, en el pasado, fue atraído por la ilusión de la orquídea.",
						"vietnamese": "Ta cũng chỉ là một linh hồn bị mắc kẹt ở đây. Người từng bị ảo ảnh của phong lan dẫn dụ.",
						"thai": "ข้าก็เป็นเพียงอีกหนึ่งวิญญาณที่ถูกขังอยู่ที่นี่ ผู้ที่ในอดีตถูกล่อลวงด้วยภาพลวงตาของกล้วยไม้",
						"hindi": "मैं भी यहाँ फंसी एक और आत्मा मात्र हूँ। वह, जो अतीत में, आर्किड के भ्रम से आकर्षित हुआ था।"
					},
					"speaker": "fern"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "fern",
					"action": "enter",
					"spot": [
						4,
						2
					],
					"type": "direction"
				},
				{
					"speaker": "fern",
					"content": {
						"korean": "숲의 평화를 꿈꿨지. 난초의 아름다움에 홀려… 모든 것을 잃었어.",
						"english": "I dreamed of the forest's peace. Seduced by the orchid's beauty... I lost everything.",
						"japanese": "森の平和を夢見ていた。蘭の美しさに魅せられ…全てを失った。",
						"chinese": "我曾梦想着森林的宁静。却被兰花的美丽所迷惑……失去了一切。",
						"french": "Je rêvais de la paix de la forêt. Séduit par la beauté de l'orchidée... J'ai tout perdu.",
						"spanish": "Soñé con la paz del bosque. Seducido por la belleza de la orquídea... lo perdí todo.",
						"vietnamese": "Ta đã mơ về sự bình yên của rừng. Bị vẻ đẹp của phong lan mê hoặc... ta đã mất tất cả.",
						"thai": "ข้าฝันถึงความสงบสุขของป่า หลงใหลในความงามของกล้วยไม้... ข้าสูญเสียทุกสิ่ง",
						"hindi": "मैंने जंगल की शांति का सपना देखा था। आर्किड की सुंदरता से बहककर... मैंने सब कुछ खो दिया।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "환각에 속았다는 거야?",
						"english": "So you were deceived by an illusion?",
						"japanese": "幻覚に騙されたということか？",
						"chinese": "你的意思是，你被幻觉欺骗了？",
						"french": "Tu as donc été trompé par une illusion ?",
						"spanish": "¿Así que fuiste engañado por una ilusión?",
						"vietnamese": "Vậy ngươi đã bị ảo ảnh lừa dối?",
						"thai": "แสดงว่าเจ้าถูกภาพลวงตาหลอกงั้นหรือ?",
						"hindi": "तो तुम भ्रम से धोखा खा गए?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "아니. 속았다기엔, 그 아름다움은 너무나 생생했지. 그리고… 덧없었어.",
						"english": "No. To call it a trick, its beauty was too vivid. And… fleeting.",
						"japanese": "いや。騙されたというには、その美しさはあまりにも鮮やかだった。そして…儚かった。",
						"chinese": "不。与其说是受骗，不如说那份美丽太过鲜活。而且……转瞬即逝。",
						"french": "Non. Pour un mensonge, sa beauté était bien trop vivante. Et… éphémère.",
						"spanish": "No. Para ser un engaño, su belleza era demasiado vívida. Y… efímera.",
						"vietnamese": "Không. Để gọi đó là lừa dối, thì vẻ đẹp đó quá sống động. Và… phù du.",
						"thai": "ไม่สิ จะว่าถูกหลอกก็ไม่เชิง ความงามนั้นช่างสดใสเกินไป และ… เปราะบาง",
						"hindi": "नहीं। धोखे के लिए, उसकी सुंदरता बहुत सजीव थी। और… क्षणभंगुर।"
					},
					"speaker": "fern"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…",
						"english": "...",
						"japanese": "…",
						"chinese": "……",
						"french": "...",
						"spanish": "...",
						"vietnamese": "...",
						"thai": "...",
						"hindi": "..."
					},
					"speaker": "character_any"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "fern",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"speaker": "fern",
					"content": {
						"korean": "이 숲의 진정한 슬픔을 찾아줘. 난초의 아름다움 뒤에 감춰진 고통을.",
						"english": "Find the true sorrow of this forest. The pain hidden behind the orchid's beauty.",
						"japanese": "この森の真の悲しみを見つけ出してくれ。蘭の美しさの裏に隠された苦痛を。",
						"chinese": "找出这片森林真正的悲伤。兰花之美背后隐藏的痛苦。",
						"french": "Trouve la vraie tristesse de cette forêt. La douleur cachée derrière la beauté de l'orchidée.",
						"spanish": "Encuentra la verdadera tristeza de este bosque. El dolor oculto tras la belleza de la orquídea.",
						"vietnamese": "Hãy tìm nỗi buồn thật sự của khu rừng này. Nỗi đau ẩn giấu sau vẻ đẹp của hoa lan.",
						"thai": "จงค้นหาความเศร้าแท้จริงของป่านี้ ความเจ็บปวดที่ซ่อนอยู่เบื้องหลังความงามของกล้วยไม้",
						"hindi": "इस जंगल का सच्चा दुख खोजो। ऑर्किड की सुंदरता के पीछे छिपा दर्द।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "슬픔이라고?",
						"english": "Sorrow?",
						"japanese": "悲しみだと？",
						"chinese": "悲伤？",
						"french": "Tristesse ?",
						"spanish": "¿Tristeza?",
						"vietnamese": "Nỗi buồn sao?",
						"thai": "ความเศร้าหรือ?",
						"hindi": "दुख?"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "그래. 단순한 악의가 아니야. 무언가 더 깊은… 비극이 있어.",
						"english": "Yes. It's not just malice. There's something deeper… a tragedy.",
						"japanese": "そうだ。単なる悪意ではない。もっと深い…悲劇がある。",
						"chinese": "没错。并非单纯的恶意。而是某种更深层的……悲剧。",
						"french": "Oui. Ce n'est pas juste de la malice. Il y a quelque chose de plus profond… une tragédie.",
						"spanish": "Sí. No es solo malicia. Hay algo más profundo… una tragedia.",
						"vietnamese": "Đúng vậy. Không chỉ là ác ý đơn thuần. Có một… bi kịch sâu sắc hơn.",
						"thai": "ใช่ มันไม่ใช่แค่ความมุ่งร้าย แต่เป็น… โศกนาฏกรรมที่ลึกซึ้งกว่านั้น",
						"hindi": "हाँ। यह सिर्फ दुर्भावना नहीं है। कुछ गहरा है… एक त्रासदी।"
					},
					"speaker": "fern"
				},
				{
					"content": {
						"korean": "…그의 말은 믿기 힘들었지만, 고통만은 진실 같았다.",
						"english": "…His words were hard to believe, but the pain felt real.",
						"japanese": "…彼の言葉は信じがたかったが、苦痛だけは真実のようだった。",
						"chinese": "……他的话语难以置信，但那痛苦却真切无比。",
						"french": "…Ses mots étaient difficiles à croire, mais la douleur, elle, semblait réelle.",
						"spanish": "…Sus palabras eran difíciles de creer, pero el dolor parecía real.",
						"vietnamese": "…Lời hắn khó tin, nhưng nỗi đau thì có vẻ là sự thật.",
						"thai": "…คำพูดของเขายากที่จะเชื่อ แต่ความเจ็บปวดนั้นดูเหมือนจริง",
						"hindi": "…उसके शब्दों पर विश्वास करना कठिन था, लेकिन दर्द सच्चा लगा।"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "fern",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "fern",
					"content": {
						"korean": "다가오고 있어… 숲의 진정한 슬픔이.",
						"english": "It's coming… the true sorrow of the forest.",
						"japanese": "近づいている…森の真の悲しみが。",
						"chinese": "它正在临近……森林真正的悲伤。",
						"french": "Ça approche… la vraie tristesse de la forêt.",
						"spanish": "Se acerca… la verdadera tristeza del bosque.",
						"vietnamese": "Nó đang đến gần… nỗi buồn thật sự của khu rừng.",
						"thai": "มันกำลังมา… ความเศร้าแท้จริงของป่า",
						"hindi": "यह आ रहा है… जंगल का सच्चा दुख।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "난초의 환각이 더 강해지는 것 같다. 이제 돌아갈 수 없어.",
						"english": "The orchid's illusions seem to be growing stronger. There's no turning back now.",
						"japanese": "蘭の幻覚がさらに強くなっているようだ。もう引き返せない。",
						"chinese": "兰花的幻觉似乎越来越强烈。现在已无法回头。",
						"french": "Les illusions de l'orchidée semblent s'intensifier. Il n'y a plus de retour en arrière possible.",
						"spanish": "Las ilusiones de la orquídea parecen hacerse más fuertes. Ya no hay vuelta atrás.",
						"vietnamese": "Ảo ảnh của hoa lan dường như mạnh hơn. Giờ không thể quay lại được nữa.",
						"thai": "ภาพหลอนของกล้วยไม้ดูเหมือนจะแรงขึ้น ตอนนี้กลับไปไม่ได้แล้ว",
						"hindi": "ऑर्किड के भ्रम और मजबूत होते जा रहे हैं। अब वापस नहीं जा सकते।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "숲은 더욱 짙어졌다. 어둠 속에서 거대한 그림자가 일렁였다.",
						"english": "The forest grew denser. A colossal shadow flickered in the darkness.",
						"japanese": "森はさらに深くなった。闇の中で巨大な影が揺らめいた。",
						"chinese": "森林变得更加茂密。黑暗中，一个巨大的影子晃动着。",
						"french": "La forêt s'est épaissie. Une ombre colossale vacillait dans l'obscurité.",
						"spanish": "El bosque se hizo más denso. Una sombra colosal parpadeaba en la oscuridad.",
						"vietnamese": "Khu rừng trở nên rậm rạp hơn. Một bóng đen khổng lồ chập chờn trong bóng tối.",
						"thai": "ป่าทึบขึ้นเรื่อยๆ เงาขนาดมหึมาสั่นไหวในความมืด",
						"hindi": "जंगल घना हो गया। अंधेरे में एक विशाल परछाईं कांप रही थी।"
					}
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거대한 뿌리가 얽힌 공간. 마침내 그림자가 모습을 드러냈다.",
						"english": "A space entangled with colossal roots. Finally, the shadow revealed itself.",
						"japanese": "巨大な根が絡み合う空間。ついに影が姿を現した。",
						"chinese": "一个被巨大根系缠绕的空间。最终，那影子现出了身形。",
						"french": "Un espace entremêlé de racines colossales. Finalement, l'ombre s'est révélée.",
						"spanish": "Un espacio enredado con raíces colosales. Finalmente, la sombra se reveló.",
						"vietnamese": "Một không gian bị rễ cây khổng lồ vướng víu. Cuối cùng, bóng đen đã lộ diện.",
						"thai": "พื้นที่ที่เต็มไปด้วยรากไม้ขนาดมหึมา ในที่สุดเงามืดก็เผยโฉม",
						"hindi": "विशाल जड़ों से उलझा हुआ स्थान। अंततः, परछाईं प्रकट हुई।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "감히 이곳까지 발을 들이다니.",
						"english": "You dare step foot here.",
						"japanese": "よくもここまで足を踏み入れたな。",
						"chinese": "竟敢踏足此地。",
						"french": "Vous osez mettre les pieds ici.",
						"spanish": "¿Te atreves a poner un pie aquí?",
						"vietnamese": "Ngươi dám đặt chân đến đây.",
						"thai": "เจ้ากล้าดียังไงมาเหยียบที่นี่",
						"hindi": "तुम्हारी हिम्मत कैसे हुई यहाँ कदम रखने की।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "네가… {random_boss}.",
						"english": "So you are... {random_boss}.",
						"japanese": "貴様が… {random_boss}か。",
						"chinese": "你就是… {random_boss}。",
						"french": "Vous êtes… {random_boss}.",
						"spanish": "Tú eres… {random_boss}.",
						"vietnamese": "Ngươi chính là… {random_boss}.",
						"thai": "เจ้าคือ... {random_boss}",
						"hindi": "तुम ही हो... {random_boss}।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "이 숲의 진정한 의미를… 너희가 알 리 없어.",
						"english": "You'll never know this forest's true meaning.",
						"japanese": "この森の真の意味を… お前たちが知るはずがない。",
						"chinese": "你们不可能知道这片森林真正的意义。",
						"french": "Vous ne connaîtrez jamais le vrai sens de cette forêt.",
						"spanish": "Nunca sabréis el verdadero significado de este bosque.",
						"vietnamese": "Các ngươi làm sao có thể biết được ý nghĩa thật sự của khu rừng này.",
						"thai": "พวกเจ้าไม่มีทางรู้ความหมายที่แท้จริงของป่าแห่งนี้หรอก",
						"hindi": "तुम इस जंगल का असली मतलब कभी नहीं जान पाओगे।"
					}
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "이것은… 시작에 불과해. 너희는… 진실을 보게 될 거야.",
						"english": "This is... merely the beginning. You will... see the truth.",
						"japanese": "これは… 始まりに過ぎない。お前たちは… 真実を目にすることになるだろう。",
						"chinese": "这… 仅仅是个开始。你们会… 看到真相的。",
						"french": "Ceci n'est… que le début. Vous… verrez la vérité.",
						"spanish": "Esto es… solo el principio. Vosotros… veréis la verdad.",
						"vietnamese": "Đây… chỉ là khởi đầu. Các ngươi sẽ… thấy sự thật.",
						"thai": "นี่เป็น… เพียงแค่จุดเริ่มต้น พวกเจ้าจะได้… เห็นความจริง",
						"hindi": "यह… सिर्फ शुरुआत है। तुम… सच देखोगे।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "진실? 페른이 말했던 '슬픔'인가…",
						"english": "Truth? Is it the 'sorrow' Fern spoke of...?",
						"japanese": "真実？ フェルンが話していた『悲しみ』なのか…",
						"chinese": "真相？是费恩提到的‘悲伤’吗…",
						"french": "La vérité ? Est-ce la 'tristesse' dont parlait Fern… ?",
						"spanish": "¿La verdad? ¿Es la 'pena' de la que habló Fern…?",
						"vietnamese": "Sự thật? Có phải là 'nỗi buồn' mà Fern đã nói đến không…?",
						"thai": "ความจริง? ใช่ 'ความเศร้า' ที่เฟิร์นพูดถึงรึเปล่า...",
						"hindi": "सच? क्या यह वही 'दुख' है जिसके बारे में फ़र्न ने बात की थी...?"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "그림자는 사라졌지만, 숲의 슬픔은 더 깊이 스며들었다.",
						"english": "The shadow vanished, but the forest's sorrow seeped in deeper.",
						"japanese": "影は消え去ったが、森の悲しみはさらに深く染み渡った。",
						"chinese": "影子消失了，但森林的悲伤却更深地渗透了。",
						"french": "L'ombre a disparu, mais la tristesse de la forêt s'est infiltrée plus profondément.",
						"spanish": "La sombra desapareció, pero la tristeza del bosque se impregnó más profundamente.",
						"vietnamese": "Bóng tối đã tan biến, nhưng nỗi buồn của khu rừng lại thấm sâu hơn.",
						"thai": "เงามืดหายไปแล้ว แต่ความเศร้าของป่ากลับยิ่งหยั่งลึก",
						"hindi": "छाया तो मिट गई, पर जंगल का दुख और गहरा होता गया।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "난초의 아름다움 뒤에 감춰진 진짜 비극이, 점차 모습을 드러내기 시작했다.",
						"english": "The true tragedy hidden behind the orchid's beauty slowly began to reveal itself.",
						"japanese": "蘭の美しさの裏に隠された真の悲劇が、徐々に姿を現し始めた。",
						"chinese": "隐藏在兰花之美背后的真正悲剧，渐渐开始显露出来。",
						"french": "La véritable tragédie cachée derrière la beauté de l'orchidée a lentement commencé à se révéler.",
						"spanish": "La verdadera tragedia oculta tras la belleza de la orquídea comenzó a revelarse poco a poco.",
						"vietnamese": "Bi kịch thực sự ẩn sau vẻ đẹp của hoa phong lan, dần dần bắt đầu lộ rõ.",
						"thai": "โศกนาฏกรรมที่แท้จริงที่ซ่อนอยู่เบื้องหลังความงามของกล้วยไม้ ค่อยๆ เริ่มปรากฏขึ้น",
						"hindi": "ऑर्chid की सुंदरता के पीछे छिपी असली त्रासदी धीरे-धीरे सामने आने लगी।"
					},
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 자들… 이곳에서 영원히 길을 잃어라.",
						"english": "Fools... be forever lost here.",
						"japanese": "愚か者たちめ… ここで永遠に道に迷え。",
						"chinese": "愚蠢的家伙们… 在这里永远迷失吧。",
						"french": "Idiots… perdez-vous ici pour toujours.",
						"spanish": "Necios… perdeos aquí para siempre.",
						"vietnamese": "Những kẻ ngu ngốc… hãy lạc lối vĩnh viễn ở đây.",
						"thai": "พวกโง่เง่า… จงหลงทางอยู่ที่นี่ตลอดไป",
						"hindi": "मूर्खों... यहीं सदा के लिए भटक जाओ।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "아직… 끝나지 않았어. 진실을… 알아야 해.",
						"english": "It's not... over yet. You need to... know the truth.",
						"japanese": "まだ… 終わっていない。真実を… 知らなければならない。",
						"chinese": "还没… 结束。你们必须… 知道真相。",
						"french": "Ce n'est… pas encore fini. Vous devez… connaître la vérité.",
						"spanish": "Aún… no ha terminado. Debéis… saber la verdad.",
						"vietnamese": "Chưa… kết thúc đâu. Các ngươi phải… biết sự thật.",
						"thai": "ยัง… ไม่จบหรอกนะ พวกเจ้าต้อง… รู้ความจริง",
						"hindi": "अभी... खत्म नहीं हुआ है। तुम्हें... सच जानना होगा।"
					}
				}
			]
		}
	]
} as const;
