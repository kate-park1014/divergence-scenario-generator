export const scenario_hell_hush_23_05 = {
	"scenario_id": "hell_hush_23_05",
	"order": 5,
	"act": "climax_finale",
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
		"pool_id": "pool_Nightmare_Hush_V1"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "끈적하고 어두운 공간. 비명과 절규가 끊이지 않았다.",
						"english": "A viscous, dark space. Screams and wails were incessant.",
						"japanese": "粘り気のある暗い空間。悲鳴と叫び声が絶えなかった。",
						"chinese": "黏稠黑暗的空间。尖叫和哀嚎声不绝于耳。",
						"french": "Un espace visqueux et sombre. Les cris et les lamentations étaient incessants.",
						"spanish": "Un espacio viscoso y oscuro. Los gritos y lamentos eran incesantes.",
						"vietnamese": "Một không gian dính nhớp và tối tăm. Tiếng la hét và gào thét không ngừng.",
						"thai": "พื้นที่เหนียวเหนอะหนะและมืดมิด เสียงกรีดร้องและโหยหวนไม่หยุดหย่อน",
						"hindi": "एक चिपचिपा, अँधेरा स्थान। चीखें और कराहें लगातार आ रही थीं।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…여기까지가 끝인가.",
						"english": "...Is this the end?",
						"japanese": "…ここまでが終わりなのか。",
						"chinese": "……到此为止了吗？",
						"french": "…Est-ce la fin ?",
						"spanish": "...¿Es este el fin?",
						"vietnamese": "...Đến đây là hết rồi sao?",
						"thai": "...นี่คือจุดจบแล้วหรือเปล่า",
						"hindi": "...क्या यहीं अंत है?"
					}
				},
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "ash",
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "ash",
					"emotion": "base",
					"content": {
						"korean": "결국 여기까지 왔구나… 나의 작은 희망.",
						"english": "So you've come this far... my little hope.",
						"japanese": "結局ここまで来たか…私の小さな希望よ。",
						"chinese": "终究还是走到这一步了……我的小希望。",
						"french": "Tu es finalement arrivé jusqu'ici... ma petite lueur d'espoir.",
						"spanish": "Al final llegaste hasta aquí... mi pequeña esperanza.",
						"vietnamese": "Cuối cùng em cũng đến được đây... niềm hy vọng nhỏ bé của ta.",
						"thai": "ในที่สุดเจ้าก็มาถึงที่นี่... ความหวังเล็กๆ ของข้า",
						"hindi": "आखिरकार तुम यहाँ तक आ ही गए... मेरी नन्ही आशा।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "애쉬? 네가 왜 여기에…",
						"english": "Ash? Why are you here...?",
						"japanese": "アッシュ？なぜここに…",
						"chinese": "艾什？你为什么会在这里……",
						"french": "Ash ? Pourquoi es-tu ici... ?",
						"spanish": "¿Ash? ¿Por qué estás aquí...?",
						"vietnamese": "Ash? Sao ngươi lại ở đây...?",
						"thai": "แอช? ทำไมเจ้าถึงมาอยู่ที่นี่...",
						"hindi": "ऐश? तुम यहाँ क्यों हो...?"
					}
				},
				{
					"speaker": "ash",
					"emotion": "sad",
					"content": {
						"korean": "이 모든 게 헛된 싸움이라는 걸, 아직도 모르는 거야?",
						"english": "Still don't realize this is all a futile battle?",
						"japanese": "これがすべて無駄な戦いだと、まだ分からないのか？",
						"chinese": "难道你还不明白，这一切都是徒劳的抗争吗？",
						"french": "Tu ne réalises toujours pas que tout ceci n'est qu'un combat futile ?",
						"spanish": "¿Todavía no te das cuenta de que todo esto es una batalla inútil?",
						"vietnamese": "Ngươi vẫn không nhận ra tất cả đây chỉ là một cuộc chiến vô ích sao?",
						"thai": "เจ้ายังไม่รู้หรือไงว่าทั้งหมดนี้เป็นการต่อสู้ที่เปล่าประโยชน์?",
						"hindi": "क्या तुम्हें अब भी नहीं पता कि यह सब एक व्यर्थ की लड़ाई है?"
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 400,
					"speaker": "ash",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"emotion": "base",
					"speaker": "ash",
					"type": "speech",
					"content": {
						"korean": "그의 노래는… 모든 것을 엮어내지. 네 가장 행복했던 기억마저도.",
						"english": "His song... weaves everything together. Even your happiest memories.",
						"japanese": "彼の歌は…すべてを紡ぎ出す。お前の最も幸せだった記憶さえも。",
						"chinese": "他的歌声……能编织一切。甚至是你最幸福的记忆。",
						"french": "Son chant... tisse tout. Même tes souvenirs les plus heureux.",
						"spanish": "Su canción... lo entrelaza todo. Incluso tus recuerdos más felices.",
						"vietnamese": "Bài hát của hắn... kết nối mọi thứ lại với nhau. Ngay cả những ký ức hạnh phúc nhất của ngươi.",
						"thai": "บทเพลงของเขา... ถักทอทุกสิ่งเข้าด้วยกัน แม้กระทั่งความทรงจำที่มีความสุขที่สุดของเจ้า",
						"hindi": "उसका गीत... सब कुछ बुनता है। यहाँ तक कि तुम्हारी सबसे सुखद यादें भी।"
					}
				},
				{
					"content": {
						"korean": "무슨 소리야. 진실을 찾으러 왔어.",
						"english": "What are you talking about? I came to find the truth.",
						"japanese": "何を言ってるんだ。真実を探しに来た。",
						"chinese": "你在说什么？我来寻找真相。",
						"french": "De quoi parles-tu ? Je suis venu chercher la vérité.",
						"spanish": "¿De qué hablas? Vine a buscar la verdad.",
						"vietnamese": "Ngươi đang nói gì vậy? Ta đến để tìm sự thật.",
						"thai": "เจ้ากำลังพูดอะไร? ข้ามาเพื่อค้นหาความจริง",
						"hindi": "तुम क्या कह रहे हो। मैं सच की तलाश में आया हूँ।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "진실? 진실은 고통뿐이야. 그분은 모든 고통을… 노래로 만들 뿐.",
						"english": "Truth? Truth is only pain. He merely turns all suffering... into a song.",
						"japanese": "真実？真実は苦痛だけだ。彼はお前の苦痛を…歌に変えるだけ。",
						"chinese": "真相？真相只有痛苦。他只是将所有的痛苦……化作歌声。",
						"french": "La vérité ? La vérité n'est que douleur. Il ne fait que transformer toute souffrance... en chanson.",
						"spanish": "¿Verdad? La verdad es solo dolor. Él simplemente convierte todo el sufrimiento... en una canción.",
						"vietnamese": "Sự thật? Sự thật chỉ là nỗi đau. Hắn ta chỉ biến mọi nỗi đau... thành một bài hát.",
						"thai": "ความจริง? ความจริงมีแต่ความเจ็บปวด ท่านผู้นั้นแค่เปลี่ยนความเจ็บปวดทั้งหมด... ให้เป็นบทเพลงเท่านั้น",
						"hindi": "सच? सच तो सिर्फ़ दर्द है। वह तो बस सारे दर्द को... एक गीत में बदल देता है।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "ash"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "ash",
					"spot": [
						4,
						3
					],
					"duration_ms": 450
				},
				{
					"speaker": "ash",
					"emotion": "sad",
					"content": {
						"korean": "그 자장가는 영혼을 위로한다고 믿었지… 하지만 진실은 달라.",
						"english": "I believed that lullaby comforted souls... but the truth is different.",
						"japanese": "その子守唄が魂を慰めると信じていた…だが真実は違う。",
						"chinese": "我曾相信那首摇篮曲能抚慰灵魂……但真相并非如此。",
						"french": "Je croyais que cette berceuse réconfortait les âmes... mais la vérité est différente.",
						"spanish": "Creí que esa nana consolaba las almas... pero la verdad es otra.",
						"vietnamese": "Ta từng tin rằng bài hát ru đó an ủi tâm hồn... nhưng sự thật thì khác.",
						"thai": "ข้าเคยเชื่อว่าเพลงกล่อมเด็กนั้นปลอบประโลมวิญญาณ... แต่ความจริงไม่เป็นเช่นนั้น",
						"hindi": "मुझे लगा था कि वह लोरी आत्माओं को सुकून देती है... लेकिन सच अलग है।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리야. 너도 그렇게 말했잖아.",
						"english": "What are you talking about? You said so yourself.",
						"japanese": "何を言ってるんだ。お前もそう言ったじゃないか。",
						"chinese": "你在说什么？你以前也是这么说的。",
						"french": "De quoi parles-tu ? Tu l'as dit toi-même.",
						"spanish": "¿De qué hablas? Tú mismo lo dijiste.",
						"vietnamese": "Ngươi đang nói gì vậy? Ngươi cũng đã nói thế mà.",
						"thai": "เจ้ากำลังพูดอะไร? เจ้าเองก็เคยพูดแบบนั้นไม่ใช่หรือไง",
						"hindi": "तुम क्या कह रहे हो। तुमने खुद ही तो ऐसा कहा था।"
					},
					"type": "speech"
				},
				{
					"speaker": "ash",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "들을수록 더 깊은 악몽 속으로 빠져들 뿐이야. 그에게 위로받는 순간… 너는 영원히 그의 먹이가 되는 거지.",
						"english": "The more you listen, the deeper you fall into a nightmare. The moment you seek comfort from him... you become his prey forever.",
						"japanese": "聞けば聞くほど、より深い悪夢に落ちていくだけだ。彼に慰められる瞬間…お前は永遠に彼の餌食となる。",
						"chinese": "听得越多，就只会陷入更深的噩梦。一旦从他那里得到慰藉……你就会永远成为他的猎物。",
						"french": "Plus tu l'écoutes, plus tu t'enfonces dans un cauchemar. Au moment où tu trouves du réconfort auprès de lui... tu deviens sa proie pour toujours.",
						"spanish": "Cuanto más lo escuchas, más te hundes en una pesadilla. En el momento en que buscas consuelo en él... te conviertes en su presa para siempre.",
						"vietnamese": "Càng nghe, ngươi càng chìm sâu vào một cơn ác mộng. Khoảnh khắc ngươi được hắn an ủi... ngươi sẽ mãi mãi trở thành con mồi của hắn.",
						"thai": "ยิ่งเจ้าฟังมากเท่าไหร่ เจ้าก็จะยิ่งจมดิ่งลงไปในฝันร้ายมากขึ้นเท่านั้น ในช่วงเวลาที่เจ้าได้รับการปลอบโยนจากเขา... เจ้าก็จะกลายเป็นเหยื่อของเขาไปตลอดกาล",
						"hindi": "जितना तुम सुनोगे, उतना ही तुम गहरे बुरे सपने में गिरते जाओगे। जिस पल तुम्हें उससे सांत्वना मिलेगी... तुम हमेशा के लिए उसका शिकार बन जाओगे।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "아니야. 난 달라.",
						"english": "No. I'm different.",
						"japanese": "違う。私は違う。",
						"chinese": "不。我不同。",
						"french": "Non. Je suis différent.",
						"spanish": "No. Yo soy diferente.",
						"vietnamese": "Không. Ta khác.",
						"thai": "ไม่ใช่ ข้าไม่เหมือนคนอื่น",
						"hindi": "नहीं। मैं अलग हूँ।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "공포로 물든 환영이 불규칙하게 맥동하며 나타났다.",
						"english": "A terrifying vision pulsed erratically into existence.",
						"japanese": "恐怖に染まった幻影が不規則に脈動しながら現れた。",
						"chinese": "染满恐惧的幻影不规则地脉动着显现。",
						"french": "Une vision terrifiante est apparue, palpitant irrégulièrement.",
						"spanish": "Una visión aterradora pulsó erráticamente, manifestándose.",
						"vietnamese": "Một ảo ảnh đẫm màu kinh hoàng xuất hiện, đập bất thường.",
						"thai": "ภาพหลอนที่เปื้อนความหวาดกลัวปรากฏขึ้นอย่างผิดจังหวะ",
						"hindi": "भय से सनी एक कल्पना अनियमित रूप से धड़कते हुए प्रकट हुई।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"spot": [
						2,
						4
					],
					"speaker": "ash",
					"duration_ms": 550,
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "ash",
					"emotion": "sad",
					"content": {
						"korean": "네가 가장 두려워하는 건… 결국 혼자 남는 거잖아.",
						"english": "What you fear most... is ultimately being left alone.",
						"japanese": "お前が最も恐れているのは…結局、一人残されることだ。",
						"chinese": "你最害怕的…终究是独自一人。",
						"french": "Ce que tu crains le plus... c'est finalement d'être seul.",
						"spanish": "Lo que más temes... es, al final, quedarte solo.",
						"vietnamese": "Điều ngươi sợ nhất... rốt cuộc là bị bỏ lại một mình thôi.",
						"thai": "สิ่งที่เจ้ากลัวที่สุด... ก็คือการถูกทอดทิ้งให้อยู่คนเดียวไม่ใช่เหรอ",
						"hindi": "जिस बात से तुम सबसे ज़्यादा डरते हो... वो है अंततः अकेले रह जाना।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "닥쳐! 그런 말에 넘어가지 않아.",
						"english": "Shut up! I won't fall for such words.",
						"japanese": "黙れ！そんな言葉には騙されない。",
						"chinese": "住口！我不会上当的。",
						"french": "Tais-toi ! Je ne tomberai pas dans le panneau.",
						"spanish": "¡Cállate! No caeré en esas palabras.",
						"vietnamese": "Câm miệng! Ta sẽ không bị những lời đó lừa đâu.",
						"thai": "หุบปาก! ฉันไม่หลงกลคำพูดพวกนั้นหรอก",
						"hindi": "चुप हो जाओ! मैं ऐसी बातों में नहीं फँसने वाला।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "허쉬는 모든 공포를 노래로 만들어 영원히 간직해 줄 거야. 영원한 안식을… 약속해.",
						"english": "Hush will turn all fears into a song and keep them forever. Eternal rest... I promise you.",
						"japanese": "ハッシュは全ての恐怖を歌に変え、永遠に抱きしめてくれるだろう。永遠の安息を…約束しよう。",
						"chinese": "赫什会将所有恐惧化作歌谣，永远珍藏。永恒的安宁…我向你承诺。",
						"french": "Hush transformera toutes les peurs en une chanson et les gardera pour toujours. Un repos éternel... je te le promets.",
						"spanish": "Hush convertirá todos los miedos en una canción y los guardará para siempre. Descanso eterno... te lo prometo.",
						"vietnamese": "Hush sẽ biến mọi nỗi sợ thành bài hát và giữ chúng mãi mãi. Sự yên nghỉ vĩnh hằng... ta hứa với ngươi.",
						"thai": "ฮัชจะเปลี่ยนความกลัวทั้งหมดให้เป็นบทเพลงและเก็บรักษาไว้ตลอดไป การพักผ่อนชั่วนิรันดร์... ฉันสัญญา",
						"hindi": "हश सभी भयों को एक गीत में बदल देगा और उन्हें हमेशा के लिए संजो कर रखेगा। शाश्वत शांति... मैं वादा करता हूँ।"
					},
					"speaker": "ash",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "악몽의 포식자, 허쉬가 거대한 실타래 속에서 모습을 드러냈다. 주변은 절규하는 환영으로 가득했다.",
						"english": "Hush, the Nightmare Predator, emerged from a massive tangle of threads. The surroundings were filled with screaming phantoms.",
						"japanese": "悪夢の捕食者、ハッシュが巨大な糸の塊の中から姿を現した。周囲は絶叫する幻影で満ちていた。",
						"chinese": "噩梦捕食者赫什从巨大的线团中现身。四周充满了尖叫的幻影。",
						"french": "Hush, le Prédateur des Cauchemars, a émergé d'un gigantesque enchevêtrement de fils. Les environs étaient remplis de fantômes hurlants.",
						"spanish": "Hush, el Depredador de Pesadillas, emergió de un enorme ovillo de hilos. Los alrededores estaban llenos de fantasmas que gritaban.",
						"vietnamese": "Hush, Kẻ Săn Mồi Ác Mộng, xuất hiện từ một khối chỉ khổng lồ. Xung quanh tràn ngập những ảo ảnh đang la hét.",
						"thai": "ฮัช นักล่าแห่งฝันร้ายปรากฏตัวขึ้นจากกลุ่มด้ายขนาดมหึมา บริเวณโดยรอบเต็มไปด้วยภาพหลอนที่กรีดร้อง",
						"hindi": "दुःस्वप्न का शिकारी, हश, धागों के एक विशाल गुच्छे से प्रकट हुआ। आस-पास चीखते-चिल्लाते प्रेतों से भरा हुआ था।"
					}
				},
				{
					"emotion": "base",
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "...왔구나. 나의 마지막 자장가를 들으러.",
						"english": "...You've come. To hear my final lullaby.",
						"japanese": "…来たな。私の最後のララバイを聞きに。",
						"chinese": "……你来了。来听我的最后一支摇篮曲。",
						"french": "...Tu es venu. Pour écouter ma dernière berceuse.",
						"spanish": "...Has venido. A escuchar mi última nana.",
						"vietnamese": "Ngươi đã đến. Để nghe bài hát ru cuối cùng của ta.",
						"thai": "...เจ้ามาแล้วสินะ มาฟังเพลงกล่อมเด็กสุดท้ายของฉัน",
						"hindi": "...तुम आ गए। मेरी अंतिम लोरी सुनने।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "허쉬! 네가 꾸민 짓이지!",
						"english": "Hush! This was your doing!",
						"japanese": "ハッシュ！お前の仕業だな！",
						"chinese": "赫什！这是你搞的鬼！",
						"french": "Hush ! C'est ton œuvre !",
						"spanish": "¡Hush! ¡Esto fue obra tuya!",
						"vietnamese": "Hush! Chuyện này là do ngươi sắp đặt phải không!",
						"thai": "ฮัช! นี่เป็นฝีมือแกใช่ไหม!",
						"hindi": "हश! यह सब तुमने किया है!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"type": "direction",
					"speaker": "ash",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"speaker": "ash",
					"type": "speech",
					"content": {
						"korean": "허쉬… 그의 노래는 한때 나를 위로했어… 하지만 이제…",
						"english": "Hush... His song once comforted me... But now...",
						"japanese": "ハッシュ…彼の歌はかつて私を慰めてくれた…だが、もう…",
						"chinese": "赫什……他的歌声曾一度安慰我……但现在……",
						"french": "Hush... Sa chanson m'a autrefois réconforté... Mais maintenant...",
						"spanish": "Hush... Su canción una vez me consoló... Pero ahora...",
						"vietnamese": "Hush... Bài hát của hắn từng an ủi ta... Nhưng bây giờ...",
						"thai": "ฮัช... เพลงของเขาเคยปลอบโยนฉัน... แต่ตอนนี้...",
						"hindi": "हश... उसका गीत एक बार मुझे दिलासा देता था... लेकिन अब..."
					}
				},
				{
					"emotion": "base",
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "애쉬, 너도 내 영원한 자장가 속에서 쉬어라.",
						"english": "Ash, you too shall rest in my eternal lullaby.",
						"japanese": "アッシュ、お前も私の永遠のララバイの中で休むがいい。",
						"chinese": "艾什，你也在我永恒的摇篮曲中安息吧。",
						"french": "Ash, toi aussi tu te reposeras dans ma berceuse éternelle.",
						"spanish": "Ash, tú también descansarás en mi nana eterna.",
						"vietnamese": "Ash, ngươi cũng sẽ an nghỉ trong bài hát ru vĩnh hằng của ta.",
						"thai": "แอช เจ้าเองก็จงพักผ่อนอยู่ในเพลงกล่อมเด็กชั่วนิรันดร์ของข้าเถิด",
						"hindi": "ऐश, तुम भी मेरी शाश्वत लोरी में विश्राम करो।"
					}
				},
				{
					"direction": "down",
					"duration_ms": 400,
					"speaker": "ash",
					"type": "direction",
					"action": "exit"
				},
				{
					"content": {
						"korean": "너희의 가장 깊은 곳, 가장 어두운 그림자… 그게 바로 나의 자장가다. 영원히 깨어나지 못할 꿈속으로!",
						"english": "Your deepest depths, your darkest shadows... that is my lullaby. Into a dream from which you'll never awaken!",
						"japanese": "お前たちの最も深い場所、最も暗い影…それが私のララバイだ。永遠に目覚めることのない夢の中へ！",
						"chinese": "你们最深处，最黑暗的阴影……那便是我的摇篮曲。进入一个永远无法醒来的梦境！",
						"french": "Vos profondeurs les plus sombres, vos ombres les plus noires... voilà ma berceuse. Dans un rêve dont vous ne vous réveillerez jamais !",
						"spanish": "Vuestras profundidades más íntimas, vuestras sombras más oscuras... esa es mi nana. ¡A un sueño del que nunca despertaréis!",
						"vietnamese": "Nơi sâu thẳm nhất, bóng tối u ám nhất của các ngươi... đó chính là bài hát ru của ta. Vào một giấc mơ mà các ngươi sẽ không bao giờ tỉnh lại!",
						"thai": "ส่วนลึกที่สุดของพวกเจ้า เงาที่มืดมิดที่สุดของพวกเจ้า... นั่นคือเพลงกล่อมเด็กของข้า เข้าสู่ความฝันที่เจ้าจะไม่มีวันตื่น!",
						"hindi": "तुम्हारी सबसे गहरी जगहें, तुम्हारी सबसे काली परछाइयाँ... वही मेरी लोरी है। एक ऐसे सपने में जिसमें तुम कभी जाग नहीं पाओगे!"
					},
					"type": "speech",
					"speaker": "boss",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "네 마음대로 되지 않아!",
						"english": "You won't have your way!",
						"japanese": "思い通りにはならない！",
						"chinese": "你不会得逞的！",
						"french": "Ça ne se passera pas comme tu veux !",
						"spanish": "¡No te saldrás con la tuya!",
						"vietnamese": "Ngươi sẽ không được toại nguyện đâu!",
						"thai": "เจ้าจะไม่ได้ดั่งใจหรอก!",
						"hindi": "तुम्हारी मनमानी नहीं चलेगी!"
					},
					"type": "speech"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "boss",
					"emotion": "sad",
					"content": {
						"korean": "…나는… 우주의 실잣는 자였어… 모든 꿈을 엮었지… 이 고통까지도… 나의 자장가에… 영원히….",
						"english": "...I was... the weaver of the cosmos... I wove all dreams... even this pain... into my lullaby... forever...",
						"japanese": "…私は…宇宙の織り手だった…全ての夢を織りなした…この苦痛さえも…私の子守歌に…永遠に…。",
						"chinese": "……我曾是……宇宙的纺织者……编织了所有的梦想……甚至这份痛苦……也融入我的摇篮曲……永恒……。",
						"french": "...J'étais... la tisseuse du cosmos... J'ai tissé tous les rêves... même cette douleur... dans ma berceuse... pour l'éternité...",
						"spanish": "...Yo era... la tejedora del cosmos... Tejí todos los sueños... incluso este dolor... en mi nana... para siempre...",
						"vietnamese": "...Ta là... người dệt vũ trụ... Ta dệt nên mọi giấc mơ... ngay cả nỗi đau này... vào bài hát ru của ta... mãi mãi...",
						"thai": "...ข้าคือ... ผู้ถักทอแห่งจักรวาล... ข้าถักทอทุกความฝัน... แม้ความเจ็บปวดนี้... สู่เพลงกล่อมของข้า... ชั่วนิรันดร์...",
						"hindi": "...मैं... ब्रह्मांड की बुनकर थी... मैंने सभी सपने बुने... इस दर्द को भी... अपनी लोरी में... हमेशा के लिए..."
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "모든 게… 거짓이었어. 너의 위로도….",
						"english": "Everything... was a lie. Even your comfort...",
						"japanese": "全てが…嘘だった。お前の慰めも…。",
						"chinese": "一切……都是谎言。甚至你的安慰……。",
						"french": "Tout... n'était que mensonge. Même ton réconfort...",
						"spanish": "Todo... era una mentira. Incluso tu consuelo...",
						"vietnamese": "Mọi thứ... đều là dối trá. Ngay cả sự an ủi của ngươi...",
						"thai": "ทุกสิ่ง... เป็นเรื่องโกหก. แม้แต่คำปลอบใจของเจ้า...",
						"hindi": "सब कुछ... झूठ था। तुम्हारी सांत्वना भी..."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "악몽의 자장가는 멈췄지만, 그 허무의 노래는 영원히 기억될 것이다.",
						"english": "The nightmare's lullaby has ceased, but its song of void will be remembered forever.",
						"japanese": "悪夢の子守歌は止まったが、その虚無の歌は永遠に記憶されるだろう。",
						"chinese": "噩梦的摇篮曲已停止，但那虚无之歌将永远被铭记。",
						"french": "La berceuse du cauchemar a cessé, mais son chant du vide restera gravé à jamais.",
						"spanish": "La nana de la pesadilla ha cesado, pero su canción de vacío será recordada para siempre.",
						"vietnamese": "Khúc hát ru của ác mộng đã dừng lại, nhưng bài ca hư vô ấy sẽ được ghi nhớ mãi mãi.",
						"thai": "เพลงกล่อมของฝันร้ายได้หยุดลงแล้ว แต่เพลงแห่งความว่างเปล่าของมันจะถูกจดจำไปตลอดกาล",
						"hindi": "दुःस्वप्न की लोरी थम गई है, लेकिन उसके शून्य का गीत हमेशा याद रखा जाएगा।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "주인공의 가장 깊은 곳에… 또 다른 실타래가 시작되고 있었다.",
						"english": "In the protagonist's deepest depths... another thread began to spin.",
						"japanese": "主人公の最も深いところで…別の糸が紡がれ始めていた。",
						"chinese": "在主人公最深处……另一根线开始缠绕。",
						"french": "Dans les profondeurs les plus intimes du protagoniste... un autre fil commençait à se dérouler.",
						"spanish": "En lo más profundo del protagonista... otro hilo comenzaba a tejerse.",
						"vietnamese": "Sâu thẳm trong lòng nhân vật chính... một sợi chỉ khác bắt đầu được dệt nên.",
						"thai": "ในส่วนลึกที่สุดของตัวเอก... ด้ายอีกเส้นหนึ่งกำลังเริ่มหมุนวน",
						"hindi": "नायक के सबसे गहरे में... एक और धागा बुना जाने लगा था।"
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "…영원한 악몽 속에서 잠들어라. 너희의 고통은… 나의 자장가가 될 것이다.",
						"english": "...Sleep in eternal nightmare. Your suffering... will be my lullaby.",
						"japanese": "…永遠の悪夢の中で眠れ。お前たちの苦痛は…私の子守歌となるだろう。",
						"chinese": "……在永恒的噩梦中沉睡吧。你们的痛苦……将成为我的摇篮曲。",
						"french": "...Endormez-vous dans un cauchemar éternel. Votre souffrance... sera ma berceuse.",
						"spanish": "...Dormid en una pesadilla eterna. Vuestro sufrimiento... será mi nana.",
						"vietnamese": "...Ngủ yên trong ác mộng vĩnh cửu. Nỗi đau của các ngươi... sẽ là khúc hát ru của ta.",
						"thai": "...จงหลับใหลในฝันร้ายชั่วนิรันดร์. ความเจ็บปวดของพวกเจ้า... จะเป็นเพลงกล่อมของข้า.",
						"hindi": "...अनंत दुःस्वप्न में सो जाओ। तुम्हारा दर्द... मेरी लोरी होगा।"
					},
					"speaker": "boss",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "…아직 끝나지 않았어. 이 고통을… 너에게 돌려줄 것이다!",
						"english": "...It's not over yet. This pain... I will return it to you!",
						"japanese": "…まだ終わっていない。この苦痛を…お前に返してやる！",
						"chinese": "……还没结束。这份痛苦……我会还给你！",
						"french": "...Ce n'est pas encore fini. Cette douleur... je te la rendrai !",
						"spanish": "...Aún no ha terminado. Este dolor... ¡te lo devolveré!",
						"vietnamese": "...Chưa kết thúc đâu. Nỗi đau này... ta sẽ trả lại cho ngươi!",
						"thai": "...มันยังไม่จบ. ความเจ็บปวดนี้... ข้าจะคืนมันให้เจ้า!",
						"hindi": "...अभी खत्म नहीं हुआ है। यह दर्द... मैं तुम्हें वापस लौटाऊंगा!"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"지옥의 가장 깊은 나락. 비명과 환영이 뒤섞인 곳.",
			"그곳에 '악몽의 포식자' 허쉬가 기다리고 있었다.",
			"잊었던 존재가 다시 나타나 가장 깊은 두려움을 건드린다.",
			"진실은 한때 위로였으나, 이제는 파멸의 노래였다."
		],
		"english": [
			"The deepest abyss of hell. A place where screams and phantoms intertwine.",
			"There, 'Hush, the Nightmare Predator,' awaited.",
			"A forgotten entity reappears, stirring the deepest fears.",
			"The truth was once a comfort, but now, a song of ruin."
		],
		"japanese": [
			"地獄の最深部。悲鳴と幻影が入り混じる場所。",
			"そこには「悪夢の捕食者」ハッシュが待ち構えていた。",
			"忘れ去られた存在が再び現れ、最も深い恐怖を呼び起こす。",
			"真実はかつて慰めだったが、今は破滅の歌となった。"
		],
		"chinese": [
			"地狱最深处。一个尖叫与幻影交织之地。",
			"在那里，“梦魇掠食者”赫什正在等待。",
			"一个被遗忘的存在再次出现，触动了内心最深的恐惧。",
			"真相曾是慰藉，如今却是毁灭之歌。"
		],
		"french": [
			"Les abysses les plus profondes de l'enfer. Un lieu où cris et illusions s'entremêlent.",
			"Là, « Hush, le Prédateur Cauchemardesque », attendait.",
			"Une entité oubliée réapparaît, touchant les peurs les plus profondes.",
			"La vérité était autrefois un réconfort, mais maintenant, c'est un chant de ruine."
		],
		"spanish": [
			"El abismo más profundo del infierno. Un lugar donde los gritos y las visiones se entrelazan.",
			"Allí, 'Hush, el Depredador de Pesadillas', esperaba.",
			"Una entidad olvidada reaparece, tocando los miedos más profundos.",
			"La verdad fue una vez un consuelo, pero ahora, una canción de ruina."
		],
		"vietnamese": [
			"Vực sâu nhất của địa ngục. Nơi tiếng thét và ảo ảnh hòa quyện.",
			"Nơi đó, 'Hush, Kẻ Săn Mồi Ác Mộng' đang chờ đợi.",
			"Một thực thể bị lãng quên xuất hiện trở lại, khơi dậy nỗi sợ hãi sâu thẳm nhất.",
			"Sự thật từng là niềm an ủi, nhưng giờ đây, là khúc ca hủy diệt."
		],
		"thai": [
			"ขุมนรกที่ลึกที่สุด สถานที่ที่เสียงกรีดร้องและภาพหลอนปะปนกัน",
			"ณ ที่นั่น 'ฮัช ผู้ล่าฝันร้าย' กำลังรออยู่",
			"สิ่งที่ถูกลืมกลับปรากฏขึ้นอีกครั้ง สัมผัสความกลัวที่ลึกที่สุด",
			"ความจริงเคยเป็นสิ่งปลอบโยน แต่ตอนนี้กลับกลายเป็นเพลงแห่งความพินาศ"
		],
		"hindi": [
			"नर्क का सबसे गहरा पाताल। एक ऐसी जगह जहाँ चीखें और भ्रम आपस में गुंथे हुए हैं।",
			"वहाँ, 'हश, दुःस्वप्न का शिकारी', इंतज़ार कर रहा था।",
			"एक भूली हुई सत्ता फिर से प्रकट होती है, सबसे गहरे डर को जगाती है।",
			"सत्य कभी सांत्वना था, पर अब, वह विनाश का गीत था।"
		]
	},
	"epilogue": {
		"korean": [
			"악몽의 자장가가 멈춘 자리에는, 침묵만이 남았다.",
			"애쉬는 사라졌다. 허쉬의 진실과 함께, 모든 허무 속으로.",
			"구원이었을까. 아니면 또 다른 악몽의 시작이었을까.",
			"영원히 깨어나지 못할 꿈속에서, 주인공은 깊은 절망을 느꼈다."
		],
		"english": [
			"Where the nightmare's lullaby ceased, only silence remained.",
			"Ash vanished. Into the void, along with Hush's truth.",
			"Was it salvation? Or the beginning of another nightmare?",
			"In a dream from which they would never awaken, the protagonist felt deep despair."
		],
		"japanese": [
			"悪夢の子守唄が止んだ場所には、沈黙だけが残った。",
			"アッシュは消えた。ハッシュの真実と共に、すべての虚無の中へ。",
			"それは救済だったのだろうか。それとも、また別の悪夢の始まりだったのか。",
			"永遠に目覚めることのない夢の中で、主人公は深い絶望を感じた。"
		],
		"chinese": [
			"梦魇摇篮曲停止之处，只剩下沉默。",
			"艾什消失了。随着赫什的真相，一切归于虚无。",
			"是救赎吗？亦或是另一场噩梦的开始？",
			"在一个永远无法醒来的梦中，主人公感受到了深深的绝望。"
		],
		"french": [
			"Là où la berceuse du cauchemar s'est tue, seul le silence demeurait.",
			"Ash disparut. Dans le néant, avec la vérité de Hush.",
			"Était-ce le salut ? Ou le début d'un autre cauchemar ?",
			"Dans un rêve dont ils ne se réveilleraient jamais, le protagoniste ressentit un profond désespoir."
		],
		"spanish": [
			"Donde la nana de la pesadilla cesó, solo quedó el silencio.",
			"Ash desapareció. En el vacío, junto con la verdad de Hush.",
			"¿Fue la salvación? ¿O el comienzo de otra pesadilla?",
			"En un sueño del que nunca despertarían, el protagonista sintió una profunda desesperación."
		],
		"vietnamese": [
			"Nơi khúc ru của ác mộng ngừng lại, chỉ còn lại sự im lặng.",
			"Ash biến mất. Vào hư vô, cùng với sự thật của Hush.",
			"Đó là sự cứu rỗi ư? Hay là sự khởi đầu của một ác mộng khác?",
			"Trong một giấc mơ không bao giờ tỉnh lại, nhân vật chính cảm thấy tuyệt vọng sâu sắc."
		],
		"thai": [
			"ที่ที่เพลงกล่อมเด็กแห่งฝันร้ายหยุดลง เหลือเพียงความเงียบงัน",
			"แอชหายไปแล้ว สู่ความว่างเปล่า พร้อมกับความจริงของฮัช",
			"มันคือการไถ่บาปหรือเปล่า หรือเป็นจุดเริ่มต้นของฝันร้ายครั้งใหม่กันแน่",
			"ในความฝันที่ไม่มีวันตื่น ตัวละครหลักรู้สึกสิ้นหวังอย่างสุดซึ้ง"
		],
		"hindi": [
			"जहाँ दुःस्वप्न की लोरी रुकी, वहाँ केवल सन्नाटा रह गया।",
			"ऐश गायब हो गया। हश के सच के साथ, सब शून्य में।",
			"क्या यह मोक्ष था? या किसी और दुःस्वप्न की शुरुआत?",
			"एक ऐसे सपने में जिससे वे कभी नहीं जागेंगे, नायक ने गहरी निराशा महसूस की।"
		]
	}
} as const;
