export const scenario_modern_archivist_48_03 = {
	"scenario_id": "modern_archivist_48_03",
	"order": 3,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"kai": {
			"id": "mon_d7f29313-b8fb-49da-9a1a-01df5d13866e",
			"name": {
				"korean": "카이",
				"english": "Kai",
				"japanese": "カイ",
				"chinese": "凯",
				"french": "Kai",
				"spanish": "Kai",
				"vietnamese": "Kai",
				"thai": "ไค",
				"hindi": "काई"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f10d9184-4155-4bb9-de2d-db61463f7c00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/e41f8e03-08c9-4a4f-6f72-fa9342876f00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"도시를 지배하는 '아키비스트' 시스템.",
			"그들은 진실을 '버그'라 불렀다.",
			"하지만 모든 것을 빼앗긴 자가 입을 연다.",
			"완벽한 줄 알았던 시스템은, 거대한 코미디였다."
		],
		"english": [
			"The 'Archivist' system rules the city.",
			"They called the truth a 'bug'.",
			"But one who lost everything speaks up.",
			"The system, thought perfect, was a grand comedy."
		],
		"japanese": [
			"都市を支配する「アーキビスト」システム。",
			"彼らは真実を「バグ」と呼んだ。",
			"しかし、すべてを奪われた者が口を開く。",
			"完璧だと思われたシステムは、巨大なコメディだった。"
		],
		"chinese": [
			"掌控城市的“档案员”系统。",
			"他们称真相为“漏洞”。",
			"然而，一无所有之人开口了。",
			"原以为完美的系统，竟是一场巨大闹剧。"
		],
		"french": [
			"Le système 'Archiviste' règne sur la ville.",
			"Ils appelaient la vérité un 'bug'.",
			"Mais celui qui a tout perdu prend la parole.",
			"Le système, cru parfait, n'était qu'une immense comédie."
		],
		"spanish": [
			"El sistema 'Archivista' domina la ciudad.",
			"Llamaron a la verdad un 'bug'.",
			"Pero quien lo perdió todo, habla.",
			"El sistema, que creían perfecto, era una gran comedia."
		],
		"vietnamese": [
			"Hệ thống 'Archivist' thống trị thành phố.",
			"Họ gọi sự thật là 'lỗi'.",
			"Nhưng kẻ đã mất tất cả cất tiếng.",
			"Hệ thống tưởng chừng hoàn hảo, hóa ra là một vở hài kịch lớn."
		],
		"thai": [
			"ระบบ 'Archivist' ผู้ปกครองเมือง",
			"พวกเขาเรียกความจริงว่า 'บั๊ก'",
			"แต่ผู้ที่สูญสิ้นทุกสิ่งกลับเอ่ยปาก",
			"ระบบที่คิดว่าสมบูรณ์แบบ กลับกลายเป็นเรื่องตลกขบขัน"
		],
		"hindi": [
			"'आर्काइविस्ट' सिस्टम शहर पर राज करता है।",
			"उन्होंने सच को 'बग' कहा।",
			"लेकिन जिसने सब कुछ खो दिया, वह बोलता है।",
			"वह सिस्टम जिसे परफेक्ट समझा गया, एक बड़ी कॉमेडी निकला।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "시스템의 그림자 속, 진실은 조롱당했다.",
						"english": "In the system's shadow, truth was mocked.",
						"japanese": "システムの影で、真実は嘲笑された。",
						"chinese": "在系统的阴影下，真相被嘲弄。",
						"french": "Dans l'ombre du système, la vérité était bafouée.",
						"spanish": "En la sombra del sistema, la verdad era objeto de burla.",
						"vietnamese": "Trong bóng tối của hệ thống, sự thật bị chế giễu.",
						"thai": "ภายใต้เงาของระบบ ความจริงถูกเยาะเย้ย",
						"hindi": "सिस्टम की छाया में, सच का मज़ाक उड़ाया गया।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "kai"
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "왔군. 올 줄 알았어.",
						"english": "You're here. Knew you'd come.",
						"japanese": "来たか。来ると思ったよ。",
						"chinese": "你来了。我就知道你会来。",
						"french": "Te voilà. Je savais que tu viendrais.",
						"spanish": "Llegaste. Sabía que vendrías.",
						"vietnamese": "Ngươi đến rồi. Ta biết ngươi sẽ đến mà.",
						"thai": "มาแล้วสินะ ฉันรู้ว่านายต้องมา",
						"hindi": "तुम आ गए। मुझे पता था तुम आओगे।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "카이? '아키비스트'의 배신자.",
						"english": "Kai? The 'Archivist' traitor.",
						"japanese": "カイ？「アーキビスト」の裏切り者。",
						"chinese": "凯？“档案员”的叛徒。",
						"french": "Kai ? Le traître de l''Archiviste'.",
						"spanish": "¿Kai? El traidor del 'Archivista'.",
						"vietnamese": "Kai à? Kẻ phản bội của 'Archivist'.",
						"thai": "ไคเหรอ? ผู้ทรยศของ 'Archivist'",
						"hindi": "काई? 'आर्काइविस्ट' का गद्दार।"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "배신자? 아니. 나는 '진실'을 말하는 자다.",
						"english": "Traitor? No. I speak the 'truth'.",
						"japanese": "裏切り者？違う。私は「真実」を語る者だ。",
						"chinese": "叛徒？不。我是说出“真相”之人。",
						"french": "Traître ? Non. Je suis celui qui dit la 'vérité'.",
						"spanish": "¿Traidor? No. Yo soy quien dice la 'verdad'.",
						"vietnamese": "Kẻ phản bội ư? Không. Ta là kẻ nói lên 'sự thật'.",
						"thai": "ผู้ทรยศเหรอ? ไม่ใช่ ฉันคือผู้บอก 'ความจริง'",
						"hindi": "गद्दार? नहीं। मैं 'सच' बोलने वाला हूँ।"
					},
					"speaker": "kai",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "kai",
					"action": "enter"
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "'귀여운 버그'라고? 그건 시스템이 지워버린 진실이야.",
						"english": "'Cute bug'? That's a truth the system erased.",
						"japanese": "「可愛いバグ」だと？それはシステムが消し去った真実だ。",
						"chinese": "“可爱的漏洞”？那是系统抹去的真相。",
						"french": "Un 'bug mignon' ? C'est une vérité que le système a effacée.",
						"spanish": "¿'Un error adorable'? Esa es una verdad que el sistema borró.",
						"vietnamese": "'Lỗi dễ thương' ư? Đó là sự thật mà hệ thống đã xóa bỏ.",
						"thai": "'บั๊กน่ารัก' เหรอ? นั่นคือความจริงที่ระบบลบไปแล้ว",
						"hindi": "'प्यारा बग'? वह एक सच है जिसे सिस्टम ने मिटा दिया।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "거대 스캔들이 단순한 오류라고?",
						"english": "A huge scandal, just a simple error?",
						"japanese": "巨大なスキャンダルが、単なるエラーだと？",
						"chinese": "巨大丑闻竟是简单错误？",
						"french": "Un énorme scandale, juste une simple erreur ?",
						"spanish": "¿Un escándalo enorme, solo un simple error?",
						"vietnamese": "Một vụ bê bối lớn, chỉ là một lỗi đơn giản thôi sao?",
						"thai": "เรื่องอื้อฉาวครั้งใหญ่ เป็นแค่ข้อผิดพลาดง่ายๆ เหรอ?",
						"hindi": "एक बड़ा घोटाला, बस एक साधारण गलती?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "kai",
					"content": {
						"korean": "웃기는 소리! 전부 꾸며진 거짓말이다.",
						"english": "Ridiculous! It's all a fabricated lie.",
						"japanese": "馬鹿な！全部でっち上げの嘘だ。",
						"chinese": "荒谬！这都是编造的谎言。",
						"french": "Ridicule ! Tout ça n'est qu'un mensonge fabriqué.",
						"spanish": "¡Qué absurdo! Todo es una mentira fabricada.",
						"vietnamese": "Thật nực cười! Tất cả chỉ là dối trá bịa đặt.",
						"thai": "เหลวไหล! ทั้งหมดเป็นเรื่องโกหกที่ถูกแต่งขึ้น",
						"hindi": "हास्यास्पद! यह सब मनगढ़ंत झूठ है।"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "시스템은 사람들을 속이고, 조롱했어. 비극을 코미디로 만들었지.",
						"english": "The system deceived and mocked people. It turned tragedy into comedy.",
						"japanese": "システムは人々を欺き、嘲笑った。悲劇を喜劇に変えたんだ。",
						"chinese": "系统欺骗和嘲弄了人们。它把悲剧变成了喜剧。",
						"french": "Le système a trompé et ridiculisé les gens. Il a transformé la tragédie en comédie.",
						"spanish": "El sistema engañó y se burló de la gente. Convirtió la tragedia en comedia.",
						"vietnamese": "Hệ thống đã lừa dối và chế nhạo mọi người. Biến bi kịch thành hài kịch.",
						"thai": "ระบบหลอกลวงและเยาะเย้ยผู้คน มันเปลี่ยนโศกนาฏกรรมให้เป็นเรื่องตลก",
						"hindi": "सिस्टम ने लोगों को धोखा दिया और उनका मज़ाक उड़ाया। इसने त्रासदी को कॉमेडी में बदल दिया।"
					},
					"speaker": "kai",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "kai",
					"action": "enter"
				},
				{
					"content": {
						"korean": "그들은 진실을 왜곡하고, 기억을 조작했어.",
						"english": "They distorted the truth and manipulated memories.",
						"japanese": "彼らは真実を歪め、記憶を操作した。",
						"chinese": "他们扭曲了真相，操纵了记忆。",
						"french": "Ils ont déformé la vérité et manipulé les souvenirs.",
						"spanish": "Distorsionaron la verdad y manipularon los recuerdos.",
						"vietnamese": "Chúng đã bóp méo sự thật và thao túng ký ức.",
						"thai": "พวกเขาบิดเบือนความจริงและบงการความทรงจำ",
						"hindi": "उन्होंने सच को तोड़-मरोड़ दिया और यादों में हेरफेर किया।"
					},
					"speaker": "kai",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "kai",
					"content": {
						"korean": "피해자를 가해자로. 음모를 웃음거리로.",
						"english": "Victims into perpetrators. Conspiracies into jokes.",
						"japanese": "被害者を加害者に。陰謀を笑い話に。",
						"chinese": "受害者变成施害者。阴谋变成笑柄。",
						"french": "Des victimes en coupables. Des conspirations en plaisanteries.",
						"spanish": "Víctimas en perpetradores. Conspiraciones en bromas.",
						"vietnamese": "Biến nạn nhân thành thủ phạm. Âm mưu thành trò cười.",
						"thai": "เปลี่ยนเหยื่อเป็นผู้กระทำผิด. เปลี่ยนแผนการสมคบคิดเป็นเรื่องตลก",
						"hindi": "पीड़ितों को अपराधियों में। साजिशों को मज़ाक में।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 우리가 찾던 건…?",
						"english": "So what were we looking for...?",
						"japanese": "じゃあ、僕らが探してたのは…？",
						"chinese": "那么我们一直在找的究竟是…？",
						"french": "Alors ce que nous cherchions...?",
						"spanish": "¿Entonces qué estábamos buscando...?",
						"vietnamese": "Vậy thứ chúng ta tìm kiếm là…?",
						"thai": "แล้วสิ่งที่เรากำลังหาคือ...?",
						"hindi": "तो हम क्या ढूंढ रहे थे...?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "네가 아는 모든 것이 거짓일 수 있다는 증거. 이 오래된 기록을 봐.",
						"english": "Proof that everything you know might be a lie. Look at these old records.",
						"japanese": "君が知る全てが嘘かもしれないという証拠。この古い記録を見てみろ。",
						"chinese": "你所知道的一切都可能是谎言的证据。看看这些旧记录。",
						"french": "La preuve que tout ce que tu sais pourrait être un mensonge. Regarde ces vieux dossiers.",
						"spanish": "Prueba de que todo lo que sabes podría ser una mentira. Mira estos viejos registros.",
						"vietnamese": "Bằng chứng cho thấy mọi thứ bạn biết đều có thể là dối trá. Hãy xem những hồ sơ cũ này.",
						"thai": "หลักฐานที่ว่าทุกสิ่งที่คุณรู้ล้วนเป็นเรื่องโกหก ดูบันทึกเก่าพวกนี้สิ",
						"hindi": "इस बात का सबूत कि जो कुछ तुम जानते हो वह सब झूठ हो सकता है। इन पुराने अभिलेखों को देखो।"
					},
					"emotion": "base"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"action": "enter",
					"speaker": "kai",
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "kai",
					"content": {
						"korean": "시스템의 '정의'는 기만이다. 완벽한 은폐.",
						"english": "The system's 'justice' is a deception. A perfect cover-up.",
						"japanese": "システムの『正義』は欺瞞だ。完璧な隠蔽工作。",
						"chinese": "系统的'正义'是欺骗。一场完美的掩盖。",
						"french": "La 'justice' du système est une tromperie. Une dissimulation parfaite.",
						"spanish": "La 'justicia' del sistema es un engaño. Una tapadera perfecta.",
						"vietnamese": "Cái gọi là 'công lý' của hệ thống chỉ là sự lừa dối. Một màn che đậy hoàn hảo.",
						"thai": "ความ 'ยุติธรรม' ของระบบคือการหลอกลวง การปกปิดที่สมบูรณ์แบบ",
						"hindi": "सिस्टम का 'न्याय' एक धोखा है। एक आदर्श पर्दाफ़ाश।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "우린 뭘 믿어야 해?",
						"english": "What should we believe?",
						"japanese": "僕たちは何を信じればいい？",
						"chinese": "我们该相信什么？",
						"french": "Que devrions-nous croire ?",
						"spanish": "¿Qué debemos creer?",
						"vietnamese": "Chúng ta nên tin vào điều gì?",
						"thai": "เราควรเชื่ออะไรดี?",
						"hindi": "हमें क्या विश्वास करना चाहिए?"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "kai",
					"content": {
						"korean": "아무것도. 그저 이 빌어먹을 진실만을 추적해.",
						"english": "Nothing. Just chase this damned truth.",
						"japanese": "何も。ただ、この忌々しい真実だけを追え。",
						"chinese": "什么都别信。只追寻这个该死的真相。",
						"french": "Rien. Poursuis seulement cette maudite vérité.",
						"spanish": "Nada. Solo persigue esta maldita verdad.",
						"vietnamese": "Không gì cả. Chỉ theo đuổi sự thật đáng nguyền rủa này thôi.",
						"thai": "ไม่มีอะไร แค่ไล่ล่าความจริงที่น่าสาปแช่งนี้",
						"hindi": "कुछ नहीं। बस इस शापित सच का पीछा करो।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "놈들이 널 막으려 할 거야. 어떤 식으로든.",
						"english": "They'll try to stop you. One way or another.",
						"japanese": "奴らは君を止めようとするだろう。どんな手を使ってでも。",
						"chinese": "他们会想方设法阻止你。无论如何。",
						"french": "Ils essaieront de t'arrêter. D'une manière ou d'une autre.",
						"spanish": "Intentarán detenerte. De una forma u otra.",
						"vietnamese": "Chúng sẽ cố gắng ngăn cản bạn. Bằng mọi cách.",
						"thai": "พวกมันจะพยายามหยุดนาย ไม่ทางใดก็ทางหนึ่ง",
						"hindi": "वे तुम्हें रोकने की कोशिश करेंगे। किसी न किसी तरह।"
					},
					"emotion": "angry"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "…하찮은 승리… 시스템은… 영원하다…",
						"english": "...A trivial victory... The system is... eternal...",
						"japanese": "…取るに足らない勝利…システムは…永遠だ…",
						"chinese": "……微不足道的胜利……系统是……永恒的……",
						"french": "...Une victoire insignifiante... Le système est... éternel...",
						"spanish": "...Una victoria trivial... El sistema es... eterno...",
						"vietnamese": "...Một chiến thắng tầm thường... Hệ thống là... vĩnh cửu...",
						"thai": "...ชัยชนะที่เล็กน้อย... ระบบคือ... นิรันดร์...",
						"hindi": "...एक तुच्छ विजय... सिस्टम है... शाश्वत..."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "끝났어. 또 하나의 거짓이 지워졌군.",
						"english": "It's over. Another lie has been erased.",
						"japanese": "終わった。また一つの嘘が消された。",
						"chinese": "结束了。又一个谎言被抹去。",
						"french": "C'est fini. Un autre mensonge a été effacé.",
						"spanish": "Se acabó. Otra mentira ha sido borrada.",
						"vietnamese": "Kết thúc rồi. Một lời nói dối khác đã bị xóa.",
						"thai": "จบลงแล้ว อีกหนึ่งคำโกหกถูกลบไปแล้ว.",
						"hindi": "यह खत्म हो गया। एक और झूठ मिटा दिया गया है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "어둠은 잠시 물러났다. 그러나 시스템의 그림자는 여전히 도시를 덮었다.",
						"english": "The darkness receded for a moment. But the system's shadow still covered the city.",
						"japanese": "闇は一時的に退いた。しかし、システムの影は依然として都市を覆っていた。",
						"chinese": "黑暗暂时退去。然而，系统的阴影依然笼罩着城市。",
						"french": "L'obscurité recula un instant. Mais l'ombre du système couvrait toujours la ville.",
						"spanish": "La oscuridad retrocedió por un momento. Pero la sombra del sistema aún cubría la ciudad.",
						"vietnamese": "Bóng tối tạm thời rút lui. Nhưng bóng của hệ thống vẫn bao trùm thành phố.",
						"thai": "ความมืดมิดถอยกลับไปชั่วขณะ แต่เงาของระบบยังคงปกคลุมเมืองอยู่.",
						"hindi": "अंधेरा पल भर के लिए पीछे हट गया। लेकिन सिस्टम की छाया अभी भी शहर को घेरे हुए थी।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "지워진 진실의 조각들은… 아직 주인을 기다렸다.",
						"english": "The erased fragments of truth... still awaited their master.",
						"japanese": "消された真実の断片は…まだ主を待っていた。",
						"chinese": "被抹去的真相碎片……仍在等待着主人。",
						"french": "Les fragments de vérité effacés... attendaient toujours leur maître.",
						"spanish": "Los fragmentos de verdad borrados... aún esperaban a su dueño.",
						"vietnamese": "Những mảnh sự thật bị xóa bỏ... vẫn đang chờ đợi chủ nhân của chúng.",
						"thai": "เศษเสี้ยวของความจริงที่ถูกลบไปแล้ว... ยังคงรอคอยเจ้าของของมัน.",
						"hindi": "सत्य के मिटाए गए टुकड़े... अभी भी अपने मालिक का इंतजार कर रहे थे।"
					},
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "kai",
					"spot": [
						4,
						3
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "여기가 심장부! 그들의 마지막 방어선이야!",
						"english": "This is the core! Their last line of defense!",
						"japanese": "ここが心臓部だ！彼らの最後の防衛線だ！",
						"chinese": "这里是核心！他们最后的防线！",
						"french": "C'est le cœur ! Leur dernière ligne de défense !",
						"spanish": "¡Este es el núcleo! ¡Su última línea de defensa!",
						"vietnamese": "Đây là trung tâm! Phòng tuyến cuối cùng của chúng!",
						"thai": "นี่คือแกนกลาง! แนวป้องกันสุดท้ายของพวกมัน!",
						"hindi": "यह कोर है! उनकी अंतिम रक्षा पंक्ति!"
					},
					"speaker": "kai",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "시끄럽군. '오류'는 제거되어야 한다.",
						"english": "Annoying. 'Errors' must be purged.",
						"japanese": "うるさい。『エラー』は排除されなければならない。",
						"chinese": "真吵。‘错误’必须被清除。",
						"french": "Agacant. Les 'erreurs' doivent être purgées.",
						"spanish": "Molesto. Los 'errores' deben ser purgados.",
						"vietnamese": "Ồn ào. 'Lỗi' phải bị loại bỏ.",
						"thai": "น่ารำคาญ 'ข้อผิดพลาด' ต้องถูกกำจัด.",
						"hindi": "परेशान करने वाला। 'त्रुटियों' को मिटाया जाना चाहिए।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "정체 모를 존재가 앞을 가로막았다. 시스템의 명령이었다.",
						"english": "An unknown entity blocked the way. It was the system's command.",
						"japanese": "正体不明の存在が道を阻んだ。システムからの命令だった。",
						"chinese": "一个不明实体挡住了去路。那是系统的命令。",
						"french": "Une entité inconnue bloquait le chemin. C'était l'ordre du système.",
						"spanish": "Una entidad desconocida bloqueó el camino. Era una orden del sistema.",
						"vietnamese": "Một thực thể không rõ danh tính chặn đường. Đó là mệnh lệnh của hệ thống.",
						"thai": "สิ่งมีชีวิตที่ไม่รู้จักขวางทางอยู่ นั่นคือคำสั่งของระบบ.",
						"hindi": "एक अज्ञात इकाई ने रास्ता रोक दिया। यह सिस्टम का आदेश था।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "너의 '진실'은 곧 지워질 데이터일 뿐.",
						"english": "Your 'truth' is merely data to be erased.",
						"japanese": "お前の『真実』は、やがて消されるデータに過ぎない。",
						"chinese": "你的‘真相’不过是即将被抹去的数据。",
						"french": "Ta 'vérité' n'est que des données à effacer.",
						"spanish": "Tu 'verdad' no es más que datos a borrar.",
						"vietnamese": "'Sự thật' của ngươi chỉ là dữ liệu sắp bị xóa.",
						"thai": "'ความจริง' ของเจ้าเป็นเพียงข้อมูลที่จะถูกลบ.",
						"hindi": "आपका 'सच' केवल मिटाया जाने वाला डेटा है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "절대 지워지지 않아!",
						"english": "It will never be erased!",
						"japanese": "絶対消させない！",
						"chinese": "绝不会被抹去！",
						"french": "Ça ne sera jamais effacé !",
						"spanish": "¡Nunca será borrado!",
						"vietnamese": "Sẽ không bao giờ bị xóa!",
						"thai": "ไม่มีทางลบได้!",
						"hindi": "यह कभी मिटाया नहीं जाएगा!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"duration_ms": 400,
					"type": "direction",
					"speaker": "kai",
					"action": "exit",
					"direction": "down"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "어리석은 저항. 시스템의 위대함을 깨달아라!",
						"english": "Foolish resistance. Realize the system's greatness!",
						"japanese": "愚かな抵抗。システムの偉大さを悟れ！",
						"chinese": "愚蠢的抵抗。认清系统的伟大吧！",
						"french": "Résistance stupide. Réalisez la grandeur du système !",
						"spanish": "Resistencia estúpida. ¡Reconoce la grandeza del sistema!",
						"vietnamese": "Chống cự ngu xuẩn. Hãy nhận ra sự vĩ đại của hệ thống!",
						"thai": "การต่อต้านที่โง่เขลา จงตระหนักถึงความยิ่งใหญ่ของระบบ!",
						"hindi": "मूर्खतापूर्ण प्रतिरोध। सिस्टम की महानता को समझो!"
					},
					"speaker": "random_boss",
					"type": "speech"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "시스템의 압도적인 힘 앞에 쓰러졌다.",
						"english": "Overwhelmed by the system's power, I fell.",
						"japanese": "システムの圧倒的な力の前に倒れた。",
						"chinese": "在系统压倒性的力量面前倒下了。",
						"french": "Je suis tombé face à la puissance écrasante du système.",
						"spanish": "Caí ante el poder abrumador del sistema.",
						"vietnamese": "Ngã xuống trước sức mạnh áp đảo của hệ thống.",
						"thai": "ล้มลงต่อหน้าพลังอันท่วมท้นของระบบ",
						"hindi": "सिस्टम की अत्यधिक शक्ति के सामने गिर गया।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "작은 데이터 조각 따위가… 사라져라.",
						"english": "A mere data fragment... Vanish.",
						"japanese": "小さなデータの一部など… 消え失せろ。",
						"chinese": "区区数据碎片… 消失吧。",
						"french": "Un simple fragment de données... Disparais.",
						"spanish": "Un mero fragmento de datos... Desaparece.",
						"vietnamese": "Một mảnh dữ liệu nhỏ bé... Biến mất đi.",
						"thai": "แค่เศษข้อมูลเล็กๆ... จงหายไปซะ",
						"hindi": "एक छोटा सा डेटा खंड... गायब हो जाओ।"
					},
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "…아직 끝나지 않았어. 진실은… 영원해!",
						"english": "...It's not over yet. The truth is... eternal!",
						"japanese": "…まだ終わっていない。真実は…永遠だ！",
						"chinese": "…还没结束。真相…是永恒的！",
						"french": "...Ce n'est pas encore fini. La vérité est... éternelle !",
						"spanish": "...Aún no ha terminado. ¡La verdad es... eterna!",
						"vietnamese": "...Chưa kết thúc đâu. Sự thật... là vĩnh cửu!",
						"thai": "...ยังไม่จบหรอก ความจริงคือ... นิรันดร์!",
						"hindi": "...अभी खत्म नहीं हुआ है। सच्चाई... शाश्वत है!"
					},
					"type": "speech"
				}
			]
		}
	]
} as const;
