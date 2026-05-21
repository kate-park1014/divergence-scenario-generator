export const scenario_Chicken_saurus_Rebirth_05 = {
	"scenario_id": "Chicken_saurus_Rebirth_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "forest",
	"actors": {
		"briar": {
			"id": "mon_21f92820-190e-4d08-a75c-5d2c0b6d0a6b",
			"name": {
				"korean": "브라이어",
				"english": "Briar",
				"japanese": "ブライア",
				"chinese": "布莱尔",
				"french": "Briar",
				"spanish": "Briar",
				"vietnamese": "Briar",
				"thai": "ไบรอา",
				"hindi": "ब्रायर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/41fb431e-57e0-45e0-dde6-1a1f02c01200/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/dd89dff7-88ed-4444-28d8-5aaa85bd4e00/public"
		}
	},
	"boss": {
		"pool_id": "pool_017"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "고대 유적의 입구, 알 수 없는 기운이 숲을 감쌌다.",
						"english": "Entrance to the ancient ruins, an unknown energy enveloped the forest.",
						"japanese": "古代遺跡の入り口、未知の気配が森を包んでいた。",
						"chinese": "古老遗迹的入口，一股未知能量笼罩着森林。",
						"french": "Entrée des ruines antiques, une énergie inconnue enveloppait la forêt.",
						"spanish": "Entrada a las ruinas antiguas, una energía desconocida envolvía el bosque.",
						"vietnamese": "Lối vào di tích cổ, một luồng năng lượng bí ẩn bao trùm khu rừng.",
						"thai": "ทางเข้าซากปรักหักพังโบราณ พลังงานลึกลับปกคลุมป่า",
						"hindi": "प्राचीन खंडहरों का प्रवेश द्वार, एक अज्ञात ऊर्जा ने जंगल को घेर लिया।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "여기가… 그 유적이야? 심상치 않은데.",
						"english": "This is... the ruins? Something's off.",
						"japanese": "ここが…その遺跡？ただ事じゃないな。",
						"chinese": "这里是…那座遗迹？感觉不太对劲。",
						"french": "C'est... ces ruines ? Quelque chose ne va pas.",
						"spanish": "¿Este es... el relicario? Algo no anda bien.",
						"vietnamese": "Đây là... tàn tích đó sao? Có gì đó không ổn.",
						"thai": "นี่คือ...ซากปรักหักพังเหรอ? มีบางอย่างแปลกๆ",
						"hindi": "यह... वह खंडहर है? कुछ गड़बड़ है।"
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"speaker": "briar",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"speaker": "briar",
					"content": {
						"korean": "그래. 숲이 깨어나고 있어. 우리가 알던 숲이 아니야.",
						"english": "Yes. The forest is awakening. It's not the forest we knew.",
						"japanese": "ああ。森が目覚めている。私たちが知っていた森じゃない。",
						"chinese": "是的。森林正在苏醒。它不再是我们认识的森林了。",
						"french": "Oui. La forêt s'éveille. Ce n'est plus la forêt que nous connaissions.",
						"spanish": "Sí. El bosque está despertando. Ya no es el bosque que conocíamos.",
						"vietnamese": "Đúng vậy. Rừng đang thức tỉnh. Nó không còn là khu rừng chúng ta từng biết.",
						"thai": "ใช่ ป่ากำลังตื่นขึ้น มันไม่ใช่ป่าที่เรารู้จัก",
						"hindi": "हाँ। जंगल जाग रहा है। यह वह जंगल नहीं है जिसे हम जानते थे।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "치킨-사우루스의 복수가… 아직 끝나지 않았다는 거야?",
						"english": "Chicken-saurus's revenge... it's not over yet?",
						"japanese": "チキン・サウルスの復讐が…まだ終わってないってことか？",
						"chinese": "恐龙鸡的复仇...还没结束吗？",
						"french": "La vengeance du Poulet-saurus... n'est pas encore terminée ?",
						"spanish": "¿La venganza del Pollo-saurio... aún no ha terminado?",
						"vietnamese": "Sự trả thù của Gà-khủng long... vẫn chưa kết thúc sao?",
						"thai": "การแก้แค้นของไก่ซอรัส...ยังไม่จบอีกเหรอ?",
						"hindi": "चिकन-सॉरस का बदला... अभी खत्म नहीं हुआ?"
					}
				},
				{
					"type": "speech",
					"speaker": "briar",
					"content": {
						"korean": "단순한 복수가 아니었어. 이건… 숲의 재창조.",
						"english": "It wasn't just revenge. This is... the forest's recreation.",
						"japanese": "ただの復讐じゃなかった。これは…森の再創造だ。",
						"chinese": "这不仅仅是复仇。这是…森林的再造。",
						"french": "Ce n'était pas seulement une vengeance. C'est... la recréation de la forêt.",
						"spanish": "No era solo venganza. Esto es... la recreación del bosque.",
						"vietnamese": "Đó không chỉ là sự trả thù. Đây là... sự tái tạo của khu rừng.",
						"thai": "นี่ไม่ใช่แค่การแก้แค้น แต่มันคือ...การสร้างป่าขึ้นมาใหม่",
						"hindi": "यह सिर्फ बदला नहीं था। यह... जंगल का पुनरुत्थान है।"
					},
					"emotion": "angry"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction",
					"speaker": "briar",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"speaker": "briar",
					"content": {
						"korean": "봐. 이 뒤틀린 뿌리들… 숲의 생명력을 흡수하고 있어.",
						"english": "Look. These twisted roots... they're absorbing the forest's life force.",
						"japanese": "見ろ。このねじれた根…森の生命力を吸い取っている。",
						"chinese": "看。这些扭曲的树根…它们正在吸收森林的生命力。",
						"french": "Regarde. Ces racines tordues... elles absorbent la force vitale de la forêt.",
						"spanish": "Mira. Estas raíces retorcidas... están absorbiendo la fuerza vital del bosque.",
						"vietnamese": "Nhìn này. Những rễ cây xoắn vặn này... chúng đang hút sinh lực của khu rừng.",
						"thai": "ดูสิ รากไม้ที่บิดเบี้ยวพวกนี้...มันกำลังดูดซับพลังชีวิตของป่า",
						"hindi": "देखो। ये मुड़ी हुई जड़ें... ये जंगल की जीवन शक्ति को सोख रही हैं।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "어째서? 뭘 위해서?",
						"english": "Why? For what purpose?",
						"japanese": "なぜ？何のために？",
						"chinese": "为什么？为了什么？",
						"french": "Pourquoi ? Dans quel but ?",
						"spanish": "¿Por qué? ¿Para qué?",
						"vietnamese": "Tại sao? Để làm gì?",
						"thai": "ทำไม? เพื่ออะไร?",
						"hindi": "क्यों? किस लिए?"
					}
				},
				{
					"speaker": "briar",
					"content": {
						"korean": "새로운 고대 종족을 부활시키기 위한 촉매… 치킨-사우루스의 고대 마법의 잔재야.",
						"english": "A catalyst to revive a new ancient race... remnants of Chicken-saurus's ancient magic.",
						"japanese": "新たな古代種族を復活させるための触媒…チキン・サウルスの古代魔法の残滓だ。",
						"chinese": "复活新古代种族的催化剂…恐龙鸡的古代魔法残余。",
						"french": "Un catalyseur pour faire revivre une nouvelle race ancienne... les vestiges de la magie ancienne du Poulet-saurus.",
						"spanish": "Un catalizador para revivir una nueva raza antigua... restos de la magia ancestral del Pollo-saurio.",
						"vietnamese": "Một chất xúc tác để hồi sinh một chủng tộc cổ đại mới... tàn dư phép thuật cổ xưa của Gà-khủng long.",
						"thai": "ตัวเร่งปฏิกิริยาเพื่อฟื้นฟูเผ่าพันธุ์โบราณใหม่...เป็นร่องรอยของเวทมนตร์โบราณของไก่ซอรัส",
						"hindi": "एक नई प्राचीन प्रजाति को पुनर्जीवित करने का उत्प्रेरक... चिकन-सॉरस के प्राचीन जादू के अवशेष।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 우린 뭘 해야 해?",
						"english": "So what should we do?",
						"japanese": "じゃあ、私たちはどうすればいいの？",
						"chinese": "那我们该怎么办？",
						"french": "Alors, que devons-nous faire ?",
						"spanish": "¿Entonces qué debemos hacer?",
						"vietnamese": "Vậy chúng ta phải làm gì?",
						"thai": "แล้วเราต้องทำยังไง?",
						"hindi": "तो हमें क्या करना चाहिए?"
					}
				},
				{
					"speaker": "briar",
					"content": {
						"korean": "막아야 해. 저것들이 완전하게 깨어나기 전에.",
						"english": "We have to stop them. Before they fully awaken.",
						"japanese": "止めなければ。あれらが完全に目覚める前に。",
						"chinese": "我们必须阻止它们。在它们完全苏醒之前。",
						"french": "Nous devons les arrêter. Avant qu'ils ne se réveillent complètement.",
						"spanish": "Tenemos que detenerlos. Antes de que despierten por completo.",
						"vietnamese": "Chúng ta phải ngăn chặn chúng. Trước khi chúng hoàn toàn thức tỉnh.",
						"thai": "เราต้องหยุดมัน ก่อนที่พวกมันจะตื่นขึ้นมาอย่างสมบูรณ์",
						"hindi": "हमें उन्हें रोकना होगा। इससे पहले कि वे पूरी तरह जाग जाएं।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						3
					],
					"speaker": "briar",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "briar",
					"content": {
						"korean": "밤이 되자 빛나는 버섯들이 더 선명해졌어.",
						"english": "As night fell, the glowing mushrooms became more vivid.",
						"japanese": "夜になり、光るキノコがより鮮明になった。",
						"chinese": "夜幕降临，发光的蘑菇变得更加清晰。",
						"french": "À la tombée de la nuit, les champignons lumineux sont devenus plus distincts.",
						"spanish": "Al caer la noche, los hongos luminosos se volvieron más vívidos.",
						"vietnamese": "Khi đêm xuống, những cây nấm phát sáng trở nên rõ nét hơn.",
						"thai": "เมื่อถึงเวลากลางคืน เห็ดเรืองแสงก็ชัดเจนยิ่งขึ้น",
						"hindi": "रात होते ही चमकते मशरूम और अधिक स्पष्ट हो गए।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "예쁘다고 하기엔… 너무 기괴한데.",
						"english": "To call them pretty... they're too grotesque.",
						"japanese": "綺麗というには…あまりにもグロテスクだ。",
						"chinese": "要说漂亮…也太怪异了。",
						"french": "Les appeler jolis… ils sont trop grotesques.",
						"spanish": "Llamarlos bonitos… son demasiado grotescos.",
						"vietnamese": "Để gọi là đẹp… chúng quá kỳ dị.",
						"thai": "จะว่างดงามก็… ดูประหลาดเกินไป",
						"hindi": "उन्हें सुंदर कहना… वे बहुत ही विकृत हैं।"
					}
				},
				{
					"speaker": "briar",
					"content": {
						"korean": "고대 공룡의 피가 숲에 스며들어 변이된 거야. 주변 생명체의 유전자를 변형시키고 있어.",
						"english": "Ancient dinosaur blood seeped into the forest and mutated them. It's altering the genes of nearby lifeforms.",
						"japanese": "古代恐竜の血が森に染み込み変異したんだ。周囲の生命体の遺伝子を変形させている。",
						"chinese": "是远古恐龙的血液渗入森林后变异而成的。它正在改变周围生物的基因。",
						"french": "Du sang de dinosaure ancien s'est infiltré dans la forêt et les a fait muter. Il modifie les gènes des formes de vie environnantes.",
						"spanish": "Es sangre de dinosaurio antiguo que se filtró en el bosque y los mutó. Está alterando los genes de las formas de vida cercanas.",
						"vietnamese": "Máu khủng long cổ đại đã thấm vào rừng và biến đổi chúng. Nó đang thay đổi gen của các sinh vật xung quanh.",
						"thai": "เป็นเลือดไดโนเสาร์โบราณที่ซึมลงไปในป่าแล้วกลายพันธุ์ มันกำลังเปลี่ยนแปลงยีนของสิ่งมีชีวิตโดยรอบ",
						"hindi": "प्राचीन डायनासोर का रक्त जंगल में रिसकर उन्हें उत्परिवर्तित कर गया है। यह आस-पास के जीवों के जीन्स को बदल रहा है।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "숲 전체를 바꾸고 있다는 거야?",
						"english": "So it's changing the entire forest?",
						"japanese": "森全体を変えているってこと？",
						"chinese": "也就是说，它正在改变整个森林？",
						"french": "Donc, ça change toute la forêt ?",
						"spanish": "¿Entonces está cambiando todo el bosque?",
						"vietnamese": "Vậy là nó đang thay đổi cả khu rừng sao?",
						"thai": "หมายความว่ามันกำลังเปลี่ยนแปลงป่าทั้งผืนงั้นเหรอ?",
						"hindi": "तो यह पूरे जंगल को बदल रहा है?"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "briar",
					"content": {
						"korean": "그래. 서서히, 모든 것을… 새로운 숲으로.",
						"english": "Yes. Slowly, everything... into a new forest.",
						"japanese": "そう。ゆっくりと、すべてを…新しい森へと。",
						"chinese": "对。慢慢地，将一切…变成新的森林。",
						"french": "Oui. Lentement, tout… en une nouvelle forêt.",
						"spanish": "Sí. Lentamente, todo… en un nuevo bosque.",
						"vietnamese": "Đúng vậy. Dần dần, mọi thứ… thành một khu rừng mới.",
						"thai": "ใช่แล้ว ค่อยๆ เปลี่ยนทุกสิ่ง… ให้กลายเป็นป่าแห่งใหม่",
						"hindi": "हाँ। धीरे-धीरे, सब कुछ… एक नए जंगल में।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "briar",
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "briar",
					"content": {
						"korean": "저 알 껍질 조각… 엄청난 에너지를 품고 있어. 새로운 고대 종족의 알이야.",
						"english": "That eggshell fragment... it holds immense energy. It's an egg of a new ancient species.",
						"japanese": "あの卵の殻の破片…とてつもないエネルギーを秘めている。新たな古代種族の卵だ。",
						"chinese": "那块蛋壳碎片…蕴含着巨大的能量。是一个新的远古物种的蛋。",
						"french": "Ce fragment de coquille d'œuf… il contient une énergie immense. C'est l'œuf d'une nouvelle espèce ancienne.",
						"spanish": "Ese fragmento de cáscara de huevo… contiene una energía inmensa. Es un huevo de una nueva especie antigua.",
						"vietnamese": "Mảnh vỏ trứng đó… nó chứa năng lượng khổng lồ. Là trứng của một loài cổ đại mới.",
						"thai": "ชิ้นส่วนเปลือกไข่นั่น… อัดแน่นไปด้วยพลังงานมหาศาล มันคือไข่ของเผ่าพันธุ์โบราณสายพันธุ์ใหม่",
						"hindi": "वह अंडे के छिलके का टुकड़ा… उसमें अपार ऊर्जा है। यह एक नई प्राचीन प्रजाति का अंडा है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이 조각으로도 이렇게 강력한데… 안의 존재는 얼마나 강할까.",
						"english": "Even this fragment is so powerful... how strong must the being inside be?",
						"japanese": "この破片だけでもこんなに強力なのに…中の存在はどれほど強いのだろうか。",
						"chinese": "连这块碎片都如此强大…里面的存在会多么强大呢。",
						"french": "Même ce fragment est si puissant… à quel point l'être à l'intérieur doit-il être fort ?",
						"spanish": "Incluso este fragmento es tan poderoso… ¿cuán fuerte será la criatura dentro?",
						"vietnamese": "Ngay cả mảnh này cũng mạnh mẽ như vậy… vậy sự tồn tại bên trong sẽ mạnh đến mức nào?",
						"thai": "แค่เศษชิ้นส่วนนี้ยังทรงพลังขนาดนี้… แล้วตัวตนที่อยู่ข้างในจะแข็งแกร่งแค่ไหนกัน?",
						"hindi": "यह टुकड़ा भी इतना शक्तिशाली है… अंदर का प्राणी कितना शक्तिशाली होगा?"
					},
					"emotion": "sad"
				},
				{
					"emotion": "sad",
					"speaker": "briar",
					"content": {
						"korean": "강력한 방어력과 생명력… 이미 너무 자라버렸어.",
						"english": "Powerful defense and vitality... it's already grown too much.",
						"japanese": "強力な防御力と生命力…すでに成長しすぎてしまった。",
						"chinese": "强大的防御力和生命力…已经成长得太大了。",
						"french": "Une défense et une vitalité puissantes… il a déjà trop grandi.",
						"spanish": "Poderosa defensa y vitalidad… ya ha crecido demasiado.",
						"vietnamese": "Khả năng phòng thủ và sức sống mạnh mẽ… nó đã phát triển quá mức rồi.",
						"thai": "พลังป้องกันและพลังชีวิตที่แข็งแกร่ง… มันเติบโตมากเกินไปแล้ว",
						"hindi": "शक्तिशाली रक्षा और जीवन शक्ति… यह पहले ही बहुत बढ़ चुका है।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "늦은 건가… 모든 게.",
						"english": "Is it too late... for everything?",
						"japanese": "遅すぎたのか…すべてが。",
						"chinese": "是不是太迟了…一切。",
						"french": "Est-ce trop tard… pour tout ?",
						"spanish": "¿Es demasiado tarde… para todo?",
						"vietnamese": "Đã quá muộn rồi sao… tất cả?",
						"thai": "สายไปแล้วงั้นเหรอ… ทุกสิ่ง",
						"hindi": "क्या बहुत देर हो चुकी है… सब कुछ के लिए?"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"speaker": "briar",
					"content": {
						"korean": "아니! 아직 기회가 있어. 저 중심부를 파괴하면…",
						"english": "No! There's still a chance. If we destroy that core...",
						"japanese": "いや！まだチャンスはある。あの中心部を破壊すれば…",
						"chinese": "不！还有机会。如果破坏那个核心…",
						"french": "Non ! Il y a encore une chance. Si nous détruisons ce noyau…",
						"spanish": "¡No! Todavía hay una oportunidad. Si destruimos ese núcleo…",
						"vietnamese": "Không! Vẫn còn cơ hội. Nếu phá hủy phần trung tâm đó…",
						"thai": "ไม่! ยังมีโอกาส ถ้าเราทำลายแกนกลางนั่น…",
						"hindi": "नहीं! अभी भी एक मौका है। अगर हम उस कोर को नष्ट कर दें…"
					},
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "바람이 속삭였다. 알 수 없는 고대 언어로.",
						"english": "The wind whispered. In an unknown ancient language.",
						"japanese": "風が囁いた。未知の古代言語で。",
						"chinese": "风在低语。用一种未知的古老语言。",
						"french": "Le vent a chuchoté. Dans une langue ancienne inconnue.",
						"spanish": "El viento susurró. En un idioma antiguo desconocido.",
						"vietnamese": "Gió thì thầm. Bằng một ngôn ngữ cổ xưa không rõ.",
						"thai": "ลมกระซิบ ในภาษาโบราณที่ไม่รู้จัก",
						"hindi": "हवा ने फुसफुसाया। एक अज्ञात प्राचीन भाषा में।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "바람 소리가… 더 크게 들려. 날 조롱하는 것 같아.",
						"english": "The wind's sound... is louder. It feels like it's mocking me.",
						"japanese": "風の音が…もっと大きく聞こえる。まるで私を嘲笑っているかのようだ。",
						"chinese": "风声…更大了。它好像在嘲笑我。",
						"french": "Le bruit du vent... est plus fort. On dirait qu'il se moque de moi.",
						"spanish": "El sonido del viento... es más fuerte. Parece que se está burlando de mí.",
						"vietnamese": "Tiếng gió… nghe lớn hơn. Cứ như nó đang chế nhạo tôi vậy.",
						"thai": "เสียงลม… ดังขึ้น เหมือนมันกำลังเยาะเย้ยฉัน",
						"hindi": "हवा की आवाज़… और तेज़ हो गई है। ऐसा लगता है जैसे यह मेरा मज़ाक उड़ा रही है।"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "briar",
					"content": {
						"korean": "치킨-사우루스의 정신 지배 마법이야! 서둘러야 해!",
						"english": "It's Chicken-saurus's mind control magic! We have to hurry!",
						"japanese": "チキンサウルスの精神支配魔法だ！急がなければ！",
						"chinese": "是鸡龙的精神控制魔法！我们必须快点！",
						"french": "C'est la magie de contrôle mental du Poulet-saurus ! Nous devons nous dépêcher !",
						"spanish": "¡Es la magia de control mental del Pollosaurio! ¡Tenemos que darnos prisa!",
						"vietnamese": "Đó là phép thuật điều khiển tâm trí của Gà-khủng long! Phải nhanh lên thôi!",
						"thai": "มันคือเวทมนตร์ควบคุมจิตใจของชิกเก้น-ซอรัส! เราต้องรีบแล้ว!",
						"hindi": "यह चिकन-सॉरस का मन-नियंत्रण जादू है! हमें जल्दी करनी होगी!"
					},
					"emotion": "angry"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"speaker": "boss",
					"content": {
						"korean": "절망해라. 너희는 그저 새로운 숲의 거름일 뿐이다.",
						"english": "Despair. You are merely fertilizer for the new forest.",
						"japanese": "絶望しろ。お前たちはただ、新たな森の肥やしにすぎない。",
						"chinese": "绝望吧。你们不过是新森林的肥料罢了。",
						"french": "Désespérez. Vous n'êtes que de l'engrais pour la nouvelle forêt.",
						"spanish": "Desesperad. No sois más que abono para el nuevo bosque.",
						"vietnamese": "Hãy tuyệt vọng đi. Các ngươi chỉ là phân bón cho khu rừng mới mà thôi.",
						"thai": "จงสิ้นหวังเถอะ พวกเจ้าเป็นเพียงปุ๋ยสำหรับป่าใหม่เท่านั้น",
						"hindi": "निराश हो जाओ। तुम केवल नए जंगल के लिए खाद हो।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "크아악… 하지만… 난 포기하지 않아!",
						"english": "Aargh... But... I won't give up!",
						"japanese": "くあああ…だが…私は諦めない！",
						"chinese": "啊啊啊……但是……我不会放弃！",
						"french": "Aaahh... Mais... je n'abandonnerai pas !",
						"spanish": "¡Aaaargh!... Pero... ¡no me rendiré!",
						"vietnamese": "Aaaargh... Nhưng... ta sẽ không bỏ cuộc!",
						"thai": "อ๊ากกก... แต่ว่า... ฉันไม่ยอมแพ้หรอก!",
						"hindi": "आह्ह्ह... लेकिन... मैं हार नहीं मानूंगा!"
					}
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "숲의 모든 생명이, 새로운 지배자의 품으로 돌아갔다.",
						"english": "All life in the forest returned to the embrace of the new ruler.",
						"japanese": "森の全ての生命が、新たな支配者の腕の中へと戻った。",
						"chinese": "森林中所有的生命，都回到了新统治者的怀抱。",
						"french": "Toute vie dans la forêt est retournée dans l'étreinte du nouveau souverain.",
						"spanish": "Toda la vida del bosque regresó al abrazo del nuevo gobernante.",
						"vietnamese": "Tất cả sự sống trong rừng đã trở về với vòng tay của kẻ thống trị mới.",
						"thai": "สรรพชีวิตทั้งหมดในป่าได้กลับคืนสู่อ้อมกอดของผู้ปกครองคนใหม่แล้ว",
						"hindi": "जंगल का सारा जीवन नए शासक के आलिंगन में लौट आया।"
					},
					"emotion": "base"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "유적의 심장부. 거대한 알이 지축을 울리며 꿈틀거렸다.",
						"english": "The heart of the ruins. A gigantic egg pulsed, shaking the ground.",
						"japanese": "遺跡の心臓部。巨大な卵が地軸を揺るがしながら蠢いた。",
						"chinese": "遗迹的中心。一个巨大的蛋震动着地面，蠕动着。",
						"french": "Le cœur des ruines. Un œuf gigantesque pulsait, faisant trembler le sol.",
						"spanish": "El corazón de las ruinas. Un huevo gigantesco palpitaba, haciendo temblar la tierra.",
						"vietnamese": "Trái tim của phế tích. Một quả trứng khổng lồ rung chuyển mặt đất, co giật.",
						"thai": "ใจกลางซากปรักหักพัง ไข่ยักษ์สั่นสะเทือนพื้นดินและกระตุก",
						"hindi": "खंडहरों का हृदय। एक विशाल अंडा धरती को हिलाते हुए धड़क रहा था।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "저게… 새로운 지배자?",
						"english": "Is that... the new ruler?",
						"japanese": "あれが…新しい支配者？",
						"chinese": "那是…新的统治者？",
						"french": "C'est… le nouveau souverain ?",
						"spanish": "¿Es ese... el nuevo gobernante?",
						"vietnamese": "Đó là… kẻ thống trị mới?",
						"thai": "นั่นคือ… ผู้ปกครองคนใหม่?",
						"hindi": "क्या वह… नया शासक है?"
					},
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"action": "enter",
					"type": "direction",
					"speaker": "briar"
				},
				{
					"emotion": "angry",
					"speaker": "briar",
					"content": {
						"korean": "서둘러! 치킨-사우루스가 숲의 핵심 마법석을… 파괴할 거야!",
						"english": "Hurry! Chicken-saurus will... destroy the forest's core magic stone!",
						"japanese": "急げ！チキンサウルスが森の核となる魔石を…破壊するぞ！",
						"chinese": "快点！鸡龙会…摧毁森林的核心魔法石！",
						"french": "Dépêchez-vous ! Le Poulet-saurus va… détruire la pierre magique centrale de la forêt !",
						"spanish": "¡Rápido! ¡El Pollosaurio va a… destruir la piedra mágica central del bosque!",
						"vietnamese": "Nhanh lên! Gà-khủng long sẽ… phá hủy viên đá ma thuật cốt lõi của khu rừng!",
						"thai": "รีบเข้า! ชิกเก้น-ซอรัสจะ… ทำลายศิลาเวทมนตร์แกนกลางของป่า!",
						"hindi": "जल्दी करो! चिकन-सॉरस जंगल के मुख्य जादुई पत्थर को… नष्ट कर देगा!"
					},
					"type": "speech"
				},
				{
					"action": "exit",
					"type": "direction",
					"speaker": "briar",
					"duration_ms": 400,
					"direction": "down"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "…어리석은 인간들. 감히 나의 탄생을 방해하려 하다니.",
						"english": "...Foolish humans. How dare you try to hinder my birth.",
						"japanese": "…愚かな人間ども。よくも私の誕生を邪魔しようなどと。",
						"chinese": "…愚蠢的人类。竟敢试图阻挠我的诞生。",
						"french": "...Humains stupides. Comment osez-vous tenter d'entraver ma naissance.",
						"spanish": "...Humanos estúpidos. ¿Cómo osáis intentar impedir mi nacimiento?",
						"vietnamese": "…Lũ người ngu ngốc. Dám cả gan cản trở sự ra đời của ta.",
						"thai": "…มนุษย์โง่เขลา เจ้ากล้าดียังไงมาขัดขวางการกำเนิดของข้า",
						"hindi": "...मूर्ख इंसान। तुमने मेरी पैदाइश में बाधा डालने की हिम्मत कैसे की।"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "넌… 뭐야! 숲을 망치려는 너를 용서하지 않아!",
						"english": "What… are you! I won't forgive you for trying to ruin the forest!",
						"japanese": "お前は…何だ！森を破壊しようとするお前を許さない！",
						"chinese": "你…是什么东西！我不会原谅你毁坏森林！",
						"french": "Qu'est-ce que… tu es ! Je ne te pardonnerai pas d'essayer de ruiner la forêt !",
						"spanish": "¿Qué… eres? ¡No te perdonaré por intentar arruinar el bosque!",
						"vietnamese": "Ngươi… là cái gì! Ta sẽ không tha thứ cho ngươi vì đã cố phá hủy khu rừng!",
						"thai": "แก… เป็นใคร! ฉันไม่ให้อภัยแกที่พยายามจะทำลายป่า!",
						"hindi": "तुम… क्या हो! जंगल को बर्बाद करने की कोशिश के लिए मैं तुम्हें माफ़ नहीं करूँगा!"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "나는… 복수의 씨앗. 숲의 새로운 지배자이자, 너희의 절망이다.",
						"english": "I am… the seed of vengeance. The new ruler of the forest, and your despair.",
						"japanese": "私は…復讐の種。森の新たな支配者であり、お前たちの絶望だ。",
						"chinese": "我是…复仇的种子。森林的新统治者，以及你们的绝望。",
						"french": "Je suis… la graine de la vengeance. Le nouveau souverain de la forêt, et votre désespoir.",
						"spanish": "Soy… la semilla de la venganza. El nuevo gobernante del bosque, y vuestra desesperación.",
						"vietnamese": "Ta là… hạt giống của sự báo thù. Kẻ thống trị mới của khu rừng, và là nỗi tuyệt vọng của các ngươi.",
						"thai": "ข้าคือ… เมล็ดพันธุ์แห่งการแก้แค้น ผู้ปกครองคนใหม่ของป่า และความสิ้นหวังของพวกเจ้า",
						"hindi": "मैं… बदले का बीज हूँ। जंगल का नया शासक, और तुम्हारी निराशा।"
					}
				}
			],
			"win_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 알이 산산조각 났다. 그러나 승리의 기쁨은 잠시였다.",
						"english": "The gigantic egg shattered. But the joy of victory was short-lived.",
						"japanese": "巨大な卵は粉々に砕け散った。しかし、勝利の喜びは束の間だった。",
						"chinese": "巨大的蛋碎裂了。但胜利的喜悦是短暂的。",
						"french": "L'œuf gigantesque se brisa en mille morceaux. Mais la joie de la victoire fut de courte durée.",
						"spanish": "El huevo gigantesco se hizo añicos. Pero la alegría de la victoria duró poco.",
						"vietnamese": "Quả trứng khổng lồ vỡ tan tành. Nhưng niềm vui chiến thắng chỉ là thoáng qua.",
						"thai": "ไข่ยักษ์แตกเป็นเสี่ยงๆ แต่ความสุขของชัยชนะนั้นอยู่ได้ไม่นาน",
						"hindi": "विशाल अंडा चकनाचूर हो गया। लेकिन जीत की खुशी क्षणिक थी।"
					}
				},
				{
					"speaker": "boss",
					"content": {
						"korean": "그때 쿠가 흘려보낸 복수의 씨앗이… 이제 숲 전체를 깨울 것이다.",
						"english": "The seed of vengeance Kua sowed then... will now awaken the entire forest.",
						"japanese": "あの時クアがばら撒いた復讐の種が…今、森全体を目覚めさせるだろう。",
						"chinese": "那时库亚播下的复仇之种……现在将唤醒整个森林。",
						"french": "La graine de vengeance semée par Kua alors... va maintenant réveiller toute la forêt.",
						"spanish": "La semilla de venganza que Kua sembró entonces... ahora despertará todo el bosque.",
						"vietnamese": "Hạt giống báo thù mà Kua đã gieo khi đó... giờ đây sẽ đánh thức toàn bộ khu rừng.",
						"thai": "เมล็ดพันธุ์แห่งการแก้แค้นที่คูวาหว่านไว้เมื่อนั้น... บัดนี้จะปลุกป่าทั้งผืนให้ตื่นขึ้น",
						"hindi": "उस समय कुआ द्वारा बोया गया प्रतिशोध का बीज... अब पूरे जंगल को जगाएगा।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "말도 안 돼… 아직… 끝나지 않았다고?",
						"english": "No way... It's not... over yet?",
						"japanese": "まさか…まだ…終わってないだと？",
						"chinese": "不可能……还没……结束吗？",
						"french": "Impossible... Ce n'est pas... encore fini ?",
						"spanish": "¡No puede ser!... ¿Aún... no ha terminado?",
						"vietnamese": "Không thể nào... Vẫn... chưa kết thúc sao?",
						"thai": "ไม่จริงน่า... ยัง... ไม่จบอีกเหรอ?",
						"hindi": "ना मुमकिन... अभी... खत्म नहीं हुआ?"
					}
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "숲의 핵심 마법석이 깨지며, 세상이 뒤틀리고 고대 생명체들의 광기가 숲을 뒤덮었다.",
						"english": "As the forest's core magic stone shattered, the world twisted, and the madness of ancient creatures engulfed the forest.",
						"japanese": "森の核となる魔石が砕け散り、世界は歪み、古の生命体たちの狂気が森を覆い尽くした。",
						"chinese": "随着森林的核心魔石破碎，世界扭曲，古代生物的疯狂笼罩了森林。",
						"french": "Alors que la pierre magique centrale de la forêt se brisait, le monde se tordit, et la folie des créatures antiques submergea la forêt.",
						"spanish": "Al romperse la piedra mágica central del bosque, el mundo se distorsionó y la locura de las criaturas ancestrales cubrió el bosque.",
						"vietnamese": "Khi viên ma thạch cốt lõi của rừng vỡ vụn, thế giới méo mó, sự điên loạn của các sinh vật cổ đại bao trùm khu rừng.",
						"thai": "เมื่อศิลามนตราแกนกลางของป่าแตกสลาย โลกก็บิดเบี้ยว และความบ้าคลั่งของสิ่งมีชีวิตโบราณก็เข้าครอบงำป่า",
						"hindi": "जैसे ही जंगल का मुख्य जादुई पत्थर टूटा, दुनिया विकृत हो गई, और प्राचीन प्राणियों का पागलपन जंगल में छा गया।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "진정한 재앙은… 이제 막 시작되었다.",
						"english": "The true disaster... has only just begun.",
						"japanese": "真の災厄は…今、始まったばかりだ。",
						"chinese": "真正的灾难……才刚刚开始。",
						"french": "La véritable catastrophe... ne fait que commencer.",
						"spanish": "El verdadero desastre... acaba de empezar.",
						"vietnamese": "Thảm họa thực sự... chỉ vừa mới bắt đầu.",
						"thai": "ภัยพิบัติที่แท้จริง... เพิ่งจะเริ่มต้นขึ้นเท่านั้น",
						"hindi": "असली आपदा... अभी-अभी शुरू हुई है।"
					},
					"type": "speech"
				}
			]
		}
	],
	"epilogue": {
		"korean": [
			"숲은 침묵했다. 승리한 줄 알았던 싸움은, 그저 거대한 서곡에 불과했다.",
			"마법석의 파편들이 어둠 속에서 빛났다. 새로운 광기의 씨앗처럼 숲 곳곳에 뿌려지며.",
			"치킨-사우루스의 복수는 단순한 죽음이 아닌, 숲의 재창조라는 잔혹한 형태로 완성되었다.",
			"이것이 구원이었을까, 아니면 더 깊은 나락으로의 침해였을까.",
			"주인공은 깨달았다. 진짜 싸움은… 이제부터라는 것을."
		],
		"english": [
			"The forest fell silent. The battle, thought to be won, was merely a grand prelude.",
			"Shards of the magic stone gleamed in the darkness. Scattered throughout the forest like seeds of new madness.",
			"Chicken-saurus's revenge was completed not merely as death, but in the cruel form of the forest's recreation.",
			"Was this salvation, or an intrusion into a deeper abyss?",
			"The protagonist realized. The real fight... begins now."
		],
		"japanese": [
			"森は沈黙した。勝利したと思われた戦いは、ただの壮大な序曲に過ぎなかった。",
			"魔法石の破片が闇の中で輝いた。新たな狂気の種のように森のあちこちに蒔かれながら。",
			"チキンサウルスの復讐は、単なる死ではなく、森の再創造という残酷な形で完成された。",
			"これが救済だったのか、それともより深い奈落への侵入だったのか。",
			"主人公は悟った。本当の戦いは…これからだということを。"
		],
		"chinese": [
			"森林陷入沉寂。本以为胜利的战斗，不过是一场宏大序曲。",
			"魔石碎片在黑暗中闪烁。它们像新的疯狂之种一样，散落在森林的各个角落。",
			"奇肯-萨乌鲁斯的复仇并非简单的死亡，而是以森林重塑的残酷形式完成。",
			"这是救赎，抑或是更深渊的侵蚀？",
			"主人公意识到。真正的战斗……才刚刚开始。"
		],
		"french": [
			"La forêt se tut. Le combat, que l'on croyait gagné, n'était qu'un grand prélude.",
			"Des éclats de la pierre magique scintillaient dans l'obscurité. Dispersés dans toute la forêt comme des graines d'une nouvelle folie.",
			"La vengeance du Chicken-saurus ne s'est pas accomplie par une simple mort, mais sous la forme cruelle de la recréation de la forêt.",
			"Était-ce le salut, ou une intrusion dans un abîme plus profond ?",
			"Le protagoniste réalisa. Le vrai combat... commence maintenant."
		],
		"spanish": [
			"El bosque enmudeció. La batalla, que se creyó ganada, era solo un gran preludio.",
			"Fragmentos de la piedra mágica brillaban en la oscuridad. Esparcidos por todo el bosque como semillas de una nueva locura.",
			"La venganza del Chicken-saurus se completó no solo como muerte, sino en la cruel forma de la recreación del bosque.",
			"¿Fue esto salvación, o una intrusión en un abismo más profundo?",
			"El protagonista se dio cuenta. La verdadera lucha... comienza ahora."
		],
		"vietnamese": [
			"Rừng chìm vào im lặng. Trận chiến tưởng chừng đã thắng, chỉ là một khúc dạo đầu vĩ đại.",
			"Những mảnh vỡ của viên đá ma thuật lấp lánh trong bóng tối. Rải rác khắp khu rừng như những hạt giống của sự điên loạn mới.",
			"Sự báo thù của Chicken-saurus không chỉ là cái chết, mà đã hoàn thành dưới hình thức tàn khốc là sự tái tạo của khu rừng.",
			"Đây là sự cứu rỗi, hay một sự xâm phạm vào vực sâu hơn?",
			"Nhân vật chính nhận ra. Cuộc chiến thực sự... bắt đầu từ bây giờ."
		],
		"thai": [
			"ป่าเงียบสงบ การต่อสู้ที่คิดว่าชนะแล้วนั้นเป็นเพียงแค่โหมโรงอันยิ่งใหญ่",
			"เศษหินเวทมนตร์ส่องประกายในความมืด กระจัดกระจายไปทั่วป่าราวกับเมล็ดพันธุ์แห่งความบ้าคลั่งใหม่",
			"การแก้แค้นของไดโนไก่ไม่เพียงแค่ความตาย แต่สมบูรณ์ในรูปแบบที่โหดร้ายของการสร้างป่าขึ้นมาใหม่",
			"นี่คือการช่วยให้รอด หรือเป็นการรุกรานสู่ห้วงลึกที่มืดมิดกว่ากันแน่",
			"ตัวเอกตระหนักได้ การต่อสู้ที่แท้จริง... เพิ่งจะเริ่มต้นขึ้น"
		],
		"hindi": [
			"जंगल शांत हो गया। जिस लड़ाई को जीता हुआ समझा गया था, वह केवल एक भव्य प्रस्तावना थी।",
			"जादुई पत्थर के टुकड़े अँधेरे में चमक रहे थे। नई दीवानगी के बीजों की तरह जंगल भर में बिखरे हुए।",
			"चिकेन-सॉरस का प्रतिशोध केवल मृत्यु के रूप में नहीं, बल्कि जंगल के पुनर्निर्माण के क्रूर रूप में पूरा हुआ।",
			"क्या यह मोक्ष था, या एक गहरे पाताल में घुसपैठ?",
			"नायक ने महसूस किया। असली लड़ाई... अब शुरू होती है।"
		]
	},
	"prologue": {
		"korean": [
			"숲의 가장 깊은 곳, 고대 유적의 심장이 격렬하게 뛰고 있었다.",
			"치킨-사우루스가 남긴 복수의 씨앗이 뿌리내린 곳.",
			"모든 것을 뒤바꿀 새로운 지배자가 탄생하려는 순간, 절망이 숲을 뒤덮었다.",
			"진실은 모두 밝혀졌지만, 이미 너무 늦었다.",
			"이제 숲은, 돌이킬 수 없는 재창조를 시작한다."
		],
		"english": [
			"In the deepest part of the forest, the heart of an ancient ruin beat furiously.",
			"Where the seeds of revenge left by Chicken-saurus took root.",
			"The moment a new ruler, destined to overturn everything, was about to be born, despair enveloped the forest.",
			"The truth was all revealed, but it was already too late.",
			"Now, the forest begins an irreversible recreation."
		],
		"japanese": [
			"森の最も深い場所で、古代遺跡の心臓が激しく脈打っていた。",
			"チキンサウルスが残した復讐の種が根付いた場所。",
			"全てを覆す新たな支配者が誕生しようとした瞬間、絶望が森を覆い尽くした。",
			"真実は全て明かされたが、すでに手遅れだった。",
			"今、森は取り返しのつかない再創造を始める。"
		],
		"chinese": [
			"在森林最深处，古老遗迹的心脏剧烈跳动着。",
			"奇肯-萨乌鲁斯留下的复仇之种在此生根发芽。",
			"正当一位将颠覆一切的新统治者即将诞生之际，绝望笼罩了整片森林。",
			"所有的真相都已揭露，但为时已晚。",
			"如今，森林开始了一场不可逆转的重塑。"
		],
		"french": [
			"Au plus profond de la forêt, le cœur d'une ancienne ruine battait furieusement.",
			"Là où les graines de vengeance laissées par le Chicken-saurus prirent racine.",
			"Au moment où un nouveau souverain, destiné à tout renverser, était sur le point de naître, le désespoir enveloppa la forêt.",
			"Toute la vérité fut révélée, mais il était déjà trop tard.",
			"Maintenant, la forêt entame une recréation irréversible."
		],
		"spanish": [
			"En lo más profundo del bosque, el corazón de una antigua ruina latía furiosamente.",
			"Donde las semillas de venganza dejadas por el Chicken-saurus echaron raíces.",
			"Justo cuando un nuevo gobernante, destinado a cambiarlo todo, estaba a punto de nacer, la desesperación envolvió el bosque.",
			"Toda la verdad fue revelada, pero ya era demasiado tarde.",
			"Ahora, el bosque comienza una recreación irreversible."
		],
		"vietnamese": [
			"Sâu thẳm nhất trong rừng, trái tim của một tàn tích cổ đại đang đập dữ dội.",
			"Nơi những hạt giống báo thù do Chicken-saurus để lại đã bén rễ.",
			"Khoảnh khắc một kẻ thống trị mới, định mệnh lật đổ mọi thứ, sắp ra đời, tuyệt vọng bao trùm khu rừng.",
			"Sự thật đã được tiết lộ, nhưng đã quá muộn.",
			"Giờ đây, khu rừng bắt đầu một sự tái tạo không thể đảo ngược."
		],
		"thai": [
			"ในส่วนที่ลึกที่สุดของป่า ใจกลางของซากปรักหักพังโบราณกำลังเต้นอย่างบ้าคลั่ง",
			"ที่ซึ่งเมล็ดพันธุ์แห่งการแก้แค้นที่ไดโนไก่ทิ้งไว้ได้หยั่งราก",
			"ขณะที่ผู้ปกครองคนใหม่ผู้ที่จะเปลี่ยนแปลงทุกสิ่งกำลังจะถือกำเนิด ความสิ้นหวังก็ปกคลุมป่า",
			"ความจริงทั้งหมดถูกเปิดเผยแล้ว แต่ก็สายเกินไป",
			"บัดนี้ ป่าเริ่มต้นการสร้างสรรค์ใหม่ที่ไม่สามารถย้อนกลับได้"
		],
		"hindi": [
			"जंगल के सबसे गहरे हिस्से में, एक प्राचीन खंडहर का हृदय तेज़ी से धड़क रहा था।",
			"जहाँ चिकेन-सॉरस द्वारा छोड़े गए प्रतिशोध के बीज अंकुरित हुए थे।",
			"जिस क्षण एक नया शासक, जो सब कुछ बदलने वाला था, जन्म लेने वाला था, निराशा ने जंगल को घेर लिया।",
			"सारा सच सामने आ गया था, लेकिन बहुत देर हो चुकी थी।",
			"अब, जंगल एक अपरिवर्तनीय पुनर्निर्माण शुरू करता है।"
		]
	}
} as const;
