export const scenario_modern_codeczar_22_03 = {
	"scenario_id": "modern_codeczar_22_03",
	"order": 3,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"lin": {
			"id": "mon_d036a884-3dde-472c-9fe7-c4807643860f",
			"name": {
				"korean": "린",
				"english": "Lin",
				"japanese": "リン",
				"chinese": "琳",
				"french": "Lin",
				"spanish": "Lin",
				"vietnamese": "Lin",
				"thai": "ลิน",
				"hindi": "लिन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a095dd66-1857-4f44-68b0-2ece83006d00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/05b02694-f1ed-4e4c-b7ca-fb5b74a48900/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"디지털 혼란이 도시를 덮쳤다.",
			"시스템 오류는 사람들의 기억마저 조작한다.",
			"잃어버린 진실, 왜곡된 파편들.",
			"한 여인이 그 비틀린 기억 속에 갇혀 있다."
		],
		"english": [
			"Digital chaos engulfed the city.",
			"System errors even manipulate people's memories.",
			"Lost truths, distorted fragments.",
			"A woman is trapped within those twisted memories."
		],
		"japanese": [
			"デジタルな混乱が都市を覆った。",
			"システムエラーは人々の記憶さえも操作する。",
			"失われた真実、歪んだ断片。",
			"一人の女性が、その歪んだ記憶の中に囚われている。"
		],
		"chinese": [
			"数字混乱席卷了城市。",
			"系统错误甚至篡改人们的记忆。",
			"迷失的真相，扭曲的碎片。",
			"一位女性被困于那些扭曲的记忆中。"
		],
		"french": [
			"Le chaos numérique a submergé la ville.",
			"Les erreurs système manipulent même les souvenirs des gens.",
			"Vérités perdues, fragments distordus.",
			"Une femme est piégée dans ces souvenirs tordus."
		],
		"spanish": [
			"El caos digital invadió la ciudad.",
			"Los errores del sistema incluso manipulan los recuerdos de las personas.",
			"Verdades perdidas, fragmentos distorsionados.",
			"Una mujer está atrapada en esos recuerdos retorcidos."
		],
		"vietnamese": [
			"Hỗn loạn kỹ thuật số bao trùm thành phố.",
			"Lỗi hệ thống thậm chí thao túng ký ức của con người.",
			"Sự thật bị lãng quên, những mảnh vỡ méo mó.",
			"Một người phụ nữ bị mắc kẹt trong những ký ức méo mó đó."
		],
		"thai": [
			"ความวุ่นวายทางดิจิทัลเข้าปกคลุมเมือง",
			"ข้อผิดพลาดของระบบยังบิดเบือนความทรงจำของผู้คน",
			"ความจริงที่หายไป ชิ้นส่วนที่บิดเบี้ยว",
			"หญิงสาวคนหนึ่งติดอยู่ในความทรงจำที่บิดเบี้ยวเหล่านั้น"
		],
		"hindi": [
			"डिजिटल अराजकता ने शहर को अपनी चपेट में ले लिया।",
			"सिस्टम की खराबी लोगों की यादों में भी हेरफेर करती है।",
			"खोए हुए सच, विकृत टुकड़े।",
			"एक महिला उन मुड़ी हुई यादों में फंसी हुई है।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "도시의 데이터 흐름이 불안정하다. 모든 것이 뒤틀려 가는 공간.",
						"english": "The city's data flow is unstable. A space where everything is twisting.",
						"japanese": "都市のデータフローが不安定だ。すべてが歪んでいく空間。",
						"chinese": "城市的数据流不稳定。一个万物扭曲的空间。",
						"french": "Le flux de données de la ville est instable. Un espace où tout se tord.",
						"spanish": "El flujo de datos de la ciudad es inestable. Un espacio donde todo se retuerce.",
						"vietnamese": "Luồng dữ liệu của thành phố không ổn định. Một không gian nơi mọi thứ đang vặn vẹo.",
						"thai": "การไหลของข้อมูลในเมืองไม่เสถียร พื้นที่ที่ทุกสิ่งกำลังบิดเบี้ยว",
						"hindi": "शहर का डेटा प्रवाह अस्थिर है। एक ऐसी जगह जहां सब कुछ मुड़ रहा है।"
					}
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "lin",
					"spot": [
						3,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "여… 여기는… 어디죠…?",
						"english": "Wh-where... am I...?",
						"japanese": "こ… ここは… どこ…？",
						"chinese": "这… 这里是… 哪里…？",
						"french": "O-où... suis-je...?",
						"spanish": "¿D-dónde... estoy...?",
						"vietnamese": "Đ-đây là... đâu...?",
						"thai": "ที่… ที่นี่… ที่ไหน…คะ?",
						"hindi": "य… यह… कहां है…?"
					},
					"speaker": "lin"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "괜찮으세요? 정신 좀 차려봐요.",
						"english": "Are you alright? Try to gather yourself.",
						"japanese": "大丈夫ですか？しっかりしてください。",
						"chinese": "你还好吗？清醒一点。",
						"french": "Ça va ? Reprenez-vous.",
						"spanish": "¿Está bien? Intente recobrar la consciencia.",
						"vietnamese": "Bạn ổn không? Cố gắng tỉnh táo lại.",
						"thai": "คุณเป็นอะไรไหม? พยายามตั้งสติหน่อย",
						"hindi": "क्या आप ठीक हैं? खुद को संभालो।"
					}
				},
				{
					"content": {
						"korean": "머리가… 너무 아파요… 뭔가… 계속 잊혀지고… 이상한 단어들이… 맴돌아요.",
						"english": "My head... hurts so much... Something... keeps fading... Strange words... are swirling.",
						"japanese": "頭が… とても痛い… 何か… ずっと忘れられていく… 変な言葉が… ぐるぐるする。",
						"chinese": "我的头… 好痛… 好像… 一直在忘记… 奇怪的词语… 在脑海中盘旋。",
						"french": "Ma tête... me fait si mal... Quelque chose... s'efface continuellement... Des mots étranges... tourbillonnent.",
						"spanish": "Mi cabeza... me duele mucho... Algo... se sigue olvidando... Palabras extrañas... dan vueltas.",
						"vietnamese": "Đầu tôi… đau quá… Có gì đó… cứ mờ dần… Những từ kỳ lạ… cứ vẩn vơ.",
						"thai": "หัวของฉัน… ปวดมาก… บางอย่าง… กำลังจางหายไปเรื่อยๆ… คำแปลกๆ… วนเวียนอยู่",
						"hindi": "मेरा सिर… बहुत दर्द कर रहा है… कुछ… लगातार भूल रहा हूं… अजीब शब्द… घूम रहे हैं।"
					},
					"speaker": "lin",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "단어요? 어떤 단어인데요?",
						"english": "Words? What kind of words?",
						"japanese": "言葉？どんな言葉ですか？",
						"chinese": "词语？什么词语？",
						"french": "Des mots ? Quels mots ?",
						"spanish": "¿Palabras? ¿Qué palabras?",
						"vietnamese": "Từ ngữ? Những từ gì?",
						"thai": "คำเหรอ? คำว่าอะไรล่ะ?",
						"hindi": "शब्द? कौन से शब्द?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "카르텔… 왕… 으윽…!",
						"english": "Cartel... King... Ugh...!",
						"japanese": "カルテル… キング… うぅっ…！",
						"chinese": "卡特尔… 王… 呃…！",
						"french": "Cartel... Roi... Ugh...!",
						"spanish": "Cartel... Rey... ¡Ugh...!",
						"vietnamese": "Cartel… Vua… Ưgh…!",
						"thai": "คาร์เทล… ราชา… อึก…!",
						"hindi": "कार्टेल… राजा… उफ़्फ़…!"
					},
					"speaker": "lin"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "lin",
					"spot": [
						3,
						3
					],
					"type": "direction"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "또… 잡음이 들려요… 코… 코드 사이로… 섬뜩한 말들이…",
						"english": "Again... I hear static... through... the code... ominous words...",
						"japanese": "また…ノイズが聞こえる…コ…コードの隙間から…不気味な言葉が…",
						"chinese": "又…听到杂音了…在…代码之间…恐怖的话语…",
						"french": "Encore... J'entends du bruit... à travers... le code... des mots sinistres...",
						"spanish": "De nuevo... Oigo estática... entre... el código... palabras siniestras...",
						"vietnamese": "Lại... có tiếng nhiễu... qua... mã... những lời ghê rợn...",
						"thai": "อีกแล้ว...ได้ยินเสียงรบกวน...ผ่าน...รหัส...คำพูดที่น่าขนลุก...",
						"hindi": "फिर... शोर सुनाई दे रहा है... को... कोड के बीच से... डरावनी बातें..."
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "말요? 뭐라고 하는데요?",
						"english": "Words? What are they saying?",
						"japanese": "言葉ですか？なんて言ってるんですか？",
						"chinese": "话语？它们说了什么？",
						"french": "Des mots ? Qu'est-ce qu'ils disent ?",
						"spanish": "¿Palabras? ¿Qué dicen?",
						"vietnamese": "Lời à? Chúng nói gì vậy?",
						"thai": "คำพูดเหรอ? พูดว่าอะไร?",
						"hindi": "बातें? क्या कह रहे हैं?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "…'구역'… '털어라'… 옛날… 갱스터 은어 같아요…",
						"english": "...'Turf'... 'Raid'... Sounds like old... gangster slang...",
						"japanese": "…『シマ』…『荒らせ』…昔の…ギャングの隠語みたい…",
						"chinese": "...'地盘'... '抢劫'... 像是老式的... 帮派黑话...",
						"french": "...'Territoire'... 'Piller'... On dirait de l'ancien... argot de gangster...",
						"spanish": "...'Zona'... 'Asaltar'... Suena a... jerga de gánster antigua...",
						"vietnamese": "...'Địa bàn'... 'Cướp phá'... Giống như... tiếng lóng của băng đảng xưa...",
						"thai": "...'เขต'... 'ปล้น'... ฟังดูเหมือน... สแลงนักเลงเก่าๆ...",
						"hindi": "...'इलाका'... 'लूटना'... पुराने... गैंगस्टर की बोली लगती है..."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이건 단순한 오류가 아니야. 누군가 의도적으로…",
						"english": "This isn't just an error. Someone's deliberately...",
						"japanese": "これは単なるエラーじゃない。誰かが意図的に…",
						"chinese": "这不是简单的错误。有人故意…",
						"french": "Ce n'est pas juste une erreur. Quelqu'un délibérément...",
						"spanish": "Esto no es solo un error. Alguien intencionadamente...",
						"vietnamese": "Đây không chỉ là lỗi. Ai đó cố ý...",
						"thai": "นี่ไม่ใช่แค่ข้อผิดพลาด ใครบางคนจงใจ...",
						"hindi": "यह सिर्फ एक गलती नहीं है। कोई जानबूझकर..."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "lin",
					"spot": [
						3,
						3
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "제… 제 기억이… 계속 사라져요… 왜… 왜 이렇게 되는 거죠…?",
						"english": "My... my memories... keep fading... Why... why is this happening...?",
						"japanese": "私…私の記憶が…消え続けてる…どうして…どうしてこうなるの…？",
						"chinese": "我...我的记忆...一直在消失...为什么...为什么会这样...?",
						"french": "Ma... ma mémoire... ne cesse de s'effacer... Pourquoi... pourquoi est-ce que ça arrive... ?",
						"spanish": "Mi... mis recuerdos... no paran de desvanecerse... ¿Por qué... por qué está pasando esto...?",
						"vietnamese": "Ký ức của tôi... cứ biến mất... Tại sao... tại sao lại thế này...?",
						"thai": "ความทรงจำของฉัน...ยังคงเลือนหายไป...ทำไม...ทำไมถึงเป็นแบบนี้...?",
						"hindi": "मेरी... मेरी याददाश्त... मिटती जा रही है... क्यों... ऐसा क्यों हो रहा है...?"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "괜찮아요, 린. 우리가 꼭 진실을 찾을 거예요.",
						"english": "It's okay, Lynn. We'll find the truth, no matter what.",
						"japanese": "大丈夫よ、リン。私たちが必ず真実を見つけるから。",
						"chinese": "没关系，琳。我们一定会找到真相的。",
						"french": "Ça va aller, Lynn. Nous trouverons la vérité, quoi qu'il arrive.",
						"spanish": "Está bien, Lynn. Encontraremos la verdad, pase lo que pase.",
						"vietnamese": "Không sao đâu, Lynn. Chúng ta nhất định sẽ tìm ra sự thật.",
						"thai": "ไม่เป็นไร ลินน์ เราจะหาความจริงให้เจอแน่นอน",
						"hindi": "ठीक है, लिन। हम सच ढूंढ निकालेंगे।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "그… '왕'이… 절 이렇게 만들었어요… 그가… 전부…",
						"english": "That... 'King'... made me like this... He... everything...",
						"japanese": "あの…『王』が…私をこうさせたの…彼が…全てを…",
						"chinese": "那个...'王'...让我变成这样...他...一切...",
						"french": "Ce... 'Roi'... m'a rendue comme ça... Il... tout...",
						"spanish": "Ese... 'Rey'... me hizo así... Él... todo...",
						"vietnamese": "Cái... 'Vua' đó... đã biến tôi thành ra thế này... Hắn... tất cả...",
						"thai": " 'ราชา' นั่น...ทำให้ฉันเป็นแบบนี้...เขา...ทั้งหมด...",
						"hindi": "उस... 'राजा'... ने मुझे ऐसा बनाया... उसने... सब कुछ..."
					},
					"speaker": "lin",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "린의 눈빛이 흔들린다. 깊은 곳에서 끌어 올려진 분노.",
						"english": "Lynn's eyes waver. Rage pulled from deep within.",
						"japanese": "リンの瞳が揺れる。心の奥底から引き出された怒り。",
						"chinese": "琳的眼神动摇了。深藏的愤怒被激发出来。",
						"french": "Les yeux de Lynn vacillent. Une rage puisée au plus profond d'elle.",
						"spanish": "Los ojos de Lynn titubean. Una rabia extraída de lo más profundo.",
						"vietnamese": "Ánh mắt của Lynn dao động. Cơn giận dữ trỗi dậy từ sâu thẳm.",
						"thai": "แววตาของลินน์สั่นไหว ความโกรธที่ถูกดึงออกมาจากส่วนลึก",
						"hindi": "लिन की आँखें डगमगाती हैं। भीतर से निकली हुई गहरी नाराजगी।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "lin",
					"spot": [
						3,
						3
					],
					"type": "direction"
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "더 이상… 못 가겠어요… 하지만… 꼭 막아줘요… 그… '코드 제왕'을…",
						"english": "I can't... go on... anymore... But... you have to stop him... that... 'Code King'...",
						"japanese": "もう…無理…だけど…彼を止めて…あの…『コードの帝王』を…",
						"chinese": "我...不能再走了...但是...一定要阻止他...那个...'代码帝王'...",
						"french": "Je ne peux plus... continuer... Mais... vous devez l'arrêter... ce... 'Roi du Code'...",
						"spanish": "No puedo... seguir... Pero... tienen que detenerlo... a ese... 'Rey del Código'...",
						"vietnamese": "Tôi không thể... đi tiếp nữa... Nhưng... hãy ngăn chặn hắn... cái... 'Code King' đó...",
						"thai": "ฉันไปต่อไม่ไหวแล้ว...แต่...ต้องหยุดเขาให้ได้... 'ราชาโค้ด' นั่น...",
						"hindi": "मैं और नहीं... जा सकती... लेकिन... उसे रोकना होगा... उस... 'कोड किंग' को..."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "걱정 마요, 린. 우리가 끝낼게요.",
						"english": "Don't worry, Lynn. We'll end this.",
						"japanese": "心配しないで、リン。私たちが終わらせるから。",
						"chinese": "别担心，琳。我们会结束这一切的。",
						"french": "Ne t'inquiète pas, Lynn. Nous allons mettre fin à cela.",
						"spanish": "No te preocupes, Lynn. Nosotros acabaremos con esto.",
						"vietnamese": "Đừng lo, Lynn. Chúng tôi sẽ kết thúc chuyện này.",
						"thai": "ไม่ต้องห่วงนะ ลินน์ เราจะจัดการเอง",
						"hindi": "चिंता मत करो, लिन। हम इसे खत्म करेंगे।"
					},
					"speaker": "character_any"
				},
				{
					"duration_ms": 400,
					"action": "exit",
					"type": "direction",
					"direction": "down",
					"speaker": "lin"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "린은 뒤로 물러났다. 남은 건, 코드 제왕의 그림자뿐이었다.",
						"english": "Lynn retreated. Only the shadow of the Code Emperor remained.",
						"japanese": "リンは後退した。残されたのは、コード帝王の影だけだった。",
						"chinese": "琳后退了。只剩下代码帝王的影子。",
						"french": "Lynn recula. Seule l'ombre de l'Empereur du Code subsistait.",
						"spanish": "Lynn retrocedió. Solo quedaba la sombra del Emperador del Código.",
						"vietnamese": "Lynn lùi lại. Chỉ còn lại bóng tối của Code Emperor.",
						"thai": "ลินน์ถอยกลับไป สิ่งที่เหลืออยู่มีเพียงเงาของจักรพรรดิโค้ด",
						"hindi": "लिन पीछे हट गई। केवल कोड सम्राट की परछाई बची थी।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "정체 모를 시스템이 탐험대를 가로막았다.",
						"english": "An unknown system blocked the expedition team.",
						"japanese": "正体不明のシステムが探検隊を阻んだ。",
						"chinese": "一个不明系统挡住了探险队。",
						"french": "Un système inconnu bloqua l'équipe d'expédition.",
						"spanish": "Un sistema desconocido bloqueó al equipo de expedición.",
						"vietnamese": "Một hệ thống không xác định đã chặn đội thám hiểm.",
						"thai": "ระบบนิรนามขวางทีมสำรวจ",
						"hindi": "एक अज्ञात प्रणाली ने अभियान दल को रोक दिया।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "건방지게 여기까지 기어들어오다니. 네놈들도 오류인가.",
						"english": "How dare you crawl in here. Are you errors too?",
						"japanese": "生意気にもここまで這い上がってくるとは。お前たちもエラーか。",
						"chinese": "竟敢爬到这里来。你们也是错误吗？",
						"french": "Comment osez-vous vous faufiler jusqu'ici. Êtes-vous aussi des erreurs ?",
						"spanish": "¿Cómo os atrevéis a arrastraros hasta aquí? ¿También sois errores?",
						"vietnamese": "Dám bò đến tận đây. Các ngươi cũng là lỗi sao?",
						"thai": "กล้าดียังไงถึงคลานมาถึงนี่ พวกแกก็เป็นข้อผิดพลาดรึไง",
						"hindi": "यहां तक ​​आने की तुम्हारी हिम्मत कैसे हुई। क्या तुम भी त्रुटियां हो?"
					},
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "비켜. 네놈이 뭘 지키고 있든 상관없어.",
						"english": "Move. I don't care what you're protecting.",
						"japanese": "退け。貴様が何を護っていようと関係ない。",
						"chinese": "让开。我不管你在守护什么。",
						"french": "Écarte-toi. Peu m'importe ce que tu protèges.",
						"spanish": "Apártate. No me importa lo que estés protegiendo.",
						"vietnamese": "Tránh ra. Ta không quan tâm ngươi đang bảo vệ cái gì.",
						"thai": "หลีกไป ฉันไม่สนว่าแกกำลังปกป้องอะไรอยู่",
						"hindi": "हट जाओ। मुझे परवाह नहीं कि तुम क्या बचा रहे हो।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "건방진… 감히 {random_boss}님의 영역을 침범하다니. 제거해주마.",
						"english": "Insolent… How dare you invade {random_boss}'s domain. I'll eliminate you.",
						"japanese": "生意気な… 敢えて{random_boss}様の領域を侵犯するとは。排除してやろう。",
						"chinese": "傲慢的… 竟敢侵犯{random_boss}大人的领域。我会消灭你。",
						"french": "Insolents… Comment osez-vous envahir le domaine de {random_boss}. Je vais vous éliminer.",
						"spanish": "Insolentes… ¿Cómo os atrevéis a invadir el dominio de {random_boss}? Os eliminaré.",
						"vietnamese": "Xấc xược… Dám xâm phạm lãnh địa của {random_boss} sao. Ta sẽ loại bỏ các ngươi.",
						"thai": "บังอาจ… กล้าดียังไงมาบุกรุกอาณาเขตของท่าน {random_boss} ข้าจะกำจัดแกซะ",
						"hindi": "ढीठ… {random_boss} के क्षेत्र पर आक्रमण करने की तुम्हारी हिम्मत कैसे हुई। मैं तुम्हें खत्म कर दूंगा।"
					}
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "디지털 혼란이 다시 밀려들어왔다. 시야가 흐려진다.",
						"english": "Digital chaos surged back in. My vision blurs.",
						"japanese": "デジタルな混乱が再び押し寄せてきた。視界が霞む。",
						"chinese": "数字混乱再次涌入。视线模糊了。",
						"french": "Le chaos numérique déferla à nouveau. Ma vision se brouille.",
						"spanish": "El caos digital volvió a asaltar. Mi visión se nubla.",
						"vietnamese": "Hỗn loạn kỹ thuật số lại ập đến. Tầm nhìn mờ đi.",
						"thai": "ความโกลาหลทางดิจิทัลพัดเข้ามาอีกครั้ง วิสัยทัศน์พร่ามัว",
						"hindi": "डिजिटल अराजकता फिर से उमड़ पड़ी। मेरी दृष्टि धुंधली हो जाती है।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "하찮은 것들. 감히 {random_boss}님을 거역하려 했나.",
						"english": "Insignificant beings. Did you dare defy {random_boss}?",
						"japanese": "愚かな者たちめ。敢えて{random_boss}様に逆らおうとしたか。",
						"chinese": "微不足道的家伙们。竟敢反抗{random_boss}大人。",
						"french": "Êtres insignifiants. Avez-vous osé défier {random_boss} ?",
						"spanish": "Seres insignificantes. ¿Osasteis desafiar a {random_boss}?",
						"vietnamese": "Những kẻ hèn mọn. Dám chống lại {random_boss} sao?",
						"thai": "พวกไร้ค่า กล้าดียังไงมาต่อต้านท่าน {random_boss}",
						"hindi": "तुच्छ प्राणी। क्या तुमने {random_boss} का अनादर करने की हिम्मत की?"
					},
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "아직… 끝나지 않았어.",
						"english": "It's not over yet...",
						"japanese": "まだ…終わってない。",
						"chinese": "还没…结束。",
						"french": "Ce n'est pas encore fini...",
						"spanish": "Aún no ha terminado...",
						"vietnamese": "Chưa… kết thúc đâu.",
						"thai": "ยัง…ไม่จบ",
						"hindi": "अभी… खत्म नहीं हुआ है।"
					}
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "크윽… 겨우 이 정도…! 코… 코드 제왕의… 뜻은… 막을 수 없다…",
						"english": "Ugh… Is this all you've got…! The… Code Emperor's… will… cannot be stopped…",
						"japanese": "くっ… たかがこれしき…！コ… コード帝王の… 意思は… 止められぬ…",
						"chinese": "呃… 就这点程度…！代… 代码帝王的… 意志… 无法阻止…",
						"french": "Ugh… Ce n'est que ça… ! La… volonté de l'Empereur du Code… ne peut être arrêtée…",
						"spanish": "Ugh… ¿Solo esto…? ¡La… voluntad del Emperador del Código… no puede ser detenida…!",
						"vietnamese": "Khụ… Chỉ có thế này thôi sao…! Ý chí của… Code Emperor… không thể bị ngăn cản…",
						"thai": "อึก… แค่แค่นี้เองรึ…! พลัง… ของจักรพรรดิโค้ด… ไม่อาจหยุดยั้งได้…",
						"hindi": "उफ़… बस इतना ही…! कोड सम्राट की… इच्छा… रोकी नहीं जा सकती…"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "코드 제왕… 대체 누구냐.",
						"english": "Code Emperor… Who exactly are you?",
						"japanese": "コード帝王… 一体誰なんだ。",
						"chinese": "代码帝王… 到底是谁？",
						"french": "Empereur du Code… Qui es-tu, au juste ?",
						"spanish": "Emperador del Código… ¿Quién eres exactamente?",
						"vietnamese": "Code Emperor… Rốt cuộc ngươi là ai?",
						"thai": "จักรพรรดิโค้ด… เจ้าเป็นใครกันแน่",
						"hindi": "कोड सम्राट… तुम आखिर कौन हो?"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "전장은 잠시 고요해졌다. 하지만 빼앗긴 진실은 여전히 저 너머에 있었다.",
						"english": "The battlefield fell silent for a moment. But the stolen truth still lay beyond.",
						"japanese": "戦場は一時静まり返った。しかし、奪われた真実は未だその先にあった。",
						"chinese": "战场暂时归于平静。但被夺走的真相仍在那边。",
						"french": "Le champ de bataille se tut un instant. Mais la vérité volée se trouvait toujours au-delà.",
						"spanish": "El campo de batalla quedó en silencio por un momento. Pero la verdad robada aún yacía más allá.",
						"vietnamese": "Chiến trường tạm thời yên lặng. Nhưng sự thật đã bị tước đoạt vẫn nằm ở phía xa.",
						"thai": "สนามรบเงียบสงบลงชั่วขณะ แต่ความจริงที่ถูกช่วงชิงยังคงอยู่เบื้องหลัง",
						"hindi": "युद्ध का मैदान कुछ देर के लिए शांत हो गया। लेकिन चुराई हुई सच्चाई अभी भी उसके पार थी।"
					},
					"speaker": "narrator"
				}
			]
		}
	]
} as const;
