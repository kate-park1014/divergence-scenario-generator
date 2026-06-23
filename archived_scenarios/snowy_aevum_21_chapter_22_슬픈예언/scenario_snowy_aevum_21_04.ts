export const scenario_snowy_aevum_21_04 = {
	"scenario_id": "snowy_aevum_21_04",
	"order": 4,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"anuk": {
			"id": "mon_8736797d-779a-4748-8633-d15c1eaf9be7",
			"name": {
				"korean": "아눅",
				"english": "Anuk",
				"japanese": "アヌーク",
				"chinese": "阿努克",
				"french": "Anuk",
				"spanish": "Anuk",
				"vietnamese": "Anuk",
				"thai": "อนุก",
				"hindi": "अनुक"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/19485274-e873-45c8-5043-f4ff65aa2a00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/9a79ecfd-8cc6-4461-3790-763822522500/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"갑작스러운 눈보라가 모든 시야를 집어삼켰다.",
			"차가운 바람 속에서, 알 수 없는 비명이 들려오는 듯했다.",
			"길을 잃은 자는 허무를 느꼈다.",
			"이것은 단순한 바람 소리가 아니었다."
		],
		"english": [
			"A sudden blizzard swallowed all visibility.",
			"In the cold wind, an unknown scream seemed to echo.",
			"The lost one felt a sense of futility.",
			"This was not just the sound of the wind."
		],
		"japanese": [
			"突然の吹雪が視界を全て飲み込んだ。",
			"冷たい風の中、未知の悲鳴が聞こえるようだった。",
			"道に迷った者は虚無を感じた。",
			"これはただの風の音ではなかった。"
		],
		"chinese": [
			"突如其来的暴风雪吞噬了所有的视线。",
			"寒风中，似乎传来了一声不知名的尖叫。",
			"迷失者感到了虚无。",
			"这不仅仅是风声。"
		],
		"french": [
			"Un blizzard soudain a englouti toute visibilité.",
			"Dans le vent froid, un cri inconnu semblait résonner.",
			"Celui qui était perdu ressentit le vide.",
			"Ce n'était pas un simple bruit de vent."
		],
		"spanish": [
			"Una repentina ventisca devoró toda la visibilidad.",
			"En el viento frío, un grito desconocido parecía resonar.",
			"El que se había perdido sintió un vacío.",
			"Esto no era solo el sonido del viento."
		],
		"vietnamese": [
			"Một trận bão tuyết bất ngờ nuốt chửng mọi tầm nhìn.",
			"Trong gió lạnh, một tiếng hét không rõ nguồn gốc dường như vang vọng.",
			"Kẻ lạc lối cảm thấy hư vô.",
			"Đây không chỉ là tiếng gió."
		],
		"thai": [
			"พายุหิมะกะทันหันกลืนกินทัศนวิสัยทั้งหมด",
			"ในลมหนาว ดูเหมือนมีเสียงกรีดร้องที่ไม่รู้จักดังขึ้น",
			"ผู้หลงทางรู้สึกถึงความว่างเปล่า",
			"นี่ไม่ใช่แค่เสียงลม"
		],
		"hindi": [
			"अचानक आए बर्फीले तूफान ने सारी दृश्यता निगल ली।",
			"ठंडी हवा में, एक अज्ञात चीख गूँजती हुई लग रही थी।",
			"खोए हुए व्यक्ति ने निरर्थकता महसूस की।",
			"यह सिर्फ हवा की आवाज़ नहीं थी।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "눈보라가 거세게 휘몰아쳤다. 한 치 앞도 보이지 않았다.",
						"english": "A blizzard raged fiercely. Not an inch ahead was visible.",
						"japanese": "吹雪が激しく吹き荒れた。一寸先も見えなかった。",
						"chinese": "暴风雪猛烈地肆虐着。前方寸步难行。",
						"french": "Un blizzard faisait rage. Pas un pouce en avant n'était visible.",
						"spanish": "Una ventisca rugía ferozmente. No se veía ni una pulgada.",
						"vietnamese": "Bão tuyết hoành hành dữ dội. Không nhìn thấy một tấc phía trước.",
						"thai": "พายุหิมะพัดกระหน่ำอย่างรุนแรง มองไม่เห็นแม้แต่ก้าวเดียวข้างหน้า",
						"hindi": "एक बर्फीला तूफान ज़ोरों से चल रहा था। एक इंच आगे भी दिखाई नहीं दे रहा था।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "길을 잃었어….",
						"english": "I'm lost....",
						"japanese": "道に迷った…。",
						"chinese": "我迷路了……。",
						"french": "Je suis perdu...",
						"spanish": "Estoy perdido...",
						"vietnamese": "Tôi lạc rồi....",
						"thai": "ฉันหลงทาง....",
						"hindi": "मैं खो गया हूँ...।"
					},
					"emotion": "sad"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "anuk",
					"spot": [
						5,
						2
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "…여기는, 갇힌 비명 소리가 들리는 곳.",
						"english": "...This is where trapped screams are heard.",
						"japanese": "…ここは、閉じ込められた悲鳴が聞こえる場所。",
						"chinese": "……这里，是能听到被困尖叫声的地方。",
						"french": "…C'est ici qu'on entend des cris piégés.",
						"spanish": "…Aquí es donde se escuchan gritos atrapados.",
						"vietnamese": "...Đây là nơi nghe thấy những tiếng hét bị mắc kẹt.",
						"thai": "...ที่นี่คือที่ที่ได้ยินเสียงกรีดร้องที่ถูกกักขัง",
						"hindi": "...यह वह जगह है जहाँ फँसी हुई चीखें सुनाई देती हैं।"
					},
					"speaker": "anuk",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "당신은 누구죠?",
						"english": "Who are you?",
						"japanese": "あなたは誰ですか？",
						"chinese": "你是谁？",
						"french": "Qui êtes-vous ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Anh là ai?",
						"thai": "คุณคือใคร?",
						"hindi": "तुम कौन हो?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "anuk",
					"type": "speech",
					"content": {
						"korean": "아눅. 영혼의 메아리를 듣는 자.",
						"english": "Anuk. The one who hears the echoes of souls.",
						"japanese": "アヌーク。魂のこだまを聞く者。",
						"chinese": "阿努克。倾听灵魂回声之人。",
						"french": "Anouk. Celui qui entend les échos des âmes.",
						"spanish": "Anuk. El que escucha los ecos de las almas.",
						"vietnamese": "Anuk. Người nghe thấy tiếng vọng của linh hồn.",
						"thai": "อนุก ผู้ที่ได้ยินเสียงสะท้อนของวิญญาณ",
						"hindi": "अनूक। आत्माओं की गूँज सुनने वाला।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "따라와요. 길은 보이지 않지만, 느껴지는 대로.",
						"english": "Follow me. The path isn't visible, but follow what you feel.",
						"japanese": "ついてきて。道は見えないけれど、感じるままに。",
						"chinese": "跟着我。虽然看不见路，但凭感觉走。",
						"french": "Suivez-moi. Le chemin n'est pas visible, mais suivez ce que vous ressentez.",
						"spanish": "Sígueme. El camino no es visible, pero sigue lo que sientes.",
						"vietnamese": "Hãy đi theo tôi. Con đường không rõ ràng, nhưng hãy đi theo cảm giác của bạn.",
						"thai": "ตามมา ทางไม่ปรากฏ แต่จงทำตามที่รู้สึก",
						"hindi": "मेरे पीछे आओ। रास्ता दिखाई नहीं दे रहा है, लेकिन जो महसूस हो, उसका अनुसरण करो।"
					},
					"speaker": "anuk",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						5,
						2
					],
					"speaker": "anuk"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이 바람 소리, 들리나요?",
						"english": "Can you hear this wind?",
						"japanese": "この風の音、聞こえますか？",
						"chinese": "这风声，你听到了吗？",
						"french": "Entendez-vous ce vent ?",
						"spanish": "¿Oyes este viento?",
						"vietnamese": "Bạn có nghe thấy tiếng gió này không?",
						"thai": "คุณได้ยินเสียงลมนี้ไหม?",
						"hindi": "क्या आप यह हवा की आवाज़ सुन सकते हैं?"
					},
					"speaker": "anuk"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "그냥 바람 소리 같아요.",
						"english": "It just sounds like wind.",
						"japanese": "ただの風の音だと思います。",
						"chinese": "听起来像是风声。",
						"french": "On dirait juste le vent.",
						"spanish": "Parece solo el viento.",
						"vietnamese": "Nghe có vẻ chỉ là tiếng gió thôi.",
						"thai": "ฟังดูเหมือนแค่เสียงลมครับ/ค่ะ",
						"hindi": "यह सिर्फ हवा की आवाज़ लगती है।"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "아니. 이건… 차가운 침묵 속에 갇힌 비명.",
						"english": "No. This is… a scream trapped in cold silence.",
						"japanese": "違う。これは… 冷たい沈黙に閉じ込められた悲鳴だ。",
						"chinese": "不。这是……困在冰冷寂静中的尖叫。",
						"french": "Non. C'est… un cri piégé dans un silence glacial.",
						"spanish": "No. Esto es… un grito atrapado en un frío silencio.",
						"vietnamese": "Không. Đây là… một tiếng hét bị mắc kẹt trong sự im lặng lạnh lẽo.",
						"thai": "ไม่. นี่คือ… เสียงกรีดร้องที่ถูกขังอยู่ในความเงียบงันอันหนาวเหน็บ",
						"hindi": "नहीं। यह… ठंडी ख़ामोशी में फँसी एक चीख है।"
					},
					"speaker": "anuk"
				},
				{
					"type": "speech",
					"content": {
						"korean": "운명에 저항하려는 자들의 덧없는 외침이지.",
						"english": "The fleeting cries of those who try to resist fate.",
						"japanese": "運命に抗おうとする者たちの儚い叫びだ。",
						"chinese": "是那些试图反抗命运之人的徒劳呐喊。",
						"french": "Les cris éphémères de ceux qui tentent de résister au destin.",
						"spanish": "Los gritos efímeros de quienes intentan resistirse al destino.",
						"vietnamese": "Những tiếng kêu phù du của những kẻ cố gắng chống lại số phận.",
						"thai": "เสียงร้องอันเลือนลางของผู้ที่พยายามต่อต้านโชคชะตา",
						"hindi": "यह उन लोगों की क्षणभंगुर चीखें हैं जो नियति का विरोध करने की कोशिश करते हैं।"
					},
					"speaker": "anuk",
					"emotion": "sad"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "운명이라니….",
						"english": "Fate…?",
						"japanese": "運命、ですか…。",
						"chinese": "命运……",
						"french": "Le destin…?",
						"spanish": "¿El destino…?",
						"vietnamese": "Số phận sao…?",
						"thai": "โชคชะตา…?",
						"hindi": "नियति…?"
					}
				},
				{
					"emotion": "base",
					"speaker": "anuk",
					"type": "speech",
					"content": {
						"korean": "모든 것은 이미 정해져 있어. 바꿀 수 있는 건 없어.",
						"english": "Everything is already decided. Nothing can be changed.",
						"japanese": "全ては既に決まっている。何も変えられない。",
						"chinese": "一切都已注定。没有什么能改变。",
						"french": "Tout est déjà décidé. Rien ne peut être changé.",
						"spanish": "Todo ya está decidido. Nada se puede cambiar.",
						"vietnamese": "Mọi thứ đã được định đoạt. Không có gì có thể thay đổi.",
						"thai": "ทุกสิ่งถูกกำหนดไว้แล้ว ไม่มีอะไรเปลี่ยนแปลงได้",
						"hindi": "सब कुछ पहले से ही तय है। कुछ भी बदला नहीं जा सकता।"
					}
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "anuk",
					"spot": [
						5,
						2
					]
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "보세요. 저 흔적들.",
						"english": "Look. Those traces.",
						"japanese": "見てください。あの痕跡を。",
						"chinese": "看。那些痕迹。",
						"french": "Regardez. Ces traces.",
						"spanish": "Mira. Esos rastros.",
						"vietnamese": "Hãy nhìn kìa. Những dấu vết đó.",
						"thai": "ดูสิ ร่องรอยเหล่านั้น",
						"hindi": "देखो। वे निशान।"
					},
					"speaker": "anuk"
				},
				{
					"type": "speech",
					"content": {
						"korean": "눈보라 속에서 희미하게 고대 부족의 상징이 보였다. 형태는 익숙했지만, 낯선 기분이었다.",
						"english": "Faint symbols of an ancient tribe could be seen in the blizzard. Their form was familiar, yet felt strange.",
						"japanese": "吹雪の中で、古代部族の象徴がかすかに見えた。その形は見慣れていたが、どこか見知らぬ感覚だった。",
						"chinese": "在暴风雪中，依稀可见古老部落的象征。形状熟悉，却有种陌生的感觉。",
						"french": "Dans le blizzard, de faibles symboles d'une ancienne tribu étaient visibles. Leur forme était familière, mais étrange.",
						"spanish": "En la ventisca, símbolos tenues de una tribu antigua eran visibles. Su forma era familiar, pero se sentía extraña.",
						"vietnamese": "Trong bão tuyết, những biểu tượng mờ nhạt của một bộ tộc cổ xưa hiện ra. Hình dạng quen thuộc, nhưng lại mang một cảm giác xa lạ.",
						"thai": "ในพายุหิมะ มองเห็นสัญลักษณ์ของชนเผ่าโบราณอย่างเลือนราง รูปทรงคุ้นเคย แต่ให้ความรู้สึกแปลกประหลาด",
						"hindi": "बर्फ़ीले तूफ़ान में, एक प्राचीन जनजाति के धुँधले प्रतीक दिखाई दिए। उनका स्वरूप परिचित था, फिर भी अजीब लग रहा था।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "무엇을 의미하나요?",
						"english": "What do they mean?",
						"japanese": "何を意味するのですか？",
						"chinese": "它们意味着什么？",
						"french": "Que signifient-ils ?",
						"spanish": "¿Qué significan?",
						"vietnamese": "Chúng có ý nghĩa gì?",
						"thai": "พวกมันหมายความว่าอะไร?",
						"hindi": "उनका क्या मतलब है?"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "맹세와 계약의 흔적. 그리고… 그 대가.",
						"english": "Traces of oaths and covenants. And… their price.",
						"japanese": "誓いと契約の痕跡。そして…その代償。",
						"chinese": "誓言和契约的痕迹。以及……其代价。",
						"french": "Des traces de serments et de pactes. Et… leur prix.",
						"spanish": "Rastros de juramentos y pactos. Y… su precio.",
						"vietnamese": "Dấu vết của lời thề và giao ước. Và… cái giá phải trả.",
						"thai": "ร่องรอยของคำสาบานและพันธสัญญา และ… ราคาที่ต้องจ่าย",
						"hindi": "शपथों और वाचाओं के निशान। और… उनकी कीमत।"
					},
					"speaker": "anuk"
				},
				{
					"emotion": "sad",
					"speaker": "anuk",
					"type": "speech",
					"content": {
						"korean": "지켜지지 않은 약속은 언제나 더 큰 비극을 불러.",
						"english": "Unkept promises always lead to greater tragedies.",
						"japanese": "守られなかった約束は、常にさらなる悲劇を招く。",
						"chinese": "未兑现的承诺总是带来更大的悲剧。",
						"french": "Les promesses non tenues mènent toujours à de plus grandes tragédies.",
						"spanish": "Las promesas incumplidas siempre traen mayores tragedias.",
						"vietnamese": "Những lời hứa không được giữ luôn dẫn đến những bi kịch lớn hơn.",
						"thai": "คำสัญญาที่ไม่รักษามักนำมาซึ่งโศกนาฏกรรมที่ยิ่งใหญ่กว่าเสมอ",
						"hindi": "अधूरी प्रतिज्ञाएँ हमेशा बड़ी त्रासदियों को जन्म देती हैं।"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…어떤 비극을 말하는 거죠?",
						"english": "...What kind of tragedy are you talking about?",
						"japanese": "…どのような悲劇を言っているのですか？",
						"chinese": "……你指的是哪种悲剧？",
						"french": "...De quelle tragédie parlez-vous ?",
						"spanish": "...¿De qué tipo de tragedia hablas?",
						"vietnamese": "...Bạn đang nói về bi kịch nào?",
						"thai": "...คุณกำลังพูดถึงโศกนาฏกรรมแบบไหน?",
						"hindi": "...आप किस तरह की त्रासदी की बात कर रहे हैं?"
					},
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "anuk",
					"spot": [
						5,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "base",
					"speaker": "anuk",
					"type": "speech",
					"content": {
						"korean": "이제 더 이상 돌아갈 수 없어.",
						"english": "There's no turning back now.",
						"japanese": "もう後戻りはできない。",
						"chinese": "已经无法回头了。",
						"french": "On ne peut plus revenir en arrière maintenant.",
						"spanish": "Ya no hay vuelta atrás.",
						"vietnamese": "Không thể quay lại được nữa rồi.",
						"thai": "ตอนนี้กลับไปไม่ได้แล้ว",
						"hindi": "अब पीछे नहीं हटा जा सकता।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "어디로 가야 하죠? 무엇을 찾아야 하죠?",
						"english": "Where should I go? What should I find?",
						"japanese": "どこへ行けばいい？何を探せばいい？",
						"chinese": "我该去哪里？该寻找什么？",
						"french": "Où dois-je aller ? Que dois-je trouver ?",
						"spanish": "¿A dónde debo ir? ¿Qué debo encontrar?",
						"vietnamese": "Tôi nên đi đâu? Tôi nên tìm gì?",
						"thai": "ฉันควรไปที่ไหน? ฉันควรหาอะไร?",
						"hindi": "मुझे कहाँ जाना चाहिए? मुझे क्या खोजना चाहिए?"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "anuk",
					"type": "speech",
					"content": {
						"korean": "그저… 나아가세요. 그 비명 소리가 이끄는 곳으로.",
						"english": "Just... go forward. To where the screams lead.",
						"japanese": "ただ…進んでください。その悲鳴が導く場所へ。",
						"chinese": "只是……向前走吧。走向那尖叫声所指引的地方。",
						"french": "Simplement... avancez. Là où les cris vous mènent.",
						"spanish": "Solo... sigue adelante. Hacia donde los gritos te guíen.",
						"vietnamese": "Cứ... tiến lên. Đến nơi những tiếng hét dẫn lối.",
						"thai": "แค่... ก้าวไปข้างหน้า ไปยังที่ที่เสียงกรีดร้องนำทาง",
						"hindi": "बस... आगे बढ़ो। जहाँ चीखें ले जाएँ।"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이 비명 소리가….",
						"english": "These screams...",
						"japanese": "この悲鳴が…。",
						"chinese": "这些尖叫声……",
						"french": "Ces cris...",
						"spanish": "Estos gritos...",
						"vietnamese": "Những tiếng hét này...",
						"thai": "เสียงกรีดร้องเหล่านี้...",
						"hindi": "ये चीखें..."
					},
					"speaker": "character_any"
				},
				{
					"speaker": "anuk",
					"type": "speech",
					"content": {
						"korean": "침묵 속에서, 진실은 더욱 깊어지는 법.",
						"english": "In silence, truth deepens.",
						"japanese": "沈黙の中で、真実はより深まるものだ。",
						"chinese": "在沉默中，真相愈发深沉。",
						"french": "Dans le silence, la vérité s'approfondit.",
						"spanish": "En el silencio, la verdad se profundiza.",
						"vietnamese": "Trong sự im lặng, sự thật càng thêm sâu sắc.",
						"thai": "ในความเงียบงัน ความจริงย่อมลึกซึ้งยิ่งขึ้น",
						"hindi": "मौन में, सत्य और गहरा होता है।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…결국, 이것도 정해진 운명이었을 뿐….",
						"english": "...In the end, this too was merely predetermined fate...",
						"japanese": "…結局、これも定められた運命だったに過ぎない…。",
						"chinese": "……最终，这也只是注定的命运……。",
						"french": "...Après tout, cela aussi n'était qu'un destin préétabli...",
						"spanish": "...Al final, esto también era solo el destino preestablecido...",
						"vietnamese": "...Rốt cuộc, đây cũng chỉ là số phận đã được định sẵn...",
						"thai": "…ในที่สุด นี่ก็เป็นเพียงโชคชะตาที่ถูกกำหนดไว้แล้ว…",
						"hindi": "...अंत में, यह भी केवल पूर्वनिर्धारित भाग्य था..."
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…내가 사라져도, 비명은 멈추지 않아….",
						"english": "...Even if I vanish, the screams won't stop...",
						"japanese": "…私が消えても、悲鳴は止まない…。",
						"chinese": "……即使我消失了，尖叫声也不会停止……。",
						"french": "...Même si je disparais, les cris ne cesseront pas...",
						"spanish": "...Incluso si desaparezco, los gritos no se detendrán...",
						"vietnamese": "...Dù ta có biến mất, tiếng thét vẫn không ngừng...",
						"thai": "…แม้ข้าจะหายไป เสียงกรีดร้องก็จะไม่หยุด…",
						"hindi": "...यदि मैं गायब भी हो जाऊँ, तो भी चीखें बंद नहीं होंगी..."
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "무슨 소리야?",
						"english": "What do you mean?",
						"japanese": "どういうことだ？",
						"chinese": "你在说什么？",
						"french": "Que veux-tu dire ?",
						"spanish": "¿Qué quieres decir?",
						"vietnamese": "Ngươi nói gì vậy?",
						"thai": "เจ้าหมายความว่าอะไร?",
						"hindi": "तुम्हारा क्या मतलब है?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "anuk",
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "anuk",
					"type": "speech",
					"content": {
						"korean": "…차가운 바람은 계속 불어올 거예요. 더욱 깊은 침묵 속으로.",
						"english": "...The cold wind will continue to blow. Into an even deeper silence.",
						"japanese": "…冷たい風は吹き続けるでしょう。より深い沈黙の中へ。",
						"chinese": "……寒风会继续吹拂。吹向更深的沉寂。",
						"french": "...Le vent froid continuera de souffler. Vers un silence encore plus profond.",
						"spanish": "...El viento frío seguirá soplando. Hacia un silencio aún más profundo.",
						"vietnamese": "...Gió lạnh vẫn sẽ tiếp tục thổi. Vào sâu hơn nữa trong sự tĩnh lặng.",
						"thai": "…สายลมอันหนาวเหน็บจะยังคงพัดพาลึกเข้าไปในความเงียบงันที่ลึกซึ้งยิ่งขึ้น",
						"hindi": "...ठंडी हवा बहती रहेगी। और भी गहरी खामोशी में।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "폭풍이 잠잠해졌다. 그러나 마음속에는 알 수 없는 허무만이 남았다.",
						"english": "The storm has subsided. But only an inexplicable emptiness remains in my heart.",
						"japanese": "嵐は静まった。しかし、心には得体の知れない虚無だけが残った。",
						"chinese": "风暴平息了。然而，心中只剩下莫名的虚无。",
						"french": "La tempête s'est calmée. Mais seul un vide inexplicable demeure dans mon cœur.",
						"spanish": "La tormenta ha amainado. Pero solo un vacío inexplicable permanece en mi corazón.",
						"vietnamese": "Bão tố đã lắng xuống. Nhưng trong lòng chỉ còn lại sự trống rỗng không tên.",
						"thai": "พายุสงบลงแล้ว แต่ในใจกลับเหลือเพียงความว่างเปล่าที่ไม่อาจเข้าใจได้",
						"hindi": "तूफान थम गया। लेकिन मन में केवल एक अवर्णनीय शून्यता बची है।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "진실은 아직 더 깊은 곳에 갇혀 있었다.",
						"english": "The truth was still trapped in a deeper place.",
						"japanese": "真実はまだ、もっと深い場所に閉じ込められていた。",
						"chinese": "真相仍被困在更深的地方。",
						"french": "La vérité était encore enfermée plus profondément.",
						"spanish": "La verdad aún estaba atrapada en un lugar más profundo.",
						"vietnamese": "Sự thật vẫn còn bị giam cầm ở một nơi sâu hơn.",
						"thai": "ความจริงยังคงถูกกักขังอยู่ในที่ที่ลึกยิ่งกว่า",
						"hindi": "सत्य अभी भी और गहरे स्थान पर फंसा हुआ था।"
					},
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "…또 다른 어리석은 자가 도착했군.",
						"english": "...Another fool has arrived.",
						"japanese": "…また別の愚か者が到着したか。",
						"chinese": "……又一个愚蠢的家伙到了。",
						"french": "...Un autre insensé est arrivé.",
						"spanish": "...Otro tonto ha llegado.",
						"vietnamese": "...Lại một kẻ ngu ngốc khác đã đến.",
						"thai": "...คนโง่อีกคนมาถึงแล้ว",
						"hindi": "...एक और मूर्ख आ गया है।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "당신이 이 폭풍의 근원인가!",
						"english": "Are you the source of this storm?!",
						"japanese": "あなたがこの嵐の根源なのか！",
						"chinese": "你是这场风暴的根源吗？！",
						"french": "Êtes-vous la source de cette tempête ?!",
						"spanish": "¿Eres la fuente de esta tormenta?!",
						"vietnamese": "Ngươi là nguồn gốc của cơn bão này sao?!",
						"thai": "คุณคือต้นกำเนิดของพายุนี้หรือเปล่า!",
						"hindi": "क्या तुम इस तूफान का स्रोत हो?!"
					}
				},
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "이 폭풍은… 갇힌 비명들의 합창.",
						"english": "This storm is... a chorus of trapped screams.",
						"japanese": "この嵐は…囚われた悲鳴たちの合唱だ。",
						"chinese": "这场风暴是……被困尖叫的合唱。",
						"french": "Cette tempête est... un chœur de cris piégés.",
						"spanish": "Esta tormenta es... un coro de gritos atrapados.",
						"vietnamese": "Cơn bão này là... một điệp khúc của những tiếng hét bị mắc kẹt.",
						"thai": "พายุนี้คือ... บทเพลงประสานเสียงของเสียงกรีดร้องที่ถูกกักขัง",
						"hindi": "यह तूफ़ान... फँसी हुई चीखों का एक कोरस है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "네가 운명에 맞선다 해도, 이 비극은 끝나지 않아.",
						"english": "Even if you defy fate, this tragedy will not end.",
						"japanese": "運命に抗っても、この悲劇は終わらない。",
						"chinese": "即使你反抗命运，这场悲剧也不会结束。",
						"french": "Même si tu défies le destin, cette tragédie ne prendra pas fin.",
						"spanish": "Aunque desafíes al destino, esta tragedia no terminará.",
						"vietnamese": "Dù ngươi có chống lại số phận, bi kịch này vẫn sẽ không kết thúc.",
						"thai": "แม้เจ้าจะขัดขืนโชคชะตา โศกนาฏกรรมนี้ก็ไม่มีวันสิ้นสุด",
						"hindi": "यदि तुम भाग्य का सामना भी करोगे, तो भी यह त्रासदी समाप्त नहीं होगी।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "anuk"
				},
				{
					"speaker": "anuk",
					"type": "speech",
					"content": {
						"korean": "…그의 말이 맞아. {random_boss}는 오래된 계약의 희생양.",
						"english": "...He's right. {random_boss} is a victim of an ancient pact.",
						"japanese": "…彼の言う通りだ。{random_boss}は古き契約の犠牲者。",
						"chinese": "……他说得对。{random_boss}是古老契约的牺牲品。",
						"french": "...Il a raison. {random_boss} est une victime d'un ancien pacte.",
						"spanish": "...Tiene razón. {random_boss} es una víctima de un antiguo pacto.",
						"vietnamese": "...Hắn nói đúng. {random_boss} là vật tế của một khế ước cổ xưa.",
						"thai": "…เขาพูดถูก {random_boss} คือเหยื่อของพันธสัญญาโบราณ",
						"hindi": "...वह सही है। {random_boss} एक प्राचीन समझौते का शिकार है।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "운명의 수레바퀴는 멈추지 않아.",
						"english": "The wheel of fate never stops.",
						"japanese": "運命の輪は止まらない。",
						"chinese": "命运的齿轮永不停歇。",
						"french": "La roue du destin ne s'arrête jamais.",
						"spanish": "La rueda del destino nunca se detiene.",
						"vietnamese": "Bánh xe số phận không ngừng quay.",
						"thai": "กงล้อแห่งโชคชะตาไม่เคยหยุดนิ่ง",
						"hindi": "भाग्य का पहिया कभी नहीं रुकता।"
					},
					"speaker": "anuk"
				},
				{
					"action": "exit",
					"direction": "down",
					"duration_ms": 400,
					"type": "direction",
					"speaker": "anuk"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "아니! 여기서 끝낼 거야!",
						"english": "No! I'll end it here!",
						"japanese": "いや！ここで終わらせる！",
						"chinese": "不！我会在那儿结束它！",
						"french": "Non ! J'en finirai ici !",
						"spanish": "¡No! ¡Lo acabaré aquí!",
						"vietnamese": "Không! Ta sẽ kết thúc nó ở đây!",
						"thai": "ไม่! ข้าจะจบมันที่นี่!",
						"hindi": "नहीं! मैं इसे यहीं खत्म करूँगा!"
					},
					"speaker": "character_any"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "눈보라가 모든 것을 집어삼켰다. 차가운 비명 소리가 귓가를 맴돌았다.",
						"english": "The blizzard consumed everything. Cold screams echoed in my ears.",
						"japanese": "吹雪が全てを飲み込んだ。冷たい悲鳴が耳にまとわりついた。",
						"chinese": "暴风雪吞噬了一切。冰冷的尖叫声在我耳边回荡。",
						"french": "Le blizzard a tout englouti. Des cris glaçants résonnaient à mes oreilles.",
						"spanish": "La ventisca lo consumió todo. Gritos helados resonaron en mis oídos.",
						"vietnamese": "Cơn bão tuyết nuốt chửng mọi thứ. Những tiếng thét lạnh lẽo văng vẳng bên tai.",
						"thai": "พายุหิมะกลืนกินทุกสิ่ง เสียงกรีดร้องเย็นยะเยือกดังก้องในหู",
						"hindi": "बर्फीले तूफान ने सब कुछ निगल लिया। ठंडी चीखें मेरे कानों में गूँज उठीं।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "하찮은 저항… 운명은 거스를 수 없어.",
						"english": "Futile resistance... Fate cannot be defied.",
						"japanese": "無駄な抵抗…運命には逆らえない。",
						"chinese": "微不足道的抵抗……命运无法逆转。",
						"french": "Résistance futile… Le destin ne peut être défié.",
						"spanish": "Resistencia inútil... El destino no se puede desafiar.",
						"vietnamese": "Sự kháng cự vô ích... Số phận không thể chống lại.",
						"thai": "การต่อต้านที่ไร้ค่า... ชะตากรรมไม่อาจต้านทานได้",
						"hindi": "तुच्छ प्रतिरोध... भाग्य को बदला नहीं जा सकता।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "…아직 끝나지 않았어. 결코 포기하지 않아!",
						"english": "...It's not over yet. I will never give up!",
						"japanese": "…まだ終わってない。決して諦めない！",
						"chinese": "……还没结束。我绝不放弃！",
						"french": "...Ce n'est pas encore fini. Je n'abandonnerai jamais !",
						"spanish": "...Aún no ha terminado. ¡Nunca me rendiré!",
						"vietnamese": "...Chưa kết thúc đâu. Tôi sẽ không bao giờ bỏ cuộc!",
						"thai": "...ยังไม่จบ! ฉันจะไม่มีวันยอมแพ้!",
						"hindi": "...अभी खत्म नहीं हुआ है। मैं कभी हार नहीं मानूँगा!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"id": 15
		}
	]
} as const;
