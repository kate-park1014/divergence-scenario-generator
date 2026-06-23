export const scenario_modern_reverberation_51_01 = {
	"scenario_id": "modern_reverberation_51_01",
	"order": 1,
	"act": "intro",
	"theme": "modern",
	"actors": {
		"max": {
			"id": "mon_6e8c1577-89e2-49f6-a9f3-a6521b9e7f59",
			"name": {
				"korean": "맥스",
				"english": "Max",
				"japanese": "マックス",
				"chinese": "麦克斯",
				"french": "Max",
				"spanish": "Max",
				"vietnamese": "Max",
				"thai": "แม็กซ์",
				"hindi": "मैक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8bd7f351-400b-46f9-828f-aa2542734900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/62971060-c904-4d96-afcd-d11f831b3e00/public"
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
						"korean": "어둡고 습한 골목 끝. 낡은 상점이 모습을 드러낸다.",
						"english": "At the end of a dark, damp alley, an old shop appears.",
						"japanese": "暗く湿った路地の奥。古びた店が姿を現す。",
						"chinese": "在昏暗潮湿的小巷尽头，一家破旧的商店显露出来。",
						"french": "Au bout d'une ruelle sombre et humide, une vieille boutique apparaît.",
						"spanish": "Al final de un callejón oscuro y húmedo, una vieja tienda aparece.",
						"vietnamese": "Cuối con hẻm tối tăm ẩm ướt, một cửa hàng cũ kỹ hiện ra.",
						"thai": "สุดตรอกมืดมิดชื้นแฉะ ร้านเก่าแก่ปรากฏกายขึ้น",
						"hindi": "एक अँधेरी, नम गली के अंत में, एक पुरानी दुकान दिखाई देती है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "여기가 '고요한 메아리'?",
						"english": "Is this 'Silent Echo'?",
						"japanese": "ここが「静かなる木霊」？",
						"chinese": "这里是“寂静回响”吗？",
						"french": "C'est 'L'Écho Silencieux' ?",
						"spanish": "¿Aquí es 'El Eco Silencioso'?",
						"vietnamese": "Đây là 'Tiếng Vọng Tĩnh Lặng' à?",
						"thai": "ที่นี่คือ 'เสียงสะท้อนอันเงียบงัน' รึเปล่า?",
						"hindi": "क्या यह 'शांत प्रतिध्वनि' है?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"spot": [
						5,
						5
					],
					"type": "direction",
					"speaker": "random_boss",
					"action": "enter"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "어서 와. 기다리고 있었어.",
						"english": "Welcome. I've been waiting.",
						"japanese": "ようこそ。待っていたよ。",
						"chinese": "欢迎。我一直在等你。",
						"french": "Bienvenue. Je t'attendais.",
						"spanish": "Bienvenido. Te estaba esperando.",
						"vietnamese": "Chào mừng. Ta đã đợi ngươi.",
						"thai": "ยินดีต้อนรับ ฉันรออยู่",
						"hindi": "स्वागत है। मैं इंतज़ार कर रहा था।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "혹시 고대 유물에 대해 아세요?",
						"english": "Do you know anything about ancient relics?",
						"japanese": "もしや、古代遺物についてご存知ですか？",
						"chinese": "你知道古老遗物的事吗？",
						"french": "Connaissez-vous quelque chose sur les reliques anciennes ?",
						"spanish": "¿Sabes algo sobre las reliquias antiguas?",
						"vietnamese": "Ông có biết gì về di vật cổ xưa không?",
						"thai": "คุณพอจะทราบเรื่องวัตถุโบราณบ้างไหม?",
						"hindi": "क्या आप प्राचीन अवशेषों के बारे में जानते हैं?"
					}
				},
				{
					"content": {
						"korean": "물론. 아주 희귀한 것을 찾고 있더군.",
						"english": "Of course. You're looking for something very rare, aren't you?",
						"japanese": "もちろん。とても珍しいものを探しているようですね。",
						"chinese": "当然。你在找一些非常稀有的东西，不是吗？",
						"french": "Bien sûr. Tu cherches quelque chose de très rare, n'est-ce pas ?",
						"spanish": "Claro. Estás buscando algo muy raro, ¿verdad?",
						"vietnamese": "Tất nhiên. Ngươi đang tìm thứ gì đó rất hiếm, đúng không?",
						"thai": "แน่นอน คุณกำลังหาสิ่งที่หายากมากใช่ไหมล่ะ",
						"hindi": "ज़रूर। तुम कुछ बहुत ही दुर्लभ चीज़ ढूँढ रहे हो, है ना?"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "max",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "max",
					"emotion": "sad",
					"content": {
						"korean": "이 사람… 뭔가 꺼림칙해.",
						"english": "This person... something feels off about them.",
						"japanese": "この人… なんだか不気味だ。",
						"chinese": "这个人……总觉得有些不对劲。",
						"french": "Cette personne... quelque chose cloche.",
						"spanish": "Esta persona... algo no me cuadra.",
						"vietnamese": "Người này… có gì đó không ổn.",
						"thai": "คนนี้... รู้สึกแปลกๆ",
						"hindi": "यह व्यक्ति... कुछ अजीब लग रहा है।"
					}
				},
				{
					"content": {
						"korean": "낡은 가죽 문서 조각… 이건 뭐지?",
						"english": "An old leather document fragment... What is this?",
						"japanese": "古い革の文書の破片…これは何だ？",
						"chinese": "一张旧皮革文件碎片……这是什么？",
						"french": "Un fragment de document en cuir... Qu'est-ce que c'est ?",
						"spanish": "Un fragmento de documento de cuero viejo... ¿Qué es esto?",
						"vietnamese": "Một mảnh tài liệu da cũ... Cái này là gì?",
						"thai": "เศษเอกสารหนังเก่า... นี่มันอะไรกัน?",
						"hindi": "चमड़े के दस्तावेज़ का एक पुराना टुकड़ा... यह क्या है?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "부서진 조각상도 있네.",
						"english": "There's also a broken statue.",
						"japanese": "壊れた彫像もあるね。",
						"chinese": "还有一座破碎的雕像。",
						"french": "Il y a aussi une statue brisée.",
						"spanish": "También hay una estatua rota.",
						"vietnamese": "Cũng có một bức tượng vỡ.",
						"thai": "มีรูปปั้นที่แตกหักด้วย",
						"hindi": "एक टूटी हुई मूर्ति भी है।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "happy",
					"content": {
						"korean": "그 유물… 가져다주면, 원하는 것을 얻을 거야.",
						"english": "That artifact... Bring it to me, and you'll get what you desire.",
						"japanese": "その遺物…持ってくれば、望むものを手に入れられるだろう。",
						"chinese": "那个文物……如果你把它带来，你就会得到你想要的东西。",
						"french": "Cet artefact... Apporte-le-moi, et tu obtiendras ce que tu désires.",
						"spanish": "Ese artefacto... Tráemelo, y obtendrás lo que deseas.",
						"vietnamese": "Di vật đó... Mang nó đến đây, và ngươi sẽ có được điều mình muốn.",
						"thai": "สิ่งประดิษฐ์นั้น... นำมันมาให้ฉัน แล้วเจ้าจะได้สิ่งที่ปรารถนา",
						"hindi": "वह कलाकृति... इसे मेरे पास लाओ, और तुम्हें वह मिलेगा जो तुम चाहते हो।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "max",
					"type": "direction"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "가지 마. 저 사람은… 위험해.",
						"english": "Don't go. That person... is dangerous.",
						"japanese": "行かないで。あの人は…危険だ。",
						"chinese": "别去。那个人……很危险。",
						"french": "N'y va pas. Cette personne... est dangereuse.",
						"spanish": "No vayas. Esa persona... es peligrosa.",
						"vietnamese": "Đừng đi. Người đó... rất nguy hiểm.",
						"thai": "อย่าไปเลย คนนั้น... อันตรายนะ",
						"hindi": "मत जाओ। वह व्यक्ति... खतरनाक है।"
					},
					"speaker": "max",
					"type": "speech"
				},
				{
					"content": {
						"korean": "하지만 저 유물은….",
						"english": "But that artifact...",
						"japanese": "だけど、あの遺物は…。",
						"chinese": "但是那个文物……",
						"french": "Mais cet artefact...",
						"spanish": "Pero ese artefacto...",
						"vietnamese": "Nhưng di vật đó...",
						"thai": "แต่สิ่งประดิษฐ์นั้น...",
						"hindi": "लेकिन वह कलाकृति..."
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "호기심에 끌려선 안 돼. 후회할 거야.",
						"english": "Don't give in to curiosity. You'll regret it.",
						"japanese": "好奇心に流されてはいけない。後悔するぞ。",
						"chinese": "不要被好奇心驱使。你会后悔的。",
						"french": "Ne cède pas à la curiosité. Tu le regretteras.",
						"spanish": "No te dejes llevar por la curiosidad. Te arrepentirás.",
						"vietnamese": "Đừng để bị cuốn theo sự tò mò. Ngươi sẽ hối hận đấy.",
						"thai": "อย่าตกเป็นเหยื่อของความอยากรู้เลย เจ้าจะต้องเสียใจ",
						"hindi": "जिज्ञासा के आगे मत झुको। तुम्हें पछतावा होगा।"
					},
					"speaker": "max",
					"type": "speech"
				},
				{
					"content": {
						"korean": "우린 진실을 알아야 해.",
						"english": "We need to know the truth.",
						"japanese": "私たちは真実を知る必要がある。",
						"chinese": "我们需要知道真相。",
						"french": "Nous devons connaître la vérité.",
						"spanish": "Necesitamos saber la verdad.",
						"vietnamese": "Chúng ta cần phải biết sự thật.",
						"thai": "เราต้องรู้ความจริง",
						"hindi": "हमें सच्चाई जाननी होगी।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "max",
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "max",
					"content": {
						"korean": "계약이라니… 대체 뭘 원하는 거야?",
						"english": "A contract... What exactly do you want?",
						"japanese": "契約だと…一体何を望んでいるんだ？",
						"chinese": "契约……你到底想要什么？",
						"french": "Un contrat... Qu'est-ce que tu veux au juste ?",
						"spanish": "Un contrato... ¿Qué quieres exactamente?",
						"vietnamese": "Hợp đồng ư... Rốt cuộc ngươi muốn gì?",
						"thai": "สัญญาเหรอ... ตกลงแล้วเจ้าต้องการอะไร?",
						"hindi": "एक अनुबंध... तुम आखिर क्या चाहते हो?"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "그건 우리가 알아낼 일이야.",
						"english": "That's for us to find out.",
						"japanese": "それは私たちが突き止めることだ。",
						"chinese": "那是我们要弄清楚的事情。",
						"french": "C'est à nous de le découvrir.",
						"spanish": "Eso es algo que debemos averiguar.",
						"vietnamese": "Đó là việc chúng ta cần tìm hiểu.",
						"thai": "นั่นคือสิ่งที่เราต้องค้นหา",
						"hindi": "यह हमें पता लगाना है।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이건 단순한 유물 의뢰가 아니야. 뭔가… 깊은 그림자가 느껴져.",
						"english": "This isn't just a simple artifact request. I sense... a deep shadow.",
						"japanese": "これは単なる遺物依頼じゃない。何か…深い影を感じる。",
						"chinese": "这不仅仅是一个简单的文物委托。我感觉到……一股深沉的阴影。",
						"french": "Ce n'est pas une simple requête d'artefact. Je ressens... une ombre profonde.",
						"spanish": "Esto no es solo una simple petición de artefacto. Siento... una sombra profunda.",
						"vietnamese": "Đây không chỉ là một yêu cầu di vật đơn thuần. Ta cảm thấy... một bóng tối sâu thẳm.",
						"thai": "นี่ไม่ใช่แค่คำขอสิ่งประดิษฐ์ธรรมดาๆ มีบางอย่าง... เงาที่ลึกล้ำซ่อนอยู่",
						"hindi": "यह सिर्फ एक साधारण कलाकृति का अनुरोध नहीं है। मुझे... एक गहरी छाया महसूस हो रही है।"
					},
					"emotion": "sad",
					"speaker": "max",
					"type": "speech"
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
					"speaker": "max"
				},
				{
					"type": "speech",
					"speaker": "max",
					"emotion": "sad",
					"content": {
						"korean": "돌아갈 수 없을 거야… 이 길의 끝은….",
						"english": "You can't go back... This path's end is...",
						"japanese": "もう戻れない…この道の先は…。",
						"chinese": "无法回头了…这条路的尽头是…",
						"french": "Tu ne pourras plus revenir… Le bout de ce chemin est…",
						"spanish": "No podrás volver… El final de este camino es…",
						"vietnamese": "Sẽ không thể quay lại… Cuối con đường này là…",
						"thai": "คุณจะกลับไปไม่ได้แล้ว... ปลายทางของเส้นทางนี้คือ...",
						"hindi": "तुम वापस नहीं जा सकते... इस राह का अंत है..."
					}
				},
				{
					"content": {
						"korean": "멈출 수 없어. 이미 시작됐어.",
						"english": "Can't stop. It's already begun.",
						"japanese": "止められない。もう始まっている。",
						"chinese": "无法停止。已经开始了。",
						"french": "Impossible de s'arrêter. C'est déjà commencé.",
						"spanish": "No puedo parar. Ya ha empezado.",
						"vietnamese": "Không thể dừng lại. Đã bắt đầu rồi.",
						"thai": "หยุดไม่ได้แล้ว. มันเริ่มขึ้นแล้ว.",
						"hindi": "रुक नहीं सकता। यह पहले ही शुरू हो चुका है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "max",
					"type": "speech",
					"content": {
						"korean": "…그럼, 제발 조심해.",
						"english": "...Then, please be careful.",
						"japanese": "…なら、どうか気をつけて。",
						"chinese": "…那么，请务必小心。",
						"french": "…Alors, s'il te plaît, sois prudent.",
						"spanish": "…Entonces, por favor, ten cuidado.",
						"vietnamese": "…Vậy thì, xin hãy cẩn thận.",
						"thai": "...ถ้าอย่างนั้น โปรดระวังด้วย.",
						"hindi": "...तो, कृपया सावधान रहना।"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "angry",
					"content": {
						"korean": "어리석은 것들. 너희는 영원히 계약의 굴레에서 벗어날 수 없어.",
						"english": "Fools. You'll never escape the shackles of the contract.",
						"japanese": "愚か者ども。お前たちは永遠に契約の枷から逃れられない。",
						"chinese": "愚蠢的东西。你们永远无法摆脱契约的束缚。",
						"french": "Idiots. Vous n'échapperez jamais aux chaînes du contrat.",
						"spanish": "Necios. Nunca escaparéis de los grilletes del contrato.",
						"vietnamese": "Đồ ngốc. Các ngươi sẽ không bao giờ thoát khỏi xiềng xích của khế ước.",
						"thai": "พวกโง่. พวกเจ้าจะไม่มีวันหลุดพ้นจากพันธนาการของสัญญา",
						"hindi": "मूर्खों। तुम अनुबंध की बेड़ियों से कभी नहीं बच पाओगे।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…다시 돌아올 거야. 반드시.",
						"english": "...I'll be back. You can count on it.",
						"japanese": "…また戻ってくる。必ず。",
						"chinese": "……我还会回来。一定会。",
						"french": "...Je reviendrai. Sûrement.",
						"spanish": "...Volveré. Sin falta.",
						"vietnamese": "...Ta sẽ trở lại. Chắc chắn rồi.",
						"thai": "...ฉันจะกลับมา. แน่นอน.",
						"hindi": "...मैं वापस आऊँगा। निश्चित रूप से।"
					},
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "크윽… 겨우 이 정도라니….",
						"english": "Ugh... Is this all you've got?",
						"japanese": "くっ…たかがこの程度とは…。",
						"chinese": "呃…就这点程度吗…。",
						"french": "Ugh… Seulement ça…",
						"spanish": "Ugh… ¿Es solo esto…?",
						"vietnamese": "Khụ… Chỉ có thế này thôi sao…",
						"thai": "อึก... แค่เท่านี้เองหรือ...",
						"hindi": "उफ़... बस इतना ही...?"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "하지만 계약은… 아직 끝나지 않았어. '피의 서약'은….",
						"english": "But the covenant... isn't over yet. The 'Blood Pact' is...",
						"japanese": "しかし契約は…まだ終わっていない。『血の誓約』は…。",
						"chinese": "但契约…尚未结束。《血之誓约》是…。",
						"french": "Mais le pacte… n'est pas encore terminé. Le 'Pacte de Sang' est…",
						"spanish": "Pero el pacto… aún no ha terminado. El 'Pacto de Sangre' es…",
						"vietnamese": "Nhưng giao ước… vẫn chưa kết thúc. 'Lời thề máu' là…",
						"thai": "แต่พันธสัญญา... ยังไม่สิ้นสุด. 'คำสาบานเลือด' คือ...",
						"hindi": "लेकिन वाचा... अभी खत्म नहीं हुई है। 'रक्त शपथ' है..."
					}
				},
				{
					"content": {
						"korean": "피의 서약… 대체 뭐야.",
						"english": "Blood Pact... What is it, exactly?",
						"japanese": "血の誓約…一体何なんだ。",
						"chinese": "血之誓约…到底是什么。",
						"french": "Pacte de Sang… Qu'est-ce que c'est, exactement ?",
						"spanish": "Pacto de Sangre… ¿Qué es exactamente?",
						"vietnamese": "Lời thề máu… rốt cuộc là gì.",
						"thai": "คำสาบานเลือด... มันคืออะไรกันแน่.",
						"hindi": "रक्त शपथ... आखिर क्या है यह?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "쓰러진 자의 마지막 말은 새로운 의문을 던졌다.",
						"english": "The fallen's last words posed new questions.",
						"japanese": "倒れた者の最期の言葉は、新たな疑問を投げかけた。",
						"chinese": "倒下者的遗言抛出了新的疑问。",
						"french": "Les derniers mots du vaincu ont soulevé de nouvelles questions.",
						"spanish": "Las últimas palabras del caído plantearon nuevas preguntas.",
						"vietnamese": "Những lời cuối của kẻ bại trận đã đặt ra những câu hỏi mới.",
						"thai": "คำพูดสุดท้ายของผู้ล้มลงได้จุดประกายคำถามใหม่",
						"hindi": "गिरे हुए के अंतिम शब्दों ने नए प्रश्न खड़े किए।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "탐험대는 이제, 더 깊은 미스터리로 향한다.",
						"english": "The expedition now ventures into deeper mysteries.",
						"japanese": "探検隊は今、より深い謎へと向かう。",
						"chinese": "探险队现在将深入更深的谜团。",
						"french": "L'expédition s'enfonce maintenant dans des mystères plus profonds.",
						"spanish": "La expedición ahora se adentra en misterios más profundos.",
						"vietnamese": "Đội thám hiểm giờ đây tiến vào những bí ẩn sâu hơn.",
						"thai": "คณะสำรวจกำลังมุ่งหน้าสู่ความลึกลับที่ลึกซึ้งยิ่งขึ้น",
						"hindi": "अभियान अब गहरे रहस्यों में प्रवेश कर रहा है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "마침내 마주한, 고대 계약의 집행자.",
						"english": "Finally facing the Enforcer of the Ancient Covenant.",
						"japanese": "ついに相対した、古き契約の執行者。",
						"chinese": "终于面对，古代契约的执行者。",
						"french": "Enfin face à l'Exécuteur de l'Ancien Pacte.",
						"spanish": "Finalmente frente al Ejecutor del Antiguo Pacto.",
						"vietnamese": "Cuối cùng cũng đối mặt, Kẻ thực thi Giao ước cổ đại.",
						"thai": "ในที่สุดก็เผชิญหน้ากับผู้บังคับใช้พันธสัญญาโบราณ.",
						"hindi": "अंततः सामना हुआ, प्राचीन वाचा के प्रवर्तक से।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "random_boss",
					"duration_ms": 500,
					"spot": [
						5,
						5
					]
				},
				{
					"emotion": "base",
					"content": {
						"korean": "잘 왔어. 너희가 가져올 대가가 기대되는군.",
						"english": "Welcome. I look forward to the price you'll pay.",
						"japanese": "よく来たな。お前たちがもたらす代償が楽しみだ。",
						"chinese": "欢迎。我很期待你们将付出的代价。",
						"french": "Bienvenue. J'attends avec impatience le prix que vous paierez.",
						"spanish": "Bienvenidos. Espero con ansias el precio que traerán.",
						"vietnamese": "Hoan nghênh. Ta rất mong đợi cái giá mà các ngươi sẽ phải trả.",
						"thai": "ยินดีต้อนรับ. ข้าตั้งตารอค่าตอบแทนที่พวกเจ้าจะนำมาให้.",
						"hindi": "तुम्हारा स्वागत है। मैं उस कीमत का इंतज़ार कर रहा हूँ जो तुम चुकाओगे।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "대가가… 뭐야.",
						"english": "What... is the price?",
						"japanese": "代償が…何だ。",
						"chinese": "代价…是什么。",
						"french": "Quel… est le prix ?",
						"spanish": "¿Cuál… es el precio?",
						"vietnamese": "Cái giá… là gì.",
						"thai": "ค่าตอบแทน… คืออะไร.",
						"hindi": "कीमत... क्या है?"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "이제부터… 너희의 운명은 내 손에 있다.",
						"english": "From now on... your fate is in my hands.",
						"japanese": "これから…お前たちの運命は私の手にある。",
						"chinese": "从现在起…你们的命运掌握在我手中。",
						"french": "Désormais… votre destin est entre mes mains.",
						"spanish": "De ahora en adelante… vuestro destino está en mis manos.",
						"vietnamese": "Từ bây giờ… số phận của các ngươi nằm trong tay ta.",
						"thai": "จากนี้ไป... ชะตากรรมของพวกเจ้าอยู่ในกำมือของข้า.",
						"hindi": "अब से... तुम्हारी किस्मत मेरे हाथों में है।"
					},
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"고요한 도시의 뒷골목. 오래된 상점 하나가 숨겨져 있었다.",
			"간판 없는 그곳, '고요한 메아리'. 주인은 알 수 없는 미소를 지었다.",
			"고대 계약의 유물. 거부할 수 없는 의뢰. 그리고 시작된 균열.",
			"모든 비극은 그렇게 시작되었다."
		],
		"english": [
			"In a quiet city alley, an old shop lay hidden.",
			"A signboard-less place, 'Silent Echo'. The owner smiled an enigmatic smile.",
			"An ancient covenant's relic. An offer impossible to refuse. And a rift began.",
			"All tragedies began that way."
		],
		"japanese": [
			"静かな街の裏路地。古びた店が一つ隠されていた。",
			"看板のないその場所、「静かなる木霊」。主人は意味深な笑みを浮かべた。",
			"古代契約の遺物。拒否できない依頼。そして始まった亀裂。",
			"すべての悲劇はそうして始まった。"
		],
		"chinese": [
			"在寂静的城市后巷，一家古老的商店隐藏其中。",
			"没有招牌的地方，名为“寂静回响”。店主露出了一个莫名的微笑。",
			"古老契约的遗物。无法拒绝的委托。以及随之而来的裂痕。",
			"所有的悲剧都由此开始。"
		],
		"french": [
			"Dans une ruelle tranquille de la ville, une vieille boutique était cachée.",
			"Un lieu sans enseigne, 'L'Écho Silencieux'. Le propriétaire afficha un sourire énigmatique.",
			"Une relique d'un ancien pacte. Une requête impossible à refuser. Et une faille commença.",
			"Toutes les tragédies commencèrent ainsi."
		],
		"spanish": [
			"En un callejón tranquilo de la ciudad, una vieja tienda se escondía.",
			"Un lugar sin letrero, 'El Eco Silencioso'. El dueño sonrió con una sonrisa enigmática.",
			"Una reliquia de un pacto antiguo. Una misión imposible de rechazar. Y una grieta comenzó.",
			"Todas las tragedias comenzaron así."
		],
		"vietnamese": [
			"Trong một con hẻm yên tĩnh của thành phố, một cửa hàng cũ kỹ ẩn mình.",
			"Nơi không biển hiệu, 'Tiếng Vọng Tĩnh Lặng'. Chủ nhân nở nụ cười khó hiểu.",
			"Di vật của khế ước cổ xưa. Nhiệm vụ không thể chối từ. Và vết nứt bắt đầu.",
			"Mọi bi kịch đều bắt đầu như thế."
		],
		"thai": [
			"ในตรอกเงียบสงบของเมือง ร้านค้าเก่าแก่แห่งหนึ่งซ่อนอยู่",
			"ที่นั่นไร้ป้ายชื่อ 'เสียงสะท้อนอันเงียบงัน' เจ้าของยิ้มอย่างลึกลับ",
			"วัตถุโบราณแห่งพันธสัญญาเก่าแก่ การร้องขอที่ไม่อาจปฏิเสธ และรอยแยกที่เริ่มขึ้น",
			"โศกนาฏกรรมทั้งหมดเริ่มต้นขึ้นเช่นนั้น"
		],
		"hindi": [
			"शहर की एक शांत गली में, एक पुरानी दुकान छिपी हुई थी।",
			"बिना बोर्ड वाली वह जगह, 'शांत प्रतिध्वनि'। मालिक ने एक रहस्यमयी मुस्कान दी।",
			"प्राचीन अनुबंध का अवशेष। एक अनचाही लेकिन अस्वीकार्य依頼। और शुरू हुई दरार।",
			"सभी दुखद घटनाएँ वैसे ही शुरू हुईं।"
		]
	}
} as const;
