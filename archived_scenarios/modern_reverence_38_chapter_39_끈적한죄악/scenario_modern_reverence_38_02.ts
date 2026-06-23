export const scenario_modern_reverence_38_02 = {
	"scenario_id": "modern_reverence_38_02",
	"order": 2,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"kai": {
			"id": "mon_d7f29313-b8fb-49da-9a1a-01df5d13866e",
			"name": {
				"korean": "카이",
				"english": "Kai",
				"japanese": "カイ",
				"chinese": "凯",
				"french": "Kai",
				"spanish": "Kai",
				"vietnamese": "Kai",
				"thai": "ไค",
				"hindi": "काई"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f10d9184-4155-4bb9-de2d-db61463f7c00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/e41f8e03-08c9-4a4f-6f72-fa9342876f00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"리버런스, 그 이름 아래 숨겨진 진실.",
			"전 연구원 카이는 과거의 죄책감에 시달리고 있었다.",
			"벽 속에서 들려오는 비명은 누구의 것인가.",
			"진실에 다가설수록 공포는 더욱 커진다."
		],
		"english": [
			"Reverence, the truth hidden beneath that name.",
			"Former researcher Kai was tormented by past guilt.",
			"Whose screams are those echoing from within the walls?",
			"The closer to the truth, the greater the fear."
		],
		"japanese": [
			"リベレンス、その名の下に隠された真実。",
			"元研究員カイは、過去の罪悪感に苛まれていた。",
			"壁の中から聞こえる悲鳴は誰のものなのか。",
			"真実に近づくほど、恐怖はさらに大きくなる。"
		],
		"chinese": [
			"瑞弗伦斯，其名之下隐藏的真相。",
			"前研究员凯深受过去的罪恶感折磨。",
			"墙壁中传来的尖叫声是谁的？",
			"越接近真相，恐惧越甚。"
		],
		"french": [
			"Reverence, la vérité cachée sous ce nom.",
			"L'ancienne chercheuse Kai était tourmentée par sa culpabilité passée.",
			"À qui appartiennent ces cris venant des murs ?",
			"Plus on s'approche de la vérité, plus la peur grandit."
		],
		"spanish": [
			"Reverence, la verdad oculta bajo ese nombre.",
			"El ex investigador Kai estaba atormentado por la culpa del pasado.",
			"¿De quién son esos gritos que resuenan desde las paredes?",
			"Cuanto más cerca de la verdad, mayor es el miedo."
		],
		"vietnamese": [
			"Reverence, sự thật ẩn giấu dưới cái tên đó.",
			"Cựu nghiên cứu viên Kai bị dằn vặt bởi cảm giác tội lỗi trong quá khứ.",
			"Tiếng thét vọng ra từ trong tường là của ai?",
			"Càng đến gần sự thật, nỗi sợ hãi càng lớn."
		],
		"thai": [
			"รีเวอเรนซ์ ความจริงที่ซ่อนอยู่ภายใต้ชื่อนั้น",
			"ไค อดีตนักวิจัย ถูกทรมานด้วยความรู้สึกผิดในอดีต",
			"เสียงกรีดร้องที่ดังออกมาจากกำแพงนั้นเป็นของใคร?",
			"ยิ่งเข้าใกล้ความจริง ความกลัวก็ยิ่งเพิ่มขึ้น"
		],
		"hindi": [
			"रिवरेंस, उस नाम के नीचे छिपा सच।",
			"पूर्व शोधकर्ता काई अतीत के अपराधबोध से ग्रसित था।",
			"दीवारों से आती चीखें किसकी हैं?",
			"जैसे-जैसे सच के करीब आते हैं, डर और बढ़ता जाता है।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "어둡고 습한 지하 통로. 마주한 카이의 눈은 공포에 질려 있었다.",
						"english": "A dark, damp underground passage. Kai's eyes, meeting them, were filled with terror.",
						"japanese": "暗く湿った地下通路。向き合ったカイの目は恐怖に染まっていた。",
						"chinese": "阴暗潮湿的地下通道。凯的眼神充满恐惧。",
						"french": "Un passage souterrain sombre et humide. Les yeux de Kai, face à cela, étaient remplis de terreur.",
						"spanish": "Un pasaje subterráneo oscuro y húmedo. Los ojos de Kai, al encontrarse, estaban llenos de terror.",
						"vietnamese": "Một lối đi ngầm tối tăm, ẩm ướt. Đôi mắt Kai, khi đối mặt, ngập tràn nỗi sợ hãi.",
						"thai": "ทางเดินใต้ดินที่มืดและชื้นแฉะ ดวงตาของไคที่เผชิญหน้าเต็มไปด้วยความหวาดกลัว",
						"hindi": "एक अंधेरा, नम भूमिगत मार्ग। सामने काई की आँखें डर से भरी थीं।"
					}
				},
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "kai"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…왔구나. 하지만 더 이상은 위험해.",
						"english": "...You're here. But it's too dangerous now.",
						"japanese": "…来たな。だが、これ以上は危険だ。",
						"chinese": "……你来了。但现在太危险了。",
						"french": "...Tu es là. Mais c'est trop dangereux maintenant.",
						"spanish": "...Has venido. Pero ahora es demasiado peligroso.",
						"vietnamese": "...Ngươi đến rồi. Nhưng giờ thì quá nguy hiểm rồi.",
						"thai": "...มาแล้วสินะ แต่ตอนนี้มันอันตรายเกินไป",
						"hindi": "...तुम आ गए। लेकिन अब और ज़्यादा ख़तरनाक है।"
					},
					"speaker": "kai"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "리버런스의 진실을 알고 싶어. 당신만이 말해줄 수 있어.",
						"english": "I want to know the truth of Reverence. Only you can tell me.",
						"japanese": "リベレンスの真実を知りたい。あなただけが教えてくれる。",
						"chinese": "我想知道瑞弗伦斯的真相。只有你能告诉我。",
						"french": "Je veux connaître la vérité sur Reverence. Seul toi peux me la dire.",
						"spanish": "Quiero saber la verdad de Reverence. Solo tú puedes decírmela.",
						"vietnamese": "Tôi muốn biết sự thật về Reverence. Chỉ có ngài mới có thể nói cho tôi biết.",
						"thai": "ฉันอยากรู้ความจริงของรีเวอเรนซ์ มีแค่คุณเท่านั้นที่จะบอกฉันได้",
						"hindi": "मैं रिवरेंस का सच जानना चाहता हूँ। सिर्फ़ तुम ही मुझे बता सकते हो।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "그들은… 사람들을 이용해. 영원한 평화? 전부 거짓이야.",
						"english": "They... use people. Eternal peace? It's all a lie.",
						"japanese": "彼らは…人を利用している。永遠の平和？全て嘘だ。",
						"chinese": "他们……利用人类。永恒的和平？全都是谎言。",
						"french": "Ils... utilisent les gens. La paix éternelle ? Tout est un mensonge.",
						"spanish": "Ellos... usan a la gente. ¿Paz eterna? Todo es una mentira.",
						"vietnamese": "Bọn chúng... lợi dụng con người. Hòa bình vĩnh cửu? Tất cả đều là dối trá.",
						"thai": "พวกเขา...ใช้ผู้คน สันติสุขชั่วนิรันดร์งั้นเหรอ? ทั้งหมดเป็นเรื่องโกหก",
						"hindi": "वे... लोगों का इस्तेमाल करते हैं। शाश्वत शांति? सब झूठ है।"
					},
					"emotion": "angry",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "kai"
				},
				{
					"content": {
						"korean": "내가 했던 연구는… 인간의 정신을 '통합'하는 실험이었어.",
						"english": "The research I conducted was... an experiment to 'integrate' human minds.",
						"japanese": "私が行っていた研究は…人間の精神を「統合」する実験だった。",
						"chinese": "我进行的研究是……一项“整合”人类精神的实验。",
						"french": "La recherche que j'ai menée était... une expérience visant à « intégrer » les esprits humains.",
						"spanish": "La investigación que realicé fue... un experimento para 'integrar' las mentes humanas.",
						"vietnamese": "Nghiên cứu tôi đã thực hiện là... một thí nghiệm nhằm 'tích hợp' tinh thần con người.",
						"thai": "การวิจัยที่ฉันทำคือ... การทดลอง 'รวม' จิตใจมนุษย์",
						"hindi": "मैंने जो शोध किया था वह... मानव मन को 'एकीकृत' करने का प्रयोग था।"
					},
					"speaker": "kai",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "통합? 그게 무슨 의미야?",
						"english": "Integrate? What does that mean?",
						"japanese": "統合？それはどういう意味だ？",
						"chinese": "整合？那是什么意思？",
						"french": "Intégrer ? Qu'est-ce que ça veut dire ?",
						"spanish": "¿Integrar? ¿Qué significa eso?",
						"vietnamese": "Tích hợp? Điều đó có nghĩa là gì?",
						"thai": "รวม? นั่นหมายความว่าอะไร?",
						"hindi": "एकीकृत करना? उसका क्या मतलब है?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "육체를 파괴하고, 정신만을 추출해서… 하나의 거대한 의식에 종속시키는 거지.",
						"english": "Destroy the body, extract the mind... and subjugate it to one giant consciousness.",
						"japanese": "肉体を破壊し、精神だけを抽出して… 一つの巨大な意識に隷属させるんだ。",
						"chinese": "摧毁肉体，只抽取精神… 然后让它隶属于一个巨大的意识。",
						"french": "Détruire le corps, n'extraire que l'esprit... pour le soumettre à une conscience gigantesque.",
						"spanish": "Destruir el cuerpo, extraer solo la mente... y someterla a una conciencia gigante.",
						"vietnamese": "Phá hủy thể xác, chỉ chiết xuất tinh thần... và lệ thuộc hóa nó vào một ý thức khổng lồ.",
						"thai": "ทำลายร่างกาย สกัดจิตวิญญาณออกมา... แล้วผนวกมันเข้ากับจิตสำนึกขนาดยักษ์เดียว",
						"hindi": "शरीर को नष्ट करो, केवल मन को निकालो... और उसे एक विशाल चेतना के अधीन करो."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "말도 안 돼…",
						"english": "That's impossible...",
						"japanese": "ありえない…",
						"chinese": "不可能…",
						"french": "C'est absurde...",
						"spanish": "¡Es imposible!",
						"vietnamese": "Vô lý quá...",
						"thai": "เป็นไปไม่ได้...",
						"hindi": "यह असंभव है..."
					},
					"speaker": "character_1"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						4,
						2
					],
					"type": "direction",
					"speaker": "kai",
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "가끔… 벽 속에서 소리가 들려. 희미하게. 비명처럼.",
						"english": "Sometimes... I hear sounds from inside the walls. Faintly. Like screams.",
						"japanese": "時々… 壁の中から音が聞こえる。かすかに。悲鳴のように。",
						"chinese": "有时… 我能听到墙壁里传来声音。很微弱。像尖叫声。",
						"french": "Parfois... j'entends des bruits venant des murs. Faiblement. Comme des cris.",
						"spanish": "A veces... oigo sonidos desde dentro de las paredes. Débilmente. Como gritos.",
						"vietnamese": "Đôi khi... tôi nghe thấy âm thanh từ bên trong bức tường. Mờ nhạt. Giống như tiếng la hét.",
						"thai": "บางครั้ง... ฉันได้ยินเสียงจากในกำแพง แผ่วเบา... เหมือนเสียงกรีดร้อง",
						"hindi": "कभी-कभी... दीवारों के अंदर से आवाज़ें आती हैं। धीमी सी। चीखों जैसी।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "환청 아니야? 카이, 당신 많이 지쳤어.",
						"english": "Are you hallucinating? Kai, you're exhausted.",
						"japanese": "幻聴じゃないの？ カイ、あなた、かなり疲れてるわ。",
						"chinese": "不是幻听吗？凯，你太累了。",
						"french": "Ce ne sont pas des hallucinations ? Kai, tu es très fatigué.",
						"spanish": "¿No son alucinaciones? Kai, estás muy cansado.",
						"vietnamese": "Không phải là ảo giác sao? Kai, anh đã rất mệt mỏi rồi.",
						"thai": "ไม่ใช่อาการประสาทหลอนเหรอ? ไค คุณเหนื่อยมากแล้วนะ",
						"hindi": "क्या यह मतिभ्रम नहीं है? काई, तुम बहुत थक गए हो।"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "아니. 이건… 수많은 사람들의 고통이야. 내가 갇히게 한…",
						"english": "No. This is... the suffering of countless people. Those I trapped...",
						"japanese": "違う。これは… 数えきれない人々の苦痛だ。私が閉じ込めた…",
						"chinese": "不。这是… 无数人的痛苦。是我把他们困住的…",
						"french": "Non. C'est... la souffrance d'innombrables personnes. Celles que j'ai piégées...",
						"spanish": "No. Esto es... el sufrimiento de innumerables personas. Aquellas que atrapé...",
						"vietnamese": "Không. Đây là... nỗi đau của vô số người. Những người mà tôi đã giam cầm...",
						"thai": "ไม่ใช่ นี่คือ... ความทุกข์ทรมานของผู้คนมากมาย... ที่ฉันกักขังไว้",
						"hindi": "नहीं। यह... अनगिनत लोगों का दर्द है। जिन्हें मैंने फँसाया..."
					},
					"speaker": "kai",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…그 소리가 지금도 들리는 것 같아.",
						"english": "...I feel like I can still hear those sounds now.",
						"japanese": "…あの音が今も聞こえるような気がする。",
						"chinese": "…那些声音现在似乎还在耳边回响。",
						"french": "...J'ai l'impression d'entendre encore ces bruits maintenant.",
						"spanish": "...Siento que todavía puedo escuchar esos sonidos ahora.",
						"vietnamese": "...Tôi cảm thấy như mình vẫn còn nghe thấy những âm thanh đó bây giờ.",
						"thai": "…ฉันยังรู้สึกเหมือนได้ยินเสียงเหล่านั้นอยู่เลย",
						"hindi": "...मुझे लगता है कि मुझे अभी भी वे आवाजें सुनाई दे रही हैं।"
					},
					"speaker": "character_1",
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "kai",
					"duration_ms": 500
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "리버런스는 도시 전체를 하나의 유기체로 만들려는 거야. 사람들을 희생시켜서.",
						"english": "Reverence wants to turn the entire city into a single organism. By sacrificing people.",
						"japanese": "リバレンスは都市全体を一つの有機体にしようとしているんだ。人々を犠牲にして。",
						"chinese": "启示录想把整个城市变成一个有机体。通过牺牲人类。",
						"french": "Reverence veut transformer toute la ville en un seul organisme. En sacrifiant des gens.",
						"spanish": "Reverence quiere convertir toda la ciudad en un único organismo. Sacrificando personas.",
						"vietnamese": "Reverence muốn biến cả thành phố thành một sinh vật duy nhất. Bằng cách hy sinh con người.",
						"thai": "Reverence ต้องการเปลี่ยนทั้งเมืองให้เป็นสิ่งมีชีวิตเดียว โดยการเสียสละผู้คน",
						"hindi": "रिवरेंस पूरे शहर को एक जीव में बदलना चाहता है। लोगों की बलि चढ़ाकर।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "막아야 해. 여기서 멈출 수 없어.",
						"english": "We have to stop them. We can't stop here.",
						"japanese": "止めなければ。ここで止まるわけにはいかない。",
						"chinese": "我们必须阻止他们。不能就此止步。",
						"french": "Il faut les arrêter. On ne peut pas s'arrêter ici.",
						"spanish": "Tenemos que detenerlos. No podemos parar aquí.",
						"vietnamese": "Phải ngăn chặn. Không thể dừng lại ở đây.",
						"thai": "ต้องหยุดให้ได้ เราจะหยุดที่นี่ไม่ได้",
						"hindi": "हमें उन्हें रोकना होगा। हम यहाँ नहीं रुक सकते।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "더 깊이 들어가면… 돌아올 수 없을지도 몰라. 그들은… 이미 괴물이야.",
						"english": "If we go deeper... we might not be able to come back. They... are already monsters.",
						"japanese": "もっと深く入れば… 戻ってこれないかもしれない。彼らは… もう怪物だ。",
						"chinese": "如果再深入… 也许就回不来了。他们… 已经是怪物了。",
						"french": "Si on va plus loin... on pourrait ne plus pouvoir revenir. Ils... sont déjà des monstres.",
						"spanish": "Si vamos más profundo... quizás no podamos regresar. Ellos... ya son monstruos.",
						"vietnamese": "Nếu đi sâu hơn... có thể sẽ không quay lại được. Họ... đã là quái vật rồi.",
						"thai": "ถ้าเข้าไปลึกกว่านี้... อาจจะกลับมาไม่ได้ พวกเขา... กลายเป็นสัตว์ประหลาดไปแล้ว",
						"hindi": "अगर हम और गहरे गए... तो शायद वापस न आ पाएँ। वे... पहले से ही राक्षस हैं।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_1",
					"content": {
						"korean": "괴물이 되든 말든. 진실을 밝힐 거야.",
						"english": "Monster or not. I will reveal the truth.",
						"japanese": "怪物になろうとどうなろうと。真実を明らかにする。",
						"chinese": "无论变成怪物与否。我都会揭露真相。",
						"french": "Monstre ou pas. Je révélerai la vérité.",
						"spanish": "Monstruo o no. Revelaré la verdad.",
						"vietnamese": "Dù có trở thành quái vật hay không. Tôi sẽ tiết lộ sự thật.",
						"thai": "จะเป็นสัตว์ประหลาดหรือไม่ก็ตาม ฉันจะเปิดเผยความจริง",
						"hindi": "राक्षस बनूँ या न बनूँ। मैं सच सामने लाऊँगा।"
					}
				}
			]
		},
		{
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "어리석군… 우리는… 이미… 도시… 그 자체…",
						"english": "Foolish... We are... already... the city... itself...",
						"japanese": "愚か者め… 我々は… すでに… 都市… そのもの…",
						"chinese": "愚蠢… 我们… 已经… 是城市… 本身…",
						"french": "Insensé... Nous sommes... déjà... la ville... elle-même...",
						"spanish": "Necio... Nosotros... ya somos... la ciudad... misma...",
						"vietnamese": "Ngốc nghếch... Chúng ta... đã là... chính thành phố... rồi...",
						"thai": "โง่เขลา... เรา... เป็น... ตัวเมือง... เองแล้ว...",
						"hindi": "मूर्ख... हम... पहले से ही... शहर... ही हैं..."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "끝났어… 하지만…",
						"english": "It's over... But...",
						"japanese": "終わった… しかし…",
						"chinese": "结束了… 但是…",
						"french": "C'est fini... Mais...",
						"spanish": "Se acabó... Pero...",
						"vietnamese": "Kết thúc rồi... Nhưng...",
						"thai": "จบแล้ว... แต่ว่า...",
						"hindi": "यह खत्म हो गया... लेकिन..."
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"duration_ms": 500,
					"speaker": "kai",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "이건 시작에 불과해. 진짜 주모자는… 아직 살아있어.",
						"english": "This is just the beginning. The true mastermind... is still alive.",
						"japanese": "これは始まりに過ぎない。真の首謀者は… まだ生きている。",
						"chinese": "这仅仅是个开始。真正的幕后主使… 仍然活着。",
						"french": "Ce n'est que le début. Le véritable cerveau... est toujours en vie.",
						"spanish": "Esto es solo el principio. El verdadero cerebro... sigue vivo.",
						"vietnamese": "Đây chỉ là khởi đầu. Kẻ chủ mưu thực sự... vẫn còn sống.",
						"thai": "นี่เป็นเพียงจุดเริ่มต้นเท่านั้น ผู้อยู่เบื้องหลังที่แท้จริง... ยังมีชีวิตอยู่",
						"hindi": "यह तो बस शुरुआत है। असली मास्टरमाइंड... अभी भी ज़िंदा है।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "괴물이 사라진 자리에는 기이한 점액만이 남았다. 도시의 비명은 아직 멈추지 않았다.",
						"english": "Only strange slime remained where the monster vanished. The city's screams have not yet ceased.",
						"japanese": "怪物が消えた場所には、奇妙な粘液だけが残った。都市の悲鳴はまだ止まない。",
						"chinese": "怪物消失的地方只剩下奇怪的黏液。城市的尖叫声仍未停止。",
						"french": "Seule une étrange substance visqueuse restait là où le monstre avait disparu. Les cris de la ville n'ont pas encore cessé.",
						"spanish": "Solo una extraña mucosidad quedó donde el monstruo desapareció. Los gritos de la ciudad aún no han cesado.",
						"vietnamese": "Chỉ còn lại chất nhờn kỳ lạ nơi con quái vật biến mất. Tiếng thét của thành phố vẫn chưa ngừng.",
						"thai": "มีเพียงเมือกประหลาดเหลืออยู่ตรงที่สัตว์ประหลาดหายไป เสียงกรีดร้องของเมืองยังคงไม่หยุด",
						"hindi": "जहाँ से राक्षस गायब हुआ, वहाँ केवल अजीबोगरीब चिपचिपा पदार्थ बचा था। शहर की चीखें अभी भी नहीं रुकी हैं।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "어둠 속에서 거대한 그림자가 나타났다. 그 안에서 수많은 목소리가 뒤섞였다.",
						"english": "A colossal shadow emerged from the darkness, countless voices intertwined within it.",
						"japanese": "闇の中から巨大な影が現れた。その中で無数の声が混じり合った。",
						"chinese": "黑暗中出现了一个巨大的身影。无数的声音在其中交织。",
						"french": "Une ombre gigantesque émergea des ténèbres. D'innombrables voix s'y mêlaient.",
						"spanish": "Una sombra colosal apareció en la oscuridad. Innumerables voces se entrelazaban en ella.",
						"vietnamese": "Một bóng đen khổng lồ hiện ra từ bóng tối. Vô số giọng nói hòa quyện vào nhau bên trong.",
						"thai": "เงาขนาดมหึมาปรากฏขึ้นจากความมืด เสียงนับไม่ถ้วนปะปนกันอยู่ภายในนั้น",
						"hindi": "अंधेरे से एक विशालकाय परछाई उभरी। उसके भीतर अनगिनत आवाज़ें आपस में घुल-मिल गईं।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"spot": [
						2,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "kai",
					"type": "direction"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "저게… 그들의 실패작…!",
						"english": "That's... their failure...!",
						"japanese": "あれが… 彼らの失敗作…！",
						"chinese": "那是… 他们的失败品…！",
						"french": "C'est... leur échec...!",
						"spanish": "Eso es... su fracaso...!",
						"vietnamese": "Đó là... thất bại của chúng...!",
						"thai": "นั่นมัน... ความล้มเหลวของพวกมัน...!",
						"hindi": "वो... उनकी विफलता...!"
					},
					"speaker": "kai"
				},
				{
					"content": {
						"korean": "미약한 존재들이여. 이제 '통합'될 시간이다.",
						"english": "Feeble beings. It is time for 'integration'.",
						"japanese": "弱き者たちよ。今こそ「統合」の時だ。",
						"chinese": "弱小的存在们。现在是时候“整合”了。",
						"french": "Êtres faibles. L'heure est à l''intégration'.",
						"spanish": "Seres débiles. Es hora de la 'integración'.",
						"vietnamese": "Hỡi những sinh vật yếu ớt. Đã đến lúc 'hợp nhất'.",
						"thai": "สิ่งมีชีวิตที่อ่อนแอเอ๋ย ได้เวลาแห่งการ 'รวมเป็นหนึ่ง' แล้ว",
						"hindi": "दुर्बल प्राणी। अब 'एक होने' का समय है।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"duration_ms": 400,
					"speaker": "kai",
					"type": "direction",
					"direction": "down",
					"action": "exit"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "닥쳐. 당신들의 잔혹한 실험을 끝내주겠어!",
						"english": "Silence. I will end your cruel experiments!",
						"japanese": "黙れ。お前たちの残酷な実験を終わらせてやる！",
						"chinese": "住口。我将终结你们残酷的实验！",
						"french": "Silence. Je mettrai fin à vos expériences cruelles !",
						"spanish": "Cállate. ¡Pondré fin a vuestros crueles experimentos!",
						"vietnamese": "Câm miệng. Ta sẽ chấm dứt những thí nghiệm tàn nhẫn của các ngươi!",
						"thai": "หุบปาก ฉันจะยุติการทดลองอันโหดร้ายของพวกแกเอง!",
						"hindi": "चुप रहो। मैं तुम्हारे क्रूर प्रयोगों का अंत करूँगा!"
					}
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "너도… '통합'의 일부가 될 뿐…",
						"english": "You too... will merely become a part of 'integration'...",
						"japanese": "お前も… 「統合」の一部となるだけ…",
						"chinese": "你也… 只会成为“整合”的一部分…",
						"french": "Toi aussi... tu ne feras que devenir une partie de l''intégration'...",
						"spanish": "Tú también... solo te convertirás en parte de la 'integración'...",
						"vietnamese": "Ngươi cũng... sẽ chỉ trở thành một phần của 'hợp nhất'...",
						"thai": "แกก็จะ... เป็นแค่ส่วนหนึ่งของการ 'รวมเป็นหนึ่ง' เท่านั้น...",
						"hindi": "तुम भी... 'एक होने' का सिर्फ एक हिस्सा बन जाओगे..."
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "아직… 끝나지 않았어…!",
						"english": "It's not... over yet...!",
						"japanese": "まだ… 終わってない…！",
						"chinese": "还没… 结束…！",
						"french": "Ce n'est pas... encore fini...!",
						"spanish": "Aún... no ha terminado...!",
						"vietnamese": "Vẫn chưa... kết thúc đâu...!",
						"thai": "ยังไม่... จบซะทีเดียว...!",
						"hindi": "अभी... खत्म नहीं हुआ...!"
					},
					"emotion": "angry",
					"type": "speech"
				}
			]
		}
	]
} as const;
