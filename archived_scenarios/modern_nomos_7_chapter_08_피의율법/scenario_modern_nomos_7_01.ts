export const scenario_modern_nomos_7_01 = {
	"scenario_id": "modern_nomos_7_01",
	"order": 1,
	"act": "intro",
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
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "도시는 균열하기 시작했다. 모든 맹세가 무너진 자리였다.",
						"english": "The city began to crack. Where all oaths had crumbled.",
						"japanese": "都市はひび割れ始めた。すべての誓いが崩れ落ちた場所で。",
						"chinese": "城市开始龟裂。所有誓言都已崩溃。",
						"french": "La ville commença à se fissurer. Là où tous les serments s'étaient effondrés.",
						"spanish": "La ciudad comenzó a resquebrajarse. Donde todos los juramentos se habían derrumbado.",
						"vietnamese": "Thành phố bắt đầu rạn nứt. Nơi mọi lời thề đã sụp đổ.",
						"thai": "เมืองเริ่มแตกร้าว ในจุดที่คำสาบานทั้งหมดพังทลายลง",
						"hindi": "शहर में दरार पड़ने लगी। जहाँ सारी शपथें टूट चुकी थीं।"
					}
				},
				{
					"content": {
						"korean": "여긴 대체… 뭐야?",
						"english": "What in the world is this place...?",
						"japanese": "ここは一体… 何だ？",
						"chinese": "这里到底… 是什么？",
						"french": "Mais qu'est-ce que c'est que cet endroit ?",
						"spanish": "¿Qué demonios es este lugar?",
						"vietnamese": "Chỗ này rốt cuộc… là cái gì?",
						"thai": "ที่นี่มัน… อะไรกัน?",
						"hindi": "ये जगह आखिर… क्या है?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"emotion": "sad",
					"content": {
						"korean": "건물들이 뒤틀려 있어. 마치… 과거가 현재를 침범한 것 같아.",
						"english": "The buildings are twisted. As if… the past has invaded the present.",
						"japanese": "建物が歪んでいる。まるで… 過去が現在を侵食したかのようだ。",
						"chinese": "建筑物扭曲了。仿佛… 过去侵蚀了现在。",
						"french": "Les bâtiments sont tordus. Comme si… le passé avait envahi le présent.",
						"spanish": "Los edificios están retorcidos. Como si… el pasado hubiera invadido el presente.",
						"vietnamese": "Các tòa nhà bị méo mó. Cứ như thể… quá khứ đã xâm chiếm hiện tại.",
						"thai": "อาคารต่างๆ บิดเบี้ยว ราวกับว่า… อดีตได้รุกล้ำปัจจุบัน",
						"hindi": "इमारतें मुड़ी हुई हैं। जैसे… अतीत ने वर्तमान पर हमला कर दिया हो।"
					}
				},
				{
					"spot": [
						5,
						2
					],
					"speaker": "echo",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"emotion": "sad",
					"content": {
						"korean": "길을 잃었나요? 이 도시는 이제 더 이상 지도가 통하지 않아요.",
						"english": "Are you lost? Maps no longer work in this city.",
						"japanese": "道に迷いましたか？この都市ではもう地図は通用しません。",
						"chinese": "迷路了吗？这座城市里，地图已不再管用。",
						"french": "Vous êtes perdu ? Les cartes ne fonctionnent plus dans cette ville.",
						"spanish": "¿Estás perdido? Los mapas ya no sirven en esta ciudad.",
						"vietnamese": "Anh/chị bị lạc sao? Bản đồ không còn tác dụng ở thành phố này nữa.",
						"thai": "คุณหลงทางหรือเปล่า? แผนที่ใช้ไม่ได้แล้วในเมืองนี้",
						"hindi": "क्या तुम खो गए हो? इस शहर में अब नक्शे काम नहीं करते।"
					}
				},
				{
					"content": {
						"korean": "누구세요?",
						"english": "Who are you?",
						"japanese": "あなたは誰ですか？",
						"chinese": "你 M是 S谁？",
						"french": "Qui êtes-vous ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Anh/chị là ai?",
						"thai": "คุณคือใคร?",
						"hindi": "तुम कौन हो?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"emotion": "base",
					"content": {
						"korean": "저는 에코. 이 도시의… 목격자.",
						"english": "I am Echo. The… witness of this city.",
						"japanese": "私はエコー。この都市の… 目撃者。",
						"chinese": "我是艾珂。这个城市的… 见证者。",
						"french": "Je suis Écho. Le… témoin de cette ville.",
						"spanish": "Soy Eco. La… testigo de esta ciudad.",
						"vietnamese": "Tôi là Echo. Là… nhân chứng của thành phố này.",
						"thai": "ฉันคือเอคโค่… ผู้เฝ้าดูเมืองนี้",
						"hindi": "मैं इको हूँ। इस शहर का… गवाह।"
					}
				},
				{
					"speaker": "echo",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "당신들이 찾는 것을 알려줄게요. 심판자에 대한 소문, 들었나요?",
						"english": "I'll tell you what you're looking for. Heard rumors about the Judge?",
						"japanese": "探しているものを教えてあげましょう。審判者についての噂、聞きましたか？",
						"chinese": "我告诉你们想找的东西。你们听说过关于审判者的传闻吗？",
						"french": "Je vais vous dire ce que vous cherchez. Avez-vous entendu des rumeurs sur le Juge ?",
						"spanish": "Les diré lo que buscan. ¿Han oído rumores sobre el Juez?",
						"vietnamese": "Tôi sẽ nói cho các bạn biết điều các bạn đang tìm. Đã nghe tin đồn về Kẻ Phán Quyết chưa?",
						"thai": "ฉันจะบอกสิ่งที่คุณกำลังตามหา คุณได้ยินข่าวลือเกี่ยวกับผู้พิพากษาไหม?",
						"hindi": "मैं तुम्हें बताऊँगा कि तुम क्या ढूँढ रहे हो। क्या तुमने 'न्यायाधीश' के बारे में अफवाहें सुनी हैं?"
					}
				},
				{
					"type": "speech",
					"speaker": "character_2",
					"emotion": "base",
					"content": {
						"korean": "심판자? 그게 뭔데?",
						"english": "The Judge? What's that?",
						"japanese": "審判者？ それは何だ？",
						"chinese": "审判者？那是什么？",
						"french": "Le Juge ? C'est quoi ?",
						"spanish": "¿El Juez? ¿Qué es eso?",
						"vietnamese": "Kẻ Phán Quyết? Đó là gì?",
						"thai": "ผู้พิพากษา? นั่นคืออะไร?",
						"hindi": "न्यायाधीश? वो क्या है?"
					}
				},
				{
					"content": {
						"korean": "그의 의지가 곧 법. 맹세 없는 존재는 허무에 갇히죠.",
						"english": "His will is law. Those without a vow are trapped in emptiness.",
						"japanese": "彼の意志こそが法。誓いなき存在は虚無に囚われる。",
						"chinese": "他的意志就是法律。没有誓言的存在会被困在虚无中。",
						"french": "Sa volonté fait loi. Ceux sans serment sont piégés dans le vide.",
						"spanish": "Su voluntad es ley. Aquellos sin juramento están atrapados en la nada.",
						"vietnamese": "Ý chí của hắn chính là luật pháp. Những kẻ không có lời thề sẽ bị mắc kẹt trong hư vô.",
						"thai": "เจตจำนงของเขาคือกฎหมาย ผู้ที่ไม่มีคำสาบานจะถูกขังอยู่ในความว่างเปล่า",
						"hindi": "उसकी इच्छा ही कानून है। बिना शपथ वाले शून्य में फँसे रहते हैं।"
					},
					"type": "speech",
					"speaker": "echo",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "맹세 없는 존재라니….",
						"english": "Those without a vow, you say...",
						"japanese": "誓いなき存在だと…。",
						"chinese": "没有誓言的存在啊...",
						"french": "Ceux sans serment, vous dites...",
						"spanish": "¿Aquellos sin juramento, dices...?",
						"vietnamese": "Những kẻ không có lời thề sao...",
						"thai": "ผู้ที่ไม่มีคำสาบาน...",
						"hindi": "बिना शपथ वाले अस्तित्व..."
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "echo",
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "echo",
					"emotion": "sad",
					"content": {
						"korean": "이곳은 첫 번째 희생자의 흔적이에요.",
						"english": "This is the trace of the first victim.",
						"japanese": "ここは最初の犠牲者の痕跡だ。",
						"chinese": "这里是第一个牺牲者的痕迹。",
						"french": "Ceci est la trace de la première victime.",
						"spanish": "Este es el rastro de la primera víctima.",
						"vietnamese": "Đây là dấu vết của nạn nhân đầu tiên.",
						"thai": "นี่คือร่องรอยของเหยื่อรายแรก",
						"hindi": "यह पहले शिकार का निशान है।"
					}
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "찢겨진 사진 조각들이 벽에 붙어 있다. 희미하게 글씨가 보인다.",
						"english": "Torn photo fragments are stuck on the wall. Faint writing is visible.",
						"japanese": "引き裂かれた写真の破片が壁に貼られている。かすかに文字が見える。",
						"chinese": "撕碎的照片碎片贴在墙上。隐约可见字迹。",
						"french": "Des fragments de photos déchirées sont collés au mur. Une écriture faible est visible.",
						"spanish": "Fragmentos de fotos rotas están pegados en la pared. Una escritura tenue es visible.",
						"vietnamese": "Những mảnh ảnh bị xé rách dán trên tường. Một dòng chữ mờ nhạt hiện ra.",
						"thai": "เศษรูปถ่ายที่ฉีกขาดติดอยู่บนผนัง มีตัวอักษรจางๆ ปรากฏให้เห็น",
						"hindi": "फटे हुए फोटो के टुकड़े दीवार पर चिपके हुए हैं। धुंधली लिखावट दिख रही है।"
					}
				},
				{
					"content": {
						"korean": "\"깨진 맹세는 그림자를 남긴다\"...?",
						"english": "\"A broken vow leaves a shadow\"...?",
						"japanese": "「破られた誓いは影を残す」…？",
						"chinese": "“破碎的誓言留下阴影”...？",
						"french": "« Un serment brisé laisse une ombre »...?",
						"spanish": "¿\"Una promesa rota deja una sombra\"...?",
						"vietnamese": "\"Lời thề bị phá vỡ để lại bóng tối\"...?",
						"thai": "\"คำสาบานที่แตกหักทิ้งเงาไว้\"...?",
						"hindi": "\"टूटी हुई शपथ एक छाया छोड़ जाती है\"...?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "character_3",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "끔찍해. 이 그림자 같은 게 대체 뭐야.",
						"english": "Horrible. What is this shadow-like thing?",
						"japanese": "ひどい。この影のようなものは一体何だ。",
						"chinese": "太可怕了。这像影子一样的东西到底是什么？",
						"french": "Horrible. Qu'est-ce que cette chose semblable à une ombre ?",
						"spanish": "Horrible. ¿Qué es esta cosa parecida a una sombra?",
						"vietnamese": "Thật kinh khủng. Cái thứ giống bóng tối này rốt cuộc là gì?",
						"thai": "น่ากลัวจัง สิ่งที่เหมือนเงาพวกนี้คืออะไรกันแน่",
						"hindi": "भयानक। ये परछाई जैसी चीज़ क्या है?"
					}
				},
				{
					"content": {
						"korean": "그림자는 곧 환영. 과거의 맹세에 갇힌 자의 고통이죠.",
						"english": "Shadows are illusions. The pain of those trapped by past vows.",
						"japanese": "影は即ち幻影。過去の誓いに囚われた者の苦痛だ。",
						"chinese": "影子就是幻象。是那些被困在过去誓言中的人的痛苦。",
						"french": "Les ombres sont des illusions. La douleur de ceux piégés par des serments passés.",
						"spanish": "Las sombras son ilusiones. El dolor de aquellos atrapados por juramentos pasados.",
						"vietnamese": "Bóng tối chính là ảo ảnh. Nỗi đau của những kẻ bị mắc kẹt bởi lời thề trong quá khứ.",
						"thai": "เงาคือภาพลวงตา ความเจ็บปวดของผู้ที่ถูกขังด้วยคำสาบานในอดีต",
						"hindi": "परछाइयाँ भ्रम हैं। अतीत की शपथ में फँसे लोगों का दर्द।"
					},
					"type": "speech",
					"speaker": "echo",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "환영? 대체 누가 이런 짓을….",
						"english": "Illusions? Who would do such a thing...?",
						"japanese": "幻影？一体誰がこんなことを…。",
						"chinese": "幻象？到底是谁做了这种事...",
						"french": "Des illusions ? Qui ferait une chose pareille...?",
						"spanish": "¿Ilusiones? ¿Quién haría algo así...?",
						"vietnamese": "Ảo ảnh? Rốt cuộc ai đã làm chuyện này...?",
						"thai": "ภาพลวงตา? ใครกันแน่ที่ทำแบบนี้...",
						"hindi": "भ्रम? भला ऐसा कौन करेगा...?"
					}
				},
				{
					"content": {
						"korean": "심판자는… 맹세를 깨뜨린 모든 것을 심판해요.",
						"english": "The Arbiter... judges all who break their vows.",
						"japanese": "審判者は… 誓いを破った全てを審判します。",
						"chinese": "审判者…审判所有违背誓言之人。",
						"french": "L'Arbitre... juge tout ce qui brise son serment.",
						"spanish": "El Juez... juzga a todo aquel que rompe sus votos.",
						"vietnamese": "Kẻ Phán Quyết... phán xét tất cả những kẻ phá vỡ lời thề.",
						"thai": "ผู้พิพากษา... ตัดสินทุกสิ่งที่ผิดคำสาบาน",
						"hindi": "निर्णायक... उन सभी का न्याय करता है जो अपनी प्रतिज्ञा तोड़ते हैं。"
					},
					"type": "speech",
					"speaker": "echo",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"speaker": "echo",
					"duration_ms": 500,
					"spot": [
						5,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "점점 더 이상해져. 길이 계속 바뀌는 것 같아.",
						"english": "It's getting stranger. The path seems to keep changing.",
						"japanese": "ますますおかしくなっていく。道が変わり続けているようだ。",
						"chinese": "越来越奇怪了。路好像一直在变。",
						"french": "C'est de plus en plus étrange. Le chemin semble changer constamment.",
						"spanish": "Se está volviendo más extraño. El camino parece cambiar sin parar.",
						"vietnamese": "Càng lúc càng kỳ lạ. Con đường dường như cứ thay đổi.",
						"thai": "มันยิ่งแปลกขึ้นเรื่อยๆ ดูเหมือนทางจะเปลี่ยนไปเรื่อยๆ",
						"hindi": "यह और भी अजीब होता जा रहा है। रास्ता लगातार बदलता रहता है。"
					}
				},
				{
					"content": {
						"korean": "맹세가 깨질 때마다 도시의 형태도 왜곡돼요.",
						"english": "Every time a vow is broken, the city's form distorts.",
						"japanese": "誓いが破られるたびに、都市の形も歪む。",
						"chinese": "每当誓言被打破，城市的面貌也会扭曲。",
						"french": "Chaque fois qu'un serment est brisé, la forme de la ville se tord.",
						"spanish": "Cada vez que se rompe un voto, la forma de la ciudad se distorsiona.",
						"vietnamese": "Mỗi khi một lời thề bị phá vỡ, hình dạng của thành phố cũng bị bóp méo.",
						"thai": "ทุกครั้งที่คำสาบานถูกทำลาย รูปร่างของเมืองก็จะบิดเบี้ยว",
						"hindi": "हर बार जब कोई प्रतिज्ञा टूटती है, तो शहर का स्वरूप विकृत हो जाता है。"
					},
					"type": "speech",
					"speaker": "echo",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_4",
					"emotion": "base",
					"content": {
						"korean": "그럼 이 모든 게… 누군가 맹세를 깼다는 증거야?",
						"english": "So all of this... is proof someone broke a vow?",
						"japanese": "じゃあこの全ては…誰かが誓いを破った証拠なの？",
						"chinese": "那这一切…是有人违背誓言的证据吗？",
						"french": "Alors tout cela... est la preuve que quelqu'un a brisé un serment ?",
						"spanish": "Entonces, ¿todo esto... es prueba de que alguien rompió un voto?",
						"vietnamese": "Vậy tất cả những điều này... là bằng chứng có ai đó đã phá vỡ lời thề?",
						"thai": "งั้นทั้งหมดนี่... คือหลักฐานว่ามีใครบางคนผิดคำสาบานงั้นเหรอ?",
						"hindi": "तो यह सब... इस बात का सबूत है कि किसी ने प्रतिज्ञा तोड़ी है?"
					}
				},
				{
					"content": {
						"korean": "수많은 맹세가 파괴되었고, 그 여파가 도시를 지배하고 있죠.",
						"english": "Countless vows have been shattered, and their aftermath dominates the city.",
						"japanese": "数えきれないほどの誓いが破られ、その余波が都市を支配しています。",
						"chinese": "无数的誓言被摧毁，其后果正主宰着这座城市。",
						"french": "D'innombrables serments ont été brisés, et leurs répercussions dominent la ville.",
						"spanish": "Innumerables votos han sido destrozados, y sus consecuencias dominan la ciudad.",
						"vietnamese": "Vô số lời thề đã bị phá vỡ, và hậu quả của chúng đang bao trùm thành phố.",
						"thai": "คำสาบานนับไม่ถ้วนถูกทำลาย และผลพวงของมันก็ครอบงำเมืองนี้",
						"hindi": "अनगिनत प्रतिज्ञाएँ टूट गई हैं, और उनके परिणाम शहर पर हावी हैं।"
					},
					"type": "speech",
					"speaker": "echo",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "이대로 가다간 우리도….",
						"english": "If we continue like this, we'll also....",
						"japanese": "このままでは私たちも…。",
						"chinese": "这样下去，我们也会…。",
						"french": "Si nous continuons comme ça, nous aussi...",
						"spanish": "Si seguimos así, nosotros también...",
						"vietnamese": "Cứ thế này thì chúng ta cũng...",
						"thai": "ถ้าเรายังเป็นแบบนี้ต่อไป เราก็จะ...",
						"hindi": "अगर हम ऐसे ही चलते रहे, तो हम भी..."
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"emotion": "base",
					"content": {
						"korean": "심판자를 찾아야 해요. 모든 혼란의 원인이 그에게 있을지도.",
						"english": "We must find the Arbiter. The cause of all this chaos might lie with him.",
						"japanese": "審判者を見つけなければならない。全ての混乱の原因は彼にあるのかもしれない。",
						"chinese": "我们必须找到审判者。所有混乱的根源可能就在他身上。",
						"french": "Nous devons trouver l'Arbitre. La cause de tout ce chaos pourrait résider en lui.",
						"spanish": "Debemos encontrar al Juez. La causa de todo este caos podría estar en él.",
						"vietnamese": "Chúng ta phải tìm Kẻ Phán Quyết. Nguyên nhân của mọi hỗn loạn có thể nằm ở hắn.",
						"thai": "เราต้องตามหาผู้พิพากษา สาเหตุของความวุ่นวายทั้งหมดอาจจะอยู่ที่เขา",
						"hindi": "हमें निर्णायक को खोजना होगा। इस सारी अराजकता का कारण उसमें हो सकता है।"
					}
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						4,
						2
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "echo"
				},
				{
					"content": {
						"korean": "도시는 깊이를 알 수 없는 미궁으로 변해 있었다.",
						"english": "The city had transformed into an unfathomable labyrinth.",
						"japanese": "都市は深淵なる迷宮へと変貌していた。",
						"chinese": "城市变成了一座深不可测的迷宫。",
						"french": "La ville s'était transformée en un labyrinthe insondable.",
						"spanish": "La ciudad se había transformado en un laberinto insondable.",
						"vietnamese": "Thành phố đã biến thành một mê cung không thể dò đáy.",
						"thai": "เมืองได้กลายเป็นเขาวงกตที่ลึกเกินหยั่งถึง",
						"hindi": "शहर एक अथाह भूलभुलैया में बदल गया था。"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "우리가 너무 깊이 들어온 것 같아.",
						"english": "I think we've gone too deep.",
						"japanese": "私たちは深入りしすぎたようだ。",
						"chinese": "我们好像进来太深了。",
						"french": "Je crois que nous sommes allés trop loin.",
						"spanish": "Creo que hemos ido demasiado lejos.",
						"vietnamese": "Có vẻ chúng ta đã đi quá sâu rồi.",
						"thai": "ดูเหมือนเราจะเข้ามาลึกเกินไปแล้ว",
						"hindi": "मुझे लगता है कि हम बहुत अंदर आ गए हैं।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"speaker": "echo",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이제 되돌릴 수 없어요. 이 길은 오직 심판자에게만 닿아요.",
						"english": "There's no turning back now. This path leads only to the Arbiter.",
						"japanese": "もう引き返せない。この道は審判者へとしか繋がらない。",
						"chinese": "已经无法回头了。这条路只通向审判者。",
						"french": "Il n'y a plus de retour en arrière. Ce chemin ne mène qu'à l'Arbitre.",
						"spanish": "Ya no hay vuelta atrás. Este camino solo lleva al Juez.",
						"vietnamese": "Không thể quay lại được nữa. Con đường này chỉ dẫn đến Kẻ Phán Quyết.",
						"thai": "ย้อนกลับไปไม่ได้แล้ว ทางนี้จะนำไปสู่ผู้พิพากษาเท่านั้น",
						"hindi": "अब पीछे नहीं हट सकते। यह रास्ता केवल निर्णायक तक ही पहुँचता है।"
					}
				},
				{
					"speaker": "character_1",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "그 심판자라는 존재가 대체 뭔데? 이 모든 걸 해결할 수 있다고?",
						"english": "Who exactly is this 'Arbiter'? Can they really fix all this?",
						"japanese": "審判者という存在はいったい何だ？ こいつが全てを解決できるのか？",
						"chinese": "那个所谓的审判者到底是什么？他能解决所有问题吗？",
						"french": "Qui est cet 'Arbitre' au juste ? Il peut vraiment tout arranger ?",
						"spanish": "¿Quién es exactamente este 'Juez'? ¿Puede arreglarlo todo?",
						"vietnamese": "Kẻ gọi là Thẩm Phán đó rốt cuộc là ai? Hắn có thể giải quyết tất cả những chuyện này sao?",
						"thai": "ไอ้ที่เรียกว่าผู้พิพากษาเนี่ยมันคือใครกันแน่? มันแก้ปัญหาทุกอย่างได้เหรอ?",
						"hindi": "आखिर यह 'न्यायाधीश' कौन है? क्या यह सब कुछ ठीक कर सकता है?"
					}
				},
				{
					"content": {
						"korean": "그는 모든 맹세의 주인… 혹은 파괴자.",
						"english": "He is the master of all vows... or their destroyer.",
						"japanese": "彼は全ての誓いの主… あるいは破壊者だ。",
						"chinese": "他是所有誓约的主人……亦或是破坏者。",
						"french": "Il est le maître de tous les serments... ou leur destructeur.",
						"spanish": "Él es el amo de todos los juramentos... o su destructor.",
						"vietnamese": "Hắn là chủ nhân của mọi lời thề... hoặc kẻ hủy diệt chúng.",
						"thai": "เขาคือเจ้าแห่งคำสาบานทั้งหมด... หรือไม่ก็ผู้ทำลายล้างมัน",
						"hindi": "वह सभी प्रतिज्ञाओं का स्वामी है... या उनका विनाशक।"
					},
					"type": "speech",
					"speaker": "echo",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "주인… 혹은 파괴자라니….",
						"english": "Master... or destroyer, you say...",
						"japanese": "主… あるいは破壊者だと…。",
						"chinese": "主人……亦或是破坏者……",
						"french": "Maître... ou destructeur, dites-vous...",
						"spanish": "Amo... o destructor, dices...",
						"vietnamese": "Chủ nhân... hoặc kẻ hủy diệt...",
						"thai": "เจ้าแห่ง... หรือผู้ทำลายล้าง...",
						"hindi": "स्वामी... या विनाशक, तुम कहते हो..."
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "크흐… 겨우 이 정도로… 모든 것이 끝날 줄 아나….",
						"english": "Hmph... You think this is enough... that everything ends here...?",
						"japanese": "くふ… こんな程度で… 全てが終わると思うなよ…。",
						"chinese": "哼……就凭这样……就以为一切都结束了吗……",
						"french": "Hmph... Crois-tu que ce soit suffisant... que tout se termine ici...?",
						"spanish": "Hmph... ¿Crees que con esto... todo ha terminado...?",
						"vietnamese": "Khụ... Chỉ thế này thôi... mà đã nghĩ mọi chuyện sẽ kết thúc ư...?",
						"thai": "ครืน... แค่นี้เองเหรอ... คิดว่าทุกอย่างจะจบลงแค่นี้หรือไง...",
						"hindi": "हम्फ... क्या तुम्हें लगता है कि बस इतना ही... और सब कुछ यहीं खत्म हो जाएगा...?"
					},
					"speaker": "random_boss",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "심판자는… 또 다른 얼굴을 가졌을 뿐….",
						"english": "The Arbiter... merely wears another face...",
						"japanese": "審判者は…また別の顔を持っているに過ぎない…。",
						"chinese": "审判者…不过是另一张面孔…。",
						"french": "L'Arbitre... n'est qu'un autre visage...",
						"spanish": "El Árbitro... solo tiene otra cara...",
						"vietnamese": "Kẻ phán xử... chỉ là một gương mặt khác...",
						"thai": "ผู้พิพากษา... เป็นเพียงอีกโฉมหน้าหนึ่ง...",
						"hindi": "निर्णायक... बस एक और चेहरा है..."
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "무슨 소리야!?",
						"english": "What are you talking about!?",
						"japanese": "何を言っているんだ！？",
						"chinese": "你说什么？！",
						"french": "Qu'est-ce que tu racontes ?!",
						"spanish": "¿¡Qué dices!?",
						"vietnamese": "Ngươi nói gì vậy!?",
						"thai": "พูดอะไรน่ะ!?",
						"hindi": "क्या कह रहे हो तुम!?"
					}
				},
				{
					"spot": [
						4,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "echo",
					"type": "direction"
				},
				{
					"speaker": "echo",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "저 존재는 심판자의 그림자에 불과해요.",
						"english": "That being is merely a shadow of the Arbiter.",
						"japanese": "あの存在は審判者の影に過ぎません。",
						"chinese": "那个存在不过是审判者的影子。",
						"french": "Cet être n'est qu'une ombre de l'Arbitre.",
						"spanish": "Esa entidad es solo una sombra del Árbitro.",
						"vietnamese": "Thực thể đó chỉ là cái bóng của Kẻ Phán Xử thôi.",
						"thai": "สิ่งนั้นเป็นเพียงแค่เงาของผู้พิพากษาเท่านั้นเอง",
						"hindi": "वह अस्तित्व निर्णायक की मात्र एक परछाई है।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그럼… 진짜 심판자는…?",
						"english": "Then... the true Arbiter...?",
						"japanese": "では…本当の審判者は…？",
						"chinese": "那么…真正的审判者是…？",
						"french": "Alors... le véritable Arbitre...?",
						"spanish": "Entonces... ¿el verdadero Árbitro...?",
						"vietnamese": "Vậy thì... Kẻ Phán Xử thật sự là...?",
						"thai": "ถ้าอย่างนั้น... ผู้พิพากษาที่แท้จริงล่ะ...?",
						"hindi": "तो... असली निर्णायक...?"
					}
				},
				{
					"content": {
						"korean": "맹세의 도시를 뒤흔드는 진정한 심판자를 찾아, 여정은 계속된다.",
						"english": "The journey continues, to find the true Arbiter who shakes the City of Oaths.",
						"japanese": "誓いの都市を揺るがす真の審判者を求め、旅は続く。",
						"chinese": "寻找撼动誓约之城的真正审判者，旅程仍在继续。",
						"french": "La quête continue, à la recherche du véritable Arbitre qui ébranle la Cité des Serments.",
						"spanish": "La búsqueda del verdadero Árbitro que sacude la Ciudad de los Juramentos continúa.",
						"vietnamese": "Hành trình tiếp tục, tìm kiếm Kẻ Phán Xử thật sự đang làm rung chuyển Thành phố Lời Thề.",
						"thai": "การเดินทางยังคงดำเนินต่อไป เพื่อค้นหาผู้พิพากษาที่แท้จริง ผู้ที่เขย่าเมืองแห่งคำสาบาน",
						"hindi": "शपथों के शहर को हिलाने वाले सच्चे निर्णायक को खोजने के लिए, यात्रा जारी है।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "도시의 가장 깊은 곳. 거대한 그림자가 앞을 가로막는다.",
						"english": "In the city's deepest reaches. A colossal shadow blocks the way.",
						"japanese": "都市の最も深い場所。巨大な影が道を阻む。",
						"chinese": "城市的深处。巨大的阴影挡住了去路。",
						"french": "Dans les profondeurs de la ville. Une ombre colossale bloque le passage.",
						"spanish": "En lo más profundo de la ciudad. Una sombra colosal bloquea el paso.",
						"vietnamese": "Nơi sâu nhất của thành phố. Một cái bóng khổng lồ chặn đường.",
						"thai": "ในส่วนที่ลึกที่สุดของเมือง เงาขนาดมหึมาขวางทางอยู่",
						"hindi": "शहर के सबसे गहरे स्थान पर। एक विशाल छाया रास्ता रोकती है।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…어리석은 인간들. 여기까지 오다니.",
						"english": "...Foolish mortals. To have come this far.",
						"japanese": "…愚かな人間たちめ。よくもここまで来たな。",
						"chinese": "……愚蠢的人类。竟敢来到这里。",
						"french": "...Mortels insensés. D'être arrivés jusqu'ici.",
						"spanish": "...Mortales insensatos. Haber llegado hasta aquí.",
						"vietnamese": "...Loài người ngu ngốc. Dám đến tận đây.",
						"thai": "...พวกมนุษย์โง่เขลา บังอาจมาถึงนี่ได้ยังไง",
						"hindi": "...मूर्ख मनुष्य। इतनी दूर आ पहुँचे।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "네가 심판자냐?",
						"english": "Are you the Arbiter?",
						"japanese": "お前が審判者か？",
						"chinese": "你是审判者吗？",
						"french": "Es-tu l'Arbitre ?",
						"spanish": "¿Eres el Juez?",
						"vietnamese": "Ngươi là Thẩm Phán sao?",
						"thai": "แกคือผู้พิพากษาเหรอ?",
						"hindi": "क्या तुम न्यायाधीश हो?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "나는 그저 찢겨진 맹세의… 관리자일 뿐.",
						"english": "I am merely the... administrator of broken vows.",
						"japanese": "私はただ、引き裂かれた誓いの… 管理者にすぎない。",
						"chinese": "我不过是撕裂誓约的……管理者罢了。",
						"french": "Je ne suis que... l'administrateur des serments brisés.",
						"spanish": "Solo soy... el administrador de los juramentos rotos.",
						"vietnamese": "Ta chỉ là... kẻ quản lý những lời thề bị xé rách mà thôi.",
						"thai": "ฉันเป็นเพียง... ผู้ดูแลคำสาบานที่ฉีกขาดเท่านั้น",
						"hindi": "मैं बस टूटी हुई प्रतिज्ञाओं का... प्रशासक हूँ।"
					}
				},
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "echo",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "그가 바로… 맹세의 파괴를 집행하는 존재예요!",
						"english": "He is the very being who enforces the destruction of vows!",
						"japanese": "彼こそが… 誓いの破壊を執行する存在です！",
						"chinese": "他就是……执行誓约破坏的存在！",
						"french": "C'est lui... l'être qui exécute la destruction des serments !",
						"spanish": "¡Él es el ser mismo que ejecuta la destrucción de los juramentos!",
						"vietnamese": "Hắn chính là... kẻ thi hành việc hủy diệt lời thề!",
						"thai": "เขาคือ... ผู้ที่บังคับใช้การทำลายคำสาบาน!",
						"hindi": "वह वही है जो प्रतिज्ञाओं के विनाश को लागू करता है!"
					},
					"type": "speech",
					"speaker": "echo",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "모든 맹세는 무의미하다. 너희도 곧 알게 될 것이다.",
						"english": "All vows are meaningless. You will soon realize this.",
						"japanese": "全ての誓いは無意味だ。お前たちもすぐに知ることになるだろう。",
						"chinese": "所有誓约都毫无意义。你们很快就会明白的。",
						"french": "Tous les serments sont insignifiants. Vous le réaliserez bientôt.",
						"spanish": "Todos los juramentos son insignificantes. Pronto lo sabréis.",
						"vietnamese": "Mọi lời thề đều vô nghĩa. Các ngươi sẽ sớm nhận ra điều này.",
						"thai": "คำสาบานทั้งหมดไร้ความหมาย พวกเจ้าจะรู้ในไม่ช้า",
						"hindi": "सभी प्रतिज्ञाएँ अर्थहीन हैं। तुम्हें जल्द ही यह पता चल जाएगा।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "모든 맹세가 산산조각 났다. 도시의 왜곡은 더욱 심해졌다.",
						"english": "All oaths shattered. The city's distortion deepened.",
						"japanese": "全ての誓いは粉砕された。都市の歪みはさらに深まった。",
						"chinese": "所有誓约都已破碎。城市的扭曲愈发严重。",
						"french": "Tous les serments sont brisés. La distorsion de la ville s'est aggravée.",
						"spanish": "Todos los juramentos se hicieron pedazos. La distorsión de la ciudad se profundizó.",
						"vietnamese": "Mọi lời thề tan vỡ. Sự biến dạng của thành phố càng trở nên trầm trọng.",
						"thai": "คำสาบานทั้งหมดแตกสลาย การบิดเบือนของเมืองยิ่งเลวร้ายลง",
						"hindi": "सभी शपथें टूट गईं। शहर की विकृति और गहरी हो गई।"
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "어리석은 인간들… 맹세 없는 너희는 허무에 갇힐 뿐.",
						"english": "Foolish humans... Without oaths, you are merely trapped in nihility.",
						"japanese": "愚かな人間ども…誓いなきお前たちは虚無に囚われるだけだ。",
						"chinese": "愚蠢的人类…没有誓约，你们只会被困于虚无。",
						"french": "Humains insensés... Sans serments, vous n'êtes que piégés dans le néant.",
						"spanish": "Humanos necios... Sin juramentos, solo quedaréis atrapados en la nada.",
						"vietnamese": "Loài người ngu ngốc... Không có lời thề, các ngươi sẽ chỉ bị mắc kẹt trong hư vô.",
						"thai": "มนุษย์ที่โง่เขลา... หากปราศจากคำสาบาน เจ้าก็เป็นเพียงแค่ผู้ที่ถูกกักขังอยู่ในความว่างเปล่าเท่านั้น",
						"hindi": "मूर्ख मनुष्य... शपथों के बिना, तुम केवल शून्यता में कैद रहोगे।"
					}
				},
				{
					"content": {
						"korean": "아직 끝나지 않았어. 우리는… 진실을 찾아낼 거야!",
						"english": "It's not over yet. We... will find the truth!",
						"japanese": "まだ終わってない。私たちは…真実を見つけ出す！",
						"chinese": "还没结束。我们…会找到真相的！",
						"french": "Ce n'est pas encore fini. Nous... trouverons la vérité !",
						"spanish": "Aún no ha terminado. ¡Nosotros... encontraremos la verdad!",
						"vietnamese": "Vẫn chưa kết thúc đâu. Chúng ta... sẽ tìm ra sự thật!",
						"thai": "ยังไม่จบแค่นี้ เรา... จะค้นพบความจริงให้ได้!",
						"hindi": "अभी खत्म नहीं हुआ है। हम... सच का पता लगाएंगे!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"도시는 맹세 위에 세워졌다. 그러나 그 맹세는 찢겨졌다.",
			"하나의 약속이 부서질 때마다, 거리는 뒤틀리고 영혼은 곪아갔다.",
			"혼란 속, 사람들은 속삭였다. \"심판자가 나타났다.\"",
			"잊힌 진실을 찾아야 한다. 이 허무한 미궁 속에서."
		],
		"english": [
			"The city was built upon an oath. But that oath was broken.",
			"With every broken promise, streets twisted and souls festered.",
			"In chaos, people whispered, \"The Judge has appeared.\"",
			"The forgotten truth must be found. Within this hollow labyrinth."
		],
		"japanese": [
			"都市は誓いの上に築かれた。しかし、その誓いは破られた。",
			"一つの約束が破られるたび、通りは歪み、魂は腐敗していった。",
			"混乱の中、人々は囁いた。「審判者が現れた。」",
			"忘れられた真実を見つけなければならない。この虚無の迷宮の中で。"
		],
		"chinese": [
			"城市建立在誓言之上。然而，誓言被撕裂了。",
			"每当一个承诺被打破，街道便扭曲，灵魂也随之溃烂。",
			"在混乱中，人们低语着：“审判者出现了。”",
			"必须找到被遗忘的真相。在这个空虚的迷宫中。"
		],
		"french": [
			"La ville fut bâtie sur un serment. Mais ce serment fut brisé.",
			"À chaque promesse brisée, les rues se tordaient et les âmes pourrissaient.",
			"Dans le chaos, les gens chuchotaient : « Le Juge est apparu. »",
			"La vérité oubliée doit être trouvée. Dans ce labyrinthe creux."
		],
		"spanish": [
			"La ciudad fue construida sobre un juramento. Pero ese juramento fue roto.",
			"Con cada promesa rota, las calles se retorcían y las almas se corrompían.",
			"En el caos, la gente susurraba: \"El Juez ha aparecido.\"",
			"La verdad olvidada debe ser encontrada. Dentro de este laberinto vacío."
		],
		"vietnamese": [
			"Thành phố được xây dựng trên một lời thề. Nhưng lời thề đó đã bị phá vỡ.",
			"Mỗi khi một lời hứa bị phá vỡ, những con phố lại méo mó và linh hồn mục nát.",
			"Trong hỗn loạn, mọi người thì thầm: \"Thẩm phán đã xuất hiện.\"",
			"Chân lý bị lãng quên phải được tìm thấy. Trong mê cung trống rỗng này."
		],
		"thai": [
			"เมืองถูกสร้างขึ้นบนคำสาบาน แต่คำสาบานนั้นถูกฉีกขาด",
			"ทุกครั้งที่คำมั่นสัญญาถูกทำลาย ถนนก็บิดเบี้ยวและจิตวิญญาณก็เน่าเฟะ",
			"ในความสับสนวุ่นวาย ผู้คนกระซิบว่า \"ผู้พิพากษาปรากฏตัวแล้ว\"",
			"ความจริงที่ถูกลืมจะต้องถูกค้นพบ ภายในเขาวงกตที่ว่างเปล่านี้"
		],
		"hindi": [
			"शहर एक शपथ पर बना था। पर वो शपथ टूट गई।",
			"हर टूटे वादे के साथ, सड़कें मुड़ गईं और आत्माएँ सड़ गईं।",
			"अराजकता में, लोगों ने फुसफुसाया, \"न्यायाधीश आ गए हैं।\"",
			"भूली हुई सच्चाई को खोजना होगा। इस खोखले भूलभुलैया के भीतर।"
		]
	}
} as const;
