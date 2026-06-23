export const scenario_desert_mirageoath_9_04 = {
	"scenario_id": "desert_mirageoath_9_04",
	"order": 4,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"jasper": {
			"id": "mon_f3aa9577-2fd6-4d65-80cd-6b654778b7f4",
			"name": {
				"korean": "재스퍼",
				"english": "Jasper",
				"japanese": "ジャスパー",
				"chinese": "贾斯珀",
				"french": "Jasper",
				"spanish": "Jasper",
				"vietnamese": "Jasper",
				"thai": "แจสเปอร์",
				"hindi": "जैस्पर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a1ee5a95-a611-4b33-7264-582262b68800/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/bc87b1ce-d1eb-40ea-ccc4-3c4434d35800/public"
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
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "모래바람이 모든 흔적을 지웠다. 낯선 남자가 홀로 서 있었다.",
						"english": "Sandstorms erased all traces. A stranger stood alone.",
						"japanese": "砂嵐が全ての痕跡を消し去った。見知らぬ男が一人立っていた。",
						"chinese": "沙尘暴抹去所有痕迹。一个陌生男人独自站着。",
						"french": "Les tempêtes de sable effacèrent toute trace. Un étranger se tenait seul.",
						"spanish": "Las tormentas de arena borraron todo rastro. Un extraño estaba solo.",
						"vietnamese": "Bão cát xóa sạch mọi dấu vết. Một người đàn ông lạ mặt đứng một mình.",
						"thai": "พายุทรายลบร่องรอยทั้งหมด ชายแปลกหน้ายืนอยู่คนเดียว",
						"hindi": "रेत के तूफानों ने सभी निशान मिटा दिए। एक अजनबी अकेला खड़ा था।"
					}
				},
				{
					"content": {
						"korean": "당신은… 누구지? 여기서 뭘 하는 거야?",
						"english": "Who… are you? What are you doing here?",
						"japanese": "あなたは…誰だ？ここで何をしている？",
						"chinese": "你…是谁？你在这做什么？",
						"french": "Qui… es-tu ? Que fais-tu ici ?",
						"spanish": "¿Quién… eres? ¿Qué haces aquí?",
						"vietnamese": "Ngươi… là ai? Ngươi đang làm gì ở đây?",
						"thai": "ท่าน… เป็นใคร? มาทำอะไรที่นี่?",
						"hindi": "तुम… कौन हो? यहाँ क्या कर रहे हो?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "jasper"
				},
				{
					"content": {
						"korean": "나는… 누구도 아니야. 그저… 이 고통스러운 반복이 지긋지긋할 뿐.",
						"english": "I am… no one. Just… tired of this painful repetition.",
						"japanese": "私は…誰でもない。ただ…この苦痛な繰り返しにうんざりしているだけだ。",
						"chinese": "我…不是任何人。只是…厌倦了这痛苦的循环。",
						"french": "Je ne suis… personne. Juste… las de cette répétition douloureuse.",
						"spanish": "No soy… nadie. Solo… cansado de esta repetición dolorosa.",
						"vietnamese": "Ta… không là ai cả. Chỉ là… đã quá chán ghét sự lặp lại đau đớn này.",
						"thai": "ข้า… ไม่ใช่ใครทั้งนั้น แค่… เบื่อหน่ายกับการวนซ้ำอันเจ็บปวดนี้",
						"hindi": "मैं… कोई नहीं हूँ। बस… इस दर्दनाक दोहराव से थक गया हूँ।"
					},
					"speaker": "jasper",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "부러진 검을 들고 뭘 찾는 건데?",
						"english": "What are you looking for with that broken sword?",
						"japanese": "折れた剣を抱えて、何を探しているんだ？",
						"chinese": "拿着断剑，你在找什么？",
						"french": "Que cherches-tu avec cette épée brisée ?",
						"spanish": "¿Qué buscas con esa espada rota?",
						"vietnamese": "Ngươi cầm thanh kiếm gãy đó đang tìm gì vậy?",
						"thai": "ถือดาบหักนั่นกำลังมองหาอะไรอยู่?",
						"hindi": "टूटी हुई तलवार लेकर क्या ढूंढ रहे हो?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "jasper",
					"content": {
						"korean": "모르겠어. 그저… 아파.",
						"english": "I don't know. It just… hurts.",
						"japanese": "分からない。ただ…痛いんだ。",
						"chinese": "不知道。只是…很痛。",
						"french": "Je ne sais pas. Ça fait juste… mal.",
						"spanish": "No lo sé. Solo… duele.",
						"vietnamese": "Không biết. Chỉ là… đau lắm.",
						"thai": "ไม่รู้สิ แค่… เจ็บปวด",
						"hindi": "मुझे नहीं पता। बस… दर्द होता है।"
					},
					"emotion": "sad",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "jasper",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "또… 이곳인가. 끝없이 되풀이되는 시간.",
						"english": "Here again… This endless repetition of time.",
						"japanese": "また…ここか。終わりのない時間の繰り返し。",
						"chinese": "又是…这里吗。这无尽循环的时间。",
						"french": "Encore… ici. Ce temps qui se répète sans fin.",
						"spanish": "Otra vez… aquí. Este tiempo que se repite sin fin.",
						"vietnamese": "Lại… nơi này sao. Thời gian lặp lại vô tận.",
						"thai": "ที่นี่อีกแล้ว… วงจรเวลาที่ไม่สิ้นสุด",
						"hindi": "फिर… यहीं। समय का यह अंतहीन दोहराव।"
					},
					"speaker": "jasper"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "당신은 계속 이 사막을 헤매는 거야?",
						"english": "Are you going to keep wandering this desert?",
						"japanese": "あなたは、この砂漠をさまよい続けるのか？",
						"chinese": "你打算继续在这沙漠中徘徊吗？",
						"french": "Vas-tu continuer à errer dans ce désert ?",
						"spanish": "¿Vas a seguir vagando por este desierto?",
						"vietnamese": "Ngươi sẽ tiếp tục lang thang trong sa mạc này sao?",
						"thai": "ท่านจะยังคงร่อนเร่ในทะเลทรายนี้ต่อไปหรือ?",
						"hindi": "क्या तुम इस रेगिस्तान में भटकते रहोगे?"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "나는 이곳에 묶여있어. 영원히… 왜?",
						"english": "I am bound here. Forever… Why?",
						"japanese": "私はここに縛られている。永遠に…なぜ？",
						"chinese": "我被困在这里。永恒地……为什么？",
						"french": "Je suis lié ici. Pour toujours… Pourquoi ?",
						"spanish": "Estoy atado aquí. Para siempre… ¿Por qué?",
						"vietnamese": "Tôi bị trói buộc ở đây. Mãi mãi… Tại sao?",
						"thai": "ฉันถูกผูกมัดไว้ที่นี่ ตลอดไป… ทำไม?",
						"hindi": "मैं यहाँ बँधा हूँ। हमेशा के लिए… क्यों?"
					},
					"speaker": "jasper",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…무언가 들려. 희미한 속삭임이.",
						"english": "…I hear something. A faint whisper.",
						"japanese": "…何かが聞こえる。かすかな囁きが。",
						"chinese": "……我听到什么了。微弱的低语声。",
						"french": "…J'entends quelque chose. Un faible murmure.",
						"spanish": "…Escucho algo. Un débil susurro.",
						"vietnamese": "…Tôi nghe thấy gì đó. Một tiếng thì thầm yếu ớt.",
						"thai": "…ฉันได้ยินบางสิ่ง เสียงกระซิบแผ่วเบา",
						"hindi": "…कुछ सुनाई दे रहा है। एक धीमी फुसफुसाहट।"
					}
				},
				{
					"content": {
						"korean": "맹세… 부서진 맹세의 그림자가 나를 옥죄어.",
						"english": "A vow… The shadow of a broken vow constricts me.",
						"japanese": "誓い…破られた誓いの影が私を締めつける。",
						"chinese": "誓言……破碎誓言的阴影束缚着我。",
						"french": "Un serment… L'ombre d'un serment brisé m'étreint.",
						"spanish": "Un juramento… La sombra de un juramento roto me oprime.",
						"vietnamese": "Một lời thề… Bóng tối của lời thề bị phá vỡ đang siết chặt lấy tôi.",
						"thai": "คำสาบาน… เงาของคำสาบานที่แตกหักบีบรัดฉัน",
						"hindi": "एक शपथ… टूटी हुई शपथ की परछाई मुझे जकड़े हुए है।"
					},
					"speaker": "jasper",
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "jasper",
					"action": "enter",
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이 검… 아무것도 기억나지 않아. 그저 빛을 향한 갈망뿐.",
						"english": "This sword… I remember nothing. Only a yearning for light.",
						"japanese": "この剣…何も思い出せない。ただ光への渇望だけ。",
						"chinese": "这把剑……我什么都不记得了。只有对光的渴望。",
						"french": "Cette épée… Je ne me souviens de rien. Seulement un désir ardent de lumière.",
						"spanish": "Esta espada… No recuerdo nada. Solo un anhelo de luz.",
						"vietnamese": "Thanh kiếm này… Tôi không nhớ gì cả. Chỉ có khát khao ánh sáng.",
						"thai": "ดาบเล่มนี้… ฉันจำอะไรไม่ได้เลย เพียงแค่ปรารถนาแสงสว่างเท่านั้น",
						"hindi": "यह तलवार… मुझे कुछ याद नहीं। बस प्रकाश की लालसा है।"
					},
					"speaker": "jasper"
				},
				{
					"content": {
						"korean": "빛? 어떤 빛을 말하는 건데?",
						"english": "Light? What light are you talking about?",
						"japanese": "光？どんな光のことだ？",
						"chinese": "光？你在说什么光？",
						"french": "Lumière ? De quelle lumière parles-tu ?",
						"spanish": "¿Luz? ¿De qué luz hablas?",
						"vietnamese": "Ánh sáng? Bạn đang nói về ánh sáng nào?",
						"thai": "แสงสว่าง? แสงสว่างแบบไหนที่คุณพูดถึง?",
						"hindi": "प्रकाश? तुम किस प्रकाश की बात कर रहे हो?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "jasper",
					"content": {
						"korean": "나는 검사… 였던가? 무언가를 지켜야 했는데.",
						"english": "I was a swordsman… wasn't I? I had to protect something.",
						"japanese": "私は剣士…だったのか？何かを守らなければならなかった。",
						"chinese": "我曾是剑士……是吗？我必须守护什么。",
						"french": "J'étais un épéiste… n'est-ce pas ? Je devais protéger quelque chose.",
						"spanish": "Fui un espadachín… ¿verdad? Tenía que proteger algo.",
						"vietnamese": "Tôi là một kiếm sĩ… phải không? Tôi đã phải bảo vệ một cái gì đó.",
						"thai": "ฉันเป็นนักดาบ… ใช่ไหม? ฉันต้องปกป้องบางสิ่ง",
						"hindi": "मैं एक तलवारबाज था… क्या मैं था? मुझे कुछ बचाना था।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "속삭임은 더욱 또렷해졌다. 고통에 찬 비명처럼.",
						"english": "The whispers grew clearer. Like screams of agony.",
						"japanese": "囁きはさらに鮮明になった。苦痛に満ちた悲鳴のように。",
						"chinese": "低语声变得更加清晰。如同痛苦的尖叫声。",
						"french": "Les murmures devinrent plus clairs. Comme des cris d'agonie.",
						"spanish": "Los susurros se hicieron más claros. Como gritos de agonía.",
						"vietnamese": "Những tiếng thì thầm trở nên rõ ràng hơn. Như những tiếng la hét đau đớn.",
						"thai": "เสียงกระซิบชัดเจนขึ้น ราวกับเสียงกรีดร้องแห่งความเจ็บปวด",
						"hindi": "फुसफुसाहटें और साफ हो गईं। पीड़ा भरी चीखों की तरह।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "jasper",
					"content": {
						"korean": "이 무의미한 반복! 끝내야 해!",
						"english": "This meaningless repetition! I must end it!",
						"japanese": "この無意味な繰り返し！終わらせなければ！",
						"chinese": "这种毫无意义的重复！我必须结束它！",
						"french": "Cette répétition insensée ! Je dois y mettre fin !",
						"spanish": "¡Esta repetición sin sentido! ¡Debo terminarla!",
						"vietnamese": "Sự lặp lại vô nghĩa này! Tôi phải chấm dứt nó!",
						"thai": "การทำซ้ำที่ไร้ความหมายนี้! ฉันต้องยุติมัน!",
						"hindi": "यह अर्थहीन पुनरावृत्ति! मुझे इसे खत्म करना होगा!"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "jasper",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "나는 환영… 그저 고통이 만들어낸 그림자인가?",
						"english": "I am an illusion… Just a shadow born of pain?",
						"japanese": "私は幻…ただ苦痛が生み出した影なのか？",
						"chinese": "我是一个幻影……只是痛苦创造的影子吗？",
						"french": "Je suis une illusion… Juste une ombre née de la douleur ?",
						"spanish": "Soy una ilusión… ¿Solo una sombra nacida del dolor?",
						"vietnamese": "Tôi là một ảo ảnh… Chỉ là một bóng hình được tạo ra từ nỗi đau ư?",
						"thai": "ฉันคือภาพลวงตา… เป็นเพียงเงาที่เกิดจากความเจ็บปวดหรือ?",
						"hindi": "मैं एक भ्रम हूँ… बस दर्द से बनी एक परछाई?"
					},
					"speaker": "jasper"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "환영이라고? 당신은 살아있어!",
						"english": "An illusion? You are alive!",
						"japanese": "幻だと？あなたは生きている！",
						"chinese": "幻影？你还活着！",
						"french": "Une illusion ? Tu es vivant !",
						"spanish": "¿Una ilusión? ¡Estás vivo!",
						"vietnamese": "Ảo ảnh ư? Bạn còn sống!",
						"thai": "ภาพลวงตาเหรอ? คุณยังมีชีวิตอยู่!",
						"hindi": "एक भ्रम? तुम तो जीवित हो!"
					}
				},
				{
					"content": {
						"korean": "이 사막은 모든 것을 왜곡해. 진실마저도.",
						"english": "This desert distorts everything. Even truth.",
						"japanese": "この砂漠は全てを歪める。真実さえも。",
						"chinese": "这片沙漠扭曲了一切。甚至连真相也不放过。",
						"french": "Ce désert déforme tout. Même la vérité.",
						"spanish": "Este desierto distorsiona todo. Incluso la verdad.",
						"vietnamese": "Sa mạc này bóp méo mọi thứ. Kể cả sự thật.",
						"thai": "ทะเลทรายนี้บิดเบือนทุกสิ่ง แม้แต่ความจริง",
						"hindi": "यह रेगिस्तान सब कुछ विकृत कर देता है। यहाँ तक कि सच को भी।"
					},
					"speaker": "jasper",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "고통스러운 속삭임은 이제 바로 귓가에 들리는 듯했다.",
						"english": "The painful whispers now seemed to echo right beside my ear.",
						"japanese": "苦痛のささやきは、まるで耳元で聞こえるようだった。",
						"chinese": "痛苦的低语仿佛就在耳边。",
						"french": "Les murmures douloureux semblaient maintenant résonner tout près de mon oreille.",
						"spanish": "Los dolorosos susurros ahora parecían resonar justo al oído.",
						"vietnamese": "Những lời thì thầm đau đớn giờ đây như vang vọng ngay bên tai.",
						"thai": "เสียงกระซิบที่เจ็บปวดตอนนี้เหมือนจะดังขึ้นข้างหู",
						"hindi": "दर्दनाक फुसफुसाहट अब ठीक मेरे कान के पास सुनाई दे रही थी।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "jasper",
					"content": {
						"korean": "이 감옥에서… 벗어나야 해!",
						"english": "I must… escape this prison!",
						"japanese": "この牢獄から… 逃れなければ！",
						"chinese": "我必须… 逃离这个牢笼！",
						"french": "Je dois… m'échapper de cette prison !",
						"spanish": "¡Debo… escapar de esta prisión!",
						"vietnamese": "Tôi phải… thoát khỏi nhà tù này!",
						"thai": "ฉันต้อง… หนีออกจากคุกนี้!",
						"hindi": "मुझे… इस जेल से बाहर निकलना होगा!"
					}
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "네 분노로는 나를 꺾을 수 없어. 이 고통은 영원할 것이다.",
						"english": "Your rage cannot defeat me. This suffering will be eternal.",
						"japanese": "お前の怒りでは私を打ち破ることはできない。この苦痛は永遠だ。",
						"chinese": "你的愤怒无法击败我。这份痛苦将是永恒的。",
						"french": "Ta rage ne peut pas me vaincre. Cette souffrance sera éternelle.",
						"spanish": "Tu ira no puede vencerme. Este sufrimiento será eterno.",
						"vietnamese": "Cơn thịnh nộ của ngươi không thể đánh bại ta. Nỗi đau này sẽ là vĩnh cửu.",
						"thai": "ความโกรธของเจ้าไม่อาจเอาชนะข้าได้ ความทุกข์ทรมานนี้จะเป็นนิรันดร์",
						"hindi": "तुम्हारा क्रोध मुझे हरा नहीं सकता। यह पीड़ा शाश्वत रहेगी।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "절대 포기 안 해… 진실을 밝혀낼 거야.",
						"english": "I'll never give up... I'll uncover the truth.",
						"japanese": "絶対に諦めない…真実を明らかにする。",
						"chinese": "我绝不会放弃……我会揭露真相的。",
						"french": "Je n'abandonnerai jamais... Je découvrirai la vérité.",
						"spanish": "Nunca me rendiré... Descubriré la verdad.",
						"vietnamese": "Ta sẽ không bao giờ từ bỏ... Ta sẽ khám phá ra sự thật.",
						"thai": "ข้าจะไม่มีวันยอมแพ้... ข้าจะเปิดเผยความจริง",
						"hindi": "मैं कभी हार नहीं मानूँगा... मैं सच्चाई का पता लगाऊँगा।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "흥… 다음 반복도 기대하지.",
						"english": "Hmph... I look forward to the next iteration.",
						"japanese": "ふん…次の繰り返しも楽しみにしているよ。",
						"chinese": "哼……期待下一次的循环。",
						"french": "Hmm... j'attends la prochaine itération avec impatience.",
						"spanish": "Mmm... espero con ansias la próxima iteración.",
						"vietnamese": "Hừm... ta mong chờ lần lặp lại tiếp theo.",
						"thai": "ฮึ่ม... ข้าตั้งตารอการวนซ้ำครั้งต่อไป",
						"hindi": "हम्म... मैं अगले पुनरावृति का इंतजार करूँगा।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"spot": [
						5,
						7
					],
					"action": "enter",
					"speaker": "random_boss",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "또 다른 환영인가. 이 고통은 끝나지 않아.",
						"english": "Another illusion? This torment never ends.",
						"japanese": "また幻影か。この苦痛は終わらない。",
						"chinese": "又一个幻象吗？这痛苦永无止境。",
						"french": "Encore une illusion ? Ce tourment ne finit jamais.",
						"spanish": "Otra ilusión? Este tormento nunca termina.",
						"vietnamese": "Lại một ảo ảnh nữa sao. Nỗi đau này không bao giờ kết thúc.",
						"thai": "ภาพลวงตาอีกแล้วหรือ? ความทรมานนี้ไม่มีวันสิ้นสุด",
						"hindi": "एक और भ्रम? यह पीड़ा कभी खत्म नहीं होती।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "jasper",
					"action": "enter",
					"spot": [
						3,
						3
					]
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "jasper",
					"content": {
						"korean": "당신이… 나를 만들었어! 이 고통을 줬다고!",
						"english": "You… created me! You gave me this pain!",
						"japanese": "お前が… 私を作った！この苦痛を与えたんだ！",
						"chinese": "你… 创造了我！你给了我这痛苦！",
						"french": "Tu… m'as créé ! Tu m'as infligé cette douleur !",
						"spanish": "¡Tú… me creaste! ¡Tú me diste este dolor!",
						"vietnamese": "Ngươi… đã tạo ra ta! Ngươi đã ban cho ta nỗi đau này!",
						"thai": "แก… สร้างฉันขึ้นมา! แกเป็นคนมอบความเจ็บปวดนี้ให้ฉัน!",
						"hindi": "तुमने… मुझे बनाया! तुमने मुझे यह दर्द दिया!"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "네 분노는 내 절망의 일부일 뿐.",
						"english": "Your rage is merely a part of my despair.",
						"japanese": "お前の怒りは、私の絶望の一部に過ぎない。",
						"chinese": "你的愤怒只是我绝望的一部分。",
						"french": "Ta rage n'est qu'une partie de mon désespoir.",
						"spanish": "Tu ira es solo una parte de mi desesperación.",
						"vietnamese": "Cơn giận của ngươi chỉ là một phần trong nỗi tuyệt vọng của ta.",
						"thai": "ความโกรธแค้นของแกเป็นเพียงส่วนหนึ่งของความสิ้นหวังของฉัน",
						"hindi": "तुम्हारा क्रोध मेरी निराशा का केवल एक हिस्सा है।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "{random_boss}! 당신의 비극이 모두를 망치고 있어!",
						"english": "{random_boss}! Your tragedy is ruining everything!",
						"japanese": "{random_boss}！あなたの悲劇がすべてを台無しにしている！",
						"chinese": "{random_boss}！你的悲剧正在毁掉一切！",
						"french": "{random_boss} ! Ta tragédie est en train de tout ruiner !",
						"spanish": "¡{random_boss}! ¡Tu tragedia está arruinando todo!",
						"vietnamese": "{random_boss}! Bi kịch của ngươi đang hủy hoại mọi thứ!",
						"thai": "{random_boss}! โศกนาฏกรรมของแกกำลังทำลายทุกสิ่ง!",
						"hindi": "{random_boss}! तुम्हारी त्रासदी सब कुछ बर्बाद कर रही है!"
					},
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"duration_ms": 300,
					"action": "exit",
					"speaker": "jasper"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "재스퍼의 모습이 모래처럼 흩어졌다. 환영은 보스의 절규 속에 있었다.",
						"english": "Jasper's form scattered like sand. The illusion was within the boss's shriek.",
						"japanese": "ジャスパーの姿が砂のように散った。幻影はボスの絶叫の中にあった。",
						"chinese": "贾斯珀的身影如沙般消散。幻象在首领的尖叫中。",
						"french": "La forme de Jasper s'est dispersée comme du sable. L'illusion était dans le cri du boss.",
						"spanish": "La forma de Jasper se dispersó como arena. La ilusión estaba en el grito del jefe.",
						"vietnamese": "Hình dáng của Jasper tan biến như cát. Ảo ảnh nằm trong tiếng thét của tên trùm.",
						"thai": "ร่างของแจสเปอร์สลายไปเหมือนทราย ภาพลวงตาอยู่ในเสียงกรีดร้องของบอส",
						"hindi": "जैस्पर का रूप रेत की तरह बिखर गया। भ्रम बॉस की चीख में था।"
					}
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "결국… 나를 막는군. 하지만… 맹세는… 끝나지 않아…",
						"english": "In the end… you stop me. But… the vow… it never ends…",
						"japanese": "結局… 私を止めるのか。だが… 誓いは… 終わらない…",
						"chinese": "最终… 你阻止了我。但是… 誓言… 永不终结…",
						"french": "Finalement… tu m'arrêtes. Mais… le serment… ne finit jamais…",
						"spanish": "Al final… me detienes. Pero… el juramento… no termina…",
						"vietnamese": "Cuối cùng… ngươi cũng ngăn được ta. Nhưng… lời thề… sẽ không kết thúc…",
						"thai": "ในที่สุด… แกก็หยุดฉันได้ แต่… คำสาบาน… จะไม่มีวันสิ้นสุด…",
						"hindi": "अंत में… तुम मुझे रोकते हो। लेकिन… प्रतिज्ञा… कभी खत्म नहीं होती…"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "그림자는 사라졌다. 그러나 고통스러운 속삭임은 숲처럼 남아있었다.",
						"english": "The shadow vanished. But the painful whispers remained like a forest.",
						"japanese": "影は消えた。しかし、苦痛のささやきは森のように残っていた。",
						"chinese": "影子消失了。但痛苦的低语却像森林一样残留着。",
						"french": "L'ombre disparut. Mais les murmures douloureux demeuraient comme une forêt.",
						"spanish": "La sombra desapareció. Pero los dolorosos susurros permanecieron como un bosque.",
						"vietnamese": "Bóng tối biến mất. Nhưng những lời thì thầm đau đớn vẫn còn đọng lại như một khu rừng.",
						"thai": "เงาหายไปแล้ว แต่เสียงกระซิบที่เจ็บปวดก็ยังคงอยู่ราวกับป่า",
						"hindi": "छाया गायब हो गई। लेकिन दर्दनाक फुसफुसाहट जंगल की तरह बनी रही।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "맹세… 무엇을 의미하는 거지?",
						"english": "An oath... what does it mean?",
						"japanese": "誓い…何を意味するんだ？",
						"chinese": "誓言……那意味着什么？",
						"french": "Un serment... qu'est-ce que ça veut dire ?",
						"spanish": "Un juramento... ¿qué significa?",
						"vietnamese": "Một lời thề... nó có nghĩa là gì?",
						"thai": "คำสาบาน... มันหมายความว่าอะไร?",
						"hindi": "एक शपथ... इसका क्या मतलब है?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "환영은 걷혔지만, 더 깊은 진실이 기다리고 있었다. 끝없는 고통의 근원.",
						"english": "The illusion lifted, but a deeper truth awaited. The source of endless suffering.",
						"japanese": "幻は晴れたが、より深い真実が待っていた。終わりのない苦痛の源が。",
						"chinese": "幻象消散，但更深的真相在等待着。无尽痛苦的根源。",
						"french": "L'illusion s'est dissipée, mais une vérité plus profonde attendait. La source d'une souffrance infinie.",
						"spanish": "La ilusión se desvaneció, pero una verdad más profunda esperaba. La fuente del sufrimiento interminable.",
						"vietnamese": "Ảo ảnh tan biến, nhưng một sự thật sâu sắc hơn đang chờ đợi. Nguồn gốc của nỗi đau vô tận.",
						"thai": "ภาพลวงตาหายไป แต่ความจริงที่ลึกซึ้งกว่ากำลังรออยู่ ต้นกำเนิดของความทุกข์ทรมานไม่สิ้นสุด",
						"hindi": "भ्रम दूर हो गया, लेकिन एक गहरा सच इंतज़ार कर रहा था। अंतहीन पीड़ा का स्रोत।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"모래는 끝없이 펼쳐지고, 시간은 부서졌다.",
			"기억을 잃은 자의 분노가 사막을 집어삼켰다.",
			"환영은 점점 선명해지고, 진실은 고통으로 피어났다."
		],
		"english": [
			"Sands stretch endlessly, time shattered.",
			"The rage of the forgotten consumed the desert.",
			"Visions grew clearer, truth bloomed in pain."
		],
		"japanese": [
			"砂は果てなく広がり、時は砕け散った。",
			"記憶を失いし者の怒りが砂漠を飲み込んだ。",
			"幻影は次第に鮮明になり、真実は苦痛と共に開花した。"
		],
		"chinese": [
			"黄沙漫漫无边，时光支离破碎。",
			"失忆者的愤怒吞噬了沙漠。",
			"幻象愈发清晰，真相在痛苦中绽放。"
		],
		"french": [
			"Les sables s'étendent à l'infini, le temps s'est brisé.",
			"La fureur de l'oublié engloutit le désert.",
			"Les visions devinrent plus claires, la vérité éclot dans la douleur."
		],
		"spanish": [
			"Las arenas se extienden sin fin, el tiempo se hizo pedazos.",
			"La furia del olvidado consumió el desierto.",
			"Las visiones se volvieron más claras, la verdad floreció en el dolor."
		],
		"vietnamese": [
			"Cát trải dài vô tận, thời gian tan vỡ.",
			"Cơn thịnh nộ của kẻ lãng quên nuốt chửng sa mạc.",
			"Ảo ảnh ngày càng rõ nét, sự thật nở rộ trong đau đớn."
		],
		"thai": [
			"ผืนทรายทอดยาวไร้ที่สิ้นสุด กาลเวลาแตกสลาย",
			"ความโกรธเกรี้ยวของผู้ที่สูญเสียความทรงจำกลืนกินทะเลทราย",
			"ภาพมายาชัดเจนขึ้นเรื่อยๆ ความจริงผลิบานด้วยความเจ็บปวด"
		],
		"hindi": [
			"रेत अनंत तक फैली हुई है, समय बिखर गया है।",
			"भुलाए हुए की क्रोध ने रेगिस्तान को निगल लिया।",
			"भ्रम स्पष्ट होते गए, दर्द में सच्चाई खिल उठी।"
		]
	}
} as const;
