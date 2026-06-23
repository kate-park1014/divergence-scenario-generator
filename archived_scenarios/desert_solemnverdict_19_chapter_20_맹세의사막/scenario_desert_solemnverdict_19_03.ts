export const scenario_desert_solemnverdict_19_03 = {
	"scenario_id": "desert_solemnverdict_19_03",
	"order": 3,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"ember": {
			"id": "mon_9845a5c0-e558-41cc-979d-91567cb41aa7",
			"name": {
				"korean": "앰버",
				"english": "Ember",
				"japanese": "エンバー",
				"chinese": "余烬",
				"french": "Braise",
				"spanish": "Ascua",
				"vietnamese": "Tàn lửa",
				"thai": "เอมเบอร์",
				"hindi": "अंगारा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/10e60a4c-5b9a-4f2a-a55a-707c0beabe00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5dd50017-3c98-41b2-c8d2-e3e4659ca700/public"
		},
		"ferro": {
			"name": {
				"korean": "페로",
				"english": "Ferro",
				"japanese": "フェロ",
				"chinese": "费罗",
				"french": "Ferro",
				"spanish": "Ferro",
				"vietnamese": "Ferro",
				"thai": "เฟอร์โร",
				"hindi": "फेरो"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a3074391-6f80-4537-3ad2-d4347b9d5500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a3c6cecf-f0c6-42f7-cda1-ddf11348ad00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"사막. 모래시계의 저주가 붉은 땅을 지배했다.",
			"부족의 젊은 지도자, 앰버. 전통만이 살 길이라 맹신했다.",
			"하지만 진실은 모래바람처럼 휘몰아쳐 왔다.",
			"거짓된 평화의 균열. 이제 모든 것이 흔들릴 시간."
		],
		"english": [
			"Desert. The Curse of the Hourglass dominated the red land.",
			"Amber, the tribe's young leader. Believed tradition was the only way to survive.",
			"But the truth swept in like a sandstorm.",
			"A crack in false peace. Now, it's time for everything to waver."
		],
		"japanese": [
			"砂漠。砂時計の呪いが赤い大地を支配した。",
			"部族の若き指導者、アンバー。伝統こそが生きる道だと盲信した。",
			"しかし真実は砂嵐のように押し寄せた。",
			"偽りの平和に亀裂が。今、すべてが揺らぐ時が来た。"
		],
		"chinese": [
			"沙漠。沙漏的诅咒统治着这片红色土地。",
			"部落的年轻领袖，安柏。她坚信传统是唯一的出路。",
			"然而真相却如沙尘暴般席卷而来。",
			"虚假和平的裂痕。现在，一切都将动摇。"
		],
		"french": [
			"Désert. La malédiction du sablier a dominé la terre rouge.",
			"Amber, la jeune cheffe de la tribu. Elle croyait aveuglément que la tradition était la seule voie.",
			"Mais la vérité a déferlé comme une tempête de sable.",
			"Une fissure dans la fausse paix. Il est temps que tout vacille."
		],
		"spanish": [
			"Desierto. La maldición del reloj de arena dominó la tierra roja.",
			"Amber, la joven líder de la tribu. Creyó ciegamente que la tradición era el único camino.",
			"Pero la verdad llegó como una tormenta de arena.",
			"Una grieta en la falsa paz. Ahora es el momento de que todo se tambalee."
		],
		"vietnamese": [
			"Sa mạc. Lời nguyền của đồng hồ cát đã thống trị vùng đất đỏ.",
			"Amber, thủ lĩnh trẻ của bộ lạc. Cô tin rằng truyền thống là con đường sống duy nhất.",
			"Nhưng sự thật ập đến như một cơn bão cát.",
			"Một vết nứt trong hòa bình giả tạo. Bây giờ, đã đến lúc mọi thứ lung lay."
		],
		"thai": [
			"ทะเลทราย คำสาปแห่งนาฬิกาทรายครอบงำดินแดนสีแดง",
			"แอมเบอร์ ผู้นำหนุ่มของเผ่า เชื่อมั่นว่าประเพณีคือหนทางเดียวที่จะอยู่รอด",
			"แต่ความจริงพัดกระหน่ำเข้ามาเหมือนพายุทราย",
			"รอยร้าวในสันติภาพจอมปลอม ถึงเวลาที่ทุกสิ่งจะสั่นคลอน"
		],
		"hindi": [
			"रेगिस्तान। रेतघड़ी का अभिशाप लाल भूमि पर हावी था।",
			"जनजाति की युवा नेता, एम्बर। उसे विश्वास था कि परंपरा ही जीवित रहने का एकमात्र रास्ता है।",
			"लेकिन सच्चाई रेत के तूफान की तरह उमड़ पड़ी।",
			"झूठी शांति में दरार। अब, हर चीज़ के डगमगाने का समय आ गया है।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"action": "enter",
					"type": "direction",
					"speaker": "ember"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이방인들이여, 모래시계의 평화를 존중하라.",
						"english": "Strangers, respect the peace of the hourglass.",
						"japanese": "異邦人よ、砂時計の平和を尊重せよ。",
						"chinese": "陌生人，请尊重沙漏的和平。",
						"french": "Étrangers, respectez la paix du sablier.",
						"spanish": "Extranjeros, respetad la paz del reloj de arena.",
						"vietnamese": "Hỡi những kẻ lạ mặt, hãy tôn trọng hòa bình của đồng hồ cát.",
						"thai": "คนแปลกหน้าเอ๋ย จงเคารพสันติภาพแห่งนาฬิกาทราย",
						"hindi": "अजनबियों, रेतघड़ी की शांति का सम्मान करो।"
					},
					"speaker": "ember",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "평화? 거짓된 침묵일 뿐.",
						"english": "Peace? Just a false silence.",
						"japanese": "平和？それは偽りの沈黙に過ぎない。",
						"chinese": "和平？那不过是虚假的沉默。",
						"french": "La paix ? Ce n'est qu'un faux silence.",
						"spanish": "¿Paz? Solo un falso silencio.",
						"vietnamese": "Hòa bình ư? Chỉ là một sự im lặng giả dối.",
						"thai": "สันติภาพ? เป็นเพียงความเงียบงันจอมปลอม",
						"hindi": "शांति? बस एक झूठी चुप्पी।"
					},
					"type": "speech",
					"speaker": "ferro"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "우린 진실을 찾으러 왔다.",
						"english": "We came to find the truth.",
						"japanese": "我々は真実を求めて来た。",
						"chinese": "我们是来寻找真相的。",
						"french": "Nous sommes venus chercher la vérité.",
						"spanish": "Vinimos a buscar la verdad.",
						"vietnamese": "Chúng tôi đến để tìm kiếm sự thật.",
						"thai": "เรามาเพื่อค้นหาความจริง",
						"hindi": "हम सच खोजने आए हैं।"
					},
					"emotion": "base"
				},
				{
					"speaker": "ember",
					"content": {
						"korean": "전통을 거스르는 자, 대가를 치르리라.",
						"english": "Those who defy tradition will pay the price.",
						"japanese": "伝統に逆らう者、代償を支払うことになるだろう。",
						"chinese": "违背传统者，必将付出代价。",
						"french": "Ceux qui défient la tradition en paieront le prix.",
						"spanish": "Quienes desafíen la tradición pagarán el precio.",
						"vietnamese": "Kẻ nào chống lại truyền thống sẽ phải trả giá.",
						"thai": "ผู้ที่ฝ่าฝืนประเพณีจะต้องชดใช้",
						"hindi": "जो परंपरा का उल्लंघन करेगा, उसे कीमत चुकानी पड़ेगी।"
					},
					"type": "speech",
					"emotion": "angry"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "ember",
					"type": "direction",
					"action": "enter",
					"spot": [
						5,
						2
					],
					"duration_ms": 500
				},
				{
					"speaker": "ferro",
					"content": {
						"korean": "이 지도를 봐. 아슈르가 준 거야.",
						"english": "Look at this map. Ashur gave it to me.",
						"japanese": "この地図を見て。アシュルがくれたんだ。",
						"chinese": "看这张地图。是阿什尔给我的。",
						"french": "Regarde cette carte. Ashur me l'a donnée.",
						"spanish": "Mira este mapa. Me lo dio Ashur.",
						"vietnamese": "Nhìn bản đồ này đi. Ashur đã đưa nó cho tôi.",
						"thai": "ดูแผนที่นี่สิ อาชูร์ให้มา",
						"hindi": "इस नक्शे को देखो। यह आशुर ने दिया है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "특정 구역만 이상하게 강조되어 있어.",
						"english": "Only certain areas are strangely highlighted.",
						"japanese": "特定の区域だけが妙に強調されている。",
						"chinese": "只有某些区域被奇怪地强调了。",
						"french": "Seules certaines zones sont étrangement mises en évidence.",
						"spanish": "Solo ciertas áreas están extrañamente resaltadas.",
						"vietnamese": "Chỉ một số khu vực nhất định được tô sáng một cách kỳ lạ.",
						"thai": "มีเพียงบางพื้นที่เท่านั้นที่ถูกเน้นอย่างแปลกๆ",
						"hindi": "केवल कुछ विशेष क्षेत्रों को अजीब तरह से उजागर किया गया है।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "ember",
					"content": {
						"korean": "수호자의 지도는 완벽하다. 착각이다.",
						"english": "The Guardian's map is perfect. That's a delusion.",
						"japanese": "守護者の地図は完璧だ。錯覚だ。",
						"chinese": "守护者的地图是完美的。那是错觉。",
						"french": "La carte du Gardien est parfaite. C'est une illusion.",
						"spanish": "El mapa del Guardián es perfecto. Es una ilusión.",
						"vietnamese": "Bản đồ của Hộ Vệ là hoàn hảo. Đó là một ảo ảnh.",
						"thai": "แผนที่ของผู้พิทักษ์สมบูรณ์แบบ มันเป็นภาพลวงตา",
						"hindi": "संरक्षक का नक्शा एकदम सही है। यह एक भ्रम है।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "정말 그럴까? 뭔가 숨기는 게 분명해.",
						"english": "Is that true? They're definitely hiding something.",
						"japanese": "本当か？何か隠しているはずだ。",
						"chinese": "真的吗？他们肯定藏着什么。",
						"french": "Vraiment ? Ils cachent clairement quelque chose.",
						"spanish": "¿De verdad? Definitivamente están ocultando algo.",
						"vietnamese": "Thật sao? Chắc chắn có gì đó đang bị che giấu.",
						"thai": "จริงหรือ? พวกเขาต้องซ่อนอะไรบางอย่างอยู่แน่ๆ",
						"hindi": "क्या यह सच है? वे निश्चित रूप से कुछ छिपा रहे हैं।"
					},
					"type": "speech",
					"speaker": "ferro",
					"emotion": "sad"
				},
				{
					"speaker": "ember",
					"type": "speech",
					"content": {
						"korean": "….",
						"english": "...",
						"japanese": "…。",
						"chinese": "...",
						"french": "...",
						"spanish": "...",
						"vietnamese": "...",
						"thai": "...",
						"hindi": "..."
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "ember",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						5,
						2
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "수호자들은 죄를 만들고, 심판으로 공포를 심었다.",
						"english": "The Guardians created sins, implanting fear through judgment.",
						"japanese": "守護者たちは罪をでっち上げ、審判で恐怖を植え付けた。",
						"chinese": "守护者们制造罪孽，通过审判散布恐惧。",
						"french": "Les Gardiens ont créé des péchés et semé la terreur par le jugement.",
						"spanish": "Los Guardianes crearon pecados e infundieron miedo a través del juicio.",
						"vietnamese": "Các Hộ Vệ đã tạo ra tội lỗi và gieo rắc nỗi sợ hãi bằng phán xét.",
						"thai": "ผู้พิทักษ์สร้างบาปและหว่านความกลัวด้วยการพิพากษา",
						"hindi": "संरक्षकों ने पाप गढ़े और न्याय के माध्यम से भय बोया।"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"speaker": "ferro",
					"type": "speech",
					"content": {
						"korean": "내 가족도 그렇게 사라졌어. 모두 거짓이었다고!",
						"english": "My family disappeared like that too. It was all a lie!",
						"japanese": "私の家族もそうやって消えた。全て嘘だったんだ！",
						"chinese": "我的家人也那样消失了。全都是谎言！",
						"french": "Ma famille a disparu comme ça aussi. Tout n'était qu'un mensonge !",
						"spanish": "Mi familia también desapareció así. ¡Todo fue una mentira!",
						"vietnamese": "Gia đình tôi cũng biến mất như vậy. Tất cả đều là dối trá!",
						"thai": "ครอบครัวของฉันก็หายไปแบบนั้นเหมือนกัน ทุกอย่างเป็นเรื่องโกหก!",
						"hindi": "मेरा परिवार भी ऐसे ही गायब हो गया। यह सब झूठ था!"
					}
				},
				{
					"emotion": "sad",
					"speaker": "ember",
					"content": {
						"korean": "아니… 이건….",
						"english": "No... This is...",
						"japanese": "いや…これは…。",
						"chinese": "不…这…",
						"french": "Non... C'est...",
						"spanish": "No... Esto es...",
						"vietnamese": "Không… Cái này…",
						"thai": "ไม่นะ... นี่มัน...",
						"hindi": "नहीं... यह..."
					},
					"type": "speech"
				},
				{
					"speaker": "ember",
					"content": {
						"korean": "우리 부족의 평화는… 전부 허상이었나?",
						"english": "Was our tribe's peace... all an illusion?",
						"japanese": "我が部族の平和は…全て虚像だったのか？",
						"chinese": "我们部落的和平…全都是虚假的吗？",
						"french": "La paix de notre tribu… n'était-elle qu'une illusion ?",
						"spanish": "¿La paz de nuestra tribu... fue toda una ilusión?",
						"vietnamese": "Hòa bình của bộ tộc chúng ta... tất cả chỉ là ảo ảnh sao?",
						"thai": "สันติสุขของชนเผ่าเรา... เป็นแค่ภาพลวงตาอย่างนั้นหรือ?",
						"hindi": "हमारे कबीले की शांति... क्या यह सब एक भ्रम था?"
					},
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "ember",
					"type": "direction",
					"spot": [
						5,
						2
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "아슈르… 그가 말한 모든 것이 진실일까?",
						"english": "Ashur... Could everything he said be true?",
						"japanese": "アシュール…彼が言ったこと全てが真実なのか？",
						"chinese": "阿什尔…他说的一切都是真的吗？",
						"french": "Ashur... Tout ce qu'il a dit pourrait-il être vrai ?",
						"spanish": "Ashur... ¿Podría ser verdad todo lo que dijo?",
						"vietnamese": "Ashur… Mọi điều hắn nói có phải là sự thật không?",
						"thai": "อาชูร์... ทุกสิ่งที่เขาพูดเป็นความจริงหรือ?",
						"hindi": "अशूर... क्या उसकी कही हर बात सच थी?"
					},
					"type": "speech",
					"speaker": "ember"
				},
				{
					"speaker": "ferro",
					"type": "speech",
					"content": {
						"korean": "그는 사막의 절대자처럼 군림했어.",
						"english": "He reigned like an absolute ruler of the desert.",
						"japanese": "彼は砂漠の絶対者のように君臨した。",
						"chinese": "他曾像沙漠的绝对者一样君临。",
						"french": "Il a régné comme un souverain absolu du désert.",
						"spanish": "Reinó como un gobernante absoluto del desierto.",
						"vietnamese": "Hắn đã thống trị như một kẻ độc tài tuyệt đối của sa mạc.",
						"thai": "เขาปกครองราวกับเป็นผู้ปกครองสูงสุดแห่งทะเลทราย",
						"hindi": "उसने रेगिस्तान के एक निरंकुश शासक की तरह राज किया।"
					},
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "당신도 이제 알지 않나. 진실은 불편해도 마주해야 해.",
						"english": "You know it now, don't you? The truth, however uncomfortable, must be faced.",
						"japanese": "君ももう分かっているだろう。真実は不都合でも、向き合わなければならない。",
						"chinese": "你也明白了吧。真相再不适，也必须面对。",
						"french": "Tu le sais maintenant, n'est-ce pas ? La vérité, même si elle est inconfortable, doit être affrontée.",
						"spanish": "Tú también lo sabes ahora, ¿verdad? La verdad, por incómoda que sea, debe ser afrontada.",
						"vietnamese": "Ngươi cũng đã biết rồi mà. Sự thật dù có khó chịu đến mấy, cũng phải đối mặt.",
						"thai": "เจ้าก็รู้แล้วไม่ใช่หรือ ความจริงแม้จะอึดอัดก็ต้องเผชิญหน้า",
						"hindi": "तुम अब जानते हो, है ना? सच कितना भी असहज क्यों न हो, उसका सामना करना होगा।"
					},
					"type": "speech"
				},
				{
					"speaker": "ember",
					"content": {
						"korean": "…난 부족을 지켜야 한다. 진실이 무엇이든.",
						"english": "…I must protect the tribe. No matter the truth.",
						"japanese": "…私は部族を守らねばならない。真実が何であろうと。",
						"chinese": "…我必须保护部落。无论真相如何。",
						"french": "...Je dois protéger la tribu. Quelle que soit la vérité.",
						"spanish": "...Debo proteger a la tribu. Sea cual sea la verdad.",
						"vietnamese": "...Ta phải bảo vệ bộ tộc. Bất kể sự thật là gì.",
						"thai": "...ข้าต้องปกป้องเผ่า ไม่ว่าความจริงจะเป็นเช่นไร",
						"hindi": "...मुझे अपने कबीले की रक्षा करनी चाहिए। सच जो भी हो।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 모래 폭풍이 길을 막았다. 그 중심에 정체 모를 그림자가 서 있었다.",
						"english": "A colossal sandstorm blocked the path. In its heart stood an unknown shadow.",
						"japanese": "巨大な砂嵐が道を塞いだ。その中心には、正体不明の影が立っていた。",
						"chinese": "一场巨大的沙尘暴挡住了去路。其中心矗立着一个不明的 M 影。",
						"french": "Une gigantesque tempête de sable bloquait le chemin. En son centre se tenait une ombre inconnue.",
						"spanish": "Una tormenta de arena colosal bloqueó el camino. En su corazón, una sombra desconocida se erguía.",
						"vietnamese": "Một cơn bão cát khổng lồ chặn đường. Một bóng đen vô danh đứng giữa tâm bão.",
						"thai": "พายุทรายมหึมาขวางเส้นทางอยู่ กลางใจพายุมีเงาปริศนายืนตระหง่าน",
						"hindi": "एक विशाल रेत का तूफान रास्ता रोके हुए था। उसके केंद्र में एक अज्ञात छाया खड़ी थी।"
					},
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "불경한 자들. 모래시계의 질서를 거스를 셈이냐?",
						"english": "Impious fools. Do you intend to defy the order of the hourglass?",
						"japanese": "不信心者たちめ。砂時計の秩序に逆らうつもりか？",
						"chinese": "亵渎者。你们打算违抗沙漏的秩序吗？",
						"french": "Impies. Osez-vous défier l'ordre du sablier ?",
						"spanish": "¡Herejes! ¿Pretendéis desafiar el orden del reloj de arena?",
						"vietnamese": "Những kẻ bất kính. Các ngươi định chống lại trật tự của đồng hồ cát ư?",
						"thai": "พวกคนบาป เจ้าคิดจะท้าทายระเบียบของนาฬิกาทรายหรือ?",
						"hindi": "अधर्मी मूर्ख। क्या तुम रेतघड़ी की व्यवस्था का उल्लंघन करने का इरादा रखते हो?"
					},
					"emotion": "angry"
				},
				{
					"speaker": "ferro",
					"content": {
						"korean": "거짓된 질서 따윈 필요 없어!",
						"english": "We don't need your false order!",
						"japanese": "偽りの秩序など不要だ！",
						"chinese": "我们不需要虚假的秩序！",
						"french": "Nous n'avons pas besoin de votre faux ordre !",
						"spanish": "¡No necesitamos vuestro falso orden!",
						"vietnamese": "Chúng ta không cần cái trật tự giả dối đó!",
						"thai": "เราไม่ต้องการระเบียบจอมปลอมของเจ้า!",
						"hindi": "हमें तुम्हारी झूठी व्यवस्था की कोई जरूरत नहीं!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이제 모든 위선은 끝난다.",
						"english": "Now, all hypocrisy ends.",
						"japanese": "今、すべての偽善は終わる。",
						"chinese": "现在，所有的伪善都将终结。",
						"french": "Maintenant, toute hypocrisie prend fin.",
						"spanish": "Ahora, toda hipocresía termina.",
						"vietnamese": "Giờ đây, mọi sự giả dối sẽ chấm dứt.",
						"thai": "บัดนี้ ความหน้าซื่อใจคดทั้งหมดจะสิ้นสุดลง",
						"hindi": "अब, सारा पाखंड खत्म होता है।"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "어리석은 것들. 힘으로 가르쳐주겠다.",
						"english": "Foolish ones. I shall teach you with force.",
						"japanese": "愚かな者たちめ。力で教えてやろう。",
						"chinese": "愚蠢的东西。我将用力量教训你们。",
						"french": "Imbéciles. Je vous instruirai par la force.",
						"spanish": "Estúpidos. Os enseñaré por la fuerza.",
						"vietnamese": "Những kẻ ngu ngốc. Ta sẽ dùng sức mạnh để dạy dỗ các ngươi.",
						"thai": "พวกโง่เขลา ข้าจะสั่งสอนเจ้าด้วยกำลัง",
						"hindi": "मूर्ख प्राणियों। मैं तुम्हें बलपूर्वक सिखाऊंगा।"
					},
					"type": "speech",
					"speaker": "random_boss"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "하찮은 반항이로군. 모래시계의 심판은 거스를 수 없다.",
						"english": "A pathetic rebellion. The hourglass's judgment cannot be defied.",
						"japanese": "取るに足らない反抗だ。砂時計の審判は覆せない。",
						"chinese": "区区反抗。沙漏的审判不可违逆。",
						"french": "Une rébellion pathétique. Le jugement du sablier ne peut être défié.",
						"spanish": "Una rebelión patética. El juicio del reloj de arena no puede ser desafiado.",
						"vietnamese": "Một sự phản kháng vô ích. Phán quyết của đồng hồ cát là không thể đảo ngược.",
						"thai": "เป็นการต่อต้านที่ไร้สาระ คำพิพากษาของนาฬิกาทรายไม่อาจเปลี่ยนแปลงได้",
						"hindi": "एक दयनीय विद्रोह। रेतघड़ी के न्याय को टाला नहीं जा सकता।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "ferro",
					"type": "speech",
					"content": {
						"korean": "빌어먹을…! 포기 안 해!",
						"english": "Damn it...! I won't give up!",
						"japanese": "くそっ…！諦めない！",
						"chinese": "该死…！我不会放弃的！",
						"french": "Maudits… ! Je n'abandonnerai pas !",
						"spanish": "¡Maldita sea…! ¡No me rendiré!",
						"vietnamese": "Chết tiệt…! Tôi sẽ không bỏ cuộc!",
						"thai": "บ้าเอ๊ย…! ฉันไม่ยอมแพ้!",
						"hindi": "धिक्कार है…! मैं हार नहीं मानूंगा!"
					},
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "아직… 끝나지 않았어.",
						"english": "It's not... over yet.",
						"japanese": "まだ… 終わってない。",
						"chinese": "还没… 结束呢。",
						"french": "Ce n'est pas… encore fini.",
						"spanish": "Aún no… ha terminado.",
						"vietnamese": "Vẫn chưa… kết thúc đâu.",
						"thai": "ยัง… ไม่จบหรอก",
						"hindi": "अभी… खत्म नहीं हुआ है।"
					},
					"type": "speech"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "크윽… 이까짓… 힘으로… 진실을 바꿀 순 없어….",
						"english": "Urgh... Such... power... cannot change the truth...",
						"japanese": "くっ…こんな…力で…真実を変えることなど…できない…。",
						"chinese": "呃... 这种... 力量... 无法改变真相...",
						"french": "Argh... Une telle... force... ne peut changer la vérité...",
						"spanish": "Ugh... Semejante... poder... no puede cambiar la verdad...",
						"vietnamese": "Khụ... Sức mạnh... như thế này... không thể thay đổi sự thật...",
						"thai": "อึก... แค่... พลัง... เท่านี้... เปลี่ยนความจริงไม่ได้หรอก...",
						"hindi": "उफ़... ऐसी... शक्ति... सच नहीं बदल सकती..."
					},
					"speaker": "random_boss"
				},
				{
					"type": "direction",
					"speaker": "ember",
					"action": "enter",
					"spot": [
						5,
						2
					],
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…결국, 모든 것이 부서져야만 하는가.",
						"english": "...In the end, must everything be broken?",
						"japanese": "…結局、すべてが壊れなければならないのか。",
						"chinese": "……最终，一切都必须被摧毁吗？",
						"french": "...Au final, tout doit-il être brisé ?",
						"spanish": "...Al final, ¿debe romperse todo?",
						"vietnamese": "...Cuối cùng, mọi thứ có phải bị phá hủy không?",
						"thai": "...สุดท้ายแล้ว ทุกสิ่งต้องถูกทำลายหรือไร",
						"hindi": "...आखिरकार, क्या सब कुछ टूट जाना चाहिए?"
					},
					"speaker": "ember"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "아직 끝나지 않았다. 아슈르가 진실을 감추고 있어.",
						"english": "It's not over yet. Ashur is hiding the truth.",
						"japanese": "まだ終わっていない。アシュルが真実を隠している。",
						"chinese": "还没有结束。阿舒尔正在隐藏真相。",
						"french": "Ce n'est pas encore fini. Ashur cache la vérité.",
						"spanish": "Aún no ha terminado. Ashur está ocultando la verdad.",
						"vietnamese": "Vẫn chưa kết thúc. Ashur đang che giấu sự thật.",
						"thai": "ยังไม่จบ อะชูร์กำลังซ่อนความจริงอยู่",
						"hindi": "यह अभी खत्म नहीं हुआ है। आशुर सच छिपा रहा है।"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "ferro",
					"type": "speech",
					"content": {
						"korean": "모래시계의 저주는… 반드시 끊어낼 거야.",
						"english": "The curse of the hourglass... I will surely break it.",
						"japanese": "砂時計の呪いは…必ず断ち切ってみせる。",
						"chinese": "沙漏的诅咒……我一定会将其斩断。",
						"french": "La malédiction du sablier... Je la briserai sans faute.",
						"spanish": "La maldición del reloj de arena... la romperé sin falta.",
						"vietnamese": "Lời nguyền của đồng hồ cát... ta nhất định sẽ phá bỏ nó.",
						"thai": "คำสาปของนาฬิกาทราย... ข้าจะทำลายมันให้ได้",
						"hindi": "रेतघड़ी का अभिशाप... मैं इसे ज़रूर तोड़ दूँगा।"
					},
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "위선의 균열은 더 깊어졌다. 숨겨진 그림자가 서서히 본색을 드러내기 시작한다.",
						"english": "The cracks of hypocrisy deepened. Hidden shadows slowly begin to reveal their true colors.",
						"japanese": "偽善の亀裂はさらに深まった。隠された影が徐々にその正体を現し始める。",
						"chinese": "伪善的裂痕更深了。隐藏的影子开始慢慢露出真面目。",
						"french": "Les fissures de l'hypocrisie se sont approfondies. Les ombres cachées commencent lentement à révéler leur vraie nature.",
						"spanish": "Las grietas de la hipocresía se hicieron más profundas. Las sombras ocultas comienzan a revelar lentamente su verdadera naturaleza.",
						"vietnamese": "Những vết nứt của sự đạo đức giả ngày càng sâu. Những bóng tối ẩn giấu dần dần lộ rõ bản chất.",
						"thai": "รอยร้าวแห่งความหน้าซื่อใจคดลึกขึ้นเรื่อยๆ เงาที่ซ่อนอยู่เริ่มเผยโฉมที่แท้จริงออกมา",
						"hindi": "पाखंड की दरारें और गहरी हो गईं। छिपी हुई परछाइयाँ धीरे-धीरे अपना असली रंग दिखाना शुरू करती हैं।"
					},
					"type": "speech",
					"speaker": "narrator"
				}
			]
		}
	]
} as const;
