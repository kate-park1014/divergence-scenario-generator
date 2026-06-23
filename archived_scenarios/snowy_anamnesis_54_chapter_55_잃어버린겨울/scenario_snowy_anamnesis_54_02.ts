export const scenario_snowy_anamnesis_54_02 = {
	"scenario_id": "snowy_anamnesis_54_02",
	"order": 2,
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
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "탐험대는 더욱 깊은 설원 속으로 진입했다. 매서운 바람이 살을 찢는 듯했다.",
						"english": "The expedition ventured deeper into the snowfields. The biting wind felt like it would tear skin.",
						"japanese": "探検隊はさらに深い雪原へと進んだ。身を切るような風が肌を裂くかのようだった。",
						"chinese": "探险队深入雪原。凛冽的寒风如刀割般刺骨。",
						"french": "L'expédition s'enfonça plus profondément dans les champs de neige. Le vent mordant semblait déchirer la peau.",
						"spanish": "La expedición se adentró más en los campos nevados. El viento helado parecía desgarrar la piel.",
						"vietnamese": "Đoàn thám hiểm tiến sâu hơn vào vùng tuyết. Cơn gió cắt da cắt thịt.",
						"thai": "คณะสำรวจรุกคืบเข้าไปในทุ่งหิมะลึกยิ่งขึ้น ลมพัดแรงราวกับจะฉีกผิวหนัง",
						"hindi": "अभियान दल बर्फीले मैदानों में और गहराई तक चला गया। चुभने वाली हवा ऐसी थी मानो खाल चीर देगी।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "anuk",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						5,
						3
					]
				},
				{
					"speaker": "anuk",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "여기까지 오리라곤 생각 못 했는데.",
						"english": "Never thought we'd make it this far.",
						"japanese": "まさかここまで来るとは思わなかった。",
						"chinese": "没想到能走到这里。",
						"french": "Je n'aurais jamais cru que nous irions si loin.",
						"spanish": "Nunca pensé que llegaríamos tan lejos.",
						"vietnamese": "Không ngờ chúng ta lại đi xa đến vậy.",
						"thai": "ไม่คิดเลยว่าจะมาได้ไกลถึงขนาดนี้",
						"hindi": "सोचा नहीं था कि हम यहाँ तक आ पाएँगे।"
					}
				},
				{
					"content": {
						"korean": "당신이… 아눅?",
						"english": "You're... Anuk?",
						"japanese": "あなたが… アヌーク？",
						"chinese": "你是… 阿努克？",
						"french": "Vous êtes... Anouk ?",
						"spanish": "¿Eres... Anuk?",
						"vietnamese": "Ngươi là… Anuk?",
						"thai": "ท่านคือ... อานุก?",
						"hindi": "आप... अनूक हैं?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "anuk",
					"type": "speech",
					"content": {
						"korean": "그래. 이 혹한 속에서 길을 잃은 자들을 인도하는 자다.",
						"english": "Yes. I guide those lost in this bitter cold.",
						"japanese": "ああ。この極寒の中で道に迷った者たちを導く者だ。",
						"chinese": "是的。我是指引在这严寒中迷失之人。",
						"french": "Oui. Je suis celle qui guide les égarés dans ce froid mordant.",
						"spanish": "Sí. Soy quien guía a los perdidos en este frío implacable.",
						"vietnamese": "Phải. Ta là người dẫn đường cho những kẻ lạc lối trong cái giá lạnh khắc nghiệt này.",
						"thai": "ใช่ ฉันคือผู้ชี้นำผู้ที่หลงทางในความหนาวเหน็บนี้",
						"hindi": "हाँ। मैं इस भीषण ठंड में भटके हुए लोगों का मार्गदर्शन करता हूँ।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "anuk",
					"content": {
						"korean": "이걸 봐라. 눈밭에서 겨우 찾았다.",
						"english": "Look at this. Barely found it in the snow.",
						"japanese": "これを見ろ。雪の中からやっと見つけた。",
						"chinese": "看看这个。好不容易才在雪地里找到的。",
						"french": "Regarde ça. Je l'ai à peine trouvé dans la neige.",
						"spanish": "Mira esto. Apenas lo encontré en la nieve.",
						"vietnamese": "Nhìn này. Mãi mới tìm thấy nó trong tuyết.",
						"thai": "ดูนี่สิ ฉันเพิ่งจะหามันเจอในลานหิมะ",
						"hindi": "इसे देखो। मुश्किल से इसे बर्फ़ में पाया।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "어린아이의 장신구…?",
						"english": "A child's ornament...?",
						"japanese": "子供の装飾品…？",
						"chinese": "一个小孩的饰品…？",
						"french": "Un ornement d'enfant...?",
						"spanish": "¿El adorno de un niño...?",
						"vietnamese": "Trang sức của một đứa trẻ...?",
						"thai": "เครื่องประดับของเด็ก...?",
						"hindi": "एक बच्चे का आभूषण...?"
					}
				},
				{
					"emotion": "sad",
					"speaker": "anuk",
					"type": "speech",
					"content": {
						"korean": "오래 전, 이곳을 지키겠다 맹세했던 자들의 흔적이지.",
						"english": "Traces of those who swore to protect this place, long ago.",
						"japanese": "遠い昔、この地を守ると誓った者たちの痕跡だ。",
						"chinese": "这是很久以前，那些誓言守护此地之人的痕迹。",
						"french": "Les traces de ceux qui ont juré de protéger ce lieu, il y a longtemps.",
						"spanish": "Las huellas de quienes juraron proteger este lugar, hace mucho tiempo.",
						"vietnamese": "Dấu vết của những người đã thề bảo vệ nơi này, từ rất lâu rồi.",
						"thai": "ร่องรอยของผู้ที่สาบานว่าจะปกป้องสถานที่แห่งนี้เมื่อนานมาแล้ว",
						"hindi": "उन लोगों के निशान जिन्होंने बहुत पहले इस जगह की रक्षा करने की कसम खाई थी।"
					}
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"speaker": "anuk",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "고대의 맹세는… 무거웠어.",
						"english": "The ancient oath... was heavy.",
						"japanese": "古の誓いは… 重かった。",
						"chinese": "古老的誓言… 曾是如此沉重。",
						"french": "L'ancien serment... était lourd.",
						"spanish": "El antiguo juramento... fue pesado.",
						"vietnamese": "Lời thề cổ xưa... thật nặng nề.",
						"thai": "คำสาบานโบราณ... ช่างหนักอึ้ง",
						"hindi": "प्राचीन शपथ... भारी थी।"
					},
					"type": "speech",
					"speaker": "anuk",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "맹세라니요?",
						"english": "An oath?",
						"japanese": "誓いですか？",
						"chinese": "誓言？",
						"french": "Un serment ?",
						"spanish": "¿Un juramento?",
						"vietnamese": "Lời thề ư?",
						"thai": "คำสาบานหรือครับ?",
						"hindi": "शपथ?"
					}
				},
				{
					"content": {
						"korean": "땅을 지키겠다고 약속했지. 하지만 그 대가가… 비극이었지.",
						"english": "They promised to protect the land. But the price... was tragedy.",
						"japanese": "彼らは土地を守ると約束した。だがその代償は… 悲劇だった。",
						"chinese": "他们曾承诺守护这片土地。但代价… 却是悲剧。",
						"french": "Ils avaient promis de protéger la terre. Mais le prix... fut une tragédie.",
						"spanish": "Prometieron proteger la tierra. Pero el precio... fue una tragedia.",
						"vietnamese": "Họ đã hứa bảo vệ vùng đất này. Nhưng cái giá phải trả... là bi kịch.",
						"thai": "พวกเขาให้คำมั่นว่าจะปกป้องแผ่นดิน แต่สิ่งตอบแทน... คือโศกนาฏกรรม",
						"hindi": "उन्होंने भूमि की रक्षा करने का वादा किया था। लेकिन उसकी कीमत... त्रासदी थी।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "anuk"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "대체 무슨 일이 있었던 거죠…?",
						"english": "What exactly happened...?",
						"japanese": "一体何があったのですか…？",
						"chinese": "到底发生了什么…？",
						"french": "Que s'est-il passé, exactement...?",
						"spanish": "¿Qué fue lo que pasó, exactamente...?",
						"vietnamese": "Chính xác thì chuyện gì đã xảy ra...?",
						"thai": "เกิดอะไรขึ้นกันแน่...?",
						"hindi": "आखिर क्या हुआ था...?"
					}
				},
				{
					"content": {
						"korean": "자세히는 나도 모른다. 다만, 약속을 어기는 것보다 지키는 것이 더 큰 고통을 줄 때도 있는 법.",
						"english": "I don't know the details. But sometimes, upholding a promise brings greater pain than breaking it.",
						"japanese": "詳細は私も知らない。だが、約束を破るよりも守ることの方が、より大きな苦痛をもたらすこともあるのだ。",
						"chinese": "详细情况我也不清楚。但有时，信守承诺比违背承诺带来更大的痛苦。",
						"french": "Je n'en connais pas les détails. Mais parfois, tenir une promesse apporte plus de souffrance que la briser.",
						"spanish": "No conozco los detalles. Pero a veces, mantener una promesa trae un dolor mayor que romperla.",
						"vietnamese": "Ta không rõ chi tiết. Nhưng đôi khi, giữ lời hứa lại mang đến nỗi đau lớn hơn cả việc phá vỡ nó.",
						"thai": "ข้าไม่รู้รายละเอียดนัก แต่บางครั้ง การรักษาสัญญาอาจนำมาซึ่งความเจ็บปวดที่ยิ่งใหญ่กว่าการละเมิดเสียอีก",
						"hindi": "मुझे विवरण नहीं पता। लेकिन कभी-कभी, वादा निभाने से उसे तोड़ने से भी ज़्यादा दर्द होता है।"
					},
					"type": "speech",
					"speaker": "anuk",
					"emotion": "base"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "anuk",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"emotion": "base",
					"speaker": "anuk",
					"type": "speech",
					"content": {
						"korean": "장신구가 이리로 향하라고 이끄는 듯했다.",
						"english": "The ornament seemed to guide me this way.",
						"japanese": "装飾品がこちらへ導くようだった。",
						"chinese": "饰品似乎正指引我到这里。",
						"french": "L'ornement semblait me guider par ici.",
						"spanish": "El adorno parecía guiarme por aquí.",
						"vietnamese": "Món trang sức dường như dẫn lối ta đến đây.",
						"thai": "เครื่องประดับดูเหมือนจะนำทางมาทางนี้",
						"hindi": "आभूषण मुझे इस रास्ते पर मार्गदर्शन करता हुआ लग रहा था।"
					}
				},
				{
					"content": {
						"korean": "여기, 뭐가 있는 거죠?",
						"english": "What's in here?",
						"japanese": "ここには、何が？",
						"chinese": "这里有什么？",
						"french": "Qu'y a-t-il ici ?",
						"spanish": "¿Qué hay aquí?",
						"vietnamese": "Ở đây có gì vậy?",
						"thai": "มีอะไรอยู่ในนี้ครับ?",
						"hindi": "यहाँ क्या है?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "잊힌 온기… 혹은 끝없는 한기… 둘 중 하나겠지.",
						"english": "Forgotten warmth... or endless chill... it's one or the other.",
						"japanese": "忘れられた温もり… あるいは終わりのない冷気… そのどちらかだろう。",
						"chinese": "被遗忘的温暖… 亦或是无尽的寒冷… 两者必居其一。",
						"french": "Une chaleur oubliée... ou un froid sans fin... ce sera l'un ou l'autre.",
						"spanish": "Un calor olvidado... o un frío interminable... será uno de los dos.",
						"vietnamese": "Sự ấm áp bị lãng quên... hay cái lạnh vô tận... chắc là một trong hai.",
						"thai": "ความอบอุ่นที่ถูกลืม... หรือความหนาวเย็นไม่สิ้นสุด... คงจะเป็นอย่างใดอย่างหนึ่ง",
						"hindi": "भूली हुई गर्माहट... या अंतहीन ठंड... इन दोनों में से एक ही होगा।"
					},
					"emotion": "sad",
					"speaker": "anuk",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이제부터 더 위험해질 거다. 이 안엔 오직 절망만이 기다리고 있어.",
						"english": "It will get more dangerous from now on. Only despair awaits within.",
						"japanese": "ここからはさらに危険になる。この中には絶望だけが待ち受けている。",
						"chinese": "从现在起会更危险。这里面只有绝望在等待着。",
						"french": "À partir de maintenant, ce sera plus dangereux. Seul le désespoir vous attend ici.",
						"spanish": "A partir de ahora, será más peligroso. Solo la desesperación aguarda aquí dentro.",
						"vietnamese": "Từ bây giờ sẽ nguy hiểm hơn. Bên trong này chỉ có tuyệt vọng đang chờ đợi.",
						"thai": "จากนี้ไปจะอันตรายยิ่งขึ้น ข้างในนี้มีแต่ความสิ้นหวังรออยู่",
						"hindi": "अब से और भी खतरनाक होगा। इसके भीतर केवल निराशा प्रतीक्षा कर रही है।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "anuk"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						3
					],
					"type": "direction",
					"speaker": "anuk",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "anuk",
					"emotion": "sad",
					"content": {
						"korean": "이 앞이다. 맹세의 대가를 치르는 자가.",
						"english": "Ahead. The one paying the price of the vow.",
						"japanese": "この先だ。誓いの代償を払う者が。",
						"chinese": "就在前面。偿还誓言代价之人。",
						"french": "Devant. Celui qui paie le prix du serment.",
						"spanish": "Adelante. Aquel que paga el precio del juramento.",
						"vietnamese": "Phía trước. Kẻ đang trả giá cho lời thề.",
						"thai": "ข้างหน้า ผู้ที่กำลังชดใช้คำสาบาน",
						"hindi": "आगे। वह जो शपथ का मूल्य चुका रहा है।"
					}
				},
				{
					"content": {
						"korean": "누가요?",
						"english": "Who?",
						"japanese": "誰がですか？",
						"chinese": "谁？",
						"french": "Qui ?",
						"spanish": "¿Quién?",
						"vietnamese": "Ai?",
						"thai": "ใคร?",
						"hindi": "कौन?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "거대한 그림자가 한기를 몰고 다가왔다.",
						"english": "A colossal shadow approached, bringing a chilling cold.",
						"japanese": "巨大な影が寒気を連れて現れた。",
						"chinese": "巨大的影子带着寒气逼近。",
						"french": "Une ombre colossale s'approcha, apportant un froid glaçant.",
						"spanish": "Una sombra colosal se acercó, trayendo un frío escalofriante.",
						"vietnamese": "Một bóng đen khổng lồ tiến đến, mang theo hơi lạnh.",
						"thai": "เงาขนาดมหึมาเคลื่อนเข้ามา นำพาความเย็นยะเยือกมาด้วย",
						"hindi": "एक विशाल छाया शीतलता लाते हुए पास आई।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "침입자들… 감히 여기까지 온 어리석은 자들.",
						"english": "Intruders... Foolish ones who dared to come this far.",
						"japanese": "侵入者たち… ここまで来た愚か者め。",
						"chinese": "入侵者们…… 竟敢走到这里的愚蠢之徒。",
						"french": "Intrus... Fous qui avez osé venir jusqu'ici.",
						"spanish": "Intrusos... Necios que osasteis llegar hasta aquí.",
						"vietnamese": "Những kẻ xâm nhập... Những kẻ ngu ngốc dám đến tận đây.",
						"thai": "ผู้บุกรุก... พวกโง่เขลาที่กล้ามาถึงนี่",
						"hindi": "घुसपैठिए... मूर्ख जिन्होंने इतनी दूर आने की हिम्मत की।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "네가 이 한기를 부르는 존재인가!",
						"english": "Are you the one summoning this cold!",
						"japanese": "お前がこの寒気を呼び起こしているのか！",
						"chinese": "是你召来了这股寒气吗！",
						"french": "Est-ce toi qui invoques ce froid !",
						"spanish": "¿Eres tú quien convoca este frío?",
						"vietnamese": "Ngươi là kẻ triệu hồi hơi lạnh này sao!",
						"thai": "เจ้าคือผู้เรียกความหนาวเหน็บนี้มาใช่หรือไม่!",
						"hindi": "क्या तुम हो जो इस शीतलता को बुला रहे हो!"
					}
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "이 땅은 나의 것이고, 나의 겨울은 영원할 것이다.",
						"english": "This land is mine, and my winter shall be eternal.",
						"japanese": "この地は我のもの、我が冬は永遠なり。",
						"chinese": "这片土地是我的，我的冬天将永恒。",
						"french": "Cette terre est mienne, et mon hiver sera éternel.",
						"spanish": "Esta tierra es mía, y mi invierno será eterno.",
						"vietnamese": "Vùng đất này là của ta, và mùa đông của ta sẽ vĩnh cửu.",
						"thai": "ดินแดนนี้เป็นของข้า และฤดูหนาวของข้าจะคงอยู่ชั่วนิรันดร์",
						"hindi": "यह भूमि मेरी है, और मेरी सर्दी शाश्वत रहेगी।"
					}
				},
				{
					"emotion": "sad",
					"speaker": "anuk",
					"type": "speech",
					"content": {
						"korean": "저자는 얼어붙은 맹세의 그림자… 아이의 온기를… 찾아야 해.",
						"english": "That one is the shadow of a frozen vow... I must find the child's warmth.",
						"japanese": "あれは凍てついた誓いの影… 子供の温もりを… 見つけなければ。",
						"chinese": "那家伙是冰封誓言的影子…… 必须找到孩子的温暖。",
						"french": "C'est l'ombre d'un serment gelé... Je dois trouver la chaleur de l'enfant.",
						"spanish": "Ese es la sombra de un juramento helado... Debo encontrar el calor del niño.",
						"vietnamese": "Kẻ đó là bóng tối của lời thề đóng băng... Ta phải tìm thấy hơi ấm của đứa trẻ.",
						"thai": "นั่นคือเงาของคำสาบานที่แข็งตัว... ข้าต้องค้นหาความอบอุ่นของเด็ก",
						"hindi": "वह जमी हुई शपथ की छाया है... मुझे बच्चे की गर्माहट ढूंढनी होगी।"
					}
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "어리석은 자들… 이 얼어붙은 땅에서 벗어날 순 없다.",
						"english": "Fools... You cannot escape this frozen land.",
						"japanese": "愚か者たちめ…この凍てつく地から逃れることはできない。",
						"chinese": "愚蠢的家伙们…你们无法逃离这片冰冻之地。",
						"french": "Imbéciles... Vous ne pouvez pas échapper à cette terre gelée.",
						"spanish": "Necios... No podéis escapar de esta tierra helada.",
						"vietnamese": "Những kẻ ngốc… Ngươi không thể thoát khỏi vùng đất đóng băng này.",
						"thai": "พวกโง่เง่า… พวกเจ้าหนีจากดินแดนที่เยือกแข็งนี้ไปไม่ได้หรอก",
						"hindi": "मूर्खों... तुम इस जमी हुई भूमि से बच नहीं सकते।"
					}
				},
				{
					"content": {
						"korean": "젠장… 아직… 끝나지 않았어!",
						"english": "Damn it... it's not over yet!",
						"japanese": "ちくしょう… まだ… 終わってない！",
						"chinese": "该死……还没……结束！",
						"french": "Mince… ce n'est pas encore fini !",
						"spanish": "¡Maldita sea… aún… no ha terminado!",
						"vietnamese": "Chết tiệt… vẫn chưa… kết thúc!",
						"thai": "ให้ตายสิ... ยังไม่... จบ!",
						"hindi": "धिक्कार है... अभी... खत्म नहीं हुआ है!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "anuk",
					"type": "direction"
				},
				{
					"speaker": "anuk",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "맹세의 대가는… 혹독하다. 하지만… 약속은 지켜져야 한다.",
						"english": "The price of the vow... is steep. But... a promise must be kept.",
						"japanese": "誓いの代償は… 厳しい。だが… 約束は守られねばならない。",
						"chinese": "誓言的代价… 是惨重的。但是… 诺言必须遵守。",
						"french": "Le prix du serment… est lourd. Mais… une promesse doit être tenue.",
						"spanish": "El precio del juramento… es severo. Pero… una promesa debe cumplirse.",
						"vietnamese": "Cái giá của lời thề… thật khắc nghiệt. Nhưng… lời hứa phải được giữ.",
						"thai": "ค่าของคำสาบาน... นั้นแสนสาหัส. แต่... คำสัญญาต้องรักษาไว้.",
						"hindi": "शपथ की कीमत... कठिन है। लेकिन... वादा निभाना होगा।"
					}
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "탐험대는 다시 한번 혹한 속에서 일어설 준비를 했다.",
						"english": "The expedition prepared to rise once more from the bitter cold.",
						"japanese": "探検隊は、再び極寒の中で立ち上がる準備をした。",
						"chinese": "探险队再次准备在严寒中崛起。",
						"french": "L'expédition se prépara à se relever une fois de plus dans le froid glacial.",
						"spanish": "La expedición se preparó para levantarse una vez más en el frío glacial.",
						"vietnamese": "Đoàn thám hiểm đã sẵn sàng một lần nữa đứng dậy giữa giá lạnh khắc nghiệt.",
						"thai": "คณะสำรวจเตรียมพร้อมที่จะลุกขึ้นยืนอีกครั้งท่ามกลางความหนาวเหน็บ.",
						"hindi": "अभियान दल ने एक बार फिर भीषण ठंड में उठने की तैयारी की।"
					}
				}
			],
			"id": 15,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "눈보라가 걷히자, 거대한 얼음 석상이 모습을 드러냈다.",
						"english": "As the blizzard cleared, a colossal ice statue revealed itself.",
						"japanese": "吹雪が晴れると、巨大な氷の石像が姿を現した。",
						"chinese": "暴风雪消散后，一座巨大的冰雕石像显现出来。",
						"french": "Quand le blizzard se dissipa, une colossale statue de glace apparut.",
						"spanish": "Cuando la ventisca se disipó, una colosal estatua de hielo se reveló.",
						"vietnamese": "Khi bão tuyết tan, một bức tượng băng khổng lồ hiện ra.",
						"thai": "เมื่อพายุหิมะสงบลง รูปปั้นน้ำแข็งขนาดมหึมาก็ปรากฏกาย",
						"hindi": "जैसे ही बर्फीला तूफान साफ हुआ, एक विशाल बर्फ की मूर्ति प्रकट हुई।"
					}
				},
				{
					"content": {
						"korean": "이 장신구… 감히 잊힌 온기를 불러내려 하는가?",
						"english": "This ornament... Do you dare to awaken forgotten warmth?",
						"japanese": "この装身具… 忘れ去られた温もりを呼び起こそうというのか？",
						"chinese": "这件饰品…… 竟敢试图唤醒被遗忘的温暖？",
						"french": "Cet ornement... Oserez-vous évoquer une chaleur oubliée ?",
						"spanish": "Este adorno... ¿Osas invocar un calor olvidado?",
						"vietnamese": "Món trang sức này... Ngươi dám đánh thức hơi ấm đã bị lãng quên sao?",
						"thai": "เครื่องประดับนี้... เจ้ากล้าปลุกความอบอุ่นที่ถูกลืมเลือนขึ้นมาหรือ?",
						"hindi": "यह आभूषण... क्या तुम भूले हुए ताप को जगाने की हिम्मत करते हो?"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "네가 이 비극의 원흉이냐!",
						"english": "Are you the cause of this tragedy!",
						"japanese": "貴様がこの悲劇の元凶か！",
						"chinese": "你就是这场悲剧的元凶吗！",
						"french": "Es-tu la cause de cette tragédie !",
						"spanish": "¿Eres tú la causa de esta tragedia?",
						"vietnamese": "Ngươi là kẻ gây ra bi kịch này sao!",
						"thai": "เจ้าคือต้นเหตุของโศกนาฏกรรมนี้หรือ!",
						"hindi": "क्या तुम इस त्रासदी के सूत्रधार हो!"
					}
				},
				{
					"content": {
						"korean": "비극? 이것은 맹세의 수호다. 너희는 그 대가를 치를 것이다.",
						"english": "Tragedy? This is the guardian of an oath. You shall pay the price.",
						"japanese": "悲劇だと？これは誓いの守護だ。お前たちはその代償を払うことになる。",
						"chinese": "悲剧？这是誓言的守护。你们将为此付出代价。",
						"french": "Tragédie ? C'est la garde d'un serment. Vous en paierez le prix.",
						"spanish": "¿Tragedia? Esto es la protección de un juramento. Pagaréis el precio.",
						"vietnamese": "Bi kịch? Đây là sự bảo vệ của một lời thề. Ngươi sẽ phải trả giá.",
						"thai": "โศกนาฏกรรมรึ? นี่คือการปกป้องคำสาบาน พวกเจ้าจะต้องชดใช้!",
						"hindi": "त्रासदी? यह एक शपथ का रक्षक है। तुम्हें इसकी कीमत चुकानी पड़ेगी।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"spot": [
						2,
						3
					],
					"speaker": "anuk",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"emotion": "sad",
					"speaker": "anuk",
					"type": "speech",
					"content": {
						"korean": "저자는 과거의 속박에 갇혀있다. 온기를… 돌려줘야 한다.",
						"english": "That one is trapped by the past. We must return... its warmth.",
						"japanese": "あの者は過去の束縛に囚われている。温もりを…返してやらねば。",
						"chinese": "那人被困在过去的束缚中。必须…归还温暖。",
						"french": "Celui-là est prisonnier du passé. Nous devons… rendre la chaleur.",
						"spanish": "Ese está atrapado en las ataduras del pasado. Debemos devolverle... el calor.",
						"vietnamese": "Kẻ đó bị giam cầm bởi quá khứ. Phải… trả lại hơi ấm.",
						"thai": "ผู้นั้นถูกพันธนาการไว้ด้วยอดีต เราต้อง… คืนความอบอุ่นให้เขา",
						"hindi": "वह अतीत की बेड़ियों में फँसा है। हमें... उसकी गर्माहट लौटानी होगी।"
					}
				},
				{
					"content": {
						"korean": "감히…!",
						"english": "How dare you...!",
						"japanese": "よくも…！",
						"chinese": "竟敢…！",
						"french": "Comment osez-vous...!",
						"spanish": "¡Cómo osas...!",
						"vietnamese": "Dám…!",
						"thai": "บังอาจ…!",
						"hindi": "तुम्हारी हिम्मत कैसे हुई...!"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "크아악… 온기… 나의 심장이….",
						"english": "Kuaaagh... Warmth... My heart...",
						"japanese": "ぐあああ…温もり…私の心が…。",
						"chinese": "呃啊啊…温暖…我的心脏…",
						"french": "Kuaaagh... La chaleur... Mon cœur...",
						"spanish": "¡Argh...! El calor... Mi corazón...",
						"vietnamese": "Khụ khụ… Hơi ấm… Trái tim ta…",
						"thai": "คราก… ความอบอุ่น… หัวใจของข้า…",
						"hindi": "आह... गर्माहट... मेरा दिल..."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "쓰러진 {random_boss}의 몸에서, 아이의 장신구가 따뜻한 빛을 내뿜었다.",
						"english": "From the fallen {random_boss}, the child's ornament emitted a warm light.",
						"japanese": "倒れた{random_boss}の体から、子供の装飾品が温かい光を放った。",
						"chinese": "从倒下的{random_boss}身上，孩子的饰品散发出温暖的光芒。",
						"french": "Du corps du {random_boss} tombé, l'ornement de l'enfant émettait une lumière chaude.",
						"spanish": "Del cuerpo del {random_boss} caído, el adorno del niño emitía una luz cálida.",
						"vietnamese": "Từ cơ thể {random_boss} đã gục ngã, món trang sức của đứa trẻ phát ra ánh sáng ấm áp.",
						"thai": "จากร่างของ {random_boss} ที่ล้มลง เครื่องประดับของเด็กได้เปล่งแสงอบอุ่นออกมา",
						"hindi": "गिरे हुए {random_boss} के शरीर से, बच्चे के आभूषण से एक गर्म रोशनी निकली।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이 온기는… 뭐지?",
						"english": "This warmth... What is it?",
						"japanese": "この温もりは…何だ？",
						"chinese": "这份温暖…是什么？",
						"french": "Cette chaleur... Qu'est-ce que c'est ?",
						"spanish": "Este calor... ¿Qué es?",
						"vietnamese": "Hơi ấm này… là gì?",
						"thai": "ความอบอุ่นนี้… คืออะไร?",
						"hindi": "यह गर्माहट... क्या है?"
					}
				},
				{
					"spot": [
						4,
						3
					],
					"speaker": "anuk",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "잊었던 온기… 어쩌면… 희망일지도 모른다.",
						"english": "Forgotten warmth... Perhaps... it might be hope.",
						"japanese": "忘れていた温もり…もしかしたら…希望なのかもしれない。",
						"chinese": "遗忘的温暖…也许…是希望。",
						"french": "Une chaleur oubliée... Peut-être... est-ce l'espoir.",
						"spanish": "Un calor olvidado... Quizás... sea esperanza.",
						"vietnamese": "Hơi ấm đã lãng quên… có lẽ… là hy vọng.",
						"thai": "ความอบอุ่นที่ลืมเลือน… บางที… อาจเป็นความหวัง",
						"hindi": "भूली हुई गर्माहट... शायद... यह आशा हो सकती है।"
					},
					"type": "speech",
					"speaker": "anuk",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "비극은 아직 끝나지 않았다. 더 깊은 곳, 얼어붙은 진실이 그들을 기다리고 있었다.",
						"english": "The tragedy is not over yet. Deeper within, a frozen truth awaited them.",
						"japanese": "悲劇はまだ終わっていない。さらに深い場所で、凍てついた真実が彼らを待っていた。",
						"chinese": "悲剧尚未结束。更深处，冰封的真相正在等待着他们。",
						"french": "La tragédie n'est pas encore finie. Plus profondément, une vérité gelée les attendait.",
						"spanish": "La tragedia aún no ha terminado. En lo más profundo, una verdad helada les esperaba.",
						"vietnamese": "Bi kịch vẫn chưa kết thúc. Sâu thẳm hơn, một sự thật đóng băng đang chờ đợi họ.",
						"thai": "โศกนาฏกรรมยังไม่จบสิ้น ลึกเข้าไปข้างใน ความจริงที่เยือกแข็งกำลังรอพวกเขาอยู่",
						"hindi": "त्रासदी अभी खत्म नहीं हुई है। और गहराई में, एक जमी हुई सच्चाई उनका इंतजार कर रही थी।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"눈보라는 점점 더 거세졌다.",
			"발자국마다 얼어붙은 과거의 흔적이 박혀 있었다.",
			"이 혹한 속에 잊힌 온기가 숨어있다고 했다.",
			"그것은 비극의 시작이었을까, 혹은… 마지막 희망의 조각일까.",
			"우리는 더 깊은 절망 속으로 걸어 들어갔다."
		],
		"english": [
			"The blizzard grew fiercer.",
			"Each footprint held the frozen traces of a bygone past.",
			"They said forgotten warmth lay hidden in this bitter cold.",
			"Was it the start of a tragedy, or... a final shard of hope?",
			"We walked deeper into despair."
		],
		"japanese": [
			"吹雪はますます激しくなった。",
			"足跡ひとつひとつに、凍てついた過去の痕跡が刻まれていた。",
			"この極寒の中に、忘れ去られた温もりが隠されていると。",
			"それは悲劇の始まりか、あるいは… 最後の希望の欠片か。",
			"私たちはさらに深い絶望の中へと歩みを進めた。"
		],
		"chinese": [
			"暴风雪愈发猛烈。",
			"每个脚印都刻着冰封的过去。",
			"据说在这严寒中，隐藏着被遗忘的温暖。",
			"这是悲剧的开端，亦或是… 最后一丝希望的碎片？",
			"我们走入了更深的绝望。"
		],
		"french": [
			"Le blizzard redoublait de violence.",
			"Chaque empreinte portait les traces gelées d'un passé révolu.",
			"On disait qu'une chaleur oubliée se cachait dans ce froid mordant.",
			"Était-ce le début d'une tragédie, ou... le dernier éclat d'espoir ?",
			"Nous nous enfonçâmes plus profondément dans le désespoir."
		],
		"spanish": [
			"La ventisca arreciaba.",
			"Cada huella contenía los rastros congelados de un pasado.",
			"Decían que un calor olvidado se ocultaba en este frío implacable.",
			"¿Fue el inicio de una tragedia, o... el último fragmento de esperanza?",
			"Nos adentramos más en la desesperación."
		],
		"vietnamese": [
			"Bão tuyết ngày càng dữ dội hơn.",
			"Mỗi bước chân đều in hằn dấu vết đóng băng của quá khứ.",
			"Người ta nói rằng có một hơi ấm đã lãng quên ẩn giấu trong cái giá lạnh khắc nghiệt này.",
			"Đó là khởi đầu của một bi kịch, hay… một mảnh ghép cuối cùng của hy vọng?",
			"Chúng tôi bước sâu hơn vào tuyệt vọng."
		],
		"thai": [
			"พายุหิมะทวีความรุนแรงขึ้นเรื่อยๆ",
			"รอยเท้าแต่ละรอยมีร่องรอยของอดีตที่เยือกแข็งฝังอยู่",
			"ว่ากันว่าความอบอุ่นที่ถูกลืมเลือนซ่อนอยู่ในความหนาวเหน็บนี้",
			"มันคือจุดเริ่มต้นของโศกนาฏกรรม หรือ... เศษเสี้ยวสุดท้ายของความหวังกันแน่",
			"เราเดินลึกลงไปในความสิ้นหวังที่มากขึ้น"
		],
		"hindi": [
			"बर्फीला तूफ़ान और भी तेज़ होता गया।",
			"हर पदचिह्न में अतीत के जमे हुए निशान थे।",
			"उन्होंने कहा कि इस भीषण ठंड में एक भूली हुई गर्माहट छिपी है।",
			"क्या यह त्रासदी की शुरुआत थी, या... आशा का अंतिम टुकड़ा?",
			"हम गहरी निराशा में चले गए।"
		]
	}
} as const;
