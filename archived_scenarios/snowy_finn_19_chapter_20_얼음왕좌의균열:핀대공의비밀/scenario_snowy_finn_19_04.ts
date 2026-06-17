export const scenario_snowy_finn_19_04 = {
	"scenario_id": "snowy_finn_19_04",
	"order": 4,
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
		"finn": {
			"name": {
				"korean": "핀",
				"english": "Finn",
				"japanese": "フィン",
				"chinese": "芬恩",
				"french": "Finn",
				"spanish": "Finn",
				"vietnamese": "Finn",
				"thai": "ฟินน์",
				"hindi": "फिन"
			},
			"description": ""
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"핀 대공의 허세가 무너졌다.",
			"그의 진짜 모습이 드러나는 순간, 왕의 권위는 눈밭에 구겨졌다.",
			"피할 수 없는 대결. 얼음 왕국의 깊은 비밀이 서서히 풀린다."
		],
		"english": [
			"Prince Finn's pretense shattered.",
			"The moment his true self was revealed, the king's authority crumbled in the snow.",
			"An unavoidable confrontation. The deep secrets of the Ice Kingdom slowly unravel."
		],
		"japanese": [
			"フィン大公の虚勢が崩れた。",
			"彼が本性を現した瞬間、王の権威は雪の中に潰えた。",
			"避けられない対決。氷の王国の深い秘密がゆっくりと解き明かされる。"
		],
		"chinese": [
			"芬恩大公的虚张声势崩溃了。",
			"他真面目暴露的瞬间，国王的权威在雪地上被揉碎。",
			"无法避免的对决。冰之王国深处的秘密正逐渐揭开。"
		],
		"french": [
			"La prétention du Prince Finn s'est effondrée.",
			"Au moment où sa vraie nature fut révélée, l'autorité du roi s'écroula dans la neige.",
			"Une confrontation inévitable. Les profonds secrets du Royaume de Glace se dévoilent lentement."
		],
		"spanish": [
			"La pretensión del Príncipe Finn se desmoronó.",
			"En el momento en que su verdadera forma fue revelada, la autoridad del rey se hizo añicos en la nieve.",
			"Un enfrentamiento inevitable. Los profundos secretos del Reino de Hielo se desvelan lentamente."
		],
		"vietnamese": [
			"Sự giả dối của Đại Công tước Finn sụp đổ.",
			"Khoảnh khắc chân tướng hắn lộ rõ, quyền uy của nhà vua bị chà đạp trong tuyết.",
			"Cuộc đối đầu không thể tránh khỏi. Bí mật sâu kín của Vương quốc Băng giá dần được hé lộ."
		],
		"thai": [
			"ความโอ้อวดของเจ้าชายฟินน์พังทลายลง",
			"ในขณะที่ตัวตนที่แท้จริงของเขาเปิดเผย อำนาจของกษัตริย์ก็พังทลายลงในหิมะ",
			"การเผชิญหน้าที่หลีกเลี่ยงไม่ได้ ความลับอันลึกซึ้งของอาณาจักรน้ำแข็งค่อยๆ คลี่คลาย"
		],
		"hindi": [
			"प्रिंस फिन का दिखावा टूट गया।",
			"जैसे ही उसका असली रूप सामने आया, राजा का अधिकार बर्फ में कुचल गया।",
			"एक अपरिहार्य टकराव। बर्फ़ साम्राज्य के गहरे रहस्य धीरे-धीरे खुल रहे हैं।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "핀 대공의 허세가 무너졌다. 그의 위엄은 눈보라 속으로 흩어졌다.",
						"english": "Prince Finn's pretense shattered. His dignity scattered into the blizzard.",
						"japanese": "フィン大公の虚勢が崩れた。彼の威厳は吹雪の中に散った。",
						"chinese": "芬恩大公的虚张声势崩溃了。他的威严在暴风雪中消散。",
						"french": "La prétention du Prince Finn s'est effondrée. Sa dignité s'est dispersée dans le blizzard.",
						"spanish": "La pretensión del Príncipe Finn se desmoronó. Su dignidad se dispersó en la tormenta de nieve.",
						"vietnamese": "Sự giả dối của Đại Công tước Finn sụp đổ. Uy nghiêm của hắn tan biến trong bão tuyết.",
						"thai": "ความโอ้อวดของเจ้าชายฟินน์พังทลายลง ศักดิ์ศรีของเขากระจัดกระจายไปในพายุหิมะ",
						"hindi": "प्रिंस फिन का दिखावा टूट गया। उसकी गरिमा बर्फीले तूफान में बिखर गई।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"action": "enter",
					"speaker": "inka",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "inka",
					"emotion": "sad",
					"content": {
						"korean": "...대공님. 괜찮으신가요?",
						"english": "...Your Highness. Are you alright?",
						"japanese": "「...大公様。大丈夫ですか？」",
						"chinese": "“...大公殿下。您没事吧？”",
						"french": "...Votre Altesse. Allez-vous bien ?",
						"spanish": "...Su Alteza. ¿Está bien?",
						"vietnamese": "...Thưa Đại Công tước. Ngài không sao chứ?",
						"thai": "...ฝ่าบาท. ท่านไม่เป็นไรใช่ไหม?",
						"hindi": "...महाराज। क्या आप ठीक हैं?"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "핫팩이나 찾는 왕이라니. 웃기는군.",
						"english": "A king looking for a hot pack? Ridiculous.",
						"japanese": "ホットパックを探す王とはな。笑わせる。",
						"chinese": "竟然是一个找暖手包的国王。真可笑。",
						"french": "Un roi qui cherche une chaufferette ? Ridicule.",
						"spanish": "¿Un rey buscando un calentador? Ridículo.",
						"vietnamese": "Một vị vua đi tìm túi sưởi à. Thật nực cười.",
						"thai": "กษัตริย์ที่หาฮอตแพ็คช่างน่าขัน",
						"hindi": "हॉट पैक ढूंढने वाला राजा। मज़ाक है।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"speaker": "finn",
					"type": "speech",
					"content": {
						"korean": "무엄하다! 감히 왕을 조롱하는가!",
						"english": "Insolence! How dare you mock the king!",
						"japanese": "無礼な！よくも王を嘲弄するな！",
						"chinese": "放肆！竟敢嘲弄国王！",
						"french": "Insolence ! Comment osez-vous vous moquer du roi !",
						"spanish": "¡Insolencia! ¡Cómo osas burlarte del rey!",
						"vietnamese": "Vô lễ! Dám cả gan chế nhạo nhà vua sao!",
						"thai": "บังอาจ! กล้าดียังไงมาเยาะเย้ยกษัตริย์!",
						"hindi": "धृष्टता! तुम्हारी हिम्मत कैसे हुई राजा का उपहास करने की!"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "대공님은 그저... 따뜻한 것을 그리워하실 뿐이에요.",
						"english": "His Highness merely... misses warmth.",
						"japanese": "大公様はただ...温かいものを恋しがっているだけなのです。",
						"chinese": "大公殿下只是...怀念温暖罢了。",
						"french": "Votre Altesse... ne fait que regretter la chaleur.",
						"spanish": "Su Alteza simplemente... anhela el calor.",
						"vietnamese": "Đại Công tước chỉ là... đang khao khát sự ấm áp thôi.",
						"thai": "ฝ่าบาทแค่... โหยหาความอบอุ่นเท่านั้นเอง",
						"hindi": "महाराज बस... गर्मी को तरस रहे हैं।"
					},
					"emotion": "sad",
					"speaker": "inka"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "inka",
					"action": "enter"
				},
				{
					"content": {
						"korean": "흥! 너희가 감히 왕의 품위를 모욕했으니...",
						"english": "Hmph! Since you dared to insult the king's dignity...",
						"japanese": "ふん！貴様らが王の品位を侮辱したからには...",
						"chinese": "哼！既然你们胆敢侮辱国王的尊严...",
						"french": "Hmph ! Puisque vous avez osé insulter la dignité du roi...",
						"spanish": "¡Hmph! Ya que osasteis insultar la dignidad del rey...",
						"vietnamese": "Hừm! Các ngươi dám sỉ nhục phẩm giá của nhà vua, vậy thì...",
						"thai": "ฮึ่ม! ในเมื่อพวกเจ้ากล้าดูหมิ่นศักดิ์ศรีของกษัตริย์...",
						"hindi": "ह्म्फ! चूंकि तुमने राजा की गरिमा का अपमान करने की हिम्मत की..."
					},
					"type": "speech",
					"speaker": "finn",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "왕의 권위로 명한다! 나와 '눈싸움 대결'을 펼쳐라!",
						"english": "By royal authority, I command! Engage me in a 'snowball fight duel'!",
						"japanese": "王の権威で命じる！私と「雪合戦対決」を繰り広げよ！",
						"chinese": "以国王之权，我命令！与我进行一场“打雪仗对决”！",
						"french": "Par l'autorité royale, j'ordonne ! Engagez-vous avec moi dans un \"duel de boules de neige\" !",
						"spanish": "¡Por autoridad real, ordeno! ¡Enfrentaos a mí en un 'duelo de bolas de nieve'!",
						"vietnamese": "Với uy quyền của nhà vua, ta ra lệnh! Hãy giao chiến với ta trong 'cuộc đấu ném tuyết'!",
						"thai": "ด้วยอำนาจของกษัตริย์ ข้าขอสั่ง! จงมาดวล 'ต่อสู้ปาหิมะ' กับข้า!",
						"hindi": "शाही अधिकार से, मैं आज्ञा देता हूँ! मेरे साथ 'बर्फ़बारी का द्वंद्व' करो!"
					},
					"emotion": "angry",
					"speaker": "finn"
				},
				{
					"content": {
						"korean": "눈싸움? 장난해?",
						"english": "Snow fight? Are you kidding?",
						"japanese": "雪合戦？冗談でしょ？",
						"chinese": "打雪仗？开玩笑吧？",
						"french": "Bataille de boules de neige ? Vous plaisantez ?",
						"spanish": "¿Guerra de bolas de nieve? ¿Es una broma?",
						"vietnamese": "Đánh bóng tuyết? Đùa à?",
						"thai": "สู้หิมะ? ล้อเล่นหรือเปล่า?",
						"hindi": "बर्फ़बारी? मज़ाक कर रहे हो?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "...대공님! 이건 너무 위험해요!",
						"english": "...Your Grace! This is too dangerous!",
						"japanese": "...大公様！これは危険すぎます！",
						"chinese": "...大公殿下！这太危险了！",
						"french": "...Votre Altesse ! C'est trop dangereux !",
						"spanish": "¡...Gran Duque! ¡Esto es demasiado peligroso!",
						"vietnamese": "...Thưa Đại Công! Cái này quá nguy hiểm!",
						"thai": "...ท่านแกรนด์ดยุก! นี่มันอันตรายเกินไป!",
						"hindi": "...महाराज! यह बहुत ख़तरनाक है!"
					},
					"emotion": "sad",
					"speaker": "inka"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "inka",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "눈싸움으로 뭘 어쩌겠다는 거야?",
						"english": "What do you intend to do with a snow fight?",
						"japanese": "雪合戦で何をどうするつもりだ？",
						"chinese": "打雪仗能干什么？",
						"french": "Qu'est-ce que vous comptez faire avec une bataille de boules de neige ?",
						"spanish": "¿Qué pretendes lograr con una guerra de bolas de nieve?",
						"vietnamese": "Đánh bóng tuyết thì làm được gì?",
						"thai": "จะทำอะไรได้กับการสู้หิมะ?",
						"hindi": "बर्फ़बारी से क्या हासिल कर लोगे?"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "finn",
					"type": "speech",
					"content": {
						"korean": "이 왕의 위엄을 되찾을 것이다! 너희는 패배할 뿐.",
						"english": "I shall reclaim the dignity of this king! You shall only face defeat.",
						"japanese": "この王の威厳を取り戻す！お前たちは敗北するだけだ。",
						"chinese": "我将夺回国王的尊严！你们注定失败。",
						"french": "Je retrouverai la dignité de ce roi ! Vous ne ferez que connaître la défaite.",
						"spanish": "¡Reclamaré la dignidad de este rey! Vosotros solo conoceréis la derrota.",
						"vietnamese": "Ta sẽ lấy lại uy nghiêm của vị vua này! Các ngươi chỉ có thua cuộc thôi.",
						"thai": "ข้าจะทวงคืนศักดิ์ศรีของกษัตริย์องค์นี้! พวกเจ้ามีแต่จะพ่ายแพ้เท่านั้น",
						"hindi": "मैं इस राजा की गरिमा वापस पाऊँगा! तुम सब बस हारोगे।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "그게 아니에요... 대공님은 단지...",
						"english": "That's not it... His Grace is just...",
						"japanese": "そうじゃないんです... 大公様はただ...",
						"chinese": "不是那样的... 大公殿下只是...",
						"french": "Ce n'est pas ça... Votre Altesse est juste...",
						"spanish": "No es eso... El Gran Duque solo...",
						"vietnamese": "Không phải vậy đâu... Đại Công chỉ là...",
						"thai": "ไม่ใช่หรอกค่ะ... ท่านแกรนด์ดยุกแค่...",
						"hindi": "वह बात नहीं है... महाराज बस..."
					},
					"emotion": "sad",
					"speaker": "inka"
				},
				{
					"content": {
						"korean": "단지 뭘?",
						"english": "Just what?",
						"japanese": "ただ何だ？",
						"chinese": "只是什么？",
						"french": "Juste quoi ?",
						"spanish": "¿Solo qué?",
						"vietnamese": "Chỉ là gì?",
						"thai": "แค่ไหน?",
						"hindi": "बस क्या?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "추위에 익숙지 않을 뿐이에요. 남쪽 나라에서 오셨으니까...",
						"english": "He's just not used to the cold. Since he came from a southern country...",
						"japanese": "ただ寒さに慣れていないだけです。南の国からいらっしゃいましたから...",
						"chinese": "他只是不习惯寒冷。因为他来自南方国家...",
						"french": "Il n'est juste pas habitué au froid. Puisqu'il vient d'un pays du sud...",
						"spanish": "Solo no está acostumbrado al frío. Como viene de un país del sur...",
						"vietnamese": "Ngài ấy chỉ là không quen lạnh thôi. Vì ngài ấy đến từ phương Nam...",
						"thai": "ท่านแค่ไม่คุ้นชินกับความหนาวเย็น เพราะท่านมาจากประเทศทางใต้...",
						"hindi": "उन्हें बस ठंड की आदत नहीं है। क्योंकि वह दक्षिणी देश से आए हैं..."
					},
					"type": "speech",
					"speaker": "inka",
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "inka"
				},
				{
					"type": "speech",
					"content": {
						"korean": "왕의 권위라더니. 겨우 눈싸움?",
						"english": "Claiming royal authority, yet just a snow fight?",
						"japanese": "王の権威だとか言って。たかが雪合戦か？",
						"chinese": "口口声声说国王的权威，结果只是打雪仗？",
						"french": "L'autorité du roi, pour une simple bataille de boules de neige ?",
						"spanish": "¿La autoridad del rey? ¿Solo una guerra de bolas de nieve?",
						"vietnamese": "Uy quyền của nhà vua ư. Chỉ là đánh bóng tuyết thôi à?",
						"thai": "บอกว่าอำนาจของกษัตริย์งั้นหรือ? แค่สู้หิมะเนี่ยนะ?",
						"hindi": "राजा का अधिकार बताकर, बस एक बर्फ़बारी?"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "뭔가 숨기는 게 분명해.",
						"english": "He's definitely hiding something.",
						"japanese": "何か隠しているに違いない。",
						"chinese": "他肯定隐藏了什么。",
						"french": "Il cache clairement quelque chose.",
						"spanish": "Definitivamente esconde algo.",
						"vietnamese": "Chắc chắn là đang giấu diếm gì đó.",
						"thai": "ต้องมีอะไรซ่อนอยู่แน่ๆ",
						"hindi": "वह कुछ छिपा रहा है, यह पक्का है।"
					}
				},
				{
					"speaker": "inka",
					"emotion": "sad",
					"content": {
						"korean": "대공님은 정말 약하시지만... 왕의 자리는 지켜야 하니까요.",
						"english": "His Grace is truly weak... but he must protect the king's position.",
						"japanese": "大公様は本当に弱いですが... 王の座は守らなければなりませんから。",
						"chinese": "大公殿下确实很弱... 但他必须守护国王的地位。",
						"french": "Votre Altesse est vraiment faible... mais il doit protéger la position du roi.",
						"spanish": "El Gran Duque es realmente débil... pero debe proteger el puesto del rey.",
						"vietnamese": "Đại Công tuy yếu thật... nhưng phải bảo vệ ngai vàng của vua.",
						"thai": "ท่านแกรนด์ดยุกอ่อนแอจริงๆ ค่ะ... แต่ก็ต้องรักษาตำแหน่งของกษัตริย์ไว้",
						"hindi": "महाराज वाकई कमज़ोर हैं... लेकिन उन्हें राजा की पदवी की रक्षा करनी होगी।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "그럼에도 피할 수 없겠군. 저 자의 눈에는 분노만 가득해.",
						"english": "No avoiding it then. His eyes burn with rage.",
						"japanese": "それでも避けられぬか。あの者の目には怒りだけが満ちている。",
						"chinese": "看来是避不开了。那家伙眼中尽是怒火。",
						"french": "Inévitable alors. Ses yeux ne brillent que de fureur.",
						"spanish": "Inevitável, entonces. Sus ojos solo irradian furia.",
						"vietnamese": "Không thể tránh được rồi. Đôi mắt hắn tràn ngập giận dữ.",
						"thai": "คงเลี่ยงไม่ได้แล้ว ดวงตาของมันเต็มไปด้วยความโกรธแค้น",
						"hindi": "फिर भी, यह अपरिहार्य है। उसकी आँखों में केवल क्रोध भरा है।"
					}
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "정체 모를 괴물의 공격에 탐험대가 쓰러졌다.",
						"english": "The expedition team fell to the attack of an unknown monster.",
						"japanese": "正体不明の怪物の攻撃により、探検隊は倒れた。",
						"chinese": "探险队在不明怪物的攻击下倒下了。",
						"french": "L'équipe d'expédition a succombé à l'attaque d'un monstre inconnu.",
						"spanish": "El equipo de expedición cayó ante el ataque de un monstruo desconocido.",
						"vietnamese": "Đội thám hiểm đã gục ngã trước sự tấn công của một quái vật không rõ danh tính.",
						"thai": "คณะสำรวจพ่ายแพ้ต่อการโจมตีของสัตว์ประหลาดที่ไม่รู้จัก",
						"hindi": "अज्ञात राक्षस के हमले से अन्वेषण दल हार गया।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "inka",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "inka",
					"emotion": "sad",
					"content": {
						"korean": "대공님! 더는 무리에요!",
						"english": "Your Grace! We can't go on!",
						"japanese": "大公様！もうこれ以上は無理です！",
						"chinese": "大公大人！不能再这样下去了！",
						"french": "Votre Grâce ! C'est trop !",
						"spanish": "¡Su Gracia! ¡No podemos más!",
						"vietnamese": "Thưa Đại Công tước! Không thể tiếp tục được nữa!",
						"thai": "ท่านแกรนด์ดยุก! ไม่ไหวแล้ว!",
						"hindi": "योर ग्रेस! अब और नहीं!"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "이런 미약한 자들이 감히 왕에게 대적하려 했나.",
						"english": "How dare such weaklings try to defy a king.",
						"japanese": "このような微力な者たちが、よくも王に逆らおうとしたな。",
						"chinese": "这些卑微的家伙竟敢对抗国王。",
						"french": "Comment ces faibles osent-ils défier un roi ?",
						"spanish": "¿Cómo se atreven estos insignificantes a desafiar a un rey?",
						"vietnamese": "Những kẻ yếu ớt này dám đối đầu với vua sao.",
						"thai": "พวกอ่อนแอเช่นนี้กล้าดีอย่างไรมาท้าทายกษัตริย์",
						"hindi": "इन कमज़ोरों की हिम्मत कैसे हुई एक राजा का विरोध करने की।"
					},
					"type": "speech",
					"speaker": "finn",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "젠장... 아직 끝나지 않았어.",
						"english": "Damn it... it's not over yet.",
						"japanese": "くそ…まだ終わってない。",
						"chinese": "该死……还没完呢。",
						"french": "Maudit... Ce n'est pas encore fini.",
						"spanish": "Maldita sea... aún no ha terminado.",
						"vietnamese": "Chết tiệt... vẫn chưa kết thúc đâu.",
						"thai": "บัดซบ... ยังไม่จบแค่นี้หรอก",
						"hindi": "धिक्कार है... अभी खत्म नहीं हुआ है।"
					},
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "정체 모를 괴물이 눈밭에 쓰러졌다.",
						"english": "The unknown monster fell in the snowfield.",
						"japanese": "正体不明の怪物が雪原に倒れた。",
						"chinese": "身份不明的怪物倒在了雪地里。",
						"french": "Le monstre inconnu s'effondra dans le champ de neige.",
						"spanish": "El monstruo desconocido cayó en el campo de nieve.",
						"vietnamese": "Con quái vật không rõ danh tính đã ngã xuống cánh đồng tuyết.",
						"thai": "สัตว์ประหลาดนิรนามล้มลงในทุ่งหิมะ",
						"hindi": "अज्ञात राक्षस बर्फीली मैदान में गिर गया।"
					},
					"type": "speech"
				},
				{
					"speaker": "inka",
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "대공님! 괜찮으세요? 다행이다...",
						"english": "Grand Duke! Are you alright? Thank goodness...",
						"japanese": "大公様！大丈夫ですか？よかった...",
						"chinese": "大公大人！您没事吧？太好了...",
						"french": "Grand-Duc ! Vous allez bien ? Ouf...",
						"spanish": "¡Gran Duque! ¿Está bien? Menos mal...",
						"vietnamese": "Đại Công tước! Ngài có sao không? May quá...",
						"thai": "ท่านดยุกใหญ่! ท่านไม่เป็นไรใช่ไหม? โล่งอกไปที...",
						"hindi": "महामहिम! क्या आप ठीक हैं? शुक्र है..."
					},
					"type": "speech",
					"speaker": "inka",
					"emotion": "happy"
				},
				{
					"emotion": "base",
					"speaker": "finn",
					"type": "speech",
					"content": {
						"korean": "흥. 겨우 이 정도에 무너질 왕이 아니다.",
						"english": "Hmph. A king doesn't fall for so little.",
						"japanese": "フン。この程度で倒れる王ではない。",
						"chinese": "哼。区区这点小事，还不足以让王者倒下。",
						"french": "Hum. Un roi ne tombe pas pour si peu.",
						"spanish": "Hum. Un rey no cae por tan poco.",
						"vietnamese": "Hừ. Một vị vua sẽ không gục ngã vì chút chuyện nhỏ này.",
						"thai": "หึ แค่นี้เองจะมาล้มกษัตริย์ไม่ได้หรอก",
						"hindi": "हूँ। मैं इतना कमज़ोर राजा नहीं हूँ जो इतनी आसानी से हार मान ले।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "아직도 허세 부리는군.",
						"english": "Still bluffing, I see.",
						"japanese": "まだ虚勢を張っているな。",
						"chinese": "还在虚张声势啊。",
						"french": "Toujours en train de bluffer, je vois.",
						"spanish": "Aún fanfarronea, veo.",
						"vietnamese": "Vẫn còn ra vẻ ta đây nhỉ.",
						"thai": "ยังคงโอ้อวดอยู่สินะ",
						"hindi": "अभी भी दिखावा कर रहा है।"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "그렇지 않아요... 대공님은 정말 남쪽 나라가 그리우신 걸 거예요.",
						"english": "No... the Grand Duke must truly miss his southern home.",
						"japanese": "いいえ…大公は本当に南の国が恋しいのでしょう。",
						"chinese": "不……大公一定是很想念南方的故乡吧。",
						"french": "Non... Le Grand Duc doit vraiment regretter son pays du sud.",
						"spanish": "No... El Gran Duque debe extrañar mucho su tierra natal del sur.",
						"vietnamese": "Không... Đại Công tước chắc hẳn rất nhớ quê hương phương Nam.",
						"thai": "ไม่หรอก... ท่านแกรนด์ดยุกคงจะคิดถึงบ้านทางใต้จริงๆ",
						"hindi": "नहीं... ग्रैंड ड्यूक को सचमुच अपने दक्षिणी देश की याद आ रही होगी।"
					},
					"type": "speech",
					"speaker": "inka",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "핀 대공의 허세 뒤에 숨겨진 진실이 더욱 궁금해졌다.",
						"english": "I grew even more curious about the truth hidden behind Grand Duke Finn's bravado.",
						"japanese": "フィン大公の虚勢の裏に隠された真実がますます気になった。",
						"chinese": "我对芬恩大公虚张声势背后隐藏的真相更加好奇了。",
						"french": "Je suis devenu encore plus curieux de la vérité cachée derrière la bravade du Grand Duc Finn.",
						"spanish": "Sentí aún más curiosidad por la verdad oculta tras la bravuconería del Gran Duque Finn.",
						"vietnamese": "Tôi càng tò mò hơn về sự thật ẩn giấu sau vẻ ngoài kiêu ngạo của Đại Công tước Finn.",
						"thai": "ฉันยิ่งอยากรู้ความจริงที่ซ่อนอยู่เบื้องหลังความโอ้อวดของแกรนด์ดยุกฟินน์มากขึ้นไปอีก",
						"hindi": "मुझे ग्रैंड ड्यूक फिन के दिखावे के पीछे छिपी सच्चाई जानने की और भी उत्सुकता हुई।"
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "왕의 명이다. 이 눈밭에서 너희의 오만을 꺾어주마.",
						"english": "By the King's command! I'll break your arrogance in this snowfield.",
						"japanese": "王の命だ。この雪原で貴様らの傲慢を打ち砕いてやろう。",
						"chinese": "这是王的命令。在这雪地里，我将挫败你们的傲慢。",
						"french": "Ordre du Roi ! Je briserai votre arrogance dans ce champ de neige.",
						"spanish": "¡Por orden del Rey! Romperé vuestra arrogancia en este campo de nieve.",
						"vietnamese": "Đây là mệnh lệnh của Đức Vua. Ta sẽ nghiền nát sự ngạo mạn của các ngươi trên cánh đồng tuyết này.",
						"thai": "เป็นคำสั่งของราชา! ข้าจะบดขยี้ความหยิ่งผยองของพวกเจ้าในทุ่งหิมะนี้",
						"hindi": "यह राजा का आदेश है। मैं तुम्हारी हेकड़ी इस बर्फीली मैदान में तोडूँगा।"
					},
					"type": "speech",
					"speaker": "finn",
					"emotion": "angry"
				},
				{
					"spot": [
						2,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "inka",
					"action": "enter"
				},
				{
					"emotion": "sad",
					"speaker": "inka",
					"type": "speech",
					"content": {
						"korean": "대공님, 정말 괜찮으시겠어요? 저 괴물은...",
						"english": "Grand Duke, are you sure? That monster is...",
						"japanese": "大公様、本当によろしいのですか？あの怪物は...",
						"chinese": "大公大人，您真的没问题吗？那个怪物...",
						"french": "Grand-Duc, êtes-vous vraiment sûr ? Ce monstre est...",
						"spanish": "Gran Duque, ¿está seguro? Ese monstruo es...",
						"vietnamese": "Đại Công tước, ngài thực sự ổn chứ? Con quái vật đó...",
						"thai": "ท่านดยุกใหญ่ ท่านจะโอเคแน่หรือ? สัตว์ประหลาดตัวนั้น...",
						"hindi": "महामहिम, क्या आप सच में ठीक होंगे? वह राक्षस तो..."
					}
				},
				{
					"emotion": "angry",
					"speaker": "finn",
					"type": "speech",
					"content": {
						"korean": "입 다물어라, 인카! 저것은 그저 나의 명령을 따를 뿐이다.",
						"english": "Silence, Inca! It merely obeys my commands.",
						"japanese": "黙れ、インカ！あれはただ私の命令に従うだけだ。",
						"chinese": "闭嘴，因卡！那不过是听我命令的。",
						"french": "Silence, Inca ! Il ne fait qu'obéir à mes ordres.",
						"spanish": "¡Silencio, Inca! Solo obedece mis órdenes.",
						"vietnamese": "Im đi, Inca! Nó chỉ tuân theo lệnh của ta mà thôi.",
						"thai": "หุบปากซะ อินคา! มันแค่ทำตามคำสั่งของข้าเท่านั้น",
						"hindi": "चुप रहो, इनका! वह तो बस मेरे आदेशों का पालन करता है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 나타났다. 정체 모를 자가 대결의 한복판에 섰다.",
						"english": "A colossal shadow appeared. An unknown figure stood in the heart of the duel.",
						"japanese": "巨大な影が現れた。正体不明の者が対決の真ん中に立った。",
						"chinese": "一个巨大的身影出现了。一个身份不明的人站在了决斗的中央。",
						"french": "Une ombre colossale apparut. Une silhouette inconnue se tenait au cœur du duel.",
						"spanish": "Una sombra colosal apareció. Una figura desconocida se irguió en el centro del duelo.",
						"vietnamese": "Một bóng đen khổng lồ xuất hiện. Một kẻ không rõ danh tính đã đứng giữa trận đấu.",
						"thai": "เงาขนาดยักษ์ปรากฏขึ้น บุคคลนิรนามยืนอยู่ใจกลางการต่อสู้",
						"hindi": "एक विशाल छाया प्रकट हुई। एक अज्ञात आकृति द्वंद्व के केंद्र में खड़ी थी।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "크아앙!",
						"english": "ROOAAR!",
						"japanese": "グアアアア！",
						"chinese": "吼！",
						"french": "GRAAAH !",
						"spanish": "¡GRRRR!",
						"vietnamese": "Gầm!",
						"thai": "คราก!",
						"hindi": "गरजना!"
					}
				},
				{
					"duration_ms": 400,
					"type": "direction",
					"direction": "up",
					"speaker": "finn",
					"action": "exit"
				}
			]
		}
	]
} as const;
