export const scenario_snowy_frostlock_14_03 = {
	"scenario_id": "snowy_frostlock_14_03",
	"order": 3,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"finn": {
			"id": "mon_3e3930d2-c2d3-4ad0-9818-26d259edac77",
			"name": {
				"korean": "핀",
				"english": "Finn",
				"japanese": "フィン",
				"chinese": "芬恩",
				"french": "Finn",
				"spanish": "Finn",
				"vietnamese": "Finn",
				"thai": "ฟินน์",
				"hindi": "फिन"
			},
			"description": "",
			"face_image_url": "",
			"battle_sprite_url": ""
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "차가운 바람이 고대 유적의 폐허를 휩쓸었다. 얼어붙은 돌기둥은 시간을 잊은 듯 우뚝 서 있었다.",
						"english": "A cold wind swept through the ruins of the ancient site. Frozen stone pillars stood tall, as if having forgotten time itself.",
						"japanese": "冷たい風が古代遺跡の廃墟を吹き荒れた。凍てついた石柱は、時を忘れたかのようにそびえ立っていた。",
						"chinese": "寒风席卷了古老遗迹的废墟。冰冻的石柱仿佛遗忘了时间，巍然屹立。",
						"french": "Un vent froid balayait les ruines de l'ancien site. Des piliers de pierre gelés se dressaient, comme s'ils avaient oublié le temps lui-même.",
						"spanish": "Un viento frío barría las ruinas del antiguo sitio. Pilares de piedra congelados se erguían, como si hubieran olvidado el tiempo.",
						"vietnamese": "Gió lạnh lướt qua tàn tích cổ xưa. Những cột đá đóng băng sừng sững, như thể đã quên lãng thời gian.",
						"thai": "ลมหนาวพัดโหมกระหน่ำซากปรักหักพังของโบราณสถาน เสาหินที่แข็งตัวยืนตระหง่านราวกับลืมเลือนกาลเวลา",
						"hindi": "एक ठंडी हवा प्राचीन स्थल के खंडहरों में बह रही थी। जमे हुए पत्थर के खंभे ऊँचे खड़े थे, मानो वे समय को ही भूल गए हों।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이런 곳에… 누가 살았던 거지?",
						"english": "In a place like this... who could have lived?",
						"japanese": "こんな場所に…誰が住んでいたんだ？",
						"chinese": "这种地方…谁会住呢？",
						"french": "Dans un endroit pareil... qui aurait pu vivre ?",
						"spanish": "¿En un lugar como este... quién pudo haber vivido?",
						"vietnamese": "Ở một nơi thế này… ai đã từng sống chứ?",
						"thai": "ที่แบบนี้… ใครกันที่เคยอยู่?",
						"hindi": "ऐसी जगह पर… कौन रहता होगा?"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "왠지 모르게… 기분 나쁜 기운이 느껴져.",
						"english": "For some reason... I feel an unsettling presence.",
						"japanese": "なぜか…嫌な気配がする。",
						"chinese": "不知为何…我感到一股不祥的气息。",
						"french": "Pour une raison quelconque... je ressens une présence troublante.",
						"spanish": "Por alguna razón... siento una presencia inquietante.",
						"vietnamese": "Không hiểu sao… tôi cảm thấy một luồng khí khó chịu.",
						"thai": "ไม่รู้ทำไม… รู้สึกถึงพลังงานที่ไม่ดี",
						"hindi": "किसी कारण से… मुझे एक असहज आभास हो रहा है।"
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
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "폐허의 깊은 곳. 부서진 석상 아래, 낡은 설원 지도와 고대 상형문자가 새겨진 유물이 놓여 있었다.",
						"english": "Deep within the ruins. Beneath a shattered statue lay an old snowfield map and an artifact inscribed with ancient hieroglyphs.",
						"japanese": "廃墟の奥深く。壊れた石像の下に、古い雪原の地図と古代の象形文字が刻まれた遺物が置かれていた。",
						"chinese": "废墟深处。破碎的石像下，放着一张旧雪原地图和一件刻有古老象形文字的文物。",
						"french": "Au plus profond des ruines. Sous une statue brisée gisaient une vieille carte des champs de neige et un artefact gravé de hiéroglyphes anciens.",
						"spanish": "En lo profundo de las ruinas. Debajo de una estatua destrozada yacían un viejo mapa de la nieve y un artefacto con jeroglíficos antiguos.",
						"vietnamese": "Sâu trong phế tích. Dưới bức tượng đổ nát, có một bản đồ tuyết nguyên cũ và một cổ vật khắc chữ tượng hình cổ đại.",
						"thai": "ลึกเข้าไปในซากปรักหักพัง ใต้รูปปั้นที่พังทลาย มีแผนที่ทุ่งหิมะเก่าและวัตถุโบราณที่มีอักษรอียิปต์โบราณสลักอยู่",
						"hindi": "खंडहरों के गहरे में। एक टूटी हुई मूर्ति के नीचे, एक पुराना बर्फीला नक्शा और प्राचीन चित्रलिपि से उत्कीर्ण एक कलाकृति रखी हुई थी।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이건… 뭐야?",
						"english": "What is this...?",
						"japanese": "これ…何だ？",
						"chinese": "这是…什么？",
						"french": "Qu'est-ce que c'est... ?",
						"spanish": "¿Qué es esto...?",
						"vietnamese": "Cái này… là gì vậy?",
						"thai": "นี่…อะไรน่ะ?",
						"hindi": "यह… क्या है?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"spot": [
						2,
						1
					],
					"duration_ms": 500,
					"speaker": "finn",
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "happy",
					"content": {
						"korean": "오, 이런! 귀한 걸 발견했군요. 이건 고대 부족의 유물이에요.",
						"english": "Oh, my! You've found something precious. This is an artifact of an ancient tribe.",
						"japanese": "おや、これは！貴重なものを発見しましたね。これは古代部族の遺物ですよ。",
						"chinese": "哦，天哪！您发现了宝贵的东西。这是古代部落的遗物。",
						"french": "Oh, là là ! Vous avez trouvé quelque chose de précieux. C'est un artefact d'une ancienne tribu.",
						"spanish": "¡Oh, vaya! Ha encontrado algo precioso. Esto es un artefacto de una tribu antigua.",
						"vietnamese": "Ôi trời! Bạn đã tìm thấy một thứ quý giá. Đây là một cổ vật của bộ tộc cổ đại.",
						"thai": "โอ้, คุณ! คุณพบของมีค่า นี่คือวัตถุโบราณของชนเผ่าโบราณ",
						"hindi": "ओह, यह! आपने कुछ कीमती खोज लिया है। यह एक प्राचीन जनजाति का अवशेष है。"
					},
					"speaker": "finn",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이 지도 좀 보세요. 몇몇 케른들이 표시되어 있는데… '시간이 멈춘 곳'이라고 우회하라고 경고하고 있네요.",
						"english": "Look at this map. Several cairns are marked, warning us to bypass 'Where Time Stands Still'.",
						"japanese": "この地図を見てください。いくつかのケルンが記されていますが…「時が止まった場所」は迂回しろと警告していますね。",
						"chinese": "请看这张地图。上面标记着几座石冢……并警告我们绕开“时间停滞之地”。",
						"french": "Regardez cette carte. Plusieurs cairns y sont indiqués… et nous avertissent de contourner 'Là où le temps s'arrête'.",
						"spanish": "Mire este mapa. Hay varios mojones marcados… y nos advierten que evitemos 'Donde el tiempo se detiene'.",
						"vietnamese": "Hãy nhìn bản đồ này. Một vài đống đá được đánh dấu… cảnh báo chúng ta phải đi đường vòng 'Nơi thời gian ngừng lại'.",
						"thai": "ดูแผนที่นี่สิ มีกองหินหลายแห่งถูกทำเครื่องหมายไว้… และเตือนให้เราอ้อม 'ที่ที่เวลาหยุดนิ่ง' ด้วย",
						"hindi": "इस नक्शे को देखो। कुछ केर्न चिह्नित हैं… और चेतावनी दे रहे हैं कि 'जहाँ समय रुका हुआ है' से बचें।"
					},
					"type": "speech",
					"speaker": "finn"
				},
				{
					"content": {
						"korean": "'시간이 멈춘 곳'?",
						"english": "'Where Time Stands Still'?",
						"japanese": "「時が止まった場所」？",
						"chinese": "“时间停滞之地”？",
						"french": "'Là où le temps s'arrête' ?",
						"spanish": "¿'Donde el tiempo se detiene'?",
						"vietnamese": "'Nơi thời gian ngừng lại'?",
						"thai": "'ที่ที่เวลาหยุดนิ่ง'?",
						"hindi": "'जहाँ समय रुका हुआ है'?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"action": "enter",
					"spot": [
						4,
						1
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "고대 서약과 연관된 금기일 거예요. 상인 프로스트록 씨, 이 문양은 혹시….",
						"english": "It must be a taboo related to an ancient covenant. Merchant Frostrock, this emblem… could it be?",
						"japanese": "それは古代の誓約に関わる禁忌でしょう。商人フロストロックさん、この紋様はもしかして…。",
						"chinese": "这一定是与古代契约相关的禁忌。商人弗罗斯特洛克先生，这个纹章难道是……",
						"french": "Ce doit être un tabou lié à une ancienne alliance. Marchand Frostrock, cet emblème… ne serait-ce pas… ?",
						"spanish": "Debe ser un tabú relacionado con un antiguo pacto. Comerciante Frostrock, ¿este emblema…?",
						"vietnamese": "Chắc chắn là một điều cấm kỵ liên quan đến giao ước cổ xưa. Thưa ngài thương nhân Frostrock, biểu tượng này… liệu có phải…",
						"thai": "มันคงเป็นข้อห้ามที่เกี่ยวข้องกับพันธสัญญาโบราณสินะ พ่อค้าฟรอสต์ร็อก ตราสัญลักษณ์นี้… หรือว่า…",
						"hindi": "यह प्राचीन अनुबंध से जुड़ा कोई वर्जित होगा। व्यापारी फ्रॉस्टॉक, क्या यह प्रतीक…"
					},
					"speaker": "finn",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…아무것도 아니다. 낡은 미신일 뿐.",
						"english": "…Nothing. Just an old superstition.",
						"japanese": "…何でもない。ただの古い迷信だ。",
						"chinese": "……没什么。只是些老旧的迷信罢了。",
						"french": "…Rien du tout. Juste une vieille superstition.",
						"spanish": "…Nada en absoluto. Solo una vieja superstición.",
						"vietnamese": "…Không có gì. Chỉ là một mê tín cũ mà thôi.",
						"thai": "…ไม่มีอะไร แค่ความเชื่อเก่าๆ เท่านั้น",
						"hindi": "…कुछ नहीं। बस एक पुराना अंधविश्वास।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "{random_boss}의 표정이 순간 굳었다. 하지만 이내 평소의 무표정으로 돌아왔다.",
						"english": "{random_boss}'s expression froze for a moment. But soon, it returned to their usual blank stare.",
						"japanese": "{random_boss}の表情が一瞬硬直した。だがすぐに、いつもの無表情に戻った。",
						"chinese": "{random_boss}的表情瞬间僵硬了。但很快，他又恢复了往常的面无表情。",
						"french": "L'expression de {random_boss} se figea un instant. Mais très vite, elle retrouva son impassibilité habituelle.",
						"spanish": "La expresión de {random_boss} se congeló por un momento. Pero pronto, volvió a su habitual impasibilidad.",
						"vietnamese": "Biểu cảm của {random_boss} cứng đờ trong chốc lát. Nhưng ngay sau đó, nó lại trở về vẻ mặt vô cảm thường ngày.",
						"thai": "สีหน้าของ {random_boss} แข็งค้างไปชั่วครู่ แต่ไม่นานก็กลับมาเป็นสีหน้าเรียบเฉยตามปกติ",
						"hindi": "{random_boss} का चेहरा एक पल के लिए जम गया। लेकिन जल्द ही, वह अपने सामान्य भावहीन चेहरे पर लौट आया।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그는 뭔가 숨기고 있어.",
						"english": "He's hiding something.",
						"japanese": "彼は何かを隠している。",
						"chinese": "他有所隐瞒。",
						"french": "Il cache quelque chose.",
						"spanish": "Él está escondiendo algo.",
						"vietnamese": "Anh ta đang giấu giếm điều gì đó.",
						"thai": "เขากำลังปิดบังอะไรบางอย่าง",
						"hindi": "वह कुछ छिपा रहा है।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "finn",
					"action": "enter",
					"spot": [
						2,
						1
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "finn",
					"type": "speech",
					"content": {
						"korean": "이 유물과 지도를 볼수록 확실해져요. 프로스트록 씨는 단순한 상인이 아니에요.",
						"english": "The more I look at this artifact and map, the surer I become. Mr. Frostrock isn't just a merchant.",
						"japanese": "この遺物と地図を見るほど確信が深まります。フロストロックさんはただの商人ではありません。",
						"chinese": "我越是查看这件遗物和地图，就越是确信。弗罗斯特洛克先生绝非简单的商人。",
						"french": "Plus j'examine cet artefact et cette carte, plus j'en suis sûre. Monsieur Frostrock n'est pas un simple marchand.",
						"spanish": "Cuanto más miro este artefacto y este mapa, más segura estoy. El señor Frostrock no es un simple comerciante.",
						"vietnamese": "Càng nhìn vào di vật và bản đồ này, tôi càng chắc chắn. Ngài Frostrock không phải là một thương nhân bình thường.",
						"thai": "ยิ่งฉันดูวัตถุโบราณและแผนที่นี้มากเท่าไหร่ ก็ยิ่งมั่นใจว่าคุณฟรอสต์ร็อกไม่ใช่แค่พ่อค้าธรรมดา",
						"hindi": "इस कलाकृति और नक्शे को जितना देखती हूँ, उतना ही मुझे यकीन होता है। मिस्टर फ्रॉस्टॉक सिर्फ एक व्यापारी नहीं हैं।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "단순한 상인이라기엔 너무 완벽했지.",
						"english": "He was too perfect to be just a simple merchant.",
						"japanese": "単なる商人にしては、あまりにも完璧すぎた。",
						"chinese": "说他是简单商人，他表现得也太过完美了。",
						"french": "Il était trop parfait pour être un simple marchand.",
						"spanish": "Era demasiado perfecto para ser un simple comerciante.",
						"vietnamese": "Để là một thương nhân bình thường thì anh ta quá hoàn hảo.",
						"thai": "เขาดูสมบูรณ์แบบเกินไปที่จะเป็นแค่พ่อค้าธรรมดา",
						"hindi": "वह सिर्फ एक साधारण व्यापारी होने के लिए बहुत सही था।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "고대 서약에는… '가장 소중한 것을 바쳐라'는 원칙이 숨겨져 있어요. 모든 거래에는 대가가 따르죠.",
						"english": "Within the ancient covenant… a principle is hidden: 'Sacrifice that which is most precious.' Every transaction has a cost.",
						"japanese": "古代の誓約には…「最も大切なものを捧げよ」という原則が隠されています。すべての取引には代償が伴いますから。",
						"chinese": "古老的契约中……隐藏着一个原则：“献上最珍贵之物”。所有交易都有代价。",
						"french": "Dans l'ancienne alliance… se cache un principe : 'Sacrifiez ce qu'il y a de plus précieux'. Chaque transaction a un coût.",
						"spanish": "En el antiguo pacto… se esconde un principio: 'Sacrifica lo más preciado'. Toda transacción tiene un precio.",
						"vietnamese": "Trong giao ước cổ xưa… một nguyên tắc được ẩn giấu: 'Hãy dâng hiến thứ quý giá nhất'. Mọi giao dịch đều có cái giá của nó.",
						"thai": "ในพันธสัญญาโบราณ… มีหลักการซ่อนอยู่ว่า 'จงพลีสิ่งที่ล้ำค่าที่สุด' ทุกการแลกเปลี่ยนย่อมมีค่าตอบแทน",
						"hindi": "प्राचीन अनुबंध में… एक सिद्धांत छिपा है: 'सबसे अनमोल वस्तु का बलिदान करो'। हर सौदे की एक कीमत होती है।"
					},
					"speaker": "finn",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "우리가 지불할 대가가 뭔지… 알고 있는 거겠지?",
						"english": "He must know what price we'll have to pay, right?",
						"japanese": "私たちが支払う代償が何なのか…彼は知っているのでしょう？",
						"chinese": "我们即将付出的代价是什么……他应该知道吧？",
						"french": "Il doit savoir quel prix nous allons devoir payer, n'est-ce pas ?",
						"spanish": "Él debe saber qué precio tendremos que pagar, ¿verdad?",
						"vietnamese": "Anh ta chắc chắn biết cái giá mà chúng ta sẽ phải trả là gì, đúng không?",
						"thai": "เขาคงจะรู้ดีว่าเราจะต้องจ่ายค่าตอบแทนอะไร… ใช่ไหม?",
						"hindi": "वह जानता होगा कि हमें क्या कीमत चुकानी पड़ेगी, है ना?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "finn",
					"duration_ms": 500,
					"spot": [
						2,
						1
					]
				},
				{
					"content": {
						"korean": "더 이상 물러날 곳은 없어요. 진실을 마주할 각오가 되어 있나요?",
						"english": "No more turning back. Are you ready to face the truth?",
						"japanese": "もう後には引けません。真実と向き合う覚悟はできていますか？",
						"chinese": "已无退路。你准备好面对真相了吗？",
						"french": "Plus de recul possible. Êtes-vous prêt à affronter la vérité ?",
						"spanish": "No hay marcha atrás. ¿Estás listo para enfrentar la verdad?",
						"vietnamese": "Không còn đường lui nữa. Ngươi đã sẵn sàng đối mặt với sự thật chưa?",
						"thai": "ไม่มีที่ให้ถอยอีกแล้ว คุณพร้อมที่จะเผชิญหน้ากับความจริงหรือยัง?",
						"hindi": "अब और पीछे हटने की जगह नहीं है। क्या तुम सच का सामना करने के लिए तैयार हो?"
					},
					"speaker": "finn",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이미 너무 늦었어. 여기까지 왔는데, 돌아갈 순 없지.",
						"english": "It's already too late. We've come this far; there's no turning back now.",
						"japanese": "もう手遅れだ。ここまで来て、引き返すことなどできない。",
						"chinese": "已经太迟了。既然走到这，就不能回头了。",
						"french": "Il est déjà trop tard. Nous sommes venus si loin, impossible de faire demi-tour.",
						"spanish": "Ya es demasiado tarde. Hemos llegado hasta aquí, no podemos volver atrás.",
						"vietnamese": "Đã quá muộn rồi. Đã đến đây, không thể quay lại được nữa.",
						"thai": "สายเกินไปแล้ว มาถึงจุดนี้แล้ว ไม่มีทางหวนกลับได้หรอก",
						"hindi": "बहुत देर हो चुकी है। हम इतनी दूर आ गए हैं, अब पीछे नहीं हट सकते।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "프로스트록… 놈의 가면을 벗겨버릴 거야.",
						"english": "Frostrock... I'll rip off his mask.",
						"japanese": "フロストロック… やつらの仮面を剥がしてやる。",
						"chinese": "霜岩… 我要撕下他的面具。",
						"french": "Frostrock... Je lui arracherai son masque.",
						"spanish": "Frostrock... Le arrancaré la máscara.",
						"vietnamese": "Frostrock… Ta sẽ lột mặt nạ của hắn.",
						"thai": "ฟรอสต์ร็อก... ฉันจะกระชากหน้ากากของมันออก",
						"hindi": "फ्रॉस्टक्रॉक… मैं उसका नकाब उतार दूंगा।"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "거대한 힘 앞에 탐험대는 무릎 꿇었다. 냉혹한 그림자가 모든 것을 집어삼켰다.",
						"english": "Before the immense power, the expedition fell to its knees. The ruthless shadow devoured everything.",
						"japanese": "大な力の前、探検隊は膝を屈した。冷酷な影が全てを飲み込んだ。",
						"chinese": "在巨大的力量面前，探险队跪下了。无情的阴影吞噬了一切。",
						"french": "Devant une puissance immense, l'expédition s'agenouilla. L'ombre impitoyable dévora tout.",
						"spanish": "Ante el poder inmenso, la expedición cayó de rodillas. La sombra implacable lo devoró todo.",
						"vietnamese": "Trước sức mạnh khổng lồ, đoàn thám hiểm đã quỳ gối. Bóng tối tàn nhẫn nuốt chửng mọi thứ.",
						"thai": "เบื้องหน้าพลังอันมหาศาล คณะสำรวจคุกเข่าลง เงาอันโหดร้ายกลืนกินทุกสิ่ง",
						"hindi": "विशाल शक्ति के सामने, अभियान दल घुटनों पर आ गया। निर्दयी छाया ने सब कुछ निगल लिया।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "어리석은 자들. 너희의 '빚'은… 이제 시작이다.",
						"english": "Fools. Your 'debt'... has just begun.",
						"japanese": "愚か者たちめ。お前たちの「負債」は…今始まったばかりだ。",
						"chinese": "愚蠢的家伙们。你们的“债”…才刚刚开始。",
						"french": "Imbéciles. Votre « dette »... ne fait que commencer.",
						"spanish": "Necios. Vuestra 'deuda'... acaba de empezar.",
						"vietnamese": "Lũ ngốc. 'Món nợ' của các ngươi... bây giờ mới bắt đầu.",
						"thai": "พวกคนโง่ 'หนี้' ของพวกเจ้า… เพิ่งจะเริ่มต้นขึ้น",
						"hindi": "मूर्खों। तुम्हारा 'कर्ज'... अभी शुरू हुआ है।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…끝난 게 아니야. 다시 돌아온다.",
						"english": "...It's not over. I'll be back.",
						"japanese": "…終わっていない。また戻ってくる。",
						"chinese": "…还没结束。我会再回来。",
						"french": "...Ce n'est pas fini. Je reviendrai.",
						"spanish": "...No ha terminado. Volveré.",
						"vietnamese": "...Chưa kết thúc đâu. Ta sẽ quay lại.",
						"thai": "…ยังไม่จบ ฉันจะกลับมา",
						"hindi": "...यह खत्म नहीं हुआ है। मैं वापस आऊँगा।"
					}
				}
			],
			"win_dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 서서히 무너져 내렸다. 정체 모를 존재가 남긴 마지막 말.",
						"english": "The colossal shadow slowly crumbled. The last words left by the unknown entity.",
						"japanese": "巨大な影がゆっくりと崩れ落ちた。正体不明の存在が残した最後の言葉。",
						"chinese": "巨大的影子缓缓崩塌。不明存在留下了最后的遗言。",
						"french": "L'ombre colossale s'effondra lentement. Les derniers mots laissés par l'entité inconnue.",
						"spanish": "La colosal sombra se desmoronó lentamente. Las últimas palabras dejadas por la entidad desconocida.",
						"vietnamese": "Bóng đen khổng lồ dần sụp đổ. Lời cuối cùng của thực thể vô danh.",
						"thai": "เงาขนาดมหึมาค่อยๆ พังทลายลง นี่คือคำพูดสุดท้ายที่ทิ้งไว้โดยสิ่งมีชีวิตที่ไม่รู้จัก",
						"hindi": "विशालकाय छाया धीरे-धीरे बिखर गई। अज्ञात सत्ता द्वारा छोड़े गए अंतिम शब्द।"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…흥미롭군. 하지만 기억해라. 빚은… 사라지지 않는다.",
						"english": "...Interesting. But remember this. Debts... do not disappear.",
						"japanese": "…興味深い。だが、覚えておけ。負債は…消えぬ。",
						"chinese": "…有趣。但记住。债务…不会消失。",
						"french": "...Intéressant. Mais rappelez-vous ceci. Les dettes... ne disparaissent pas.",
						"spanish": "...Interesante. Pero recuerda esto. Las deudas... no desaparecen.",
						"vietnamese": "…Thú vị. Nhưng hãy nhớ kỹ. Nợ nần… không biến mất đâu.",
						"thai": "...น่าสนใจ แต่จำไว้ให้ดี หนี้สิน... ไม่มีวันหายไป",
						"hindi": "...दिलचस्प। लेकिन याद रखना। कर्ज… मिटते नहीं।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "빚… 아직 끝나지 않았어.",
						"english": "Debts... It's not over yet.",
						"japanese": "負債… まだ終わってない。",
						"chinese": "债务… 还没结束。",
						"french": "Dettes... Ce n'est pas encore fini.",
						"spanish": "Deudas... Aún no ha terminado.",
						"vietnamese": "Nợ nần… Vẫn chưa kết thúc đâu.",
						"thai": "หนี้สิน... มันยังไม่จบ",
						"hindi": "कर्ज… अभी खत्म नहीं हुआ है।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "눈보라는 잠시 잦아들었지만, 설원의 침묵은 더 깊어진 듯했다. 또 다른 '대가'의 그림자가 드리워지고 있었다.",
						"english": "The blizzard briefly subsided, but the snowfield's silence deepened. The shadow of another 'price' loomed.",
						"japanese": "吹雪は一時的に弱まったが、雪原の静寂は一層深まったようだった。また別の「代償」の影が迫っていた。",
						"chinese": "暴风雪暂时平息，但雪原的寂静似乎更深了。另一个“代价”的阴影正在逼近。",
						"french": "Le blizzard s'était brièvement calmé, mais le silence du champ de neige semblait s'être approfondi. L'ombre d'un autre « prix » se profilait.",
						"spanish": "La ventisca amainó brevemente, pero el silencio del campo nevado pareció profundizarse. La sombra de otro 'precio' se cernía.",
						"vietnamese": "Cơn bão tuyết tạm lắng, nhưng sự tĩnh lặng của cánh đồng tuyết dường như sâu hơn. Bóng dáng của một 'cái giá' khác đang bao trùm.",
						"thai": "พายุหิมะสงบลงชั่วครู่ แต่ความเงียบของทุ่งหิมะดูเหมือนจะลึกซึ้งยิ่งขึ้น เงาของ 'ค่าตอบแทน' อีกอย่างกำลังคืบคลานเข้ามา",
						"hindi": "बर्फीला तूफान थम गया, लेकिन बर्फ से ढके मैदान की खामोशी और गहरी होती गई। एक और 'कीमत' का साया मंडरा रहा था।"
					}
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "고대 유적의 심장부. 거대한 얼음 결정 속에서 정체 모를 그림자가 움직였다.",
						"english": "Deep within the ancient ruins. An unknown shadow stirred within a colossal ice crystal.",
						"japanese": "古代遺跡の心臓部。巨大な氷の結晶の中で、正体不明の影が動いた。",
						"chinese": "古代遗迹的心脏。巨大的冰晶中，一道不明的影子在移动。",
						"french": "Au cœur des ruines antiques. Une ombre inconnue s'agita dans un cristal de glace colossal.",
						"spanish": "En el corazón de las ruinas antiguas. Una sombra desconocida se agitó dentro de un gigantesco cristal de hielo.",
						"vietnamese": "Sâu trong lòng di tích cổ đại. Một bóng đen vô danh chuyển động trong khối băng khổng lồ.",
						"thai": "ในใจกลางซากปรักหักพังโบราณ เงาลึกลับเคลื่อนไหวอยู่ภายในผลึกน้ำแข็งมหึมา",
						"hindi": "प्राचीन खंडहरों के केंद्र में। एक विशाल बर्फीले क्रिस्टल के भीतर एक अज्ञात छाया हिल उठी।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "결국 여기까지 왔군. …하지만 늦었다.",
						"english": "So you've finally arrived. ...But it's too late.",
						"japanese": "結局ここまで来たか。…だが、遅かったな。",
						"chinese": "终究还是来了。…但已经迟了。",
						"french": "Vous êtes finalement arrivés. ...Mais il est trop tard.",
						"spanish": "Así que finalmente has llegado. ...Pero es demasiado tarde.",
						"vietnamese": "Cuối cùng ngươi cũng đến. …Nhưng đã quá muộn rồi.",
						"thai": "ในที่สุดเจ้าก็มาถึง... แต่ก็สายเกินไปแล้ว",
						"hindi": "आखिर तुम आ ही गए। ...लेकिन बहुत देर हो चुकी है।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "진실은… 너희가 감당할 수 없을 만큼 차가운 법.",
						"english": "The truth... is colder than you can bear.",
						"japanese": "真実とは… お前たちが耐えられないほど冷たいものだ。",
						"chinese": "真相… 冰冷得超出你们的承受范围。",
						"french": "La vérité... est plus froide que vous ne pouvez le supporter.",
						"spanish": "La verdad... es más fría de lo que pueden soportar.",
						"vietnamese": "Sự thật… lạnh giá đến mức các ngươi không thể chịu đựng nổi.",
						"thai": "ความจริงน่ะ... มันเย็นชากว่าที่พวกเจ้าจะรับไหว",
						"hindi": "सच… इतना सर्द है कि तुम सह नहीं पाओगे।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "감당하든 못 하든, 우리가 결정할 일이야.",
						"english": "Whether we can bear it or not, that's for us to decide.",
						"japanese": "耐えられようが耐えられまいが、それは私たちが決めることだ。",
						"chinese": "无论能否承受，都由我们来决定。",
						"french": "Que nous puissions le supporter ou non, c'est à nous de décider.",
						"spanish": "Si podemos soportarlo o no, eso es algo que decidiremos nosotros.",
						"vietnamese": "Dù chịu đựng được hay không, đó là việc của chúng ta.",
						"thai": "จะรับไหวหรือไม่ไหว นั่นคือสิ่งที่เราจะตัดสินใจเอง",
						"hindi": "हम इसे सह पाएंगे या नहीं, यह हमें तय करना है।"
					},
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"고대의 유적이 얼어붙은 설원 아래 숨어 있었다.",
			"프로스트록은 친절했지만, 그의 눈은 모든 것을 계산하는 듯했다.",
			"우연히 발견한 유물 조각이 — 모든 거짓을 꿰뚫는 열쇠가 될 줄은 몰랐다.",
			"시간이 멈춘 곳. 그곳에 진실이 잠들어 있었다."
		],
		"english": [
			"Ancient ruins lay hidden beneath the frozen wasteland.",
			"Frostrock was kind, yet his eyes seemed to calculate everything.",
			"I never knew a relic shard, found by chance, would be the key to pierce through all lies.",
			"Where time stood still. There, the truth lay dormant."
		],
		"japanese": [
			"古代の遺跡が凍てつく雪原の下に隠されていた。",
			"フロストロックは親切だったが、その目はすべてを計算しているようだった。",
			"偶然見つけた遺物の破片が――すべての偽りを貫く鍵になるとは思わなかった。",
			"時が止まった場所。そこに真実が眠っていた。"
		],
		"chinese": [
			"古老的遗迹隐藏在冰冻的雪原之下。",
			"霜岩很友善，但他的眼神似乎在计算着一切。",
			"我从未想过，偶然发现的遗物碎片——竟会是揭穿所有谎言的关键。",
			"时间停滞之地。真相在那里沉睡。"
		],
		"french": [
			"D'anciennes ruines étaient cachées sous la toundra gelée.",
			"Frostrock était aimable, mais ses yeux semblaient tout calculer.",
			"Je n'aurais jamais cru qu'un fragment d'artefact, trouvé par hasard, serait la clé pour percer tous les mensonges.",
			"Là où le temps s'est arrêté. La vérité y sommeillait."
		],
		"spanish": [
			"Antiguas ruinas yacían escondidas bajo el páramo helado.",
			"Frostrock era amable, pero sus ojos parecían calcularlo todo.",
			"Nunca supe que un fragmento de reliquia, encontrado por casualidad, sería la clave para atravesar todas las mentiras.",
			"Donde el tiempo se detuvo. Allí, la verdad yacía dormida."
		],
		"vietnamese": [
			"Tàn tích cổ đại ẩn mình dưới vùng đất tuyết đóng băng.",
			"Frostrock tử tế, nhưng đôi mắt hắn dường như tính toán mọi thứ.",
			"Tôi nào ngờ một mảnh di vật tình cờ tìm thấy—sẽ là chìa khóa xuyên thủng mọi dối trá.",
			"Nơi thời gian ngừng lại. Ở đó, sự thật đang ngủ yên."
		],
		"thai": [
			"ซากปรักหักพังโบราณซ่อนอยู่ใต้ทุ่งน้ำแข็งที่เยือกแข็ง",
			"ฟรอสต์ร็อกใจดี แต่ดวงตาของเขาดูเหมือนจะคำนวณทุกสิ่ง",
			"ไม่เคยรู้เลยว่าชิ้นส่วนวัตถุโบราณที่พบโดยบังเอิญ—จะกลายเป็นกุญแจไขความจริงทั้งหมด",
			"สถานที่ซึ่งกาลเวลาหยุดนิ่ง ความจริงหลับใหลอยู่ที่นั่น"
		],
		"hindi": [
			"प्राचीन खंडहर जमी हुई बर्फ़ीली भूमि के नीचे छिपे हुए थे।",
			"फ्रॉस्ट रॉक दयालु था, फिर भी उसकी आँखें सब कुछ गणना करती हुई लगती थीं।",
			"मुझे नहीं पता था कि गलती से मिली एक प्राचीन वस्तु का टुकड़ा—सभी झूठों को भेदने की कुंजी बन जाएगा।",
			"जहाँ समय थम गया था। वहीं, सच्चाई सोई हुई थी।"
		]
	}
} as const;
