export const scenario_snowy_skalhorn_25_02 = {
	"scenario_id": "snowy_skalhorn_25_02",
	"order": 2,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"ivar": {
			"id": "mon_d8a80adc-9315-47b5-8c30-97ce33672bce",
			"name": {
				"korean": "이바르",
				"english": "Ivar",
				"japanese": "イヴァー",
				"chinese": "伊瓦尔",
				"french": "Ivar",
				"spanish": "Ivar",
				"vietnamese": "Ivar",
				"thai": "ไอวาร์",
				"hindi": "इवर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8dd7872b-d4df-44fd-b1a1-083a9156e700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2622fb62-daf4-42d1-a83b-2b78869d3e00/public"
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
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "차가운 공기가 폐부를 찢었다. 모든 감각이 둔해지는 한기였다.",
						"english": "The cold air tore at his lungs. It was a chill that dulled all senses.",
						"japanese": "冷たい空気が肺を裂いた。すべての感覚が鈍る寒気だった。",
						"chinese": "冰冷的空气撕裂肺部。寒意让所有感官都变得迟钝。",
						"french": "L'air glacial lacéra ses poumons. Un froid qui engourdissait tous les sens.",
						"spanish": "El aire frío le desgarró los pulmones. Era un frío que adormecía todos los sentidos.",
						"vietnamese": "Không khí lạnh lẽo xé toạc phổi. Một cái lạnh làm tê liệt mọi giác quan.",
						"thai": "อากาศเย็นเยือกฉีกกระชากปอด มันเป็นความหนาวเย็นที่ทำให้ทุกประสาทสัมผัสอ่อนลง",
						"hindi": "ठंडी हवा ने फेफड़ों को चीर दिया। यह एक ऐसी ठंड थी जिसने सभी इंद्रियों को सुस्त कर दिया।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "으으… 머리가 멍해지는 것 같아…",
						"english": "Ugh… My head feels fuzzy…",
						"japanese": "うぅ…頭がぼーっとしてくる…",
						"chinese": "呃… 我感觉头脑变得迟钝了…",
						"french": "Ugh… Ma tête se brouille…",
						"spanish": "Ugh… Siento que mi cabeza se entumece…",
						"vietnamese": "Ư… Đầu tôi cứ mụ mị đi…",
						"thai": "อื้อ… เหมือนหัวจะมึนไปหมด…",
						"hindi": "उह... मेरा सिर सुन्न होता जा रहा है..."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"type": "direction",
					"speaker": "ivar",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "정신 차려라! 이깟 추위에 굴복할 텐가?",
						"english": "Snap out of it! Will you yield to mere cold?",
						"japanese": "気を確かに持て！こんな寒さに屈するつもりか？",
						"chinese": "振作起来！你难道要向这点寒冷屈服吗？",
						"french": "Reprends-toi ! Vas-tu céder à un simple froid ?",
						"spanish": "¡Reacciona! ¿Vas a sucumbir a este frío insignificante?",
						"vietnamese": "Tỉnh táo lại! Ngươi sẽ khuất phục trước cái lạnh cỏn con này sao?",
						"thai": "ตั้งสติหน่อย! เจ้าจะยอมจำนนต่อความหนาวเย็นแค่นี้หรือ?",
						"hindi": "होश में आओ! क्या तुम इस मामूली ठंड के आगे झुक जाओगे?"
					}
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"content": {
						"korean": "나약한 자들이나 한기에 몸을 맡기는 법이지.",
						"english": "Only the weak surrender themselves to the cold.",
						"japanese": "弱き者だけが寒気に身を任せるものだ。",
						"chinese": "只有软弱之人，才会任由寒意侵蚀。",
						"french": "Seuls les faibles se soumettent au froid.",
						"spanish": "Solo los débiles se abandonan al frío.",
						"vietnamese": "Chỉ có kẻ yếu mới buông xuôi thân mình cho cái lạnh.",
						"thai": "มีแต่คนอ่อนแอเท่านั้นที่ปล่อยตัวไปกับความหนาวเย็น",
						"hindi": "केवल कमजोर लोग ही ठंड के हवाले करते हैं।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						4,
						2
					],
					"speaker": "ivar",
					"type": "direction",
					"duration_ms": 550
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이상해… 발걸음이 자꾸 저쪽으로 향해…",
						"english": "Strange… My steps keep leading me over there…",
						"japanese": "おかしい…足が勝手にそっちへ向かう…",
						"chinese": "奇怪… 脚步总是朝那边走去…",
						"french": "C'est étrange… Mes pas me mènent sans cesse là-bas…",
						"spanish": "Extraño… Mis pasos no dejan de llevarme hacia allá…",
						"vietnamese": "Lạ thật… Bước chân cứ hướng về phía đó…",
						"thai": "แปลกจริง… ฝีเท้าฉันเอาแต่เดินไปทางนั้น…",
						"hindi": "अजीब है... मेरे कदम बार-बार उधर ही जा रहे हैं..."
					},
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "흔들리지 마라! 강함의 끝이 이런 마비일 리 없어.",
						"english": "Don't waver! The peak of strength can't be this numbness.",
						"japanese": "揺らぐな！強さの果てがこんな麻痺であるはずがない。",
						"chinese": "别动摇！力量的尽头不可能是这种麻痹。",
						"french": "Ne vacille pas ! L'apogée de la force ne peut être cette torpeur.",
						"spanish": "¡No flaquees! El colmo de la fuerza no puede ser este entumecimiento.",
						"vietnamese": "Đừng lay chuyển! Giới hạn của sức mạnh không thể là sự tê liệt này.",
						"thai": "อย่าลังเล! จุดสูงสุดของความแข็งแกร่งไม่ควรเป็นความรู้สึกชาเช่นนี้",
						"hindi": "मत डगमगाओ! शक्ति का चरम यह सुन्नता नहीं हो सकती।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "나는 끝까지 깨어 있겠다. 너희도 그래야 해!",
						"english": "I will stay awake until the end. You must too!",
						"japanese": "私は最後まで目を覚ましている。あなたたちもそうしなさい！",
						"chinese": "我会坚持到最后。你们也必须如此！",
						"french": "Je resterai éveillé jusqu'à la fin. Vous le devez aussi !",
						"spanish": "Me mantendré despierto hasta el final. ¡Vosotros también debéis hacerlo!",
						"vietnamese": "Ta sẽ tỉnh táo đến cùng. Các ngươi cũng vậy!",
						"thai": "ข้าจะตื่นอยู่จนถึงที่สุด พวกเจ้าก็ต้องทำเช่นกัน!",
						"hindi": "मैं अंत तक जागा रहूँगा। तुम्हें भी रहना चाहिए!"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 480,
					"type": "direction",
					"speaker": "ivar",
					"action": "enter",
					"spot": [
						2,
						2
					]
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…노래가 들리는 것 같아… 저 뿔잔에서…",
						"english": "...I think I hear a song... from that horn cup...",
						"japanese": "…歌が聞こえるようだ…あの角杯から…",
						"chinese": "……我好像听到了歌声……来自那个号角杯……",
						"french": "...Il me semble entendre un chant... venant de cette coupe en corne...",
						"spanish": "...Creo que oigo una canción... de esa copa de cuerno...",
						"vietnamese": "...Ta nghe thấy một bài hát... từ chiếc sừng đó...",
						"thai": "...ข้าได้ยินเสียงเพลง...จากถ้วยเขานั่น...",
						"hindi": "...मुझे एक गाना सुनाई दे रहा है... उस सींग के प्याले से..."
					},
					"type": "speech",
					"speaker": "character_1"
				},
				{
					"action": "move",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"speaker": "character_1",
					"duration_ms": 400
				},
				{
					"emotion": "angry",
					"speaker": "ivar",
					"type": "speech",
					"content": {
						"korean": "멍청한 소리! 환청이다! 유혹에 넘어가지 마!",
						"english": "Nonsense! It's a hallucination! Don't fall for the temptation!",
						"japanese": "馬鹿なこと言うな！幻聴だ！誘惑に負けるな！",
						"chinese": "胡说八道！那是幻听！别被诱惑了！",
						"french": "Absurdité ! C'est une hallucination ! Ne succombez pas à la tentation !",
						"spanish": "¡Tonterías! ¡Es una alucinación! ¡No caigáis en la tentación!",
						"vietnamese": "Vô lý! Đó là ảo giác! Đừng sa ngã trước cám dỗ!",
						"thai": "ไร้สาระ! มันคือภาพหลอน! อย่าตกหลุมพรางของสิ่งล่อใจ!",
						"hindi": "बकवास! यह एक मतिभ्रम है! प्रलोभन में मत पड़ो!"
					}
				},
				{
					"spot": [
						3,
						3
					],
					"action": "move",
					"speaker": "ivar",
					"type": "direction",
					"duration_ms": 300
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "자존심도 없나? 우리는 전사다! 끝까지 맞서 싸워야 한다!",
						"english": "Have you no pride? We are warriors! We must fight to the very end!",
						"japanese": "プライドはないのか？我々は戦士だ！最後まで戦い抜くべきだ！",
						"chinese": "你们没有自尊吗？我们是战士！必须战斗到最后！",
						"french": "N'avez-vous aucune fierté ? Nous sommes des guerriers ! Nous devons nous battre jusqu'au bout !",
						"spanish": "¿No tenéis orgullo? ¡Somos guerreros! ¡Debemos luchar hasta el final!",
						"vietnamese": "Ngươi không có tự trọng sao? Chúng ta là chiến binh! Phải chiến đấu đến cùng!",
						"thai": "เจ้าไม่มีความภาคภูมิใจหรือ? พวกเราคือนักรบ! เราต้องสู้จนถึงที่สุด!",
						"hindi": "क्या तुम्हें गर्व नहीं है? हम योद्धा हैं! हमें अंत तक लड़ना होगा!"
					},
					"speaker": "ivar",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"speaker": "ivar",
					"duration_ms": 420
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "얼어붙은 숨결마다 뿔잔 안의 푸른 광채가 흡족한 듯 일렁였다.",
						"english": "With every frozen breath, the blue glow within the horn cup shimmered contentedly.",
						"japanese": "凍てつく息吹ごとに、角杯の中の青い輝きが満足げに揺らめいた。",
						"chinese": "随着每一次冰冷的呼吸，号角杯中蓝色的光芒满足地闪烁着。",
						"french": "À chaque souffle glacé, la lueur bleue dans la coupe en corne scintillait de satisfaction.",
						"spanish": "Con cada aliento helado, el resplandor azul dentro de la copa de cuerno brillaba satisfecho.",
						"vietnamese": "Với mỗi hơi thở đóng băng, ánh sáng xanh lam bên trong chiếc sừng rung rinh mãn nguyện.",
						"thai": "ด้วยทุกๆ ลมหายใจที่เยือกแข็ง แสงเรืองรองสีน้ำเงินภายในถ้วยเขาก็สั่นไหวอย่างพึงพอใจ",
						"hindi": "हर जमी हुई साँस के साथ, सींग के प्याले के भीतर की नीली चमक संतोषपूर्वक झिलमिला उठी।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "흥얼흥얼… (작게 노래를 흥얼거린다)",
						"english": "Hum-hum... (Hums a quiet song)",
						"japanese": "ふんふん… (小さく歌を口ずさむ)",
						"chinese": "哼哼……（小声哼唱）",
						"french": "Fredonne... (Fredonne une chanson discrètement)",
						"spanish": "Tarareando... (Tararea una canción en voz baja)",
						"vietnamese": "Hát lẩm bẩm... (Lẩm bẩm một bài hát nhỏ)",
						"thai": "ฮัมเพลง... (ฮัมเพลงเบาๆ)",
						"hindi": "गुनगुनाना... (धीमा गीत गुनगुनाता है)"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…나는 이 끝없는 굶주림에 굴복하지 않아.",
						"english": "...I will not succumb to this endless hunger.",
						"japanese": "…私はこの終わりのない飢えに屈しない。",
						"chinese": "……我不会屈服于这无尽的饥饿。",
						"french": "...Je ne céderai pas à cette faim sans fin.",
						"spanish": "...No sucumbiré a esta hambre interminable.",
						"vietnamese": "...Ta sẽ không khuất phục trước cơn đói vô tận này.",
						"thai": "...ข้าจะไม่ยอมจำนนต่อความหิวโหยที่ไม่สิ้นสุดนี้",
						"hindi": "...मैं इस अंतहीन भूख के आगे नहीं झुकूँगा।"
					},
					"speaker": "ivar",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "ivar",
					"type": "speech",
					"content": {
						"korean": "의지를 잃는 순간, 우리의 강함은 끝난다. 나는 결코 멈추지 않아!",
						"english": "The moment we lose our will, our strength ends. I will never stop!",
						"japanese": "意志を失う瞬間、我々の強さは終わる。私は決して止まらない！",
						"chinese": "失去意志的那一刻，我们的力量便会终结。我绝不会停下！",
						"french": "Au moment où nous perdons notre volonté, notre force prend fin. Je ne m'arrêterai jamais !",
						"spanish": "En el momento en que perdemos nuestra voluntad, nuestra fuerza termina. ¡Nunca me detendré!",
						"vietnamese": "Khoảnh khắc ta mất ý chí, sức mạnh của ta sẽ kết thúc. Ta sẽ không bao giờ dừng lại!",
						"thai": "เมื่อเราสูญเสียเจตจำนง ความแข็งแกร่งของเราก็สิ้นสุดลง ข้าจะไม่หยุดเด็ดขาด!",
						"hindi": "जिस क्षण हम अपनी इच्छा खो देते हैं, हमारी शक्ति समाप्त हो जाती है। मैं कभी नहीं रुकूँगा!"
					}
				}
			]
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "크윽… 하지만 이 굶주림은… 끝나지 않아…",
						"english": "Ugh... but this hunger... it never ends...",
						"japanese": "くっ…だが、この飢えは…終わらない…",
						"chinese": "呃…但这饥饿…永无止境…",
						"french": "Ugh... mais cette faim... elle ne finit jamais...",
						"spanish": "Ugh... pero esta hambre... nunca termina...",
						"vietnamese": "Khặc... nhưng cơn đói này... sẽ không bao giờ kết thúc...",
						"thai": "อึก... แต่ความหิวนี้... ไม่มีวันสิ้นสุด...",
						"hindi": "उफ़... पर यह भूख... कभी ख़त्म नहीं होती..."
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "거짓된 평온은 사라졌다… 이제 다음이다.",
						"english": "False peace is gone... Now, to the next.",
						"japanese": "偽りの平穏は消えた…次はこれだ。",
						"chinese": "虚假的平静已逝去…现在，是下一个。",
						"french": "La fausse paix a disparu... Maintenant, la suite.",
						"spanish": "La falsa paz se ha ido... Ahora, a lo siguiente.",
						"vietnamese": "Bình yên giả dối đã biến mất... Bây giờ, là tiếp theo.",
						"thai": "ความสงบจอมปลอมหายไปแล้ว... ตอนนี้, คือสิ่งต่อไป.",
						"hindi": "झूठी शांति मिट गई... अब, अगला पड़ाव।"
					},
					"speaker": "ivar",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "의지는 다시 타올랐다. 이바르는 깨달았다. 강함의 끝은 또 다른 시작임을.",
						"english": "Willpower rekindled. Ivar realized. The end of strength is another beginning.",
						"japanese": "意志は再び燃え上がった。イヴァールは悟った。強さの終わりは、また別の始まりであることを。",
						"chinese": "意志再次燃起。伊瓦尔明白了。力量的终点是另一个开始。",
						"french": "La volonté s'est rallumée. Ivar réalisa. La fin de la force est un autre début.",
						"spanish": "La fuerza de voluntad se reavivó. Ivar se dio cuenta. El fin de la fuerza es otro comienzo.",
						"vietnamese": "Ý chí bùng cháy trở lại. Ivar nhận ra. Cái kết của sức mạnh là một khởi đầu mới.",
						"thai": "เจตจำนงลุกโชนอีกครั้ง. ไอฟาร์ตระหนักรู้. จุดสิ้นสุดของความแข็งแกร่งคือการเริ่มต้นใหม่.",
						"hindi": "इच्छाशक्ति फिर से जल उठी। इवर ने महसूस किया। शक्ति का अंत एक और शुरुआत है।"
					},
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "무모한 것들… 이미 너희의 의지는 내 것이다.",
						"english": "Foolish ones... your will is already mine.",
						"japanese": "無謀な者たちめ…お前たちの意志はすでに私のものだ。",
						"chinese": "鲁莽的家伙们……你们的意志已是我的囊中之物。",
						"french": "Imprudents... votre volonté est déjà mienne.",
						"spanish": "Necios... vuestra voluntad ya es mía.",
						"vietnamese": "Những kẻ ngu ngốc... ý chí của các ngươi đã là của ta.",
						"thai": "เจ้าพวกบ้าระห่ำ...เจตจำนงของพวกเจ้าเป็นของข้าแล้ว",
						"hindi": "मूर्खों... तुम्हारी इच्छा पहले ही मेरी है।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "고통 없이 잠들게 해주마… 영원한 평온 속으로…",
						"english": "I will let you sleep without pain... into eternal tranquility...",
						"japanese": "苦痛なく眠らせてやろう…永遠の安らぎの中へ…",
						"chinese": "我会让你们无痛安眠……进入永恒的平静……",
						"french": "Je vous ferai dormir sans douleur... dans une tranquillité éternelle...",
						"spanish": "Os haré dormir sin dolor... en la tranquilidad eterna...",
						"vietnamese": "Ta sẽ cho các ngươi ngủ mà không đau đớn... vào sự bình yên vĩnh cửu...",
						"thai": "ข้าจะให้พวกเจ้าหลับไปโดยไร้ความเจ็บปวด...สู่ความสงบชั่วนิรันดร์...",
						"hindi": "मैं तुम्हें बिना दर्द के सोने दूँगा... अनंत शांति में..."
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "닥쳐! 평온이라니! 이건 기만이다! 나는 끝까지 싸운다!",
						"english": "Silence! Peace? This is deception! I will fight to the end!",
						"japanese": "黙れ！平和だと？これは欺瞞だ！私は最後まで戦う！",
						"chinese": "闭嘴！和平？这是欺骗！我将战斗到底！",
						"french": "Silence ! La paix ? C'est une tromperie ! Je me battrai jusqu'au bout !",
						"spanish": "¡Cállate! ¿Paz? ¡Esto es un engaño! ¡Lucharé hasta el final!",
						"vietnamese": "Im đi! Bình yên ư? Đây là sự lừa dối! Ta sẽ chiến đấu đến cùng!",
						"thai": "หุบปาก! ความสงบงั้นหรือ? นี่มันการหลอกลวง! ข้าจะสู้จนถึงที่สุด!",
						"hindi": "खामोश! शांति? यह धोखा है! मैं अंत तक लडूंगा!"
					},
					"type": "speech",
					"speaker": "ivar",
					"emotion": "angry"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "어리석은 것들… 나약한 의지로 어디까지 버티나 보자.",
						"english": "Fools... Let's see how long your weak wills endure.",
						"japanese": "愚か者ども…その弱き意志でどこまで耐えられるか、見せてもらおう。",
						"chinese": "愚蠢的家伙们…看看你们脆弱的意志能支撑多久。",
						"french": "Imbéciles... Voyons combien de temps vos faibles volontés tiendront.",
						"spanish": "Necios... Veamos cuánto aguantan con vuestra débil voluntad.",
						"vietnamese": "Những kẻ ngốc... Hãy xem ý chí yếu ớt của các ngươi trụ được bao lâu.",
						"thai": "พวกโง่... มาดูกันว่าเจตจำนงอันอ่อนแอของพวกเจ้าจะทนได้นานแค่ไหน.",
						"hindi": "मूर्खों... देखें तुम्हारी कमजोर इच्छाशक्ति कब तक टिकी रहती है।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "젠장… 아직 끝나지 않았어! 다시 일어선다!",
						"english": "Damn it... It's not over yet! I'll rise again!",
						"japanese": "ちくしょう…まだ終わってない！再び立ち上がる！",
						"chinese": "该死…还没结束！我会再次站起来！",
						"french": "Bon sang... Ce n'est pas encore fini ! Je me relèverai !",
						"spanish": "¡Maldita sea... Esto no ha terminado todavía! ¡Me levantaré de nuevo!",
						"vietnamese": "Chết tiệt... Vẫn chưa kết thúc! Ta sẽ đứng dậy lần nữa!",
						"thai": "ให้ตายสิ... ยังไม่จบแค่นี้! ข้าจะลุกขึ้นอีกครั้ง!",
						"hindi": "धिक्कार है... यह अभी ख़त्म नहीं हुआ! मैं फिर से खड़ा होऊंगा!"
					},
					"type": "speech",
					"speaker": "ivar"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"뿔잔의 한기가 눈밭을 지배했다.",
			"그 차가움은 살갗을 넘어, 정신까지 얼려버린다.",
			"의지는 흐려지고, 발걸음은 저절로 뿔잔을 향했다.",
			"하지만 이바르는 이를 악물었다. 강함의 끝은 이런 마비가 아니다."
		],
		"english": [
			"The chill of the Horn Goblet dominated the snowy field.",
			"Its cold pierced beyond the skin, freezing even the mind.",
			"Willpower blurred, and footsteps instinctively headed towards the Horn Goblet.",
			"But Ivar gritted his teeth. This numbness isn't the limit of strength."
		],
		"japanese": [
			"角杯の冷気が雪原を支配した。",
			"その冷たさは肌を通り越し、精神まで凍らせる。",
			"意識は薄れ、足取りは自然と角杯へと向かった。",
			"しかしイヴァルは歯を食いしばった。強さの果ては、こんな麻痺ではない。"
		],
		"chinese": [
			"角杯的寒气笼罩着雪地。",
			"那股寒意穿透皮肤，连精神也一同冻结。",
			"意志模糊，脚步不自觉地走向角杯。",
			"但伊瓦尔咬紧牙关。力量的尽头不该是这种麻痹。"
		],
		"french": [
			"Le froid de la Corne du Gobelet dominait la plaine enneigée.",
			"Ce froid traversait la peau, gelant même l'esprit.",
			"La volonté s'estompa, et les pas se dirigèrent d'eux-mêmes vers le Cor du Gobelet.",
			"Mais Ivar serra les dents. Cette torpeur n'est pas la limite de la force."
		],
		"spanish": [
			"El frío del Cuerno del Cáliz dominaba el campo nevado.",
			"Ese frío traspasaba la piel, congelando incluso la mente.",
			"La voluntad se nubló, y los pasos se dirigieron solos hacia el Cuerno del Cáliz.",
			"Pero Ivar apretó los dientes. Este entumecimiento no es el límite de la fuerza."
		],
		"vietnamese": [
			"Cái lạnh từ Sừng Ly bao trùm lên cánh đồng tuyết.",
			"Cái lạnh ấy xuyên qua da thịt, đóng băng cả tinh thần.",
			"Ý chí mờ dần, bước chân tự động hướng về phía Sừng Ly.",
			"Nhưng Ivar nghiến răng. Sự tê liệt này không phải là giới hạn của sức mạnh."
		],
		"thai": [
			"ความหนาวเย็นจากจอกเขาแผ่ปกคลุมลานหิมะ",
			"ความเย็นยะเยือกนั้นแทรกซึมผ่านผิวหนัง ไปจนถึงจิตใจ",
			"จิตใจเลือนราง ฝีเท้าก้าวเดินสู่จอกเขาโดยไร้การควบคุม",
			"แต่ว่าไอบาร์กัดฟันแน่น จุดจบของความแข็งแกร่งไม่ใช่ความรู้สึกชาเช่นนี้"
		],
		"hindi": [
			"हॉर्न गोब्लेट की ठंडक ने बर्फीले मैदान पर राज किया।",
			"वह ठंडक त्वचा से परे, मन को भी जमा देती है।",
			"इच्छाशक्ति धुंधली हो गई, और कदम अनायास ही हॉर्न गोब्लेट की ओर बढ़ गए।",
			"लेकिन इवार ने दाँत पीसे। यह सुन्नता शक्ति की सीमा नहीं है।"
		]
	}
} as const;
