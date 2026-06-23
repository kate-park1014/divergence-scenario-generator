export const scenario_forest_phosphorlament_16_01 = {
	"scenario_id": "forest_phosphorlament_16_01",
	"order": 1,
	"act": "intro",
	"theme": "forest",
	"actors": {
		"briar": {
			"id": "mon_21f92820-190e-4d08-a75c-5d2c0b6d0a6b",
			"name": {
				"korean": "브라이어",
				"english": "Briar",
				"japanese": "ブライア",
				"chinese": "布莱尔",
				"french": "Briar",
				"spanish": "Briar",
				"vietnamese": "Briar",
				"thai": "ไบรอา",
				"hindi": "ब्रायर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/41fb431e-57e0-45e0-dde6-1a1f02c01200/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/dd89dff7-88ed-4444-28d8-5aaa85bd4e00/public"
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
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "안개가 자욱한 고대 숲 입구. 기이하게 뒤틀린 나무들이 방문자를 맞이한다.",
						"english": "The misty entrance to an ancient forest. Bizarrely twisted trees greet visitors.",
						"japanese": "霧深い古代の森の入り口。奇妙にねじれた木々が訪問者を迎える。",
						"chinese": "迷雾弥漫的古老森林入口。奇形怪状的树木迎接访客。",
						"french": "L'entrée brumeuse d'une forêt ancienne. Des arbres étrangement tordus accueillent les visiteurs.",
						"spanish": "La entrada brumosa a un bosque antiguo. Árboles extrañamente retorcidos dan la bienvenida a los visitantes.",
						"vietnamese": "Lối vào khu rừng cổ đại đầy sương mù. Những cái cây xoắn vặn kỳ lạ chào đón du khách.",
						"thai": "ทางเข้าป่าโบราณที่ปกคลุมด้วยหมอก ต้นไม้ที่บิดเบี้ยวแปลกประหลาดต้อนรับผู้มาเยือน",
						"hindi": "एक प्राचीन वन का धुंधला प्रवेश द्वार। विचित्र रूप से मुड़े हुए पेड़ आगंतुकों का स्वागत करते हैं।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "여기가… 그 숲인가.",
						"english": "Is this... that forest?",
						"japanese": "ここが… あの森か。",
						"chinese": "这里是……那片森林吗？",
						"french": "C'est ici... cette forêt ?",
						"spanish": "¿Es este... ese bosque?",
						"vietnamese": "Đây là... khu rừng đó sao.",
						"thai": "ที่นี่... คือป่าแห่งนั้นหรือ",
						"hindi": "क्या यह... वही वन है?"
					},
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						3
					],
					"speaker": "briar",
					"action": "enter"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "어서 와. 여기까지 찾아올 줄은 몰랐네.",
						"english": "Welcome. I didn't expect you to find your way here.",
						"japanese": "ようこそ。ここまでたどり着くとはね。",
						"chinese": "欢迎。没想到你能找到这里。",
						"french": "Bienvenue. Je ne m'attendais pas à ce que tu arrives jusqu'ici.",
						"spanish": "Bienvenido. No esperaba que llegaras hasta aquí.",
						"vietnamese": "Chào mừng. Tôi không ngờ bạn lại tìm được đến đây.",
						"thai": "ยินดีต้อนรับ ไม่คิดเลยว่าจะหาทางมาถึงที่นี่ได้",
						"hindi": "स्वागत है। मुझे उम्मीद नहीं थी कि तुम यहाँ तक पहुँच पाओगे।"
					},
					"speaker": "briar"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "당신은?",
						"english": "And you?",
						"japanese": "あなたは？",
						"chinese": "你是？",
						"french": "Et vous ?",
						"spanish": "¿Y tú?",
						"vietnamese": "Bạn là ai?",
						"thai": "ท่านคือ?",
						"hindi": "और तुम?"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "브라이어라고 해. 이 숲은 위험해. '영혼의 나무' 소문 때문에 온 거라면… 돌아가.",
						"english": "I'm Briar. This forest is dangerous. If you're here because of the 'Soul Tree' rumors... turn back.",
						"japanese": "ブライアだ。この森は危険だ。『魂の木』の噂で来たのなら… 戻れ。",
						"chinese": "我是布莱尔。这片森林很危险。如果你是为“灵魂之树”的传闻而来……那就回去吧。",
						"french": "Je suis Briar. Cette forêt est dangereuse. Si tu es ici à cause des rumeurs sur l'« Arbre des Âmes »... fais demi-tour.",
						"spanish": "Soy Briar. Este bosque es peligroso. Si estás aquí por los rumores del 'Árbol del Alma'... date la vuelta.",
						"vietnamese": "Tôi là Briar. Khu rừng này nguy hiểm lắm. Nếu bạn đến đây vì tin đồn về 'Cây Linh Hồn'... thì hãy quay về đi.",
						"thai": "ฉันชื่อไบรเออร์ ป่าแห่งนี้อันตราย หากเจ้ามาที่นี่เพราะข่าวลือเรื่อง 'ต้นไม้แห่งวิญญาณ'... ก็จงกลับไปซะ",
						"hindi": "मैं ब्रायर हूँ। यह वन खतरनाक है। यदि तुम 'आत्मा के पेड़' की अफवाहों की वजह से यहाँ आए हो... तो वापस लौट जाओ।"
					},
					"speaker": "briar"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "소문이 사실이야? 실종자들이 정말 나무에 홀린 거야?",
						"english": "Are the rumors true? Are the missing really possessed by the trees?",
						"japanese": "噂は本当なの？行方不明者たちは本当に木々に魅入られたの？",
						"chinese": "传闻是真的吗？失踪者们真的被树木迷惑了吗？",
						"french": "Les rumeurs sont-elles vraies ? Les disparus sont-ils vraiment possédés par les arbres ?",
						"spanish": "¿Son ciertos los rumores? ¿Están los desaparecidos realmente poseídos por los árboles?",
						"vietnamese": "Tin đồn là thật sao? Những người mất tích có thật sự bị cây cối mê hoặc?",
						"thai": "ข่าวลือเป็นจริงหรือ? ผู้ที่หายไปถูกต้นไม้เข้าสิงจริงหรือ?",
						"hindi": "क्या अफवाहें सच हैं? क्या लापता लोग सच में पेड़ों के वश में हो गए हैं?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아무도 돌아오지 않았어. 숲은… 모든 것을 집어삼키는 곳이야.",
						"english": "No one has returned. The forest... it devours everything.",
						"japanese": "誰も戻ってこなかった。森は…すべてを飲み込む場所だ。",
						"chinese": "没有人回来。森林……它吞噬一切。",
						"french": "Personne n'est revenu. La forêt... elle dévore tout.",
						"spanish": "Nadie ha regresado. El bosque... lo devora todo.",
						"vietnamese": "Không ai quay trở lại. Rừng... là nơi nuốt chửng mọi thứ.",
						"thai": "ไม่มีใครกลับมา ป่า... มันกลืนกินทุกสิ่ง",
						"hindi": "कोई वापस नहीं आया। जंगल... सब कुछ निगल जाता है।"
					},
					"speaker": "briar",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "briar",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "숲은 아름답지만, 그 아름다움 뒤엔 음산한 기운이 숨어있어. 느껴지지 않아?",
						"english": "The forest is beautiful, yet a sinister aura hides behind its beauty. Don't you feel it?",
						"japanese": "森は美しいけれど、その美しさの裏には不気味な気配が潜んでいる。感じない？",
						"chinese": "森林很美，但它的美丽背后隐藏着一股阴森的气息。你没感觉到吗？",
						"french": "La forêt est belle, mais une aura sinistre se cache derrière sa beauté. Ne le sens-tu pas ?",
						"spanish": "El bosque es hermoso, pero una aura siniestra se esconde tras su belleza. ¿No la sientes?",
						"vietnamese": "Khu rừng thật đẹp, nhưng đằng sau vẻ đẹp đó ẩn chứa một luồng khí u ám. Cậu không cảm thấy sao?",
						"thai": "ป่าสวยงาม แต่เบื้องหลังความงามนั้นซ่อนเร้นบรรยากาศที่น่าขนลุกไว้ คุณไม่รู้สึกเหรอ?",
						"hindi": "जंगल सुंदर है, पर इसकी सुंदरता के पीछे एक मनहूस आभा छिपी है। क्या तुम्हें महसूस नहीं होता?"
					},
					"speaker": "briar",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "뭔가… 이끌리는 듯한 느낌이 들어.",
						"english": "Something... feels like it's drawing me in.",
						"japanese": "何かに…引き寄せられるような気がする。",
						"chinese": "有什么……似乎在吸引着我。",
						"french": "Quelque chose... me semble m'attirer.",
						"spanish": "Algo... parece estar atrayéndome.",
						"vietnamese": "Có gì đó... như đang cuốn hút tôi.",
						"thai": "บางสิ่ง... รู้สึกเหมือนถูกดึงดูดเข้าไป",
						"hindi": "कुछ... मुझे अपनी ओर खींच रहा है।"
					}
				},
				{
					"speaker": "briar",
					"type": "speech",
					"content": {
						"korean": "숲 속 깊이 들어가면 신비한 빛이 있다고들 해. 길을 잃은 자들을 인도하는 빛.",
						"english": "They say deep within the forest, there's a mysterious light. A light that guides the lost.",
						"japanese": "森の奥深くには、神秘的な光があるという。道に迷った者たちを導く光が。",
						"chinese": "他们说森林深处有神秘的光。一道指引迷失者的光。",
						"french": "On dit qu'au plus profond de la forêt, il y a une lumière mystérieuse. Une lumière qui guide les égarés.",
						"spanish": "Dicen que en lo profundo del bosque, hay una luz misteriosa. Una luz que guía a los perdidos.",
						"vietnamese": "Người ta nói sâu trong rừng có một ánh sáng huyền bí. Một ánh sáng dẫn lối cho những người lạc đường.",
						"thai": "พวกเขาว่ากันว่าลึกเข้าไปในป่า มีแสงลึกลับอยู่ แสงที่นำทางผู้หลงทาง",
						"hindi": "वे कहते हैं कि जंगल की गहराई में एक रहस्यमय रोशनी है। एक रोशनी जो भटके हुओं को राह दिखाती है।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "그 빛을 따라가면… 구원을 찾을 수 있겠지.",
						"english": "If we follow that light... perhaps we can find salvation.",
						"japanese": "その光を追えば…救いを見つけられるだろう。",
						"chinese": "如果追随那道光……也许就能找到救赎。",
						"french": "Si nous suivons cette lumière... peut-être trouverons-nous le salut.",
						"spanish": "Si seguimos esa luz... quizás encontremos la salvación.",
						"vietnamese": "Nếu chúng ta đi theo ánh sáng đó... có lẽ chúng ta sẽ tìm thấy sự cứu rỗi.",
						"thai": "ถ้าเราตามแสงนั้นไป... บางทีเราอาจพบความรอด",
						"hindi": "अगर हम उस रोशनी का पीछा करें... तो शायद हमें मुक्ति मिल जाए।"
					}
				},
				{
					"emotion": "sad",
					"speaker": "briar",
					"type": "speech",
					"content": {
						"korean": "…돌아온 자는 없어. 빛은… 언제나 유혹적이지.",
						"english": "...No one has returned. The light... it's always tempting.",
						"japanese": "…誰も戻ってこなかった。光は…常に魅力的だ。",
						"chinese": "……没有人回来。那光……总是那么诱人。",
						"french": "...Personne n'est revenu. La lumière... est toujours tentante.",
						"spanish": "...Nadie ha regresado. La luz... siempre es tentadora.",
						"vietnamese": "...Không ai quay lại. Ánh sáng... luôn cám dỗ.",
						"thai": "...ไม่มีใครกลับมา แสงสว่าง... มันยั่วยวนเสมอ",
						"hindi": "...कोई वापस नहीं आया। रोशनी... हमेशा लुभावनी होती है।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "briar",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "briar",
					"type": "speech",
					"content": {
						"korean": "숲의 노래가 들려? 달콤한 속삭임 같지만… 때론 고통스러운 절규를 품고 있지.",
						"english": "Do you hear the forest's song? It sounds like a sweet whisper... but sometimes it holds a painful scream.",
						"japanese": "森の歌が聞こえる？甘い囁きのように聞こえるが…時には苦痛の叫びを宿している。",
						"chinese": "你听到森林的歌声了吗？它听起来像甜美的低语……但有时也带着痛苦的尖叫。",
						"french": "Entends-tu le chant de la forêt ? C'est comme un doux murmure... mais parfois, il contient un cri de douleur.",
						"spanish": "¿Oyes la canción del bosque? Suena como un dulce susurro... pero a veces encierra un grito doloroso.",
						"vietnamese": "Cậu có nghe thấy tiếng hát của rừng không? Nghe như một lời thì thầm ngọt ngào... nhưng đôi khi nó chứa đựng một tiếng hét đau đớn.",
						"thai": "คุณได้ยินเพลงของป่าไหม? ฟังดูเหมือนเสียงกระซิบหวานๆ... แต่บางครั้งมันก็แฝงไว้ด้วยเสียงกรีดร้องที่เจ็บปวด",
						"hindi": "क्या तुम्हें जंगल का गाना सुनाई दे रहा है? यह एक मीठी फुसफुसाहट जैसा लगता है... लेकिन कभी-कभी इसमें एक दर्दनाक चीख छिपी होती है।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…희미하게 들려.",
						"english": "...Faintly.",
						"japanese": "…かすかに聞こえる。",
						"chinese": "……隐约能听到。",
						"french": "...Faiblement.",
						"spanish": "...Débilmente.",
						"vietnamese": "...Nghe lờ mờ.",
						"thai": "...แผ่วเบา",
						"hindi": "...धीमी-धीमी सुनाई दे रही है।"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "그게 이 숲의 진짜 모습이야. 네 가장 깊은 소망을 비추고, 네 영혼을 꿰뚫어 볼 거야.",
						"english": "That's the forest's true nature. It will reflect your deepest desires and pierce your soul.",
						"japanese": "それがこの森の本当の姿だ。お前の最も深い願いを映し出し、お前の魂を貫くだろう。",
						"chinese": "那才是这片森林的真面目。它会映照出你最深处的渴望，并洞察你的灵魂。",
						"french": "C'est la vraie nature de la forêt. Elle reflétera tes désirs les plus profonds et transpercera ton âme.",
						"spanish": "Esa es la verdadera naturaleza del bosque. Reflejará tus deseos más profundos y penetrará tu alma.",
						"vietnamese": "Đó là bản chất thật sự của khu rừng. Nó sẽ phản chiếu những khát vọng sâu thẳm nhất của cậu và xuyên thấu tâm hồn cậu.",
						"thai": "นั่นคือธรรมชาติที่แท้จริงของป่า มันจะสะท้อนความปรารถนาที่ลึกที่สุดของคุณ และเจาะทะลุจิตวิญญาณของคุณ",
						"hindi": "यही इस जंगल का असली रूप है। यह तुम्हारी सबसे गहरी इच्छाओं को दर्शाएगा और तुम्हारी आत्मा को भेद देगा।"
					},
					"speaker": "briar"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "난 진실을 찾을 거야.",
						"english": "I will find the truth.",
						"japanese": "私は真実を見つける。",
						"chinese": "我会找到真相。",
						"french": "Je trouverai la vérité.",
						"spanish": "Encontraré la verdad.",
						"vietnamese": "Tôi sẽ tìm ra sự thật.",
						"thai": "ฉันจะค้นหาความจริง",
						"hindi": "मैं सच खोजूँगा।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "숲이 보여주는 진실이… 네가 원하는 진실일까?",
						"english": "Will the truth the forest reveals… be the truth you desire?",
						"japanese": "森が示す真実が… お前が望む真実か？",
						"chinese": "森林揭示的真相… 会是你想要的真相吗？",
						"french": "La vérité que la forêt révèle… sera-t-elle celle que tu désires ?",
						"spanish": "¿Será la verdad que el bosque revela… la verdad que deseas?",
						"vietnamese": "Liệu sự thật khu rừng tiết lộ… có phải là sự thật ngươi mong muốn?",
						"thai": "ความจริงที่ป่าเผยออกมา… จะเป็นความจริงที่คุณต้องการหรือไม่?",
						"hindi": "क्या जंगल जो सच दिखाता है… वही सच है जो तुम चाहते हो?"
					},
					"speaker": "briar",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "briar",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"speaker": "briar",
					"type": "speech",
					"content": {
						"korean": "여기까지 왔군. 이제 정말 돌아갈 수 없어. 후회는 없나?",
						"english": "You've come this far. There's no turning back now. No regrets?",
						"japanese": "ここまで来たか。もう引き返せないぞ。後悔はないか？",
						"chinese": "你已走到这里。现在真的无法回头了。没有遗憾吗？",
						"french": "Tu es venu jusqu'ici. Impossible de faire marche arrière. Pas de regrets ?",
						"spanish": "Has llegado hasta aquí. Ya no hay vuelta atrás. ¿No te arrepientes?",
						"vietnamese": "Ngươi đã đến đây rồi. Giờ không thể quay lại được nữa. Không hối tiếc sao?",
						"thai": "เจ้ามาถึงที่นี่แล้ว ไม่มีทางกลับแล้ว ไม่เสียใจรึ?",
						"hindi": "तुम इतनी दूर आ गए। अब वाकई कोई वापसी नहीं है। कोई पछतावा नहीं?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "후회? 없어. 난 원하는 것을 얻을 때까지 멈추지 않아.",
						"english": "Regrets? None. I won't stop until I get what I want.",
						"japanese": "後悔？ない。望むものを手に入れるまで、私は止まらない。",
						"chinese": "遗憾？没有。我不会停下，直到我得到我想要的。",
						"french": "Des regrets ? Aucun. Je ne m'arrêterai pas tant que je n'aurai pas ce que je veux.",
						"spanish": "¿Arrepentimientos? Ninguno. No me detendré hasta conseguir lo que quiero.",
						"vietnamese": "Hối tiếc ư? Không có. Ta sẽ không dừng lại cho đến khi đạt được điều mình muốn.",
						"thai": "เสียใจรึ? ไม่มี ฉันจะไม่หยุดจนกว่าจะได้สิ่งที่ต้องการ",
						"hindi": "पछतावा? नहीं। जब तक मुझे वह नहीं मिल जाता जो मैं चाहता हूँ, मैं नहीं रुकूँगा।"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"speaker": "briar",
					"type": "speech",
					"content": {
						"korean": "이 숲은… 모든 것을 앗아갈 수도 있어. 네 영혼마저.",
						"english": "This forest… could take everything from you. Even your soul.",
						"japanese": "この森は… 全てを奪い去るかもしれない。お前の魂さえも。",
						"chinese": "这片森林… 可能会夺走你的一切。甚至你的灵魂。",
						"french": "Cette forêt… pourrait tout te prendre. Même ton âme.",
						"spanish": "Este bosque… podría quitarte todo. Incluso tu alma.",
						"vietnamese": "Khu rừng này… có thể cướp đi mọi thứ của ngươi. Ngay cả linh hồn ngươi.",
						"thai": "ป่าแห่งนี้… อาจพรากทุกสิ่งไปจากเจ้า แม้แต่จิตวิญญาณของเจ้า",
						"hindi": "यह जंगल… तुमसे सब कुछ छीन सकता है। तुम्हारी आत्मा भी।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "난 흔들리지 않아.",
						"english": "I will not waver.",
						"japanese": "私は揺るがない。",
						"chinese": "我不会动摇。",
						"french": "Je ne vacillerai pas.",
						"spanish": "No me inmutaré.",
						"vietnamese": "Ta sẽ không nao núng.",
						"thai": "ฉันจะไม่หวั่นไหว",
						"hindi": "मैं विचलित नहीं हूँगा।"
					},
					"emotion": "angry"
				},
				{
					"speaker": "briar",
					"type": "speech",
					"content": {
						"korean": "…부디 무사하길 빌어. 숲의 유혹에 넘어가지 마.",
						"english": "...I pray you remain safe. Do not succumb to the forest's temptations.",
						"japanese": "…どうか無事でいてくれ。森の誘惑に負けないでくれ。",
						"chinese": "...愿你平安无事。不要屈服于森林的诱惑。",
						"french": "...Je prie pour que tu restes sain et sauf. Ne cède pas aux tentations de la forêt.",
						"spanish": "...Rezo para que estés a salvo. No sucumbas a las tentaciones del bosque.",
						"vietnamese": "…Cầu mong ngươi được bình an. Đừng sa ngã trước cám dỗ của khu rừng.",
						"thai": "…ขอให้เจ้าปลอดภัย อย่าได้หลงกลความเย้ายวนของป่า",
						"hindi": "...मैं प्रार्थना करता हूँ कि तुम सुरक्षित रहो। जंगल के प्रलोभनों के आगे मत झुको।"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "숲의 의지가 모든 것을 집어삼켰다. 끝없는 어둠이 밀려왔다.",
						"english": "The will of the forest swallowed everything. Endless darkness surged in.",
						"japanese": "森の意思がすべてを飲み込んだ。終わりなき闇が押し寄せた。",
						"chinese": "森林的意志吞噬了一切。无尽的黑暗汹涌而至。",
						"french": "La volonté de la forêt a tout englouti. Une obscurité sans fin a déferlé.",
						"spanish": "La voluntad del bosque lo devoró todo. Una oscuridad interminable se apoderó de todo.",
						"vietnamese": "Ý chí của khu rừng nuốt chửng mọi thứ. Bóng tối vô tận ập đến.",
						"thai": "เจตจำนงแห่งป่ากลืนกินทุกสิ่ง ความมืดมิดไร้ที่สิ้นสุดถาโถมเข้ามา",
						"hindi": "जंगल की इच्छा ने सब कुछ निगल लिया। अंतहीन अँधेरा छा गया।"
					},
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "하찮은 존재. 너의 소망은… 부서질 것이다.",
						"english": "Insignificant being. Your wish will... be shattered.",
						"japanese": "愚かな存在よ。お前の願いは…砕け散るだろう。",
						"chinese": "微不足道的存在。你的愿望……将会破碎。",
						"french": "Être insignifiant. Ton souhait sera... brisé.",
						"spanish": "Ser insignificante. Tu deseo... será destrozado.",
						"vietnamese": "Kẻ tầm thường. Ước vọng của ngươi... sẽ tan vỡ.",
						"thai": "สิ่งมีชีวิตอันต่ำต้อย ความปรารถนาของเจ้าจะ...แตกสลาย",
						"hindi": "तुच्छ प्राणी। तुम्हारी इच्छा... टूट जाएगी।"
					},
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…아직 끝나지 않았어. 난 반드시… 진실을 밝혀낼 거야.",
						"english": "...It's not over yet. I will definitely... uncover the truth.",
						"japanese": "…まだ終わってない。私は必ず…真実を明らかにする。",
						"chinese": "……还没结束。我一定会……揭露真相。",
						"french": "...Ce n'est pas encore fini. Je vais absolument... révéler la vérité.",
						"spanish": "...Aún no ha terminado. Definitivamente... descubriré la verdad.",
						"vietnamese": "...Chưa kết thúc đâu. Ta nhất định sẽ... phơi bày sự thật.",
						"thai": "...ยังไม่จบ ข้าจะต้อง...เปิดเผยความจริงให้ได้",
						"hindi": "...अभी खत्म नहीं हुआ है। मैं निश्चित रूप से... सच का पता लगाऊँगा।"
					}
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "마침내 숲의 심장부에 도달했다. 거대한 그림자가 앞을 가로막았다.",
						"english": "Finally reached the heart of the forest. A colossal shadow blocked the way.",
						"japanese": "ついに森の心臓部に到達した。巨大な影が道を塞いだ。",
						"chinese": "终于到达了森林的深处。一个巨大的影子挡住了去路。",
						"french": "Enfin atteint le cœur de la forêt. Une ombre colossale barra le chemin.",
						"spanish": "Finalmente llegué al corazón del bosque. Una sombra colosal bloqueó el camino.",
						"vietnamese": "Cuối cùng cũng đã đến được trung tâm của khu rừng. Một cái bóng khổng lồ chắn ngang lối đi.",
						"thai": "ในที่สุดก็มาถึงใจกลางป่า เงาขนาดมหึมาขวางทางอยู่",
						"hindi": "अंततः जंगल के हृदय तक पहुँच गया। एक विशालकाय परछाई ने रास्ता रोक दिया।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…어리석은 인간이여. 여기까지 오다니.",
						"english": "...Foolish human. To think you'd come this far.",
						"japanese": "…愚かな人間め。ここまで来るとはな。",
						"chinese": "…愚蠢的人类。竟敢来到这里。",
						"french": "...Humain insensé. Oser venir jusqu'ici.",
						"spanish": "...Humano estúpido. ¿Cómo te atreves a llegar tan lejos?",
						"vietnamese": "…Hỡi con người ngu xuẩn. Ngươi dám đến tận đây sao.",
						"thai": "…มนุษย์ผู้โง่เขลา เจ้ากล้ามาถึงที่นี่เลยรึ",
						"hindi": "…मूर्ख इंसान। यहाँ तक आने की हिम्मत कैसे हुई।"
					},
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "네가 '영혼의 나무'를 지키는 존재인가?",
						"english": "Are you the guardian of the 'Soul Tree'?",
						"japanese": "お前が「魂の木」を守る存在か？",
						"chinese": "你就是守护‘灵魂之树’的存在吗？",
						"french": "Es-tu le gardien de l'« Arbre des Âmes » ?",
						"spanish": "¿Eres el guardián del 'Árbol del Alma'?",
						"vietnamese": "Ngươi là kẻ canh giữ 'Cây Linh Hồn' ư?",
						"thai": "เจ้าคือผู้พิทักษ์ 'ต้นไม้แห่งวิญญาณ' รึ?",
						"hindi": "क्या तुम 'आत्मा के वृक्ष' के रक्षक हो?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "수호자? 나는 이 숲의 의지, 그 자체다.",
						"english": "Guardian? I am the will of this forest itself.",
						"japanese": "守護者だと？私はこの森の意思、そのものだ。",
						"chinese": "守护者？我即是这片森林的意志。",
						"french": "Gardien ? Je suis la volonté même de cette forêt.",
						"spanish": "¿Guardián? Yo soy la voluntad misma de este bosque.",
						"vietnamese": "Kẻ bảo hộ? Ta chính là ý chí của khu rừng này.",
						"thai": "ผู้พิทักษ์รึ? ข้าคือเจตจำนงแห่งป่านี้เอง",
						"hindi": "संरक्षक? मैं इस जंगल की इच्छा हूँ।"
					},
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "너의 어리석은 소망은, 이곳에서 영원히 잠들 것이다.",
						"english": "Your foolish wish will sleep here forever.",
						"japanese": "お前の愚かな願いは、ここで永遠に眠るだろう。",
						"chinese": "你愚蠢的愿望，将在此地永远沉睡。",
						"french": "Ton souhait insensé reposera ici pour l'éternité.",
						"spanish": "Tu estúpido deseo dormirá aquí para siempre.",
						"vietnamese": "Ước nguyện ngu ngốc của ngươi sẽ vĩnh viễn chìm vào giấc ngủ tại đây.",
						"thai": "ความปรารถนาอันโง่เขลาของเจ้า จะหลับใหลอยู่ที่นี่ชั่วนิรันดร์",
						"hindi": "तुम्हारी मूर्ख इच्छा यहाँ हमेशा के लिए सो जाएगी।"
					},
					"speaker": "random_boss"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 서서히 흩어졌다. 숲을 짓누르던 억압적인 기운이 옅어지는 듯했다.",
						"english": "The massive shadow slowly scattered. The oppressive aura that weighed down the forest seemed to fade.",
						"japanese": "巨大な影が徐々に散っていった。森を覆っていた抑圧的な気配が薄れていくようだった。",
						"chinese": "巨大的阴影渐渐消散。笼罩森林的压迫气息似乎正在减弱。",
						"french": "L'ombre gigantesque se dispersa lentement. L'aura oppressive qui écrasait la forêt semblait s'estomper.",
						"spanish": "La enorme sombra se dispersó lentamente. El aura opresiva que oprimía el bosque parecía desvanecerse.",
						"vietnamese": "Cái bóng khổng lồ dần tan biến. Khí tức áp bức đè nặng khu rừng dường như đang yếu đi.",
						"thai": "เงาขนาดมหึมาค่อยๆ สลายไป แรงกดดันที่บีบคั้นป่าดูเหมือนจะจางลง",
						"hindi": "विशालकाय छाया धीरे-धीरे बिखर गई। जंगल पर हावी दमनकारी आभा फीकी पड़ती लग रही थी।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…구원? 그것은… 또 다른 파멸일 뿐…",
						"english": "...Salvation? That is... merely another destruction...",
						"japanese": "…救済だと？それは…また別の破滅に過ぎない…",
						"chinese": "……救赎？那只不过是……另一种毁灭……",
						"french": "...Le salut ? Ce n'est... qu'une autre destruction...",
						"spanish": "¿...Salvación? Eso es... simplemente otra destrucción...",
						"vietnamese": "...Cứu rỗi? Đó chẳng qua chỉ là... một sự hủy diệt khác mà thôi...",
						"thai": "...การไถ่บาป? นั่นมัน...เป็นเพียงการทำลายล้างอีกครั้ง...",
						"hindi": "...मुक्ति? वह... केवल एक और विनाश है..."
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "진실은… 대체 어디에 있는 거야.",
						"english": "The truth is... where is it, really?",
						"japanese": "真実とは…一体どこにあるんだ。",
						"chinese": "真相……到底在哪里。",
						"french": "La vérité est... où est-elle, au juste ?",
						"spanish": "La verdad... ¿dónde está, en realidad?",
						"vietnamese": "Chân tướng... rốt cuộc là ở đâu.",
						"thai": "ความจริงอยู่ที่...ไหนกันแน่",
						"hindi": "सच... आखिर कहाँ है।"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "숲은 잠시 침묵했다. 그러나 그 침묵은 새로운 질문을 던지며, 또 다른 여정의 시작을 알리는 듯했다.",
						"english": "The forest was silent for a moment. But that silence seemed to pose new questions, signaling the start of another journey.",
						"japanese": "森は一時、沈黙した。しかし、その沈黙は新たな問いを投げかけ、また別の旅の始まりを告げるかのようだった。",
						"chinese": "森林短暂地沉默了。然而，那份沉默似乎提出了新的问题，预示着另一段旅程的开始。",
						"french": "La forêt resta silencieuse un instant. Mais ce silence semblait soulever de nouvelles questions, annonçant le début d'un autre voyage.",
						"spanish": "El bosque permaneció en silencio por un momento. Pero ese silencio parecía plantear nuevas preguntas, anunciando el inicio de otro viaje.",
						"vietnamese": "Khu rừng im lặng một lúc. Nhưng sự im lặng ấy dường như đặt ra những câu hỏi mới, báo hiệu sự khởi đầu của một hành trình khác.",
						"thai": "ป่าเงียบสงบชั่วครู่ ทว่าความเงียบนั้นดูเหมือนจะตั้งคำถามใหม่ๆ และบ่งบอกถึงการเริ่มต้นของการเดินทางครั้งใหม่",
						"hindi": "जंगल कुछ देर के लिए शांत हो गया। लेकिन वह शांति नए सवाल उठाती हुई, एक और यात्रा की शुरुआत का संकेत दे रही थी।"
					},
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"짙은 안개 속, 고대의 숲이 숨 쉬었다.",
			"'영혼의 나무'를 찾는 자들은 모두 사라졌다.",
			"아름다움 뒤에 숨겨진 음산한 속삭임.",
			"이제, 그 금단의 영역으로 당신이 발을 들인다.",
			"구원을 바라는가? 아니면 파멸을 택할 것인가?"
		],
		"english": [
			"In the dense fog, the ancient forest breathed.",
			"All who sought the 'Soul Tree' vanished.",
			"Eerie whispers hidden behind beauty.",
			"Now, you step into that forbidden realm.",
			"Do you seek salvation? Or will you choose ruin?"
		],
		"japanese": [
			"濃い霧の中、古代の森が息づいていた。",
			"『魂の木』を探す者たちは皆、姿を消した。",
			"美しさの裏に隠された不気味なささやき。",
			"今、あなたは禁断の領域へと足を踏み入れる。",
			"救いを望むか？ それとも破滅を選ぶか？"
		],
		"chinese": [
			"浓雾之中，古老的森林在呼吸。",
			"所有寻找“灵魂之树”的人都消失了。",
			"隐藏在美丽背后的诡异低语。",
			"现在，你踏入了那片禁忌之地。",
			"你渴望救赎吗？还是选择毁灭？"
		],
		"french": [
			"Dans le brouillard dense, la forêt ancienne respirait.",
			"Tous ceux qui cherchaient l'« Arbre des Âmes » ont disparu.",
			"Des murmures sinistres cachés derrière la beauté.",
			"Maintenant, vous entrez dans ce royaume interdit.",
			"Cherchez-vous le salut ? Ou choisirez-vous la ruine ?"
		],
		"spanish": [
			"En la densa niebla, el bosque ancestral respiraba.",
			"Todos los que buscaron el 'Árbol del Alma' desaparecieron.",
			"Susurros espeluznantes ocultos tras la belleza.",
			"Ahora, pisas ese reino prohibido.",
			"¿Buscas la salvación? ¿O elegirás la ruina?"
		],
		"vietnamese": [
			"Trong màn sương dày đặc, khu rừng cổ đại đang thở.",
			"Tất cả những ai tìm kiếm 'Cây Linh Hồn' đều biến mất.",
			"Những lời thì thầm rùng rợn ẩn sau vẻ đẹp.",
			"Giờ đây, bạn bước chân vào vùng đất cấm đó.",
			"Bạn tìm kiếm sự cứu rỗi? Hay sẽ chọn sự hủy diệt?"
		],
		"thai": [
			"ท่ามกลางหมอกหนาทึบ ป่าโบราณได้หายใจ",
			"ทุกคนที่ตามหา 'ต้นไม้แห่งวิญญาณ' ได้หายสาบสูญไป",
			"เสียงกระซิบอันน่าขนลุกที่ซ่อนอยู่เบื้องหลังความงดงาม",
			"บัดนี้ เจ้าก้าวเข้าสู่ดินแดนต้องห้ามนั้น",
			"เจ้าปรารถนาการไถ่บาป หรือจะเลือกหายนะ?"
		],
		"hindi": [
			"घने कोहरे में, प्राचीन वन साँस ले रहा था।",
			"‘आत्मा के पेड़’ को खोजने वाले सभी गायब हो गए।",
			"सुंदरता के पीछे छिपी भयानक फुसफुसाहट।",
			"अब, तुम उस वर्जित क्षेत्र में कदम रखते हो।",
			"क्या तुम मोक्ष चाहते हो? या तुम विनाश चुनोगे?"
		]
	}
} as const;
