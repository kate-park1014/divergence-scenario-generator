export const scenario_forest_reginavesania_30_01 = {
	"scenario_id": "forest_reginavesania_30_01",
	"order": 1,
	"act": "intro",
	"theme": "forest",
	"actors": {
		"hazel": {
			"id": "mon_e2c11115-b300-4f32-b289-9ad088dc0273",
			"name": {
				"korean": "헤이즐",
				"english": "Hazel",
				"japanese": "ヘイゼル",
				"chinese": "榛",
				"french": "Hazel",
				"spanish": "Hazel",
				"vietnamese": "Hazel",
				"thai": "เฮเซล",
				"hindi": "हेज़ल"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/39f75a47-c622-45fe-04fd-a8bac1f93a00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/fc97b5d5-7a1d-4646-bedc-47a40ea70a00/public"
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
					"type": "speech",
					"content": {
						"korean": "숲은 병들었다. 이끼가 모든 것을 덮었다.",
						"english": "The forest is sick. Moss covers everything.",
						"japanese": "森は病んでいる。苔が全てを覆った。",
						"chinese": "森林病了。苔藓覆盖了一切。",
						"french": "La forêt est malade. La mousse recouvre tout.",
						"spanish": "El bosque está enfermo. El musgo lo cubre todo.",
						"vietnamese": "Rừng bệnh rồi. Rêu phủ kín mọi thứ.",
						"thai": "ป่าป่วยแล้ว ตะไคร่น้ำปกคลุมไปทั่ว",
						"hindi": "जंगल बीमार है। काई सब कुछ ढक रही है।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "이게… 숲을 치유하는 의식?",
						"english": "Is this... the ritual to heal the forest?",
						"japanese": "これが… 森を癒す儀式？",
						"chinese": "这就是……治愈森林的仪式？",
						"french": "Est-ce... le rituel pour guérir la forêt ?",
						"spanish": "¿Es este... el ritual para sanar el bosque?",
						"vietnamese": "Đây có phải... nghi lễ chữa lành rừng không?",
						"thai": "นี่คือ... พิธีกรรมรักษาป่าหรือ?",
						"hindi": "क्या यह... जंगल को ठीक करने का अनुष्ठान है?"
					},
					"type": "speech"
				},
				{
					"speaker": "hazel",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "hazel",
					"emotion": "happy",
					"content": {
						"korean": "네! 여왕님의 자비로운 의식이에요!",
						"english": "Yes! It's Her Majesty's benevolent ritual!",
						"japanese": "はい！女王様の慈悲深い儀式です！",
						"chinese": "是的！这是女王陛下的仁慈仪式！",
						"french": "Oui ! C'est le rituel bienveillant de Sa Majesté !",
						"spanish": "¡Sí! ¡Es el benevolente ritual de Su Majestad!",
						"vietnamese": "Vâng! Đó là nghi lễ nhân từ của Nữ hoàng!",
						"thai": "ใช่ค่ะ! เป็นพิธีกรรมอันเมตตาขององค์ราชินี!",
						"hindi": "हाँ! यह महारानी का परोपकारी अनुष्ठान है!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "hazel",
					"content": {
						"korean": "저 헤이즐이 돕겠어요. 숲의 에너지를 모으는 숭고한 여정이죠.",
						"english": "I, Hazel, will help. It's a noble journey to gather the forest's energy.",
						"japanese": "私ヘイゼルがお手伝いします。森のエネルギーを集める崇高な旅です。",
						"chinese": "我，榛，会帮忙的。这是一场收集森林能量的崇高旅程。",
						"french": "Moi, Hazel, je vais aider. C'est un noble voyage pour collecter l'énergie de la forêt.",
						"spanish": "Yo, Hazel, ayudaré. Es un noble viaje para recolectar la energía del bosque.",
						"vietnamese": "Tôi, Hazel, sẽ giúp. Đây là một hành trình cao cả để thu thập năng lượng của rừng.",
						"thai": "ดิฉันเฮเซลจะช่วยค่ะ นี่คือการเดินทางอันสูงส่งเพื่อรวบรวมพลังงานของป่า",
						"hindi": "मैं, हेज़ल, मदद करूँगी। यह जंगल की ऊर्जा एकत्र करने की एक महान यात्रा है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "(숲을 둘러본다)",
						"english": "(Looks around the forest)",
						"japanese": "(森を見回す)",
						"chinese": "(环顾森林)",
						"french": "(Regarde autour de la forêt)",
						"spanish": "(Mira alrededor del bosque)",
						"vietnamese": "(Nhìn quanh rừng)",
						"thai": "(มองไปรอบ ๆ ป่า)",
						"hindi": "(जंगल के चारों ओर देखता है)"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "happy",
					"content": {
						"korean": "어서 가요! 여왕님께서 기다리실 거예요.",
						"english": "Let's go! Her Majesty will be waiting.",
						"japanese": "さあ、行きましょう！女王様がお待ちです。",
						"chinese": "快走吧！女王陛下会在等候的。",
						"french": "Allons-y ! Sa Majesté nous attendra.",
						"spanish": "¡Vamos! Su Majestad estará esperando.",
						"vietnamese": "Đi thôi! Nữ hoàng sẽ đang chờ.",
						"thai": "ไปกันเลย! องค์ราชินีจะรออยู่",
						"hindi": "चलो चलें! महारानी प्रतीक्षा कर रही होंगी।"
					},
					"speaker": "hazel",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "hazel",
					"action": "enter",
					"spot": [
						2,
						4
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "숲은 더욱 깊어졌다. 기이한 침묵이 감돌았다.",
						"english": "The forest deepened. A strange silence fell.",
						"japanese": "森はさらに深まった。奇妙な沈黙が漂っていた。",
						"chinese": "森林更深了。一股诡异的寂静笼罩着。",
						"french": "La forêt s'épaississait. Un étrange silence régnait.",
						"spanish": "El bosque se hizo más denso. Un silencio extraño se cernía.",
						"vietnamese": "Rừng càng sâu hơn. Một sự im lặng kỳ lạ bao trùm.",
						"thai": "ป่าลึกเข้าไปอีก ความเงียบงันแปลกประหลาดปกคลุม",
						"hindi": "जंगल और गहरा होता गया। एक अजीब खामोशी छा गई।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "저건… 변이된 식물인가?",
						"english": "Is that... a mutated plant?",
						"japanese": "あれは…変異した植物なのか？",
						"chinese": "那是…变异的植物吗？",
						"french": "C'est... une plante mutée ?",
						"spanish": "¿Es eso... una planta mutada?",
						"vietnamese": "Đó là... một loài cây đột biến sao?",
						"thai": "นั่นมัน…พืชกลายพันธุ์หรือเปล่า?",
						"hindi": "क्या वह... एक उत्परिवर्तित पौधा है?"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아, 저건… 의식을 위한 일시적인 변화예요!",
						"english": "Oh, that's... a temporary change for the ritual!",
						"japanese": "ああ、あれは…儀式のための一時的な変化ですよ！",
						"chinese": "啊，那是…为了仪式而进行的暂时变化！",
						"french": "Oh, ça... c'est un changement temporaire pour le rituel !",
						"spanish": "¡Oh, eso... es un cambio temporal para el ritual!",
						"vietnamese": "Ồ, đó là... một sự thay đổi tạm thời cho nghi lễ thôi!",
						"thai": "โอ้ นั่น…การเปลี่ยนแปลงชั่วคราวสำหรับพิธีกรรมค่ะ!",
						"hindi": "ओह, वह... अनुष्ठान के लिए एक अस्थायी परिवर्तन है!"
					},
					"emotion": "base",
					"speaker": "hazel"
				},
				{
					"speaker": "hazel",
					"content": {
						"korean": "여왕님의 뜻이니 걱정 마세요!",
						"english": "It's the Queen's will, don't worry!",
						"japanese": "女王様のご意思ですから、ご心配なく！",
						"chinese": "这是女王的旨意，别担心！",
						"french": "C'est la volonté de la Reine, ne vous inquiétez pas !",
						"spanish": "¡Es la voluntad de la Reina, no te preocupes!",
						"vietnamese": "Đó là ý muốn của Nữ hoàng, đừng lo lắng!",
						"thai": "เป็นพระประสงค์ขององค์ราชินี ไม่ต้องห่วงค่ะ!",
						"hindi": "यह रानी की इच्छा है, चिंता मत करो!"
					},
					"emotion": "happy",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "미묘한 부패 냄새와 함께 오팔빛 가루가 희미하게 보였다.",
						"english": "A subtle scent of decay lingered, and faint opal dust was visible.",
						"japanese": "微かな腐敗臭と共に、オパール色の粉がかすかに見えた。",
						"chinese": "伴随着一丝腐烂的气味，隐约可见蛋白石色的粉尘。",
						"french": "Une subtile odeur de putréfaction flottait, et une légère poussière opaline était visible.",
						"spanish": "Un sutil olor a putrefacción flotaba, y un tenue polvo opalino era visible.",
						"vietnamese": "Một mùi mục rữa thoang thoảng cùng với những hạt bụi màu ngọc mắt mèo lấp lánh.",
						"thai": "กลิ่นเน่าเปื่อยจางๆ คลุ้ง และเห็นผงสีโอปอลเรืองรองลางๆ",
						"hindi": "क्षय की एक सूक्ष्म गंध थी, और मंद ओपल धूल दिखाई दे रही थी।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "(불길한 예감…)",
						"english": "(An ominous feeling...)",
						"japanese": "(不吉な予感…)",
						"chinese": "(不祥的预感…)",
						"french": "(Un pressentiment sinistre...)",
						"spanish": "(Un mal presentimiento...)",
						"vietnamese": "(Một điềm báo chẳng lành...)",
						"thai": "(ลางสังหรณ์ไม่ดี…)",
						"hindi": "(एक अशुभ भावना...)"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "hazel",
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "hazel",
					"content": {
						"korean": "이쪽이에요! 다음 에너지원은 저 너머에 있어요.",
						"english": "This way! The next energy source is beyond.",
						"japanese": "こちらです！次のエネルギー源は、その先にありますよ。",
						"chinese": "这边！下一个能源就在那边。",
						"french": "Par ici ! La prochaine source d'énergie est au-delà.",
						"spanish": "¡Por aquí! La próxima fuente de energía está más allá.",
						"vietnamese": "Lối này! Nguồn năng lượng tiếp theo ở đằng kia.",
						"thai": "ทางนี้ค่ะ! แหล่งพลังงานต่อไปอยู่สุดทางโน้นค่ะ",
						"hindi": "इस तरफ! अगला ऊर्जा स्रोत उधर है।"
					},
					"emotion": "happy"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "숲이… 점점 더 이상해져.",
						"english": "The forest... is getting stranger.",
						"japanese": "森が…どんどんおかしくなっていく。",
						"chinese": "森林…越来越奇怪了。",
						"french": "La forêt... devient de plus en plus étrange.",
						"spanish": "El bosque... se está volviendo más extraño.",
						"vietnamese": "Rừng... ngày càng kỳ lạ.",
						"thai": "ป่า…ยิ่งแปลกขึ้นเรื่อยๆ",
						"hindi": "जंगल और अजीब होता जा रहा है।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "hazel",
					"emotion": "base",
					"content": {
						"korean": "치유 과정의 일부예요! 더 큰 아름다움을 위한 거죠.",
						"english": "It's part of the healing process! For greater beauty.",
						"japanese": "癒やしの過程の一部ですよ！より大きな美しさのためです。",
						"chinese": "这是治愈过程的一部分！为了更伟大的美。",
						"french": "Ça fait partie du processus de guérison ! Pour une plus grande beauté.",
						"spanish": "¡Es parte del proceso de curación! Para una mayor belleza.",
						"vietnamese": "Đó là một phần của quá trình chữa lành! Vì một vẻ đẹp vĩ đại hơn.",
						"thai": "เป็นส่วนหนึ่งของกระบวนการฟื้นฟูค่ะ! เพื่อความงามที่ยิ่งใหญ่กว่า",
						"hindi": "यह उपचार प्रक्रिया का हिस्सा है! अधिक सुंदरता के लिए।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"emotion": "sad",
					"content": {
						"korean": "정말… 그럴까?",
						"english": "Really... is that so?",
						"japanese": "本当に…そうなのかな？",
						"chinese": "真的…会是那样吗？",
						"french": "Vraiment... est-ce le cas ?",
						"spanish": "¿De verdad... será así?",
						"vietnamese": "Thật sự... là vậy sao?",
						"thai": "จริงเหรอ…จะเป็นอย่างนั้นเหรอ?",
						"hindi": "सचमुच... क्या ऐसा है?"
					}
				},
				{
					"content": {
						"korean": "물론이죠! 여왕님은 우리에게 희망을 주셨어요!",
						"english": "Of course! The Queen has given us hope!",
						"japanese": "もちろん！女王様は私たちに希望を与えてくださいました！",
						"chinese": "当然！女王陛下赐予了我们希望！",
						"french": "Bien sûr ! La Reine nous a donné de l'espoir !",
						"spanish": "¡Por supuesto! ¡La Reina nos ha dado esperanza!",
						"vietnamese": "Tất nhiên rồi! Nữ hoàng đã ban cho chúng ta hy vọng!",
						"thai": "แน่นอน! ราชินีประทานความหวังให้เรา!",
						"hindi": "बेशक! रानी ने हमें आशा दी है!"
					},
					"emotion": "happy",
					"speaker": "hazel",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "hazel",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						1,
						3
					]
				},
				{
					"emotion": "base",
					"content": {
						"korean": "숲의 중심부에 가까워질수록, 생명 없는 유적들이 나타났다.",
						"english": "As we drew closer to the heart of the forest, lifeless ruins appeared.",
						"japanese": "森の中心に近づくにつれて、生命のない遺跡が現れた。",
						"chinese": "随着我们越来越接近森林的中心，毫无生气的遗迹出现了。",
						"french": "En nous approchant du cœur de la forêt, des ruines sans vie apparurent.",
						"spanish": "A medida que nos acercábamos al corazón del bosque, aparecieron ruinas sin vida.",
						"vietnamese": "Càng đến gần trung tâm khu rừng, những tàn tích vô hồn càng hiện ra.",
						"thai": "ยิ่งเข้าใกล้ใจกลางป่ามากเท่าไหร่ ซากปรักหักพังที่ไร้ชีวิตก็ยิ่งปรากฏขึ้น",
						"hindi": "जैसे-जैसे हम जंगल के केंद्र के करीब आते गए, निर्जीव खंडहर दिखाई दिए।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "hazel",
					"emotion": "happy",
					"content": {
						"korean": "여기까지 왔으니 다 와가는 거예요!",
						"english": "We've come this far, we're almost there!",
						"japanese": "ここまで来たんだから、もうすぐよ！",
						"chinese": "我们都走到这里了，快到了！",
						"french": "Nous sommes venus si loin, nous y sommes presque !",
						"spanish": "¡Hemos llegado hasta aquí, ya casi estamos!",
						"vietnamese": "Đã đến đây rồi, sắp tới nơi rồi!",
						"thai": "มาถึงนี่แล้ว ก็ใกล้จะถึงแล้ว!",
						"hindi": "हम इतनी दूर आ गए हैं, बस पहुंचने ही वाले हैं!"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "유적이… 이끼에 잠식됐어.",
						"english": "The ruins... are consumed by moss.",
						"japanese": "遺跡が…苔に侵食されている。",
						"chinese": "遗迹…被苔藓侵蚀了。",
						"french": "Les ruines... sont envahies par la mousse.",
						"spanish": "Las ruinas... están cubiertas de musgo.",
						"vietnamese": "Di tích... bị rêu phong xâm chiếm rồi.",
						"thai": "ซากปรักหักพัง... ถูกมอสปกคลุมไปหมดแล้ว",
						"hindi": "खंडहर... काई से ढके हुए हैं।"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "hazel",
					"content": {
						"korean": "새로운 시작을 위한… 정화 과정일 거예요.",
						"english": "It must be a purification process... for a new beginning.",
						"japanese": "新しい始まりのための…浄化の過程でしょう。",
						"chinese": "这一定是…为了新开始的净化过程。",
						"french": "Ce doit être un processus de purification... pour un nouveau départ.",
						"spanish": "Debe ser un proceso de purificación... para un nuevo comienzo.",
						"vietnamese": "Chắc là quá trình thanh lọc... cho một khởi đầu mới.",
						"thai": "มันคงเป็นกระบวนการชำระล้าง... เพื่อการเริ่มต้นใหม่",
						"hindi": "यह एक नई शुरुआत के लिए... शुद्धि की प्रक्रिया होगी।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "뭔가 잘못된 것 같아…",
						"english": "Something feels wrong...",
						"japanese": "何かおかしい気がする…",
						"chinese": "感觉有些不对劲…",
						"french": "Quelque chose ne va pas...",
						"spanish": "Algo no va bien...",
						"vietnamese": "Có gì đó không ổn rồi...",
						"thai": "รู้สึกเหมือนมีอะไรผิดปกติ...",
						"hindi": "कुछ तो गलत लग रहा है..."
					},
					"emotion": "sad",
					"speaker": "character_2",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "hazel",
					"content": {
						"korean": "아니에요! 우리는 여왕님의 뜻을 따르는 것뿐이에요!",
						"english": "No! We are only following the Queen's will!",
						"japanese": "いいえ！私たちは女王様のお言葉に従っているだけです！",
						"chinese": "不！我们只是在遵从女王陛下的旨意！",
						"french": "Non ! Nous ne faisons que suivre la volonté de la Reine !",
						"spanish": "¡No! ¡Solo estamos siguiendo la voluntad de la Reina!",
						"vietnamese": "Không! Chúng ta chỉ đang tuân theo ý muốn của Nữ hoàng thôi!",
						"thai": "ไม่! เราแค่ทำตามพระประสงค์ของราชินีเท่านั้น!",
						"hindi": "नहीं! हम तो बस रानी की इच्छा का पालन कर रहे हैं!"
					},
					"emotion": "angry"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "크윽…! 겨우 이 정도의… 힘으로…",
						"english": "Ugh...! With just this much... power...?",
						"japanese": "くっ…！たかがこれしきの…力で…",
						"chinese": "呃…！就凭这点…力量…",
						"french": "Urgh...! Avec si peu... de pouvoir...?",
						"spanish": "¡Argh...! ¿Con tan poca... fuerza...?",
						"vietnamese": "Khụ...! Chỉ với ngần này... sức mạnh sao...?",
						"thai": "อึก...! แค่พลังแค่นี้...",
						"hindi": "उफ़...! बस इतनी सी... शक्ति से...?"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "끝났어.",
						"english": "It's over.",
						"japanese": "終わった。",
						"chinese": "结束了。",
						"french": "C'est fini.",
						"spanish": "Se acabó.",
						"vietnamese": "Xong rồi.",
						"thai": "จบแล้ว.",
						"hindi": "खत्म हो गया।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "괴물은 쓰러졌지만, 숲의 고통은 끝나지 않았다.",
						"english": "The monster fell, but the forest's suffering did not end.",
						"japanese": "怪物は倒れたが、森の苦痛は終わらなかった。",
						"chinese": "怪物倒下了，但森林的痛苦并未结束。",
						"french": "Le monstre est tombé, mais la souffrance de la forêt ne s'est pas arrêtée.",
						"spanish": "El monstruo cayó, pero el sufrimiento del bosque no terminó.",
						"vietnamese": "Quái vật đã ngã xuống, nhưng nỗi đau của khu rừng vẫn chưa kết thúc.",
						"thai": "สัตว์ประหลาดล้มลง แต่ความทุกข์ทรมานของป่ายังไม่สิ้นสุด.",
						"hindi": "राक्षस गिर गया, पर जंगल का दर्द खत्म नहीं हुआ।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…여왕은 뭘 하고 있는 거지?",
						"english": "...What is the Queen doing?",
						"japanese": "…女王は何をしている？",
						"chinese": "……女王在做什么？",
						"french": "...Que fait la Reine ?",
						"spanish": "...¿Qué está haciendo la Reina?",
						"vietnamese": "...Nữ hoàng đang làm gì vậy?",
						"thai": "...ราชินีกำลังทำอะไรอยู่?",
						"hindi": "...रानी क्या कर रही है?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "오팔빛 가루가 바람에 흩어졌다. 불길한 예감은 더욱 짙어졌다.",
						"english": "Opal dust scattered in the wind. The ominous feeling deepened.",
						"japanese": "オパール色の粉が風に舞った。不吉な予感はさらに濃くなった。",
						"chinese": "蛋白石色的粉末随风散去。不祥的预感愈发浓烈。",
						"french": "La poussière opaline se dispersa dans le vent. Le pressentiment sinistre s'épaissit.",
						"spanish": "El polvo opalino se dispersó con el viento. La premonición ominosa se hizo más intensa.",
						"vietnamese": "Bụi màu ngọc mắt mèo bay tán loạn trong gió. Dự cảm chẳng lành càng thêm rõ rệt.",
						"thai": "ผงสีโอปอลปลิวไปตามลม. ลางสังหรณ์ร้ายยิ่งเข้มข้นขึ้น.",
						"hindi": "ओपल धूल हवा में बिखर गई। अशुभ भावना और गहरी हो गई।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "압도적인 힘에 탐험대는 무릎 꿇었다.",
						"english": "Overwhelmed by immense power, the expedition fell to its knees.",
						"japanese": "圧倒的な力に、探検隊は膝を屈した。",
						"chinese": "在压倒性的力量面前，探险队跪下了。",
						"french": "Submergée par une puissance écrasante, l'expédition s'agenouilla.",
						"spanish": "Abrumada por una fuerza abrumadora, la expedición cayó de rodillas.",
						"vietnamese": "Trước sức mạnh áp đảo, đoàn thám hiểm đã quỳ gối.",
						"thai": "ด้วยพลังที่ท่วมท้น คณะสำรวจจึงคุกเข่าลง.",
						"hindi": "अपार शक्ति से अभिभूत होकर, अभियान दल घुटनों पर आ गया।"
					},
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "하찮은 것들. 너희는 그저… 의식의 일부일 뿐.",
						"english": "Insignificant beings. You are merely... a part of the ritual.",
						"japanese": "取るに足らない者たち。お前たちはただ…儀式の一部に過ぎない。",
						"chinese": "渺小的存在。你们不过是……仪式的一部分。",
						"french": "Êtres insignifiants. Vous n'êtes que... une partie du rituel.",
						"spanish": "Seres insignificantes. Sois meramente... parte del ritual.",
						"vietnamese": "Những kẻ tầm thường. Ngươi chỉ là... một phần của nghi lễ.",
						"thai": "พวกไร้ค่า. เจ้าเป็นแค่... ส่วนหนึ่งของพิธีกรรมเท่านั้น.",
						"hindi": "तुच्छ प्राणी। तुम बस... अनुष्ठान का एक हिस्सा मात्र हो।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아직… 끝나지 않았어!",
						"english": "It's not... over yet!",
						"japanese": "まだ…終わっていない！",
						"chinese": "还没……结束！",
						"french": "Ce n'est pas... encore fini !",
						"spanish": "¡Todavía no... ha terminado!",
						"vietnamese": "Vẫn... chưa kết thúc đâu!",
						"thai": "ยัง... ไม่จบหรอก!",
						"hindi": "अभी… खत्म नहीं हुआ है!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "다시 와라. 그때도… 똑같을 테니.",
						"english": "Come again. It will be... the same then.",
						"japanese": "また来るがいい。その時も…同じ結果になるだろうからな。",
						"chinese": "再来吧。到那时……结果还是一样。",
						"french": "Revenez. Ce sera... la même chose.",
						"spanish": "Volved. Entonces... será lo mismo.",
						"vietnamese": "Hãy trở lại đi. Khi đó... cũng sẽ giống vậy thôi.",
						"thai": "กลับมาอีกสิ. ตอนนั้น... ก็จะเหมือนเดิม.",
						"hindi": "फिर आओ। तब भी… वही होगा।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				}
			],
			"dialogue": [
				{
					"action": "enter",
					"speaker": "hazel",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						2
					]
				},
				{
					"content": {
						"korean": "저… 저기… 에너지가…",
						"english": "Th-there... the energy...",
						"japanese": "あ…あれ…エネルギーが…",
						"chinese": "那…那里…能量…",
						"french": "L-là... l'énergie...",
						"spanish": "E-esa... la energía...",
						"vietnamese": "K-kia... năng lượng...",
						"thai": "นั่น... นั่น... พลังงาน...",
						"hindi": "व-वहां... ऊर्जा..."
					},
					"emotion": "sad",
					"speaker": "hazel",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 숲의 중심부를 뒤덮었다.",
						"english": "A colossal shadow enveloped the heart of the forest.",
						"japanese": "巨大な影が森の中心を覆った。",
						"chinese": "巨大的阴影笼罩了森林的中心。",
						"french": "Une ombre colossale enveloppa le cœur de la forêt.",
						"spanish": "Una sombra colosal envolvió el corazón del bosque.",
						"vietnamese": "Một cái bóng khổng lồ bao trùm trung tâm khu rừng.",
						"thai": "เงาขนาดมหึมาปกคลุมใจกลางป่า",
						"hindi": "एक विशाल छाया ने जंगल के केंद्र को घेर लिया।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "감히… 나의 의식을 방해하려는가.",
						"english": "How dare you... interrupt my ritual.",
						"japanese": "よくも…私の儀式を邪魔したな。",
						"chinese": "竟敢…打扰我的仪式。",
						"french": "Comment oses-tu... interrompre mon rituel.",
						"spanish": "Cómo te atreves... a interrumpir mi ritual.",
						"vietnamese": "Ngươi dám... phá vỡ nghi lễ của ta sao.",
						"thai": "บังอาจ... ขัดขวางพิธีกรรมของข้าหรือไง",
						"hindi": "तुम्हारी हिम्मत कैसे हुई... मेरी रस्म में बाधा डालने की।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "hazel",
					"content": {
						"korean": "(두려워하며) 이게… 아니야…",
						"english": "(Fearfully) This... isn't right...",
						"japanese": "(怯えながら)これは…違う…",
						"chinese": "(恐惧地)这…不对劲…",
						"french": "(Avec peur) Ce... ce n'est pas ça...",
						"spanish": "(Con miedo) Esto... no está bien...",
						"vietnamese": "(Sợ hãi) Cái này... không phải...",
						"thai": "(ด้วยความกลัว) นี่... ไม่ใช่...",
						"hindi": "(भयभीत होकर) यह... सही नहीं है..."
					},
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "(random_boss를 노려본다)",
						"english": "(Glares at random_boss)",
						"japanese": "(random_bossを睨みつける)",
						"chinese": "(怒视random_boss)",
						"french": "(Fixe random_boss du regard)",
						"spanish": "(Mira con desprecio a random_boss)",
						"vietnamese": "(Liếc nhìn random_boss)",
						"thai": "(จ้องมอง random_boss)",
						"hindi": "(random_boss को घूरता है)"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "어리석은 자들. 이 숲은… 내 것이다.",
						"english": "Fools. This forest... is mine.",
						"japanese": "愚か者ども。この森は…私のものだ。",
						"chinese": "愚蠢的家伙。这片森林…是我的。",
						"french": "Imbéciles. Cette forêt... est à moi.",
						"spanish": "Necios. Este bosque... es mío.",
						"vietnamese": "Lũ ngốc. Khu rừng này... là của ta.",
						"thai": "พวกโง่เง่า. ป่านี้... เป็นของข้า.",
						"hindi": "मूर्खों। यह जंगल... मेरा है।"
					}
				},
				{
					"speaker": "hazel",
					"action": "exit",
					"duration_ms": 400,
					"type": "direction",
					"direction": "down"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "우리가 멈출 거야.",
						"english": "We'll stop you.",
						"japanese": "私たちが止める。",
						"chinese": "我们会阻止你。",
						"french": "Nous t'arrêterons.",
						"spanish": "Te detendremos.",
						"vietnamese": "Chúng ta sẽ ngăn lại.",
						"thai": "เราจะหยุดมัน.",
						"hindi": "हम तुम्हें रोकेंगे।"
					},
					"emotion": "angry",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"병들어가는 이끼 낀 숲.",
			"여왕의 의식. 유일한 희망이라 했다.",
			"빛을 따라 걷는 숭고한 여정.",
			"그러나 숲은 침묵하며, 불길한 예감을 속삭였다."
		],
		"english": [
			"A sick, moss-covered forest.",
			"The Queen's ritual. Said to be the only hope.",
			"A noble journey, following the light.",
			"Yet the forest remained silent, whispering ominous premonitions."
		],
		"japanese": [
			"病みゆく苔むした森。",
			"女王の儀式。唯一の希望とされた。",
			"光を辿る崇高な旅。",
			"しかし森は沈黙し、不吉な予感を囁いた。"
		],
		"chinese": [
			"生病的苔藓森林。",
			"女王的仪式。据说那是唯一的希望。",
			"追随光明的崇高旅程。",
			"然而森林沉默着，低语着不祥的预感。"
		],
		"french": [
			"Une forêt malade et moussue.",
			"Le rituel de la Reine. Le seul espoir, disait-on.",
			"Un noble voyage, suivant la lumière.",
			"Pourtant, la forêt resta silencieuse, murmurant des pressentiments inquiétants."
		],
		"spanish": [
			"Un bosque enfermo y cubierto de musgo.",
			"El ritual de la Reina. Dijeron que era la única esperanza.",
			"Un viaje noble, siguiendo la luz.",
			"Sin embargo, el bosque permaneció en silencio, susurrando presagios ominosos."
		],
		"vietnamese": [
			"Rừng bệnh tật, rêu phong.",
			"Nghi lễ của Nữ hoàng. Được cho là hy vọng duy nhất.",
			"Một hành trình cao cả, theo ánh sáng.",
			"Tuy nhiên, rừng vẫn im lặng, thì thầm những điềm báo gở."
		],
		"thai": [
			"ป่าป่วยที่ปกคลุมไปด้วยตะไคร่น้ำ",
			"พิธีกรรมของราชินี ว่ากันว่าเป็นความหวังเดียว",
			"การเดินทางอันสูงส่งตามแสงสว่าง",
			"ทว่าป่ายังคงเงียบงัน กระซิบถึงลางร้าย"
		],
		"hindi": [
			"एक बीमार, काई से ढका जंगल।",
			"रानी का अनुष्ठान। कहा जाता था कि यही एकमात्र आशा है।",
			"प्रकाश का अनुसरण करती एक महान यात्रा।",
			"फिर भी जंगल शांत रहा, अशुभ पूर्वज्ञान फुसफुसाते हुए।"
		]
	}
} as const;
