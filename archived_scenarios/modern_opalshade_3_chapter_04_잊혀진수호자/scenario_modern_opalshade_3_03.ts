export const scenario_modern_opalshade_3_03 = {
	"scenario_id": "modern_opalshade_3_03",
	"order": 3,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"kai": {
			"id": "mon_d7f29313-b8fb-49da-9a1a-01df5d13866e",
			"name": {
				"korean": "카이",
				"english": "Kai",
				"japanese": "カイ",
				"chinese": "凯",
				"french": "Kai",
				"spanish": "Kai",
				"vietnamese": "Kai",
				"thai": "ไค",
				"hindi": "काई"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f10d9184-4155-4bb9-de2d-db61463f7c00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/e41f8e03-08c9-4a4f-6f72-fa9342876f00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "시간이 멈춘 폐허. 낡은 극장이 잿더미처럼 서 있었다.",
						"english": "Time-stopped ruins. An old theater stood, like ashes.",
						"japanese": "時間が止まった廃墟。古い劇場が灰のように立っていた。",
						"chinese": "时间停滞的废墟。一座古老的剧场如同灰烬般矗立着。",
						"french": "Des ruines où le temps s'est arrêté. Un vieux théâtre se tenait là, comme des cendres.",
						"spanish": "Ruinas donde el tiempo se detuvo. Un viejo teatro se alzaba como cenizas.",
						"vietnamese": "Hoang tàn nơi thời gian ngừng lại. Một nhà hát cũ kỹ đứng sừng sững như đống tro tàn.",
						"thai": "ซากปรักหักพังที่กาลเวลาหยุดนิ่ง โรงละครเก่าแก่ตั้งตระหง่านราวกับกองเถ้าถ่าน",
						"hindi": "समय ठहरा हुआ खंडहर। एक पुराना रंगमंच राख की तरह खड़ा था।"
					},
					"emotion": "base"
				},
				{
					"speaker": "kai",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "kai",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "여기로군. 지하 네트워크의 핵심.",
						"english": "This is it. The core of the underground network.",
						"japanese": "ここか。地下ネットワークの核心。",
						"chinese": "就是这里。地下网络的核心。",
						"french": "C'est ici. Le cœur du réseau souterrain.",
						"spanish": "Aquí es. El núcleo de la red subterránea.",
						"vietnamese": "Chính là đây. Trái tim của mạng lưới ngầm.",
						"thai": "ที่นี่เอง จุดศูนย์กลางของเครือข่ายใต้ดิน",
						"hindi": "यह रहा। भूमिगत नेटवर्क का केंद्र।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "뭘 찾으시죠?",
						"english": "What are you looking for?",
						"japanese": "何をお探しですか？",
						"chinese": "您在找什么？",
						"french": "Que cherchez-vous ?",
						"spanish": "¿Qué buscan?",
						"vietnamese": "Anh tìm gì?",
						"thai": "คุณกำลังมองหาอะไรอยู่?",
						"hindi": "आप क्या ढूंढ रहे हैं?"
					}
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "오래전 사라진 조직의 흔적. 이 폐허 아래에 문양이 남아있다고 했어.",
						"english": "Traces of an organization that disappeared long ago. They said a symbol remains beneath these ruins.",
						"japanese": "ずっと前に消えた組織の痕跡。この廃墟の下に文様が残っていると聞いた。",
						"chinese": "很久以前消失的组织的痕迹。据说图案还留在这废墟之下。",
						"french": "Des traces d'une organisation disparue il y a longtemps. On m'a dit qu'un motif restait sous ces ruines.",
						"spanish": "Rastros de una organización que desapareció hace mucho tiempo. Dijeron que un símbolo permanece bajo estas ruinas.",
						"vietnamese": "Dấu vết của một tổ chức biến mất từ lâu. Họ nói rằng một biểu tượng vẫn còn dưới những tàn tích này.",
						"thai": "ร่องรอยขององค์กรที่หายสาบสูญไปนานแล้ว พวกเขาบอกว่ามีสัญลักษณ์หลงเหลืออยู่ใต้ซากปรักหักพังนี้",
						"hindi": "एक संगठन के निशान जो बहुत पहले गायब हो गया था। उन्होंने कहा कि इन खंडहरों के नीचे एक प्रतीक बचा हुआ है।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "사라진 조직이라…",
						"english": "A vanished organization...",
						"japanese": "消えた組織か…",
						"chinese": "消失的组织啊…",
						"french": "Une organisation disparue, donc…",
						"spanish": "Una organización desaparecida, eh...",
						"vietnamese": "Một tổ chức biến mất sao…",
						"thai": "องค์กรที่หายสาบสูญงั้นเหรอ...",
						"hindi": "एक गायब संगठन, तो..."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "kai",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "문양은 단순한 표식이 아니야. 그들의 순수한 신념이 담겨있지.",
						"english": "The symbol isn't just a mark. It holds their pure conviction.",
						"japanese": "文様は単なる標識ではない。彼らの純粋な信念が込められている。",
						"chinese": "这个图案不只是一个标记。它承载着他们纯粹的信念。",
						"french": "Le motif n'est pas qu'une simple marque. Il contient leur pure conviction.",
						"spanish": "El símbolo no es solo una marca. Contiene su pura convicción.",
						"vietnamese": "Biểu tượng không chỉ là một dấu hiệu. Nó chứa đựng niềm tin thuần khiết của họ.",
						"thai": "สัญลักษณ์นี้ไม่ใช่แค่เครื่องหมาย แต่มันแฝงไว้ด้วยความเชื่ออันบริสุทธิ์ของพวกเขา",
						"hindi": "यह प्रतीक सिर्फ एक निशान नहीं है। इसमें उनकी शुद्ध आस्था निहित है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "kai"
				},
				{
					"content": {
						"korean": "순수한 신념?",
						"english": "Pure conviction?",
						"japanese": "純粋な信念？",
						"chinese": "纯粹的信念？",
						"french": "Pure conviction ?",
						"spanish": "¿Pura convicción?",
						"vietnamese": "Niềm tin thuần khiết?",
						"thai": "ศรัทธาบริสุทธิ์?",
						"hindi": "शुद्ध विश्वास?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "어디선가 애처로운 멜로디가 들려왔다.",
						"english": "A mournful melody drifted from somewhere.",
						"japanese": "どこからか、物悲しい旋律が聞こえてきた。",
						"chinese": "不知从何处传来一阵哀怨的旋律。",
						"french": "Une mélodie plaintive s'éleva de quelque part.",
						"spanish": "Una melodía lastimera se escuchó de algún lugar.",
						"vietnamese": "Một giai điệu ai oán vang lên từ đâu đó.",
						"thai": "ท่วงทำนองที่น่าเศร้าโศกดังมาจากที่ใดที่หนึ่ง",
						"hindi": "कहीं से एक दर्दनाक धुन सुनाई दी।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"emotion": "sad",
					"content": {
						"korean": "…슬퍼.",
						"english": "...It's sad.",
						"japanese": "…悲しい。",
						"chinese": "……好悲伤。",
						"french": "...C'est triste.",
						"spanish": "...Qué triste.",
						"vietnamese": "...Buồn quá.",
						"thai": "...เศร้าจัง",
						"hindi": "...दुखद है।"
					}
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "소문으로만 듣던… 환영의 애가로군. 과거의 슬픔이 공간에 맴도는 거야.",
						"english": "The rumored... Elegy of Illusion. The sorrow of the past echoes in this space.",
						"japanese": "噂に聞く… 幻影の哀歌か。過去の悲しみがこの空間に漂っている。",
						"chinese": "传闻中的……幻影挽歌。过去的悲伤萦绕在这空间里。",
						"french": "L'Élégie de l'Illusion, celle dont on parle... La tristesse du passé hante cet endroit.",
						"spanish": "Es la... Elegía de la Ilusión de la que se rumorea. La tristeza del pasado flota en este espacio.",
						"vietnamese": "Đây là... Khúc bi ca Ảo ảnh trong truyền thuyết. Nỗi buồn quá khứ vẫn còn vương vấn nơi đây.",
						"thai": "บทเพลงไว้อาลัยแห่งภาพลวงตา...ที่ร่ำลือกัน ความเศร้าในอดีตยังคงวนเวียนอยู่ในพื้นที่นี้",
						"hindi": "यह अफवाहों में सुनी… माया की शोकगीत है। अतीत का दुख इस जगह में मंडरा रहा है।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "혹시… 낡은 사진 같은 건 없나요?",
						"english": "Perhaps... there isn't an old photo, is there?",
						"japanese": "もしかして… 古い写真とか、ありませんか？",
						"chinese": "难道……没有旧照片之类的吗？",
						"french": "Par hasard... n'y aurait-il pas une vieille photo ?",
						"spanish": "¿Quizás... no hay una foto antigua o algo así?",
						"vietnamese": "Có lẽ... không có tấm ảnh cũ nào sao?",
						"thai": "บางที... ไม่มีรูปถ่ายเก่าๆ เลยเหรอ?",
						"hindi": "कहीं... कोई पुरानी तस्वीर तो नहीं है?"
					}
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"speaker": "kai",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "그들은 도시의 그림자를 밝히려 했어. 하지만 역사는 그들을 지워버렸지.",
						"english": "They sought to unveil the city's shadows, but history erased them.",
						"japanese": "彼らは都市の影を明らかにしようとした。だが歴史は彼らを消し去った。",
						"chinese": "他们试图揭露城市的阴影。但历史将他们抹去了。",
						"french": "Ils ont tenté de percer les ombres de la ville. Mais l'histoire les a effacés.",
						"spanish": "Intentaron iluminar las sombras de la ciudad. Pero la historia los borró.",
						"vietnamese": "Họ đã cố gắng vén màn bóng tối của thành phố. Nhưng lịch sử đã xóa sổ họ.",
						"thai": "พวกเขาพยายามจะเปิดเผยเงามืดของเมือง แต่ประวัติศาสตร์กลับลบเลือนพวกเขาไป",
						"hindi": "उन्होंने शहर की परछाइयों को उजागर करने की कोशिश की। लेकिन इतिहास ने उन्हें मिटा दिया।"
					},
					"speaker": "kai",
					"type": "speech"
				},
				{
					"content": {
						"korean": "왜 지워졌죠?",
						"english": "Why were they erased?",
						"japanese": "なぜ消されたのですか？",
						"chinese": "为什么被抹去？",
						"french": "Pourquoi ont-ils été effacés ?",
						"spanish": "¿Por qué fueron borrados?",
						"vietnamese": "Tại sao lại bị xóa sổ?",
						"thai": "ทำไมถึงถูกลบเลือน?",
						"hindi": "उन्हें क्यों मिटा दिया गया?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "진실은 항상 불편하니까. 그리고… 이 멜로디는 그 불편함의 증거야.",
						"english": "Because the truth is always unsettling. And... this melody is the proof of that unease.",
						"japanese": "真実は常に不都合だからだ。そして…この旋律はその不都合の証拠だよ。",
						"chinese": "因为真相总是令人不安。而且……这旋律就是那不安的证据。",
						"french": "Parce que la vérité est toujours dérangeante. Et... cette mélodie en est la preuve.",
						"spanish": "Porque la verdad siempre es incómoda. Y... esta melodía es la prueba de esa incomodidad.",
						"vietnamese": "Vì sự thật luôn khó chấp nhận. Và... giai điệu này là bằng chứng cho sự khó chịu đó.",
						"thai": "เพราะความจริงมักจะอึดอัดเสมอ และ... ท่วงทำนองนี้คือหลักฐานของความอึดอัดนั้น",
						"hindi": "क्योंकि सच्चाई हमेशा असहज होती है। और… यह धुन उस असुविधा का प्रमाण है।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "점점 더 짙어지는 애처로운 멜로디가 어둠 속에서 울려 퍼졌다.",
						"english": "The increasingly sorrowful melody resonated deeply in the darkness.",
						"japanese": "ますます深まる物悲しい旋律が、闇の中で響き渡った。",
						"chinese": "愈发浓重的哀怨旋律在黑暗中回荡。",
						"french": "La mélodie plaintive, de plus en plus intense, résonna dans l'obscurité.",
						"spanish": "La melodía lastimera, cada vez más intensa, resonó en la oscuridad.",
						"vietnamese": "Giai điệu ai oán ngày càng sâu lắng vang vọng trong bóng tối.",
						"thai": "ท่วงทำนองที่น่าเศร้าโศกยิ่งเข้มข้นขึ้นเรื่อยๆ ก้องกังวานในความมืด",
						"hindi": "गहराती हुई दर्दनाक धुन अंधेरे में गूंज उठी।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "마음이 아파.",
						"english": "My heart aches.",
						"japanese": "胸が痛む。",
						"chinese": "心好痛。",
						"french": "Mon cœur me fait mal.",
						"spanish": "Me duele el corazón.",
						"vietnamese": "Lòng tôi đau nhói.",
						"thai": "เจ็บปวดใจ",
						"hindi": "मेरा दिल दुखता है।"
					}
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "kai",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "더 깊은 폐허 속. 바닥에 희미한 문양이 드러났다.",
						"english": "Deeper in the ruins. A faint pattern appeared on the floor.",
						"japanese": "廃墟の奥深く。床に薄い模様が現れた。",
						"chinese": "废墟深处。地板上显现出微弱的图案。",
						"french": "Plus profondément dans les ruines. Un motif faible est apparu sur le sol.",
						"spanish": "Más adentro en las ruinas. Un patrón tenue apareció en el suelo.",
						"vietnamese": "Sâu hơn trong tàn tích. Một hoa văn mờ nhạt hiện ra trên sàn.",
						"thai": "ลึกเข้าไปในซากปรักหักพัง ลวดลายจางๆ ปรากฏขึ้นบนพื้น",
						"hindi": "खंडहरों में और गहराई तक। फर्श पर एक धुंधला पैटर्न उभरा।"
					}
				},
				{
					"speaker": "kai",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "이거야! 사라진 조직의 문양… 이토록 희미해졌지만 분명해.",
						"english": "This is it! The emblem of the lost organization... Faint as it is, it's unmistakable.",
						"japanese": "これだ！失われた組織の紋章…これほど薄れても、はっきりわかる。",
						"chinese": "就是这个！失落组织的纹章……虽然如此模糊，但清晰可见。",
						"french": "C'est ça ! L'emblème de l'organisation disparue… Aussi faible soit-il, il est indubitable.",
						"spanish": "¡Es esto! El emblema de la organización perdida… Por tenue que sea, es inconfundible.",
						"vietnamese": "Chính là nó! Biểu tượng của tổ chức đã mất... Mờ nhạt vậy mà rõ ràng.",
						"thai": "นี่แหละ! สัญลักษณ์ขององค์กรที่สาบสูญ... แม้จะจางหายไปมาก แต่ก็ชัดเจน",
						"hindi": "यही तो है! लुप्त संगठन का प्रतीक… भले ही कितना भी धुंधला हो गया हो, पर यह स्पष्ट है।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이게 뭘 의미하죠?",
						"english": "What does this mean?",
						"japanese": "これは何を意味しますか？",
						"chinese": "这意味着什么？",
						"french": "Qu'est-ce que cela signifie ?",
						"spanish": "¿Qué significa esto?",
						"vietnamese": "Điều này có ý nghĩa gì?",
						"thai": "นี่หมายความว่าอะไร",
						"hindi": "इसका क्या मतलब है?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "그들의 염원… 그리고 잊혀진 진실이 여기 잠들어 있다는 증거지.",
						"english": "Their aspirations… and proof that a forgotten truth lies dormant here.",
						"japanese": "彼らの願い…そして忘れられた真実がここに眠っている証拠だ。",
						"chinese": "他们的愿望……以及被遗忘的真相沉睡于此的证据。",
						"french": "Leurs aspirations… et la preuve qu'une vérité oubliée sommeille ici.",
						"spanish": "Sus anhelos… y la prueba de que una verdad olvidada yace dormida aquí.",
						"vietnamese": "Khát vọng của họ... và bằng chứng rằng một sự thật bị lãng quên đang ngủ yên ở đây.",
						"thai": "ความปรารถนาของพวกเขา... และเป็นหลักฐานว่าความจริงที่ถูกลืมเลือนนั้นหลับใหลอยู่ที่นี่",
						"hindi": "उनकी आकांक्षाएँ… और इस बात का सबूत कि एक भूली हुई सच्चाई यहाँ सोई हुई है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "kai"
				},
				{
					"speaker": "character_3",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…뭔가 다가오고 있어.",
						"english": "…Something's coming.",
						"japanese": "…何かが近づいている。",
						"chinese": "……有什么东西正在靠近。",
						"french": "…Quelque chose approche.",
						"spanish": "…Algo se acerca.",
						"vietnamese": "...Có gì đó đang đến gần.",
						"thai": "...บางอย่างกำลังคืบคลานเข้ามา",
						"hindi": "…कुछ आ रहा है।"
					}
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "수호자의 힘에 압도당했다.",
						"english": "Overwhelmed by the Guardian's power.",
						"japanese": "守護者の力に圧倒された。",
						"chinese": "被守护者的力量压倒了。",
						"french": "Submergé par la puissance du Gardien.",
						"spanish": "Abrumado por el poder del Guardián.",
						"vietnamese": "Bị áp đảo bởi sức mạnh của Người bảo hộ.",
						"thai": "ถูกพลังของผู้พิทักษ์ครอบงำ",
						"hindi": "संरक्षक की शक्ति से अभिभूत हो गया।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "멍청한 자들. 이 이상은… 허락하지 않는다.",
						"english": "Fools. No further… I shall allow.",
						"japanese": "愚か者ども。これ以上は…許さない。",
						"chinese": "愚蠢的家伙们。到此为止…我不会允许。",
						"french": "Imbéciles. Pas au-delà… je ne le permettrai pas.",
						"spanish": "¡Necios! Más allá de esto… no lo permitiré.",
						"vietnamese": "Lũ ngu ngốc. Không hơn thế nữa… ta sẽ không cho phép.",
						"thai": "พวกโง่เง่า ไม่ให้ไปมากกว่านี้… ฉันไม่อนุญาต",
						"hindi": "मूर्खों। इससे आगे… मैं अनुमति नहीं दूँगा।"
					}
				},
				{
					"content": {
						"korean": "…아직 끝나지 않았어.",
						"english": "…It's not over yet.",
						"japanese": "…まだ終わっていない。",
						"chinese": "…还没结束。",
						"french": "…Ce n'est pas encore fini.",
						"spanish": "…Aún no ha terminado.",
						"vietnamese": "…Vẫn chưa kết thúc đâu.",
						"thai": "…ยังไม่จบแค่นี้หรอก",
						"hindi": "…अभी खत्म नहीं हुआ है।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "공간을 가득 채우는 거대한 그림자. 정체 모를 존재가 모습을 드러냈다.",
						"english": "A colossal shadow fills the space. An unknown entity revealed itself.",
						"japanese": "空間を満たす巨大な影。正体不明の存在が姿を現した。",
						"chinese": "巨大的影子充斥着空间。一个身份不明的存在显露了身形。",
						"french": "Une ombre colossale remplit l'espace. Une entité inconnue s'est révélée.",
						"spanish": "Una sombra colosal llena el espacio. Una entidad desconocida se reveló.",
						"vietnamese": "Một bóng đen khổng lồ lấp đầy không gian. Một thực thể không rõ danh tính đã xuất hiện.",
						"thai": "เงาขนาดมหึมาเติมเต็มพื้นที่ สิ่งมีชีวิตที่ไม่รู้จักได้ปรากฏตัวขึ้น",
						"hindi": "एक विशाल छाया अंतरिक्ष को भर देती है। एक अज्ञात इकाई ने खुद को प्रकट किया।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "감히… 잊혀진 역사를 들추려 하는가?",
						"english": "How dare you… try to unearth forgotten history?",
						"japanese": "敢えて…忘れ去られた歴史を暴こうとするか？",
						"chinese": "竟敢……试图揭露被遗忘的历史？",
						"french": "Comment osez-vous… tenter de déterrer l'histoire oubliée ?",
						"spanish": "¿Cómo osas… intentar desenterrar la historia olvidada?",
						"vietnamese": "Ngươi dám... cố gắng moi móc lịch sử đã bị lãng quên sao?",
						"thai": "กล้าดียังไง... มาพยายามขุดคุ้ยประวัติศาสตร์ที่ถูกลืม",
						"hindi": "तुम्हारी हिम्मत कैसे हुई… भूले हुए इतिहास को उजागर करने की कोशिश करने की?"
					}
				},
				{
					"content": {
						"korean": "당신은 누구야!",
						"english": "Who are you!",
						"japanese": "あなたは誰だ！",
						"chinese": "你是谁！",
						"french": "Qui êtes-vous !",
						"spanish": "¡¿Quién eres?!",
						"vietnamese": "Ngươi là ai!",
						"thai": "เจ้าเป็นใคร!",
						"hindi": "तुम कौन हो!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "나는 이 폐허의 수호자. 과거의 진실은… 침묵 속에 묻혀야 한다.",
						"english": "I am the guardian of these ruins. The truth of the past… must remain buried in silence.",
						"japanese": "私はこの廃墟の守護者。過去の真実は…沈黙の中に葬られるべきだ。",
						"chinese": "我是这废墟的守护者。过去的真相……必须埋葬在沉默之中。",
						"french": "Je suis le gardien de ces ruines. La vérité du passé… doit rester enfouie dans le silence.",
						"spanish": "Soy el guardián de estas ruinas. La verdad del pasado… debe permanecer sepultada en el silencio.",
						"vietnamese": "Ta là người bảo hộ của phế tích này. Sự thật của quá khứ... phải được chôn vùi trong im lặng.",
						"thai": "ข้าคือผู้พิทักษ์ซากปรักหักพังเหล่านี้ ความจริงในอดีต... ต้องถูกฝังไว้ในความเงียบ",
						"hindi": "मैं इन खंडहरों का संरक्षक हूँ। अतीत का सच… खामोशी में दफन रहना चाहिए।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "sad",
					"content": {
						"korean": "크윽… 너희는… 진실을 감당할 수 없을 것이다…",
						"english": "Ugh… you… cannot bear the truth…",
						"japanese": "くっ…お前たちは…真実を背負いきれないだろう…",
						"chinese": "呃……你们……无法承受真相……",
						"french": "Argh… vous… ne pourrez pas supporter la vérité…",
						"spanish": "Ugh… ustedes… no podrán soportar la verdad…",
						"vietnamese": "Khụ... các ngươi... sẽ không thể chịu đựng được sự thật...",
						"thai": "อึก... พวกเจ้า... ไม่อาจทนรับความจริงได้...",
						"hindi": "उह… तुम… सच्चाई को सह नहीं पाओगे…"
					}
				},
				{
					"content": {
						"korean": "무슨 소리야?",
						"english": "What was that sound?",
						"japanese": "何だ？",
						"chinese": "什么声音？",
						"french": "Quel est ce bruit ?",
						"spanish": "¿Qué fue eso?",
						"vietnamese": "Tiếng gì vậy?",
						"thai": "เสียงอะไรน่ะ?",
						"hindi": "यह क्या आवाज़ थी?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "쓰러진 수호자. 그러나 어딘가… 더 깊은 어둠이 남아 있었다.",
						"english": "The Guardian fell. Yet somewhere… a deeper darkness remained.",
						"japanese": "守護者は倒れた。しかしどこか…より深い闇が残っていた。",
						"chinese": "守护者倒下了。然而，在某个地方…更深的黑暗依然存在。",
						"french": "Le Gardien est tombé. Pourtant, quelque part… une obscurité plus profonde demeurait.",
						"spanish": "El Guardián cayó. Sin embargo, en algún lugar… una oscuridad más profunda permanecía.",
						"vietnamese": "Người bảo hộ đã gục ngã. Nhưng đâu đó… một bóng tối sâu thẳm hơn vẫn còn lại.",
						"thai": "ผู้พิทักษ์ล้มลงแล้ว แต่ทว่า… ความมืดมิดที่ลึกล้ำกว่ายังคงอยู่",
						"hindi": "संरक्षक गिर गया। फिर भी कहीं… एक गहरा अँधेरा शेष था।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "애처로운 멜로디는 잠시 멈췄지만… 공간의 슬픔은 여전했다.",
						"english": "The sorrowful melody paused briefly… but the sorrow of the space lingered.",
						"japanese": "哀れな旋律は一時止んだが…空間の悲しみは変わらなかった。",
						"chinese": "那凄凉的旋律暂时停歇了…但空间的悲伤依旧。",
						"french": "La mélodie plaintive s'interrompit un instant… mais la tristesse de l'espace persistait.",
						"spanish": "La triste melodía se detuvo un momento… pero la tristeza del espacio perduraba.",
						"vietnamese": "Giai điệu bi ai tạm lắng xuống… nhưng nỗi buồn của không gian vẫn còn đó.",
						"thai": "ท่วงทำนองอันน่าสงสารหยุดลงชั่วครู่… แต่ความเศร้าของสถานที่ยังคงอยู่",
						"hindi": "करुण धुन कुछ देर के लिए रुक गई… लेकिन स्थान का दुख अभी भी बना हुआ था।"
					},
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"재개발이 멈춘 도시. 시간마저 멈춘 듯한 폐허.",
			"잊혀진 극장, 그곳에 숨겨진 과거의 그림자.",
			"애처로운 멜로디가 어둠 속을 헤맨다.",
			"과연, 이 도시의 진실은 무엇인가."
		],
		"english": [
			"A city where development halted. Ruins where time itself stands still.",
			"A forgotten theater, and the shadow of the past hidden within.",
			"A mournful melody wanders through the darkness.",
			"What, then, is the truth of this city?"
		],
		"japanese": [
			"再開発が止まった都市。時間までもが止まったかのような廃墟。",
			"忘れられた劇場、そこに隠された過去の影。",
			"哀れなメロディーが闇の中をさまよう。",
			"果たして、この都市の真実とは何か。"
		],
		"chinese": [
			"停止了再开发的城市。时间仿佛也停滞的废墟。",
			"被遗忘的剧场，隐藏在那里的过去之影。",
			"凄婉的旋律在黑暗中徘徊。",
			"那么，这座城市的真相究竟是什么？"
		],
		"french": [
			"Une ville où le réaménagement a cessé. Des ruines où même le temps semble s'être arrêté.",
			"Un théâtre oublié, l'ombre du passé s'y cache.",
			"Une mélodie plaintive erre dans l'obscurité.",
			"Mais alors, quelle est la vérité de cette ville ?"
		],
		"spanish": [
			"Una ciudad donde la reurbanización se detuvo. Ruinas donde incluso el tiempo parece haberse detenido.",
			"Un teatro olvidado, la sombra del pasado oculta allí.",
			"Una melodía lastimera vaga en la oscuridad.",
			"¿Entonces, cuál es la verdad de esta ciudad?"
		],
		"vietnamese": [
			"Thành phố ngưng tái phát triển. Hoang tàn như thể thời gian cũng ngừng lại.",
			"Nhà hát bị lãng quên, bóng tối của quá khứ ẩn giấu nơi đó.",
			"Giai điệu bi ai lang thang trong bóng tối.",
			"Vậy thì, sự thật của thành phố này là gì?"
		],
		"thai": [
			"เมืองที่การพัฒนาหยุดชะงัก ซากปรักหักพังที่แม้แต่เวลาก็หยุดนิ่ง",
			"โรงละครที่ถูกลืม เงาของอดีตที่ซ่อนอยู่ข้างใน",
			"ท่วงทำนองอันน่าเศร้าโศกพเนจรอยู่ในความมืด",
			"แท้จริงแล้ว ความจริงของเมืองนี้คืออะไรกันแน่?"
		],
		"hindi": [
			"एक शहर जहाँ पुनर्विकास रुक गया। खंडहर जहाँ समय भी रुक गया लगता है।",
			"एक भूला हुआ रंगमंच, वहाँ छिपी अतीत की परछाई।",
			"एक करुण धुन अंधेरे में भटकती है।",
			"तो, इस शहर का सच क्या है?"
		]
	}
} as const;
