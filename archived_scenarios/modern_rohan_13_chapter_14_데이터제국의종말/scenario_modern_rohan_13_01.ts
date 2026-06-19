export const scenario_modern_rohan_13_01 = {
	"scenario_id": "modern_rohan_13_01",
	"order": 1,
	"act": "intro",
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
			"번화한 도시의 밤. 거대한 시스템은 침묵했다.",
			"가짜 사냥꾼은 쓰러졌지만, 위화감은 사라지지 않았다.",
			"모든 단서가 한 명을 가리켰다. 익숙한 이름, 로한.",
			"배신은 칼날이 되어 박혔다. 이제 진짜 사냥이 시작된다."
		],
		"english": [
			"Night in a bustling city. The massive system fell silent.",
			"The fake hunter fell, but the unease lingered.",
			"All clues pointed to one person. A familiar name, Rohan.",
			"Betrayal pierced like a blade. Now, the real hunt begins."
		],
		"japanese": [
			"賑やかな街の夜。巨大なシステムは沈黙した。",
			"偽りの猟師は倒れたが、違和感は消えなかった。",
			"すべての手がかりは一人を指した。おなじみの名前、ロハン。",
			"裏切りは刃となって突き刺さった。今、本当の狩りが始まる。"
		],
		"chinese": [
			"繁华都市之夜。巨大的系统陷入了沉寂。",
			"虚假的猎人倒下了，但违和感并未消失。",
			"所有线索都指向一个人。一个熟悉的名字，罗汉。",
			"背叛如刀刃般刺入。现在，真正的狩猎开始了。"
		],
		"french": [
			"Nuit dans une ville animée. Le système gigantesque est tombé en silence.",
			"Le faux chasseur est tombé, mais le malaise persistait.",
			"Tous les indices menaient à une seule personne. Un nom familier, Rohan.",
			"La trahison s'est enfoncée comme une lame. Maintenant, la vraie chasse commence."
		],
		"spanish": [
			"Noche en una ciudad bulliciosa. El enorme sistema guardó silencio.",
			"El falso cazador cayó, pero la inquietud no desapareció.",
			"Todas las pistas apuntaban a una persona. Un nombre familiar, Rohan.",
			"La traición se clavó como una cuchilla. Ahora, la verdadera caza comienza."
		],
		"vietnamese": [
			"Đêm ở một thành phố nhộn nhịp. Hệ thống khổng lồ chìm vào im lặng.",
			"Thợ săn giả đã gục ngã, nhưng cảm giác bất an vẫn còn đó.",
			"Mọi manh mối đều chỉ vào một người. Một cái tên quen thuộc, Rohan.",
			"Sự phản bội đâm sâu như một lưỡi dao. Bây giờ, cuộc săn thực sự bắt đầu."
		],
		"thai": [
			"ค่ำคืนในเมืองที่พลุกพล่าน ระบบขนาดมหึมาเงียบงันลง",
			"นักล่าจอมปลอมล้มลง แต่ความรู้สึกไม่สบายใจยังคงอยู่",
			"เบาะแสทั้งหมดชี้ไปที่คนคนเดียว ชื่อที่คุ้นเคย, โรฮัน",
			"การทรยศหักหลังแทงทะลุเหมือนคมดาบ ตอนนี้ การล่าจริงจะเริ่มขึ้นแล้ว"
		],
		"hindi": [
			"एक हलचल भरे शहर की रात। विशाल प्रणाली शांत हो गई。",
			"नकली शिकारी गिर गया, लेकिन बेचैनी बनी रही।",
			"सभी सुराग एक व्यक्ति की ओर इशारा करते थे। एक परिचित नाम, रोहन।",
			"विश्वासघात एक ब्लेड की तरह चुभ गया। अब, असली शिकार शुरू होता है।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "거짓된 승리 뒤, 도시는 여전히 어딘가 삐걱거렸다.",
						"english": "Behind a false victory, the city still creaked somewhere.",
						"japanese": "偽りの勝利の後、都市はまだどこか軋んでいた。",
						"chinese": "在虚假的胜利之后，这座城市仍然在某个地方吱呀作响。",
						"french": "Derrière une fausse victoire, la ville grinçait encore quelque part.",
						"spanish": "Tras una victoria falsa, la ciudad seguía chirriando en algún lugar.",
						"vietnamese": "Sau một chiến thắng giả dối, thành phố vẫn còn đâu đó sự bất ổn.",
						"thai": "เบื้องหลังชัยชนะจอมปลอม เมืองยังคงมีบางอย่างผิดปกติ",
						"hindi": "एक झूठी जीत के पीछे, शहर अभी भी कहीं-कहीं चरमरा रहा था।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "가짜 보스를 잡았는데, 왜 이리 찜찜하지?",
						"english": "We caught the fake boss, but why does it feel so unsettling?",
						"japanese": "偽のボスを捕まえたのに、なぜこんなにすっきりしないんだ？",
						"chinese": "抓到了假boss，为什么还是觉得不踏实？",
						"french": "On a capturé le faux boss, mais pourquoi cette sensation d'étrangeté ?",
						"spanish": "Atrapamos al jefe falso, ¿pero por qué me siento tan incómodo?",
						"vietnamese": "Đã bắt được tên trùm giả, nhưng sao cảm giác khó chịu này vẫn còn?",
						"thai": "เราจับบอสปลอมได้แล้ว แต่ทำไมยังรู้สึกไม่สบายใจ?",
						"hindi": "हमने नकली बॉस को पकड़ लिया, लेकिन यह इतना परेशान करने वाला क्यों लगता है?"
					}
				},
				{
					"type": "direction",
					"spot": [
						5,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "kai"
				},
				{
					"content": {
						"korean": "나도 그렇다. 무언가 놓치고 있는 느낌이야.",
						"english": "Me too. I feel like we're missing something.",
						"japanese": "私もだ。何か見落としている気がする。",
						"chinese": "我也是。总觉得我们遗漏了什么。",
						"french": "Moi aussi. J'ai l'impression qu'il nous manque quelque chose.",
						"spanish": "Yo también. Siento que nos estamos perdiendo algo.",
						"vietnamese": "Tôi cũng vậy. Cảm giác như chúng ta đang bỏ lỡ điều gì đó.",
						"thai": "ฉันก็เหมือนกัน รู้สึกเหมือนเรากำลังพลาดอะไรไป",
						"hindi": "मुझे भी। मुझे लगता है कि हम कुछ भूल रहे हैं।"
					},
					"emotion": "base",
					"speaker": "kai",
					"type": "speech"
				},
				{
					"speaker": "kai",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "로한의 태도가… 자꾸 신경 쓰여.",
						"english": "Rohan's attitude... it keeps bothering me.",
						"japanese": "ロハンの態度が…どうも気になる。",
						"chinese": "罗汉的态度…总让我心神不宁。",
						"french": "L'attitude de Rohan… ça me tracasse sans cesse.",
						"spanish": "La actitud de Rohan... me sigue preocupando.",
						"vietnamese": "Thái độ của Rohan… cứ khiến tôi bận tâm.",
						"thai": "ท่าทีของโรฮัน... มันทำให้ฉันกังวลอยู่ตลอด",
						"hindi": "रोहन का रवैया... यह मुझे परेशान करता रहता है।"
					}
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						5,
						2
					],
					"type": "direction",
					"action": "enter",
					"speaker": "kai",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "지난번, 로한이 시스템 데이터를 조작하는 걸 봤어.",
						"english": "Last time, I saw Rohan manipulating system data.",
						"japanese": "この前、ロハンがシステムデータを操作しているのを見た。",
						"chinese": "上次我看到罗汉在操纵系统数据。",
						"french": "La dernière fois, j'ai vu Rohan manipuler les données du système.",
						"spanish": "La última vez, vi a Rohan manipulando los datos del sistema.",
						"vietnamese": "Lần trước, tôi thấy Rohan thao túng dữ liệu hệ thống.",
						"thai": "ครั้งที่แล้ว ฉันเห็นโรฮันกำลังแก้ไขข้อมูลระบบ",
						"hindi": "पिछली बार, मैंने रोहन को सिस्टम डेटा में हेरफेर करते देखा था।"
					},
					"speaker": "kai",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "설마… 그럴 리가요.",
						"english": "Surely not... That can't be.",
						"japanese": "まさか…そんなはずが。",
						"chinese": "不可能吧… 怎么会这样。",
						"french": "Impossible... Ça ne se peut pas.",
						"spanish": "No puede ser... Imposible.",
						"vietnamese": "Không thể nào… Làm gì có chuyện đó.",
						"thai": "เป็นไปไม่ได้... ไม่จริงหรอก",
						"hindi": "निश्चित रूप से नहीं... ऐसा नहीं हो सकता।"
					}
				},
				{
					"content": {
						"korean": "단순한 버그가 아니었다. 아주 정교한 조작이었어.",
						"english": "It wasn't a mere bug. It was an elaborate manipulation.",
						"japanese": "ただのバグじゃない。巧妙な操作だった。",
						"chinese": "这不是简单的错误。这是一场精心策划的操控。",
						"french": "Ce n'était pas un simple bug. C'était une manipulation très sophistiquée.",
						"spanish": "No fue un simple error. Fue una manipulación muy elaborada.",
						"vietnamese": "Đây không phải lỗi đơn thuần. Đó là một sự thao túng tinh vi.",
						"thai": "นี่ไม่ใช่แค่ข้อผิดพลาด แต่มันเป็นการบงการที่ซับซ้อนมาก",
						"hindi": "यह सिर्फ एक बग नहीं था। यह एक बहुत ही परिष्कृत हेरफेर थी।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "kai"
				},
				{
					"content": {
						"korean": "모든 것이… 그를 가리키고 있다.",
						"english": "Everything... points to him.",
						"japanese": "全てが…彼を指している。",
						"chinese": "所有的一切…都指向了他。",
						"french": "Tout... le pointe du doigt.",
						"spanish": "Todo... lo señala a él.",
						"vietnamese": "Mọi thứ... đều chỉ vào hắn.",
						"thai": "ทุกอย่าง... ชี้เป้าไปที่เขา",
						"hindi": "सब कुछ... उसी की ओर इशारा कर रहा है।"
					},
					"type": "speech",
					"speaker": "kai",
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "kai",
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "로한이… 우리가 쫓던 '디지털 시대의 유령'이야.",
						"english": "Rohan is... the 'Ghost of the Digital Age' we've been chasing.",
						"japanese": "ロハンが…私たちが追っていた『デジタル時代の亡霊』だ。",
						"chinese": "罗汉就是…我们一直在追捕的‘数字时代的幽灵’。",
						"french": "Rohan est... le 'Fantôme de l'Ère Numérique' que nous traquions.",
						"spanish": "Rohan es... el 'Fantasma de la Era Digital' que perseguíamos.",
						"vietnamese": "Rohan chính là... 'Bóng ma thời đại số' mà chúng ta đang truy lùng.",
						"thai": "โรฮานคือ... 'ผีแห่งยุคดิจิทัล' ที่เราตามล่า",
						"hindi": "रोहन ही... वह 'डिजिटल युग का भूत' है जिसका हम पीछा कर रहे थे।"
					},
					"type": "speech",
					"speaker": "kai",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "말도 안 돼! 그는 우리 조력자였잖아!",
						"english": "Impossible! He was our ally!",
						"japanese": "ありえない！彼は私たちの協力者だった！",
						"chinese": "不可能！他曾是我们的协助者！",
						"french": "C'est impossible ! Il était notre allié !",
						"spanish": "¡Imposible! ¡Él era nuestro colaborador!",
						"vietnamese": "Không thể nào! Hắn là đồng minh của chúng ta mà!",
						"thai": "ไม่จริงน่า! เขาเป็นผู้ช่วยของเรานี่นา!",
						"hindi": "असंभव! वह तो हमारा सहायक था!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "그가 던진 미끼에 우린 완전히 속았어.",
						"english": "We completely fell for his bait.",
						"japanese": "彼の仕掛けた罠に、私たちは完全に騙された。",
						"chinese": "我们完全被他抛出的诱饵骗了。",
						"french": "Nous avons complètement mordu à l'hameçon qu'il a lancé.",
						"spanish": "Caímos completamente en su trampa.",
						"vietnamese": "Chúng ta đã hoàn toàn mắc bẫy của hắn.",
						"thai": "เราถูกหลอกด้วยเหยื่อล่อของเขาจนหมดสิ้น",
						"hindi": "हम उसके जाल में पूरी तरह फंस गए।"
					},
					"speaker": "kai",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "kai",
					"type": "speech",
					"content": {
						"korean": "지난번 사건… 전부 그가 꾸민 덫이었다.",
						"english": "The last incident... it was all a trap he set.",
						"japanese": "前回の事件…全て彼が仕組んだ罠だった。",
						"chinese": "上次的事件…全是他设下的陷阱。",
						"french": "La dernière affaire... c'était un piège qu'il avait tendu.",
						"spanish": "El incidente anterior... todo fue una trampa planeada por él.",
						"vietnamese": "Vụ việc lần trước... tất cả đều là cái bẫy do hắn sắp đặt.",
						"thai": "เหตุการณ์ครั้งที่แล้ว... ทั้งหมดเป็นกับดักที่เขาวางไว้",
						"hindi": "पिछली घटना... वह सब उसकी बिछाई हुई जाल थी।"
					}
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "kai",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						5,
						2
					]
				},
				{
					"emotion": "base",
					"speaker": "kai",
					"type": "speech",
					"content": {
						"korean": "로한은 이 도시의 모든 정보를 통제하고 있어.",
						"english": "Rohan controls all information in this city.",
						"japanese": "ロハンはこの都市の全ての情報を統制している。",
						"chinese": "罗汉掌控着这座城市的所有信息。",
						"french": "Rohan contrôle toutes les informations de cette ville.",
						"spanish": "Rohan controla toda la información de esta ciudad.",
						"vietnamese": "Rohan đang kiểm soát mọi thông tin của thành phố này.",
						"thai": "โรฮานควบคุมข้อมูลทั้งหมดในเมืองนี้",
						"hindi": "रोहन इस शहर की सभी जानकारी को नियंत्रित कर रहा है।"
					}
				},
				{
					"content": {
						"korean": "그럼 우리가 지금까지 한 일은 전부…",
						"english": "So everything we've done so far was...",
						"japanese": "じゃあ、私たちが今までやってきたことは全て…",
						"chinese": "那么我们至今所做的一切都是…",
						"french": "Alors tout ce que nous avons fait jusqu'à présent...",
						"spanish": "Entonces, todo lo que hemos hecho hasta ahora...",
						"vietnamese": "Vậy là mọi việc chúng ta làm từ trước đến nay đều...",
						"thai": "ถ้าอย่างนั้น ทุกสิ่งที่เราทำมาทั้งหมดก็คือ...",
						"hindi": "तो अब तक हमने जो कुछ भी किया वह सब..."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"speaker": "kai",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "그의 손 안에서 놀아난 것뿐이다.",
						"english": "...just playing into his hands.",
						"japanese": "…彼の掌の上で踊らされていたに過ぎない。",
						"chinese": "…只不过是在他手中玩弄罢了。",
						"french": "...juste des marionnettes entre ses mains.",
						"spanish": "...solo fuimos títeres en sus manos.",
						"vietnamese": "...chỉ là bị hắn điều khiển mà thôi.",
						"thai": "...เป็นแค่การถูกชักใยอยู่ในกำมือของเขา",
						"hindi": "...बस उसके हाथों की कठपुतली थे।"
					}
				},
				{
					"content": {
						"korean": "이제 진짜 사냥이 시작된다. 그를 막아야 해.",
						"english": "The real hunt begins now. We must stop him.",
						"japanese": "ここからが本当の狩りの始まりだ。彼を止めなければ。",
						"chinese": "真正的狩猎现在才开始。我们必须阻止他。",
						"french": "La vraie chasse commence maintenant. Nous devons l'arrêter.",
						"spanish": "La verdadera caza comienza ahora. Debemos detenerlo.",
						"vietnamese": "Cuộc săn thực sự bắt đầu rồi. Chúng ta phải ngăn chặn hắn.",
						"thai": "ตอนนี้การล่าที่แท้จริงจะเริ่มขึ้น เราต้องหยุดเขา",
						"hindi": "अब असली शिकार शुरू होता है। हमें उसे रोकना होगा।"
					},
					"emotion": "base",
					"speaker": "kai",
					"type": "speech"
				},
				{
					"speaker": "kai",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "우린 돌아갈 수 없다. 오직 앞으로 나아갈 뿐.",
						"english": "We can't go back. Only forward.",
						"japanese": "我々は戻れない。進むのみだ。",
						"chinese": "我们无法回头。只能前进。",
						"french": "Nous ne pouvons pas revenir en arrière. Seulement avancer.",
						"spanish": "No podemos volver. Solo avanzar.",
						"vietnamese": "Chúng ta không thể quay lại. Chỉ có thể tiến lên.",
						"thai": "เรากลับไปไม่ได้ มีแต่ต้องก้าวไปข้างหน้าเท่านั้น",
						"hindi": "हम वापस नहीं जा सकते। केवल आगे बढ़ सकते हैं।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "거대한 그림자가 탐험대를 막아섰다. 로한의 손길이 느껴졌다.",
						"english": "A colossal shadow blocked the expedition. Rohan's touch was felt.",
						"japanese": "巨大な影が探検隊を阻んだ。ローハンの手が感じられた。",
						"chinese": "巨大的身影挡住了探险队。感受到了罗汉的触碰。",
						"french": "Une ombre colossale barra la route à l'expédition. On sentait la main de Rohan.",
						"spanish": "Una sombra colosal bloqueó la expedición. Se sintió la mano de Rohan.",
						"vietnamese": "Một cái bóng khổng lồ chặn đứng đoàn thám hiểm. Cảm nhận được bàn tay của Rohan.",
						"thai": "เงาขนาดมหึมาขวางทางคณะสำรวจ สัมผัสได้ถึงเงื้อมมือของโรฮัน",
						"hindi": "एक विशालकाय छाया ने अभियान दल को रोक दिया। रोहन का स्पर्श महसूस हुआ।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "멍청한 인간들. 이 도시의 질서는 내가 정한다.",
						"english": "Foolish humans. I dictate this city's order.",
						"japanese": "愚かな人間ども。この都市の秩序は私が決める。",
						"chinese": "愚蠢的人类。这个城市的秩序由我来决定。",
						"french": "Humains stupides. C'est moi qui dicte l'ordre de cette ville.",
						"spanish": "Humanos estúpidos. Yo dicto el orden de esta ciudad.",
						"vietnamese": "Lũ người ngu ngốc. Ta định đoạt trật tự của thành phố này.",
						"thai": "มนุษย์โง่เขลา. ข้าคือกำหนดระเบียบของเมืองนี้",
						"hindi": "मूर्ख इंसान। इस शहर का आदेश मैं तय करता हूँ।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "닥쳐! 로한의 꼭두각시 주제에!",
						"english": "Shut up! You're just Rohan's puppet!",
						"japanese": "黙れ！ローハンの操り人形め！",
						"chinese": "闭嘴！你只是罗汉的傀儡！",
						"french": "Tais-toi ! Tu n'es qu'une marionnette de Rohan !",
						"spanish": "¡Cállate! ¡Solo eres un títere de Rohan!",
						"vietnamese": "Câm miệng! Ngươi chỉ là con rối của Rohan thôi!",
						"thai": "หุบปาก! แกมันก็แค่หุ่นเชิดของโรฮัน!",
						"hindi": "चुप रहो! तुम तो बस रोहन की कठपुतली हो!"
					}
				},
				{
					"action": "enter",
					"spot": [
						5,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "kai"
				},
				{
					"speaker": "kai",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "분노해라. 이 허상 뒤에 숨은 자를 끌어내야 해.",
						"english": "Unleash your fury. We must drag out whoever hides behind this illusion.",
						"japanese": "怒りを示せ。この虚像の裏に潜む者を引っ張り出すのだ。",
						"chinese": "愤怒吧。必须把躲在这幻象背后的人拖出来。",
						"french": "Laisse éclater ta fureur. Nous devons débusquer celui qui se cache derrière cette illusion.",
						"spanish": "Desata tu furia. Debemos sacar a quien se esconde detrás de esta ilusión.",
						"vietnamese": "Hãy nổi giận đi. Chúng ta phải lôi kẻ ẩn mình sau ảo ảnh này ra.",
						"thai": "จงโกรธเกรี้ยวเถิด เราต้องลากตัวผู้ที่ซ่อนอยู่หลังภาพลวงตานี้ออกมา",
						"hindi": "क्रोधित हो जाओ। हमें इस भ्रम के पीछे छिपे हुए व्यक्ति को बाहर निकालना होगा।"
					}
				},
				{
					"content": {
						"korean": "네 발버둥이… 나의 시스템을 더 견고하게 할 뿐.",
						"english": "Your struggles... only strengthen my system.",
						"japanese": "お前のあがきは…私のシステムをより強固にするだけだ。",
						"chinese": "你的挣扎……只会让我的系统更加稳固。",
						"french": "Tes efforts... ne font que renforcer mon système.",
						"spanish": "Tus esfuerzos... solo fortalecerán mi sistema.",
						"vietnamese": "Sự vùng vẫy của ngươi… chỉ khiến hệ thống của ta thêm vững chắc thôi.",
						"thai": "การดิ้นรนของเจ้า… เพียงแค่ทำให้ระบบของข้าแข็งแกร่งขึ้นเท่านั้น",
						"hindi": "तुम्हारी जद्दोजहद... केवल मेरे सिस्टम को और मजबूत करेगी।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "random_boss",
					"action": "shake"
				},
				{
					"content": {
						"korean": "로한… 네 가면을 벗겨주겠다!",
						"english": "Rohan... I'll rip off your mask!",
						"japanese": "ローハン…お前の仮面を剥がしてやる！",
						"chinese": "罗汉……我要撕下你的面具！",
						"french": "Rohan... Je vais t'arracher ton masque !",
						"spanish": "¡Rohan... te arrancaré la máscara!",
						"vietnamese": "Rohan… Ta sẽ xé toạc mặt nạ của ngươi!",
						"thai": "โรฮัน… ข้าจะกระชากหน้ากากของเจ้าออก!",
						"hindi": "रोहन... मैं तुम्हारा मुखौटा उतार दूँगा!"
					},
					"speaker": "kai",
					"emotion": "angry",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "괴물의 육신이 데이터 조각처럼 흩어졌다.",
						"english": "The monster's body scattered like data fragments.",
						"japanese": "化け物の肉体がデータのかけらのように散っていった。",
						"chinese": "怪物的肉体像数据碎片一样散落。",
						"french": "Le corps du monstre se dispersa comme des fragments de données.",
						"spanish": "El cuerpo del monstruo se dispersó como fragmentos de datos.",
						"vietnamese": "Thân xác của quái vật tan biến như những mảnh dữ liệu.",
						"thai": "ร่างของอสูรแตกกระจายเป็นชิ้นส่วนข้อมูล",
						"hindi": "राक्षस का शरीर डेटा के टुकड़ों की तरह बिखर गया।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "크크… 겨우 이 정도론… 아무것도 변하지 않아.",
						"english": "Heh heh... This alone... won't change anything.",
						"japanese": "クク…これしきでは…何も変わらない。",
						"chinese": "呵呵……仅仅这样……什么都不会改变。",
						"french": "Huhu... Juste ça... rien ne changera.",
						"spanish": "Je je... Solo con esto... nada cambiará.",
						"vietnamese": "Khà khà… Chỉ thế này thôi… sẽ không thay đổi được gì đâu.",
						"thai": "คิกคิก… แค่นี้เอง… ไม่มีอะไรเปลี่ยนแปลงหรอก",
						"hindi": "ही ही... बस इतना ही... कुछ भी नहीं बदलेगा।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "끝난 줄 알았는데… 더 깊은 함정이었어.",
						"english": "I thought it was over... but it was a deeper trap.",
						"japanese": "終わったと思ったのに…もっと深い罠だった。",
						"chinese": "我以为结束了……却是一个更深的陷阱。",
						"french": "Je pensais que c'était fini... mais c'était un piège plus profond.",
						"spanish": "Creí que había terminado... pero era una trampa más profunda.",
						"vietnamese": "Tưởng là đã kết thúc… hóa ra lại là một cái bẫy sâu hơn.",
						"thai": "คิดว่าจบแล้ว… แต่มันเป็นกับดักที่ลึกกว่า",
						"hindi": "मैंने सोचा था कि यह खत्म हो गया है... लेकिन यह एक गहरा जाल था।"
					}
				},
				{
					"type": "direction",
					"spot": [
						5,
						2
					],
					"action": "enter",
					"speaker": "kai",
					"duration_ms": 500
				},
				{
					"speaker": "kai",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "로한… 네가 진짜 목표라는 것을 이제 알았다.",
						"english": "Rohan... I now realize you are the true target.",
						"japanese": "ロハン… お前が真の標的だと今、分かった。",
						"chinese": "罗汉… 我现在才知道你才是真正的目标。",
						"french": "Rohan... Je réalise maintenant que tu es la véritable cible.",
						"spanish": "Rohan... Ahora sé que eres el verdadero objetivo.",
						"vietnamese": "Rohan... Giờ ta mới nhận ra ngươi là mục tiêu thực sự.",
						"thai": "โรฮาน... ตอนนี้ข้ารู้แล้วว่าเจ้าคือเป้าหมายที่แท้จริง",
						"hindi": "रोहन... मुझे अब पता चला कि तुम ही असली लक्ष्य हो।"
					}
				},
				{
					"content": {
						"korean": "도시의 심장부에 드리운 그림자. 사냥은 이제 막 시작되었다.",
						"english": "A shadow cast over the city's heart. The hunt has just begun.",
						"japanese": "街の中心部に差し込む影。狩りは今始まったばかりだ。",
						"chinese": "阴影笼罩着城市的心脏。狩猎才刚刚开始。",
						"french": "Une ombre plane sur le cœur de la ville. La chasse ne fait que commencer.",
						"spanish": "Una sombra se cierne sobre el corazón de la ciudad. La caza acaba de empezar.",
						"vietnamese": "Một bóng đen bao trùm trái tim thành phố. Cuộc săn chỉ vừa mới bắt đầu.",
						"thai": "เงามืดปกคลุมใจกลางเมือง การล่าเพิ่งเริ่มต้นขึ้น",
						"hindi": "शहर के हृदय पर एक छाया। शिकार अभी शुरू हुआ है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "시스템의 오류처럼, 탐험대는 힘없이 쓰러졌다.",
						"english": "Like a system error, the expedition team fell powerless.",
						"japanese": "システムエラーのように、探検隊は無力に倒れた。",
						"chinese": "如同系统错误，探险队无力地倒下了。",
						"french": "Comme une erreur système, l'équipe d'expédition s'est effondrée, impuissante.",
						"spanish": "Como un error del sistema, el equipo de expedición cayó sin fuerzas.",
						"vietnamese": "Như một lỗi hệ thống, đoàn thám hiểm gục ngã không chút sức lực.",
						"thai": "ราวกับข้อผิดพลาดของระบบ ทีมสำรวจล้มลงอย่างหมดหนทาง",
						"hindi": "एक सिस्टम त्रुटि की तरह, अभियान दल शक्तिहीन होकर गिर गया।"
					}
				},
				{
					"content": {
						"korean": "내 시스템은… 완벽하다.",
						"english": "My system is... perfect.",
						"japanese": "私のシステムは…完璧だ。",
						"chinese": "我的系统… 是完美的。",
						"french": "Mon système est... parfait.",
						"spanish": "Mi sistema es... perfecto.",
						"vietnamese": "Hệ thống của ta... hoàn hảo.",
						"thai": "ระบบของข้า... สมบูรณ์แบบ",
						"hindi": "मेरा सिस्टम... परिपूर्ण है।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "젠장… 아직 끝나지 않았어.",
						"english": "Damn it... It's not over yet.",
						"japanese": "ちくしょう… まだ終わってない。",
						"chinese": "该死… 还没结束。",
						"french": "Foutu... Ce n'est pas encore fini.",
						"spanish": "Maldita sea... Esto no ha terminado aún.",
						"vietnamese": "Chết tiệt... Vẫn chưa kết thúc đâu.",
						"thai": "ให้ตายสิ... มันยังไม่จบ",
						"hindi": "धिक्कार है... यह अभी खत्म नहीं हुआ है।"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						5,
						2
					],
					"speaker": "kai",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "다시 일어서야 한다. 로한을 막아야 해.",
						"english": "We must rise again. Rohan must be stopped.",
						"japanese": "再び立ち上がらなければならない。ロハンを止めなければ。",
						"chinese": "必须再次站起来。阻止罗汉。",
						"french": "Il faut se relever. Rohan doit être arrêté.",
						"spanish": "Debemos levantarnos de nuevo. Hay que detener a Rohan.",
						"vietnamese": "Phải đứng dậy lần nữa. Phải ngăn Rohan lại.",
						"thai": "ต้องลุกขึ้นอีกครั้ง ต้องหยุดโรฮาน",
						"hindi": "हमें फिर से उठना होगा। रोहन को रोकना होगा।"
					},
					"speaker": "kai",
					"emotion": "angry",
					"type": "speech"
				}
			]
		}
	]
} as const;
