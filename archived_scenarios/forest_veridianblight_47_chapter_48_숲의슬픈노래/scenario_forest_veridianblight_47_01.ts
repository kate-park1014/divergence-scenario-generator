export const scenario_forest_veridianblight_47_01 = {
	"scenario_id": "forest_veridianblight_47_01",
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
			"숲, 베리디안. 전설이 잠든 곳.",
			"길 잃은 자를 구원한다는 속삭임.",
			"그러나 그 이면엔… 잔혹한 진실이 숨어 있었다.",
			"알 수 없는 불안감이 숲을 감쌌다."
		],
		"english": [
			"Veridian Forest. Where legends sleep.",
			"A whisper of salvation for the lost.",
			"But beneath it all… a cruel truth lay hidden.",
			"An unknown unease enveloped the forest."
		],
		"japanese": [
			"森、ベリディアン。伝説が眠る場所。",
			"迷いし者を救うという囁き。",
			"しかしその裏には…残酷な真実が隠されていた。",
			"知られざる不安が森を包んだ。"
		],
		"chinese": [
			"森林，维里迪安。传说沉睡之地。",
			"救赎迷失者的低语。",
			"然而其背后…隐藏着残酷的真相。",
			"一种莫名的不安笼罩着森林。"
		],
		"french": [
			"Forêt de Veridian. Là où les légendes sommeillent.",
			"Un murmure de salut pour les égarés.",
			"Mais derrière cela… une vérité cruelle se cachait.",
			"Une inquiétude inconnue enveloppait la forêt."
		],
		"spanish": [
			"Bosque Veridiano. Donde las leyendas duermen.",
			"Un susurro de salvación para los perdidos.",
			"Pero detrás de eso… una cruel verdad se ocultaba.",
			"Una inquietud desconocida envolvía el bosque."
		],
		"vietnamese": [
			"Rừng Veridian. Nơi huyền thoại ngủ yên.",
			"Lời thì thầm cứu rỗi những kẻ lạc lối.",
			"Nhưng đằng sau đó… một sự thật tàn khốc ẩn giấu.",
			"Một sự bất an không rõ bao trùm khu rừng."
		],
		"thai": [
			"ป่าเวอริเดียน. ที่ซึ่งตำนานหลับใหล.",
			"เสียงกระซิบแห่งการช่วยชีวิตผู้หลงทาง.",
			"แต่เบื้องหลังนั้น… มีความจริงอันโหดร้ายซ่อนอยู่.",
			"ความไม่สบายใจที่อธิบายไม่ได้ปกคลุมป่า."
		],
		"hindi": [
			"वेरिडियन वन। जहाँ किंवदंतियाँ सोती हैं।",
			"भटके हुए लोगों के लिए मुक्ति की फुसफुसाहट।",
			"लेकिन इसके पीछे… एक क्रूर सत्य छिपा था।",
			"एक अज्ञात बेचैनी ने जंगल को घेर लिया।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "베리디안 숲 입구. 짙은 안개가 길을 집어삼켰다.",
						"english": "Veridian Forest entrance. Thick fog swallowed the path.",
						"japanese": "ベリディアン森の入口。濃い霧が道を飲み込んだ。",
						"chinese": "维里迪安森林入口。浓雾吞噬了道路。",
						"french": "Entrée de la forêt de Veridian. Un brouillard épais a englouti le chemin.",
						"spanish": "Entrada al Bosque Veridiano. Una densa niebla engulló el camino.",
						"vietnamese": "Lối vào Rừng Veridian. Sương mù dày đặc nuốt chửng con đường.",
						"thai": "ทางเข้าป่าเวอริเดียน. หมอกหนาทึบกลืนกินเส้นทาง.",
						"hindi": "वेरिडियन वन का प्रवेश द्वार। घने कोहरे ने रास्ता निगल लिया।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "생각보다… 음침한데.",
						"english": "It's… gloomier than I expected.",
						"japanese": "思ったより…陰気だな。",
						"chinese": "比想象中…还要阴森。",
						"french": "C'est… plus sinistre que prévu.",
						"spanish": "Es… más sombrío de lo que esperaba.",
						"vietnamese": "Thật… u ám hơn tôi nghĩ.",
						"thai": "มัน… มืดมนกว่าที่คิดไว้.",
						"hindi": "यह… जितना सोचा था, उससे ज़्यादा阴沉 है।"
					}
				},
				{
					"action": "enter",
					"speaker": "bracken",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "bracken",
					"content": {
						"korean": "여기까지 온 건가. 어리석은 인간들.",
						"english": "So you've come this far. Foolish humans.",
						"japanese": "ここまで来たか。愚かな人間たちめ。",
						"chinese": "竟然走到这里了。愚蠢的人类。",
						"french": "Vous êtes venus jusqu'ici. Humains stupides.",
						"spanish": "Así que habéis llegado hasta aquí. Humanos estúpidos.",
						"vietnamese": "Ngươi đã đến tận đây sao. Loài người ngu ngốc.",
						"thai": "มาถึงนี่แล้วรึ. มนุษย์โง่เขลา.",
						"hindi": "तुम इतनी दूर आ गए। मूर्ख मनुष्य।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "누구지?",
						"english": "Who's there?",
						"japanese": "誰だ？",
						"chinese": "是谁？",
						"french": "Qui est là ?",
						"spanish": "¿Quién anda ahí?",
						"vietnamese": "Ai đó?",
						"thai": "ใครน่ะ?",
						"hindi": "कौन हो?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "숲의 경고자, 브라켄이다.",
						"english": "I am Bracken, the Forest Warden.",
						"japanese": "森の警告者、ブラッケンだ。",
						"chinese": "我是森林警卫，布莱肯。",
						"french": "Je suis Bracken, le gardien de la forêt.",
						"spanish": "Soy Bracken, el Guardián del Bosque.",
						"vietnamese": "Ta là Bracken, người cảnh báo của rừng.",
						"thai": "ข้าคือแบรคเคน ผู้เฝ้าระวังแห่งป่า.",
						"hindi": "मैं ब्रैकेन हूँ, वन का रखवाला।"
					},
					"speaker": "bracken",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "bracken",
					"content": {
						"korean": "저 빛에 이끌려 왔겠지. '숲의 여인이 구원한다'는 소문에.",
						"english": "Drawn by that light, no doubt. By rumors of the 'Forest Lady's salvation'.",
						"japanese": "あの光に誘われて来たのだろう。『森の乙女が救う』という噂に。",
						"chinese": "是被那光芒吸引来的吧。被‘森林女神能带来救赎’的传闻。",
						"french": "Attirés par cette lumière, sans doute. Par les rumeurs de 'salvation de la Dame de la Forêt'.",
						"spanish": "Atraídos por esa luz, sin duda. Por los rumores de la 'salvación de la Dama del Bosque'.",
						"vietnamese": "Bị ánh sáng đó thu hút đến, không nghi ngờ gì. Bởi tin đồn về 'sự cứu rỗi của Nữ thần Rừng'.",
						"thai": "คงถูกดึงดูดมาด้วยแสงนั้น. ด้วยข่าวลือเรื่อง 'การช่วยชีวิตของสตรีแห่งป่า'.",
						"hindi": "निश्चित रूप से उस प्रकाश से आकर्षित हुए होगे। 'वन की देवी की मुक्ति' की अफवाहों से।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "그게… 거짓인가?",
						"english": "Is that... a lie?",
						"japanese": "それは…偽りなのか？",
						"chinese": "那是…谎言吗？",
						"french": "Est-ce... un mensonge ?",
						"spanish": "¿Es eso... una mentira?",
						"vietnamese": "Đó có phải... là dối trá không?",
						"thai": "นั่น... คือเรื่องโกหกงั้นเหรอ?",
						"hindi": "क्या वह... झूठ है?"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "bracken",
					"content": {
						"korean": "이 숲은… 잃어버린 것을 돌려주지 않아. 그저, 자신의 일부로 만들 뿐.",
						"english": "This forest... doesn't return what's lost. It merely makes it a part of itself.",
						"japanese": "この森は…失くしたものを返さない。ただ、己の一部にするだけだ。",
						"chinese": "这片森林…不会归还失落之物。它只会将其化为自身的一部分。",
						"french": "Cette forêt... ne rend pas ce qui est perdu. Elle le fait simplement sien.",
						"spanish": "Este bosque... no devuelve lo perdido. Simplemente lo hace parte de sí mismo.",
						"vietnamese": "Rừng này... không trả lại những gì đã mất. Nó chỉ biến chúng thành một phần của chính nó.",
						"thai": "ป่านี้... ไม่คืนสิ่งที่หายไป มันแค่ทำให้เป็นส่วนหนึ่งของมันเท่านั้น",
						"hindi": "यह जंगल... खोई हुई चीज़ें वापस नहीं करता। यह बस उन्हें अपना हिस्सा बना लेता है।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "저 멀리 빛나는 유혹의 불빛. 너를 집어삼킬 거다.",
						"english": "That alluring light shining in the distance. It will devour you.",
						"japanese": "遠くで輝く誘惑の灯り。それはお前を飲み込むだろう。",
						"chinese": "远处闪耀的诱惑之光。它会吞噬你。",
						"french": "Cette lumière tentatrice brillant au loin. Elle te dévorera.",
						"spanish": "Esa luz tentadora que brilla a lo lejos. Te devorará.",
						"vietnamese": "Ánh sáng quyến rũ lấp lánh đằng xa. Nó sẽ nuốt chửng ngươi.",
						"thai": "แสงล่อลวงที่ส่องประกายอยู่ไกลๆ นั่นจะกลืนกินเจ้า",
						"hindi": "दूर चमकती वह मोहक रोशनी। वह तुम्हें निगल जाएगी।"
					},
					"speaker": "bracken"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "bracken",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						2
					]
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "bracken",
					"content": {
						"korean": "아직도 미련한 짓을 하는군.",
						"english": "Still doing foolish things.",
						"japanese": "まだ愚かなことをしているな。",
						"chinese": "还在做蠢事啊。",
						"french": "Tu continues de faire des bêtises.",
						"spanish": "Todavía haciendo tonterías.",
						"vietnamese": "Ngươi vẫn còn làm những điều ngu ngốc.",
						"thai": "ยังคงทำเรื่องโง่ๆ อยู่สินะ",
						"hindi": "अभी भी मूर्खतापूर्ण हरकतें कर रहे हो।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "진실을 말해줘. 숲의 여인은 누구야?",
						"english": "Tell me the truth. Who is the lady of the forest?",
						"japanese": "真実を教えてくれ。森の淑女は誰だ？",
						"chinese": "告诉我真相。森林女士是谁？",
						"french": "Dis-moi la vérité. Qui est la dame de la forêt ?",
						"spanish": "Dime la verdad. ¿Quién es la dama del bosque?",
						"vietnamese": "Hãy nói cho ta sự thật. Ai là người phụ nữ của rừng?",
						"thai": "บอกความจริงมา ใครคือนางแห่งป่า?",
						"hindi": "मुझे सच बताओ। जंगल की देवी कौन है?"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"speaker": "bracken",
					"content": {
						"korean": "이 숲에는… 슬픈 전설이 전해져. 오래전 부족의 이야기.",
						"english": "In this forest... a sad legend is told. A tale of an ancient tribe.",
						"japanese": "この森には…悲しい伝説が伝わっている。古の部族の物語だ。",
						"chinese": "这片森林里…流传着一个悲伤的传说。一个关于古老部落的故事。",
						"french": "Dans cette forêt... une triste légende est racontée. L'histoire d'une ancienne tribu.",
						"spanish": "En este bosque... se cuenta una triste leyenda. La historia de una antigua tribu.",
						"vietnamese": "Trong khu rừng này... một truyền thuyết buồn được kể lại. Câu chuyện về một bộ tộc cổ xưa.",
						"thai": "ในป่านี้... มีตำนานเศร้าเล่าขาน เรื่องราวของชนเผ่าโบราณ",
						"hindi": "इस जंगल में... एक दुखद किंवदंती सुनाई जाती है। एक प्राचीन जनजाति की कहानी।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "bracken",
					"content": {
						"korean": "가끔… 노랫소리가 들려. 아름답지만, 듣는 이를 재우는.",
						"english": "Sometimes... I hear a song. Beautiful, but it lulls the listener to sleep.",
						"japanese": "時々…歌声が聞こえる。美しいが、聞く者を眠らせる。",
						"chinese": "有时…能听到歌声。美丽，却让人昏睡。",
						"french": "Parfois... j'entends un chant. Magnifique, mais il endort celui qui l'écoute.",
						"spanish": "A veces... se oye una canción. Hermosa, pero adormece a quien la escucha.",
						"vietnamese": "Đôi khi... ta nghe thấy một bài hát. Tuyệt đẹp, nhưng nó ru người nghe vào giấc ngủ.",
						"thai": "บางครั้ง... ฉันได้ยินเสียงเพลง ไพเราะ แต่ก็ทำให้ผู้ฟังหลับใหล",
						"hindi": "कभी-कभी... एक गीत सुनाई देता है। सुंदर, लेकिन सुनने वाले को सुला देता है।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "노랫소리?",
						"english": "A song?",
						"japanese": "歌声？",
						"chinese": "歌声？",
						"french": "Un chant ?",
						"spanish": "¿Una canción?",
						"vietnamese": "Một bài hát?",
						"thai": "เสียงเพลง?",
						"hindi": "एक गीत?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "bracken",
					"content": {
						"korean": "잊고 싶었던 죄책감을 자극하는 소리. 너도 곧 듣게 될 거다.",
						"english": "A sound that stirs up forgotten guilt. You'll hear it soon too.",
						"japanese": "忘れたかった罪悪感を刺激する音。お前もすぐに聞くことになるだろう。",
						"chinese": "一个唤起你遗忘的罪恶感的声音。你很快也会听到。",
						"french": "Un son qui réveille la culpabilité oubliée. Tu l'entendras bientôt toi aussi.",
						"spanish": "Un sonido que despierta la culpa olvidada. Tú también lo escucharás pronto.",
						"vietnamese": "Một âm thanh khuấy động cảm giác tội lỗi đã bị lãng quên. Ngươi cũng sẽ sớm nghe thấy nó.",
						"thai": "เสียงที่กระตุ้นความรู้สึกผิดที่อยากจะลืม ไม่นานเจ้าก็จะได้ยินมัน",
						"hindi": "एक आवाज़ जो भूली हुई अपराधबोध को जगाती है। तुम भी जल्द ही इसे सुनोगे।"
					},
					"emotion": "sad"
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
						2
					],
					"speaker": "bracken",
					"action": "enter"
				},
				{
					"emotion": "base",
					"speaker": "bracken",
					"content": {
						"korean": "숲은 모든 것을 기억한다. 너의 죄까지도.",
						"english": "The forest remembers everything. Even your sins.",
						"japanese": "森はすべてを覚えている。お前の罪さえも。",
						"chinese": "森林记住了一切。甚至你的罪孽。",
						"french": "La forêt se souvient de tout. Même de tes péchés.",
						"spanish": "El bosque lo recuerda todo. Incluso tus pecados.",
						"vietnamese": "Rừng nhớ tất cả mọi thứ. Kể cả tội lỗi của ngươi.",
						"thai": "ป่าจำทุกสิ่งได้ แม้กระทั่งบาปของเจ้า",
						"hindi": "जंगल सब कुछ याद रखता है। तुम्हारे पापों को भी।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "내가 무슨 죄를 지었다는 거지?",
						"english": "What sin have I committed?",
						"japanese": "私が何の罪を犯したというのか？",
						"chinese": "我犯了什么罪？",
						"french": "Quel péché ai-je commis ?",
						"spanish": "¿Qué pecado he cometido?",
						"vietnamese": "Tôi đã phạm tội gì?",
						"thai": "ฉันได้ทำบาปอะไรลงไป?",
						"hindi": "मैंने क्या पाप किया है?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "스스로에게 물어봐라. 너의 구원이 진정 순수한 갈망인지.",
						"english": "Ask yourself. Is your salvation truly a pure yearning?",
						"japanese": "自問自答せよ。お前の救いは、真に純粋な渇望なのか？",
						"chinese": "问问你自己。你的救赎真的是纯粹的渴望吗？",
						"french": "Demande-toi. Ton salut est-il un désir vraiment pur ?",
						"spanish": "¿Es tu salvación un anhelo verdaderamente puro?",
						"vietnamese": "Hãy tự hỏi mình. Sự cứu rỗi của ngươi có thực sự là một khao khát thuần khiết không?",
						"thai": "จงถามตัวเอง การไถ่บาปของเจ้าเป็นความปรารถนาที่บริสุทธิ์จริงหรือ?",
						"hindi": "खुद से पूछो। क्या तुम्हारा मोक्ष सचमुच एक शुद्ध लालसा है?"
					},
					"speaker": "bracken",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "숲은… 너의 후회를 먹고 자란다. 조심해라.",
						"english": "The forest... feeds on your regrets. Be careful.",
						"japanese": "森は…お前の後悔を糧に育つ。気をつけろ。",
						"chinese": "森林…以你的悔恨为食。小心。",
						"french": "La forêt… se nourrit de tes regrets. Fais attention.",
						"spanish": "El bosque… se alimenta de tus arrepentimientos. Ten cuidado.",
						"vietnamese": "Rừng… lớn lên nhờ sự hối tiếc của ngươi. Cẩn thận.",
						"thai": "ป่า…เติบโตด้วยความเสียใจของเจ้า จงระวัง",
						"hindi": "जंगल… तुम्हारे पछतावों से बढ़ता है। सावधान रहना।"
					},
					"speaker": "bracken"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "왜 자꾸 우릴 막으려 하는 거야?",
						"english": "Why do you keep trying to stop us?",
						"japanese": "なぜ私たちを止めようとするのですか？",
						"chinese": "你为什么一直想阻止我们？",
						"french": "Pourquoi continues-tu à nous arrêter ?",
						"spanish": "¿Por qué sigues intentando detenernos?",
						"vietnamese": "Tại sao ngươi cứ cố ngăn cản chúng ta?",
						"thai": "ทำไมเจ้าถึงพยายามหยุดพวกเรา?",
						"hindi": "तुम हमें बार-बार रोकने की कोशिश क्यों कर रहे हो?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "bracken",
					"content": {
						"korean": "나는… 반복되는 비극의 목격자일 뿐.",
						"english": "I am… merely a witness to recurring tragedies.",
						"japanese": "私は…繰り返される悲劇の目撃者にすぎない。",
						"chinese": "我只是…重复悲剧的见证者。",
						"french": "Je ne suis… qu'un témoin des tragédies récurrentes.",
						"spanish": "Yo solo soy… un testigo de tragedias recurrentes.",
						"vietnamese": "Ta chỉ là… một nhân chứng cho những bi kịch lặp đi lặp lại.",
						"thai": "ฉันเป็นเพียง…ผู้เห็นเหตุการณ์ของโศกนาฏกรรมที่ซ้ำซาก",
						"hindi": "मैं… बस दोहराई जाने वाली त्रासदियों का गवाह हूं।"
					},
					"emotion": "sad"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "숲의 기운이 더욱 짙어졌다. 길을 잃은 듯 방향 감각이 흐려진다.",
						"english": "The forest's aura has grown denser. My sense of direction blurs, as if I'm lost.",
						"japanese": "森の気がさらに濃くなった。道に迷ったように方向感覚が鈍る。",
						"chinese": "森林的气息更加浓厚了。我好像迷路了，方向感变得模糊。",
						"french": "L'aura de la forêt s'est épaissie. Mon sens de l'orientation s'estompe, comme si j'étais perdu.",
						"spanish": "El aura del bosque se ha vuelto más densa. Mi sentido de la orientación se nubla, como si estuviera perdido.",
						"vietnamese": "Khí tức của rừng đã trở nên dày đặc hơn. Cảm giác phương hướng của ta mờ đi, như thể ta đã lạc đường.",
						"thai": "พลังของป่าหนาแน่นขึ้น ความรู้สึกทิศทางเลือนหายราวกับหลงทาง",
						"hindi": "जंगल की आभा और घनी हो गई है। दिशा का मेरा एहसास धुंधला रहा है, मानो मैं खो गया हूँ।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…정말 돌아갈 수 없는 건가.",
						"english": "...Can I truly not go back?",
						"japanese": "…本当に戻れないのか。",
						"chinese": "……真的回不去了吗？",
						"french": "...Ne puis-je vraiment pas revenir ?",
						"spanish": "...¿Realmente no puedo regresar?",
						"vietnamese": "...Ta thật sự không thể quay về sao?",
						"thai": "...ฉันกลับไปไม่ได้แล้วจริงๆ หรือ?",
						"hindi": "…क्या मैं सचमुच वापस नहीं जा सकता?"
					},
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						2
					],
					"action": "enter",
					"speaker": "bracken"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "이미 늦었다. 발을 들인 순간부터… 너는 숲의 일부가 되었다.",
						"english": "It's too late. From the moment you stepped in... you became part of the forest.",
						"japanese": "もう遅い。足を踏み入れた瞬間から…お前は森の一部となったのだ。",
						"chinese": "已经太迟了。从你踏入的那一刻起……你就成为了森林的一部分。",
						"french": "Il est trop tard. Dès l'instant où tu as mis les pieds… tu es devenu une partie de la forêt.",
						"spanish": "Ya es tarde. Desde el momento en que entraste… te convertiste en parte del bosque.",
						"vietnamese": "Đã quá muộn rồi. Từ khoảnh khắc ngươi bước vào… ngươi đã trở thành một phần của rừng.",
						"thai": "สายเกินไปแล้ว ตั้งแต่เจ้าก้าวเข้ามา…เจ้าก็กลายเป็นส่วนหนึ่งของป่า",
						"hindi": "बहुत देर हो चुकी है। जिस पल तुमने कदम रखा… तुम जंगल का हिस्सा बन गए।"
					},
					"speaker": "bracken",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "무슨 말도 안 되는 소리야!",
						"english": "What nonsense!",
						"japanese": "何を馬鹿なことを！",
						"chinese": "你在说什么胡话！",
						"french": "Quelles absurdités !",
						"spanish": "¡Qué tontería!",
						"vietnamese": "Thật là vớ vẩn!",
						"thai": "พูดอะไรไร้สาระ!",
						"hindi": "यह क्या बकवास है!"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"speaker": "bracken",
					"content": {
						"korean": "저 깊은 곳에서… 숲의 여인이 널 기다린다. 너의 죄를 씻어주겠다고.",
						"english": "In the depths… the Lady of the Forest awaits you. She promises to cleanse your sins.",
						"japanese": "あの深淵で…森の貴婦人がお前を待っている。お前の罪を清めてやると。",
						"chinese": "在那深处……森林夫人正等着你。她会洗净你的罪孽。",
						"french": "Dans les profondeurs… la Dame de la Forêt t'attend. Elle promet de laver tes péchés.",
						"spanish": "En las profundidades… la Dama del Bosque te espera. Promete limpiar tus pecados.",
						"vietnamese": "Ở nơi sâu thẳm đó… Nữ Chúa Rừng đang đợi ngươi. Hứa sẽ gột rửa tội lỗi của ngươi.",
						"thai": "ในส่วนลึกนั้น…เทพธิดาแห่งป่ารอเจ้าอยู่ นางจะชำระล้างบาปของเจ้า",
						"hindi": "उन गहराइयों में… जंगल की देवी तुम्हारा इंतजार कर रही है। वह तुम्हारे पापों को धोने का वादा करती है।"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "bracken",
					"content": {
						"korean": "하지만 잊지 마라. 구원은… 희생을 요구한다.",
						"english": "But remember. Salvation… demands sacrifice.",
						"japanese": "だが、忘れるな。救済には…犠牲が伴う。",
						"chinese": "但别忘了。救赎…需要牺牲。",
						"french": "Mais n'oubliez pas. Le salut… exige un sacrifice.",
						"spanish": "Pero no olvides. La salvación… exige sacrificio.",
						"vietnamese": "Nhưng đừng quên. Sự cứu rỗi… đòi hỏi sự hy sinh.",
						"thai": "แต่อย่าลืมนะ ความรอด… ต้องแลกมาด้วยการเสียสละ",
						"hindi": "पर याद रखना। मोक्ष… बलिदान माँगता है।"
					},
					"type": "speech"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 힘을 잃었다.",
						"english": "The colossal shadow has lost its power.",
						"japanese": "巨大な影が力を失った。",
						"chinese": "巨大的阴影失去了力量。",
						"french": "L'ombre colossale a perdu son pouvoir.",
						"spanish": "La sombra colosal ha perdido su poder.",
						"vietnamese": "Bóng tối khổng lồ đã mất đi sức mạnh.",
						"thai": "เงาขนาดใหญ่สูญเสียพลังไปแล้ว",
						"hindi": "विशाल छाया ने अपनी शक्ति खो दी।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "크윽… 아직… 끝나지 않았다… 숲은… 너희의… 죄를… 잊지… 않아…",
						"english": "Ugh… It's not… over yet… The forest… will not… forget… your… sins…",
						"japanese": "くっ…まだ…終わってない…森は…お前たちの…罪を…忘れ…ない…",
						"chinese": "呃…还没…结束…森林…不会…忘记…你们的…罪孽…",
						"french": "Argh… Ce n'est pas… fini… La forêt… n'oubliera… pas… vos… péchés…",
						"spanish": "Agh… Todavía… no ha terminado… El bosque… no… olvidará… vuestros… pecados…",
						"vietnamese": "Ư… vẫn… chưa kết thúc… Rừng… sẽ không… quên… tội lỗi… của các ngươi…",
						"thai": "อึก… ยัง… ไม่จบ… ป่า… จะไม่… ลืม… ความผิด… ของพวกเจ้า…",
						"hindi": "उफ़… अभी… खत्म नहीं… हुआ… जंगल… तुम्हारे… पापों… को… भूलेगा… नहीं…"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"action": "enter",
					"speaker": "bracken",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"speaker": "bracken",
					"content": {
						"korean": "한숨 돌렸군. 하지만… 진짜 위험은 지금부터다.",
						"english": "A brief respite. But... the real danger begins now.",
						"japanese": "一息つけたな。だが…本当の危険はこれからだ。",
						"chinese": "松了口气。但是……真正的危险才刚刚开始。",
						"french": "Un bref répit. Mais… le vrai danger commence maintenant.",
						"spanish": "Un breve respiro. Pero… el peligro real comienza ahora.",
						"vietnamese": "Tạm thời an toàn. Nhưng... nguy hiểm thực sự chỉ vừa bắt đầu.",
						"thai": "โล่งอกไปที แต่... อันตรายที่แท้จริงเพิ่งจะเริ่มต้นขึ้น",
						"hindi": "थोड़ी राहत मिली। लेकिन... असली खतरा अब शुरू होता है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "이제… 뭘 해야 하지?",
						"english": "What... must I do now?",
						"japanese": "さて…次は何をすべきだ？",
						"chinese": "现在……我该做什么？",
						"french": "Maintenant… que dois-je faire ?",
						"spanish": "Ahora… ¿qué debo hacer?",
						"vietnamese": "Giờ... tôi phải làm gì?",
						"thai": "ตอนนี้... ฉันควรทำอะไร?",
						"hindi": "अब... मुझे क्या करना चाहिए?"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "숲의 여인… 그녀의 유혹은 더욱 강렬해질 거다. 너의 죄를 이용해서.",
						"english": "The Lady of the Forest… her temptations will grow stronger, exploiting your sins.",
						"japanese": "森の淑女…彼女の誘惑は、お前の罪を利用して、さらに強まるだろう。",
						"chinese": "森林夫人……她的诱惑会变得更强烈，利用你的罪孽。",
						"french": "La Dame de la Forêt… ses tentations deviendront plus intenses, exploitant tes péchés.",
						"spanish": "La Dama del Bosque… sus tentaciones se harán más fuertes, aprovechando tus pecados.",
						"vietnamese": "Người phụ nữ của rừng... cám dỗ của cô ta sẽ càng mãnh liệt hơn, lợi dụng tội lỗi của ngươi.",
						"thai": "สตรีแห่งพงไพร... แรงเย้ายวนของนางจะรุนแรงขึ้นกว่าเดิม โดยใช้บาปของเจ้าเป็นเครื่องมือ",
						"hindi": "वनदेवी… उसके प्रलोभन और तीव्र होंगे, तुम्हारे पापों का फायदा उठाकर।"
					},
					"speaker": "bracken",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "숲의 속삭임은 더욱 깊은 곳으로 이끌었다.",
						"english": "The forest's whispers led deeper still.",
						"japanese": "森の囁きは、さらに深き場所へと誘った。",
						"chinese": "森林的低语将我引向更深处。",
						"french": "Les murmures de la forêt menèrent encore plus profondément.",
						"spanish": "Los susurros del bosque llevaron aún más profundo.",
						"vietnamese": "Những lời thì thầm của rừng dẫn lối sâu hơn nữa.",
						"thai": "เสียงกระซิบของป่าชักนำสู่ที่ลึกยิ่งกว่าเดิม",
						"hindi": "वन की फुसफुसाहटें और गहरे ले गईं।"
					},
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "여기까지 오다니… 제법이군.",
						"english": "To come this far… Impressive.",
						"japanese": "ここまで来るとは… たいしたものだ。",
						"chinese": "竟能走到这里… 不错嘛。",
						"french": "Arriver jusqu'ici… Plutôt impressionnant.",
						"spanish": "Llegar tan lejos… Es bastante impresionante.",
						"vietnamese": "Đến được đây… cũng không tồi.",
						"thai": "มาได้ถึงขนาดนี้… ไม่เลวเลยนี่",
						"hindi": "यहाँ तक पहुँच गए… काफी प्रभावशाली।"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "너였군! 숲을 오염시킨 게!",
						"english": "It was you! The one who tainted the forest!",
						"japanese": "お前か！森を汚染した者は！",
						"chinese": "原来是你！污染森林的家伙！",
						"french": "C'était toi ! Celui qui a souillé la forêt !",
						"spanish": "¡Eras tú! ¡El que contaminó el bosque!",
						"vietnamese": "Ngươi sao! Kẻ đã làm ô uế khu rừng!",
						"thai": "แกนั่นเอง! คนที่ทำให้ป่าแปดเปื้อน!",
						"hindi": "तो तुम थे! जंगल को दूषित करने वाले!"
					},
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "오염? 나는 그저… 숲의 뜻을 따를 뿐. 너희의 어리석음을 이용할 뿐.",
						"english": "Taint? I merely… follow the forest's will. And exploit your foolishness.",
						"japanese": "汚染だと？私はただ…森の意思に従うだけだ。お前たちの愚かさを利用しているだけだ。",
						"chinese": "污染？我只是…顺应森林的意志。并利用你们的愚蠢。",
						"french": "Souillure ? Je ne fais que… suivre la volonté de la forêt. Et exploiter votre folie.",
						"spanish": "¿Contaminación? Yo simplemente… sigo la voluntad del bosque. Y me aprovecho de vuestra necedad.",
						"vietnamese": "Ô uế ư? Ta chỉ… tuân theo ý chí của rừng thôi. Và lợi dụng sự ngu xuẩn của các ngươi.",
						"thai": "แปดเปื้อน? ข้าแค่… ทำตามเจตจำนงของป่าเท่านั้น ใช้ความโง่เขลาของพวกเจ้าเป็นประโยชน์",
						"hindi": "दूषण? मैं बस… जंगल की इच्छा का पालन कर रहा हूँ। और तुम्हारी मूर्खता का फायदा उठा रहा हूँ।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						2
					],
					"speaker": "bracken",
					"action": "enter"
				},
				{
					"speaker": "bracken",
					"content": {
						"korean": "저 자가 바로 숲의 의지를 왜곡하는 자.",
						"english": "That one is the one who distorts the forest's will.",
						"japanese": "あいつこそが、森の意思を歪める者だ。",
						"chinese": "那家伙正是歪曲森林意志的人。",
						"french": "C'est lui qui déforme la volonté de la forêt.",
						"spanish": "Ese es el que distorsiona la voluntad del bosque.",
						"vietnamese": "Kẻ đó chính là kẻ đã bóp méo ý chí của rừng.",
						"thai": "เจ้าคนนั้นแหละคือผู้ที่บิดเบือนเจตจำนงของป่า",
						"hindi": "वही है जो जंगल की इच्छा को विकृत करता है।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "bracken",
					"content": {
						"korean": "네 안의 죄책감을… 가장 크게 만들 거다.",
						"english": "I will amplify the guilt within you… to its greatest extent.",
						"japanese": "お前の中の罪悪感を…最も大きくしてやる。",
						"chinese": "你内心的罪恶感…会变得最大。",
						"french": "Je ferai en sorte que la culpabilité en toi… devienne la plus grande.",
						"spanish": "Haré que la culpa dentro de ti… sea la más grande.",
						"vietnamese": "Ta sẽ khiến cảm giác tội lỗi trong ngươi… trở nên lớn nhất.",
						"thai": "ข้าจะทำให้ความรู้สึกผิดในตัวเจ้า… ขยายใหญ่ที่สุด",
						"hindi": "मैं तुम्हारे भीतर के अपराधबोध को… सबसे बड़ा कर दूँगा।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "훗… 방해하지 마라, 경고자.",
						"english": "Hmph… Don't interfere, Harbinger.",
						"japanese": "フッ…邪魔をするな、警告者。",
						"chinese": "哼…别碍事，警告者。",
						"french": "Hmph… Ne m'interfère pas, Annonceur.",
						"spanish": "Hmph… No interfieras, Alertador.",
						"vietnamese": "Hừ… Đừng cản trở, Kẻ Cảnh Báo.",
						"thai": "ฮึ… อย่าขวางทางนะ ผู้เตือน",
						"hindi": "हुह… दखल मत दो, चेतावनी देने वाले।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "{random_boss}에게… 속지 않겠어!",
						"english": "I won't be fooled by {random_boss}!",
						"japanese": "{random_boss}に…騙されない！",
						"chinese": "我不会被{random_boss}…欺骗的！",
						"french": "Je ne me laisserai pas berner par {random_boss} !",
						"spanish": "¡No me dejaré engañar por {random_boss}!",
						"vietnamese": "Ta sẽ không bị {random_boss}… lừa dối!",
						"thai": "ข้าจะไม่ถูก {random_boss}… หลอกลวง!",
						"hindi": "मैं {random_boss} से… धोखा नहीं खाऊँगा!"
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "숲의 그림자가 모든 것을 집어삼켰다.",
						"english": "The forest's shadow consumed all.",
						"japanese": "森の影が、全てを飲み込んだ。",
						"chinese": "森林的阴影吞噬了一切。",
						"french": "L'ombre de la forêt dévora tout.",
						"spanish": "La sombra del bosque lo consumió todo.",
						"vietnamese": "Bóng tối của rừng nuốt chửng mọi thứ.",
						"thai": "เงาของป่ากลืนกินทุกสิ่ง",
						"hindi": "वन की छाया ने सब कुछ निगल लिया।"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 것들… 너희의 죄는… 영원히 속죄될 수 없다.",
						"english": "Fools… your sins… can never be atoned for.",
						"japanese": "愚かな者たちよ…お前たちの罪は…永遠に贖われることはない。",
						"chinese": "愚蠢的东西……你们的罪孽……永远无法得到救赎。",
						"french": "Fous… vos péchés… ne pourront jamais être expiés.",
						"spanish": "Necios… vuestros pecados… nunca podrán ser expiados.",
						"vietnamese": "Lũ ngu ngốc... tội lỗi của các ngươi... sẽ không bao giờ được chuộc lỗi.",
						"thai": "พวกโง่เขลา... บาปของเจ้า... ไม่มีวันไถ่ถอนได้",
						"hindi": "मूर्खों… तुम्हारे पाप… कभी प्रायश्चित्त नहीं किए जा सकते।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "으윽… 여기서… 끝낼 순 없어!",
						"english": "Ugh… I can't… end it here!",
						"japanese": "くっ…ここで…終わらせるわけにはいかない！",
						"chinese": "呃……我不能……在这里结束！",
						"french": "Ugh… je ne peux pas… en finir ici !",
						"spanish": "Ugh… ¡no puedo… terminar aquí!",
						"vietnamese": "Ư… không thể... kết thúc ở đây!",
						"thai": "อึก... จะจบลงตรงนี้ไม่ได้!",
						"hindi": "उफ़… मैं यहाँ… खत्म नहीं कर सकता!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "다시 와라. 너의 절망이… 숲을 더 강하게 만들 테니.",
						"english": "Come again. Your despair… will only make the forest stronger.",
						"japanese": "また来るがいい。お前の絶望が…森をさらに強くするだろうからな。",
						"chinese": "再来吧。你的绝望……只会让森林更强大。",
						"french": "Reviens. Ton désespoir… ne fera que rendre la forêt plus forte.",
						"spanish": "Vuelve. Tu desesperación… solo hará que el bosque sea más fuerte.",
						"vietnamese": "Hãy trở lại. Nỗi tuyệt vọng của ngươi… sẽ chỉ khiến khu rừng mạnh mẽ hơn.",
						"thai": "กลับมาอีกครั้งสิ ความสิ้นหวังของเจ้า... จะทำให้ป่าแข็งแกร่งยิ่งขึ้น",
						"hindi": "फिर आओ। तुम्हारी निराशा… वन को और मजबूत बनाएगी।"
					},
					"speaker": "random_boss"
				}
			],
			"id": 15
		}
	]
} as const;
