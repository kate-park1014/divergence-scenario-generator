export const scenario_forest_sorrowfulheart_52_01 = {
	"scenario_id": "forest_sorrowfulheart_52_01",
	"order": 1,
	"act": "intro",
	"theme": "forest",
	"actors": {
		"fern": {
			"id": "mon_279a32a0-8ec1-4b5b-8179-32df46fdc664",
			"name": {
				"korean": "페른",
				"english": "Fern",
				"japanese": "フェルン",
				"chinese": "费恩",
				"french": "Fern",
				"spanish": "Fern",
				"vietnamese": "Fern",
				"thai": "เฟิร์น",
				"hindi": "फर्न"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/19f9763e-413a-485e-787a-9bbfd8208700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/563627d4-0b7c-4865-39d4-1d0a97363c00/public"
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
					"emotion": "base",
					"content": {
						"korean": "짙은 안개와 고목들이 길을 막았다. 숲의 초입, 길을 잃었다.",
						"english": "Thick fog and ancient trees blocked the path. Lost at the forest's edge.",
						"japanese": "深い霧と古木が道を塞いでいた。森の入り口で、道に迷った。",
						"chinese": "浓雾和古树挡住了去路。在森林的入口处，迷路了。",
						"french": "Un épais brouillard et de vieux arbres bloquaient le chemin. Perdu à l'orée de la forêt.",
						"spanish": "Una densa niebla y árboles centenarios bloqueaban el camino. Perdido al borde del bosque.",
						"vietnamese": "Sương mù dày đặc và cây cổ thụ chặn lối. Lạc đường ở rìa rừng.",
						"thai": "หมอกหนาทึบและต้นไม้โบราณขวางทาง. หลงทางที่ทางเข้าป่า.",
						"hindi": "घनी कोहरे और प्राचीन पेड़ों ने रास्ता रोक दिया। जंगल के किनारे पर खो गया।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "어디로 가야 하는 거지…",
						"english": "Which way should I go…",
						"japanese": "どちらへ行けばいいんだ…",
						"chinese": "该往哪儿走…",
						"french": "Où dois-je aller…",
						"spanish": "Hacia dónde debo ir…",
						"vietnamese": "Mình phải đi đâu đây…",
						"thai": "ฉันควรไปทางไหนดีนะ…",
						"hindi": "मुझे किस रास्ते जाना चाहिए…"
					},
					"type": "speech"
				},
				{
					"spot": [
						5,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "fern"
				},
				{
					"emotion": "sad",
					"speaker": "fern",
					"content": {
						"korean": "길을 잃으셨나요?",
						"english": "Are you lost?",
						"japanese": "道に迷われましたか？",
						"chinese": "您迷路了吗？",
						"french": "Vous êtes perdu ?",
						"spanish": "¿Está perdido?",
						"vietnamese": "Bạn bị lạc à?",
						"thai": "คุณหลงทางหรือเปล่า?",
						"hindi": "क्या आप खो गए हैं?"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "당신은…?",
						"english": "And you are…?",
						"japanese": "あなたは…？",
						"chinese": "您是…？",
						"french": "Et vous êtes… ?",
						"spanish": "¿Y usted es…?",
						"vietnamese": "Bạn là…?",
						"thai": "คุณคือ…?",
						"hindi": "और आप कौन हैं…?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "페른이에요. 이 숲의 길잡이.",
						"english": "I'm Fern. The guide of this forest.",
						"japanese": "フェルンです。この森の道案内。",
						"chinese": "我是费恩。这片森林的向导。",
						"french": "Je suis Fern. La guide de cette forêt.",
						"spanish": "Soy Fern. La guía de este bosque.",
						"vietnamese": "Tôi là Fern. Người dẫn đường của khu rừng này.",
						"thai": "ฉันคือเฟิร์น. ผู้ชี้นำทางของป่านี้.",
						"hindi": "मैं फर्न हूँ। इस जंगल का मार्गदर्शक।"
					},
					"type": "speech",
					"speaker": "fern",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "도와드릴 수 있어요. 대신… 숲의 심장을 도와주세요.",
						"english": "I can help you. But in return… please help the forest's heart.",
						"japanese": "お手伝いできます。その代わり…森の心臓を助けてください。",
						"chinese": "我可以帮助您。但是…请您帮助森林之心。",
						"french": "Je peux vous aider. En échange… aidez le cœur de la forêt.",
						"spanish": "Puedo ayudarle. A cambio… por favor, ayude al corazón del bosque.",
						"vietnamese": "Tôi có thể giúp bạn. Đổi lại… xin hãy giúp trái tim của khu rừng.",
						"thai": "ฉันช่วยคุณได้. แต่แลกกัน… โปรดช่วยหัวใจของป่าด้วย.",
						"hindi": "मैं आपकी मदद कर सकता हूँ। लेकिन बदले में… कृपया जंगल के दिल की मदद करें।"
					},
					"emotion": "sad",
					"speaker": "fern"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "숲의 심장?",
						"english": "Heart of the Forest?",
						"japanese": "「森の心臓？」",
						"chinese": "「森林之心？」",
						"french": "Le Cœur de la Forêt ?",
						"spanish": "¿El Corazón del Bosque?",
						"vietnamese": "Trái tim của Rừng?",
						"thai": "หัวใจแห่งป่า?",
						"hindi": "जंगल का दिल?"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "fern",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						3
					]
				},
				{
					"emotion": "base",
					"speaker": "fern",
					"content": {
						"korean": "저 안에 있어요. 거대한 씨앗, '생명의 심장'.",
						"english": "It's inside. The giant seed, 'Heart of Life'.",
						"japanese": "「あれの中です。巨大な種、『生命の心臓』。」",
						"chinese": "「它在里面。那颗巨大的种子，‘生命之心’。」",
						"french": "C'est à l'intérieur. La graine géante, le 'Cœur de Vie'.",
						"spanish": "Está ahí dentro. La semilla gigante, el 'Corazón de la Vida'.",
						"vietnamese": "Nó ở bên trong. Hạt giống khổng lồ, 'Trái tim của Sự Sống'.",
						"thai": "มันอยู่ข้างใน เมล็ดพันธุ์ยักษ์ 'หัวใจแห่งชีวิต'",
						"hindi": "वह अंदर है। विशाल बीज, 'जीवन का दिल'।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "숲의 모든 생명은 그 심장에서 나오죠.",
						"english": "All life in the forest originates from that heart.",
						"japanese": "「森のすべての生命は、その心臓から生まれるのです。」",
						"chinese": "「森林中的所有生命都源于那颗心。」",
						"french": "Toute vie dans la forêt provient de ce cœur.",
						"spanish": "Toda la vida del bosque emana de ese corazón.",
						"vietnamese": "Mọi sự sống trong rừng đều bắt nguồn từ trái tim đó.",
						"thai": "ชีวิตทั้งหมดในป่ากำเนิดจากหัวใจดวงนั้น",
						"hindi": "जंगल में हर जीवन उस दिल से निकलता है।"
					},
					"type": "speech",
					"speaker": "fern",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그게 왜…?",
						"english": "Why is it...?",
						"japanese": "「それがなぜ…？」",
						"chinese": "「它怎么了……？」",
						"french": "Pourquoi est-ce que… ?",
						"spanish": "¿Por qué…?",
						"vietnamese": "Tại sao nó lại...?",
						"thai": "ทำไมมันถึง...?",
						"hindi": "वह क्यों...?"
					}
				},
				{
					"speaker": "fern",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "병들고 있어요. 아주 깊은 곳에서부터.",
						"english": "It's ailing. From its very depths.",
						"japanese": "「病んでいます。とても深いところから。」",
						"chinese": "「它正在生病。从最深处开始。」",
						"french": "Il est malade. Des profondeurs mêmes.",
						"spanish": "Está enfermo. Desde lo más profundo.",
						"vietnamese": "Nó đang bị bệnh. Từ sâu thẳm bên trong.",
						"thai": "มันกำลังป่วย จากส่วนลึกที่สุด",
						"hindi": "वह बीमार हो रहा है। बहुत गहराई से।"
					}
				},
				{
					"emotion": "sad",
					"speaker": "fern",
					"content": {
						"korean": "누군가… 강제로 생명력을 뽑아내는 것 같아요.",
						"english": "It seems someone is forcibly extracting its life force.",
						"japanese": "「誰かが…生命力を無理やり引き抜いているようです。」",
						"chinese": "「似乎有人在……强行抽取它的生命力。」",
						"french": "Quelqu'un… semble lui arracher sa force vitale de force.",
						"spanish": "Parece que alguien… está extrayendo su fuerza vital a la fuerza.",
						"vietnamese": "Có vẻ như ai đó… đang cưỡng chế rút cạn sinh lực của nó.",
						"thai": "ดูเหมือนมีใครบางคน... กำลังดึงพลังชีวิตออกมาอย่างรุนแรง",
						"hindi": "लगता है कोई... जबरदस्ती इसकी जीवन शक्ति निकाल रहा है।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "강제로…?",
						"english": "Forcibly...?",
						"japanese": "「無理やり…？」",
						"chinese": "「强行……？」",
						"french": "De force… ?",
						"spanish": "¿A la fuerza…?",
						"vietnamese": "Cưỡng chế...?",
						"thai": "อย่างรุนแรง...?",
						"hindi": "जबरदस्ती...?"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						3,
						3
					],
					"type": "direction",
					"speaker": "fern",
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "숲이 균형을 잃고 있어요. 아름다움 뒤에 병든 그림자가 드리워요.",
						"english": "The forest is losing its balance. A sickly shadow looms behind its beauty.",
						"japanese": "「森はバランスを失っています。美しさの裏に病んだ影が差しています。」",
						"chinese": "「森林正在失去平衡。在美丽背后，病态的阴影笼罩着。」",
						"french": "La forêt perd son équilibre. Une ombre malade plane derrière sa beauté.",
						"spanish": "El bosque está perdiendo su equilibrio. Una sombra enfermiza se cierne tras su belleza.",
						"vietnamese": "Rừng đang mất đi sự cân bằng. Một bóng tối bệnh tật đang bao trùm vẻ đẹp của nó.",
						"thai": "ป่ากำลังสูญเสียสมดุล เงาแห่งความเจ็บป่วยทอดยาวอยู่เบื้องหลังความงาม",
						"hindi": "जंगल अपना संतुलन खो रहा है। उसकी सुंदरता के पीछे एक बीमार छाया मंडरा रही है।"
					},
					"speaker": "fern",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "어떻게 해야 하죠?",
						"english": "What should I do?",
						"japanese": "「どうすればいいですか？」",
						"chinese": "「我该怎么做？」",
						"french": "Que dois-je faire ?",
						"spanish": "¿Qué debo hacer?",
						"vietnamese": "Tôi phải làm gì?",
						"thai": "ฉันควรทำอย่างไร?",
						"hindi": "मुझे क्या करना चाहिए?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "fern",
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "당신이라면… 분명 방법을 찾을 수 있을 거예요.",
						"english": "If it's you... I'm sure you'll find a way.",
						"japanese": "「あなたなら…きっと方法を見つけられるでしょう。」",
						"chinese": "「如果是你……一定能找到办法的。」",
						"french": "Si c'est vous… vous trouverez sûrement un moyen.",
						"spanish": "Si eres tú… seguro encontrarás una solución.",
						"vietnamese": "Nếu là bạn… tôi chắc chắn bạn sẽ tìm ra cách.",
						"thai": "ถ้าเป็นคุณ... ฉันแน่ใจว่าคุณจะหาวิธีได้",
						"hindi": "अगर आप हैं... तो मुझे यकीन है कि आपको कोई रास्ता मिल जाएगा।"
					}
				},
				{
					"speaker": "fern",
					"emotion": "base",
					"content": {
						"korean": "저를 따라와 주세요. 더 깊은 곳으로.",
						"english": "Follow me. Deeper inside.",
						"japanese": "私についてきてください。もっと奥へ。",
						"chinese": "请跟我来。到更深的地方。",
						"french": "Suivez-moi. Plus profondément.",
						"spanish": "Sígueme. Más adentro.",
						"vietnamese": "Hãy theo tôi. Sâu hơn nữa.",
						"thai": "ตามข้ามาสิ ลึกเข้าไปอีก",
						"hindi": "मेरे पीछे आओ। और गहरे में।"
					},
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
						2,
						3
					],
					"type": "direction",
					"speaker": "fern",
					"action": "enter"
				},
				{
					"speaker": "fern",
					"emotion": "base",
					"content": {
						"korean": "점점 더 강한 기운이 느껴지죠?",
						"english": "Can you feel the aura growing stronger?",
						"japanese": "ますます強い気を感じませんか？",
						"chinese": "你感觉到气息越来越强了吗？",
						"french": "Sentez-vous l'aura devenir plus forte ?",
						"spanish": "¿Sientes que el aura se vuelve más fuerte?",
						"vietnamese": "Bạn có cảm thấy khí tức ngày càng mạnh không?",
						"thai": "สัมผัสได้ถึงพลังที่แข็งแกร่งขึ้นเรื่อยๆ ใช่ไหม?",
						"hindi": "क्या आपको और भी शक्तिशाली ऊर्जा महसूस हो रही है?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "숨 막히는 것 같아.",
						"english": "It feels suffocating.",
						"japanese": "息が詰まりそうだ。",
						"chinese": "感觉快窒息了。",
						"french": "C'est suffocant.",
						"spanish": "Se siente asfixiante.",
						"vietnamese": "Cảm giác ngột ngạt quá.",
						"thai": "รู้สึกอึดอัดหายใจไม่ออก",
						"hindi": "दम घुट रहा है।"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "fern",
					"emotion": "sad",
					"content": {
						"korean": "하지만 포기하지 마세요. 숲의 심장이 당신을 기다려요.",
						"english": "But don't give up. The heart of the forest awaits you.",
						"japanese": "でも諦めないでください。森の心があなたを待っています。",
						"chinese": "但不要放弃。森林之心在等着你。",
						"french": "Mais n'abandonnez pas. Le cœur de la forêt vous attend.",
						"spanish": "Pero no te rindas. El corazón del bosque te espera.",
						"vietnamese": "Nhưng đừng bỏ cuộc. Trái tim của rừng đang chờ đợi bạn.",
						"thai": "แต่อย่าเพิ่งยอมแพ้ หัวใจของป่ากำลังรอคุณอยู่",
						"hindi": "लेकिन हार मत मानो। जंगल का दिल तुम्हारा इंतजार कर रहा है।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "여행자는 알 수 없는 유혹에 이끌려, 숲의 깊은 곳으로 발을 들였다.",
						"english": "Drawn by an unknown allure, the traveler stepped deeper into the forest.",
						"japanese": "旅人は未知の誘惑に導かれ、森の奥深くへと足を踏み入れた。",
						"chinese": "旅行者被未知的诱惑吸引，踏入了森林深处。",
						"french": "Attiré par une attirance inconnue, le voyageur s'aventura plus profondément dans la forêt.",
						"spanish": "Atraído por una seducción desconocida, el viajero se adentró en lo más profundo del bosque.",
						"vietnamese": "Người lữ khách bị cuốn hút bởi một sự quyến rũ không rõ, bước sâu hơn vào rừng.",
						"thai": "นักเดินทางถูกดึงดูดด้วยเสน่ห์ที่ไม่รู้จัก ก้าวลึกเข้าไปในป่า",
						"hindi": "एक अज्ञात आकर्षण से खिंचा हुआ, यात्री जंगल में और गहरे उतर गया।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "거대한 씨앗이 눈앞에 나타났다. 섬뜩하게 고동쳤다.",
						"english": "A colossal seed appeared before them, pulsating eerily.",
						"japanese": "巨大な種子が目の前に現れた。不気味に脈打っていた。",
						"chinese": "一颗巨大的种子出现在眼前。它诡异地跳动着。",
						"french": "Une graine colossale apparut devant eux, palpitant étrangement.",
						"spanish": "Una semilla colosal apareció ante ellos, palpitando inquietantemente.",
						"vietnamese": "Một hạt giống khổng lồ xuất hiện trước mắt, đập một cách kỳ dị.",
						"thai": "เมล็ดพันธุ์ขนาดยักษ์ปรากฏขึ้นตรงหน้า มันเต้นตุบๆ อย่างน่าขนลุก",
						"hindi": "एक विशाल बीज उनके सामने प्रकट हुआ, भयावह रूप से धड़क रहा था।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "누가 여기까지 발을 들였는가.",
						"english": "Who dares to tread this far?",
						"japanese": "誰がここまで足を踏み入れたのか。",
						"chinese": "是谁胆敢闯入此地？",
						"french": "Qui ose s'aventurer jusqu'ici ?",
						"spanish": "¿Quién se atreve a llegar tan lejos?",
						"vietnamese": "Ai đã đặt chân đến đây?",
						"thai": "ใครบังอาจเข้ามาถึงที่นี่?",
						"hindi": "कौन इतनी दूर तक आने की हिम्मत करता है?"
					}
				},
				{
					"content": {
						"korean": "당신은…?",
						"english": "You are...?",
						"japanese": "貴様は…？",
						"chinese": "你是…？",
						"french": "Vous êtes… ?",
						"spanish": "¿Tú eres…?",
						"vietnamese": "Ngươi là...?",
						"thai": "เจ้าคือ...?",
						"hindi": "आप कौन हैं...?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "나는 {random_boss}. 이 심장을 지키는 자.",
						"english": "I am {random_boss}. Guardian of this heart.",
						"japanese": "私は{random_boss}。この心臓を守る者。",
						"chinese": "我是{random_boss}。守护这颗心脏之人。",
						"french": "Je suis {random_boss}. Le gardien de ce cœur.",
						"spanish": "Soy {random_boss}. El guardián de este corazón.",
						"vietnamese": "Ta là {random_boss}. Kẻ bảo vệ trái tim này.",
						"thai": "ข้าคือ {random_boss} ผู้พิทักษ์หัวใจดวงนี้",
						"hindi": "मैं {random_boss} हूँ। इस दिल का रक्षक।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "더 이상 다가오지 마라. 너희는 숲의 평화를 해칠 뿐.",
						"english": "Come no closer. You will only disturb the forest's peace.",
						"japanese": "これ以上近づくな。お前たちは森の平和を乱すだけだ。",
						"chinese": "不要再靠近了。你们只会破坏森林的和平。",
						"french": "Ne vous approchez pas davantage. Vous ne ferez que perturber la paix de la forêt.",
						"spanish": "No te acerques más. Solo perturbarás la paz del bosque.",
						"vietnamese": "Đừng đến gần nữa. Các ngươi sẽ chỉ phá vỡ sự bình yên của rừng thôi.",
						"thai": "อย่าเข้ามาใกล้กว่านี้ พวกเจ้าจะทำลายความสงบสุขของป่าเท่านั้น",
						"hindi": "और करीब मत आओ। तुम केवल जंगल की शांति भंग करोगे।"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "숲의 심장이 병들고 있어. 구해야 해.",
						"english": "The heart of the forest is ailing. We must save it.",
						"japanese": "森の心が病んでいる。救わなければ。",
						"chinese": "森林之心正在病变。我们必须拯救它。",
						"french": "Le cœur de la forêt est malade. Il faut le sauver.",
						"spanish": "El corazón del bosque está enfermo. Debemos salvarlo.",
						"vietnamese": "Trái tim của rừng đang bệnh. Phải cứu nó thôi.",
						"thai": "หัวใจของป่ากำลังป่วย ต้องช่วยมัน",
						"hindi": "वन का हृदय बीमार पड़ रहा है। हमें इसे बचाना होगा。"
					},
					"type": "speech"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "…어리석은 자. 구원이라 착각하겠지만…",
						"english": "...Fool. You may mistake this for salvation...",
						"japanese": "...愚か者め。救済だと勘違いするだろうが...",
						"chinese": "...愚蠢的家伙。你或许会误以为这是救赎...",
						"french": "...Insensé. Tu croiras peut-être que c'est le salut...",
						"spanish": "...Necio. Pensarás que esto es la salvación...",
						"vietnamese": "...Kẻ ngốc. Ngươi có thể nhầm đây là sự cứu rỗi...",
						"thai": "...คนโง่เอ๋ย เจ้าอาจจะเข้าใจผิดคิดว่าเป็นความรอด...",
						"hindi": "...मूर्ख। तुम इसे मोक्ष समझ सकते हो..."
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…더 깊은 함정에 빠지는 것일 뿐.",
						"english": "...it's merely falling into a deeper trap.",
						"japanese": "...より深い罠に落ちるだけだ。",
						"chinese": "...不过是陷入更深的陷阱罢了。",
						"french": "...ce n'est qu'une chute dans un piège plus profond.",
						"spanish": "...es solo caer en una trampa más profunda.",
						"vietnamese": "...chỉ là rơi vào một cái bẫy sâu hơn mà thôi.",
						"thai": "...เป็นแค่การตกลงไปในกับดักที่ลึกกว่าเดิมเท่านั้น",
						"hindi": "...बस एक गहरे जाल में फंसना है।"
					},
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리야…!",
						"english": "What do you mean...!?",
						"japanese": "どういうことだ...！",
						"chinese": "你说什么...！",
						"french": "Qu'est-ce que tu racontes...!",
						"spanish": "¡¿Qué quieres decir...!?",
						"vietnamese": "Ngươi nói gì vậy...!",
						"thai": "หมายความว่ายังไง...!",
						"hindi": "तुम्हारा क्या मतलब है...!"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "쓰러진 자의 마지막 경고. 그러나 여행자는 이미 멈출 수 없었다.",
						"english": "The fallen one's final warning. But the traveler could no longer stop.",
						"japanese": "倒れた者の最後の警告。しかし旅人はもう立ち止まることはできなかった。",
						"chinese": "倒下者的最后警告。然而，旅者已无法停下脚步。",
						"french": "Le dernier avertissement de celui qui est tombé. Mais le voyageur ne pouvait plus s'arrêter.",
						"spanish": "La última advertencia del caído. Pero el viajero ya no podía detenerse.",
						"vietnamese": "Lời cảnh báo cuối cùng của kẻ gục ngã. Nhưng lữ khách đã không thể dừng lại.",
						"thai": "คำเตือนสุดท้ายของผู้ที่ล้มลง แต่ผู้เดินทางไม่สามารถหยุดได้แล้ว",
						"hindi": "गिरे हुए की अंतिम चेतावनी। परन्तु यात्री अब रुक नहीं सका।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "이제 새로운 안내자가 기다린다. '브라이어'라는 이름의 그림자 속에서.",
						"english": "Now a new guide awaits. In the shadow named 'Briar'.",
						"japanese": "今、新たな案内人が待っている。『ブライア』という名の影の中で。",
						"chinese": "现在，一位新的向导正在等待。在名为“荆棘”的阴影中。",
						"french": "Maintenant, un nouveau guide attend. Dans l'ombre nommée 'Briar'.",
						"spanish": "Ahora, un nuevo guía espera. En la sombra llamada 'Briar'.",
						"vietnamese": "Bây giờ, một người dẫn đường mới đang chờ đợi. Trong bóng tối mang tên 'Briar'.",
						"thai": "ตอนนี้มีผู้นำทางคนใหม่รออยู่ ในเงามืดที่ชื่อว่า 'ไบรเออร์'",
						"hindi": "अब एक नया मार्गदर्शक प्रतीक्षा कर रहा है। 'ब्रायर' नामक छाया में।"
					},
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "감히 이 심장을 탐하려 하는가. 다시는 돌아오지 마라.",
						"english": "Dare you covet this heart? Never return.",
						"japanese": "よくもこの心を欲するか。二度と戻ってくるな。",
						"chinese": "竟敢觊觎这颗心？休想再回来。",
						"french": "Oses-tu convoiter ce cœur ? Ne reviens jamais.",
						"spanish": "¡¿Te atreves a codiciar este corazón? No regreses jamás.",
						"vietnamese": "Ngươi dám tham lam trái tim này sao? Đừng bao giờ quay lại.",
						"thai": "เจ้ากล้าที่จะโลภหัวใจนี้หรือ? อย่ากลับมาอีกเลย",
						"hindi": "क्या तुम इस हृदय की लालच करने की हिम्मत करते हो? कभी वापस मत आना।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…여기서 멈출 수 없어.",
						"english": "...I can't stop here.",
						"japanese": "...ここで立ち止まるわけにはいかない。",
						"chinese": "...我不能止步于此。",
						"french": "...Je ne peux pas m'arrêter ici.",
						"spanish": "...No puedo detenerme aquí.",
						"vietnamese": "...Tôi không thể dừng lại ở đây.",
						"thai": "...ฉันหยุดอยู่ตรงนี้ไม่ได้",
						"hindi": "...मैं यहां रुक नहीं सकता।"
					},
					"emotion": "angry",
					"speaker": "character_any"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"고요한 숲. 모든 생명이 숨 쉬는 심장.",
			"길을 잃은 여행자는 우연히 '페른'을 만난다.",
			"페른은 속삭였다. 숲의 심장이 병들었다고.",
			"구원의 손길은, 때로 가장 위험한 유혹이 된다."
		],
		"english": [
			"A silent forest. The heart where all life breathes.",
			"A lost traveler chances upon 'Fern'.",
			"Fern whispered. The forest's heart was ailing.",
			"A helping hand, at times, becomes the most dangerous temptation."
		],
		"japanese": [
			"静かな森。全ての生命が息づく心臓。",
			"道に迷った旅人は、偶然『フェルン』に出会う。",
			"フェルンは囁いた。森の心臓が病んでいると。",
			"救いの手は、時に最も危険な誘惑となる。"
		],
		"chinese": [
			"宁静的森林。万物生息的心脏。",
			"迷路的旅人偶然遇见了“费恩”。",
			"费恩低语道。森林之心病了。",
			"救赎之手，有时会成为最危险的诱惑。"
		],
		"french": [
			"Une forêt silencieuse. Le cœur où toute vie respire.",
			"Un voyageur égaré rencontre 'Fern' par hasard.",
			"Fern murmura. Le cœur de la forêt était malade.",
			"La main du salut devient parfois la tentation la plus dangereuse."
		],
		"spanish": [
			"Un bosque silencioso. El corazón donde toda vida respira.",
			"Un viajero perdido se encuentra con 'Fern' por casualidad.",
			"Fern susurró. El corazón del bosque estaba enfermo.",
			"La mano de la salvación, a veces, se convierte en la tentación más peligrosa."
		],
		"vietnamese": [
			"Khu rừng tĩnh lặng. Trái tim nơi vạn vật sinh sôi.",
			"Một lữ khách lạc đường tình cờ gặp 'Fern'.",
			"Fern thì thầm. Trái tim khu rừng đang bệnh.",
			"Bàn tay cứu rỗi, đôi khi, lại là cám dỗ nguy hiểm nhất."
		],
		"thai": [
			"ป่าอันเงียบสงบ. หัวใจที่ทุกชีวิตหายใจ.",
			"นักเดินทางผู้หลงทางบังเอิญพบ 'เฟิร์น'.",
			"เฟิร์นกระซิบ. หัวใจของป่ากำลังป่วยไข้.",
			"มือที่ยื่นมาช่วย บางครั้งก็กลายเป็นการล่อลวงที่อันตรายที่สุด."
		],
		"hindi": [
			"एक शांत जंगल। वह हृदय जहाँ सभी जीवन साँस लेते हैं।",
			"एक भटका हुआ यात्री संयोग से 'फर्न' से मिलता है।",
			"फर्न ने फुसफुसाया। जंगल का दिल बीमार था।",
			"मदद का हाथ, कभी-कभी, सबसे खतरनाक प्रलोभन बन जाता है।"
		]
	}
} as const;
