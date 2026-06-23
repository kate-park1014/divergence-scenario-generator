export const scenario_desert_corvus_23_02 = {
	"scenario_id": "desert_corvus_23_02",
	"order": 2,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"khan": {
			"id": "mon_77d18883-7711-4fc4-b04e-7b29652e0ab2",
			"name": {
				"korean": "칸",
				"english": "Khan",
				"japanese": "カーン",
				"chinese": "可汗",
				"french": "Khan",
				"spanish": "Khan",
				"vietnamese": "Khan",
				"thai": "ข่าน",
				"hindi": "खान"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/d2797cf2-a388-4974-97e4-54e6af8a0000/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/9c40ef7d-3388-44dd-29b3-9ba716fe8b00/public"
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
					"content": {
						"korean": "모래바람 속, 거대한 환영이 드리워진 오아시스에 도착했다.",
						"english": "Amidst the sandstorm, we arrived at an oasis shrouded in a colossal illusion.",
						"japanese": "砂嵐の中、巨大な幻影が漂うオアシスに到着した。",
						"chinese": "在沙尘暴中，我们抵达了一座笼罩着巨大幻影的绿洲。",
						"french": "Au milieu de la tempête de sable, nous sommes arrivés à une oasis enveloppée d'une illusion colossale.",
						"spanish": "En medio de la tormenta de arena, llegamos a un oasis envuelto en una ilusión colosal.",
						"vietnamese": "Giữa bão cát, chúng ta đã đến một ốc đảo bị bao phủ bởi ảo ảnh khổng lồ.",
						"thai": "ท่ามกลางพายุทราย เรามาถึงโอเอซิสที่ถูกปกคลุมด้วยภาพลวงตาขนาดมหึมา",
						"hindi": "रेत के तूफान के बीच, हम एक ऐसे नखलिस्तान पर पहुँचे जहाँ एक विशाल भ्रम छाया हुआ था।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "여기가… 환영의 오아시스?",
						"english": "This is... the Oasis of Illusion?",
						"japanese": "ここが… 幻影のオアシス？",
						"chinese": "这里就是……幻影绿洲？",
						"french": "C'est... l'Oasis des Illusions ?",
						"spanish": "¿Aquí es... el Oasis de la Ilusión?",
						"vietnamese": "Đây là… Ốc đảo Ảo ảnh ư?",
						"thai": "ที่นี่คือ… โอเอซิสแห่งภาพลวงตาใช่ไหม",
						"hindi": "यह है... भ्रम का नखलिस्तान?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "khan"
				},
				{
					"type": "speech",
					"speaker": "khan",
					"content": {
						"korean": "이런 곳은 처음인가 보군. 혼자서는 길 잃기 딱 좋아.",
						"english": "Seems like this is your first time in a place like this. You'd get lost easily on your own.",
						"japanese": "こんな場所は初めてのようだな。一人では道に迷うのがオチだ。",
						"chinese": "看来你是第一次来这种地方。一个人很容易迷路的。",
						"french": "On dirait que c'est la première fois que tu viens ici. Tu te perdrais facilement seul.",
						"spanish": "Parece que es tu primera vez en un lugar así. Te perderías fácilmente solo.",
						"vietnamese": "Có vẻ đây là lần đầu cậu đến một nơi như thế này. Một mình rất dễ lạc đường đấy.",
						"thai": "ดูเหมือนนี่จะเป็นครั้งแรกที่นายมาที่แบบนี้ ถ้ามาคนเดียวคงหลงทางได้ง่ายๆ",
						"hindi": "लगता है ऐसी जगह पर तुम पहली बार आए हो। अकेले तो आसानी से भटक जाओगे।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "당신은…?",
						"english": "You are...?",
						"japanese": "あなたは…？",
						"chinese": "你是……？",
						"french": "Vous êtes...?",
						"spanish": "¿Usted es...?",
						"vietnamese": "Anh là…?",
						"thai": "คุณคือ…?",
						"hindi": "तुम कौन हो...?"
					}
				},
				{
					"speaker": "khan",
					"type": "speech",
					"content": {
						"korean": "칸. 베테랑 사막 탐험가다. 뭘 찾고 있는지는 모르겠지만, 도와줄 수는 있지.",
						"english": "Kahn. A veteran desert explorer. I don't know what you're looking for, but I can help.",
						"japanese": "カーンだ。ベテランの砂漠探検家だよ。何を探しているのかは知らないが、手伝ってやることはできる。",
						"chinese": "坎。一位经验丰富的沙漠探险家。我不知道你在找什么，但我可以帮忙。",
						"french": "Kahn. Un explorateur du désert chevronné. Je ne sais pas ce que tu cherches, mais je peux t'aider.",
						"spanish": "Kahn. Un explorador del desierto veterano. No sé qué buscas, pero puedo ayudarte.",
						"vietnamese": "Kahn. Một nhà thám hiểm sa mạc kỳ cựu. Tôi không biết cậu đang tìm gì, nhưng tôi có thể giúp.",
						"thai": "คาห์น นักสำรวจทะเลทรายมากประสบการณ์ ฉันไม่รู้ว่านายกำลังหาอะไรอยู่ แต่ฉันช่วยได้",
						"hindi": "खान। एक अनुभवी रेगिस्तानी खोजकर्ता। मुझे नहीं पता तुम क्या ढूंढ रहे हो, पर मैं मदद कर सकता हूँ।"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "블레이드마스터 길드 때문인가? 그들은 늘 남의 일에 코를 박아대지.",
						"english": "Is it because of the Blademaster Guild? They always meddle in others' affairs.",
						"japanese": "ブレードマスターギルドのせいか？奴らはいつも他人のことに首を突っ込む。",
						"chinese": "是因为刀锋大师公会吗？他们总是爱管闲事。",
						"french": "C'est à cause de la Guilde des Maîtres-Lames ? Ils se mêlent toujours des affaires des autres.",
						"spanish": "¿Es por el Gremio de Maestros de la Espada? Siempre andan metiendo las narices en los asuntos ajenos.",
						"vietnamese": "Có phải do Hội Thợ Rèn không? Bọn họ lúc nào cũng xen vào chuyện của người khác.",
						"thai": "เป็นเพราะกิลด์เบลดมาสเตอร์งั้นรึ? พวกนั้นชอบยุ่งเรื่องของคนอื่นเสมอ",
						"hindi": "क्या यह ब्लेडमास्टर गिल्ड की वजह से है? वे हमेशा दूसरों के मामलों में अपनी नाक घुसेड़ते हैं।"
					},
					"speaker": "khan",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "사라진 탐험대의 흔적을 쫓고 있어.",
						"english": "I'm tracking the lost expedition.",
						"japanese": "消えた探検隊の痕跡を追っている。",
						"chinese": "我正在追寻失踪探险队的踪迹。",
						"french": "Je suis sur les traces de l'expédition disparue.",
						"spanish": "Estoy siguiendo el rastro de la expedición perdida.",
						"vietnamese": "Tôi đang lần theo dấu vết của đoàn thám hiểm đã mất tích.",
						"thai": "ข้ากำลังตามรอยคณะสำรวจที่หายไป",
						"hindi": "मैं लापता अभियान दल के निशानों का पीछा कर रहा हूँ।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…그 탐험대? 코르부스의 정보만 맹신하던 바보들이었지.",
						"english": "...That expedition? They were fools who blindly trusted Corvus's information.",
						"japanese": "…あの探検隊か？コルブスの情報だけを盲信していた愚か者どもだ。",
						"chinese": "……那个探险队？他们是盲目相信科尔武斯情报的傻瓜。",
						"french": "...Cette expédition ? C'étaient des idiots qui ne juraient que par les informations de Corvus.",
						"spanish": "...¿Esa expedición? Eran unos tontos que confiaron ciegamente en la información de Corvus.",
						"vietnamese": "…Đoàn thám hiểm đó à? Bọn họ là những kẻ ngốc chỉ mù quáng tin vào thông tin của Corvus.",
						"thai": "...คณะสำรวจนั่นน่ะเหรอ? พวกโง่ที่เชื่อข้อมูลของคอร์วัสอย่างงมงาย",
						"hindi": "…वह अभियान दल? वे मूर्ख थे जो कॉर्बस की जानकारी पर आँख मूँदकर भरोसा करते थे।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "khan"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "khan",
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "이 오아시스는 환영만 있는 게 아니야. 함정이 더 무섭지.",
						"english": "This oasis isn't just illusions. The traps are scarier.",
						"japanese": "このオアシスは幻影だけじゃない。罠の方がもっと恐ろしい。",
						"chinese": "这个绿洲不只有幻象。陷阱更可怕。",
						"french": "Cette oasis n'est pas faite que d'illusions. Les pièges sont bien plus terrifiants.",
						"spanish": "Este oasis no es solo ilusiones. Las trampas son más aterradoras.",
						"vietnamese": "Ốc đảo này không chỉ có ảo ảnh đâu. Cạm bẫy còn đáng sợ hơn.",
						"thai": "โอเอซิสนี้ไม่ได้มีแค่ภาพลวงตา กับดักต่างหากที่น่ากลัวกว่า",
						"hindi": "इस नखलिस्तान में सिर्फ़ भ्रम ही नहीं हैं। जाल ज़्यादा भयानक हैं।"
					},
					"emotion": "base",
					"speaker": "khan",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "탐험대는 어떻게 됐을까….",
						"english": "What happened to the expedition...?",
						"japanese": "探検隊はどうなっただろう…。",
						"chinese": "探险队怎么样了……。",
						"french": "Qu'est-il arrivé à l'expédition...?",
						"spanish": "¿Qué habrá pasado con la expedición...?",
						"vietnamese": "Đoàn thám hiểm đã gặp chuyện gì rồi nhỉ...?",
						"thai": "คณะสำรวจเป็นยังไงบ้างนะ...",
						"hindi": "अभियान दल का क्या हुआ होगा...?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "khan",
					"emotion": "base",
					"content": {
						"korean": "코르부스는 미리 경고했어. 너무 깊이 들어가지 말라고.",
						"english": "Corvus warned them in advance. Not to go too deep.",
						"japanese": "コルブスは前もって警告したんだ。深入りするなと。",
						"chinese": "科尔武斯事先警告过。不要深入。",
						"french": "Corvus les avait prévenus. De ne pas s'aventurer trop loin.",
						"spanish": "Corvus les advirtió de antemano. Que no se adentraran demasiado.",
						"vietnamese": "Corvus đã cảnh báo trước rồi. Đừng đi quá sâu.",
						"thai": "คอร์วัสเตือนล่วงหน้าแล้ว ว่าอย่าเข้าไปลึกเกินไป",
						"hindi": "कॉर्बस ने पहले ही चेतावनी दी थी। ज़्यादा अंदर न जाने की।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"emotion": "base",
					"content": {
						"korean": "그럼에도 그들은 갔다는 건가?",
						"english": "And yet they still went?",
						"japanese": "それでも奴らは行ったと？",
						"chinese": "尽管如此他们还是去了吗？",
						"french": "Et malgré ça, ils y sont allés ?",
						"spanish": "¿Y aun así fueron?",
						"vietnamese": "Vậy mà họ vẫn đi sao?",
						"thai": "กระนั้นพวกเขาก็ยังไปงั้นหรือ?",
						"hindi": "फिर भी वे गए?"
					}
				},
				{
					"content": {
						"korean": "호기심이 과했어. 특히 그 대장이라는 자가 그랬지.",
						"english": "Their curiosity got the better of them. Especially their leader.",
						"japanese": "好奇心が過ぎたんだ。特にあの隊長という者がな。",
						"chinese": "好奇心太重了。尤其是那个所谓的队长。",
						"french": "Leur curiosité était trop grande. Surtout celle de leur capitaine.",
						"spanish": "Su curiosidad fue excesiva. Especialmente la de su capitán.",
						"vietnamese": "Sự tò mò của họ quá lớn. Đặc biệt là tên đội trưởng đó.",
						"thai": "ความอยากรู้อยากเห็นของพวกเขามากเกินไป โดยเฉพาะหัวหน้าคณะนั่น",
						"hindi": "उनकी जिज्ञासा बहुत ज़्यादा थी। ख़ासकर उस तथाकथित कप्तान की।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "khan"
				},
				{
					"content": {
						"korean": "…당신은 모든 걸 다 아는 것 같군.",
						"english": "...You seem to know everything.",
						"japanese": "…あなたは全てを知っているようだね。",
						"chinese": "……你好像什么都知道。",
						"french": "...On dirait que vous savez tout.",
						"spanish": "...Parece que lo sabes todo.",
						"vietnamese": "...Có vẻ như anh biết hết mọi chuyện.",
						"thai": "...ท่านดูเหมือนจะรู้ทุกสิ่งทุกอย่าง",
						"hindi": "…लगता है तुम सब कुछ जानते हो।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 사막에서 오래 살았거든. 정보는 곧 생존이니까.",
						"english": "I've lived in this desert a long time. Information is survival, after all.",
						"japanese": "この砂漠で長く生きてきたからな。情報は生存に直結するからだ。",
						"chinese": "我在这片沙漠生活了很久。因为信息就是生存。",
						"french": "J'ai vécu longtemps dans ce désert. L'information est synonyme de survie.",
						"spanish": "He vivido mucho tiempo en este desierto. La información es la clave de la supervivencia.",
						"vietnamese": "Ta đã sống ở sa mạc này lâu rồi. Vì thông tin chính là sự sống còn.",
						"thai": "ข้าอยู่ที่ทะเลทรายนี้มานานแล้ว เพราะข้อมูลคือการอยู่รอด",
						"hindi": "मैं इस रेगिस्तान में लंबे समय से रह रहा हूँ। क्योंकि जानकारी ही अस्तित्व है।"
					},
					"emotion": "base",
					"speaker": "khan",
					"type": "speech"
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
						2
					],
					"type": "direction",
					"action": "enter",
					"speaker": "khan"
				},
				{
					"type": "speech",
					"speaker": "khan",
					"content": {
						"korean": "여기서부턴 더 위험해. 환영이 더 교묘해지거든.",
						"english": "It gets more dangerous from here. The illusions become more deceptive.",
						"japanese": "ここからはもっと危険だ。幻影がさらに巧妙になるからね。",
						"chinese": "从这里开始会更危险。幻象会变得更加狡猾。",
						"french": "C'est plus dangereux à partir d'ici. Les illusions deviennent plus trompeuses.",
						"spanish": "Desde aquí es más peligroso. Las ilusiones se vuelven más sutiles.",
						"vietnamese": "Từ đây sẽ nguy hiểm hơn. Ảo ảnh trở nên xảo quyệt hơn.",
						"thai": "จากตรงนี้อันตรายกว่าเดิม ภาพลวงตาจะซับซ้อนขึ้น",
						"hindi": "यहां से और खतरनाक है। भ्रम और भी कपटी होते जाते हैं।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "진짜 길은 어디지?",
						"english": "Where is the true path?",
						"japanese": "本当の道はどこだ？",
						"chinese": "真正的路在哪里？",
						"french": "Où est le vrai chemin ?",
						"spanish": "¿Dónde está el verdadero camino?",
						"vietnamese": "Con đường thật ở đâu?",
						"thai": "เส้นทางที่แท้จริงอยู่ไหน?",
						"hindi": "सच्चा रास्ता कहाँ है?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "khan",
					"emotion": "base",
					"content": {
						"korean": "진실은 환영 속에 숨어있지. 때론 보이는 것이 전부가 아니야.",
						"english": "The truth is hidden within illusions. Sometimes, what you see isn't everything.",
						"japanese": "真実は幻影の中に隠されている。時に、見えるものが全てではない。",
						"chinese": "真相隐藏在幻象之中。有时，眼见并非为实。",
						"french": "La vérité est cachée dans les illusions. Parfois, ce que l'on voit n'est pas tout.",
						"spanish": "La verdad está oculta en las ilusiones. A veces, lo que ves no es todo.",
						"vietnamese": "Sự thật ẩn giấu trong ảo ảnh. Đôi khi, những gì bạn thấy không phải là tất cả.",
						"thai": "ความจริงซ่อนอยู่ในภาพลวงตา บางครั้งสิ่งที่เห็นไม่ใช่ทั้งหมด",
						"hindi": "सच्चाई भ्रम में छिपी है। कभी-कभी, जो दिखता है वह सब नहीं होता।"
					}
				},
				{
					"content": {
						"korean": "모래바람 너머, 차가운 금속음이 희미하게 들려왔다. 알 수 없는 속삭임과 함께.",
						"english": "Beyond the sandstorm, a faint, cold metallic clang echoed, accompanied by unknown whispers.",
						"japanese": "砂嵐の向こうから、冷たい金属音がかすかに響いてきた。未知の囁きと共に。",
						"chinese": "沙尘暴之外，隐约传来冰冷的金属声，伴随着未知的低语。",
						"french": "Au-delà de la tempête de sable, un faible tintement métallique et froid résonna, accompagné de murmures inconnus.",
						"spanish": "Más allá de la tormenta de arena, un tenue y frío sonido metálico resonó, acompañado de susurros desconocidos.",
						"vietnamese": "Ngoài cơn bão cát, một tiếng kim loại lạnh lẽo vang vọng yếu ớt, kèm theo những lời thì thầm không rõ.",
						"thai": "เลยพายุทรายไป เสียงโลหะเย็นยะเยือกแว่วมา พร้อมกับเสียงกระซิบที่ไม่รู้จัก",
						"hindi": "रेत के तूफान के उस पार, एक हल्की, ठंडी धातु की खड़खड़ाहट गूंज उठी, अज्ञात फुसफुसाहटों के साथ।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…방금 무슨 소리였지?",
						"english": "...What was that sound just now?",
						"japanese": "…今の音は何だった？",
						"chinese": "…刚才那是什么声音？",
						"french": "...Quel était ce bruit ?",
						"spanish": "¿...Qué fue ese ruido?",
						"vietnamese": "...Vừa rồi là tiếng gì vậy?",
						"thai": "...เมื่อกี้เสียงอะไร?",
						"hindi": "...अभी वह कैसी आवाज़ थी?"
					},
					"speaker": "character_2",
					"type": "speech"
				},
				{
					"speaker": "khan",
					"type": "speech",
					"content": {
						"korean": "착각일 거야. 이 오아시스에선 흔한 일이지.",
						"english": "It must be an illusion. It's common in this oasis.",
						"japanese": "気のせいだろう。このオアシスではよくあることだ。",
						"chinese": "那一定是幻觉。在这个绿洲里很常见。",
						"french": "Ce doit être une illusion. C'est courant dans cette oasis.",
						"spanish": "Debe ser una ilusión. Es común en este oasis.",
						"vietnamese": "Chắc là ảo giác thôi. Điều này thường xảy ra ở ốc đảo này.",
						"thai": "คงเป็นแค่ภาพลวงตา เรื่องธรรมดาในโอเอซิสแห่งนี้",
						"hindi": "यह एक भ्रम होगा। इस नखलिस्तान में यह आम बात है।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "당신은 코르부스와 아는 사이인가?",
						"english": "Do you know Corvus?",
						"japanese": "あなたはコルヴスを知っているか？",
						"chinese": "你认识科尔武斯吗？",
						"french": "Connaissez-vous Corvus ?",
						"spanish": "¿Conoces a Corvus?",
						"vietnamese": "Bạn có quen Corvus không?",
						"thai": "คุณรู้จักคอร์วัสหรือเปล่า?",
						"hindi": "क्या आप कोर्वस को जानते हैं?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "거래를 해봤을 뿐. 그는 쓸모 있는 정보를 주지. 블레이드마스터 길드와는 다르게.",
						"english": "We've only done business. He provides useful information, unlike the Blademaster Guild.",
						"japanese": "取引をしただけだ。彼は役立つ情報を提供してくれる、ブレードマスターギルドとは違ってね。",
						"chinese": "我们只是做过交易。他提供有用的信息，不像刀锋大师公会。",
						"french": "Nous n'avons fait que des affaires. Il fournit des informations utiles, contrairement à la Guilde des Maîtres-Lames.",
						"spanish": "Solo hemos hecho negocios. Él proporciona información útil, a diferencia del Gremio de Maestros de la Hoja.",
						"vietnamese": "Chỉ là giao dịch thôi. Hắn cung cấp thông tin hữu ích, không giống như Hiệp hội Kiếm Sư.",
						"thai": "แค่ทำการค้ากันเท่านั้น เขาให้ข้อมูลที่เป็นประโยชน์ ไม่เหมือนกิลด์เบลดมาสเตอร์",
						"hindi": "हमने सिर्फ व्यापार किया है। वह उपयोगी जानकारी देता है, ब्लेडमास्टर गिल्ड के विपरीत।"
					},
					"type": "speech",
					"speaker": "khan"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "khan",
					"action": "enter",
					"type": "direction",
					"spot": [
						1,
						2
					],
					"duration_ms": 500
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "더 이상 가면 안 돼. 너희도 그 탐험대처럼 될 거야.",
						"english": "You can't go any further. You'll end up like that expedition team.",
						"japanese": "これ以上進んではいけない。お前たちもあの探検隊のようになるぞ。",
						"chinese": "不能再往前走了。你们也会和那支探险队一样。",
						"french": "Vous ne pouvez pas aller plus loin. Vous finirez comme cette équipe d'expédition.",
						"spanish": "No puedes ir más lejos. Terminarás como ese equipo de expedición.",
						"vietnamese": "Không thể đi xa hơn được nữa. Các ngươi sẽ kết cục giống như đội thám hiểm đó.",
						"thai": "ไปต่อไม่ได้แล้ว พวกเจ้าจะลงเอยเหมือนกับทีมสำรวจนั่น",
						"hindi": "आप और आगे नहीं जा सकते। आप भी उस अभियान दल की तरह हो जाएंगे।"
					},
					"speaker": "khan",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "멈출 수 없어. 진실을 알아야만 해.",
						"english": "I can't stop. I must know the truth.",
						"japanese": "止まれない。真実を知らなければならない。",
						"chinese": "我不能停下来。我必须知道真相。",
						"french": "Je ne peux pas m'arrêter. Je dois connaître la vérité.",
						"spanish": "No puedo detenerme. Debo saber la verdad.",
						"vietnamese": "Tôi không thể dừng lại. Tôi phải biết sự thật.",
						"thai": "ฉันหยุดไม่ได้ ฉันต้องรู้ความจริง",
						"hindi": "मैं रुक नहीं सकता। मुझे सच्चाई जाननी होगी।"
					},
					"emotion": "base"
				},
				{
					"speaker": "khan",
					"type": "speech",
					"content": {
						"korean": "진실? 아니, 너희는 누군가의 계획 속에 놀아나는 거야. 코르부스는 그걸 알았고.",
						"english": "Truth? No, you're just pawns in someone's plan. Corvus knew that.",
						"japanese": "真実？違う、お前たちは誰かの計画で踊らされているだけだ。コルブスはそれを知っていた。",
						"chinese": "真相？不，你们只是某人计划中的棋子。科尔布斯知道这一点。",
						"french": "La vérité ? Non, vous n'êtes que des pions dans le plan de quelqu'un. Corvus le savait.",
						"spanish": "¿La verdad? No, solo sois peones en el plan de alguien. Corvus lo sabía.",
						"vietnamese": "Sự thật ư? Không, các ngươi chỉ là những con tốt trong kế hoạch của ai đó. Corvus đã biết điều đó.",
						"thai": "ความจริงงั้นหรือ? ไม่หรอก พวกเจ้าเป็นแค่เบี้ยในแผนการของใครบางคนต่างหาก คอร์วัสรู้เรื่องนั้นดี",
						"hindi": "सच? नहीं, तुम सब किसी की योजना के मोहरे हो। कॉर्बस यह जानता था।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…설마 당신도 그 계획의 일부인가?",
						"english": "...Surely you're not part of that plan too?",
						"japanese": "…まさか、あなたもその計画の一部なのか？",
						"chinese": "...难道你也是那个计划的一部分？",
						"french": "...Seriez-vous aussi partie de ce plan ?",
						"spanish": "...¿Acaso tú también eres parte de ese plan?",
						"vietnamese": "...Chẳng lẽ ngươi cũng là một phần của kế hoạch đó?",
						"thai": "...หรือว่าท่านก็เป็นส่วนหนึ่งของแผนการนั้นด้วย?",
						"hindi": "...कहीं तुम भी उस योजना का हिस्सा तो नहीं?"
					},
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "나는 그저 살아남았을 뿐. 이 사막에선 그게 가장 중요하지.",
						"english": "I merely survived. In this desert, that's what matters most.",
						"japanese": "私はただ生き残っただけだ。この砂漠ではそれが最も重要だ。",
						"chinese": "我只是幸存了下来。在这片沙漠中，那才是最重要的。",
						"french": "J'ai juste survécu. Dans ce désert, c'est le plus important.",
						"spanish": "Simplemente sobreviví. En este desierto, eso es lo más importante.",
						"vietnamese": "Ta chỉ đơn thuần là kẻ sống sót. Ở sa mạc này, đó là điều quan trọng nhất.",
						"thai": "ข้าแค่รอดชีวิตมาได้ ในทะเลทรายนี้ นั่นคือสิ่งสำคัญที่สุด",
						"hindi": "मैं बस जीवित रहा। इस रेगिस्तान में, यही सबसे महत्वपूर्ण है।"
					},
					"speaker": "khan",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이제 더 이상 당신 말을 믿을 수 없어.",
						"english": "I can't trust your words anymore.",
						"japanese": "もうあなたの言葉を信じることはできない。",
						"chinese": "我再也不能相信你的话了。",
						"french": "Je ne peux plus croire tes paroles.",
						"spanish": "Ya no puedo confiar en tus palabras.",
						"vietnamese": "Ta không thể tin lời ngươi được nữa.",
						"thai": "ข้าไม่อาจเชื่อคำพูดของท่านได้อีกแล้ว",
						"hindi": "मैं अब तुम्हारी बातों पर भरोसा नहीं कर सकता।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"direction": "down",
					"speaker": "khan",
					"type": "direction",
					"action": "exit",
					"duration_ms": 400
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "칸의 뒷모습이 환영처럼 사라졌다. 오아시스의 깊은 곳에서 거대한 기운이 느껴졌다.",
						"english": "Khan's figure vanished like a mirage. A colossal energy emanated from deep within the oasis.",
						"japanese": "カーンの後ろ姿が幻影のように消えた。オアシスの深部から巨大な気配が感じられた。",
						"chinese": "汗的背影如幻影般消失了。一股巨大的气息从绿洲深处传来。",
						"french": "La silhouette de Khan disparut comme un mirage. Une énergie colossale émanait des profondeurs de l'oasis.",
						"spanish": "La figura de Khan se desvaneció como un espejismo. Una energía colosal emanaba de lo profundo del oasis.",
						"vietnamese": "Bóng lưng của Khan biến mất như ảo ảnh. Một nguồn năng lượng khổng lồ toát ra từ sâu trong ốc đảo.",
						"thai": "ร่างของข่านหายไปราวกับภาพลวงตา สัมผัสได้ถึงพลังมหาศาลจากส่วนลึกของโอเอซิส",
						"hindi": "खान की आकृति मृगतृष्णा की तरह गायब हो गई। नखलिस्तान के भीतर गहराई से एक विशाल ऊर्जा निकली।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "환영은 현실이 되어 모든 것을 집어삼켰다.",
						"english": "The illusion became reality and consumed everything.",
						"japanese": "幻影は現実となり、全てを飲み込んだ。",
						"chinese": "幻象变成了现实，吞噬了一切。",
						"french": "L'illusion est devenue réalité et a tout englouti.",
						"spanish": "La ilusión se hizo realidad y lo consumió todo.",
						"vietnamese": "Ảo ảnh trở thành hiện thực và nuốt chửng mọi thứ.",
						"thai": "ภาพลวงตากลายเป็นความจริงและกลืนกินทุกสิ่ง.",
						"hindi": "भ्रम वास्तविकता बन गया और सब कुछ निगल गया।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "네가 좇는 것은 환상일 뿐. 영원히 이 오아시스에 갇혀라.",
						"english": "What you chase is merely an illusion. Be trapped forever in this oasis.",
						"japanese": "お前が追うものはただの幻想。永遠にこのオアシスに囚われるがいい。",
						"chinese": "你所追逐的只是幻象。永远被困在这片绿洲吧。",
						"french": "Ce que tu poursuis n'est qu'une illusion. Sois piégé à jamais dans cette oasis.",
						"spanish": "Lo que persigues es solo una ilusión. Quédate atrapado para siempre en este oasis.",
						"vietnamese": "Thứ ngươi theo đuổi chỉ là ảo ảnh. Hãy bị mắc kẹt vĩnh viễn trong ốc đảo này.",
						"thai": "สิ่งที่คุณไล่ตามเป็นเพียงภาพลวงตา จงติดอยู่ในโอเอซิสนี้ตลอดไป.",
						"hindi": "तुम जिसका पीछा कर रहे हो वह केवल एक भ्रम है। इस नखलिस्तान में हमेशा के लिए फंसे रहो।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "…아니, 아직 끝나지 않았어. 나는 포기하지 않아!",
						"english": "...No, it's not over yet. I won't give up!",
						"japanese": "...いや、まだ終わってない。私は諦めない！",
						"chinese": "...不，还没结束。我不会放弃的！",
						"french": "...Non, ce n'est pas encore fini. Je n'abandonnerai pas !",
						"spanish": "...No, aún no ha terminado. ¡No me rendiré!",
						"vietnamese": "...Không, vẫn chưa kết thúc. Ta sẽ không từ bỏ!",
						"thai": "...ไม่ ยังไม่จบ ฉันจะไม่ยอมแพ้!",
						"hindi": "...नहीं, यह अभी खत्म नहीं हुआ है। मैं हार नहीं मानूंगा!"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "환영의 중심, 거대한 모래 폭풍이 회오리쳤다. 그 안에서 정체 모를 그림자가 모습을 드러냈다.",
						"english": "At the heart of the illusion, a colossal sandstorm swirled. Within it, an unknown shadow revealed itself.",
						"japanese": "幻影の中心、巨大な砂嵐が渦巻いていた。その中から、正体不明の影が現れた。",
						"chinese": "幻象的中心，巨大的沙尘暴呼啸着。一个不明身份的影子在其中显现。",
						"french": "Au cœur de l'illusion, une tempête de sable colossale tourbillonnait. À l'intérieur, une ombre inconnue se révéla.",
						"spanish": "En el corazón de la ilusión, una colosal tormenta de arena se arremolinaba. Dentro, una sombra desconocida se reveló.",
						"vietnamese": "Tại trung tâm ảo ảnh, một cơn bão cát khổng lồ cuộn xoáy. Bên trong, một bóng đen không rõ danh tính đã xuất hiện.",
						"thai": "ใจกลางภาพลวงตา พายุทรายขนาดมหึมาหมุนวนอยู่ เงาลึกลับปรากฏขึ้นจากภายใน",
						"hindi": "भ्रम के केंद्र में, एक विशाल रेत का तूफान घूम रहा था। उसके भीतर, एक अज्ञात छाया प्रकट हुई।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "어리석은 자들. 진실을 좇는다는 건, 스스로를 함정에 가두는 것.",
						"english": "Fools. To chase the truth is to trap yourselves.",
						"japanese": "愚かな者たちめ。真実を追うとは、自らを罠にはめることだ。",
						"chinese": "愚蠢的家伙。追逐真相，就是把自己困入陷阱。",
						"french": "Fous. Courir après la vérité, c'est se piéger soi-même.",
						"spanish": "Necios. Perseguir la verdad es encerrarse en una trampa.",
						"vietnamese": "Những kẻ ngu ngốc. Đuổi theo sự thật là tự nhốt mình vào bẫy.",
						"thai": "พวกโง่เขลา การแสวงหาความจริงคือการขังตัวเองในกับดัก",
						"hindi": "मूर्ख। सच का पीछा करना, खुद को जाल में फंसाना है।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "누구냐! 사라진 탐험대는 어디에 있지?",
						"english": "Who are you! Where is the lost expedition?",
						"japanese": "何者だ！消えた探検隊はどこだ？",
						"chinese": "你是谁！失踪的探险队在哪里？",
						"french": "Qui es-tu ! Où est l'expédition disparue ?",
						"spanish": "¡Quién eres! ¿Dónde está la expedición perdida?",
						"vietnamese": "Ngươi là ai! Đoàn thám hiểm mất tích ở đâu?",
						"thai": "เจ้าเป็นใคร! คณะสำรวจที่หายไปอยู่ที่ไหน?",
						"hindi": "तुम कौन हो! लापता अभियान दल कहाँ है?"
					},
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "그들은 환영 속에서 영원한 휴식을 찾았다. 너희도 곧 그렇게 될 것이다.",
						"english": "They found eternal rest within the illusion. You too shall soon follow.",
						"japanese": "彼らは幻影の中で永遠の休息を見つけた。お前たちもじきそうなるだろう。",
						"chinese": "他们在幻象中找到了永恒的安息。你们很快也会如此。",
						"french": "Ils ont trouvé le repos éternel au sein de l'illusion. Vous aussi, vous les suivrez bientôt.",
						"spanish": "Encontraron el descanso eterno dentro de la ilusión. Vosotros también los seguiréis pronto.",
						"vietnamese": "Họ đã tìm thấy sự an nghỉ vĩnh hằng trong ảo ảnh. Các ngươi cũng sẽ sớm như vậy thôi.",
						"thai": "พวกเขาพบการพักผ่อนชั่วนิรันดร์ในภาพลวงตา พวกเจ้าก็จะตามไปในไม่ช้า",
						"hindi": "उन्हें भ्रम में शाश्वत विश्राम मिला। तुम भी जल्द ही वैसे ही होगे।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "헛소리 마라. 진실은 반드시 드러날 테니까!",
						"english": "Don't talk nonsense. The truth will surely be revealed!",
						"japanese": "たわごとを言うな。真実は必ず明らかになる！",
						"chinese": "别胡说八道。真相终将大白！",
						"french": "Ne dis pas de bêtises. La vérité sera inévitablement révélée !",
						"spanish": "No digas tonterías. ¡La verdad saldrá a la luz!",
						"vietnamese": "Đừng nói nhảm. Sự thật nhất định sẽ được phơi bày!",
						"thai": "อย่าพูดเหลวไหล! ความจริงจะต้องเปิดเผยออกมาอย่างแน่นอน!",
						"hindi": "बकवास मत करो। सच ज़रूर सामने आएगा!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…겨우 하나의 환영을 깼을 뿐. 진실은 더 깊은 곳에…",
						"english": "...Only one illusion broken. The truth lies deeper...",
						"japanese": "...たった一つの幻影を破っただけ。真実はもっと奥深くに...",
						"chinese": "...仅仅打破了一个幻象。真相在更深处...",
						"french": "...Une seule illusion brisée. La vérité est plus profonde...",
						"spanish": "...Solo una ilusión rota. La verdad yace más profundo...",
						"vietnamese": "...Chỉ phá vỡ một ảo ảnh. Sự thật nằm sâu hơn...",
						"thai": "...แค่ทำลายภาพลวงตาเดียว ความจริงอยู่ลึกกว่านั้น...",
						"hindi": "...केवल एक भ्रम टूटा। सत्य गहरा है..."
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "모래는 모든 것을 기억하고, 또 모든 것을 지워낸다…",
						"english": "The sand remembers everything, and erases everything...",
						"japanese": "砂は全てを記憶し、そして全てを消し去る...",
						"chinese": "沙子记住了所有，也抹去了一切...",
						"french": "Le sable se souvient de tout, et efface tout...",
						"spanish": "La arena lo recuerda todo, y lo borra todo...",
						"vietnamese": "Cát nhớ mọi thứ, và xóa đi mọi thứ...",
						"thai": "ผืนทรายจดจำทุกสิ่ง และลบเลือนทุกสิ่ง...",
						"hindi": "रेत सब कुछ याद रखती है, और सब कुछ मिटा देती है..."
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "…아직 멀었어. 진짜 배후를 찾아야 해.",
						"english": "...Not yet. I must find the true mastermind.",
						"japanese": "...まだまだだ。本当の黒幕を見つけなければ。",
						"chinese": "...还没完。必须找到真正的幕后黑手。",
						"french": "...Pas encore. Je dois trouver le vrai cerveau.",
						"spanish": "...Aún no. Debo encontrar al verdadero cerebro.",
						"vietnamese": "...Chưa xong. Phải tìm ra kẻ chủ mưu thực sự.",
						"thai": "...ยังไม่ถึงเวลา ฉันต้องหาผู้อยู่เบื้องหลังตัวจริง.",
						"hindi": "...अभी नहीं। मुझे असली मास्टरमाइंड को खोजना होगा।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "환영의 오아시스는 잠잠해졌다. 그러나 사막의 속삭임은 멈추지 않았다.",
						"english": "The Oasis of Illusions has quieted. But the desert's whispers have not ceased.",
						"japanese": "幻影のオアシスは静まった。しかし砂漠のささやきは止まない。",
						"chinese": "幻象绿洲平静了。但沙漠的低语并未停止。",
						"french": "L'Oasis des Illusions s'est tue. Mais les murmures du désert n'ont pas cessé.",
						"spanish": "El Oasis de las Ilusiones se ha calmado. Pero los susurros del desierto no han cesado.",
						"vietnamese": "Ốc đảo Ảo ảnh đã yên tĩnh. Nhưng tiếng thì thầm của sa mạc vẫn không ngừng.",
						"thai": "โอเอซิสแห่งภาพลวงตาเงียบลงแล้ว แต่เสียงกระซิบของทะเลทรายยังคงอยู่.",
						"hindi": "भ्रम का नखलिस्तान शांत हो गया है। लेकिन रेगिस्तान की फुसफुसाहट बंद नहीं हुई है।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "어딘가에서, 고대 지식의 전당이 주인공을 기다리고 있었다.",
						"english": "Somewhere, the Hall of Ancient Knowledge awaited the protagonist.",
						"japanese": "どこかで、古の知識の殿堂が主人公を待っていた。",
						"chinese": "在某个地方，古代知识殿堂等待着主人公。",
						"french": "Quelque part, le Hall du Savoir Ancien attendait le protagoniste.",
						"spanish": "En algún lugar, el Salón del Conocimiento Antiguo esperaba al protagonista.",
						"vietnamese": "Ở đâu đó, Đại sảnh Kiến thức Cổ đại đang chờ đợi nhân vật chính.",
						"thai": "ที่ไหนสักแห่ง โถงแห่งความรู้โบราณกำลังรอคอยตัวเอกอยู่.",
						"hindi": "कहीं, प्राचीन ज्ञान का हॉल नायक का इंतजार कर रहा था।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"모래바람이 모든 흔적을 지웠다.",
			"환영의 오아시스. 이곳에 이르면 진실조차 신기루가 된다.",
			"사라진 탐험대. 그리고 그들을 쫓는 자.",
			"사막은 모든 것을 삼키고, 동시에 모든 것을 왜곡한다.",
			"과연 누구를 믿어야 하는가."
		],
		"english": [
			"The sandstorm erased all traces.",
			"The Oasis of Illusion. Here, even truth becomes a mirage.",
			"The vanished expedition. And the one who pursues them.",
			"The desert devours everything, and at the same time, distorts everything.",
			"Indeed, who should one trust?"
		],
		"japanese": [
			"砂嵐がすべての痕跡を消し去った。",
			"幻影のオアシス。ここにたどり着けば、真実すら蜃気楼となる。",
			"消えた探検隊。そして、彼らを追う者。",
			"砂漠はすべてを飲み込み、同時にすべてを歪める。",
			"果たして、誰を信じるべきか。"
		],
		"chinese": [
			"沙尘暴抹去了一切痕迹。",
			"幻影绿洲。抵达此处，连真实都化为海市蜃楼。",
			"消失的探险队。以及追逐他们的人。",
			"沙漠吞噬一切，同时扭曲一切。",
			"究竟该相信谁？"
		],
		"french": [
			"La tempête de sable a effacé toutes les traces.",
			"L'Oasis des Illusions. Ici, même la vérité devient un mirage.",
			"L'expédition disparue. Et celui qui les poursuit.",
			"Le désert dévore tout, et en même temps, déforme tout.",
			"En vérité, qui faut-il croire ?"
		],
		"spanish": [
			"La tormenta de arena borró todo rastro.",
			"El Oasis de la Ilusión. Aquí, incluso la verdad se convierte en un espejismo.",
			"La expedición desaparecida. Y quien los persigue.",
			"El desierto lo devora todo y, al mismo tiempo, lo distorsiona todo.",
			"¿A quién se debe creer realmente?"
		],
		"vietnamese": [
			"Cơn bão cát đã xóa sạch mọi dấu vết.",
			"Ốc đảo Ảo ảnh. Đến nơi đây, ngay cả sự thật cũng hóa thành ảo ảnh.",
			"Đoàn thám hiểm mất tích. Và kẻ truy đuổi họ.",
			"Sa mạc nuốt chửng mọi thứ, đồng thời bóp méo tất cả.",
			"Rốt cuộc, nên tin ai đây?"
		],
		"thai": [
			"พายุทรายลบเลือนทุกร่องรอย",
			"โอเอซิสแห่งภาพลวงตา ณ ที่แห่งนี้ แม้แต่ความจริงก็กลายเป็นภาพลวงตา",
			"คณะสำรวจที่หายสาบสูญ และผู้ที่ติดตามพวกเขา",
			"ทะเลทรายกลืนกินทุกสิ่ง และในขณะเดียวกันก็บิดเบือนทุกสิ่ง",
			"แท้จริงแล้ว ควรเชื่อใจใครกันแน่"
		],
		"hindi": [
			"रेत के तूफान ने सारे निशान मिटा दिए।",
			"भ्रम का नखलिस्तान। यहाँ तक कि सत्य भी एक मृगतृष्णा बन जाता है।",
			"लुप्त अभियान दल। और उनका पीछा करने वाला।",
			"रेगिस्तान सब कुछ निगल जाता है, और साथ ही, सब कुछ विकृत कर देता है।",
			"आखिर किस पर भरोसा किया जाए?"
		]
	}
} as const;
