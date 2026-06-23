export const scenario_snowy_galdrgrim_47_04 = {
	"scenario_id": "snowy_galdrgrim_47_04",
	"order": 4,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"borealis": {
			"id": "mon_8dc13eb3-9244-4413-a74b-ee25681ceab5",
			"name": {
				"korean": "보레아리스",
				"english": "Borealis",
				"japanese": "ボレアリス",
				"chinese": "博瑞利斯",
				"french": "Boréalis",
				"spanish": "Borealis",
				"vietnamese": "Borealis",
				"thai": "โบเรียลิส",
				"hindi": "बोरियालिस"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/bd557ed6-ee94-4ed6-7da8-6f9770585b00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2a79793b-650a-478a-00e2-38f8c8730a00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"얼어붙은 설원, 그 아래 잠든 고대 서약.",
			"모든 것을 지키려던 맹세는 왜 파멸이 되었을까.",
			"현자는 말한다. 이 비극은 반복되었다고.",
			"그리고 나의 죄책감이, 그 고리와 연결되어 있었다."
		],
		"english": [
			"Frozen wasteland, an ancient pact dormant beneath.",
			"Why did the vow to protect everything lead to ruin?",
			"The sage says this tragedy has repeated.",
			"And my guilt was linked to that cycle."
		],
		"japanese": [
			"凍てつく雪原、その下に眠る古の誓約。",
			"全てを守ろうとした誓いは、なぜ破滅となったのか。",
			"賢者は語る。この悲劇は繰り返されてきたと。",
			"そして私の罪悪感が、その輪に繋がっていた。"
		],
		"chinese": [
			"冰封雪原之下，沉睡着古老的誓约。",
			"守护一切的誓言，为何走向了毁灭？",
			"贤者说，这场悲剧曾反复上演。",
			"而我的罪恶感，与那个循环息息相关。"
		],
		"french": [
			"Plaine enneigée gelée, un ancien pacte endormi en dessous.",
			"Pourquoi le serment de tout protéger a-t-il mené à la ruine ?",
			"Le sage dit que cette tragédie s'est répétée.",
			"Et ma culpabilité était liée à ce cycle."
		],
		"spanish": [
			"Páramo helado, un antiguo pacto dormido debajo.",
			"¿Por qué el juramento de protegerlo todo se convirtió en ruina?",
			"El sabio dice que esta tragedia se ha repetido.",
			"Y mi culpa estaba ligada a ese ciclo."
		],
		"vietnamese": [
			"Đồng tuyết đóng băng, khế ước cổ xưa ngủ vùi bên dưới.",
			"Lời thề bảo vệ mọi thứ, sao lại thành tai họa?",
			"Hiền nhân nói, bi kịch này đã lặp lại.",
			"Và tội lỗi của tôi, đã gắn liền với vòng lặp đó."
		],
		"thai": [
			"ทุ่งหิมะเยือกแข็ง ใต้ผืนนั้นคือพันธสัญญาโบราณที่หลับใหล",
			"คำสาบานว่าจะปกป้องทุกสิ่ง ทำไมถึงกลายเป็นความพินาศ?",
			"ปราชญ์กล่าวว่า โศกนาฏกรรมนี้ได้เกิดขึ้นซ้ำแล้วซ้ำเล่า",
			"และความรู้สึกผิดของฉันก็เชื่อมโยงกับวงจรนั้น"
		],
		"hindi": [
			"जमी हुई बर्फीली ज़मीन, जिसके नीचे एक प्राचीन वाचा सोई है।",
			"सब कुछ बचाने की कसम, विनाश का कारण क्यों बनी?",
			"ऋषि कहते हैं कि यह त्रासदी दोहराई गई है।",
			"और मेरी अपराधबोध उस कड़ी से जुड़ा था।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"speaker": "borealis",
					"action": "enter"
				},
				{
					"emotion": "base",
					"speaker": "borealis",
					"type": "speech",
					"content": {
						"korean": "자네가 찾은 미완성 문장, 그것이 이 고대 기록의 열쇠였어.",
						"english": "The incomplete sentence you found, that was the key to this ancient record.",
						"japanese": "君が見つけた未完成の文章、それがこの古代記録の鍵だったんだ。",
						"chinese": "你找到的未完成的句子，就是这份古老记录的钥匙。",
						"french": "La phrase incomplète que vous avez trouvée, c'était la clé de cet ancien registre.",
						"spanish": "La frase incompleta que encontraste, esa era la clave de este antiguo registro.",
						"vietnamese": "Câu chưa hoàn chỉnh cậu tìm thấy, chính là chìa khóa của ghi chép cổ này.",
						"thai": "ประโยคที่ยังไม่สมบูรณ์ที่คุณพบ นั่นแหละคือกุญแจสู่บันทึกโบราณนี้",
						"hindi": "जो अधूरा वाक्य तुमने पाया, वही इस प्राचीन अभिलेख की कुंजी था।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "기록에는 뭐라고 되어 있나요?",
						"english": "What does the record say?",
						"japanese": "記録には何と書いてありますか？",
						"chinese": "记录里写了什么？",
						"french": "Que dit le registre ?",
						"spanish": "¿Qué dice el registro?",
						"vietnamese": "Ghi chép nói gì ạ?",
						"thai": "บันทึกเขียนว่าอย่างไรบ้าง?",
						"hindi": "अभिलेख में क्या लिखा है?"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "borealis",
					"content": {
						"korean": "모든 것을 얼려 영원히 보존하려 했다는 맹세….",
						"english": "A vow to freeze everything to preserve it forever...",
						"japanese": "全てを凍らせて永遠に保存しようとした誓い…。",
						"chinese": "誓言要冻结一切，以永久保存……",
						"french": "Un serment de tout geler pour le préserver à jamais...",
						"spanish": "Un juramento para congelarlo todo y preservarlo para siempre...",
						"vietnamese": "Lời thề đóng băng mọi thứ để bảo tồn vĩnh viễn...",
						"thai": "คำสาบานที่จะแช่แข็งทุกสิ่งเพื่อรักษามันไว้ตลอดไป...",
						"hindi": "सब कुछ जमाकर हमेशा के लिए संरक्षित करने की कसम..."
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "보존? 그럼 저 얼어붙은 사람들은….",
						"english": "Preservation? Then those frozen people...",
						"japanese": "保存？じゃあ、あの凍りついた人々は…。",
						"chinese": "保存？那么那些被冻结的人是……",
						"french": "Préservation ? Alors ces gens gelés...",
						"spanish": "¿Preservación? Entonces esas personas congeladas...",
						"vietnamese": "Bảo tồn? Vậy những người bị đóng băng đó...",
						"thai": "การถนอมรักษา? ถ้าอย่างนั้นคนเหล่านั้นที่ถูกแช่แข็งก็คือ...",
						"hindi": "संरक्षण? तो वे जमे हुए लोग..."
					}
				},
				{
					"speaker": "borealis",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이 비극의 시작은 구원이었다는 말이지.",
						"english": "So, the beginning of this tragedy was salvation.",
						"japanese": "つまり、この悲劇の始まりは救済だったというわけか。",
						"chinese": "也就是说，这场悲剧的开端，竟然是救赎。",
						"french": "Donc, le début de cette tragédie était le salut.",
						"spanish": "Así que, el comienzo de esta tragedia fue la salvación.",
						"vietnamese": "Vậy, khởi đầu của bi kịch này chính là sự cứu rỗi.",
						"thai": "หมายความว่า จุดเริ่มต้นของโศกนาฏกรรมนี้คือการช่วยให้รอดสินะ",
						"hindi": "तो, इस त्रासदी की शुरुआत मुक्ति थी।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "borealis",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "…그럼 과거의 재앙도, 지금의 파멸도….",
						"english": "...Then the past calamity, and the current ruin...",
						"japanese": "…だとすると、過去の災厄も、今の破滅も…。",
						"chinese": "...那么过去的灾难，和现在的毁灭……",
						"french": "...Alors la calamité passée, et la ruine actuelle...",
						"spanish": "...Entonces la calamidad pasada, y la ruina actual...",
						"vietnamese": "...Vậy thì tai ương quá khứ, và sự hủy diệt hiện tại...",
						"thai": "…ถ้าอย่างนั้นภัยพิบัติในอดีต และความพินาศในปัจจุบันก็คือ…",
						"hindi": "...तो पिछली आपदा भी, और वर्तमान विनाश भी..."
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "borealis",
					"content": {
						"korean": "모든 것을 지키려는 맹세에서 시작되었어. 반복되는 비극이지.",
						"english": "It began with a vow to protect everything. A repeating tragedy.",
						"japanese": "全てを守るという誓いから始まった。繰り返される悲劇だ。",
						"chinese": "始于守护一切的誓言。一场反复上演的悲剧。",
						"french": "Tout a commencé par un vœu de tout protéger. Une tragédie récurrente.",
						"spanish": "Todo comenzó con un juramento para protegerlo todo. Una tragedia que se repite.",
						"vietnamese": "Nó bắt đầu bằng lời thề bảo vệ mọi thứ. Một bi kịch lặp đi lặp lại.",
						"thai": "มันเริ่มต้นจากคำสาบานว่าจะปกป้องทุกสิ่ง โศกนาฏกรรมที่เกิดขึ้นซ้ำๆ",
						"hindi": "यह सब कुछ बचाने की शपथ से शुरू हुआ। एक दोहराई जाने वाली त्रासदी।"
					}
				},
				{
					"content": {
						"korean": "내 안의 이 죄책감도, 그 반복과 연결되어 있는 건가요?",
						"english": "Is this guilt within me also connected to that repetition?",
						"japanese": "私の中のこの罪悪感も、その繰り返しと繋がっているのですか？",
						"chinese": "我内心的这份罪恶感，也与那重复有关吗？",
						"french": "Cette culpabilité en moi est-elle aussi liée à cette répétition ?",
						"spanish": "¿Esta culpa dentro de mí también está conectada con esa repetición?",
						"vietnamese": "Cảm giác tội lỗi trong tôi cũng liên quan đến sự lặp lại đó sao?",
						"thai": "ความรู้สึกผิดในใจฉันก็เชื่อมโยงกับการเกิดซ้ำนั้นด้วยหรือเปล่า?",
						"hindi": "क्या मेरे अंदर का यह अपराधबोध भी उस पुनरावृत्ति से जुड़ा है?"
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "고대의 기록은 그렇게 말하고 있지.",
						"english": "The ancient records say so.",
						"japanese": "古代の記録はそう語っている。",
						"chinese": "古老的记载是这样说的。",
						"french": "Les anciens registres le disent.",
						"spanish": "Los registros antiguos así lo afirman.",
						"vietnamese": "Các ghi chép cổ đại nói vậy.",
						"thai": "บันทึกโบราณกล่าวไว้เช่นนั้น",
						"hindi": "प्राचीन अभिलेख ऐसा ही कहते हैं।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "borealis"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "borealis",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "그들은 얼어붙은 채 영원히 보존되었다고 믿었어.",
						"english": "They believed they were preserved forever, frozen.",
						"japanese": "彼らは永遠に凍結保存されたと信じていた。",
						"chinese": "他们相信自己被冰封，永远保存了下来。",
						"french": "Ils croyaient être préservés pour l'éternité, figés.",
						"spanish": "Creían que fueron preservados para siempre, congelados.",
						"vietnamese": "Họ tin rằng mình đã được bảo tồn vĩnh viễn, trong tình trạng đóng băng.",
						"thai": "พวกเขาเชื่อว่าตนเองถูกเก็บรักษาไว้ตลอดไปในสภาพที่แข็งตัว",
						"hindi": "उन्हें विश्वास था कि वे हमेशा के लिए जमे हुए, संरक्षित थे।"
					},
					"emotion": "base",
					"speaker": "borealis",
					"type": "speech"
				},
				{
					"content": {
						"korean": "하지만 그건 고통이었어.",
						"english": "But it was agony.",
						"japanese": "しかし、それは苦痛だった。",
						"chinese": "但那却是痛苦。",
						"french": "Mais ce fut une agonie.",
						"spanish": "Pero fue una agonía.",
						"vietnamese": "Nhưng đó lại là nỗi đau.",
						"thai": "แต่มันคือความทรมาน",
						"hindi": "लेकिन वह पीड़ा थी।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "borealis",
					"content": {
						"korean": "그래. 구원이란 이름의 파멸. 영원히 얼어붙은 시간.",
						"english": "Yes. Destruction in the name of salvation. Time frozen forever.",
						"japanese": "そう。救済という名の破滅。永遠に凍りついた時間。",
						"chinese": "是的。以救赎之名行毁灭之事。永远冻结的时间。",
						"french": "Oui. La destruction au nom du salut. Le temps figé pour toujours.",
						"spanish": "Sí. Destrucción en nombre de la salvación. Tiempo congelado para siempre.",
						"vietnamese": "Đúng vậy. Sự hủy diệt mang tên cứu rỗi. Thời gian đóng băng vĩnh cửu.",
						"thai": "ใช่ การทำลายล้างในนามของความรอด เวลาที่ถูกแช่แข็งชั่วนิรันดร์",
						"hindi": "हाँ। मुक्ति के नाम पर विनाश। हमेशा के लिए जमा हुआ समय।"
					}
				},
				{
					"content": {
						"korean": "이 모든 게, 한 사람의 뒤틀린 믿음 때문이라고요?",
						"english": "All this, because of one person's twisted belief?",
						"japanese": "この全てが、一人の歪んだ信念のせいだと？",
						"chinese": "这一切，都是因为一个人的扭曲信仰吗？",
						"french": "Tout cela, à cause de la croyance tordue d'une seule personne ?",
						"spanish": "¿Todo esto, por la creencia retorcida de una sola persona?",
						"vietnamese": "Tất cả những điều này, chỉ vì niềm tin sai lệch của một người sao?",
						"thai": "ทั้งหมดนี้ เป็นเพราะความเชื่อที่บิดเบี้ยวของคนๆ หนึ่งงั้นหรือ?",
						"hindi": "यह सब, एक व्यक्ति की विकृत धारणा के कारण है?"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "borealis"
				},
				{
					"content": {
						"korean": "고대의 서약석에서 힘이 새어 나오고 있어.",
						"english": "Power is leaking from the ancient covenant stone.",
						"japanese": "古代の誓約石から力が漏れ出している。",
						"chinese": "力量正从古老的誓约石中溢出。",
						"french": "Le pouvoir s'échappe de l'ancienne pierre du pacte.",
						"spanish": "El poder se está filtrando de la antigua piedra del pacto.",
						"vietnamese": "Sức mạnh đang rò rỉ từ viên đá giao ước cổ xưa.",
						"thai": "พลังงานกำลังรั่วไหลออกมาจากศิลาพันธสัญญาโบราณ",
						"hindi": "प्राचीन वाचा के पत्थर से शक्ति निकल रही है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "borealis"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "이 길을 멈출 수 없다는 건가요.",
						"english": "Does this mean this path cannot be stopped?",
						"japanese": "この道を止めることはできないというのか。",
						"chinese": "这条路无法停止了吗？",
						"french": "Cela signifie-t-il que ce chemin ne peut être arrêté ?",
						"spanish": "¿Significa esto que este camino no se puede detener?",
						"vietnamese": "Điều này có nghĩa là con đường này không thể dừng lại sao?",
						"thai": "นี่หมายความว่าหนทางนี้หยุดไม่ได้แล้วใช่ไหม?",
						"hindi": "क्या इसका मतलब है कि इस मार्ग को रोका नहीं जा सकता?"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "borealis",
					"content": {
						"korean": "이제 모든 진실을 마주할 때다.",
						"english": "Now is the time to face all truths.",
						"japanese": "今こそ、全ての真実と向き合う時だ。",
						"chinese": "现在是面对所有真相的时候了。",
						"french": "Il est temps d'affronter toutes les vérités.",
						"spanish": "Ahora es el momento de enfrentar todas las verdades.",
						"vietnamese": "Bây giờ là lúc đối mặt với mọi sự thật.",
						"thai": "ถึงเวลาเผชิญหน้ากับความจริงทั้งหมดแล้ว",
						"hindi": "अब सभी सच्चाइयों का सामना करने का समय है।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "이 죄책감의 근원을… 반드시 밝혀야 해.",
						"english": "I must uncover the source of this guilt.",
						"japanese": "この罪悪感の根源を…必ず突き止めなければならない。",
						"chinese": "这份罪恶感的根源……我必须揭露出来。",
						"french": "Je dois absolument découvrir la source de cette culpabilité.",
						"spanish": "Debo descubrir el origen de esta culpa.",
						"vietnamese": "Ta phải tìm ra nguồn gốc của sự tội lỗi này.",
						"thai": "ข้าต้องเปิดเผยต้นตอของความรู้สึกผิดนี้ให้ได้",
						"hindi": "मुझे इस अपराधबोध के स्रोत का पता लगाना होगा।"
					}
				},
				{
					"speaker": "borealis",
					"type": "direction",
					"duration_ms": 400,
					"action": "exit"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "차가운 얼음이 모든 것을 감쌌다. 움직일 수 없었다.",
						"english": "Cold ice enveloped all. I couldn't move.",
						"japanese": "冷たい氷がすべてを包み込んだ。動けなかった。",
						"chinese": "冰冷的寒气笼罩了一切。我无法动弹。",
						"french": "La glace froide enveloppait tout. Je ne pouvais plus bouger.",
						"spanish": "El hielo frío lo cubrió todo. No pude moverme.",
						"vietnamese": "Băng giá lạnh lẽo bao trùm tất cả. Ta không thể cử động.",
						"thai": "น้ำแข็งเย็นเยือกปกคลุมทุกสิ่ง ขยับไม่ได้เลย",
						"hindi": "बर्फ़ीली ठंड ने सब कुछ घेर लिया। मैं हिल नहीं पा रहा था।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "파멸을 막는 유일한 길은, 영원한 보존뿐이다.",
						"english": "The only way to avert ruin is eternal preservation.",
						"japanese": "破滅を防ぐ唯一の道は、永遠の保存のみ。",
						"chinese": "阻止毁灭的唯一途径，是永恒的保存。",
						"french": "Le seul moyen d'éviter la ruine est la préservation éternelle.",
						"spanish": "La única forma de evitar la ruina es la preservación eterna.",
						"vietnamese": "Cách duy nhất để ngăn chặn sự diệt vong, là sự bảo tồn vĩnh cửu.",
						"thai": "หนทางเดียวที่จะหลีกหนีจากความพินาศ คือการคงอยู่ชั่วนิรันดร์",
						"hindi": "विनाश को रोकने का एकमात्र तरीका, शाश्वत संरक्षण है।"
					}
				},
				{
					"content": {
						"korean": "아직 끝나지 않았어….",
						"english": "It's not over yet...",
						"japanese": "まだ終わってない…",
						"chinese": "还没结束…",
						"french": "Ce n'est pas encore fini...",
						"spanish": "Aún no ha terminado...",
						"vietnamese": "Vẫn chưa kết thúc đâu...",
						"thai": "ยังไม่จบแค่นี้...",
						"hindi": "यह अभी ख़त्म नहीं हुआ है…"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "…다음에 다시 찾아오겠지. 네 죄책감에 이끌려.",
						"english": "...It will return next time, drawn by your guilt.",
						"japanese": "…次はまた来るだろう。君の罪悪感に引き寄せられて。",
						"chinese": "…下次它会再来的。被你的罪恶感吸引而来。",
						"french": "...Il reviendra la prochaine fois, attiré par ta culpabilité.",
						"spanish": "...Volverá la próxima vez, atraído por tu culpa.",
						"vietnamese": "...Lần tới nó sẽ quay lại thôi. Bị lỗi lầm của ngươi dẫn lối.",
						"thai": "...มันจะกลับมาอีกครั้งในคราวหน้า ด้วยแรงดึงดูดจากความรู้สึกผิดของเจ้า",
						"hindi": "…यह अगली बार फिर आएगा। तुम्हारे अपराधबोध से आकर्षित होकर।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "sad",
					"content": {
						"korean": "…겨우 이것으로 멈출 수 있을 거라 생각하나?",
						"english": "...Do you truly believe this alone can stop me?",
						"japanese": "…たかがこれしきで止められるとでも思うのか？",
						"chinese": "……你以为仅凭这些就能阻止我吗？",
						"french": "...Penses-tu vraiment que cela seul peut m'arrêter ?",
						"spanish": "¿...De verdad crees que con esto solo podrás detenerme?",
						"vietnamese": "...Ngươi nghĩ chỉ với điều này có thể ngăn cản ta sao?",
						"thai": "…เจ้าคิดว่าแค่นี้จะหยุดข้าได้งั้นหรือ?",
						"hindi": "...क्या तुम सच में सोचते हो कि यह अकेला मुझे रोक सकता है?"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "이 맹세는, 네 안에도 잠들어 있다….",
						"english": "This vow... it slumbers within you as well.",
						"japanese": "この誓いは、お前の中にも眠っている…。",
						"chinese": "这份誓言，也沉睡在你体内……",
						"french": "Ce serment... sommeille aussi en toi.",
						"spanish": "Este juramento... también duerme dentro de ti.",
						"vietnamese": "Lời thề này, cũng đang ngủ say bên trong ngươi...",
						"thai": "คำสาบานนี้...มันหลับใหลอยู่ในตัวเจ้าด้วยเช่นกัน",
						"hindi": "यह प्रतिज्ञा, तुम्हारे भीतर भी सोई हुई है..."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "무슨 소리야? 내 안에?",
						"english": "What do you mean? Within me?",
						"japanese": "何を言っている？私の中に？",
						"chinese": "你在说什么？在我体内？",
						"french": "Que veux-tu dire ? En moi ?",
						"spanish": "¿Qué dices? ¿Dentro de mí?",
						"vietnamese": "Ngươi đang nói gì vậy? Bên trong ta?",
						"thai": "หมายความว่าอย่างไร? ในตัวข้าหรือ?",
						"hindi": "तुम्हारा क्या मतलब है? मेरे अंदर?"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "무엇이 끝났는지, 무엇이 남았는지 알 수 없었다.",
						"english": "It was impossible to discern what had ended, and what remained.",
						"japanese": "何が終わったのか、何が残ったのか、知る由もなかった。",
						"chinese": "无法知晓何为终结，何为残留。",
						"french": "On ne pouvait savoir ce qui était terminé, ni ce qui restait.",
						"spanish": "No se podía saber qué había terminado y qué quedaba.",
						"vietnamese": "Không thể biết điều gì đã kết thúc, điều gì còn sót lại.",
						"thai": "ไม่อาจรู้ได้ว่าสิ่งใดจบลง และสิ่งใดที่ยังคงเหลืออยู่",
						"hindi": "यह बताना असंभव था कि क्या खत्म हो गया था, और क्या बचा था।"
					}
				},
				{
					"content": {
						"korean": "하지만 죄책감의 무게는 여전했다. 더 깊은 곳으로 향해야 한다.",
						"english": "But the weight of guilt remained. I must venture deeper.",
						"japanese": "しかし、罪悪感の重さは変わらなかった。もっと深くへ進まなければならない。",
						"chinese": "然而，罪恶感依旧沉重。我必须前往更深处。",
						"french": "Mais le poids de la culpabilité persistait. Je dois m'aventurer plus profondément.",
						"spanish": "Pero el peso de la culpa persistía. Debo adentrarme más profundo.",
						"vietnamese": "Nhưng gánh nặng tội lỗi vẫn còn đó. Ta phải tiến sâu hơn nữa.",
						"thai": "แต่ความรู้สึกผิดยังคงอยู่ ข้าต้องลงไปให้ลึกกว่านี้",
						"hindi": "परन्तु, अपराधबोध का बोझ अभी भी था। मुझे और गहराई में जाना होगा।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "고대의 서약석, 그 앞에서 거대한 그림자가 나타났다.",
						"english": "Before the ancient Covenant Stone, a colossal shadow appeared.",
						"japanese": "古の誓約石の前に、巨大な影が現れた。",
						"chinese": "在古老的誓约石前，一道巨大的身影出现了。",
						"french": "Devant la Pierre du Pacte antique, une ombre gigantesque apparut.",
						"spanish": "Ante la antigua Piedra del Pacto, una sombra colosal apareció.",
						"vietnamese": "Trước Tảng Đá Giao Ước cổ đại, một bóng đen khổng lồ hiện ra.",
						"thai": "เบื้องหน้าศิลาพันธสัญญาโบราณ เงาขนาดมหึมาได้ปรากฏขึ้น",
						"hindi": "प्राचीन प्रतिज्ञा पत्थर के सामने, एक विशाल छाया प्रकट हुई।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "왔구나. 이 모든 것을 '구원'할 자여.",
						"english": "You have come. The one who will 'redeem' all of this.",
						"japanese": "来たか。この全てを「救済」する者よ。",
						"chinese": "你来了。那个将'拯救'这一切的人。",
						"french": "Tu es venu. Celui qui 'sauvera' tout cela.",
						"spanish": "Has llegado. El que 'salvará' todo esto.",
						"vietnamese": "Ngươi đã đến. Kẻ sẽ 'cứu rỗi' tất cả những thứ này.",
						"thai": "เจ้ามาแล้วสินะ ผู้ที่จะ 'กอบกู้' ทุกสิ่งนี้",
						"hindi": "तुम आ गए। वह जो इन सब को 'बचाएगा'।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "구원이라고? 네가 한 짓이?",
						"english": "Redemption? What you've done?",
						"japanese": "救済だと？お前がやったことが？",
						"chinese": "拯救？你所做的一切？",
						"french": "La rédemption ? Ce que tu as fait ?",
						"spanish": "¿Redención? ¿Lo que has hecho?",
						"vietnamese": "Cứu rỗi? Những gì ngươi đã làm?",
						"thai": "กอบกู้รึ? สิ่งที่เจ้าทำน่ะหรือ?",
						"hindi": "मोक्ष? तुमने जो किया है?"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "모든 것은 얼려져야 영원히 보존될 수 있다. 이것이 나의 맹세.",
						"english": "All must be frozen to be preserved eternally. This is my vow.",
						"japanese": "全ては凍らされてこそ永遠に保存される。これが私の誓い。",
						"chinese": "一切都必须被冰封，才能永远保存。这是我的誓言。",
						"french": "Tout doit être gelé pour être préservé éternellement. C'est mon serment.",
						"spanish": "Todo debe ser congelado para ser preservado eternamente. Este es mi juramento.",
						"vietnamese": "Tất cả phải được đóng băng để bảo tồn vĩnh cửu. Đây là lời thề của ta.",
						"thai": "ทุกสิ่งจะต้องถูกแช่แข็ง เพื่อให้คงอยู่ชั่วนิรันดร์ นี่คือคำสาบานของข้า",
						"hindi": "सब कुछ को हमेशा के लिए संरक्षित करने के लिए जमे हुए होना चाहिए। यह मेरी प्रतिज्ञा है।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "그건 파멸이야!",
						"english": "That's destruction!",
						"japanese": "それは破滅だ！",
						"chinese": "那是毁灭！",
						"french": "C'est la destruction !",
						"spanish": "¡Eso es destrucción!",
						"vietnamese": "Đó là sự hủy diệt!",
						"thai": "นั่นมันหายนะ!",
						"hindi": "वह तो विनाश है!"
					}
				}
			]
		}
	]
} as const;
