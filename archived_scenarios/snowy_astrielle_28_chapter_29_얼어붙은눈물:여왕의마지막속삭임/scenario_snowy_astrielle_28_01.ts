export const scenario_snowy_astrielle_28_01 = {
	"scenario_id": "snowy_astrielle_28_01",
	"order": 1,
	"act": "intro",
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
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "여왕의 심장부. 모든 것을 얼린 거대한 얼음 성의 가장 깊은 곳이었다.",
						"english": "The Queen's core. Deepest within the colossal ice castle that froze all.",
						"japanese": "女王の心臓部。すべてを凍らせた巨大な氷の城の最深部だった。",
						"chinese": "女王的心脏。是那冰封万物的巨大冰城最深之处。",
						"french": "Le cœur de la Reine. Au plus profond du château de glace colossal qui avait tout figé.",
						"spanish": "El corazón de la Reina. Lo más profundo del colosal castillo de hielo que lo congeló todo.",
						"vietnamese": "Trái tim Nữ hoàng. Đó là nơi sâu nhất của lâu đài băng khổng lồ đã đóng băng mọi thứ.",
						"thai": "ใจกลางราชินี จุดที่ลึกที่สุดของปราสาทน้ำแข็งมหึมาที่แช่แข็งทุกสิ่ง",
						"hindi": "रानी का हृदय। यह उस विशाल बर्फीले महल का सबसे गहरा हिस्सा था जिसने सब कुछ जमा दिया था।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "으아, 춥다. 이건 단순한 추위가 아닌데?",
						"english": "Ugh, it's freezing. This isn't just any cold, is it?",
						"japanese": "うわー、寒い。これはただの寒さじゃないぞ？",
						"chinese": "唔啊，好冷。这可不是简单的寒冷吧？",
						"french": "Beurk, il fait un froid de canard. Ce n'est pas un froid ordinaire, n'est-ce pas?",
						"spanish": "Uf, qué frío. Esto no es un frío cualquiera, ¿verdad?",
						"vietnamese": "Ư, lạnh quá. Đây không phải là cái lạnh đơn thuần, phải không?",
						"thai": "อึ๋ย หนาว! นี่ไม่ใช่แค่ความหนาวธรรมดานี่?",
						"hindi": "ओह, ठंड लग रही है। यह सिर्फ सामान्य ठंड नहीं है, है ना?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "eira",
					"spot": [
						5,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "이 얼음은… 슬픔으로 얼어붙은 겁니다.",
						"english": "This ice... it's congealed sorrow.",
						"japanese": "この氷は…悲しみで凍りついたものです。",
						"chinese": "这冰… 是由悲伤凝结而成的。",
						"french": "Cette glace… est le fruit d'une tristesse figée.",
						"spanish": "Este hielo… es tristeza congelada.",
						"vietnamese": "Tảng băng này… được đóng băng từ nỗi buồn.",
						"thai": "น้ำแข็งนี่… มันถูกแช่แข็งด้วยความโศกเศร้า",
						"hindi": "यह बर्फ… दुःख से जमी हुई है।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "슬픔이라니?",
						"english": "Sorrow, you say?",
						"japanese": "悲しみだと？",
						"chinese": "悲伤？",
						"french": "Tristesse ?",
						"spanish": "¿Tristeza?",
						"vietnamese": "Nỗi buồn ư?",
						"thai": "ความโศกเศร้าหรือ?",
						"hindi": "उदासी?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "여왕의 눈물. 얼어붙어 결정이 된 거죠.",
						"english": "The Queen's tears. Frozen into crystals.",
						"japanese": "女王の涙。凍りついて結晶になったのです。",
						"chinese": "女王的泪水。凝结成冰晶了。",
						"french": "Les larmes de la Reine. Figées en cristaux.",
						"spanish": "Las lágrimas de la Reina. Convertidas en cristales de hielo.",
						"vietnamese": "Nước mắt Nữ hoàng. Đã đóng băng và trở thành tinh thể.",
						"thai": "น้ำตาของราชินี มันแข็งตัวกลายเป็นผลึก",
						"hindi": "रानी के आँसू। वे जम कर क्रिस्टल बन गए।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"content": {
						"korean": "강렬한 한기가 탐험대를 덮쳤다. 공간 자체가 얼어붙는 듯했다.",
						"english": "An intense chill enveloped the expedition. The very space seemed to freeze.",
						"japanese": "強烈な寒気が探検隊を襲った。空間自体が凍りつくようだった。",
						"chinese": "一股强烈的寒气笼罩了探险队。整个空间仿佛都要冻结了。",
						"french": "Un froid intense s'abattit sur l'expédition. L'espace lui-même semblait se figer.",
						"spanish": "Un frío intenso envolvió a la expedición. El espacio mismo parecía congelarse.",
						"vietnamese": "Một luồng khí lạnh dữ dội ập đến đoàn thám hiểm. Không gian dường như tự đóng băng.",
						"thai": "ความหนาวเย็นอันรุนแรงพัดปกคลุมคณะสำรวจ ราวกับว่าพื้นที่ทั้งหมดกำลังจะกลายเป็นน้ำแข็ง",
						"hindi": "एक तीव्र ठंड ने अभियान दल को घेर लिया। ऐसा लगा जैसे पूरा स्थान ही जम गया हो।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "여왕의 수호자가 나타났습니다. 저 공격… 단순한 살기가 아니에요.",
						"english": "The Queen's Guardian has appeared. That attack... it's more than just malice.",
						"japanese": "女王の守護者が現れた。あの攻撃…ただの殺気ではない。",
						"chinese": "女王的守护者出现了。那攻击……不只是单纯的杀意。",
						"french": "La Gardienne de la Reine est apparue. Cette attaque... ce n'est pas une simple soif de sang.",
						"spanish": "La Guardiana de la Reina ha aparecido. Ese ataque... no es mera intención asesina.",
						"vietnamese": "Kẻ bảo hộ Nữ hoàng đã xuất hiện. Đòn tấn công đó... không chỉ là sát khí đơn thuần.",
						"thai": "ผู้พิทักษ์ของราชินีปรากฏตัวแล้ว การโจมตีนั้น... ไม่ใช่แค่เจตนาฆ่าธรรมดา.",
						"hindi": "रानी का संरक्षक प्रकट हुआ है। वह हमला... सिर्फ़ हत्या की भावना नहीं है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "…가까이 오지 마라.",
						"english": "...Don't come closer.",
						"japanese": "…近寄るな。",
						"chinese": "……别过来。",
						"french": "...Ne t'approche pas.",
						"spanish": "...No te acerques.",
						"vietnamese": "...Đừng đến gần.",
						"thai": "...อย่าเข้ามาใกล้.",
						"hindi": "...पास मत आना।"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "물러설 생각 없어.",
						"english": "We won't back down.",
						"japanese": "退くつもりはない。",
						"chinese": "没有退缩的打算。",
						"french": "Nous ne reculerons pas.",
						"spanish": "No retrocederemos.",
						"vietnamese": "Không lùi bước.",
						"thai": "ไม่มีทางถอย.",
						"hindi": "पीछे हटने का इरादा नहीं।"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…후회할 거다.",
						"english": "...You'll regret this.",
						"japanese": "…後悔するぞ。",
						"chinese": "……你会后悔的。",
						"french": "...Tu le regretteras.",
						"spanish": "...Te arrepentirás.",
						"vietnamese": "...Ngươi sẽ hối hận.",
						"thai": "...เจ้าจะต้องเสียใจ.",
						"hindi": "...तुम्हें पछताना पड़ेगा।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"content": {
						"korean": "얼음 조각들이 눈물처럼 흩날렸다. 그 안에서 기이한 결정체들이 떨어졌다.",
						"english": "Shards of ice scattered like tears. Strange crystals fell from within them.",
						"japanese": "氷の破片が涙のように舞い散った。その中から奇妙な結晶が落ちた。",
						"chinese": "冰晶如泪般飞散。奇特的结晶从中坠落。",
						"french": "Des éclats de glace se sont dispersés comme des larmes. D'étranges cristaux en sont tombés.",
						"spanish": "Fragmentos de hielo se esparcieron como lágrimas. Extraños cristales cayeron de ellos.",
						"vietnamese": "Những mảnh băng vỡ vụn như nước mắt. Những tinh thể kỳ lạ rơi ra từ đó.",
						"thai": "เกล็ดน้ำแข็งโปรยปรายราวกับน้ำตา ผลึกประหลาดตกลงมาจากข้างใน.",
						"hindi": "बर्फ़ के टुकड़े आँसुओं की तरह बिखर गए। उनके भीतर से अजीब क्रिस्टल गिरे।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "eira",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "저것은… 여왕의 슬픔이 응축된 결정입니다. 얼음 속에서 느껴져요.",
						"english": "Those are... crystals condensed from the Queen's sorrow. I can feel it in the ice.",
						"japanese": "あれは…女王の悲しみが凝縮された結晶です。氷の中から感じられます。",
						"chinese": "那是……女王悲伤凝结而成的结晶。能从冰中感受到。",
						"french": "Ce sont... des cristaux condensés de la tristesse de la Reine. Je le sens dans la glace.",
						"spanish": "Eso son... cristales condensados de la tristeza de la Reina. Lo siento en el hielo.",
						"vietnamese": "Đó là... những tinh thể được cô đọng từ nỗi buồn của Nữ hoàng. Tôi có thể cảm nhận được điều đó trong băng.",
						"thai": "นั่นคือ... ผลึกที่ควบแน่นจากความเศร้าของราชินี สัมผัสได้จากน้ำแข็ง.",
						"hindi": "वे... रानी के दुख से संघनित क्रिस्टल हैं। मुझे बर्फ़ में यह महसूस होता है।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…더 이상 다가오지 마라.",
						"english": "...Don't come any closer.",
						"japanese": "…これ以上近寄るな。",
						"chinese": "……别再靠近了。",
						"french": "...Ne t'approche pas davantage.",
						"spanish": "...No te acerques más.",
						"vietnamese": "...Đừng đến gần thêm nữa.",
						"thai": "...อย่าเข้ามาใกล้กว่านี้.",
						"hindi": "...और पास मत आना।"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "우린 여기서 멈추지 않아.",
						"english": "We won't stop here.",
						"japanese": "我々はここで止まらない。",
						"chinese": "我们不会止步于此。",
						"french": "Nous ne nous arrêterons pas ici.",
						"spanish": "No nos detendremos aquí.",
						"vietnamese": "Chúng ta sẽ không dừng lại ở đây.",
						"thai": "เราจะไม่หยุดอยู่แค่นี้.",
						"hindi": "हम यहीं नहीं रुकेंगे।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"content": {
						"korean": "발걸음마다 한기가 깊어졌다. 돌아갈 수 없는 길이었다.",
						"english": "With every step, the chill deepened. It was a path of no return.",
						"japanese": "足取りごとに寒気が深まった。引き返せない道だった。",
						"chinese": "每一步都让寒意更深。这是一条无法回头的路。",
						"french": "À chaque pas, le froid s'intensifiait. C'était un chemin sans retour.",
						"spanish": "Con cada paso, el frío se hacía más profundo. Era un camino sin retorno.",
						"vietnamese": "Mỗi bước chân, cái lạnh càng thêm sâu sắc. Đó là con đường không thể quay lại.",
						"thai": "ทุกย่างก้าว ความหนาวเหน็บก็ยิ่งลึกซึ้ง มันคือเส้นทางที่ไม่อาจหวนกลับ.",
						"hindi": "हर कदम पर ठंडक बढ़ती गई। यह वापसी का रास्ता नहीं था।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira",
					"type": "direction",
					"spot": [
						4,
						2
					]
				},
				{
					"content": {
						"korean": "이 얼음은… 스스로를 가두고 있는 벽과도 같습니다.",
						"english": "This ice... it's like a wall trapping itself.",
						"japanese": "この氷は…自らを閉じ込めている壁のようです。",
						"chinese": "这冰……就像一堵将自己困住的墙。",
						"french": "Cette glace... c'est comme un mur qui s'emprisonne elle-même.",
						"spanish": "Este hielo... es como una pared que se encierra a sí misma.",
						"vietnamese": "Tảng băng này... giống như một bức tường tự giam hãm chính nó.",
						"thai": "น้ำแข็งนี้... เหมือนกำแพงที่กักขังตัวเอง.",
						"hindi": "यह बर्फ़... खुद को कैद करने वाली दीवार जैसी है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "누가 스스로를 가둬?",
						"english": "Who would imprison themselves?",
						"japanese": "誰が自らを閉じ込める？",
						"chinese": "谁会把自己囚禁起来？",
						"french": "Qui s'emprisonnerait ainsi ?",
						"spanish": "¿Quién se encerraría a sí mismo?",
						"vietnamese": "Ai lại tự giam mình?",
						"thai": "ใครจะขังตัวเอง?",
						"hindi": "कौन खुद को कैद करेगा?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "여왕입니다. 고통스러운 기억으로부터… 도망치고 있는 거죠.",
						"english": "The Queen. She's escaping from painful memories...",
						"japanese": "女王様です。苦痛な記憶から… 逃げているのです。",
						"chinese": "是女王。她正在逃避痛苦的记忆…",
						"french": "C'est la Reine. Elle fuit des souvenirs douloureux...",
						"spanish": "Es la Reina. Está huyendo de recuerdos dolorosos…",
						"vietnamese": "Là Nữ hoàng. Người đang trốn tránh những ký ức đau khổ…",
						"thai": "พระราชินีเพคะ ทรงกำลังหนีจากความทรงจำที่เจ็บปวด...",
						"hindi": "महारानी हैं। वह दर्दनाक यादों से… भाग रही हैं।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "…쓸데없는 소리 마라.",
						"english": "...Don't talk nonsense.",
						"japanese": "…無駄口を叩くな。",
						"chinese": "……别胡说。",
						"french": "...Arrête tes futilités.",
						"spanish": "...No digas tonterías.",
						"vietnamese": "...Đừng nói chuyện vô nghĩa.",
						"thai": "...อย่าพูดไร้สาระ",
						"hindi": "…बकवास मत करो।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "심장부의 문이 열리자, 거대한 그림자가 앞을 막아섰다. 여왕의 근위대장인 듯했다.",
						"english": "As the Heart's door opened, a colossal shadow blocked the way. It seemed to be the Queen's Royal Guard Captain.",
						"japanese": "心臓部の扉が開くと、巨大な影が道を塞いだ。女王の近衛隊長らしかった。",
						"chinese": "心脏之门开启，一道巨大的身影挡住了去路。那似乎是女王的近卫队长。",
						"french": "La porte du Cœur s'ouvrit, et une ombre colossale barra le chemin. C'était apparemment le Capitaine de la Garde Royale de la Reine.",
						"spanish": "Al abrirse la puerta del Corazón, una sombra colosal bloqueó el paso. Parecía ser el Capitán de la Guardia Real de la Reina.",
						"vietnamese": "Cánh cửa trái tim mở ra, một bóng đen khổng lồ chặn đường. Dường như đó là Đội trưởng Cận vệ Hoàng gia của Nữ hoàng.",
						"thai": "เมื่อประตูสู่ใจกลางเปิดออก เงาขนาดใหญ่ก็ขวางทางไว้ ดูเหมือนจะเป็นกัปตันหน่วยองครักษ์ของราชินี",
						"hindi": "जैसे ही हृदय का द्वार खुला, एक विशाल छाया ने रास्ता रोक दिया। वह रानी के शाही अंगरक्षक कप्तान जैसा लग रहा था।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "저 자는 여왕의 슬픔을 가장 깊이 간직한 자입니다. 아마… 스스로를 얼린 거겠죠.",
						"english": "That one holds the deepest of the Queen's sorrows. Perhaps... they froze themselves.",
						"japanese": "あの者は女王の悲しみを最も深く抱いている者です。おそらく…自らを凍らせたのでしょう。",
						"chinese": "那是承载女王最深切悲伤的人。或许……他将自己冰封了。",
						"french": "Celui-ci porte le plus profond des chagrins de la Reine. Peut-être... s'est-il figé lui-même.",
						"spanish": "Él es quien guarda la pena más profunda de la Reina. Quizá... se congeló a sí mismo.",
						"vietnamese": "Kẻ đó mang trong mình nỗi buồn sâu sắc nhất của Nữ hoàng. Có lẽ… hắn đã tự đóng băng chính mình.",
						"thai": "เขาผู้นั้นเก็บซ่อนความเศร้าของพระราชินีไว้ลึกที่สุด บางที...เขาอาจจะแช่แข็งตัวเอง",
						"hindi": "वह रानी के दुखों को सबसे गहराई से समेटे हुए है। शायद… उसने खुद को जमा लिया होगा।"
					},
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "더 이상 침범하지 마라. 여왕의 고통을… 건드리지 마.",
						"english": "Intrude no further. Do not… touch the Queen's pain.",
						"japanese": "これ以上侵すな。女王の苦痛を…触れるな。",
						"chinese": "不要再侵犯了。不要……触碰女王的痛苦。",
						"french": "N'empiétez pas davantage. Ne… touchez pas à la douleur de la Reine.",
						"spanish": "No invadan más. No… toquen el dolor de la Reina.",
						"vietnamese": "Đừng xâm phạm nữa. Đừng… chạm vào nỗi đau của Nữ hoàng.",
						"thai": "อย่าบุกรุกไปมากกว่านี้ อย่า...แตะต้องความเจ็บปวดของพระราชินี",
						"hindi": "और आगे अतिक्रमण मत करो। रानी के दर्द को… मत छुओ।"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "우린 진실을 알러 왔다.",
						"english": "We came to know the truth.",
						"japanese": "我々は真実を知りに来た。",
						"chinese": "我们是来寻求真相的。",
						"french": "Nous sommes venus connaître la vérité.",
						"spanish": "Hemos venido a saber la verdad.",
						"vietnamese": "Chúng tôi đến để biết sự thật.",
						"thai": "เรามาเพื่อรู้ความจริง",
						"hindi": "हम सच जानने आए हैं।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…그 진실은 너희를 얼릴 것이다.",
						"english": "...That truth will freeze you.",
						"japanese": "…その真実は、お前たちを凍らせるだろう。",
						"chinese": "……那个真相会冰封你们。",
						"french": "...Cette vérité vous glacera.",
						"spanish": "...Esa verdad los congelará.",
						"vietnamese": "...Sự thật đó sẽ đóng băng các ngươi.",
						"thai": "...ความจริงนั้นจะทำให้เจ้าแข็งตาย",
						"hindi": "…वह सच तुम्हें जमा देगा।"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 쓰러지며 얼음 성 전체가 진동했다.",
						"english": "The colossal shadow fell, and the entire ice castle vibrated.",
						"japanese": "巨大な影が倒れ、氷の城全体が振動した。",
						"chinese": "巨大的身影倒下，整个冰雪城堡都为之震动。",
						"french": "L'ombre colossale s'effondra, et tout le château de glace vibra.",
						"spanish": "La sombra colosal cayó, y todo el castillo de hielo vibró.",
						"vietnamese": "Bóng đen khổng lồ ngã xuống, toàn bộ lâu đài băng rung chuyển.",
						"thai": "เงาขนาดใหญ่ล้มลง ปราสาทน้ำแข็งทั้งหลังสั่นสะเทือน",
						"hindi": "विशाल छाया गिरी, और पूरा बर्फीला महल हिल उठा।"
					},
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…여왕의 고통은… 끝나지 않을 거다.",
						"english": "...The Queen's pain will not... end.",
						"japanese": "…女王の苦痛は…終わらないだろう。",
						"chinese": "……女王的痛苦……不会结束。",
						"french": "...La douleur de la Reine ne... s'achèvera pas.",
						"spanish": "...El dolor de la Reina no... terminará.",
						"vietnamese": "...Nỗi đau của Nữ hoàng sẽ không... kết thúc.",
						"thai": "...ความเจ็บปวดของพระราชินีจะไม่...จบลง",
						"hindi": "…रानी का दर्द… खत्म नहीं होगा।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "고통이라니… 무슨 말이지?",
						"english": "Pain...? What do you mean?",
						"japanese": "苦痛だと…？どういうことだ？",
						"chinese": "痛苦…那是什么意思？",
						"french": "La douleur... Qu'est-ce que ça veut dire ?",
						"spanish": "¿Dolor...? ¿A qué te refieres?",
						"vietnamese": "Đau đớn...? Ý ngươi là gì?",
						"thai": "ความเจ็บปวด...? หมายความว่าอะไร?",
						"hindi": "दर्द... तुम्हारा क्या मतलब है?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						2
					],
					"type": "direction",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "점점 더 깊은 슬픔이 느껴집니다. 여왕의… 진짜 목소리가 들리는 것 같아요.",
						"english": "A deeper sorrow... I feel it growing. Is this the Queen's true voice?",
						"japanese": "ますます深い悲しみが感じられます。女王の…本当の声が聞こえるようです。",
						"chinese": "我感受到越来越深的悲伤。我好像听到了女王的……真实声音。",
						"french": "Une tristesse de plus en plus profonde m'envahit. J'ai l'impression d'entendre la... véritable voix de la Reine.",
						"spanish": "Siento una tristeza cada vez más profunda. Parece que escucho la... verdadera voz de la Reina.",
						"vietnamese": "Nỗi buồn ngày càng sâu sắc. Dường như tôi đang nghe thấy... giọng nói thật của Nữ hoàng.",
						"thai": "ความโศกเศร้าที่ลึกซึ้งยิ่งขึ้น... ฉันรู้สึกได้ถึงมัน ราวกับได้ยินเสียง... ที่แท้จริงของราชินี",
						"hindi": "मुझे गहरा और गहरा दुख महसूस हो रहा है। मुझे लगता है कि मैं रानी की... असली आवाज़ सुन रहा हूँ।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "얼음 성의 심장부, 아직 더 깊은 곳으로 향하는 문이 드러났다.",
						"english": "The heart of the Ice Castle. A door to an even deeper place has been revealed.",
						"japanese": "氷の城の心臓部、さらに奥へと続く扉が現れた。",
						"chinese": "冰之城堡的心脏。通往更深处的大门显现了。",
						"french": "Au cœur du Château de Glace, une porte menant à un lieu encore plus profond s'est révélée.",
						"spanish": "El corazón del Castillo de Hielo. Se ha revelado una puerta que conduce a un lugar aún más profundo.",
						"vietnamese": "Trái tim của Lâu đài Băng. Một cánh cửa dẫn đến nơi sâu hơn nữa đã lộ diện.",
						"thai": "ใจกลางปราสาทน้ำแข็ง. ประตูสู่สถานที่ที่ลึกซึ้งยิ่งกว่าได้ปรากฏขึ้นแล้ว.",
						"hindi": "बर्फ़ीले महल का दिल। एक और गहरी जगह की ओर जाने वाला दरवाज़ा खुल गया है।"
					},
					"emotion": "base"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "차가운 얼음 감옥에 갇혔다. 모든 것이 얼어붙는 듯했다.",
						"english": "Trapped in a cold ice prison. Everything felt as if it was freezing.",
						"japanese": "冷たい氷の牢獄に閉じ込められた。全てが凍りつくかのようだった。",
						"chinese": "被困在冰冷的冰牢里。一切都仿佛要冻结了。",
						"french": "Piégé dans une froide prison de glace. Tout semblait se figer.",
						"spanish": "Atrapado en una fría prisión de hielo. Todo parecía congelarse.",
						"vietnamese": "Bị mắc kẹt trong nhà tù băng lạnh giá. Mọi thứ dường như đóng băng lại.",
						"thai": "ติดอยู่ในคุกน้ำแข็งอันหนาวเหน็บ. ทุกสิ่งดูเหมือนจะแข็งตัว.",
						"hindi": "एक ठंडे बर्फीले कारावास में फँस गया। सब कुछ जम रहा था।"
					},
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "무지한 자들. 감히 여왕의 고통을 건드리려 하다니.",
						"english": "Ignorant fools. How dare you meddle with the Queen's pain.",
						"japanese": "無知な者たちめ。よくも女王の苦痛に触れようとしたな。",
						"chinese": "无知的蠢货。竟敢触碰女王的痛苦。",
						"french": "Imbéciles ignorants. Comment osez-vous toucher à la douleur de la Reine ?",
						"spanish": "Estúpidos ignorantes. ¿Cómo osáis tocar el dolor de la Reina?",
						"vietnamese": "Lũ ngu dốt. Dám chạm vào nỗi đau của Nữ hoàng.",
						"thai": "พวกโง่เขลาเบาปัญญา. บังอาจมาแตะต้องความเจ็บปวดของราชินี.",
						"hindi": "अज्ञानी मूर्खों। तुम्हारी हिम्मत कैसे हुई रानी के दर्द को छूने की।"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…아직 끝나지 않았어.",
						"english": "...It's not over yet.",
						"japanese": "…まだ終わっていない。",
						"chinese": "…还没结束。",
						"french": "...Ce n'est pas encore fini.",
						"spanish": "...Aún no ha terminado.",
						"vietnamese": "...Chưa kết thúc đâu.",
						"thai": "...ยังไม่จบแค่นี้.",
						"hindi": "...अभी ख़त्म नहीं हुआ है।"
					},
					"emotion": "angry"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"여왕의 심장부. 차가운 얼음 성의 가장 깊은 곳.",
			"모든 것이 얼어붙은 그곳에, 침묵만이 흘렀다.",
			"그러나 침묵 아래, 지독한 슬픔이 얼어붙은 흔적이 보였다.",
			"탐험대는 알았다. 이곳은 단순한 냉기가 아니라는 것을."
		],
		"english": [
			"The Queen's Heart. Deepest within the frigid ice castle.",
			"Where all was frozen, only silence reigned.",
			"Yet beneath the silence, a profound sorrow lay frozen.",
			"The expedition knew this was no ordinary chill."
		],
		"japanese": [
			"女王の心臓部。冷たい氷の城の最深部。",
			"すべてが凍りついたその場所に、沈黙だけが流れていた。",
			"しかし、その沈黙の下には、耐えがたい悲しみが凍りついた痕跡が見えた。",
			"探検隊は知っていた。ここがただの冷気ではないことを。"
		],
		"chinese": [
			"女王的心脏。寒冷冰城的最深处。",
			"万物冰封之地，唯有寂静流淌。",
			"然而，在寂静之下，冰封着彻骨悲伤的痕迹显现。",
			"探险队明白了。这里并非简单的寒冷。"
		],
		"french": [
			"Le cœur de la Reine. Au plus profond du froid château de glace.",
			"Là où tout était gelé, seul le silence régnait.",
			"Pourtant, sous le silence, une profonde tristesse gelée était palpable.",
			"L'expédition savait. Ce n'était pas une simple froideur."
		],
		"spanish": [
			"El corazón de la Reina. En lo más profundo del gélido castillo de hielo.",
			"Donde todo estaba congelado, solo reinaba el silencio.",
			"Pero bajo el silencio, se percibían huellas de una tristeza profunda y congelada.",
			"La expedición sabía que no era un frío común."
		],
		"vietnamese": [
			"Trái tim Nữ hoàng. Sâu nhất trong lâu đài băng giá lạnh.",
			"Nơi vạn vật đóng băng, chỉ có sự im lặng bao trùm.",
			"Tuy nhiên, dưới sự im lặng, dấu vết của nỗi buồn sâu sắc đóng băng vẫn hiện hữu.",
			"Đoàn thám hiểm đã biết. Nơi đây không phải chỉ là lạnh giá đơn thuần."
		],
		"thai": [
			"ใจกลางราชินี จุดที่ลึกที่สุดของปราสาทน้ำแข็งอันหนาวเหน็บ",
			"ที่ซึ่งทุกสิ่งถูกแช่แข็ง มีเพียงความเงียบงันเท่านั้น",
			"ทว่า ภายใต้ความเงียบงันนั้น ร่องรอยความโศกเศร้าอันร้ายกาจที่ถูกแช่แข็งปรากฏให้เห็น",
			"คณะสำรวจรู้ดีว่า ที่นี่ไม่ใช่แค่ความเย็นธรรมดา"
		],
		"hindi": [
			"रानी का हृदय। ठंडे बर्फीले महल का सबसे गहरा स्थान।",
			"जहाँ सब कुछ जमा हुआ था, वहाँ केवल सन्नाटा पसरा था।",
			"परन्तु उस सन्नाटे के नीचे, एक गहरी उदासी के जमे हुए निशान दिखाई दे रहे थे।",
			"अभियान दल को पता था। यह केवल ठंडक नहीं थी।"
		]
	}
} as const;
