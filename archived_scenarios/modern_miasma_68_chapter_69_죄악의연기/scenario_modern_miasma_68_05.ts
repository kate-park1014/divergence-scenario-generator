export const scenario_modern_miasma_68_05 = {
	"scenario_id": "modern_miasma_68_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "modern",
	"actors": {
		"zoe": {
			"id": "mon_ad3762e0-13f3-44a1-9b84-4ff67136858e",
			"name": {
				"korean": "조이",
				"english": "Zoe",
				"japanese": "ゾーイ",
				"chinese": "佐伊",
				"french": "Zoé",
				"spanish": "Zoe",
				"vietnamese": "Zoe",
				"thai": "โซอี้",
				"hindi": "ज़ोई"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/75dcfb0c-33e3-4208-4205-fb09d4abb100/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a7d0ebe1-73dc-4683-1338-32be2f7fac00/public"
		}
	},
	"boss": {
		"pool_id": "pool_ToxicVeil_Miasma_V1"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "지하 깊은 곳, 모든 것을 삼킬 듯한 독성 안개가 흐느적거렸다.",
						"english": "Deep underground, a toxic mist swayed, as if ready to swallow everything.",
						"japanese": "地下深く、全てを飲み込むかのような毒の霧が揺らめいていた。",
						"chinese": "在地底深处，弥漫着仿佛要吞噬一切的毒雾。",
						"french": "Dans les profondeurs souterraines, une brume toxique oscillait, comme prête à tout engloutir.",
						"spanish": "En lo profundo del subsuelo, una niebla tóxica se balanceaba, como si fuera a tragarlo todo.",
						"vietnamese": "Sâu dưới lòng đất, một làn sương độc hại lãng đãng, như thể sẵn sàng nuốt chửng mọi thứ.",
						"thai": "ลึกลงไปใต้ดิน หมอกพิษที่ดูเหมือนจะกลืนกินทุกสิ่งกำลังพัดพลิ้ว",
						"hindi": "गहरे भूमिगत, एक जहरीला कोहरा लहरा रहा था, मानो सब कुछ निगलने को तैयार हो।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이게… 미아즈마의 핵인가.",
						"english": "This... is the core of the Miasma.",
						"japanese": "これが…ミアズマの核なのか。",
						"chinese": "这…是瘴气的核心吗？",
						"french": "Ceci... est le cœur du Miasme.",
						"spanish": "Esto... ¿es el núcleo del Miasma?",
						"vietnamese": "Đây... là hạt nhân của Miasma sao.",
						"thai": "นี่...คือแก่นแท้ของมิอาสมาสินะ",
						"hindi": "यह... क्या मियास्मा का केंद्र है?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "zoe",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "zoe",
					"content": {
						"korean": "맞아요. 이곳이 모든 비극의 시작이자 끝이에요.",
						"english": "That's right. This is where all tragedy begins and ends.",
						"japanese": "そうです。ここが全ての悲劇の始まりであり、終わりです。",
						"chinese": "没错。这里是所有悲剧的开始，也是结束。",
						"french": "C'est exact. C'est ici que toute tragédie commence et se termine.",
						"spanish": "Así es. Aquí es donde toda tragedia comienza y termina.",
						"vietnamese": "Đúng vậy. Nơi đây là khởi nguồn và kết thúc của mọi bi kịch.",
						"thai": "ใช่แล้ว ที่นี่คือจุดเริ่มต้นและจุดจบของโศกนาฏกรรมทั้งหมด",
						"hindi": "सही कहा। यही वह जगह है जहाँ हर त्रासदी शुरू होती है और खत्म होती है।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "zoe",
					"content": {
						"korean": "이 거대한 독기는… 도시의 과거와 연결되어 있어요.",
						"english": "This immense miasma... is connected to the city's past.",
						"japanese": "この巨大な毒気は…都市の過去と繋がっています。",
						"chinese": "这巨大的毒气…与城市的过去息息相关。",
						"french": "Cette immense toxicité... est liée au passé de la ville.",
						"spanish": "Esta inmensa toxicidad... está conectada con el pasado de la ciudad.",
						"vietnamese": "Khí độc khổng lồ này... có liên hệ với quá khứ của thành phố.",
						"thai": "หมอกพิษขนาดมหึมานี้...เชื่อมโยงกับอดีตของเมือง",
						"hindi": "यह विशालकाय जहरीली गैस... शहर के अतीत से जुड़ी है।"
					},
					"emotion": "base"
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
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "zoe"
				},
				{
					"type": "speech",
					"speaker": "zoe",
					"content": {
						"korean": "말라비타… 들어봤을 거예요.",
						"english": "Malavita... you must have heard of them.",
						"japanese": "マラビータ…聞いたことがあるでしょう。",
						"chinese": "马拉维塔…你一定听说过。",
						"french": "Malavita... vous en avez sûrement entendu parler.",
						"spanish": "Malavita... habrás oído hablar de ellos.",
						"vietnamese": "Malavita... chắc hẳn cậu đã nghe nói về họ.",
						"thai": "มาลาวิต้า...คุณคงเคยได้ยินชื่อนี้",
						"hindi": "मालवीटा... आपने उनके बारे में सुना होगा।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "잊혀진 갱단? 도시의 뒷골목을 지배했던….",
						"english": "The forgotten gang? Who ruled the city's back alleys...",
						"japanese": "忘れられたギャング？都市の裏路地を支配していた…。",
						"chinese": "被遗忘的帮派？曾经统治着城市贫民区的…",
						"french": "Le gang oublié ? Celui qui régnait sur les ruelles de la ville...",
						"spanish": "¿La banda olvidada? ¿La que dominaba los callejones de la ciudad...?",
						"vietnamese": "Băng đảng bị lãng quên? Từng thống trị các con hẻm sau của thành phố...",
						"thai": "แก๊งที่ถูกลืม? ผู้เคยครอบครองตรอกซอกซอยของเมือง...",
						"hindi": "भूली हुई गैंग? जो शहर की गलियों पर राज करती थी..."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "zoe",
					"content": {
						"korean": "그들은 사라진 게 아니었어요. 잊혀진 척했을 뿐.",
						"english": "They didn't disappear. They just pretended to be forgotten.",
						"japanese": "彼らは消えたわけではありませんでした。忘れられたふりをしていただけ。",
						"chinese": "他们并没有消失。只是假装被遗忘罢了。",
						"french": "Ils n'ont pas disparu. Ils ont juste fait semblant d'être oubliés.",
						"spanish": "No desaparecieron. Solo fingieron ser olvidados.",
						"vietnamese": "Họ không biến mất. Họ chỉ giả vờ bị lãng quên.",
						"thai": "พวกเขาไม่ได้หายไปไหน เพียงแค่แสร้งทำเป็นถูกลืม",
						"hindi": "वे गायब नहीं हुए थे। उन्होंने तो बस भुलाए जाने का नाटक किया।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "zoe",
					"content": {
						"korean": "이 미아즈마는 그들의 죄악과… 희생자들의 원한이 뭉친 거예요.",
						"english": "This Miasma is a fusion of their sins... and the grudges of their victims.",
						"japanese": "このミアズマは、彼らの罪悪と…犠牲者たちの怨恨が結びついたものです。",
						"chinese": "这瘴气是他们的罪恶…与受害者们的怨恨结合而成的。",
						"french": "Ce Miasme est la fusion de leurs péchés... et des rancunes de leurs victimes.",
						"spanish": "Este Miasma es la fusión de sus pecados... y el rencor de sus víctimas.",
						"vietnamese": "Miasma này là sự kết hợp của tội lỗi của họ... và oán hận của các nạn nhân.",
						"thai": "มิอาสมานี้คือการรวมกันของบาปของพวกเขา...และความแค้นของเหยื่อ",
						"hindi": "यह मियास्मा उनके पापों... और उनके पीड़ितों के द्वेष का मिश्रण है।"
					},
					"emotion": "angry",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "zoe",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "zoe",
					"content": {
						"korean": "나도… 그 희생자 중 한 명이에요.",
						"english": "I, too... am one of those victims.",
						"japanese": "私も…その犠牲者の一人です。",
						"chinese": "我…也是那些受害者之一。",
						"french": "Moi aussi... je suis l'une de ces victimes.",
						"spanish": "Yo también... soy una de esas víctimas.",
						"vietnamese": "Tôi cũng... là một trong những nạn nhân đó.",
						"thai": "ฉันเองก็...เป็นหนึ่งในเหยื่อเหล่านั้น",
						"hindi": "मैं भी... उन पीड़ितों में से एक हूँ।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리야, 조이?",
						"english": "What are you talking about, Joey?",
						"japanese": "どういうことだ、ジョイ？",
						"chinese": "你说什么，乔伊？",
						"french": "Que dis-tu, Joey ?",
						"spanish": "¿De qué hablas, Joey?",
						"vietnamese": "Cậu nói gì vậy, Joey?",
						"thai": "หมายความว่าไง โจอี้?",
						"hindi": "क्या कह रहे हो, जॉय?"
					},
					"emotion": "base"
				},
				{
					"speaker": "zoe",
					"content": {
						"korean": "말라비타 때문에… 내 가족을 잃었어요.",
						"english": "Because of Malavita... I lost my family.",
						"japanese": "マラビータのせいで…家族を失いました。",
						"chinese": "因为马拉维塔…我失去了我的家人。",
						"french": "À cause de Malavita... j'ai perdu ma famille.",
						"spanish": "Por culpa de Malavita... perdí a mi familia.",
						"vietnamese": "Vì Malavita... tôi đã mất gia đình.",
						"thai": "เพราะมาลาวิต้า...ฉันถึงได้สูญเสียครอบครัวไป",
						"hindi": "मालवीटा की वजह से... मैंने अपने परिवार को खो दिया।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "zoe",
					"content": {
						"korean": "이 독기는 내가 겪은 고통의 냄새가 나요.",
						"english": "This miasma smells of the pain I've suffered.",
						"japanese": "この瘴気は、私の経験した苦痛の匂いがする。",
						"chinese": "这毒气闻起来有我所经历的痛苦的味道。",
						"french": "Cette miasme sent la douleur que j'ai endurée.",
						"spanish": "Este miasma huele al dolor que he sufrido.",
						"vietnamese": "Hơi độc này có mùi nỗi đau mà tôi đã trải qua.",
						"thai": "ไอพิษนี้มีกลิ่นอายของความเจ็บปวดที่ข้าได้เผชิญมา",
						"hindi": "इस विषैली हवा में मेरे भोगे हुए कष्टों की गंध है।"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…그럼 너도 피해자였어?",
						"english": "...So, you were a victim too?",
						"japanese": "…では、君も被害者だったのか？",
						"chinese": "……那么，你也是受害者吗？",
						"french": "...Alors, tu étais aussi une victime ?",
						"spanish": "¿Entonces tú también fuiste una víctima?",
						"vietnamese": "...Vậy ra, ngươi cũng là nạn nhân sao?",
						"thai": "...งั้นเจ้าก็เป็นเหยื่อด้วยเหรอ?",
						"hindi": "…तो तुम भी एक पीड़ित थे?"
					},
					"emotion": "sad",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "zoe",
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "zoe",
					"content": {
						"korean": "이 도시는 자신들의 죄를 외면했어요.",
						"english": "This city turned a blind eye to its sins.",
						"japanese": "この都市は、自らの罪に目を背けた。",
						"chinese": "这座城市对他们的罪视而不见。",
						"french": "Cette ville a ignoré ses propres péchés.",
						"spanish": "Esta ciudad ignoró sus propios pecados.",
						"vietnamese": "Thành phố này đã quay lưng lại với tội lỗi của chính mình.",
						"thai": "เมืองนี้เมินเฉยต่อบาปของตนเอง",
						"hindi": "इस शहर ने अपने पापों से मुँह मोड़ लिया।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "zoe",
					"content": {
						"korean": "번영이란 이름 아래, 너무 많은 것을 묻어버렸죠.",
						"english": "Under the guise of prosperity, too much was buried.",
						"japanese": "繁栄という名の元に、あまりにも多くのものが葬られた。",
						"chinese": "在繁荣的名义下，太多东西被埋葬了。",
						"french": "Sous le nom de prospérité, trop de choses ont été enfouies.",
						"spanish": "Bajo el nombre de la prosperidad, demasiadas cosas fueron enterradas.",
						"vietnamese": "Dưới cái tên phồn vinh, quá nhiều thứ đã bị chôn vùi.",
						"thai": "ภายใต้ชื่อของความรุ่งเรือง มากมายหลายสิ่งถูกฝังกลบ",
						"hindi": "समृद्धि के नाम पर, बहुत कुछ दफ़न कर दिया गया।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "그게 미아즈마가 된 거야?",
						"english": "Did that become the miasma?",
						"japanese": "それが瘴気になったのか？",
						"chinese": "那就是瘴气吗？",
						"french": "Est-ce cela qui est devenu la miasme ?",
						"spanish": "¿Eso se convirtió en el miasma?",
						"vietnamese": "Đó là thứ đã biến thành miasma sao?",
						"thai": "นั่นแหละคือสิ่งที่กลายเป็นไอพิษงั้นเหรอ?",
						"hindi": "क्या वही मियाज़्मा बन गया?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "zoe",
					"content": {
						"korean": "네. 잊힌 증오와 고통이 이 모든 것을 만들어냈어요.",
						"english": "Yes. Forgotten hatred and suffering created all of this.",
						"japanese": "はい。忘れ去られた憎悪と苦痛が、これらすべてを生み出したのです。",
						"chinese": "是的。被遗忘的仇恨和痛苦创造了这一切。",
						"french": "Oui. La haine et la souffrance oubliées ont créé tout cela.",
						"spanish": "Sí. El odio y el sufrimiento olvidados crearon todo esto.",
						"vietnamese": "Đúng vậy. Sự thù hận và đau khổ bị lãng quên đã tạo ra tất cả những điều này.",
						"thai": "ใช่แล้ว ความเกลียดชังและความเจ็บปวดที่ถูกลืมเลือนได้สร้างทุกสิ่งเหล่านี้ขึ้นมา",
						"hindi": "हाँ। भूली हुई नफ़रत और पीड़ा ने यह सब बनाया है।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이제 돌아갈 수 없어. 멈춰야만 해.",
						"english": "There's no turning back now. It must be stopped.",
						"japanese": "もう戻れない。止めなければならない。",
						"chinese": "现在无法回头了。必须阻止它。",
						"french": "On ne peut plus revenir en arrière. Il faut l'arrêter.",
						"spanish": "Ya no hay vuelta atrás. Debe ser detenido.",
						"vietnamese": "Không thể quay đầu lại được nữa. Phải ngăn chặn nó.",
						"thai": "ตอนนี้ไม่อาจย้อนกลับได้แล้ว ต้องหยุดมันให้ได้",
						"hindi": "अब वापस नहीं जा सकते। इसे रोकना ही होगा।"
					},
					"emotion": "angry"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"speaker": "boss",
					"content": {
						"korean": "…끝날 것 같나. 이 도시에 죄악이 사라지지 않는 한…",
						"english": "…Do you think it's over? As long as sin doesn't vanish from this city…",
						"japanese": "…終わったとでも？ この都市から罪悪が消えない限り…",
						"chinese": "…你以为结束了吗？只要罪恶不从这座城市消失…",
						"french": "…Croyez-vous que c'est fini ? Tant que le péché ne disparaît pas de cette ville…",
						"spanish": "¿…Crees que ha terminado? Mientras el pecado no desaparezca de esta ciudad…",
						"vietnamese": "…Ngươi nghĩ nó đã kết thúc sao? Chừng nào tội lỗi còn chưa biến mất khỏi thành phố này…",
						"thai": "…คิดว่าจะจบแล้วเหรอ? ตราบใดที่บาปยังไม่หายไปจากเมืองนี้…",
						"hindi": "…क्या तुम्हें लगता है कि यह खत्म हो गया है? जब तक इस शहर से पाप खत्म नहीं होते…"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "우리는… 언제든 다시 일어날 것이다…",
						"english": "We… will rise again anytime…",
						"japanese": "我々は…いつでも再び立ち上がるだろう…",
						"chinese": "我们…随时都会再次崛起…",
						"french": "Nous… nous relèverons à tout moment…",
						"spanish": "Nosotros… nos levantaremos de nuevo en cualquier momento…",
						"vietnamese": "Chúng ta… sẽ lại trỗi dậy bất cứ lúc nào…",
						"thai": "พวกเรา… จะลุกขึ้นมาใหม่เมื่อใดก็ได้…",
						"hindi": "हम… किसी भी समय फिर से उठेंगे…"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "….",
						"english": "…",
						"japanese": "…",
						"chinese": "…",
						"french": "…",
						"spanish": "…",
						"vietnamese": "…",
						"thai": "…",
						"hindi": "…"
					},
					"emotion": "base"
				},
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "zoe",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "zoe",
					"content": {
						"korean": "미아즈마는 사라졌지만… 과거는 사라지지 않아요.",
						"english": "The miasma is gone… but the past isn't.",
						"japanese": "瘴気は消え去ったが…過去は消えない。",
						"chinese": "瘴气消失了…但过去并没有消失。",
						"french": "Le miasme a disparu… mais le passé, non.",
						"spanish": "El miasma se ha ido… pero el pasado no desaparece.",
						"vietnamese": "Miasma đã biến mất… nhưng quá khứ thì không.",
						"thai": "หมอกพิษหายไปแล้ว… แต่เรื่องในอดีตไม่หายไปหรอกนะ",
						"hindi": "मियास्मा तो चला गया… पर अतीत नहीं।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "독성 안개는 걷혔지만, 도시에 드리운 죄책감의 그림자는 여전했다.",
						"english": "The toxic fog lifted, but the shadow of guilt cast over the city remained.",
						"japanese": "毒霧は晴れたが、都市に覆いかぶさる罪悪感の影は依然として残っていた。",
						"chinese": "毒雾散去了，但笼罩在城市上空的罪恶感阴影依然存在。",
						"french": "Le brouillard toxique s'est dissipé, mais l'ombre de la culpabilité planant sur la ville demeurait.",
						"spanish": "La niebla tóxica se disipó, pero la sombra de la culpa que se cernía sobre la ciudad permaneció.",
						"vietnamese": "Màn sương độc hại đã tan, nhưng bóng tối của tội lỗi bao trùm thành phố vẫn còn đó.",
						"thai": "หมอกพิษจางหายไปแล้ว แต่เงาของความรู้สึกผิดที่ปกคลุมเมืองยังคงอยู่",
						"hindi": "ज़हरीला कोहरा छंट गया, लेकिन शहर पर छाया हुआ अपराधबोध का साया बना रहा।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "미아즈마의 핵은 섬뜩하게 빛나는 액체로 요동쳤다. 일그러진 인간 형상들이 번개처럼 스쳐 지나갔다.",
						"english": "The miasma's core pulsed with an eerie glowing liquid. Distorted human figures flashed past like lightning.",
						"japanese": "瘴気の核は不気味に光る液体で脈動していた。歪んだ人型が稲妻のように通り過ぎた。",
						"chinese": "瘴气的核心伴随着诡异发光的液体而颤动。扭曲的人形如闪电般掠过。",
						"french": "Le cœur de la miasme pulsait d'un liquide étrangement lumineux. Des formes humaines distordues passèrent comme l'éclair.",
						"spanish": "El núcleo del miasma pulsaba con un líquido inquietantemente brillante. Figuras humanas distorsionadas pasaron como un rayo.",
						"vietnamese": "Lõi của miasma rung động với chất lỏng phát sáng kỳ dị. Những hình dáng con người méo mó vụt qua như chớp.",
						"thai": "แกนกลางของไอพิษเต้นระริกด้วยของเหลวเรืองแสงน่าขนลุก ร่างมนุษย์บิดเบี้ยวพุ่งผ่านไปราวกับสายฟ้า",
						"hindi": "मियाज़्मा का केंद्र एक अजीबोगरीब चमकते तरल से धड़क रहा था। विकृत मानव आकृतियाँ बिजली की तरह कौंध गईं।"
					},
					"emotion": "base"
				},
				{
					"speaker": "boss",
					"content": {
						"korean": "…너희의 찬란한 위선이, 우리를 다시 불렀다.",
						"english": "...Your brilliant hypocrisy has called us back.",
						"japanese": "…お前たちの輝かしい偽善が、我らを再び呼び戻した。",
						"chinese": "……你们光辉的虚伪，将我们再次唤回。",
						"french": "...Votre brillante hypocrisie nous a rappelés.",
						"spanish": "Vuestra brillante hipocresía nos ha llamado de nuevo.",
						"vietnamese": "...Sự đạo đức giả rực rỡ của các ngươi, đã triệu hồi chúng ta trở lại.",
						"thai": "...ความหน้าซื่อใจคดอันเจิดจ้าของพวกเจ้า ได้เรียกพวกเรากลับมาอีกครั้ง",
						"hindi": "…तुम्हारी शानदार पाखंडता ने हमें फिर से बुलाया है।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "이제, 이 도시의 모든 것이 부패할 때까지…",
						"english": "Now, until everything in this city rots...",
						"japanese": "さあ、この都市のすべてが腐敗するまで…",
						"chinese": "现在，直到这座城市的一切都腐烂殆尽……",
						"french": "Maintenant, jusqu'à ce que tout dans cette ville pourrisse...",
						"spanish": "Ahora, hasta que todo en esta ciudad se pudra...",
						"vietnamese": "Bây giờ, cho đến khi mọi thứ trong thành phố này thối rữa...",
						"thai": "บัดนี้ จนกว่าทุกสิ่งในเมืองนี้จะเน่าเปื่อย...",
						"hindi": "अब, जब तक इस शहर की हर चीज़ सड़ न जाए..."
					},
					"emotion": "angry"
				},
				{
					"speaker": "boss",
					"content": {
						"korean": "결코 끝나지 않을 우리의 지옥을, 너희의 심장에 새겨주마!",
						"english": "We shall carve our never-ending hell into your hearts!",
						"japanese": "我らの終わらない地獄を、お前たちの心臓に刻みつけてやる！",
						"chinese": "我们将把永无止境的地狱刻在你们的心脏上！",
						"french": "Nous graverons notre enfer sans fin dans vos cœurs !",
						"spanish": "¡Grabaremos nuestro infierno eterno en vuestros corazones!",
						"vietnamese": "Chúng ta sẽ khắc địa ngục không bao giờ kết thúc của chúng ta vào trái tim các ngươi!",
						"thai": "เราจะสลักนรกอันไม่มีที่สิ้นสุดของเราไว้ในใจเจ้า!",
						"hindi": "हम अपने अंतहीन नर्क को तुम्हारे दिलों में उकेर देंगे!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "네놈이… 이 도시의 죄악 그 자체였군.",
						"english": "You… were the very sin of this city.",
						"japanese": "貴様が…この都市の罪悪そのものだったのか。",
						"chinese": "你…就是这座城市罪恶的本身。",
						"french": "Tu… étais le péché même de cette ville.",
						"spanish": "Tú… eras el pecado mismo de esta ciudad.",
						"vietnamese": "Ngươi… chính là tội lỗi của thành phố này.",
						"thai": "แก… คือบาปของเมืองนี้เองสินะ",
						"hindi": "तुम… इस शहर का पाप ही थे।"
					},
					"emotion": "angry",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "어리석은 것들. 너희는 이 도시의 진정한 어둠을 몰랐다.",
						"english": "Fools. You didn't know the true darkness of this city.",
						"japanese": "愚か者め。お前たちはこの都市の真の闇を知らなかった。",
						"chinese": "愚蠢的东西。你们不知道这座城市真正的黑暗。",
						"french": "Imbéciles. Vous ne connaissiez pas la véritable obscurité de cette ville.",
						"spanish": "Tontos. No conocísteis la verdadera oscuridad de esta ciudad.",
						"vietnamese": "Những kẻ ngu ngốc. Các ngươi không biết bóng tối thực sự của thành phố này.",
						"thai": "พวกโง่เอ๊ย! พวกแกไม่รู้ความมืดที่แท้จริงของเมืองนี้เลย",
						"hindi": "मूर्खों। तुम इस शहर के असली अंधेरे को नहीं जानते थे।"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "이 미아즈마는… 너희의 죄업 그 자체다.",
						"english": "This miasma… is your sin itself.",
						"japanese": "この瘴気は…お前たちの罪業そのものだ。",
						"chinese": "这瘴气…就是你们自身的罪孽。",
						"french": "Ce miasme… est votre péché même.",
						"spanish": "Este miasma… es vuestro pecado mismo.",
						"vietnamese": "Miasma này… chính là tội lỗi của các ngươi.",
						"thai": "หมอกพิษนี้… คือบาปของพวกแกเอง",
						"hindi": "यह मियास्मा… तुम्हारा अपना पाप है।"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "젠장… 아직 끝나지 않았어.",
						"english": "Damn it… it's not over yet.",
						"japanese": "くそっ…まだ終わってない。",
						"chinese": "该死…还没结束。",
						"french": "Mince… ce n'est pas encore fini.",
						"spanish": "Maldita sea… aún no ha terminado.",
						"vietnamese": "Chết tiệt… vẫn chưa kết thúc.",
						"thai": "ให้ตายสิ… ยังไม่จบหรอก",
						"hindi": "लानत है… अभी खत्म नहीं हुआ।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"speaker": "zoe",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"speaker": "zoe",
					"content": {
						"korean": "포기하지 마세요. 진실은… 언젠가 빛을 볼 테니.",
						"english": "Don't give up. The truth will eventually come to light.",
						"japanese": "諦めないで。真実はいずれ、光を浴びるでしょう。",
						"chinese": "别放弃。真相终会大白于天下。",
						"french": "N'abandonnez jamais. La vérité éclatera un jour.",
						"spanish": "No te rindas. La verdad saldrá a la luz algún día.",
						"vietnamese": "Đừng bỏ cuộc. Sự thật rồi sẽ được phơi bày.",
						"thai": "อย่ายอมแพ้ ความจริงจะปรากฏในสักวัน",
						"hindi": "हार मत मानो। सच एक दिन सामने आ ही जाएगा।"
					},
					"emotion": "sad",
					"type": "speech"
				}
			]
		}
	],
	"epilogue": {
		"korean": [
			"미아즈마의 심연은 잠들었지만, 도시의 원죄는 여전히 남아 있었다.",
			"수많은 희생자의 고통과 잊힌 진실들은 쉬이 지워지지 않았다.",
			"과거는 현재를 갉아먹고, 미래를 좀먹는다는 것을 깨달았다.",
			"이것이 구원이었는지, 또 다른 침해의 시작이었는지는…",
			"아무도 알 수 없었다. 다만, 어둠은 여전히 존재했다."
		],
		"english": [
			"The abyss of miasma slumbered, but the city's original sin still remained.",
			"The suffering of countless victims and forgotten truths were not easily erased.",
			"I realized that the past gnaws at the present and corrupts the future.",
			"Whether this was salvation, or the beginning of another transgression...",
			"No one could know. Only, darkness still existed."
		],
		"japanese": [
			"瘴気の深淵は眠りについたが、都市の原罪は未だ残っていた。",
			"数えきれない犠牲者の苦痛と忘れ去られた真実は、容易には消えなかった。",
			"過去は現在を蝕み、未来を食い荒らすということを悟った。",
			"これが救済だったのか、それとも新たな侵犯の始まりだったのかは…",
			"誰も知る由もなかった。ただ、闇は依然として存在していた。"
		],
		"chinese": [
			"瘴气的深渊沉睡了，但城市的原罪依然存在。",
			"无数受害者的痛苦和被遗忘的真相并未轻易抹去。",
			"我意识到过去正在侵蚀现在，腐蚀未来。",
			"这究竟是救赎，还是另一次侵犯的开始……",
			"无人知晓。只是，黑暗依然存在。"
		],
		"french": [
			"L'abysse du miasme s'était endormi, mais le péché originel de la ville demeurait.",
			"La souffrance d'innombrables victimes et les vérités oubliées ne s'effaçaient pas facilement.",
			"J'ai réalisé que le passé ronge le présent et corrompt l'avenir.",
			"Si c'était le salut, ou le début d'une autre transgression...",
			"Personne ne pouvait le savoir. Seulement, l'obscurité existait toujours."
		],
		"spanish": [
			"El abismo del miasma dormía, pero el pecado original de la ciudad aún permanecía.",
			"El sufrimiento de incontables víctimas y las verdades olvidadas no se borraban fácilmente.",
			"Me di cuenta de que el pasado carcome el presente y corrompe el futuro.",
			"Si esto fue la salvación, o el comienzo de otra transgresión...",
			"Nadie podía saberlo. Solo que la oscuridad aún existía."
		],
		"vietnamese": [
			"Vực thẳm miasma đã ngủ yên, nhưng tội lỗi nguyên thủy của thành phố vẫn còn đó.",
			"Nỗi đau của vô số nạn nhân và những sự thật bị lãng quên không dễ dàng bị xóa bỏ.",
			"Tôi nhận ra rằng quá khứ đang gặm nhấm hiện tại và làm thối rữa tương lai.",
			"Liệu đây có phải là sự cứu rỗi, hay là khởi đầu của một cuộc xâm phạm khác...",
			"Không ai có thể biết. Chỉ là, bóng tối vẫn còn tồn tại."
		],
		"thai": [
			"ห้วงลึกของหมอกพิษสงบนิ่งลงแล้ว แต่บาปดั้งเดิมของเมืองยังคงอยู่",
			"ความเจ็บปวดของผู้ตกเป็นเหยื่อนับไม่ถ้วนและความจริงที่ถูกลืมเลือน ไม่ได้ถูกลบไปง่ายๆ",
			"ฉันตระหนักว่าอดีตกัดกินปัจจุบันและบ่อนทำลายอนาคต",
			"ไม่ว่านี่จะเป็นการไถ่บาป หรือเป็นจุดเริ่มต้นของการละเมิดอีกครั้ง...",
			"ไม่มีใครรู้ได้ เพียงแต่ ความมืดมิดยังคงมีอยู่"
		],
		"hindi": [
			"मियास्मा का अथाह कुआँ सो गया था, लेकिन शहर का मूल पाप अभी भी बना हुआ था।",
			"असंख्य पीड़ितों का दुख और भूली हुई सच्चाइयाँ आसानी से मिटाई नहीं जा सकीं।",
			"मुझे एहसास हुआ कि अतीत वर्तमान को कुतरता है और भविष्य को नष्ट करता है।",
			"क्या यह मोक्ष था, या किसी अन्य उल्लंघन की शुरुआत...",
			"कोई नहीं जान सकता था। बस, अँधेरा अभी भी मौजूद था।"
		]
	},
	"prologue": {
		"korean": [
			"도시의 가장 깊은 곳, 모든 부패의 근원에 다다랐다.",
			"그곳엔 역겨운 미아즈마가 심장처럼 고동치고 있었다.",
			"진실은 언제나 추악한 법. 이 도시가 감춘 죄악이 깨어나고 있었다.",
			"이제, 모든 것을 끝낼 시간이다."
		],
		"english": [
			"Reached the deepest part of the city, the very root of all corruption.",
			"There, a disgusting miasma pulsed like a heart.",
			"Truth is always ugly. The sins hidden by this city were awakening.",
			"Now, it's time to end everything."
		],
		"japanese": [
			"都市の最も深い場所、全ての腐敗の根源にたどり着いた。",
			"そこには、忌まわしい瘴気が心臓のように脈打っていた。",
			"真実は常に醜いものだ。この都市が隠蔽した罪が悪として覚醒しつつあった。",
			"今こそ、全てを終わらせる時だ。"
		],
		"chinese": [
			"抵达了城市的至深之处，一切腐败的根源。",
			"在那里，恶心的瘴气如心脏般跳动。",
			"真相总是丑陋的。这座城市隐藏的罪恶正在苏醒。",
			"现在，是时候结束这一切了。"
		],
		"french": [
			"Atteint la partie la plus profonde de la ville, la racine même de toute corruption.",
			"Là, un miasme écœurant pulsait comme un cœur.",
			"La vérité est toujours laide. Les péchés cachés par cette ville s'éveillaient.",
			"Maintenant, il est temps de tout arrêter."
		],
		"spanish": [
			"Llegué a la parte más profunda de la ciudad, la raíz misma de toda la corrupción.",
			"Allí, un miasma repugnante latía como un corazón.",
			"La verdad siempre es fea. Los pecados ocultos por esta ciudad estaban despertando.",
			"Ahora, es el momento de acabar con todo."
		],
		"vietnamese": [
			"Đã đến phần sâu nhất của thành phố, tận cùng của mọi sự thối nát.",
			"Ở đó, một luồng khí độc kinh tởm đang đập như trái tim.",
			"Sự thật luôn xấu xí. Tội lỗi mà thành phố này che giấu đang thức tỉnh.",
			"Bây giờ, là lúc kết thúc mọi thứ."
		],
		"thai": [
			"มาถึงส่วนที่ลึกที่สุดของเมือง ต้นตอของความเสื่อมทรามทั้งหมด",
			"ที่นั่น มีหมอกพิษน่ารังเกียจกำลังเต้นเป็นจังหวะราวกับหัวใจ",
			"ความจริงมักจะน่าเกลียดเสมอ บาปที่เมืองนี้ซ่อนไว้กำลังตื่นขึ้น",
			"ตอนนี้ ได้เวลาที่จะจบทุกสิ่งแล้ว"
		],
		"hindi": [
			"शहर के सबसे गहरे हिस्से तक पहुँच गया, सभी भ्रष्टाचार की जड़ तक।",
			"वहाँ, एक घृणित मियास्मा हृदय की तरह धड़क रहा था।",
			"सच हमेशा बदसूरत होता है। इस शहर द्वारा छिपाए गए पाप जाग रहे थे।",
			"अब, सब कुछ खत्म करने का समय है।"
		]
	}
} as const;
