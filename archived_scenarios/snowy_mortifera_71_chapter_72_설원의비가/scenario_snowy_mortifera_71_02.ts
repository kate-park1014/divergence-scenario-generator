export const scenario_snowy_mortifera_71_02 = {
	"scenario_id": "snowy_mortifera_71_02",
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
			"얼음 속에서 발견된 한 소녀.",
			"그녀는 모든 기억을 잃었다.",
			"그러나 그 기억의 파편들이, 잊힌 비극을 속삭인다.",
			"믿었던 진실이 깨지는 순간이었다."
		],
		"english": [
			"A girl found in the ice.",
			"She lost all her memories.",
			"But fragments of those memories whisper of a forgotten tragedy.",
			"It was the moment the truth she believed in shattered."
		],
		"japanese": [
			"氷の中で見つかった少女。",
			"彼女は全ての記憶を失っていた。",
			"しかし、その記憶の断片が、忘れ去られた悲劇を囁く。",
			"信じていた真実が砕け散る瞬間だった。"
		],
		"chinese": [
			"一个在冰中发现的女孩。",
			"她失去了所有记忆。",
			"然而，那些记忆的碎片，低语着被遗忘的悲剧。",
			"那是她所相信的真相破碎的瞬间。"
		],
		"french": [
			"Une fille trouvée dans la glace.",
			"Elle a perdu tous ses souvenirs.",
			"Mais les fragments de ces souvenirs murmurent une tragédie oubliée.",
			"C'était le moment où la vérité qu'elle croyait s'est brisée."
		],
		"spanish": [
			"Una chica encontrada en el hielo.",
			"Perdió todos sus recuerdos.",
			"Pero los fragmentos de esos recuerdos susurran una tragedia olvidada.",
			"Fue el momento en que la verdad en la que creía se hizo añicos."
		],
		"vietnamese": [
			"Một cô gái được tìm thấy trong băng.",
			"Cô ấy đã mất tất cả ký ức.",
			"Nhưng những mảnh ký ức đó lại thì thầm về một bi kịch bị lãng quên.",
			"Đó là khoảnh khắc sự thật mà cô tin tưởng tan vỡ."
		],
		"thai": [
			"เด็กสาวคนหนึ่งถูกพบในน้ำแข็ง",
			"เธอสูญเสียความทรงจำทั้งหมด",
			"แต่เศษเสี้ยวของความทรงจำเหล่านั้น กระซิบถึงโศกนาฏกรรมที่ถูกลืม",
			"มันคือช่วงเวลาที่ความจริงที่เธอเชื่อมั่นแตกสลาย"
		],
		"hindi": [
			"बर्फ में मिली एक लड़की।",
			"उसने अपनी सारी यादें खो दीं।",
			"लेकिन उन यादों के टुकड़े एक भूली हुई त्रासदी की फुसफुसाहट करते हैं।",
			"यह वह क्षण था जब जिस सच पर उसे यकीन था, वह टूट गया।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "차가운 얼음 덩어리 속, 희미한 온기가 느껴졌다.",
						"english": "Inside the cold ice, a faint warmth was felt.",
						"japanese": "冷たい氷の塊の中、微かな温もりを感じた。",
						"chinese": "在冰冷的冰块中，感觉到一丝微弱的温暖。",
						"french": "Au sein du bloc de glace froid, une faible chaleur se faisait sentir.",
						"spanish": "Dentro del frío bloque de hielo, se sintió un calor tenue.",
						"vietnamese": "Trong khối băng lạnh giá, một hơi ấm yếu ớt được cảm nhận.",
						"thai": "ภายในก้อนน้ำแข็งอันเย็นยะเยือก สัมผัสได้ถึงความอบอุ่นบางเบา",
						"hindi": "बर्फीले टुकड़े के अंदर, एक हल्की सी गर्माहट महसूस हुई।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…사람이야!",
						"english": "...It's a person!",
						"japanese": "…人だ！",
						"chinese": "……是人！",
						"french": "...C'est une personne !",
						"spanish": "...¡Es una persona!",
						"vietnamese": "...Là người!",
						"thai": "...คนนี่นา!",
						"hindi": "...यह एक इंसान है!"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…으음…",
						"english": "...Ugh...",
						"japanese": "…うーん…",
						"chinese": "……嗯……",
						"french": "...Hmm...",
						"spanish": "...Mmm...",
						"vietnamese": "...Ưm...",
						"thai": "...อืม...",
						"hindi": "...उम्म..."
					},
					"speaker": "eira",
					"type": "speech"
				},
				{
					"content": {
						"korean": "정신이 드세요?",
						"english": "Are you awake?",
						"japanese": "お目覚めですか？",
						"chinese": "您醒了吗？",
						"french": "Vous reprenez connaissance ?",
						"spanish": "¿Está consciente?",
						"vietnamese": "Bạn tỉnh rồi à?",
						"thai": "คุณรู้สึกตัวแล้วเหรอ?",
						"hindi": "क्या आप होश में हैं?"
					},
					"emotion": "base",
					"speaker": "character_1",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "eira",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "여기가… 어디죠? 제 이름은…",
						"english": "Where... am I? My name is...",
						"japanese": "ここは…どこですか？ 私の名前は…",
						"chinese": "这里是…哪里？我的名字是…",
						"french": "Où... suis-je ? Mon nom est...",
						"spanish": "¿Dónde... estoy? Mi nombre es...",
						"vietnamese": "Đây là... đâu? Tên tôi là...",
						"thai": "ที่นี่... ที่ไหนคะ? ชื่อของฉันคือ...",
						"hindi": "यह... कहाँ है? मेरा नाम..."
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "괜찮아요. 저희가 구조했어요.",
						"english": "It's okay. We rescued you.",
						"japanese": "大丈夫ですよ。私たちが救助しました。",
						"chinese": "没关系。我们救了你。",
						"french": "Tout va bien. Nous vous avons sauvée.",
						"spanish": "Está bien. Te rescatamos.",
						"vietnamese": "Không sao đâu. Chúng tôi đã cứu bạn.",
						"thai": "ไม่เป็นไรนะ พวกเราช่วยคุณไว้แล้ว",
						"hindi": "ठीक है। हमने आपको बचाया है।"
					}
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…얼음 속에서… 계속… 슬픈 노랫소리가 들렸는데…",
						"english": "...From within the ice... a sad song... kept echoing...",
						"japanese": "…氷の中から…ずっと…悲しい歌声が聞こえていました…",
						"chinese": "……从冰中……一直……传来悲伤的歌声……",
						"french": "...Du fond de la glace... une triste mélodie... ne cessait de retentir...",
						"spanish": "...Desde el hielo... una canción triste... no paraba de sonar...",
						"vietnamese": "...Từ trong băng... một bài hát buồn... cứ văng vẳng...",
						"thai": "...จากในน้ำแข็ง... เสียงเพลงเศร้า... ดังมาตลอด...",
						"hindi": "...बर्फ के भीतर से... लगातार... एक उदास गीत सुनाई दे रहा था..."
					}
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"content": {
						"korean": "노랫소리? 이 숲에서?",
						"english": "A song? In this forest?",
						"japanese": "歌声？この森で？",
						"chinese": "歌声？在这片森林里？",
						"french": "Une chanson ? Dans cette forêt ?",
						"spanish": "¿Una canción? ¿En este bosque?",
						"vietnamese": "Bài hát ư? Trong khu rừng này sao?",
						"thai": "เสียงเพลงเหรอ? ในป่านี้เนี่ยนะ?",
						"hindi": "गीत? इस जंगल में?"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "eira",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…기억이… 조금씩… 나는 것 같아요.",
						"english": "...My memories... are slowly... returning.",
						"japanese": "…記憶が…少しずつ…戻ってきているようです。",
						"chinese": "……记忆……好像……一点点回来了。",
						"french": "...Mes souvenirs... me reviennent... petit à petit.",
						"spanish": "...Mis recuerdos... poco a poco... están volviendo.",
						"vietnamese": "...Ký ức... dường như... đang dần trở lại.",
						"thai": "...ความทรงจำ... เหมือนจะ... ค่อยๆ กลับมาแล้ว...",
						"hindi": "...यादें... धीरे-धीरे... वापस आ रही हैं।"
					},
					"speaker": "eira",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "얼음 속에서… '차가운 어머니'라고… 누군가… 저를 불렀어요.",
						"english": "From within the ice... someone called me... 'Cold Mother'.",
						"japanese": "氷の中から…誰かが…私を『冷たい母』と…呼びました。",
						"chinese": "从冰中……有人……叫我‘冰冷之母’。",
						"french": "Du fond de la glace... quelqu'un m'a appelée... 'Mère Froide'.",
						"spanish": "Desde el hielo... alguien me llamó... 'Madre Fría'.",
						"vietnamese": "Từ bên trong băng... có ai đó... đã gọi tôi là 'Người Mẹ Lạnh Giá'.",
						"thai": "จากในน้ำแข็ง... มีใครบางคน... เรียกฉันว่า 'มารดาผู้เยือกเย็น'...",
						"hindi": "बर्फ के भीतर से... किसी ने... मुझे 'शीतल माँ' कहकर पुकारा।"
					},
					"speaker": "eira",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "차가운 어머니?",
						"english": "'Cold Mother'?",
						"japanese": "冷たい母？",
						"chinese": "冰冷之母？",
						"french": "Mère Froide ?",
						"spanish": "¿Madre Fría?",
						"vietnamese": "'Người Mẹ Lạnh Giá' ư?",
						"thai": "'มารดาผู้เยือกเย็น'?",
						"hindi": "'शीतल माँ'?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "그리고… 끔찍한 비명 소리도… 계속 들렸어요.",
						"english": "And... terrible screams... kept echoing too.",
						"japanese": "そして…恐ろしい悲鳴も…ずっと聞こえていました。",
						"chinese": "而且……可怕的尖叫声……也一直传来。",
						"french": "Et... d'horribles cris... ne cessaient de retentir aussi.",
						"spanish": "Y... horribles gritos... no paraban de escucharse también.",
						"vietnamese": "Và... những tiếng la hét kinh hoàng... cũng cứ vang lên.",
						"thai": "แล้วก็... เสียงกรีดร้องน่ากลัว... ก็ยังคงดังอยู่ตลอดด้วย.",
						"hindi": "और... भयानक चीखें भी... लगातार सुनाई दे रही थीं।"
					},
					"speaker": "eira",
					"type": "speech"
				},
				{
					"speaker": "character_3",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "아눅의 전설과는… 좀 다른 이야기인데.",
						"english": "That's... a bit different... from Anuk's legend.",
						"japanese": "アヌークの伝説とは…少し…話が違うようですね。",
						"chinese": "这和阿努克的传说……有点不一样啊。",
						"french": "C'est... un peu différent... de la légende d'Anuk.",
						"spanish": "Esa es... una historia un poco diferente... a la leyenda de Anuk.",
						"vietnamese": "Chuyện này... hơi khác... so với truyền thuyết của Anuk.",
						"thai": "นี่มัน... เรื่องราวที่... แตกต่างจากตำนานของอนุกเล็กน้อยนะเนี่ย.",
						"hindi": "यह... अनुक की किंवदंती से... कुछ अलग कहानी है।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "여기… 이 돌에 새겨진 문양도… 제가 본 것과는 달라요.",
						"english": "Also... the patterns carved on this stone... are different from what I saw.",
						"japanese": "ここに…この石に刻まれた模様も…私が以前見たものとは違います。",
						"chinese": "这里……这块石头上刻的纹样……也和我看到的不一样。",
						"french": "De plus... les motifs gravés sur cette pierre... sont différents de ce que j'ai vu.",
						"spanish": "Además... los patrones grabados en esta piedra... son diferentes a los que vi.",
						"vietnamese": "Và... những hoa văn khắc trên tảng đá này... cũng khác với những gì tôi đã thấy.",
						"thai": "อีกทั้ง... ลวดลายที่สลักบนหินก้อนนี้... ก็แตกต่างจากสิ่งที่ฉันเห็นด้วย.",
						"hindi": "यहां... इस पत्थर पर उकेरे गए पैटर्न भी... मैंने जो देखा उससे अलग हैं।"
					},
					"speaker": "eira",
					"type": "speech"
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
					"speaker": "eira",
					"action": "enter"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…점점 더 가까워지고 있어요. 그… 비명 소리가…",
						"english": "...It's getting closer and closer. That... screaming sound...",
						"japanese": "…どんどん近づいてきています。あの…悲鳴が…",
						"chinese": "……它越来越近了。那……尖叫声……",
						"french": "...Ça se rapproche de plus en plus. Ce... cri...",
						"spanish": "...Se está acercando cada vez más. Ese... sonido de gritos...",
						"vietnamese": "...Nó đang đến gần hơn... Cái... tiếng la hét đó...",
						"thai": "...มันใกล้เข้ามาทุกทีแล้ว. เสียงกรีดร้องนั้น...",
						"hindi": "...वह... चीख की आवाज़... करीब आती जा रही है।"
					},
					"speaker": "eira",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "뭐가? 뭐가 가까워진다는 거야?",
						"english": "What? What's getting closer?",
						"japanese": "何が？何が近づいてきているんだ？",
						"chinese": "什么？什么在靠近？",
						"french": "Quoi ? Qu'est-ce qui se rapproche ?",
						"spanish": "¿Qué? ¿Qué se está acercando?",
						"vietnamese": "Cái gì? Cái gì đang đến gần?",
						"thai": "อะไรนะ? อะไรกำลังใกล้เข้ามา?",
						"hindi": "क्या? क्या करीब आ रहा है?"
					},
					"emotion": "base"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…차가운… 고통…",
						"english": "...Cold... pain...",
						"japanese": "「…冷たい…痛み…」",
						"chinese": "「…冰冷…痛苦…」",
						"french": "...Froid... douleur...",
						"spanish": "...Frío... dolor...",
						"vietnamese": "...Lạnh... đau đớn...",
						"thai": "...หนาวเหน็บ...เจ็บปวด...",
						"hindi": "...ठंडा... दर्द..."
					}
				},
				{
					"content": {
						"korean": "에이라의 말에 알 수 없는 불안감이 탐험대를 감쌌다.",
						"english": "Aira's words shrouded the expedition in an unknown dread.",
						"japanese": "「アイラの言葉に、探検隊は得体の知れない不安に包まれた。」",
						"chinese": "「艾拉的话语让探险队笼罩在莫名的不安中。」",
						"french": "Les mots d'Aira ont enveloppé l'expédition d'une angoisse inconnue.",
						"spanish": "Las palabras de Aira envolvieron a la expedición en una inquietud desconocida.",
						"vietnamese": "Lời của Aira bao trùm đội thám hiểm trong một nỗi bất an không rõ nguồn gốc.",
						"thai": "ถ้อยคำของไอราปกคลุมคณะสำรวจด้วยความหวาดหวั่นที่ไม่ทราบที่มา",
						"hindi": "ऐरा के शब्दों ने अभियान दल को एक अज्ञात भय से घेर लिया।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 앞을 가로막았다.",
						"english": "A colossal shadow blocked their path.",
						"japanese": "「巨大な影が彼らの行く手を阻んだ。」",
						"chinese": "「一个巨大的身影挡住了去路。」",
						"french": "Une ombre colossale leur barra la route.",
						"spanish": "Una sombra colosal bloqueó su camino.",
						"vietnamese": "Một cái bóng khổng lồ chặn đường họ.",
						"thai": "เงาขนาดมหึมาขวางเส้นทางของพวกเขา",
						"hindi": "एक विशाल छाया ने उनका रास्ता रोक दिया।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "저게… 보스인가?",
						"english": "Is that... the boss?",
						"japanese": "「あれが…ボスなのか？」",
						"chinese": "「那是…首领吗？」",
						"french": "C'est... le boss ?",
						"spanish": "¿Es eso... el jefe?",
						"vietnamese": "Đó là... trùm sao?",
						"thai": "นั่น... บอสเหรอ?",
						"hindi": "क्या वह... मालिक है?"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…기억… 잃은 주제에… 뭘 안다고…",
						"english": "...Memories... lost, yet... what do you know...",
						"japanese": "「…記憶…失ったくせに…何を分かると…」",
						"chinese": "「…记忆…已失…你又懂什么…」",
						"french": "...Souvenirs... perdus, et pourtant... qu'en sais-tu...",
						"spanish": "...Memorias... perdidas, y aun así... ¿qué sabes tú...?",
						"vietnamese": "...Ký ức... đã mất, vậy mà... ngươi biết gì...",
						"thai": "...ความทรงจำ...ที่หายไป...แล้วรู้เรื่องอะไร...",
						"hindi": "...यादें... खो दी हैं, फिर भी... तुम क्या जानते हो..."
					}
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "…! (충격) 당신은… 그때… 그…",
						"english": "...! (Shock) You... back then... that...",
						"japanese": "「…！ (衝撃) あなたは…あの時…その…」",
						"chinese": "「…！ (震惊) 你是…那时…那个…」",
						"french": "...! (Choc) Vous... à l'époque... ce...",
						"spanish": "...! (Impacto) Tú... en aquel entonces... ese...",
						"vietnamese": "...! (Sốc) Ngươi... lúc đó... cái...",
						"thai": "...! (ตกใจ) คุณ... ตอนนั้น... นั่น...",
						"hindi": "...! (सदमा) तुम... तब... वह..."
					},
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "(에이라를 보호하며) 무슨 소리야!",
						"english": "(Shielding Aira) What are you talking about!",
						"japanese": "「（アイラをかばいながら）何を言ってるんだ！」",
						"chinese": "「（保护着艾拉）你说什么！」",
						"french": "(Protégeant Aira) De quoi parles-tu !",
						"spanish": "(Protegiendo a Aira) ¡¿De qué estás hablando?!",
						"vietnamese": "(Che chở Aira) Ngươi đang nói gì vậy!",
						"thai": "(ปกป้องไอรา) พูดอะไรน่ะ!",
						"hindi": "(ऐरा को बचाते हुए) तुम क्या कह रहे हो!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…모든 진실은… 얼음 속에… 잠든다… 영원히…",
						"english": "...All truth... sleeps... in the ice... forever...",
						"japanese": "「…全ての真実は…氷の中に…眠る…永遠に…」",
						"chinese": "「…所有真相…都将…长眠于冰中…永恒…」",
						"french": "...Toute vérité... dort... dans la glace... pour l'éternité...",
						"spanish": "...Toda la verdad... duerme... en el hielo... para siempre...",
						"vietnamese": "...Mọi sự thật... sẽ ngủ yên... trong băng... mãi mãi...",
						"thai": "...ความจริงทั้งหมด... หลับใหล... ในน้ำแข็ง... ชั่วนิรันดร์...",
						"hindi": "...सारा सच... सोता है... बर्फ़ में... हमेशा के लिए..."
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "…부질없는 저항… 모든 것은… 차가운 어머니의 품으로…",
						"english": "...Futile resistance... All returns... to the Cold Mother's embrace...",
						"japanese": "…無駄な抵抗…すべては…冷たき母の懐へ…",
						"chinese": "…徒劳的抵抗…一切都将…归于冰冷母亲的怀抱…",
						"french": "...Résistance vaine... Tout... vers l'étreinte de la Mère Froide...",
						"spanish": "...Resistencia inútil... Todo... al abrazo de la Madre Fría...",
						"vietnamese": "...Kháng cự vô ích... Tất cả... sẽ về với vòng tay của Người Mẹ Lạnh Giá...",
						"thai": "...การต่อต้านที่ไร้ประโยชน์... ทุกสิ่ง... สู่การโอบกอดของมารดาผู้หนาวเหน็บ...",
						"hindi": "...व्यर्थ का प्रतिरोध... सब कुछ... ठंडी माँ की गोद में..."
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이대로 끝낼 순 없어!",
						"english": "I can't end it like this!",
						"japanese": "このままでは終われない！",
						"chinese": "不能就这么结束！",
						"french": "Je ne peux pas finir comme ça !",
						"spanish": "¡No puedo terminar así!",
						"vietnamese": "Không thể kết thúc như thế này được!",
						"thai": "จะจบแบบนี้ไม่ได้!",
						"hindi": "मैं इसे ऐसे खत्म नहीं कर सकता!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "eira",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "…'차가운 어머니'… 다시… 기억해야 해…",
						"english": "...'Cold Mother'... I must... remember again...",
						"japanese": "…「冷たき母」…もう一度…思い出さなければ…",
						"chinese": "…“冰冷母亲”…我必须…再次想起…",
						"french": "...« Mère Froide »... Je dois... me souvenir à nouveau...",
						"spanish": "...'Madre Fría'... Debo... recordar de nuevo...",
						"vietnamese": "...'Người Mẹ Lạnh Giá'... Phải... nhớ lại một lần nữa...",
						"thai": "...'มารดาผู้หนาวเหน็บ'... ต้อง... จดจำอีกครั้ง...",
						"hindi": "...'ठंडी माँ'... मुझे... फिर से याद करना होगा..."
					},
					"emotion": "base",
					"speaker": "eira",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…결국… 너희도… '그들'과… 다를 바 없구나…",
						"english": "...In the end... you too... are no different... from 'them'...",
						"japanese": "「…結局…お前たちも…『彼ら』と…変わらないな…」",
						"chinese": "「…最终…你们…也和‘他们’…没什么不同…」",
						"french": "...Au final... vous aussi... n'êtes pas différents... d''eux'...",
						"spanish": "...Al final... vosotros también... no sois diferentes... de 'ellos'...",
						"vietnamese": "...Cuối cùng... các ngươi cũng... chẳng khác gì... 'chúng'...",
						"thai": "...ในที่สุด... พวกเจ้าก็... ไม่ต่างอะไร... จาก 'พวกเขา'...",
						"hindi": "...अंत में... तुम भी... 'उनसे'... अलग नहीं हो..."
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "무슨 소리야? 뭘 안다는 거야!",
						"english": "What are you talking about? What do you know?!",
						"japanese": "「何を言ってるんだ？何を分かってるんだ！」",
						"chinese": "「你说什么？你知道什么！」",
						"french": "De quoi parles-tu ? Qu'est-ce que tu sais ?!",
						"spanish": "¿De qué hablas? ¡¿Qué sabes tú?!",
						"vietnamese": "Ngươi đang nói gì vậy? Ngươi biết gì?!",
						"thai": "พูดอะไรน่ะ? รู้อะไร!",
						"hindi": "तुम क्या कह रहे हो? तुम क्या जानते हो!"
					},
					"emotion": "angry"
				},
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "eira"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "(메모장을 꺼내며) '그들'… 그리고… '모든 진실은 얼음 속에 잠든다'…",
						"english": "(Takes out a notepad) \"They\"... and... \"All truth sleeps in ice\"...",
						"japanese": "(メモを取り出しながら)「彼ら」…そして…「すべての真実は氷の中に眠る」…",
						"chinese": "(拿出记事本)“他们”…以及…“所有真相皆沉睡于冰中”…",
						"french": "(Sortant un carnet) « Eux »… et… « Toute vérité sommeille dans la glace »…",
						"spanish": "(Sacando una libreta) \"Ellos\"... y... \"Toda verdad yace dormida en el hielo\"...",
						"vietnamese": "(Lấy ra cuốn sổ tay) \"Họ\"... và... \"Mọi sự thật đều ngủ vùi trong băng giá\"...",
						"thai": "(หยิบสมุดบันทึกออกมา) \"พวกเขา\"... และ... \"ความจริงทั้งมวลหลับใหลอยู่ในน้ำแข็ง\"...",
						"hindi": "(नोटपैड निकालते हुए) 'वे'... और... 'सारी सच्चाई बर्फ में सोई हुई है'..."
					}
				},
				{
					"content": {
						"korean": "승리했지만, 에이라의 조각난 기억은 더욱 큰 의문을 남겼다. 진실은 과연 누구의 편인가.",
						"english": "Victory, yet Eira's fragmented memories only raised more questions. Whose side does the truth really serve?",
						"japanese": "勝利したものの、エイラの断片的な記憶はさらなる疑問を残した。真実は一体誰の味方なのか。",
						"chinese": "虽已胜利，艾拉破碎的记忆却留下了更大的疑问。真相究竟偏袒何方？",
						"french": "La victoire fut nôtre, mais les souvenirs fragmentés d'Eira soulevaient des questions encore plus grandes. La vérité, de quel côté penche-t-elle ?",
						"spanish": "Victoria, pero los recuerdos fragmentados de Eira dejaron más dudas. ¿De qué lado está realmente la verdad?",
						"vietnamese": "Chiến thắng đã đến, nhưng ký ức vụn vỡ của Eira lại để lại những câu hỏi lớn hơn. Sự thật rốt cuộc đứng về phía ai?",
						"thai": "แม้จะได้รับชัยชนะ แต่ความทรงจำที่แตกสลายของเอร่ากลับทิ้งปริศนาที่ยิ่งใหญ่กว่าไว้ ความจริงอยู่ข้างใครกันแน่?",
						"hindi": "जीत मिली, पर ऐरा की बिखरी यादों ने और भी बड़े सवाल खड़े कर दिए। सच्चाई आखिर किसके पक्ष में है?"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			]
		}
	]
} as const;
