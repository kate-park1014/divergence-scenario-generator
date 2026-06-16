export const scenario_snowy_haraldr_51_05 = {
	"scenario_id": "snowy_haraldr_51_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "snowy",
	"actors": {
		"inka": {
			"id": "mon_583e945a-1e2f-428b-a251-b428f25b4052",
			"name": {
				"korean": "인카",
				"english": "Inka",
				"japanese": "インカ",
				"chinese": "因卡",
				"french": "Inka",
				"spanish": "Inka",
				"vietnamese": "Inka",
				"thai": "อินคา",
				"hindi": "इंंका"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/97f4545b-2e8a-4688-3e4e-b34bb246dd00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f27763ba-2358-4fd3-c813-0f0b59dcac00/public"
		}
	},
	"boss": {
		"pool_id": "pool_106"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "얼음 동굴 안, 눈보라가 잦아들자 고요가 찾아왔다.",
						"english": "Inside the ice cave, silence fell as the blizzard subsided.",
						"japanese": "氷の洞窟の中、吹雪が収まると静寂が訪れた。",
						"chinese": "冰洞内，暴风雪渐歇，一片寂静。",
						"french": "À l'intérieur de la grotte de glace, le silence s'installa lorsque le blizzard se calma.",
						"spanish": "Dentro de la cueva de hielo, el silencio llegó cuando la tormenta de nieve amainó.",
						"vietnamese": "Bên trong hang băng, sự tĩnh lặng bao trùm khi bão tuyết ngớt dần.",
						"thai": "ภายในถ้ำน้ำแข็ง ความเงียบสงบเข้าปกคลุมเมื่อพายุหิมะสงบลง",
						"hindi": "बर्फीली गुफा के अंदर, बर्फीले तूफान के थमते ही शांति छा गई।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "눈이 멎는군.",
						"english": "The snow stops.",
						"japanese": "雪が止むな。",
						"chinese": "雪停了。",
						"french": "La neige s'arrête.",
						"spanish": "La nieve se detiene.",
						"vietnamese": "Tuyết ngừng rơi rồi.",
						"thai": "หิมะหยุดแล้ว",
						"hindi": "बर्फ़ रुक रही है।"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…이제 가야 할 시간인가.",
						"english": "...Is it time to go now?",
						"japanese": "…もう、行く時間か。",
						"chinese": "…是时候该走了吗？",
						"french": "...Est-il temps de partir maintenant ?",
						"spanish": "...¿Es hora de irse ya?",
						"vietnamese": "...Đã đến lúc phải đi rồi sao?",
						"thai": "...ได้เวลาต้องไปแล้วสินะ",
						"hindi": "...क्या अब जाने का समय हो गया है?"
					}
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						2,
						3
					],
					"speaker": "inka",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…아직 이 눈 결정을 못 버리겠어요.",
						"english": "...I still can't let go of this snowflake.",
						"japanese": "…まだ、この雪の結晶を捨てられない。",
						"chinese": "…我还是无法丢弃这片雪花。",
						"french": "...Je ne peux pas encore me séparer de ce flocon de neige.",
						"spanish": "...Todavía no puedo soltar este copo de nieve.",
						"vietnamese": "...Tôi vẫn chưa thể vứt bỏ tinh thể tuyết này.",
						"thai": "...ฉันยังทิ้งผลึกหิมะนี้ไม่ลง",
						"hindi": "...मैं अभी भी इस बर्फ के टुकड़े को नहीं छोड़ सकता।"
					},
					"speaker": "inka"
				},
				{
					"content": {
						"korean": "왜?",
						"english": "Why?",
						"japanese": "なぜ？",
						"chinese": "为什么？",
						"french": "Pourquoi ?",
						"spanish": "¿Por qué?",
						"vietnamese": "Tại sao?",
						"thai": "ทำไมล่ะ?",
						"hindi": "क्यों?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "왠지… 그 사람도, 누군가의 눈 결정이었을 것 같아서.",
						"english": "Somehow... I feel like that person was someone's snowflake too.",
						"japanese": "なんだか…あの人も、誰かの雪の結晶だったような気がして。",
						"chinese": "不知怎的…我总觉得，那个人也曾是某个人的雪花。",
						"french": "Je ne sais pas… j'ai l'impression que cette personne était aussi le flocon de neige de quelqu'un.",
						"spanish": "De alguna manera... siento que esa persona también fue el copo de nieve de alguien.",
						"vietnamese": "Không hiểu sao... tôi cảm thấy người đó cũng từng là tinh thể tuyết của ai đó.",
						"thai": "ไม่รู้สิ... ฉันรู้สึกเหมือนว่าคนๆ นั้นก็เคยเป็นผลึกหิมะของใครบางคนเหมือนกัน",
						"hindi": "पता नहीं क्यों... मुझे लगता है कि वह व्यक्ति भी किसी और का बर्फ का टुकड़ा था।"
					},
					"speaker": "inka"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "inka",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						3
					],
					"action": "enter"
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "인카, 당신은 항상 그렇게 말하는군.",
						"english": "Inka, you always say that.",
						"japanese": "インカ、あなたはいつもそう言うね。",
						"chinese": "因卡，你总是这么说。",
						"french": "Inka, tu dis toujours ça.",
						"spanish": "Inka, siempre dices eso.",
						"vietnamese": "Inka, cậu luôn nói như vậy.",
						"thai": "อินคา เธอพูดแบบนั้นเสมอเลยนะ",
						"hindi": "इंका, तुम हमेशा ऐसा ही कहते हो।"
					}
				},
				{
					"speaker": "inka",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그저… 한 사람의 끝을 보고 싶을 뿐이에요.",
						"english": "I just... want to see one person's end.",
						"japanese": "ただ…一人の最期を見たいだけなんです。",
						"chinese": "我只是…想看到一个人的终结罢了。",
						"french": "Je veux juste… voir la fin d'une personne.",
						"spanish": "Solo quiero... ver el final de una persona.",
						"vietnamese": "Tôi chỉ... muốn thấy kết thúc của một người thôi.",
						"thai": "ฉันแค่... อยากเห็นจุดจบของใครสักคน",
						"hindi": "मैं बस... एक व्यक्ति का अंत देखना चाहता हूँ।"
					}
				},
				{
					"speaker": "character_3",
					"content": {
						"korean": "그 끝이, 우리에게 무엇을 남길까.",
						"english": "What will that end leave us with?",
						"japanese": "その終焉が、私たちに何を残すのだろうか。",
						"chinese": "那个结局，会给我们留下什么呢？",
						"french": "Que nous laissera cette fin ?",
						"spanish": "¿Qué nos dejará ese final?",
						"vietnamese": "Cái kết đó, sẽ để lại gì cho chúng ta?",
						"thai": "จุดจบนั้นจะเหลืออะไรไว้ให้เราบ้างนะ",
						"hindi": "वह अंत हमें क्या छोड़ जाएगा?"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"content": {
						"korean": "바깥에서 희미한 뿔피리 소리가 들려왔다.",
						"english": "A faint horn sound was heard from outside.",
						"japanese": "外から微かな角笛の音が聞こえてきた。",
						"chinese": "从外面传来一阵微弱的号角声。",
						"french": "Un faible son de cor retentit de l'extérieur.",
						"spanish": "Un débil sonido de cuerno se escuchó desde afuera.",
						"vietnamese": "Từ bên ngoài vọng vào tiếng tù và yếu ớt.",
						"thai": "มีเสียงแตรค่อยๆ ดังมาจากข้างนอก",
						"hindi": "बाहर से एक धीमी सी तुरही की आवाज़ सुनाई दी।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "…저 소리, 설마.",
						"english": "...That sound, could it be?",
						"japanese": "…あの音、まさか。",
						"chinese": "…那个声音，难道是？",
						"french": "...Ce son, serait-ce...?",
						"spanish": "...Ese sonido, ¿será posible?",
						"vietnamese": "...Tiếng đó, chẳng lẽ là...",
						"thai": "...เสียงนั่น อย่าบอกนะว่า",
						"hindi": "...वह आवाज़, कहीं ऐसा तो नहीं।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "여기까지 쫓아온 건가?",
						"english": "Did you follow me all the way here?",
						"japanese": "ここまで追ってきたのか？",
						"chinese": "你追到这里来了吗？",
						"french": "M'avez-vous suivi jusqu'ici ?",
						"spanish": "¿Me has seguido hasta aquí?",
						"vietnamese": "Ngươi đã đuổi theo ta đến tận đây sao?",
						"thai": "ตามมาถึงนี่เลยหรือไง?",
						"hindi": "क्या तुम मुझे यहाँ तक पीछा करते हुए आए हो?"
					}
				}
			]
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "겨우 이 정도인가. …아직 멀었어.",
						"english": "Is this all? ...Not good enough yet.",
						"japanese": "たったこれだけか。…まだまだだな。",
						"chinese": "就这点本事吗？……还差得远呢。",
						"french": "Ce n'est que ça ? ...Pas encore assez.",
						"spanish": "¿Es solo esto? ...Aún falta mucho.",
						"vietnamese": "Chỉ có thế này thôi sao? ...Vẫn còn kém xa.",
						"thai": "แค่นี้เองเหรอ? ...ยังอีกไกลนัก",
						"hindi": "बस इतना ही? ...अभी बहुत दूर है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "boss"
				},
				{
					"content": {
						"korean": "…도망치는군.",
						"english": "...They're running away.",
						"japanese": "…逃げ出すか。",
						"chinese": "……逃走了吗。",
						"french": "...Ils s'enfuient.",
						"spanish": "...Están huyendo.",
						"vietnamese": "...Chạy trốn rồi.",
						"thai": "...หนีไปแล้วสินะ",
						"hindi": "...भाग रहे हैं।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "그들의 추격은, 아직 끝나지 않았다. 다시 북쪽으로 향했다.",
						"english": "Their pursuit was not over yet. They headed north again.",
						"japanese": "彼らの追撃は、まだ終わっていなかった。再び北へと向かった。",
						"chinese": "他们的追击还没有结束。再次向北进发。",
						"french": "Leur poursuite n'était pas encore terminée. Ils se dirigèrent à nouveau vers le nord.",
						"spanish": "Su persecución aún no había terminado. Se dirigieron de nuevo hacia el norte.",
						"vietnamese": "Cuộc truy đuổi của họ vẫn chưa kết thúc. Họ lại hướng về phía bắc.",
						"thai": "การตามล่าของพวกเขายังไม่สิ้นสุด พวกเขามุ่งหน้าไปทางเหนืออีกครั้ง",
						"hindi": "उनकी खोज अभी खत्म नहीं हुई थी। वे फिर से उत्तर की ओर बढ़े।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "눈보라가 완전히 잦아들 무렵, 동굴 입구에 그림자가 드리웠다.",
						"english": "As the blizzard completely subsided, a shadow fell upon the cave entrance.",
						"japanese": "吹雪が完全に収まる頃、洞窟の入り口に影が差した。",
						"chinese": "当暴风雪完全平息时，一个身影出现在洞穴入口。",
						"french": "Alors que le blizzard se calmait complètement, une ombre apparut à l'entrée de la grotte.",
						"spanish": "Cuando la ventisca cesó por completo, una sombra se cernió sobre la entrada de la cueva.",
						"vietnamese": "Khi bão tuyết hoàn toàn tan, một bóng đen hiện ra ở cửa hang.",
						"thai": "เมื่อพายุหิมะสงบลงโดยสมบูรณ์ เงาหนึ่งก็ทอดลงที่ปากถ้ำ",
						"hindi": "जैसे ही बर्फीला तूफान पूरी तरह शांत हुआ, गुफा के मुहाने पर एक परछाई पड़ी।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…따뜻해 보이는군. 눈 결정 하나, 어떤가?",
						"english": "...Looks warm. How about a snowflake?",
						"japanese": "…暖かそうだ。雪の結晶一つ、どうだ？",
						"chinese": "……看起来很暖和。要不要一片雪花？",
						"french": "...Ça a l'air chaud. Que diriez-vous d'un flocon de neige ?",
						"spanish": "...Parece cálido. ¿Qué tal un copo de nieve?",
						"vietnamese": "...Trông có vẻ ấm áp. Một bông tuyết thì sao?",
						"thai": "...ดูอบอุ่นดีนะ. เกล็ดหิมะสักอันเป็นไง?",
						"hindi": "...गरम लग रहा है। एक हिमपात, कैसा रहेगा?"
					}
				},
				{
					"action": "focus",
					"type": "direction",
					"spot": [
						3,
						3
					],
					"speaker": "inka",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "…!",
						"english": "...!",
						"japanese": "…！",
						"chinese": "…！",
						"french": "…!",
						"spanish": "…!",
						"vietnamese": "…!",
						"thai": "…!",
						"hindi": "…!"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "inka"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "Haraldr…!",
						"english": "Haraldr…!",
						"japanese": "ハラルドル…！",
						"chinese": "哈拉尔德…！",
						"french": "Haraldr…!",
						"spanish": "¡Haraldr…!",
						"vietnamese": "Haraldr…!",
						"thai": "ฮาราลด์ร…!",
						"hindi": "हैराल्ड्र…!"
					}
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "하찮은 노력은 언제나 결국 얼어붙지.",
						"english": "Petty efforts always end up frozen.",
						"japanese": "つまらない努力は、いつだって結局は凍りつくものだ。",
						"chinese": "微不足道的努力，最终总会冻结。",
						"french": "Les efforts insignifiants finissent toujours par geler.",
						"spanish": "Los esfuerzos insignificantes siempre terminan congelados.",
						"vietnamese": "Những nỗ lực tầm thường cuối cùng luôn bị đóng băng.",
						"thai": "ความพยายามที่ไร้สาระมักจะจบลงด้วยการแข็งตัว",
						"hindi": "तुच्छ प्रयास हमेशा अंततः जम जाते हैं।"
					},
					"speaker": "boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…여기서 멈출 순 없어.",
						"english": "...I can't stop here.",
						"japanese": "…ここで止まるわけにはいかない。",
						"chinese": "……不能止步于此。",
						"french": "...Je ne peux pas m'arrêter ici.",
						"spanish": "...No puedo parar aquí.",
						"vietnamese": "...Không thể dừng lại ở đây được.",
						"thai": "...จะหยุดอยู่แค่นี้ไม่ได้",
						"hindi": "...मैं यहाँ रुक नहीं सकता।"
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"밤은 깊고 눈보라는 잦아들었다.",
			"모닥불의 마지막 불꽃이 어둠 속에서 흔들렸다.",
			"이제, 멈췄던 추격이 다시 시작될 시간.",
			"그들은 여전히, 답을 찾고 있었다."
		],
		"english": [
			"The deep night, the blizzard subsides.",
			"The last flame of the bonfire flickered in the dark.",
			"Now, the paused chase resumes.",
			"They were still searching for answers."
		],
		"japanese": [
			"夜は更け、吹雪は収まった。",
			"焚き火の最後の炎が闇の中で揺らめいた。",
			"今、止まっていた追撃が再び始まる時。",
			"彼らは依然として、答えを探していた。"
		],
		"chinese": [
			"夜色已深，暴风雪渐歇。",
			"篝火的最后一丝火光在黑暗中摇曳。",
			"如今，暂停的追击将再次开始。",
			"他们仍在寻找答案。"
		],
		"french": [
			"La nuit est profonde, le blizzard s'est calmé.",
			"La dernière flamme du feu de joie vacillait dans l'obscurité.",
			"Maintenant, il est temps que la poursuite interrompue reprenne.",
			"Ils cherchaient toujours des réponses."
		],
		"spanish": [
			"La noche es profunda, la tormenta de nieve ha amainado.",
			"La última llama de la hoguera parpadeaba en la oscuridad.",
			"Ahora, es hora de que la persecución detenida se reanude.",
			"Ellos aún buscaban respuestas."
		],
		"vietnamese": [
			"Đêm đã khuya, bão tuyết đã ngớt.",
			"Ngọn lửa cuối cùng của đống lửa trại lung lay trong bóng tối.",
			"Giờ đây, đã đến lúc cuộc truy đuổi bị dừng lại tiếp tục.",
			"Họ vẫn đang tìm kiếm câu trả lời."
		],
		"thai": [
			"ราตรีลึกซึ้ง พายุหิมะสงบลงแล้ว",
			"เปลวไฟสุดท้ายของกองไฟริบหรี่ในความมืด",
			"บัดนี้ ได้เวลาที่การไล่ล่าที่หยุดชะงักจะเริ่มขึ้นอีกครั้ง",
			"พวกเขายังคงค้นหาคำตอบ"
		],
		"hindi": [
			"रात गहरी है और बर्फीला तूफान थम गया है।",
			"अलाव की आखिरी लौ अँधेरे में टिमटिमा रही थी।",
			"अब, रुकी हुई खोज फिर से शुरू होने का समय है।",
			"वे अब भी जवाब तलाश रहे थे।"
		]
	},
	"epilogue": {
		"korean": [
			"고요했던 동굴은 다시 찬 공기로 가득 찼다.",
			"Haraldr의 그림자는 여전히 그들 앞을 가로막고 있었다.",
			"각자의 마음속에 품은 답을 안고, 그들은 다시 눈밭을 밟았다.",
			"이 추격의 끝에, 무엇이 기다리고 있을까.",
			"아직은, 아무도 알 수 없었다."
		],
		"english": [
			"The silent cave was once again filled with cold air.",
			"Haraldr's shadow still loomed before them.",
			"Carrying the answers they held in their hearts, they stepped onto the snowfield once more.",
			"What awaits them at the end of this pursuit?",
			"As yet, no one knew."
		],
		"japanese": [
			"静寂だった洞窟は、再び冷たい空気で満たされた。",
			"ハラルドルの影は、依然として彼らの行く手を阻んでいた。",
			"それぞれの心に抱いた答えを胸に、彼らは再び雪原を踏みしめた。",
			"この追撃の果てに、何が待ち受けているのだろうか。",
			"まだ、誰も知る由もなかった。"
		],
		"chinese": [
			"寂静的洞穴再次充满了寒冷的空气。",
			"哈拉尔德的阴影仍然阻碍着他们。",
			"带着心中各自的答案，他们再次踏上了雪地。",
			"这场追击的尽头，又有什么在等待着呢？",
			"暂时，无人知晓。"
		],
		"french": [
			"La grotte silencieuse fut de nouveau remplie d'air froid.",
			"L'ombre de Haraldr se dressait toujours devant eux.",
			"Portant les réponses qu'ils avaient dans leur cœur, ils foulèrent à nouveau la neige.",
			"Qu'est-ce qui les attend au bout de cette poursuite ?",
			"Pour l'instant, personne ne le savait."
		],
		"spanish": [
			"La cueva silenciosa se llenó de nuevo con aire frío.",
			"La sombra de Haraldr aún se interponía en su camino.",
			"Llevando las respuestas que guardaban en sus corazones, pisaron la nieve una vez más.",
			"¿Qué les esperará al final de esta persecución?",
			"Todavía, nadie lo sabía."
		],
		"vietnamese": [
			"Hang động yên tĩnh lại tràn ngập không khí lạnh.",
			"Bóng của Haraldr vẫn chắn trước mặt họ.",
			"Mang theo câu trả lời trong lòng, họ lại bước trên tuyết.",
			"Điều gì đang chờ đợi họ ở cuối cuộc truy đuổi này?",
			"Hiện tại, không ai biết."
		],
		"thai": [
			"ถ้ำที่เงียบสงบกลับเต็มไปด้วยอากาศเย็นอีกครั้ง",
			"เงาของ Haraldr ยังคงขวางทางพวกเขาอยู่",
			"แบกรับคำตอบที่อยู่ในใจ พวกเขาเหยียบย่ำบนทุ่งหิมะอีกครั้ง",
			"ณ ปลายทางของการไล่ล่านี้ อะไรกำลังรอคอยอยู่",
			"ยังคงไม่มีใครรู้"
		],
		"hindi": [
			"शांत गुफा फिर से ठंडी हवा से भर गई थी।",
			"हरल्ड की परछाई अब भी उनके रास्ते में थी।",
			"अपने दिलों में उत्तर लिए, उन्होंने फिर से बर्फ पर कदम रखे।",
			"इस पीछा के अंत में क्या इंतजार कर रहा होगा?",
			"अभी तक, कोई नहीं जानता था।"
		]
	}
} as const;
