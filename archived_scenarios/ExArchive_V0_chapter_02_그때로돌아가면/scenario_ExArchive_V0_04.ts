export const scenario_ExArchive_V0_04 = {
	"scenario_id": "ExArchive_V0_04",
	"order": 4,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"aria": {
			"id": "mon_c36ce45b-b6aa-47fd-9dd8-e984a5085530",
			"name": {
				"korean": "아리아",
				"english": "Aria",
				"japanese": "アリア",
				"chinese": "艾莉亚",
				"french": "Aria",
				"spanish": "Aria",
				"vietnamese": "Aria",
				"thai": "อาเรีย",
				"hindi": "आरिया"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/1f83cf93-8561-479d-5c2a-73353c055200/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/9fdcd46a-c409-401c-a9ab-ae8878a8b400/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"쌓이는 추억의 무게가 발목을 잡는 동네.",
			"과거는 그림자가 되어, 모든 것을 멈추게 했다.",
			"낡은 사진과 엽서들이 허공을 유영한다.",
			"그리고 — 다정한 목소리가 속삭였다. '돌아가고 싶지 않아?'"
		],
		"english": [
			"A neighborhood where the weight of accumulating memories holds you back.",
			"The past became a shadow, bringing everything to a halt.",
			"Old photos and postcards float in the air.",
			"And — a gentle voice whispered, 'Don't you want to go back?'"
		],
		"japanese": [
			"積み重なる思い出の重さが足枷となる町。",
			"過去は影となり、すべてを止めた。",
			"古い写真と葉書が空中を漂う。",
			"そして――優しい声が囁いた。「帰りたくない？」"
		],
		"chinese": [
			"回忆的重量束缚着双脚的小镇。",
			"过去化作阴影，让一切停滞不前。",
			"旧照片和明信片在空中漂浮。",
			"然后——一个温柔的声音低语道：“你不想回去吗？”"
		],
		"french": [
			"Un quartier où le poids des souvenirs accumulés vous retient.",
			"Le passé est devenu une ombre, arrêtant tout.",
			"De vieilles photos et cartes postales flottent dans l'air.",
			"Et — une voix douce murmura : 'Tu ne veux pas revenir ?'"
		],
		"spanish": [
			"Un barrio donde el peso de los recuerdos acumulados te ata.",
			"El pasado se convirtió en una sombra, deteniendo todo.",
			"Viejas fotos y postales flotan en el aire.",
			"Y — una voz amable susurró: '¿No quieres volver?'"
		],
		"vietnamese": [
			"Một khu phố nơi sức nặng của những ký ức chất chồng níu giữ bước chân.",
			"Quá khứ trở thành một cái bóng, khiến mọi thứ ngừng lại.",
			"Những bức ảnh cũ và bưu thiếp trôi nổi trong không trung.",
			"Và — một giọng nói dịu dàng thì thầm: 'Bạn không muốn quay lại sao?'"
		],
		"thai": [
			"ย่านที่น้ำหนักของความทรงจำที่สะสมไว้ฉุดรั้งคุณไว้",
			"อดีตกลายเป็นเงา หยุดทุกสิ่งไว้",
			"รูปเก่าและโปสการ์ดลอยอยู่ในอากาศ",
			"และ — เสียงอ่อนโยนกระซิบว่า 'ไม่อยากกลับไปเหรอ?'"
		],
		"hindi": [
			"एक ऐसा मोहल्ला जहाँ जमा होती यादों का बोझ कदमों को जकड़ लेता है।",
			"अतीत एक परछाई बन गया, जिसने सब कुछ रोक दिया।",
			"पुरानी तस्वीरें और पोस्टकार्ड हवा में तैर रहे हैं।",
			"और — एक मधुर आवाज़ ने फुसफुसाया, 'क्या तुम वापस नहीं जाना चाहते?'"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "골목 안쪽으로 들어갈수록, 오래된 종잇조각들이 일행 주위를 맴돌았다.",
						"english": "As they went deeper into the alley, old pieces of paper swirled around the group.",
						"japanese": "路地の奥へ進むほど、古い紙切れが一行の周りを舞った。",
						"chinese": "越往巷子里走，旧纸片就越是围绕着一行人打转。",
						"french": "Plus ils s'enfonçaient dans l'allée, plus de vieux morceaux de papier tourbillonnaient autour du groupe.",
						"spanish": "A medida que se adentraban en el callejón, viejos trozos de papel revoloteaban alrededor del grupo.",
						"vietnamese": "Càng đi sâu vào con hẻm, những mảnh giấy cũ càng xoáy quanh đoàn người.",
						"thai": "เมื่อพวกเขาเดินลึกเข้าไปในตรอก ชิ้นส่วนกระดาษเก่าๆ ก็หมุนวนรอบกลุ่ม",
						"hindi": "जैसे-जैसे वे गली में गहराई तक गए, पुराने कागज़ के टुकड़े समूह के चारों ओर मंडराने लगे।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "사진… 엽서인가?",
						"english": "Photos... postcards?",
						"japanese": "写真… 葉書か？",
						"chinese": "照片……明信片吗？",
						"french": "Des photos... des cartes postales ?",
						"spanish": "¿Fotos... postales?",
						"vietnamese": "Ảnh... bưu thiếp à?",
						"thai": "รูปถ่าย... โปสการ์ดเหรอ?",
						"hindi": "तस्वीरें... पोस्टकार्ड?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "aria",
					"spot": [
						2,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "...이것들도… 다 여기에 묶여있어.",
						"english": "...These, too... are all tied here.",
						"japanese": "…これも…みんなここに縛られている。",
						"chinese": "……这些……也都束缚在这里。",
						"french": "...Ceux-ci aussi... sont tous liés ici.",
						"spanish": "...Estos también... están todos atados aquí.",
						"vietnamese": "...Những thứ này cũng... đều bị ràng buộc ở đây.",
						"thai": "...สิ่งเหล่านี้ก็ด้วย... ทั้งหมดผูกติดอยู่ที่นี่",
						"hindi": "...ये भी... सब यहीं बंधे हुए हैं।"
					},
					"speaker": "aria"
				},
				{
					"speaker": "aria",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "잊혀지지 않는 것들이 쌓여서… 이 길을 막는구나.",
						"english": "Unforgettable things accumulate... blocking this path.",
						"japanese": "忘れられないものが積み重なって…この道を塞いでいるんだな。",
						"chinese": "无法忘怀的事物堆积起来……堵住了这条路。",
						"french": "Des choses inoubliables s'accumulent... bloquant ce chemin.",
						"spanish": "Cosas inolvidables se acumulan... bloqueando este camino.",
						"vietnamese": "Những điều không thể quên cứ chất chồng... chặn lối đi này.",
						"thai": "สิ่งที่ไม่ลืมสะสม... ขวางทางนี้ไว้",
						"hindi": "अविस्मरणीय बातें जमा हो रही हैं... इस रास्ते को रोक रही हैं।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "aria",
					"type": "direction"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "버려진 공중전화 부스에서 낡은 음성 메시지가 끊임없이 흘러나왔다.",
						"english": "An old voicemail continuously played from the abandoned phone booth.",
						"japanese": "捨てられた公衆電話ボックスから、古い音声メッセージが絶え間なく流れてきた。",
						"chinese": "废弃的公用电话亭里，旧的语音留言不断播放着。",
						"french": "Un vieux message vocal jouait sans cesse depuis la cabine téléphonique abandonnée.",
						"spanish": "Un viejo mensaje de voz se reproducía continuamente desde la cabina telefónica abandonada.",
						"vietnamese": "Một tin nhắn thoại cũ liên tục phát ra từ buồng điện thoại công cộng bị bỏ hoang.",
						"thai": "ข้อความเสียงเก่าเล่นซ้ำไม่หยุดจากตู้โทรศัพท์สาธารณะที่ถูกทิ้งร้าง",
						"hindi": "एक पुराना वॉयस मैसेज छोड़ी गई फोन बूथ से लगातार बज रहा था।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_1",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "누구 목소리야? 계속 반복되네.",
						"english": "Whose voice is that? It keeps repeating.",
						"japanese": "誰の声だ？ずっと繰り返している。",
						"chinese": "这是谁的声音？一直在重复。",
						"french": "C'est la voix de qui ? Ça ne cesse de se répéter.",
						"spanish": "¿De quién es esa voz? No para de repetirse.",
						"vietnamese": "Giọng của ai vậy? Nó cứ lặp đi lặp lại.",
						"thai": "เสียงใครน่ะ? มันเล่นซ้ำไปซ้ำมา",
						"hindi": "यह किसकी आवाज़ है? यह बार-बार दोहराई जा रही है।"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "...누군가의 마지막 메시지… 헤어짐의 순간이 계속…",
						"english": "...Someone's last message... The moment of parting continues...",
						"japanese": "「…誰かの最後のメッセージ…別れの瞬間が続く…」",
						"chinese": "“……某个人的最后一条信息……离别的瞬间仍在继续……”",
						"french": "...Le dernier message de quelqu'un... L'instant des adieux se prolonge...",
						"spanish": "...El último mensaje de alguien... El momento de la despedida continúa...",
						"vietnamese": "...Tin nhắn cuối cùng của ai đó... Khoảnh khắc chia ly cứ kéo dài...",
						"thai": "...ข้อความสุดท้ายของใครบางคน... ช่วงเวลาของการจากลาดำเนินต่อไป...",
						"hindi": "...किसी का आखिरी संदेश... बिदाई का पल जारी है..."
					},
					"speaker": "aria"
				},
				{
					"type": "speech",
					"content": {
						"korean": "괜찮아?",
						"english": "Are you okay?",
						"japanese": "「大丈夫？」",
						"chinese": "“你还好吗？”",
						"french": "Ça va ?",
						"spanish": "¿Estás bien?",
						"vietnamese": "Cậu ổn chứ?",
						"thai": "คุณไม่เป็นไรใช่ไหม?",
						"hindi": "तुम ठीक हो?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "...응. 그냥… 익숙한 소리네.",
						"english": "...Yeah. Just... a familiar sound.",
						"japanese": "「…うん。ただ…聞き覚えのある音だ。」",
						"chinese": "“……嗯。只是……熟悉的声音。”",
						"french": "...Oui. Juste... un son familier.",
						"spanish": "...Sí. Solo... un sonido familiar.",
						"vietnamese": "...Ừ. Chỉ là... một âm thanh quen thuộc thôi.",
						"thai": "...อืม แค่...เสียงที่คุ้นเคย",
						"hindi": "...हाँ। बस... एक जानी-पहचानी आवाज़।"
					},
					"emotion": "base",
					"speaker": "aria"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"speaker": "aria",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "사진 속 흐릿한 얼굴들이 마치 살아있는 듯 입을 열었다.",
						"english": "The blurry faces in the photo opened their mouths as if alive.",
						"japanese": "「写真の中のぼやけた顔が、まるで生きているかのように口を開いた。」",
						"chinese": "“照片中模糊的脸庞仿佛活了过来，张开了嘴。”",
						"french": "Les visages flous sur la photo ouvrirent la bouche comme s'ils étaient vivants.",
						"spanish": "Los rostros borrosos de la foto abrieron la boca como si estuvieran vivos.",
						"vietnamese": "Những khuôn mặt mờ ảo trong bức ảnh như sống dậy, mở miệng.",
						"thai": "ใบหน้าที่พร่ามัวในรูปเปิดปากราวกับมีชีวิต",
						"hindi": "तस्वीर में धुंधले चेहरे ऐसे खुले जैसे जीवित हों।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "으악! 움직여!",
						"english": "Gah! They're moving!",
						"japanese": "「うわ！動いてる！」",
						"chinese": "“啊！它们在动！”",
						"french": "Aah ! Ça bouge !",
						"spanish": "¡Ugh! ¡Se mueven!",
						"vietnamese": "Á! Chúng cử động!",
						"thai": "อ๊าก! ขยับได้!",
						"hindi": "आह! वे हिल रहे हैं!"
					}
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"content": {
						"korean": "이 얼굴… 어딘가 낯익은데…",
						"english": "This face... seems familiar somehow...",
						"japanese": "「この顔…どこか見覚えがあるけど…」",
						"chinese": "“这张脸……总觉得有些眼熟……”",
						"french": "Ce visage... me dit quelque chose...",
						"spanish": "Este rostro... me resulta familiar de alguna manera...",
						"vietnamese": "Khuôn mặt này... sao quen thuộc quá...",
						"thai": "ใบหน้านี้... คุ้นๆ นะ...",
						"hindi": "यह चेहरा... कहीं देखा हुआ लग रहा है..."
					},
					"emotion": "base"
				},
				{
					"speaker": "aria",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "...내 친구 같기도 하고… 흐릿해서 모르겠어.",
						"english": "...Looks like my friend... but it's blurry, so I can't tell.",
						"japanese": "「…友達みたいだけど…ぼやけてて分からない。」",
						"chinese": "“……好像是我的朋友……太模糊了，看不清。”",
						"french": "...On dirait mon ami... mais c'est flou, je ne peux pas dire.",
						"spanish": "...Parece mi amigo... pero está borroso, no puedo distinguirlo.",
						"vietnamese": "...Cũng có thể là bạn tôi... nhưng mờ quá, không rõ.",
						"thai": "...เหมือนเพื่อนฉันเลย... แต่พร่ามัวจนดูไม่ออก",
						"hindi": "...मेरे दोस्त जैसा लग रहा है... पर धुंधला है, इसलिए बता नहीं सकता।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "‘…그때 좋았지… 우리 다시 만나자…’ 라고 말하는 것 같아.",
						"english": "'...Those were good times... Let's meet again...' It's like they're saying that.",
						"japanese": "「『…あの頃は良かったな…また会おう…』って言ってるみたいだ。」",
						"chinese": "“‘……那时候真好……我们再见面吧……’ 它们好像在这么说。”",
						"french": "'...C'était le bon temps... Retrouvons-nous...' On dirait qu'ils disent ça.",
						"spanish": "'...Qué buenos tiempos... Volvamos a vernos...' Parece que están diciendo eso.",
						"vietnamese": "'...Hồi đó thật tuyệt... Chúng ta hãy gặp lại nhé...' Có vẻ như chúng đang nói vậy.",
						"thai": "'...ตอนนั้นมันดีจริงๆ... เรามาเจอกันอีกนะ...' เหมือนพวกเขากำลังพูดแบบนั้น",
						"hindi": "'...वो दिन अच्छे थे... चलो फिर मिलते हैं...' ऐसा लग रहा है जैसे वे यही कह रहे हों।"
					},
					"emotion": "base",
					"speaker": "character_3"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아니야… 아니야…!",
						"english": "No... no...!",
						"japanese": "「違う…違う…！」",
						"chinese": "“不是……不是……！”",
						"french": "Non... non... !",
						"spanish": "¡No... no...!",
						"vietnamese": "Không phải... không phải...!",
						"thai": "ไม่นะ... ไม่ใช่...!",
						"hindi": "नहीं... नहीं...!"
					},
					"emotion": "angry",
					"speaker": "aria"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "aria",
					"spot": [
						3,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "따뜻하고 다정한 환청이 귓가를 맴돌았다.",
						"english": "Warm and gentle auditory hallucinations lingered in my ears.",
						"japanese": "「温かく優しい幻聴が耳元をさまよった。」",
						"chinese": "“温暖而温柔的幻听在耳边萦绕。”",
						"french": "Des hallucinations auditives chaudes et douces résonnaient à mes oreilles.",
						"spanish": "Cálidas y amables alucinaciones auditivas resonaron en mis oídos.",
						"vietnamese": "Những ảo thanh ấm áp và dịu dàng văng vẳng bên tai.",
						"thai": "เสียงหลอนที่อบอุ่นและอ่อนโยนยังคงก้องอยู่ในหู",
						"hindi": "गर्म और सौम्य श्रवण भ्रम कानों में गूँज रहे थे।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "'그때로 돌아가면… 괜찮을 것 같지 않아?'",
						"english": "If we go back to that time... wouldn't it be okay?",
						"japanese": "あの時に戻れたら…大丈夫じゃないかな？",
						"chinese": "如果回到那时…会不会好一些？",
						"french": "Si on retournait à cette époque… ça irait, non ?",
						"spanish": "Si volviéramos a ese momento… ¿no estaría bien?",
						"vietnamese": "Nếu quay về lúc đó… sẽ ổn thôi mà, đúng không?",
						"thai": "ถ้ากลับไปตอนนั้น… มันคงจะดีขึ้นไม่ใช่เหรอ?",
						"hindi": "अगर हम उस समय में वापस चले जाएँ... क्या यह ठीक नहीं होगा?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "안 돼… 멈춰야 해.",
						"english": "No... I have to stop.",
						"japanese": "だめだ…止めないと。",
						"chinese": "不行…我必须停下来。",
						"french": "Non… Je dois arrêter.",
						"spanish": "No… tengo que parar.",
						"vietnamese": "Không… phải dừng lại thôi.",
						"thai": "ไม่นะ… ต้องหยุดแล้ว",
						"hindi": "नहीं… मुझे रुकना होगा।"
					},
					"emotion": "angry",
					"speaker": "aria"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "너무 달콤한 소리야. 계속 듣고 싶어져…",
						"english": "Such a sweet voice. I want to keep listening...",
						"japanese": "甘美な声だ。ずっと聞いていたくなる…",
						"chinese": "多么甜美的声音。我想一直听下去…",
						"french": "C'est un son si doux. J'ai envie de continuer à écouter…",
						"spanish": "Es un sonido tan dulce. Quiero seguir escuchando…",
						"vietnamese": "Giọng nói thật ngọt ngào. Tôi muốn nghe mãi…",
						"thai": "เสียงช่างไพเราะเหลือเกิน. อยากฟังต่อไปเรื่อยๆ เลย…",
						"hindi": "कितनी मधुर आवाज़ है। मैं इसे सुनता रहना चाहता हूँ..."
					},
					"speaker": "character_1"
				},
				{
					"speaker": "character_4",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "하지만 돌아갈 수는 없어!",
						"english": "But I can't go back!",
						"japanese": "でも、もう戻れない！",
						"chinese": "但是，我不能回头！",
						"french": "Mais je ne peux pas revenir en arrière !",
						"spanish": "¡Pero no puedo volver!",
						"vietnamese": "Nhưng tôi không thể quay lại!",
						"thai": "แต่ฉันกลับไปไม่ได้!",
						"hindi": "लेकिन मैं वापस नहीं जा सकता!"
					}
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "크윽… 결국… 이 고리를… 끊는구나…",
						"english": "Ugh... So you... break this chain after all...",
						"japanese": "くぅ…結局…この輪を…断ち切るのか…",
						"chinese": "咳…终究…你还是…斩断了这锁链啊…",
						"french": "Ugh... Finalement... tu brises cette chaîne...",
						"spanish": "Uf... Al final... rompes este ciclo...",
						"vietnamese": "Khụ... Cuối cùng... ngươi cũng... chặt đứt vòng xích này...",
						"thai": "อึก... ในที่สุด... เจ้าก็... ทำลายพันธนาการนี้ลงได้...",
						"hindi": "उफ़... अंततः... तुम इस कड़ी को... तोड़ ही देते हो..."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "이제… 진짜 끝난 거야?",
						"english": "Is it... truly over now?",
						"japanese": "もう…本当に終わったのか？",
						"chinese": "现在…真的结束了吗？",
						"french": "Est-ce... vraiment fini maintenant ?",
						"spanish": "¿Ahora... de verdad ha terminado?",
						"vietnamese": "Bây giờ... thật sự kết thúc rồi sao?",
						"thai": "ตอนนี้... จบจริง ๆ แล้วใช่ไหม?",
						"hindi": "अब... क्या यह सच में खत्म हो गया है?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "aria",
					"spot": [
						2,
						2
					],
					"type": "direction"
				},
				{
					"speaker": "aria",
					"type": "speech",
					"content": {
						"korean": "아니… 이제… 겨우 시작일지도 몰라.",
						"english": "No... This might... just be the beginning.",
						"japanese": "いや…これは…まだ始まりに過ぎないのかもしれない。",
						"chinese": "不…现在…也许才刚刚开始。",
						"french": "Non... Ce n'est peut-être... que le début.",
						"spanish": "No... Esto... quizás sea solo el principio.",
						"vietnamese": "Không... Bây giờ... có lẽ mới chỉ là bắt đầu.",
						"thai": "ไม่... นี่อาจจะ... เป็นเพียงจุดเริ่มต้นเท่านั้น",
						"hindi": "नहीं... यह... शायद अभी शुरुआत ही हो।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "우리의 발자국은… 더 깊은 곳으로… 향하고 있어.",
						"english": "Our footsteps are... heading deeper...",
						"japanese": "私たちの足跡は…もっと深い場所へ…向かっている。",
						"chinese": "我们的足迹…正走向…更深处。",
						"french": "Nos pas... nous mènent... plus profondément.",
						"spanish": "Nuestras huellas... se dirigen... a un lugar más profundo.",
						"vietnamese": "Dấu chân của chúng ta... đang hướng tới... nơi sâu hơn.",
						"thai": "รอยเท้าของเรา... กำลังมุ่งหน้า... สู่ที่ลึกกว่า",
						"hindi": "हमारे पदचिह्न... और गहरे में... जा रहे हैं।"
					},
					"speaker": "aria"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "오래된 동네는 다시 침묵으로 돌아갔다. 그러나 그들의 발걸음은 멈추지 않았다.",
						"english": "The old neighborhood returned to silence. But their footsteps did not cease.",
						"japanese": "古い町は再び沈黙に戻った。しかし、彼らの足取りは止まらなかった。",
						"chinese": "老旧的街区再次归于沉寂。然而他们的脚步并未停歇。",
						"french": "Le vieux quartier retrouva le silence. Mais leurs pas ne s'arrêtèrent pas.",
						"spanish": "El viejo barrio volvió al silencio. Pero sus pasos no se detuvieron.",
						"vietnamese": "Khu phố cũ trở lại với sự im lặng. Nhưng bước chân của họ không dừng lại.",
						"thai": "ย่านเก่ากลับสู่ความเงียบงันอีกครั้ง แต่รอยเท้าของพวกเขาไม่ได้หยุดลง",
						"hindi": "पुराना मोहल्ला फिर से खामोशी में लौट गया। लेकिन उनके कदम नहीं रुके।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "끊어진 기억의 고리 뒤엔, 더 거대한 그림자가 기다리고 있었다.",
						"english": "Behind the broken chain of memories, a greater shadow awaited.",
						"japanese": "断ち切られた記憶の輪の後ろには、より巨大な影が待ち受けていた。",
						"chinese": "在记忆断裂的锁链之后，更巨大的阴影正在等待。",
						"french": "Derrière la chaîne brisée des souvenirs, une ombre plus grande attendait.",
						"spanish": "Tras la cadena rota de los recuerdos, una sombra aún mayor esperaba.",
						"vietnamese": "Đằng sau vòng xích ký ức đứt gãy, một bóng đen lớn hơn đang chờ đợi.",
						"thai": "เบื้องหลังห่วงโซ่แห่งความทรงจำที่ขาดสะบั้น เงาที่ใหญ่กว่ากำลังรออยู่",
						"hindi": "यादों की टूटी कड़ी के पीछे, एक बड़ी परछाई इंतजार कर रही थी।"
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "어리석은 것들… 과거는 너희를 놓아주지 않아…",
						"english": "Fools... The past won't let you go...",
						"japanese": "愚かな者たちめ…過去はお前たちを解放しない…",
						"chinese": "愚蠢的东西…过去不会放过你们的…",
						"french": "Imbéciles... Le passé ne vous lâchera pas...",
						"spanish": "Necios... El pasado no os soltará...",
						"vietnamese": "Lũ ngốc... Quá khứ sẽ không buông tha các ngươi đâu...",
						"thai": "พวกโง่เง่า... อดีตจะไม่ปล่อยพวกเจ้าไป...",
						"hindi": "मूर्खों... अतीत तुम्हें जाने नहीं देगा..."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "아니야… 포기 안 해.",
						"english": "No... I won't give up.",
						"japanese": "違う…諦めない。",
						"chinese": "不…我不会放弃的。",
						"french": "Non... Je n'abandonnerai pas.",
						"spanish": "No... No me rendiré.",
						"vietnamese": "Không... Tôi sẽ không bỏ cuộc.",
						"thai": "ไม่... ฉันจะไม่ยอมแพ้",
						"hindi": "नहीं... मैं हार नहीं मानूंगा।"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"speaker": "aria",
					"type": "speech",
					"content": {
						"korean": "우린… 돌아가지 않아.",
						"english": "We... won't go back.",
						"japanese": "我々は…戻らない。",
						"chinese": "我们……不回去。",
						"french": "Nous… ne reviendrons pas.",
						"spanish": "Nosotros… no volveremos.",
						"vietnamese": "Chúng ta… sẽ không quay lại.",
						"thai": "เรา… จะไม่กลับไป",
						"hindi": "हम… वापस नहीं जाएँगे।"
					},
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "하하하… 다시 와라… 그때는 더 달콤한 유혹을 준비해두지.",
						"english": "Hahaha… Come again… Next time, I'll have sweeter temptations ready for you.",
						"japanese": "ハハハ… また来るがいい… 次はもっと甘い誘惑を用意しておこう。",
						"chinese": "哈哈哈……再来吧……到时候我会准备更甜蜜的诱惑。",
						"french": "Hahaha… Reviens… La prochaine fois, j'aurai des tentations plus douces prêtes pour toi.",
						"spanish": "Jajajaja… Vuelve… La próxima vez, tendré tentaciones más dulces preparadas para ti.",
						"vietnamese": "Hahaha… Hãy quay lại… Lần tới, ta sẽ chuẩn bị những cám dỗ ngọt ngào hơn.",
						"thai": "ฮ่าฮ่าฮ่า… กลับมาอีกนะ… ครั้งหน้า ข้าจะเตรียมสิ่งล่อใจที่หอมหวานกว่านี้ไว้ให้",
						"hindi": "हाहाहा… फिर आना… अगली बार, मैं और भी मधुर प्रलोभन तैयार रखूँगा।"
					}
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "떠오른 기억의 파편들이 거대한 형체를 이루었다.",
						"english": "Fragments of rising memories formed a colossal shape.",
						"japanese": "浮かび上がった記憶の破片が巨大な姿を成した。",
						"chinese": "浮现的记忆碎片形成了巨大的形体。",
						"french": "Les fragments de souvenirs émergents formèrent une forme colossale.",
						"spanish": "Los fragmentos de recuerdos emergentes formaron una figura colosal.",
						"vietnamese": "Những mảnh ký ức trỗi dậy hợp thành một hình thù khổng lồ.",
						"thai": "เศษเสี้ยวความทรงจำที่ผุดขึ้นมารวมตัวกันเป็นรูปร่างมหึมา.",
						"hindi": "उभरती यादों के टुकड़े एक विशाल आकार में बदल गए।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…하하하. 결국 여기까지 왔구나.",
						"english": "...Hahaha. So you've finally made it this far.",
						"japanese": "…ハハハ。結局ここまで来たか。",
						"chinese": "…哈哈哈。你们终究还是走到这里了。",
						"french": "…Hahaha. Vous êtes finalement arrivés jusqu'ici.",
						"spanish": "…Jajaja. Así que finalmente habéis llegado hasta aquí.",
						"vietnamese": "...Hahaha. Cuối cùng các ngươi cũng đã đến đây.",
						"thai": "…ฮ่าๆๆ. ในที่สุดก็มาถึงที่นี่จนได้สินะ.",
						"hindi": "...हाहाहा। आखिरकार तुम यहाँ तक पहुँच ही गए।"
					},
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "너희가 잊고 싶었던 모든 것들이… 여기에 있다.",
						"english": "Everything you wished to forget... is right here.",
						"japanese": "君たちが忘れたかったもの全てが…ここにある。",
						"chinese": "你们想要忘记的一切…都在这里。",
						"french": "Tout ce que vous vouliez oublier… est ici.",
						"spanish": "Todo lo que queríais olvidar… está aquí.",
						"vietnamese": "Mọi thứ mà các ngươi muốn quên… đều ở đây.",
						"thai": "ทุกสิ่งทุกอย่างที่พวกเจ้าอยากจะลืม… อยู่ที่นี่แล้ว.",
						"hindi": "वह सब कुछ जो तुम भूलना चाहते थे... यहीं पर है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "과거는 과거일 뿐이야.",
						"english": "The past is just the past.",
						"japanese": "過去は過去に過ぎない。",
						"chinese": "过去只是过去罢了。",
						"french": "Le passé n'est que le passé.",
						"spanish": "El pasado es solo el pasado.",
						"vietnamese": "Quá khứ chỉ là quá khứ mà thôi.",
						"thai": "อดีตก็เป็นแค่อดีตเท่านั้นเอง.",
						"hindi": "अतीत तो बस अतीत है।"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "정말 그럴까? 너희의 발걸음은 이미 무거워졌잖아.",
						"english": "Is that really so? Your steps have already grown heavy, haven't they?",
						"japanese": "本当にそうかな？君たちの足取りはもう重くなっているじゃないか。",
						"chinese": "真的吗？你们的脚步已经沉重了吧。",
						"french": "Est-ce vraiment le cas ? Vos pas sont déjà devenus lourds, n'est-ce pas ?",
						"spanish": "¿De verdad? Vuestros pasos ya se han vuelto pesados, ¿verdad?",
						"vietnamese": "Thật sao? Bước chân của các ngươi đã nặng trĩu rồi mà.",
						"thai": "จริงหรือ? ฝีเท้าของพวกเจ้าก็หนักอึ้งขึ้นแล้วไม่ใช่หรือไง.",
						"hindi": "क्या सच में ऐसा है? तुम्हारे कदम तो पहले ही भारी हो गए हैं, ना?"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "돌아가고 싶은 마음… 없다고 할 수 있을까?",
						"english": "Can you really say... you have no desire to go back?",
						"japanese": "戻りたい気持ち…ないと言い切れるかい？",
						"chinese": "想要回去的心情…能说没有吗？",
						"french": "Pouvez-vous vraiment dire… que vous n'avez aucune envie de revenir ?",
						"spanish": "¿Podéis realmente decir… que no tenéis ningún deseo de volver?",
						"vietnamese": "Cái cảm giác muốn quay lại… các ngươi có thể nói là không có sao?",
						"thai": "ความรู้สึกที่อยากกลับไป… จะบอกว่าไม่มีเลยได้หรือ?",
						"hindi": "क्या तुम वाकई कह सकते हो... कि वापस जाने की इच्छा नहीं है?"
					},
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "...없어.",
						"english": "...None.",
						"japanese": "...ない。",
						"chinese": "...没有。",
						"french": "...Rien.",
						"spanish": "...Nada.",
						"vietnamese": "...Không.",
						"thai": "...ไม่มีเลย",
						"hindi": "...नहीं।"
					},
					"speaker": "character_1"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그럼 날 쓰러뜨려봐. 그래야만 앞으로 나아갈 수 있을 테니.",
						"english": "Then defeat me. Only then can you move forward.",
						"japanese": "なら私を倒してみろ。そうしなければ、先には進めない。",
						"chinese": "那就打败我吧。只有这样，你才能继续前进。",
						"french": "Alors, bats-moi. Ce n'est qu'ainsi que tu pourras avancer.",
						"spanish": "Entonces, derrótame. Solo así podrás avanzar.",
						"vietnamese": "Vậy thì hãy hạ gục ta. Chỉ khi đó, ngươi mới có thể tiến về phía trước.",
						"thai": "ถ้าอย่างนั้นก็โค่นล้มข้าเสียสิ มีเพียงวิธีนั้นเท่านั้นที่เจ้าจะก้าวต่อไปได้",
						"hindi": "तो मुझे हराओ। तभी तुम आगे बढ़ पाओगे।"
					}
				}
			]
		}
	]
} as const;
