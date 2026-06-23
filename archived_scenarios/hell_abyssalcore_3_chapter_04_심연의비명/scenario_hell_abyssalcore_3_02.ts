export const scenario_hell_abyssalcore_3_02 = {
	"scenario_id": "hell_abyssalcore_3_02",
	"order": 2,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"brim": {
			"id": "mon_d7f57824-190d-40b9-93d1-66c658f0441f",
			"name": {
				"korean": "브림",
				"english": "Brim",
				"japanese": "ブリム",
				"chinese": "布里姆",
				"french": "Brim",
				"spanish": "Brim",
				"vietnamese": "Brim",
				"thai": "บริม",
				"hindi": "ब्रिम"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/08ad0e4d-214d-43b3-dc3e-ddfba9049300/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/16f1def2-7c33-4558-4b21-9c3e87fa3e00/public"
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
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "경계 붕괴까지 72시간. 지옥의 기운이 공기를 가득 채웠다.",
						"english": "72 hours until boundary collapse. The aura of hell filled the air.",
						"japanese": "境界崩壊まで72時間。地獄の気が空気を満たしていた。",
						"chinese": "距离境界崩塌还有72小时。地狱的气息弥漫在空气中。",
						"french": "72 heures avant l'effondrement de la frontière. L'aura de l'enfer remplissait l'air.",
						"spanish": "72 horas hasta el colapso del límite. El aura del infierno llenaba el aire.",
						"vietnamese": "Còn 72 giờ cho đến khi ranh giới sụp đổ. Hơi thở địa ngục tràn ngập không khí.",
						"thai": "72 ชั่วโมงก่อนการล่มสลายของพรมแดน กลิ่นอายแห่งนรกอบอวลไปทั่วอากาศ",
						"hindi": "सीमा के पतन तक 72 घंटे। नर्क की आभा हवा में भर गई।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "숨쉬기도 힘들어… 이 압박감은 뭐야?",
						"english": "Hard to breathe… What is this pressure?",
						"japanese": "息をするのも辛い… この圧迫感は何だ？",
						"chinese": "呼吸都困难… 这是什么压迫感？",
						"french": "Difficile de respirer… C'est quoi cette pression ?",
						"spanish": "Difícil respirar… ¿Qué es esta presión?",
						"vietnamese": "Khó thở quá… Áp lực này là gì vậy?",
						"thai": "หายใจแทบไม่ออก… ความรู้สึกกดดันนี่มันอะไรกัน?",
						"hindi": "साँस लेना भी मुश्किल है… यह दबाव क्या है?"
					},
					"type": "speech"
				},
				{
					"action": "enter",
					"speaker": "brim",
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이건… 영혼들의 비명이야.",
						"english": "These are… the screams of souls.",
						"japanese": "これは… 魂の悲鳴だ。",
						"chinese": "这是… 灵魂的尖叫。",
						"french": "Ce sont… les cris des âmes.",
						"spanish": "Estos son… los gritos de las almas.",
						"vietnamese": "Đây là… tiếng hét của những linh hồn.",
						"thai": "นี่คือ… เสียงกรีดร้องของวิญญาณ",
						"hindi": "ये… आत्माओं की चीखें हैं।"
					},
					"emotion": "sad",
					"speaker": "brim"
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "비명?",
						"english": "Screams?",
						"japanese": "悲鳴？",
						"chinese": "尖叫？",
						"french": "Des cris ?",
						"spanish": "¿Gritos?",
						"vietnamese": "Hét?",
						"thai": "เสียงกรีดร้อง?",
						"hindi": "चीखें?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "지옥에 갇힌 자들의 고통. 갈수록 선명해져.",
						"english": "The suffering of those trapped in hell. It grows clearer.",
						"japanese": "地獄に囚われた者たちの苦痛。ますます鮮明になっていく。",
						"chinese": "被困在地狱中的痛苦。越来越清晰。",
						"french": "La souffrance de ceux piégés en enfer. Elle devient de plus en plus claire.",
						"spanish": "El sufrimiento de los atrapados en el infierno. Se hace cada vez más claro.",
						"vietnamese": "Nỗi đau của những kẻ bị mắc kẹt dưới địa ngục. Càng lúc càng rõ ràng.",
						"thai": "ความเจ็บปวดของผู้ที่ติดอยู่ในนรก มันยิ่งชัดเจนขึ้นเรื่อยๆ",
						"hindi": "नर्क में फंसे लोगों का दुख। यह और अधिक स्पष्ट होता जा रहा है।"
					},
					"emotion": "sad",
					"speaker": "brim"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "brim",
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "속삭임이 들려… Abyssal Core에 대한 이야기.",
						"english": "I hear whispers… stories of the Abyssal Core.",
						"japanese": "囁きが聞こえる… Abyssal Coreについての話だ。",
						"chinese": "我听到窃窃私语… 关于深渊核心的故事。",
						"french": "J'entends des murmures… des histoires du Noyau Abyssal.",
						"spanish": "Escucho susurros… historias del Núcleo Abisal.",
						"vietnamese": "Nghe thấy tiếng thì thầm… về Abyssal Core.",
						"thai": "ฉันได้ยินเสียงกระซิบ… เรื่องราวเกี่ยวกับแกนกลางแห่งความมืด",
						"hindi": "मुझे फुसफुसाहट सुनाई देती है… एबिसल कोर की कहानियाँ।"
					},
					"emotion": "sad",
					"speaker": "brim"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "뭐라고 하는 건데?",
						"english": "What is it saying?",
						"japanese": "何を言っているんだ？",
						"chinese": "它在说什么？",
						"french": "Que dit-il ?",
						"spanish": "¿Qué dice?",
						"vietnamese": "Nó đang nói gì vậy?",
						"thai": "มันกำลังพูดอะไรอยู่?",
						"hindi": "यह क्या कह रहा है?"
					}
				},
				{
					"speaker": "brim",
					"type": "speech",
					"content": {
						"korean": "단편적인 이야기뿐. 모든 것이 조각나 있어.",
						"english": "Only fragmented stories. Everything is in pieces.",
						"japanese": "断片的な話ばかり。全てがバラバラだ。",
						"chinese": "只有零碎的故事。一切都支离破碎。",
						"french": "Seulement des histoires fragmentées. Tout est en morceaux.",
						"spanish": "Solo historias fragmentadas. Todo está hecho pedazos.",
						"vietnamese": "Chỉ những câu chuyện rời rạc. Mọi thứ đều vụn vỡ.",
						"thai": "มีแต่เรื่องราวที่กระจัดกระจาย ทุกสิ่งแตกเป็นเสี่ยงๆ",
						"hindi": "केवल खंडित कहानियाँ। सब कुछ टुकड़ों में बंटा है।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "고통과 분노로 가득한… 왜곡된 진실.",
						"english": "Filled with pain and rage... a twisted truth.",
						"japanese": "苦痛と怒りに満ちた…歪んだ真実。",
						"chinese": "充满痛苦与愤怒…扭曲的真相。",
						"french": "Rempli de douleur et de rage… une vérité tordue.",
						"spanish": "Lleno de dolor y rabia… una verdad retorcida.",
						"vietnamese": "Đầy rẫy đau đớn và phẫn nộ… một sự thật méo mó.",
						"thai": "เต็มไปด้วยความเจ็บปวดและความโกรธ…ความจริงที่บิดเบี้ยว",
						"hindi": "दर्द और क्रोध से भरा… एक विकृत सत्य।"
					},
					"speaker": "brim"
				},
				{
					"speaker": "character_2",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "왜곡됐다고? 그럼 뭐가 진짜야?",
						"english": "Twisted? Then what's real?",
						"japanese": "歪んでいるだと？なら、何が真実なんだ？",
						"chinese": "扭曲的？那什么是真的？",
						"french": "Tordu ? Alors, qu'est-ce qui est réel ?",
						"spanish": "¿Retorcido? Entonces, ¿qué es real?",
						"vietnamese": "Méo mó ư? Vậy cái gì là thật?",
						"thai": "บิดเบี้ยวเหรอ? แล้วอะไรคือความจริงล่ะ?",
						"hindi": "विकृत? तो फिर असली क्या है?"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "비명 소리가 찢어질 듯 날카로워졌다. 광기가 주변을 감쌌다.",
						"english": "The screams grew piercingly sharp. Madness enveloped the surroundings.",
						"japanese": "悲鳴が耳をつんざくほど鋭くなった。狂気が辺りを包み込んだ。",
						"chinese": "尖叫声变得撕心裂肺。疯狂笼罩了四周。",
						"french": "Les cris devinrent stridents. La folie enveloppait les environs.",
						"spanish": "Los gritos se volvieron desgarradores. La locura envolvió los alrededores.",
						"vietnamese": "Tiếng hét trở nên chói tai. Sự điên loạn bao trùm xung quanh.",
						"thai": "เสียงกรีดร้องแหลมคมจนแทบจะบาดแก้วหู ความบ้าคลั่งปกคลุมไปทั่ว",
						"hindi": "चीखें चीरने वाली तीखी हो गईं। पागलपन ने चारों ओर घेर लिया।"
					}
				},
				{
					"spot": [
						4,
						3
					],
					"speaker": "brim",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "점점 강해져… 이 비명은 단순한 고통이 아니야.",
						"english": "Growing stronger... these screams aren't just pain.",
						"japanese": "どんどん強くなる…この悲鳴は単なる苦痛じゃない。",
						"chinese": "越来越强…这尖叫不只是痛苦。",
						"french": "De plus en plus fort… ces cris ne sont pas que de la douleur.",
						"spanish": "Cada vez más fuerte… estos gritos no son solo dolor.",
						"vietnamese": "Càng lúc càng mạnh… tiếng hét này không chỉ là đau đớn.",
						"thai": "มันแรงขึ้นเรื่อยๆ…เสียงกรีดร้องนี้ไม่ใช่แค่ความเจ็บปวด",
						"hindi": "और तेज़ होती जा रही है… यह चीख सिर्फ़ दर्द नहीं है।"
					},
					"speaker": "brim"
				},
				{
					"content": {
						"korean": "무슨 소리야?",
						"english": "What do you mean?",
						"japanese": "どういうことだ？",
						"chinese": "什么意思？",
						"french": "Que veux-tu dire ?",
						"spanish": "¿Qué quieres decir?",
						"vietnamese": "Ý gì vậy?",
						"thai": "หมายความว่าไง?",
						"hindi": "तुम्हारा क्या मतलब है?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "끔찍한 고통 속에서도… 강렬한 염원이 느껴져.",
						"english": "Even amidst terrible agony... I sense an intense longing.",
						"japanese": "恐ろしい苦痛の中でも…強烈な願いが感じられる。",
						"chinese": "即使在极度的痛苦中…也能感受到强烈的渴望。",
						"french": "Même au milieu d'une terrible agonie… je sens un ardent désir.",
						"spanish": "Incluso en medio de una agonía terrible… siento un deseo intenso.",
						"vietnamese": "Ngay cả trong nỗi đau khủng khiếp… tôi cảm nhận được một khát vọng mãnh liệt.",
						"thai": "แม้จะอยู่ในความเจ็บปวดอันแสนสาหัส…แต่ก็รู้สึกถึงความปรารถนาอันแรงกล้า",
						"hindi": "भयानक पीड़ा में भी… एक तीव्र इच्छा महसूस हो रही है।"
					},
					"type": "speech",
					"speaker": "brim"
				},
				{
					"speaker": "character_3",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "염원? 고통받는 영혼이 뭘 바란다는 거야?",
						"english": "Longing? What could a suffering soul wish for?",
						"japanese": "願い？苦しむ魂が何を願うというんだ？",
						"chinese": "渴望？一个受苦的灵魂能渴望什么？",
						"french": "Un désir ? Que pourrait bien vouloir une âme souffrante ?",
						"spanish": "¿Deseo? ¿Qué podría desear un alma sufriente?",
						"vietnamese": "Khát vọng ư? Một linh hồn đau khổ thì mong muốn điều gì?",
						"thai": "ความปรารถนาเหรอ? วิญญาณที่ทุกข์ทรมานจะปรารถนาอะไรได้?",
						"hindi": "इच्छा? एक पीड़ित आत्मा क्या चाहेगी?"
					}
				},
				{
					"speaker": "brim",
					"emotion": "sad",
					"content": {
						"korean": "복수… 혹은 구원… 혼돈스러워.",
						"english": "Revenge... or salvation... It's chaotic.",
						"japanese": "復讐…あるいは救済…混沌としている。",
						"chinese": "复仇…亦或是救赎…一片混乱。",
						"french": "La vengeance… ou la rédemption… C'est le chaos.",
						"spanish": "Venganza… o salvación… Es un caos.",
						"vietnamese": "Báo thù… hay là cứu rỗi… Thật hỗn loạn.",
						"thai": "การแก้แค้น…หรือการไถ่บาป…สับสนไปหมด",
						"hindi": "प्रतिशोध… या मोक्ष… यह भ्रमित करने वाला है।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "점점 깊어지는 틈새. 이제 돌아갈 수 없었다.",
						"english": "The chasm deepened. There was no turning back now.",
						"japanese": "深まる亀裂。もう引き返せなかった。",
						"chinese": "裂缝越来越深。已无法回头。",
						"french": "La brèche s'approfondissait. Impossible de revenir en arrière.",
						"spanish": "La grieta se hacía más profunda. Ya no había vuelta atrás.",
						"vietnamese": "Khe nứt ngày càng sâu. Không thể quay lại được nữa.",
						"thai": "รอยแยกยิ่งลึกขึ้นเรื่อยๆ ไม่มีทางย้อนกลับแล้ว",
						"hindi": "दरार गहरी होती जा रही थी। अब वापस लौटना असंभव था।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "brim",
					"action": "enter",
					"spot": [
						1,
						3
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "brim",
					"content": {
						"korean": "저기… 낡은 비석이 있어.",
						"english": "Look... there's an old monument.",
						"japanese": "あれ… 古い石碑がある。",
						"chinese": "看… 有块旧石碑。",
						"french": "Tiens… il y a une vieille stèle.",
						"spanish": "Mira... hay una vieja estela.",
						"vietnamese": "Kìa... có một bia đá cũ.",
						"thai": "นั่น... มีแท่นหินเก่าๆ อยู่",
						"hindi": "देखो... एक पुराना स्मारक है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "뭐가 쓰여있는데?",
						"english": "What does it say?",
						"japanese": "何が書いてある？",
						"chinese": "上面写了什么？",
						"french": "Qu'est-ce qu'il y a d'écrit ?",
						"spanish": "¿Qué pone?",
						"vietnamese": "Viết gì vậy?",
						"thai": "มีอะไรเขียนอยู่?",
						"hindi": "क्या लिखा है?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "brim",
					"type": "speech",
					"content": {
						"korean": "'희생'과 '경계'… 알아볼 수 없는 상형문자.",
						"english": "'Sacrifice' and 'Boundary'... incomprehensible hieroglyphs.",
						"japanese": "「犠牲」と「境界」…判読不能な象形文字。",
						"chinese": "“牺牲”与“边界”… 无法辨认的象形文字。",
						"french": "'Sacrifice' et 'Frontière'... des hiéroglyphes indéchiffrables.",
						"spanish": "'Sacrificio' y 'Límite'... jeroglíficos incomprensibles.",
						"vietnamese": "'Hy sinh' và 'Giới hạn'... những ký tự tượng hình không thể nhận ra.",
						"thai": "'การเสียสละ' และ 'ขอบเขต'... อักษรอียิปต์โบราณที่อ่านไม่ออก",
						"hindi": "'बलिदान' और 'सीमा'... समझ से परे चित्रलिपि।"
					},
					"emotion": "base"
				},
				{
					"speaker": "brim",
					"emotion": "sad",
					"content": {
						"korean": "이 길을 멈추면… 모든 것이 무너질 거야.",
						"english": "If we stop on this path... everything will collapse.",
						"japanese": "この道を止めれば… 全てが崩れ去るだろう。",
						"chinese": "若止步于此… 一切都将崩塌。",
						"french": "Si nous arrêtons ce chemin… tout s'effondrera.",
						"spanish": "Si detenemos este camino... todo se desmoronará.",
						"vietnamese": "Nếu dừng lại con đường này... mọi thứ sẽ sụp đổ.",
						"thai": "ถ้าเราหยุดอยู่แค่นี้... ทุกอย่างจะพังทลายลง",
						"hindi": "अगर हम इस राह पर रुक गए... तो सब कुछ ढह जाएगा।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "멈출 생각 없어. 진실을 봐야겠어.",
						"english": "I have no intention of stopping. I must see the truth.",
						"japanese": "止まるつもりはない。真実を見るべきだ。",
						"chinese": "我不会停下。我必须看到真相。",
						"french": "Je n'ai pas l'intention d'arrêter. Je dois voir la vérité.",
						"spanish": "No pienso parar. Debo ver la verdad.",
						"vietnamese": "Tôi không định dừng lại. Tôi phải nhìn thấy sự thật.",
						"thai": "ฉันไม่คิดจะหยุด ฉันต้องเห็นความจริง",
						"hindi": "रुकने का इरादा नहीं है। मुझे सच देखना होगा।"
					},
					"emotion": "angry",
					"speaker": "character_4"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "하찮은 것들. 내 놀이터에 온 걸 환영한다.",
						"english": "Insignificant beings. Welcome to my playground.",
						"japanese": "取るに足らぬ者たちよ。我が遊び場へようこそ。",
						"chinese": "渺小的东西们。欢迎来到我的游乐场。",
						"french": "Créatures insignifiantes. Bienvenue dans mon terrain de jeu.",
						"spanish": "Seres insignificantes. Bienvenidos a mi patio de juegos.",
						"vietnamese": "Những kẻ nhỏ bé. Chào mừng đến với sân chơi của ta.",
						"thai": "เจ้าพวกไร้ค่า ยินดีต้อนรับสู่สนามเด็กเล่นของข้า",
						"hindi": "तुच्छ प्राणी। मेरे खेल के मैदान में तुम्हारा स्वागत है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "네가 이 모든 걸 꾸민 거야?",
						"english": "Did you orchestrate all of this?",
						"japanese": "お前がこの全てを仕組んだのか？",
						"chinese": "是你策划了这一切？",
						"french": "C'est toi qui as orchestré tout ça ?",
						"spanish": "¿Tú orquestaste todo esto?",
						"vietnamese": "Ngươi đã sắp đặt tất cả chuyện này sao?",
						"thai": "ทั้งหมดนี่เป็นฝีมือของแกงั้นเหรอ?",
						"hindi": "क्या तुमने यह सब रचा है?"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "내가? 난 그저 주어진 역할에 충실할 뿐.",
						"english": "Me? I'm just fulfilling my given role.",
						"japanese": "私が？私はただ与えられた役割に忠実なだけだ。",
						"chinese": "我？我只是在忠实地履行我的职责罢了。",
						"french": "Moi ? Je ne fais que remplir mon rôle.",
						"spanish": "¿Yo? Solo cumplo mi papel asignado.",
						"vietnamese": "Ta sao? Ta chỉ đang thực hiện vai trò được giao thôi.",
						"thai": "ข้าเหรอ? ข้าแค่ทำตามบทบาทที่ได้รับมอบหมายเท่านั้น",
						"hindi": "मैं? मैं बस अपनी दी गई भूमिका निभा रहा हूँ।"
					},
					"emotion": "base"
				},
				{
					"speaker": "brim",
					"action": "enter",
					"spot": [
						3,
						3
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "brim",
					"type": "speech",
					"content": {
						"korean": "저 자의 힘은… 영혼들의 고통에서 나와.",
						"english": "That one's power... comes from the suffering of souls.",
						"japanese": "あの者の力は… 魂たちの苦痛から来る。",
						"chinese": "那家伙的力量… 源于灵魂的痛苦。",
						"french": "Le pouvoir de cet être… vient de la souffrance des âmes.",
						"spanish": "El poder de ese ser... proviene del sufrimiento de las almas.",
						"vietnamese": "Sức mạnh của kẻ đó... đến từ nỗi đau của các linh hồn.",
						"thai": "พลังของหมอนั่น... มาจากความทรมานของวิญญาณ",
						"hindi": "उसकी शक्ति... आत्माओं के कष्ट से आती है।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "우리가 널 멈추겠어!",
						"english": "We'll stop you!",
						"japanese": "私たちが止める！",
						"chinese": "我们会阻止你！",
						"french": "On t'arrêtera !",
						"spanish": "¡Te detendremos!",
						"vietnamese": "Chúng ta sẽ ngăn ngươi lại!",
						"thai": "เราจะหยุดแกเอง!",
						"hindi": "हम तुम्हें रोकेंगे!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_1"
				},
				{
					"speaker": "brim",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "조심해… 저자의 속삭임은 환영을 만들어.",
						"english": "Be careful… their whispers create illusions.",
						"japanese": "気をつけて…奴の囁きは幻影を生み出す。",
						"chinese": "小心…它的低语会制造幻象。",
						"french": "Attention… ses murmures créent des illusions.",
						"spanish": "Cuidado… sus susurros crean ilusiones.",
						"vietnamese": "Cẩn thận… những lời thì thầm của hắn tạo ra ảo ảnh.",
						"thai": "ระวังให้ดี…เสียงกระซิบของมันสร้างภาพลวงตา",
						"hindi": "सावधान… उसकी फुसफुसाहटें भ्रम पैदा करती हैं।"
					}
				},
				{
					"direction": "down",
					"action": "exit",
					"speaker": "brim",
					"duration_ms": 400,
					"type": "direction"
				},
				{
					"speaker": "random_boss",
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "덤벼라. 너희의 분노가 날 더 강하게 할 뿐.",
						"english": "Bring it on. Your rage only makes me stronger.",
						"japanese": "かかってこい。お前たちの怒りは、私を強くするだけだ。",
						"chinese": "放马过来。你们的愤怒只会让我更强大。",
						"french": "Venez. Votre fureur ne fait que me rendre plus fort.",
						"spanish": "Atacad. Vuestra ira solo me hace más fuerte.",
						"vietnamese": "Cứ xông vào. Cơn giận của các ngươi chỉ khiến ta mạnh hơn thôi.",
						"thai": "เข้ามาเลย. ความโกรธของพวกแกมีแต่จะทำให้ฉันแข็งแกร่งขึ้น",
						"hindi": "हमला करो। तुम्हारा क्रोध मुझे और शक्तिशाली बनाएगा।"
					}
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "어리석은 것들. 이 고통은 영원하다.",
						"english": "Fools. This suffering is eternal.",
						"japanese": "愚かな者ども。この苦痛は永遠だ。",
						"chinese": "愚蠢的东西。这痛苦是永恒的。",
						"french": "Imbéciles. Cette souffrance est éternelle.",
						"spanish": "Necios. Este sufrimiento es eterno.",
						"vietnamese": "Bọn ngu xuẩn. Nỗi đau này là vĩnh cửu.",
						"thai": "พวกโง่เง่า. ความเจ็บปวดนี้เป็นนิรันดร์.",
						"hindi": "मूर्खों। यह दर्द शाश्वत है।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "아직… 끝나지 않았어. 포기하지 않아!",
						"english": "It's not… over yet. I won't give up!",
						"japanese": "まだ…終わってない。諦めない！",
						"chinese": "还没…结束。我不会放弃的！",
						"french": "Ce n'est… pas encore fini. Je n'abandonnerai pas !",
						"spanish": "Aún… no ha terminado. ¡No me rendiré!",
						"vietnamese": "Vẫn chưa… kết thúc. Ta sẽ không bỏ cuộc!",
						"thai": "ยัง…ไม่จบ. ฉันไม่ยอมแพ้!",
						"hindi": "अभी… खत्म नहीं हुआ। मैं हार नहीं मानूंगा!"
					}
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						3
					],
					"speaker": "brim",
					"action": "enter"
				},
				{
					"speaker": "brim",
					"type": "speech",
					"content": {
						"korean": "영혼들의 비명이… 더 커지고 있어. 다시 일어서야 해.",
						"english": "The screams of the souls are… getting louder. I must rise again.",
						"japanese": "魂たちの悲鳴が…大きくなっている。再び立ち上がらねば。",
						"chinese": "灵魂的尖叫声…越来越响了。我必须再次站起来。",
						"french": "Les cris des âmes… deviennent plus forts. Je dois me relever.",
						"spanish": "Los gritos de las almas… se hacen más fuertes. Debo levantarme de nuevo.",
						"vietnamese": "Tiếng thét của các linh hồn… đang lớn dần. Ta phải đứng dậy lần nữa.",
						"thai": "เสียงกรีดร้องของวิญญาณ…ดังขึ้นเรื่อยๆ. เราต้องลุกขึ้นอีกครั้ง.",
						"hindi": "आत्माओं की चीखें… और तेज़ हो रही हैं। मुझे फिर से उठना होगा।"
					},
					"emotion": "sad"
				},
				{
					"type": "direction",
					"duration_ms": 400,
					"speaker": "brim",
					"action": "exit",
					"direction": "down"
				}
			],
			"win_dialogue": [
				{
					"emotion": "angry",
					"content": {
						"korean": "크윽… 이건… 끝이 아니다. 진정한 공포는 아직 시작도 안 했어…!",
						"english": "Ugh… this isn't the end. The true horror hasn't even begun…!",
						"japanese": "くっ…これは…終わりではない。真の恐怖はまだ始まってすらいない…！",
						"chinese": "呃…这…还没结束。真正的恐惧甚至还没开始…！",
						"french": "Pff… ce n'est… pas la fin. La vraie horreur n'a même pas encore commencé… !",
						"spanish": "Uf… esto… no es el final. El verdadero horror ni siquiera ha empezado…!",
						"vietnamese": "Khụ… đây… không phải là kết thúc. Nỗi kinh hoàng thực sự còn chưa bắt đầu…!",
						"thai": "อึก…นี่…ยังไม่ใช่จุดจบ. ความสยองขวัญที่แท้จริงยังไม่เริ่มขึ้นด้วยซ้ำ…!",
						"hindi": "उफ़… यह… अंत नहीं है। असली डर तो अभी शुरू भी नहीं हुआ…!"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "끝이야. 모든 고통을 멈출 거야.",
						"english": "It's over. I'll stop all the suffering.",
						"japanese": "終わりだ。全ての苦痛を止める。",
						"chinese": "结束了。我会停止所有的痛苦。",
						"french": "C'est fini. Je mettrai fin à toutes les souffrances.",
						"spanish": "Se acabó. Detendré todo el sufrimiento.",
						"vietnamese": "Kết thúc rồi. Ta sẽ chấm dứt mọi đau khổ.",
						"thai": "จบแล้ว. ฉันจะหยุดความเจ็บปวดทั้งหมด.",
						"hindi": "यह खत्म हो गया। मैं सभी दर्द रोक दूंगा।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "brim",
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "하나를 멈췄을 뿐… 더 깊은 곳에 근원이 있어.",
						"english": "We only stopped one… there's a source deeper below.",
						"japanese": "一つを止めただけ…もっと深い場所に根源がある。",
						"chinese": "只阻止了一个…更深处还有根源。",
						"french": "Nous n'en avons arrêté qu'un… une source plus profonde existe.",
						"spanish": "Solo detuvimos uno… hay una fuente más profunda.",
						"vietnamese": "Mới chỉ ngăn chặn được một… còn có nguồn gốc sâu hơn nữa.",
						"thai": "หยุดได้แค่หนึ่ง…แต่ยังมีต้นตอที่ลึกกว่านั้น.",
						"hindi": "हमने सिर्फ़ एक को रोका… और गहरी जड़ें हैं।"
					},
					"emotion": "sad",
					"speaker": "brim"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "한숨 돌릴 틈도 없이, 탐험대는 더 깊은 심연으로 향한다. 진실은 점점 더 왜곡되어 있었다.",
						"english": "Without a moment to rest, the expedition team delves deeper into the abyss. The truth was becoming increasingly distorted.",
						"japanese": "息つく間もなく、探検隊はさらなる深淵へと向かう。真実はますます歪められていた。",
						"chinese": "不及喘息，探险队便深入更深的深渊。真相变得愈发扭曲。",
						"french": "Sans un instant de répit, l'équipe d'expédition s'enfonce dans l'abîme. La vérité se tordait de plus en plus.",
						"spanish": "Sin un respiro, el equipo de expedición se adentra en el abismo. La verdad se distorsionaba cada vez más.",
						"vietnamese": "Không kịp nghỉ ngơi, đội thám hiểm tiếp tục tiến sâu vào vực thẳm. Sự thật ngày càng bị bóp méo.",
						"thai": "โดยไม่ทันได้พักหายใจ คณะสำรวจก็มุ่งหน้าสู่ห้วงลึกยิ่งขึ้น. ความจริงกำลังบิดเบือนไปเรื่อยๆ.",
						"hindi": "एक पल के लिए भी आराम किए बिना, खोज दल गहरे अथाह में उतर गया। सच्चाई और भी विकृत होती जा रही थी।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"지옥의 기운이 온 세계를 집어삼켰다.",
			"경계 붕괴까지 남은 시간. 숫자는 점점 줄어들었다.",
			"고통받는 영혼의 비명이 메아리쳤다. 진실은 왜곡된 채…",
			"분노와 절망만이 가득한 길. 탐험대는 나아갈 뿐이었다."
		],
		"english": [
			"The aura of hell engulfed the world.",
			"Time remaining until the boundary collapse. The numbers dwindled.",
			"Screams of tormented souls echoed. The truth distorted…",
			"A path filled only with rage and despair. The expedition pressed onward."
		],
		"japanese": [
			"地獄の気が全世界を飲み込んだ。",
			"境界崩壊までの残り時間。数字は次第に減っていった。",
			"苦しむ魂の叫びがこだました。真実は歪められたまま…",
			"怒りと絶望だけが満ちた道。探検隊は進むしかなかった。"
		],
		"chinese": [
			"地狱的气息吞噬了整个世界。",
			"距离境界崩塌所剩时间。数字不断减少。",
			"受苦灵魂的尖叫回荡。真相被扭曲…",
			"一条充满愤怒和绝望的道路。探险队只能前进。"
		],
		"french": [
			"L'aura de l'enfer a englouti le monde entier.",
			"Temps restant avant l'effondrement de la frontière. Les chiffres diminuaient.",
			"Les cris des âmes tourmentées résonnaient. La vérité déformée…",
			"Un chemin rempli de rage et de désespoir. L'expédition avançait."
		],
		"spanish": [
			"El aura del infierno envolvió el mundo entero.",
			"Tiempo restante hasta el colapso del límite. Los números disminuían.",
			"Los gritos de almas atormentadas resonaban. La verdad distorsionada…",
			"Un camino lleno solo de rabia y desesperación. La expedición siguió adelante."
		],
		"vietnamese": [
			"Hơi thở địa ngục nuốt chửng cả thế giới.",
			"Thời gian còn lại đến khi ranh giới sụp đổ. Con số dần cạn kiệt.",
			"Tiếng hét của những linh hồn đau khổ vang vọng. Sự thật bị bóp méo…",
			"Con đường chỉ toàn giận dữ và tuyệt vọng. Đoàn thám hiểm vẫn tiếp tục tiến lên."
		],
		"thai": [
			"กลิ่นอายแห่งนรกกลืนกินโลกทั้งใบ",
			"เวลาที่เหลือจนกว่าจะถึงจุดล่มสลาย ตัวเลขลดลงเรื่อยๆ",
			"เสียงกรีดร้องของวิญญาณที่ทรมานดังก้อง ความจริงบิดเบี้ยว…",
			"เส้นทางที่เต็มไปด้วยความโกรธแค้นและความสิ้นหวัง คณะสำรวจเดินหน้าต่อไป"
		],
		"hindi": [
			"नर्क की आभा ने पूरी दुनिया को निगल लिया।",
			"सीमा के पतन तक बचा हुआ समय। संख्याएँ कम होती गईं।",
			"पीड़ित आत्माओं की चीखें गूँज उठीं। सत्य विकृत हो गया…",
			"केवल क्रोध और निराशा से भरा रास्ता। अभियान दल आगे बढ़ता रहा।"
		]
	}
} as const;
