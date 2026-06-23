export const scenario_snowy_amaryn_43_02 = {
	"scenario_id": "snowy_amaryn_43_02",
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
						"korean": "안식처의 온기는 여전했다. 그러나 이곳에 머무는 시간이 길어질수록, 낯선 감각이 찾아왔다.",
						"english": "The sanctuary's warmth remained. Yet, the longer I stayed, a strange sensation crept in.",
						"japanese": "安息所の温もりは変わらなかった。しかし、ここに長く留まるほど、見慣れない感覚が襲ってきた。",
						"chinese": "庇护所的温暖依旧。然而，停留的时间越长，一种陌生的感觉便悄然袭来。",
						"french": "La chaleur du sanctuaire demeurait. Pourtant, plus je restais, plus une étrange sensation s'insinuait.",
						"spanish": "El calor del santuario perduraba. Sin embargo, cuanto más tiempo permanecía, una extraña sensación se apoderaba de mí.",
						"vietnamese": "Sự ấm áp của nơi ẩn náu vẫn còn đó. Tuy nhiên, càng ở lại lâu, một cảm giác xa lạ càng len lỏi đến.",
						"thai": "ความอบอุ่นของที่พำนักยังคงอยู่ แต่ยิ่งอยู่นานเท่าไร ความรู้สึกแปลกประหลาดก็ยิ่งคืบคลานเข้ามา",
						"hindi": "आश्रय की गर्माहट बनी रही। फिर भी, जितना अधिक मैं रहा, उतनी ही एक अजीब भावना ने घर कर लिया।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "점점 몸이 굳는 것 같아...",
						"english": "My body feels like it's stiffening...",
						"japanese": "だんだん体が固まっていくようだ…",
						"chinese": "身体好像越来越僵硬了……",
						"french": "Mon corps semble se raidir...",
						"spanish": "Siento que mi cuerpo se está entumeciendo...",
						"vietnamese": "Cơ thể tôi cứ như đang cứng lại...",
						"thai": "ร่างกายของฉันรู้สึกเหมือนกำลังแข็งทื่อ...",
						"hindi": "मेरा शरीर अकड़ता जा रहा है..."
					},
					"emotion": "sad"
				},
				{
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"type": "direction",
					"action": "enter",
					"speaker": "ivar"
				},
				{
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "이상해. 이 평화, 뭔가 부자연스러워.",
						"english": "Strange. This peace, it feels unnatural.",
						"japanese": "おかしい。この平和、何か不自然だ。",
						"chinese": "奇怪。这份平静，有些不自然。",
						"french": "Étrange. Cette paix, elle est artificielle.",
						"spanish": "Extraño. Esta paz, se siente antinatural.",
						"vietnamese": "Lạ thật. Sự bình yên này, có gì đó không tự nhiên.",
						"thai": "แปลกจัง ความสงบสุขนี้... รู้สึกไม่เป็นธรรมชาติ",
						"hindi": "अजीब है। यह शांति, कुछ अप्राकृतिक लगती है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "ivar",
					"emotion": "sad",
					"content": {
						"korean": "저 얼음 조각상들... 사람 같지 않아? 표정이...",
						"english": "Those ice statues... don't they look like people? Their expressions...",
						"japanese": "あの氷の彫像たち…人間に見えない？表情が…",
						"chinese": "那些冰雕……不像是人吗？他们的表情……",
						"french": "Ces statues de glace... ne ressemblent-elles pas à des personnes ? Leurs expressions...",
						"spanish": "Esas estatuas de hielo... ¿no parecen personas? Sus expresiones...",
						"vietnamese": "Những bức tượng băng đó... chẳng phải giống người sao? Biểu cảm của chúng...",
						"thai": "รูปปั้นน้ำแข็งพวกนั้น... ไม่เหมือนคนเหรอ? สีหน้าของพวกเขา...",
						"hindi": "वो बर्फ की मूर्तियाँ... क्या वे इंसानों जैसी नहीं लगतीं? उनके भाव..."
					}
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "무슨 소리야? 아름답기만 한데.",
						"english": "What are you talking about? They're just beautiful.",
						"japanese": "何を言ってるの？美しいだけじゃない。",
						"chinese": "你在说什么？它们只是很美而已。",
						"french": "De quoi parles-tu ? Elles sont juste magnifiques.",
						"spanish": "¿De qué hablas? Solo son hermosas.",
						"vietnamese": "Cậu đang nói gì vậy? Chúng chỉ đẹp thôi mà.",
						"thai": "คุณพูดอะไรน่ะ? มันก็แค่งดงามเท่านั้นเอง",
						"hindi": "तुम क्या कह रहे हो? वे तो बस खूबसूरत हैं।"
					}
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "아니. 자세히 봐. 고통스러워 보여.",
						"english": "No. Look closely. They look like they're in pain.",
						"japanese": "違う。よく見て。苦しんでいるように見える。",
						"chinese": "不。仔细看。它们看起来很痛苦。",
						"french": "Non. Regarde attentivement. Elles semblent souffrir.",
						"spanish": "No. Mira de cerca. Parecen sufrir.",
						"vietnamese": "Không. Nhìn kỹ đi. Chúng trông như đang đau đớn.",
						"thai": "ไม่ใช่. ลองดูดีๆ สิ พวกเขาดูเหมือนกำลังเจ็บปวด",
						"hindi": "नहीं। ध्यान से देखो। वे दर्द में लग रहे हैं।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "ivar",
					"type": "direction",
					"spot": [
						3,
						4
					],
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이 주변에 더 있을 거야. 이 조각상들, 대체 뭐지?",
						"english": "There must be more around here. What are these statues, anyway?",
						"japanese": "この辺りにもっとあるはずだ。この彫像たち、一体何なんだ？",
						"chinese": "这附近肯定还有。这些雕像到底是什么？",
						"french": "Il doit y en avoir d'autres par ici. Qu'est-ce que sont ces statues, au juste ?",
						"spanish": "Debe haber más por aquí. ¿Qué son estas estatuas, de todos modos?",
						"vietnamese": "Chắc chắn phải có nhiều hơn ở đây. Mấy bức tượng này rốt cuộc là gì?",
						"thai": "แถวนี้ต้องมีอีกแน่ๆ รูปปั้นพวกนี้มันอะไรกันแน่?",
						"hindi": "यहाँ और भी होना चाहिए। ये मूर्तियाँ आखिर क्या हैं?"
					},
					"speaker": "ivar",
					"type": "speech"
				},
				{
					"content": {
						"korean": "너무 깊이 파고들지 마. 이곳은 안식처잖아.",
						"english": "Don't dig too deep. This is a sanctuary.",
						"japanese": "あまり深く詮索するな。ここは安息の地だ。",
						"chinese": "别深究了。这里是安息之地。",
						"french": "Ne fouille pas trop. C'est un sanctuaire.",
						"spanish": "No profundices demasiado. Esto es un santuario.",
						"vietnamese": "Đừng đào sâu quá. Đây là nơi an nghỉ mà.",
						"thai": "อย่าขุดลึกเกินไป ที่นี่คือสถานพักพิงนะ",
						"hindi": "ज़्यादा गहराई तक मत खोदो। यह एक अभयारण्य है।"
					},
					"emotion": "base",
					"speaker": "character_2",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "안식? 이 기분 나쁜 따뜻함이?",
						"english": "Rest? This unsettling warmth?",
						"japanese": "安息？この不気味な暖かさが？",
						"chinese": "安息？这种令人不安的温暖？",
						"french": "Du repos ? Cette chaleur inquiétante ?",
						"spanish": "¿Descanso? ¿Este calor inquietante?",
						"vietnamese": "An nghỉ? Cái sự ấm áp khó chịu này ư?",
						"thai": "พักผ่อน? ความอบอุ่นที่น่าขนลุกนี่น่ะเหรอ?",
						"hindi": "आराम? यह बेचैन करने वाली गर्मी?"
					},
					"type": "speech",
					"speaker": "ivar"
				},
				{
					"content": {
						"korean": "마치, 누군가의 고통을 빨아먹는 것 같아.",
						"english": "It's like it's sucking someone's pain.",
						"japanese": "まるで、誰かの苦痛を吸い取っているようだ。",
						"chinese": "仿佛在吸食某人的痛苦。",
						"french": "C'est comme si ça absorbait la douleur de quelqu'un.",
						"spanish": "Es como si estuviera absorbiendo el dolor de alguien.",
						"vietnamese": "Cứ như thể nó đang hút lấy nỗi đau của ai đó.",
						"thai": "เหมือนกำลังดูดกลืนความเจ็บปวดของใครบางคนอยู่เลย",
						"hindi": "ऐसा लगता है, जैसे यह किसी का दर्द चूस रहा हो।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "ivar"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"type": "direction",
					"action": "enter",
					"speaker": "ivar"
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이 조각상의 기운이... 마치 살아있는 사람을 그대로 굳힌 것 같아.",
						"english": "The aura of this statue... it's like a living person was frozen solid.",
						"japanese": "この彫像の気配が…まるで生きている人間がそのまま固められたようだ。",
						"chinese": "这雕像的气息……仿佛是将活生生的人凝固了一般。",
						"french": "L'aura de cette statue... c'est comme si une personne vivante avait été figée.",
						"spanish": "El aura de esta estatua... es como si una persona viva hubiera sido solidificada.",
						"vietnamese": "Khí tức của bức tượng này... cứ như một người sống bị hóa đá vậy.",
						"thai": "ออร่าของรูปปั้นนี้... เหมือนกับว่ามีชีวิตคนถูกแช่แข็งเอาไว้เลย",
						"hindi": "इस मूर्ति की आभा... ऐसा लगता है जैसे किसी जीवित व्यक्ति को जमा दिया गया हो।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그때였다. 어둠 속에서 거대한 그림자가 나타났다.",
						"english": "It was then. A colossal shadow emerged from the darkness.",
						"japanese": "その時だった。闇の中から巨大な影が現れた。",
						"chinese": "就在那时。一个巨大的身影从黑暗中浮现。",
						"french": "C'est alors qu'une ombre colossale émergea des ténèbres.",
						"spanish": "Fue entonces. Una sombra colosal emergió de la oscuridad.",
						"vietnamese": "Chính lúc đó. Một cái bóng khổng lồ xuất hiện từ bóng tối.",
						"thai": "ตอนนั้นเอง เงาขนาดมหึมาก็ปรากฏขึ้นจากความมืดมิด",
						"hindi": "तभी। अंधेरे में से एक विशाल छाया प्रकट हुई।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"spot": [
						5,
						4
					],
					"duration_ms": 500,
					"speaker": "random_boss",
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "{random_boss}: 감히 이곳의 평화를 깨려는가?",
						"english": "{random_boss}: Dare you disturb the peace of this place?",
						"japanese": "{random_boss}: 貴様、敢えてこの地の平和を乱すというのか？",
						"chinese": "{random_boss}: 竟敢打破这里的平静？",
						"french": "{random_boss}: Oserez-vous troubler la paix de ce lieu ?",
						"spanish": "{random_boss}: ¿Te atreves a perturbar la paz de este lugar?",
						"vietnamese": "{random_boss}: Ngươi dám phá vỡ sự bình yên nơi đây sao?",
						"thai": "{random_boss}: กล้าดียังไงถึงมาทำลายความสงบสุขของที่นี่?",
						"hindi": "{random_boss}: क्या तुम इस स्थान की शांति भंग करने की हिम्मत करते हो?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "평화? 이건 기만이야!",
						"english": "Peace? This is a deception!",
						"japanese": "平和？これは欺瞞だ！",
						"chinese": "平静？这是一种欺骗！",
						"french": "La paix ? C'est une tromperie !",
						"spanish": "¿Paz? ¡Esto es un engaño!",
						"vietnamese": "Bình yên? Đây là một sự lừa dối!",
						"thai": "ความสงบสุข? นี่มันคือการหลอกลวง!",
						"hindi": "शांति? यह एक धोखा है!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "ivar"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "{random_boss}: 너 같은 의심은 이곳에 필요 없어.",
						"english": "{random_boss}: Doubt like yours has no place here.",
						"japanese": "{random_boss}: 貴様のような疑念は、ここには不要だ。",
						"chinese": "{random_boss}: 像你这样的怀疑，这里不需要。",
						"french": "{random_boss}: Des doutes comme les tiens n'ont pas leur place ici.",
						"spanish": "{random_boss}: Dudas como las tuyas no son necesarias aquí.",
						"vietnamese": "{random_boss}: Sự nghi ngờ như của ngươi không có chỗ ở nơi đây.",
						"thai": "{random_boss}: ความสงสัยแบบเจ้าไม่จำเป็นที่นี่",
						"hindi": "{random_boss}: तुम्हारे जैसा संदेह यहाँ आवश्यक नहीं है।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						4,
						4
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "random_boss",
					"type": "direction"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "{random_boss}: 이곳은 영원한 안식처. 어떤 의심도 허락하지 않는다.",
						"english": "{random_boss}: This is an eternal sanctuary. No doubt is permitted.",
						"japanese": "{random_boss}: ここは永遠の安息の地。いかなる疑念も許されない。",
						"chinese": "{random_boss}: 这里是永恒的安息之地。不允许任何怀疑。",
						"french": "{random_boss}: C'est un sanctuaire éternel. Aucun doute n'est permis.",
						"spanish": "{random_boss}: Este es un santuario eterno. No se permite ninguna duda.",
						"vietnamese": "{random_boss}: Đây là nơi an nghỉ vĩnh hằng. Mọi sự nghi ngờ đều không được phép.",
						"thai": "{random_boss}: ที่นี่คือสถานพักพิงนิรันดร์ ไม่มีการอนุญาตให้สงสัยใดๆ",
						"hindi": "{random_boss}: यह एक शाश्वत अभयारण्य है। किसी भी संदेह की अनुमति नहीं है।"
					}
				},
				{
					"content": {
						"korean": "크윽...!",
						"english": "Ugh...!",
						"japanese": "くっ...！",
						"chinese": "呃...！",
						"french": "Urgh...!",
						"spanish": "¡Uf...!",
						"vietnamese": "Khụ...!",
						"thai": "อึก...!",
						"hindi": "उफ़...!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "ivar"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "이바르!",
						"english": "Ivar!",
						"japanese": "イヴァー！",
						"chinese": "伊瓦尔！",
						"french": "Ivar !",
						"spanish": "¡Ivar!",
						"vietnamese": "Ivar!",
						"thai": "ไอบาร์!",
						"hindi": "ईवर!"
					}
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "{random_boss}: 너는 이곳의 평화를 해칠 뿐.",
						"english": "{random_boss}: You only disturb the peace here.",
						"japanese": "{random_boss}: お前はただ、ここの平和を乱すだけだ。",
						"chinese": "{random_boss}: 你只会破坏这里的和平。",
						"french": "{random_boss}: Tu ne fais que perturber la paix ici.",
						"spanish": "{random_boss}: Solo perturbas la paz aquí.",
						"vietnamese": "{random_boss}: Ngươi chỉ làm hại hòa bình nơi đây.",
						"thai": "{random_boss}: เจ้ามีแต่จะทำลายความสงบสุขที่นี่",
						"hindi": "{random_boss}: तुम यहाँ की शांति भंग करते हो।"
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "exit",
					"speaker": "ivar",
					"direction": "down",
					"duration_ms": 500
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "이건... 함정이야...!",
						"english": "This is... a trap...!",
						"japanese": "これは...罠だ...！",
						"chinese": "这是...陷阱...！",
						"french": "C'est... un piège...!",
						"spanish": "¡Esto es... una trampa...!",
						"vietnamese": "Đây là... một cái bẫy...!",
						"thai": "นี่มัน... กับดัก...!",
						"hindi": "यह... एक जाल है...!"
					},
					"speaker": "ivar",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이바르가... 사라졌어.",
						"english": "Ivar... is gone.",
						"japanese": "イヴァーが...消えた。",
						"chinese": "伊瓦尔...消失了。",
						"french": "Ivar... a disparu.",
						"spanish": "Ivar... ha desaparecido.",
						"vietnamese": "Ivar... đã biến mất.",
						"thai": "ไอบาร์... หายไปแล้ว",
						"hindi": "ईवर... गायब हो गया।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "안식처는 다시 평화를 되찾았다. 하지만 그 평화는 더욱 불안하게 느껴졌다.",
						"english": "The sanctuary regained peace. But that peace felt even more unsettling.",
						"japanese": "聖域は再び平和を取り戻した。だがその平和は、より一層不穏に感じられた。",
						"chinese": "庇护所恢复了和平。但那和平却让人感到更加不安。",
						"french": "Le sanctuaire a retrouvé la paix. Mais cette paix semblait encore plus troublante.",
						"spanish": "El santuario recuperó la paz. Pero esa paz se sentía aún más inquietante.",
						"vietnamese": "Nơi trú ẩn đã tìm lại được bình yên. Nhưng sự bình yên đó lại càng thêm bất an.",
						"thai": "สถานที่ศักดิ์สิทธิ์กลับคืนสู่ความสงบสุขอีกครั้ง แต่ความสงบสุขนั้นกลับรู้สึกไม่มั่นคงมากขึ้น",
						"hindi": "अभयारण्य ने शांति पुनः प्राप्त की। लेकिन वह शांति और भी अधिक अशांत महसूस हुई।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "{random_boss}: 크윽... 하지만 평화는... 계속될 것이다...",
						"english": "{random_boss}: Ugh... But peace... will continue...",
						"japanese": "{random_boss}: くっ...しかし平和は...続くのだ...",
						"chinese": "{random_boss}: 咳...但是和平会...继续下去的...",
						"french": "{random_boss}: Ugh... Mais la paix... perdurera...",
						"spanish": "{random_boss}: Ugh... Pero la paz... continuará...",
						"vietnamese": "{random_boss}: Hừ... nhưng hòa bình... sẽ tiếp diễn...",
						"thai": "{random_boss}: อึก... แต่สันติ... จะคงอยู่ต่อไป...",
						"hindi": "{random_boss}: उफ़... पर शांति... बनी रहेगी..."
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "겨우... 쓰러뜨렸어.",
						"english": "Barely... defeated it.",
						"japanese": "かろうじて... 倒した。",
						"chinese": "终于... 打败了。",
						"french": "À peine... vaincu.",
						"spanish": "Apenas... lo derroté.",
						"vietnamese": "Cuối cùng... cũng hạ gục rồi.",
						"thai": "ในที่สุด... ก็โค่นลงได้แล้ว",
						"hindi": "मुश्किल से... हरा पाया।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "쓰러진 정체 모를 자. 하지만 안식처의 따뜻함은 여전히 기이했다. 더 깊은 곳에 진실이 숨겨져 있는 듯했다.",
						"english": "The unknown one fell. Yet the sanctuary's warmth remained uncanny. It seemed a deeper truth lay hidden within.",
						"japanese": "倒れた正体不明の者。だが、安息所の暖かさは依然として奇妙だった。さらに深部に真実が隠されているようだった。",
						"chinese": "未知的存在倒下了。然而，圣所的温暖依然诡异。仿佛更深处隐藏着真相。",
						"french": "L'inconnu est tombé. Pourtant, la chaleur du sanctuaire restait étrange. Une vérité plus profonde semblait y être cachée.",
						"spanish": "El desconocido cayó. Sin embargo, la calidez del santuario seguía siendo extraña. Parecía que una verdad más profunda estaba oculta.",
						"vietnamese": "Kẻ vô danh đã ngã xuống. Thế nhưng, sự ấm áp của thánh địa vẫn kỳ lạ. Dường như một sự thật sâu hơn đang ẩn giấu bên trong.",
						"thai": "ผู้ไร้นามล้มลงแล้ว ทว่าความอบอุ่นในสถานที่แห่งนี้ยังคงแปลกประหลาด ราวกับมีบางสิ่งซ่อนอยู่ลึกเข้าไปข้างใน",
						"hindi": "अज्ञात व्यक्ति गिर गया। फिर भी, अभयारण्य की गर्मी रहस्यमय बनी हुई थी। ऐसा लग रहा था कि एक गहरा सच अंदर छिपा है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "의심을 품은 자가 사라진 후, 어둠 속에서 거대한 그림자가 다시 모습을 드러냈다.",
						"english": "After the doubter vanished, a colossal shadow reappeared from the darkness.",
						"japanese": "疑念を抱いた者が消えた後、闇の中から巨大な影が再び姿を現した。",
						"chinese": "心怀疑惑之人消失后，巨大的阴影再次从黑暗中显现。",
						"french": "Après la disparition du sceptique, une ombre colossale réapparut des ténèbres.",
						"spanish": "Después de que el que dudaba desapareciera, una sombra colosal reapareció de la oscuridad.",
						"vietnamese": "Sau khi kẻ nghi ngờ biến mất, một bóng đen khổng lồ lại xuất hiện từ trong bóng tối.",
						"thai": "หลังจากผู้สงสัยหายไป เงาขนาดใหญ่ก็ปรากฏขึ้นอีกครั้งจากความมืด",
						"hindi": "संदेह करने वाले के गायब होने के बाद, अँधेरे से एक विशाल छाया फिर से प्रकट हुई।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"action": "enter",
					"speaker": "random_boss",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"content": {
						"korean": "{random_boss}: 감히 이곳의 평화를 의심하다니. 너희도 그와 같은가?",
						"english": "{random_boss}: How dare you doubt the peace of this place. Are you like him too?",
						"japanese": "{random_boss}: よくもこの地の平和を疑ったな。お前たちも彼と同じか？",
						"chinese": "{random_boss}: 竟敢怀疑这里的和平。你们也和他一样吗？",
						"french": "{random_boss}: Comment osez-vous douter de la paix de ce lieu. Êtes-vous aussi comme lui ?",
						"spanish": "¿Cómo osas dudar de la paz de este lugar? ¿Vosotros también sois como él?",
						"vietnamese": "{random_boss}: Sao các ngươi dám nghi ngờ sự bình yên nơi đây. Các ngươi cũng giống hắn sao?",
						"thai": "{random_boss}: เจ้ากล้าดียังไงมาสงสัยความสงบสุขของที่นี่ พวกเจ้าก็เป็นเหมือนกับเขาด้วยหรือ?",
						"hindi": "{random_boss}: तुम्हारी हिम्मत कैसे हुई इस जगह की शांति पर शक करने की। क्या तुम भी उसी जैसे हो?"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "이바르를 어디로 보냈지?",
						"english": "Where did you send Ivar?",
						"japanese": "イヴァーをどこへやった？",
						"chinese": "你把伊瓦尔送到哪里去了？",
						"french": "Où as-tu envoyé Ivar ?",
						"spanish": "¿A dónde enviaste a Ivar?",
						"vietnamese": "Ngươi đã gửi Ivar đi đâu?",
						"thai": "เจ้าส่งไอบาร์ไปที่ไหน?",
						"hindi": "तुमने ईवर को कहाँ भेजा?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "{random_boss}: 영원한 안식으로.",
						"english": "{random_boss}: To eternal rest.",
						"japanese": "{random_boss}: 永遠の安息へ。",
						"chinese": "{random_boss}: 到永恒的安息中。",
						"french": "{random_boss}: Vers le repos éternel.",
						"spanish": "{random_boss}: Al descanso eterno.",
						"vietnamese": "{random_boss}: Đến nơi an nghỉ vĩnh hằng.",
						"thai": "{random_boss}: สู่การพักผ่อนชั่วนิรันดร์",
						"hindi": "{random_boss}: अनन्त विश्राम में।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "….",
						"english": "....",
						"japanese": "....",
						"chinese": "....",
						"french": "....",
						"spanish": "....",
						"vietnamese": "....",
						"thai": "....",
						"hindi": "...."
					},
					"emotion": "angry"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 온기를 뿜어냈다. 움직일 수 없었다.",
						"english": "A massive shadow radiated warmth. I couldn't move.",
						"japanese": "巨大な影が温かさを放っていた。動けなかった。",
						"chinese": "巨大的影子散发出温暖。我无法动弹。",
						"french": "Une ombre gigantesque irradiait de la chaleur. Impossible de bouger.",
						"spanish": "Una sombra gigantesca irradiaba calor. No podía moverme.",
						"vietnamese": "Một bóng tối khổng lồ tỏa ra hơi ấm. Tôi không thể cử động.",
						"thai": "เงามหึมาแผ่ไออุ่น ฉันขยับไม่ได้เลย",
						"hindi": "एक विशाल परछाई ने गर्माहट बिखेरी। मैं हिल नहीं सका।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "{random_boss}: 하찮은 의심으로 이곳을 더럽히지 마라. 영원히 잠들어라.",
						"english": "{random_boss}: Do not defile this place with your petty doubts. Sleep forever.",
						"japanese": "{random_boss}: 些細な疑念でここを汚すな。永遠に眠れ。",
						"chinese": "{random_boss}: 不要用你卑微的疑虑玷污这里。永远沉睡吧。",
						"french": "{random_boss}: Ne souille pas ce lieu de tes doutes insignifiants. Dors pour l'éternité.",
						"spanish": "{random_boss}: No profanes este lugar con tus insignificantes dudas. Duerme para siempre.",
						"vietnamese": "{random_boss}: Đừng làm ô uế nơi này bằng những nghi ngờ tầm thường của ngươi. Ngủ vĩnh viễn đi.",
						"thai": "{random_boss}: อย่าแปดเปื้อนที่นี่ด้วยความสงสัยเล็กน้อยของเจ้า จงหลับใหลชั่วนิรันดร์",
						"hindi": "{random_boss}: अपने तुच्छ संदेहों से इस जगह को अपवित्र मत करो। हमेशा के लिए सो जाओ।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "아직... 아니야...!",
						"english": "Not... yet...!",
						"japanese": "まだ... だめだ...！",
						"chinese": "不... 还没...！",
						"french": "Pas... encore... !",
						"spanish": "¡Aún... no...!",
						"vietnamese": "Chưa... được...!",
						"thai": "ยัง... ไม่ใช่...!",
						"hindi": "अभी... नहीं...!"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"따뜻한 안식처. 영원한 평화가 약속된 곳.",
			"하지만 어딘가 이상했다. 이 평화는... 낯설었다.",
			"얼어붙은 조각상들 사이로, 속삭이는 의심이 번져나갔다.",
			"그리고 진실은, 언제나 차가운 법이니까."
		],
		"english": [
			"A warm sanctuary. A place promised eternal peace.",
			"But something felt off. This peace... felt alien.",
			"Amidst frozen statues, a whispering doubt spread.",
			"And the truth, it's always cold."
		],
		"japanese": [
			"暖かい安息の地。永遠の平和が約束された場所。",
			"しかし、どこかおかしかった。この平和は…異質だった。",
			"凍りついた彫像の間で、ささやく疑念が広がった。",
			"そして真実は、いつも冷たいものだから。"
		],
		"chinese": [
			"温暖的庇护所。一个应许永恒和平之地。",
			"但总有些不对劲。这份平静……如此陌生。",
			"在冰冷的雕像之间，低语的疑虑蔓延开来。",
			"因为真相，总是冰冷的。"
		],
		"french": [
			"Un havre chaleureux. Un lieu de paix éternelle promise.",
			"Mais quelque chose clochait. Cette paix... était étrange.",
			"Au milieu des statues gelées, un doute murmurant se répandit.",
			"Car la vérité est toujours froide."
		],
		"spanish": [
			"Un cálido santuario. Un lugar donde la paz eterna está prometida.",
			"Pero algo no estaba bien. Esta paz... era extraña.",
			"Entre las estatuas congeladas, una duda susurrante se extendía.",
			"Y la verdad, siempre es fría."
		],
		"vietnamese": [
			"Một nơi trú ẩn ấm áp. Một nơi bình yên vĩnh cửu được hứa hẹn.",
			"Nhưng có gì đó không ổn. Sự bình yên này... thật xa lạ.",
			"Giữa những bức tượng đóng băng, một nghi ngờ thì thầm lan rộng.",
			"Và sự thật, luôn luôn lạnh lẽo."
		],
		"thai": [
			"ที่พำนักอันอบอุ่น สถานที่ซึ่งสันติสุขนิรันดร์ได้ถูกสัญญาไว้",
			"แต่มีบางอย่างแปลกไป ความสงบสุขนี้... รู้สึกแปลกหน้า",
			"ท่ามกลางรูปปั้นน้ำแข็ง ความสงสัยกระซิบกระซาบก็แพร่กระจายไป",
			"และความจริงนั้น, มักจะเย็นชาเสมอ"
		],
		"hindi": [
			"एक गर्मजोशी भरा आश्रय। वह स्थान जहाँ शाश्वत शांति का वादा किया गया था।",
			"लेकिन कुछ अजीब था। यह शांति... अजनबी थी।",
			"जमी हुई मूर्तियों के बीच, एक फुसफुसाता संदेह फैल गया।",
			"और सच, हमेशा ठंडा होता है।"
		]
	}
} as const;
