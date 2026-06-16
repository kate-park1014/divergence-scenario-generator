export const scenario_snowy_finn_70_02 = {
	"scenario_id": "snowy_finn_70_02",
	"order": 2,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"frost": {
			"id": "mon_942bca3b-33e7-4b14-98e5-ec1e2dc78d5b",
			"name": {
				"korean": "서리",
				"english": "Frost",
				"japanese": "霜",
				"chinese": "霜",
				"french": "Givre",
				"spanish": "Escarcha",
				"vietnamese": "Băng Giá",
				"thai": "น้ำแข็ง",
				"hindi": "पाला"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/0a8c2f92-0cf9-413d-0b33-8e0204caae00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/df60b327-4cc2-435b-67e0-cffb4c319900/public"
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
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "밤 깊은 알현실. 왕은 옥좌에 앉은 채 덜덜 떨고 있었다.",
						"english": "Deep into the night, in the audience chamber. The king sat on his throne, trembling.",
						"japanese": "夜更けの謁見室。王は玉座に座ったまま、ぶるぶる震えていた。",
						"chinese": "夜深人静的觐见室。国王坐在宝座上，瑟瑟发抖。",
						"french": "Profond dans la nuit, dans la salle d'audience. Le roi était assis sur son trône, tremblant.",
						"spanish": "Entrada la noche, en la sala de audiencias. El rey estaba sentado en su trono, temblando.",
						"vietnamese": "Đêm sâu trong phòng yết kiến. Vua ngồi trên ngai, run rẩy.",
						"thai": "ยามราตรีลึกในห้องเฝ้า กษัตริย์ประทับบนบัลลังก์ ตัวสั่นเทา",
						"hindi": "रात गहरी थी, राजमहल में। राजा अपने सिंहासन पर बैठा कांप रहा था।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "위엄은 허울. 그저 추위를 견디는 밤이었다.",
						"english": "Dignity was a facade. It was merely a night of enduring the cold.",
						"japanese": "威厳は虚飾。ただ寒さに耐える夜だった。",
						"chinese": "威严只是伪装。这只是一个忍受寒冷的夜晚。",
						"french": "La dignité n'était qu'une façade. Ce n'était qu'une nuit à endurer le froid.",
						"spanish": "La dignidad era una farsa. Era simplemente una noche para soportar el frío.",
						"vietnamese": "Uy nghiêm chỉ là vỏ bọc. Đó chỉ là một đêm chịu đựng giá lạnh.",
						"thai": "ศักดิ์ศรีเป็นเพียงเปลือกนอก มันเป็นเพียงคืนที่ต้องทนหนาว",
						"hindi": "गरिमा एक दिखावा थी। यह सिर्फ ठंड सहने की रात थी।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "…얼어 죽겠네.",
						"english": "...I'll freeze to death.",
						"japanese": "…凍え死にそうだ。",
						"chinese": "……要冻死了。",
						"french": "...Je vais mourir de froid.",
						"spanish": "...Me moriré de frío.",
						"vietnamese": "...Tôi sẽ chết cóng mất.",
						"thai": "...ฉันจะแข็งตาย",
						"hindi": "...मैं ठंड से मर जाऊंगा।"
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "frost"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 밤의 한기는… 숨조차 쉬기 어렵지.",
						"english": "The chill of this night... makes it hard to even breathe.",
						"japanese": "この夜の寒気は… 息すら吸いづらい。",
						"chinese": "今夜的寒气……连呼吸都困难。",
						"french": "Le froid de cette nuit... rend même la respiration difficile.",
						"spanish": "El frío de esta noche... hace difícil incluso respirar.",
						"vietnamese": "Cái lạnh của đêm nay... khó thở quá.",
						"thai": "ความหนาวเย็นของคืนนี้... หายใจยังยากเลย",
						"hindi": "इस रात की ठंड... सांस लेना भी मुश्किल है।"
					},
					"emotion": "sad",
					"speaker": "frost"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"speaker": "frost",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "frost",
					"content": {
						"korean": "왕이여, 그 떨림은… 위엄으로는 가려지지 않습니다.",
						"english": "Your Majesty, that tremor... cannot be concealed by dignity.",
						"japanese": "王よ、その震えは… 威厳では隠しきれません。",
						"chinese": "国王陛下，那颤抖……是威严无法掩盖的。",
						"french": "Votre Majesté, ce tremblement... ne peut être dissimulé par la dignité.",
						"spanish": "Majestad, ese temblor... no puede ocultarse con dignidad.",
						"vietnamese": "Tâu Bệ hạ, sự run rẩy đó... không thể che giấu bằng uy nghiêm đâu ạ.",
						"thai": "ฝ่าบาท ความสั่นเทานั้น...ไม่อาจปกปิดด้วยศักดิ์ศรีได้",
						"hindi": "महाराज, वह कंपकंपी... गरिमा से छिपाई नहीं जा सकती।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "닥쳐라! 내게 추위 따위는… 없다!",
						"english": "Silence! I feel no cold!",
						"japanese": "黙れ！私に寒さなど…ない！",
						"chinese": "闭嘴！我才没有感到冷！",
						"french": "Silence ! Je n'ai pas froid !",
						"spanish": "¡Cállate! ¡No tengo frío!",
						"vietnamese": "Im đi! Ta không hề lạnh!",
						"thai": "หุบปาก! ข้าไม่รู้สึกหนาวเลย!",
						"hindi": "चुप हो जाओ! मुझे ठंड वंड कुछ नहीं लगती!"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "거짓말. 온몸으로 떨고 있잖아.",
						"english": "A lie. You're trembling all over.",
						"japanese": "嘘だ。全身が震えているじゃないか。",
						"chinese": "谎言。你全身都在颤抖。",
						"french": "Mensonge. Tu trembles de tout ton corps.",
						"spanish": "Mentira. Estás temblando por todo el cuerpo.",
						"vietnamese": "Nói dối. Toàn thân ngươi đang run rẩy kìa.",
						"thai": "โกหก. ตัวสั่นไปทั้งตัวเลยนี่นา",
						"hindi": "झूठ। तुम पूरे शरीर से कांप रहे हो।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "온기를 찾아 헤매는… 저의 오랜 모습과 같군요.",
						"english": "Searching for warmth... it's like my old self.",
						"japanese": "温もりを求めて彷徨う… 私の昔の姿と同じようです。",
						"chinese": "四处寻找温暖… 和我以前的样子很像啊。",
						"french": "Errant à la recherche de chaleur... cela ressemble à mon ancien moi.",
						"spanish": "Deambular en busca de calor... me recuerda a mi antiguo yo.",
						"vietnamese": "Lang thang tìm kiếm hơi ấm... giống hệt dáng vẻ cũ của tôi vậy.",
						"thai": "การเร่ร่อนหาความอบอุ่น... ช่างเหมือนกับตัวฉันในอดีตเลย",
						"hindi": "गर्मी की तलाश में भटकना... यह मेरे पुराने स्वरूप जैसा ही है।"
					},
					"speaker": "frost",
					"type": "speech"
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
					"speaker": "frost",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "이것을… 받으십시오.",
						"english": "Please... accept this.",
						"japanese": "これを… お受け取りください。",
						"chinese": "请… 收下这个。",
						"french": "Veuillez... accepter ceci.",
						"spanish": "Por favor... acepte esto.",
						"vietnamese": "Xin... hãy nhận lấy cái này.",
						"thai": "โปรด… รับสิ่งนี้ไว้",
						"hindi": "कृपया… इसे स्वीकार करें।"
					},
					"emotion": "base",
					"speaker": "frost",
					"type": "speech"
				},
				{
					"type": "direction",
					"action": "focus",
					"speaker": "random_boss",
					"duration_ms": 500
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "이것은… 무엇인가.",
						"english": "What... is this?",
						"japanese": "これは… 何だ。",
						"chinese": "这… 是什么？",
						"french": "Ceci... qu'est-ce que c'est ?",
						"spanish": "¿Qué... es esto?",
						"vietnamese": "Cái này... là gì?",
						"thai": "นี่… คืออะไร",
						"hindi": "यह… क्या है?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "작은 온기입니다. 잠시나마 한기를 녹일 수 있도록.",
						"english": "A small warmth. To melt away the chill, even for a moment.",
						"japanese": "小さな温もりです。束の間でも寒さを溶かせるように。",
						"chinese": "一点小小的温暖。希望能暂时驱散寒意。",
						"french": "Une petite chaleur. Pour dissiper le froid, ne serait-ce que pour un instant.",
						"spanish": "Un pequeño calor. Para derretir el frío, aunque sea por un momento.",
						"vietnamese": "Là một chút hơi ấm nhỏ thôi. Để người có thể tạm thời xua đi cái lạnh.",
						"thai": "ความอบอุ่นเล็กๆ น้อยๆ เพื่อละลายความหนาวเย็นได้ชั่วขณะ",
						"hindi": "एक छोटी सी गर्माहट। ताकि कुछ पल के लिए ठंडक पिघल सके।"
					},
					"speaker": "frost"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "핫팩? 저런 걸 왜 줘.",
						"english": "A hot pack? Why give me something like that?",
						"japanese": "カイロ？ あんなもの、なんでくれるんだ。",
						"chinese": "暖宝宝？为什么要给我这种东西。",
						"french": "Un coussin chauffant ? Pourquoi me donner ça ?",
						"spanish": "¿Un calentador de manos? ¿Por qué me da algo así?",
						"vietnamese": "Túi sưởi? Sao lại cho tôi cái thứ đó.",
						"thai": "ฮอตแพ็ค? ให้ของแบบนั้นทำไมกัน",
						"hindi": "हॉटपैक? ऐसी चीज़ क्यों दे रहे हो?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "…너도, 추위를 아는구나.",
						"english": "...You, too, know the cold.",
						"japanese": "…お前も、寒さを知るのだな。",
						"chinese": "…你，也懂得寒冷啊。",
						"french": "...Toi aussi, tu connais le froid.",
						"spanish": "...Tú también, conoces el frío.",
						"vietnamese": "...Ngươi cũng, biết lạnh sao.",
						"thai": "...เจ้าเองก็รู้ถึงความหนาวเย็นสินะ",
						"hindi": "...तुम भी, ठंड जानते हो।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이런… 하찮은 것에… 내가….",
						"english": "This... a trivial thing... me...",
						"japanese": "こんな… くだらないものに… 私が…。",
						"chinese": "这种… 微不足道的东西… 我竟然…。",
						"french": "Ça... une chose insignifiante... moi...",
						"spanish": "Esto... una cosa insignificante... yo...",
						"vietnamese": "Cái thứ... tầm thường này... ta lại...",
						"thai": "ของ... ไร้สาระแบบนี้... ฉันจะ...",
						"hindi": "यह... एक तुच्छ चीज़... मैं..."
					},
					"speaker": "random_boss"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "frost",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "그 온기가… 잠시라도 왕의 마음을 녹였기를.",
						"english": "May that warmth... have melted the king's heart, even for a moment.",
						"japanese": "その温もりが… 束の間でも王の心を溶かしたのなら。",
						"chinese": "愿那份温暖… 能暂时融化国王的心。",
						"french": "Puisse cette chaleur... avoir fait fondre le cœur du roi, ne serait-ce que pour un instant.",
						"spanish": "Que ese calor... haya derretido el corazón del rey, aunque sea por un momento.",
						"vietnamese": "Mong rằng hơi ấm đó... dù chỉ trong chốc lát cũng đã làm tan chảy trái tim nhà vua.",
						"thai": "หวังว่าความอบอุ่นนั้น… จะละลายหัวใจของราชาได้ชั่วขณะ",
						"hindi": "काश उस गर्माहट ने... पल भर के लिए ही सही, राजा का दिल पिघला दिया होता।"
					},
					"speaker": "frost"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "말도 안 돼… 겨우 이런 조악한…!",
						"english": "Impossible... just this crude...!",
						"japanese": "ありえない… たかがこんな粗悪な…！",
						"chinese": "不可能… 竟然是这种粗糙的…！",
						"french": "Impossible... juste cette chose grossière... !",
						"spanish": "¡Imposible... solo esta cosa tan tosca...!",
						"vietnamese": "Không thể nào... chỉ là thứ thô sơ như thế này...!",
						"thai": "เป็นไปไม่ได้... แค่ของหยาบๆ แบบนี้...!",
						"hindi": "असंभव... बस यह घटिया...!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"emotion": "base",
					"content": {
						"korean": "하지만… 손은 덜 떨리고 있네요.",
						"english": "But… your hands are trembling less now.",
						"japanese": "ですが… 手の震えが少し収まっていますね。",
						"chinese": "但是……您的手不那么颤抖了。",
						"french": "Mais… vos mains tremblent moins, n'est-ce pas ?",
						"spanish": "Pero… sus manos tiemblan menos.",
						"vietnamese": "Nhưng… tay ngài đã bớt run rồi.",
						"thai": "แต่… มือของท่านสั่นน้อยลงแล้ว",
						"hindi": "लेकिन… आपके हाथ अब कम कांप रहे हैं।"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…추위는 내 숙명이다. 누구도 이해할 수 없어.",
						"english": "…Cold is my destiny. No one can understand it.",
						"japanese": "…寒さは私の宿命だ。誰も理解できないだろう。",
						"chinese": "……寒冷是我的宿命。无人能懂。",
						"french": "…Le froid est mon destin. Personne ne peut le comprendre.",
						"spanish": "…El frío es mi destino. Nadie puede entenderlo.",
						"vietnamese": "…Lạnh giá là định mệnh của ta. Không ai có thể hiểu được.",
						"thai": "…ความหนาวเย็นคือชะตากรรมของข้า ไม่มีใครเข้าใจได้",
						"hindi": "…ठंड मेरा भाग्य है। इसे कोई नहीं समझ सकता।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "저 또한 한평생… 이 한기 속에서 살아왔습니다.",
						"english": "I, too, have lived my whole life… in this chill.",
						"japanese": "私もまた、一生涯… この寒気の中で生きてきました。",
						"chinese": "我也一样，一生都……在这寒意中度过。",
						"french": "Moi aussi, j'ai vécu toute ma vie… dans ce froid glacial.",
						"spanish": "Yo también he vivido toda mi vida… en este frío.",
						"vietnamese": "Tôi cũng vậy, cả đời… sống trong giá lạnh này.",
						"thai": "ข้าเองก็เช่นกัน… ใช้ชีวิตทั้งชีวิตอยู่ท่ามกลางความหนาวเหน็บนี้",
						"hindi": "मैंने भी अपनी पूरी ज़िंदगी… इसी ठंड में बिताई है।"
					},
					"emotion": "sad",
					"speaker": "frost",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "온기 따위…! 나의 고독을, 나의 위엄을 부술 수 없다!",
						"english": "Warmth…! It cannot break my solitude, my dignity!",
						"japanese": "温もりなど…！私の孤独を、私の威厳を壊すことはできない！",
						"chinese": "温暖什么的……！无法打破我的孤独，我的尊严！",
						"french": "La chaleur… ! Elle ne peut briser ma solitude, ma dignité !",
						"spanish": "¡El calor…! ¡No puede romper mi soledad, mi dignidad!",
						"vietnamese": "Hơi ấm ư…! Không thể phá vỡ sự cô độc, sự uy nghiêm của ta!",
						"thai": "ความอบอุ่นอะไรนั่น…! มันไม่อาจทำลายความโดดเดี่ยว ศักดิ์ศรีของข้าได้!",
						"hindi": "गर्मी जैसी चीज़…! यह मेरे अकेलेपन, मेरी गरिमा को नहीं तोड़ सकती!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "당신은… 추운 거잖아.",
						"english": "You… are cold, aren't you?",
						"japanese": "あなたは… 寒いのでしょう。",
						"chinese": "你……很冷，对吧。",
						"french": "Vous… avez froid, n'est-ce pas ?",
						"spanish": "Usted… tiene frío, ¿verdad?",
						"vietnamese": "Ngài… đang lạnh mà.",
						"thai": "ท่าน… หนาวใช่ไหมล่ะ",
						"hindi": "आप… ठंडे हैं, है ना?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "쓸데없는 동정은 사양한다. 나의 밤은… 누구도 침범할 수 없어!",
						"english": "I refuse your pointless pity. My night… no one can invade!",
						"japanese": "無駄な同情は断る。私の夜は… 誰も侵すことはできない！",
						"chinese": "我拒绝无谓的同情。我的夜晚……无人能侵犯！",
						"french": "Je refuse votre pitié inutile. Ma nuit… personne ne peut l'envahir !",
						"spanish": "Rechazo su lástima inútil. ¡Mi noche… nadie puede invadirla!",
						"vietnamese": "Ta từ chối sự thương hại vô ích. Đêm của ta… không ai có thể xâm phạm!",
						"thai": "ข้าปฏิเสธความสงสารที่ไร้ประโยชน์ ค่ำคืนของข้า… ไม่มีใครบุกรุกได้!",
						"hindi": "मुझे तुम्हारी व्यर्थ दया नहीं चाहिए। मेरी रात में… कोई घुस नहीं सकता!"
					},
					"speaker": "random_boss"
				},
				{
					"action": "shake",
					"type": "direction",
					"speaker": "narrator",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "왕의 얼어붙은 분노가 알현실을 채웠다.",
						"english": "The king's frozen fury filled the audience chamber.",
						"japanese": "王の凍てつくような怒りが謁見室を満たした。",
						"chinese": "国王冰冷的愤怒充满了谒见室。",
						"french": "La fureur glaciale du roi emplit la salle d'audience.",
						"spanish": "La furia helada del rey llenó la sala de audiencias.",
						"vietnamese": "Cơn giận băng giá của nhà vua tràn ngập phòng tiếp kiến.",
						"thai": "ความโกรธเกรี้ยวอันเยือกแข็งของกษัตริย์แผ่ซ่านไปทั่วท้องพระโรง",
						"hindi": "राजा का जमा हुआ क्रोध श्रोता कक्ष में भर गया।"
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "…결국, 내가… 졌다….",
						"english": "…In the end, I… lost….",
						"japanese": "…結局、私が… 負けた…。",
						"chinese": "……最终，我……输了……。",
						"french": "…Finalement, j'ai… perdu….",
						"spanish": "…Al final, yo… perdí….",
						"vietnamese": "…Cuối cùng, ta… đã thua….",
						"thai": "…ในที่สุด ข้าก็… แพ้….",
						"hindi": "…आखिरकार, मैं… हार गया…।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이 한기는… 사라지지 않아… 절대로….",
						"english": "This chill… won't disappear… Never….",
						"japanese": "この寒気は… 消えない… 決して…。",
						"chinese": "这份寒意……不会消失……绝不……。",
						"french": "Ce froid… ne disparaîtra pas… Jamais….",
						"spanish": "Este frío… no desaparecerá… Nunca….",
						"vietnamese": "Cơn lạnh này… sẽ không biến mất… Tuyệt đối không….",
						"thai": "ความหนาวเหน็บนี้… จะไม่หายไป… ไม่มีทาง….",
						"hindi": "यह ठंड… गायब नहीं होगी… कभी नहीं…।"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아니, 이제 시작이야. 당신의 진짜 밤은.",
						"english": "No, it's just the beginning. Your real night has just begun.",
						"japanese": "いいえ、これからが始まりです。あなたの本当の夜が。",
						"chinese": "不，现在才刚刚开始。你真正的夜晚。",
						"french": "Non, ce n'est que le début. Votre véritable nuit commence maintenant.",
						"spanish": "No, es solo el comienzo. Tu verdadera noche.",
						"vietnamese": "Không, bây giờ mới là bắt đầu. Đêm thật sự của ngài.",
						"thai": "ไม่สิ นี่แค่เริ่มต้น ค่ำคืนที่แท้จริงของท่านกำลังจะเริ่มขึ้น",
						"hindi": "नहीं, यह तो बस शुरुआत है। आपकी असली रात।"
					},
					"emotion": "happy",
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "frost"
				},
				{
					"type": "speech",
					"speaker": "frost",
					"emotion": "base",
					"content": {
						"korean": "이 추위의 근원은… 아직 남아있습니다.",
						"english": "The source of this cold… still remains.",
						"japanese": "この寒気の根源は…まだ残っています。",
						"chinese": "这股寒气的根源…仍在。",
						"french": "La source de ce froid… subsiste toujours.",
						"spanish": "La fuente de este frío… aún persiste.",
						"vietnamese": "Nguồn gốc của cái lạnh này… vẫn còn đó.",
						"thai": "ต้นกำเนิดของความหนาวนี้… ยังคงอยู่",
						"hindi": "इस ठंड का स्रोत… अभी भी मौजूद है।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "왕의 얼어붙은 옥좌. 그 아래, 더 깊은 한기가 기다리고 있었다.",
						"english": "The King's frozen throne. Beneath it, a deeper chill awaited.",
						"japanese": "王の凍てついた玉座。その下には、さらに深い冷気が待ち受けていた。",
						"chinese": "国王的冰封王座。其下，更深的寒气在等待着。",
						"french": "Le trône gelé du Roi. En dessous, un froid plus profond attendait.",
						"spanish": "El trono congelado del Rey. Debajo, un frío más profundo aguardaba.",
						"vietnamese": "Ngai vàng đóng băng của Nhà Vua. Bên dưới, một luồng khí lạnh sâu hơn đang chờ đợi.",
						"thai": "บัลลังก์น้ำแข็งของราชา เบื้องล่างนั้น ความหนาวเย็นที่ลึกกว่ากำลังรออยู่",
						"hindi": "राजा का जमा हुआ सिंहासन। उसके नीचे, एक गहरी ठंड इंतजार कर रही थी।"
					},
					"speaker": "narrator"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "하찮은 온기 따위로… 나를 꺾을 수 없다!",
						"english": "Such trivial warmth… cannot defeat me!",
						"japanese": "取るに足らない温もりなど…私を打ち破ることはできない！",
						"chinese": "区区暖意…无法击败我！",
						"french": "Une chaleur si insignifiante… ne peut me vaincre !",
						"spanish": "¡Una calidez tan insignificante… no puede derrotarme!",
						"vietnamese": "Sự ấm áp tầm thường như vậy… không thể đánh bại ta!",
						"thai": "ความอบอุ่นเล็กน้อยแค่นี้… ไม่อาจโค่นล้มข้าได้!",
						"hindi": "ऐसी तुच्छ गर्मी… मुझे हरा नहीं सकती!"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이번엔 졌지만… 다음엔 아니다.",
						"english": "I lost this time… but not next time.",
						"japanese": "今回は負けたが…次はない。",
						"chinese": "这次虽败…下次不然。",
						"french": "Cette fois j'ai perdu… mais pas la prochaine.",
						"spanish": "Esta vez perdí… pero no la próxima.",
						"vietnamese": "Lần này ta thua… nhưng lần tới thì không.",
						"thai": "ครั้งนี้แพ้… แต่ครั้งหน้าไม่ใช่",
						"hindi": "इस बार मैं हार गया… लेकिन अगली बार नहीं।"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "크크… 너희도 결국… 이 추위를 이겨낼 수 없을 거다.",
						"english": "Heh heh… you too, in the end… won't be able to overcome this cold.",
						"japanese": "クク…お前たちも結局…この寒さを乗り越えることはできないだろう。",
						"chinese": "呵呵…你们最终也…无法战胜这股寒冷。",
						"french": "Hé hé… vous aussi, à la fin… ne pourrez pas vaincre ce froid.",
						"spanish": "Je je… vosotros también, al final… no podréis superar este frío.",
						"vietnamese": "Khà khà… cuối cùng các ngươi cũng… không thể vượt qua được cái lạnh này đâu.",
						"thai": "ฮึ่มๆ… พวกเจ้าเองก็คง… ไม่อาจเอาชนะความหนาวนี้ได้หรอก",
						"hindi": "हहह… तुम भी अंततः… इस ठंड को हरा नहीं पाओगे।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"밤의 알현실. 얼음장 같은 침묵이 내려앉았다.",
			"옥좌의 왕은 담요에 파묻혀 떨고 있었다.",
			"위엄은 허울. 그에게 필요한 건 단 하나의 온기.",
			"누군가, 감히 손을 내밀었다."
		],
		"english": [
			"The night audience chamber. An icy silence descended.",
			"The king on the throne trembled, buried in blankets.",
			"Dignity was a facade. All he needed was a single warmth.",
			"Someone dared to reach out a hand."
		],
		"japanese": [
			"夜の謁見室。氷のような沈黙が降りていた。",
			"玉座の王は毛布に埋もれて震えていた。",
			"威厳は虚飾。彼に必要なのはただ一つの温もり。",
			"誰かが、敢えて手を差し伸べた。"
		],
		"chinese": [
			"夜晚的觐见室。冰冷的寂静笼罩着。",
			"宝座上的国王瑟瑟发抖，埋在毯子里。",
			"威严只是伪装。他需要的只是一丝温暖。",
			"某人，竟敢伸出了手。"
		],
		"french": [
			"La salle d'audience nocturne. Un silence glacial s'abattit.",
			"Le roi sur le trône tremblait, enfoui sous des couvertures.",
			"La dignité n'était qu'une façade. Tout ce dont il avait besoin était une seule chaleur.",
			"Quelqu'un osa tendre la main."
		],
		"spanish": [
			"La sala de audiencias nocturna. Un silencio gélido se cernía.",
			"El rey en el trono temblaba, sepultado en mantas.",
			"La dignidad era una farsa. Todo lo que necesitaba era un solo calor.",
			"Alguien se atrevió a extender una mano."
		],
		"vietnamese": [
			"Phòng yết kiến đêm. Một sự im lặng băng giá bao trùm.",
			"Vua trên ngai run rẩy, vùi mình trong chăn.",
			"Uy nghiêm chỉ là vỏ bọc. Điều ông cần là một hơi ấm duy nhất.",
			"Ai đó, dám đưa tay ra."
		],
		"thai": [
			"ห้องเฝ้าในยามราตรี ความเงียบอันเยือกแข็งปกคลุม",
			"กษัตริย์บนบัลลังก์ตัวสั่นเทา จมอยู่ในผ้าห่ม",
			"ศักดิ์ศรีเป็นเพียงเปลือกนอก สิ่งที่เขาต้องการคือความอบอุ่นเพียงหนึ่งเดียว",
			"ใครบางคน กล้าที่จะยื่นมือออกไป"
		],
		"hindi": [
			"रात्रि का राजमहल। एक बर्फीली चुप्पी छा गई。",
			"सिंहासन पर बैठा राजा, कंबलों में दुबका कांप रहा था।",
			"गरिमा एक दिखावा थी। उसे बस एक गर्माहट चाहिए थी।",
			"किसी ने, हाथ बढ़ाने की हिम्मत की।"
		]
	}
} as const;
