export const scenario_snowy_finn_30_03 = {
	"scenario_id": "snowy_finn_30_03",
	"order": 3,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"inka": {
			"id": "mon_583e945a-1e2f-428b-a251-b428f25b4052",
			"name": {
				"korean": "인카",
				"english": "Inka",
				"japanese": "インカ",
				"chinese": "因卡",
				"french": "Inka",
				"spanish": "Inka",
				"vietnamese": "Inka",
				"thai": "อินคา",
				"hindi": "इंंका"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/97f4545b-2e8a-4688-3e4e-b34bb246dd00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f27763ba-2358-4fd3-c813-0f0b59dcac00/public"
		},
		"eira": {
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
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "차가운 알현실. 얼음 왕좌에 앉은 거대한 그림자가 텅 빈 공간에 호령한다.",
						"english": "The cold audience chamber. A colossal shadow on the ice throne commands the empty space.",
						"japanese": "冷たい謁見室。氷の玉座に座る巨大な影が、空虚な空間に号令する。",
						"chinese": "冰冷的觐见厅。坐在冰王座上的巨大黑影，在空荡荡的空间中发号施令。",
						"french": "La froide salle d'audience. Une ombre colossale sur le trône de glace commande l'espace vide.",
						"spanish": "La fría sala de audiencias. Una sombra colosal en el trono de hielo domina el espacio vacío.",
						"vietnamese": "Phòng yết kiến lạnh lẽo. Một bóng đen khổng lồ ngồi trên ngai vàng băng giá, ra lệnh trong không gian trống rỗng.",
						"thai": "ห้องทรงพระอักษรที่เย็นยะเยือก เงาขนาดมหึมาบนบัลลังก์น้ำแข็งบัญชาพื้นที่ว่างเปล่า",
						"hindi": "ठंडा दरबार। बर्फ़ीले सिंहासन पर बैठी एक विशाल परछाई खाली जगह में हुक्म चलाती है।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이런 곳에… 왕이 살고 있다고?",
						"english": "In a place like this... a king lives?",
						"japanese": "こんな場所に… 王が住んでいると？",
						"chinese": "在这种地方… 竟然住着国王？",
						"french": "Dans un endroit pareil… un roi vit ?",
						"spanish": "¿En un lugar como este… vive un rey?",
						"vietnamese": "Ở một nơi như thế này... có một vị vua sống sao?",
						"thai": "ในที่แบบนี้… มีกษัตริย์อาศัยอยู่หรือ?",
						"hindi": "ऐसी जगह में... एक राजा रहता है?"
					},
					"emotion": "base"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "eira",
					"spot": [
						3,
						3
					]
				},
				{
					"content": {
						"korean": "…그럼요. 매일 같은 시각, '백성'을 모아 위엄을 과시하죠.",
						"english": "...Of course. Every day at the same time, he gathers his 'subjects' to display his majesty.",
						"japanese": "…ええ、そうです。毎日同じ時刻に、『臣民』を集めて威厳を誇示します。",
						"chinese": "…当然。每天同一时间，他都会召集他的‘子民’，以示威严。",
						"french": "...Bien sûr. Chaque jour à la même heure, il rassemble ses 'sujets' pour afficher sa majesté.",
						"spanish": "...Claro. Cada día a la misma hora, reúne a sus 'súbditos' para mostrar su majestad.",
						"vietnamese": "...Tất nhiên rồi. Mỗi ngày vào cùng một thời điểm, ngài ấy tập hợp 'thần dân' để phô trương uy nghiêm.",
						"thai": "...แน่นอนครับ ทุกวันในเวลาเดียวกัน เขาจะรวบรวม 'พลเมือง' เพื่อแสดงความยิ่งใหญ่",
						"hindi": "...बेशक। हर दिन एक ही समय पर, वह अपनी 'प्रजा' को इकट्ठा करता है ताकि अपना प्रताप दिखा सके।"
					},
					"type": "speech",
					"speaker": "eira",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "왕의 호령이 텅 빈 알현실에 메아리로만 되돌아온다. 그 적막의 크기를 에이라가 조용히 기록했다.",
						"english": "The king's command returned only as an echo in the empty audience chamber. Eira silently noted the extent of the silence.",
						"japanese": "王の号令は空虚な謁見室にただのこだまとなって返ってくる。その静寂の大きさをエイラは静かに記録した。",
						"chinese": "国王的号令只作为回声在空荡荡的觐见厅中回荡。艾拉默默地记录下那片寂静的程度。",
						"french": "Le commandement du roi ne revint qu'en écho dans la salle d'audience vide. Eira nota silencieusement l'ampleur de ce silence.",
						"spanish": "La orden del rey solo regresó como un eco en la sala de audiencias vacía. Eira anotó en silencio la magnitud de ese silencio.",
						"vietnamese": "Mệnh lệnh của nhà vua chỉ vọng lại như tiếng vang trong phòng yết kiến trống rỗng. Eira lặng lẽ ghi lại mức độ của sự tĩnh lặng đó.",
						"thai": "บัญชาของกษัตริย์สะท้อนกลับมาเป็นเพียงเสียงก้องในห้องทรงพระอักษรที่ว่างเปล่า เอร่าบันทึกขนาดของความเงียบงันนั้นอย่างเงียบๆ",
						"hindi": "राजा का आदेश खाली दरबार में केवल एक गूँज बनकर लौटा। ऐरा ने उस सन्नाटे की हद को चुपचाप दर्ज कर लिया।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "얼음 왕좌에 앉은 이가 위엄을 토해냈다.",
						"english": "The one on the ice throne exuded majesty.",
						"japanese": "氷の玉座に座る者が威厳を吐き出した。",
						"chinese": "坐在冰王座上的那人，散发出威严。",
						"french": "Celui sur le trône de glace exhala de la majesté.",
						"spanish": "Aquel en el trono de hielo exhaló majestad.",
						"vietnamese": "Người ngồi trên ngai vàng băng giá toát ra vẻ uy nghiêm.",
						"thai": "ผู้ที่อยู่บนบัลลังก์น้ำแข็งได้เปล่งรัศมีแห่งความสง่างามออกมา",
						"hindi": "बर्फ़ीले सिंहासन पर बैठे व्यक्ति ने प्रताप बिखेरा।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "…이 얼음 왕국에, 평화가 영원할지어다!",
						"english": "...May peace forever reign in this ice kingdom!",
						"japanese": "…この氷の王国に、永遠の平和があらんことを！",
						"chinese": "…愿这冰雪王国，永享和平！",
						"french": "...Que la paix règne à jamais dans ce royaume de glace !",
						"spanish": "...¡Que la paz reine por siempre en este reino de hielo!",
						"vietnamese": "...Mong rằng hòa bình sẽ vĩnh cửu trong vương quốc băng giá này!",
						"thai": "...ขอสันติภาพจงสถิตนิรันดร์ในอาณาจักรน้ำแข็งนี้!",
						"hindi": "...इस बर्फीले राज्य में, शांति सदा बनी रहे!"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "호령이 텅 빈 알현실에 메아리치자, 잠시 뒤 왕은 옥좌 옆을 슬쩍 돌아보았다.",
						"english": "As the command echoed in the empty audience chamber, the king glanced briefly to the side of his throne.",
						"japanese": "号令が空虚な謁見室にこだますると、しばらくして王は玉座の脇をちらりと振り返った。",
						"chinese": "当号令在空荡荡的觐见厅中回响时，片刻之后，国王悄悄地瞥了一眼御座旁。",
						"french": "Alors que le commandement résonnait dans la salle d'audience vide, le roi jeta un bref coup d'œil sur le côté de son trône peu après.",
						"spanish": "Mientras la orden resonaba en la sala de audiencias vacía, poco después, el rey miró de reojo al lado de su trono.",
						"vietnamese": "Khi mệnh lệnh vang vọng trong phòng yết kiến trống rỗng, một lát sau, nhà vua liếc nhìn về phía bên cạnh ngai vàng.",
						"thai": "เมื่อคำสั่งก้องกังวานในห้องทรงพระอักษรที่ว่างเปล่า ไม่นานนัก กษัตริย์ก็เหลือบมองไปทางด้านข้างของบัลลังก์",
						"hindi": "जैसे ही आदेश खाली दरबार में गूँजा, थोड़ी देर बाद, राजा ने चुपके से अपने सिंहासन के बगल में देखा।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "inka",
					"spot": [
						2,
						3
					],
					"action": "enter"
				},
				{
					"speaker": "inka",
					"content": {
						"korean": "…누가 곁에 있어주길 바라는 거예요.",
						"english": "...It wants someone by its side.",
						"japanese": "…誰かに傍にいてほしいと願っているのね。",
						"chinese": "……它希望有人在它身边。",
						"french": "...Il veut que quelqu'un soit à ses côtés.",
						"spanish": "...Desea que alguien esté a su lado.",
						"vietnamese": "...Nó muốn có ai đó bên cạnh.",
						"thai": "...มันอยากให้ใครสักคนอยู่ข้างๆ",
						"hindi": "...वह चाहता है कि कोई उसके साथ रहे।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "저 괴물이? 외로움을 타?",
						"english": "That monster? It gets lonely?",
						"japanese": "あの怪物が？寂しがり屋なの？",
						"chinese": "那个怪物？会感到寂寞吗？",
						"french": "Ce monstre ? Il se sent seul ?",
						"spanish": "¿Ese monstruo? ¿Se siente solo?",
						"vietnamese": "Con quái vật đó ư? Nó cô đơn sao?",
						"thai": "เจ้าสัตว์ประหลาดนั่นน่ะเหรอ? มันเหงาเหรอ?",
						"hindi": "वह राक्षस? उसे अकेलापन महसूस होता है?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그 위엄 뒤에, 얼마나 많은 시간이 얼어붙었을까요.",
						"english": "Behind that majesty, how much time must have frozen?",
						"japanese": "その威厳の裏に、どれほどの時間が凍りついているのだろう。",
						"chinese": "在那威严的背后，凝固了多少时光啊。",
						"french": "Derrière cette majesté, combien de temps a dû geler ?",
						"spanish": "Detrás de esa majestuosidad, ¿cuánto tiempo se habrá congelado?",
						"vietnamese": "Đằng sau vẻ uy nghi ấy, biết bao nhiêu thời gian đã đóng băng rồi.",
						"thai": "เบื้องหลังความสง่างามนั้น, เวลาเท่าไหร่กันนะที่ถูกแช่แข็งเอาไว้",
						"hindi": "उस गरिमा के पीछे, कितना समय थम सा गया होगा।"
					},
					"speaker": "inka",
					"emotion": "sad"
				},
				{
					"speaker": "inka",
					"content": {
						"korean": "혼자서, 이 차가운 적막을 견디는 게 얼마나 무서울까.",
						"english": "How terrifying it must be, enduring this cold silence alone.",
						"japanese": "一人で、この冷たい静寂に耐えるのがどれほど恐ろしいことか。",
						"chinese": "独自一人，忍受这冰冷的寂静，该是多么可怕啊。",
						"french": "Comme il doit être terrifiant d'endurer ce froid silence seul.",
						"spanish": "Qué aterrador debe ser soportar este frío silencio en soledad.",
						"vietnamese": "Cô độc một mình, chịu đựng sự tĩnh lặng lạnh lẽo này chắc hẳn đáng sợ lắm.",
						"thai": "การต้องทนอยู่กับความเงียบงันอันหนาวเหน็บนี้เพียงลำพังมันน่ากลัวแค่ไหนกันนะ",
						"hindi": "अकेले इस ठंडी खामोशी को सहना कितना डरावना होगा।"
					},
					"type": "speech",
					"emotion": "sad"
				}
			],
			"id": 3
		},
		{
			"dialogue": [],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": []
		},
		{
			"dialogue": [],
			"win_dialogue": [],
			"lose_dialogue": [],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"차가운 얼음 알현실. 왕의 위엄은 공허하게 울린다.",
			"텅 빈 공간에, 작은 펭귄 몇 마리가 전부인 백성.",
			"모두가 외면하는 그 적막 속에서, 누군가 눈을 맞춘다."
		],
		"english": [
			"A cold, icy audience chamber. The king's majesty echoes hollowly.",
			"In the empty space, only a few small penguins, the entirety of his subjects.",
			"In that silence, ignored by all, someone meets their gaze."
		],
		"japanese": [
			"冷たい氷の謁見室。王の威厳が虚しく響き渡る。",
			"空虚な空間に、わずかなペンギン数匹が臣民のすべて。",
			"皆が目を背けるその静寂の中、誰かが視線を交わす。"
		],
		"chinese": [
			"冰冷严寒的觐见厅。国王的威严空洞地回响着。",
			"空荡荡的空间里，仅有几只小企鹅，便是他的全部子民。",
			"在那无人理会的寂静中，有人与他目光相接。"
		],
		"french": [
			"Une froide salle d'audience glacée. La majesté du roi résonne creusement.",
			"Dans l'espace vide, seulement quelques petits pingouins, l'intégralité de ses sujets.",
			"Dans ce silence, ignoré de tous, quelqu'un croise le regard."
		],
		"spanish": [
			"Una fría sala de audiencias helada. La majestad del rey resuena con vacío.",
			"En el espacio vacío, solo unos cuantos pequeños pingüinos, la totalidad de sus súbditos.",
			"En ese silencio, ignorado por todos, alguien cruza la mirada."
		],
		"vietnamese": [
			"Phòng yết kiến băng giá lạnh lẽo. Uy nghiêm của nhà vua vang vọng một cách trống rỗng.",
			"Trong không gian trống rỗng, chỉ vài chú chim cánh cụt nhỏ bé là toàn bộ thần dân.",
			"Trong sự tĩnh lặng bị mọi người quay lưng, có ai đó nhìn thẳng vào mắt."
		],
		"thai": [
			"ห้องทรงพระอักษรน้ำแข็งอันหนาวเหน็บ พระบารมีของกษัตริย์ก้องกังวานอย่างว่างเปล่า",
			"ในพื้นที่ว่างเปล่า มีเพียงนกเพนกวินไม่กี่ตัว ซึ่งเป็นพลเมืองทั้งหมดของเขา",
			"ในความเงียบงันที่ทุกคนเมินเฉย มีใครบางคนสบตา"
		],
		"hindi": [
			"एक ठंडा, बर्फीला दरबार। राजा का प्रताप खोखला गूँजता है।",
			"खाली जगह में, कुछ छोटे पेंग्विन ही उसकी सारी प्रजा हैं।",
			"उस सन्नाटे में, जिसे सब नजरअंदाज करते हैं, कोई नजरें मिलाता है।"
		]
	}
} as const;
