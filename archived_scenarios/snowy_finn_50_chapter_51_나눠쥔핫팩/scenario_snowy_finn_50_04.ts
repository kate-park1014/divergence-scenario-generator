export const scenario_snowy_finn_50_04 = {
	"scenario_id": "snowy_finn_50_04",
	"order": 4,
	"act": "rising",
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
			"id": 9,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "eira",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"emotion": "base",
					"content": {
						"korean": "…계속 정리하고 있어요. 그날까지의 단서들을.",
						"english": "...I'm still sorting through the clues up to that day.",
						"japanese": "…その日までの手がかりを、ずっと整理しています。",
						"chinese": "……我一直在整理那一天前的线索。",
						"french": "…Je continue de classer les indices jusqu'à ce jour-là.",
						"spanish": "…Sigo organizando las pistas hasta aquel día.",
						"vietnamese": "...Tôi vẫn đang sắp xếp các manh mối cho đến ngày đó.",
						"thai": "...ฉันยังคงรวบรวมเบาะแสจนถึงวันนั้น.",
						"hindi": "...मैं उस दिन तक के सुरागों को लगातार व्यवस्थित कर रहा हूँ।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "밤의 기록자, 에이라답네.",
						"english": "Typical Aira, the Night Recorder.",
						"japanese": "夜の記録者、アイラらしいね。",
						"chinese": "不愧是夜晚的记录者，艾拉。",
						"french": "C'est bien Aira, la Chroniqueuse de la Nuit.",
						"spanish": "Típico de Aira, la Cronista Nocturna.",
						"vietnamese": "Đúng là Aira, Người Ghi Chép Đêm.",
						"thai": "สมกับเป็นไอรา ผู้บันทึกแห่งรัตติกาล.",
						"hindi": "रात की रिकॉर्डर, ऐरा, तुम जैसी ही हो।"
					}
				},
				{
					"content": {
						"korean": "우스꽝스러워도… 누군가의 이야기는 기억되어야죠.",
						"english": "Even if it's ridiculous... someone's story must be remembered.",
						"japanese": "滑稽だとしても…誰かの物語は、記憶されるべきでしょう。",
						"chinese": "即使很荒谬……某个人的故事也应该被记住。",
						"french": "Même si c'est ridicule... l'histoire de quelqu'un doit être retenue.",
						"spanish": "Aunque sea ridículo... la historia de alguien debe ser recordada.",
						"vietnamese": "Dù có lố bịch đến đâu... câu chuyện của ai đó cũng phải được ghi nhớ.",
						"thai": "ถึงแม้มันจะฟังดูตลก...เรื่องราวของใครบางคนก็ควรจะถูกจดจำไว้.",
						"hindi": "भले ही यह हास्यास्पद हो... किसी की कहानी को याद रखा जाना चाहिए।"
					},
					"emotion": "base",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "무슨 말이야?",
						"english": "What do you mean?",
						"japanese": "どういう意味？",
						"chinese": "什么意思？",
						"french": "Qu'est-ce que tu veux dire ?",
						"spanish": "¿Qué quieres decir?",
						"vietnamese": "Ý bạn là gì?",
						"thai": "หมายความว่าอะไร?",
						"hindi": "तुम्हारा क्या मतलब है?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"emotion": "sad",
					"content": {
						"korean": "그 {random_boss} 왕에겐… 제대로 된 이름이 필요해요.",
						"english": "That {random_boss} king... he needs a proper name.",
						"japanese": "あの{random_boss}王には…ちゃんとした名前が必要です。",
						"chinese": "那个{random_boss}国王……他需要一个正式的名字。",
						"french": "Ce roi {random_boss}... il lui faut un vrai nom.",
						"spanish": "Ese rey {random_boss}... necesita un nombre apropiado.",
						"vietnamese": "Vị vua {random_boss} đó... cần một cái tên đúng nghĩa.",
						"thai": "ราชา{random_boss}องค์นั้น...เขาต้องการชื่อที่เหมาะสม.",
						"hindi": "उस {random_boss} राजा को... एक उचित नाम की ज़रूरत है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "이름?",
						"english": "A name?",
						"japanese": "名前？",
						"chinese": "名字？",
						"french": "Un nom ?",
						"spanish": "¿Un nombre?",
						"vietnamese": "Tên sao?",
						"thai": "ชื่อ?",
						"hindi": "एक नाम?"
					},
					"speaker": "character_1",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "오랜 시간 잊혀진 전설 속 존재. 그냥 두기엔… 너무 많은 이야기가 묻힐 것 같아요.",
						"english": "A being from a long-forgotten legend. To leave it be... too many stories would remain buried.",
						"japanese": "長い間忘れられていた伝説の存在。このままにしておくには…あまりにも多くの物語が埋もれてしまうでしょう。",
						"chinese": "一个被遗忘已久的传说中的存在。就这样放任不管…太多的故事就会被埋葬。",
						"french": "Un être issu d'une légende oubliée depuis longtemps. Le laisser tel quel... trop d'histoires resteraient enfouies.",
						"spanish": "Un ser de una leyenda olvidada hace mucho tiempo. Dejarlo así... demasiadas historias quedarían enterradas.",
						"vietnamese": "Một sinh vật từ truyền thuyết bị lãng quên từ lâu. Cứ để mặc nó... quá nhiều câu chuyện sẽ bị chôn vùi mất.",
						"thai": "สิ่งมีชีวิตจากตำนานที่ถูกลืมเลือนไปนานแสนนาน จะปล่อยมันไว้แบบนี้...ดูเหมือนว่าเรื่องราวมากมายจะถูกฝังกลบไป",
						"hindi": "एक लंबे समय से भूली हुई किंवदंती का अस्तित्व। इसे ऐसे ही छोड़ दें तो... बहुत सी कहानियाँ दबी रह जाएँगी।"
					},
					"emotion": "base",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "그래서, 끝까지 기록하겠다는 거구나.",
						"english": "So, you intend to record it all, to the very end.",
						"japanese": "なるほど、最後まで記録するつもりなんだな。",
						"chinese": "所以，你是打算记录到最后了。",
						"french": "Alors, tu as l'intention de tout enregistrer, jusqu'au bout.",
						"spanish": "Así que, vas a registrarlo todo hasta el final.",
						"vietnamese": "Vậy là, cậu định ghi chép lại đến cùng.",
						"thai": "งั้นก็, ตั้งใจจะบันทึกไปจนจบสินะ",
						"hindi": "तो, तुम इसे अंत तक रिकॉर्ड करोगे।"
					}
				},
				{
					"type": "speech",
					"speaker": "eira",
					"emotion": "base",
					"content": {
						"korean": "네. 그게 제 역할이에요.",
						"english": "Yes. That's my role.",
						"japanese": "はい、それが私の役割です。",
						"chinese": "是的。那是我的职责。",
						"french": "Oui. C'est mon rôle.",
						"spanish": "Sí. Ese es mi papel.",
						"vietnamese": "Vâng. Đó là vai trò của tôi.",
						"thai": "ใช่ค่ะ นั่นคือหน้าที่ของฉัน",
						"hindi": "हाँ। यही मेरी भूमिका है।"
					}
				},
				{
					"content": {
						"korean": "핫팩의 온기 앞에서 셋의 마음이 단단해졌다.",
						"english": "In the warmth of the hot packs, their three hearts grew firm.",
						"japanese": "ホットパックの温かさの前で、三人の心が固まった。",
						"chinese": "在暖手宝的温暖下，三人的心变得坚定。",
						"french": "Devant la chaleur des patchs chauffants, leurs trois cœurs se sont raffermis.",
						"spanish": "Ante el calor de las bolsas térmicas, los corazones de los tres se fortalecieron.",
						"vietnamese": "Trước hơi ấm của túi sưởi, ba trái tim trở nên kiên định.",
						"thai": "ท่ามกลางความอบอุ่นของฮอตแพ็ค หัวใจทั้งสามดวงแน่วแน่ขึ้น",
						"hindi": "हॉटपैक की गरमाहट के सामने, तीनों के दिल मज़बूत हो गए।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"눈보라는 멈출 줄 몰랐다.",
			"왕을 쫓던 추격은 잠시 숨을 고르게 했다.",
			"차가운 얼음 처마 아래, 작은 핫팩 하나에 온기가 모였다.",
			"그리고… 셋은 처음으로 서로에게 물었다. 우리는 왜 이 길을 가는가."
		],
		"english": [
			"The snowstorm showed no sign of stopping.",
			"The chase for the king offered a brief respite.",
			"Beneath the cold ice eaves, warmth gathered around a single small hot pack.",
			"And... for the first time, the three asked each other, \"Why do we walk this path?\""
		],
		"japanese": [
			"吹雪は止むことを知らなかった。",
			"王を追う追跡は、しばし息を潜めた。",
			"冷たい氷の軒下、小さな使い捨てカイロ一つに温かさが集まった。",
			"そして…三人は初めて互いに問いかけた。なぜ私たちはこの道を歩むのか、と。"
		],
		"chinese": [
			"暴风雪丝毫没有停止的迹象。",
			"追捕国王的行动暂时停了下来，让他们得以喘息。",
			"在冰冷的屋檐下，一丝温暖汇聚在一个小暖宝宝上。",
			"然后……三人第一次互相问道：我们为何走上这条路？"
		],
		"french": [
			"La tempête de neige ne faiblissait pas.",
			"La traque du roi marqua une pause, leur permettant de reprendre leur souffle.",
			"Sous les avant-toits de glace, la chaleur se rassembla autour d'une petite chaufferette.",
			"Et... pour la première fois, les trois se demandèrent mutuellement : « Pourquoi suivons-nous cette voie ? »"
		],
		"spanish": [
			"La tormenta de nieve no cesaba.",
			"La persecución del rey se detuvo un instante, permitiéndoles recobrar el aliento.",
			"Bajo el frío alero de hielo, el calor se concentró en una pequeña compresa caliente.",
			"Y... por primera vez, los tres se preguntaron entre sí: «¿Por qué seguimos este camino?»"
		],
		"vietnamese": [
			"Cơn bão tuyết không ngừng nghỉ.",
			"Cuộc truy đuổi nhà vua tạm dừng, cho họ một chút thở dốc.",
			"Dưới mái hiên băng giá lạnh lẽo, hơi ấm tụ lại quanh một chiếc túi sưởi nhỏ.",
			"Và... lần đầu tiên, ba người họ hỏi nhau, \"Tại sao chúng ta lại đi con đường này?\""
		],
		"thai": [
			"พายุหิมะไม่มีทีท่าว่าจะหยุด.",
			"การตามล่าราชาหยุดลงชั่วครู่ เพื่อให้พวกเขาได้พักหายใจ.",
			"ใต้ชายคาที่เยือกแข็ง ความอบอุ่นรวมตัวกันรอบฮอตแพ็คเล็กๆ เพียงชิ้นเดียว.",
			"และ...เป็นครั้งแรกที่ทั้งสามถามกันและกันว่า \"ทำไมเราถึงมาอยู่บนเส้นทางนี้?\""
		],
		"hindi": [
			"बर्फीला तूफ़ान थमने का नाम नहीं ले रहा था।",
			"राजा का पीछा करना कुछ पल के लिए रुका, जिससे उन्हें सांस लेने का मौका मिला।",
			"ठंडी बर्फ़ की छाजन के नीचे, एक छोटे हॉटपैक में गर्माहट जमा हो गई।",
			"और... तीनों ने पहली बार एक-दूसरे से पूछा, \"हम यह रास्ता क्यों चल रहे हैं?\""
		]
	}
} as const;
