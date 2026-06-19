export const scenario_modern_otto_2_03 = {
	"scenario_id": "modern_otto_2_03",
	"order": 3,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"echo": {
			"id": "mon_57f2edb8-aa81-4ce7-beed-ab009cd2ff35",
			"name": {
				"korean": "에코",
				"english": "Echo",
				"japanese": "エコー",
				"chinese": "艾可",
				"french": "Écho",
				"spanish": "Eco",
				"vietnamese": "Echo",
				"thai": "เอคโค่",
				"hindi": "इको"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/da48e2c2-6733-4f65-f8b6-f197af4ff700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/e90605b9-372f-4bf1-cdec-56a2fdef0800/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"끝없는 캡차. 미로에 갇힌 기분이었다.",
			"매번 새로운 그림, 새로운 질문이 탐험대를 가로막았다.",
			"Otto는 친절했지만, 어딘가 이상했다.",
			"시간은 흐르고, 답은 보이지 않았다."
		],
		"english": [
			"Endless CAPTCHA. It felt like being trapped in a maze.",
			"Each time, a new image, a new question blocked the expedition.",
			"Otto was kind, but something was off.",
			"Time passed, and no answer appeared."
		],
		"japanese": [
			"終わりのないキャプチャ。まるで迷路に閉じ込められた気分だった。",
			"毎回、新たな絵と新たな問いが探検隊の行く手を阻んだ。",
			"オットーは親切だったが、どこかおかしかった。",
			"時間は流れ、答えは見えなかった。"
		],
		"chinese": [
			"永无止境的验证码。感觉像是被困在了迷宫中。",
			"每一次，新的图片、新的问题都阻碍着探险队。",
			"奥托很友好，但总觉得哪里不对劲。",
			"时间流逝，答案却不见踪影。"
		],
		"french": [
			"CAPTCHA sans fin. On se sentait piégé dans un labyrinthe.",
			"À chaque fois, une nouvelle image, une nouvelle question barrait le chemin de l'expédition.",
			"Otto était gentil, mais quelque chose clochait.",
			"Le temps passait, et aucune réponse n'apparaissait."
		],
		"spanish": [
			"CAPTCHA sin fin. Se sentía como estar atrapado en un laberinto.",
			"Cada vez, una nueva imagen, una nueva pregunta bloqueaba la expedición.",
			"Otto era amable, pero algo andaba mal.",
			"El tiempo pasaba y no se veía ninguna respuesta."
		],
		"vietnamese": [
			"CAPTCHA vô tận. Cảm giác như bị mắc kẹt trong một mê cung.",
			"Mỗi lần, một hình ảnh mới, một câu hỏi mới lại chặn đứng đoàn thám hiểm.",
			"Otto tốt bụng, nhưng có gì đó không ổn.",
			"Thời gian trôi qua, nhưng không thấy câu trả lời nào."
		],
		"thai": [
			"CAPTCHA ที่ไม่มีที่สิ้นสุด รู้สึกเหมือนถูกขังอยู่ในเขาวงกต",
			"ทุกครั้ง ภาพใหม่ คำถามใหม่ สกัดกั้นการเดินทางของคณะสำรวจ",
			"อ็อตโต้ใจดี แต่มีบางอย่างแปลกไป",
			"เวลาผ่านไป แต่ไม่มีคำตอบปรากฏขึ้น"
		],
		"hindi": [
			"अंतहीन कैप्चा। ऐसा लग रहा था जैसे भूलभुलैया में फँस गए हों।",
			"हर बार, एक नई तस्वीर, एक नया सवाल अभियान को रोक रहा था।",
			"ओट्टो दयालु था, लेकिन कुछ अजीब था।",
			"समय बीतता गया, और कोई जवाब नहीं दिखा।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "더 복잡한 캡차가 탐험대를 맞이한다. 오류는 아니었다.",
						"english": "A more complex CAPTCHA greeted the expedition. It wasn't an error.",
						"japanese": "より複雑なキャプチャが探検隊を迎えた。エラーではなかった。",
						"chinese": "一个更复杂的验证码迎接了探险队。这不是错误。",
						"french": "Un CAPTCHA plus complexe accueillit l'expédition. Ce n'était pas une erreur.",
						"spanish": "Un CAPTCHA más complejo recibió a la expedición. No fue un error.",
						"vietnamese": "Một CAPTCHA phức tạp hơn chào đón đoàn thám hiểm. Đó không phải là lỗi.",
						"thai": "CAPTCHA ที่ซับซ้อนยิ่งขึ้นทักทายคณะสำรวจ นี่ไม่ใช่ข้อผิดพลาด",
						"hindi": "एक अधिक जटिल कैप्चा ने अभियान का स्वागत किया। यह कोई त्रुटि नहीं थी।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "또? 아까랑 다른 그림인데...",
						"english": "Again? It's a different image from before...",
						"japanese": "また？さっきとは違う絵だけど...",
						"chinese": "又来了？和刚才的图不一样啊...",
						"french": "Encore ? C'est une image différente de la précédente...",
						"spanish": "¿Otra vez? Es una imagen diferente a la anterior...",
						"vietnamese": "Lại nữa à? Hình ảnh khác với lúc nãy...",
						"thai": "อีกแล้วเหรอ? ภาพไม่เหมือนกับเมื่อกี้เลย...",
						"hindi": "फिर से? यह पहले वाली तस्वीर से अलग है..."
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "echo",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "괜찮아요! Otto님이 말씀하신 대로 계속 시도하면 될 거예요!",
						"english": "It's okay! Just as Otto said, we just need to keep trying!",
						"japanese": "大丈夫！オットーさんが言ったように、挑戦し続ければきっとできるはず！",
						"chinese": "没关系！就像奥托先生说的，我们只要继续尝试就好了！",
						"french": "Ça va aller ! Comme Otto l'a dit, il suffit de continuer d'essayer !",
						"spanish": "¡Está bien! Como dijo Otto, ¡solo tenemos que seguir intentándolo!",
						"vietnamese": "Không sao đâu! Cứ như Otto đã nói, chúng ta cứ tiếp tục thử là được!",
						"thai": "ไม่เป็นไร! อย่างที่อ็อตโต้บอก เราแค่ต้องพยายามต่อไป!",
						"hindi": "ठीक है! जैसा कि ओट्टो ने कहा, हमें बस कोशिश करते रहना होगा!"
					},
					"emotion": "happy"
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "Otto님은 '보안 강화를 위한 조치'라고 하셨지...",
						"english": "Otto said it was a 'measure to enhance security'...",
						"japanese": "オットーさんは「セキュリティ強化のための措置」だって言ってたっけ...",
						"chinese": "奥托先生说过那是“为了加强安全性的措施”...",
						"french": "Otto a dit que c'était une « mesure pour renforcer la sécurité »...",
						"spanish": "Otto dijo que era una \"medida para mejorar la seguridad\"...",
						"vietnamese": "Otto nói đó là \"biện pháp để tăng cường bảo mật\"...",
						"thai": "อ็อตโต้บอกว่ามันเป็น 'มาตรการเสริมสร้างความปลอดภัย'...",
						"hindi": "ओट्टो ने कहा था कि यह 'सुरक्षा बढ़ाने के लिए एक उपाय' है..."
					}
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "맞아요! 우리 힘내요!",
						"english": "That's right! Let's do our best!",
						"japanese": "そうだね！がんばろう！",
						"chinese": "没错！我们加油！",
						"french": "C'est vrai ! Allons-y !",
						"spanish": "¡Así es! ¡Vamos a esforzarnos!",
						"vietnamese": "Đúng vậy! Cố lên nào!",
						"thai": "ใช่แล้ว! เรามาพยายามกันเถอะ!",
						"hindi": "सही है! हम अपनी पूरी कोशिश करें!"
					},
					"emotion": "happy"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "echo",
					"type": "direction"
				},
				{
					"content": {
						"korean": "이번엔 좀 더 복잡하네요! 그래도 우리 할 수 있어요!",
						"english": "It's a bit more complex this time! But we can still do it!",
						"japanese": "今度はもっと複雑だね！でも、私たちならできるはず！",
						"chinese": "这次有点更复杂了！但我们仍然能做到！",
						"french": "C'est un peu plus complexe cette fois ! Mais on peut toujours y arriver !",
						"spanish": "¡Esta vez es un poco más complejo! ¡Pero aún podemos hacerlo!",
						"vietnamese": "Lần này có vẻ phức tạp hơn một chút! Nhưng chúng ta vẫn có thể làm được!",
						"thai": "ครั้งนี้ซับซ้อนกว่าเดิมหน่อย! แต่เราทำได้แน่นอน!",
						"hindi": "इस बार यह थोड़ा और जटिल है! लेकिन हम फिर भी कर सकते हैं!"
					},
					"emotion": "happy",
					"type": "speech",
					"speaker": "echo"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "너무 반복되잖아... 뭔가 이상해.",
						"english": "It's too repetitive... Something's off.",
						"japanese": "繰り返しが多すぎる…何だかおかしい。",
						"chinese": "太重复了……有点不对劲。",
						"french": "C'est trop répétitif... Il y a quelque chose d'étrange.",
						"spanish": "Es demasiado repetitivo... Algo anda mal.",
						"vietnamese": "Quá lặp lại rồi... Có gì đó không ổn.",
						"thai": "มันซ้ำซากเกินไป... มีบางอย่างผิดปกติ",
						"hindi": "यह बहुत दोहराया जा रहा है... कुछ तो अजीब है।"
					}
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "음... 그러게요. 뭔가 좀 느려지는 것 같기도 하고... 기분 탓이겠죠?",
						"english": "Hmm... I guess so. It feels like things are slowing down a bit... Must be my imagination, right?",
						"japanese": "うーん…そうですね。なんだか少し遅くなっているような…気のせいですかね？",
						"chinese": "嗯……是啊。感觉好像有点慢下来了……错觉吧？",
						"french": "Hmm... Oui, c'est vrai. On dirait que ça ralentit un peu... Une impression, peut-être ?",
						"spanish": "Hmm... Supongo que sí. Parece que se está ralentizando un poco... ¿Será mi imaginación?",
						"vietnamese": "Ừm... Đúng vậy. Có vẻ mọi thứ đang chậm lại một chút... Chắc là do mình tưởng tượng thôi, phải không?",
						"thai": "อืม... นั่นสิครับ รู้สึกเหมือนทุกอย่างช้าลงนิดหน่อย... คงคิดไปเองมั้ง?",
						"hindi": "हम्म... हाँ, शायद। लगता है कुछ धीमा हो रहा है... मेरा वहम होगा, है ना?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "Dax 말이 맞을지도 몰라. 너무 친절한데?",
						"english": "Dax might be right. They're too kind?",
						"japanese": "ダックスの言う通りかも。親切すぎるよ？",
						"chinese": "Dax可能说得对。他们太友好了吧？",
						"french": "Dax a peut-être raison. Ils sont trop gentils ?",
						"spanish": "Puede que Dax tenga razón. ¿Son demasiado amables?",
						"vietnamese": "Dax nói đúng đó. Họ tử tế quá mức thì phải?",
						"thai": "แด็กซ์อาจจะพูดถูกนะ พวกเขาใจดีเกินไปไหม?",
						"hindi": "डैक्स शायद सही कह रहा है। वे बहुत ज़्यादा दयालु हैं?"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						2,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "echo"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "조금만 더 버텨봐요! 거의 다 왔을 거예요!",
						"english": "Just hang on a little longer! We must be almost there!",
						"japanese": "もう少しだけ頑張って！もうすぐ着くはずだよ！",
						"chinese": "再坚持一下！我们应该快到了！",
						"french": "Accrochez-vous encore un peu ! On doit y être presque !",
						"spanish": "¡Aguanta un poco más! ¡Ya casi llegamos!",
						"vietnamese": "Cố gắng thêm chút nữa! Chúng ta sắp đến rồi!",
						"thai": "อดทนอีกหน่อยนะ! เราน่าจะใกล้ถึงแล้ว!",
						"hindi": "बस थोड़ा और टिके रहो! हम लगभग पहुँच ही गए होंगे!"
					},
					"emotion": "happy"
				},
				{
					"content": {
						"korean": "버티는 게 아니라, 농락당하는 것 같아...",
						"english": "It doesn't feel like we're enduring, more like we're being toyed with...",
						"japanese": "耐えているんじゃなくて、弄ばれてるみたいだ…",
						"chinese": "这不是坚持，感觉更像是被戏弄了……",
						"french": "On n'endure pas, on dirait plutôt qu'on se fait manipuler...",
						"spanish": "No estamos aguantando, parece que nos están manipulando...",
						"vietnamese": "Không phải là cố gắng, mà giống như đang bị đùa giỡn hơn...",
						"thai": "นี่ไม่ใช่การทน แต่มันเหมือนกำลังถูกหลอกเล่น...",
						"hindi": "यह झेलना नहीं है, ऐसा लगता है कि हमें मूर्ख बनाया जा रहा है..."
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "echo",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "아니에요! Otto님은 우리를 돕고 있잖아요?",
						"english": "No! Otto is helping us, isn't he?",
						"japanese": "違います！オットー様は私たちを助けてくれているじゃないですか？",
						"chinese": "不！奥托大人不是在帮我们吗？",
						"french": "Non ! Otto est en train de nous aider, n'est-ce pas ?",
						"spanish": "¡No! ¡Otto nos está ayudando, ¿verdad?!",
						"vietnamese": "Không phải! Otto đang giúp chúng ta mà?",
						"thai": "ไม่ใช่หรอก! ท่านออตโต้กำลังช่วยเราอยู่ไม่ใช่เหรอ?",
						"hindi": "नहीं! ओटो हमारी मदद कर रहे हैं, है ना?"
					}
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 벽 너머에서 어른거린다.",
						"english": "A colossal shadow flickers beyond the wall.",
						"japanese": "巨大な影が壁の向こうで揺らめいている。",
						"chinese": "巨大的黑影在墙壁的另一边晃动。",
						"french": "Une ombre colossale vacille au-delà du mur.",
						"spanish": "Una sombra colosal se agita más allá del muro.",
						"vietnamese": "Một cái bóng khổng lồ lấp ló sau bức tường.",
						"thai": "เงาขนาดมหึมาสั่นไหวอยู่หลังกำแพง",
						"hindi": "दीवार के उस पार एक विशाल परछाईं मंडरा रही है।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "캡차 미로는 끝없이 이어졌다. 길은 점점 더 희미해졌다.",
						"english": "The Captcha Maze stretched endlessly. The path grew fainter and fainter.",
						"japanese": "キャプチャ迷路は果てしなく続いた。道はますます曖昧になった。",
						"chinese": "验证码迷宫无休止地延伸。道路变得越来越模糊。",
						"french": "Le labyrinthe Captcha s'étendait à l'infini. Le chemin devenait de plus en plus indistinct.",
						"spanish": "El Laberinto Captcha se extendía interminablemente. El camino se volvió cada vez más tenue.",
						"vietnamese": "Mê cung Captcha kéo dài vô tận. Con đường ngày càng mờ nhạt.",
						"thai": "เขาวงกตแคปต์ชาทอดยาวไม่มีที่สิ้นสุด เส้นทางเลือนลางลงเรื่อยๆ",
						"hindi": "कैप्चा भूलभुलैया अंतहीन रूप से फैली हुई थी। रास्ता धीरे-धीरे धुंधला होता गया।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "echo"
				},
				{
					"speaker": "echo",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "...점점 더 답이 없어지는 기분이에요.",
						"english": "...It feels like we're losing all hope.",
						"japanese": "…ますます絶望的になっていく気分です。",
						"chinese": "……感觉越来越没有头绪了。",
						"french": "...J'ai l'impression qu'on n'a plus aucune issue.",
						"spanish": "...Siento que nos estamos quedando sin respuestas.",
						"vietnamese": "...Cảm giác như càng ngày càng không có lối thoát vậy.",
						"thai": "...รู้สึกเหมือนกำลังจะหมดหนทางเข้าไปทุกที",
						"hindi": "…लगता है जैसे हम रास्ता भटक रहे हैं।"
					}
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "길을 잃었나? 이곳은 너희가 올 곳이 아니다.",
						"english": "Lost your way? This is not a place for you.",
						"japanese": "道に迷ったのか？ここは君たちが来る場所じゃない。",
						"chinese": "迷路了吗？这里不是你们该来的地方。",
						"french": "Vous êtes perdus ? Cet endroit n'est pas pour vous.",
						"spanish": "¿Perdieron el camino? Este no es su lugar.",
						"vietnamese": "Lạc đường rồi sao? Đây không phải nơi dành cho các ngươi.",
						"thai": "หลงทางรึ? ที่นี่ไม่ใช่ที่ของพวกเจ้า",
						"hindi": "रास्ता भटक गए हो क्या? यह तुम्हारे आने की जगह नहीं है।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "정체가 뭐야!",
						"english": "Who are you?!",
						"japanese": "何者だ！",
						"chinese": "你到底是谁！",
						"french": "Qui êtes-vous ?!",
						"spanish": "¡¿Quién eres?!",
						"vietnamese": "Ngươi là ai?!",
						"thai": "เจ้าเป็นใครกัน!",
						"hindi": "तुम कौन हो?!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "Otto님! 이자가 누군가요?",
						"english": "Otto! Who is this?",
						"japanese": "オットー様！この者は一体誰ですか？",
						"chinese": "奥托大人！这个人是谁？",
						"french": "Otto ! Qui est cette personne ?",
						"spanish": "¡Otto! ¿Quién es este?",
						"vietnamese": "Otto! Người này là ai vậy?",
						"thai": "ท่านอ็อตโต! นี่ใครกัน?",
						"hindi": "ओटो! यह कौन है?"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "미로의 끝, 거대한 존재가 모습을 드러냈다.",
						"english": "At the maze's end, a colossal entity emerged.",
						"japanese": "迷宮の果て、巨大な存在が姿を現した。",
						"chinese": "迷宫尽头，一个巨大的存在现身了。",
						"french": "Au bout du labyrinthe, une entité colossale est apparue.",
						"spanish": "Al final del laberinto, una entidad colosal emergió.",
						"vietnamese": "Cuối mê cung, một thực thể khổng lồ hiện hình.",
						"thai": "ที่ปลายเขาวงกต สิ่งมีชีวิตขนาดมหึมาได้ปรากฏตัวขึ้น",
						"hindi": "भूलभुलैया के अंत में, एक विशालकाय इकाई प्रकट हुई।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "내 영역에 발을 들인 자들. 돌아갈 길은 없다.",
						"english": "Those who trespass my domain. There's no turning back.",
						"japanese": "我が領域に足を踏み入れた者たちよ。戻る道はない。",
						"chinese": "踏入吾之领域者。已无回头之路。",
						"french": "Ceux qui pénètrent mon domaine. Plus de retour possible.",
						"spanish": "Quienes profanan mi dominio. No hay vuelta atrás.",
						"vietnamese": "Kẻ nào bước vào lãnh địa của ta. Không có đường trở về đâu.",
						"thai": "ผู้ใดรุกล้ำอาณาเขตของข้า ไม่มีทางหวนคืน",
						"hindi": "जो मेरे क्षेत्र में कदम रखते हैं। वापसी का कोई रास्ता नहीं।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "결국 네 짓이었어!",
						"english": "It was you all along!",
						"japanese": "結局、お前の仕業だったのか！",
						"chinese": "原来是你搞的鬼！",
						"french": "C'était ton œuvre, après tout !",
						"spanish": "¡Así que fuiste tú todo este tiempo!",
						"vietnamese": "Cuối cùng cũng là ngươi gây ra!",
						"thai": "ในที่สุดก็เป็นฝีมือของแก!",
						"hindi": "आखिरकार यह तुम्हारा ही काम था!"
					},
					"emotion": "angry"
				},
				{
					"spot": [
						4,
						2
					],
					"type": "direction",
					"action": "enter",
					"speaker": "echo",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "Otto님은 대체... 왜!",
						"english": "Otto... why?!",
						"japanese": "オットー様、一体なぜ…！",
						"chinese": "奥托大人…为什么！",
						"french": "Otto... pourquoi donc ?!",
						"spanish": "¡Otto, por qué...!",
						"vietnamese": "Otto... tại sao chứ?!",
						"thai": "ท่านอ็อตโต... ทำไมกัน!",
						"hindi": "ओटो, तुम क्यों...!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "Otto? 그 이름은 여기서 아무 힘이 없다.",
						"english": "Otto? That name holds no power here.",
						"japanese": "オットー？その名にここでは何の力もない。",
						"chinese": "奥托？那个名字在这里毫无力量。",
						"french": "Otto ? Ce nom n'a aucun pouvoir ici.",
						"spanish": "¿Otto? Ese nombre no tiene ningún poder aquí.",
						"vietnamese": "Otto? Cái tên đó không có chút quyền năng nào ở đây cả.",
						"thai": "อ็อตโต? ชื่อนั้นไม่มีอำนาจใดที่นี่",
						"hindi": "ओटो? उस नाम की यहाँ कोई शक्ति नहीं।"
					},
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "아니... 아직 끝이 아니다. 이 미로는 계속될 것이다...",
						"english": "No... it's not over yet. This labyrinth will continue...",
						"japanese": "いや…まだ終わりではない。この迷宮は続くであろう…",
						"chinese": "不…还没结束。这个迷宫将会继续下去…",
						"french": "Non... ce n'est pas encore la fin. Ce labyrinthe continuera...",
						"spanish": "No... aún no ha terminado. Este laberinto continuará...",
						"vietnamese": "Không... vẫn chưa kết thúc. Mê cung này sẽ tiếp tục...",
						"thai": "ไม่... มันยังไม่จบ เขาวงกตนี้จะดำเนินต่อไป...",
						"hindi": "नहीं... अभी खत्म नहीं हुआ है। यह भूलभुलैया जारी रहेगी..."
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "무슨 소리야?",
						"english": "What do you mean?",
						"japanese": "どういうことだ？",
						"chinese": "你在说什么？",
						"french": "Que voulez-vous dire ?",
						"spanish": "¿Qué quieres decir?",
						"vietnamese": "Ý ngươi là sao?",
						"thai": "หมายความว่าอะไร?",
						"hindi": "तुम्हारा क्या मतलब है?"
					}
				},
				{
					"speaker": "echo",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "그래도... 한 걸음 나아갔어요!",
						"english": "Still... we took a step forward!",
						"japanese": "それでも…一歩前進しました！",
						"chinese": "即便如此…我们还是迈出了一步！",
						"french": "Malgré tout... nous avons fait un pas en avant !",
						"spanish": "Aun así... ¡dimos un paso adelante!",
						"vietnamese": "Dù sao đi nữa... chúng ta đã tiến thêm một bước rồi!",
						"thai": "ถึงอย่างนั้น... เราก็ก้าวไปข้างหน้าหนึ่งก้าว!",
						"hindi": "फिर भी... हमने एक कदम आगे बढ़ाया!"
					}
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "캡차 미로의 한 구간이 붕괴했다. 그러나 다음 미로의 입구가 모습을 드러낼 뿐이었다.",
						"english": "A section of the Captcha Labyrinth collapsed. Yet, the entrance to the next maze emerged.",
						"japanese": "キャプチャ迷宮の一区画が崩壊した。しかし、次の迷宮の入り口が現れただけだった。",
						"chinese": "验证码迷宫的一段崩塌了。然而，下一个迷宫的入口显现了出来。",
						"french": "Une section du Labyrinthe Captcha s'est effondrée. Pourtant, l'entrée du labyrinthe suivant est apparue.",
						"spanish": "Una sección del Laberinto Captcha colapsó. Sin embargo, la entrada al siguiente laberinto apareció.",
						"vietnamese": "Một phần của Mê cung Captcha đã sụp đổ. Tuy nhiên, chỉ lối vào mê cung tiếp theo hiện ra.",
						"thai": "ส่วนหนึ่งของเขาวงกตแคปชาพังทลายลง ทว่าทางเข้าเขาวงกตถัดไปได้ปรากฏขึ้นเท่านั้น",
						"hindi": "कैप्चा भूलभुलैया का एक खंड ढह गया। हालांकि, अगले भूलभुलैया का प्रवेश द्वार ही सामने आया。"
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "캡차의 그림자가 모든 것을 집어삼켰다.",
						"english": "The shadow of Captcha devoured everything.",
						"japanese": "キャプチャの影がすべてを飲み込んだ。",
						"chinese": "验证码的阴影吞噬了一切。",
						"french": "L'ombre de Captcha a tout dévoré.",
						"spanish": "La sombra de Captcha lo devoró todo.",
						"vietnamese": "Bóng tối của Captcha đã nuốt chửng mọi thứ.",
						"thai": "เงาของแคปชาได้กลืนกินทุกสิ่ง",
						"hindi": "कैप्चा की छाया ने सब कुछ निगल लिया।"
					}
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 시도였다. 너희는 영원히 이곳에 갇힐 것이다.",
						"english": "A foolish attempt. You will be trapped here forever.",
						"japanese": "愚かな試みだった。お前たちは永遠にここに閉じ込められるだろう。",
						"chinese": "真是愚蠢的尝试。你们将永远被困在这里。",
						"french": "Une tentative insensée. Vous serez piégés ici pour toujours.",
						"spanish": "Fue un intento inútil. Estarán atrapados aquí para siempre.",
						"vietnamese": "Một nỗ lực ngu xuẩn. Các ngươi sẽ bị giam cầm ở đây mãi mãi.",
						"thai": "เป็นการลองที่โง่เขลา พวกเจ้าจะถูกขังอยู่ที่นี่ตลอดไป",
						"hindi": "यह एक मूर्खतापूर्ण प्रयास था। तुम हमेशा के लिए यहाँ फँस जाओगे।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "아니야! 포기할 수 없어!",
						"english": "No! I can't give up!",
						"japanese": "いやだ！諦められない！",
						"chinese": "不！我不能放弃！",
						"french": "Non ! Je ne peux pas abandonner !",
						"spanish": "¡No! ¡No puedo rendirme!",
						"vietnamese": "Không! Tôi không thể từ bỏ!",
						"thai": "ไม่! ฉันยอมแพ้ไม่ได้!",
						"hindi": "नहीं! मैं हार नहीं मान सकता!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "echo"
				}
			]
		}
	]
} as const;
