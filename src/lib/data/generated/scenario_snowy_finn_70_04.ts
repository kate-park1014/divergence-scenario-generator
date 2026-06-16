export const scenario_snowy_finn_70_04 = {
	"scenario_id": "snowy_finn_70_04",
	"order": 4,
	"act": "rising",
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
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"숲의 깊은 곳. 거대한 그림자가 길을 막았다.",
			"누구도 다가가지 못했던 고독한 존재.",
			"인카는 그 안에서 다른 것을 보았다.",
			"괴물 너머의, 떨고 있는 영혼을."
		],
		"english": [
			"Deep in the forest. A giant shadow blocked the path.",
			"A solitary being no one could approach.",
			"Inka saw something else within it.",
			"Beyond the monster, a trembling soul."
		],
		"japanese": [
			"森の奥深く。巨大な影が道を塞いだ。",
			"誰も近づけなかった孤独な存在。",
			"インカはその中で別のものを見た。",
			"怪物の向こうに、震える魂を。"
		],
		"chinese": [
			"森林深处。巨大的影子挡住了去路。",
			"一个无人敢靠近的孤独存在。",
			"印卡在其中看到了别的东西。",
			"在怪物之外，一个颤抖的灵魂。"
		],
		"french": [
			"Au fond de la forêt. Une ombre gigantesque bloquait le chemin.",
			"Une existence solitaire que personne ne pouvait approcher.",
			"Inka y vit autre chose.",
			"Au-delà du monstre, une âme tremblante."
		],
		"spanish": [
			"En lo profundo del bosque. Una sombra gigante bloqueó el camino.",
			"Un ser solitario al que nadie podía acercarse.",
			"Inka vio algo más dentro de eso.",
			"Más allá del monstruo, un alma temblorosa."
		],
		"vietnamese": [
			"Sâu trong rừng. Một bóng tối khổng lồ đã chặn đường.",
			"Một sinh vật cô độc mà không ai có thể tiếp cận.",
			"Inka đã nhìn thấy điều khác bên trong nó.",
			"Vượt ra ngoài con quái vật, một linh hồn run rẩy."
		],
		"thai": [
			"ลึกเข้าไปในป่า เงาขนาดมหึมาขวางทางอยู่",
			"สิ่งมีชีวิตโดดเดี่ยวที่ไม่มีใครเข้าใกล้ได้",
			"อินคาเห็นสิ่งอื่นอยู่ภายในนั้น",
			"เลยสัตว์ประหลาดไป, วิญญาณที่สั่นสะท้าน"
		],
		"hindi": [
			"जंगल के गहरे भीतर। एक विशाल छाया ने रास्ता रोक दिया।",
			"एक एकाकी प्राणी जिसके पास कोई नहीं जा सकता था।",
			"इंका ने उसके भीतर कुछ और देखा।",
			"राक्षस से परे, एक कांपती हुई आत्मा।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "으르렁거리는 소리가 숲을 울렸다. 정체 모를 그림자가 앞을 가로막았다.",
						"english": "A growl echoed through the forest. An unknown shadow blocked the way.",
						"japanese": "唸り声が森に響いた。正体不明の影が道を塞いだ。",
						"chinese": "咆哮声响彻森林。一个不明的影子挡住了去路。",
						"french": "Un grognement résonna dans la forêt. Une ombre inconnue barra le chemin.",
						"spanish": "Un gruñido resonó en el bosque. Una sombra desconocida bloqueó el camino.",
						"vietnamese": "Tiếng gầm vang vọng khắp rừng. Một bóng tối không rõ danh tính đã chặn đường.",
						"thai": "เสียงคำรามดังก้องไปทั่วป่า เงาลึกลับขวางทางอยู่",
						"hindi": "एक गुर्राहट जंगल में गूँज उठी। एक अज्ञात छाया ने रास्ता रोक दिया।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "또 다른… 괴물?",
						"english": "Another… monster?",
						"japanese": "また別の…怪物？",
						"chinese": "又一个……怪物？",
						"french": "Encore un… monstre ?",
						"spanish": "¿Otro… monstruo?",
						"vietnamese": "Một… con quái vật khác?",
						"thai": "อีกตัว… สัตว์ประหลาด?",
						"hindi": "एक और… राक्षस?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"speaker": "inka",
					"spot": [
						3,
						3
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "inka",
					"emotion": "sad",
					"content": {
						"korean": "…두려워하는군요.",
						"english": "…You're afraid.",
						"japanese": "…恐れているのですね。",
						"chinese": "……你在害怕。",
						"french": "…Vous avez peur.",
						"spanish": "…Tienes miedo.",
						"vietnamese": "…Bạn đang sợ hãi.",
						"thai": "…คุณกำลังกลัว",
						"hindi": "…तुम डरे हुए हो।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "inka",
					"spot": [
						3,
						3
					]
				},
				{
					"speaker": "inka",
					"emotion": "sad",
					"content": {
						"korean": "당신은… 왜 여기에 혼자 있나요?",
						"english": "Why are you… alone here?",
						"japanese": "あなたは…なぜここに一人でいるのですか？",
						"chinese": "你为什么……独自一人在这里？",
						"french": "Pourquoi êtes-vous… seul ici ?",
						"spanish": "¿Por qué estás… solo aquí?",
						"vietnamese": "Bạn… tại sao lại ở đây một mình?",
						"thai": "ทำไมคุณ… ถึงอยู่คนเดียวที่นี่?",
						"hindi": "तुम… यहाँ अकेले क्यों हो?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "묻지 마라. {random_boss}는 홀로 존재한다.",
						"english": "Do not ask. {random_boss} exists alone.",
						"japanese": "問うな。{random_boss}は孤高に存在する。",
						"chinese": "不要问。{random_boss}独自存在。",
						"french": "Ne demande pas. {random_boss} existe seul.",
						"spanish": "No preguntes. {random_boss} existe solo.",
						"vietnamese": "Đừng hỏi. {random_boss} tồn tại một mình.",
						"thai": "อย่าถามเลย {random_boss} อยู่เพียงลำพัง",
						"hindi": "मत पूछो। {random_boss} अकेला ही मौजूद है।"
					},
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "인카, 저런 괴물한테 말 걸지 마.",
						"english": "Inka, don't talk to monsters like that.",
						"japanese": "インカ、あんな怪物に話しかけるな。",
						"chinese": "印卡，别和那种怪物说话。",
						"french": "Inka, ne parle pas à ce genre de monstre.",
						"spanish": "Inka, no le hables a monstruos así.",
						"vietnamese": "Inka, đừng nói chuyện với loại quái vật đó.",
						"thai": "อินคา อย่าคุยกับสัตว์ประหลาดแบบนั้น",
						"hindi": "इंका, ऐसे राक्षसों से बात मत करो।"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "inka",
					"duration_ms": 500,
					"spot": [
						3,
						3
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "inka",
					"emotion": "sad",
					"content": {
						"korean": "당신의 눈에서… 슬픔이 보여요.",
						"english": "I see... sadness in your eyes.",
						"japanese": "あなたの瞳に… 悲しみが見えます。",
						"chinese": "我从你的眼中…看到了悲伤。",
						"french": "Je vois… de la tristesse dans vos yeux.",
						"spanish": "Veo… tristeza en tus ojos.",
						"vietnamese": "Trong mắt ngài… tôi thấy sự buồn bã.",
						"thai": "ฉันเห็น…ความเศร้าในดวงตาของคุณ",
						"hindi": "आपकी आँखों में… मुझे उदासी दिख रही है।"
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "슬픔? {random_boss}는 감정 따위 없다.",
						"english": "Sadness? {random_boss} has no emotions.",
						"japanese": "悲しみ？ {random_boss}に感情などない。",
						"chinese": "悲伤？ {random_boss}才没有感情。",
						"french": "Tristesse ? {random_boss} n'a pas d'émotions.",
						"spanish": "¿Tristeza? {random_boss} no tiene emociones.",
						"vietnamese": "Buồn bã? {random_boss} không có thứ gọi là cảm xúc.",
						"thai": "ความเศร้า? {random_boss}ไม่มีอารมณ์ความรู้สึกหรอก",
						"hindi": "उदासी? {random_boss} को कोई भावनाएँ नहीं।"
					},
					"type": "speech"
				},
				{
					"speaker": "inka",
					"emotion": "sad",
					"content": {
						"korean": "…아니요. 당신은 그저… 친구가 필요한 거죠?",
						"english": "...No. You just... need a friend, don't you?",
						"japanese": "…いいえ。あなたはただ… 友達が必要なのでしょう？",
						"chinese": "…不。你只是…需要一个朋友，对吗？",
						"french": "...Non. Vous avez juste... besoin d'un ami, n'est-ce pas ?",
						"spanish": "...No. Tú solo... necesitas un amigo, ¿verdad?",
						"vietnamese": "…Không. Ngài chỉ là… cần một người bạn, phải không?",
						"thai": "...ไม่สิ คุณแค่...ต้องการเพื่อนใช่ไหม?",
						"hindi": "...नहीं। आपको बस… एक दोस्त की ज़रूरत है, है ना?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "인카!",
						"english": "Inka!",
						"japanese": "インカ！",
						"chinese": "因卡！",
						"french": "Inka !",
						"spanish": "¡Inka!",
						"vietnamese": "Inka!",
						"thai": "อินคา!",
						"hindi": "इंका!"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"speaker": "inka",
					"duration_ms": 500,
					"spot": [
						3,
						3
					]
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "다신 그딴 소리 하지 마라! {random_boss}에게… 친구 따위 필요 없어!",
						"english": "Don't say that again! {random_boss} needs no friend!",
						"japanese": "二度とそんなこと言うな！ {random_boss}に… 友達など必要ない！",
						"chinese": "别再胡说八道了！ {random_boss}才不需要什么朋友！",
						"french": "Ne répète jamais ça ! {random_boss} n'a pas besoin d'ami !",
						"spanish": "¡No vuelvas a decir eso! ¡{random_boss} no necesita amigos!",
						"vietnamese": "Đừng nói thế nữa! {random_boss} không cần bạn bè!",
						"thai": "อย่าพูดแบบนั้นอีกนะ! {random_boss}ไม่ต้องการเพื่อน!",
						"hindi": "फिर कभी ऐसा मत कहना! {random_boss} को… दोस्त की ज़रूरत नहीं!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "inka",
					"emotion": "sad",
					"content": {
						"korean": "당신이 외롭다는 걸 알아요…",
						"english": "I know you're lonely...",
						"japanese": "あなたが寂しいのは分かります…",
						"chinese": "我知道你很寂寞…",
						"french": "Je sais que vous êtes seul...",
						"spanish": "Sé que estás solo...",
						"vietnamese": "Tôi biết ngài cô đơn…",
						"thai": "ฉันรู้ว่าคุณเหงา...",
						"hindi": "मुझे पता है कि आप अकेले हैं…"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "{random_boss}가 흔들리고 있어! 공격해야 해!",
						"english": "{random_boss} is wavering! We must attack!",
						"japanese": "{random_boss}が揺らいでいる！攻撃しなくては！",
						"chinese": "{random_boss}动摇了！我们必须攻击！",
						"french": "{random_boss} hésite ! Il faut attaquer !",
						"spanish": "¡{random_boss} está dudando! ¡Hay que atacar!",
						"vietnamese": "{random_boss} đang lung lay! Chúng ta phải tấn công!",
						"thai": "{random_boss}กำลังสั่นคลอน! เราต้องโจมตี!",
						"hindi": "{random_boss} हिल रहा है! हमें हमला करना चाहिए!"
					}
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "하찮은 것들. {random_boss}의 그림자에… 쓰러져라.",
						"english": "Worthless wretches. Fall… in the shadow of {random_boss}.",
						"japanese": "愚かな者たち。{random_boss}の影に…倒れ伏せ。",
						"chinese": "卑微之物。在{random_boss}的阴影下…倒下吧。",
						"french": "Misérables. Tombez… à l'ombre de {random_boss}.",
						"spanish": "Seres insignificantes. Caed… bajo la sombra de {random_boss}.",
						"vietnamese": "Lũ vô dụng. Hãy gục ngã… dưới bóng của {random_boss}.",
						"thai": "เจ้าพวกไร้ค่า จงล้มลง…ภายใต้เงาของ {random_boss}",
						"hindi": "तुच्छ प्राणी। {random_boss} की छाया में… गिर जाओ।"
					},
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "당신도… 고통스러워 보여요.",
						"english": "You… look pained too.",
						"japanese": "あなたも…苦しそうですね。",
						"chinese": "你也…看起来很痛苦。",
						"french": "Vous aussi… vous semblez souffrir.",
						"spanish": "Tú también… pareces sufrir.",
						"vietnamese": "Bạn cũng… trông thật đau khổ.",
						"thai": "คุณเองก็…ดูเหมือนกำลังเจ็บปวด",
						"hindi": "तुम भी… पीड़ा में दिखते हो।"
					},
					"speaker": "inka",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "아직… 포기 안 해!",
						"english": "I won't give up… yet!",
						"japanese": "まだ…諦めない！",
						"chinese": "我还没…放弃！",
						"french": "Je n'abandonne pas… encore !",
						"spanish": "¡Todavía… no me rindo!",
						"vietnamese": "Vẫn chưa… bỏ cuộc đâu!",
						"thai": "ยัง…ไม่ยอมแพ้!",
						"hindi": "अभी… हार नहीं मानूंगा!"
					}
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "…친구… 따위…",
						"english": "…Friends… worthless…",
						"japanese": "…友達…など…",
						"chinese": "…朋友…那种东西…",
						"french": "…Amis… minable…",
						"spanish": "…Amigos… qué tontería…",
						"vietnamese": "…Bạn bè… vớ vẩn…",
						"thai": "…เพื่อน…อะไรแบบนั้น…",
						"hindi": "दोस्त… बकवास…"
					},
					"speaker": "random_boss",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "inka",
					"emotion": "sad",
					"content": {
						"korean": "…외로움이… 당신을 삼켰군요.",
						"english": "…Loneliness… has consumed you.",
						"japanese": "…孤独が…あなたを飲み込んだのですね。",
						"chinese": "…孤独…吞噬了你。",
						"french": "…La solitude… vous a dévoré.",
						"spanish": "…La soledad… te ha consumido.",
						"vietnamese": "…Sự cô đơn… đã nuốt chửng bạn.",
						"thai": "…ความเหงา…กลืนกินคุณแล้วสินะ",
						"hindi": "…अकेलेपन ने… तुम्हें निगल लिया है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "happy",
					"content": {
						"korean": "이겼다…",
						"english": "I won…",
						"japanese": "勝った…",
						"chinese": "赢了…",
						"french": "J'ai gagné…",
						"spanish": "Gané…",
						"vietnamese": "Thắng rồi…",
						"thai": "ชนะแล้ว…",
						"hindi": "मैं जीत गया…"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "쓰러진 괴물은 흔적도 없이 사라졌다. 인카의 눈에는 연민이 서렸다.",
						"english": "The fallen monster vanished without a trace. Pity filled Inka's eyes.",
						"japanese": "倒れた怪物は痕跡もなく消え去った。インカの目には憐れみが宿っていた。",
						"chinese": "倒下的怪物消失得无影无踪。茵卡眼中充满了怜悯。",
						"french": "Le monstre tombé disparut sans laisser de trace. De la pitié se lisait dans les yeux d'Inka.",
						"spanish": "El monstruo caído desapareció sin dejar rastro. La piedad llenó los ojos de Inka.",
						"vietnamese": "Con quái vật gục ngã biến mất không dấu vết. Nỗi thương xót hiện rõ trong mắt Inka.",
						"thai": "สัตว์ประหลาดที่ล้มลงหายไปอย่างไร้ร่องรอย แววตาของอินก้าฉายแววสงสาร",
						"hindi": "गिरा हुआ राक्षस बिना किसी निशान के गायब हो गया। इंका की आँखों में दया भरी थी।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "하지만 숲의 깊은 곳, 진짜 고독은 아직 끝나지 않았다.",
						"english": "But deep within the forest, the true loneliness has yet to end.",
						"japanese": "しかし、森の奥深く、本当の孤独はまだ終わっていなかった。",
						"chinese": "然而，在森林深处，真正的孤独尚未结束。",
						"french": "Mais au plus profond de la forêt, la vraie solitude n'était pas encore terminée.",
						"spanish": "Pero en lo profundo del bosque, la verdadera soledad aún no había terminado.",
						"vietnamese": "Nhưng sâu thẳm trong rừng, sự cô độc thật sự vẫn chưa kết thúc.",
						"thai": "แต่ในส่วนลึกของป่า ความโดดเดี่ยวที่แท้จริงยังไม่สิ้นสุดลง",
						"hindi": "लेकिन जंगल की गहराई में, सच्चा अकेलापन अभी खत्म नहीं हुआ था।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "다가오지 마라. {random_boss}의 고독은… 아무도 건드릴 수 없다.",
						"english": "Don't come closer. No one can touch {random_boss}'s solitude.",
						"japanese": "近づくな。{random_boss}の孤独は… 誰にも触れさせない。",
						"chinese": "别过来。{random_boss}的孤独…谁也无法触及。",
						"french": "Ne t'approche pas. Personne ne peut toucher à la solitude de {random_boss}.",
						"spanish": "No te acerques. Nadie puede tocar la soledad de {random_boss}.",
						"vietnamese": "Đừng lại gần. Sự cô độc của {random_boss}… không ai có thể chạm vào.",
						"thai": "อย่าเข้ามาใกล้ ความโดดเดี่ยวของ {random_boss}...ไม่มีใครแตะต้องได้",
						"hindi": "पास मत आओ। {random_boss} के अकेलेपन को… कोई नहीं छू सकता।"
					},
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "고독이 당신을 아프게 할 거예요.",
						"english": "Loneliness will hurt you.",
						"japanese": "孤独があなたを傷つけるでしょう。",
						"chinese": "孤独会伤害你的。",
						"french": "La solitude vous fera du mal.",
						"spanish": "La soledad te hará daño.",
						"vietnamese": "Sự cô độc sẽ làm tổn thương ngài.",
						"thai": "ความโดดเดี่ยวจะทำร้ายคุณ",
						"hindi": "अकेलापन आपको दुख देगा।"
					},
					"speaker": "inka",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "이제 그만!",
						"english": "Enough!",
						"japanese": "もうやめろ！",
						"chinese": "够了！",
						"french": "Ça suffit !",
						"spanish": "¡Basta ya!",
						"vietnamese": "Đủ rồi!",
						"thai": "พอได้แล้ว!",
						"hindi": "बस करो!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "죽어라!",
						"english": "Die!",
						"japanese": "死ね！",
						"chinese": "去死吧！",
						"french": "Meurs !",
						"spanish": "¡Muere!",
						"vietnamese": "Chết đi!",
						"thai": "ตายซะ!",
						"hindi": "मर जा!"
					},
					"speaker": "random_boss",
					"emotion": "angry"
				}
			]
		}
	]
} as const;
