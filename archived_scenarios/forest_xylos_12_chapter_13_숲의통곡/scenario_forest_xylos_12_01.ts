export const scenario_forest_xylos_12_01 = {
	"scenario_id": "forest_xylos_12_01",
	"order": 1,
	"act": "intro",
	"theme": "forest",
	"actors": {
		"bracken": {
			"id": "mon_48cf29be-dbc0-44b1-bbb3-ecda1d14742d",
			"name": {
				"korean": "브라켄",
				"english": "Bracken",
				"japanese": "ブラッケン",
				"chinese": "布莱肯",
				"french": "Bracken",
				"spanish": "Bracken",
				"vietnamese": "Bracken",
				"thai": "แบรกเคน",
				"hindi": "ब्रैकेन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5b494da6-ffd7-43d3-7171-7ac84bdfe400/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/4a7a1b62-d7a7-4a21-ffd5-fa9b5de82100/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"안개가 짙게 깔린 고대 숲.",
			"들어선 모든 것은 길을 잃고, 숲은 그들을 놓아주지 않았다.",
			"이곳의 침묵은 슬픔을, 고요함은 공포를 품고 있었다.",
			"발을 들이는 순간, 나는 알 수 없는 불안에 휩싸였다."
		],
		"english": [
			"An ancient forest, shrouded in dense fog.",
			"All who entered were lost, and the forest never let them go.",
			"Its silence held sorrow, its stillness, fear.",
			"The moment I stepped in, an unknown unease enveloped me."
		],
		"japanese": [
			"濃い霧に包まれた古代の森。",
			"足を踏み入れた者は皆道に迷い、森は彼らを決して手放さなかった。",
			"ここの沈黙は悲しみを、静寂は恐怖を宿していた。",
			"足を踏み入れた瞬間、私は未知の不安に包まれた。"
		],
		"chinese": [
			"浓雾弥漫的古老森林。",
			"所有进入者都迷失了方向，森林从未让他们离开。",
			"这里的沉默蕴含悲伤，宁静孕育恐惧。",
			"踏入的那一刻，我被一股莫名的不安笼罩。"
		],
		"french": [
			"Une forêt ancienne, enveloppée d'un épais brouillard.",
			"Tous ceux qui y pénétraient se perdaient, et la forêt ne les relâchait jamais.",
			"Son silence portait la tristesse, son immobilité, la peur.",
			"Au moment où j'ai mis le pied, une anxiété inconnue m'a enveloppé."
		],
		"spanish": [
			"Un bosque antiguo, cubierto por una densa niebla.",
			"Todos los que entraban se perdían, y el bosque nunca los soltaba.",
			"Su silencio albergaba tristeza, su quietud, miedo.",
			"En el momento en que entré, una inquietud desconocida me envolvió."
		],
		"vietnamese": [
			"Một khu rừng cổ xưa, chìm trong màn sương dày đặc.",
			"Tất cả những ai bước vào đều lạc lối, và khu rừng không bao giờ buông tha họ.",
			"Sự im lặng nơi đây chứa đựng nỗi buồn, sự tĩnh lặng chứa đựng nỗi sợ hãi.",
			"Khoảnh khắc tôi bước vào, một sự bất an không tên bao trùm lấy tôi."
		],
		"thai": [
			"ป่าโบราณที่ปกคลุมด้วยหมอกหนาจัด",
			"ผู้ใดที่ย่างก้าวเข้ามาล้วนหลงทาง และป่าไม่เคยปล่อยพวกเขาไป",
			"ความเงียบของมันแฝงไว้ด้วยความโศกเศร้า ความสงบนิ่งของมันแฝงไว้ด้วยความหวาดกลัว",
			"ในวินาทีที่ก้าวเข้ามา ความไม่สบายใจที่ไม่รู้จักก็เข้าปกคลุม"
		],
		"hindi": [
			"घने कोहरे में ढका एक प्राचीन जंगल。",
			"जो भी अंदर आया, खो गया, और जंगल ने उन्हें कभी जाने नहीं दिया।",
			"इसकी खामोशी में दुख था, इसकी खामोशी में डर।",
			"जैसे ही मैंने कदम रखा, एक अज्ञात बेचैनी ने मुझे घेर लिया।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "숲의 입구. 희미한 시야를 뚫고 들어선 곳은 짙은 안개로 가득했다.",
						"english": "Forest entrance. Pushing through the dim visibility, I entered a place thick with fog.",
						"japanese": "森の入り口。かすかな視界を押し進んで入った場所は、濃い霧に満ちていた。",
						"chinese": "森林入口。穿过模糊的视野，我进入了一个浓雾弥漫的地方。",
						"french": "Entrée de la forêt. En traversant la visibilité faible, j'entrai dans un lieu envahi par un épais brouillard.",
						"spanish": "Entrada del bosque. Abriéndome paso a través de la visibilidad tenue, entré en un lugar cubierto por una densa niebla.",
						"vietnamese": "Lối vào rừng. Vượt qua tầm nhìn mờ ảo, tôi bước vào một nơi tràn ngập sương mù dày đặc.",
						"thai": "ทางเข้าป่า พุ่งทะลุผ่านทัศนวิสัยที่เลือนลาง สถานที่ที่เข้ามานั้นเต็มไปด้วยหมอกหนาทึบ",
						"hindi": "जंगल का प्रवेश द्वार। धुंधली दृश्यता से होकर, मैं एक घने कोहरे से भरी जगह में प्रवेश कर गया।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…이상한 기분이야.",
						"english": "...A strange feeling.",
						"japanese": "…奇妙な気分だ。",
						"chinese": "……一种奇怪的感觉。",
						"french": "...Une sensation étrange.",
						"spanish": "...Una sensación extraña.",
						"vietnamese": "...Một cảm giác kỳ lạ.",
						"thai": "...รู้สึกแปลกๆ",
						"hindi": "...एक अजीब सा अहसास।"
					},
					"emotion": "base"
				},
				{
					"action": "enter",
					"speaker": "bracken",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						5,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "bracken",
					"content": {
						"korean": "왔는가, 숲의 망설이는 손님.",
						"english": "Have you come, hesitant guest of the forest?",
						"japanese": "来たか、森のためらう客よ。",
						"chinese": "你来了吗，森林里犹豫的客人？",
						"french": "Es-tu venu, hôte hésitant de la forêt ?",
						"spanish": "¿Has venido, huésped vacilante del bosque?",
						"vietnamese": "Ngươi đã đến rồi sao, vị khách do dự của khu rừng?",
						"thai": "เจ้ามาแล้วหรือ แขกผู้ลังเลของป่า",
						"hindi": "क्या तुम आ गए हो, जंगल के हिचकिचाते मेहमान?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "bracken",
					"content": {
						"korean": "이 숲은 들어서는 모든 자에게 경고를 보낸다.",
						"english": "This forest sends a warning to all who enter.",
						"japanese": "この森は、足を踏み入れるすべての者に警告を送る。",
						"chinese": "这片森林向所有进入者发出警告。",
						"french": "Cette forêt envoie un avertissement à tous ceux qui y entrent.",
						"spanish": "Este bosque envía una advertencia a todos los que entran.",
						"vietnamese": "Khu rừng này gửi lời cảnh báo đến tất cả những ai bước vào.",
						"thai": "ป่าแห่งนี้ส่งคำเตือนไปยังทุกคนที่เข้ามา",
						"hindi": "यह जंगल हर उस व्यक्ति को चेतावनी भेजता है जो इसमें प्रवेश करता है।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "당신은…?",
						"english": "You are...?",
						"japanese": "あなたは…？",
						"chinese": "你是……？",
						"french": "Vous êtes...?",
						"spanish": "¿Usted es...?",
						"vietnamese": "Ngươi là…?",
						"thai": "ท่านคือ...?",
						"hindi": "तुम कौन हो...?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "bracken",
					"content": {
						"korean": "브라켄. 이 숲의 오랜 현자지.",
						"english": "Bracken. The ancient sage of this forest.",
						"japanese": "ブラッケン。この森の古き賢者だ。",
						"chinese": "布拉肯。这片森林的古老智者。",
						"french": "Bracken. L'ancien sage de cette forêt.",
						"spanish": "Bracken. El antiguo sabio de este bosque.",
						"vietnamese": "Bracken. Vị hiền giả lâu đời của khu rừng này.",
						"thai": "แบร็กเคน ปราชญ์ผู้เฒ่าแห่งป่านี้",
						"hindi": "ब्रैकेन। इस जंगल का प्राचीन साधु।"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "들리는가? 저 애절한 노랫소리가.",
						"english": "Can you hear it? That mournful song.",
						"japanese": "聞こえるか？あの哀切な歌声が。",
						"chinese": "听到了吗？那悲伤的歌声。",
						"french": "Entends-tu ? Ce chant mélancolique.",
						"spanish": "¿Lo oyes? Ese canto lastimero.",
						"vietnamese": "Ngươi có nghe thấy không? Tiếng hát bi ai đó.",
						"thai": "ได้ยินไหม? เสียงเพลงอันโศกเศร้านั้น",
						"hindi": "क्या तुम सुन सकते हो? वह दुख भरा गीत।"
					},
					"speaker": "bracken",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "bracken",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						2
					]
				},
				{
					"content": {
						"korean": "이 숲은 잊혀진 기억을 반복한다.",
						"english": "This forest repeats forgotten memories.",
						"japanese": "この森は忘れられた記憶を繰り返す。",
						"chinese": "这片森林重复着被遗忘的记忆。",
						"french": "Cette forêt répète des souvenirs oubliés.",
						"spanish": "Este bosque repite recuerdos olvidados.",
						"vietnamese": "Khu rừng này lặp lại những ký ức đã bị lãng quên.",
						"thai": "ป่าแห่งนี้ซ้ำรอยความทรงจำที่ถูกลืม",
						"hindi": "यह जंगल भूली हुई यादों को दोहराता है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "bracken"
				},
				{
					"speaker": "bracken",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "들어선 자는 모두 과거의 악몽에 갇히게 되지.",
						"english": "All who enter are trapped in past nightmares.",
						"japanese": "足を踏み入れた者は皆、過去の悪夢に囚われる。",
						"chinese": "所有进入者都将被困在过去的噩梦中。",
						"french": "Tous ceux qui entrent sont piégés dans les cauchemars du passé.",
						"spanish": "Todos los que entran quedan atrapados en pesadillas pasadas.",
						"vietnamese": "Tất cả những ai bước vào đều bị mắc kẹt trong những cơn ác mộng của quá khứ.",
						"thai": "ผู้ที่ก้าวเข้ามาทุกคนจะถูกขังอยู่ในฝันร้ายในอดีต",
						"hindi": "जो भी अंदर आता है, वह अतीत के बुरे सपनों में फंस जाता है।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "악몽…?",
						"english": "Nightmares...?",
						"japanese": "悪夢…？",
						"chinese": "噩梦…？",
						"french": "Cauchemars…?",
						"spanish": "¿Pesadillas…?",
						"vietnamese": "Ác mộng…?",
						"thai": "ฝันร้าย…?",
						"hindi": "बुरे सपने...?"
					}
				},
				{
					"content": {
						"korean": "어쩐지 익숙한 풍경이었다. 방금 지나온 길과 똑같은.",
						"english": "It was a strangely familiar sight. Exactly like the path we just took.",
						"japanese": "なぜか見覚えのある風景だった。今通ってきた道と全く同じ。",
						"chinese": "这是一个似曾相识的景象。和我们刚才走过的路一模一样。",
						"french": "C'était un paysage étrangement familier. Exactement comme le chemin que nous venions de prendre.",
						"spanish": "Era un paisaje extrañamente familiar. Exactamente como el camino que acabábamos de recorrer.",
						"vietnamese": "Đó là một cảnh tượng quen thuộc một cách kỳ lạ. Giống hệt con đường chúng ta vừa đi qua.",
						"thai": "มันเป็นภาพที่คุ้นเคยอย่างประหลาด เหมือนกับทางที่เราเพิ่งผ่านมา",
						"hindi": "यह एक अजीबोगरीब परिचित दृश्य था। बिल्कुल उसी रास्ते जैसा जिसे हमने अभी पार किया था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "우리… 원래 여기 아니었어?",
						"english": "Weren't we... here already?",
						"japanese": "私たち…元々ここにいなかった？",
						"chinese": "我们…不是已经来过这里了吗？",
						"french": "N'étions-nous pas… déjà ici ?",
						"spanish": "¿No estábamos… ya aquí?",
						"vietnamese": "Chúng ta… không phải đã ở đây rồi sao?",
						"thai": "พวกเรา…ไม่ได้อยู่ที่นี่แล้วเหรอ?",
						"hindi": "क्या हम... पहले से यहां नहीं थे?"
					},
					"speaker": "character_1",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "길을 잃은 자들은 계속해서 제자리로 돌아오지. 영원히.",
						"english": "Those who get lost keep returning to the same spot. Forever.",
						"japanese": "道を失った者たちは、永遠に元の場所に戻り続ける。",
						"chinese": "迷失的人们会不断回到原地。永远。",
						"french": "Ceux qui se perdent reviennent toujours au même endroit. Pour toujours.",
						"spanish": "Los que se pierden siempre vuelven al mismo lugar. Para siempre.",
						"vietnamese": "Những kẻ lạc lối cứ mãi quay trở lại nơi ban đầu. Mãi mãi.",
						"thai": "ผู้ที่หลงทางจะกลับมาที่เดิมเสมอ ชั่วนิรันดร์",
						"hindi": "जो भटक जाते हैं, वे हमेशा उसी जगह पर लौटते रहते हैं। हमेशा के लिए।"
					},
					"speaker": "bracken",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"speaker": "bracken",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "bracken",
					"content": {
						"korean": "숲은 너희에게 진실을 보여줄 것이다.",
						"english": "The forest will show you the truth.",
						"japanese": "森はお前たちに真実を見せるだろう。",
						"chinese": "森林会向你们展示真相。",
						"french": "La forêt vous montrera la vérité.",
						"spanish": "El bosque os mostrará la verdad.",
						"vietnamese": "Rừng sẽ cho các ngươi thấy sự thật.",
						"thai": "ป่าจะแสดงความจริงให้พวกเจ้าเห็น",
						"hindi": "जंगल तुम्हें सच दिखाएगा।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "진실?",
						"english": "The truth?",
						"japanese": "真実？",
						"chinese": "真相？",
						"french": "La vérité ?",
						"spanish": "¿La verdad?",
						"vietnamese": "Sự thật ư?",
						"thai": "ความจริง?",
						"hindi": "सच?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "bracken",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "하지만 그 진실은… 너희를 더 깊은 슬픔으로 끌어들일 뿐.",
						"english": "But that truth will only drag you deeper into sorrow.",
						"japanese": "しかし、その真実は…お前たちをより深い悲しみへと引きずり込むだけだ。",
						"chinese": "但那个真相…只会把你们拖入更深的悲伤。",
						"french": "Mais cette vérité… ne fera que vous entraîner plus profondément dans la tristesse.",
						"spanish": "Pero esa verdad… solo os arrastrará a una tristeza aún más profunda.",
						"vietnamese": "Nhưng sự thật đó… sẽ chỉ kéo các ngươi vào nỗi buồn sâu sắc hơn mà thôi.",
						"thai": "แต่ความจริงนั้น…จะดึงพวกเจ้าลงไปสู่ความเศร้าที่ลึกซึ้งยิ่งขึ้นเท่านั้น",
						"hindi": "लेकिन वह सच… तुम्हें और गहरे दुख में धकेल देगा।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_2",
					"content": {
						"korean": "대체 이 숲에 뭐가 있는 거야.",
						"english": "What in this forest...?",
						"japanese": "一体この森には何があるんだ？",
						"chinese": "这森林里到底有什么？",
						"french": "Qu'est-ce qu'il y a dans cette forêt, au juste ?",
						"spanish": "¿Qué hay en este bosque, en verdad?",
						"vietnamese": "Rốt cuộc trong rừng này có gì vậy?",
						"thai": "ในป่านี้มีอะไรกันแน่?",
						"hindi": "आखिर इस जंगल में क्या है?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "그것은 숲의 심장에 숨겨져 있다. 고통받는 영혼의 울부짖음과 함께.",
						"english": "It is hidden in the forest's heart, with the cries of suffering souls.",
						"japanese": "それは森の心臓に隠されている。苦しむ魂たちの叫びと共に。",
						"chinese": "它藏在森林的心脏深处，伴随着受苦灵魂的哭嚎。",
						"french": "C'est caché au cœur de la forêt, avec les cris des âmes souffrantes.",
						"spanish": "Está oculto en el corazón del bosque, con el lamento de almas sufrientes.",
						"vietnamese": "Nó ẩn sâu trong trái tim khu rừng, cùng với tiếng gào thét của những linh hồn đau khổ.",
						"thai": "มันถูกซ่อนอยู่ในใจกลางป่า พร้อมกับเสียงกรีดร้องของวิญญาณที่ทุกข์ทรมาน",
						"hindi": "वह जंगल के दिल में छिपा है, पीड़ित आत्माओं की चीखों के साथ।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "bracken"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"speaker": "bracken",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						2
					]
				},
				{
					"content": {
						"korean": "이제 돌아갈 길은 없다.",
						"english": "There's no turning back now.",
						"japanese": "もう引き返す道はない。",
						"chinese": "已经没有回头路了。",
						"french": "Il n'y a plus de retour possible.",
						"spanish": "Ya no hay vuelta atrás.",
						"vietnamese": "Giờ không còn đường quay lại nữa.",
						"thai": "ไม่มีทางย้อนกลับอีกแล้ว",
						"hindi": "अब लौटने का कोई रास्ता नहीं है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "bracken"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…알고 있었어.",
						"english": "...I knew.",
						"japanese": "…知っていたよ。",
						"chinese": "……我早就知道了。",
						"french": "...Je le savais.",
						"spanish": "...Lo sabía.",
						"vietnamese": "...Tôi biết mà.",
						"thai": "...ฉันรู้แล้ว",
						"hindi": "...मुझे पता था।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "bracken",
					"content": {
						"korean": "숲의 기억은 너희를 놓아주지 않을 테니.",
						"english": "The forest's memories won't let you go.",
						"japanese": "森の記憶がお前たちを離さないだろうから。",
						"chinese": "森林的记忆不会放过你们。",
						"french": "Les souvenirs de la forêt ne vous laisseront pas partir.",
						"spanish": "Los recuerdos del bosque no os dejarán marchar.",
						"vietnamese": "Ký ức của khu rừng sẽ không buông tha các ngươi đâu.",
						"thai": "ความทรงจำของป่าจะไม่ปล่อยพวกเจ้าไป",
						"hindi": "जंगल की यादें तुम्हें जाने नहीं देंगी।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_3",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "후회는 없어. 끝까지 갈 거야.",
						"english": "No regrets. I'll go to the end.",
						"japanese": "後悔はない。最後まで行く。",
						"chinese": "我不后悔。我会走到最后。",
						"french": "Aucun regret. J'irai jusqu'au bout.",
						"spanish": "No me arrepiento. Iré hasta el final.",
						"vietnamese": "Không hối hận. Tôi sẽ đi đến cùng.",
						"thai": "ไม่เสียใจ จะไปจนสุดทาง",
						"hindi": "कोई पछतावा नहीं। मैं अंत तक जाऊँगा।"
					}
				},
				{
					"content": {
						"korean": "모든 것은 숲의 주인에게 달려있다.",
						"english": "Everything rests with the forest's master.",
						"japanese": "全ては森の主次第だ。",
						"chinese": "一切都取决于森林的主人。",
						"french": "Tout dépend du maître de la forêt.",
						"spanish": "Todo depende del señor del bosque.",
						"vietnamese": "Mọi thứ đều tùy thuộc vào chủ nhân khu rừng.",
						"thai": "ทุกสิ่งขึ้นอยู่กับเจ้าป่า",
						"hindi": "सब कुछ जंगल के मालिक पर निर्भर करता है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "bracken"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 것들. 내 숲은 영원하다.",
						"english": "Fools. My forest is eternal.",
						"japanese": "愚かな者たちめ。私の森は永遠だ。",
						"chinese": "愚蠢的东西。我的森林是永恒的。",
						"french": "Imbéciles. Ma forêt est éternelle.",
						"spanish": "Necios. Mi bosque es eterno.",
						"vietnamese": "Đồ ngu ngốc. Rừng của ta là vĩnh cửu.",
						"thai": "พวกโง่เขลา ป่าของข้าเป็นนิรันดร์",
						"hindi": "मूर्खों। मेरा जंगल शाश्वत है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…크윽. 아직 끝나지 않았어.",
						"english": "...Ugh. It's not over yet.",
						"japanese": "…くっ。まだ終わってない。",
						"chinese": "…呃。还没结束。",
						"french": "...Urgh. Ce n'est pas encore fini.",
						"spanish": "...Ugh. Aún no ha terminado.",
						"vietnamese": "...Khụ. Chuyện vẫn chưa kết thúc.",
						"thai": "...อึก ยังไม่จบ",
						"hindi": "...धत्त। अभी खत्म नहीं हुआ है।"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "영원히 이 숲에 갇혀라.",
						"english": "Be trapped in this forest forever.",
						"japanese": "永遠にこの森に閉じ込められろ。",
						"chinese": "永远被困在这片森林里吧。",
						"french": "Piégé dans cette forêt pour l'éternité.",
						"spanish": "Atrapado en este bosque para siempre.",
						"vietnamese": "Hãy bị giam cầm trong khu rừng này mãi mãi.",
						"thai": "จงถูกขังอยู่ในป่านี้ตลอดไป",
						"hindi": "हमेशा के लिए इस जंगल में फंसे रहो।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"spot": [
						4,
						2
					],
					"speaker": "bracken",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "bracken",
					"content": {
						"korean": "포기하지 마라. 너희만이 이 고통을 끊을 수 있다.",
						"english": "Don't give up. Only you can end this suffering.",
						"japanese": "諦めるな。お前たちだけがこの苦痛を断ち切れる。",
						"chinese": "不要放弃。只有你们才能结束这份痛苦。",
						"french": "N'abandonnez pas. Vous seuls pouvez mettre fin à cette souffrance.",
						"spanish": "No os rindáis. Solo vosotros podéis poner fin a este sufrimiento.",
						"vietnamese": "Đừng bỏ cuộc. Chỉ có các ngươi mới có thể chấm dứt nỗi đau này.",
						"thai": "อย่ายอมแพ้. มีเพียงพวกเจ้าเท่านั้นที่จะยุติความเจ็บปวดนี้ได้.",
						"hindi": "हार मत मानो। केवल तुम ही इस पीड़ा को समाप्त कर सकते हो।"
					},
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "감히 여기까지 왔느냐.",
						"english": "You dare come this far?",
						"japanese": "よくもここまで来たな。",
						"chinese": "竟敢来到这里？",
						"french": "Comment oses-tu venir jusqu'ici ?",
						"spanish": "¿Osas llegar tan lejos?",
						"vietnamese": "Ngươi dám đến tận đây sao?",
						"thai": "เจ้ากล้ามาถึงที่นี่เลยรึ?",
						"hindi": "हिम्मत हुई यहां तक आने की?"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "네가 이 숲을 이렇게 만든 거야?",
						"english": "Did you make this forest like this?",
						"japanese": "お前がこの森をこう変えたのか？",
						"chinese": "是你把这森林变成这样的吗？",
						"french": "C'est toi qui as rendu cette forêt ainsi ?",
						"spanish": "¿Fuiste tú quien convirtió el bosque en esto?",
						"vietnamese": "Ngươi đã biến khu rừng này thành ra thế này sao?",
						"thai": "เจ้าคือผู้ทำให้ป่านี้เป็นแบบนี้หรือ?",
						"hindi": "क्या तुमने इस जंगल को ऐसा बनाया है?"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이 숲은… 나의 슬픔이다.",
						"english": "This forest... is my sorrow.",
						"japanese": "この森は…私の悲しみだ。",
						"chinese": "这片森林……是我的悲伤。",
						"french": "Cette forêt… est ma tristesse.",
						"spanish": "Este bosque… es mi tristeza.",
						"vietnamese": "Khu rừng này... là nỗi buồn của ta.",
						"thai": "ป่านี้...คือความโศกเศร้าของข้า",
						"hindi": "यह जंगल... मेरा दुख है।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "닥쳐! 네 슬픔 때문에 수많은 이들이 고통받았어!",
						"english": "Shut up! Your sorrow has caused countless people to suffer!",
						"japanese": "黙れ！お前の悲しみのせいで、多くの人々が苦しんだ！",
						"chinese": "闭嘴！你的悲伤让无数人受苦！",
						"french": "Tais-toi ! Ta tristesse a fait souffrir d'innombrables personnes !",
						"spanish": "¡Cállate! ¡Tu dolor ha hecho sufrir a incontables personas!",
						"vietnamese": "Im đi! Nỗi buồn của ngươi đã khiến vô số người phải chịu đựng!",
						"thai": "หุบปาก! ความโศกเศร้าของเจ้าทำให้ผู้คนมากมายต้องทนทุกข์!",
						"hindi": "चुप रहो! तुम्हारे दुख के कारण अनगिनत लोगों को पीड़ा हुई है!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "내 고통에 비하면 아무것도 아니다.",
						"english": "It's nothing compared to my suffering.",
						"japanese": "私の苦痛に比べれば、何でもない。",
						"chinese": "和我的痛苦比起来，这算什么。",
						"french": "Ce n'est rien comparé à ma souffrance.",
						"spanish": "No es nada comparado con mi sufrimiento.",
						"vietnamese": "Chẳng là gì so với nỗi đau của ta.",
						"thai": "มันไม่สำคัญเมื่อเทียบกับความทุกข์ของข้า",
						"hindi": "मेरे दुख के आगे यह कुछ भी नहीं है।"
					},
					"speaker": "random_boss",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "…겨우 이것으로 끝날 줄 알았느냐.",
						"english": "...Did you think this would be the end?",
						"japanese": "…たったこれっぽっちで終わると思ったか？",
						"chinese": "…你以为这就结束了吗？",
						"french": "...Pensais-tu que ce serait la fin ?",
						"spanish": "¿Pensaste que esto sería el final?",
						"vietnamese": "...Ngươi nghĩ chuyện này sẽ kết thúc chỉ với điều này sao?",
						"thai": "...เจ้าคิดว่านี่คือจุดจบแล้วหรือ?",
						"hindi": "...क्या तुम्हें लगा था कि यह यहीं खत्म हो जाएगा?"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "숲은… 다시 피어날 것이다.",
						"english": "The forest... will bloom again.",
						"japanese": "森は…再び芽吹くだろう。",
						"chinese": "森林…将再次绽放。",
						"french": "La forêt... refleurira.",
						"spanish": "El bosque... volverá a florecer.",
						"vietnamese": "Rừng... sẽ nở hoa trở lại.",
						"thai": "ป่า... จะผลิบานอีกครั้ง",
						"hindi": "जंगल... फिर से खिलेगा।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리야…!",
						"english": "What are you talking about...!",
						"japanese": "何を言っているんだ…！",
						"chinese": "你在说什么…！",
						"french": "Qu'est-ce que tu racontes… !",
						"spanish": "¿De qué estás hablando...?",
						"vietnamese": "Ngươi đang nói gì vậy...!",
						"thai": "เจ้ากำลังพูดอะไร...!",
						"hindi": "यह क्या बकवास है...!"
					},
					"emotion": "base"
				},
				{
					"spot": [
						4,
						2
					],
					"action": "enter",
					"speaker": "bracken",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "이것은 시작일 뿐. 숲의 진정한 슬픔은 이제부터다.",
						"english": "This is just the beginning. The forest's true sorrow begins now.",
						"japanese": "これは始まりに過ぎない。森の真の悲しみはこれからだ。",
						"chinese": "这只是开始。森林真正的悲伤才刚刚开始。",
						"french": "Ce n'est que le début. La véritable tristesse de la forêt commence maintenant.",
						"spanish": "Esto es solo el principio. La verdadera tristeza del bosque comienza ahora.",
						"vietnamese": "Đây chỉ là khởi đầu. Nỗi buồn thật sự của rừng cây chỉ mới bắt đầu.",
						"thai": "นี่เป็นเพียงจุดเริ่มต้น ความโศกเศร้าที่แท้จริงของป่าเพิ่งจะเริ่มต้นขึ้น",
						"hindi": "यह तो बस शुरुआत है। जंगल का असली दुख अब शुरू होगा।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "bracken"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "쓰러진 {random_boss}. 그러나 숲의 음산한 기운은 사라지지 않았다.",
						"english": "{random_boss} falls. But the ominous aura of the forest did not disappear.",
						"japanese": "{random_boss}は倒れた。しかし、森の陰鬱な気配は消えなかった。",
						"chinese": "{random_boss}倒下了。然而，森林阴森的气息并未消散。",
						"french": "{random_boss} tombe. Mais l'aura sinistre de la forêt n'a pas disparu.",
						"spanish": "{random_boss} cae. Pero el aura ominosa del bosque no desapareció.",
						"vietnamese": "{random_boss} gục ngã. Nhưng khí tức âm u của khu rừng vẫn không tan biến.",
						"thai": "{random_boss} ล้มลง แต่บรรยากาศที่น่ากลัวของป่าก็ยังไม่หายไป",
						"hindi": "{random_boss} गिर गया। लेकिन जंगल का अशुभ आभा मंडल गायब नहीं हुआ।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "새로운 악몽이, 다시 시작되고 있었다.",
						"english": "A new nightmare was beginning again.",
						"japanese": "新たな悪夢が、再び始まろうとしていた。",
						"chinese": "新的噩梦，再次开始了。",
						"french": "Un nouveau cauchemar recommençait.",
						"spanish": "Una nueva pesadilla comenzaba de nuevo.",
						"vietnamese": "Một cơn ác mộng mới lại bắt đầu.",
						"thai": "ฝันร้ายครั้งใหม่ กำลังเริ่มต้นขึ้นอีกครั้ง",
						"hindi": "एक नया दुःस्वप्न, फिर से शुरू हो रहा था।"
					},
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"id": 15
		}
	]
} as const;
