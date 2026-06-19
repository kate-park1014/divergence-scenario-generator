export const scenario_modern_nemesis_5_01 = {
	"scenario_id": "modern_nemesis_5_01",
	"order": 1,
	"act": "intro",
	"theme": "modern",
	"actors": {
		"bex": {
			"id": "mon_74e24324-3f9a-4d44-9611-1da33b654ca1",
			"name": {
				"korean": "벡스",
				"english": "Bex",
				"japanese": "ベックス",
				"chinese": "贝克斯",
				"french": "Bex",
				"spanish": "Bex",
				"vietnamese": "Bex",
				"thai": "เบ็กซ์",
				"hindi": "बेक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/09dae190-ff6b-4a9d-b656-e1a2b896aa00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5cc3c77f-72e1-416e-b346-31889b3b9300/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"최첨단 마천루가 지배하는 도시.",
			"그 심장부엔 '네메시스'가 있었다.",
			"완벽한 기업가, 절대적인 신뢰의 상징.",
			"그러나 그의 완벽한 가면 뒤에는—",
			"알 수 없는 불길한 그림자가 드리워져 있었다."
		],
		"english": [
			"A city dominated by state-of-the-art skyscrapers.",
			"At its heart lay 'Nemesis'.",
			"A perfect entrepreneur, a symbol of absolute trust.",
			"But behind his perfect mask—",
			"An unknown, ominous shadow loomed."
		],
		"japanese": [
			"最先端の摩天楼が支配する都市。",
			"その心臓部には「ネメシス」がいた。",
			"完璧な実業家、絶対的な信頼の象徴。",
			"しかし、その完璧な仮面の後ろには—",
			"知られざる不吉な影が忍び寄っていた。"
		],
		"chinese": [
			"尖端摩天大楼主宰的城市。",
			"其核心是“复仇女神”。",
			"完美的企业家，绝对信任的象征。",
			"然而在他完美的假面背后—",
			"一个未知的、不祥的影子笼罩着。"
		],
		"french": [
			"Une ville dominée par des gratte-ciel ultramodernes.",
			"En son cœur se trouvait 'Némésis'.",
			"Un entrepreneur parfait, un symbole de confiance absolue.",
			"Mais derrière son masque parfait—",
			"Une ombre sinistre et inconnue planait."
		],
		"spanish": [
			"Una ciudad dominada por rascacielos de última generación.",
			"En su corazón yacía 'Némesis'.",
			"Un empresario perfecto, un símbolo de confianza absoluta.",
			"Pero detrás de su máscara perfecta—",
			"Una sombra ominosa y desconocida se cernía."
		],
		"vietnamese": [
			"Một thành phố bị chi phối bởi những tòa nhà chọc trời hiện đại.",
			"Trong lòng nó là 'Nemesis'.",
			"Một doanh nhân hoàn hảo, biểu tượng của sự tin cậy tuyệt đối.",
			"Nhưng đằng sau chiếc mặt nạ hoàn hảo của anh ta—",
			"Một bóng tối đáng ngại, không rõ ràng đang bao trùm."
		],
		"thai": [
			"เมืองที่ถูกครอบงำด้วยตึกระฟ้าอันทันสมัย",
			"ที่ใจกลางของมันคือ 'เนเมซิส'",
			"ผู้ประกอบการที่สมบูรณ์แบบ, สัญลักษณ์ของความไว้วางใจอย่างแท้จริง",
			"แต่เบื้องหลังหน้ากากที่สมบูรณ์แบบของเขา—",
			"เงามืดอันน่าสะพรึงกลัวที่ไม่มีใครรู้จักแผ่ปกคลุมอยู่"
		],
		"hindi": [
			"अत्याधुनिक गगनचुंबी इमारतों का प्रभुत्व वाला शहर।",
			"उसके केंद्र में 'नेमेसिस' था।",
			"एक आदर्श उद्यमी, पूर्ण विश्वास का प्रतीक।",
			"लेकिन उसके आदर्श मुखौटे के पीछे—",
			"एक अज्ञात, अशुभ छाया मंडरा रही थी।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "거대한 마천루 사이로, 네메시스의 그림자가 도시를 덮었다.",
						"english": "Amidst giant skyscrapers, Nemesis's shadow covered the city.",
						"japanese": "巨大な摩天楼の合間から、ネメシスの影が都市を覆った。",
						"chinese": "在巨大的摩天大楼之间，复仇女神的阴影笼罩了城市。",
						"french": "Au milieu des gratte-ciel géants, l'ombre de Némésis recouvrait la ville.",
						"spanish": "Entre los gigantescos rascacielos, la sombra de Némesis cubría la ciudad.",
						"vietnamese": "Giữa những tòa nhà chọc trời khổng lồ, bóng của Nemesis bao trùm thành phố.",
						"thai": "ท่ามกลางตึกระฟ้าขนาดใหญ่ เงาของเนเมซิสปกคลุมเมือง",
						"hindi": "विशाल गगनचुंबी इमारतों के बीच, नेमेसिस की छाया ने शहर को ढक लिया।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "저게 네메시스… 완벽함 그 자체로군.",
						"english": "That's Nemesis... perfection incarnate.",
						"japanese": "あれがネメシス…完璧そのものだな。",
						"chinese": "那是复仇女神……完美本身。",
						"french": "C'est Némésis... la perfection incarnée.",
						"spanish": "Ese es Némesis... la perfección encarnada.",
						"vietnamese": "Đó là Nemesis... sự hoàn hảo tuyệt đối.",
						"thai": "นั่นคือเนเมซิส... ความสมบูรณ์แบบในตัวมันเอง",
						"hindi": "वह नेमेसिस है... पूर्णता का अवतार।"
					},
					"emotion": "base"
				},
				{
					"speaker": "bex",
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "완벽해서 더 수상하지 않아? 저 최고급 양복이… 앙상한 몸에 억지로 걸쳐진 것 같아.",
						"english": "Doesn't his perfection make him more suspicious? That premium suit... it looks forcibly draped over a skeletal frame.",
						"japanese": "完璧すぎるからこそ、余計に怪しくないか？あの最高級のスーツが…痩せ細った体に無理やり着せられているようだ。",
						"chinese": "不觉得他越完美越可疑吗？那套顶级西装……看起来像是硬生生套在瘦骨嶙峋的身体上。",
						"french": "Sa perfection ne le rend-elle pas plus suspect ? Ce costume haut de gamme... on dirait qu'il a été forcé sur un corps squelettique.",
						"spanish": "¿Su perfección no lo hace más sospechoso? Ese traje de lujo... parece puesto a la fuerza sobre un cuerpo esquelético.",
						"vietnamese": "Sự hoàn hảo đó không làm anh ta đáng ngờ hơn sao? Bộ vest cao cấp đó... như bị ép khoác lên một thân hình gầy gò.",
						"thai": "ความสมบูรณ์แบบของเขาไม่ทำให้เขาน่าสงสัยยิ่งขึ้นเหรอ? ชุดสูทหรูหรานั่น... ดูเหมือนถูกบังคับให้สวมทับร่างที่ผอมแห้ง",
						"hindi": "क्या उसकी पूर्णता उसे और भी संदिग्ध नहीं बनाती? वह प्रीमियम सूट... ऐसा लगता है जैसे उसे एक कंकालनुमा शरीर पर जबरदस्ती पहनाया गया हो।"
					},
					"emotion": "sad",
					"speaker": "bex"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리야? 그냥 완벽해 보이는데.",
						"english": "What are you talking about? He just looks perfect.",
						"japanese": "何を言ってるんだ？ただ完璧に見えるだけだろ。",
						"chinese": "你说什么呢？他看起来就是很完美啊。",
						"french": "Qu'est-ce que tu racontes ? Il a juste l'air parfait.",
						"spanish": "¿De qué hablas? Simplemente parece perfecto.",
						"vietnamese": "Cậu nói gì vậy? Anh ta trông hoàn hảo mà.",
						"thai": "คุณพูดอะไรน่ะ? เขาก็แค่ดูสมบูรณ์แบบ",
						"hindi": "तुम क्या कह रहे हो? वह बस एकदम सही दिख रहा है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "모르겠어. 그냥… 기분 탓인가. 너무 비현실적이야.",
						"english": "I don't know. Maybe it's just my imagination. It's too surreal.",
						"japanese": "分からない。ただ…気のせいかな。あまりにも非現実的だ。",
						"chinese": "我不知道。也许……只是我的错觉吧。太不真实了。",
						"french": "Je ne sais pas. Peut-être... c'est juste mon imagination. C'est trop irréel.",
						"spanish": "No lo sé. Quizás... sea solo mi imaginación. Es demasiado irreal.",
						"vietnamese": "Tớ không biết. Chỉ là... có thể tớ tưởng tượng thôi. Quá phi thực tế.",
						"thai": "ฉันไม่รู้สิ แค่... คิดไปเองรึเปล่า มันดูไม่จริงเลย",
						"hindi": "मुझे नहीं पता। बस... शायद मेरा मन का वहम है। यह बहुत अवास्तविक है।"
					},
					"emotion": "base",
					"speaker": "bex"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그때, 그림자 속에서 붉은 눈빛이 번뜩였다.",
						"english": "Then, a pair of red eyes gleamed in the shadows.",
						"japanese": "その時、影の中から赤い瞳が閃いた。",
						"chinese": "就在那时，一道红光在黑暗中闪过。",
						"french": "Alors, des yeux rouges brillèrent dans l'ombre.",
						"spanish": "Entonces, un par de ojos rojos brillaron en la oscuridad.",
						"vietnamese": "Khi đó, một đôi mắt đỏ rực lóe lên trong bóng tối.",
						"thai": "ในตอนนั้น ดวงตาสีแดงคู่หนึ่งส่องประกายในเงามืด",
						"hindi": "तभी, परछाइयों में लाल आँखें चमक उठीं।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "네메시스 님을 의심하는 자는… 곧 사라진다.",
						"english": "Those who doubt Lady Nemesis... shall soon vanish.",
						"japanese": "ネメシス様を疑う者は…すぐに消えるだろう。",
						"chinese": "胆敢怀疑涅墨西斯大人者… 将很快消失。",
						"french": "Ceux qui doutent de Dame Némésis... disparaîtront bientôt.",
						"spanish": "Aquellos que duden de Lady Némesis... pronto desaparecerán.",
						"vietnamese": "Kẻ nào dám nghi ngờ Nữ thần Nemesis... sẽ sớm biến mất.",
						"thai": "ผู้ใดสงสัยท่านเนเมซิส... จะหายไปในไม่ช้า",
						"hindi": "जो कोई भी नेमेसिस देवी पर संदेह करता है... वह जल्द ही गायब हो जाएगा।"
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
					"speaker": "bex",
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "도시를 지탱하는 '절대적인 신뢰' 계약들… 정말 아무 문제도 없을까?",
						"english": "The 'Absolute Trust' contracts that uphold this city... Are they truly flawless?",
						"japanese": "街を支える「絶対的な信頼」の契約…本当に問題ないのか？",
						"chinese": "维系这座城市的“绝对信任”契约… 真的没有问题吗？",
						"french": "Les contrats de 'Confiance Absolue' qui soutiennent la ville... Sont-ils vraiment sans faille ?",
						"spanish": "Los contratos de 'Confianza Absoluta' que sostienen la ciudad... ¿realmente no tienen problemas?",
						"vietnamese": "Các khế ước 'Tin cậy Tuyệt đối' nâng đỡ thành phố... liệu có thực sự không có vấn đề gì?",
						"thai": "สัญญา 'ความไว้วางใจอันสมบูรณ์' ที่ค้ำจุนเมืองนี้... ไม่มีปัญหาอะไรจริงหรือ?",
						"hindi": "शहर को चलाने वाले 'पूर्ण विश्वास' के अनुबंध... क्या वाकई सब ठीक है?"
					},
					"emotion": "sad",
					"speaker": "bex"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "계약을 어기면 파멸한다잖아. 당연히 지켜야지.",
						"english": "They say breaking the contract leads to ruin. Of course, we must uphold it.",
						"japanese": "契約を破れば破滅するって。当然守らなくちゃ。",
						"chinese": "违约就会毁灭。当然要遵守。",
						"french": "On dit que rompre le contrat mène à la ruine. Bien sûr, nous devons le respecter.",
						"spanish": "Dicen que romper el contrato lleva a la ruina. Por supuesto, debemos cumplirlo.",
						"vietnamese": "Họ nói vi phạm khế ước sẽ bị hủy diệt. Đương nhiên phải tuân thủ.",
						"thai": "พวกเขาบอกว่าถ้าผิดสัญญาจะถูกทำลาย. แน่นอนว่าเราต้องรักษามันไว้.",
						"hindi": "वे कहते हैं कि अनुबंध तोड़ने से विनाश होता है। निश्चित रूप से, हमें इसका पालन करना चाहिए।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "bex",
					"emotion": "sad",
					"content": {
						"korean": "그 파멸이… 단순한 사회적 매장을 넘어설 것 같다는 불길한 예감이 들어.",
						"english": "I have a sinister feeling that this ruin... goes beyond mere social ostracism.",
						"japanese": "その破滅が…単なる社会的な抹殺を越えるような、不吉な予感がする。",
						"chinese": "我有种不祥的预感，那种毁灭… 会超越单纯的社会性埋葬。",
						"french": "J'ai le sinistre pressentiment que cette ruine... dépassera un simple bannissement social.",
						"spanish": "Tengo el siniestro presentimiento de que esa ruina... irá más allá de la mera exclusión social.",
						"vietnamese": "Tôi có dự cảm chẳng lành rằng sự hủy diệt đó... dường như sẽ vượt xa sự chôn vùi xã hội đơn thuần.",
						"thai": "ฉันมีความรู้สึกไม่ดีว่าการทำลายล้างนั้น... อาจจะเกินกว่าแค่การถูกขับออกจากสังคม",
						"hindi": "मुझे एक अशुभ शंका है कि यह विनाश... सिर्फ सामाजिक बहिष्कार से कहीं ज़्यादा होगा।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그녀의 경고는, 탐험대의 발걸음을 멈추지 못했다.",
						"english": "Her warning, however, did not halt the expedition's progress.",
						"japanese": "彼女の警告は、探検隊の歩みを止めることはできなかった。",
						"chinese": "然而，她的警告未能阻止探险队的脚步。",
						"french": "Son avertissement, cependant, n'arrêta pas la progression de l'expédition.",
						"spanish": "Sin embargo, su advertencia no detuvo los pasos de la expedición.",
						"vietnamese": "Tuy nhiên, lời cảnh báo của cô ấy đã không thể ngăn được bước chân của đoàn thám hiểm.",
						"thai": "คำเตือนของเธอ ไม่สามารถหยุดยั้งก้าวเดินของคณะสำรวจได้",
						"hindi": "हालांकि, उसकी चेतावनी अभियान की प्रगति को नहीं रोक पाई।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "쓸데없는 망상은… 결국 자신을 해칠 뿐이다.",
						"english": "Useless delusions... will only harm oneself in the end.",
						"japanese": "無駄な妄想は…結局自分を傷つけるだけだ。",
						"chinese": "无谓的妄想… 终将自伤。",
						"french": "Les illusions inutiles... ne feront que vous nuire à la fin.",
						"spanish": "Las ilusiones inútiles... al final solo te dañarán a ti mismo.",
						"vietnamese": "Những ảo tưởng vô ích... cuối cùng chỉ tự gây hại cho bản thân mà thôi.",
						"thai": "ภาพลวงตาที่ไร้ประโยชน์... สุดท้ายก็จะทำร้ายตัวเองเท่านั้น",
						"hindi": "बेकार के भ्रम... अंत में केवल खुद को ही नुकसान पहुंचाएंगे।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "bex"
				},
				{
					"type": "speech",
					"content": {
						"korean": "네메시스의 완벽함은… 너무 인공적이야.",
						"english": "Nemesis's perfection... feels too artificial.",
						"japanese": "ネメシスの完璧さは…あまりにも人工的だ。",
						"chinese": "涅墨西斯的完美… 太过于人工化了。",
						"french": "La perfection de Némésis... est trop artificielle.",
						"spanish": "La perfección de Némesis... es demasiado artificial.",
						"vietnamese": "Sự hoàn hảo của Nemesis... quá nhân tạo.",
						"thai": "ความสมบูรณ์แบบของเนเมซิส... มันดูเป็นสิ่งประดิษฐ์เกินไป",
						"hindi": "नेमेसिस की पूर्णता... बहुत कृत्रिम लगती है।"
					},
					"emotion": "sad",
					"speaker": "bex"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "나도… 슬슬 뭔가 이상하다는 느낌이 들어.",
						"english": "I, too... am starting to feel that something is amiss.",
						"japanese": "私も…そろそろ何かおかしいと感じ始めた。",
						"chinese": "我也… 开始觉得有些不对劲了。",
						"french": "Moi aussi... je commence à sentir que quelque chose ne va pas.",
						"spanish": "Yo también... empiezo a sentir que algo anda mal.",
						"vietnamese": "Tôi cũng... dần cảm thấy có điều gì đó không ổn.",
						"thai": "ฉันเองก็... เริ่มรู้สึกว่ามีบางอย่างผิดปกติแล้ว",
						"hindi": "मुझे भी... धीरे-धीरे लग रहा है कि कुछ गड़बड़ है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "마치 아주 오래된 무언가를… 감추고 있는 것 같아.",
						"english": "As if something very ancient... is being hidden.",
						"japanese": "まるで、とても古い何かを…隠しているようだ。",
						"chinese": "仿佛… 隐藏着某种非常古老的东西。",
						"french": "Comme si quelque chose de très ancien... était caché.",
						"spanish": "Como si algo muy antiguo... estuviera siendo ocultado.",
						"vietnamese": "Cứ như thể đang che giấu một thứ gì đó rất cổ xưa...",
						"thai": "เหมือนกำลังซ่อนบางสิ่งที่เก่าแก่มาก... เอาไว้",
						"hindi": "जैसे कोई बहुत पुरानी चीज़... छिपाई जा रही हो।"
					},
					"emotion": "sad",
					"speaker": "bex"
				},
				{
					"type": "speech",
					"content": {
						"korean": "지나친 호기심은… 대가를 치르게 할 것이다.",
						"english": "Excessive curiosity... will exact a price.",
						"japanese": "過度な好奇心は…代償を払わせるだろう。",
						"chinese": "过度的好奇心…会让你付出代价。",
						"french": "La curiosité excessive... vous coûtera cher.",
						"spanish": "La curiosidad excesiva… te hará pagar un precio.",
						"vietnamese": "Sự tò mò quá mức… sẽ phải trả giá.",
						"thai": "ความอยากรู้อยากเห็นที่มากเกินไป... จะต้องจ่ายราคา",
						"hindi": "अत्यधिक जिज्ञासा... तुम्हें चुकाना पड़ेगा।"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"speaker": "bex"
				},
				{
					"speaker": "bex",
					"content": {
						"korean": "더 이상은 위험해. 네메시스는 모든 것을 지배하고 있어.",
						"english": "It's too dangerous now. Nemesis controls everything.",
						"japanese": "これ以上は危険だ。ネメシスは全てを支配している。",
						"chinese": "现在太危险了。涅墨西斯控制着一切。",
						"french": "C'est trop dangereux maintenant. Némésis contrôle tout.",
						"spanish": "Ya es demasiado peligroso. Némesis lo controla todo.",
						"vietnamese": "Nguy hiểm lắm rồi. Nemesis đang kiểm soát mọi thứ.",
						"thai": "ตอนนี้มันอันตรายเกินไป เนเมซิสควบคุมทุกสิ่ง",
						"hindi": "अब और ख़तरा है। नेเมซิส सब कुछ नियंत्रित करता है।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "멈출 수 없어. 이 완벽한 가면 뒤에 뭐가 있는지 알아야겠어.",
						"english": "Can't stop now. I must know what's behind this perfect mask.",
						"japanese": "もう止められない。この完璧な仮面の裏に何があるのか知る必要がある。",
						"chinese": "我不能停下。我必须知道这完美面具后面是什么。",
						"french": "Je ne peux pas m'arrêter. Je dois savoir ce qu'il y a derrière ce masque parfait.",
						"spanish": "No puedo parar. Debo saber qué hay detrás de esta máscara perfecta.",
						"vietnamese": "Không thể dừng lại. Tôi phải biết điều gì ẩn sau chiếc mặt nạ hoàn hảo này.",
						"thai": "หยุดไม่ได้แล้ว ฉันต้องรู้ว่ามีอะไรอยู่เบื้องหลังหน้ากากที่สมบูรณ์แบบนี้",
						"hindi": "रुक नहीं सकता। मुझे जानना होगा कि इस उत्तम मुखौटे के पीछे क्या है।"
					}
				},
				{
					"content": {
						"korean": "그가 보는 것은… 우리가 상상하는 것 이상일 거야.",
						"english": "What he sees... must be beyond our imagination.",
						"japanese": "彼が見ているものは…我々の想像を絶するだろう。",
						"chinese": "他所看到的…必定超出我们的想象。",
						"french": "Ce qu'il voit... doit être au-delà de notre imagination.",
						"spanish": "Lo que él ve... debe ir más allá de nuestra imaginación.",
						"vietnamese": "Những gì hắn thấy… hẳn phải vượt xa trí tưởng tượng của chúng ta.",
						"thai": "สิ่งที่เขาเห็น... ต้องเกินกว่าจินตนาการของเรา",
						"hindi": "वह जो देखता है... हमारी कल्पना से परे होगा।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "bex"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "너희의 어리석음이… 결국 파멸을 부를 것이다.",
						"english": "Your foolishness... will ultimately lead to ruin.",
						"japanese": "お前たちの愚かさが…結局、破滅を招くだろう。",
						"chinese": "你们的愚蠢…终将导致毁灭。",
						"french": "Votre folie... finira par vous mener à la ruine.",
						"spanish": "Vuestra estupidez… al final os llevará a la ruina.",
						"vietnamese": "Sự ngu ngốc của các ngươi… cuối cùng sẽ dẫn đến diệt vong.",
						"thai": "ความโง่เขลาของเจ้า... ในที่สุดจะนำไปสู่ความหายนะ",
						"hindi": "तुम्हारी मूर्खता... अंततः विनाश लाएगी।"
					},
					"emotion": "angry"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "네메시스 님의 권위에 도전하는 자는… 영원히 고통받을 것이다.",
						"english": "Those who challenge Lady Nemesis's authority... shall suffer eternally.",
						"japanese": "ネメシス様の権威に挑む者は…永遠に苦しむだろう。",
						"chinese": "敢于挑战涅墨西斯大人权威之人…将永远承受痛苦。",
						"french": "Ceux qui défient l'autorité de Dame Némésis... souffriront éternellement.",
						"spanish": "Quienes desafíen la autoridad de Lady Némesis... sufrirán eternamente.",
						"vietnamese": "Kẻ nào dám thách thức quyền uy của Nữ thần Nemesis... sẽ phải chịu đựng sự đau khổ vĩnh hằng.",
						"thai": "ผู้ใดที่ท้าทายอำนาจของท่านเนเมซิส... จะต้องทนทุกข์ทรมานไปชั่วนิรันดร์",
						"hindi": "जो कोई भी लेडी नेमेसिस के अधिकार को चुनौती देगा... वह अनंत काल तक पीड़ा भोगेगा।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아직… 끝나지 않았어. 이대로 물러날 순 없어.",
						"english": "It's not... over yet. I can't retreat like this.",
						"japanese": "まだ…終わってない。このまま退くわけにはいかない。",
						"chinese": "还没…结束。不能就这样退缩。",
						"french": "Ce n'est pas... encore fini. Je ne peux pas battre en retraite comme ça.",
						"spanish": "Todavía no... ha terminado. No puedo retroceder así.",
						"vietnamese": "Chưa... kết thúc. Ta không thể rút lui như thế này được.",
						"thai": "ยัง...ไม่จบ ฉันถอยแบบนี้ไม่ได้",
						"hindi": "अभी तक... खत्म नहीं हुआ। मैं ऐसे पीछे नहीं हट सकता।"
					},
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"dialogue": [
				{
					"emotion": "angry",
					"content": {
						"korean": "감히… 네메시스 님의 영역을 침범하려 했나.",
						"english": "How dare you... try to invade Nemesis's domain?",
						"japanese": "よくも…ネメシス様の領域を侵そうとしたな。",
						"chinese": "你敢…侵图涅墨西斯大人的领域吗？",
						"french": "Comment oses-tu... tenter d'envahir le domaine de Némésis ?",
						"spanish": "¿Cómo osas... intentar invadir el dominio de Némesis?",
						"vietnamese": "Dám… xâm phạm lãnh địa của Nemesis sao?",
						"thai": "บังอาจ... คิดจะบุกรุกอาณาเขตของท่านเนเมซิสหรือ",
						"hindi": "तुम्हारी हिम्मत कैसे हुई... नेमेसिस के क्षेत्र में घुसने की कोशिश करने की?"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "이 가면을 벗겨주지.",
						"english": "I'll rip this mask off you.",
						"japanese": "この仮面を剥がしてやる。",
						"chinese": "我要把这个面具剥下来。",
						"french": "Je vais t'arracher ce masque.",
						"spanish": "Te arrancaré esta máscara.",
						"vietnamese": "Ta sẽ lột chiếc mặt nạ này của ngươi.",
						"thai": "ฉันจะถอดหน้ากากนี้ออกให้เอง",
						"hindi": "मैं यह मुखौटा उतार दूँगा।"
					},
					"speaker": "character_any"
				},
				{
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "bex"
				},
				{
					"speaker": "bex",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "조심해… 저건… 그저 시작일 뿐이야.",
						"english": "Be careful... that's... just the beginning.",
						"japanese": "気をつけろ…あれは…ただの始まりに過ぎない。",
						"chinese": "小心…那只是…刚刚开始。",
						"french": "Fais attention... ce n'est... que le début.",
						"spanish": "Ten cuidado… eso es… solo el principio.",
						"vietnamese": "Hãy cẩn thận… đó… chỉ mới là khởi đầu thôi.",
						"thai": "ระวังให้ดี... นั่น... เป็นเพียงแค่จุดเริ่มต้นเท่านั้น",
						"hindi": "सावधान... वह... बस शुरुआत है।"
					}
				},
				{
					"speaker": "bex",
					"duration_ms": 400,
					"type": "direction",
					"direction": "down",
					"action": "exit"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "벡스… 쓸데없는 짓을. 네메시스 님은 모든 것을 알고 계신다.",
						"english": "Vex... futile effort. Lord Nemesis knows everything.",
						"japanese": "ベックス…無駄なことを。ネメシス様は全てご存知だ。",
						"chinese": "维克斯…徒劳无用。涅墨西斯大人知道一切。",
						"french": "Vex... effort futile. Seigneur Némésis sait tout.",
						"spanish": "Vex… inútil. Lord Némesis lo sabe todo.",
						"vietnamese": "Vex… vô ích thôi. Chúa tể Nemesis biết tất cả mọi thứ.",
						"thai": "เว็กซ์... ไร้ประโยชน์ ท่านเนเมซิสทรงรู้ทุกสิ่ง",
						"hindi": "वेक्स... व्यर्थ प्रयास। लॉर्ड नेमेसिस सब कुछ जानते हैं।"
					},
					"speaker": "random_boss"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "sad",
					"content": {
						"korean": "크윽… 나는… 그저… 일부일 뿐… 진정한… 주인은…",
						"english": "Ugh... I am... just... a part... The true... master is...",
						"japanese": "くっ…私は…ただの…一部に過ぎない…真の…主は…",
						"chinese": "咳…我只是…一部分…真正的…主人是…",
						"french": "Argh... je ne suis... qu'une... partie... Le vrai... maître est...",
						"spanish": "Ugh… yo… solo… soy una parte… El verdadero… maestro es…",
						"vietnamese": "Khụ… ta… chỉ là… một phần… Chủ nhân thực sự…",
						"thai": "อึก... ฉัน... เป็นเพียง... ส่วนหนึ่ง... เจ้านายที่แท้จริงคือ...",
						"hindi": "उफ़... मैं... बस... एक हिस्सा... असली... मालिक..."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "일부? 진짜는 따로 있단 말인가.",
						"english": "Only a part? Is there a true one?",
						"japanese": "一部だと？まさか、本物は他にあるのか？",
						"chinese": "一部分？难道真正的还在别处？",
						"french": "Une partie seulement ? Y en aurait-il une vraie ?",
						"spanish": "¿Solo una parte? ¿Existe la verdadera?",
						"vietnamese": "Chỉ một phần thôi? Vậy cái thật sự nằm ở đâu?",
						"thai": "แค่บางส่วน? หรือว่าของจริงอยู่ที่อื่น?",
						"hindi": "केवल एक हिस्सा? क्या असली चीज़ कहीं और है?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "쓰러진 그림자 뒤로, 더 거대한 어둠이 드리워진 듯했다.",
						"english": "Behind the fallen shadow, a greater darkness seemed to loom.",
						"japanese": "倒れた影の向こうに、さらに巨大な闇が広がっているようだった。",
						"chinese": "倒下的影子背后，似乎笼罩着更为巨大的黑暗。",
						"french": "Derrière l'ombre vaincue, une obscurité encore plus grande semblait se profiler.",
						"spanish": "Detrás de la sombra caída, una oscuridad aún mayor parecía cernirse.",
						"vietnamese": "Đằng sau bóng tối đã ngã xuống, một màn đêm u ám lớn hơn dường như đang bao trùm.",
						"thai": "เบื้องหลังเงามืดที่ล้มลง ดูเหมือนความมืดมิดที่ยิ่งใหญ่กว่ากำลังคืบคลานเข้ามา",
						"hindi": "गिरे हुए परछाई के पीछे, एक और भी बड़ा अंधेरा छाया हुआ था।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "완벽한 가면 뒤, 숨겨진 진실을 향한 여정은 이제 시작이었다.",
						"english": "Behind the perfect mask, the journey towards the hidden truth had just begun.",
						"japanese": "完璧な仮面の後ろに隠された真実への旅は、今始まったばかりだった。",
						"chinese": "完美面具之下，探寻隐藏真相的旅程才刚刚开始。",
						"french": "Derrière le masque parfait, le voyage vers la vérité cachée ne faisait que commencer.",
						"spanish": "Detrás de la máscara perfecta, el viaje hacia la verdad oculta apenas comenzaba.",
						"vietnamese": "Đằng sau chiếc mặt nạ hoàn hảo, hành trình tìm kiếm sự thật ẩn giấu chỉ mới bắt đầu.",
						"thai": "เบื้องหลังหน้ากากที่สมบูรณ์แบบ การเดินทางสู่ความจริงที่ซ่อนอยู่เพิ่งจะเริ่มต้นขึ้น",
						"hindi": "सही नकाब के पीछे, छिपी हुई सच्चाई की यात्रा अभी शुरू हुई थी।"
					},
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"id": 15
		}
	]
} as const;
