export const scenario_snowy_frostscion_20_03 = {
	"scenario_id": "snowy_frostscion_20_03",
	"order": 3,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"ivar": {
			"id": "mon_d8a80adc-9315-47b5-8c30-97ce33672bce",
			"name": {
				"korean": "이바르",
				"english": "Ivar",
				"japanese": "イヴァー",
				"chinese": "伊瓦尔",
				"french": "Ivar",
				"spanish": "Ivar",
				"vietnamese": "Ivar",
				"thai": "ไอวาร์",
				"hindi": "इवर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8dd7872b-d4df-44fd-b1a1-083a9156e700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2622fb62-daf4-42d1-a83b-2b78869d3e00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "끝없는 눈보라 속, 낡은 천막 하나가 바람에 찢길 듯 흔들렸다.",
						"english": "In the endless blizzard, an old tent swayed, as if to rip apart in the wind.",
						"japanese": "終わりのない吹雪の中、古い天幕が風に引き裂かれそうに揺れていた。",
						"chinese": "无尽的暴风雪中，一个旧帐篷在风中摇摇欲坠，仿佛随时会被撕裂。",
						"french": "Dans le blizzard incessant, une vieille tente vacillait, comme si elle allait se déchirer dans le vent.",
						"spanish": "En la tormenta de nieve interminable, una vieja tienda se mecía, como si fuera a romperse por el viento.",
						"vietnamese": "Giữa bão tuyết không ngừng, một căn lều cũ rung lắc, như sắp bị xé toạc bởi gió.",
						"thai": "ท่ามกลางพายุหิมะไม่สิ้นสุด เต็นท์เก่าเต็นท์หนึ่งไหวเอนราวกับจะฉีกขาดจากลม",
						"hindi": "अंतहीन बर्फीले तूफान में, एक पुराना तम्बू हवा में फटने वाला था।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "저 안에… 사람이 있을까?",
						"english": "Is there… someone inside?",
						"japanese": "あの中に…人がいるのか？",
						"chinese": "里面…会有人吗？",
						"french": "Y a-t-il… quelqu'un à l'intérieur ?",
						"spanish": "¿Hay… alguien dentro?",
						"vietnamese": "Bên trong đó… có người không?",
						"thai": "ข้างในนั้น…มีคนอยู่ไหม?",
						"hindi": "क्या अंदर… कोई है?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						5,
						3
					],
					"speaker": "ivar"
				},
				{
					"speaker": "ivar",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "왔는가. 기다렸네.",
						"english": "You've come. I've been waiting.",
						"japanese": "来たか。待っていたぞ。",
						"chinese": "你来了。我等候多时了。",
						"french": "Vous êtes venu. Je vous attendais.",
						"spanish": "Has venido. Te he estado esperando.",
						"vietnamese": "Ngươi đã đến. Ta đã đợi.",
						"thai": "มาแล้วหรือ ข้ากำลังรออยู่",
						"hindi": "तुम आ गए। मैं इंतज़ार कर रहा था।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "차가운 유혹이 자네를 이끌었군.",
						"english": "The cold temptation has led you here.",
						"japanese": "冷たい誘惑が君を導いたようだな。",
						"chinese": "冰冷的诱惑指引你而来。",
						"french": "La froide tentation vous a guidé ici.",
						"spanish": "La fría tentación te ha traído aquí.",
						"vietnamese": "Cám dỗ lạnh lẽo đã dẫn dắt ngươi đến đây.",
						"thai": "การล่อลวงอันเย็นชาได้นำทางเจ้ามา",
						"hindi": "ठंडी लालच तुम्हें यहां ले आई है।"
					},
					"speaker": "ivar"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…무슨 소리죠?",
						"english": "...What are you talking about?",
						"japanese": "…どういう意味ですか？",
						"chinese": "…您在说什么？",
						"french": "…De quoi parlez-vous ?",
						"spanish": "¿…De qué está hablando?",
						"vietnamese": "…Ngươi đang nói gì vậy?",
						"thai": "…คุณกำลังพูดถึงอะไร?",
						"hindi": "…आप क्या कह रहे हैं?"
					},
					"emotion": "base"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						5,
						3
					],
					"speaker": "ivar"
				},
				{
					"type": "speech",
					"content": {
						"korean": "눈에 보이는 것이 전부가 아니야. 자네가 만난 괴물들…",
						"english": "What you see isn't everything. The monsters you've faced...",
						"japanese": "目に見えるものが全てではない。君が出会った怪物たち…",
						"chinese": "眼见并非一切。你遇到的那些怪物…",
						"french": "Ce que tu vois n'est pas tout. Les monstres que tu as rencontrés…",
						"spanish": "Lo que ves no es todo. Los monstruos que has enfrentado...",
						"vietnamese": "Những gì ngươi thấy không phải là tất cả. Những quái vật ngươi đã gặp…",
						"thai": "สิ่งที่เห็นไม่ใช่ทั้งหมด สัตว์ประหลาดที่คุณเจอ...",
						"hindi": "जो तुम देखते हो, वह सब कुछ नहीं है। जिन राक्षसों का तुमने सामना किया है..."
					},
					"emotion": "base",
					"speaker": "ivar"
				},
				{
					"type": "speech",
					"content": {
						"korean": "괴물이라면… 방금 쓰러뜨린 그 녀석?",
						"english": "Monsters... You mean the one we just defeated?",
						"japanese": "怪物だと…？ 今倒したばかりのあいつか？",
						"chinese": "怪物... 是指刚刚打倒的那个家伙吗？",
						"french": "Des monstres... Tu veux dire celui que nous venons de vaincre ?",
						"spanish": "¿Monstruos... Te refieres al que acabamos de derrotar?",
						"vietnamese": "Quái vật... Ý anh là tên vừa đánh bại ư?",
						"thai": "สัตว์ประหลาด... หมายถึงตัวที่เราเพิ่งโค่นล้มไปเหรอ?",
						"hindi": "राक्षस... क्या आप उसी की बात कर रहे हैं जिसे हमने अभी-अभी हराया?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"content": {
						"korean": "그래. 그들은 모두 같은 노래를 부르고 있지. 같은 춤을 추고.",
						"english": "Yes. They all sing the same song. Dance the same dance.",
						"japanese": "そうだ。奴らは皆、同じ歌を歌い、同じ踊りを踊っている。",
						"chinese": "没错。它们都唱着同一首歌，跳着同样的舞。",
						"french": "Oui. Ils chantent tous la même chanson. Dansent la même danse.",
						"spanish": "Sí. Todos cantan la misma canción. Bailan el mismo baile.",
						"vietnamese": "Đúng vậy. Chúng đều hát cùng một bài ca. Nhảy cùng một điệu.",
						"thai": "ใช่แล้ว พวกมันล้วนร้องเพลงเดียวกัน เต้นรำแบบเดียวกัน",
						"hindi": "हाँ। वे सब एक ही गीत गाते हैं। एक ही नृत्य करते हैं।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "전투 방식이… 비슷하다고?",
						"english": "Their combat style... is similar?",
						"japanese": "戦闘スタイルが…似ていると？",
						"chinese": "战斗方式... 相似吗？",
						"french": "Leur style de combat... est similaire ?",
						"spanish": "¿Su estilo de combate... es similar?",
						"vietnamese": "Cách chiến đấu... giống nhau ư?",
						"thai": "รูปแบบการต่อสู้... คล้ายกันเหรอ?",
						"hindi": "उनकी युद्ध शैली... समान है?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "방금 쓰러뜨린 얼음 괴물의 움직임이 이전에 만난 자들과 기묘하게 겹쳐 보였다.",
						"english": "The movements of the ice monster we just defeated strangely overlapped with those we met before.",
						"japanese": "今倒した氷の怪物の動きは、以前出会った者たちと奇妙なほど重なって見えた。",
						"chinese": "刚刚击败的冰怪物的动作，与之前遇到的那些家伙诡异地重叠着。",
						"french": "Les mouvements du monstre de glace que nous venions de vaincre semblaient étrangement se superposer à ceux des créatures rencontrées auparavant.",
						"spanish": "Los movimientos del monstruo de hielo que acabamos de derrotar se superponían extrañamente con los de aquellos que encontramos antes.",
						"vietnamese": "Những chuyển động của quái vật băng vừa đánh bại kỳ lạ thay lại trùng khớp với những kẻ đã gặp trước đây.",
						"thai": "การเคลื่อนไหวของสัตว์ประหลาดน้ำแข็งที่เราเพิ่งโค่นล้มไปนั้น ซ้อนทับกับพวกที่เราเคยเจอมาก่อนอย่างน่าประหลาด",
						"hindi": "जिस बर्फीले राक्षस को हमने अभी-अभी हराया, उसकी हरकतें अजीब तरह से उन लोगों से मिलती-जुलती थीं जिनसे हम पहले मिल चुके थे।"
					}
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						5,
						3
					],
					"speaker": "ivar"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "반복은 달콤한 유혹이지. 익숙함은 편안함을 가장하고.",
						"english": "Repetition is a sweet temptation. Familiarity masquerades as comfort.",
						"japanese": "繰り返しは甘い誘惑だ。慣れ親しんだものは快適さを装う。",
						"chinese": "重复是甜蜜的诱惑。熟悉感伪装成舒适。",
						"french": "La répétition est une douce tentation. La familiarité se déguise en confort.",
						"spanish": "La repetición es una dulce tentación. La familiaridad se disfraza de comodidad.",
						"vietnamese": "Lặp lại là một cám dỗ ngọt ngào. Sự quen thuộc giả dạng thành thoải mái.",
						"thai": "การทำซ้ำคือคำเชิญชวนอันหอมหวาน ความคุ้นเคยแสร้งทำเป็นความสบาย",
						"hindi": "दोहराव एक मीठा प्रलोभन है। परिचितता आराम का दिखावा करती है।"
					},
					"speaker": "ivar"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "허나 그 편안함이 자네를 갉아먹을 걸세.",
						"english": "But that comfort will gnaw at you.",
						"japanese": "だが、その快適さが貴様を蝕むだろう。",
						"chinese": "但那份舒适会一点点侵蚀你。",
						"french": "Mais ce confort te rongera.",
						"spanish": "Pero esa comodidad te carcomerá.",
						"vietnamese": "Nhưng sự thoải mái đó sẽ gặm nhấm anh.",
						"thai": "แต่ความสบายนั้นจะกัดกินเจ้า",
						"hindi": "लेकिन वह आराम तुम्हें खा जाएगा।"
					},
					"speaker": "ivar"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그럼… 우린 계속 같은 곳을 맴도는 건가요?",
						"english": "Then... are we just circling the same spot?",
						"japanese": "では…我々は同じ場所を回り続けているのか？",
						"chinese": "那么... 我们一直在原地打转吗？",
						"french": "Alors... nous tournons en rond au même endroit ?",
						"spanish": "Entonces... ¿estamos dando vueltas en el mismo lugar?",
						"vietnamese": "Vậy... chúng ta cứ mãi luẩn quẩn ở một chỗ sao?",
						"thai": "ถ้าอย่างนั้น... เราก็แค่วนเวียนอยู่กับที่เหรอ?",
						"hindi": "तो... क्या हम एक ही जगह घूम रहे हैं?"
					},
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "얼음 동굴의 벽면. 온기를 잃어가는 인간 형상이 희미하게 새겨져 있었다.",
						"english": "The walls of the ice cave. Faint human figures, losing their warmth, were etched into them.",
						"japanese": "氷の洞窟の壁面。温もりを失いゆく人間らしき姿が、薄く刻まれていた。",
						"chinese": "冰窟的墙壁。失去温度的人形轮廓，模糊地刻在上面。",
						"french": "Les parois de la grotte de glace. De vagues formes humaines, perdant leur chaleur, y étaient gravées.",
						"spanish": "Las paredes de la cueva de hielo. Débiles figuras humanas, perdiendo su calor, estaban grabadas en ellas.",
						"vietnamese": "Bức tường hang băng. Những hình người mờ nhạt, đang mất dần hơi ấm, được khắc trên đó.",
						"thai": "ผนังถ้ำน้ำแข็ง รูปทรงมนุษย์ที่กำลังสูญเสียความอบอุ่นถูกสลักไว้อย่างเลือนราง",
						"hindi": "बर्फीली गुफा की दीवारें। गर्मी खोते हुए धुंधले मानव आकृतियाँ उन पर खुदी हुई थीं।"
					}
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"speaker": "ivar",
					"spot": [
						5,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"content": {
						"korean": "멈추지 않는 한, 이 모든 것은 다시 시작될 거야.",
						"english": "As long as you don't stop, all of this will start anew.",
						"japanese": "止まらない限り、この全てはまた始まるだろう。",
						"chinese": "只要不停下，这一切就会重新开始。",
						"french": "Tant que tu ne t'arrêtes pas, tout cela recommencera.",
						"spanish": "Mientras no te detengas, todo esto comenzará de nuevo.",
						"vietnamese": "Chừng nào chưa dừng lại, tất cả những điều này sẽ lại bắt đầu.",
						"thai": "ตราบใดที่ยังไม่หยุด ทุกสิ่งนี้จะเริ่มต้นใหม่อีกครั้ง",
						"hindi": "जब तक तुम रुकते नहीं, यह सब फिर से शुरू होगा।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그럼 어떻게 해야 하죠? 이 끝없는 미로에서 벗어날 방법은?",
						"english": "Then what should I do? Is there a way out of this endless maze?",
						"japanese": "ではどうすればいい？ この終わりのない迷宮から抜け出す方法は？",
						"chinese": "那我该怎么办？有没有办法摆脱这个无尽的迷宫？",
						"french": "Alors que devrais-je faire ? Y a-t-il un moyen de sortir de ce labyrinthe sans fin ?",
						"spanish": "Entonces, ¿qué debo hacer? ¿Hay alguna forma de salir de este laberinto sin fin?",
						"vietnamese": "Vậy tôi phải làm gì? Có cách nào thoát khỏi mê cung vô tận này không?",
						"thai": "แล้วฉันควรทำอย่างไร? มีทางออกจากเขาวงกตที่ไม่มีที่สิ้นสุดนี้ไหม?",
						"hindi": "तो मुझे क्या करना चाहिए? इस अंतहीन भूलभुलैया से निकलने का कोई रास्ता है?"
					},
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"speaker": "ivar",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "자네의 온기가 다하기 전에… 선택해야 할 걸세.",
						"english": "Before your warmth fades... you must choose.",
						"japanese": "君の温もりが尽きる前に…選ばねばならない。",
						"chinese": "在你的温暖消逝之前……你必须做出选择。",
						"french": "Avant que ta chaleur ne s'éteigne... tu devras choisir.",
						"spanish": "Antes de que tu calor se extinga... deberás elegir.",
						"vietnamese": "Trước khi hơi ấm của ngươi tan biến... ngươi phải lựa chọn.",
						"thai": "ก่อนที่ความอบอุ่นของเจ้าจะจางหายไป... เจ้าต้องเลือก",
						"hindi": "तुम्हारी गरमाहट के ख़त्म होने से पहले... तुम्हें चुनना होगा।"
					}
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "모닥불의 온기가 유난히 빠르게 사라졌다. 주변의 차가운 공기가 생명을 빨아들이는 듯했다.",
						"english": "The campfire's warmth faded unusually fast. The surrounding cold air seemed to drain life.",
						"japanese": "焚き火の温もりは異様に早く消えた。周囲の冷たい空気が命を吸い取るようだった。",
						"chinese": "篝火的温暖消散得异常之快。周围的冰冷空气似乎正在吸食生命。",
						"french": "La chaleur du feu de camp s'éteignait anormalement vite. L'air froid ambiant semblait drainer la vie.",
						"spanish": "El calor de la hoguera se desvaneció inusualmente rápido. El aire frío circundante parecía drenar la vida.",
						"vietnamese": "Hơi ấm của đống lửa biến mất nhanh lạ thường. Không khí lạnh xung quanh dường như đang hút cạn sự sống.",
						"thai": "ความอบอุ่นจากกองไฟจางหายไปอย่างรวดเร็วผิดปกติ อากาศหนาวเย็นรอบข้างราวกับกำลังดูดกลืนชีวิต",
						"hindi": "अलाव की गरमाहट असामान्य रूप से तेज़ी से ग़ायब हो गई। आसपास की ठंडी हवा जीवन को सोख रही थी।"
					}
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "거대한 얼음 동굴. 한가운데, 거대한 그림자가 일렁였다.",
						"english": "A colossal ice cave. In its center, a massive shadow flickered.",
						"japanese": "巨大な氷の洞窟。その中央で、巨大な影が揺らめいた。",
						"chinese": "一个巨大的冰洞。在其中心，一个巨大的影子在摇曳。",
						"french": "Une caverne de glace colossale. En son centre, une ombre massive vacillait.",
						"spanish": "Una cueva de hielo colosal. En su centro, una sombra masiva parpadeaba.",
						"vietnamese": "Một hang động băng khổng lồ. Ở trung tâm, một cái bóng khổng lồ đang lay động.",
						"thai": "ถ้ำน้ำแข็งขนาดมหึมา ใจกลางมีเงาขนาดใหญ่ปรากฏขึ้น",
						"hindi": "एक विशाल बर्फ़ीली गुफ़ा। उसके केंद्र में, एक बड़ी छाया हिल रही थी।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…또다시 새로운 온기가 찾아왔군.",
						"english": "...Another new warmth has arrived.",
						"japanese": "…また新たな温もりが来たか。",
						"chinese": "……又有一股新的温暖降临了。",
						"french": "...Une nouvelle chaleur est à nouveau apparue.",
						"spanish": "...Otra nueva calidez ha llegado.",
						"vietnamese": "...Lại một hơi ấm mới đến nữa rồi.",
						"thai": "…ความอบอุ่นใหม่มาอีกแล้วสินะ",
						"hindi": "...फिर से एक नई गरमाहट आ गई है।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "네가… 이 모든 걸 반복시키는 주범인가?",
						"english": "Are you... the one orchestrating all this repetition?",
						"japanese": "お前が…この繰り返しを全て引き起こしている元凶なのか？",
						"chinese": "是你……造成了这一切的循环往复吗？",
						"french": "Es-tu... le responsable de toutes ces répétitions ?",
						"spanish": "¿Eres tú... el causante de toda esta repetición?",
						"vietnamese": "Ngươi... là kẻ chủ mưu gây ra tất cả sự lặp lại này sao?",
						"thai": "เจ้า... คือผู้บงการที่ทำให้ทุกสิ่งวนซ้ำไปมาหรือ?",
						"hindi": "क्या तुम... इन सब पुनरावृत्तियों के सूत्रधार हो?"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "나는 그저… 이 얼어붙은 세상의 섭리일 뿐.",
						"english": "I am merely... the providence of this frozen world.",
						"japanese": "私はただ…この凍りついた世界の摂理に過ぎない。",
						"chinese": "我不过是……这个冰封世界的法则而已。",
						"french": "Je ne suis que... la providence de ce monde gelé.",
						"spanish": "Solo soy... la providencia de este mundo congelado.",
						"vietnamese": "Ta chỉ là... quy luật của thế giới đóng băng này.",
						"thai": "ข้าก็แค่… ธรรมชาติตามกฎเกณฑ์ของโลกที่เยือกแข็งนี้เท่านั้น",
						"hindi": "मैं तो बस... इस जमे हुए संसार का विधान हूँ।"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "비켜! 우리가 이걸 끝낼 거야!",
						"english": "Get out of the way! We'll end this!",
						"japanese": "どけ！俺たちがこれを終わらせる！",
						"chinese": "让开！我们会结束这一切的！",
						"french": "Écarte-toi ! Nous allons y mettre fin !",
						"spanish": "¡Apártate! ¡Nosotros acabaremos con esto!",
						"vietnamese": "Tránh ra! Chúng ta sẽ kết thúc chuyện này!",
						"thai": "หลีกไป! เราจะหยุดเรื่องนี้เอง!",
						"hindi": "हट जाओ! हम इसे ख़त्म करेंगे!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…어리석은 것. 하나를 꺾는다고, 모든 반복이 멈출까?",
						"english": "...Foolish one. Do you think breaking one will stop all repetition?",
						"japanese": "…愚かな者め。一つを倒したところで、全ての繰り返しが止まるものか？",
						"chinese": "……愚蠢的家伙。你以为打败一个，就能阻止所有的循环吗？",
						"french": "...Stupide créature. Penses-tu qu'en brisant un, toutes les répétitions cesseront ?",
						"spanish": "...Estúpido. ¿Crees que al romper uno, toda repetición cesará?",
						"vietnamese": "...Kẻ ngốc. Ngươi nghĩ đánh bại một kẻ là có thể dừng tất cả sự lặp lại sao?",
						"thai": "…เจ้าช่างโง่เขลา การเอาชนะได้เพียงหนึ่ง จะหยุดยั้งการวนซ้ำทั้งหมดได้หรือ?",
						"hindi": "...मूर्ख। क्या एक को तोड़ने से, सारी पुनरावृत्ति रुक जाएगी?"
					},
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "자네의 절망은, 또 다른 시작이 될 뿐이다.",
						"english": "Your despair will only become another beginning.",
						"japanese": "お前の絶望は、また新たな始まりとなるだけだ。",
						"chinese": "你的绝望，只会成为另一个开端。",
						"french": "Ton désespoir ne sera qu'un autre début.",
						"spanish": "Tu desesperación solo se convertirá en otro comienzo.",
						"vietnamese": "Sự tuyệt vọng của ngươi, sẽ chỉ là một khởi đầu khác.",
						"thai": "ความสิ้นหวังของเจ้า จะเป็นเพียงแค่การเริ่มต้นใหม่อีกครั้งเท่านั้น",
						"hindi": "तुम्हारी निराशा, एक और नई शुरुआत ही बनेगी।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…뭐라고?",
						"english": "...What did you say?",
						"japanese": "…なんだって？",
						"chinese": "……你说什么？",
						"french": "...Qu'as-tu dit ?",
						"spanish": "¿...Qué dijiste?",
						"vietnamese": "...Ngươi nói gì cơ?",
						"thai": "…ว่าอะไรนะ?",
						"hindi": "...क्या कहा?"
					}
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "쓰러진 거대한 얼음 괴물. 그러나 숲은 더욱 깊은 침묵에 잠겼다. 이 모든 것이… 정말 끝난 걸까?",
						"english": "The gigantic ice monster falls. But the forest sinks into deeper silence. Is this truly the end?",
						"japanese": "倒れた巨大な氷の怪物。しかし森はより深い沈黙に包まれた。これで本当に…全て終わりなのだろうか？",
						"chinese": "巨大的冰怪倒下了。然而森林却陷入了更深的寂静。这一切…真的结束了吗？",
						"french": "Le gigantesque monstre de glace s'effondre. Mais la forêt s'enfonce dans un silence plus profond encore. Tout cela… est-ce vraiment la fin ?",
						"spanish": "El gigantesco monstruo de hielo cae. Pero el bosque se sumerge en un silencio aún más profundo. ¿Es esto… realmente el final?",
						"vietnamese": "Quái vật băng khổng lồ đã gục ngã. Nhưng khu rừng chìm vào sự tĩnh lặng sâu hơn nữa. Tất cả những điều này… có thực sự đã kết thúc chưa?",
						"thai": "สัตว์ประหลาดน้ำแข็งขนาดยักษ์ล้มลง แต่ป่ากลับตกอยู่ในความเงียบงันที่ลึกซึ้งยิ่งกว่าเดิม ทั้งหมดนี้... จบลงแล้วจริงหรือ?",
						"hindi": "विशालकाय बर्फीला राक्षस ढेर हो गया। लेकिन जंगल और भी गहरी खामोशी में डूब गया। क्या यह सब… वाकई खत्म हो गया है?"
					}
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "이 차가운 유혹에서 벗어날 수 없을 거다.",
						"english": "You won't escape this icy allure.",
						"japanese": "この冷たい誘惑からは逃れられないだろう。",
						"chinese": "你逃不出这冰冷的诱惑。",
						"french": "Tu n'échapperas pas à cette froide tentation.",
						"spanish": "No podrás escapar de esta gélida tentación.",
						"vietnamese": "Ngươi sẽ không thoát khỏi sự cám dỗ lạnh lẽo này đâu.",
						"thai": "เจ้าจะหนีไม่พ้นจากเสน่ห์อันเยือกเย็นนี้หรอก",
						"hindi": "तुम इस बर्फीले आकर्षण से बच नहीं पाओगे।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…아직이야. 아직 끝이 아니야!",
						"english": "...Not yet. It's not over yet!",
						"japanese": "…まだだ。まだ終わっていない！",
						"chinese": "……还没。还没结束！",
						"french": "…Pas encore. Ce n'est pas encore fini !",
						"spanish": "…Aún no. ¡Todavía no ha terminado!",
						"vietnamese": "...Chưa. Vẫn chưa kết thúc đâu!",
						"thai": "...ยัง. ยังไม่จบ!",
						"hindi": "…अभी नहीं। अभी खत्म नहीं हुआ है!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "다시 와라. 언제든, 기다리고 있을 테니.",
						"english": "Come back. I'll be waiting, anytime.",
						"japanese": "また来るがいい。いつでも、待っているからな。",
						"chinese": "再来吧。我随时都在等候。",
						"french": "Reviens. Je t'attendrai, n'importe quand.",
						"spanish": "Vuelve. Estaré esperando, cuando quieras.",
						"vietnamese": "Hãy quay lại. Bất cứ lúc nào, ta cũng sẽ chờ.",
						"thai": "กลับมาอีกครั้งสิ ไม่ว่าเมื่อไหร่ ฉันจะรอ",
						"hindi": "वापस आओ। कभी भी, मैं इंतज़ार करता रहूँगा।"
					},
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"끝없이 몰아치는 눈보라. 모든 길은 사라지고.",
			"낡은 천막 안, 이바르는 속삭였다. 차가운 유혹이 모든 것을 반복시킨다고.",
			"눈에 보이는 것이 전부가 아니었다. 진실은 반복되는 그림자 속에.",
			"다시, 끝없는 미로 속으로 발을 디딘다."
		],
		"english": [
			"Endless blizzard. All paths vanished.",
			"Inside the old tent, Ivar whispered. Cold temptation repeats everything.",
			"What met the eye wasn't everything. Truth lies in the repeating shadows.",
			"Again, I step into the endless labyrinth."
		],
		"japanese": [
			"終わりのない吹雪。全ての道は消え去り。",
			"古い天幕の中、イヴァルは囁いた。冷たい誘惑が全てを繰り返させると。",
			"目に見えるものが全てではなかった。真実は繰り返される影の中に。",
			"再び、終わりのない迷宮へと足を踏み入れる。"
		],
		"chinese": [
			"无尽的暴风雪。所有道路都已消失。",
			"在旧帐篷里，伊瓦尔低语道。冰冷的诱惑让一切重演。",
			"眼见并非一切。真相隐藏在重复的阴影中。",
			"再次，踏入无尽的迷宫。"
		],
		"french": [
			"Tempête de neige incessante. Tous les chemins ont disparu.",
			"À l'intérieur de la vieille tente, Ivar murmura. La froide tentation répète tout.",
			"Ce qui semblait n'était pas tout. La vérité se cache dans les ombres répétées.",
			"De nouveau, je m'enfonce dans le labyrinthe sans fin."
		],
		"spanish": [
			"Tormenta de nieve interminable. Todos los caminos desaparecieron.",
			"Dentro de la vieja tienda, Ivar susurró. La fría tentación lo repite todo.",
			"Lo que se veía no era todo. La verdad yace en las sombras que se repiten.",
			"De nuevo, me adentro en el laberinto interminable."
		],
		"vietnamese": [
			"Bão tuyết không ngừng. Mọi con đường đều biến mất.",
			"Bên trong căn lều cũ, Ivar thì thầm. Cám dỗ lạnh lẽo khiến mọi thứ lặp lại.",
			"Những gì nhìn thấy không phải là tất cả. Sự thật ẩn trong bóng tối lặp lại.",
			"Lại một lần nữa, tôi bước vào mê cung vô tận."
		],
		"thai": [
			"พายุหิมะไม่สิ้นสุด ทุกเส้นทางหายไป",
			"ภายในเต็นท์เก่า อิวาร์กระซิบ การล่อลวงอันเย็นชาทำให้ทุกสิ่งซ้ำรอย",
			"สิ่งที่เห็นไม่ใช่ทั้งหมด ความจริงอยู่ในเงาที่ซ้ำซ้อน",
			"อีกครั้ง ก้าวเข้าสู่เขาวงกตที่ไม่มีที่สิ้นสุด"
		],
		"hindi": [
			"अंतहीन बर्फीला तूफान। सभी रास्ते गायब हो गए।",
			"पुराने तम्बू के अंदर, इवार ने फुसफुसाया। ठंडी लालच सब कुछ दोहराती है।",
			"जो दिखता था, वह सब कुछ नहीं था। सच दोहराती हुई परछाइयों में है।",
			"फिर से, मैं अंतहीन भूलभुलैया में कदम रखता हूँ।"
		]
	}
} as const;
