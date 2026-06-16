export const scenario_snowy_skuld_12_03 = {
	"scenario_id": "snowy_skuld_12_03",
	"order": 3,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"hild": {
			"id": "mon_6f20c96a-bf07-4aae-b37c-da898a8336e8",
			"name": {
				"korean": "힐드",
				"english": "Hild",
				"japanese": "ヒルド",
				"chinese": "希尔德",
				"french": "Hild",
				"spanish": "Hild",
				"vietnamese": "Hild",
				"thai": "ฮิลด์",
				"hindi": "हिल्ड"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/722a86fd-2903-4688-3f04-db8241ed0e00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/af3d96ba-e571-4132-fede-cd415bd15c00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"차가운 얼음, 그 속에 잠든 거대한 그림자.",
			"자연의 섭리라기엔 너무 처절했다.",
			"빙하는 살아있는 무언가이자, 죽음을 품은 무덤이었다.",
			"그 앞에서, 망자를 기리는 의례가 시작되었다."
		],
		"english": [
			"Cold ice, and a colossal shadow slumbering within.",
			"Too brutal to be nature's will.",
			"The glacier was something alive, a tomb cradling death.",
			"Before it, a ritual to honor the dead began."
		],
		"japanese": [
			"冷たい氷、その中に眠る巨大な影。",
			"自然の摂理にしては、あまりにも過酷だった。",
			"氷河は生きている何かであり、死を抱く墓標だった。",
			"その前で、亡者を弔う儀礼が始まった。"
		],
		"chinese": [
			"寒冷的冰层，其中沉睡着巨大的阴影。",
			"说是自然法则，却过于残酷。",
			"冰川是活着的，也是蕴含死亡的坟墓。",
			"在它面前，纪念亡者的仪式开始了。"
		],
		"french": [
			"Glace froide, une ombre colossale y sommeille.",
			"Trop cruel pour être la volonté de la nature.",
			"Le glacier était un être vivant, une tombe abritant la mort.",
			"Devant elle, un rituel en l'honneur des morts commença."
		],
		"spanish": [
			"Hielo frío, una sombra colosal duerme en su interior.",
			"Demasiado cruel para ser la voluntad de la naturaleza.",
			"El glaciar era algo vivo, una tumba que abrazaba la muerte.",
			"Ante ello, un ritual para honrar a los muertos comenzó."
		],
		"vietnamese": [
			"Băng giá lạnh lẽo, một bóng hình khổng lồ ngủ say bên trong.",
			"Quá tàn khốc để gọi là định luật tự nhiên.",
			"Băng hà là thứ gì đó sống động, một nấm mồ ôm ấp cái chết.",
			"Trước nó, nghi lễ tưởng niệm người đã khuất bắt đầu."
		],
		"thai": [
			"น้ำแข็งอันเย็นยะเยือก เงาขนาดมหึมาหลับใหลอยู่ภายในนั้น",
			"มันโหดร้ายเกินกว่าจะเป็นกฎแห่งธรรมชาติ",
			"ธารน้ำแข็งคือบางสิ่งที่ยังมีชีวิต เป็นสุสานที่เก็บงำความตาย",
			"เบื้องหน้าของมัน พิธีกรรมรำลึกถึงผู้ล่วงลับได้เริ่มต้นขึ้น"
		],
		"hindi": [
			"बर्फीली ठंड, उसमें सोई एक विशाल छाया।",
			"प्रकृति का विधान कहने के लिए बहुत निर्मम था।",
			"ग्लेशियर कुछ जीवित था, और मृत्यु को समेटे एक कब्र भी।",
			"उसके सामने, मृतकों का सम्मान करने का अनुष्ठान शुरू हुआ।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "얼음은 침묵했다. 그러나 침묵 속에서 비명이 들리는 듯했다.",
						"english": "The ice was silent. Yet, screams seemed to echo within that silence.",
						"japanese": "氷は沈黙していた。しかし、その沈黙の中に悲鳴が聞こえるようだった。",
						"chinese": "冰层一片寂静。然而，寂静中却仿佛传来阵阵尖叫。",
						"french": "La glace était silencieuse. Pourtant, des cris semblaient résonner dans ce silence.",
						"spanish": "El hielo estaba en silencio. Sin embargo, en ese silencio parecían oírse gritos.",
						"vietnamese": "Băng giá im lìm. Nhưng trong sự im lìm đó, dường như có tiếng hét.",
						"thai": "น้ำแข็งเงียบงัน แต่ท่ามกลางความเงียบนั้น ราวกับได้ยินเสียงกรีดร้อง",
						"hindi": "बर्फ़ शांत थी। फिर भी, उस चुप्पी में चीखें सुनाई दे रही थीं।"
					}
				},
				{
					"action": "enter",
					"speaker": "hild",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "...여기 잠든 이여. 그대의 이름을 듣고 싶구나.",
						"english": "...You who sleep here. I wish to hear your name.",
						"japanese": "...ここに眠る者よ。そなたの名を聞かせてほしい。",
						"chinese": "...长眠于此之人啊。我愿聆听你的名字。",
						"french": "...Ô toi qui dors ici. Je désire entendre ton nom.",
						"spanish": "Tú que duermes aquí. Deseo escuchar tu nombre.",
						"vietnamese": "...Người đang ngủ nơi đây. Ta muốn nghe tên của người.",
						"thai": "ผู้ที่หลับใหลอยู่ ณ ที่แห่งนี้ ข้าอยากได้ยินนามของท่าน",
						"hindi": "...यहाँ सोए हुए। मैं तुम्हारा नाम सुनना चाहता हूँ।"
					},
					"speaker": "hild",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리야, 힐드?",
						"english": "What are you saying, Hild?",
						"japanese": "何を言ってるんだ、ヒルデ？",
						"chinese": "你在说什么，希尔德？",
						"french": "Que dis-tu, Hild ?",
						"spanish": "¿Qué dices, Hild?",
						"vietnamese": "Hild, em đang nói gì vậy?",
						"thai": "ฮิลด์ นี่เจ้าพูดอะไรน่ะ?",
						"hindi": "तुम क्या कह रही हो, हिल्ड?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이곳은 무덤이다. 거대한 배의 무덤.",
						"english": "This is a tomb. The tomb of a colossal ship.",
						"japanese": "ここは墓だ。巨大な船の墓。",
						"chinese": "这里是坟墓。一艘巨型船只的坟墓。",
						"french": "C'est une tombe. La tombe d'un vaisseau colossal.",
						"spanish": "Esto es una tumba. La tumba de un barco colosal.",
						"vietnamese": "Đây là một ngôi mộ. Ngôi mộ của một con tàu khổng lồ.",
						"thai": "ที่นี่คือสุสาน สุสานของเรือมหึมา",
						"hindi": "यह एक कब्र है। एक विशाल जहाज की कब्र।"
					},
					"type": "speech",
					"speaker": "hild",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "배...?",
						"english": "A ship...?",
						"japanese": "船...？",
						"chinese": "船......？",
						"french": "Un navire...?",
						"spanish": "¿Un barco...?",
						"vietnamese": "Tàu...?",
						"thai": "เรือ...?",
						"hindi": "जहाज...?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "hild",
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "hild",
					"content": {
						"korean": "전장에서 스러진 영혼들이 차가운 얼음 속에 갇혀 있어.",
						"english": "Souls fallen in battle are trapped within the cold ice.",
						"japanese": "戦場で倒れた魂が、冷たい氷の中に囚われている。",
						"chinese": "那些倒在战场上的灵魂被困在冰冷的冰层中。",
						"french": "Les âmes tombées au combat sont piégées dans la glace froide.",
						"spanish": "Las almas caídas en batalla están atrapadas en el hielo frío.",
						"vietnamese": "Những linh hồn ngã xuống chiến trường đang bị giam cầm trong băng giá lạnh lẽo.",
						"thai": "วิญญาณที่ล้มตายในสนามรบถูกจองจำอยู่ในน้ำแข็งอันเย็นยะเยือก",
						"hindi": "युद्ध में गिरी हुई आत्माएँ ठंडी बर्फ़ में फँसी हुई हैं।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "빙하가... 무덤이라고?",
						"english": "A glacier... a tomb?",
						"japanese": "氷河が…墓だと？",
						"chinese": "冰川…是坟墓？",
						"french": "Un glacier... une tombe ?",
						"spanish": "¿Un glaciar... una tumba?",
						"vietnamese": "Một sông băng... là mộ ư?",
						"thai": "ธารน้ำแข็ง...คือสุสานรึ?",
						"hindi": "ग्लेशियर... एक कब्र?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "hild",
					"type": "speech",
					"content": {
						"korean": "그들의 맹세와 약속이 얼어붙었다. 잊히지 않기 위해.",
						"english": "Their vows and promises are frozen. So they won't be forgotten.",
						"japanese": "彼らの誓いと約束が凍てついた。忘れ去られないために。",
						"chinese": "他们的誓言和承诺被冰封了。为了不被遗忘。",
						"french": "Leurs serments et promesses sont gelés. Pour ne pas être oubliés.",
						"spanish": "Sus votos y promesas están congelados. Para no ser olvidados.",
						"vietnamese": "Lời thề và lời hứa của họ đã đóng băng. Để không bị lãng quên.",
						"thai": "คำสาบานและคำสัญญาของพวกเขาถูกแช่แข็ง เพื่อไม่ให้ถูกลืมเลือน.",
						"hindi": "उनके प्रण और वादे जम गए हैं। ताकि वे भूले न जाएँ।"
					}
				},
				{
					"content": {
						"korean": "무슨 약속을 했는데?",
						"english": "What promises?",
						"japanese": "どんな約束を？",
						"chinese": "什么承诺？",
						"french": "Quelles promesses ?",
						"spanish": "¿Qué promesas?",
						"vietnamese": "Lời hứa gì?",
						"thai": "คำสัญญาอะไร?",
						"hindi": "क्या वादे किए थे?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "hild",
					"duration_ms": 500
				},
				{
					"emotion": "angry",
					"speaker": "hild",
					"type": "speech",
					"content": {
						"korean": "그들의 절규가 들리는구나. 빙하가 침범자를 경계하고 있어.",
						"english": "I hear their cries. The glacier guards against intruders.",
						"japanese": "彼らの叫びが聞こえる。氷河が侵入者を警戒している。",
						"chinese": "我听到他们的哭喊。冰川正在警戒入侵者。",
						"french": "J'entends leurs cris. Le glacier protège contre les intrus.",
						"spanish": "Oigo sus gritos. El glaciar protege contra los intrusos.",
						"vietnamese": "Tôi nghe thấy tiếng kêu của họ. Sông băng đang cảnh giác kẻ xâm nhập.",
						"thai": "ฉันได้ยินเสียงกรีดร้องของพวกเขา ธารน้ำแข็งกำลังเฝ้าระวังผู้บุกรุก.",
						"hindi": "मुझे उनकी चीखें सुनाई दे रही हैं। ग्लेशियर घुसपैठियों से सावधान है।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "우릴 막으려는 거야?",
						"english": "Are they trying to stop us?",
						"japanese": "私たちを止めようと？",
						"chinese": "他们想阻止我们吗？",
						"french": "Ils essaient de nous arrêter ?",
						"spanish": "¿Están intentando detenernos?",
						"vietnamese": "Họ muốn ngăn cản chúng ta ư?",
						"thai": "พวกเขาจะหยุดพวกเรางั้นหรือ?",
						"hindi": "क्या वे हमें रोकना चाहते हैं?"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "hild",
					"type": "speech",
					"content": {
						"korean": "망자들은 약속을 지키려 한다. 그들의 배신자를 향한 분노가 느껴진다.",
						"english": "The dead seek to uphold their promises. Their rage towards the betrayer is palpable.",
						"japanese": "亡者たちは約束を守ろうとしている。裏切り者への彼らの怒りが感じられる。",
						"chinese": "亡者们试图遵守他们的诺言。他们对背叛者的愤怒是显而易见的。",
						"french": "Les morts cherchent à tenir leurs promesses. Leur rage envers le traître est palpable.",
						"spanish": "Los muertos buscan cumplir sus promesas. Su rabia hacia el traidor es palpable.",
						"vietnamese": "Người chết cố gắng giữ lời hứa của họ. Sự phẫn nộ của họ đối với kẻ phản bội là rõ rệt.",
						"thai": "ผู้ตายพยายามที่จะรักษาสัญญา ความโกรธแค้นของพวกเขาต่อผู้ทรยศนั้นสัมผัสได้.",
						"hindi": "मृत लोग अपने वादे निभाने की कोशिश करते हैं। धोखेबाज के प्रति उनका क्रोध स्पष्ट है।"
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
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "hild"
				},
				{
					"content": {
						"korean": "더 이상은... 돌아갈 수 없다. 망자들의 울부짖음이 길을 막는구나.",
						"english": "No more... no turning back. The wails of the dead block the way.",
						"japanese": "もう…引き返せない。亡者たちの嘆きが道を塞ぐ。",
						"chinese": "无法再…回头了。亡者的哀嚎阻挡了去路。",
						"french": "Plus question... de faire demi-tour. Les lamentations des morts bloquent le chemin.",
						"spanish": "Ya no... hay vuelta atrás. Los lamentos de los muertos bloquean el camino.",
						"vietnamese": "Không thể nữa... không thể quay lại. Tiếng rên rỉ của người chết chặn đường.",
						"thai": "ไม่แล้ว... ไม่มีทางกลับแล้ว. เสียงคร่ำครวญของผู้ตายขวางทางอยู่.",
						"hindi": "अब और नहीं... पीछे नहीं हट सकते। मृतकों की चीखें रास्ता रोक रही हैं।"
					},
					"type": "speech",
					"speaker": "hild",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "우리 앞을 막아서는 게... 망자들이라고?",
						"english": "Are those... the dead blocking our way?",
						"japanese": "私たちの行く手を阻むのが…亡者たちだと？",
						"chinese": "挡在我们前面的是…亡者？",
						"french": "Ce sont... les morts qui nous barrent la route ?",
						"spanish": "¿Son... los muertos quienes nos bloquean el camino?",
						"vietnamese": "Những kẻ chặn đường chúng ta... là người chết ư?",
						"thai": "ที่ขวางทางเราอยู่...คือผู้ตายงั้นหรือ?",
						"hindi": "क्या हमारे रास्ते में... मृत लोग हैं?"
					},
					"emotion": "base"
				},
				{
					"speaker": "hild",
					"type": "speech",
					"content": {
						"korean": "그들은 잊히는 것을 두려워한다. 침범자를 용서하지 않는다.",
						"english": "They fear being forgotten. They will not forgive intruders.",
						"japanese": "彼らは忘れられることを恐れている。侵入者を許さない。",
						"chinese": "他们害怕被遗忘。他们不会原谅入侵者。",
						"french": "Ils craignent d'être oubliés. Ils ne pardonneront pas aux intrus.",
						"spanish": "Temen ser olvidados. No perdonarán a los intrusos.",
						"vietnamese": "Họ sợ bị lãng quên. Họ sẽ không tha thứ cho kẻ xâm nhập.",
						"thai": "พวกเขากลัวที่จะถูกลืมเลือน พวกเขาจะไม่ให้อภัยผู้บุกรุก.",
						"hindi": "वे भूले जाने से डरते हैं। वे घुसपैठियों को माफ नहीं करेंगे।"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "차가운 한기가 탐험대의 발목을 붙잡았다. 빙하는 점점 더 깊은 비밀을 감추는 듯했다.",
						"english": "A cold chill gripped the expedition. The glacier seemed to conceal ever deeper secrets.",
						"japanese": "冷たい寒気が探検隊の足元を掴んだ。氷河はますます深い秘密を隠しているようだった。",
						"chinese": "一股寒意紧抓着探险队的脚踝。冰川似乎隐藏着越来越深的秘密。",
						"french": "Un froid glacial s'empara de l'expédition. Le glacier semblait cacher des secrets toujours plus profonds.",
						"spanish": "Un frío gélido atenazó a la expedición. El glaciar parecía ocultar secretos cada vez más profundos.",
						"vietnamese": "Một luồng khí lạnh nắm chặt chân đoàn thám hiểm. Sông băng dường như che giấu những bí mật ngày càng sâu sắc hơn.",
						"thai": "ความหนาวเย็นเข้าเกาะกุมคณะสำรวจ ธารน้ำแข็งดูเหมือนจะซ่อนความลับที่ลึกขึ้นเรื่อยๆ.",
						"hindi": "एक ठंडी सनसनी ने अभियान दल को जकड़ लिया। ग्लेशियर गहरे रहस्य छुपाता हुआ प्रतीत हो रहा था।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "hild"
				},
				{
					"content": {
						"korean": "이곳이다. 망자들의 수호자. {random_boss}가 기다리는 곳.",
						"english": "This is the place. The Guardian of the Dead. {random_boss} awaits.",
						"japanese": "ここだ。亡者の守護者。{random_boss}が待つ場所。",
						"chinese": "就是这里。亡者守护者。{random_boss}在此等候。",
						"french": "C'est ici. Le Gardien des Morts. Là où {random_boss} attend.",
						"spanish": "Aquí está. El Guardián de los Muertos. Donde {random_boss} espera.",
						"vietnamese": "Đây rồi. Kẻ bảo hộ người chết. Nơi {random_boss} đang chờ đợi.",
						"thai": "ที่นี่เอง ผู้พิทักษ์แห่งผู้ตาย ที่ซึ่ง {random_boss} รออยู่",
						"hindi": "यह जगह है। मृतकों का संरक्षक। जहाँ {random_boss} प्रतीक्षा कर रहा है।"
					},
					"type": "speech",
					"speaker": "hild",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "감히... 잠든 자들의 안식을 방해하는가.",
						"english": "How dare you... disturb the rest of the sleeping ones?",
						"japanese": "貴様... 眠る者たちの安息を妨げるか。",
						"chinese": "竟敢... 打扰沉睡者的安宁。",
						"french": "Comment oses-tu... troubler le repos des endormis ?",
						"spanish": "¿Cómo osas... perturbar el descanso de los que duermen?",
						"vietnamese": "Ngươi... dám quấy rầy sự yên nghỉ của những người đang ngủ sao?",
						"thai": "กล้าดีอย่างไร... ถึงรบกวนการพักผ่อนของผู้หลับใหล",
						"hindi": "तुम्हारी हिम्मत कैसे हुई... सोए हुए लोगों की शांति भंग करने की।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "네가 이 무덤을 지키는 자냐?",
						"english": "Are you the one who guards this tomb?",
						"japanese": "貴様がこの墓を守る者か？",
						"chinese": "你是守卫这座墓的人吗？",
						"french": "Es-tu celui qui garde cette tombe ?",
						"spanish": "¿Eres tú quien custodia esta tumba?",
						"vietnamese": "Ngươi là kẻ canh giữ ngôi mộ này sao?",
						"thai": "เจ้าคือผู้เฝ้าสุสานนี้หรือ?",
						"hindi": "क्या तुम इस कब्र के रखवाले हो?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "내 이름은 {random_boss}. 망자들의 약속을 지키는 그림자다.",
						"english": "My name is {random_boss}. I am the shadow who keeps the vow of the dead.",
						"japanese": "私の名は{random_boss}。亡者たちの約束を守る影だ。",
						"chinese": "我的名字是{random_boss}。我是守护亡者誓约的影子。",
						"french": "Mon nom est {random_boss}. Je suis l'ombre qui tient la promesse des morts.",
						"spanish": "Mi nombre es {random_boss}. Soy la sombra que guarda la promesa de los muertos.",
						"vietnamese": "Tên ta là {random_boss}. Ta là cái bóng giữ lời hứa của những người đã khuất.",
						"thai": "ข้าชื่อ {random_boss} ข้าคือเงาผู้รักษาสัญญาแห่งผู้ตาย",
						"hindi": "मेरा नाम {random_boss} है। मैं वह परछाई हूँ जो मृतकों की प्रतिज्ञा रखती है।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "우리는 진실을 밝히러 왔다!",
						"english": "We have come to uncover the truth!",
						"japanese": "我々は真実を暴きに来た！",
						"chinese": "我们是为了揭露真相而来！",
						"french": "Nous sommes venus révéler la vérité !",
						"spanish": "¡Hemos venido a revelar la verdad!",
						"vietnamese": "Chúng ta đến đây để phơi bày sự thật!",
						"thai": "พวกเรามาเพื่อเปิดเผยความจริง!",
						"hindi": "हम सच्चाई उजागर करने आए हैं!"
					},
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "hild"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이봐라... 망자들의 맹세는... 끝나지 않아...",
						"english": "Hear this... the oath of the dead... it does not end...",
						"japanese": "聞け... 亡者たちの誓いは... 終わらぬ...",
						"chinese": "听着... 亡者的誓言... 永不终结...",
						"french": "Écoutez... le serment des morts... ne prendra pas fin...",
						"spanish": "Escuchad... el juramento de los muertos... no termina...",
						"vietnamese": "Nghe đây... lời thề của người chết... không bao giờ kết thúc...",
						"thai": "ฟังนะ... คำสาบานของผู้ตาย... ไม่สิ้นสุด...",
						"hindi": "सुनो... मृतकों की शपथ... खत्म नहीं होती..."
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "무슨 소리야? 뭘 더 숨기고 있는 거야?",
						"english": "What do you mean? What else are you hiding?",
						"japanese": "何を言っている？何を隠しているんだ？",
						"chinese": "什么意思？你还在隐瞒什么？",
						"french": "Que veux-tu dire ? Que caches-tu d'autre ?",
						"spanish": "¿Qué quieres decir? ¿Qué más escondes?",
						"vietnamese": "Ngươi nói gì? Ngươi còn đang che giấu điều gì?",
						"thai": "เจ้าหมายความว่าอะไร? เจ้ากำลังซ่อนอะไรอีก?",
						"hindi": "तुम्हारा क्या मतलब है? तुम और क्या छिपा रहे हो?"
					}
				},
				{
					"type": "speech",
					"speaker": "hild",
					"content": {
						"korean": "약속은... 끊임없이 이어진다. 빙하가 그 증거다.",
						"english": "The vow... continues endlessly. The glacier is its proof.",
						"japanese": "約束は... 絶え間なく続く。氷河がその証だ。",
						"chinese": "誓约... 永无止境。冰川就是证据。",
						"french": "La promesse... se poursuit sans fin. Le glacier en est la preuve.",
						"spanish": "La promesa... continúa sin cesar. El glaciar es la prueba.",
						"vietnamese": "Lời hứa... tiếp diễn không ngừng. Băng hà là bằng chứng.",
						"thai": "สัญญา... ดำเนินต่อไปไม่สิ้นสุด ธารน้ำแข็งคือหลักฐาน",
						"hindi": "वह प्रतिज्ञा... अंतहीन जारी रहती है। ग्लेशियर इसका प्रमाण है।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "차가운 얼음은 침묵했지만, 그 안에 잠든 거대한 배의 비밀은 더욱 선명하게 드러났다.",
						"english": "The cold ice was silent, but the secret of the colossal ship slumbering within was revealed even more clearly.",
						"japanese": "冷たい氷は沈黙したが、その中に眠る巨大な船の秘密はより鮮明に明らかになった。",
						"chinese": "冰冷的寒冰虽然沉默，但其中沉睡的巨船的秘密却更加清晰地显露出来。",
						"french": "La glace froide était silencieuse, mais le secret du navire colossal qui y sommeillait fut révélé encore plus clairement.",
						"spanish": "El frío hielo permaneció en silencio, pero el secreto de la colosal nave que dormía en su interior se reveló con aún más claridad.",
						"vietnamese": "Băng giá lạnh lẽo im lặng, nhưng bí mật của con tàu khổng lồ đang ngủ yên bên trong lại được hé lộ rõ ràng hơn.",
						"thai": "น้ำแข็งที่เย็นยะเยือกเงียบงัน แต่ความลับของเรือมหึมาที่หลับใหลอยู่ภายในกลับถูกเปิดเผยอย่างชัดเจนยิ่งขึ้น",
						"hindi": "ठंडी बर्फ खामोश थी, लेकिन उसके अंदर सोए हुए विशाल जहाज का रहस्य और भी स्पष्ट रूप से सामने आ गया।"
					}
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "hild",
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "어리석은 자들... 망자들의 분노를 감당할 수 없을 것이다.",
						"english": "Fools... you will not be able to withstand the wrath of the dead.",
						"japanese": "愚か者たちめ... 亡者たちの怒りに耐えられまい。",
						"chinese": "愚蠢的人类... 你们无法承受亡者的愤怒。",
						"french": "Imbéciles... vous ne pourrez pas supporter la colère des morts.",
						"spanish": "Necios... no podréis soportar la ira de los muertos.",
						"vietnamese": "Những kẻ ngốc... các ngươi sẽ không thể chịu đựng được cơn thịnh nộ của người chết.",
						"thai": "พวกโง่เง่า... พวกเจ้าจะไม่สามารถทนทานต่อความโกรธแค้นของผู้ตายได้",
						"hindi": "मूर्खों... तुम मृतकों के क्रोध का सामना नहीं कर पाओगे।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "...아직 끝나지 않았어. 진실은 반드시 밝혀진다!",
						"english": "...It's not over yet. The truth will surely be revealed!",
						"japanese": "...まだ終わってない。真実は必ず明らかになる！",
						"chinese": "...还没结束。真相终将大白！",
						"french": "...Ce n'est pas encore fini. La vérité éclatera !",
						"spanish": "...Aún no ha terminado. ¡La verdad saldrá a la luz!",
						"vietnamese": "...Chưa kết thúc đâu. Sự thật nhất định sẽ được phơi bày!",
						"thai": "...ยังไม่จบแค่นี้ ความจริงจะต้องถูกเปิดเผย!",
						"hindi": "...अभी खत्म नहीं हुआ है। सच ज़रूर सामने आएगा!"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "여기 잠든 이여... 그대의 맹세는... 헛되지 않았다.",
						"english": "O Sleeper here... your vow was... not in vain.",
						"japanese": "ここに眠る者よ... あなたの誓いは... 無駄ではなかった。",
						"chinese": "长眠于此者啊... 你的誓言... 并未虚度。",
						"french": "Ô toi qui reposes ici... ton serment... n'a pas été vain.",
						"spanish": "Oh, durmiente aquí... tu juramento... no fue en vano.",
						"vietnamese": "Hỡi người đang yên nghỉ nơi đây... lời thề của ngươi... không hề vô ích.",
						"thai": "โอ้ ผู้หลับใหล ณ ที่นี้... คำสาบานของเจ้า... ไม่ได้สูญเปล่าเลย",
						"hindi": "हे यहाँ सोए हुए... तुम्हारी प्रतिज्ञा... व्यर्थ नहीं गई।"
					},
					"speaker": "hild",
					"type": "speech"
				}
			]
		}
	]
} as const;
