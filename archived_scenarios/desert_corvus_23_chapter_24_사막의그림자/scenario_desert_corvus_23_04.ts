export const scenario_desert_corvus_23_04 = {
	"scenario_id": "desert_corvus_23_04",
	"order": 4,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"dune": {
			"id": "mon_fc976b75-f009-4bf2-b660-a3053c95d668",
			"name": {
				"korean": "듄",
				"english": "Dune",
				"japanese": "デューン",
				"chinese": "沙丘",
				"french": "Dune",
				"spanish": "Dune",
				"vietnamese": "Dune",
				"thai": "ดูน",
				"hindi": "ड्यून"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/7568ec11-0329-44b4-740a-71b25ef62400/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/ba7095b5-0d99-40bd-1155-b57701c00f00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"그림자 제단. 고대 정보망의 심장.",
			"사막의 모래가 모든 것을 집어삼키려 할 때,",
			"관리인 듄은 선택을 강요했다.",
			"진실은 보이지 않는 실로 조종되고 있었다."
		],
		"english": [
			"Shadow Altar. Heart of the ancient network.",
			"As the desert sands threatened to engulf all,",
			"The caretaker, Dune, forced a choice.",
			"Truth was manipulated by unseen strings."
		],
		"japanese": [
			"影の祭壇。古代の情報網の心臓。",
			"砂漠の砂がすべてを飲み込もうとするとき、",
			"管理人デューンは、選択を迫った。",
			"真実は見えない糸で操られていた。"
		],
		"chinese": [
			"暗影祭坛。古代情报网的核心。",
			"当沙漠之沙即将吞噬一切时，",
			"管理员迪恩强迫做出选择。",
			"真相被无形的丝线操纵着。"
		],
		"french": [
			"L'Autel de l'Ombre. Le cœur de l'ancien réseau.",
			"Alors que les sables du désert menaçaient d'engloutir tout,",
			"Le gardien, Dune, imposa un choix.",
			"La vérité était manipulée par des fils invisibles."
		],
		"spanish": [
			"Altar de las Sombras. El corazón de la antigua red.",
			"Mientras las arenas del desierto amenazaban con engullirlo todo,",
			"El cuidador, Dune, forzó una elección.",
			"La verdad era manipulada por hilos invisibles."
		],
		"vietnamese": [
			"Bàn Thờ Bóng Tối. Trái tim của mạng lưới cổ đại.",
			"Khi cát sa mạc đe dọa nuốt chửng mọi thứ,",
			"Người quản lý, Dune, đã ép buộc một lựa chọn.",
			"Sự thật bị thao túng bởi những sợi dây vô hình."
		],
		"thai": [
			"แท่นบูชาเงา ใจกลางเครือข่ายโบราณ",
			"ขณะที่ทรายทะเลทรายกำลังจะกลืนกินทุกสิ่ง",
			"ผู้ดูแล ดิวน์ บังคับให้เลือก",
			"ความจริงถูกบงการด้วยสายใยที่มองไม่เห็น"
		],
		"hindi": [
			"छाया वेदी। प्राचीन नेटवर्क का हृदय।",
			"जब रेगिस्तान की रेत सब कुछ निगलने वाली थी,",
			"कार्यवाहक, ड्यून ने एक विकल्प पर मजबूर किया।",
			"सत्य को अदृश्य तारों से हेरफेर किया जा रहा था।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "고대 제단이 침묵 속에 서 있었다. 그림자가 모든 것을 감싸 안았다.",
						"english": "The ancient altar stood in silence. Shadows embraced all.",
						"japanese": "古代の祭壇は静寂の中に佇んでいた。影がすべてを包み込んだ。",
						"chinese": "古老的祭坛寂静地矗立着。阴影笼罩了一切。",
						"french": "L'ancien autel se dressait en silence. Les ombres enveloppaient tout.",
						"spanish": "El antiguo altar se erguía en silencio. Las sombras lo abrazaban todo.",
						"vietnamese": "Bàn thờ cổ xưa đứng trong im lặng. Bóng tối bao trùm tất cả.",
						"thai": "แท่นบูชาโบราณยืนสงบนิ่ง เงาปกคลุมทุกสิ่ง",
						"hindi": "प्राचीन वेदी खामोशी में खड़ी थी। छाया ने सब कुछ घेर लिया।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "여기가 그림자 제단인가.",
						"english": "Is this the Shadow Altar?",
						"japanese": "ここが影の祭壇か。",
						"chinese": "这里是暗影祭坛吗？",
						"french": "Est-ce l'Autel de l'Ombre ?",
						"spanish": "¿Es este el Altar de las Sombras?",
						"vietnamese": "Đây có phải là Bàn Thờ Bóng Tối không?",
						"thai": "ที่นี่คือแท่นบูชาเงาใช่ไหม",
						"hindi": "क्या यह छाया वेदी है?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "dune"
				},
				{
					"content": {
						"korean": "…왔군. 그림자에 이끌려 여기까지.",
						"english": "...You've come. Drawn here by the shadows.",
						"japanese": "…来たか。影に導かれてここまで。",
						"chinese": "……你来了。被暗影吸引到这里。",
						"french": "...Vous êtes venu. Attiré ici par les ombres.",
						"spanish": "...Has venido. Atraído aquí por las sombras.",
						"vietnamese": "...Ngươi đã đến. Bị bóng tối dẫn lối đến đây.",
						"thai": "...เจ้ามาแล้ว ถูกเงาล่อลวงมาถึงที่นี่",
						"hindi": "...तुम आ गए। परछाइयों द्वारा यहां खींचे गए।"
					},
					"speaker": "dune",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "당신은 누구지?",
						"english": "Who are you?",
						"japanese": "貴様は誰だ？",
						"chinese": "你是谁？",
						"french": "Qui êtes-vous ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Ngươi là ai?",
						"thai": "เจ้าคือใคร?",
						"hindi": "तुम कौन हो?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "dune",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이곳의 관리인. 그리고… 진실을 아는 자.",
						"english": "The caretaker of this place. And... one who knows the truth.",
						"japanese": "この地の管理人。そして…真実を知る者。",
						"chinese": "这个地方的管理员。以及……知晓真相之人。",
						"french": "Le gardien de ce lieu. Et... celui qui connaît la vérité.",
						"spanish": "El cuidador de este lugar. Y... quien conoce la verdad.",
						"vietnamese": "Người quản lý nơi này. Và... người biết sự thật.",
						"thai": "ผู้ดูแลที่นี่ และ... ผู้รู้ความจริง",
						"hindi": "इस जगह का कार्यवाहक। और... जो सच्चाई जानता है।"
					}
				},
				{
					"content": {
						"korean": "하지만 진실은 때로 독이 될 수도 있지.",
						"english": "But truth can sometimes be poison.",
						"japanese": "だが、真実は時に毒にもなる。",
						"chinese": "但真相有时也会是毒药。",
						"french": "Mais la vérité peut parfois être un poison.",
						"spanish": "Pero la verdad a veces puede ser veneno.",
						"vietnamese": "Nhưng sự thật đôi khi có thể là thuốc độc.",
						"thai": "แต่บางครั้งความจริงก็เป็นพิษได้",
						"hindi": "लेकिन सच कभी-कभी ज़हर भी हो सकता है।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "dune"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "dune"
				},
				{
					"content": {
						"korean": "너희의 모든 움직임이 누군가의 계획이라면 어떨까.",
						"english": "What if all your moves are part of someone's plan?",
						"japanese": "君たちの全ての動きが誰かの計画だとしたら？",
						"chinese": "你们所有行动，如果都是某人的计划呢？",
						"french": "Et si chacun de vos mouvements faisait partie du plan de quelqu'un ?",
						"spanish": "¿Y si todos vuestros movimientos fueran parte del plan de alguien?",
						"vietnamese": "Sẽ thế nào nếu mọi hành động của các ngươi đều nằm trong kế hoạch của ai đó?",
						"thai": "จะเป็นอย่างไรถ้าทุกการเคลื่อนไหวของพวกเจ้าเป็นแผนของใครบางคน?",
						"hindi": "क्या होगा अगर तुम्हारी हर हरकत किसी की योजना का हिस्सा हो?"
					},
					"speaker": "dune",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "무슨 소리야.",
						"english": "What are you talking about?",
						"japanese": "何を言ってるんだ？",
						"chinese": "你说什么？",
						"french": "De quoi parles-tu ?",
						"spanish": "¿De qué hablas?",
						"vietnamese": "Ngươi đang nói gì vậy?",
						"thai": "เจ้าพูดอะไร?",
						"hindi": "तुम क्या कह रहे हो?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "dune",
					"content": {
						"korean": "사라진 탐험대도, 블레이드마스터 길드의 붕괴도…",
						"english": "The vanished expedition, the collapse of the Blademaster Guild...",
						"japanese": "消えた探検隊も、ブレードマスターギルドの崩壊も…",
						"chinese": "消失的探险队，刀锋大师公会的崩塌…",
						"french": "L'expédition disparue, l'effondrement de la Guilde des Maîtres-Lames...",
						"spanish": "La expedición desaparecida, el colapso del Gremio de Maestros de la Espada...",
						"vietnamese": "Đoàn thám hiểm mất tích, sự sụp đổ của Hội Kiếm Sư...",
						"thai": "ทั้งคณะสำรวจที่หายไป การล่มสลายของสมาคม Blademaster…",
						"hindi": "लापता अभियान दल, ब्लेडमास्टर गिल्ड का पतन भी..."
					}
				},
				{
					"speaker": "dune",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "모두 그가 그린 그림 위에서 춤추는 것에 불과해.",
						"english": "All just dancing on the canvas he drew.",
						"japanese": "全ては彼が描いた絵の上で踊っているに過ぎない。",
						"chinese": "这一切不过是在他绘制的图画上起舞罢了。",
						"french": "Tout n'est que danse sur la toile qu'il a peinte.",
						"spanish": "Todo es solo un baile sobre el lienzo que él dibujó.",
						"vietnamese": "Tất cả chỉ là những điệu nhảy trên bức tranh hắn đã vẽ.",
						"thai": "ทั้งหมดเป็นเพียงการเต้นรำบนภาพที่เขาวาดไว้",
						"hindi": "सब कुछ बस उसी की बनाई तस्वीर पर नाच रहा है।"
					}
				},
				{
					"content": {
						"korean": "그가 누구지?",
						"english": "Who is he?",
						"japanese": "彼が誰なんだ？",
						"chinese": "他 K_J",
						"french": "Qui est-il ?",
						"spanish": "¿Quién es él?",
						"vietnamese": "Hắn là ai?",
						"thai": "เขาคือใคร?",
						"hindi": "वह कौन है?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "그림자 속에서 모든 것을 조종하는 자.",
						"english": "The one who controls everything from the shadows.",
						"japanese": "影の中で全てを操る者。",
						"chinese": "在阴影中操控一切之人。",
						"french": "Celui qui contrôle tout depuis l'ombre.",
						"spanish": "El que controla todo desde las sombras.",
						"vietnamese": "Kẻ điều khiển mọi thứ từ trong bóng tối.",
						"thai": "ผู้ที่ควบคุมทุกสิ่งจากเงามืด",
						"hindi": "वह जो हर चीज़ को परछाई से नियंत्रित करता है।"
					},
					"speaker": "dune",
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"speaker": "dune",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "이곳은 그 거대한 정보망의 핵심.",
						"english": "This is the core of that vast information network.",
						"japanese": "ここがその巨大な情報網の核心だ。",
						"chinese": "这里是那个庞大情报网的核心。",
						"french": "C'est le cœur de ce vaste réseau d'information.",
						"spanish": "Este es el núcleo de esa vasta red de información.",
						"vietnamese": "Đây là cốt lõi của mạng lưới thông tin khổng lồ đó.",
						"thai": "ที่นี่คือแก่นแท้ของเครือข่ายข้อมูลขนาดมหึมานั้น",
						"hindi": "यह उस विशाल सूचना नेटवर्क का केंद्र है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "dune"
				},
				{
					"content": {
						"korean": "정보망…?",
						"english": "Information network...?",
						"japanese": "情報網…？",
						"chinese": "情报网…？",
						"french": "Réseau d'information... ?",
						"spanish": "¿Red de información...?",
						"vietnamese": "Mạng lưới thông tin...?",
						"thai": "เครือข่ายข้อมูล...?",
						"hindi": "सूचना नेटवर्क...?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "모든 소문, 모든 비밀이 이곳을 거쳐 조작되고 배포된다.",
						"english": "All rumors, all secrets, are manipulated and distributed through here.",
						"japanese": "あらゆる噂、あらゆる秘密がここを介して操作され、拡散される。",
						"chinese": "所有谣言，所有秘密都经过这里被操控和散布。",
						"french": "Toutes les rumeurs, tous les secrets sont manipulés et distribués d'ici.",
						"spanish": "Todos los rumores, todos los secretos, son manipulados y distribuidos a través de aquí.",
						"vietnamese": "Mọi tin đồn, mọi bí mật đều được thao túng và phát tán qua đây.",
						"thai": "ข่าวลือและทุกความลับถูกบิดเบือนและเผยแพร่ผ่านที่นี่",
						"hindi": "सभी अफवाहें, सभी रहस्य यहीं से हेरफेर और वितरित किए जाते हैं।"
					},
					"speaker": "dune",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "dune",
					"content": {
						"korean": "너희가 쫓는 진실도 이미 왜곡되었을지 몰라.",
						"english": "The truth you seek might already be distorted.",
						"japanese": "君たちが追う真実も、既に歪められているかもしれない。",
						"chinese": "你们所追寻的真相，或许早已被扭曲。",
						"french": "La vérité que vous recherchez est peut-être déjà déformée.",
						"spanish": "La verdad que buscáis podría haber sido ya distorsionada.",
						"vietnamese": "Sự thật mà các ngươi đang theo đuổi có thể đã bị bóp méo.",
						"thai": "ความจริงที่พวกเจ้าตามหาอาจถูกบิดเบือนไปแล้วก็ได้",
						"hindi": "तुम जिस सच्चाई का पीछा कर रहे हो, वह भी शायद पहले से ही विकृत हो चुकी हो।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "그럼… 우리는 헛된 일을 하고 있는 건가?",
						"english": "So... are we working in vain?",
						"japanese": "では… 私たちは無駄なことをしているのか？",
						"chinese": "那么… 我们是在做无用功吗？",
						"french": "Alors... faisons-nous cela en vain ?",
						"spanish": "¿Entonces... estamos haciendo esto en vano?",
						"vietnamese": "Vậy... chúng ta đang làm điều vô ích sao?",
						"thai": "ถ้าอย่างนั้น... เรากำลังทำอะไรที่ไร้ประโยชน์อยู่หรือเปล่า?",
						"hindi": "तो... क्या हम व्यर्थ काम कर रहे हैं?"
					}
				},
				{
					"speaker": "dune",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "선택은 언제나 너희의 몫. 하지만 그는 이미 너희의 선택을 알고 있지.",
						"english": "The choice is always yours. But he already knows your choice.",
						"japanese": "選択は常に君たちのもの。だが、彼はすでに君たちの選択を知っている。",
						"chinese": "选择权永远在你们手中。但他早已知晓你们的决定。",
						"french": "Le choix vous appartient toujours. Mais il connaît déjà votre décision.",
						"spanish": "La elección siempre es vuestra. Pero él ya conoce vuestra decisión.",
						"vietnamese": "Lựa chọn luôn là của các ngươi. Nhưng hắn đã biết lựa chọn của các ngươi rồi.",
						"thai": "ทางเลือกเป็นของพวกเจ้าเสมอ แต่เขารู้ทางเลือกของพวกเจ้าแล้ว",
						"hindi": "चुनाव हमेशा तुम्हारा है। लेकिन वह पहले से ही तुम्हारी पसंद जानता है।"
					}
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"speaker": "dune",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "dune",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "돌아갈 길은 없어. 그림자가 이미 너희를 삼켰으니.",
						"english": "There's no way back. The shadow has already consumed you.",
						"japanese": "もう引き返せない。影がすでに君たちを飲み込んだから。",
						"chinese": "没有回头路了。影子已经吞噬了你们。",
						"french": "Il n'y a pas de retour en arrière. L'ombre vous a déjà dévorés.",
						"spanish": "No hay vuelta atrás. La sombra ya os ha engullido.",
						"vietnamese": "Không còn đường về. Bóng tối đã nuốt chửng các ngươi rồi.",
						"thai": "ไม่มีทางย้อนกลับได้แล้ว เงาได้กลืนกินพวกเจ้าไปแล้ว",
						"hindi": "वापस जाने का कोई रास्ता नहीं है। छाया पहले ही तुम्हें निगल चुकी है।"
					}
				},
				{
					"content": {
						"korean": "무슨 말을 하고 싶은 거야!",
						"english": "What are you trying to say?!",
						"japanese": "何を言いたいんだ！",
						"chinese": "你想说什么？！",
						"french": "Que veux-tu dire ?!",
						"spanish": "¡¿Qué quieres decir?!",
						"vietnamese": "Ngươi muốn nói gì vậy?!",
						"thai": "นายต้องการจะพูดอะไรกัน!",
						"hindi": "तुम क्या कहना चाहते हो!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "제단의 깊은 곳에서 차가운 기계음과 알 수 없는 속삭임이 들려왔다.",
						"english": "From the depths of the altar, cold mechanical sounds and unknown whispers could be heard.",
						"japanese": "祭壇の奥深くから、冷たい機械音と未知の囁きが聞こえてきた。",
						"chinese": "从祭坛深处传来冰冷的机械声和不明的低语。",
						"french": "Des profondeurs de l'autel, des bruits mécaniques froids et des chuchotements inconnus se firent entendre.",
						"spanish": "Desde las profundidades del altar, se escucharon fríos sonidos mecánicos y susurros desconocidos.",
						"vietnamese": "Từ sâu trong bàn thờ, những âm thanh máy móc lạnh lẽo và những lời thì thầm không rõ nguồn gốc vọng lên.",
						"thai": "จากส่วนลึกของแท่นบูชา เสียงเครื่องจักรเย็นเยียบและเสียงกระซิบที่ไม่รู้จักได้ยินมา",
						"hindi": "वेदी की गहराइयों से, ठंडी यांत्रिक आवाज़ें और अज्ञात फुसफुसाहटें सुनाई दीं।"
					}
				},
				{
					"speaker": "dune",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "그는 너희의 분노를 원해. 복수심이 커질수록, 그의 힘도 강해지지.",
						"english": "He craves your wrath. As your desire for revenge grows, so does his power.",
						"japanese": "彼は君たちの怒りを望んでいる。復讐心が強まるほど、彼の力も増していく。",
						"chinese": "他渴望你们的愤怒。复仇之心越强烈，他的力量就越强大。",
						"french": "Il désire votre colère. Plus votre soif de vengeance grandit, plus son pouvoir se renforce.",
						"spanish": "Él desea vuestra ira. Cuanto mayor sea vuestra sed de venganza, más fuerte se volverá su poder.",
						"vietnamese": "Hắn khao khát sự phẫn nộ của các ngươi. Lòng báo thù càng lớn, sức mạnh của hắn càng tăng lên.",
						"thai": "เขาปรารถนาความโกรธของพวกเจ้า ยิ่งความแค้นของพวกเจ้าเพิ่มขึ้นเท่าไหร่ พลังของเขาก็ยิ่งแข็งแกร่งขึ้นเท่านั้น",
						"hindi": "वह तुम्हारे क्रोध को चाहता है। जितनी तुम्हारी बदले की भावना बढ़ेगी, उतनी ही उसकी शक्ति भी बढ़ेगी।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "우리가 조종당하고 있다고?",
						"english": "Are we being manipulated?",
						"japanese": "私たちが操られていると？",
						"chinese": "我们被操纵了？",
						"french": "Nous sommes manipulés ?",
						"spanish": "¿Estamos siendo manipulados?",
						"vietnamese": "Chúng ta đang bị điều khiển sao?",
						"thai": "พวกเรากำลังถูกควบคุมอยู่เหรอ?",
						"hindi": "क्या हमें नियंत्रित किया जा रहा है?"
					}
				},
				{
					"speaker": "dune",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "자, 이제 너희의 선택을 보여줘.",
						"english": "Now, show me your choice.",
						"japanese": "さあ、今こそ君たちの選択を見せろ。",
						"chinese": "来吧，现在展现你们的选择。",
						"french": "Maintenant, montrez votre choix.",
						"spanish": "Ahora, mostrad vuestra elección.",
						"vietnamese": "Nào, bây giờ hãy cho ta thấy lựa chọn của các ngươi.",
						"thai": "เอาล่ะ ตอนนี้แสดงทางเลือกของพวกเจ้าออกมา",
						"hindi": "अब, अपनी पसंद दिखाओ।"
					}
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "어둠의 힘이 모든 것을 압도했다.",
						"english": "The power of darkness overwhelmed everything.",
						"japanese": "闇の力が全てを圧倒した。",
						"chinese": "黑暗的力量压倒了一切。",
						"french": "La puissance des ténèbres a tout submergé.",
						"spanish": "El poder de la oscuridad lo abrumó todo.",
						"vietnamese": "Sức mạnh của bóng tối đã áp đảo tất cả.",
						"thai": "พลังแห่งความมืดเข้าครอบงำทุกสิ่งแล้ว",
						"hindi": "अंधेरे की शक्ति ने सब कुछ अभिभूत कर दिया।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "아직 멀었어. 너희의 분노는 나약하기 짝이 없군.",
						"english": "Not yet. Your rage is too weak.",
						"japanese": "まだまだだな。お前たちの怒りはひどく弱い。",
						"chinese": "还差得远。你们的愤怒软弱无力。",
						"french": "Pas encore. Votre rage est trop faible.",
						"spanish": "Todavía no. Vuestra ira es demasiado débil.",
						"vietnamese": "Chưa đâu. Cơn thịnh nộ của ngươi quá yếu ớt.",
						"thai": "ยังไม่ถึงเวลา ความโกรธแค้นของพวกเจ้าช่างอ่อนแอเสียจริง",
						"hindi": "अभी नहीं। तुम्हारा क्रोध बहुत कमजोर है।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "…젠장, 포기할 수 없어.",
						"english": "...Damn it, I can't give up.",
						"japanese": "…くそっ、諦められない。",
						"chinese": "…该死，我不能放弃。",
						"french": "…Bon sang, je ne peux pas abandonner.",
						"spanish": "…Maldita sea, no puedo rendirme.",
						"vietnamese": "…Chết tiệt, tôi không thể bỏ cuộc.",
						"thai": "…ให้ตายสิ, ฉันยอมแพ้ไม่ได้",
						"hindi": "…धत् तेरी की, मैं हार नहीं मान सकता।"
					}
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "크크… 어리석은 것들. 하나를 잡았다고 끝이 아니지.",
						"english": "Heh heh... Fools. Catching one is not the end.",
						"japanese": "クク…愚かな。一人捕らえたところで終わりではない。",
						"chinese": "呵呵……愚蠢的家伙们。抓住一个可不是结束。",
						"french": "Hé hé... Idiots. En attraper un n'est pas la fin.",
						"spanish": "Je je... Tontos. Atrapar a uno no es el final.",
						"vietnamese": "Khặc khặc… Đồ ngốc. Bắt được một kẻ không phải là kết thúc.",
						"thai": "ฮ่าฮ่า... พวกโง่เอ๊ย การจับได้คนเดียวไม่ใช่จุดจบหรอกนะ",
						"hindi": "हे हे... मूर्खों। एक को पकड़ना अंत नहीं है।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "진정한 칼날은 아직 숨겨져 있다.",
						"english": "The true blade is still hidden.",
						"japanese": "真の刃はまだ隠されている。",
						"chinese": "真正的利刃仍在隐藏。",
						"french": "La véritable lame est encore cachée.",
						"spanish": "La verdadera hoja aún está oculta.",
						"vietnamese": "Lưỡi dao thật sự vẫn còn ẩn giấu.",
						"thai": "คมดาบที่แท้จริงยังคงซ่อนอยู่",
						"hindi": "असली तलवार अभी भी छिपी हुई है।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "…젠장. 또 다른 그림자가.",
						"english": "...Damn it. Another shadow.",
						"japanese": "…くそ。また別の影が。",
						"chinese": "……该死。又一个影子。",
						"french": "...Mince. Une autre ombre.",
						"spanish": "...Maldita sea. Otra sombra.",
						"vietnamese": "…Chết tiệt. Lại một cái bóng khác.",
						"thai": "...ให้ตายสิ อีกเงาหนึ่ง",
						"hindi": "...धिक्कार है। एक और परछाई।"
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그림자는 사라졌다. 하지만 제단에 남은 속삭임은 더욱 선명해졌다.",
						"english": "The shadow vanished. But the whispers remaining on the altar grew clearer.",
						"japanese": "影は消えた。しかし、祭壇に残された囁きはより鮮明になった。",
						"chinese": "影子消失了。但祭坛上残留的低语却愈发清晰。",
						"french": "L'ombre a disparu. Mais les murmures restants sur l'autel sont devenus plus clairs.",
						"spanish": "La sombra se desvaneció. Pero los susurros que quedaban en el altar se hicieron más claros.",
						"vietnamese": "Bóng tối biến mất. Nhưng những lời thì thầm còn lại trên bàn thờ lại trở nên rõ ràng hơn.",
						"thai": "เงาหายไปแล้ว แต่เสียงกระซิบที่หลงเหลืออยู่บนแท่นบูชากลับชัดเจนขึ้น",
						"hindi": "परछाई गायब हो गई। लेकिन वेदी पर बची हुई फुसफुसाहटें और स्पष्ट हो गईं।"
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "진실은 여전히 미로 속에. 그리고 그 미로의 끝에는…",
						"english": "The truth is still in a labyrinth. And at the end of that labyrinth...",
						"japanese": "真実はまだ迷宮の中に。そしてその迷宮の終わりには…",
						"chinese": "真相仍在迷宫之中。而那迷宫的尽头……",
						"french": "La vérité est toujours dans un labyrinthe. Et au bout de ce labyrinthe...",
						"spanish": "La verdad sigue en un laberinto. Y al final de ese laberinto...",
						"vietnamese": "Sự thật vẫn còn trong mê cung. Và ở cuối mê cung đó…",
						"thai": "ความจริงยังคงอยู่ในเขาวงกต และที่ปลายสุดของเขาวงกตนั้น...",
						"hindi": "सच अभी भी एक भूलभुलैया में है। और उस भूलभुलैया के अंत में..."
					}
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "제단의 가장 깊은 곳. 거대한 그림자가 나타났다.",
						"english": "The deepest part of the altar. A gigantic shadow appeared.",
						"japanese": "祭壇の最深部。巨大な影が現れた。",
						"chinese": "祭坛最深处。一个巨大的影子出现了。",
						"french": "La partie la plus profonde de l'autel. Une ombre gigantesque apparut.",
						"spanish": "La parte más profunda del altar. Una sombra gigantesca apareció.",
						"vietnamese": "Nơi sâu nhất của bàn thờ. Một bóng đen khổng lồ xuất hiện.",
						"thai": "ส่วนที่ลึกที่สุดของแท่นบูชา เงายักษ์ปรากฏขึ้น",
						"hindi": "वेदी का सबसे गहरा हिस्सा। एक विशाल छाया दिखाई दी।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "기어코 여기까지 왔구나.",
						"english": "You've finally made it here.",
						"japanese": "ついにここまで来たか。",
						"chinese": "你们终于还是走到这里了。",
						"french": "Vous êtes enfin arrivés ici.",
						"spanish": "Así que finalmente habéis llegado hasta aquí.",
						"vietnamese": "Ngươi rốt cuộc cũng đến được đây rồi.",
						"thai": "ในที่สุดเจ้าก็มาถึงที่นี่",
						"hindi": "आखिरकार तुम यहाँ आ ही गए।"
					}
				},
				{
					"content": {
						"korean": "네가 모든 것을 조종했나?",
						"english": "Did you control everything?",
						"japanese": "お前が全てを操っていたのか？",
						"chinese": "是你掌控了一切吗？",
						"french": "As-tu tout contrôlé ?",
						"spanish": "¿Lo controlaste todo?",
						"vietnamese": "Ngươi đã điều khiển tất cả sao?",
						"thai": "เจ้าบงการทุกสิ่งอย่างนั้นหรือ?",
						"hindi": "क्या तुमने सब कुछ नियंत्रित किया था?"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "나는 그저… 계획의 일부일 뿐.",
						"english": "I am merely... a part of the plan.",
						"japanese": "私はただ…計画の一部に過ぎない。",
						"chinese": "我只是……计划的一部分。",
						"french": "Je ne suis que... une partie du plan.",
						"spanish": "Soy solo... parte del plan.",
						"vietnamese": "Ta chỉ là… một phần của kế hoạch.",
						"thai": "ข้าเป็นเพียง... ส่วนหนึ่งของแผนการ",
						"hindi": "मैं केवल... योजना का एक हिस्सा हूँ।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "거짓말!",
						"english": "Lies!",
						"japanese": "嘘だ！",
						"chinese": "谎言！",
						"french": "Mensonges !",
						"spanish": "¡Mentira!",
						"vietnamese": "Dối trá!",
						"thai": "โกหก!",
						"hindi": "झूठ!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_1"
				}
			]
		}
	]
} as const;
