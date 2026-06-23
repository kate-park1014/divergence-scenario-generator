export const scenario_forest_silvanlament_54_01 = {
	"scenario_id": "forest_silvanlament_54_01",
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
					"content": {
						"korean": "숲의 입구. 고요함이 모든 것을 덮었다.",
						"english": "Forest entrance. Silence enveloped everything.",
						"japanese": "森の入り口。静寂がすべてを覆っていた。",
						"chinese": "森林入口。寂静笼罩一切。",
						"french": "Entrée de la forêt. Le silence enveloppait tout.",
						"spanish": "Entrada del bosque. El silencio lo cubría todo.",
						"vietnamese": "Lối vào rừng. Sự tĩnh lặng bao trùm mọi thứ.",
						"thai": "ทางเข้าป่า. ความเงียบงันปกคลุมทุกสิ่ง.",
						"hindi": "जंगल का प्रवेश द्वार। खामोशी ने सब कुछ ढक लिया था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "숨 막히는 평화야.",
						"english": "Breathtaking peace.",
						"japanese": "息をのむような平和だ。",
						"chinese": "令人窒息的平静。",
						"french": "Une paix à couper le souffle.",
						"spanish": "Una paz que quita el aliento.",
						"vietnamese": "Một sự bình yên đến nghẹt thở.",
						"thai": "สันติสุขที่น่าทึ่ง.",
						"hindi": "दम घोंटने वाली शांति।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"spot": [
						5,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "ela"
				},
				{
					"content": {
						"korean": "길을 잃으셨나요? 이곳은 오라클의 숲.",
						"english": "Are you lost? This is the Oracle's Forest.",
						"japanese": "道に迷われましたか？ここはオラクルの森です。",
						"chinese": "你迷路了吗？这里是神谕之森。",
						"french": "Vous êtes perdu ? C'est la Forêt de l'Oracle.",
						"spanish": "¿Está perdido? Este es el Bosque del Oráculo.",
						"vietnamese": "Bạn bị lạc sao? Đây là Rừng Oracle.",
						"thai": "คุณหลงทางหรือเปล่า? ที่นี่คือป่าโอราเคิล.",
						"hindi": "क्या आप रास्ता भटक गए हैं? यह ओरेकल का जंगल है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "ela"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "신성한 평화가 흐르는 곳이죠.",
						"english": "A place where sacred peace flows.",
						"japanese": "神聖な平和が流れる場所です。",
						"chinese": "神圣的和平流淌之地。",
						"french": "Un lieu où règne une paix sacrée.",
						"spanish": "Un lugar donde fluye una paz sagrada.",
						"vietnamese": "Nơi sự bình yên thiêng liêng ngự trị.",
						"thai": "สถานที่ที่ความสงบศักดิ์สิทธิ์ไหลเวียนอยู่.",
						"hindi": "एक ऐसी जगह जहाँ पवित्र शांति बहती है।"
					},
					"speaker": "ela",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "평화롭네.",
						"english": "Peaceful.",
						"japanese": "平和だね。",
						"chinese": "真平静。",
						"french": "C'est paisible.",
						"spanish": "Es pacífico.",
						"vietnamese": "Bình yên thật.",
						"thai": "สงบดีนะ.",
						"hindi": "शांतिपूर्ण।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "하지만 외부인에겐, 영원히 닫힌 공간.",
						"english": "But for outsiders, a space forever closed.",
						"japanese": "しかし部外者には、永遠に閉ざされた空間。",
						"chinese": "但对外来者而言，是永远封闭的空间。",
						"french": "Mais pour les étrangers, un espace à jamais clos.",
						"spanish": "Pero para los forasteros, un espacio cerrado para siempre.",
						"vietnamese": "Nhưng đối với người ngoài, đó là một không gian vĩnh viễn đóng kín.",
						"thai": "แต่สำหรับคนภายนอก, เป็นพื้นที่ที่ปิดตายตลอดกาล.",
						"hindi": "लेकिन बाहरी लोगों के लिए, एक ऐसा स्थान जो हमेशा के लिए बंद है।"
					},
					"speaker": "ela",
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
						4,
						2
					],
					"type": "direction",
					"speaker": "ela",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "이 숲의 고요는 영원해요.",
						"english": "The forest's stillness is eternal.",
						"japanese": "この森の静寂は永遠です。",
						"chinese": "这片森林的宁静是永恒的。",
						"french": "Le silence de cette forêt est éternel.",
						"spanish": "La quietud de este bosque es eterna.",
						"vietnamese": "Sự tĩnh lặng của khu rừng này là vĩnh cửu.",
						"thai": "ความเงียบสงบของป่านี้เป็นนิรันดร์",
						"hindi": "इस जंगल की शांति शाश्वत है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "ela"
				},
				{
					"type": "speech",
					"speaker": "ela",
					"content": {
						"korean": "모든 절규가… 멈춰버렸으니까.",
						"english": "All screams... have ceased.",
						"japanese": "全ての叫びが… 止まってしまったから。",
						"chinese": "因为所有的尖叫… 都已停止。",
						"french": "Car tous les cris… ont cessé.",
						"spanish": "Porque todos los gritos... han cesado.",
						"vietnamese": "Vì mọi tiếng kêu… đều đã dừng lại rồi.",
						"thai": "เพราะเสียงกรีดร้องทั้งหมด… ได้หยุดลงแล้ว",
						"hindi": "क्योंकि सारी चीखें… थम गई हैं।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "무슨 소리야, 그게?",
						"english": "What do you mean by that?",
						"japanese": "それ、どういう意味？",
						"chinese": "那是什么意思？",
						"french": "Qu'est-ce que ça veut dire ?",
						"spanish": "¿Qué quieres decir con eso?",
						"vietnamese": "Ý anh là gì?",
						"thai": "คุณหมายความว่าอะไร?",
						"hindi": "उसका क्या मतलब है?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "아무것도 아니에요. 그저… 숲의 섭리일 뿐.",
						"english": "Nothing. Just… the forest's providence.",
						"japanese": "何でもありません。ただ… 森の摂理です。",
						"chinese": "没什么。那只是… 森林的天意。",
						"french": "Rien. Juste… la providence de la forêt.",
						"spanish": "Nada. Solo… la providencia del bosque.",
						"vietnamese": "Không có gì đâu. Chỉ là… quy luật của rừng thôi.",
						"thai": "ไม่มีอะไรหรอก แค่… โองการของป่าเท่านั้น",
						"hindi": "कुछ नहीं। बस… जंगल का विधान।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "ela"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "ela"
				},
				{
					"speaker": "ela",
					"type": "speech",
					"content": {
						"korean": "당신의 '구원'이…",
						"english": "Your 'salvation'...",
						"japanese": "あなたの「救済」が…",
						"chinese": "你的“救赎”…",
						"french": "Votre 'salut'...",
						"spanish": "Tu 'salvación'...",
						"vietnamese": "\"Sự cứu rỗi\" của bạn…",
						"thai": "“ความรอด” ของคุณ…",
						"hindi": "तुम्हारी 'मुक्ति'..."
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "숲에겐 또 다른 파멸을 부를지도 몰라요.",
						"english": "May bring another ruin to the forest.",
						"japanese": "森にとっては、また別の破滅を呼ぶかもしれません。",
						"chinese": "也许会给森林带来另一场毁灭。",
						"french": "Pourrait attirer une autre destruction sur la forêt.",
						"spanish": "Podría traer otra ruina al bosque.",
						"vietnamese": "Có thể sẽ mang đến một sự hủy diệt khác cho khu rừng.",
						"thai": "อาจนำมาซึ่งความพินาศอีกครั้งแก่ป่า",
						"hindi": "शायद जंगल के लिए एक और विनाश ले आए।"
					},
					"type": "speech",
					"speaker": "ela"
				},
				{
					"content": {
						"korean": "파멸이라고?",
						"english": "Ruin, you say?",
						"japanese": "破滅だと？",
						"chinese": "毁灭？",
						"french": "La ruine ?",
						"spanish": "¿Ruina?",
						"vietnamese": "Hủy diệt ư?",
						"thai": "พินาศงั้นหรือ?",
						"hindi": "विनाश?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "ela",
					"content": {
						"korean": "그저… 순환의 일부. 잊힌 씨앗을 위한 거름.",
						"english": "Just… part of the cycle. Fertilizer for forgotten seeds.",
						"japanese": "ただ… 循環の一部。忘れられた種への肥やし。",
						"chinese": "只是… 循环的一部分。为被遗忘的种子提供肥料。",
						"french": "Juste… une partie du cycle. Engrais pour les graines oubliées.",
						"spanish": "Solo… parte del ciclo. Abono para las semillas olvidadas.",
						"vietnamese": "Chỉ là… một phần của vòng tuần hoàn. Phân bón cho những hạt giống bị lãng quên.",
						"thai": "แค่… ส่วนหนึ่งของวัฏจักร ปุ๋ยสำหรับเมล็ดพันธุ์ที่ถูกลืม",
						"hindi": "बस… चक्र का एक हिस्सा। भूले हुए बीजों के लिए खाद।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						2,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "ela",
					"type": "direction"
				},
				{
					"speaker": "ela",
					"type": "speech",
					"content": {
						"korean": "이제 돌아갈 수 없어요.",
						"english": "There's no turning back now.",
						"japanese": "もう戻れません。",
						"chinese": "已经回不去了。",
						"french": "On ne peut plus revenir en arrière.",
						"spanish": "Ya no se puede volver.",
						"vietnamese": "Giờ thì không thể quay lại được nữa rồi.",
						"thai": "ตอนนี้กลับไปไม่ได้แล้ว",
						"hindi": "अब वापस नहीं जा सकते।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이 길은 이미, 정해진 순환의 일부.",
						"english": "This path is already part of a destined cycle.",
						"japanese": "この道はすでに、定められた循環の一部。",
						"chinese": "这条路早已是既定循环的一部分。",
						"french": "Ce chemin fait déjà partie d'un cycle prédestiné.",
						"spanish": "Este camino ya es parte de un ciclo predestinado.",
						"vietnamese": "Con đường này đã là một phần của vòng tuần hoàn đã định.",
						"thai": "เส้นทางนี้เป็นส่วนหนึ่งของวัฏจักรที่ถูกกำหนดไว้แล้ว",
						"hindi": "यह मार्ग पहले से ही नियत चक्र का हिस्सा है।"
					},
					"type": "speech",
					"speaker": "ela"
				},
				{
					"content": {
						"korean": "대체 뭘 말하는 거야!",
						"english": "What are you talking about?!",
						"japanese": "一体何を言っているんだ！",
						"chinese": "你到底在说什么！",
						"french": "De quoi parlez-vous ?!",
						"spanish": "¡¿De qué hablas?!",
						"vietnamese": "Anh đang nói gì vậy?!",
						"thai": "คุณพูดเรื่องอะไรกันแน่!",
						"hindi": "तुम यह क्या कह रहे हो!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "ela",
					"emotion": "base",
					"content": {
						"korean": "숲은 당신을 선택했어요. 새로운 희생으로… 평화를 유지하겠죠.",
						"english": "The forest has chosen you. A new sacrifice... to maintain peace.",
						"japanese": "森はあなたを選んだ。新たな犠牲として…平和を保つだろう。",
						"chinese": "森林选择了你。作为新的牺牲…它将维持和平。",
						"french": "La forêt vous a choisi. Un nouveau sacrifice... pour maintenir la paix.",
						"spanish": "El bosque te ha elegido. Un nuevo sacrificio... mantendrá la paz.",
						"vietnamese": "Khu rừng đã chọn ngươi. Một sự hy sinh mới... sẽ giữ gìn hòa bình.",
						"thai": "ป่าได้เลือกคุณแล้ว ในฐานะเครื่องสังเวยใหม่...มันจะรักษาความสงบสุขเอาไว้",
						"hindi": "जंगल ने तुम्हें चुना है। एक नई बलि के रूप में… यह शांति बनाए रखेगा।"
					}
				}
			]
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "거대한 그림자가 쓰러졌다. 숲은, 여전히 고요했다.",
						"english": "The colossal shadow fell. The forest remained still.",
						"japanese": "巨大な影が倒れた。森は、依然として静寂に包まれていた。",
						"chinese": "巨大的身影倒下了。森林，依然寂静。",
						"french": "L'ombre colossale s'est effondrée. La forêt restait silencieuse.",
						"spanish": "La sombra colosal cayó. El bosque, sin embargo, permaneció en calma.",
						"vietnamese": "Bóng đen khổng lồ đã gục ngã. Rừng vẫn tĩnh lặng.",
						"thai": "เงาขนาดมหึมาล้มลง ป่าก็ยังคงเงียบสงบ",
						"hindi": "विशालकाय छाया गिर गई। जंगल, अब भी शांत था।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "어리석은… 너희의 '구원'이…",
						"english": "Foolish… your 'salvation'…",
						"japanese": "愚かな… お前たちの「救済」が…",
						"chinese": "愚蠢… 你们的“救赎”…",
						"french": "Insensés… votre « salut »…",
						"spanish": "Estúpidos… vuestra 'salvación'…",
						"vietnamese": "Ngu ngốc… 'sự cứu rỗi' của các ngươi…",
						"thai": "ช่างโง่เขลา… 'ความรอด' ของพวกเจ้า…",
						"hindi": "मूर्ख… तुम्हारी 'मुक्ति'…"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "곧 숲의 진정한 파멸이다…!",
						"english": "Soon, it will be the true ruin of the forest…!",
						"japanese": "すぐに森の真の破滅となるだろう…！",
						"chinese": "很快将是森林真正的毁灭…！",
						"french": "Bientôt, ce sera la véritable ruine de la forêt… !",
						"spanish": "¡Pronto será la verdadera ruina del bosque…!",
						"vietnamese": "Sẽ sớm là sự hủy diệt thực sự của khu rừng…!",
						"thai": "ในไม่ช้า นี่จะเป็นการทำลายล้างที่แท้จริงของป่า…!",
						"hindi": "जल्द ही जंगल का सच्चा विनाश होगा…!"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "무슨 소리야…?",
						"english": "What do you mean…?",
						"japanese": "どういうことだ…？",
						"chinese": "你在说什么…？",
						"french": "Qu'est-ce que tu racontes… ?",
						"spanish": "¿Qué estás diciendo…?",
						"vietnamese": "Ngươi nói gì vậy…?",
						"thai": "หมายความว่าอะไร…?",
						"hindi": "क्या कह रहे हो…?"
					}
				},
				{
					"action": "enter",
					"spot": [
						2,
						2
					],
					"type": "direction",
					"speaker": "ela",
					"duration_ms": 500
				},
				{
					"speaker": "ela",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "다음 순환이… 시작될 거예요.",
						"english": "The next cycle… will begin.",
						"japanese": "次の循環が…始まるでしょう。",
						"chinese": "下一个循环…即将开始。",
						"french": "Le prochain cycle… va commencer.",
						"spanish": "El siguiente ciclo… comenzará.",
						"vietnamese": "Vòng tuần hoàn tiếp theo… sẽ bắt đầu.",
						"thai": "วัฏจักรต่อไป… จะเริ่มขึ้น",
						"hindi": "अगला चक्र… शुरू होगा।"
					}
				},
				{
					"speaker": "ela",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "당신의 희생으로.",
						"english": "With your sacrifice.",
						"japanese": "あなたの犠牲によって。",
						"chinese": "以你的牺牲。",
						"french": "Par votre sacrifice.",
						"spanish": "Con tu sacrificio.",
						"vietnamese": "Bằng sự hy sinh của bạn.",
						"thai": "ด้วยการเสียสละของท่าน",
						"hindi": "तुम्हारे बलिदान से।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "네가… 대체…",
						"english": "You… just who are you…?",
						"japanese": "お前は…一体…",
						"chinese": "你…到底是谁…",
						"french": "Toi… qui es-tu donc…?",
						"spanish": "Tú… ¿quién eres…?",
						"vietnamese": "Ngươi… rốt cuộc là ai…",
						"thai": "เจ้า… เป็นใครกันแน่…",
						"hindi": "तुम… आखिर कौन हो…"
					}
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "숲은 다시 고요해졌다. 탐험대는 알게 될 것이다. 이 숲의, 진짜 얼굴을.",
						"english": "The forest fell silent again. The expedition will soon discover. The true face of this forest.",
						"japanese": "森は再び静寂に包まれた。探検隊は知ることになるだろう。この森の、本当の顔を。",
						"chinese": "森林再次归于寂静。探险队终将知晓。这座森林的，真实面貌。",
						"french": "La forêt redevint silencieuse. L'expédition découvrira. Le vrai visage de cette forêt.",
						"spanish": "El bosque volvió a quedar en silencio. La expedición pronto descubrirá. La verdadera cara de este bosque.",
						"vietnamese": "Khu rừng lại chìm vào im lặng. Đoàn thám hiểm sẽ sớm biết được. Bộ mặt thật của khu rừng này.",
						"thai": "ป่ากลับมาเงียบสงบอีกครั้ง คณะสำรวจจะได้รู้ถึง ใบหน้าแท้จริงของป่าแห่งนี้",
						"hindi": "जंगल फिर से शांत हो गया। अभियान दल जल्द ही जान जाएगा। इस जंगल का, असली चेहरा।"
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 모든 것을 삼켰다.",
						"english": "The colossal shadow devoured everything.",
						"japanese": "巨大な影が全てを飲み込んだ。",
						"chinese": "巨大的身影吞噬了一切。",
						"french": "L'ombre colossale a tout englouti.",
						"spanish": "La sombra colosal lo devoró todo.",
						"vietnamese": "Bóng đen khổng lồ đã nuốt chửng mọi thứ.",
						"thai": "เงาขนาดมหึมากลืนกินทุกสิ่ง",
						"hindi": "विशालकाय छाया ने सब कुछ निगल लिया।"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "숲의 섭리를 거스를 수 없다. 너희는 그저, 거름일 뿐.",
						"english": "You cannot defy the forest's providence. You are merely, fertilizer.",
						"japanese": "森の摂理に逆らうことはできない。お前たちはただ、肥やしに過ぎない。",
						"chinese": "你们无法违抗森林的法则。你们不过是，肥料而已。",
						"french": "Vous ne pouvez pas défier la providence de la forêt. Vous n'êtes que, de l'engrais.",
						"spanish": "No podéis desafiar la providencia del bosque. Vosotros sois, solo abono.",
						"vietnamese": "Các ngươi không thể chống lại quy luật của rừng. Các ngươi chỉ là, phân bón mà thôi.",
						"thai": "เจ้าไม่อาจขัดขืนลิขิตของป่าได้ พวกเจ้าเป็นเพียง ปุ๋ยเท่านั้น",
						"hindi": "तुम जंगल की नियति का उल्लंघन नहीं कर सकते। तुम सिर्फ, खाद हो।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "아직… 끝나지 않았어!",
						"english": "Not over yet!",
						"japanese": "まだ… 終わってない！",
						"chinese": "还没… 结束！",
						"french": "Pas encore… fini !",
						"spanish": "¡Aún… no ha terminado!",
						"vietnamese": "Vẫn chưa… kết thúc!",
						"thai": "ยังไม่… จบ!",
						"hindi": "अभी… खत्म नहीं हुआ है!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "ela",
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "깨어나세요. 순환은… 계속될 테니까.",
						"english": "Awaken. The cycle will… go on.",
						"japanese": "目覚めなさい。循環は… 続くでしょうから。",
						"chinese": "醒来吧。循环会… 继续的。",
						"french": "Réveillez-vous. Le cycle… continuera.",
						"spanish": "Despierta. El ciclo… continuará.",
						"vietnamese": "Tỉnh dậy đi. Vòng tuần hoàn sẽ… tiếp tục.",
						"thai": "ตื่นเถิด วงจรจะ… ดำเนินต่อไป",
						"hindi": "जागो। चक्र… चलता रहेगा।"
					},
					"emotion": "base",
					"speaker": "ela",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "숲의 심장부. 거대한 그림자가 길을 막았다.",
						"english": "Deep within the forest. A colossal shadow blocked the way.",
						"japanese": "森の心臓部。巨大な影が道を塞いだ。",
						"chinese": "森林之心。一道巨大的阴影挡住了去路。",
						"french": "Le cœur de la forêt. Une ombre gigantesque bloquait le chemin.",
						"spanish": "El corazón del bosque. Una sombra gigantesca bloqueó el camino.",
						"vietnamese": "Trái tim của rừng. Một bóng tối khổng lồ đã chặn đường.",
						"thai": "ใจกลางป่า. เงาขนาดมหึมาขวางทางอยู่",
						"hindi": "जंगल के हृदय में। एक विशाल छाया ने रास्ता रोक दिया।"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "침입자 주제에, 숲의 섭리를 거스르는가?",
						"english": "Intruder, do you defy the forest's will?",
						"japanese": "侵入者め、森の摂理に逆らうというのか？",
						"chinese": "入侵者，竟敢违抗森林的旨意？",
						"french": "Intrus, osez-vous défier la providence de la forêt ?",
						"spanish": "Intruso, ¿desafías la voluntad del bosque?",
						"vietnamese": "Kẻ xâm nhập, ngươi dám chống lại ý muốn của rừng sao?",
						"thai": "ผู้บุกรุก กล้าขัดขืนลิขิตของป่าหรือ?",
						"hindi": "घुसपैठिए, क्या तुम जंगल की मर्जी के खिलाफ जाते हो?"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "숲을 망치는 건 너잖아!",
						"english": "You're the one destroying the forest!",
						"japanese": "森を壊しているのはお前じゃないか！",
						"chinese": "破坏森林的是你才对！",
						"french": "C'est toi qui détruis la forêt !",
						"spanish": "¡Tú eres quien está destruyendo el bosque!",
						"vietnamese": "Ngươi mới là kẻ đang phá hoại rừng!",
						"thai": "คนที่กำลังทำลายป่าคือแกต่างหาก!",
						"hindi": "जंगल को बर्बाद करने वाले तुम हो!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "나는 숲의 의지. 순환을 유지하는 힘이다.",
						"english": "I am the will of the forest. The power that maintains the cycle.",
						"japanese": "私は森の意志。循環を維持する力だ。",
						"chinese": "我是森林的意志。维持循环的力量。",
						"french": "Je suis la volonté de la forêt. La force qui maintient le cycle.",
						"spanish": "Soy la voluntad del bosque. La fuerza que mantiene el ciclo.",
						"vietnamese": "Ta là ý chí của rừng. Sức mạnh duy trì sự tuần hoàn.",
						"thai": "ฉันคือเจตจำนงของป่า พลังที่ค้ำจุนวัฏจักร",
						"hindi": "मैं जंगल की इच्छा हूँ। वह शक्ति जो चक्र को बनाए रखती है।"
					},
					"emotion": "base"
				},
				{
					"spot": [
						1,
						2
					],
					"action": "enter",
					"speaker": "ela",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "막지 마세요. 이 분은… 숲의 질서.",
						"english": "Don't stop him. He is... the order of the forest.",
						"japanese": "止めないでください。この方は…森の秩序。",
						"chinese": "请不要阻止。这位是…森林的秩序。",
						"french": "Ne l'arrêtez pas. Il est... l'ordre de la forêt.",
						"spanish": "No lo detengas. Él es... el orden del bosque.",
						"vietnamese": "Đừng ngăn cản. Vị này là... trật tự của rừng.",
						"thai": "อย่าหยุดเขาเลย ท่านผู้นี้คือ...ระเบียบของป่า",
						"hindi": "रोको मत। ये… जंगल का विधान हैं।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "ela"
				},
				{
					"content": {
						"korean": "너… 너도 한패였어?",
						"english": "You... you were part of this?",
						"japanese": "お前…お前も仲間だったのか？",
						"chinese": "你…你也是同伙？",
						"french": "Toi... tu faisais partie du complot ?",
						"spanish": "¿Tú... tú también eras parte de esto?",
						"vietnamese": "Ngươi... ngươi cũng là đồng bọn?",
						"thai": "แก...แกก็เป็นพวกเดียวกับพวกเขาหรือ?",
						"hindi": "तुम… तुम भी उनके साथ थे?"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "ela",
					"type": "speech",
					"content": {
						"korean": "전 그저, '길'을 안내할 뿐.",
						"english": "I merely guide the 'path'.",
						"japanese": "私はただ、『道』を案内するだけです。",
						"chinese": "我只是，指引‘道路’罢了。",
						"french": "Je ne fais que guider le 'chemin'.",
						"spanish": "Yo solo, guío el 'camino'.",
						"vietnamese": "Tôi chỉ, dẫn lối 'con đường' thôi.",
						"thai": "ฉันแค่...นำทาง 'เส้นทาง' เท่านั้น",
						"hindi": "मैं तो बस 'मार्ग' दिखाता हूँ।"
					},
					"emotion": "base"
				},
				{
					"speaker": "ela",
					"type": "direction",
					"duration_ms": 400,
					"direction": "down",
					"action": "exit"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "방해는 용납되지 않는다. 사라져라.",
						"english": "Interference is not tolerated. Begone.",
						"japanese": "妨害は許されない。消え失せろ。",
						"chinese": "妨碍不被容忍。消失吧。",
						"french": "Toute interférence est inadmissible. Disparaissez.",
						"spanish": "La interferencia no se tolera. Desaparece.",
						"vietnamese": "Sự can thiệp không được dung thứ. Biến đi.",
						"thai": "การขัดขวางไม่เป็นที่ยอมรับ หายไปซะ",
						"hindi": "हस्तक्षेप सहन नहीं किया जाएगा। दूर हो जाओ।"
					},
					"emotion": "angry"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"숲은 고요했다. 너무나, 고요했다.",
			"길을 잃은 자들, 오라클의 숲으로 향하다.",
			"환영 속에서, 진실은 서서히 모습을 드러낼 것이다.",
			"그리고 그 고요는, 멈춰버린 절규의 침묵이었다."
		],
		"english": [
			"The forest was silent. Terribly silent.",
			"The lost ones, heading to the Oracle's Forest.",
			"Within the illusion, truth will slowly reveal itself.",
			"And that silence was the hush of a stopped scream."
		],
		"japanese": [
			"森は静かだった。あまりにも、静かだった。",
			"道に迷いし者たち、オラクルの森へ向かう。",
			"幻影の中で、真実はゆっくりと姿を現すだろう。",
			"そしてその静寂は、止まってしまった絶叫の沈黙だった。"
		],
		"chinese": [
			"森林寂静。太过，寂静。",
			"迷失者，前往神谕之森。",
			"幻象之中，真相将慢慢显露。",
			"而那寂静，是戛然而止的尖叫之沉默。"
		],
		"french": [
			"La forêt était silencieuse. Trop, silencieuse.",
			"Les égarés, en route vers la Forêt de l'Oracle.",
			"Dans l'illusion, la vérité se révélera lentement.",
			"Et ce silence était celui d'un hurlement figé."
		],
		"spanish": [
			"El bosque estaba en silencio. Demasiado, en silencio.",
			"Los perdidos, rumbo al Bosque del Oráculo.",
			"En la ilusión, la verdad se revelará lentamente.",
			"Y ese silencio era el de un grito ahogado."
		],
		"vietnamese": [
			"Rừng thật tĩnh lặng. Quá đỗi, tĩnh lặng.",
			"Những kẻ lạc lối, hướng về Rừng Oracle.",
			"Trong ảo ảnh, sự thật sẽ dần hé lộ.",
			"Và sự tĩnh lặng đó, là sự im lặng của tiếng thét đã ngừng lại."
		],
		"thai": [
			"ป่าเงียบสงัด สงัดเหลือเกิน.",
			"ผู้หลงทาง มุ่งหน้าสู่ป่าโอราเคิล.",
			"ภายในภาพลวงตา ความจริงจะค่อยๆ ปรากฏขึ้น.",
			"และความเงียบสงัดนั้น คือความเงียบของเสียงกรีดร้องที่หยุดนิ่ง."
		],
		"hindi": [
			"जंगल शांत था। बहुत ज़्यादा, शांत।",
			"खोए हुए लोग, ओरेकल के जंगल की ओर जा रहे हैं।",
			"भ्रम में, सत्य धीरे-धीरे सामने आएगा।",
			"और वह शांति, रुक गई चीख की खामोशी थी।"
		]
	}
} as const;
