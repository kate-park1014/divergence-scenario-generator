export const scenario_forest_conduit_56_02 = {
	"scenario_id": "forest_conduit_56_02",
	"order": 2,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"ela": {
			"id": "mon_24765cb2-6fc0-452e-8969-871a82349c70",
			"name": {
				"korean": "엘라",
				"english": "Ela",
				"japanese": "エラ",
				"chinese": "艾拉",
				"french": "Ela",
				"spanish": "Ela",
				"vietnamese": "Ela",
				"thai": "เอล่า",
				"hindi": "एला"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/55d3e9ee-c589-40ab-dfa4-a658bbddd400/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/cfacc842-115e-4175-a7fa-3111a468ed00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"숲은 살아있는 미궁이 되었다.",
			"현실과 환영이 뒤섞인 곳.",
			"생존의 감각은 날카로운 의심으로 변하고.",
			"탐험대는 숲의 심연으로, 공포 속으로."
		],
		"english": [
			"The forest became a living labyrinth.",
			"A place where reality and illusion intertwine.",
			"The sense of survival sharpens into doubt.",
			"The expedition plunges into the forest's abyss, into fear."
		],
		"japanese": [
			"森は生きた迷宮となった。",
			"現実と幻影が入り混じる場所。",
			"生存の本能は鋭い疑念へと変わる。",
			"探検隊は森の深淵へ、恐怖の中へ。"
		],
		"chinese": [
			"森林变成了一座活迷宫。",
			"一个现实与幻象交织的地方。",
			"生存的本能变成了尖锐的怀疑。",
			"探险队深入森林深渊，坠入恐惧。"
		],
		"french": [
			"La forêt est devenue un labyrinthe vivant.",
			"Un lieu où la réalité et l'illusion s'entremêlent.",
			"Le sens de la survie se mue en un doute aiguisé.",
			"L'expédition s'enfonce dans les abysses de la forêt, dans la peur."
		],
		"spanish": [
			"El bosque se convirtió en un laberinto viviente.",
			"Un lugar donde la realidad y la ilusión se entrelazan.",
			"El sentido de supervivencia se agudiza en duda.",
			"La expedición se adentra en el abismo del bosque, en el miedo."
		],
		"vietnamese": [
			"Khu rừng đã trở thành một mê cung sống.",
			"Nơi thực tại và ảo ảnh hòa quyện.",
			"Bản năng sinh tồn biến thành sự nghi ngờ sắc bén.",
			"Đoàn thám hiểm lao vào vực sâu của khu rừng, vào nỗi sợ hãi."
		],
		"thai": [
			"ป่ากลายเป็นเขาวงกตมีชีวิต",
			"ที่ซึ่งความจริงและภาพลวงตาปะปนกัน",
			"สัญชาตญาณการเอาชีวิตรอดแปรเปลี่ยนเป็นความสงสัยอันแหลมคม",
			"คณะสำรวจดิ่งลึกลงสู่ห้วงเหวของป่า เข้าสู่ความกลัว"
		],
		"hindi": [
			"जंगल एक जीवित भूलभुलैया बन गया।",
			"एक ऐसी जगह जहाँ वास्तविकता और भ्रम आपस में गुंथे हुए हैं।",
			"जीवित रहने की भावना तीखे संदेह में बदल जाती है।",
			"अभियान दल जंगल की खाई में, भय में डूब जाता है।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "넝쿨이 얽힌 미로. 숲은 방향을 잃게 만들었다.",
						"english": "A maze of tangled vines. The forest made us lose our way.",
						"japanese": "蔓が絡みつく迷路。森は我々を迷わせた。",
						"chinese": "藤蔓缠绕的迷宫。森林让我们迷失了方向。",
						"french": "Un labyrinthe de vignes entrelacées. La forêt nous a fait perdre notre chemin.",
						"spanish": "Un laberinto de enredaderas. El bosque nos hizo perder el rumbo.",
						"vietnamese": "Mê cung dây leo chằng intricat. Rừng đã khiến chúng ta lạc lối.",
						"thai": "เขาวงกตเถาวัลย์พันกันยุ่งเหยิง ป่าทำให้เราหลงทาง",
						"hindi": "बेलों का एक उलझा हुआ चक्रव्यूह। जंगल ने हमें रास्ता भटका दिया।"
					}
				},
				{
					"content": {
						"korean": "…여기 길이 있었나? 아까랑 다른데.",
						"english": "...Was there a path here? It's different from before.",
						"japanese": "…ここに道があったか？さっきと違う。",
						"chinese": "……这里有路吗？和刚才不一样。",
						"french": "...Y avait-il un chemin ici ? C'est différent d'avant.",
						"spanish": "...¿Había un camino aquí? Es diferente a antes.",
						"vietnamese": "…Có đường ở đây sao? Khác với lúc nãy.",
						"thai": "…มีทางตรงนี้เหรอ? ไม่เหมือนเมื่อกี้เลย",
						"hindi": "...क्या यहाँ कोई रास्ता था? यह पहले जैसा नहीं है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"speaker": "ela",
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "sad",
					"speaker": "ela",
					"type": "speech",
					"content": {
						"korean": "누가 우리를 지켜보는 것 같아.",
						"english": "Someone feels like they're watching us.",
						"japanese": "誰かに見られている気がする。",
						"chinese": "感觉有人在看着我们。",
						"french": "J'ai l'impression que quelqu'un nous observe.",
						"spanish": "Siento que alguien nos está observando.",
						"vietnamese": "Cảm giác như có ai đó đang theo dõi chúng ta.",
						"thai": "รู้สึกเหมือนมีคนกำลังจับตาดูเราอยู่",
						"hindi": "लगता है कोई हमें देख रहा है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "…뭐라고?",
						"english": "...What did you say?",
						"japanese": "…何だと？",
						"chinese": "……你说什么？",
						"french": "...Qu'as-tu dit ?",
						"spanish": "...¿Qué dijiste?",
						"vietnamese": "…Cái gì cơ?",
						"thai": "…ว่าไงนะ?",
						"hindi": "...क्या कहा?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "ela",
					"type": "speech",
					"content": {
						"korean": "이 숲은… 모든 것을 보고, 듣고 있어.",
						"english": "This forest... sees and hears everything.",
						"japanese": "この森は…全てを見て、聞いている。",
						"chinese": "这片森林……它看到并听到了所有一切。",
						"french": "Cette forêt... voit et entend tout.",
						"spanish": "Este bosque... lo ve y lo oye todo.",
						"vietnamese": "Khu rừng này… nhìn thấy và nghe thấy mọi thứ.",
						"thai": "ป่าแห่งนี้… เห็นและได้ยินทุกสิ่ง",
						"hindi": "यह जंगल... सब कुछ देखता और सुनता है।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						3
					],
					"speaker": "ela",
					"action": "enter"
				},
				{
					"content": {
						"korean": "들려? 속삭이는 소리.",
						"english": "Do you hear that? The whispering.",
						"japanese": "聞こえるか？ささやき声が。",
						"chinese": "听到了吗？那窃窃私语声。",
						"french": "Tu entends ? Les murmures.",
						"spanish": "¿Oyes eso? Los susurros.",
						"vietnamese": "Nghe thấy không? Tiếng thì thầm.",
						"thai": "ได้ยินไหม? เสียงกระซิบ",
						"hindi": "सुनाई दे रहा है? फुसफुसाहट।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "ela"
				},
				{
					"type": "speech",
					"content": {
						"korean": "바람 소리 아니야?",
						"english": "Isn't that the wind?",
						"japanese": "これ、風の音じゃない？",
						"chinese": "这不是风声吗？",
						"french": "N'est-ce pas le vent ?",
						"spanish": "¿No es el viento?",
						"vietnamese": "Không phải tiếng gió sao?",
						"thai": "นั่นไม่ใช่เสียงลมเหรอ?",
						"hindi": "यह हवा की आवाज़ नहीं है क्या?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아니. 이건… 기억의 소리야.",
						"english": "No. This is... the sound of memories.",
						"japanese": "いいえ。これは…記憶の音よ。",
						"chinese": "不。这是……记忆的声音。",
						"french": "Non. C'est... le son des souvenirs.",
						"spanish": "No. Este es... el sonido de los recuerdos.",
						"vietnamese": "Không. Đây là... âm thanh của ký ức.",
						"thai": "ไม่ใช่ นี่คือ... เสียงแห่งความทรงจำ",
						"hindi": "नहीं। यह... यादों की आवाज़ है।"
					},
					"emotion": "base",
					"speaker": "ela"
				},
				{
					"type": "speech",
					"content": {
						"korean": "점점 더 기분 나빠져.",
						"english": "It's getting more unsettling.",
						"japanese": "だんだん気分が悪くなる。",
						"chinese": "感觉越来越不舒服了。",
						"french": "C'est de plus en plus inquiétant.",
						"spanish": "Se está volviendo cada vez más desagradable.",
						"vietnamese": "Càng ngày càng khó chịu.",
						"thai": "รู้สึกแย่ลงเรื่อยๆ",
						"hindi": "यह और भी ज़्यादा ख़राब होता जा रहा है।"
					},
					"emotion": "sad",
					"speaker": "character_1"
				},
				{
					"emotion": "base",
					"speaker": "ela",
					"content": {
						"korean": "…서로 조심해야 해. 이 숲은 우리 안의 약점을 노릴 거야.",
						"english": "...We need to be careful with each other. This forest will prey on our weaknesses.",
						"japanese": "…お互い用心しなきゃ。この森は私たちの弱点を狙ってくるわ。",
						"chinese": "……我们必须互相提防。这片森林会趁虚而入。",
						"french": "...Nous devons faire attention les uns aux autres. Cette forêt ciblera nos faiblesses.",
						"spanish": "...Debemos tener cuidado los unos con los otros. Este bosque se aprovechará de nuestras debilidades.",
						"vietnamese": "...Chúng ta phải cẩn thận với nhau. Rừng này sẽ nhắm vào điểm yếu của chúng ta.",
						"thai": "...เราต้องระวังกันเอง ป่านี้จะจ้องเล่นงานจุดอ่อนของเรา",
						"hindi": "...हमें एक-दूसरे से सावधान रहना होगा। यह जंगल हमारी कमज़ोरियों का फ़ायदा उठाएगा।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						3,
						3
					],
					"speaker": "ela",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "길이 점점 사라지고 있어. 함정일 수도 있어.",
						"english": "The path is disappearing. It might be a trap.",
						"japanese": "道がだんだん消えてる。罠かもしれない。",
						"chinese": "路正在逐渐消失。这可能是个陷阱。",
						"french": "Le chemin disparaît. C'est peut-être un piège.",
						"spanish": "El camino está desapareciendo. Podría ser una trampa.",
						"vietnamese": "Con đường đang dần biến mất. Có thể là bẫy.",
						"thai": "ทางกำลังหายไปเรื่อยๆ อาจเป็นกับดัก",
						"hindi": "रास्ता धीरे-धीरे गायब हो रहा है। यह एक जाल भी हो सकता है।"
					},
					"speaker": "ela",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "우리가 너무 깊이 들어온 건가?",
						"english": "Did we come in too deep?",
						"japanese": "私たちが深入りしすぎたのかな？",
						"chinese": "我们是不是走得太深了？",
						"french": "Sommes-nous allés trop loin ?",
						"spanish": "¿Hemos entrado demasiado profundo?",
						"vietnamese": "Chúng ta có đi quá sâu không?",
						"thai": "เราเข้ามาลึกเกินไปหรือเปล่า?",
						"hindi": "क्या हम बहुत अंदर आ गए हैं?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "우릴 여기로 끌어들인 게 누굴까.",
						"english": "Who lured us here?",
						"japanese": "誰が私たちをここに引きずり込んだんだろう。",
						"chinese": "是谁把我们引到这里来的？",
						"french": "Qui nous a attirés ici ?",
						"spanish": "¿Quién nos trajo aquí?",
						"vietnamese": "Ai đã dụ chúng ta đến đây?",
						"thai": "ใครกันที่ล่อเรามาที่นี่",
						"hindi": "हमें यहाँ कौन लाया?"
					},
					"emotion": "angry",
					"speaker": "ela"
				},
				{
					"speaker": "character_2",
					"emotion": "angry",
					"content": {
						"korean": "지금 서로 의심할 때가 아니잖아!",
						"english": "Now's not the time to suspect each other!",
						"japanese": "今、お互いを疑ってる場合じゃない！",
						"chinese": "现在不是互相猜疑的时候！",
						"french": "Ce n'est pas le moment de se méfier les uns des autres !",
						"spanish": "¡Ahora no es el momento de desconfiar los unos de los otros!",
						"vietnamese": "Bây giờ không phải lúc nghi ngờ lẫn nhau!",
						"thai": "นี่ไม่ใช่เวลาที่จะมาสงสัยกันเอง!",
						"hindi": "यह एक-दूसरे पर शक करने का समय नहीं है!"
					},
					"type": "speech"
				},
				{
					"speaker": "ela",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…난 살아남을 거야. 누구보다.",
						"english": "...I will survive. More than anyone.",
						"japanese": "…私は生き残るわ。誰よりも。",
						"chinese": "……我会活下去的。比任何人都更久。",
						"french": "...Je survivrai. Plus que quiconque.",
						"spanish": "...Sobreviviré. Más que nadie.",
						"vietnamese": "...Tôi sẽ sống sót. Hơn bất cứ ai.",
						"thai": "...ฉันจะรอด ใครก็สู้ฉันไม่ได้",
						"hindi": "...मैं बचूंगा। किसी और से ज़्यादा।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "ela",
					"spot": [
						3,
						3
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "고대 문양이 그려진 제단이 나타났다. 숲의 모든 정보가 흘러드는 듯했다.",
						"english": "An altar with ancient patterns appeared. It felt as if all the forest's information was flowing into it.",
						"japanese": "古代の模様が描かれた祭壇が現れた。森のあらゆる情報が流れ込んでいるようだった。",
						"chinese": "一座刻有古代图腾的祭坛出现了。仿佛森林中所有的信息都汇聚于此。",
						"french": "Un autel orné de motifs anciens est apparu. Il semblait que toutes les informations de la forêt y affluaient.",
						"spanish": "Apareció un altar con patrones antiguos. Parecía que toda la información del bosque fluía hacia él.",
						"vietnamese": "Một bàn thờ với các hoa văn cổ đại xuất hiện. Dường như mọi thông tin của khu rừng đều đang đổ về đó.",
						"thai": "แท่นบูชาที่มีลวดลายโบราณปรากฏขึ้น ราวกับว่าข้อมูลทั้งหมดของป่าไหลรวมอยู่ที่นั่น",
						"hindi": "एक प्राचीन नक्काशीदार वेदी प्रकट हुई। ऐसा लग रहा था मानो जंगल की सारी जानकारी उसमें समा रही हो।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이게 뭐야? 환영인가?",
						"english": "What is this? A hallucination?",
						"japanese": "これは何だ？幻覚か？",
						"chinese": "这是什么？幻象吗？",
						"french": "Qu'est-ce que c'est ? Une illusion ?",
						"spanish": "¿Qué es esto? ¿Una alucinación?",
						"vietnamese": "Cái gì đây? Ảo ảnh sao?",
						"thai": "นี่อะไรน่ะ? ภาพหลอนเหรอ?",
						"hindi": "यह क्या है? क्या यह मतिभ्रम है?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "아니. 숲이 우리에게 보여주는 거야. 진실… 아니면 함정.",
						"english": "No. The forest is showing us. The truth… or a trap.",
						"japanese": "違う。森が私たちに見せているんだ。真実…それとも罠か。",
						"chinese": "不。是森林在向我们展示。真相……或是陷阱。",
						"french": "Non. La forêt nous montre. La vérité… ou un piège.",
						"spanish": "No. El bosque nos lo está mostrando. La verdad… o una trampa.",
						"vietnamese": "Không. Rừng đang cho chúng ta thấy. Sự thật… hay một cái bẫy.",
						"thai": "ไม่ใช่. ป่ากำลังแสดงให้เราเห็น. ความจริง… หรือกับดัก.",
						"hindi": "नहीं। जंगल हमें दिखा रहा है। सच… या एक जाल।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "ela"
				},
				{
					"speaker": "character_3",
					"emotion": "sad",
					"content": {
						"korean": "나는… 믿을 수 없어.",
						"english": "I… can't believe it.",
						"japanese": "私は…信じられない。",
						"chinese": "我……无法相信。",
						"french": "Je… n'y crois pas.",
						"spanish": "Yo… no puedo creerlo.",
						"vietnamese": "Tôi… không thể tin được.",
						"thai": "ฉัน… ไม่อยากจะเชื่อเลย.",
						"hindi": "मैं… विश्वास नहीं कर सकता।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이제 돌아갈 수 없어. 여기서 죽거나, 진실을 마주하거나.",
						"english": "No turning back now. Die here, or face the truth.",
						"japanese": "もう引き返せない。ここで死ぬか、真実と向き合うか。",
						"chinese": "已经无法回头了。要么死在这里，要么面对真相。",
						"french": "Impossible de revenir en arrière. Mourir ici, ou affronter la vérité.",
						"spanish": "Ya no hay vuelta atrás. Morir aquí, o enfrentar la verdad.",
						"vietnamese": "Không thể quay lại nữa. Chết ở đây, hoặc đối mặt với sự thật.",
						"thai": "ถอยกลับไม่ได้แล้ว. ตายที่นี่, หรือเผชิญหน้ากับความจริง.",
						"hindi": "अब वापस नहीं जा सकते। या तो यहीं मर जाओ, या सच का सामना करो।"
					},
					"speaker": "ela",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "ela",
					"content": {
						"korean": "…그리고 그 진실은, 우리 중 한 명에게서 시작될 거야.",
						"english": "…And that truth will begin with one of us.",
						"japanese": "…そしてその真実は、私たちの一人から始まるだろう。",
						"chinese": "……而那个真相，将从我们中的一人开始。",
						"french": "…Et cette vérité commencera avec l'un de nous.",
						"spanish": "…Y esa verdad comenzará con uno de nosotros.",
						"vietnamese": "…Và sự thật đó, sẽ bắt đầu từ một trong số chúng ta.",
						"thai": "…และความจริงนั้น, จะเริ่มต้นจากหนึ่งในพวกเรา.",
						"hindi": "…और वह सच, हम में से किसी एक से शुरू होगा।"
					},
					"type": "speech"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "…끝났다고 생각하나?",
						"english": "...Do you think it's over?",
						"japanese": "…終わったとでも？",
						"chinese": "……你以为结束了吗？",
						"french": "...Tu penses que c'est fini ?",
						"spanish": "...¿Crees que ha terminado?",
						"vietnamese": "...Ngươi nghĩ nó đã kết thúc sao?",
						"thai": "...คิดว่าจบแล้วเหรอ?",
						"hindi": "...क्या तुम्हें लगता है कि यह खत्म हो गया है?"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이것은 시작일 뿐… 숲은 더 깊은 진실을 감추고 있다.",
						"english": "This is just the beginning... The forest hides deeper truths.",
						"japanese": "これは始まりに過ぎない… 森はもっと深い真実を隠している。",
						"chinese": "这只是开始……森林隐藏着更深的真相。",
						"french": "Ce n'est que le début... La forêt cache des vérités plus profondes.",
						"spanish": "Esto es solo el principio... El bosque oculta verdades más profundas.",
						"vietnamese": "Đây chỉ là khởi đầu... Rừng ẩn chứa những sự thật sâu xa hơn.",
						"thai": "นี่เป็นเพียงจุดเริ่มต้น... ป่าซ่อนความจริงที่ลึกซึ้งกว่านั้น",
						"hindi": "यह तो बस शुरुआत है... जंगल गहरे रहस्यों को छुपाए हुए है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "…아직 끝나지 않았어. 우린 더 나아가야 해.",
						"english": "...It's not over yet. We must press onward.",
						"japanese": "…まだ終わってない。我々はもっと進まなければならない。",
						"chinese": "……还没结束。我们必须继续前进。",
						"french": "...Ce n'est pas encore fini. Nous devons avancer.",
						"spanish": "...Aún no ha terminado. Debemos seguir adelante.",
						"vietnamese": "...Vẫn chưa kết thúc. Chúng ta phải tiến xa hơn nữa.",
						"thai": "...ยังไม่จบ เราต้องไปต่อ",
						"hindi": "...अभी खत्म नहीं हुआ है। हमें और आगे बढ़ना होगा।"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "ela",
					"spot": [
						3,
						3
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "이 숲의 진실은… 우리가 아는 것보다 훨씬 위험해.",
						"english": "The truth of this forest... is far more dangerous than we know.",
						"japanese": "この森の真実は… 我々の知るより遥かに危険だ。",
						"chinese": "这片森林的真相……比我们所知的危险得多。",
						"french": "La vérité de cette forêt... est bien plus dangereuse que ce que nous savons.",
						"spanish": "La verdad de este bosque... es mucho más peligrosa de lo que sabemos.",
						"vietnamese": "Sự thật về khu rừng này... nguy hiểm hơn nhiều so với những gì chúng ta biết.",
						"thai": "ความจริงของป่านี้... อันตรายกว่าที่เรารู้มาก",
						"hindi": "इस जंगल का सच... हमारी जानकारी से कहीं ज़्यादा खतरनाक है।"
					},
					"type": "speech",
					"speaker": "ela",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "혼돈은 가라앉지 않았다. 숲은 여전히 다음 희생자를 기다리고 있었다.",
						"english": "The chaos hasn't settled. The forest still awaited its next victim.",
						"japanese": "混沌は収まらなかった。森は依然として次の犠牲者を待っていた。",
						"chinese": "混沌并未平息。森林仍在等待下一个受害者。",
						"french": "Le chaos ne s'est pas calmé. La forêt attendait toujours sa prochaine victime.",
						"spanish": "El caos no ha cesado. El bosque aún esperaba a su próxima víctima.",
						"vietnamese": "Sự hỗn loạn chưa lắng xuống. Khu rừng vẫn đang chờ đợi nạn nhân tiếp theo.",
						"thai": "ความวุ่นวายยังไม่สงบ ป่ายังคงรอเหยื่อรายต่อไป",
						"hindi": "अराजकता शांत नहीं हुई थी। जंगल अभी भी अगले शिकार का इंतजार कर रहा था।"
					},
					"type": "speech"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "넝쿨이 뒤엉킨 어둠 속에서 거대한 그림자가 움직였다.",
						"english": "In the darkness tangled with vines, a giant shadow stirred.",
						"japanese": "蔓が絡みつく闇の中で、巨大な影が動いた。",
						"chinese": "在藤蔓缠绕的黑暗中，一个巨大的影子动了。",
						"french": "Dans l'obscurité enchevêtrée de vignes, une ombre gigantesque s'agita.",
						"spanish": "En la oscuridad enredada con enredaderas, una sombra gigante se movió.",
						"vietnamese": "Trong bóng tối phủ đầy dây leo, một cái bóng khổng lồ cựa quậy.",
						"thai": "ในความมืดที่เถาวัลย์พันเกี่ยว, เงาขนาดใหญ่เคลื่อนไหว.",
						"hindi": "बेलों से उलझी अंधेरे में, एक विशाल छाया हिली।"
					}
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…숲의 불청객들.",
						"english": "…Uninvited guests of the forest.",
						"japanese": "…森の招かれざる客たち。",
						"chinese": "……森林的不速之客。",
						"french": "…Invités indésirables de la forêt.",
						"spanish": "…Invitados no deseados del bosque.",
						"vietnamese": "…Những kẻ không mời trong rừng.",
						"thai": "…แขกไม่ได้รับเชิญของป่า.",
						"hindi": "…जंगल के अनचाहे मेहमान।"
					}
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "너희의 의심과 공포가 나를 불렀다.",
						"english": "Your doubt and fear have summoned me.",
						"japanese": "お前たちの疑念と恐怖が、私を呼んだのだ。",
						"chinese": "你们的怀疑与恐惧把我召唤而来。",
						"french": "Vos doutes et votre peur m'ont invoqué.",
						"spanish": "Vuestra duda y miedo me han invocado.",
						"vietnamese": "Sự nghi ngờ và nỗi sợ hãi của các ngươi đã triệu hồi ta.",
						"thai": "ความสงสัยและความกลัวของพวกเจ้า ได้เรียกข้ามา.",
						"hindi": "तुम्हारे संदेह और भय ने मुझे बुलाया है।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "네가 이 모든 걸 꾸민 거야?",
						"english": "You orchestrated all of this?",
						"japanese": "お前がこれら全てを企んだのか？",
						"chinese": "是你策划了这一切吗？",
						"french": "C'est toi qui as orchestré tout ça ?",
						"spanish": "¿Fuiste tú quien orquestó todo esto?",
						"vietnamese": "Ngươi đã bày ra tất cả chuyện này sao?",
						"thai": "แกเป็นคนจัดฉากเรื่องทั้งหมดนี่เหรอ?",
						"hindi": "क्या तुमने यह सब रचा है?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "나는 숲의 기억. 너희 안의 어둠을 먹고 자란다.",
						"english": "I am the memory of the forest. I feed on the darkness within you.",
						"japanese": "私は森の記憶。お前たちの中の闇を糧に育つ。",
						"chinese": "我是森林的记忆。我以你们内心的黑暗为食。",
						"french": "Je suis la mémoire de la forêt. Je me nourris des ténèbres en vous.",
						"spanish": "Soy la memoria del bosque. Me alimento de la oscuridad en vuestro interior.",
						"vietnamese": "Ta là ký ức của rừng. Ta lớn lên nhờ bóng tối trong các ngươi.",
						"thai": "ข้าคือความทรงจำของป่า. ข้าเติบโตด้วยความมืดมิดในตัวพวกเจ้า.",
						"hindi": "मैं जंगल की स्मृति हूँ। मैं तुम्हारे अंदर के अंधेरे को खाकर बढ़ता हूँ।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "닥쳐! 쓰러뜨려야 해!",
						"english": "Silence! We must defeat it!",
						"japanese": "黙れ！倒すんだ！",
						"chinese": "闭嘴！必须打倒它！",
						"french": "Tais-toi ! Il faut l'abattre !",
						"spanish": "¡Cállate! ¡Tenemos que derribarlo!",
						"vietnamese": "Im đi! Phải hạ gục nó!",
						"thai": "หุบปาก! ต้องโค่นมันลง!",
						"hindi": "चुप रहो! हमें इसे हराना होगा!"
					},
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "너희의 의심이 너희를 삼킬 것이다.",
						"english": "Your doubt will consume you.",
						"japanese": "お前たちの疑念がお前たちを飲み込むだろう。",
						"chinese": "你们的怀疑会吞噬你们。",
						"french": "Votre doute vous dévorera.",
						"spanish": "Vuestra duda os consumirá.",
						"vietnamese": "Sự nghi ngờ của các ngươi sẽ nuốt chửng các ngươi.",
						"thai": "ความสงสัยของพวกเจ้าจะกลืนกินพวกเจ้า",
						"hindi": "तुम्हारा संदेह तुम्हें निगल जाएगा।"
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "포기하는 것이 현명할 거야.",
						"english": "It would be wise to give up.",
						"japanese": "諦めるのが賢明だろう。",
						"chinese": "放弃会是明智之举。",
						"french": "Il serait sage d'abandonner.",
						"spanish": "Sería prudente rendirse.",
						"vietnamese": "Từ bỏ sẽ là khôn ngoan.",
						"thai": "ยอมแพ้เสียเถอะ มันจะฉลาดกว่า",
						"hindi": "हार मान लेना ही समझदारी होगी।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "…아니. 절대 포기하지 않아.",
						"english": "...No. Never give up.",
						"japanese": "…いや。決して諦めない。",
						"chinese": "……不。绝不放弃。",
						"french": "...Non. Jamais je n'abandonnerai.",
						"spanish": "...No. Nunca me rendiré.",
						"vietnamese": "...Không. Tuyệt đối không bỏ cuộc.",
						"thai": "...ไม่ ไม่มีทางยอมแพ้",
						"hindi": "...नहीं। कभी हार नहीं मानूंगा।"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						3
					],
					"speaker": "ela"
				},
				{
					"type": "speech",
					"content": {
						"korean": "내가 경고했잖아…!",
						"english": "I warned you...!",
						"japanese": "警告したはずだ…！",
						"chinese": "我警告过你……！",
						"french": "Je vous avais prévenu...!",
						"spanish": "¡Te lo advertí...!",
						"vietnamese": "Ta đã cảnh báo ngươi rồi mà...!",
						"thai": "ข้าเตือนเจ้าแล้ว...!",
						"hindi": "मैंने तुम्हें चेतावनी दी थी...!"
					},
					"emotion": "sad",
					"speaker": "ela"
				}
			]
		}
	]
} as const;
