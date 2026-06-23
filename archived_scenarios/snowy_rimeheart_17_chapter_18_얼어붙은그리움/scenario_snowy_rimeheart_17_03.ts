export const scenario_snowy_rimeheart_17_03 = {
	"scenario_id": "snowy_rimeheart_17_03",
	"order": 3,
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
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "오래된 연구실, 모든 것이 얼어붙은 듯 고요했다.",
						"english": "The old laboratory, everything was quiet as if frozen.",
						"japanese": "古い研究室、全てが凍りついたように静まり返っていた。",
						"chinese": "老旧的实验室，一切都仿佛冻结般寂静。",
						"french": "L'ancien laboratoire, tout était silencieux comme figé.",
						"spanish": "El viejo laboratorio, todo estaba tan quieto como congelado.",
						"vietnamese": "Phòng thí nghiệm cũ, mọi thứ tĩnh lặng như bị đóng băng.",
						"thai": "ห้องทดลองเก่า ทุกสิ่งเงียบงันราวกับถูกแช่แข็ง",
						"hindi": "पुरानी प्रयोगशाला, सब कुछ जमा हुआ-सा शांत था।"
					},
					"type": "speech"
				},
				{
					"type": "direction",
					"speaker": "ivar",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "ivar",
					"emotion": "base",
					"content": {
						"korean": "왔는가. 이제 너도 '평온'을 받아들일 때다.",
						"english": "You've come. It's time for you to embrace 'serenity' too.",
						"japanese": "来たか。お前もそろそろ「平穏」を受け入れる時だ。",
						"chinese": "你来了。现在，你也该接受“平静”了。",
						"french": "Tu es venu. Il est temps que toi aussi, tu acceptes la \"sérénité\".",
						"spanish": "Has venido. Ahora es el momento de que tú también aceptes la \"serenidad\".",
						"vietnamese": "Ngươi đã đến. Giờ là lúc ngươi cũng chấp nhận 'thanh bình'.",
						"thai": "เจ้ามาแล้วหรือ ถึงเวลาที่เจ้าจะยอมรับ 'ความสงบ' แล้ว",
						"hindi": "तुम आ गए। अब तुम्हें भी 'शांति' स्वीकार कर लेनी चाहिए।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "이게 당신이 찾던 온기인가?",
						"english": "Is this the warmth you sought?",
						"japanese": "これがあなたが探していた温もりですか？",
						"chinese": "这就是你所寻找的温暖吗？",
						"french": "Est-ce la chaleur que vous cherchiez ?",
						"spanish": "¿Es este el calor que buscabas?",
						"vietnamese": "Đây có phải là sự ấm áp mà ngươi tìm kiếm không?",
						"thai": "นี่คือความอบอุ่นที่คุณตามหาหรือ?",
						"hindi": "क्या यह वही गर्माहट है जिसकी तुम्हें तलाश थी?"
					},
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"speaker": "ivar",
					"content": {
						"korean": "온기는 결국 고통으로 이어진다. 멈추는 것이 해방이지.",
						"english": "Warmth ultimately leads to pain. Stopping is liberation.",
						"japanese": "温もりは結局苦痛へと繋がる。止めることこそが解放だ。",
						"chinese": "温暖最终只会带来痛苦。停止，才是解脱。",
						"french": "La chaleur mène finalement à la douleur. S'arrêter est la libération.",
						"spanish": "El calor finalmente lleva al dolor. Detenerse es liberación.",
						"vietnamese": "Sự ấm áp cuối cùng dẫn đến đau khổ. Dừng lại mới là giải thoát.",
						"thai": "ความอบอุ่นสุดท้ายแล้วจะนำไปสู่ความเจ็บปวด การหยุดต่างหากคือการปลดปล่อย",
						"hindi": "गर्माहट अंततः पीड़ा की ओर ले जाती है। रुकना ही मुक्ति है।"
					},
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "ivar",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "너의 '그리움'은 결국 너를 더 큰 고통으로 이끌 뿐.",
						"english": "Your 'longing' will only lead you to greater pain.",
						"japanese": "お前の「郷愁」は、結局お前をさらなる苦痛へと導くだけだ。",
						"chinese": "你的“思念”最终只会将你引向更大的痛苦。",
						"french": "Ton « désir ardent » ne fera que te mener à une plus grande douleur.",
						"spanish": "Tu \"anhelo\" solo te llevará a un dolor mayor.",
						"vietnamese": "'Nỗi nhớ' của ngươi cuối cùng sẽ chỉ dẫn ngươi đến đau khổ lớn hơn mà thôi.",
						"thai": "'ความปรารถนา' ของเจ้าท้ายที่สุดจะนำเจ้าไปสู่ความเจ็บปวดที่ยิ่งใหญ่กว่าเท่านั้น",
						"hindi": "तुम्हारी 'लालसा' अंततः तुम्हें और अधिक पीड़ा की ओर ही ले जाएगी।"
					},
					"emotion": "base",
					"speaker": "ivar",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "…당신은 변했어.",
						"english": "...You've changed.",
						"japanese": "…あなたは変わってしまった。",
						"chinese": "…你变了。",
						"french": "...Vous avez changé.",
						"spanish": "...Has cambiado.",
						"vietnamese": "...Ngươi đã thay đổi rồi.",
						"thai": "...คุณเปลี่ยนไปแล้ว",
						"hindi": "...तुम बदल गए हो।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "나는 진실을 보았다. 모든 것이 정지할 때, 비로소 평화가 찾아온다.",
						"english": "I saw the truth. Peace comes only when everything stands still.",
						"japanese": "私は真実を見た。全てが停止した時、初めて平和が訪れる。",
						"chinese": "我看到了真相。当一切都静止时，和平才会降临。",
						"french": "J'ai vu la vérité. La paix ne vient que lorsque tout s'arrête.",
						"spanish": "Vi la verdad. La paz llega solo cuando todo se detiene.",
						"vietnamese": "Ta đã thấy sự thật. Hòa bình chỉ đến khi mọi thứ ngưng đọng.",
						"thai": "ฉันเห็นความจริงแล้ว สันติจะมาเมื่อทุกสิ่งหยุดนิ่งเท่านั้น",
						"hindi": "मैंने सच देखा। शांति तभी आती है जब सब कुछ थम जाता है।"
					},
					"emotion": "base",
					"speaker": "ivar"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_1",
					"content": {
						"korean": "그건 죽음이잖아!",
						"english": "That's death!",
						"japanese": "それは死だ！",
						"chinese": "那是死亡！",
						"french": "C'est la mort !",
						"spanish": "¡Eso es la muerte!",
						"vietnamese": "Đó là cái chết!",
						"thai": "นั่นมันความตายชัดๆ!",
						"hindi": "वह तो मौत है!"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "ivar",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "ivar",
					"emotion": "base",
					"content": {
						"korean": "들어봐. 저 얼어붙은 호수 위에서 들려오는 소리를.",
						"english": "Listen. To the sound coming from above that frozen lake.",
						"japanese": "聞いてくれ。あの凍った湖の上から聞こえる音を。",
						"chinese": "听。来自那冰冻湖面上的声音。",
						"french": "Écoute. Le son venant d'au-dessus de ce lac gelé.",
						"spanish": "Escucha. El sonido que viene de ese lago congelado.",
						"vietnamese": "Nghe này. Tiếng động vọng lên từ mặt hồ đóng băng đó.",
						"thai": "ฟังดูสิ เสียงที่ดังมาจากทะเลสาบน้ำแข็งนั่น",
						"hindi": "सुनो। उस जमे हुए झील के ऊपर से आने वाली आवाज़ को।"
					}
				},
				{
					"content": {
						"korean": "차가운 바람결에 잊혀진 자장가가 희미하게 들려왔다.",
						"english": "A forgotten lullaby faintly echoed on the cold wind.",
						"japanese": "冷たい風に乗って、忘れられた子守唄がかすかに聞こえてきた。",
						"chinese": "遗忘的摇篮曲在寒风中若隐若现地传来。",
						"french": "Une berceuse oubliée résonnait faiblement dans le vent froid.",
						"spanish": "Una nana olvidada resonó débilmente en el viento frío.",
						"vietnamese": "Một khúc ru đã lãng quên thoảng bay theo làn gió lạnh.",
						"thai": "เพลงกล่อมเด็กที่ถูกลืมเลือนแผ่วเบามากับสายลมหนาว",
						"hindi": "ठंडी हवा में एक भूली हुई लोरी धीमी-धीमी सुनाई दी।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "영원한 잠. 그것이 모든 온기가 꿈꾸는 마지막 종착지.",
						"english": "Eternal sleep. That is the final destination all warmth dreams of.",
						"japanese": "永遠の眠り。それが全ての温もりが夢見る最後の終着点。",
						"chinese": "永恒的睡眠。那是所有温暖所梦想的最终归宿。",
						"french": "Le sommeil éternel. C'est la destination finale dont toute chaleur rêve.",
						"spanish": "El sueño eterno. Ese es el destino final que toda calidez anhela.",
						"vietnamese": "Giấc ngủ vĩnh hằng. Đó là điểm dừng cuối cùng mà mọi hơi ấm hằng mơ ước.",
						"thai": "นิทรานิรันดร์ นั่นคือปลายทางสุดท้ายที่ทุกความอบอุ่นใฝ่ฝัน",
						"hindi": "अनंत निद्रा। यही वह अंतिम पड़ाव है जिसका हर गर्माहट सपना देखती है।"
					},
					"emotion": "base",
					"speaker": "ivar",
					"type": "speech"
				},
				{
					"content": {
						"korean": "아니야. 우린 싸울 거야.",
						"english": "No. We will fight.",
						"japanese": "違う。私たちは戦う。",
						"chinese": "不。我们会战斗。",
						"french": "Non. Nous nous battrons.",
						"spanish": "No. Lucharemos.",
						"vietnamese": "Không. Chúng ta sẽ chiến đấu.",
						"thai": "ไม่! เราจะสู้!",
						"hindi": "नहीं। हम लड़ेंगे।"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "연구실 구석, 얼어붙은 책상 위 낡은 일기장이 눈에 띄었다.",
						"english": "In the corner of the lab, a worn diary stood out on a frozen desk.",
						"japanese": "研究室の隅、凍りついた机の上に古びた日記帳が目に留まった。",
						"chinese": "实验室的角落里，一张冰冷的桌子上放着一本旧日记，格外醒目。",
						"french": "Dans le coin du laboratoire, un vieux journal se distinguait sur un bureau gelé.",
						"spanish": "En un rincón del laboratorio, un diario desgastado destacaba sobre un escritorio congelado.",
						"vietnamese": "Trong góc phòng thí nghiệm, một cuốn nhật ký cũ nằm trên bàn đóng băng thu hút sự chú ý.",
						"thai": "ที่มุมห้องแล็บ มีสมุดบันทึกเก่าๆ เล่มหนึ่งวางอยู่บนโต๊ะที่เย็นเฉียบ",
						"hindi": "लैब के कोने में, एक जमी हुई मेज पर एक पुरानी डायरी पड़ी थी, जो ध्यान खींच रही थी।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "이건… 이바르의 것인가?",
						"english": "Is this... Ivar's?",
						"japanese": "これは…イヴァルのものか？",
						"chinese": "这是…伊瓦尔的吗？",
						"french": "C'est... à Ivar ?",
						"spanish": "¿Es esto... de Ivar?",
						"vietnamese": "Đây là... của Ivar sao?",
						"thai": "นี่มัน... ของไอบาร์หรือเปล่า?",
						"hindi": "क्या यह... इवर का है?"
					}
				},
				{
					"content": {
						"korean": "'모든 온기는 결국 사라질 운명이다. 고통은 멈출 것이다.' 섬뜩한 문구가 적혀 있었다.",
						"english": "\"All warmth is destined to vanish. Pain will cease.\" A chilling phrase was written.",
						"japanese": "「全ての温もりは結局消え去る運命だ。苦痛は止まるだろう。」不気味な文言が書かれていた。",
						"chinese": "“所有的温暖终将消散。痛苦将会停止。”一段令人毛骨悚然的文字写在那里。",
						"french": "« Toute chaleur est vouée à disparaître. La douleur cessera. » Une phrase glaçante y était écrite.",
						"spanish": "\"Toda calidez está destinada a desvanecerse. El dolor cesará.\" Una frase escalofriante estaba escrita.",
						"vietnamese": "\"Mọi hơi ấm cuối cùng đều sẽ tan biến. Nỗi đau sẽ chấm dứt.\" Một dòng chữ rợn người được viết.",
						"thai": "“ความอบอุ่นทั้งหมดล้วนมีชะตาที่จะเลือนหายไป ความเจ็บปวดจะสิ้นสุดลง” มีข้อความชวนขนลุกเขียนไว้",
						"hindi": "\"सभी गर्माहट का अंततः गायब होना तय है। दर्द रुक जाएगा।\" एक भयावह वाक्यांश लिखा था।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "ivar",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						2
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "이제 이해했나? 내가 왜 '강함의 끝'을 시험하는지.",
						"english": "Do you understand now? Why I test the 'limit of strength'.",
						"japanese": "もう理解したか？私がなぜ「強さの限界」を試すのかを。",
						"chinese": "现在你明白了吗？我为何要测试“力量的极限”。",
						"french": "Comprends-tu maintenant ? Pourquoi je teste la « limite de la force ».",
						"spanish": "¿Lo entiendes ahora? Por qué pruebo el 'límite de la fuerza'.",
						"vietnamese": "Bây giờ ngươi đã hiểu chưa? Tại sao ta lại thử nghiệm 'giới hạn của sức mạnh'.",
						"thai": "เข้าใจแล้วใช่ไหม? ว่าทำไมฉันถึงต้องทดสอบ 'ขีดสุดของความแข็งแกร่ง'",
						"hindi": "अब समझे? मैं क्यों 'शक्ति की सीमा' का परीक्षण कर रहा हूँ।"
					},
					"emotion": "base",
					"speaker": "ivar"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "당신은… 미쳐버린 거야.",
						"english": "You've... lost your mind.",
						"japanese": "あなたは…狂ってしまったのね。",
						"chinese": "你…你疯了。",
						"french": "Tu… tu es devenu fou.",
						"spanish": "Tú… te has vuelto loco.",
						"vietnamese": "Ngươi… ngươi điên rồi.",
						"thai": "เจ้า… เจ้ามันบ้าไปแล้ว",
						"hindi": "तुम… तुम पागल हो गए हो।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "아니. 나는 진실을 받아들인 것뿐.",
						"english": "No. I merely accepted the truth.",
						"japanese": "違う。私はただ真実を受け入れただけだ。",
						"chinese": "不。我只是接受了真相。",
						"french": "Non. J'ai seulement accepté la vérité.",
						"spanish": "No. Simplemente acepté la verdad.",
						"vietnamese": "Không. Ta chỉ chấp nhận sự thật thôi.",
						"thai": "ไม่ใช่ ข้าแค่ยอมรับความจริง",
						"hindi": "नहीं। मैंने तो बस सच्चाई को स्वीकार किया है।"
					},
					"speaker": "ivar",
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
						"korean": "고요함 속에 거대한 그림자가 움직였다. 끝없는 굶주림의 존재였다.",
						"english": "In the silence, a colossal shadow stirred. It was a being of endless hunger.",
						"japanese": "静寂の中、巨大な影が動いた。それは終わりなき飢えの存在だった。",
						"chinese": "寂静中，一个巨大的身影在移动。那是无尽饥饿的存在。",
						"french": "Dans le silence, une ombre colossale s'agita. C'était une entité d'une faim insatiable.",
						"spanish": "En el silencio, una sombra colosal se agitó. Era una existencia de hambre infinita.",
						"vietnamese": "Trong tĩnh lặng, một bóng đen khổng lồ chuyển động. Đó là một thực thể của sự đói khát vô tận.",
						"thai": "ในความเงียบงัน เงาขนาดมหึมาขยับ มันคือสิ่งมีชีวิตที่หิวโหยไม่สิ้นสุด",
						"hindi": "खामोशी में, एक विशाल छाया हिल उठी। वह अनंत भूख की एक इकाई थी।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…평온을 방해하는 어리석은 자여.",
						"english": "…You fool, disturbing the peace.",
						"japanese": "…平穏を乱す愚か者め。",
						"chinese": "…打扰平静的愚蠢之人。",
						"french": "…Idiot, qui trouble la paix.",
						"spanish": "…Necio, perturbando la paz.",
						"vietnamese": "…Kẻ ngu xuẩn, dám phá vỡ sự bình yên.",
						"thai": "…เจ้าคนโง่ที่รบกวนความสงบ",
						"hindi": "…शांति भंग करने वाले मूर्ख।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"type": "direction",
					"speaker": "ivar",
					"action": "enter",
					"spot": [
						1,
						3
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "ivar",
					"emotion": "base",
					"content": {
						"korean": "보아라. 이 위대한 힘 앞에서 너의 분노는 아무것도 아님을.",
						"english": "Behold. Before this immense power, your rage is naught.",
						"japanese": "見よ。この偉大な力の前では、お前の怒りなど無に等しい。",
						"chinese": "瞧吧。在这伟大的力量面前，你的愤怒微不足道。",
						"french": "Regarde. Devant cette puissance immense, ta fureur n'est rien.",
						"spanish": "Mira. Ante este gran poder, tu ira no es nada.",
						"vietnamese": "Hãy xem. Trước sức mạnh vĩ đại này, sự giận dữ của ngươi chẳng là gì cả.",
						"thai": "ดูสิ ต่อหน้าพลังอันยิ่งใหญ่นี้ ความโกรธของเจ้าไร้ความหมาย",
						"hindi": "देखो। इस महान शक्ति के सामने, तुम्हारा क्रोध कुछ भी नहीं है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "비켜, 이바르!",
						"english": "Move, Ivar!",
						"japanese": "どけ、イヴァル！",
						"chinese": "让开，伊瓦尔！",
						"french": "Pousse-toi, Ivar !",
						"spanish": "¡Apártate, Ivar!",
						"vietnamese": "Tránh ra, Ivar!",
						"thai": "หลีกไป, อีวาร์!",
						"hindi": "हटो, इवार!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"speaker": "ivar",
					"content": {
						"korean": "강함의 끝은 결국… 영원한 정지다.",
						"english": "The end of strength is ultimately… eternal stillness.",
						"japanese": "強さの果ては結局…永遠の静止だ。",
						"chinese": "力量的尽头终究是…永恒的停滞。",
						"french": "La fin de la force est finalement… l'immobilité éternelle.",
						"spanish": "El fin de la fuerza es, al final… la detención eterna.",
						"vietnamese": "Cái kết của sức mạnh rốt cuộc… là sự dừng lại vĩnh viễn.",
						"thai": "จุดจบของความแข็งแกร่งคือ… ความหยุดนิ่งชั่วนิรันดร์",
						"hindi": "शक्ति का अंत अंततः… शाश्वत ठहराव है।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "…멈춰라.",
						"english": "…Stop.",
						"japanese": "…止まれ。",
						"chinese": "…住手。",
						"french": "…Arrête.",
						"spanish": "…Detente.",
						"vietnamese": "…Dừng lại.",
						"thai": "…หยุดเดี๋ยวนี้",
						"hindi": "…रुको।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "…이것이 끝이 아니다. 결국 너도… 멈출 것이다.",
						"english": "…This isn't the end. Eventually, you too… will cease.",
						"japanese": "…これが終わりではない。結局お前も…止まるだろう。",
						"chinese": "…这并非结束。最终你也会…停下。",
						"french": "…Ce n'est pas la fin. Finalement, toi aussi… tu t'arrêteras.",
						"spanish": "…Esto no es el final. Al final, tú también… te detendrás.",
						"vietnamese": "…Đây không phải là kết thúc. Cuối cùng, ngươi cũng sẽ… dừng lại.",
						"thai": "…นี่ไม่ใช่จุดจบ ท้ายที่สุดเจ้าเองก็จะ… หยุด",
						"hindi": "…यह अंत नहीं है। आखिरकार, तुम भी… रुक जाओगे।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "아니. 나는… 멈추지 않아.",
						"english": "No. I… will not stop.",
						"japanese": "違う。私は…止まらない。",
						"chinese": "不。我…不会停下。",
						"french": "Non. Je… ne m'arrêterai pas.",
						"spanish": "No. Yo… no me detendré.",
						"vietnamese": "Không. Ta… sẽ không dừng lại.",
						"thai": "ไม่ ฉัน… จะไม่หยุด",
						"hindi": "नहीं। मैं… रुकूंगा नहीं।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "그림자가 사라진 자리. 그러나 진실은 더욱 깊은 얼음 속에 갇혀 있었다.",
						"english": "Where the shadow vanished. But the truth was encased in deeper ice.",
						"japanese": "影が消えた場所。しかし真実は、より深い氷の中に囚われていた。",
						"chinese": "影子消失的地方。然而真相，却被困在更深的冰层之下。",
						"french": "Là où l'ombre a disparu. Mais la vérité était emprisonnée dans une glace plus profonde.",
						"spanish": "Donde la sombra se desvaneció. Pero la verdad estaba atrapada en un hielo más profundo.",
						"vietnamese": "Nơi bóng tối tan biến. Nhưng sự thật lại bị kẹt sâu hơn trong băng giá.",
						"thai": "ที่ซึ่งเงาหายไป ทว่าความจริงกลับถูกขังอยู่ในน้ำแข็งที่ลึกกว่านั้น",
						"hindi": "जहाँ परछाई गायब हो गई। परन्तु सत्य गहरे बर्फ़ में कैद था।"
					}
				},
				{
					"content": {
						"korean": "고요한 평온의 유혹은… 아직 끝나지 않았다.",
						"english": "The allure of tranquil peace... has not yet ended.",
						"japanese": "静かなる平穏の誘惑は…まだ終わっていない。",
						"chinese": "宁静的诱惑…尚未结束。",
						"french": "L'attrait d'une paix tranquille… n'est pas encore terminé.",
						"spanish": "La seducción de la paz tranquila… aún no ha terminado.",
						"vietnamese": "Sự cám dỗ của bình yên tĩnh lặng… vẫn chưa kết thúc.",
						"thai": "เสน่ห์แห่งความสงบ…ยังไม่จบลง",
						"hindi": "शांत शांति का प्रलोभन… अभी समाप्त नहीं हुआ है।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "…어리석은 저항. 고통은 멈출 것이다.",
						"english": "...Foolish resistance. The pain will cease.",
						"japanese": "…愚かな抵抗。苦痛は止まるだろう。",
						"chinese": "…愚蠢的抵抗。痛苦将会停止。",
						"french": "…Résistance futile. La douleur cessera.",
						"spanish": "…Resistencia inútil. El dolor cesará.",
						"vietnamese": "…Sự kháng cự ngu xuẩn. Nỗi đau sẽ chấm dứt.",
						"thai": "…การต่อต้านที่โง่เขลา ความเจ็บปวดจะหยุดลง",
						"hindi": "…मूढ़ प्रतिरोध। पीड़ा समाप्त होगी।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "아직… 끝나지 않았어.",
						"english": "It's not... over yet.",
						"japanese": "まだ…終わっていない。",
						"chinese": "还没…结束。",
						"french": "Ce n'est pas… encore fini.",
						"spanish": "Aún no… ha terminado.",
						"vietnamese": "Vẫn chưa… kết thúc.",
						"thai": "ยังไม่…จบ",
						"hindi": "अभी… खत्म नहीं हुआ है।"
					}
				},
				{
					"speaker": "ivar",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "받아들여라. 이것이 너의 한계다.",
						"english": "Accept it. This is your limit.",
						"japanese": "受け入れろ。これが貴様の限界だ。",
						"chinese": "接受吧。这就是你的极限。",
						"french": "Accepte-le. C'est ta limite.",
						"spanish": "Acéptalo. Este es tu límite.",
						"vietnamese": "Chấp nhận đi. Đây là giới hạn của ngươi.",
						"thai": "ยอมรับมันซะ นี่คือขีดจำกัดของเจ้า",
						"hindi": "स्वीकार करो। यही तुम्हारी सीमा है।"
					},
					"emotion": "base",
					"speaker": "ivar"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"온기를 되찾으려 했던 학자, 이바르.",
			"이제 그는 고요한 평온이 진정한 해방이라 속삭인다.",
			"얼어붙은 호수 위로 잊혀진 자장가가 울리고.",
			"감춰진 진실은 더욱 깊은 곳에서 기다린다."
		],
		"english": [
			"Ivar, the scholar who sought to reclaim warmth.",
			"Now he whispers that tranquil serenity is true liberation.",
			"Over the frozen lake, a forgotten lullaby echoes.",
			"The hidden truth awaits in deeper depths."
		],
		"japanese": [
			"温もりを取り戻そうとした学者、イヴァル。",
			"今、彼は静かな平穏こそが真の解放だと囁く。",
			"凍てついた湖の上で、忘れられた子守唄が響く。",
			"隠された真実は、さらに深い場所で待っている。"
		],
		"chinese": [
			"曾试图找回温暖的学者，伊瓦尔。",
			"如今，他低语着，宁静的平和才是真正的解放。",
			"在冰封的湖面上，遗忘的摇篮曲回荡着。",
			"隐藏的真相在更深处等待着。"
		],
		"french": [
			"Ivar, l'érudit qui cherchait à retrouver la chaleur.",
			"Maintenant, il murmure que la sérénité tranquille est la vraie libération.",
			"Sur le lac gelé, une berceuse oubliée résonne.",
			"La vérité cachée attend dans les profondeurs."
		],
		"spanish": [
			"Ivar, el erudito que intentó recuperar el calor.",
			"Ahora susurra que la serena tranquilidad es la verdadera liberación.",
			"Sobre el lago helado, una nana olvidada resuena.",
			"La verdad oculta aguarda en las profundidades."
		],
		"vietnamese": [
			"Ivar, học giả từng tìm cách lấy lại sự ấm áp.",
			"Giờ đây, hắn thì thầm rằng sự thanh bình tĩnh lặng mới là sự giải thoát thực sự.",
			"Trên hồ băng, một khúc hát ru bị lãng quên vang vọng.",
			"Sự thật ẩn giấu chờ đợi ở nơi sâu thẳm hơn."
		],
		"thai": [
			"อีวาร์ นักวิชาการผู้พยายามเรียกคืนความอบอุ่น",
			"บัดนี้ เขาพร่ำกระซิบว่าความสงบสุขคือการปลดปล่อยที่แท้จริง",
			"เหนือทะเลสาบที่เยือกแข็ง บทเพลงกล่อมเด็กที่ถูกลืมเลือนก้องกังวาน",
			"ความจริงที่ซ่อนเร้นรอคอยอยู่ในห้วงลึกยิ่งกว่า"
		],
		"hindi": [
			"इवार, वह विद्वान जिसने गर्माहट वापस पाने की कोशिश की।",
			"अब वह फुसफुसाता है कि शांत शांति ही सच्ची मुक्ति है।",
			"जमी हुई झील के ऊपर, एक भूली हुई लोरी गूंजती है।",
			"छिपी हुई सच्चाई और गहरी जगहों में इंतज़ार कर रही है।"
		]
	}
} as const;
