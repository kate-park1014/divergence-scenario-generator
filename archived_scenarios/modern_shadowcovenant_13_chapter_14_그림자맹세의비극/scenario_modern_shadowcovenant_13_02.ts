export const scenario_modern_shadowcovenant_13_02 = {
	"scenario_id": "modern_shadowcovenant_13_02",
	"order": 2,
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
			"붉은 모래가 흐르는 도시. '맹세'의 그림자가 모든 것을 옥죄고 있었다.",
			"그때, 한 시민이 절규했다. 그림자 조직의 무자비한 추격 속에서.",
			"주인공은 깨달았다. 이 추격은 단순한 우연이 아니라는 것을."
		],
		"english": [
			"A city where red sand flows. The shadow of 'The Vow' was stifling everything.",
			"Then, a citizen screamed amidst the relentless pursuit of the shadow organization.",
			"The protagonist realized. This pursuit was no mere coincidence."
		],
		"japanese": [
			"赤い砂が流れる都市。「誓い」の影が全てを縛り付けていた。",
			"その時、一人の市民が叫んだ。影の組織の冷酷な追跡の中で。",
			"主人公は悟った。この追跡は単なる偶然ではないと。"
		],
		"chinese": [
			"红沙流淌的城市。「誓约」的阴影束缚着一切。",
			"那时，一名市民在暗影组织的无情追捕中绝望地呐喊。",
			"主人公意识到。这次追捕并非偶然。"
		],
		"french": [
			"Une ville où s'écoule le sable rouge. L'ombre du \"Serment\" étouffait tout.",
			"Alors, un citoyen hurla au milieu de la poursuite impitoyable de l'organisation de l'ombre.",
			"Le protagoniste réalisa. Cette poursuite n'était pas une simple coïncidence."
		],
		"spanish": [
			"Una ciudad donde fluye la arena roja. La sombra del 'Juramento' lo oprimía todo.",
			"Entonces, un ciudadano gritó en medio de la persecución implacable de la organización en la sombra.",
			"El protagonista se dio cuenta. Esta persecución no era una mera coincidencia."
		],
		"vietnamese": [
			"Một thành phố nơi cát đỏ chảy. Bóng tối của 'Lời Thề' đang bóp nghẹt mọi thứ.",
			"Lúc đó, một công dân đã kêu gào trong cuộc truy đuổi không ngừng của tổ chức bóng tối.",
			"Nhân vật chính nhận ra. Cuộc truy đuổi này không phải là một sự trùng hợp ngẫu nhiên."
		],
		"thai": [
			"เมืองที่ทรายแดงไหลผ่าน เงาของ 'คำสาบาน' กำลังบีบรัดทุกสิ่ง",
			"ขณะนั้น พลเมืองคนหนึ่งกรีดร้องท่ามกลางการไล่ล่าอย่างไม่หยุดยั้งขององค์กรเงามืด",
			"ตัวเอกตระหนักว่า การไล่ล่านี่ไม่ใช่เรื่องบังเอิญ"
		],
		"hindi": [
			"लाल रेत बहने वाला शहर। 'शपथ' की छाया सब कुछ गला घोंट रही थी।",
			"तभी, एक नागरिक ने छाया संगठन के निर्मम पीछा के बीच चीखना शुरू कर दिया।",
			"नायक को एहसास हुआ। यह पीछा कोई महज इत्तफाक नहीं था।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "낡은 골목, 비명 소리가 울렸다. 그림자가 한 남자를 덮쳤다.",
						"english": "An old alley, a scream echoed. A shadow engulfed a man.",
						"japanese": "古い路地、悲鳴が響いた。影が男を襲った。",
						"chinese": "破旧的小巷里，尖叫声回荡。一个影子扑向了男人。",
						"french": "Une vieille ruelle, un cri retentit. Une ombre engloutit un homme.",
						"spanish": "Un callejón viejo, un grito resonó. Una sombra envolvió a un hombre.",
						"vietnamese": "Con hẻm cũ, tiếng hét vang lên. Một bóng đen bao trùm một người đàn ông.",
						"thai": "ตรอกเก่าแก่ เสียงกรีดร้องดังขึ้น เงาหนึ่งเข้าปกคลุมชายคนหนึ่ง",
						"hindi": "एक पुरानी गली, एक चीख गूंजी। एक छाया ने एक आदमी को निगल लिया।"
					}
				},
				{
					"duration_ms": 500,
					"speaker": "kai",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"type": "direction"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "살려줘!",
						"english": "Help me!",
						"japanese": "助けて！",
						"chinese": "救命！",
						"french": "À l'aide !",
						"spanish": "¡Ayuda!",
						"vietnamese": "Cứu tôi với!",
						"thai": "ช่วยด้วย!",
						"hindi": "बचाओ!"
					},
					"speaker": "kai"
				},
				{
					"content": {
						"korean": "(목표 확인) 시민인가.",
						"english": "(Target confirmed) A citizen?",
						"japanese": "(目標確認) 市民か。",
						"chinese": "(目标确认) 是市民吗？",
						"french": "(Cible confirmée) Un citoyen ?",
						"spanish": "(Objetivo confirmado) ¿Un ciudadano?",
						"vietnamese": "(Xác nhận mục tiêu) Là công dân à?",
						"thai": "(ยืนยันเป้าหมาย) พลเมืองงั้นรึ?",
						"hindi": "(लक्ष्य पुष्टि) नागरिक है?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "감히 '맹세'를 거역한 대가다.",
						"english": "This is the price for daring to defy 'The Vow'.",
						"japanese": "それは「誓い」に逆らった代償だ。",
						"chinese": "这是你胆敢违抗「誓约」的代价。",
						"french": "C'est le prix à payer pour avoir osé défier le « Serment ».",
						"spanish": "Este es el precio por atreverse a desafiar el 'Juramento'.",
						"vietnamese": "Đây là cái giá cho việc dám chống lại 'Lời Thề'.",
						"thai": "นี่คือราคาที่ต้องจ่ายที่กล้าขัดขืน 'คำสาบาน'",
						"hindi": "यह 'शपथ' का उल्लंघन करने की कीमत है।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "더러운 맹세는 내가 끊는다.",
						"english": "I will break this filthy vow.",
						"japanese": "汚れた誓いは、俺が断ち切る。",
						"chinese": "我将斩断这肮脏的誓约。",
						"french": "Je briserai ce serment ignoble.",
						"spanish": "Romperé este juramento inmundo.",
						"vietnamese": "Ta sẽ phá bỏ lời thề bẩn thỉu này.",
						"thai": "ข้าจะทำลายคำสาบานที่สกปรกนี้",
						"hindi": "मैं इस गंदी शपथ को तोड़ दूंगा।"
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "kai",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "고마워… 당신 덕분이야.",
						"english": "Thank you... It's all thanks to you.",
						"japanese": "ありがとう… あなたのおかげだ。",
						"chinese": "谢谢你……多亏了你。",
						"french": "Merci… C'est grâce à vous.",
						"spanish": "Gracias… Es gracias a ti.",
						"vietnamese": "Cảm ơn... Là nhờ có bạn.",
						"thai": "ขอบคุณ… เป็นเพราะคุณ",
						"hindi": "धन्यवाद… यह सब आपकी वजह से है।"
					},
					"emotion": "happy",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "괜찮은가? 누가 널 쫓는 거지?",
						"english": "Are you alright? Who's chasing you?",
						"japanese": "大丈夫か？誰が君を追っているんだ？",
						"chinese": "你没事吧？谁在追你？",
						"french": "Ça va ? Qui vous poursuit ?",
						"spanish": "¿Estás bien? ¿Quién te persigue?",
						"vietnamese": "Bạn ổn chứ? Ai đang đuổi theo bạn vậy?",
						"thai": "คุณโอเคไหม? ใครกำลังไล่ล่าคุณอยู่?",
						"hindi": "क्या तुम ठीक हो? तुम्हें कौन पीछा कर रहा है?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "kai",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "그림자 조직… 그들은 '맹세'의 힘을 믿어. 도시가 이상해지고 있어. 시한 카운트다운이 시작됐다고.",
						"english": "The Shadow Syndicate... they believe in the power of the 'Pledge.' The city's changing. The countdown has begun.",
						"japanese": "影の組織… 彼らは「誓い」の力を信じている。街がおかしくなっている。タイムリミットのカウントダウンが始まったんだ。",
						"chinese": "暗影组织……他们相信“誓约”的力量。城市正在变得奇怪。倒计时已经开始了。",
						"french": "Le Syndicat de l'Ombre... ils croient au pouvoir du 'Serment'. La ville devient étrange. Le compte à rebours a commencé.",
						"spanish": "El Sindicato Sombrío... creen en el poder del 'Pacto'. La ciudad está cambiando. La cuenta atrás ha comenzado.",
						"vietnamese": "Tổ chức Bóng Tối... họ tin vào sức mạnh của 'Lời Thề'. Thành phố đang trở nên kỳ lạ. Đồng hồ đếm ngược đã bắt đầu rồi.",
						"thai": "องค์กรเงา... พวกเขาเชื่อในพลังของ 'คำสาบาน' เมืองกำลังแปลกไป การนับถอยหลังเริ่มต้นขึ้นแล้ว",
						"hindi": "छाया संगठन... वे 'प्रतिज्ञा' की शक्ति में विश्वास करते हैं। शहर अजीब होता जा रहा है। उलटी गिनती शुरू हो गई है。"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "시한 카운트다운?",
						"english": "Countdown?",
						"japanese": "タイムリミットのカウントダウン？",
						"chinese": "倒计时？",
						"french": "Un compte à rebours ?",
						"spanish": "¿Cuenta atrás?",
						"vietnamese": "Đếm ngược ư?",
						"thai": "นับถอยหลัง?",
						"hindi": "उलटी गिनती?"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "아무도 모르지만, 도시가 죽어가고 있어.",
						"english": "No one knows, but the city is dying.",
						"japanese": "誰も知らないが、街は死につつある。",
						"chinese": "没人知道，但这座城市正在死去。",
						"french": "Personne ne le sait, mais la ville est en train de mourir.",
						"spanish": "Nadie lo sabe, pero la ciudad está muriendo.",
						"vietnamese": "Không ai biết, nhưng thành phố đang chết dần.",
						"thai": "ไม่มีใครรู้ แต่เมืองกำลังจะตาย",
						"hindi": "कोई नहीं जानता, लेकिन शहर मर रहा है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "kai"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "희미하게 들려오는 속삭임. '나는 하나의 비극이 아니다.'",
						"english": "A faint whisper. 'I am not a tragedy.'",
						"japanese": "かすかなささやき。「私は一つの悲劇ではない。」",
						"chinese": "隐约的低语。“我不是一场悲剧。”",
						"french": "Un faible murmure. « Je ne suis pas une tragédie. »",
						"spanish": "Un débil susurro. «No soy una tragedia.»",
						"vietnamese": "Một tiếng thì thầm yếu ớt. 'Ta không phải một bi kịch.'",
						"thai": "เสียงกระซิบแผ่วเบา 'ฉันไม่ใช่โศกนาฏกรรมเดียวดาย'",
						"hindi": "एक धीमी फुसफुसाहट। 'मैं कोई त्रासदी नहीं हूँ।'"
					},
					"speaker": "narrator"
				}
			],
			"id": 3
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
					"speaker": "kai"
				},
				{
					"content": {
						"korean": "저기… 시계탑을 봐.",
						"english": "Look... at the clock tower.",
						"japanese": "ねぇ… 時計塔を見て。",
						"chinese": "看……那座钟楼。",
						"french": "Regarde... la tour de l'horloge.",
						"spanish": "Mira... la torre del reloj.",
						"vietnamese": "Nhìn... tháp đồng hồ kìa.",
						"thai": "ดู... หอนาฬิกานั่นสิ",
						"hindi": "देखो... घंटाघर को।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "kai"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "오래된 시계탑의 시계바늘은 멈춰 있었다. 그 아래, 붉은 모래가 끊임없이 흘러내렸다.",
						"english": "The old clock tower's hands were frozen. Below it, red sand flowed endlessly.",
						"japanese": "古い時計塔の針は止まっていた。その下では、赤い砂が絶え間なく流れ落ちていた。",
						"chinese": "古老的钟楼指针停滞不前。在其下方，红色的沙粒不停地流淌。",
						"french": "Les aiguilles de la vieille tour de l'horloge étaient figées. En dessous, du sable rouge s'écoulait sans fin.",
						"spanish": "Las manecillas de la vieja torre del reloj estaban inmóviles. Debajo, arena roja fluía sin cesar.",
						"vietnamese": "Kim đồng hồ của tháp đồng hồ cũ đã ngừng lại. Bên dưới, cát đỏ không ngừng chảy xuống.",
						"thai": "เข็มนาฬิกาบนหอนาฬิกาเก่าหยุดนิ่ง ใต้ฐานมีทรายสีแดงไหลรินไม่หยุด",
						"hindi": "पुराने घंटाघर की सुइयां रुक गई थीं। उसके नीचे, लाल रेत लगातार बह रही थी।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…점점 더 빠르게 흐르는군.",
						"english": "...It's flowing faster.",
						"japanese": "…どんどん速く流れてる。",
						"chinese": "……流得越来越快了。",
						"french": "...Ça coule de plus en plus vite.",
						"spanish": "...Está fluyendo cada vez más rápido.",
						"vietnamese": "...Nó đang chảy nhanh hơn.",
						"thai": "...มันไหลเร็วขึ้นเรื่อยๆ",
						"hindi": "...यह और तेजी से बह रहा है।"
					}
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "시간이 없어. 저들이 다시 올 거야.",
						"english": "No time. They'll be back.",
						"japanese": "時間がない。彼らがまた来るだろう。",
						"chinese": "没时间了。他们会再来的。",
						"french": "Plus le temps. Ils vont revenir.",
						"spanish": "No hay tiempo. Volverán.",
						"vietnamese": "Không còn thời gian. Bọn chúng sẽ trở lại.",
						"thai": "ไม่มีเวลาแล้ว พวกเขาจะกลับมาอีก",
						"hindi": "समय नहीं है। वे फिर आएंगे।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "서둘러야 해. 네가 알고 있는 것을 말해줘.",
						"english": "Hurry. Tell me what you know.",
						"japanese": "急がないと。知っていることを教えてくれ。",
						"chinese": "快点。告诉我你知道些什么。",
						"french": "Dépêche-toi. Dis-moi ce que tu sais.",
						"spanish": "Date prisa. Dime lo que sabes.",
						"vietnamese": "Nhanh lên. Hãy nói cho tôi biết những gì anh biết.",
						"thai": "รีบหน่อย บอกมาว่ารู้อะไรบ้าง",
						"hindi": "जल्दी करो। जो जानते हो, बताओ।"
					}
				},
				{
					"speaker": "kai",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "나도… 자세히는 몰라. 하지만 저들은 '맹세'를 어긴 자들을 쫓아.",
						"english": "I don't... know the details. But they're after those who broke the 'Pledge'.",
						"japanese": "私も… 詳しくは知らない。でも彼らは「誓い」を破った者たちを追っている。",
						"chinese": "我也不……太清楚。但他们追捕那些违背“誓约”的人。",
						"french": "Je ne... connais pas les détails. Mais ils pourchassent ceux qui ont rompu le 'Serment'.",
						"spanish": "Yo tampoco... sé los detalles. Pero persiguen a quienes rompieron el 'Pacto'.",
						"vietnamese": "Tôi cũng không... rõ chi tiết. Nhưng bọn chúng đang truy lùng những kẻ vi phạm 'Lời Thề'.",
						"thai": "ฉันก็... ไม่รู้รายละเอียดนัก แต่พวกเขาตามล่าคนที่ผิด 'คำสาบาน'",
						"hindi": "मुझे भी... विस्तार से नहीं पता। लेकिन वे उन लोगों का पीछा कर रहे हैं जिन्होंने 'प्रतिज्ञा' तोड़ी है।"
					}
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"speaker": "kai",
					"duration_ms": 500
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "(두려움에 떨며) 저기… 또 그들이 나타났어.",
						"english": "(Trembling in fear) Th-they... they're here again.",
						"japanese": "(恐怖に震えながら) あ、あれ… また奴らが現れた。",
						"chinese": "(恐惧地颤抖) 那、那些家伙… 他们又出现了。",
						"french": "(Tremblant de peur) E-eux... ils sont revenus.",
						"spanish": "(Tembloroso de miedo) A-allí... han vuelto a aparecer.",
						"vietnamese": "(Run rẩy sợ hãi) K-kia... chúng lại xuất hiện rồi.",
						"thai": "(สั่นกลัว) น-นั่น... พวกมันมาอีกแล้ว",
						"hindi": "(डर से काँपते हुए) व-वो... वे फिर आ गए।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "'맹세'를 거역한 자는 살 수 없다.",
						"english": "None who defy the 'Oath' shall live.",
						"japanese": "「誓い」に背きし者は生きられぬ。",
						"chinese": "违抗“誓约”者，必死无疑。",
						"french": "Ceux qui défient le « Serment » ne survivront pas.",
						"spanish": "Quienes desafíen el 'Juramento' no vivirán.",
						"vietnamese": "Kẻ nào chống lại 'Lời Thề' sẽ không thể sống sót.",
						"thai": "ผู้ใดฝ่าฝืน 'คำสาบาน' จะไม่มีชีวิตอยู่ได้",
						"hindi": "'शपथ' तोड़ने वाला कोई जीवित नहीं बचेगा।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "물러서!",
						"english": "Stand back!",
						"japanese": "退け！",
						"chinese": "退下！",
						"french": "Recule !",
						"spanish": "¡Atrás!",
						"vietnamese": "Lùi lại!",
						"thai": "ถอยไป!",
						"hindi": "पीछे हटो!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "너도 그 빛을 거역할 셈이냐?",
						"english": "Will you defy that light too?",
						"japanese": "貴様もその光に背くつもりか？",
						"chinese": "你也想违抗那道光吗？",
						"french": "Vas-tu défier cette lumière toi aussi ?",
						"spanish": "¿También desafiarás esa luz?",
						"vietnamese": "Ngươi cũng định chống lại ánh sáng đó sao?",
						"thai": "เจ้าจะขัดขืนแสงนั้นด้วยหรือ?",
						"hindi": "क्या तुम भी उस प्रकाश का विरोध करोगे?"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "그 빛이 뭔데? 죄 없는 사람들을 해치는 게 맹세라면, 난 그걸 파괴하겠어.",
						"english": "What is that light? If its 'Oath' is to harm the innocent, then I'll destroy it.",
						"japanese": "その光が何だ？罪なき人々を傷つけるのが誓いなら、私はそれを破壊する！",
						"chinese": "那光算什么？如果它的“誓约”是伤害无辜之人，那我就摧毁它。",
						"french": "Quelle est cette lumière ? Si son « Serment » est de nuire aux innocents, alors je le détruirai.",
						"spanish": "¿Qué es esa luz? Si su 'Juramento' es dañar a inocentes, entonces lo destruiré.",
						"vietnamese": "Ánh sáng đó là gì? Nếu 'Lời Thề' của nó là làm hại người vô tội, thì tôi sẽ phá hủy nó.",
						"thai": "แสงนั่นคืออะไร? ถ้า 'คำสาบาน' ของมันคือการทำร้ายผู้บริสุทธิ์ ข้าจะทำลายมัน!",
						"hindi": "वह प्रकाश क्या है? यदि उसकी 'शपथ' निर्दोषों को नुकसान पहुँचाना है, तो मैं उसे नष्ट कर दूँगा।"
					}
				},
				{
					"content": {
						"korean": "어리석은… 모든 것은 정해져 있다.",
						"english": "Foolish... All is predetermined.",
						"japanese": "愚かな… 全ては定められている。",
						"chinese": "愚蠢… 一切都已注定。",
						"french": "Insensé... Tout est prédestiné.",
						"spanish": "Insensato... Todo está predestinado.",
						"vietnamese": "Ngu ngốc... Tất cả đã được định trước.",
						"thai": "โง่เขลา... ทุกสิ่งถูกกำหนดไว้แล้ว",
						"hindi": "मूर्ख... सब कुछ तय है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그림자 조직의 무자비한 공격에 주인공은 쓰러졌다.",
						"english": "Under the relentless assault of the Shadow Organization, the protagonist fell.",
						"japanese": "影の組織の無慈悲な攻撃に、主人公は倒れた。",
						"chinese": "在暗影组织的无情攻击下，主角倒下了。",
						"french": "Sous l'attaque impitoyable de l'Organisation Ombre, le protagoniste tomba.",
						"spanish": "Bajo el implacable ataque de la Organización Sombra, el protagonista cayó.",
						"vietnamese": "Dưới sự tấn công tàn nhẫn của Tổ chức Bóng tối, nhân vật chính đã gục ngã.",
						"thai": "ภายใต้การโจมตีอันโหดเหี้ยมขององค์กรเงา ตัวเอกก็ได้ล้มลง",
						"hindi": "शैडो संगठन के अथक हमले के आगे, नायक गिर गया।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "'맹세'를 거역한 자의 말로는 이렇다.",
						"english": "This is the fate of those who defy the 'Pledge'.",
						"japanese": "『誓い』に逆らう者の末路はこうだ。",
						"chinese": "违背『誓约』者的下场便是如此。",
						"french": "Tel est le destin de ceux qui défient le 'Serment'.",
						"spanish": "Este es el destino de quienes desafían el 'Juramento'.",
						"vietnamese": "Đây là kết cục của kẻ dám chống lại 'Lời thề'.",
						"thai": "นี่คือจุดจบของผู้ที่ฝ่าฝืน 'คำปฏิญาณ'",
						"hindi": "'प्रतिज्ञा' का उल्लंघन करने वालों का यही हश्र होता है।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"action": "enter",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "kai"
				},
				{
					"speaker": "kai",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "안 돼!",
						"english": "No!",
						"japanese": "だめだ！",
						"chinese": "不行！",
						"french": "Non !",
						"spanish": "¡No!",
						"vietnamese": "Không!",
						"thai": "ไม่นะ!",
						"hindi": "नहीं!"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "(이를 악물며) 아직… 끝나지 않았다.",
						"english": "(Gritting teeth) It's not... over yet.",
						"japanese": "(歯を食いしばりながら) まだ…終わってない。",
						"chinese": "(咬牙切齿) 还没……结束。",
						"french": "(En serrant les dents) Ce n'est pas… encore fini.",
						"spanish": "(Apretando los dientes) Todavía... no ha terminado.",
						"vietnamese": "(Nghiến răng) Vẫn chưa... kết thúc.",
						"thai": "(กัดฟัน) ยัง...ไม่จบ",
						"hindi": "(दांत पीसते हुए) अभी... खत्म नहीं हुआ है।"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "허무한 발버둥이군.",
						"english": "A futile struggle.",
						"japanese": "虚しい足掻きだな。",
						"chinese": "徒劳的挣扎。",
						"french": "Une lutte vaine.",
						"spanish": "Una lucha inútil.",
						"vietnamese": "Vùng vẫy vô ích.",
						"thai": "ดิ้นรนไปก็เท่านั้นแหละ",
						"hindi": "एक निरर्थक संघर्ष।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "추격전은 도시의 심장부로 이어졌다. 그림자 조직의 중간 보스가 기다리고 있었다.",
						"english": "The chase led to the city's heart. The Shadow Syndicate's mid-boss was waiting.",
						"japanese": "追撃戦は都市の心臓部へと続いた。影の組織の中ボスが待ち構えていた。",
						"chinese": "追击战将他们引向城市中心。暗影组织的中间首领正在那里等候。",
						"french": "La poursuite mena au cœur de la ville. Le boss intermédiaire du Syndicat de l'Ombre attendait.",
						"spanish": "La persecución los llevó al corazón de la ciudad. El subjefe del Sindicato Sombrío estaba esperando.",
						"vietnamese": "Cuộc truy đuổi dẫn đến trung tâm thành phố. Trùm phụ của Tổ chức Bóng Tối đang chờ sẵn.",
						"thai": "การไล่ล่าดำเนินมาถึงใจกลางเมือง หัวหน้ากลางขององค์กรเงามืดกำลังรออยู่",
						"hindi": "पीछा शहर के दिल तक पहुँच गया। शैडो सिंडिकेट का मिड-बॉस इंतज़ार कर रहा था।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "드디어 만났군. '맹세'의 힘을 방해하는 자.",
						"english": "So, we finally meet. The one who obstructs the power of the 'Oath'.",
						"japanese": "ついに会ったな。「誓い」の力を妨げる者よ。",
						"chinese": "终于见面了。阻碍“誓约”之力的人。",
						"french": "Alors, nous nous rencontrons enfin. Celui qui entrave le pouvoir du « Serment ».",
						"spanish": "Así que, por fin nos encontramos. El que obstaculiza el poder del 'Juramento'.",
						"vietnamese": "Cuối cùng cũng gặp mặt. Kẻ cản trở sức mạnh của 'Lời Thề'.",
						"thai": "ในที่สุดเราก็ได้พบกัน ผู้ขัดขวางพลังของ 'คำสาบาน'",
						"hindi": "तो, आखिरकार हम मिल ही गए। 'शपथ' की शक्ति में बाधा डालने वाला।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "네놈들의 잔혹한 맹세는 여기서 끝이다.",
						"english": "Your cruel 'Oath' ends here.",
						"japanese": "貴様らの残酷な誓いはここで終わりだ。",
						"chinese": "你们残酷的“誓约”到此为止。",
						"french": "Votre cruel « Serment » prend fin ici.",
						"spanish": "Vuestro cruel 'Juramento' termina aquí.",
						"vietnamese": "'Lời Thề' tàn nhẫn của các ngươi sẽ kết thúc tại đây.",
						"thai": "'คำสาบาน' อันโหดร้ายของพวกเจ้าจะจบลงที่นี่",
						"hindi": "तुम्हारी क्रूर 'शपथ' यहीं समाप्त होती है।"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "건방진! '맹세'의 진정한 힘을 보여주마!",
						"english": "Insolent! I'll show you the true power of the 'Oath'!",
						"japanese": "生意気な！「誓い」の真の力を見せてやろう！",
						"chinese": "狂妄！我将让你见识“誓约”的真正力量！",
						"french": "Insolent ! Je vais te montrer le vrai pouvoir du « Serment » !",
						"spanish": "¡Impertinente! ¡Te mostraré el verdadero poder del 'Juramento'!",
						"vietnamese": "Hỗn xược! Ta sẽ cho ngươi thấy sức mạnh thực sự của 'Lời Thề'!",
						"thai": "บังอาจ! ข้าจะแสดงพลังที่แท้จริงของ 'คำสาบาน' ให้เจ้าดู!",
						"hindi": "ढीठ! मैं तुम्हें 'शपथ' की असली शक्ति दिखाऊँगा!"
					}
				},
				{
					"speaker": "kai",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"speaker": "kai",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "도망쳐!",
						"english": "Run!",
						"japanese": "逃げろ！",
						"chinese": "快跑！",
						"french": "Fuyez !",
						"spanish": "¡Corre!",
						"vietnamese": "Chạy đi!",
						"thai": "หนีไป!",
						"hindi": "भागो!"
					}
				}
			],
			"win_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "중간 보스가 쓰러지자, 그림자의 힘이 흔들렸다.",
						"english": "As the mid-boss fell, the shadow's power wavered.",
						"japanese": "中ボスが倒れると、影の力が揺らいだ。",
						"chinese": "中级首领倒下后，影子的力量开始动摇。",
						"french": "Alors que le boss intermédiaire tombait, le pouvoir de l'ombre vacilla.",
						"spanish": "Cuando el jefe intermedio cayó, el poder de la sombra vaciló.",
						"vietnamese": "Khi trùm giữa ngã xuống, sức mạnh của bóng tối lung lay.",
						"thai": "เมื่อบอสรองล้มลง พลังของเงาก็สั่นคลอน",
						"hindi": "जैसे ही मध्य-बॉस गिरा, छाया की शक्ति डगमगा गई।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "크윽… 아직 끝나지 않았다. '맹세'는… 하나의 비극이 아니야.",
						"english": "Ugh... It's not over yet. The 'Pledge' is... not just a tragedy.",
						"japanese": "くっ…まだ終わってない。『誓い』は…一つの悲劇じゃない。",
						"chinese": "呃……还没结束。『誓约』…不仅仅是一场悲剧。",
						"french": "Ugh… Ce n'est pas encore fini. Le 'Serment' n'est… pas une simple tragédie.",
						"spanish": "Ugh... Todavía no ha terminado. El 'Juramento' no es... solo una tragedia.",
						"vietnamese": "Khụ... Vẫn chưa kết thúc. 'Lời thề' không phải... chỉ là một bi kịch.",
						"thai": "อึก... ยังไม่จบ 'คำปฏิญาณ' ไม่ใช่... แค่โศกนาฏกรรมเดียว",
						"hindi": "उह... यह अभी खत्म नहीं हुआ है। 'प्रतिज्ञा' सिर्फ... एक त्रासदी नहीं है।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "(무슨 말이지?)",
						"english": "(What does that mean?)",
						"japanese": "(どういう意味だ？)",
						"chinese": "(什么意思？)",
						"french": "(Que veut dire cela ?)",
						"spanish": "(¿Qué significa eso?)",
						"vietnamese": "(Ý gì đây?)",
						"thai": "(หมายความว่าอะไร?)",
						"hindi": "(इसका क्या मतलब है?)"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"speaker": "kai",
					"duration_ms": 500
				},
				{
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "해냈어… 당신 정말 강해.",
						"english": "You did it... You're really strong.",
						"japanese": "やったね…君、本当に強い。",
						"chinese": "你做到了……你真厉害。",
						"french": "Tu l'as fait… Tu es vraiment fort.",
						"spanish": "Lo lograste... Eres realmente fuerte.",
						"vietnamese": "Anh đã làm được... Anh thật sự rất mạnh.",
						"thai": "คุณทำได้แล้ว... คุณแข็งแกร่งจริงๆ",
						"hindi": "तुमने कर दिखाया... तुम वाकई बहुत मजबूत हो।"
					},
					"speaker": "kai"
				},
				{
					"content": {
						"korean": "승리의 여운 속, 도시의 시한 카운트다운은 여전히 흐르고 있었다. 다음 단서를 향해, 주인공은 붉은 모래를 밟고 나아갔다.",
						"english": "In the afterglow of victory, the city's countdown continued to tick. Towards the next clue, the protagonist trod on red sands.",
						"japanese": "勝利の余韻の中、都市のタイムリミットは刻々と迫っていた。次の手がかりを求め、主人公は赤い砂を踏みしめて進んだ。",
						"chinese": "在胜利的余韵中，城市的倒计时仍在继续。为了下一个线索，主角踏着红沙前行。",
						"french": "Dans l'euphorie de la victoire, le compte à rebours de la ville continuait. Vers le prochain indice, le protagoniste s'avança sur le sable rouge.",
						"spanish": "En la resaca de la victoria, la cuenta atrás de la ciudad seguía avanzando. Hacia la siguiente pista, el protagonista pisó las arenas rojas.",
						"vietnamese": "Trong dư âm chiến thắng, đồng hồ đếm ngược của thành phố vẫn tiếp tục. Hướng về manh mối tiếp theo, nhân vật chính dấn bước trên cát đỏ.",
						"thai": "ในความรื่นเริงของชัยชนะ การนับถอยหลังของเมืองยังคงดำเนินต่อไป เพื่อเบาะแสถัดไป ตัวเอกเดินย่ำไปบนผืนทรายสีแดง",
						"hindi": "जीत के बाद, शहर की समय सीमा अभी भी चल रही थी। अगले सुराग की ओर, नायक लाल रेत पर कदम रखते हुए आगे बढ़ा।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			]
		}
	]
} as const;
