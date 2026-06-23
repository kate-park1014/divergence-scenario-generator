export const scenario_snowy_grumph_59_04 = {
	"scenario_id": "snowy_grumph_59_04",
	"order": 4,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"hild": {
			"id": "mon_6f20c96a-bf07-4aae-b37c-da898a8336e8",
			"name": {
				"korean": "힐드",
				"english": "Hild",
				"japanese": "ヒルド",
				"chinese": "希尔德",
				"french": "Hild",
				"spanish": "Hild",
				"vietnamese": "Hild",
				"thai": "ฮิลด์",
				"hindi": "हिल्ड"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/722a86fd-2903-4688-3f04-db8241ed0e00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/af3d96ba-e571-4132-fede-cd415bd15c00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						5,
						2
					],
					"speaker": "hild",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…여기였군. 이 차가운 울림.",
						"english": "...It was here. This cold echo.",
						"japanese": "…ここだったか。この冷たい響き。",
						"chinese": "……原来在这里。这冰冷的共鸣。",
						"french": "...C'était ici. Cet écho froid.",
						"spanish": "...Aquí estaba. Este eco frío.",
						"vietnamese": "…Là ở đây. Tiếng vọng lạnh lẽo này.",
						"thai": "…ที่นี่เอง เสียงสะท้อนอันเยือกเย็นนี้",
						"hindi": "...यहीं था। यह ठंडी गूँज।"
					},
					"speaker": "hild"
				},
				{
					"content": {
						"korean": "또 누구야? 감히 이 몸의 평화를 방해하는 자가!",
						"english": "Who dares disturb my peace again?",
						"japanese": "また誰だ？よくもこの身の平和を邪魔する者が！",
						"chinese": "又是谁？竟敢打扰本座的宁静！",
						"french": "Qui ose troubler ma paix encore une fois ?",
						"spanish": "¿Quién se atreve a perturbar mi paz de nuevo?",
						"vietnamese": "Lại là ai? Kẻ nào dám quấy rầy sự bình yên của ta!",
						"thai": "ใครกันอีก ที่กล้ามารบกวนความสงบสุขของข้า!",
						"hindi": "फिर कौन है? जो मेरे शांति को भंग करने की हिम्मत करता है!"
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
						"korean": "모자… 또 시끄러워졌네.",
						"english": "Hat... you're noisy again.",
						"japanese": "帽子…また騒がしくなったな。",
						"chinese": "帽子……又吵起来了。",
						"french": "Chapeau... tu es bruyant à nouveau.",
						"spanish": "Sombrero... de nuevo estás ruidoso.",
						"vietnamese": "Mũ… lại ồn ào nữa rồi.",
						"thai": "หมวก... นายเสียงดังอีกแล้วนะ",
						"hindi": "टोपी... तुम फिर से शोर कर रहे हो।"
					}
				},
				{
					"speaker": "hild",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "그 불평 안에… 깊은 외로움이 있어.",
						"english": "Within that complaint... lies deep loneliness.",
						"japanese": "その不平の中に…深い孤独がある。",
						"chinese": "在那抱怨之中……藏着深深的孤独。",
						"french": "Dans cette plainte... réside une profonde solitude.",
						"spanish": "En esa queja... hay una profunda soledad.",
						"vietnamese": "Trong lời than vãn đó… có một nỗi cô đơn sâu sắc.",
						"thai": "ภายในคำบ่นนั้น... มีความเหงาลึกซึ้งซ่อนอยู่",
						"hindi": "उस शिकायत के भीतर... गहरा अकेलापन है।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "외로움? 건방진 것! 나는 위대한 존재다!",
						"english": "Loneliness? Insolent fool! I am a great being!",
						"japanese": "孤独？生意気な！私は偉大な存在だ！",
						"chinese": "孤独？放肆！我可是伟大的存在！",
						"french": "Solitude ? Impertinent ! Je suis un être puissant !",
						"spanish": "¿Soledad? ¡Insolente! ¡Soy un ser grandioso!",
						"vietnamese": "Cô đơn ư? Đồ xấc xược! Ta là một tồn tại vĩ đại!",
						"thai": "ความเหงา? เจ้าพวกบังอาจ! ข้าคือผู้ยิ่งใหญ่!",
						"hindi": "अकेलापन? ढीठ! मैं एक महान प्राणी हूँ!"
					},
					"speaker": "random_boss"
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
						2
					],
					"speaker": "hild",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "hild",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "나는 망자의 약속을 기리는 자. 당신의 슬픔에 공명하오.",
						"english": "I am the one who honors the promises of the dead. I resonate with your sorrow.",
						"japanese": "私は死者の約束を称える者。あなたの悲しみに共鳴する。",
						"chinese": "我是缅怀亡者之诺者。与您的悲伤共鸣。",
						"french": "Je suis celui qui honore les promesses des morts. Je résonne avec votre tristesse.",
						"spanish": "Soy quien honra las promesas de los muertos. Resueno con tu tristeza.",
						"vietnamese": "Ta là kẻ tôn vinh lời hứa của người đã khuất. Ta cộng hưởng với nỗi buồn của ngươi.",
						"thai": "ข้าคือผู้รักษาคำสัญญาของผู้ล่วงลับ ข้าสะท้อนถึงความโศกเศร้าของท่าน",
						"hindi": "मैं मृतकों के वादों का सम्मान करने वाला हूँ। मैं तुम्हारे दुःख के साथ प्रतिध्वनित होता हूँ।"
					}
				},
				{
					"content": {
						"korean": "슬픔? 감히 나의 위엄을 모독하는가! 비웃는 게냐!",
						"english": "Sadness? How dare you mock my dignity! Are you laughing at me?!",
						"japanese": "悲しみだと？よくも私の威厳を侮辱するな！嘲笑うのか！",
						"chinese": "悲伤？你竟敢亵渎我的威严！是在嘲笑我吗？！",
						"french": "La tristesse ? Comment oses-tu bafouer ma dignité ! Te moques-tu de moi ?!",
						"spanish": "¿Tristeza? ¡¿Cómo osas profanar mi dignidad?! ¡¿Te estás riendo de mí?!",
						"vietnamese": "Buồn ư? Ngươi dám xúc phạm uy nghiêm của ta sao! Ngươi đang cười nhạo ta à?!",
						"thai": "ความเศร้า? แกกล้าดูหมิ่นศักดิ์ศรีของข้าเหรอ! หัวเราะเยาะข้าอย่างนั้นเหรอ!",
						"hindi": "दुःख? तेरी हिम्मत कैसे हुई मेरी गरिमा का अपमान करने की! क्या तू मेरा मज़ाक उड़ा रहा है?!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"speaker": "hild",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "그 불평은… 따뜻함을 향한 절규가 아닌가요?",
						"english": "That complaint... isn't it a cry for warmth?",
						"japanese": "その不満は…暖かさを求める叫びではないのか？",
						"chinese": "那抱怨……难道不是对温暖的呐喊吗？",
						"french": "Cette plainte... n'est-elle pas un cri pour la chaleur ?",
						"spanish": "Esa queja... ¿no es un grito por calidez?",
						"vietnamese": "Lời than phiền đó… chẳng phải là tiếng kêu thét muốn sự ấm áp sao?",
						"thai": "การบ่นนั้น... ไม่ใช่เสียงกรีดร้องที่โหยหาความอบอุ่นหรอกหรือ?",
						"hindi": "वह शिकायत... क्या गर्माहट के लिए एक चीख नहीं है?"
					}
				},
				{
					"content": {
						"korean": "…닥쳐라. 감히 나의 심연을 들여다보려 해?",
						"english": "...Silence. How dare you try to peer into my abyss?",
						"japanese": "…黙れ。よくも私の深淵を覗こうとするな？",
						"chinese": "……闭嘴。你竟敢窥视我的深渊？",
						"french": "...Tais-toi. Comment oses-tu essayer de sonder mon abîme ?",
						"spanish": "...Cállate. ¿Cómo osas intentar asomarte a mi abismo?",
						"vietnamese": "…Im đi. Ngươi dám nhìn vào vực thẳm của ta sao?",
						"thai": "...หุบปาก. แกกล้าดีอย่างไรที่พยายามจะมองลึกเข้าไปในห้วงลึกของข้า?",
						"hindi": "...चुप हो जा। तेरी हिम्मत कैसे हुई मेरे पाताल में झाँकने की?"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "모자의 기운이 더욱 강해졌다. 주변의 얼음이 흔들렸다.",
						"english": "The power of the hat grew stronger. The surrounding ice trembled.",
						"japanese": "帽子の気がさらに強くなった。周囲の氷が揺れた。",
						"chinese": "帽子的气息变得更强了。周围的冰块晃动起来。",
						"french": "La puissance du chapeau s'est accrue. La glace environnante a tremblé.",
						"spanish": "El poder del sombrero se hizo más fuerte. El hielo circundante tembló.",
						"vietnamese": "Khí lực của chiếc mũ trở nên mạnh hơn. Băng đá xung quanh rung chuyển.",
						"thai": "พลังของหมวกแข็งแกร่งขึ้น น้ำแข็งรอบๆ สั่นสะเทือน",
						"hindi": "टोपी की शक्ति और बढ़ गई। आसपास की बर्फ़ काँप उठी।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "힐드, 위험해 보여.",
						"english": "Hild, you look dangerous.",
						"japanese": "ヒルダ、危険そうだ。",
						"chinese": "希尔德，你看起来很危险。",
						"french": "Hild, tu as l'air dangereuse.",
						"spanish": "Hild, pareces peligrosa.",
						"vietnamese": "Hild, trông cậu nguy hiểm quá.",
						"thai": "ฮิลด์, ดูอันตรายนะ.",
						"hindi": "हिल्ड, तुम ख़तरनाक लग रही हो।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"speaker": "hild",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "당신은… 홀로 너무 오래 있었어. 그 고통을 이해해.",
						"english": "You... have been alone for too long. I understand that pain.",
						"japanese": "あなたは…独りきり、あまりにも長くいた。その苦痛を理解する。",
						"chinese": "你……独自一人太久了。我理解那种痛苦。",
						"french": "Vous... avez été seul trop longtemps. Je comprends cette douleur.",
						"spanish": "Tú... has estado solo demasiado tiempo. Entiendo ese dolor.",
						"vietnamese": "Ngươi… đã ở một mình quá lâu rồi. Ta hiểu nỗi đau đó.",
						"thai": "คุณ... อยู่คนเดียวนานเกินไปแล้ว. ฉันเข้าใจความเจ็บปวดนั้น.",
						"hindi": "तुम... बहुत लंबे समय से अकेले हो। मैं उस दर्द को समझता हूँ।"
					},
					"speaker": "hild"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "이해? 나의 힘을 느껴라! 너의 연민은 나를 더욱 강하게 할 뿐!",
						"english": "Understand? Feel my power! Your pity only makes me stronger!",
						"japanese": "理解だと？私の力を感じろ！お前の憐憫は私をさらに強くするだけだ！",
						"chinese": "理解？感受我的力量！你的怜悯只会让我变得更强！",
						"french": "Comprendre ? Ressens mon pouvoir ! Ta pitié ne fait que me rendre plus fort !",
						"spanish": "¿Entender? ¡Siente mi poder! ¡Tu compasión solo me hace más fuerte!",
						"vietnamese": "Hiểu ư? Hãy cảm nhận sức mạnh của ta! Lòng trắc ẩn của ngươi chỉ khiến ta mạnh hơn mà thôi!",
						"thai": "เข้าใจงั้นเหรอ? สัมผัสพลังของข้าซะ! ความสงสารของแกมีแต่จะทำให้ข้าแข็งแกร่งขึ้นเท่านั้น!",
						"hindi": "समझना? मेरी शक्ति महसूस करो! तेरी दया मुझे और मज़बूत ही बनाएगी!"
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "모자에서 뿜어져 나오는 냉기가 탐험대를 덮쳤다.",
						"english": "A chilling aura emanating from the hat enveloped the expedition team.",
						"japanese": "帽子から噴き出す冷気が探検隊を覆った。",
						"chinese": "帽子中散发出的寒气笼罩了探险队。",
						"french": "Une aura glaciale émanant du chapeau a enveloppé l'équipe d'expédition.",
						"spanish": "Un aura gélida que emanaba del sombrero envolvió al equipo de expedición.",
						"vietnamese": "Hơi lạnh tỏa ra từ chiếc mũ bao trùm lấy đoàn thám hiểm.",
						"thai": "ไอเย็นที่พวยพุ่งออกมาจากหมวกปกคลุมทีมสำรวจ",
						"hindi": "टोपी से निकलने वाली बर्फीली हवा ने अभियान दल को घेर लिया।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "힐드! 그만해! 모자가 더 강해지고 있어!",
						"english": "Hild! Stop! The hat is getting stronger!",
						"japanese": "ヒルダ！やめろ！帽子がさらに強くなっている！",
						"chinese": "希尔德！住手！帽子变得更强了！",
						"french": "Hild ! Arrête ! Le chapeau devient plus fort !",
						"spanish": "¡Hild! ¡Para! ¡El sombrero se está haciendo más fuerte!",
						"vietnamese": "Hild! Dừng lại! Chiếc mũ đang trở nên mạnh hơn!",
						"thai": "ฮิลด์! หยุดนะ! หมวกกำลังแข็งแกร่งขึ้น!",
						"hindi": "हिल्ड! रुक जाओ! टोपी और मज़बूत होती जा रही है!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "hild",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "안 돼… 나의 연민이… 파멸을 부르는가?",
						"english": "No... Is my pity... inviting ruin?",
						"japanese": "ダメだ…私の憐憫が…破滅を招くのか？",
						"chinese": "不……我的怜悯……会招致毁灭吗？",
						"french": "Non... Ma pitié... invite-t-elle à la ruine ?",
						"spanish": "No... ¿Mi compasión... está invitando a la ruina?",
						"vietnamese": "Không được… Lòng trắc ẩn của ta… đang gọi mời sự hủy diệt sao?",
						"thai": "ไม่นะ... ความสงสารของข้า... กำลังเชื้อเชิญหายนะงั้นหรือ?",
						"hindi": "नहीं... क्या मेरी दया... बर्बादी को बुला रही है?"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						2,
						2
					],
					"speaker": "hild",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "아니… 이건 연민이 아니었어. 파괴를 부르는 저주였군.",
						"english": "No... this wasn't pity. It was a curse that called for destruction.",
						"japanese": "いや…これは憐憫ではなかった。破滅を呼ぶ呪いだったのだ。",
						"chinese": "不…这不是怜悯。这是招致毁灭的诅咒。",
						"french": "Non… ce n'était pas de la pitié. C'était une malédiction qui appelait à la destruction.",
						"spanish": "No... esto no era piedad. Era una maldición que invocaba la destrucción.",
						"vietnamese": "Không… đây không phải là lòng trắc ẩn. Mà là một lời nguyền triệu hồi sự hủy diệt.",
						"thai": "ไม่สิ... นี่ไม่ใช่ความสงสาร มันคือคำสาปที่เรียกหาความพินาศต่างหาก",
						"hindi": "नहीं... यह दया नहीं थी। यह विनाश को बुलाने वाला अभिशाप था।"
					},
					"speaker": "hild"
				},
				{
					"content": {
						"korean": "하하하! 깨달음이 늦었구나! 이제 너희 모두 나의 일부가 될 것이다!",
						"english": "Hahaha! Too late for enlightenment! Now, all of you shall become part of me!",
						"japanese": "ハハハ！悟りが遅かったな！今やお前たち全員、私の一部となるのだ！",
						"chinese": "哈哈哈！领悟得太晚了！现在你们都将成为我的一部分！",
						"french": "Hahaha ! Trop tard pour comprendre ! Maintenant, vous ferez tous partie de moi !",
						"spanish": "¡Jajaja! ¡Tarde para darte cuenta! ¡Ahora, todos vosotros seréis parte de mí!",
						"vietnamese": "Hahaha! Giác ngộ muộn rồi! Giờ thì tất cả các ngươi sẽ trở thành một phần của ta!",
						"thai": "ฮ่าฮ่าฮ่า! รู้ตัวช้าไปแล้ว! ตอนนี้พวกเจ้าทุกคนจะต้องกลายเป็นส่วนหนึ่งของข้า!",
						"hindi": "हाहाहा! बहुत देर कर दी समझने में! अब तुम सब मेरे हिस्से बनोगे!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "힐드의 연민이… 모자를 폭주하게 만들었어!",
						"english": "Hilde's pity... made the hat go berserk!",
						"japanese": "ヒルデの憐憫が…帽子を暴走させた！",
						"chinese": "希尔德的怜悯…让帽子失控了！",
						"french": "La pitié d'Hilde... a rendu le chapeau fou !",
						"spanish": "¡La piedad de Hilde... hizo que el sombrero se volviera loco!",
						"vietnamese": "Lòng trắc ẩn của Hilde… đã khiến chiếc mũ hóa điên!",
						"thai": "ความสงสารของฮิลด์... ทำให้หมวกคลุ้มคลั่ง!",
						"hindi": "हिल्डे की दया... ने टोपी को बेकाबू कर दिया!"
					}
				},
				{
					"content": {
						"korean": "전투 준비! 물러설 곳은 없어!",
						"english": "Prepare for battle! There's no turning back!",
						"japanese": "戦闘準備！後戻りはできない！",
						"chinese": "准备战斗！没有退路！",
						"french": "Préparez-vous au combat ! Impossible de reculer !",
						"spanish": "¡Preparaos para la batalla! ¡No hay retirada!",
						"vietnamese": "Chuẩn bị chiến đấu! Không có đường lùi!",
						"thai": "เตรียมพร้อมรบ! ไม่มีที่ให้ถอย!",
						"hindi": "युद्ध के लिए तैयार हो जाओ! पीछे हटने की जगह नहीं है!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "크윽… 따뜻함… 나는 그저… 따뜻함이 필요했을 뿐…!",
						"english": "Ugh... warmth... I just... needed warmth...!",
						"japanese": "くっ…温かさ…私はただ…温かさが必要だっただけだ…！",
						"chinese": "呃…温暖…我只是…需要温暖…！",
						"french": "Ugh… la chaleur… J'avais juste… besoin de chaleur… !",
						"spanish": "Ugh... calidez... Yo solo... necesitaba calidez...!",
						"vietnamese": "Khụ… sự ấm áp… Ta chỉ… cần sự ấm áp mà thôi…!",
						"thai": "อึก... ความอบอุ่น... ฉันแค่... ต้องการความอบอุ่นเท่านั้น...!",
						"hindi": "उफ़... गर्माहट... मुझे बस... गर्माहट चाहिए थी...!"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "그 절규가… 파괴로 변할 줄이야….",
						"english": "That scream... turned into destruction...",
						"japanese": "あの叫びが…破壊に変わるとは…。",
						"chinese": "那尖叫…竟然变成了毁灭…。",
						"french": "Ce cri… s'est transformé en destruction…",
						"spanish": "Ese grito... se convirtió en destrucción...",
						"vietnamese": "Tiếng thét đó… lại biến thành sự hủy diệt…",
						"thai": "เสียงกรีดร้องนั้น... กลายเป็นความพินาศไปเสียแล้ว...",
						"hindi": "वह चीख... विनाश में बदल गई..."
					},
					"speaker": "hild"
				},
				{
					"content": {
						"korean": "모자의 저주가… 잠시 멈춘 건가?",
						"english": "The hat's curse... has it paused?",
						"japanese": "帽子の呪いが…一時的に止まったのか？",
						"chinese": "帽子的诅咒…暂时停止了吗？",
						"french": "La malédiction du chapeau... s'est-elle arrêtée un instant ?",
						"spanish": "¿La maldición del sombrero... se ha detenido por un momento?",
						"vietnamese": "Lời nguyền của chiếc mũ... đã tạm dừng ư?",
						"thai": "คำสาปของหมวก... หยุดลงชั่วคราวหรือ?",
						"hindi": "टोपी का श्राप... क्या यह कुछ देर के लिए रुक गया है?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "차가운 진실은 더 깊은 어둠 속으로 이어졌다. 저주는 끝나지 않았다.",
						"english": "The cold truth led to deeper darkness. The curse is not over.",
						"japanese": "冷たい真実はより深い闇へと続いた。呪いは終わっていなかった。",
						"chinese": "冰冷的真相引向更深的黑暗。诅咒并未结束。",
						"french": "La froide vérité menait à des ténèbres plus profondes. La malédiction n'était pas terminée.",
						"spanish": "La fría verdad condujo a una oscuridad más profunda. La maldición no había terminado.",
						"vietnamese": "Sự thật lạnh lùng dẫn lối đến bóng tối sâu thẳm hơn. Lời nguyền chưa kết thúc.",
						"thai": "ความจริงอันเยือกเย็นนำไปสู่ความมืดมิดที่ลึกซึ้งยิ่งกว่า คำสาปยังไม่สิ้นสุด",
						"hindi": "ठंडी सच्चाई और गहरे अंधकार में ले गई। श्राप खत्म नहीं हुआ था।"
					},
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "내 안에 갇혔던 절규가… 드디어 터져 나온다!",
						"english": "The scream trapped within me... finally bursts forth!",
						"japanese": "私の中に閉じ込められていた叫びが…ついに爆発する！",
						"chinese": "被困在我体内的尖叫…终于爆发了！",
						"french": "Le cri piégé en moi... éclate enfin !",
						"spanish": "¡El grito atrapado en mi interior... finalmente estalla!",
						"vietnamese": "Tiếng thét bị kìm nén trong ta… cuối cùng cũng bùng nổ!",
						"thai": "เสียงกรีดร้องที่ถูกขังอยู่ข้างในตัวฉัน... ในที่สุดก็ปะทุออกมา!",
						"hindi": "मेरे अंदर दबी चीख... आखिरकार बाहर निकल रही है!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "이 모든 건… 너희의 연민 때문이야!",
						"english": "All of this... is because of your pity!",
						"japanese": "この全ては…お前たちの憐憫のせいだ！",
						"chinese": "这一切…都是因为你们的怜悯！",
						"french": "Tout cela... est à cause de votre pitié !",
						"spanish": "¡Todo esto... es por vuestra piedad!",
						"vietnamese": "Tất cả những điều này… là vì lòng trắc ẩn của các ngươi!",
						"thai": "ทั้งหมดนี้... ก็เพราะความสงสารของพวกเจ้า!",
						"hindi": "यह सब... तुम्हारी दया के कारण है!"
					},
					"speaker": "random_boss"
				},
				{
					"action": "enter",
					"spot": [
						5,
						2
					],
					"speaker": "hild",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "…나의 어리석음이… 이 비극을 완성했군.",
						"english": "...My foolishness... has completed this tragedy.",
						"japanese": "…私の愚かさが…この悲劇を完成させたのだ。",
						"chinese": "…我的愚蠢…完成了这场悲剧。",
						"french": "...Ma folie... a achevé cette tragédie.",
						"spanish": "...Mi necedad... ha completado esta tragedia.",
						"vietnamese": "...Sự ngu xuẩn của ta… đã hoàn thành bi kịch này.",
						"thai": "...ความโง่เขลาของฉัน... ได้ทำให้โศกนาฏกรรมนี้สมบูรณ์แล้ว",
						"hindi": "...मेरी मूर्खता... ने इस त्रासदी को पूरा कर दिया।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "hild"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "후회는 나중에 해. 지금은 막아야 해!",
						"english": "Regret later. We must stop it now!",
						"japanese": "後悔は後だ。今は止めなければ！",
						"chinese": "悔恨留到以后。现在必须阻止它！",
						"french": "Le regret viendra plus tard. Il faut l'arrêter maintenant !",
						"spanish": "Arrepiéntete después. ¡Ahora hay que detenerlo!",
						"vietnamese": "Hối tiếc sau. Bây giờ phải ngăn chặn!",
						"thai": "ค่อยเสียใจทีหลัง ตอนนี้ต้องหยุดมัน!",
						"hindi": "पछतावा बाद में करना। अभी रोकना होगा!"
					},
					"emotion": "angry",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "어리석은 것들! 너희의 연약함이 나를 영원히 지배할 것이다!",
						"english": "Fools! Your weakness shall forever empower me!",
						"japanese": "愚かな者たちめ！お前たちの脆弱さが、永遠に我を支配するだろう！",
						"chinese": "愚蠢的东西！你们的软弱将永远支配我！",
						"french": "Idiots ! Votre faiblesse me dominera pour toujours !",
						"spanish": "¡Necios! ¡Vuestra debilidad me dominará para siempre!",
						"vietnamese": "Những kẻ ngu xuẩn! Sự yếu đuối của các ngươi sẽ mãi mãi thống trị ta!",
						"thai": "เจ้าพวกโง่เขลา! ความอ่อนแอของพวกเจ้าจะครอบงำข้าไปตลอดกาล!",
						"hindi": "मूर्खों! तुम्हारी कमज़ोरी मुझ पर हमेशा राज करेगी!"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "hild",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "아직 끝나지 않았어… 나의 실수를… 바로잡아야 해.",
						"english": "It's not over... I must... correct my mistake.",
						"japanese": "まだ終わってない…我が過ちを…正さねば。",
						"chinese": "还没结束…我必须…弥补我的错误。",
						"french": "Ce n'est pas encore fini... Je dois... corriger mon erreur.",
						"spanish": "Aún no ha terminado... Debo... corregir mi error.",
						"vietnamese": "Chưa kết thúc... Ta phải... sửa chữa lỗi lầm của mình.",
						"thai": "ยังไม่จบ... ข้าต้อง... แก้ไขความผิดพลาดของข้า",
						"hindi": "अभी खत्म नहीं हुआ है... मुझे अपनी गलती... सुधारनी होगी।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "다시… 한번.",
						"english": "Again... just once more.",
						"japanese": "もう一度…",
						"chinese": "再来…一次。",
						"french": "Encore... une fois.",
						"spanish": "De nuevo... una vez más.",
						"vietnamese": "Lại... một lần nữa.",
						"thai": "อีกครั้ง... แค่ครั้งเดียว",
						"hindi": "फिर से… एक बार।"
					},
					"speaker": "character_any"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"북방의 얼어붙은 설원, 그 깊은 곳에서.",
			"신비주의자 힐드는 비극의 전조를 감지했다.",
			"낡은 모자의 투정은 외로움의 비명.",
			"그러나 연민은, 때로 가장 잔혹한 파멸을 부른다."
		],
		"english": [
			"In the heart of the frozen northern plains.",
			"Hild the mystic sensed a prelude to tragedy.",
			"The old hat's grumbling was a cry of loneliness.",
			"Yet, compassion sometimes invites the cruellest ruin."
		],
		"japanese": [
			"北の凍てつく雪原、その深奥で。",
			"神秘主義者ヒルデは悲劇の予兆を感知した。",
			"古い帽子の不平は、孤独の叫び。",
			"しかし、憐憫は時に最も残酷な破滅を招く。"
		],
		"chinese": [
			"在北方冰封雪原的深处。",
			"神秘主义者希尔德感应到了悲剧的前兆。",
			"旧帽子的抱怨，是孤独的嘶吼。",
			"然而，怜悯有时会招致最残酷的毁灭。"
		],
		"french": [
			"Au cœur des plaines gelées du nord.",
			"Hilde la mystique pressentit un prélude à la tragédie.",
			"Les plaintes du vieux chapeau étaient un cri de solitude.",
			"Pourtant, la compassion mène parfois à la ruine la plus cruelle."
		],
		"spanish": [
			"En lo profundo de las llanuras heladas del norte.",
			"Hild, la mística, sintió un preludio a la tragedia.",
			"Los lamentos del viejo sombrero eran un grito de soledad.",
			"Sin embargo, la compasión a veces atrae la ruina más cruel."
		],
		"vietnamese": [
			"Tại nơi sâu thẳm của vùng tuyết nguyên băng giá phía Bắc.",
			"Hild, nhà huyền môn, cảm nhận được điềm báo bi kịch.",
			"Lời than vãn của chiếc mũ cũ là tiếng kêu của sự cô đơn.",
			"Tuy nhiên, lòng trắc ẩn đôi khi lại dẫn đến sự hủy diệt tàn khốc nhất."
		],
		"thai": [
			"ณ ใจกลางทุ่งหิมะเยือกแข็งทางเหนือ",
			"ฮิลด์ นักเวทมนตร์ สัมผัสได้ถึงลางร้ายของโศกนาฏกรรม",
			"เสียงบ่นของหมวกเก่าคือเสียงกรีดร้องของความเหงา",
			"ทว่า ความสงสารบางครั้งกลับนำมาซึ่งความพินาศที่โหดร้ายที่สุด"
		],
		"hindi": [
			"उत्तरी बर्फीले मैदानों के हृदय में।",
			"रहस्यवादी हिल्ड ने त्रासदी की प्रस्तावना महसूस की।",
			"पुरानी टोपी की शिकायतें अकेलेपन की चीख थीं।",
			"फिर भी, करुणा कभी-कभी सबसे क्रूर विनाश को आमंत्रित करती है।"
		]
	}
} as const;
