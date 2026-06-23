export const scenario_snowy_wyrdbound_84_01 = {
	"scenario_id": "snowy_wyrdbound_84_01",
	"order": 1,
	"act": "intro",
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
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "모든 것이 얼어붙은 마을. 매서운 바람이 예언처럼 속삭였다.",
						"english": "A village where everything is frozen. The harsh wind whispered like a prophecy.",
						"japanese": "すべてが凍りついた村。厳しい風が予言のように囁いた。",
						"chinese": "万物冻结的村庄。凛冽的寒风如预言般低语。",
						"french": "Un village où tout est gelé. Le vent glacial murmurait comme une prophétie.",
						"spanish": "Un pueblo donde todo está congelado. El viento helado susurraba como una profecía.",
						"vietnamese": "Một ngôi làng nơi mọi thứ đều đóng băng. Cơn gió khắc nghiệt thì thầm như một lời tiên tri.",
						"thai": "หมู่บ้านที่ทุกสิ่งเป็นน้ำแข็ง ลมพัดแรงกระซิบราวกับคำทำนาย",
						"hindi": "एक गाँव जहाँ सब कुछ जम गया है। बर्फीली हवा एक भविष्यवाणी की तरह फुसफुसाई।"
					},
					"emotion": "base"
				},
				{
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"speaker": "eira",
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "어서 오세요. 에이라입니다. 이 얼어붙은 땅의 유일한 안내자.",
						"english": "Welcome. I am Eira, the sole guide of this frozen land.",
						"japanese": "ようこそ。私はエイラ、この凍てつく地の唯一の案内人です。",
						"chinese": "欢迎。我是艾拉，这片冰冻之地的唯一向导。",
						"french": "Bienvenue. Je suis Eira, la seule guide de cette terre gelée.",
						"spanish": "Bienvenidos. Soy Eira, la única guía de esta tierra helada.",
						"vietnamese": "Chào mừng. Tôi là Eira, người hướng dẫn duy nhất của vùng đất băng giá này.",
						"thai": "ยินดีต้อนรับ ฉันคือไอร่า ผู้นำทางเพียงคนเดียวในดินแดนน้ำแข็งแห่งนี้",
						"hindi": "स्वागत है। मैं ऐरा हूँ, इस जमी हुई भूमि की एकमात्र मार्गदर्शक।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…분위기가 이상하네.",
						"english": "...The atmosphere is strange.",
						"japanese": "…雰囲気がおかしいね。",
						"chinese": "……气氛有些奇怪。",
						"french": "...L'ambiance est étrange.",
						"spanish": "...El ambiente es extraño.",
						"vietnamese": "...Không khí thật kỳ lạ.",
						"thai": "...บรรยากาศแปลกๆ",
						"hindi": "...माहौल अजीब है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "빙하가 기억을 삼키는 곳이죠. 이제 저를 따라 깊은 곳으로.",
						"english": "This is where glaciers devour memories. Now, follow me into the depths.",
						"japanese": "ここは氷河が記憶を飲み込む場所です。さあ、私について深淵へ。",
						"chinese": "这里是冰川吞噬记忆之地。现在，随我深入。",
						"french": "C'est là que les glaciers dévorent les souvenirs. Maintenant, suivez-moi dans les profondeurs.",
						"spanish": "Aquí es donde los glaciares devoran recuerdos. Ahora, sígueme a las profundidades.",
						"vietnamese": "Đây là nơi băng hà nuốt chửng ký ức. Giờ thì, hãy theo tôi vào sâu thẳm.",
						"thai": "ที่นี่คือที่ที่ธารน้ำแข็งกลืนกินความทรงจำ ตอนนี้ ตามฉันมาสู่ความลึก",
						"hindi": "यह वह जगह है जहाँ ग्लेशियर यादों को निगल जाते हैं। अब, मेरे पीछे गहराई में आओ।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "여기가 고대 빙하 거울의 잔해입니다.",
						"english": "This is the remains of the ancient glacial mirror.",
						"japanese": "ここが古代の氷河の鏡の残骸です。",
						"chinese": "这里是古代冰川之镜的残骸。",
						"french": "Voici les vestiges de l'ancien miroir glaciaire.",
						"spanish": "Estos son los restos del antiguo espejo glacial.",
						"vietnamese": "Đây là tàn tích của gương băng hà cổ đại.",
						"thai": "นี่คือซากปรักหักพังของกระจกธารน้ำแข็งโบราณ",
						"hindi": "यह प्राचीन ग्लेशियर दर्पण के अवशेष हैं।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "거울? 거울 치고는 너무 차가운데.",
						"english": "A mirror? It's too cold for a mirror.",
						"japanese": "鏡？鏡にしては冷たすぎる。",
						"chinese": "镜子？作为镜子来说也太冷了吧。",
						"french": "Un miroir ? C'est trop froid pour un miroir.",
						"spanish": "¿Un espejo? Es demasiado frío para ser un espejo.",
						"vietnamese": "Một tấm gương? Nó quá lạnh so với một tấm gương.",
						"thai": "กระจกเหรอ? มันเย็นเกินกว่าจะเป็นกระจกนะ",
						"hindi": "एक दर्पण? दर्पण के लिए यह बहुत ठंडा है।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "누군가 여기서 뭘 찾으려는 것 같기도 하고….",
						"english": "Someone seems to be looking for something here...",
						"japanese": "誰かがここで何かを探しているようだ…",
						"chinese": "好像有人在这里找什么东西...",
						"french": "On dirait que quelqu'un cherchait quelque chose ici...",
						"spanish": "Parece que alguien estaba buscando algo aquí...",
						"vietnamese": "Có vẻ ai đó đang tìm kiếm gì đó ở đây...",
						"thai": "ดูเหมือนใครบางคนกำลังมองหาอะไรบางอย่างที่นี่...",
						"hindi": "लगता है कोई यहाँ कुछ ढूँढ रहा है..."
					},
					"emotion": "base",
					"speaker": "character_1",
					"type": "speech"
				},
				{
					"content": {
						"korean": "오래된 전설 속 장치죠. 기록에는 이렇게 쓰여 있습니다.",
						"english": "It's a device from an ancient legend. The records state this:",
						"japanese": "古い伝説の装置ですね。記録にはこう書かれています。",
						"chinese": "这是古老传说中的装置。记录上是这样写的：",
						"french": "C'est un dispositif d'une ancienne légende. Les registres indiquent ceci :",
						"spanish": "Es un dispositivo de una antigua leyenda. Los registros dicen esto:",
						"vietnamese": "Đó là một thiết bị từ truyền thuyết cổ xưa. Ghi chép có viết rằng:",
						"thai": "มันคืออุปกรณ์จากตำนานโบราณ บันทึกระบุไว้ว่า:",
						"hindi": "यह एक प्राचीन किंवदंती का उपकरण है। अभिलेखों में यह लिखा है:"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "“…그것을 통해 예언자와 소통하려 했다.”",
						"english": "...They tried to communicate with the prophet through it.",
						"japanese": "...それを通じて預言者と交信しようとした。",
						"chinese": "……他们试图通过它与先知沟通。",
						"french": "...Ils ont essayé de communiquer avec le prophète par son intermédiaire.",
						"spanish": "...Intentaron comunicarse con el profeta a través de él.",
						"vietnamese": "...Họ đã cố gắng giao tiếp với nhà tiên tri thông qua nó.",
						"thai": "...พวกเขาพยายามสื่อสารกับศาสดาพยากรณ์ผ่านมัน",
						"hindi": "...वे उसके माध्यम से पैगंबर से संवाद करने की कोशिश कर रहे थे।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira",
					"type": "direction"
				},
				{
					"content": {
						"korean": "여기, 글씨가 희미하게 새겨져 있어.",
						"english": "Here, words are faintly engraved.",
						"japanese": "ここに、文字が薄く刻まれている。",
						"chinese": "这里，刻着模糊的字迹。",
						"french": "Ici, des mots sont faiblement gravés.",
						"spanish": "Aquí, unas palabras están débilmente grabadas.",
						"vietnamese": "Ở đây, có chữ được khắc mờ.",
						"thai": "ที่นี่ มีตัวอักษรสลักไว้อย่างเลือนลาง",
						"hindi": "यहाँ, शब्द हल्के से उकेरे गए हैं।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…예언은, 저주다?",
						"english": "...Is the prophecy a curse?",
						"japanese": "...予言は、呪いなのか？",
						"chinese": "...预言是诅咒吗？",
						"french": "...La prophétie est-elle une malédiction ?",
						"spanish": "...¿Es la profecía una maldición?",
						"vietnamese": "...Lời tiên tri là một lời nguyền?",
						"thai": "...คำพยากรณ์คือคำสาปงั้นหรือ?",
						"hindi": "...क्या भविष्यवाणी एक अभिशाप है?"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "아, 그거요? 그냥 오래된 미신 같은 겁니다.",
						"english": "Oh, that? It's just an old superstition.",
						"japanese": "ああ、それですか？ただの古い迷信のようなものです。",
						"chinese": "哦，那个啊？那只是个古老的迷信罢了。",
						"french": "Oh, ça ? C'est juste une vieille superstition.",
						"spanish": "Oh, ¿eso? Es solo una vieja superstición.",
						"vietnamese": "Ồ, cái đó à? Nó chỉ là một mê tín cũ thôi.",
						"thai": "โอ้ นั่นเหรอ? มันก็แค่ความเชื่อเก่าๆน่ะ",
						"hindi": "ओह, वह? वह बस एक पुरानी अंधविश्वास है।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "기록에도 늘 ‘예언은 축복인 동시에 저주’라고 했으니까요.",
						"english": "The records always said, 'Prophecy is both a blessing and a curse.'",
						"japanese": "記録にもいつも『予言は祝福であると同時に呪いである』とありましたからね。",
						"chinese": "毕竟记录上总是说，‘预言既是祝福也是诅咒’。",
						"french": "Après tout, les registres disaient toujours : 'La prophétie est à la fois une bénédiction et une malédiction'.",
						"spanish": "Los registros siempre decían: 'La profecía es tanto una bendición como una maldición'.",
						"vietnamese": "Vì ghi chép luôn nói rằng 'Lời tiên tri vừa là phước lành vừa là lời nguyền'.",
						"thai": "เพราะบันทึกมักจะกล่าวว่า 'คำพยากรณ์เป็นทั้งพรและคำสาป'",
						"hindi": "क्योंकि अभिलेखों में हमेशा कहा गया है, 'भविष्यवाणी एक साथ वरदान और अभिशाप दोनों है'।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "…저주라니.",
						"english": "...A curse, then.",
						"japanese": "...呪いだと。",
						"chinese": "...诅咒啊。",
						"french": "...Une malédiction, donc.",
						"spanish": "...Una maldición, entonces.",
						"vietnamese": "...Một lời nguyền.",
						"thai": "...คำสาปงั้นเหรอ",
						"hindi": "...एक अभिशाप, तो।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"speaker": "eira",
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "점점 더 깊이 들어가는 기분이야.",
						"english": "It feels like I'm going deeper and deeper.",
						"japanese": "どんどん深みに嵌っていく気分だ。",
						"chinese": "感觉自己越陷越深了。",
						"french": "J'ai l'impression d'aller de plus en plus profond.",
						"spanish": "Siento que me estoy adentrando cada vez más.",
						"vietnamese": "Tôi cảm thấy mình đang đi sâu hơn nữa.",
						"thai": "รู้สึกเหมือนกำลังจมลึกลงไปเรื่อยๆ",
						"hindi": "लगता है मैं और गहराई में जा रहा हूँ।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "character_2",
					"content": {
						"korean": "왠지… 모든 게 흐릿해지는 것 같아.",
						"english": "Somehow... everything feels blurry.",
						"japanese": "なんだか…全てが曖昧になっていくようだ。",
						"chinese": "不知为何……一切都变得模糊起来。",
						"french": "D'une certaine manière... tout semble flou.",
						"spanish": "De alguna manera... todo se vuelve borroso.",
						"vietnamese": "Không hiểu sao... mọi thứ dường như mờ đi.",
						"thai": "ทำไมไม่รู้... ทุกอย่างดูเลือนลางไปหมด",
						"hindi": "पता नहीं क्यों... सब कुछ धुंधला होता जा रहा है।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "빙하가 사람을 현혹하는 법이죠.",
						"english": "Glaciers have a way of bewitching people.",
						"japanese": "氷河は人を惑わせるものだ。",
						"chinese": "冰川就是这样迷惑人的。",
						"french": "Les glaciers ont cette façon d'ensorceler les gens.",
						"spanish": "Los glaciares tienen su manera de hechizar a la gente.",
						"vietnamese": "Băng hà có cách mê hoặc lòng người.",
						"thai": "ธารน้ำแข็งย่อมมีวิธีล่อลวงผู้คน",
						"hindi": "ग्लेशियर लोगों को मोहित करने का एक तरीका रखते हैं।"
					},
					"emotion": "base",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"content": {
						"korean": "깊이 들어갈수록, 자신에 대해 아는 것도 없어진다고들 합니다.",
						"english": "They say the deeper you go, the less you know about yourself.",
						"japanese": "深く進むほど、己を知ることもなくなると言います。",
						"chinese": "越是深入，就越是迷失自我，人们是这么说的。",
						"french": "On dit que plus on s'enfonce, moins on se connaît soi-même.",
						"spanish": "Dicen que cuanto más profundo vas, menos sabes de ti mismo.",
						"vietnamese": "Người ta nói, càng đi sâu, càng chẳng còn biết gì về bản thân.",
						"thai": "ว่ากันว่ายิ่งลึกเข้าไปเท่าไร ก็ยิ่งไม่รู้จักตัวเองมากขึ้นเท่านั้น",
						"hindi": "कहते हैं कि जितना गहरा जाओगे, उतना ही अपने बारे में कम जानोगे।"
					},
					"emotion": "base",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…허무하다는 뜻인가.",
						"english": "So... it means futility?",
						"japanese": "…虚無だという意味か。",
						"chinese": "……意思是虚无吗？",
						"french": "...Ça signifie le néant ?",
						"spanish": "...¿Significa futilidad?",
						"vietnamese": "...Ý là, hư vô sao?",
						"thai": "...หมายถึงความว่างเปล่ารึ?",
						"hindi": "...तो, इसका मतलब व्यर्थता है?"
					},
					"emotion": "base"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "거대한 빙하의 힘에 압도당했다.",
						"english": "Overwhelmed by the immense power of the glacier.",
						"japanese": "「巨大な氷河の力に圧倒された。」",
						"chinese": "“被巨大冰川的力量压倒了。”",
						"french": "Submergé par la puissance immense du glacier.",
						"spanish": "Abrumado por el inmenso poder del glaciar.",
						"vietnamese": "Bị áp đảo bởi sức mạnh khổng lồ của sông băng.",
						"thai": "ถูกครอบงำด้วยพลังอันมหาศาลของธารน้ำแข็ง",
						"hindi": "ग्लेशियर की विशाल शक्ति से अभिभूत।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "미련한 것들. 너희의 노력은 모두 허무하다.",
						"english": "Foolish beings. All your efforts are in vain.",
						"japanese": "「愚かな者たちめ。お前たちの努力はすべて無駄だ。」",
						"chinese": "“愚蠢的东西。你们所有的努力都白费了。”",
						"french": "Créatures insensées. Tous vos efforts sont vains.",
						"spanish": "Criaturas necias. Todos vuestros esfuerzos son en vano.",
						"vietnamese": "Những kẻ ngu ngốc. Mọi nỗ lực của các ngươi đều vô ích.",
						"thai": "เจ้าพวกโง่เขลา ความพยายามทั้งหมดของพวกเจ้าไร้ค่า",
						"hindi": "मूर्ख प्राणी। तुम्हारे सभी प्रयास व्यर्थ हैं।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…아직 끝나지 않았어. 우린 포기하지 않아!",
						"english": "...It's not over yet. We won't give up!",
						"japanese": "「…まだ終わってない。私たちは諦めない！」",
						"chinese": "“……还没结束。我们不会放弃！”",
						"french": "...Ce n'est pas encore fini. Nous n'abandonnerons pas !",
						"spanish": "...Aún no ha terminado. ¡No nos rendiremos!",
						"vietnamese": "...Vẫn chưa kết thúc. Chúng ta sẽ không bỏ cuộc!",
						"thai": "...ยังไม่จบ เราจะไม่ยอมแพ้!",
						"hindi": "...यह अभी खत्म नहीं हुआ है। हम हार नहीं मानेंगे!"
					},
					"emotion": "angry"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "크흐… 이겨봐야… 아무것도 달라지지 않아….",
						"english": "Hmph... Even if you win... nothing will change...",
						"japanese": "くっ…勝ったところで…何も変わらない…。",
						"chinese": "哼……就算赢了……也什么都改变不了……。",
						"french": "Krr... Même si vous gagnez... rien ne changera...",
						"spanish": "Khh... Aunque ganes... nada cambiará...",
						"vietnamese": "Khụ... Dù thắng... cũng chẳng thay đổi được gì...",
						"thai": "หึ... ต่อให้ชนะไป... ก็ไม่มีอะไรเปลี่ยนแปลง...",
						"hindi": "क्रूर... जीत भी जाओ... कुछ भी नहीं बदलेगा..."
					},
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "예언은… 저주다….",
						"english": "The prophecy... is a curse...",
						"japanese": "予言は…呪いだ…。",
						"chinese": "预言是……诅咒……。",
						"french": "La prophétie... est une malédiction...",
						"spanish": "La profecía... es una maldición...",
						"vietnamese": "Lời tiên tri... là một lời nguyền...",
						"thai": "คำทำนาย... คือคำสาป...",
						"hindi": "भविष्यवाणी... एक अभिशाप है..."
					},
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…끝난 건가.",
						"english": "...Is it over?",
						"japanese": "「…終わったのか。」",
						"chinese": "“……结束了吗？”",
						"french": "...C'est fini ?",
						"spanish": "¿...Se acabó?",
						"vietnamese": "...Kết thúc rồi sao?",
						"thai": "...จบแล้วหรือ?",
						"hindi": "...क्या यह खत्म हो गया?"
					},
					"emotion": "base"
				},
				{
					"action": "enter",
					"speaker": "eira",
					"type": "direction",
					"spot": [
						4,
						2
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "고대 룬의 속삭임이 멈췄습니다. 그러나 기록은 계속됩니다.",
						"english": "The whispers of the ancient runes have ceased. Yet, the records continue.",
						"japanese": "「古代のルーンのささやきは止んだ。だが、記録は続く。」",
						"chinese": "“古代符文的低语停止了。然而，记录仍在继续。”",
						"french": "Les murmures des runes antiques ont cessé. Pourtant, les annales continuent.",
						"spanish": "Los susurros de las runas antiguas han cesado. Sin embargo, los registros continúan.",
						"vietnamese": "Lời thì thầm của các rune cổ đại đã ngừng. Tuy nhiên, ghi chép vẫn tiếp diễn.",
						"thai": "เสียงกระซิบของรูนโบราณได้หยุดลงแล้ว ทว่าบันทึกยังคงดำเนินต่อไป",
						"hindi": "प्राचीन रुन की फुसफुसाहट रुक गई है। फिर भी, अभिलेख जारी हैं।"
					},
					"emotion": "base",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"content": {
						"korean": "빙하 깊숙한 곳, 환영과 왜곡된 인식이 탐험대를 기다렸다.",
						"english": "Deep within the glacier, illusions and distorted perceptions awaited the expedition.",
						"japanese": "「氷河の奥深く、幻影と歪んだ認識が探検隊を待ち受けていた。」",
						"chinese": "“在冰川深处，幻象和扭曲的感知等待着探险队。”",
						"french": "Au plus profond du glacier, illusions et perceptions déformées attendaient l'expédition.",
						"spanish": "En lo profundo del glaciar, ilusiones y percepciones distorsionadas aguardaban a la expedición.",
						"vietnamese": "Sâu trong sông băng, ảo ảnh và nhận thức méo mó chờ đợi đoàn thám hiểm.",
						"thai": "ลึกเข้าไปในธารน้ำแข็ง ภาพลวงตาและการรับรู้ที่บิดเบือนรอคอยคณะสำรวจอยู่",
						"hindi": "ग्लेशियर की गहराई में, भ्रम और विकृत धारणाएँ अभियान का इंतजार कर रही थीं।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "빙하의 심연. 거대한 그림자가 앞을 가로막았다.",
						"english": "Abyss of the glacier. A colossal shadow blocked the way.",
						"japanese": "氷河の深淵。巨大な影が道を塞いだ。",
						"chinese": "冰川深渊。一道巨大的黑影挡住了去路。",
						"french": "Abysse du glacier. Une ombre colossale barra le chemin.",
						"spanish": "El abismo del glaciar. Una sombra colosal bloqueó el camino.",
						"vietnamese": "Vực sâu băng hà. Một cái bóng khổng lồ chắn lối.",
						"thai": "ห้วงเหวลึกแห่งธารน้ำแข็ง เงาขนาดมหึมาขวางทางอยู่เบื้องหน้า",
						"hindi": "ग्लेशियर का अथाह कुंड। एक विशाल छाया ने रास्ता रोक दिया।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…침입자들. 감히 이곳을 더럽히는가.",
						"english": "Intruders. How dare you defile this place?",
						"japanese": "…侵入者ども。よくもここを汚したな。",
						"chinese": "……入侵者。竟敢玷污此处？",
						"french": "...Intrus. Comment osez-vous souiller ce lieu ?",
						"spanish": "...Intrusos. ¿Cómo osáis profanar este lugar?",
						"vietnamese": "...Lũ xâm nhập. Dám vấy bẩn nơi này sao?",
						"thai": "...พวกผู้บุกรุก บังอาจมาแปดเปื้อนที่นี่งั้นรึ?",
						"hindi": "घुसपैठिए। तुम्हारी हिम्मत कैसे हुई इस जगह को अपवित्र करने की?"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "너희는 길을 잃었다. 허무함만이 너희를 기다릴 뿐.",
						"english": "You are lost. Only futility awaits you.",
						"japanese": "お前たちは道に迷った。待つのは虚無だけだ。",
						"chinese": "你们迷失了方向。等待你们的，只有虚无。",
						"french": "Vous êtes perdus. Seule la futilité vous attend.",
						"spanish": "Estáis perdidos. Solo la futilidad os espera.",
						"vietnamese": "Các ngươi đã lạc lối. Chỉ có hư vô đang chờ đợi các ngươi.",
						"thai": "พวกเจ้าหลงทางแล้ว มีแต่ความว่างเปล่าเท่านั้นที่รอพวกเจ้าอยู่",
						"hindi": "तुम रास्ता भटक गए हो। तुम्हें केवल व्यर्थता ही मिलेगी।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "비켜! 우린 진실을 찾으러 왔어.",
						"english": "Out of the way! We came for the truth.",
						"japanese": "退け！ 我々は真実を探しに来た。",
						"chinese": "让开！我们是为了寻找真相而来！",
						"french": "Dégage ! Nous sommes venus chercher la vérité.",
						"spanish": "¡Aparta! Hemos venido a buscar la verdad.",
						"vietnamese": "Tránh ra! Chúng tôi đến đây để tìm kiếm sự thật.",
						"thai": "ถอยไป! พวกเรามาเพื่อตามหาความจริง",
						"hindi": "हट जाओ! हम सच की तलाश में आए हैं।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "eira",
					"duration_ms": 500,
					"spot": [
						4,
						2
					]
				},
				{
					"content": {
						"korean": "오래된 수호자군요. 저자의 룬을 해독해야 합니다.",
						"english": "An ancient guardian. We must decipher its runes.",
						"japanese": "古き守護者か。奴のルーンを解読せねば。",
						"chinese": "真是个古老的守护者。我们必须解读它的符文。",
						"french": "Un ancien gardien. Nous devons déchiffrer ses runes.",
						"spanish": "Un antiguo guardián. Debemos descifrar sus runas.",
						"vietnamese": "Một người bảo vệ cổ xưa. Chúng ta phải giải mã rune của hắn.",
						"thai": "ผู้พิทักษ์โบราณสินะ เราต้องถอดรหัสรูนของมัน",
						"hindi": "एक प्राचीन संरक्षक। हमें इसके रन (रून्स) को समझना होगा।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "eira"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"영원히 얼어붙은 대지, 빙하 속에서 속삭임이 메아리쳤다.",
			"‘와이어드 바운드’의 예언을 좇는 자들, 혹은 미친 자들.",
			"폐쇄된 마을은 잊힌 전설에 갇혀, 진실을 외면한 채였다.",
			"하지만 곧, 빙하 깊숙한 곳에서 모든 것이 드러나리라."
		],
		"english": [
			"In the eternally frozen land, a whisper echoed within the glaciers.",
			"Those who chase the prophecy of 'Wired Bound', or the mad.",
			"The isolated village, trapped in a forgotten legend, turned its back on the truth.",
			"But soon, deep within the glaciers, all will be revealed."
		],
		"japanese": [
			"永遠に凍りついた大地、氷河の中で囁きが木霊した。",
			"『ワイヤードバウンド』の予言を追う者たち、あるいは狂った者たち。",
			"閉鎖された村は忘れ去られた伝説に囚われ、真実から目を背けていた。",
			"しかし間もなく、氷河の奥深くで、すべてが明らかになるだろう。"
		],
		"chinese": [
			"在永冻之地，冰川中回荡着低语。",
			"追逐‘连线束缚’预言之人，抑或是疯子。",
			"封闭的村庄被遗忘的传说所困，对真相视而不见。",
			"但很快，冰川深处，一切都将揭晓。"
		],
		"french": [
			"Dans la terre éternellement gelée, un murmure résonnait au sein des glaciers.",
			"Ceux qui poursuivent la prophétie du 'Wired Bound', ou les fous.",
			"Le village isolé, piégé dans une légende oubliée, tournait le dos à la vérité.",
			"Mais bientôt, au plus profond des glaciers, tout sera révélé."
		],
		"spanish": [
			"En la tierra eternamente congelada, un susurro resonó entre los glaciares.",
			"Aquellos que persiguen la profecía de 'Wired Bound', o los locos.",
			"El pueblo aislado, atrapado en una leyenda olvidada, dio la espalda a la verdad.",
			"Pero pronto, en lo más profundo de los glaciares, todo será revelado."
		],
		"vietnamese": [
			"Trên vùng đất băng giá vĩnh cửu, một tiếng thì thầm vang vọng trong băng hà.",
			"Những kẻ theo đuổi lời tiên tri 'Wired Bound', hoặc những kẻ điên rồ.",
			"Ngôi làng bị cô lập, mắc kẹt trong một truyền thuyết bị lãng quên, đã quay lưng lại với sự thật.",
			"Nhưng sớm thôi, sâu thẳm trong băng hà, mọi thứ sẽ được hé lộ."
		],
		"thai": [
			"ในดินแดนที่เยือกแข็งชั่วนิรันดร์ เสียงกระซิบสะท้อนก้องอยู่ในธารน้ำแข็ง",
			"ผู้ที่ตามล่าคำทำนายของ 'Wired Bound' หรือผู้ที่บ้าคลั่ง",
			"หมู่บ้านที่ถูกปิดตาย จมอยู่ในตำนานที่ถูกลืม และหันหลังให้กับความจริง",
			"แต่ในไม่ช้า ลึกเข้าไปในธารน้ำแข็ง ทุกสิ่งจะถูกเปิดเผย"
		],
		"hindi": [
			"शाश्वत रूप से जमी हुई भूमि में, ग्लेशियरों के भीतर एक फुसफुसाहट गूँज उठी।",
			"'वायर्ड बाउंड' की भविष्यवाणी का पीछा करने वाले, या पागल।",
			"बंद गाँव, एक भूली हुई किंवदंती में फँसा, सच्चाई से मुँह मोड़ लिया था।",
			"लेकिन जल्द ही, ग्लेशियरों की गहराई में, सब कुछ उजागर हो जाएगा।"
		]
	}
} as const;
