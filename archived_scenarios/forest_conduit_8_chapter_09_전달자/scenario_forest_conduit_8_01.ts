export const scenario_forest_conduit_8_01 = {
	"scenario_id": "forest_conduit_8_01",
	"order": 1,
	"act": "intro",
	"theme": "forest",
	"actors": {
		"ivy": {
			"id": "mon_d1c759f3-74f8-42b7-ba16-c705649f006f",
			"name": {
				"korean": "아이비",
				"english": "Ivy",
				"japanese": "アイビー",
				"chinese": "艾薇",
				"french": "Ivy",
				"spanish": "Ivy",
				"vietnamese": "Ivy",
				"thai": "ไอวี่",
				"hindi": "आइवी"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/654fde54-6029-4601-b4a8-0578f00df900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/6ee8738d-0e14-4f8d-d04d-c934b0fff000/public"
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
						"korean": "숲의 짙은 어둠. 소문만 무성한 곳이다.",
						"english": "The deep darkness of the forest. A place full of rumors.",
						"japanese": "森の深い闇。噂だけが蔓延る場所だ。",
						"chinese": "森林深处的黑暗。一个谣言四起的地方。",
						"french": "L'obscurité profonde de la forêt. Un endroit plein de rumeurs.",
						"spanish": "La oscuridad profunda del bosque. Un lugar lleno de rumores.",
						"vietnamese": "Bóng tối sâu thẳm của rừng. Một nơi đầy rẫy tin đồn.",
						"thai": "ความมืดมิดของป่า สถานที่ที่เต็มไปด้วยข่าวลือ",
						"hindi": "जंगल का गहरा अंधेरा। अफवाहों से भरी जगह।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "여기가 그 소식통이 있다는 곳인가?",
						"english": "Is this where the informant is?",
						"japanese": "ここがその情報屋がいる場所か？",
						"chinese": "这里就是那个消息来源所在的地方吗？",
						"french": "C'est ici que se trouve l'informateur ?",
						"spanish": "¿Es aquí donde está el informante?",
						"vietnamese": "Đây có phải nơi có kẻ cung cấp thông tin không?",
						"thai": "ที่นี่คือที่ที่สายข่าวอยู่ใช่ไหม?",
						"hindi": "क्या यहीं पर वह मुखबिर है?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"speaker": "ivy",
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "ivy",
					"content": {
						"korean": "그래. 모든 비밀을 안다는 자.",
						"english": "Yes. The one who knows all secrets.",
						"japanese": "そうだ。すべての秘密を知る者。",
						"chinese": "是的。那个知道所有秘密的人。",
						"french": "Oui. Celui qui connaît tous les secrets.",
						"spanish": "Sí. El que conoce todos los secretos.",
						"vietnamese": "Đúng vậy. Kẻ biết mọi bí mật.",
						"thai": "ใช่ ผู้ที่รู้ความลับทั้งหมด",
						"hindi": "हाँ। वह जो सारे रहस्य जानता है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "ivy",
					"emotion": "base",
					"content": {
						"korean": "하지만 댓가는 확실히 치러야 할 거야.",
						"english": "But you'll definitely have to pay the price.",
						"japanese": "しかし、代償は確実に支払うことになるだろう。",
						"chinese": "但你肯定要付出代价。",
						"french": "Mais tu devras certainement en payer le prix.",
						"spanish": "Pero sin duda tendrás que pagar el precio.",
						"vietnamese": "Nhưng chắc chắn ngươi sẽ phải trả giá.",
						"thai": "แต่คุณจะต้องจ่ายราคาอย่างแน่นอน",
						"hindi": "पर तुम्हें कीमत ज़रूर चुकानी पड़ेगी।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "댓가?",
						"english": "Price?",
						"japanese": "代償？",
						"chinese": "代价？",
						"french": "Prix ?",
						"spanish": "¿Precio?",
						"vietnamese": "Giá ư?",
						"thai": "ราคา?",
						"hindi": "कीमत?"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…내가 본 사람들은, 하나같이 무언가를 잃고 돌아왔어.",
						"english": "...Everyone I've seen has come back having lost something.",
						"japanese": "「…私が会った者たちは、皆何かを失って戻ってきた。」",
						"chinese": "“……我见过的人，无一例外都失去了什么，然后回来了。”",
						"french": "...Tous ceux que j'ai vus sont revenus, ayant perdu quelque chose.",
						"spanish": "...Todas las personas que he visto han regresado habiendo perdido algo.",
						"vietnamese": "...Những người tôi từng gặp, ai cũng trở về sau khi mất đi thứ gì đó.",
						"thai": "...ทุกคนที่ข้าเห็น ล้วนกลับมาพร้อมกับบางสิ่งที่หายไป",
						"hindi": "...जो भी लोग मैंने देखे हैं, हर कोई कुछ-न-कुछ खोकर ही लौटा है।"
					},
					"speaker": "ivy"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 450,
					"speaker": "ivy",
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "ivy",
					"content": {
						"korean": "조심해. 왠지 모르게 음산한 기운이 느껴져.",
						"english": "Be careful. I sense an eerie presence.",
						"japanese": "「気をつけろ。どうも不気味な気配がする。」",
						"chinese": "“小心。总觉得有股阴森的气息。”",
						"french": "Fais attention. Je ressens une présence sinistre.",
						"spanish": "Ten cuidado. Siento una presencia espeluznante.",
						"vietnamese": "Cẩn thận. Tôi cảm thấy một luồng khí âm u không rõ nguyên nhân.",
						"thai": "ระวังตัว มีสัมผัสถึงบางอย่างที่น่าขนลุก",
						"hindi": "सावधान रहना। मुझे एक अजीब सी भयावह उपस्थिति महसूस हो रही है।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "기분 탓이겠지.",
						"english": "Must be my imagination.",
						"japanese": "「気のせいだろう。」",
						"chinese": "“大概是错觉吧。”",
						"french": "Ça doit être mon imagination.",
						"spanish": "Debe ser mi imaginación.",
						"vietnamese": "Chắc là do mình tưởng tượng thôi.",
						"thai": "คงคิดไปเองล่ะมั้ง",
						"hindi": "शायद यह मेरा वहम है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "음습한 기운이 숲을 감싼다. 존재가 느껴진다.",
						"english": "A chilling aura envelops the forest. A presence is felt.",
						"japanese": "「陰鬱な気が森を包む。存在を感じる。」",
						"chinese": "“阴森的气息笼罩着森林。能感受到某种存在。”",
						"french": "Une aura sinistre enveloppe la forêt. Une présence se fait sentir.",
						"spanish": "Un aura sombría envuelve el bosque. Se siente una presencia.",
						"vietnamese": "Một luồng khí âm u bao trùm khu rừng. Cảm nhận được một sự tồn tại.",
						"thai": "บรรยากาศอึมครึมปกคลุมป่า สัมผัสได้ถึงบางสิ่ง",
						"hindi": "एक भयानक आभा जंगल को घेरे हुए है। किसी की उपस्थिति महसूस होती है।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "…왔군. 알고 있었다.",
						"english": "...They've come. I knew it.",
						"japanese": "「…来たな。分かっていた。」",
						"chinese": "“……来了。我早就知道了。”",
						"french": "...Ils sont là. Je le savais.",
						"spanish": "...Han llegado. Lo sabía.",
						"vietnamese": "...Đã đến rồi. Tôi biết mà.",
						"thai": "...มาแล้วสินะ ข้ารู้แล้ว",
						"hindi": "...आ गए। मुझे पता था।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "네가 그 소식통이냐?",
						"english": "Are you the informant?",
						"japanese": "「お前があの情報屋か？」",
						"chinese": "“你就是那个消息灵通人士吗？”",
						"french": "Es-tu l'informateur ?",
						"spanish": "¿Eres el informante?",
						"vietnamese": "Ngươi là nguồn tin đó sao?",
						"thai": "เจ้าคือผู้ให้ข่าวสารหรือ",
						"hindi": "क्या तुम वही खबर देने वाले हो?"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "정보가 필요하나? 세상의 모든 비밀을 알고 있지.",
						"english": "Need information? I know all the world's secrets.",
						"japanese": "「情報が必要か？世界のあらゆる秘密を知っている。」",
						"chinese": "“需要情报吗？我知晓世间所有秘密。”",
						"french": "Besoin d'informations ? Je connais tous les secrets du monde.",
						"spanish": "¿Necesitas información? Conozco todos los secretos del mundo.",
						"vietnamese": "Cần thông tin sao? Ta biết tất cả bí mật của thế gian.",
						"thai": "ต้องการข้อมูลหรือ ข้ารู้ความลับทุกอย่างในโลกนี้",
						"hindi": "क्या तुम्हें जानकारी चाहिए? मैं दुनिया के सभी रहस्य जानता हूँ।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "물론, 댓가는 치러야 한다.",
						"english": "Of course, a price must be paid.",
						"japanese": "「もちろん、代償は払ってもらう。」",
						"chinese": "“当然，你需要付出代价。”",
						"french": "Bien sûr, un prix doit être payé.",
						"spanish": "Por supuesto, hay que pagar un precio.",
						"vietnamese": "Đương nhiên, ngươi phải trả giá.",
						"thai": "แน่นอน ต้องแลกด้วยสิ่งตอบแทน",
						"hindi": "बेशक, कीमत चुकानी होगी।"
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
					"duration_ms": 550,
					"speaker": "ivy",
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "저 자는… 어딘가 섬뜩해.",
						"english": "That person... is somehow eerie.",
						"japanese": "「あの男は…どこか不気味だ。」",
						"chinese": "“那个人……总觉得有点可怕。”",
						"french": "Cette personne... est étrange.",
						"spanish": "Esa persona... es de alguna manera espeluznante.",
						"vietnamese": "Người đó... thật đáng sợ ở một khía cạnh nào đó.",
						"thai": "คนผู้นั้น...น่าขนลุกชอบกล",
						"hindi": "वह व्यक्ति... कहीं-न-कहीं भयावह है।"
					},
					"emotion": "sad",
					"speaker": "ivy",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "왜?",
						"english": "Why?",
						"japanese": "「なぜ？」",
						"chinese": "“为什么？”",
						"french": "Pourquoi ?",
						"spanish": "¿Por qué?",
						"vietnamese": "Tại sao?",
						"thai": "ทำไม",
						"hindi": "क्यों?"
					},
					"type": "speech"
				},
				{
					"speaker": "ivy",
					"emotion": "sad",
					"content": {
						"korean": "그의 눈을 봐. 아무것도 비치지 않아. 마치… 영혼이 없는 것 같아.",
						"english": "Look at his eyes. They reflect nothing. It's like... he has no soul.",
						"japanese": "彼の目を見て。何も映っていない。まるで…魂がないみたいだ。",
						"chinese": "看看他的眼睛。什么都没有映照出来。就好像……没有灵魂一样。",
						"french": "Regarde ses yeux. Ils ne reflètent rien. C'est comme s'il... n'avait pas d'âme.",
						"spanish": "Mira sus ojos. No reflejan nada. Es como si... no tuviera alma.",
						"vietnamese": "Nhìn vào mắt hắn đi. Không có gì phản chiếu cả. Cứ như… hắn không có linh hồn vậy.",
						"thai": "มองตาเขา ไม่มีอะไรสะท้อนเลย ราวกับว่า... เขาไม่มีวิญญาณ",
						"hindi": "उसकी आँखें देखो। कुछ भी नहीं दिख रहा। जैसे... उसमें कोई आत्मा ही न हो।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "망설일 시간이 없다. 원하는 정보를 말해라.",
						"english": "No time to hesitate. State the information you desire.",
						"japanese": "躊躇している暇はない。求める情報を話せ。",
						"chinese": "没有时间犹豫了。说出你想要的信息。",
						"french": "Pas le temps d'hésiter. Dis-moi les informations que tu désires.",
						"spanish": "No hay tiempo para dudar. Di la información que deseas.",
						"vietnamese": "Không còn thời gian để do dự. Hãy nói ra thông tin ngươi muốn.",
						"thai": "ไม่มีเวลาลังเล บอกข้อมูลที่ต้องการมา",
						"hindi": "संकोच का समय नहीं है। जो जानकारी चाहिए, बताओ।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "섣불리 거래하지 마. 잃고 싶지 않은 것을 내줄 수도 있어.",
						"english": "Don't make rash deals. You might give away something you don't want to lose.",
						"japanese": "軽率な取引をするな。失いたくないものを手放すことになるかもしれない。",
						"chinese": "不要草率交易。你可能会失去不想失去的东西。",
						"french": "Ne fais pas d'affaires hâtives. Tu pourrais donner quelque chose que tu ne veux pas perdre.",
						"spanish": "No hagas tratos precipitados. Podrías entregar algo que no quieres perder.",
						"vietnamese": "Đừng giao dịch hấp tấp. Ngươi có thể đánh mất thứ mà ngươi không muốn.",
						"thai": "อย่ารีบร้อนทำข้อตกลง เจ้าอาจจะเสียสิ่งที่ไม่อยากเสียไปก็ได้",
						"hindi": "जल्दबाजी में सौदा मत करो। तुम कुछ ऐसा खो सकते हो जो तुम खोना नहीं चाहते।"
					},
					"speaker": "ivy",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"duration_ms": 600,
					"speaker": "ivy"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이제 뭘 얻을 수 있지?",
						"english": "What can I gain now?",
						"japanese": "今、何が得られる？",
						"chinese": "现在我能得到什么？",
						"french": "Qu'est-ce que je peux obtenir maintenant ?",
						"spanish": "¿Qué puedo obtener ahora?",
						"vietnamese": "Bây giờ ta có thể nhận được gì?",
						"thai": "ตอนนี้ฉันจะได้อะไรบ้าง?",
						"hindi": "अब मुझे क्या मिल सकता है?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "너희가 찾는 진실은… 이미 내 손에 있다.",
						"english": "The truth you seek... is already in my hands.",
						"japanese": "お前たちが探している真実は…すでに私の手の中にある。",
						"chinese": "你们所寻求的真相……已在我手中。",
						"french": "La vérité que vous cherchez... est déjà entre mes mains.",
						"spanish": "La verdad que buscáis... ya está en mis manos.",
						"vietnamese": "Sự thật các ngươi tìm kiếm… đã nằm trong tay ta.",
						"thai": "ความจริงที่พวกเจ้าตามหา... อยู่ในมือข้าแล้ว",
						"hindi": "जिस सच्चाई की तुम तलाश कर रहे हो... वह पहले से ही मेरे हाथों में है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "ivy",
					"content": {
						"korean": "그 말에 현혹되지 마! 저 자는…",
						"english": "Don't be swayed by his words! He is...",
						"japanese": "その言葉に惑わされるな！あの者は…",
						"chinese": "不要被他的话迷惑！那家伙是……",
						"french": "Ne te laisse pas séduire par ses mots ! Cet homme est...",
						"spanish": "¡No te dejes engañar por sus palabras! Él es...",
						"vietnamese": "Đừng bị lời hắn mê hoặc! Hắn ta là…",
						"thai": "อย่าหลงกลคำพูดของเขา! เขาคือ...",
						"hindi": "उसकी बातों में मत आना! वह..."
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "침묵해라, 하찮은 것.",
						"english": "Silence, you insignificant being.",
						"japanese": "黙れ、下劣な者。",
						"chinese": "闭嘴，渺小的东西。",
						"french": "Silence, être insignifiant.",
						"spanish": "Silencio, criatura insignificante.",
						"vietnamese": "Câm mồm đi, đồ hèn mọn.",
						"thai": "เงียบซะ เจ้าสิ่งไร้ค่า",
						"hindi": "चुप रहो, तुच्छ प्राणी।"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "이제 물러설 수 없다. 너희는 이미 내 세상에 들어왔다.",
						"english": "There's no turning back now. You've already entered my world.",
						"japanese": "もう後には引けない。お前たちはすでに私の世界に入り込んでいる。",
						"chinese": "现在无法回头了。你们已经进入了我的世界。",
						"french": "Il n'y a plus de retour en arrière. Vous êtes déjà entrés dans mon monde.",
						"spanish": "Ya no hay vuelta atrás. Habéis entrado ya en mi mundo.",
						"vietnamese": "Không thể lùi bước nữa rồi. Các ngươi đã bước vào thế giới của ta.",
						"thai": "ไม่มีทางย้อนกลับแล้ว พวกเจ้าเข้ามาในโลกของข้าแล้ว",
						"hindi": "अब पीछे नहीं हट सकते। तुम पहले ही मेरी दुनिया में आ चुके हो।"
					}
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "거대한 그림자가 사라졌다. 숲은 잠시 침묵에 잠겼다.",
						"english": "The giant shadow vanished. The forest fell silent for a moment.",
						"japanese": "「巨大な影が消えた。森は一時、静寂に包まれた。」",
						"chinese": "巨大的影子消失了。森林短暂地陷入了沉默。",
						"french": "L'ombre géante a disparu. La forêt s'est tue un instant.",
						"spanish": "La sombra gigante desapareció. El bosque se sumió en el silencio por un momento.",
						"vietnamese": "Cái bóng khổng lồ biến mất. Khu rừng chìm vào im lặng trong chốc lát.",
						"thai": "เงาขนาดใหญ่หายไป ป่าจมอยู่ในความเงียบงันชั่วขณะ",
						"hindi": "विशाल छाया गायब हो गई। जंगल एक पल के लिए खामोशी में डूब गया।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "크크… 이건 시작에 불과해. 너희가 잃은 것을… 후회하게 될 거다.",
						"english": "Heh heh… This is just the beginning. You will regret what you've lost…",
						"japanese": "「クク…これは始まりに過ぎない。お前たちが失ったものを…後悔することになるだろう。」",
						"chinese": "呵呵……这只是个开始。你们会为所失去的一切……后悔的。",
						"french": "Hé hé… Ce n'est que le début. Vous regretterez ce que vous avez perdu…",
						"spanish": "Je je… Esto es solo el principio. Lamentaréis lo que habéis perdido…",
						"vietnamese": "Khà khà… Đây chỉ là khởi đầu thôi. Ngươi sẽ phải hối hận về những gì đã mất…",
						"thai": "ฮ่าฮ่า…นี่เป็นเพียงจุดเริ่มต้นเท่านั้น เจ้าจะต้องเสียใจกับสิ่งที่สูญเสียไป…",
						"hindi": "हहह… यह तो बस शुरुआत है। तुम जो खो चुके हो… उस पर पछताओगे।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "잃은 것? 무슨 소리야?",
						"english": "Lost what? What are you talking about?",
						"japanese": "「失ったもの？どういうことだ？」",
						"chinese": "失去的？你在说什么？",
						"french": "Perdu quoi ? De quoi parlez-vous ?",
						"spanish": "¿Perdido qué? ¿De qué hablas?",
						"vietnamese": "Mất gì cơ? Ngươi đang nói gì vậy?",
						"thai": "สูญเสียอะไร? คุณกำลังพูดถึงอะไร?",
						"hindi": "क्या खो दिया? तुम क्या कह रहे हो?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "ivy",
					"spot": [
						4,
						3
					],
					"duration_ms": 400,
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "정보를 얻었지만… 무언가 중요한 것을 잊은 것 같아.",
						"english": "We gained information, but… it feels like we forgot something important.",
						"japanese": "「情報を得たが…何か重要なことを忘れたような気がする。」",
						"chinese": "虽然获得了情报……但好像忘记了什么重要的东西。",
						"french": "Nous avons obtenu des informations, mais… nous avons l'impression d'avoir oublié quelque chose d'important.",
						"spanish": "Obtuvimos información, pero… siento que hemos olvidado algo importante.",
						"vietnamese": "Chúng ta đã có thông tin, nhưng… dường như chúng ta đã quên mất điều gì đó quan trọng.",
						"thai": "เราได้รับข้อมูลแล้ว แต่…รู้สึกเหมือนลืมอะไรสำคัญไป",
						"hindi": "जानकारी तो मिल गई, लेकिन… लगता है कुछ महत्वपूर्ण भूल गए।"
					},
					"speaker": "ivy"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "그들은 알지 못했다. 거래의 댓가가 무엇이었는지. 숲은 다시 어둠 속에 잠겼다.",
						"english": "They didn't know. What the cost of the bargain was. The forest fell back into darkness.",
						"japanese": "「彼らは知らなかった。取引の代償が何であったかを。森は再び闇に包まれた。」",
						"chinese": "他们并不知道。那场交易的代价是什么。森林再次陷入黑暗。",
						"french": "Ils ne savaient pas. Quel était le prix de la transaction. La forêt replongea dans l'obscurité.",
						"spanish": "No lo sabían. Cuál era el precio del trato. El bosque volvió a sumirse en la oscuridad.",
						"vietnamese": "Họ không biết. Cái giá của giao dịch là gì. Khu rừng lại chìm vào bóng tối.",
						"thai": "พวกเขาไม่รู้ว่าราคาของการต่อรองคืออะไร ป่ากลับเข้าสู่ความมืดมิดอีกครั้ง",
						"hindi": "उन्हें पता नहीं था। सौदे की कीमत क्या थी। जंगल फिर से अंधेरे में डूब गया।"
					}
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "드디어 여기까지 왔군. …재밌는 자들이야.",
						"english": "So you've finally made it here. ...Interesting individuals.",
						"japanese": "ついにここまで来たか。…面白い奴らだ。",
						"chinese": "你们终于到这儿了。……有趣的人。",
						"french": "Vous êtes enfin arrivés ici. ...Des individus intéressants.",
						"spanish": "Por fin habéis llegado hasta aquí. ...Gente interesante.",
						"vietnamese": "Cuối cùng cũng đến được đây rồi. …Thật là những kẻ thú vị.",
						"thai": "ในที่สุดก็มาถึงที่นี่... ช่างเป็นพวกที่น่าสนใจ",
						"hindi": "तो तुम आखिरकार यहाँ आ ही गए। ...दिलचस्प लोग हो।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "뭘 원해? 우리에게서 뭘 가져갈 셈이야?",
						"english": "What do you want? What do you intend to take from us?",
						"japanese": "何が望みだ？我々から何を奪うつもりだ？",
						"chinese": "你想要什么？打算从我们这里拿走什么？",
						"french": "Que voulez-vous ? Qu'avez-vous l'intention de nous prendre ?",
						"spanish": "¿Qué quieres? ¿Qué piensas quitarnos?",
						"vietnamese": "Ngươi muốn gì? Ngươi định lấy gì từ chúng ta?",
						"thai": "เจ้าต้องการอะไร? เจ้าคิดจะเอาอะไรไปจากพวกเรา?",
						"hindi": "तुम्हें क्या चाहिए? हमसे क्या छीनने का इरादा है?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "너희의… 모든 것.",
						"english": "Your… everything.",
						"japanese": "「お前たちの…全て。」",
						"chinese": "你们的……所有一切。",
						"french": "Votre… tout.",
						"spanish": "Vuestro… todo.",
						"vietnamese": "Tất cả… của các ngươi.",
						"thai": "ทุกสิ่ง…ของพวกเจ้า",
						"hindi": "तुम्हारा… सब कुछ।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"speaker": "ivy"
				},
				{
					"content": {
						"korean": "안 돼! 싸우지 마! 댓가가 너무 커질 거야!",
						"english": "No! Don't fight! The cost will be too great!",
						"japanese": "「やめろ！戦うな！代償が大きすぎる！」",
						"chinese": "不！别打了！代价会太大的！",
						"french": "Non ! Ne vous battez pas ! Le prix sera trop lourd !",
						"spanish": "¡No! ¡No luchéis! ¡El coste será demasiado alto!",
						"vietnamese": "Không! Đừng đánh nhau! Cái giá phải trả sẽ quá lớn!",
						"thai": "ไม่นะ! อย่าสู้! ค่าตอบแทนจะมากเกินไป!",
						"hindi": "नहीं! मत लड़ो! कीमत बहुत बड़ी होगी!"
					},
					"emotion": "sad",
					"speaker": "ivy",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "너무 늦었다. 이미 모든 것은 정해졌다.",
						"english": "Too late. Everything is already decided.",
						"japanese": "「もう遅い。全ては既に決まっている。」",
						"chinese": "太迟了。一切都已注定。",
						"french": "Trop tard. Tout est déjà décidé.",
						"spanish": "Demasiado tarde. Todo está ya decidido.",
						"vietnamese": "Đã quá muộn. Mọi thứ đã được định đoạt.",
						"thai": "สายเกินไปแล้ว ทุกสิ่งถูกกำหนดไว้แล้ว",
						"hindi": "बहुत देर हो चुकी है। सब कुछ पहले ही तय हो चुका है।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "숲의 어둠이 모든 것을 삼켰다.",
						"english": "The darkness of the forest swallowed everything.",
						"japanese": "「森の闇が全てを飲み込んだ。」",
						"chinese": "森林的黑暗吞噬了一切。",
						"french": "L'obscurité de la forêt a tout englouti.",
						"spanish": "La oscuridad del bosque lo devoró todo.",
						"vietnamese": "Bóng tối của khu rừng nuốt chửng mọi thứ.",
						"thai": "ความมืดมิดของป่ากลืนกินทุกสิ่ง",
						"hindi": "जंगल के अंधेरे ने सब कुछ निगल लिया।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "어리석은 자들. 네놈들의 정보는 내 것이 되었다.",
						"english": "Fools. Your information is now mine.",
						"japanese": "「愚か者どもめ。貴様らの情報は私のものとなった。」",
						"chinese": "愚蠢的家伙们。你们的情报已经属于我了。",
						"french": "Imbéciles. Vos informations sont maintenant miennes.",
						"spanish": "Tontos. Vuestra información es ahora mía.",
						"vietnamese": "Những kẻ ngốc. Thông tin của các ngươi đã thuộc về ta.",
						"thai": "คนโง่ ข้อมูลของพวกเจ้ากลายเป็นของข้าแล้ว",
						"hindi": "मूर्खों। तुम्हारी जानकारी अब मेरी है।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…젠장. 아직 끝나지 않았어. 다시 돌아올 거다.",
						"english": "...Damn it. It's not over yet. I'll be back.",
						"japanese": "…くそ。まだ終わってない。また戻ってくる。",
						"chinese": "…该死。还没完。我会回来的。",
						"french": "...Mince. Ce n'est pas encore fini. Je reviendrai.",
						"spanish": "...Maldita sea. Todavía no ha terminado. Volveré.",
						"vietnamese": "...Chết tiệt. Vẫn chưa kết thúc đâu. Ta sẽ quay lại.",
						"thai": "...ให้ตายสิ. ยังไม่จบแค่นี้หรอก. ข้าจะกลับมา.",
						"hindi": "...धिक्कार है। अभी खत्म नहीं हुआ है। मैं वापस आऊँगा。"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "기대하마. 다음엔 더 흥미로운 것을 가져와라.",
						"english": "I'll be waiting. Bring something more interesting next time.",
						"japanese": "期待しているぞ。次はもっと面白いものを持ってこい。",
						"chinese": "我拭目以待。下次带来些更有趣的东西吧。",
						"french": "J'attendrai. Apporte-moi quelque chose de plus intéressant la prochaine fois.",
						"spanish": "Estaré esperando. Trae algo más interesante la próxima vez.",
						"vietnamese": "Ta sẽ đợi. Lần sau hãy mang đến thứ gì đó thú vị hơn đi.",
						"thai": "ข้าจะรอ. ครั้งหน้าเอาอะไรที่น่าสนใจกว่านี้มาล่ะ.",
						"hindi": "मैं इंतजार करूँगा। अगली बार कुछ और दिलचस्प लाना।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"숲의 가장 깊은 곳, 비밀을 거래하는 자가 있다.",
			"그는 모든 것을 알지만, 댓가는 아무도 모른다.",
			"길 잃은 자들은 그의 그림자를 쫓아 정보를 구한다.",
			"그 달콤한 유혹 속, 잊혀진 대가를 치르게 될 줄은…",
			"아무도 예상치 못했다."
		],
		"english": [
			"In the deepest part of the forest, there's one who trades secrets.",
			"He knows all, but no one knows the cost.",
			"Lost souls chase his shadow, seeking information.",
			"Amidst that sweet temptation, no one expected to pay a forgotten price...",
			"No one expected it."
		],
		"japanese": [
			"森の最も深い場所、秘密を取引する者がいる。",
			"彼はすべてを知るが、代償は誰も知らない。",
			"道に迷った者たちは、情報を求めて彼の影を追う。",
			"その甘い誘惑の中、忘れられた代償を払うことになるとは…",
			"誰も予想していなかった。"
		],
		"chinese": [
			"在森林最深处，有一个交易秘密的人。",
			"他无所不知，但无人知晓代价。",
			"迷失者追逐他的影子，寻求信息。",
			"在那甜蜜的诱惑中，无人预料会付出被遗忘的代价…",
			"无人预料。"
		],
		"french": [
			"Au plus profond de la forêt, il y a celui qui échange des secrets.",
			"Il sait tout, mais personne ne connaît le prix.",
			"Les âmes perdues poursuivent son ombre, en quête d'informations.",
			"Au milieu de cette douce tentation, personne ne s'attendait à payer un prix oublié...",
			"Personne ne s'y attendait."
		],
		"spanish": [
			"En lo más profundo del bosque, hay quien negocia secretos.",
			"Él lo sabe todo, pero nadie conoce el precio.",
			"Los perdidos persiguen su sombra en busca de información.",
			"En medio de esa dulce tentación, nadie esperaría pagar un precio olvidado...",
			"Nadie lo esperaba."
		],
		"vietnamese": [
			"Trong nơi sâu thẳm nhất của rừng, có kẻ giao dịch bí mật.",
			"Hắn biết mọi thứ, nhưng không ai biết cái giá.",
			"Những kẻ lạc lối đuổi theo bóng hắn, tìm kiếm thông tin.",
			"Giữa cám dỗ ngọt ngào ấy, không ai ngờ sẽ phải trả một cái giá bị lãng quên…",
			"Không ai ngờ tới."
		],
		"thai": [
			"ลึกสุดในป่า มีผู้แลกเปลี่ยนความลับ",
			"เขารู้ทุกอย่าง แต่ไม่มีใครรู้ถึงราคา",
			"ผู้หลงทางไล่ตามเงาของเขา เพื่อแสวงหาข้อมูล",
			"ท่ามกลางการยั่วยวนอันหอมหวานนั้น ไม่มีใครคาดคิดว่าจะต้องชดใช้ราคาที่ถูกลืมเลือน...",
			"ไม่มีใครคาดคิด"
		],
		"hindi": [
			"जंगल के सबसे गहरे हिस्से में, एक रहस्य का व्यापारी है।",
			"वह सब कुछ जानता है, पर कीमत कोई नहीं जानता।",
			"भटके हुए लोग जानकारी पाने के लिए उसकी परछाई का पीछा करते हैं।",
			"उस मधुर लालच के बीच, कोई नहीं जानता था कि उन्हें एक भूली हुई कीमत चुकानी पड़ेगी...",
			"किसी ने उम्मीद नहीं की थी।"
		]
	}
} as const;
