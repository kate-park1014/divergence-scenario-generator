export const scenario_snowy_haraldr_93_03 = {
	"scenario_id": "snowy_haraldr_93_03",
	"order": 3,
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
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "환영이 비명 지르는 얼음 동굴. 공포가 얼어붙어 있었다.",
						"english": "An ice cave where phantoms scream. Fear was frozen solid.",
						"japanese": "幻影が悲鳴を上げる氷の洞窟。恐怖が凍りついていた。",
						"chinese": "幻影尖叫的冰洞。恐惧被冻结了。",
						"french": "Une caverne de glace où les spectres hurlent. La peur était figée.",
						"spanish": "Una cueva de hielo donde los fantasmas gritan. El miedo estaba congelado.",
						"vietnamese": "Hang băng nơi ảo ảnh thét gào. Nỗi sợ hãi đã đóng băng.",
						"thai": "ถ้ำน้ำแข็งที่ภาพหลอนกรีดร้อง ความกลัวแข็งตัวไปหมด",
						"hindi": "एक बर्फीली गुफा जहाँ भूत चीखते हैं। डर जम गया था।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "…이상한 기분이야. 목소리가 들려.",
						"english": "...This is strange. I hear voices.",
						"japanese": "…変な感じだ。声が聞こえる。",
						"chinese": "……感觉很奇怪。我听到声音了。",
						"french": "...C'est étrange. J'entends des voix.",
						"spanish": "...Es una sensación extraña. Oigo voces.",
						"vietnamese": "...Thật kỳ lạ. Tôi nghe thấy tiếng nói.",
						"thai": "...รู้สึกแปลกๆ ได้ยินเสียง",
						"hindi": "...यह अजीब है। मुझे आवाज़ें सुनाई दे रही हैं।"
					}
				},
				{
					"content": {
						"korean": "착각일 거야. 이 추위 때문이겠지.",
						"english": "It must be my imagination. It's probably the cold.",
						"japanese": "錯覚だろう。この寒さのせいだ。",
						"chinese": "大概是错觉吧。肯定是这寒冷造成的。",
						"french": "Ce doit être une illusion. C'est sûrement à cause du froid.",
						"spanish": "Debe ser mi imaginación. Será por el frío.",
						"vietnamese": "Chắc là ảo giác thôi. Chắc là do cái lạnh này.",
						"thai": "คงเป็นแค่ภาพลวงตา คงเป็นเพราะความหนาว",
						"hindi": "यह सिर्फ एक भ्रम होगा। यह इस ठंड की वजह से होगा।"
					},
					"speaker": "character_1",
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						2,
						1
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "eira",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "eira",
					"content": {
						"korean": "…왔구나. 하랄드르의 그림자에 이끌려.",
						"english": "...You've come. Drawn by Haraldr's shadow.",
						"japanese": "…来たな。ハラルドルの影に導かれて。",
						"chinese": "……你来了。被哈拉尔德的影子吸引而来。",
						"french": "...Vous êtes venu. Attiré par l'ombre d'Haraldr.",
						"spanish": "...Has venido. Atraído por la sombra de Haraldr.",
						"vietnamese": "...Ngươi đã đến. Bị cái bóng của Haraldr lôi kéo.",
						"thai": "...มาแล้วสินะ ถูกเงาของฮารัลดร์ดึงดูดมา",
						"hindi": "...तुम आ गए। हेराल्ड की छाया से आकर्षित होकर।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "당신은… 누구시죠?",
						"english": "Who... are you?",
						"japanese": "あなたは…どなたですか？",
						"chinese": "您是……谁？",
						"french": "Qui... êtes-vous ?",
						"spanish": "¿Quién... eres?",
						"vietnamese": "Ngươi... là ai?",
						"thai": "ท่าน...เป็นใคร?",
						"hindi": "आप... कौन हैं?"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "나는 에이라. 잊혀진 기억을 지키는 자.",
						"english": "I am Eira, guardian of forgotten memories.",
						"japanese": "私はエイラ。忘れられた記憶を守る者。",
						"chinese": "我是艾拉，遗忘记忆的守护者。",
						"french": "Je suis Eira, gardienne des souvenirs oubliés.",
						"spanish": "Soy Eira, guardiana de los recuerdos olvidados.",
						"vietnamese": "Ta là Eira, kẻ gìn giữ những ký ức đã lãng quên.",
						"thai": "ฉันคือไอรา ผู้พิทักษ์ความทรงจำที่ถูกลืมเลือน",
						"hindi": "मैं ऐरा हूँ, भूली हुई यादों की रखवाली।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "eira",
					"content": {
						"korean": "저 달콤한 흔적들이 보이지? 그의 슬픔이야. 비극의 대가.",
						"english": "See those sweet traces? They're his sorrow. The price of tragedy.",
						"japanese": "あの甘い痕跡が見えるか？あれは彼の悲しみ、悲劇の代償だ。",
						"chinese": "看到那些甜蜜的痕迹了吗？那是他的悲伤，悲剧的代价。",
						"french": "Tu vois ces douces traces ? C'est sa peine. Le prix de la tragédie.",
						"spanish": "¿Ves esos dulces rastros? Son su pena. El precio de la tragedia.",
						"vietnamese": "Thấy những dấu vết ngọt ngào đó không? Đó là nỗi buồn của hắn. Cái giá của bi kịch.",
						"thai": "เห็นร่องรอยหวาน ๆ เหล่านั้นไหม? นั่นคือความเศร้าโศกของเขา ราคาของโศกนาฏกรรม",
						"hindi": "वे मीठे निशान देखते हो? वे उसका दुख हैं। त्रासदी की कीमत।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 400,
					"spot": [
						3,
						2
					],
					"speaker": "eira",
					"action": "enter"
				},
				{
					"content": {
						"korean": "하랄드르는 모든 걸 원했지. 사랑까지도.",
						"english": "Haraldr wanted everything. Even love.",
						"japanese": "ハラルドルは全てを望んだ。愛までも。",
						"chinese": "哈拉尔德想要一切。甚至爱情。",
						"french": "Haraldr voulait tout. Même l'amour.",
						"spanish": "Haraldr lo quería todo. Incluso el amor.",
						"vietnamese": "Haraldr muốn mọi thứ. Kể cả tình yêu.",
						"thai": "ฮารัลเดอร์ต้องการทุกสิ่ง แม้กระทั่งความรัก",
						"hindi": "हारल्ड्र सब कुछ चाहता था। यहाँ तक कि प्यार भी।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "사랑을 원했다구요? 하지만 이 광기는…",
						"english": "He wanted love? But this madness...",
						"japanese": "愛を望んだと？しかし、この狂気は…",
						"chinese": "他想要爱情？但这份疯狂……",
						"french": "Il voulait l'amour ? Mais cette folie...",
						"spanish": "¿Quería amor? Pero esta locura...",
						"vietnamese": "Hắn muốn tình yêu ư? Nhưng sự điên loạn này...",
						"thai": "เขาต้องการความรักเหรอ? แต่ความบ้าคลั่งนี้...",
						"hindi": "वह प्यार चाहता था? लेकिन यह पागलपन..."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "잃어버린 것을 되찾으려다, 모두를 잃었어. 그 달콤한 시럽은 그의 욕망이 비틀린 흔적.",
						"english": "He tried to reclaim what he lost, and lost everyone. That sweet syrup is the twisted trace of his desire.",
						"japanese": "失ったものを取り戻そうとして、全てを失った。あの甘いシロップは、彼の欲望が歪んだ痕跡だ。",
						"chinese": "他试图找回失去的一切，结果失去所有人。那甜美的糖浆是他扭曲欲望的痕迹。",
						"french": "Il a essayé de récupérer ce qu'il avait perdu, et a tout perdu. Ce doux sirop est la trace tordue de son désir.",
						"spanish": "Intentó recuperar lo que perdió, y los perdió a todos. Ese dulce jarabe es el rastro retorcido de su deseo.",
						"vietnamese": "Hắn cố gắng lấy lại những gì đã mất, và mất tất cả. Siro ngọt ngào đó là dấu vết vặn vẹo của ham muốn của hắn.",
						"thai": "เขาพยายามทวงคืนสิ่งที่สูญเสียไป และสูญเสียทุกคนไป น้ำเชื่อมหวาน ๆ นั่นคือร่องรอยบิดเบี้ยวแห่งความปรารถนาของเขา",
						"hindi": "उसने जो खोया था उसे वापस पाने की कोशिश की, और सबको खो दिया। वह मीठा सिरप उसकी इच्छा का मुड़ा हुआ निशान है।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "그럼 우리가 겪는 이 환영이… 그의 과거라는 건가요?",
						"english": "So these illusions we're experiencing... they're his past?",
						"japanese": "では、私たちが経験しているこの幻影は…彼の過去だと？",
						"chinese": "那么我们正在经历的这些幻象……是他的过去吗？",
						"french": "Donc, ces illusions que nous vivons... sont son passé ?",
						"spanish": "¿Entonces estas ilusiones que estamos experimentando... son su pasado?",
						"vietnamese": "Vậy những ảo ảnh chúng ta đang trải qua... là quá khứ của hắn sao?",
						"thai": "งั้นภาพหลอนที่เรากำลังเผชิญอยู่... คืออดีตของเขาหรือคะ?",
						"hindi": "तो ये भ्रम जो हम अनुभव कर रहे हैं... क्या ये उसका अतीत है?"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…그래. 그는 사랑했던 것을 영원히 가두려 했지.",
						"english": "...Yes. He tried to imprison what he loved, forever.",
						"japanese": "…そうだ。彼は愛したものを永遠に閉じ込めようとしたのだ。",
						"chinese": "……是的。他试图永远囚禁他所爱的一切。",
						"french": "...Oui. Il a essayé d'emprisonner ce qu'il aimait, pour toujours.",
						"spanish": "...Sí. Intentó aprisionar lo que amaba, para siempre.",
						"vietnamese": "...Phải. Hắn đã cố gắng giam cầm vĩnh viễn những gì hắn yêu thương.",
						"thai": "...ใช่แล้ว เขาพยายามกักขังสิ่งที่เขารักไว้ตลอดไป",
						"hindi": "...हाँ। उसने जिसे प्यार किया, उसे हमेशा के लिए कैद करने की कोशिश की।"
					},
					"speaker": "eira"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"speaker": "eira",
					"spot": [
						2,
						2
					],
					"type": "direction",
					"duration_ms": 600
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "eira",
					"content": {
						"korean": "이제 돌아갈 수 없어. 공포는 더욱 깊어질 뿐.",
						"english": "There's no turning back now. The horror will only deepen.",
						"japanese": "もう後戻りできない。恐怖は深まるばかりだ。",
						"chinese": "现在无法回头了。恐惧只会越来越深。",
						"french": "Impossible de revenir en arrière maintenant. L'horreur ne fera que s'intensifier.",
						"spanish": "Ya no hay vuelta atrás. El horror solo se profundizará.",
						"vietnamese": "Giờ không thể quay lại được nữa. Nỗi kinh hoàng sẽ chỉ càng sâu sắc hơn.",
						"thai": "ตอนนี้กลับไปไม่ได้แล้ว ความหวาดกลัวจะยิ่งลึกซึ้งขึ้นเท่านั้น",
						"hindi": "अब वापस नहीं जा सकते। डर और गहरा होता जाएगा।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "멈출 순 없어. 진실을 봐야 해.",
						"english": "We can't stop. We must face the truth.",
						"japanese": "止まることはできない。真実を見なければ。",
						"chinese": "不能停下。必须面对真相。",
						"french": "Nous ne pouvons pas nous arrêter. Il faut voir la vérité.",
						"spanish": "No podemos detenernos. Debemos ver la verdad.",
						"vietnamese": "Không thể dừng lại. Phải đối mặt với sự thật.",
						"thai": "หยุดไม่ได้แล้ว ต้องเห็นความจริง",
						"hindi": "हम रुक नहीं सकते। हमें सच्चाई देखनी होगी।"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "eira",
					"content": {
						"korean": "그를 막지 못하면, 모두 얼어붙은 환영이 될 거야.",
						"english": "If we don't stop him, everyone will become frozen illusions.",
						"japanese": "彼を止めなければ、皆凍りついた幻影となるだろう。",
						"chinese": "如果我们不阻止他，所有人都会变成冰冷的幻影。",
						"french": "Si nous ne l'arrêtons pas, tout le monde deviendra des illusions gelées.",
						"spanish": "Si no lo detenemos, todos se convertirán en ilusiones congeladas.",
						"vietnamese": "Nếu không ngăn chặn hắn, tất cả sẽ trở thành những ảo ảnh đóng băng.",
						"thai": "ถ้าเราหยุดเขาไม่ได้ ทุกคนจะกลายเป็นภาพลวงตาที่ถูกแช่แข็ง",
						"hindi": "अगर हम उसे नहीं रोकते, तो सभी जमी हुई कल्पनाएं बन जाएंगे।"
					}
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "약하군. 하랄드르의 증오는 너희를 삼킬 것이다.",
						"english": "Weak. Haraldr's hatred will devour you.",
						"japanese": "弱いな。ハラルドルの憎悪がお前たちを飲み込むだろう。",
						"chinese": "太弱了。哈拉尔德的憎恨会吞噬你们。",
						"french": "Faible. La haine d'Haraldr vous dévorera.",
						"spanish": "Débiles. El odio de Haraldr os devorará.",
						"vietnamese": "Yếu ớt. Lòng thù hận của Haraldr sẽ nuốt chửng các ngươi.",
						"thai": "อ่อนแอ ฮาราลด์รจะกลืนกินความเกลียดชังของพวกเจ้า",
						"hindi": "कमजोर। हरलडर की नफरत तुम्हें निगल जाएगी।"
					}
				},
				{
					"content": {
						"korean": "…아직 끝나지 않았어!",
						"english": "...It's not over yet!",
						"japanese": "…まだ終わってない！",
						"chinese": "…还没结束！",
						"french": "...Ce n'est pas encore fini !",
						"spanish": "¡...Aún no ha terminado!",
						"vietnamese": "...Vẫn chưa kết thúc!",
						"thai": "...ยังไม่จบ!",
						"hindi": "...अभी खत्म नहीं हुआ है!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "다시 와라. 영원히 고통받게 해 줄 테니.",
						"english": "Come again. I'll make you suffer eternally.",
						"japanese": "また来い。永遠に苦しませてやるからな。",
						"chinese": "再来吧。我会让你们永远受苦。",
						"french": "Revenez. Je vous ferai souffrir éternellement.",
						"spanish": "Vuelve. Te haré sufrir eternamente.",
						"vietnamese": "Hãy trở lại. Ta sẽ khiến ngươi phải chịu đựng đau khổ vĩnh viễn.",
						"thai": "กลับมาอีกครั้งสิ ข้าจะทำให้เจ้าต้องทนทุกข์ทรมานชั่วนิรันดร์",
						"hindi": "फिर आओ। मैं तुम्हें अनंतकाल तक पीड़ा दूँगा।"
					}
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "하랄드르의 그림자 속에 영원히 잠들어라!",
						"english": "Sleep eternally in Haraldr's shadow!",
						"japanese": "ハラルドルの影に永遠に眠れ！",
						"chinese": "在哈拉尔德的阴影中永眠吧！",
						"french": "Dors éternellement dans l'ombre d'Haraldr !",
						"spanish": "¡Duerme eternamente en la sombra de Haraldr!",
						"vietnamese": "Ngủ yên vĩnh viễn trong bóng Haraldr!",
						"thai": "จงหลับใหลชั่วนิรันดร์ในเงาของฮาราลด์ร!",
						"hindi": "हरलडर की छाया में अनंतकाल तक सो जाओ!"
					}
				},
				{
					"content": {
						"korean": "네가 하랄드르의 환영을 지키는 자인가!",
						"english": "Are you the guardian of Haraldr's illusion?",
						"japanese": "お前がハラルドルの幻影を守る者か！",
						"chinese": "你就是守护哈拉尔德幻影之人吗！",
						"french": "Es-tu le gardien de l'illusion d'Haraldr ?",
						"spanish": "¡Eres tú el guardián de la ilusión de Haraldr!",
						"vietnamese": "Ngươi là kẻ canh giữ ảo ảnh của Haraldr ư!",
						"thai": "เจ้าคือผู้พิทักษ์ภาพลวงตาของฮาราลด์รหรือ!",
						"hindi": "क्या तुम हरलडर के भ्रम के संरक्षक हो!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "하! 어리석은 인간들. 감히 {random_boss}의 영역을 침범하다니!",
						"english": "Ha! Foolish mortals. How dare you trespass upon {random_boss}'s domain!",
						"japanese": "ハッ！愚かな人間ども。よくも{random_boss}の領域を侵したな！",
						"chinese": "哈！愚蠢的人类。竟敢入侵{random_boss}的领域！",
						"french": "Ha ! Mortels insensés. Comment osez-vous empiéter sur le domaine de {random_boss} !",
						"spanish": "¡Ja! Mortales insensatos. ¡Cómo osáis invadir el dominio de {random_boss}!",
						"vietnamese": "Ha! Loài người ngu ngốc. Dám cả gan xâm phạm lãnh địa của {random_boss}!",
						"thai": "ฮ่า! มนุษย์โง่เขลา บังอาจรุกล้ำอาณาเขตของ{random_boss}!",
						"hindi": "हा! मूर्ख नश्वर। तुम्हारी हिम्मत कैसे हुई {random_boss} के क्षेत्र में घुसपैठ करने की!"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…이런 시련으론… 하랄드르를 막을 수 없어… 그의 비극은… 끝나지 않아…",
						"english": "...Such trials... cannot stop Haraldr... His tragedy... will not end...",
						"japanese": "…こんな試練では…ハラルドルを止められない…彼の悲劇は…終わらない…",
						"chinese": "…这样的考验…阻止不了哈拉尔德…他的悲剧…不会结束…",
						"french": "...De telles épreuves... ne peuvent arrêter Haraldr... Sa tragédie... ne prendra pas fin...",
						"spanish": "...Tales pruebas... no pueden detener a Haraldr... Su tragedia... no terminará...",
						"vietnamese": "...Những thử thách thế này... không thể ngăn Haraldr... Bi kịch của hắn... sẽ không kết thúc...",
						"thai": "...การทดสอบเช่นนี้...ไม่อาจหยุดฮาราลด์รได้...โศกนาฏกรรมของเขา...จะไม่มีวันสิ้นสุด...",
						"hindi": "...ऐसी परीक्षाओं से... हरलडर को रोका नहीं जा सकता... उसकी त्रासदी... समाप्त नहीं होगी..."
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "무슨 소리야? 하랄드르가… 더 강하다는 건가?",
						"english": "What do you mean? Is Haraldr... stronger?",
						"japanese": "どういうことだ？ハラルドルが…もっと強いとでも言うのか？",
						"chinese": "什么意思？哈拉尔德…更强了吗？",
						"french": "Que veux-tu dire ? Haraldr... est plus fort ?",
						"spanish": "¿Qué quieres decir? ¿Haraldr... es más fuerte?",
						"vietnamese": "Ngươi nói gì? Haraldr... mạnh hơn nữa sao?",
						"thai": "หมายความว่าอย่างไร? ฮาราลด์ร...แข็งแกร่งกว่าหรือ?",
						"hindi": "तुम्हारा क्या मतलब है? क्या हरलडर... अधिक शक्तिशाली है?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"action": "enter",
					"speaker": "eira",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						1,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "그는 영원히 고통받을 거야. 스스로 만들어낸 지옥에서.",
						"english": "He will suffer eternally. In the hell he created for himself.",
						"japanese": "彼は永遠に苦しむだろう。自らが生み出した地獄で。",
						"chinese": "他将永远受苦。在他自己创造的地狱中。",
						"french": "Il souffrira éternellement. Dans l'enfer qu'il s'est créé.",
						"spanish": "Él sufrirá eternamente. En el infierno que él mismo creó.",
						"vietnamese": "Hắn sẽ chịu đựng đau khổ vĩnh viễn. Trong địa ngục hắn tự tạo ra.",
						"thai": "เขาจะทนทุกข์ทรมานชั่วนิรันดร์ ในนรกที่เขาสร้างขึ้นมาเอง",
						"hindi": "वह अनंतकाल तक पीड़ा भोगेगा। उस नरक में जो उसने खुद बनाया है।"
					},
					"speaker": "eira"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "환영의 비명은 잦아들었지만, 설원은 여전히 하랄드르의 광기로 가득했다.",
						"english": "The phantom's screams faded, but the snowy plains remained filled with Haraldr's madness.",
						"japanese": "幻影の悲鳴は静まったが、雪原は依然としてハラルドルの狂気に満ちていた。",
						"chinese": "幻影的尖叫声渐渐平息，但雪原依然充斥着哈拉尔德的疯狂。",
						"french": "Les cris du fantôme s'atténuèrent, mais les plaines enneigées restaient imprégnées de la folie d'Haraldr.",
						"spanish": "Los gritos del fantasma se atenuaron, pero las llanuras nevadas seguían llenas de la locura de Haraldr.",
						"vietnamese": "Tiếng thét của ảo ảnh dần tắt, nhưng vùng tuyết nguyên vẫn tràn ngập sự điên loạn của Haraldr.",
						"thai": "เสียงกรีดร้องของภาพลวงตาจางหายไป แต่ทุ่งหิมะยังคงเต็มไปด้วยความคลุ้มคลั่งของฮาราลด์ร",
						"hindi": "भ्रम की चीखें शांत हो गईं, लेकिन बर्फीले मैदान अभी भी हरलडर के पागलपन से भरे हुए थे।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"환영이 비명 지르는 얼어붙은 땅.",
			"하랄드르의 과거가 얼음 속에 갇혔다.",
			"달콤한 유혹, 그 뒤에 숨겨진 광기.",
			"에이라의 망령이 속삭이는 비극의 대가.",
			"공포가 온몸을 죄어온다."
		],
		"english": [
			"A frozen land where phantoms scream.",
			"Haraldr's past is trapped in ice.",
			"Sweet temptation, madness hidden behind it.",
			"Aira's specter whispers the price of tragedy.",
			"Fear constricts my entire body."
		],
		"japanese": [
			"幻影が悲鳴を上げる凍てついた地。",
			"ハラルドルの過去が氷の中に囚われた。",
			"甘い誘惑、その裏に隠された狂気。",
			"エイラの亡霊が囁く悲劇の代償。",
			"恐怖が全身を締め付ける。"
		],
		"chinese": [
			"幻影尖叫的冰冻之地。",
			"哈拉尔德的过去被困在冰中。",
			"甜蜜的诱惑，其背后隐藏着疯狂。",
			"艾拉的亡魂低语着悲剧的代价。",
			"恐惧紧紧缠绕全身。"
		],
		"french": [
			"Une terre gelée où les spectres hurlent.",
			"Le passé d'Haraldr est pris dans la glace.",
			"Douce tentation, folie cachée derrière.",
			"Le spectre d'Aira murmure le prix de la tragédie.",
			"La peur me serre le corps entier."
		],
		"spanish": [
			"Una tierra helada donde los fantasmas gritan.",
			"El pasado de Haraldr está atrapado en el hielo.",
			"Dulce tentación, la locura escondida detrás.",
			"El espectro de Aira susurra el precio de la tragedia.",
			"El miedo oprime todo mi cuerpo."
		],
		"vietnamese": [
			"Một vùng đất băng giá nơi ảo ảnh thét gào.",
			"Quá khứ của Haraldr bị mắc kẹt trong băng.",
			"Sự cám dỗ ngọt ngào, điên loạn ẩn giấu phía sau.",
			"Bóng ma của Aira thì thầm cái giá của bi kịch.",
			"Nỗi sợ hãi siết chặt toàn thân."
		],
		"thai": [
			"ดินแดนเยือกแข็งที่ภาพหลอนกรีดร้อง",
			"อดีตของฮารัลดร์ถูกขังอยู่ในน้ำแข็ง",
			"การล่อลวงอันหอมหวาน ความบ้าคลั่งที่ซ่อนอยู่เบื้องหลัง",
			"วิญญาณของไอรากระซิบถึงราคาของโศกนาฏกรรม",
			"ความกลัวรัดรึงทั่วร่าง"
		],
		"hindi": [
			"एक जमी हुई भूमि जहाँ भूत चीखते हैं।",
			"हारल्ड का अतीत बर्फ़ में फँसा हुआ है।",
			"मीठा प्रलोभन, उसके पीछे छिपा पागलपन।",
			"ऐरा का प्रेत त्रासदी की कीमत फुसफुसाता है।",
			"डर पूरे शरीर को जकड़ लेता है।"
		]
	}
} as const;
