export const scenario_snowy_chrysalis_55_01 = {
	"scenario_id": "snowy_chrysalis_55_01",
	"order": 1,
	"act": "intro",
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
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "얼음으로 뒤덮인 황무지. 고대 바이킹 문명의 흔적이 얼어붙어 있었다.",
						"english": "An ice-covered wasteland. Traces of an ancient Viking civilization frozen in time.",
						"japanese": "氷に覆われた荒野。古代ヴァイキング文明の痕跡が凍りついていた。",
						"chinese": "冰雪覆盖的荒原。古老的维京文明痕迹被冻结。",
						"french": "Une terre désolée couverte de glace. Des traces d'une ancienne civilisation viking gelées dans le temps.",
						"spanish": "Un páramo cubierto de hielo. Huellas de una antigua civilización vikinga congeladas en el tiempo.",
						"vietnamese": "Một vùng đất hoang phủ đầy băng giá. Dấu vết của một nền văn minh Viking cổ đại bị đóng băng trong thời gian.",
						"thai": "ดินแดนรกร้างที่ปกคลุมด้วยน้ำแข็ง ร่องรอยอารยธรรมไวกิ้งโบราณถูกแช่แข็ง",
						"hindi": "बर्फ से ढका बंजर भूमि। एक प्राचीन वाइकिंग सभ्यता के निशान समय में जम गए थे।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "저게… 전설의 오로라?",
						"english": "Is that... the legendary aurora?",
						"japanese": "あれが…伝説のオーロラか？",
						"chinese": "那…就是传说中的极光？",
						"french": "C'est... l'aurore légendaire ?",
						"spanish": "¿Es eso... la aurora legendaria?",
						"vietnamese": "Đó là... cực quang huyền thoại sao?",
						"thai": "นั่นคือ... แสงเหนือในตำนานใช่ไหม?",
						"hindi": "क्या वह... पौराणिक ध्रुवीय प्रकाश है?"
					},
					"emotion": "base"
				},
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "anuk",
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "anuk",
					"content": {
						"korean": "맞아. 잊혀진 탐험대의 마지막 흔적은 저 환상의 오로라 지대에 있다.",
						"english": "Yes. The last traces of the forgotten expedition lie in that fantastical aurora zone.",
						"japanese": "そうだ。忘れ去られた探検隊の最後の痕跡は、あの幻想的なオーロラ地帯にある。",
						"chinese": "没错。被遗忘的探险队最后的痕迹，就在那片梦幻极光区。",
						"french": "Oui. Les dernières traces de l'expédition oubliée se trouvent dans cette zone d'aurores fantastique.",
						"spanish": "Sí. Las últimas huellas de la expedición olvidada se encuentran en esa fantástica zona de aurora.",
						"vietnamese": "Đúng vậy. Dấu vết cuối cùng của đoàn thám hiểm bị lãng quên nằm trong vùng cực quang huyền ảo đó.",
						"thai": "ใช่ ร่องรอยสุดท้ายของคณะสำรวจที่ถูกลืมเลือนอยู่ในเขตแสงเหนืออันน่าอัศจรรย์นั้น",
						"hindi": "हाँ। भूले हुए अभियान के आखिरी निशान उस शानदार ध्रुवीय प्रकाश क्षेत्र में हैं।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "약속대로, 내가 그대들을 인도할 것이다.",
						"english": "As promised, I shall guide you.",
						"japanese": "約束通り、私があなたたちを導こう。",
						"chinese": "如约，我将引导你们。",
						"french": "Comme promis, je vous guiderai.",
						"spanish": "Como prometido, los guiaré.",
						"vietnamese": "Như đã hứa, ta sẽ dẫn lối cho các ngươi.",
						"thai": "ตามที่สัญญาไว้ ข้าจะนำทางพวกเจ้า",
						"hindi": "वादे के अनुसार, मैं तुम्हें मार्गदर्शन करूँगा।"
					},
					"emotion": "base",
					"speaker": "anuk",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "드디어 희망이 보이는 것 같아.",
						"english": "Finally, hope seems to glimmer.",
						"japanese": "ついに希望が見えてきたようだ。",
						"chinese": "终于，希望似乎出现了。",
						"french": "Enfin, l'espoir semble poindre.",
						"spanish": "Finalmente, la esperanza parece vislumbrarse.",
						"vietnamese": "Cuối cùng, hy vọng dường như đã hé lộ.",
						"thai": "ในที่สุด ความหวังก็ดูเหมือนจะส่องประกาย",
						"hindi": "अंततः, आशा की किरण दिखाई देने लगी है।"
					},
					"emotion": "happy",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "anuk",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "이곳은 고대 바이킹의 유적. 오래전, 이곳에 삶의 흔적이 있었다.",
						"english": "This is an ancient Viking ruin. Long ago, traces of life existed here.",
						"japanese": "ここは古代ヴァイキングの遺跡。遠い昔、ここに生命の痕跡があった。",
						"chinese": "这里是古老的维京遗迹。很久以前，这里曾有生命的痕迹。",
						"french": "C'est une ancienne ruine viking. Il y a longtemps, des traces de vie existaient ici.",
						"spanish": "Esto es una antigua ruina vikinga. Hace mucho tiempo, existieron aquí rastros de vida.",
						"vietnamese": "Đây là một tàn tích Viking cổ đại. Rất lâu trước đây, dấu vết của sự sống đã tồn tại ở đây.",
						"thai": "นี่คือซากปรักหักพังของไวกิ้งโบราณ นานมาแล้ว ที่นี่เคยมีร่องรอยของชีวิต",
						"hindi": "यह एक प्राचीन वाइकिंग खंडहर है। बहुत पहले, यहां जीवन के निशान मौजूद थे।"
					},
					"emotion": "base",
					"speaker": "anuk"
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "여기… 이상한 문자가 새겨져 있어.",
						"english": "Strange characters are carved here.",
						"japanese": "ここ…奇妙な文字が刻まれている。",
						"chinese": "这里…刻着奇怪的文字。",
						"french": "Ici... d'étranges caractères sont gravés.",
						"spanish": "Aquí... hay caracteres extraños grabados.",
						"vietnamese": "Ở đây... có những ký tự lạ được khắc.",
						"thai": "ที่นี่... มีอักษรประหลาดแกะสลักอยู่",
						"hindi": "यहाँ... अजीब अक्षर खुदे हुए हैं।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "희미하게 진동하는 것 같아. 착각인가?",
						"english": "It seems to vibrate faintly. Am I mistaken?",
						"japanese": "微かに振動しているようだ。錯覚か？",
						"chinese": "似乎在微弱地颤动。是错觉吗？",
						"french": "Ça semble vibrer faiblement. Est-ce une illusion ?",
						"spanish": "Parece vibrar débilmente. ¿Es mi imaginación?",
						"vietnamese": "Dường như nó rung động nhẹ. Có phải tôi nhầm không?",
						"thai": "เหมือนจะสั่นสะเทือนเบาๆ หรือฉันคิดไปเอง?",
						"hindi": "यह हल्का-हल्का कंपन करता हुआ लग रहा है। क्या यह मेरा वहम है?"
					},
					"emotion": "base",
					"speaker": "character_2"
				},
				{
					"speaker": "anuk",
					"content": {
						"korean": "차가운 공기 때문일 거야. 잊혀진 기록일 뿐. 아무것도 아니다.",
						"english": "It must be the cold air. Just forgotten records. It's nothing.",
						"japanese": "冷たい空気のせいだろう。忘れられた記録に過ぎない。何でもない。",
						"chinese": "这一定是冷空气的缘故。只是一些被遗忘的记录。没什么。",
						"french": "C'est sûrement à cause de l'air froid. Juste des enregistrements oubliés. Ce n'est rien.",
						"spanish": "Debe ser por el aire frío. Solo son registros olvidados. No es nada.",
						"vietnamese": "Chắc là do không khí lạnh thôi. Chỉ là những ghi chép bị lãng quên. Không có gì đâu.",
						"thai": "คงเป็นเพราะอากาศหนาวนั่นแหละ ก็แค่บันทึกที่ถูกลืม ไม่มีอะไรหรอก",
						"hindi": "यह ठंडी हवा की वजह से होगा। बस भूले हुए रिकॉर्ड हैं। कुछ भी नहीं है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "으스스하네.",
						"english": "It's eerie.",
						"japanese": "不気味だね。",
						"chinese": "真令人毛骨悚然。",
						"french": "C'est étrange.",
						"spanish": "Qué espeluznante.",
						"vietnamese": "Thật rùng rợn.",
						"thai": "น่าขนลุกจัง",
						"hindi": "यह डरावना है।"
					},
					"emotion": "sad",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "anuk"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "오로라가 정말 아름다워. 이렇게 선명한 건 처음 봐.",
						"english": "The aurora is truly beautiful. I've never seen it so vivid.",
						"japanese": "オーロラが本当に美しい。こんなに鮮やかなのは初めて見た。",
						"chinese": "极光真美。我从未见过如此清晰的。",
						"french": "L'aurore est vraiment magnifique. Je ne l'ai jamais vue aussi vive.",
						"spanish": "La aurora es realmente hermosa. Nunca la había visto tan vívida.",
						"vietnamese": "Cực quang thật sự rất đẹp. Tôi chưa bao giờ thấy nó rõ ràng đến thế.",
						"thai": "แสงออโรร่าสวยงามมาก ฉันไม่เคยเห็นมันชัดเจนขนาดนี้มาก่อนเลย",
						"hindi": "ध्रुवीय ज्योति सचमुच बहुत सुंदर है। मैंने इसे इतना स्पष्ट कभी नहीं देखा।"
					},
					"emotion": "happy",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_3",
					"content": {
						"korean": "잠깐… 뭔가 들리지 않아?",
						"english": "Wait... don't you hear something?",
						"japanese": "待って…何か聞こえない？",
						"chinese": "等等…你没听到什么吗？",
						"french": "Attends... tu n'entends rien ?",
						"spanish": "Espera... ¿no oyes algo?",
						"vietnamese": "Khoan đã… cậu không nghe thấy gì sao?",
						"thai": "เดี๋ยวนะ... เธอไม่ได้ยินอะไรเหรอ?",
						"hindi": "रुको... क्या तुम्हें कुछ सुनाई नहीं दे रहा?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "마치… 얼어붙은 비명소리 같아.",
						"english": "It's like... a frozen scream.",
						"japanese": "まるで…凍りついた悲鳴のようだ。",
						"chinese": "就像…冰冻的尖叫声一样。",
						"french": "C'est comme... un cri gelé.",
						"spanish": "Es como... un grito congelado.",
						"vietnamese": "Nó cứ như… tiếng hét bị đóng băng vậy.",
						"thai": "มันเหมือนกับ... เสียงกรีดร้องที่แข็งค้าง",
						"hindi": "यह मानो... जमी हुई चीख हो।"
					},
					"emotion": "sad",
					"speaker": "character_4"
				},
				{
					"type": "speech",
					"speaker": "anuk",
					"content": {
						"korean": "추위에 얼어붙은 환청일 뿐. 이 지대는 그런 소문이 많지.",
						"english": "It's just a hallucination frozen by the cold. This area has many such rumors.",
						"japanese": "寒さで凍りついた幻聴に過ぎない。この地域にはそんな噂が多い。",
						"chinese": "这只是被寒冷冻结的幻听。这片区域有很多这样的传闻。",
						"french": "Ce n'est qu'une hallucination figée par le froid. Cette zone est pleine de telles rumeurs.",
						"spanish": "Es solo una alucinación congelada por el frío. Esta zona tiene muchos rumores así.",
						"vietnamese": "Chỉ là ảo thanh bị đóng băng bởi cái lạnh thôi. Khu vực này có nhiều lời đồn như vậy.",
						"thai": "ก็แค่เสียงหลอนที่ถูกแช่แข็งด้วยความหนาว พื้นที่แถบนี้มีข่าวลือแบบนั้นเยอะแยะ",
						"hindi": "यह बस ठंड से जमी हुई एक मतिभ्रम है। इस क्षेत्र में ऐसी कई अफवाहें हैं।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "하지만 너무 생생한데…",
						"english": "But it feels too real...",
						"japanese": "でも、あまりにも生々しい…",
						"chinese": "但感觉太真实了…",
						"french": "Mais c'est trop réel...",
						"spanish": "Pero se siente demasiado real...",
						"vietnamese": "Nhưng nó quá sống động…",
						"thai": "แต่มันสมจริงเกินไปนะ...",
						"hindi": "परंतु यह बहुत जीवंत लग रहा है..."
					},
					"emotion": "base",
					"speaker": "character_any"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "anuk",
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "점점 더 추워지는 것 같아. 오로라 빛도 더 강렬해지고.",
						"english": "It feels like it's getting colder. And the aurora's light is getting more intense.",
						"japanese": "どんどん寒くなっているようだ。オーロラの光もさらに強烈に。",
						"chinese": "感觉越来越冷了。极光的光芒也越来越强烈。",
						"french": "Il semble faire de plus en plus froid. La lumière de l'aurore devient aussi plus intense.",
						"spanish": "Parece que hace cada vez más frío. La luz de la aurora también se vuelve más intensa.",
						"vietnamese": "Hình như càng ngày càng lạnh hơn. Ánh sáng cực quang cũng trở nên mạnh mẽ hơn.",
						"thai": "รู้สึกเหมือนอากาศจะหนาวขึ้นเรื่อยๆ แสงออโรร่าก็ยิ่งเข้มข้นขึ้นด้วย",
						"hindi": "मुझे लग रहा है कि ठंड बढ़ती जा रही है। और ध्रुवीय ज्योति की रोशनी भी और तीव्र होती जा रही है।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "아눅, 정말 여기가 우리가 찾는 곳이 맞아? 뭔가 잘못된 것 같아.",
						"english": "Anuk, is this really the place we're looking for? Something feels wrong.",
						"japanese": "アヌク、本当にここが私たちが探している場所なの？何かがおかしい気がする。",
						"chinese": "阿努克，这里真的是我们找的地方吗？感觉有些不对劲。",
						"french": "Anuk, est-ce vraiment l'endroit que nous cherchons ? Quelque chose cloche.",
						"spanish": "Anuk, ¿es este realmente el lugar que buscamos? Algo no cuadra.",
						"vietnamese": "Anuk, đây thực sự là nơi chúng ta tìm kiếm à? Có gì đó không đúng.",
						"thai": "อานุก นี่คือที่ที่เราตามหาจริงๆ เหรอ? รู้สึกเหมือนมีบางอย่างผิดปกติ",
						"hindi": "अनूक, क्या वाकई यही वो जगह है जिसे हम ढूंढ रहे हैं? कुछ गड़बड़ लग रही है।"
					},
					"emotion": "sad",
					"speaker": "character_1",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "계약은 계약. 나는 그대들을 약속의 장소로 인도하고 있다.",
						"english": "A contract is a contract. I am leading you to the promised place.",
						"japanese": "契約は契約。私はお前たちを約束の場所へと導いている。",
						"chinese": "契约就是契约。我正引领你们前往约定的地点。",
						"french": "Un contrat est un contrat. Je vous mène au lieu promis.",
						"spanish": "Un contrato es un contrato. Los estoy llevando al lugar prometido.",
						"vietnamese": "Giao kèo là giao kèo. Ta đang dẫn các ngươi đến nơi đã hứa.",
						"thai": "สัญญาคือสัญญา ข้ากำลังนำพวกเจ้าไปยังสถานที่ที่ได้สัญญาไว้",
						"hindi": "समझौता, समझौता ही है। मैं तुम्हें वादे की जगह पर ले जा रहा हूँ।"
					},
					"emotion": "base",
					"speaker": "anuk"
				},
				{
					"type": "speech",
					"content": {
						"korean": "두려워 말라. 진실은 곧 밝혀질 테니.",
						"english": "Fear not. The truth will soon be revealed.",
						"japanese": "恐れるな。真実は間もなく明らかになるだろう。",
						"chinese": "不要害怕。真相很快就会揭晓。",
						"french": "Ne craignez rien. La vérité sera bientôt révélée.",
						"spanish": "No temáis. La verdad pronto será revelada.",
						"vietnamese": "Đừng sợ. Sự thật sẽ sớm được phơi bày thôi.",
						"thai": "อย่ากลัวเลย ความจริงจะถูกเปิดเผยในไม่ช้า",
						"hindi": "डरो मत। सच जल्द ही सामने आ जाएगा।"
					},
					"emotion": "base",
					"speaker": "anuk"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "아름다운 오로라는 탐험대를 더 깊은 미궁으로 유혹하고 있었다.",
						"english": "The beautiful aurora was luring the expedition deeper into the labyrinth.",
						"japanese": "美しいオーロラは、探検隊をさらに深い迷宮へと誘い込んでいた。",
						"chinese": "美丽的极光将探险队诱惑到更深的迷宫中。",
						"french": "La magnifique aurore entraînait l'expédition plus profondément dans le labyrinthe.",
						"spanish": "La hermosa aurora estaba atrayendo a la expedición más profundamente en el laberinto.",
						"vietnamese": "Ánh cực quang tuyệt đẹp đang quyến rũ đoàn thám hiểm tiến sâu hơn vào mê cung.",
						"thai": "แสงเหนือที่สวยงามกำลังล่อลวงคณะสำรวจให้เข้าไปในเขาวงกตที่ลึกขึ้น",
						"hindi": "खूबसूरत ऑरोरा अभियान दल को और गहरे भूलभुलैया में खींच रहा था।"
					},
					"emotion": "base"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "크크… 겨우 이 정도라니… 진짜 주인은 따로 있다.",
						"english": "Heh... Is this all you've got? The true master is elsewhere.",
						"japanese": "クク…この程度とは…真の主は別にいる。",
						"chinese": "呵呵……就这点本事吗……真正的主人另有其人。",
						"french": "Hé hé... C'est tout ce que vous avez ? Le véritable maître est ailleurs.",
						"spanish": "Jeje... ¿Esto es todo lo que tenéis? El verdadero amo está en otra parte.",
						"vietnamese": "Khà khà... Chỉ có thế này thôi sao... Chủ nhân thật sự vẫn còn đó.",
						"thai": "คิกๆ… แค่เนี่ยเองเหรอ… เจ้าของที่แท้จริงน่ะอยู่ที่อื่นต่างหาก",
						"hindi": "हूँ हूँ... बस इतना ही? असली मालिक कहीं और है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "무슨 소리야? 잡았다!",
						"english": "What was that? Gotcha!",
						"japanese": "何を言っている？捕らえたぞ！",
						"chinese": "你说什么？抓到你了！",
						"french": "Qu'est-ce que tu racontes ? Je t'ai eu !",
						"spanish": "¿Qué dices? ¡Te tengo!",
						"vietnamese": "Ngươi nói gì? Bắt được ngươi rồi!",
						"thai": "พูดอะไรน่ะ? จับได้แล้ว!",
						"hindi": "क्या बकवास है? पकड़ लिया!"
					},
					"emotion": "happy",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"spot": [
						4,
						3
					],
					"speaker": "anuk",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "승리 축하한다. 그러나 계약은 아직 끝나지 않았다.",
						"english": "Congratulations on your victory. However, the contract is not yet over.",
						"japanese": "勝利を祝おう。だが、契約はまだ終わっていない。",
						"chinese": "恭喜你取得胜利。然而，契约尚未结束。",
						"french": "Félicitations pour votre victoire. Cependant, le contrat n'est pas encore terminé.",
						"spanish": "Felicidades por tu victoria. Sin embargo, el contrato aún no ha terminado.",
						"vietnamese": "Chúc mừng chiến thắng. Tuy nhiên, khế ước vẫn chưa kết thúc.",
						"thai": "ขอแสดงความยินดีกับชัยชนะ แต่สัญญายังไม่สิ้นสุด",
						"hindi": "तुम्हारी जीत पर बधाई। हालांकि, अनुबंध अभी खत्म नहीं हुआ है।"
					},
					"emotion": "base",
					"speaker": "anuk",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "정체 모를 존재를 물리쳤지만, 탐험대의 마음속에는 싸늘한 의문만 남았다.",
						"english": "The unknown entity was defeated, but only a chilling question remained in the explorers' hearts.",
						"japanese": "正体不明の存在を打ち倒したが、探検隊の心には冷たい疑問だけが残った。",
						"chinese": "击败了不明身份的存在，但探险队的心中只剩下了一个冰冷的疑问。",
						"french": "L'entité inconnue fut vaincue, mais seul un doute glaçant subsistait dans le cœur des explorateurs.",
						"spanish": "La entidad desconocida fue derrotada, pero solo una gélida pregunta permaneció en los corazones de los exploradores.",
						"vietnamese": "Thực thể vô danh đã bị đánh bại, nhưng trong lòng đoàn thám hiểm chỉ còn lại một câu hỏi lạnh lẽo.",
						"thai": "สิ่งลึกลับถูกปราบลงได้ แต่ในใจของคณะสำรวจกลับเหลือเพียงคำถามที่เย็นยะเยือก",
						"hindi": "अज्ञात इकाई को हरा दिया गया था, लेकिन खोजकर्ताओं के दिलों में केवल एक भयावह प्रश्न शेष था।"
					},
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "오로라는 여전히 환상처럼 빛나고 있었다. 그 아름다움 아래, 더 큰 진실이 숨겨진 채로.",
						"english": "The aurora still glowed like a phantom. Beneath its beauty, a greater truth lay hidden.",
						"japanese": "オーロラは依然として幻想のように輝いていた。その美しさの下には、さらに大きな真実が隠されたまま。",
						"chinese": "极光依然如幻影般闪耀。在其美丽之下，一个更大的真相隐藏着。",
						"french": "L'aurore brillait toujours comme un fantôme. Sous sa beauté, une vérité plus grande restait cachée.",
						"spanish": "La aurora seguía brillando como un fantasma. Bajo su belleza, una verdad más grande permanecía oculta.",
						"vietnamese": "Bắc cực quang vẫn rực rỡ như ảo ảnh. Dưới vẻ đẹp đó, một sự thật lớn hơn vẫn còn ẩn giấu.",
						"thai": "แสงออโรร่ายังคงส่องประกายราวกับภาพลวงตา ภายใต้ความงดงามนั้น ความจริงที่ยิ่งใหญ่กว่ายังคงซ่อนเร้นอยู่",
						"hindi": "ध्रुवीय ज्योति अभी भी एक प्रेत की तरह चमक रही थी। उसकी सुंदरता के नीचे, एक बड़ी सच्चाई छिपी हुई थी।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "어리석은 것들… 진정한 겨울은 아직 시작되지 않았다.",
						"english": "Fools... The true winter has not yet begun.",
						"japanese": "愚か者どもめ…真の冬はまだ始まっていない。",
						"chinese": "愚蠢的东西……真正的冬天还没有开始。",
						"french": "Imbéciles... Le véritable hiver n'a pas encore commencé.",
						"spanish": "¡Necios! El verdadero invierno aún no ha comenzado.",
						"vietnamese": "Đồ ngu ngốc... Mùa đông thật sự còn chưa bắt đầu.",
						"thai": "พวกโง่เง่า… ฤดูหนาวที่แท้จริงยังไม่เริ่มต้นขึ้นเลย",
						"hindi": "मूर्ख... असली सर्दी अभी शुरू नहीं हुई है।"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "크윽… 포기하지 않아! 반드시…!",
						"english": "Ugh... I won't give up! I must...!",
						"japanese": "ぐっ…諦めない！必ず…！",
						"chinese": "呃……我不会放弃的！我一定要……！",
						"french": "Ugh... Je n'abandonnerai pas ! Je dois... !",
						"spanish": "¡Ugh...! ¡No me rendiré! ¡Debo...!",
						"vietnamese": "Khụ... Ta sẽ không bỏ cuộc! Nhất định...!",
						"thai": "อึก… ไม่ยอมแพ้หรอก! จะต้อง…!",
						"hindi": "उफ़... मैं हार नहीं मानूँगा! मुझे ज़रूर...!"
					},
					"emotion": "angry"
				},
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "anuk",
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "…아직, 계약은 유효하다.",
						"english": "...The contract is still valid.",
						"japanese": "…まだ、契約は有効だ。",
						"chinese": "……契约，仍然有效。",
						"french": "...Le contrat est toujours valide.",
						"spanish": "...El contrato sigue siendo válido.",
						"vietnamese": "...Khế ước vẫn còn hiệu lực.",
						"thai": "…สัญญายังคงมีผลบังคับใช้",
						"hindi": "...अनुबंध अभी भी वैध है।"
					},
					"emotion": "base",
					"speaker": "anuk"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "얼음의 환영이 모든 것을 집어삼켰다. 탐험대는 다시 일어서야 했다.",
						"english": "The illusion of ice swallowed everything. The expedition had to rise again.",
						"japanese": "氷の幻影がすべてを飲み込んだ。探検隊は再び立ち上がらねばならなかった。",
						"chinese": "冰之幻影吞噬了一切。探险队必须再次振作起来。",
						"french": "L'illusion de glace a tout englouti. L'expédition devait se relever.",
						"spanish": "La ilusión de hielo lo engulló todo. La expedición tuvo que levantarse de nuevo.",
						"vietnamese": "Ảo ảnh băng giá nuốt chửng mọi thứ. Đoàn thám hiểm phải đứng dậy một lần nữa.",
						"thai": "ภาพมายาแห่งน้ำแข็งกลืนกินทุกสิ่ง คณะสำรวจต้องลุกขึ้นยืนอีกครั้ง",
						"hindi": "बर्फ के भ्रम ने सब कुछ निगल लिया। अभियान को फिर से उठना पड़ा।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "오로라의 중심부. 모든 빛이 뒤틀리는 곳에, 거대한 그림자가 나타났다.",
						"english": "The heart of the aurora. Where all light twisted, a colossal shadow appeared.",
						"japanese": "オーロラの中心部。すべての光が歪む場所に、巨大な影が現れた。",
						"chinese": "极光的核心。在所有光线扭曲之处，一个巨大的身影出现了。",
						"french": "Le cœur de l'aurore. Là où toute lumière se tordait, une ombre colossale apparut.",
						"spanish": "El corazón de la aurora. Donde toda la luz se retorcía, apareció una sombra colosal.",
						"vietnamese": "Trung tâm của cực quang. Nơi mọi ánh sáng bị bóp méo, một bóng tối khổng lồ xuất hiện.",
						"thai": "ใจกลางของแสงเหนือ ที่ซึ่งแสงทุกชนิดบิดเบี้ยว เงาขนาดมหึมาได้ปรากฏขึ้น",
						"hindi": "ऑरोरा का केंद्र। जहाँ सारी रोशनी मुड़ती थी, एक विशाल छाया प्रकट हुई।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "감히 여기까지 온 것이냐, 미약한 존재들.",
						"english": "You dare come this far, you insignificant beings?",
						"japanese": "愚かにもここまで来たか、取るに足らない存在どもめ。",
						"chinese": "你们这些渺小的存在，竟敢来到这里？",
						"french": "Osez-vous venir jusqu'ici, êtres insignifiants ?",
						"spanish": "¿Os atrevéis a llegar tan lejos, seres insignificantes?",
						"vietnamese": "Các ngươi dám đến tận đây sao, những kẻ yếu ớt?",
						"thai": "พวกเจ้าผู้ต่ำต้อย กล้าดียังไงถึงมาได้ไกลถึงเพียงนี้?",
						"hindi": "क्या तुम यहाँ तक आने की हिम्मत करते हो, तुच्छ प्राणियों?"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "네가… 이 오로라의 주인이냐!",
						"english": "You… are you the master of this aurora!",
						"japanese": "お前が…このオーロラの主なのか！",
						"chinese": "你就是……这极光的主人！",
						"french": "Toi… es-tu le maître de cette aurore ?",
						"spanish": "¡Tú… eres el amo de esta aurora!",
						"vietnamese": "Ngươi… là chủ nhân của cực quang này sao!",
						"thai": "แก... เป็นเจ้าของแสงเหนือนี้หรือ!",
						"hindi": "तुम… क्या तुम इस ऑरोरा के मालिक हो!"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "나는 그저… 영원한 겨울의 일부일 뿐.",
						"english": "I am merely… a part of the eternal winter.",
						"japanese": "私はただ…永遠の冬の一部に過ぎない。",
						"chinese": "我只不过是……永恒冬季的一部分。",
						"french": "Je ne suis que… une partie de l'hiver éternel.",
						"spanish": "Yo solo soy… una parte del invierno eterno.",
						"vietnamese": "Ta chỉ là… một phần của mùa đông vĩnh cửu thôi.",
						"thai": "ข้าเป็นเพียง… ส่วนหนึ่งของฤดูหนาวอันเป็นนิรันดร์",
						"hindi": "मैं बस… शाश्वत शीतकाल का एक हिस्सा हूँ।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "anuk"
				},
				{
					"type": "speech",
					"speaker": "anuk",
					"content": {
						"korean": "…그대들의 계약은 이제 시작이다.",
						"english": "…Your contract begins now.",
						"japanese": "…お前たちの契約は今、始まる。",
						"chinese": "……你们的契约现在开始。",
						"french": "…Votre contrat commence maintenant.",
						"spanish": "…Vuestro contrato comienza ahora.",
						"vietnamese": "…Giao kèo của các ngươi giờ đây mới bắt đầu.",
						"thai": "...สัญญาของพวกเจ้ากำลังจะเริ่มต้นขึ้นแล้ว",
						"hindi": "…तुम्हारा अनुबंध अब शुरू होता है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "아눅의 말과 함께, 정체 모를 보스가 탐험대를 덮쳤다.",
						"english": "With Anuk's words, an unknown boss ambushed the expedition.",
						"japanese": "アヌクの言葉と共に、正体不明のボスが探検隊を襲った。",
						"chinese": "随着阿努克的话语，一个不明身份的Boss袭击了探险队。",
						"french": "Aux paroles d'Anuk, un boss inconnu attaqua l'expédition.",
						"spanish": "Con las palabras de Anuk, un jefe desconocido emboscó a la expedición.",
						"vietnamese": "Cùng với lời nói của Anuk, một tên trùm bí ẩn đã tấn công đoàn thám hiểm.",
						"thai": "พร้อมกับคำพูดของอานุก หัวหน้าปริศนาได้เข้าโจมตีคณะสำรวจ",
						"hindi": "अनूक के शब्दों के साथ, एक अज्ञात बॉस ने अभियान दल पर हमला किया।"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"영원한 겨울이 지배하는 북극의 황무지.",
			"전설의 안식처를 찾아, 탐험대는 환상의 오로라 지대로 향한다.",
			"그곳에서, 잊혀진 바이킹 유적과 경이로운 빛이 그들을 맞이했다.",
			"그러나 아름다움 뒤에는, 감춰진 비명과 끔찍한 진실이 기다리고 있었다."
		],
		"english": [
			"Arctic wasteland, ruled by eternal winter.",
			"Seeking a legendary haven, the expedition heads for the fabled aurora zone.",
			"There, forgotten Viking ruins and wondrous light greeted them.",
			"Yet, behind the beauty, hidden screams and a terrible truth awaited."
		],
		"japanese": [
			"永遠の冬に支配された北極の荒野。",
			"伝説の安息の地を求め、探検隊は幻想的なオーロラ地帯へ向かう。",
			"そこで、忘れ去られたヴァイキング遺跡と驚異的な光が彼らを迎えた。",
			"しかし、その美しさの裏には、隠された叫び声と恐ろしい真実が待ち受けていた。"
		],
		"chinese": [
			"永恒之冬统治的北极荒原。",
			"为寻传说中的安息之地，探险队前往梦幻极光区。",
			"在那里，被遗忘的维京遗迹与奇迹之光迎接了他们。",
			"然而，美景背后，隐藏的尖叫与可怕的真相正等待着。"
		],
		"french": [
			"Une terre désolée arctique, régie par un hiver éternel.",
			"À la recherche d'un havre légendaire, l'expédition se dirige vers la zone des aurores boréales.",
			"Là, des ruines vikings oubliées et une lumière merveilleuse les attendaient.",
			"Cependant, derrière la beauté, des cris cachés et une terrible vérité attendaient."
		],
		"spanish": [
			"Páramo ártico, dominado por el invierno eterno.",
			"En busca de un refugio legendario, la expedición se dirige a la zona de la aurora.",
			"Allí, ruinas vikingas olvidadas y una luz maravillosa los recibieron.",
			"Sin embargo, tras la belleza, gritos ocultos y una terrible verdad aguardaban."
		],
		"vietnamese": [
			"Vùng đất hoang Bắc Cực, bị thống trị bởi mùa đông vĩnh cửu.",
			"Tìm kiếm một nơi trú ẩn huyền thoại, đoàn thám hiểm hướng về vùng cực quang thần thoại.",
			"Tại đó, những tàn tích Viking bị lãng quên và ánh sáng kỳ diệu đã chào đón họ.",
			"Tuy nhiên, đằng sau vẻ đẹp, những tiếng hét ẩn giấu và một sự thật kinh hoàng đang chờ đợi."
		],
		"thai": [
			"ดินแดนรกร้างอาร์กติก ปกครองโดยฤดูหนาวนิรันดร์",
			"คณะสำรวจมุ่งหน้าสู่เขตแสงเหนือในตำนาน เพื่อค้นหาที่พักพิงในตำนาน",
			"ที่นั่น ซากปรักหักพังไวกิ้งที่ถูกลืมเลือนและแสงอันน่าอัศจรรย์ได้ต้อนรับพวกเขา",
			"แต่เบื้องหลังความงามนั้น มีเสียงกรีดร้องที่ซ่อนอยู่และความจริงอันน่าสะพรึงกลัวรออยู่"
		],
		"hindi": [
			"आर्कटिक बंजर भूमि, शाश्वत शीतकाल से शासित।",
			"एक पौराणिक आश्रय की तलाश में, अभियान दल अद्भुत और काल्पनिक ध्रुवीय प्रकाश क्षेत्र की ओर बढ़ता है।",
			"वहां, भूले हुए वाइकिंग खंडहरों और अद्भुत प्रकाश ने उनका स्वागत किया।",
			"फिर भी, सुंदरता के पीछे, छिपी हुई चीखें और एक भयानक सच्चाई प्रतीक्षा कर रही थी।"
		]
	}
} as const;
