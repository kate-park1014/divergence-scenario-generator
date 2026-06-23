export const scenario_hell_lacrimosa_18_03 = {
	"scenario_id": "hell_lacrimosa_18_03",
	"order": 3,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"vex": {
			"id": "mon_aa76550e-0b43-4273-a2f8-2463bdc9b848",
			"name": {
				"korean": "벡스",
				"english": "Vex",
				"japanese": "ベックス",
				"chinese": "维克斯",
				"french": "Vex",
				"spanish": "Vex",
				"vietnamese": "Vex",
				"thai": "เว็กซ์",
				"hindi": "वेक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/6c55d5a5-0393-451b-d41f-fce1a4ee1700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2ea1ea45-9ca6-43b6-2c73-ed5ae7cdaf00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"기억은 가장 잔인한 무기.",
			"잊힌 진실, 심연 깊숙이 잠들다.",
			"왜곡된 파수꾼, 벡스가 기다린다.",
			"거울 속 너의 눈은… 비탄에 잠겨."
		],
		"english": [
			"Memory, the cruelest weapon.",
			"Forgotten truths slumber deep in the abyss.",
			"Vex, the twisted warden, awaits.",
			"Your eyes in the mirror… drowned in sorrow."
		],
		"japanese": [
			"記憶、最も残酷な武器。",
			"忘れられた真実、深淵に深く眠る。",
			"歪んだ看守、ヴェックスが待つ。",
			"鏡の中の君の目は…悲嘆に暮れている。"
		],
		"chinese": [
			"记忆，最残酷的武器。",
			"被遗忘的真相，沉睡在深渊中。",
			"扭曲的看守者，维克斯在等待。",
			"镜中你的双眼…沉浸在悲伤中。"
		],
		"french": [
			"La mémoire, l'arme la plus cruelle.",
			"Les vérités oubliées dorment au fond des abysses.",
			"Vex, le gardien tordu, attend.",
			"Tes yeux dans le miroir… noyés dans le chagrin."
		],
		"spanish": [
			"La memoria, el arma más cruel.",
			"Las verdades olvidadas duermen en lo profundo del abismo.",
			"Vex, el alcaide retorcido, espera.",
			"Tus ojos en el espejo… ahogados en la pena."
		],
		"vietnamese": [
			"Ký ức, vũ khí tàn nhẫn nhất.",
			"Sự thật bị lãng quên ngủ sâu trong vực thẳm.",
			"Vex, tên cai ngục méo mó, đang chờ đợi.",
			"Đôi mắt ngươi trong gương… chìm trong đau khổ."
		],
		"thai": [
			"ความทรงจำ อาวุธที่โหดร้ายที่สุด",
			"ความจริงที่ถูกลืมหลับใหลอยู่ในห้วงลึก",
			"เวกซ์ ผู้คุมที่บิดเบี้ยว กำลังรออยู่",
			"ดวงตาของเจ้าในกระจก… จมดิ่งในความโศกเศร้า"
		],
		"hindi": [
			"स्मृति, सबसे क्रूर हथियार।",
			"भूले हुए सत्य गहरे पाताल में सोते हैं।",
			"वेक्स, विकृत वार्डन, प्रतीक्षा कर रहा है।",
			"दर्पण में तुम्हारी आँखें… दुख में डूबी हुई।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "공간이 일그러졌다. 시간의 파편들이 떠다녔다.",
						"english": "Space warped. Fragments of time floated.",
						"japanese": "空間が歪んだ。時間の破片が漂っていた。",
						"chinese": "空间扭曲了。时间的碎片漂浮着。",
						"french": "L'espace se déforma. Des fragments de temps flottaient.",
						"spanish": "El espacio se distorsionó. Fragmentos de tiempo flotaban.",
						"vietnamese": "Không gian méo mó. Mảnh vỡ thời gian trôi nổi.",
						"thai": "พื้นที่บิดเบี้ยว เศษเสี้ยวแห่งเวลากำลังลอยอยู่",
						"hindi": "अंतरिक्ष विकृत हो गया। समय के टुकड़े तैर रहे थे।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "여기가… 망각의 심연?",
						"english": "Is this… the abyss of oblivion?",
						"japanese": "ここが…忘却の深淵か？",
						"chinese": "这里是…遗忘的深渊吗？",
						"french": "Est-ce… l'abîme de l'oubli ?",
						"spanish": "¿Es esto… el abismo del olvido?",
						"vietnamese": "Đây là… vực thẳm lãng quên?",
						"thai": "นี่คือ… ห้วงลึกแห่งการลืมเลือน?",
						"hindi": "क्या यह… विस्मृति का पाताल है?"
					}
				},
				{
					"speaker": "vex",
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "vex",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "반가워. 망각 속에 갇힌 불쌍한 영혼아.",
						"english": "Welcome. Poor soul trapped in oblivion.",
						"japanese": "ようこそ。忘却に囚われた哀れな魂よ。",
						"chinese": "欢迎。被遗忘所困的可怜灵魂。",
						"french": "Bienvenue. Pauvre âme piégée dans l'oubli.",
						"spanish": "Bienvenido. Pobre alma atrapada en el olvido.",
						"vietnamese": "Chào mừng. Linh hồn đáng thương bị mắc kẹt trong lãng quên.",
						"thai": "ยินดีต้อนรับ เจ้าวิญญาณผู้น่าสงสารที่ติดอยู่ในห้วงลืมเลือน",
						"hindi": "स्वागत है। विस्मृति में फंसी हुई बेचारी आत्मा।"
					}
				},
				{
					"content": {
						"korean": "누구냐, 넌.",
						"english": "Who are you?",
						"japanese": "誰だ、お前は。",
						"chinese": "你是谁？",
						"french": "Qui es-tu ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Ngươi là ai?",
						"thai": "เจ้าเป็นใครกัน?",
						"hindi": "तुम कौन हो?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "vex",
					"emotion": "base",
					"content": {
						"korean": "난 '벡스'. 네 기억의 왜곡자. 혹은… 거울.",
						"english": "I am 'Vex'. The distorter of your memories. Or… a mirror.",
						"japanese": "私は「ヴェックス」。君の記憶を歪める者。あるいは…鏡。",
						"chinese": "我是“维克斯”。你记忆的扭曲者。或者说…一面镜子。",
						"french": "Je suis 'Vex'. Le déformeur de tes souvenirs. Ou… un miroir.",
						"spanish": "Soy 'Vex'. El distorsionador de tus recuerdos. O… un espejo.",
						"vietnamese": "Ta là 'Vex'. Kẻ bóp méo ký ức của ngươi. Hoặc… một tấm gương.",
						"thai": "ฉันคือ 'เวกซ์' ผู้บิดเบือนความทรงจำของเจ้า หรือ… กระจกเงา",
						"hindi": "मैं 'वेक्स' हूँ। तुम्हारी यादों को विकृत करने वाला। या… एक दर्पण।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "네가 잊은 걸 돌려주러 왔지. 고통스럽겠지만.",
						"english": "I've come to return what you've forgotten. Though it will be painful.",
						"japanese": "君が忘れたものを取り戻しに来た。苦痛を伴うだろうが。",
						"chinese": "我来是为了归还你所遗忘的。尽管会很痛苦。",
						"french": "Je suis venu te rendre ce que tu as oublié. Bien que ce soit douloureux.",
						"spanish": "He venido a devolverte lo que has olvidado. Aunque será doloroso.",
						"vietnamese": "Ta đến để trả lại những gì ngươi đã quên. Dù sẽ rất đau đớn.",
						"thai": "ฉันมาเพื่อคืนสิ่งที่เจ้าลืมไป แม้ว่าจะเจ็บปวดก็ตาม",
						"hindi": "मैं तुम्हें वह सब लौटाने आया हूँ जो तुम भूल गए हो। हालांकि यह दर्दनाक होगा।"
					},
					"type": "speech",
					"speaker": "vex",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "vex",
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "vex",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "거울을 봐. 네 눈은 뭘 말하고 있지?",
						"english": "Look in the mirror. What do your eyes say?",
						"japanese": "鏡を見て。あなたの目は何を語っている？",
						"chinese": "照照镜子。你的眼睛在说什么？",
						"french": "Regarde dans le miroir. Que disent tes yeux ?",
						"spanish": "Mírate en el espejo. ¿Qué dicen tus ojos?",
						"vietnamese": "Nhìn vào gương đi. Đôi mắt của ngươi đang nói gì?",
						"thai": "มองกระจกสิ ดวงตาของเจ้ากำลังบอกอะไร?",
						"hindi": "आईने में देखो। तुम्हारी आँखें क्या कह रही हैं?"
					}
				},
				{
					"content": {
						"korean": "(거울을 응시한다)",
						"english": "(Stares into the mirror)",
						"japanese": "(鏡を見つめる)",
						"chinese": "(凝视镜子)",
						"french": "(Fixe le miroir)",
						"spanish": "(Se mira fijamente en el espejo)",
						"vietnamese": "(Nhìn chằm chằm vào gương)",
						"thai": "(จ้องมองกระจก)",
						"hindi": "(आईने में घूरता है)"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "거울 속 자신의 눈은 텅 비었으나, 깊은 비탄이 서려 있었다.",
						"english": "The eyes in the mirror were empty, yet filled with deep sorrow.",
						"japanese": "鏡の中の自分の目は虚ろだったが、深い悲嘆が宿っていた。",
						"chinese": "镜子里的眼睛空洞无物，却蕴含着深深的悲伤。",
						"french": "Les yeux dans le miroir étaient vides, mais remplis d'une profonde affliction.",
						"spanish": "Los ojos en el espejo estaban vacíos, pero albergaban una profunda aflicción.",
						"vietnamese": "Đôi mắt trong gương trống rỗng, nhưng lại ẩn chứa nỗi bi thương sâu sắc.",
						"thai": "ดวงตาในกระจกว่างเปล่า แต่กลับเต็มไปด้วยความเศร้าโศกอย่างสุดซึ้ง",
						"hindi": "आईने में आँखें सूनी थीं, फिर भी उनमें गहरा दुख भरा था।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이 슬픔은… 뭐야. 왜 익숙하지?",
						"english": "This sorrow... what is it? Why does it feel so familiar?",
						"japanese": "この悲しみは…何だ。なぜ見覚えがある？",
						"chinese": "这悲伤……是什么？为什么这么熟悉？",
						"french": "Cette tristesse... qu'est-ce que c'est ? Pourquoi me semble-t-elle si familière ?",
						"spanish": "¿Esta tristeza... qué es? ¿Por qué me resulta tan familiar?",
						"vietnamese": "Nỗi buồn này... là gì vậy? Sao lại quen thuộc đến thế?",
						"thai": "ความเศร้าโศกนี้... คืออะไร? ทำไมมันถึงคุ้นเคยนัก?",
						"hindi": "यह दुख... क्या है? यह इतना जाना-पहचाना क्यों लग रहा है?"
					}
				},
				{
					"content": {
						"korean": "라크리모사… 너와 그녀는 같은 비극을 공유했어. 잊었을 뿐.",
						"english": "Lacrimosa... You and she shared the same tragedy. You just forgot.",
						"japanese": "ラクリモサ…君と彼女は同じ悲劇を共有していた。ただ忘れていただけだ。",
						"chinese": "拉克里莫萨…你和她曾共享同一份悲剧。只是你忘了。",
						"french": "Lacrimosa... Toi et elle avez partagé la même tragédie. Tu as juste oublié.",
						"spanish": "Lacrimosa... Tú y ella compartisteis la misma tragedia. Solo lo olvidaste.",
						"vietnamese": "Lacrimosa... Ngươi và cô ấy đã chia sẻ cùng một bi kịch. Ngươi chỉ là đã quên.",
						"thai": "ลาคริโมซา... เจ้ากับนางต่างก็แบ่งปันโศกนาฏกรรมเดียวกัน เจ้าแค่ลืมไปแล้วเท่านั้น",
						"hindi": "लाक्रिमोसा... तुमने और उसने एक ही त्रासदी साझा की थी। तुम बस भूल गए।"
					},
					"type": "speech",
					"speaker": "vex",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "라크리모사…? 무슨 소리야.",
						"english": "Lacrimosa...? What are you talking about?",
						"japanese": "ラクリモサ…？何を言っているんだ。",
						"chinese": "拉克里莫萨……？什么意思？",
						"french": "Lacrimosa... ? De quoi parles-tu ?",
						"spanish": "¿Lacrimosa...? ¿De qué estás hablando?",
						"vietnamese": "Lacrimosa...? Ngươi đang nói gì vậy?",
						"thai": "ลาคริโมซา...? เจ้ากำลังพูดอะไร?",
						"hindi": "लाक्रिमोसा...? तुम क्या कह रहे हो?"
					},
					"speaker": "character_any",
					"emotion": "base"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "vex",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"speaker": "vex",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "네 가장 소중했던 기억은 뭐지?",
						"english": "What was your most cherished memory?",
						"japanese": "君の最も大切だった記憶は何だ？",
						"chinese": "你最珍贵的记忆是什么？",
						"french": "Quel était ton souvenir le plus cher ?",
						"spanish": "¿Cuál fue tu recuerdo más preciado?",
						"vietnamese": "Ký ức quý giá nhất của ngươi là gì?",
						"thai": "ความทรงจำที่เจ้าหวงแหนที่สุดคืออะไร?",
						"hindi": "तुम्हारी सबसे प्यारी याद क्या थी?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "…왜 그걸 네가 알아야 해.",
						"english": "...Why do you need to know that?",
						"japanese": "…なぜそれを君が知る必要がある？",
						"chinese": "……你为什么要知道这个。",
						"french": "...Pourquoi devrais-tu le savoir ?",
						"spanish": "...¿Por qué tienes que saber eso?",
						"vietnamese": "...Tại sao ngươi lại cần biết điều đó?",
						"thai": "...ทำไมเจ้าถึงต้องรู้เรื่องนั้นด้วย?",
						"hindi": "...तुम्हें यह क्यों जानना है?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "그 기억이 뒤틀렸다면? 믿어온 모든 게 거짓이라면?",
						"english": "What if that memory was distorted? What if everything you believed was a lie?",
						"japanese": "その記憶が歪んでいたとしたら？信じてきた全てが嘘だとしたら？",
						"chinese": "如果那段记忆被扭曲了呢？如果所有你相信的一切都是谎言呢？",
						"french": "Et si ce souvenir était déformé ? Et si tout ce que tu as cru était un mensonge ?",
						"spanish": "¿Y si ese recuerdo estuviera distorsionado? ¿Y si todo lo que has creído fuera una mentira?",
						"vietnamese": "Nếu ký ức đó bị bóp méo thì sao? Nếu tất cả những gì ngươi tin tưởng đều là dối trá thì sao?",
						"thai": "ถ้าความทรงจำนั้นบิดเบือนไปล่ะ? ถ้าทุกสิ่งที่เจ้าเชื่อมาตลอดเป็นเรื่องโกหกเล่า?",
						"hindi": "अगर वह याद विकृत हो? अगर वह सब कुछ जिस पर तुम विश्वास करते आए हो, झूठ हो?"
					},
					"type": "speech",
					"speaker": "vex",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "거짓…이라고?",
						"english": "A lie...?",
						"japanese": "嘘…だと？",
						"chinese": "谎言……？",
						"french": "Un mensonge... ?",
						"spanish": "¿Una mentira...?",
						"vietnamese": "Dối trá...?",
						"thai": "โกหก...?",
						"hindi": "झूठ...?"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"speaker": "vex",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "선택해. 이 왜곡된 진실을 받아들일 건가, 아니면… 도망칠 건가.",
						"english": "Choose. Will you accept this twisted truth, or... run away?",
						"japanese": "選べ。この歪んだ真実を受け入れるか、それとも…逃げるか。",
						"chinese": "选择吧。是接受这扭曲的真相，还是……逃避？",
						"french": "Choisis. Accepteras-tu cette vérité déformée, ou… fuiras-tu ?",
						"spanish": "Elige. ¿Aceptarás esta verdad distorsionada, o… huirás?",
						"vietnamese": "Chọn đi. Ngươi sẽ chấp nhận sự thật méo mó này, hay… chạy trốn?",
						"thai": "เลือกเอา จะยอมรับความจริงที่บิดเบือนนี้ หรือ… จะหนีไป",
						"hindi": "चुना। क्या तुम इस विकृत सत्य को स्वीकार करोगे, या… भागोगे?"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						2,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "vex"
				},
				{
					"speaker": "vex",
					"emotion": "base",
					"content": {
						"korean": "도망칠 곳은 없어. 네 비극은 여기서 시작되었고, 여기서 끝날 테니.",
						"english": "There's nowhere to run. Your tragedy began here, and it will end here.",
						"japanese": "逃げ場はない。お前の悲劇はここで始まり、ここで終わるのだから。",
						"chinese": "无处可逃。你的悲剧始于此，也将终结于此。",
						"french": "Il n'y a nulle part où fuir. Ta tragédie a commencé ici, et elle s'achèvera ici.",
						"spanish": "No hay dónde huir. Tu tragedia comenzó aquí, y aquí terminará.",
						"vietnamese": "Không có nơi nào để trốn thoát. Bi kịch của ngươi đã bắt đầu ở đây, và cũng sẽ kết thúc ở đây.",
						"thai": "ไม่มีที่ให้หนี โศกนาฏกรรมของเจ้าเริ่มต้นที่นี่ และจะจบลงที่นี่",
						"hindi": "भागने की कोई जगह नहीं है। तुम्हारी त्रासदी यहीं से शुरू हुई और यहीं खत्म होगी।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "내가… 뭘 잊었지?",
						"english": "What… have I forgotten?",
						"japanese": "私は…何を忘れた？",
						"chinese": "我…忘了什么？",
						"french": "Qu'est-ce que… j'ai oublié ?",
						"spanish": "¿Qué… he olvidado?",
						"vietnamese": "Ta… đã quên điều gì?",
						"thai": "ฉัน… ลืมอะไรไป?",
						"hindi": "मैं… क्या भूल गया?"
					}
				},
				{
					"speaker": "vex",
					"emotion": "sad",
					"content": {
						"korean": "너는 한때… 누군가를 구원하려 했어. 하지만… 실패했지.",
						"english": "You once… tried to save someone. But… you failed.",
						"japanese": "お前はかつて…誰かを救おうとした。だが…失敗したな。",
						"chinese": "你曾…试图拯救某人。但是…失败了。",
						"french": "Tu as autrefois… essayé de sauver quelqu'un. Mais… tu as échoué.",
						"spanish": "Una vez… intentaste salvar a alguien. Pero… fallaste.",
						"vietnamese": "Ngươi đã từng… cố gắng cứu ai đó. Nhưng… ngươi đã thất bại.",
						"thai": "เจ้าเคย… พยายามช่วยใครบางคน แต่… เจ้าล้มเหลว",
						"hindi": "तुमने एक बार… किसी को बचाने की कोशिश की थी। लेकिन… तुम विफल रहे।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "(고통에 찬 표정)",
						"english": "(Pain-filled expression)",
						"japanese": "（苦痛に満ちた表情）",
						"chinese": "(痛苦的表情)",
						"french": "(Expression de douleur)",
						"spanish": "(Expresión de dolor)",
						"vietnamese": "(Biểu cảm đau đớn)",
						"thai": "(สีหน้าเจ็บปวด)",
						"hindi": "(दर्द से भरा चेहरा)"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "그 절망이 라크리모사를 만들었고, 너의 심연을 채웠다.",
						"english": "That despair created Lacrimosa, and filled your abyss.",
						"japanese": "その絶望がラクリモーサを生み出し、お前の深淵を満たした。",
						"chinese": "那绝望创造了拉克里莫萨，并填满了你的深渊。",
						"french": "Ce désespoir a créé Lacrimosa, et a rempli ton abysse.",
						"spanish": "Esa desesperación creó Lacrimosa y llenó tu abismo.",
						"vietnamese": "Sự tuyệt vọng đó đã tạo ra Lacrimosa, và lấp đầy vực thẳm của ngươi.",
						"thai": "ความสิ้นหวังนั้นสร้าง Lacrimosa และเติมเต็มห้วงลึกของเจ้า",
						"hindi": "उस निराशा ने लैक्रीमॉसा का निर्माण किया, और तुम्हारे रसातल को भर दिया।"
					},
					"speaker": "vex",
					"emotion": "base"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "흐읍… (거친 숨)",
						"english": "Hmph… (Rough breath)",
						"japanese": "はぁっ…（荒い息）",
						"chinese": "呼…（粗喘）",
						"french": "Hmph… (Respiration rauque)",
						"spanish": "Hmph… (Respiración agitada)",
						"vietnamese": "Hừm… (Thở dốc)",
						"thai": "เฮือก… (หายใจหอบ)",
						"hindi": "हम्म… (कठोर साँस)"
					}
				},
				{
					"content": {
						"korean": "…기억해라. 너의 비탄은… 사라지지 않아.",
						"english": "…Remember. Your sorrow… will not vanish.",
						"japanese": "…覚えておけ。お前の悲嘆は…消えはしない。",
						"chinese": "…记住。你的悲伤…不会消失。",
						"french": "…Souviens-toi. Ton chagrin… ne disparaîtra pas.",
						"spanish": "…Recuerda. Tu pesar… no desaparecerá.",
						"vietnamese": "…Hãy nhớ. Nỗi đau của ngươi… sẽ không biến mất.",
						"thai": "…จำไว้ ความโศกเศร้าของเจ้า… จะไม่หายไป",
						"hindi": "…याद रखना। तुम्हारा दुख… मिटेगा नहीं।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "정체 모를 그림자는 사라졌다. 그러나 심연의 고통은 잔상처럼 남았다.",
						"english": "The unknown shadow vanished. But the agony of the abyss remained, like an afterimage.",
						"japanese": "正体不明の影は消え去った。しかし、深淵の苦痛は残像のように残った。",
						"chinese": "不知名的影子消失了。但深渊的痛苦，如同残像般留了下来。",
						"french": "L'ombre inconnue s'est évanouie. Mais l'agonie des abysses demeurait, telle une image rémanente.",
						"spanish": "La sombra desconocida se desvaneció. Pero la agonía del abismo permaneció, como una imagen residual.",
						"vietnamese": "Bóng đen không rõ thân phận đã biến mất. Nhưng nỗi đau của vực thẳm vẫn còn, như một dư ảnh.",
						"thai": "เงามืดปริศนาหายไปแล้ว แต่ความทรมานจากห้วงลึกยังคงอยู่ราวกับภาพติดตา",
						"hindi": "अज्ञात छाया गायब हो गई। लेकिन अतल की पीड़ा, एक अनुगामी छवि की तरह, बनी रही।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "이 모든 게… 라크리모사의 시험인가.",
						"english": "Is all of this… Lacrimosa's trial?",
						"japanese": "これらすべてが…ラクリモサの試練なのか。",
						"chinese": "这一切…是拉克里莫萨的考验吗？",
						"french": "Tout cela… est-ce l'épreuve de Lacrimosa ?",
						"spanish": "¿Todo esto… es la prueba de Lacrimosa?",
						"vietnamese": "Tất cả những điều này… là thử thách của Lacrimosa sao?",
						"thai": "ทั้งหมดนี้… คือการทดสอบของลาคริโมซ่าหรือ",
						"hindi": "क्या यह सब… लैक्रिमोसा का परीक्षण है?"
					},
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "이어진 길은 더욱 깊은 절망으로 향했다. 혹은… 진실로.",
						"english": "The path ahead led to deeper despair. Or… to the truth.",
						"japanese": "続く道は、さらなる深き絶望へと向かった。あるいは…真実へと。",
						"chinese": "前方的道路通向更深的绝望。亦或是…真相。",
						"french": "Le chemin tracé menait à un désespoir plus profond. Ou… à la vérité.",
						"spanish": "El camino continuado conducía a una desesperación aún mayor. O… a la verdad.",
						"vietnamese": "Con đường tiếp nối dẫn đến sự tuyệt vọng sâu thẳm hơn. Hoặc… là sự thật.",
						"thai": "เส้นทางที่เชื่อมโยงนำไปสู่ความสิ้นหวังที่ลึกซึ้งยิ่งขึ้น หรือ… ความจริง",
						"hindi": "आगे का रास्ता और गहरे निराशा की ओर ले गया। या… सत्य की ओर।"
					},
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "하찮은 의지… 망각 속에서 영원히 잠들어라.",
						"english": "Insignificant will… Sleep forever in oblivion.",
						"japanese": "取るに足らない意志…忘却の中で永遠に眠れ。",
						"chinese": "卑微的意志…在遗忘中永远沉睡吧。",
						"french": "Volonté insignifiante… Dors pour toujours dans l'oubli.",
						"spanish": "Voluntad insignificante… Duerme para siempre en el olvido.",
						"vietnamese": "Ý chí hèn mọn… Hãy ngủ yên mãi mãi trong quên lãng.",
						"thai": "ความตั้งใจอันไร้ค่า… จงหลับใหลชั่วนิรันดร์ในความหลงลืม",
						"hindi": "तुच्छ इच्छाशक्ति… विस्मृति में सदा के लिए सो जाओ।"
					}
				},
				{
					"content": {
						"korean": "…아직… 아니야.",
						"english": "…Not… yet.",
						"japanese": "…まだ…だ。",
						"chinese": "…还…没。",
						"french": "…Pas… encore.",
						"spanish": "…Todavía… no.",
						"vietnamese": "…Vẫn… chưa.",
						"thai": "…ยัง…ไม่",
						"hindi": "…अभी… नहीं।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "내가 잊은 것… 반드시 되찾겠어.",
						"english": "What I've forgotten… I will surely reclaim.",
						"japanese": "私が忘れたもの…必ず取り戻してみせる。",
						"chinese": "我所遗忘的…我一定会找回来。",
						"french": "Ce que j'ai oublié… je le récupérerai sûrement.",
						"spanish": "Lo que he olvidado… lo recuperaré sin falta.",
						"vietnamese": "Thứ ta đã quên… ta nhất định sẽ lấy lại.",
						"thai": "สิ่งที่ฉันลืมไป… ฉันจะเอาคืนมาให้ได้",
						"hindi": "जो मैं भूल गया हूँ… उसे मैं निश्चित रूप से वापस पाऊँगा।"
					},
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"speaker": "vex",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "vex",
					"emotion": "base",
					"content": {
						"korean": "자, 이것이 네 절망의 형상이다. 네가 외면한 모든 슬픔.",
						"english": "Behold, this is the form of your despair. All the sorrow you turned away from.",
						"japanese": "さあ、これが貴様の絶望の形だ。貴様が目を背けた全ての悲しみ。",
						"chinese": "看吧，这就是你绝望的形态。所有你曾回避的悲伤。",
						"french": "Voici la forme de ton désespoir. Toute la tristesse que tu as ignorée.",
						"spanish": "Mira, esta es la forma de tu desesperación. Toda la tristeza a la que diste la espalda.",
						"vietnamese": "Hãy xem, đây là hình hài của sự tuyệt vọng của ngươi. Tất cả nỗi buồn mà ngươi đã quay lưng lại.",
						"thai": "ดูสิ นี่คือรูปร่างของความสิ้นหวังของเจ้า ความโศกเศร้าทั้งหมดที่เจ้าเมินเฉย",
						"hindi": "देखो, यह तुम्हारी निराशा का रूप है। वह सारा दुख जिससे तुमने मुँह मोड़ लिया।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "(으르렁거리는 소리)",
						"english": "(Growling sound)",
						"japanese": "（唸り声）",
						"chinese": "(低吼声)",
						"french": "(Bruit de grognement)",
						"spanish": "(Sonido de gruñido)",
						"vietnamese": "(Tiếng gầm gừ)",
						"thai": "(เสียงคำราม)",
						"hindi": "(गरजने की आवाज़)"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "절망… 그딴 거, 내가 만든 게 아니야!",
						"english": "Despair… I didn't create that kind of thing!",
						"japanese": "絶望…そんなもの、私が作ったんじゃない！",
						"chinese": "绝望…那种东西，不是我创造的！",
						"french": "Désespoir… Ce n'est pas moi qui ai créé ça !",
						"spanish": "Desesperación… ¡Yo no creé algo así!",
						"vietnamese": "Tuyệt vọng… cái thứ đó, không phải do ta tạo ra!",
						"thai": "ความสิ้นหวัง… ฉันไม่ได้สร้างสิ่งนั้น!",
						"hindi": "निराशा… मैंने ऐसी कोई चीज़ नहीं बनाई!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "네 안의 공포가 이 그림자를 만들었다. 부숴 봐. 네 의지를 증명해.",
						"english": "The fear within you created this shadow. Break it. Prove your will.",
						"japanese": "お前の中の恐怖がこの影を生み出した。打ち破れ。お前の意志を証明しろ。",
						"chinese": "你内心的恐惧创造了这个影子。打破它。证明你的意志。",
						"french": "La peur en toi a créé cette ombre. Brise-la. Prouve ta volonté.",
						"spanish": "El miedo dentro de ti creó esta sombra. Rómpela. Demuestra tu voluntad.",
						"vietnamese": "Nỗi sợ hãi trong ngươi đã tạo ra cái bóng này. Phá vỡ nó đi. Chứng minh ý chí của ngươi.",
						"thai": "ความกลัวในตัวเจ้าสร้างเงามืดนี้ ทำลายมันซะ พิสูจน์เจตจำนงของเจ้า",
						"hindi": "तुम्हारे अंदर के डर ने इस परछाई को बनाया। इसे तोड़ दो। अपनी इच्छाशक्ति साबित करो।"
					},
					"speaker": "vex",
					"emotion": "base"
				},
				{
					"speaker": "vex",
					"duration_ms": 400,
					"action": "exit",
					"direction": "up",
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "(이를 악문다)",
						"english": "(Grits teeth)",
						"japanese": "（歯を食いしばる）",
						"chinese": "（咬紧牙关）",
						"french": "(Serre les dents)",
						"spanish": "(Aprieta los dientes)",
						"vietnamese": "(Nghiến răng)",
						"thai": "(กัดฟัน)",
						"hindi": "(दाँत पीसता है)"
					},
					"speaker": "character_any",
					"emotion": "angry"
				}
			]
		}
	]
} as const;
