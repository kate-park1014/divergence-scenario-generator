export const scenario_desert_sipius_38_03 = {
	"scenario_id": "desert_sipius_38_03",
	"order": 3,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"jasper": {
			"id": "mon_f3aa9577-2fd6-4d65-80cd-6b654778b7f4",
			"name": {
				"korean": "재스퍼",
				"english": "Jasper",
				"japanese": "ジャスパー",
				"chinese": "贾斯珀",
				"french": "Jasper",
				"spanish": "Jasper",
				"vietnamese": "Jasper",
				"thai": "แจสเปอร์",
				"hindi": "जैस्पर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a1ee5a95-a611-4b33-7264-582262b68800/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/bc87b1ce-d1eb-40ea-ccc4-3c4434d35800/public"
		},
		"amir": {
			"name": {
				"korean": "아미르",
				"english": "Amir",
				"japanese": "アミール",
				"chinese": "阿米尔",
				"french": "Amir",
				"spanish": "Amir",
				"vietnamese": "Amir",
				"thai": "อาเมียร์",
				"hindi": "अमीर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8cd60fb0-3699-44c4-6425-a3e97eec1800/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/b644dc95-9c27-442e-6dc6-73e5550a0200/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"메마른 사막, 갈증은 영혼을 잠식했다.",
			"믿었던 손길은 그림자를 드리우고.",
			"버려진 진실이 불길하게 속삭이기 시작한다.",
			"이제, 누구를 믿어야 하는가."
		],
		"english": [
			"Arid desert, thirst consumed the soul.",
			"The trusted hand cast a shadow.",
			"Abandoned truths begin to whisper ominously.",
			"Now, who can be trusted?"
		],
		"japanese": [
			"乾いた砂漠、渇きが魂を蝕んだ。",
			"信じた手が影を落とす。",
			"捨てられた真実が不吉に囁き始める。",
			"今、誰を信じればいいのか。"
		],
		"chinese": [
			"干旱的沙漠，饥渴吞噬了灵魂。",
			"曾信任的援手，投下阴影。",
			"被遗弃的真相，开始不祥地低语。",
			"现在，该相信谁？"
		],
		"french": [
			"Désert aride, la soif dévorait l'âme.",
			"La main de confiance projetait une ombre.",
			"Les vérités abandonnées commencent à chuchoter de manière sinistre.",
			"Maintenant, qui croire ?"
		],
		"spanish": [
			"Desierto árido, la sed consumió el alma.",
			"La mano confiable proyectó una sombra.",
			"Las verdades abandonadas comienzan a susurrar ominosamente.",
			"Ahora, ¿en quién confiar?"
		],
		"vietnamese": [
			"Sa mạc khô cằn, cơn khát nuốt chửng linh hồn.",
			"Bàn tay từng tin cậy lại phủ bóng tối.",
			"Những sự thật bị lãng quên bắt đầu thì thầm đáng ngại.",
			"Giờ đây, phải tin ai?"
		],
		"thai": [
			"ทะเลทรายแห้งแล้ง ความกระหายกลืนกินวิญญาณ",
			"มือที่เชื่อใจกลับทอดเงา",
			"ความจริงที่ถูกทอดทิ้งเริ่มกระซิบอย่างเป็นลางร้าย",
			"ตอนนี้ จะเชื่อใครได้?"
		],
		"hindi": [
			"सूखे रेगिस्तान में, प्यास ने आत्मा को खा लिया।",
			"जिस हाथ पर भरोसा था, उसने परछाई डाल दी।",
			"त्यागे गए सच अशुभ रूप से फुसफुसाने लगे हैं।",
			"अब, किस पर भरोसा करें?"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "메마른 땅, 희망을 좇는 발걸음만이 모래를 가른다.",
						"english": "Arid land, only footsteps chasing hope cut through the sand.",
						"japanese": "乾いた大地、希望を追う足跡だけが砂を切り裂く。",
						"chinese": "干旱的大地，唯有追逐希望的脚步划破沙尘。",
						"french": "Terre aride, seuls les pas poursuivant l'espoir fendent le sable.",
						"spanish": "Tierra árida, solo pasos persiguiendo la esperanza cortan la arena.",
						"vietnamese": "Miền đất khô cằn, chỉ có những bước chân theo đuổi hy vọng mới xẻ đôi cát.",
						"thai": "ดินแดนแห้งแล้ง มีเพียงรอยเท้าที่ไล่ตามความหวังเท่านั้นที่ตัดผ่านผืนทราย",
						"hindi": "सूखी भूमि पर, आशा का पीछा करते हुए केवल पैरों के निशान ही रेत को चीरते हैं।"
					}
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "amir",
					"type": "direction",
					"spot": [
						5,
						2
					]
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "amir",
					"content": {
						"korean": "힘들지? 오아시스가 머지않았어. 내가 널 인도할게.",
						"english": "It's tough, isn't it? The oasis is near. I'll guide you.",
						"japanese": "辛いだろう？オアシスはもうすぐだ。私が君を導こう。",
						"chinese": "很难吧？绿洲不远了。我来指引你。",
						"french": "C'est difficile, n'est-ce pas ? L'oasis est proche. Je te guiderai.",
						"spanish": "¿Es difícil, verdad? El oasis está cerca. Yo te guiaré.",
						"vietnamese": "Khó khăn phải không? Ốc đảo không còn xa. Để tôi dẫn đường cho bạn.",
						"thai": "ลำบากใช่ไหม? โอเอซิสอยู่ไม่ไกลแล้ว ฉันจะนำทางเธอเอง",
						"hindi": "मुश्किल है ना? नखलिस्तान करीब है। मैं तुम्हें रास्ता दिखाऊंगा।"
					}
				},
				{
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "아미르, 고마워. 네가 없었다면 벌써 쓰러졌을 거야.",
						"english": "Amir, thank you. I would've collapsed without you.",
						"japanese": "アミール、ありがとう。君がいなかったら、とっくに倒れていただろう。",
						"chinese": "阿米尔，谢谢你。没有你，我早就倒下了。",
						"french": "Amir, merci. Sans toi, je me serais effondré.",
						"spanish": "Amir, gracias. Me habría derrumbado sin ti.",
						"vietnamese": "Amir, cảm ơn bạn. Không có bạn, tôi đã gục ngã rồi.",
						"thai": "อาเมียร์ ขอบคุณนะ ถ้าไม่มีเธอ ฉันคงล้มไปแล้ว",
						"hindi": "अमीर, धन्यवाद। तुम्हारे बिना, मैं अब तक गिर गया होता।"
					},
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "jasper",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						1,
						3
					]
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "버려진 것은 언젠가 돌아와. 더 큰 갈증을 부르지…",
						"english": "What's abandoned always returns. Bringing a greater thirst...",
						"japanese": "捨てられたものはいつか戻ってくる。より大きな渇きを連れて…",
						"chinese": "被遗弃之物终将归来。带来更大的饥渴…",
						"french": "Ce qui est abandonné revient toujours. Apportant une soif plus grande…",
						"spanish": "Lo abandonado siempre regresa. Trayendo una sed mayor…",
						"vietnamese": "Những gì bị bỏ rơi rồi sẽ quay lại. Mang theo cơn khát lớn hơn…",
						"thai": "สิ่งที่ถูกทอดทิ้งจะกลับมาเสมอ นำมาซึ่งความกระหายที่ยิ่งใหญ่กว่า…",
						"hindi": "त्यागा हुआ कभी न कभी लौट आता है। और बड़ी प्यास लेकर आता है…"
					},
					"speaker": "jasper"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "누구…세요?",
						"english": "Who... are you?",
						"japanese": "誰…ですか？",
						"chinese": "你是…谁？",
						"french": "Qui… êtes-vous ?",
						"spanish": "¿Quién… eres?",
						"vietnamese": "Ai… vậy?",
						"thai": "คุณ...คือใคร?",
						"hindi": "आप… कौन हैं?"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "물통을 조심해. 잊힌 진실이 다시 깨어날 거야.",
						"english": "Beware the water skin. Forgotten truths will reawaken.",
						"japanese": "水筒に気をつけろ。忘れられた真実が再び目覚めるだろう。",
						"chinese": "小心水壶。被遗忘的真相将再次苏醒。",
						"french": "Méfie-toi de l'outre d'eau. Les vérités oubliées se réveilleront.",
						"spanish": "Cuidado con el odre. Las verdades olvidadas despertarán de nuevo.",
						"vietnamese": "Hãy cẩn thận với bình nước. Những sự thật bị lãng quên sẽ thức tỉnh trở lại.",
						"thai": "ระวังถุงน้ำไว้ ความจริงที่ถูกลืมจะตื่นขึ้นอีกครั้ง",
						"hindi": "पानी के पात्र से सावधान रहना। भूली हुई सच्चाइयां फिर से जाग उठेंगी।"
					},
					"speaker": "jasper"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "물통… 케메트님이 말했던 유물인가?",
						"english": "Water container... Is this the artifact Lord Kemet spoke of?",
						"japanese": "「水筒… ケメト様がおっしゃっていた遺物か？」",
						"chinese": "“水壶… 是凯梅特大人提到的文物吗？”",
						"french": "« Gourde... Est-ce l'artefact dont parlait Seigneur Kemet ? »",
						"spanish": "« Cantimplora... ¿Es este el artefacto del que habló el Señor Kemet? »",
						"vietnamese": "« Bình nước... Đây có phải là cổ vật mà Lãnh chúa Kemet đã nhắc đến không? »",
						"thai": "“กระบอกน้ำ... นี่คือโบราณวัตถุที่ท่านเคเมตพูดถึงหรือเปล่า?”",
						"hindi": "“पानी का बर्तन... क्या यह वही कलाकृति है जिसके बारे में लॉर्ड केमेट ने बात की थी?”"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"action": "enter",
					"speaker": "amir",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						6,
						3
					]
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "amir",
					"content": {
						"korean": "또 헛소문을 퍼뜨리는군. 저런 미신에 현혹되지 마.",
						"english": "Spreading baseless rumors again. Don't be swayed by such superstitions.",
						"japanese": "「また根も葉もない噂を広めているな。そんな迷信に惑わされるな。」",
						"chinese": "“又在散布谣言了。别被那种迷信蒙蔽了。”",
						"french": "« Encore à propager de fausses rumeurs. Ne te laisse pas berner par de telles superstitions. »",
						"spanish": "« De nuevo esparciendo rumores infundados. No te dejes llevar por esas supersticiones. »",
						"vietnamese": "« Lại tung tin đồn vô căn cứ. Đừng bị mê hoặc bởi những lời mê tín đó. »",
						"thai": "“ปล่อยข่าวลือไร้สาระอีกแล้ว อย่าหลงเชื่อเรื่องพวกนั้นเลย”",
						"hindi": "“फिर से बेबुनियाद अफवाहें फैला रहे हो। ऐसी अंधविश्वासों में मत पड़ो।”"
					}
				},
				{
					"content": {
						"korean": "미신? 사막의 오랜 전설은… 네가 더 잘 알 텐데, 아미르.",
						"english": "Superstition? You should know better about the ancient legends of the desert, Amir.",
						"japanese": "「迷信？砂漠の古き伝説は…お前の方がよく知っているはずだろう、アミール。」",
						"chinese": "“迷信？沙漠的古老传说… 你应该比我更清楚吧，阿米尔。”",
						"french": "« Superstition ? Tu devrais pourtant mieux connaître les anciennes légendes du désert, Amir. »",
						"spanish": "« ¿Superstición? Deberías saber más sobre las antiguas leyendas del desierto, Amir. »",
						"vietnamese": "« Mê tín? Những truyền thuyết cổ xưa của sa mạc... đáng lẽ ngươi phải biết rõ hơn chứ, Amir. »",
						"thai": "“เรื่องงมงาย? ตำนานเก่าแก่แห่งทะเลทราย... เจ้าเองก็น่าจะรู้ดีกว่าข้าสิ อามีร์”",
						"hindi": "“अंधविश्वास? रेगिस्तान की पुरानी किंवदंतियों के बारे में... तुम्हें मुझसे बेहतर पता होगा, अमीर।”"
					},
					"speaker": "jasper",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "amir",
					"content": {
						"korean": "무슨 소리지? 우리는 갈 길이 바쁘다. 가자.",
						"english": "What are you talking about? We're in a hurry. Let's go.",
						"japanese": "「何を言っている？我々は急いでいるんだ。行くぞ。」",
						"chinese": "“你在说什么？我们还有事要办。走吧。”",
						"french": "« De quoi parles-tu ? Nous sommes pressés. Allons-y. »",
						"spanish": "« ¿De qué hablas? Tenemos prisa. Vámonos. »",
						"vietnamese": "« Ngươi đang nói gì vậy? Chúng ta đang vội. Đi thôi. »",
						"thai": "“อะไรนะ? เรามีเรื่องต้องไปทำ รีบไปกันเถอะ”",
						"hindi": "“क्या बक रहे हो? हमें जल्दी है। चलो।”"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "…",
						"english": "...",
						"japanese": "「…」",
						"chinese": "“…”",
						"french": "« ... »",
						"spanish": "« ... »",
						"vietnamese": "« ... »",
						"thai": "“...”",
						"hindi": "“...”"
					}
				},
				{
					"duration_ms": 400,
					"speaker": "jasper",
					"direction": "down",
					"action": "exit",
					"type": "direction"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "amir",
					"type": "direction",
					"spot": [
						5,
						2
					]
				},
				{
					"speaker": "amir",
					"content": {
						"korean": "벌써 저녁이야. 오늘은 여기서 쉬어가자.",
						"english": "It's evening already. Let's rest here for today.",
						"japanese": "「もう夕方だ。今日はここで休もう。」",
						"chinese": "“已经是傍晚了。今天我们就在这里休息吧。”",
						"french": "« C'est déjà le soir. Reposons-nous ici pour aujourd'hui. »",
						"spanish": "« Ya es de noche. Descansemos aquí por hoy. »",
						"vietnamese": "« Trời tối rồi. Hôm nay chúng ta nghỉ ở đây thôi. »",
						"thai": "“นี่ก็เย็นแล้ว วันนี้เราพักที่นี่เถอะ”",
						"hindi": "“शाम हो चुकी है। आज यहीं आराम करते हैं।”"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…아까 그 떠돌이, 아미르 너랑 아는 사이였어?",
						"english": "...That wanderer earlier, were you acquainted with him, Amir?",
						"japanese": "「…さっきのあの放浪者、アミール、お前と知り合いだったのか？」",
						"chinese": "“……刚才那个流浪者，阿米尔你认识他吗？”",
						"french": "« ...Ce vagabond de tout à l'heure, tu le connaissais, Amir ? »",
						"spanish": "« ...Ese vagabundo de antes, ¿lo conocías, Amir? »",
						"vietnamese": "« ...Cái người lang thang lúc nãy, Amir, ngươi quen hắn sao? »",
						"thai": "“...คนพเนจรเมื่อกี้ อามีร์รู้จักเขาเหรอ?”",
						"hindi": "“...वह घुमंतू आदमी, अमीर, क्या तुम उसे जानते थे?”"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "amir",
					"content": {
						"korean": "아니. 사막엔 이상한 사람들이 많아. 신경 쓸 필요 없어.",
						"english": "No. The desert is full of strange people. No need to pay them any mind.",
						"japanese": "「いや。砂漠には変な奴が多い。気にする必要はない。」",
						"chinese": "“不。沙漠里奇怪的人很多。没必要在意。”",
						"french": "« Non. Le désert est plein de gens étranges. Pas besoin de t'en soucier. »",
						"spanish": "« No. El desierto está lleno de gente extraña. No hay necesidad de prestarles atención. »",
						"vietnamese": "« Không. Sa mạc có nhiều người kỳ lạ. Không cần bận tâm đâu. »",
						"thai": "“ไม่หรอก ทะเลทรายมีคนแปลกๆ เยอะแยะ ไม่ต้องไปสนใจหรอก”",
						"hindi": "“नहीं। रेगिस्तान में बहुत अजीब लोग होते हैं। ध्यान देने की ज़रूरत नहीं है।”"
					}
				},
				{
					"content": {
						"korean": "그래…",
						"english": "I see...",
						"japanese": "「そうか…」",
						"chinese": "“是吗…”",
						"french": "« Je vois... »",
						"spanish": "« Ya veo... »",
						"vietnamese": "« Vậy à... »",
						"thai": "“อืม...”",
						"hindi": "“ठीक है...”"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "어딘가 불편해 보이는 아미르의 표정이 스쳐 지나갔다.",
						"english": "Amir's uneasy expression flashed by.",
						"japanese": "「どこか居心地の悪そうなアミールの表情が、一瞬よぎった。」",
						"chinese": "“阿米尔的脸上闪过一丝不安的神情。”",
						"french": "« L'expression mal à l'aise d'Amir passa rapidement. »",
						"spanish": "« La expresión incómoda de Amir apareció fugazmente. »",
						"vietnamese": "« Vẻ mặt khó chịu của Amir thoáng qua. »",
						"thai": "“สีหน้าไม่สบายใจของอามีร์ปรากฏขึ้นแวบหนึ่ง”",
						"hindi": "“अमीर के चेहरे पर असहजता का भाव दिखा।”"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "amir",
					"action": "enter",
					"spot": [
						5,
						2
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "점점 더 목마른 것 같아… 끝은 어디지?",
						"english": "I'm getting thirstier... Where's the end?",
						"japanese": "ますます喉が渇いてくる… 終わりはどこだ？",
						"chinese": "我越来越渴了……尽头在哪里？",
						"french": "J'ai de plus en plus soif... Où est la fin ?",
						"spanish": "Tengo cada vez más sed... ¿Dónde está el final?",
						"vietnamese": "Tôi ngày càng khát hơn… Đâu là điểm kết thúc?",
						"thai": "ฉันยิ่งกระหายมากขึ้นเรื่อยๆ... จุดจบอยู่ที่ไหน?",
						"hindi": "मुझे और प्यास लग रही है... अंत कहाँ है?"
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "amir",
					"content": {
						"korean": "곧이야. 저 너머에 우리가 찾던 것이 있어.",
						"english": "Soon. Beyond that lies what we seek.",
						"japanese": "もうすぐだ。あの先に、我々が探していたものがある。",
						"chinese": "快了。我们所寻之物就在那前方。",
						"french": "Bientôt. Ce que nous cherchons se trouve au-delà.",
						"spanish": "Pronto. Lo que buscamos está más allá.",
						"vietnamese": "Sắp rồi. Thứ chúng ta tìm kiếm nằm ở phía bên kia.",
						"thai": "อีกไม่นาน สิ่งที่เราตามหาก็อยู่ตรงนั้นแล้ว",
						"hindi": "जल्द ही। हम जो ढूंढ रहे हैं, वह उस पार है।"
					}
				},
				{
					"content": {
						"korean": "…그걸 찾으면, 모든 게 해결될까?",
						"english": "...If we find it, will everything be resolved?",
						"japanese": "…それを見つければ、全て解決するのか？",
						"chinese": "……如果找到它，一切都会解决吗？",
						"french": "...Si nous le trouvons, tout sera-t-il résolu ?",
						"spanish": "...Si lo encontramos, ¿se resolverá todo?",
						"vietnamese": "...Nếu tìm thấy nó, liệu mọi chuyện có được giải quyết không?",
						"thai": "...ถ้าเจอแล้ว ทุกอย่างจะคลี่คลายไหม?",
						"hindi": "...अगर हमें वह मिल गया, तो क्या सब कुछ सुलझ जाएगा?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "사막 깊은 곳. 발길이 닿을수록 돌아갈 수 없다는 예감이 강해졌다.",
						"english": "Deep in the desert. With every step, the feeling of no return grew stronger.",
						"japanese": "砂漠の奥深く。足を進めるほど、もう戻れないという予感が強くなった。",
						"chinese": "沙漠深处。每前进一步，无法回头的预感就越强烈。",
						"french": "Au plus profond du désert. À chaque pas, la certitude de ne plus pouvoir faire demi-tour se renforçait.",
						"spanish": "En lo profundo del desierto. Con cada paso, la premonición de no poder regresar se hacía más fuerte.",
						"vietnamese": "Sâu trong sa mạc. Càng bước đi, cảm giác không thể quay lại càng trở nên mạnh mẽ.",
						"thai": "ลึกเข้าไปในทะเลทราย ทุกย่างก้าวที่เดินไป ความรู้สึกว่าไม่มีทางกลับได้อีกแล้วก็ยิ่งเด่นชัดขึ้น",
						"hindi": "रेगिस्तान की गहराई में। हर कदम के साथ, न लौटने की आशंका बढ़ती गई।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "아미르… 넌 정말 나의 편이 맞아?",
						"english": "Amir... Are you truly on my side?",
						"japanese": "アミール… お前は本当に俺の味方なのか？",
						"chinese": "阿米尔……你真的站在我这边吗？",
						"french": "Amir... Es-tu vraiment de mon côté ?",
						"spanish": "Amir... ¿Estás realmente de mi lado?",
						"vietnamese": "Amir… Cậu thực sự ở phe tôi sao?",
						"thai": "อาเมียร์... นายเป็นพวกเดียวกับฉันจริงหรือเปล่า?",
						"hindi": "अमीर... क्या तुम वाकई मेरे साथ हो?"
					}
				}
			]
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "크으… 이 갈증은… {random_boss}도 막을 수 없었나…",
						"english": "Ugh... This thirst... not even {random_boss} could stop it...",
						"japanese": "くぅ… この渇きは… {random_boss}でさえ止められなかったか…",
						"chinese": "呃……这份渴望……连{random_boss}也无法阻止吗……",
						"french": "Ugh... Cette soif... même {random_boss} n'a pas pu l'arrêter...",
						"spanish": "Ugh... Esta sed... ni siquiera {random_boss} pudo detenerla...",
						"vietnamese": "Ưgh… Cơn khát này… ngay cả {random_boss} cũng không ngăn cản được sao…",
						"thai": "อึก... ความกระหายนี้... แม้แต่ {random_boss} ก็ไม่อาจหยุดมันได้หรือนี่...",
						"hindi": "उफ़... यह प्यास... {random_boss} भी इसे रोक नहीं पाया..."
					}
				},
				{
					"content": {
						"korean": "버려진 것, 갈증… 대체 무슨 의미야?",
						"english": "Abandoned, thirst... What does it all mean?",
						"japanese": "捨てられたもの、渇き…一体どういう意味？",
						"chinese": "被遗弃的，渴望……到底是什么意思？",
						"french": "Abandonné, soif... Qu'est-ce que tout cela signifie ?",
						"spanish": "¿Abandonado, sed... Qué significa todo esto?",
						"vietnamese": "Bị bỏ rơi, khát vọng... Rốt cuộc là có ý nghĩa gì?",
						"thai": "ถูกทอดทิ้ง, ความกระหาย... ทั้งหมดนี้หมายความว่าอะไรกันแน่?",
						"hindi": "परित्यक्त, प्यास... इसका क्या मतलब है?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"spot": [
						5,
						2
					],
					"type": "direction",
					"speaker": "amir",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "괜찮아? 이젠 아무도 우릴 방해하지 못할 거야.",
						"english": "Are you okay? No one will bother us now.",
						"japanese": "大丈夫？もう誰も邪魔できないわ。",
						"chinese": "你还好吗？现在没人能打扰我们了。",
						"french": "Ça va ? Personne ne nous dérangera plus maintenant.",
						"spanish": "¿Estás bien? Nadie nos molestará ahora.",
						"vietnamese": "Ổn chứ? Giờ không ai có thể làm phiền chúng ta nữa.",
						"thai": "ไม่เป็นไรนะ? ตอนนี้ไม่มีใครรบกวนเราได้แล้วล่ะ",
						"hindi": "तुम ठीक हो? अब कोई हमें परेशान नहीं करेगा।"
					},
					"speaker": "amir"
				},
				{
					"content": {
						"korean": "…아미르, 넌 정말 아무것도 모르는 거야?",
						"english": "...Amir, do you really know nothing?",
						"japanese": "…アミール、本当に何も知らないの？",
						"chinese": "...阿米尔，你真的什么都不知道吗？",
						"french": "...Amir, tu ne sais vraiment rien ?",
						"spanish": "...Amir, ¿en serio no sabes nada?",
						"vietnamese": "...Amir, thật sự cậu không biết gì sao?",
						"thai": "...อามีร์, นายไม่รู้อะไรเลยจริงๆ เหรอ?",
						"hindi": "...अमीर, क्या तुम्हें सच में कुछ नहीं पता?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "의심의 씨앗은 뿌려졌다. 메마른 사막에 배신의 그림자가 짙어진다.",
						"english": "Seeds of doubt are sown. In the parched desert, the shadow of betrayal deepens.",
						"japanese": "疑いの種は蒔かれた。乾いた砂漠に裏切りの影が深く落ちる。",
						"chinese": "怀疑的种子已播下。在干涸的沙漠中，背叛的阴影愈发浓重。",
						"french": "Les graines du doute sont semées. Dans le désert aride, l'ombre de la trahison s'épaissit.",
						"spanish": "Las semillas de la duda han sido sembradas. En el desierto árido, la sombra de la traición se profundiza.",
						"vietnamese": "Hạt giống nghi ngờ đã được gieo. Bóng đen phản bội ngày càng đậm trong sa mạc cằn cỗi.",
						"thai": "เมล็ดพันธุ์แห่งความสงสัยได้ถูกหว่านแล้ว ในทะเลทรายอันแห้งแล้ง เงาแห่งการทรยศก็เข้มข้นขึ้น",
						"hindi": "संदेह के बीज बोए गए हैं। सूखे रेगिस्तान में, विश्वासघात की छाया गहरी हो जाती है।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "사막의 힘이 모든 것을 집어삼켰다.",
						"english": "The desert's power has swallowed everything.",
						"japanese": "砂漠の力が全てを飲み込んだ。",
						"chinese": "沙漠的力量吞噬了一切。",
						"french": "Le pouvoir du désert a tout englouti.",
						"spanish": "El poder del desierto lo ha devorado todo.",
						"vietnamese": "Sức mạnh của sa mạc đã nuốt chửng tất cả.",
						"thai": "พลังของทะเลทรายได้กลืนกินทุกสิ่งแล้ว",
						"hindi": "रेगिस्तान की शक्ति ने सब कुछ निगल लिया।"
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "아직 멀었다. 너의 갈증은 더 깊어질 것이다.",
						"english": "Not yet. Your thirst will grow deeper.",
						"japanese": "まだまだだ。お前の渇きはもっと深くなるだろう。",
						"chinese": "还早呢。你的渴望会更深。",
						"french": "Pas encore. Ta soif s'intensifiera.",
						"spanish": "Aún no. Tu sed se hará más profunda.",
						"vietnamese": "Chưa đâu. Cơn khát của ngươi sẽ càng sâu hơn.",
						"thai": "ยังอีกไกล ความกระหายของเจ้าจะลึกซึ้งยิ่งขึ้น",
						"hindi": "अभी नहीं। तुम्हारी प्यास और गहरी होगी।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "…아니, 여기서 멈출 수 없어. 반드시 진실을 밝혀낼 거야.",
						"english": "...No, I can't stop here. I must uncover the truth.",
						"japanese": "…いや、ここで止まるわけにはいかない。必ず真実を突き止める。",
						"chinese": "...不，我不能停在这里。我必须揭露真相。",
						"french": "...Non, je ne peux pas m'arrêter ici. Je dois révéler la vérité.",
						"spanish": "...No, no puedo detenerme aquí. Debo descubrir la verdad.",
						"vietnamese": "...Không, tôi không thể dừng lại ở đây. Tôi phải tìm ra sự thật.",
						"thai": "...ไม่, ฉันหยุดอยู่ตรงนี้ไม่ได้ ฉันจะต้องเปิดเผยความจริงให้ได้",
						"hindi": "...नहीं, मैं यहाँ रुक नहीं सकता। मुझे सच्चाई का पता लगाना होगा।"
					}
				}
			],
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거대한 모래 폭풍 속, 정체 모를 그림자가 나타났다.",
						"english": "Amidst a colossal sandstorm, an unknown shadow appeared.",
						"japanese": "巨大な砂嵐の中、正体不明の影が現れた。",
						"chinese": "在巨大的沙尘暴中，一个不明身份的影子出现了。",
						"french": "Au milieu d'une tempête de sable colossale, une ombre inconnue apparut.",
						"spanish": "En medio de una tormenta de arena colosal, apareció una sombra desconocida.",
						"vietnamese": "Giữa một trận bão cát khổng lồ, một bóng hình không rõ danh tính xuất hiện.",
						"thai": "ท่ามกลางพายุทรายขนาดมหึมา เงาลึกลับได้ปรากฏขึ้น",
						"hindi": "एक विशाल रेत के तूफान के बीच, एक अज्ञात छाया प्रकट हुई।"
					},
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "버려진 것을 탐하는 자여… 너희의 갈증은 끝나지 않을 것이다.",
						"english": "Oh, greedy ones who covet the forsaken... Your thirst shall never end.",
						"japanese": "捨てられたものを貪る者たちよ… お前たちの渇きは終わらないだろう。",
						"chinese": "贪婪废弃之物者……汝等之渴永无止境。",
						"french": "Ô vous qui convoitez ce qui fut abandonné... Votre soif ne connaîtra jamais de fin.",
						"spanish": "Oh, codiciosos que anhelan lo abandonado... Vuestra sed nunca terminará.",
						"vietnamese": "Hỡi những kẻ tham lam thứ bị bỏ rơi… Cơn khát của các ngươi sẽ không bao giờ chấm dứt.",
						"thai": "โอ้ ผู้กระหายสิ่งที่ถูกทอดทิ้ง... ความกระหายของเจ้าจะไม่มีวันสิ้นสุด",
						"hindi": "हे त्यागे हुए को चाहने वाले लालचियों... तुम्हारी प्यास कभी खत्म नहीं होगी।"
					},
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "또 물통 얘긴가? 대체 뭐가 숨겨진 거지!",
						"english": "Water containers again? What on earth is hidden?!",
						"japanese": "また水筒の話か？一体何が隠されているんだ！",
						"chinese": "又是水壶？到底隐藏着什么！",
						"french": "Encore des outres à eau ? Qu'est-ce qui est caché, bon sang !",
						"spanish": "¿Otra vez los cántaros de agua? ¡¿Qué demonios se esconde?!",
						"vietnamese": "Lại chuyện bình nước à? Rốt cuộc là cái gì bị giấu chứ!",
						"thai": "เรื่องกระติกน้ำอีกแล้วเหรอ? ตกลงมันซ่อนอะไรอยู่กันแน่!",
						"hindi": "फिर पानी के बर्तनों की बात? आखिर क्या छुपा है इसमें!"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "곧 알게 될 것이다. 진실은 언제나… 목마른 법.",
						"english": "You'll soon know. Truth is always... thirsty.",
						"japanese": "すぐに知ることになるだろう。真実は常に… 渇望するものだ。",
						"chinese": "你很快就会知道。真相总是……令人渴望的。",
						"french": "Vous le saurez bientôt. La vérité est toujours... assoiffée.",
						"spanish": "Pronto lo sabrás. La verdad siempre... tiene sed.",
						"vietnamese": "Ngươi sẽ sớm biết thôi. Sự thật thì luôn… khát khao.",
						"thai": "เจ้าจะได้รู้ในไม่ช้า ความจริงนั้นมักจะ... กระหายเสมอ",
						"hindi": "तुम्हें जल्द ही पता चल जाएगा। सच हमेशा… प्यासा होता है।"
					}
				}
			]
		}
	]
} as const;
