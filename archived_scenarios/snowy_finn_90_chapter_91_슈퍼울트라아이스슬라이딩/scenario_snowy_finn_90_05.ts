export const scenario_snowy_finn_90_05 = {
	"scenario_id": "snowy_finn_90_05",
	"order": 5,
	"act": "climax_finale",
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
		}
	},
	"boss": {
		"pool_id": "pool_033"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "칼날 같은 바람이 불어왔다. 모든 것이 얼어붙은 설산의 심장부였다.",
						"english": "A blade-like wind blew. It was the heart of the snowy mountain, where everything was frozen.",
						"japanese": "刃のような風が吹いた。すべてが凍りついた雪山の心臓部だった。",
						"chinese": "刀锋般的风吹来。那是雪山的心脏，一切都被冰封。",
						"french": "Un vent tranchant soufflait. C'était le cœur de la montagne enneigée, où tout était gelé.",
						"spanish": "Un viento gélido soplaba. Era el corazón de la montaña nevada, donde todo estaba congelado.",
						"vietnamese": "Gió như lưỡi dao thổi qua. Đó là trung tâm của núi tuyết, nơi mọi thứ đều đóng băng.",
						"thai": "ลมคมกริบพัดโชยมา มันคือใจกลางของภูเขาหิมะที่ทุกสิ่งแข็งตัว",
						"hindi": "धारदार हवा चली। यह बर्फीले पहाड़ का दिल था, जहाँ सब कुछ जमा हुआ था।"
					}
				},
				{
					"content": {
						"korean": "여기가… Finn이 기다리던 곳인가.",
						"english": "Is this... where Finn was waiting?",
						"japanese": "ここが…フィンが待っていた場所か。",
						"chinese": "这里是……芬恩等候的地方吗？",
						"french": "Est-ce ici... l'endroit où Finn attendait ?",
						"spanish": "¿Es aquí... donde Finn estaba esperando?",
						"vietnamese": "Đây có phải... nơi Finn đang đợi không?",
						"thai": "ที่นี่...คือที่ที่ฟินน์รออยู่เหรอ?",
						"hindi": "क्या यह... वही जगह है जहाँ फिन इंतज़ार कर रहा था?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"speaker": "boss",
					"spot": [
						5,
						7
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "boss",
					"content": {
						"korean": "…왔군. 기다렸다.",
						"english": "...You're here. I've been waiting.",
						"japanese": "…来たな。待っていたぞ。",
						"chinese": "……你来了。我等候已久。",
						"french": "...Tu es là. Je t'attendais.",
						"spanish": "...Llegaste. Te estaba esperando.",
						"vietnamese": "...Đã đến rồi. Ta đã đợi.",
						"thai": "...มาแล้วสินะ. รออยู่.",
						"hindi": "तुम आ गए। मैं इंतज़ार कर रहा था।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "inka",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…그는 그저… 외로운 것뿐이에요.",
						"english": "...He's just... lonely.",
						"japanese": "…彼はただ…寂しいだけなのよ。",
						"chinese": "……他只是……孤独而已。",
						"french": "...Il est juste... seul.",
						"spanish": "...Él solo está... solitario.",
						"vietnamese": "...Anh ấy chỉ... cô đơn thôi.",
						"thai": "...เขาแค่...เหงาเท่านั้นเอง.",
						"hindi": "वह बस... अकेला है।"
					},
					"speaker": "inka"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"speaker": "inka",
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "inka",
					"content": {
						"korean": "그의 비장한 모습은… 어쩌면 도움이 필요하다는 신호일지도 몰라요.",
						"english": "His solemn demeanor... might be a sign that he needs help.",
						"japanese": "彼の悲壮な姿は…もしかしたら助けが必要だというサインなのかもしれません。",
						"chinese": "他那悲壮的样子……或许是需要帮助的信号。",
						"french": "Son attitude solennelle... pourrait être un signe qu'il a besoin d'aide.",
						"spanish": "Su semblante grave... podría ser una señal de que necesita ayuda.",
						"vietnamese": "Vẻ bi tráng của anh ấy... có lẽ là dấu hiệu cần giúp đỡ.",
						"thai": "ท่าทางที่จริงจังของเขา... อาจเป็นสัญญาณว่าเขาต้องการความช่วยเหลือ.",
						"hindi": "उसकी गंभीर मुद्रा... शायद इस बात का संकेत है कि उसे मदद की ज़रूरत है।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "두려워하는 건가? 나의 압도적인 기백에…!",
						"english": "Are you afraid? Of my overwhelming aura...!",
						"japanese": "恐れているのか？私の圧倒的な気迫に…！",
						"chinese": "恐惧了吗？面对我压倒性的气势……！",
						"french": "As-tu peur ? De ma force écrasante... !",
						"spanish": "¿Tienes miedo? ¡De mi abrumador espíritu...!",
						"vietnamese": "Ngươi sợ hãi sao? Trước khí phách áp đảo của ta...!",
						"thai": "เจ้ากลัวรึ? ต่อความน่าเกรงขามที่เหนือกว่าของข้า...!",
						"hindi": "क्या तुम डर रहे हो? मेरी ज़बरदस्त आभा से...!"
					},
					"speaker": "boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "음… 글쎄.",
						"english": "Hmm... I wonder.",
						"japanese": "うーん…どうだろうね。",
						"chinese": "嗯……说不准。",
						"french": "Hum... je ne sais pas.",
						"spanish": "Mmm... no lo sé.",
						"vietnamese": "Ừm... khó nói.",
						"thai": "อืม... ก็ไม่แน่นะ.",
						"hindi": "हम्म... पता नहीं।"
					}
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
					"speaker": "inka",
					"type": "direction",
					"action": "enter"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "inka",
					"content": {
						"korean": "그는 위엄을 내려놓고… 우리와 마주하려 하고 있어요.",
						"english": "He's setting aside his dignity... and trying to face us.",
						"japanese": "彼は威厳を捨てて…私たちと向き合おうとしているわ。",
						"chinese": "他正在放下尊严……试图与我们面对面。",
						"french": "Il met de côté sa dignité... et essaie de nous faire face.",
						"spanish": "Está dejando de lado su dignidad... e intentando enfrentarnos.",
						"vietnamese": "Anh ấy đang gác lại phẩm giá... và cố gắng đối mặt với chúng ta.",
						"thai": "เขากำลังวางทิฐิลง... และพยายามเผชิญหน้ากับเรา.",
						"hindi": "वह अपनी गरिमा को त्यागकर... हमसे सामना करने की कोशिश कर रहा है।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "진짜 속마음은 뭘까.",
						"english": "What's his true intention?",
						"japanese": "本当の胸の内は何だろう。",
						"chinese": "他真正的想法是什么呢？",
						"french": "Quelle est sa véritable intention ?",
						"spanish": "¿Cuál es su verdadera intención?",
						"vietnamese": "Ý định thật sự của anh ấy là gì?",
						"thai": "ความรู้สึกที่แท้จริงของเขาคืออะไรกันนะ?",
						"hindi": "उसके मन में असली बात क्या है?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "boss",
					"content": {
						"korean": "곧 알게 될 것이다! 나의 진정한 힘을…!",
						"english": "You'll soon know! My true power...!",
						"japanese": "もうすぐ分かるだろう！私の真の力を…！",
						"chinese": "你很快就会知道！我的真正力量……！",
						"french": "Tu sauras bientôt ! Mon véritable pouvoir... !",
						"spanish": "¡Pronto lo sabrás! ¡Mi verdadero poder...!",
						"vietnamese": "Ngươi sẽ sớm biết thôi! Sức mạnh thật sự của ta...!",
						"thai": "เจ้าจะได้รู้ในไม่ช้า! พลังที่แท้จริงของข้า...!",
						"hindi": "तुम्हें जल्द ही पता चल जाएगा! मेरी असली शक्ति...!"
					},
					"type": "speech",
					"emotion": "happy"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "inka",
					"spot": [
						4,
						3
					]
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이건… 싸움이 아니에요. 그의 마지막 외침입니다.",
						"english": "This isn't... a fight. It's his final cry.",
						"japanese": "これは…戦いじゃない。彼の最後の叫びなの。",
						"chinese": "这不是……一场战斗。这是他最后的呐喊。",
						"french": "Ce n'est pas... un combat. C'est son dernier cri.",
						"spanish": "Esto no es... una pelea. Es su último grito.",
						"vietnamese": "Đây không phải... một trận chiến. Đây là tiếng kêu cuối cùng của anh ấy.",
						"thai": "นี่ไม่ใช่...การต่อสู้. มันคือเสียงร้องสุดท้ายของเขา.",
						"hindi": "यह... कोई लड़ाई नहीं है। यह उसकी आखिरी पुकार है।"
					},
					"speaker": "inka"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "마지막 외침이라…",
						"english": "A final cry...",
						"japanese": "最後の叫びか…",
						"chinese": "最后的呐喊啊…",
						"french": "Un dernier cri...",
						"spanish": "Un último grito...",
						"vietnamese": "Một tiếng kêu cuối cùng...",
						"thai": "เสียงร่ำร้องสุดท้ายสินะ...",
						"hindi": "अंतिम चीख..."
					},
					"speaker": "character_any"
				},
				{
					"speaker": "boss",
					"content": {
						"korean": "각오해라! 나의 필살기는… 누구도 막을 수 없다!",
						"english": "Prepare yourself! My ultimate move... no one can stop it!",
						"japanese": "覚悟しろ！俺の必殺技は…誰にも止められない！",
						"chinese": "做好觉悟吧！我的必杀技…无人能挡！",
						"french": "Préparez-vous ! Mon coup spécial... personne ne peut l'arrêter !",
						"spanish": "¡Prepárense! ¡Mi movimiento definitivo... nadie puede detenerlo!",
						"vietnamese": "Hãy chuẩn bị đi! Chiêu cuối của ta... không ai có thể ngăn cản!",
						"thai": "เตรียมตัวไว้ซะ! ท่าไม้ตายของข้า... ไม่มีใครหยุดได้!",
						"hindi": "तैयार हो जाओ! मेरा अंतिम दांव... कोई नहीं रोक सकता!"
					},
					"emotion": "angry",
					"type": "speech"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "boss",
					"content": {
						"korean": "콜록… 콜록… 아직… 나의 싸움은 끝나지 않았다…!",
						"english": "Cough... cough... Not yet... My fight isn't over...!",
						"japanese": "ゴホッ…ゴホッ…まだだ…私の戦いは終わっていない…！",
						"chinese": "咳咳……咳咳……还没有……我的战斗还没有结束……！",
						"french": "Tousse... tousse... Pas encore... Mon combat n'est pas terminé...!",
						"spanish": "Tos... tos... Todavía no... ¡Mi lucha no ha terminado...!",
						"vietnamese": "Khụ… khụ… Chưa… trận chiến của ta chưa kết thúc…!",
						"thai": "แค่ก...แค่ก... ยัง... การต่อสู้ของข้ายังไม่จบ...!",
						"hindi": "खांसी... खांसी... अभी... मेरी लड़ाई खत्म नहीं हुई...!"
					}
				},
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"speaker": "inka",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "다음에… 다음에 꼭 따뜻한 곳으로 가요.",
						"english": "Next time... next time, let's go somewhere warm, for sure.",
						"japanese": "次こそ…次こそ暖かい場所へ行きましょう。",
						"chinese": "下次……下次我们一定要去温暖的地方。",
						"french": "La prochaine fois... la prochaine fois, allons dans un endroit chaud, c'est promis.",
						"spanish": "La próxima vez... la próxima vez, vayamos a un lugar cálido, de verdad.",
						"vietnamese": "Lần sau… lần sau nhất định phải đến một nơi ấm áp nhé.",
						"thai": "ครั้งหน้า... ครั้งหน้า ไปที่ที่อบอุ่นกันนะ.",
						"hindi": "अगली बार... अगली बार, ज़रूर किसी गर्म जगह चलते हैं।"
					},
					"speaker": "inka"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…그래, 다음엔 꼭.",
						"english": "...Yes, next time, definitely.",
						"japanese": "…うん、次こそは。",
						"chinese": "……好，下次一定。",
						"french": "...Oui, la prochaine fois, c'est promis.",
						"spanish": "...Sí, la próxima vez, seguro.",
						"vietnamese": "…Được, lần sau nhất định.",
						"thai": "...ได้สิ, ครั้งหน้าต้องได้.",
						"hindi": "...हाँ, अगली बार, ज़रूर।"
					}
				}
			],
			"dialogue": [
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "자, 나의 필살기… 이름하여 [슈퍼 울트라 아이스 슬라이딩]이다!",
						"english": "Now, my ultimate move... named [Super Ultra Ice Sliding]!",
						"japanese": "さあ、俺の必殺技…その名も【スーパーウルトラアイススライディング】だ！",
						"chinese": "来吧，我的必杀技…名为【超级无敌冰滑】！",
						"french": "Maintenant, mon coup spécial... nommé [Super Ultra Ice Sliding] !",
						"spanish": "¡Ahora, mi movimiento definitivo... llamado [Súper Ultra Deslizamiento de Hielo]!",
						"vietnamese": "Giờ thì, chiêu cuối của ta... tên là [Trượt Băng Siêu Cấp Cực Đại]!",
						"thai": "เอาล่ะ, ท่าไม้ตายของข้า... มีชื่อว่า [ซูเปอร์ อัลตร้า ไอซ์ สไลดิ้ง]!",
						"hindi": "अब, मेरा अंतिम दांव... जिसका नाम है [सुपर अल्ट्रा आइस स्लाइडिंग]!"
					},
					"speaker": "boss"
				},
				{
					"action": "move",
					"type": "direction",
					"duration_ms": 400,
					"speaker": "boss",
					"spot": [
						5,
						4
					]
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "비장하게 돌진하던 Finn이 제 발에 걸려 넘어졌다.",
						"english": "Finn, charging heroically, tripped over his own feet.",
						"japanese": "勇ましく突進していたフィンが、自分の足に引っかかって転んでしまった。",
						"chinese": "Finn英勇地冲刺着，却被自己的脚绊倒了。",
						"french": "Finn, chargeant héroïquement, trébucha sur ses propres pieds.",
						"spanish": "Finn, que cargaba heroicamente, tropezó con sus propios pies.",
						"vietnamese": "Finn đang dũng mãnh xông tới thì vấp chân mình ngã.",
						"thai": "ฟินน์ที่พุ่งเข้าใส่อย่างห้าวหาญ ได้สะดุดขาตัวเองล้มลง",
						"hindi": "वीरतापूर्वक हमला करते हुए फिन अपनी ही पैरों से ठोकर खाकर गिर गया।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "아얏… 너희, 봤지? 나의 이 화려한 바디 체크를…!",
						"english": "Ouch... you all saw that, right? My spectacular body check...!",
						"japanese": "いたっ…君たち、見たか？この華麗なボディチェックを…！",
						"chinese": "哎哟…你们，看到了吧？我这华丽的身体检查…！",
						"french": "Aïe... vous avez vu ça, n'est-ce pas ? Mon spectaculaire plaquage corporel... !",
						"spanish": "¡Ay... lo vieron, ¿verdad? ¡Mi espectacular chequeo corporal...!",
						"vietnamese": "Ái... Mấy người thấy rồi chứ? Pha kiểm tra cơ thể hoa mỹ của ta...!",
						"thai": "โอ๊ย... พวกนายเห็นแล้วใช่ไหม? การเช็กบอดี้สุดอลังการของฉัน...!",
						"hindi": "उफ़... तुम सबने देखा ना? मेरा यह शानदार बॉडी चेक...!"
					},
					"speaker": "boss"
				},
				{
					"content": {
						"korean": "…이길 생각은 없었는데… 혹시 남는 전기장판 있니? 착불로 보내줘도 돼…",
						"english": "...I didn't intend to win anyway... Say, do you have a spare electric blanket? You can send it C.O.D...",
						"japanese": "…勝つつもりはなかったんだけど…もし余ってる電気毛布あったら？着払いで送ってくれてもいいよ…",
						"chinese": "…我本来也没想赢… 话说，有多的电热毯吗？到付寄给我也可以…",
						"french": "...Je n'avais pas l'intention de gagner de toute façon... Dis, tu aurais une couverture chauffante en trop ? Tu peux l'envoyer en contre-remboursement...",
						"spanish": "...No tenía intención de ganar de todos modos... Oye, ¿tienes una manta eléctrica de sobra? Puedes enviármela a contrareembolso...",
						"vietnamese": "...Dù sao thì ta cũng không định thắng... Mà này, có cái chăn điện nào thừa không? Gửi ship COD cho ta cũng được...",
						"thai": "...ฉันก็ไม่ได้ตั้งใจจะชนะอยู่แล้วนี่นา... ว่าแต่, มีผ้าห่มไฟฟ้าเหลือบ้างไหม? จะส่งแบบเก็บเงินปลายทางก็ได้นะ...",
						"hindi": "...मैं जीतना नहीं चाहता था वैसे भी... क्या तुम्हारे पास कोई अतिरिक्त इलेक्ट्रिक कंबल है? तुम उसे C.O.D. भेज सकते हो..."
					},
					"speaker": "boss",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"speaker": "inka",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "괜찮아요… 괜찮아요. 잘했어요.",
						"english": "It's okay... it's okay. You did well.",
						"japanese": "大丈夫…大丈夫。よくやったよ。",
						"chinese": "没关系…没关系。你做得很好。",
						"french": "C'est bon... c'est bon. Tu as bien fait.",
						"spanish": "Está bien... está bien. Lo hiciste bien.",
						"vietnamese": "Không sao đâu... không sao đâu. Em làm tốt lắm.",
						"thai": "ไม่เป็นไร... ไม่เป็นไร ทำได้ดีมากแล้ว",
						"hindi": "ठीक है... ठीक है। तुमने अच्छा किया।"
					},
					"speaker": "inka",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "happy",
					"speaker": "character_any",
					"content": {
						"korean": "…하하.",
						"english": "...Haha.",
						"japanese": "…はは。",
						"chinese": "…哈哈。",
						"french": "...Haha.",
						"spanish": "...Jajaja.",
						"vietnamese": "...Haha.",
						"thai": "...ฮ่าๆ",
						"hindi": "...हाहा।"
					}
				}
			],
			"win_dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"speaker": "inka"
				},
				{
					"content": {
						"korean": "여기… 따뜻한 담요가 있어요. 괜찮으시다면…",
						"english": "Here... I have a warm blanket. If you don't mind...",
						"japanese": "こちらに…温かい毛布があります。よろしければ…",
						"chinese": "这里…有条暖和的毯子。如果您不介意的话…",
						"french": "Tenez... j'ai une couverture chaude. Si cela ne vous dérange pas...",
						"spanish": "Aquí... tengo una manta caliente. Si no le importa...",
						"vietnamese": "Đây... có một chiếc chăn ấm. Nếu bạn không phiền...",
						"thai": "นี่... มีผ้าห่มอุ่นๆ ครับ ถ้าไม่รังเกียจ...",
						"hindi": "यहाँ... एक गर्म कंबल है। अगर आप चाहें तो..."
					},
					"speaker": "inka",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "boss",
					"content": {
						"korean": "…정말이냐? 착불로 안 보내도 되냐?",
						"english": "...Really? You don't have to send it C.O.D.?",
						"japanese": "…本当か？着払いで送らなくていいのか？",
						"chinese": "…真的吗？不用到付也可以吗？",
						"french": "...Vraiment ? Tu n'as pas besoin de l'envoyer en contre-remboursement ?",
						"spanish": "¿...De verdad? ¿No tengo que enviarlo a contrareembolso?",
						"vietnamese": "...Thật sao? Không cần gửi COD à?",
						"thai": "...จริงเหรอ? ไม่ต้องส่งแบบเก็บเงินปลายทางก็ได้ใช่ไหม?",
						"hindi": "...सच में? क्या तुम्हें इसे C.O.D. नहीं भेजना है?"
					},
					"emotion": "happy",
					"type": "speech"
				},
				{
					"content": {
						"korean": "Finn의 진짜 모습… 이렇게 따뜻했구나.",
						"english": "Finn's true self... so warm.",
						"japanese": "フィン様の本当の姿…こんなに温かかったなんて。",
						"chinese": "芬恩的真面目……原来如此温暖。",
						"french": "La vraie nature de Finn... si chaleureuse.",
						"spanish": "La verdadera forma de Finn... tan cálida.",
						"vietnamese": "Con người thật của Finn… ấm áp đến vậy sao.",
						"thai": "ตัวตนที่แท้จริงของฟินน์... อบอุ่นขนาดนี้เชียวหรือ.",
						"hindi": "फिन का असली रूप... इतना गर्म।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "길 잃은 추위쟁이 왕의 이야기는 그렇게, 따뜻한 폭소 속에 매듭지어졌다.",
						"english": "Thus, the tale of the lost, cold king concluded amidst warm laughter.",
						"japanese": "迷子の寒がりな王の物語は、そうして温かい爆笑の中に締めくくられた。",
						"chinese": "迷路的怕冷之王的故事，就这样在温暖的欢笑中画上了句号。",
						"french": "Ainsi, l'histoire du roi craintif du froid s'acheva dans un rire chaleureux.",
						"spanish": "Así, la historia del rey friolero perdido se cerró entre cálidas carcajadas.",
						"vietnamese": "Và thế là, câu chuyện về vị vua sợ lạnh lạc lối đã kết thúc trong tiếng cười ấm áp.",
						"thai": "เรื่องราวของราชาขี้หนาวผู้หลงทาง จึงจบลงด้วยเสียงหัวเราะอันอบอุ่น.",
						"hindi": "भटके हुए ठंडे राजा की कहानी, इस तरह, गर्म हंसी में समाप्त हो गई।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 15
		}
	],
	"epilogue": {
		"korean": [
			"설산의 정상에는 따뜻한 온기가 감돌았다.",
			"길 잃은 왕은 더 이상 외롭지 않았다.",
			"모든 것을 기록한 이야기꾼, 온기를 건넨 수호대장, 그리고 모든 존재를 받아들인 생존자.",
			"그들의 여정은 그렇게 작은 펭귄의 마음속에 수렴했다.",
			"이것은 구원이었을까, 아니면 또 다른 시작이었을까."
		],
		"english": [
			"A warm aura enveloped the mountaintop.",
			"The lost king was no longer lonely.",
			"The storyteller who recorded everything, the guardian captain who offered warmth, and the survivor who accepted all beings.",
			"Their journey thus converged in the heart of a small penguin.",
			"Was this salvation, or yet another beginning?"
		],
		"japanese": [
			"雪山の頂には、暖かい温もりが漂っていた。",
			"道に迷った王は、もう孤独ではなかった。",
			"すべてを記録した語り部、温もりを与えた守護隊長、そしてすべての存在を受け入れた生存者。",
			"彼らの旅は、そうして小さなペンギンの心の中に収束した。",
			"これは救済だったのだろうか、それともまた新たな始まりだったのだろうか。"
		],
		"chinese": [
			"雪山之巅弥漫着温暖的暖意。",
			"迷途的国王不再孤单。",
			"记录一切的讲故事者，给予温暖的守护队长，以及接受所有存在的幸存者。",
			"他们的旅程就这样汇聚在了一只小企鹅的心中。",
			"这是救赎，还是又一个开始？"
		],
		"french": [
			"Une douce chaleur enveloppait le sommet de la montagne enneigée.",
			"Le roi égaré n'était plus seul.",
			"Le conteur qui a tout enregistré, le capitaine gardien qui a offert de la chaleur, et le survivant qui a accepté tous les êtres.",
			"Leur voyage convergea ainsi dans le cœur d'un petit pingouin.",
			"Était-ce le salut, ou un autre début ?"
		],
		"spanish": [
			"Una cálida sensación envolvía la cima de la montaña nevada.",
			"El rey perdido ya no estaba solo.",
			"El narrador que lo registró todo, el capitán guardián que ofreció calidez, y el superviviente que aceptó a todos los seres.",
			"Su viaje convergió así en el corazón de un pequeño pingüino.",
			"¿Fue esto la salvación, o un nuevo comienzo?"
		],
		"vietnamese": [
			"Một hơi ấm lan tỏa trên đỉnh núi tuyết.",
			"Vị vua lạc lối không còn cô đơn nữa.",
			"Người kể chuyện ghi lại mọi thứ, đội trưởng hộ vệ trao hơi ấm, và người sống sót chấp nhận mọi sinh vật.",
			"Hành trình của họ đã hội tụ trong trái tim của một chú chim cánh cụt nhỏ bé.",
			"Đây là sự cứu rỗi, hay một khởi đầu mới?"
		],
		"thai": [
			"บนยอดเขาหิมะมีไออุ่นอบอวล",
			"ราชาผู้หลงทางไม่โดดเดี่ยวอีกต่อไป",
			"นักเล่าเรื่องผู้บันทึกทุกสิ่ง, หัวหน้าหน่วยพิทักษ์ผู้มอบความอบอุ่น, และผู้รอดชีวิตผู้ยอมรับทุกสรรพสิ่ง",
			"การเดินทางของพวกเขาจึงบรรจบกันในใจของนกเพนกวินตัวน้อย",
			"นี่คือการไถ่ถอน หรือจุดเริ่มต้นใหม่กันแน่"
		],
		"hindi": [
			"बर्फ़ीले पहाड़ की चोटी पर एक गर्मजोशी छा गई।",
			"खोया हुआ राजा अब अकेला नहीं था।",
			"सब कुछ दर्ज करने वाला कहानीकार, गर्मजोशी देने वाला संरक्षक कप्तान, और सभी प्राणियों को स्वीकार करने वाला उत्तरजीवी।",
			"उनकी यात्रा इस प्रकार एक छोटे पेंग्विन के हृदय में समाहित हो गई।",
			"क्या यह मोक्ष था, या एक और शुरुआत?"
		]
	},
	"prologue": {
		"korean": [
			"설산의 정상, 얼어붙은 대지.",
			"마침내 그가 기다리고 있었다. 왕의 모든 위엄을 내려놓은 채.",
			"그의 마지막 필살기. 그것은 싸움이 아니었다.",
			"길을 잃은 작은 왕의 서툰 진심. 우리는 그것을 마주해야 했다."
		],
		"english": [
			"Mountaintop, frozen land.",
			"Finally, he was waiting. Having shed all the dignity of a king.",
			"His ultimate move. It was not a fight.",
			"The clumsy sincerity of a lost little king. We had to face it."
		],
		"japanese": [
			"雪山の頂、凍てつく大地。",
			"ついに彼が待っていた。王としてのすべての威厳を捨てて。",
			"彼の最後の必殺技。それは戦いではなかった。",
			"道に迷った小さな王の不器用な真情。私たちはそれに向き合わなければならなかった。"
		],
		"chinese": [
			"雪山之巅，冰封大地。",
			"他终于在等待，卸下了君王所有的威严。",
			"他最后的绝招。那不是一场战斗。",
			"迷途小王的笨拙真心。我们必须面对它。"
		],
		"french": [
			"Sommet enneigé, terre gelée.",
			"Enfin, il attendait. Ayant abandonné toute la dignité d'un roi.",
			"Son coup ultime. Ce n'était pas un combat.",
			"La sincérité maladroite d'un petit roi égaré. Nous devions y faire face."
		],
		"spanish": [
			"Cima de la montaña nevada, tierra helada.",
			"Finalmente, él estaba esperando. Habiendo depuesto toda la dignidad real.",
			"Su golpe final. No fue una lucha.",
			"La torpe sinceridad de un pequeño rey perdido. Tuvimos que enfrentarlo."
		],
		"vietnamese": [
			"Đỉnh núi tuyết, vùng đất đóng băng.",
			"Cuối cùng, anh đã đợi. Bỏ lại tất cả uy nghiêm của một vị vua.",
			"Đòn kết liễu cuối cùng của anh. Đó không phải là một cuộc chiến.",
			"Sự chân thành vụng về của một vị vua nhỏ lạc lối. Chúng ta phải đối mặt với điều đó."
		],
		"thai": [
			"ยอดเขาหิมะ, ดินแดนที่เยือกแข็ง",
			"ในที่สุด เขาก็รออยู่ โดยทิ้งความสง่างามของกษัตริย์ไว้เบื้องหลัง",
			"ไม้ตายสุดท้ายของเขา มันไม่ใช่การต่อสู้",
			"ความจริงใจที่ซุ่มซ่ามของราชาตัวน้อยผู้หลงทาง เราต้องเผชิญหน้ากับมัน"
		],
		"hindi": [
			"बर्फ़ीले पहाड़ की चोटी, जमी हुई ज़मीन।",
			"अंततः, वह इंतज़ार कर रहा था। राजा की सारी गरिमा त्यागकर।",
			"उसका अंतिम वार। वह लड़ाई नहीं थी।",
			"एक खोए हुए छोटे राजा की अनाड़ी ईमानदारी। हमें उसका सामना करना पड़ा।"
		]
	}
} as const;
