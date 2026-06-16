export const scenario_snowy_haraldr_81_03 = {
	"scenario_id": "snowy_haraldr_81_03",
	"order": 3,
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
			"설원 전체가 색색깔 시럽으로 물들어 간다.",
			"Haraldr의 몸은 통제를 잃고 맹렬히 시럽을 뿜어냈다.",
			"광기 속에서도, 누군가는 그 안의 인간을 보았다.",
			"그리고 조용히, 손을 내밀었다."
		],
		"english": [
			"The entire snowfield is awash in colorful syrup.",
			"Haraldr's body, out of control, furiously spewed syrup.",
			"Even in madness, someone saw the human within.",
			"And quietly, reached out a hand."
		],
		"japanese": [
			"雪原全体が色とりどりのシロップに染まっていく。",
			"Haraldrの体は制御を失い、猛烈にシロップを噴き出した。",
			"狂気の中にも、誰かがその中に人間を見た。",
			"そして静かに、手を差し伸べた。"
		],
		"chinese": [
			"整个雪原都被五颜六色的糖浆染满了。",
			"Haraldr的身体失控，猛烈地喷涌出糖浆。",
			"即使在疯狂之中，也有人看到了他内心的人性。",
			"然后，他悄悄地伸出了手。"
		],
		"french": [
			"La plaine enneigée est inondée de sirops colorés.",
			"Le corps de Haraldr, hors de contrôle, projetait furieusement du sirop.",
			"Même au cœur de la folie, quelqu'un a vu l'homme en lui.",
			"Et silencieusement, tendit la main."
		],
		"spanish": [
			"La llanura nevada se tiñe de un jarabe multicolor.",
			"El cuerpo de Haraldr, fuera de control, arrojaba jarabe furiosamente.",
			"Incluso en la locura, alguien vio al humano en su interior.",
			"Y en silencio, extendió la mano."
		],
		"vietnamese": [
			"Cả cánh đồng tuyết đang dần nhuộm màu si-rô rực rỡ.",
			"Cơ thể Haraldr mất kiểm soát, điên cuồng phun ra si-rô.",
			"Ngay cả trong cơn điên loạn, có người vẫn nhìn thấy con người bên trong anh ta.",
			"Và khẽ khàng, đưa tay ra."
		],
		"thai": [
			"ทุ่งหิมะทั้งหมดถูกย้อมไปด้วยน้ำเชื่อมหลากสีสัน",
			"ร่างกายของ Haraldr สูญเสียการควบคุมและพ่นน้ำเชื่อมออกมาอย่างบ้าคลั่ง",
			"แม้ในความบ้าคลั่ง บางคนก็ยังเห็นความเป็นมนุษย์ที่อยู่ภายใน",
			"และเงียบๆ ก็ยื่นมือออกไป"
		],
		"hindi": [
			"पूरा बर्फ़ीला मैदान रंगीन सिरप से रंगा जा रहा है।",
			"Haraldr का शरीर नियंत्रण खो चुका था और तेज़ी से सिरप उगल रहा था।",
			"यहाँ तक कि पागलपन में भी, किसी ने उसके अंदर के इंसान को देखा।",
			"और चुपचाप, हाथ बढ़ाया।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "설원이 점포가 되어갔다. 시럽이 모든 것을 집어삼켰다.",
						"english": "The snowfield turned into a shop. Syrup consumed all.",
						"japanese": "雪原が店舗と化した。シロップがすべてを飲み込んだ。",
						"chinese": "雪原变成了店铺。糖浆吞噬了一切。",
						"french": "La plaine enneigée est devenue une boutique. Le sirop a tout englouti.",
						"spanish": "La llanura nevada se convirtió en una tienda. El jarabe lo devoró todo.",
						"vietnamese": "Cánh đồng tuyết biến thành một cửa hàng. Si-rô nuốt chửng mọi thứ.",
						"thai": "ทุ่งหิมะกลายเป็นร้านค้า น้ำเชื่อมกลืนกินทุกสิ่ง",
						"hindi": "बर्फ़ीला मैदान एक दुकान बन गया। सिरप ने सब कुछ निगल लिया।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "저게 끝이 없어 보여…",
						"english": "It looks like it'll never end...",
						"japanese": "あれは終わりがないように見える…",
						"chinese": "那看起来没完没了…",
						"french": "Ça semble sans fin…",
						"spanish": "Parece que no tiene fin...",
						"vietnamese": "Cái đó dường như vô tận…",
						"thai": "ดูเหมือนไม่มีที่สิ้นสุดเลย...",
						"hindi": "यह तो कभी खत्म नहीं होगा…"
					}
				},
				{
					"content": {
						"korean": "어서 오세요… 각오해라!",
						"english": "Welcome... Be prepared!",
						"japanese": "ようこそ…覚悟しろ！",
						"chinese": "欢迎…做好准备！",
						"french": "Bienvenue… Préparez-vous !",
						"spanish": "Bienvenidos... ¡Prepárense!",
						"vietnamese": "Chào mừng… Hãy chuẩn bị đi!",
						"thai": "ยินดีต้อนรับ... เตรียมตัวไว้!",
						"hindi": "स्वागत है… तैयार हो जाओ!"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "inka",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "…그를 막아야 해요.",
						"english": "...We must stop him.",
						"japanese": "…彼を止めなければなりません。",
						"chinese": "…我们必须阻止他。",
						"french": "…Nous devons l'arrêter.",
						"spanish": "…Tenemos que detenerlo.",
						"vietnamese": "…Chúng ta phải ngăn anh ta lại.",
						"thai": "...เราต้องหยุดเขา",
						"hindi": "…हमें उसे रोकना होगा।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "inka"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"speaker": "inka",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "이건… 그의 본심이 아니에요.",
						"english": "This isn't... his true self.",
						"japanese": "これは…彼の本心ではありません。",
						"chinese": "这不是…他的本意。",
						"french": "Ce n'est pas… son véritable moi.",
						"spanish": "Esto no es... su verdadera intención.",
						"vietnamese": "Đây không phải… là bản chất thật của anh ta.",
						"thai": "นี่ไม่ใช่... ตัวตนที่แท้จริงของเขา",
						"hindi": "यह… उसकी असलियत नहीं है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "inka"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "광기에 미친 괴물일 뿐이야!",
						"english": "He's just a monster driven by madness!",
						"japanese": "狂気に駆られた化け物なだけだ！",
						"chinese": "他只是一个被疯狂驱使的怪物！",
						"french": "Ce n'est qu'un monstre déchaîné par la folie !",
						"spanish": "¡Es solo un monstruo enloquecido por la locura!",
						"vietnamese": "Hắn chỉ là một con quái vật điên cuồng vì sự điên loạn thôi!",
						"thai": "มันก็แค่สัตว์ประหลาดที่ถูกความบ้าคลั่งเข้าครอบงำ!",
						"hindi": "वह बस पागलपन से भरा एक राक्षस है!"
					}
				},
				{
					"content": {
						"korean": "아니요. 저 안의 무언가가… 싸우고 있어요.",
						"english": "No. Something inside... is fighting.",
						"japanese": "いいえ。あの奥で何かが…戦っています。",
						"chinese": "不。里面有什么东西…在挣扎。",
						"french": "Non. Quelque chose à l'intérieur… se bat.",
						"spanish": "No. Algo ahí dentro... está luchando.",
						"vietnamese": "Không. Có thứ gì đó bên trong... đang chiến đấu.",
						"thai": "ไม่ค่ะ มีบางสิ่งอยู่ข้างใน...กำลังต่อสู้",
						"hindi": "नहीं। अंदर कुछ... लड़ रहा है।"
					},
					"type": "speech",
					"speaker": "inka",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "새로운 재고… 사라져라!",
						"english": "New stock... Vanish!",
						"japanese": "新しい在庫…消えろ！",
						"chinese": "新的库存…消失吧！",
						"french": "Nouveau stock… Disparais !",
						"spanish": "¡Nuevo stock... Desaparece!",
						"vietnamese": "Hàng mới... Biến mất đi!",
						"thai": "สินค้าใหม่... หายไปซะ!",
						"hindi": "नया स्टॉक... गायब हो जाओ!"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "inka",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "거대한 그림자가 떨리는 팔로 자신을 붙잡았다. 억누르려는 듯.",
						"english": "A giant shadow clutched itself with trembling arms. As if trying to suppress something.",
						"japanese": "巨大な影が震える腕で自身を掴んだ。抑えつけようとするかのように。",
						"chinese": "巨大的黑影用颤抖的手臂抓住了自己。仿佛在压抑着什么。",
						"french": "Une ombre gigantesque se serra de ses bras tremblants. Comme pour se maîtriser.",
						"spanish": "Una sombra gigante se aferró a sí misma con brazos temblorosos. Como intentando reprimir algo.",
						"vietnamese": "Một cái bóng khổng lồ ôm chặt lấy mình bằng đôi tay run rẩy. Như thể cố kìm nén điều gì đó.",
						"thai": "เงาขนาดยักษ์กอดรัดตัวเองด้วยแขนที่สั่นเทา ราวกับพยายามจะกดขี่",
						"hindi": "एक विशाल छाया ने कांपते हाथों से खुद को जकड़ लिया। मानो कुछ दबाने की कोशिश कर रही हो।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…괜찮아요.",
						"english": "...I'm fine.",
						"japanese": "…大丈夫です。",
						"chinese": "……我没事。",
						"french": "...Ça va.",
						"spanish": "...Estoy bien.",
						"vietnamese": "...Tôi ổn.",
						"thai": "...ฉันไม่เป็นไร",
						"hindi": "...मैं ठीक हूँ।"
					},
					"speaker": "inka",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "inka",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "멈출 수 있어요.",
						"english": "I can stop it.",
						"japanese": "止められます。",
						"chinese": "我能阻止它。",
						"french": "Je peux l'arrêter.",
						"spanish": "Puedo detenerlo.",
						"vietnamese": "Tôi có thể ngăn nó lại.",
						"thai": "ฉันหยุดมันได้",
						"hindi": "मैं इसे रोक सकता हूँ।"
					}
				},
				{
					"content": {
						"korean": "인카! 위험해!",
						"english": "Inca! It's dangerous!",
						"japanese": "インカ！危ない！",
						"chinese": "印加！危险！",
						"french": "Inca ! Danger !",
						"spanish": "¡Inca! ¡Peligro!",
						"vietnamese": "Inca! Nguy hiểm!",
						"thai": "อินคา! อันตราย!",
						"hindi": "इनका! खतरा है!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "사라져… 어서 오세요…!",
						"english": "Vanish... Welcome...!",
						"japanese": "消えろ…ようこそ…！",
						"chinese": "消失吧…欢迎…！",
						"french": "Disparais... Bienvenue… !",
						"spanish": "Desaparece... ¡Bienvenido...!",
						"vietnamese": "Biến đi... Chào mừng... !",
						"thai": "หายไปซะ... ยินดีต้อนรับ...!",
						"hindi": "गायब हो जाओ... स्वागत है...!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"speaker": "inka"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…놓아줘… 각오해라…",
						"english": "...Let me go... Brace yourself...",
						"japanese": "…放せ…覚悟しろ…",
						"chinese": "……放开我……做好准备……",
						"french": "...Lâche-moi... Prépare-toi...",
						"spanish": "...Suéltame... Prepárate...",
						"vietnamese": "...Thả ta ra... Hãy chuẩn bị đi...",
						"thai": "...ปล่อยฉันไป... เตรียมตัวไว้...",
						"hindi": "...मुझे जाने दो... तैयार हो जाओ..."
					}
				},
				{
					"emotion": "base",
					"speaker": "inka",
					"type": "speech",
					"content": {
						"korean": "포기하지 마세요. 당신은 혼자가 아니에요.",
						"english": "Don't give up. You're not alone.",
						"japanese": "諦めないでください。あなたは一人じゃない。",
						"chinese": "别放弃。你不是一个人。",
						"french": "N'abandonne pas. Tu n'es pas seul.",
						"spanish": "No te rindas. No estás solo.",
						"vietnamese": "Đừng bỏ cuộc. Bạn không cô đơn đâu.",
						"thai": "อย่าเพิ่งยอมแพ้ คุณไม่ได้อยู่คนเดียว",
						"hindi": "हार मत मानो। तुम अकेले नहीं हो।"
					}
				},
				{
					"emotion": "happy",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "우리가 널 지켜줄게!",
						"english": "We'll protect you!",
						"japanese": "私たちが君を守る！",
						"chinese": "我们会保护你！",
						"french": "On va te protéger !",
						"spanish": "¡Te protegeremos!",
						"vietnamese": "Chúng tôi sẽ bảo vệ bạn!",
						"thai": "พวกเราจะปกป้องเธอเอง!",
						"hindi": "हम तुम्हारी रक्षा करेंगे!"
					}
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "sad",
					"content": {
						"korean": "고통… 멈춰라…",
						"english": "Pain... stop...",
						"japanese": "苦痛… 止まれ…",
						"chinese": "痛苦… 停下…",
						"french": "Douleur… Arrêtez…",
						"spanish": "Dolor… Detente…",
						"vietnamese": "Đau đớn… Dừng lại…",
						"thai": "ความเจ็บปวด... หยุดนะ...",
						"hindi": "दर्द… रुको…"
					}
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "도망칠 수 없다… 모두 재고가 된다…",
						"english": "There's no escape... All will become inventory...",
						"japanese": "逃れることはできない… 全て在庫となる…",
						"chinese": "无法逃脱… 一切都将成为库存…",
						"french": "Impossible de s'échapper… Tout deviendra inventaire…",
						"spanish": "No hay escape... Todo se convertirá en inventario...",
						"vietnamese": "Không thể trốn thoát… Tất cả sẽ thành hàng tồn kho…",
						"thai": "หนีไม่พ้น... ทุกสิ่งจะกลายเป็นสินค้าคงคลัง...",
						"hindi": "भाग नहीं सकते… सब कुछ सूची बन जाएगा…"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…다시 일어설 거야!",
						"english": "...I'll rise again!",
						"japanese": "…また立ち上がるぞ！",
						"chinese": "…我会再次站起来！",
						"french": "...Je me relèverai!",
						"spanish": "...¡Me levantaré de nuevo!",
						"vietnamese": "...Ta sẽ đứng dậy lần nữa!",
						"thai": "...ฉันจะลุกขึ้นสู้ใหม่!",
						"hindi": "...मैं फिर से खड़ा हो जाऊँगा!"
					}
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "…내가… 멈췄나…",
						"english": "...Did I... stop...?",
						"japanese": "…私が… 止めたのか…",
						"chinese": "…我… 停下来了吗…",
						"french": "...J'ai... arrêté...?",
						"spanish": "...¿Yo... me detuve...?",
						"vietnamese": "...Mình... đã dừng lại ư...?",
						"thai": "...ฉัน... หยุดแล้วเหรอ...",
						"hindi": "…क्या मैं… रुक गया…?"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"emotion": "happy",
					"type": "speech",
					"speaker": "inka",
					"content": {
						"korean": "네. 잘 해냈어요.",
						"english": "Yes. You did well.",
						"japanese": "はい。よくやりました。",
						"chinese": "是的。你做得很好。",
						"french": "Oui. Vous avez bien fait.",
						"spanish": "Sí. Lo hiciste bien.",
						"vietnamese": "Vâng. Bạn đã làm rất tốt.",
						"thai": "ใช่ คุณทำได้ดีมาก",
						"hindi": "हाँ। तुमने अच्छा किया।"
					}
				},
				{
					"content": {
						"korean": "광기가 잠시 멈췄다. 하지만 설원은 여전히 끈적한 색으로 물들어 있었다.",
						"english": "The madness stopped for a moment. But the snowfield was still stained with a sticky color.",
						"japanese": "狂気は一時的に止まった。しかし、雪原は依然として粘着質な色に染まっていた。",
						"chinese": "疯狂暂时停止了。但雪原仍旧被黏稠的颜色所沾染。",
						"french": "La folie s'arrêta un instant. Mais l'étendue enneigée était toujours maculée d'une couleur poisseuse.",
						"spanish": "La locura se detuvo por un momento. Pero el campo de nieve seguía teñido de un color pegajoso.",
						"vietnamese": "Sự điên loạn tạm thời dừng lại. Nhưng cánh đồng tuyết vẫn nhuốm một màu dính nhớp.",
						"thai": "ความบ้าคลั่งหยุดลงชั่วขณะ แต่ทุ่งหิมะยังคงเปื้อนไปด้วยสีเหนียวเหนอะหนะ",
						"hindi": "पागलपन थोड़ी देर के लिए रुक गया। लेकिन बर्फ का मैदान अभी भी एक चिपचिपे रंग से सना हुआ था।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "모두 나의 재고가 될 것이다… 어서 오세요…!",
						"english": "All will become my inventory... Welcome...!",
						"japanese": "全て私の在庫になるだろう… ようこそ…！",
						"chinese": "一切都将成为我的库存… 欢迎光临…！",
						"french": "Tout deviendra mon inventaire… Bienvenue…!",
						"spanish": "Todo se convertirá en mi inventario… ¡Bienvenidos…!",
						"vietnamese": "Tất cả sẽ thành hàng tồn kho của ta… Chào mừng…!",
						"thai": "ทุกสิ่งจะกลายเป็นสินค้าคงคลังของฉัน... ยินดีต้อนรับ...!",
						"hindi": "सब कुछ मेरी सूची बन जाएगा… स्वागत है…!"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "우리가 널 멈추겠어.",
						"english": "We will stop you.",
						"japanese": "私たちがあなたを止める。",
						"chinese": "我们会阻止你。",
						"french": "Nous t'arrêterons.",
						"spanish": "Te detendremos.",
						"vietnamese": "Chúng tôi sẽ ngăn cản ngươi.",
						"thai": "เราจะหยุดคุณเอง",
						"hindi": "हम तुम्हें रोकेंगे।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "inka",
					"type": "direction"
				},
				{
					"content": {
						"korean": "…아직 늦지 않았어요.",
						"english": "...It's not too late yet.",
						"japanese": "…まだ手遅れではない。",
						"chinese": "…还不算太晚。",
						"french": "...Il n'est pas encore trop tard.",
						"spanish": "...Todavía no es demasiado tarde.",
						"vietnamese": "...Vẫn chưa quá muộn.",
						"thai": "...ยังไม่สายเกินไป",
						"hindi": "...अभी देर नहीं हुई है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "inka"
				}
			]
		}
	]
} as const;
