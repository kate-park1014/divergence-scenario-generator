export const scenario_modern_athan_21_01 = {
	"scenario_id": "modern_athan_21_01",
	"order": 1,
	"act": "intro",
	"theme": "modern",
	"actors": {
		"echo": {
			"id": "mon_57f2edb8-aa81-4ce7-beed-ab009cd2ff35",
			"name": {
				"korean": "에코",
				"english": "Echo",
				"japanese": "エコー",
				"chinese": "艾可",
				"french": "Écho",
				"spanish": "Eco",
				"vietnamese": "Echo",
				"thai": "เอคโค่",
				"hindi": "इको"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/da48e2c2-6733-4f65-f8b6-f197af4ff700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/e90605b9-372f-4bf1-cdec-56a2fdef0800/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"도시의 그림자 속, 잊혀진 약속이 속삭인다.",
			"아무도 모르는 과거가, 균열처럼 번져온다.",
			"희미한 오르골 소리, 그 비극의 메아리.",
			"진실은 깊은 어둠 속에 잠겨 있었다."
		],
		"english": [
			"In the city's shadows, a forgotten promise whispers.",
			"An unknown past spreads like a crack.",
			"A faint music box melody, the echo of that tragedy.",
			"The truth was submerged in deep darkness."
		],
		"japanese": [
			"街の影の中、忘れられた約束が囁く。",
			"誰も知らない過去が、亀裂のように広がっていく。",
			"かすかなオルゴールの音、その悲劇のこだま。",
			"真実は深い闇の中に沈んでいた。"
		],
		"chinese": [
			"在城市的阴影中，被遗忘的承诺低语着。",
			"无人知晓的过去，如同裂痕般蔓延开来。",
			"模糊的八音盒声，那悲剧的回响。",
			"真相沉浸在深邃的黑暗之中。"
		],
		"french": [
			"Dans l'ombre de la ville, une promesse oubliée murmure.",
			"Un passé inconnu se répand comme une fissure.",
			"Une faible mélodie de boîte à musique, l'écho de cette tragédie.",
			"La vérité était immergée dans les ténèbres profondes."
		],
		"spanish": [
			"En las sombras de la ciudad, una promesa olvidada susurra.",
			"Un pasado desconocido se extiende como una grieta.",
			"Una débil melodía de caja de música, el eco de esa tragedia.",
			"La verdad estaba sumergida en la oscuridad profunda."
		],
		"vietnamese": [
			"Trong bóng tối thành phố, một lời hứa bị lãng quên thì thầm.",
			"Một quá khứ không ai biết, lan rộng như vết nứt.",
			"Âm thanh hộp nhạc mờ nhạt, tiếng vọng của bi kịch đó.",
			"Sự thật đã chìm sâu trong bóng tối."
		],
		"thai": [
			"ในเงามืดของเมือง คำสัญญาที่ถูกลืมเลือนกระซิบแผ่วเบา",
			"อดีตที่ไม่รู้จักแพร่กระจายราวกับรอยร้าว",
			"เสียงกล่องดนตรีแผ่วเบา เสียงสะท้อนของโศกนาฏกรรมนั้น",
			"ความจริงจมดิ่งอยู่ในความมืดมิด"
		],
		"hindi": [
			"शहर की परछाइयों में, एक भूला हुआ वादा फुसफुसाता है।",
			"एक अनजाना अतीत दरार की तरह फैल रहा है।",
			"एक धीमी संगीत पेटी की धुन, उस त्रासदी की गूँज।",
			"सच गहरे अंधेरे में डूबा हुआ था।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "도시의 뒷골목. 잊혀진 약속에 대한 소문이 번지고 있었다.",
						"english": "City back alleys. Rumors of a forgotten promise were spreading.",
						"japanese": "街の裏通り。忘れられた約束の噂が広まっていた。",
						"chinese": "城市的后巷。关于一个被遗忘的承诺的谣言正在蔓延。",
						"french": "Ruelles de la ville. Des rumeurs d'une promesse oubliée se propageaient.",
						"spanish": "Callejones de la ciudad. Se estaban extendiendo rumores de una promesa olvidada.",
						"vietnamese": "Hẻm sau thành phố. Tin đồn về một lời hứa bị lãng quên đang lan truyền.",
						"thai": "ตรอกซอยในเมือง ข่าวลือเรื่องคำสัญญาที่ถูกลืมเลือนกำลังแพร่กระจาย",
						"hindi": "शहर की गलियों में। एक भूली हुई प्रतिज्ञा की अफवाहें फैल रही थीं।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "…이상한 기분이야. 도시가 어딘가 뒤틀려 있어.",
						"english": "...It's a strange feeling. The city feels twisted, somehow.",
						"japanese": "…変な気分だ。街がどこか歪んでいる。",
						"chinese": "……奇怪的感觉。这座城市似乎有些扭曲。",
						"french": "...C'est une sensation étrange. La ville semble tordue, d'une certaine manière.",
						"spanish": "...Es una sensación extraña. La ciudad se siente torcida, de alguna manera.",
						"vietnamese": "...Cảm giác thật lạ. Thành phố dường như méo mó ở đâu đó.",
						"thai": "...รู้สึกแปลกๆ เมืองนี้ดูบิดเบี้ยวไปหมด",
						"hindi": "...अजीब लग रहा है। शहर कहीं-न-कहीं मुड़ा हुआ है।"
					}
				},
				{
					"content": {
						"korean": "'오래된 약속'이라… 대체 뭐야?",
						"english": "\"An old promise,\" huh... What is it, exactly?",
						"japanese": "「古い約束」か…一体何なんだ？",
						"chinese": "“古老的承诺”……到底是什么？",
						"french": "\"Une vieille promesse\", hein... Qu'est-ce que c'est, au juste ?",
						"spanish": "\"Una vieja promesa\", ¿eh?... ¿Qué es, exactamente?",
						"vietnamese": "\"Một lời hứa cũ\"... Rốt cuộc là gì vậy?",
						"thai": "\"คำสัญญาเก่าๆ\" งั้นเหรอ... มันคืออะไรกันแน่?",
						"hindi": "\"एक पुराना वादा\"... आखिर ये क्या है?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "echo",
					"spot": [
						5,
						2
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "echo",
					"content": {
						"korean": "당신도… 그 약속을 쫓는 사람인가요?",
						"english": "Are you... also someone chasing that promise?",
						"japanese": "あなたも…その約束を追う者なのか？",
						"chinese": "你也……是追逐那个承诺的人吗？",
						"french": "Vous aussi... vous êtes quelqu'un qui poursuit cette promesse ?",
						"spanish": "¿Tú también... eres alguien que persigue esa promesa?",
						"vietnamese": "Bạn cũng... là người đang theo đuổi lời hứa đó sao?",
						"thai": "คุณก็... เป็นคนตามล่าคำสัญญานั้นด้วยหรือเปล่า?",
						"hindi": "क्या आप भी... उस वादे का पीछा करने वाले व्यक्ति हैं?"
					}
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "echo",
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "그 약속은… 오래전에 깨진 거울 같아요.",
						"english": "That promise... it's like a mirror shattered long ago.",
						"japanese": "その約束は…ずっと前に割れた鏡のようだ。",
						"chinese": "那个承诺……就像一面很久以前就破碎的镜子。",
						"french": "Cette promesse... c'est comme un miroir brisé il y a longtemps.",
						"spanish": "Esa promesa... es como un espejo roto hace mucho tiempo.",
						"vietnamese": "Lời hứa đó... giống như một tấm gương đã vỡ từ rất lâu rồi.",
						"thai": "คำสัญญานั้น... เหมือนกระจกที่แตกไปนานแล้ว",
						"hindi": "वह वादा... बहुत पहले टूटे हुए आईने जैसा है।"
					},
					"speaker": "echo",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "가끔, 낡은 오르골 소리가 들려요. 도시의 소음 속에서.",
						"english": "Sometimes, I hear an old music box melody. Amidst the city's noise.",
						"japanese": "時々、古いオルゴールの音が聞こえるんだ。街の喧騒の中で。",
						"chinese": "有时，我会听到旧八音盒的声音。在城市的喧嚣中。",
						"french": "Parfois, j'entends une vieille mélodie de boîte à musique. Au milieu du bruit de la ville.",
						"spanish": "A veces, escucho una vieja melodía de caja de música. En medio del ruido de la ciudad.",
						"vietnamese": "Đôi khi, tôi nghe thấy tiếng hộp nhạc cũ. Giữa tiếng ồn ào của thành phố.",
						"thai": "บางครั้งก็ได้ยินเสียงกล่องดนตรีเก่าๆ ท่ามกลางเสียงรบกวนของเมือง",
						"hindi": "कभी-कभी, मुझे एक पुराने संगीत बॉक्स की धुन सुनाई देती है। शहर के शोर के बीच।"
					},
					"speaker": "echo"
				},
				{
					"content": {
						"korean": "오르골…?",
						"english": "A music box...?",
						"japanese": "オルゴール…？",
						"chinese": "八音盒…？",
						"french": "Une boîte à musique...?",
						"spanish": "¿Una caja de música...?",
						"vietnamese": "Hộp nhạc...?",
						"thai": "กล่องดนตรี...?",
						"hindi": "म्यूज़िक बॉक्स…?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "echo",
					"content": {
						"korean": "그리고… 사람들이 악몽을 꾼대요. 지키지 못한 맹세에 대한.",
						"english": "And... people are having nightmares. About unkept vows.",
						"japanese": "そして…人々は悪夢を見ているそうです。果たせなかった誓いについての。",
						"chinese": "而且…人们都在做噩梦。关于未能遵守的誓言。",
						"french": "Et... les gens font des cauchemars. À propos de promesses non tenues.",
						"spanish": "Y... la gente tiene pesadillas. Sobre promesas incumplidas.",
						"vietnamese": "Và... mọi người đang gặp ác mộng. Về những lời thề chưa được giữ.",
						"thai": "แล้ว...ผู้คนก็ฝันร้าย เกี่ยวกับคำมั่นที่ไม่รักษานั่นเอง",
						"hindi": "और... लोग बुरे सपने देख रहे हैं। उन वादों के बारे में जो पूरे नहीं हुए।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "점점 더 미궁에 빠지는 기분이야.",
						"english": "I feel like I'm sinking deeper into a maze.",
						"japanese": "ますます迷宮に迷い込んでいる気分だ。",
						"chinese": "感觉自己正越陷越深，如同置身迷宫。",
						"french": "J'ai l'impression de m'enfoncer de plus en plus dans un labyrinthe.",
						"spanish": "Siento que me hundo más y más en un laberinto.",
						"vietnamese": "Tôi có cảm giác như đang ngày càng lún sâu vào mê cung.",
						"thai": "รู้สึกเหมือนกำลังจมลึกเข้าไปในเขาวงกตมากขึ้นเรื่อยๆ",
						"hindi": "मुझे ऐसा लग रहा है जैसे मैं एक भूलभुलैया में और गहरे डूबता जा रहा हूँ।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "echo",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "어둠 속에서… 오래전 사라진 조직의 상징이 보였어요.",
						"english": "In the dark... I saw the symbol of a long-lost organization.",
						"japanese": "闇の中で…遠い昔に消滅した組織の象徴が見えた。",
						"chinese": "在黑暗中…我看到了一个早已消失的组织的象征。",
						"french": "Dans l'obscurité... j'ai vu le symbole d'une organisation disparue il y a longtemps.",
						"spanish": "En la oscuridad... vi el símbolo de una organización desaparecida hace mucho tiempo.",
						"vietnamese": "Trong bóng tối... tôi đã thấy biểu tượng của một tổ chức đã biến mất từ lâu.",
						"thai": "ในความมืด... ฉันเห็นสัญลักษณ์ขององค์กรที่หายไปนานแล้ว",
						"hindi": "अंधेरे में... मुझे एक ऐसे संगठन का प्रतीक दिखा जो बहुत पहले गायब हो गया था।"
					},
					"speaker": "echo",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "사라진 조직의 상징?",
						"english": "The symbol of a lost organization?",
						"japanese": "消滅した組織の象徴、だと？",
						"chinese": "消失的组织的象征？",
						"french": "Le symbole d'une organisation disparue ?",
						"spanish": "¿El símbolo de una organización desaparecida?",
						"vietnamese": "Biểu tượng của tổ chức đã biến mất ư?",
						"thai": "สัญลักษณ์ขององค์กรที่หายไปงั้นเหรอ?",
						"hindi": "गायब हुए संगठन का प्रतीक?"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "echo",
					"content": {
						"korean": "네. 그들이 남긴 흔적들이… 이 도시에 다시 나타나고 있어요.",
						"english": "Yes. Their traces... are reappearing in this city.",
						"japanese": "はい。彼らが残した痕跡が…この街に再び現れています。",
						"chinese": "是的。他们留下的痕迹…正在这座城市再次出现。",
						"french": "Oui. Leurs traces... réapparaissent dans cette ville.",
						"spanish": "Sí. Sus rastros... están reapareciendo en esta ciudad.",
						"vietnamese": "Vâng. Dấu vết họ để lại... đang xuất hiện trở lại trong thành phố này.",
						"thai": "ใช่ ร่องรอยที่พวกเขาทิ้งไว้... กำลังปรากฏขึ้นอีกครั้งในเมืองนี้",
						"hindi": "हाँ। उनके छोड़े हुए निशान... इस शहर में फिर से दिखाई दे रहे हैं।"
					}
				},
				{
					"speaker": "echo",
					"content": {
						"korean": "이 모든 게… 그 잊혀진 맹세와 관련 있을 거예요.",
						"english": "All of this... must be connected to that forgotten vow.",
						"japanese": "これらすべてが…あの忘れられた誓いと関連があるはずだ。",
						"chinese": "这一切…都与那个被遗忘的誓言有关。",
						"french": "Tout cela... doit être lié à cette promesse oubliée.",
						"spanish": "Todo esto... debe estar relacionado con ese voto olvidado.",
						"vietnamese": "Tất cả những điều này... chắc hẳn có liên quan đến lời thề bị lãng quên đó.",
						"thai": "ทั้งหมดนี้... ต้องเกี่ยวข้องกับคำสาบานที่ถูกลืมเลือนนั้นแน่ๆ",
						"hindi": "यह सब कुछ... उस भूले हुए वादे से जुड़ा होना चाहिए।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "단순한 소문이 아니었어…",
						"english": "It wasn't just a rumor...",
						"japanese": "単なる噂ではなかった…！",
						"chinese": "这不只是一个简单的谣言…",
						"french": "Ce n'était pas qu'une simple rumeur...",
						"spanish": "No era solo un simple rumor...",
						"vietnamese": "Đây không chỉ là một lời đồn đơn thuần...",
						"thai": "นี่ไม่ใช่แค่ข่าวลือธรรมดา...",
						"hindi": "यह महज़ एक अफवाह नहीं थी..."
					}
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						2
					],
					"speaker": "echo"
				},
				{
					"content": {
						"korean": "이대로 계속 가도… 괜찮을까요?",
						"english": "Is it okay to keep going like this...?",
						"japanese": "このまま進んで…大丈夫でしょうか？",
						"chinese": "就这样继续下去…真的好吗？",
						"french": "Est-ce qu'on peut continuer comme ça...?",
						"spanish": "¿Está bien seguir así...?",
						"vietnamese": "Tiếp tục như thế này... có ổn không?",
						"thai": "จะเดินหน้าต่อไปแบบนี้... มันจะดีเหรอคะ/ครับ?",
						"hindi": "क्या ऐसे ही आगे बढ़ते रहना ठीक होगा…?"
					},
					"speaker": "echo",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "멈출 수 없어. 진실을 알아야 해.",
						"english": "I can't stop. I must uncover the truth.",
						"japanese": "止まれない。真実を知らなければ。",
						"chinese": "不能停下。我必须知道真相。",
						"french": "Je ne peux pas m'arrêter. Je dois connaître la vérité.",
						"spanish": "No puedo parar. Necesito saber la verdad.",
						"vietnamese": "Không thể dừng lại. Tôi phải biết sự thật.",
						"thai": "หยุดไม่ได้ ฉันต้องรู้ความจริง",
						"hindi": "मैं रुक नहीं सकता। मुझे सच जानना है।"
					}
				},
				{
					"speaker": "echo",
					"content": {
						"korean": "과거는… 너무 무거워서, 때론 모두를 집어삼키죠.",
						"english": "The past... it's too heavy, sometimes it devours us all.",
						"japanese": "過去は… 重すぎて、時にはすべてを飲み込みます。",
						"chinese": "过去…太沉重了，有时会吞噬一切。",
						"french": "Le passé… il est si lourd, parfois il nous consume tous.",
						"spanish": "El pasado… es demasiado pesado, a veces nos consume a todos.",
						"vietnamese": "Quá khứ… quá nặng nề, đôi khi nuốt chửng tất cả chúng ta.",
						"thai": "อดีต… มันหนักอึ้งเกินไป บางครั้งมันก็กลืนกินเราทุกคน",
						"hindi": "अतीत… बहुत भारी होता है, कभी-कभी यह हम सभी को निगल जाता है।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "피할 수 없는 싸움이야.",
						"english": "An unavoidable fight.",
						"japanese": "避けられない戦いだ。",
						"chinese": "这是一场无法避免的战斗。",
						"french": "Un combat inévitable.",
						"spanish": "Una lucha inevitable.",
						"vietnamese": "Một cuộc chiến không thể tránh khỏi.",
						"thai": "การต่อสู้ที่หลีกเลี่ยงไม่ได้",
						"hindi": "यह एक अपरिहार्य लड़ाई है।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "…그럴 줄 알았어요.",
						"english": "...I knew it.",
						"japanese": "…やはりね。",
						"chinese": "…我就知道。",
						"french": "...Je m'y attendais.",
						"spanish": "...Lo sabía.",
						"vietnamese": "...Tôi đã biết.",
						"thai": "...ฉันรู้แล้ว",
						"hindi": "…मुझे पता था।"
					},
					"speaker": "echo",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "어둠 속에서 거대한 그림자가 나타났다. 정체를 알 수 없었다.",
						"english": "A colossal shadow emerged from the darkness. Its identity was unknown.",
						"japanese": "闇の中から巨大な影が現れた。その正体は不明だった。",
						"chinese": "黑暗中出现了一个巨大的身影。其身份不明。",
						"french": "Une ombre colossale émergea des ténèbres. Son identité était inconnue.",
						"spanish": "Una sombra colosal emergió de la oscuridad. Su identidad era desconocida.",
						"vietnamese": "Một bóng tối khổng lồ xuất hiện từ trong bóng đêm. Thân phận của nó không rõ.",
						"thai": "เงาขนาดมหึมาปรากฏขึ้นจากความมืดมิด ไม่ทราบตัวตนของมัน",
						"hindi": "अंधेरे से एक विशाल परछाई उभरी। उसकी पहचान अज्ञात थी।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "…또 다른 침입자군. 잊혀진 것을 깨우려는 어리석은 자들.",
						"english": "...Another intruder. Fools trying to awaken what's forgotten.",
						"japanese": "…また侵入者か。忘れられたものを呼び覚まそうとする愚か者たちめ。",
						"chinese": "…又一个入侵者。企图唤醒被遗忘之物的愚蠢之人。",
						"french": "...Encore un intrus. Des fous qui tentent de réveiller ce qui est oublié.",
						"spanish": "...Otro intruso. Necios que intentan despertar lo olvidado.",
						"vietnamese": "...Lại một kẻ xâm nhập khác. Những kẻ ngu ngốc cố gắng đánh thức những gì đã bị lãng quên.",
						"thai": "…ผู้บุกรุกอีกคน พวกคนโง่ที่พยายามปลุกสิ่งที่ถูกลืม",
						"hindi": "…एक और घुसपैठिया। भूले हुए को जगाने वाले मूर्ख।"
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "이 도시는… 영원히 그림자 속에 잠겨야 해.",
						"english": "This city... must forever remain shrouded in shadow.",
						"japanese": "この都市は… 永遠に影の中に沈んでいなければならない。",
						"chinese": "这座城市…必须永远沉睡在阴影之中。",
						"french": "Cette ville… doit rester à jamais enveloppée d'ombre.",
						"spanish": "Esta ciudad… debe permanecer para siempre envuelta en sombras.",
						"vietnamese": "Thành phố này… phải mãi mãi chìm trong bóng tối.",
						"thai": "เมืองนี้… จะต้องจมอยู่ในเงามืดตลอดไป",
						"hindi": "यह शहर… हमेशा के लिए अंधेरे में डूबा रहना चाहिए।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "누구냐! '오래된 약속'과 관련된 건가?",
						"english": "Who are you?! Are you connected to the 'Old Promise'?",
						"japanese": "何者だ！「古き約束」と関係があるのか？",
						"chinese": "你是谁？！与‘旧约’有关吗？",
						"french": "Qui êtes-vous ?! Êtes-vous lié à la 'Vieille Promesse' ?",
						"spanish": "¡¿Quién eres?! ¿Estás conectado con la 'Vieja Promesa'?",
						"vietnamese": "Ngươi là ai?! Có liên quan đến 'Lời Hứa Cổ Xưa' sao?",
						"thai": "เจ้าเป็นใคร! เกี่ยวข้องกับ 'คำสัญญาเก่าแก่' หรือไม่?",
						"hindi": "तुम कौन हो?! क्या तुम 'पुराने वादे' से जुड़े हो?"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "너희는 감히… 알 자격이 없다.",
						"english": "You dare... you are unworthy of knowing.",
						"japanese": "貴様らに…知る資格はない。",
						"chinese": "你们不配…知道。",
						"french": "Vous osez… vous n'êtes pas dignes de savoir.",
						"spanish": "Vosotros no os atrevéis… no sois dignos de saber.",
						"vietnamese": "Ngươi dám… ngươi không đủ tư cách để biết.",
						"thai": "พวกเจ้า… ไม่มีคุณสมบัติพอที่จะรู้",
						"hindi": "तुम हिम्मत करते हो… तुम्हें जानने का कोई हक नहीं।"
					}
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "어둠이 모든 것을 집어삼켰다.",
						"english": "Darkness consumed everything.",
						"japanese": "闇がすべてを飲み込んだ。",
						"chinese": "黑暗吞噬了一切。",
						"french": "Les ténèbres ont tout englouti.",
						"spanish": "La oscuridad lo consumió todo.",
						"vietnamese": "Bóng tối nuốt chửng mọi thứ.",
						"thai": "ความมืดมิดกลืนกินทุกสิ่ง",
						"hindi": "अंधेरे ने सब कुछ निगल लिया।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 자들… 결국 아무것도 바꾸지 못한다.",
						"english": "Fools... ultimately, they change nothing.",
						"japanese": "愚か者たち…結局、何も変えられない。",
						"chinese": "愚蠢的人们…终究什么也改变不了。",
						"french": "Fous… au final, ils ne changent rien.",
						"spanish": "Necios... al final, no cambian nada.",
						"vietnamese": "Những kẻ ngu ngốc… cuối cùng cũng chẳng thay đổi được gì.",
						"thai": "คนโง่... สุดท้ายก็เปลี่ยนอะไรไม่ได้",
						"hindi": "मूर्ख… अंततः, वे कुछ भी नहीं बदलते।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "아직… 끝나지 않았어. 반드시 진실을 밝힐 거야.",
						"english": "It's not over yet... I will uncover the truth.",
						"japanese": "まだ…終わっていない。必ず真実を明らかにする。",
						"chinese": "还没…结束。我一定会揭露真相。",
						"french": "Ce n'est pas encore… fini. Je découvrirai la vérité.",
						"spanish": "Aún no… ha terminado. Desvelaré la verdad.",
						"vietnamese": "Vẫn chưa… kết thúc. Tôi nhất định sẽ phơi bày sự thật.",
						"thai": "ยัง...ไม่จบ ฉันจะต้องเปิดเผยความจริงให้ได้",
						"hindi": "अभी… खत्म नहीं हुआ है। मैं सच का खुलासा करूँगा।"
					},
					"speaker": "character_any"
				}
			],
			"win_dialogue": [
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "크아아… 이 정도로 끝날 줄 아나…",
						"english": "Grrraaah... Do you think this is the end...?",
						"japanese": "ぐあああ…これしきで終わるとでも思うか…",
						"chinese": "呃啊…你们以为这就结束了吗…",
						"french": "Grrrraaah... Croyez-vous que ce soit la fin... ?",
						"spanish": "¡Grrraaah!... ¿Crees que esto es el final...?",
						"vietnamese": "Grrraaah... Ngươi nghĩ đây là kết thúc sao...?",
						"thai": "ครืนนน… คิดว่าจะจบแค่นี้หรือไง…",
						"hindi": "ग्र्र्र्राह… क्या तुम्हें लगता है कि यह अंत है…?"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "맹세는… 결코 잊히지 않는다…",
						"english": "The oath... shall never be forgotten...",
						"japanese": "誓いは…決して忘れられない…",
						"chinese": "誓言…永不被遗忘…",
						"french": "Le serment… ne sera jamais oublié…",
						"spanish": "El juramento… nunca será olvidado…",
						"vietnamese": "Lời thề… sẽ không bao giờ bị lãng quên…",
						"thai": "คำสาบาน… จะไม่มีวันถูกลืมเลือน…",
						"hindi": "शपथ… कभी नहीं भुलाई जाएगी…"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "끝났나…?",
						"english": "Is it over...?",
						"japanese": "終わったのか…？",
						"chinese": "结束了吗…？",
						"french": "Est-ce fini… ?",
						"spanish": "¿Se acabó…?",
						"vietnamese": "Kết thúc rồi sao…?",
						"thai": "จบแล้วเหรอ...?",
						"hindi": "क्या यह खत्म हो गया है...?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "echo",
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "아니요… 이제 시작일지도 몰라요.",
						"english": "No... perhaps it's just the beginning.",
						"japanese": "いいえ…これは始まりに過ぎないのかもしれません。",
						"chinese": "不…这也许才刚刚开始。",
						"french": "Non… ce n'est peut-être que le début.",
						"spanish": "No… quizás esto sea solo el principio.",
						"vietnamese": "Không… có lẽ đây mới chỉ là bắt đầu.",
						"thai": "ไม่...นี่อาจจะเป็นแค่จุดเริ่มต้น",
						"hindi": "नहीं… शायद यह सिर्फ शुरुआत है।"
					},
					"speaker": "echo"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "그림자 속에서 잊혀진 맹세의 메아리는 더욱 짙어졌다. 도시는 잠시의 평화 속에서 다음 비극을 기다리고 있었다.",
						"english": "In the shadows, the echoes of forgotten vows grew stronger. The city awaited its next tragedy in a fleeting peace.",
						"japanese": "影の中で、忘れ去られた誓いの残響は一層色濃くなった。都市は束の間の平和の中で、次の悲劇を待っていた。",
						"chinese": "在阴影中，被遗忘誓言的回响愈发深沉。城市在短暂的平静中，等待着下一场悲剧。",
						"french": "Dans l'ombre, les échos des serments oubliés s'intensifièrent. La ville attendait sa prochaine tragédie dans une paix éphémère.",
						"spanish": "En las sombras, los ecos de las promesas olvidadas se hicieron más densos. La ciudad aguardaba su próxima tragedia en una paz momentánea.",
						"vietnamese": "Trong bóng tối, tiếng vọng của những lời thề đã bị lãng quên trở nên đậm nét hơn. Thành phố chờ đợi bi kịch tiếp theo trong sự bình yên tạm bợ.",
						"thai": "ในเงามืด เสียงสะท้อนของคำสาบานที่ถูกลืมเลือนกลับเด่นชัดขึ้น เมืองรอคอยโศกนาฏกรรมครั้งต่อไปภายใต้สันติภาพชั่วคราว",
						"hindi": "छाया में, भूले हुए वादों की गूँज और गहरी हो गई। शहर एक क्षणिक शांति में अपनी अगली त्रासदी का इंतज़ार कर रहा था।"
					}
				}
			],
			"id": 15
		}
	]
} as const;
