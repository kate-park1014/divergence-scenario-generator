export const scenario_snowy_fluffbeard_83_02 = {
	"scenario_id": "snowy_fluffbeard_83_02",
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
					"type": "speech",
					"content": {
						"korean": "차디찬 얼음 동굴. 바람조차 얼어붙는 곳.",
						"english": "A frigid ice cave. A place where even the wind freezes.",
						"japanese": "身を切るような氷の洞窟。風さえ凍りつく場所。",
						"chinese": "冰冷刺骨的冰洞。连风都会冻结的地方。",
						"french": "Une grotte de glace glaciale. Un lieu où même le vent gèle.",
						"spanish": "Una cueva de hielo gélida. Un lugar donde incluso el viento se congela.",
						"vietnamese": "Hang băng lạnh giá. Nơi ngay cả gió cũng đóng băng.",
						"thai": "ถ้ำน้ำแข็งอันเยือกเย็น สถานที่ที่แม้แต่ลมก็ยังแข็งตัว",
						"hindi": "एक बर्फीली गुफा। एक ऐसी जगह जहां हवा भी जम जाती है।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "여기가 그 소문의 얼음 동굴….",
						"english": "So this is the fabled ice cave…",
						"japanese": "ここが噂の氷の洞窟か…。",
						"chinese": "这里就是传闻中的冰洞吗……",
						"french": "C'est donc ici la grotte de glace légendaire…",
						"spanish": "Así que esta es la cueva de hielo de la que se rumorea…",
						"vietnamese": "Đây chính là hang băng trong lời đồn sao…",
						"thai": "ที่นี่คือถ้ำน้ำแข็งในตำนานสินะ...",
						"hindi": "तो यह वही अफवाहों वाली बर्फीली गुफा है..."
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"spot": [
						4,
						3
					],
					"speaker": "ivar",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "흐음. 별거 없군. 또 헛소문인가.",
						"english": "Hmm. Nothing much. Just another baseless rumor?",
						"japanese": "ふむ。大したことないな。またガセか。",
						"chinese": "嗯。没什么特别的。又是空穴来风吗？",
						"french": "Hmm. Rien d'exceptionnel. Encore une fausse rumeur ?",
						"spanish": "Mmm. Nada del otro mundo. ¿Otra falsa alarma?",
						"vietnamese": "Hừm. Không có gì đặc biệt. Lại là tin đồn nhảm sao?",
						"thai": "หืม. ไม่มีอะไรพิเศษนี่นา แค่ข่าวลือไร้สาระอีกแล้วหรือ?",
						"hindi": "हम्म। कुछ खास नहीं। एक और झूठी अफवाह?"
					},
					"emotion": "base",
					"speaker": "ivar"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그래도… 왠지 모르게 불길해.",
						"english": "Still... I feel an odd foreboding.",
						"japanese": "それでも…なんだか不吉な予感がする。",
						"chinese": "即便如此……总觉得有些不祥。",
						"french": "Pourtant... je ressens un étrange pressentiment.",
						"spanish": "Aun así... siento un extraño presagio.",
						"vietnamese": "Dù vậy… có gì đó không lành.",
						"thai": "ถึงกระนั้น... ก็ยังรู้สึกไม่สบายใจอย่างประหลาด",
						"hindi": "फिर भी... मुझे अजीब सी अनहोनी महसूस हो रही है।"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "ivar",
					"type": "direction",
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "이런 어둠 속에서 귀신이라도 나올 줄 알았나?",
						"english": "Did you expect a ghost to emerge from such darkness?",
						"japanese": "こんな闇の中から幽霊でも出てくると思ったか？",
						"chinese": "你以为这种黑暗中会冒出鬼怪吗？",
						"french": "Pensais-tu qu'un fantôme surgirait de ces ténèbres ?",
						"spanish": "¿Esperabas que un fantasma saliera de tanta oscuridad?",
						"vietnamese": "Ngươi nghĩ sẽ có ma quỷ xuất hiện từ bóng tối này sao?",
						"thai": "เจ้าคิดว่าจะมีผีออกมาจากความมืดมิดเช่นนี้หรือ?",
						"hindi": "क्या तुम्हें लगा कि ऐसे अंधेरे में से कोई भूत निकलेगा?"
					},
					"emotion": "happy"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "아니. 하지만… 이상한 소리가 들려.",
						"english": "No. But... I hear strange sounds.",
						"japanese": "いや。だが…奇妙な音が聞こえる。",
						"chinese": "不。但是……我听到奇怪的声音。",
						"french": "Non. Mais... j'entends des bruits étranges.",
						"spanish": "No. Pero... oigo sonidos extraños.",
						"vietnamese": "Không. Nhưng… ta nghe thấy âm thanh lạ.",
						"thai": "ไม่ แต่... ฉันได้ยินเสียงแปลก ๆ",
						"hindi": "नहीं। लेकिन... मुझे अजीब आवाज़ें सुनाई दे रही हैं।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "착각이겠지. 동굴은 원래 시끄러운 법.",
						"english": "Must be my imagination. Caves are always noisy.",
						"japanese": "気のせいか。洞窟は元々うるさいものだ。",
						"chinese": "错觉吧。洞穴本来就很吵。",
						"french": "Mon imagination, sans doute. Les grottes sont toujours bruyantes.",
						"spanish": "Debe ser mi imaginación. Las cuevas siempre son ruidosas.",
						"vietnamese": "Chắc là ảo giác thôi. Hang động vốn dĩ ồn ào mà.",
						"thai": "คงคิดไปเอง ถ้ำก็เสียงดังเป็นปกติอยู่แล้ว",
						"hindi": "शायद मेरा वहम है। गुफाएं हमेशा शोरगुल वाली होती हैं।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "어둠 속에서 무언가 움직이는 그림자. 이바르는 보지 못했다.",
						"english": "A shadow moved in the darkness. Ivar didn't see it.",
						"japanese": "闇の中で何かが動く影。イーヴァルは気づかなかった。",
						"chinese": "黑暗中有什么东西在移动。伊瓦尔没有看到。",
						"french": "Une ombre bougea dans l'obscurité. Ivar ne l'a pas vue.",
						"spanish": "Una sombra se movió en la oscuridad. Ivar no la vio.",
						"vietnamese": "Một bóng đen di chuyển trong bóng tối. Ivar không hề thấy.",
						"thai": "เงาบางอย่างเคลื่อนไหวในความมืด อิวาร์มองไม่เห็น",
						"hindi": "अंधेरे में कोई परछाई हिली। इवर ने नहीं देखा।"
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "ivar",
					"type": "direction",
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "고대의 전사가 얼음에 갇혀 저주받았다는 소문… 혹시 진짜일까?",
						"english": "The rumor of an ancient warrior cursed and trapped in ice... could it be true?",
						"japanese": "古代の戦士が氷に囚われ、呪われたという噂…まさか本当なのか？",
						"chinese": "古代战士被困在冰中并被诅咒的传闻…会是真的吗？",
						"french": "La rumeur d'un ancien guerrier maudit et piégé dans la glace... serait-elle vraie ?",
						"spanish": "El rumor de un antiguo guerrero maldito y atrapado en el hielo... ¿podría ser cierto?",
						"vietnamese": "Tin đồn về chiến binh cổ đại bị nguyền rủa và mắc kẹt trong băng… liệu có thật không?",
						"thai": "ข่าวลือเรื่องนักรบโบราณถูกสาปและติดอยู่ในน้ำแข็ง… มันจริงหรือเปล่า?",
						"hindi": "एक प्राचीन योद्धा के बर्फ में फंसकर शापित होने की अफवाह... क्या यह सच हो सकती है?"
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "하! 그런 시시한 이야기에 얽매일 만큼 내가 약하다고 생각하나?",
						"english": "Ha! Do you think I'm weak enough to be bothered by such trivial tales?",
						"japanese": "ハッ！そんなつまらない話に縛られるほど、俺が弱いとでも思うのか？",
						"chinese": "哈！你以为我会因为这种无聊的故事而动摇吗？",
						"french": "Ha ! Tu penses que je suis assez faible pour me laisser entraver par de telles histoires insignifiantes ?",
						"spanish": "¡Ja! ¿Crees que soy tan débil como para dejarme influir por cuentos tan triviales?",
						"vietnamese": "Hả! Ngươi nghĩ ta yếu đuối đến mức bị những câu chuyện tầm thường đó ràng buộc sao?",
						"thai": "ฮ่า! เจ้าคิดว่าข้าอ่อนแอพอที่จะถูกผูกมัดด้วยเรื่องไร้สาระพวกนั้นหรือ?",
						"hindi": "हा! क्या तुम्हें लगता है कि मैं इतनी कमज़ोर हूँ कि ऐसी तुच्छ कहानियों से परेशान हो जाऊँ?"
					},
					"emotion": "angry",
					"speaker": "ivar",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…당신도 강함을 좇잖아.",
						"english": "...But you also pursue strength.",
						"japanese": "…あなたも強さを追い求めている。",
						"chinese": "…你也在追求强大。",
						"french": "...Mais tu recherches aussi la force.",
						"spanish": "...Pero tú también persigues la fuerza.",
						"vietnamese": "...Nhưng ngươi cũng theo đuổi sức mạnh mà.",
						"thai": "...แต่ท่านก็แสวงหาความแข็งแกร่งไม่ใช่หรือ?",
						"hindi": "...पर तुम भी ताकत के पीछे भागते हो।"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "그래. 그래서 직접 확인하는 거다. 강함의 끝이 무엇인지.",
						"english": "Indeed. That's why I'm verifying it myself. To see what the limits of strength are.",
						"japanese": "そうだ。だからこそ、この目で確かめる。強さの果てに何があるのかを。",
						"chinese": "没错。所以我亲自去确认。看看力量的尽头是什么。",
						"french": "En effet. C'est pourquoi je le vérifie moi-même. Pour voir quelle est la limite de la force.",
						"spanish": "Exacto. Por eso lo compruebo yo mismo. Para ver cuál es el límite de la fuerza.",
						"vietnamese": "Đúng vậy. Bởi thế nên ta mới đích thân đi xác nhận. Để xem giới hạn của sức mạnh là gì.",
						"thai": "ใช่แล้ว นั่นคือเหตุผลที่ข้าต้องไปพิสูจน์ด้วยตัวเอง เพื่อดูว่าจุดสิ้นสุดของความแข็งแกร่งคืออะไร",
						"hindi": "हाँ। इसीलिए मैं खुद इसकी पुष्टि कर रहा हूँ। यह देखने के लिए कि ताकत की हद क्या है।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						4,
						2
					],
					"speaker": "ivar",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "동굴 깊은 곳, 기묘하게 빛나는 에메랄드빛 얼음 조각들이 나타났다.",
						"english": "Deep within the cave, strangely glowing emerald ice shards appeared.",
						"japanese": "洞窟の奥深く、奇妙なエメラルド色の氷の破片が現れた。",
						"chinese": "在洞穴深处，出现了奇异的翡翠色发光冰块。",
						"french": "Au fond de la grotte, d'étranges éclats de glace émeraude luminescents sont apparus.",
						"spanish": "En lo profundo de la cueva, aparecieron extraños fragmentos de hielo esmeralda que brillaban.",
						"vietnamese": "Sâu trong hang động, những mảnh băng màu ngọc lục bảo phát sáng kỳ lạ xuất hiện.",
						"thai": "ลึกเข้าไปในถ้ำ มีเกล็ดน้ำแข็งสีมรกตเรืองแสงแปลกๆ ปรากฏขึ้น",
						"hindi": "गुफा की गहराई में, अजीब तरह से चमकते हुए पन्ना रंग के बर्फ के टुकड़े दिखाई दिए।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이 얼음… 뭔가 달라.",
						"english": "This ice... it's different.",
						"japanese": "この氷…何か違う。",
						"chinese": "这冰…有点不一样。",
						"french": "Cette glace... est différente.",
						"spanish": "Este hielo... es diferente.",
						"vietnamese": "Băng này… có gì đó khác lạ.",
						"thai": "น้ำแข็งนี่… มันแปลกไป",
						"hindi": "यह बर्फ... कुछ अलग है।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…그래. 이 얼음이… 뭔가 홀리는 것 같군.",
						"english": "...Yes. This ice... it feels enchanting.",
						"japanese": "…そうだ。この氷が…何かを惑わせるようだ。",
						"chinese": "…没错。这冰…好像有什么迷惑人的东西。",
						"french": "...Oui. Cette glace... semble envoûtante.",
						"spanish": "...Sí. Este hielo... parece hechizante.",
						"vietnamese": "...Đúng vậy. Tảng băng này… hình như có gì đó mê hoặc.",
						"thai": "...ใช่แล้ว น้ำแข็งนี่... มันดูน่าหลงใหล",
						"hindi": "...हाँ। यह बर्फ... कुछ मोहक लगती है।"
					},
					"emotion": "base",
					"speaker": "ivar",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이곳에… 누가 있는 것 같아.",
						"english": "It feels like... someone is here.",
						"japanese": "ここに…誰かがいるようだ。",
						"chinese": "这里…好像有人。",
						"french": "Il me semble que... quelqu'un est ici.",
						"spanish": "Parece que... hay alguien aquí.",
						"vietnamese": "Hình như… có ai đó ở đây.",
						"thai": "รู้สึกเหมือน... มีใครบางคนอยู่ที่นี่",
						"hindi": "ऐसा लगता है कि... यहाँ कोई है।"
					},
					"emotion": "sad",
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						3
					],
					"speaker": "ivar"
				},
				{
					"type": "speech",
					"content": {
						"korean": "크아아악…! 이것은… 시작에 불과하다…!",
						"english": "Nghaaah...! This is... merely the beginning...!",
						"japanese": "うわあああ…！これは…始まりに過ぎない…！",
						"chinese": "呃啊啊啊…！这不过是…开始罢了…！",
						"french": "Aaaargh...! Ce n'est... qu'un début...!",
						"spanish": "¡Aaaargh...! ¡Esto es... solo el principio...!",
						"vietnamese": "Khụaaahh…! Đây… chỉ là khởi đầu thôi…!",
						"thai": "กรี๊ดดด…! นี่มัน… เป็นแค่จุดเริ่มต้นเท่านั้น…!",
						"hindi": "आऽऽऽह...! यह तो... बस शुरुआत है...!"
					},
					"emotion": "sad",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "끝이 아니라고…?",
						"english": "It's not over...?",
						"japanese": "終わりではないと…？",
						"chinese": "还没结束吗…？",
						"french": "Ce n'est pas fini...?",
						"spanish": "¿No ha terminado...?",
						"vietnamese": "Chưa kết thúc sao…?",
						"thai": "ยังไม่จบอีกรึ…?",
						"hindi": "ख़त्म नहीं हुआ...?"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "흥. 나의 강함은 아직 이 정도가 끝이 아니다.",
						"english": "Hmph. My strength doesn't end here.",
						"japanese": "ふん。私の強さはまだこの程度で終わらない。",
						"chinese": "哼。我的强大还远不止于此。",
						"french": "Hmph. Ma force ne s'arrête pas là.",
						"spanish": "Hmph. Mi fuerza no termina aquí.",
						"vietnamese": "Hừ. Sức mạnh của ta vẫn chưa dừng lại ở mức này.",
						"thai": "หึ. ความแข็งแกร่งของข้ายังไม่สิ้นสุดแค่นี้หรอกนะ",
						"hindi": "हम्फ़। मेरी ताकत अभी यहीं ख़त्म नहीं होती।"
					},
					"emotion": "base",
					"speaker": "ivar"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "에메랄드빛 얼음 조각들이 더욱 선명하게 빛났다. 그 안에서 무언가가 깨어나고 있었다.",
						"english": "The emerald ice shards shone even brighter. Something was awakening within them.",
						"japanese": "エメラルド色の氷の破片がさらに鮮明に輝いた。その中で何かが目覚めようとしていた。",
						"chinese": "翠绿的冰晶碎片闪耀得更加明亮。有什么东西正在其中苏醒。",
						"french": "Les éclats de glace émeraude brillaient encore plus clairement. Quelque chose s'éveillait en leur sein.",
						"spanish": "Los fragmentos de hielo esmeralda brillaron aún más intensamente. Algo estaba despertando dentro de ellos.",
						"vietnamese": "Những mảnh băng ngọc lục bảo phát sáng rực rỡ hơn. Có thứ gì đó đang thức tỉnh bên trong.",
						"thai": "เศษน้ำแข็งสีมรกตส่องประกายชัดเจนยิ่งขึ้น มีบางสิ่งกำลังตื่นขึ้นภายในนั้น",
						"hindi": "पन्ने की तरह बर्फ़ के टुकड़े और तेज़ चमकने लगे। उनके अंदर कुछ जाग रहा था।"
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "ivar",
					"spot": [
						3,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 것들… 감히 나의 잠을 방해하다니.",
						"english": "Foolish mortals... How dare you disturb my slumber.",
						"japanese": "愚かな奴らめ…よくも私の眠りを妨げたな。",
						"chinese": "愚蠢的家伙们…竟敢打扰我的沉睡。",
						"french": "Stupides créatures... Comment osez-vous troubler mon sommeil.",
						"spanish": "Estúpidos... ¿Cómo osáis perturbar mi sueño?",
						"vietnamese": "Những kẻ ngu ngốc… Dám cả gan quấy rầy giấc ngủ của ta.",
						"thai": "พวกโง่เง่า… กล้าดียังไงถึงมารบกวนการหลับใหลของข้า",
						"hindi": "मूर्खों... तुम्हारी हिम्मत कैसे हुई मेरी नींद तोड़ने की।"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "크으… 강함의 끝은 아직 멀었군.",
						"english": "Ugh... The peak of strength is still far off.",
						"japanese": "くぅ…強さの果てはまだ遠いな。",
						"chinese": "呃…力量的极致还远未达到。",
						"french": "Ugh... Le sommet de la force est encore loin.",
						"spanish": "Ugh... El límite de la fuerza aún está lejos.",
						"vietnamese": "Khừ… Đỉnh cao của sức mạnh vẫn còn xa lắm.",
						"thai": "อื้อ… จุดสูงสุดของความแข็งแกร่งยังอีกยาวไกลสินะ",
						"hindi": "उह्ह्ह्ह... ताकत की पराकाष्ठा अभी बहुत दूर है।"
					},
					"emotion": "sad",
					"speaker": "ivar",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…다시 온다. 반드시.",
						"english": "...I'll be back. Definitely.",
						"japanese": "…また来る。必ず。",
						"chinese": "…我还会回来的。一定。",
						"french": "…Je reviendrai. Sûrement.",
						"spanish": "…Volveré. Sin falta.",
						"vietnamese": "…Ta sẽ trở lại. Chắc chắn.",
						"thai": "…จะกลับมาใหม่. แน่นอน.",
						"hindi": "…मैं वापस आऊंगा। ज़रूर।"
					},
					"emotion": "angry"
				}
			],
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "ivar",
					"type": "direction",
					"spot": [
						2,
						3
					]
				},
				{
					"content": {
						"korean": "크으으… 이곳에 감히 침입하다니….",
						"english": "Ugh... How dare you intrude upon this place...?",
						"japanese": "くぅぅぅ…よくもここまで侵入してきたな…。",
						"chinese": "呃啊啊…竟敢闯入此处…",
						"french": "Grrr... Comment oses-tu t'introduire ici...?",
						"spanish": "¿Cómo osas invadir este lugar...?",
						"vietnamese": "Khừừừ… Dám cả gan xâm nhập vào nơi này sao…?",
						"thai": "อื้อออ… กล้าดียังไงถึงบุกรุกมาที่นี่…",
						"hindi": "उह्ह्ह्ह... तुम्हारी हिम्मत कैसे हुई यहां घुसने की...?"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "네가… 이 모든 소문의 근원인가.",
						"english": "So you... are the source of all these rumors.",
						"japanese": "お前が…この全ての噂の根源か。",
						"chinese": "你就是…所有传闻的根源吗？",
						"french": "C'est donc toi... la source de toutes ces rumeurs.",
						"spanish": "Así que tú... eres la fuente de todos estos rumores.",
						"vietnamese": "Ngươi… là nguồn gốc của tất cả những lời đồn này sao?",
						"thai": "เจ้าคือ… ต้นตอของข่าวลือทั้งหมดนี่สินะ",
						"hindi": "तो तुम ही... इन सारी अफ़वाहों का स्रोत हो।"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이것이… 강함의 끝인가? 덤벼라, {random_boss}!",
						"english": "Is this... the peak of strength? Come at me, {random_boss}!",
						"japanese": "これが…強さの果てか？かかってこい、{random_boss}！",
						"chinese": "这就是…力量的极致吗？放马过来吧，{random_boss}！",
						"french": "Est-ce là... l'apogée de la force ? Viens te battre, {random_boss} !",
						"spanish": "¿Es esto... el límite de la fuerza? ¡Atácame, {random_boss}!",
						"vietnamese": "Đây… là đỉnh cao của sức mạnh sao? Xông lên đi, {random_boss}!",
						"thai": "นี่คือ… สุดยอดแห่งความแข็งแกร่งงั้นรึ? เข้ามาเลย, {random_boss}!",
						"hindi": "क्या यही... ताकत की पराकाष्ठा है? आओ, {random_boss}!"
					},
					"emotion": "angry",
					"speaker": "ivar",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "건방진 것들….",
						"english": "Insolent fools...",
						"japanese": "図々しい奴らめ…。",
						"chinese": "狂妄之徒…",
						"french": "Insolents...",
						"spanish": "Insolentes...",
						"vietnamese": "Những kẻ xấc xược…",
						"thai": "พวกบังอาจ…",
						"hindi": "गुस्ताख़ों..."
					},
					"emotion": "angry"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"고요한 설원, 얼음 동굴 깊은 곳.",
			"소문은 현실이 되고, 망자들이 깨어난다.",
			"강함의 끝을 찾아온 전사, 이바르.",
			"그는 이 얼음 속 그림자 앞에서 무엇을 볼 것인가?"
		],
		"english": [
			"A silent snowfield, deep within an ice cave.",
			"Rumors become reality, the dead awaken.",
			"Ivar, the warrior who sought the peak of strength.",
			"What will he behold before the shadows in the ice?"
		],
		"japanese": [
			"静寂な雪原、氷の洞窟の奥深く。",
			"噂は現実となり、亡者たちが目覚める。",
			"強さの果てを求めてきた戦士、イヴァル。",
			"彼はこの氷の影の前で何を見るのか？"
		],
		"chinese": [
			"寂静的雪原，冰洞深处。",
			"谣言成真，亡者苏醒。",
			"寻求力量极致的战士，伊瓦尔。",
			"在这冰中之影面前，他将看到什么？"
		],
		"french": [
			"Un champ de neige silencieux, au plus profond d'une grotte de glace.",
			"Les rumeurs deviennent réalité, les morts se réveillent.",
			"Ivar, le guerrier venu chercher la limite de la force.",
			"Que verra-t-il devant ces ombres dans la glace ?"
		],
		"spanish": [
			"Una llanura nevada silenciosa, en lo profundo de una cueva de hielo.",
			"Los rumores se hacen realidad, los muertos despiertan.",
			"Ivar, el guerrero que buscó el límite de la fuerza.",
			"¿Qué verá ante estas sombras en el hielo?"
		],
		"vietnamese": [
			"Bãi tuyết tĩnh mịch, sâu trong hang băng.",
			"Lời đồn thành sự thật, người chết thức tỉnh.",
			"Ivar, chiến binh tìm kiếm giới hạn của sức mạnh.",
			"Trước những bóng hình trong băng này, anh ta sẽ thấy gì?"
		],
		"thai": [
			"ทุ่งหิมะอันเงียบงัน ลึกเข้าไปในถ้ำน้ำแข็ง",
			"ข่าวลือกลายเป็นความจริง เหล่าผู้ตายตื่นขึ้น",
			"ไอวาร์ นักรบผู้แสวงหาจุดสูงสุดแห่งความแข็งแกร่ง",
			"เขาจะได้เห็นอะไรเบื้องหน้าเงามืดในน้ำแข็งนี้?"
		],
		"hindi": [
			"शांत बर्फीला मैदान, बर्फीली गुफा की गहराई में।",
			"अफवाहें हकीकत बनती हैं, मृत जाग उठते हैं।",
			"इवर, वह योद्धा जो शक्ति की चरम सीमा खोजने आया था।",
			"इस बर्फ़ीली परछाई के सामने वह क्या देखेगा?"
		]
	}
} as const;
