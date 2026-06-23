export const scenario_modern_staticecho_73_03 = {
	"scenario_id": "modern_staticecho_73_03",
	"order": 3,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"nia": {
			"id": "mon_872177dd-fcf0-40d8-b78c-fd795017c763",
			"name": {
				"korean": "니아",
				"english": "Nia",
				"japanese": "ニア",
				"chinese": "妮娅",
				"french": "Nia",
				"spanish": "Nia",
				"vietnamese": "Nia",
				"thai": "เนีย",
				"hindi": "निया"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/db690f96-d5b3-498a-f4ec-f269e6e95100/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a8fe5d7a-56fe-4822-c272-5a04fd7f4c00/public"
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
					"type": "speech",
					"content": {
						"korean": "StaticEcho의 메시지가 도시를 지배한다. 순응자는 보상받고, 반항자는 고립된다는 소문이 퍼진다.",
						"english": "StaticEcho's messages dominate the city. Rumors spread that conformists are rewarded, and rebels are isolated.",
						"japanese": "StaticEchoのメッセージが都市を支配する。順応者は報われ、反抗者は孤立するという噂が広まる。",
						"chinese": "StaticEcho的信息主宰着城市。有传言称，顺从者受奖励，反抗者被孤立。",
						"french": "Les messages de StaticEcho dominent la ville. Les rumeurs disent que les conformistes sont récompensés et les rebelles isolés.",
						"spanish": "Los mensajes de StaticEcho dominan la ciudad. Corren rumores de que los conformistas son recompensados y los rebeldes, aislados.",
						"vietnamese": "Thông điệp của StaticEcho thống trị thành phố. Tin đồn lan truyền rằng những người tuân thủ sẽ được thưởng, và những kẻ nổi loạn sẽ bị cô lập.",
						"thai": "ข้อความของ StaticEcho ครอบงำเมือง มีข่าวลือแพร่สะพัดว่าผู้ที่ปฏิบัติตามจะได้รับรางวัล ส่วนผู้ต่อต้านจะถูกโดดเดี่ยว",
						"hindi": "StaticEcho के संदेश शहर पर हावी हैं। अफवाहें फैल रही हैं कि अनुरूपता रखने वालों को पुरस्कृत किया जाता है, और विद्रोहियों को अलग-थलग कर दिया जाता है।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "nia",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "nia",
					"type": "speech",
					"content": {
						"korean": "다들 왜 StaticEcho님 말씀을 안 들어? 봐, 나는 또 받았잖아!",
						"english": "Why doesn't everyone listen to StaticEcho? Look, I got another one!",
						"japanese": "みんな、なんでStaticEcho様の言うことを聞かないの？見て、私またもらったんだから！",
						"chinese": "大家为什么不听StaticEcho大人的话？看，我又收到了！",
						"french": "Pourquoi tout le monde n'écoute pas StaticEcho ? Regardez, j'en ai eu un autre !",
						"spanish": "¿Por qué no todos escuchan a StaticEcho? ¡Mira, yo recibí otro!",
						"vietnamese": "Sao mọi người không nghe lời StaticEcho chứ? Nhìn này, tôi lại nhận được nữa rồi!",
						"thai": "ทำไมทุกคนไม่ฟัง StaticEcho เลยล่ะ? ดูสิ ฉันได้มาอีกแล้ว!",
						"hindi": "सब StaticEcho की बात क्यों नहीं सुनते? देखो, मुझे फिर मिला!"
					},
					"emotion": "happy"
				},
				{
					"content": {
						"korean": "또? 뭘 받았다는 거야.",
						"english": "Again? What did you get?",
						"japanese": "また？何をもらったんだよ。",
						"chinese": "又？你收到什么了？",
						"french": "Encore ? Qu'as-tu reçu ?",
						"spanish": "¿Otra vez? ¿Qué recibiste?",
						"vietnamese": "Lại nữa à? Cậu nhận được cái gì vậy?",
						"thai": "อีกแล้วเหรอ? ได้อะไรมาล่ะ",
						"hindi": "फिर? क्या मिला तुम्हें?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "작은 선물이지! StaticEcho님은 복종하는 자에게 상을 내려.",
						"english": "A small gift! StaticEcho rewards those who obey.",
						"japanese": "小さな贈り物さ！StaticEcho様は従順な者に褒美を与えるんだ。",
						"chinese": "一个小礼物！StaticEcho大人会奖励那些服从者。",
						"french": "Un petit cadeau ! StaticEcho récompense ceux qui obéissent.",
						"spanish": "¡Un pequeño regalo! StaticEcho premia a los que obedecen.",
						"vietnamese": "Một món quà nhỏ! StaticEcho ban thưởng cho những ai tuân phục.",
						"thai": "ของขวัญเล็กๆ ไง! StaticEcho ให้รางวัลแก่ผู้ที่เชื่อฟัง",
						"hindi": "एक छोटा सा उपहार! StaticEcho आज्ञाकारी को पुरस्कृत करता है।"
					},
					"speaker": "nia",
					"emotion": "happy"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "nia"
				},
				{
					"speaker": "nia",
					"content": {
						"korean": "그러게 말이야. 왜 다들 아직도 헛소리를 믿는지 모르겠어.",
						"english": "Exactly. I don't know why everyone still believes that nonsense.",
						"japanese": "本当にね。なんでみんなまだそんなデタラメを信じてるのか分からないよ。",
						"chinese": "就是说啊。我不知道为什么大家还在相信那些胡说八道。",
						"french": "Exactement. Je ne comprends pas pourquoi tout le monde croit encore à ces absurdités.",
						"spanish": "Exacto. No sé por qué todos siguen creyendo esas tonterías.",
						"vietnamese": "Đúng vậy. Tôi không hiểu sao mọi người vẫn còn tin vào những điều vô nghĩa đó.",
						"thai": "นั่นสิ. ไม่รู้ทำไมทุกคนถึงยังเชื่อเรื่องไร้สาระพวกนั้นอยู่ได้",
						"hindi": "बिल्कुल। मुझे नहीं पता कि सब अभी भी उस बकवास पर क्यों विश्वास करते हैं।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "근데… 통신망이 마비될 때마다 이상한 문양이 잠깐 나타난대.",
						"english": "But... strange patterns briefly appear every time the network goes down.",
						"japanese": "でも…通信網が麻痺するたびに、奇妙な模様が briefly 現れるらしい。",
						"chinese": "但是……听说每次通讯网络瘫痪时，奇怪的图案都会短暂出现。",
						"french": "Mais... il paraît que des motifs étranges apparaissent brièvement chaque fois que le réseau tombe en panne.",
						"spanish": "Pero... dicen que aparecen extraños patrones brevemente cada vez que la red se cae.",
						"vietnamese": "Nhưng mà... nghe nói mỗi khi mạng bị tê liệt, một hoa văn kỳ lạ lại xuất hiện chốc lát.",
						"thai": "แต่... มีคนบอกว่าลวดลายแปลกๆ จะปรากฏขึ้นชั่วครู่ทุกครั้งที่ระบบสื่อสารล่ม",
						"hindi": "लेकिन... हर बार जब संचार नेटवर्क ठप होता है तो अजीबोगरीब पैटर्न थोड़ी देर के लिए दिखाई देते हैं।"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "그건 반항하는 자들이 지어낸 소문이야! StaticEcho님은 완벽한 질서 그 자체라고!",
						"english": "Those are rumors spread by rebels! Lord StaticEcho is the embodiment of perfect order!",
						"japanese": "それは反抗者たちが作った噂だよ！StaticEcho様は完璧な秩序そのものなんだから！",
						"chinese": "那是反抗者编造的谣言！StaticEcho大人就是完美的秩序本身！",
						"french": "Ce sont des rumeurs propagées par les rebelles ! Maître StaticEcho est l'incarnation de l'ordre parfait !",
						"spanish": "¡Son rumores esparcidos por los rebeldes! ¡Lord StaticEcho es la encarnación del orden perfecto!",
						"vietnamese": "Đó là tin đồn do những kẻ nổi loạn bịa đặt! StaticEcho là hiện thân của trật tự hoàn hảo!",
						"thai": "นั่นเป็นข่าวลือที่พวกกบฏสร้างขึ้น! ท่าน StaticEcho คือระเบียบที่สมบูรณ์แบบ!",
						"hindi": "वो तो विद्रोहियों द्वारा फैलाई गई अफवाहें हैं! स्टैटिकईको स्वामी तो स्वयं पूर्ण व्यवस्था के प्रतीक हैं!"
					},
					"type": "speech",
					"speaker": "nia"
				},
				{
					"emotion": "sad",
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "…니아, 넌 너무 맹목적이야.",
						"english": "...Nia, you're too blindly devoted.",
						"japanese": "…ニア、あなたは盲目すぎるわ。",
						"chinese": "…妮娅，你太盲目了。",
						"french": "...Nia, tu es trop aveuglément dévouée.",
						"spanish": "...Nia, eres demasiado ciega.",
						"vietnamese": "...Nia, cậu quá mù quáng.",
						"thai": "...เนีย เธอช่างตาบอดเหลือเกิน.",
						"hindi": "...निया, तुम बहुत अंधी हो।"
					}
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "nia"
				},
				{
					"type": "speech",
					"content": {
						"korean": "맹목적이라니? 진실을 말하는 건데.",
						"english": "Blindly devoted? I'm speaking the truth.",
						"japanese": "盲目的ですって？真実を言ってるだけよ。",
						"chinese": "盲目？我只是在说实话。",
						"french": "Aveuglément dévouée ? Je dis la vérité.",
						"spanish": "¿Ciega? Solo digo la verdad.",
						"vietnamese": "Mù quáng ư? Tôi đang nói sự thật mà.",
						"thai": "ตาบอดเหรอ? ฉันพูดความจริงนะ.",
						"hindi": "अंधी? मैं तो सच कह रही हूँ।"
					},
					"speaker": "nia",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "StaticEcho 메시지에 '복종'이랑 '질서' 단어가 너무 반복돼.",
						"english": "The words 'obedience' and 'order' are repeated too much in StaticEcho's messages.",
						"japanese": "StaticEcho様のメッセージには、『服従』と『秩序』という言葉が繰り返されすぎてる。",
						"chinese": "StaticEcho 的信息里，'服从'和'秩序'这两个词重复太多了。",
						"french": "Les mots 'obéissance' et 'ordre' sont trop répétés dans les messages de StaticEcho.",
						"spanish": "Las palabras 'obediencia' y 'orden' se repiten demasiado en los mensajes de StaticEcho.",
						"vietnamese": "Trong tin nhắn của StaticEcho, từ 'phục tùng' và 'trật tự' lặp lại quá nhiều.",
						"thai": "คำว่า 'การเชื่อฟัง' และ 'ระเบียบ' ซ้ำกันมากเกินไปในข้อความของ StaticEcho.",
						"hindi": "स्टैटिकईको के संदेशों में 'आज्ञापालन' और 'व्यवस्था' शब्द बहुत अधिक दोहराए गए हैं।"
					},
					"type": "speech"
				},
				{
					"emotion": "happy",
					"content": {
						"korean": "당연하지! 복종해야 질서가 잡히고, 그래야 평화가 오는데!",
						"english": "Of course! Only through obedience comes order, and only then comes peace!",
						"japanese": "当たり前でしょ！服従してこそ秩序が生まれ、そうしてこそ平和が訪れるのよ！",
						"chinese": "当然了！只有服从才有秩序，才能迎来和平！",
						"french": "Bien sûr ! L'ordre vient de l'obéissance, et c'est seulement alors que la paix arrive !",
						"spanish": "¡Claro! ¡Solo a través de la obediencia llega el orden, y solo entonces llega la paz!",
						"vietnamese": "Đương nhiên rồi! Phải phục tùng thì mới có trật tự, rồi mới có hòa bình chứ!",
						"thai": "แน่นอนอยู่แล้ว! การเชื่อฟังนำมาซึ่งระเบียบ และนั่นแหละคือหนทางสู่สันติสุข!",
						"hindi": "बेशक! आज्ञापालन से ही व्यवस्था आती है, और तभी शांति मिलती है!"
					},
					"type": "speech",
					"speaker": "nia"
				},
				{
					"emotion": "sad",
					"speaker": "character_2",
					"type": "speech",
					"content": {
						"korean": "…그 평화가 진짜일까.",
						"english": "...Is that peace truly real?",
						"japanese": "…その平和は、本当なのかな。",
						"chinese": "…那样的和平是真的吗？",
						"french": "...Cette paix est-elle vraiment réelle ?",
						"spanish": "...¿Esa paz es realmente verdadera?",
						"vietnamese": "...Liệu hòa bình đó có thật không?",
						"thai": "...สันติสุขนั้นเป็นเรื่องจริงหรือเปล่า?",
						"hindi": "...क्या वह शांति सच में वास्तविक है?"
					}
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"speaker": "nia",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"speaker": "nia",
					"content": {
						"korean": "저기 봐. StaticEcho님 말을 무시하던 사람이야. 결국 고립됐어.",
						"english": "Look over there. That's someone who ignored Lord StaticEcho's words. They ended up isolated.",
						"japanese": "あれを見て。StaticEcho様の言葉を無視していた人よ。結局孤立したわ。",
						"chinese": "看那边。那是无视StaticEcho大人话语的人。结果被孤立了。",
						"french": "Regarde là-bas. C'est quelqu'un qui a ignoré les paroles de Maître StaticEcho. Il a fini isolé.",
						"spanish": "Mira ahí. Esa es una persona que ignoró las palabras de Lord StaticEcho. Terminó aislado.",
						"vietnamese": "Nhìn kia. Đó là người đã phớt lờ lời của StaticEcho. Cuối cùng họ bị cô lập.",
						"thai": "ดูนั่นสิ นั่นคือคนที่เพิกเฉยต่อคำพูดของท่าน StaticEcho สุดท้ายก็โดดเดี่ยว.",
						"hindi": "वहाँ देखो। वो वो इंसान है जिसने स्टैटिकईको स्वामी की बातों को नज़रअंदाज़ किया। अंततः अलग-थलग पड़ गया।"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "점점 더 심해지는 것 같아. 모두가 서로를 의심해.",
						"english": "It seems to be getting worse. Everyone suspects each other.",
						"japanese": "ますますひどくなってる気がする。みんながお互いを疑ってる。",
						"chinese": "感觉越来越糟了。大家都在互相猜疑。",
						"french": "Ça semble empirer. Tout le monde se méfie les uns des autres.",
						"spanish": "Parece que está empeorando. Todos sospechan unos de otros.",
						"vietnamese": "Có vẻ như mọi thứ đang tệ hơn. Mọi người đều nghi ngờ lẫn nhau.",
						"thai": "ดูเหมือนจะแย่ลงเรื่อยๆ ทุกคนต่างสงสัยกันเอง.",
						"hindi": "लगता है यह और बिगड़ रहा है। सब एक-दूसरे पर शक कर रहे हैं।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "nia",
					"type": "speech",
					"content": {
						"korean": "의심하지 마! 그저 복종하면 되는 일이야. 왜 그걸 몰라?",
						"english": "Don't suspect! It's simply a matter of obedience. Why don't you understand that?",
						"japanese": "疑わないで！ただ服従すればいいだけのことよ。どうしてそれが分からないの？",
						"chinese": "别怀疑！这只是服从的问题。你为什么不明白？",
						"french": "Ne doute pas ! C'est juste une question d'obéissance. Pourquoi ne comprends-tu pas cela ?",
						"spanish": "¡No dudes! Es simplemente una cuestión de obediencia. ¿Por qué no lo entiendes?",
						"vietnamese": "Đừng nghi ngờ! Chỉ cần phục tùng là được. Sao cậu không hiểu?",
						"thai": "อย่าสงสัยเลย! มันเป็นแค่เรื่องของการเชื่อฟัง ทำไมถึงไม่เข้าใจ?",
						"hindi": "शक मत करो! यह केवल आज्ञापालन की बात है। तुम यह क्यों नहीं समझते?"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "…이게 진짜 질서일까?",
						"english": "...Is this truly order?",
						"japanese": "…これが、本当の秩序なのかな？",
						"chinese": "…这真的是秩序吗？",
						"french": "...Est-ce vraiment ça, l'ordre ?",
						"spanish": "...¿Es esto realmente orden?",
						"vietnamese": "...Đây có phải là trật tự thật sự không?",
						"thai": "...นี่คือระเบียบที่แท้จริงหรือ?",
						"hindi": "...क्या यह वास्तव में व्यवस्था है?"
					},
					"type": "speech",
					"speaker": "character_3",
					"emotion": "base"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "도시를 지배하던 디지털 노이즈가 폭풍처럼 몰려온다. 그 중심에 그림자가 서 있다.",
						"english": "Digital noise, ruling the city, surges like a storm. A shadow stands at its heart.",
						"japanese": "都市を支配していたデジタルノイズが嵐のように押し寄せる。その中心に影が立っている。",
						"chinese": "统治城市的数字噪音如暴风般涌来。一个影子矗立其中心。",
						"french": "Le bruit numérique, maître de la ville, déferle comme une tempête. Une ombre se tient en son cœur.",
						"spanish": "El ruido digital que dominaba la ciudad se acerca como una tormenta. Una sombra se alza en su centro.",
						"vietnamese": "Tiếng ồn kỹ thuật số thống trị thành phố ập đến như bão. Một bóng tối đứng giữa tâm bão.",
						"thai": "สัญญาญรบกวนดิจิทัลที่ครอบงำเมืองถาโถมเข้ามาเหมือนพายุ เงาตนหนึ่งยืนอยู่ใจกลาง",
						"hindi": "शहर पर हावी डिजिटल शोर एक तूफान की तरह उमड़ रहा है। उसके केंद्र में एक परछाई खड़ी है।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "환영한다, 반항자들. StaticEcho의 질서에 따르지 않는 대가다.",
						"english": "Welcome, rebels. This is the price for defying StaticEcho's order.",
						"japanese": "ようこそ、反逆者たちよ。StaticEchoの秩序に従わなかった代償だ。",
						"chinese": "欢迎，反抗者们。这是你们违抗StaticEcho秩序的代价。",
						"french": "Bienvenue, rebelles. Voici le prix à payer pour avoir défié l'ordre de StaticEcho.",
						"spanish": "Bienvenidos, rebeldes. Este es el precio por desafiar el orden de StaticEcho.",
						"vietnamese": "Chào mừng, những kẻ nổi loạn. Đây là cái giá cho việc không tuân theo trật tự của StaticEcho.",
						"thai": "ยินดีต้อนรับ เหล่าผู้ขบถ นี่คือค่าตอบแทนของการไม่ปฏิบัติตามคำสั่งของ StaticEcho",
						"hindi": "स्वागत है, विद्रोहियों। यह StaticEcho के आदेश की अवहेलना करने की कीमत है।"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "네가 StaticEcho의 부하인가?",
						"english": "Are you StaticEcho's minion?",
						"japanese": "お前はStaticEchoの手先か？",
						"chinese": "你是StaticEcho的爪牙吗？",
						"french": "Es-tu un sbire de StaticEcho ?",
						"spanish": "¿Eres un secuaz de StaticEcho?",
						"vietnamese": "Ngươi là tay sai của StaticEcho?",
						"thai": "แกเป็นลูกน้องของ StaticEcho งั้นเหรอ?",
						"hindi": "क्या तुम StaticEcho के गुर्गे हो?"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "복종만이 살 길이다. 너희는 그 기회를 놓쳤어.",
						"english": "Obedience is the only way to survive. You missed that chance.",
						"japanese": "服従만이生きる道だ。お前たちはその機会を逃した。",
						"chinese": "服从是唯一的生路。你们错过了那个机会。",
						"french": "L'obéissance est la seule voie de survie. Vous avez raté cette chance.",
						"spanish": "La obediencia es la única forma de sobrevivir. Perdieron esa oportunidad.",
						"vietnamese": "Tuân phục là cách duy nhất để sống sót. Các ngươi đã bỏ lỡ cơ hội đó.",
						"thai": "การเชื่อฟังเท่านั้นคือหนทางรอด พวกเจ้าพลาดโอกาสนั้นไปแล้ว",
						"hindi": "आज्ञाकारिता ही जीवित रहने का एकमात्र मार्ग है। तुमने वह मौका गंवा दिया।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "헛소리 하지 마! 우리가 널 막을 거야.",
						"english": "Don't talk nonsense! We'll stop you.",
						"japanese": "ふざけるな！俺たちが貴様を止める！",
						"chinese": "别胡说八道！我们会阻止你！",
						"french": "Ne dis pas n'importe quoi ! Nous t'arrêterons.",
						"spanish": "¡No digas tonterías! Te detendremos.",
						"vietnamese": "Đừng nói nhảm! Chúng ta sẽ ngăn ngươi lại.",
						"thai": "อย่ามาพูดไร้สาระ! เราจะหยุดแกเอง",
						"hindi": "बकवास मत करो! हम तुम्हें रोकेंगे।"
					},
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "디지털 노이즈가 모든 것을 삼켰다. 도시는 다시 침묵한다.",
						"english": "Digital noise swallowed everything. The city falls silent again.",
						"japanese": "デジタルノイズがすべてを飲み込んだ。都市は再び沈黙する。",
						"chinese": "数字噪音吞噬了一切。城市再次陷入沉寂。",
						"french": "Le bruit numérique a tout englouti. La ville retombe dans le silence.",
						"spanish": "El ruido digital lo devoró todo. La ciudad vuelve a guardar silencio.",
						"vietnamese": "Tiếng ồn kỹ thuật số nuốt chửng mọi thứ. Thành phố lại chìm vào im lặng.",
						"thai": "สัญญาณรบกวนดิจิทัลกลืนกินทุกสิ่ง เมืองกลับมาเงียบสงัดอีกครั้ง",
						"hindi": "डिजिटल शोर ने सब कुछ निगल लिया। शहर फिर से शांत हो गया।"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "봐라. 복종하지 않는 자들의 끝이다. 너희는 그저 무너질 뿐.",
						"english": "Behold. This is the end for those who do not obey. You will simply crumble.",
						"japanese": "見よ。服従せぬ者の末路だ。お前たちはただ崩れ去るのみ。",
						"chinese": "看啊。不服从者的下场。你们只会彻底崩溃。",
						"french": "Regardez. C'est la fin de ceux qui désobéissent. Vous ne ferez que vous effondrer.",
						"spanish": "Mirad. Este es el fin de los que no obedecen. Simplemente os desmoronaréis.",
						"vietnamese": "Hãy nhìn xem. Đây là kết cục của những kẻ không tuân phục. Các ngươi sẽ chỉ sụp đổ mà thôi.",
						"thai": "ดูซะ นี่คือจุดจบของพวกที่ไม่เชื่อฟัง พวกเจ้าจะพังทลายลงไปเท่านั้นเอง",
						"hindi": "देखो। यह उन लोगों का अंत है जो आज्ञा का पालन नहीं करते। तुम बस बिखर जाओगे।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…아직 끝나지 않았어. 우리는 포기하지 않아.",
						"english": "...It's not over yet. We won't give up.",
						"japanese": "…まだ終わってない。私たちは諦めない。",
						"chinese": "……还没结束。我们不会放弃。",
						"french": "...Ce n'est pas encore fini. Nous n'abandonnerons pas.",
						"spanish": "...Aún no ha terminado. No nos rendiremos.",
						"vietnamese": "...Chưa kết thúc đâu. Chúng ta sẽ không bỏ cuộc.",
						"thai": "...ยังไม่จบหรอก เราไม่ยอมแพ้",
						"hindi": "...अभी खत्म नहीं हुआ है। हम हार नहीं मानेंगे।"
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "크크… 겨우 이런 걸 넘었다고… 기고만장해하지 마라.",
						"english": "Heh heh... Just because you overcame this... don't get conceited.",
						"japanese": "クク…こんなものを乗り越えたくらいで…増長するなよ。",
						"chinese": "呵呵…就凭这点成就…别太得意忘形了。",
						"french": "Haha… Ce n'est pas parce que vous avez surmonté ça… que vous devez vous vanter.",
						"spanish": "Jeje... Solo porque superaste esto... no te confíes.",
						"vietnamese": "Khà khà… Mới vượt qua được thế này… đừng có tự mãn.",
						"thai": "ฮ่าๆ... แค่ผ่านเรื่องแค่นี้... อย่าเหลิงไปหน่อยเลย",
						"hindi": "ही ही... सिर्फ इसलिए कि तुमने इसे पार कर लिया... घमंडी मत बनो।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "진정한 혼란은, 너희가 진실을 마주했을 때 시작될 테니…",
						"english": "True chaos will begin when you face the truth...",
						"japanese": "真の混乱は、お前たちが真実を目の当たりにした時に始まるのだから…",
						"chinese": "真正的混乱，将在你们面对真相时开始…",
						"french": "Le véritable chaos commencera quand vous ferez face à la vérité...",
						"spanish": "El verdadero caos comenzará cuando te enfrentes a la verdad...",
						"vietnamese": "Hỗn loạn thực sự sẽ bắt đầu khi các ngươi đối mặt với sự thật…",
						"thai": "ความโกลาหลที่แท้จริงจะเริ่มต้นขึ้นเมื่อพวกเจ้าเผชิญหน้ากับความจริง...",
						"hindi": "असली अराजकता तब शुरू होगी, जब तुम सच का सामना करोगे..."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "진실? 무슨 소리야?",
						"english": "Truth? What are you talking about?",
						"japanese": "真実？何を言っているんだ？",
						"chinese": "真相？你在说什么？",
						"french": "La vérité ? De quoi parles-tu ?",
						"spanish": "¿Verdad? ¿De qué hablas?",
						"vietnamese": "Sự thật? Ngươi đang nói gì vậy?",
						"thai": "ความจริง? นายกำลังพูดอะไร?",
						"hindi": "सच? तुम क्या कह रहे हो?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "StaticEcho의 소문은 더욱 깊어진다. 다음 퍼즐은 더욱 충격적일 것이다.",
						"english": "Rumors of StaticEcho deepen. The next puzzle will be even more shocking.",
						"japanese": "StaticEchoの噂はさらに深まる。次のパズルはもっと衝撃的だろう。",
						"chinese": "StaticEcho的传闻更加深入了。下一个谜题将更加令人震惊。",
						"french": "Les rumeurs de StaticEcho s'épaississent. Le prochain puzzle sera encore plus choquant.",
						"spanish": "Los rumores de StaticEcho se profundizan. El próximo puzle será aún más impactante.",
						"vietnamese": "Tin đồn về StaticEcho ngày càng sâu sắc. Câu đố tiếp theo sẽ còn gây sốc hơn.",
						"thai": "ข่าวลือของ StaticEcho ยิ่งลึกซึ้งขึ้น ปริศนาต่อไปจะยิ่งน่าตกใจ",
						"hindi": "StaticEcho की अफवाहें और गहरी होती जा रही हैं। अगली पहेली और भी चौंकाने वाली होगी।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"도시는 소문에 잠식되었다.",
			"StaticEcho의 메시지에 순응하면, 기묘한 보상이 따른다.",
			"하지만 반항하는 자들에게는 사회적 고립이 시작될 것이다.",
			"니아는 그 소문을 맹신했고, 다른 이들을 비난하기 시작했다."
		],
		"english": [
			"The city was consumed by rumors.",
			"Conform to StaticEcho's messages, and strange rewards follow.",
			"But for those who defy, social isolation will begin.",
			"Nia blindly believed the rumors and began to blame others."
		],
		"japanese": [
			"都市は噂に蝕まれた。",
			"StaticEchoのメッセージに従えば、奇妙な報酬が待つ。",
			"しかし、反抗する者には社会的孤立が始まるだろう。",
			"ニアはその噂を盲信し、他者を非難し始めた。"
		],
		"chinese": [
			"城市被谣言吞噬了。",
			"顺从StaticEcho的信息，奇异的奖励随之而来。",
			"但对那些反抗者，社会孤立将开始。",
			"妮娅盲目相信了谣言，并开始指责他人。"
		],
		"french": [
			"La ville fut envahie par les rumeurs.",
			"Conformez-vous aux messages de StaticEcho, et d'étranges récompenses suivront.",
			"Mais pour ceux qui défient, l'isolement social commencera.",
			"Nia crut aveuglément les rumeurs et commença à blâmer les autres."
		],
		"spanish": [
			"La ciudad fue consumida por los rumores.",
			"Conforme a los mensajes de StaticEcho, y extrañas recompensas le seguirán.",
			"Pero para aquellos que desafían, el aislamiento social comenzará.",
			"Nia creyó ciegamente los rumores y empezó a culpar a los demás."
		],
		"vietnamese": [
			"Thành phố chìm trong tin đồn.",
			"Tuân theo thông điệp của StaticEcho, những phần thưởng kỳ lạ sẽ đến.",
			"Nhưng với những kẻ chống đối, sự cô lập xã hội sẽ bắt đầu.",
			"Nia mù quáng tin vào tin đồn và bắt đầu đổ lỗi cho người khác."
		],
		"thai": [
			"เมืองถูกกลืนกินด้วยข่าวลือ",
			"ยอมทำตามข้อความของ StaticEcho แล้วรางวัลแปลกๆ จะตามมา",
			"แต่สำหรับผู้ที่ต่อต้าน การถูกตัดขาดจากสังคมจะเริ่มต้นขึ้น",
			"เนียเชื่อข่าวลืออย่างไม่ลืมหูลืมตา และเริ่มตำหนิคนอื่น"
		],
		"hindi": [
			"शहर अफवाहों से घिर गया।",
			"StaticEcho के संदेशों का पालन करें, और अजीब पुरस्कार मिलेंगे।",
			"लेकिन जो विद्रोही हैं, उनके लिए सामाजिक अलगाव शुरू हो जाएगा।",
			"निया ने अफवाहों पर आंख मूंदकर विश्वास किया और दूसरों को दोष देने लगी।"
		]
	}
} as const;
