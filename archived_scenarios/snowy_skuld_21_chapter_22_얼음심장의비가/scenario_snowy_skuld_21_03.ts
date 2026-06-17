export const scenario_snowy_skuld_21_03 = {
	"scenario_id": "snowy_skuld_21_03",
	"order": 3,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"eira": {
			"id": "mon_0c37c014-b5ca-4f2f-ad03-5d393e5b2eb1",
			"name": {
				"korean": "에이라",
				"english": "Eira",
				"japanese": "エイラ",
				"chinese": "艾拉",
				"french": "Eira",
				"spanish": "Eira",
				"vietnamese": "Eira",
				"thai": "ไอรา",
				"hindi": "ऐरा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8e2970b7-bcb1-4b1c-6bf0-93106b373500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/0ca1ec09-a624-450f-054a-b98de58bdb00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"빙산의 심장부, 비통함이 더욱 강렬해진다.",
			"얼어붙은 육체에 균열이 가고, 숨겨진 진실이 드러난다.",
			"그 안에는, 비틀린 비극이 잠들어 있었다.",
			"파괴가 아닌, 간절한 호소였다."
		],
		"english": [
			"Deep within the iceberg, the sorrow intensifies.",
			"Cracks appear in the frozen flesh, revealing a hidden truth.",
			"Within it, a twisted tragedy lay dormant.",
			"It was not destruction, but a desperate plea."
		],
		"japanese": [
			"氷山の深部、悲痛がさらに強まる。",
			"凍てついた肉体に亀裂が入り、隠された真実が露わになる。",
			"その中には、歪んだ悲劇が眠っていた。",
			"それは破壊ではなく、切なる訴えだった。"
		],
		"chinese": [
			"冰山深处，悲痛愈发强烈。",
			"冰冻的躯体出现裂痕，隐藏的真相显露无疑。",
			"其中，一场扭曲的悲剧沉睡着。",
			"那不是毁灭，而是绝望的恳求。"
		],
		"french": [
			"Au cœur de l'iceberg, la détresse s'intensifie.",
			"Des fissures apparaissent dans la chair gelée, révélant une vérité cachée.",
			"En son sein, une tragédie tordue sommeillait.",
			"Ce n'était pas de la destruction, mais un appel désespéré."
		],
		"spanish": [
			"En el corazón del iceberg, la aflicción se intensifica.",
			"Grietas aparecen en la carne congelada, revelando una verdad oculta.",
			"Dentro, una tragedia retorcida yacía latente.",
			"No era destrucción, sino una súplica desesperada."
		],
		"vietnamese": [
			"Sâu thẳm trong tảng băng, nỗi đau càng thêm mãnh liệt.",
			"Cơ thể đóng băng rạn nứt, sự thật ẩn giấu dần lộ diện.",
			"Bên trong, một bi kịch méo mó đang ngủ yên.",
			"Đó không phải là sự hủy diệt, mà là một lời cầu xin khẩn thiết."
		],
		"thai": [
			"ลึกเข้าไปในภูเขาน้ำแข็ง ความโศกเศร้าทวีความรุนแรงขึ้น",
			"รอยแตกปรากฏขึ้นในร่างที่แข็งตัว เปิดเผยความจริงที่ซ่อนอยู่",
			"ภายในนั้น มีโศกนาฏกรรมที่บิดเบี้ยวหลับใหลอยู่",
			"มันไม่ใช่การทำลายล้าง แต่เป็นการวิงวอนอย่างสิ้นหวัง"
		],
		"hindi": [
			"हिमखंड के हृदय में, दुःख और गहरा होता है।",
			"जमे हुए शरीर में दरारें पड़ती हैं, एक छिपा हुआ सच सामने आता है।",
			"उसके भीतर, एक विकृत त्रासदी सो रही थी।",
			"यह विनाश नहीं, बल्कि एक हताश गुहार थी।"
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
						"korean": "새로운 방에 들어서자, 얼음 벽에서 희미한 울림이 느껴졌다.",
						"english": "As I entered the new room, a faint echo resonated from the ice walls.",
						"japanese": "新しい部屋に入ると、氷の壁から微かな響きが感じられた。",
						"chinese": "当我走进新房间时，冰墙传来微弱的回响。",
						"french": "En entrant dans la nouvelle pièce, un faible écho résonna des murs de glace.",
						"spanish": "Al entrar en la nueva habitación, un tenue eco resonó en las paredes de hielo.",
						"vietnamese": "Khi tôi bước vào căn phòng mới, một tiếng vọng yếu ớt vang lên từ bức tường băng.",
						"thai": "เมื่อเข้าสู่ห้องใหม่ เสียงสะท้อนแผ่วเบาจากผนังน้ำแข็งก็ดังขึ้น",
						"hindi": "जैसे ही मैं नए कमरे में दाखिल हुआ, बर्फ की दीवारों से एक हल्की गूँज सुनाई दी।"
					}
				},
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "eira",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이 고통… 단순한 분노가 아니야.",
						"english": "This pain... it's not just anger.",
						"japanese": "この苦痛…ただの怒りじゃない。",
						"chinese": "这份痛苦……不只是愤怒。",
						"french": "Cette douleur... ce n'est pas seulement de la colère.",
						"spanish": "Este dolor... no es solo ira.",
						"vietnamese": "Nỗi đau này… không chỉ là sự giận dữ.",
						"thai": "ความเจ็บปวดนี้... ไม่ใช่แค่ความโกรธ",
						"hindi": "यह दर्द... सिर्फ गुस्सा नहीं है।"
					},
					"speaker": "eira"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "무슨 뜻이야?",
						"english": "What do you mean?",
						"japanese": "どういう意味だ？",
						"chinese": "什么意思？",
						"french": "Que veux-tu dire ?",
						"spanish": "¿Qué quieres decir?",
						"vietnamese": "Ý anh là sao?",
						"thai": "หมายความว่าอะไร?",
						"hindi": "तुम्हारा क्या मतलब है?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "표면에 흐르는 건 적의지만, 그 밑엔 깊은 슬픔이 있어.",
						"english": "On the surface, there's hostility, but beneath it, deep sorrow.",
						"japanese": "表面には敵意が流れているが、その下には深い悲しみがある。",
						"chinese": "表面是敌意，但其下是深深的悲伤。",
						"french": "En surface, il y a de l'hostilité, mais en dessous, une profonde tristesse.",
						"spanish": "En la superficie, hay hostilidad, pero debajo, una profunda tristeza.",
						"vietnamese": "Bề ngoài là sự thù địch, nhưng bên dưới là nỗi buồn sâu sắc.",
						"thai": "บนพื้นผิวคือความเป็นปรปักษ์ แต่ภายใต้ความเศร้านั้นลึกล้ำ",
						"hindi": "सतह पर, दुश्मनी है, लेकिन उसके नीचे, गहरा दुख है।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "eira"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira",
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "봐, 균열이 가고 있어!",
						"english": "Look, it's cracking!",
						"japanese": "見て、亀裂が入ってる！",
						"chinese": "看，裂开了！",
						"french": "Regarde, ça se fissure !",
						"spanish": "¡Mira, se está agrietando!",
						"vietnamese": "Nhìn kìa, nó đang nứt ra!",
						"thai": "ดูสิ มันกำลังแตก!",
						"hindi": "देखो, यह फट रहा है!"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "거대한 빙벽에 금이 가기 시작했다. 그 틈으로 비틀린 고대 선박의 잔해가 보였다.",
						"english": "The colossal ice wall began to crack. Through the gaps, the remains of a twisted ancient ship became visible.",
						"japanese": "巨大な氷壁に亀裂が入り始めた。その隙間から、歪んだ古代船の残骸が見えた。",
						"chinese": "巨大的冰墙开始开裂。透过缝隙，一艘扭曲的古老船只残骸显现出来。",
						"french": "La colossale paroi de glace commença à se fissurer. À travers les interstices, les restes d'un navire antique tordu devinrent visibles.",
						"spanish": "La colosal pared de hielo comenzó a agrietarse. A través de las grietas, los restos retorcidos de una antigua nave se hicieron visibles.",
						"vietnamese": "Bức tường băng khổng lồ bắt đầu nứt ra. Qua những khe hở, tàn tích của một con tàu cổ xưa méo mó hiện rõ.",
						"thai": "กำแพงน้ำแข็งขนาดมหึมาเริ่มแตกออก ผ่านช่องว่างนั้น ซากเรือโบราณที่บิดเบี้ยวก็ปรากฏให้เห็น",
						"hindi": "विशाल बर्फीली दीवार में दरारें पड़ने लगीं। दरारों से, एक मुड़े हुए प्राचीन जहाज के अवशेष दिखाई देने लगे।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "선박의 잔해라고? 어떻게 저 안에…",
						"english": "Shipwreck? How could it be in there...",
						"japanese": "船の残骸だと？なぜあの中に…",
						"chinese": "是船的残骸？它怎么会在这里面…",
						"french": "Une épave de navire ? Comment est-ce possible à l'intérieur...",
						"spanish": "¿Restos de un barco? ¿Cómo llegó ahí dentro...?",
						"vietnamese": "Xác tàu ư? Sao nó lại ở trong đó...",
						"thai": "ซากเรือเหรอ? ทำไมถึงไปอยู่ในนั้น...",
						"hindi": "जहाज़ का मलबा? ये वहाँ कैसे हो सकता है..."
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "Skuld는… 어쩌면 스스로를 봉인한 걸지도 몰라. 이 고통과 함께.",
						"english": "Skuld... perhaps sealed herself away. With this pain.",
						"japanese": "スクルドは…もしかしたら自らを封印したのかもしれない。この苦痛と共に。",
						"chinese": "斯库尔德…也许是她自己封印了自己。带着这份痛苦。",
						"french": "Skuld... elle s'est peut-être scellée elle-même. Avec cette douleur.",
						"spanish": "Skuld... quizás se selló a sí misma. Con este dolor.",
						"vietnamese": "Skuld... có lẽ đã tự phong ấn mình. Cùng với nỗi đau này.",
						"thai": "สกุลด์... อาจจะผนึกตัวเองเอาไว้ กับความเจ็บปวดนี้",
						"hindi": "स्कुल्ड... शायद उसने खुद को सील कर दिया। इस दर्द के साथ।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "eira"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira",
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이 흔적들… 파괴가 목적이 아니야.",
						"english": "These traces... destruction isn't the goal.",
						"japanese": "この痕跡…破壊が目的じゃない。",
						"chinese": "这些痕迹…目的不是破坏。",
						"french": "Ces traces... la destruction n'est pas le but.",
						"spanish": "Estas huellas... la destrucción no es el objetivo.",
						"vietnamese": "Những dấu vết này... mục đích không phải là phá hủy.",
						"thai": "ร่องรอยเหล่านี้... ไม่ได้มีเจตนาทำลาย",
						"hindi": "ये निशान... तबाही मकसद नहीं है।"
					},
					"speaker": "eira"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그럼 뭘 하려는 건데?",
						"english": "Then what is it trying to do?",
						"japanese": "じゃあ、何をしようとしてるんだ？",
						"chinese": "那它想做什么？",
						"french": "Alors, que veut-elle faire ?",
						"spanish": "¿Entonces qué intenta hacer?",
						"vietnamese": "Vậy nó muốn làm gì?",
						"thai": "แล้วมันพยายามจะทำอะไรล่ะ?",
						"hindi": "तो ये क्या करने की कोशिश कर रहा है?"
					}
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "무언가를 지키려고 해. 어쩌면… 잊고 싶지 않은 기억, 혹은 마지막 소원.",
						"english": "It's trying to protect something. Perhaps... a memory it doesn't want to forget, or a final wish.",
						"japanese": "何かを守ろうとしている。もしかしたら…忘れたくない記憶、あるいは最後の願い。",
						"chinese": "它想守护什么。也许是…不想忘记的记忆，或是最后的愿望。",
						"french": "Elle essaie de protéger quelque chose. Peut-être... un souvenir qu'elle ne veut pas oublier, ou un dernier souhait.",
						"spanish": "Intenta proteger algo. Quizás... un recuerdo que no quiere olvidar, o un último deseo.",
						"vietnamese": "Nó đang cố gắng bảo vệ điều gì đó. Có lẽ... một ký ức không muốn quên, hoặc một ước nguyện cuối cùng.",
						"thai": "มันพยายามจะปกป้องบางสิ่ง อาจจะ... เป็นความทรงจำที่ไม่ต้องการจะลืม หรือความปรารถนาสุดท้าย",
						"hindi": "ये कुछ बचाने की कोशिश कर रहा है। शायद... एक याद जिसे वो भूलना नहीं चाहता, या एक आखिरी इच्छा।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "그녀의 절규는… 도움을 바라는 것 같아.",
						"english": "Her scream... seems to be a plea for help.",
						"japanese": "彼女の絶叫は…助けを求めているようだ。",
						"chinese": "她的尖叫…似乎是在求救。",
						"french": "Son cri... semble être un appel à l'aide.",
						"spanish": "Su grito... parece una súplica de ayuda.",
						"vietnamese": "Tiếng kêu của cô ấy... dường như đang cầu cứu.",
						"thai": "เสียงกรีดร้องของเธอ... ดูเหมือนจะเป็นคำขอความช่วยเหลือ",
						"hindi": "उसकी चीख... मदद के लिए पुकार लग रही है।"
					},
					"speaker": "eira"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira",
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "우리는 이 비극을 끝내야 해. Skuld를 해방시켜야만 해.",
						"english": "We must end this tragedy. We must free Skuld.",
						"japanese": "私たちはこの悲劇を終わらせなければならない。スクルドを解放しなければならない。",
						"chinese": "我们必须结束这场悲剧。我们必须解放斯库尔德。",
						"french": "Nous devons mettre fin à cette tragédie. Nous devons libérer Skuld.",
						"spanish": "Debemos terminar con esta tragedia. Debemos liberar a Skuld.",
						"vietnamese": "Chúng ta phải chấm dứt bi kịch này. Chúng ta phải giải thoát Skuld.",
						"thai": "เราต้องยุติโศกนาฏกรรมนี้ เราต้องปลดปล่อยสกุลด์",
						"hindi": "हमें इस त्रासदी को खत्म करना होगा। हमें स्कुल्ड को आज़ाद करना होगा।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "eira"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "그러려면… 그녀를 멈춰야 한다는 거잖아.",
						"english": "To do that... we have to stop her.",
						"japanese": "そのためには…彼女を止めなければならないということだ。",
						"chinese": "那么…就意味着要阻止她。",
						"french": "Pour cela... nous devons l'arrêter.",
						"spanish": "Para eso... tenemos que detenerla.",
						"vietnamese": "Để làm được điều đó... chúng ta phải ngăn cô ấy lại.",
						"thai": "ถ้าอย่างนั้น... เราก็ต้องหยุดเธอ",
						"hindi": "इसके लिए... हमें उसे रोकना होगा।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "고통을 멈추기 위한 유일한 길이야. 여기서 멈출 순 없어.",
						"english": "It's the only way to stop the pain. We can't stop here.",
						"japanese": "苦痛を止める唯一の道だ。ここで止まることはできない。",
						"chinese": "这是停止痛苦的唯一途径。我们不能止步于此。",
						"french": "C'est le seul moyen d'arrêter la douleur. On ne peut pas s'arrêter ici.",
						"spanish": "Es la única forma de detener el dolor. No podemos parar aquí.",
						"vietnamese": "Đó là cách duy nhất để chấm dứt nỗi đau. Chúng ta không thể dừng lại ở đây.",
						"thai": "เป็นทางเดียวที่จะหยุดความเจ็บปวด เราจะหยุดที่นี่ไม่ได้",
						"hindi": "दर्द रोकने का यही एक तरीका है। हम यहाँ रुक नहीं सकते।"
					}
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "빙하의 심장이 절규했다. 끝이 보였다.",
						"english": "The heart of the glacier screamed. The end was in sight.",
						"japanese": "氷河の心臓が絶叫した。終わりが見えた。",
						"chinese": "冰川之心在咆哮。结局已然可见。",
						"french": "Le cœur du glacier a hurlé. La fin était en vue.",
						"spanish": "El corazón del glaciar gritó. El final estaba a la vista.",
						"vietnamese": "Trái tim của sông băng gào thét. Cái kết đã ở trong tầm mắt.",
						"thai": "หัวใจของธารน้ำแข็งกรีดร้อง จุดจบปรากฏแล้ว",
						"hindi": "ग्लेशियर के दिल ने चीख मारी। अंत दिख रहा था।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "빙산의 분노가 모든 것을 집어삼켰다.",
						"english": "The iceberg's fury consumed all.",
						"japanese": "氷山の怒りが全てを飲み込んだ。",
						"chinese": "冰山的愤怒吞噬了一切。",
						"french": "La fureur de l'iceberg a tout englouti.",
						"spanish": "La furia del iceberg lo consumió todo.",
						"vietnamese": "Cơn thịnh nộ của tảng băng đã nuốt chửng mọi thứ.",
						"thai": "ความพิโรธของภูเขาน้ำแข็งกลืนกินทุกสิ่ง",
						"hindi": "हिमखंड के क्रोध ने सब कुछ निगल लिया।"
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "감히… 나의 영역을… 침범하려 들다니…",
						"english": "How dare you... invade my domain...",
						"japanese": "よくも…私の領域を…侵そうと…",
						"chinese": "竟敢…侵犯我的领域…",
						"french": "Comment oses-tu... envahir mon domaine...",
						"spanish": "¿Cómo te atreves... a invadir mi dominio...?",
						"vietnamese": "Ngươi dám... xâm phạm lãnh địa của ta...",
						"thai": "แกกล้าดียังไง...มาบุกรุกอาณาเขตของข้า...",
						"hindi": "हिम्मत कैसे हुई तुम्हारी... मेरे क्षेत्र में घुसने की..."
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…아직… 끝나지 않았어.",
						"english": "...It's not... over yet.",
						"japanese": "…まだ…終わっていない。",
						"chinese": "…还没…结束。",
						"french": "...Ce n'est pas... encore fini.",
						"spanish": "...Aún no... ha terminado.",
						"vietnamese": "...Vẫn chưa... kết thúc đâu.",
						"thai": "...ยังไม่...จบลงหรอก.",
						"hindi": "...अभी... खत्म नहीं हुआ है।"
					}
				},
				{
					"speaker": "eira",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "포기하지 마. 그녀의 고통을 멈춰야 해.",
						"english": "Don't give up. You must stop her suffering.",
						"japanese": "あきらめるな。彼女の苦しみを止めなければ。",
						"chinese": "别放弃。你必须阻止她的痛苦。",
						"french": "N'abandonne pas. Tu dois mettre fin à sa souffrance.",
						"spanish": "No te rindas. Debes detener su sufrimiento.",
						"vietnamese": "Đừng bỏ cuộc. Ngươi phải chấm dứt nỗi đau của cô ấy.",
						"thai": "อย่าเพิ่งยอมแพ้. เจ้าต้องหยุดความทุกข์ทรมานของนาง.",
						"hindi": "हार मत मानो। तुम्हें उसका दर्द रोकना होगा।"
					}
				}
			],
			"win_dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "거대한 빙상이 무너졌다. 정체불명의 존재가 쓰러졌다.",
						"english": "The massive ice sheet crumbled. The unknown entity fell.",
						"japanese": "巨大な氷床が崩れ落ちた。正体不明の存在が倒れた。",
						"chinese": "巨大的冰盖崩塌了。不明实体倒下了。",
						"french": "L'immense nappe de glace s'est effondrée. L'entité inconnue est tombée.",
						"spanish": "La enorme capa de hielo se derrumbó. La entidad desconocida cayó.",
						"vietnamese": "Tảng băng khổng lồ sụp đổ. Thực thể bí ẩn đã ngã xuống.",
						"thai": "แผ่นน้ำแข็งขนาดยักษ์พังทลายลง. สิ่งมีชีวิตปริศนาล้มลงแล้ว.",
						"hindi": "विशाल हिमखंड ढह गया। अज्ञात सत्ता गिर गई।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…결국, 이렇게… 나약한…",
						"english": "...In the end, so... weak...",
						"japanese": "…結局、このように… 弱き…",
						"chinese": "…最终，如此… 孱弱…",
						"french": "...Finalement, si... faible...",
						"spanish": "...Al final, tan... débil...",
						"vietnamese": "...Rốt cuộc, lại... yếu đuối...",
						"thai": "...สุดท้ายก็... อ่อนแอ...",
						"hindi": "...आखिरकार, इतना... कमज़ोर..."
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "기억해라… 이 고통은… 끝나지 않아… 너희도… 언젠가…",
						"english": "Remember... This suffering... won't end... You too... someday...",
						"japanese": "覚えておけ… この苦痛は… 終わらない… お前たちも… いつか…",
						"chinese": "记住… 这痛苦… 不会结束… 你们也… 终有一天…",
						"french": "Souvenez-vous… Cette souffrance… ne finira pas… Vous aussi… un jour…",
						"spanish": "Recordad… Este sufrimiento… no acabará… Vosotros también… algún día…",
						"vietnamese": "Hãy nhớ… Nỗi đau này… sẽ không kết thúc… Các ngươi cũng vậy… một ngày nào đó…",
						"thai": "จำไว้... ความทุกข์ทรมานนี้... จะไม่มีวันสิ้นสุด... พวกเจ้าเองก็... สักวันหนึ่ง...",
						"hindi": "याद रखना… यह दर्द… खत्म नहीं होगा… तुम भी… कभी न कभी…"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira",
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이제야… 비로소 편안히 잠들 수 있을 거예요, Skuld.",
						"english": "Now... you can finally rest in peace, Skuld.",
						"japanese": "今こそ… ようやく安らかに眠れるでしょう、スクルド。",
						"chinese": "现在… 你终于可以安息了，斯库尔德。",
						"french": "Maintenant... vous pouvez enfin reposer en paix, Skuld.",
						"spanish": "Ahora... por fin podrás descansar en paz, Skuld.",
						"vietnamese": "Bây giờ... ngươi cuối cùng cũng có thể an nghỉ, Skuld.",
						"thai": "ตอนนี้... ในที่สุดเจ้าก็ได้พักผ่อนอย่างสงบแล้ว, สกุลด์.",
						"hindi": "अब… तुम अंततः शांति से सो पाओगी, स्कुल्ड।"
					},
					"speaker": "eira"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…끝난 건가?",
						"english": "...Is it over?",
						"japanese": "…終わったのか？",
						"chinese": "…结束了吗？",
						"french": "...Est-ce fini ?",
						"spanish": "...¿Ha terminado?",
						"vietnamese": "...Kết thúc rồi sao?",
						"thai": "...จบแล้วหรือ?",
						"hindi": "...क्या यह खत्म हो गया?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "빙하 깊숙이, 멈춰진 절규는 또 다른 진실의 조각을 남겼다.",
						"english": "Deep within the glacier, a silenced scream left another piece of truth.",
						"japanese": "氷河の奥深く、止まった叫びはもう一つの真実の断片を残した。",
						"chinese": "冰川深处，被压制的尖叫留下了另一块真相的碎片。",
						"french": "Au plus profond du glacier, un cri étouffé a laissé un autre fragment de vérité.",
						"spanish": "En lo profundo del glaciar, un grito silenciado dejó otra pieza de la verdad.",
						"vietnamese": "Sâu trong sông băng, tiếng thét bị chặn lại đã để lại một mảnh sự thật khác.",
						"thai": "ลึกเข้าไปในธารน้ำแข็ง เสียงกรีดร้องที่ถูกหยุดทิ้งชิ้นส่วนของความจริงไว้อีกชิ้น.",
						"hindi": "ग्लेशियर की गहराई में, एक शांत चीख ने सच्चाई का एक और टुकड़ा छोड़ दिया।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "여기까지 온 어리석은 자들… 더 이상 다가오지 마라.",
						"english": "You fools who've come this far... Come no closer!",
						"japanese": "ここまで来た愚か者たち… それ以上近づくな。",
						"chinese": "走到此地的愚蠢之人… 不许再靠近。",
						"french": "Insensés qui êtes venus jusqu'ici... N'approchez plus.",
						"spanish": "Necios que habéis llegado hasta aquí... No os acerquéis más.",
						"vietnamese": "Những kẻ ngu muội đến tận đây... Đừng đến gần nữa.",
						"thai": "พวกโง่เขลาที่มาถึงนี่... อย่าเข้าใกล้กว่านี้!",
						"hindi": "तुम मूर्खों ने यहाँ तक पहुँचने की हिम्मत की है... और पास मत आना।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "우리가 너의 고통을 끝내주러 왔다!",
						"english": "We've come to end your suffering!",
						"japanese": "我々がお前の苦痛を終わらせに来た！",
						"chinese": "我们是来结束你的痛苦的！",
						"french": "Nous sommes venus mettre fin à ta souffrance !",
						"spanish": "¡Hemos venido a acabar con tu sufrimiento!",
						"vietnamese": "Chúng ta đến để chấm dứt nỗi đau của ngươi!",
						"thai": "เรามาเพื่อยุติความทุกข์ทรมานของเจ้า!",
						"hindi": "हम तुम्हारा दर्द खत्म करने आए हैं!"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "eira",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "Skuld… 당신은 더 이상 고통받을 필요 없어요.",
						"english": "Skuld... You don't have to suffer anymore.",
						"japanese": "スクルド… もう苦しむ必要はありません。",
						"chinese": "斯库尔德… 你不必再受苦了。",
						"french": "Skuld... Vous n'avez plus à souffrir.",
						"spanish": "Skuld... Ya no tienes que sufrir más.",
						"vietnamese": "Skuld... Ngươi không cần phải chịu đựng nữa.",
						"thai": "สกุลด์... เจ้าไม่จำเป็นต้องทนทุกข์อีกต่อไปแล้ว.",
						"hindi": "स्कुल्ड... तुम्हें अब और कष्ट सहने की आवश्यकता नहीं है।"
					},
					"speaker": "eira"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "고통? 감히 나를… 측은하게 보는가? 네놈들이 뭘 안다고!",
						"english": "Suffering? You dare... pity me? What do you know!",
						"japanese": "苦痛だと？ よくも私を… 哀れむか？ お前たちが何を知っているというのだ！",
						"chinese": "痛苦？你们竟敢… 可怜我？你们懂什么！",
						"french": "La souffrance ? Comment osez-vous… me plaindre ? Que savez-vous, imbéciles !",
						"spanish": "¿Sufrimiento? ¿Cómo osas... compadecerme? ¡Qué sabéis vosotros!",
						"vietnamese": "Đau khổ? Ngươi dám... thương hại ta sao? Ngươi biết gì chứ!",
						"thai": "ความทุกข์? กล้าดียังไง... มาสงสารข้า? พวกเจ้าจะรู้อะไร!",
						"hindi": "दर्द? तुम मुझे... दया दिखा रहे हो? तुम क्या जानते हो!"
					},
					"speaker": "random_boss"
				}
			]
		}
	]
} as const;
