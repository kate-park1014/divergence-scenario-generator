export const scenario_desert_corvus_23_01 = {
	"scenario_id": "desert_corvus_23_01",
	"order": 1,
	"act": "intro",
	"theme": "desert",
	"actors": {
		"amir": {
			"id": "mon_0096d602-52ab-4a9c-9cc8-4ff18ed3b655",
			"name": {
				"korean": "아미르",
				"english": "Amir",
				"japanese": "アミール",
				"chinese": "阿米尔",
				"french": "Amir",
				"spanish": "Amir",
				"vietnamese": "Amir",
				"thai": "อาเมียร์",
				"hindi": "अमीर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8cd60fb0-3699-44c4-6425-a3e97eec1800/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/b644dc95-9c27-442e-6dc6-73e5550a0200/public"
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
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "모래바람이 지평선을 지웠다. 낯선 마을, 정적만이 감돌았다.",
						"english": "The sandstorm erased the horizon. In a strange village, only silence lingered.",
						"japanese": "砂嵐が地平線を消した。見知らぬ村には、静寂だけが漂っていた。",
						"chinese": "沙尘暴抹去了地平线。陌生的村庄，只有寂静弥漫。",
						"french": "La tempête de sable a effacé l'horizon. Dans un village étrange, seul le silence régnait.",
						"spanish": "La tormenta de arena borró el horizonte. En un pueblo extraño, solo el silencio persistía.",
						"vietnamese": "Cơn bão cát xóa nhòa đường chân trời. Ngôi làng xa lạ, chỉ còn sự tĩnh lặng bao trùm.",
						"thai": "พายุทรายลบเลือนขอบฟ้า หมู่บ้านแปลกตา มีเพียงความเงียบงัน",
						"hindi": "धूल भरी आंधी ने क्षितिज को मिटा दिया। एक अजीब गाँव में, केवल खामोशी छाई हुई थी।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "여기서 뭘 찾아야 하는 거지?",
						"english": "What am I supposed to find here?",
						"japanese": "ここで何を探せばいいんだ？",
						"chinese": "我在这里要找什么？",
						"french": "Que suis-je censé trouver ici ?",
						"spanish": "¿Qué se supone que debo encontrar aquí?",
						"vietnamese": "Mình phải tìm gì ở đây?",
						"thai": "ฉันต้องหาอะไรที่นี่?",
						"hindi": "मुझे यहाँ क्या ढूँढना है?"
					},
					"type": "speech"
				},
				{
					"speaker": "amir",
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이방인인가요? 어쩐지 낯설지 않군요.",
						"english": "A stranger? You seem familiar somehow.",
						"japanese": "異邦人ですか？なぜか見慣れない感じがしませんね。",
						"chinese": "异乡人吗？不知为何，你并不陌生。",
						"french": "Un étranger ? Vous me semblez étrangement familier.",
						"spanish": "¿Un forastero? De alguna manera, no me resultas desconocido.",
						"vietnamese": "Người lạ à? Sao tôi lại thấy quen thuộc nhỉ.",
						"thai": "คนแปลกหน้าหรือ? ทำไมถึงไม่รู้สึกแปลกหน้าเลยล่ะ",
						"hindi": "अजनबी हो? तुम किसी तरह परिचित लगते हो।"
					},
					"speaker": "amir",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "사막 깊은 곳의 소문을 찾아온 겁니까?",
						"english": "Have you come seeking rumors from deep within the desert?",
						"japanese": "砂漠の奥深くの噂を探しに来たのですか？",
						"chinese": "你是来寻找沙漠深处的传闻的吗？",
						"french": "Êtes-vous venu chercher des rumeurs des profondeurs du désert ?",
						"spanish": "¿Has venido buscando rumores de lo más profundo del desierto?",
						"vietnamese": "Anh đến tìm kiếm lời đồn từ sâu trong sa mạc à?",
						"thai": "คุณมาตามหาข่าวลือจากส่วนลึกของทะเลทรายใช่ไหม?",
						"hindi": "क्या तुम रेगिस्तान के गहरे अफवाहों की तलाश में आए हो?"
					},
					"emotion": "base",
					"speaker": "amir"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "…당신은?",
						"english": "...And you are?",
						"japanese": "…あなたは？",
						"chinese": "……你是？",
						"french": "...Et vous êtes ?",
						"spanish": "...¿Y tú eres?",
						"vietnamese": "…Anh là ai?",
						"thai": "...แล้วคุณคือ?",
						"hindi": "...और तुम कौन हो?"
					}
				},
				{
					"emotion": "base",
					"speaker": "amir",
					"content": {
						"korean": "아미르. 그저 이 마을의 늙은 주민이죠.",
						"english": "Amir. Just an old resident of this village.",
						"japanese": "アミール。ただこの村の老いた住民です。",
						"chinese": "阿米尔。只是这个村子的一个老居民。",
						"french": "Amir. Juste un vieil habitant de ce village.",
						"spanish": "Amir. Solo un viejo residente de este pueblo.",
						"vietnamese": "Amir. Chỉ là một cư dân già của ngôi làng này thôi.",
						"thai": "อามีร์ แค่ชาวบ้านเก่าแก่ของหมู่บ้านนี้",
						"hindi": "अमीर। बस इस गाँव का एक बूढ़ा निवासी।"
					},
					"type": "speech"
				},
				{
					"speaker": "amir",
					"emotion": "base",
					"content": {
						"korean": "코르부스에 대해 듣고 온 건가요?",
						"english": "Are you here about Corvus?",
						"japanese": "コルブスについて聞きに来たのか？",
						"chinese": "你是来打听科尔布斯的消息吗？",
						"french": "Venez-vous pour Corvus ?",
						"spanish": "¿Vienes por Corvus?",
						"vietnamese": "Anh đến để nghe về Corvus à?",
						"thai": "คุณมาเพื่อฟังเรื่องคอร์วัสใช่ไหม?",
						"hindi": "क्या तुम कोर्वस के बारे में सुनने आए हो?"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"type": "direction",
					"speaker": "amir",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "코르부스는… 정보를 거래합니다. 불가능한 정보까지도.",
						"english": "Corvus... trades information. Even impossible information.",
						"japanese": "コルブスは…情報を取引する。不可能な情報でさえも。",
						"chinese": "科尔布斯…交易信息。甚至是不可能的信息。",
						"french": "Corvus... échange des informations. Même les informations impossibles.",
						"spanish": "Corvus... negocia con información. Incluso con información imposible.",
						"vietnamese": "Corvus... giao dịch thông tin. Kể cả những thông tin tưởng chừng bất khả thi.",
						"thai": "คอร์วัส... ค้าขายข้อมูล แม้กระทั่งข้อมูลที่เป็นไปไม่ได้",
						"hindi": "कोर्वस... जानकारी का व्यापार करता है। यहां तक कि असंभव जानकारी का भी।"
					},
					"speaker": "amir",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "불가능한 정보라니?",
						"english": "Impossible information?",
						"japanese": "不可能な情報だと？",
						"chinese": "不可能的信息？",
						"french": "Des informations impossibles ?",
						"spanish": "¿Información imposible?",
						"vietnamese": "Thông tin bất khả thi?",
						"thai": "ข้อมูลที่เป็นไปไม่ได้?",
						"hindi": "असंभव जानकारी?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "사라진 자들의 흔적, 아무도 모르는 고대 비밀… 모든 것을 꿰뚫고 있죠.",
						"english": "Traces of the lost, ancient secrets... he knows it all.",
						"japanese": "失われた者の痕跡、誰も知らない古代の秘密…すべてを見通している。",
						"chinese": "失踪者的踪迹，无人知晓的古老秘密…他洞悉一切。",
						"french": "Les traces des disparus, d'anciens secrets que personne ne connaît... il voit tout.",
						"spanish": "Rastros de los desaparecidos, antiguos secretos que nadie conoce... lo sabe todo.",
						"vietnamese": "Dấu vết của những kẻ đã biến mất, những bí mật cổ xưa không ai biết... hắn thấu suốt mọi thứ.",
						"thai": "ร่องรอยของผู้ที่หายสาบสูญ, ความลับโบราณที่ไม่มีใครรู้... เขามองทะลุปรุโปร่งทุกสิ่ง",
						"hindi": "गुमशुदा लोगों के निशान, प्राचीन रहस्य जो कोई नहीं जानता... वह सब कुछ जानता है।"
					},
					"speaker": "amir",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그가 위험하다는 소문도 있던데.",
						"english": "There are rumors he's dangerous.",
						"japanese": "彼が危険だという噂も聞くが。",
						"chinese": "也有传闻说他很危险。",
						"french": "Il y a aussi des rumeurs qu'il est dangereux.",
						"spanish": "También se rumorea que es peligroso.",
						"vietnamese": "Cũng có tin đồn hắn ta nguy hiểm.",
						"thai": "มีข่าวลือว่าเขาอันตรายด้วยนะ",
						"hindi": "यह भी अफवाह है कि वह खतरनाक है।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "amir",
					"emotion": "base",
					"content": {
						"korean": "위험하죠. 하지만 그의 정보는 늘… 진실에 가깝습니다.",
						"english": "He is dangerous. But his information is always... close to the truth.",
						"japanese": "危険だ。だが彼の情報はいつも…真実に近い。",
						"chinese": "他很危险。但他的信息总是…接近真相。",
						"french": "Il est dangereux. Mais ses informations sont toujours... proches de la vérité.",
						"spanish": "Es peligroso. Pero su información siempre está... cerca de la verdad.",
						"vietnamese": "Hắn ta nguy hiểm. Nhưng thông tin của hắn luôn... gần với sự thật.",
						"thai": "เขาน่ะอันตราย แต่ข้อมูลของเขา... มักจะใกล้เคียงความจริงเสมอ",
						"hindi": "वह खतरनाक है। लेकिन उसकी जानकारी हमेशा... सच के करीब होती है।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "amir",
					"content": {
						"korean": "사막에 떠도는 그림자 전설도 그의 입에서 시작됐죠.",
						"english": "Even the desert's Shadow Legend began with him.",
						"japanese": "砂漠に漂う影の伝説も、彼の口から始まったものだ。",
						"chinese": "沙漠中流传的影子传说，也是从他口中传开的。",
						"french": "Même la Légende des Ombres du désert a commencé par lui.",
						"spanish": "Incluso la Leyenda de las Sombras del desierto comenzó por él.",
						"vietnamese": "Ngay cả truyền thuyết Bóng Đêm trôi nổi trên sa mạc cũng bắt nguồn từ miệng hắn.",
						"thai": "แม้แต่ตำนานเงาที่เล่าขานกันในทะเลทรายก็เริ่มต้นจากเขา",
						"hindi": "रेगिस्तान में भटकने वाली छाया की किंवदंती भी उसी के मुंह से शुरू हुई थी।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						3,
						3
					],
					"type": "direction",
					"speaker": "amir",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "사라진 탐험대… 그들도 코르부스를 쫓았죠.",
						"english": "The vanished expedition team... they also pursued Corvus.",
						"japanese": "消えた探検隊…彼らもコルブスを追っていた。",
						"chinese": "失踪的探险队…他们也曾追寻科尔布斯。",
						"french": "L'équipe d'expédition disparue... eux aussi poursuivaient Corvus.",
						"spanish": "La expedición desaparecida... ellos también persiguieron a Corvus.",
						"vietnamese": "Đội thám hiểm đã biến mất... họ cũng từng truy đuổi Corvus.",
						"thai": "ทีมสำรวจที่หายไป... พวกเขาก็ตามล่าคอร์วัสเช่นกัน",
						"hindi": "गुमशुदा अभियान दल... वे भी कोर्वस का पीछा कर रहे थे।"
					},
					"emotion": "sad",
					"speaker": "amir",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "왜 사라진 거야?",
						"english": "Why did they disappear?",
						"japanese": "なぜ消えたんだ？",
						"chinese": "他们为什么消失了？",
						"french": "Pourquoi ont-ils disparu ?",
						"spanish": "¿Por qué desaparecieron?",
						"vietnamese": "Tại sao họ lại biến mất?",
						"thai": "ทำไมพวกเขาถึงหายไป?",
						"hindi": "वे क्यों गायब हो गए?"
					},
					"type": "speech"
				},
				{
					"speaker": "amir",
					"emotion": "base",
					"content": {
						"korean": "코르부스의 정보를 너무 깊이 파고들었을지도 모릅니다.",
						"english": "They might have delved too deep into Corvus's information.",
						"japanese": "コルブスの情報を深く掘り下げすぎたのかもしれない。",
						"chinese": "他们可能深入调查了科尔布斯的信息。",
						"french": "Ils ont peut-être fouillé trop profondément dans les informations de Corvus.",
						"spanish": "Puede que se adentraran demasiado en la información de Corvus.",
						"vietnamese": "Có lẽ họ đã đào sâu quá mức vào thông tin của Corvus.",
						"thai": "พวกเขาอาจจะเจาะลึกข้อมูลของคอร์วัสมากเกินไป",
						"hindi": "शायद उन्होंने कोर्वस की जानकारी में बहुत गहराई से खुदाई की होगी।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "amir",
					"emotion": "base",
					"content": {
						"korean": "하지만 그 정보가… 너무나 달콤했겠죠.",
						"english": "But that information... it must have been so tempting.",
						"japanese": "ですが、その情報… とても甘美だったのでしょう。",
						"chinese": "但是那个信息……一定太诱人了。",
						"french": "Mais cette information... elle devait être si alléchante.",
						"spanish": "Pero esa información... debió ser demasiado tentadora.",
						"vietnamese": "Nhưng thông tin đó... chắc hẳn rất ngọt ngào.",
						"thai": "แต่ข้อมูลนั้น... คงจะหอมหวานเสียเหลือเกิน",
						"hindi": "लेकिन वह जानकारी... बहुत लुभावनी रही होगी।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "그래서 조심하라는 말인가?",
						"english": "So, you're telling me to be careful?",
						"japanese": "それで、気をつけろと？",
						"chinese": "所以，你是让我小心吗？",
						"french": "Alors, tu me dis d'être prudent ?",
						"spanish": "¿Así que me dices que tenga cuidado?",
						"vietnamese": "Vậy là cậu bảo tôi phải cẩn thận sao?",
						"thai": "งั้นก็บอกให้ระวังงั้นสิ?",
						"hindi": "तो, तुम मुझे सावधान रहने को कह रहे हो?"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "amir",
					"content": {
						"korean": "네. 당신도… 조심해야 합니다.",
						"english": "Yes. You too... must be careful.",
						"japanese": "はい。あなたも… 気をつけなければなりません。",
						"chinese": "是的。你也要……小心。",
						"french": "Oui. Vous aussi... vous devez être prudent.",
						"spanish": "Sí. Usted también... debe tener cuidado.",
						"vietnamese": "Vâng. Ngài cũng... phải cẩn thận.",
						"thai": "ใช่ คุณเองก็... ต้องระวังด้วย",
						"hindi": "हाँ। तुम्हें भी... सावधान रहना होगा।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "아미르의 경고는 진심처럼 들렸다. 하지만 어딘가 불안했다.",
						"english": "Amir's warning sounded genuine. But something felt uneasy.",
						"japanese": "アミールの警告は本心から出ているように聞こえた。だが、どこか不安が残った。",
						"chinese": "阿米尔的警告听起来很真诚。但总觉得有些不安。",
						"french": "L'avertissement d'Amir semblait sincère. Mais quelque chose me mettait mal à l'aise.",
						"spanish": "La advertencia de Amir sonó sincera. Pero algo me inquietaba.",
						"vietnamese": "Lời cảnh báo của Amir nghe có vẻ thật lòng. Nhưng tôi vẫn thấy bất an.",
						"thai": "คำเตือนของอาเมียร์ฟังดูจริงใจ แต่ก็ยังรู้สึกไม่สบายใจบางอย่าง",
						"hindi": "अमीर की चेतावनी सच्ची लगी। लेकिन कहीं-न-कहीं बेचैनी थी।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"type": "direction",
					"speaker": "amir",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "amir",
					"emotion": "base",
					"content": {
						"korean": "사막은 모든 것을 삼킵니다. 진실도, 거짓도.",
						"english": "The desert swallows everything. Truth, and lies.",
						"japanese": "砂漠はすべてを飲み込む。真実も、嘘も。",
						"chinese": "沙漠吞噬一切。无论是真相，还是谎言。",
						"french": "Le désert engloutit tout. La vérité comme le mensonge.",
						"spanish": "El desierto lo traga todo. La verdad y la mentira.",
						"vietnamese": "Sa mạc nuốt chửng mọi thứ. Cả sự thật lẫn dối trá.",
						"thai": "ทะเลทรายกลืนกินทุกสิ่ง ทั้งความจริงและความเท็จ",
						"hindi": "रेगिस्तान सब कुछ निगल जाता है। सच भी, झूठ भी।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "내가 뭘 믿어야 해?",
						"english": "What am I supposed to believe?",
						"japanese": "何を信じればいい？",
						"chinese": "我该相信什么？",
						"french": "Que dois-je croire ?",
						"spanish": "¿Qué debo creer?",
						"vietnamese": "Tôi nên tin vào điều gì?",
						"thai": "ฉันควรจะเชื่ออะไรดี?",
						"hindi": "मुझे क्या मानना चाहिए?"
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "당신이 원하는 것을 믿어야죠.",
						"english": "You should believe what you want to believe.",
						"japanese": "あなたが信じたいものを信じればいい。",
						"chinese": "你应该相信你所想相信的。",
						"french": "Vous devriez croire ce que vous voulez croire.",
						"spanish": "Deberías creer lo que quieras creer.",
						"vietnamese": "Ngài nên tin vào điều ngài muốn.",
						"thai": "คุณควรจะเชื่อในสิ่งที่คุณอยากจะเชื่อ",
						"hindi": "तुम्हें वही मानना चाहिए जो तुम चाहते हो।"
					},
					"speaker": "amir",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "하지만… 당신의 발자국은 이미 모래에 새겨졌습니다.",
						"english": "But... your footsteps are already etched in the sand.",
						"japanese": "しかし… あなたの足跡はすでに砂に刻まれている。",
						"chinese": "但是……你的足迹已经刻在了沙中。",
						"french": "Mais... vos pas sont déjà gravés dans le sable.",
						"spanish": "Pero... tus huellas ya están grabadas en la arena.",
						"vietnamese": "Nhưng... dấu chân của ngài đã in hằn trên cát rồi.",
						"thai": "แต่... รอยเท้าของคุณถูกสลักลงบนผืนทรายแล้ว",
						"hindi": "लेकिन... तुम्हारे पैरों के निशान पहले ही रेत में अंकित हो चुके हैं।"
					},
					"emotion": "base",
					"speaker": "amir"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "….",
						"english": "...",
						"japanese": "…。",
						"chinese": "……",
						"french": "...",
						"spanish": "...",
						"vietnamese": "...",
						"thai": "...",
						"hindi": "..."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "amir",
					"emotion": "base",
					"content": {
						"korean": "이제 돌아갈 수 없을 겁니다. 코르부스는 기다리고 있으니.",
						"english": "There's no turning back now. Corvus is waiting.",
						"japanese": "もう引き返せないだろう。コルヴスが待っているからな。",
						"chinese": "现在已经无法回头了。科尔布斯正在等着。",
						"french": "Il n'y a plus de retour possible. Corvus attend.",
						"spanish": "Ya no podrás volver atrás. Corvus te espera.",
						"vietnamese": "Ngài sẽ không thể quay lại nữa đâu. Corvus đang đợi đấy.",
						"thai": "ตอนนี้คุณกลับไปไม่ได้แล้ว คอร์วัสกำลังรออยู่",
						"hindi": "अब तुम वापस नहीं जा सकते। कोरवस इंतजार कर रहा है।"
					}
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "정체 모를 그림자의 공격에, 모든 것이 모래에 파묻혔다.",
						"english": "Attacked by an unknown shadow, everything was buried in sand.",
						"japanese": "正体不明の影の攻撃により、すべてが砂に埋もれた。",
						"chinese": "在不明身影的攻击下，一切都被沙尘掩埋。",
						"french": "Attaqués par une ombre inconnue, tout fut enseveli sous le sable.",
						"spanish": "Atacados por una sombra desconocida, todo quedó sepultado en la arena.",
						"vietnamese": "Bị tấn công bởi một bóng tối không rõ danh tính, mọi thứ bị chôn vùi trong cát.",
						"thai": "จากการโจมตีของเงาปริศนา ทุกสิ่งถูกฝังกลบในผืนทราย.",
						"hindi": "एक अज्ञात छाया के हमले से, सब कुछ रेत में दब गया।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "모래는… 탐욕스러운 자들을… 삼킨다…",
						"english": "The sand... devours... the greedy...",
						"japanese": "砂は…貪欲な者たちを…飲み込む…",
						"chinese": "沙子…吞噬着…贪婪之人…",
						"french": "Le sable… dévore… les cupides…",
						"spanish": "La arena... devora... a los codiciosos...",
						"vietnamese": "Cát... nuốt chửng... những kẻ tham lam...",
						"thai": "ผืนทราย... กลืนกิน... ผู้โลภมาก...",
						"hindi": "रेत... निगल जाती है... लालची लोगों को..."
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "…아직 끝나지 않았어!",
						"english": "...It's not over yet!",
						"japanese": "…まだ終わってない！",
						"chinese": "…还没结束！",
						"french": "...Ce n'est pas encore fini !",
						"spanish": "¡...Todavía no ha terminado!",
						"vietnamese": "...Chưa kết thúc đâu!",
						"thai": "...ยังไม่จบ!",
						"hindi": "...अभी खत्म नहीं हुआ है!"
					},
					"type": "speech"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "amir",
					"spot": [
						4,
						3
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "안타깝군요. 하지만 사막은… 기다려주지 않습니다.",
						"english": "A pity. But the desert... waits for no one.",
						"japanese": "残念ですね。しかし砂漠は…待ってくれません。",
						"chinese": "真遗憾。但沙漠…不会等待。",
						"french": "Dommage. Mais le désert… n'attend personne.",
						"spanish": "Qué lástima. Pero el desierto... no espera a nadie.",
						"vietnamese": "Thật đáng tiếc. Nhưng sa mạc... không chờ đợi ai cả.",
						"thai": "น่าเสียดาย. แต่ทะเลทราย... ไม่รอใคร.",
						"hindi": "अफसोस है। लेकिन रेगिस्तान... किसी का इंतजार नहीं करता।"
					},
					"speaker": "amir",
					"emotion": "sad",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "모래 폭풍이 걷히자, 정체 모를 그림자는 쓰러졌다.",
						"english": "As the sandstorm cleared, the enigmatic shadow fell.",
						"japanese": "砂嵐が晴れると、正体不明の影は倒れていた。",
						"chinese": "沙尘暴散去，神秘的影子倒下了。",
						"french": "La tempête de sable se dissipa, et l'ombre énigmatique s'effondra.",
						"spanish": "Al disiparse la tormenta de arena, la enigmática sombra cayó.",
						"vietnamese": "Khi bão cát tan đi, bóng đen bí ẩn đã ngã xuống.",
						"thai": "เมื่อพายุทรายสงบลง เงาลึกลับก็ล้มลง",
						"hindi": "जैसे ही रेत का तूफ़ान छँटा, रहस्यमयी परछाई गिर गई।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "크크… 겨우 시작일 뿐… 모래는… 모든 것을 기억한다…",
						"english": "Heh... This is just the beginning... The sand... remembers everything...",
						"japanese": "クク…まだ始まりに過ぎぬ…砂は…全てを記憶している…",
						"chinese": "呵呵…这只是开始…沙子…记住了一切…",
						"french": "Heh... Ce n'est que le début... Le sable... se souvient de tout...",
						"spanish": "Jeje... Esto es solo el principio... La arena... lo recuerda todo...",
						"vietnamese": "Khà khà... Đây mới chỉ là bắt đầu... Cát... ghi nhớ tất cả...",
						"thai": "ฮึๆ... นี่เป็นแค่จุดเริ่มต้น... ผืนทราย... จดจำทุกสิ่ง...",
						"hindi": "हँसते हुए... यह तो बस शुरुआत है... रेत... सब कुछ याद रखती है..."
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "무슨 소리야!",
						"english": "What are you talking about?!",
						"japanese": "何を言っているんだ！",
						"chinese": "你在说什么？！",
						"french": "De quoi parlez-vous !",
						"spanish": "¡¿Qué estás diciendo?!",
						"vietnamese": "Ngươi đang nói gì vậy?!",
						"thai": "เจ้าพูดอะไรน่ะ!",
						"hindi": "क्या कह रहे हो!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "direction",
					"spot": [
						3,
						3
					],
					"speaker": "amir",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "amir",
					"content": {
						"korean": "이런… 강한 분이셨군요. 조심하라고 했는데.",
						"english": "Oh... you were strong. I told them to be careful.",
						"japanese": "くっ…強者でしたか。気をつけろと言ったのに。",
						"chinese": "哎呀…真是个强者。我明明提醒过要小心了。",
						"french": "Oh... vous étiez fort. Je leur avais pourtant dit d'être prudents.",
						"spanish": "Vaya... eras fuerte. Les dije que tuvieran cuidado.",
						"vietnamese": "Chà... Ngươi thật mạnh. Ta đã bảo họ phải cẩn thận rồi mà.",
						"thai": "โอ้... แข็งแกร่งนี่นา ข้าบอกให้ระวังแล้วเชียว",
						"hindi": "अरे... तुम तो बहुत मज़बूत निकले। मैंने उनसे सावधान रहने को कहा था।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "당신… 뭘 알고 있는 거지?",
						"english": "You... what do you know?",
						"japanese": "あなた…何を知っているの？",
						"chinese": "你…你知道些什么？",
						"french": "Vous… qu'est-ce que vous savez ?",
						"spanish": "Tú... ¿qué sabes?",
						"vietnamese": "Ngươi... ngươi biết gì?",
						"thai": "ท่าน... ท่านรู้อะไร?",
						"hindi": "तुम... क्या जानते हो?"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "amir",
					"content": {
						"korean": "전 그저… 지켜볼 뿐입니다. 당신의 다음 발자국을.",
						"english": "I merely... observe. Your next step.",
						"japanese": "私はただ…見守るだけです。あなたの次の一歩を。",
						"chinese": "我只是…静观其变。你的下一步。",
						"french": "Je me contente… d'observer. Votre prochain pas.",
						"spanish": "Yo solo... observo. Tu próximo paso.",
						"vietnamese": "Tôi chỉ... quan sát. Bước chân tiếp theo của người.",
						"thai": "ข้าเพียงแค่... เฝ้ามอง. ก้าวต่อไปของท่าน.",
						"hindi": "मैं बस... देखता हूँ। तुम्हारा अगला कदम।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "쓰러진 그림자의 속삭임과 아미르의 미소. 사막의 진실은 아직 멀었다.",
						"english": "Whispers of the fallen shadow and Amir's smile. The desert's truth is still far off.",
						"japanese": "倒れた影のささやきとアミールの微笑み。砂漠の真実はまだ遠い。",
						"chinese": "倒下之影的低语与阿米尔的微笑。沙漠的真相仍遥远。",
						"french": "Les murmures de l'ombre tombée et le sourire d'Amir. La vérité du désert est encore loin.",
						"spanish": "Los susurros de la sombra caída y la sonrisa de Amir. La verdad del desierto aún está lejos.",
						"vietnamese": "Lời thì thầm của bóng tối ngã xuống và nụ cười của Amir. Sự thật về sa mạc vẫn còn xa.",
						"thai": "เสียงกระซิบของเงาที่ล้มลงและรอยยิ้มของอามีร์. ความจริงของทะเลทรายยังอีกไกล.",
						"hindi": "गिरी हुई छाया की फुसफुसाहट और अमीर की मुस्कान। रेगिस्तान का सच अभी दूर है।"
					},
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "거대한 모래 폭풍이 몰아쳤다. 그 안에서 어렴풋한 형체가 나타났다.",
						"english": "A colossal sandstorm raged. Within it, a faint figure emerged.",
						"japanese": "巨大な砂嵐が吹き荒れた。その中からおぼろげな姿が現れた。",
						"chinese": "巨大的沙尘暴肆虐。一个模糊的身影从中浮现。",
						"french": "Une tempête de sable colossale faisait rage. En son sein, une silhouette indistincte apparut.",
						"spanish": "Una tormenta de arena colosal rugió. De su interior, una figura tenue emergió.",
						"vietnamese": "Một cơn bão cát khổng lồ quét qua. Một hình thể mờ ảo xuất hiện từ trong đó.",
						"thai": "พายุทรายลูกมหึมากระหน่ำซัด ภายในนั้น ร่างเลือนรางได้ปรากฏขึ้น",
						"hindi": "एक विशाल रेतीला तूफ़ान आया। उसके भीतर, एक धुंधली आकृति उभरी।"
					},
					"type": "speech"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						3
					],
					"speaker": "amir"
				},
				{
					"content": {
						"korean": "왔군요. {random_boss}가 당신을 기다리고 있었습니다.",
						"english": "You've arrived. {random_boss} was waiting for you.",
						"japanese": "来ましたね。{random_boss}がお待ちしておりました。",
						"chinese": "你来了。{random_boss}一直在等你。",
						"french": "Vous êtes arrivé. {random_boss} vous attendait.",
						"spanish": "Has llegado. {random_boss} te estaba esperando.",
						"vietnamese": "Ngươi đã đến. {random_boss} đã đợi ngươi rồi.",
						"thai": "มาแล้วสินะ {random_boss} เฝ้ารอเจ้าอยู่",
						"hindi": "तुम आ गए। {random_boss} तुम्हारा इंतज़ार कर रहा था।"
					},
					"speaker": "amir",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "{random_boss}? 그게 누구야!",
						"english": "{random_boss}? Who's that?!",
						"japanese": "{random_boss}？誰だそいつは！",
						"chinese": "{random_boss}？那是什么人？！",
						"french": "{random_boss} ? C'est qui ça !",
						"spanish": "¿{random_boss}? ¡¿Quién es ese?!",
						"vietnamese": "{random_boss}? Đó là ai?!",
						"thai": "{random_boss}? นั่นใครกัน!",
						"hindi": "{random_boss}? वह कौन है!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "내 영역에 발을 들인 어리석은 자여.",
						"english": "Fool, for stepping into my domain.",
						"japanese": "我が領域に足を踏み入れた愚か者め。",
						"chinese": "愚蠢之人，竟敢踏入我的领地。",
						"french": "Imbécile, d'avoir osé poser le pied sur mon domaine.",
						"spanish": "Necio, por haber pisado mi dominio.",
						"vietnamese": "Kẻ ngu ngốc dám đặt chân vào lãnh địa của ta.",
						"thai": "เจ้าคนโง่ที่ย่างกรายเข้ามาในอาณาเขตของข้า",
						"hindi": "मूर्ख, मेरे क्षेत्र में कदम रखने की हिम्मत की।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "모래 속에 모든 것을 묻어주마.",
						"english": "I shall bury everything in the sand.",
						"japanese": "全てを砂の中に埋めてやろう。",
						"chinese": "我会把一切都埋葬在沙子里。",
						"french": "Je vais tout ensevelir sous le sable.",
						"spanish": "Lo sepultaré todo en la arena.",
						"vietnamese": "Ta sẽ chôn vùi tất cả vào trong cát.",
						"thai": "ข้าจะฝังทุกสิ่งไว้ใต้ผืนทราย",
						"hindi": "मैं सब कुछ रेत में दफ़न कर दूँगा।"
					},
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "피할 수 없어!",
						"english": "There's no escaping!",
						"japanese": "逃れることはできない！",
						"chinese": "无处可逃！",
						"french": "Impossible d'échapper !",
						"spanish": "¡No hay escape!",
						"vietnamese": "Không thể thoát được!",
						"thai": "หนีไม่พ้นหรอก!",
						"hindi": "बच नहीं सकते!"
					},
					"type": "speech"
				},
				{
					"duration_ms": 400,
					"action": "exit",
					"direction": "up",
					"speaker": "amir",
					"type": "direction"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"모래바람이 지평선을 지웠다. 발자국조차 삼키는 사막.",
			"이곳에선 모든 소문이 진실이 된다.",
			"사라진 탐험대, 불가능한 정보를 거래하는 그림자 상인, 그리고 믿을 수 없는 속삭임.",
			"이 모든 불길한 예감은, 거대한 공포의 서막이었다."
		],
		"english": [
			"The sandstorm erased the horizon. A desert that swallows even footprints.",
			"Here, every rumor becomes truth.",
			"A vanished expedition, shadow merchants trading impossible information, and unbelievable whispers.",
			"All these ominous premonitions were merely the prelude to a great terror."
		],
		"japanese": [
			"砂嵐が地平線を消した。足跡さえ飲み込む砂漠。",
			"ここでは、すべての噂が真実となる。",
			"消えた探検隊、不可能な情報を取引する影の商人、そして信じられない囁き。",
			"これらすべての不吉な予感は、巨大な恐怖の序幕に過ぎなかった。"
		],
		"chinese": [
			"沙尘暴抹去了地平线。连足迹都被吞噬的沙漠。",
			"在这里，所有谣言都将成为真相。",
			"消失的探险队，交易着不可能情报的影子商人，以及难以置信的低语。",
			"所有这些不祥的预感，都只是巨大恐怖的序幕。"
		],
		"french": [
			"La tempête de sable a effacé l'horizon. Un désert qui engloutit même les empreintes de pas.",
			"Ici, chaque rumeur devient vérité.",
			"Une expédition disparue, des marchands de l'ombre échangeant des informations impossibles, et des murmures incroyables.",
			"Toutes ces prémonitions sinistres n'étaient que le prélude d'une terreur immense."
		],
		"spanish": [
			"La tormenta de arena borró el horizonte. Un desierto que devora incluso las huellas.",
			"Aquí, cada rumor se convierte en verdad.",
			"Una expedición desaparecida, comerciantes en la sombra que intercambian información imposible, y susurros increíbles.",
			"Todas estas ominosas premoniciones fueron solo el preludio de un gran terror."
		],
		"vietnamese": [
			"Cơn bão cát xóa nhòa đường chân trời. Sa mạc nuốt chửng cả dấu chân.",
			"Ở đây, mọi lời đồn đều trở thành sự thật.",
			"Đoàn thám hiểm mất tích, những thương nhân bóng tối giao dịch thông tin bất khả thi, và những lời thì thầm khó tin.",
			"Mọi điềm báo đáng ngại này, chỉ là khúc dạo đầu cho một nỗi kinh hoàng lớn."
		],
		"thai": [
			"พายุทรายลบเลือนขอบฟ้า ทะเลทรายที่กลืนกินแม้กระทั่งรอยเท้า",
			"ที่นี่ ทุกข่าวลือกลายเป็นความจริง",
			"คณะสำรวจที่หายไป, พ่อค้าเงาที่ค้าขายข้อมูลที่เป็นไปไม่ได้, และเสียงกระซิบที่เหลือเชื่อ",
			"ลางสังหรณ์อันน่าสะพรึงกลัวทั้งหมดนี้ เป็นเพียงบทโหมโรงของความสยองขวัญอันยิ่งใหญ่"
		],
		"hindi": [
			"धूल भरी आंधी ने क्षितिज को मिटा दिया। एक रेगिस्तान जो पदचिह्नों को भी निगल जाता है।",
			"यहाँ, हर अफवाह सच हो जाती है।",
			"एक गायब अभियान दल, असंभव जानकारी का व्यापार करने वाले छाया व्यापारी, और अविश्वसनीय फुसफुसाहटें।",
			"ये सभी अशुभ पूर्वाभास, एक बड़े आतंक की प्रस्तावना मात्र थे।"
		]
	}
} as const;
