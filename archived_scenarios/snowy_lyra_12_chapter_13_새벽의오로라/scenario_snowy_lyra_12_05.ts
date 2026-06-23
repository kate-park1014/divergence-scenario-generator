export const scenario_snowy_lyra_12_05 = {
	"scenario_id": "snowy_lyra_12_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "snowy",
	"actors": {
		"anuk": {
			"id": "mon_8736797d-779a-4748-8633-d15c1eaf9be7",
			"name": {
				"korean": "아눅",
				"english": "Anuk",
				"japanese": "アヌーク",
				"chinese": "阿努克",
				"french": "Anuk",
				"spanish": "Anuk",
				"vietnamese": "Anuk",
				"thai": "อนุก",
				"hindi": "अनुक"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/19485274-e873-45c8-5043-f4ff65aa2a00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/9a79ecfd-8cc6-4461-3790-763822522500/public"
		}
	},
	"boss": {
		"pool_id": "pool_Auroral_Lyra_V1"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 빙하가 눈앞에 나타났다. 오로라의 빛이 그 위에서 일렁인다.",
						"english": "A colossal glacier appeared before us. Aurora's light shimmered upon it.",
						"japanese": "巨大な氷河が目の前に現れた。オーロラの光がその上で揺らめく。",
						"chinese": "一座巨大的冰川出现在眼前。极光在它上方闪烁。",
						"french": "Un glacier colossal apparut devant nous. La lumière de l'aurore y scintillait.",
						"spanish": "Un glaciar colosal apareció ante nosotros. La luz de la aurora brillaba sobre él.",
						"vietnamese": "Một sông băng khổng lồ hiện ra trước mắt chúng ta. Ánh sáng Cực Quang lung linh trên đó.",
						"thai": "ธารน้ำแข็งขนาดมหึมาปรากฏขึ้นตรงหน้า แสงของออโรร่าส่องประกายระยิบระยับอยู่เหนือมัน",
						"hindi": "हमारे सामने एक विशाल ग्लेशियर प्रकट हुआ। उस पर ऑरोरा की रोशनी झिलमिला रही थी।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "여기가 오로라의 심장부…?",
						"english": "Is this the heart of the Aurora...?",
						"japanese": "「ここがオーロラの心臓部…？」",
						"chinese": "“这里是极光的心脏……？”",
						"french": "« C'est le cœur de l'Aurore...? »",
						"spanish": "¿Es este el corazón de la Aurora...?",
						"vietnamese": "Đây là trái tim của Cực quang...?",
						"thai": "นี่คือใจกลางของออโรรา...?",
						"hindi": "क्या यह ऑरोरा का दिल है...?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"spot": [
						4,
						3
					],
					"type": "direction",
					"speaker": "anuk",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"speaker": "anuk",
					"type": "speech",
					"content": {
						"korean": "뭔가… 이상해. 빛이 일렁이는 게 아니라… 부서지고 있어.",
						"english": "Something's... off. The light isn't flickering... it's breaking apart.",
						"japanese": "「何か…おかしい。光が揺らめいているのではなく…砕けている。」",
						"chinese": "“有些……不对劲。光不是在闪烁……而是在破碎。”",
						"french": "« Quelque chose cloche… La lumière ne scintille pas… elle se brise. »",
						"spanish": "Algo... no anda bien. La luz no parpadea... se está rompiendo.",
						"vietnamese": "Có gì đó... lạ. Ánh sáng không phải đang lung linh... mà là đang vỡ vụn.",
						"thai": "บางอย่าง...ผิดปกติ แสงไม่ได้ริบหรี่...แต่มันกำลังแตกสลาย",
						"hindi": "कुछ... अजीब है। रोशनी टिमटिमा नहीं रही है... बल्कि टूट रही है।"
					}
				},
				{
					"content": {
						"korean": "부서진다고?",
						"english": "Breaking apart?",
						"japanese": "「砕けるって？」",
						"chinese": "“破碎？”",
						"french": "« Se briser ? »",
						"spanish": "¿Rompiéndose?",
						"vietnamese": "Vỡ vụn sao?",
						"thai": "แตกสลายงั้นเหรอ?",
						"hindi": "टूट रहा है?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "anuk",
					"content": {
						"korean": "그래. 진실이 왜곡되고 있어.",
						"english": "Yes. The truth is being twisted.",
						"japanese": "「ええ。真実が歪められている。」",
						"chinese": "“是的。真相正在被扭曲。”",
						"french": "« Oui. La vérité est déformée. »",
						"spanish": "Sí. La verdad está siendo distorsionada.",
						"vietnamese": "Phải. Sự thật đang bị bóp méo.",
						"thai": "ใช่ ความจริงกำลังถูกบิดเบือน",
						"hindi": "हाँ। सच्चाई को तोड़ा-मरोड़ा जा रहा है।"
					}
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "빙하 속에서 거대한 함선의 잔해가 모습을 드러냈다. 오래된 문명의 각인이 희미하게 빛난다.",
						"english": "Within the glacier, the remains of a colossal ship emerged. Ancient civilization's carvings glow faintly.",
						"japanese": "「氷河の中から巨大な艦船の残骸が姿を現した。古い文明の刻印がかすかに光る。」",
						"chinese": "“在冰川中，一艘巨型船只的残骸显露出来。古老文明的印记微弱地闪烁着。”",
						"french": "« Dans le glacier, les vestiges d'un vaisseau colossal sont apparus. Les gravures d'une civilisation ancienne brillent faiblement. »",
						"spanish": "Dentro del glaciar, los restos de una nave colosal emergieron. Los grabados de una civilización antigua brillan débilmente.",
						"vietnamese": "Trong sông băng, tàn tích của một con tàu khổng lồ hiện ra. Các bản khắc của nền văn minh cổ đại mờ nhạt phát sáng.",
						"thai": "ภายในธารน้ำแข็ง ซากเรือขนาดมหึมาได้ปรากฏขึ้น รอยสลักของอารยธรรมโบราณเรืองแสงจางๆ",
						"hindi": "ग्लेशियर के भीतर, एक विशाल जहाज के अवशेष सामने आए। प्राचीन सभ्यता की नक्काशी हल्की चमकती है।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "이건… 바이킹 함선? 어떻게 여기에?",
						"english": "This is... a Viking ship? How did it get here?",
						"japanese": "「これは…バイキングの船？どうしてここに？」",
						"chinese": "“这……是维京海盗船？怎么会在这里？”",
						"french": "« C'est... un vaisseau viking ? Comment est-il arrivé ici ? »",
						"spanish": "¿Esto es... un barco vikingo? ¿Cómo llegó aquí?",
						"vietnamese": "Đây là... tàu Viking? Làm sao nó lại ở đây?",
						"thai": "นี่มัน...เรือไวกิ้ง? มาอยู่ที่นี่ได้ยังไง?",
						"hindi": "यह... एक वाइकिंग जहाज है? यह यहाँ कैसे आया?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "anuk",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"content": {
						"korean": "오랜 맹세가 이 안에 갇혀있었군. 느껴져… 이 슬픔이.",
						"english": "An ancient vow was trapped within this. I feel it... this sorrow.",
						"japanese": "「古き誓いがこの中に閉じ込められていたのか。感じる…この悲しみが。」",
						"chinese": "“古老的誓言被困在这里。我感受到了……这份悲伤。”",
						"french": "« Un ancien serment était piégé ici. Je le sens… cette tristesse. »",
						"spanish": "Un antiguo juramento estaba atrapado aquí. Lo siento... esta tristeza.",
						"vietnamese": "Một lời thề cổ xưa đã bị mắc kẹt bên trong này. Ta cảm nhận được... nỗi buồn này.",
						"thai": "คำสาบานเก่าแก่ถูกกักขังอยู่ข้างในนี้ สัมผัสได้...ความเศร้าโศกนี้",
						"hindi": "एक प्राचीन शपथ इसमें फँसी हुई थी। मैं इसे महसूस करता हूँ... इस दुख को।"
					},
					"speaker": "anuk",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "맹세?",
						"english": "A vow?",
						"japanese": "「誓い？」",
						"chinese": "“誓言？”",
						"french": "« Un serment ? »",
						"spanish": "¿Un juramento?",
						"vietnamese": "Lời thề?",
						"thai": "คำสาบาน?",
						"hindi": "एक शपथ?"
					}
				},
				{
					"content": {
						"korean": "고향을 지키겠다는… 지킬 수 없었던 약속의 대가.",
						"english": "To protect their homeland... the price of a promise they couldn't keep.",
						"japanese": "「故郷を守るという…守れなかった約束の代償。」",
						"chinese": "“守护家园的……一个无法兑现的承诺的代价。”",
						"french": "« Protéger leur patrie... le prix d'une promesse qu'ils n'ont pu tenir. »",
						"spanish": "Proteger su patria... el precio de una promesa que no pudieron cumplir.",
						"vietnamese": "Để bảo vệ quê hương của họ... cái giá của một lời hứa mà họ không thể giữ.",
						"thai": "เพื่อปกป้องบ้านเกิดของพวกเขา...ราคาของคำมั่นสัญญาที่ไม่อาจรักษาได้",
						"hindi": "अपने वतन की रक्षा के लिए... एक ऐसे वादे की कीमत जिसे वे निभा नहीं सके।"
					},
					"speaker": "anuk",
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "오로라의 빛이 격렬하게 요동쳤다. 투명한 얼음 결정들이 부서져 내린다.",
						"english": "The Aurora's light pulsed violently. Transparent ice crystals shattered and fell.",
						"japanese": "「オーロラの光が激しく揺れ動いた。透明な氷の結晶が砕け散る。」",
						"chinese": "“极光的光芒剧烈地波动着。透明的冰晶破碎坠落。”",
						"french": "« La lumière de l'Aurore pulsa violemment. Des cristaux de glace transparents se brisèrent et tombèrent. »",
						"spanish": "La luz de la Aurora pulsó violentamente. Cristales de hielo transparentes se hicieron añicos y cayeron.",
						"vietnamese": "Ánh sáng của Cực quang rung động dữ dội. Các tinh thể băng trong suốt vỡ tan và rơi xuống.",
						"thai": "แสงของออโรราสั่นสะเทือนอย่างรุนแรง ผลึกน้ำแข็งโปร่งใสแตกสลายร่วงหล่นลงมา",
						"hindi": "ऑरोरा की रोशनी तेज़ी से धड़क उठी। पारदर्शी बर्फ के क्रिस्टल टूटकर गिर गए।"
					}
				},
				{
					"action": "enter",
					"speaker": "anuk",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						3
					]
				},
				{
					"emotion": "base",
					"speaker": "anuk",
					"type": "speech",
					"content": {
						"korean": "드디어… 본래의 모습이 드러나는군.",
						"english": "Finally… its true form is revealed.",
						"japanese": "ついに… 本来の姿を現したな。",
						"chinese": "终于… 原形毕露了。",
						"french": "Enfin… sa vraie forme se révèle.",
						"spanish": "Por fin… su verdadera forma se revela.",
						"vietnamese": "Cuối cùng… hình dạng thật đã lộ diện.",
						"thai": "ในที่สุด… ร่างที่แท้จริงก็เผยออกมา",
						"hindi": "आखिरकार… इसका असली रूप सामने आ गया।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "오로라의 모습이… 사라지고 있어.",
						"english": "The aurora… is fading.",
						"japanese": "オーロラの姿が… 消えていく。",
						"chinese": "极光… 正在消失。",
						"french": "L'aurore… est en train de disparaître.",
						"spanish": "La aurora… está desvaneciéndose.",
						"vietnamese": "Hình bóng cực quang… đang biến mất.",
						"thai": "แสงเหนือ… กำลังเลือนหายไป",
						"hindi": "ओरोरा का रूप… गायब हो रहा है।"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "…차가워… 모두… 어디에…?",
						"english": "…So cold… Everyone… where are they…?",
						"japanese": "…冷たい… みんな… どこに…？",
						"chinese": "…好冷… 大家… 都在哪…？",
						"french": "…C'est froid… Tout le monde… où sont-ils… ?",
						"spanish": "¿Qué frío… Todos… dónde están?",
						"vietnamese": "…Lạnh quá… Mọi người… đâu rồi…?",
						"thai": "…หนาวจัง… ทุกคน… อยู่ที่ไหน…?",
						"hindi": "…कितना ठंडा… सब… कहाँ हैं…?"
					}
				},
				{
					"content": {
						"korean": "…이것이 진실. 슬픔에 묶여 영원히 방황하는 영혼.",
						"english": "…This is the truth. A soul bound by sorrow, wandering forever.",
						"japanese": "…これが真実。悲しみに囚われ、永遠に彷徨う魂。",
						"chinese": "…这就是真相。被悲伤束缚，永远彷徨的灵魂。",
						"french": "…Voici la vérité. Une âme liée par la tristesse, errant éternellement.",
						"spanish": "…Esta es la verdad. Un alma atada a la tristeza, vagando eternamente.",
						"vietnamese": "…Đây là sự thật. Một linh hồn bị trói buộc bởi nỗi buồn, mãi mãi lang thang.",
						"thai": "…นี่คือความจริง วิญญาณที่ถูกพันธนาการด้วยความโศกเศร้า ร่อนเร่ไปชั่วนิรันดร์",
						"hindi": "…यही सच है। दुख से बंधी, हमेशा भटकती आत्मा।"
					},
					"speaker": "anuk",
					"type": "speech",
					"emotion": "sad"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "얼어붙은 소녀의 모습이 환영처럼 아른거렸다. 애처로운 울음소리가 귓가를 맴돈다.",
						"english": "The frozen girl's figure shimmered like a mirage. A pathetic cry echoed in my ears.",
						"japanese": "凍てついた少女の姿が幻のように揺らめいた。哀れなすすり泣きが耳元をよぎる。",
						"chinese": "冰冻少女的身影如幻影般闪烁。可怜的哭声在耳边萦绕。",
						"french": "La silhouette de la jeune fille gelée vacillait comme une illusion. Un cri plaintif résonnait à mes oreilles.",
						"spanish": "La figura de la niña congelada brillaba como una aparición. Un llanto lastimero resonaba en mis oídos.",
						"vietnamese": "Bóng hình cô gái đóng băng chập chờn như ảo ảnh. Tiếng khóc thảm thiết văng vẳng bên tai.",
						"thai": "ร่างของเด็กสาวที่แข็งเป็นน้ำแข็งปรากฏขึ้นเลือนลางราวกับภาพหลอน เสียงร้องไห้อันน่าเวทนาดังแว่วอยู่ในหู",
						"hindi": "जमी हुई लड़की की आकृति एक भ्रम की तरह झिलमिला रही थी। एक दयनीय रोने की आवाज़ कानों में गूंज रही थी।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "저건… 정말 리라라고?",
						"english": "Is that… truly Lyra?",
						"japanese": "あれは… 本当にリラなのか？",
						"chinese": "那个… 真的是丽拉吗？",
						"french": "Est-ce que c'est… vraiment Lyra ?",
						"spanish": "¿Esa… es realmente Lyra?",
						"vietnamese": "Kia… thật sự là Lyra sao?",
						"thai": "นั่น… คือไลร่าจริงๆ เหรอ?",
						"hindi": "क्या वह… सच में लाइरा है?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"spot": [
						2,
						3
					],
					"type": "direction",
					"speaker": "anuk",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "anuk",
					"content": {
						"korean": "그래. 진실을 왜곡하고 우리를 이끌었던… 그녀의 진짜 모습.",
						"english": "Yes. Her true form… who distorted the truth and led us.",
						"japanese": "ああ。真実を歪め、私たちを導いた… 彼女の本当の姿だ。",
						"chinese": "是的。她扭曲了真相，引导我们… 这就是她的真面目。",
						"french": "Oui. Sa vraie forme… celle qui a déformé la vérité et nous a guidés.",
						"spanish": "Sí. Su verdadera forma… la que distorsionó la verdad y nos guio.",
						"vietnamese": "Phải. Hình dạng thật của cô ta… kẻ đã bóp méo sự thật và dẫn dắt chúng ta.",
						"thai": "ใช่. ร่างที่แท้จริงของเธอ… ผู้บิดเบือนความจริงและนำทางเรา",
						"hindi": "हाँ। उसका असली रूप… जिसने सच को तोड़-मरोड़ कर पेश किया और हमें भटकाया।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "anuk",
					"content": {
						"korean": "이 비극을… 끝내줘야 해. 그녀의 맹세가… 더 이상 고통이 되지 않도록.",
						"english": "We must… end this tragedy. So her vow… no longer causes suffering.",
						"japanese": "この悲劇を… 終わらせなければ。彼女の誓いが… もう苦しみとならないように。",
						"chinese": "我们必须… 结束这场悲剧。让她的誓言… 不再是痛苦。",
						"french": "Nous devons… mettre fin à cette tragédie. Pour que son serment… ne soit plus une souffrance.",
						"spanish": "Debemos… poner fin a esta tragedia. Para que su juramento… ya no sea una tortura.",
						"vietnamese": "Chúng ta phải… chấm dứt bi kịch này. Để lời thề của cô ta… không còn là nỗi đau nữa.",
						"thai": "เราต้อง… ยุติโศกนาฏกรรมนี้ เพื่อไม่ให้คำสาบานของเธอ… กลายเป็นความทุกข์ทรมานอีกต่อไป",
						"hindi": "हमें… इस त्रासदी को समाप्त करना होगा। ताकि उसकी शपथ… अब और पीड़ा न बने।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "어떻게…",
						"english": "How…?",
						"japanese": "どうやって…",
						"chinese": "怎么…？",
						"french": "Comment… ?",
						"spanish": "¿Cómo…?",
						"vietnamese": "Làm sao…?",
						"thai": "ทำยังไง…?",
						"hindi": "कैसे…?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "anuk",
					"type": "speech",
					"content": {
						"korean": "그녀를 안식으로 돌려보내는 것. 그것만이 유일한 방법이다.",
						"english": "To return her to peace. That is the only way.",
						"japanese": "彼女を安息へと還すこと。それだけが唯一の方法だ。",
						"chinese": "让她安息。那是唯一的办法。",
						"french": "La renvoyer au repos. C'est le seul moyen.",
						"spanish": "Devolverla a la paz. Ese es el único camino.",
						"vietnamese": "Đưa cô ta về với an nghỉ. Đó là cách duy nhất.",
						"thai": "ส่งเธอกลับไปสู่ความสงบ นั่นเป็นทางเดียว",
						"hindi": "उसे शांति में लौटाना। वही एकमात्र तरीका है।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "빙하의 심장이 다시 얼어붙었다. 오로라의 빛이 탐험대를 집어삼켰다.",
						"english": "The heart of the glacier froze again. The light of the aurora swallowed the expedition team.",
						"japanese": "氷河の心臓が再び凍りついた。オーロラの光が探検隊を飲み込んだ。",
						"chinese": "冰川之心再次冻结。极光吞噬了探险队。",
						"french": "Le cœur du glacier se figea de nouveau. La lumière de l'aurore engloutit l'équipe d'expédition.",
						"spanish": "El corazón del glaciar se congeló de nuevo. La luz de la aurora envolvió al equipo de expedición.",
						"vietnamese": "Trái tim của sông băng lại đóng băng. Ánh sáng cực quang nuốt chửng đoàn thám hiểm.",
						"thai": "หัวใจของธารน้ำแข็งกลับมาเยือกแข็งอีกครั้ง แสงออโรร่ากลืนกินคณะสำรวจ",
						"hindi": "ग्लेशियर का दिल फिर से जम गया। अरोरा के प्रकाश ने अभियान दल को निगल लिया।"
					},
					"emotion": "base"
				},
				{
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "…영원히… 함께… 고향으로….",
						"english": "...Forever... together... to home...",
						"japanese": "…永遠に…共に…故郷へ…。",
						"chinese": "...永远...一起...回家...",
						"french": "...Pour toujours... ensemble... vers la patrie...",
						"spanish": "...Para siempre... juntos... a casa...",
						"vietnamese": "...Mãi mãi... bên nhau... về quê hương...",
						"thai": "...ตลอดไป...ด้วยกัน...กลับบ้าน...",
						"hindi": "...हमेशा के लिए... साथ... घर को..."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "아니… 포기 안 해!",
						"english": "No... I won't give up!",
						"japanese": "いや…諦めない！",
						"chinese": "不…我不会放弃！",
						"french": "Non... je n'abandonnerai pas !",
						"spanish": "¡No... no me rendiré!",
						"vietnamese": "Không... tôi sẽ không bỏ cuộc!",
						"thai": "ไม่...ฉันไม่ยอมแพ้!",
						"hindi": "नहीं... मैं हार नहीं मानूंगा!"
					},
					"emotion": "angry"
				},
				{
					"spot": [
						4,
						3
					],
					"speaker": "anuk",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "이 맹세를… 끊어낼 거야!",
						"english": "I'll break... this vow!",
						"japanese": "この誓いを…断ち切る！",
						"chinese": "我将…打破这个誓言！",
						"french": "Je briserai... ce serment !",
						"spanish": "¡Romperé... este juramento!",
						"vietnamese": "Tôi sẽ phá bỏ... lời thề này!",
						"thai": "ฉันจะทำลาย...คำสาบานนี้!",
						"hindi": "मैं इस शपथ को... तोड़ दूंगा!"
					},
					"speaker": "anuk",
					"type": "speech",
					"emotion": "angry"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "오로라가 흩어지고, 빙하가 녹아내렸다. 차가운 얼음 속에 갇혔던 소녀의 그림자가 희미해졌다.",
						"english": "The aurora scattered, and the glacier melted. The shadow of the girl, trapped in the cold ice, faded.",
						"japanese": "オーロラが散り、氷河が溶けた。冷たい氷に囚われていた少女の影が薄れていった。",
						"chinese": "极光消散，冰川融化。被困在冰冷寒冰中的少女身影渐渐模糊。",
						"french": "L'aurore se dispersa, et le glacier fondit. L'ombre de la jeune fille, piégée dans la glace froide, s'estompa.",
						"spanish": "La aurora se dispersó y el glaciar se derritió. La sombra de la chica, atrapada en el hielo frío, se desvaneció.",
						"vietnamese": "Cực quang tan biến, băng hà tan chảy. Bóng hình cô gái bị giam cầm trong băng lạnh dần mờ đi.",
						"thai": "แสงเหนือสลายไป, ธารน้ำแข็งละลาย. เงาของเด็กสาวที่ถูกกักขังในน้ำแข็งเย็นยะเยือกค่อยๆ จางหายไป.",
						"hindi": "अरोरा बिखर गई, और ग्लेशियर पिघल गया। ठंडी बर्फ में फंसी लड़की की परछाई फीकी पड़ गई।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "끝난 건가…?",
						"english": "Is it... over?",
						"japanese": "終わったのか…？",
						"chinese": "结束了吗……？",
						"french": "C'est... fini ?",
						"spanish": "¿Se acabó...?",
						"vietnamese": "...Kết thúc rồi sao...?",
						"thai": "...จบแล้วเหรอ...?",
						"hindi": "...क्या यह खत्म हो गया...?"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "…춥지 않아… 모두가… 기다려… 고향으로… 돌아가자….",
						"english": "...It's not cold... Everyone... is waiting... Let's go back... home....",
						"japanese": "…寒くない…みんなが…待ってる…故郷へ…帰ろう…。",
						"chinese": "……不冷了……大家……在等我……回故乡吧……",
						"french": "...Il ne fait pas froid... Tout le monde... attend... Rentrons... à la maison....",
						"spanish": "...No hace frío... Todos... esperan... Volvamos... a casa....",
						"vietnamese": "...Không lạnh nữa... Mọi người... đang chờ... Về quê hương thôi....",
						"thai": "...ไม่หนาวแล้ว... ทุกคน... กำลังรอ... กลับบ้านเกิดกันเถอะ....",
						"hindi": "...ठंड नहीं लग रही... सब... इंतजार कर रहे हैं... घर... चलें...."
					},
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "마지막 말을 끝으로, 소녀의 모습은 다시 무지갯빛 오로라가 되어 빙하 속으로 스며들었다.",
						"english": "With her last words, the girl's form once again became a rainbow-colored aurora and seeped into the glacier.",
						"japanese": "最後の一言を最後に、少女の姿は再び虹色のオーロラとなり、氷河の中へと溶け込んでいった。",
						"chinese": "随着最后的话语，少女的身影再次化作彩虹般的极光，渗入冰川之中。",
						"french": "Après ses derniers mots, la forme de la jeune fille redevint une aurore aux couleurs de l'arc-en-ciel et s'infiltra dans le glacier.",
						"spanish": "Con sus últimas palabras, la forma de la chica se convirtió de nuevo en una aurora de colores arcoíris y se filtró en el glaciar.",
						"vietnamese": "Dứt lời cuối cùng, hình dáng cô gái lại hóa thành cực quang rực rỡ sắc cầu vồng, rồi thấm vào băng hà.",
						"thai": "หลังจากคำพูดสุดท้าย, ร่างของเด็กสาวก็กลายเป็นแสงเหนือสีรุ้งอีกครั้งและซึมซับเข้าไปในธารน้ำแข็ง.",
						"hindi": "अपने अंतिम शब्दों के साथ, लड़की का रूप फिर से इंद्रधनुषी अरोरा बन गया और ग्लेशियर में समा गया।"
					},
					"emotion": "base"
				},
				{
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "anuk",
					"type": "direction"
				},
				{
					"emotion": "sad",
					"speaker": "anuk",
					"type": "speech",
					"content": {
						"korean": "이제… 편안하길.",
						"english": "May you rest in peace now.",
						"japanese": "今… 安らかに。",
						"chinese": "现在…安息吧。",
						"french": "Maintenant... repose en paix.",
						"spanish": "Ahora... descansa en paz.",
						"vietnamese": "Giờ đây... mong người an nghỉ.",
						"thai": "บัดนี้...ขอให้เจ้าสงบสุข",
						"hindi": "अब... शांति मिले।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "씁쓸하다… 이 모든 게.",
						"english": "Bitter... all of this.",
						"japanese": "苦い…この全てが。",
						"chinese": "苦涩…这一切。",
						"french": "Amer... tout cela.",
						"spanish": "Amargo... todo esto.",
						"vietnamese": "Đắng cay... tất cả những điều này.",
						"thai": "ขมขื่น...ทั้งหมดนี้",
						"hindi": "कड़वा है... यह सब।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "영원히 사라지지 않는 슬픈 메아리만이 차가운 얼음 동굴에 울려 퍼졌다.",
						"english": "Only a sad, undying echo resonated through the cold ice cave.",
						"japanese": "永遠に消えない悲しい残響だけが、冷たい氷の洞窟に響き渡った。",
						"chinese": "只有永不消逝的悲伤回声，在冰冷的洞穴中回荡。",
						"french": "Seul un triste écho éternel résonnait dans la froide grotte de glace.",
						"spanish": "Solo un triste eco imperecedero resonaba en la fría cueva de hielo.",
						"vietnamese": "Chỉ có tiếng vọng buồn bã, không bao giờ tan biến, vang vọng khắp hang băng lạnh lẽo.",
						"thai": "มีเพียงเสียงสะท้อนแห่งความเศร้าที่ไม่จางหาย ดังก้องอยู่ในถ้ำน้ำแข็งอันหนาวเหน็บ",
						"hindi": "केवल एक दुखद, अविनाशी प्रतिध्वनि ठंडी बर्फ की गुफा में गूंजती रही।"
					},
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "빙하의 심장부가 울렸다. 얼어붙은 소녀가 서서히 오로라의 형상을 띄었다.",
						"english": "The heart of the glacier pulsed. The frozen girl slowly took the form of an aurora.",
						"japanese": "氷河の心臓が鳴り響いた。凍った少女は徐々にオーロラの形を帯びていった。",
						"chinese": "冰川之心跳动。被冻结的少女渐渐化作极光。",
						"french": "Le cœur du glacier pulsa. La jeune fille gelée prit lentement la forme d'une aurore.",
						"spanish": "El corazón del glaciar latió. La chica congelada tomó lentamente la forma de una aurora.",
						"vietnamese": "Trái tim băng hà rung động. Cô gái đóng băng dần hóa thành cực quang.",
						"thai": "ใจกลางธารน้ำแข็งก้องกังวาน เด็กสาวผู้ถูกแช่แข็งค่อยๆ กลายเป็นรูปร่างของแสงเหนือ",
						"hindi": "ग्लेशियर का हृदय स्पंदित हुआ। जमी हुई लड़की धीरे-धीरे एक अरोरा का रूप लेने लगी।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "…고향… 찾을 수 없어…? 모두… 버렸어…?",
						"english": "...My home... I can't find it...? Everyone... abandoned me...?",
						"japanese": "…故郷…見つからないの…？みんな…捨てたの…？",
						"chinese": "……故乡……找不到……？大家都……抛弃了……？",
						"french": "...Ma maison... Je ne peux pas la trouver...? Tout le monde... m'a abandonnée...?",
						"spanish": "...Mi hogar... ¿No puedo encontrarlo...? ¿Todos... me abandonaron...?",
						"vietnamese": "...Quê hương... không tìm thấy...? Mọi người... bỏ rơi...?",
						"thai": "...บ้านเกิด... หาไม่เจอเหรอ...? ทุกคน... ทอดทิ้งไปแล้วเหรอ...?",
						"hindi": "...मेरा घर... नहीं मिल रहा...? सबने... छोड़ दिया...?"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "우리가… 돌려보내줄게. 너의 진짜 고향으로.",
						"english": "We'll... send you back. To your true home.",
						"japanese": "私たちが…返してあげる。あなたの本当の故郷へ。",
						"chinese": "我们……会送你回去。回到你真正的故乡。",
						"french": "Nous... te ramènerons. À ta vraie maison.",
						"spanish": "Nosotros... te devolveremos. A tu verdadero hogar.",
						"vietnamese": "Chúng ta... sẽ đưa em về. Về quê hương thật sự của em.",
						"thai": "เราจะ... ส่งเธอกลับไป. สู่บ้านเกิดที่แท้จริงของเธอ.",
						"hindi": "हम... तुम्हें वापस भेज देंगे। तुम्हारे सच्चे घर में।"
					},
					"emotion": "base"
				},
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"speaker": "anuk",
					"type": "direction",
					"action": "enter"
				},
				{
					"emotion": "sad",
					"speaker": "anuk",
					"type": "speech",
					"content": {
						"korean": "리라… 이제 그만. 편히 쉬어.",
						"english": "Lira... That's enough. Rest in peace.",
						"japanese": "リラ…もういい。安らかに休んで。",
						"chinese": "莉拉……够了。安息吧。",
						"french": "Lira... Ça suffit. Repose en paix.",
						"spanish": "Lira... Ya basta. Descansa en paz.",
						"vietnamese": "Lira... Đủ rồi. Hãy yên nghỉ.",
						"thai": "ลิล่า... พอได้แล้ว. พักผ่อนเถอะ.",
						"hindi": "लीरा... बस करो। आराम करो।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "…싫어…! 고향… 지켜야 해…! 맹세했어…!",
						"english": "...No...! I must protect my home...! I swore...!",
						"japanese": "…嫌だ…！故郷…守らなきゃ…！誓ったのに…！",
						"chinese": "……不要……！故乡……必须守护……！我发誓了……！",
						"french": "...Non...! Je dois protéger ma maison...! J'ai juré...!",
						"spanish": "...¡No quiero...! ¡Debo proteger mi hogar...! ¡Lo juré...!",
						"vietnamese": "...Không...! Phải bảo vệ quê hương...! Đã thề rồi...!",
						"thai": "...ไม่นะ...! ต้องปกป้องบ้านเกิด...! ฉันสาบานไว้แล้ว...!",
						"hindi": "...नहीं...! मुझे अपने घर की रक्षा करनी है...! मैंने कसम खाई थी...!"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "우리가… 그 맹세를 멈춰줄게.",
						"english": "We'll... stop that vow.",
						"japanese": "私たちが…その誓いを止めてあげる。",
						"chinese": "我们……会阻止那个誓言。",
						"french": "Nous... mettrons fin à ce serment.",
						"spanish": "Nosotros... detendremos ese juramento.",
						"vietnamese": "Chúng ta... sẽ ngăn lời thề đó.",
						"thai": "เราจะ... ยุติคำสาบานนั้น.",
						"hindi": "हम... उस प्रतिज्ञा को रोक देंगे।"
					},
					"type": "speech",
					"speaker": "anuk"
				}
			]
		}
	],
	"epilogue": {
		"korean": [
			"오로라의 절규는 멈췄다. 거대한 빙하는 이제 고요한 무덤이 되었다.",
			"리라의 맹세는 끝났다. 그것은 안식이었을까, 영원한 침묵이었을까.",
			"얼어붙은 땅에 남겨진 것은, 메아리처럼 울리는 슬픔과 씁쓸함.",
			"고향으로의 길은 다시 열렸지만, 우리는 무엇을 얻고 무엇을 잃었을까.",
			"차가운 바람만이 그 질문에 답하는 듯했다."
		],
		"english": [
			"Aurora's cry ceased. The massive glacier became a silent tomb.",
			"Lyra's vow ended. Was it rest, or eternal silence?",
			"Left on the frozen land: sorrow and bitterness, echoing.",
			"The path home reopened, but what did we gain, and what did we lose?",
			"Only the cold wind seemed to answer that question."
		],
		"japanese": [
			"オーロラの叫びは止んだ。巨大な氷河は今や静かな墓標となった。",
			"リラの誓いは終わった。それは安息だったのか、永遠の沈黙だったのか。",
			"凍てついた地に残されたのは、こだまのように響く悲しみと苦々しさ。",
			"故郷への道は再び開かれたが、私たちは何を得て、何を失ったのだろうか。",
			"冷たい風だけが、その問いに答えているようだった。"
		],
		"chinese": [
			"极光的哀嚎停止了。巨大的冰川如今已成为一座宁静的墓碑。",
			"莱拉的誓言结束了。那是安息，还是永恒的沉默？",
			"冰封大地上留下的，是回荡不绝的悲伤与苦涩。",
			"归乡之路再次开启，但我们得到了什么，又失去了什么？",
			"唯有凛冽的寒风，似乎在回答那个问题。"
		],
		"french": [
			"Le cri de l'aurore cessa. L'énorme glacier devint une tombe silencieuse.",
			"Le serment de Lyra prit fin. Était-ce le repos, ou un silence éternel ?",
			"Ce qui restait sur la terre gelée, c'était la tristesse et l'amertume, résonnant comme un écho.",
			"Le chemin du retour s'est rouvert, mais qu'avons-nous gagné et qu'avons-nous perdu ?",
			"Seul le vent froid semblait répondre à cette question."
		],
		"spanish": [
			"El grito de la aurora cesó. El enorme glaciar se convirtió en una tumba silenciosa.",
			"El juramento de Lyra terminó. ¿Fue un descanso, o un silencio eterno?",
			"Lo que quedó en la tierra helada fue tristeza y amargura, resonando como un eco.",
			"El camino a casa se reabrió, pero ¿qué ganamos y qué perdimos?",
			"Solo el viento frío parecía responder a esa pregunta."
		],
		"vietnamese": [
			"Tiếng kêu của Cực Quang đã ngừng. Sông băng khổng lồ giờ đây đã thành một nấm mồ tĩnh lặng.",
			"Lời thề của Lyra đã kết thúc. Đó là sự an nghỉ, hay sự im lặng vĩnh cửu?",
			"Những gì còn lại trên vùng đất băng giá, là nỗi buồn và sự cay đắng vang vọng như tiếng vang.",
			"Con đường về quê hương đã mở lại, nhưng chúng ta đã đạt được gì và mất gì?",
			"Chỉ có làn gió lạnh dường như trả lời câu hỏi đó."
		],
		"thai": [
			"เสียงกรีดร้องของออโรร่าหยุดลง ธารน้ำแข็งขนาดใหญ่กลายเป็นสุสานอันเงียบสงบ",
			"คำสาบานของไลร่าสิ้นสุดลงแล้ว มันคือการพักผ่อน หรือความเงียบงันชั่วนิรันดร์กันแน่",
			"สิ่งที่เหลืออยู่บนดินแดนที่เยือกแข็งคือความโศกเศร้าและความขมขื่นที่สะท้อนก้อง",
			"เส้นทางกลับบ้านเปิดออกอีกครั้ง แต่เราได้อะไร และเราสูญเสียอะไรไป?",
			"มีเพียงลมหนาวเท่านั้นที่ดูเหมือนจะตอบคำถามนั้น"
		],
		"hindi": [
			"ऑरोरा की चीख बंद हो गई। विशाल ग्लेशियर अब एक शांत कब्र बन गया था।",
			"लीरा की प्रतिज्ञा समाप्त हो गई। क्या यह आराम था, या शाश्वत मौन?",
			"जमी हुई धरती पर जो बचा था, वह गूँजता हुआ दुख और कड़वाहट थी।",
			"घर का रास्ता फिर से खुल गया, लेकिन हमने क्या पाया और क्या खोया?",
			"केवल ठंडी हवा ही उस प्रश्न का उत्तर दे रही थी।"
		]
	},
	"prologue": {
		"korean": [
			"오로라의 심장이 있는 곳. 모든 것이 얼어붙은 빙하의 끝에 도달했다.",
			"빛나던 환영이 흔들리고, 진실의 파편이 드러나기 시작했다.",
			"그 아름다운 빛 뒤에 숨겨진 것은 — 한 소녀의 영원한 절규.",
			"그리고 우리는, 잊혀진 약속의 무게를 마주해야 했다."
		],
		"english": [
			"Reached the glacial edge, where Aurora's heart beats, and all is frozen.",
			"The shimmering illusion wavered, and fragments of truth began to surface.",
			"Hidden behind that beautiful light—a maiden's eternal cry.",
			"And we had to face the weight of a forgotten promise."
		],
		"japanese": [
			"オーロラの心臓がある場所。すべてが凍りついた氷河の果てに到達した。",
			"輝く幻影が揺らぎ、真実の破片が露わになり始めた。",
			"その美しい光の裏に隠されていたもの—ある少女の永遠の叫び。",
			"そして私たちは、忘れられた約束の重さを対面しなければならなかった。"
		],
		"chinese": [
			"抵达了冰川尽头，那是极光之心所在，万物皆已冻结。",
			"闪耀的幻影开始摇曳，真相的碎片逐渐显现。",
			"那美丽光芒背后隐藏的，是一个少女永恒的哀嚎。",
			"而我们，不得不面对被遗忘的承诺之重。"
		],
		"french": [
			"Atteint le bout du glacier, là où réside le cœur de l'aurore, tout est gelé.",
			"L'illusion scintillante vacilla, et des fragments de vérité commencèrent à émerger.",
			"Ce qui se cachait derrière cette belle lumière — le cri éternel d'une jeune fille.",
			"Et nous avons dû faire face au poids d'une promesse oubliée."
		],
		"spanish": [
			"Alcanzado el fin del glaciar, donde reside el corazón de la aurora, todo está congelado.",
			"La ilusión brillante vaciló, y fragmentos de verdad comenzaron a emerger.",
			"Lo que se ocultaba tras esa hermosa luz — el eterno grito de una doncella.",
			"Y tuvimos que enfrentar el peso de una promesa olvidada."
		],
		"vietnamese": [
			"Đã đến tận cùng sông băng, nơi trái tim Cực Quang ngự trị, mọi thứ đều đóng băng.",
			"Ảo ảnh lung linh dao động, và những mảnh sự thật bắt đầu hé lộ.",
			"Ẩn sau ánh sáng tuyệt đẹp ấy — là tiếng kêu vĩnh cửu của một thiếu nữ.",
			"Và chúng ta đã phải đối mặt với gánh nặng của một lời hứa bị lãng quên."
		],
		"thai": [
			"ถึงจุดสิ้นสุดของธารน้ำแข็ง ที่ซึ่งหัวใจของออโรร่าอยู่ และทุกสิ่งถูกแช่แข็ง",
			"ภาพลวงตาที่ส่องแสงระยิบระยับสั่นคลอน และชิ้นส่วนของความจริงก็เริ่มปรากฏขึ้น",
			"สิ่งที่ซ่อนอยู่เบื้องหลังแสงอันงดงามนั้น — คือเสียงกรีดร้องชั่วนิรันดร์ของหญิงสาว",
			"และเราต้องเผชิญหน้ากับน้ำหนักของคำสัญญาที่ถูกลืมเลือน"
		],
		"hindi": [
			"ग्लेशियर के अंत तक पहुँच गए, जहाँ ऑरोरा का हृदय स्थित है, और सब कुछ जमा हुआ है।",
			"चमकता हुआ भ्रम डगमगाया, और सत्य के टुकड़े सतह पर आने लगे।",
			"उस सुंदर प्रकाश के पीछे छिपा था — एक युवती की शाश्वत चीख।",
			"और हमें एक भूले हुए वादे के बोझ का सामना करना पड़ा।"
		]
	}
} as const;
