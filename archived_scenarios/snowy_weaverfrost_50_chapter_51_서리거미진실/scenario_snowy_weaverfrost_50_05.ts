export const scenario_snowy_weaverfrost_50_05 = {
	"scenario_id": "snowy_weaverfrost_50_05",
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
		"pool_id": "pool_FateWeaver_Weaverfrost_V1"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "빙탑의 심장부. 거대한 얼음 결정들이 미로처럼 얽혀있다.",
						"english": "The heart of the Ice Spire. Giant ice crystals intertwine like a labyrinth.",
						"japanese": "氷の塔の心臓部。巨大な氷の結晶が迷路のように絡み合っている。",
						"chinese": "冰塔的心脏。巨大的冰晶如迷宫般缠绕。",
						"french": "Le cœur de la Flèche de Glace. De gigantesques cristaux de glace s'entrelacent comme un labyrinthe.",
						"spanish": "El corazón de la Aguja de Hielo. Enormes cristales de hielo se entrelazan como un laberinto.",
						"vietnamese": "Trung tâm Tháp Băng. Những tinh thể băng khổng lồ đan xen như một mê cung.",
						"thai": "ใจกลางหอคอยน้ำแข็ง ผลึกน้ำแข็งขนาดยักษ์พันกันยุ่งเหยิงราวกับเขาวงกต",
						"hindi": "बर्फ़ीले शिखर का हृदय। विशाल बर्फ़ के क्रिस्टल एक भूलभुलैया की तरह आपस में गुँथे हुए हैं।"
					}
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "inka",
					"action": "enter",
					"spot": [
						5,
						3
					]
				},
				{
					"content": {
						"korean": "…안 돼… 여기까지 오면 안 됐는데…",
						"english": "…No… I shouldn't have come this far…",
						"japanese": "…だめだ…ここまで来るべきじゃなかった…",
						"chinese": "…不…我不该来这里的…",
						"french": "…Non… Je n'aurais pas dû venir jusqu'ici…",
						"spanish": "…No… No debí haber llegado tan lejos…",
						"vietnamese": "…Không… Tôi không nên đến đây…",
						"thai": "…ไม่นะ… ฉันไม่ควรมาถึงที่นี่เลย…",
						"hindi": "…नहीं… मुझे इतना आगे नहीं आना चाहिए था…"
					},
					"speaker": "inka",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "인카! 당신… 대체 어떻게 여기에…",
						"english": "Inka! You… How on earth did you get here…",
						"japanese": "インカ！あなた…一体どうやってここに…",
						"chinese": "因卡！你…你怎么会在这里…",
						"french": "Inka ! Toi… Comment diable es-tu arrivée ici…",
						"spanish": "¡Inka! Tú… ¿Cómo demonios llegaste aquí…",
						"vietnamese": "Inka! Ngươi… Làm sao ngươi đến được đây…",
						"thai": "อินกา! คุณ… มาอยู่ที่นี่ได้ยังไงกัน…",
						"hindi": "इंखा! तुम… आख़िर तुम यहाँ कैसे आ गईं…"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "inka",
					"content": {
						"korean": "도망쳐… 그는… 그는 너희를 기다리고 있었어…",
						"english": "Run… He… He was waiting for you…",
						"japanese": "逃げろ… 彼が… 彼がお前たちを待っていたんだ…",
						"chinese": "快跑… 他… 他一直在等你们…",
						"french": "Fuyez… Il… Il vous attendait…",
						"spanish": "Huye… Él… Él os estaba esperando…",
						"vietnamese": "Chạy đi… Hắn… Hắn đã đợi các ngươi…",
						"thai": "หนีไป… เขา… เขารอพวกเธออยู่…",
						"hindi": "भागो… वह… वह तुम्हारा इंतज़ार कर रहा था…"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "인카는 거대한 수정 거미줄에 묶여있었다. 마치 살아있는 실처럼 섬뜩하게 빛났다.",
						"english": "Inka was bound by a giant crystal web, shimmering eerily like living threads.",
						"japanese": "インカは巨大な水晶の蜘蛛の巣に縛られていた。まるで生きている糸のように不気味に輝いていた。",
						"chinese": "因卡被巨大的水晶蛛网束缚，像活着的丝线般诡异地闪耀着。",
						"french": "Inka était ligotée par une gigantesque toile de cristal, luisante étrangement comme des fils vivants.",
						"spanish": "Inka estaba atada por una gigantesca telaraña de cristal, que brillaba inquietantemente como hilos vivos.",
						"vietnamese": "Inka bị trói bởi mạng nhện pha lê khổng lồ, phát sáng kỳ dị như những sợi chỉ sống.",
						"thai": "อินกาถูกมัดด้วยใยแมงมุมคริสตัลขนาดยักษ์ ส่องประกายแปลกๆ ราวกับเส้นด้ายมีชีวิต",
						"hindi": "इंखा एक विशाल क्रिस्टल के जाल में बंधी थी, जो जीवित धागों की तरह डरावनी चमक रहा था।"
					},
					"speaker": "narrator"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"action": "enter",
					"speaker": "inka",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "오랜 기다림이었다. 운명의 실타래가 너희를 이끌었군.",
						"english": "It has been a long wait. The threads of fate have led you here.",
						"japanese": "長きにわたる待機だった。運命の糸がお前たちを導いたのだな。",
						"chinese": "漫长的等待。命运的丝线将你们引到了这里。",
						"french": "L'attente fut longue. Les fils du destin vous ont menés ici.",
						"spanish": "Ha sido una larga espera. Los hilos del destino os han traído hasta aquí.",
						"vietnamese": "Đã đợi rất lâu rồi. Sợi chỉ định mệnh đã dẫn các ngươi đến đây.",
						"thai": "เป็นการรอคอยที่ยาวนาน เส้นด้ายแห่งโชคชะตานำพาพวกเจ้ามาที่นี่",
						"hindi": "यह एक लंबा इंतज़ार था। नियति के धागों ने तुम्हें यहाँ पहुँचाया है।"
					},
					"speaker": "boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "네가… 그 끔찍한 실종 사건들의 원흉인가!",
						"english": "You… are you the mastermind behind those horrific disappearances!",
						"japanese": "お前が… あの恐ろしい失踪事件の元凶なのか！",
						"chinese": "你… 你就是那些可怕失踪事件的幕后黑手吗！",
						"french": "Toi… es-tu le cerveau derrière ces horribles disparitions !",
						"spanish": "Tú… ¡¿Eres el cerebro detrás de esas horribles desapariciones?!",
						"vietnamese": "Ngươi… ngươi là kẻ chủ mưu đằng sau những vụ mất tích kinh hoàng đó sao!",
						"thai": "แก… แกคือต้นเหตุของการหายตัวไปอย่างน่ากลัวเหล่านั้นใช่ไหม!",
						"hindi": "तुम… क्या तुम उन भयानक लापता होने की घटनाओं के पीछे का मास्टरमाइंड हो!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "그는… 희생자들의 고통을… 영원히 자신의 직물로 만들어…",
						"english": "He… forever weaves the victims' suffering… into his tapestry…",
						"japanese": "彼は… 犠牲者たちの苦痛を… 永遠に自分の織物へと変える…",
						"chinese": "他… 永远将受害者的痛苦… 编织进他的挂毯…",
						"french": "Il… tisse pour toujours la souffrance des victimes… dans sa tapisserie…",
						"spanish": "Él… teje para siempre el sufrimiento de las víctimas… en su tapiz…",
						"vietnamese": "Hắn… mãi mãi dệt nỗi đau của nạn nhân… vào tấm thảm của mình…",
						"thai": "เขา… ถักทอความทุกข์ทรมานของเหยื่อ… ลงในผืนผ้าของเขาชั่วนิรันดร์…",
						"hindi": "वह… पीड़ितों के दर्द को हमेशा के लिए… अपनी बुनाई में बुनता है…"
					},
					"speaker": "inka",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "곧 너희도 나의 아름다운 무늬가 될 것이다. 고통은 찰나일 뿐.",
						"english": "Soon, you too shall become a part of my beautiful pattern. Pain is but a moment.",
						"japanese": "お前たちもすぐに私の美しい模様となるだろう。苦痛は刹那に過ぎない。",
						"chinese": "很快，你们也会成为我美丽图案的一部分。痛苦只是转瞬即逝。",
						"french": "Bientôt, vous aussi ferez partie de mon magnifique motif. La douleur n'est qu'un instant.",
						"spanish": "Pronto, vosotros también seréis parte de mi hermoso patrón. El dolor es solo un instante.",
						"vietnamese": "Chẳng mấy chốc, các ngươi cũng sẽ trở thành một phần của hoa văn tuyệt đẹp của ta. Đau đớn chỉ là nhất thời.",
						"thai": "ในไม่ช้า พวกเจ้าก็จะกลายเป็นส่วนหนึ่งของลวดลายอันงดงามของข้า ความเจ็บปวดเป็นเพียงชั่วครู่เท่านั้น",
						"hindi": "जल्द ही, तुम भी मेरे सुंदर पैटर्न का हिस्सा बन जाओगे। दर्द बस एक पल का है।"
					},
					"speaker": "boss",
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						3
					],
					"speaker": "inka",
					"action": "enter"
				},
				{
					"content": {
						"korean": "나는 태초부터 있었다. 운명을 직조하고, 생명을 얼려왔지.",
						"english": "I have existed since the beginning. Weaving destinies, freezing lives.",
						"japanese": "私は太古から存在していた。運命を織り、生命を凍らせてきた。",
						"chinese": "我自太初便已存在。编织命运，冻结生命。",
						"french": "J'existe depuis le début. Tissant les destins, gelant les vies.",
						"spanish": "He existido desde el principio. Tejiendo destinos, congelando vidas.",
						"vietnamese": "Ta đã tồn tại từ thuở ban sơ. Dệt nên vận mệnh, đóng băng sinh mệnh.",
						"thai": "ข้ามีอยู่ตั้งแต่แรกเริ่ม ถักทอโชคชะตา แช่แข็งชีวิต",
						"hindi": "मैं शुरुआत से ही अस्तित्व में हूँ। नियति बुन रहा हूँ, जीवन को जमा रहा हूँ।"
					},
					"speaker": "boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "말도 안 돼… 그 거대한 빙탑이 살아있는 괴물이었다니!",
						"english": "Unbelievable... That colossal ice spire was a living monster!",
						"japanese": "信じられない…あの巨大な氷の塔が生きている怪物だったなんて！",
						"chinese": "难以置信……那座巨大的冰塔竟是一个活生生的怪物！",
						"french": "Incroyable... Cette tour de glace colossale était un monstre vivant !",
						"spanish": "¡Increíble... Esa colosal aguja de hielo era un monstruo viviente!",
						"vietnamese": "Không thể tin được... Tòa tháp băng khổng lồ đó lại là một con quái vật sống!",
						"thai": "ไม่น่าเชื่อ... หอคอยน้ำแข็งมหึมานั่นเป็นสัตว์ประหลาดที่มีชีวิต!",
						"hindi": "अविश्वसनीय... वह विशाल बर्फीला शिखर एक जीवित राक्षस था!"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "그는… 영원히 혼자였을 거야… 그래서 모두를 자기 곁에 두려 해…",
						"english": "He must have been... alone forever... That's why he wants to keep everyone by his side...",
						"japanese": "彼は…永遠に一人だったのだろう…だから、皆を自分のそばに置こうとする…",
						"chinese": "他一定…永远都是孤独的吧…所以才想把所有人都留在身边…",
						"french": "Il a dû être... seul pour toujours... C'est pourquoi il veut garder tout le monde à ses côtés...",
						"spanish": "Él debe haber estado... solo para siempre... Por eso quiere mantener a todos a su lado...",
						"vietnamese": "Hắn chắc là... cô độc mãi mãi... Nên hắn muốn giữ tất cả mọi người bên cạnh...",
						"thai": "เขาคงจะ... โดดเดี่ยวตลอดไป... นั่นเป็นเหตุผลที่เขาต้องการเก็บทุกคนไว้ข้างกาย...",
						"hindi": "वह... हमेशा अकेला रहा होगा... इसलिए वह सबको अपने पास रखना चाहता है..."
					},
					"speaker": "inka"
				},
				{
					"speaker": "boss",
					"content": {
						"korean": "고독은 끝났다. 너희가 나의 영원한 직물을 완성할 것이다.",
						"english": "Loneliness ends. You will complete my eternal tapestry.",
						"japanese": "孤独は終わる。お前たちが私の永遠の織物を完成させるだろう。",
						"chinese": "孤独结束了。你们将完成我的永恒织锦。",
						"french": "La solitude prend fin. Vous achèverez ma tapisserie éternelle.",
						"spanish": "La soledad termina. Vosotros completaréis mi tapiz eterno.",
						"vietnamese": "Sự cô độc đã chấm dứt. Các ngươi sẽ hoàn thành tấm thảm vĩnh cửu của ta.",
						"thai": "ความโดดเดี่ยวสิ้นสุดลงแล้ว พวกเจ้าจะสานต่อผืนผ้าแห่งนิรันดร์ของข้า",
						"hindi": "अकेलापन समाप्त हुआ। तुम मेरी शाश्वत बुनाई पूरी करोगे।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"speaker": "inka",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "어리석은 필멸자들. 너희 운명은 이미 내 거미줄에 쓰여 있다.",
						"english": "Foolish mortals. Your fate is already woven into my web.",
						"japanese": "愚かなる定命の者たちよ。お前たちの運命は既に私の蜘蛛の巣に書かれている。",
						"chinese": "愚蠢的凡人。你们的命运早已铭刻在我的蛛网之中。",
						"french": "Mortels insensés. Votre destin est déjà tissé dans ma toile.",
						"spanish": "Mortales necios. Vuestro destino ya está tejido en mi telaraña.",
						"vietnamese": "Lũ phàm trần ngu ngốc. Số phận của các ngươi đã được dệt vào mạng nhện của ta rồi.",
						"thai": "เจ้าพวกมนุษย์โง่เขลา ชะตากรรมของพวกเจ้าถูกถักทออยู่ในใยแมงมุมของข้าแล้ว",
						"hindi": "मूर्ख नश्वर। तुम्हारी नियति पहले ही मेरे जाल में बुनी जा चुकी है।"
					},
					"speaker": "boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "우리가 운명을 바꿀 것이다! 여기서 널 끝장내겠어!",
						"english": "We will change our fate! We'll end you here!",
						"japanese": "俺たちが運命を変える！ここで貴様を終わらせてやる！",
						"chinese": "我们将改变命运！就在这里终结你！",
						"french": "Nous changerons notre destin ! Nous allons t'achever ici !",
						"spanish": "¡Cambiaremos nuestro destino! ¡Acabaremos contigo aquí!",
						"vietnamese": "Chúng ta sẽ thay đổi số phận! Ta sẽ kết liễu ngươi tại đây!",
						"thai": "เราจะเปลี่ยนชะตากรรม! เราจะจัดการแกที่นี่!",
						"hindi": "हम अपनी नियति बदलेंगे! तुम्हें यहीं खत्म कर देंगे!"
					}
				},
				{
					"speaker": "inka",
					"content": {
						"korean": "안 돼… 그의 힘은… 너무 거대해… 돌이킬 수 없을 거야…",
						"english": "No... his power... it's too immense... it can't be undone...",
						"japanese": "だめだ…彼の力は…あまりにも巨大だ…取り返しのつかないことに…",
						"chinese": "不…他的力量…太过强大…无法逆转了…",
						"french": "Non... son pouvoir... est trop immense... ça ne peut pas être défait...",
						"spanish": "No... su poder... es demasiado inmenso... no se puede deshacer...",
						"vietnamese": "Không... sức mạnh của hắn... quá kinh khủng... không thể cứu vãn được...",
						"thai": "ไม่นะ... พลังของเขา... มันมหึมาเกินไป... ไม่สามารถย้อนคืนได้...",
						"hindi": "नहीं... उसकी शक्ति... बहुत विशाल है... इसे पूर्ववत नहीं किया जा सकता..."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "저항은 무의미하다. 너희도 곧 아름다운 조각상이 될 뿐.",
						"english": "Resistance is futile. You too will soon become beautiful statues.",
						"japanese": "抵抗は無意味だ。お前たちもじきに美しい彫像となるだろう。",
						"chinese": "抵抗是徒劳的。你们也很快会变成美丽的雕像。",
						"french": "Toute résistance est futile. Vous aussi deviendrez bientôt de belles statues.",
						"spanish": "La resistencia es inútil. Vosotros también os convertiréis pronto en hermosas estatuas.",
						"vietnamese": "Sự kháng cự là vô nghĩa. Các ngươi cũng sẽ sớm trở thành những bức tượng đẹp đẽ mà thôi.",
						"thai": "การต่อต้านไร้ประโยชน์ พวกเจ้าเองก็จะกลายเป็นรูปปั้นที่สวยงามในไม่ช้า",
						"hindi": "प्रतिरोध व्यर्थ है। तुम भी जल्द ही खूबसूरत मूर्तियाँ बन जाओगे।"
					},
					"speaker": "boss"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "어리석은 자… 네가 끊은 것은… 그저 한 가닥의 실일 뿐… 거대한 직물은 계속된다…",
						"english": "Foolish one… What you severed… was merely a single thread… The grand tapestry continues…",
						"japanese": "愚か者め… お前が断ち切ったのは… ただの一本の糸に過ぎぬ… 巨大な織物は続く…",
						"chinese": "愚蠢的家伙… 你斩断的… 仅仅是一根线… 宏伟的织锦仍在继续…",
						"french": "Insensé… Ce que tu as rompu… n'était qu'un simple fil… La grande tapisserie continue…",
						"spanish": "Necio… Lo que cortaste… fue solo un hilo… El gran tapiz continúa…",
						"vietnamese": "Kẻ ngốc… Điều ngươi cắt đứt… chỉ là một sợi chỉ… Tấm thảm lớn vẫn tiếp tục…",
						"thai": "เจ้าโง่… สิ่งที่เจ้าตัดขาด… เป็นเพียงเส้นด้ายเส้นเดียว… ผืนผ้าอันยิ่งใหญ่ยังคงดำเนินต่อไป…",
						"hindi": "मूर्ख... तुमने जो तोड़ा... वह केवल एक धागा था... विशाल बुनाई जारी है..."
					},
					"speaker": "boss",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "거미줄은 끊어졌다. 네 운명도 여기서 끝이야.",
						"english": "The web is broken. Your fate ends here.",
						"japanese": "蜘蛛の巣は断ち切られた。お前の運命もここで終わりだ。",
						"chinese": "蜘蛛网被切断了。你的命运也到此为止。",
						"french": "La toile est brisée. Ton destin s'achève ici.",
						"spanish": "La telaraña está rota. Tu destino termina aquí.",
						"vietnamese": "Mạng nhện đã đứt. Vận mệnh của ngươi cũng kết thúc tại đây.",
						"thai": "ใยแมงมุมขาดสะบั้นแล้ว ชะตาของเจ้าก็จบลงที่นี่",
						"hindi": "जाल टूट गया। तुम्हारा भाग्य यहीं समाप्त होता है।"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "거대한 빙탑이 무너지며, 오랫동안 갇혔던 영혼들이 자유를 찾았다.",
						"english": "The colossal ice tower crumbled, and long-imprisoned souls found freedom.",
						"japanese": "巨大な氷の塔が崩れ落ち、長く囚われていた魂たちが自由を見つけた。",
						"chinese": "巨大的冰塔崩塌，长期被困的灵魂获得了自由。",
						"french": "L'énorme tour de glace s'effondra, et les âmes longtemps emprisonnées trouvèrent la liberté.",
						"spanish": "La colosal torre de hielo se derrumbó, y las almas largamente encarceladas encontraron la libertad.",
						"vietnamese": "Tháp băng khổng lồ sụp đổ, và những linh hồn bị giam cầm lâu ngày đã tìm thấy tự do.",
						"thai": "หอคอยน้ำแข็งมหึมาพังทลายลง และวิญญาณที่ถูกจองจำมานานก็ได้พบอิสรภาพ",
						"hindi": "विशाल बर्फ का टॉवर ढह गया, और लंबे समय से कैद आत्माओं को स्वतंत्रता मिली।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "하지만 설원의 차가운 공기는 여전히 무언가를 속삭이는 듯했다.",
						"english": "Yet the cold air of the snowfield still seemed to whisper something.",
						"japanese": "しかし、雪原の冷たい空気は、まるで何かを囁いているようだった。",
						"chinese": "然而，雪原的冷空气似乎仍在低语着什么。",
						"french": "Pourtant, l'air froid du champ de neige semblait toujours murmurer quelque chose.",
						"spanish": "Sin embargo, el aire frío del campo nevado aún parecía susurrar algo.",
						"vietnamese": "Tuy nhiên, không khí lạnh giá của cánh đồng tuyết vẫn dường như đang thì thầm điều gì đó.",
						"thai": "ทว่า อากาศอันเย็นยะเยือกของทุ่งหิมะก็ยังคงกระซิบกระซาบอะไรบางอย่าง",
						"hindi": "फिर भी, बर्फ के मैदान की ठंडी हवा अभी भी कुछ फुसफुसा रही थी।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "겨우 이 정도인가. 너희도 결국 내 직물의 일부가 될 뿐.",
						"english": "Is that all? You too will merely become part of my tapestry.",
						"japanese": "たったこれだけか。お前たちも結局、私の織物の一部になるだけだ。",
						"chinese": "就这点本事吗？你们最终也只会成为我织锦的一部分。",
						"french": "N'est-ce que ça ? Vous aussi finirez par faire partie de ma tapisserie.",
						"spanish": "¿Eso es todo? Vosotros también os convertiréis en parte de mi tapiz.",
						"vietnamese": "Chỉ có vậy thôi sao? Cuối cùng các ngươi cũng chỉ trở thành một phần của tấm thảm của ta.",
						"thai": "แค่นี้เองรึ? พวกเจ้าก็แค่จะกลายเป็นส่วนหนึ่งของผืนผ้าของข้าเท่านั้น",
						"hindi": "बस इतना ही? तुम भी मेरी बुनाई का हिस्सा बन जाओगे।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "크윽… 여기서 끝낼 순 없어… 다시 돌아온다…!",
						"english": "Ugh… I can't end it here… I'll be back…!",
						"japanese": "くっ… ここで終わらせるわけにはいかない… また戻ってくる…！",
						"chinese": "呃… 不能在这里结束… 我会回来的…！",
						"french": "Argh… Je ne peux pas en finir ici… Je reviendrai… !",
						"spanish": "Ugh… No puedo acabar aquí… ¡Volveré…!",
						"vietnamese": "Khụ… Không thể kết thúc ở đây được… Ta sẽ quay lại…!",
						"thai": "อึก… ข้าจะจบที่นี่ไม่ได้… ข้าจะกลับมา…!",
						"hindi": "उफ़... मैं इसे यहीं खत्म नहीं कर सकता... मैं वापस आऊंगा...!"
					}
				}
			],
			"id": 15,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "빙탑의 껍질이 벗겨졌다. 그 안에서 거대한 수정 서리 거미가 모습을 드러냈다.",
						"english": "The ice spire's shell peeled away. From within, a colossal Crystal Frost Spider emerged.",
						"japanese": "氷の塔の殻が剥がれ落ちた。その中から、巨大な水晶の霜蜘蛛が現れた。",
						"chinese": "冰塔的外壳剥落了。从中露出了一个巨大的水晶霜蜘蛛。",
						"french": "La carapace de la tour de glace s'est détachée. De l'intérieur, une araignée de givre de cristal colossale a émergé.",
						"spanish": "La cáscara de la aguja de hielo se desprendió. De su interior, emergió una colosal Araña de Escarcha de Cristal.",
						"vietnamese": "Vỏ bọc của tháp băng bong ra. Từ bên trong, một con Nhện Sương Pha Lê khổng lồ lộ diện.",
						"thai": "เปลือกของหอคอยน้ำแข็งลอกออก ภายในเผยให้เห็นแมงมุมน้ำแข็งคริสตัลขนาดยักษ์",
						"hindi": "बर्फ़ के शिखर का खोल उतर गया। उसके भीतर से एक विशाल क्रिस्टल फ्रॉस्ट स्पाइडर प्रकट हुआ।"
					},
					"speaker": "narrator"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						5,
						3
					],
					"action": "enter",
					"speaker": "inka"
				},
				{
					"speaker": "boss",
					"content": {
						"korean": "마침내… 내 진정한 모습 앞에서 무릎 꿇어라.",
						"english": "Finally... kneel before my true form.",
						"japanese": "ついに…私の真の姿の前でひざまずけ。",
						"chinese": "终于…在我的真实形态面前跪下吧。",
						"french": "Enfin... agenouillez-vous devant ma véritable forme.",
						"spanish": "Finalmente... arrodillaos ante mi verdadera forma.",
						"vietnamese": "Cuối cùng... hãy quỳ gối trước hình dạng thật của ta.",
						"thai": "ในที่สุด... จงคุกเข่าต่อหน้าตัวตนที่แท้จริงของข้า",
						"hindi": "अंततः... मेरे सच्चे रूप के सामने घुटने टेक दो।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "으아악… 저게… 저게 진짜 모습이었어…! 우리는 모두… 그의 실타래였어…",
						"english": "Aargh... That... that was his true form...! We were all... his threads...",
						"japanese": "うわぁ…あれが…あれが本当の姿だったのか…！我々は皆…彼の糸だったのか…",
						"chinese": "啊啊啊…那…那就是他真正的样子…！我们所有人…都只是他的线团…",
						"french": "Aaaah... C'était... c'était sa vraie forme... ! Nous étions tous... ses fils...",
						"spanish": "¡Aaargh... Eso... esa era su verdadera forma...! ¡Todos éramos... sus hilos...",
						"vietnamese": "Á à... Đó... đó là hình dạng thật của hắn...! Chúng ta tất cả... đều là những sợi chỉ của hắn...",
						"thai": "อ้าก... นั่น... นั่นคือร่างที่แท้จริงของเขา...! พวกเราทุกคน... เป็นเพียงใยของเขา...",
						"hindi": "आह... वह... वह उसका असली रूप था...! हम सब... उसके धागे थे..."
					},
					"speaker": "inka"
				},
				{
					"content": {
						"korean": "운명의 직조자…! 네 놈을 여기서 끝내겠다!",
						"english": "Weaver of Fate…! I'll end you here!",
						"japanese": "運命の織り手…！ ここでお前を終わらせる！",
						"chinese": "命运编织者…！ 我会在这里终结你！",
						"french": "Tisserand du destin… ! Je vais t'achever ici !",
						"spanish": "Tejedor del Destino…! ¡Te acabaré aquí!",
						"vietnamese": "Kẻ dệt vận mệnh…! Ta sẽ kết liễu ngươi tại đây!",
						"thai": "ผู้ทอแห่งโชคชะตา…! ข้าจะจบเจ้าที่นี่!",
						"hindi": "भाग्य के बुनकर...! मैं तुम्हें यहीं खत्म कर दूंगा!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "가만히 있으렴… 곧 너도 나의 영원한 직물의 일부가 될 테니.",
						"english": "Hold still… Soon, you too will be part of my eternal tapestry.",
						"japanese": "おとなしくしていろ… お前もすぐに私の永遠の織物の一部となるだろう。",
						"chinese": "安静点… 很快，你也会成为我永恒织锦的一部分。",
						"french": "Reste tranquille… Bientôt, toi aussi feras partie de ma tapisserie éternelle.",
						"spanish": "Quédate quieto… Pronto, tú también serás parte de mi eterno tapiz.",
						"vietnamese": "Hãy đứng yên… Chẳng mấy chốc, ngươi cũng sẽ trở thành một phần của tấm thảm vĩnh cửu của ta.",
						"thai": "อยู่นิ่งๆ… อีกไม่นาน เจ้าก็จะกลายเป็นส่วนหนึ่งของผืนผ้าอันเป็นนิรันดร์ของข้า",
						"hindi": "शांत रहो... जल्द ही, तुम भी मेरी शाश्वत बुनाई का हिस्सा बन जाओगे।"
					},
					"speaker": "boss",
					"emotion": "base",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"설원 깊은 곳, 얼어붙은 빙탑의 심장.",
			"그곳에서 인카를 다시 만났다.",
			"하지만 그녀는 이미 거대한 거미줄에 묶인 채였다.",
			"빙탑의 껍질이 벗겨지고, 진실이 모습을 드러냈다.",
			"운명의 직조자, 위버프로스트. 드디어 베일을 벗는 순간."
		],
		"english": [
			"Deep in the snowfield, at the heart of the frozen icicle tower.",
			"There, I met Inca again.",
			"But she was already bound by a colossal spiderweb.",
			"The icicle tower's shell peeled away, revealing the truth.",
			"Weaverfrost, the Weaver of Fate. The moment of unveiling finally arrived."
		],
		"japanese": [
			"雪原の奥深く、凍てつく氷の塔の心臓部。",
			"そこで、私は再びインカと出会った。",
			"しかし、彼女はすでに巨大な蜘蛛の巣に囚われていた。",
			"氷の塔の殻が剥がれ落ち、真実が姿を現した。",
			"運命の織り手、ウィーバーフロスト。ついにベールを脱ぐ瞬間。"
		],
		"chinese": [
			"雪原深处，冰冻尖塔的核心。",
			"在那里，我再次遇见了印卡。",
			"但她已经被巨大的蜘蛛网束缚。",
			"冰尖塔的外壳剥落，真相显露无疑。",
			"命运织造者，织霜者。终于揭开面纱的时刻。"
		],
		"french": [
			"Au plus profond de la plaine enneigée, au cœur de la tour de glace figée.",
			"Là, j'ai rencontré Inca à nouveau.",
			"Mais elle était déjà ligotée par une toile d'araignée colossale.",
			"La carapace de la tour de glace s'est détachée, révélant la vérité.",
			"Tisserandegivre, la Tisserande du Destin. Le moment du dévoilement est enfin arrivé."
		],
		"spanish": [
			"En lo profundo del campo nevado, en el corazón de la torre de carámbanos congelados.",
			"Allí, me encontré con Inca de nuevo.",
			"Pero ella ya estaba atada por una telaraña colosal.",
			"La capa de la torre de carámbanos se desprendió, revelando la verdad.",
			"Tejedorahelada, la Tejedora del Destino. El momento del desvelamiento finalmente llegó."
		],
		"vietnamese": [
			"Sâu trong cánh đồng tuyết, tại trái tim của ngọn tháp băng giá.",
			"Tại đó, tôi đã gặp lại Inca.",
			"Nhưng cô ấy đã bị trói buộc bởi một mạng nhện khổng lồ.",
			"Vỏ của ngọn tháp băng bong ra, sự thật dần lộ diện.",
			"Weaverfrost, Người dệt vận mệnh. Khoảnh khắc vén màn cuối cùng đã đến."
		],
		"thai": [
			"ลึกเข้าไปในทุ่งหิมะ ณ ใจกลางหอคอยน้ำแข็งที่เยือกแข็ง",
			"ที่นั่น ฉันได้พบอินคาอีกครั้ง",
			"แต่เธอกลับถูกพันธนาการด้วยใยแมงมุมมหึมาแล้ว",
			"เปลือกของหอคอยน้ำแข็งลอกออก เผยให้เห็นความจริง",
			"วีเวอร์ฟรอสต์ ผู้ถักทอโชคชะตา ในที่สุดช่วงเวลาแห่งการเปิดเผยก็มาถึง"
		],
		"hindi": [
			"बर्फ़ीले मैदान की गहराई में, जमी हुई बर्फीली मीनार के हृदय में।",
			"वहां, मैं इन्का से फिर मिला।",
			"लेकिन वह पहले से ही एक विशाल मकड़जाल में बंधी हुई थी।",
			"बर्फीली मीनार का खोल हट गया, सच सामने आ गया।",
			"वीवरफ्रॉस्ट, भाग्य की बुनकर। अनावरण का क्षण आखिरकार आ गया।"
		]
	},
	"epilogue": {
		"korean": [
			"거대한 빙탑이 녹아내리자, 설원은 잠시 평화를 되찾았다.",
			"하지만 사라진 이들은 돌아오지 않았다. 그들의 흔적만이 차가운 공기 속에 남았다.",
			"위버프로스트는 쓰러졌다. 그러나 끊어진 실들은 여전히 어딘가로 이어지는 듯했다.",
			"구원이었을까? 아니면 또 다른 침해의 시작이었을까?",
			"얼어붙은 고독은 그렇게 쉬이 사라지지 않았다."
		],
		"english": [
			"As the colossal icicle tower melted, the snowfield briefly regained peace.",
			"But those who vanished did not return. Only their traces remained in the cold air.",
			"Weaverfrost fell. But the severed threads still seemed to lead somewhere.",
			"Was it salvation? Or the beginning of yet another encroachment?",
			"The frozen solitude did not vanish so easily."
		],
		"japanese": [
			"巨大な氷の塔が溶け落ちると、雪原はしばし平和を取り戻した。",
			"しかし、消え去った者たちは戻らなかった。彼らの痕跡だけが冷たい空気の中に残された。",
			"ウィーバーフロストは倒れた。しかし、断ち切られた糸はまだどこかへと繋がっているようだった。",
			"それは救済だったのだろうか？ それとも、また別の侵略の始まりだったのだろうか？",
			"凍てつく孤独はそう簡単には消え去らなかった。"
		],
		"chinese": [
			"当巨大的冰尖塔融化时，雪原短暂地恢复了平静。",
			"但那些消失的人并未归来。只有他们的痕迹留在冰冷的空气中。",
			"织霜者倒下了。但断裂的丝线似乎仍然通向某个地方。",
			"这是救赎吗？ 抑或是另一次侵犯的开始？",
			"冰冷的孤独并未如此轻易地消散。"
		],
		"french": [
			"Alors que la colossale tour de glace fondait, la plaine enneigée retrouva brièvement la paix.",
			"Mais ceux qui avaient disparu ne sont pas revenus. Seules leurs traces sont restées dans l'air froid.",
			"Tisserandegivre est tombée. Mais les fils coupés semblaient toujours mener quelque part.",
			"Était-ce le salut ? Ou le début d'une autre incursion ?",
			"La solitude gelée ne disparut pas si facilement."
		],
		"spanish": [
			"Cuando la colosal torre de carámbanos se derritió, el campo nevado recuperó brevemente la paz.",
			"Pero aquellos que desaparecieron no regresaron. Solo sus huellas permanecieron en el aire frío.",
			"Tejedorahelada cayó. Pero los hilos cortados aún parecían conducir a algún lugar.",
			"¿Fue la salvación? ¿O el comienzo de otra invasión?",
			"La soledad congelada no se desvaneció tan fácilmente."
		],
		"vietnamese": [
			"Khi ngọn tháp băng khổng lồ tan chảy, cánh đồng tuyết tạm thời tìm lại được bình yên.",
			"Nhưng những người đã biến mất không trở lại. Chỉ còn lại dấu vết của họ trong không khí lạnh giá.",
			"Weaverfrost đã gục ngã. Nhưng những sợi chỉ bị cắt đứt dường như vẫn dẫn đến một nơi nào đó.",
			"Đó có phải là sự cứu rỗi? Hay là sự khởi đầu của một cuộc xâm phạm khác?",
			"Sự cô độc băng giá không dễ dàng biến mất như vậy."
		],
		"thai": [
			"เมื่อหอคอยน้ำแข็งมหึมาละลาย ทุ่งหิมะก็กลับมาสงบสุขชั่วขณะ",
			"แต่ผู้ที่หายไปไม่ได้กลับมา มีเพียงร่องรอยของพวกเขาที่ยังคงอยู่ในอากาศที่หนาวเย็น",
			"วีเวอร์ฟรอสต์ล้มลง แต่เส้นด้ายที่ขาดสะบั้นก็ยังคงดูเหมือนจะนำไปสู่ที่ใดที่หนึ่ง",
			"มันคือการช่วยให้รอดพ้นงั้นหรือ? หรือเป็นการเริ่มต้นของการรุกล้ำอีกครั้งหนึ่งกันแน่?",
			"ความโดดเดี่ยวที่เยือกแข็งไม่ได้หายไปง่ายๆ"
		],
		"hindi": [
			"जैसे ही विशाल बर्फीली मीनार पिघल गई, बर्फीले मैदान को कुछ समय के लिए शांति मिल गई।",
			"लेकिन जो लोग गायब हो गए थे, वे वापस नहीं आए। केवल उनके निशान ठंडी हवा में रह गए।",
			"वीवरफ्रॉस्ट गिर गया। लेकिन कटे हुए धागे अभी भी कहीं न कहीं ले जाते हुए लग रहे थे।",
			"क्या यह मुक्ति थी? या एक और अतिक्रमण की शुरुआत?",
			"जमी हुई एकाकीपन इतनी आसानी से गायब नहीं हुई।"
		]
	}
} as const;
