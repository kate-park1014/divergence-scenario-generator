export const scenario_forest_ciphra_31_01 = {
	"scenario_id": "forest_ciphra_31_01",
	"order": 1,
	"act": "intro",
	"theme": "forest",
	"actors": {
		"ela": {
			"id": "mon_24765cb2-6fc0-452e-8969-871a82349c70",
			"name": {
				"korean": "엘라",
				"english": "Ela",
				"japanese": "エラ",
				"chinese": "艾拉",
				"french": "Ela",
				"spanish": "Ela",
				"vietnamese": "Ela",
				"thai": "เอล่า",
				"hindi": "एला"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/55d3e9ee-c589-40ab-dfa4-a658bbddd400/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/cfacc842-115e-4175-a7fa-3111a468ed00/public"
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
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "짙은 안개가 길을 삼켰다. 미로 같은 숲에 갇힌 탐험대.",
						"english": "Thick fog swallowed the path. An expedition trapped in a labyrinthine forest.",
						"japanese": "深い霧が道を飲み込んだ。迷路のような森に閉じ込められた探検隊。",
						"chinese": "浓雾吞噬了道路。探险队被困在这迷宫般的森林中。",
						"french": "Un épais brouillard a englouti le chemin. Une expédition piégée dans une forêt labyrinthique.",
						"spanish": "Una densa niebla engulló el camino. Una expedición atrapada en un bosque laberíntico.",
						"vietnamese": "Sương mù dày đặc nuốt chửng con đường. Đoàn thám hiểm bị mắc kẹt trong khu rừng như mê cung.",
						"thai": "หมอกหนาทึบกลืนกินเส้นทาง คณะสำรวจติดอยู่ในป่าที่เหมือนเขาวงกต",
						"hindi": "घने कोहरे ने रास्ता निगल लिया। एक खोजी दल एक भूलभुलैया जैसे जंगल में फँस गया।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "여기가… 그 저주받은 숲인가?",
						"english": "Is this… the cursed forest?",
						"japanese": "ここが…あの呪われた森なのか？",
						"chinese": "这里就是……那片被诅咒的森林吗？",
						"french": "Est-ce… la forêt maudite ?",
						"spanish": "¿Es este… el bosque maldito?",
						"vietnamese": "Đây có phải… là khu rừng bị nguyền rủa đó không?",
						"thai": "นี่คือ… ป่าต้องสาปนั่นหรือ?",
						"hindi": "क्या यह… वही शापित जंगल है?"
					},
					"emotion": "sad"
				},
				{
					"speaker": "ela",
					"type": "direction",
					"spot": [
						4,
						2
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "네. 7일 안에 심장을 찾아야만 살 수 있어요.",
						"english": "Yes. You must find the heart within 7 days to survive.",
						"japanese": "はい。7日以内に心臓を見つけなければ生き残れません。",
						"chinese": "是的。你们必须在七日内找到心臓才能活下来。",
						"french": "Oui. Vous devez trouver le cœur dans les 7 jours pour survivre.",
						"spanish": "Sí. Debéis encontrar el corazón en 7 días para sobrevivir.",
						"vietnamese": "Vâng. Anh/chị phải tìm thấy trái tim trong vòng 7 ngày để sống sót.",
						"thai": "ใช่แล้ว ท่านต้องหาหัวใจให้เจอภายใน 7 วันจึงจะรอด",
						"hindi": "हाँ। आपको 7 दिनों के भीतर हृदय ढूंढना होगा तभी आप बच सकते हैं।"
					},
					"speaker": "ela",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "심장? 그게 뭔데?",
						"english": "The heart? What is that?",
						"japanese": "心臓？それは何だ？",
						"chinese": "心臓？那是什么？",
						"french": "Le cœur ? Qu'est-ce que c'est ?",
						"spanish": "¿El corazón? ¿Qué es eso?",
						"vietnamese": "Trái tim? Đó là gì vậy?",
						"thai": "หัวใจ? มันคืออะไร?",
						"hindi": "हृदय? वह क्या है?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "숲의 가장 깊은 곳에 있죠. 유일한 구원이에요.",
						"english": "It's in the deepest part of the forest. It's our only salvation.",
						"japanese": "森の最も深い場所にあります。それが唯一の救済です。",
						"chinese": "它在森林最深处。是唯一的救赎。",
						"french": "Il se trouve au plus profond de la forêt. C'est notre unique salut.",
						"spanish": "Está en lo más profundo del bosque. Es nuestra única salvación.",
						"vietnamese": "Nó ở nơi sâu nhất của rừng. Là sự cứu rỗi duy nhất.",
						"thai": "มันอยู่ในส่วนที่ลึกที่สุดของป่า เป็นความรอดเดียวของเรา",
						"hindi": "यह जंगल के सबसे गहरे हिस्से में है। यही हमारी एकमात्र मुक्ति है।"
					},
					"type": "speech",
					"speaker": "ela",
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "ela",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"emotion": "happy",
					"content": {
						"korean": "여기로 가면 돼요. 희미한 빛이 길을 알려줄 거예요.",
						"english": "Go this way. A faint light will guide you.",
						"japanese": "こちらへ行けば大丈夫です。微かな光が道を教えてくれるでしょう。",
						"chinese": "走这边就行了。微弱的光芒会指引方向。",
						"french": "Allez par ici. Une faible lumière vous guidera.",
						"spanish": "Id por aquí. Una luz tenue os guiará.",
						"vietnamese": "Đi lối này. Một tia sáng yếu ớt sẽ dẫn lối.",
						"thai": "ไปทางนี้ได้เลย แสงสลัวๆ จะนำทางท่านเอง",
						"hindi": "इस तरफ जाइए। एक मंद रोशनी आपको रास्ता दिखाएगी।"
					},
					"speaker": "ela",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이 빛이… 구원의 길이라고?",
						"english": "This light... the path to salvation?",
						"japanese": "この光が…救済の道だと？",
						"chinese": "这光芒…是救赎之路吗？",
						"french": "Cette lumière… le chemin du salut ?",
						"spanish": "Esta luz... ¿el camino a la salvación?",
						"vietnamese": "Ánh sáng này... là con đường cứu rỗi sao?",
						"thai": "แสงนี้... คือหนทางแห่งความรอดหรือ?",
						"hindi": "यह प्रकाश... क्या मोक्ष का मार्ग है?"
					},
					"emotion": "base"
				},
				{
					"emotion": "happy",
					"type": "speech",
					"speaker": "ela",
					"content": {
						"korean": "네. 절 믿으세요. 저주의 끝에는 해방이 있을 거예요.",
						"english": "Yes. Trust me. At the end of the curse, there will be liberation.",
						"japanese": "はい。私を信じてください。呪いの終わりには解放があります。",
						"chinese": "是的。相信我。诅咒的尽头，必将是解放。",
						"french": "Oui. Croyez-moi. Au bout de la malédiction, il y aura la libération.",
						"spanish": "Sí. Confía en mí. Al final de la maldición, habrá liberación.",
						"vietnamese": "Vâng. Hãy tin tôi. Cuối cùng của lời nguyền sẽ là sự giải thoát.",
						"thai": "ใช่แล้ว เชื่อฉันสิ เมื่อคำสาปสิ้นสุดลง อิสรภาพจะมาถึง",
						"hindi": "हाँ। मुझ पर विश्वास करो। शाप के अंत में मुक्ति होगी।"
					}
				},
				{
					"content": {
						"korean": "왠지 모르게 불안한데….",
						"english": "I feel uneasy somehow...",
						"japanese": "なんだか不安だ…",
						"chinese": "不知为何，总有些不安…",
						"french": "Je me sens inquiet, je ne sais pas pourquoi…",
						"spanish": "Me siento inquieto de alguna manera...",
						"vietnamese": "Sao tôi lại cảm thấy bất an thế nào đó...",
						"thai": "รู้สึกไม่สบายใจยังไงไม่รู้...",
						"hindi": "मुझे किसी तरह की बेचैनी महसूस हो रही है..."
					},
					"speaker": "character_2",
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "ela",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						2
					]
				},
				{
					"emotion": "base",
					"content": {
						"korean": "시간이 중요해요. 숲의 마법은 시간을 왜곡하죠.",
						"english": "Time is crucial. The forest's magic distorts time.",
						"japanese": "時間が重要です。森の魔法は時間を歪めます。",
						"chinese": "时间至关重要。森林的魔法会扭曲时间。",
						"french": "Le temps est crucial. La magie de la forêt déforme le temps.",
						"spanish": "El tiempo es crucial. La magia del bosque distorsiona el tiempo.",
						"vietnamese": "Thời gian rất quan trọng. Phép thuật của rừng làm méo mó thời gian.",
						"thai": "เวลาเป็นสิ่งสำคัญ เวทมนตร์ของป่าบิดเบือนเวลา",
						"hindi": "समय महत्वपूर्ण है। जंगल का जादू समय को विकृत करता है।"
					},
					"type": "speech",
					"speaker": "ela"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "벌써 하루가 다 간 것 같아…",
						"english": "It feels like a whole day has already passed...",
						"japanese": "もう一日が終わってしまったようだ…",
						"chinese": "感觉一整天都过去了…",
						"french": "On dirait qu'une journée entière est déjà passée...",
						"spanish": "Parece que ya ha pasado un día entero...",
						"vietnamese": "Hình như đã hết cả một ngày rồi...",
						"thai": "รู้สึกเหมือนเวลาผ่านไปทั้งวันแล้ว...",
						"hindi": "ऐसा लगता है जैसे पूरा दिन बीत चुका है..."
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "ela",
					"content": {
						"korean": "서두르지 않으면 영원히 갇히게 될 거예요. 하지만 너무 걱정 마세요.",
						"english": "If you don't hurry, you'll be trapped forever. But don't worry too much.",
						"japanese": "急がないと、永遠に閉じ込められてしまいますよ。でも、あまり心配しないでください。",
						"chinese": "如果不抓紧，你们会被永远困住。但也不必太担心。",
						"french": "Si vous ne vous dépêchez pas, vous serez piégés pour toujours. Mais ne vous inquiétez pas trop.",
						"spanish": "Si no te das prisa, quedarás atrapado para siempre. Pero no te preocupes demasiado.",
						"vietnamese": "Nếu không nhanh lên, bạn sẽ bị mắc kẹt mãi mãi. Nhưng đừng quá lo lắng.",
						"thai": "ถ้าไม่รีบ คุณจะติดอยู่ที่นี่ตลอดไป แต่ไม่ต้องกังวลมากนัก",
						"hindi": "अगर तुम जल्दी नहीं करोगे, तो हमेशा के लिए फंस जाओगे। लेकिन ज्यादा चिंता मत करो।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "구원의 길은 항상 열려있으니까요.",
						"english": "For the path to salvation is always open.",
						"japanese": "救済の道は常に開かれていますから。",
						"chinese": "因为救赎之路总是敞开的。",
						"french": "Car le chemin du salut est toujours ouvert.",
						"spanish": "Porque el camino a la salvación siempre está abierto.",
						"vietnamese": "Vì con đường cứu rỗi luôn rộng mở.",
						"thai": "เพราะหนทางแห่งความรอดเปิดอยู่เสมอ",
						"hindi": "क्योंकि मोक्ष का मार्ग हमेशा खुला रहता है।"
					},
					"type": "speech",
					"speaker": "ela",
					"emotion": "happy"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "ela",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						2
					]
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "점점 더 깊어지는 것 같아. 되돌아갈 수 없을 것 같아….",
						"english": "It feels like it's getting deeper and deeper. I don't think we can go back...",
						"japanese": "どんどん深くなっているようだ。もう引き返せないだろう…",
						"chinese": "感觉越来越深了。我们可能回不去了…",
						"french": "On dirait que ça s'enfonce de plus en plus. Je ne pense pas que nous puissions revenir en arrière...",
						"spanish": "Parece que se está haciendo cada vez más profundo. No creo que podamos volver...",
						"vietnamese": "Càng ngày càng sâu hơn. Tôi nghĩ chúng ta không thể quay lại được nữa...",
						"thai": "รู้สึกเหมือนยิ่งลึกเข้าไปเรื่อยๆ ฉันว่าเรากลับไม่ได้แล้ว...",
						"hindi": "ऐसा लगता है कि यह गहरा होता जा रहा है। मुझे नहीं लगता कि हम वापस जा सकते हैं..."
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "ela",
					"content": {
						"korean": "후회해도 소용없어요. 이미 당신들은 숲의 운명에 묶였으니까.",
						"english": "Regret is useless. You are already bound to the forest's destiny.",
						"japanese": "後悔しても無駄ですよ。あなた方は既に森の運命に縛られていますから。",
						"chinese": "后悔也无济于事。你们早已被森林的命运所束缚。",
						"french": "Le regret est inutile. Vous êtes déjà liés au destin de la forêt.",
						"spanish": "El arrepentimiento es inútil. Ya estáis atados al destino del bosque.",
						"vietnamese": "Hối tiếc cũng vô ích. Các bạn đã bị trói buộc vào vận mệnh của khu rừng rồi.",
						"thai": "เสียใจไปก็ไม่มีประโยชน์ พวกคุณถูกผูกมัดกับชะตากรรมของป่าแล้ว",
						"hindi": "पछतावा बेकार है। तुम पहले से ही जंगल के भाग्य से बंधे हो।"
					}
				},
				{
					"content": {
						"korean": "운명이라고?",
						"english": "Destiny?",
						"japanese": "運命だと？",
						"chinese": "命运？",
						"french": "Le destin ?",
						"spanish": "¿Destino?",
						"vietnamese": "Vận mệnh ư?",
						"thai": "โชคชะตาหรือ?",
						"hindi": "भाग्य?"
					},
					"type": "speech",
					"speaker": "character_1",
					"emotion": "base"
				},
				{
					"emotion": "happy",
					"type": "speech",
					"speaker": "ela",
					"content": {
						"korean": "네. 숲의 심장만이 당신들을 구원할 수 있어요. 곧 다다를 거예요.",
						"english": "Yes. Only the Heart of the Forest can save you. You'll reach it soon.",
						"japanese": "はい。森の心臓だけがあなたたちを救うことができます。もうすぐそこです。",
						"chinese": "是的。只有森林之心才能拯救你们。很快就会到达的。",
						"french": "Oui. Seul le Cœur de la Forêt peut vous sauver. Vous l'atteindrez bientôt.",
						"spanish": "Sí. Solo el Corazón del Bosque puede salvaros. Lo alcanzaréis pronto.",
						"vietnamese": "Vâng. Chỉ có Trái tim Rừng mới có thể cứu các bạn. Sắp đến rồi.",
						"thai": "ใช่แล้ว. มีเพียงหัวใจแห่งป่าเท่านั้นที่จะช่วยพวกเจ้าได้ ใกล้จะถึงแล้ว.",
						"hindi": "हाँ। केवल वन का हृदय ही तुम्हें बचा सकता है। तुम जल्द ही वहाँ पहुँचोगे।"
					}
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "숲의 가장 깊은 곳, 정체 모를 어둠이 탐험대를 맞이한다.",
						"english": "In the deepest part of the forest, an unknown darkness greets the expedition.",
						"japanese": "森の最も深い場所で、正体不明の闇が探検隊を迎える。",
						"chinese": "在森林最深处，未知的黑暗迎接了探险队。",
						"french": "Au plus profond de la forêt, une obscurité inconnue accueille l'expédition.",
						"spanish": "En lo más profundo del bosque, una oscuridad desconocida recibe a la expedición.",
						"vietnamese": "Ở nơi sâu thẳm nhất của khu rừng, một bóng tối vô danh chào đón đoàn thám hiểm.",
						"thai": "ณ ส่วนที่ลึกที่สุดของป่า ความมืดมิดที่ไม่อาจระบุได้ต้อนรับคณะสำรวจ",
						"hindi": "वन के सबसे गहरे हिस्से में, एक अज्ञात अँधेरा अभियान दल का स्वागत करता है।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "감히 이곳까지 발을 들이다니… 어리석은 인간들.",
						"english": "To dare set foot in this place... Foolish humans.",
						"japanese": "よくもここまで足を踏み入れたな… 愚かな人間どもめ。",
						"chinese": "竟敢踏足此地……愚蠢的人类。",
						"french": "Oser mettre les pieds ici... Humains stupides.",
						"spanish": "¿Cómo osáis pisar este lugar...? Humanos necios.",
						"vietnamese": "Dám đặt chân đến nơi này... Lũ người ngu ngốc.",
						"thai": "กล้าดียังไงถึงเหยียบย่างมาถึงที่นี่... มนุษย์โง่เขลา!",
						"hindi": "यहाँ पैर रखने की हिम्मत की... मूर्ख इंसान।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "네가… 저주의 근원인가?",
						"english": "Are you... the source of the curse?",
						"japanese": "お前が…呪いの根源なのか？",
						"chinese": "你就是……诅咒的根源吗？",
						"french": "Es-tu... la source de la malédiction ?",
						"spanish": "¿Eres... la fuente de la maldición?",
						"vietnamese": "Ngươi... là nguồn gốc của lời nguyền sao?",
						"thai": "เจ้า... คือต้นตอของคำสาปหรือ?",
						"hindi": "क्या तुम... शाप का स्रोत हो?"
					}
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "탐험대는 깊은 어둠 속으로 잠식된다. 숲의 일부가 되어간다.",
						"english": "The expedition is swallowed by the deep darkness. Becoming one with the forest.",
						"japanese": "探検隊は深い闇に飲み込まれていく。森の一部となるのだ。",
						"chinese": "探险队被深邃的黑暗吞噬。逐渐成为森林的一部分。",
						"french": "L'expédition est engloutie par les ténèbres profondes. Devenant une partie de la forêt.",
						"spanish": "La expedición es engullida por la profunda oscuridad. Se convierte en parte del bosque.",
						"vietnamese": "Đoàn thám hiểm bị nuốt chửng vào bóng tối sâu thẳm. Dần trở thành một phần của khu rừng.",
						"thai": "คณะสำรวจถูกกลืนกินโดยความมืดมิดอันลึกซึ้ง กลายเป็นส่วนหนึ่งของป่า",
						"hindi": "अभियान दल गहरे अँधेरे में समा जाता है। वन का एक हिस्सा बनता जा रहा है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "하찮은 존재들이… 감히 신에게 대적하려 했는가.",
						"english": "Insolent mortals... Dared to defy a god?",
						"japanese": "下賤な存在どもめ… 神に逆らおうとしたか。",
						"chinese": "卑微的蝼蚁们… 竟敢妄图挑战神明。",
						"french": "Créatures insignifiantes... Osiez-vous défier un dieu ?",
						"spanish": "Seres insignificantes... ¿Osasteis desafiar a un dios?",
						"vietnamese": "Những kẻ hèn mọn... Dám chống lại thần thánh sao?",
						"thai": "พวกสิ่งมีชีวิตชั้นต่ำ... บังอาจคิดจะต่อต้านเทพเจ้าหรือไง",
						"hindi": "तुच्छ प्राणी... तुमने एक देवता को चुनौती देने की हिम्मत की?"
					},
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "아직… 끝나지 않았어….",
						"english": "It's not... over yet...",
						"japanese": "まだ… 終わっていない…。",
						"chinese": "还没… 结束呢…",
						"french": "Ce n'est pas... encore fini...",
						"spanish": "Aún no... ha terminado...",
						"vietnamese": "Vẫn chưa... kết thúc đâu...",
						"thai": "ยังไม่... จบหรอก...",
						"hindi": "अभी तक… खत्म नहीं हुआ है…"
					}
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "크으윽… 겨우 이 정도라니…",
						"english": "Ugh... Is this all you've got...?",
						"japanese": "ぐぅ…たったこれだけとは…",
						"chinese": "呃啊……就这点程度吗……",
						"french": "Ugh... Seulement ça...?",
						"spanish": "Ugh... ¿Solo esto...?",
						"vietnamese": "Ư... Chỉ có thế này thôi sao...?",
						"thai": "อึก... แค่เท่านี้เองหรือนี่...",
						"hindi": "उफ़... बस इतना ही..."
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이것은 시작일 뿐… 숲의 진정한 주인을 만나게 될 것이다….",
						"english": "This is only the beginning... You will meet the true master of the forest....",
						"japanese": "これは始まりにすぎない… 森の真の主人に出会うことになるだろう…。",
						"chinese": "这只是个开始……你将见到森林的真正主人……",
						"french": "Ce n'est que le début... Vous rencontrerez le véritable maître de la forêt....",
						"spanish": "Esto es solo el principio... Conoceréis al verdadero amo del bosque....",
						"vietnamese": "Đây chỉ là khởi đầu... Các ngươi sẽ gặp chủ nhân thật sự của khu rừng....",
						"thai": "นี่เป็นเพียงจุดเริ่มต้น... เจ้าจะได้พบกับเจ้าของที่แท้จริงของป่า....",
						"hindi": "यह तो बस शुरुआत है... तुम वन के असली मालिक से मिलोगे...।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "무슨 소리지? 주인이 누구야!",
						"english": "What are you talking about? Who's the master!",
						"japanese": "何を言ってる？主人って誰だ！",
						"chinese": "你说什么？主人是谁！",
						"french": "De quoi parles-tu ? Qui est le maître !",
						"spanish": "¿De qué hablas? ¡¿Quién es el amo?!",
						"vietnamese": "Ngươi đang nói gì vậy? Chủ nhân là ai!",
						"thai": "เจ้ากำลังพูดถึงอะไร? ใครคือเจ้าของ!",
						"hindi": "तुम क्या कह रहे हो? मालिक कौन है!"
					}
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "정체 모를 자는 쓰러졌다. 그러나 숲의 압도적인 기운은 여전하다.",
						"english": "The unknown entity fell. But the forest's overwhelming aura remains.",
						"japanese": "正体不明の者は倒れた。しかし、森の圧倒的な気配は依然として残っている。",
						"chinese": "未知之物倒下了。然而，森林那压倒性的气息依然存在。",
						"french": "L'entité inconnue est tombée. Mais l'aura écrasante de la forêt demeure.",
						"spanish": "La entidad desconocida cayó. Pero el aura abrumadora del bosque persiste.",
						"vietnamese": "Thực thể vô danh đã ngã xuống. Nhưng khí tức áp đảo của khu rừng vẫn còn.",
						"thai": "ผู้ที่ไม่อาจระบุตัวตนได้ล้มลงแล้ว ทว่ากลิ่นอายอันน่าเกรงขามของป่ายังคงอยู่",
						"hindi": "अज्ञात सत्ता गिर गई। लेकिन वन की भारी ऊर्जा बनी हुई है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "이 싸움은 — 재앙의 서곡에 불과할지도 모른다.",
						"english": "This battle — might just be the prelude to disaster.",
						"japanese": "この戦いは—災厄の序曲に過ぎないのかもしれない。",
						"chinese": "这场战斗——可能只是灾难的序曲。",
						"french": "Cette bataille — n'est peut-être que le prélude au désastre.",
						"spanish": "Esta batalla — podría ser solo el preludio del desastre.",
						"vietnamese": "Trận chiến này — có lẽ chỉ là khúc dạo đầu cho tai họa.",
						"thai": "การต่อสู้นี้—อาจเป็นเพียงแค่ปฐมบทของหายนะ",
						"hindi": "यह लड़ाई — शायद आपदा की प्रस्तावना मात्र है।"
					},
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"어둡고 습한 숲. 발걸음을 옮길 때마다 축축한 흙이 들러붙었다.",
			"길을 잃은 자, 7일 안에 숲의 심장을 찾지 못하면 —",
			"이 숲의 일부가 되리라. 절대적인 저주였다.",
			"그러나 어둠 속에서도 희미한 빛이 깜빡였다. 구원의 속삭임과 함께."
		],
		"english": [
			"A dark, damp forest. Wet soil clung with every step.",
			"Lost souls, if you fail to find the forest's heart within 7 days —",
			"You shall become part of this forest. An absolute curse.",
			"Yet, even in darkness, a faint light flickered. With a whisper of salvation."
		],
		"japanese": [
			"暗く湿った森。足を踏み出すたびに湿った土がまとわりついた。",
			"道に迷いし者よ、7日以内に森の心臓を見つけられなければ —",
			"この森の一部となるだろう。それは絶対的な呪いだった。",
			"しかし、闇の中にも微かな光が瞬いていた。救済の囁きと共に。"
		],
		"chinese": [
			"一片黑暗潮湿的森林。每迈出一步，潮湿的泥土就粘附在脚上。",
			"迷失之人，若七日内未能寻得森林之心，便会——",
			"你将成为这森林的一部分。这是绝对的诅咒。",
			"然而，即使在黑暗中，微弱的光芒依然闪烁。伴随着救赎的低语。"
		],
		"french": [
			"Une forêt sombre et humide. La terre mouillée collait à chaque pas.",
			"Âmes perdues, si vous ne trouvez pas le cœur de la forêt dans les 7 jours —",
			"Vous ferez partie de cette forêt. Une malédiction absolue.",
			"Pourtant, même dans l'obscurité, une faible lumière vacillait. Avec un murmure de salut."
		],
		"spanish": [
			"Un bosque oscuro y húmedo. La tierra mojada se adhería a cada paso.",
			"Almas perdidas, si no encontráis el corazón del bosque en 7 días —",
			"Seréis parte de este bosque. Una maldición absoluta.",
			"Sin embargo, incluso en la oscuridad, una luz tenue parpadeaba. Con un susurro de salvación."
		],
		"vietnamese": [
			"Khu rừng tối tăm, ẩm ướt. Đất ẩm bám vào mỗi bước chân.",
			"Kẻ lạc lối, nếu không tìm thấy trái tim của rừng trong 7 ngày —",
			"Ngươi sẽ trở thành một phần của khu rừng này. Một lời nguyền tuyệt đối.",
			"Tuy nhiên, ngay cả trong bóng tối, một tia sáng yếu ớt vẫn nhấp nháy. Cùng với lời thì thầm của sự cứu rỗi."
		],
		"thai": [
			"ป่ามืดครึ้มและชื้นแฉะ ดินเปียกชื้นเกาะติดทุกย่างก้าว",
			"ผู้หลงทาง หากไม่พบหัวใจแห่งป่าภายใน 7 วัน —",
			"เจ้าจะกลายเป็นส่วนหนึ่งของป่านี้ คำสาปอันสมบูรณ์แบบ",
			"ทว่า แม้ในความมืด แสงริบหรี่ก็ยังกะพริบ พร้อมกับเสียงกระซิบแห่งความรอด"
		],
		"hindi": [
			"एक अँधेरा, नम जंगल। हर कदम पर गीली मिट्टी चिपकती थी।",
			"खोए हुए लोग, यदि तुम 7 दिनों के भीतर जंगल का हृदय नहीं ढूंढ पाए तो —",
			"तुम इस जंगल का हिस्सा बन जाओगे। एक पूर्ण अभिशाप।",
			"फिर भी, अँधेरे में भी एक मंद रोशनी चमक रही थी। मुक्ति की फुसफुसाहट के साथ।"
		]
	}
} as const;
