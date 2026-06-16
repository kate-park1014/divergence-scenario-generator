export const scenario_snowy_skuld_32_04 = {
	"scenario_id": "snowy_skuld_32_04",
	"order": 4,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"hild": {
			"id": "mon_6f20c96a-bf07-4aae-b37c-da898a8336e8",
			"name": {
				"korean": "힐드",
				"english": "Hild",
				"japanese": "ヒルド",
				"chinese": "希尔德",
				"french": "Hild",
				"spanish": "Hild",
				"vietnamese": "Hild",
				"thai": "ฮิลด์",
				"hindi": "हिल्ड"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/722a86fd-2903-4688-3f04-db8241ed0e00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/af3d96ba-e571-4132-fede-cd415bd15c00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"세계수는 룬에 갇힌 기억을 보였다.",
			"파도를 가르던 영광, 북해의 심장 스쿌드.",
			"그 끝에 드리운 그림자는… 부서진 뱃머리였다.",
			"누군가 이 비극을 예감하고 있었다."
		],
		"english": [
			"The World Tree revealed memories trapped in runes.",
			"The glory that cut through waves, Skjold, heart of the North Sea.",
			"The shadow cast at its end... a shattered prow.",
			"Someone had foreseen this tragedy."
		],
		"japanese": [
			"世界樹はルーンに囚われた記憶を見せた。",
			"波を切り裂く栄光、北海の心臓スコールド。",
			"その果てに垂れ込めた影は…砕けた船首だった。",
			"誰かがこの悲劇を予感していた。"
		],
		"chinese": [
			"世界树展示了被符文囚禁的记忆。",
			"劈波斩浪的荣光，北海之心斯考德。",
			"而其末端笼罩的阴影…是破碎的船首。",
			"某人预感到了这场悲剧。"
		],
		"french": [
			"L'Arbre-Monde révéla des souvenirs piégés dans les runes.",
			"La gloire qui fendait les vagues, Skjold, cœur de la Mer du Nord.",
			"L'ombre projetée à sa fin... une proue brisée.",
			"Quelqu'un avait pressenti cette tragédie."
		],
		"spanish": [
			"El Árbol del Mundo reveló recuerdos atrapados en las runas.",
			"La gloria que surcaba las olas, Skjold, corazón del Mar del Norte.",
			"La sombra que se cernía al final… era una proa rota.",
			"Alguien había presentido esta tragedia."
		],
		"vietnamese": [
			"Cây Thế Giới hé lộ những ký ức bị giam cầm trong các rune.",
			"Vinh quang xé toạc sóng biển, Skjold, trái tim Biển Bắc.",
			"Bóng tối phủ xuống cuối cùng… là mũi thuyền vỡ nát.",
			"Ai đó đã linh cảm được bi kịch này."
		],
		"thai": [
			"ต้นไม้โลกเผยความทรงจำที่ถูกกักขังในรูน",
			"ความรุ่งโรจน์ที่ผ่าคลื่น, สกยูลด์, หัวใจแห่งทะเลเหนือ",
			"เงาที่ปกคลุมจุดจบนั้น...คือหัวเรือที่แตกหัก",
			"มีใครบางคนล่วงรู้ถึงโศกนาฏกรรมนี้"
		],
		"hindi": [
			"विश्व वृक्ष ने रनों में फंसी यादें दिखाईं।",
			"लहरों को चीरती महिमा, स्क्योल्ड, उत्तरी सागर का हृदय।",
			"उसके अंत पर पड़ी परछाई... एक टूटा हुआ जहाज का अगला हिस्सा था।",
			"किसी को इस त्रासदी का पूर्वाभास हो गया था।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "빙하 벽면의 룬이 희미하게 빛났다. 옛 항해의 영광이 새겨져 있었다.",
						"english": "The runes on the glacier wall glowed faintly. The glory of an ancient voyage was etched there.",
						"japanese": "氷河の壁面のルーンがかすかに光った。古き航海の栄光が刻まれていた。",
						"chinese": "冰川墙壁上的符文微弱地闪烁着。古老航行的荣耀被铭刻其上。",
						"french": "Les runes sur la paroi glaciaire brillaient faiblement. La gloire d'une ancienne navigation y était gravée.",
						"spanish": "Las runas en la pared del glaciar brillaban débilmente. La gloria de una antigua travesía estaba grabada allí.",
						"vietnamese": "Các rune trên tường băng mờ ảo phát sáng. Vinh quang của một chuyến hải trình cổ xưa được khắc ghi.",
						"thai": "รูนบนกำแพงน้ำแข็งเรืองรองจางๆ ความรุ่งโรจน์ของการเดินเรือในอดีตถูกจารึกไว้",
						"hindi": "ग्लेशियर की दीवार पर लगे रुन हल्के से चमक रहे थे। एक प्राचीन यात्रा की महिमा वहाँ खुदी हुई थी।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "이 룬… 배의 이야기인가?",
						"english": "These runes... are they a ship's story?",
						"japanese": "このルーン…船の物語か？",
						"chinese": "这些符文…是船的故事吗？",
						"french": "Ces runes... racontent-elles l'histoire d'un navire ?",
						"spanish": "Estas runas… ¿son la historia de un barco?",
						"vietnamese": "Các rune này… là câu chuyện của một con thuyền sao?",
						"thai": "รูนเหล่านี้...เรื่องราวของเรือหรือ?",
						"hindi": "ये रुन… क्या ये एक जहाज की कहानी है?"
					},
					"type": "speech"
				},
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "hild"
				},
				{
					"speaker": "hild",
					"emotion": "base",
					"content": {
						"korean": "전장에서 스러진 이들의 맹세가 느껴져.",
						"english": "I feel the vows of those who fell in battle.",
						"japanese": "戦場で散った者たちの誓いが感じられる。",
						"chinese": "我能感受到那些在战场上倒下之人的誓言。",
						"french": "Je ressens les serments de ceux tombés au combat.",
						"spanish": "Siento los juramentos de quienes cayeron en batalla.",
						"vietnamese": "Ta cảm nhận được lời thề của những người đã ngã xuống trên chiến trường.",
						"thai": "สัมผัสได้ถึงคำสาบานของผู้ที่ล้มตายในสนามรบ",
						"hindi": "मैं युद्ध में गिरे हुए लोगों की कसमों को महसूस कर रहा हूँ।"
					},
					"type": "speech"
				},
				{
					"speaker": "hild",
					"emotion": "base",
					"content": {
						"korean": "가장 앞에서, 파도를 가르며 나아가던 배.",
						"english": "The ship that advanced at the forefront, cutting through waves.",
						"japanese": "最前線で、波を切り裂き進んでいった船。",
						"chinese": "冲锋在前，劈波斩浪的船。",
						"french": "Le navire qui avançait en première ligne, fendant les vagues.",
						"spanish": "El barco que avanzaba al frente, cortando las olas.",
						"vietnamese": "Con thuyền dẫn đầu, xé toạc sóng biển mà tiến lên.",
						"thai": "เรือที่นำหน้าสุด ทะลวงคลื่นไปข้างหน้า",
						"hindi": "सबसे आगे, लहरों को चीरते हुए आगे बढ़ता जहाज।"
					},
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "hild",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "영광스러운 척후선… 그 긍지가 여기까지 전해져.",
						"english": "A glorious scout ship... its pride reaches all the way here.",
						"japanese": "栄光ある斥候船…その誇りがここまで伝わってくる。",
						"chinese": "光荣的侦察船…它的骄傲至今仍能感受到。",
						"french": "Un glorieux navire éclaireur... sa fierté se ressent jusqu'ici.",
						"spanish": "Una gloriosa nave exploradora… su orgullo llega hasta aquí.",
						"vietnamese": "Một chiến hạm trinh sát lừng lẫy… niềm kiêu hãnh của nó vẫn còn lan tỏa đến đây.",
						"thai": "เรือลาดตระเวนอันรุ่งโรจน์...ความภาคภูมิใจนั้นส่งมาถึงที่นี่",
						"hindi": "एक शानदार टोही जहाज… उसका गौरव यहाँ तक महसूस हो रहा है।"
					},
					"speaker": "hild"
				},
				{
					"content": {
						"korean": "정말 대단했나 보네.",
						"english": "It must have been truly magnificent.",
						"japanese": "本当にすごかったんだね。",
						"chinese": "看样子真的很了不起。",
						"french": "Ça devait être vraiment incroyable.",
						"spanish": "Debió ser realmente grandioso.",
						"vietnamese": "Chắc hẳn nó đã rất tuyệt vời.",
						"thai": "คงจะยอดเยี่ยมมากจริงๆ",
						"hindi": "यह वास्तव में शानदार रहा होगा।"
					},
					"type": "speech",
					"emotion": "happy",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "…그러나, 모든 영광 뒤엔 그림자가 따르는 법.",
						"english": "...Yet, every glory casts its shadow.",
						"japanese": "...しかし、すべての栄光の裏には影がつきものだ。",
						"chinese": "...然而，每份荣耀背后，皆有阴影相随。",
						"french": "...Cependant, toute gloire a son ombre.",
						"spanish": "...Sin embargo, tras toda gloria, una sombra la sigue.",
						"vietnamese": "...Thế nhưng, đằng sau mọi vinh quang, luôn có bóng tối theo sau.",
						"thai": "...ทว่า เบื้องหลังความรุ่งโรจน์ ล้วนมีเงามืดแฝงอยู่.",
						"hindi": "...किंतु, हर विजय के पीछे एक परछाई अवश्य आती है।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "hild"
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
					"speaker": "hild",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "hild",
					"type": "speech",
					"content": {
						"korean": "보여… 빛나는 환영 끝에 어른거리는 부서진 뱃머리가.",
						"english": "I see... a fractured prow, lurking at the edge of the shining vision.",
						"japanese": "見える…輝く幻の果てに、おぼろげに揺らめく、砕けた船首が。",
						"chinese": "我看到了… 在璀璨幻象的尽头，那若隐若现的，是破碎的船头。",
						"french": "Je vois... une étrave brisée, flottant à la fin de cette vision lumineuse.",
						"spanish": "Veo... una proa destrozada que se asoma al final de la brillante ilusión.",
						"vietnamese": "Ta thấy... một mũi thuyền vỡ nát lờ mờ hiện ra ở cuối ảo ảnh rực rỡ.",
						"thai": "ข้าเห็น... หัวเรือหักพัง ลอยเลือนอยู่ ณ ปลายสุดแห่งมายาอันพร่างพราย.",
						"hindi": "मैं देखता हूँ... चमकते भ्रम के अंत में, एक टूटा हुआ जहाज का अगला हिस्सा दिख रहा है।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "부서진 뱃머리?",
						"english": "A fractured prow?",
						"japanese": "砕けた船首？",
						"chinese": "破碎的船头？",
						"french": "Une étrave brisée ?",
						"spanish": "¿Una proa destrozada?",
						"vietnamese": "Mũi thuyền vỡ nát sao?",
						"thai": "หัวเรือที่แตกหัก?",
						"hindi": "टूटा हुआ अग्रभाग?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이 빛나는 이야기의 끝은… 비극이야. 난 그게 느껴져.",
						"english": "The climax of this glorious saga... is tragedy. I feel it.",
						"japanese": "この輝く物語の終わりは…悲劇だ。それが分かる。",
						"chinese": "这个光辉故事的结局…是悲剧。我能感受到。",
						"french": "La fin de cette éclatante histoire... est une tragédie. Je le ressens.",
						"spanish": "El final de esta luminosa historia... es una tragedia. Lo presiento.",
						"vietnamese": "Kết thúc của câu chuyện huy hoàng này… là một bi kịch. Ta cảm nhận được điều đó.",
						"thai": "จุดจบของเรื่องราวอันรุ่งโรจน์นี้... คือโศกนาฏกรรม ข้ารู้สึกได้.",
						"hindi": "इस शानदार कहानी का अंत... एक दुखद घटना है। मैं इसे महसूस कर रहा हूँ।"
					},
					"speaker": "hild"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "설마…",
						"english": "Surely not...",
						"japanese": "まさか…",
						"chinese": "不会吧…",
						"french": "Non...?",
						"spanish": "¿No me digas...?",
						"vietnamese": "Chẳng lẽ...",
						"thai": "ไม่นะ...",
						"hindi": "कहीं ऐसा तो नहीं कि..."
					},
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "hild"
				},
				{
					"speaker": "hild",
					"type": "speech",
					"content": {
						"korean": "빙하가 흔들려. 이 영광을 거부하는 것처럼.",
						"english": "The glacier quakes, as if denying this glory.",
						"japanese": "氷河が揺れる。この栄光を拒むかのように。",
						"chinese": "冰川在摇晃。仿佛拒绝这份荣耀。",
						"french": "Le glacier vacille. Comme s'il rejetait cette gloire.",
						"spanish": "El glaciar se estremece. Como si negara esta gloria.",
						"vietnamese": "Băng hà rung chuyển. Như thể đang từ chối vinh quang này.",
						"thai": "ธารน้ำแข็งสั่นคลอน. ราวกับปฏิเสธซึ่งความรุ่งโรจน์นี้.",
						"hindi": "हिमनद हिल रहा है। मानो इस गौरव को नकार रहा हो।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "점점 더 심해지는 것 같아.",
						"english": "It seems to be worsening.",
						"japanese": "どんどんひどくなっているようだ。",
						"chinese": "情况似乎越来越糟了。",
						"french": "Ça s'aggrave de plus en plus, semble-t-il.",
						"spanish": "Parece que está empeorando.",
						"vietnamese": "Dường như ngày càng trở nên nghiêm trọng.",
						"thai": "ดูเหมือนจะหนักขึ้นเรื่อยๆ.",
						"hindi": "यह और गंभीर होता जा रहा है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "돌아가. 이 이상은… 너무 큰 대가를 치를 거야.",
						"english": "Turn back. Any further... will demand too high a price.",
						"japanese": "引き返せ。これ以上は…あまりにも大きな代償を払うことになる。",
						"chinese": "回去。再往前…代价会太大。",
						"french": "Fais demi-tour. Plus loin... le prix sera trop lourd à payer.",
						"spanish": "Regresa. Más allá de aquí... el precio será demasiado grande.",
						"vietnamese": "Quay về đi. Đi tiếp... sẽ phải trả một cái giá quá đắt.",
						"thai": "ถอยกลับไป. เกินกว่านี้... จะต้องแลกมาด้วยราคาที่สูงลิ่ว.",
						"hindi": "लौट जाओ। इससे आगे... बहुत बड़ी कीमत चुकानी पड़ेगी।"
					},
					"speaker": "hild"
				},
				{
					"type": "speech",
					"content": {
						"korean": "우린 멈출 수 없어. 진실을 봐야 해.",
						"english": "We cannot stop. The truth must be seen.",
						"japanese": "私たちは止まれない。真実を見るべきだ。",
						"chinese": "我们不能停。必须看到真相。",
						"french": "Nous ne pouvons pas nous arrêter. Il faut voir la vérité.",
						"spanish": "No podemos parar. Debemos ver la verdad.",
						"vietnamese": "Chúng ta không thể dừng lại. Phải nhìn thấy sự thật.",
						"thai": "เราหยุดไม่ได้. เราต้องเห็นความจริงให้ได้.",
						"hindi": "हम रुक नहीं सकते। हमें सच्चाई देखनी होगी।"
					},
					"emotion": "base",
					"speaker": "character_any"
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
						"korean": "영광의 환영 끝, 정체 모를 그림자가 길을 막아섰다.",
						"english": "At the edge of the glorious vision, an unknown shadow barred the path.",
						"japanese": "栄光の幻の果て、正体不明の影が道を阻んだ。",
						"chinese": "在荣耀幻象的尽头，一道不明的阴影挡住了去路。",
						"french": "Au terme de la vision de gloire, une ombre inconnue barra le passage.",
						"spanish": "Al final de la ilusión de la gloria, una sombra desconocida bloqueó el paso.",
						"vietnamese": "Ở cuối ảo ảnh vinh quang, một bóng tối vô danh đã chắn lối.",
						"thai": "ที่ปลายสุดแห่งมายาอันรุ่งโรจน์, เงามืดปริศนาได้ขวางทาง.",
						"hindi": "गौरव के भ्रम के अंत में, एक अज्ञात छाया ने मार्ग अवरुद्ध कर दिया।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "다가오지 마라. 이 배의 운명을 더럽히지 마.",
						"english": "Don't come near. Don't taint this ship's fate.",
						"japanese": "近づくな。この船の運命を汚すな。",
						"chinese": "别过来。别玷污这艘船的命运。",
						"french": "Ne t'approche pas. Ne souille pas le destin de ce navire.",
						"spanish": "No te acerques. No manches el destino de este barco.",
						"vietnamese": "Đừng lại gần. Đừng vấy bẩn vận mệnh con tàu này.",
						"thai": "อย่าเข้ามาใกล้ อย่าแปดเปื้อนชะตากรรมของเรือลำนี้",
						"hindi": "पास मत आओ। इस जहाज़ के भाग्य को अपवित्र मत करो।"
					}
				},
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "hild",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "hild",
					"type": "speech",
					"content": {
						"korean": "이곳에 흐르는 비극이… 더 깊어지는구나.",
						"english": "The tragedy flowing here... deepens.",
						"japanese": "ここに流れる悲劇が…さらに深まる。",
						"chinese": "这里流淌的悲剧……更深了。",
						"french": "La tragédie qui coule ici... s'approfondit.",
						"spanish": "La tragedia que fluye aquí... se profundiza.",
						"vietnamese": "Bi kịch chảy nơi đây… càng thêm sâu sắc.",
						"thai": "โศกนาฏกรรมที่ไหลเวียนอยู่ที่นี่... ช่างลึกซึ้งยิ่งนัก",
						"hindi": "यहाँ बह रही त्रासदी... और गहरी हो रही है।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "비켜. 우린 진실을 알아야 해!",
						"english": "Move aside. We must know the truth!",
						"japanese": "どけ。我々は真実を知らなければならない！",
						"chinese": "让开。我们必须知道真相！",
						"french": "Écarte-toi. Nous devons savoir la vérité !",
						"spanish": "Apártate. ¡Debemos saber la verdad!",
						"vietnamese": "Tránh ra. Chúng ta phải biết sự thật!",
						"thai": "ถอยไป เราต้องรู้ความจริง!",
						"hindi": "हट जाओ। हमें सच्चाई जाननी होगी!"
					}
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…부서진 뱃머리… 모든 것을 보여줄 것이다.",
						"english": "...The broken bow... will reveal everything.",
						"japanese": "…壊れた船首…全てを明らかにするだろう。",
						"chinese": "……破碎的船首……将揭示一切。",
						"french": "...La proue brisée... révélera tout.",
						"spanish": "...La proa rota... lo revelará todo.",
						"vietnamese": "...Mũi tàu vỡ nát... sẽ tiết lộ mọi thứ.",
						"thai": "...หัวเรือที่พังทลาย... จะเปิดเผยทุกสิ่ง",
						"hindi": "...टूटा हुआ धनुष... सब कुछ दिखाएगा।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "대체 뭘 말하는 거야!",
						"english": "What in the world are you talking about!",
						"japanese": "一体何を言っているんだ！",
						"chinese": "你到底在说什么！",
						"french": "De quoi parles-tu donc !",
						"spanish": "¡¿De qué demonios estás hablando?!",
						"vietnamese": "Rốt cuộc là ngươi đang nói gì vậy!",
						"thai": "คุณกำลังพูดถึงอะไรกันแน่!",
						"hindi": "तुम क्या बात कर रहे हो!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "쓰러진 자의 마지막 말은 파괴된 배의 운명을 예고했다.",
						"english": "The fallen one's last words foretold the destroyed ship's fate.",
						"japanese": "倒れた者の最後の言葉は、破壊された船の運命を予言した。",
						"chinese": "倒下者的最后遗言预示了被毁船只的命运。",
						"french": "Les derniers mots du vaincu ont prédit le destin du navire détruit.",
						"spanish": "Las últimas palabras del caído predijeron el destino del barco destruido.",
						"vietnamese": "Lời cuối của người ngã xuống đã báo trước vận mệnh con tàu bị phá hủy.",
						"thai": "คำพูดสุดท้ายของผู้ที่ล้มลง ได้ทำนายชะตากรรมของเรือที่ถูกทำลาย",
						"hindi": "गिरे हुए व्यक्ति के अंतिम शब्दों ने नष्ट हुए जहाज़ के भाग्य का अनुमान लगाया।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "영광의 환영은 끝났지만, 비극은 이제 시작이었다.",
						"english": "The illusion of glory ended, but the tragedy had just begun.",
						"japanese": "栄光の幻影は終わったが、悲劇は今始まったばかりだった。",
						"chinese": "荣耀的幻象已结束，但悲剧才刚刚开始。",
						"french": "L'illusion de la gloire était terminée, mais la tragédie ne faisait que commencer.",
						"spanish": "La ilusión de la gloria terminó, pero la tragedia apenas comenzaba.",
						"vietnamese": "Ảo ảnh vinh quang đã kết thúc, nhưng bi kịch chỉ mới bắt đầu.",
						"thai": "ภาพลวงตาแห่งความรุ่งโรจน์สิ้นสุดลงแล้ว แต่โศกนาฏกรรมเพิ่งจะเริ่มต้นขึ้น",
						"hindi": "गौरव का भ्रम समाप्त हो गया, लेकिन त्रासदी अभी शुरू हुई थी।"
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "너희 또한 부서진 뱃머리의 운명을 피할 수 없을 것이다.",
						"english": "You too cannot escape the fate of the broken bow.",
						"japanese": "お前たちもまた、壊れた船首の運命から逃れることはできないだろう。",
						"chinese": "你们也无法逃脱破碎船首的命运。",
						"french": "Vous aussi, vous ne pourrez échapper au destin de la proue brisée.",
						"spanish": "Vosotros tampoco podréis escapar al destino de la proa rota.",
						"vietnamese": "Các ngươi cũng không thể thoát khỏi vận mệnh của mũi tàu vỡ nát.",
						"thai": "พวกเจ้าก็ไม่อาจหนีพ้นชะตากรรมของหัวเรือที่พังทลายได้เช่นกัน",
						"hindi": "तुम भी टूटे हुए धनुष के भाग्य से बच नहीं पाओगे।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "아직 끝나지 않았어… 우린 절대 포기하지 않아!",
						"english": "It's not over yet... We will never give up!",
						"japanese": "まだ終わっていない…我々は決して諦めない！",
						"chinese": "还没结束……我们绝不放弃！",
						"french": "Ce n'est pas encore fini... Nous n'abandonnerons jamais !",
						"spanish": "Todavía no ha terminado... ¡Nunca nos rendiremos!",
						"vietnamese": "Chưa kết thúc đâu… Chúng ta sẽ không bao giờ bỏ cuộc!",
						"thai": "ยังไม่จบ... เราจะไม่มีวันยอมแพ้!",
						"hindi": "अभी खत्म नहीं हुआ है... हम कभी हार नहीं मानेंगे!"
					},
					"type": "speech"
				}
			]
		}
	]
} as const;
