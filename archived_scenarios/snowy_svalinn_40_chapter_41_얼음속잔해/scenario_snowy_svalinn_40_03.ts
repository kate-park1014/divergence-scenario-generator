export const scenario_snowy_svalinn_40_03 = {
	"scenario_id": "snowy_svalinn_40_03",
	"order": 3,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"bran": {
			"id": "mon_985fcdcc-1bf2-4822-aa2f-292ae9353456",
			"name": {
				"korean": "브란",
				"english": "Bran",
				"japanese": "ブラン",
				"chinese": "布兰",
				"french": "Bran",
				"spanish": "Bran",
				"vietnamese": "Bran",
				"thai": "แบรน",
				"hindi": "ब्रैन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/42cde50b-7453-47b1-04df-73500ad21d00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/4ecba7ed-ec7e-4a8e-74dc-bf3e711b4d00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "혹독한 한기만이 맹세를 기억하는 얼어붙은 무역로의 잔해.",
						"english": "Remains of the frozen trade route, where only the harsh cold remembers the vows.",
						"japanese": "凍てつく交易路の残骸。過酷な寒さだけが誓いを覚えている。",
						"chinese": "冰封商路的残骸，唯有严酷的寒意铭记誓言。",
						"french": "Vestiges de la route commerciale gelée, où seul le froid rigoureux se souvient des vœux.",
						"spanish": "Restos de la ruta comercial helada, donde solo el frío implacable recuerda los juramentos.",
						"vietnamese": "Tàn tích của tuyến đường thương mại đóng băng, nơi chỉ có cái lạnh khắc nghiệt ghi nhớ lời thề.",
						"thai": "ซากปรักหักพังของเส้นทางการค้าที่เยือกแข็ง ที่ซึ่งมีเพียงความหนาวเหน็บที่โหดร้ายเท่านั้นที่จดจำคำสาบานได้",
						"hindi": "जमी हुई व्यापारिक मार्ग के अवशेष, जहाँ केवल कठोर ठंड ही प्रतिज्ञाओं को याद करती है।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이곳이 스발린이 말한 곳인가?",
						"english": "Is this the place Svalinn spoke of?",
						"japanese": "ここがスバリンが言っていた場所か？",
						"chinese": "这里是斯瓦林说的地方吗？",
						"french": "Est-ce l'endroit dont Svalinn a parlé ?",
						"spanish": "¿Es este el lugar del que habló Svalinn?",
						"vietnamese": "Đây có phải là nơi Svalinn đã nói đến không?",
						"thai": "ที่นี่คือที่ที่สวาลินพูดถึงใช่ไหม?",
						"hindi": "क्या यही वह जगह है जिसके बारे में स्वालिन ने बात की थी?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "폐허뿐인데… 여기서 뭘 찾으라는 거지?",
						"english": "Only ruins... What am I supposed to find here?",
						"japanese": "廃墟ばかり…ここで何を見つけろというんだ？",
						"chinese": "只有废墟……我在这里该找什么？",
						"french": "Seulement des ruines... Qu'est-ce que je suis censé trouver ici ?",
						"spanish": "Solo ruinas... ¿Qué se supone que debo encontrar aquí?",
						"vietnamese": "Chỉ toàn tàn tích... Tôi phải tìm gì ở đây?",
						"thai": "มีแต่ซากปรักหักพัง... ฉันควรจะหาอะไรที่นี่?",
						"hindi": "केवल खंडहर... मुझे यहाँ क्या ढूंढना चाहिए?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"spot": [
						5,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "bran",
					"action": "enter"
				},
				{
					"content": {
						"korean": "돌아가라… 여기 남은 건 아무것도 없어.",
						"english": "Go back... There's nothing left here.",
						"japanese": "戻れ…ここには何も残っていない。",
						"chinese": "回去吧……这里什么都没剩下。",
						"french": "Retourne... Il ne reste plus rien ici.",
						"spanish": "Vuelve... No queda nada aquí.",
						"vietnamese": "Quay lại đi... Ở đây không còn gì cả.",
						"thai": "กลับไปซะ... ที่นี่ไม่มีอะไรเหลือแล้ว",
						"hindi": "वापस जाओ... यहाँ कुछ नहीं बचा है।"
					},
					"speaker": "bran",
					"emotion": "sad",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "오래된 기록 조각에서 반복되는 경고. 시간은 흐르고, 대가는 늘 돌아온다.",
						"english": "A repeating warning from an old fragment of records. Time flows, and the price always returns.",
						"japanese": "古い記録の断片から繰り返される警告。時は流れ、代償は常に返ってくる。",
						"chinese": "古老记录碎片中重复的警告。时间流逝，代价终将回归。",
						"french": "Un avertissement répété d'un ancien fragment de registres. Le temps passe, et le prix revient toujours.",
						"spanish": "Una advertencia repetida de un antiguo fragmento de registros. El tiempo fluye, y el precio siempre regresa.",
						"vietnamese": "Lời cảnh báo lặp đi lặp lại từ một mảnh ghi chép cũ. Thời gian trôi đi, và cái giá luôn quay trở lại.",
						"thai": "คำเตือนที่ซ้ำซากจากเศษบันทึกเก่า เวลาผ่านไป และราคามักจะกลับมาเสมอ",
						"hindi": "पुराने अभिलेखों के एक टुकड़े से बार-बार चेतावनी। समय बहता है, और कीमत हमेशा लौटती है।"
					}
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "bran",
					"spot": [
						4,
						2
					]
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "그 자는 너희를 속이고 있어. 스발린, 그 개자식!",
						"english": "That one is deceiving you. Svalinn, that bastard!",
						"japanese": "あいつはお前たちを騙している。スバリン、あの野郎！",
						"chinese": "那家伙在骗你们。斯瓦林，那个混蛋！",
						"french": "Celui-là vous trompe. Svalinn, ce salaud !",
						"spanish": "Ese os está engañando. ¡Svalinn, ese bastardo!",
						"vietnamese": "Kẻ đó đang lừa dối các ngươi. Svalinn, tên khốn đó!",
						"thai": "หมอนั่นกำลังหลอกลวงพวกแกอยู่ สวาลิน ไอ้สารเลว!",
						"hindi": "वह तुम्हें धोखा दे रहा है। स्वालिन, वह कमीना!"
					},
					"speaker": "bran"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "당신은 누군데?",
						"english": "Who are you?",
						"japanese": "あんたは誰だ？",
						"chinese": "你是谁？",
						"french": "Qui êtes-vous ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Ngươi là ai?",
						"thai": "คุณคือใคร?",
						"hindi": "तुम कौन हो?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "bran",
					"content": {
						"korean": "난 브란. 스발린에게 모든 것을 잃은 생존자다.",
						"english": "I'm Bran. A survivor who lost everything to Svalinn.",
						"japanese": "私はブラン。スヴァリンに全てを奪われた生存者だ。",
						"chinese": "我是布兰。一个被斯瓦林夺走一切的幸存者。",
						"french": "Je suis Bran. Un survivant qui a tout perdu à cause de Svalinn.",
						"spanish": "Soy Bran. Un superviviente que lo perdió todo a manos de Svalinn.",
						"vietnamese": "Tôi là Bran. Một người sống sót đã mất tất cả vì Svalinn.",
						"thai": "ฉันคือแบรน ผู้รอดชีวิตที่สูญเสียทุกสิ่งให้สวาลินน์",
						"hindi": "मैं ब्रान हूँ। एक उत्तरजीवी जिसने स्वालिन के कारण सब कुछ खो दिया।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "내 동료들도 그 달콤한 거짓에 넘어갔지… 결국 이렇게 됐어.",
						"english": "My comrades also fell for his sweet lies... This is how it ended up.",
						"japanese": "私の仲間たちもその甘い嘘に騙された… 結局、こうなった。",
						"chinese": "我的同伴们也相信了那些甜言蜜语……结果就这样了。",
						"french": "Mes camarades aussi sont tombés dans ses doux mensonges... Et voilà où nous en sommes.",
						"spanish": "Mis compañeros también cayeron en sus dulces mentiras... Y así terminó todo.",
						"vietnamese": "Đồng đội của tôi cũng tin vào những lời nói dối ngọt ngào đó... Và đây là kết cục.",
						"thai": "สหายของฉันก็หลงกลคำโกหกอันหอมหวานของเขา... สุดท้ายก็ลงเอยแบบนี้",
						"hindi": "मेरे साथी भी उसकी मीठी बातों में आ गए… और अंत ऐसा ही हुआ।"
					},
					"speaker": "bran"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "bran",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "시스템은 희망을 미끼로 던져. 그리고 모든 것을 앗아가지.",
						"english": "The System dangles hope as bait. Then takes everything away.",
						"japanese": "システムは希望を餌として投げかけ、全てを奪い去る。",
						"chinese": "系统以希望为诱饵，然后夺走一切。",
						"french": "Le Système utilise l'espoir comme appât. Puis il vous prend tout.",
						"spanish": "El Sistema arroja la esperanza como cebo. Y luego te quita todo.",
						"vietnamese": "Hệ thống giăng bẫy bằng hy vọng. Rồi cướp đi tất cả.",
						"thai": "ระบบโยนความหวังเป็นเหยื่อล่อ แล้วเอาทุกอย่างไป",
						"hindi": "सिस्टम उम्मीद का चारा डालता है। और फिर सब कुछ छीन लेता है।"
					},
					"speaker": "bran",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "설마… 우리도 이용당하고 있다는 건가?",
						"english": "Could it be... that we're also being used?",
						"japanese": "まさか… 私たちも利用されているのか？",
						"chinese": "难道……我们也被利用了吗？",
						"french": "Serait-ce... que nous sommes aussi utilisés ?",
						"spanish": "¿Acaso... también nos están utilizando?",
						"vietnamese": "Không lẽ... chúng ta cũng đang bị lợi dụng sao?",
						"thai": "ไม่จริงน่า... เราก็กำลังถูกใช้เหรอ?",
						"hindi": "कहीं ऐसा तो नहीं… कि हमें भी इस्तेमाल किया जा रहा है?"
					}
				},
				{
					"speaker": "bran",
					"content": {
						"korean": "그들은 덫을 놓아. 너희처럼, 나처럼, 모두를 끌어들이는 거지.",
						"english": "They set traps. Luring everyone in, just like you, just like me.",
						"japanese": "彼らは罠を仕掛ける。君たちのように、私のように、皆を引き込むんだ。",
						"chinese": "他们设下陷阱。像你们一样，像我一样，把所有人都引进去。",
						"french": "Ils tendent des pièges. Attirant tout le monde, comme vous, comme moi.",
						"spanish": "Ponen trampas. Atrae a todos, como a vosotros, como a mí.",
						"vietnamese": "Họ đặt bẫy. Dụ dỗ tất cả mọi người, giống như bạn, giống như tôi.",
						"thai": "พวกเขาวางกับดัก ล่อลวงทุกคนเข้ามา เหมือนพวกคุณ เหมือนฉัน",
						"hindi": "वे जाल बिछाते हैं। तुम जैसे, मुझ जैसे, सभी को खींचते हैं।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_2",
					"content": {
						"korean": "대체 뭘 바라는 건데?",
						"english": "What exactly do they want?",
						"japanese": "一体何を望んでいるんだ？",
						"chinese": "他们到底想要什么？",
						"french": "Mais que veulent-ils au juste ?",
						"spanish": "¿Qué quieren, al fin y al cabo?",
						"vietnamese": "Rốt cuộc thì họ muốn gì?",
						"thai": "ตกลงพวกเขาต้องการอะไรกันแน่?",
						"hindi": "आखिरकार वे क्या चाहते हैं?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "bran",
					"content": {
						"korean": "우리의 온기, 우리의 분노. 시스템이 원하는 건 그거야.",
						"english": "Our warmth, our rage. That's what the System wants.",
						"japanese": "我々の温もり、我々の怒り。システムが望むのはそれだ。",
						"chinese": "我们的温暖，我们的愤怒。这就是系统想要的。",
						"french": "Notre chaleur, notre colère. C'est ce que le Système veut.",
						"spanish": "Nuestra calidez, nuestra ira. Eso es lo que el Sistema quiere.",
						"vietnamese": "Sự ấm áp của chúng ta, cơn giận của chúng ta. Đó là điều mà Hệ thống muốn.",
						"thai": "ความอบอุ่นของเรา ความโกรธของเรา นั่นคือสิ่งที่ระบบต้องการ",
						"hindi": "हमारी गर्माहट, हमारा गुस्सा। यही वह है जो सिस्टम चाहता है।"
					}
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "bran",
					"action": "enter"
				},
				{
					"speaker": "bran",
					"content": {
						"korean": "더 이상 가면 안 돼. 돌아갈 수 없어.",
						"english": "You can't go any further. There's no turning back.",
						"japanese": "これ以上は行けない。もう戻れない。",
						"chinese": "不能再往前走了。已经回不去了。",
						"french": "Tu ne peux pas aller plus loin. Il n'y a pas de retour possible.",
						"spanish": "No puedes ir más allá. No hay vuelta atrás.",
						"vietnamese": "Không thể đi xa hơn được nữa. Không thể quay lại.",
						"thai": "ไปต่อไม่ได้แล้ว กลับไม่ได้แล้ว",
						"hindi": "अब और आगे मत जाओ। वापस नहीं जा सकते।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "이미 늦었어. 여기까지 왔는데.",
						"english": "It's too late. We've come all this way.",
						"japanese": "もう遅い。ここまで来たのに。",
						"chinese": "已经太晚了。我们都走到这里了。",
						"french": "Il est trop tard. Nous sommes venus jusqu'ici.",
						"spanish": "Es demasiado tarde. Hemos llegado hasta aquí.",
						"vietnamese": "Quá muộn rồi. Chúng ta đã đến tận đây rồi.",
						"thai": "สายไปแล้ว มาไกลขนาดนี้แล้ว",
						"hindi": "बहुत देर हो चुकी है। हम इतनी दूर आ गए हैं।"
					}
				},
				{
					"content": {
						"korean": "너희 동료들도 그렇게 말했지… 그리고 얼음이 됐어.",
						"english": "Your comrades said the same... and turned to ice.",
						"japanese": "お前たちの仲間もそう言った…そして氷になった。",
						"chinese": "你的同伴们也说过同样的话……然后变成了冰。",
						"french": "Tes compagnons ont dit la même chose... et se sont transformés en glace.",
						"spanish": "Tus compañeros dijeron lo mismo... y se convirtieron en hielo.",
						"vietnamese": "Đồng đội của ngươi cũng nói vậy... rồi hóa thành băng.",
						"thai": "สหายของเจ้าก็พูดแบบเดียวกัน... แล้วกลายเป็นน้ำแข็ง",
						"hindi": "तुम्हारे साथी भी यही बोले थे... और बर्फ बन गए।"
					},
					"speaker": "bran",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "우리는 달라. 끝까지 갈 거야.",
						"english": "We are different. We will go to the end.",
						"japanese": "我々は違う。最後まで行くぞ。",
						"chinese": "我们不同。我们会坚持到底。",
						"french": "Nous sommes différents. Nous irons jusqu'au bout.",
						"spanish": "Nosotros somos diferentes. Iremos hasta el final.",
						"vietnamese": "Chúng ta khác. Chúng ta sẽ đi đến cùng.",
						"thai": "เราไม่เหมือนกัน เราจะไปให้สุดทาง",
						"hindi": "हम अलग हैं। हम अंत तक जाएंगे।"
					},
					"speaker": "character_3",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "…후회하지 마. 내 경고를 기억해.",
						"english": "...Don't regret it. Remember my warning.",
						"japanese": "…後悔するな。私の警告を覚えておけ。",
						"chinese": "……不要后悔。记住我的警告。",
						"french": "...Ne le regrette pas. Souviens-toi de mon avertissement.",
						"spanish": "...No te arrepientas. Recuerda mi advertencia.",
						"vietnamese": "...Đừng hối hận. Hãy nhớ lời cảnh báo của ta.",
						"thai": "...อย่าเสียใจไปเลย จงจำคำเตือนของข้าไว้",
						"hindi": "…पछताना मत। मेरी चेतावनी याद रखना।"
					},
					"speaker": "bran",
					"emotion": "sad",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "무역로의 가장 깊은 곳. 차가운 기운이 심장을 조여왔다.",
						"english": "The deepest part of the trade route. A chilling aura gripped my heart.",
						"japanese": "交易路の最も深い場所。冷たい気が心臓を締め付けた。",
						"chinese": "贸易路线最深处。一股寒意紧紧扼住了我的心脏。",
						"french": "La partie la plus profonde de la route commerciale. Une aura glaciale serrait mon cœur.",
						"spanish": "La parte más profunda de la ruta comercial. Un aura fría oprimía mi corazón.",
						"vietnamese": "Nơi sâu nhất của con đường thương mại. Một luồng khí lạnh lẽo siết chặt trái tim.",
						"thai": "ส่วนที่ลึกที่สุดของเส้นทางการค้า ออร่าที่เยือกเย็นเข้ามารัดหัวใจ",
						"hindi": "व्यापार मार्ग का सबसे गहरा हिस्सा। एक ठंडी भावना ने मेरे दिल को जकड़ लिया।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 것들… 진실을 찾아 여기까지 왔느냐?",
						"english": "Fools... Have you come all this way for the truth?",
						"japanese": "愚かな者たちめ…真実を求めてここまで来たのか？",
						"chinese": "愚蠢的东西……你们是为了寻找真相才来到这里的吗？",
						"french": "Imbéciles... Êtes-vous venus jusqu'ici pour la vérité ?",
						"spanish": "Necios... ¿Habéis llegado hasta aquí en busca de la verdad?",
						"vietnamese": "Lũ ngốc... Các ngươi đã đến tận đây để tìm sự thật ư?",
						"thai": "พวกคนโง่... เจ้ามาถึงที่นี่เพื่อตามหาความจริงหรือ?",
						"hindi": "मूर्खों... क्या तुम सच की तलाश में यहाँ तक आए हो?"
					}
				},
				{
					"content": {
						"korean": "{random_boss}! 네가 브란의 동료들을 그렇게 만들었군!",
						"english": "{random_boss}! You did that to Bran's comrades!",
						"japanese": "{random_boss}！貴様がブランの仲間たちをあのようにしたのか！",
						"chinese": "{random_boss}！是你把布兰的同伴们变成那样的！",
						"french": "{random_boss} ! C'est toi qui as fait ça aux camarades de Bran !",
						"spanish": "¡{random_boss}! ¡Tú le hiciste eso a los compañeros de Bran!",
						"vietnamese": "{random_boss}! Ngươi đã làm điều đó với đồng đội của Bran!",
						"thai": "{random_boss}! เจ้าทำกับสหายของแบรนแบบนั้นเอง!",
						"hindi": "{random_boss}! तुमने ही ब्रान के साथियों को ऐसा बनाया!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "…단지 시스템의 의지를 따랐을 뿐. 너희도 곧 알게 될 것이다.",
						"english": "...I merely followed the will of the system. You will soon understand.",
						"japanese": "…ただシステムの意思に従っただけだ。お前たちもすぐに知ることになるだろう。",
						"chinese": "……我只是遵循了系统的意志。你们很快就会明白的。",
						"french": "...J'ai simplement suivi la volonté du système. Vous le comprendrez bientôt.",
						"spanish": "...Simplemente seguí la voluntad del sistema. Pronto lo entenderéis.",
						"vietnamese": "...Ta chỉ tuân theo ý chí của hệ thống. Các ngươi sẽ sớm hiểu thôi.",
						"thai": "...ข้าแค่ทำตามเจตจำนงของระบบเท่านั้น พวกเจ้าก็จะเข้าใจในไม่ช้า",
						"hindi": "…मैंने बस सिस्टम की इच्छा का पालन किया। तुम भी जल्द ही जान जाओगे।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "{random_boss}가 쓰러졌다. 그러나 공허한 승리였다.",
						"english": "{random_boss} fell. But it was a hollow victory.",
						"japanese": "{random_boss}は倒れた。しかし、それは空虚な勝利だった。",
						"chinese": "{random_boss}倒下了。但这只是一场空虚的胜利。",
						"french": "{random_boss} est tombé. Mais ce fut une victoire creuse.",
						"spanish": "{random_boss} cayó. Pero fue una victoria vacía.",
						"vietnamese": "{random_boss} đã gục ngã. Nhưng đó là một chiến thắng trống rỗng.",
						"thai": "{random_boss} ล้มลงแล้ว แต่มันคือชัยชนะที่ว่างเปล่า",
						"hindi": "{random_boss} गिर गया। लेकिन यह एक खोखली जीत थी।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "…시간은 흐르고… 대가는… 돌아온다…",
						"english": "...Time flows... The price... returns...",
						"japanese": "…時は流れ…代償は…戻ってくる…",
						"chinese": "……时间流逝……代价……会回来的……",
						"french": "...Le temps s'écoule... Le prix... revient...",
						"spanish": "...El tiempo fluye... El precio... regresa...",
						"vietnamese": "...Thời gian trôi đi... Cái giá... sẽ trở lại...",
						"thai": "...เวลากำลังดำเนินไป... ราคา... จะกลับมา...",
						"hindi": "…समय बहता है… कीमत… लौट आती है…"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리지? 브란의 경고가 맞았어.",
						"english": "What was that? Bran's warning was right.",
						"japanese": "何のことだ？ブランの警告が正しかった。",
						"chinese": "那是什么意思？布兰的警告是对的。",
						"french": "Qu'est-ce que c'était ? L'avertissement de Bran était juste.",
						"spanish": "¿Qué fue eso? La advertencia de Bran era cierta.",
						"vietnamese": "Cái gì vậy? Lời cảnh báo của Bran đã đúng.",
						"thai": "นั่นอะไรน่ะ? คำเตือนของแบรนเป็นจริง",
						"hindi": "यह क्या था? ब्रान की चेतावनी सही थी।"
					}
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "싸늘한 유물에서 희미한 빛이 뿜어져 나왔다. 다음 단서의 조각이었다.",
						"english": "A faint light emanated from the cold artifact. It was a piece of the next clue.",
						"japanese": "冷たい遺物から微かな光が放たれた。次の手がかりの一部だった。",
						"chinese": "冰冷的遗物中散发出微弱的光芒。那是下一条线索的一部分。",
						"french": "Une faible lumière émana de l'artefact froid. C'était un fragment de l'indice suivant.",
						"spanish": "Una luz tenue emanó del frío artefacto. Era una pieza de la siguiente pista.",
						"vietnamese": "Một luồng sáng mờ ảo tỏa ra từ cổ vật lạnh lẽo. Đó là một mảnh ghép của manh mối tiếp theo.",
						"thai": "แสงจางๆ เปล่งออกมาจากวัตถุโบราณที่เย็นเยือก มันคือชิ้นส่วนของเบาะแสต่อไป",
						"hindi": "ठंडी कलाकृति से एक हल्की रोशनी निकली। यह अगले सुराग का एक टुकड़ा था।"
					},
					"type": "speech"
				},
				{
					"action": "enter",
					"speaker": "bran",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						5,
						2
					]
				},
				{
					"content": {
						"korean": "겨우… 살아남았군. 하지만 끝이 아니야.",
						"english": "Barely... survived. But this isn't the end.",
						"japanese": "かろうじて…生き残った。だが、終わりじゃない。",
						"chinese": "勉强…活下来了。但这还没完。",
						"french": "À peine… survécu. Mais ce n'est pas la fin.",
						"spanish": "Apenas… sobreviví. Pero esto no es el final.",
						"vietnamese": "Vừa… sống sót. Nhưng đây chưa phải là kết thúc.",
						"thai": "แทบจะ... รอดมาได้. แต่นี่ไม่ใช่จุดจบ.",
						"hindi": "बमुश्किल… बच गया। लेकिन यह अंत नहीं है।"
					},
					"speaker": "bran",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "bran",
					"content": {
						"korean": "시스템은 계속 너희를 부를 거다.",
						"english": "The System will keep calling you.",
						"japanese": "システムは君たちを呼び続けるだろう。",
						"chinese": "系统会继续召唤你们。",
						"french": "Le Système continuera de vous appeler.",
						"spanish": "El Sistema seguirá llamándoos.",
						"vietnamese": "Hệ thống sẽ tiếp tục gọi các ngươi.",
						"thai": "ระบบจะยังคงเรียกพวกเจ้าต่อไป",
						"hindi": "सिستم तुम्हें बुलाता रहेगा।"
					}
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "차가운 얼음이 모든 것을 삼켰다. 움직일 수 없었다.",
						"english": "The cold ice swallowed everything. Couldn't move.",
						"japanese": "冷たい氷がすべてを飲み込んだ。動けなかった。",
						"chinese": "冰冷的寒冰吞噬了一切。无法动弹。",
						"french": "La glace froide a tout englouti. Impossible de bouger.",
						"spanish": "El frío hielo lo devoró todo. No podía moverme.",
						"vietnamese": "Băng giá lạnh lẽo nuốt chửng mọi thứ. Không thể nhúc nhích.",
						"thai": "น้ำแข็งเย็นเยือกกลืนกินทุกสิ่ง เคลื่อนไหวไม่ได้",
						"hindi": "ठंडी बर्फ ने सब कुछ निगल लिया। हिल नहीं सका।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "너희의 온기는… 결국… 시스템의 양식이 될 뿐.",
						"english": "Your warmth... will eventually... only become sustenance for the System.",
						"japanese": "君たちの温もりは…結局…システムの糧となるだけだ。",
						"chinese": "你们的温暖…终究…只会成为系统的养料。",
						"french": "Votre chaleur… ne sera finalement… que la subsistance du Système.",
						"spanish": "Vuestro calor… al final… solo será el alimento del Sistema.",
						"vietnamese": "Sự ấm áp của các ngươi… rốt cuộc… cũng chỉ trở thành chất dinh dưỡng cho Hệ thống.",
						"thai": "ความอบอุ่นของพวกเจ้า... ในที่สุด... ก็เป็นเพียงอาหารของระบบ",
						"hindi": "तुम्हारी गर्माहट… अंततः… केवल सिस्टम का पोषण बनेगी।"
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "젠장… 아직 끝나지 않았어!",
						"english": "Damn it... It's not over yet!",
						"japanese": "くそっ…まだ終わってない！",
						"chinese": "该死…还没结束！",
						"french": "Mince… Ce n'est pas encore fini !",
						"spanish": "¡Maldita sea… aún no ha terminado!",
						"vietnamese": "Chết tiệt… Vẫn chưa kết thúc!",
						"thai": "บ้าเอ๊ย... มันยังไม่จบ!",
						"hindi": "धिक्कार है… अभी खत्म नहीं हुआ है!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"spot": [
						4,
						2
					],
					"speaker": "bran",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "일어나! 여기서 끝낼 순 없어!",
						"english": "Wake up! It can't end here!",
						"japanese": "起きろ！ここで終わらせるわけにはいかない！",
						"chinese": "起来！不能在这里结束！",
						"french": "Réveille-toi ! Ça ne peut pas se terminer ici !",
						"spanish": "¡Despierta! ¡No puede terminar aquí!",
						"vietnamese": "Dậy đi! Không thể kết thúc ở đây được!",
						"thai": "ตื่นขึ้นมา! มันจะมาจบที่นี่ไม่ได้!",
						"hindi": "उठो! यहाँ खत्म नहीं हो सकता!"
					},
					"speaker": "bran",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "진실을 찾아야만… 이 악몽에서 벗어날 수 있어.",
						"english": "Only by finding the truth... can you escape this nightmare.",
						"japanese": "真実を見つけなければ…この悪夢から抜け出せない。",
						"chinese": "只有找到真相…才能摆脱这场噩梦。",
						"french": "Seulement en trouvant la vérité… vous pourrez vous échapper de ce cauchemar.",
						"spanish": "Solo encontrando la verdad… podrás escapar de esta pesadilla.",
						"vietnamese": "Chỉ khi tìm thấy sự thật… mới có thể thoát khỏi cơn ác mộng này.",
						"thai": "เพียงแค่ต้องค้นพบความจริง... ถึงจะหลุดพ้นจากฝันร้ายนี้ได้",
						"hindi": "केवल सच ढूंढने से ही… तुम इस दुःस्वप्न से बच सकते हो।"
					},
					"speaker": "bran"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"얼어붙은 무역로, 배신으로 얼룩진 맹세의 땅.",
			"스발린의 정보는 진실일까, 아니면 또 다른 함정일까.",
			"망설이는 발걸음. 그곳에서 모든 것을 잃은 자가 기다린다.",
			"차가운 진실이 드러나고, 거짓된 희망은 무너져 내린다."
		],
		"english": [
			"Frozen trade routes, a land of promises stained by betrayal.",
			"Is Svalinn's information true, or just another trap?",
			"Hesitant steps. There, one who lost everything awaits.",
			"Cold truth revealed, false hope crumbles."
		],
		"japanese": [
			"凍てつく交易路、裏切りに染まった誓いの地。",
			"スバリンの情報は真実か、それともまた別の罠か。",
			"躊躇する足取り。そこでは、すべてを失った者が待つ。",
			"冷たい真実が露わになり、偽りの希望は崩れ落ちる。"
		],
		"chinese": [
			"冰封的商路，被背叛玷污的盟誓之地。",
			"斯瓦林的情報是真是假，还是另一个陷阱？",
			"犹豫的脚步。在那里，失去一切之人正在等待。",
			"冰冷的真相揭露，虚假的希望崩塌。"
		],
		"french": [
			"Routes commerciales gelées, terre de serments souillée par la trahison.",
			"Les informations de Svalinn sont-elles vraies, ou est-ce un autre piège ?",
			"Des pas hésitants. Là-bas, celui qui a tout perdu attend.",
			"La froide vérité est révélée, le faux espoir s'effondre."
		],
		"spanish": [
			"Rutas comerciales heladas, una tierra de promesas manchada por la traición.",
			"¿Es la información de Svalinn verdadera o solo otra trampa?",
			"Pasos vacilantes. Allí, el que lo perdió todo espera.",
			"La fría verdad se revela, la falsa esperanza se desmorona."
		],
		"vietnamese": [
			"Tuyến đường thương mại đóng băng, vùng đất lời thề nhuốm màu phản bội.",
			"Thông tin của Svalinn là thật, hay lại là một cái bẫy khác?",
			"Bước chân do dự. Ở đó, kẻ mất tất cả đang chờ đợi.",
			"Sự thật lạnh lẽo hé lộ, hy vọng hão huyền tan vỡ."
		],
		"thai": [
			"เส้นทางการค้าที่เยือกแข็ง ดินแดนแห่งคำมั่นสัญญาที่เปื้อนไปด้วยการทรยศ",
			"ข้อมูลของสวาลินเป็นเรื่องจริง หรือเป็นกับดักอีกอันกันแน่?",
			"ก้าวที่ลังเล ที่นั่น ผู้ที่สูญเสียทุกสิ่งกำลังรออยู่",
			"ความจริงอันเย็นชาถูกเปิดเผย ความหวังจอมปลอมพังทลาย"
		],
		"hindi": [
			"जमी हुई व्यापारिक सड़कें, विश्वासघात से कलंकित प्रतिज्ञाओं की भूमि।",
			"क्या स्वालिन की जानकारी सच है, या यह सिर्फ एक और जाल है?",
			"हिचकिचाते कदम। वहाँ, जिसने सब कुछ खो दिया है, इंतज़ार कर रहा है।",
			"कटु सत्य सामने आता है, झूठी आशाएं बिखर जाती हैं।"
		]
	}
} as const;
