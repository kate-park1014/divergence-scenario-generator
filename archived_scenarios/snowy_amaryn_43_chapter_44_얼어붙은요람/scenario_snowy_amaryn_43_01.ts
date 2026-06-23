export const scenario_snowy_amaryn_43_01 = {
	"scenario_id": "snowy_amaryn_43_01",
	"order": 1,
	"act": "intro",
	"theme": "snowy",
	"actors": {
		"eira": {
			"id": "mon_0c37c014-b5ca-4f2f-ad03-5d393e5b2eb1",
			"name": {
				"korean": "에이라",
				"english": "Eira",
				"japanese": "エイラ",
				"chinese": "艾拉",
				"french": "Eira",
				"spanish": "Eira",
				"vietnamese": "Eira",
				"thai": "ไอรา",
				"hindi": "ऐरा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8e2970b7-bcb1-4b1c-6bf0-93106b373500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/0ca1ec09-a624-450f-054a-b98de58bdb00/public"
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
					"content": {
						"korean": "혹독한 눈보라가 모든 것을 집어삼킬 듯 몰아쳤다.",
						"english": "The fierce blizzard raged, threatening to swallow everything.",
						"japanese": "猛烈な吹雪が全てを飲み込むかのように吹き荒れた。",
						"chinese": "凛冽的暴风雪肆虐，仿佛要吞噬一切。",
						"french": "Le blizzard féroce faisait rage, menaçant d'engloutir tout.",
						"spanish": "La feroz ventisca arremetía, amenazando con engullir todo.",
						"vietnamese": "Trận bão tuyết dữ dội hoành hành, như muốn nuốt chửng mọi thứ.",
						"thai": "พายุหิมะที่รุนแรงโหมกระหน่ำราวกับจะกลืนกินทุกสิ่ง",
						"hindi": "भीषण बर्फीला तूफ़ान raging, सब कुछ निगलने की धमकी दे रहा था।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "더 이상은… 한 발짝도 움직일 수 없어.",
						"english": "No more... I can't move another step.",
						"japanese": "もう…一歩も動けない。",
						"chinese": "再也…寸步难行了。",
						"french": "Plus un pas... Je ne peux plus bouger.",
						"spanish": "Ya no más... No puedo moverme un paso más.",
						"vietnamese": "Không thể nữa rồi... Tôi không thể đi thêm một bước nào.",
						"thai": "ไม่ไหวแล้ว... ขยับไม่ได้แม้แต่ก้าวเดียว",
						"hindi": "और नहीं… मैं एक कदम भी नहीं चल सकता।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "어서 와요. 지쳐 보이는군요.",
						"english": "Welcome. You look exhausted.",
						"japanese": "ようこそ。お疲れのようですね。",
						"chinese": "欢迎。你看起来很疲惫。",
						"french": "Bienvenue. Vous avez l'air épuisé.",
						"spanish": "Bienvenido. Pareces agotado.",
						"vietnamese": "Chào mừng. Bạn trông kiệt sức.",
						"thai": "ยินดีต้อนรับ คุณดูเหนื่อยล้ามาก",
						"hindi": "स्वागत है। तुम थके हुए लग रहे हो।"
					},
					"speaker": "eira",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이곳은 아마린의 안식처. 모든 고통이 사라지는 곳.",
						"english": "This is Amarin's sanctuary. A place where all suffering disappears.",
						"japanese": "ここはアマリンの安息所。全ての苦痛が消え去る場所。",
						"chinese": "这里是阿玛琳的安息之所。所有痛苦都将消失的地方。",
						"french": "C'est le sanctuaire d'Amarin. Un lieu où toutes les souffrances disparaissent.",
						"spanish": "Este es el santuario de Amarin. Un lugar donde todo sufrimiento desaparece.",
						"vietnamese": "Đây là nơi trú ẩn của Amarin. Một nơi mà mọi đau khổ đều biến mất.",
						"thai": "ที่นี่คือสถานที่ศักดิ์สิทธิ์ของอมรินทร์ สถานที่ที่ความทุกข์ทั้งหมดหายไป",
						"hindi": "यह अमारिन का अभयारण्य है। एक ऐसी जगह जहाँ सभी पीड़ाएँ गायब हो जाती हैं।"
					},
					"speaker": "eira",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira",
					"type": "direction",
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "동굴 안은 은은한 온기로 가득했다. 얼음 속에서 피어나는 기이한 따스함.",
						"english": "The cave was filled with a subtle warmth. A strange warmth blooming from within the ice.",
						"japanese": "洞窟の中はほのかな温かさに満ちていた。氷の中から湧き出る奇妙な暖かさ。",
						"chinese": "洞穴内充满了淡淡的暖意。一种从冰中散发出的奇特温暖。",
						"french": "La grotte était remplie d'une chaleur subtile. Une étrange chaleur émanant de la glace.",
						"spanish": "La cueva estaba llena de una calidez sutil. Una extraña calidez que brotaba del hielo.",
						"vietnamese": "Hang động tràn ngập một hơi ấm dịu nhẹ. Một sự ấm áp kỳ lạ nở rộ từ bên trong băng.",
						"thai": "ภายในถ้ำเต็มไปด้วยความอบอุ่นที่ละเอียดอ่อน ความอบอุ่นแปลกประหลาดที่ผลิบานจากน้ำแข็ง",
						"hindi": "गुफा एक हल्की गर्मी से भरी थी। बर्फ के भीतर से निकलती एक अजीब गर्मी।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "happy",
					"speaker": "character_any",
					"content": {
						"korean": "몸이 녹는 것 같아… 정말 따뜻해.",
						"english": "My body feels like it's melting... so warm.",
						"japanese": "体が溶けていくみたい…すごく温かい。",
						"chinese": "身体好像要融化了…真温暖。",
						"french": "Mon corps fond... si chaud.",
						"spanish": "Mi cuerpo se derrite... qué cálido.",
						"vietnamese": "Cơ thể tôi như tan chảy... ấm áp quá.",
						"thai": "ร่างกายฉันเหมือนจะละลาย... อบอุ่นจังเลย",
						"hindi": "मेरा शरीर पिघल रहा है... बहुत गर्म है।"
					}
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "걱정 마세요. 모든 고통은 여기서 끝날 거예요.",
						"english": "Don't worry. All pain will end here.",
						"japanese": "ご心配なく。全ての苦痛はここで終わります。",
						"chinese": "别担心。所有的痛苦都会在这里结束。",
						"french": "Ne vous inquiétez pas. Toute douleur prendra fin ici.",
						"spanish": "No te preocupes. Todo el dolor terminará aquí.",
						"vietnamese": "Đừng lo. Mọi đau đớn sẽ kết thúc ở đây.",
						"thai": "ไม่ต้องห่วง ทุกความเจ็บปวดจะสิ้นสุดลงที่นี่",
						"hindi": "चिंता मत करो। सारा दर्द यहीं खत्म हो जाएगा।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_1",
					"content": {
						"korean": "…근데 이상해. 심장이… 차가워지는 것 같아.",
						"english": "...But it's strange. My heart... feels like it's growing cold.",
						"japanese": "…でも変だ。心臓が…冷たくなっていくみたいだ。",
						"chinese": "…但很奇怪。心脏…好像在变冷。",
						"french": "...Mais c'est étrange. Mon cœur... semble se refroidir.",
						"spanish": "...Pero es extraño. Mi corazón... parece enfriarse.",
						"vietnamese": "...Nhưng lạ quá. Tim tôi... như đang lạnh dần.",
						"thai": "...แต่แปลกจัง หัวใจ... เหมือนกำลังเย็นลง",
						"hindi": "...लेकिन अजीब है। मेरा दिल... ठंडा पड़ रहा है।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "eira",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "완벽한 평화. 그러나 어딘가에서 희미한 울음소리가 들려오는 듯했다.",
						"english": "Perfect peace. Yet, a faint crying seemed to emanate from somewhere.",
						"japanese": "完璧な平和。しかし、どこからか微かな泣き声が聞こえるようだった。",
						"chinese": "完美的平静。然而，仿佛从某个地方传来微弱的哭泣声。",
						"french": "Paix parfaite. Pourtant, un faible sanglot semblait venir de quelque part.",
						"spanish": "Paz perfecta. Sin embargo, un débil llanto parecía provenir de algún lugar.",
						"vietnamese": "Bình yên tuyệt đối. Nhưng dường như từ đâu đó vọng lại tiếng khóc yếu ớt.",
						"thai": "ความสงบที่สมบูรณ์แบบ ทว่าเสียงร้องไห้แผ่วเบาเล็ดลอดมาจากที่ใดที่หนึ่ง",
						"hindi": "परम शांति। फिर भी, कहीं से एक धीमी रोने की आवाज़ आती महसूस हुई।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이 소리는… 대체 뭐지?",
						"english": "This sound... what could it be?",
						"japanese": "この音は…一体何だ？",
						"chinese": "这声音…到底是什么？",
						"french": "Ce son... qu'est-ce que c'est ?",
						"spanish": "Este sonido... ¿qué podrá ser?",
						"vietnamese": "Tiếng động này... rốt cuộc là gì?",
						"thai": "เสียงนี้... มันคืออะไรกันแน่?",
						"hindi": "यह आवाज़... आखिर क्या है?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "그건 지나간 고통의 잔재예요. 곧 사라질 거예요.",
						"english": "That's the remnant of past pain. It will soon vanish.",
						"japanese": "それは過ぎ去った苦痛の残滓です。すぐに消え去るでしょう。",
						"chinese": "那是逝去痛苦的残余。很快就会消失的。",
						"french": "C'est le vestige d'une douleur passée. Il disparaîtra bientôt.",
						"spanish": "Es el remanente del dolor pasado. Pronto desaparecerá.",
						"vietnamese": "Đó là tàn dư của nỗi đau đã qua. Nó sẽ sớm biến mất thôi.",
						"thai": "นั่นคือเศษซากของความเจ็บปวดที่ผ่านไป มันจะหายไปในไม่ช้า",
						"hindi": "वह बीते हुए दर्द का अवशेष है। वह जल्द ही गायब हो जाएगा।"
					},
					"speaker": "eira",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "여기선 아무도 아프지 않아요. 영원히.",
						"english": "No one hurts here. Ever.",
						"japanese": "ここでは誰も苦しみません。永遠に。",
						"chinese": "这里没有人会受伤。永远不会。",
						"french": "Ici, personne ne souffre. Jamais.",
						"spanish": "Aquí nadie sufre. Jamás.",
						"vietnamese": "Ở đây không ai đau khổ. Mãi mãi.",
						"thai": "ที่นี่ไม่มีใครเจ็บปวด ตลอดไป",
						"hindi": "यहां कोई दर्द नहीं होता। हमेशा के लिए।"
					}
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira",
					"type": "direction",
					"spot": [
						4,
						3
					]
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "더 이상 못 가겠어… 몸이 점점 굳어가는 것 같아.",
						"english": "I can't go on... my body feels like it's stiffening.",
						"japanese": "もうこれ以上は無理だ…体がだんだん固まっていくようだ。",
						"chinese": "我再也走不动了…身体好像越来越僵硬。",
						"french": "Je n'en peux plus... mon corps semble se raidir.",
						"spanish": "No puedo seguir... mi cuerpo se siente cada vez más rígido.",
						"vietnamese": "Tôi không thể đi tiếp được nữa... cơ thể như đang cứng đờ ra.",
						"thai": "ฉันไปต่อไม่ไหวแล้ว... ร่างกายเหมือนจะแข็งทื่อขึ้นเรื่อยๆ",
						"hindi": "मैं अब और नहीं चल सकता... मेरा शरीर अकड़ता जा रहा है।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "괜찮아요. 그건 안식으로 가는 과정일 뿐.",
						"english": "It's alright. It's just a process toward rest.",
						"japanese": "大丈夫ですよ。それは安息へと向かう過程に過ぎません。",
						"chinese": "没关系。那只是通往安息的过程而已。",
						"french": "Tout va bien. Ce n'est qu'un processus vers le repos.",
						"spanish": "Está bien. Es solo un proceso hacia el descanso.",
						"vietnamese": "Không sao đâu. Đó chỉ là quá trình dẫn đến sự an nghỉ thôi.",
						"thai": "ไม่เป็นไรหรอก นั่นเป็นเพียงกระบวนการไปสู่การพักผ่อนเท่านั้น",
						"hindi": "ठीक है। यह बस आराम की ओर बढ़ने की प्रक्रिया है।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "모든 것을 내려놓고, 이 따스함에 몸을 맡기세요.",
						"english": "Let everything go, and surrender yourself to this warmth.",
						"japanese": "全てを解き放ち、この温かさに身を委ねてください。",
						"chinese": "放下一切，将自己完全托付给这份温暖吧。",
						"french": "Lâchez tout, et abandonnez-vous à cette chaleur.",
						"spanish": "Déjalo todo, y entrégate a esta calidez.",
						"vietnamese": "Hãy buông bỏ mọi thứ, và phó mặc mình cho sự ấm áp này.",
						"thai": "ละทิ้งทุกสิ่ง และมอบกายให้ความอบอุ่นนี้",
						"hindi": "सब कुछ छोड़ दो, और इस गरमाहट में खुद को सौंप दो।"
					},
					"speaker": "eira",
					"type": "speech"
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
						"korean": "크윽… 겨우 이 정도라니… 하지만 이건… 시작일 뿐이다…",
						"english": "Ugh... Is this all you've got...? But this is... only the beginning...",
						"japanese": "ぐっ…たかがこれしきとは…だが、これは…始まりにすぎない…",
						"chinese": "呃…就这点程度吗…但这…只是个开始…",
						"french": "Argh… Juste ça… Mais ce n'est… qu'un début…",
						"spanish": "Ugh... ¿Solo esto...? Pero esto es... solo el principio...",
						"vietnamese": "Khụ… Chỉ có thế này thôi sao… Nhưng đây… chỉ là khởi đầu mà thôi…",
						"thai": "อึก... แค่นี้เองหรือ... แต่นี่มัน... แค่เริ่มต้นเท่านั้น...",
						"hindi": "उफ़... बस इतना ही...? लेकिन यह तो... सिर्फ़ शुरुआत है..."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "시작이라고? 무슨 소리야!",
						"english": "The beginning? What are you talking about!",
						"japanese": "始まりだと？何を言っているんだ！",
						"chinese": "开始？你在说什么！",
						"french": "Un début ? De quoi parles-tu !",
						"spanish": "¿El principio? ¡De qué hablas!",
						"vietnamese": "Khởi đầu ư? Ngươi đang nói gì vậy!",
						"thai": "เริ่มต้นเหรอ? พูดอะไรน่ะ!",
						"hindi": "शुरुआत? क्या बक रहे हो!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "쓰러진 그림자. 그러나 동굴의 차가운 온기는 여전히 진실을 숨기고 있었다.",
						"english": "The shadow fell. Yet, the cave's cold warmth still hid the truth.",
						"japanese": "倒れた影。しかし、洞窟の冷たい温もりは、依然として真実を隠していた。",
						"chinese": "倒下的身影。然而，洞穴冰冷的温暖依旧隐藏着真相。",
						"french": "L'ombre tomba. Pourtant, la froide chaleur de la grotte cachait toujours la vérité.",
						"spanish": "La sombra cayó. Sin embargo, la fría calidez de la cueva aún ocultaba la verdad.",
						"vietnamese": "Cái bóng đổ gục. Tuy nhiên, sự ấm áp lạnh lẽo của hang động vẫn ẩn giấu sự thật.",
						"thai": "เงาล้มลง ทว่า ความอบอุ่นอันเยือกเย็นของถ้ำยังคงซ่อนเร้นความจริงเอาไว้",
						"hindi": "परछाई गिर गई। फिर भी, गुफा की ठंडी गर्माहट अभी भी सच्चाई को छिपा रही थी।"
					},
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "보잘것없는 저항… 결국 너희도 안식에 잠길 것이다.",
						"english": "Futile resistance... In the end, you too shall fall into slumber.",
						"japanese": "取るに足らぬ抵抗…結局お前たちも安息に沈むだろう。",
						"chinese": "微不足道的抵抗…最终，你们也将沉入安息。",
						"french": "Résistance futile… Au final, vous aussi sombrerez dans le repos.",
						"spanish": "Resistencia inútil... Al final, vosotros también caeréis en el descanso.",
						"vietnamese": "Sự kháng cự yếu ớt… Cuối cùng, các ngươi cũng sẽ chìm vào giấc ngủ vĩnh hằng.",
						"thai": "การต่อต้านที่ไร้ค่า... สุดท้ายแล้ว พวกเจ้าก็จะจมดิ่งสู่การพักผ่อน",
						"hindi": "तुच्छ प्रतिरोध... अंततः, तुम भी शांति में लीन हो जाओगे।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "…아직 아니야. 우리는… 멈추지 않아.",
						"english": "...Not yet. We... won't stop.",
						"japanese": "…まだだ。我々は…止まらない。",
						"chinese": "…还没。我们…不会停止。",
						"french": "…Pas encore. Nous… ne nous arrêterons pas.",
						"spanish": "...Aún no. Nosotros... no nos detendremos.",
						"vietnamese": "…Chưa đâu. Chúng ta… sẽ không dừng lại.",
						"thai": "...ยังไม่หยุดหรอก. พวกเรา... จะไม่หยุด.",
						"hindi": "...अभी नहीं। हम... रुकेंगे नहीं।"
					}
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "점점 깊어지는 동굴. 그 끝에서 거대한 그림자가 나타났다.",
						"english": "The cave deepens. At its end, a colossal shadow appeared.",
						"japanese": "洞窟は深く。その果てに、巨大な影が現れた。",
						"chinese": "洞穴渐深。其尽头，一道巨大的身影显现。",
						"french": "La grotte s'enfonce. À son terme, une ombre colossale apparut.",
						"spanish": "La cueva se adentra más. Al final, apareció una sombra gigantesca.",
						"vietnamese": "Hang động ngày càng sâu. Cuối cùng, một cái bóng khổng lồ xuất hiện.",
						"thai": "ถ้ำลึกขึ้นเรื่อยๆ ที่ปลายทางนั้น มีเงาขนาดมหึมาปรากฏขึ้น",
						"hindi": "गुफा गहरी होती जा रही है। उसके अंत में, एक विशाल छाया प्रकट हुई।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "감히, 아마린의 안식을 방해하는 자는 누구인가.",
						"english": "Who dares disturb Amarin's slumber?",
						"japanese": "敢えて、アマリンの安息を妨げる者は誰だ。",
						"chinese": "竟敢，是谁胆敢打扰阿玛林斯的安息？",
						"french": "Qui ose troubler le repos d'Amarin ?",
						"spanish": "¿Quién se atreve a perturbar el descanso de Amarin?",
						"vietnamese": "Kẻ nào dám phá vỡ sự yên nghỉ của Amarin?",
						"thai": "ใครบังอาจมารบกวนการพักผ่อนของอมาริน?",
						"hindi": "कौन है जो अमायरीन की नींद में खलल डालने की हिम्मत करता है?"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "네가 이 거짓된 평화를 지키는 자로군.",
						"english": "So, you're the one guarding this false peace.",
						"japanese": "お前がこの偽りの平和を守る者か。",
						"chinese": "原来，你就是守护这虚假和平之人。",
						"french": "C'est donc toi qui protèges cette fausse paix.",
						"spanish": "Así que eres tú quien protege esta falsa paz.",
						"vietnamese": "Ngươi chính là kẻ bảo vệ sự bình yên giả dối này.",
						"thai": "เจ้าคือผู้พิทักษ์สันติภาพลวงโลกนี้เอง",
						"hindi": "तो, तुम ही हो जो इस झूठी शांति की रक्षा कर रहे हो।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이곳은 진정한 구원이다. 어리석은 자들.",
						"english": "This is true salvation. Fools.",
						"japanese": "こここそ真の救済だ。愚か者どもめ。",
						"chinese": "此乃真正的救赎。愚蠢之徒。",
						"french": "Ceci est le véritable salut. Imbéciles.",
						"spanish": "Esto es la verdadera salvación. Necios.",
						"vietnamese": "Đây mới là sự cứu rỗi thật sự. Những kẻ ngu ngốc.",
						"thai": "นี่แหละคือความรอดที่แท้จริง พวกโง่เง่า!",
						"hindi": "यह सच्ची मुक्ति है। मूर्खों।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"영원한 눈보라가 몰아치는 설원.",
			"길을 잃은 자들에게 기적처럼 나타난 것은—",
			"따뜻해 보이는 얼음 동굴과 신비로운 여인의 속삭임이었다.",
			"이곳은 모든 고통이 사라지는 '영원한 안식처'.",
			"그러나, 안식의 그림자 속에서 차가운 진실이 움트고 있었다."
		],
		"english": [
			"A snowfield scourged by an eternal blizzard.",
			"What miraculously appeared before those who had lost their way—",
			"A seemingly warm ice cave and the whisper of a mysterious woman.",
			"This is the 'Eternal Sanctuary' where all suffering vanishes.",
			"However, within the shadow of rest, a cold truth was budding."
		],
		"japanese": [
			"永遠の吹雪が吹き荒れる雪原。",
			"道を失った者たちの前に奇跡のように現れたのは—",
			"暖かそうな氷の洞窟と、神秘的な女性の囁きだった。",
			"ここは全ての苦痛が消え去る「永遠の安息所」。",
			"しかし、安息の影の中で、冷たい真実が芽生え始めていた。"
		],
		"chinese": [
			"永恒暴雪肆虐的雪原。",
			"奇迹般出现在迷途者面前的，是—",
			"一座看似温暖的冰洞，以及一位神秘女子的低语。",
			"这里是所有痛苦都将消失的“永恒安息之地”。",
			"然而，在安息的阴影中，一个冰冷的真相正在萌芽。"
		],
		"french": [
			"Une plaine enneigée balayée par un blizzard éternel.",
			"Ce qui apparut miraculeusement à ceux qui avaient perdu leur chemin—",
			"Une grotte de glace apparemment chaude et le murmure d'une femme mystérieuse.",
			"C'est le « Sanctuaire Éternel » où toutes les souffrances disparaissent.",
			"Cependant, dans l'ombre du repos, une froide vérité germait."
		],
		"spanish": [
			"Un campo de nieve azotado por una ventisca eterna.",
			"Lo que apareció milagrosamente ante los que habían perdido el camino—",
			"Una cueva de hielo aparentemente cálida y el susurro de una mujer misteriosa.",
			"Este es el 'Santuario Eterno' donde todo sufrimiento desaparece.",
			"Sin embargo, en la sombra del descanso, una fría verdad estaba brotando."
		],
		"vietnamese": [
			"Một cánh đồng tuyết bị bão tuyết vĩnh cửu tàn phá.",
			"Điều kỳ diệu xuất hiện trước những người lạc lối—",
			"Một hang động băng trông ấm áp và lời thì thầm của một người phụ nữ bí ẩn.",
			"Đây là 'Nơi Trú Ẩn Vĩnh Cửu' nơi mọi đau khổ tan biến.",
			"Tuy nhiên, trong bóng tối của sự nghỉ ngơi, một sự thật lạnh lùng đang nảy mầm."
		],
		"thai": [
			"ทุ่งหิมะที่ถูกพายุหิมะนิรันดร์พัดกระหน่ำ",
			"สิ่งที่ปรากฏขึ้นอย่างปาฏิหาริย์ต่อหน้าผู้หลงทางคือ—",
			"ถ้ำน้ำแข็งที่ดูอบอุ่นและเสียงกระซิบของหญิงสาวลึกลับ",
			"ที่นี่คือ 'สถานศักดิ์สิทธิ์นิรันดร์' ที่ซึ่งความทุกข์ทั้งหมดจะหายไป",
			"อย่างไรก็ตาม ภายใต้เงาแห่งการพักผ่อน ความจริงอันเย็นชาก็กำลังผลิบาน"
		],
		"hindi": [
			"एक बर्फीला मैदान जहाँ शाश्वत बर्फीला तूफ़ान चल रहा है।",
			"राह भटके हुए लोगों के सामने चमत्कारिक रूप से जो प्रकट हुआ—",
			"एक प्रतीत होता गर्म बर्फीली गुफा और एक रहस्यमयी महिला की फुसफुसाहट।",
			"यह 'शाश्वत आश्रय' है जहाँ सभी पीड़ाएँ समाप्त हो जाती हैं।",
			"हालांकि, आराम की छाया में, एक कड़वी सच्चाई उभर रही थी।"
		]
	}
} as const;
