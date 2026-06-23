export const scenario_snowy_lyrewept_18_03 = {
	"scenario_id": "snowy_lyrewept_18_03",
	"order": 3,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"bran": {
			"id": "mon_985fcdcc-1bf2-4822-aa2f-292ae9353456",
			"name": {
				"korean": "브란",
				"english": "Bran",
				"japanese": "ブラン",
				"chinese": "布兰",
				"french": "Bran",
				"spanish": "Bran",
				"vietnamese": "Bran",
				"thai": "แบรน",
				"hindi": "ब्रैन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/42cde50b-7453-47b1-04df-73500ad21d00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/4ecba7ed-ec7e-4a8e-74dc-bf3e711b4d00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "버려진 얼음 동굴. 차가운 한기가 발끝부터 스며들었다.",
						"english": "Abandoned ice cave. A chilling cold seeped in from my toes.",
						"japanese": "捨てられた氷の洞窟。冷たい寒気が足元から染み渡った。",
						"chinese": "被遗弃的冰洞。彻骨的寒气从脚尖渗入。",
						"french": "Caverne de glace abandonnée. Un froid mordant me transperça des pieds.",
						"spanish": "Cueva de hielo abandonada. Un frío gélido se me coló por los pies.",
						"vietnamese": "Hang băng bị bỏ hoang. Một luồng khí lạnh thấu xương xâm nhập từ đầu ngón chân.",
						"thai": "ถ้ำน้ำแข็งที่ถูกทิ้งร้าง ความหนาวเย็นกัดกินตั้งแต่ปลายเท้า",
						"hindi": "परित्यक्त बर्फ की गुफा। ठंडी ठंड पैरों से रिस रही थी।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "여기도… 얼어붙은 영혼들이 가득해.",
						"english": "Here too... it's filled with frozen souls.",
						"japanese": "ここも…凍てついた魂で溢れている。",
						"chinese": "这里也……充满了冰冻的灵魂。",
						"french": "Ici aussi... c'est rempli d'âmes gelées.",
						"spanish": "Aquí también... está lleno de almas congeladas.",
						"vietnamese": "Nơi này cũng... tràn ngập những linh hồn đóng băng.",
						"thai": "ที่นี่ก็... เต็มไปด้วยวิญญาณที่ถูกแช่แข็ง",
						"hindi": "यहाँ भी... जमी हुई आत्माएँ भरी हुई हैं।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "bran",
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						2
					],
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "길 잃은 영혼들이여… 돌아갈 길을 찾아야 할 텐데.",
						"english": "Lost souls... you must find your way back.",
						"japanese": "迷える魂たちよ…帰る道を見つけなければならないだろうに。",
						"chinese": "迷失的灵魂啊……你们该找到归途了。",
						"french": "Âmes perdues... vous devriez trouver le chemin du retour.",
						"spanish": "Almas perdidas... tendréis que encontrar el camino de vuelta.",
						"vietnamese": "Hỡi những linh hồn lạc lối... các ngươi phải tìm thấy đường về thôi.",
						"thai": "เหล่าวิญญาณที่หลงทาง... คงต้องหาทางกลับบ้านสินะ",
						"hindi": "भटकी हुई आत्माएँ... तुम्हें वापसी का रास्ता खोजना होगा।"
					},
					"speaker": "bran",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "당신은… 누구시죠?",
						"english": "Who... are you?",
						"japanese": "あなたは…誰ですか？",
						"chinese": "您是……谁？",
						"french": "Vous êtes... qui ?",
						"spanish": "¿Quién... es usted?",
						"vietnamese": "Ngài là... ai?",
						"thai": "ท่านคือ... ใคร?",
						"hindi": "आप... कौन हैं?"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "나는 브란. 이 얼음 속에서 길을 찾는 자들을 돕지.",
						"english": "I am Bran. I help those who seek a path in this ice.",
						"japanese": "私はブラン。この氷の中で道を探す者たちを助ける者だ。",
						"chinese": "我是布兰。我帮助那些在这冰中寻找道路的人。",
						"french": "Je suis Bran. J'aide ceux qui cherchent leur chemin dans cette glace.",
						"spanish": "Soy Bran. Ayudo a quienes buscan un camino en este hielo.",
						"vietnamese": "Tôi là Bran. Tôi giúp những người tìm đường trong lớp băng này.",
						"thai": "ข้าคือบราน ข้าช่วยผู้ที่แสวงหาหนทางในน้ำแข็งนี้",
						"hindi": "मैं ब्रान हूँ। मैं उन लोगों की मदद करता हूँ जो इस बर्फ में रास्ता खोजते हैं।"
					},
					"speaker": "bran",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이곳의 얼음은… 단순한 추위가 아니거든.",
						"english": "The ice here... it's not just mere cold.",
						"japanese": "ここの氷は…ただの寒さではないのだ。",
						"chinese": "这里的冰……并非寻常的寒冷。",
						"french": "La glace d'ici... ce n'est pas une simple froideur.",
						"spanish": "El hielo de aquí... no es un frío cualquiera.",
						"vietnamese": "Lớp băng ở đây... không phải là sự lạnh lẽo đơn thuần.",
						"thai": "น้ำแข็งที่นี่... ไม่ใช่แค่ความหนาวเย็นธรรมดา",
						"hindi": "यहाँ की बर्फ... केवल ठंडी नहीं है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "bran"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"speaker": "bran"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "봐. 저 얼어붙은 형상들을.",
						"english": "Look. Those frozen figures.",
						"japanese": "見て。あの凍りついた姿を。",
						"chinese": "看。那些被冻结的身影。",
						"french": "Regarde. Ces formes gelées.",
						"spanish": "Mira. Esas figuras congeladas.",
						"vietnamese": "Nhìn kìa. Những hình dáng đóng băng đó.",
						"thai": "ดูสิ ร่างที่ถูกแช่แข็งเหล่านั้น",
						"hindi": "देखो। वो जमी हुई आकृतियाँ।"
					},
					"type": "speech",
					"speaker": "bran"
				},
				{
					"content": {
						"korean": "생전의 모습 그대로 얼어붙어 있어…",
						"english": "Frozen exactly as they were in life...",
						"japanese": "生前の姿そのままに凍りついている…",
						"chinese": "冻结在他们生前的模样…",
						"french": "Figés exactement tels qu'ils étaient dans la vie...",
						"spanish": "Congelados exactamente como estaban en vida...",
						"vietnamese": "Đóng băng y hệt như khi họ còn sống...",
						"thai": "ถูกแช่แข็งในสภาพที่เคยเป็นมาในชีวิต...",
						"hindi": "जीवन में जैसे थे, वैसे ही जमे हुए हैं..."
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "bran",
					"content": {
						"korean": "이 얼음은 생명을 보존해. 간절한 의지를 담아서.",
						"english": "This ice preserves life. Imbued with desperate will.",
						"japanese": "この氷は命を保つ。切なる意志を込めて。",
						"chinese": "这冰保存着生命。带着迫切的意志。",
						"french": "Cette glace préserve la vie. Imprégnée d'une volonté désespérée.",
						"spanish": "Este hielo preserva la vida. Con una voluntad desesperada.",
						"vietnamese": "Lớp băng này bảo tồn sự sống. Với ý chí tha thiết.",
						"thai": "น้ำแข็งนี้รักษาชีวิตไว้ ด้วยเจตจำนงอันแรงกล้า",
						"hindi": "यह बर्फ जीवन को बचाती है। गहरी इच्छाशक्ति के साथ।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "bran",
					"emotion": "sad",
					"content": {
						"korean": "어떤 슬픔은… 모든 온기를 영원히 붙잡아두려 하지.",
						"english": "Some sorrows... try to hold onto all warmth forever.",
						"japanese": "ある種の悲しみは…全ての温もりを永遠に閉じ込めようとする。",
						"chinese": "有些悲伤…试图永远留住所有的温暖。",
						"french": "Certaines peines… tentent de retenir toute chaleur pour l'éternité.",
						"spanish": "Algunas tristezas... intentan aferrarse a toda la calidez para siempre.",
						"vietnamese": "Có nỗi buồn... cố gắng giữ lại mọi sự ấm áp mãi mãi.",
						"thai": "ความโศกเศร้าบางอย่าง... พยายามยึดติดกับความอบอุ่นทั้งหมดตลอดไป",
						"hindi": "कुछ दुख... सारी गर्माहट को हमेशा के लिए जकड़ना चाहते हैं।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "온기를… 얼음 속에?",
						"english": "Warmth... within ice?",
						"japanese": "温もりを…氷の中に？",
						"chinese": "温暖…在冰雪之中？",
						"french": "De la chaleur… dans la glace ?",
						"spanish": "¿Calidez... dentro del hielo?",
						"vietnamese": "Sự ấm áp... trong băng giá?",
						"thai": "ความอบอุ่น... ในน้ำแข็ง?",
						"hindi": "गर्माहट... बर्फ में?"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "bran",
					"type": "direction",
					"spot": [
						2,
						2
					],
					"action": "enter"
				},
				{
					"speaker": "bran",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "그래. 사라지는 것이 두려웠던 거야.",
						"english": "Yes. They feared disappearing.",
						"japanese": "ええ。消え去ることを恐れたのよ。",
						"chinese": "是的。他们害怕消失。",
						"french": "Oui. Ils craignaient de disparaître.",
						"spanish": "Sí. Temían desaparecer.",
						"vietnamese": "Đúng vậy. Họ sợ biến mất.",
						"thai": "ใช่แล้ว พวกเขากลัวการหายไป",
						"hindi": "हाँ। उन्हें गायब होने का डर था।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "누가… 무엇을 두려워한 거죠?",
						"english": "Who... feared what?",
						"japanese": "誰が…何を恐れたの？",
						"chinese": "谁…害怕什么？",
						"french": "Qui… craignait quoi ?",
						"spanish": "¿Quién... temía qué?",
						"vietnamese": "Ai... đã sợ điều gì?",
						"thai": "ใคร... กลัวอะไร?",
						"hindi": "कौन... किससे डरा था?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "bran",
					"content": {
						"korean": "모든 것을. 사랑했던 모든 것을.",
						"english": "Everything. Everything they loved.",
						"japanese": "全てを。愛した全てを。",
						"chinese": "一切。他们所爱的一切。",
						"french": "Tout. Tout ce qu'ils ont aimé.",
						"spanish": "Todo. Todo lo que amaron.",
						"vietnamese": "Mọi thứ. Mọi thứ họ yêu thương.",
						"thai": "ทุกสิ่ง ทุกสิ่งที่พวกเขารัก",
						"hindi": "सब कुछ। जो कुछ भी उन्होंने प्यार किया।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "bran",
					"type": "speech",
					"content": {
						"korean": "이 얼음은 그들의 간절한 염원이야. 잊히지 않으려는.",
						"english": "This ice is their desperate wish. To not be forgotten.",
						"japanese": "この氷は彼らの切なる願いよ。忘れ去られたくないという。",
						"chinese": "这冰是他们迫切的愿望。不愿被遗忘。",
						"french": "Cette glace est leur vœu désespéré. Ne pas être oubliés.",
						"spanish": "Este hielo es su deseo desesperado. Para no ser olvidados.",
						"vietnamese": "Lớp băng này là mong ước tha thiết của họ. Để không bị lãng quên.",
						"thai": "น้ำแข็งนี้คือความปรารถนาอันแรงกล้าของพวกเขา เพื่อไม่ให้ถูกลืม",
						"hindi": "यह बर्फ उनकी गहरी इच्छा है। भुलाया न जाने की।"
					},
					"emotion": "base"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"action": "enter",
					"type": "direction",
					"speaker": "bran"
				},
				{
					"speaker": "bran",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "우리는 지금, 가장 깊은 슬픔의 근원에 다가가고 있어.",
						"english": "We are now approaching the source of the deepest sorrow.",
						"japanese": "私たちは今、最も深い悲しみの根源に近づいている。",
						"chinese": "我们现在正接近最深层悲伤的根源。",
						"french": "Nous approchons maintenant de la source de la plus profonde tristesse.",
						"spanish": "Ahora nos estamos acercando a la fuente de la tristeza más profunda.",
						"vietnamese": "Chúng ta đang tiến gần đến nguồn gốc của nỗi buồn sâu thẳm nhất.",
						"thai": "ตอนนี้เรากำลังเข้าใกล้แหล่งกำเนิดของความเศร้าที่ลึกที่สุด",
						"hindi": "हम अब सबसे गहरे दुख के स्रोत के करीब पहुँच रहे हैं।"
					}
				},
				{
					"content": {
						"korean": "이 슬픔이… 얼음을 만들었단 말인가요?",
						"english": "This sorrow… created ice?",
						"japanese": "この悲しみが…氷を作ったというのですか？",
						"chinese": "这悲伤…造就了冰吗？",
						"french": "Cette tristesse… a créé la glace ?",
						"spanish": "¿Esta pena… creó el hielo?",
						"vietnamese": "Nỗi buồn này… đã tạo ra băng sao?",
						"thai": "ความเศร้าโศกนี้… สร้างน้ำแข็งขึ้นมาหรือ?",
						"hindi": "यह दुख… क्या इसने बर्फ बनाई है?"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "단순한 슬픔이 아니지. 모든 것을 멈추게 할 만큼 강력한.",
						"english": "No ordinary sorrow. Powerful enough to halt everything.",
						"japanese": "ただの悲しみではない。全てを止めるほど強力な。",
						"chinese": "并非单纯的悲伤。强大到足以让一切停滞。",
						"french": "Pas une simple tristesse. Assez puissante pour tout arrêter.",
						"spanish": "No es una pena ordinaria. Es tan poderosa como para detenerlo todo.",
						"vietnamese": "Không phải nỗi buồn tầm thường. Đủ mạnh để ngưng đọng mọi thứ.",
						"thai": "ไม่ใช่แค่ความเศร้าธรรมดา มันทรงพลังพอที่จะหยุดทุกสิ่งได้",
						"hindi": "यह साधारण दुख नहीं। इतना शक्तिशाली कि सब कुछ रोक दे।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "bran"
				},
				{
					"content": {
						"korean": "마치… 시간이 얼어붙은 것처럼.",
						"english": "As if… time itself froze.",
						"japanese": "まるで…時間が凍りついたかのように。",
						"chinese": "仿佛…时间都冻结了。",
						"french": "Comme si… le temps s'était figé.",
						"spanish": "Como si… el tiempo se hubiera congelado.",
						"vietnamese": "Cứ như… thời gian đã đóng băng.",
						"thai": "ราวกับว่า… เวลาได้หยุดนิ่งไป",
						"hindi": "जैसे… समय ही जम गया हो।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "bran"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"emotion": "sad",
					"content": {
						"korean": "결국… 너희도… 잃게 될 것이다…",
						"english": "In the end… you too… will lose it all…",
						"japanese": "結局…お前たちも…失うことになるだろう…",
						"chinese": "最终…你们也…会失去一切…",
						"french": "Au final… vous aussi… perdrez tout…",
						"spanish": "Al final… vosotros también… lo perderéis todo…",
						"vietnamese": "Cuối cùng… các ngươi cũng… sẽ mất hết thôi…",
						"thai": "ในที่สุด…พวกเจ้าก็…จะสูญเสียทุกสิ่ง…",
						"hindi": "अंततः… तुम भी… सब कुछ खो दोगे…"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "뭘 잃는다는 거야?",
						"english": "Lose what?",
						"japanese": "何を失うって言うんだ？",
						"chinese": "会失去什么？",
						"french": "Perdre quoi ?",
						"spanish": "¿Perder qué?",
						"vietnamese": "Mất cái gì cơ?",
						"thai": "จะเสียอะไร?",
						"hindi": "क्या खो देंगे?"
					},
					"emotion": "base"
				},
				{
					"speaker": "bran",
					"type": "direction",
					"spot": [
						4,
						2
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "bran",
					"type": "speech",
					"content": {
						"korean": "그는 모든 것을 얼음에 가뒀던 자의 그림자일 뿐.",
						"english": "He is merely a shadow of the one who encased all in ice.",
						"japanese": "彼は、全てを氷に閉じ込めた者の影に過ぎない。",
						"chinese": "他不过是那个将一切都封锁在冰中的人的影子。",
						"french": "Il n'est qu'une ombre de celui qui a tout emprisonné dans la glace.",
						"spanish": "Él es solo una sombra de aquel que lo encerró todo en hielo.",
						"vietnamese": "Hắn chỉ là cái bóng của kẻ đã đóng băng mọi thứ.",
						"thai": "เขาเป็นเพียงแค่เงาของผู้ที่กักขังทุกสิ่งไว้ในน้ำแข็ง",
						"hindi": "वह बस उसकी परछाई है जिसने सब कुछ बर्फ में कैद कर दिया था।"
					},
					"emotion": "base"
				},
				{
					"speaker": "bran",
					"type": "speech",
					"content": {
						"korean": "진정한 슬픔은 아직… 이 세계의 심장에 남아있어.",
						"english": "True sorrow still… lingers in the heart of this world.",
						"japanese": "真の悲しみはまだ…この世界の心臓に残っている。",
						"chinese": "真正的悲伤仍…留存在这个世界的心脏之中。",
						"french": "La véritable tristesse… demeure encore au cœur de ce monde.",
						"spanish": "La verdadera tristeza aún… permanece en el corazón de este mundo.",
						"vietnamese": "Nỗi buồn thật sự vẫn còn… trong trái tim thế giới này.",
						"thai": "ความโศกเศร้าที่แท้จริงยังคง…อยู่ในใจกลางของโลกนี้",
						"hindi": "वास्तविक दुःख अभी भी… इस दुनिया के हृदय में शेष है।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "얼어붙었던 공간에 희미한 온기가 돌았다.",
						"english": "A faint warmth spread through the frozen space.",
						"japanese": "凍てついた空間に、かすかな温もりが巡った。",
						"chinese": "一丝微弱的暖意在冰封的空间中流转。",
						"french": "Une faible chaleur parcourut l'espace gelé.",
						"spanish": "Una tenue calidez se extendió por el espacio congelado.",
						"vietnamese": "Một hơi ấm mờ nhạt lan tỏa trong không gian đóng băng.",
						"thai": "ความอบอุ่นจางๆ แผ่ซ่านไปทั่วพื้นที่ที่เยือกแข็ง",
						"hindi": "जमे हुए स्थान में एक हल्की गर्माहट फैल गई।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그러나 진정한 진실은, 아직 깊은 곳에 잠들어 있었다.",
						"english": "But the true truth still slept deep within.",
						"japanese": "しかし、真の真実は、まだ深い場所で眠っていた。",
						"chinese": "然而真正的真相，仍沉睡在深处。",
						"french": "Cependant, la vraie vérité sommeillait encore au plus profond.",
						"spanish": "Sin embargo, la verdadera verdad aún dormía en lo más profundo.",
						"vietnamese": "Nhưng sự thật thực sự vẫn còn ngủ sâu bên trong.",
						"thai": "แต่ความจริงที่แท้จริงยังคงหลับใหลอยู่ในส่วนลึก",
						"hindi": "परंतु वास्तविक सत्य, अभी भी गहराई में सोया हुआ था।"
					},
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "angry",
					"content": {
						"korean": "어리석은 자들… 온기를 찾아봤자… 결국 얼어붙을 뿐이다.",
						"english": "Foolish ones… even if you seek warmth… you will only freeze in the end.",
						"japanese": "愚かな者たち…温もりを求めても…結局は凍えつくだけだ。",
						"chinese": "愚蠢的人们…即使寻找温暖…最终也只会冻结。",
						"french": "Fous… même si vous cherchez la chaleur… vous ne ferez que geler au final.",
						"spanish": "Necios… aunque busquéis calor… al final solo os congelaréis.",
						"vietnamese": "Những kẻ ngu ngốc… dù tìm kiếm hơi ấm… cuối cùng cũng chỉ đóng băng mà thôi.",
						"thai": "คนโง่เง่า…ต่อให้ตามหาความอบอุ่น…สุดท้ายก็ต้องแข็งตายอยู่ดี",
						"hindi": "मूर्खों… गर्माहट ढूंढने पर भी… अंत में तुम बस जम जाओगे।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "아직… 포기하지 않아.",
						"english": "Not yet… I won't give up.",
						"japanese": "まだ…諦めない。",
						"chinese": "我还没有…放弃。",
						"french": "Pas encore… Je n'abandonne pas.",
						"spanish": "Aún no… no me rindo.",
						"vietnamese": "Vẫn chưa… tôi chưa bỏ cuộc.",
						"thai": "ยัง…ไม่ยอมแพ้",
						"hindi": "अभी तक… मैंने हार नहीं मानी।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"speaker": "bran",
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "bran",
					"emotion": "base",
					"content": {
						"korean": "일어나. 너희의 의지가, 이 얼음을 녹일 유일한 희망이야.",
						"english": "Rise. Your will is the only hope to melt this ice.",
						"japanese": "起きろ。お前たちの意志こそが、この氷を溶かす唯一の希望だ。",
						"chinese": "起来。你们的意志，是融化这冰的唯一希望。",
						"french": "Levez-vous. Votre volonté est le seul espoir de faire fondre cette glace.",
						"spanish": "Levantaos. Vuestra voluntad es la única esperanza para derretir este hielo.",
						"vietnamese": "Đứng dậy. Ý chí của các ngươi là hy vọng duy nhất để tan chảy tảng băng này.",
						"thai": "ลุกขึ้น. เจตจำนงของพวกเจ้าคือความหวังเดียวที่จะละลายน้ำแข็งนี้",
						"hindi": "उठो। तुम्हारी इच्छाशक्ति ही, इस बर्फ को पिघलाने की एकमात्र आशा है।"
					}
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "동굴의 가장 깊은 곳. 거대한 얼음 결정이 맥동하고 있었다.",
						"english": "In the deepest part of the cave. A colossal ice crystal pulsed.",
						"japanese": "洞窟の最深部。巨大な氷の結晶が脈動していた。",
						"chinese": "洞穴最深处。一块巨大的冰晶正在脉动。",
						"french": "Dans la partie la plus profonde de la caverne. Un cristal de glace colossal pulsait.",
						"spanish": "En lo más profundo de la cueva. Un colosal cristal de hielo palpitaba.",
						"vietnamese": "Nơi sâu nhất của hang động. Một khối băng khổng lồ đang rung động.",
						"thai": "ในส่วนลึกที่สุดของถ้ำ ผลึกน้ำแข็งขนาดมหึมากำลังเต้นเป็นจังหวะ",
						"hindi": "गुफा के सबसे गहरे हिस्से में। एक विशाल बर्फ का क्रिस्टल धड़क रहा था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "bran",
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "bran",
					"content": {
						"korean": "저게… 얼어붙은 의지의 결정체인가.",
						"english": "Is that… the crystallized will of the frozen?",
						"japanese": "あれが…凍てついた意思の結晶なのか。",
						"chinese": "那就是…冰封意志的结晶吗？",
						"french": "C'est ça… la volonté cristallisée des glaces ?",
						"spanish": "¿Es eso… la voluntad cristalizada de los congelados?",
						"vietnamese": "Đó là… kết tinh ý chí của kẻ bị đóng băng sao?",
						"thai": "นั่นคือ… เจตจำนงที่กลายเป็นผลึกของน้ำแข็งหรือ",
						"hindi": "क्या वह… जमे हुए की जमी हुई इच्छा का क्रिस्टल है?"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "너희는 감히… 영원히 보존될 것을 깨뜨리려는가.",
						"english": "How dare you… try to shatter what is eternally preserved?",
						"japanese": "貴様ら…永遠に保たれるものを壊そうというのか。",
						"chinese": "你们竟敢…试图打破这永恒的封存？",
						"french": "Comment osez-vous… tenter de briser ce qui est éternellement préservé ?",
						"spanish": "¿Cómo os atrevéis… a intentar romper lo que está eternamente preservado?",
						"vietnamese": "Các ngươi… dám phá vỡ thứ được bảo tồn vĩnh cửu sao?",
						"thai": "พวกเจ้ากล้าดีอย่างไร… มาคิดจะทำลายสิ่งที่ถูกเก็บรักษาไว้ชั่วนิรันดร์?",
						"hindi": "तुम्हारी हिम्मत कैसे हुई… उस चीज़ को तोड़ने की, जो शाश्वत रूप से संरक्षित है?"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "영원히 얼어붙게 두지 않을 거야.",
						"english": "I won't let it remain frozen forever.",
						"japanese": "永遠に凍らせてはおかない。",
						"chinese": "我不会让它永远冻结。",
						"french": "Je ne la laisserai pas gelée pour toujours.",
						"spanish": "No dejaré que permanezca congelado para siempre.",
						"vietnamese": "Tôi sẽ không để nó đóng băng mãi mãi.",
						"thai": "ฉันจะไม่ปล่อยให้มันถูกแช่แข็งตลอดไป",
						"hindi": "मैं इसे हमेशा के लिए जमा नहीं रहने दूंगा।"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이 슬픔을… 이해하지 못하는군.",
						"english": "You… don't understand this sorrow.",
						"japanese": "お前たちには…この悲しみが理解できない。",
						"chinese": "你们…不明白这份悲伤。",
						"french": "Vous… ne comprenez pas cette tristesse.",
						"spanish": "Vosotros… no entendéis esta pena.",
						"vietnamese": "Các ngươi… không hiểu nỗi buồn này.",
						"thai": "พวกเจ้า… ไม่เข้าใจความเศร้าโศกนี้",
						"hindi": "तुम… इस दुख को नहीं समझते।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "가장 뜨거운 온기는, 가장 차가운 얼음 속에 있는 법.",
						"english": "The warmest warmth is often found within the coldest ice.",
						"japanese": "最も熱い温もりは、最も冷たい氷の中にあるもの。",
						"chinese": "最炽热的温暖，往往存在于最寒冷的冰中。",
						"french": "La chaleur la plus ardente se trouve souvent au cœur de la glace la plus froide.",
						"spanish": "El calor más cálido se encuentra a menudo dentro del hielo más frío.",
						"vietnamese": "Hơi ấm nồng nàn nhất, thường ẩn chứa trong khối băng lạnh giá nhất.",
						"thai": "ความอบอุ่นที่ร้อนแรงที่สุด มักจะอยู่ในน้ำแข็งที่เย็นที่สุด",
						"hindi": "सबसे गर्म ऊष्मा, अक्सर सबसे ठंडी बर्फ के भीतर पाई जाती है।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"duration_ms": 400,
					"action": "exit",
					"speaker": "bran",
					"type": "direction",
					"direction": "down"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…싸울 수밖에 없겠어.",
						"english": "…I have no choice but to fight.",
						"japanese": "…戦うしかないだろう。",
						"chinese": "…看来只能一战了。",
						"french": "…Je n'ai pas d'autre choix que de me battre.",
						"spanish": "…No tengo más remedio que luchar.",
						"vietnamese": "…Không còn cách nào khác ngoài chiến đấu.",
						"thai": "…คงไม่มีทางเลือกอื่นนอกจากต้องสู้",
						"hindi": "…मेरे पास लड़ने के सिवा कोई चारा नहीं।"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"버려진 얼음 동굴. 차가운 공기가 모든 것을 덮쳤다.",
			"이곳에, 슬픔 속에 갇힌 영혼들이 잠들어 있었다.",
			"그들의 마지막 온기는, 얼음 속에 영원히 박제된 채.",
			"그리고 그 얼음은, 단순한 얼음이 아니었다."
		],
		"english": [
			"An abandoned ice cave. Chilling air consumed all.",
			"Here lay souls, slumbering, ensnared by sorrow.",
			"Their final warmth, eternally encased in ice.",
			"And that ice was no mere ice."
		],
		"japanese": [
			"捨てられた氷の洞窟。冷たい空気が全てを覆った。",
			"ここには、悲しみに囚われた魂たちが眠っていた。",
			"彼らの最後の温もりは、氷の中に永遠に封じ込められていた。",
			"そしてその氷は、ただの氷ではなかった。"
		],
		"chinese": [
			"被遗弃的冰洞。寒冷的空气笼罩了一切。",
			"在这里，被悲伤困住的灵魂沉睡着。",
			"他们最后的余温，永远封存在冰中。",
			"而那冰，并非寻常之冰。"
		],
		"french": [
			"Une caverne de glace abandonnée. L'air froid enveloppait tout.",
			"Ici reposaient des âmes captives de la tristesse.",
			"Leur dernière chaleur, figée à jamais dans la glace.",
			"Et cette glace n'était pas une simple glace."
		],
		"spanish": [
			"Cueva de hielo abandonada. El aire gélido lo cubría todo.",
			"Aquí dormían almas atrapadas en la tristeza.",
			"Su último calor, preservado eternamente en el hielo.",
			"Y ese hielo, no era un hielo cualquiera."
		],
		"vietnamese": [
			"Hang băng bị bỏ hoang. Không khí lạnh giá bao trùm mọi thứ.",
			"Nơi đây, những linh hồn mắc kẹt trong nỗi buồn đang say ngủ.",
			"Hơi ấm cuối cùng của họ, bị đông cứng vĩnh viễn trong băng.",
			"Và lớp băng đó, không phải là băng bình thường."
		],
		"thai": [
			"ถ้ำน้ำแข็งที่ถูกทิ้งร้าง อากาศเย็นยะเยือกปกคลุมทุกสิ่ง",
			"ณ ที่แห่งนี้ วิญญาณที่ถูกจองจำด้วยความโศกเศร้าได้หลับใหล",
			"ความอบอุ่นสุดท้ายของพวกเขา ถูกแช่แข็งอยู่ในน้ำแข็งชั่วนิรันดร์",
			"และน้ำแข็งนั้น ไม่ใช่น้ำแข็งธรรมดา"
		],
		"hindi": [
			"परित्यक्त बर्फ की गुफा। ठंडी हवा ने सब कुछ ढक लिया था।",
			"यहाँ, दुख में फँसी आत्माएँ सो रही थीं।",
			"उनकी आखिरी गर्मी, बर्फ में हमेशा के लिए संरक्षित।",
			"और वह बर्फ, कोई साधारण बर्फ नहीं थी।"
		]
	}
} as const;
