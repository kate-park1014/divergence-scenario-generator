export const scenario_modern_rohan_3_04 = {
	"scenario_id": "modern_rohan_3_04",
	"order": 4,
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
			"모든 것이 완벽한 도시, '로한'이 그 질서를 지배했다.",
			"그의 해결책은 늘 완벽했고, 논리적이었다.",
			"하지만 '카이'는 느꼈다. 너무 완벽한 것은 균열을 품고 있음을.",
			"차가운 감시 속에, 진실의 그림자가 드리운다."
		],
		"english": [
			"In the perfect city, 'Rohan' governed its order.",
			"His solutions were always perfect and logical.",
			"But 'Kai' felt that something too perfect harbored cracks.",
			"Under cold surveillance, the shadow of truth loomed."
		],
		"japanese": [
			"全てが完璧な都市、「ローハン」がその秩序を支配していた。",
			"彼の解決策は常に完璧で、論理的だった。",
			"しかし「カイ」は感じていた。完璧すぎるものは、亀裂を抱えていると。",
			"冷たい監視の中、真実の影が忍び寄る。"
		],
		"chinese": [
			"在这座完美之城中，“罗汉”主宰着一切秩序。",
			"他的解决方案总是完美无缺，且合乎逻辑。",
			"然而，“凯”却感觉到，过于完美的事物往往暗藏裂缝。",
			"在冰冷的监视下，真相的阴影悄然降临。"
		],
		"french": [
			"Dans la ville parfaite, 'Rohan' régnait sur l'ordre.",
			"Ses solutions étaient toujours parfaites et logiques.",
			"Mais 'Kai' sentait que la perfection recelait des failles.",
			"Sous une surveillance glaciale, l'ombre de la vérité planait."
		],
		"spanish": [
			"En la ciudad perfecta, 'Rohan' gobernaba el orden.",
			"Sus soluciones siempre eran perfectas y lógicas.",
			"Pero 'Kai' sentía que la perfección en exceso ocultaba grietas.",
			"Bajo una fría vigilancia, la sombra de la verdad se cernía."
		],
		"vietnamese": [
			"Trong thành phố hoàn hảo, 'Rohan' ngự trị trật tự.",
			"Các giải pháp của anh luôn hoàn hảo và logic.",
			"Nhưng 'Kai' cảm thấy rằng điều gì đó quá hoàn hảo lại ẩn chứa những vết nứt.",
			"Dưới sự giám sát lạnh lùng, bóng tối của sự thật hiện rõ."
		],
		"thai": [
			"ในเมืองที่สมบูรณ์แบบ 'โรฮัน' ได้ปกครองระเบียบนั้น",
			"วิธีแก้ปัญหาของเขาไร้ที่ติและมีเหตุผลเสมอ",
			"แต่ 'ไค' รู้สึกว่าความสมบูรณ์แบบที่เกินไปมักจะมีรอยร้าวซ่อนอยู่",
			"ภายใต้การเฝ้าระวังอันเย็นชา เงาของความจริงก็ปรากฏขึ้น"
		],
		"hindi": [
			"एक आदर्श शहर में, 'रोहन' ने व्यवस्था पर शासन किया।",
			"उनके समाधान हमेशा सही और तार्किक थे।",
			"लेकिन 'काई' ने महसूस किया कि अत्यधिक पूर्णता में दरारें छिपी होती हैं।",
			"कड़ी निगरानी में, सच्चाई की छाया मंडरा रही थी।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "최첨단 보안 회사, '카이'는 그곳에서 '로한'을 만났다.",
						"english": "At a state-of-the-art security company, 'Kai' met 'Rohan'.",
						"japanese": "最先端のセキュリティ会社で、「カイ」は「ローハン」と出会った。",
						"chinese": "在一家尖端安保公司，“凯”与“罗汉”相遇。",
						"french": "Dans une entreprise de sécurité de pointe, 'Kai' rencontra 'Rohan'.",
						"spanish": "En una empresa de seguridad de última generación, 'Kai' conoció a 'Rohan'.",
						"vietnamese": "Tại một công ty bảo mật tiên tiến, 'Kai' đã gặp 'Rohan'.",
						"thai": "ที่บริษัทรักษาความปลอดภัยล้ำสมัย 'ไค' ได้พบกับ 'โรฮัน'",
						"hindi": "एक अत्याधुनिक सुरक्षा कंपनी में, 'काई' 'रोहन' से मिला।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"action": "enter",
					"speaker": "kai",
					"duration_ms": 500
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "로한 칸나 씨. 명성대로군요.",
						"english": "Mr. Rohan Khanna. You live up to your reputation.",
						"japanese": "ロハン・カンナさん。噂通りの方ですね。",
						"chinese": "罗汉·坎纳先生。果然名不虚传。",
						"french": "Monsieur Rohan Khanna. Votre réputation vous précède.",
						"spanish": "Señor Rohan Khanna. Su reputación le precede.",
						"vietnamese": "Ông Rohan Khanna. Danh tiếng của ông quả không sai.",
						"thai": "คุณโรฮัน คันนา สมกับชื่อเสียงจริงๆ",
						"hindi": "श्री रोहन खन्ना। आप अपनी प्रतिष्ठा पर खरे उतरते हैं।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "어서 와요. 준비된 자료입니다. 완벽하죠.",
						"english": "Welcome. Here are the prepared materials. Perfect, aren't they?",
						"japanese": "ようこそ。用意した資料です。完璧でしょう？",
						"chinese": "欢迎。这是准备好的资料。很完美，对吧？",
						"french": "Bienvenue. Voici les documents préparés. Parfaits, n'est-ce pas ?",
						"spanish": "Bienvenido. Aquí tiene el material preparado. Perfecto, ¿verdad?",
						"vietnamese": "Chào mừng. Đây là tài liệu đã chuẩn bị. Hoàn hảo, phải không?",
						"thai": "ยินดีต้อนรับ นี่คือเอกสารที่เตรียมไว้ สมบูรณ์แบบใช่ไหมล่ะ",
						"hindi": "स्वागत है। ये तैयार सामग्री है। सही है ना?"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "모든 데이터는 빈틈이 없었다. 그러나 '카이'의 직감은 미묘한 위화감을 감지했다.",
						"english": "All data was flawless. Yet, 'Kai's intuition detected a subtle dissonance.",
						"japanese": "全てのデータに隙はなかった。しかし、「カイ」の直感は微かな違和感を察知した。",
						"chinese": "所有数据都天衣无缝。然而，“凯”的直觉却察觉到了一丝微妙的不和谐。",
						"french": "Toutes les données étaient impeccables. Pourtant, l'intuition de 'Kai' perçut une subtile dissonance.",
						"spanish": "Todos los datos eran impecables. Sin embargo, la intuición de 'Kai' detectó una sutil disonancia.",
						"vietnamese": "Mọi dữ liệu đều hoàn hảo. Tuy nhiên, trực giác của 'Kai' đã cảm nhận được một sự bất thường tinh tế.",
						"thai": "ข้อมูลทั้งหมดไร้ที่ติ ทว่าสัญชาตญาณของ 'ไค' กลับสัมผัสได้ถึงความผิดปกติบางอย่าง",
						"hindi": "सभी डेटा त्रुटिहीन थे। फिर भी, 'काई' की अंतर्ज्ञान ने एक सूक्ष्म असंगति का पता लगाया।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						3,
						2
					],
					"speaker": "kai",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "이 부분… 좀 이상합니다만.",
						"english": "This part... it seems a bit off.",
						"japanese": "この部分…少しおかしいのですが。",
						"chinese": "这一部分……有点奇怪。",
						"french": "Cette partie… me semble un peu étrange.",
						"spanish": "Esta parte... me parece un poco extraña.",
						"vietnamese": "Phần này... hơi lạ một chút.",
						"thai": "ส่วนนี้... ดูแปลกๆ นะครับ",
						"hindi": "यह हिस्सा... कुछ अजीब लग रहा है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "아, 그거요? 단순한 시스템 오류입니다. 이미 수정했어요.",
						"english": "Oh, that? It was a simple system error. I've already fixed it.",
						"japanese": "ああ、それですか？単純なシステムエラーです。既に修正済みですよ。",
						"chinese": "哦，那个啊？只是一个简单的系统错误。我已经修复了。",
						"french": "Ah, ça ? C'était une simple erreur système. Je l'ai déjà corrigée.",
						"spanish": "Ah, ¿eso? Fue un simple error del sistema. Ya lo corregí.",
						"vietnamese": "À, cái đó à? Chỉ là lỗi hệ thống đơn giản thôi. Tôi đã sửa rồi.",
						"thai": "อ๋อ นั่นน่ะเหรอครับ? เป็นแค่ข้อผิดพลาดของระบบง่ายๆ ครับ ผมแก้ไขไปแล้ว",
						"hindi": "ओह, वह? वह एक सामान्य सिस्टम त्रुटि थी। मैंने इसे पहले ही ठीक कर दिया है।"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "...너무 깔끔한데요.",
						"english": "...It's too clean.",
						"japanese": "...綺麗すぎる。",
						"chinese": "...太干净了。",
						"french": "...C'est trop propre.",
						"spanish": "...Es demasiado limpio.",
						"vietnamese": "...Quá sạch sẽ.",
						"thai": "...มันสะอาดเกินไป",
						"hindi": "...यह बहुत साफ है।"
					}
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "'카이'는 로한의 설명을 들으며 더 깊은 의심에 빠졌다.",
						"english": "Listening to Rohan's explanation, 'Kai' fell into deeper suspicion.",
						"japanese": "ロハンからの説明を聞くにつれて、カイはより深い疑念を抱いた。",
						"chinese": "听着罗汉的解释，'凯'陷入了更深的怀疑。",
						"french": "En écoutant l'explication de Rohan, 'Kai' sombra dans une suspicion encore plus profonde.",
						"spanish": "Escuchando la explicación de Rohan, 'Kai' cayó en una sospecha más profunda.",
						"vietnamese": "Nghe lời giải thích của Rohan, 'Kai' rơi vào sự nghi ngờ sâu sắc hơn.",
						"thai": "เมื่อฟังคำอธิบายของโรฮัน 'ไค' ก็ยิ่งสงสัยมากขึ้น",
						"hindi": "रोहन की व्याख्या सुनकर, 'काई' और गहरे संदेह में पड़ गया।"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "kai"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "저는 이 도시를 지키기 위해서라면 무엇이든 할 겁니다.",
						"english": "I will do anything to protect this city.",
						"japanese": "この街を守るためなら、私はどんなことでもする。",
						"chinese": "为了保护这座城市，我将不惜一切。",
						"french": "Je ferai tout pour protéger cette ville.",
						"spanish": "Haré cualquier cosa para proteger esta ciudad.",
						"vietnamese": "Tôi sẽ làm bất cứ điều gì để bảo vệ thành phố này.",
						"thai": "ฉันจะทำทุกอย่างเพื่อปกป้องเมืองนี้",
						"hindi": "मैं इस शहर की रक्षा के लिए कुछ भी करूँगा।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "특히… 제 '가족'을 위해서라면요.",
						"english": "Especially... for my 'family'.",
						"japanese": "特に…私の『家族』のためなら。",
						"chinese": "特别是……为了我的“家人”。",
						"french": "Surtout... pour ma 'famille'.",
						"spanish": "Especialmente... por mi 'familia'.",
						"vietnamese": "Đặc biệt là... vì 'gia đình' của tôi.",
						"thai": "โดยเฉพาะ... เพื่อ 'ครอบครัว' ของฉัน",
						"hindi": "खासकर... मेरे 'परिवार' के लिए।"
					}
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "가족이요? 갑자기 무슨...",
						"english": "Family? What are you suddenly talking about...",
						"japanese": "家族？急に何を…",
						"chinese": "家人？你突然说什么……",
						"french": "La famille ? De quoi parlez-vous soudainement...",
						"spanish": "¿Familia? ¿De qué hablas de repente...",
						"vietnamese": "Gia đình? Đột nhiên là sao...",
						"thai": "ครอบครัวเหรอ? จู่ๆ ก็พูดอะไร...",
						"hindi": "परिवार? अचानक तुम क्या बात कर रहे हो..."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "narrator",
					"content": {
						"korean": "로한의 눈빛이 섬뜩하게 번뜩였다. '카이'는 본능적인 위협을 느꼈다.",
						"english": "Rohan's eyes gleamed menacingly. 'Kai' felt an instinctive threat.",
						"japanese": "ロハンの目が不気味に輝いた。カイは本能的な脅威を感じた。",
						"chinese": "罗汉的眼神闪烁着一丝不详的光芒。'凯'感到了一种本能的威胁。",
						"french": "Les yeux de Rohan brillèrent d'un éclat menaçant. 'Kai' ressentit une menace instinctive.",
						"spanish": "Los ojos de Rohan brillaron de forma siniestra. 'Kai' sintió una amenaza instintiva.",
						"vietnamese": "Ánh mắt Rohan lóe lên đầy đe dọa. 'Kai' cảm nhận được một mối đe dọa bản năng.",
						"thai": "ดวงตาของโรฮันเปล่งประกายอย่างน่าขนลุก 'ไค' รู้สึกถึงภัยคุกคามโดยสัญชาตญาณ",
						"hindi": "रोहन की आँखें भयावह रूप से चमक उठीं। 'काई' ने एक सहज खतरा महसूस किया।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"type": "direction",
					"action": "enter",
					"speaker": "kai"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "로한 씨, 이 모든 사건 뒤에 뭔가 숨기고 있는 것 아닙니까?",
						"english": "Mr. Rohan, aren't you hiding something behind all these incidents?",
						"japanese": "ロハンさん、この全ての事件の裏で何かを隠しているのではないですか？",
						"chinese": "罗汉先生，难道您没有在这些事件背后隐瞒什么吗？",
						"french": "Monsieur Rohan, ne cachez-vous pas quelque chose derrière tous ces incidents ?",
						"spanish": "Señor Rohan, ¿no está ocultando algo detrás de todos estos incidentes?",
						"vietnamese": "Ông Rohan, ông có đang che giấu điều gì đằng sau tất cả những sự việc này không?",
						"thai": "คุณโรฮัน คุณไม่ได้ซ่อนอะไรไว้เบื้องหลังเหตุการณ์ทั้งหมดนี้ใช่ไหม?",
						"hindi": "मिस्टर रोहन, क्या आप इन सभी घटनाओं के पीछे कुछ छुपा नहीं रहे हैं?"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "저를 의심하는 겁니까? '카이'. 이 도시의 평화를 지키려는 저를?",
						"english": "Are you doubting me? 'Kai'. Me, who is trying to protect the peace of this city?",
						"japanese": "私を疑うのか？カイ。この街の平和を守ろうとする私を？",
						"chinese": "你是在怀疑我吗？'凯'。怀疑我这个正在努力守护这座城市和平的人？",
						"french": "Vous me doutez ? 'Kai'. Moi, qui essaie de protéger la paix de cette ville ?",
						"spanish": "¿Me estás dudando? 'Kai'. ¿A mí, que intento proteger la paz de esta ciudad?",
						"vietnamese": "Cậu đang nghi ngờ tôi ư? 'Kai'. Tôi, người đang cố gắng bảo vệ hòa bình của thành phố này sao?",
						"thai": "คุณกำลังสงสัยฉันเหรอ? 'ไค' ฉันที่กำลังพยายามปกป้องสันติภาพของเมืองนี้?",
						"hindi": "क्या तुम मुझ पर शक कर रहे हो? 'काई'। मुझ पर, जो इस शहर की शांति की रक्षा करने की कोशिश कर रहा है?"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "당신의 완벽함이 더 수상해요.",
						"english": "Your perfection makes you even more suspicious.",
						"japanese": "あなたの完璧さが、かえって怪しい。",
						"chinese": "您的完美反而更令人怀疑。",
						"french": "Votre perfection vous rend encore plus suspect.",
						"spanish": "Tu perfección te hace aún más sospechoso.",
						"vietnamese": "Sự hoàn hảo của anh càng khiến anh đáng ngờ hơn.",
						"thai": "ความสมบูรณ์แบบของคุณทำให้คุณน่าสงสัยยิ่งขึ้น",
						"hindi": "आपकी पूर्णता आपको और भी संदिग्ध बनाती है।"
					}
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "로한의 얼굴에 처음으로 완벽함의 균열이 드러났다.",
						"english": "For the first time, a crack appeared in Rohan's perfect facade.",
						"japanese": "ロハンの顔に、初めて完璧さの亀裂が現れた。",
						"chinese": "罗汉的脸上，第一次出现了完美的裂痕。",
						"french": "Pour la première fois, une fissure apparut dans la façade parfaite de Rohan.",
						"spanish": "Por primera vez, una grieta apareció en la perfecta fachada de Rohan.",
						"vietnamese": "Lần đầu tiên, một vết nứt xuất hiện trên vẻ hoàn hảo của Rohan.",
						"thai": "เป็นครั้งแรกที่รอยร้าวปรากฏขึ้นบนใบหน้าอันสมบูรณ์แบบของโรฮัน",
						"hindi": "पहली बार, रोहन के चेहरे पर पूर्णता में दरार दिखाई दी।"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "경고음이 울렸다. 데이터 심층부에서 정체불명의 존재가 출현했다.",
						"english": "An alarm blared. An unknown entity emerged from the data depths.",
						"japanese": "警報が鳴り響いた。データ深部から正体不明の存在が出現した。",
						"chinese": "警报响起。未知实体从数据深处出现。",
						"french": "Une alarme retentit. Une entité inconnue a émergé des profondeurs des données.",
						"spanish": "Sonó una alarma. Una entidad desconocida emergió de las profundidades de los datos.",
						"vietnamese": "Chuông báo động vang lên. Một thực thể không xác định đã xuất hiện từ sâu thẳm dữ liệu.",
						"thai": "เสียงเตือนดังขึ้น สิ่งมีชีวิตที่ไม่รู้จักปรากฏขึ้นจากส่วนลึกของข้อมูล",
						"hindi": "एक अलार्म बज उठा। डेटा की गहराइयों से एक अज्ञात इकाई उभरी।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "감히 이곳에 발을 들이다니. 어리석은 인간들.",
						"english": "How dare you step foot in this place. Foolish humans.",
						"japanese": "よくもここに足を踏み入れたな。愚かな人間たちめ。",
						"chinese": "竟敢踏足此地。愚蠢的人类。",
						"french": "Comment osez-vous mettre les pieds ici. Humains stupides.",
						"spanish": "Cómo osáis pisar este lugar. Humanos necios.",
						"vietnamese": "Dám đặt chân đến nơi này. Loài người ngu ngốc.",
						"thai": "บังอาจเข้ามาที่นี่ได้ยังไง มนุษย์โง่เขลา.",
						"hindi": "तुम्हारी हिम्मत कैसे हुई यहां कदम रखने की। मूर्ख मनुष्य।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"action": "enter",
					"speaker": "kai",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "이게 로한의 '시스템 오류'인가!",
						"english": "Is this Rohan's 'system error'?",
						"japanese": "これがロハンという者の『システムエラー』か！",
						"chinese": "这就是罗汉的“系统错误”吗！",
						"french": "Est-ce là l'« erreur système » de Rohan ?",
						"spanish": "¡¿Esto es el 'error del sistema' de Rohan?!",
						"vietnamese": "Đây có phải là 'lỗi hệ thống' của Rohan không!",
						"thai": "นี่คือ 'ข้อผิดพลาดของระบบ' ของโรฮันงั้นหรือ!",
						"hindi": "क्या यह रोहन की 'सिस्टम त्रुटि' है!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"type": "direction",
					"action": "enter",
					"speaker": "random_boss"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "흥. 약한 자들만이 싸우죠. 저는 그 과정을 지켜볼 뿐.",
						"english": "Hmph. Only the weak fight. I merely observe the process.",
						"japanese": "フン。弱い者だけが争う。私はその過程を見守るだけだ。",
						"chinese": "哼。只有弱者才会战斗。我只负责旁观。",
						"french": "Hmph. Seuls les faibles se battent. Je ne fais qu'observer le processus.",
						"spanish": "Hmpf. Solo los débiles luchan. Yo solo observo el proceso.",
						"vietnamese": "Hừm. Chỉ kẻ yếu mới chiến đấu. Tôi chỉ quan sát quá trình thôi.",
						"thai": "หึ มีแต่คนอ่อนแอเท่านั้นที่ต่อสู้ ฉันแค่เฝ้าดูกระบวนการ",
						"hindi": "हूँ। केवल कमजोर ही लड़ते हैं। मैं बस प्रक्रिया का अवलोकन करता हूँ।"
					}
				},
				{
					"direction": "up",
					"duration_ms": 400,
					"type": "direction",
					"speaker": "random_boss",
					"action": "exit"
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "...도망가는 건가. 비겁한 자.",
						"english": "...Fleeing, are we? Coward.",
						"japanese": "…逃げるのか。臆病者め。",
						"chinese": "...逃跑了吗。懦夫。",
						"french": "...Vous fuyez, hein ? Lâche.",
						"spanish": "...¿Estás huyendo? Cobarde.",
						"vietnamese": "...Chạy trốn à. Đồ hèn nhát.",
						"thai": "…หนีไปงั้นหรือ ไอ้ขี้ขลาด.",
						"hindi": "...भाग रहे हो? कायर।"
					},
					"emotion": "angry",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "크윽... 결국... 로한의 함정이었다니...",
						"english": "Ugh... In the end... it was Rohan's trap...",
						"japanese": "くっ…結局…ロハンの罠だったとは…",
						"chinese": "可恶……最终……竟然是罗汉的陷阱……",
						"french": "Urgh... Au final... c'était le piège de Rohan...",
						"spanish": "Uf... Al final... ¡era la trampa de Rohan...!",
						"vietnamese": "Khốn kiếp... Cuối cùng... hóa ra là bẫy của Rohan...",
						"thai": "อึก... ในที่สุด... มันเป็นกับดักของโรฮัน...",
						"hindi": "उफ़... अंत में... यह रोहन का जाल था..."
					}
				},
				{
					"type": "direction",
					"spot": [
						3,
						2
					],
					"speaker": "kai",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "로한... 네가 뭘 꾸미든, 반드시 밝혀낼 것이다.",
						"english": "Rohan... whatever you're plotting, I'll uncover it.",
						"japanese": "ロハン…お前が何を企んでいようと、必ず暴いてやる。",
						"chinese": "罗汉……无论你密谋什么，我都会揭露出来。",
						"french": "Rohan... quoi que tu manigances, je le découvrirai.",
						"spanish": "Rohan... lo que sea que estés tramando, lo descubriré.",
						"vietnamese": "Rohan... dù ngươi âm mưu gì, ta nhất định sẽ vạch trần.",
						"thai": "โรฮัน... ไม่ว่าแกจะวางแผนอะไร ฉันจะเปิดเผยมันให้ได้.",
						"hindi": "रोहन... तुम जो भी साजिश रच रहे हो, मैं उसे उजागर करूँगा।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "'카이'의 의심은 이제 확신이 되었다. 더 깊은 진실이 그들을 기다리고 있었다.",
						"english": "Kai's suspicion had now turned into certainty. A deeper truth awaited them.",
						"japanese": "カイの疑念は確信へと変わった。より深い真実が彼らを待っていた。",
						"chinese": "“凯”的怀疑现在变成了确信。更深层的真相等待着他们。",
						"french": "Le doute de 'Kai' s'était transformé en certitude. Une vérité plus profonde les attendait.",
						"spanish": "La sospecha de 'Kai' ahora se había convertido en certeza. Una verdad más profunda los esperaba.",
						"vietnamese": "Sự nghi ngờ của 'Kai' giờ đã trở thành sự thật. Một sự thật sâu sắc hơn đang chờ đợi họ.",
						"thai": "ความสงสัยของ 'ไค' ได้กลายเป็นความมั่นใจแล้ว ความจริงที่ลึกซึ้งกว่ากำลังรอพวกเขาอยู่.",
						"hindi": "काई का संदेह अब निश्चितता में बदल गया था। एक गहरा सत्य उनका इंतजार कर रहा था।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 것들. 감히 로한의 계획을 방해하려 하다니.",
						"english": "Fools. How dare you try to interfere with Rohan's plan.",
						"japanese": "愚か者どもめ。よくもロハンの計画を邪魔しようとしたな。",
						"chinese": "愚蠢的东西。竟敢试图阻挠罗汉的计划。",
						"french": "Imbéciles. Comment osez-vous tenter d'interférer avec le plan de Rohan.",
						"spanish": "¡Necios! Cómo osáis intentar interferir con el plan de Rohan.",
						"vietnamese": "Đồ ngu ngốc. Dám cả gan cản trở kế hoạch của Rohan.",
						"thai": "เจ้าพวกโง่ บังอาจขัดขวางแผนการของโรฮันได้ยังไง",
						"hindi": "मूर्खों। तुम्हारी हिम्मत कैसे हुई रोहन की योजना में दखल देने की।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"speaker": "kai",
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "…아직 끝나지 않았다. 로한, 네 정체를 밝혀낼 때까지.",
						"english": "...It's not over yet. Rohan, not until I uncover your true identity.",
						"japanese": "…まだ終わっていない。ロハン、お前の正体を暴くまで。",
						"chinese": "……还没有结束。罗汉，直到我揭露你的真面目。",
						"french": "...Ce n'est pas encore fini. Rohan, pas avant que je découvre ta véritable identité.",
						"spanish": "...Aún no ha terminado. Rohan, no hasta que descubra tu verdadera identidad.",
						"vietnamese": "...Chưa kết thúc đâu. Rohan, cho đến khi ta vạch trần thân phận thật của ngươi.",
						"thai": "...ยังไม่จบ โรฮัน จนกว่าฉันจะเปิดเผยตัวตนที่แท้จริงของแก.",
						"hindi": "...अभी खत्म नहीं हुआ है। रोहन, जब तक मैं तुम्हारी असली पहचान उजागर नहीं कर देता।"
					},
					"emotion": "angry",
					"type": "speech"
				}
			],
			"id": 15
		}
	]
} as const;
