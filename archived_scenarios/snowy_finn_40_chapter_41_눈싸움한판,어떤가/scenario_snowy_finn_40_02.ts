export const scenario_snowy_finn_40_02 = {
	"scenario_id": "snowy_finn_40_02",
	"order": 2,
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
	"prologue": {
		"korean": [
			"왕의 연무장. 칼날 대신 눈덩이가 쌓인 곳.",
			"무자비한 결투를 명하는 왕. 그러나 그의 짧은 날개는 들썩였다.",
			"에이라, 잊힌 놀이의 기록을 펼치다."
		],
		"english": [
			"King's training ground. Where snowballs, not blades, are piled.",
			"The King commands a merciless duel. Yet, his short wings fluttered.",
			"Eira unfolds the records of a forgotten game."
		],
		"japanese": [
			"王の演武場。刀の代わりに雪玉が積もる場所。",
			"冷酷な決闘を命じる王。しかし、彼の短い翼はひらめいた。",
			"エイラ、忘れられた遊びの記録を広げる。"
		],
		"chinese": [
			"王的演武场。这里堆积的不是刀刃，而是雪球。",
			"国王下令进行无情的决斗。然而，他短小的翅膀却抖动着。",
			"艾拉，展开了被遗忘的游戏记录。"
		],
		"french": [
			"Champ d'entraînement du Roi. Un lieu où s'accumulent des boules de neige, non des lames.",
			"Le Roi ordonne un duel impitoyable. Pourtant, ses courtes ailes frémissaient.",
			"Eira déploie les annales d'un jeu oublié."
		],
		"spanish": [
			"Campo de entrenamiento del Rey. Un lugar donde se amontonan bolas de nieve, no espadas.",
			"El Rey ordena un duelo despiadado. Sin embargo, sus cortas alas revoloteaban.",
			"Eira despliega los registros de un juego olvidado."
		],
		"vietnamese": [
			"Sân tập của Vua. Nơi chất đống toàn tuyết, không phải lưỡi kiếm.",
			"Vua ra lệnh quyết đấu không khoan nhượng. Nhưng đôi cánh ngắn của ngài lại rung rung.",
			"Eira mở ra những ghi chép về trò chơi bị lãng quên."
		],
		"thai": [
			"ลานประลองของราชา สถานที่ที่เต็มไปด้วยก้อนหิมะ ไม่ใช่คมดาบ",
			"ราชาสั่งให้ดวลอย่างไร้ความปรานี แต่ปีกสั้นของเขากลับกระพือ",
			"เอร่า เปิดบันทึกเกมที่ถูกลืม"
		],
		"hindi": [
			"राजा का प्रशिक्षण मैदान। जहाँ तलवारों की बजाय बर्फ के गोले जमे हैं।",
			"राजा ने बेरहम द्वंद्वयुद्ध का आदेश दिया। फिर भी, उसके छोटे पंख फड़फड़ा रहे थे।",
			"एरा ने एक भूले हुए खेल के अभिलेख खोले।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "왕의 연무장. 눈보라가 휘몰아쳤다.",
						"english": "The King's training ground. A blizzard raged.",
						"japanese": "王の演武場。吹雪が荒れ狂った。",
						"chinese": "王的演武场。暴风雪肆虐。",
						"french": "Champ d'entraînement du Roi. Une tempête de neige faisait rage.",
						"spanish": "Campo de entrenamiento del Rey. Una ventisca azotaba.",
						"vietnamese": "Sân tập của Vua. Bão tuyết hoành hành.",
						"thai": "ลานประลองของราชา พายุหิมะโหมกระหน่ำ",
						"hindi": "राजा का प्रशिक्षण मैदान। एक बर्फीला तूफ़ान आया।"
					}
				},
				{
					"content": {
						"korean": "침입자여, 무자비한 결투를 명한다!",
						"english": "Intruder, I command a merciless duel!",
						"japanese": "侵入者よ、冷酷な決闘を命じる！",
						"chinese": "入侵者，我命令你进行一场无情的决斗！",
						"french": "Intrus, j'ordonne un duel impitoyable !",
						"spanish": "¡Intruso, ordeno un duelo despiadado!",
						"vietnamese": "Kẻ xâm nhập, ta ra lệnh quyết đấu không khoan nhượng!",
						"thai": "ผู้บุกรุก ข้าขอสั่งให้ดวลอย่างไร้ความปรานี!",
						"hindi": "घुसपैठिए, मैं एक बेरहम द्वंद्वयुद्ध का आदेश देता हूँ!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "결투? 무기가 눈덩이라고?",
						"english": "A duel? With snowballs for weapons?",
						"japanese": "決闘？武器は雪玉だと？",
						"chinese": "决斗？武器是雪球？",
						"french": "Un duel ? Avec des boules de neige comme armes ?",
						"spanish": "¿Un duelo? ¿Con bolas de nieve como armas?",
						"vietnamese": "Quyết đấu? Vũ khí là tuyết ư?",
						"thai": "ดวลเหรอ? อาวุธคือก้อนหิมะงั้นเหรอ?",
						"hindi": "द्वंद्वयुद्ध? हथियार बर्फ के गोले हैं?"
					}
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						1
					],
					"action": "enter",
					"speaker": "eira"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "가지런히 쌓인 눈덩이… 이 기록은 놀이의 시작을 뜻한다.",
						"english": "Neatly piled snowballs... This record signifies the start of a game.",
						"japanese": "きれいに積まれた雪玉…この記録は遊びの始まりを意味する。",
						"chinese": "整齐堆放的雪球……这份记录意味着游戏开始。",
						"french": "Des boules de neige soigneusement empilées… Ce registre marque le début d'un jeu.",
						"spanish": "Bolas de nieve cuidadosamente apiladas... Este registro significa el inicio de un juego.",
						"vietnamese": "Những quả cầu tuyết được xếp gọn gàng… Hồ sơ này biểu thị sự khởi đầu của một trò chơi.",
						"thai": "ก้อนหิมะที่วางเรียงกัน… บันทึกนี้หมายถึงการเริ่มต้นของเกม",
						"hindi": "करीने से जमे बर्फ के गोले... यह रिकॉर्ड एक खेल की शुरुआत का प्रतीक है।"
					},
					"type": "speech",
					"speaker": "eira"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						3,
						1
					],
					"speaker": "eira",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "왕의 짧은 날개… 들썩이고 있다.",
						"english": "The King's short wings... are fluttering.",
						"japanese": "王の短い翼…ひらめいている。",
						"chinese": "国王短小的翅膀……正在抖动。",
						"french": "Les courtes ailes du Roi… frémissent.",
						"spanish": "Las cortas alas del Rey... están revoloteando.",
						"vietnamese": "Đôi cánh ngắn của Vua… đang rung rung.",
						"thai": "ปีกสั้นของราชา… กำลังกระพือ",
						"hindi": "राजा के छोटे पंख... फड़फड़ा रहे हैं।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "도망칠 생각은 마라! 무자비한 결투다!",
						"english": "Don't even think about escaping! This is a merciless duel!",
						"japanese": "逃げようなどと考えるな！冷酷な決闘だ！",
						"chinese": "别想逃跑！这是一场无情的决斗！",
						"french": "N'essayez même pas de vous échapper ! C'est un duel impitoyable !",
						"spanish": "¡Ni se te ocurra escapar! ¡Es un duelo despiadado!",
						"vietnamese": "Đừng hòng chạy trốn! Đây là một cuộc quyết đấu không khoan nhượng!",
						"thai": "อย่าคิดหนี! นี่คือการดวลที่ไร้ความปรานี!",
						"hindi": "भागने की सोचना भी मत! यह एक बेरहम द्वंद्वयुद्ध है!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "저 날개는 왜 저렇게 신나 보이지?",
						"english": "Why do those wings look so excited?",
						"japanese": "あの翼、なぜあんなに楽しそうに見えるんだ？",
						"chinese": "那些翅膀为什么看起来那么兴奋？",
						"french": "Pourquoi ces ailes ont-elles l'air si joyeuses ?",
						"spanish": "¿Por qué esas alas se ven tan emocionadas?",
						"vietnamese": "Sao đôi cánh kia trông phấn khích thế nhỉ?",
						"thai": "ทำไมปีกพวกนั้นถึงดูตื่นเต้นขนาดนั้น?",
						"hindi": "वे पंख इतने उत्साहित क्यों दिख रहे हैं?"
					}
				},
				{
					"type": "speech",
					"speaker": "eira",
					"emotion": "base",
					"content": {
						"korean": "기록에 따르면… 즐거울 때 보이는 행동이다.",
						"english": "According to records... this is behavior seen when joyful.",
						"japanese": "記録によれば… 喜びの時に見せる行動だ。",
						"chinese": "根据记载… 这是高兴时才会有的举动。",
						"french": "D'après les registres... c'est un comportement observé en période de joie.",
						"spanish": "Según los registros... es un comportamiento que se ve en momentos de alegría.",
						"vietnamese": "Theo ghi chép... đây là hành vi khi vui vẻ.",
						"thai": "ตามบันทึก... นี่คือพฤติกรรมที่แสดงออกเมื่อมีความสุข",
						"hindi": "अभिलेखों के अनुसार... यह आनंदित होने पर दिखने वाला व्यवहार है।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "왕의 부하들도 눈덩이를 쥐고 들떠 있었다.",
						"english": "Even the king's subordinates were excited, holding snowballs.",
						"japanese": "王の部下たちも雪玉を握り、浮かれていた。",
						"chinese": "连国王的部下也拿着雪球，兴高采烈。",
						"french": "Même les subordonnés du roi étaient euphoriques, des boules de neige à la main.",
						"spanish": "Hasta los súbditos del rey estaban emocionados, con bolas de nieve.",
						"vietnamese": "Cả thuộc hạ của vua cũng cầm nắm tuyết và phấn khích.",
						"thai": "แม้แต่ลูกน้องของราชาต่างก็ตื่นเต้นถือลูกบอลหิมะ",
						"hindi": "राजा के अधीनस्थ भी बर्फ के गोले पकड़े हुए उत्साहित थे।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "부하들까지… 정말 놀이였어?",
						"english": "Even subordinates...? Was it really just a game?",
						"japanese": "部下たちまで… 本当に遊びだったのか？",
						"chinese": "连部下都… 真是场游戏吗？",
						"french": "Même les subordonnés...? C'était vraiment un jeu?",
						"spanish": "¿Hasta los súbditos...? ¿Fue realmente un juego?",
						"vietnamese": "Cả thuộc hạ cũng... thật sự là một trò chơi sao?",
						"thai": "แม้แต่ลูกน้อง...? มันเป็นการเล่นจริงๆ หรือ?",
						"hindi": "अधीनस्थों तक...? क्या यह सचमुच एक खेल था?"
					}
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "eira",
					"spot": [
						4,
						1
					],
					"action": "enter"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "왕의 놀이에 동참하는 무리. 늘 그랬다.",
						"english": "The crowd joined the king's game. It was always like that.",
						"japanese": "王の遊びに参加する群衆。いつもそうだった。",
						"chinese": "众人参与国王的游戏。一直都是如此。",
						"french": "La foule a rejoint le jeu du roi. Il en était toujours ainsi.",
						"spanish": "La multitud se unió al juego del rey. Siempre fue así.",
						"vietnamese": "Đám đông tham gia trò chơi của vua. Luôn là như vậy.",
						"thai": "ผู้คนเข้าร่วมเกมของราชา เป็นเช่นนั้นเสมอ",
						"hindi": "भीड़ राजा के खेल में शामिल हुई। हमेशा ऐसा ही होता था।"
					}
				},
				{
					"content": {
						"korean": "내 위엄을 의심치 마라! 난 지배자다!",
						"english": "Do not doubt my majesty! I am the ruler!",
						"japanese": "我が威厳を疑うな！ 我は支配者だ！",
						"chinese": "别怀疑我的威严！我是统治者！",
						"french": "Ne doutez pas de ma majesté ! Je suis le souverain !",
						"spanish": "¡No dudéis de mi majestad! ¡Yo soy el gobernante!",
						"vietnamese": "Đừng nghi ngờ uy nghiêm của ta! Ta là kẻ thống trị!",
						"thai": "อย่าสงสัยในความสง่างามของข้า! ข้าคือผู้ปกครอง!",
						"hindi": "मेरी गरिमा पर संदेह मत करो! मैं शासक हूँ!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"emotion": "base",
					"content": {
						"korean": "무자비한 결투? 아니다. 이것은 축제다.",
						"english": "A merciless duel? No. This is a festival.",
						"japanese": "無慈悲な決闘？ 違う。これは祭りだ。",
						"chinese": "残酷的决斗？不。这是一场庆典。",
						"french": "Un duel sans pitié? Non. C'est une fête.",
						"spanish": "¿Un duelo despiadado? No. Esto es un festival.",
						"vietnamese": "Một cuộc đấu tàn nhẫn? Không. Đây là một lễ hội.",
						"thai": "การต่อสู้ที่ไร้ความเมตตา? ไม่ใช่ นี่คือเทศกาล",
						"hindi": "एक निर्दयी द्वंद्व? नहीं। यह एक उत्सव है।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						5,
						1
					],
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "더 이상 의심할 필요 없다. 왕의 진정한 의도는…",
						"english": "No need to doubt anymore. The king's true intention is...",
						"japanese": "もう疑う必要はない。王の真の意図は…",
						"chinese": "无需再怀疑。国王真正的意图是…",
						"french": "Plus besoin de douter. La véritable intention du roi est...",
						"spanish": "Ya no hay necesidad de dudar. La verdadera intención del rey es...",
						"vietnamese": "Không cần nghi ngờ nữa. Ý định thật sự của vua là...",
						"thai": "ไม่ต้องสงสัยอีกต่อไป เจตนาที่แท้จริงของราชาคือ...",
						"hindi": "अब और संदेह करने की आवश्यकता नहीं है। राजा का असली इरादा है..."
					},
					"emotion": "base",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"content": {
						"korean": "무자비한 결투! 흐흐… 하하핫!",
						"english": "A merciless duel! Hehe... Hahahaha!",
						"japanese": "無慈悲な決闘！ ふふ… はははは！",
						"chinese": "残酷的决斗！呵呵… 哈哈哈！",
						"french": "Un duel sans pitié ! Huhu... Hahahaha !",
						"spanish": "¡Un duelo despiadado! Jeje... ¡Jajajaja!",
						"vietnamese": "Một cuộc đấu tàn nhẫn! Hề hề... Ha ha ha!",
						"thai": "การต่อสู้ที่ไร้ความเมตตา! ฮิฮิ... ฮ่าฮ่าฮ่า!",
						"hindi": "एक निर्दयी द्वंद्व! हीही... हाहाहा!"
					},
					"emotion": "happy",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "왕의 '무자비한 결투'라는 말끝이 들뜬 웃음으로 흐려졌다.",
						"english": "The king's phrase \"merciless duel\" dissolved into excited laughter.",
						"japanese": "王の「無慈悲な決闘」という言葉の終わりが、浮かれた笑い声でかき消された。",
						"chinese": "国王“残酷的决斗”这番话的结尾，被兴奋的笑声所掩盖。",
						"french": "La phrase du roi « duel sans pitié » se perdit dans un rire excité.",
						"spanish": "La frase del rey \"duelo despiadado\" se difuminó en una risa excitada.",
						"vietnamese": "Từ \"cuộc đấu tàn nhẫn\" của vua tan biến vào tiếng cười phấn khích.",
						"thai": "คำว่า \"การต่อสู้ที่ไร้ความเมตตา\" ของราชาเลือนหายไปในเสียงหัวเราะที่ตื่นเต้น",
						"hindi": "राजा के \"निर्दयी द्वंद्व\" का अंत एक उत्साहित हंसी में घुल गया।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "정말… 그냥 놀고 싶었던 거야?",
						"english": "Did he really... just want to play?",
						"japanese": "本当に… ただ遊びたかっただけなのか？",
						"chinese": "真的… 只是想玩吗？",
						"french": "Voulait-il vraiment... juste jouer?",
						"spanish": "¿De verdad... solo quería jugar?",
						"vietnamese": "Thật sự... chỉ muốn chơi thôi sao?",
						"thai": "เขาแค่... อยากเล่นจริงๆ เหรอ?",
						"hindi": "क्या वह सचमुच... बस खेलना चाहता था?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "지루했던 왕이 상대를 찾은 것뿐이다.",
						"english": "The bored king merely sought a challenger.",
						"japanese": "退屈していた王が、相手を見つけただけだ。",
						"chinese": "无聊的国王只是找了个对手。",
						"french": "Le roi, qui s'ennuyait, n'a fait que chercher un adversaire.",
						"spanish": "El rey aburrido solo encontró un oponente.",
						"vietnamese": "Vị vua chán chường chỉ tìm một đối thủ.",
						"thai": "ราชาที่เบื่อหน่ายเพียงแค่หาคู่ต่อสู้เท่านั้น",
						"hindi": "ऊबे हुए राजा ने बस एक प्रतिद्वंद्वी ढूंढ लिया।"
					},
					"speaker": "eira",
					"type": "speech"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "눈덩이에 파묻혔다. 왕의 일방적인 승리였다.",
						"english": "Buried in a snowball. A one-sided victory for the King.",
						"japanese": "雪玉に埋もれた。王の一方的な勝利だった。",
						"chinese": "被雪球埋住了。这是国王一边倒的胜利。",
						"french": "Enfouis sous une boule de neige. Une victoire écrasante pour le Roi.",
						"spanish": "Sepultado bajo una bola de nieve. Una victoria unilateral para el Rey.",
						"vietnamese": "Bị chôn vùi trong tuyết. Đó là chiến thắng áp đảo của Vua.",
						"thai": "ถูกฝังอยู่ในกองหิมะ เป็นชัยชนะขาดลอยของราชา",
						"hindi": "बर्फ के गोले में दब गया। राजा की एकतरफा जीत थी।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "벌써 끝인가? 시시하군… 다시 와라!",
						"english": "Already over? How dull... Come back again!",
						"japanese": "もう終わりか？つまらんな… また来い！",
						"chinese": "已经结束了吗？真无聊……再来一次吧！",
						"french": "Déjà fini ? Quel ennui... Reviens !",
						"spanish": "¿Ya terminó? Qué aburrido... ¡Vuelve!",
						"vietnamese": "Đã kết thúc rồi sao? Nhàm chán thật... Quay lại đi!",
						"thai": "จบแล้วเหรอ? น่าเบื่อจัง... กลับมาใหม่นะ!",
						"hindi": "क्या यह पहले ही खत्म हो गया? कितना नीरस... वापस आओ!"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "다시 도전할 거야! 진짜 결투를 보여주겠어!",
						"english": "I'll challenge again! I'll show you a real duel!",
						"japanese": "もう一度挑戦する！本当の決闘を見せてやる！",
						"chinese": "我会再次挑战！我会让你见识真正的决斗！",
						"french": "Je relèverai le défi ! Je te montrerai un vrai duel !",
						"spanish": "¡Volveré a desafiarte! ¡Te mostraré un verdadero duelo!",
						"vietnamese": "Ta sẽ thử thách lại! Ta sẽ cho ngươi thấy một trận đấu thực sự!",
						"thai": "ฉันจะท้าทายอีกครั้ง! ฉันจะแสดงการต่อสู้ที่แท้จริงให้ดู!",
						"hindi": "मैं फिर से चुनौती दूंगा! मैं तुम्हें असली द्वंद्वयुद्ध दिखाऊंगा!"
					}
				}
			],
			"win_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "왕은 패배했지만, 그 얼굴엔 희미한 만족감이 서렸다.",
						"english": "The king was defeated, but a faint satisfaction dawned on his face.",
						"japanese": "王は敗北したが、その顔にはかすかな満足感が浮かんでいた。",
						"chinese": "国王虽然败了，但脸上却带着一丝满足。",
						"french": "Le roi fut vaincu, mais une faible satisfaction se dessinait sur son visage.",
						"spanish": "El rey fue derrotado, pero una tenue satisfacción se reflejaba en su rostro.",
						"vietnamese": "Vua đã thua, nhưng một vẻ mãn nguyện mơ hồ hiện trên khuôn mặt.",
						"thai": "ราชาพ่ายแพ้ แต่บนใบหน้ากลับปรากฏร่องรอยความพึงพอใจจางๆ",
						"hindi": "राजा हार गया, लेकिन उसके चेहरे पर हल्की संतुष्टि थी।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "흐흐… 오랜만에 즐거웠다… 또 놀러 와라!",
						"english": "Hehe… That was fun after a long time… Come play again!",
						"japanese": "フフ…久しぶりに楽しかった…また遊びに来いよ！",
						"chinese": "呵呵…好久没这么开心了…再来玩啊！",
						"french": "Huhu… C'était amusant après si longtemps… Reviens jouer !",
						"spanish": "Jeje… Fue divertido después de tanto tiempo… ¡Vuelve a jugar!",
						"vietnamese": "Hừ hừ… Đã lâu rồi mới vui như vậy… Lại đến chơi nhé!",
						"thai": "ฮึๆ…สนุกดีนะ ไม่ได้สนุกแบบนี้นานแล้ว…มาเล่นอีกนะ!",
						"hindi": "हँ हँ… बहुत समय बाद मज़ा आया… फिर से खेलने आना!"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이게… 끝이 아니라고?",
						"english": "This… isn't the end?",
						"japanese": "これが…終わりじゃないってことか？",
						"chinese": "这…不是结束吗？",
						"french": "Ce n'est… pas la fin ?",
						"spanish": "¿Esto… no es el final?",
						"vietnamese": "Cái này… không phải là kết thúc sao?",
						"thai": "นี่…ยังไม่จบงั้นเหรอ?",
						"hindi": "यह… अंत नहीं है?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "왕은 눈싸움을 즐겼을 뿐. 다음엔… 어떤 놀이가 기다릴까.",
						"english": "The king merely enjoyed the snowball fight. Next… what kind of game awaits?",
						"japanese": "王はただ雪合戦を楽しんだだけだ。次は…どんな遊びが待っているのだろう。",
						"chinese": "国王只是享受了雪仗。下次…会是什么游戏在等着呢？",
						"french": "Le roi n'a fait qu'apprécier la bataille de boules de neige. Ensuite… quel jeu nous attendra ?",
						"spanish": "El rey solo disfrutó de la batalla de bolas de nieve. La próxima vez… ¿qué juego nos esperará?",
						"vietnamese": "Vua chỉ đơn thuần là đã thích thú trận chiến tuyết. Lần tới… trò chơi nào sẽ chờ đợi?",
						"thai": "ราชาแค่สนุกกับการปาหิมะเท่านั้นเอง ครั้งหน้า…จะมีเกมอะไรคอยอยู่กันนะ",
						"hindi": "राजा ने बस बर्फ़ीले गोले के खेल का आनंद लिया। अगली बार… कौन सा खेल इंतज़ार कर रहा होगा?"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "왕은 옥좌에서 내려와 커다란 눈덩이를 들었다.",
						"english": "The king descended from his throne and picked up a large snowball.",
						"japanese": "王は玉座から降り、大きな雪玉を手に取った。",
						"chinese": "国王走下王座，拿起一个大雪球。",
						"french": "Le roi descendit de son trône et ramassa une grosse boule de neige.",
						"spanish": "El rey bajó de su trono y tomó una gran bola de nieve.",
						"vietnamese": "Nhà vua bước xuống khỏi ngai vàng và nhặt một quả cầu tuyết lớn.",
						"thai": "ราชาลงจากบัลลังก์และหยิบลูกบอลหิมะลูกใหญ่ขึ้นมา",
						"hindi": "राजा सिंहासन से नीचे उतरा और एक बड़ा बर्फीला गोला उठाया।"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "자, 이제… 무자비한 놀이의 시간이다!",
						"english": "Now… it's time for merciless play!",
						"japanese": "さあ、今から…容赦ない遊びの時間だ！",
						"chinese": "好了，现在…是无情的玩乐时间了！",
						"french": "Bien, maintenant… place à un jeu impitoyable !",
						"spanish": "¡Ahora… es la hora de un juego despiadado!",
						"vietnamese": "Nào, bây giờ… là lúc cho cuộc chơi tàn nhẫn!",
						"thai": "เอาล่ะ…ถึงเวลาเล่นอย่างไม่ปรานีแล้ว!",
						"hindi": "अब… निर्दयी खेल का समय है!"
					},
					"emotion": "happy"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "결국 놀자는 거였어…!",
						"english": "So it was just about playing after all…!",
						"japanese": "結局、遊びたかっただけだったのか…！",
						"chinese": "原来只是想玩啊…！",
						"french": "Alors, il ne s'agissait que d'un jeu… !",
						"spanish": "¡Al final, solo quería jugar…!",
						"vietnamese": "Cuối cùng thì… chỉ là muốn chơi thôi!",
						"thai": "สรุปแล้ว…ก็แค่อยากเล่นเท่านั้นเอง!",
						"hindi": "आखिरकार, यह सब खेलने के लिए ही था…!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						1
					],
					"action": "enter",
					"speaker": "eira"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "기록에 남길 것이다. '놀이를 갈망한 왕'이라고.",
						"english": "It shall be recorded: 'The King Who Craved Play.'",
						"japanese": "記録に残そう。『遊びを渇望した王』と。",
						"chinese": "我会将其载入史册。‘渴望玩乐的国王’。",
						"french": "On l'inscrira dans les annales. « Le roi qui aspirait au jeu ».",
						"spanish": "Quedará registrado: \"El rey que anhelaba jugar\".",
						"vietnamese": "Sẽ được ghi lại. 'Vị vua khao khát cuộc chơi'.",
						"thai": "จะถูกบันทึกไว้ว่า 'ราชาผู้โหยหาการละเล่น'",
						"hindi": "इसे दर्ज किया जाएगा। 'खेल का इच्छुक राजा'।"
					},
					"type": "speech",
					"speaker": "eira"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "덤벼라! 날 즐겁게 해봐라!",
						"english": "Come at me! Amuse me!",
						"japanese": "かかってこい！私を楽しませてみろ！",
						"chinese": "放马过来！取悦我吧！",
						"french": "Attaque ! Amuse-moi !",
						"spanish": "¡Atácame! ¡Diviérteme!",
						"vietnamese": "Tấn công đi! Làm ta vui đi!",
						"thai": "เข้ามาเลย! ทำให้ข้าสนุกสิ!",
						"hindi": "आओ! मुझे प्रसन्न करो!"
					}
				},
				{
					"action": "exit",
					"speaker": "eira",
					"duration_ms": 400,
					"direction": "down",
					"type": "direction"
				}
			],
			"id": 15
		}
	]
} as const;
