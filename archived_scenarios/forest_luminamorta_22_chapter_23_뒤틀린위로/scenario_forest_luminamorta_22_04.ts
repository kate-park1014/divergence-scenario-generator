export const scenario_forest_luminamorta_22_04 = {
	"scenario_id": "forest_luminamorta_22_04",
	"order": 4,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"hazel": {
			"id": "mon_e2c11115-b300-4f32-b289-9ad088dc0273",
			"name": {
				"korean": "헤이즐",
				"english": "Hazel",
				"japanese": "ヘイゼル",
				"chinese": "榛",
				"french": "Hazel",
				"spanish": "Hazel",
				"vietnamese": "Hazel",
				"thai": "เฮเซล",
				"hindi": "हेज़ल"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/39f75a47-c622-45fe-04fd-a8bac1f93a00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/fc97b5d5-7a1d-4646-bedc-47a40ea70a00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"숲은 병들었다. 하지만 헤이즐은 웃었다.",
			"모든 것을 치유하는 힘이라고. 빛나는 균류가 그녀를 감싸 안았다.",
			"하지만 그 달콤한 향기 뒤에는 — 끔찍한 진실이 숨어 있었다.",
			"미소 짓는 얼굴 아래, 그녀의 생명은 스러지고 있었다."
		],
		"english": [
			"The forest was sick. But Hazel smiled.",
			"A power that heals all, they said. Luminous fungi embraced her.",
			"But behind that sweet scent—a terrible truth lurked.",
			"Beneath her smiling face, her life was fading away."
		],
		"japanese": [
			"森は病んでいた。だがヘイゼルは笑った。",
			"すべてを癒す力だと。輝く菌類が彼女を包み込んだ。",
			"しかし、その甘い香りの裏には — 恐ろしい真実が隠されていた。",
			"微笑む顔の下で、彼女の命は消えゆこうとしていた。"
		],
		"chinese": [
			"森林病了。但海泽尔笑了。",
			"据说那是治愈一切的力量。发光的真菌将她环绕。",
			"然而在那甜美芬芳背后——隐藏着一个可怕的真相。",
			"在她微笑的脸庞下，生命正在消逝。"
		],
		"french": [
			"La forêt était malade. Mais Hazel souriait.",
			"Un pouvoir qui guérit tout, disaient-ils. Des champignons lumineux l'enveloppèrent.",
			"Mais derrière cette douce fragrance — une terrible vérité se cachait.",
			"Sous son visage souriant, sa vie s'éteignait."
		],
		"spanish": [
			"El bosque estaba enfermo. Pero Hazel sonrió.",
			"Un poder que lo cura todo, decían. Hongos luminosos la abrazaron.",
			"Pero detrás de esa dulce fragancia — se ocultaba una terrible verdad.",
			"Bajo su rostro sonriente, su vida se desvanecía."
		],
		"vietnamese": [
			"Rừng ốm yếu. Nhưng Hazel mỉm cười.",
			"Một sức mạnh chữa lành mọi thứ. Nấm phát sáng ôm lấy cô.",
			"Nhưng đằng sau hương thơm ngọt ngào ấy — một sự thật kinh hoàng ẩn giấu.",
			"Dưới nụ cười của cô, sự sống đang dần tàn lụi."
		],
		"thai": [
			"ป่าป่วยไข้ แต่เฮเซลยิ้ม",
			"พลังที่เยียวยาทุกสิ่ง ว่ากันว่าอย่างนั้น เชื้อราเรืองแสงโอบกอดเธอ",
			"แต่เบื้องหลังกลิ่นหอมหวานนั้น—ความจริงอันน่าสะพรึงกลัวซ่อนอยู่",
			"ใต้ใบหน้ายิ้มแย้ม ชีวิตของเธอกำลังร่วงโรย"
		],
		"hindi": [
			"वन बीमार था। लेकिन हेज़ल मुस्कुराई।",
			"सब कुछ ठीक करने की शक्ति, उन्होंने कहा। चमकदार कवक ने उसे घेर लिया।",
			"लेकिन उस मीठी सुगंध के पीछे — एक भयानक सच छिपा था।",
			"उसके मुस्कुराते चेहरे के नीचे, उसका जीवन मुरझा रहा था।"
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
						"korean": "숲 깊숙한 곳. 기이하게도 달콤한 향이 가득했다.",
						"english": "Deep in the forest. It was filled with an oddly sweet scent.",
						"japanese": "森の奥深く。奇妙に甘い香りが満ちていた。",
						"chinese": "森林深处。弥漫着一股奇异的甜香。",
						"french": "Au plus profond de la forêt. Une odeur étrangement douce emplissait l'air.",
						"spanish": "En lo profundo del bosque. Estaba lleno de un aroma extrañamente dulce.",
						"vietnamese": "Sâu trong rừng. Một mùi hương ngọt ngào kỳ lạ tràn ngập.",
						"thai": "ลึกเข้าไปในป่า กลิ่นหอมหวานแปลกๆ อบอวล",
						"hindi": "जंगल के गहरे में। यह एक अजीब सी मीठी गंध से भरा था।"
					}
				},
				{
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"speaker": "hazel",
					"type": "direction",
					"action": "enter"
				},
				{
					"emotion": "happy",
					"content": {
						"korean": "여기는 치유의 숲이에요! 저도 곧 나을 거예요!",
						"english": "This is the Forest of Healing! I'll get better soon too!",
						"japanese": "ここは癒しの森です！私もすぐに治ります！",
						"chinese": "这里是治愈森林！我也很快会好起来的！",
						"french": "C'est la Forêt de Guérison ! Je vais vite aller mieux moi aussi !",
						"spanish": "¡Este es el Bosque de la Curación! ¡Yo también me curaré pronto!",
						"vietnamese": "Đây là Rừng Chữa Lành! Tôi cũng sẽ sớm khỏe lại thôi!",
						"thai": "ที่นี่คือป่าแห่งการเยียวยาค่ะ! ฉันก็จะหายดีในไม่ช้า!",
						"hindi": "यह उपचार का जंगल है! मैं भी जल्द ठीक हो जाऊँगी!"
					},
					"speaker": "hazel",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "치유...? 괜찮아 보이는군.",
						"english": "Healing...? You look fine.",
						"japanese": "癒し…？元気そうに見えるが。",
						"chinese": "治愈……？你看起来还不错。",
						"french": "Guérison...? Tu as l'air bien.",
						"spanish": "¿Curación...? Te ves bien.",
						"vietnamese": "Chữa lành...? Trông cô ổn mà.",
						"thai": "เยียวยา...? ดูท่าทางคุณสบายดีนะ",
						"hindi": "उपचार...? तुम ठीक लग रही हो।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "happy",
					"content": {
						"korean": "네! 저를 보세요. 이렇게 건강해지고 있잖아요?",
						"english": "Yes! Look at me. I'm getting so healthy, aren't I?",
						"japanese": "はい！私を見てください。こんなに健康になっていますよ？",
						"chinese": "是的！看看我。我不是越来越健康了吗？",
						"french": "Oui ! Regardez-moi. Je deviens tellement saine, n'est-ce pas ?",
						"spanish": "¡Sí! Mírame. ¿No estoy cada vez más sana?",
						"vietnamese": "Vâng! Nhìn tôi đây. Tôi đang khỏe mạnh hơn rồi mà, phải không?",
						"thai": "ค่ะ! ดูสิคะ ฉันกำลังแข็งแรงขึ้นไม่ใช่เหรอ?",
						"hindi": "हाँ! मुझे देखो। मैं इतनी स्वस्थ हो रही हूँ, है ना?"
					},
					"speaker": "hazel",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "그녀의 뺨은 창백했고, 미소는 힘겨웠다.",
						"english": "Her cheeks were pale, and her smile was strained.",
						"japanese": "彼女の頬は青白く、笑顔は辛そうだった。",
						"chinese": "她的脸颊苍白，笑容勉强。",
						"french": "Ses joues étaient pâles, et son sourire était forcé.",
						"spanish": "Sus mejillas estaban pálidas, y su sonrisa era forzada.",
						"vietnamese": "Má cô nhợt nhạt, nụ cười gượng gạo.",
						"thai": "แก้มของเธอซีดเผือด และรอยยิ้มก็ดูฝืนใจ",
						"hindi": "उसके गाल पीले थे, और उसकी मुस्कान मजबूर थी।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "hazel",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"action": "enter"
				},
				{
					"emotion": "happy",
					"speaker": "hazel",
					"type": "speech",
					"content": {
						"korean": "매일매일 더 좋아지는 기분이에요! 숲이 저를 돌봐주고 있어요.",
						"english": "I feel better every day! The forest is taking care of me.",
						"japanese": "毎日毎日、気分がよくなっています！森が私を看病してくれています。",
						"chinese": "我感觉一天比一天好！森林正在照顾我。",
						"french": "Je me sens mieux chaque jour ! La forêt prend soin de moi.",
						"spanish": "¡Me siento mejor cada día! El bosque me está cuidando.",
						"vietnamese": "Tôi cảm thấy tốt hơn mỗi ngày! Rừng đang chăm sóc tôi.",
						"thai": "ฉันรู้สึกดีขึ้นทุกวันเลยค่ะ! ป่ากำลังดูแลฉันอยู่",
						"hindi": "मैं हर दिन बेहतर महसूस कर रही हूँ! जंगल मेरा ख्याल रख रहा है।"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "하지만 점점 더 마르는 것 같아...",
						"english": "But you seem to be withering...",
						"japanese": "でも、どんどん痩せているみたいだ…",
						"chinese": "但你似乎越来越虚弱了……",
						"french": "Mais tu sembles dépérir...",
						"spanish": "Pero pareces estar marchitándote...",
						"vietnamese": "Nhưng dường như cậu đang héo mòn dần...",
						"thai": "แต่ดูเหมือนเจ้าจะเหี่ยวเฉาลงเรื่อยๆ...",
						"hindi": "पर तुम तो सूखती जा रही हो..."
					},
					"speaker": "character_1",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "무지갯빛 균류가 죽은 나무를 뒤덮고 있었다. 그 아래, 뭔가 꿈틀거렸다.",
						"english": "Iridescent fungi covered the dead tree. Something stirred beneath it.",
						"japanese": "虹色の菌類が枯れ木を覆っていた。その下で、何かが蠢いていた。",
						"chinese": "虹色真菌覆盖了枯死的树木。树下，有什么东西在蠕动。",
						"french": "Des champignons irisés recouvraient l'arbre mort. Quelque chose remuait en dessous.",
						"spanish": "Hongos iridiscentes cubrían el árbol muerto. Algo se agitaba debajo.",
						"vietnamese": "Nấm ngũ sắc bao phủ cây chết. Dưới đó, có thứ gì đó đang cựa quậy.",
						"thai": "เชื้อราสีรุ้งปกคลุมต้นไม้ที่ตายแล้ว ใต้ต้นนั้นมีบางสิ่งกำลังขยุกขยิกอยู่",
						"hindi": "इंद्रधनुषी फफूंदी ने सूखे पेड़ को ढँक रखा था। उसके नीचे कुछ रेंग रहा था।"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "아니에요! 이건 숲의 은혜예요! 더 아름다워지고 있는 거예요.",
						"english": "No! This is the forest's blessing! I'm becoming more beautiful.",
						"japanese": "いいえ！これは森の恵みです！もっと美しくなっているんです。",
						"chinese": "不！这是森林的恩赐！我正变得更美丽。",
						"french": "Non ! C'est la bénédiction de la forêt ! Je deviens plus belle.",
						"spanish": "¡No! ¡Esto es una bendición del bosque! Me estoy volviendo más hermosa.",
						"vietnamese": "Không! Đây là ân huệ của rừng! Tôi đang trở nên đẹp hơn.",
						"thai": "ไม่นะ! นี่คือพรจากป่า! ฉันกำลังงดงามขึ้นต่างหาก",
						"hindi": "नहीं! यह तो जंगल का आशीर्वाद है! मैं और सुंदर होती जा रही हूँ।"
					},
					"speaker": "hazel",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "hazel",
					"spot": [
						4,
						2
					],
					"action": "enter"
				},
				{
					"emotion": "base",
					"speaker": "hazel",
					"type": "speech",
					"content": {
						"korean": "조금 피곤할 뿐이에요... 숲이 더 큰 치유를 준비하고 있거든요.",
						"english": "I'm just a little tired... The forest is preparing a greater healing.",
						"japanese": "少し疲れているだけです…森がもっと大きな癒しを準備しているから。",
						"chinese": "我只是有点累……森林正在准备更强大的治愈。",
						"french": "Je suis juste un peu fatiguée... La forêt prépare une guérison plus profonde.",
						"spanish": "Solo estoy un poco cansada... El bosque está preparando una curación mayor.",
						"vietnamese": "Tôi chỉ hơi mệt thôi... Rừng đang chuẩn bị một sự chữa lành lớn hơn.",
						"thai": "ฉันแค่เพลียเล็กน้อย... ป่ากำลังเตรียมการเยียวยาที่ยิ่งใหญ่กว่า",
						"hindi": "मैं बस थोड़ी थकी हुई हूँ... जंगल एक बड़े उपचार की तैयारी कर रहा है।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_2",
					"type": "speech",
					"content": {
						"korean": "그 치유가 널 죽게 만들고 있어!",
						"english": "That healing is killing you!",
						"japanese": "その癒しが君を殺しているんだ！",
						"chinese": "那种治愈正在杀死你！",
						"french": "Cette guérison est en train de te tuer !",
						"spanish": "¡Esa curación te está matando!",
						"vietnamese": "Sự chữa lành đó đang giết chết cậu!",
						"thai": "การเยียวยานั่นกำลังฆ่าเจ้าอยู่!",
						"hindi": "वह उपचार तुम्हें मार रहा है!"
					}
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "주변에는 달콤하고 역겨운 향을 내는 균류가 덮인 동물 사체가 있었다. 그것들은 마치 살아있는 것처럼 미세하게 꿈틀거렸다.",
						"english": "Around them lay animal carcasses covered in sweet, sickening fungi. They subtly writhed as if alive.",
						"japanese": "周りには、甘く吐き気を催す香りの菌類に覆われた動物の死骸があった。それらは生きているかのように微かに蠢いていた。",
						"chinese": "周围散落着被散发着甜腻恶臭的真菌覆盖的动物尸体。它们细微地蠕动着，仿佛还活着。",
						"french": "Autour d'eux gisaient des carcasses d'animaux recouvertes de champignons à l'odeur douceâtre et écœurante. Elles se tordaient subtilement comme si elles étaient vivantes.",
						"spanish": "Alrededor yacían cadáveres de animales cubiertos de hongos de olor dulce y nauseabundo. Se retorcían sutilmente como si estuvieran vivos.",
						"vietnamese": "Xung quanh là những xác động vật phủ đầy nấm có mùi ngọt ngào, kinh tởm. Chúng khẽ cựa quậy như thể còn sống.",
						"thai": "รอบๆ มีซากสัตว์ที่ปกคลุมด้วยเชื้อราส่งกลิ่นหวานและน่าขยะแขยง พวกมันกระดุกกระดิกเล็กน้อยราวกับมีชีวิต",
						"hindi": "आस-पास मीठे, घिनौने गंध वाले कवक से ढके जानवरों के शव पड़े थे। वे जीवित की तरह सूक्ष्मता से रेंग रहे थे।"
					}
				},
				{
					"content": {
						"korean": "아름답잖아요... 이 모든 것이.",
						"english": "It's beautiful, isn't it... All of this.",
						"japanese": "美しいでしょう…この全てが。",
						"chinese": "很美，不是吗……这一切。",
						"french": "C'est beau, n'est-ce pas... Tout cela.",
						"spanish": "Es hermoso, ¿no es así?... Todo esto.",
						"vietnamese": "Đẹp mà, phải không... Tất cả những điều này.",
						"thai": "มันสวยงามไม่ใช่เหรอ... ทั้งหมดนี้",
						"hindi": "यह सुंदर है, है ना?... यह सब।"
					},
					"speaker": "hazel",
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"speaker": "hazel",
					"type": "direction"
				},
				{
					"content": {
						"korean": "이제... 거의 다 됐어요...",
						"english": "Now... it's almost done...",
						"japanese": "もう…ほとんど終わったわ…",
						"chinese": "现在……差不多完成了……",
						"french": "Maintenant... c'est presque fini...",
						"spanish": "Ya... casi está listo...",
						"vietnamese": "Giờ thì... gần xong rồi...",
						"thai": "ตอนนี้... ใกล้จะเสร็จแล้ว...",
						"hindi": "अब... लगभग हो गया है..."
					},
					"speaker": "hazel",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "헤이즐! 정신 차려! 넌 이용당하고 있어!",
						"english": "Hazel! Snap out of it! You're being used!",
						"japanese": "ヘイゼル！しっかりして！君は利用されているんだ！",
						"chinese": "黑泽尔！清醒点！你被利用了！",
						"french": "Hazel ! Reprends-toi ! Tu es utilisée !",
						"spanish": "¡Hazel! ¡Reacciona! ¡Te están usando!",
						"vietnamese": "Hazel! Tỉnh lại đi! Cậu đang bị lợi dụng đấy!",
						"thai": "เฮเซล! ตั้งสติหน่อย! เจ้ากำลังถูกหลอกใช้!",
						"hindi": "हेज़ल! होश में आओ! तुम्हारा इस्तेमाल किया जा रहा है!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "헤이즐의 몸은 투명해질 듯 창백했다. 그녀의 미소는 너무나 공허했다.",
						"english": "Hazel's body was pale, almost translucent. Her smile was utterly vacant.",
						"japanese": "ヘイゼルの体は透き通るように青白かった。彼女の笑顔はあまりにも空虚だった。",
						"chinese": "海泽尔的身体苍白得几乎透明。她的笑容是如此空洞。",
						"french": "Le corps de Hazel était pâle, presque translucide. Son sourire était d'une vacuité absolue.",
						"spanish": "El cuerpo de Hazel estaba pálido, casi translúcido. Su sonrisa era completamente vacía.",
						"vietnamese": "Cơ thể của Hazel nhợt nhạt, gần như trong suốt. Nụ cười của cô ấy trống rỗng đến đáng sợ.",
						"thai": "ร่างกายของเฮเซลซีดเผือดจนเกือบโปร่งแสง รอยยิ้มของเธอนั้นว่างเปล่าอย่างที่สุด",
						"hindi": "हेज़ल का शरीर पीला पड़ गया था, मानो पारदर्शी हो। उसकी मुस्कान बेहद खोखली थी।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "곧... 모두가 평화로워질 거예요... 영원한 치유...",
						"english": "Soon... everyone will find peace... eternal healing...",
						"japanese": "やがて…皆が平和になるでしょう…永遠の癒し…",
						"chinese": "很快...所有人都会平静下来...永恒的治愈...",
						"french": "Bientôt... tout le monde trouvera la paix... une guérison éternelle...",
						"spanish": "Pronto... todos encontrarán la paz... una curación eterna...",
						"vietnamese": "Chẳng mấy chốc... mọi người sẽ bình yên... chữa lành vĩnh cửu...",
						"thai": "อีกไม่นาน... ทุกคนจะสงบสุข... การเยียวยาชั่วนิรันดร์...",
						"hindi": "जल्द ही... हर कोई शांति पाएगा... अनंत उपचार..."
					},
					"speaker": "hazel",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이 괴물을 막아야 해. 더 이상 희생자는 안 돼.",
						"english": "We must stop this monster. No more sacrifices.",
						"japanese": "この怪物を止めなければ。これ以上の犠牲者は出せない。",
						"chinese": "我们必须阻止这个怪物。不能再有牺牲者了。",
						"french": "Nous devons arrêter ce monstre. Plus de sacrifices.",
						"spanish": "Debemos detener a este monstruo. No más sacrificios.",
						"vietnamese": "Chúng ta phải ngăn chặn con quái vật này. Không thể có thêm nạn nhân nào nữa.",
						"thai": "เราต้องหยุดสัตว์ประหลาดตัวนี้ ไม่มีเหยื่ออีกแล้ว",
						"hindi": "हमें इस राक्षस को रोकना होगा। और कोई बलिदान नहीं।"
					},
					"speaker": "character_3",
					"type": "speech",
					"emotion": "angry"
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "숲의 심장부. 거대한 그림자가 헤이즐을 감싸고 있었다.",
						"english": "Deep in the forest's heart. A vast shadow enveloped Hazel.",
						"japanese": "森の心臓部。巨大な影がヘイゼルを包み込んでいた。",
						"chinese": "森林深处。一个巨大的影子笼罩着黑兹尔。",
						"french": "Au cœur de la forêt. Une ombre immense enveloppait Hazel.",
						"spanish": "En el corazón del bosque. Una sombra inmensa envolvía a Hazel.",
						"vietnamese": "Sâu trong trái tim rừng. Một bóng tối khổng lồ bao trùm Hazel.",
						"thai": "ลึกเข้าไปในใจกลางป่า เงาขนาดมหึมาปกคลุมเฮเซล",
						"hindi": "जंगल के हृदय में। एक विशाल छाया ने हेज़ल को घेर रखा था।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "아, 나의 사랑스러운 제물. 이제 네 역할은 끝났다.",
						"english": "Ah, my lovely sacrifice. Your role is now complete.",
						"japanese": "ああ、私の愛しい生贄よ。お前の役割は終わった。",
						"chinese": "啊，我可爱的祭品。你的作用已经完成了。",
						"french": "Ah, mon charmant sacrifice. Ton rôle est maintenant terminé.",
						"spanish": "Ah, mi adorable sacrificio. Tu papel ha terminado.",
						"vietnamese": "À, vật hiến tế đáng yêu của ta. Vai trò của ngươi giờ đã kết thúc.",
						"thai": "อ่าาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาаาาาาาาาาาาาาาาาาาาาาาาาาาาааาาาาาาาาาาาาาาาาาาาาาาาааааааาาาаааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааาาаааааааาааааааааааааааааาาаааааааааาааааааาаааааааааааааааาааааааааааааааааааааааааааааааааาาาาаาааาาааааааааааааааааааааааааааааааааааааааааааааааาาาาаааааааาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาаาาาาาาาาาาาาาาาาาาาาาาาาาาаาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาаาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาаาาаาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาааาаааааาาาาาаาาาาาาาาาаааааาาаааааาาาาาаааааааааааааааааааааааааааааааาааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааาааааааааааааааааааааааааааааааааааааааааааааааааааาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาааาааมาAh, my lovely sacrifice. Your role is now complete. Now let her go, you monster!",
						"hindi": "आह, मेरी प्यारी बलि। तुम्हारी भूमिका अब समाप्त हो गई है। हे राक्षस, अब हेज़ल को छोड़ दो!"
					}
				},
				{
					"content": {
						"korean": "헤이즐을 놓아줘, 괴물!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "내 치유는 완벽하다. 모든 생명은 나에게 돌아올 뿐."
					}
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "너희도 곧 깨닫겠지. 진정한 평화의 의미를!"
					}
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "'random_boss'의 힘이 숲을 뒤흔들었다.",
						"english": "The power of 'random_boss' shook the forest.",
						"japanese": "「'random_boss'の力が森を揺るがした。」",
						"chinese": "「“random_boss”的力量震撼了森林。」",
						"french": "« Le pouvoir de 'random_boss' a secoué la forêt. »",
						"spanish": "« El poder de 'random_boss' sacudió el bosque. »",
						"vietnamese": "« Sức mạnh của 'random_boss' đã rung chuyển khu rừng. »",
						"thai": "« พลังของ 'random_boss' เขย่าป่าทั้งผืน »",
						"hindi": "« 'रैंडम_बॉस' की शक्ति ने जंगल को हिला दिया। »"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "어리석은 자들... 감히 내 치유를 거부하려 했는가!",
						"english": "Fools... You dared to refuse my healing!",
						"japanese": "「愚か者どもめ…よくも私の癒しを拒もうとしたな！」",
						"chinese": "「愚蠢的家伙们... 竟敢拒绝我的治愈！」",
						"french": "« Imbéciles... Vous avez osé refuser ma guérison ! »",
						"spanish": "« ¡Necios... Osasteis rechazar mi sanación! »",
						"vietnamese": "« Những kẻ ngu ngốc... Dám từ chối sự chữa lành của ta! »",
						"thai": "« พวกโง่... กล้าปฏิเสธการเยียวยาของข้าอย่างนั้นหรือ! »",
						"hindi": "« मूर्खों... तुमने मेरी चिकित्सा को ठुकराने की हिम्मत की! »"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "크윽... 다시 올 거야... 널 막을 거야!",
						"english": "Ugh... I'll be back... I'll stop you!",
						"japanese": "「くっ…また戻ってくる…お前を止める！」",
						"chinese": "「呃... 我会再回来... 我会阻止你！」",
						"french": "« Argh... Je reviendrai... Je t'arrêterai ! »",
						"spanish": "« ¡Argh... Volveré... Te detendré! »",
						"vietnamese": "« Khụ... Ta sẽ trở lại... Ta sẽ ngăn ngươi! »",
						"thai": "« อึก... ข้าจะกลับมา... ข้าจะหยุดเจ้าให้ได้! »",
						"hindi": "« उफ़... मैं वापस आऊँगा... तुम्हें रोकूँगा! »"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "다음에 만날 땐... 너희도 나의 일부가 될 테지.",
						"english": "Next time we meet... you'll be part of me.",
						"japanese": "「次に会う時は…お前たちも私の¹部となるだろう。」",
						"chinese": "「下次见面时... 你们也将成为我的一部分。」",
						"french": "« La prochaine fois... vous ferez partie de moi. »",
						"spanish": "« La próxima vez que nos encontremos... vosotros también seréis parte de mí. »",
						"vietnamese": "« Lần tới gặp nhau... các ngươi cũng sẽ trở thành một phần của ta. »",
						"thai": "« คราวหน้าเมื่อเราพบกัน... เจ้าจะเป็นส่วนหนึ่งของข้า »",
						"hindi": "« अगली बार जब हम मिलेंगे... तुम भी मेरे ही अंश बन जाओगे। »"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "무지갯빛 균류가 시들며 'random_boss'의 그림자가 흩어졌다."
					},
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "크크크... 이것은 끝이 아니다... 너희도... 곧 나처럼 될 테니..."
					},
					"emotion": "base"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "hazel",
					"spot": [
						4,
						2
					]
				},
				{
					"speaker": "hazel",
					"type": "speech",
					"content": {
						"korean": "...나... 나는... 뭐였지?"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "헤이즐! 괜찮아?",
						"english": "Hazel! Are you okay?",
						"japanese": "「ヘイゼル！大丈夫か？」",
						"chinese": "「海泽尔！你还好吗？」",
						"french": "« Hazel ! Ça va ? »",
						"spanish": "« ¡Hazel! ¿Estás bien? »",
						"vietnamese": "« Hazel! Cậu ổn không? »",
						"thai": "« เฮเซล! เธอไม่เป็นไรนะ? »",
						"hindi": "« हेज़ल! क्या तुम ठीक हो? »"
					},
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "헤이즐의 생명력이 희미해졌다. 숲은 한동안 침묵했다. 그 침묵은 치유였을까, 절망이었을까.",
						"english": "Hazel's life force faded. The forest fell silent. Was it healing, or despair?",
						"japanese": "「ヘイゼルの生命力が薄れた。森はしばし沈黙した。その沈黙は癒しか、それとも絶望だったのか。」",
						"chinese": "「海泽尔的生命力消逝了。森林沉默了一阵。那沉默是治愈，还是绝望？」",
						"french": "« La force vitale de Hazel s'est estompée. La forêt resta silencieuse. Était-ce la guérison, ou le désespoir ? »",
						"spanish": "« La fuerza vital de Hazel se desvaneció. El bosque guardó silencio. ¿Fue curación o desesperación? »",
						"vietnamese": "« Sinh lực của Hazel suy yếu. Rừng im lìm một lúc. Sự im lặng đó là chữa lành, hay tuyệt vọng? »",
						"thai": "« พลังชีวิตของเฮเซลจางหายไป ป่าเงียบงันอยู่ครู่หนึ่ง ความเงียบงันนั้นคือการเยียวยา หรือความสิ้นหวังกันแน่? »",
						"hindi": "« हेज़ल की जीवन शक्ति क्षीण हो गई। जंगल कुछ देर शांत रहा। क्या वह शांति उपचार थी, या निराशा? »"
					},
					"emotion": "base"
				}
			]
		}
	]
} as const;
