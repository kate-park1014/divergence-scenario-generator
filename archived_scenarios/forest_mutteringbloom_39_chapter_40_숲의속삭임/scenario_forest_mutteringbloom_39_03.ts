export const scenario_forest_mutteringbloom_39_03 = {
	"scenario_id": "forest_mutteringbloom_39_03",
	"order": 3,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"cedar": {
			"id": "mon_bd67c222-311e-4f31-b81f-931b14f6b5c6",
			"name": {
				"korean": "시더",
				"english": "Cedar",
				"japanese": "シダー",
				"chinese": "雪松",
				"french": "Cèdre",
				"spanish": "Cedro",
				"vietnamese": "Tuyết tùng",
				"thai": "ซีดาร์",
				"hindi": "देवदार"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f1057921-5fa2-4be2-767d-1a64c33e6e00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/9579f10e-eb78-40e5-d495-72f489322200/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"숲은 속삭였다. 아름답고도 잔혹한 노래를.",
			"비정상적인 성장이 모든 것을 뒤덮었고.",
			"과거의 망령이, 잊혀진 비명을 토해냈다.",
			"이곳에 뿌리내린 진실은… 광기 그 자체였다."
		],
		"english": [
			"The forest whispered. A song both beautiful and cruel.",
			"Abnormal growth engulfed everything.",
			"The specter of the past, spewing forgotten screams.",
			"The truth rooted here... was madness itself."
		],
		"japanese": [
			"森は囁いた。美しくも残酷な歌を。",
			"異常な成長が全てを覆い尽くした。",
			"過去の亡霊が、忘れられた悲鳴を吐き出した。",
			"ここに根付いた真実は…狂気そのものだった。"
		],
		"chinese": [
			"森林低语着。一首美丽而又残酷的歌。",
			"异常的生长吞噬了一切。",
			"过去的亡灵，发出被遗忘的尖叫。",
			"扎根于此的真相……是疯狂本身。"
		],
		"french": [
			"La forêt murmurait. Un chant à la fois beau et cruel.",
			"Une croissance anormale a tout englouti.",
			"Le spectre du passé crachait des cris oubliés.",
			"La vérité enracinée ici… n'était que folie pure."
		],
		"spanish": [
			"El bosque susurraba. Una canción hermosa y cruel.",
			"Un crecimiento anormal lo cubrió todo.",
			"El espectro del pasado, escupiendo gritos olvidados.",
			"La verdad arraigada aquí... era la locura misma."
		],
		"vietnamese": [
			"Rừng thì thầm. Một bài ca vừa đẹp đẽ vừa tàn khốc.",
			"Sự phát triển bất thường bao trùm mọi thứ.",
			"Bóng ma quá khứ, phun ra những tiếng thét bị lãng quên.",
			"Sự thật cắm rễ ở đây... chính là sự điên rồ."
		],
		"thai": [
			"ป่ากระซิบ แผ่วเบา. เพลงที่งดงามแต่โหดร้าย.",
			"การเติบโตที่ผิดปกติกลืนกินทุกสิ่ง.",
			"วิญญาณจากอดีต คายเสียงกรีดร้องที่ถูกลืมเลือน.",
			"ความจริงที่หยั่งรากลึกที่นี่… คือความวิกลจริตเอง."
		],
		"hindi": [
			"जंगल फुसफुसाया। एक गीत जो सुंदर भी था और क्रूर भी।",
			"असामान्य वृद्धि ने सब कुछ निगल लिया।",
			"अतीत का प्रेत, भूले हुए चीखों को उगल रहा था।",
			"यहां निहित सच्चाई... स्वयं पागलपन थी।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "숲의 안쪽. 고대 부족의 흔적이 어지럽게 널려 있었다.",
						"english": "Deep within the forest. Traces of an ancient tribe were scattered haphazardly.",
						"japanese": "森の奥。古代部族の痕跡が乱雑に散らばっていた。",
						"chinese": "森林深处。古代部落的痕迹杂乱地散落着。",
						"french": "Au plus profond de la forêt. Des traces d'une ancienne tribu étaient éparpillées pêle-mêle.",
						"spanish": "En lo profundo del bosque. Restos de una antigua tribu estaban esparcidos al azar.",
						"vietnamese": "Sâu trong rừng. Dấu tích của một bộ tộc cổ xưa nằm rải rác một cách lộn xộn.",
						"thai": "ลึกเข้าไปในป่า. ร่องรอยของชนเผ่าโบราณกระจัดกระจายไม่เป็นระเบียบ.",
						"hindi": "जंगल के अंदरूनी हिस्से में। एक प्राचीन जनजाति के निशान अस्त-व्यस्त पड़े थे।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이게 다 뭐야?",
						"english": "What is all this?",
						"japanese": "これ、一体何だ？",
						"chinese": "这都是什么？",
						"french": "Qu'est-ce que c'est que tout ça ?",
						"spanish": "¿Qué es todo esto?",
						"vietnamese": "Tất cả những thứ này là gì?",
						"thai": "นี่มันอะไรกันเนี่ย?",
						"hindi": "यह सब क्या है?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "뭔가… 끔찍한 의식을 치렀던 곳인가.",
						"english": "Was this... a place where some terrible ritual was performed?",
						"japanese": "ここは…何か恐ろしい儀式が行われた場所なのか。",
						"chinese": "这里是……举行过某种可怕仪式的地方吗？",
						"french": "Était-ce... un lieu où un terrible rituel fut accompli ?",
						"spanish": "¿Fue este... un lugar donde se realizó algún ritual terrible?",
						"vietnamese": "Đây có phải là... nơi diễn ra một nghi lễ khủng khiếp nào đó không?",
						"thai": "ที่นี่… เป็นที่ที่ประกอบพิธีกรรมอันน่ากลัวอย่างนั้นหรือ.",
						"hindi": "क्या यह... एक ऐसी जगह थी जहाँ कोई भयानक अनुष्ठान किया गया था?"
					}
				},
				{
					"type": "speech",
					"speaker": "character_2",
					"content": {
						"korean": "숲이 너무 빨리 자라. 뭔가 이상해.",
						"english": "The forest is growing too fast. Something's wrong.",
						"japanese": "森の成長が速すぎる。何かがおかしい。",
						"chinese": "森林长得太快了。有些不对劲。",
						"french": "La forêt pousse trop vite. Quelque chose ne va pas.",
						"spanish": "El bosque está creciendo demasiado rápido. Algo anda mal.",
						"vietnamese": "Rừng mọc quá nhanh. Có gì đó không ổn.",
						"thai": "ป่าเติบโตเร็วเกินไป. มีบางอย่างผิดปกติ.",
						"hindi": "जंगल बहुत तेज़ी से बढ़ रहा है। कुछ गड़बड़ है।"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"content": {
						"korean": "덩굴에 휘감긴 조각상들, 주술용 지팡이가 을씨년스럽게 놓여 있었다.",
						"english": "Statues entwined with vines, and shamanic staffs lay eerily.",
						"japanese": "蔓に絡みつかれた像や、呪術用の杖が不気味に置かれていた。",
						"chinese": "藤蔓缠绕的雕像，巫术用的法杖阴森地摆放着。",
						"french": "Des statues entrelacées de vignes et des bâtons chamaniques étaient étrangement posés.",
						"spanish": "Estatuas envueltas en enredaderas y bastones chamánicos yacían de forma espeluznante.",
						"vietnamese": "Những bức tượng bị dây leo quấn quanh, và những cây trượng pháp sư đặt một cách rùng rợn.",
						"thai": "รูปปั้นที่ถูกเถาวัลย์พันเกี่ยว และไม้เท้าหมอผีวางอยู่ดูน่าขนลุก.",
						"hindi": "बेलों में लिपटी मूर्तियां और shamanic छड़ें अजीब तरह से पड़ी थीं।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "cedar",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"action": "enter"
				},
				{
					"emotion": "sad",
					"speaker": "cedar",
					"type": "speech",
					"content": {
						"korean": "여기로 와서는 안 돼… 돌아가.",
						"english": "You shouldn't be here... go back.",
						"japanese": "ここに来てはいけない…戻れ。",
						"chinese": "你不该来这里……回去。",
						"french": "Tu ne devrais pas être ici... retourne.",
						"spanish": "No deberías estar aquí... vuelve.",
						"vietnamese": "Ngươi không nên ở đây... quay lại đi.",
						"thai": "เจ้าไม่ควรอยู่ที่นี่… กลับไปซะ.",
						"hindi": "तुम्हें यहाँ नहीं आना चाहिए था... वापस जाओ।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "누구세요?",
						"english": "Who are you?",
						"japanese": "どなたですか？",
						"chinese": "你是谁？",
						"french": "Qui êtes-vous ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Bạn là ai?",
						"thai": "คุณคือใคร?",
						"hindi": "तुम कौन हो?"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "cedar",
					"content": {
						"korean": "나는 시더. 이 숲의… 생존자.",
						"english": "I am Cedar. A survivor... of this forest.",
						"japanese": "私はシダー。この森の…生存者だ。",
						"chinese": "我是希德。这片森林的……幸存者。",
						"french": "Je suis Cedar. Une survivante... de cette forêt.",
						"spanish": "Soy Cedar. Una superviviente... de este bosque.",
						"vietnamese": "Ta là Cedar. Kẻ sống sót... của khu rừng này.",
						"thai": "ฉันคือซีดาร์ ผู้รอดชีวิต... ของป่าแห่งนี้",
						"hindi": "मैं सीडर हूँ। इस जंगल की... एक जीवित बची हुई।"
					}
				},
				{
					"speaker": "cedar",
					"type": "speech",
					"content": {
						"korean": "오래전부터 그랬어. 숲에 들어온 사람들이… 사라졌어.",
						"english": "It's been like this for ages. People who entered the forest... vanished.",
						"japanese": "ずっと昔からだ。森に入ってきた者たちが…消えたんだ。",
						"chinese": "很久以前就是这样了。进入森林的人们……都消失了。",
						"french": "Ça fait une éternité que c'est comme ça. Ceux qui entraient dans la forêt... disparaissaient.",
						"spanish": "Ha sido así desde hace mucho. La gente que entraba al bosque... desaparecía.",
						"vietnamese": "Chuyện này đã xảy ra từ rất lâu rồi. Những người bước vào rừng... đều biến mất.",
						"thai": "มันเป็นแบบนี้มานานแล้ว ผู้คนที่เข้ามาในป่า... หายไป",
						"hindi": "यह बहुत पहले से ऐसा ही है। जो लोग जंगल में आए... गायब हो गए।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "사라졌다고요?",
						"english": "Vanished?",
						"japanese": "消えた、と？",
						"chinese": "消失了？",
						"french": "Disparus ?",
						"spanish": "¿Desaparecidos?",
						"vietnamese": "Biến mất sao?",
						"thai": "หายไปงั้นเหรอ?",
						"hindi": "गायब हो गए?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "cedar",
					"content": {
						"korean": "밤마다 들려오는… 웃음소리… 그게 전부였어.",
						"english": "Every night, I heard... laughter... that was all.",
						"japanese": "毎晩聞こえる…笑い声…それだけだった。",
						"chinese": "每晚都能听到……笑声……就只有这些。",
						"french": "Chaque nuit, ces... rires... c'était tout.",
						"spanish": "Cada noche, risas... eso era todo.",
						"vietnamese": "Mỗi đêm, tôi nghe thấy... tiếng cười... chỉ có vậy.",
						"thai": "ทุกคืนที่ได้ยิน... เสียงหัวเราะ... นั่นคือทั้งหมด",
						"hindi": "हर रात आती... हँसी की आवाज़... बस वही था।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "cedar"
				},
				{
					"speaker": "cedar",
					"type": "speech",
					"content": {
						"korean": "숲은 아름답지만… 잔인해.",
						"english": "The forest is beautiful... yet cruel.",
						"japanese": "森は美しいが…残酷だ。",
						"chinese": "森林很美……却也很残酷。",
						"french": "La forêt est belle... mais cruelle.",
						"spanish": "El bosque es hermoso... pero cruel.",
						"vietnamese": "Rừng thật đẹp... nhưng cũng thật tàn nhẫn.",
						"thai": "ป่าสวยงาม... แต่ก็โหดร้าย",
						"hindi": "जंगल सुंदर है... फिर भी क्रूर है।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "저 조각상들은 뭐죠?",
						"english": "What are those statues?",
						"japanese": "あの像は何ですか？",
						"chinese": "那些雕像是什么？",
						"french": "Que sont ces statues ?",
						"spanish": "¿Qué son esas estatuas?",
						"vietnamese": "Những bức tượng kia là gì?",
						"thai": "รูปปั้นพวกนั้นคืออะไร?",
						"hindi": "वो मूर्तियाँ क्या हैं?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "오래된 나무의 뿌리가 인간 형상을 휘감아, 점차 나무의 일부로 만들고 있었다.",
						"english": "Ancient tree roots coiled around human figures, gradually making them part of the tree.",
						"japanese": "古い木の根が人間の形を絡め取り、次第に木の一部に変えていた。",
						"chinese": "古老的树根缠绕着人类的形体，逐渐将其变为树的一部分。",
						"french": "Les racines d'arbres anciens s'enroulaient autour de formes humaines, les transformant peu à peu en partie de l'arbre.",
						"spanish": "Las raíces de árboles antiguos se enroscaban alrededor de figuras humanas, convirtiéndolas poco a poco en parte del árbol.",
						"vietnamese": "Rễ cây cổ thụ quấn quanh hình người, dần biến họ thành một phần của cây.",
						"thai": "รากของต้นไม้โบราณโอบรัดร่างมนุษย์ ค่อยๆ ทำให้พวกเขากลายเป็นส่วนหนึ่งของต้นไม้",
						"hindi": "पुराने पेड़ों की जड़ें मानव आकृतियों को लपेट रही थीं, धीरे-धीरे उन्हें पेड़ का हिस्सा बना रही थीं।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그게… 숲의 선물이야. 영원한 생명.",
						"english": "That's... the forest's gift. Eternal life.",
						"japanese": "それが…森の贈り物だ。永遠の命。",
						"chinese": "那是……森林的礼物。永恒的生命。",
						"french": "C'est... le cadeau de la forêt. La vie éternelle.",
						"spanish": "Ese es... el regalo del bosque. Vida eterna.",
						"vietnamese": "Đó là... món quà của rừng. Sự sống vĩnh cửu.",
						"thai": "นั่นคือ... ของขวัญจากป่า ชีวิตนิรันดร์",
						"hindi": "वह... जंगल का उपहार है। अनंत जीवन।"
					},
					"speaker": "cedar",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_3",
					"content": {
						"korean": "선물이라고요? 저게?",
						"english": "A gift? That?",
						"japanese": "贈り物、だと？あれが？",
						"chinese": "礼物？那个？",
						"french": "Un cadeau ? Ça ?",
						"spanish": "¿Un regalo? ¿Eso?",
						"vietnamese": "Món quà sao? Cái đó ư?",
						"thai": "ของขวัญงั้นเหรอ? นั่นน่ะเหรอ?",
						"hindi": "एक उपहार? वह?"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "더 깊이 가지 마. 너희도… 저렇게 될 거야.",
						"english": "Don't go deeper. You'll end up… just like them.",
						"japanese": "これ以上深く入るな。お前たちも…あんな風になるぞ。",
						"chinese": "别再深入了。你们也会…变成那样的。",
						"french": "Ne va pas plus loin. Vous finirez… comme eux.",
						"spanish": "No vayas más profundo. Vosotros también… acabaréis así.",
						"vietnamese": "Đừng đi sâu hơn nữa. Các ngươi rồi cũng… sẽ thành ra như vậy.",
						"thai": "อย่าเข้าไปลึกกว่านี้เลย เจ้าเองก็จะ… กลายเป็นแบบนั้น",
						"hindi": "और गहरे मत जाओ। तुम सब भी… वैसे ही हो जाओगे।"
					},
					"speaker": "cedar",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						3,
						3
					],
					"type": "direction",
					"speaker": "cedar",
					"action": "enter"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "점점 더 기분 나빠져…",
						"english": "It's getting worse and worse…",
						"japanese": "ますます気分が悪くなる…",
						"chinese": "感觉越来越糟了…",
						"french": "Ça empire de plus en plus…",
						"spanish": "Me siento cada vez peor…",
						"vietnamese": "Càng lúc càng tệ…",
						"thai": "รู้สึกแย่ลงเรื่อยๆ…",
						"hindi": "यह और बुरा होता जा रहा है…"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "숲이 너희를 원해. 너희의 생명력을… 광기를.",
						"english": "The forest wants you. Your life force… your madness.",
						"japanese": "森がお前たちを求めている。お前たちの生命力を…狂気を。",
						"chinese": "森林想要你们。你们的生命力…还有疯狂。",
						"french": "La forêt vous veut. Votre force vitale… votre folie.",
						"spanish": "El bosque os quiere. Vuestra fuerza vital… vuestra locura.",
						"vietnamese": "Rừng muốn các ngươi. Sinh lực của các ngươi… và sự điên loạn.",
						"thai": "ป่าต้องการพวกเจ้า พลังชีวิตของพวกเจ้า… ความบ้าคลั่งของพวกเจ้า",
						"hindi": "जंगल तुम्हें चाहता है। तुम्हारी जीवन शक्ति… तुम्हारा पागलपन।"
					},
					"type": "speech",
					"speaker": "cedar"
				},
				{
					"content": {
						"korean": "우리는 멈출 수 없어.",
						"english": "We can't stop.",
						"japanese": "我々は止められない。",
						"chinese": "我们无法停止。",
						"french": "Nous ne pouvons pas nous arrêter.",
						"spanish": "No podemos parar.",
						"vietnamese": "Chúng ta không thể dừng lại.",
						"thai": "เราหยุดไม่ได้",
						"hindi": "हम रुक नहीं सकते।"
					},
					"speaker": "character_4",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "제발… 돌아가. 저 너머엔… 숲의 심장이 있어. 모든 비명의 근원.",
						"english": "Please… go back. Beyond that… lies the forest's heart. The source of all screams.",
						"japanese": "頼む…戻れ。その先には…森の心臓がある。すべての悲鳴の根源だ。",
						"chinese": "求求你…回去吧。在那边…是森林的心脏。所有尖叫的根源。",
						"french": "S'il te plaît… retourne en arrière. Au-delà… se trouve le cœur de la forêt. La source de tous les cris.",
						"spanish": "Por favor… volved. Más allá… está el corazón del bosque. El origen de todos los gritos.",
						"vietnamese": "Làm ơn… quay lại đi. Phía bên kia… là trái tim của khu rừng. Nguồn gốc của mọi tiếng la hét.",
						"thai": "ได้โปรด… กลับไปซะ เลยจากตรงนั้นไป… คือหัวใจของป่า ต้นกำเนิดของเสียงกรีดร้องทั้งหมด",
						"hindi": "कृपया… वापस जाओ। उस पार… जंगल का दिल है। सभी चीखों का स्रोत।"
					},
					"speaker": "cedar",
					"type": "speech"
				},
				{
					"type": "direction",
					"speaker": "cedar",
					"duration_ms": 400,
					"direction": "down",
					"action": "exit"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…도망갔나.",
						"english": "…Did they run away?",
						"japanese": "…逃げたのか。",
						"chinese": "…他们逃走了吗？",
						"french": "…Ils se sont enfuis ?",
						"spanish": "¿Se escaparon?",
						"vietnamese": "…Chúng đã bỏ chạy à?",
						"thai": "…หนีไปแล้วเหรอ",
						"hindi": "…क्या वे भाग गए?"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "숲의 심장부. 거대한 기운이 이들을 압도했다.",
						"english": "The heart of the forest. A colossal aura overwhelmed them.",
						"japanese": "森の心臓部。巨大な気が彼らを圧倒した。",
						"chinese": "森林的心脏。一股巨大的气息压倒了他们。",
						"french": "Le cœur de la forêt. Une aura colossale les submergeait.",
						"spanish": "El corazón del bosque. Una energía colosal los abrumó.",
						"vietnamese": "Trái tim của rừng. Một luồng khí khổng lồ đã áp đảo họ.",
						"thai": "ใจกลางป่า พลังอันมหาศาลได้ครอบงำพวกเขา",
						"hindi": "जंगल का हृदय। एक विशाल आभा ने उन्हें अभिभूत कर दिया।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "하찮은 것들… 이 숲의 진정한 아름다움을 거부하는가?",
						"english": "Insignificant beings… do you reject the true beauty of this forest?",
						"japanese": "愚かな者たちよ…この森の真の美しさを拒むのか？",
						"chinese": "渺小的存在…你们拒绝这森林真正的美丽吗？",
						"french": "Êtres insignifiants… rejetez-vous la vraie beauté de cette forêt ?",
						"spanish": "Criaturas insignificantes… ¿rechazáis la verdadera belleza de este bosque?",
						"vietnamese": "Những kẻ nhỏ bé… các ngươi từ chối vẻ đẹp thật sự của khu rừng này ư?",
						"thai": "พวกไร้ค่า… เจ้าปฏิเสธความงามที่แท้จริงของป่านี้หรือ?",
						"hindi": "तुच्छ प्राणी… क्या तुम इस जंगल की सच्ची सुंदरता को नकारते हो?"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "당신이… 이 모든 걸 꾸민 건가!",
						"english": "You… you orchestrated all of this!",
						"japanese": "お前が…この全てを企んだのか！",
						"chinese": "你…你策划了这一切吗！",
						"french": "C'est vous… qui avez orchestré tout cela !",
						"spanish": "¡Tú… tú orquestaste todo esto!",
						"vietnamese": "Ngươi… ngươi đã sắp đặt tất cả chuyện này ư!",
						"thai": "เจ้า… เป็นคนบงการเรื่องทั้งหมดนี้หรือ!",
						"hindi": "तुमने… तुमने यह सब रचा है!"
					}
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "아니. 나는 그저… 숲의 의지일 뿐. 너희도 곧 알게 될 것이다.",
						"english": "No. I am merely… the will of the forest. You will all soon understand.",
						"japanese": "違う。私はただ…森の意思にすぎない。お前たちもすぐに知ることになるだろう。",
						"chinese": "不。我只是…森林的意志。你们很快就会明白的。",
						"french": "Non. Je ne suis que… la volonté de la forêt. Vous comprendrez tous bientôt.",
						"spanish": "No. Soy meramente… la voluntad del bosque. Pronto lo comprenderéis todos.",
						"vietnamese": "Không. Ta chỉ là… ý chí của khu rừng. Các ngươi sẽ sớm hiểu thôi.",
						"thai": "ไม่ใช่ ข้าเป็นเพียง… เจตจำนงของป่า พวกเจ้าทุกคนจะเข้าใจในไม่ช้า",
						"hindi": "नहीं। मैं केवल… जंगल की इच्छा हूँ। तुम सब जल्द ही समझ जाओगे।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "헛소리 마!",
						"english": "Enough nonsense!",
						"japanese": "ふざけるな！",
						"chinese": "别胡说！",
						"french": "N'importe quoi !",
						"spanish": "¡Tonterías!",
						"vietnamese": "Đừng nói nhảm!",
						"thai": "อย่าพูดเหลวไหล!",
						"hindi": "बकवास मत करो!"
					},
					"type": "speech",
					"speaker": "character_1",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "비명은 뿌리내리고, 과거는 반복되지.",
						"english": "Screams take root, and the past repeats itself.",
						"japanese": "悲鳴は根付き、過去は繰り返される。",
						"chinese": "尖叫生根，过往重演。",
						"french": "Les cris s'enracinent, le passé se répète.",
						"spanish": "Los gritos echan raíces, el pasado se repite.",
						"vietnamese": "Tiếng thét cắm rễ, quá khứ lặp lại.",
						"thai": "เสียงกรีดร้องหยั่งราก, อดีตย้อนรอย.",
						"hindi": "चीखें जड़ें जमाती हैं, और अतीत दोहराया जाता है।"
					}
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "숲의 뿌리가 다시금 탐험대를 옭아맸다.",
						"english": "The forest's roots once again entangled the expedition.",
						"japanese": "森の根が再び探検隊を絡め取った。",
						"chinese": "森林的根须再次缠住了探险队。",
						"french": "Les racines de la forêt ont de nouveau piégé l'expédition.",
						"spanish": "Las raíces del bosque volvieron a enredar a la expedición.",
						"vietnamese": "Rễ cây của khu rừng một lần nữa quấn lấy đoàn thám hiểm.",
						"thai": "รากของป่าพันธนาการคณะสำรวจอีกครั้ง",
						"hindi": "जंगल की जड़ें एक बार फिर से अभियान दल को उलझा गईं।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "어리석은 것들… 이 숲에 저항하는 건 무의미하다.",
						"english": "Foolish ones… Resisting this forest is meaningless.",
						"japanese": "愚かな者たち…この森に抗うのは無意味だ。",
						"chinese": "愚蠢的东西…抵抗这片森林是毫无意义的。",
						"french": "Insensés… Résister à cette forêt est inutile.",
						"spanish": "Estúpidos… Resistir a este bosque es inútil.",
						"vietnamese": "Những kẻ ngu ngốc… Chống lại khu rừng này là vô nghĩa.",
						"thai": "พวกโง่เขลา… การต่อต้านป่านี้ไร้ความหมาย",
						"hindi": "मूर्खों… इस जंगल का विरोध करना व्यर्थ है।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "아직… 끝나지 않았어!",
						"english": "It's not over yet!",
						"japanese": "まだ…終わってない！",
						"chinese": "还没…结束！",
						"french": "Ce n'est pas encore fini !",
						"spanish": "¡Aún no ha terminado!",
						"vietnamese": "Vẫn chưa… kết thúc!",
						"thai": "ยัง…ไม่จบ!",
						"hindi": "अभी… खत्म नहीं हुआ है!"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "이것이… 너희의 운명.",
						"english": "This is... your fate.",
						"japanese": "これが…お前たちの運命だ。",
						"chinese": "这就是…你们的命运。",
						"french": "C'est… votre destin.",
						"spanish": "Este es… vuestro destino.",
						"vietnamese": "Đây chính là… số phận của các ngươi.",
						"thai": "นี่คือ…ชะตากรรมของพวกเจ้า",
						"hindi": "यही… तुम्हारा भाग्य है।"
					},
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "{random_boss}가 쓰러지자, 숲의 맹렬한 성장이 잠시 멈췄다.",
						"english": "As {random_boss} fell, the forest's furious growth paused momentarily.",
						"japanese": "{random_boss}が倒れると、森の猛烈な成長は一時的に止まった。",
						"chinese": "随着{random_boss}倒下，森林的狂野生长暂时停滞。",
						"french": "Alors que {random_boss} tombait, la croissance furieuse de la forêt s'arrêta un instant.",
						"spanish": "Al caer {random_boss}, el crecimiento furioso del bosque se detuvo momentáneamente.",
						"vietnamese": "Khi {random_boss} ngã xuống, sự phát triển dữ dội của khu rừng tạm thời dừng lại.",
						"thai": "เมื่อ {random_boss} ล้มลง การเติบโตอันรุนแรงของป่าก็หยุดชะงักลงชั่วขณะ",
						"hindi": "जैसे ही {random_boss} गिरा, जंगल का उग्र विकास क्षण भर के लिए रुक गया।"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "하… 결국… 너희도… 숲의 일부가 될 뿐이야…",
						"english": "Hmph… In the end… you too… will just become part of the forest…",
						"japanese": "はぁ…結局…お前たちも…森の一部になるだけだ…",
						"chinese": "哈…到头来…你们…也只会成为森林的一部分…",
						"french": "Ha… Au final… vous aussi… ne serez qu'une partie de la forêt…",
						"spanish": "Ja… Al final… vosotros también… solo seréis parte del bosque…",
						"vietnamese": "Ha… Cuối cùng… các ngươi cũng… chỉ là một phần của khu rừng thôi…",
						"thai": "ฮ่า… ในที่สุด… พวกเจ้าก็… จะเป็นแค่ส่วนหนึ่งของป่า…",
						"hindi": "हा… अंत में… तुम भी… बस जंगल का हिस्सा बन जाओगे…"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "무슨 소리야?",
						"english": "What do you mean?",
						"japanese": "どういう意味だ？",
						"chinese": "什么意思？",
						"french": "Que veux-tu dire ?",
						"spanish": "¿Qué quieres decir?",
						"vietnamese": "Ý ngươi là sao?",
						"thai": "หมายความว่าอะไร?",
						"hindi": "तुम्हारा क्या मतलब है?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "진정한 광기는… 아직 시작도 안 했어…",
						"english": "The true madness… hasn't even begun yet…",
						"japanese": "真の狂気は…まだ始まってすらいない…",
						"chinese": "真正的疯狂…甚至还没开始…",
						"french": "La véritable folie… n'a même pas encore commencé…",
						"spanish": "La verdadera locura… ni siquiera ha comenzado aún…",
						"vietnamese": "Sự điên loạn thật sự… còn chưa bắt đầu…",
						"thai": "ความบ้าคลั่งที่แท้จริง… ยังไม่เริ่มต้นด้วยซ้ำ…",
						"hindi": "असली पागलपन… अभी शुरू भी नहीं हुआ है…"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_2",
					"content": {
						"korean": "끝난 게 아닌가…?",
						"english": "It's not over…?",
						"japanese": "終わってないのか…？",
						"chinese": "还没结束吗…？",
						"french": "Ce n'est pas fini… ?",
						"spanish": "¿No ha terminado…?",
						"vietnamese": "Chưa kết thúc sao…?",
						"thai": "ยังไม่จบงั้นหรือ…?",
						"hindi": "यह खत्म नहीं हुआ…?"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "숲은 잠시 침묵했다. 그러나 그 침묵은 또 다른 비명의 전조 같았다.",
						"english": "The forest fell silent for a moment. But that silence felt like the prelude to another scream.",
						"japanese": "森は一時的に沈黙した。しかし、その沈黙は別の悲鳴の前触れのように感じられた。",
						"chinese": "森林短暂地沉默了。然而，那沉默仿佛是另一声尖叫的前奏。",
						"french": "La forêt se tut un instant. Mais ce silence semblait être le prélude à un autre cri.",
						"spanish": "El bosque guardó silencio por un momento. Pero ese silencio se sintió como el preludio de otro grito.",
						"vietnamese": "Khu rừng im lặng trong chốc lát. Nhưng sự im lặng đó dường như là điềm báo cho một tiếng thét khác.",
						"thai": "ป่าเงียบไปชั่วขณะ แต่ความเงียบนั้นราวกับเป็นลางบอกเหตุของเสียงกรีดร้องอื่น",
						"hindi": "जंगल कुछ देर के लिए शांत हो गया। लेकिन वह शांति एक और चीख की प्रस्तावना जैसी लग रही थी।"
					}
				}
			],
			"id": 15
		}
	]
} as const;
