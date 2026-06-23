export const scenario_snowy_cryos_35_01 = {
	"scenario_id": "snowy_cryos_35_01",
	"order": 1,
	"act": "intro",
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
			"눈보라가 삼킨 세상. 희망은 얼어붙었다.",
			"그러나 거친 설원 속, 꺼지지 않는 빛이 있었다.",
			"미지의 유적, 고대의 속삭임.",
			"그 빛을 쫓는 자들, 운명은 그들을 인도했다.",
			"그리고 그곳에서, 첫 위협이 깨어난다."
		],
		"english": [
			"A world swallowed by blizzard. Hope, frozen.",
			"Yet, in the harsh snowfield, an unquenchable light persisted.",
			"Unknown ruins, ancient whispers.",
			"Those who chased the light, destiny led them.",
			"And there, the first threat awakens."
		],
		"japanese": [
			"吹雪に呑まれた世界。希望は凍りついた。",
			"しかし、荒れた雪原には、消えることのない光があった。",
			"未知の遺跡、古の囁き。",
			"その光を追う者たち、運命は彼らを導いた。",
			"そしてその場所で、最初の脅威が目覚める。"
		],
		"chinese": [
			"暴风雪吞噬的世界。希望已冻结。",
			"然而，在严酷的雪原中，一道不灭的光芒犹存。",
			"未知遗迹，古老低语。",
			"追逐那光芒之人，命运指引着他们。",
			"而在那里，第一道威胁苏醒了。"
		],
		"french": [
			"Un monde englouti par le blizzard. L'espoir, gelé.",
			"Pourtant, dans l'âpre toundra, une lumière inextinguible brillait.",
			"Ruines inconnues, murmures anciens.",
			"Ceux qui poursuivaient cette lumière, le destin les guida.",
			"Et là, la première menace s'éveille."
		],
		"spanish": [
			"Un mundo engullido por la ventisca. La esperanza, congelada.",
			"Sin embargo, en la dura llanura nevada, una luz inextinguible permanecía.",
			"Ruinas desconocidas, susurros ancestrales.",
			"Aquellos que persiguieron la luz, el destino los guio.",
			"Y allí, la primera amenaza despierta."
		],
		"vietnamese": [
			"Thế giới bị bão tuyết nuốt chửng. Hy vọng đóng băng.",
			"Tuy nhiên, giữa tuyết nguyên khắc nghiệt, có một ánh sáng không tắt.",
			"Di tích bí ẩn, lời thì thầm cổ xưa.",
			"Những kẻ đuổi theo ánh sáng, định mệnh đã dẫn lối cho họ.",
			"Và tại đó, mối đe dọa đầu tiên thức tỉnh."
		],
		"thai": [
			"โลกที่ถูกพายุหิมะกลืนกิน ความหวังที่เยือกแข็ง.",
			"ทว่า ณ ทุ่งน้ำแข็งอันโหดร้าย ยังมีแสงหนึ่งไม่ดับ.",
			"ซากปรักหักพังปริศนา เสียงกระซิบโบราณ.",
			"ผู้ที่ไล่ตามแสงนั้น ชะตากรรมได้นำพาพวกเขา.",
			"และที่นั่น ภัยคุกคามแรกตื่นขึ้น."
		],
		"hindi": [
			"बर्फीले तूफान में डूबी दुनिया। आशा जम गई।",
			"फिर भी, बर्फीले मैदान में, एक ऐसी रोशनी थी जो बुझती नहीं थी।",
			"अज्ञात खंडहर, प्राचीन फुसफुसाहटें।",
			"उस प्रकाश का पीछा करने वाले, भाग्य ने उन्हें राह दिखाई।",
			"और वहीं, पहला खतरा जाग उठता है।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "끝없이 쏟아지는 눈보라가 세상을 집어삼켰다.",
						"english": "The endless blizzard swallowed the world.",
						"japanese": "際限なく降り注ぐ吹雪が世界を飲み込んだ。",
						"chinese": "无尽的暴风雪吞噬了整个世界。",
						"french": "La tempête de neige incessante engloutit le monde.",
						"spanish": "La ventisca interminable engulló el mundo.",
						"vietnamese": "Bão tuyết không ngừng đổ xuống đã nuốt chửng thế giới.",
						"thai": "พายุหิมะที่โปรยปรายไม่หยุด ได้กลืนกินโลกใบนี้.",
						"hindi": "अंतहीन बर्फीले तूफान ने दुनिया को निगल लिया।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "길을 잃었어… 어디로 가야 하지?",
						"english": "I'm lost... Where should I go?",
						"japanese": "道に迷った…どこへ行けばいいんだ？",
						"chinese": "我迷路了……该去哪儿？",
						"french": "Je suis perdu... Où dois-je aller ?",
						"spanish": "Me he perdido... ¿Adónde debo ir?",
						"vietnamese": "Tôi lạc rồi... Phải đi đâu đây?",
						"thai": "ฉันหลงทาง... จะไปทางไหนดี?",
						"hindi": "मैं खो गया हूँ... मुझे कहाँ जाना चाहिए?"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "저기, 저 빛은 뭐지?",
						"english": "Look, what's that light?",
						"japanese": "あれ、あの光は何だ？",
						"chinese": "喂，那是什么光？",
						"french": "Tiens, c'est quoi cette lumière ?",
						"spanish": "Oye, ¿qué es esa luz?",
						"vietnamese": "Kìa, ánh sáng kia là gì?",
						"thai": "นั่น แสงอะไรน่ะ?",
						"hindi": "देखो, वो रोशनी क्या है?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "일행은 신비로운 빛을 쫓아 고대 유적에 당도했다.",
						"english": "The party followed the mysterious light and arrived at the ancient ruins.",
						"japanese": "一行は神秘的な光を追って古代遺跡にたどり着いた。",
						"chinese": "队伍循着神秘的光芒来到了古老遗迹。",
						"french": "Le groupe suivit la lumière mystérieuse et atteignit les ruines antiques.",
						"spanish": "El grupo siguió la luz misteriosa y llegó a las ruinas antiguas.",
						"vietnamese": "Đoàn người đi theo ánh sáng huyền bí và đến được khu di tích cổ.",
						"thai": "คณะเดินทางติดตามแสงลึกลับไปจนถึงซากปรักหักพังโบราณ.",
						"hindi": "दल ने रहस्यमयी रोशनी का पीछा किया और प्राचीन खंडहरों तक पहुँच गया।"
					}
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						5,
						3
					],
					"speaker": "anuk",
					"action": "enter"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "anuk",
					"content": {
						"korean": "이런 곳까지 오다니… 길을 잃은 건가?",
						"english": "To come all the way here... Are we lost?",
						"japanese": "こんな場所まで来るとは…道に迷ったのか？",
						"chinese": "居然来到这种地方……是迷路了吗？",
						"french": "Arriver jusqu'ici... Serions-nous perdus ?",
						"spanish": "Llegar hasta aquí... ¿Nos hemos perdido?",
						"vietnamese": "Đến được nơi như thế này... Chúng ta lạc đường rồi sao?",
						"thai": "มาถึงที่แบบนี้ได้ยังไง... หลงทางรึเปล่า?",
						"hindi": "यहाँ तक आ पहुँचे... क्या हम भटक गए हैं?"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "당신은…?",
						"english": "You are…?",
						"japanese": "あなたは…？",
						"chinese": "你是…？",
						"french": "Vous êtes… ?",
						"spanish": "¿Tú eres…?",
						"vietnamese": "Anh là ai...?",
						"thai": "ท่านคือ...?",
						"hindi": "तुम कौन हो...?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "anuk",
					"content": {
						"korean": "아눅이다. 이곳에서 조난자들을 돕고 있지.",
						"english": "I am Anuk. I help castaways here.",
						"japanese": "アヌークだ。ここで遭難者を助けている。",
						"chinese": "我是阿努克。在这里帮助遇难者。",
						"french": "Je suis Anuk. J'aide les naufragés ici.",
						"spanish": "Soy Anuk. Ayudo a los náufragos aquí.",
						"vietnamese": "Ta là Anuk. Ta giúp đỡ những người gặp nạn ở đây.",
						"thai": "ข้าคืออานุก ข้าช่วยผู้ประสบภัยที่นี่",
						"hindi": "मैं अनूक हूँ। यहाँ मैं फंसे हुए लोगों की मदद करता हूँ।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_2",
					"content": {
						"korean": "도와주실 수 있나요?",
						"english": "Can you help me?",
						"japanese": "助けていただけますか？",
						"chinese": "你能帮我吗？",
						"french": "Pouvez-vous m'aider ?",
						"spanish": "¿Puedes ayudarme?",
						"vietnamese": "Ngài có thể giúp tôi không?",
						"thai": "ท่านช่วยข้าได้ไหม?",
						"hindi": "क्या आप मेरी मदद कर सकते हैं?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "anuk",
					"content": {
						"korean": "일단 몸을 녹여야 할 테니, 안으로 들어와.",
						"english": "You must be cold. Come inside.",
						"japanese": "まず体を温めないといけないだろう。中へ入れ。",
						"chinese": "你一定很冷。进来吧。",
						"french": "Tu dois avoir froid. Entre.",
						"spanish": "Debes tener frío. Entra.",
						"vietnamese": "Chắc hẳn ngươi lạnh lắm. Vào trong đi.",
						"thai": "เจ้าคงจะหนาว เข้ามาข้างในเถอะ",
						"hindi": "तुम्हें ठंड लग रही होगी। अंदर आ जाओ।"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						5,
						3
					],
					"speaker": "anuk",
					"action": "enter"
				},
				{
					"speaker": "anuk",
					"content": {
						"korean": "이곳은 고대 유적이다. 조심하는 게 좋을 거야.",
						"english": "This is an ancient ruin. You'd best be careful.",
						"japanese": "ここは古代遺跡だ。気をつけた方がいい。",
						"chinese": "这里是古代遗迹。你最好小心点。",
						"french": "C'est une ruine antique. Tu ferais mieux d'être prudent.",
						"spanish": "Esto es una ruina antigua. Será mejor que tengas cuidado.",
						"vietnamese": "Đây là một di tích cổ đại. Ngươi tốt nhất nên cẩn thận.",
						"thai": "ที่นี่คือซากปรักหักพังโบราณ เจ้าควรระวังตัวไว้",
						"hindi": "यह एक प्राचीन खंडहर है। तुम्हें सावधान रहना होगा।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "겨울이 유난히 길고 잔혹하다고 하던데요.",
						"english": "I heard this winter is unusually long and cruel.",
						"japanese": "この冬は特に長くて厳しいと聞きました。",
						"chinese": "我听说这个冬天异常漫长而残酷。",
						"french": "J'ai entendu dire que cet hiver est exceptionnellement long et cruel.",
						"spanish": "He oído que este invierno es inusualmente largo y cruel.",
						"vietnamese": "Tôi nghe nói mùa đông này đặc biệt dài và khắc nghiệt.",
						"thai": "ข้าได้ยินว่าฤดูหนาวนี้ยาวนานและโหดร้ายเป็นพิเศษ",
						"hindi": "मैंने सुना है कि यह सर्दी असामान्य रूप से लंबी और क्रूर है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "anuk",
					"content": {
						"korean": "…소문은 빠르군. 이곳 사람들은 이 겨울이 자연의 섭리가 아니라고 수군거리지.",
						"english": "…Rumors spread fast. People here whisper that this winter isn't natural.",
						"japanese": "…噂は早いな。ここの人々は、この冬は自然の摂理ではないと囁いている。",
						"chinese": "…流言传得真快。这里的人们都在私语，说这个冬天并非自然之道。",
						"french": "…Les rumeurs se propagent vite. Les gens ici murmurent que cet hiver n'est pas naturel.",
						"spanish": "…Los rumores corren rápido. La gente aquí susurra que este invierno no es natural.",
						"vietnamese": "…Tin đồn lan nhanh thật. Người dân ở đây thì thầm rằng mùa đông này không phải là lẽ tự nhiên.",
						"thai": "…ข่าวลือแพร่เร็วเหลือเกิน ผู้คนที่นี่ซุบซิบกันว่าฤดูหนาวนี้ไม่ใช่เรื่องธรรมชาติ",
						"hindi": "…अफवाहें तेज़ी से फैलती हैं। यहाँ के लोग फुसफुसाते हैं कि यह सर्दी प्राकृतिक नहीं है।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_1",
					"content": {
						"korean": "그럼 누가… 겨울을 붙잡고 있다는 건가요?",
						"english": "Then who… is holding winter captive?",
						"japanese": "では誰が…冬を捕らえているというのですか？",
						"chinese": "那么是谁…困住了冬天？",
						"french": "Alors qui… retient l'hiver captif ?",
						"spanish": "Entonces, ¿quién… está reteniendo el invierno?",
						"vietnamese": "Vậy thì ai… đang giam giữ mùa đông?",
						"thai": "ถ้าอย่างนั้นใครกันเล่า… ที่กักขังฤดูหนาวไว้?",
						"hindi": "तो कौन… सर्दी को रोके हुए है?"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "anuk",
					"content": {
						"korean": "알 수 없다. 다만, 불길한 징조인 것만은 확실해.",
						"english": "I don't know. But it's certainly an ominous sign.",
						"japanese": "分からない。だが、不吉な兆候であることだけは確かだ。",
						"chinese": "我不知道。但可以肯定，这是一个不祥的预兆。",
						"french": "Je ne sais pas. Mais c'est assurément un signe de mauvais augure.",
						"spanish": "No lo sé. Pero es sin duda un signo ominoso.",
						"vietnamese": "Ta không biết. Nhưng chắc chắn đó là một điềm báo chẳng lành.",
						"thai": "ข้าไม่รู้ แต่ที่แน่ๆ มันเป็นลางร้าย",
						"hindi": "मैं नहीं जानता। पर यह निश्चित रूप से एक अशुभ संकेत है।"
					}
				},
				{
					"speaker": "character_3",
					"content": {
						"korean": "대체 이곳에 무슨 일이 있었던 거죠?",
						"english": "What in the world happened here?",
						"japanese": "一体ここで何があったんですか？",
						"chinese": "这里到底发生了什么？",
						"french": "Que diable s'est-il passé ici ?",
						"spanish": "¿Qué demonios pasó aquí?",
						"vietnamese": "Rốt cuộc chuyện gì đã xảy ra ở đây vậy?",
						"thai": "เกิดอะไรขึ้นที่นี่กันแน่?",
						"hindi": "आखिर यहाँ क्या हुआ था?"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						5,
						3
					],
					"action": "enter",
					"speaker": "anuk"
				},
				{
					"speaker": "anuk",
					"content": {
						"korean": "이 유적은 오래된 슬픔을 간직하고 있어.",
						"english": "This ruin holds an ancient sorrow.",
						"japanese": "この遺跡は古き悲しみを秘めている。",
						"chinese": "这片遗迹承载着古老的悲伤。",
						"french": "Ces ruines recèlent une ancienne tristesse.",
						"spanish": "Esta ruina guarda una tristeza ancestral.",
						"vietnamese": "Di tích này chứa đựng nỗi buồn cổ xưa.",
						"thai": "ซากปรักหักพังนี้เก็บซ่อนความโศกเศร้าเก่าแก่ไว้",
						"hindi": "यह खंडहर एक प्राचीन दुख समेटे हुए है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "슬픔이요?",
						"english": "Sorrow?",
						"japanese": "悲しみですか？",
						"chinese": "悲伤？",
						"french": "De la tristesse ?",
						"spanish": "¿Tristeza?",
						"vietnamese": "Nỗi buồn ạ?",
						"thai": "ความโศกเศร้าหรือ?",
						"hindi": "दुःख?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "anuk",
					"content": {
						"korean": "그래. 이곳의 전설에 따르면, 깊은 눈보라 속에는 '우는 빛'이 잠들어 있다고 하지.",
						"english": "Yes. Legends here say a 'Weeping Light' slumbers within the deep blizzard.",
						"japanese": "ああ。ここの伝説によれば、深い吹雪の奥には「泣く光」が眠っているという。",
						"chinese": "是的。这里的传说称，在深邃的暴风雪中，沉睡着‘哭泣之光’。",
						"french": "Oui. Les légendes d'ici racontent qu'une « Lumière Pleurante » sommeille au cœur de la tempête.",
						"spanish": "Sí. Las leyendas de aquí dicen que una 'Luz Llorona' duerme en lo profundo de la ventisca.",
						"vietnamese": "Phải. Truyền thuyết nơi đây kể rằng, trong bão tuyết sâu thẳm có một 'Ánh Sáng Khóc Than' đang ngủ say.",
						"thai": "ใช่ ตำนานที่นี่เล่าว่า ท่ามกลางพายุหิมะอันลึกมี 'แสงร่ำไห้' หลับใหลอยู่",
						"hindi": "हाँ। यहाँ की किंवदंतियों के अनुसार, गहरे बर्फीले तूफान में एक 'रोशनी' सोई हुई है।"
					}
				},
				{
					"speaker": "character_2",
					"content": {
						"korean": "'우는 빛'이요? 희망 같은 건가요?",
						"english": "'Weeping Light'? Is it like hope?",
						"japanese": "「泣く光」ですか？希望のようなものですか？",
						"chinese": "‘哭泣之光’？那是一种希望吗？",
						"french": "« Lumière Pleurante » ? Est-ce une sorte d'espoir ?",
						"spanish": "¿'Luz Llorona'? ¿Es como la esperanza?",
						"vietnamese": "'Ánh Sáng Khóc Than' ạ? Nó giống như hy vọng sao?",
						"thai": "'แสงร่ำไห้' หรือ? มันคือความหวังหรือเปล่า?",
						"hindi": "'रोशनी'? क्या यह आशा जैसा कुछ है?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "anuk",
					"content": {
						"korean": "아니. 그것은 희망이 아닌, 갇힌 절규라고들 한다.",
						"english": "No. They say it's not hope, but a trapped scream.",
						"japanese": "いや。それは希望ではなく、囚われた絶叫だという。",
						"chinese": "不。他们说那并非希望，而是被困的绝叫。",
						"french": "Non. On dit que ce n'est pas l'espoir, mais un cri enfermé.",
						"spanish": "No. Dicen que no es esperanza, sino un grito atrapado.",
						"vietnamese": "Không. Họ nói đó không phải hy vọng, mà là tiếng gào thét bị giam cầm.",
						"thai": "ไม่ พวกเขาบอกว่ามันไม่ใช่ความหวัง หากแต่เป็นเสียงกรีดร้องที่ถูกกักขัง",
						"hindi": "नहीं। वे कहते हैं कि यह आशा नहीं, बल्कि एक फँसी हुई चीख है।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_4",
					"content": {
						"korean": "절규…?",
						"english": "Scream...?",
						"japanese": "絶叫…？",
						"chinese": "绝叫……？",
						"french": "Un cri… ?",
						"spanish": "¿Un grito…?",
						"vietnamese": "Tiếng gào thét…?",
						"thai": "เสียงกรีดร้อง...?",
						"hindi": "चीख…?"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "anuk",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						5,
						3
					]
				},
				{
					"speaker": "anuk",
					"content": {
						"korean": "더 깊이 들어갈수록… 이상한 기운이 느껴진다.",
						"english": "The deeper we go... the stranger the aura feels.",
						"japanese": "奥へ進むほど…奇妙な気配を感じる。",
						"chinese": "越往深处走……越能感觉到一股奇怪的气息。",
						"french": "Plus on s'enfonce… plus l'aura est étrange.",
						"spanish": "Cuanto más nos adentramos… más extraña se siente la energía.",
						"vietnamese": "Càng đi sâu… càng cảm thấy một luồng khí lạ.",
						"thai": "ยิ่งลึกเข้าไป... ยิ่งสัมผัสได้ถึงพลังงานประหลาด",
						"hindi": "जितना गहरा हम जाते हैं… उतनी ही अजीब आभा महसूस होती है।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "점점 더 추워지는 것 같아요.",
						"english": "It feels like it's getting colder and colder.",
						"japanese": "だんだん寒くなってきているようです。",
						"chinese": "感觉越来越冷了。",
						"french": "Il fait de plus en plus froid, j'ai l'impression.",
						"spanish": "Parece que hace cada vez más frío.",
						"vietnamese": "Càng lúc càng lạnh thì phải.",
						"thai": "รู้สึกเหมือนอากาศหนาวขึ้นเรื่อยๆ",
						"hindi": "लगता है ठंड बढ़ती जा रही है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "일행은 얼음 동굴 깊숙한 곳에서 알 수 없는 주술 문양이 새겨진 고대 제단을 발견했다.",
						"english": "The party discovered an ancient altar deep within the ice cave, etched with unknown runic patterns.",
						"japanese": "一行は氷の洞窟の奥深くで、未知の呪術文様が刻まれた古代の祭壇を発見した。",
						"chinese": "队伍在冰洞深处发现了一个刻有未知咒术图腾的古老祭坛。",
						"french": "Le groupe découvrit un ancien autel gravé de symboles runiques inconnus, au plus profond de la caverne de glace.",
						"spanish": "El grupo descubrió un antiguo altar en lo profundo de la cueva de hielo, grabado con patrones rúnicos desconocidos.",
						"vietnamese": "Đoàn người phát hiện một bàn thờ cổ trong sâu thẳm hang băng, khắc những hoa văn phép thuật không rõ.",
						"thai": "คณะสำรวจค้นพบแท่นบูชาโบราณที่สลักลวดลายเวทมนตร์ลึกลับในส่วนลึกของถ้ำน้ำแข็ง",
						"hindi": "समूह ने बर्फ की गुफा में गहराई में एक प्राचीन वेदी की खोज की, जिस पर अज्ञात जादुई पैटर्न खुदे हुए थे।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_1",
					"content": {
						"korean": "이건… 제단인가?",
						"english": "This is... an altar?",
						"japanese": "これは…祭壇か？",
						"chinese": "这是……祭坛吗？",
						"french": "C'est… un autel ?",
						"spanish": "¿Esto es… un altar?",
						"vietnamese": "Đây là… một bàn thờ sao?",
						"thai": "นี่มัน...แท่นบูชาหรือ?",
						"hindi": "यह… एक वेदी है?"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "anuk",
					"content": {
						"korean": "누군가의 슬픔을 증폭시키고 결속시키려는 듯한… 불길한 주술이 느껴진다.",
						"english": "An ominous magic... a spell that seems to amplify and bind someone's sorrow, is felt.",
						"japanese": "誰かの悲しみを増幅させ、縛りつけようとする…不吉な呪術を感じる。",
						"chinese": "感觉到了某种不祥的咒术，似乎在放大并束缚着某个人的悲伤。",
						"french": "Je ressens une magie sinistre… comme si elle amplifiait et liait la tristesse de quelqu'un.",
						"spanish": "Siento una magia siniestra... como si quisiera amplificar y atar la tristeza de alguien.",
						"vietnamese": "Một ma thuật đáng ngại... dường như đang khuếch đại và trói buộc nỗi buồn của ai đó, đang được cảm nhận.",
						"thai": "สัมผัสได้ถึงเวทมนตร์อันชั่วร้าย... ที่ดูเหมือนจะขยายและผูกมัดความโศกเศร้าของใครบางคน",
						"hindi": "किसी के दुःख को बढ़ाने और बांधने वाला... एक अशुभ जादू महसूस होता है।"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "돌아갈 수 없게 된 걸까.",
						"english": "Is there no turning back?",
						"japanese": "もう戻れないのか。",
						"chinese": "我们回不去了吗？",
						"french": "Ne pouvons-nous plus faire marche arrière ?",
						"spanish": "¿Ya no hay vuelta atrás?",
						"vietnamese": "Chúng ta không thể quay lại được nữa sao?",
						"thai": "เรากลับไม่ได้แล้วเหรอ?",
						"hindi": "क्या अब हम वापस नहीं जा सकते?"
					}
				}
			]
		},
		{
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "크크… 겨우 이 정도라니. 진짜 절규는 아직 시작도 안 했다.",
						"english": "Heh heh... just this much? The true screams haven't even begun.",
						"japanese": "クク…この程度か。本当の絶叫はまだ始まってすらいない。",
						"chinese": "呵呵…就这点程度吗？真正的绝望还没开始。",
						"french": "Huhu… C'est tout ce que vous avez ? Les véritables cris n'ont même pas encore commencé.",
						"spanish": "Jeje... ¿Solo esto? Los verdaderos gritos ni siquiera han comenzado.",
						"vietnamese": "Khà khà... chỉ có thế thôi sao. Nỗi đau thật sự còn chưa bắt đầu.",
						"thai": "ฮึๆ... แค่นี้เองเหรอ? เสียงกรีดร้องที่แท้จริงยังไม่เริ่มเลย",
						"hindi": "हाहा... बस इतना ही? असली चीखें अभी शुरू भी नहीं हुई हैं।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리야! 끝난 게 아니었어?",
						"english": "What do you mean?! It's not over yet?",
						"japanese": "何を言ってるんだ！ 終わったんじゃなかったのか！？",
						"chinese": "你说什么！还没结束吗？",
						"french": "Qu'est-ce que tu racontes ?! Ce n'était pas fini ?",
						"spanish": "¡¿Qué quieres decir?! ¡¿No había terminado?!",
						"vietnamese": "Ngươi nói gì vậy! Chẳng phải đã kết thúc rồi sao?",
						"thai": "หมายความว่าไง! มันยังไม่จบเหรอ?",
						"hindi": "क्या मतलब है तुम्हारा?! यह खत्म नहीं हुआ था क्या?"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "쓰러진 괴수. 그러나 설원은 여전히 울고 있었다. 아직 찾아야 할 진실이 남아있었다.",
						"english": "The beast fell. Yet the snowfield still wept. A truth remained to be uncovered.",
						"japanese": "倒れた怪獣。しかし雪原は未だ泣いていた。まだ見つけ出すべき真実が残っていた。",
						"chinese": "巨兽倒下了。然而雪原仍在哭泣。还有未被揭示的真相。",
						"french": "La bête tomba. Pourtant, le champ de neige pleurait encore. Une vérité restait à découvrir.",
						"spanish": "La bestia cayó. Pero el campo de nieve aún lloraba. Una verdad por descubrir aún permanecía.",
						"vietnamese": "Quái vật đã gục ngã. Tuy nhiên, cánh đồng tuyết vẫn đang khóc. Một sự thật cần được tìm ra vẫn còn đó.",
						"thai": "สัตว์ประหลาดล้มลง ทว่าลานหิมะยังคงร่ำไห้ ความจริงที่ต้องค้นหายังคงมีอยู่",
						"hindi": "राक्षस गिर गया। फिर भी बर्फ का मैदान अभी भी रो रहा था। एक सच्चाई अभी भी बाकी थी जिसे खोजना था।"
					}
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 나타났다.",
						"english": "A colossal shadow appeared.",
						"japanese": "巨大な影が現れた。",
						"chinese": "一个巨大的影子出现了。",
						"french": "Une ombre gigantesque apparut.",
						"spanish": "Una sombra gigantesca apareció.",
						"vietnamese": "Một cái bóng khổng lồ xuất hiện.",
						"thai": "เงาขนาดยักษ์ปรากฏขึ้น",
						"hindi": "एक विशाल छाया प्रकट हुई।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "감히 여기까지 오다니… 어리석은 인간들.",
						"english": "How dare you come this far... foolish mortals.",
						"japanese": "よくもここまで来たな…愚かな人間どもめ。",
						"chinese": "竟敢来到这里…愚蠢的人类。",
						"french": "Comment osez-vous venir jusqu'ici… stupides mortels.",
						"spanish": "¿Cómo osáis llegar tan lejos… estúpidos mortales?",
						"vietnamese": "Ngươi dám đến tận đây sao... lũ người ngu ngốc.",
						"thai": "กล้าดียังไงมาถึงที่นี่... มนุษย์โง่เขลา",
						"hindi": "तुम्हारी हिम्मत कैसे हुई यहां तक आने की... मूर्ख मनुष्यों।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "네가 이 모든 것의 배후인가!",
						"english": "So you're behind all of this!",
						"japanese": "お前が全ての黒幕か！",
						"chinese": "你就是这一切的幕后黑手吗！",
						"french": "C'est toi le cerveau de tout ça !",
						"spanish": "¡¿Así que tú eres el cerebro de todo esto?!",
						"vietnamese": "Ngươi là kẻ đứng sau tất cả sao!",
						"thai": "แกคือเบื้องหลังของเรื่องทั้งหมดนี่เอง!",
						"hindi": "तो तुम ही हो इन सबके पीछे!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "나약한 슬픔은… 곧 나의 힘이 될 것이다.",
						"english": "Your pathetic sorrow... shall soon become my power.",
						"japanese": "弱き悲しみは…やがて我が力となるだろう。",
						"chinese": "弱小的悲伤…很快就会成为我的力量。",
						"french": "Votre triste chagrin… deviendra bientôt ma puissance.",
						"spanish": "Vuestra patética tristeza... pronto se convertirá en mi poder.",
						"vietnamese": "Nỗi buồn yếu ớt của ngươi... sẽ sớm trở thành sức mạnh của ta.",
						"thai": "ความโศกเศร้าที่อ่อนแอ... จะกลายเป็นพลังของข้าในไม่ช้า",
						"hindi": "तुम्हारी कमजोर उदासी... जल्द ही मेरी शक्ति बन जाएगी।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "얼어붙은 절망 속에서 영원히 갇혀라.",
						"english": "Be forever trapped in frozen despair.",
						"japanese": "凍てつく絶望の中で永遠に囚われろ。",
						"chinese": "永远被困在冰冷的绝望中吧。",
						"french": "Soyez à jamais piégés dans un désespoir glacial.",
						"spanish": "Quedad atrapados para siempre en la desesperación helada.",
						"vietnamese": "Hãy bị giam cầm vĩnh viễn trong nỗi tuyệt vọng băng giá.",
						"thai": "จงถูกจองจำชั่วนิรันดร์ในความสิ้นหวังที่เยือกแข็ง",
						"hindi": "जमे हुए निराशा में हमेशा के लिए फंसे रहो।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "아직… 끝나지 않았어!",
						"english": "It's not over yet!",
						"japanese": "まだ…終わってない！",
						"chinese": "还没…结束！",
						"french": "Ce n'est pas encore… fini !",
						"spanish": "¡Aún no ha… terminado!",
						"vietnamese": "Vẫn… chưa kết thúc!",
						"thai": "ยัง…ไม่จบ!",
						"hindi": "अभी… ख़त्म नहीं हुआ है!"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "후후… 제법이군. 다음에 다시 와봐라.",
						"english": "Heh heh… Not bad. Come back again next time.",
						"japanese": "フフ…なかなかやるな。次にまた来てみろ。",
						"chinese": "呵呵…有点意思。下次再来吧。",
						"french": "Hé hé… Pas mal. Reviens la prochaine fois.",
						"spanish": "Je je… Nada mal. Vuelve la próxima vez.",
						"vietnamese": "Khà khà… Cũng được đấy. Lần sau hãy quay lại.",
						"thai": "ฮ่าฮ่า… ไม่เลวเลยนี่ ครั้งหน้ากลับมาอีกนะ",
						"hindi": "ही ही… बुरा नहीं है। अगली बार फिर आना।"
					}
				}
			]
		}
	]
} as const;
