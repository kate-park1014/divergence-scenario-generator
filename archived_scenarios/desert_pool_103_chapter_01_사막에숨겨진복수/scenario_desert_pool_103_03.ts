export const scenario_desert_pool_103_03 = {
	"scenario_id": "desert_pool_103_03",
	"order": 3,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"ember": {
			"id": "mon_9845a5c0-e558-41cc-979d-91567cb41aa7",
			"name": {
				"korean": "앰버",
				"english": "Ember",
				"japanese": "エンバー",
				"chinese": "余烬",
				"french": "Braise",
				"spanish": "Ascua",
				"vietnamese": "Tàn lửa",
				"thai": "เอมเบอร์",
				"hindi": "अंगारा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/10e60a4c-5b9a-4f2a-a55a-707c0beabe00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5dd50017-3c98-41b2-c8d2-e3e4659ca700/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "황금빛 모래언덕이 끝없이 펼쳐졌다. 유물의 흔적은 쉽게 보이지 않았다.",
						"english": "Golden dunes stretched endlessly. No trace of the artifact was easily found.",
						"japanese": "黄金色の砂丘が果てしなく広がっていた。遺物の痕跡は簡単には見つからなかった。",
						"chinese": "金色的沙丘无边无际。遗物的痕迹不易察觉。",
						"french": "Des dunes dorées s'étendaient à l'infini. Aucune trace de l'artefact ne fut facilement trouvée.",
						"spanish": "Dunas doradas se extendían sin fin. No se encontró fácilmente rastro del artefacto.",
						"vietnamese": "Những cồn cát vàng trải dài vô tận. Không dễ tìm thấy dấu vết cổ vật.",
						"thai": "เนินทรายสีทองทอดยาวไม่มีที่สิ้นสุด ไม่พบร่องรอยของวัตถุโบราณได้ง่ายๆ.",
						"hindi": "सुनहरे टीले अनंत तक फैले हुए थे। कलाकृति का कोई निशान आसानी से नहीं मिला।"
					}
				},
				{
					"content": {
						"korean": "너무 넓어… 대체 어디부터 찾아야 해?",
						"english": "It's too vast... Where do we even begin to search?",
						"japanese": "広すぎる…一体どこから探せばいいの？",
						"chinese": "太大了…到底该从哪里开始找？",
						"french": "C'est trop vaste... Par où commencer à chercher ?",
						"spanish": "Es demasiado vasto... ¿Por dónde empezamos a buscar?",
						"vietnamese": "Rộng quá... Chúng ta nên bắt đầu tìm từ đâu đây?",
						"thai": "มันกว้างเกินไป... เราควรเริ่มหาจากตรงไหน?",
						"hindi": "यह बहुत विशाल है... हम कहाँ से खोजना शुरू करें?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "ember",
					"spot": [
						4,
						2
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "야, 거기 멈춰! 그러다 사구에 삼켜져.",
						"english": "Hey, stop right there! You'll be swallowed by the dunes.",
						"japanese": "おい、そこで止まれ！砂丘に飲み込まれるぞ。",
						"chinese": "嘿，站住！你会陷进沙丘里的。",
						"french": "Hé, arrête-toi là ! Tu vas être englouti par les dunes.",
						"spanish": "¡Oye, detente ahí! Te tragarán las dunas.",
						"vietnamese": "Này, dừng lại! Ngươi sẽ bị cồn cát nuốt chửng đấy.",
						"thai": "เฮ้ หยุดตรงนั้น! เดี๋ยวก็โดนเนินทรายกลืนหายไปหรอก.",
						"hindi": "अरे, वहीं रुक जाओ! तुम्हें टीले निगल जाएंगे।"
					},
					"speaker": "ember",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "누구야?",
						"english": "Who's there?",
						"japanese": "誰だ？",
						"chinese": "是谁？",
						"french": "Qui est là ?",
						"spanish": "¿Quién es?",
						"vietnamese": "Ai đó?",
						"thai": "ใครน่ะ?",
						"hindi": "कौन है?"
					}
				},
				{
					"speaker": "ember",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "앰버. 이 사막에서 살아남는 법을 알지. 너희처럼 어리숙한 애들보다는.",
						"english": "Amber. I know how to survive this desert. Unlike naive kids like you.",
						"japanese": "アンバー。この砂漠で生き残る術を知っている。お前たちのような世間知らずよりはな。",
						"chinese": "我是安柏。我知道怎么在这沙漠里活下来。不像你们这些傻乎乎的家伙。",
						"french": "Amber. Je sais comment survivre dans ce désert. Contrairement aux gamins naïfs comme vous.",
						"spanish": "Amber. Sé cómo sobrevivir en este desierto. A diferencia de chicos ingenuos como vosotros.",
						"vietnamese": "Amber. Ta biết cách sống sót ở sa mạc này. Không như những đứa ngây thơ như các ngươi.",
						"thai": "แอมเบอร์. ฉันรู้วิธีเอาชีวิตรอดในทะเลทรายนี้ แตกต่างจากพวกเด็กอ่อนหัดอย่างพวกเธอ.",
						"hindi": "एम्बर। मैं जानती हूँ कि इस रेगिस्तान में कैसे जीवित रहना है। तुम जैसे भोले-भाले बच्चों से कहीं बेहतर।"
					}
				},
				{
					"emotion": "base",
					"speaker": "ember",
					"type": "speech",
					"content": {
						"korean": "요즘 모래가 이상해. 누군가 이 모든 걸 조종하는 것 같아.",
						"english": "The sand's been strange lately. It feels like someone's controlling all of this.",
						"japanese": "最近砂がおかしい。誰かがこれを操っているようだ。",
						"chinese": "最近的沙子很奇怪。感觉有人在操控这一切。",
						"french": "Le sable est bizarre ces temps-ci. On dirait que quelqu'un contrôle tout ça.",
						"spanish": "La arena ha estado rara últimamente. Parece que alguien está controlando todo esto.",
						"vietnamese": "Gần đây cát lạ lắm. Cứ như có ai đó đang điều khiển mọi thứ.",
						"thai": "ช่วงนี้ทรายแปลกๆ เหมือนมีใครบางคนกำลังควบคุมทุกอย่างอยู่.",
						"hindi": "हाल ही में रेत अजीब हो गई है। ऐसा लगता है कि कोई यह सब नियंत्रित कर रहा है।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "ember",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"speaker": "ember",
					"type": "speech",
					"content": {
						"korean": "최근에 이상한 모래 흐름이 생겼어. 널 위험한 곳으로 이끌 거야. 피하는 게 좋아.",
						"english": "Strange sand currents have appeared recently. They'll lead you to danger. Best avoid them.",
						"japanese": "最近、奇妙な砂の流れができた。君を危険な場所に導くだろう。避けるのが賢明だ。",
						"chinese": "最近出现了奇怪的沙流。它们会把你引向危险。最好避开。",
						"french": "D'étranges courants de sable sont apparus récemment. Ils te mèneront au danger. Mieux vaut les éviter.",
						"spanish": "Han aparecido extrañas corrientes de arena recientemente. Te llevarán al peligro. Es mejor evitarlas.",
						"vietnamese": "Gần đây xuất hiện những dòng cát lạ. Chúng sẽ dẫn bạn đến nguy hiểm. Tốt nhất là nên tránh.",
						"thai": "กระแสทรายแปลกๆ ปรากฏขึ้นเมื่อเร็วๆ นี้ มันจะนำพาเจ้าไปสู่อันตราย หลีกเลี่ยงจะดีกว่า",
						"hindi": "हाल ही में अजीब रेत धाराएं दिखाई दी हैं। वे तुम्हें खतरे में डाल देंगी। उनसे बचना सबसे अच्छा है।"
					}
				},
				{
					"content": {
						"korean": "조종한다고? 누가 감히 이 사막을?",
						"english": "Controlled? Who dares to control this desert?",
						"japanese": "操られている？誰がこの砂漠を操るというんだ？",
						"chinese": "被控制？谁敢控制这片沙漠？",
						"french": "Contrôlée ? Qui ose contrôler ce désert ?",
						"spanish": "¿Controlado? ¿Quién se atreve a controlar este desierto?",
						"vietnamese": "Bị điều khiển? Ai dám điều khiển sa mạc này?",
						"thai": "ถูกควบคุม? ใครกันที่กล้าควบคุมทะเลทรายแห่งนี้?",
						"hindi": "नियंत्रित? इस रेगिस्तान को नियंत्रित करने की हिम्मत कौन करता है?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "몰라. 하지만 나도 비슷한 함정에 빠진 적이 있어. 도망칠 수 없는 미궁에.",
						"english": "I don't know. But I've been caught in a similar trap. A labyrinth with no escape.",
						"japanese": "分からない。でも、私も似たような罠にかかったことがある。逃げられない迷宮にね。",
						"chinese": "我不知道。但我曾陷入类似的陷阱。一个无法逃脱的迷宫。",
						"french": "Je ne sais pas. Mais je suis tombé dans un piège similaire. Un labyrinthe sans échappatoire.",
						"spanish": "No lo sé. Pero yo también caí en una trampa similar. Un laberinto sin salida.",
						"vietnamese": "Tôi không biết. Nhưng tôi cũng từng mắc kẹt trong một cái bẫy tương tự. Một mê cung không lối thoát.",
						"thai": "ไม่รู้สิ แต่ฉันก็เคยติดกับดักคล้ายๆ กันนี้ วงกตที่ไม่มีทางหนี",
						"hindi": "मुझे नहीं पता। लेकिन मैं भी इसी तरह के जाल में फंस गया था। एक भूलभुलैया जिससे कोई बच नहीं सकता।"
					},
					"emotion": "sad",
					"speaker": "ember",
					"type": "speech"
				},
				{
					"content": {
						"korean": "누군가 항상 우리보다 한 발 앞서 있는 느낌… 그림자처럼.",
						"english": "Someone always feels one step ahead of us... like a shadow.",
						"japanese": "誰かがいつも私たちの一歩先を行っている感じがする…影のように。",
						"chinese": "总觉得有人比我们领先一步……像个影子。",
						"french": "Quelqu'un a toujours une longueur d'avance sur nous... comme une ombre.",
						"spanish": "Alguien siempre parece ir un paso por delante de nosotros... como una sombra.",
						"vietnamese": "Cảm giác như có ai đó luôn đi trước chúng ta một bước... như một cái bóng.",
						"thai": "รู้สึกเหมือนมีใครบางคนนำหน้าเราอยู่เสมอ... เหมือนเงา",
						"hindi": "कोई हमेशा हमसे एक कदम आगे रहता है... एक परछाई की तरह।"
					},
					"emotion": "base",
					"speaker": "ember",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그림자… Jian Li?",
						"english": "Shadow... Jian Li?",
						"japanese": "影…ジェン・リー？",
						"chinese": "影子……剑离？",
						"french": "Ombre... Jian Li ?",
						"spanish": "¿Sombra... Jian Li?",
						"vietnamese": "Bóng tối... Jian Li?",
						"thai": "เงา... เจียนหลี่?",
						"hindi": "परछाई... जियान ली?"
					},
					"speaker": "character_1",
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "ember",
					"spot": [
						2,
						2
					],
					"action": "enter"
				},
				{
					"emotion": "angry",
					"speaker": "ember",
					"type": "speech",
					"content": {
						"korean": "여기 나타나는 괴물들은 평범하지 않아. 누군가 의도적으로 배치한 함정이라고.",
						"english": "The monsters appearing here aren't ordinary. Someone intentionally set them as a trap.",
						"japanese": "ここに現れるモンスターは普通じゃない。誰かが意図的に仕掛けた罠だ。",
						"chinese": "这里出现的怪物不寻常。有人故意设下的陷阱。",
						"french": "Les monstres qui apparaissent ici ne sont pas ordinaires. Quelqu'un les a délibérément placés comme un piège.",
						"spanish": "Los monstruos que aparecen aquí no son ordinarios. Alguien los puso intencionadamente como una trampa.",
						"vietnamese": "Những con quái vật xuất hiện ở đây không bình thường. Ai đó đã cố tình đặt chúng làm bẫy.",
						"thai": "สัตว์ประหลาดที่ปรากฏตัวที่นี่ไม่ธรรมดา มีคนจงใจวางพวกมันเป็นกับดัก",
						"hindi": "यहां दिखाई देने वाले राक्षस सामान्य नहीं हैं। किसी ने जानबूझकर उन्हें जाल के रूप में रखा है।"
					}
				},
				{
					"content": {
						"korean": "그럼 이 모든 게… Jian Li가 꾸민 일이라는 거야? 그가 우릴 도왔는데?",
						"english": "So all of this... is Jian Li's doing? He helped us, didn't he?",
						"japanese": "じゃあこれ全部…ジェン・リーの仕業なのか？彼、私たちを助けてくれたんじゃなかったの？",
						"chinese": "所以这一切……都是剑离做的？他不是帮过我们吗？",
						"french": "Alors tout ça... c'est l'œuvre de Jian Li ? Il nous a aidés, n'est-ce pas ?",
						"spanish": "¿Así que todo esto... es obra de Jian Li? ¿Él nos ayudó, no?",
						"vietnamese": "Vậy tất cả chuyện này... là do Jian Li làm sao? Hắn đã giúp chúng ta mà?",
						"thai": "สรุปว่าทั้งหมดนี้... เป็นฝีมือของเจียนหลี่เหรอ? เขาช่วยพวกเราไม่ใช่เหรอ?",
						"hindi": "तो यह सब... जियान ली का काम है? उसने हमारी मदद की थी, है ना?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "…그는 예상치 못한 곳에 나타나곤 했어. 꼭 누군가를 돕는 것처럼.",
						"english": "...He would appear in unexpected places. Always as if helping someone.",
						"japanese": "…彼は予想外の場所に現れることがあった。まるで誰かを助けるかのように。",
						"chinese": "……他总会出现在意想不到的地方。仿佛在帮助某人。",
						"french": "...Il apparaissait dans des endroits inattendus. Toujours comme s'il aidait quelqu'un.",
						"spanish": "...Aparecía en lugares inesperados. Siempre como si estuviera ayudando a alguien.",
						"vietnamese": "...Hắn thường xuất hiện ở những nơi không ngờ tới. Luôn như thể đang giúp đỡ ai đó.",
						"thai": "...เขาจะปรากฏตัวในสถานที่ที่ไม่คาดคิดเสมอ ราวกับกำลังช่วยใครบางคน",
						"hindi": "...वह अप्रत्याशित जगहों पर दिखाई देता था। हमेशा जैसे किसी की मदद कर रहा हो।"
					},
					"speaker": "ember",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "하지만 그 시선은… 절대 선량하지 않았어.",
						"english": "But his gaze... was never benevolent.",
						"japanese": "でも、その視線は…決して善意ではなかった。",
						"chinese": "但他的眼神……从不友善。",
						"french": "Mais son regard... n'était jamais bienveillant.",
						"spanish": "Pero su mirada... nunca fue benévola.",
						"vietnamese": "Nhưng ánh mắt của hắn... chưa bao giờ thiện lương.",
						"thai": "แต่สายตาของเขา... ไม่เคยมีเมตตาเลย",
						"hindi": "लेकिन उसकी नज़र... कभी भली नहीं थी।"
					},
					"speaker": "ember",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "우리가 이용당하고 있었던 건가…",
						"english": "Were we being used all along...?",
						"japanese": "私たちは最初から利用されていたのか…？",
						"chinese": "我们一直被利用了吗……？",
						"french": "Avions-nous été utilisés depuis le début... ?",
						"spanish": "¿Fuimos utilizados todo el tiempo...?",
						"vietnamese": "Chẳng lẽ chúng ta đã bị lợi dụng từ trước đến nay...?",
						"thai": "พวกเราถูกใช้มาตลอดงั้นเหรอ...?",
						"hindi": "क्या हमें शुरू से इस्तेमाल किया जा रहा था...?"
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
					"speaker": "ember",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "돌아가. 여기는 너희가 감당할 수 있는 곳이 아니야. 더 깊이 가면, 더 큰 절망뿐이야.",
						"english": "Turn back. This place is beyond your grasp. Deeper lies only greater despair.",
						"japanese": "引き返せ。ここは君たちが手に負える場所ではない。さらに深く進めば、より大きな絶望が待つだけだ。",
						"chinese": "回去吧。这里不是你们能应付的地方。深入下去，只有更大的绝望。",
						"french": "Rebroussez chemin. Cet endroit est au-delà de vos moyens. Plus vous irez loin, plus grand sera le désespoir.",
						"spanish": "Regresen. Este lugar está más allá de lo que pueden manejar. Más profundo, solo encontrarán mayor desesperación.",
						"vietnamese": "Quay lại đi. Nơi này không phải là thứ các ngươi có thể đối phó. Càng vào sâu, chỉ có tuyệt vọng lớn hơn mà thôi.",
						"thai": "กลับไปซะ ที่นี่ไม่ใช่ที่ที่พวกเจ้าจะรับมือได้ ยิ่งลึกเข้าไป ยิ่งมีแต่ความสิ้นหวังที่มากขึ้นเท่านั้น",
						"hindi": "वापस जाओ। यह जगह तुम्हारे बस की नहीं है। और गहरा जाओगे, तो और बड़ी निराशा ही मिलेगी।"
					},
					"speaker": "ember",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "포기할 수 없어. 진실을 알아야 해. 이 모든 조작의 배후를.",
						"english": "We can't give up. We must uncover the truth. The mastermind behind all this manipulation.",
						"japanese": "諦められない。真実を知らなければ。この全ての企みの裏側を。",
						"chinese": "我们不能放弃。必须查明真相。这所有操纵的幕后黑手。",
						"french": "Nous ne pouvons pas abandonner. Nous devons découvrir la vérité. Le cerveau derrière toute cette manipulation.",
						"spanish": "No podemos rendirnos. Debemos saber la verdad. Quién está detrás de toda esta manipulación.",
						"vietnamese": "Chúng tôi không thể từ bỏ. Phải biết sự thật. Kẻ đứng sau mọi sự thao túng này.",
						"thai": "เรายอมแพ้ไม่ได้ เราต้องรู้ความจริง เบื้องหลังการบงการทั้งหมดนี้",
						"hindi": "हम हार नहीं मान सकते। हमें सच जानना होगा। इस सारी हेराफेरी के पीछे कौन है।"
					}
				},
				{
					"emotion": "sad",
					"speaker": "ember",
					"type": "speech",
					"content": {
						"korean": "너희가 찾는 진실은… 더 큰 고통으로 이끌 뿐이야.",
						"english": "The truth you seek... will only lead to greater suffering.",
						"japanese": "君たちが探す真実は… さらなる苦痛へと導くだけだ。",
						"chinese": "你们所寻求的真相……只会带来更大的痛苦。",
						"french": "La vérité que vous cherchez... ne mènera qu'à une plus grande souffrance.",
						"spanish": "La verdad que buscan... solo los llevará a un sufrimiento mayor.",
						"vietnamese": "Sự thật các ngươi tìm kiếm... chỉ dẫn đến nỗi đau lớn hơn mà thôi.",
						"thai": "ความจริงที่พวกเจ้าตามหา... จะนำมาซึ่งความทุกข์ทรมานที่มากขึ้นเท่านั้น",
						"hindi": "तुम जो सच ढूंढ रहे हो... वह सिर्फ और अधिक पीड़ा की ओर ले जाएगा।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "그래도 가야 해. 후회하더라도.",
						"english": "Even so, we must go. Even if we regret it.",
						"japanese": "それでも行かなければならない。後悔しても、だ。",
						"chinese": "即使如此，我们也必须去。即使会后悔。",
						"french": "Même ainsi, nous devons y aller. Même si nous le regrettons.",
						"spanish": "Aun así, debemos ir. Aunque nos arrepintamos.",
						"vietnamese": "Dù sao thì cũng phải đi. Dù có hối hận đi chăng nữa.",
						"thai": "ถึงอย่างนั้นก็ต้องไป ถึงแม้จะเสียใจก็ตาม",
						"hindi": "फिर भी हमें जाना होगा। भले ही हमें पछताना पड़े।"
					}
				},
				{
					"content": {
						"korean": "…알았어. 하지만 조심해. 저 너머에는, 그자의 가장 강력한 하수인이 기다리고 있을 거야.",
						"english": "...Understood. But be careful. Beyond that, his most powerful minion awaits.",
						"japanese": "…わかった。だが、気をつけろ。その先には、あの者の最も強力な手下が待ち構えているだろう。",
						"chinese": "……知道了。但要小心。在那边，他的最强仆从正在等着。",
						"french": "...Compris. Mais soyez prudents. Au-delà, son plus puissant serviteur vous attendra.",
						"spanish": "...Entendido. Pero tengan cuidado. Más allá, su esbirro más poderoso estará esperando.",
						"vietnamese": "...Được rồi. Nhưng hãy cẩn thận. Bên kia, kẻ tay sai mạnh nhất của hắn đang chờ đợi.",
						"thai": "...เข้าใจแล้ว แต่ระวังให้ดี เบื้องหน้าโน้น สมุนที่แข็งแกร่งที่สุดของมันกำลังรออยู่",
						"hindi": "...ठीक है। लेकिन सावधान रहना। उस पार, उसका सबसे शक्तिशाली सेवक इंतजार कर रहा होगा।"
					},
					"speaker": "ember",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "exit",
					"speaker": "ember",
					"direction": "down",
					"duration_ms": 400
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거대한 모래 폭풍이 모든 것을 집어삼켰다. 사구는 모든 것을 기억한다.",
						"english": "A colossal sandstorm engulfed everything. The dunes remember all.",
						"japanese": "巨大な砂嵐がすべてを飲み込んだ。砂丘はすべてを記憶している。",
						"chinese": "巨大的沙尘暴吞噬了一切。沙丘铭记着一切。",
						"french": "Une gigantesque tempête de sable a tout englouti. Les dunes se souviennent de tout.",
						"spanish": "Una colosal tormenta de arena lo engulló todo. Las dunas lo recuerdan todo.",
						"vietnamese": "Một cơn bão cát khổng lồ nuốt chửng mọi thứ. Những cồn cát ghi nhớ tất cả.",
						"thai": "พายุทรายมหึมากลืนกินทุกสิ่ง เนินทรายจดจำทุกอย่าง",
						"hindi": "एक विशाल रेत का तूफान सब कुछ निगल गया। टीले सब कुछ याद रखते हैं।"
					}
				},
				{
					"content": {
						"korean": "겨우 이 정도인가? 주인님을 막을 수 없다. 너희는 영원히 사막에 갇힐 것이다.",
						"english": "Is this all you've got? You cannot stop my master. You will be trapped in the desert forever.",
						"japanese": "これだけか？ 主人様を止めることはできない。お前たちは永遠に砂漠に閉じ込められるだろう。",
						"chinese": "就这点本事吗？你们无法阻止主人。你们将永远被困在沙漠中。",
						"french": "N'est-ce que ça ? Vous ne pouvez pas arrêter mon maître. Vous serez piégés dans le désert pour toujours.",
						"spanish": "¿Eso es todo lo que tienes? No puedes detener a mi amo. Estarás atrapado en el desierto para siempre.",
						"vietnamese": "Chỉ đến thế thôi sao? Ngươi không thể ngăn cản chủ nhân của ta. Ngươi sẽ bị mắc kẹt trong sa mạc mãi mãi.",
						"thai": "แค่นี้เองเหรอ? เจ้าหยุดนายท่านของข้าไม่ได้ เจ้าจะต้องติดอยู่ในทะเลทรายตลอดไป",
						"hindi": "बस इतना ही है? तुम मेरे मालिक को रोक नहीं सकते। तुम हमेशा के लिए रेगिस्तान में फंस जाओगे।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "젠장… 아직… 끝나지 않았어! 다시 일어설 거야!",
						"english": "Damn it... It's not... over yet! I'll rise again!",
						"japanese": "くそっ…まだ…終わってない！ また立ち上がる！",
						"chinese": "该死……还没……结束！ 我会再次站起来！",
						"french": "Mince… Ce n'est pas… encore fini ! Je me relèverai !",
						"spanish": "¡Maldita sea… Esto no ha… terminado todavía! ¡Me levantaré de nuevo!",
						"vietnamese": "Chết tiệt… Vẫn chưa… kết thúc! Ta sẽ đứng dậy một lần nữa!",
						"thai": "ให้ตายสิ… ยัง… ไม่จบ! ข้าจะลุกขึ้นสู้อีกครั้ง!",
						"hindi": "धिक्कार है... यह अभी... खत्म नहीं हुआ है! मैं फिर से उठ खड़ा होऊंगा!"
					}
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "크… 이럴 리가… {random_boss}는… 실패하지 않아… 주인님의 계획은…",
						"english": "Ugh... This can't be... {random_boss} never... fails... My master's plan...",
						"japanese": "く… まさか… {random_boss}は… 失敗しない… 主の計画が…",
						"chinese": "呃……这不可能……{random_boss}从不……失败……主人的计划……",
						"french": "Ugh... Ce n'est pas possible... {random_boss} ne... échoue jamais... Le plan de mon maître...",
						"spanish": "Ugh... Esto no puede ser... {random_boss} nunca... falla... El plan de mi maestro...",
						"vietnamese": "Khụ... Không thể nào... {random_boss} không... thất bại... Kế hoạch của chủ nhân...",
						"thai": "อึก... ไม่จริง... {random_boss} ไม่เคย... ล้มเหลว... แผนการของนายท่าน...",
						"hindi": "उह... ऐसा नहीं हो सकता... {random_boss} कभी... असफल नहीं होता... मेरे मालिक की योजना..."
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "결국 쓰러뜨렸어. 하지만 이건 시작에 불과해.",
						"english": "Finally defeated. But this is just the beginning.",
						"japanese": "ついに倒した。だが、これは始まりに過ぎない。",
						"chinese": "终于打败了。但这仅仅是个开始。",
						"french": "Enfin vaincu. Mais ce n'est que le début.",
						"spanish": "Finalmente derrotado. Pero esto es solo el principio.",
						"vietnamese": "Cuối cùng đã đánh bại. Nhưng đây chỉ là khởi đầu.",
						"thai": "ในที่สุดก็กำจัดได้แล้ว แต่นี่เป็นเพียงจุดเริ่มต้นเท่านั้น",
						"hindi": "आखिरकार हरा दिया। लेकिन यह तो बस शुरुआत है।"
					}
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "쓰러진 중간 보스. 그러나 그 뒤에서 느껴지는 더 거대한 그림자. Jian Li의 조작은 끝나지 않았다.",
						"english": "The mid-boss falls. Yet, a greater shadow looms behind. Jian Li's manipulations are far from over.",
						"japanese": "倒れた中ボス。しかし、その背後にはより巨大な影が。Jian Liの策略はまだ終わっていない。",
						"chinese": "中级头目倒下了。然而，其背后却能感受到更巨大的阴影。Jian Li的操纵尚未结束。",
						"french": "Le boss intermédiaire tombe. Pourtant, une ombre plus grande se profile derrière. Les machinations de Jian Li sont loin d'être terminées.",
						"spanish": "El jefe intermedio cae. Sin embargo, una sombra más grande se cierne detrás. Las manipulaciones de Jian Li no han terminado.",
						"vietnamese": "Boss giữa đã ngã xuống. Tuy nhiên, một bóng đen lớn hơn hiện hữu phía sau. Âm mưu của Jian Li chưa kết thúc.",
						"thai": "บอสรองล้มลง ทว่าเงาที่ใหญ่กว่ากลับคืบคลานเข้ามาจากเบื้องหลัง การบงการของ Jian Li ยังไม่สิ้นสุด",
						"hindi": "मध्य-बॉस गिर गया। फिर भी, एक बड़ी छाया पीछे मंडरा रही है। जियान ली की चालें अभी खत्म नहीं हुई हैं।"
					}
				},
				{
					"content": {
						"korean": "복수의 칼날은 더 깊이 파고들고, 사막의 심장은 점점 더 위험하게 요동친다.",
						"english": "The blade of vengeance cuts deeper, and the desert's heart beats more dangerously.",
						"japanese": "復讐の刃はさらに深く突き刺さり、砂漠の心臓はますます危険に脈動する。",
						"chinese": "复仇之刃刺得更深，沙漠之心跳动得愈发危险。",
						"french": "La lame de la vengeance s'enfonce plus profondément, et le cœur du désert bat de manière de plus en plus dangereuse.",
						"spanish": "La hoja de la venganza corta más profundo, y el corazón del desierto late de forma cada vez más peligrosa.",
						"vietnamese": "Lưỡi dao báo thù đâm sâu hơn, và trái tim sa mạc đập loạn nhịp nguy hiểm hơn.",
						"thai": "คมดาบแห่งการแก้แค้นบาดลึกยิ่งขึ้น และใจกลางทะเลทรายก็เต้นระรัวอย่างอันตรายยิ่งขึ้น",
						"hindi": "बदले की तलवार और गहरी कटती है, और रेगिस्तान का दिल और खतरनाक तरीके से धड़कता है।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "모래 폭풍이 몰아치는 깊은 사구의 중심. 거대한 그림자가 모습을 드러냈다.",
						"english": "At the heart of deep dunes, ravaged by sandstorms, a colossal shadow emerged.",
						"japanese": "砂嵐が吹き荒れる深い砂丘の中心で、巨大な影が姿を現した。",
						"chinese": "在沙尘暴肆虐的深沙丘中心，一个巨大的身影显现出来。",
						"french": "Au cœur des dunes profondes, ravagées par les tempêtes de sable, une ombre colossale a émergé.",
						"spanish": "En el corazón de las dunas profundas, azotadas por tormentas de arena, una sombra colosal emergió.",
						"vietnamese": "Giữa trung tâm cồn cát sâu thẳm, nơi bão cát hoành hành, một cái bóng khổng lồ xuất hiện.",
						"thai": "ณ ใจกลางเนินทรายลึก ที่พายุทรายพัดกระหน่ำ เงาขนาดมหึมาปรากฏขึ้น",
						"hindi": "रेगिस्तान के तूफानी टीलों के गहरे केंद्र में, एक विशाल छाया प्रकट हुई।"
					}
				},
				{
					"content": {
						"korean": "감히 여기까지 오다니… 미련한 인간들. 너희의 탐욕이 여기까지 이끌었군.",
						"english": "To dare come this far... Foolish mortals. Your greed has led you here.",
						"japanese": "よくもここまで来たな… 愚かな人間たちめ。お前たちの貪欲さがここまで導いたのだ。",
						"chinese": "竟敢来到这里……愚蠢的凡人。是你们的贪婪把你们引到这里。",
						"french": "Oser venir jusqu'ici... Mortels insensés. Votre cupidité vous a menés ici.",
						"spanish": "¡Se atrevieron a llegar hasta aquí!... Mortales necios. Su codicia los trajo.",
						"vietnamese": "Dám đến tận đây... Những kẻ phàm tục ngu ngốc. Lòng tham của các ngươi đã dẫn lối đến đây.",
						"thai": "กล้าดียังไงถึงมาถึงที่นี่... มนุษย์โง่เขลา ความโลภของพวกเจ้าพามาถึงที่นี่สินะ",
						"hindi": "यहां तक आने की हिम्मत की... मूर्ख नश्वर। तुम्हारे लालच ने तुम्हें यहां तक पहुंचाया है।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "네놈이 Jian Li의 하수인인가? 이 모든 함정들을 만든 자가?",
						"english": "Are you Jian Li's minion? The one who created all these traps?",
						"japanese": "お前がJian Liの手下か？この全ての罠を作り出した者が？",
						"chinese": "你就是Jian Li的仆从吗？制造了所有这些陷阱的人？",
						"french": "Es-tu le serviteur de Jian Li ? Celui qui a créé tous ces pièges ?",
						"spanish": "¿Eres el esbirro de Jian Li? ¿El que creó todas estas trampas?",
						"vietnamese": "Ngươi là tay sai của Jian Li sao? Kẻ đã tạo ra tất cả những cạm bẫy này?",
						"thai": "แกคือสมุนของ Jian Li งั้นรึ? ผู้ที่สร้างกับดักทั้งหมดนี้?",
						"hindi": "क्या तुम जियान ली के सेवक हो? वह जिसने ये सारे जाल बनाए हैं?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "나는 주인님의 의지를 따른다. 너희는 여기서 사구의 일부가 될 뿐이다.",
						"english": "I follow my master's will. You will merely become part of the dunes here.",
						"japanese": "私は主の意志に従う。お前たちはここで砂丘の一部となるだけだ。",
						"chinese": "我遵循主人的意志。你们在这里只会成为沙丘的一部分。",
						"french": "Je suis la volonté de mon maître. Vous ne ferez que devenir une partie des dunes ici.",
						"spanish": "Sigo la voluntad de mi maestro. Aquí solo se convertirán en parte de las dunas.",
						"vietnamese": "Ta tuân theo ý chí của chủ nhân. Các ngươi ở đây sẽ chỉ trở thành một phần của cồn cát mà thôi.",
						"thai": "ข้าปฏิบัติตามเจตนารมณ์ของนายท่าน พวกเจ้าก็จะได้เป็นแค่ส่วนหนึ่งของเนินทรายที่นี่เท่านั้น",
						"hindi": "मैं अपने मालिक की इच्छा का पालन करता हूं। तुम बस यहां टीलों का हिस्सा बन जाओगे।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"황금 사구. 모래폭풍이 모든 것을 집어삼키는 곳.",
			"유물의 단서를 쫓아 들어선 미지의 땅은 함정으로 가득했다.",
			"그리고 그 함정 속에는, 익숙한 그림자가 도사리고 있었다.",
			"우리는 그 그림자가 드리운 미궁 속으로 걸어 들어갔다."
		],
		"english": [
			"Golden Dunes. Where sandstorms devour all.",
			"Following ancient clues, we entered an unknown land, riddled with traps.",
			"And within those traps, a familiar shadow lurked.",
			"We walked into the labyrinth cast by that shadow."
		],
		"japanese": [
			"黄金の砂丘。砂嵐が全てを飲み込む場所。",
			"遺物の手がかりを追って足を踏み入れた未知の地は、罠だらけだった。",
			"そしてその罠の中には、見慣れた影が潜んでいた。",
			"私たちはその影が差す迷宮へと足を踏み入れた。"
		],
		"chinese": [
			"黄金沙丘。沙尘暴吞噬一切之地。",
			"追寻遗物线索，踏入的未知之地陷阱密布。",
			"而在那些陷阱中，一个熟悉的影子潜伏着。",
			"我们走进了那道影子笼罩的迷宫。"
		],
		"french": [
			"Dunes dorées. Là où les tempêtes de sable dévorent tout.",
			"Sur les traces d'artefacts, nous pénétrâmes une terre inconnue, pleine de pièges.",
			"Et parmi ces pièges, une ombre familière se cachait.",
			"Nous nous engouffrâmes dans le labyrinthe projeté par cette ombre."
		],
		"spanish": [
			"Dunas Doradas. Donde las tormentas de arena devoran todo.",
			"Siguiendo pistas de reliquias, entramos en una tierra desconocida, plagada de trampas.",
			"Y entre esas trampas, una sombra familiar acechaba.",
			"Caminamos hacia el laberinto proyectado por esa sombra."
		],
		"vietnamese": [
			"Cồn cát vàng. Nơi bão cát nuốt chửng mọi thứ.",
			"Theo dấu vết cổ vật, chúng tôi bước vào vùng đất vô danh đầy cạm bẫy.",
			"Và giữa những cạm bẫy đó, một bóng hình quen thuộc ẩn nấp.",
			"Chúng tôi bước vào mê cung do bóng hình đó tạo ra."
		],
		"thai": [
			"เนินทรายทองคำ. ที่ซึ่งพายุทรายกลืนกินทุกสิ่ง.",
			"ตามรอยเบาะแสโบราณ เราก้าวเข้าสู่ดินแดนที่ไม่รู้จัก ซึ่งเต็มไปด้วยกับดัก.",
			"และภายในกับดักเหล่านั้น มีเงาที่คุ้นเคยซุ่มซ่อนอยู่.",
			"เราเดินเข้าสู่เขาวงกตที่เงาเหล่านั้นทอดทิ้ง."
		],
		"hindi": [
			"स्वर्ण टीले. जहाँ रेत के तूफान सब कुछ निगल जाते हैं。",
			"प्राचीन सुरागों का पीछा करते हुए, हम एक अनजान भूमि में दाखिल हुए, जो जाल से भरी थी।",
			"और उन जालों के भीतर, एक जानी-पहचानी परछाई छिपी थी।",
			"हम उस परछाई द्वारा बनाए गए भूलभुलैया में चले गए।"
		]
	}
} as const;
