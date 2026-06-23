export const scenario_hell_platella_21_01 = {
	"scenario_id": "hell_platella_21_01",
	"order": 1,
	"act": "intro",
	"theme": "hell",
	"actors": {
		"ash": {
			"id": "mon_b225f5fa-59a1-47bb-b4c5-e73bf9e7192a",
			"name": {
				"korean": "애쉬",
				"english": "Ash",
				"japanese": "アッシュ",
				"chinese": "艾什",
				"french": "Ash",
				"spanish": "Ash",
				"vietnamese": "Ash",
				"thai": "แอช",
				"hindi": "ऐश"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/d84413a8-9d6f-4a40-5d36-75e431fb9900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/78281fca-e4b8-45cc-68ef-7df3fef74200/public"
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
					"content": {
						"korean": "용암 대지는 반짝였고, 악마의 잔해 하나 없었다. 기이할 정도로 깨끗한 지옥.",
						"english": "The lava plains shimmered, devoid of any demonic remains. An eerily clean Hell.",
						"japanese": "溶岩の大地は輝き、悪魔の残骸一つなかった。奇妙なほど清潔な地獄。",
						"chinese": "熔岩大地闪烁着，没有一丝恶魔的残骸。一个诡异地洁净的地狱。",
						"french": "Les plaines de lave scintillaient, dénuées de tout vestige démoniaque. Un Enfer étrangement propre.",
						"spanish": "Las llanuras de lava brillaban, sin ningún rastro demoníaco. Un Infierno inquietantemente limpio.",
						"vietnamese": "Đồng bằng dung nham lấp lánh, không một dấu vết quỷ dữ. Một địa ngục sạch sẽ đến kỳ lạ.",
						"thai": "ที่ราบลาวาเป็นประกาย ไม่มีซากปีศาจเลย. นรกที่สะอาดอย่างน่าประหลาด.",
						"hindi": "लावा के मैदान चमक रहे थे, राक्षसी अवशेषों से रहित। एक अजीबोगरीब साफ-सुथरा नर्क।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "여기가… 지옥이라고?",
						"english": "This is... Hell?",
						"japanese": "ここが… 地獄だと？",
						"chinese": "这里是… 地狱？",
						"french": "C'est... l'Enfer ?",
						"spanish": "¿Esto es... el Infierno?",
						"vietnamese": "Đây là... địa ngục ư?",
						"thai": "นี่คือ... นรกเหรอ?",
						"hindi": "यह... नर्क है?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"spot": [
						5,
						2
					],
					"speaker": "ash",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "나도 믿기지 않아. 지옥은 원래 이렇지 않았어. 이런 깨끗함은… 처음이야.",
						"english": "I can't believe it either. Hell wasn't like this before. Such cleanliness... this is new.",
						"japanese": "私も信じられない。地獄は元々こうじゃなかった。こんな清潔さ… 初めてだ。",
						"chinese": "我也不敢相信。地狱以前不是这样的。这种干净… 是第一次。",
						"french": "Je n'arrive pas à y croire non plus. L'Enfer n'était pas comme ça avant. Une telle propreté... c'est nouveau.",
						"spanish": "Yo tampoco puedo creerlo. El Infierno no era así antes. Tal limpieza... es la primera vez.",
						"vietnamese": "Tôi cũng không thể tin được. Địa ngục trước đây không như thế này. Sự sạch sẽ như vậy... đây là lần đầu.",
						"thai": "ฉันก็ไม่อยากจะเชื่อเหมือนกัน. นรกเมื่อก่อนไม่ได้เป็นแบบนี้. ความสะอาดแบบนี้... เป็นครั้งแรก.",
						"hindi": "मुझे भी विश्वास नहीं हो रहा। नर्क पहले ऐसा नहीं था। ऐसी सफाई... यह पहली बार है।"
					},
					"speaker": "ash",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "ash",
					"content": {
						"korean": "이… 이 더러운 손은. 씻어야 해.",
						"english": "These... these dirty hands. I must wash them.",
						"japanese": "この… この汚れた手は。洗わなきゃ。",
						"chinese": "这… 这双脏手。我必须洗洗。",
						"french": "Ces... ces mains sales. Je dois les laver.",
						"spanish": "Estas... estas manos sucias. Debo lavarlas.",
						"vietnamese": "Bàn tay... bàn tay bẩn thỉu này. Phải rửa thôi.",
						"thai": "มือ... มือที่สกปรกคู่นี้. ต้องล้าง.",
						"hindi": "ये... ये गंदे हाथ। मुझे इन्हें धोना है।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "뭐 하는 거야?",
						"english": "What are you doing?",
						"japanese": "何してるの？",
						"chinese": "你在干什么？",
						"french": "Que fais-tu ?",
						"spanish": "¿Qué haces?",
						"vietnamese": "Anh/Bạn đang làm gì vậy?",
						"thai": "ทำอะไรน่ะ?",
						"hindi": "क्या कर रहे हो?"
					},
					"speaker": "character_any"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						4,
						2
					],
					"speaker": "ash",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "ash",
					"content": {
						"korean": "저 벽… 뭔가 달라졌어. 저 고대 문양들이… 빛나고 있어.",
						"english": "That wall... something's changed. Those ancient patterns... they're glowing.",
						"japanese": "あの壁… 何か変わった。あの古代の文様が… 光ってる。",
						"chinese": "那堵墙… 有些不同了。那些古老的图案… 它们在发光。",
						"french": "Ce mur... quelque chose a changé. Ces motifs anciens... ils brillent.",
						"spanish": "Esa pared... algo ha cambiado. Esos patrones antiguos... están brillando.",
						"vietnamese": "Bức tường đó... có gì đó đã thay đổi. Những hoa văn cổ xưa kia... chúng đang phát sáng.",
						"thai": "กำแพงนั่น... มีบางอย่างเปลี่ยนไป. ลวดลายโบราณเหล่านั้น... กำลังเปล่งแสง.",
						"hindi": "वह दीवार... कुछ बदल गया है। वे प्राचीन बनावट... वे चमक रहे हैं।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "저건 뭐야?",
						"english": "What is that?",
						"japanese": "あれは何？",
						"chinese": "那是什么？",
						"french": "Qu'est-ce que c'est ?",
						"spanish": "¿Qué es eso?",
						"vietnamese": "Kia là cái gì vậy?",
						"thai": "นั่นอะไรน่ะ?",
						"hindi": "वह क्या है?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "ash",
					"content": {
						"korean": "모르겠어. 원래 저런 적이 없었어. 모든 게… 변하고 있어.",
						"english": "I don't know. It's never been like this before. Everything's... changing.",
						"japanese": "分からない。前はこんなじゃなかった。何もかも…変わっていく。",
						"chinese": "我不知道。以前从来没这样过。一切都…在变。",
						"french": "Je ne sais pas. Ça n'a jamais été comme ça avant. Tout… change.",
						"spanish": "No lo sé. Nunca había sido así. Todo… está cambiando.",
						"vietnamese": "Tôi không biết. Trước đây chưa từng như vậy. Mọi thứ… đang thay đổi.",
						"thai": "ไม่รู้สิ ไม่เคยเป็นแบบนี้มาก่อน ทุกอย่าง...กำลังเปลี่ยนไป",
						"hindi": "मुझे नहीं पता। पहले ऐसा कभी नहीं था। सब कुछ… बदल रहा है।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "이 끈적거리는 감각… 내 손이 더러워졌어.",
						"english": "This sticky sensation... my hands are defiled.",
						"japanese": "このべたつく感覚…手が汚れてる。",
						"chinese": "这种黏腻的感觉…我的手被弄脏了。",
						"french": "Cette sensation collante… mes mains sont souillées.",
						"spanish": "Esta sensación pegajosa… mis manos están sucias.",
						"vietnamese": "Cảm giác dính nhớp này… tay tôi bị vấy bẩn rồi.",
						"thai": "ความรู้สึกเหนียวเหนอะหนะนี่...มือฉันสกปรกแล้ว",
						"hindi": "यह चिपचिपा अहसास… मेरे हाथ गंदे हो गए हैं।"
					},
					"speaker": "ash",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "애쉬, 진정해.",
						"english": "Ash, calm down.",
						"japanese": "アッシュ、落ち着け。",
						"chinese": "艾什，冷静点。",
						"french": "Ash, calme-toi.",
						"spanish": "Ash, cálmate.",
						"vietnamese": "Ash, bình tĩnh lại đi.",
						"thai": "แอช ใจเย็นๆ",
						"hindi": "ऐश, शांत हो जाओ।"
					},
					"speaker": "character_any"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"speaker": "ash",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "ash",
					"content": {
						"korean": "봐. 아무것도 없어. 모든 악마가… 사라졌어.",
						"english": "Look. There's nothing. All the demons... are gone.",
						"japanese": "見て。何もいない。悪魔がみんな…消えた。",
						"chinese": "看。什么都没有。所有的恶魔都…消失了。",
						"french": "Regarde. Il n'y a rien. Tous les démons… ont disparu.",
						"spanish": "Mira. No hay nada. Todos los demonios… han desaparecido.",
						"vietnamese": "Nhìn kìa. Không có gì cả. Tất cả ác quỷ… đã biến mất.",
						"thai": "ดูสิ ไม่มีอะไรเลย ปีศาจทุกตัว...หายไปแล้ว",
						"hindi": "देखो। कुछ भी नहीं है। सारे राक्षस… चले गए हैं।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "너무 조용해. 지옥답지 않아.",
						"english": "It's too quiet. Not like hell.",
						"japanese": "静かすぎる。地獄らしくない。",
						"chinese": "太安静了。不像地狱。",
						"french": "C'est trop calme. Pas l'enfer.",
						"spanish": "Es demasiado silencioso. No es propio del infierno.",
						"vietnamese": "Quá yên tĩnh. Không giống địa ngục chút nào.",
						"thai": "เงียบเกินไป ไม่เหมือนนรกเลย",
						"hindi": "बहुत शांति है। नर्क जैसा नहीं है।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "내 안의 더러움이 느껴져. 참을 수 없어. 전부 씻어내야 해.",
						"english": "I feel the filth inside me. I can't stand it. I have to wash it all away.",
						"japanese": "内側の穢れを感じる。耐えられない。全部洗い流さなきゃ。",
						"chinese": "我能感觉到我体内的污秽。我受不了。我必须把它全部洗掉。",
						"french": "Je sens la souillure en moi. Je ne peux pas le supporter. Je dois tout laver.",
						"spanish": "Siento la suciedad dentro de mí. No puedo soportarlo. Tengo que lavarlo todo.",
						"vietnamese": "Tôi cảm thấy sự ô uế bên trong mình. Tôi không thể chịu đựng được. Phải rửa sạch hết.",
						"thai": "ฉันรู้สึกถึงความสกปรกภายใน ไม่อาจทนได้ ต้องล้างมันออกไปให้หมด",
						"hindi": "मुझे अपने अंदर गंदगी महसूस हो रही है। मैं इसे बर्दाश्त नहीं कर सकता। मुझे यह सब धोना होगा।"
					},
					"speaker": "ash"
				},
				{
					"spot": [
						3,
						2
					],
					"speaker": "ash",
					"duration_ms": 600,
					"action": "shake",
					"type": "direction"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "정적은 짙어졌고, 불안감은 그림자처럼 따라붙었다.",
						"english": "The silence deepened, and unease clung like a shadow.",
						"japanese": "静寂は深まり、不安が影のようにまとわりついた。",
						"chinese": "寂静加深，不安如影随形。",
						"french": "Le silence s'épaissit, et l'inquiétude s'accrocha comme une ombre.",
						"spanish": "El silencio se hizo más profundo, y la inquietud se aferró como una sombra.",
						"vietnamese": "Sự tĩnh lặng ngày càng sâu sắc, và cảm giác bất an đeo bám như hình với bóng.",
						"thai": "ความเงียบสงัดทวีความรุนแรงขึ้น และความไม่สบายใจก็เกาะติดราวกับเงา",
						"hindi": "शांति गहरी हो गई, और बेचैनी एक साये की तरह चिपक गई।"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "ash",
					"spot": [
						2,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "ash",
					"content": {
						"korean": "여기도 오염됐어… 모두 더럽혀졌어. 이대로는 안 돼.",
						"english": "This place is corrupted too... everything's defiled. This can't continue.",
						"japanese": "ここも汚染されてる…全部穢れてる。このままじゃダメだ。",
						"chinese": "这里也被污染了…所有都脏了。不能再这样下去。",
						"french": "Ici aussi, c'est corrompu… tout est souillé. Ça ne peut pas continuer comme ça.",
						"spanish": "Esto también está contaminado… todo está sucio. Así no puede seguir.",
						"vietnamese": "Chỗ này cũng bị ô nhiễm… tất cả đều bị vấy bẩn rồi. Không thể cứ thế này được.",
						"thai": "ที่นี่ก็แปดเปื้อนแล้ว...ทุกอย่างสกปรกหมด จะปล่อยไว้อย่างนี้ไม่ได้",
						"hindi": "यह जगह भी दूषित हो गई है… सब कुछ गंदा हो गया है। ऐसे नहीं चलेगा।"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "애쉬! 정신 차려. 뭔가 다가오고 있어.",
						"english": "Ash! Snap out of it. Something's coming.",
						"japanese": "アッシュ！しっかりしろ。何かが近づいてる。",
						"chinese": "艾什！清醒点。有东西过来了。",
						"french": "Ash ! Reprends-toi. Quelque chose approche.",
						"spanish": "¡Ash! Reacciona. Algo se acerca.",
						"vietnamese": "Ash! Tỉnh táo lại đi. Có gì đó đang đến gần.",
						"thai": "แอช! ตั้งสติหน่อย มีบางอย่างกำลังเข้ามา",
						"hindi": "ऐश! होश में आओ। कुछ आ रहा है।"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "ash",
					"content": {
						"korean": "더러운 것들이… 우리를… 오염시킬 거야.",
						"english": "Filth... it will... corrupt us.",
						"japanese": "汚いものが… 私たちを… 汚染するだろう。",
						"chinese": "肮脏的东西……会……污染我们。",
						"french": "Les immondices... vont... nous contaminer.",
						"spanish": "Las cosas sucias... nos... contaminarán.",
						"vietnamese": "Những thứ dơ bẩn... sẽ... làm ô uế chúng ta.",
						"thai": "สิ่งสกปรก... จะ... ปนเปื้อนเรา",
						"hindi": "गंदी चीजें... हमें... दूषित करेंगी।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "길은 더욱 깊어졌다. 깨끗한 만큼 더 위험해 보였다.",
						"english": "The path deepened. Its purity made it seem all the more perilous.",
						"japanese": "道はさらに深くなった。清らかであるほど、より危険に見えた。",
						"chinese": "道路更加深入了。越是干净，越显得危险。",
						"french": "Le chemin s'enfonçait davantage. Plus il était pur, plus il semblait dangereux.",
						"spanish": "El camino se hizo más profundo. Parecía más peligroso cuanto más limpio estaba.",
						"vietnamese": "Con đường sâu hơn. Nó càng sạch sẽ, càng có vẻ nguy hiểm.",
						"thai": "เส้นทางลึกเข้าไปอีก ยิ่งสะอาดก็ยิ่งดูอันตราย",
						"hindi": "रास्ता और गहरा हो गया। जितना साफ था, उतना ही खतरनाक लग रहा था।"
					},
					"speaker": "narrator"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "크크… 넌 아무것도 몰라. 진짜 '더러움'은… 따로 있어.",
						"english": "Hmph... You know nothing. The true 'defilement'... is something else entirely.",
						"japanese": "クク… お前は何も知らない。本当の「汚れ」は… 別にある。",
						"chinese": "呵呵……你什么都不知道。真正的“污秽”……另有其物。",
						"french": "Haha... Tu ne sais rien. La véritable \"souillure\"... est ailleurs.",
						"spanish": "Jeje... No sabes nada. La verdadera \"suciedad\"... está en otro lugar.",
						"vietnamese": "Khà khà... Ngươi chẳng biết gì cả. Cái \"dơ bẩn\" thực sự... ở một nơi khác.",
						"thai": "คิกๆ... แกไม่รู้อะไรเลย 'ความสกปรก' ที่แท้จริงน่ะ... มันอยู่คนละที่",
						"hindi": "हाहा... तुम कुछ नहीं जानते। असली 'गंदगी'... कहीं और है।"
					},
					"speaker": "random_boss",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "무슨 소리야?",
						"english": "What do you mean?",
						"japanese": "どういうことだ？",
						"chinese": "你说什么？",
						"french": "Que veux-tu dire ?",
						"spanish": "¿Qué quieres decir?",
						"vietnamese": "Ngươi nói gì vậy?",
						"thai": "หมายความว่าอะไร?",
						"hindi": "क्या कह रहे हो?"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "쓰러진 보스. 그러나 지옥의 정화는 멈추지 않았다. 더 깊은 곳으로 향해야 한다.",
						"english": "The boss fell. But hell's purification didn't stop. Must head deeper.",
						"japanese": "ボスは倒れた。しかし地獄の浄化は止まらなかった。さらに深い場所へ向かわなければならない。",
						"chinese": "Boss倒下了。然而地狱的净化并未停止。必须前往更深处。",
						"french": "Le boss est tombé. Mais la purification de l'enfer ne s'est pas arrêtée. Il faut s'enfoncer plus profondément.",
						"spanish": "El jefe cayó. Pero la purificación del infierno no se detuvo. Debemos ir más profundo.",
						"vietnamese": "Boss đã gục ngã. Nhưng sự thanh tẩy địa ngục không dừng lại. Phải đi sâu hơn nữa.",
						"thai": "บอสล้มลงแล้ว แต่การชำระล้างของนรกยังไม่หยุด ต้องมุ่งหน้าสู่ที่ลึกกว่านี้",
						"hindi": "बॉस गिर गया। लेकिन नरक का शुद्धिकरण नहीं रुका। और गहरे जाना होगा।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "지옥의 심장부에 도달했다. 거대한 그림자가 앞을 막아섰다.",
						"english": "Reached the heart of hell. A colossal shadow blocked the way.",
						"japanese": "地獄の心臓部に到達した。巨大な影が道を阻んだ。",
						"chinese": "抵达了地狱的中心。一个巨大的阴影挡住了去路。",
						"french": "Atteint le cœur de l'enfer. Une ombre colossale barra le chemin.",
						"spanish": "Llegamos al corazón del infierno. Una sombra gigantesca nos bloqueaba el paso.",
						"vietnamese": "Đã đến trung tâm địa ngục. Một bóng đen khổng lồ chặn đường.",
						"thai": "มาถึงใจกลางนรกแล้ว เงาขนาดมหึมาขวางทางอยู่",
						"hindi": "नरक के हृदय तक पहुँच गए। एक विशालकाय छाया ने रास्ता रोक लिया।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "더럽고 추악한 것들이… 여기까지 온 거냐.",
						"english": "Filthy, ugly things... have you come this far?",
						"japanese": "汚く醜いものが… ここまで来たのか。",
						"chinese": "肮脏丑陋的东西……也到这里了吗？",
						"french": "Sales et hideuses créatures... vous êtes venues jusqu'ici ?",
						"spanish": "Cosas sucias y horribles... ¿habéis llegado hasta aquí?",
						"vietnamese": "Những thứ dơ bẩn, xấu xí... đã đến tận đây sao?",
						"thai": "สิ่งสกปรกน่าเกลียด... มาถึงที่นี่เลยเหรอ",
						"hindi": "गंदी और घिनौनी चीजें... क्या तुम यहाँ तक आ गए हो?"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "네가 이 지옥을 이렇게 만든 거야?",
						"english": "Is this hell your doing?",
						"japanese": "お前がこの地獄をこう作ったのか。",
						"chinese": "是你把这个地狱变成这样的吗？",
						"french": "C'est toi qui as rendu cet enfer ainsi ?",
						"spanish": "¿Fuiste tú quien creó este infierno así?",
						"vietnamese": "Ngươi đã tạo ra địa ngục này như vậy sao?",
						"thai": "แกเป็นคนสร้างนรกนี้ขึ้นมาเหรอ?",
						"hindi": "क्या तुमने ही इस नरक को ऐसा बनाया है?"
					}
				},
				{
					"content": {
						"korean": "난 그저… 깨끗하게 만들 뿐.",
						"english": "I merely... purify.",
						"japanese": "私はただ… きれいにしているだけだ。",
						"chinese": "我只是……让它变得干净。",
						"french": "Je ne fais que... la rendre propre.",
						"spanish": "Yo solo... la limpio.",
						"vietnamese": "Ta chỉ là... làm cho nó sạch sẽ mà thôi.",
						"thai": "ฉันแค่... ทำให้มันสะอาดเท่านั้น",
						"hindi": "मैं तो बस... इसे साफ कर रहा हूँ।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "더러운 것들… 영원히 정화될 것이다.",
						"english": "Filth... shall be purified forever.",
						"japanese": "汚いものども… 永遠に浄化されるだろう。",
						"chinese": "肮脏之物……将永远被净化。",
						"french": "Les immondices... seront purifiées à jamais.",
						"spanish": "Cosas sucias... serán purificadas para siempre.",
						"vietnamese": "Những thứ dơ bẩn... sẽ bị thanh tẩy vĩnh viễn.",
						"thai": "สิ่งสกปรก... จะถูกชำระล้างตลอดไป",
						"hindi": "गंदी चीजें... हमेशा के लिए शुद्ध हो जाएंगी।"
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "절대 포기 안 해. 이 지옥을 되돌려 놓을 거야.",
						"english": "I'll never give up. I'll turn this hell around.",
						"japanese": "絶対にあきらめない。この地獄をひっくり返してやる。",
						"chinese": "我绝不放弃。我要扭转这个地狱。",
						"french": "Je n'abandonnerai jamais. Je changerai cet enfer.",
						"spanish": "Nunca me rendiré. Le daré la vuelta a este infierno.",
						"vietnamese": "Tôi sẽ không bao giờ bỏ cuộc. Tôi sẽ xoay chuyển địa ngục này.",
						"thai": "ฉันจะไม่มีวันยอมแพ้ ฉันจะพลิกนรกนี้ให้ได้",
						"hindi": "मैं कभी हार नहीं मानूंगा। मैं इस नरक को बदल दूंगा।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"지옥. 혼돈과 절규의 땅.",
			"그러나 모든 악마가 사라졌다.",
			"남은 것은 기이할 정도로 정돈된 풍경.",
			"이 지옥은… 뭔가 잘못됐다."
		],
		"english": [
			"Hell. A land of chaos and screams.",
			"Yet, all demons vanished.",
			"All that remained was an eerily orderly landscape.",
			"This Hell... something is wrong."
		],
		"japanese": [
			"地獄。混沌と絶叫の地。",
			"しかし、全ての悪魔が消え去った。",
			"残されたのは、奇妙なほどに整頓された風景。",
			"この地獄は… 何かおかしい。"
		],
		"chinese": [
			"地狱。混沌与哀嚎之地。",
			"然而，所有恶魔都消失了。",
			"剩下的是一片诡异整洁的景象。",
			"这个地狱… 有问题。"
		],
		"french": [
			"L'Enfer. Une terre de chaos et de cris.",
			"Pourtant, tous les démons ont disparu.",
			"Il ne restait qu'un paysage étrangement ordonné.",
			"Cet Enfer... quelque chose ne va pas."
		],
		"spanish": [
			"El Infierno. Una tierra de caos y gritos.",
			"Sin embargo, todos los demonios desaparecieron.",
			"Solo quedaba un paisaje inquietantemente ordenado.",
			"Este Infierno... algo anda mal."
		],
		"vietnamese": [
			"Địa ngục. Vùng đất của hỗn loạn và tiếng thét.",
			"Tuy nhiên, mọi ác quỷ đều biến mất.",
			"Tất cả còn lại là một khung cảnh trật tự đến kỳ lạ.",
			"Địa ngục này... có gì đó không ổn."
		],
		"thai": [
			"นรก. ดินแดนแห่งความโกลาหลและเสียงกรีดร้อง.",
			"ทว่า ปีศาจทั้งหมดหายไปแล้ว.",
			"ที่เหลืออยู่คือทิวทัศน์ที่เป็นระเบียบอย่างน่าประหลาด.",
			"นรกแห่งนี้... มีบางอย่างผิดปกติ."
		],
		"hindi": [
			"नर्क। अराजकता और चीखों की भूमि।",
			"फिर भी, सभी राक्षस गायब हो गए।",
			"जो बचा था, वह एक अजीबोगरीब व्यवस्थित परिदृश्य था।",
			"इस नर्क में... कुछ गड़बड़ है।"
		]
	}
} as const;
