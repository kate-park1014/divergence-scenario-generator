export const scenario_desert_mirage_chef_reverberation_01 = {
	"scenario_id": "desert_mirage_chef_reverberation_01",
	"order": 1,
	"act": "intro",
	"theme": "desert",
	"actors": {
		"dune": {
			"id": "mon_fc976b75-f009-4bf2-b660-a3053c95d668",
			"name": {
				"korean": "듄",
				"english": "Dune",
				"japanese": "デューン",
				"chinese": "沙丘",
				"french": "Dune",
				"spanish": "Dune",
				"vietnamese": "Dune",
				"thai": "ดูน",
				"hindi": "ड्यून"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/7568ec11-0329-44b4-740a-71b25ef62400/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/ba7095b5-0d99-40bd-1155-b57701c00f00/public"
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
						"korean": "사하르의 연회가 열렸던 곳은 이제 모래 폭풍이 할퀸 폐허가 되었다.",
						"english": "Where Sahar's banquet was held, now a ruin scarred by sandstorms.",
						"japanese": "サハールの宴が開かれた場所は、今や砂嵐に傷つけられた廃墟と化した。",
						"chinese": "萨哈尔宴会举行之地，如今已成沙暴肆虐的废墟。",
						"french": "Là où se tenait le banquet de Sahar, ce n'est plus qu'une ruine balafrée par les tempêtes de sable.",
						"spanish": "Donde se celebró el banquete de Sahar, ahora es una ruina marcada por tormentas de arena.",
						"vietnamese": "Nơi từng là yến tiệc của Sahar, giờ chỉ còn là tàn tích bị bão cát tàn phá.",
						"thai": "ที่ซึ่งงานเลี้ยงของซาฮาร์เคยจัดขึ้น ตอนนี้กลายเป็นซากปรักหักพังที่ถูกพายุทรายกัดเซาะ",
						"hindi": "जहाँ सहार का भोज आयोजित किया गया था, अब वह रेत के तूफानों से क्षतिग्रस्त एक खंडहर है।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "여기가… 그 화려했던 연회장이었어?",
						"english": "Is this... the grand banquet hall?",
						"japanese": "ここが…あの華やかだった宴会場だったの？",
						"chinese": "这里就是……那个华丽的宴会厅吗？",
						"french": "C'est ça... la somptueuse salle de banquet ?",
						"spanish": "¿Es esto... el gran salón de banquetes?",
						"vietnamese": "Đây là... sảnh tiệc lộng lẫy đó sao?",
						"thai": "นี่คือ... ห้องจัดเลี้ยงอันหรูหรานั้นหรือ?",
						"hindi": "क्या यह... वह भव्य भोज हॉल था?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"speaker": "dune",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"speaker": "dune",
					"emotion": "sad",
					"content": {
						"korean": "…여전히 끔찍해.",
						"english": "...Still dreadful.",
						"japanese": "…相変わらずひどいな。",
						"chinese": "……依然可怕。",
						"french": "...Toujours aussi affreux.",
						"spanish": "...Todavía es terrible.",
						"vietnamese": "...Vẫn kinh khủng.",
						"thai": "…ยังคงน่าสะพรึงกลัว",
						"hindi": "...अभी भी भयानक।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "당신은… 생존자?",
						"english": "Are you... a survivor?",
						"japanese": "あなたは…生存者？",
						"chinese": "你……是幸存者吗？",
						"french": "Vous êtes... un survivant ?",
						"spanish": "¿Eres... un superviviente?",
						"vietnamese": "Bạn là... người sống sót?",
						"thai": "คุณคือ... ผู้รอดชีวิต?",
						"hindi": "क्या तुम... एक जीवित बचे हो?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "dune",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "난 듄. 환각이 날 아직 놓아주지 않아.",
						"english": "I'm Dune. The hallucinations still cling to me.",
						"japanese": "私はデューン。幻覚がまだ私を捕らえている。",
						"chinese": "我是迪恩。幻觉仍未放过我。",
						"french": "Je suis Dune. Les hallucinations ne me lâchent pas.",
						"spanish": "Soy Dune. Las alucinaciones todavía me persiguen.",
						"vietnamese": "Tôi là Dune. Ảo giác vẫn chưa buông tha tôi.",
						"thai": "ฉันชื่อดูน ภาพหลอนยังคงตามหลอกหลอนฉัน",
						"hindi": "मैं ड्यून हूँ। मतिभ्रम अभी भी मुझे जकड़े हुए हैं।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "근데… 요즘 더 이상해. 사람들의 기억이 사라지고 있어.",
						"english": "But... it's even stranger these days. People's memories are disappearing.",
						"japanese": "でも…最近はもっと変だよ。人々の記憶が消えている。",
						"chinese": "但是…最近更奇怪了。人们的记忆正在消失。",
						"french": "Mais… c'est encore plus étrange ces derniers temps. Les souvenirs des gens disparaissent.",
						"spanish": "Pero… es aún más extraño estos días. La memoria de la gente está desapareciendo.",
						"vietnamese": "Nhưng… dạo này còn lạ hơn nữa. Ký ức của mọi người đang biến mất.",
						"thai": "แต่… ช่วงนี้มันแปลกขึ้นไปอีก ความทรงจำของผู้คนกำลังหายไป",
						"hindi": "लेकिन... आजकल यह और भी अजीब है। लोगों की यादें गायब हो रही हैं।"
					},
					"speaker": "dune",
					"emotion": "angry"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"speaker": "dune",
					"duration_ms": 450,
					"action": "enter",
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "여기가… 또 어디였더라.",
						"english": "Where… was this again?",
						"japanese": "ここ…どこだったっけ。",
						"chinese": "这里…又是哪里来着。",
						"french": "Où… étais-je déjà ?",
						"spanish": "¿Dónde… estaba esto otra vez?",
						"vietnamese": "Đây là… đâu nữa ấy nhỉ.",
						"thai": "ที่นี่… ที่ไหนอีกนะ",
						"hindi": "यह जगह... फिर से कहाँ थी?"
					},
					"speaker": "dune",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "정신 차려, 듄.",
						"english": "Snap out of it, Dune.",
						"japanese": "しっかりしろ、デューン。",
						"chinese": "清醒点，迪恩。",
						"french": "Reprends-toi, Dune.",
						"spanish": "Despierta, Dune.",
						"vietnamese": "Tỉnh táo lại đi, Dune.",
						"thai": "มีสติหน่อย ดูน",
						"hindi": "होश में आओ, ड्यून।"
					}
				},
				{
					"speaker": "dune",
					"emotion": "sad",
					"content": {
						"korean": "…미안. 환각 후유증이야.",
						"english": "…Sorry. It's an aftereffect of the hallucination.",
						"japanese": "…ごめん。幻覚の後遺症だ。",
						"chinese": "…抱歉。是幻觉的后遗症。",
						"french": "…Désolé. C'est une séquelle de l'hallucination.",
						"spanish": "…Lo siento. Es una secuela de la alucinación.",
						"vietnamese": "…Xin lỗi. Là di chứng của ảo giác.",
						"thai": "…ขอโทษที เป็นผลข้างเคียงจากภาพหลอน",
						"hindi": "…माफ़ करना। यह मतिभ्रम का एक दुष्प्रभाव है।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "근데… 이 향신료 냄새, 느껴져?",
						"english": "But… can you smell this spice?",
						"japanese": "でも…この香辛料の匂い、感じる？",
						"chinese": "但是…你闻到这香料味了吗？",
						"french": "Mais… sens-tu cette odeur d'épices ?",
						"spanish": "Pero… ¿puedes oler esta especia?",
						"vietnamese": "Nhưng… cậu có ngửi thấy mùi gia vị này không?",
						"thai": "แต่… ได้กลิ่นเครื่องเทศนี่ไหม",
						"hindi": "लेकिन... क्या तुम्हें इस मसाले की गंध आ रही है?"
					},
					"type": "speech",
					"speaker": "dune",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "폐허인데도 희미하게 나네.",
						"english": "It's faint, even in these ruins.",
						"japanese": "廃墟なのに、かすかにするね。",
						"chinese": "明明是废墟，却还能闻到淡淡的味道。",
						"french": "Elle est faible, même dans ces ruines.",
						"spanish": "Es tenue, incluso en estas ruinas.",
						"vietnamese": "Dù là phế tích nhưng vẫn thoang thoảng mùi.",
						"thai": "แม้แต่ในซากปรักหักพังก็ยังจาง ๆ เลย",
						"hindi": "खंडहरों में भी, यह हल्की है।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "사람들의 기억을 갉아먹는 게… 저것 때문인 것 같아.",
						"english": "I think… that's what's eating away at people's memories.",
						"japanese": "人々の記憶を蝕んでいるのは…あれのせいだと思う。",
						"chinese": "我觉得…蚕食人们记忆的，就是那个东西。",
						"french": "Je pense que… c'est ce qui ronge les souvenirs des gens.",
						"spanish": "Creo que… eso es lo que está carcomiendo la memoria de la gente.",
						"vietnamese": "Tôi nghĩ… đó là thứ đang gặm nhấm ký ức của mọi người.",
						"thai": "ฉันคิดว่า… นั่นแหละที่กำลังกัดกินความทรงจำของผู้คน",
						"hindi": "मुझे लगता है... वही है जो लोगों की यादों को खा रहा है।"
					},
					"type": "speech",
					"speaker": "dune",
					"emotion": "angry"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"duration_ms": 550,
					"speaker": "dune"
				},
				{
					"content": {
						"korean": "밤이 되면… 노랫소리가 들려와.",
						"english": "When night falls… I hear a song.",
						"japanese": "夜になると…歌声が聞こえてくる。",
						"chinese": "一到晚上…就能听到歌声。",
						"french": "Quand la nuit tombe… j'entends une chanson.",
						"spanish": "Cuando cae la noche… escucho una canción.",
						"vietnamese": "Khi màn đêm buông xuống… tôi nghe thấy tiếng hát.",
						"thai": "พอตกกลางคืน… ฉันได้ยินเสียงเพลง",
						"hindi": "जब रात होती है... मुझे एक गाना सुनाई देता है।"
					},
					"type": "speech",
					"speaker": "dune",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "노랫소리? 누가 부르는 건데?",
						"english": "A song? Who's singing?",
						"japanese": "歌声？誰が歌ってるの？",
						"chinese": "歌声？谁在唱？",
						"french": "Une chanson ? Qui chante ?",
						"spanish": "¿Una canción? ¿Quién la canta?",
						"vietnamese": "Tiếng hát á? Ai hát vậy?",
						"thai": "เสียงเพลงเหรอ? ใครร้องล่ะ",
						"hindi": "एक गाना? कौन गा रहा है?"
					}
				},
				{
					"emotion": "sad",
					"speaker": "dune",
					"content": {
						"korean": "몰라. 근데 들을 때마다… 내가 뭘 잊었는지조차 잊어버리는 기분이야.",
						"english": "I don't know. But every time I hear it… I feel like I forget even what I've forgotten.",
						"japanese": "分からない。でも聞くたびに…何を忘れたのかさえ忘れてしまう気分になる。",
						"chinese": "不知道。但每次听到…我都会觉得自己连自己忘记了什么都忘了。",
						"french": "Je ne sais pas. Mais chaque fois que je l'entends… j'ai l'impression d'oublier même ce que j'ai oublié.",
						"spanish": "No lo sé. Pero cada vez que la escucho… siento que olvido incluso lo que ya había olvidado.",
						"vietnamese": "Không biết. Nhưng mỗi lần nghe… tôi lại cảm thấy như mình quên mất cả những gì mình đã quên rồi vậy.",
						"thai": "ไม่รู้สิ แต่ทุกครั้งที่ได้ยิน… ฉันรู้สึกเหมือนลืมไปแล้วว่าตัวเองลืมอะไรไปบ้าง",
						"hindi": "मुझे नहीं पता। लेकिन हर बार जब मैं इसे सुनता हूँ... तो मुझे ऐसा लगता है कि मैं यह भी भूल जाता हूँ कि मैं क्या भूल गया था।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "망각의 증상… 그 노랫소리 때문이라고?",
						"english": "Symptoms of oblivion... because of that song?",
						"japanese": "忘却の症状…あの歌声のせいだと？",
						"chinese": "遗忘的症状……都是因为那歌声吗？",
						"french": "Les symptômes de l'oubli... à cause de ce chant ?",
						"spanish": "Los síntomas del olvido... ¿por esa canción?",
						"vietnamese": "Triệu chứng lãng quên... là do tiếng hát đó sao?",
						"thai": "อาการแห่งการหลงลืม... เป็นเพราะเสียงเพลงนั้นงั้นหรือ?",
						"hindi": "विस्मृति के लक्षण... क्या उस गीत की वजह से हैं?"
					},
					"type": "speech"
				},
				{
					"speaker": "dune",
					"emotion": "angry",
					"content": {
						"korean": "점점 더 많은 사람들이 텅 빈 눈으로 허공을 보고 있어.",
						"english": "More and more people are staring into space with empty eyes.",
						"japanese": "ますます多くの人々が、虚ろな目で宙を見つめている。",
						"chinese": "越来越多的人眼神空洞地望着虚空。",
						"french": "De plus en plus de gens fixent le vide, les yeux éteints.",
						"spanish": "Cada vez más gente mira al vacío con ojos perdidos.",
						"vietnamese": "Ngày càng nhiều người nhìn chằm chằm vào hư không với đôi mắt trống rỗng.",
						"thai": "ผู้คนมากมายจ้องมองความว่างเปล่าด้วยดวงตาที่ว่างเปล่ามากขึ้นเรื่อยๆ",
						"hindi": "अधिक से अधिक लोग खाली आँखों से शून्य में घूर रहे हैं।"
					},
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"duration_ms": 400,
					"speaker": "dune",
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						4
					]
				},
				{
					"content": {
						"korean": "안 돼… 여기는… 위험해.",
						"english": "No... this place... it's dangerous.",
						"japanese": "だめだ…ここは…危険だ。",
						"chinese": "不行……这里……很危险。",
						"french": "Non... ici... c'est dangereux.",
						"spanish": "No... aquí... es peligroso.",
						"vietnamese": "Không... nơi này... nguy hiểm lắm.",
						"thai": "ไม่นะ... ที่นี่... อันตราย.",
						"hindi": "नहीं... यह जगह... खतरनाक है।"
					},
					"type": "speech",
					"speaker": "dune",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "왜? 뭐가 위험하다는 건데?",
						"english": "Why? What's dangerous?",
						"japanese": "なぜ？何が危険なんだ？",
						"chinese": "为什么？什么危险？",
						"french": "Pourquoi ? Qu'est-ce qui est dangereux ?",
						"spanish": "¿Por qué? ¿Qué es peligroso?",
						"vietnamese": "Tại sao? Có gì nguy hiểm?",
						"thai": "ทำไม? อะไรอันตราย?",
						"hindi": "क्यों? क्या खतरनाक है?"
					}
				},
				{
					"emotion": "sad",
					"speaker": "dune",
					"type": "speech",
					"content": {
						"korean": "환각이… 날 다시 끌고 가려는 것 같아… 잊으면 안 되는데.",
						"english": "Hallucinations... they feel like they're pulling me back in... I mustn't forget.",
						"japanese": "幻覚が…また私を引きずり込もうとしている…忘れてはならないのに。",
						"chinese": "幻觉……好像又要把我拉回去了……我不能忘记。",
						"french": "Les hallucinations... on dirait qu'elles essaient de me ramener... Je ne dois pas oublier.",
						"spanish": "Las alucinaciones... siento que me arrastran de nuevo... No debo olvidar.",
						"vietnamese": "Ảo giác... chúng dường như đang kéo tôi trở lại... Tôi không được quên.",
						"thai": "ภาพหลอน... เหมือนพวกมันกำลังจะดึงฉันกลับไป... ฉันต้องไม่ลืม.",
						"hindi": "मतिभ्रम... ऐसा लगता है जैसे वे मुझे वापस खींच रहे हैं... मुझे भूलना नहीं चाहिए।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "진정해. 우리가 널 도울게.",
						"english": "Calm down. We'll help you.",
						"japanese": "落ち着け。私たちが助ける。",
						"chinese": "别担心。我们会帮你。",
						"french": "Calme-toi. Nous allons t'aider.",
						"spanish": "Tranquilízate. Te ayudaremos.",
						"vietnamese": "Bình tĩnh đi. Chúng tôi sẽ giúp bạn.",
						"thai": "ใจเย็นๆ เราจะช่วยคุณเอง",
						"hindi": "शांत हो जाओ। हम तुम्हारी मदद करेंगे।"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "더 깊이 가면… 전부 사라져. 너희도… 나도…",
						"english": "If we go deeper... everything will disappear. You too... and me...",
						"japanese": "もっと深くまで行けば…すべてが消える。君たちも…私も…",
						"chinese": "如果再深入……一切都会消失。你们也会……我也会……",
						"french": "Si nous allons plus profond... tout disparaîtra. Vous aussi... et moi...",
						"spanish": "Si vamos más profundo... todo desaparecerá. Vosotros también... y yo...",
						"vietnamese": "Nếu đi sâu hơn... mọi thứ sẽ biến mất. Cả bạn... và tôi...",
						"thai": "ถ้าเราเข้าไปลึกกว่านี้... ทุกอย่างจะหายไป. พวกคุณด้วย... และฉันด้วย...",
						"hindi": "अगर हम और गहराई तक गए... तो सब कुछ गायब हो जाएगा। तुम भी... और मैं भी..."
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "dune"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "이 고통은… 끝나지 않아. {random_boss}는… 다시 돌아올 것이다.",
						"english": "This pain... won't end. {random_boss} will... return.",
						"japanese": "この苦痛は… 終わらない。{random_boss}は… また戻ってくるだろう。",
						"chinese": "这份痛苦……不会结束的。{random_boss}还会……再次回来。",
						"french": "Cette douleur... ne se terminera pas. {random_boss}... reviendra.",
						"spanish": "Este dolor... no terminará. {random_boss}... volverá.",
						"vietnamese": "Nỗi đau này... sẽ không kết thúc. {random_boss} sẽ... trở lại.",
						"thai": "ความเจ็บปวดนี้... จะไม่สิ้นสุด {random_boss}... จะกลับมาอีกครั้ง",
						"hindi": "यह दर्द... खत्म नहीं होगा। {random_boss}... वापस आ जाएगा।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "망각의 그림자가… 옅어지는 것 같아.",
						"english": "The shadow of oblivion... seems to be fading.",
						"japanese": "忘却の影が… 薄れていくようだ。",
						"chinese": "遗忘的阴影……似乎正在消退。",
						"french": "L'ombre de l'oubli... semble s'estomper.",
						"spanish": "La sombra del olvido... parece desvanecerse.",
						"vietnamese": "Bóng tối của sự lãng quên... dường như đang mờ dần.",
						"thai": "เงาแห่งความหลงลืม... ดูเหมือนจะจางหายไป",
						"hindi": "विस्मृति की छाया... हल्की होती जा रही है।"
					},
					"emotion": "happy",
					"speaker": "character_any"
				},
				{
					"duration_ms": 400,
					"speaker": "dune",
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "happy",
					"speaker": "dune",
					"type": "speech",
					"content": {
						"korean": "이제… 겨우 숨통이 트이는 것 같아.",
						"english": "Now... I can finally breathe.",
						"japanese": "これで… ようやく息ができる気がする。",
						"chinese": "现在……我终于可以喘口气了。",
						"french": "Maintenant... je peux enfin respirer.",
						"spanish": "Ahora... por fin puedo respirar.",
						"vietnamese": "Bây giờ... ta mới có thể thở được.",
						"thai": "ตอนนี้... ข้าพอจะหายใจได้แล้ว",
						"hindi": "अब... मुझे आखिरकार सांस लेने को मिल रहा है।"
					}
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "망각의 잔향은 사라졌지만, 사막 전체를 뒤덮을 더 큰 망각이 시작될 참이었다.",
						"english": "The aftertaste of oblivion vanished, but a greater oblivion, one to engulf the entire desert, was about to begin.",
						"japanese": "忘却の残響は消え去ったが、砂漠全体を覆う、より大きな忘却が始まろうとしていた。",
						"chinese": "遗忘的余韵消失了，但一场更大的遗忘，一场将吞噬整个沙漠的遗忘，即将开始。",
						"french": "L'arrière-goût de l'oubli s'est évanoui, mais un oubli plus grand, destiné à engloutir tout le désert, était sur le point de commencer.",
						"spanish": "El regusto del olvido se desvaneció, pero un olvido mayor, uno que engulliría todo el desierto, estaba a punto de comenzar.",
						"vietnamese": "Dư vị của sự lãng quên đã tan biến, nhưng một sự lãng quên lớn hơn, thứ sẽ nhấn chìm toàn bộ sa mạc, sắp bắt đầu.",
						"thai": "กลิ่นอายแห่งความหลงลืมได้หายไปแล้ว แต่ความหลงลืมที่ยิ่งใหญ่กว่า ซึ่งจะกลืนกินทะเลทรายทั้งหมด กำลังจะเริ่มต้นขึ้น",
						"hindi": "विस्मृति का अवशेष मिट गया, लेकिन एक बड़ी विस्मृति, जो पूरे रेगिस्तान को निगल जाएगी, शुरू होने वाली थी।"
					}
				}
			],
			"id": 15,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "폐허의 심장부. 거대한 그림자가 일렁였다.",
						"english": "The heart of the ruins. A colossal shadow flickered.",
						"japanese": "廃墟の心臓部。巨大な影が揺らめいた。",
						"chinese": "废墟的心脏地带。巨大的影子晃动着。",
						"french": "Le cœur des ruines. Une ombre colossale vacillait.",
						"spanish": "El corazón de las ruinas. Una sombra colosal parpadeó.",
						"vietnamese": "Trung tâm của phế tích. Một bóng đen khổng lồ lấp lánh.",
						"thai": "ใจกลางซากปรักหักพัง. เงาขนาดยักษ์สั่นไหว.",
						"hindi": "खंडहरों का हृदय। एक विशाल छाया झिलमिला रही थी।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "…누구도 나의 연회에서 벗어날 수 없어.",
						"english": "...No one can escape my feast.",
						"japanese": "…誰も私の宴からは逃れられない。",
						"chinese": "……没有人能逃离我的盛宴。",
						"french": "...Personne ne peut échapper à mon festin.",
						"spanish": "...Nadie puede escapar de mi festín.",
						"vietnamese": "...Không ai có thể thoát khỏi bữa tiệc của ta.",
						"thai": "...ไม่มีใครหนีรอดงานเลี้ยงของข้าไปได้.",
						"hindi": "...कोई भी मेरी दावत से बच नहीं सकता।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 그림자가… 망각의 근원인가.",
						"english": "Is this shadow... the source of oblivion?",
						"japanese": "この影が…忘却の根源なのか。",
						"chinese": "这个影子……是遗忘的根源吗？",
						"french": "Cette ombre... est-elle la source de l'oubli ?",
						"spanish": "¿Es esta sombra... el origen del olvido?",
						"vietnamese": "Bóng đen này... có phải là nguồn gốc của sự lãng quên không?",
						"thai": "เงาอันนี้... คือต้นกำเนิดของความหลงลืมงั้นหรือ?",
						"hindi": "क्या यह छाया... विस्मृति का स्रोत है?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"spot": [
						2,
						2
					],
					"action": "enter",
					"type": "direction",
					"speaker": "dune",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "저게… 날 이렇게 만든 환각 속 괴물이야.",
						"english": "That's... the monster in the hallucination that made me like this.",
						"japanese": "あれが… 私をこうさせた幻覚の怪物だ。",
						"chinese": "那就是……让变成我这样的幻觉中的怪物。",
						"french": "C'est... le monstre de l'hallucination qui m'a rendu comme ça.",
						"spanish": "Ese es... el monstruo de la alucinación que me hizo así.",
						"vietnamese": "Đó là... con quái vật trong ảo giác đã khiến ta thành ra thế này.",
						"thai": "นั่นคือ... สัตว์ประหลาดในภาพหลอนที่ทำให้ข้าเป็นเช่นนี้",
						"hindi": "वह... मतिभ्रम का वह राक्षस है जिसने मुझे ऐसा बना दिया।"
					},
					"speaker": "dune",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 것들. 너희의 기억은 곧 나의 양식이 될 뿐.",
						"english": "Fools. Your memories will merely become my sustenance.",
						"japanese": "愚かな者たちめ。お前たちの記憶は、いずれ私の糧となるだけだ。",
						"chinese": "愚蠢的东西。你们的记忆很快就会成为我的养料。",
						"french": "Imbéciles. Vos souvenirs ne feront que devenir ma subsistance.",
						"spanish": "Necios. Vuestras memorias solo se convertirán en mi sustento.",
						"vietnamese": "Đồ ngốc. Ký ức của các ngươi sẽ chỉ trở thành nguồn sống của ta.",
						"thai": "พวกโง่เง่า ความทรงจำของพวกเจ้าจะเป็นเพียงอาหารของข้าเท่านั้น",
						"hindi": "मूर्खों। तुम्हारी यादें बस मेरा पोषण बन जाएंगी।"
					},
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "환상에 갇힌 채… 영원히 나에게 복종해라.",
						"english": "Trapped in illusion... obey me forever.",
						"japanese": "幻想に囚われたまま… 永遠に私に服従せよ。",
						"chinese": "被困在幻觉中……永远服从我吧。",
						"french": "Piégé dans l'illusion... obéis-moi pour toujours.",
						"spanish": "Atrapado en la ilusión... obedéceme para siempre.",
						"vietnamese": "Mắc kẹt trong ảo ảnh... vĩnh viễn phục tùng ta.",
						"thai": "จงติดอยู่ในภาพลวงตา... และเชื่อฟังข้าตลอดไป",
						"hindi": "भ्रम में फंसे... हमेशा के लिए मेरी आज्ञा मानो।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"duration_ms": 400,
					"speaker": "dune",
					"type": "direction",
					"spot": [
						2,
						2
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "안 돼… 기억을 잃으면… 모든 걸 잃는 거야.",
						"english": "No... if I lose my memories... I lose everything.",
						"japanese": "だめだ… 記憶を失ったら… 全てを失うことになる。",
						"chinese": "不……如果我失去了记忆……我就失去了一切。",
						"french": "Non... si je perds mes souvenirs... je perds tout.",
						"spanish": "No... si pierdo mis recuerdos... lo pierdo todo.",
						"vietnamese": "Không... nếu mất ký ức... ta sẽ mất tất cả.",
						"thai": "ไม่นะ... ถ้าข้าเสียความทรงจำไป... ข้าจะเสียทุกอย่างไป",
						"hindi": "नहीं... अगर मैंने अपनी यादें खो दीं... तो मैं सब कुछ खो दूंगा।"
					},
					"emotion": "sad",
					"speaker": "dune"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아직 포기 못 해… 다시 시작할 거야.",
						"english": "I can't give up yet... I'll start again.",
						"japanese": "まだ諦められない… もう一度やり直す。",
						"chinese": "我不能现在放弃……我会重新开始的。",
						"french": "Je ne peux pas encore abandonner... je recommencerai.",
						"spanish": "Todavía no puedo rendirme... volveré a empezar.",
						"vietnamese": "Ta chưa thể bỏ cuộc... Ta sẽ bắt đầu lại.",
						"thai": "ข้ายังยอมแพ้ไม่ได้... ข้าจะเริ่มต้นใหม่อีกครั้ง",
						"hindi": "मैं अभी हार नहीं मान सकता... मैं फिर से शुरू करूंगा।"
					},
					"emotion": "angry",
					"speaker": "character_any"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"사하르의 환상이 걷힌 자리.",
			"남은 건 폐허와 망각의 그림자뿐이었다.",
			"이상한 향신료의 잔향이 맴돌고,",
			"밤마다 정체 모를 노랫소리가 들려왔다.",
			"사막은, 더 큰 위협의 전조를 품고 있었다."
		],
		"english": [
			"Where Sahar's illusion faded.",
			"All that remained were ruins and shadows of oblivion.",
			"Lingering scent of strange spices hung in the air,",
			"And unknown songs echoed every night.",
			"The desert held a prelude to a greater threat."
		],
		"japanese": [
			"サハールの幻想が消え去った場所。",
			"残されたのは廃墟と忘却の影のみ。",
			"奇妙な香辛料の残香が漂い、",
			"夜ごと、正体不明の歌声が響き渡った。",
			"砂漠は、さらなる脅威の兆候を秘めていた。"
		],
		"chinese": [
			"萨哈尔的幻象消散之处。",
			"只剩下废墟和遗忘的阴影。",
			"奇异香料的余味 lingering,",
			"每晚都传来不明的歌声。",
			"沙漠，预示着更大的威胁。"
		],
		"french": [
			"Là où l'illusion de Sahar s'est dissipée.",
			"Il ne restait que des ruines et des ombres de l'oubli.",
			"Un parfum persistant d'épices étranges flottait,",
			"Et des chants inconnus résonnaient chaque nuit.",
			"Le désert portait le prélude d'une menace plus grande."
		],
		"spanish": [
			"Donde la ilusión de Sahar se desvaneció.",
			"Solo quedaron ruinas y sombras de olvido.",
			"Un persistente aroma a especias extrañas flotaba,",
			"Y cada noche se escuchaban canciones desconocidas.",
			"El desierto albergaba el preludio de una amenaza mayor."
		],
		"vietnamese": [
			"Nơi ảo ảnh Sahar tan biến.",
			"Chỉ còn lại tàn tích và bóng tối lãng quên.",
			"Dư vị của hương liệu kỳ lạ vẫn vương vấn,",
			"Và những bài hát không rõ nguồn gốc vang lên mỗi đêm.",
			"Sa mạc, chứa đựng điềm báo về một mối đe dọa lớn hơn."
		],
		"thai": [
			"ที่ซึ่งภาพลวงตาของซาฮาร์จางหายไป",
			"เหลือเพียงซากปรักหักพังและเงาแห่งการหลงลืม",
			"กลิ่นเครื่องเทศแปลกประหลาดยังคงอบอวล,",
			"และเสียงเพลงปริศนาดังขึ้นทุกคืน",
			"ทะเลทรายกุมลางร้ายที่ยิ่งใหญ่กว่าไว้"
		],
		"hindi": [
			"जहाँ सहार का भ्रम मिट गया।",
			"जो बचा था वह खंडहर और विस्मृति की छाया थी।",
			"अजीब मसालों की lingering खुशबू हवा में थी,",
			"और हर रात अज्ञात गाने गूँजते थे।",
			"रेगिस्तान में एक बड़े खतरे की प्रस्तावना छिपी थी।"
		]
	}
} as const;
